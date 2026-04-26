/**
 * SAFE .f2k Importer — parsea archivo SAFE 20.x y extrae parámetros relevantes
 * para configurar zapata-aislada de Hekatan.
 *
 * Solo extrae lo esencial:
 *   - Slab thickness (de SLAB PROPERTIES)
 *   - Subgrade Modulus (de SOIL SUBGRADE PROPERTIES)
 *   - Joint coordinates → bounding box → Lz, Bz
 *   - Joint Loads → P, Mx, My por load pattern
 *
 * Asume formato F2K estándar TABLE (text-based) generado por SAFE 20.x.
 */

export interface ImportedZapataParams {
  /** Lado X (m) — derivado de bounding box de Joints */
  Lz?: number;
  /** Lado Y (m) */
  Bz?: number;
  /** Espesor (m) */
  tz?: number;
  /** Lado columna estimado (m) — del patch load size */
  bc?: number;
  /** Subgrade Modulus en kN/m³ (convertido desde tonf/m³ del F2K) */
  ks_kNm3?: number;
  /** q_adm tonf/m² (estimado para Hekatan: ks_kNm3 / (ks_factor × 9.80665)) */
  q_adm?: number;
  ks_factor?: number;
  /** Carga vertical Dead en tonf */
  P_dead_tonf?: number;
  /** Carga vertical Live en tonf */
  P_live_tonf?: number;
  Mx_dead_tonfm?: number;
  My_dead_tonfm?: number;
  /** Tipo de spring detectado en el F2K. Solo "area" permite mapeo directo a
   *  Hekatan zapata-aislada (ks_kNm3 distribuido sobre losa).
   *  Line springs NO se importan para zapatas (son para elementos línea: vigas,
   *  strips, muros — usar el ejemplo `zapata-viga-amarre` en su lugar). */
  _springType?: "area" | "point";
  /** Si el F2K tiene Point Springs: stiffness Z en tonf/m por nodo. Requiere
   *  área tributaria del usuario para convertir a ks_kNm3 equivalente. */
  _pointSpringKz_tonfm?: number;
}

const TONF_TO_KN = 9.80665;

/**
 * Parsea texto F2K. Robusto a variaciones menores de formato.
 */
export function parseZapataF2k(text: string): ImportedZapataParams {
  const out: ImportedZapataParams = {};
  const lines = text.split(/\r?\n/);

  // ── Detección de CurrUnits ───────────────────────────────────
  // SAFE F2K guarda los valores en el sistema de unidades del proyecto.
  // Ej:  CurrUnits="tonf, m, C"  → ks en tonf/m³  (factor 9.80665 → kN/m³)
  //      CurrUnits="tonf, mm, C" → ks en tonf/mm³ (factor 9.80665e9 → kN/m³)
  //      CurrUnits="kN, m, C"    → ks en kN/m³    (factor 1)
  //      CurrUnits="kN, mm, C"   → ks en kN/mm³   (factor 1e9 → kN/m³)
  let unitForce: "tonf" | "kN" | "kip" | "lb" | "N" = "tonf";
  let unitLength: "m" | "mm" | "cm" | "ft" | "in" = "m";
  const cuMatch = text.match(/CurrUnits\s*=\s*"([^"]+)"/);
  if (cuMatch) {
    const parts = cuMatch[1].split(",").map((s) => s.trim());
    const f = parts[0]?.toLowerCase();
    const L = parts[1]?.toLowerCase();
    if (f === "tonf" || f === "kn" || f === "kip" || f === "lb" || f === "n")
      unitForce = (f === "kn" ? "kN" : f) as any;
    if (L === "m" || L === "mm" || L === "cm" || L === "ft" || L === "in")
      unitLength = L as any;
  }
  // Factor para llevar [force/length³] → [kN/m³]
  const FORCE_TO_KN: Record<string, number> = {
    tonf: 9.80665, kN: 1, kip: 4.4482216, lb: 4.4482216e-3, N: 1e-3,
  };
  const LENGTH_TO_M: Record<string, number> = {
    m: 1, mm: 1e-3, cm: 1e-2, ft: 0.3048, in: 0.0254,
  };
  const ksUnitFactor = FORCE_TO_KN[unitForce] / Math.pow(LENGTH_TO_M[unitLength], 3);
  // Factor para llevar [force × length] → [kN·m] (momentos)
  const momentToKnm = FORCE_TO_KN[unitForce] * LENGTH_TO_M[unitLength];
  // Factor para llevar [force] → [kN] (fuerzas)
  const forceToKn = FORCE_TO_KN[unitForce];
  // Factor para llevar [length] → [m] (geometría, espesor)
  const lengthToM = LENGTH_TO_M[unitLength];

  // Helper: extrae un par "Key=Value" del string (V1: Value puede tener comillas o números)
  function extract(line: string, key: string): string | null {
    // Casos: Key=value, Key="value", Key=value sin espacios
    const re = new RegExp(`${key}\\s*=\\s*("[^"]*"|[^\\s]+)`, "i");
    const m = line.match(re);
    if (!m) return null;
    return m[1].replace(/^"|"$/g, "");
  }
  function num(s: string | null): number | null {
    if (s == null) return null;
    const v = parseFloat(s);
    return Number.isFinite(v) ? v : null;
  }

  // Bounding box de joints
  let xmin = +Infinity, xmax = -Infinity, ymin = +Infinity, ymax = -Infinity;
  let nJoints = 0;
  // Acumulador de cargas por load pattern
  const loadsByPattern: Record<string, { Fz: number; Mx: number; My: number }> = {};
  // Track patch size del primer joint load encontrado
  let firstPatchX: number | null = null, firstPatchY: number | null = null;
  // Track current table
  let table = "";

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith("TABLE:")) {
      const m = line.match(/TABLE:\s*"([^"]+)"/);
      table = m ? m[1] : "";
      continue;
    }
    // SLAB PROPERTIES (SAFE: "SLAB PROPERTY DEFINITIONS")
    if (table.includes("SLAB PROPERTY")) {
      const t = num(extract(line, '"Total Thickness"')) ?? num(extract(line, '"Slab Thickness"'));
      // Convertir longitud a metros (F2K en mm/cm/m según CurrUnits).
      if (t != null && out.tz == null) out.tz = t * lengthToM;
    }
    // SPRINGS — SAFE tiene 3 tipos (Point, Line, Area) con UNIDADES DISTINTAS:
    //   - AREA SPRINGS  → "Subgrade Modulus" tonf/m³  (= por unidad de área del slab)
    //   - POINT SPRINGS → "Translational Z" tonf/m   (= total por nodo)
    //   - LINE SPRINGS  → "Translational Z" tonf/m/m (= por longitud)
    // Para zapata-aislada, AREA SPRINGS es lo correcto (ks distribuido sobre la losa).
    // Si el F2K tiene los 3, priorizamos AREA. Reportamos warning si encontramos POINT.
    if (table.includes("AREA SPRINGS") || table.includes("SOIL SUBGRADE")) {
      const ks = num(extract(line, '"Subgrade Modulus"'));
      if (ks != null) {
        // F2K guarda en [force/length³] del CurrUnits → convertir a kN/m³.
        // SAFE muestra esta unidad como "tonf/mm/mm" o "kN/m/m²" (= force/length³).
        out.ks_kNm3 = ks * ksUnitFactor;
        out._springType = "area";
      }
    } else if (table.includes("POINT SPRINGS") && out.ks_kNm3 == null) {
      // Solo si NO encontramos area spring antes — usar point spring como fallback.
      // Convertir kZ_force_length → ks_kN/m³ requiere área tributaria, que NO conocemos
      // hasta tener el bbox. Guardamos en tonf/m equivalente.
      const kZ = num(extract(line, '"Translational Z"')) ?? num(extract(line, '"K Trans Z"'));
      if (kZ != null) {
        // Convertir [force/length] → tonf/m
        out._pointSpringKz_tonfm = kZ * (forceToKn / lengthToM) / TONF_TO_KN;
        out._springType = "point";
      }
    }
    // NOTA: Line Springs (SAFE: "SPRING PROPERTY DEFINITIONS - LINE SPRINGS")
    // NO aplican a zapatas aisladas. Son para elementos LÍNEA (vigas de cimentación,
    // strips, muros). Si el F2K tiene LINE SPRINGS, los IGNORAMOS para este import
    // (zapata-aislada solo entiende area springs distribuidos sobre la losa).
    // JOINT COORDINATES — SAFE usa varios nombres de tabla:
    //   "POINT OBJECT CONNECTIVITY"      (formato preferido moderno)
    //   "JOINT COORDINATES"              (formato legacy)
    //   "OBJECTS AND ELEMENTS - JOINTS"  (formato análisis post-mesh)
    if (table === "POINT OBJECT CONNECTIVITY" ||
        table === "JOINT COORDINATES" ||
        table === "OBJECTS AND ELEMENTS - JOINTS") {
      const x = num(extract(line, '"Global X"')) ?? num(extract(line, "X"));
      const y = num(extract(line, '"Global Y"')) ?? num(extract(line, "Y"));
      if (x != null && y != null) {
        // Convertir a metros (F2K guarda en CurrUnits).
        const xm = x * lengthToM, ym = y * lengthToM;
        if (xm < xmin) xmin = xm;
        if (xm > xmax) xmax = xm;
        if (ym < ymin) ymin = ym;
        if (ym > ymax) ymax = ym;
        nJoints++;
      }
    }
    // JOINT LOADS - FORCE (point loads). SAFE usa "JOINT LOADS ASSIGNMENTS - FORCE"
    if (table.includes("JOINT LOADS") || table.includes("LOAD ASSIGNMENTS")) {
      const pattern = extract(line, '"Load Pattern"');
      const F3 = num(extract(line, "F3")) ?? num(extract(line, "FZ"));
      const M1 = num(extract(line, "M1")) ?? num(extract(line, "MX"));
      const M2 = num(extract(line, "M2")) ?? num(extract(line, "MY"));
      if (pattern && (F3 != null || M1 != null || M2 != null)) {
        // Acumulamos en kN / kN·m (canon Hekatan); convertimos al final a tonf.
        const acc = loadsByPattern[pattern] ?? { Fz: 0, Mx: 0, My: 0 };
        if (F3 != null) acc.Fz += F3 * forceToKn;
        if (M1 != null) acc.Mx += M1 * momentToKnm;
        if (M2 != null) acc.My += M2 * momentToKnm;
        loadsByPattern[pattern] = acc;
      }
      // Capturar dimensiones del patch load (convertir a metros)
      const xD = num(extract(line, '"X Dimension"'));
      const yD = num(extract(line, '"Y Dimension"'));
      if (firstPatchX == null && xD != null) firstPatchX = xD * lengthToM;
      if (firstPatchY == null && yD != null) firstPatchY = yD * lengthToM;
    }
  }

  // Aplicar bounding box
  if (Number.isFinite(xmin) && Number.isFinite(xmax)) {
    out.Lz = xmax - xmin;
    out.Bz = ymax - ymin;
  }
  // Patch size → bc columna
  if (firstPatchX != null && firstPatchY != null) {
    out.bc = (firstPatchX + firstPatchY) / 2;  // promedio si rectangular
  }

  // Cargas: el F2K guarda FZ negativo para downward. Hekatan usa P positivo = compresión.
  // Los acumuladores ya están en kN/kN·m → convertir a tonf/tonf·m.
  if (loadsByPattern["Dead"]) {
    out.P_dead_tonf  = -loadsByPattern["Dead"].Fz / TONF_TO_KN;  // flip signo + kN→tonf
    out.Mx_dead_tonfm = loadsByPattern["Dead"].Mx / TONF_TO_KN;
    out.My_dead_tonfm = loadsByPattern["Dead"].My / TONF_TO_KN;
  }
  if (loadsByPattern["Live"]) {
    out.P_live_tonf = -loadsByPattern["Live"].Fz / TONF_TO_KN;
  }

  // Estimar ks_factor + q_adm para Hekatan (tipos de suelo)
  // Hekatan: ks (kN/m³) = ks_factor × q_adm(tonf/m²) × 9.80665
  // Asumimos ks_factor=20 (Custom), q_adm = ks_kNm3 / (20 × 9.80665)
  if (out.ks_kNm3 != null) {
    out.ks_factor = 20;
    out.q_adm = out.ks_kNm3 / (20 * TONF_TO_KN);
  }

  return out;
}

/**
 * Helper para abrir un file picker y leer F2K.
 * Devuelve los params parseados.
 */
export async function pickAndParseF2k(): Promise<ImportedZapataParams> {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".f2k,.txt";
    input.onchange = async (ev: any) => {
      const file = ev.target.files?.[0];
      if (!file) return reject(new Error("No file selected"));
      try {
        const text = await file.text();
        const params = parseZapataF2k(text);
        resolve(params);
      } catch (e) { reject(e); }
    };
    input.click();
  });
}
