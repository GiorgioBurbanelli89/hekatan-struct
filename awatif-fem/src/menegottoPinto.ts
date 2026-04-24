/**
 * ============================================================================
 *  menegottoPinto — Menegotto-Pinto uniaxial cyclic material (Steel02)
 * ============================================================================
 *
 *  Modelo constitutivo uniaxial para acero con comportamiento cíclico no
 *  lineal, ampliamente usado en OpenSees (Steel02) y en simulación sísmica.
 *
 *  Captura:
 *    - Transición suave elasto-plástica (Bauschinger effect)
 *    - Hardening isotrópico + cinemático
 *    - Pinching de histéresis en ciclos
 *    - Degradación progresiva de rigidez tangente
 *
 *  Ecuación de la curva (Menegotto-Pinto 1973):
 *
 *     σ*(ε*) = b·ε* + (1 - b)·ε* / (1 + ε*^R)^(1/R)
 *
 *  donde:
 *     ε* = (ε - εr) / (ε0 - εr)     strain normalizado respecto al punto de reversión
 *     σ* = (σ - σr) / (σ0 - σr)     stress normalizado
 *     b  = strain hardening ratio (0.01-0.03 típico)
 *     R  = parámetro de transición que varía con la deformación plástica:
 *          R = R0 - c·ξ / (a2 + ξ)
 *          ξ = max plastic strain desde última reversión
 *
 *  Parámetros típicos (OpenSees Steel02 defaults):
 *     b = 0.01, R0 = 15, c = 0.925, a2 = 0.15
 *
 *  Referencias:
 *    - Menegotto & Pinto, "Method of analysis for cyclically loaded RC plane
 *      frames...", IABSE Symp. Resistance and Ultimate Deformability (1973)
 *    - Filippou, Popov, Bertero, "Effects of bond deterioration on hysteretic
 *      behavior of RC joints", EERC Report 83/19 UC Berkeley (1983)
 *    - OpenSees Steel02 material model (Taucer, Spacone, Filippou 1991)
 *    - Bathe & Wilson, "Numerical methods in finite element analysis" (1976)
 * ============================================================================
 */

export interface MenegottoPintoParams {
  /** Tensión de fluencia Fy [kN/m²] */
  Fy: number;
  /** Módulo elástico E [kN/m²] */
  E: number;
  /** Strain hardening ratio b = Et/E. Default 0.01 */
  b?: number;
  /** Parámetros de transición Bauschinger */
  R0?: number;  // default 15
  cR1?: number; // default 0.925
  cR2?: number; // default 0.15
  /** Isotropic hardening (opcional, default 0 = solo cinemático puro) */
  a1?: number;  // default 0
  a2?: number;  // default 0
  a3?: number;  // default 0
  a4?: number;  // default 0
}

/**
 * Estado interno del material — se actualiza en cada step de simulación.
 *
 * Mantener un objeto MaterialState por fibra (o por integration point) para
 * rastrear el historial de cargas cíclicas.
 */
export interface MenegottoPintoState {
  /** Strain actual */
  eps: number;
  /** Stress actual */
  sigma: number;
  /** Tangent stiffness actual (dσ/dε) */
  E_tangent: number;
  /** Strain en el último punto de reversión */
  eps_r: number;
  /** Stress en el último punto de reversión */
  sigma_r: number;
  /** Strain asintótico virtual ε0 */
  eps_0: number;
  /** Stress asintótico virtual σ0 */
  sigma_0: number;
  /** Dirección de carga: 1 = tensión, -1 = compresión, 0 = inicial */
  direction: 1 | -1 | 0;
  /** Maximum plastic strain en cada dirección (para isotropic hardening) */
  eps_max_plus: number;
  eps_max_minus: number;
  /** Tensión límite actual (updated por isotropic hardening) */
  Fy_plus: number;
  Fy_minus: number;
}

export function initMpState(p: MenegottoPintoParams): MenegottoPintoState {
  const Fy = p.Fy;
  return {
    eps: 0,
    sigma: 0,
    E_tangent: p.E,
    eps_r: 0,
    sigma_r: 0,
    eps_0: 0,
    sigma_0: 0,
    direction: 0,
    eps_max_plus: Fy / p.E,
    eps_max_minus: -Fy / p.E,
    Fy_plus: Fy,
    Fy_minus: -Fy,
  };
}

/**
 * Calcula el siguiente estado (σ, Et) dado el nuevo strain ε_new y el estado
 * previo. Maneja automáticamente reversiones (cambio de dirección de carga).
 */
export function mpStep(
  eps_new: number,
  state: MenegottoPintoState,
  p: MenegottoPintoParams,
): MenegottoPintoState {
  const E = p.E;
  const b = p.b ?? 0.01;
  const R0 = p.R0 ?? 15;
  const cR1 = p.cR1 ?? 0.925;
  const cR2 = p.cR2 ?? 0.15;
  // isotropic hardening opcional
  const a1 = p.a1 ?? 0;
  const a2_iso = p.a2 ?? 0;
  const a3 = p.a3 ?? 0;
  const a4 = p.a4 ?? 0;

  const d_eps = eps_new - state.eps;
  let direction: 1 | -1 | 0 = state.direction;

  // ── Detectar reversión: cambio de signo en incremento de strain ─
  // Primera carga (direction=0) o cambio de dirección → actualizar eps_r, sigma_r
  const new_direction: 1 | -1 = d_eps >= 0 ? 1 : -1;
  if (state.direction === 0 || new_direction !== state.direction) {
    // Reversión: fijar el punto actual como nuevo origen
    direction = new_direction;
    state = {
      ...state,
      direction,
      eps_r: state.eps,
      sigma_r: state.sigma,
    };
    // Actualizar asíntotas ε0, σ0 según dirección y yield actual
    const Fy_target = direction === 1 ? state.Fy_plus : state.Fy_minus;
    state.eps_0 = Fy_target / E + state.eps_r;
    state.sigma_0 = Fy_target + b * E * (state.eps_0 - state.eps_r);
  }

  // ── Strain plástico acumulado ξ desde reversión ────────────────
  const xi = Math.abs(state.eps - state.eps_r) / (Math.abs(state.eps_0 - state.eps_r) + 1e-30);

  // ── R variable con plasticidad acumulada ───────────────────────
  const R = R0 - cR1 * xi / (cR2 + xi);

  // ── Ecuación Menegotto-Pinto (transición suave) ────────────────
  const eps_star = (eps_new - state.eps_r) / (state.eps_0 - state.eps_r + 1e-30);
  const denom = Math.pow(1 + Math.pow(Math.abs(eps_star), R), 1 / R);
  const sigma_star = b * eps_star + (1 - b) * eps_star / denom;
  const sigma_new = state.sigma_r + sigma_star * (state.sigma_0 - state.sigma_r);

  // ── Tangent: dσ/dε vía derivada analítica ──────────────────────
  // dσ*/dε* = b + (1-b) / (1+|ε*|^R)^(1+1/R)
  const E_tan_star = b + (1 - b) / Math.pow(1 + Math.pow(Math.abs(eps_star), R), 1 + 1 / R);
  const E_tangent = E_tan_star * (state.sigma_0 - state.sigma_r) / (state.eps_0 - state.eps_r + 1e-30);

  // ── Isotropic hardening (opcional, endurece Fy con ductility) ──
  const eps_p = eps_new - sigma_new / E;   // strain plástico
  let eps_max_plus = Math.max(state.eps_max_plus, eps_p);
  let eps_max_minus = Math.min(state.eps_max_minus, eps_p);
  let Fy_plus = state.Fy_plus;
  let Fy_minus = state.Fy_minus;
  if (a1 !== 0 && eps_max_plus > a2_iso) {
    Fy_plus = p.Fy * (1 + a1 * (eps_max_plus - a2_iso));
  }
  if (a3 !== 0 && eps_max_minus < -a4) {
    Fy_minus = -p.Fy * (1 + a3 * (-eps_max_minus - a4));
  }

  return {
    eps: eps_new,
    sigma: sigma_new,
    E_tangent: Math.max(E_tangent, 0.001 * E),   // evita Et=0
    eps_r: state.eps_r,
    sigma_r: state.sigma_r,
    eps_0: state.eps_0,
    sigma_0: state.sigma_0,
    direction,
    eps_max_plus,
    eps_max_minus,
    Fy_plus,
    Fy_minus,
  };
}

/**
 * Procesa una historia completa de strain (input del ensayo experimental) y
 * devuelve la historia de stress correspondiente.
 *
 * Útil para comparar con datos experimentales cíclicos donde se conoce la
 * historia de deformación impuesta.
 */
export function mpHistory(
  epsHistory: number[],
  p: MenegottoPintoParams,
): { eps: number[]; sigma: number[]; E_tangent: number[] } {
  let state = initMpState(p);
  const sigma: number[] = [];
  const E_tan: number[] = [];
  for (const eps of epsHistory) {
    state = mpStep(eps, state, p);
    sigma.push(state.sigma);
    E_tan.push(state.E_tangent);
  }
  return { eps: epsHistory, sigma, E_tangent: E_tan };
}

/**
 * Genera un protocolo de carga cíclica típico AISC 341 Appendix K para
 * pruebas de precalificación de conexiones (moment frames).
 *
 * storyHeight * drift = displacement. Drift levels según SAC/K3.
 */
export function aiscK3LoadingProtocol(
  storyHeight: number,
  finalDrift: number = 0.06,
): { step: number; drift: number; nCycles: number; displacement: number }[] {
  // AISC 341-22 Table K3.1 (loading history for beam-to-column tests)
  const levels = [
    { drift: 0.00375, nCycles: 6 },
    { drift: 0.005,   nCycles: 6 },
    { drift: 0.0075,  nCycles: 6 },
    { drift: 0.01,    nCycles: 4 },
    { drift: 0.015,   nCycles: 2 },
    { drift: 0.02,    nCycles: 2 },
    { drift: 0.03,    nCycles: 2 },
    { drift: 0.04,    nCycles: 2 },
    { drift: 0.05,    nCycles: 2 },
    { drift: 0.06,    nCycles: 2 },
  ];
  const result: { step: number; drift: number; nCycles: number; displacement: number }[] = [];
  let step = 0;
  for (const l of levels) {
    if (l.drift > finalDrift + 1e-9) break;
    step++;
    result.push({
      step,
      drift: l.drift,
      nCycles: l.nCycles,
      displacement: l.drift * storyHeight,
    });
  }
  return result;
}

/**
 * Genera la historia de strain completa (amplitud vs step) según protocolo
 * AISC K3, para ser alimentada a mpHistory.
 *
 * Cada nivel aplica nCycles ciclos senoidales completos (+δ → 0 → -δ → 0).
 * Resolución: 40 steps por ciclo para suavidad.
 */
export function aiscK3StrainHistory(
  storyHeight: number,
  stepsPerCycle: number = 40,
  finalDrift: number = 0.06,
): number[] {
  const protocol = aiscK3LoadingProtocol(storyHeight, finalDrift);
  const history: number[] = [0];
  for (const level of protocol) {
    for (let cyc = 0; cyc < level.nCycles; cyc++) {
      for (let s = 1; s <= stepsPerCycle; s++) {
        const t = (s / stepsPerCycle) * 2 * Math.PI;
        history.push(level.drift * Math.sin(t));
      }
    }
  }
  return history;
}
