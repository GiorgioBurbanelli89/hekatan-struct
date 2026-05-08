/**
 * 🛠 Hekatan-UI · FEM Tools module
 *
 *  Orquestador unificado de los paneles flotantes FEM Studio:
 *  Inspect, Modal+, Solver Log, Calc, CLI, Report, Calcular.
 *
 *  API pública:
 *    • attachFemTools(pane, ctx)  — agrega folder Tweakpane completo
 *    • FemToolsRegistry           — singletons lazy (uso avanzado)
 *    • getSharedFemToolsRegistry  — registry compartido en el workspace
 */
export { attachFemTools } from "./attachFemTools";
export type { AttachFemToolsOptions } from "./attachFemTools";
export {
  FemToolsRegistry,
  getSharedFemToolsRegistry,
} from "./femToolsRegistry";
export type { FemToolsContext } from "./femToolsRegistry";
