/**
 * 💻 Hekatan-UI · CLI module
 *
 *  Terminal flotante con API `cad.*` programable estilo SAP/OpenSees.
 *  Permite construir modelos por código en el navegador.
 */
export { createCliPanel } from "./getCliPanel";
export type { CliPanelApi, CliPanelOptions } from "./getCliPanel";
export { buildCadApi, evalCliLine, getCliHelp } from "./cliCommands";
export type { CadApi, CliBindings } from "./cliCommands";
