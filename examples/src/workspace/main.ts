import van, { State } from "vanjs-core";
import {
  NodeInputs,
  ElementInputs,
  DeformOutputs,
  AnalyzeOutputs,
  Element,
  Node,
} from "awatif-fem";
import { getToolbar, getParameters, Parameters, getViewer } from "awatif-ui";
import { getCad3d } from "../shared/getCad3d";

// ============================================================================
// Workspace — Blank start, use FEM Studio buttons for examples
// Modal analysis is now integrated in getCad3d (⚡ Modal button)
// ============================================================================

// Empty initial parameters (will be replaced by FEM Studio generator)
const parameters: Parameters = {};

const nodes: State<Node[]> = van.state([]);
const elements: State<Element[]> = van.state([]);
const nodeInputs: State<NodeInputs> = van.state({});
const elementInputs: State<ElementInputs> = van.state({});
const deformOutputs: State<DeformOutputs> = van.state({});
const analyzeOutputs: State<AnalyzeOutputs> = van.state({});

// Settings object (shared so we can update gridSize)
const settingsObj: Record<string, any> = {
  deformedShape: true,
  shellResults: "displacementZ",
  gridSize: 15,
};

// Build UI
document.body.append(
  getCad3d({
    nodes,
    elements,
    nodeInputs,
    elementInputs,
    deformOutputs,
    analyzeOutputs,
  }),
  getParameters(parameters),
  getViewer({
    mesh: {
      nodes,
      elements,
      nodeInputs,
      elementInputs,
      deformOutputs,
      analyzeOutputs,
    },
    settingsObj,
  }),
  getToolbar({
    sourceCode:
      "https://github.com/madil4/awatif/blob/main/examples/src/beams/main.ts",
    author: "https://www.linkedin.com/in/madil4/",
  })
);
