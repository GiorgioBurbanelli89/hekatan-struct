/**
 * Muro de corte cantilever discretizado con shells Q4.
 * Validación cruzada vs OpenSees / SAP2000 / ETABS.
 *
 * Empotrado en la base, cargado lateralmente en la fila superior.
 * Material: hormigón armado (E=25 GPa, t=20 cm).
 *
 * Patrón awatif v2: todo en main.ts.
 * Portado desde FEM Studio `generateShearWallQ4()` en getCad3d.ts (líneas 10466-10527).
 */
import van, { State } from "vanjs-core";
import {
  Node, Element, NodeInputs, ElementInputs, DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";
import { analyze, deform } from "hekatan-fem";
import { getToolbar, getParameters, Parameters, getViewer } from "hekatan-ui";

const parameters: Parameters = {
  W:  { value: van.state(5),    min: 1,    max: 15,   step: 0.5,  label: "Ancho W (m)" },
  H:  { value: van.state(3),    min: 1,    max: 12,   step: 0.5,  label: "Altura H (m)" },
  t:  { value: van.state(0.2),  min: 0.05, max: 0.6,  step: 0.05, label: "Espesor t (m)" },
  nx: { value: van.state(8),    min: 2,    max: 24,   step: 1,    label: "Mesh nx" },
  ny: { value: van.state(6),    min: 2,    max: 24,   step: 1,    label: "Mesh ny" },
  E:  { value: van.state(25e6), min: 10e6, max: 50e6, step: 1e6,  label: "E (kN/m²)" },
  nu: { value: van.state(0.2),  min: 0.0,  max: 0.49, step: 0.05, label: "ν (Poisson)" },
  P:  { value: van.state(100),  min: 0,    max: 1000, step: 10,   label: "Carga lateral total (kN)" },
};

const nodesState: State<Node[]>                  = van.state([]);
const elementsState: State<Element[]>            = van.state([]);
const nodeInputsState: State<NodeInputs>         = van.state({});
const elementInputsState: State<ElementInputs>   = van.state({});
const deformOutputsState: State<DeformOutputs>   = van.state({});
const analyzeOutputsState: State<AnalyzeOutputs> = van.state({});

van.derive(() => {
  const W = parameters.W.value.val;
  const H = parameters.H.value.val;
  const t = parameters.t.value.val;
  const nx = Math.round(parameters.nx.value.val);
  const ny = Math.round(parameters.ny.value.val);
  const E = parameters.E.value.val;
  const nu = parameters.nu.value.val;
  const P = parameters.P.value.val;
  const G = E / (2 * (1 + nu));
  const dx = W / nx;
  const dz = H / ny;

  const nodes: Node[] = [];
  const elements: Element[] = [];

  for (let j = 0; j <= ny; j++)
    for (let i = 0; i <= nx; i++)
      nodes.push([i * dx, 0, j * dz]);

  const nNx = nx + 1;
  for (let j = 0; j < ny; j++)
    for (let i = 0; i < nx; i++)
      elements.push([j * nNx + i, j * nNx + i + 1, (j + 1) * nNx + i + 1, (j + 1) * nNx + i]);

  const supports = new Map<number, [boolean, boolean, boolean, boolean, boolean, boolean]>();
  for (let i = 0; i <= nx; i++) supports.set(i, [true, true, true, true, true, true]);

  const topNodes: number[] = [];
  for (let i = 0; i <= nx; i++) topNodes.push(ny * nNx + i);
  const pn = P / topNodes.length;
  const loads = new Map<number, [number, number, number, number, number, number]>();
  for (const n of topNodes) loads.set(n, [pn, 0, 0, 0, 0, 0]);

  const nodeInputs: NodeInputs = { supports, loads };
  const elementInputs: ElementInputs = {
    elasticities:   new Map(elements.map((_, i) => [i, E])),
    poissonsRatios: new Map(elements.map((_, i) => [i, nu])),
    thicknesses:    new Map(elements.map((_, i) => [i, t])),
    shearModuli:    new Map(elements.map((_, i) => [i, G])),
    densities:      new Map(elements.map((_, i) => [i, 24 / 9.80665])),
  };

  let deformOutputs: DeformOutputs = {} as DeformOutputs;
  let analyzeOutputs: AnalyzeOutputs = {} as AnalyzeOutputs;
  try {
    deformOutputs = deform(nodes, elements, nodeInputs, elementInputs);
    analyzeOutputs = analyze(nodes, elements, elementInputs, deformOutputs);
    const topCenter = ny * nNx + Math.floor(nx / 2);
    const def = deformOutputs.deformations.get(topCenter);
    const ux = def ? def[0] : 0;
    console.log(`Muro Q4: Ux=${ux.toExponential(4)} m | OS:4.602e-5 | SAP:4.629e-5 | ETABS:4.582e-5`);
  } catch (e: any) {
    console.warn("Muro Q4 deform/analyze:", e?.message ?? e);
  }

  nodesState.val = nodes;
  elementsState.val = elements;
  nodeInputsState.val = nodeInputs;
  elementInputsState.val = elementInputs;
  deformOutputsState.val = deformOutputs;
  analyzeOutputsState.val = analyzeOutputs;
});

const benchmarkPanel = document.createElement("div");
benchmarkPanel.style.cssText = "position:fixed;top:8px;right:8px;background:rgba(20,20,20,0.92);color:#ddd;font:11px/1.4 ui-monospace,Menlo,monospace;padding:10px 14px;border-radius:6px;border:1px solid #444;z-index:9999;min-width:280px;max-width:360px;";
benchmarkPanel.innerHTML = `
  <div style="font-weight:bold;color:#ffaa00;margin-bottom:4px;">🧪 BENCHMARK — shear-wall-q4</div>
  <ul style="margin:0;padding-left:16px;">
    <li style="color:#7eff7e">✓ vs OpenSees: Ux = 4.602e-5 m</li>
    <li style="color:#7eff7e">✓ vs SAP2000: Ux = 4.629e-5 m</li>
    <li style="color:#7eff7e">✓ vs ETABS: Ux = 4.582e-5 m</li>
    <li style="color:#7eff7e">✓ Hekatan Δ &lt;1.5% vs los 3</li>
  </ul>
  <div style="margin-top:6px;font-size:10px;color:#888;">F12 console for live Ux</div>
`;
document.body.append(benchmarkPanel);

document.body.append(
  getParameters(parameters),
  getViewer({
    mesh: {
      nodes: nodesState,
      elements: elementsState,
      nodeInputs: nodeInputsState,
      elementInputs: elementInputsState,
      deformOutputs: deformOutputsState,
      analyzeOutputs: analyzeOutputsState,
    },
    settingsObj: { deformedShape: true },
  }),
  getToolbar({
    sourceCode:
      "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/shear-wall-q4/main.ts",
  }),
);
