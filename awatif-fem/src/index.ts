export * from "./data-model";

export { analyze } from "./analyze";
// export { deform } from "./deform";
export { deformCpp as deform } from "./deformCpp";

export { modalCpp as modalAnalysis } from "./modalCpp";
export { modalPazCpp as modalAnalysisPaz } from "./modalPazCpp";

export { slopeSRM } from "./slopeCpp";
export type { SlopeInput, SlopeOutput } from "./slopeCpp";

export { plateQ4Solve } from "./plateQ4Cpp";
export { didacticSolveCpp } from "./didacticCpp";
export type { DidacticSolverResult, DidacticElementData } from "./didacticCpp";
export type {
  PlateQ4Input,
  PlateQ4Output,
  PlateQ4NodeResult,
  PlateQ4ElementResult,
} from "./plateQ4Cpp";

// Plane Q4 (plane stress, pure TS — independent of C++ plateQ4)
export { planeQ4Solve } from "./planeQ4";
export type {
  PlaneQ4Input,
  PlaneQ4Output,
  PlaneQ4NodeResult,
  PlaneQ4ElementResult,
} from "./planeQ4";

// MITC3 triangular plate bending (Bathe 2013 MITC3+, pure TS)
export { mitc3Solve } from "./mitc3";
export type {
  Mitc3Input,
  Mitc3Output,
  Mitc3NodeResult,
  Mitc3ElementResult,
} from "./mitc3";

// Internal utils exposed for FEM inspection/debugging
export { getLocalStiffnessMatrix } from "./utils/getLocalStiffnessMatrix";
export { getTransformationMatrix } from "./utils/getTransformationMatrix";
