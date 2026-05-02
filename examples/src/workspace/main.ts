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
  deform, analyze,
} from "hekatan-fem";
import { getToolbar, getViewer, colorMapForceUnit, colorMapDispUnit } from "hekatan-ui";
import { createModalPanel } from "../shared/renderModalTable";
import { createModalAnimator, type ModalAnimator } from "../shared/animateMode";
// createModalAnimator también se llama en buildParamsPane() para re-wirear el
// callback onStatusChange al folder "⚡ Modal + Animación" recién creado.
import { examplesRegistry, activeExampleVersion, type ExampleDef } from "./exampleRegistry";
import { downloadZapataF2k } from "../zapata-aislada/f2kExporter";
import { parseZapataF2k } from "../zapata-aislada/f2kImporter";
import { exportEdificioCimentacionF2k, downloadEdificioCimentacionF2k } from "../shared/f2kCimentacionCompleta";
// Expose F2K builder a window para test/debug via DOM
(window as any).__hekatanExportF2kCim = exportEdificioCimentacionF2k;
(window as any).__hekatanDownloadF2kCim = downloadEdificioCimentacionF2k;
// Helper completo: lee estado actual (reacciones, params) y genera el F2K
// Devuelve el texto del F2K — accesible via window.__hekatanGenF2k() en el DOM.
(window as any).__hekatanGenF2k = async function() {
  const reactions = (deformOutputs.rawVal as any)?.reactions as
    Map<number, [number, number, number, number, number, number]> | undefined;
  const ns = nodes.rawVal as number[][];
  if (!reactions || !ns?.length) {
    return { error: "Sin reacciones — corre 'Edificio completo' primero" };
  }
  const p: any = (window as any).__hekatanPanes?.params ?? {};
  // Tomar de la pane raíz si __hekatanPanes no está
  const sels = Array.from(document.querySelectorAll<HTMLSelectElement>('select'));
  const get = (lbl: string) => {
    const s = sels.find(s => s.closest('.tp-lblv')?.querySelector('.tp-lblv_l')?.textContent?.includes(lbl));
    return s?.value;
  };
  // Recolectar reacciones de apoyos
  const rows: any[] = [];
  let xMax = 0, yMax = 0;
  reactions.forEach((r, idx) => {
    const n = ns[idx];
    if (!n || Math.abs(n[2]) > 1e-6) return;
    rows.push({ idx, x: n[0], y: n[1], P_kN: Math.abs(r[2]), Mx_kN: r[3], My_kN: r[4] });
    if (n[0] > xMax) xMax = n[0];
    if (n[1] > yMax) yMax = n[1];
  });
  if (!rows.length) return { error: "No hay apoyos en z=0" };
  // Diseño + offsets
  const { designAllFootings } = await import("../shared/footingDesign");
  const q_adm = 10, ks = 1030, tz = 0.30, colSize = 0.40, Df = 0.5, vol = 0.30;
  const zd = designAllFootings(rows, xMax, yMax, q_adm, ks);
  for (const z of zd) z.t = tz;
  const zapatas = zd.map(z => {
    let oX = 0, oY = 0;
    if (z.tipo === "esquinera") {
      oX = (z.x < xMax/2) ? -(z.Lz/2 - vol) : (z.Lz/2 - vol);
      oY = (z.y < yMax/2) ? -(z.Bz/2 - vol) : (z.Bz/2 - vol);
    } else if (z.tipo === "lindero") {
      if (Math.abs(z.x)<1e-3 || Math.abs(z.x-xMax)<1e-3) oX = (z.x < xMax/2) ? -(z.Lz/2-vol) : (z.Lz/2-vol);
      else if (Math.abs(z.y)<1e-3 || Math.abs(z.y-yMax)<1e-3) oY = (z.y < yMax/2) ? -(z.Bz/2-vol) : (z.Bz/2-vol);
    }
    const baseR = rows.find(b => b.idx === z.idx)!;
    return {
      xC: z.x - oX, yC: z.y - oY,
      xCol: z.x, yCol: z.y,
      Lz: z.Lz, Bz: z.Bz, tz: z.t, bc: colSize,
      P_dead_kN: baseR.P_kN,
      Mx_dead_kNm: baseR.Mx_kN,
      My_dead_kNm: baseR.My_kN,
      label: z.idx,
    };
  });
  // Vigas de amarre (siempre incluir si sistema=1)
  const vigasAmarre: any[] = [];
  const va_h = 0.40, va_b = 0.25, zVA = -Df;
  const byY = new Map<string, any[]>();
  const byX = new Map<string, any[]>();
  for (const b of rows) {
    const ky = b.y.toFixed(4), kx = b.x.toFixed(4);
    if (!byY.has(ky)) byY.set(ky, []);
    if (!byX.has(kx)) byX.set(kx, []);
    byY.get(ky)!.push(b);
    byX.get(kx)!.push(b);
  }
  for (const row of byY.values()) {
    row.sort((a,b)=>a.x-b.x);
    for (let i=0;i<row.length-1;i++) vigasAmarre.push({ x1:row[i].x, y1:row[i].y, x2:row[i+1].x, y2:row[i+1].y, h:va_h, b:va_b, z:zVA });
  }
  for (const col of byX.values()) {
    col.sort((a,b)=>a.y-b.y);
    for (let i=0;i<col.length-1;i++) vigasAmarre.push({ x1:col[i].x, y1:col[i].y, x2:col[i+1].x, y2:col[i+1].y, h:va_h, b:va_b, z:zVA });
  }
  const f2k = exportEdificioCimentacionF2k({
    zapatas, vigasAmarre, ks_kNm3: ks, Z: -Df,
  });
  return { f2k, n_zapatas: zapatas.length, n_vigas: vigasAmarre.length };
};
import { exportE2k } from "../shared/e2kExporter";
import { parseE2k } from "../shared/e2kParser";
import { exportS2k } from "../shared/s2kExporter";
import { parseS2k } from "../shared/s2kParser";
import {
  forceUnit, dispUnit, fromKn, toKn, fromKnm, toKnm,
  forceUnitSuffix, momentUnitSuffix, dispUnitSuffix, stripUnitSuffix,
  // SAFE-style granular units + presets
  stressUnit, subgradeUnit, stiffTransUnit, lengthSectionUnit,
  applyConsistentUnits, detectCurrentPreset,
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
// Drawing states (awatif-style) — mouse interactivo + raycaster nativo de
// hekatan-ui. Solo se usa en el ejemplo cad-draw (otros los ignoran).
const drawingPoints: State<[number, number, number][]> = van.state([]);
const drawingPolylines: State<number[][]> = van.state([[]]);
const drawingGridTarget: State<{ position: [number,number,number]; rotation: [number,number,number] }> =
  van.state({ position: [10, 10, 0], rotation: [Math.PI/2, 0, 0] });

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

// Expose rebuild + autoFitCamera al window para test/debug via DOM
// (también usado por el csi-importer para forceRebuildAndFit).
(window as any).__hekatanRebuild = rebuild;
(window as any).__hekatanAutoFit = autoFitCamera;

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
  // Sincronizar plano de trabajo CAD con la vista (solo si cad-draw activo)
  if (currentExample?.id === "cad-draw") {
    const cadSt = (window as any).__hekatanCadState?.get?.();
    if (cadSt) {
      if (preset === "plan") cadSt.workPlane = "xy";
      else if (preset === "elevX") cadSt.workPlane = "xz";
      else if (preset === "elevY") cadSt.workPlane = "yz";
      console.log(`[CAD ↔ Vista] workPlane sincronizado a ${cadSt.workPlane}`);
    }
  }
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

/**
 * Aplica visibilidad dinamica a los bindings registrados con hiddenIf.
 * Un ejemplo lo usa para mostrar/ocultar params segun el valor de otro
 * (ej: layered-shell oculta params de Sandwich cuando el preset es Bimetal).
 */
function applyHiddenBindings() {
  for (const hb of hiddenBindings) {
    try {
      hb.binding.hidden = hb.hiddenIf(currentParams);
    } catch {}
  }
}

function buildParamsPane() {
  if (currentPane) {
    currentPane.dispose();
    currentPane = null;
  }
  paneHost.innerHTML = "";
  // Reset registro de bindings con hiddenIf (cada ejemplo declara los suyos)
  hiddenBindings = [];
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

  // ── ✏ CAD Drawer / 💻 CLI Editor — DISPONIBLES EN TODOS LOS EJEMPLOS ──
  // Permiten agregar/editar/eliminar elementos del modelo en cualquier ejemplo.
  // Si estás en cad-draw o cli-modeler, las acciones MUTAN el modelo y se
  // re-renderizan. En otros ejemplos, las acciones agregan al script CLI
  // global (window.__hekatanCliScript) — el usuario puede revisar el script
  // equivalente del modelo actual y exportarlo.
  // (folder colapsado por default cuando NO es cad-draw/cli-modeler para
  // no estorbar el workflow del ejemplo).
  const isModelerCtx = currentExample && (currentExample.id === "cad-draw" || currentExample.id === "cli-modeler");

  // ── ✏ CAD Drawer (siempre disponible) ──
  if (currentExample) {
    const fCad = pane.addFolder({ title: "✏ Herramientas CAD", expanded: !!isModelerCtx });
    // Tool selector — botones grandes
    const proxyTool = { v: "node" };
    const toolBtns: Record<string, any> = {};
    const setActiveTool = (tool: string) => {
      proxyTool.v = tool;
      try { (window as any).__hekatanCadState?.setTool?.(tool); } catch {}
      console.log(`[CAD] Tool activo: ${tool}`);
    };
    fCad.addButton({ title: "🖱 Seleccionar" }).on("click", () => setActiveTool("select"));
    fCad.addButton({ title: "● Nodo" }).on("click", () => setActiveTool("node"));
    fCad.addButton({ title: "／ Línea (frame)" }).on("click", () => setActiveTool("line"));
    fCad.addButton({ title: "▭ Área (shell Q4)" }).on("click", () => setActiveTool("area"));
    // Plano de trabajo
    const fPlane = fCad.addFolder({ title: "📐 Plano de trabajo", expanded: true });
    fPlane.addButton({ title: "Plano XY (planta)" }).on("click", () => {
      const st = (window as any).__hekatanCadState?.get?.();
      if (st) st.workPlane = "xy";
      console.log("[CAD] Plano: XY");
    });
    fPlane.addButton({ title: "Plano XZ (elevación)" }).on("click", () => {
      const st = (window as any).__hekatanCadState?.get?.();
      if (st) st.workPlane = "xz";
      console.log("[CAD] Plano: XZ");
    });
    // Snap + Z
    const proxyCAD = { snap: 0.5, workZ: 0 };
    fCad.addBinding(proxyCAD, "snap", { min: 0, max: 5, step: 0.1, label: "Snap (m)" }).on("change", (ev: any) => {
      const st = (window as any).__hekatanCadState?.get?.();
      if (st) st.snap = ev.value;
    });
    fCad.addBinding(proxyCAD, "workZ", { min: -10, max: 50, step: 0.1, label: "Cota Z (m)" }).on("change", (ev: any) => {
      const st = (window as any).__hekatanCadState?.get?.();
      if (st) st.workZ = ev.value;
      try { (window as any).__hekatanRebuild?.(); } catch {}
    });
    // Acciones
    const fAcc = fCad.addFolder({ title: "🛠 Acciones", expanded: true });
    fAcc.addButton({ title: "↶ Cancelar selección actual" }).on("click", () => {
      (window as any).__hekatanCadMouse?.cancel?.();
    });
    fAcc.addButton({ title: "🗑 Limpiar todo" }).on("click", () => {
      (window as any).__hekatanCadState?.reset?.();
      // También limpiar el Drawing nativo (puntos + polylines)
      drawingPoints.val = [];
      drawingPolylines.val = [[]];
      try { (window as any).__hekatanRebuild?.(); } catch {}
    });
    // Botones para cambiar la cota Z del plano de trabajo (planta de cada piso)
    const fFloors = fCad.addFolder({ title: "🏢 Plantas de pisos", expanded: false });
    [0, 3, 6, 9, 12].forEach(z => {
      fFloors.addButton({ title: `Piso a Z=${z}m` }).on("click", () => {
        drawingGridTarget.val = {
          position: [10, 10, z],
          rotation: [Math.PI/2, 0, 0],
        };
        const cs = (window as any).__hekatanCadState?.get?.();
        if (cs) cs.workZ = z;
        console.log(`[CAD] Plano XY @ Z=${z}m`);
      });
    });
    fAcc.addButton({ title: "📋 Copiar comandos a CLI" }).on("click", () => {
      const script = (window as any).__hekatanCliScript ?? "";
      console.log("[CAD] Comandos generados:\n" + script);
      navigator.clipboard?.writeText(script);
      alert("Comandos copiados al portapapeles. Pega en cli-modeler para editar/correr el FEM.");
    });
  }

  // ── 💻 CLI Modeler (siempre disponible — folder colapsado por default
  //     en ejemplos que no son cli-modeler para no estorbar) ──
  if (currentExample) {
    const fCli = pane.addFolder({ title: "💻 CLI Comandos", expanded: !!isModelerCtx });
    // Crear textarea para escribir comandos
    const taContainer = document.createElement("div");
    taContainer.style.cssText = "padding:4px;pointer-events:auto;user-select:text;";
    const ta = document.createElement("textarea");
    ta.style.cssText = [
      "width:100%",
      "min-height:240px",
      "font-family:Consolas,monospace",
      "font-size:11px",
      "background:#0f172a",
      "color:#22d3ee",
      "border:1px solid #334155",
      "border-radius:4px",
      "padding:6px",
      "resize:vertical",
      // CRITICAL: dejar que la textarea reciba foco/eventos sin que Tweakpane los intercepte
      "pointer-events:auto",
      "user-select:text",
      "-webkit-user-select:text",
      "outline:none",
      "white-space:pre",
      "overflow:auto",
    ].join(";") + ";";
    ta.spellcheck = false;
    ta.autocomplete = "off";
    ta.setAttribute("autocorrect", "off");
    ta.setAttribute("autocapitalize", "off");
    ta.placeholder = "node 1 0 0 0\nnode 2 5 0 0\nsupport 1 fixed\nframe 1 1 2 25e6 0.04 0.001\nload 2 0 0 -100\nsolve";
    ta.value = (window as any).__hekatanCliScript ?? "";
    // Tweakpane intercepta pointer/keyboard events sobre sus folders → la textarea
    // queda "muerta" (no se puede editar/seleccionar/copiar). Solución: cortar la
    // propagación de TODOS los eventos relevantes a nivel de la textarea.
    const swallow = (e: Event) => e.stopPropagation();
    [
      "pointerdown", "pointerup", "pointermove",
      "mousedown", "mouseup", "mousemove", "click", "dblclick",
      "keydown", "keyup", "keypress", "input", "change",
      "focus", "blur", "select", "selectstart",
      "copy", "cut", "paste", "contextmenu", "wheel",
    ].forEach(ev => ta.addEventListener(ev, swallow));
    taContainer.appendChild(ta);
    fCli.element.appendChild(taContainer);

    // Status line debajo de la textarea — feedback inmediato (nodos/frames/errs)
    const statusLine = document.createElement("div");
    statusLine.style.cssText = "padding:2px 6px;font-family:Consolas,monospace;font-size:10px;color:#94a3b8;min-height:14px;";
    statusLine.textContent = "Listo. El modelo se actualiza al escribir.";
    taContainer.appendChild(statusLine);

    /**
     * Aplica el script CLI: lo escribe en window y dispara rebuild.
     * Si el ejemplo actual NO es cli-modeler, cambia a cli-modeler para
     * que el script tome efecto (sino el rebuild reconstruye el ejemplo
     * activo y descarta el script).
     */
    const applyCliScript = () => {
      (window as any).__hekatanCliScript = ta.value;
      const cli = examplesRegistry.find((x) => x.id === "cli-modeler");
      if (cli && currentExample?.id !== "cli-modeler") {
        // Cambiar a cli-modeler para que el script se interprete
        loadExample(cli);
      } else {
        try { (window as any).__hekatanRebuild?.(); } catch (e) { console.error(e); }
      }
      // Actualizar status line con stats del parser
      const stats = (window as any).__hekatanCliStats;
      const errs = (window as any).__hekatanCliErrors as string[] | undefined;
      if (stats) {
        statusLine.textContent =
          `${stats.nodes} nodos · ${stats.frames} frames · ${stats.shells} shells · ` +
          `${stats.solved ? "solve OK" : "(sin solve)"}` +
          (errs?.length ? ` · ⚠ ${errs.length} err` : "");
        statusLine.style.color = errs?.length ? "#f87171" : "#94a3b8";
      }
    };

    // ── Live update con debounce ──
    // Cada cambio en la textarea se aplica tras 250ms de inactividad para
    // no recalcular el FEM en cada tecla. Si el usuario quiere forzar
    // actualizacion inmediata puede usar el boton ▶ o Ctrl+Enter.
    let liveTimer: any = null;
    const liveApply = () => {
      if (liveTimer) clearTimeout(liveTimer);
      liveTimer = setTimeout(() => { applyCliScript(); }, 250);
    };
    ta.addEventListener("input", liveApply);
    // Ctrl+Enter ejecuta inmediatamente (sin esperar debounce)
    ta.addEventListener("keydown", (ev) => {
      if (ev.ctrlKey && ev.key === "Enter") {
        ev.preventDefault();
        if (liveTimer) clearTimeout(liveTimer);
        applyCliScript();
      }
    });

    fCli.addButton({ title: "▶ Ejecutar ahora (Ctrl+Enter)" }).on("click", () => {
      if (liveTimer) clearTimeout(liveTimer);
      applyCliScript();
      const errs = (window as any).__hekatanCliErrors as string[] | undefined;
      if (errs?.length) alert("⚠ Errores:\n" + errs.slice(0, 5).join("\n"));
    });
    fCli.addButton({ title: "🗑 Limpiar comandos" }).on("click", () => {
      ta.value = "";
      (window as any).__hekatanCliScript = "";
      applyCliScript();
    });
    // Ejemplos: el usuario elige inline o bloque.
    // - Inline = una linea por entidad ("node 1 0 0 0"). Comodo para
    //   modelos pequeños o cuando se mezclan tipos.
    // - Bloque = encabezado una sola vez ("nodes" / "elements" / ...) y
    //   despues solo coordenadas/indices. Preferible cuando hay muchas
    //   lineas seguidas de la misma llamada.
    fCli.addButton({ title: "📋 Pórtico 2D (inline)" }).on("click", () => {
      ta.value = `# Portico 2D — sintaxis inline (cada linea con su comando)
node 1 0 0 0
node 2 0 0 3
node 3 5 0 3
node 4 5 0 0

support 1 fixed
support 4 fixed

# frame ID nI nJ E A I  (col 0.40x0.40)
frame 1 1 2 25e6 0.16 0.0021
frame 2 2 3 25e6 0.15 0.0028
frame 3 3 4 25e6 0.16 0.0021

load 2 10 0 -50 0 0 0
load 3 10 0 -50 0 0 0

solve`;
      applyCliScript();
    });
    fCli.addButton({ title: "📋 Cantilever (inline)" }).on("click", () => {
      ta.value = `# Cantilever 5m con carga en extremo — sintaxis inline
node 1 0 0 0
node 2 5 0 0
support 1 fixed
frame 1 1 2 25e6 0.04 0.001
load 2 0 0 -100
solve`;
      applyCliScript();
    });
    fCli.addButton({ title: "📋 Pórtico 2D (bloques)" }).on("click", () => {
      // Sintaxis compacta tipo awatif: encabezado una vez y luego solo numeros.
      // Util cuando hay muchas lineas seguidas del mismo tipo (nodos/elementos).
      ta.value = `# Portico 2D — sintaxis bloque (estilo awatif, indices 0-based)
nodes
0 0 0
0 0 3
5 0 3
5 0 0

elements
0 1
1 2
2 3

supports
1 fixed
4 fixed

loads
2 10 0 -50 0 0 0
3 10 0 -50 0 0 0

solve`;
      applyCliScript();
    });
  }

  // ── 📥 Importar CSI (solo para el ejemplo csi-importer) ──
  if (currentExample && currentExample.id === "csi-importer") {
    const fImp = pane.addFolder({ title: "📥 Importar archivo", expanded: true });
    // Helper: forzar rebuild + autoFitCamera tras setear los datos.
    // El bug previo era que scheduleRebuild() debounce 120ms a veces
    // perdía el set, o el viewer no reencuadraba al cargar geometría
    // de un modelo recién importado. Forzamos rebuild síncrono +
    // autoFitCamera explícito.
    const forceRebuildAndFit = () => {
      try { rebuild(); } catch (e) { console.error("[CSI Importer] rebuild error:", e); }
      try { autoFitCamera(); } catch {}
    };
    const triggerImport = (kind: "f2k" | "e2k" | "s2k") => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = `.${kind},.txt`;
      input.onchange = async (ev: any) => {
        const file = ev.target.files?.[0];
        if (!file) return;
        try {
          const text = await file.text();
          if (kind === "f2k") {
            const { parseEdificioCimentacionF2k } = await import("../shared/f2kCimentacionImporter");
            const data = parseEdificioCimentacionF2k(text);
            (window as any).__hekatanImportedCim = data;
            console.log("[CSI Importer] F2K parseado:", data);
            const wMsg = data._warnings && data._warnings.length
              ? `\n\n⚠ Warnings:\n${data._warnings.map((w: string) => "• " + w).join("\n")}`
              : "";
            alert(`✅ F2K cargado:\n• ${data.zapatas.length} zapatas\n• ${data.vigasAmarre?.length ?? 0} vigas\n• ks = ${Math.round(data.ks_kNm3)} kN/m³${wMsg}`);
            forceRebuildAndFit();
          } else {
            alert(`Importador ${kind.toUpperCase()} aún no implementado. Por ahora solo F2K (SAFE).`);
          }
        } catch (e: any) {
          alert(`❌ Error al importar ${kind.toUpperCase()}: ${e.message}`);
          console.error(e);
        }
      };
      input.click();
    };
    fImp.addButton({ title: "📥 F2K (SAFE) — Cimentación" }).on("click", () => triggerImport("f2k"));
    fImp.addButton({ title: "📥 E2K (ETABS) — Edificio (próximo)" }).on("click", () => triggerImport("e2k"));
    fImp.addButton({ title: "📥 S2K (SAP2000) — Modelo (próximo)" }).on("click", () => triggerImport("s2k"));
    fImp.addButton({ title: "🗑 Limpiar y vaciar escena" }).on("click", () => {
      delete (window as any).__hekatanImportedCim;
      forceRebuildAndFit();
    });
  }

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

        }
        // Folder "📤 SAFE F2K (cimentación)" — disponible para CUALQUIER
        // edificio/galpón/pórtico (no solo edificio-aporticado). Diseña
        // zapatas automáticamente desde las reacciones de base y exporta
        // el F2K. Si el ejemplo NO tiene params específicos de cimentación
        // (q_adm_zapata, ks_zapata, etc.), se usan defaults sensatos.
        {
          const fCim = pane.addFolder({ title: "🪨 Cimentación (diseño + SAFE F2K)", expanded: false });

          // ── Cardinal Point del insertion point (convención SAFE/ETABS) ──
          // Determina dónde queda la sección de la columna respecto al
          // insertion point (z.x, z.y) reportado por el FEM.
          //   1=BotL  2=BotC  3=BotR
          //   4=MidL  5=MidC  6=MidR
          //   7=TopL  8=TopC  9=TopR
          //  10=Centroid (default, simétrico = MidC para sección cuadrada)
          //  11=Shear Center (= Centroid para sección simétrica)
          const cimUiState: any = (window as any).__hekatanCimUI ?? { cardinal: 10 };
          (window as any).__hekatanCimUI = cimUiState;
          const cardBinding = fCim.addBinding(cimUiState, "cardinal", {
            label: "Cardinal Point col.",
            options: {
              "1 — Bottom Left":   1, "2 — Bottom Center": 2, "3 — Bottom Right": 3,
              "4 — Middle Left":   4, "5 — Middle Center": 5, "6 — Middle Right": 6,
              "7 — Top Left":      7, "8 — Top Center":    8, "9 — Top Right":    9,
              "10 — Centroid":    10, "11 — Shear Center":11,
            },
          });
          // Live reactive: cuando cambia el cardinal, re-renderiza la
          // cimentación visual (silenciosamente, sin alert).
          cardBinding.on("change", () => {
            const btn = Array.from(document.querySelectorAll<HTMLButtonElement>('button')).find(b => b.textContent?.includes('Calcular y ver cimentación'));
            if (btn && (window as any).__hekatanCimentacionDesigned) {
              (window as any).__cimSilent = true;
              btn.click();
            }
          });
          // Auto-fire una vez al primer build cuando aparezcan reacciones
          // (igual que vanjs derive — reactivo sobre deformOutputs).
          van.derive(() => {
            const out = (deformOutputs as any).val;
            if (!out?.reactions || out.reactions.size === 0) return;
            // Solo auto-firarlo si NUNCA se ha calculado (primera vez)
            if ((window as any).__hekatanCimAutoFired) return;
            (window as any).__hekatanCimAutoFired = true;
            // Esperar un tick para que el botón ya esté en el DOM
            setTimeout(() => {
              const btn = Array.from(document.querySelectorAll<HTMLButtonElement>('button')).find(b => b.textContent?.includes('Calcular y ver cimentación'));
              if (btn) { (window as any).__cimSilent = true; btn.click(); }
            }, 100);
          });

          // ── Botón: Calcular y mostrar cimentación en pantalla ──
          // Diseña las zapatas desde las reacciones de base y las dibuja como
          // bloques 3D semi-transparentes sobre los apoyos. Esto da feedback
          // VISUAL antes de exportar a SAFE — el usuario ve qué se está
          // dimensionando.
          fCim.addButton({ title: "👁 Calcular y ver cimentación" }).on("click", async () => {
            // Modo silencioso (auto-fire reactivo): suprimir alert
            const silent = (window as any).__cimSilent === true;
            delete (window as any).__cimSilent;
            const reactions = (deformOutputs.rawVal as any)?.reactions as
              Map<number, [number, number, number, number, number, number]> | undefined;
            const ns = nodes.rawVal as number[][];
            if (!reactions || !ns?.length) {
              if (!silent) alert("Sin reacciones aún — corre primero el análisis del edificio.");
              return;
            }
            const p = currentParams as any;
            const q_adm = (p.q_adm_zapata as number) ?? 10;
            const ks = (p.ks_zapata as number) ?? 1030;
            const tz = (p.t_zapata as number) ?? 0.30;
            const colSize = p.colSize ?? 0.40;
            const Hf = (p.Hf_pedestal as number) ?? 0.5;
            const baseRows: Array<{idx:number;x:number;y:number;P_kN:number;Mx_kN:number;My_kN:number}> = [];
            let xMax = 0, yMax = 0;
            reactions.forEach((r, idx) => {
              const n = ns[idx];
              if (!n || Math.abs(n[2]) > 1e-6) return;
              baseRows.push({ idx, x: n[0], y: n[1], P_kN: Math.abs(r[2]), Mx_kN: r[3], My_kN: r[4] });
              if (n[0] > xMax) xMax = n[0];
              if (n[1] > yMax) yMax = n[1];
            });
            if (!baseRows.length) { alert("No hay apoyos en z=0."); return; }
            const { designAllFootings } = await import("../shared/footingDesign");
            const zapatasD = designAllFootings(baseRows, xMax, yMax, q_adm, ks);
            for (const z of zapatasD) z.t = tz;

            // Dibujar zapatas como placa Q4 ShellThick — plano translúcido top
            // y bottom + grilla de subdivisiones + edges (mismo estilo que
            // edificio-aporticado modo Shellthick).
            const THREE = await import("three");
            const nSubZ = Math.max(2, Math.round((p.nSubZapata as number) ?? 4));
            const matPlane = new THREE.MeshStandardMaterial({
              color: 0x4488cc, transparent: true, opacity: 0.45,
              roughness: 0.6, side: THREE.DoubleSide,
            });
            const matGrid = new THREE.LineBasicMaterial({ color: 0x1f3a5f, transparent: true, opacity: 0.85 });
            const matEdge = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
            const matPed = new THREE.MeshStandardMaterial({
              color: 0x808080, transparent: true, opacity: 0.5,
              roughness: 0.6, side: THREE.DoubleSide,
            });
            const meshes: any[] = [];
            for (const z of zapatasD as any[]) {
              const Lz = z.Lz, Bz = z.Bz, t = z.t;
              // Offset columna ↔ centro zapata (esquinera/lindero/central).
              // Convención CSI/ETABS: en lindero/esquinera la CARA de la
              // columna queda FLUSH con el borde de la zapata. El insertion
              // point (centro de columna) está a colSize/2 del borde.
              let offX = 0, offY = 0;
              const halfCol = colSize / 2;
              // Cardinal Point: offset del CENTROIDE de la sección respecto
              // al insertion point.
              //   K=1,4,7 (Left)   → centroide a la derecha de insertion: +halfCol
              //   K=3,6,9 (Right)  → centroide a la izquierda: -halfCol
              //   K=1,2,3 (Bottom) → centroide arriba: +halfCol
              //   K=7,8,9 (Top)    → centroide abajo: -halfCol
              //   K=5,10,11        → centroide en insertion (no offset)
              const K = (cimUiState.cardinal as number) ?? 10;
              let cdx = 0, cdy = 0;
              if (K === 1 || K === 4 || K === 7) cdx = +halfCol;
              else if (K === 3 || K === 6 || K === 9) cdx = -halfCol;
              if (K === 1 || K === 2 || K === 3) cdy = +halfCol;
              else if (K === 7 || K === 8 || K === 9) cdy = -halfCol;
              // Cara IZQUIERDA y DERECHA del col en X relativo a insertion:
              //   leftFace = z.x + cdx - halfCol; rightFace = z.x + cdx + halfCol
              if (z.tipo === "esquinera") {
                // En esquinera: la cara CONSTRAINED de cada lado coincide con
                // borde de zapata. Para el lado izquierdo (z.x < xMax/2),
                // queremos rightFace = z.x + cdx - halfCol al borde, NO —
                // queremos LEFT face del col al borde IZQUIERDO de la zapata.
                if (z.x < xMax/2) offX = -(Lz/2 + (cdx - halfCol));   // leftFace al borde izq
                else              offX =  (Lz/2 - (cdx + halfCol));   // rightFace al borde der
                if (z.y < yMax/2) offY = -(Bz/2 + (cdy - halfCol));
                else              offY =  (Bz/2 - (cdy + halfCol));
              } else if (z.tipo === "lindero") {
                if (Math.abs(z.x) < 1e-3 || Math.abs(z.x - xMax) < 1e-3) {
                  if (z.x < xMax/2) offX = -(Lz/2 + (cdx - halfCol));
                  else              offX =  (Lz/2 - (cdx + halfCol));
                } else if (Math.abs(z.y) < 1e-3 || Math.abs(z.y - yMax) < 1e-3) {
                  if (z.y < yMax/2) offY = -(Bz/2 + (cdy - halfCol));
                  else              offY =  (Bz/2 - (cdy + halfCol));
                }
              }
              const xCz = z.x - offX, yCz = z.y - offY;
              // Centro real del eje de la columna (puede no ser z.x,z.y)
              const xColAxis = z.x + cdx, yColAxis = z.y + cdy;
              // ShellThick = superficie 2D en el TOP de la zapata (convención
              // FEM, igual que edificio-aporticado). El espesor t es propiedad
              // del elemento, no afecta posición de la superficie.
              const zMid = -Hf;
              // UN plano translúcido en el plano del shell
              const planeMid = new THREE.Mesh(new THREE.PlaneGeometry(Lz, Bz), matPlane.clone());
              planeMid.position.set(xCz, yCz, zMid);
              meshes.push(planeMid);
              // Grilla Q4 (nSubZ × nSubZ subdivisiones) en el plano medio
              const dx = Lz / nSubZ, dy = Bz / nSubZ;
              const gridPts: any[] = [];
              for (let i = 0; i <= nSubZ; i++) {
                const xi = -Lz/2 + i * dx;
                gridPts.push(
                  new THREE.Vector3(xCz + xi, yCz - Bz/2, zMid),
                  new THREE.Vector3(xCz + xi, yCz + Bz/2, zMid),
                );
              }
              for (let j = 0; j <= nSubZ; j++) {
                const yj = -Bz/2 + j * dy;
                gridPts.push(
                  new THREE.Vector3(xCz - Lz/2, yCz + yj, zMid),
                  new THREE.Vector3(xCz + Lz/2, yCz + yj, zMid),
                );
              }
              meshes.push(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(gridPts), matGrid));
              // Edges del perímetro (rectángulo único)
              const corners = [[-Lz/2, -Bz/2], [Lz/2, -Bz/2], [Lz/2, Bz/2], [-Lz/2, Bz/2]];
              const edgePts: any[] = [];
              for (let k = 0; k < 4; k++) {
                const [ax, ay] = corners[k]; const [bx, by] = corners[(k + 1) % 4];
                edgePts.push(
                  new THREE.Vector3(xCz + ax, yCz + ay, zMid),
                  new THREE.Vector3(xCz + bx, yCz + by, zMid),
                );
              }
              meshes.push(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(edgePts), matEdge));
              // Columna EXTRUIDA centrada en el centroide del col (xColAxis,
              // yColAxis) — NO necesariamente en (z.x, z.y) que es el insertion.
              // Box de tamaño colSize×colSize×Hf. Esto muestra correctamente
              // como el insertion point puede estar en cualquier cardinal de
              // la sección (1=BotL, ..., 10=Centroid).
              const pedGeo = new THREE.BoxGeometry(colSize, colSize, Hf);
              const pedMesh = new THREE.Mesh(pedGeo, matPed.clone());
              pedMesh.position.set(xColAxis, yColAxis, -Hf / 2);
              meshes.push(pedMesh);
              // Edges de la columna para resaltar su outline
              const pedEdges = new THREE.LineSegments(new THREE.EdgesGeometry(pedGeo), matEdge.clone());
              pedEdges.position.copy(pedMesh.position);
              meshes.push(pedEdges);
              // ── LÍNEA DEL PEDESTAL — eje vertical del insertion point ──
              // Línea gruesa amarilla que va desde z=0 (base de columna de la
              // superestructura) hasta z=-Hf (top de la zapata Q4 ShellThick).
              // Esta es la LÍNEA DE EJE del pedestal: visualmente clara,
              // independiente de la BoxGeometry del pedestal extruido.
              // Termina exactamente en el insertion point (z.x, z.y, -Hf)
              // donde se conecta la cadena/viga de amarre.
              const axisPts = [
                new THREE.Vector3(z.x, z.y, 0),
                new THREE.Vector3(z.x, z.y, -Hf),
              ];
              const axisGeo = new THREE.BufferGeometry().setFromPoints(axisPts);
              const axisMat = new THREE.LineBasicMaterial({ color: 0xffcc00, linewidth: 3 });
              const axisLine = new THREE.Line(axisGeo, axisMat);
              meshes.push(axisLine);
              // Marker pequeño verde en el INSERTION POINT (z.x, z.y, -Hf)
              // para que el usuario vea claramente DÓNDE conecta la viga.
              const insMarkerGeo = new THREE.SphereGeometry(0.05, 8, 8);
              const insMarkerMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
              const insMarker = new THREE.Mesh(insMarkerGeo, insMarkerMat);
              insMarker.position.set(z.x, z.y, -Hf);
              meshes.push(insMarker);
              // Marker amarillo en el TOP del pedestal (z.x, z.y, 0) — base
              // de la columna de la superestructura.
              const topMarkerGeo = new THREE.SphereGeometry(0.04, 8, 8);
              const topMarkerMat = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
              const topMarker = new THREE.Mesh(topMarkerGeo, topMarkerMat);
              topMarker.position.set(z.x, z.y, 0);
              meshes.push(topMarker);
            }

            // ── Vigas de amarre (sistema=1) — entre zapatas adyacentes ──
            const sistemaCim = Math.round((p.sistemaCimentacion as number) ?? 0);
            if (sistemaCim === 1) {
              const va_h = (p.vigaAmarre_h as number) ?? 0.40;
              const va_b = (p.vigaAmarre_b as number) ?? 0.25;
              const va_pos = Math.round((p.vigaAmarre_pos as number) ?? 0);
              const zVA = va_pos === 0 ? -Hf : -Hf / 2;
              const matViga = new THREE.MeshStandardMaterial({ color: 0x10b981, transparent: true, opacity: 0.65 });
              const byY = new Map<string, typeof baseRows>();
              const byX = new Map<string, typeof baseRows>();
              for (const b of baseRows) {
                const ky = b.y.toFixed(4), kx = b.x.toFixed(4);
                if (!byY.has(ky)) byY.set(ky, []);
                if (!byX.has(kx)) byX.set(kx, []);
                byY.get(ky)!.push(b); byX.get(kx)!.push(b);
              }
              const drawViga = (a: any, b: any) => {
                const dx = b.x - a.x, dy = b.y - a.y;
                const len = Math.hypot(dx, dy); if (len < 1e-6) return;
                const geo = new THREE.BoxGeometry(va_b, len, va_h);
                const m = new THREE.Mesh(geo, matViga.clone());
                m.position.set((a.x + b.x) / 2, (a.y + b.y) / 2, zVA);
                m.rotateZ(Math.atan2(dy, dx) - Math.PI / 2);
                meshes.push(m);
              };
              for (const row of byY.values()) { row.sort((a,b)=>a.x-b.x); for (let i=0;i<row.length-1;i++) drawViga(row[i], row[i+1]); }
              for (const col of byX.values()) { col.sort((a,b)=>a.y-b.y); for (let i=0;i<col.length-1;i++) drawViga(col[i], col[i+1]); }
            }

            // ── Losa raft (sistema=2,3,4) — UN único plano Q4 cubriendo
            // toda la huella del edificio ──
            if (sistemaCim >= 2) {
              const margen = (p.voladoExtra as number) ?? 0.30;
              const xMin = 0 - margen, xMx = xMax + margen;
              const yMin = 0 - margen, yMx = yMax + margen;
              const Lx = xMx - xMin, Ly = yMx - yMin;
              const xC = (xMin + xMx) / 2, yC = (yMin + yMx) / 2;
              const t_raft = (p.t_zapata as number) ?? 0.30;
              const zMidR = -Hf - t_raft / 2;  // plano medio del shell raft
              const matRaft = new THREE.MeshStandardMaterial({ color: 0xea580c, transparent: true, opacity: 0.40, roughness: 0.6, side: THREE.DoubleSide });
              const matRaftGrid = new THREE.LineBasicMaterial({ color: 0x9a3412 });
              // UN solo plano shell raft en el plano medio
              const planeR = new THREE.Mesh(new THREE.PlaneGeometry(Lx, Ly), matRaft.clone());
              planeR.position.set(xC, yC, zMidR); meshes.push(planeR);
              // Grilla densa: subdiv automática según tamaño (~1m por celda)
              const nx = Math.max(2, Math.round(Lx)), ny = Math.max(2, Math.round(Ly));
              const dxR = Lx / nx, dyR = Ly / ny;
              const ptsR: any[] = [];
              for (let i = 0; i <= nx; i++) {
                const xi = xMin + i * dxR;
                ptsR.push(new THREE.Vector3(xi, yMin, zMidR), new THREE.Vector3(xi, yMx, zMidR));
              }
              for (let j = 0; j <= ny; j++) {
                const yj = yMin + j * dyR;
                ptsR.push(new THREE.Vector3(xMin, yj, zMidR), new THREE.Vector3(xMx, yj, zMidR));
              }
              meshes.push(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(ptsR), matRaftGrid));
              // Edges raft (perímetro único en plano medio)
              const c4 = [[xMin,yMin],[xMx,yMin],[xMx,yMx],[xMin,yMx]];
              const eR: any[] = [];
              for (let k = 0; k < 4; k++) {
                const [ax, ay] = c4[k]; const [bx, by] = c4[(k+1)%4];
                eR.push(new THREE.Vector3(ax, ay, zMidR), new THREE.Vector3(bx, by, zMidR));
              }
              meshes.push(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(eR), matEdge.clone()));
            }
            states.objects3D.val = [...(states.objects3D.val ?? []), ...meshes];
            // ── ISOLAR vista: ocultar superestructura para mostrar SOLO la
            // cimentación (zapatas + cadenas + pedestales). El usuario pidió
            // explícitamente que al calcular cimentación no se vea todo el
            // edificio mezclado — sólo la parte de cimentación.
            // Guardamos el estado anterior de cada toggle para poder restaurarlo.
            // NOTA: NO tocamos shellResults / frameResults / nodeResults aquí
            // porque las meshes visuales de cimentación viven en objects3D
            // (no son shells FEM con campos analíticos). El botón "🧮 Análisis
            // FEM solo cimentación" sí setea shellResults = pressure.
            const sCim = (viewerElm as any).__settings;
            if (sCim) {
              const saved = (window as any).__hekatanSavedSettings = (window as any).__hekatanSavedSettings ?? {};
              const offKeys = ["elements", "nodes", "elemColumns", "elemBeams",
                               "supports", "loads", "deformedShape",
                               "orientations", "nodesIndexes", "elementsIndexes",
                               "sections", "secColumns", "secBeams", "secFloor",
                               "solids"];
              for (const k of offKeys) {
                if (sCim[k] && typeof sCim[k] === "object" && "val" in sCim[k]) {
                  if (saved[k] === undefined) saved[k] = sCim[k].val;
                  sCim[k].val = false;
                }
              }
              // custom3D ON para que se vean las meshes de cimentación en objects3D
              if (sCim.custom3D && typeof sCim.custom3D === "object" && "val" in sCim.custom3D) {
                if (saved.custom3D === undefined) saved.custom3D = sCim.custom3D.val;
                sCim.custom3D.val = true;
              }
              (window as any).__hekatanCimViewIsolated = true;
            }
            // Guardar diseño para uso del exportador
            (window as any).__hekatanCimentacionDesigned = { zapatasD, baseRows, xMax, yMax, q_adm, ks, tz, colSize, Hf };
            const totalZ = zapatasD.length;
            const tipos = zapatasD.reduce((acc: any, z: any) => { acc[z.tipo] = (acc[z.tipo] ?? 0) + 1; return acc; }, {});
            const tiposStr = Object.entries(tipos).map(([k, v]) => `${v} ${k}`).join(", ");
            const sysName = sistemaCim === 1 ? "Zapatas + vigas de amarre" :
                            sistemaCim === 2 ? "Losa raft" :
                            sistemaCim === 3 ? "Vigas + zapata corrida" :
                            sistemaCim === 4 ? "Losa raft" :
                            "Zapatas aisladas";
            if (!silent) {
              alert(`✅ Cimentación calculada (sistema = ${sysName}):\n• ${totalZ} zapatas Q4 ShellThick (${tiposStr})\n• Cada zapata: 1 placa shell en plano medio + grilla ${nSubZ}×${nSubZ}\n• ks = ${ks} kN/m³, q_adm = ${q_adm} tonf/m²\n• Espesor (propiedad del shell) = ${tz} m\n• Pedestal Hf = ${Hf} m\n\nVista AISLADA: superestructura oculta, solo cimentación.\nUsá el botón "🏢 Volver a vista superestructura" para restaurar.`);
            }
            console.log(`[Cimentación] sistema=${sysName}, ${totalZ} zapatas (${tiposStr}) — vista isolada`);
          });

          // ── Botón: Volver a vista superestructura ──
          // Restaura los toggles que "Calcular y ver cimentación" apagó para
          // aislar la cimentación. El usuario vuelve a ver el edificio completo
          // con sus elementos/nodos/cargas/apoyos/deformada.
          fCim.addButton({ title: "🏢 Volver a vista superestructura" }).on("click", () => {
            const sR = (viewerElm as any).__settings;
            const saved = (window as any).__hekatanSavedSettings;
            if (!sR || !saved) {
              alert("No hay vista isolada activa.");
              return;
            }
            for (const k of Object.keys(saved)) {
              if (sR[k] && typeof sR[k] === "object" && "val" in sR[k]) {
                sR[k].val = saved[k];
              }
            }
            // Limpiar meshes de cimentación de objects3D (mantener resortes y
            // otros custom3D del ejemplo activo). Los meshes de cimentación se
            // re-generan al pulsar de nuevo "Calcular y ver cimentación".
            // Conservamos lo que había ANTES (referencia guardada antes de
            // pushearlas — si no se guardó, simplemente vaciamos foundation).
            // Heurística: re-correr el build del ejemplo activo restablece
            // objects3D del ejemplo (resortes Winkler de zapata-aislada, etc.)
            (window as any).__hekatanCimViewIsolated = false;
            delete (window as any).__hekatanSavedSettings;
            alert("✅ Vista superestructura restaurada.");
            console.log("[Cimentación] vista superestructura restaurada");
          });

          // ── Botón: Análisis FEM solo cimentación ──
          // Reemplaza el modelo actual con la cimentación FEM (zapatas Q4
          // ShellThick + Winkler springs + cargas P,Mx,My de las reacciones).
          // Corre deform+analyze. Permite ver Deformed shape + Shell results
          // (pressure, displacementZ, bending) sobre la cimentación.
          fCim.addButton({ title: "🧮 Análisis FEM solo cimentación" }).on("click", async () => {
            const reactions = (deformOutputs.rawVal as any)?.reactions as
              Map<number, [number, number, number, number, number, number]> | undefined;
            const ns = nodes.rawVal as number[][];
            if (!reactions || !ns?.length) {
              alert("Sin reacciones aún — corre primero el análisis del edificio.");
              return;
            }
            const p = currentParams as any;
            const q_adm = (p.q_adm_zapata as number) ?? 10;
            const ks = (p.ks_zapata as number) ?? 1030;
            const tz = (p.t_zapata as number) ?? 0.30;
            const Hf = (p.Hf_pedestal as number) ?? 0.5;
            const volExt = (p.voladoExtra as number) ?? 0.30;
            const colSize = (p.colSize as number) ?? 0.40;
            const nSubZ = Math.max(2, Math.round((p.nSubZapata as number) ?? 4));
            const Ec = 25e6, nu_c = 0.20, Gc = Ec / (2 * (1 + nu_c)), rho_c = 24;
            const baseRows: Array<{idx:number;x:number;y:number;P_kN:number;Mx_kN:number;My_kN:number}> = [];
            let xMaxC = 0, yMaxC = 0;
            reactions.forEach((r, idx) => {
              const n = ns[idx];
              if (!n || Math.abs(n[2]) > 1e-6) return;
              baseRows.push({ idx, x: n[0], y: n[1], P_kN: Math.abs(r[2]), Mx_kN: r[3], My_kN: r[4] });
              if (n[0] > xMaxC) xMaxC = n[0];
              if (n[1] > yMaxC) yMaxC = n[1];
            });
            if (!baseRows.length) { alert("No hay apoyos en z=0."); return; }
            const { designAllFootings } = await import("../shared/footingDesign");
            const zapatasD = designAllFootings(baseRows, xMaxC, yMaxC, q_adm, ks);
            for (const z of zapatasD) z.t = tz;

            // Construir FEM model — solo zapatas
            const N2: Node[] = [];
            const E2: Element[] = [];
            const elasticities2 = new Map<number, number>();
            const shearModuli2 = new Map<number, number>();
            const areas2 = new Map<number, number>();
            const Iz2 = new Map<number, number>();
            const Iy2 = new Map<number, number>();
            const J2 = new Map<number, number>();
            const densities2 = new Map<number, number>();
            const poissons2 = new Map<number, number>();
            const thicknesses2 = new Map<number, number>();
            const supports2 = new Map<number, [boolean,boolean,boolean,boolean,boolean,boolean]>();
            const loads2 = new Map<number, [number,number,number,number,number,number]>();
            const springsList2: Array<{ node: number; dof: number; k: number }> = [];

            const nodeIdx = new Map<string, number>();
            const addNode = (x: number, y: number, z: number): number => {
              const key = `${Math.round(x*10000)},${Math.round(y*10000)},${Math.round(z*10000)}`;
              const found = nodeIdx.get(key); if (found !== undefined) return found;
              const i = N2.length; N2.push([x, y, z]); nodeIdx.set(key, i); return i;
            };

            for (const z of zapatasD as any[]) {
              const Lz = z.Lz, Bz = z.Bz, t = z.t;
              // Insertion point CSI/ETABS: la cara de la columna FLUSH con el
              // borde de la zapata en lados constrained (lindero/esquinera).
              // El insertion point (centro columna) está a colSize/2 del borde.
              let offX = 0, offY = 0;
              const halfColC = colSize / 2;
              if (z.tipo === "esquinera") {
                offX = (z.x < xMaxC/2) ? -(Lz/2 - halfColC) : (Lz/2 - halfColC);
                offY = (z.y < yMaxC/2) ? -(Bz/2 - halfColC) : (Bz/2 - halfColC);
              } else if (z.tipo === "lindero") {
                if (Math.abs(z.x) < 1e-3 || Math.abs(z.x - xMaxC) < 1e-3) offX = (z.x < xMaxC/2) ? -(Lz/2 - halfColC) : (Lz/2 - halfColC);
                else if (Math.abs(z.y) < 1e-3 || Math.abs(z.y - yMaxC) < 1e-3) offY = (z.y < yMaxC/2) ? -(Bz/2 - halfColC) : (Bz/2 - halfColC);
              }
              const xCz = z.x - offX, yCz = z.y - offY;
              // Convención (igual que edificio-aporticado): shell sits at TOP
              // de la zapata. Espesor t es propiedad del elemento, no se duplica.
              const zMid = -Hf;
              const dx = Lz / nSubZ, dy = Bz / nSubZ;
              const grid: number[][] = [];
              for (let jr = 0; jr <= nSubZ; jr++) {
                const row: number[] = [];
                for (let jc = 0; jc <= nSubZ; jc++) {
                  row.push(addNode(xCz - Lz/2 + jc * dx, yCz - Bz/2 + jr * dy, zMid));
                }
                grid.push(row);
              }
              for (let jr = 0; jr < nSubZ; jr++) {
                for (let jc = 0; jc < nSubZ; jc++) {
                  const eIdx = E2.length;
                  E2.push([grid[jr][jc], grid[jr][jc+1], grid[jr+1][jc+1], grid[jr+1][jc]] as Element);
                  thicknesses2.set(eIdx, t);
                  elasticities2.set(eIdx, Ec);
                  poissons2.set(eIdx, nu_c);
                  shearModuli2.set(eIdx, Gc);
                  densities2.set(eIdx, rho_c);
                }
              }
              // Winkler springs en cada nodo del grid
              for (let jr = 0; jr <= nSubZ; jr++) {
                for (let jc = 0; jc <= nSubZ; jc++) {
                  const A_trib = dx * dy *
                    ((jc === 0 || jc === nSubZ) ? 0.5 : 1) *
                    ((jr === 0 || jr === nSubZ) ? 0.5 : 1);
                  const kvz = ks * A_trib;
                  const khxy = kvz * 0.5;
                  const ni = grid[jr][jc];
                  springsList2.push({ node: ni, dof: 0, k: khxy });
                  springsList2.push({ node: ni, dof: 1, k: khxy });
                  springsList2.push({ node: ni, dof: 2, k: kvz });
                  springsList2.push({ node: ni, dof: 5, k: kvz * 0.1 });
                }
              }
              // Anclaje rotacional en una esquina (evita modos rígidos)
              supports2.set(grid[0][0], [false, false, false, true, true, true]);
              // Aplicar carga en el nodo más cercano a la columna
              let bI = 0, bJ = 0, bD = Infinity;
              for (let jr = 0; jr <= nSubZ; jr++) {
                for (let jc = 0; jc <= nSubZ; jc++) {
                  const ni = grid[jr][jc];
                  const d = Math.hypot(N2[ni][0] - z.x, N2[ni][1] - z.y);
                  if (d < bD) { bD = d; bI = jr; bJ = jc; }
                }
              }
              const baseR = baseRows.find(b => b.idx === z.idx)!;
              loads2.set(grid[bI][bJ], [0, 0, -baseR.P_kN, baseR.Mx_kN, baseR.My_kN, 0]);
              // Guardar el nodo central de cada zapata para conectar vigas
              (z as any)._nFootCol = grid[bI][bJ];
              (z as any)._zMid = zMid;
            }

            // ── Cadenas / vigas de amarre (sistema=1) — frames entre zapatas
            // adyacentes. Se conectan al nodo central FEM de cada zapata
            // (mismo nodo donde se aplicó la carga), al nivel del plano medio
            // del shell. Son frames concreto rectangulares b×h.
            const sistemaCimFem = Math.round((p.sistemaCimentacion as number) ?? 0);
            if (sistemaCimFem === 1) {
              const va_h = (p.vigaAmarre_h as number) ?? 0.40;
              const va_b = (p.vigaAmarre_b as number) ?? 0.25;
              const va_A = va_b * va_h;
              const va_Iy = (va_b * va_h ** 3) / 12;
              const va_Iz = (va_h * va_b ** 3) / 12;
              const va_J = 0.21 * Math.pow(Math.min(va_b, va_h), 3) * Math.max(va_b, va_h);

              const byY = new Map<string, any[]>();
              const byX = new Map<string, any[]>();
              for (const z of zapatasD as any[]) {
                const ky = z.y.toFixed(4), kx = z.x.toFixed(4);
                if (!byY.has(ky)) byY.set(ky, []);
                if (!byX.has(kx)) byX.set(kx, []);
                byY.get(ky)!.push(z); byX.get(kx)!.push(z);
              }
              const addViga = (a: any, b: any) => {
                if (a._nFootCol === undefined || b._nFootCol === undefined) return;
                if (a._nFootCol === b._nFootCol) return;  // frame degenerado
                const eIdx = E2.length;
                E2.push([a._nFootCol, b._nFootCol] as Element);
                elasticities2.set(eIdx, Ec);
                shearModuli2.set(eIdx, Gc);
                poissons2.set(eIdx, nu_c);
                densities2.set(eIdx, rho_c);
                areas2.set(eIdx, va_A);
                Iy2.set(eIdx, va_Iy);
                Iz2.set(eIdx, va_Iz);
                J2.set(eIdx, va_J);
              };
              for (const row of byY.values()) {
                row.sort((a: any, b: any) => a.x - b.x);
                for (let i = 0; i < row.length - 1; i++) addViga(row[i], row[i+1]);
              }
              for (const col of byX.values()) {
                col.sort((a: any, b: any) => a.y - b.y);
                for (let i = 0; i < col.length - 1; i++) addViga(col[i], col[i+1]);
              }
            }

            // ── Visualización: columna EXTRUIDA z=0 → z=-Hf (no línea) ──
            // Box de tamaño colSize×colSize×Hf que muestra que el filo de la
            // columna queda DENTRO de la zapata por la cantidad volExt. La
            // cadena (viga de amarre) se conecta al EXTREMO INFERIOR de esta
            // columna — al nodo del shell donde aplicamos la carga.
            const THREE = await import("three");
            const matCol = new THREE.MeshStandardMaterial({
              color: 0x808080, transparent: true, opacity: 0.7,
              roughness: 0.6, side: THREE.DoubleSide,
            });
            const matColEdge = new THREE.LineBasicMaterial({ color: 0x000000 });
            const colObjs: any[] = [];
            for (const z of zapatasD as any[]) {
              const pedGeo = new THREE.BoxGeometry(colSize, colSize, Hf);
              const pedMesh = new THREE.Mesh(pedGeo, matCol.clone());
              pedMesh.position.set(z.x, z.y, -Hf / 2);
              colObjs.push(pedMesh);
              const pedEdges = new THREE.LineSegments(new THREE.EdgesGeometry(pedGeo), matColEdge);
              pedEdges.position.copy(pedMesh.position);
              colObjs.push(pedEdges);
            }

            // Reemplazar states + correr análisis
            states.nodes.val = N2;
            states.elements.val = E2;
            states.nodeInputs.val = { supports: supports2, loads: loads2 };
            states.elementInputs.val = {
              elasticities: elasticities2, shearModuli: shearModuli2,
              poissonsRatios: poissons2, densities: densities2,
              areas: areas2, momentsOfInertiaY: Iy2, momentsOfInertiaZ: Iz2,
              torsionalConstants: J2, thicknesses: thicknesses2,
            };
            states.objects3D.val = colObjs;
            try {
              const dout = deform(N2, E2, states.nodeInputs.val, states.elementInputs.val, springsList2);
              states.deformOutputs.val = dout;
              const aout = analyze(N2, E2, states.elementInputs.val, dout);
              // Override colormap range para pressure (hasta -q_adm)
              const q_adm_kPa = q_adm * 9.80665;  // tonf/m² → kN/m² ≈ kPa
              if (aout.colorMapRanges == null) aout.colorMapRanges = {};
              aout.colorMapRanges.pressure = [0, -q_adm_kPa];
              states.analyzeOutputs.val = aout;
              // ── Activar visualización: shell results = pressure + deformed
              // shape + elementos visibles. CRÍTICO: settings son van states,
              // hay que mutar `.val` (no overwrite la propiedad como string).
              const sFEM = (viewerElm as any).__settings;
              if (sFEM) {
                // Re-encender elementos/nodos (los apagó el botón visual)
                if (sFEM.elements?.val !== undefined) sFEM.elements.val = true;
                if (sFEM.nodes?.val !== undefined) sFEM.nodes.val = true;
                // Apagar columnas/vigas de superestructura (no aplica al FEM cim)
                if (sFEM.elemColumns?.val !== undefined) sFEM.elemColumns.val = false;
                if (sFEM.elemBeams?.val !== undefined) sFEM.elemBeams.val = false;
                if (sFEM.sections?.val !== undefined) sFEM.sections.val = false;
                if (sFEM.secColumns?.val !== undefined) sFEM.secColumns.val = false;
                if (sFEM.secBeams?.val !== undefined) sFEM.secBeams.val = false;
                if (sFEM.secFloor?.val !== undefined) sFEM.secFloor.val = false;
                // Encender supports/loads para ver Winkler + cargas P,Mx,My
                if (sFEM.supports?.val !== undefined) sFEM.supports.val = true;
                if (sFEM.loads?.val !== undefined) sFEM.loads.val = true;
                // Shell results = pressure (con override colorMapRanges)
                if (sFEM.shellResults?.val !== undefined) sFEM.shellResults.val = "pressure";
                if (sFEM.deformedShape?.val !== undefined) sFEM.deformedShape.val = true;
                if (sFEM.custom3D?.val !== undefined) sFEM.custom3D.val = true;
              } else {
                console.warn("[FEM Cim] viewerElm.__settings no disponible — shell results no auto-activado");
              }
              // ── Desfiltrar el dropdown shell results: el ejemplo activo
              // (edificio-muros, edificio-hormigón, etc.) puede excluir
              // "pressure" via availableShellResults. Re-aplicar el filtro
              // INCLUYENDO los campos relevantes para FEM cimentación.
              const cimAllowed = ["pressure", "displacementZ", "displacementX", "displacementY",
                                  "bendingXX", "bendingYY", "bendingXY", "vonMises",
                                  "shearX", "shearY"];
              try { filterShellResultOptions(cimAllowed); } catch (e) { console.warn(e); }
              // Auto-escalar deformada para que sea visible
              try { autoScaleDeformedShape(); } catch {}
              alert(`✅ Análisis FEM cimentación completo:\n• ${zapatasD.length} zapatas Q4 ShellThick\n• ${E2.length} elementos shell, ${N2.length} nodos\n• Winkler ks=${ks} kN/m³ + anclaje rot esquina\n• Cargas P,Mx,My aplicadas\n\nViewer: shell results = pressure (rango 0 a -${q_adm_kPa.toFixed(0)} kPa)\nActivá Deformed shape para ver la deformación.`);
              console.log(`[FEM Cim] ${zapatasD.length} zapatas, ${E2.length} Q4, ${N2.length} nodos, ${springsList2.length} springs`);
            } catch (e: any) {
              alert(`❌ Error en análisis FEM: ${e.message}`);
              console.error(e);
            }
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
            const p = currentParams as any;
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
            // Construir items con offsets correctos para esquinera/lindero.
            // Insertion point CSI/ETABS: cara de columna FLUSH con borde
            // de zapata en lados constrained (col.face = zapata.edge).
            const halfColE = colSize / 2;
            const zapatas = zapatasD.map(z => {
              let offX = 0, offY = 0;
              if (z.tipo === "esquinera") {
                offX = (z.x < xMax/2) ? -(z.Lz/2 - halfColE) : (z.Lz/2 - halfColE);
                offY = (z.y < yMax/2) ? -(z.Bz/2 - halfColE) : (z.Bz/2 - halfColE);
              } else if (z.tipo === "lindero") {
                if (Math.abs(z.x) < 1e-3 || Math.abs(z.x - xMax) < 1e-3) {
                  offX = (z.x < xMax/2) ? -(z.Lz/2 - halfColE) : (z.Lz/2 - halfColE);
                } else if (Math.abs(z.y) < 1e-3 || Math.abs(z.y - yMax) < 1e-3) {
                  offY = (z.y < yMax/2) ? -(z.Bz/2 - halfColE) : (z.Bz/2 - halfColE);
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

          // ── Botón: Importar F2K cimentación COMPLETA ──
          fCim.addButton({ title: "📥 Importar F2K cimentación COMPLETA" }).on("click", async () => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".f2k,.txt";
            input.onchange = async (ev: any) => {
              const file = ev.target.files?.[0];
              if (!file) return;
              try {
                const text = await file.text();
                const { parseEdificioCimentacionF2k } = await import("../shared/f2kCimentacionImporter");
                const data = parseEdificioCimentacionF2k(text);
                const w = data._warnings ?? [];
                const wMsg = w.length ? `\n⚠ ${w.join("\n⚠ ")}` : "";
                (window as any).__hekatanImportedCim = data;
                console.log("[F2K Cim Importada]", data);
                alert(`✅ F2K importado:\n• ${data.zapatas.length} zapatas\n• ${data.vigasAmarre?.length ?? 0} vigas de amarre\n• ks = ${Math.round(data.ks_kNm3)} kN/m³\n• Z = ${data.Z?.toFixed(2)} m\n\nDatos en window.__hekatanImportedCim. Para re-exportar el mismo modelo: window.__hekatanDownloadF2kCim(window.__hekatanImportedCim).${wMsg}`);
              } catch (e: any) {
                alert(`❌ Error al importar: ${e.message}`);
                console.error(e);
              }
            };
            input.click();
          });
        }
      } catch (e) {
        console.warn("[Workspace] Toggle FEM Cim setup falló:", e);
      }
      // REGLA: F2K (SAFE) solo se exporta cuando el edificio tiene cálculo de
      // cimentación (modoCimentacion). En superestructuras sin modo cimentación
      // solo se ofrece E2K (ETABS) y S2K (SAP) — más abajo.
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

  // ── Sub-folder "🌐 Sistema (preset)" — un click setea todo coherente ──
  const fPreset = fUnits.addFolder({ title: "🌐 Sistema (preset)", expanded: true });
  const presetProxy = { sistema: detectCurrentPreset() };
  fPreset.addBinding(presetProxy, "sistema", {
    label: "Preset",
    options: {
      "Metric MKS (tonf, m, mm, kgf/cm²)": "Metric MKS",
      "Metric SI (kN, m, mm, MPa)": "Metric SI",
      "U.S. Imperial (kip, ft, in, ksi)": "U.S. Imperial",
      "Custom (granular)": "Custom",
    },
  }).on("change", (e: any) => {
    const name = e.value;
    if (name === "Custom") return;  // no aplica nada, el user usa Display Units
    applyConsistentUnits(name);
    // Sync proxy con los nuevos valores
    unitsProxy.force = forceUnit.val;
    unitsProxy.disp = dispUnit.val;
    customProxy.stress = stressUnit.val;
    customProxy.subgrade = subgradeUnit.val;
    customProxy.stiffTrans = stiffTransUnit.val;
    customProxy.lengthSection = lengthSectionUnit.val;
    pane.refresh();
    buildParamsPane();
    rebuild();
  });

  // ── Sub-folder "📐 Display Units (custom)" — granular per-quantity ──
  const fCustom = fUnits.addFolder({ title: "📐 Display Units (granular)", expanded: false });
  const customProxy = {
    stress: stressUnit.val,
    subgrade: subgradeUnit.val,
    stiffTrans: stiffTransUnit.val,
    lengthSection: lengthSectionUnit.val,
  };
  fCustom.addBinding(customProxy, "stress", {
    label: "Stress (σ, vM, pressure)",
    options: { "kN/m²": "kN/m²", "kPa": "kPa", "MPa": "MPa", "GPa": "GPa",
               "kgf/cm²": "kgf/cm²", "tonf/m²": "tonf/m²", "psi": "psi",
               "ksi": "ksi", "kip/ft²": "kip/ft²" },
  }).on("change", (e: any) => {
    stressUnit.val = e.value;
    presetProxy.sistema = detectCurrentPreset();
    pane.refresh();
    rebuild();
  });
  fCustom.addBinding(customProxy, "subgrade", {
    label: "Subgrade modulus (ks)",
    options: { "kN/m³": "kN/m³", "tonf/m³": "tonf/m³", "kgf/cm³": "kgf/cm³",
               "kip/ft³": "kip/ft³", "pci": "pci" },
  }).on("change", (e: any) => {
    subgradeUnit.val = e.value;
    presetProxy.sistema = detectCurrentPreset();
    pane.refresh();
    rebuild();
  });
  fCustom.addBinding(customProxy, "stiffTrans", {
    label: "Stiffness trans (K spring)",
    options: { "kN/m": "kN/m", "tonf/m": "tonf/m", "kip/in": "kip/in",
               "kip/ft": "kip/ft", "N/mm": "N/mm" },
  }).on("change", (e: any) => {
    stiffTransUnit.val = e.value;
    presetProxy.sistema = detectCurrentPreset();
    pane.refresh();
    rebuild();
  });
  fCustom.addBinding(customProxy, "lengthSection", {
    label: "Length section (espesor, h, b)",
    options: { "mm": "mm", "cm": "cm", "m": "m", "in": "in", "ft": "ft" },
  }).on("change", (e: any) => {
    lengthSectionUnit.val = e.value;
    presetProxy.sistema = detectCurrentPreset();
    pane.refresh();
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
      // Registrar visibilidad dinamica si el param tiene hiddenIf
      if (p.hiddenIf) hiddenBindings.push({ binding: currentBinding, hiddenIf: p.hiddenIf });
      currentBinding.on("change", () => {
        if (currentExample?.onParamChange) {
          currentExample.onParamChange(key, currentParams);
          pane.refresh();
        }
        // Re-evaluar visibilidad de hiddenIf bindings (preset cambio puede ocultar/mostrar otros)
        applyHiddenBindings();
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

  // ── Folder "📖 Guía de pasos" — instrucciones del ejemplo para el usuario ──
  // Si el ejemplo define `guide`, mostramos los pasos numerados como labels
  // read-only en un folder. Expandido por default si es la primera visita
  // (flag en localStorage por example.id).
  if (currentExample.guide && currentExample.guide.length > 0) {
    const guideKey = `hk_guide_seen_${currentExample.id}`;
    const seen = localStorage.getItem(guideKey) === "1";
    const fGuide = pane.addFolder({ title: "📖 Guía de pasos", expanded: !seen });
    // Marcar como visto la primera vez que se renderiza
    if (!seen) localStorage.setItem(guideKey, "1");
    // Renderizar pasos como divs estilizados (Tweakpane no tiene texto multilinea
    // built-in, usamos elementos DOM directos).
    const guideContainer = document.createElement("div");
    guideContainer.style.cssText = "padding:6px 8px;font-size:11px;color:#cbd5e1;line-height:1.5;font-family:system-ui,sans-serif;";
    currentExample.guide.forEach((step, i) => {
      const stepDiv = document.createElement("div");
      stepDiv.style.cssText = "padding:3px 0;border-bottom:1px solid #334155;";
      const num = document.createElement("span");
      num.style.cssText = "display:inline-block;min-width:18px;height:18px;line-height:18px;text-align:center;background:#0ea5e9;color:white;border-radius:9px;font-size:10px;font-weight:bold;margin-right:6px;";
      num.textContent = String(i + 1);
      const text = document.createElement("span");
      text.textContent = step;
      stepDiv.appendChild(num);
      stepDiv.appendChild(text);
      guideContainer.appendChild(stepDiv);
    });
    fGuide.element.appendChild(guideContainer);
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
  // Aplicar visibilidad dinamica de bindings (hiddenIf) en el render inicial.
  // Sin esto, todos los params hiddenIf se muestran al cargar (solo se ocultan
  // tras el primer cambio de slider).
  applyHiddenBindings();
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
  // Drawing nativo de hekatan-ui (awatif). Mouse handler + raycaster + snap
  // a grid + plane indicator funcionan automáticamente. Solo activo en cad-draw.
  drawingObj: {
    points: drawingPoints,
    polylines: drawingPolylines,
    gridTarget: drawingGridTarget,
  },
});

// ── Sincronizar drawingPoints/polylines a window.__hekatanCliScript ──
// Cada vez que el usuario dibuja un punto o polyline (con mouse en el
// viewer), se regenera el script CLI con sintaxis awatif (bloques
// nodes/elements). Eso hace que el cad-draw y cli-modeler queden
// sincronizados sin código mouse handler custom de mi parte.
van.derive(() => {
  const pts = drawingPoints.val;
  const lines = drawingPolylines.val;
  if (pts.length === 0 && lines.every(l => l.length === 0)) return;
  const out: string[] = [
    "# Modelo dibujado con mouse (awatif Drawing)",
    "",
    "nodes",
  ];
  for (const p of pts) out.push(`${p[0]}  ${p[1]}  ${p[2]}`);
  // Polylines → frames consecutivos (cada 2 puntos consecutivos = 1 frame)
  const frames: [number, number][] = [];
  for (const ply of lines) {
    for (let i = 0; i < ply.length - 1; i++) frames.push([ply[i], ply[i+1]]);
  }
  if (frames.length > 0) {
    out.push("", "elements");
    for (const [i, j] of frames) out.push(`${i} ${j}`);
  }
  (window as any).__hekatanCliScript = out.join("\n");
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
