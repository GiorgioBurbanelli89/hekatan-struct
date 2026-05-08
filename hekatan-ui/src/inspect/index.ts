/**
 * 🔍 Hekatan-UI · Inspect module
 *
 * Panel didáctico FEM por elemento — el usuario hace click en un elemento
 * del modelo, y aparece un panel flotante con:
 *   - Tab "Tabla":      Propiedades + K_local + T + K_global
 *   - Tab "Matemática": derivación KaTeX paso a paso
 *   - Tab "Resumen":    info ejecutiva + botones copy K
 */
export { createInspectPanel } from "./getInspectPanel";
export type { InspectElementData, InspectPanelApi } from "./getInspectPanel";
export {
  computeFrameMatrices,
  localStiffness12,
  directionCosines,
  buildT12,
  matrixToText,
} from "./elementMath";
export type {
  FrameElementProps,
  FrameElementGeom,
  FrameMatrices,
} from "./elementMath";
