/**
 * Test convergencia Plate-Thick: 8x8 vs 16x16 vs 32x32
 * Verifica si w, M11, M22, Q convergen a SAP2000 dentro del 5%
 */
import { plateQ4Solve } from "../hekatan-fem/src/index.ts";

const L = 4.0, t = 0.20, E = 21500000, nu = 0.20, q = 10;

const D = E * Math.pow(t, 3) / (12 * (1 - nu * nu));
const wAna = 0.00406 * q * Math.pow(L, 4) / D;
const mAna = 0.0479 * q * Math.pow(L, 2);
const qAna = 0.338 * q * L;  // Q max en borde (Timoshenko)

const SAP_THICK = { w_mm: 0.7237, M11: 7.4440, f1: 0 };
const SAP_THIN  = { w_mm: 0.6959, M11: 7.1441, f1: 34.211 };

console.log("============================================================");
console.log(" CONVERGENCIA Plate-Thick — Hekatan vs SAP2000");
console.log("============================================================");
console.log(`Caso: L=${L}m t=${t}m E=${E.toExponential(2)}kPa nu=${nu} q=${q}kPa`);
console.log("");
console.log("Analitica Timoshenko (Kirchhoff, valores limite L/t→∞):");
console.log(`  w_max = ${(wAna*1000).toFixed(4)} mm`);
console.log(`  M_max = ${mAna.toFixed(4)} kN.m/m`);
console.log(`  Q_max = ${qAna.toFixed(4)} kN/m  (al borde, β=0.338)`);
console.log("");
console.log(`SAP2000 Plate-Thick (Mindlin con shear def): w=${SAP_THICK.w_mm} mm  M=${SAP_THICK.M11} kN.m/m`);
console.log(`SAP2000 Plate-Thin  (Kirchhoff puro):        w=${SAP_THIN.w_mm} mm  M=${SAP_THIN.M11} kN.m/m`);
console.log("");

const meshes = [4, 8, 16, 32];

console.log("─── PLATE-THICK (Mindlin, theoryType=0) ───");
console.log("");
console.log("Malla       w[mm]      M11        M22        Qmax       w%vsAna   M%vsAna   M%vsSAP");
console.log("─".repeat(95));
for (const N of meshes) {
  const out = plateQ4Solve({
    E, nu, thickness: t,
    theoryType: 0,
    meshLx: L, meshLy: L, meshNx: N, meshNy: N,
    bcType: "simply-supported",
    pressure: -q,
  });
  const w = Math.abs(out.maxW) * 1000;
  const M11 = Math.abs(out.maxMxx);
  const M22 = Math.abs(out.maxMyy);
  const Q = Math.max(Math.abs(out.maxQx), Math.abs(out.maxQy));
  const dWA = ((w - wAna*1000) / (wAna*1000)) * 100;
  const dMA = ((M11 - mAna) / mAna) * 100;
  const dMS = ((M11 - SAP_THICK.M11) / SAP_THICK.M11) * 100;
  console.log(
    `${N}x${N}`.padEnd(10) +
    w.toFixed(4).padStart(8) + "   " +
    M11.toFixed(4).padStart(8) + "   " +
    M22.toFixed(4).padStart(8) + "   " +
    Q.toFixed(4).padStart(8) + "  " +
    `${dWA >= 0 ? "+" : ""}${dWA.toFixed(2)}%`.padStart(9) + " " +
    `${dMA >= 0 ? "+" : ""}${dMA.toFixed(2)}%`.padStart(9) + " " +
    `${dMS >= 0 ? "+" : ""}${dMS.toFixed(2)}%`.padStart(9) +
    (Math.abs(dMS) < 5 ? "  ✅" : "  ⚠")
  );
}

console.log("");
console.log("─── PLATE-THIN (Kirchhoff, theoryType=1) ───");
console.log("");
console.log("Malla       w[mm]      M11        M22        Qmax       w%vsAna   M%vsAna   M%vsSAP");
console.log("─".repeat(95));
for (const N of meshes) {
  const out = plateQ4Solve({
    E, nu, thickness: t,
    theoryType: 1,
    meshLx: L, meshLy: L, meshNx: N, meshNy: N,
    bcType: "simply-supported",
    pressure: -q,
  });
  const w = Math.abs(out.maxW) * 1000;
  const M11 = Math.abs(out.maxMxx);
  const M22 = Math.abs(out.maxMyy);
  const Q = Math.max(Math.abs(out.maxQx), Math.abs(out.maxQy));
  const dWA = ((w - wAna*1000) / (wAna*1000)) * 100;
  const dMA = ((M11 - mAna) / mAna) * 100;
  const dMS = ((M11 - SAP_THIN.M11) / SAP_THIN.M11) * 100;
  console.log(
    `${N}x${N}`.padEnd(10) +
    w.toFixed(4).padStart(8) + "   " +
    M11.toFixed(4).padStart(8) + "   " +
    M22.toFixed(4).padStart(8) + "   " +
    Q.toFixed(4).padStart(8) + "  " +
    `${dWA >= 0 ? "+" : ""}${dWA.toFixed(2)}%`.padStart(9) + " " +
    `${dMA >= 0 ? "+" : ""}${dMA.toFixed(2)}%`.padStart(9) + " " +
    `${dMS >= 0 ? "+" : ""}${dMS.toFixed(2)}%`.padStart(9) +
    (Math.abs(dMS) < 5 ? "  ✅" : "  ⚠")
  );
}

console.log("");
console.log("============================================================");
console.log(" CRITERIO: |Hekatan vs SAP2000| < 5%");
console.log("============================================================");
