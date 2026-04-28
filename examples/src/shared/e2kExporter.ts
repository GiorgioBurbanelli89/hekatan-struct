/**
 * ETABS .e2k File Exporter
 *
 * Strategy:
 *  - When e2kModel with rawSections is available (round-trip from import),
 *    re-emit the original raw text for each section exactly as ETABS wrote it.
 *  - When no e2kModel exists (model created from scratch), reconstruct best-effort.
 */
import type { Node, Element, NodeInputs, ElementInputs, SectionShape } from "hekatan-fem";
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
  const raw = e2kModel?.rawSections;

  // ═══════════════════════════════════════════
  // If we have raw sections from the original file, re-emit them verbatim
  // ═══════════════════════════════════════════
  if (raw && raw.size > 0) {
    return exportFromRaw(raw, e2kModel!);
  }

  // ═══════════════════════════════════════════
  // Otherwise, reconstruct from scratch (best-effort)
  // ═══════════════════════════════════════════
  return exportFromScratch(input);
}

/**
 * Re-emit the original e2k file sections verbatim.
 * This preserves ETABS compatibility perfectly.
 */
function exportFromRaw(raw: Map<string, string[]>, model: E2kModel): string {
  const out: string[] = [];

  // Ordered section names as they appear in ETABS e2k files
  const sectionOrder = [
    "PROGRAM INFORMATION",
    "CONTROLS",
    "STORIES - IN SEQUENCE FROM TOP",
    "GRIDS",
    "DIAPHRAGM NAMES",
    "MATERIAL PROPERTIES",
    "REBAR DEFINITIONS",
    "FRAME SECTIONS",
    "AUTO SELECT SECTION LISTS",
    "CONCRETE SECTIONS",
    "WALL/SLAB/DECK SECTIONS",
    "POINT COORDINATES",
    "LINE CONNECTIVITIES",
    "AREA CONNECTIVITIES",
    "POINT ASSIGNS",
    "LINE ASSIGNS",
    "AREA ASSIGNS",
    "LOAD PATTERNS",
    "POINT OBJECT LOADS",
    "FRAME OBJECT LOADS",
    "SHELL OBJECT LOADS",
    "ANALYSIS OPTIONS",
    "MASS SOURCE",
    "FUNCTIONS",
    "LOAD CASES",
    "LOAD COMBINATIONS",
  ];

  out.push(`$ File exported from Awatif FEM Studio (round-trip)`);
  out.push(``);

  for (const secName of sectionOrder) {
    const lines = raw.get(secName);
    if (!lines || lines.length === 0) continue;
    out.push(`$ ${secName}`);
    for (const line of lines) {
      out.push(line);
    }
    out.push(``);
  }

  // Emit any sections not in our ordered list
  for (const [secName, lines] of raw) {
    if (sectionOrder.includes(secName)) continue;
    if (lines.length === 0) continue;
    out.push(`$ ${secName}`);
    for (const line of lines) {
      out.push(line);
    }
    out.push(``);
  }

  out.push(`  END`);
  out.push(`$ END OF MODEL FILE`);
  return out.join("\r\n");
}

/**
 * Best-effort reconstruction when no original e2k exists.
 */
function exportFromScratch(input: ExportE2kInput): string {
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

  // Stories from Z elevations.
  // Hekatan-Struct uses Z-up convention (CLAUDE.md: THREE.Object3D.DEFAULT_UP=(0,0,1)).
  // Node = [x_horizontal, y_horizontal, z_vertical]. ETABS .e2k POINT format
  // is (id, X, Y) with Z derived from STORY assignment.
  const zSet = new Set<number>();
  nodes.forEach(n => zSet.add(rd(n[2]))); // Z = vertical elevation
  const sortedZ = [...zSet].sort((a, b) => a - b);
  const storyNames: string[] = [];
  const zToStory = new Map<number, string>();
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
  lines.push(``);

  // Check if model has Q4 area elements (walls/slabs)
  const hasQ4 = elements.some(el => el.length === 4);
  if (hasQ4) {
    lines.push(`$ DIAPHRAGM NAMES`);
    lines.push(`  DIAPHRAGM "D1"    TYPE RIGID`);
    lines.push(``);
  }

  // Materials
  lines.push(`$ MATERIAL PROPERTIES`);
  const uniqueE = new Set<number>();
  elementInputs.elasticities?.forEach(v => uniqueE.add(v));
  const matNames = new Map<number, string>();
  let mi = 0;
  for (const E of uniqueE) {
    const name = `Mat_${++mi}`;
    matNames.set(E, name);
    lines.push(`  MATERIAL  "${name}"    TYPE "Concrete"    WEIGHTPERVOLUME 2.4`);
    lines.push(`  MATERIAL  "${name}"    SYMTYPE "Isotropic"  E ${E}  U 0.2  A 1E-05`);
  }
  lines.push(``);

  // Frame Sections — deduplicate by shape key (type+dimensions)
  lines.push(`$ FRAME SECTIONS`);
  const writtenSections = new Set<string>();
  const elemToSecName = new Map<number, string>(); // element index → section name
  const shapeKeyToSecName = new Map<string, string>(); // "type_h_b_tf_tw" → name

  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const shape = elementInputs.sectionShapes?.get(i);
    const E = elementInputs.elasticities?.get(i) ?? 0;
    const matName = matNames.get(E) || "Mat_1";

    const h = shape?.h ?? 0, b = shape?.b ?? 0, d = shape?.d ?? 0;
    const tfw = shape?.tf ?? 0, tww = shape?.tw ?? 0;
    const stype = shape?.type || "rect";

    // Build unique key from shape content
    const shapeKey = `${stype}_${h}_${b}_${d}_${tfw}_${tww}`;

    if (shape?.name && !shapeKeyToSecName.has(shapeKey)) {
      shapeKeyToSecName.set(shapeKey, shape.name);
    }

    let secName = shapeKeyToSecName.get(shapeKey);
    if (!secName) {
      // Auto-generate name from dimensions
      if (stype === "rect") secName = `R${rd(b*100)}x${rd(h*100)}`;
      else if (stype === "circ") secName = `C_D${rd(d*100)}`;
      else if (stype === "I") secName = `I_${rd(h*100)}`;
      else secName = `Sec_${writtenSections.size + 1}`;
      shapeKeyToSecName.set(shapeKey, secName);
    }

    elemToSecName.set(i, secName);

    if (writtenSections.has(secName)) return;
    writtenSections.add(secName);

    const shapeMap: Record<string, string> = {
      rect: "Concrete Rectangular", circ: "Concrete Circle",
      I: "Steel I/Wide Flange", HSS: "Steel Tube", pipe: "Steel Pipe",
      L: "Steel Angle", C: "Steel Channel", "2C": "Steel Double Channel",
    };
    const etabsShape = shapeMap[stype] || "Concrete Rectangular";
    let line = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "${etabsShape}"`;
    if (h) line += `  D ${h}`;
    if (b) line += `  B ${b}`;
    if (d && !h) line += `  D ${d}`;
    if (tfw) line += `  TF ${tfw}`;
    if (tww) line += `  TW ${tww}`;
    lines.push(line);
  });
  lines.push(``);

  // Plan Points (X, Y in plan; Z = elevation in Hekatan-Struct Z-up convention).
  // ETABS .e2k POINT format is `POINT id  X Y` (no Z) — Z comes from STORY.
  const xyToPoint = new Map<string, string>();
  let ptIdx = 0;
  nodes.forEach(n => {
    const key = `${rd(n[0])},${rd(n[1])}`; // X, Y = plan coords
    if (!xyToPoint.has(key)) xyToPoint.set(key, `${++ptIdx}`);
  });
  lines.push(`$ POINT COORDINATES`);
  for (const [key, ptName] of xyToPoint) {
    const [x, y] = key.split(",").map(Number);
    lines.push(`  POINT "${ptName}"  ${x} ${y} `);
  }
  lines.push(``);

  const nodeToPS = (ni: number): { pt: string; story: string } => {
    const n = nodes[ni];
    const key = `${rd(n[0])},${rd(n[1])}`; // X, Y = plan coords
    return { pt: xyToPoint.get(key) || "1", story: zToStory.get(rd(n[2])) || "Base" }; // Z = elevation
  };

  // Lines
  lines.push(`$ LINE CONNECTIVITIES`);
  const laEntries: string[] = [];
  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const type = guessElementType(nodes, el);
    const secName = elemToSecName.get(i) || `Sec_${i}`;

    if (type === "BEAM") {
      const ps0 = nodeToPS(el[0]), ps1 = nodeToPS(el[1]);
      lines.push(`  LINE  "E${i + 1}"  BEAM  "${ps0.pt}"  "${ps1.pt}"  0`);
      laEntries.push(`  LINEASSIGN  "E${i + 1}"  "${ps0.story}"  SECTION "${secName}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
    } else {
      // COLUMN/BRACE: Z-up convention: n[2] = elevation
      // In e2k format, columns use the SAME plan point at both ends
      const bot = nodes[el[0]][2] <= nodes[el[1]][2] ? el[0] : el[1];
      const top = nodes[el[0]][2] <= nodes[el[1]][2] ? el[1] : el[0];
      const psBot = nodeToPS(bot), psTop = nodeToPS(top);
      const zBot = rd(nodes[bot][2]), zTop = rd(nodes[top][2]);
      const botIdx = sortedZ.indexOf(zBot), topIdx = sortedZ.indexOf(zTop);
      const nStories = Math.max(1, topIdx >= 0 && botIdx >= 0 ? topIdx - botIdx : 1);
      // Column: same point at top and bottom, nStories determines height
      lines.push(`  LINE  "E${i + 1}"  ${type}  "${psTop.pt}"  "${psTop.pt}"  ${nStories}`);
      // Need LINEASSIGN for EACH story the column spans
      for (let s = 0; s < nStories; s++) {
        const storyIdx = topIdx - s;
        if (storyIdx >= 0 && storyIdx < storyNames.length) {
          laEntries.push(`  LINEASSIGN  "E${i + 1}"  "${storyNames[storyIdx]}"  SECTION "${secName}"  MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }
  });
  lines.push(``);

  // Supports
  lines.push(`$ POINT ASSIGNS`);
  nodeInputs.supports?.forEach((sup, nodeIdx) => {
    const dofs: string[] = [];
    if (sup[0]) dofs.push("UX"); if (sup[1]) dofs.push("UY"); if (sup[2]) dofs.push("UZ");
    if (sup[3]) dofs.push("RX"); if (sup[4]) dofs.push("RY"); if (sup[5]) dofs.push("RZ");
    if (dofs.length > 0) {
      const ps = nodeToPS(nodeIdx);
      lines.push(`  POINTASSIGN  "${ps.pt}"  "${ps.story}"  RESTRAINT "${dofs.join(" ")}"  `);
    }
  });
  lines.push(``);

  // Line Assigns
  lines.push(`$ LINE ASSIGNS`);
  laEntries.forEach(la => lines.push(la));
  lines.push(``);

  // ═══════════════════════════════════════════
  // AREA ELEMENTS (Q4 shells: walls + slabs)
  // ═══════════════════════════════════════════
  const areaElements: { idx: number; el: number[]; isWall: boolean }[] = [];
  elements.forEach((el, i) => {
    if (el.length === 4) {
      // Determine if wall (vertical) or slab (horizontal) by normal direction.
      // Hekatan-Struct uses Z-up: normal vertical (high |nz|) → SLAB (floor);
      // normal mostly horizontal (low |nz|) → WALL (panel).
      const p0 = nodes[el[0]], p1 = nodes[el[1]], p2 = nodes[el[2]];
      const v1 = [p1[0]-p0[0], p1[1]-p0[1], p1[2]-p0[2]];
      const v2 = [p2[0]-p0[0], p2[1]-p0[1], p2[2]-p0[2]];
      // Cross product v1 × v2 = normal vector
      const nx = v1[1]*v2[2] - v1[2]*v2[1];
      const ny = v1[2]*v2[0] - v1[0]*v2[2];
      const nz = v1[0]*v2[1] - v1[1]*v2[0];
      const nLen = Math.sqrt(nx*nx + ny*ny + nz*nz);
      const isWall = nLen > 1e-10 && (Math.abs(nz) / nLen) < 0.5;
      // |nz|/|n| close to 1 → horizontal slab; close to 0 → vertical wall.
      areaElements.push({ idx: i, el, isWall });
    }
  });

  if (areaElements.some(a => !a.isWall)) {
    lines.push(`$ SLAB PROPERTIES`);
    const t_slab = elementInputs.thicknesses?.values().next().value ?? 0.15;
    lines.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${matNames.values().next().value || 'Mat_1'}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${t_slab} `);
    lines.push(``);
  }
  if (areaElements.some(a => a.isWall)) {
    lines.push(`$ WALL PROPERTIES`);
    const t_wall = elementInputs.thicknesses?.values().next().value ?? 0.2;
    lines.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${matNames.values().next().value || 'Mat_1'}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${t_wall} `);
    lines.push(``);
  }

  if (areaElements.length > 0) {
    lines.push(`$ AREA CONNECTIVITIES`);
    const aaEntries: string[] = [];
    areaElements.forEach((ae, ai) => {
      const { el, isWall } = ae;
      const aName = isWall ? `W${ai + 1}` : `F${ai + 1}`;
      const aType = isWall ? "PANEL" : "FLOOR";
      // Get plan points for 4 nodes
      const ps = el.map(ni => nodeToPS(ni));
      if (isWall) {
        // PANEL: pt1 pt2 pt2 pt1 nStories nStories 0 0
        // Use bottom-left and bottom-right points (Z-up: n[2] = elevation)
        const bot0 = nodes[el[0]][2] <= nodes[el[2]][2] ? 0 : 2;
        const bot1 = nodes[el[1]][2] <= nodes[el[3]][2] ? 1 : 3;
        lines.push(`  AREA "${aName}"  ${aType}  4  "${ps[bot0].pt}"  "${ps[bot1].pt}"  "${ps[bot1].pt}"  "${ps[bot0].pt}"  1  1  0  0  `);
        // Assign at story of top nodes
        const topStory = ps[bot0 === 0 ? 2 : 0].story;
        aaEntries.push(`  AREAASSIGN  "${aName}"  "${topStory}"  SECTION "Muro"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      } else {
        // FLOOR: pt1 pt2 pt3 pt4 0 0 0 0
        lines.push(`  AREA "${aName}"  ${aType}  4  "${ps[0].pt}"  "${ps[1].pt}"  "${ps[2].pt}"  "${ps[3].pt}"  0  0  0  0  `);
        aaEntries.push(`  AREAASSIGN  "${aName}"  "${ps[0].story}"  SECTION "Losa"  DIAPH  "D1"  OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
      }
    });
    lines.push(``);

    lines.push(`$ AREA ASSIGNS`);
    aaEntries.forEach(aa => lines.push(aa));
    lines.push(``);
  }

  // Loads
  lines.push(`$ LOAD PATTERNS`);
  lines.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  1`);
  lines.push(`  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0`);
  lines.push(``);

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

  lines.push(`  END`);
  lines.push(`$ END OF MODEL FILE`);
  return lines.join("\r\n");
}

/** Guess element type from geometry (Y-up convention: Y = vertical) */
function guessElementType(nodes: Node[], el: number[]): string {
  const n0 = nodes[el[0]], n1 = nodes[el[1]];
  const dz = Math.abs(n1[2] - n0[2]); // Z = vertical (Hekatan-Struct convention)
  const dxy = Math.sqrt((n1[0] - n0[0]) ** 2 + (n1[1] - n0[1]) ** 2); // XY = horizontal plane
  const isCol = dz > dxy * 0.5;
  const isBrace = isCol && dxy > 0.01;
  return isBrace ? "BRACE" : isCol ? "COLUMN" : "BEAM";
}
