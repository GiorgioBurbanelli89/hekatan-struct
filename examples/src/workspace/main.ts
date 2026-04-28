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
} from "hekatan-fem";
import { getToolbar, getViewer, colorMapForceUnit, colorMapDispUnit } from "hekatan-ui";
import { createModalPanel } from "../shared/renderModalTable";
import { createModalAnimator, type ModalAnimator } from "../shared/animateMode";
// createModalAnimator también se llama en buildParamsPane() para re-wirear el
// callback onStatusChange al folder "⚡ Modal + Animación" recién creado.
import { examplesRegistry, activeExampleVersion, type ExampleDef } from "./exampleRegistry";
import { downloadZapataF2k } from "../zapata-aislada/f2kExporter";
import { parseZapataF2k } from "../zapata-aislada/f2kImporter";
import { exportE2k } from "../shared/e2kExporter";
import { parseE2k } from "../shared/e2kParser";
import { exportS2k } from "../shared/s2kExporter";
import { parseS2k } from "../shared/s2kParser";
import {
  forceUnit, dispUnit, fromKn, toKn, fromKnm, toKnm,
  forceUnitSuffix, momentUnitSuffix, dispUnitSuffix, stripUnitSuffix,
} from "./units";

// Propagación de unidades al viewer de hekatan-ui: cualquier cambio en
// forceUnit/dispUnit del workspace se refleja en el colormap legend y en
// el scaling de sus valores (kN/m² → tonf/m², mm → cm, etc.).
van.derive(() => { colorMapForceUnit.val = forceUnit.val; });
van.derive(() => { colorMapDispUnit.val = dispUnit.val; });

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
// ── Modal animation state (compartido para todos los ejemplos con hasModal=true) ──
// modeIdx es 1-INDEXADO para que la UI muestre "Modo 1, 2, 3..." en vez de "0, 1, 2...".
// animCtrl se refresca dinámicamente tras correr el modal para reflejar modeCount real.
const animCtrl = { modeIdx: 1 };
let modalAnimator: ModalAnimator;
// Objeto mutable que backea el folder "📊 Calculados" del Tweakpane.
// Después de cada rebuild(), se re-llena con computedLabels() y el pane.refresh()
// lo refleja en la UI como bindings readonly.
let computedObj: Record<string, string> | null = null;
// Objeto mutable para los valores INLINE calculados (ks después de q_adm, etc.).
// Misma lógica que computedObj: mutamos in-place y el pane.refresh() los actualiza.
let inlineComputedObj: Record<string, string> | null = null;
// Registro de bindings con visibilidad dinámica (hiddenIf). En cada rebuild
// evaluamos la función y aplicamos .hidden al binding del Tweakpane.
interface HiddenBinding { binding: any; hiddenIf: (p: Record<string, number>) => boolean; }
let hiddenBindings: HiddenBinding[] = [];
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
  // ── Ejemplos legacy del upstream awatif (1d-mesh, beams, plate-q4, etc.):
  // tienen su propia UI VanJS toolbar y no encajan en el flujo Tweakpane del
  // workspace. El pane solo muestra un botón "Abrir ejemplo →" que navega
  // al index.html standalone. ──
  if (ex.standaloneUrl) {
    // Limpiar animaciones y estado del ejemplo previo
    const animKeys = ["__rbsK3Anim", "__bfpK3Anim", "__endPlateK3Anim"];
    for (const k of animKeys) {
      const id = (window as any)[k];
      if (id) { clearInterval(id); (window as any)[k] = null; }
    }
    try { modalAnimator?.stop?.(); } catch {}
    activeExampleVersion.v++;
    resetStates();
    currentParams = {};
    buildParamsPane();
    return;
  }
  // currentParams se almacena en la UNIDAD UI seleccionada. Los p.default
  // están escritos en SI (kN, kN·m) por convención; aquí los convertimos a
  // la unidad UI del usuario para que los sliders muestren valores coherentes.
  currentParams = Object.fromEntries(
    Object.entries(ex.params ?? {}).map(([k, p]) => {
      const valSI = p.default;
      if (p.unitType === "force")  return [k, fromKn(valSI)];
      if (p.unitType === "moment") return [k, fromKnm(valSI)];
      return [k, valSI];
    }),
  );
  // ── BUGFIX: limpiar animaciones del ejemplo previo antes de cambiar.
  // Sin esto, los setInterval siguen corriendo en background y al cambiar
  // de ejemplo modifican el deformScale del nuevo (causa lag y jank). ──
  const animKeys = ["__rbsK3Anim", "__bfpK3Anim", "__endPlateK3Anim"];
  for (const k of animKeys) {
    const id = (window as any)[k];
    if (id) {
      clearInterval(id);
      (window as any)[k] = null;
    }
  }
  // Detener animación modal si existe
  try { modalAnimator?.stop?.(); } catch {}
  // Invalidar derives de ejemplos previos (e.g. springs reactivos de zapatas)
  activeExampleVersion.v++;
  resetStates();
  ex.build?.(toSIParams(), states, modalPanel);
  // Aplica el colormap por defecto que cada ejemplo declara.
  // Si el anterior tenía seleccionado "pressure" y el nuevo no lo populó,
  // quedaría 0 everywhere — así evitamos ese caso.
  // ── Display scale automático para conexiones (modelo pequeño escala -6) ──
  // Las conexiones (RBS, BFP, End Plate, Placa Base) tienen modelos del orden
  // de 0.5–4m, mientras flechas/markers default son grandes. Reducir
  // displayScale al cargar evita que cargas/apoyos tapen la geometría.
  const isConexion = ex.id?.startsWith("conexion-") || ex.id === "placa-base";
  if (isConexion) {
    const s = (viewerElm as any).__settings;
    if (s?.displayScale) s.displayScale.val = -6;
  }
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

  // Compute MAX HORIZONTAL (Ux,Uy) and MAX VERTICAL (Uz) separately.
  let maxUh = 0, maxUz = 0;
  defMap.forEach((d) => {
    const h = Math.sqrt((d[0]||0)**2 + (d[1]||0)**2);
    const v = Math.abs(d[2]||0);
    if (h > maxUh) maxUh = h;
    if (v > maxUz) maxUz = v;
  });

  const dx = xMax - xMin, dy = yMax - yMin, dz = zMax - zMin;
  const isBuilding = dz > 1.1 * Math.max(dx, dy);

  let scale: number;
  let scaleZfactor: number;   // multiplicador extra para Z (deformScaleZ)

  if (isBuilding) {
    // EDIFICIO: el scale XY se calibra al sway horizontal (target 10% del diagonal).
    // El scaleZ se pone BAJO (~0.15) porque las columnas de concreto/acero son
    // axialmente RÍGIDAS: EA de una col 40×40 hormigón ≈ 4 MN/m, carga típica
    // 400 kN → acortamiento elástico ~0.1 mm/m, totalmente imperceptible en la
    // realidad. Amplificar Uz con el mismo factor XY las hace ver como 'alfeñique'.
    if (maxUh > 1e-9) {
      scale = Math.min(5000, Math.max(1, (0.10 * diag) / maxUh));
    } else {
      scale = 10;  // caso gravitacional puro, scale fijo conservador
    }
    scaleZfactor = 0.15;  // Uz visible = 15% del Ux/Uy visible — refleja rigidez axial real
  } else {
    // PLACA / ZAPATA / SHELL / MURO A CORTE (Δz pequeña): la deformación
    // principal ES Uz (bending out-of-plane de una placa plana, o sag de zapata
    // sobre resortes Winkler). Amplificamos Uz NORMALMENTE (scaleZ=1) para que
    // el usuario VEA claramente la deformada, que es el objetivo didáctico.
    const refDef = Math.max(maxUh, maxUz);
    if (refDef < 1e-30) { s.deformScale.val = 1; return; }
    scale = Math.min(50000, Math.max(1, (0.15 * diag) / refDef));
    scaleZfactor = 1.0;   // Uz = XY: zapatas/placas muestran la deformada completa
  }
  s.deformScale.val = Math.max(1, scale);
  if (s.deformScaleZ) s.deformScaleZ.val = scaleZfactor;
  // Display scale: −1.5 default (flechas pequeñas) pero −6 para conexiones
  // (modelo de orden 0.5–4 m, evitar que markers tapen geometría).
  const isConexion = currentExample?.id?.startsWith("conexion-") ||
                     currentExample?.id === "placa-base";
  if (s.displayScale) s.displayScale.val = isConexion ? -6 : -1.5;
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

/**
 * Convierte currentParams (que se almacena en la unidad UI seleccionada por
 * el usuario) a unidades SI (kN, kN·m, m) ANTES de pasar al build() del
 * ejemplo. Así los ejemplos siempre trabajan en SI, independientemente de
 * lo que el usuario haya seleccionado en "Unidades".
 */
function toSIParams(): Record<string, number> {
  if (!currentExample) return {};
  const si: Record<string, number> = { ...currentParams };
  for (const [k, p] of Object.entries(currentExample.params)) {
    if (p.unitType === "force")  si[k] = toKn(currentParams[k]);
    if (p.unitType === "moment") si[k] = toKnm(currentParams[k]);
    // disp: convertir UI → m (aún no implementado — agregar dispToM si necesario)
  }
  return si;
}

function rebuild() {
  if (!currentExample) return;
  resetStates();
  currentExample.build(toSIParams(), states, modalPanel);
  // NO auto-escalar en rebuild — así cuando el usuario sube la carga,
  // la deformada crece visualmente (scale fijo × w creciente).
  // El auto-scale solo se llama en loadExample (primer build) para dar
  // una escala inicial razonable; después el usuario puede ajustarla
  // manualmente desde el slider "Deform scale".
  // autoScaleDeformedShape();   ← REMOVIDO
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

// ── Tweakpane panel (encima del viewer, ARRASTRABLE) ──
const paneHost = document.createElement("div");
// top: 96px para que el Tweakpane quede claramente debajo de la toolbar superior.
// El usuario puede arrastrarlo a cualquier posición (ver makePaneDraggable más abajo).
// Posición persistida en localStorage para mantenerla entre sesiones.
const PANE_POS_KEY = "hk_paneHostPos";
const savedPos = (() => {
  try {
    const raw = localStorage.getItem(PANE_POS_KEY);
    if (raw) return JSON.parse(raw) as { left: number; top: number };
  } catch {}
  return null;
})();
paneHost.style.cssText =
  "position:fixed;" +
  (savedPos ? `left:${savedPos.left}px;top:${savedPos.top}px;right:auto;` : "top:96px;right:16px;") +
  "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;" +
  "max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px;" +
  // Pequeña sombra y borde para indicar que es una ventana flotante
  "box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);";
document.body.appendChild(paneHost);

/**
 * Convierte un elemento en arrastrable desde su "handle" (cualquier elemento
 * con la clase `tp-fldv_b` o el primer `.tp-rotv_b` del Tweakpane — sus
 * headers/title-bars). Persiste la posición en localStorage.
 */
function makePaneDraggable(host: HTMLElement) {
  const findHandle = (): HTMLElement | null =>
    host.querySelector(".tp-rotv_b, .tp-fldv_b") as HTMLElement | null;
  let handle = findHandle();
  // Reintentar si Tweakpane aún no renderizó
  if (!handle) {
    setTimeout(() => makePaneDraggable(host), 200);
    return;
  }
  handle.style.cursor = "move";
  handle.style.userSelect = "none";

  let dragging = false;
  let startX = 0, startY = 0, origLeft = 0, origTop = 0;
  handle.addEventListener("mousedown", (e) => {
    // Dejar pasar el click normal (colapsar/expandir); solo arrastrar con shift o
    // con arrastre >5px. Detectamos arrastre real en mousemove.
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const r = host.getBoundingClientRect();
    origLeft = r.left;
    origTop = r.top;
    host.style.right = "auto";
    host.style.left = `${origLeft}px`;
    host.style.top = `${origTop}px`;
    e.preventDefault();
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newLeft = Math.max(0, Math.min(window.innerWidth - 40, origLeft + dx));
    const newTop = Math.max(0, Math.min(window.innerHeight - 40, origTop + dy));
    host.style.left = `${newLeft}px`;
    host.style.top = `${newTop}px`;
  });
  window.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false;
    try {
      localStorage.setItem(PANE_POS_KEY, JSON.stringify({
        left: parseFloat(host.style.left),
        top: parseFloat(host.style.top),
      }));
    } catch {}
  });
}

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
  // Hacer el pane arrastrable desde su title-bar. El DOM del Tweakpane se
  // crea de forma síncrona, así que el handle ya está disponible al llamar.
  setTimeout(() => makePaneDraggable(paneHost), 0);

  // ── Selector con SUBLISTAS por categoría ──
  // Dos dropdowns: Categoría → Ejemplo. Filtra los ejemplos visibles según la
  // categoría elegida. Mucho más manejable cuando hay 30+ ejemplos.
  // Categorías derivadas dinámicamente del registry (cada ExampleDef.category).
  const allCategories = Array.from(new Set(examplesRegistry.map((e) => e.category)));
  // Orden preferido de categorías (las primeras arriba, después alfabético)
  const categoryOrder = [
    "🏁 Benchmarks",
    "Cimentaciones",
    "Frames 1D",
    "Pórticos 2D",
    "Pórticos 3D",
    "Edificios",
    "Placas",
    "Cáscaras",
    "Sólidos",
    "Conexiones",
    "Columnas",
  ];
  const sortedCats = [
    ...categoryOrder.filter((c) => allCategories.includes(c)),
    ...allCategories.filter((c) => !categoryOrder.includes(c)).sort(),
  ];
  const ALL = "Todas";
  const catOptions: Record<string, string> = { [ALL]: ALL };
  for (const c of sortedCats) catOptions[c] = c;

  const selectorObj = { category: currentExample.category, id: currentExample.id };

  const catBinding = pane.addBinding(selectorObj, "category", {
    label: "Categoría", options: catOptions,
  });

  // Helper: opciones del dropdown "Ejemplo" filtradas por la categoría seleccionada.
  const buildExOptions = (cat: string) =>
    Object.fromEntries(
      examplesRegistry
        .filter((e) => cat === ALL || e.category === cat)
        .map((e) => [`${e.benchmark ? "🏁 " : ""}${e.name}`, e.id])
    );

  let exBinding = pane.addBinding(selectorObj, "id", {
    label: "Ejemplo", options: buildExOptions(selectorObj.category),
  });
  exBinding.on("change", (e) => {
    const nextEx = examplesRegistry.find((x) => x.id === e.value);
    // ── BUGFIX: defer loadExample a next tick (ver comentario abajo) ──
    if (nextEx) setTimeout(() => loadExample(nextEx), 0);
  });

  catBinding.on("change", (e) => {
    // Reconstruir el dropdown "Ejemplo" cuando cambia la categoría.
    const newOptions = buildExOptions(e.value);
    const newIds = Object.values(newOptions);
    if (newIds.length === 0) return;
    // Si el id actual no está en la nueva categoría, switch al primero
    if (!newIds.includes(selectorObj.id)) selectorObj.id = newIds[0] as string;
    // Tweakpane no permite mutar `options` de un binding existente — hay que
    // disponer y recrear. Usamos el orden actual (después de category, antes de
    // que termine el constructor del pane).
    try { exBinding.dispose(); } catch {}
    exBinding = pane.addBinding(selectorObj, "id", {
      label: "Ejemplo", options: newOptions, index: 2,  // colocar justo después de Categoría
    });
    exBinding.on("change", (ev) => {
      const nextEx = examplesRegistry.find((x) => x.id === ev.value);
      if (nextEx) setTimeout(() => loadExample(nextEx), 0);
    });
    // Cargar el ejemplo seleccionado en la nueva categoría
    const newEx = examplesRegistry.find((x) => x.id === selectorObj.id);
    if (newEx && newEx.id !== currentExample?.id) setTimeout(() => loadExample(newEx), 0);
  });

  // ── Ejemplos legacy del upstream awatif: solo botón al standalone ──
  if (currentExample.standaloneUrl) {
    const url = currentExample.standaloneUrl;
    const note = pane.addFolder({ title: "ℹ Ejemplo legacy", expanded: true });
    // Tweakpane no tiene texto multilínea fácil; uso botones consecutivos como labels.
    note.addButton({ title: "🔗 Abrir ejemplo →" }).on("click", () => {
      window.location.href = url;
    });
    note.addButton({ title: "(usa toolbar VanJS propio)" }).on("click", () => {});
    currentPane = pane;
    return;
  }

  // ── Reporte matemático FEM (estilo Calcpad) — pendiente módulo mathReport ──

  // ── Vista (planta / elevación / isométrica) ──
  const fView = pane.addFolder({ title: "Vista", expanded: false });
  fView.addButton({ title: "🏗 Isométrica" }).on("click", () => setView("iso"));
  fView.addButton({ title: "⬇ Planta (X-Y)" }).on("click", () => setView("plan"));
  fView.addButton({ title: "→ Elevación X (frente)" }).on("click", () => setView("elevX"));
  fView.addButton({ title: "↑ Elevación Y (lado)" }).on("click", () => setView("elevY"));

  // ── SAFE F2K Export/Import (solo para zapatas) ──
  // Permite roundtrip Hekatan ↔ SAFE para validación cruzada.
  if (currentExample && currentExample.id.startsWith("zapata")) {
    const fF2K = pane.addFolder({ title: "SAFE", expanded: false });
    fF2K.addButton({ title: "📤 Exportar F2K" }).on("click", () => {
      try {
        const p = currentParams;
        // Calcular ks en kN/m³ desde params actuales
        const ks_factor = p.ks_factor ?? 10.5;
        const q_adm_tonf = p.q_adm ?? 20;
        const ks_kNm3 = ks_factor * q_adm_tonf * 9.80665;  // tonf/m² × 9.80665 = kN/m²
        // Cargas: usar Carga Simple si está activa, sino patrón D
        const useSimple = (p.useSimple ?? 1) >= 0.5;
        const P_dead_kN = useSimple ? (p.P_simple ?? 0) * 9.80665 : (p.P_D ?? 10) * 9.80665;
        const P_live_kN = useSimple ? 0 : (p.P_L ?? 5) * 9.80665;
        const Mx_dead = useSimple ? (p.Mx_simple ?? 0) * 9.80665 : (p.Mx_D ?? 0) * 9.80665;
        const My_dead = useSimple ? (p.My_simple ?? 0) * 9.80665 : (p.My_D ?? 0) * 9.80665;
        const bytes = downloadZapataF2k({
          Lz: p.Lz ?? 1.5,
          Bz: p.Bz ?? 1.5,
          tz: p.tz ?? 0.30,
          bc: p.bc ?? 0.4,
          ks_kNm3,
          P_dead_kN, P_live_kN,
          Mx_dead_kNm: Mx_dead, My_dead_kNm: My_dead,
        }, `Zapata_Hekatan_${Date.now()}.f2k`);
        console.log(`✅ F2K exportado: ${bytes} bytes con ks=${ks_kNm3.toFixed(0)} kN/m³, P_D=${P_dead_kN.toFixed(1)} kN`);
        alert(`F2K descargado correctamente.\n\nks=${ks_kNm3.toFixed(0)} kN/m³\nP_dead=${P_dead_kN.toFixed(1)} kN\n\nAbrilo en SAFE 20.x: File → Import → SAFE Text File (.f2k)`);
      } catch (e: any) {
        alert(`Error exportando F2K: ${e?.message ?? e}`);
        console.error(e);
      }
    });
    fF2K.addButton({ title: "📥 Importar F2K…" }).on("click", () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".f2k,.txt";
      input.onchange = async (ev: any) => {
        const file = ev.target.files?.[0];
        if (!file) return;
        try {
          const text = await file.text();
          const params = parseZapataF2k(text);
          // Aplicar al modelo actual
          if (params.Lz != null) currentParams.Lz = params.Lz;
          if (params.Bz != null) currentParams.Bz = params.Bz;
          if (params.tz != null) currentParams.tz = params.tz;
          if (params.bc != null) currentParams.bc = params.bc;
          if (params.q_adm != null) currentParams.q_adm = params.q_adm;
          if (params.ks_factor != null) currentParams.ks_factor = params.ks_factor;
          // CRÍTICO: ks (kN/m³) es el valor que usa el solver. Sin escribirlo aquí
          // el slider queda en default (2059 kN/m³) aunque el F2K traía
          // 19,999 kN/m³ (= 2,039 tonf/m³ que SAFE muestra como Subgrade Modulus).
          if (params.ks_kNm3 != null) currentParams.ks = params.ks_kNm3;
          if (params.P_dead_tonf != null) {
            currentParams.useSimple = 1;
            currentParams.P_simple = params.P_dead_tonf;
            // Si hay carga simple, desactivar patrones D/L/S para evitar superposición
            currentParams.useD = 0;
            currentParams.useL = 0;
            currentParams.useS = 0;
          }
          if (params.Mx_dead_tonfm != null) currentParams.Mx_simple = params.Mx_dead_tonfm;
          if (params.My_dead_tonfm != null) currentParams.My_simple = params.My_dead_tonfm;
          // Si Custom soil type es necesario para reflejar ks importado
          if (params.q_adm != null && params.ks_factor != null) {
            // Forzar Custom (índice 0 en SOIL_TYPES) para que los valores no se sobreescriban
            currentParams.soilType = 0;
          }
          // Reconstruir TODO el pane (lee los nuevos values en buildParamsPane).
          buildParamsPane();
          // Disparar re-cálculo del modelo con los nuevos params.
          rebuild();
          alert(`F2K importado: ${file.name}\nLz=${params.Lz}, Bz=${params.Bz}, tz=${params.tz}\nks=${params.ks_kNm3?.toFixed(0)} kN/m³\nP_dead=${params.P_dead_tonf?.toFixed(2)} tonf\n\nLos sliders del Tweakpane se actualizaron a estos valores.`);
        } catch (e: any) {
          alert(`Error importando F2K: ${e?.message ?? e}`);
          console.error(e);
        }
      };
      input.click();
    });
  }

  // ── Navegación cruzada Edificio ↔ Cimentación ──
  // Si el ejemplo activo es un edificio: botón "→ Diseñar zapata" que toma
  // la reacción máxima de base y la pasa via URL al ejemplo zapata-aislada-validacion.
  // Si es zapata y URL trae ?from=...: botón "← Volver" que regresa.
  if (currentExample) {
    const isBuilding = !currentExample.id.startsWith("zapata");
    const isFooting  = currentExample.id.startsWith("zapata");
    const urlFrom    = new URLSearchParams(window.location.search).get("from");

    if (isBuilding) {
      // ── BOTÓN VISIBLE: toggle FEM cimentación in-place ──
      // En edificios con varias columnas, este botón muestra TODAS las
      // zapatas FEM (Q4 shellthick + Winkler) con sus respectivas P, Mx,
      // My en la misma página. Es un toggle entre:
      //   🏢 Edificio completo (con superestructura)
      //   🪨 Solo cimentación (sin superestructura, P,Mx,My de reacciones
      //                         aplicados a los pedestales de cada zapata)
      try {
        // Detectar si el ejemplo soporta el toggle: presence de la opción
        // modoCimentacion en su definición de params (si tiene PE
        // "modoCimentacion", el dropdown estará en el DOM tras buildPane).
        const exParams = (currentExample as any)?.params;
        const hasModoCim = exParams && exParams.modoCimentacion !== undefined;
        if (hasModoCim) {
          const fCim = pane.addFolder({ title: "🪨 Cimentación FEM (toggle)", expanded: true });
          const cimBtn = fCim.addButton({ title: "🪨 Ver TODAS las zapatas FEM" });
          cimBtn.on("click", () => {
            const selects = Array.from(document.querySelectorAll('select')) as HTMLSelectElement[];
            const target = selects.find(s => {
              const lbl = s.closest('.tp-lblv')?.querySelector('.tp-lblv_l')?.textContent ?? '';
              return lbl.includes('Vista (toggle)');
            });
            if (!target) {
              alert("No se encontró el dropdown 'Vista (toggle)'.");
              return;
            }
            const isInCim = target.value.includes('Solo cimentación');
            const opts = Array.from(target.options);
            const newVal = isInCim
              ? opts.find(o => o.value.includes('Edificio'))?.value
              : opts.find(o => o.value.includes('Solo cimentación'))?.value;
            if (!newVal) return;
            target.value = newVal;
            target.dispatchEvent(new Event('change', { bubbles: true }));
            // Actualizar título del botón
            (cimBtn as any).title = isInCim
              ? "🪨 Ver TODAS las zapatas FEM"
              : "🏢 Volver al edificio completo";
            try { pane.refresh(); } catch {}
            console.log(`[FEM Cim] cambiado a: ${newVal}`);
          });

          // ── Botón: Exportar F2K cimentación COMPLETA ──
          // Genera UN solo .f2k con TODAS las zapatas + vigas de amarre del
          // edificio en un mismo modelo SAFE. Cada zapata mantiene su P, Mx,
          // My propios (de la reacción del apoyo correspondiente).
          fCim.addButton({ title: "📤 Exportar F2K cimentación COMPLETA" }).on("click", async () => {
            const reactions = (deformOutputs.rawVal as any)?.reactions as
              Map<number, [number, number, number, number, number, number]> | undefined;
            const ns = nodes.rawVal as number[][];
            if (!reactions || !ns?.length) {
              alert("Sin reacciones aún — corre primero el análisis del edificio (modo 'Edificio completo').");
              return;
            }
            const p = params as any;
            const q_adm = (p.q_adm_zapata as number) ?? 10;
            const ks = (p.ks_zapata as number) ?? 1030;
            const tz = (p.t_zapata as number) ?? 0.30;
            const colSize = p.colSize ?? 0.40;
            const Hf = (p.Hf_pedestal as number) ?? 0.5;
            const volExt = (p.voladoExtra as number) ?? 0.30;
            const sistema = Math.round((p.sistemaCimentacion as number) ?? 0);
            const va_pos = Math.round((p.vigaAmarre_pos as number) ?? 0);
            const va_h = (p.vigaAmarre_h as number) ?? 0.40;
            const va_b = (p.vigaAmarre_b as number) ?? 0.25;
            const baseRows: Array<{idx:number;x:number;y:number;P_kN:number;Mx_kN:number;My_kN:number}> = [];
            let xMax = 0, yMax = 0;
            reactions.forEach((r, idx) => {
              const n = ns[idx];
              if (!n || Math.abs(n[2]) > 1e-6) return;
              baseRows.push({
                idx, x: n[0], y: n[1],
                P_kN: Math.abs(r[2]), Mx_kN: r[3], My_kN: r[4],
              });
              if (n[0] > xMax) xMax = n[0];
              if (n[1] > yMax) yMax = n[1];
            });
            if (!baseRows.length) { alert("No hay apoyos en z=0."); return; }
            const { designAllFootings } = await import("../shared/footingDesign");
            const { downloadEdificioCimentacionF2k } = await import("../shared/f2kCimentacionCompleta");
            const zapatasD = designAllFootings(baseRows, xMax, yMax, q_adm, ks);
            for (const z of zapatasD) z.t = tz;
            // Construir items con offsets correctos para esquinera/lindero
            const zapatas = zapatasD.map(z => {
              let offX = 0, offY = 0;
              if (z.tipo === "esquinera") {
                offX = (z.x < xMax/2) ? -(z.Lz/2 - volExt) : (z.Lz/2 - volExt);
                offY = (z.y < yMax/2) ? -(z.Bz/2 - volExt) : (z.Bz/2 - volExt);
              } else if (z.tipo === "lindero") {
                if (Math.abs(z.x) < 1e-3 || Math.abs(z.x - xMax) < 1e-3) {
                  offX = (z.x < xMax/2) ? -(z.Lz/2 - volExt) : (z.Lz/2 - volExt);
                } else if (Math.abs(z.y) < 1e-3 || Math.abs(z.y - yMax) < 1e-3) {
                  offY = (z.y < yMax/2) ? -(z.Bz/2 - volExt) : (z.Bz/2 - volExt);
                }
              }
              const baseR = baseRows.find(b => b.idx === z.idx)!;
              return {
                xC: z.x - offX, yC: z.y - offY,
                xCol: z.x, yCol: z.y,
                Lz: z.Lz, Bz: z.Bz, tz: z.t, bc: colSize,
                P_dead_kN: baseR.P_kN,
                Mx_dead_kNm: baseR.Mx_kN,
                My_dead_kNm: baseR.My_kN,
                label: z.idx,
              };
            });
            // Vigas de amarre (sistema=1) — entre zapatas adyacentes
            const vigasAmarre = [] as any[];
            if (sistema === 1) {
              const zVA = va_pos === 0 ? -Hf : -Hf / 2;
              const byY = new Map<string, typeof baseRows>();
              const byX = new Map<string, typeof baseRows>();
              for (const b of baseRows) {
                const ky = b.y.toFixed(4), kx = b.x.toFixed(4);
                if (!byY.has(ky)) byY.set(ky, []);
                if (!byX.has(kx)) byX.set(kx, []);
                byY.get(ky)!.push(b);
                byX.get(kx)!.push(b);
              }
              for (const row of byY.values()) {
                row.sort((a,b)=>a.x-b.x);
                for (let i = 0; i < row.length-1; i++) {
                  vigasAmarre.push({ x1:row[i].x, y1:row[i].y, x2:row[i+1].x, y2:row[i+1].y, h:va_h, b:va_b, z:zVA });
                }
              }
              for (const col of byX.values()) {
                col.sort((a,b)=>a.y-b.y);
                for (let i = 0; i < col.length-1; i++) {
                  vigasAmarre.push({ x1:col[i].x, y1:col[i].y, x2:col[i+1].x, y2:col[i+1].y, h:va_h, b:va_b, z:zVA });
                }
              }
            }
            try {
              downloadEdificioCimentacionF2k({
                zapatas,
                vigasAmarre: vigasAmarre.length ? vigasAmarre : undefined,
                ks_kNm3: ks,
                Z: -Hf,
              }, `cimentacion_edificio_${zapatas.length}_zapatas.f2k`);
              const msgVigas = vigasAmarre.length ? `\n+ ${vigasAmarre.length} vigas de amarre` : "";
              alert(`✅ Exportado UN F2K con TODA la cimentación:\n• ${zapatas.length} zapatas (P, Mx, My individuales)${msgVigas}\n• ks compartido = ${ks} kN/m³\n\nÁbrelo en SAFE 20.x — verás todas las zapatas + vigas en un solo modelo.`);
              console.log(`[F2K Cim Completa] ${zapatas.length} zapatas + ${vigasAmarre.length} vigas exportadas en 1 archivo`);
            } catch (e: any) {
              alert(`❌ Error al exportar: ${e.message}`);
              console.error(e);
            }
          });
        }
      } catch (e) {
        console.warn("[Workspace] Toggle FEM Cim setup falló:", e);
      }
      // Folder "🔗 Validar 1 zapata" REMOVIDO — no tiene sentido en un
      // edificio con varias columnas. La validación contra Calcpad se hace
      // en el ejemplo standalone zapata-aislada-validacion abriéndolo
      // directamente desde el selector de ejemplos.
    }
    if (isFooting && urlFrom) {
      const fNav = pane.addFolder({ title: "🔗 Origen", expanded: true });
      fNav.addButton({ title: `← Volver a ${urlFrom}` }).on("click", () => {
        const url = new URL(window.location.href);
        url.searchParams.set("t", urlFrom);
        url.searchParams.delete("P");
        url.searchParams.delete("Mx");
        url.searchParams.delete("My");
        url.searchParams.delete("from");
        window.location.href = url.toString();
      });
    }
  }

  // ── ETABS .e2k / SAP2000 .s2k Export/Import ──
  // F2K (SAFE) ya cubre las zapatas; ETABS/SAP cubren TODO LO DEMÁS:
  // edificios, pórticos, placas, cáscaras, mezzanines, galpones, etc.
  // Permite roundtrip Hekatan ↔ ETABS/SAP para validación cruzada de
  // edificios duales, modal y participación de masa.
  if (currentExample && !currentExample.id.startsWith("zapata")) {
    const fEtabs = pane.addFolder({ title: "ETABS", expanded: false });
    const fSap   = pane.addFolder({ title: "SAP",   expanded: false });
    const downloadText = (text: string, filename: string) => {
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    };
    fEtabs.addButton({ title: "📤 Exportar E2K" }).on("click", () => {
      try {
        const text = exportE2k({
          nodes: states.nodes.val,
          elements: states.elements.val,
          nodeInputs: states.nodeInputs.val,
          elementInputs: states.elementInputs.val,
          title: `${currentExample!.name} — Hekatan export`,
          units: { force: "Tonf", length: "m" },
        });
        const fname = `${currentExample!.id}_${Date.now()}.e2k`;
        downloadText(text, fname);
        console.log(`✅ E2K exportado: ${text.length} bytes → ${fname}`);
        console.log(`Abrilo en ETABS: File → Import → ETABS .e2k Text File`);
      } catch (e: any) {
        console.error(`Error exportando E2K:`, e);
      }
    });
    fEtabs.addButton({ title: "📥 Importar E2K" }).on("click", () => {
      const input = document.createElement("input");
      input.type = "file"; input.accept = ".e2k,.$et,.txt";
      input.onchange = async (ev: any) => {
        const file = ev.target.files?.[0]; if (!file) return;
        try {
          const text = await file.text();
          const model = parseE2k(text);
          alert(`E2K parseado: ${file.name}\n` +
                `Nodos: ${model.nodes?.length ?? 0}\n` +
                `Elementos: ${model.elements?.length ?? 0}\n\n` +
                `(Para cargar en el viewer hace falta un ejemplo "Importado E2K". Por ahora devuelve a consola.)`);
          console.log("E2K parsed:", model);
        } catch (e: any) {
          alert(`Error importando E2K: ${e?.message ?? e}`); console.error(e);
        }
      };
      input.click();
    });
    fSap.addButton({ title: "📤 Exportar S2K" }).on("click", () => {
      try {
        const text = exportS2k({
          nodes: states.nodes.val,
          elements: states.elements.val,
          nodeInputs: states.nodeInputs.val,
          elementInputs: states.elementInputs.val,
          title: `${currentExample!.name} — Hekatan export`,
        });
        const fname = `${currentExample!.id}_${Date.now()}.s2k`;
        downloadText(text, fname);
        console.log(`✅ S2K exportado: ${text.length} bytes → ${fname}`);
        console.log(`SAP2000 .s2k descargado: ${fname}`);
      } catch (e: any) {
        console.error(`Error exportando S2K:`, e);
      }
    });
    fSap.addButton({ title: "📥 Importar S2K" }).on("click", () => {
      const input = document.createElement("input");
      input.type = "file"; input.accept = ".s2k,.$2k,.txt";
      input.onchange = async (ev: any) => {
        const file = ev.target.files?.[0]; if (!file) return;
        try {
          const text = await file.text();
          const model = parseS2k(text);
          alert(`S2K parseado: ${file.name}\n` +
                `Nodos: ${model.nodes?.length ?? 0}\n` +
                `Elementos: ${model.elements?.length ?? 0}`);
          console.log("S2K parsed:", model);
        } catch (e: any) {
          alert(`Error importando S2K: ${e?.message ?? e}`); console.error(e);
        }
      };
      input.click();
    });
  }

  // ── Unidades (global, persistido en localStorage) ──
  const fUnits = pane.addFolder({ title: "Unidades", expanded: false });
  const unitsProxy = { force: forceUnit.val, disp: dispUnit.val };
  fUnits.addBinding(unitsProxy, "force", {
    label: "Fuerza",
    options: { kN: "kN", tonf: "tonf", kip: "kip" },
  }).on("change", (e) => {
    const oldUnit = forceUnit.val;
    const newUnit = e.value as any;
    // Re-escala los values actuales de params con unitType="force"/"moment"
    // para que representen la MISMA fuerza física pero expresada en la nueva
    // unidad. Ej: F=200 kN con oldUnit=kN, newUnit=tonf → F=200/9.80665=20.4 tonf.
    if (currentExample && oldUnit !== newUnit) {
      const fOld = oldUnit === "kN" ? 1 : oldUnit === "tonf" ? 9.80665 : 4.4482216;
      const fNew = newUnit === "kN" ? 1 : newUnit === "tonf" ? 9.80665 : 4.4482216;
      for (const [k, p] of Object.entries(currentExample.params)) {
        if (p.unitType === "force" || p.unitType === "moment") {
          // value_physical_kN = value_ui × factor_old ⇒ value_ui_new = value_ui × (factor_old/factor_new)
          currentParams[k] = (currentParams[k] * fOld) / fNew;
        }
      }
    }
    forceUnit.val = newUnit;
    // Rebuild UI del pane con nuevos labels y valores escalados
    buildParamsPane();
    // Rebuild modelo (no es necesario si internamente trabajamos en SI, pero el
    // log de verificación usa p.F que ahora está en tonf; fine, se auto-corrige)
    rebuild();
  });
  fUnits.addBinding(unitsProxy, "disp", {
    label: "Desplazamiento",
    options: { mm: "mm", cm: "cm", m: "m", in: "in" },
  }).on("change", (e) => {
    dispUnit.val = e.value as any;
    buildParamsPane();
    rebuild();
  });

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

  // Rangos configurables dinámicamente (folder "📏 Rangos"). Para cada slider
  // con `rangeAdjustable: true` (o unitType=force/moment), se registra su
  // min/max actual en rangeProxy; el folder "Rangos" provee dos sliders
  // auxiliares "key min" y "key max" que cuando cambian, se aplican vía
  // pane.refresh() (Tweakpane no soporta cambiar min/max en vivo sin
  // reconstruir; usamos sliderBindings[key] = { binding, rebuildBinding }
  // para removerlo y recrearlo con nuevos límites).
  const rangeProxy: Record<string, { min: number; max: number }> = {};
  const sliderBindings: Record<string, {
    rebuild: (newMin: number, newMax: number) => void,
  }> = {};
  // Detecta si un param DEBE tener rango editable (cargas = sí por default).
  const shouldHaveAdjustableRange = (p: any) =>
    p.rangeAdjustable === true ||
    (p.rangeAdjustable !== false && (p.unitType === "force" || p.unitType === "moment"));
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

  // ── Dynamic params (secciones por piso, vigas por vano, etc.) ────────
  // El ejemplo expone dynamicParams(currentParams) que retorna keys adicionales
  // basadas en el estado actual (ej: nPisos=3 → bCol_p1, hCol_p1, bCol_p2, ...).
  // Se fusionan con los params estáticos; los valores actuales se preservan.
  const dyn = currentExample.dynamicParams
    ? currentExample.dynamicParams(currentParams)
    : {};
  for (const [dkey, dp] of Object.entries(dyn)) {
    if (!(dkey in currentParams)) {
      // Nueva key: inicializar con default (en unidad UI si tiene unitType)
      const valSI = dp.default;
      currentParams[dkey] =
        dp.unitType === "force"  ? fromKn(valSI) :
        dp.unitType === "moment" ? fromKnm(valSI) :
        valSI;
    }
  }
  // Merged params = estáticos + dinámicos. El loop de render itera sobre todos.
  const allParams: Record<string, ParamDef> = { ...currentExample.params, ...dyn };

  for (const [key, p] of Object.entries(allParams)) {
    const folderTitle = p.folder ?? defaultFolderTitle;
    const fTarget = getFolder(folderTitle);
    if (p.boolean) {
      // Checkbox on/off. Valor almacenado como 0|1 en currentParams.
      boolProxy[key] = currentParams[key] >= 0.5;
      const bb = fTarget.addBinding(boolProxy, key, { label: p.label ?? key });
      bb.on("change", (e: any) => {
        currentParams[key] = e.value ? 1 : 0;
        if (currentExample?.onParamChange) {
          currentExample.onParamChange(key, currentParams);
          pane.refresh();
        }
        applyHiddenBindings();
        scheduleRebuild();
      });
      if (p.hiddenIf) hiddenBindings.push({ binding: bb, hiddenIf: p.hiddenIf });
      continue;
    }
    // Label dinámico: si el param tiene unitType, anexar el sufijo actual
    // ("(kN)" / "(tonf)" / "(kip)" / "(kN·m)" / "(mm)", etc.). El label base se
    // limpia primero de cualquier sufijo previo, así un `label: "F lateral (kN)"`
    // funciona igual que `label: "F lateral"`.
    const baseLabel = stripUnitSuffix(p.label ?? key);
    const unitSuffix = p.unitType === "force"  ? ` ${forceUnitSuffix()}` :
                       p.unitType === "moment" ? ` ${momentUnitSuffix()}` :
                       p.unitType === "disp"   ? ` ${dispUnitSuffix()}` :
                       "";
    const finalLabel = baseLabel + unitSuffix;

    const opts: any = { label: finalLabel };
    if (p.options !== undefined) {
      opts.options = p.options;
    } else {
      // Cuando hay unitType, min/max/step vienen en unidad UI (para que
      // el rango del slider sea razonable en la unidad elegida). Internamente
      // currentParams[key] se almacena en la misma unidad UI que el slider;
      // la conversión a SI la hace el ejemplo en build() vía toKn/toKnm/dispToM,
      // O mejor: el workspace la hace automáticamente ANTES de llamar a build().
      if (p.min !== undefined) opts.min = p.min;
      if (p.max !== undefined) opts.max = p.max;
      if (p.step !== undefined) opts.step = p.step;
    }
    // Construir (o reconstruir) el binding con los min/max indicados.
    // Guardamos la API de rebuild en sliderBindings[key] para que el folder
    // "📏 Rangos" pueda recrear el slider cuando el usuario cambie sus límites.
    let currentBinding: any = null;
    const rebuildSlider = (newMin: number | undefined, newMax: number | undefined) => {
      if (currentBinding) { try { currentBinding.dispose?.(); } catch {} }
      const rebuiltOpts: any = { ...opts };
      if (newMin !== undefined) rebuiltOpts.min = newMin;
      if (newMax !== undefined) rebuiltOpts.max = newMax;
      // Clampar el valor actual al nuevo rango (evita que el slider se rompa)
      if (rebuiltOpts.min !== undefined && currentParams[key] < rebuiltOpts.min) currentParams[key] = rebuiltOpts.min;
      if (rebuiltOpts.max !== undefined && currentParams[key] > rebuiltOpts.max) currentParams[key] = rebuiltOpts.max;
      currentBinding = fTarget.addBinding(currentParams, key, rebuiltOpts);
      currentBinding.on("change", () => {
        if (currentExample?.onParamChange) {
          currentExample.onParamChange(key, currentParams);
          pane.refresh();
        }
        // Si este param regenera dynamicParams (nPisos, nVanos, etc.),
        // reconstruir el pane ENTERO para que aparezcan los nuevos sliders
        // Piso 1, Piso 2, Piso 3... automáticamente.
        if (p.regenOnChange) {
          // debounce pequeño para que el slider no haga flicker
          window.setTimeout(() => { buildParamsPane(); rebuild(); }, 80);
        } else {
          scheduleRebuild();
        }
      });
    };
    rebuildSlider(p.min, p.max);
    if (shouldHaveAdjustableRange(p) && p.min !== undefined && p.max !== undefined) {
      rangeProxy[key] = { min: p.min, max: p.max };
      sliderBindings[key] = {
        rebuild: (newMin, newMax) => rebuildSlider(newMin, newMax),
      };
    }
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

  // ── Folder "📏 Rangos" — min/max configurables de los sliders de cargas ──
  // Inspirado en el panel "Rangos" de FEM-Studio (beams/edificio). Para cada
  // param con rangeAdjustable=true (o unitType=force/moment), se muestra su
  // "<label> min" y "<label> max" como sliders con valores actuales. Al mover
  // el min o max, el slider principal se reconstruye con los nuevos límites.
  const rangeKeys = Object.keys(rangeProxy);
  if (rangeKeys.length > 0) {
    const fRanges = pane.addFolder({ title: "📏 Rangos", expanded: false });
    for (const k of rangeKeys) {
      const p = currentExample.params[k];
      const baseLabel = stripUnitSuffix(p.label ?? k);
      const step = p.step ?? 1;
      // Rango de los sliders min/max: extendemos ±5× el default para dar margen
      // pero evitamos crashes con rangos demasiado extremos.
      const span = Math.abs(p.max! - p.min!);
      const metaMin = p.min! - span * 5;
      const metaMax = p.max! + span * 5;
      fRanges.addBinding(rangeProxy[k], "min", {
        label: `${baseLabel} min`, min: metaMin, max: p.max!, step,
      }).on("change", (e) => {
        const nmin = Math.min(e.value as number, rangeProxy[k].max - step);
        rangeProxy[k].min = nmin;
        sliderBindings[k].rebuild(nmin, rangeProxy[k].max);
      });
      fRanges.addBinding(rangeProxy[k], "max", {
        label: `${baseLabel} max`, min: p.min!, max: metaMax, step,
      }).on("change", (e) => {
        const nmax = Math.max(e.value as number, rangeProxy[k].min + step);
        rangeProxy[k].max = nmax;
        sliderBindings[k].rebuild(rangeProxy[k].min, nmax);
      });
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

  // Modal trigger + animación visual del modo (todo dentro del Tweakpane — sin
  // ventanas flotantes custom). El status (modo, frecuencia, período, dirección
  // dominante) se muestra como bindings readonly que se refrescan en vivo.
  if (currentExample.hasModal) {
    const fModal = pane.addFolder({ title: "⚡ Modal + Animación", expanded: true });

    // Status object: el animador dispara `onStatusChange` → pane.refresh() lo actualiza.
    const status = { mode: "—", frequency: "—", period: "—", dominant: "—", state: "⏸ Detenido" };
    modalAnimator.dispose?.();
    modalAnimator = createModalAnimator({
      mesh: { nodes, elements, deformOutputs, analyzeOutputs },
      viewerElm,
      scalePercent: 5,
      onStatusChange: () => {
        const s = modalAnimator.getStatus();
        status.mode = s.mode;
        status.frequency = s.frequency;
        status.period = s.period;
        status.dominant = s.dominant;
        status.state = s.state;
        currentPane?.refresh();
      },
    });
    let lastModalResults: any = null;
    const captureModalPanel = {
      div: modalPanel.div,
      render: (out: any, meta: any) => {
        lastModalResults = out;
        modalPanel.render(out, meta);
        if (out?.frequencies?.length) {
          modalAnimator.setResults(out);
          modalAnimator.setMode(0);
          modalAnimator.play();
          animCtrl.modeIdx = 1;
          currentPane?.refresh();
        }
      },
    };

    fModal.addButton({ title: "▶ Correr modal + animar" }).on("click", () => {
      // Detener y restaurar CUALQUIER animación en curso antes de correr el
      // nuevo análisis — si el usuario click-click-click este botón, queremos
      // que cada corrida parta limpia del modelo sin deformar (evita que se
      // capturen "originals" corruptos con el último frame animado anterior).
      modalAnimator.stop();
      modalPanel.div.style.display = "block";
      if (currentExample!.runModal) currentExample!.runModal(toSIParams(), states, captureModalPanel);
    });

    // Selector dinámico de modo — el usuario gira el slider y la animación
    // cambia al nuevo modo en tiempo real.
    fModal.addBinding(animCtrl, "modeIdx", {
      label: "Modo #", min: 1, max: 30, step: 1,
    }).on("change", (e) => {
      if (!lastModalResults) return;
      modalAnimator.setMode(Math.round(e.value) - 1);
    });

    // Status LIVE (readonly) — single source of truth = Tweakpane
    fModal.addBinding(status, "mode", { readonly: true, view: "text", interval: 0, label: "Modo" } as any);
    fModal.addBinding(status, "frequency", { readonly: true, view: "text", interval: 0, label: "Frecuencia" } as any);
    fModal.addBinding(status, "period", { readonly: true, view: "text", interval: 0, label: "Período" } as any);
    fModal.addBinding(status, "dominant", { readonly: true, view: "text", interval: 0, label: "Dominante" } as any);
    fModal.addBinding(status, "state", { readonly: true, view: "text", interval: 0, label: "Estado" } as any);

    fModal.addButton({ title: "⏹ Detener y restaurar" }).on("click", () => {
      // stop() cancela el RAF + restaura los nodos originales + fuerza un render
      // inmediato del viewer (el canvas se actualiza al momento, sin esperar el
      // siguiente evento reactivo que congelaba la deformada).
      modalAnimator.stop();
    });
    fModal.addButton({ title: "▶ Reanudar" }).on("click", () => {
      if (lastModalResults) modalAnimator.play();
    });
  }
  currentPane = pane;
}

// ── Settings del viewer ──
// Default shellResults = "pressure" — presión de contacto Winkler, patrón similar
// a displacementZ (centro = max compresión = azul; bordes = mínima = rojo) con auto-escala.
const settingsObj: Record<string, any> = {
  deformedShape: true,
  displayScale: -1.5,       // markers y flechas a 0.5× (no tapan el modelo)
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

// ═══════════════════════════════════════════════════════════════
// ── HOVER TOOLTIP GLOBAL para shell results en cualquier ejemplo ──
// Al pasar el cursor sobre un shell Q4, busca por raycast el elemento
// y muestra el valor del campo activo (pressure / bendingXX / vonMises /
// displacementZ etc.) interpolado en el nodo más cercano.
// Funciona para zapata-aislada, edificio-aporticado solo cimentación,
// shell-thick, plate-q4, losas, etc. — cualquier mesh con shells.
// ═══════════════════════════════════════════════════════════════
(function setupShellHoverTooltip() {
  const tooltip = document.createElement("div");
  tooltip.id = "shell-hover-tooltip";
  Object.assign(tooltip.style, {
    position: "fixed",
    pointerEvents: "none",
    background: "rgba(0,0,0,0.85)",
    color: "#fff",
    padding: "6px 10px",
    fontSize: "12px",
    fontFamily: "system-ui, monospace",
    border: "1px solid #22d3ee",
    borderRadius: "4px",
    whiteSpace: "nowrap",
    zIndex: "9999",
    display: "none",
    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
  });
  document.body.appendChild(tooltip);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  // Etiquetas legibles para cada campo de shellResults
  const FIELD_LABELS: Record<string, string> = {
    pressure: "σ (presión)",
    bendingXX: "Mxx (flexión)",
    bendingYY: "Myy (flexión)",
    bendingXY: "Mxy (torsión)",
    membraneXX: "Nxx (membrana)",
    membraneYY: "Nyy (membrana)",
    membraneXY: "Nxy (corte)",
    shearX: "Vx (corte)",
    shearY: "Vy (corte)",
    vonMises: "von Mises",
    displacementX: "ux",
    displacementY: "uy",
    displacementZ: "uz",
  };
  // Tipo de cada campo según unidades:
  //   force/m² → pressure, vonMises (1/m²)
  //   moment/m → bending* (kN·m/m → tonf·m/m)
  //   force/m → membrane*, shear* (kN/m → tonf/m)
  //   disp → displacement* (m → mm/cm/m/in)
  const FIELD_KIND: Record<string, "force_per_area"|"moment_per_length"|"force_per_length"|"displacement"> = {
    pressure: "force_per_area",
    bendingXX: "moment_per_length",
    bendingYY: "moment_per_length",
    bendingXY: "moment_per_length",
    membraneXX: "force_per_length",
    membraneYY: "force_per_length",
    membraneXY: "force_per_length",
    shearX: "force_per_length",
    shearY: "force_per_length",
    vonMises: "force_per_area",
    displacementX: "displacement",
    displacementY: "displacement",
    displacementZ: "displacement",
  };
  // Convierte el valor SI base (kN, kN·m, m) a la unidad UI activa
  // y devuelve [valor_convertido, sufijo_unidad].
  const formatValue = (kind: string, valSI: number): [number, string] => {
    const u = forceUnit.val;
    const du = dispUnit.val;
    if (kind === "force_per_area") {
      return [fromKn(valSI), `${u}/m²`];
    }
    if (kind === "moment_per_length") {
      const lbl = u === "kip" ? "kip·ft/m" : `${u}·m/m`;
      return [fromKnm(valSI), lbl];
    }
    if (kind === "force_per_length") {
      return [fromKn(valSI), `${u}/m`];
    }
    if (kind === "displacement") {
      return [mToDisp(valSI), du];
    }
    return [valSI, ""];
  };

  const onPointerMove = (event: PointerEvent) => {
    const ctx = (viewerElm as any).__ctx;
    const settings = (viewerElm as any).__settings;
    if (!ctx?.scene || !ctx?.camera) { tooltip.style.display = "none"; return; }
    const field = settings?.shellResults?.val ?? "none";
    if (field === "none") { tooltip.style.display = "none"; return; }
    // Convert mouse to NDC respecto al canvas del viewer
    const canvas = viewerElm.querySelector("canvas") as HTMLCanvasElement | null;
    if (!canvas) { tooltip.style.display = "none"; return; }
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, ctx.camera);
    // Buscar shell meshes en la escena (los que tienen vertex colors)
    const targets: THREE.Mesh[] = [];
    ctx.scene.traverse((o: any) => {
      if (o.isMesh && o.geometry?.attributes?.color &&
          o.geometry.attributes.position.count > 50) {
        targets.push(o);
      }
    });
    if (!targets.length) { tooltip.style.display = "none"; return; }
    const hits = raycaster.intersectObjects(targets, false);
    if (!hits.length) { tooltip.style.display = "none"; return; }
    const hit = hits[0];
    // Obtener el ÍNDICE del elemento Q4 a partir del face index
    // Cada Q4 se triangula en 2 triangles (6 vertex indices), así
    // faceIndex / 2 = elementIndex en la mesh shell.
    const faceIdx = hit.faceIndex ?? 0;
    const elemIdx = Math.floor(faceIdx / 2);
    // Leer el valor del campo activo del analyzeOutputs
    const ao = analyzeOutputs.rawVal as any;
    const fieldMap = ao?.[field] as Map<number, number[]> | undefined;
    if (!fieldMap || !fieldMap.size) {
      tooltip.style.display = "none";
      return;
    }
    const values = fieldMap.get(elemIdx);
    if (!values?.length) { tooltip.style.display = "none"; return; }
    const els = elements.rawVal as Element[];
    const nds = nodes.rawVal as Node[];
    const elNodes = els[elemIdx];
    // ── INTERPOLACIÓN BILINEAL Q4 (estilo ETABS/SAP) ──
    // Inferir las coordenadas naturales (ξ, η) ∈ [-1, 1] del punto del hit
    // dentro del Q4. Usamos solver de Newton-Raphson 2D simple sobre la
    // mapa isoparamétrica x(ξ,η) = Σ N_i(ξ,η)·x_i.
    let valInterp = values[0], xi = 0, eta = 0;
    let closestCorner = 0;
    if (elNodes?.length === 4 && hit.point) {
      const corners = elNodes.map(ni => nds[ni]) as [number,number,number][];
      // Funciones de forma N_i(ξ, η) para Q4
      const N = (xi: number, eta: number) => [
        0.25 * (1 - xi) * (1 - eta),
        0.25 * (1 + xi) * (1 - eta),
        0.25 * (1 + xi) * (1 + eta),
        0.25 * (1 - xi) * (1 + eta),
      ];
      // Newton-Raphson para encontrar (ξ, η) tal que x(ξ,η) = hit.point
      // (proyectamos al plano XY del Q4 — válido para shells horizontales)
      const tx = hit.point.x, ty = hit.point.y;
      for (let iter = 0; iter < 8; iter++) {
        const Nv = N(xi, eta);
        const fx = corners.reduce((s, c, i) => s + Nv[i] * c[0], 0) - tx;
        const fy = corners.reduce((s, c, i) => s + Nv[i] * c[1], 0) - ty;
        // Derivadas dN/dξ, dN/dη
        const dNdxi = [-(1-eta), (1-eta), (1+eta), -(1+eta)].map(v => 0.25*v);
        const dNdeta = [-(1-xi), -(1+xi), (1+xi), (1-xi)].map(v => 0.25*v);
        const J11 = corners.reduce((s, c, i) => s + dNdxi[i] * c[0], 0);
        const J12 = corners.reduce((s, c, i) => s + dNdeta[i] * c[0], 0);
        const J21 = corners.reduce((s, c, i) => s + dNdxi[i] * c[1], 0);
        const J22 = corners.reduce((s, c, i) => s + dNdeta[i] * c[1], 0);
        const det = J11*J22 - J12*J21;
        if (Math.abs(det) < 1e-12) break;
        const dxi = (J22*fx - J12*fy) / det;
        const deta = (-J21*fx + J11*fy) / det;
        xi -= dxi; eta -= deta;
        if (Math.abs(dxi) + Math.abs(deta) < 1e-6) break;
      }
      // Clamp ξ, η a [-1, 1] (por si el hit cae en borde)
      xi = Math.max(-1, Math.min(1, xi));
      eta = Math.max(-1, Math.min(1, eta));
      // Interpolación bilineal del valor
      const Nv = N(xi, eta);
      valInterp = values.reduce((s, v, i) => s + Nv[i] * v, 0);
      // El "corner más cercano" en (ξ, η)-space para info
      closestCorner = (xi >= 0 ? (eta >= 0 ? 2 : 1) : (eta >= 0 ? 3 : 0));
    }
    // Render tooltip — convierte SI base → unidad UI activa (forceUnit/dispUnit)
    const lbl = FIELD_LABELS[field] ?? field;
    const kind = FIELD_KIND[field] ?? "force_per_area";
    const [valConv, unit] = formatValue(kind, valInterp);
    const xPos = hit.point?.x?.toFixed(2) ?? '?';
    const yPos = hit.point?.y?.toFixed(2) ?? '?';
    const zPos = hit.point?.z?.toFixed(2) ?? '?';
    tooltip.innerHTML =
      `<b>${lbl}</b> <span style="color:#888;font-size:10px">(interpolado)</span><br>` +
      `Valor: <span style="color:#22d3ee;font-size:14px;">${valConv.toFixed(3)} ${unit}</span><br>` +
      `Punto cursor: (${xPos}, ${yPos}, ${zPos}) m<br>` +
      `Elem #${elemIdx} · ξ=${xi.toFixed(2)}, η=${eta.toFixed(2)}<br>` +
      `Esquina ${closestCorner}: ${formatValue(kind, values[closestCorner] ?? 0)[0].toFixed(3)} ${unit}`;
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
    tooltip.style.display = "block";
  };

  const onPointerLeave = () => {
    tooltip.style.display = "none";
  };

  viewerElm.addEventListener("pointermove", onPointerMove);
  viewerElm.addEventListener("pointerleave", onPointerLeave);
  // Exponer al window para test/debug via DOM
  (window as any).__hekatan_hover_tooltip = tooltip;
})();

// Inicializar modal animator AHORA que el viewer ya existe (tiene __ctx.scene/render).
modalAnimator = createModalAnimator({
  mesh: { nodes, elements, deformOutputs, analyzeOutputs },
  viewerElm,
  scalePercent: 5,
});

// ── Cargar ejemplo inicial via ?t= o default ──
// Si el URL no trae ?t o trae el legado "zapata-aislada", forzamos el ejemplo
// de validación (defecto actual del workspace). El usuario puede seleccionar
// la zapata original desde el dropdown "Ejemplo" si la necesita.
let urlT = new URLSearchParams(window.location.search).get("t");
if (!urlT || urlT === "zapata-aislada") {
  urlT = "zapata-aislada-validacion";
  try {
    const u = new URL(window.location.href);
    u.searchParams.set("t", urlT);
    window.history.replaceState(null, "", u.toString());
  } catch { /* no-op */ }
}
const initialEx =
  examplesRegistry.find((e) => e.id === urlT) ||
  examplesRegistry.find((e) => e.id === "zapata-aislada-validacion") ||
  examplesRegistry[0];
if (initialEx) {
  loadExample(initialEx);
  // Zapata: vista isométrica por default — se ven los resortes Winkler en elevación
  // comprimidos/extendidos según la deformada (como en croquis clásicos de ingeniería).
  if (initialEx.id === "zapata-aislada" || initialEx.id === "zapata-aislada-validacion" || initialEx.id === "zapata-viga-amarre") {
    setTimeout(() => setView("iso"), 200);
  }
  // ── Pre-fill desde URL params ──
  // Si vienes de un edificio (?t=zapata-aislada-validacion&P=23.5&Mx=1.2&My=-0.8&from=edificio-aporticado)
  // pre-cargo P_simple/Mx_simple/My_simple y muestro botón "← Volver al edificio".
  const urlParams = new URLSearchParams(window.location.search);
  const urlP = parseFloat(urlParams.get("P") || "");
  const urlMx = parseFloat(urlParams.get("Mx") || "");
  const urlMy = parseFloat(urlParams.get("My") || "");
  const urlFrom = urlParams.get("from");
  if (initialEx.id.startsWith("zapata") && (!isNaN(urlP) || !isNaN(urlMx) || !isNaN(urlMy))) {
    setTimeout(() => {
      if (!isNaN(urlP))  currentParams.P_simple  = urlP;
      if (!isNaN(urlMx)) currentParams.Mx_simple = urlMx;
      if (!isNaN(urlMy)) currentParams.My_simple = urlMy;
      buildParamsPane();
      rebuild();
      console.log(`✅ Zapata pre-cargada desde ${urlFrom || "URL"}: P=${urlP}, Mx=${urlMx}, My=${urlMy}`);
    }, 300);
  }
}
