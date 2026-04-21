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
import { examplesRegistry, activeExampleVersion, type ExampleDef } from "./exampleRegistry";
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
// Objeto mutable que backea el folder "📊 Calculados" del Tweakpane.
// Después de cada rebuild(), se re-llena con computedLabels() y el pane.refresh()
// lo refleja en la UI como bindings readonly.
let computedObj: Record<string, string> | null = null;
// Objeto mutable para los valores INLINE calculados (ks después de q_adm, etc.).
// Misma lógica que computedObj: mutamos in-place y el pane.refresh() los actualiza.
let inlineComputedObj: Record<string, string> | null = null;
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
  // Invalidar derives de ejemplos previos (e.g. springs reactivos de zapatas)
  activeExampleVersion.v++;
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
/**
 * Calcula deformScale para que la deformada máxima sea ~5% del diagonal del modelo.
 * deformScale es independiente de displayScale (que afecta flechas de cargas/soportes).
 * Se auto-computa en cada build, dando visibilidad inicial. Cuando el usuario cambia
 * la carga (rebuild con mismos parámetros geométricos), deformScale se re-ajusta,
 * pero el usuario puede fijar un valor manual desde el slider "Deform scale".
 */
function autoScaleDeformedShape() {
  const s = (viewerElm as any).__settings;
  if (!s?.deformScale) return;
  const nodesArr = states.nodes.rawVal;
  const defMap = states.deformOutputs.rawVal?.deformations;
  if (!nodesArr?.length || !defMap) { s.deformScale.val = 1; return; }
  let xMin=Infinity,yMin=Infinity,zMin=Infinity,xMax=-Infinity,yMax=-Infinity,zMax=-Infinity;
  for (const n of nodesArr) {
    if (n[0]<xMin) xMin=n[0]; if (n[0]>xMax) xMax=n[0];
    if (n[1]<yMin) yMin=n[1]; if (n[1]>yMax) yMax=n[1];
    if (n[2]<zMin) zMin=n[2]; if (n[2]>zMax) zMax=n[2];
  }
  const diag = Math.sqrt((xMax-xMin)**2 + (yMax-yMin)**2 + (zMax-zMin)**2) || 1;
  let maxDef = 0;
  defMap.forEach((d) => {
    const m = Math.sqrt((d[0]||0)**2 + (d[1]||0)**2 + (d[2]||0)**2);
    if (m > maxDef) maxDef = m;
  });
  if (maxDef < 1e-30) { s.deformScale.val = 1; return; }
  // Target: deformación visible = 25% del diagonal (antes 15% — poco visible a 10 tonf).
  // Con 25% ya se ve claramente la curvatura de la placa a cargas moderadas.
  s.deformScale.val = Math.min(50000, Math.max(1, (0.25 * diag) / maxDef));
  // displayScale solo para markers — fijo en 1 (1:1 real)
  if (s.displayScale) s.displayScale.val = 1;
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
  // Refrescar el folder "📊 Calculados" con los nuevos valores derivados
  if (currentExample.computedLabels && computedObj) {
    const latest = currentExample.computedLabels(currentParams, states);
    for (const key of Object.keys(computedObj)) {
      if (key in latest) computedObj[key] = latest[key];
    }
  }
  // Refrescar los valores INLINE (ks debajo de ks_factor, etc.)
  if (currentExample.inlineComputed && inlineComputedObj) {
    for (const ic of currentExample.inlineComputed) {
      const uniqKey = `__inline_${ic.after}_${ic.label}`;
      inlineComputedObj[uniqKey] = ic.compute(currentParams, states);
    }
  }
  currentPane?.refresh();
}

// ── Tweakpane panel (encima del viewer) ──
const paneHost = document.createElement("div");
// top: 96px para que el Tweakpane quede claramente debajo de la toolbar superior
// (logo Hekatan + sourceCode + author) y no se superponga.
// max-height: calc(100vh - 112px) para que el panel no se salga por abajo tampoco.
paneHost.style.cssText = "position:fixed;top:96px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px";
document.body.appendChild(paneHost);

// Helper de vistas — usa contexto Three.js del viewer (camera + controls)
function setView(preset: "iso" | "plan" | "elevX" | "elevY") {
  const ctx: any = (viewerElm as any).__ctx;
  if (!ctx) return;
  const { camera, controls, render } = ctx;
  // Bounding box del modelo para auto-fit
  const nodesArr = states.nodes.rawVal ?? [];
  let xMin=Infinity,yMin=Infinity,zMin=Infinity,xMax=-Infinity,yMax=-Infinity,zMax=-Infinity;
  for (const n of nodesArr) {
    if (n[0]<xMin) xMin=n[0]; if (n[0]>xMax) xMax=n[0];
    if (n[1]<yMin) yMin=n[1]; if (n[1]>yMax) yMax=n[1];
    if (n[2]<zMin) zMin=n[2]; if (n[2]>zMax) zMax=n[2];
  }
  const cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cz = (zMin + zMax) / 2;
  const dx = (xMax - xMin) || 1, dy = (yMax - yMin) || 1, dz = (zMax - zMin) || 1;
  const diag = Math.sqrt(dx*dx + dy*dy + dz*dz) || 5;
  controls.target.set(cx, cy, cz);

  // Para vistas 2D (plan/elev): FOV chico (~5°) → cuasi-ortográfico.
  // Para iso: FOV normal 45°.
  if (preset === "iso") {
    (camera as THREE.PerspectiveCamera).fov = 45;
    const d = diag * 1.2;
    camera.position.set(cx + d * 0.6, cy - d * 0.6, cz + d * 0.6);
  } else {
    (camera as THREE.PerspectiveCamera).fov = 5;  // cuasi-ortográfico
    // Distancia tal que el extent cabe con margen en el FOV pequeño.
    // tan(2.5°) × distance = halfExtent → distance = halfExtent / tan(2.5°) ≈ halfExtent × 22.9
    const halfExtent = diag / 2;
    const d = halfExtent * 25;
    switch (preset) {
      case "plan":  camera.position.set(cx, cy, cz + d); break;
      case "elevX": camera.position.set(cx + d, cy, cz); break;
      case "elevY": camera.position.set(cx, cy + d, cz); break;
    }
  }
  camera.up.set(0, 0, 1);
  (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
  camera.lookAt(cx, cy, cz);
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
  // Folders que aparecen expandidos por default (el usuario los usa todo el tiempo):
  //  - "Parámetros" (raíz)
  //  - Cualquier folder con "Modo" en el título (el selector Simple/D/L/S/Combinación)
  //  - Folder "Combinación" dentro de cargas (para ver factores fD/fL/fS al vuelo)
  const isExpandedByDefault = (title: string) =>
    title === defaultFolderTitle ||
    /\bmodo\b/i.test(title) ||
    /activar/i.test(title) ||       // "Cargas — Activar" (toggles D/L/S)
    /combinaci/i.test(title);
  const getFolder = (title: string) => {
    if (!folderMap.has(title)) {
      folderMap.set(title, pane.addFolder({ title, expanded: isExpandedByDefault(title) }));
    }
    return folderMap.get(title);
  };
  let timer: number | null = null;
  const scheduleRebuild = () => {
    if (timer !== null) clearTimeout(timer);
    timer = window.setTimeout(() => { timer = null; rebuild(); }, 120);
  };
  // Proxy de booleanos: Tweakpane requiere true/false nativo para renderizar
  // un checkbox, pero `currentParams` usa 0/1 (Record<string, number>).
  // Guardamos un proxy {key: boolean} y sincronizamos en cada cambio.
  const boolProxy: Record<string, boolean> = {};
  // Prepara los valores inline calculados (ks, D, etc.) ANCLADOS a cada param.
  // Mapa: key del param → lista de inlines a insertar después.
  const inlineByAfter = new Map<string, Array<{ label: string; key: string; compute: any }>>();
  inlineComputedObj = {};
  if (currentExample.inlineComputed) {
    for (const ic of currentExample.inlineComputed) {
      const uniqKey = `__inline_${ic.after}_${ic.label}`;
      inlineComputedObj[uniqKey] = ic.compute(currentParams, states);
      if (!inlineByAfter.has(ic.after)) inlineByAfter.set(ic.after, []);
      inlineByAfter.get(ic.after)!.push({ label: ic.label, key: uniqKey, compute: ic.compute });
    }
  }
  for (const [key, p] of Object.entries(currentExample.params)) {
    const folderTitle = p.folder ?? defaultFolderTitle;
    const fTarget = getFolder(folderTitle);
    if (p.boolean) {
      // Checkbox on/off. Valor almacenado como 0|1 en currentParams.
      boolProxy[key] = currentParams[key] >= 0.5;
      fTarget.addBinding(boolProxy, key, { label: p.label ?? key }).on("change", (e) => {
        currentParams[key] = e.value ? 1 : 0;
        if (currentExample?.onParamChange) {
          currentExample.onParamChange(key, currentParams);
          pane.refresh();
        }
        scheduleRebuild();
      });
      continue;
    }
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
    // Si este param tiene inlines anclados (ej. ks después de ks_factor),
    // insertar los readonly bindings en el MISMO folder, justo debajo.
    const inlines = inlineByAfter.get(key);
    if (inlines && inlineComputedObj) {
      for (const il of inlines) {
        fTarget.addBinding(inlineComputedObj, il.key, {
          readonly: true,
          label: il.label,
          view: "text",
        } as any);
      }
    }
  }

  // ── Folder "📊 Calculados" (read-only) — valores derivados del build actual ──
  // Solo se muestra si el ejemplo exporta computedLabels(). Se actualiza en cada rebuild.
  if (currentExample.computedLabels) {
    const fCalc = pane.addFolder({ title: "📊 Calculados", expanded: true });
    // Objeto mutable que tweakpane monitorea. Claves = labels, valores = strings.
    const initial = currentExample.computedLabels(currentParams, states);
    computedObj = { ...initial };
    console.log("[Calculados]", computedObj);
    for (const key of Object.keys(initial)) {
      // view:'text' fuerza a Tweakpane v4 a usar TextInputView para strings readonly
      // (sin esto, strings readonly a veces se pintan vacíos).
      fCalc.addBinding(computedObj, key, {
        readonly: true,
        view: "text",
        interval: 0,
      } as any);
    }
  } else {
    computedObj = null;
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
