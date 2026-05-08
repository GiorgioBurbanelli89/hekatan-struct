/**
 * 🏁 Benchmark FRAME — Columna de ACERO Cantilever (HSS hueco rectangular)
 *
 * Modelo: 1 columna vertical HSS 300×300×12mm (acero A572Gr50), empotrada
 * en la base, L=3m, peso propio + carga lateral opcional en tope.
 *
 * Sección HSS hueca:
 *   A_s = 0.30² − 0.276² = 138.24 cm²
 *   I_s = (0.30⁴ − 0.276⁴)/12 = 19143.48 cm⁴
 *
 * Material A572Gr50 (ETABS units → kN/m³ y kN/m²):
 *   E   = 2.039e7 tonf/m² × 9.80665e-3 = 2.0e8 kN/m² (200 GPa)
 *   γ_s = 7.849 tonf/m³ × 9.80665     = 76.97 kN/m³
 *
 * Peso propio uniforme:
 *   q = γ_s · A_s = 76.97 · 0.013824 = 1.064 kN/m
 *   W = q·L      = 3.193 kN
 *
 * Resultados esperados (cantilever bajo peso propio):
 *   u_top = q · L² / (2 · E · A_s)
 *         = 1.064 · 9 / (2 · 2.0e8 · 0.013824)
 *         = 1.732e-6 m  =  -0.001732 mm
 *
 * EXPORTAR A ETABS: Toggle "Exportar a .e2k" → descarga archivo .e2k
 * (FRAMESECTION "HSS300x300x12" SHAPE "Steel Tube" MATERIAL "A572Gr50").
 */
import { modalAnalysis } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { formatDisp, formatForce, formatMoment } from "../workspace/units";
import {
  buildCantileverModel,
  exportCantileverE2k,
} from "../shared/cantileverE2k";

export const benchmarkSteelCantilever: ExampleDef = {
  id: "benchmark-steel-cantilever",
  name: "🏁 Frame · Columna ACERO Cantilever",
  category: "🏁 Benchmarks · 1️⃣ Frames",
  benchmark: true,
  defaultShellResult: "none",
  guide: [
    "Caso CANÓNICO de validación FRAME ACERO: 1 columna HSS hueca cantilever, L=3m.",
    "Sección HSS300×300×12mm (Steel Tube hueco) — material A572Gr50.",
    "Empotramiento total en base (UX UY UZ RX RY RZ) — coincide con ETABS canónico.",
    "Peso propio aplicado como nodal equivalente q·L = 3.19 kN distribuido.",
    "Hover sobre nodo top → ver Uz; hover sobre base → ver reacción Fz=qL.",
    "✅ Toggle 'Exportar a .e2k' → descarga archivo ETABS para validación cruzada.",
  ],
  params: {
    L:     { default: 3.0,   min: 1, max: 10, step: 0.5, label: "Altura columna (m)", folder: "Geometría" },
    D_out: { default: 0.30,  min: 0.15, max: 0.50, step: 0.01, label: "D / B (m)", folder: "Sección" },
    t_HSS: { default: 0.012, min: 0.005, max: 0.030, step: 0.001, label: "t pared (m)", folder: "Sección" },
    E_s:   { default: 200e6, min: 150e6, max: 220e6, step: 5e6, label: "E acero (kN/m²)", folder: "Material" },
    gamma_s: { default: 76.97, min: 60, max: 90, step: 0.5, label: "γ_s acero (kN/m³)", folder: "Material" },
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
    exportE2k: { default: 0, boolean: true, label: "📤 Exportar a ETABS .e2k", folder: "Exportar" },
    // Constantes internas (no editables): E_c y gamma_c — usados sólo si la
    // función shared los requiere (no aplica a Acero puro, pero el shape
    // CantileverParams los necesita para tipo CFT). Hidden in pane.
    _E_c:     { default: 24.86e6, label: "(no usar)", folder: "Avanzado" },
    _gamma_c: { default: 23.56,   label: "(no usar)", folder: "Avanzado" },
  },
  hasModal: true,

  onParamChange(changedKey, params) {
    if (changedKey === "exportE2k" && params.exportE2k > 0.5) {
      exportCantileverE2k(adapt(params), 0);  // matKey=0 (Acero)
      params.exportE2k = 0;
    }
  },

  computedLabels(p) {
    const D = p.D_out, t = p.t_HSS;
    const Di = D - 2*t;
    const A_s = D*D - Di*Di;
    const I_s = (D**4 - Di**4) / 12;
    const q = p.gamma_s * A_s;
    const W = q * p.L;
    const u_top = q * p.L * p.L / (2 * p.E_s * A_s) * 1000;  // mm
    return {
      "A_s (HSS hueca)":  `${(A_s*1e4).toFixed(2)} cm²`,
      "I_s":              `${(I_s*1e8).toFixed(2)} cm⁴`,
      "EA":               `${(p.E_s*A_s).toFixed(0)} kN`,
      "EI":               `${(p.E_s*I_s).toFixed(0)} kN·m²`,
      "q peso propio":    `${q.toFixed(3)} kN/m`,
      "W = q·L":          `${W.toFixed(3)} kN`,
      "Uz_top analítico": `${u_top.toFixed(5)} mm`,
    };
  },

  build(p, states) {
    const { sec } = buildCantileverModel(adapt(p), states, 0);  // 0 = Acero
    const L = p.L;
    const nSeg = Math.max(1, Math.round(p.nSegments));

    const u_top = states.deformOutputs.val.deformations?.get(nSeg);
    const r_base = states.deformOutputs.val.reactions?.get(0);
    if (u_top) {
      const Uz_m = u_top[2];
      const Ux_m = u_top[0];
      const Uz_analytic_m = -sec.q * L * L / (2 * sec.E_col * sec.A_eq);
      const dAnalytic = (Uz_m - Uz_analytic_m) / Math.abs(Uz_analytic_m) * 100;

      let report = `[Cantilever ACERO] ${nSeg} segmentos\n` +
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
        `[Cantilever Acero — Modal] 3 primeros modos:\n` +
        out.frequencies.map((f, i) =>
          `  Modo ${i+1}: f = ${f.toFixed(3)} Hz   T = ${(1/f).toFixed(4)} s`
        ).join("\n")
      );
      if (modalPanel?.render) {
        modalPanel.render(out, {
          title: `Cantilever ACERO L=${p.L}m  HSS${(p.D_out*1000).toFixed(0)}×${(p.D_out*1000).toFixed(0)}×${(p.t_HSS*1000).toFixed(0)}mm`,
          properties: [`E=${(p.E_s/1e6).toFixed(1)} GPa  γ=${p.gamma_s.toFixed(2)} kN/m³`],
        });
      }
    } catch (e: any) {
      console.error("[Cantilever Acero Modal] error:", e.message);
    }
  },
};

/** Adapta los params del benchmark al shape CantileverParams del shared module.
 *  Inyecta E_c y gamma_c (no usados en Acero puro, pero requeridos por la
 *  signatura compartida con CFT). */
function adapt(p: Record<string, number>): any {
  return {
    L: p.L,
    D_out: p.D_out,
    t_HSS: p.t_HSS,
    E_s: p.E_s,
    E_c: p._E_c ?? 24.86e6,
    gamma_s: p.gamma_s,
    gamma_c: p._gamma_c ?? 23.56,
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
