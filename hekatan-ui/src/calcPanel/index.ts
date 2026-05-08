/**
 * 🧮 Hekatan-UI · Calc Panel module
 *
 *  Calculadora simbólica con editor + output KaTeX.
 *  Acepta variables del modelo FEM activas (nodes, elements, K, M, F, u).
 */
export { createCalcPanel } from "./getCalcPanel";
export type { CalcPanelApi, CalcPanelOptions } from "./getCalcPanel";
export {
  evaluateBlock, buildModelVars, getDefaultTemplate, formatLatex,
} from "./calcEngine";
export type { EvaluatedCell, CalcEngineContext, CellType } from "./calcEngine";
