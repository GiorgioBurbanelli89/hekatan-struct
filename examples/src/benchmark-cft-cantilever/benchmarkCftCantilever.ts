/**
 * 🏁 Benchmark FRAME — Columna CFT Cantilever (validación contra ETABS)
 *
 * Modelo simple: 1 columna vertical CFT 300×300×12mm + concreto fill 4000Psi,
 * empotrada en la base, L=3m, peso propio como única carga.
 *
 * Caso CANÓNICO de columna cantilever bajo peso propio:
 *   u_axial(z) = q · z · (2L - z) / (2 · E · A_eq)
 *   u_top      = q · L² / (2 · E · A_eq)
 *
 * Sección CFT 300×300×12 + concreto fill 0.276×0.276:
 *   A_s (acero)  = 0.30² − 0.276² = 138.24 cm²
 *   A_c (conc.)  = 0.276² = 761.76 cm²
 *   I_s (acero)  = (0.30⁴ − 0.276⁴)/12 = 19143.48 cm⁴
 *   I_c (conc.)  = 0.276⁴/12 = 48356.52 cm⁴
 *   n = E_s/E_c = 2.039e7 / 2.535e6 = 8.044
 *   A_eq (steel) = A_s + A_c/n = 232.93 cm² ✓ ETABS API
 *   I_eq (steel) = I_s + I_c/n = 25154.69 cm⁴ ✓ ETABS API
 *
 * Resultados esperados:
 *   ETABS API:  Uz_top = -0.00276 mm
 *   Hekatan:    Uz_top = -0.00276 mm  (Δ < 0.5%)
 *   Analítico:  qL²/(2·E·A_eq) = -0.00276 mm
 *
 * EXPORTAR A ETABS: Toggle "Exportar a .e2k" → descarga archivo .e2k canónico
 * para abrir en ETABS y validar cruzadamente.
 */
import { modalAnalysis } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { formatDisp, formatForce, formatMoment } from "../workspace/units";
import {
  buildCantileverModel,
  exportCantileverE2k,
  type MaterialKey,
} from "../shared/cantileverE2k";

// ETABS API real — extraído del modelo Columna CFT Cantilivier.e2k
const ETABS_REF = {
  Uz_top_mm: -0.0028,
  Fz_base_kN: 8.5771,
  A_section: 2.3293e-2,
  I_section: 2.5155e-4,
};

export const benchmarkCftCantilever: ExampleDef = {
  id: "benchmark-cft-cantilever",
  name: "🏁 Frame · Columna CFT Cantilever",
  category: "🎯 1 DOF · Cantilever Axial",
  benchmark: true,
  defaultShellResult: "none",
  guide: [
    "Caso CANÓNICO de validación FRAME: 1 columna CFT cantilever, L=3m, peso propio.",
    "Sección CR300×300×121mm = HSS 300×300×12 + concreto fill 4000Psi (Filled Steel Tube).",
    "Empotramiento total en base (UX UY UZ RX RY RZ) — coincide con ETABS canónico.",
    "Carga: peso propio aplicado como punto equivalente P=qL/2 en tope (u_top match exacto).",
    "Hover sobre nodo top → ver Uz; hover sobre base → ver reacción Fz=qL=8.58 kN.",
    "Compara consola: Hekatan ≈ ETABS API (-0.0028 mm) ≈ analítico (qL²/2EA = -0.00276 mm).",
    "✅ Toggle 'Exportar a .e2k' → descarga archivo ETABS para validación cruzada.",
  ],
  params: {
    // materialType locked = 2 (CFT) — pero permitimos cambiar para flexibilidad
    materialType: {
      default: 2,
      label: "Tipo de columna",
      options: {
        "Acero (HSS hueco)":             0,
        "Hormigón (rectangular)":        1,
        "Mixta CFT (Filled Steel Tube)": 2,
      },
      folder: "Sección",
      regenOnChange: true,
    },
    L:     { default: 3.0,   min: 1, max: 10, step: 0.5, label: "Altura columna (m)", folder: "Geometría" },
    D_out: { default: 0.30,  min: 0.15, max: 0.50, step: 0.01, label: "D / B (m)", folder: "Sección" },
    t_HSS: { default: 0.012, min: 0.005, max: 0.030, step: 0.001, label: "t pared (m, sólo Acero/CFT)", folder: "Sección" },
    E_s:   { default: 200e6, min: 150e6, max: 220e6, step: 5e6, label: "E acero (kN/m²)", folder: "Material" },
    E_c:   { default: 24.86e6, min: 10e6, max: 50e6, step: 1e6, label: "E concreto (kN/m²)", folder: "Material" },
    gamma_s: { default: 76.97, min: 60, max: 90, step: 0.5, label: "γ_s acero (kN/m³)", folder: "Material" },
    gamma_c: { default: 23.56, min: 18, max: 28, step: 0.5, label: "γ_c concreto (kN/m³)", folder: "Material" },
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
    // Botón "click-to-trigger": al pasar de 0 a 1, dispara descarga e2k.
    // El callback en onParamChange resetea a 0 inmediatamente.
    exportE2k: { default: 0, boolean: true, label: "📤 Exportar a ETABS .e2k", folder: "Exportar" },
  },
  hasModal: true,

  onParamChange(changedKey, params) {
    if (changedKey === "exportE2k" && params.exportE2k > 0.5) {
      const matKey = Math.round(params.materialType ?? 2) as MaterialKey;
      exportCantileverE2k(params as any, matKey);
      params.exportE2k = 0;  // reset toggle
    }
  },

  computedLabels(p) {
    const D = p.D_out, t = p.t_HSS;
    const Di = D - 2*t;
    const A_s = D*D - Di*Di;
    const A_c = Di*Di;
    const I_s = (D**4 - Di**4) / 12;
    const I_c = Di**4 / 12;
    const n   = p.E_s / p.E_c;
    const A_eq = A_s + A_c/n;
    const I_eq = I_s + I_c/n;
    const q = p.gamma_s*A_s + p.gamma_c*A_c;
    const W = q * p.L;
    const u_top = q * p.L * p.L / (2 * p.E_s * A_eq) * 1000;  // mm
    return {
      "A_s (HSS)":   `${(A_s*1e4).toFixed(2)} cm²`,
      "A_c (fill)":  `${(A_c*1e4).toFixed(2)} cm²`,
      "n=E_s/E_c":   n.toFixed(3),
      "A_eq":        `${(A_eq*1e4).toFixed(2)} cm² (E·A=${(p.E_s*A_eq).toFixed(0)} kN)`,
      "I_eq":        `${(I_eq*1e8).toFixed(2)} cm⁴ (E·I=${(p.E_s*I_eq).toFixed(0)} kN·m²)`,
      "q peso propio": `${q.toFixed(3)} kN/m`,
      "W = q·L":     `${W.toFixed(3)} kN`,
      "Uz_top analítico": `${u_top.toFixed(5)} mm`,
      "ETABS API ref": `${ETABS_REF.Uz_top_mm} mm`,
    };
  },

  build(p, states) {
    const matKey = Math.round(p.materialType ?? 2) as MaterialKey;
    const { sec } = buildCantileverModel(p as any, states, matKey);
    const L = p.L;
    const nSeg = Math.max(1, Math.round(p.nSegments));

    // Reporte en consola
    const u_top = states.deformOutputs.val.deformations?.get(nSeg);
    const r_base = states.deformOutputs.val.reactions?.get(0);
    if (u_top) {
      const Uz_m = u_top[2];
      const Ux_m = u_top[0];
      const Uz_analytic_m = -sec.q * L * L / (2 * sec.E_col * sec.A_eq);
      const dETABS = (Uz_m*1000 - ETABS_REF.Uz_top_mm) / Math.abs(ETABS_REF.Uz_top_mm) * 100;
      const dAnalytic = (Uz_m - Uz_analytic_m) / Math.abs(Uz_analytic_m) * 100;

      let report = `[Cantilever ${sec.materialType}] ${nSeg} segmentos\n` +
        `  Sección: ${sec.sectionLabel}\n` +
        `  Modifiers: A=${p.A_mod} As2=${p.As2_mod} As3=${p.As3_mod} J=${p.J_mod} I22=${p.I22_mod} I33=${p.I33_mod}\n` +
        `  Uz_top   = ${formatDisp(Uz_m, 5)}  (analítico ${formatDisp(Uz_analytic_m, 5)}, Δ ${dAnalytic.toFixed(3)}%)\n`;

      if (matKey === 2) {
        report += `  ETABS API: ${ETABS_REF.Uz_top_mm.toFixed(5)} mm  (Δ ${dETABS.toFixed(2)}%)\n`;
      }

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
        `[Cantilever — Modal] 3 primeros modos:\n` +
        out.frequencies.map((f, i) =>
          `  Modo ${i+1}: f = ${f.toFixed(3)} Hz   T = ${(1/f).toFixed(4)} s`
        ).join("\n")
      );
      if (modalPanel?.render) {
        modalPanel.render(out, {
          title: `Cantilever ${p.materialType === 0 ? "Acero" : p.materialType === 1 ? "Hormigón" : "CFT"} L=${p.L}m`,
          properties: [`D=${(p.D_out*1000).toFixed(0)}mm  t=${(p.t_HSS*1000).toFixed(0)}mm  E=${(p.E_s/1e6).toFixed(1)} GPa`],
        });
      }
    } catch (e: any) {
      console.error("[Cantilever Modal] error:", e.message);
    }
  },
};
