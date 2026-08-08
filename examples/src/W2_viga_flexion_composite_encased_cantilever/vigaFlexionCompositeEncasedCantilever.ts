/**
 * 🎯 W2 Viga Flexión COMPUESTA SRC Encased Cantilever (2 DOF: Uz + Ry).
 *
 * Sección compuesta SRC (Steel Reinforced Concrete) — bloque rectangular
 * de hormigón con perfil I de acero embebido al centro.
 *
 * Setup:
 *   - Viga horizontal cantilever L=3 m, peso propio (gravity, Z-).
 *   - Outer encasement: D_out=0.90 (depth) × B_out=0.60 m
 *   - Steel I embedded centrado: h=0.30, B=0.15, TF=0.0107, TW=0.0071 m
 *   - Materiales: Steel A572Gr50 (E_s=200 GPa, γ_s=76.97 kN/m³)
 *                 Conc 25 MPa     (E_c=24.98 GPa, γ_c=23.56 kN/m³)
 *   - n = E_s/E_c = 8.007
 *
 * Transformed-section (todo a steel-eq):
 *   • A_s, I_s strong (steel I)
 *   • A_c_net = D_out·B_out − A_s
 *   • I_c_net ≈ B_out·D_out³/12 − B_st·D_st³/12 (concrete neto sobre centroide)
 *   • I_eq = I_s + I_c_net/n  (ambos centrados en D_out/2, no hay parallel axis)
 *
 * Peso propio REAL (NO transformado):
 *   q = γ_s·A_s + γ_c·A_c_net
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { getActiveSelfWeightMultiplier } from "../shared/loadCaseHelpers";

const nu_S = 0.3;

export const vigaFlexionCompositeEncasedCantilever: ExampleDef = {
  id: "W2_viga_flexion_composite_encased_cantilever",
  name: "Viga flexión Compuesta SRC Encased cantilever (2 DOF)",
  category: "🏁 Benchmarks · 1️⃣ Frames · 🏗 Vigas · 🎯 2 DOF Flexión",
  benchmark: true,
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  guide: [
    "Viga compuesta SRC (Steel Reinforced Concrete) bajo peso propio.",
    "Bloque hormigón 90×60 cm con perfil I steel embebido al centro.",
    "Diferente del composite-slab (que tiene losa colaborante encima).",
    "Método transformed-section a steel-equivalent (AISC 360 §I).",
    "Peso propio REAL = γ_s·A_s + γ_c·A_c (NO transformado).",
  ],
  params: {
    L:      { default: 3.0,    min: 0.5, max: 10.0, step: 0.1,    label: "L (m)",                folder: "Geometría" },
    D_out:  { default: 0.90,   min: 0.30, max: 2.00, step: 0.05,  label: "D outer (m)",          folder: "Encasement" },
    B_out:  { default: 0.60,   min: 0.20, max: 2.00, step: 0.05,  label: "B outer (m)",          folder: "Encasement" },
    h_st:   { default: 0.30,   min: 0.10, max: 0.60, step: 0.005, label: "h Steel I (m)",       folder: "Steel I embedded" },
    B_st:   { default: 0.15,   min: 0.05, max: 0.40, step: 0.005, label: "B flange (m)",        folder: "Steel I embedded" },
    TF_st:  { default: 0.0107, min: 0.005, max: 0.05, step: 0.0005, label: "TF flange (m)",     folder: "Steel I embedded" },
    TW_st:  { default: 0.0071, min: 0.003, max: 0.03, step: 0.0005, label: "TW web (m)",        folder: "Steel I embedded" },
    E_s:    { default: 200e6,   min: 150e6, max: 220e6, step: 5e6, label: "E acero (kN/m²)",     folder: "Materiales" },
    E_c:    { default: 24.98e6, min: 15e6, max: 40e6, step: 1e6,   label: "E hormigón (kN/m²)",  folder: "Materiales" },
    gamma_s:{ default: 76.97,  min: 60, max: 90, step: 0.5,        label: "γ acero (kN/m³)",     folder: "Materiales" },
    gamma_c:{ default: 23.56,  min: 18, max: 28, step: 0.5,        label: "γ hormigón (kN/m³)",  folder: "Materiales" },
    nElem:  { default: 10,     min: 2, max: 40, step: 1,           label: "N° elementos",        folder: "Malla" },
  },
  computedLabels(p) {
    const h_web = p.h_st - 2 * p.TF_st;
    const A_s = 2 * p.B_st * p.TF_st + h_web * p.TW_st;
    const A_outer = p.D_out * p.B_out;
    const A_c = A_outer - A_s;
    const n = p.E_s / p.E_c;
    const A_eq = A_s + A_c / n;
    // I_s strong axis (sobre centroide del steel I, que coincide con centroide del outer)
    const I_s = 2 * (p.B_st * p.TF_st ** 3 / 12 + p.B_st * p.TF_st * ((p.h_st - p.TF_st) / 2) ** 2)
              + p.TW_st * h_web ** 3 / 12;
    // I_concrete neto = I_outer_rect − I_steel_envelope (aprox: rectángulo que envuelve al steel)
    const I_outer = p.B_out * p.D_out ** 3 / 12;
    const I_steel_envelope = p.B_st * p.h_st ** 3 / 12;
    const I_c = I_outer - I_steel_envelope;
    const I_eq = I_s + I_c / n;
    const As_eq = A_s + A_c / n;  // approx shear area = A_eq (composite homogénea)
    const G_s = p.E_s / (2 * (1 + nu_S));
    // Peso propio REAL
    const q = p.gamma_s * A_s + p.gamma_c * A_c;
    const w_EB    = q * p.L ** 4 / (8 * p.E_s * I_eq);
    const w_shear = q * p.L ** 2 / (2 * G_s * As_eq);
    const w_total = (w_EB + w_shear) * 1000;
    const M_base = q * p.L ** 2 / 2;
    const V_base = q * p.L;
    return {
      "n = E_s/E_c":      n.toFixed(3),
      "A_s":              `${(A_s*1e4).toFixed(2)} cm²`,
      "A_c":              `${(A_c*1e4).toFixed(2)} cm²`,
      "A_eq":             `${(A_eq*1e4).toFixed(2)} cm²`,
      "I_s strong":       `${(I_s*1e8).toFixed(2)} cm⁴`,
      "I_c neto":         `${(I_c*1e8).toFixed(2)} cm⁴`,
      "I_eq (steel-eq)":  `${(I_eq*1e8).toFixed(2)} cm⁴`,
      "q peso propio":    `${q.toFixed(3)} kN/m`,
      "M_base":           `${M_base.toFixed(2)} kN·m`,
      "V_base":           `${V_base.toFixed(3)} kN`,
      "w_tip EB":         `${(w_EB*1000).toFixed(5)} mm`,
      "w_tip + shear":    `${w_total.toFixed(5)} mm`,
    };
  },
  build(p, states) {
    const h_web = p.h_st - 2 * p.TF_st;
    const A_s = 2 * p.B_st * p.TF_st + h_web * p.TW_st;
    const A_outer = p.D_out * p.B_out;
    const A_c = A_outer - A_s;
    const n = p.E_s / p.E_c;
    const A_eq = A_s + A_c / n;
    const I_s = 2 * (p.B_st * p.TF_st ** 3 / 12 + p.B_st * p.TF_st * ((p.h_st - p.TF_st) / 2) ** 2)
              + p.TW_st * h_web ** 3 / 12;
    const I_outer = p.B_out * p.D_out ** 3 / 12;
    const I_steel_envelope = p.B_st * p.h_st ** 3 / 12;
    const I_c = I_outer - I_steel_envelope;
    const I_eq = I_s + I_c / n;
    const As_eq = A_eq;
    const J_eq = (p.B_out * p.D_out ** 3) / 12 * 0.3;
    const G_s = p.E_s / (2 * (1 + nu_S));
    const q_real = p.gamma_s * A_s + p.gamma_c * A_c;

    // SW multiplier del case activo (Dead=1, Live=0, Modal=0)
    const swMult = getActiveSelfWeightMultiplier(states);
    const q = q_real * swMult;

    const nElem = Math.max(2, Math.round(p.nElem));
    const dL = p.L / nElem;
    const nodes: Node[] = [];
    for (let i = 0; i <= nElem; i++) nodes.push([dL * i, 0, 0]);
    const elements: Element[] = [];
    for (let i = 0; i < nElem; i++) elements.push([i, i + 1]);

    const supports = new Map<number,[boolean,boolean,boolean,boolean,boolean,boolean]>([
      [0, [true, true, true, true, true, true]],
    ]);
    const loads = new Map<number,[number,number,number,number,number,number]>();
    for (let i = 0; i <= nElem; i++) {
      const isEnd = (i === 0 || i === nElem);
      const fz = -q * dL * (isEnd ? 0.5 : 1.0);
      loads.set(i, [0, 0, fz, 0, 0, 0]);
    }

    const rho_eq = q_real / (A_eq * 9.80665) * 1000;

    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iy_map = new Map<number, number>();
    const Iz_map = new Map<number, number>();
    const J_map = new Map<number, number>();
    const As2map = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    for (let i = 0; i < elements.length; i++) {
      elasticities.set(i, p.E_s);
      shearModuli.set(i, G_s);
      areas.set(i, A_eq);
      Iy_map.set(i, I_eq);
      Iz_map.set(i, I_eq);
      J_map.set(i, J_eq);
      As2map.set(i, As_eq);
      densities.set(i, rho_eq);
      poissons.set(i, nu_S);
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaZ: Iy_map, momentsOfInertiaY: Iz_map, torsionalConstants: J_map,
      shearAreasY: As2map,
      densities, poissonsRatios: poissons,
    };

    const deformOut = deform(nodes, elements, states.nodeInputs.val, states.elementInputs.val);
    states.deformOutputs.val = deformOut;
    states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, deformOut);
    states.objects3D.val = [];

    const w_EB_m    = q * p.L ** 4 / (8 * p.E_s * I_eq);
    const w_shear_m = q * p.L ** 2 / (2 * G_s * As_eq);
    const w_tot_m   = w_EB_m + w_shear_m;
    const w_fem = deformOut.deformations?.get(nElem)?.[2] ?? 0;
    const diff = Math.abs(w_tot_m) > 1e-15 ? (Math.abs(w_fem) - w_tot_m) / w_tot_m * 100 : 0;
    console.log(
      `[W2 Viga flexión COMPUESTA SRC Encased] L=${p.L}m  outer=${p.D_out*100}×${p.B_out*100}cm  SWmult=${swMult}\n` +
      `  A_eq=${(A_eq*1e4).toFixed(2)} cm²  I_eq=${(I_eq*1e8).toFixed(2)} cm⁴  q=${q.toFixed(4)} kN/m\n` +
      `  w_tip EB     = ${(w_EB_m*1000).toFixed(5)} mm\n` +
      `  w_tip Tim    = ${(w_tot_m*1000).toFixed(5)} mm\n` +
      `  w_tip hekatan= ${(w_fem*1000).toFixed(5)} mm  (Δ ${diff.toFixed(4)}%)`
    );
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val, elements = states.elements.val;
    const ni = states.nodeInputs.val, ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ni.supports?.size || !ei.densities?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 6);
      modalPanel.render(out, {
        title: `W2 Viga flexión Compuesta SRC Encased L=${p.L}m`,
        properties: [
          `Outer ${(p.D_out*100).toFixed(0)}×${(p.B_out*100).toFixed(0)} cm + IPE ${(p.h_st*1000).toFixed(0)}×${(p.B_st*1000).toFixed(0)} mm`,
          `n=${(p.E_s/p.E_c).toFixed(2)}  transformed-section`,
        ],
      });
    } catch (e: any) { console.warn("Modal W2 flex composite encased error:", e.message); }
  },
};
