/**
 * ETABS .e2k File Exporter
 * Converts awatif mesh data into ETABS-compatible .e2k text format.
 *
 * When an E2kModel is available (round-trip from import), uses original metadata:
 *   - story names, heights, elevations
 *   - point names (plan coordinates)
 *   - line names, types (BEAM/COLUMN/BRACE), nStories
 *   - section names + material names
 *   - rigid zone factors, moment releases
 *   - frame loads (LINELOAD)
 *
 * Without E2kModel, reconstructs from geometry (best-effort).
 */
import type { Node, Element, NodeInputs, ElementInputs, SectionShape } from "awatif-fem";
import type { E2kModel } from "./e2kParser";

export interface ExportE2kInput {
  nodes: Node[];
  elements: Element[];
  nodeInputs: NodeInputs;
  elementInputs: ElementInputs;
  title?: string;
  units?: { force: string; length: string };
  e2kModel?: E2kModel;
}

export function exportE2k(input: ExportE2kInput): string {
  const { nodes, elements, nodeInputs, elementInputs, title, e2kModel } = input;
  const force = e2kModel?.units?.force || input.units?.force || "TONF";
  const length = e2kModel?.units?.length || input.units?.length || "M";
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

  // ═══════════════════════════════════════════════════════
  // STORIES
  // ═══════════════════════════════════════════════════════
  let storyNames: string[] = [];
  let zToStory = new Map<number, string>();

  if (e2kModel?.stories?.length) {
    // Use original story data
    const stories = e2kModel.stories; // bottom to top (already reversed by parser)
    lines.push(`$ STORIES - IN SEQUENCE FROM TOP`);
    for (let i = stories.length - 1; i >= 1; i--) {
      const h = rd(stories[i].height);
      lines.push(`  STORY "${stories[i].name}"  HEIGHT ${h} MASTERSTORY "Yes"  `);
    }
    lines.push(`  STORY "${stories[0].name}"  ELEV ${rd(stories[0].elev)} `);
    for (const s of stories) {
      storyNames.push(s.name);
      zToStory.set(rd(s.elev), s.name);
    }
  } else {
    // Reconstruct from Z elevations
    const zSet = new Set<number>();
    nodes.forEach(n => zSet.add(rd(n[2])));
    const sortedZ = [...zSet].sort((a, b) => a - b);

    storyNames.push("Base");
    zToStory.set(sortedZ[0], "Base");
    for (let i = 1; i < sortedZ.length; i++) {
      const name = `Level_${i}`;
      storyNames.push(name);
      zToStory.set(sortedZ[i], name);
    }

    lines.push(`$ STORIES - IN SEQUENCE FROM TOP`);
    for (let i = sortedZ.length - 1; i >= 1; i--) {
      lines.push(`  STORY "${storyNames[i]}"  HEIGHT ${rd(sortedZ[i] - sortedZ[i - 1])} MASTERSTORY "Yes"  `);
    }
    if (sortedZ.length > 0) lines.push(`  STORY "Base"  ELEV ${sortedZ[0]} `);
  }
  lines.push(``);

  // ═══════════════════════════════════════════════════════
  // GRIDS (only from e2kModel)
  // ═══════════════════════════════════════════════════════
  if (e2kModel?.grids?.length) {
    lines.push(`$ GRID LINES`);
    for (const g of e2kModel.grids) {
      lines.push(`  GRID "${g.label}"  TYPE "${g.dir === "X" ? "X" : "Y"}"  COORD ${g.coord}  `);
    }
    lines.push(``);
  }

  // ═══════════════════════════════════════════════════════
  // MATERIALS
  // ═══════════════════════════════════════════════════════
  lines.push(`$ MATERIAL PROPERTIES`);
  if (e2kModel?.materials) {
    for (const [name, mat] of e2kModel.materials) {
      const wt = mat.density ? mat.density * 9.81 : 0;
      lines.push(`  MATERIAL  "${name}"    TYPE "${mat.type}"    WEIGHTPERVOLUME ${wt || 0}`);
      lines.push(`  MATERIAL  "${name}"    SYMTYPE "Isotropic"  E ${mat.E}  U ${mat.nu}  A 1.17E-05`);
      if (mat.fy) lines.push(`  MATERIAL  "${name}"    FY ${mat.fy}`);
      if (mat.fc) lines.push(`  MATERIAL  "${name}"    FC ${mat.fc}`);
    }
  } else {
    const uniqueE = new Set<number>();
    elementInputs.elasticities?.forEach(v => uniqueE.add(v));
    let mi = 0;
    for (const E of uniqueE) {
      const name = `Mat_${++mi}`;
      lines.push(`  MATERIAL  "${name}"    TYPE "Steel"    WEIGHTPERVOLUME 7.849`);
      lines.push(`  MATERIAL  "${name}"    SYMTYPE "Isotropic"  E ${E}  U 0.3  A 1.17E-05`);
    }
  }
  lines.push(``);

  // ═══════════════════════════════════════════════════════
  // FRAME SECTIONS
  // ═══════════════════════════════════════════════════════
  lines.push(`$ FRAME SECTIONS`);
  if (e2kModel?.frameSections) {
    for (const [name, sec] of e2kModel.frameSections) {
      let secLine = `  FRAMESECTION  "${name}"  MATERIAL "${sec.material}"  SHAPE "${sec.shape}"`;
      if (sec.D) secLine += `  D ${sec.D}`;
      if (sec.B) secLine += `  B ${sec.B}`;
      if (sec.TF) secLine += `  TF ${sec.TF}`;
      if (sec.TW) secLine += `  TW ${sec.TW}`;
      lines.push(secLine);
    }
  } else {
    // Reconstruct from sectionShapes
    const writtenSections = new Set<string>();
    const uniqueE = new Set<number>();
    elementInputs.elasticities?.forEach(v => uniqueE.add(v));
    const matNames = new Map<number, string>();
    let mi = 0;
    for (const E of uniqueE) matNames.set(E, `Mat_${++mi}`);

    elements.forEach((el, i) => {
      if (el.length !== 2) return;
      const shape = elementInputs.sectionShapes?.get(i);
      const E = elementInputs.elasticities?.get(i) ?? 0;
      const matName = matNames.get(E) || "Mat_1";
      const secName = shape?.name || `Sec_${i}`;
      if (writtenSections.has(secName)) return;
      writtenSections.add(secName);

      if (shape) {
        const h = shape.h ?? 0, b = shape.b ?? 0, d = shape.d ?? 0;
        const tfw = shape.tf ?? 0, tww = shape.tw ?? 0;
        const shapeMap: Record<string, string> = {
          rect: "Concrete Rectangular", circ: "Concrete Circle",
          I: "Steel I/Wide Flange", HSS: "Steel Tube", pipe: "Steel Pipe",
          L: "Steel Angle", C: "Steel Channel", "2C": "Steel Double Channel",
        };
        const etabsShape = shapeMap[shape.type] || "Concrete Rectangular";
        let line = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "${etabsShape}"`;
        if (h) line += `  D ${h}`;
        if (b) line += `  B ${b}`;
        if (d && !h) line += `  D ${d}`;
        if (tfw) line += `  TF ${tfw}`;
        if (tww) line += `  TW ${tww}`;
        lines.push(line);
      } else {
        lines.push(`  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "Concrete Rectangular"  D 0.5 B 0.3 `);
      }
    });
  }
  lines.push(``);

  // ═══════════════════════════════════════════════════════
  // POINT COORDINATES
  // ═══════════════════════════════════════════════════════
  lines.push(`$ POINT COORDINATES`);

  // Build plan point mapping
  const xyToPoint = new Map<string, string>();
  let ptIdx = 0;
  nodes.forEach(n => {
    const key = `${rd(n[0])},${rd(n[1])}`;
    if (!xyToPoint.has(key)) xyToPoint.set(key, `${++ptIdx}`);
  });

  // If e2kModel has nodeNames, use original point names
  // nodeNames format: "pt@story" → extract unique pts
  if (e2kModel?.nodeNames?.length) {
    const usedPts = new Set<string>();
    for (let ni = 0; ni < nodes.length; ni++) {
      const name = e2kModel.nodeNames[ni];
      if (!name) continue;
      const pt = name.split("@")[0];
      if (usedPts.has(pt)) continue;
      usedPts.add(pt);
      const n = nodes[ni];
      lines.push(`  POINT "${pt}"  ${rd(n[0])} ${rd(n[1])} `);
    }
  } else {
    for (const [key, ptName] of xyToPoint) {
      const [x, y] = key.split(",").map(Number);
      lines.push(`  POINT "${ptName}"  ${x} ${y} `);
    }
  }
  lines.push(``);

  // Helper: node → (point, story) using original names or reconstructed
  const nodeToPS = (ni: number): { pt: string; story: string } => {
    if (e2kModel?.nodeNames?.[ni]) {
      const parts = e2kModel.nodeNames[ni].split("@");
      return { pt: parts[0], story: parts[1] || "Base" };
    }
    const n = nodes[ni];
    const key = `${rd(n[0])},${rd(n[1])}`;
    return { pt: xyToPoint.get(key) || "1", story: zToStory.get(rd(n[2])) || "Base" };
  };

  // ═══════════════════════════════════════════════════════
  // LINE CONNECTIVITIES
  // ═══════════════════════════════════════════════════════
  lines.push(`$ LINE CONNECTIVITIES`);
  const lineAssignEntries: string[] = [];
  const sortedZ = [...zToStory.keys()].sort((a, b) => a - b);

  elements.forEach((el, i) => {
    if (el.length !== 2) return;

    const eName = e2kModel?.elementNames?.[i] || `E${i + 1}`;
    const eType = e2kModel?.elementTypes?.[i] || guessElementType(nodes, el);
    const eStory = e2kModel?.elementStories?.[i] || nodeToPS(el[1]).story;
    const secName = e2kModel?.elementSections?.get(i) || elementInputs.sectionShapes?.get(i)?.name || `Sec_${i}`;

    if (eType === "BEAM") {
      const ps0 = nodeToPS(el[0]);
      const ps1 = nodeToPS(el[1]);
      lines.push(`  LINE  "${eName}"  BEAM  "${ps0.pt}"  "${ps1.pt}"  0`);
    } else {
      // Column/Brace: bottom first
      const bot = nodes[el[0]][2] <= nodes[el[1]][2] ? el[0] : el[1];
      const top = nodes[el[0]][2] <= nodes[el[1]][2] ? el[1] : el[0];
      const psBot = nodeToPS(bot);
      const psTop = nodeToPS(top);
      const zBot = rd(nodes[bot][2]), zTop = rd(nodes[top][2]);
      const botIdx = sortedZ.indexOf(zBot);
      const topIdx = sortedZ.indexOf(zTop);
      const nStories = Math.max(1, topIdx >= 0 && botIdx >= 0 ? topIdx - botIdx : 1);
      lines.push(`  LINE  "${eName}"  ${eType}  "${psBot.pt}"  "${psTop.pt}"  ${nStories}`);
    }

    // Build LINE ASSIGN entry
    let laLine = `  LINEASSIGN  "${eName}"  "${eStory}"  SECTION "${secName}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"`;

    // Rigid zone factor
    const offsets = elementInputs.rigidOffsets?.get(i);
    if (offsets && (offsets[0] > 0 || offsets[1] > 0)) {
      laLine += `  RIGIDZONE ${rd(offsets[0])}`;
    }

    // Moment releases
    const rel = elementInputs.momentReleases?.get(i);
    if (rel) {
      const relNames = ["TI", "M2I", "M3I", "TJ", "M2J", "M3J"];
      const active = relNames.filter((_, j) => rel[j]);
      if (active.length > 0) {
        laLine += `  RELEASE "${active.join(" ")}"`;
      }
    }

    lineAssignEntries.push(laLine);
  });
  lines.push(``);

  // ═══════════════════════════════════════════════════════
  // POINT ASSIGNS (restraints)
  // ═══════════════════════════════════════════════════════
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

  // ═══════════════════════════════════════════════════════
  // LINE ASSIGNS
  // ═══════════════════════════════════════════════════════
  lines.push(`$ LINE ASSIGNS`);
  lineAssignEntries.forEach(la => lines.push(la));
  lines.push(``);

  // ═══════════════════════════════════════════════════════
  // LOAD PATTERNS
  // ═══════════════════════════════════════════════════════
  lines.push(`$ LOAD PATTERNS`);
  lines.push(`  LOADPATTERN "Dead"  TYPE "Dead"  SELFWEIGHT 1`);
  lines.push(`  LOADPATTERN "Live"  TYPE "Live"  `);
  lines.push(``);

  // ═══════════════════════════════════════════════════════
  // POINT OBJECT LOADS
  // ═══════════════════════════════════════════════════════
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

/** Guess element type from geometry when no e2k metadata */
function guessElementType(nodes: Node[], el: number[]): string {
  const n0 = nodes[el[0]], n1 = nodes[el[1]];
  const dz = Math.abs(n1[2] - n0[2]);
  const dxy = Math.sqrt((n1[0] - n0[0]) ** 2 + (n1[1] - n0[1]) ** 2);
  const isCol = dz > dxy * 0.5;
  const isBrace = isCol && dxy > 0.01;
  return isBrace ? "BRACE" : isCol ? "COLUMN" : "BEAM";
}
