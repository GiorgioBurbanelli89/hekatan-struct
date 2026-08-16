/**
 * 🎯 W2 Viga Axial HORMIGÓN Cantilever (1 DOF) — validación cruzada con ETABS.
 *
 * Setup (mismo patrón que viga axial acero, pero sección hormigón):
 *   - Viga horizontal en X, L=3 m, story Base
 *   - POINT 1 (0,0,0) empotrado total | POINT 2 (L,0,0) libre
 *   - Sección rectangular hormigón 30×30 cm (b=h=0.30, A=0.09 m²)
 *   - Material Hormigón f'c=25 MPa: E=24.98e6 kN/m², ν=0.2
 *   - PESO PROPIO = 0 (SELFWEIGHT=0 en ETABS) — para mantener 1 DOF
 *   - Carga axial Fx=100 kN puntual en POINT 2
 *
 * Resultado esperado (1 DOF — solo Ux):
 *   u_x = P·L / (E·A) = 100·3 / (24.98e6 · 0.09) = 0.13344 mm
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const E_C = 24.98e6;   // kN/m²
const nu_C = 0.2;
const G_C = E_C / (2 * (1 + nu_C));
const rho_C = 23.56 / 9.80665;  // ≈ 2402 kg/m³ (solo para mass info, no se usa en static)

export const vigaAxialConcreteCantilever: ExampleDef = {
  id: "W2_viga_axial_concrete_cantilever",
  name: "Viga axial Hormigón 30×30 cantilever (1 DOF)",
  category: "1️⃣ Frames · 🎯 1 GDL Axial",
  benchmark: true,
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  guide: [
    "Viga horizontal cantilever de hormigón bajo carga axial puntual.",
    "1 DOF efectivo (Ux) — peso propio DESACTIVADO para mantener axial puro.",
    "Sección 30×30 cm, L=3 m, P=100 kN, f'c=25 MPa (E=24.98 GPa).",
    "Esperado: u_x = P·L/(E·A) = 0.13344 mm.",
  ],
  params: {
    L:    { default: 3.0,    min: 0.5, max: 10.0, step: 0.1,  label: "Longitud L (m)",     folder: "Geometría" },
    b:    { default: 0.30,   min: 0.10, max: 0.60, step: 0.01, label: "b ancho (m)",       folder: "Sección" },
    h:    { default: 0.30,   min: 0.10, max: 0.60, step: 0.01, label: "h alto (m)",        folder: "Sección" },
    E:    { default: 24.98e6, min: 15e6, max: 40e6, step: 1e6, label: "E (kN/m²)",         folder: "Material" },
    nElem:{ default: 1,      min: 1, max: 20, step: 1,         label: "N° elementos",      folder: "Malla" },
    Fx:   { default: 100,    min: -500, max: 500, step: 5,     label: "Fx axial (kN)",     folder: "Cargas", unitType: "force" },
  },
  computedLabels(p) {
    const A = p.b * p.h;
    const I = p.b * p.h ** 3 / 12;
    const u_ana = (p.Fx * p.L) / (p.E * A) * 1000; // mm
    return {
      "A":               `${(A*1e4).toFixed(2)} cm²`,
      "I":               `${(I*1e8).toFixed(2)} cm⁴`,
      "EA":              `${(p.E*A).toFixed(0)} kN`,
      "u_x analítico":   `${u_ana.toFixed(5)} mm`,
      "k_axial = EA/L":  `${(p.E*A/p.L).toExponential(3)} kN/m`,
    };
  },
  build(p, states) {
    const A = p.b * p.h;
    const I = p.b * p.h ** 3 / 12;
    const J = p.b * p.h ** 3 / 12 * 0.3; // aprox rectangular
    const As = (5/6) * A;
    const G = p.E / (2 * (1 + nu_C));

    const nElem = Math.max(1, Math.round(p.nElem));
    const dL = p.L / nElem;
    const nodes: Node[] = [];
    for (let i = 0; i <= nElem; i++) nodes.push([dL * i, 0, 0]);
    const elements: Element[] = [];
    for (let i = 0; i < nElem; i++) elements.push([i, i + 1]);

    const supports = new Map<number,[boolean,boolean,boolean,boolean,boolean,boolean]>([
      [0, [true, true, true, true, true, true]],
    ]);
    // Solo carga axial puntual en el extremo libre (NO peso propio)
    const loads = new Map<number,[number,number,number,number,number,number]>([
      [nElem, [p.Fx, 0, 0, 0, 0, 0]],
    ]);

    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iy_map = new Map<number, number>();
    const Iz_map = new Map<number, number>();
    const J_map = new Map<number, number>();
    const As2 = new Map<number, number>();
    const As3 = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    for (let i = 0; i < elements.length; i++) {
      elasticities.set(i, p.E);
      shearModuli.set(i, G);
      areas.set(i, A);
      Iy_map.set(i, I);
      Iz_map.set(i, I);
      J_map.set(i, J);
      As2.set(i, As);
      As3.set(i, As);
      densities.set(i, rho_C);
      poissons.set(i, nu_C);
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaZ: Iy_map, momentsOfInertiaY: Iz_map, torsionalConstants: J_map,
      shearAreasY: As2, shearAreasZ: As3,
      densities, poissonsRatios: poissons,
    };

    const deformOut = deform(nodes, elements, states.nodeInputs.val, states.elementInputs.val);
    states.deformOutputs.val = deformOut;
    states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, deformOut);
    states.objects3D.val = [];

    const u_analitico = (p.Fx * p.L) / (p.E * A);
    const u_fem = deformOut.deformations?.get(nElem)?.[0] ?? 0;
    const diff = u_analitico !== 0 ? (u_fem - u_analitico) / u_analitico * 100 : 0;
    console.log(
      `[W2 Viga axial HORMIGÓN] L=${p.L}m  ${p.b*100}×${p.h*100}cm  P=${p.Fx}kN\n` +
      `  u_x analítico = ${(u_analitico*1000).toFixed(5)} mm\n` +
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
        title: `W2 Viga axial Hormigón ${(p.b*100).toFixed(0)}×${(p.h*100).toFixed(0)}cm  L=${p.L}m`,
        properties: [`E=${(p.E/1e6).toFixed(1)} GPa  ν=${nu_C}  (sin peso propio)`],
      });
    } catch (e: any) { console.warn("Modal W2 axial concrete error:", e.message); }
  },
};
