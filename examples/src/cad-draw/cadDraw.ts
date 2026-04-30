/**
 * CAD Drawer — modelar dibujando con mouse + Tweakpane.
 * Sincronizado con cli-modeler vía window.__hekatanCliScript.
 *
 * Modular en 4 archivos pequeños (cada uno < 200 líneas):
 *   - cadDrawTypes.ts   (tipos)
 *   - cadDrawState.ts   (estado central + sync CLI)
 *   - cadDrawMouse.ts   (eventos pointer + raycaster)
 *   - cadDrawRender.ts  (Object3D del modelo)
 *
 * Tools (cambia con folder Tweakpane):
 *   - select  : click selecciona nodo (highlight)
 *   - node    : click crea nodo en el plano de trabajo (con snap)
 *   - line    : 2 clicks → línea entre nodos (frame)
 *   - area    : 4 clicks → área Q4 (shell)
 *
 * Plano de trabajo: XY (planta), XZ (elevación frontal), YZ (lateral).
 * Cota Z fija ajustable cuando trabajas en XY.
 */
import type { ExampleDef } from "../workspace/exampleRegistry";
import { getState, syncToCliScript } from "./cadDrawState";
import { handleClick, pointerToWorld } from "./cadDrawMouse";
import { renderCadModel } from "./cadDrawRender";

let mouseHandler: ((ev: PointerEvent) => void) | null = null;
let attachedCanvas: HTMLCanvasElement | null = null;

/**
 * Adjuntar el handler de mouse al canvas del viewer.
 * Se llama una sola vez desde build() (idempotente).
 */
function attachMouseHandler() {
  const viewerEl = document.querySelector("#viewer") as any;
  const canvas = viewerEl?.querySelector?.("canvas") as HTMLCanvasElement | null;
  const ctx = viewerEl?.__ctx;
  if (!canvas || !ctx?.camera) return;
  if (attachedCanvas === canvas && mouseHandler) return;  // ya attached

  // Quitar handler previo si cambia el canvas
  if (attachedCanvas && mouseHandler) {
    attachedCanvas.removeEventListener("click", mouseHandler as any);
  }

  mouseHandler = (ev: PointerEvent) => {
    // Solo procesar click izquierdo (button 0)
    if ((ev as MouseEvent).button !== 0 && (ev as MouseEvent).button !== undefined) return;
    const world = pointerToWorld(ev, canvas, ctx.camera);
    if (!world) return;
    const result = handleClick(world);
    if (result) {
      console.log("[CAD]", result, "@", world.map(v => v.toFixed(2)));
      // Re-render el modelo después de cada click
      try { (window as any).__hekatanRebuild?.(); } catch {}
    }
  };
  canvas.addEventListener("click", mouseHandler as any);
  attachedCanvas = canvas;
  console.log("[CAD Draw] Mouse handler attached to viewer canvas");
}

export const cadDraw: ExampleDef = {
  id: "cad-draw",
  name: "CAD Drawer (mouse + Tweakpane)",
  category: "Modelar",
  defaultShellResult: "none",
  availableShellResults: [],
  params: {},
  build(_p, states) {
    // Adjuntar mouse handler (idempotente)
    attachMouseHandler();
    // Sincronizar el script CLI con el modelo actual
    syncToCliScript();
    // Renderizar el modelo a Object3D
    const objects3D = renderCadModel();
    // El modelo CAD se muestra solo via objects3D — los nodes/elements del
    // FEM solver se dejan vacíos hasta que el usuario presione "Solve" en el
    // folder Tweakpane (eso lee el CLI script y dispara deform).
    states.nodes.val = [];
    states.elements.val = [];
    states.nodeInputs.val = { supports: new Map(), loads: new Map() };
    states.elementInputs.val = {
      elasticities: new Map(), shearModuli: new Map(), areas: new Map(),
      momentsOfInertiaZ: new Map(), momentsOfInertiaY: new Map(),
      torsionalConstants: new Map(), densities: new Map(), poissonsRatios: new Map(),
      thicknesses: new Map(),
    } as any;
    states.objects3D.val = objects3D;

    const st = getState();
    console.log(
      `[CAD Draw] tool=${st.tool} | snap=${st.snap}m | plane=${st.workPlane}@z=${st.workZ}m | ` +
      `nodes=${st.model.nodes.size} lines=${st.model.lines.size} areas=${st.model.areas.size}`,
    );
  },
};
