import * as THREE from "three";
import van, { State } from "vanjs-core";
import { Node, Mesh } from "awatif-fem";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  Settings,
  SettingsObj,
  getDefaultSettings,
  getSettings,
} from "./settings/getSettings";
import { nodes } from "./objects/nodes";
import { elements } from "./objects/elements";
import { grid } from "./objects/grid";
import { supports } from "./objects/supports";
import { loads } from "./objects/loads";
import { nodesIndexes } from "./objects/nodesIndexes";
import { elementsIndexes } from "./objects/elementsIndexes";
import { axes } from "./objects/axes";
import { orientations } from "./objects/orientations";
import { sections } from "./objects/sections";
import { frameResults } from "./objects/frameResults";
import { nodeResults } from "./objects/nodeResults";
import { drawing, Drawing } from "./drawing/drawing";
import { shellResults } from "./objects/shellResults";
import { frameColorMap } from "./objects/frameColorMap";

import "./styles.css";
import { getLegend } from "../color-map/getLegend";
import { getTheme, onThemeChange, ThemeColors } from "../theme";

export interface ViewerContext3D {
  scene: THREE.Scene;
  perspCamera: THREE.PerspectiveCamera;
  orthoCamera: THREE.OrthographicCamera;
  camera: THREE.Camera;
  controls: OrbitControls;
  renderer: THREE.WebGLRenderer;
  rendererElm: HTMLCanvasElement;
  render: () => void;
  setActiveCamera: (cam: THREE.Camera) => void;
  settings: Settings;
}

export function getViewer({
  mesh,
  settingsObj,
  drawingObj,
  objects3D,
  solids,
}: {
  mesh?: Mesh;
  settingsObj?: SettingsObj;
  drawingObj?: Drawing;
  objects3D?: State<THREE.Object3D[]>;
  solids?: State<THREE.Object3D[]>;
}): HTMLDivElement {
  // init
  THREE.Object3D.DEFAULT_UP = new THREE.Vector3(0, 0, 1);

  const viewerElm = document.createElement("div");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    1,
    0.1,
    2 * 1e6 // supported view till 1e6
  );
  const orthoCamera = new THREE.OrthographicCamera(-10, 10, 10, -10, -1000, 2e6);
  let activeCamera: THREE.Camera = camera;
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.localClippingEnabled = true;
  const controls = new OrbitControls(camera, renderer.domElement);

  const settings = getDefaultSettings(settingsObj);
  const derivedDisplayScale = van.derive(() =>
    settings.displayScale.val === 0
      ? 1
      : settings.displayScale.val > 0
      ? settings.displayScale.val
      : -1 / settings.displayScale.val
  );
  const derivedNodes = deriveNodes(mesh, settings);
  let gridObj = grid(settings.gridSize.rawVal);

  // update
  viewerElm.appendChild(getSettings(settings, mesh, solids));

  viewerElm.setAttribute("id", "viewer");
  viewerElm.appendChild(renderer.domElement);

  renderer.setPixelRatio(window.devicePixelRatio);
  const theme0 = getTheme();
  renderer.setClearColor(theme0.background, 1);

  const gridSize = settings.gridSize.rawVal;
  const z2fit = gridSize * 0.5 + (gridSize * 0.5) / Math.tan(45 * 0.5);
  camera.position.set(0.5 * gridSize, 0.8 * -z2fit, 0.5 * gridSize);
  controls.target.set(0.5 * gridSize, 0.5 * gridSize, 0);
  controls.minDistance = 1;
  controls.maxDistance = z2fit * 2.5;
  // Expose settings so the workspace Tweakpane can mutate them (e.g. auto-select
  // the default shell result each example wants to show).
  (viewerElm as any).__settings = settings;
  controls.zoomSpeed = 1.0;
  // Normaliza zoom: ignora la magnitud del deltaY del trackpad (que puede ser 100-300+
  // por gesto). Sin esto, un pinch de touchpad colapsa la cámara al 20% en un solo evento.
  (controls as any)._getZoomScale = function () {
    return Math.pow(0.95, this.zoomSpeed);
  };
  controls.update();

  scene.add(gridObj, axes(settings.gridSize.rawVal, settings.flipAxes.rawVal));

  // Events
  // on size change
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const width = entry.target?.clientWidth;
      const height = entry.target?.clientHeight;
      if (width === 0 || height === 0) continue;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const aspect = width / height;
      const frustumHalf = orthoCamera.top;
      orthoCamera.left = -frustumHalf * aspect;
      orthoCamera.right = frustumHalf * aspect;
      orthoCamera.updateProjectionMatrix();

      renderer.setSize(width, height);
      viewerRender();
    }
  });
  resizeObserver.observe(viewerElm);

  // on controls change
  controls.addEventListener("change", viewerRender);

  // on mesh or settings change: render
  van.derive(() => {
    mesh?.nodes?.val;
    mesh?.elements?.val;
    mesh?.nodeInputs?.val;
    mesh?.elementInputs?.val;
    mesh?.deformOutputs?.val;
    mesh?.analyzeOutputs?.val;

    settings.displayScale.val;
    settings.nodes.val;
    settings.elements.val;
    settings.elemColumns.val;
    settings.elemBeams.val;
    settings.nodesIndexes.val;
    settings.elementsIndexes.val;
    settings.orientations.val;
    settings.sections.val;
    settings.secColumns.val;
    settings.secBeams.val;
    settings.secFloor.val;
    settings.supports.val;
    settings.loads.val;
    settings.deformedShape.val;
    settings.nodeResults.val;
    settings.frameResults.val;
    settings.shellResults.val;

    setTimeout(viewerRender); // setTimeout to ensure render is called after all updates are done in that event tick
  });

  // Object's functions (Actions)
  function viewerRender() {
    renderer.render(scene, activeCamera);
  }

  function setActiveCamera(cam: THREE.Camera) {
    activeCamera = cam;
    controls.object = cam;
    controls.update();
    viewerRender();
  }

  // Optional inputs
  if (mesh) {
    // 3D objects
    scene.add(
      nodes(settings, derivedNodes, derivedDisplayScale),
      elements(mesh, settings, derivedNodes),
      nodesIndexes(settings, derivedNodes, derivedDisplayScale),
      elementsIndexes(mesh, settings, derivedNodes, derivedDisplayScale),
      supports(mesh, settings, derivedNodes, derivedDisplayScale),
      loads(mesh, settings, derivedNodes, derivedDisplayScale),
      orientations(mesh, settings, derivedNodes, derivedDisplayScale),
      sections(mesh, settings, derivedNodes, derivedDisplayScale),
      nodeResults(mesh, settings, derivedNodes, derivedDisplayScale),
      frameResults(mesh, settings, derivedNodes, derivedDisplayScale)
    );

    // Color map (shells)
    const colorMapValues = getColorMapValues(mesh, settings);
    const shellResultsObj = shellResults(
      mesh,
      settings,
      derivedNodes,
      colorMapValues
    );
    const legend = getLegend(colorMapValues);

    scene.add(shellResultsObj);
    viewerElm.appendChild(legend);

    // Frame contour colors
    const frameColorMapObj = frameColorMap(mesh, settings, derivedNodes, derivedDisplayScale);
    scene.add(frameColorMapObj);

    // Frame contour legend (reuse getLegend)
    const frameColorValues = (frameColorMapObj as any).__colorMapValues as State<number[]>;
    const frameLegend = getLegend(frameColorValues);
    frameLegend.id = "frame-legend"; // unique ID to avoid CSS collision
    viewerElm.appendChild(frameLegend);

    van.derive(() => {
      const shellActive = settings.shellResults.val != "none";
      const frameContourActive = settings.frameResults.val.startsWith("contour:");
      legend.hidden = !shellActive;
      shellResultsObj.visible = shellActive;
      frameLegend.hidden = !frameContourActive;
    });
  }

  if (solids) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0xffffff, 0.5);
    light1.position.set(30, 25, -10);
    light1.shadow.mapSize.width = 1024;
    light1.shadow.mapSize.height = 1024;
    scene.add(light1);

    const d = 10;
    light1.shadow.camera.left = -d;
    light1.shadow.camera.right = d;
    light1.shadow.camera.top = d;
    light1.shadow.camera.bottom = -d;
    light1.shadow.camera.far = 1000;

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light2.color.setHSL(11, 43, 96);
    light2.position.set(-10, 0, 30);
    scene.add(light2);

    // Events: on solids change add/remove objects from the scene
    van.derive(() => {
      if (!solids?.val.length) return;

      scene.remove(...solids.oldVal);

      scene.add(...solids.rawVal);

      viewerRender();
    });

    // Events: on solids settings change update visibility
    van.derive(() => {
      solids.rawVal.forEach((solid) => (solid.visible = settings.solids.val));

      viewerRender();
    });
  }

  if (objects3D) {
    // Tracking local de los objetos que AÑADIMOS a la scene. Esto es más robusto
    // que objects3D.oldVal (que puede quedar stale si múltiples derives disparan
    // en el mismo batch). Así evitamos duplicación de resortes.
    const addedObjs: THREE.Object3D[] = [];
    const shouldShow = (obj: any): boolean => {
      if (obj?.userData?.isCota) return settings.showCotas.val;
      return settings.custom3D.val;
    };
    const applyVisibility = () => {
      for (const obj of addedObjs) (obj as any).visible = shouldShow(obj);
      viewerRender();
    };

    van.derive(() => {
      const nextObjs = objects3D.val;
      // 1) Remover TODO lo que agregamos antes (sin confiar en oldVal)
      if (addedObjs.length) {
        scene.remove(...addedObjs);
        addedObjs.length = 0;
      }
      // 2) Añadir los nuevos y recordarlos
      if (nextObjs.length) {
        scene.add(...nextObjs);
        addedObjs.push(...nextObjs);
        applyVisibility();
      }
      viewerRender();
    });

    van.derive(() => { settings.custom3D.val; applyVisibility(); });
    van.derive(() => { settings.showCotas.val; applyVisibility(); });
  }

  if (drawingObj)
    drawing({
      drawingObj,
      gridObj,
      scene,
      camera,
      controls,
      gridSize,
      derivedDisplayScale,
      rendererElm: renderer.domElement,
      viewerRender,
    });

  // Theme change: update renderer, recreate grid, CSS vars, and re-render
  onThemeChange((_name, colors) => {
    renderer.setClearColor(colors.background, 1);
    // Recreate grid (GridHelper bakes colors into vertex buffer)
    scene.remove(gridObj);
    gridObj.geometry.dispose();
    (gridObj.material as THREE.Material).dispose();
    gridObj = grid(settings.gridSize.rawVal);
    scene.add(gridObj);
    // Update CSS custom properties for legend etc.
    viewerElm.style.setProperty("--awatif-legend-color", colors.legendMarker);
    viewerRender();
  });

  // Expose Three.js context for external use (view switching, etc.)
  const ctx: any = {
    scene,
    perspCamera: camera,
    orthoCamera,
    get camera() { return activeCamera; },
    controls,
    renderer,
    rendererElm: renderer.domElement,
    render: viewerRender,
    setActiveCamera,
    settings,
  };
  (viewerElm as any).__ctx = ctx as ViewerContext3D;

  return viewerElm;
}

// Utils
function deriveNodes(
  mesh: Mesh | undefined,
  settings: Settings
): Mesh["nodes"] {
  return van.derive(() => {
    if (!settings.deformedShape.val) return mesh?.nodes?.val ?? [];
    const nodes = mesh?.nodes?.val ?? [];
    const deforms = mesh?.deformOutputs?.val?.deformations;
    if (!deforms || nodes.length === 0) return nodes;
    // Escalas SEPARADAS: XY (en el plano horizontal) y Z (vertical).
    // Razón física: concreto y acero son axialmente RÍGIDOS (EA grande) mientras
    // que lateralmente SÍ se desplazan notablemente bajo sísmico/viento. El
    // usuario típicamente quiere ver sway lateral exagerado sin ver columnas
    // 'de alfeñique' aplastándose en Z.
    //
    //   Ux visible = Ux * deformScale                  (el plano)
    //   Uy visible = Uy * deformScale
    //   Uz visible = Uz * deformScale * deformScaleZ   (Z con multiplicador extra)
    //
    // Para placas/zapatas (modelos donde Uz ES la deformación principal, como
    // flexión out-of-plane), el workspace setea deformScaleZ=1.0. Para edificios,
    // ~0.15-0.30 para respetar la rigidez axial real.
    const scaleXY = settings.deformScale.val;
    const scaleZ = settings.deformScale.val * settings.deformScaleZ.val;
    const safeXY = Number.isFinite(scaleXY) ? scaleXY : 1;
    const safeZ  = Number.isFinite(scaleZ)  ? scaleZ  : 1;
    return nodes.map((node, index) => {
      const d = deforms.get(index)?.slice(0, 3) ?? [0, 0, 0];
      const dx = Number.isFinite(d[0]) ? d[0] : 0;
      const dy = Number.isFinite(d[1]) ? d[1] : 0;
      const dz = Number.isFinite(d[2]) ? d[2] : 0;
      return [
        node[0] + dx * safeXY,
        node[1] + dy * safeXY,
        node[2] + dz * safeZ,
      ] as Node;
    });
  });
}

// State global expuesto al legend/colormap para override de rango [min,max]
// Si es null → auto-escala. Si [a,b] → fijo.
export const fixedColorMapRange: State<[number, number] | null> = van.state(null as any);
/** Unidad del colormap actual (mm, kN/m², etc.) — se muestra arriba del legend */
export const colorMapUnit: State<string> = van.state("");

/**
 * Unidad de fuerza seleccionada globalmente por el usuario (Tweakpane "Unidades").
 * Valores soportados: "kN" | "tonf" | "kip". Afecta TODOS los colormaps que
 * muestran fuerzas/momentos/tensiones (membrane*, bending*, vonMises, pressure, etc.)
 * y el scaling de sus valores al unit preferido.
 */
export const colorMapForceUnit: State<"kN" | "tonf" | "kip"> = van.state("kN");
/**
 * Unidad de desplazamiento seleccionada globalmente. Afecta displacementX/Y/Z del colormap.
 * Valores soportados para ingeniería estructural: "mm" | "cm" | "m" | "in".
 */
export const colorMapDispUnit: State<"mm" | "cm" | "m" | "in"> = van.state("mm");

// Factores de conversión (mismos que units.ts del workspace, duplicados acá
// porque awatif-ui es un paquete independiente y no debe importar de examples/).
const FORCE_FACTORS = { kN: 1, tonf: 9.80665, kip: 4.4482216 };
const DISP_FACTORS = { mm: 1000, cm: 100, m: 1, in: 39.3700787402 };

function getColorMapValues(mesh: Mesh, settings: Settings): State<number[]> {
  // Init
  const colorMapValues = van.state([]);

  enum ResultType {
    bendingXX = "bendingXX",
    bendingYY = "bendingYY",
    bendingXY = "bendingXY",
    membraneXX = "membraneXX",
    membraneYY = "membraneYY",
    membraneXY = "membraneXY",
    tranverseShearX = "tranverseShearX",
    tranverseShearY = "tranverseShearY",
    vonMises = "vonMises",
    pressure = "pressure",
    displacementX = "displacementX",
    displacementY = "displacementY",
    displacementZ = "displacementZ",
  }

  // Events
  // On resultMapper, nodes, settings.shellResults change: get new values
  van.derive(() => {
    const nodeBendingXX = new Map<number, number[]>();
    const nodeBendingYY = new Map<number, number[]>();
    const nodeBendingXY = new Map<number, number[]>();
    const nodeMembraneXX = new Map<number, number[]>();
    const nodeMembraneYY = new Map<number, number[]>();
    const nodeMembraneXY = new Map<number, number[]>();
    const nodeShearX = new Map<number, number[]>();
    const nodeShearY = new Map<number, number[]>();
    const nodeVonMises = new Map<number, number[]>();
    const nodePressure = new Map<number, number[]>();

    // Map element results to node values.
    // Supports 3-node (triangle) and 4-node (quad) elements.
    const mapResultToNodes = (
      resultMap: Map<number, number[]> | undefined,
      nodeMap: Map<number, number[]>
    ) => {
      resultMap?.forEach((vals, elementIndex) => {
        const elem = mesh.elements.val[elementIndex];
        if (!elem) return;
        for (let i = 0; i < elem.length; i++) {
          nodeMap.set(elem[i], [vals[i] ?? vals[0]]);
        }
      });
    };

    mapResultToNodes(mesh.analyzeOutputs?.val?.bendingXX, nodeBendingXX);
    mapResultToNodes(mesh.analyzeOutputs?.val?.bendingYY, nodeBendingYY);
    mapResultToNodes(mesh.analyzeOutputs?.val?.bendingXY, nodeBendingXY);
    mapResultToNodes(mesh.analyzeOutputs?.val?.membraneXX, nodeMembraneXX);
    mapResultToNodes(mesh.analyzeOutputs?.val?.membraneYY, nodeMembraneYY);
    mapResultToNodes(mesh.analyzeOutputs?.val?.membraneXY, nodeMembraneXY);
    mapResultToNodes(mesh.analyzeOutputs?.val?.tranverseShearX, nodeShearX);
    mapResultToNodes(mesh.analyzeOutputs?.val?.tranverseShearY, nodeShearY);
    mapResultToNodes(mesh.analyzeOutputs?.val?.vonMises, nodeVonMises);
    mapResultToNodes((mesh.analyzeOutputs?.val as any)?.pressure, nodePressure);

    // Override POR CAMPO: colorMapRanges[field] define rango fijo sólo para ese shell result.
    // Campos no listados → auto-escala (bendingXX, vonMises, etc. conservan su gradiente natural).
    const ranges = (mesh.analyzeOutputs?.val as any)?.colorMapRanges;
    const currentField = settings.shellResults.val;
    const r = ranges?.[currentField];
    fixedColorMapRange.val = (Array.isArray(r) && r.length === 2) ? [r[0], r[1]] : null;

    const resultMapper = {
      [ResultType.bendingXX]: [nodeBendingXX, 0],
      [ResultType.bendingYY]: [nodeBendingYY, 0],
      [ResultType.bendingXY]: [nodeBendingXY, 0],
      [ResultType.membraneXX]: [nodeMembraneXX, 0],
      [ResultType.membraneYY]: [nodeMembraneYY, 0],
      [ResultType.membraneXY]: [nodeMembraneXY, 0],
      [ResultType.tranverseShearX]: [nodeShearX, 0],
      [ResultType.tranverseShearY]: [nodeShearY, 0],
      [ResultType.vonMises]: [nodeVonMises, 0],
      [ResultType.pressure]: [nodePressure, 0],
      [ResultType.displacementX]: [mesh.deformOutputs?.val?.deformations, 0],
      [ResultType.displacementY]: [mesh.deformOutputs?.val?.deformations, 1],
      [ResultType.displacementZ]: [mesh.deformOutputs?.val?.deformations, 2],
    };

    // Escalas + unidades por tipo de resultado, reactivas a colorMapForceUnit
    // y colorMapDispUnit (el usuario los mueve desde el folder "Unidades").
    //
    //   Internamente, TODO viene en kN (force), kN·m/m (bending moment/width),
    //   kN/m (membrane force/length, transverse shear), kN/m² (stress: vonMises, pressure)
    //   y m (displacement). El colormap los re-escala al unit seleccionado.
    const field = settings.shellResults.val;
    const fUnit = colorMapForceUnit.val;
    const dUnit = colorMapDispUnit.val;
    const isDisp = field === "displacementX" || field === "displacementY" || field === "displacementZ";
    const isBending = field === "bendingXX" || field === "bendingYY" || field === "bendingXY";
    const isMembrane = field === "membraneXX" || field === "membraneYY" || field === "membraneXY";
    const isStress = field === "vonMises" || field === "pressure";
    const isShear = field === "tranverseShearX" || field === "tranverseShearY";

    // Factor de escala UI: convierte valor SI → valor UI (para mostrar en el legend).
    // - Disp: multiplica por el factor dispUnit (mm=1000, cm=100, µm=1e6)
    // - Fuerza/tensión/momento: divide por el factor forceUnit (kN=1, tonf=9.80665, kip=4.44822)
    //   porque 1 tonf = 9.80665 kN ⇒ X kN = X/9.80665 tonf
    const scale = isDisp ? DISP_FACTORS[dUnit] :
                  (isBending || isMembrane || isStress || isShear) ? 1 / FORCE_FACTORS[fUnit] :
                  1;

    // Sufijo de unidad en el legend. Plane-stress real (σ) es kN/m² y
    // membrane-force (N = σ·t) es kN/m: ambos se distinguen por convención
    // del ejemplo. Acá asumimos que membrane* = stress (plane Q4) en kN/m².
    //   - si un ejemplo quiere usar membrane* como FORCE/m, que setee
    //     analyzeOutputs.colorMapUnitOverride (TODO futuro).
    const unit =
      isDisp     ? dUnit :
      isBending  ? `${fUnit}·m/m` :
      isMembrane ? `${fUnit}/m²` :            // stress de plane Q4
      isStress   ? `${fUnit}/m²` :
      isShear    ? `${fUnit}/m` :
      "";
    colorMapUnit.val = unit;

    const values: number[] = [];
    mesh.nodes.val.forEach((_, i) => {
      const resultMap = resultMapper[field];
      if (!resultMap || !resultMap[0] || typeof resultMap[0].has !== 'function') return;
      if (!resultMap[0].has(i)) {
        values.push(Number.NaN);
        return;
      }
      const entry = resultMap[0].get(i);
      const raw = entry ? entry[resultMap[1] as number] ?? 0 : 0;
      values.push(raw * scale);
    });

    colorMapValues.val = values;
  });

  return colorMapValues;
}

