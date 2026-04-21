import van, { State } from "vanjs-core";
import { Pane } from "tweakpane";
import { Mesh } from "awatif-fem";

import "./styles.css";

// Todo: Remove this duplicated Settings type (might not be possible to remove it)
export type Settings = {
  gridSize: State<number>;
  displayScale: State<number>;
  nodes: State<boolean>;
  elements: State<boolean>;
  elemColumns: State<boolean>;
  elemBeams: State<boolean>;
  nodesIndexes: State<boolean>;
  elementsIndexes: State<boolean>;
  orientations: State<boolean>;
  sections: State<boolean>;
  secColumns: State<boolean>;
  secBeams: State<boolean>;
  secFloor: State<number>;  // -1=all, 0=piso1, 1=piso2...
  supports: State<boolean>;
  loads: State<boolean>;
  deformedShape: State<boolean>;
  nodeResults: State<string>;
  frameResults: State<string>;
  shellResults: State<string>;
  solids: State<boolean>;
  flipAxes: State<boolean>;
  /** Resortes/objetos custom 3D (zigzags Winkler en zapatas, etc.) on/off */
  custom3D: State<boolean>;
};

export type SettingsObj = {
  gridSize?: number;
  displayScale?: number;
  nodes?: boolean;
  elements?: boolean;
  elemColumns?: boolean;
  elemBeams?: boolean;
  nodesIndexes?: boolean;
  elementsIndexes?: boolean;
  orientations?: boolean;
  sections?: boolean;
  secColumns?: boolean;
  secBeams?: boolean;
  secFloor?: number;
  supports?: boolean;
  loads?: boolean;
  deformedShape?: boolean;
  nodeResults?: string;
  frameResults?: string;
  shellResults?: string;
  flipAxes?: boolean;
  solids?: boolean;
  custom3D?: boolean;
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

  // update
  container.setAttribute("id", "settings");

  if (mesh?.nodes) {
    pane.addBinding(settings.displayScale, "val", {
      label: "Display scale",
      min: -10,
      max: 10,
      step: 1,
    });
    pane.addBinding(settings.nodes, "val", { label: "Nodes" });
    pane.addBinding(settings.elements, "val", {
      label: "Elements",
    });
    pane.addBinding(settings.elemColumns, "val", {
      label: "  Columnas",
    });
    pane.addBinding(settings.elemBeams, "val", {
      label: "  Vigas",
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
  }

  if (mesh?.deformOutputs || mesh?.analyzeOutputs) {
    const outputs = pane.addFolder({ title: "Analysis Outputs" });

    outputs.addBinding(settings.nodeResults, "val", {
      options: {
        none: "none",
        deformations: "deformations",
        reactions: "reactions",
      },
      label: "Node results",
    });

    outputs.addBinding(settings.frameResults, "val", {
      options: {
        none: "none",
        normals: "normals",
        shearsY: "shearsY",
        shearsZ: "shearsZ",
        torsions: "torsions",
        bendingsY: "bendingsY",
        bendingsZ: "bendingsZ",
        "contour:normals": "contour:normals",
        "contour:shearsY": "contour:shearsY",
        "contour:shearsZ": "contour:shearsZ",
        "contour:torsions": "contour:torsions",
        "contour:bendingsY": "contour:bendingsY",
        "contour:bendingsZ": "contour:bendingsZ",
      },
      label: "Frame results",
    });

    outputs.addBinding(settings.shellResults, "val", {
      options: {
        none: "none",
        bendingXX: "bendingXX",
        bendingYY: "bendingYY",
        bendingXY: "bendingXY",
        membraneXX: "membraneXX",
        membraneYY: "membraneYY",
        membraneXY: "membraneXY",
        shearX: "tranverseShearX",
        shearY: "tranverseShearY",
        vonMises: "vonMises",
        pressure: "pressure",
        displacementX: "displacementX",
        displacementY: "displacementY",
        displacementZ: "displacementZ",
      },
      label: "Shell results",
    });

    outputs.addBinding(settings.deformedShape, "val", {
      label: "Deformed shape",
    });
  }

  if (solids) pane.addBinding(settings.solids, "val", { label: "Solids" });

  return container;
}

// Utils
export function getDefaultSettings(settingsObj: SettingsObj): Settings {
  return {
    gridSize: van.state(settingsObj?.gridSize ?? 20),
    displayScale: van.state(settingsObj?.displayScale ?? 1),
    nodes: van.state(settingsObj?.nodes ?? true),
    elements: van.state(settingsObj?.elements ?? true),
    elemColumns: van.state(settingsObj?.elemColumns ?? true),
    elemBeams: van.state(settingsObj?.elemBeams ?? true),
    nodesIndexes: van.state(settingsObj?.nodesIndexes ?? false),
    elementsIndexes: van.state(settingsObj?.elementsIndexes ?? false),
    orientations: van.state(settingsObj?.orientations ?? false),
    sections: van.state(settingsObj?.sections ?? true),
    secColumns: van.state(settingsObj?.secColumns ?? true),
    secBeams: van.state(settingsObj?.secBeams ?? true),
    secFloor: van.state(settingsObj?.secFloor ?? -1),
    supports: van.state(settingsObj?.supports ?? true),
    loads: van.state(settingsObj?.loads ?? false),
    deformedShape: van.state(settingsObj?.deformedShape ?? false),
    nodeResults: van.state(settingsObj?.nodeResults ?? "none"),
    frameResults: van.state(settingsObj?.frameResults ?? "none"),
    shellResults: van.state(settingsObj?.shellResults ?? "none"),
    flipAxes: van.state(settingsObj?.flipAxes ?? false),
    solids: van.state(settingsObj?.solids ?? true),
    custom3D: van.state(settingsObj?.custom3D ?? true),
  };
}
