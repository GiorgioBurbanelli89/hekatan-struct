/**
 * DIAFRAGMA RIGIDO (el "Rigid" de ETABS): ux, uy y rz de los nudos de una planta
 * atados a un maestro VIRTUAL en el centro; uz, rx, ry libres. "Flexible" es no
 * ponerlo. Hasta el 3-sep-2026 el maestro era un nudo real de esquina y el modal,
 * que solo mira la diagonal de M, perdia el acoplamiento ux-rz: un portico de 1
 * planta daba T_x 0.348 s con diafragma contra 0.189 s sin el. Y el estatico
 * (deform.cpp) no tenia diafragma ninguno.
 * Lo que vigila, en un portico de 1 planta (4 columnas 0.4x0.4, vigas, 3 m):
 *   1. modal: con diafragma los periodos de traslacion NO cambian (la planta ya
 *      se movia como un solido rigido) y el torsional existe.
 *   2. estatico: con 10 kN en una esquina, los 4 nudos de arriba tienen la
 *      misma ux (a menos de la rotacion), la deformada es la de un solido rigido
 *      en planta y las reacciones equilibran la carga.
 */
import { cargarFem } from "../lib/bundle.mjs";
import { modal } from "../lib/wasm.mjs";

export const nombre = "diafragma-rigido";
export const descripcion = "diafragma rigido en el modal (maestro en el centro de masa) y en el estatico (deform.cpp)";
const pct = (a, b) => Math.abs(a - b) / Math.abs(b) * 100;

function portico() {
  const nodes = [[0, 0, 0], [5, 0, 0], [5, 5, 0], [0, 5, 0], [0, 0, 3], [5, 0, 3], [5, 5, 3], [0, 5, 3]];
  const elements = [[0, 4], [1, 5], [2, 6], [3, 7], [4, 5], [5, 6], [6, 7], [7, 4]];
  const ei = { elasticities: new Map(), shearModuli: new Map(), areas: new Map(), momentsOfInertiaY: new Map(), momentsOfInertiaZ: new Map(), torsionalConstants: new Map(), densities: new Map(), poissonsRatios: new Map(), thicknesses: new Map() };
  elements.forEach((e, i) => { ei.elasticities.set(i, 25e6); ei.shearModuli.set(i, 25e6 / 2.4); ei.areas.set(i, 0.16); ei.momentsOfInertiaY.set(i, 0.4 ** 4 / 12); ei.momentsOfInertiaZ.set(i, 0.4 ** 4 / 12); ei.torsionalConstants.set(i, 3e-4); ei.densities.set(i, 2.45); ei.poissonsRatios.set(i, 0.2); });
  const supports = new Map(); for (const n of [0, 1, 2, 3]) supports.set(n, [true, true, true, true, true, true]);
  return { nodes, elements, ei, supports };
}

export async function correr() {
  const filas = [];
  const { deform } = await cargarFem();
  const { nodes, elements, ei, supports } = portico();
  // 1. modal
  const masses = new Map(); for (const n of [4, 5, 6, 7]) masses.set(n, 10);
  const T = async (dia) => {
    const ni = { supports, loads: new Map(), masses, ...(dia ? { diaphragms: new Map([[4, 1], [5, 1], [6, 1], [7, 1]]) } : {}) };
    const r = await modal(nodes, elements, ni, ei, 6, 1);
    return Array.from(r.frequencies || r.f || r).map(f => 1 / f);
  };
  const T0 = await T(false), T1 = await T(true);
  filas.push({ que: "modal: T1 (Ux) con diafragma = sin diafragma", medido: pct(T1[0], T0[0]), limite: 0.05, ok: pct(T1[0], T0[0]) <= 0.05, detalle: `${T1[0].toFixed(5)} vs ${T0[0].toFixed(5)} s (antes salia 0.348: el maestro de esquina)` });
  filas.push({ que: "modal: T2 (Uy) con diafragma = sin diafragma", medido: pct(T1[1], T0[1]), limite: 0.05, ok: pct(T1[1], T0[1]) <= 0.05, detalle: `${T1[1].toFixed(5)} vs ${T0[1].toFixed(5)} s` });
  filas.push({ que: "modal: el torsional (T3) sigue ahi con diafragma", crudo: true, medido: T1[2] ? T1[2].toFixed(5) : "no", limite: `~${T0[2].toFixed(5)}`, ok: !!T1[2] && pct(T1[2], T0[2]) < 1, detalle: "rz del maestro virtual con la inercia rotacional de la planta" });
  // 2. estatico
  const loads = new Map([[4, [10, 0, 0, 0, 0, 0]]]);
  const sinD = deform(nodes, elements, { supports, loads }, ei);
  const conD = deform(nodes, elements, { supports, loads, diaphragms: new Map([[4, 1], [5, 1], [6, 1], [7, 1]]) }, ei);
  const u = (r, n) => r.deformations.get(n);
  const ux = [4, 5, 6, 7].map(n => u(conD, n)[0]), rz = [4, 5, 6, 7].map(n => u(conD, n)[5]);
  // solido rigido en planta: ux_i = ux_c - (y_i - yc) rz ; los 4 rz iguales
  const rzMax = Math.max(...rz.map(Math.abs)), rzSpread = Math.max(...rz) - Math.min(...rz);
  filas.push({ que: "estatico con diafragma: los 4 rz de la planta son iguales", medido: rzMax > 0 ? rzSpread / rzMax * 100 : 0, limite: 1e-6, ok: rzSpread <= 1e-6 * Math.max(rzMax, 1e-30), detalle: `rz = ${rz.map(v => v.toExponential(3)).join(", ")}` });
  const cinem = Math.abs((ux[0] - ux[3]) - (-(0 - 5) * rz[0])) + Math.abs((ux[1] - ux[2]) - (-(0 - 5) * rz[0]));
  filas.push({ que: "estatico con diafragma: ux_i - ux_j = -(y_i - y_j) rz (cinematica rigida)", medido: cinem / Math.max(Math.abs(ux[0]), 1e-30) * 100, limite: 1e-6, ok: cinem <= 1e-6 * Math.abs(ux[0]), detalle: `ux = ${ux.map(v => v.toExponential(4)).join(", ")}` });
  let rx = 0; for (const [, r] of conD.reactions) rx += r[0];
  filas.push({ que: "estatico con diafragma: las reacciones equilibran los 10 kN", medido: Math.abs(rx + 10) / 10 * 100, limite: 1e-8, ok: Math.abs(rx + 10) <= 1e-9, detalle: `sum Rx = ${rx.toFixed(9)} kN` });
  const uxSin = [4, 5, 6, 7].map(n => u(sinD, n)[0]);
  filas.push({ que: "sin diafragma la esquina cargada se mueve MAS que la opuesta (losa flexible)", crudo: true, medido: `${uxSin[0].toExponential(3)} / ${uxSin[2].toExponential(3)}`, limite: "u_carga > u_opuesta", ok: Math.abs(uxSin[0]) > Math.abs(uxSin[2]), detalle: "con diafragma los cuatro van juntos" });
  return filas;
}
