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
  type: "rect" | "circ" | "I" | "HSS" | "CFT" | "L" | "2L" | "C" | "2C" | "T" | "pipe" | "coldC";
  // rect: rectangular | circ: circular | I: I/W beam | HSS: hollow rect tube
  // CFT: concrete-filled tube | L: angle | 2L: double angle
  // C: channel | 2C: double channel | T: tee | pipe: circular hollow
  // coldC: cold-formed C/Z
  b?: number;   // width (rect) or flange width (I/C/T) or leg width (L) or outer width (HSS)
  h?: number;   // height (rect) or depth (I/C/T) or leg height (L) or outer height (HSS)
  d?: number;   // diameter (circ/pipe)
  tw?: number;  // web thickness (I/C/T) or wall thickness (HSS/pipe) or leg thickness (L)
  tf?: number;  // flange thickness (I/C/T)
  t?: number;   // uniform thickness (L/coldC)
  r?: number;   // corner radius (HSS/CFT/coldC)
  lip?: number; // lip length (coldC)
  dis?: number; // separation between shapes (2L/2C)
  name?: string; // profile name e.g. "W14x82", "L50x3", "C100x50x2"
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
  shearAreasY?: Map<number, number>; // shear area in Y direction (Timoshenko beam)
  shearAreasZ?: Map<number, number>; // shear area in Z direction (Timoshenko beam)
  rigidOffsets?: Map<number, [number, number]>; // [offsetI, offsetJ] rigid zone factors (0-1) at each end
  // Frame releases via static condensation. Two formats:
  //  6 flags: [TI,M2I,M3I, TJ,M2J,M3J]  (rotational only, legacy)
  // 12 flags: [FxI,FyI,FzI,TI,M2I,M3I, FxJ,FyJ,FzJ,TJ,M2J,M3J] (all DOFs, like ETABS)
  momentReleases?: Map<number, boolean[]>;
  // Partial fixity springs (semi-rigid connections), kip/in or kN/m, kip-in/rad or kN-m/rad
  // 12 values: [kFxI,kFyI,kFzI,kTI,kM2I,kM3I, kFxJ,kFyJ,kFzJ,kTJ,kM2J,kM3J]
  // 0 = no spring (fully released if release=true, fully fixed if release=false)
  // >0 = partial fixity spring stiffness
  partialFixitySprings?: Map<number, number[]>;
  insertionPoints?: Map<number, [number, number]>; // [dy, dz] offset from centroid in local coords
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
  bendingXX?: Map<number, number[]>;
  bendingYY?: Map<number, number[]>;
  bendingXY?: Map<number, number[]>;
  membraneXX?: Map<number, number[]>;
  membraneYY?: Map<number, number[]>;
  membraneXY?: Map<number, number[]>;
  tranverseShearX?: Map<number, number[]>;
  tranverseShearY?: Map<number, number[]>;
  vonMises?: Map<number, number[]>;
  /** Presión de contacto Winkler/soil (kN/m² o tonf/m²). Usado por zapatas con springs. */
  pressure?: Map<number, number[]>;
  /**
   * Override opcional del rango [min, max] del colormap por campo específico.
   * Keys: "pressure", "bendingXX", "vonMises", etc. (los del shell results dropdown).
   * Cualquier campo no listado aquí usa auto-escala.
   * Útil p.ej. para zapata: { pressure: [0, -q_adm] } fija rango de pressure pero NO afecta bendingXX.
   */
  colorMapRanges?: Record<string, [number, number]>;
};

export type ModalOutputs = {
  frequencies?: number[];    // natural frequencies [Hz]
  modeShapes?: number[][];   // mode shapes [mode_index][dof_index]
  massParticipation?: number[][]; // [mode_index][6] ratios (ux,uy,uz,rx,ry,rz)
};
