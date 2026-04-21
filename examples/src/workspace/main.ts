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
  // Aplica el colormap por defecto que cada ejemplo declara.
  // Si el anterior tenía seleccionado "pressure" y el nuevo no lo populó,
  // quedaría 0 everywhere — así evitamos ese caso.
  if (ex.defaultShellResult) {
    const s = (viewerElm as any).__settings;
    if (s?.shellResults) s.shellResults.val = ex.defaultShellResult;
    // Encender Loads y Supports por default para que el usuario vea la condición del modelo.
    if (s?.loads) s.loads.val = true;
    if (s?.supports) s.supports.val = true;
  }
  // Filtra el dropdown Shell results según lo que el ejemplo declara soportar.
  // "pressure" solo se ofrece en zapatas (con resortes Winkler); "bending*" solo
  // en elementos que flexan; "membrane*" solo en plane-stress; etc.
  filterShellResultOptions(ex.availableShellResults);
  autoScaleDeformedShape();
  autoFitCamera();
  buildParamsPane();
}

/**
 * Deja displayScale en 1 para que las flechas de carga/soportes no se inflen
 * y tapen el viewport. Al cambiar la carga, la deformada crece proporcionalmente
 * en valor absoluto; si el usuario necesita exagerarla visualmente, tiene el
 * slider "Display scale" en el panel Settings.
 */
function autoScaleDeformedShape() {
  const s = (viewerElm as any).__settings;
  // Default -1 → factor efectivo 1:1 real (no amplifica). Usuario puede mover
  // el slider a valores positivos para exagerar la deformada.
  if (s?.displayScale) s.displayScale.val = -1;
}

/**
 * Auto-fit de cámara al modelo actual. Reencuadra el viewer para que el edificio
 * /placa/etc. entre en pantalla con un margen razonable, sin que ocupe toda la
 * plataforma. Se llama después de cada build/rebuild.
 */
function autoFitCamera() {
  const ctx = (viewerElm as any).__ctx;
  const nodesArr = states.nodes.rawVal;
  if (!ctx || !nodesArr?.length) return;
  const { camera, controls, render } = ctx;
  // Bounding box del modelo
  let minX=Infinity,minY=Infinity,minZ=Infinity,maxX=-Infinity,maxY=-Infinity,maxZ=-Infinity;
  for (const n of nodesArr) {
    if (n[0]<minX) minX=n[0]; if (n[0]>maxX) maxX=n[0];
    if (n[1]<minY) minY=n[1]; if (n[1]>maxY) maxY=n[1];
    if (n[2]<minZ) minZ=n[2]; if (n[2]>maxZ) maxZ=n[2];
  }
  const cx = (minX+maxX)/2, cy = (minY+maxY)/2, cz = (minZ+maxZ)/2;
  const dx = maxX-minX, dy = maxY-minY, dz = maxZ-minZ;
  const extent = Math.max(Math.sqrt(dx*dx+dy*dy+dz*dz), 1);
  // Distancia = 2.2× diagonal para que el modelo ocupe ~40-50% del viewport
  // (como /beams/ que no ocupa toda la pantalla).
  const dist = 2.2 * extent;
  controls.target.set(cx, cy, cz);
  // Posicionar cámara isométrica sobre el modelo (vista estándar 3D)
  const k = dist / Math.sqrt(3);
  camera.position.set(cx + k, cy - k, cz + k);
  camera.up.set(0, 0, 1);
  camera.near = extent * 0.001;
  camera.far = extent * 50;
  camera.updateProjectionMatrix();
  camera.lookAt(cx, cy, cz);
  controls.update();
  render?.();
  // También actualizar el gridSize del viewer para que el grid matchee el modelo
  const s = (viewerElm as any).__settings;
  if (s?.gridSize) s.gridSize.val = Math.max(Math.ceil(Math.max(dx, dy) * 1.2), 2);
}

/** Oculta opciones no aplicables del <select> "Shell results" del Settings HTML
 *  y sincroniza su display con el estado actual de shellResults. */
function filterShellResultOptions(allowed?: string[]) {
  // Busca el select que contiene "bendingXX" para distinguirlo de los otros dropdowns.
  const selects = viewerElm.querySelectorAll<HTMLSelectElement>("select");
  const shellSelect = Array.from(selects).find((s) =>
    Array.from(s.options).some((o) => o.value === "bendingXX")
  );
  if (!shellSelect) return;
  for (const opt of Array.from(shellSelect.options)) {
    // "none" siempre disponible; resto solo si está en la lista (o si no se declaró).
    const show = opt.value === "none" || !allowed || allowed.includes(opt.value);
    opt.hidden = !show;
    opt.disabled = !show;
  }
  // Sincronizar el valor mostrado con el estado actual (Tweakpane no lo hace solo).
  const s = (viewerElm as any).__settings;
  if (s?.shellResults) {
    shellSelect.value = s.shellResults.val;
    shellSelect.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

function rebuild() {
  if (!currentExample) return;
  resetStates();
  currentExample.build(currentParams, states, modalPanel);
  autoScaleDeformedShape();
  autoFitCamera();
}

// ── Tweakpane panel (encima del viewer) ──
const paneHost = document.createElement("div");
paneHost.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px";
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

  // ── Parámetros del ejemplo — agrupados en folders (si ParamDef.folder se define) ──
  const defaultFolderTitle = "Parámetros";
  const folderMap = new Map<string, any>();  // folder title → Tweakpane folder instance
  const getFolder = (title: string) => {
    if (!folderMap.has(title)) {
      folderMap.set(title, pane.addFolder({ title, expanded: title === defaultFolderTitle }));
    }
    return folderMap.get(title);
  };
  let timer: number | null = null;
  const scheduleRebuild = () => {
    if (timer !== null) clearTimeout(timer);
    timer = window.setTimeout(() => { timer = null; rebuild(); }, 120);
  };
  for (const [key, p] of Object.entries(currentExample.params)) {
    const folderTitle = p.folder ?? defaultFolderTitle;
    const fTarget = getFolder(folderTitle);
    const opts: any = { label: p.label ?? key };
    if (p.options !== undefined) {
      opts.options = p.options;
    } else {
      if (p.min !== undefined) opts.min = p.min;
      if (p.max !== undefined) opts.max = p.max;
      if (p.step !== undefined) opts.step = p.step;
    }
    fTarget.addBinding(currentParams, key, opts).on("change", () => {
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
  displayScale: -1,       // escala 1:1 real de deformada (no amplifica)
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
  // Zapata: vista isométrica por default — se ven los resortes Winkler en elevación
  // comprimidos/extendidos según la deformada (como en croquis clásicos de ingeniería).
  if (initialEx.id === "zapata-aislada" || initialEx.id === "zapata-viga-amarre") {
    setTimeout(() => setView("iso"), 200);
  }
}
