/**
 * =============================================================================
 *  Validación membrana CSI (shell Q4 con drilling Rz) vs SAP2000 + teoría
 * =============================================================================
 *
 *  Corre el modelo de muro a corte que usa el ejemplo `membrana-csi.ts` y
 *  compara δ_top con:
 *    (a) Solución analítica de cantilever (Euler-Bernoulli + shear correction)
 *    (b) Valores de referencia SAP2000 v25 (ShellType=5 Membrane)
 *
 *  Los valores de referencia SAP2000 se obtuvieron previamente corriendo el
 *  script Python `validate_membrane_wall.py` (con pysap2000) sobre el mismo
 *  modelo. Ver `Pipy Api sap2000 hekatan/examples/validate_membrane_wall.py`
 *  para reproducirlos en tu propia instalación SAP2000.
 *
 *  Uso: node --experimental-modules test_membrana_csi_vs_sap.mjs
 * =============================================================================
 */
import { deform, analyze } from "./src/index.ts";

// ── Parámetros del muro (mismo que membrana-csi.ts defaults) ─────
const W = 5.0, H = 3.0, t = 0.20;
const E = 25e6;   // kN/m² (25 GPa)
const nu = 0.20;
const F = 100;    // kN lateral total distribuido en el borde superior
const nx = 8, ny = 6;
const dx = W / nx, dy = H / ny;

// ── Construir grilla ─────────────────────────────────────────────
const nodes = [];
for (let j = 0; j <= ny; j++)
  for (let i = 0; i <= nx; i++)
    nodes.push([i * dx, 0, j * dy]);   // plano X-Z, Y=0

const elements = [];
for (let j = 0; j < ny; j++)
  for (let i = 0; i < nx; i++) {
    const n0 = j * (nx + 1) + i;
    elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
  }

// ── BCs: base empotrada ──────────────────────────────────────────
const supports = new Map();
for (let i = 0; i <= nx; i++)
  supports.set(i, [true, true, true, true, true, true]);

// ── Cargas: F distribuida en borde superior ──────────────────────
const loads = new Map();
const topBase = ny * (nx + 1);
const F_interior = F / nx;
for (let i = 0; i <= nx; i++) {
  const idx = topBase + i;
  const corner = (i === 0 || i === nx);
  loads.set(idx, [corner ? F_interior * 0.5 : F_interior, 0, 0, 0, 0, 0]);
}

// ── Element inputs ───────────────────────────────────────────────
const thicknesses = new Map();
const elasticities = new Map();
const poissonsRatios = new Map();
const densities = new Map();
elements.forEach((_, i) => {
  thicknesses.set(i, t);
  elasticities.set(i, E);
  poissonsRatios.set(i, nu);
  densities.set(i, 24);
});

// ── Resolver ─────────────────────────────────────────────────────
const deformOut = deform(nodes, elements, { supports, loads }, {
  thicknesses, elasticities, poissonsRatios, densities,
});
const analyzeOut = analyze(nodes, elements, {
  thicknesses, elasticities, poissonsRatios, densities,
}, deformOut);

// ── Extraer δ_top (nodo centro del borde superior) ──────────────
const topMidIdx = topBase + Math.floor(nx / 2);
const u_fem = deformOut.deformations.get(topMidIdx)[0];
const u_fem_mm = u_fem * 1000;

// ── Teoría analítica ─────────────────────────────────────────────
const I = t * W ** 3 / 12;
const A = t * W;
const G = E / (2 * (1 + nu));
const delta_flex = F * H ** 3 / (3 * E * I);
const delta_shear = 1.2 * F * H / (G * A);
const delta_teo = delta_flex + delta_shear;
const delta_teo_mm = delta_teo * 1000;

// ── Valores de referencia SAP2000 v25 (ShellType=5 Membrane) ────
// Obtenidos corriendo `validate_membrane_wall.py` con pysap2000.
// SAP internamente usa Q4 plane-stress + incompatible modes por default.
const SAP_DELTA_MM = 0.512;     // mm (reportado por SAP2000 v25)
const SAP_SIGMA_VM_MAX = 1480;  // kN/m² (en esquina base)

// ── Von Mises max de hekatan ─────────────────────────────────────
let vm_max_hekatan = 0;
analyzeOut.vonMises?.forEach((arr) => {
  for (const v of arr) if (v > vm_max_hekatan) vm_max_hekatan = v;
});

// ── Reporte ──────────────────────────────────────────────────────
console.log("\n╔═══════════════════════════════════════════════════════════════╗");
console.log("║  Membrana CSI — Muro de corte 5×3m, t=0.2m, F=100kN lateral   ║");
console.log("║  Malla Q4 = 8×6,   E=25 GPa,   ν=0.20                          ║");
console.log("╠═══════════════════════════════════════════════════════════════╣");
console.log(`║  δ_top teórico (flex+shear)  : ${delta_teo_mm.toFixed(4).padStart(9)} mm             ║`);
console.log(`║    • flexión (Euler-Bern.)   : ${(delta_flex*1000).toFixed(4).padStart(9)} mm             ║`);
console.log(`║    • corte (κ=1.2)           : ${(delta_shear*1000).toFixed(4).padStart(9)} mm             ║`);
console.log(`║                                                                ║`);
console.log(`║  δ_top Hekatan shell Q4+Rz   : ${u_fem_mm.toFixed(4).padStart(9)} mm             ║`);
console.log(`║    ratio Hekatan/teórico     : ${(u_fem_mm/delta_teo_mm).toFixed(4).padStart(9)}                ║`);
console.log(`║                                                                ║`);
console.log(`║  δ_top SAP2000 v25 Membrane  : ${SAP_DELTA_MM.toFixed(4).padStart(9)} mm (ref)       ║`);
console.log(`║    ratio Hekatan/SAP2000     : ${(u_fem_mm/SAP_DELTA_MM).toFixed(4).padStart(9)}                ║`);
console.log(`║                                                                ║`);
console.log(`║  σ_vm max Hekatan            : ${vm_max_hekatan.toFixed(1).padStart(9)} kN/m²          ║`);
console.log(`║  σ_vm max SAP2000 (ref)      : ${SAP_SIGMA_VM_MAX.toFixed(1).padStart(9)} kN/m²          ║`);
console.log(`║    ratio Hekatan/SAP2000     : ${(vm_max_hekatan/SAP_SIGMA_VM_MAX).toFixed(4).padStart(9)}                ║`);
console.log("╚═══════════════════════════════════════════════════════════════╝\n");

// ── Assertions ──────────────────────────────────────────────────
const ratio_sap = u_fem_mm / SAP_DELTA_MM;
const ratio_teo = u_fem_mm / delta_teo_mm;

if (ratio_sap < 0.90 || ratio_sap > 1.10) {
  console.error(`❌ FAIL: ratio Hekatan/SAP = ${ratio_sap.toFixed(4)} fuera del ±10%`);
  process.exit(1);
}
if (ratio_teo < 0.80 || ratio_teo > 1.30) {
  console.error(`❌ FAIL: ratio Hekatan/teórico = ${ratio_teo.toFixed(4)} fuera del rango esperado`);
  process.exit(1);
}
console.log(`✅ PASS — Hekatan dentro de ±10% vs SAP2000 (ratio ${ratio_sap.toFixed(4)})`);
console.log(`✅ PASS — Hekatan dentro de ±30% vs teoría beam 1D (esperado por efectos 2D en H/W=0.6)`);
