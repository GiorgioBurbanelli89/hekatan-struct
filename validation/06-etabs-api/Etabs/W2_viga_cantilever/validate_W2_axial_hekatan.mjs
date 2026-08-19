/**
 * Valida W2 axial — viga cantilever HORIZONTAL en eje X con carga axial.
 *
 * Modelo (idéntico al E2K editado por el usuario en ETABS):
 *   Geometría:  POINT 1 (0,0,0)  →  POINT 2 (3,0,0),  1 elemento frame
 *   Sección I450 custom: D=0.45, B=0.25, TF=0.025, TW=0.013 m
 *     → A = 0.0177 m²,  I33 = 6.344e-4 m⁴,  I22 = 6.518e-5 m⁴,  J = 2.805e-6 m⁴
 *   Material A36: E = 199.94 GPa  (= 20389020 Tonf/m² × 9.80665)
 *                 nu = 0.3,  γ = 76.97 kN/m³  (DESACTIVADO en el caso)
 *   Soporte:    node 0 empotrado total (6 DOFs)
 *   Carga:      node 1 → Fx = +100 kN  (axial)  (SELFWEIGHT=0)
 *
 * Esperado analítico:
 *   u_x = P·L / (E·A) = 100·3 / (199.94e6 · 0.0177) = 0.0848 mm
 * ETABS reportó: Ux = 0.085 mm
 */
import { deform } from "../../../hekatan-fem/src/index.ts";

// Run con: node --experimental-strip-types --experimental-vm-modules validate_W2_axial_hekatan.mjs

const L = 3.0;
const E = 199.94e6;   // kN/m²  (= 20389020 Tonf/m² × 9.80665)
const nu = 0.3;
const G = E / (2 * (1 + nu));
const A = 0.0177;     // m² (calculado de la geometría I450)
const I33 = 6.344e-4; // m⁴ (strong axis)
const I22 = 6.518e-5; // m⁴ (weak axis)
const J = 2.805e-6;   // m⁴
const As2 = 5.82e-3;  // m² (shear area en dirección 2 strong)
const As3 = 1.185e-2; // m² (shear area en dirección 3 weak)
const P_axial = 100.0;  // kN (Fx)

// Modelo hekatan
const nodes = [
  [0, 0, 0],   // POINT 1
  [L, 0, 0],   // POINT 2
];
const elements = [[0, 1]];

const supports = new Map();
supports.set(0, [true, true, true, true, true, true]);

const loads = new Map();
loads.set(1, [P_axial, 0, 0, 0, 0, 0]);  // Fx = 100 kN

const nodeInputs = { supports, loads };

const elasticities = new Map([[0, E]]);
const shearModuli = new Map([[0, G]]);
const areas = new Map([[0, A]]);
const momentsOfInertiaY = new Map([[0, I33]]);
const momentsOfInertiaZ = new Map([[0, I22]]);
const torsionalConstants = new Map([[0, J]]);
const shearAreasY = new Map([[0, As2]]);
const shearAreasZ = new Map([[0, As3]]);

const elementInputs = {
  elasticities,
  shearModuli,
  areas,
  momentsOfInertiaY,
  momentsOfInertiaZ,
  torsionalConstants,
  shearAreasY,
  shearAreasZ,
};

console.log("="*70);
console.log("  W2 Axial Cantilever — Validación hekatan-fem vs ETABS");
console.log("=".repeat(70));
console.log(`  L = ${L} m`);
console.log(`  E = ${(E/1e6).toFixed(3)} GPa,  nu = ${nu},  G = ${(G/1e6).toFixed(3)} GPa`);
console.log(`  A = ${(A*1e4).toFixed(2)} cm²,  I33 = ${(I33*1e8).toFixed(2)} cm⁴`);
console.log(`  P_axial = ${P_axial} kN  →  u_analítico = ${(P_axial*L/(E*A)*1000).toFixed(5)} mm`);
console.log(`  ETABS reportó: Ux = 0.085 mm`);
console.log("-".repeat(70));

const output = deform(nodes, elements, nodeInputs, elementInputs);

const def = output.deformations;
if (!def) {
  console.error("ERROR: deform() no devolvió deformations");
  process.exit(1);
}

const def0 = def.get(0) ?? [0,0,0,0,0,0];
const def1 = def.get(1) ?? [0,0,0,0,0,0];

console.log(`\n  Hekatan-fem deformations:`);
console.log(`    Node 0 (empotrado):  Ux=${def0[0].toExponential(3)}  Uy=${def0[1].toExponential(3)}  Uz=${def0[2].toExponential(3)}`);
console.log(`    Node 1 (libre):      Ux=${def1[0].toExponential(3)}  Uy=${def1[1].toExponential(3)}  Uz=${def1[2].toExponential(3)}`);

const ux_hekatan_mm = def1[0] * 1000;
const ux_analitico_mm = P_axial * L / (E * A) * 1000;
const ux_etabs_mm = 0.085;
const diff_vs_ana = (ux_hekatan_mm - ux_analitico_mm) / ux_analitico_mm * 100;
const diff_vs_etabs = (ux_hekatan_mm - ux_etabs_mm) / ux_etabs_mm * 100;

console.log(`\n  RESUMEN:`);
console.log(`    Analítico u = P·L/(E·A):  ${ux_analitico_mm.toFixed(5)} mm`);
console.log(`    Hekatan-fem deform:       ${ux_hekatan_mm.toFixed(5)} mm`);
console.log(`    ETABS reportado:          ${ux_etabs_mm.toFixed(5)} mm`);
console.log(`    Δ Hekatan vs Analítico:   ${diff_vs_ana.toFixed(4)} %`);
console.log(`    Δ Hekatan vs ETABS:       ${diff_vs_etabs.toFixed(4)} %  ${Math.abs(diff_vs_etabs) < 1 ? "[PASS]" : "[FAIL]"}`);

const rx = output.reactions?.get(0) ?? [0,0,0,0,0,0];
console.log(`\n  Reacción node 0:  Fx=${rx[0].toFixed(4)} kN  (esperado ${-P_axial})`);

console.log("\nDONE");
