/**
 * 🏁 Benchmark FRAME — Columna de HORMIGÓN Cantilever (rectangular sólida)
 *
 * Modelo: 1 columna vertical de hormigón f'c = 4000 psi (concrete plain),
 * sección rectangular sólida 30×30cm, empotrada en la base, L=3m, peso propio.
 *
 * Sección rectangular sólida 30×30cm:
 *   A = 0.30² = 900 cm² = 0.09 m²
 *   I = 0.30⁴/12 = 6.75e-4 m⁴ = 67500 cm⁴
 *   J ≈ 0.141·b⁴ = 1.143e-3 m⁴ (Saint-Venant cuadrado)
 *
 * Material concrete (ETABS):
 *   E   = 2.549e6 tonf/m² × 9.80665e-3 = 24.99e6 kN/m² ≈ 25 GPa
 *   γ_c = 2.4 tonf/m³ × 9.80665        = 23.54 kN/m³
 *
 * Peso propio uniforme:
 *   q = γ_c · A = 23.54 · 0.09 = 2.119 kN/m
 *   W = q·L    = 6.358 kN
 *
 * Resultados esperados (cantilever bajo peso propio):
 *   u_top = q · L² / (2 · E · A)
 *         = 2.119 · 9 / (2 · 25e6 · 0.09)
 *         = 4.238e-6 m  =  -0.00424 mm
 *
 * EXPORTAR A ETABS: Toggle "Exportar a .e2k" → descarga archivo .e2k
 * (FRAMESECTION "C300x300" SHAPE "Concrete Rectangular" MATERIAL "concrete").
 */
import { modalAnalysis } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { formatDisp, formatForce, formatMoment } from "../workspace/units";
import {
  buildCantileverModel,
  exportCantileverE2k,
} from "../shared/cantileverE2k";
import { getActiveSelfWeightMultiplier } from "../shared/loadCaseHelpers";

export const benchmarkConcreteCantilever: ExampleDef = {
  id: "benchmark-concrete-cantilever",
  name: "🏁 Frame · Columna HORMIGÓN Cantilever",
  category: "1️⃣ Frames · 🎯 2 GDL Flexión",
  benchmark: true,
  defaultShellResult: "none",
  guide: [
    "Caso CANÓNICO de validación FRAME HORMIGÓN: 1 columna 30×30cm cantilever, L=3m.",
    "Sección Concrete Rectangular sólida — material concrete (E=25 GPa, γ=23.5 kN/m³).",
    "Empotramiento total en base (UX UY UZ RX RY RZ) — coincide con ETABS canónico.",
    "Peso propio aplicado como nodal equivalente q·L = 6.36 kN distribuido.",
    "Hover sobre nodo top → ver Uz; hover sobre base → ver reacción Fz=qL.",
    "✅ Toggle 'Exportar a .e2k' → descarga archivo ETABS para validación cruzada.",
  ],
  params: {
    L:     { default: 3.0,   min: 1, max: 10, step: 0.5, label: "Altura columna (m)", folder: "Geometría" },
    D_out: { default: 0.30,  min: 0.15, max: 0.80, step: 0.01, label: "B = H sección (m)", folder: "Sección" },
    E_c:   { default: 24.99e6, min: 10e6, max: 50e6, step: 1e6, label: "E concreto (kN/m²)", folder: "Material" },
    gamma_c: { default: 23.54, min: 18, max: 28, step: 0.5, label: "γ_c concreto (kN/m³)", folder: "Material" },
    A_mod:   { default: 1.0, min: 0, max: 1, step: 0.01, label: "Area mod (axial)", folder: "Property Modifiers" },
    As2_mod: { default: 1.0, min: 0, max: 1, step: 0.01, label: "As2 mod (cortante 2)", folder: "Property Modifiers" },
    As3_mod: { default: 1.0, min: 0, max: 1, step: 0.01, label: "As3 mod (cortante 3)", folder: "Property Modifiers" },
    J_mod:   { default: 1.0, min: 0, max: 1, step: 0.01, label: "Torsion mod (J)", folder: "Property Modifiers" },
    I22_mod: { default: 1.0, min: 0, max: 1, step: 0.01, label: "I22 mod (flexión weak)", folder: "Property Modifiers" },
    I33_mod: { default: 1.0, min: 0, max: 1, step: 0.01, label: "I33 mod (flexión strong)", folder: "Property Modifiers" },
    P_lat:    { default: 0, min: -100, max: 100, step: 1, label: "Fx top (carga lateral X)", folder: "Cargas", unitType: "force", rangeAdjustable: true },
    P_lat_y:  { default: 0, min: -100, max: 100, step: 1, label: "Fy top (carga lateral Y)", folder: "Cargas", unitType: "force", rangeAdjustable: true },
    M_top_x:  { default: 0, min: -100, max: 100, step: 0.5, label: "Mx top (alrededor X global)", folder: "Cargas", unitType: "moment", rangeAdjustable: true },
    M_top_y:  { default: 0, min: -100, max: 100, step: 0.5, label: "My top (alrededor Y global)", folder: "Cargas", unitType: "moment", rangeAdjustable: true },
    M_top_z:  { default: 0, min: -100, max: 100, step: 0.5, label: "Mz top (torsor)", folder: "Cargas", unitType: "moment", rangeAdjustable: true },
    nSegments: { default: 10, min: 1, max: 50, step: 1, label: "Segmentos columna", folder: "Mesh" },
    // Internos no editables (requeridos por shape compartido)
    _t_HSS: { default: 0.012,  label: "(no usar)", folder: "Avanzado" },
    _E_s:   { default: 200e6,  label: "(no usar)", folder: "Avanzado" },
    _gamma_s: { default: 76.97, label: "(no usar)", folder: "Avanzado" },
  },
  hasModal: true,

  // Exporter E2K específico: cantileverE2k.ts emite "Concrete Rectangular"
  // con dimensiones reales (vs generic que deriva equivalente).
  customE2kExport(params, _states) {
    exportCantileverE2k(adapt(params), 1);  // matKey=1 (Hormigón)
  },

  computedLabels(p) {
    const D = p.D_out;
    const A = D * D;
    const I = D ** 4 / 12;
    const q = p.gamma_c * A;
    const W = q * p.L;
    const u_top = q * p.L * p.L / (2 * p.E_c * A) * 1000;  // mm
    return {
      "A":                `${(A*1e4).toFixed(2)} cm²`,
      "I":                `${(I*1e8).toFixed(2)} cm⁴`,
      "EA":               `${(p.E_c*A).toFixed(0)} kN`,
      "EI":               `${(p.E_c*I).toFixed(0)} kN·m²`,
      "q peso propio":    `${q.toFixed(3)} kN/m`,
      "W = q·L":          `${W.toFixed(3)} kN`,
      "Uz_top analítico": `${u_top.toFixed(5)} mm`,
    };
  },

  build(p, states) {
    // Lee el case activo del panel 📊 Load Cases para escalar peso propio:
    //   Dead (SW=1)  → swMult=1 → peso propio full
    //   Live (SW=0)  → swMult=0 → no aplica peso propio
    //   Modal/sin patterns → swMult=0
    const swMult = getActiveSelfWeightMultiplier(states);
    const { sec } = buildCantileverModel(adapt(p), states, 1, swMult);  // 1 = Hormigón
    const L = p.L;
    const nSeg = Math.max(1, Math.round(p.nSegments));

    const u_top = states.deformOutputs.val.deformations?.get(nSeg);
    const r_base = states.deformOutputs.val.reactions?.get(0);
    if (u_top) {
      const Uz_m = u_top[2];
      const Ux_m = u_top[0];
      const Uz_analytic_m = -sec.q * L * L / (2 * sec.E_col * sec.A_eq);
      const dAnalytic = (Uz_m - Uz_analytic_m) / Math.abs(Uz_analytic_m) * 100;

      let report = `[Cantilever HORMIGÓN] ${nSeg} segmentos\n` +
        `  Sección: ${sec.sectionLabel}\n` +
        `  Modifiers: A=${p.A_mod} As2=${p.As2_mod} As3=${p.As3_mod} J=${p.J_mod} I22=${p.I22_mod} I33=${p.I33_mod}\n` +
        `  Uz_top   = ${formatDisp(Uz_m, 5)}  (analítico ${formatDisp(Uz_analytic_m, 5)}, Δ ${dAnalytic.toFixed(3)}%)\n`;

      if (Math.abs(p.P_lat) > 1e-9) {
        const As_eq = (5/6) * sec.A_eq;
        const u_lat_bend = p.P_lat * L*L*L / (3 * sec.E_col * sec.I_eq);
        const u_lat_shear = p.P_lat * L / (sec.G_col * As_eq);
        const u_lat_total_m = u_lat_bend + u_lat_shear;
        const M_base_analytic = p.P_lat * L;
        const V_base_analytic = p.P_lat;
        report += `  Ux_top = ${formatDisp(Ux_m, 4)} (lateral, P=${formatForce(p.P_lat)})\n` +
          `    Analítico Timoshenko: ${formatDisp(u_lat_total_m, 4)} (bending ${formatDisp(u_lat_bend, 4)} + shear ${formatDisp(u_lat_shear, 4)})\n` +
          `  Esperado en base: M = P·L = ${formatMoment(M_base_analytic)},  V = P = ${formatForce(V_base_analytic)}\n`;
      }
      if (r_base) {
        report += `  Reacción base: Fz=${formatForce(r_base[2], 3)}  My=${formatMoment(r_base[4], 3)}  (W=${formatForce(sec.q*L, 3)} esperado)`;
      }
      console.log(report);
    }
  },

  runModal(p, states, modalPanel) {
    if (!states.nodes.val.length) return;
    try {
      const out = modalAnalysis(
        states.nodes.val,
        states.elements.val,
        states.nodeInputs.val,
        states.elementInputs.val,
        3,
      );
      console.log(
        `[Cantilever Hormigón — Modal] 3 primeros modos:\n` +
        out.frequencies.map((f, i) =>
          `  Modo ${i+1}: f = ${f.toFixed(3)} Hz   T = ${(1/f).toFixed(4)} s`
        ).join("\n")
      );
      if (modalPanel?.render) {
        modalPanel.render(out, {
          title: `Cantilever HORMIGÓN L=${p.L}m  ${(p.D_out*100).toFixed(0)}×${(p.D_out*100).toFixed(0)}cm`,
          properties: [`E=${(p.E_c/1e6).toFixed(1)} GPa  γ=${p.gamma_c.toFixed(2)} kN/m³`],
        });
      }
    } catch (e: any) {
      console.error("[Cantilever Hormigón Modal] error:", e.message);
    }
  },
};

/** Adapta params al shape CantileverParams. Inyecta valores stub para
 *  las propiedades de acero (no usadas en Hormigón puro). */
function adapt(p: Record<string, number>): any {
  return {
    L: p.L,
    D_out: p.D_out,
    t_HSS: p._t_HSS ?? 0.012,
    E_s: p._E_s ?? 200e6,
    E_c: p.E_c,
    gamma_s: p._gamma_s ?? 76.97,
    gamma_c: p.gamma_c,
    A_mod: p.A_mod,
    As2_mod: p.As2_mod,
    As3_mod: p.As3_mod,
    J_mod: p.J_mod,
    I22_mod: p.I22_mod,
    I33_mod: p.I33_mod,
    P_lat: p.P_lat,
    P_lat_y: p.P_lat_y ?? 0,
    M_top_x: p.M_top_x ?? 0,
    M_top_y: p.M_top_y ?? 0,
    M_top_z: p.M_top_z ?? 0,
    nSegments: p.nSegments,
  };
}
