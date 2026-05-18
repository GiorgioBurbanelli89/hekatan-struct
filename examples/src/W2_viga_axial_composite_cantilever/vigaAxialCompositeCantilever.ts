/**
 * 🎯 W2 Viga Axial COMPUESTA (Steel + Slab) Cantilever (1 DOF).
 *
 * Sección compuesta acero+losa colaborante con método transformed-section
 * (todo transformado a steel-equivalent):
 *   - Steel I (IPE 300): A_s = 5.381e-3 m²
 *   - Losa hormigón: b_eff × t_slab transformada a steel por n = E_s/E_c
 *     A_slab_eq = b_eff·t_slab / n
 *   - A_composite_eq = A_s + A_slab_eq  (en unidades de "acero equivalente")
 *   - Material analítico = Steel (E_s = 200 GPa) con A_composite_eq
 *
 * Setup:
 *   - Viga horizontal en X, L=3 m
 *   - POINT 1 empotrado | POINT 2 libre
 *   - Carga axial Fx = 100 kN puntual en POINT 2
 *   - SIN peso propio (1 DOF puro axial)
 *
 * Resultado esperado:
 *   n = 200/24.98 = 8.007
 *   A_slab = 0.80·0.12 = 0.096 m²  → A_slab_eq = 0.096/8.007 = 0.01199 m²
 *   A_composite_eq = 5.381e-3 + 0.01199 = 0.01737 m²
 *   u_x = P·L/(E_s·A_composite_eq) = 100·3/(200e6·0.01737) = 0.0864 mm
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const E_S = 200e6;   // kN/m² acero
const E_C = 24.98e6; // kN/m² hormigón
const nu_S = 0.3;
const G_S = E_S / (2 * (1 + nu_S));
const rho_S = 7849.0;

export const vigaAxialCompositeCantilever: ExampleDef = {
  id: "W2_viga_axial_composite_cantilever",
  name: "Viga axial Compuesta Slab colaborante (Acero+Losa) cantilever (1 DOF)",
  category: "🏁 Benchmarks · 1️⃣ Frames · 🏗 Vigas · 🎯 1 DOF Axial",
  benchmark: true,
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  guide: [
    "Viga compuesta cantilever Acero (IPE) + Losa colaborante hormigón.",
    "Método transformed-section: losa transformada a steel-equivalent.",
    "1 DOF efectivo (Ux) — peso propio DESACTIVADO.",
    "Defaults: IPE 300 + losa b_eff=80×t=12 cm, n=8.007, P=100 kN, L=3 m.",
    "Esperado: u_x = P·L/(E_s·A_comp_eq) = 0.0864 mm.",
  ],
  params: {
    L:      { default: 3.0,    min: 0.5, max: 10.0, step: 0.1,    label: "L (m)",                folder: "Geometría" },
    // Steel I (IPE 300 custom dims)
    h_st:   { default: 0.30,   min: 0.10, max: 0.60, step: 0.005, label: "h Steel I (m)",        folder: "Steel I" },
    B_st:   { default: 0.15,   min: 0.05, max: 0.40, step: 0.005, label: "B flange (m)",         folder: "Steel I" },
    TF_st:  { default: 0.0107, min: 0.005, max: 0.05, step: 0.0005, label: "TF flange (m)",      folder: "Steel I" },
    TW_st:  { default: 0.0071, min: 0.003, max: 0.03, step: 0.0005, label: "TW web (m)",         folder: "Steel I" },
    // Losa colaborante
    b_eff:  { default: 0.80,   min: 0.20, max: 2.00, step: 0.05,  label: "b_eff losa (m)",       folder: "Losa" },
    t_slab: { default: 0.12,   min: 0.05, max: 0.30, step: 0.01,  label: "t_slab (m)",           folder: "Losa" },
    // Materiales
    E_s:    { default: 200e6,  min: 150e6, max: 220e6, step: 5e6, label: "E acero (kN/m²)",      folder: "Materiales" },
    E_c:    { default: 24.98e6, min: 15e6, max: 40e6, step: 1e6,  label: "E hormigón (kN/m²)",   folder: "Materiales" },
    // Análisis
    nElem:  { default: 1,      min: 1, max: 20, step: 1,           label: "N° elementos",         folder: "Malla" },
    Fx:     { default: 100,    min: -500, max: 500, step: 5,       label: "Fx axial (kN)",        folder: "Cargas", unitType: "force" },
  },
  computedLabels(p) {
    // Sección steel I
    const h_web = p.h_st - 2 * p.TF_st;
    const A_s = 2 * p.B_st * p.TF_st + h_web * p.TW_st;
    // Losa hormigón transformada a steel
    const n = p.E_s / p.E_c;
    const A_slab_real = p.b_eff * p.t_slab;
    const A_slab_eq = A_slab_real / n;
    // Composite total (en steel-equivalent)
    const A_comp_eq = A_s + A_slab_eq;
    // Deflexión analítica
    const u_ana = (p.Fx * p.L) / (p.E_s * A_comp_eq) * 1000;
    return {
      "n = E_s/E_c":        n.toFixed(3),
      "A acero":            `${(A_s*1e4).toFixed(2)} cm²`,
      "A losa real":        `${(A_slab_real*1e4).toFixed(2)} cm²`,
      "A losa eq (steel)":  `${(A_slab_eq*1e4).toFixed(2)} cm²`,
      "A_comp_eq":          `${(A_comp_eq*1e4).toFixed(2)} cm²`,
      "EA_comp_eq":         `${(p.E_s*A_comp_eq).toFixed(0)} kN`,
      "u_x analítico":      `${u_ana.toFixed(5)} mm`,
    };
  },
  build(p, states) {
    const h_web = p.h_st - 2 * p.TF_st;
    const A_s = 2 * p.B_st * p.TF_st + h_web * p.TW_st;
    const n = p.E_s / p.E_c;
    const A_slab_eq = (p.b_eff * p.t_slab) / n;
    const A_comp_eq = A_s + A_slab_eq;
    // I y J no son relevantes para axial puro pero los proveemos
    const d_flange = (p.h_st - p.TF_st) / 2;
    const I_steel = 2 * (p.B_st * p.TF_st ** 3 / 12 + p.B_st * p.TF_st * d_flange ** 2)
                  + p.TW_st * h_web ** 3 / 12;
    const I_slab_eq = (p.b_eff * p.t_slab ** 3 / 12) / n;
    // Composite I sin parallel axis (axial puro no usa I) — aprox suma directa
    const I_comp_eq = I_steel + I_slab_eq;
    const J_eq = (2 * p.B_st * p.TF_st ** 3 + h_web * p.TW_st ** 3) / 3;
    const As2 = p.h_st * p.TW_st;
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
    // Solo carga axial puntual (NO peso propio)
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
      elasticities.set(i, p.E_s);    // Material steel (transformed)
      shearModuli.set(i, G);
      areas.set(i, A_comp_eq);       // Área composite-transformada
      Iy_map.set(i, I_comp_eq);
      Iz_map.set(i, I_comp_eq);
      J_map.set(i, J_eq);
      As2map.set(i, As2);
      densities.set(i, rho_S);       // Solo para mass info
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

    const u_ana = (p.Fx * p.L) / (p.E_s * A_comp_eq);
    const u_fem = deformOut.deformations?.get(nElem)?.[0] ?? 0;
    const diff = u_ana !== 0 ? (u_fem - u_ana) / u_ana * 100 : 0;
    console.log(
      `[W2 Viga axial COMPUESTA] L=${p.L}m  IPE+losa  P=${p.Fx}kN\n` +
      `  A_s=${(A_s*1e4).toFixed(2)} cm²  A_slab_eq=${(A_slab_eq*1e4).toFixed(2)} cm²  A_comp=${(A_comp_eq*1e4).toFixed(2)} cm² (steel-eq)\n` +
      `  u_x analítico = ${(u_ana*1000).toFixed(5)} mm\n` +
      `  u_x hekatan   = ${(u_fem*1000).toFixed(5)} mm  (Δ ${diff.toFixed(4)}%)`
    );
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val, elements = states.elements.val;
    const ni = states.nodeInputs.val, ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ni.supports?.size || !ei.densities?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 6);
      modalPanel.render(out, {
        title: `W2 Viga axial Compuesta L=${p.L}m`,
        properties: [
          `IPE custom h=${(p.h_st*1000).toFixed(0)}×B=${(p.B_st*1000).toFixed(0)}mm + losa b_eff=${(p.b_eff*100).toFixed(0)}×t=${(p.t_slab*100).toFixed(0)}cm`,
          `n=${(p.E_s/p.E_c).toFixed(2)}  (transformed-section steel-equivalent, sin peso propio)`,
        ],
      });
    } catch (e: any) { console.warn("Modal W2 axial composite error:", e.message); }
  },
};
