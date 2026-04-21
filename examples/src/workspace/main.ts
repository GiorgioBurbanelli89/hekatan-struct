/**
 * =============================================================================
 *  Workspace — patrón awatif puro con Tweakpane
 *  Cada ejemplo se carga como módulo autónomo via ?t=<example> o selector
 * =============================================================================
 *
 *  Stack:
 *    - getViewer()        — 3D Three.js renderer (shells, frames, deformada)
 *    - getToolbar()       — top bar
 *    - Tweakpane panel    — selector de ejemplo + parámetros (reactivo)
 *    - createModalPanel() — tabla de frecuencias/modos (opcional)
 *
 *  Cada ejemplo exporta:
 *    { id, name, category, params, build(states, modal?) }
 * =============================================================================
 */
import van, { State } from "vanjs-core";
import * as THREE from "three";
import { Pane } from "tweakpane";
import {
  Node, Element, NodeInputs, ElementInputs,
  DeformOutputs, AnalyzeOutputs,
} from "awatif-fem";
import { getToolbar, getViewer } from "awatif-ui";
import { createModalPanel } from "../shared/renderModalTable";
import { examplesRegistry, type ExampleDef } from "./exampleRegistry";
import { forceUnit, dispUnit } from "./units";

// ── Estado global compartido ──
const nodes: State<Node[]> = van.state([]);
const elements: State<Element[]> = van.state([]);
const nodeInputs: State<NodeInputs> = van.state({});
const elementInputs: State<ElementInputs> = van.state({});
const deformOutputs: State<DeformOutputs> = van.state({});
const analyzeOutputs: State<AnalyzeOutputs> = van.state({});
const objects3D: State<THREE.Object3D[]> = van.state([]);

export interface BuildStates {
  nodes: State<Node[]>;
  elements: State<Element[]>;
  nodeInputs: State<NodeInputs>;
  elementInputs: State<ElementInputs>;
  deformOutputs: State<DeformOutputs>;
  analyzeOutputs: State<AnalyzeOutputs>;
  objects3D: State<THREE.Object3D[]>;
}
const states: BuildStates = {
  nodes, elements, nodeInputs, elementInputs,
  deformOutputs, analyzeOutputs, objects3D,
};

// ── Example runner ──
let currentExample: ExampleDef | null = null;
let currentParams: Record<string, number> = {};
let currentPane: Pane | null = null;
const modalPanel = createModalPanel();
modalPanel.div.style.display = "none";

// Limpia todos los estados antes de cargar/rebuild un ejemplo.
// Evita que objetos 3D (ej. resortes Winkler de zapata) persistan al cambiar de ejemplo.
function resetStates() {
  states.objects3D.val = [];
  states.nodes.val = [];
  states.elements.val = [];
  states.nodeInputs.val = {};
  states.elementInputs.val = {};
  states.deformOutputs.val = {};
  states.analyzeOutputs.val = {};
}

function loadExample(ex: ExampleDef) {
  currentExample = ex;
  currentParams = Object.fromEntries(
    Object.entries(ex.params).map(([k, p]) => [k, p.default])
  );
  resetStates();
  ex.build(currentParams, states, modalPanel);
  buildParamsPane();
}

function rebuild() {
  if (!currentExample) return;
  resetStates();
  currentExample.build(currentParams, states, modalPanel);
}

// ── Tweakpane panel (encima del viewer) ──
const paneHost = document.createElement("div");
paneHost.style.cssText = "position:fixed;top:16px;right:16px;width:320px;z-index:100;max-height:90vh;overflow-y:auto";
document.body.appendChild(paneHost);

// Helper de vistas — usa contexto Three.js del viewer (camera + controls)
function setView(preset: "iso" | "plan" | "elevX" | "elevY") {
  const ctx: any = (viewerElm as any).__ctx;
  if (!ctx) return;
  const { camera, controls, render } = ctx;
  const tgt = controls.target.clone();
  const dist = camera.position.distanceTo(tgt) || 10;
  switch (preset) {
    case "iso":   camera.position.set(tgt.x + dist * 0.6, tgt.y - dist * 0.6, tgt.z + dist * 0.6); break;
    case "plan":  camera.position.set(tgt.x, tgt.y, tgt.z + dist); break;         // top-down +Z
    case "elevX": camera.position.set(tgt.x + dist, tgt.y, tgt.z); break;         // mirando -X
    case "elevY": camera.position.set(tgt.x, tgt.y + dist, tgt.z); break;         // mirando -Y
  }
  camera.up.set(0, 0, 1);
  camera.lookAt(tgt);
  controls.update();
  render?.();
}

function buildParamsPane() {
  if (currentPane) {
    currentPane.dispose();
    currentPane = null;
  }
  paneHost.innerHTML = "";
  if (!currentExample) return;
  const pane = new Pane({ container: paneHost, title: currentExample.name });

  // Selector de ejemplo (siempre arriba)
  const selectorObj = { id: currentExample.id };
  const options = Object.fromEntries(
    examplesRegistry.map((e) => [`${e.category} · ${e.name}`, e.id])
  );
  pane.addBinding(selectorObj, "id", { label: "Ejemplo", options }).on("change", (e) => {
    const nextEx = examplesRegistry.find((x) => x.id === e.value);
    if (nextEx) loadExample(nextEx);
  });

  // ── Vista (planta / elevación / isométrica) ──
  const fView = pane.addFolder({ title: "Vista", expanded: false });
  fView.addButton({ title: "🏗 Isométrica" }).on("click", () => setView("iso"));
  fView.addButton({ title: "⬇ Planta (X-Y)" }).on("click", () => setView("plan"));
  fView.addButton({ title: "→ Elevación X (frente)" }).on("click", () => setView("elevX"));
  fView.addButton({ title: "↑ Elevación Y (lado)" }).on("click", () => setView("elevY"));

  // ── Unidades (global, persistido en localStorage) ──
  const fUnits = pane.addFolder({ title: "Unidades", expanded: false });
  const unitsProxy = { force: forceUnit.val, disp: dispUnit.val };
  fUnits.addBinding(unitsProxy, "force", {
    label: "Fuerza",
    options: { kN: "kN", tonf: "tonf", kip: "kip" },
  }).on("change", (e) => { forceUnit.val = e.value as any; rebuild(); });
  fUnits.addBinding(unitsProxy, "disp", {
    label: "Desplazamiento",
    options: { mm: "mm", cm: "cm", "µm (poco prob.)": "µm" },
  }).on("change", (e) => { dispUnit.val = e.value as any; rebuild(); });

  // ── Parámetros del ejemplo ──
  const fParams = pane.addFolder({ title: "Parámetros" });
  let timer: number | null = null;
  const scheduleRebuild = () => {
    if (timer !== null) clearTimeout(timer);
    timer = window.setTimeout(() => { timer = null; rebuild(); }, 120);
  };
  for (const [key, p] of Object.entries(currentExample.params)) {
    const opts: any = { label: p.label ?? key };
    if (p.options !== undefined) {
      opts.options = p.options;
    } else {
      if (p.min !== undefined) opts.min = p.min;
      if (p.max !== undefined) opts.max = p.max;
      if (p.step !== undefined) opts.step = p.step;
    }
    fParams.addBinding(currentParams, key, opts).on("change", () => {
      if (currentExample?.onParamChange) {
        currentExample.onParamChange(key, currentParams);
        pane.refresh();
      }
      scheduleRebuild();
    });
  }

  // Modal trigger (opcional)
  if (currentExample.hasModal) {
    const btn = pane.addButton({ title: "⚡ Análisis modal" });
    btn.on("click", () => {
      modalPanel.div.style.display = "block";
      if (currentExample!.runModal) currentExample!.runModal(currentParams, states, modalPanel);
    });
  }
  currentPane = pane;
}

// ── Settings del viewer ──
// Default shellResults = "pressure" — presión de contacto Winkler, patrón similar
// a displacementZ (centro = max compresión = azul; bordes = mínima = rojo) con auto-escala.
const settingsObj: Record<string, any> = {
  deformedShape: true,
  shellResults: "pressure",
  gridSize: 10,
  showCotas: true,
};

// ── Build UI ──
const viewerElm = getViewer({
  mesh: { nodes, elements, nodeInputs, elementInputs, deformOutputs, analyzeOutputs },
  objects3D,
  settingsObj,
});
document.body.append(
  viewerElm,
  getToolbar({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/",
  })
);
document.body.appendChild(modalPanel.div);

// ── Cargar ejemplo inicial via ?t= o default ──
const urlT = new URLSearchParams(window.location.search).get("t");
const initialEx =
  (urlT && examplesRegistry.find((e) => e.id === urlT)) ||
  examplesRegistry.find((e) => e.id === "zapata-aislada") ||
  examplesRegistry[0];
if (initialEx) {
  loadExample(initialEx);
  // Para zapata aislada: vista en planta por default (visual directo del colormap de presión)
  if (initialEx.id === "zapata-aislada" || initialEx.id === "zapata-viga-amarre") {
    setTimeout(() => setView("plan"), 200);
  }
}
