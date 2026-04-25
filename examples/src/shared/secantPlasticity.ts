/**
 * Solver pseudo-no-lineal por método de la rigidez secante.
 *
 * Enfoque: en cada iteración se corre el solver lineal `deform()`; para los
 * elementos cuya tensión von Mises excede Fy se REDUCE su módulo de Young
 * efectivo:
 *         E_eff[elem] = E_0 · (Fy / σ_vm[elem])
 * Esto ablanda el elemento → las tensiones se redistribuyen hacia vecinos
 * menos cargados. Iterando hasta que no hayan cambios significativos, se
 * obtiene un campo σ_vm ≤ Fy en TODA la malla, que aproxima la solución de
 * plasticidad perfecta (J2) sin resolver return-mapping en cada punto de
 * Gauss.
 *
 * Referencias:
 *   - Zienkiewicz, Finite Element Method (1969) — "Initial Stiffness"
 *   - Kachanov (1986) — Continuum Damage Mechanics
 *   - Power method / Secant method (no confundir con "arc-length")
 *
 * Limitaciones respecto a un solver no-lineal RIGUROSO:
 *   - No captura el camino de carga (solo la solución final)
 *   - No incluye non-linear geometric effects (grandes deform.)
 *   - No distingue punto de Gauss dentro del elemento (promedia)
 *   - No incluye hardening (se asume plasticidad perfecta σ = Fy)
 *
 * Pero SÍ muestra la REDISTRIBUCIÓN de tensiones post-yield, que es el efecto
 * más importante que un solver lineal ocultaría. Para estudios detallados el
 * paso siguiente es Newton-Raphson con return-mapping J2 (módulo futuro).
 */
import { deform, analyze, type Node, type Element } from "hekatan-fem";

export interface SecantPlasticityInput {
  nodes: Node[];
  elements: Element[];
  nodeInputs: any;
  elementInputs: any; // debe incluir `elasticities` Map
  Fy: number; // límite elástico [kN/m²]
  maxIter?: number; // default 12
  tol?: number; // tolerancia relativa en ΔE, default 0.03
  softeningFactor?: number; // 0 < f ≤ 1, cuánto reducir (default 0.90 conservador)
}

export interface SecantPlasticityOutput {
  deformOutputs: any;
  analyzeOutputs: any;
  iterations: number;
  converged: boolean;
  elementsYielded: number;
  maxRatio: number; // σ_vm_max inicial / Fy (antes de redistribución)
}

export function secantPlasticSolve(inp: SecantPlasticityInput): SecantPlasticityOutput {
  const { nodes, elements, nodeInputs, elementInputs, Fy } = inp;
  const maxIter = inp.maxIter ?? 12;
  const tol = inp.tol ?? 0.03;
  const sFactor = inp.softeningFactor ?? 0.90;

  // E_eff inicial = E original de cada elemento
  const E0 = new Map<number, number>();
  const E_eff = new Map<number, number>();
  const elasticities_base: Map<number, number> = elementInputs.elasticities;
  for (let i = 0; i < elements.length; i++) {
    const e = elasticities_base.get(i) ?? 200_000_000;
    E0.set(i, e);
    E_eff.set(i, e);
  }

  let dOut: any = {};
  let aOut: any = {};
  let iter = 0;
  let maxRatio = 1.0;
  let converged = false;
  let yielded = 0;

  for (iter = 0; iter < maxIter; iter++) {
    // Crear un elementInputs iter con E_eff
    const ei_iter = { ...elementInputs, elasticities: new Map(E_eff) };
    dOut = deform(nodes, elements, nodeInputs, ei_iter);
    aOut = analyze(nodes, elements, ei_iter, dOut);

    let changed = false;
    let localMaxRatio = 1.0;
    yielded = 0;
    const vmMap: Map<number, number[]> = aOut.vonMises ?? new Map();

    for (let i = 0; i < elements.length; i++) {
      const vmArr = vmMap.get(i);
      if (!vmArr || vmArr.length === 0) continue;
      // σ_vm máximo del elemento (peor caso)
      let vm_max = 0;
      for (const v of vmArr) if (Math.abs(v) > vm_max) vm_max = Math.abs(v);

      if (vm_max > Fy) {
        const ratio = vm_max / Fy;
        const E_cur = E_eff.get(i) ?? E0.get(i)!;
        const E0_i = E0.get(i)!;
        // Reducir E_eff pero no bajar de 1% de E0 (evita singularidades numéricas)
        const E_new = Math.max(E_cur * (Fy / vm_max) * sFactor, E0_i * 0.01);
        if (Math.abs(E_new - E_cur) / E_cur > tol) {
          E_eff.set(i, E_new);
          changed = true;
        }
        yielded++;
        if (iter === 0 && ratio > localMaxRatio) localMaxRatio = ratio;
      }
    }
    if (iter === 0) maxRatio = localMaxRatio;

    if (!changed) {
      converged = true;
      break;
    }
  }

  return {
    deformOutputs: dOut,
    analyzeOutputs: aOut,
    iterations: iter + 1,
    converged,
    elementsYielded: yielded,
    maxRatio,
  };
}
