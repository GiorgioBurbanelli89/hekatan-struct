/**
 * SAP2000 .s2k File Parser
 * Supports BOTH formats:
 *   - Legacy (v6-v14): SYSTEM/JOINT/SHELL keyword blocks
 *   - Modern (v15+): TABLE: "..." format with key=value pairs
 */
import type { Node, Element, NodeInputs, ElementInputs, SectionShape } from "awatif-fem";

export interface S2kModel {
  units: { force: string; length: string };
  dof: string;
  materials: Map<string, { E: number; nu: number; G: number; density?: number; fy?: number }>;
  frameSections: Map<string, { material: string; shape: string; D: number; B: number; TF: number; TW: number; A: number; Iz: number; Iy: number; J: number }>;
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

/** Parse key=value pairs from a line, handling quoted values */
function parseKV(line: string): Map<string, string> {
  const map = new Map<string, string>();
  // Match key=value or key="value with spaces"
  const re = /(\w+)\s*=\s*(?:"([^"]*?)"|(\S+))/g;
  let m;
  while ((m = re.exec(line)) !== null) {
    map.set(m[1], m[2] !== undefined ? m[2] : m[3]);
  }
  return map;
}

export function parseS2k(text: string): S2kModel {
  const rawLines = text.split(/\r?\n/);

  // Detect format: TABLE format has 'TABLE:  "' lines
  const isTableFormat = rawLines.some(l => l.trim().startsWith('TABLE:'));

  if (isTableFormat) return parseTableFormat(rawLines);
  return parseLegacyFormat(rawLines);
}

// ═══════════════════════════════════════════
// TABLE FORMAT (v15+)
// ═══════════════════════════════════════════
function parseTableFormat(rawLines: string[]): S2kModel {
  // Join continuation lines (ending with _)
  const lines: string[] = [];
  let buffer = "";
  for (const raw of rawLines) {
    const trimmed = raw.trimEnd();
    if (trimmed.endsWith("_")) {
      buffer += trimmed.slice(0, -1) + " ";
    } else {
      buffer += trimmed;
      lines.push(buffer);
      buffer = "";
    }
  }
  if (buffer) lines.push(buffer);

  const units = { force: "KN", length: "m" };
  let dof = "UX,UY,UZ,RX,RY,RZ";
  const materials = new Map<string, { E: number; nu: number; G: number; density?: number; fy?: number }>();
  const frameSections = new Map<string, { material: string; shape: string; D: number; B: number; TF: number; TW: number; A: number; Iz: number; Iy: number; J: number }>();
  const shellSections = new Map<string, { material: string; type: string; thickness: number }>();
  const joints = new Map<string, [number, number, number]>();
  const frameConns: { name: string; j1: string; j2: string }[] = [];
  const shellConns: { name: string; joints: string[] }[] = [];
  const restraints = new Map<string, boolean[]>();
  const frameSectionAssign = new Map<string, string>(); // frameName → secName
  const areaSectionAssign = new Map<string, string>(); // areaName → secName
  const loads: { joint: string; fx: number; fy: number; fz: number; mx: number; my: number; mz: number }[] = [];

  let currentTable = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith(";") || trimmed.startsWith("File ")) continue;

    if (trimmed.startsWith('TABLE:')) {
      const match = trimmed.match(/TABLE:\s+"(.+?)"/);
      currentTable = match ? match[1].toUpperCase() : "";
      continue;
    }

    if (trimmed === "END TABLE DATA") { currentTable = ""; continue; }

    const kv = parseKV(trimmed);

    switch (currentTable) {
      case "PROGRAM CONTROL": {
        const cu = kv.get("CurrUnits");
        if (cu) {
          const parts = cu.split(",").map(s => s.trim());
          if (parts[0]) units.force = parts[0];
          if (parts[1]) units.length = parts[1];
        }
        break;
      }

      case "MATERIAL PROPERTIES 01 - GENERAL": {
        const name = kv.get("Material");
        if (name && !materials.has(name)) {
          materials.set(name, { E: 0, nu: 0, G: 0 });
        }
        break;
      }

      case "MATERIAL PROPERTIES 02 - BASIC MECHANICAL PROPERTIES": {
        const name = kv.get("Material");
        if (name) {
          const mat = materials.get(name) || { E: 0, nu: 0, G: 0 };
          mat.E = parseNum(kv.get("E1"));
          mat.G = parseNum(kv.get("G12"));
          mat.nu = parseNum(kv.get("U12"));
          mat.density = parseNum(kv.get("UnitMass"));
          materials.set(name, mat);
        }
        break;
      }

      case "MATERIAL PROPERTIES 03A - STEEL DATA": {
        const name = kv.get("Material");
        if (name && materials.has(name)) {
          materials.get(name)!.fy = parseNum(kv.get("Fy"));
        }
        break;
      }

      case "FRAME SECTION PROPERTIES 01 - GENERAL": {
        const secName = kv.get("SectionName");
        if (secName) {
          frameSections.set(secName, {
            material: kv.get("Material") || "",
            shape: kv.get("Shape") || "Rectangular",
            D: parseNum(kv.get("t3")),
            B: parseNum(kv.get("t2")),
            TF: parseNum(kv.get("tf")),
            TW: parseNum(kv.get("tw")),
            A: parseNum(kv.get("Area")),
            Iz: parseNum(kv.get("I33")),
            Iy: parseNum(kv.get("I22")),
            J: parseNum(kv.get("TorsConst")),
          });
        }
        break;
      }

      case "AREA SECTION PROPERTIES": {
        const secName = kv.get("Section");
        if (secName) {
          shellSections.set(secName, {
            material: kv.get("Material") || "",
            type: kv.get("Type") || "Shell",
            thickness: parseNum(kv.get("Thickness")),
          });
        }
        break;
      }

      case "JOINT COORDINATES": {
        const name = kv.get("Joint");
        if (name) {
          const x = parseNum(kv.get("XorR"));
          const y = parseNum(kv.get("Y"));
          const z = parseNum(kv.get("Z"));
          joints.set(name, [x, y, z]);
        }
        break;
      }

      case "CONNECTIVITY - FRAME": {
        const name = kv.get("Frame");
        const j1 = kv.get("JointI");
        const j2 = kv.get("JointJ");
        if (name && j1 && j2) {
          frameConns.push({ name, j1, j2 });
        }
        break;
      }

      case "CONNECTIVITY - AREA": {
        const name = kv.get("Area");
        if (name) {
          const numJ = parseInt(kv.get("NumJoints") || "4");
          const jts: string[] = [];
          for (let j = 1; j <= numJ; j++) {
            const jv = kv.get(`Joint${j}`);
            if (jv) jts.push(jv);
          }
          if (jts.length >= 3) shellConns.push({ name, joints: jts });
        }
        break;
      }

      case "JOINT RESTRAINT ASSIGNMENTS": {
        const name = kv.get("Joint");
        if (name) {
          const r: boolean[] = [
            kv.get("U1")?.toLowerCase() === "yes",
            kv.get("U2")?.toLowerCase() === "yes",
            kv.get("U3")?.toLowerCase() === "yes",
            kv.get("R1")?.toLowerCase() === "yes",
            kv.get("R2")?.toLowerCase() === "yes",
            kv.get("R3")?.toLowerCase() === "yes",
          ];
          restraints.set(name, r);
        }
        break;
      }

      case "FRAME SECTION ASSIGNMENTS": {
        const frame = kv.get("Frame");
        const sec = kv.get("AnalSect");
        if (frame && sec) frameSectionAssign.set(frame, sec);
        break;
      }

      case "AREA SECTION ASSIGNMENTS": {
        const area = kv.get("Area");
        const sec = kv.get("Section");
        if (area && sec) areaSectionAssign.set(area, sec);
        break;
      }

      case "JOINT LOADS - FORCE": {
        const joint = kv.get("Joint");
        if (joint) {
          loads.push({
            joint,
            fx: parseNum(kv.get("F1")),
            fy: parseNum(kv.get("F2")),
            fz: parseNum(kv.get("F3")),
            mx: parseNum(kv.get("M1")),
            my: parseNum(kv.get("M2")),
            mz: parseNum(kv.get("M3")),
          });
        }
        break;
      }
    }
  }

  return buildModel(units, dof, materials, frameSections, shellSections, joints,
    frameConns, shellConns, restraints, frameSectionAssign, areaSectionAssign, loads);
}

// ═══════════════════════════════════════════
// LEGACY FORMAT (v6-v14)
// ═══════════════════════════════════════════
function parseLegacyFormat(rawLines: string[]): S2kModel {
  const units = { force: "KN", length: "m" };
  let dof = "UX,UY,UZ,RX,RY,RZ";
  const materials = new Map<string, { E: number; nu: number; G: number; density?: number; fy?: number }>();
  const frameSections = new Map<string, { material: string; shape: string; D: number; B: number; TF: number; TW: number; A: number; Iz: number; Iy: number; J: number }>();
  const shellSections = new Map<string, { material: string; type: string; thickness: number }>();
  const joints = new Map<string, [number, number, number]>();
  const frameConns: { name: string; j1: string; j2: string }[] = [];
  const shellConns: { name: string; joints: string[] }[] = [];
  const restraints = new Map<string, boolean[]>();
  const loads: { joint: string; fx: number; fy: number; fz: number; mx: number; my: number; mz: number }[] = [];

  let currentSection = "";
  let currentMaterial = "";

  for (const raw of rawLines) {
    const trimmed = raw.trim();
    if (!trimmed || trimmed.startsWith(";")) continue;

    // Section headers
    if (!raw.startsWith(" ") && !raw.startsWith("\t")) {
      const upper = trimmed.toUpperCase();
      if (upper === "END") break;
      if (upper.startsWith("SHELL SECTION")) currentSection = "SHELL SECTION";
      else if (upper.startsWith("FRAME SECTION")) currentSection = "FRAME SECTION";
      else currentSection = upper.split(/\s+/)[0];
      continue;
    }

    const kv = parseKV(trimmed);
    const tokens = trimmed.split(/\s+/);

    switch (currentSection) {
      case "SYSTEM": {
        const d = kv.get("DOF"); if (d) dof = d;
        const l = kv.get("LENGTH"); if (l) units.length = l;
        const f = kv.get("FORCE"); if (f) units.force = f;
        break;
      }
      case "JOINT": {
        const name = tokens[0];
        joints.set(name, [parseNum(kv.get("X")), parseNum(kv.get("Y")), parseNum(kv.get("Z"))]);
        break;
      }
      case "RESTRAINT": {
        const add = kv.get("ADD");
        const dofStr = kv.get("DOF");
        if (add && dofStr) {
          const dofs = dofStr.split(",");
          const r = [false, false, false, false, false, false];
          for (const d of dofs) {
            const du = d.toUpperCase();
            if (du === "UX" || du === "U1") r[0] = true;
            if (du === "UY" || du === "U2") r[1] = true;
            if (du === "UZ" || du === "U3") r[2] = true;
            if (du === "RX" || du === "R1") r[3] = true;
            if (du === "RY" || du === "R2") r[4] = true;
            if (du === "RZ" || du === "R3") r[5] = true;
          }
          restraints.set(add, r);
        }
        break;
      }
      case "MATERIAL": {
        const name = kv.get("NAME");
        if (name) { currentMaterial = name; materials.set(name, { E: 0, nu: 0, G: 0 }); }
        else if (currentMaterial) {
          const mat = materials.get(currentMaterial)!;
          const e = kv.get("E"); if (e) mat.E = parseNum(e);
          const u = kv.get("U"); if (u) mat.nu = parseNum(u);
          mat.G = mat.E / (2 * (1 + mat.nu));
          const m = kv.get("M"); if (m) mat.density = parseNum(m);
        }
        break;
      }
      case "SHELL": {
        const name = tokens[0];
        const j = kv.get("J");
        const sec = kv.get("SEC");
        if (j) shellConns.push({ name, joints: j.split(","), });
        break;
      }
      case "SHELL SECTION": {
        const name = kv.get("NAME");
        if (name) shellSections.set(name, { material: kv.get("MAT") || "", type: kv.get("TYPE") || "Shell", thickness: parseNum(kv.get("TH")) });
        break;
      }
      case "FRAME": {
        const name = tokens[0];
        const j = kv.get("J");
        if (j) { const jj = j.split(","); if (jj.length >= 2) frameConns.push({ name, j1: jj[0], j2: jj[1] }); }
        break;
      }
      case "LOAD": {
        const add = kv.get("ADD");
        if (add) loads.push({ joint: add, fx: parseNum(kv.get("UX")), fy: parseNum(kv.get("UY")), fz: parseNum(kv.get("UZ")), mx: parseNum(kv.get("MX")), my: parseNum(kv.get("MY")), mz: parseNum(kv.get("MZ")) });
        break;
      }
    }
  }

  // For legacy, section assignments come from SEC= in SHELL/FRAME lines
  const frameSectionAssign = new Map<string, string>();
  const areaSectionAssign = new Map<string, string>();

  return buildModel(units, dof, materials, frameSections, shellSections, joints,
    frameConns, shellConns, restraints, frameSectionAssign, areaSectionAssign, loads);
}

// ═══════════════════════════════════════════
// BUILD AWATIF MODEL (shared by both parsers)
// ═══════════════════════════════════════════
function buildModel(
  units: { force: string; length: string },
  dof: string,
  materials: Map<string, any>,
  frameSections: Map<string, any>,
  shellSections: Map<string, any>,
  joints: Map<string, [number, number, number]>,
  frameConns: { name: string; j1: string; j2: string }[],
  shellConns: { name: string; joints: string[] }[],
  restraints: Map<string, boolean[]>,
  frameSectionAssign: Map<string, string>,
  areaSectionAssign: Map<string, string>,
  loads: { joint: string; fx: number; fy: number; fz: number; mx: number; my: number; mz: number }[],
): S2kModel {
  const nodeNames: string[] = [];
  const nodeNameToIdx = new Map<string, number>();
  const nodesArr: Node[] = [];
  for (const [name, coords] of joints) {
    nodeNameToIdx.set(name, nodesArr.length);
    nodeNames.push(name);
    nodesArr.push(coords);
  }

  const elements: Element[] = [];
  const elementNames: string[] = [];
  const elementSections = new Map<number, string>();

  for (const fc of frameConns) {
    const i1 = nodeNameToIdx.get(fc.j1);
    const i2 = nodeNameToIdx.get(fc.j2);
    if (i1 !== undefined && i2 !== undefined) {
      const idx = elements.length;
      elements.push([i1, i2]);
      elementNames.push(fc.name);
      const sec = frameSectionAssign.get(fc.name);
      if (sec) elementSections.set(idx, sec);
    }
  }
  const nFrames = elements.length;

  for (const sc of shellConns) {
    const indices = sc.joints.map(j => nodeNameToIdx.get(j)).filter(x => x !== undefined) as number[];
    if (indices.length >= 3) {
      const idx = elements.length;
      elements.push(indices);
      elementNames.push(sc.name);
      const sec = areaSectionAssign.get(sc.name);
      if (sec) elementSections.set(idx, sec);
    }
  }
  const nShells = elements.length - nFrames;

  // Build ElementInputs
  const ei: ElementInputs = {
    elasticities: new Map(), shearModuli: new Map(), areas: new Map(),
    momentsOfInertiaZ: new Map(), momentsOfInertiaY: new Map(),
    torsionalConstants: new Map(), densities: new Map(),
    thicknesses: new Map(), poissonsRatios: new Map(),
  };
  const sectionShapes = new Map<number, SectionShape>();

  // Default material (first one)
  const defaultMat = materials.values().next().value || { E: 29000, nu: 0.3, G: 11153 };

  for (let i = 0; i < elements.length; i++) {
    const secName = elementSections.get(i);
    const fsec = secName ? frameSections.get(secName) : null;
    const ssec = secName ? shellSections.get(secName) : null;

    if (fsec || elements[i].length === 2) {
      const sec = fsec || { material: "", A: 0, Iz: 0, Iy: 0, J: 0, D: 0.3, B: 0.3, shape: "Rectangular" };
      const mat = materials.get(sec.material) || defaultMat;
      const E = mat.E || defaultMat.E;
      const nu = mat.nu || 0.3;
      const G = mat.G || E / (2 * (1 + nu));
      ei.elasticities!.set(i, E);
      ei.shearModuli!.set(i, G);
      ei.areas!.set(i, sec.A || sec.D * sec.B);
      ei.momentsOfInertiaZ!.set(i, sec.Iz || sec.B * sec.D ** 3 / 12);
      ei.momentsOfInertiaY!.set(i, sec.Iy || sec.D * sec.B ** 3 / 12);
      ei.torsionalConstants!.set(i, sec.J || 0);
      ei.densities!.set(i, mat.density || 0);
      if (sec.shape?.includes("Wide Flange") || sec.shape === "I") {
        sectionShapes.set(i, { type: "I", b: sec.B, h: sec.D, name: secName || "I-section" });
      } else {
        sectionShapes.set(i, { type: "rect", b: sec.B, h: sec.D });
      }
    } else if (ssec) {
      const mat = materials.get(ssec.material) || defaultMat;
      const E = mat.E || defaultMat.E;
      const nu = mat.nu || 0.2;
      const G = mat.G || E / (2 * (1 + nu));
      ei.elasticities!.set(i, E);
      ei.shearModuli!.set(i, G);
      ei.thicknesses!.set(i, ssec.thickness);
      ei.poissonsRatios!.set(i, nu);
      ei.densities!.set(i, mat.density || 0);
    }
  }

  // NodeInputs
  const ni: NodeInputs = { supports: new Map(), forces: new Map() };
  for (const [name, r] of restraints) {
    const idx = nodeNameToIdx.get(name);
    if (idx !== undefined) ni.supports!.set(idx, r as any);
  }
  for (const ld of loads) {
    const idx = nodeNameToIdx.get(ld.joint);
    if (idx !== undefined) {
      const f = ni.forces!.get(idx) || [0, 0, 0, 0, 0, 0] as any;
      f[0] += ld.fx; f[1] += ld.fy; f[2] += ld.fz;
      f[3] += ld.mx; f[4] += ld.my; f[5] += ld.mz;
      ni.forces!.set(idx, f);
    }
  }

  return {
    units, dof, materials, frameSections, shellSections,
    nodes: nodesArr, nodeNames, nodeNameToIdx,
    elements, elementNames, elementSections,
    nodeInputs: ni, elementInputs: ei, sectionShapes,
    info: { nNodes: nodesArr.length, nFrames, nShells,
      title: `SAP2000 (${nFrames} frames, ${nShells} shells)` },
  };
}
