/**
 * Losa de Cimentación 6×8×0.50m, 6 columnas grilla 2×3 (BENCHMARK SAFE).
 *
 * Caso 2 del framework Hekatan vs SAFE 20 (paridad <0.33%).
 * Ver benchmarks/safe/losa-cimentacion/ para detalles del benchmark
 * SAFE API (cli_losa.mjs + safe_api_losa.py).
 *
 * Usa plateQ4Solve (Mindlin Q4 + Winkler springs) — mismo solver que
 * validó <0.33% vs SAFE 20.
 */
import { plateQ4Solve } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const TONF_TO_KN = 9.80665;

export const safeBenchLosa: ExampleDef = {
  id: "safe-bench-losa-cimentacion",
  name: "SAFE Benchmark · Losa Cimentación 6×8×0.50m, 6 cols (Δ +0.33%)",
  category: "Cimentaciones",
  benchmark: true,
  defaultShellResult: "displacementZ",
  availableShellResults: ["displacementZ", "bendingXX", "bendingYY", "vonMises"],
  hasModal: false,
  guide: [
    "Caso 2 del framework Hekatan vs SAFE 20 (paridad <0.33% en w_max)",
    "Losa rectangular 6×8m × 0.50m espesor sobre Winkler arena media (ks=2000 tonf/m³)",
    "6 columnas en grilla 2×3 (luz 3m×4m), P=20 tonf c/u (P_total=120 tonf)",
    "Resultado SAFE referencia: w_max col centrales = -1.587 mm (Hekatan -1.582)",
    "El colormap muestra Uz (desplazamiento vertical), max en bajo cols 3,4 (centrales)",
  ],
  params: {
    Lz: { default: 6.0, min: 3, max: 15, step: 0.5, label: "Lz (m, eje x)" },
    Bz: { default: 8.0, min: 3, max: 20, step: 0.5, label: "Bz (m, eje y)" },
    tz: { default: 0.50, min: 0.2, max: 1.5, step: 0.05, label: "t (m, espesor)" },
    ks_tonfm3: { default: 2000, min: 500, max: 10000, step: 100, label: "ks (tonf/m³)" },
    P_tonf: { default: 20, min: 1, max: 100, step: 1, label: "P por col (tonf)" },
    nx: { default: 12, min: 6, max: 24, step: 2, label: "nx mesh" },
    ny: { default: 16, min: 6, max: 32, step: 2, label: "ny mesh" },
  },
  build(p, states) {
    const Lz = p.Lz, Bz = p.Bz, tz = p.tz;
    const ks = p.ks_tonfm3 * TONF_TO_KN;        // kN/m³
    const P_kN = p.P_tonf * TONF_TO_KN;
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nxn = nx + 1, nyn = ny + 1;
    const dx = Lz / nx, dy = Bz / ny;

    // 6 columnas grilla 2×3 — posiciones fijas (Lz/4, 3Lz/4) × (Bz/4, Bz/2, 3Bz/4)
    const colXs = [Lz / 4, 3 * Lz / 4];
    const colYs = [Bz / 4, Bz / 2, 3 * Bz / 4];
    const colPositions: Array<[number, number]> = [];
    for (const cx of colXs) for (const cy of colYs) colPositions.push([cx, cy]);

    // Mesh nodes 2D
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

    // Springs Winkler en cada nodo
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

    // Cargas en nodos más cercanos a cada columna
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

    const E_kNm2 = 24855e3;   // 4000 psi concreto
    const nu = 0.20;

    const result = plateQ4Solve({
      E: E_kNm2, nu, thickness: tz, theoryType: 0,
      bcType: "none", nodes, elements,
      bcs: [], pointLoads, springs,
    });

    // Convertir nodes 2D → 3D + populate states para el viewer
    const N3D: [number, number, number][] = nodes.map(n => [n[0], n[1], 0]);
    states.nodes.val = N3D;
    states.elements.val = elements as unknown as number[][];
    states.nodeInputs.val = { supports: new Map(), loads: new Map() };
    states.elementInputs.val = {
      elasticities: new Map(elements.map((_, i) => [i, E_kNm2])),
      poissonsRatios: new Map(elements.map((_, i) => [i, nu])),
      thicknesses: new Map(elements.map((_, i) => [i, tz])),
    };
    // Deformaciones: deformations = Map<nodeIdx, [ux, uy, uz, rx, ry, rz]>
    const deformations = new Map<number, [number, number, number, number, number, number]>();
    for (const r of result.nodeResults) {
      // plateQ4 retorna {w, bx, by} → expand a 6-DOF (uz=w, rx=bx, ry=by)
      deformations.set(r.node, [0, 0, r.w, r.bx, r.by, 0]);
    }
    states.deformOutputs.val = { deformations, reactions: new Map() };

    // Pressure map por elemento (q = ks·|w|) para el colormap
    const pressure = new Map<number, number[]>();
    const displacementZ = new Map<number, number[]>();
    for (let e = 0; e < elements.length; ++e) {
      const wPerNode: number[] = [];
      const qPerNode: number[] = [];
      for (const n of elements[e]) {
        const r = result.nodeResults[n];
        wPerNode.push(r.w * 1000);    // mm
        qPerNode.push(ks * r.w);      // kN/m²
      }
      displacementZ.set(e, wPerNode);
      pressure.set(e, qPerNode);
    }
    states.analyzeOutputs.val = {
      displacementZ, pressure,
    } as any;
  },
};
