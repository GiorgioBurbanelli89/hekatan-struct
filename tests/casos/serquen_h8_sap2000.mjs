/**
 * SOLIDOS H8 contra SAP2000: el bloque de suelo de Serquen ("El SAP2000 aplicado
 * al suelo"): 20x20x10 m, E = 2000 tonf/m2, nu = 0.42, base fija, +10 tonf/m2
 * (compresion) sobre 5x3 m centrados arriba. Malla 20x20x10 (cubos de 1 m,
 * 4851 nudos) para que corra en segundos; la del libro (0.5 m, 35 301 nudos)
 * dio lo mismo: 2.5e-12 %.
 *
 * Arbitro: SAP2000 24 por OAPI (galpon-bodega-electoral/sap_serquen_solido.py),
 * solidos SIN modos incompatibles (el H8 de Hekatan es el clasico). Con los
 * modos incompatibles que SAP trae por defecto la flecha sale 0.83 % mayor.
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { empaquetar, R } from "../lib/bundle.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
export const nombre = "serquen-h8-sap2000";
export const descripcion = "solidos H8: bloque de suelo de Serquen contra SAP2000, nudo a nudo (4851 nudos)";

export async function correr() {
  const ref = join(AQUI, "..", "datos", "serquen_sap_20_noinc.json");
  if (!existsSync(ref)) return [{ que: "referencia SAP2000", crudo: true, medido: "falta", limite: "existe", ok: false, detalle: ref }];
  const S = JSON.parse(readFileSync(ref, "utf-8"));
  const mod = await empaquetar(`export { hex8Solve } from "${R}/examples/src/solid-cube-fem/h8";`, "serquen-h8");
  const nx = 20, ny = 20, nz = 10, LX = 20, LY = 20, H = 10, E = 2000, nu = 0.42, Q = -10, AX = 5, AY = 3;
  const nodes = [], id = (i, j, k) => (k * (ny + 1) + j) * (nx + 1) + i;
  for (let k = 0; k <= nz; k++) for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) nodes.push([-LX / 2 + LX * i / nx, -LY / 2 + LY * j / ny, H * k / nz]);
  const elements = [];
  for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++)
    elements.push([id(i, j, k), id(i + 1, j, k), id(i + 1, j + 1, k), id(i, j + 1, k), id(i, j, k + 1), id(i + 1, j, k + 1), id(i + 1, j + 1, k + 1), id(i, j + 1, k + 1)]);
  const supports = new Map(); for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) supports.set(id(i, j, 0), [true, true, true]);
  const loads = new Map(); const dx = LX / nx, dy = LY / ny;
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const cx = -LX / 2 + dx * (i + 0.5), cy = -LY / 2 + dy * (j + 0.5);
    if (Math.abs(cx) < AX / 2 && Math.abs(cy) < AY / 2)
      for (const n of [id(i, j, nz), id(i + 1, j, nz), id(i + 1, j + 1, nz), id(i, j + 1, nz)]) { const f = loads.get(n) ?? [0, 0, 0]; f[2] += Q * dx * dy / 4; loads.set(n, f); }
  }
  const r = mod.hex8Solve({ nodes, elements, E, nu, supports, loads });
  const k = (x, y, z) => `${x.toFixed(3)}|${y.toFixed(3)}|${z.toFixed(3)}`;
  const sap = new Map(S.nudos.map((n) => [k(n.x, n.y, n.z), n.u]));
  let mx = 0, peor = 0, uzMin = 0, uzSap = 0, comunes = 0;
  for (let n = 0; n < nodes.length; n++) { const u = r.displacements.get(n) ?? [0, 0, 0]; mx = Math.max(mx, Math.abs(u[2])); if (u[2] < uzMin) uzMin = u[2]; }
  for (const n of S.nudos) if (n.u[2] < uzSap) uzSap = n.u[2];
  for (let n = 0; n < nodes.length; n++) {
    const u = r.displacements.get(n) ?? [0, 0, 0]; const s = sap.get(k(nodes[n][0], nodes[n][1], nodes[n][2])); if (!s) continue; comunes++;
    for (let c = 0; c < 3; c++) peor = Math.max(peor, Math.abs(u[c] - s[c]) / mx * 100);
  }
  return [
    { que: "nudos emparejados por coordenadas", crudo: true, medido: String(comunes), limite: String(nodes.length), ok: comunes === nodes.length, detalle: "SAP2000 y Hekatan con la misma malla" },
    { que: "Uz, Ux, Uy nudo a nudo vs SAP2000 (sin modos incompatibles)", medido: peor, limite: 1e-6, ok: peor <= 1e-6,
      detalle: `Uz min ${(uzMin * 1000).toFixed(4)} vs ${(uzSap * 1000).toFixed(4)} mm; ${S.nudos.length} nudos de SAP` },
  ];
}
