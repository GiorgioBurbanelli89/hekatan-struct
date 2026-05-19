/**
 * Viga de Cimentación 8×1×0.50m, 4 columnas alineadas (BENCHMARK SAFE).
 *
 * Caso 5 del framework Hekatan vs SAFE 20 (paridad <0.01% — mejor del set).
 * Ver benchmarks/safe/viga-cimentacion/ para detalles.
 */
import { plateQ4Solve } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const TONF_TO_KN = 9.80665;

export const safeBenchViga: ExampleDef = {
  id: "safe-bench-viga-cimentacion",
  name: "SAFE Benchmark · Viga Cimentación 8×1×0.50m, 4 cols (Δ +0.01%)",
  category: "Cimentaciones",
  benchmark: true,
  defaultShellResult: "bendingXX",
  availableShellResults: ["bendingXX", "bendingYY", "bendingXY", "vonMises", "displacementZ"],
  hasModal: false,
  guide: [
    "Caso 5 del framework Hekatan vs SAFE — PARIDAD CASI PERFECTA <0.01%",
    "Viga corrida 8×1m × 0.50m espesor, 4 columnas alineadas en eje x",
    "Cargas: 4 cols × 20 tonf en (1, 0.5), (3, 0.5), (5, 0.5), (7, 0.5)",
    "Resultado: w_max bajo col interiores -5.11 mm (Hekatan = SAFE)",
    "Comportamiento cuasi-rígido: ratio w_max/w_teorico ≈ 1.02",
  ],
  params: {
    Lz: { default: 8.0, min: 4, max: 20, step: 0.5, label: "Lz longitudinal (m)" },
    Bz: { default: 1.0, min: 0.5, max: 3, step: 0.25, label: "Bz ancho (m)" },
    tz: { default: 0.50, min: 0.2, max: 1.5, step: 0.05, label: "t espesor (m)" },
    ks_tonfm3: { default: 2000, min: 500, max: 10000, step: 100, label: "ks (tonf/m³)" },
    P_tonf: { default: 20, min: 1, max: 100, step: 1, label: "P por col (tonf)" },
    nCols: { default: 4, min: 2, max: 8, step: 1, label: "N columnas" },
    nx: { default: 32, min: 8, max: 64, step: 4, label: "nx mesh (longitudinal)" },
    ny: { default: 4, min: 2, max: 10, step: 1, label: "ny mesh (transversal)" },
  },
  build(p, states) {
    const Lz = p.Lz, Bz = p.Bz, tz = p.tz;
    const ks = p.ks_tonfm3 * TONF_TO_KN;
    const P_kN = p.P_tonf * TONF_TO_KN;
    const nCols = Math.round(p.nCols);
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nxn = nx + 1, nyn = ny + 1;
    const dx = Lz / nx, dy = Bz / ny;

    // Columnas equiespaciadas alineadas en línea media (y=Bz/2)
    const colPositions: Array<[number, number]> = [];
    for (let k = 1; k <= nCols; ++k) {
      const cx = (k * Lz) / (nCols + 1);
      colPositions.push([cx, Bz / 2]);
    }

    const nodes: [number, number][] = [];
    for (let j = 0; j < nyn; ++j)
      for (let i = 0; i < nxn; ++i)
        nodes.push([i * dx, j * dy]);
    const elements: [number, number, number, number][] = [];
    for (let j = 0; j < ny; ++j)
      for (let i = 0; i < nx; ++i) {
        const n0 = j * nxn + i;
        elements.push([n0, n0 + 1, n0 + nxn + 1, n0 + nxn]);
      }

    const springs: Array<{ node: number; dof: number; k: number }> = [];
    for (let j = 0; j < nyn; ++j)
      for (let i = 0; i < nxn; ++i) {
        const onEdgeI = (i === 0 || i === nxn - 1);
        const onEdgeJ = (j === 0 || j === nyn - 1);
        const factor = onEdgeI && onEdgeJ ? 0.25 : (onEdgeI || onEdgeJ ? 0.5 : 1.0);
        const A_trib = dx * dy * factor;
        const nodeIdx = j * nxn + i;
        springs.push({ node: nodeIdx, dof: 0, k: ks * A_trib });
        if (onEdgeI && onEdgeJ) {
          const k_theta = 1e-6 * ks * dx * dy;
          springs.push({ node: nodeIdx, dof: 1, k: k_theta });
          springs.push({ node: nodeIdx, dof: 2, k: k_theta });
        }
      }

    const findNode = (xT: number, yT: number) => {
      let best = -1, bestD = Infinity;
      for (let k = 0; k < nodes.length; ++k) {
        const dxN = nodes[k][0] - xT, dyN = nodes[k][1] - yT;
        const d = dxN * dxN + dyN * dyN;
        if (d < bestD) { bestD = d; best = k; }
      }
      return best;
    };
    const pointLoads = colPositions.map(([cx, cy]) => ({
      node: findNode(cx, cy),
      dof: 0,
      value: -P_kN,
    }));

    const E_kNm2 = 24855e3;
    const nu = 0.20;

    const result = plateQ4Solve({
      E: E_kNm2, nu, thickness: tz, theoryType: 0,
      bcType: "none", nodes, elements,
      bcs: [], pointLoads, springs,
    });

    const N3D: [number, number, number][] = nodes.map(n => [n[0], n[1], 0]);
    states.nodes.val = N3D;
    states.elements.val = elements as unknown as number[][];
    states.nodeInputs.val = { supports: new Map(), loads: new Map() };
    states.elementInputs.val = {
      elasticities: new Map(elements.map((_, i) => [i, E_kNm2])),
      poissonsRatios: new Map(elements.map((_, i) => [i, nu])),
      thicknesses: new Map(elements.map((_, i) => [i, tz])),
    };
    const deformations = new Map<number, [number, number, number, number, number, number]>();
    for (const r of result.nodeResults) {
      deformations.set(r.node, [0, 0, r.w, r.bx, r.by, 0]);
    }
    states.deformOutputs.val = { deformations, reactions: new Map() };

    const bendingXX = new Map<number, number[]>();
    const bendingYY = new Map<number, number[]>();
    const bendingXY = new Map<number, number[]>();
    const vonMises = new Map<number, number[]>();
    result.elementResults.forEach((er, i) => {
      bendingXX.set(i, [er.Mxx, er.Mxx, er.Mxx, er.Mxx]);
      bendingYY.set(i, [er.Myy, er.Myy, er.Myy, er.Myy]);
      bendingXY.set(i, [er.Mxy, er.Mxy, er.Mxy, er.Mxy]);
      const vm = Math.sqrt(er.Mxx**2 + er.Myy**2 - er.Mxx*er.Myy + 3*er.Mxy**2);
      vonMises.set(i, [vm, vm, vm, vm]);
    });
    states.analyzeOutputs.val = { bendingXX, bendingYY, bendingXY, vonMises };
    states.objects3D.val = [];
  },
};
