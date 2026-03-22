/**
 * ETABS .e2k File Exporter
 * Converts awatif mesh data into ETABS-compatible .e2k text format.
 * Reconstructs stories from Z elevations and plan points from XY coords.
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
  const rd = (v: number) => Math.round(v * 10000) / 10000;

  lines.push(`$ File exported from Awatif FEM Studio`);
  lines.push(``);
  lines.push(`$ PROGRAM INFORMATION`);
  lines.push(`  PROGRAM  "AWATIF"  VERSION "1.0.0"  `);
  lines.push(``);
  lines.push(`$ CONTROLS`);
  lines.push(`  UNITS  "${force}"  "${length}"  "C"  `);
  if (title) lines.push(`  TITLE2  "${title}"  `);
  lines.push(``);

  // ── Reconstruct stories from Z elevations ──
  const zSet = new Set<number>();
  nodes.forEach(n => zSet.add(rd(n[2])));
  const sortedZ = [...zSet].sort((a, b) => a - b);

  // Story names: Base at bottom, Level_1, Level_2, ...
  const storyNames: string[] = [];
  const zToStory = new Map<number, string>();
  if (sortedZ.length > 0) {
    storyNames.push("Base");
    zToStory.set(sortedZ[0], "Base");
    for (let i = 1; i < sortedZ.length; i++) {
      const name = `Level_${i}`;
      storyNames.push(name);
      zToStory.set(sortedZ[i], name);
    }
  }

  lines.push(`$ STORIES - IN SEQUENCE FROM TOP`);
  for (let i = sortedZ.length - 1; i >= 1; i--) {
    const h = rd(sortedZ[i] - sortedZ[i - 1]);
    lines.push(`  STORY "${storyNames[i]}"  HEIGHT ${h} MASTERSTORY "Yes"  `);
  }
  if (sortedZ.length > 0) {
    lines.push(`  STORY "Base"  ELEV ${sortedZ[0]} `);
  }
  lines.push(``);

  // ── Reconstruct plan points from unique XY coordinates ──
  const xyToPoint = new Map<string, string>(); // "x,y" → point name
  let ptIdx = 0;
  nodes.forEach(n => {
    const key = `${rd(n[0])},${rd(n[1])}`;
    if (!xyToPoint.has(key)) xyToPoint.set(key, `${++ptIdx}`);
  });

  // Node → (pointName, storyName)
  const nodeToPS = (ni: number): { pt: string; story: string } => {
    const n = nodes[ni];
    const key = `${rd(n[0])},${rd(n[1])}`;
    return { pt: xyToPoint.get(key) || "1", story: zToStory.get(rd(n[2])) || "Base" };
  };

  // ── Materials ──
  lines.push(`$ MATERIAL PROPERTIES`);
  const uniqueE = new Set<number>();
  elementInputs.elasticities?.forEach(v => uniqueE.add(v));
  let matIdxCounter = 0;
  const matNames = new Map<number, string>();
  for (const E of uniqueE) {
    const name = `Mat_${++matIdxCounter}`;
    matNames.set(E, name);
    const nu = 0.3;
    const G = E / (2 * (1 + nu));
    lines.push(`  MATERIAL  "${name}"    TYPE "Steel"    WEIGHTPERVOLUME 7.849`);
    lines.push(`  MATERIAL  "${name}"    SYMTYPE "Isotropic"  E ${E}  U ${nu}  A 1.17E-05`);
  }
  lines.push(``);

  // ── Frame Sections ──
  lines.push(`$ FRAME SECTIONS`);
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
      const h = shape.h ?? 0, b = shape.b ?? 0, d = shape.d ?? 0;
      const tfw = shape.tf ?? 0, tww = shape.tw ?? 0;
      switch (shape.type) {
        case "rect":
          secName = shape.name || `Rect_${b.toFixed(2)}x${h.toFixed(2)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Concrete Rectangular"  D ${h} B ${b} `;
          break;
        case "circ":
          secName = shape.name || `Circ_D${d.toFixed(2)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Concrete Circle"  D ${d} `;
          break;
        case "I":
          secName = shape.name || `I_${h.toFixed(3)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel I/Wide Flange"  D ${h} B ${b} TF ${tfw} TW ${tww} `;
          break;
        case "HSS":
          secName = shape.name || `HSS_${b.toFixed(3)}x${h.toFixed(3)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Tube"  D ${h} B ${b} TF ${tww} TW ${tww} `;
          break;
        case "CFT":
          secName = shape.name || `CFT_${b.toFixed(3)}x${h.toFixed(3)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Filled Steel Tube"  D ${h} B ${b} TF ${tww} TW ${tww} `;
          break;
        case "L":
          secName = shape.name || `L_${(h*1000).toFixed(0)}x${((shape.t||tww)*1000).toFixed(0)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Angle"  D ${h} B ${b||h} TF ${shape.t||tww} TW ${shape.t||tww} `;
          break;
        case "C": case "coldC":
          secName = shape.name || `C_${(h*1000).toFixed(0)}x${(b*1000).toFixed(0)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Channel"  D ${h} B ${b} TF ${tfw||shape.t||0} TW ${tww||shape.t||0} `;
          break;
        case "2C":
          secName = shape.name || `2C_${(h*1000).toFixed(0)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Double Channel"  D ${h} B ${b} TF ${tfw} TW ${tww} DIS ${shape.dis||0} `;
          break;
        case "pipe":
          secName = shape.name || `Pipe_D${(d*1000).toFixed(0)}`;
          secLine = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Steel Pipe"  D ${d} TW ${tww} `;
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

  // ── Point Coordinates (2D plan) ──
  lines.push(`$ POINT COORDINATES`);
  for (const [key, ptName] of xyToPoint) {
    const [x, y] = key.split(",").map(Number);
    lines.push(`  POINT "${ptName}"  ${x} ${y} `);
  }
  lines.push(``);

  // ── Line Connectivities + Line Assigns ──
  lines.push(`$ LINE CONNECTIVITIES`);
  const lineAssignEntries: string[] = [];

  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const n0 = nodes[el[0]], n1 = nodes[el[1]];
    const dz = Math.abs(n1[2] - n0[2]);
    const dxy = Math.sqrt((n1[0] - n0[0]) ** 2 + (n1[1] - n0[1]) ** 2);
    const isCol = dz > dxy * 0.5;
    const isBrace = isCol && dxy > 0.01;
    const type = isBrace ? "BRACE" : isCol ? "COLUMN" : "BEAM";

    const ps0 = nodeToPS(el[0]);
    const ps1 = nodeToPS(el[1]);

    // For COLUMN/BRACE: pt1=bottom, pt2=top; story = top story; nStories based on Z span
    // For BEAM: both at same story
    let topStory: string, nStories: number;
    if (type === "BEAM") {
      topStory = ps0.story;
      nStories = 0;
      lines.push(`  LINE  "E${i + 1}"  ${type}  "${ps0.pt}"  "${ps1.pt}"  ${nStories}`);
      lineAssignEntries.push(`  LINEASSIGN  "E${i + 1}"  "${topStory}"  SECTION "${sectionNames.get(i) || "Sec_1"}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      // Column/Brace: bottom node first
      const bot = n0[2] <= n1[2] ? el[0] : el[1];
      const top = n0[2] <= n1[2] ? el[1] : el[0];
      const psBot = nodeToPS(bot);
      const psTop = nodeToPS(top);
      // Count stories spanned
      const zBot = rd(nodes[bot][2]), zTop = rd(nodes[top][2]);
      const botIdx = sortedZ.indexOf(zBot);
      const topIdx = sortedZ.indexOf(zTop);
      nStories = Math.max(1, topIdx - botIdx);
      topStory = psTop.story;
      lines.push(`  LINE  "E${i + 1}"  ${type}  "${psBot.pt}"  "${psTop.pt}"  ${nStories}`);
      lineAssignEntries.push(`  LINEASSIGN  "E${i + 1}"  "${topStory}"  SECTION "${sectionNames.get(i) || "Sec_1"}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    }
  });
  lines.push(``);

  // ── Point Assigns (restraints) ──
  lines.push(`$ POINT ASSIGNS`);
  nodeInputs.supports?.forEach((sup, nodeIdx) => {
    const dofs: string[] = [];
    if (sup[0]) dofs.push("UX");
    if (sup[1]) dofs.push("UY");
    if (sup[2]) dofs.push("UZ");
    if (sup[3]) dofs.push("RX");
    if (sup[4]) dofs.push("RY");
    if (sup[5]) dofs.push("RZ");
    if (dofs.length > 0) {
      const ps = nodeToPS(nodeIdx);
      lines.push(`  POINTASSIGN  "${ps.pt}"  "${ps.story}"  RESTRAINT "${dofs.join(" ")}"  `);
    }
  });
  lines.push(``);

  // ── Line Assigns ──
  lines.push(`$ LINE ASSIGNS`);
  lineAssignEntries.forEach(la => lines.push(la));
  lines.push(``);

  // ── Load Patterns ──
  lines.push(`$ LOAD PATTERNS`);
  lines.push(`  LOADPATTERN "Dead"  TYPE "Dead"  SELFWEIGHT 1`);
  lines.push(`  LOADPATTERN "Live"  TYPE "Live"  `);
  lines.push(``);

  // ── Point Object Loads ──
  if (nodeInputs.loads && nodeInputs.loads.size > 0) {
    lines.push(`$ POINT OBJECT LOADS`);
    nodeInputs.loads.forEach((load, nodeIdx) => {
      const [fx, fy, fz] = load;
      const ps = nodeToPS(nodeIdx);
      if (Math.abs(fx) > 1e-10) lines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  "Dead"  TYPE "FORCE"  FX ${fx}`);
      if (Math.abs(fy) > 1e-10) lines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  "Dead"  TYPE "FORCE"  FY ${fy}`);
      if (Math.abs(fz) > 1e-10) lines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  "Dead"  TYPE "FORCE"  FZ ${fz}`);
    });
    lines.push(``);
  }

  lines.push(`$ END OF MODEL FILE`);
  return lines.join("\r\n");
}
