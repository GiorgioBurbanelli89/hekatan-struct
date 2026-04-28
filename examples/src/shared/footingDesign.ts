/**
 * Diseño paramétrico de zapata aislada (NEC-SE-GC / ACI 318).
 * Clasifica el tipo según la posición de la columna en el edificio:
 *   - esquinera: columna en esquina (2 bordes libres)
 *   - lindero  : columna en lateral (1 borde libre)
 *   - central  : columna interior (sin bordes libres)
 *
 * Diseño: dimensiona la zapata para que σ_max ≤ q_adm con redistribución
 * trapezoidal/triangular si la excentricidad sale del kern (e > L/6).
 */

export type FootingType = "esquinera" | "lindero" | "central";

const TONF_TO_KN = 9.80665;

/**
 * Clasifica el tipo de zapata según la posición del nodo en planta.
 *
 * @param x      coordenada X del nodo (m)
 * @param y      coordenada Y del nodo (m)
 * @param Lx    largo del edificio en X (m)
 * @param Ly    largo del edificio en Y (m)
 * @param tol   tolerancia para considerar "en el borde" (m)
 */
export function classifyFootingType(
  x: number, y: number,
  Lx: number, Ly: number,
  tol = 0.01,
): FootingType {
  const onLeft   = Math.abs(x) < tol;
  const onRight  = Math.abs(x - Lx) < tol;
  const onBottom = Math.abs(y) < tol;
  const onTop    = Math.abs(y - Ly) < tol;
  const edges = [onLeft, onRight, onBottom, onTop].filter(Boolean).length;
  if (edges >= 2) return "esquinera";
  if (edges === 1) return "lindero";
  return "central";
}

export interface FootingDesignInput {
  /** Carga axial al pie de la columna (kN, +compresión) */
  P_kN: number;
  /** Momento alrededor del eje X en la base (kN·m) */
  Mx_kN: number;
  /** Momento alrededor del eje Y en la base (kN·m) */
  My_kN: number;
  /** Tipo de zapata (auto-clasificado o forzado) */
  tipo: FootingType;
  /** Capacidad portante admisible del suelo (tonf/m²) */
  q_adm_tonf: number;
  /** Módulo subgrade (kN/m³) — para calcular asentamiento */
  ks?: number;
  /** Lado mínimo deseado (m) — opcional, default 1.0 */
  Lz_min?: number;
  /** Lado máximo deseado (m) — opcional, default 4.0 */
  Lz_max?: number;
  /** Espesor mínimo (m) — default 0.30 */
  t_min?: number;
}

export interface FootingDesignOutput {
  tipo: FootingType;
  /** Dimensión X de la zapata (m) */
  Lz: number;
  /** Dimensión Y de la zapata (m) */
  Bz: number;
  /** Espesor (m) */
  t: number;
  /** Área (m²) */
  A: number;
  /** Excentricidad X (m) */
  ex: number;
  /** Excentricidad Y (m) */
  ey: number;
  /** σ_max en la zapata (tonf/m²) */
  sigmaMax_tonf: number;
  /** σ_min en la zapata (tonf/m²) */
  sigmaMin_tonf: number;
  /** Razón σ_max / q_adm (≤ 1 OK) */
  ratio: number;
  /** Asentamiento estimado (mm), si ks fue dado */
  delta_mm?: number;
  /** ¿La excentricidad sale del kern? (e > L/6) */
  fueraKern: boolean;
  /** Mensaje de estado */
  status: "OK" | "OVERSTRESS" | "UPLIFT";
}

/**
 * Diseña una zapata aislada para que σ_max ≤ q_adm.
 *
 * Algoritmo:
 *   1. Calcula excentricidades ex = My/P, ey = Mx/P
 *   2. Estima dimensiones iniciales Lz=Bz a partir de q_adm
 *   3. Verifica:
 *        - Si e ≤ L/6: presión trapezoidal, σ_max = P/A · (1 + 6e/L)
 *        - Si e > L/6: presión triangular, σ_max = 2P / [B·(1.5L - 3e)]
 *   4. Itera (binary search) hasta σ_max ≤ q_adm con margen 5%
 */
export function designFooting(input: FootingDesignInput): FootingDesignOutput {
  const { P_kN, Mx_kN, My_kN, tipo, q_adm_tonf, ks } = input;
  const Lz_min = input.Lz_min ?? 1.0;
  const Lz_max = input.Lz_max ?? 4.0;
  const t_min  = input.t_min  ?? 0.30;

  // Si tracción (uplift), reportamos sin diseñar
  if (P_kN <= 0) {
    return {
      tipo,
      Lz: Lz_min, Bz: Lz_min, t: t_min, A: Lz_min ** 2,
      ex: 0, ey: 0,
      sigmaMax_tonf: 0, sigmaMin_tonf: 0, ratio: 0,
      fueraKern: false,
      status: "UPLIFT",
    };
  }

  const q_adm_kN = q_adm_tonf * TONF_TO_KN;
  // Excentricidad: e = M / P
  const ex = Math.abs(My_kN / P_kN);
  const ey = Math.abs(Mx_kN / P_kN);

  // Iteración: probar L creciente hasta σ_max ≤ q_adm con margen
  const target = q_adm_kN * 0.95;
  let Lz = Math.max(Lz_min, Math.sqrt(P_kN / q_adm_kN));
  let Bz = Lz;
  let sigmaMax = Infinity;
  let sigmaMin = 0;
  let fueraKern = false;
  for (let iter = 0; iter < 50 && Lz <= Lz_max; iter++) {
    const A = Lz * Bz;
    // Para zapatas excéntricas (lindero/esquinera), añadimos volado adicional
    const extra = tipo === "esquinera" ? 0.30 : tipo === "lindero" ? 0.20 : 0;
    const LzEff = Lz + extra, BzEff = Bz + extra;
    const Aeff = LzEff * BzEff;
    // Caso uniaxial dominante: usar el mayor e
    const e = Math.max(ex, ey);
    const L = e === ex ? LzEff : BzEff;
    fueraKern = e > L / 6;
    if (!fueraKern) {
      // Presión trapezoidal
      sigmaMax = (P_kN / Aeff) * (1 + 6 * e / L);
      sigmaMin = (P_kN / Aeff) * (1 - 6 * e / L);
    } else {
      // Presión triangular (parte de zapata sin contacto)
      const aPrime = 1.5 * L - 3 * e;
      const Btrans = e === ex ? BzEff : LzEff;
      sigmaMax = (2 * P_kN) / (Btrans * Math.max(aPrime, 0.01));
      sigmaMin = 0;
    }
    if (sigmaMax <= target) break;
    Lz += 0.05;
    Bz += 0.05;
  }

  const A = Lz * Bz;
  const t = Math.max(t_min, Lz / 6);  // Espesor mínimo aprox.

  const ratio = sigmaMax / q_adm_kN;
  const status: "OK" | "OVERSTRESS" =
    ratio <= 1.0 ? "OK" : "OVERSTRESS";

  // Asentamiento elástico (Bowles): δ ≈ σ_max / ks
  let delta_mm: number | undefined;
  if (ks && ks > 0) {
    delta_mm = (sigmaMax / ks) * 1000;
  }

  return {
    tipo,
    Lz, Bz, t, A,
    ex, ey,
    sigmaMax_tonf: sigmaMax / TONF_TO_KN,
    sigmaMin_tonf: sigmaMin / TONF_TO_KN,
    ratio,
    delta_mm,
    fueraKern,
    status,
  };
}

/**
 * Diseña TODAS las zapatas de un edificio dado el array de reacciones.
 *
 * @param baseNodes   Array de [nodeIdx, x, y, Rx, Ry, Rz, Mx, My, Mz]
 * @param Lx, Ly      Dimensiones del edificio en planta
 * @param q_adm_tonf  Capacidad portante admisible (tonf/m²)
 * @param ks          Módulo subgrade (kN/m³)
 */
export function designAllFootings(
  baseNodes: Array<{
    idx: number; x: number; y: number;
    P_kN: number; Mx_kN: number; My_kN: number;
  }>,
  Lx: number, Ly: number,
  q_adm_tonf: number,
  ks?: number,
): Array<FootingDesignOutput & { idx: number; x: number; y: number }> {
  return baseNodes.map(n => {
    const tipo = classifyFootingType(n.x, n.y, Lx, Ly);
    const out  = designFooting({
      P_kN: n.P_kN, Mx_kN: n.Mx_kN, My_kN: n.My_kN,
      tipo, q_adm_tonf, ks,
    });
    return { ...out, idx: n.idx, x: n.x, y: n.y };
  });
}
