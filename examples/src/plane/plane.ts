/**
 * Plane Element — Plane Stress 2D puro (CSi-style Plane)
 *
 * Elemento 2D pure plane stress (σ_zz = 0). Diferente de Shell-Membrane:
 *   - DOFs activos: Ux, Uy   (NO drilling Rz — sin rotaciones)
 *   - 2×2 Gauss integration + optional incompatible bending modes
 *   - Usa plateQ4Solve con theoryType=2 (membrane) en awatif-fem
 *
 * Caso de análisis: cantiléver vertical de sección rectangular bajo carga
 * en la punta (muro de contención, presa sección, pared de tanque).
 *
 * CSI Analysis Reference Manual: "Plane Element" — quadrilateral 2D
 * element for plane-stress or plane-strain analysis. Nuestra implementación
 * es plane-stress vía plateQ4Solve.theoryType=2.
 */
import { plateQ4Solve, modalAnalysis, type Node } from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

export const plane: ExampleDef = {
  id: "plane",
  name: "Plane Element (2D plane stress)",
  category: "Placas",
  defaultShellResult: "vonMises",
  availableShellResults: ["vonMises", "membraneXX", "membraneYY", "membraneXY", "displacementX", "displacementZ"],
  hasModal: true,
  params: {
    // Plano vertical X-Z: X horizontal, Z vertical (altura). Y = normal (espesor).
    W:  { default: 3.0, min: 1, max: 8,  step: 0.25, label: "W ancho X (m)" },
    H:  { default: 6.0, min: 1, max: 15, step: 0.25, label: "H altura Z (m)" },
    t:  { default: 0.30, min: 0.05, max: 1.0, step: 0.05, label: "t espesor (m)" },
    E:  { default: 25e6, min: 5e6, max: 200e6, step: 1e6, label: "E (kN/m²)" },
    nu: { default: 0.20, min: 0.10, max: 0.40, step: 0.01, label: "ν" },
    F:  { default: 100, min: 10, max: 2000, step: 10, label: "F lateral tope (kN)" },
    nx: { default: 8, min: 4, max: 20, step: 1, label: "nx elem X" },
    nz: { default: 16, min: 4, max: 30, step: 1, label: "nz elem Z" },
  },
  build(p, states) {
    const out = plateQ4Solve({
      E: p.E,
      nu: p.nu,
      thickness: p.t,
      theoryType: 2,              // 2 = Membrane (plane stress puro)
      meshLx: p.W,
      meshLy: p.H,                // en el solver 2D es "y"; acá lo mapeo a Z global
      meshNx: Math.round(p.nx),
      meshNy: Math.round(p.nz),
      bcType: "simply-supported",
      pressure: 0,
    });
    // Remap de (x_solver, y_solver) → (X, 0, Z) global — plano vertical X-Z, Y=0
    const nodes: Node[] = out.nodeResults.map((n) => [n.x, 0, n.y]);
    const elems = out.elementResults.map((e) => e.nodes);
    states.nodes.val = nodes;
    states.elements.val = elems as number[][];

    // Supports: borde inferior (Z=0) empotrado — cantiléver vertical
    const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
    const loads = new Map<number, [number, number, number, number, number, number]>();
    nodes.forEach((n, i) => {
      if (Math.abs(n[2]) < 1e-6) supports.set(i, [true, true, true, true, true, true]);
    });
    // Carga F lateral en X concentrada en nodo superior derecho (X=W, Z=H)
    const topRightIdx = nodes.findIndex(
      (n) => Math.abs(n[0] - p.W) < 1e-6 && Math.abs(n[2] - p.H) < 1e-6,
    );
    if (topRightIdx >= 0) loads.set(topRightIdx, [p.F, 0, 0, 0, 0, 0]);
    states.nodeInputs.val = { supports, loads };

    const thicknesses = new Map<number, number>();
    const elasticities = new Map<number, number>();
    const poissons = new Map<number, number>();
    const densities = new Map<number, number>();
    elems.forEach((_, i) => {
      thicknesses.set(i, p.t);
      elasticities.set(i, p.E);
      poissons.set(i, p.nu);
      densities.set(i, 24);
    });
    states.elementInputs.val = { thicknesses, elasticities, poissonsRatios: poissons, densities };

    // Deformaciones: solver da (du, dv) en plano 2D → global (Ux, 0, Uz)
    const deformations = new Map<number, [number, number, number, number, number, number]>();
    out.nodeResults.forEach((n, i) => {
      deformations.set(i, [n.bx ?? 0, 0, n.by ?? 0, 0, 0, 0]);
    });
    states.deformOutputs.val = { deformations };

    // Stresses in-plane (σxx, σyy, τxy) — almacenados como membrane*
    const membraneXX = new Map<number, number[]>();
    const membraneYY = new Map<number, number[]>();
    const membraneXY = new Map<number, number[]>();
    const vonMises = new Map<number, number[]>();
    out.elementResults.forEach((er, i) => {
      const s_xx = er.Mxx, s_yy = er.Myy, s_xy = er.Mxy;
      const vm = Math.sqrt(s_xx * s_xx - s_xx * s_yy + s_yy * s_yy + 3 * s_xy * s_xy);
      membraneXX.set(i, [s_xx, s_xx, s_xx, s_xx]);
      membraneYY.set(i, [s_yy, s_yy, s_yy, s_yy]);
      membraneXY.set(i, [s_xy, s_xy, s_xy, s_xy]);
      vonMises.set(i,  [vm, vm, vm, vm]);
    });
    states.analyzeOutputs.val = { membraneXX, membraneYY, membraneXY, vonMises };
    states.objects3D.val = [];

    // Log verificación: cantiléver 2D con carga concentrada en tope
    const I = p.t * Math.pow(p.W, 3) / 12;
    const A = p.t * p.W;
    const G = p.E / (2 * (1 + p.nu));
    const delta_flex = p.F * Math.pow(p.H, 3) / (3 * p.E * I);
    const delta_shear = 1.2 * p.F * p.H / (G * A);
    const topRight = topRightIdx >= 0 ? deformations.get(topRightIdx)?.[0] ?? 0 : 0;
    console.log(
      `[Plane (2D plane stress)] W=${p.W}m H=${p.H}m t=${p.t}m F=${p.F}kN → ` +
      `δ_top FEM=${(topRight * 1000).toFixed(3)} mm | ` +
      `teórico flex+shear=${((delta_flex + delta_shear) * 1000).toFixed(3)} mm`
    );
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
        title: `Plane ${p.W}×${p.H}m t=${p.t}m`,
        properties: [`E=${(p.E / 1e6).toFixed(1)} GPa  ν=${p.nu}  ρ=24 kN/m³`],
      });
    } catch (e: any) {
      console.warn("Modal plane error:", e.message);
    }
  },
};
