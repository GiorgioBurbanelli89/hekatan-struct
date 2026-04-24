/**
 * Solver incremental (pushover) — inspirado en el modo CBFEM de IDEA StatiCa.
 *
 * Aplica la carga en N pasos (λ = 1/N, 2/N, ..., 1.0) y para cada paso ejecuta
 * el solver pseudo-no-lineal por rigidez secante. Guarda la curva
 * (λ, δ_tracked) para graficar comportamiento P-δ hasta el estado final.
 *
 * A diferencia de IDEA StatiCa (que usa Newton-Raphson incremental con
 * tangent stiffness + arc-length de Riks), este solver usa el método secante
 * de rigidez, que:
 *   - Es monotono (no captura post-peak con softening negativo)
 *   - No requiere integrar en puntos de Gauss con historia εp
 *   - Es estable y converge siempre si la carga es suficientemente pequeña
 *
 * Es la primera etapa del "Hekatan StatiCa": permite ver cómo plastifica la
 * conexión a medida que se incrementa la carga, identificar el load factor
 * crítico donde empieza la fluencia, y estimar la capacidad última (cuando
 * el sistema se vuelve inestable y la curva se aplana).
 *
 * Sprint 2 (próximo): identificar el componente gobernante (soldadura /
 * patín / alma / pernos).
 * Sprint 3 (futuro): pernos y soldaduras como elementos con falla explícita.
 * Sprint 4 (largo plazo): Newton-Raphson con K_tangent + arc-length Riks.
 */
import { secantPlasticSolve } from "./secantPlasticity";

export interface IncrementalPushoverInput {
  nodes: any;
  elements: any;
  supports: Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>;
  /** Función que retorna los loads escalados al factor λ (0→1) */
  buildLoads: (lambda: number) => Map<number, [number, number, number, number, number, number]>;
  elementInputs: any;
  Fy: number;
  trackNode: number;
  trackDof: 0 | 1 | 2; // 0=X, 1=Y, 2=Z
  nSteps?: number;
  maxIterPerStep?: number;
  softeningFactor?: number;
}

export interface IncrementalPushoverOutput {
  lambdas: number[];
  displacements: number[];
  vonMisesMax: number[];
  elementsYielded: number[];
  firstYieldStep: number; // índice (0-based) del paso donde empezó la fluencia, -1 si no fluyó
  finalDeformOutputs: any;
  finalAnalyzeOutputs: any;
  ultimateLoadFactor: number; // λ final alcanzado (1.0 si todo convergió)
  elasticStiffness: number; // k = ΔF / Δδ del primer incremento
  converged: boolean[];
}

export function incrementalPushover(
  inp: IncrementalPushoverInput,
): IncrementalPushoverOutput {
  const nSteps = inp.nSteps ?? 10;
  const maxIter = inp.maxIterPerStep ?? 8;
  const sFactor = inp.softeningFactor ?? 0.90;

  const lambdas: number[] = [];
  const displacements: number[] = [];
  const vonMisesMax: number[] = [];
  const yielded: number[] = [];
  const converged: boolean[] = [];
  let firstYieldStep = -1;

  let lastDef: any = {};
  let lastAna: any = {};

  for (let step = 1; step <= nSteps; step++) {
    const lam = step / nSteps;
    const loadsScaled = inp.buildLoads(lam);
    const nodeInputs = { supports: inp.supports, loads: loadsScaled };

    const res = secantPlasticSolve({
      nodes: inp.nodes,
      elements: inp.elements,
      nodeInputs,
      elementInputs: inp.elementInputs,
      Fy: inp.Fy,
      maxIter,
      tol: 0.03,
      softeningFactor: sFactor,
    });

    // Desplazamiento del nodo tracked (magnitud del DOF indicado)
    const defMap: Map<number, number[]> | undefined = res.deformOutputs?.deformations;
    let delta = 0;
    if (defMap) {
      const arr = defMap.get(inp.trackNode);
      if (arr) delta = Math.abs(arr[inp.trackDof] ?? 0);
    }

    // σ_vm máximo
    let vmMax = 0;
    const vmMap: Map<number, number[]> | undefined = res.analyzeOutputs?.vonMises;
    if (vmMap) {
      for (const vmArr of vmMap.values()) {
        for (const v of vmArr) {
          const a = Math.abs(v);
          if (a > vmMax) vmMax = a;
        }
      }
    }

    lambdas.push(lam);
    displacements.push(delta);
    vonMisesMax.push(vmMax);
    yielded.push(res.elementsYielded);
    converged.push(res.converged);

    if (firstYieldStep < 0 && res.elementsYielded > 0) firstYieldStep = step - 1;

    lastDef = res.deformOutputs;
    lastAna = res.analyzeOutputs;
  }

  // Rigidez elástica inicial (secante del primer paso)
  const elasticStiffness =
    displacements[0] > 1e-12 ? lambdas[0] / displacements[0] : 0;

  return {
    lambdas,
    displacements,
    vonMisesMax,
    elementsYielded: yielded,
    firstYieldStep,
    finalDeformOutputs: lastDef,
    finalAnalyzeOutputs: lastAna,
    ultimateLoadFactor: lambdas[lambdas.length - 1] ?? 0,
    elasticStiffness,
    converged,
  };
}
