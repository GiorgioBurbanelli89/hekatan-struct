/**
 * Cercha 2D — truss paralelo con diagonales en K (patrón Warren).
 * Portado desde FEM Studio `generateTruss()` en getCad3d.ts.
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "hekatan-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const Es = 200e6;       // acero kN/m²
const nu_s = 0.3;
const Gs = Es / (2 * (1 + nu_s));
const rho_s = 78;       // kN/m³

export const trussGen: ExampleDef = {
  id: "truss-gen",
  name: "Cercha (Warren)",
  category: "Frames 1D",
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  params: {
    span:       { default: 12, min: 4, max: 30, step: 0.5, label: "Luz (m)", folder: "Geometría" },
    divisions:  { default: 6,  min: 2, max: 20, step: 1,   label: "Divisiones", folder: "Geometría" },
    height:     { default: 1.5, min: 0.5, max: 5, step: 0.1, label: "Altura cercha (m)", folder: "Geometría" },
    barA:       { default: 0.004, min: 0.001, max: 0.02, step: 0.001, label: "Área barra (m²)", folder: "Secciones" },
    CM:         { default: -2, min: -20, max: 0, step: 0.5, label: "CM por nodo (kN)", folder: "Cargas" },
    CV:         { default: -1, min: -20, max: 0, step: 0.5, label: "CV por nodo (kN)", folder: "Cargas" },
  },
  build(p, states) {
    const div = Math.round(p.divisions);
    const dx = p.span / div;
    const h = p.height;

    // 2 cuerdas (superior e inferior) + 1 diagonal por panel
    const nodes: Node[] = [];
    for (let i = 0; i <= div; i++) nodes.push([dx * i, 0, 0]);     // cuerda inferior
    for (let i = 0; i <= div; i++) nodes.push([dx * i, 0, h]);     // cuerda superior
    const b = div + 1;
    const elements: Element[] = [];
    for (let i = 0; i < div; i++) elements.push([i, i + 1]);        // cordon inferior
    for (let i = 0; i < div; i++) elements.push([b + i, b + i + 1]);// cordon superior
    for (let i = 0; i <= div; i++) elements.push([i, b + i]);       // verticales
    for (let i = 0; i < div; i++) {
      if (i < div / 2) elements.push([i, b + i + 1]);
      else elements.push([b + i, i + 1]);
    }

    // Apoyos simples en extremos inferiores
    const supports = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>([
      [0, [true, true, true, true, true, true]],
      [div, [true, true, true, true, true, true]],
    ]);
    const fz = p.CM + p.CV;
    const loads = new Map<number, [number,number,number,number,number,number]>();
    if (fz !== 0) for (let i = 0; i <= div; i++) loads.set(i, [0, 0, fz, 0, 0, 0]);

    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const A = p.barA;
    const I = A * A / 12;
    for (let i = 0; i < elements.length; i++) {
      elasticities.set(i, Es); shearModuli.set(i, Gs); poissons.set(i, nu_s);
      densities.set(i, rho_s);
      areas.set(i, A); Iz.set(i, I); Iy.set(i, I); J.set(i, 2 * I);
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
  },
  runModal(p, states, modalPanel) {
    const nodes = states.nodes.val;
    const elements = states.elements.val;
    const ni = states.nodeInputs.val;
    const ei = states.elementInputs.val;
    if (!nodes.length || !elements.length || !ni.supports?.size || !ei.densities?.size) return;
    try {
      const out = modalAnalysis(nodes, elements, ni, ei, 12);
      modalPanel.render(out, {
        title: `Cercha Warren L=${p.span}m h=${p.height}m`,
        properties: [`E=200 GPa (acero) ρ=78 kN/m³  A=${(p.barA*1e4).toFixed(0)} cm²`],
      });
    } catch (e: any) { console.warn("Modal truss error:", e.message); }
  },
};
