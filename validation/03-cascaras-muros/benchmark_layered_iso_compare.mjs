/**
 * Benchmark layered-shell Iso preset vs SAP2000 Plate-Thick.
 *
 * Mismos params que sap2000_iso_test.json:
 *   L = 4 m, t = 0.30 m, E = 30e6 kPa, nu = 0.30, q = 10 kPa, mesh 10x10
 *
 * El preset "Iso (1 capa)" del layered-shell debe dar resultados ~ identicos
 * a Plate-Thick (Mindlin) ya que es 1 capa isotropica con la misma teoria FSDT.
 */
import { layeredQ4Solve } from "../hekatan-fem/src/index.ts";
import { readFileSync } from "fs";

const L = 4.0, t = 0.30, E = 30e6, nu = 0.30, q = 10;
const NDiv = 10;

const out = layeredQ4Solve({
  layers: [{ E, nu, thickness: t, angle: 0, density: 2.4 }],
  meshLx: L, meshLy: L,
  meshNx: NDiv, meshNy: NDiv,
  bcType: "simply-supported",
  pressure: -q,
});

const w_mm = Math.abs(out.maxW) * 1000;
const M_max = Math.max(Math.abs(out.maxMxx), Math.abs(out.maxMyy));

// Analitica Timoshenko (simply supported uniform load)
const D = E * Math.pow(t, 3) / (12 * (1 - nu * nu));
const wAnalytic_mm = 0.00406 * q * Math.pow(L, 4) / D * 1000;
const mAnalytic = 0.0479 * q * Math.pow(L, 2);

// SAP2000 (extraido vía OAPI PowerShell)
const sap = JSON.parse(readFileSync("./sap2000_iso_test.json", "utf8").replace(/^﻿/, ""));
const sap_w_mm = Math.abs(sap.sap2000.w_max_m) * 1000;
const sap_M = sap.sap2000.M11_max_kNm_m;

console.log("============================================================");
console.log(" BENCHMARK Layered-Shell Iso vs SAP2000 Plate-Thick vs Timoshenko");
console.log("============================================================");
console.log(`Caso: L=${L}m, t=${t}m, E=${(E/1e6).toFixed(0)}e6 kPa, nu=${nu}, q=${q} kPa, mesh ${NDiv}x${NDiv}`);
console.log(`ABBD: A11=${out.abbd.A[0][0].toExponential(3)}  D11=${out.abbd.D[0][0].toExponential(3)}  B11=${out.abbd.B[0][0].toExponential(3)}`);
console.log("");
console.log("                       Hekatan      SAP2000      Analitica     Diff Hek-SAP");
const dW_HS = ((w_mm - sap_w_mm) / sap_w_mm * 100);
const dM_HS = ((M_max - sap_M) / sap_M * 100);
console.log(`w_max  [mm]            ${w_mm.toFixed(4).padStart(8)}     ${sap_w_mm.toFixed(4).padStart(8)}     ${wAnalytic_mm.toFixed(4).padStart(8)}     ${dW_HS.toFixed(2).padStart(7)}%`);
console.log(`M_max  [kN.m/m]        ${M_max.toFixed(4).padStart(8)}     ${sap_M.toFixed(4).padStart(8)}     ${mAnalytic.toFixed(4).padStart(8)}     ${dM_HS.toFixed(2).padStart(7)}%`);
console.log("");
const result = {
  case: { L_m: L, t_m: t, E_kPa: E, nu, q_kPa: q, mesh: `${NDiv}x${NDiv}` },
  hekatan_layered_iso: { w_max_mm: w_mm, M_max: M_max, ABBD_A11: out.abbd.A[0][0], ABBD_D11: out.abbd.D[0][0] },
  sap2000_plate_thick: { w_max_mm: sap_w_mm, M_max: sap_M },
  analytic_timoshenko: { w_max_mm: wAnalytic_mm, M_max: mAnalytic },
  diff_hekatan_vs_sap_pct: { w: dW_HS, M: dM_HS },
};
console.log(JSON.stringify(result, null, 2));
