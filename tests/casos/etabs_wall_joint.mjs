/**
 * LA UNION VIGA-MURO DE ETABS: `etabsjoint 1`.
 *
 * Medido el 2-sep-2026 en ETABS 22 por OAPI (galpon-bodega-electoral/
 * drilling_min*.py): en cada nudo de un MURO donde entra una barra, y por cada
 * elemento de muro que lo contiene, ETABS suma c*(w_h - w_n - theta*(x_h - x_n))^2
 * con h el vecino por la arista horizontal y c = E*t*(H/L)^3/32. Sin barra, y en
 * las losas horizontales, no hay nada. SAP2000 no lo hace nunca.
 *
 * Arbitros, misma malla (92 nudos, 2 muros 2x4 + viga de acople 0.25x0.8):
 *   SAP2000 24  Ux = 5.802662e-04  (= Hekatan sin la ley, 2.5e-12 %)
 *   ETABS 22    Ux = 5.359904e-04  (= Hekatan con la ley, 2e-6 % en los 92 nudos)
 */
import { readFileSync, writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { resolverHeks } from "../lib/heks.mjs";

const AQUI = dirname(fileURLToPath(import.meta.url));
export const nombre = "etabs-wall-joint";
export const descripcion = "la union viga-muro de ETABS (`etabsjoint 1`): sin ley = SAP2000, con ley = ETABS";

const SAP_UX = 5.802662e-4, ETABS_UX = 5.359904e-4;

export async function correr() {
  const base = readFileSync(join(AQUI, "..", "datos", "drilling_dof_muros.heks"), "utf-8");
  const dir = mkdtempSync(join(tmpdir(), "hkJoint-"));
  const ux = async (texto, nombreF) => {
    const f = join(dir, nombreF); writeFileSync(f, texto, "utf-8");
    const r = await resolverHeks(f); let m = 0;
    r.deformOutputs.deformations.forEach((u) => { if (Math.abs(u[0]) > Math.abs(m)) m = u[0]; });
    return m;
  };
  // desde el 3-sep-2026 la union va ENCENDIDA por defecto (decision de Jorge): el modo SAP2000 se pide con `etabsjoint 0`
  const sin = await ux("etabsjoint 0\n" + base, "sin.heks");
  const con = await ux("etabsjoint 1\n" + base, "con.heks");
  const eS = Math.abs(sin / SAP_UX - 1) * 100, eE = Math.abs(con / ETABS_UX - 1) * 100;
  return [
    { que: "con `etabsjoint 0` (modo SAP2000): Ux de la punta = SAP2000", medido: eS, limite: 1e-5, ok: eS <= 1e-5,
      detalle: `${sin.toExponential(6)} vs ${SAP_UX.toExponential(6)} m` },
    { que: "con `etabsjoint 1`: Ux de la punta = ETABS 22", medido: eE, limite: 1e-5, ok: eE <= 1e-5,
      detalle: `${con.toExponential(6)} vs ${ETABS_UX.toExponential(6)} m — WASM y Python (test_etabs_wall_joint.py) iguales` },
  ];
}
