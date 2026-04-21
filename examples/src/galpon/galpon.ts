/**
 * Galpón (nave industrial) — columnas + cerchas arqueadas con diagonales + correas.
 * Portado desde FEM Studio `galpon(...)`.
 */
import { deform, analyze, modalAnalysis, type Node, type Element } from "awatif-fem";
import type { ExampleDef } from "../workspace/exampleRegistry";

const Es = 200e6, nu_s = 0.3, Gs = Es / (2 * (1 + nu_s)), rho_s = 78;

const P = (folder: string, label: string, def: number, min: number, max: number, step: number) =>
  ({ default: def, min, max, step, label, folder });

export const galpon: ExampleDef = {
  id: "galpon",
  name: "Galpón (nave industrial)",
  category: "Frames 1D",
  defaultShellResult: "none",
  availableShellResults: [],
  hasModal: true,
  params: {
    span:     P("Geometría", "Luz (m)", 12, 6, 30, 0.5),
    length:   P("Geometría", "Largo (m)", 20, 6, 60, 1),
    height:   P("Geometría", "Altura columna (m)", 6, 3, 15, 0.5),
    archRise: P("Geometría", "Flecha arco (m)", 3, 0.5, 8, 0.25),
    xDiv:     P("Geometría", "Div. X (arco)", 8, 4, 20, 1),
    yDiv:     P("Geometría", "Div. Y (longitud)", 4, 2, 12, 1),
    barA:     P("Secciones", "Área barra (m²)", 0.002, 0.0005, 0.02, 0.0005),
    CM:       P("Cargas", "CM por nodo (kN)", -1, -10, 0, 0.1),
  },
  build(p, states) {
    const span = p.span, length = p.length, height = p.height, archRise = p.archRise;
    const xDiv = Math.round(p.xDiv), yDiv = Math.round(p.yDiv);
    const archZ = (x: number) => height + archRise * (1 - Math.pow(2 * x / span - 1, 2));
    const yn = yDiv + 1;

    const nodes: Node[] = [];
    const nid: number[][] = [];
    for (let iy = 0; iy < yn; iy++) {
      const row: number[] = [];
      const y = (length / yDiv) * iy;
      row.push(nodes.length); nodes.push([0, y, 0]);
      row.push(nodes.length); nodes.push([span, y, 0]);
      row.push(nodes.length); nodes.push([0, y, height]);
      for (let ix = 1; ix < xDiv; ix++) {
        const x = (span / xDiv) * ix;
        row.push(nodes.length); nodes.push([x, y, archZ(x)]);
      }
      row.push(nodes.length); nodes.push([span, y, height]);
      nid.push(row);
    }

    const elements: Element[] = [];
    // Por cada cercha (a lo largo de Y): columnas + arco
    for (let iy = 0; iy < yn; iy++) {
      const r = nid[iy];
      elements.push([r[0], r[2]]);                 // columna izq
      elements.push([r[1], r[r.length - 1]]);      // columna der
      for (let i = 2; i < r.length - 1; i++) elements.push([r[i], r[i + 1]]);  // arco
    }
    // Correas (longitudinales) entre cerchas
    for (let iy = 0; iy < yDiv; iy++)
      for (let iNode = 2; iNode < nid[0].length; iNode++)
        elements.push([nid[iy][iNode], nid[iy + 1][iNode]]);
    // Cruces (diagonales en techo para rigidizar)
    for (let iy = 0; iy < yDiv; iy++)
      for (let iNode = 2; iNode < nid[0].length - 1; iNode += 2)
        elements.push([nid[iy][iNode], nid[iy + 1][iNode + 1]]);

    // Supports en base de columnas (empotrados)
    const supports = new Map<number,[boolean,boolean,boolean,boolean,boolean,boolean]>();
    for (let iy = 0; iy < yn; iy++) {
      supports.set(nid[iy][0], [true, true, true, true, true, true]);
      supports.set(nid[iy][1], [true, true, true, true, true, true]);
    }

    // Cargas verticales (CM) en nodos del arco (techo)
    const loads = new Map<number,[number,number,number,number,number,number]>();
    if (p.CM !== 0) {
      for (let iy = 0; iy < yn; iy++)
        for (let i = 2; i < nid[iy].length; i++)
          loads.set(nid[iy][i], [0, 0, p.CM, 0, 0, 0]);
    }

    // Propiedades (perfil metálico uniforme)
    const A = p.barA;
    const I = A * A / 12;
    const elasticities = new Map<number, number>();
    const shearModuli = new Map<number, number>();
    const areas = new Map<number, number>();
    const Iz = new Map<number, number>();
    const Iy = new Map<number, number>();
    const J = new Map<number, number>();
    const densities = new Map<number, number>();
    const poissons = new Map<number, number>();
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
        title: `Galpón L=${p.span}m largo=${p.length}m`,
        properties: [`Altura ${p.height}m + arco ${p.archRise}m  perfil A=${(p.barA*1e4).toFixed(1)} cm²  acero`],
      });
    } catch (e: any) { console.warn("Modal galpón error:", e.message); }
  },
};
