/**
 * 🏁 Cantilever Column — Shared model builder + ETABS .e2k exporter
 *
 * Construye una columna cantilever (1 columna vertical empotrada en base) para
 * los tres tipos de material:
 *   • Acero (HSS hueco rectangular)
 *   • Hormigón (sección rectangular sólida)
 *   • Mixta CFT (HSS + concreto fill, sección transformed steel-equiv)
 *
 * Genera un archivo .e2k REAL de ETABS para validación cruzada.
 * Formato basado en `Columna CFT Cantilivier.e2k` (ETABS 19.1.0).
 *
 * Resultados esperados (CFT 300×300×12 + 4000Psi, L=3m, peso propio):
 *   ETABS API:  Uz_top = -0.00276 mm
 *   Hekatan:    Uz_top = -0.00276 mm  (Δ < 0.5%)
 *   Analítico:  qL²/(2·E·A_eq) = -0.00276 mm
 */
import { deform, analyze, type Node, type Element } from "hekatan-fem";
import type { BuildStates } from "../workspace/exampleRegistry";

export type MaterialKey = 0 | 1 | 2;  // 0=Acero, 1=Hormigón, 2=CFT

export interface CantileverParams {
  L: number;          // altura columna (m)
  D_out: number;      // D / B sección (m)
  t_HSS: number;      // espesor pared HSS (m, sólo Acero/CFT)
  E_s: number;        // E acero (kN/m²)
  E_c: number;        // E concreto (kN/m²)
  gamma_s: number;    // γ_s acero (kN/m³)
  gamma_c: number;    // γ_c concreto (kN/m³)
  A_mod: number;      // Property modifier área axial
  As2_mod: number;    // Modifier cortante 2
  As3_mod: number;    // Modifier cortante 3
  J_mod: number;      // Modifier torsión
  I22_mod: number;    // Modifier flexión weak
  I33_mod: number;    // Modifier flexión strong
  P_lat: number;      // Carga lateral en tope X global (kN)
  /** Carga lateral en tope Y global (kN). Default 0 → solo X. */
  P_lat_y?: number;
  /** Momento en cabeza alrededor de X global (kN·m). Genera bendingsZ local. */
  M_top_x?: number;
  /** Momento en cabeza alrededor de Y global (kN·m). Genera bendingsY local. */
  M_top_y?: number;
  /** Momento torsor en cabeza alrededor de Z global (kN·m). Genera torsions. */
  M_top_z?: number;
  nSegments: number;  // Segmentos columna
}

export interface CantileverSection {
  matKey: MaterialKey;
  A_eq: number;
  I_eq: number;
  J_eq: number;
  E_col: number;
  G_col: number;
  q: number;          // peso propio uniforme (kN/m)
  sectionLabel: string;
  materialType: string;
  sectionInfoObj: {
    name: string;
    shape: string;
    D: number; B: number;
    TF?: number; TW?: number;
    material: string;
    fillMaterial?: string;
  };
}

/**
 * Calcula sección equivalente steel-transformed según el tipo de material.
 * Devuelve A, I, E, q (peso propio uniforme), y metadata e2k.
 */
export function computeCantileverSection(
  p: CantileverParams,
  matKey: MaterialKey,
): CantileverSection {
  const D = p.D_out, t = p.t_HSS;

  if (matKey === 0) {
    // ─── ACERO: HSS rectangular hueco ───
    const Di = D - 2 * t;
    const A_s = D * D - Di * Di;
    const I_s = (D ** 4 - Di ** 4) / 12;
    const J_s = 2 * I_s;
    const A_eq = A_s, I_eq = I_s, J_eq = J_s;
    const E_col = p.E_s, G_col = E_col / 2.6;
    const q = p.gamma_s * A_s;
    const nameEtabs = `HSS${(D * 1000).toFixed(0)}x${(D * 1000).toFixed(0)}x${(t * 1000).toFixed(0)}`;
    return {
      matKey, A_eq, I_eq, J_eq, E_col, G_col, q,
      sectionLabel: `HSS ${(D * 1000).toFixed(0)}×${(D * 1000).toFixed(0)}×${(t * 1000).toFixed(0)}mm`,
      materialType: "Acero",
      sectionInfoObj: {
        name: nameEtabs, shape: "Steel Tube",
        D, B: D, TF: t, TW: t,
        material: "A572Gr50",
      },
    };
  } else if (matKey === 1) {
    // ─── HORMIGÓN: rectangular sólido ───
    const A_eq = D * D;
    const I_eq = D * D * D * D / 12;
    const J_eq = 0.141 * D * D * D * D;
    const E_col = p.E_c, G_col = E_col / 2.4;
    const q = p.gamma_c * A_eq;
    const nameEtabs = `C${(D * 1000).toFixed(0)}x${(D * 1000).toFixed(0)}`;
    return {
      matKey, A_eq, I_eq, J_eq, E_col, G_col, q,
      sectionLabel: `Concrete Rectangular ${(D * 1000).toFixed(0)}×${(D * 1000).toFixed(0)}mm`,
      materialType: "Hormigón",
      sectionInfoObj: {
        name: nameEtabs, shape: "Concrete Rectangular",
        D, B: D,
        material: "concrete",
      },
    };
  } else {
    // ─── MIXTA CFT: HSS + concreto fill (transformed steel-equiv) ───
    const Di = D - 2 * t;
    const A_s = D * D - Di * Di;
    const A_c = Di * Di;
    const I_s = (D ** 4 - Di ** 4) / 12;
    const I_c = Di ** 4 / 12;
    const J_s = 2 * I_s;
    const n = p.E_s / p.E_c;
    const A_eq = A_s + A_c / n;
    const I_eq = I_s + I_c / n;
    const J_eq = J_s;
    const E_col = p.E_s, G_col = E_col / 2.6;
    const q = p.gamma_s * A_s + p.gamma_c * A_c;
    const nameEtabs = `CR${(D * 1000).toFixed(0)}X${(D * 1000).toFixed(0)}X${(t * 1000).toFixed(0)}1mm`;
    return {
      matKey, A_eq, I_eq, J_eq, E_col, G_col, q,
      sectionLabel: `CFT ${(D * 1000).toFixed(0)}×${(D * 1000).toFixed(0)}×${(t * 1000).toFixed(0)}mm + concrete fill`,
      materialType: "Mixta (Filled Steel Tube)",
      sectionInfoObj: {
        name: nameEtabs, shape: "Filled Steel Tube",
        D, B: D, TF: t, TW: t,
        material: "A572Gr50",
        fillMaterial: "4000Psi",
      },
    };
  }
}

/**
 * Construye nodos, elementos, supports, loads, elementInputs para una columna
 * cantilever. Llama a deform() y popula `states`.
 */
export function buildCantileverModel(
  p: CantileverParams,
  states: BuildStates,
  matKey: MaterialKey,
): { sec: CantileverSection } {
  const sec = computeCantileverSection(p, matKey);
  const L = p.L;
  const nSeg = Math.max(1, Math.round(p.nSegments));
  const dz = L / nSeg;

  // Nodos: 0=base (z=0), 1..nSeg=arriba
  const nodes: Node[] = [];
  for (let i = 0; i <= nSeg; i++) nodes.push([0, 0, i * dz]);

  // Elementos frame
  const elements: Element[] = [];
  for (let i = 0; i < nSeg; i++) elements.push([i, i + 1]);

  // Supports: empotramiento total en base
  const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  supports.set(0, [true, true, true, true, true, true]);

  // Cargas: equivalente nodal del peso propio uniforme + P_lat opcional en tope
  const loads = new Map<number, [number, number, number, number, number, number]>();
  for (let i = 0; i <= nSeg; i++) {
    const isEnd = (i === 0 || i === nSeg);
    const fz = -sec.q * dz * (isEnd ? 0.5 : 1.0);
    loads.set(i, [0, 0, fz, 0, 0, 0]);
  }
  // Carga + momentos en cabeza de columna (nodo top)
  // [Fx, Fy, Fz, Mx, My, Mz] — Fz ya tiene peso propio acumulado
  const Plat_y = p.P_lat_y ?? 0;
  const Mtx = p.M_top_x ?? 0;
  const Mty = p.M_top_y ?? 0;
  const Mtz = p.M_top_z ?? 0;
  if (Math.abs(p.P_lat) > 1e-9 || Math.abs(Plat_y) > 1e-9 ||
      Math.abs(Mtx) > 1e-9 || Math.abs(Mty) > 1e-9 || Math.abs(Mtz) > 1e-9) {
    const top = loads.get(nSeg) ?? [0, 0, 0, 0, 0, 0];
    top[0] += p.P_lat;   // Fx
    top[1] += Plat_y;    // Fy
    top[3] += Mtx;       // Mx
    top[4] += Mty;       // My
    top[5] += Mtz;       // Mz
    loads.set(nSeg, top as any);
  }

  // Property modifiers ETABS-style
  const A_mod = p.A_mod ?? 1.0;
  const As2_mod = p.As2_mod ?? 1.0;
  const As3_mod = p.As3_mod ?? 1.0;
  const J_mod = p.J_mod ?? 1.0;
  const I22_mod = p.I22_mod ?? 1.0;
  const I33_mod = p.I33_mod ?? 1.0;

  const g = 9.80665;
  const rho_eq = sec.q / (sec.A_eq * g);
  const As_eq = (5 / 6) * sec.A_eq;

  const elasticities = new Map<number, number>();
  const shearModuli = new Map<number, number>();
  const areas = new Map<number, number>();
  const Iz_map = new Map<number, number>();
  const Iy_map = new Map<number, number>();
  const J_map = new Map<number, number>();
  const shearAreasY = new Map<number, number>();
  const shearAreasZ = new Map<number, number>();
  const densities = new Map<number, number>();
  const sectionLabels = new Map<number, string>();
  const materialTypes = new Map<number, string>();
  const sectionInfo = new Map<number, any>();

  for (let e = 0; e < elements.length; e++) {
    elasticities.set(e, sec.E_col);
    shearModuli.set(e, sec.G_col);
    areas.set(e, sec.A_eq * A_mod);
    Iy_map.set(e, sec.I_eq * I33_mod);
    Iz_map.set(e, sec.I_eq * I22_mod);
    J_map.set(e, sec.J_eq * J_mod);
    densities.set(e, rho_eq);
    if (As2_mod < 1e-3) shearAreasY.set(e, -1);
    else                shearAreasY.set(e, As_eq * As2_mod);
    if (As3_mod < 1e-3) shearAreasZ.set(e, -1);
    else                shearAreasZ.set(e, As_eq * As3_mod);
    sectionLabels.set(e, sec.sectionLabel);
    materialTypes.set(e, sec.materialType);
    sectionInfo.set(e, sec.sectionInfoObj);
  }

  states.nodes.val = nodes;
  states.elements.val = elements;
  states.nodeInputs.val = { supports, loads };
  states.elementInputs.val = {
    elasticities,
    shearModuli,
    areas,
    momentsOfInertiaY: Iy_map,
    momentsOfInertiaZ: Iz_map,
    torsionalConstants: J_map,
    shearAreasY,
    shearAreasZ,
    densities,
    sectionLabels,
    materialTypes,
    sectionInfo,
  } as any;

  try {
    states.deformOutputs.val = deform(
      nodes, elements,
      { supports, loads },
      states.elementInputs.val,
    );
    // Analiza fuerzas internas (normals, shearsY, bendingsY, etc.) — sin esto
    // el dropdown "Frame Results" del visor no muestra nada.
    states.analyzeOutputs.val = analyze(
      nodes, elements,
      states.elementInputs.val,
      states.deformOutputs.val,
    );
  } catch (e: any) {
    console.error(`[Cantilever ${sec.materialType}] solver error:`, e.message);
  }
  states.objects3D.val = [];

  return { sec };
}

// ════════════════════════════════════════════════════════════════════
// ETABS .e2k EXPORTER — formato exacto de ETABS 19.1.0
// Plantilla: Columna CFT Cantilivier.e2k (Benchmark_Placa/composite_cft_columns)
// Unidades: TONF, M (consistente con ETABS canónico)
// ════════════════════════════════════════════════════════════════════

/**
 * Convierte fuerza de kN → tonf (ETABS canónico).
 *   1 tonf = 9.80665 kN  ⇒  1 kN = 0.10197 tonf
 */
const KN_TO_TONF = 1 / 9.80665;
/** kN/m³ → tonf/m³ */
const KNM3_TO_TONFM3 = KN_TO_TONF;
/** kN/m² → tonf/m² */
const KNM2_TO_TONFM2 = KN_TO_TONF;

function fmtNum(v: number, prec: number = 6): string {
  if (Math.abs(v) < 1e-12) return "0";
  // ETABS uses scientific notation for E values, plain for dimensions
  const abs = Math.abs(v);
  if (abs >= 1e6 || abs < 1e-3) return v.toExponential(6).replace(/e\+?/, "E+").replace(/E\+?-/, "E-");
  return parseFloat(v.toFixed(prec)).toString();
}

/**
 * Genera el contenido de un archivo .e2k de ETABS para la columna cantilever.
 * Replica el formato exacto del modelo ETABS 19.1.0 de validación CFT.
 */
export function generateCantileverE2k(
  p: CantileverParams,
  matKey: MaterialKey,
): { filename: string; content: string } {
  const sec = computeCantileverSection(p, matKey);
  const L = p.L;
  const D = p.D_out, t = p.t_HSS;

  // Conversiones a unidades ETABS (tonf, m)
  const E_steel_tonf  = p.E_s * KNM2_TO_TONFM2;  // E acero en tonf/m²
  const E_conc_tonf   = p.E_c * KNM2_TO_TONFM2;  // E concreto en tonf/m²
  const W_steel_tonf  = p.gamma_s * KNM3_TO_TONFM3;
  const W_conc_tonf   = p.gamma_c * KNM3_TO_TONFM3;
  const P_lat_tonf    = p.P_lat * KN_TO_TONF;

  const lines: string[] = [];
  const now = new Date();
  const dateStr = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
  const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;

  // ── HEADER ─────────────────────────────────────────────────────────
  lines.push(`$ File Cantilever_${sec.sectionInfoObj.name}.e2k saved ${dateStr} ${timeStr}`);
  lines.push(``);
  lines.push(`$ PROGRAM INFORMATION`);
  lines.push(`  PROGRAM  "ETABS"  VERSION "19.1.0"  `);
  lines.push(``);
  lines.push(`$ CONTROLS`);
  lines.push(`  UNITS  "TONF"  "M"  "C"  `);
  lines.push(`  TITLE1  "Hekatan Struct — Cantilever ${sec.materialType}"  `);
  lines.push(`  TITLE2  "Validacion vs ETABS"  `);
  lines.push(``);

  // ── STORIES ────────────────────────────────────────────────────────
  lines.push(`$ STORIES - IN SEQUENCE FROM TOP`);
  lines.push(`  STORY "Story1"  HEIGHT ${fmtNum(L)} MASTERSTORY "Yes"  `);
  lines.push(`  STORY "Base"  ELEV 0 `);
  lines.push(``);

  // ── GRIDS ──────────────────────────────────────────────────────────
  lines.push(`$ GRIDS`);
  lines.push(`  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 `);
  lines.push(``);

  // ── DIAPHRAGM ──────────────────────────────────────────────────────
  lines.push(`$ DIAPHRAGM NAMES`);
  lines.push(`  DIAPHRAGM "D1"    TYPE RIGID`);
  lines.push(``);

  // ── MATERIAL PROPERTIES ────────────────────────────────────────────
  lines.push(`$ MATERIAL PROPERTIES`);
  if (matKey === 0 || matKey === 2) {
    // Steel A572Gr50 (con FILLMATERIAL para CFT también)
    lines.push(`  MATERIAL  "A572Gr50"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${fmtNum(W_steel_tonf)}`);
    lines.push(`  MATERIAL  "A572Gr50"    SYMTYPE "Isotropic"  E ${fmtNum(E_steel_tonf)}  U 0.3  A 1.16999999590917E-05`);
    lines.push(`  MATERIAL  "A572Gr50"  FY 35153.48  FU 45699.53 FYE 38668.83  FUE 50269.48`);
  }
  if (matKey === 1) {
    // Concreto plain "concrete"
    lines.push(`  MATERIAL  "concrete"    TYPE "Concrete"    WEIGHTPERVOLUME ${fmtNum(W_conc_tonf)}`);
    lines.push(`  MATERIAL  "concrete"    SYMTYPE "Isotropic"  E ${fmtNum(E_conc_tonf)}  U 0.2  A 9.99999974737875E-06`);
    lines.push(`  MATERIAL  "concrete"    FC 2855.205`);
  }
  if (matKey === 2) {
    // 4000Psi para FILLMATERIAL del CFT
    lines.push(`  MATERIAL  "4000Psi"    TYPE "Concrete"    GRADE "f'c 4000 psi"    WEIGHTPERVOLUME ${fmtNum(W_conc_tonf)}`);
    lines.push(`  MATERIAL  "4000Psi"    SYMTYPE "Isotropic"  E ${fmtNum(E_conc_tonf)}  U 0.2  A 9.89999989542412E-06`);
    lines.push(`  MATERIAL  "4000Psi"    FC 2812.279`);
  }
  lines.push(``);

  // ── FRAME SECTIONS ─────────────────────────────────────────────────
  lines.push(`$ FRAME SECTIONS`);
  const s = sec.sectionInfoObj;
  let secLine = `  FRAMESECTION  "${s.name}"  MATERIAL "${s.material}"  SHAPE "${s.shape}"`;
  if (s.D !== undefined) secLine += `  D ${fmtNum(s.D)}`;
  if (s.B !== undefined) secLine += ` B ${fmtNum(s.B)}`;
  if (s.TF !== undefined) secLine += ` TF ${fmtNum(s.TF)}`;
  if (s.TW !== undefined) secLine += ` TW ${fmtNum(s.TW)}`;
  if (s.fillMaterial) secLine += ` FILLMATERIAL "${s.fillMaterial}"  `;
  lines.push(secLine);

  // Property Modifiers (si != 1.0 escribimos override, ETABS los aplica)
  const mods: string[] = [];
  if (Math.abs(p.A_mod - 1) > 1e-6) mods.push(`AREAMODIFIER ${fmtNum(p.A_mod)}`);
  if (Math.abs(p.As2_mod - 1) > 1e-6) mods.push(`AS2MODIFIER ${fmtNum(p.As2_mod)}`);
  if (Math.abs(p.As3_mod - 1) > 1e-6) mods.push(`AS3MODIFIER ${fmtNum(p.As3_mod)}`);
  if (Math.abs(p.J_mod - 1) > 1e-6) mods.push(`JMODIFIER ${fmtNum(p.J_mod)}`);
  if (Math.abs(p.I22_mod - 1) > 1e-6) mods.push(`I22MODIFIER ${fmtNum(p.I22_mod)}`);
  if (Math.abs(p.I33_mod - 1) > 1e-6) mods.push(`I33MODIFIER ${fmtNum(p.I33_mod)}`);
  if (mods.length > 0) {
    lines.push(`  FRAMESECTION  "${s.name}"  ${mods.join("  ")}  `);
  }
  lines.push(``);

  // ── POINT COORDINATES ──────────────────────────────────────────────
  lines.push(`$ POINT COORDINATES`);
  lines.push(`  POINT "1"  0 0 `);
  lines.push(``);

  // ── LINE CONNECTIVITIES ───────────────────────────────────────────
  // Una columna desde Base → Story1 (1 story de altura L)
  lines.push(`$ LINE CONNECTIVITIES`);
  lines.push(`  LINE  "C1"  COLUMN  "1"  "1"  1`);
  lines.push(``);

  // ── POINT ASSIGNS ──────────────────────────────────────────────────
  lines.push(`$ POINT ASSIGNS`);
  lines.push(`  POINTASSIGN  "1"  "Story1"  DIAPH "D1"  `);
  lines.push(`  POINTASSIGN  "1"  "Base"  RESTRAINT "UX UY UZ RX RY RZ"  DIAPH "DISCONNECTED"  `);
  lines.push(``);

  // ── LINE ASSIGNS ───────────────────────────────────────────────────
  lines.push(`$ LINE ASSIGNS`);
  lines.push(`  LINEASSIGN  "C1"  "Story1"  SECTION "${s.name}"  RIGIDZONE 0.5 MINNUMSTA ${Math.max(2, p.nSegments)} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  lines.push(``);

  // ── Cargas y momentos en cabeza (top) — convierte a tonf y tonf·m ──
  const Plat_y_tonf = (p.P_lat_y ?? 0) * KN_TO_TONF;
  const Mtx_tonfm = (p.M_top_x ?? 0) * KN_TO_TONF;   // kN·m → tonf·m (mismo factor)
  const Mty_tonfm = (p.M_top_y ?? 0) * KN_TO_TONF;
  const Mtz_tonfm = (p.M_top_z ?? 0) * KN_TO_TONF;
  const hasLatX  = Math.abs(p.P_lat) > 1e-9;
  const hasLatY  = Math.abs(p.P_lat_y ?? 0) > 1e-9;
  const hasMomX  = Math.abs(p.M_top_x ?? 0) > 1e-9;
  const hasMomY  = Math.abs(p.M_top_y ?? 0) > 1e-9;
  const hasMomZ  = Math.abs(p.M_top_z ?? 0) > 1e-9;
  const hasAnyTopLoad = hasLatX || hasLatY || hasMomX || hasMomY || hasMomZ;

  // ── LOAD PATTERNS ──────────────────────────────────────────────────
  lines.push(`$ LOAD PATTERNS`);
  lines.push(`  LOADPATTERN "DEAD"  TYPE  "Dead"  SELFWEIGHT  1`);
  if (hasAnyTopLoad) {
    lines.push(`  LOADPATTERN "LATERAL"  TYPE  "Other"  SELFWEIGHT  0`);
  }
  lines.push(``);

  // ── POINT OBJECT LOADS ────────────────────────────────────────────
  if (hasAnyTopLoad) {
    lines.push(`$ POINT OBJECT LOADS`);
    if (hasLatX || hasLatY) {
      lines.push(`  POINTLOAD  "1"  "Story1"  TYPE "FORCE"  LC "LATERAL"  FX ${fmtNum(P_lat_tonf)} FY ${fmtNum(Plat_y_tonf)} FZ 0`);
    }
    if (hasMomX || hasMomY || hasMomZ) {
      lines.push(`  POINTLOAD  "1"  "Story1"  TYPE "MOMENT"  LC "LATERAL"  MX ${fmtNum(Mtx_tonfm)} MY ${fmtNum(Mty_tonfm)} MZ ${fmtNum(Mtz_tonfm)}`);
    }
    lines.push(``);
  }

  // ── ANALYSIS OPTIONS ───────────────────────────────────────────────
  lines.push(`$ ANALYSIS OPTIONS`);
  lines.push(`  ACTIVEDOF  "UX UY UZ RX RY RZ"  `);
  lines.push(``);

  // ── MASS SOURCE ────────────────────────────────────────────────────
  lines.push(`$ MASS SOURCE`);
  lines.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `);
  lines.push(`  MASSSOURCELOAD  "MsSrc1"  "DEAD"  1 `);
  lines.push(``);

  // ── LOAD CASES ─────────────────────────────────────────────────────
  lines.push(`$ LOAD CASES`);
  lines.push(`  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `);
  lines.push(`  LOADCASE "Modal"  MAXMODES  3 MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `);
  lines.push(`  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  `);
  lines.push(`  LOADCASE "Dead"  LOADPAT  "DEAD"  SF  1 `);
  if (Math.abs(p.P_lat) > 1e-9) {
    lines.push(`  LOADCASE "Lateral"  TYPE  "Linear Static"  INITCOND  "PRESET"  `);
    lines.push(`  LOADCASE "Lateral"  LOADPAT  "LATERAL"  SF  1 `);
  }
  lines.push(``);

  // ── FOOTER ─────────────────────────────────────────────────────────
  lines.push(`  END`);
  lines.push(`$ END OF MODEL FILE`);

  const content = lines.join("\r\n");
  const filename = `Cantilever_${sec.sectionInfoObj.name}.e2k`;
  return { filename, content };
}

/**
 * Dispara la descarga de un archivo de texto en el navegador.
 * Crea un Blob y un <a download> temporal.
 */
export function downloadTextFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Genera y descarga el .e2k file. Atajo conveniente para usar desde un botón
 * de Tweakpane vía `onParamChange`.
 */
export function exportCantileverE2k(p: CantileverParams, matKey: MaterialKey): void {
  const { filename, content } = generateCantileverE2k(p, matKey);
  downloadTextFile(filename, content);
  console.log(`[E2K Export] ${filename} (${content.length} bytes) — abrir en ETABS para validar`);
}
