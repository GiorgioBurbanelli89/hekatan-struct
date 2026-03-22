/**
 * ETABS .e2k File Exporter
 * Converts awatif mesh data into ETABS-compatible .e2k text format.
 */
import type { Node, Element, NodeInputs, ElementInputs, SectionShape } from "awatif-fem";

export interface ExportE2kInput {
  nodes: Node[];
  elements: Element[];
  nodeInputs: NodeInputs;
  elementInputs: ElementInputs;
  title?: string;
  units?: { force: string; length: string };
}

export function exportE2k(input: ExportE2kInput): string {
  const { nodes, elements, nodeInputs, elementInputs, title, units } = input;
  const force = units?.force || "TONF";
  const length = units?.length || "M";
  const lines: string[] = [];

  lines.push(`\$ File exported from Awatif FEM Studio`);
  lines.push(``);
  lines.push(`\$ PROGRAM INFORMATION`);
  lines.push(`  PROGRAM  "AWATIF"  VERSION "1.0.0"  `);
  lines.push(``);
  lines.push(`\$ CONTROLS`);
  lines.push(`  UNITS  "${force}"  "${length}"  "C"  `);
  if (title) lines.push(`  TITLE2  "${title}"  `);
  lines.push(``);

  // ── Stories (detect from Z coordinates) ──
  const zValues = new Set<number>();
  nodes.forEach(n => zValues.add(Math.round(n[2] * 1000) / 1000));
  const sortedZ = [...zValues].sort((a, b) => a - b);

  lines.push(`\$ STORIES - IN SEQUENCE FROM TOP`);
  if (sortedZ.length > 1) {
    for (let i = sortedZ.length - 1; i >= 1; i--) {
      const h = Math.round((sortedZ[i] - sortedZ[i - 1]) * 1000) / 1000;
      lines.push(`  STORY "Level_${i}"  HEIGHT ${h} MASTERSTORY "Yes"  `);
    }
    lines.push(`  STORY "Base"  ELEV ${sortedZ[0]} `);
  } else {
    lines.push(`  STORY "Base"  ELEV 0 `);
  }
  lines.push(``);

  // ── Materials (extract unique from elementInputs) ──
  lines.push(`\$ MATERIAL PROPERTIES`);
  const uniqueE = new Set<number>();
  elementInputs.elasticities?.forEach(v => uniqueE.add(v));
  let matIdx = 0;
  const matNames = new Map<number, string>();
  for (const E of uniqueE) {
    const nu = 0.3; // default
    const name = `Mat_${++matIdx}`;
    matNames.set(E, name);
    lines.push(`  MATERIAL  "${name}"    TYPE "Steel"    WEIGHTPERVOLUME 7.849`);
    lines.push(`  MATERIAL  "${name}"    SYMTYPE "Isotropic"  E ${E}  U ${nu}  A 1.17E-05`);
  }
  lines.push(``);

  // ── Frame Sections ──
  lines.push(`\$ FRAME SECTIONS`);
  const sectionNames = new Map<number, string>();
  const writtenSections = new Set<string>();

  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const shape = elementInputs.sectionShapes?.get(i);
    const E = elementInputs.elasticities?.get(i) ?? 0;
    const matName = matNames.get(E) || "Mat_1";
    let secName = shape?.name || `Sec_${i}`;
    let secLine = "";

    if (shape) {
      switch (shape.type) {
        case "rect":
          secName = shape.name || `Rect_${(shape.b||0).toFixed(2)}x${(shape.h||0).toFixed(2)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Concrete Rectangular"  D ${shape.h} B ${shape.b} `;
          break;
        case "circ":
          secName = shape.name || `Circ_D${(shape.d||0).toFixed(2)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Concrete Circle"  D ${shape.d} `;
          break;
        case "I":
          secName = shape.name || `I_${(shape.h||0).toFixed(3)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel I/Wide Flange"  D ${shape.h} B ${shape.b} TF ${shape.tf||0} TW ${shape.tw||0} `;
          break;
        case "HSS":
          secName = shape.name || `HSS_${(shape.b||0).toFixed(3)}x${(shape.h||0).toFixed(3)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Tube"  D ${shape.h} B ${shape.b} TF ${shape.tw||0} TW ${shape.tw||0} `;
          break;
        case "CFT":
          secName = shape.name || `CFT_${(shape.b||0).toFixed(3)}x${(shape.h||0).toFixed(3)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Filled Steel Tube"  D ${shape.h} B ${shape.b} TF ${shape.tw||0} TW ${shape.tw||0} `;
          break;
        case "L":
          secName = shape.name || `L_${(shape.h||0)*1000}x${(shape.t||0)*1000}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Angle"  D ${shape.h} B ${shape.b||shape.h} TF ${shape.t||shape.tw||0} TW ${shape.t||shape.tw||0} `;
          break;
        case "C":
        case "coldC":
          secName = shape.name || `C_${(shape.h||0)*1000}x${(shape.b||0)*1000}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Channel"  D ${shape.h} B ${shape.b} TF ${shape.tf||shape.t||0} TW ${shape.tw||shape.t||0} `;
          break;
        case "2C":
          secName = shape.name || `2C_${(shape.h||0)*1000}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Double Channel"  D ${shape.h} B ${shape.b} TF ${shape.tf||0} TW ${shape.tw||0} DIS ${shape.dis||0} `;
          break;
        case "pipe":
          secName = shape.name || `Pipe_D${(shape.d||0)*1000}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Pipe"  D ${shape.d} TW ${shape.tw||0} `;
          break;
        default:
          secName = shape.name || `Sec_${i}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `;
      }
    } else {
      secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `;
    }

    sectionNames.set(i, secName);
    if (!writtenSections.has(secName)) {
      writtenSections.add(secName);
      lines.push(secLine);
    }
  });
  lines.push(``);

  // ── Point Coordinates ──
  lines.push(`\$ POINT COORDINATES`);
  nodes.forEach((n, i) => {
    lines.push(`  POINT "${i + 1}"  ${n[0]} ${n[1]} `);
  });
  lines.push(``);

  // ── Line Connectivities ──
  lines.push(`\$ LINE CONNECTIVITIES`);
  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const n0 = nodes[el[0]], n1 = nodes[el[1]];
    const isCol = Math.abs(n1[2] - n0[2]) > Math.max(Math.abs(n1[0] - n0[0]), Math.abs(n1[1] - n0[1]));
    const type = isCol ? "COLUMN" : "BEAM";
    lines.push(`  LINE  "E${i + 1}"  ${type}  "${el[0] + 1}"  "${el[1] + 1}"  0`);
  });
  lines.push(``);

  // ── Point Assigns (restraints) ──
  lines.push(`\$ POINT ASSIGNS`);
  nodeInputs.supports?.forEach((sup, nodeIdx) => {
    const dofs: string[] = [];
    if (sup[0]) dofs.push("UX");
    if (sup[1]) dofs.push("UY");
    if (sup[2]) dofs.push("UZ");
    if (sup[3]) dofs.push("RX");
    if (sup[4]) dofs.push("RY");
    if (sup[5]) dofs.push("RZ");
    if (dofs.length > 0) {
      lines.push(`  POINTASSIGN  "${nodeIdx + 1}"  "Base"  RESTRAINT "${dofs.join(" ")}"  `);
    }
  });
  lines.push(``);

  // ── Line Assigns ──
  lines.push(`\$ LINE ASSIGNS`);
  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const secName = sectionNames.get(i) || "Sec_1";
    lines.push(`  LINEASSIGN  "E${i + 1}"  "Base"  SECTION "${secName}"  `);
  });
  lines.push(``);

  // ── Loads ──
  lines.push(`\$ LOAD PATTERNS`);
  lines.push(`  LOADPATTERN "Dead"  TYPE "Dead"  SELFWEIGHT 1`);
  lines.push(`  LOADPATTERN "Live"  TYPE "Live"  `);
  lines.push(``);

  if (nodeInputs.loads && nodeInputs.loads.size > 0) {
    lines.push(`\$ POINT OBJECT LOADS`);
    nodeInputs.loads.forEach((load, nodeIdx) => {
      if (load.some(v => Math.abs(v) > 1e-10)) {
        const [fx, fy, fz, mx, my, mz] = load;
        if (Math.abs(fx) > 1e-10) lines.push(`  POINTLOAD  "${nodeIdx + 1}"  "Base"  "Dead"  TYPE "FORCE"  FX ${fx}`);
        if (Math.abs(fy) > 1e-10) lines.push(`  POINTLOAD  "${nodeIdx + 1}"  "Base"  "Dead"  TYPE "FORCE"  FY ${fy}`);
        if (Math.abs(fz) > 1e-10) lines.push(`  POINTLOAD  "${nodeIdx + 1}"  "Base"  "Dead"  TYPE "FORCE"  FZ ${fz}`);
      }
    });
    lines.push(``);
  }

  lines.push(`\$ END OF MODEL FILE`);
  return lines.join("\n");
}
