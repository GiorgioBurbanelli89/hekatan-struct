export * from "./data-model";

export { analyze } from "./analyze";
// export { deform } from "./deform";
export { deformCpp as deform } from "./deformCpp";

export { modalCpp as modalAnalysis } from "./modalCpp";
export { modalPazCpp as modalAnalysisPaz } from "./modalPazCpp";

export { slopeSRM } from "./slopeCpp";
export type { SlopeInput, SlopeOutput } from "./slopeCpp";

export { plateQ4Solve } from "./plateQ4Cpp";
export type {
  PlateQ4Input,
  PlateQ4Output,
  PlateQ4NodeResult,
  PlateQ4ElementResult,
} from "./plateQ4Cpp";

// Internal utils exposed for FEM inspection/debugging
export { getLocalStiffnessMatrix } from "./utils/getLocalStiffnessMatrix";
export { getTransformationMatrix } from "./utils/getTransformationMatrix";
