#!/usr/bin/env node
/**
 * Mindlin-Reissner vs Kirchhoff — Benchmark Analítico
 * Placa rectangular simplemente apoyada, carga uniforme q
 *
 * Solución Navier exacta:
 *   Kirchhoff:  w_mn = q_mn / (D * α_mn²)
 *   Mindlin:    w_mn = q_mn / (D * α_mn²) + q_mn / (κ·G·t · α_mn)
 *   donde α_mn = (mπ/a)² + (nπ/b)², q_mn = 16q/(mnπ²) (m,n impares)
 *
 * Referencia: Reddy, J.N. "Theory and Analysis of Elastic Plates and Shells", 2007
 *             Timoshenko & Woinowsky-Krieger, "Theory of Plates and Shells", 1959
 */

const PI = Math.PI;

function navierSolution(a, b, t, q, E, nu, kappa, nTerms, x, y) {
  const D = E * t ** 3 / (12 * (1 - nu ** 2));
  const G = E / (2 * (1 + nu));

  let w_kirch = 0, w_mindlin = 0;
  let Mx_kirch = 0, My_kirch = 0;
  let Mx_mind = 0, My_mind = 0;

  for (let m = 1; m <= nTerms; m += 2) {
    for (let n = 1; n <= nTerms; n += 2) {
      const q_mn = 16 * q / (m * n * PI ** 2);
      const alpha = (m * PI / a) ** 2 + (n * PI / b) ** 2;
      const sm = Math.sin(m * PI * x / a);
      const sn = Math.sin(n * PI * y / b);

      // Kirchhoff
      const w_k = q_mn / (D * alpha ** 2);
      w_kirch += w_k * sm * sn;

      // Mindlin (añade cortante)
      const w_s = q_mn / (kappa * G * t * alpha);
      w_mindlin += (w_k + w_s) * sm * sn;

      // Momentos Kirchhoff (en el centro sin = 1)
      const d2x = (m * PI / a) ** 2 * w_k * sm * sn;
      const d2y = (n * PI / b) ** 2 * w_k * sm * sn;
      Mx_kirch += D * (d2x + nu * d2y);
      My_kirch += D * (d2y + nu * d2x);

      // Momentos Mindlin (mismos que Kirchhoff para FSDT — momentos no cambian)
      const d2x_m = (m * PI / a) ** 2 * (w_k) * sm * sn; // bending part only
      const d2y_m = (n * PI / b) ** 2 * (w_k) * sm * sn;
      Mx_mind += D * (d2x_m + nu * d2y_m);
      My_mind += D * (d2y_m + nu * d2x_m);
    }
  }

  return {
    w_kirchhoff: w_kirch, w_mindlin: w_mindlin,
    Mx_kirch, My_kirch, Mx_mind, My_mind,
    D, G, shear_ratio: w_mindlin / w_kirch
  };
}

// ═══════════════════════════════════════════════════════════════
// BENCHMARK 1: Calcpad example — placa delgada (t/b = 0.025)
// ═══════════════════════════════════════════════════════════════
console.log("=".repeat(72));
console.log("  BENCHMARK MINDLIN vs KIRCHHOFF — Solución Navier Exacta");
console.log("  Ref: Reddy (2007), Timoshenko & Woinowsky-Krieger (1959)");
console.log("=".repeat(72));

{
  console.log("\n" + "-".repeat(72));
  console.log("  CASO 1: Placa Delgada (Calcpad example)");
  console.log("  a=6m, b=4m, t=0.1m, q=10 kN/m², E=35000 MPa, ν=0.15");
  console.log("-".repeat(72));
  const a = 6, b = 4, t = 0.1, q = 10, E = 35e6, nu = 0.15, kappa = 5 / 6;
  const r = navierSolution(a, b, t, q, E, nu, kappa, 99, a / 2, b / 2);
  console.log(`  D = ${r.D.toFixed(2)} kN·m`);
  console.log(`  t/b = ${(t / b).toFixed(4)}  (placa DELGADA)`);
  console.log(`  w_Kirchhoff  = ${(r.w_kirchhoff * 1000).toFixed(4)} mm`);
  console.log(`  w_Mindlin    = ${(r.w_mindlin * 1000).toFixed(4)} mm`);
  console.log(`  Diferencia   = ${((r.shear_ratio - 1) * 100).toFixed(2)}%`);
  console.log(`  Mx_centro    = ${r.Mx_kirch.toFixed(4)} kNm/m`);
  console.log(`  My_centro    = ${r.My_kirch.toFixed(4)} kNm/m`);
}

// ═══════════════════════════════════════════════════════════════
// BENCHMARK 2: Placa gruesa (t/b = 0.1)
// ═══════════════════════════════════════════════════════════════
{
  console.log("\n" + "-".repeat(72));
  console.log("  CASO 2: Placa Moderadamente Gruesa");
  console.log("  a=4m, b=4m, t=0.4m, q=10 kN/m², E=30000 MPa, ν=0.2");
  console.log("-".repeat(72));
  const a = 4, b = 4, t = 0.4, q = 10, E = 30e6, nu = 0.2, kappa = 5 / 6;
  const r = navierSolution(a, b, t, q, E, nu, kappa, 99, a / 2, b / 2);
  console.log(`  D = ${r.D.toFixed(2)} kN·m`);
  console.log(`  t/b = ${(t / b).toFixed(4)}  (placa GRUESA)`);
  console.log(`  w_Kirchhoff  = ${(r.w_kirchhoff * 1000).toFixed(4)} mm`);
  console.log(`  w_Mindlin    = ${(r.w_mindlin * 1000).toFixed(4)} mm`);
  console.log(`  Diferencia   = ${((r.shear_ratio - 1) * 100).toFixed(2)}%`);
  console.log(`  Mx_centro    = ${r.Mx_kirch.toFixed(4)} kNm/m`);
  console.log(`  My_centro    = ${r.My_kirch.toFixed(4)} kNm/m`);
}

// ═══════════════════════════════════════════════════════════════
// BENCHMARK 3: Placa muy gruesa (t/b = 0.25)
// ═══════════════════════════════════════════════════════════════
{
  console.log("\n" + "-".repeat(72));
  console.log("  CASO 3: Placa Muy Gruesa");
  console.log("  a=4m, b=4m, t=1.0m, q=10 kN/m², E=30000 MPa, ν=0.2");
  console.log("-".repeat(72));
  const a = 4, b = 4, t = 1.0, q = 10, E = 30e6, nu = 0.2, kappa = 5 / 6;
  const r = navierSolution(a, b, t, q, E, nu, kappa, 99, a / 2, b / 2);
  console.log(`  D = ${r.D.toFixed(2)} kN·m`);
  console.log(`  t/b = ${(t / b).toFixed(4)}  (placa MUY GRUESA)`);
  console.log(`  w_Kirchhoff  = ${(r.w_kirchhoff * 1000).toFixed(4)} mm`);
  console.log(`  w_Mindlin    = ${(r.w_mindlin * 1000).toFixed(4)} mm`);
  console.log(`  Diferencia   = ${((r.shear_ratio - 1) * 100).toFixed(2)}%`);
  console.log(`  Mx_centro    = ${r.Mx_kirch.toFixed(4)} kNm/m`);
  console.log(`  My_centro    = ${r.My_kirch.toFixed(4)} kNm/m`);
}

// ═══════════════════════════════════════════════════════════════
// TABLA: Efecto del espesor t/b en la deflexión
// ═══════════════════════════════════════════════════════════════
{
  console.log("\n" + "=".repeat(72));
  console.log("  TABLA COMPARATIVA: Efecto de t/b en deflexión centro");
  console.log("  Placa cuadrada a=b=4m, q=10, E=30000MPa, ν=0.2, κ=5/6");
  console.log("=".repeat(72));
  console.log(`  ${"t/b".padStart(6)}  ${"t(m)".padStart(6)}  ${"w_K(mm)".padStart(10)}  ${"w_M(mm)".padStart(10)}  ${"Δ%".padStart(8)}  ${"Nota".padStart(15)}`);
  console.log("  " + "-".repeat(62));

  const ratios = [0.01, 0.025, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3];
  for (const ratio of ratios) {
    const a = 4, b = 4, t = ratio * b, q = 10, E = 30e6, nu = 0.2, kappa = 5 / 6;
    const r = navierSolution(a, b, t, q, E, nu, kappa, 99, a / 2, b / 2);
    const nota = ratio <= 0.05 ? "delgada" : ratio <= 0.1 ? "moderada" : "gruesa";
    console.log(`  ${ratio.toFixed(3).padStart(6)}  ${t.toFixed(2).padStart(6)}  ${(r.w_kirchhoff * 1000).toFixed(4).padStart(10)}  ${(r.w_mindlin * 1000).toFixed(4).padStart(10)}  ${((r.shear_ratio - 1) * 100).toFixed(2).padStart(7)}%  ${nota.padStart(15)}`);
  }
}

// ═══════════════════════════════════════════════════════════════
// MathCad comparison (Placas Gruesas class)
// ═══════════════════════════════════════════════════════════════
{
  console.log("\n" + "=".repeat(72));
  console.log("  CASO MathCad: Clase Placas Gruesas");
  console.log("  Parámetros extraídos del worksheet");
  console.log("=".repeat(72));
  // From MathCad XML: E=2e7, ν=0.3, element 1×1 (a=b=1), t=0.02
  const a = 1, b = 1, t = 0.02, q = 1, E = 2e7, nu = 0.3, kappa = 5 / 6;
  const r = navierSolution(a, b, t, q, E, nu, kappa, 99, a / 2, b / 2);
  console.log(`  E = ${E.toExponential(2)}, ν = ${nu}, κ = ${kappa.toFixed(4)}`);
  console.log(`  a = ${a}m, b = ${b}m, t = ${t}m`);
  console.log(`  t/b = ${(t / b).toFixed(4)}`);
  console.log(`  D = ${r.D.toFixed(6)}`);
  console.log(`  w_Kirchhoff  = ${r.w_kirchhoff.toExponential(6)}`);
  console.log(`  w_Mindlin    = ${r.w_mindlin.toExponential(6)}`);
  console.log(`  Diferencia   = ${((r.shear_ratio - 1) * 100).toFixed(4)}%`);
}
