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
  /**
   * Sísmico NEC opcional: si se provee, el e2k exportado trae el espectro NEC
   * como función USER-defined (portable a cualquier ETABS/SAP) + un caso
   * Response Spectrum. `points` = pares (T, Sa) del espectro NEC elástico
   * (el caller los muestrea de espectroNEC.necSpectrum). Validado: ETABS lee
   * los puntos exactos. La R suele ir en sfX/sfY (= g/(R·φ)).
   */
  /**
   * Combinaciones del MODELO. Antes el exportador escribia 1.4D y 1.2D+1.6L
   * a mano, siempre, hubiera o no combinaciones — y el e2k que saca ETABS del
   * mismo modelo no trae el bloque. Si no se pasa nada, no se emite nada.
   */
  loadCombinations?: Array<{ name: string; type?: string; cases?: Array<{ case: string; scaleFactor: number }> }>;
  /**
   * Patrones y casos del MODELO. Igual que las combinaciones, estaban escritos
   * a mano: todo e2k salia con "Dead" y "Live" aunque el modelo tuviera otros.
   * Si no se pasan, se mantiene ese par por defecto — las cargas nodales
   * necesitan un LC al que referirse.
   */
  loadPatterns?: Array<{ name: string; type?: string; selfWeightMultiplier?: number }>;
  loadCases?: Array<{ name: string; type?: string; patterns?: Array<{ pattern: string; scaleFactor: number }> }>;
  /**
   * Carga de SUPERFICIE por elemento shell, tal como se asigno — no ya
   * convertida a nodal. Hekatan la reparte a los nudos con el vector de carga
   * consistente antes de resolver, asi que al llegar aca ya no existe: el e2k
   * salia con POINTLOAD donde ETABS pone AREALOAD. Se pasa aparte para poder
   * escribir el bloque que ETABS escribe.
   *   value = fuerza por unidad de AREA (mismas unidades que el resto)
   *   dir   = "GRAV" (default), "Z", "X", ... segun el eje al que va
   */
  shellLoads?: Map<number, { value: number; dir?: string; pattern?: string }>;
  /**
   * Diafragma rigido en los nudos de cabeza de columna y en las losas.
   *  - "auto" (default): se asigna DIAPH "D1", que es lo idiomatico en ETABS
   *    para un edificio y es como se validaron los ejemplos de edificio.
   *  - "none": no se asigna ninguno. Para modelos que NO lo declaran — el
   *    CLI Modeler, por ejemplo, donde el modelo es exactamente lo escrito.
   *    Ponerlo igual no era cosmetico: un diafragma rigido que el modelo
   *    original no tiene lo rigidiza lateralmente, asi que el e2k reimportado
   *    daba OTRA estructura.
   */
  diaphragm?: "auto" | "none";
  /** Angulo del eje local 1 de cada shell, en grados. Es lo que decide a que
   *  vigas les entrega la carga un deck de un solo sentido. */
  shellAngles?: Map<number, number>;
  seismicNEC?: {
    points: [number, number][];
    name?: string;        // nombre de la función (default "NEC")
    dampRatio?: number;   // default 0.05
    caseName?: string;    // nombre del caso RS (default "Sismo NEC")
    modalCase?: string;   // caso modal de referencia (default "Modal")
    sfX?: number; sfY?: number;
    /** Define el caso Modal en el e2k (Eigen o Ritz + N° de modos), para que el RS
     *  tenga su MODALCASE y ETABS/SAP corran el mismo modal que Hekatan en Settings. */
    modal?: { ritz?: boolean; nModes?: number };
  };
}

/**
 * Bloque e2k de una función de espectro de respuesta USER (puntos T,Sa).
 * Formato real de ETABS (verificado por RE):
 *   FUNCTION "<n>"  FUNCTYPE "SPECTRUM"  DAMPRATIO 0.05  SPECTYPE "USER"
 *   FUNCTION "<n>"  TIMEVAL "T1 Sa1  T2 Sa2  ..."
 * Lo lee CUALQUIER ETABS (19/22) y SAP2000 — NO depende de la NEC nativa
 * (`SPECTYPE "ECUADOR..."` solo abre en versiones que la traigan). Los puntos
 * salen del espectro NEC de Hekatan, que coincide 0.00% con la NEC nativa.
 */
export function necUserSpectrumE2k(
  name: string, points: [number, number][], dampRatio = 0.05,
): string[] {
  const pairs = points.map(([T, Sa]) => `${(+T).toFixed(4)} ${(+Sa).toFixed(5)}`).join("  ");
  return [
    `  FUNCTION "${name}"  FUNCTYPE "SPECTRUM"  DAMPRATIO ${dampRatio}  SPECTYPE "USER"  `,
    `  FUNCTION "${name}"  TIMEVAL "${pairs}"  `,
  ];
}

/**
 * Bloque e2k de un caso Response Spectrum (modal). Patrón verificado en modelos
 * reales de ETABS:  TYPE "Response Spectrum" + MODALCASE + ACCEL U1/U2 con FUNC y SF.
 * SF típico = g/(R·φP·φE) para pasar Sa[g]→fuerza (o ×V/Vt del control NEC §6.2.2).
 */
export function responseSpectrumCaseE2k(opt: {
  name: string; func: string; modalCase?: string; sfX?: number; sfY?: number;
}): string[] {
  const { name, func, modalCase = "Modal", sfX = 9.81, sfY = 9.81 } = opt;
  const L = [`  LOADCASE "${name}"  TYPE  "Response Spectrum"  MODALCASE  "${modalCase}"  `];
  if (sfX) L.push(`  LOADCASE "${name}"  ACCEL  "U1"  FUNC  "${func}"  SF  ${sfX}  `);
  if (sfY) L.push(`  LOADCASE "${name}"  ACCEL  "U2"  FUNC  "${func}"  SF  ${sfY}  `);
  return L;
}

/**
 * Bloque e2k del caso Modal (Eigen o Ritz). Sintaxis verificada en e2k reales de ETABS:
 *   LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"
 *   LOADCASE "Modal"  MAXMODES n MINMODES 1 EIGENSHIFTFREQ 0 EIGENCUTOFF 0 EIGENTOL 1E-09
 * Ritz: TYPE "Modal - Ritz" + vectores de carga por aceleración (UX/UY/UZ) — como ETABS.
 */
export function modalCaseE2k(opt: { name?: string; ritz?: boolean; nModes?: number }): string[] {
  const { name = "Modal", ritz = false, nModes = 12 } = opt;
  if (ritz) {
    return [
      `  LOADCASE "${name}"  TYPE  "Modal - Ritz"  INITCOND  "PRESET"  `,
      `  LOADCASE "${name}"  MAXMODES  ${nModes} MINMODES  1 `,
      `  LOADCASE "${name}"  LOADTYPE  "Accel"  LOADNAME  "UX"  RITZMAXCYCLES  0 `,
      `  LOADCASE "${name}"  LOADTYPE  "Accel"  LOADNAME  "UY"  RITZMAXCYCLES  0 `,
      `  LOADCASE "${name}"  LOADTYPE  "Accel"  LOADNAME  "UZ"  RITZMAXCYCLES  0 `,
    ];
  }
  return [
    `  LOADCASE "${name}"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `,
    `  LOADCASE "${name}"  MAXMODES  ${nModes} MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 `,
  ];
}

export function exportE2k(input: ExportE2kInput): string {
  const raw = input.e2kModel?.rawSections;
  // Raw round-trip (preserva ETABS) o reconstrucción sintética.
  let e2k = (raw && raw.size > 0) ? exportFromRaw(raw, input.e2kModel!) : exportFromScratch(input);
  // Inyectar el sísmico NEC (función USER + caso RS) si se pidió. Sirve para
  // ambos modos: post-procesa la salida insertando en FUNCTIONS y LOAD CASES.
  if (input.seismicNEC) e2k = injectNecSeismic(e2k, input.seismicNEC);
  return e2k;
}

/** Inserta el espectro NEC USER-defined + caso Response Spectrum en un e2k ya armado. */
function injectNecSeismic(e2k: string, nec: NonNullable<ExportE2kInput["seismicNEC"]>): string {
  const nl = e2k.includes("\r\n") ? "\r\n" : "\n";
  const lines = e2k.split(/\r?\n/);
  const funcName = nec.name ?? "NEC";
  const fnLines = necUserSpectrumE2k(funcName, nec.points, nec.dampRatio ?? 0.05);
  const modalName = nec.modalCase ?? "Modal";
  const lcLines = responseSpectrumCaseE2k({
    name: nec.caseName ?? "Sismo NEC", func: funcName,
    modalCase: modalName, sfX: nec.sfX, sfY: nec.sfY,
  });
  // Caso Modal (Eigen/Ritz) según Settings.
  let modalLines: string[] = [];
  const tieneModal = (re: RegExp) => lines.some((l) => re.test(l));
  if (nec.modal) {
    // El usuario eligió método / N° de modos en Settings → REEMPLAZAR cualquier Modal case
    // por default (exportFromScratch pone MAXMODES 3) con el de Settings.
    const reDel = new RegExp(`^\\s*LOADCASE\\s+"${modalName}"\\s+(TYPE\\s+"Modal|MAXMODES|MINMODES|EIGEN|LOADTYPE|RITZ)`, "i");
    for (let k = lines.length - 1; k >= 0; k--) if (reDel.test(lines[k])) lines.splice(k, 1);
    modalLines = modalCaseE2k({ name: modalName, ritz: !!nec.modal.ritz, nModes: nec.modal.nModes });
  } else if (!tieneModal(new RegExp(`LOADCASE\\s+"${modalName}"\\s+TYPE\\s+"Modal`))) {
    modalLines = modalCaseE2k({ name: modalName });
  }
  insertAfterSection(lines, "FUNCTIONS", fnLines);
  // El caso Modal va ANTES del RS (el RS lo referencia con MODALCASE).
  insertAfterSection(lines, "LOAD CASES", [...modalLines, ...lcLines]);
  return lines.join(nl);
}

/** Inserta `payload` tras el header `$ <section>`; si la sección no existe, la crea antes de END. */
function insertAfterSection(lines: string[], section: string, payload: string[]): void {
  const i = lines.findIndex((l) => l.trim() === `$ ${section}`);
  if (i >= 0) { lines.splice(i + 1, 0, ...payload); return; }
  const endIdx = lines.findIndex((l) => l.trim() === "END");
  const at = endIdx >= 0 ? endIdx : lines.length;
  lines.splice(at, 0, `$ ${section}`, ...payload, ``);
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

  out.push(`$ File exported from Hekatan Struct Lineal (round-trip)`);
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
  // Si el llamador no los pasa aparte, salen de elementInputs — que es donde
  // los deja el modelador, igual que los modificadores de shell.
  const shellLoadsRaw = input.shellLoads
    ?? (elementInputs as any).shellSurfaceLoads as Map<number, number> | undefined;
  type QArea = { value: number; dir?: string; pattern?: string };
  let shellLoads: Map<number, QArea> | undefined;
  if (shellLoadsRaw instanceof Map) {
    shellLoads = new Map<number, QArea>();
    shellLoadsRaw.forEach((v: number | QArea, k: number) => {
      shellLoads!.set(k, typeof v === "number" ? { value: v } : v);
    });
  }
  const shellAngles = input.shellAngles
    ?? (elementInputs as any).shellAngles as Map<number, number> | undefined;
  // La parte de la carga nodal que vino de un area NO se emite como POINTLOAD:
  // ya sale como AREALOAD sobre el objeto, y emitir las dos la duplica. Este
  // es el criterio unico — lo usan tanto POINT ASSIGNS (para no registrar
  // plan-points que no van a llevar nada) como POINT OBJECT LOADS.
  const deArea = (elementInputs as any).cargaDeArea as Map<number, number> | undefined;
  const hayAreaLoads = !!(shellLoads && shellLoads.size > 0);
  /** Carga nodal que de verdad se va a escribir, ya descontada la del area. */
  const cargaPropia = (nodeIdx: number, load: readonly number[]): [number, number, number] =>
    [load[0], load[1], load[2] - (hayAreaLoads ? (deArea?.get(nodeIdx) ?? 0) : 0)];
  const force = units?.force || "Tonf";
  const length = units?.length || "m";
  const lines: string[] = [];
  const rd = (v: number) => Math.round(v * 10000) / 10000;
  /**
   * Las CARGAS tampoco pueden ir por `rd`: al pasar de kN a tonf, una carga de
   * -1 kN queda en -0.1020 tonf, que son -1.00028 kN. Medido contra ETABS: la
   * suma de FZ del galpon salia -45.0125 en vez de -45.0000, un +0.028 %. Poco,
   * pero es un error que se mete SOLO por como se escribe el fichero, y encima
   * crece si las unidades del e2k son mas grandes que las del modelo.
   */
  /**
   * Para PROPIEDADES DE SECCION, no coordenadas. `rd` redondea a 4 decimales,
   * que en metros esta bien para una longitud pero aniquila una inercia: I de
   * un perfil de 25 cm vale 3.1e-5 m^4 y salia como "0". El e2k exportado
   * llevaba I33 0 e I22 0, o sea barras sin rigidez a flexion.
   */
  const rp = (v: number) => {
    if (!isFinite(v) || v === 0) return "0";
    return Number(v.toPrecision(10)).toString();
  };

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
  lines.push(`  TITLE1  "Hekatan Struct Lineal export"  `);
  if (title) lines.push(`  TITLE2  "${title}"  `);
  // MERGETOL 0.001 (1mm) — match ETABS GUI default, evita over-merge de joints
  // próximos en plan distinto. El 0.1 anterior era loose y podía mergear
  // joints que no debían unirse.
  lines.push(`  PREFERENCE  MERGETOL 0.001`);
  lines.push(`  RLLF  METHOD "ASCE7-10"  USEDEFAULTMIN "YES"  `);
  lines.push(``);

  // GRIDSYSTEM + GRID lines (X y Y) — ETABS-idiomatic, mejora UX en GUI.
  // X grids → letras (A, B, C, ...) | Y grids → números (1, 2, 3, ...)
  // No afectan el análisis pero hacen el modelo legible al abrir en GUI.
  const xValuesSet = new Set<number>();
  const yValuesSet = new Set<number>();
  nodes.forEach(n => { xValuesSet.add(rd(n[0])); yValuesSet.add(rd(n[1])); });
  const xValues = [...xValuesSet].sort((a, b) => a - b);
  const yValues = [...yValuesSet].sort((a, b) => a - b);
  lines.push(`$ GRIDS`);
  lines.push(`  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 `);
  xValues.forEach((x, i) => {
    // Letras A-Z, después AA, BB, ... (raro pasar de 26 grids)
    const label = i < 26 ? String.fromCharCode(65 + i) : String.fromCharCode(65 + (i % 26)).repeat(Math.floor(i / 26) + 1);
    lines.push(`  GRID "G1"  LABEL "${label}"  DIR "X"  COORD ${x}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  });
  yValues.forEach((y, i) => {
    lines.push(`  GRID "G1"  LABEL "${i + 1}"  DIR "Y"  COORD ${y}  GRIDTYPE "PRIMARY"  BUBBLELOC "DEFAULT"  GRIDHIDE "NO"  `);
  });
  lines.push(``);

  // Stories from Z elevations.
  // Hekatan-Struct uses Z-up convention (CLAUDE.md: THREE.Object3D.DEFAULT_UP=(0,0,1)).
  // Node = [x_horizontal, y_horizontal, z_vertical]. ETABS .e2k POINT format
  // is (id, X, Y) with Z derived from STORY assignment.
  // UNA PLANTA POR NIVEL REAL, no una por cada cota de nudo.
  //
  // Antes se creaba un `Level_i` por CADA z distinta. En una nave con la
  // cubierta inclinada y una rampa eso da 52 plantas (medido en el galpon:
  // Level_1 a 0.1471 m, Level_10 a 0.0884...) contra las 4 que escribe ETABS.
  // Y no es cosmetico: ETABS reparte la masa POR PISO, asi que 52 pisos de dos
  // nudos cada uno destrozan el modal.
  //
  // Criterio: es PLANTA la cota que reune al menos `MIN_NUDOS` nudos. Las
  // demas —la rampa subiendo, el faldon de cubierta— cuelgan de la planta
  // inmediatamente superior con un DESCENSO, que es exactamente como lo
  // resuelve ETABS (el 3er campo del POINT).
  const MIN_NUDOS = 3;
  const TOL_PLANTA = 0.5;      // m: cotas mas juntas que esto son la MISMA planta
  const cuenta = new Map<number, number>();
  nodes.forEach(n => {
    const z = rd(n[2]);
    cuenta.set(z, (cuenta.get(z) ?? 0) + 1);
  });
  const zSet = new Set<number>();
  nodes.forEach(n => zSet.add(rd(n[2])));
  const todasZ = [...zSet].sort((a, b) => a - b);
  let sortedZ = todasZ.filter(z => (cuenta.get(z) ?? 0) >= MIN_NUDOS);
  // Fusionar cotas casi iguales: las 12 correas de una cubierta inclinada
  // tienen muchos nudos cada una y estan a 9 cm de distancia — con el filtro de
  // MIN_NUDOS solo, salian 15 plantas de 0.0921 m de altura. Se conserva la
  // mas ALTA del grupo, y las de abajo cuelgan de ella con descenso.
  if (sortedZ.length > 1) {
    const fus: number[] = [sortedZ[0]];
    for (const z of sortedZ.slice(1)) {
      if (z - fus[fus.length - 1] < TOL_PLANTA) fus[fus.length - 1] = z;
      else fus.push(z);
    }
    sortedZ = fus;
  }
  // siempre la mas baja (la base) y la mas alta (para que nada quede huerfano)
  if (!sortedZ.length) sortedZ = todasZ.slice();
  if (sortedZ[0] !== todasZ[0]) sortedZ.unshift(todasZ[0]);
  if (sortedZ[sortedZ.length - 1] !== todasZ[todasZ.length - 1])
    sortedZ.push(todasZ[todasZ.length - 1]);

  const storyNames: string[] = [];
  const zToStory = new Map<number, string>();
  storyNames.push("Base");
  zToStory.set(sortedZ[0], "Base");
  for (let i = 1; i < sortedZ.length; i++) {
    const name = `Level_${i}`;
    storyNames.push(name);
    zToStory.set(sortedZ[i], name);
  }
  /** Planta de una cota cualquiera: la primera >= z (se cuelga con descenso). */
  const plantaDe = (z: number): { story: string; dz: number } => {
    const zz = rd(z);
    if (zToStory.has(zz)) return { story: zToStory.get(zz)!, dz: 0 };
    for (let i = 0; i < sortedZ.length; i++) {
      if (sortedZ[i] >= zz) return { story: zToStory.get(sortedZ[i])!,
                                     dz: rd(sortedZ[i] - zz) };
    }
    const ult = sortedZ[sortedZ.length - 1];
    return { story: zToStory.get(ult)!, dz: rd(ult - zz) };
  };

  lines.push(`$ STORIES - IN SEQUENCE FROM TOP`);
  for (let i = sortedZ.length - 1; i >= 1; i--) {
    lines.push(`  STORY "${storyNames[i]}"  HEIGHT ${rd(sortedZ[i] - sortedZ[i - 1])} MASTERSTORY "Yes"  `);
  }
  if (sortedZ.length > 0) lines.push(`  STORY "Base"  ELEV ${sortedZ[0]} `);
  lines.push(``);

  // DIAPHRAGM siempre — para ETABS-idiomatic export. Usado para asignar a
  // top joints de columnas verticales (estándar ETABS) y para top joints de
  // shells (losas / muros). Default RIGID (típico).
  const hasQ4 = elements.some(el => el.length === 4);
  {
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
    // Ejes locales en convencion CSI: momentsOfInertiaZ ES I33 y la Y es I22.
    // Antes iban cruzados porque la triada de Hekatan tambien lo estaba.
    const I33    = elementInputs.momentsOfInertiaZ?.get(i) ?? 0;
    const I22    = elementInputs.momentsOfInertiaY?.get(i) ?? 0;
    const J      = elementInputs.torsionalConstants?.get(i) ?? 0;

    // "general" no es una forma geometrica sino "sin forma, con propiedades":
    // por eso se ensancha el tipo mas alla de las de SectionShape.
    let stype: SectionShape["type"] | "general" = shape?.type || "rect";
    let h     = shape?.h ?? 0;
    let b     = shape?.b ?? 0;
    let d     = shape?.d ?? 0;
    const tfw = shape?.tf ?? 0;
    const tww = shape?.tw ?? 0;

    // Si no hay shape pero SI hay propiedades, se exporta la seccion GENERAL
    // con A, I33, I22 y J tal cual. Antes se invertia A e I33 para inventar un
    // rectangulo equivalente — y un rectangulo no puede casar las CUATRO: el
    // I22 y el J salian los del rectangulo, no los del perfil. Medido: el
    // mezanine reimportado daba -88.4 mm contra los -2.7 mm del modelo nativo,
    // 32 veces mas blando. ETABS acepta SHAPE "General" con estos valores
    // exactos — es lo que usa su propia API (SetGeneral).
    const sinForma = !shape && h <= 0 && b <= 0 && d <= 0;
    const general = sinForma && A > 0 && I33 > 0 && I22 > 0;
    if (general) {
      // D y B no entran en la rigidez (mandan AREA/I33/I22/TORSION), pero
      // ETABS saca de ellos los BRAZOS de los extremos. Si el modelo declara
      // el canto real se usa ese; si no, hay que caer en el rectangulo
      // equivalente — y para un perfil I eso da otro canto (VA-250: 0.357 m
      // en vez de 0.250), asi que el brazo sale mayor y los momentos se
      // reportan en otro sitio. La rigidez no cambia: el factor de zona
      // rigida es 0 por defecto (medido en re_brazos_rigidos_etabs.py).
      const dDecl = (elementInputs as any).cantos?.get(i) as number | undefined;
      const bDecl = (elementInputs as any).anchos?.get(i) as number | undefined;
      h = dDecl && dDecl > 0 ? dDecl : Math.sqrt(12 * I33 / A);
      b = bDecl && bDecl > 0 ? bDecl : A / h;
      if (!isFinite(h) || h < minDim) h = minDim;
      if (!isFinite(b) || b < minDim) b = minDim;
      stype = "general";
    }
    else if (h <= 0 && b <= 0 && d <= 0 && A > 0) {
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

    // El NOMBRE entra en la clave: dos secciones que se llaman distinto son
    // secciones distintas, aunque sus dimensiones no se conozcan. Sin esto,
    // todas las que traen D/B sin declarar caian en la misma clave
    // (`general_NaN_NaN_...`) y se fundian en una sola: medido, las 723 barras
    // del galpon salian con 2 secciones y COL-150 se comia 609 de ellas.
    const shapeKey = shape?.name
      ? `NAME_${shape.name}`
      : `${stype}_${rd(h)}_${rd(b)}_${rd(d)}_${rd(tfw)}_${rd(tww)}_${matName}`;
    if (shape?.name && !shapeKeyToSecName.has(shapeKey)) {
      shapeKeyToSecName.set(shapeKey, shape.name);
    }
    let secName = shapeKeyToSecName.get(shapeKey);
    if (!secName) {
      const tag = isSteel ? "S" : "C";
      if (stype === "general")  secName = `${tag}_G${writtenSections.size + 1}`;
      else if (stype === "rect")secName = `${tag}_R${Math.round(b*100)}x${Math.round(h*100)}`;
      else if (stype === "circ")secName = `${tag}_C_D${Math.round(d*100)}`;
      else if (stype === "I")   secName = `${tag}_I${Math.round(h*100)}x${Math.round(b*100)}`;
      else if (stype === "HSS") secName = `${tag}_HSS${Math.round(b*100)}x${Math.round(h*100)}x${Math.round(tww*1000)}`;
      else                      secName = `${tag}_Sec${writtenSections.size + 1}`;
      shapeKeyToSecName.set(shapeKey, secName);
    }
    elemToSecName.set(i, secName);

    if (writtenSections.has(secName)) return;
    writtenSections.add(secName);

    // ETABS shape selection — IMPORTANTE:
    //
    // ETABS 22 NO acepta "Steel Rectangular" como SHAPE built-in (no existe).
    // Para perfiles steel sólidos rectangulares, ETABS espera "Steel Plate"
    // o un steel-tube degenerado. La opción más robusta y portable es usar
    // "Concrete Rectangular" como shape geométrico — ETABS lo acepta y usa
    // SOLO la geometría (D, B); el MATERIAL referenciado (Steel_1 con E=200GPa)
    // determina las propiedades del análisis. El nombre "Concrete" es solo
    // una etiqueta en el catálogo de shapes.
    //
    // Shapes válidos en ETABS E2K (verificados 22.6.0):
    //   "Concrete Rectangular"  → rect sólido (cualquier material)
    //   "Concrete Circle"       → circ sólido
    //   "Steel I/Wide Flange"   → I beam (D B TF TW T2b TFb)
    //   "Steel Tube"            → HSS rect hueco (D B TF, TF=wall thick)
    //   "Steel Pipe"            → HSS circ hueco (D TF)
    //   "Steel Channel"         → C
    //   "Steel Angle"           → L
    //   "Filled Steel Tube"     → CFT (D B TF + FILLMATERIAL)
    let etabsShape: string;
    if (stype === "general")    etabsShape = "General";
    else if (stype === "I")     etabsShape = "Steel I/Wide Flange";
    else if (stype === "HSS")   etabsShape = "Steel Tube";
    else if (stype === "CFT")   etabsShape = "Filled Steel Tube";
    else if (stype === "pipe")  etabsShape = "Steel Pipe";
    else if (stype === "L")     etabsShape = "Steel Angle";
    else if (stype === "C")     etabsShape = "Steel Channel";
    else if (stype === "2C")    etabsShape = "Steel Double Channel";
    else if (stype === "circ")  etabsShape = "Concrete Circle";
    else                        etabsShape = "Concrete Rectangular";  // ← FIX: rect sólido siempre

    let line = `  FRAMESECTION  "${secName}"  MATERIAL "${matName}"  SHAPE "${etabsShape}"`;
    if (stype === "general") {
      // AS2/AS3: si el modelo no da area de cortante, se usa la de ETABS por
      // defecto para rectangulo (5/6·A). No inventa rigidez de flexion.
      const as2 = elementInputs.shearAreasY?.get(i) || A * 5 / 6;
      const as3 = elementInputs.shearAreasZ?.get(i) || A * 5 / 6;
      line += `  D ${rd(h)} B ${rd(b)} AREA ${rp(A)} AS2 ${rp(as2)} AS3 ${rp(as3)}`
            + ` I33 ${rp(I33)} I22 ${rp(I22)} TORSION ${rp(J || I33 + I22)}`
            + ` S33POS ${rp(2 * I33 / h)} S33NEG ${rp(2 * I33 / h)}`
            + ` S22POS ${rp(2 * I22 / b)} S22NEG ${rp(2 * I22 / b)}`
            + ` Z33 ${rp(2 * I33 / h)} Z22 ${rp(2 * I22 / b)}`
            + ` R33 ${rp(Math.sqrt(I33 / A))} R22 ${rp(Math.sqrt(I22 / A))} `;
      lines.push(line);
      return;
    }
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
    // La clave del POINT es (X, Y, DESCENSO), no solo (X, Y). Un e2k de ETABS
    // lleva el descenso como TERCER campo del POINT, y dos nudos en la misma
    // vertical que cuelguen distinto de su planta son DOS puntos distintos.
    // Agrupando solo por (X, Y) se fundian en uno y se perdian nudos: medido,
    // 293 puntos contra los 333 que escribe ETABS del mismo modelo.
    const { dz } = plantaDe(n[2]);
    const key = `${rd(n[0])},${rd(n[1])},${dz}`;
    if (!xyToPoint.has(key)) xyToPoint.set(key, `${++ptIdx}`);
  });
  lines.push(`$ POINT COORDINATES`);
  for (const [key, ptName] of xyToPoint) {
    const [x, y, dz] = key.split(",").map(Number);
    lines.push(dz ? `  POINT "${ptName}"  ${x} ${y} ${dz} `
                  : `  POINT "${ptName}"  ${x} ${y} `);
  }
  lines.push(``);

  const nodeToPS = (ni: number): { pt: string; story: string } => {
    const n = nodes[ni];
    const { story, dz } = plantaDe(n[2]);
    const key = `${rd(n[0])},${rd(n[1])},${dz}`;
    return { pt: xyToPoint.get(key) || "1", story };
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

    // ANGULO LOCAL (el "local axis angle" de CSI). Sin esto, un e2k exportado
    // desde Hekatan salia con ANG 0 en TODAS las barras mientras el de ETABS
    // del mismo modelo llevaba 294 con ANG 90 — los cordones de cercha en C y
    // sus diagonales 2L, que con angulo 0 quedan con la hendidura mirando fuera
    // del plano de la cercha.
    const angL = (elementInputs as any).localAngles?.get(i);
    if (angL !== undefined && isFinite(angL) && Math.abs(angL) > 1e-9) {
      parts.push(`ANG ${rd(angL)}`);
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

  // ════════════════════════════════════════════════════════════════════
  // CHAIN DETECTION para columnas verticales
  // ════════════════════════════════════════════════════════════════════
  // Si N elementos column comparten plan-point + sección + forman cadena
  // vertical contigua, los emitimos como UN SOLO LINE element con auto-mesh
  // interno (MINNUMSTA=N). Eso produce el formato ETABS-idiomatic que el
  // usuario espera (1 columna con auto-mesh vs N elementos apilados).
  //
  // Heurística:
  //   1. Para cada elemento COLUMN/BRACE, key = `${planPt}_${secName}_${type}`
  //   2. Group elementos por key
  //   3. Para cada group, sort por Z y check contiguidad (top de elem[i] == bot de elem[i+1])
  //   4. Si contiguo → un chain
  type Chain = {
    elemIndices: number[];   // ordered bottom-up
    planPt: string;
    bottomNodeIdx: number;
    topNodeIdx: number;
    secName: string;
    type: string;
    nSegments: number;        // N elementos en la cadena → MINNUMSTA del LINEASSIGN
  };
  const chains: Chain[] = [];
  const inChain = new Set<number>();   // elementos ya consolidados en chains

  // Mapa intermedio: key → lista de elementos column candidatos (con sus Z bot/top)
  type ColElem = { i: number; bot: number; top: number; zBot: number; zTop: number; planPt: string; secName: string; type: string };
  const colByKey = new Map<string, ColElem[]>();
  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    const type = guessElementType(nodes, el);
    if (type === "BEAM") return;  // solo column/brace son candidatos
    const bot = nodes[el[0]][2] <= nodes[el[1]][2] ? el[0] : el[1];
    const top = nodes[el[0]][2] <= nodes[el[1]][2] ? el[1] : el[0];
    // Solo columnas verticales (mismo plan en ambos extremos)
    if (Math.abs(nodes[bot][0] - nodes[top][0]) > 1e-6 || Math.abs(nodes[bot][1] - nodes[top][1]) > 1e-6) return;
    const ps = nodeToPS(bot);   // mismo plan que top
    const secName = elemToSecName.get(i) || `Sec_${i}`;
    const key = `${ps.pt}_${secName}_${type}`;
    if (!colByKey.has(key)) colByKey.set(key, []);
    colByKey.get(key)!.push({
      i, bot, top, zBot: rd(nodes[bot][2]), zTop: rd(nodes[top][2]),
      planPt: ps.pt, secName, type,
    });
  });

  colByKey.forEach((arr, _key) => {
    arr.sort((a, b) => a.zBot - b.zBot);
    // Si todos están contiguos (zTop[i] == zBot[i+1]), forman una sola chain
    let chainStart = 0;
    for (let k = 1; k <= arr.length; k++) {
      const isBreak = (k === arr.length) ||
                      (Math.abs(arr[k].zBot - arr[k - 1].zTop) > 1e-6);
      if (isBreak) {
        // Cerrar chain [chainStart..k-1]
        const segment = arr.slice(chainStart, k);
        if (segment.length >= 1) {
          chains.push({
            elemIndices: segment.map(s => s.i),
            planPt: segment[0].planPt,
            bottomNodeIdx: segment[0].bot,
            topNodeIdx: segment[segment.length - 1].top,
            secName: segment[0].secName,
            type: segment[0].type,
            nSegments: segment.length,
          });
          segment.forEach(s => inChain.add(s.i));
        }
        chainStart = k;
      }
    }
  });

  // ════════════════════════════════════════════════════════════════════
  // EMIT LINE CONNECTIVITIES + LINE ASSIGNS
  // ════════════════════════════════════════════════════════════════════
  lines.push(`$ LINE CONNECTIVITIES`);
  const laEntries: string[] = [];

  /**
   * Indice de una planta dentro de la pila (0 = Base). El salto de plantas de
   * una LINE se cuenta en PLANTAS, no en cotas distintas de nudo: `sortedZ` y
   * `storyNames` van a la par, pero un nudo que cuelga con descenso NO tiene
   * entrada en `sortedZ`, y buscarlo ahi devolvia -1.
   */
  const idxDe = (story: string) => storyNames.indexOf(story);

  /**
   * Escribe una LINE que puede estar INCLINADA.
   *
   * Antes se ponia el MISMO punto de planta en los dos extremos
   * (`"${psTop.pt}"  "${psTop.pt}"`), y eso solo sabe describir una barra
   * VERTICAL: ETABS le pone al extremo de abajo la x,y del de arriba. En un
   * edificio no se nota —las columnas son verticales—, pero en una nave con
   * arco se lleva por delante la geometria: medido en el galpon, **42 de las
   * 102 barras** caian fuera del modelo (los tramos del arco salian verticales
   * y las cotas intermedias inventadas). Se veia al abrirlo en ETABS 19.
   *
   * La regla del formato: el SEGUNDO punto es el que esta EN la planta del
   * objeto (la del LINEASSIGN) y el PRIMERO baja `nStories` plantas. Asi que
   * basta con dar los dos puntos de verdad y contar el salto entre sus plantas.
   */
  const emitirLinea = (eName: string, tipo: string, botNode: number, topNode: number,
                       secName: string, extras: string, minNumSta: number) => {
    const psTop = nodeToPS(topNode);
    const psBot = nodeToPS(botNode);
    const salto = idxDe(psTop.story) - idxDe(psBot.story);
    if (salto <= 0) {
      // Los dos extremos cuelgan de la MISMA planta (cada uno con su descenso):
      // eso en el e2k es una BEAM, aunque la barra suba.
      lines.push(`  LINE  "${eName}"  BEAM  "${psBot.pt}"  "${psTop.pt}"  0`);
    } else {
      lines.push(`  LINE  "${eName}"  ${tipo}  "${psBot.pt}"  "${psTop.pt}"  ${salto}`);
    }
    laEntries.push(`  LINEASSIGN  "${eName}"  "${psTop.story}"  SECTION "${secName}" ${extras} MINNUMSTA ${minNumSta} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `);
  };

  // 1. Chains de columnas — UN solo LINE element por cadena
  //
  // MINNUMSTA = nSegments para que el auto-mesh interno de ETABS coincida con
  // la discretización de hekatan.
  //
  // NO se emite RIGIDZONE: no es el default de ETABS (el e2k que él mismo
  // escribe no lo lleva) sino una zona rígida en los extremos de CADA barra,
  // que el modelo no pidió. Medido: rigidizaba el mezanine un 10 % (-178.2
  // contra -186.9 mm del nativo). Solo se emite si el modelo trae
  // rigidOffsets, y eso ya lo hace buildLineExtras.
  chains.forEach((ch, ci) => {
    // Extras usa el primer elemento de la cadena (asumimos uniforme)
    const extras = buildLineExtras(ch.elemIndices[0]);
    emitirLinea(`C${ci + 1}`, ch.type, ch.bottomNodeIdx, ch.topNodeIdx,
                ch.secName, extras, ch.nSegments);
  });

  // 2. Elementos no-chain (beams + columnas sueltas/no-contiguas) — uno por uno
  elements.forEach((el, i) => {
    if (el.length !== 2) return;
    if (inChain.has(i)) return;   // ya emitido como parte de un chain
    const type = guessElementType(nodes, el);
    const secName = elemToSecName.get(i) || `Sec_${i}`;
    const extras = buildLineExtras(i);

    // Ordenados por cota: el de arriba manda la planta del objeto.
    const bot = nodes[el[0]][2] <= nodes[el[1]][2] ? el[0] : el[1];
    const top = nodes[el[0]][2] <= nodes[el[1]][2] ? el[1] : el[0];
    // Un BEAM cuyos extremos caen en plantas DISTINTAS no es un beam para el
    // e2k (un beam vive dentro de una planta): sale como BRACE con su salto, y
    // `emitirLinea` lo devuelve a BEAM si al final los dos cuelgan de la misma.
    emitirLinea(`E${i + 1}`, type === "BEAM" ? "BRACE" : type, bot, top, secName, extras, 3);
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
  // 1. Restraints (con DIAPH "DISCONNECTED" si está en story Base para
  //    evitar que el rigid diaphragm afecte al empotramiento).
  nodeInputs.supports?.forEach((sup, nodeIdx) => {
    const dofs: string[] = [];
    if (sup[0]) dofs.push("UX"); if (sup[1]) dofs.push("UY"); if (sup[2]) dofs.push("UZ");
    if (sup[3]) dofs.push("RX"); if (sup[4]) dofs.push("RY"); if (sup[5]) dofs.push("RZ");
    if (dofs.length > 0) {
      const ps = nodeToPS(nodeIdx);
      const diaphClause = ps.story === "Base" ? ` DIAPH "DISCONNECTED" ` : "";
      lines.push(`  POINTASSIGN  "${ps.pt}"  "${ps.story}"  RESTRAINT "${dofs.join(" ")}" ${diaphClause} `);
      emittedPointAssigns.add(`${ps.pt}@${ps.story}`);
    }
  });
  // 2. Top joints de chains → asignar DIAPHRAGM D1 (ETABS-idiomatic — la
  //    masa lateral se agrupa por nivel via el rigid diaphragm).
  const usarDiafragma = (input.diaphragm ?? "auto") !== "none";
  if (usarDiafragma) chains.forEach(ch => {
    const psTop = nodeToPS(ch.topNodeIdx);
    const key = `${psTop.pt}@${psTop.story}`;
    if (!emittedPointAssigns.has(key) && psTop.story !== "Base") {
      lines.push(`  POINTASSIGN  "${psTop.pt}"  "${psTop.story}"  DIAPH "D1"  `);
      emittedPointAssigns.add(key);
    }
  });
  // En Modo Manual, asegurar POINTASSIGN existente para cada nodo con carga
  // (el "  " vacío sirve para registrar el plan-point a esa story sin asignar
  // restraint ni propiedad — necesario para que POINTLOAD resuelva).
  if (weightMode === "manual" && nodeInputs.loads) {
    nodeInputs.loads.forEach((_load, nodeIdx) => {
      // Solo si al nudo le queda carga PROPIA. La que vino del deck se escribe
      // como AREALOAD, asi que registrar su plan-point no sirve de nada: eran
      // 116 POINTASSIGN contra los 6 de ETABS, todos inertes.
      const [px, py, pz] = cargaPropia(nodeIdx, _load);
      if (Math.abs(px) < 1e-10 && Math.abs(py) < 1e-10 && Math.abs(pz) < 1e-10) return;
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
  // Areas COMO LAS DIBUJO el usuario. Si el modelo las trae, se exporta el
  // objeto y NO sus celdas: ETABS guarda 1 area y la malla el solo. Exportar
  // las 90 celdas daba un modelo que analiza igual pero con la malla
  // congelada — al reimportarlo ya no se puede remallar ni cambiar el borde.
  const areaObjects = (elementInputs as any).areaObjects as
    Array<{ nodes: number[]; cells: number[]; q?: number; ang?: number }> | undefined;
  const celdaDeObjeto = new Set<number>();
  const qDeObjeto = new Map<number, number>();
  const angDeObjeto = new Map<number, number>();
  areaObjects?.forEach(o => o.cells.forEach(c => celdaDeObjeto.add(c)));
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
      if (celdaDeObjeto.has(i)) areaElements.pop();   // la cubre su objeto padre
    }
  });

  // Material default para shells: el primer Concrete que aparezca; si solo
  // hay acero (raro en losas), usa el primer steel.
  const defaultShellMat = (() => {
    for (const [E, isStl] of matIsSteel) if (!isStl) return matNames.get(E);
    return matNames.values().next().value || "Conc_1";
  })();

  areaObjects?.forEach((o, k) => {
    areaElements.push({ idx: o.cells[0], el: o.nodes, isWall: false });
    if (o.q !== undefined) qDeObjeto.set(o.cells[0], o.q);
    if (o.ang !== undefined) angDeObjeto.set(o.cells[0], o.ang);
  });
  const DECK_SEC = "DECK";
  let esMembrana = false;
  const areaLoadRefs: { name: string; story: string; idx: number }[] = [];
  if (areaElements.some(a => !a.isWall)) {
    // .LOSA o DECK? Se decide por el modificador de FLEXION: si es ~0 el area
    // es una MEMBRANA, y en ETABS eso es un DECK, no una losa. Exportarlo
    // siempre como `Slab` hacia que al reimportar volviera con flexion — o
    // sea, lo contrario de lo que el modelo dice. Y ETABS es tajante: un deck
    // queda en ShellType 3 (Membrane) le pidas lo que le pidas (medido).
    const bmods = (elementInputs as any).bendingModifiers as Map<number, number> | undefined;
    const dmods = (elementInputs as any).shellModifiers as Map<number, number[]> | undefined;
    esMembrana = (() => {
      for (const a of areaElements) {
        if (a.isWall) continue;
        const d = dmods?.get(a.idx);
        if (d && Math.abs(d[3]) < 1e-9 && Math.abs(d[4]) < 1e-9) return true;
        const b = bmods?.get(a.idx);
        if (b !== undefined && Math.abs(b) < 1e-9) return true;
      }
      return false;
    })();
    const t_slab = elementInputs.thicknesses?.values().next().value ?? 0.15;
    if (esMembrana) {
      // Tokens copiados del e2k que escribe ETABS para el mismo modelo. No son
      // los de una losa con otro nombre: llevan el prefijo DECK y describen el
      // perfil de la lamina (nervio, paso, conectores). ETABS los exige — con
      // SLABDEPTH/MODELINGTYPE, que era lo que yo suponia, no lee el bloque.
      // El espesor `t` de Hekatan es el TOTAL, y en ETABS el total es
      // DECKSLABDEPTH + DECKRIBDEPTH: el primero es SOLO el hormigon por
      // encima del nervio. Poniendo el total en DECKSLABDEPTH y ademas un
      // nervio salia un deck de 22 cm donde el modelo pedia 12 — mas rigido.
      // Las proporciones son las del deck real del mezanine: 65/55 de 120.
      // El DECKUNITWEIGHT es el peso de la lamina (0.11 kN/m2), convertido:
      // estaba copiado tal cual del e2k de ETABS, que va en N/mm.
      lines.push(`$ DECK PROPERTIES`);
      lines.push(`  SHELLPROP  "${DECK_SEC}"  PROPTYPE  "Deck"  DECKTYPE "Filled"  CONCMATERIAL "${defaultShellMat}"  DECKMATERIAL "${defaultShellMat}"  DECKSLABDEPTH ${rp(t_slab * 65 / 120)} DECKRIBDEPTH ${rp(t_slab * 55 / 120)} DECKRIBWIDTHTOP ${rp(t_slab * 150 / 120)} DECKRIBWIDTHBOTTOM ${rp(t_slab * 100 / 120)} DECKRIBSPACING ${rp(t_slab * 200 / 120)} DECKSHEARTHICKNESS ${rp(t_slab * 0.76 / 120)} DECKUNITWEIGHT ${rp(cF(0.11012))} SHEARSTUDDIAM ${rp(t_slab * 19 / 120)} SHEARSTUDHEIGHT ${rp(t_slab * 100 / 120)} SHEARSTUDFU 400 `);
    } else {
      lines.push(`$ SLAB PROPERTIES`);
      lines.push(`  SHELLPROP  "Losa"  PROPTYPE  "Slab"  MATERIAL "${defaultShellMat}"  MODELINGTYPE "ShellThin"  SLABTYPE "Slab"  SLABTHICKNESS ${rd(t_slab)} `);
    }
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
        // Un deck se asigna por su propio nombre de seccion y con ANG: el eje
        // local decide A QUIEN le entrega la carga (salva perpendicular a las
        // secundarias). Sin el ANG la reparte al reves. Y no lleva DIAPH ni
        // ADDRESTRAINT "Yes" — asi lo escribe ETABS.
        const ang = angDeObjeto.get(ae.idx) ?? shellAngles?.get(ae.idx);
        aaEntries.push(esMembrana
          ? `  AREAASSIGN  "${aName}"  "${ps[0].story}"  SECTION "${DECK_SEC}"  ANG ${rd(ang ?? 0)} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "No"  CARDINALPOINT "MIDDLE"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `
          : `  AREAASSIGN  "${aName}"  "${ps[0].story}"  SECTION "Losa" ${usarDiafragma ? ` DIAPH  "D1" ` : ""} OBJMESHTYPE "DEFAULT"  ADDRESTRAINT "Yes"  CARDINALPOINT "TOP"  TRANSFORMSTIFFNESSFOROFFSETS "No"  `);
        areaLoadRefs.push({ name: aName, story: ps[0].story, idx: ae.idx });
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
  //     (ya emitido arriba). El formato POINTLOAD usa sintaxis `LC "${patronGravedad}"`
  //     después de TYPE para mayor compatibilidad con ETABS.
  const selfWt = weightMode === "manual" ? 0 : 1;
  lines.push(`$ LOAD PATTERNS`);
  const pats = input.loadPatterns?.length
    ? input.loadPatterns
    : [{ name: "Dead", type: "Dead", selfWeightMultiplier: selfWt },
       { name: "Live", type: "Live", selfWeightMultiplier: 0 }];
  for (const lp of pats) {
    const sw = lp.type === "Dead" ? (weightMode === "manual" ? 0 : (lp.selfWeightMultiplier ?? 1))
                                  : (lp.selfWeightMultiplier ?? 0);
    lines.push(`  LOADPATTERN "${lp.name}"  TYPE  "${lp.type ?? "Other"}"  SELFWEIGHT  ${sw}`);
  }
  lines.push(``);
  // El LC al que se cuelgan las cargas nodales: el primer patron de gravedad
  // del modelo. Antes era la cadena "Dead" fija, asi que si el modelo llamaba
  // a su patron de otra forma, ETABS importaba cargas huerfanas.
  const patronGravedad = pats.find(p => p.type === "Dead")?.name ?? pats[0].name;

  // ── POINT OBJECT LOADS ─────────────────────────────────────────────
  const userLoadLines: string[] = [];
  if (nodeInputs.loads && nodeInputs.loads.size > 0) {
    nodeInputs.loads.forEach((load, nodeIdx) => {
      const [fx, fy, fz] = cargaPropia(nodeIdx, load);
      const ps = nodeToPS(nodeIdx);
      if (Math.abs(fx) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "FORCE"  LC "${patronGravedad}"  FX ${rp(cF(fx))}  FY 0  FZ 0`);
      if (Math.abs(fy) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "FORCE"  LC "${patronGravedad}"  FX 0  FY ${rp(cF(fy))}  FZ 0`);
      // ── MOMENTOS ────────────────────────────────────────────────────
      // Sin esto el e2k exportado NO reproduce el modelo. Una carga REPARTIDA
      // sobre barra (`frameload` del CLI) se convierte a fuerzas Y MOMENTOS de
      // empotramiento, y los momentos son justo lo que distingue una viga
      // continua de un reparto nodal: omitirlos manda 16 % menos carga al apoyo
      // interior de un vano ancho y 23 % mas al extremo.
      // El formato sale de un e2k real:
      //   POINTLOAD "3" "Level_1" LC "Dead" TYPE "FORCE" FX 0 FY 0 FZ -20 MX 0 MY 0 MZ 0
      // Las coordenadas se escriben siempre en metros, asi que el momento
      // (fuerza x longitud) convierte con el mismo factor que la fuerza.
      const mx = load[3] ?? 0, my = load[4] ?? 0, mz = load[5] ?? 0;
      if (Math.abs(mx) > 1e-10 || Math.abs(my) > 1e-10 || Math.abs(mz) > 1e-10) {
        userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "FORCE"  LC "${patronGravedad}"  FX 0  FY 0  FZ 0  MX ${rp(cF(mx))}  MY ${rp(cF(my))}  MZ ${rp(cF(mz))}`);
      }
      // FZ: en modo "auto" se omite (lo computa ETABS via SELFWEIGHT=1);
      // en modo "manual" se emite explícitamente.
      if (weightMode === "manual" && Math.abs(fz) > 1e-10) {
        userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "FORCE"  LC "${patronGravedad}"  FX 0  FY 0  FZ ${rp(cF(fz))}`);
      }
    });
  }
  if ((nodeInputs as any).moments && (nodeInputs as any).moments.size > 0) {
    (nodeInputs as any).moments.forEach((m: number[], nodeIdx: number) => {
      const [mx, my, mz] = m;
      const ps = nodeToPS(nodeIdx);
      if (Math.abs(mx) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "MOMENT"  LC "${patronGravedad}"  MX ${rp(cF(mx))}  MY 0  MZ 0`);
      if (Math.abs(my) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "MOMENT"  LC "${patronGravedad}"  MX 0  MY ${rp(cF(my))}  MZ 0`);
      if (Math.abs(mz) > 1e-10) userLoadLines.push(`  POINTLOAD  "${ps.pt}"  "${ps.story}"  TYPE "MOMENT"  LC "${patronGravedad}"  MX 0  MY 0  MZ ${rp(cF(mz))}`);
    });
  }
  if (userLoadLines.length > 0) {
    lines.push(`$ POINT OBJECT LOADS`);
    userLoadLines.forEach(l => lines.push(l));
    lines.push(``);
  }

  // ── SHELL OBJECT LOADS ─────────────────────────────────────────────
  // La carga de superficie tal cual, sin repartir. Hekatan la convierte a
  // nodal para resolver (vector consistente), pero si la exporta ya repartida
  // el e2k deja de parecerse al de ETABS y, peor, al reimportarlo la carga
  // queda clavada en los nudos: cambias la malla y ya no se redistribuye.
  //   TYPE "UNIFF"  DIR "GRAV"  — asi lo escribe ETABS (medido, no supuesto).
  if (shellLoads && shellLoads.size > 0 && areaLoadRefs.length > 0) {
    const shellLoadLines: string[] = [];
    for (const ref of areaLoadRefs) {
      const qObj = qDeObjeto.get(ref.idx);
      const q = qObj !== undefined ? { value: qObj } : shellLoads.get(ref.idx);
      if (!q || Math.abs(q.value) < 1e-12) continue;
      // Ojo con el signo: en Hekatan (Z arriba) la carga hacia abajo es
      // NEGATIVA, pero DIR "GRAV" de ETABS YA apunta hacia abajo. Pasarle el
      // -0.0093 tal cual la levantaria. Medido en re_carga_inclinada_etabs.py.
      const dir = q.dir ?? "GRAV";
      const fval = dir === "GRAV" ? Math.abs(q.value) : q.value;
      shellLoadLines.push(
        `  AREALOAD  "${ref.name}"  "${ref.story}"  TYPE "UNIFF"  DIR "${dir}"  LC "${q.pattern ?? patronGravedad}"  FVAL ${rp(cF(fval))}`);
    }
    if (shellLoadLines.length > 0) {
      lines.push(`$ SHELL OBJECT LOADS`);
      shellLoadLines.forEach(l => lines.push(l));
      lines.push(``);
    }
  }

  // ── ANALYSIS OPTIONS ────────────────────────────────────────────────
  // ACTIVEDOF: todos los 6 DOFs habilitados globalmente (frames 3D).
  // PDELTA NONE: análisis lineal puro (no 2do orden geométrico).
  //   Para análisis sísmico ASCE 7/NSR/NEC el usuario activaría manualmente
  //   "Non-iterative Based on Mass" en ETABS GUI (Define → P-Delta Options).
  //   Sintaxis E2K alternativa para activarlo:
  //     PDELTA METHOD "NON_ITERATIVE_BASED_ON_MASS"  MASSSOURCE "MsSrc1"
  //   Lo dejamos en NONE para el caso default lineal.
  lines.push(`$ ANALYSIS OPTIONS`);
  lines.push(`  ACTIVEDOF "UX UY UZ RX RY RZ"  `);
  lines.push(`  PDELTA  METHOD "NONE"  `);
  lines.push(``);

  // ── MASS SOURCE ─────────────────────────────────────────────────────
  // Define cómo ETABS computa la masa para modal/THA. INCLUDELOADS "Yes"
  // + MASSSOURCELOAD "Dead" 1 → masa = peso propio (SELFWEIGHT) × 1g.
  // LUMPATSTORIES "Yes" agrupa la masa al nivel del rigid diaphragm.
  lines.push(`$ MASS SOURCE`);
  lines.push(`  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    INCLUDEMOVE "No"    INCLUDELATERALMASS "Yes"    INCLUDEVERTICALMASS "No"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  `);
  lines.push(`  MASSSOURCELOAD  "MsSrc1"  "Dead"  1 `);
  lines.push(``);

  // ── LOAD CASES (Linear Static) ─────────────────────────────────────
  // Sin esto ETABS NO corre análisis. Define Dead y Live como casos
  // estáticos lineales independientes.
  lines.push(`$ LOAD CASES`);
  const casos = input.loadCases?.length
    ? input.loadCases
    : pats.map(p => ({ name: p.name, type: "Linear Static",
                       patterns: [{ pattern: p.name, scaleFactor: 1 }] }));
  for (const lc of casos) {
    lines.push(`  LOADCASE "${lc.name}"  TYPE  "${lc.type ?? "Linear Static"}"  INITCOND  "PRESET"  `);
    for (const pp of lc.patterns ?? []) {
      lines.push(`  LOADCASE "${lc.name}"  LOADPAT  "${pp.pattern}"  SF ${pp.scaleFactor} `);
    }
  }
  // Caso modal estándar (LTH para análisis dinámico) - opcional pero útil
  // Modal-Eigen caso (default razonable: 3 modos suficientes para validar
  // f₁/f₂/f₃ — ETABS reduce automáticamente a la cantidad de mass DOFs
  // disponibles si el modelo tiene menos masa que modos pedidos).
  // Para análisis sísmico real, el usuario subiría a 12+ con Ritz.
  lines.push(`  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  `);
  lines.push(`  LOADCASE "Modal"  MAXMODES 3  MINMODES 1  EIGENSHIFTFREQ 0  EIGENCUTOFFFREQ 0  EIGENTOL 1E-09  ALLOWAUTOFREQSHIFT "Yes"  `);
  lines.push(``);

  // ── LOAD COMBINATIONS ──────────────────────────────────────────────
  // SOLO las que trae el modelo. Antes estaban ESCRITAS A MANO aqui (1.4D y
  // 1.2D+1.6L fijas), asi que todo e2k exportado las llevaba aunque el modelo
  // no tuviera ninguna — y el e2k que escribe ETABS para el mismo modelo no
  // trae `$ LOAD COMBINATIONS` en absoluto. Eso rompia la ida y vuelta:
  // exportabas, reimportabas, y aparecian combinaciones de la nada.
  const combos = input.loadCombinations;
  if (combos && combos.length) {
    lines.push(`$ LOAD COMBINATIONS`);
    for (const cm of combos) {
      lines.push(`  COMBO "${cm.name}"  TYPE "${cm.type ?? "Linear Add"}"  `);
      for (const c of cm.cases ?? []) {
        lines.push(`  COMBO "${cm.name}"  LOADCASE  "${c.case}"  SF ${c.scaleFactor} `);
      }
    }
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
