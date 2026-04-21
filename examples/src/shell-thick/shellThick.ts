/**
 * Shell Thick — Mindlin-Reissner (MITC4)
 * Cáscara gruesa (membrana + flexión Mindlin con deformación por corte).
 * Usa solver `deform` con shells Q4 y thickness mayor para régimen thick.
 */
import { deform, analyze, type Node, type Element } from "awatif-fem";
import type { ExampleDef } from "../exampleRegistry";

export const shellThick: ExampleDef = {
  id: "shell-thick",
  name: "Shell Thick (Mindlin / MITC4)",
  category: "Cáscaras",
  params: {
    Lx: { default: 4.0, min: 1, max: 10, step: 0.5, label: "Lx (m)" },
    Ly: { default: 4.0, min: 1, max: 10, step: 0.5, label: "Ly (m)" },
    t:  { default: 0.30, min: 0.1, max: 0.8, step: 0.05, label: "espesor t (m)" },
    E:  { default: 25e6, min: 1e6, max: 200e6, step: 1e6, label: "E (kN/m²)" },
    nu: { default: 0.2, min: 0.1, max: 0.4, step: 0.01, label: "ν" },
    q:  { default: -10, min: -30, max: -1, step: -1, label: "q presión (kN/m²)" },
    nx: { default: 8, min: 4, max: 16, step: 1, label: "nx" },
    ny: { default: 8, min: 4, max: 16, step: 1, label: "ny" },
  },
  build(p, states) {
    const nx = Math.round(p.nx), ny = Math.round(p.ny);
    const nodes: Node[] = [];
    for (let j = 0; j <= ny; j++)
      for (let i = 0; i <= nx; i++)
        nodes.push([(i * p.Lx) / nx, (j * p.Ly) / ny, 0]);
    const elements: Element[] = [];
    for (let j = 0; j < ny; j++)
      for (let i = 0; i < nx; i++) {
        const n0 = j * (nx + 1) + i;
        elements.push([n0, n0 + 1, n0 + 1 + (nx + 1), n0 + (nx + 1)]);
      }
    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
    for (let i = 0; i <= nx; i++) {
      supports.set(i, [true, true, true, false, false, false]);
      supports.set(ny * (nx + 1) + i, [true, true, true, false, false, false]);
    }
    for (let j = 0; j <= ny; j++) {
      supports.set(j * (nx + 1), [true, true, true, false, false, false]);
      supports.set(j * (nx + 1) + nx, [true, true, true, false, false, false]);
    }
    const A_trib_full = (p.Lx / nx) * (p.Ly / ny);
    const loads = new Map<number, [number, number, number, number, number, number]>();
    for (let j = 0; j <= ny; j++)
      for (let i = 0; i <= nx; i++) {
        const idx = j * (nx + 1) + i;
        const corner = (i === 0 || i === nx) && (j === 0 || j === ny);
        const edge = (i === 0 || i === nx || j === 0 || j === ny);
        const factor = corner ? 0.25 : edge ? 0.5 : 1.0;
        loads.set(idx, [0, 0, p.q * A_trib_full * factor, 0, 0, 0]);
      }
    const thicknesses = new Map<number, number>();
    const elasticities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const densities = new Map<number, number>();
    elements.forEach((_, i) => {
      thicknesses.set(i, p.t);
      elasticities.set(i, p.E);
      poissons.set(i, p.nu);
      densities.set(i, 24);
    });
    states.nodes.val = nodes;
    states.elements.val = elements;
    states.nodeInputs.val = { supports, loads };
    states.elementInputs.val = { thicknesses, elasticities, poissonsRatios: poissons, densities };
    try {
      states.deformOutputs.val = deform(nodes, elements, { supports, loads }, states.elementInputs.val);
      states.analyzeOutputs.val = analyze(nodes, elements, states.elementInputs.val, states.deformOutputs.val);
    } catch (e) {
      console.error("Shell thick solver error:", e);
    }
    states.objects3D.val = [];
  },
};
