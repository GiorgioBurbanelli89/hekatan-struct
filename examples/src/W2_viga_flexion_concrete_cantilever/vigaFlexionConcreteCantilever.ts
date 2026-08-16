/**
 * 🎯 W2 Viga Flexión Hormigón Cantilever (2 DOF: Uz + Ry) — validación cruzada con ETABS.
 *
 * Setup (matchea validate_W2_beams.py validado a 0.000% vs Timoshenko en ETABS):
 *   - Viga horizontal en X, L=3 m
 *   - POINT 1 (0,0,0) empotrado total | POINT 2 (3,0,0) libre
 *   - Sección rectangular 30×60: b=0.30 m, h=0.60 m
 *     → A=0.18 m², I33=5.4e-3 m⁴, As2=5/6·A=0.15 m²
 *   - Material Hormigón f'c=25 MPa: E=24.98e6 kN/m², ν=0.2, γ=23.56 kN/m³
 *   - Peso propio activado (SELFWEIGHT) → q=γ·A=4.241 kN/m
 *
 * Resultado esperado (cantilever bajo q distribuido, Timoshenko):
 *   w_tip_EB    = q·L⁴ / (8·E·I) = 0.31831 mm
 *   w_tip_shear = q·L² / (2·G·As) = 0.01222 mm
 *   w_tip_total = 0.33054 mm (validado ETABS 0.000%)
 *   M_base = q·L²/2 = 19.084 kN·m, V_base = q·L = 12.722 kN
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const E_C = 24.98e6;   // kN/m²
const nu_C = 0.2;
const G_C = E_C / (2 * (1 + nu_C));
const gamma_C = 23.56; // kN/m³
const rho_C = gamma_C / 9.80665;  // t/m3 de MASA: E va en kN/m2, asi que la masa va en toneladas (kg/m3 pesaba 1000x)

export const vigaFlexionConcreteCantilever: ExampleDef = {
  id: "W2_viga_flexion_concrete_cantilever",
  name: "Viga flexión Hormigón 30×60 cantilever (2 DOF)",
  category: "1️⃣ Frames · 🎯 2 GDL Flexión",
  benchmark: true,
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  guide: [
    "Viga horizontal cantilever de hormigón bajo peso propio (flexión 2D).",
    "2 grados de libertad efectivos: Uz (deflexión vertical) + Ry (rotación).",
    "Validado contra ETABS: Δ=0.000% vs Timoshenko analítico.",
    "Default 30×60 cm × L=3 m. Cambiá b/h para explorar sensibilidad.",
    "Esperado: w_tip = 0.33054 mm (incluye corrección de cortante Timoshenko).",
  ],
  params: {
    L:    { default: 3.0,    min: 0.5, max: 10.0, step: 0.1,  label: "Longitud L (m)",   folder: "Geometría" },
    b:    { default: 0.30,   min: 0.10, max: 0.60, step: 0.01, label: "b ancho (m)",     folder: "Sección" },
    h:    { default: 0.60,   min: 0.20, max: 1.20, step: 0.01, label: "h alto (m)",      folder: "Sección" },
    E:    { default: 24.98e6, min: 15e6, max: 40e6, step: 1e6, label: "E (kN/m²)",       folder: "Material" },
    gamma:{ default: 23.56,  min: 18, max: 28, step: 0.5,      label: "γ (kN/m³)",       folder: "Material" },
    nElem:{ default: 10,     min: 2, max: 40, step: 1,         label: "N° elementos",    folder: "Malla" },
  },
  computedLabels(p) {
    const A = p.b * p.h;
    const I = p.b * p.h ** 3 / 12;
    const As = (5/6) * A;
    const G = p.E / (2 * (1 + nu_C));
    const q = p.gamma * A;
    const w_EB    = q * p.L ** 4 / (8 * p.E * I);
    const w_shear = q * p.L ** 2 / (2 * G * As);
    const w_total = (w_EB + w_shear) * 1000; // mm
    const M_base = q * p.L ** 2 / 2;
    const V_base = q * p.L;
    return {
      "A":              `${(A*1e4).toFixed(2)} cm²`,
      "I33":            `${(I*1e8).toFixed(2)} cm⁴`,
      "q peso propio":  `${q.toFixed(4)} kN/m`,
      "w_tip EB":       `${(w_EB*1000).toFixed(5)} mm`,
      "w_tip + shear":  `${w_total.toFixed(5)} mm`,
      "M_base":         `${M_base.toFixed(3)} kN·m`,
      "V_base":         `${V_base.toFixed(3)} kN`,
    };
  },
  build(p, states) {
    const A = p.b * p.h;
    const I = p.b * p.h ** 3 / 12;
    const Iz_weak = p.h * p.b ** 3 / 12;
    const As = (5/6) * A;
    const J_rect = p.b * p.h ** 3 / 12 * 0.3; // aprox para rect (no usado para axial puro)
    const G = p.E / (2 * (1 + nu_C));
    const q = p.gamma * A;  // kN/m peso por longitud

    const nElem = Math.max(2, Math.round(p.nElem));
    const dL = p.L / nElem;
    const nodes: Node[] = [];
    for (let i = 0; i <= nElem; i++) nodes.push([dL * i, 0, 0]);
    const elements: Element[] = [];
    for (let i = 0; i < nElem; i++) elements.push([i, i + 1]);

    const supports = new Map<number,[boolean,boolean,boolean,boolean,boolean,boolean]>([
      [0, [true, true, true, true, true, true]],
    ]);
    // Peso propio como cargas nodales equivalentes (lumped): -q·dL en Z, half en extremos
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
    const As2 = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    for (let i = 0; i < elements.length; i++) {
      elasticities.set(i, p.E);
      shearModuli.set(i, G);
      areas.set(i, A);
      Iy_map.set(i, I);       // strong axis (about Y) - flexión vertical
      Iz_map.set(i, Iz_weak); // weak axis
      J_map.set(i, J_rect);
      As2.set(i, As);
      densities.set(i, rho_C);
      poissons.set(i, nu_C);
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaZ: Iy_map, momentsOfInertiaY: Iz_map, torsionalConstants: J_map,
      shearAreasY: As2,
      densities, poissonsRatios: poissons,
    };

    const deformOut = deform(nodes, elements, states.nodeInputs.val, states.elementInputs.val);
    states.deformOutputs.val = deformOut;
    states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, deformOut);
    states.objects3D.val = [];

    const w_EB_m    = q * p.L ** 4 / (8 * p.E * I);
    const w_shear_m = q * p.L ** 2 / (2 * G * As);
    const w_tot_m   = w_EB_m + w_shear_m;
    const w_fem = deformOut.deformations?.get(nElem)?.[2] ?? 0;
    const diff_pct = Math.abs(w_tot_m) > 1e-15 ? (Math.abs(w_fem) - w_tot_m) / w_tot_m * 100 : 0;
    console.log(
      `[W2 Viga flexión Hormigón] L=${p.L}m  ${p.b*100}×${p.h*100}cm  q=${q.toFixed(3)} kN/m\n` +
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
        title: `W2 Viga flexión Hormigón ${(p.b*100).toFixed(0)}×${(p.h*100).toFixed(0)}cm  L=${p.L}m`,
        properties: [`E=${(p.E/1e6).toFixed(1)} GPa  γ=${p.gamma.toFixed(2)} kN/m³`],
      });
    } catch (e: any) { console.warn("Modal W2 hormigón error:", e.message); }
  },
};
