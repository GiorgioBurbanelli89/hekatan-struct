import van, { State } from "vanjs-core";
import { Pane } from "tweakpane";
import { Mesh } from "hekatan-fem";
import { colorMapPalette } from "../../color-map/getColorMap";

import "./styles.css";

// Todo: Remove this duplicated Settings type (might not be possible to remove it)
export type Settings = {
  gridSize: State<number>;
  /** Master toggle del grid completo. Cuando OFF oculta los 3 planos sin
   *  perder la configuración de cuáles (XY/XZ/YZ) estaban activos. Útil
   *  para alternar rápido entre "ver grid" y "vista limpia". */
  gridVisible: State<boolean>;
  /** Opacidad global del grid — multiplica las opacidades base (mayor=0.40,
   *  menor=0.12) por este factor. Range 0..1. Default 1 (visible normal).
   *  Permite ajustar visibilidad sin tocar los toggles. */
  gridOpacity: State<number>;
  /** Separación VISUAL de las líneas MENORES del grid (en metros).
   *  SOLO afecta cómo se ve el grid — no toca el snap del cursor.
   *  Range 0.05 a 5. Default 0.5. Las líneas MAYORES se dibujan cada
   *  5×gridStep para destacar la graduación principal. */
  gridStep: State<number>;
  /** Separación EN METROS de las líneas MAYORES del grid (las resaltadas).
   *  INDEPENDIENTE de gridStep — el usuario puede tener menores cada 0.5m
   *  y mayores cada 2m, o cualquier otra combinación. Default 1m.
   *  Range 0.1..50. Para que las mayores se vean alineadas con las menores,
   *  conviene que gridMajor sea múltiplo entero de gridStep. */
  gridMajor: State<number>;
  /** Paso de adherencia del CURSOR al grid (en metros). Independiente
   *  de gridStep — el usuario puede tener un grid visual cada 0.5m pero
   *  el cursor saltando cada 0.1m, o viceversa. Default 0.5.
   *  Escribe a window.__hekatanSnap2D que lee drawing.ts. */
  cursorSnap: State<number>;
  /** Plataformas de grid en cada plano principal (XY/XZ/YZ). Por default
   *  solo XY (vista de planta CAD). Toggles permiten activar XZ y YZ también
   *  para trabajar en 3D iso desde cualquier plano. Centrados en (0,0,0). */
  gridXY: State<boolean>;
  gridXZ: State<boolean>;
  gridYZ: State<boolean>;
  displayScale: State<number>;
  nodes: State<boolean>;
  elements: State<boolean>;
  /** Wireframe edges (delim. visual entre sólidos H8 / áreas Q4). Independiente
   *  de `elements` — útil para ver el colormap sin las líneas de delimitación. */
  edges: State<boolean>;
  /** Caras de áreas/shells/sólidos (shellMesh fill). Cuando se desactiva, se
   *  ocultan SOLO las superficies coloreadas dejando edges + nodos visibles
   *  (modo wireframe puro). Útil para ver vigas/lineas frame que están dentro
   *  o detrás de un shell sin que el colormap las tape. */
  faces: State<boolean>;
  elemColumns: State<boolean>;
  elemBeams: State<boolean>;
  /** Toggle padre: show/hide TODOS los frames (cols + vigas) de un golpe.
   *  Default true. Si false, ignora elemColumns/elemBeams. */
  elemFrames: State<boolean>;
  /** Toggle: shells de cimentación (zapatas, losas a z ≤ 0). Default true. */
  elemZapatas: State<boolean>;
  /** Toggle: shells de losa superior (z > 0). Default true. */
  elemLosas: State<boolean>;
  /** Master toggle: cuando ON, pinta cada tipo de elemento de un color fijo
   *  (columnas naranja, vigas cyan, zapatas verde, losas azul). Cuando OFF,
   *  todos usan el color neutro del tema. Útil para distinguir visualmente
   *  qué es qué cuando hay muchos elementos. Default false. */
  colorByType: State<boolean>;
  nodesIndexes: State<boolean>;
  elementsIndexes: State<boolean>;
  orientations: State<boolean>;
  sections: State<boolean>;
  /** Toggle independiente para los chips de texto "30x50" / "40x40" que se dibujan
   *  sobre las secciones celestes. Si false, las formas siguen visibles pero los
   *  textos se ocultan. Solo aplica si `sections` también es true. */
  sectionLabels: State<boolean>;
  secColumns: State<boolean>;
  secBeams: State<boolean>;
  secFloor: State<number>;  // -1=all, 0=piso1, 1=piso2...
  supports: State<boolean>;
  loads: State<boolean>;
  deformedShape: State<boolean>;
  nodeResults: State<string>;
  frameResults: State<string>;
  shellResults: State<string>;
  /** Resultados sólidos H8 (columna+viga, cubo, etc.) — vonMises / σ / τ / desp. */
  solidResults: State<string>;
  solids: State<boolean>;
  flipAxes: State<boolean>;
  /** Resortes/objetos custom 3D (zigzags Winkler en zapatas, etc.) on/off */
  custom3D: State<boolean>;
  /** Cotas / dimensiones anotadas sobre el modelo (5.00 m, 40×40, etc.) */
  showCotas: State<boolean>;
  /** Escala de la deformada visible (independiente de displayScale que afecta
   *  flechas de cargas y soportes). Se auto-computa para que max ≈ 5% del modelo.
   *  Aplica uniformemente a las 3 componentes si deformScaleZ está a 1 (default
   *  legacy). Si el usuario divide XY y Z vía el Tweakpane workspace, entonces
   *  este actúa como el scale en el plano (X, Y) y deformScaleZ como multiplicador
   *  adicional para el eje vertical (Z). */
  deformScale: State<number>;
  /** Multiplicador adicional del scale Z (vertical) respecto a XY. Default 1.
   *  Útil en edificios para bajar la amplificación axial (compresión columnas,
   *  sag de losas) sin afectar el sway lateral. Ejemplo: deformScaleZ=0.2 hace
   *  que Uz visible sea 20% del que saldría con deformScale plano. */
  deformScaleZ: State<number>;
};

export type SettingsObj = {
  gridSize?: number;
  gridVisible?: boolean;
  gridOpacity?: number;
  gridStep?: number;
  gridMajor?: number;
  cursorSnap?: number;
  gridXY?: boolean;
  gridXZ?: boolean;
  gridYZ?: boolean;
  displayScale?: number;
  nodes?: boolean;
  elements?: boolean;
  edges?: boolean;
  faces?: boolean;
  elemColumns?: boolean;
  elemBeams?: boolean;
  elemFrames?: boolean;
  elemZapatas?: boolean;
  elemLosas?: boolean;
  colorByType?: boolean;
  nodesIndexes?: boolean;
  elementsIndexes?: boolean;
  orientations?: boolean;
  sections?: boolean;
  sectionLabels?: boolean;
  secColumns?: boolean;
  secBeams?: boolean;
  secFloor?: number;
  supports?: boolean;
  loads?: boolean;
  deformedShape?: boolean;
  nodeResults?: string;
  frameResults?: string;
  shellResults?: string;
  solidResults?: string;
  flipAxes?: boolean;
  solids?: boolean;
  custom3D?: boolean;
  showCotas?: boolean;
  deformScale?: number;
  deformScaleZ?: number;
};

export function getSettings(
  settings: Settings,
  mesh?: Mesh,
  solids?: State<object>
): HTMLElement {
  // init
  const container = document.createElement("div");
  const pane = new Pane({
    title: "Settings",
    expanded: true,
    container,
  });

  // ── REGISTRO GLOBAL DE PANES ──
  // Para que window.__hekatanClipApply() pueda llamar pane.refresh() en TODOS
  // los panes que bindean a window.__hekatanClip cuando se modifica vía CLI.
  // Sin esto los checkboxes/sliders del DOM no reflejan los cambios externos.
  (window as any).__hekatanPanes = (window as any).__hekatanPanes ?? [];
  (window as any).__hekatanPanes.push(pane);

  // update
  container.setAttribute("id", "settings");

  // ── Hacer el panel Settings ARRASTRABLE ──
  // Igual que el panel Workspace (paneHost en main.ts). El usuario puede
  // mover este panel desde la barra de título "Settings" (.tp-rotv_b).
  // Posición persistida en localStorage.
  const SETTINGS_POS_KEY = "hk_settingsPos";
  // Posicionar como flotante con la posición guardada (o default top-left)
  let savedPos: { left: number; top: number } | null = null;
  try {
    const raw = localStorage.getItem(SETTINGS_POS_KEY);
    if (raw) savedPos = JSON.parse(raw);
  } catch { /* default */ }
  container.style.cssText = [
    "position:fixed",
    savedPos ? `left:${savedPos.left}px` : "left:8px",
    savedPos ? `top:${savedPos.top}px` : "top:8px",
    "z-index:50",
    "max-height:calc(100vh - 32px)",
    "overflow-y:auto",
    "box-shadow:0 4px 16px rgba(0,0,0,0.35)",
    "border-radius:6px",
  ].join(";") + ";";

  const setupDrag = () => {
    const handle = container.querySelector(".tp-rotv_b") as HTMLElement | null;
    if (!handle) {
      setTimeout(setupDrag, 200);
      return;
    }
    handle.style.cursor = "move";
    handle.style.userSelect = "none";
    let dragging = false;
    let startX = 0, startY = 0, origLeft = 0, origTop = 0;
    handle.addEventListener("mousedown", (e: MouseEvent) => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const r = container.getBoundingClientRect();
      origLeft = r.left;
      origTop = r.top;
      container.style.left = `${origLeft}px`;
      container.style.top = `${origTop}px`;
    });
    window.addEventListener("mousemove", (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const newLeft = Math.max(0, Math.min(window.innerWidth - 40, origLeft + dx));
      const newTop = Math.max(0, Math.min(window.innerHeight - 40, origTop + dy));
      container.style.left = `${newLeft}px`;
      container.style.top = `${newTop}px`;
    });
    window.addEventListener("mouseup", () => {
      if (!dragging) return;
      dragging = false;
      try {
        localStorage.setItem(SETTINGS_POS_KEY, JSON.stringify({
          left: parseFloat(container.style.left),
          top: parseFloat(container.style.top),
        }));
      } catch { /* localStorage unavailable */ }
    });
  };
  setupDrag();

  if (mesh?.nodes) {
    pane.addBinding(settings.displayScale, "val", {
      label: "Display scale",
      min: -10,
      max: 10,
      step: 0.5,   // permite valores fraccionales (-1.5, -2.5, etc.)
    });
    // ── Folder "Grid" agrupa todas las opciones del grid ──
    // Tamaño, paso, visibilidad, opacidad, planos XY/XZ/YZ — son varios
    // controles relacionados, así que viven en un folder colapsable para
    // no ocupar espacio en el panel principal. Default colapsado para vista
    // limpia; el usuario lo expande cuando quiere ajustar.
    const gridFolder = pane.addFolder({ title: "📐 Grid", expanded: true });
    // Etiquetas claras:
    //  - Dimensión   = tamaño TOTAL del grid (cuántos metros mide cada lado)
    //  - Separación  = distancia entre LÍNEAS (cada cuánto se dibuja una)
    //  - Paso cursor = a cuánto SALTA el cursor (independiente del visual)
    gridFolder.addBinding(settings.gridSize, "val", {
      label: "Dimensión (m)", min: 1, max: 100, step: 1,
    });
    // Separación de las líneas MENORES (toda la malla cuadriculada).
    gridFolder.addBinding(settings.gridStep, "val", {
      label: "Separación grid (m)", min: 0.05, max: 5, step: 0.05,
    });
    // Separación de las líneas MAYORES (resaltadas) — INDEPENDIENTE en metros.
    // No es multiplicador: cada slider tiene su propio valor en m.
    gridFolder.addBinding(settings.gridMajor, "val", {
      label: "Separación mayores (m)", min: 0.1, max: 50, step: 0.1,
    });
    gridFolder.addBinding(settings.cursorSnap, "val", {
      label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05,
    });
    gridFolder.addBinding(settings.gridVisible, "val", { label: "Mostrar" });
    gridFolder.addBinding(settings.gridOpacity, "val", {
      label: "Opacidad", min: 0, max: 1, step: 0.05,
    });
    gridFolder.addBinding(settings.gridXY, "val", { label: "Plano XY (planta)" });
    gridFolder.addBinding(settings.gridXZ, "val", { label: "Plano XZ (frontal)" });
    gridFolder.addBinding(settings.gridYZ, "val", { label: "Plano YZ (lateral)" });
    // NOTA: deformScale XY/Z se bindean en Analysis Outputs JUNTO al toggle
    // "Deformed shape" para evitar duplicacion y mantener UX coherente.
    pane.addBinding(settings.nodes, "val", { label: "Nodes" });
    pane.addBinding(settings.elements, "val", {
      label: "Elements",
    });
    pane.addBinding(settings.edges, "val", {
      label: "  Edges (delim.)",
    });
    pane.addBinding(settings.faces, "val", {
      label: "  Caras (fill)",
    });
    pane.addBinding(settings.elemFrames, "val", {
      label: "  Frames (todos)",
    });
    pane.addBinding(settings.elemColumns, "val", {
      label: "    Columnas",
    });
    pane.addBinding(settings.elemBeams, "val", {
      label: "    Vigas",
    });
    pane.addBinding(settings.elemZapatas, "val", {
      label: "  Zapatas (shells z≤0)",
    });
    pane.addBinding(settings.elemLosas, "val", {
      label: "  Losas (shells z>0)",
    });
    pane.addBinding(settings.colorByType, "val", {
      label: "  🎨 Color por tipo",
    });
    pane.addBinding(settings.nodesIndexes, "val", {
      label: "Nodes indexes",
    });
    pane.addBinding(settings.elementsIndexes, "val", {
      label: "Elements indexes",
    });
    pane.addBinding(settings.orientations, "val", {
      label: "Orientations",
    });
    pane.addBinding(settings.sections, "val", {
      label: "Sections",
    });
    pane.addBinding(settings.sectionLabels, "val", {
      label: "  Sec. Labels (30x50)",
    });
    pane.addBinding(settings.secColumns, "val", {
      label: "  Sec. Columnas",
    });
    pane.addBinding(settings.secBeams, "val", {
      label: "  Sec. Vigas",
    });
    pane.addBinding(settings.secFloor, "val", {
      label: "  Sec. Piso",
      options: { 'Todos': -1, 'Piso 1': 0, 'Piso 2': 1, 'Piso 3': 2, 'Piso 4': 3, 'Piso 5': 4 },
    });
  }

  if (mesh?.nodeInputs || mesh?.elementInputs) {
    const inputs = pane.addFolder({ title: "Analysis Inputs" });

    inputs.addBinding(settings.supports, "val", { label: "Supports" });
    inputs.addBinding(settings.loads, "val", { label: "Loads" });
    inputs.addBinding(settings.custom3D, "val", { label: "Resortes (Winkler)" });
    inputs.addBinding(settings.showCotas, "val", { label: "Cotas" });
  }

  if (mesh?.deformOutputs || mesh?.analyzeOutputs) {
    const outputs = pane.addFolder({ title: "Analysis Outputs" });
    // Exponer el folder para que el workspace inyecte "Case results" (Dead/Live/Modal)
    // junto a Node/Frame/Shell results — los selectores de resultado quedan juntos.
    (window as any).__hekatanOutputsFolder = outputs;

    outputs.addBinding(settings.nodeResults, "val", {
      options: {
        none: "none",
        "U (deformations)": "deformations",   // SAP: U1 U2 U3 + R1 R2 R3 = 6 DOF
        "R (reactions)":    "reactions",      // SAP: F1 F2 F3 + M1 M2 M3 en restraints
      },
      label: "Node results",
    });

    outputs.addBinding(settings.frameResults, "val", {
      // Componentes del "Member Force Diagram for Frames" de ETABS (ejes locales 1-2-3).
      options: {
        none: "none",
        "Axial Force": "normals",   // P (eje longitudinal 1)
        "Torsion": "torsions",      // T (sobre eje 1)
        "Shear 2-2": "shearsY",     // V2 (eje local 2)
        "Shear 3-3": "shearsZ",     // V3 (eje local 3)
        "Moment 2-2": "bendingsY",  // M2 (eje fuerte vigas)
        "Moment 3-3": "bendingsZ",  // M3 (eje débil vigas)
        // Diagramas tipo contour (envolvente sobre la viga)
        "Axial Force (diagram)":  "contour:normals",
        "Shear 2-2 (diagram)":    "contour:shearsY",
        "Shear 3-3 (diagram)":    "contour:shearsZ",
        "Torsion (diagram)":      "contour:torsions",
        "Moment 2-2 (diagram)":   "contour:bendingsY",
        "Moment 3-3 (diagram)":   "contour:bendingsZ",
      },
      label: "Frame results",
    });

    outputs.addBinding(settings.shellResults, "val", {
      // Componentes del diálogo "Shell Forces/Stresses" de ETABS, en su mismo orden:
      // F11 F22 F12 FMax FMin FVM · V13 V23 VMax · M11 M22 M12 MMax MMin.
      options: {
        none: "none",
        "F11": "membraneXX",
        "F22": "membraneYY",
        "F12": "membraneXY",
        "FMax": "membranePrincipalMax",
        "FMin": "membranePrincipalMin",
        "FVM": "vonMises",
        "V13": "tranverseShearX",
        "V23": "tranverseShearY",
        "VMax": "transverseShearMax",
        "M11": "bendingXX",
        "M22": "bendingYY",
        "M12": "bendingXY",
        "MMax": "bendingPrincipalMax",
        "MMin": "bendingPrincipalMin",
        // Extras de Hekatan (no en el diálogo ETABS): presión de suelo + desplazamientos.
        "Pressure (suelo)": "pressure",
        "Ux": "displacementX",
        "Uy": "displacementY",
        "Uz": "displacementZ",
      },
      label: "Shell results",
    });

    // Selector de PALETA de colores del colormap. Por defecto la CSI (SAFE · ETABS).
    outputs.addBinding(colorMapPalette, "val", {
      options: {
        "SAFE (cimentación)": "safe",
        "ETABS / CSI (magenta→azul)": "csi",
        "Jet_r (rojo→azul)": "jet_r",
        "Jet (azul→rojo)": "jet",
        "Viridis": "viridis",
      },
      label: "🎨 Paleta colores",
    });

    // Solid results (elementos H8 sólidos: columna+viga, cubos, etc.)
    // Unidades se muestran en el LEGEND del colorbar (kN/m² para σ/τ/vM, m para u).
    outputs.addBinding(settings.solidResults, "val", {
      options: {
        none: "none",
        vonMises: "vonMises",
        σxx: "sigmaXX",
        σyy: "sigmaYY",
        σzz: "sigmaZZ",
        τxy: "tauXY",
        τyz: "tauYZ",
        τxz: "tauXZ",
        ux: "ux",
        uy: "uy",
        uz: "uz",
      },
      label: "Solid results",
    });

    outputs.addBinding(settings.deformedShape, "val", {
      label: "Deformed shape",
    });
    // Sliders de escala JUNTO al toggle de deformada — en TODOS los
    // ejemplos que tengan deformOutputs/analyzeOutputs. Bindings extra
    // a las mismas State que los sliders top-level: vanjs sincroniza
    // ambos bindings automaticamente (mover uno mueve el otro).
    outputs.addBinding(settings.deformScale, "val", {
      label: "  Scale XY",
      min: 0.1,
      max: 5000,
      step: 0.1,
    });
    outputs.addBinding(settings.deformScaleZ, "val", {
      label: "  Scale Z",
      min: 0.01,
      max: 10,
      step: 0.01,
    });
  }

  if (solids) pane.addBinding(settings.solids, "val", { label: "Solids" });

  // ── Folder PLANOS DE CORTE X/Y/Z (universal — para sólidos H8) ──
  // Disponible en TODOS los viewers. Modifica window.__hekatanClip y dispara
  // window.__hekatanClipApply() (definido en getViewer al inicializar).
  const clip = pane.addFolder({ title: "✂️ Cortes X/Y/Z", expanded: false });
  // Estado global compartido (inicializado por getViewer)
  const clipState: any = (window as any).__hekatanClip ?? ((window as any).__hekatanClip = {
    enableX: false, enableY: false, enableZ: false,
    posX: 0, posY: 0, posZ: 0,
    invertX: false, invertY: false, invertZ: false,
  });
  const triggerApply = () => {
    const f = (window as any).__hekatanClipApply;
    if (typeof f === "function") f();
  };
  clip.addBinding(clipState, "enableX", { label: "Cortar X" }).on("change", triggerApply);
  clip.addBinding(clipState, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", triggerApply);
  clip.addBinding(clipState, "invertX", { label: "  invertir X" }).on("change", triggerApply);
  clip.addBinding(clipState, "enableY", { label: "Cortar Y" }).on("change", triggerApply);
  clip.addBinding(clipState, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", triggerApply);
  clip.addBinding(clipState, "invertY", { label: "  invertir Y" }).on("change", triggerApply);
  clip.addBinding(clipState, "enableZ", { label: "Cortar Z" }).on("change", triggerApply);
  clip.addBinding(clipState, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", triggerApply);
  clip.addBinding(clipState, "invertZ", { label: "  invertir Z" }).on("change", triggerApply);

  return container;
}

// Utils
export function getDefaultSettings(settingsObj: SettingsObj): Settings {
  return {
    gridSize: van.state(settingsObj?.gridSize ?? 20),
    gridVisible: van.state(settingsObj?.gridVisible ?? true),
    gridOpacity: van.state(settingsObj?.gridOpacity ?? 1.0),
    gridStep: van.state(settingsObj?.gridStep ?? 0.5),
    gridMajor: van.state(settingsObj?.gridMajor ?? 1),
    cursorSnap: van.state(settingsObj?.cursorSnap ?? 0.5),
    gridXY: van.state(settingsObj?.gridXY ?? true),
    gridXZ: van.state(settingsObj?.gridXZ ?? true),
    gridYZ: van.state(settingsObj?.gridYZ ?? false),
    displayScale: van.state(settingsObj?.displayScale ?? 1),
    nodes: van.state(settingsObj?.nodes ?? true),
    elements: van.state(settingsObj?.elements ?? true),
    edges: van.state(settingsObj?.edges ?? true),
    faces: van.state(settingsObj?.faces ?? true),
    elemColumns: van.state(settingsObj?.elemColumns ?? true),
    elemBeams: van.state(settingsObj?.elemBeams ?? true),
    elemFrames: van.state(settingsObj?.elemFrames ?? true),
    elemZapatas: van.state(settingsObj?.elemZapatas ?? true),
    elemLosas: van.state(settingsObj?.elemLosas ?? true),
    colorByType: van.state(settingsObj?.colorByType ?? false),
    nodesIndexes: van.state(settingsObj?.nodesIndexes ?? false),
    elementsIndexes: van.state(settingsObj?.elementsIndexes ?? false),
    orientations: van.state(settingsObj?.orientations ?? false),
    sections: van.state(settingsObj?.sections ?? true),
    sectionLabels: van.state(settingsObj?.sectionLabels ?? true),
    secColumns: van.state(settingsObj?.secColumns ?? true),
    secBeams: van.state(settingsObj?.secBeams ?? true),
    secFloor: van.state(settingsObj?.secFloor ?? -1),
    supports: van.state(settingsObj?.supports ?? true),
    loads: van.state(settingsObj?.loads ?? false),
    deformedShape: van.state(settingsObj?.deformedShape ?? false),
    nodeResults: van.state(settingsObj?.nodeResults ?? "none"),
    frameResults: van.state(settingsObj?.frameResults ?? "none"),
    shellResults: van.state(settingsObj?.shellResults ?? "none"),
    solidResults: van.state(settingsObj?.solidResults ?? "none"),
    flipAxes: van.state(settingsObj?.flipAxes ?? false),
    solids: van.state(settingsObj?.solids ?? true),
    custom3D: van.state(settingsObj?.custom3D ?? true),
    showCotas: van.state(settingsObj?.showCotas ?? true),
    deformScale: van.state(settingsObj?.deformScale ?? 1),
    // Default 1.0 = Z amplificado igual que XY (legacy). El workspace auto-setea
    // 0.15-0.30 cuando detecta edificio (Δz > 1.1·Δxy) para respetar que el
    // concreto/acero son axialmente RÍGIDOS (compresión ~1/500 de h_piso real,
    // no se deben ver como alfeñique en la visualización).
    deformScaleZ: van.state(settingsObj?.deformScaleZ ?? 1),
  };
}
