/**
 * Barra axial — elemento 1D con carga puntual en el extremo.
 * Portado desde FEM Studio `generateBarra()`.
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const Es = 200e6, nu_s = 0.3;
const Gs = Es / (2 * (1 + nu_s));
const rho_s = 78;

export const barraAxial: ExampleDef = {
  id: "barra-axial",
  name: "Barra axial (1D)",
  category: "Frames 1D",
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  params: {
    L:     { default: 5, min: 1, max: 20, step: 0.5, label: "Longitud L (m)", folder: "Geometría" },
    nElem: { default: 3, min: 1, max: 20, step: 1,   label: "N° elementos", folder: "Geometría" },
    A:     { default: 0.01, min: 0.001, max: 0.05, step: 0.001, label: "Área (m²)", folder: "Sección" },
    E:     { default: 200e6, min: 25e6, max: 210e6, step: 1e6, label: "E (kN/m²)", folder: "Sección" },
    F:     { default: 100, min: -500, max: 500, step: 10, label: "F axial extremo (kN)", folder: "Cargas" },
  },
  build(p, states) {
    const nElem = Math.round(p.nElem);
    const dL = p.L / nElem;
    const nodes: Node[] = [];
    const elements: Element[] = [];
    for (let i = 0; i <= nElem; i++) nodes.push([dL * i, 0, 0]);
    for (let i = 0; i < nElem; i++) elements.push([i, i + 1]);
    const supports = new Map<number,[boolean,boolean,boolean,boolean,boolean,boolean]>([
      [0, [true, true, true, true, true, true]],
    ]);
    const loads = new Map<number,[number,number,number,number,number,number]>([
      [nElem, [p.F, 0, 0, 0, 0, 0]],
    ]);

    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const I = p.A * p.A / 12;
    for (let i = 0; i < elements.length; i++) {
      elasticities.set(i, p.E); shearModuli.set(i, Gs); poissons.set(i, nu_s);
      densities.set(i, rho_s);
      areas.set(i, p.A); Iz.set(i, I); Iy.set(i, I); J.set(i, 2 * I);
    }

    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = {
      elasticities, shearModuli, areas,
      momentsOfInertiaZ: Iz, momentsOfInertiaY: Iy, torsionalConstants: J,
      densities, poissonsRatios: poissons,
    };
    const deformOut = deform(nodes, elements, states.nodeInputs.val, states.elementInputs.val);
    states.deformOutputs.val = deformOut;
    states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, deformOut);
    states.objects3D.val = [];

    // Verificación analítica: δ = F·L / (A·E)
    const delta_teo = (p.F * p.L) / (p.A * p.E);
    const d_fem = deformOut.deformations?.get(nElem)?.[0] ?? 0;
    console.log(`[Barra axial] δ teórico=${(delta_teo*1000).toFixed(4)} mm  FEM=${(d_fem*1000).toFixed(4)} mm  ratio=${(d_fem/delta_teo).toFixed(3)}`);
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val;
    const elements = states.elements.val;
    const ni = states.nodeInputs.val;
    const ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ni.supports?.size || !ei.densities?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 8);
      modalPanel.render(out, {
        title: `Barra axial L=${p.L}m`,
        properties: [`E=${(p.E/1e6).toFixed(0)} GPa  A=${(p.A*1e4).toFixed(1)} cm²  ρ=78 kN/m³`],
      });
    } catch (e: any) { console.warn("Modal barra error:", e.message); }
  },
};
