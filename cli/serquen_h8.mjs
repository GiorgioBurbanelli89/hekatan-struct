#!/usr/bin/env node
/**
 * Serquen, "El SAP2000 aplicado al suelo": bloque 20x20x10 m de solidos H8,
 * E = 2000 tonf/m2, nu = 0.42, base fija, presion -10 tonf/m2 sobre 5x3 m
 * centrada arriba. Malla nx x ny x nz. Vuelca los nudos con Uz a un JSON para
 * carearlos con SAP2000 (galpon-bodega-electoral/sap_serquen_solido.py).
 *   node cli/serquen_h8.mjs 20 20 10 salida.json [base=xyz|z]
 */
import { writeFileSync } from "node:fs";
import { empaquetar, R } from "../tests/lib/bundle.mjs";
const [nx, ny, nz] = process.argv.slice(2, 5).map(Number); const salida = process.argv[5]; const base = process.argv[6] ?? "xyz";
const LX = 20, LY = 20, H = 10, E = 2000, nu = 0.42, Q = -10, AX = 5, AY = 3;
const mod = await empaquetar(`export { hex8Solve } from "${R}/examples/src/solid-cube-fem/h8";`, "serquen-h8");
const nodes = [], id = (i, j, k) => (k * (ny + 1) + j) * (nx + 1) + i;
for (let k = 0; k <= nz; k++) for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) nodes.push([-LX / 2 + LX * i / nx, -LY / 2 + LY * j / ny, H * k / nz]);
const elements = [];
for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++)
  elements.push([id(i, j, k), id(i + 1, j, k), id(i + 1, j + 1, k), id(i, j + 1, k), id(i, j, k + 1), id(i + 1, j, k + 1), id(i + 1, j + 1, k + 1), id(i, j + 1, k + 1)]);
const supports = new Map();
for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) supports.set(id(i, j, 0), base === "z" ? [false, false, true] : [true, true, true]);
// presion uniforme en la cara superior de los elementos cuyo centroide cae en 5x3: q*A/4 a cada nudo
const loads = new Map(); const dx = LX / nx, dy = LY / ny; let nCarg = 0, sumF = 0;
for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
  const cx = -LX / 2 + dx * (i + 0.5), cy = -LY / 2 + dy * (j + 0.5);
  if (Math.abs(cx) < AX / 2 && Math.abs(cy) < AY / 2) {
    nCarg++;
    for (const n of [id(i, j, nz), id(i + 1, j, nz), id(i + 1, j + 1, nz), id(i, j + 1, nz)]) {
      const f = loads.get(n) ?? [0, 0, 0]; f[2] += Q * dx * dy / 4; loads.set(n, f); sumF += Q * dx * dy / 4;
    }
  }
}
const t0 = Date.now();
const r = mod.hex8Solve({ nodes, elements, E, nu, supports, loads });
let uzMin = 0; const out = [];
for (let n = 0; n < nodes.length; n++) { const u = r.displacements.get(n) ?? [0, 0, 0]; if (u[2] < uzMin) uzMin = u[2]; out.push({ x: nodes[n][0], y: nodes[n][1], z: nodes[n][2], u }); }
writeFileSync(salida, JSON.stringify({ nx, ny, nz, base, nudos: out }));
console.log(`Hekatan H8 ${nx}x${ny}x${nz}: ${nodes.length} nudos, ${elements.length} elementos, ${nCarg} caras cargadas (ΣF ${sumF.toFixed(2)} tonf), Uz min ${uzMin.toExponential(6)} m, ${Date.now() - t0} ms`);
