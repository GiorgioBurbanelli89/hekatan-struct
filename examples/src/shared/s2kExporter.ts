/**
 * SAP2000 .s2k File Exporter
 * Generates SAP2000-compatible text model files from awatif data.
 */
import type { Node, Element, NodeInputs, ElementInputs } from "awatif-fem";

export interface S2kExportInput {
  nodes: Node[];
  elements: Element[];
  nodeInputs: NodeInputs;
  elementInputs: ElementInputs;
  title?: string;
  units?: { force: string; length: string };
}

export function exportS2k(input: S2kExportInput): string {
  const { nodes, elements, nodeInputs, elementInputs } = input;
  const units = input.units || { force: "KN", length: "m" };
  const title = input.title || "Awatif Model";
  const lines: string[] = [];

  // Header
  lines.push("");
  lines.push(`; File ${title}.s2k exported by awatif-clone`);
  lines.push("");

  // SYSTEM
  lines.push("SYSTEM");
  lines.push(`  DOF=UX,UY,UZ,RX,RY,RZ  LENGTH=${units.length}  FORCE=${units.force}`);
  lines.push("");

  // JOINT
  lines.push("JOINT");
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    lines.push(`  ${i + 1}  X=${fmt(n[0])}  Y=${fmt(n[1])}  Z=${fmt(n[2])}`);
  }
  lines.push("");

  // RESTRAINT
  if (nodeInputs.supports && nodeInputs.supports.size > 0) {
    lines.push("RESTRAINT");
    for (const [idx, sup] of nodeInputs.supports) {
      if (!sup.some(s => s)) continue;
      const dofNames = ["U1", "U2", "U3", "R1", "R2", "R3"];
      const active = sup.map((s, i) => s ? dofNames[i] : null).filter(Boolean);
      lines.push(`  ADD=${idx + 1}  DOF=${active.join(",")}`);
    }
    lines.push("");
  }

  // Collect unique materials
  const matSet = new Map<string, { E: number; nu: number; G: number }>();
  for (let i = 0; i < elements.length; i++) {
    const E = elementInputs.elasticities?.get(i) || 0;
    const G = elementInputs.shearModuli?.get(i) || 0;
    const nu = E > 0 && G > 0 ? (E / (2 * G) - 1) : 0.2;
    const key = `MAT_E${E.toPrecision(6)}`;
    if (!matSet.has(key)) matSet.set(key, { E, nu, G });
  }

  // MATERIAL
  lines.push("MATERIAL");
  for (const [name, mat] of matSet) {
    const rho = elementInputs.densities?.get(0) || 0;
    lines.push(`  NAME=${name}  IDES=C  M=${fmt(rho)}  W=${fmt(rho * 9.81)}`);
    lines.push(`    T=0  E=${mat.E}  U=${fmt(mat.nu)}  A=0.0000099`);
  }
  lines.push("");

  // Separate frames and shells
  const frameIdx: number[] = [];
  const shellIdx: number[] = [];
  elements.forEach((el, i) => {
    if (el.length === 2) frameIdx.push(i);
    else shellIdx.push(i);
  });

  // Collect unique frame sections
  const frameSecs = new Map<string, { A: number; Iz: number; Iy: number; J: number; matName: string }>();
  for (const i of frameIdx) {
    const A = elementInputs.areas?.get(i) || 0;
    const Iz = elementInputs.momentsOfInertiaZ?.get(i) || 0;
    const Iy = elementInputs.momentsOfInertiaY?.get(i) || 0;
    const J = elementInputs.torsionalConstants?.get(i) || 0;
    const key = `A${A.toPrecision(6)}_Iz${Iz.toPrecision(6)}`;
    if (!frameSecs.has(key)) {
      const E = elementInputs.elasticities?.get(i) || 0;
      const matName = `MAT_E${E.toPrecision(6)}`;
      frameSecs.set(key, { A, Iz, Iy, J, matName });
    }
  }

  // FRAME SECTION
  if (frameSecs.size > 0) {
    lines.push("FRAME SECTION");
    let secIdx = 0;
    const frameSecMap = new Map<string, string>(); // key → secName
    for (const [key, sec] of frameSecs) {
      secIdx++;
      const secName = `FSEC${secIdx}`;
      frameSecMap.set(key, secName);
      // Estimate b,h from A and Iz (assuming rectangular)
      // Iz = b*h³/12, A = b*h → h = sqrt(12*Iz/A), b = A/h
      let h = 0.3, b = 0.3;
      if (sec.A > 0 && sec.Iz > 0) {
        h = Math.sqrt(12 * sec.Iz / sec.A);
        b = sec.A / h;
      }
      lines.push(`  NAME=${secName}  MAT=${sec.matName}  SH=R  D=${fmt(h)}  B=${fmt(b)}`);
    }
    lines.push("");

    // Map each frame element to its section key
    const elemToSecName = new Map<number, string>();
    for (const i of frameIdx) {
      const A = elementInputs.areas?.get(i) || 0;
      const Iz = elementInputs.momentsOfInertiaZ?.get(i) || 0;
      const key = `A${A.toPrecision(6)}_Iz${Iz.toPrecision(6)}`;
      elemToSecName.set(i, frameSecMap.get(key) || "FSEC1");
    }

    // FRAME
    lines.push("FRAME");
    for (const i of frameIdx) {
      const el = elements[i];
      const secName = elemToSecName.get(i) || "FSEC1";
      lines.push(`  ${i + 1}  J=${el[0] + 1},${el[1] + 1}  SEC=${secName}`);
    }
    lines.push("");
  }

  // Collect unique shell sections
  const shellSecs = new Map<string, { t: number; nu: number; matName: string }>();
  for (const i of shellIdx) {
    const t = elementInputs.thicknesses?.get(i) || 0.1;
    const nu = elementInputs.poissonsRatios?.get(i) || 0.2;
    const key = `t${t.toPrecision(6)}`;
    if (!shellSecs.has(key)) {
      const E = elementInputs.elasticities?.get(i) || 0;
      const matName = `MAT_E${E.toPrecision(6)}`;
      shellSecs.set(key, { t, nu, matName });
    }
  }

  // SHELL SECTION
  if (shellSecs.size > 0) {
    lines.push("SHELL SECTION");
    let secIdx = 0;
    const shellSecMap = new Map<string, string>();
    for (const [key, sec] of shellSecs) {
      secIdx++;
      const secName = `SSEC${secIdx}`;
      shellSecMap.set(key, secName);
      lines.push(`  NAME=${secName}  MAT=${sec.matName}  TYPE=Shell  TH=${fmt(sec.t)}`);
    }
    lines.push("");

    const elemToShellSec = new Map<number, string>();
    for (const i of shellIdx) {
      const t = elementInputs.thicknesses?.get(i) || 0.1;
      const key = `t${t.toPrecision(6)}`;
      elemToShellSec.set(i, shellSecMap.get(key) || "SSEC1");
    }

    // SHELL
    lines.push("SHELL");
    for (const i of shellIdx) {
      const el = elements[i];
      const secName = elemToShellSec.get(i) || "SSEC1";
      const jStr = el.map(n => n + 1).join(",");
      lines.push(`  ${i + 1}  J=${jStr}  SEC=${secName}`);
    }
    lines.push("");
  }

  // LOAD
  if (nodeInputs.forces && nodeInputs.forces.size > 0) {
    lines.push("LOAD");
    lines.push("  NAME=LOAD1  CSYS=0");
    for (const [idx, force] of nodeInputs.forces) {
      const labels = ["UX", "UY", "UZ", "MX", "MY", "MZ"];
      const parts: string[] = [];
      force.forEach((v, d) => {
        if (Math.abs(v) > 1e-12) parts.push(`${labels[d]}=${fmt(v)}`);
      });
      if (parts.length > 0) {
        lines.push(`    ADD=${idx + 1}  ${parts.join("  ")}`);
      }
    }
    lines.push("");
  }

  lines.push("END");
  lines.push("");

  return lines.join("\r\n");
}

function fmt(v: number): string {
  if (Math.abs(v) < 1e-15) return "0";
  if (Math.abs(v) >= 1e6 || (Math.abs(v) < 1e-3 && Math.abs(v) > 0)) {
    return v.toExponential(6);
  }
  // Remove trailing zeros
  return parseFloat(v.toPrecision(8)).toString();
}
