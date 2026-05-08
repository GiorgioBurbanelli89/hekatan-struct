/**
 * 🏁 Benchmark FRAME — Viga ACERO doblemente empotrada (W I/Wide Flange)
 *
 * Modelo: 1 viga horizontal W360×72 (aprox), L=6m, doblemente empotrada,
 * peso propio + carga de servicio uniforme q_extra (vivienda típica).
 *
 * Sección W I/Wide Flange (ETABS shape "Steel I/Wide Flange"):
 *   D=0.36m, B=0.20m, TF=0.018m, TW=0.011m
 *   A     = 2·B·TF + (D−2TF)·TW  = 2·0.20·0.018 + 0.324·0.011 = 0.01076 m²
 *   I_y   ≈ 4.1e-4 m⁴ (strong axis)
 *
 * Material A992Fy50: E=2.0e8 kN/m², γ=76.97 kN/m³
 *
 * Carga total (peso propio + sobrecarga 5 kN/m):
 *   q = γ·A + 5 = 76.97·0.01076 + 5 = 0.828 + 5 = 5.83 kN/m
 *
 * Resultados esperados (Euler-Bernoulli viga doblemente empotrada):
 *   u_centro = q·L⁴ / (384·E·I) = 5.83·1296 / (384·2.0e8·4.1e-4)
 *            ≈ 2.4e-4 m = 0.24 mm
 *   M_emp    = q·L²/12 = 17.49 kN·m
 *   M_centro = q·L²/24 = 8.74 kN·m
 *   V_apoyo  = q·L/2   = 17.49 kN
 *
 * EXPORTAR A ETABS: Toggle "Exportar a .e2k" → archivo con FRAMESECTION
 * "Steel I/Wide Flange" + LINELOAD UNIFLOADSET + DEAD selfweight.
 */
import { modalAnalysis } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { formatDisp, formatForce, formatMoment } from "../workspace/units";
import {
  buildFixedFixedBeamModel,
  exportBeamE2k,
} from "../shared/beamFixedFixedE2k";

export const benchmarkSteelBeam: ExampleDef = {
  id: "benchmark-steel-beam",
  name: "🏁 Frame · Viga ACERO doblemente empotrada",
  category: "🏁 Benchmarks · 1️⃣ Frames",
  benchmark: true,
  defaultShellResult: "none",
  guide: [
    "Caso CANÓNICO de validación FRAME ACERO: viga W I/WF doblemente empotrada, L=6m.",
    "Sección Steel I/Wide Flange (W360×72 aprox) — material A992Fy50.",
    "Empotramiento total en AMBOS extremos (UX UY UZ RX RY RZ).",
    "Carga: peso propio + q_extra uniforme (sobrecarga vivienda 5 kN/m default).",
    "Resultados clásicos: u_centro = qL⁴/(384EI), M_emp = qL²/12, M_centro = qL²/24.",
    "✅ Toggle 'Exportar a .e2k' → archivo ETABS con LINELOAD UNIFLOADSET para validar.",
  ],
  params: {
    L:    { default: 6.0, min: 2, max: 15, step: 0.5, label: "Luz viga (m)", folder: "Geometría" },
    D_w:  { default: 0.360, min: 0.20, max: 0.60, step: 0.01,  label: "D altura W (m)", folder: "Sección" },
    B_w:  { default: 0.200, min: 0.10, max: 0.40, step: 0.01,  label: "B ala (m)", folder: "Sección" },
    TF_w: { default: 0.018, min: 0.008, max: 0.040, step: 0.001, label: "TF espesor ala (m)", folder: "Sección" },
    TW_w: { default: 0.011, min: 0.005, max: 0.025, step: 0.001, label: "TW espesor alma (m)", folder: "Sección" },
    E_s:     { default: 200e6, min: 150e6, max: 220e6, step: 5e6, label: "E acero (kN/m²)", folder: "Material" },
    gamma_s: { default: 76.97, min: 60, max: 90, step: 0.5, label: "γ_s acero (kN/m³)", folder: "Material" },
    q_extra: { default: 5,  min: 0, max: 100, step: 0.5, label: "Sobrecarga uniforme", folder: "Cargas", unitType: "force", rangeAdjustable: true },
    A_mod:   { default: 1.0, min: 0, max: 1, step: 0.01, label: "Area mod (axial)", folder: "Property Modifiers" },
    As2_mod: { default: 1.0, min: 0, max: 1, step: 0.01, label: "As2 mod (cortante 2)", folder: "Property Modifiers" },
    As3_mod: { default: 1.0, min: 0, max: 1, step: 0.01, label: "As3 mod (cortante 3)", folder: "Property Modifiers" },
    J_mod:   { default: 1.0, min: 0, max: 1, step: 0.01, label: "Torsion mod (J)", folder: "Property Modifiers" },
    I22_mod: { default: 1.0, min: 0, max: 1, step: 0.01, label: "I22 mod (flexión weak)", folder: "Property Modifiers" },
    I33_mod: { default: 1.0, min: 0, max: 1, step: 0.01, label: "I33 mod (flexión strong)", folder: "Property Modifiers" },
    nSegments: { default: 12, min: 4, max: 50, step: 1, label: "Segmentos viga", folder: "Mesh" },
    exportE2k: { default: 0, boolean: true, label: "📤 Exportar a ETABS .e2k", folder: "Exportar" },
    // Internos para shape compartido (no aplican a viga acero)
    _B_c:     { default: 0.30, label: "(no usar)", folder: "Avanzado" },
    _H_c:     { default: 0.60, label: "(no usar)", folder: "Avanzado" },
    _E_c:     { default: 24.99e6, label: "(no usar)", folder: "Avanzado" },
    _gamma_c: { default: 23.54,   label: "(no usar)", folder: "Avanzado" },
  },
  hasModal: true,

  onParamChange(changedKey, params) {
    if (changedKey === "exportE2k" && params.exportE2k > 0.5) {
      exportBeamE2k(adapt(params), 0);  // matKey=0 (Acero)
      params.exportE2k = 0;
    }
  },

  computedLabels(p) {
    const D = p.D_w, B = p.B_w, TF = p.TF_w, TW = p.TW_w;
    const A = 2 * B * TF + (D - 2 * TF) * TW;
    const Iy = 2 * (B * TF * Math.pow(D / 2 - TF / 2, 2)) +
               (D - 2 * TF) * Math.pow(TW, 3) / 12 +
               2 * B * Math.pow(TF, 3) / 12;
    const q_self = p.gamma_s * A;
    const q_total = q_self + p.q_extra;
    const u_centro_mm = q_total * Math.pow(p.L, 4) / (384 * p.E_s * Iy) * 1000;
    const M_emp = q_total * p.L * p.L / 12;
    const M_centro = q_total * p.L * p.L / 24;
    const V_apoyo = q_total * p.L / 2;
    return {
      "A":               `${(A * 1e4).toFixed(2)} cm²`,
      "I_y (strong)":    `${(Iy * 1e8).toFixed(2)} cm⁴`,
      "EA":              `${(p.E_s * A).toFixed(0)} kN`,
      "EI_y":            `${(p.E_s * Iy).toFixed(0)} kN·m²`,
      "q_self":          `${q_self.toFixed(3)} kN/m`,
      "q_total":         `${q_total.toFixed(3)} kN/m`,
      "u_centro analítico": `${u_centro_mm.toFixed(4)} mm`,
      "M_empotram. analítico": `${M_emp.toFixed(2)} kN·m  (qL²/12)`,
      "M_centro analítico":    `${M_centro.toFixed(2)} kN·m  (qL²/24)`,
      "V_apoyo analítico":     `${V_apoyo.toFixed(2)} kN  (qL/2)`,
    };
  },

  build(p, states) {
    const { sec } = buildFixedFixedBeamModel(adapt(p), states, 0);
    const L = p.L;
    const nSeg = Math.max(2, Math.round(p.nSegments));
    const q_total = sec.q_self + p.q_extra;

    const u_centro = states.deformOutputs.val.deformations?.get(Math.floor(nSeg / 2));
    const r_left = states.deformOutputs.val.reactions?.get(0);
    const r_right = states.deformOutputs.val.reactions?.get(nSeg);

    if (u_centro) {
      const Uz_m = u_centro[2];
      const Uz_analytic_m = -q_total * Math.pow(L, 4) / (384 * sec.E * sec.Iy);
      const dAnalytic = (Uz_m - Uz_analytic_m) / Math.abs(Uz_analytic_m) * 100;
      const M_emp_analytic = q_total * L * L / 12;
      const V_analytic = q_total * L / 2;

      let report = `[Beam ACERO Fixed-Fixed] L=${L}m, ${nSeg} segmentos\n` +
        `  Sección: ${sec.sectionLabel}\n` +
        `  q_total = q_self(${sec.q_self.toFixed(3)}) + q_extra(${p.q_extra}) = ${q_total.toFixed(3)} kN/m\n` +
        `  u_centro = ${formatDisp(Uz_m, 5)}  (analítico ${formatDisp(Uz_analytic_m, 5)}, Δ ${dAnalytic.toFixed(3)}%)\n`;

      if (r_left && r_right) {
        report += `  Reacciones izq: Fz=${formatForce(r_left[2], 3)}  My=${formatMoment(r_left[4], 3)}  (esperado V=${formatForce(V_analytic, 3)}, M=${formatMoment(M_emp_analytic, 3)})\n` +
                  `  Reacciones der: Fz=${formatForce(r_right[2], 3)}  My=${formatMoment(r_right[4], 3)}\n`;
      }
      console.log(report);
    }
  },

  runModal(p, states, modalPanel) {
    if (!states.nodes.val.length) return;
    try {
      const out = modalAnalysis(
        states.nodes.val, states.elements.val,
        states.nodeInputs.val, states.elementInputs.val, 3,
      );
      console.log(
        `[Beam Acero — Modal] 3 primeros modos:\n` +
        out.frequencies.map((f, i) =>
          `  Modo ${i + 1}: f = ${f.toFixed(3)} Hz   T = ${(1 / f).toFixed(4)} s`
        ).join("\n")
      );
      if (modalPanel?.render) {
        modalPanel.render(out, {
          title: `Beam ACERO L=${p.L}m  W${(p.D_w * 1000).toFixed(0)}×${(p.B_w * 1000).toFixed(0)}mm`,
          properties: [`E=${(p.E_s / 1e6).toFixed(1)} GPa  γ=${p.gamma_s.toFixed(2)} kN/m³`],
        });
      }
    } catch (e: any) {
      console.error("[Beam Acero Modal] error:", e.message);
    }
  },
};

function adapt(p: Record<string, number>): any {
  return {
    L: p.L,
    D_w: p.D_w, B_w: p.B_w, TF_w: p.TF_w, TW_w: p.TW_w,
    B_c: p._B_c ?? 0.30, H_c: p._H_c ?? 0.60,
    E_s: p.E_s, E_c: p._E_c ?? 24.99e6,
    gamma_s: p.gamma_s, gamma_c: p._gamma_c ?? 23.54,
    q_extra: p.q_extra,
    A_mod: p.A_mod, As2_mod: p.As2_mod, As3_mod: p.As3_mod,
    J_mod: p.J_mod, I22_mod: p.I22_mod, I33_mod: p.I33_mod,
    nSegments: p.nSegments,
  };
}
