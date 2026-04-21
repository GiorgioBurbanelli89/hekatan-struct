/**
 * Membrana — Plane Stress (Q4)
 * Placa delgada cargada en su plano (sin flexión).
 */
import { plateQ4Solve, type Node } from "awatif-fem";
import type { ExampleDef } from "../exampleRegistry";

export const membrana: ExampleDef = {
  id: "membrana",
  name: "Membrana (Plane Stress)",
  category: "Placas",
  params: {
    Lx: { default: 4.0, min: 1, max: 10, step: 0.5, label: "Lx (m)" },
    Ly: { default: 2.0, min: 1, max: 10, step: 0.5, label: "Ly (m)" },
    t:  { default: 0.05, min: 0.02, max: 0.2, step: 0.01, label: "espesor t (m)" },
    E:  { default: 200e6, min: 1e6, max: 200e6, step: 1e6, label: "E (kN/m²)" },
    nu: { default: 0.3, min: 0.1, max: 0.4, step: 0.01, label: "ν" },
    q:  { default: -10, min: -30, max: -1, step: -1, label: "q presión (kN/m²)" },
    nx: { default: 12, min: 4, max: 20, step: 1, label: "nx" },
    ny: { default: 6, min: 3, max: 20, step: 1, label: "ny" },
  },
  build(p, states) {
    const out = plateQ4Solve({
      E: p.E, nu: p.nu, thickness: p.t,
      theoryType: 2,              // 2 = Membrane
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
