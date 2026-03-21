import { State } from "vanjs-core";

// Analytical Model
export type Mesh = {
  nodes?: State<Node[]>;
  elements?: State<Element[]>;
  nodeInputs?: State<NodeInputs>;
  elementInputs?: State<ElementInputs>;
  deformOutputs?: State<DeformOutputs>;
  analyzeOutputs?: State<AnalyzeOutputs>;
};

// The geometry of any structure can be represented by these two entities:
export type Node = [number, number, number]; // position coordinates [x,y,z]
export type Element = number[]; // indices of the nodes list

export type NodeInputs = {
  supports?: Map<
    number,
    [boolean, boolean, boolean, boolean, boolean, boolean]
  >;
  loads?: Map<number, [number, number, number, number, number, number]>;
};

export type SectionShape = {
  type: "rect" | "circ" | "I" | "HSS" | "CFT";  // rectangular, circular, I-beam, hollow rectangular, concrete-filled tube
  b?: number;   // width (rect) or flange width (I) or outer width (HSS)
  h?: number;   // height (rect) or depth (I) or outer height (HSS)
  d?: number;   // diameter (circ)
  tw?: number;  // web thickness (I) or wall thickness (HSS)
  tf?: number;  // flange thickness (I)
  name?: string; // profile name e.g. "W14x82", or dimension label
};

export type ElementInputs = {
  elasticities?: Map<number, number>;
  elasticitiesOrthogonal?: Map<number, number>;
  shearModuli?: Map<number, number>;
  areas?: Map<number, number>;
  momentsOfInertiaZ?: Map<number, number>;
  momentsOfInertiaY?: Map<number, number>;
  torsionalConstants?: Map<number, number>;
  thicknesses?: Map<number, number>;
  poissonsRatios?: Map<number, number>;
  densities?: Map<number, number>; // mass density per element (rho)
  polarMomentsOfInertia?: Map<number, number>; // I0 (polar moment of inertia, Paz formulation)
  sectionShapes?: Map<number, SectionShape>; // visual section data for rendering
};

export type DeformOutputs = {
  deformations?: Map<number, [number, number, number, number, number, number]>;
  reactions?: Map<number, [number, number, number, number, number, number]>;
};

export type AnalyzeOutputs = {
  normals?: Map<number, [number, number]>;
  shearsY?: Map<number, [number, number]>;
  shearsZ?: Map<number, [number, number]>;
  torsions?: Map<number, [number, number]>;
  bendingsY?: Map<number, [number, number]>;
  bendingsZ?: Map<number, [number, number]>;
  bendingXX?: Map<number, [number, number, number]>;
  bendingYY?: Map<number, [number, number, number]>;
  bendingXY?: Map<number, [number, number, number]>;
  membraneXX?: Map<number, [number, number, number]>;
  membraneYY?: Map<number, [number, number, number]>;
  membraneXY?: Map<number, [number, number, number]>;
  tranverseShearX?: Map<number, [number, number, number]>;
  tranverseShearY?: Map<number, [number, number, number]>;
};

export type ModalOutputs = {
  frequencies?: number[];    // natural frequencies [Hz]
  modeShapes?: number[][];   // mode shapes [mode_index][dof_index]
  massParticipation?: number[][]; // [mode_index][6] ratios (ux,uy,uz,rx,ry,rz)
};
