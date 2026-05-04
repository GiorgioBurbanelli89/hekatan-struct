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
    extend:   "↗ Prolongar — click una línea, click en la dirección a extender.",
    chaflan:  "▱ Losa con chaflanes — click 2 esquinas. Radio en slider 'Chaflán r'.",
    "delete": "🗑 Borrar — hover sobre línea/área (se resalta en rojo) + click para eliminar.",
    select:   "🖱 Seleccionar — click sobre un elemento. Sin tool activo no se crean nodos.",
  };
  const setActiveTool = (tool: string) => {
    proxyTool.v = tool;
    try { (window as any).__hekatanCadState?.setTool?.(tool); } catch {}
    try { (window as any).__hekatanCadResetPending?.(); } catch {}
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
  fCad.addButton({ title: "▭ Área (shell Q4)" }).on("click", () => setActiveTool("area"));
  fCad.addButton({ title: "▌ Columna 3D (1 click + altura)" }).on("click", () => setActiveTool("col"));
  fCad.addButton({ title: "▥ Pared Q4 3D (2 clicks + altura)" }).on("click", () => setActiveTool("wall"));
  fCad.addButton({ title: "⌒ Polilínea" }).on("click", () => setActiveTool("polyline"));
  fCad.addButton({ title: "▭ Rectángulo" }).on("click", () => setActiveTool("rect"));
  fCad.addButton({ title: "○ Círculo" }).on("click", () => setActiveTool("circle"));
  fCad.addButton({ title: "⌒ Arco (3 ptos)" }).on("click", () => setActiveTool("arc"));
  fCad.addButton({ title: "┊ Línea auxiliar" }).on("click", () => setActiveTool("aux"));
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
  fCad.addBinding(proxySnapToggle, "snapEnabled", { label: "🧲 Grid snap ON/OFF" }).on("change", (ev: any) => {
    (window as any).__hekatanSnapEnabled = !!ev.value;
  });
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
    const curPlane = ((window as any).__hekatanCadState?.get?.())?.workPlane ?? "xy";
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
  const axisGroup = new THREE.Group();
  axisGroup.name = "axis-grids";
  const levelGroup = new THREE.Group();
  levelGroup.name = "levels";
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

  return { fCad };
}
