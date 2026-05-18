/**
 * 🎯 W2 Viga Axial COMPUESTA ENCASED (SRC) Cantilever (1 DOF) — validación
 * cruzada con ETABS exacta (Δ=0.000%).
 *
 * Sección compuesta SRC (Steel Reinforced Concrete) — Concrete Encasement
 * Rectangle en ETABS: bloque rectangular de hormigón con perfil I de acero
 * embebido dentro. Diferente a la versión "composite-slab" que tiene losa
 * colaborante encima.
 *
 * Setup (matchea W2_viga_compuesta_template.EDB editado en ETABS por usuario):
 *   - Geometría: viga horizontal L=3 m, POINT 1 empotrado, POINT 2 libre
 *   - Encasement exterior: D=0.90 m × B=0.60 m → A_outer = 0.54 m²
 *   - Steel I embedded (IPE 300 custom): D=0.30, B=0.15, TF=0.0107, TW=0.0071
 *     → A_steel = 2·B·TF + (D-2·TF)·TW = 0.00519 m² (51.88 cm²)
 *   - A_concrete_net = A_outer - A_steel = 0.53481 m²
 *   - Materiales: Steel A572Gr50 (E_s=200 GPa) + Conc 25 MPa (E_c=24.98 GPa)
 *   - n = E_s/E_c = 200/24.98 = 8.006
 *   - SELFWEIGHT = 0 (pattern Live, sin peso propio → 1 DOF puro axial)
 *   - Carga Fx = 100 kN puntual en POINT 2
 *
 * Método transformed-section a steel-equivalent (AISC 360 §I):
 *   A_eq = A_s + A_c / n = 0.00519 + 0.53481/8.006 = 0.07199 m² (719.86 cm²)
 *   u_x = P·L / (E_s · A_eq) = 100·3 / (200e6 · 0.07199) = 0.02084 mm
 *
 * Validado contra ETABS: Δ = +0.000 % ✅
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const E_S = 200e6;    // kN/m² acero
const nu_S = 0.3;
const G_S = E_S / (2 * (1 + nu_S));
const rho_S = 7849.0;

export const vigaAxialCompositeEncasedCantilever: ExampleDef = {
  id: "W2_viga_axial_composite_encased_cantilever",
  name: "Viga axial Compuesta SRC Encased cantilever (1 DOF)",
  category: "🏁 Benchmarks · 1️⃣ Frames · 🏗 Vigas · 🎯 1 DOF Axial",
  benchmark: true,
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  guide: [
    "Viga compuesta SRC (Steel Reinforced Concrete) — bloque hormigón con I steel embebido.",
    "Diferente a composite-slab (que tiene losa colaborante encima).",
    "Validado contra ETABS Concrete Encasement Rectangle: Δ=0.000%.",
    "Defaults: outer 0.9×0.6 m, IPE 300 embed, n=8.006, P=100 kN, L=3 m.",
    "Esperado: u_x = P·L/(E_s·A_eq) = 0.02084 mm.",
  ],
  params: {
    L:      { default: 3.0,    min: 0.5, max: 10.0, step: 0.1,    label: "Longitud L (m)",         folder: "Geometría" },
    // Encasement exterior
    D_out:  { default: 0.90,   min: 0.30, max: 2.00, step: 0.05,  label: "D outer encasement (m)", folder: "Encasement" },
    B_out:  { default: 0.60,   min: 0.20, max: 2.00, step: 0.05,  label: "B outer encasement (m)", folder: "Encasement" },
    // Steel I embedded (IPE 300 custom)
    D_st:   { default: 0.30,   min: 0.10, max: 0.60, step: 0.005, label: "D Steel I (m)",          folder: "Steel I embedded" },
    B_st:   { default: 0.15,   min: 0.05, max: 0.40, step: 0.005, label: "B Steel flange (m)",     folder: "Steel I embedded" },
    TF_st:  { default: 0.0107, min: 0.005, max: 0.05, step: 0.0005, label: "TF flange thick (m)",  folder: "Steel I embedded" },
    TW_st:  { default: 0.0071, min: 0.003, max: 0.03, step: 0.0005, label: "TW web thick (m)",     folder: "Steel I embedded" },
    // Materiales
    E_s:    { default: 200e6,   min: 150e6, max: 220e6, step: 5e6, label: "E acero (kN/m²)",       folder: "Materiales" },
    E_c:    { default: 24.98e6, min: 15e6, max: 40e6, step: 1e6,   label: "E hormigón (kN/m²)",    folder: "Materiales" },
    // Análisis
    nElem:  { default: 1,      min: 1, max: 20, step: 1,           label: "N° elementos",          folder: "Malla" },
    Fx:     { default: 100,    min: -500, max: 500, step: 5,       label: "Fx axial (kN)",         folder: "Cargas", unitType: "force" },
  },
  computedLabels(p) {
    const h_web = p.D_st - 2 * p.TF_st;
    const A_s = 2 * p.B_st * p.TF_st + h_web * p.TW_st;
    const A_outer = p.D_out * p.B_out;
    const A_c = A_outer - A_s;
    const n = p.E_s / p.E_c;
    const A_eq = A_s + A_c / n;
    const u_ana = (p.Fx * p.L) / (p.E_s * A_eq) * 1000;
    return {
      "A outer (D·B)":     `${(A_outer*1e4).toFixed(2)} cm²`,
      "A_steel (IPE)":     `${(A_s*1e4).toFixed(2)} cm²`,
      "A_concrete neto":   `${(A_c*1e4).toFixed(2)} cm²`,
      "n = E_s/E_c":       n.toFixed(3),
      "A_eq (steel-eq)":   `${(A_eq*1e4).toFixed(2)} cm²`,
      "EA_eq":             `${(p.E_s*A_eq).toFixed(0)} kN`,
      "u_x analítico":     `${u_ana.toFixed(5)} mm`,
    };
  },
  build(p, states) {
    const h_web = p.D_st - 2 * p.TF_st;
    const A_s = 2 * p.B_st * p.TF_st + h_web * p.TW_st;
    const A_outer = p.D_out * p.B_out;
    const A_c = A_outer - A_s;
    const n = p.E_s / p.E_c;
    const A_eq = A_s + A_c / n;
    // I y J transformados (para completeness — no afectan análisis 1 DOF axial)
    // Outer rectangle I: B·D³/12 (encasement como rect sólido en hormigón)
    const I_outer_concrete = (p.B_out * p.D_out ** 3 / 12) - (p.B_st * p.D_st ** 3 / 12);
    const I_steel = 2 * (p.B_st * p.TF_st ** 3 / 12 + p.B_st * p.TF_st * ((p.D_st - p.TF_st) / 2) ** 2)
                  + p.TW_st * h_web ** 3 / 12;
    const I_eq = I_steel + I_outer_concrete / n;
    const J_eq = (p.B_out * p.D_out ** 3) / 12 * 0.3;  // aproximación
    const As2 = p.D_st * p.TW_st + A_c / n;
    const G = p.E_s / (2 * (1 + nu_S));

    const nElem = Math.max(1, Math.round(p.nElem));
    const dL = p.L / nElem;
    const nodes: Node[] = [];
    for (let i = 0; i <= nElem; i++) nodes.push([dL * i, 0, 0]);
    const elements: Element[] = [];
    for (let i = 0; i < nElem; i++) elements.push([i, i + 1]);

    const supports = new Map<number,[boolean,boolean,boolean,boolean,boolean,boolean]>([
      [0, [true, true, true, true, true, true]],
    ]);
    // Solo carga axial puntual (NO peso propio → 1 DOF)
    const loads = new Map<number,[number,number,number,number,number,number]>([
      [nElem, [p.Fx, 0, 0, 0, 0, 0]],
    ]);

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
      elasticities.set(i, p.E_s);   // Material steel (transformed-section)
      shearModuli.set(i, G);
      areas.set(i, A_eq);           // Área composite transformada
      Iy_map.set(i, I_eq);
      Iz_map.set(i, I_eq);
      J_map.set(i, J_eq);
      As2map.set(i, As2);
      densities.set(i, rho_S);      // Solo info de masa
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

    const u_ana = (p.Fx * p.L) / (p.E_s * A_eq);
    const u_fem = deformOut.deformations?.get(nElem)?.[0] ?? 0;
    const diff = u_ana !== 0 ? (u_fem - u_ana) / u_ana * 100 : 0;
    console.log(
      `[W2 Viga axial COMPUESTA SRC Encased] L=${p.L}m  outer=${p.D_out*100}×${p.B_out*100}cm  P=${p.Fx}kN\n` +
      `  A_s=${(A_s*1e4).toFixed(2)} cm²  A_c=${(A_c*1e4).toFixed(0)} cm²  n=${n.toFixed(2)}\n` +
      `  A_eq=${(A_eq*1e4).toFixed(2)} cm² (steel-eq)  EA=${(p.E_s*A_eq).toFixed(0)} kN\n` +
      `  u_x analítico  = ${(u_ana*1000).toFixed(5)} mm\n` +
      `  u_x hekatan    = ${(u_fem*1000).toFixed(5)} mm  (Δ ${diff.toFixed(4)}%)\n` +
      `  ETABS validado = 0.02084 mm  (Δ +0.000%)`
    );
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val, elements = states.elements.val;
    const ni = states.nodeInputs.val, ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ni.supports?.size || !ei.densities?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 6);
      modalPanel.render(out, {
        title: `W2 Viga axial Compuesta SRC Encased L=${p.L}m`,
        properties: [
          `Outer ${(p.D_out*100).toFixed(0)}×${(p.B_out*100).toFixed(0)} cm + IPE embed ${(p.D_st*1000).toFixed(0)}×${(p.B_st*1000).toFixed(0)} mm`,
          `n=${(p.E_s/p.E_c).toFixed(2)}  transformed-section steel-equivalent (sin peso propio)`,
        ],
      });
    } catch (e: any) { console.warn("Modal W2 axial composite encased error:", e.message); }
  },
};
