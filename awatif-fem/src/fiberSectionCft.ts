/**
 * ============================================================================
 *  fiberSectionCft — Fiber section analysis for CFT columns (Level 2)
 * ============================================================================
 *
 *  Análisis de sección compuesta CFT mediante discretización en fibras:
 *    - Tubo de acero → fibras anulares con ley Menegotto-Pinto (o elástico +
 *      endurecimiento lineal por simplicidad).
 *    - Concreto relleno → fibras con concreto confinado (Mander-Priestley-Park
 *      1988), que captura el aumento de f'cc y εcc por confinamiento del tubo.
 *
 *  Provee:
 *    - Diagrama de interacción P-M riguroso (plastic stress distribution por
 *      análisis de fibras).
 *    - Moment-curvature (M-φ) para una carga axial dada.
 *    - Estado de cada fibra (fluencia, pico, degradación).
 *
 *  Nivel 2 en la jerarquía CFT:
 *    Level 1 — sección equivalente (shared/cftDesign.ts)
 *    Level 2 — fiber section (este archivo) ← aquí estamos
 *    Level 3 — 3D solid + CDP (ABAQUS, fuera de scope)
 *
 *  Referencias:
 *    - Mander, Priestley, Park, "Theoretical stress-strain model for confined
 *      concrete" J. Struct. Eng. ASCE 114(8) 1988, 1804-1826
 *    - Tao, Uy, Han, Wang, "Stress-strain model for concrete confined by
 *      stainless steel tubes" Eng. Struct. 32(5) 2010
 *    - AISC 360-22 §I2.3 (PSD method — equivalence check)
 *    - Eurocode 4 §6.7 (composite columns)
 *    - OpenSees fiberSection command (reference implementation)
 * ============================================================================
 */

// ── Mander Confined Concrete Model ─────────────────────────────────

export interface ManderParams {
  /** Resistencia nominal a compresión f'c [kN/m²] */
  fc: number;
  /** Deformación en pico sin confinar εco. Default 0.002 (ACI estándar) */
  eco?: number;
  /** Módulo de elasticidad Ec [kN/m²]. Si no se da, 4700·√(f'c [MPa]) */
  Ec?: number;
  /** Presión de confinamiento efectiva f_l' [kN/m²] */
  fl_prime: number;
}

export interface ManderResult {
  /** Resistencia confinada f'cc [kN/m²] */
  fcc: number;
  /** Deformación en pico confinada εcc */
  ecc: number;
  /** Deformación última εcu (donde σ/f'cc = 0.5 aprox) */
  ecu: number;
  /** Módulo de elasticidad Ec */
  Ec: number;
  /** Ratio de mejora f'cc/f'c */
  K_conf: number;
}

/**
 * Modelo de concreto confinado Mander 1988 (aplicable a CFT, zunchado, estribos).
 *
 * f'cc = f'c · [ -1.254 + 2.254·√(1 + 7.94·fl'/f'c) - 2·(fl'/f'c) ]     (Eq. 5)
 * εcc = εco · [ 1 + 5·(f'cc/f'c - 1) ]                                   (Eq. 8)
 *
 * La curva σ-ε es:
 *   σ(ε) = f'cc · x·r / (r - 1 + x^r)
 *   x = ε/εcc,  r = Ec / (Ec - Esec),  Esec = f'cc/εcc
 */
export function manderConfinedConcrete(p: ManderParams): ManderResult {
  const fc = p.fc;
  const eco = p.eco ?? 0.002;
  const fl = p.fl_prime;
  const Ec = p.Ec ?? 4700 * Math.sqrt(fc / 1000) * 1000;   // MPa → kN/m²

  // f'cc según Mander 1988 Eq. 5
  const ratio = fl / fc;
  const fcc = fc * (-1.254 + 2.254 * Math.sqrt(1 + 7.94 * ratio) - 2 * ratio);

  // εcc según Eq. 8
  const K_conf = fcc / fc;
  const ecc = eco * (1 + 5 * (K_conf - 1));

  // Deformación última εcu: aproximación para CFT ≈ 0.04 (Eurocode 4 / ACI 318-22)
  // O vía Mander Eq. 10: εcu = 0.004 + 1.4·ρs·fyh·εsm/f'cc
  // Para CFT, ρs es muy alta → εcu grande. Usamos cota 0.04 típica.
  const ecu = Math.min(0.04, 4 * ecc);

  return { fcc, ecc, ecu, Ec, K_conf };
}

/**
 * Stress σ(ε) según modelo Mander (curva ascendente hasta εcc, descendente hasta εcu).
 * Retorna 0 para ε fuera de rango [0, εcu] (concreto no resiste tracción aquí).
 */
export function manderStress(eps: number, m: ManderResult): number {
  if (eps <= 0) return 0;                // concreto no resiste tracción (simplificación)
  if (eps >= m.ecu) return 0;            // rotura
  const x = eps / m.ecc;
  const Esec = m.fcc / m.ecc;
  const r = m.Ec / (m.Ec - Esec);
  return m.fcc * x * r / (r - 1 + Math.pow(x, r));
}

// ── Steel: elastic + linear hardening (simplified Menegotto-Pinto) ──
// Para Level 2 usamos bilineal con strain hardening b (~0.01-0.03 típico).
// Level 2+ (futuro): Menegotto-Pinto full cíclico (ya en nonlinear.cpp para BRB).

export interface SteelParams {
  /** Tensión de fluencia Fy [kN/m²] */
  Fy: number;
  /** Módulo de elasticidad Es [kN/m²]. Default 200 GPa */
  Es?: number;
  /** Strain hardening ratio b = Et/E. Default 0.01 */
  b?: number;
}

export function steelStress(eps: number, p: SteelParams): number {
  const Fy = p.Fy;
  const Es = p.Es ?? 200_000_000;
  const b = p.b ?? 0.01;
  const ey = Fy / Es;   // yield strain
  if (Math.abs(eps) <= ey) return Es * eps;
  const sign = eps >= 0 ? 1 : -1;
  const eplus = sign * (eps - sign * ey);
  return sign * Fy + b * Es * eplus * sign;
}

// ── Fiber geometry ─────────────────────────────────────────────────

export interface Fiber {
  /** Coordenada y de la fibra (altura desde eje neutral reference) [m] */
  y: number;
  /** Coordenada x [m] */
  x: number;
  /** Área de la fibra [m²] */
  A: number;
  /** Tipo: "steel" o "concrete" */
  kind: "steel" | "concrete";
}

export interface CftFiberSection {
  shape: "circular" | "rectangular";
  /** Dimensión exterior (D para circ, B para rect) */
  D: number;
  /** Altura rect (si rect); para circ = D */
  H: number;
  /** Espesor tubo */
  t: number;
  fibers: Fiber[];
  /** Parámetros material concreto confinado */
  mander: ManderResult;
  /** Parámetros material acero */
  steel: SteelParams;
}

/**
 * Discretiza una sección CFT circular en fibras.
 *   nTheta = divisiones angulares (mín 16, recomendado 32)
 *   nRadial = divisiones radiales del concreto (mín 4, recomendado 8)
 * El tubo de acero se discretiza como 1 anillo × nTheta sectors (~nTheta fibras).
 * El concreto se discretiza como (nRadial × nTheta) fibras radiales.
 */
export function discretizeCftCircular(
  D: number,
  t: number,
  fc_nom: number,
  Fy: number,
  nTheta: number = 32,
  nRadial: number = 8,
): CftFiberSection {
  const R = D / 2;
  const R_in = R - t;

  // Presión de confinamiento del tubo: f_l' = 2·Fy·t/D_in (Mander 1988 Eq. 3)
  // Para CFT: tubo presiona radialmente al concreto. Asumimos 100% efectivo (confinamiento pleno).
  const fl_prime = 2 * Fy * t / (D - 2 * t);
  const mander = manderConfinedConcrete({ fc: fc_nom, fl_prime });
  const steel: SteelParams = { Fy, Es: 200_000_000, b: 0.01 };

  const fibers: Fiber[] = [];

  // Tubo de acero: anillo discretizado en nTheta sectores
  const A_steel_per_fiber = (Math.PI * (R * R - R_in * R_in)) / nTheta;
  for (let k = 0; k < nTheta; k++) {
    const theta = (k + 0.5) * (2 * Math.PI / nTheta);
    const r_mid = (R + R_in) / 2;
    fibers.push({
      x: r_mid * Math.cos(theta),
      y: r_mid * Math.sin(theta),
      A: A_steel_per_fiber,
      kind: "steel",
    });
  }

  // Concreto: nRadial × nTheta fibras polares
  for (let j = 0; j < nRadial; j++) {
    const r_outer = R_in * (j + 1) / nRadial;
    const r_inner = R_in * j / nRadial;
    const A_ring = Math.PI * (r_outer * r_outer - r_inner * r_inner);
    const A_per_fiber = A_ring / nTheta;
    const r_mid = (r_outer + r_inner) / 2;
    for (let k = 0; k < nTheta; k++) {
      const theta = (k + 0.5) * (2 * Math.PI / nTheta);
      fibers.push({
        x: r_mid * Math.cos(theta),
        y: r_mid * Math.sin(theta),
        A: A_per_fiber,
        kind: "concrete",
      });
    }
  }

  return { shape: "circular", D, H: D, t, fibers, mander, steel };
}

/**
 * Discretiza CFT rectangular en grid cartesiano B×H.
 */
export function discretizeCftRectangular(
  B: number,
  H: number,
  t: number,
  fc_nom: number,
  Fy: number,
  nx: number = 16,
  ny: number = 16,
): CftFiberSection {
  const B_in = B - 2 * t;
  const H_in = H - 2 * t;

  // Confinamiento efectivo para rectángulos es MENOR (no uniforme). Usamos
  // una reducción conservadora ke ≈ 0.6 para HSS rectangular (Schneider 1998).
  const fl_prime = 0.6 * 2 * Fy * t / Math.min(B_in, H_in);
  const mander = manderConfinedConcrete({ fc: fc_nom, fl_prime });
  const steel: SteelParams = { Fy, Es: 200_000_000, b: 0.01 };

  const fibers: Fiber[] = [];
  const dx = B / nx, dy = H / ny;

  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      const x = -B / 2 + (i + 0.5) * dx;
      const y = -H / 2 + (j + 0.5) * dy;
      // ¿Es acero (en el borde dentro del espesor t)?
      const insideX = x > -B / 2 + t && x < B / 2 - t;
      const insideY = y > -H / 2 + t && y < H / 2 - t;
      const isConcrete = insideX && insideY;
      fibers.push({
        x, y, A: dx * dy,
        kind: isConcrete ? "concrete" : "steel",
      });
    }
  }
  return { shape: "rectangular", D: B, H, t, fibers, mander, steel };
}

// ── Section analysis: dado ε_a y κ calcular P, M ───────────────────

/**
 * Para una sección con strain axial ε_a (en centroide) y curvatura κ:
 *   strain en fibra i: ε_i = ε_a - κ · y_i
 *   σ_i = material(ε_i)
 *   ΣFx = P = Σ σ_i · A_i
 *   Mx = Σ σ_i · A_i · y_i
 *
 * Convención: P positivo = compresión (consistente con AISC CFT).
 */
export function sectionForces(
  sec: CftFiberSection,
  eps_a: number,
  kappa: number,
): { P: number; M: number } {
  let P = 0, M = 0;
  for (const f of sec.fibers) {
    const eps = eps_a - kappa * f.y;
    let sigma = 0;
    if (f.kind === "steel") sigma = steelStress(eps, sec.steel);
    else                    sigma = manderStress(eps, sec.mander);
    // Nota: Mander retorna σ positivo en compresión. Steel retorna positivo en tensión.
    // Convertimos ambos a convención P(+)=compresión:
    //   σ_fiber (con convención P(+)=compresión) = -σ_steel + σ_concrete
    // Pero lo simplificamos: con ε_a positivo hacia compresión, el signo
    // sale correcto si tratamos compresión como strain positivo en ambos.
    // (Mander: strain(+)=compresión ✓; Steel: aquí usamos σ=Es·ε, por lo que
    // ε(+) en acero también da σ(+) en tracción — hay que invertir signo).
    if (f.kind === "steel") sigma = -sigma;   // acero: compresión negativa en esta convención
    P += sigma * f.A;
    M += sigma * f.A * f.y;
  }
  return { P, M };
}

/**
 * Encuentra la carga axial P que produce moment-curvature response para una
 * curvatura dada κ, iterando sobre ε_a hasta P_target. Newton-Raphson simple.
 */
export function momentForAxial(
  sec: CftFiberSection,
  P_target: number,
  kappa: number,
): { M: number; eps_a: number; P_actual: number } {
  let eps_a = P_target / 1e8;   // initial guess
  const dEps = 1e-6;
  for (let iter = 0; iter < 50; iter++) {
    const { P } = sectionForces(sec, eps_a, kappa);
    const { P: P2 } = sectionForces(sec, eps_a + dEps, kappa);
    const dP_dEps = (P2 - P) / dEps;
    if (Math.abs(dP_dEps) < 1e-3) break;
    const resid = P - P_target;
    if (Math.abs(resid) < Math.abs(P_target) * 1e-4) break;
    eps_a -= resid / dP_dEps;
  }
  const final = sectionForces(sec, eps_a, kappa);
  return { M: final.M, eps_a, P_actual: final.P };
}

/**
 * Diagrama de interacción P-M: para N_P valores de P desde Pno hasta Pnt,
 * encuentra Mmax iterando sobre κ.
 *
 * Retorna puntos ordenados {P, M} para plotear envelope del diagrama.
 */
export function pmInteractionFiber(
  sec: CftFiberSection,
  Pno: number,
  Pnt: number,
  nPoints: number = 20,
  nKappa: number = 50,
): Array<{ P: number; M: number }> {
  const points: Array<{ P: number; M: number }> = [];
  for (let i = 0; i <= nPoints; i++) {
    const alpha = i / nPoints;
    const P_target = Pno * (1 - alpha) + (-Pnt) * alpha;   // desde Pno compresión a -Pnt tracción
    let M_max = 0;
    const kappa_max = 0.10;   // curvatura máxima a explorar (rad/m)
    for (let j = 1; j <= nKappa; j++) {
      const kappa = j / nKappa * kappa_max;
      const { M } = momentForAxial(sec, P_target, kappa);
      if (Math.abs(M) > Math.abs(M_max)) M_max = M;
    }
    points.push({ P: P_target, M: Math.abs(M_max) });
  }
  return points;
}
