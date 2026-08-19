/**
 * Benchmark Hekatan Bimetalico vs SAP2000 Shell-Layered (Python OAPI).
 * Mismos params: L=4m, t=0.30m (capa1=0.15 E=30e6, capa2=0.15 E=15e6),
 *                nu=0.30, q=10kN/m², mesh 10x10.
 */
import { layeredQ4Solve } from "../hekatan-fem/src/index.ts";
import { readFileSync } from "fs";

const L = 4.0, t_total = 0.30, q = 10, NDiv = 10;

const out = layeredQ4Solve({
  layers: [
    { E: 30e6, nu: 0.30, thickness: t_total / 2, angle: 0, density: 2.4 },
    { E: 15e6, nu: 0.30, thickness: t_total / 2, angle: 0, density: 2.4 },
  ],
  meshLx: L, meshLy: L, meshNx: NDiv, meshNy: NDiv,
  bcType: "simply-supported",
  pressure: -q,
});

let maxU = 0, maxV = 0, maxW = 0;
for (const d of out.displacements) {
  if (Math.abs(d.u) > Math.abs(maxU)) maxU = d.u;
  if (Math.abs(d.v) > Math.abs(maxV)) maxV = d.v;
  if (Math.abs(d.w) > Math.abs(maxW)) maxW = d.w;
}
let maxNxx = 0;
for (const r of out.elementResults) {
  if (Math.abs(r.Nxx) > Math.abs(maxNxx)) maxNxx = r.Nxx;
}

const sap = JSON.parse(readFileSync("./sap2000_bimetal_python.json", "utf8"));

console.log("="
  .repeat(78));
console.log(" Bimetálico [E1=30e6 / E2=15e6 kPa, t=0.30m, 4×4m SS, q=10] — Hekatan vs SAP");
console.log("=".repeat(78));
console.log(`ABBD Hekatan: A11=${out.abbd.A[0][0].toExponential(3)}  B11=${out.abbd.B[0][0].toExponential(3)}  D11=${out.abbd.D[0][0].toExponential(3)}`);
console.log("");
const hek = {
  w_mm: Math.abs(maxW) * 1000,
  u_mm: Math.abs(maxU) * 1000,
  v_mm: Math.abs(maxV) * 1000,
  M_max: Math.max(Math.abs(out.maxMxx), Math.abs(out.maxMyy)),
  N_max: Math.abs(maxNxx),
};
const sapR = {
  w_mm: Math.abs(sap.sap2000.w_max_m) * 1000,
  u_mm: Math.abs(sap.sap2000.u_max_m) * 1000,
  v_mm: Math.abs(sap.sap2000.v_max_m) * 1000,
  M_max: Math.max(Math.abs(sap.sap2000.M11_max_kNm_m), Math.abs(sap.sap2000.M22_max_kNm_m)),
  N_max: Math.abs(sap.sap2000.N11_max_kN_m),
};
const diff = (h, s) => s !== 0 ? ((h - s) / s * 100).toFixed(2) + "%" : "—";
console.log("                     Hekatan        SAP2000        Diff");
console.log(`w_max  [mm]      ${hek.w_mm.toFixed(4).padStart(9)}      ${sapR.w_mm.toFixed(4).padStart(9)}      ${diff(hek.w_mm, sapR.w_mm).padStart(8)}`);
console.log(`u_membr [mm]     ${hek.u_mm.toFixed(5).padStart(9)}      ${sapR.u_mm.toFixed(5).padStart(9)}      ${diff(hek.u_mm, sapR.u_mm).padStart(8)}`);
console.log(`v_membr [mm]     ${hek.v_mm.toFixed(5).padStart(9)}      ${sapR.v_mm.toFixed(5).padStart(9)}      ${diff(hek.v_mm, sapR.v_mm).padStart(8)}`);
console.log(`M_max [kN·m/m]   ${hek.M_max.toFixed(4).padStart(9)}      ${sapR.M_max.toFixed(4).padStart(9)}      ${diff(hek.M_max, sapR.M_max).padStart(8)}`);
console.log(`N_max [kN/m]     ${hek.N_max.toExponential(3).padStart(9)}      ${sapR.N_max.toExponential(3).padStart(9)}`);
