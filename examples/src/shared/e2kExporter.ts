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
  /**
   * Modo de manejo de peso propio en el pattern Dead:
   *  - "auto" (default): SELFWEIGHT=1 → ETABS computa γ·V de cada material
   *    automáticamente. Se omiten cargas nodales FZ (asume que son self-weight).
   *  - "manual": SELFWEIGHT=0 → el peso propio se emite como POINTLOAD nodal
   *    (control fino del lumping). Para que ETABS resuelva las cargas
   *    correctamente, se emite POINTASSIGN por cada (plan-point, story) con
   *    carga o restraint, registrando el plan-point a esa altura.
   */
  weightMode?: "auto" | "manual";
  /**
   * Property modifiers por elemento (multipliers ETABS-style sobre A, I, etc).
   * Si no se provee, hekatan asume que los valores en `elementInputs.areas/Iy/Iz`
   * ya incluyen los modifiers baked-in y se emite `PROPMODIFIERS` = 1.0 (no-op).
   * Formato: 8 valores [A, As2, As3, Torsion, I22, I33, Mass, Weight].
   */
  propertyModifiers?: Map<number, [number, number, number, number, number, number, number, number]>;
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
 *
 * Internal model units (Hekatan-Struct convention, see shared/units.ts):
 *   - Force:  kN
 *   - Length: m
 *   - E:      kN/m²
 *
 * Output target units come from `units` arg. We convert numbers accordingly.
 */
function exportFromScratch(input: ExportE2kInput): string {
  const { nodes, elements, nodeInputs, elementInputs, title, units } = input;
  const force = units?.force || "Tonf";
  const length = units?.length || "m";
  const lines: string[] = [];
  const rd = (v: number) => Math.round(v * 10000) / 10000;

  // ── UNIT CONVERSION (internal kN-m → target force-length) ────────────
  // Hekatan-Struct stores everything in kN-m internally. ETABS .e2k accepts
  // any consistent system as long as numbers + UNITS header agree.
  // 1 tonf = 9.80665 kN  (force unit)
  // 1 m    = 1 m         (length unaltered, all SI variants use meters)
  const forceFactor = (() => {
    const f = (force || "Tonf").toLowerCase();
    if (f === "tonf" || f === "tonf-f") return 1 / 9.80665;     // kN → tonf
    if (f === "kn"   || f === "kn-f")   return 1;               // kN → kN
    if (f === "kgf"  || f === "kg")     return 1 / 0.00980665;  // kN → kgf
    if (f === "kip"  || f === "kips")   return 1 / 4.44822;     // kN → kip
    return 1;
  })();
  // Force conversion (loads, reactions, point loads)
  const cF  = (kN: number) => kN * forceFactor;
  // Stress conversion (E, fy): kN/m² → tonf/m² = same factor as force
  const cE  = (kN_m2: number) => kN_m2 * forceFactor;
  // Volume weight: kN/m³ → tonf/m³ = same factor as force (length cancels)
  const cWV = (kN_m3: number) => kN_m3 * forceFactor;

  // Header reconocido por ETABS 22.x. PROGRAM debe decir "ETABS" exactamente
  // o ETABS rechaza el archivo con "May not be a valid ETABS X.X.X text file".
  // Ground truth: Benchmark_Placa/.../etabs_canonical/case_cantileverBeam.e2k (ETABS 22.6.0).
  const now = new Date();
  const dateStr = `${now.getMonth()+1}/${now.getDate()}/${now.getFullYear()}  ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  lines.push(`$ File   "Hekatan_export.e2k"  saved ${dateStr} in ETABS 22.6.0`);
  lines.push(``);
  lines.push(`$ PROGRAM INFORMATION`);
  lines.push(`  PROGRAM  "ETABS"  VERSION "22.6.0"  `);
  lines.push(``);
  lines.push(`$ CONTROLS`);
  lines.push(`  UNITS  "${force}"  "${length}"  "C"  `);
  lines.push(`  TITLE1  "Hekatan Struct export"  `);
  if (title) lines.push(`  TITLE2  "${title}"  `);
  lines.push(`  PREFERENCE  MERGETOL 0.1  `);
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

  // ── MATERIAL PROPERTIES ─────────────────────────────────────────────
  // Detect material type by E (kN/m² = Pa·1000):
  //   E ≥ 100,000,000 kN/m² (= 100 GPa) → STEEL  (acero ~200 GPa)
  //   E <  100,000,000 kN/m²            → CONCRETE (hormigón ~25 GPa)
  // Auto-emit weight per volume + Poisson + thermal coeff for each.
  lines.push(`$ MATERIAL PROPERTIES`);
  const uniqueE = new Set<number>();
  elementInputs.elasticities?.forEach(v => uniqueE.add(v));
  const matNames = new Map<number, string>();
  const matIsSteel = new Map<number, boolean>();
  let miStl = 0, miCnc = 0;
  // Buscar densidad real por valor de E (densities está en kg/m³ → kN/m³ × g)
  // Si hekatan provee densidades por elemento, usamos la moda para el material
  // que comparte ese E. Si no hay densidades, fallback a defaults estándar.
  const G_KN_PER_KG = 9.80665e-3;  // kg/m³ → kN/m³
  const wpvByE = new Map<number, number>();
  if (elementInputs.densities && elementInputs.densities.size > 0) {
    const densitiesByE = new Map<number, number[]>();
    elementInputs.densities.forEach((rho, elemIdx) => {
      const E = elementInputs.elasticities?.get(elemIdx);
      if (E === undefined) return;
      if (!densitiesByE.has(E)) densitiesByE.set(E, []);
      densitiesByE.get(E)!.push(rho);
    });
    densitiesByE.forEach((arr, E) => {
      // Promedio (todos los elementos del mismo E suelen compartir ρ)
      const avg = arr.reduce((s, v) => s + v, 0) / arr.length;
      // Heurística unidad: si avg > 100 → asumir kg/m³ (steel ≈ 7850), si < 100 → t/m³
      const wpv = avg > 100 ? avg * G_KN_PER_KG : avg * 9.80665;
      wpvByE.set(E, wpv);
    });
  }
  for (const E_kNm2 of uniqueE) {
    const isSteel = E_kNm2 >= 1e8;  // >= 100 GPa
    const name = isSteel ? `Steel_${++miStl}` : `Conc_${++miCnc}`;
    matNames.set(E_kNm2, name);
    matIsSteel.set(E_kNm2, isSteel);

    // Weight per volume — usar densidad real de hekatan si está disponible;
    // si no, fallback a defaults estándar (steel ≈ 76.97, concrete ≈ 24.0 kN/m³)
    const wpv_kN = wpvByE.get(E_kNm2) ?? (isSteel ? 76.97 : 24.0);
    const E_out  = cE(E_kNm2);
    const wpv_out = cWV(wpv_kN);
    const nu = isSteel ? 0.3 : 0.2;
    const alpha = isSteel ? 1.17e-5 : 1.0e-5;

    if (isSteel) {
      lines.push(`  MATERIAL  "${name}"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${rd(wpv_out)}`);
      lines.push(`  MATERIAL  "${name}"    SYMTYPE "Isotropic"  E ${rd(E_out)}  U ${nu}  A ${alpha}`);
      // FY/FU típicos A572Gr50 en tonf/m² (35,153 / 45,699)
      const fy_kN = 345e3, fu_kN = 450e3;
      lines.push(`  MATERIAL  "${name}"  FY ${rd(cE(fy_kN))}  FU ${rd(cE(fu_kN))}  FYE ${rd(cE(fy_kN*1.1))}  FUE ${rd(cE(fu_kN*1.1))}`);
    } else {
      lines.push(`  MATERIAL  "${name}"    TYPE "Concrete"    WEIGHTPERVOLUME ${rd(wpv_out)}`);
      lines.push(`  MATERIAL  "${name}"    SYMTYPE "Isotropic"  E ${rd(E_out)}  U ${nu}  A ${alpha}`);
      // f'c típico 24 MPa en tonf/m² (≈ 2,448)
      const fc_kN = 24e3;
      lines.push(`  MATERIAL  "${name}"    FC ${rd(cE(fc_kN))}`);
    }
  }
  lines.push(``);

  // ── FRAME SECTIONS ──────────────────────────────────────────────────
  // Si hay sectionShapes válidos: usar dimensiones del shape.
  // Si NO: derivar h, b equivalentes desde area / momentos de inercia
  //        (rectangular equivalent), de modo que ETABS calcule la misma A,
  //        I33, I22 que tiene Hekatan.
  //
  // Para una sección rectangular b×h:
  //   A    = b·h
  //   I33  = b·h³/12   (eje fuerte, "y" en Hekatan / "I22" en ETABS si col)
  //   I22  = h·b³/12   (eje débil)
  //
  // Conociendo A, I33, I22:
  //   h = √(12·I33 / b), pero b = A/h ⇒ h⁴ = 12·I33·h/A ⇒ h³ = 12·I33/A · h
  //   Mejor: h = √(12·I33/A)·something… resolvemos como sistema:
  //     b·h = A
  //     b·h³ = 12·I33
  //   Dividiendo:  h² = 12·I33 / A     →  h = √(12·I33/A)
  //                b  = A / h
  lines.push(`$ FRAME SECTIONS`);
  const writtenSections = new Set<string>();
  const elemToSecName = new Map<number, string>();
  const shapeKeyToSecName = new Map<string, string>();

  const minDim = 0.05; // 5 cm mínimo, evita "R0x0"

  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const shape = elementInputs.sectionShapes?.get(i);
    const E_kNm2 = elementInputs.elasticities?.get(i) ?? 0;
    const matName = matNames.get(E_kNm2) || "Conc_1";
    const isSteel = matIsSteel.get(E_kNm2) ?? (E_kNm2 >= 1e8);

    const A      = elementInputs.areas?.get(i) ?? 0;
    const I33    = elementInputs.momentsOfInertiaY?.get(i) ?? 0;
    const I22    = elementInputs.momentsOfInertiaZ?.get(i) ?? 0;
    const J      = elementInputs.torsionalConstants?.get(i) ?? 0;

    let stype = shape?.type || "rect";
    let h     = shape?.h ?? 0;
    let b     = shape?.b ?? 0;
    let d     = shape?.d ?? 0;
    const tfw = shape?.tf ?? 0;
    const tww = shape?.tw ?? 0;

    // Si no hay shape válido, derivar h, b equivalentes desde A, I
    if (h <= 0 && b <= 0 && d <= 0 && A > 0) {
      if (I33 > 0) {
        h = Math.sqrt(12 * I33 / A);
        b = A / h;
      } else {
        // Sección sin I → cuadrada equivalente
        h = b = Math.sqrt(A);
      }
      // Defaults razonables si los cálculos dan dimensiones absurdas
      if (!isFinite(h) || h < minDim) h = minDim;
      if (!isFinite(b) || b < minDim) b = minDim;
      stype = "rect";
    }
    // Si todavía no tenemos dimensiones, usar default
    if (h <= 0 && b <= 0 && d <= 0) {
      h = 0.30; b = 0.30; stype = "rect";
    }

    const shapeKey = `${stype}_${rd(h)}_${rd(b)}_${rd(d)}_${rd(tfw)}_${rd(tww)}_${matName}`;
    if (shape?.name && !shapeKeyToSecName.has(shapeKey)) {
      shapeKeyToSecName.set(shapeKey, shape.name);
    }
    let secName = shapeKeyToSecName.get(shapeKey);
    if (!secName) {
      const tag = isSteel ? "S" : "C";
      if (stype === "rect")     secName = `${tag}_R${Math.round(b*100)}x${Math.round(h*100)}`;
      else if (stype === "circ")secName = `${tag}_C_D${Math.round(d*100)}`;
      else if (stype === "I")   secName = `${tag}_I${Math.round(h*100)}x${Math.round(b*100)}`;
      else if (stype === "HSS") secName = `${tag}_HSS${Math.round(b*100)}x${Math.round(h*100)}x${Math.round(tww*1000)}`;
      else                      secName = `${tag}_Sec${writtenSections.size + 1}`;
      shapeKeyToSecName.set(shapeKey, secName);
    }
    elemToSecName.set(i, secName);

    if (writtenSections.has(secName)) return;
    writtenSections.add(secName);

    // ETABS shape: alinear con material (acero usa shapes "Steel ...")
    let etabsShape = "Concrete Rectangular";
    if (isSteel) {
      if      (stype === "I")    etabsShape = "Steel I/Wide Flange";
      else if (stype === "HSS")  etabsShape = "Steel Tube";
      else if (stype === "pipe") etabsShape = "Steel Pipe";
      else if (stype === "L")    etabsShape = "Steel Angle";
      else if (stype === "C")    etabsShape = "Steel Channel";
      else if (stype === "2C")   etabsShape = "Steel Double Channel";
      else                       etabsShape = "Steel Rectangular";
    } else {
      if      (stype === "circ") etabsShape = "Concrete Circle";
      else                       etabsShape = "Concrete Rectangular";
    }

    let line = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "${etabsShape}"`;
    if (h) line += `  D ${rd(h)}`;
    if (b) line += `  B ${rd(b)}`;
    if (d && !h) line += `  D ${rd(d)}`;
    if (tfw) line += `  TF ${rd(tfw)}`;
    if (tww) line += `  TW ${rd(tww)}`;
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

  // ── Helper: construir cláusulas extras de LINEASSIGN ────────────────
  // Genera PROPMODIFIERS, RELEASE, CARDINALPT, LENGTHOFFI/J según lo que
  // hekatan tenga en elementInputs[i]. Si no hay nada, devuelve "" y
  // la línea queda con sólo SECTION + MINNUMSTA + AUTOMESH.
  const buildLineExtras = (i: number): string => {
    const parts: string[] = [];

    // Property Modifiers (ETABS: 8 multipliers [A, As2, As3, J, I22, I33, Mass, Weight])
    const mods = input.propertyModifiers?.get(i);
    if (mods && mods.some((m: number) => Math.abs(m - 1) > 1e-9)) {
      parts.push(`PROPMODIFIERS "${mods.map((m: number) => rd(m)).join(" ")}"`);
    }

    // End Releases — momentReleases puede ser 6 (rotacionales) o 12 (todos DOFs)
    const rel = elementInputs.momentReleases?.get(i);
    if (rel && rel.some(r => r)) {
      // Mapeo a notación ETABS: I-end = "T M2 M3" (torsion, bending 22, bending 33)
      // 6 flags [TI, M2I, M3I, TJ, M2J, M3J] o 12 flags [Fx..M3 I, Fx..M3 J]
      const tokens: string[] = [];
      if (rel.length === 12) {
        // [FxI, FyI, FzI, TI, M2I, M3I, FxJ, FyJ, FzJ, TJ, M2J, M3J]
        if (rel[0]) tokens.push("PI"); if (rel[1]) tokens.push("V2I"); if (rel[2]) tokens.push("V3I");
        if (rel[3]) tokens.push("TI"); if (rel[4]) tokens.push("M2I"); if (rel[5]) tokens.push("M3I");
        if (rel[6]) tokens.push("PJ"); if (rel[7]) tokens.push("V2J"); if (rel[8]) tokens.push("V3J");
        if (rel[9]) tokens.push("TJ"); if (rel[10]) tokens.push("M2J"); if (rel[11]) tokens.push("M3J");
      } else if (rel.length === 6) {
        // [TI, M2I, M3I, TJ, M2J, M3J]
        if (rel[0]) tokens.push("TI"); if (rel[1]) tokens.push("M2I"); if (rel[2]) tokens.push("M3I");
        if (rel[3]) tokens.push("TJ"); if (rel[4]) tokens.push("M2J"); if (rel[5]) tokens.push("M3J");
      }
      if (tokens.length > 0) parts.push(`RELEASE "${tokens.join(" ")}"`);
    }

    // Insertion Point (Cardinal Point en ETABS, valor 1-11; 10 = centroid)
    // hekatan guarda offset [dy, dz] del centroide; si es (0,0) → centroid (10).
    const ip = elementInputs.insertionPoints?.get(i);
    if (ip && (Math.abs(ip[0]) > 1e-9 || Math.abs(ip[1]) > 1e-9)) {
      parts.push(`LATEROFFSET ${rd(ip[0])} TRANSOFFSET ${rd(ip[1])}`);
    }

    // End Length Offsets — rigidOffsets [offsetI, offsetJ] como factores 0-1
    // RIGIDZONE es el factor (típico 0.5); LENGTHOFFI/J son las longitudes absolutas
    const off = elementInputs.rigidOffsets?.get(i);
    if (off && (Math.abs(off[0]) > 1e-9 || Math.abs(off[1]) > 1e-9)) {
      parts.push(`LENGTHOFFI ${rd(off[0])} LENGTHOFFJ ${rd(off[1])} RIGIDZONE 0.5`);
    }

    return parts.length > 0 ? ` ${parts.join(" ")} ` : "";
  };

  // Lines
  lines.push(`$ LINE CONNECTIVITIES`);
  const laEntries: string[] = [];
  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const type = guessElementType(nodes, el);
    const secName = elemToSecName.get(i) || `Sec_${i}`;
    const extras = buildLineExtras(i);

    if (type === "BEAM") {
      const ps0 = nodeToPS(el[0]), ps1 = nodeToPS(el[1]);
      lines.push(`  LINE  "E${i + 1}"  BEAM  "${ps0.pt}"  "${ps1.pt}"  0`);
      laEntries.push(`  LINEASSIGN  "E${i + 1}"  "${ps0.story}"  SECTION "${secName}" ${extras} MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
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
          laEntries.push(`  LINEASSIGN  "E${i + 1}"  "${storyNames[storyIdx]}"  SECTION "${secName}" ${extras} MINNUMSTA 3 AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
        }
      }
    }
  });
  lines.push(``);

  // ── POINT ASSIGNS ────────────────────────────────────────────────
  // Para Modo Manual emitimos POINTASSIGN por cada (plan-point, story)
  // que tenga carga o restraint — así ETABS "registra" el plan-point en
  // ese story y los POINTLOAD posteriores resuelven al joint correcto.
  // Para Modo Auto (default) sólo emitimos restraints.
  const weightMode = input.weightMode ?? "auto";
  const emittedPointAssigns = new Set<string>(); // key: "pt@story"
  lines.push(`$ POINT ASSIGNS`);
  nodeInputs.supports?.forEach((sup, nodeIdx) => {
    const dofs: string[] = [];
    if (sup[0]) dofs.push("UX"); if (sup[1]) dofs.push("UY"); if (sup[2]) dofs.push("UZ");
    if (sup[3]) dofs.push("RX"); if (sup[4]) dofs.push("RY"); if (sup[5]) dofs.push("RZ");
    if (dofs.length > 0) {
      const ps = nodeToPS(nodeIdx);
      lines.push(`  POINTASSIGN  "${ps.pt}"  "${ps.story}"  RESTRAINT "${dofs.join(" ")}"  `);
      emittedPointAssigns.add(`${ps.pt}@${ps.story}`);
    }
  });
  // En Modo Manual, asegurar POINTASSIGN existente para cada nodo con carga
  // (el "  " vacío sirve para registrar el plan-point a esa story sin asignar
  // restraint ni propiedad — necesario para que POINTLOAD resuelva).
  if (weightMode === "manual" && nodeInputs.loads) {
    nodeInputs.loads.forEach((_load, nodeIdx) => {
      const ps = nodeToPS(nodeIdx);
      const key = `${ps.pt}@${ps.story}`;
      if (!emittedPointAssigns.has(key)) {
        // Sólo necesitamos registrar la existencia — DIAPH "DISCONNECTED" es
        // un no-op semántico válido en ETABS que asegura el plan-point esté
        // ligado a esta story sin alterar diafragmas.
        lines.push(`  POINTASSIGN  "${ps.pt}"  "${ps.story}"  DIAPH "DISCONNECTED"  `);
        emittedPointAssigns.add(key);
      }
    });
  }
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

  // Material default para shells: el primer Concrete que aparezca; si solo
  // hay acero (raro en losas), usa el primer steel.
  const defaultShellMat = (() => {
    for (const [E, isStl] of matIsSteel) if (!isStl) return matNames.get(E);
    return matNames.values().next().value || "Conc_1";
  })();

  if (areaElements.some(a => !a.isWall)) {
    lines.push(`$ SLAB PROPERTIES`);
    const t_slab = elementInputs.thicknesses?.values().next().value ?? 0.15;
    lines.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${defaultShellMat}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${rd(t_slab)} `);
    lines.push(``);
  }
  if (areaElements.some(a => a.isWall)) {
    lines.push(`$ WALL PROPERTIES`);
    const t_wall = elementInputs.thicknesses?.values().next().value ?? 0.2;
    lines.push(`  SHELLPROP  "Muro"  PROPTYPE  "Wall"  MATERIAL "${defaultShellMat}"  MODELINGTYPE "ShellThick"  WALLTHICKNESS ${rd(t_wall)} `);
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

  // ── LOAD PATTERNS ───────────────────────────────────────────────────
  // Dos modos según `weightMode`:
  //   "auto" (default): SELFWEIGHT=1 → ETABS computa γ·V de cada material
  //     automáticamente. Se omiten cargas nodales FZ (asumidas self-weight).
  //     Se mantienen FX/FY (laterales) y momentos como POINTLOAD.
  //   "manual": SELFWEIGHT=0 + emite TODAS las cargas nodales (incluyendo FZ).
  //     Requiere que POINTASSIGN registre el plan-point en cada story con carga
  //     (ya emitido arriba). El formato POINTLOAD usa sintaxis `LC "Dead"`
  //     después de TYPE para mayor compatibilidad con ETABS.
  const selfWt = weightMode === "manual" ? 0 : 1;
  lines.push(`$ LOAD PATTERNS`);
  lines.push(`  LOADPATTERN "Dead"  TYPE  "Dead"  SELFWEIGHT  ${selfWt}`);
  lines.push(`  LOADPATTERN "Live"  TYPE  "Live"  SELFWEIGHT  0`);
  lines.push(``);

  // ── POINT OBJECT LOADS ─────────────────────────────────────────────
  const userLoadLines: string[] = [];
  if (nodeInputs.loads && nodeInputs.loads.size > 0) {
    nodeInputs.loads.forEach((load, nodeIdx) => {
      const [fx, fy, fz] = load;
      const ps = nodeToPS(nodeIdx);
      if (Math.abs(fx) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "FORCE"  LC "Dead"  FX ${rd(cF(fx))}  FY 0  FZ 0`);
      if (Math.abs(fy) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY ${rd(cF(fy))}  FZ 0`);
      // FZ: en modo "auto" se omite (lo computa ETABS via SELFWEIGHT=1);
      // en modo "manual" se emite explícitamente.
      if (weightMode === "manual" && Math.abs(fz) > 1e-10) {
        userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "FORCE"  LC "Dead"  FX 0  FY 0  FZ ${rd(cF(fz))}`);
      }
    });
  }
  if ((nodeInputs as any).moments && (nodeInputs as any).moments.size > 0) {
    (nodeInputs as any).moments.forEach((m: number[], nodeIdx: number) => {
      const [mx, my, mz] = m;
      const ps = nodeToPS(nodeIdx);
      if (Math.abs(mx) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "MOMENT"  LC "Dead"  MX ${rd(cF(mx))}  MY 0  MZ 0`);
      if (Math.abs(my) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY ${rd(cF(my))}  MZ 0`);
      if (Math.abs(mz) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "MOMENT"  LC "Dead"  MX 0  MY 0  MZ ${rd(cF(mz))}`);
    });
  }
  if (userLoadLines.length > 0) {
    lines.push(`$ POINT OBJECT LOADS`);
    userLoadLines.forEach(l => lines.push(l));
    lines.push(``);
  }

  // ── LOAD CASES (Linear Static) ─────────────────────────────────────
  // Sin esto ETABS NO corre análisis. Define Dead y Live como casos
  // estáticos lineales independientes.
  lines.push(`$ LOAD CASES`);
  lines.push(`  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  `);
  lines.push(`  LOADCASE "Dead"  LOADPAT  "Dead"  SF 1 `);
  lines.push(`  LOADCASE "Live"  TYPE  "Linear Static"  INITCOND  "PRESET"  `);
  lines.push(`  LOADCASE "Live"  LOADPAT  "Live"  SF 1 `);
  // Caso modal estándar (LTH para análisis dinámico) - opcional pero útil
  lines.push(`  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `);
  lines.push(`  LOADCASE "Modal"  MAXMODES 12  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `);
  lines.push(``);

  // ── LOAD COMBINATIONS ──────────────────────────────────────────────
  // Combo básico ASCE: 1.4D y 1.2D + 1.6L, por si el usuario quiere ver
  // el comportamiento factorizado en ETABS sin tener que crearlo a mano.
  lines.push(`$ LOAD COMBINATIONS`);
  lines.push(`  COMBO "1.4D"  TYPE "Linear Add"  `);
  lines.push(`  COMBO "1.4D"  LOADCASE  "Dead"  SF 1.4 `);
  lines.push(`  COMBO "1.2D+1.6L"  TYPE "Linear Add"  `);
  lines.push(`  COMBO "1.2D+1.6L"  LOADCASE  "Dead"  SF 1.2 `);
  lines.push(`  COMBO "1.2D+1.6L"  LOADCASE  "Live"  SF 1.6 `);
  lines.push(``);

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
