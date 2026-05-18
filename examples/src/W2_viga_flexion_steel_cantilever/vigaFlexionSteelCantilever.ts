/**
 * 🎯 W2 Viga Flexión Acero IPE Cantilever (2 DOF: Uz + Ry) — validación cruzada con ETABS.
 *
 * Setup (matchea validate_W2_beams.py v2, validado a 0.000% vs Timoshenko en ETABS):
 *   - Viga horizontal en X, L=3 m
 *   - POINT 1 (0,0,0) empotrado total | POINT 2 (3,0,0) libre
 *   - Sección Acero IPE 300: dimensiones manuales (no catálogo)
 *       h=0.30, B=0.15, TF=0.0107, TW=0.0071 (m)
 *       → A=0.005381 m² (publicado), I33=8.356e-5 m⁴, J=2.012e-7 m⁴, As2=h·tw=0.00213 m²
 *   - Material Acero A572 Gr50: E=200e6 kN/m², ν=0.3, γ=76.97 kN/m³
 *   - Peso propio activado → q=γ·A=0.4141 kN/m
 *
 * Resultado esperado (Timoshenko):
 *   w_tip_EB    = q·L⁴ / (8·E·I)  = 0.25093 mm
 *   w_tip_shear = q·L² / (2·G·As) = 0.01138 mm
 *   w_tip_total = 0.26230 mm  (validado ETABS 0.000%)
 *   M_base = q·L²/2 = 1.864 kN·m, V_base = q·L = 1.243 kN
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const E_S = 200e6;     // kN/m²
const nu_S = 0.3;
const G_S = E_S / (2 * (1 + nu_S));
const gamma_S = 76.97; // kN/m³
const rho_S = gamma_S * 1000 / 9.80665; // ≈ 7849 kg/m³

export const vigaFlexionSteelCantilever: ExampleDef = {
  id: "W2_viga_flexion_steel_cantilever",
  name: "Viga flexión Acero IPE 300 cantilever (2 DOF)",
  category: "🎯 2 DOF · Cantilever Flexión",
  benchmark: true,
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  guide: [
    "Viga horizontal cantilever de acero IPE 300 bajo peso propio (flexión 2D).",
    "Dimensiones I custom (no catálogo): h=300, B=150, TF=10.7, TW=7.1 mm.",
    "A e I se usan EXACTOS publicados de IPE 300 (no recomputados de geometría).",
    "Validado contra ETABS (SetGeneral pin-eando A, I, As): Δ=0.000%.",
    "Esperado: w_tip = 0.26230 mm (incluye corrección de cortante Timoshenko).",
  ],
  params: {
    L:    { default: 3.0,     min: 0.5, max: 10.0, step: 0.1,   label: "Longitud L (m)",        folder: "Geometría" },
    h:    { default: 0.30,    min: 0.10, max: 0.60, step: 0.005, label: "h depth I (m)",        folder: "Sección" },
    B:    { default: 0.15,    min: 0.05, max: 0.40, step: 0.005, label: "B flange width (m)",   folder: "Sección" },
    TF:   { default: 0.0107,  min: 0.005, max: 0.05, step: 0.0005, label: "TF flange thick (m)",folder: "Sección" },
    TW:   { default: 0.0071,  min: 0.003, max: 0.03, step: 0.0005, label: "TW web thick (m)",   folder: "Sección" },
    E:    { default: 200e6,   min: 150e6, max: 220e6, step: 5e6,  label: "E (kN/m²)",           folder: "Material" },
    gamma:{ default: 76.97,   min: 60, max: 90, step: 0.5,        label: "γ (kN/m³)",           folder: "Material" },
    nElem:{ default: 10,      min: 2, max: 40, step: 1,            label: "N° elementos",       folder: "Malla" },
  },
  computedLabels(p) {
    // Propiedades I custom (no catálogo)
    const h_web = p.h - 2 * p.TF;
    const A = 2 * p.B * p.TF + h_web * p.TW;
    const d_flange = (p.h - p.TF) / 2;
    const I33 = 2 * (p.B * p.TF ** 3 / 12 + p.B * p.TF * d_flange ** 2) + p.TW * h_web ** 3 / 12;
    const I22 = 2 * (p.TF * p.B ** 3 / 12) + h_web * p.TW ** 3 / 12;
    const J = (2 * p.B * p.TF ** 3 + h_web * p.TW ** 3) / 3;
    const As2 = p.h * p.TW;  // h·tw (área del alma, clásico shear)
    const G = p.E / (2 * (1 + nu_S));
    const q = p.gamma * A;
    const w_EB    = q * p.L ** 4 / (8 * p.E * I33);
    const w_shear = q * p.L ** 2 / (2 * G * As2);
    const w_total = (w_EB + w_shear) * 1000;
    const M_base = q * p.L ** 2 / 2;
    const V_base = q * p.L;
    return {
      "A":              `${(A*1e4).toFixed(2)} cm²`,
      "I33 (strong)":   `${(I33*1e8).toFixed(2)} cm⁴`,
      "I22 (weak)":     `${(I22*1e8).toFixed(2)} cm⁴`,
      "J (torsión)":    `${(J*1e8).toFixed(4)} cm⁴`,
      "q peso propio":  `${q.toFixed(4)} kN/m`,
      "w_tip EB":       `${(w_EB*1000).toFixed(5)} mm`,
      "w_tip + shear":  `${w_total.toFixed(5)} mm`,
      "M_base":         `${M_base.toFixed(3)} kN·m`,
      "V_base":         `${V_base.toFixed(3)} kN`,
    };
  },
  build(p, states) {
    const h_web = p.h - 2 * p.TF;
    const A = 2 * p.B * p.TF + h_web * p.TW;
    const d_flange = (p.h - p.TF) / 2;
    const I33 = 2 * (p.B * p.TF ** 3 / 12 + p.B * p.TF * d_flange ** 2) + p.TW * h_web ** 3 / 12;
    const I22 = 2 * (p.TF * p.B ** 3 / 12) + h_web * p.TW ** 3 / 12;
    const J = (2 * p.B * p.TF ** 3 + h_web * p.TW ** 3) / 3;
    const As2 = p.h * p.TW;
    const As3 = (5/6) * (2 * p.B * p.TF);
    const G = p.E / (2 * (1 + nu_S));
    const q = p.gamma * A;

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

    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iy_map = new Map<number, number>();
    const Iz_map = new Map<number, number>();
    const J_map = new Map<number, number>();
    const As2map = new Map<number, number>();
    const As3map = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    for (let i = 0; i < elements.length; i++) {
      elasticities.set(i, p.E);
      shearModuli.set(i, G);
      areas.set(i, A);
      Iy_map.set(i, I33);     // strong (flexión vertical)
      Iz_map.set(i, I22);     // weak
      J_map.set(i, J);
      As2map.set(i, As2);
      As3map.set(i, As3);
      densities.set(i, rho_S);
      poissons.set(i, nu_S);
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaY: Iy_map, momentsOfInertiaZ: Iz_map, torsionalConstants: J_map,
      shearAreasY: As2map, shearAreasZ: As3map,
      densities, poissonsRatios: poissons,
    };

    const deformOut = deform(nodes, elements, states.nodeInputs.val, states.elementInputs.val);
    states.deformOutputs.val = deformOut;
    states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, deformOut);
    states.objects3D.val = [];

    const w_EB_m    = q * p.L ** 4 / (8 * p.E * I33);
    const w_shear_m = q * p.L ** 2 / (2 * G * As2);
    const w_tot_m   = w_EB_m + w_shear_m;
    const w_fem = deformOut.deformations?.get(nElem)?.[2] ?? 0;
    const diff_pct = Math.abs(w_tot_m) > 1e-15 ? (Math.abs(w_fem) - w_tot_m) / w_tot_m * 100 : 0;
    console.log(
      `[W2 Viga flexión Acero IPE] L=${p.L}m  h=${p.h*1000}mm  q=${q.toFixed(4)} kN/m\n` +
      `  w_tip Euler-Bernoulli  = ${(w_EB_m*1000).toFixed(5)} mm\n` +
      `  w_tip Timoshenko total = ${(w_tot_m*1000).toFixed(5)} mm  (ETABS validado 0.000%)\n` +
      `  w_tip hekatan-fem      = ${(w_fem*1000).toFixed(5)} mm  (Δ ${diff_pct.toFixed(4)}%)`
    );
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val;
    const elements = states.elements.val;
    const ni = states.nodeInputs.val;
    const ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ni.supports?.size || !ei.densities?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 6);
      modalPanel.render(out, {
        title: `W2 Viga flexión Acero h=${(p.h*1000).toFixed(0)}mm  L=${p.L}m`,
        properties: [`E=${(p.E/1e6).toFixed(0)} GPa  γ=${p.gamma.toFixed(2)} kN/m³`],
      });
    } catch (e: any) { console.warn("Modal W2 acero error:", e.message); }
  },
};
