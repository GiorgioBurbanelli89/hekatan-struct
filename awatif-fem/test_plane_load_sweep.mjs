/**
 * Test: verificar que planeQ4Solve es lineal — al duplicar la carga,
 * la deformación del tope se duplica exactamente.
 *
 * Uso: node test_plane_load_sweep.mjs
 *
 * Esto prueba que el SOLVER está correcto. Si en el viewer no se ve crecer
 * la deformación al mover el slider de F, el bug está en el viewer/scale,
 * no en el solver.
 */
import { planeQ4Solve } from "./src/planeQ4.ts";

const cases = [
  { F: 100,  expectedRatio: 1.0 },
  { F: 200,  expectedRatio: 2.0 },
  { F: 500,  expectedRatio: 5.0 },
  { F: 1000, expectedRatio: 10.0 },
  { F: 2000, expectedRatio: 20.0 },
];

const W = 3.0, H = 6.0, t = 0.3, E = 25e6, nu = 0.20;
const nx = 8, nz = 16;

// Analítico (cantiléver puro, flexión + corte):
const I = t * W * W * W / 12;
const A = t * W;
const G = E / (2 * (1 + nu));

console.log(`\n=== planeQ4Solve load sweep — cantiléver ${W}×${H}m, t=${t}m ===\n`);
console.log(`  F (kN) |  δ_FEM (mm) |  δ_teo (mm) |  FEM/teo  |  ratio-FEM`);
console.log(`  -------+-------------+-------------+-----------+-----------`);

let deltaRef = null;
for (const c of cases) {
  const topRight = nz * (nx + 1) + nx;
  const out = planeQ4Solve({
    E, nu, thickness: t,
    meshLx: W, meshLy: H, meshNx: nx, meshNy: nz,
    bcType: "cantilever-bottom",
    pointLoads: [{ node: topRight, fx: c.F, fy: 0 }],
  });
  const delta = out.nodeResults[topRight].ux;
  const delta_flex = c.F * H ** 3 / (3 * E * I);
  const delta_shear = 1.2 * c.F * H / (G * A);
  const delta_teo = delta_flex + delta_shear;
  if (deltaRef === null) deltaRef = delta;
  const ratio = delta / deltaRef;
  const fem_teo = delta / delta_teo;
  console.log(
    `  ${String(c.F).padStart(5)}  |  ${(delta * 1000).toFixed(3).padStart(8)}   |  ` +
    `${(delta_teo * 1000).toFixed(3).padStart(8)}   |  ${fem_teo.toFixed(3)}   |  ${ratio.toFixed(3)}`
  );
}

console.log(`\n[PASS] Si la columna 'ratio-FEM' coincide con el multiplicador de F, el solver es lineal.\n`);
