/**
 * 🎯 W2 Viga Flexión COMPUESTA Slab Cantilever (2 DOF: Uz + Ry).
 *
 * Sección compuesta acero-hormigón con losa colaborante encima del perfil I.
 * Transformed-section method (AISC 360-16 §I) a steel-equivalent.
 *
 * Setup:
 *   - Viga horizontal cantilever L=3 m, peso propio (gravity, Z-).
 *   - Steel I (IPE 300 custom): h=0.30, B=0.15, TF=0.0107, TW=0.0071 m
 *   - Losa colaborante encima: b_eff=0.80 × t_slab=0.12 m
 *   - Materiales: Steel A572Gr50 (E_s=200 GPa, γ_s=76.97 kN/m³)
 *                 Conc 25 MPa     (E_c=24.98 GPa, γ_c=23.56 kN/m³)
 *   - n = E_s/E_c = 8.007
 *
 * Transformed-section (todo a steel-eq):
 *   • A_s = 2·B·TF + (h-2TF)·TW = 0.00538 m²
 *   • A_c_real = b_eff·t_slab = 0.096 m²
 *   • A_eq = A_s + A_c_real/n = 0.0173 m²
 *   • Centroide compuesto y_c (medido desde fibra inferior de steel)
 *   • I_eq con parallel axis theorem
 *
 * Peso propio REAL (NO transformado):
 *   q = γ_s·A_s + γ_c·A_c_real = 76.97·0.00538 + 23.56·0.096 ≈ 2.677 kN/m
 *
 * Resultado esperado (Timoshenko):
 *   w_tip = q·L⁴/(8·E_s·I_eq) + q·L²/(2·G_s·As_eq)
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";
import { getActiveSelfWeightMultiplier } from "../shared/loadCaseHelpers";

const nu_S = 0.3;

export const vigaFlexionCompositeSlabCantilever: ExampleDef = {
  id: "W2_viga_flexion_composite_slab_cantilever",
  name: "Viga flexión Compuesta Slab colaborante cantilever (2 DOF)",
  category: "🏁 Benchmarks · 1️⃣ Frames · 🏗 Vigas · 🎯 2 DOF Flexión",
  benchmark: true,
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  guide: [
    "Viga compuesta acero-hormigón con losa colaborante encima del perfil I.",
    "Cantilever horizontal bajo peso propio (2 DOF: Uz + Ry).",
    "Método transformed-section a steel-equivalent (AISC 360-16 §I).",
    "El peso propio es la suma REAL (no transformada): γ_s·A_s + γ_c·A_c_real.",
    "Defaults: IPE 300 + losa b_eff=80×t=12 cm, L=3 m.",
  ],
  params: {
    L:      { default: 3.0,    min: 0.5, max: 10.0, step: 0.1,    label: "L (m)",            folder: "Geometría" },
    h_st:   { default: 0.30,   min: 0.10, max: 0.60, step: 0.005, label: "h Steel I (m)",   folder: "Steel I" },
    B_st:   { default: 0.15,   min: 0.05, max: 0.40, step: 0.005, label: "B flange (m)",    folder: "Steel I" },
    TF_st:  { default: 0.0107, min: 0.005, max: 0.05, step: 0.0005, label: "TF flange (m)", folder: "Steel I" },
    TW_st:  { default: 0.0071, min: 0.003, max: 0.03, step: 0.0005, label: "TW web (m)",    folder: "Steel I" },
    b_eff:  { default: 0.80,   min: 0.20, max: 2.00, step: 0.05,  label: "b_eff losa (m)",  folder: "Losa" },
    t_slab: { default: 0.12,   min: 0.05, max: 0.30, step: 0.01,  label: "t_slab (m)",      folder: "Losa" },
    E_s:    { default: 200e6,   min: 150e6, max: 220e6, step: 5e6, label: "E acero (kN/m²)",   folder: "Materiales" },
    E_c:    { default: 24.98e6, min: 15e6, max: 40e6, step: 1e6,   label: "E hormigón (kN/m²)",folder: "Materiales" },
    gamma_s:{ default: 76.97,  min: 60, max: 90, step: 0.5,        label: "γ acero (kN/m³)",   folder: "Materiales" },
    gamma_c:{ default: 23.56,  min: 18, max: 28, step: 0.5,        label: "γ hormigón (kN/m³)",folder: "Materiales" },
    nElem:  { default: 10,     min: 2, max: 40, step: 1,           label: "N° elementos",      folder: "Malla" },
  },
  computedLabels(p) {
    const h_web = p.h_st - 2 * p.TF_st;
    const A_s = 2 * p.B_st * p.TF_st + h_web * p.TW_st;
    const A_c = p.b_eff * p.t_slab;
    const n = p.E_s / p.E_c;
    const A_eq = A_s + A_c / n;
    // Centroide compuesto: y desde fibra inferior del steel I (h_st abajo)
    // Steel centroid: y_s = h_st/2
    // Slab centroid: y_c = h_st + t_slab/2
    // y_comp = (A_s·y_s + (A_c/n)·y_c) / A_eq
    const y_s = p.h_st / 2;
    const y_c = p.h_st + p.t_slab / 2;
    const y_comp = (A_s * y_s + (A_c / n) * y_c) / A_eq;
    // I_eq parallel axis sobre centroide compuesto
    const I_s = 2 * (p.B_st * p.TF_st ** 3 / 12 + p.B_st * p.TF_st * ((p.h_st - p.TF_st) / 2) ** 2)
              + p.TW_st * h_web ** 3 / 12;
    const I_c = p.b_eff * p.t_slab ** 3 / 12;
    const I_eq = (I_s + A_s * (y_comp - y_s) ** 2)
               + (I_c + A_c * (y_comp - y_c) ** 2) / n;
    // Peso propio REAL (no transformado)
    const q = p.gamma_s * A_s + p.gamma_c * A_c;
    const G_s = p.E_s / (2 * (1 + nu_S));
    const As_eq = A_s;  // shear via área del alma para flexión strong axis
    const w_EB    = q * p.L ** 4 / (8 * p.E_s * I_eq);
    const w_shear = q * p.L ** 2 / (2 * G_s * As_eq);
    const w_total = (w_EB + w_shear) * 1000;
    const M_base = q * p.L ** 2 / 2;
    const V_base = q * p.L;
    return {
      "n = E_s/E_c":      n.toFixed(3),
      "A_s":              `${(A_s*1e4).toFixed(2)} cm²`,
      "A_c real":         `${(A_c*1e4).toFixed(2)} cm²`,
      "A_eq (steel-eq)":  `${(A_eq*1e4).toFixed(2)} cm²`,
      "y_centroide":      `${(y_comp*1000).toFixed(1)} mm`,
      "I_eq":             `${(I_eq*1e8).toFixed(2)} cm⁴`,
      "q peso propio":    `${q.toFixed(4)} kN/m`,
      "M_base":           `${M_base.toFixed(3)} kN·m`,
      "V_base":           `${V_base.toFixed(3)} kN`,
      "w_tip EB":         `${(w_EB*1000).toFixed(5)} mm`,
      "w_tip + shear":    `${w_total.toFixed(5)} mm`,
    };
  },
  build(p, states) {
    const h_web = p.h_st - 2 * p.TF_st;
    const A_s = 2 * p.B_st * p.TF_st + h_web * p.TW_st;
    const A_c = p.b_eff * p.t_slab;
    const n = p.E_s / p.E_c;
    const A_eq = A_s + A_c / n;
    const y_s = p.h_st / 2;
    const y_c = p.h_st + p.t_slab / 2;
    const y_comp = (A_s * y_s + (A_c / n) * y_c) / A_eq;
    const I_s = 2 * (p.B_st * p.TF_st ** 3 / 12 + p.B_st * p.TF_st * ((p.h_st - p.TF_st) / 2) ** 2)
              + p.TW_st * h_web ** 3 / 12;
    const I_c = p.b_eff * p.t_slab ** 3 / 12;
    const I_eq = (I_s + A_s * (y_comp - y_s) ** 2)
               + (I_c + A_c * (y_comp - y_c) ** 2) / n;
    const J_eq = (2 * p.B_st * p.TF_st ** 3 + h_web * p.TW_st ** 3) / 3;
    const As_eq = A_s;
    const G_s = p.E_s / (2 * (1 + nu_S));
    const q_real = p.gamma_s * A_s + p.gamma_c * A_c;

    // SW multiplier según case activo (Dead=1, Live=0, Modal=0)
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

    // Densidad efectiva para mass (composite): ρ_eq tal que ρ·A·g = q_real
    const rho_eq = q_real / (A_eq * 9.80665) * 1000;  // kg/m³

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
      momentsOfInertiaY: Iy_map, momentsOfInertiaZ: Iz_map, torsionalConstants: J_map,
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
      `[W2 Viga flexión COMPUESTA Slab] L=${p.L}m  IPE+losa ${(p.b_eff*100).toFixed(0)}×${(p.t_slab*100).toFixed(0)}cm  SWmult=${swMult}\n` +
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
        title: `W2 Viga flexión Compuesta Slab L=${p.L}m`,
        properties: [
          `IPE custom ${(p.h_st*1000).toFixed(0)}×${(p.B_st*1000).toFixed(0)}mm + losa ${(p.b_eff*100).toFixed(0)}×${(p.t_slab*100).toFixed(0)}cm`,
          `n=${(p.E_s/p.E_c).toFixed(2)}  transformed-section`,
        ],
      });
    } catch (e: any) { console.warn("Modal W2 flex composite slab error:", e.message); }
  },
};
