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
import { getToolbar, getViewer, colorMapForceUnit, colorMapDispUnit } from "awatif-ui";
import { createModalPanel } from "../shared/renderModalTable";
import { createModalAnimator, type ModalAnimator } from "../shared/animateMode";
// createModalAnimator también se llama en buildParamsPane() para re-wirear el
// callback onStatusChange al folder "⚡ Modal + Animación" recién creado.
import { examplesRegistry, activeExampleVersion, type ExampleDef } from "./exampleRegistry";
import {
  forceUnit, dispUnit, fromKn, toKn, fromKnm, toKnm,
  forceUnitSuffix, momentUnitSuffix, dispUnitSuffix, stripUnitSuffix,
} from "./units";

// Propagación de unidades al viewer de awatif-ui: cualquier cambio en
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
  // currentParams se almacena en la UNIDAD UI seleccionada. Los p.default
  // están escritos en SI (kN, kN·m) por convención; aquí los convertimos a
  // la unidad UI del usuario para que los sliders muestren valores coherentes.
  currentParams = Object.fromEntries(
    Object.entries(ex.params).map(([k, p]) => {
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
  ex.build(toSIParams(), states, modalPanel);
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
  if (s.displayScale) s.displayScale.val = -1.5;
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

  // Selector de ejemplo (siempre arriba)
  const selectorObj = { id: currentExample.id };
  const options = Object.fromEntries(
    examplesRegistry.map((e) => [`${e.category} · ${e.name}`, e.id])
  );
  pane.addBinding(selectorObj, "id", { label: "Ejemplo", options }).on("change", (e) => {
    const nextEx = examplesRegistry.find((x) => x.id === e.value);
    if (nextEx) loadExample(nextEx);
  });

  // ── Reporte matemático FEM (estilo Calcpad) — pendiente módulo mathReport ──

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
}
