/**
 * Plate Thick — Mindlin-Reissner (FSDT)
 * Placa gruesa con deformación por cortante.
 */
import { plateQ4Solve, type Node } from "awatif-fem";
import type { ExampleDef } from "../exampleRegistry";

export const plateThick: ExampleDef = {
  id: "plate-thick",
  name: "Plate Thick (Mindlin-Reissner)",
  category: "Placas",
  params: {
    Lx: { default: 4.0, min: 1, max: 10, step: 0.5, label: "Lx (m)" },
    Ly: { default: 4.0, min: 1, max: 10, step: 0.5, label: "Ly (m)" },
    t:  { default: 0.3, min: 0.1, max: 0.8, step: 0.05, label: "espesor t (m)" },
    E:  { default: 30e6, min: 1e6, max: 200e6, step: 1e6, label: "E (kN/m²)" },
    nu: { default: 0.3, min: 0.1, max: 0.4, step: 0.01, label: "ν" },
    q:  { default: -10, min: -30, max: -1, step: -1, label: "q presión (kN/m²)" },
    nx: { default: 10, min: 4, max: 20, step: 1, label: "nx elementos" },
    ny: { default: 10, min: 4, max: 20, step: 1, label: "ny elementos" },
  },
  build(p, states) {
    const out = plateQ4Solve({
      E: p.E, nu: p.nu, thickness: p.t,
      theoryType: 0,              // 0 = Mindlin (thick)
      meshLx: p.Lx, meshLy: p.Ly,
      meshNx: Math.round(p.nx), meshNy: Math.round(p.ny),
      bcType: "simply-supported",
      pressure: p.q,
    });
    const nodes: Node[] = out.nodeResults.map((n) => [n.x, n.y, 0]);
    const elems = out.elementResults.map((e) => e.nodes);
    states.nodes.val = nodes;
    states.elements.val = elems as number[][];
    const thicknesses = new Map<number, number>();
    elems.forEach((_, i) => thicknesses.set(i, p.t));
    states.nodeInputs.val = {};
    states.elementInputs.val = { thicknesses };
    const deformations = new Map<number, [number, number, number, number, number, number]>();
    out.nodeResults.forEach((n, i) => {
      deformations.set(i, [0, 0, n.w, n.bx, n.by, 0]);
    });
    states.deformOutputs.val = { deformations };
    states.analyzeOutputs.val = {};
    states.objects3D.val = [];
  },
};
