/**
 * SAP2000 .s2k File Parser
 * Converts SAP2000 text model files into awatif mesh data.
 *
 * Supported sections:
 *   SYSTEM (units, DOF), JOINT (coordinates), RESTRAINT,
 *   MATERIAL, FRAME SECTION, SHELL SECTION,
 *   FRAME (line elements), SHELL (area elements),
 *   LOAD (nodal forces, uniform pressure)
 */
import type { Node, Element, NodeInputs, ElementInputs, SectionShape } from "awatif-fem";

export interface S2kModel {
  units: { force: string; length: string };
  dof: string; // e.g. "UX,UY,UZ,RX,RY,RZ"
  materials: Map<string, { E: number; nu: number; density?: number; fy?: number }>;
  frameSections: Map<string, { material: string; D: number; B: number; TF: number; TW: number }>;
  shellSections: Map<string, { material: string; type: string; thickness: number }>;
  nodes: Node[];
  nodeNames: string[];
  nodeNameToIdx: Map<string, number>;
  elements: Element[];
  elementNames: string[];
  elementSections: Map<number, string>;
  nodeInputs: NodeInputs;
  elementInputs: ElementInputs;
  sectionShapes: Map<number, SectionShape>;
  info: { nNodes: number; nFrames: number; nShells: number; title: string };
}

function parseNum(s: string | undefined): number {
  if (!s) return 0;
  return parseFloat(s) || 0;
}

/** Extract value after KEY= from a token like "X=-3" */
function extractKV(tokens: string[], key: string): string | undefined {
  for (const t of tokens) {
    const eq = t.indexOf("=");
    if (eq > 0 && t.substring(0, eq).toUpperCase() === key.toUpperCase()) {
      return t.substring(eq + 1);
    }
  }
  return undefined;
}

export function parseS2k(text: string): S2kModel {
  const lines = text.split(/\r?\n/);

  // State
  const units = { force: "KN", length: "m" };
  let dof = "UX,UY,UZ,RX,RY,RZ";
  const materials = new Map<string, { E: number; nu: number; density?: number; fy?: number }>();
  const frameSections = new Map<string, { material: string; D: number; B: number; TF: number; TW: number }>();
  const shellSections = new Map<string, { material: string; type: string; thickness: number }>();
  const joints = new Map<string, [number, number, number]>(); // name → [x,y,z]
  const frameConns: { name: string; j1: string; j2: string; sec: string }[] = [];
  const shellConns: { name: string; joints: string[]; sec: string }[] = [];
  const restraints = new Map<string, boolean[]>(); // jointName → [ux,uy,uz,rx,ry,rz]
  const loads: { joint: string; ux: number; uy: number; uz: number; mx: number; my: number; mz: number }[] = [];

  let currentSection = "";
  let currentMaterial = "";
  let currentShellSec = "";
  let currentFrameSec = "";
  let inLoadBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const trimmed = raw.trim();
    if (!trimmed || trimmed.startsWith(";")) continue;

    // Section headers (no indentation = new section)
    if (!raw.startsWith(" ") && !raw.startsWith("\t")) {
      const upper = trimmed.toUpperCase();
      if (upper === "END") break;
      currentSection = upper.split(/\s+/)[0];
      // Handle multi-word sections
      if (upper.startsWith("SHELL SECTION")) currentSection = "SHELL SECTION";
      else if (upper.startsWith("FRAME SECTION")) currentSection = "FRAME SECTION";
      inLoadBlock = false;
      continue;
    }

    const tokens = trimmed.split(/\s+/);

    switch (currentSection) {
      case "SYSTEM": {
        const dofVal = extractKV(tokens, "DOF");
        if (dofVal) dof = dofVal;
        const lenVal = extractKV(tokens, "LENGTH");
        if (lenVal) units.length = lenVal;
        const forceVal = extractKV(tokens, "FORCE");
        if (forceVal) units.force = forceVal;
        break;
      }

      case "JOINT": {
        // e.g. "1  X=-3  Y=-2  Z=0"
        const name = tokens[0];
        const x = parseNum(extractKV(tokens, "X"));
        const y = parseNum(extractKV(tokens, "Y"));
        const z = parseNum(extractKV(tokens, "Z"));
        joints.set(name, [x, y, z]);
        break;
      }

      case "RESTRAINT": {
        // e.g. "ADD=1  DOF=U3,R1,R2"
        const addVal = extractKV(tokens, "ADD");
        const dofVal = extractKV(tokens, "DOF");
        if (addVal && dofVal) {
          const dofs = dofVal.split(",");
          const r: boolean[] = [false, false, false, false, false, false];
          for (const d of dofs) {
            const du = d.toUpperCase();
            if (du === "UX" || du === "U1") r[0] = true;
            if (du === "UY" || du === "U2") r[1] = true;
            if (du === "UZ" || du === "U3") r[2] = true;
            if (du === "RX" || du === "R1") r[3] = true;
            if (du === "RY" || du === "R2") r[4] = true;
            if (du === "RZ" || du === "R3") r[5] = true;
          }
          restraints.set(addVal, r);
        }
        break;
      }

      case "MATERIAL": {
        // "NAME=CONC  IDES=C" → new material header
        const nameVal = extractKV(tokens, "NAME");
        if (nameVal) {
          currentMaterial = nameVal;
          materials.set(nameVal, { E: 0, nu: 0 });
        } else if (currentMaterial) {
          // Continuation: "T=0  E=3.5E+07  U=.15  A=.0000099"
          const mat = materials.get(currentMaterial)!;
          const eVal = extractKV(tokens, "E");
          if (eVal) mat.E = parseNum(eVal);
          const uVal = extractKV(tokens, "U");
          if (uVal) mat.nu = parseNum(uVal);
          const mVal = extractKV(tokens, "M");
          if (mVal) mat.density = parseNum(mVal);
          const fyVal = extractKV(tokens, "FY");
          if (fyVal) mat.fy = parseNum(fyVal);
        }
        break;
      }

      case "SHELL": {
        // Check if it's "SHELL SECTION" subsection — handled separately
        if (trimmed.toUpperCase().startsWith("SECTION")) break;
        // "1  J=1,6,2,7  SEC=SSEC1"
        const name = tokens[0];
        const jVal = extractKV(tokens, "J");
        const secVal = extractKV(tokens, "SEC");
        if (jVal) {
          const jNames = jVal.split(",");
          shellConns.push({ name, joints: jNames, sec: secVal || "" });
        }
        break;
      }

      case "SHELL SECTION": {
        // "NAME=SSEC1  MAT=CONC  TYPE=Plate,Thin  TH=.1"
        const nameVal = extractKV(tokens, "NAME");
        const matVal = extractKV(tokens, "MAT");
        const typeVal = extractKV(tokens, "TYPE");
        const thVal = extractKV(tokens, "TH");
        if (nameVal) {
          shellSections.set(nameVal, {
            material: matVal || "",
            type: typeVal || "Shell",
            thickness: parseNum(thVal),
          });
        }
        break;
      }

      case "FRAME": {
        // "1  J=1,2  SEC=FSEC1"
        if (trimmed.toUpperCase().startsWith("SECTION")) break;
        const name = tokens[0];
        const jVal = extractKV(tokens, "J");
        const secVal = extractKV(tokens, "SEC");
        if (jVal) {
          const jNames = jVal.split(",");
          if (jNames.length >= 2) {
            frameConns.push({ name, j1: jNames[0], j2: jNames[1], sec: secVal || "" });
          }
        }
        break;
      }

      case "FRAME SECTION": {
        const nameVal = extractKV(tokens, "NAME");
        if (nameVal) {
          currentFrameSec = nameVal;
          const matVal = extractKV(tokens, "MAT");
          frameSections.set(nameVal, {
            material: matVal || "",
            D: parseNum(extractKV(tokens, "D")),
            B: parseNum(extractKV(tokens, "B")),
            TF: parseNum(extractKV(tokens, "TF")),
            TW: parseNum(extractKV(tokens, "TW")),
          });
        } else if (currentFrameSec) {
          // Continuation line
          const sec = frameSections.get(currentFrameSec)!;
          const dVal = extractKV(tokens, "D");
          if (dVal) sec.D = parseNum(dVal);
          const bVal = extractKV(tokens, "B");
          if (bVal) sec.B = parseNum(bVal);
        }
        break;
      }

      case "LOAD": {
        // "NAME=LOAD1  CSYS=0" → new load case
        const nameVal = extractKV(tokens, "NAME");
        if (nameVal) { inLoadBlock = true; break; }
        if (!inLoadBlock) break;
        // "ADD=1  UZ=-10"
        const addVal = extractKV(tokens, "ADD");
        if (addVal) {
          loads.push({
            joint: addVal,
            ux: parseNum(extractKV(tokens, "UX")),
            uy: parseNum(extractKV(tokens, "UY")),
            uz: parseNum(extractKV(tokens, "UZ")),
            mx: parseNum(extractKV(tokens, "MX")),
            my: parseNum(extractKV(tokens, "MY")),
            mz: parseNum(extractKV(tokens, "MZ")),
          });
        }
        break;
      }
    }
  }

  // ═══════ Build awatif arrays ═══════
  const nodeNames: string[] = [];
  const nodeNameToIdx = new Map<string, number>();
  const nodesArr: Node[] = [];

  for (const [name, coords] of joints) {
    const idx = nodesArr.length;
    nodeNames.push(name);
    nodeNameToIdx.set(name, idx);
    nodesArr.push(coords);
  }

  const elements: Element[] = [];
  const elementNames: string[] = [];
  const elementSections = new Map<number, string>();

  // Frames
  for (const fc of frameConns) {
    const i1 = nodeNameToIdx.get(fc.j1);
    const i2 = nodeNameToIdx.get(fc.j2);
    if (i1 !== undefined && i2 !== undefined) {
      const idx = elements.length;
      elements.push([i1, i2]);
      elementNames.push(fc.name);
      if (fc.sec) elementSections.set(idx, fc.sec);
    }
  }

  const nFrames = elements.length;

  // Shells
  for (const sc of shellConns) {
    const indices = sc.joints.map(j => nodeNameToIdx.get(j)).filter(x => x !== undefined) as number[];
    if (indices.length >= 3) {
      const idx = elements.length;
      elements.push(indices);
      elementNames.push(sc.name);
      if (sc.sec) elementSections.set(idx, sc.sec);
    }
  }

  const nShells = elements.length - nFrames;

  // ═══════ Build ElementInputs ═══════
  const ei: ElementInputs = {
    elasticities: new Map(),
    shearModuli: new Map(),
    areas: new Map(),
    momentsOfInertiaZ: new Map(),
    momentsOfInertiaY: new Map(),
    torsionalConstants: new Map(),
    densities: new Map(),
    thicknesses: new Map(),
    poissonsRatios: new Map(),
  };

  const sectionShapes = new Map<number, SectionShape>();

  for (let i = 0; i < elements.length; i++) {
    const secName = elementSections.get(i) || "";

    // Try frame section
    const fsec = frameSections.get(secName);
    if (fsec) {
      const mat = materials.get(fsec.material);
      const E = mat?.E || 2.1e10;
      const nu = mat?.nu || 0.3;
      const G = E / (2 * (1 + nu));
      const b = fsec.B || 0.3;
      const h = fsec.D || 0.3;
      const A = b * h;
      const Iz = b * h * h * h / 12;
      const Iy = h * b * b * b / 12;
      const J = b * h * (b * b + h * h) / 12;

      ei.elasticities!.set(i, E);
      ei.shearModuli!.set(i, G);
      ei.areas!.set(i, A);
      ei.momentsOfInertiaZ!.set(i, Iz);
      ei.momentsOfInertiaY!.set(i, Iy);
      ei.torsionalConstants!.set(i, J);
      ei.densities!.set(i, mat?.density || 0);
      sectionShapes.set(i, { type: "rect", b, h });
      continue;
    }

    // Try shell section
    const ssec = shellSections.get(secName);
    if (ssec) {
      const mat = materials.get(ssec.material);
      const E = mat?.E || 2.1e10;
      const nu = mat?.nu || 0.2;
      const G = E / (2 * (1 + nu));
      ei.elasticities!.set(i, E);
      ei.shearModuli!.set(i, G);
      ei.thicknesses!.set(i, ssec.thickness);
      ei.poissonsRatios!.set(i, nu);
      ei.densities!.set(i, mat?.density || 0);
    }
  }

  // ═══════ Build NodeInputs ═══════
  const ni: NodeInputs = {
    supports: new Map(),
    forces: new Map(),
  };

  for (const [jointName, r] of restraints) {
    const idx = nodeNameToIdx.get(jointName);
    if (idx !== undefined) {
      ni.supports!.set(idx, r as [boolean, boolean, boolean, boolean, boolean, boolean]);
    }
  }

  for (const load of loads) {
    const idx = nodeNameToIdx.get(load.joint);
    if (idx !== undefined) {
      const existing = ni.forces!.get(idx) || [0, 0, 0, 0, 0, 0] as [number, number, number, number, number, number];
      existing[0] += load.ux;
      existing[1] += load.uy;
      existing[2] += load.uz;
      existing[3] += load.mx;
      existing[4] += load.my;
      existing[5] += load.mz;
      ni.forces!.set(idx, existing);
    }
  }

  return {
    units,
    dof,
    materials,
    frameSections,
    shellSections,
    nodes: nodesArr,
    nodeNames,
    nodeNameToIdx,
    elements,
    elementNames,
    elementSections,
    nodeInputs: ni,
    elementInputs: ei,
    sectionShapes,
    info: {
      nNodes: nodesArr.length,
      nFrames,
      nShells,
      title: `SAP2000 model (${nFrames} frames, ${nShells} shells)`,
    },
  };
}
