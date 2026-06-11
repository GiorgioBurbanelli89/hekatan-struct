/**
 * Panel CAD (Tweakpane) — herramientas de dibujo, OSnap, planos de trabajo.
 *
 * ANTES: este código vivía en `examples/src/workspace/main.ts` (líneas
 * 1153–1448). Era inviable porque cada ejemplo (zapata, edificio, pórtico,
 * etc.) que cargaba el workspace recibía la misma UI hardcodeada en main.ts.
 *
 * AHORA: vive en hekatan-ui — cualquier consumidor del viewer
 * (workspace, ejemplo standalone, otra app) puede invocar `addCadPanel(...)`
 * y recibir el folder completo. La UI es agnóstica del ejemplo.
 *
 * Dependencias inyectadas (no podemos hardcodearlas porque viven en
 * el caller):
 *   - parentPane: Tweakpane Pane donde insertar el folder "✏ Herramientas CAD"
 *   - viewerElm:  para leer/mutar __settings.gridSize del viewer
 *   - drawing.*:  van.State<…> con puntos/polylines/areas/auxLines/gridTarget
 *   - hooks.setView / splitState / refreshSplit: cámara + vista doble
 *   - hooks.onRebuild: opcional, se llama cuando hay que recomputar el modelo
 */
import * as THREE from "three";
import type { State } from "vanjs-core";
import {
  buildAxisGridMesh, buildLevelMesh,
  nextAxisLabel, nextLevelLabel,
  type AxisGrid, type Level,
} from "./axisLevels";
import {
  PROVIDERS, getProvider, aiStorage, blobToBase64,
  listOllamaModels, isOllamaRunning, HEKATAN_SYSTEM_PROMPT,
  type AIImage,
} from "./aiAssistant";

export type GridTargetVal = {
  position: [number, number, number];
  rotation: [number, number, number];
};

export interface CadPanelOptions {
  /** Tweakpane Pane (o Folder) padre donde se injertará el folder CAD. */
  parentPane: any;
  /** Si el folder CAD arranca expandido. Default true para new-blank/cad-draw. */
  expanded?: boolean;
  /** Elemento del viewer (con `__settings`) — se necesita para mutar gridSize. */
  viewerElm: HTMLElement;
  /** Van states del modelo de dibujo (puntos + polilíneas + áreas + aux). */
  drawing: {
    points: State<number[][]>;
    polylines: State<number[][]>;
    areas: State<number[]>;
    auxLines: State<number[][]>;
    gridTarget: State<GridTargetVal>;
  };
  /** Hooks al workspace para vista/cámara/rebuild. */
  hooks: {
    setView: (k: "iso" | "plan" | "elevX" | "elevY") => void;
    splitState: { enabled: boolean; secondary: number };
    refreshSplit: () => void;
    onRebuild?: () => void;
  };
}

export function addCadPanel(opts: CadPanelOptions): { fCad: any } {
  const { parentPane, expanded = true, viewerElm, drawing, hooks } = opts;
  const fCad = parentPane.addFolder({ title: "✏ Herramientas CAD", expanded });

  const proxyTool = { v: "node" };
  const toolInstructions: Record<string, string> = {
    select:   "🖱 Seleccionar — click sobre un nodo/elemento para seleccionarlo",
    node:     "● Nodo — click crea nodo. Tipear: 5,3,2 (abs) | @1,0,0 (rel) | Enter",
    line:     "／ Línea — click 2 puntos. Tipear: 5 (DDE) | 5,3,2 (abs) | @5,3,2 (rel) | @5<45 (polar) | @5<45<30 (esférico) | Enter",
    polyline: "⌒ Polilínea — click sucesivos. Tipear: 5 | 5,3 | @5,3 | @5<45. Right-click para terminar.",
    area:     "▭ Área — 4 clicks (CCW). Tipear: x,y o @dx,dy o @L<ang. Enter para confirmar coord.",
    col:      "▌ Columna 3D — tipeá altura (ej: 3) + Enter, después 1 click en la base.",
    wall:     "▥ Pared Q4 3D — tipeá altura + Enter, después 2 clicks. Crea shell Q4 vertical.",
    circle:   "○ Círculo — click 1=centro, click 2=radio. Tipear radio: 5 + Enter (en vez del 2do click).",
    arc:      "⌒ Arco (3 ptos) — click 1=inicio, 2=medio, 3=fin.",
    rect:     "▭ Rectángulo — click 2 esquinas. Tipear @5,3 para esquina opuesta relativa.",
    aux:      "┊ Línea auxiliar — referencia visual (no genera FEM). Mismo input que línea.",
    auxp:     "✦ Punto auxiliar — 1 click crea un punto cyan (no genera nodo FEM, sirve para OSnap).",
    extend:   "↗ Prolongar — click una línea, click en la dirección a extender.",
    chaflan:  "▱ Losa con chaflanes — click 2 esquinas. Radio en slider 'Chaflán r'.",
    "delete": "🗑 Borrar — hover sobre línea/área (se resalta en rojo) + click para eliminar.",
    select:   "🖱 Seleccionar — click sobre un elemento. Sin tool activo no se crean nodos.",
  };
  const setActiveTool = (tool: string) => {
    proxyTool.v = tool;
    try { (window as any).__hekatanCadState?.setTool?.(tool); } catch {}
    try { (window as any).__hekatanCadResetPending?.(); } catch {}
    // Window/crossing rect-drag selection: opt-in. Sólo activa si el
    // usuario hace click EXPLÍCITO en "🖱 Seleccionar". El estado
    // default `tool: "select"` (de cadDrawTypes.emptyState) NO la
    // activa — sino cualquier touch-drag en móvil dibuja un rectángulo
    // verde en lugar de orbitar la cámara.
    (window as any).__hekatanRectSelectExplicit = (tool === "select");
    const instr = toolInstructions[tool] ?? `Tool ${tool} activo`;
    const statusEl = document.getElementById("hk-cad-status");
    if (statusEl) {
      statusEl.textContent = instr;
      (window as any).__hekatanCadStatusText = instr;
      (window as any).__hekatanRefreshStatus?.();
    }
    console.log(`[CAD] Tool activo: ${tool} — ${instr}`);
  };
  fCad.addButton({ title: "🖱 Seleccionar" }).on("click", () => setActiveTool("select"));
  fCad.addButton({ title: "● Nodo" }).on("click", () => setActiveTool("node"));
  fCad.addButton({ title: "／ Línea (frame)" }).on("click", () => setActiveTool("line"));
  fCad.addButton({ title: "▦ Área 4-clics (shell Q4)" }).on("click", () => setActiveTool("area"));
  fCad.addButton({ title: "▭ Área rectangular (2 clics)" }).on("click", () => setActiveTool("rectarea"));
  fCad.addButton({ title: "⬡ Área libre (polígono → malla)" }).on("click", () => setActiveTool("polyarea"));
  fCad.addButton({ title: "◣ Plano inclinado (3 puntos)" }).on("click", () => setActiveTool("plane3"));
  fCad.addButton({ title: "⬛ Plano XY (reset horizontal)" }).on("click", () => (window as any).__hekatanResetPlaneXY?.());
  fCad.addButton({ title: "▌ Columna 3D (1 click + altura)" }).on("click", () => setActiveTool("col"));
  fCad.addButton({ title: "▥ Pared Q4 3D (2 clicks + altura)" }).on("click", () => setActiveTool("wall"));
  fCad.addButton({ title: "⌒ Polilínea" }).on("click", () => setActiveTool("polyline"));
  fCad.addButton({ title: "▭ Rectángulo" }).on("click", () => setActiveTool("rect"));
  fCad.addButton({ title: "○ Círculo" }).on("click", () => setActiveTool("circle"));
  fCad.addButton({ title: "⌒ Arco (3 ptos)" }).on("click", () => setActiveTool("arc"));
  fCad.addButton({ title: "┊ Línea auxiliar" }).on("click", () => setActiveTool("aux"));
  fCad.addButton({ title: "✦ Punto auxiliar" }).on("click", () => setActiveTool("auxp"));
  fCad.addButton({ title: "↗ Prolongar línea" }).on("click", () => setActiveTool("extend"));
  fCad.addButton({ title: "▱ Losa con chaflanes (rect + arcos)" }).on("click", () => setActiveTool("chaflan"));
  fCad.addButton({ title: "🗑 Borrar (hover + click)" }).on("click", () => setActiveTool("delete"));

  // ── Modos de dibujo (ORTO/POLAR/segs) ──
  const fModes = fCad.addFolder({ title: "🎯 Modos de dibujo", expanded: true });
  const proxyModes = { ortho: false, polar: false, segs: 12 };
  fModes.addBinding(proxyModes, "ortho", { label: "ORTO (90°)" }).on("change", (ev: any) => {
    (window as any).__hekatanOrtho = ev.value;
  });
  fModes.addBinding(proxyModes, "polar", { label: "POLAR (45°)" }).on("change", (ev: any) => {
    (window as any).__hekatanPolar = ev.value;
  });
  fModes.addBinding(proxyModes, "segs", { min: 4, max: 64, step: 1, label: "Segmentos arc/círc" }).on("change", (ev: any) => {
    (window as any).__hekatanArcSegs = ev.value;
  });
  const proxyChaflan = { r: 1.0 };
  fModes.addBinding(proxyChaflan, "r", { min: 0.1, max: 5, step: 0.1, label: "Chaflán r (m)" }).on("change", (ev: any) => {
    (window as any).__hekatanChaflanR = ev.value;
  });
  (window as any).__hekatanChaflanR = 1.0;

  // ── Object Snap (OSNAP) — estilo AutoCAD ──
  const fOsnap = fCad.addFolder({ title: "🎯 Object Snap (OSNAP)", expanded: false });
  const osnapState = (window as any).__hekatanOsnap ?? {
    end: true, mid: true, node: true, cen: true,
    per: false, nea: false, int: false,
  };
  (window as any).__hekatanOsnap = osnapState;
  fOsnap.addBinding(osnapState, "end",  { label: "🔴 Endpoint" });
  fOsnap.addBinding(osnapState, "mid",  { label: "🟡 Midpoint" });
  fOsnap.addBinding(osnapState, "node", { label: "🔵 Node" });
  fOsnap.addBinding(osnapState, "cen",  { label: "🟢 Center" });
  fOsnap.addBinding(osnapState, "per",  { label: "🟣 Perpendicular" });
  fOsnap.addBinding(osnapState, "nea",  { label: "🌸 Nearest" });
  fOsnap.addBinding(osnapState, "int",  { label: "🟠 Intersection" });

  // ── Plano de trabajo + vistas + planos de referencia ──
  const fPlane = fCad.addFolder({ title: "📐 Plano de trabajo", expanded: true });
  const proxyPlane = { workZ: 0 };
  const setPlane = (kind: "xy" | "xz" | "yz", z?: number, syncCam = true) => {
    const st = (window as any).__hekatanCadState?.get?.();
    if (st) st.workPlane = kind;
    const wz = z ?? proxyPlane.workZ;
    if (kind === "xy") {
      drawing.gridTarget.val = { position: [0, 0, wz], rotation: [Math.PI/2, 0, 0] };
    } else if (kind === "xz") {
      drawing.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] };
    } else {
      drawing.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, Math.PI/2] };
    }
    if (syncCam) {
      if (kind === "xy") hooks.setView("plan");
      else if (kind === "xz") hooks.setView("elevX");
      else hooks.setView("elevY");
    }
  };
  fPlane.addButton({ title: "Plano XY (planta)" }).on("click", () => setPlane("xy"));
  fPlane.addButton({ title: "Plano XZ (elevación frontal)" }).on("click", () => setPlane("xz"));
  fPlane.addButton({ title: "Plano YZ (elevación lateral)" }).on("click", () => setPlane("yz"));
  fPlane.addButton({ title: "🧊 Vista isométrica (3D)" }).on("click", () => hooks.setView("iso"));
  fPlane.addButton({ title: "🔀 Vista doble (planta + iso)" }).on("click", () => {
    hooks.splitState.enabled = !hooks.splitState.enabled;
    if (hooks.splitState.enabled) {
      hooks.splitState.secondary = 0;
      setPlane("xy");
    }
    hooks.refreshSplit();
  });

  // Planos de referencia horizontales (Z=0,3,6,9,12)
  let refPlanesVisible = false;
  fPlane.addButton({ title: "📐 Mostrar/ocultar planos de ref. (Z=0,3,6,9,12)" }).on("click", () => {
    refPlanesVisible = !refPlanesVisible;
    if (refPlanesVisible) (window as any).__hekatanShowRefPlanes?.([0, 3, 6, 9, 12], 20, 0, 0);
    else (window as any).__hekatanHideRefPlanes?.();
  });

  // Planos ortogonales del último punto (XY/XZ/YZ rubber band guide)
  (window as any).__hekatanShowOrthoPlanes = true;
  let orthoPlanesVisible = true;
  fPlane.addButton({ title: "▦ Planos ref. ortogonales (XY/XZ/YZ del último pto)" }).on("click", () => {
    orthoPlanesVisible = !orthoPlanesVisible;
    const fn = (window as any).__hekatanSetOrthoPlanes;
    if (typeof fn === "function") fn(orthoPlanesVisible);
    else (window as any).__hekatanShowOrthoPlanes = orthoPlanesVisible;
    (window as any).__hekatanRefreshStatus?.();
  });

  // Tamaños visuales (orthoExt + gridSize del viewer)
  const proxySizes = { orthoExt: 8, gridSize: 10 };
  fPlane.addBinding(proxySizes, "orthoExt", {
    // min 0.1 m (antes 1) para permitir trabajar en piezas chicas (zapatas,
    // conexiones, columnas finas). step 0.1 da resolución fina en el rango bajo.
    min: 0.1, max: 50, step: 0.1, label: "Tamaño área planos ref. (m)",
  }).on("change", (ev: any) => {
    const fn = (window as any).__hekatanSetOrthoExt;
    if (typeof fn === "function") fn(ev.value);
    else (window as any).__hekatanOrthoExt = ev.value;
  });
  fPlane.addBinding(proxySizes, "gridSize", {
    min: 1, max: 100, step: 1, label: "Dimensión grid (m)",
  }).on("change", (ev: any) => {
    const s = (viewerElm as any).__settings;
    if (s?.gridSize) s.gridSize.val = ev.value;
  });

  // Toggle global de grid snap
  (window as any).__hekatanSnapEnabled = true;
  const proxySnapToggle = { snapEnabled: true };
  const snapToggleBinding = fCad.addBinding(proxySnapToggle, "snapEnabled", { label: "🧲 Grid snap (F9)" }).on("change", (ev: any) => {
    (window as any).__hekatanSnapEnabled = !!ev.value;
  });
  // ── Atajo F9 = togglear grid snap (estándar AutoCAD) ──
  // Con snap ON el cursor se PEGA al paso de grilla (0.5m) → no podés poner
  // nodos entre líneas, y a veces el punto cae sobre un nodo existente y el
  // segmento se vuelve degenerado ("no se puede dibujar"). F9 lo apaga/enciende
  // al vuelo, con cartel en pantalla. OSnap (endpoint/etc.) sigue funcionando.
  (window as any).__hekatanToggleSnap = () => {
    const next = !((window as any).__hekatanSnapEnabled !== false);
    (window as any).__hekatanSnapEnabled = next;
    proxySnapToggle.snapEnabled = next;
    try { snapToggleBinding.refresh(); } catch {}
    let toast = document.getElementById("hk-snap-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "hk-snap-toast";
      toast.style.cssText = "position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:99999;padding:8px 18px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)";
      document.body.appendChild(toast);
    }
    toast.textContent = next ? "🧲 Grid snap ON — el cursor se pega a la grilla" : "🆓 Grid snap OFF — dibujo libre (cualquier punto)";
    toast.style.background = next ? "rgba(37,99,235,0.95)" : "rgba(16,185,129,0.95)";
    toast.style.opacity = "1";
    const w = window as any;
    clearTimeout(w.__hekatanSnapToastT);
    w.__hekatanSnapToastT = setTimeout(() => { if (toast) toast.style.opacity = "0"; }, 1600);
  };
  if (!(window as any).__hekatanF9Bound) {
    (window as any).__hekatanF9Bound = true;
    window.addEventListener("keydown", (e) => {
      if (e.key === "F9") { e.preventDefault(); (window as any).__hekatanToggleSnap?.(); }
    }, true);
  }
  // Selector discreto de paso de snap
  const proxySnapStep = { step: 0.5 };
  fCad.addBinding(proxySnapStep, "step", {
    label: "Paso snap (m)",
    options: {
      "0.01 m (mm)":  0.01,
      "0.05 m (5cm)": 0.05,
      "0.10 m":       0.1,
      "0.20 m":       0.2,
      "0.25 m":       0.25,
      "0.50 m":       0.5,
      "1.00 m":       1.0,
      "2.00 m":       2.0,
      "5.00 m":       5.0,
    },
  }).on("change", (ev: any) => {
    const v = Number(ev.value);
    (window as any).__hekatanSnap2D = v;
    const st = (window as any).__hekatanCadState?.get?.();
    if (st) st.snap = v;
  });
  // Snap fino + 3D + cota Z
  const proxyCAD = { snap2D: 0.5, snap3D: 0.25, workZ: 0 };
  fCad.addBinding(proxyCAD, "snap2D", { min: 0, max: 5, step: 0.05, label: "Snap 2D fino (m)" }).on("change", (ev: any) => {
    const st = (window as any).__hekatanCadState?.get?.();
    if (st) st.snap = ev.value;
    (window as any).__hekatanSnap2D = ev.value;
  });
  fCad.addBinding(proxyCAD, "snap3D", { min: 0, max: 5, step: 0.05, label: "Snap 3D (m)" }).on("change", (ev: any) => {
    (window as any).__hekatanSnap3D = ev.value;
  });
  fCad.addBinding(proxyPlane, "workZ", { min: -10, max: 50, step: 0.1, label: "Cota Z (m)" }).on("change", (ev: any) => {
    const st = (window as any).__hekatanCadState?.get?.();
    if (st) st.workZ = ev.value;
    const curPlane = ((window as any).__hekatanCadState?.get?.())?.workPlane ?? "xz";
    if (curPlane === "xy") setPlane("xy", ev.value, false);
    hooks.onRebuild?.();
  });

  // Acciones
  const fAcc = fCad.addFolder({ title: "🛠 Acciones", expanded: true });
  fAcc.addButton({ title: "⏹ Finalizar dibujo (Esc)" }).on("click", () => {
    (window as any).__hekatanFinalizeDraw?.();
    (window as any).__hekatanCadMouse?.cancel?.();
  });
  fAcc.addButton({ title: "🗑 Limpiar todo" }).on("click", () => {
    (window as any).__hekatanCadState?.reset?.();
    drawing.points.val = [];
    drawing.polylines.val = [[]];
    drawing.areas.val = [];
    drawing.auxLines.val = [];
    hooks.onRebuild?.();
  });
  fAcc.addButton({ title: "📋 Copiar comandos a CLI" }).on("click", () => {
    const script = (window as any).__hekatanCliScript ?? "";
    navigator.clipboard?.writeText(script);
    alert("Comandos copiados al portapapeles. Pega en cli-modeler para editar/correr el FEM.");
  });

  // Plantas de pisos (Z=0,3,6,9,12 — atajos de cota Z común)
  const fFloors = fCad.addFolder({ title: "🏢 Plantas de pisos", expanded: false });
  [0, 3, 6, 9, 12].forEach(z => {
    fFloors.addButton({ title: `Piso a Z=${z}m` }).on("click", () => {
      drawing.gridTarget.val = { position: [0, 0, z], rotation: [Math.PI/2, 0, 0] };
      const cs = (window as any).__hekatanCadState?.get?.();
      if (cs) cs.workZ = z;
    });
  });

  // ── Ejes y Niveles estilo Revit ──
  // Grupo en la escena que contiene todos los meshes de ejes + niveles.
  // Reactivo: cuando se agregan/borran items, se re-renderiza el grupo.
  // El acceso a `scene` se hace vía el ctx del viewer.
  const fAxis = fCad.addFolder({ title: "📍 Ejes y Niveles (Revit)", expanded: false });
  const axisList: AxisGrid[] = [];
  const levelList: Level[] = [];
  (window as any).__hekatanAxisGrids = axisList;
  (window as any).__hekatanLevels = levelList;
  // Buscar la escena vía __ctx del viewerElm
  const getScene = (): THREE.Scene | null => (viewerElm as any).__ctx?.scene ?? null;
  const getRender = (): (() => void) | null => (viewerElm as any).__ctx?.render ?? null;
  const getCamera = (): THREE.Camera | null => (viewerElm as any).__ctx?.camera ?? null;
  const axisGroup = new THREE.Group();
  axisGroup.name = "axis-grids";
  const levelGroup = new THREE.Group();
  levelGroup.name = "levels";
  // ── Helper: escalar burbujas/labels según distancia de cámara ──
  // Las burbujas de ejes y los rectángulos de niveles son Sprites con
  // scale en world units. Sin re-escalar, en zoom-in se ven enormes
  // (cubrían el viewport en el demo). Ahora ajustamos su scale a una
  // fracción de la distancia cámara→sprite para mantener tamaño aparente
  // constante en pantalla (~40px). Se invoca al render y al cambiar cámara.
  const _axisBaseScale = 0.025;  // factor para burbuja circular
  const _levelBaseScaleW = 0.083;  // factor para etiqueta rectangular (W)
  const _levelBaseScaleH = 0.021;  // ídem (H)
  const updateAxisLabelScales = () => {
    const cam = getCamera();
    if (!cam) return;
    axisGroup.traverse((o: any) => {
      if (!o.userData?.isAxisLabel) return;
      const dist = cam.position.distanceTo(o.position);
      const s = Math.max(0.1, dist * _axisBaseScale);
      o.scale.set(s, s, 1);
    });
    levelGroup.traverse((o: any) => {
      if (!o.userData?.isLevelLabel) return;
      const dist = cam.position.distanceTo(o.position);
      o.scale.set(dist * _levelBaseScaleW, dist * _levelBaseScaleH, 1);
    });
  };
  // Hookear al cambio de cámara (orbit/zoom) — controls del viewer.
  const ctrl = (viewerElm as any).__ctx?.controls;
  if (ctrl?.addEventListener) {
    ctrl.addEventListener("change", updateAxisLabelScales);
  }
  // Agregar a la escena cuando esté disponible
  const ensureGroupsInScene = () => {
    const scene = getScene();
    if (!scene) return false;
    if (!scene.children.includes(axisGroup)) scene.add(axisGroup);
    if (!scene.children.includes(levelGroup)) scene.add(levelGroup);
    return true;
  };
  const refreshAxisRender = () => {
    if (!ensureGroupsInScene()) return;
    while (axisGroup.children.length) {
      const c = axisGroup.children.pop()!;
      (c as any).traverse?.((o: any) => {
        o.geometry?.dispose?.(); o.material?.dispose?.();
        o.material?.map?.dispose?.();
      });
    }
    for (const ax of axisList) axisGroup.add(buildAxisGridMesh(ax));
    updateAxisLabelScales();  // tamaño constante en pantalla
    getRender()?.();
  };
  const refreshLevelRender = () => {
    if (!ensureGroupsInScene()) return;
    while (levelGroup.children.length) {
      const c = levelGroup.children.pop()!;
      (c as any).traverse?.((o: any) => {
        o.geometry?.dispose?.(); o.material?.dispose?.();
        o.material?.map?.dispose?.();
      });
    }
    for (const lv of levelList) levelGroup.add(buildLevelMesh(lv));
    updateAxisLabelScales();
    getRender()?.();
  };
  // ── Tools "axis" — activan modo dibujo de eje (2 clicks: inicio y fin) ──
  // axisLetter = numera con letras A,B,C... (típico para ejes verticales en
  // planta). axisNumber = numera con 1,2,3... (típico para ejes horizontales).
  // Estado: window.__hekatanAxisDraw guarda { mode, pendingStart } durante
  // el flujo. drawing.ts intercepta clicks cuando este flag está activo.
  (window as any).__hekatanAxisCommit = (start: number[], end: number[], useNum: boolean) => {
    let label: string;
    if (useNum) {
      const numAxes = axisList.filter(a => /^\d+$/.test(a.label));
      label = String(numAxes.length + 1);
    } else {
      const alphaAxes = axisList.filter(a => !/^\d+$/.test(a.label)).map(a => a.label);
      label = nextAxisLabel(alphaAxes);
    }
    axisList.push({
      label,
      start: [start[0], start[1], start[2]],
      end: [end[0], end[1], end[2]],
    });
    refreshAxisRender();
    // Resetear pendingStart para permitir dibujar otro eje sin desactivar tool
    const st = (window as any).__hekatanAxisDraw;
    if (st) st.pendingStart = null;
    return label;
  };
  fAxis.addButton({ title: "➕ Eje (letra A,B,C...)" }).on("click", () => {
    (window as any).__hekatanAxisDraw = { mode: "letter", pendingStart: null };
    try { (window as any).__hekatanCadState?.setTool?.("axis"); } catch {}
    const statusEl = document.getElementById("hk-cad-status");
    if (statusEl) statusEl.textContent = "📍 Eje (letra) — click 1=inicio, click 2=fin (con burbuja A/B/C...)";
  });
  fAxis.addButton({ title: "➕ Eje (número 1,2,3...)" }).on("click", () => {
    (window as any).__hekatanAxisDraw = { mode: "number", pendingStart: null };
    try { (window as any).__hekatanCadState?.setTool?.("axis"); } catch {}
    const statusEl = document.getElementById("hk-cad-status");
    if (statusEl) statusEl.textContent = "📍 Eje (número) — click 1=inicio, click 2=fin (con burbuja 1/2/3...)";
  });
  fAxis.addButton({ title: "🗑 Limpiar ejes" }).on("click", () => {
    axisList.length = 0;
    refreshAxisRender();
  });
  // Niveles — botones rápidos para Z=0/3/6/9/12 y un genérico desde anchor
  const proxyLevel = { z: 0 };
  fAxis.addBinding(proxyLevel, "z", { min: -10, max: 50, step: 0.1, label: "Cota nivel (m)" });
  fAxis.addButton({ title: "➕ Agregar nivel a la cota Z elegida" }).on("click", () => {
    const z = proxyLevel.z;
    const label = nextLevelLabel(levelList, z);
    levelList.push({ label, z });
    refreshLevelRender();
  });
  fAxis.addButton({ title: "🏢 Niveles típicos (0,3,6,9,12 m)" }).on("click", () => {
    [0, 3, 6, 9, 12].forEach(z => {
      const label = `N+${z.toFixed(2)}`;
      if (!levelList.some(l => l.z === z)) levelList.push({ label, z });
    });
    refreshLevelRender();
  });
  fAxis.addButton({ title: "🗑 Limpiar niveles" }).on("click", () => {
    levelList.length = 0;
    refreshLevelRender();
  });
  // Helpers expuestos al window para programmatic + debug
  (window as any).__hekatanRefreshAxes = refreshAxisRender;
  (window as any).__hekatanRefreshLevels = refreshLevelRender;
  // Render inicial (en caso de que el usuario haya cargado un modelo previo)
  setTimeout(() => { refreshAxisRender(); refreshLevelRender(); }, 200);

  // ── Acciones sobre la SELECCIÓN actual ──
  // El user selecciona items con click (en select mode) y después aplica
  // acciones acá: discretización de líneas, apoyos en nodos, etc.
  // La selección está en window.__hekatanSelection (Set<string>) con IDs
  // tipo "pt:N" / "seg:P:S" / "poly:P" / "aux:N".
  const fSel = fCad.addFolder({ title: "🎯 Acciones de selección", expanded: false });
  // Discretización de segmentos seleccionados
  const proxyMesh = { divisions: 4 };
  fSel.addBinding(proxyMesh, "divisions", { min: 2, max: 50, step: 1, label: "Divisiones" });
  fSel.addButton({ title: "✂ Mallar línea seleccionada (N divisiones)" }).on("click", () => {
    const sel = (window as any).__hekatanSelection as Set<string> | undefined;
    if (!sel || sel.size === 0) {
      alert("Seleccioná un segmento primero (click sobre la línea).");
      return;
    }
    const N = Math.max(2, Math.round(proxyMesh.divisions));
    const points = drawing.points;
    const polys = drawing.polylines;
    if (!points || !polys) return;
    const ptsArr = [...points.rawVal];
    const polysArr = polys.rawVal.map(p => [...p]);
    let count = 0;
    for (const id of sel) {
      const parts = id.split(":");
      if (parts[0] !== "seg") continue;
      const polyIdx = +parts[1], segIdx = +parts[2];
      const poly = polysArr[polyIdx];
      if (!poly) continue;
      const a = ptsArr[poly[segIdx]];
      const b = ptsArr[poly[segIdx + 1]];
      if (!a || !b) continue;
      // Generar N-1 puntos intermedios entre a y b
      const newIdxs: number[] = [];
      for (let i = 1; i < N; i++) {
        const t = i / N;
        const np: number[] = [
          a[0] + t * (b[0] - a[0]),
          a[1] + t * (b[1] - a[1]),
          a[2] + t * (b[2] - a[2]),
        ];
        ptsArr.push(np);
        newIdxs.push(ptsArr.length - 1);
      }
      // Insertar los nuevos índices entre poly[segIdx] y poly[segIdx+1]
      poly.splice(segIdx + 1, 0, ...newIdxs);
      count++;
    }
    if (count === 0) {
      alert("La selección no contiene segmentos. Click sobre líneas (no nodos).");
      return;
    }
    points.val = ptsArr;
    polys.val = polysArr;
    sel.clear();
    (window as any).__hekatanRefreshSelection?.();
    hooks.onRebuild?.();
  });
  // Apoyos / Boundary conditions sobre nodos seleccionados
  const proxyDOF = {
    Ux: true, Uy: true, Uz: true,
    Rx: false, Ry: false, Rz: false,
  };
  fSel.addBinding(proxyDOF, "Ux", { label: "DOF Ux (restringido)" });
  fSel.addBinding(proxyDOF, "Uy", { label: "DOF Uy (restringido)" });
  fSel.addBinding(proxyDOF, "Uz", { label: "DOF Uz (restringido)" });
  fSel.addBinding(proxyDOF, "Rx", { label: "DOF Rx (restringido)" });
  fSel.addBinding(proxyDOF, "Ry", { label: "DOF Ry (restringido)" });
  fSel.addBinding(proxyDOF, "Rz", { label: "DOF Rz (restringido)" });
  fSel.addButton({ title: "📌 Aplicar apoyo a nodos seleccionados" }).on("click", () => {
    const sel = (window as any).__hekatanSelection as Set<string> | undefined;
    if (!sel || sel.size === 0) {
      alert("Seleccioná un nodo primero (click sobre el punto).");
      return;
    }
    // Los supports se almacenan en window.__hekatanCadSupports como Map
    // {nodeIdx → [Ux,Uy,Uz,Rx,Ry,Rz]} (booleans). Los lee el ejemplo
    // newBlank.ts para construir nodeInputs.supports del FEM.
    const supports: Record<number, boolean[]> =
      (window as any).__hekatanCadSupports ?? {};
    const dof = [proxyDOF.Ux, proxyDOF.Uy, proxyDOF.Uz, proxyDOF.Rx, proxyDOF.Ry, proxyDOF.Rz];
    let count = 0;
    for (const id of sel) {
      const parts = id.split(":");
      if (parts[0] !== "pt") continue;
      const nodeIdx = +parts[1];
      supports[nodeIdx] = [...dof];
      count++;
    }
    (window as any).__hekatanCadSupports = supports;
    if (count === 0) {
      alert("La selección no contiene nodos. Click sobre los puntos primero.");
      return;
    }
    hooks.onRebuild?.();
    alert(`Aplicado apoyo [Ux=${dof[0]}, Uy=${dof[1]}, Uz=${dof[2]}, Rx=${dof[3]}, Ry=${dof[4]}, Rz=${dof[5]}] a ${count} nodo(s).`);
  });
  fSel.addButton({ title: "🔓 Liberar apoyos de nodos seleccionados" }).on("click", () => {
    const sel = (window as any).__hekatanSelection as Set<string> | undefined;
    if (!sel) return;
    const supports: Record<number, boolean[]> =
      (window as any).__hekatanCadSupports ?? {};
    let count = 0;
    for (const id of sel) {
      const parts = id.split(":");
      if (parts[0] !== "pt") continue;
      const nodeIdx = +parts[1];
      if (supports[nodeIdx]) { delete supports[nodeIdx]; count++; }
    }
    (window as any).__hekatanCadSupports = supports;
    hooks.onRebuild?.();
    if (count === 0) alert("Selección no contiene nodos con apoyo.");
  });
  fSel.addButton({ title: "🗑 Limpiar selección" }).on("click", () => {
    (window as any).__hekatanClearSelection?.();
  });

  // ── Extrusión: convierte la dimensión del item seleccionado al siguiente ──
  // node → frame: extruye un nodo en una dirección por una altura → línea
  // frame → area: extruye un segmento perpendicular por una altura → shell Q4
  // Default dir = +Z (vertical, típico para columnas/paredes en planta).
  const proxyExtr = { dirX: 0, dirY: 0, dirZ: 1, height: 3 };
  fSel.addBinding(proxyExtr, "height", { min: 0.1, max: 50, step: 0.1, label: "Altura extrusión (m)" });
  fSel.addBinding(proxyExtr, "dirX", { min: -1, max: 1, step: 1, label: "Dir X" });
  fSel.addBinding(proxyExtr, "dirY", { min: -1, max: 1, step: 1, label: "Dir Y" });
  fSel.addBinding(proxyExtr, "dirZ", { min: -1, max: 1, step: 1, label: "Dir Z" });
  fSel.addButton({ title: "⬆ Extruir nodo→frame (1 nodo seleccionado + altura)" }).on("click", () => {
    const sel = (window as any).__hekatanSelection as Set<string> | undefined;
    if (!sel || sel.size === 0) {
      alert("Seleccioná al menos 1 nodo (click sobre un punto).");
      return;
    }
    const dirRaw = [proxyExtr.dirX, proxyExtr.dirY, proxyExtr.dirZ];
    const dirLen = Math.hypot(...dirRaw);
    if (dirLen < 0.01) {
      alert("Dir X/Y/Z son todos cero. Elegí al menos uno (default +Z = vertical).");
      return;
    }
    const dir = dirRaw.map(v => v / dirLen);
    const H = proxyExtr.height;
    const points = drawing.points;
    const polys = drawing.polylines;
    if (!points || !polys) return;
    const ptsArr = [...points.rawVal];
    const polysArr = polys.rawVal.map(p => [...p]);
    let extruded = 0;
    for (const id of sel) {
      const parts = id.split(":");
      if (parts[0] !== "pt") continue;
      const baseIdx = +parts[1];
      const base = ptsArr[baseIdx];
      if (!base) continue;
      // Crear nodo top y un frame base→top (nueva polilínea)
      const top: number[] = [
        base[0] + dir[0] * H,
        base[1] + dir[1] * H,
        base[2] + dir[2] * H,
      ];
      ptsArr.push(top);
      const topIdx = ptsArr.length - 1;
      polysArr.push([baseIdx, topIdx]);
      extruded++;
    }
    if (extruded === 0) {
      alert("La selección no contiene nodos.");
      return;
    }
    points.val = ptsArr;
    polys.val = polysArr;
    sel.clear();
    (window as any).__hekatanRefreshSelection?.();
    hooks.onRebuild?.();
    alert(`✓ ${extruded} nodo(s) extruidos a frames de altura ${H}m en dirección (${dir.map(d=>d.toFixed(2)).join(",")}).`);
  });
  // ── 💬 AI Assistant (providers gratuitos) ──
  // Folder con prompt textarea + paste/drop de imágenes + selector de
  // provider (Ollama/Gemini/Groq/OpenRouter). El user pega su API key
  // (excepto para Ollama que es local) y la persiste en localStorage.
  // El system prompt instruye a la IA a emitir comandos CLI Hekatan que
  // se ejecutan vía window.__hekatanCliScript + un parser que ya existe.
  const fAI = fCad.addFolder({ title: "💬 AI Assistant (gratis)", expanded: false });
  // Estado AI
  const aiState = {
    providerId: aiStorage.getProvider(),
    apiKey: "",
    model: "",
    images: [] as AIImage[],
    prompt: "",
    response: "",
  };
  aiState.apiKey = aiStorage.getKey(aiState.providerId);
  // Selector de provider
  const providerOptions: Record<string, string> = {};
  for (const p of PROVIDERS) providerOptions[p.name] = p.id;
  const proxyProvider = { id: aiState.providerId };
  fAI.addBinding(proxyProvider, "id", {
    label: "Provider",
    options: providerOptions,
  }).on("change", (ev: any) => {
    aiState.providerId = ev.value;
    aiStorage.setProvider(aiState.providerId);
    aiState.apiKey = aiStorage.getKey(aiState.providerId);
    refreshAiUi();
  });
  // Selector de modelo (dinámico según provider)
  const proxyModel = { id: "" };
  let modelBinding: any = null;
  // Input de API key (oculto para Ollama)
  const proxyKey = { key: "" };
  let keyBinding: any = null;
  // Container DOM para textarea, imágenes, response
  const aiPanelDOM = document.createElement("div");
  aiPanelDOM.style.cssText = [
    "padding:8px", "display:flex", "flex-direction:column", "gap:6px",
    "font-family:Consolas,monospace", "font-size:12px",
  ].join(";") + ";";
  // Área de imágenes (paste/drop/click)
  const imgArea = document.createElement("div");
  imgArea.style.cssText = [
    "min-height:50px", "border:1.5px dashed #555", "border-radius:4px",
    "padding:6px", "display:flex", "flex-wrap:wrap", "gap:4px",
    "align-items:center", "color:#888",
  ].join(";") + ";";
  imgArea.textContent = "📋 Pega/arrastra imágenes acá (Ctrl+V)";
  imgArea.tabIndex = 0;  // permite focus para capturar paste
  // Textarea para el prompt
  const promptTA = document.createElement("textarea");
  promptTA.placeholder = "Pedile al AI: 'Crea un pórtico de 3 vanos de 5m, altura 3m, columnas 40×40, vigas 25×40, empotrado'";
  promptTA.style.cssText = [
    "width:100%", "min-height:80px", "padding:6px",
    "background:#1a1a1a", "color:#ddd", "border:1px solid #444",
    "border-radius:4px", "font-family:inherit", "font-size:12px",
    "resize:vertical", "box-sizing:border-box",
  ].join(";") + ";";
  // Botones
  const btnRow = document.createElement("div");
  btnRow.style.cssText = "display:flex;gap:6px;";
  const btnSend = document.createElement("button");
  btnSend.textContent = "▶ Generar";
  btnSend.style.cssText = "flex:1;padding:6px;background:#22d3ee;color:#000;border:none;border-radius:4px;cursor:pointer;font-weight:bold;";
  const btnClearImg = document.createElement("button");
  btnClearImg.textContent = "✗ Limpiar imágenes";
  btnClearImg.style.cssText = "padding:6px 10px;background:#444;color:#ddd;border:none;border-radius:4px;cursor:pointer;";
  btnRow.appendChild(btnSend);
  btnRow.appendChild(btnClearImg);
  // Área de respuesta
  const responseTA = document.createElement("textarea");
  responseTA.placeholder = "La respuesta del AI aparecerá acá...";
  responseTA.readOnly = true;
  responseTA.style.cssText = promptTA.style.cssText + "min-height:120px;background:#0a0a0a;";
  // Botón para ejecutar
  const btnExec = document.createElement("button");
  btnExec.textContent = "✓ Ejecutar como comandos CLI";
  btnExec.style.cssText = "padding:6px;background:#34d399;color:#000;border:none;border-radius:4px;cursor:pointer;font-weight:bold;";
  btnExec.disabled = true;
  // Hint del provider seleccionado
  const hint = document.createElement("div");
  hint.style.cssText = "color:#888;font-size:11px;line-height:1.4;";
  // Ensamblar
  aiPanelDOM.appendChild(imgArea);
  aiPanelDOM.appendChild(promptTA);
  aiPanelDOM.appendChild(btnRow);
  aiPanelDOM.appendChild(responseTA);
  aiPanelDOM.appendChild(btnExec);
  aiPanelDOM.appendChild(hint);
  // Insertar el container DOM en el folder Tweakpane
  setTimeout(() => fAI.element?.appendChild?.(aiPanelDOM), 50);
  // Manejo de paste de imágenes
  const addImage = async (blob: Blob) => {
    const b64 = await blobToBase64(blob);
    aiState.images.push({ mimeType: blob.type, base64: b64 });
    renderImages();
  };
  const renderImages = () => {
    imgArea.innerHTML = "";
    if (aiState.images.length === 0) {
      imgArea.style.color = "#888";
      imgArea.textContent = "📋 Pega/arrastra imágenes acá (Ctrl+V)";
      return;
    }
    imgArea.style.color = "#ddd";
    aiState.images.forEach((img, i) => {
      const wrap = document.createElement("div");
      wrap.style.cssText = "position:relative;display:inline-block;";
      const thumb = document.createElement("img");
      thumb.src = `data:${img.mimeType};base64,${img.base64}`;
      thumb.style.cssText = "width:60px;height:60px;object-fit:cover;border:1px solid #666;border-radius:3px;";
      const x = document.createElement("button");
      x.textContent = "×";
      x.style.cssText = "position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:#ef4444;color:#fff;border:none;cursor:pointer;font-size:11px;line-height:1;padding:0;";
      x.onclick = () => { aiState.images.splice(i, 1); renderImages(); };
      wrap.appendChild(thumb);
      wrap.appendChild(x);
      imgArea.appendChild(wrap);
    });
    const counter = document.createElement("span");
    counter.style.cssText = "color:#888;font-size:11px;margin-left:6px;";
    counter.textContent = `${aiState.images.length} imagen(es)`;
    imgArea.appendChild(counter);
  };
  imgArea.addEventListener("paste", async (ev: any) => {
    for (const item of ev.clipboardData?.items ?? []) {
      if (item.type?.startsWith("image/")) {
        const blob = item.getAsFile();
        if (blob) await addImage(blob);
      }
    }
  });
  promptTA.addEventListener("paste", async (ev: any) => {
    for (const item of ev.clipboardData?.items ?? []) {
      if (item.type?.startsWith("image/")) {
        ev.preventDefault();
        const blob = item.getAsFile();
        if (blob) await addImage(blob);
      }
    }
  });
  imgArea.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    imgArea.style.borderColor = "#22d3ee";
  });
  imgArea.addEventListener("dragleave", () => {
    imgArea.style.borderColor = "#555";
  });
  imgArea.addEventListener("drop", async (ev) => {
    ev.preventDefault();
    imgArea.style.borderColor = "#555";
    for (const file of Array.from(ev.dataTransfer?.files ?? [])) {
      if (file.type.startsWith("image/")) await addImage(file);
    }
  });
  btnClearImg.onclick = () => { aiState.images = []; renderImages(); };
  // Refrescar UI según provider seleccionado
  const refreshAiUi = () => {
    const p = getProvider(aiState.providerId);
    if (!p) return;
    // Modelos
    if (modelBinding) modelBinding.dispose();
    const modelOpts: Record<string, string> = {};
    for (const m of p.models) modelOpts[m.name] = m.id;
    const savedModel = aiStorage.getModel(p.id);
    proxyModel.id = savedModel || p.defaultModel;
    aiState.model = proxyModel.id;
    modelBinding = fAI.addBinding(proxyModel, "id", { label: "Modelo", options: modelOpts });
    modelBinding.on("change", (ev: any) => {
      aiState.model = ev.value;
      aiStorage.setModel(p.id, ev.value);
    });
    // API key (solo si requiresKey)
    if (keyBinding) { try { keyBinding.dispose(); } catch {} keyBinding = null; }
    if (p.requiresKey) {
      proxyKey.key = aiStorage.getKey(p.id);
      keyBinding = fAI.addBinding(proxyKey, "key", { label: "API Key" });
      keyBinding.on("change", (ev: any) => {
        aiStorage.setKey(p.id, ev.value);
        aiState.apiKey = ev.value;
      });
      aiState.apiKey = proxyKey.key;
    } else {
      aiState.apiKey = "";
    }
    // Hint
    const lines: string[] = [];
    if (p.id === "ollama") {
      lines.push("Requiere Ollama corriendo en localhost:11434.");
      lines.push("Instalar: ollama.com → ollama pull qwen2.5-coder:7b");
    } else if (p.id === "gemini") {
      lines.push("API key gratis: aistudio.google.com/apikey");
      lines.push("Free tier: 15 req/min, 1M tok/día.");
    } else if (p.id === "groq") {
      lines.push("API key gratis: console.groq.com/keys");
      lines.push("Inferencia ~500 tok/seg.");
    } else if (p.id === "openrouter") {
      lines.push("API key: openrouter.ai/keys (modelos free disponibles).");
      lines.push("Sufijo :free indica modelo gratuito.");
    }
    hint.textContent = lines.join("\n");
  };
  refreshAiUi();
  // Auto-detectar Ollama. Si NO está corriendo y el user nunca eligió un
  // provider, cambiar default a Gemini para que la primera experiencia no
  // sea un error de conexión. Si el user ya configuró Ollama explícitamente
  // (saved in localStorage), respetarle la elección y mostrar warning.
  isOllamaRunning().then(running => {
    if (!running && aiState.providerId === "ollama") {
      const userExplicitlyChoseOllama = !!localStorage.getItem("hekatan_ai_provider");
      if (!userExplicitlyChoseOllama) {
        // Auto-cambiar a Gemini (más amigable como default)
        console.log("[AI] Ollama no detectado → default a Gemini Flash");
        aiState.providerId = "gemini";
        proxyProvider.id = "gemini";
        aiStorage.setProvider("gemini");
        refreshAiUi();
        hint.textContent = "ℹ Ollama no está corriendo — usando Gemini Flash. " +
          "Pegá tu API key gratis (aistudio.google.com/apikey) o instalá Ollama.";
      } else {
        hint.textContent = "⚠ Ollama no responde en localhost:11434. " +
          "Iniciá Ollama o cambiá a otro provider.";
      }
    } else if (running && aiState.providerId === "ollama") {
      listOllamaModels().then(installed => {
        if (installed.length > 0) {
          console.log("[AI] Ollama OK. Modelos instalados:", installed);
        }
      });
    }
  });
  // Botón "Test connection" — útil para debug
  const btnTest = document.createElement("button");
  btnTest.textContent = "🔌 Test conexión";
  btnTest.style.cssText = "padding:4px 8px;background:#444;color:#ddd;border:none;border-radius:3px;cursor:pointer;font-size:11px;margin-top:4px;";
  btnTest.onclick = async () => {
    const p = getProvider(aiState.providerId);
    if (!p) return;
    btnTest.textContent = "⏳ Probando...";
    try {
      // Para Ollama: ping a /api/tags. Para los demás: un prompt mínimo.
      if (p.id === "ollama") {
        const ok = await isOllamaRunning();
        if (ok) {
          const models = await listOllamaModels();
          alert(`✓ Ollama OK. ${models.length} modelo(s) instalados:\n${models.join("\n")}`);
        } else {
          alert("✗ Ollama no responde en localhost:11434.\n\nIniciá Ollama o instalalo desde ollama.com");
        }
      } else if (!aiState.apiKey) {
        alert(`Pegá tu API key de ${p.name} primero.`);
      } else {
        const out = await p.send({
          msg: { text: "Responde solo: OK" },
          system: "Sos un test de conexión. Responde solo: OK",
          apiKey: aiState.apiKey,
          model: aiState.model,
        });
        alert(`✓ ${p.name} respondió: "${out.slice(0, 100)}"`);
      }
    } catch (err: any) {
      alert(`✗ Error: ${err?.message ?? err}`);
    } finally {
      btnTest.textContent = "🔌 Test conexión";
    }
  };
  aiPanelDOM.appendChild(btnTest);
  // Botón "Generar" → llamar al provider
  btnSend.onclick = async () => {
    const p = getProvider(aiState.providerId);
    if (!p) { alert("Provider no encontrado."); return; }
    if (p.requiresKey && !aiState.apiKey) {
      alert(`${p.name} requiere API key. Pegala en el campo de arriba.`);
      return;
    }
    if (!aiState.prompt.trim() && aiState.images.length === 0) {
      alert("Escribí un prompt o pegá una imagen.");
      return;
    }
    btnSend.disabled = true;
    btnSend.textContent = "⏳ Generando...";
    responseTA.value = "Esperando respuesta del modelo...";
    btnExec.disabled = true;
    try {
      const out = await p.send({
        msg: { text: aiState.prompt, images: aiState.images },
        system: HEKATAN_SYSTEM_PROMPT,
        apiKey: aiState.apiKey,
        model: aiState.model,
      });
      aiState.response = out;
      // Limpiar markdown wrapping si la IA puso ```
      const cleaned = out.replace(/^```[a-z]*\n?/i, "").replace(/\n?```\s*$/, "").trim();
      responseTA.value = cleaned;
      responseTA.readOnly = false;  // editable post-generación
      btnExec.disabled = false;
    } catch (err: any) {
      responseTA.value = `❌ Error: ${err?.message ?? err}`;
    } finally {
      btnSend.disabled = false;
      btnSend.textContent = "▶ Generar";
    }
  };
  promptTA.addEventListener("input", () => { aiState.prompt = promptTA.value; });
  promptTA.addEventListener("keydown", (ev) => {
    if ((ev.ctrlKey || ev.metaKey) && ev.key === "Enter") {
      ev.preventDefault();
      btnSend.click();
    }
  });
  // Botón "Ejecutar" → setear el script CLI y ejecutarlo
  btnExec.onclick = () => {
    const cli = responseTA.value.trim();
    if (!cli) return;
    // Setear el script CLI global y disparar ejecución (mismo flujo que el
    // textarea CLI manual). El parser está en cad-draw/cliRunner.
    (window as any).__hekatanCliScript = cli;
    const fn = (window as any).__hekatanCliExecute;
    if (typeof fn === "function") {
      fn();
    } else {
      // Fallback: copiar al portapapeles para que el user lo pegue manualmente
      navigator.clipboard?.writeText(cli);
      alert("Script copiado al clipboard. Pegalo en el panel CLI Comandos para ejecutarlo.");
    }
    hooks.onRebuild?.();
  };
  fSel.addButton({ title: "⬆ Extruir frame→área (1+ segmentos seleccionados + altura)" }).on("click", () => {
    const sel = (window as any).__hekatanSelection as Set<string> | undefined;
    if (!sel || sel.size === 0) {
      alert("Seleccioná al menos 1 segmento (click sobre una línea).");
      return;
    }
    const dirRaw = [proxyExtr.dirX, proxyExtr.dirY, proxyExtr.dirZ];
    const dirLen = Math.hypot(...dirRaw);
    if (dirLen < 0.01) {
      alert("Dir X/Y/Z son todos cero.");
      return;
    }
    const dir = dirRaw.map(v => v / dirLen);
    const H = proxyExtr.height;
    const points = drawing.points;
    const polys = drawing.polylines;
    const areas = drawing.areas;
    if (!points || !polys || !areas) return;
    const ptsArr = [...points.rawVal];
    const polysArr = polys.rawVal.map(p => [...p]);
    const areasArr = [...areas.rawVal];
    let extruded = 0;
    for (const id of sel) {
      const parts = id.split(":");
      if (parts[0] !== "seg") continue;
      const polyIdx = +parts[1], segIdx = +parts[2];
      const poly = polysArr[polyIdx];
      if (!poly) continue;
      const aIdx = poly[segIdx], bIdx = poly[segIdx + 1];
      const a = ptsArr[aIdx], b = ptsArr[bIdx];
      if (!a || !b) continue;
      // Crear 2 nodos top (a' = a + dir*H, b' = b + dir*H)
      const aTop: number[] = [a[0] + dir[0] * H, a[1] + dir[1] * H, a[2] + dir[2] * H];
      const bTop: number[] = [b[0] + dir[0] * H, b[1] + dir[1] * H, b[2] + dir[2] * H];
      ptsArr.push(aTop);
      const aTopIdx = ptsArr.length - 1;
      ptsArr.push(bTop);
      const bTopIdx = ptsArr.length - 1;
      // Q4 vertical: aIdx → bIdx → bTopIdx → aTopIdx → aIdx (cerrado)
      const newPolyIdx = polysArr.length;
      polysArr.push([aIdx, bIdx, bTopIdx, aTopIdx, aIdx]);
      areasArr.push(newPolyIdx);
      extruded++;
    }
    if (extruded === 0) {
      alert("La selección no contiene segmentos.");
      return;
    }
    points.val = ptsArr;
    polys.val = polysArr;
    areas.val = areasArr;
    sel.clear();
    (window as any).__hekatanRefreshSelection?.();
    hooks.onRebuild?.();
    alert(`✓ ${extruded} segmento(s) extruido(s) a shells Q4 verticales de altura ${H}m.`);
  });

  return { fCad };
}
