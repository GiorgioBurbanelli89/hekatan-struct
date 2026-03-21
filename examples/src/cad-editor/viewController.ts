import * as THREE from "three";
import van from "vanjs-core";
import { Pane, FolderApi } from "tweakpane";
import type { CadState, ViewerContext, ViewMode } from "./types";
import { getGridBounds, getStoryOptions, getAxisOptions } from "./gridSystem";
import {
  setPerspectiveView,
  setPlanView,
  setElevationXView,
  setElevationYView,
} from "./cadViewerSetup";

/**
 * Creates the Tweakpane settings panel for views + visibility.
 * Returns the container HTMLElement to append to the page.
 */
export function createViewPanel(
  state: CadState,
  ctx: ViewerContext
): HTMLElement {
  const container = document.createElement("div");
  container.id = "cad-panel";

  // Internal state for tweakpane bindings
  const panelState = {
    viewMode: "3d" as string,
    selector: "" as string,
    sectionPos: 0,
    showGrid: true,
    showLabels: true,
    showNodes: true,
    showFrames: true,
    showAreas: true,
  };

  const pane = new Pane({ title: "FEM Studio", container, expanded: true });

  // === Views folder (rebuilt dynamically) ===
  let viewFolder: FolderApi = pane.addFolder({ title: "Vistas" });

  function buildViewFolder() {
    // Remove and recreate to avoid duplicate bindings
    viewFolder.dispose();
    viewFolder = pane.addFolder({ title: "Vistas", index: 0 });

    // View mode dropdown
    viewFolder.addBinding(panelState, "viewMode", {
      label: "Vista",
      options: {
        "3D": "3d",
        Planta: "plan",
        "Elev X": "elevationX",
        "Elev Y": "elevationY",
        Corte: "section",
      },
    });

    // Dynamic selector based on view mode
    const grid = state.grid.val;
    const mode = panelState.viewMode as ViewMode;
    let opts: Record<string, string> = {};
    let label = "Nivel/Eje";
    let showSection = false;

    switch (mode) {
      case "plan":
        opts = getStoryOptions(grid);
        label = "Nivel";
        break;
      case "elevationX":
        opts = getAxisOptions(grid, "Y");
        label = "Eje Y";
        break;
      case "elevationY":
        opts = getAxisOptions(grid, "X");
        label = "Eje X";
        break;
      case "section":
        opts = { X: "X", Y: "Y" };
        label = "Direccion";
        showSection = true;
        break;
      default:
        opts = { "(ninguno)": "" };
        label = "Nivel/Eje";
        break;
    }

    const keys = Object.keys(opts);
    if (keys.length > 0 && !Object.values(opts).includes(panelState.selector)) {
      panelState.selector = opts[keys[0]];
    }

    viewFolder.addBinding(panelState, "selector", {
      label,
      options: keys.length > 0 ? opts : { "(ninguno)": "" },
    });

    if (showSection) {
      const bounds = getGridBounds(grid);
      viewFolder.addBinding(panelState, "sectionPos", {
        label: "Posicion",
        min: Math.min(bounds.minX, bounds.minY) - 2,
        max: Math.max(bounds.maxX, bounds.maxY) + 2,
        step: 0.5,
      });
    }
  }

  buildViewFolder();

  // === Grid folder ===
  const gridFolder = pane.addFolder({ title: "Grid" });
  gridFolder.addBinding(panelState, "showGrid", { label: "Mostrar grid" });
  gridFolder.addBinding(panelState, "showLabels", { label: "Mostrar labels" });

  // === Model folder ===
  const modelFolder = pane.addFolder({ title: "Modelo" });
  modelFolder.addBinding(panelState, "showNodes", { label: "Nodos" });
  modelFolder.addBinding(panelState, "showFrames", { label: "Frames" });
  modelFolder.addBinding(panelState, "showAreas", { label: "Areas" });

  // === Events ===
  pane.on("change", (e: any) => {
    const key = e.target?.key;
    if (!key) return;

    switch (key) {
      case "viewMode":
        state.viewMode.val = panelState.viewMode as ViewMode;
        buildViewFolder();
        applyView();
        break;
      case "selector":
        if (panelState.viewMode === "plan") {
          state.activeStory.val = panelState.selector;
        } else {
          state.activeAxis.val = panelState.selector;
        }
        applyView();
        break;
      case "sectionPos":
        state.sectionPosition.val = panelState.sectionPos;
        applySectionCut();
        break;
      case "showGrid":
        state.showGrid.val = panelState.showGrid;
        break;
      case "showLabels":
        state.showLabels.val = panelState.showLabels;
        break;
      case "showNodes":
        state.showNodes.val = panelState.showNodes;
        break;
      case "showFrames":
        state.showFrames.val = panelState.showFrames;
        break;
      case "showAreas":
        state.showAreas.val = panelState.showAreas;
        break;
    }
  });

  // --- View application ---

  function applyView() {
    const grid = state.grid.val;
    const bounds = getGridBounds(grid);
    const center = new THREE.Vector3(bounds.centerX, bounds.centerY, bounds.centerZ);
    const extent = bounds.maxDim;

    ctx.renderer.clippingPlanes = [];

    switch (panelState.viewMode as ViewMode) {
      case "3d":
        setPerspectiveView(ctx, center, extent);
        break;
      case "plan": {
        const story = grid.stories.find((s) => s.name === panelState.selector);
        const z = story?.elevation ?? bounds.centerZ;
        setPlanView(ctx, new THREE.Vector3(bounds.centerX, bounds.centerY, z), extent);
        break;
      }
      case "elevationX": {
        const yAxis = grid.y.axes.find((a) => a.name === panelState.selector);
        const y = yAxis?.position ?? bounds.centerY;
        setElevationXView(ctx, new THREE.Vector3(bounds.centerX, y, bounds.centerZ), extent);
        break;
      }
      case "elevationY": {
        const xAxis = grid.x.axes.find((a) => a.name === panelState.selector);
        const x = xAxis?.position ?? bounds.centerX;
        setElevationYView(ctx, new THREE.Vector3(x, bounds.centerY, bounds.centerZ), extent);
        break;
      }
      case "section":
        applySectionCut();
        setPerspectiveView(ctx, center, extent);
        break;
    }
  }

  function applySectionCut() {
    if ((panelState.viewMode as ViewMode) !== "section") {
      ctx.renderer.clippingPlanes = [];
      return;
    }
    const pos = panelState.sectionPos;
    const normal = panelState.selector === "X"
      ? new THREE.Vector3(-1, 0, 0)
      : new THREE.Vector3(0, -1, 0);
    ctx.renderer.clippingPlanes = [new THREE.Plane(normal, pos)];
    ctx.render();
  }

  // --- Public method for CLI ---
  (container as any).applyView = (mode: ViewMode, selectorValue?: string) => {
    panelState.viewMode = mode;
    state.viewMode.val = mode;
    if (selectorValue) {
      panelState.selector = selectorValue;
      if (mode === "plan") state.activeStory.val = selectorValue;
      else state.activeAxis.val = selectorValue;
    }
    buildViewFolder();
    applyView();
  };

  return container;
}
