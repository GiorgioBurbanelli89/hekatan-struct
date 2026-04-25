/**
 * Legacy awatif examples (rebrandeados como Hekatan).
 *
 * Estos ejemplos provienen del repo upstream de Mohamed Adil (madil4/awatif) y
 * usan el patrón "VanJS toolbar" propio de awatif (no el flujo Tweakpane que
 * usan los ejemplos parametrizados nuevos de Hekatan).
 *
 * Cada uno se compila como una página standalone (`/<id>/index.html`) con
 * `vite.config.ts`. El workspace los registra para que sean cazables desde el
 * selector unificado, y al elegir uno se navega al index.html standalone.
 *
 * Convenciones para añadir un legacy nuevo:
 *   - id: igual al folder en `examples/src/`
 *   - name: nombre con marca Hekatan (ej. "Hekatan – 1D Mesh")
 *   - category: agrupa en el selector ("Legacy · …")
 *   - standaloneUrl: ruta relativa a `/workspace/` (ej. "../1d-mesh/")
 *
 * NOTA: cuando alguno de estos ejemplos se "gradúe" al patrón ExampleDef
 * (Tweakpane integrado), se mueve fuera de este archivo y se registra como
 * los demás (con params + build).
 */

import type { ExampleDef } from "./exampleRegistry";

/** Helper para crear una entrada legacy mínima. */
function legacy(id: string, name: string, category: string): ExampleDef {
  return {
    id,
    name,
    category,
    standaloneUrl: `../${id}/`,
  };
}

// ─── FEM básico ──────────────────────────────────────────────────────
export const legacy1dMesh       = legacy("1d-mesh",       "Hekatan – 1D Mesh",          "Legacy · FEM básico");
export const legacy2dMesh       = legacy("2d-mesh",       "Hekatan – 2D Mesh",          "Legacy · FEM básico");
export const legacy3dStructure  = legacy("3d-structure",  "Hekatan – 3D Structure",     "Legacy · FEM básico");

// ─── Frames y trusses ────────────────────────────────────────────────
export const legacyAxialBar     = legacy("axial-bar",     "Hekatan – Axial Bar",        "Legacy · Frames");
export const legacyTruss        = legacy("truss",         "Hekatan – Truss",            "Legacy · Frames");
export const legacyAdvancedTruss= legacy("advanced-truss","Hekatan – Advanced Truss",   "Legacy · Frames");
export const legacyBeams        = legacy("beams",         "Hekatan – Paz 6.3 Space Frame", "Legacy · Frames");

// ─── Edificios ──────────────────────────────────────────────────────
export const legacyBuilding     = legacy("building",      "Hekatan – Building (upstream)", "Legacy · Edificios");

// ─── Placas ─────────────────────────────────────────────────────────
export const legacyPlate        = legacy("plate",         "Hekatan – Plate (legacy)",   "Legacy · Placas");
export const legacyPlateQ4      = legacy("plate-q4",      "Hekatan – Plate Q4 Studio",  "Legacy · Placas");

// ─── Visualización / didácticos ─────────────────────────────────────
export const legacyColorMap     = legacy("color-map",     "Hekatan – Color Map demo",   "Legacy · Visualización");
export const legacyCurves       = legacy("curves",        "Hekatan – Curves demo",      "Legacy · Visualización");
export const legacyDrawing      = legacy("drawing",       "Hekatan – Drawing canvas",   "Legacy · Visualización");
export const legacyTables       = legacy("tables",        "Hekatan – Tables demo",      "Legacy · Visualización");

// ─── Editores (CAD / cálculo / losas) ───────────────────────────────
export const legacyCadEditor    = legacy("cad-editor",    "Hekatan – CAD Editor",       "Legacy · Editores");
export const legacyCalcEditor   = legacy("calc-editor",   "Hekatan – Calc Editor",      "Legacy · Editores");
export const legacySlabDesigner = legacy("slab-designer", "Hekatan – Slab Designer",    "Legacy · Editores");

// ─── Educativo ──────────────────────────────────────────────────────
export const legacyFemExplained = legacy("fem-explained", "Hekatan – FEM Explained",    "Legacy · Educativo");
export const legacyReport       = legacy("report",        "Hekatan – Report (Calcpad)", "Legacy · Educativo");

// ─── Estructuras emblemáticas (extraídas de getCad3d.ts) ────────────
export const iconicGatewayArch  = legacy("gateway-arch",         "Gateway Arch",                "Estructuras emblemáticas");
export const iconicCableBridge  = legacy("cable-stayed-bridge",  "Puente Atirantado",           "Estructuras emblemáticas");
export const iconicTwistedTower = legacy("twisted-tower",        "Torre Retorcida",             "Estructuras emblemáticas");
export const iconicBurjKhalifa  = legacy("burj-khalifa",         "Burj Khalifa style",          "Estructuras emblemáticas");
export const iconicSydneyOpera  = legacy("sydney-opera",         "Sydney Opera House",          "Estructuras emblemáticas");
export const iconicDiagrid      = legacy("diagrid",              "Diagrid (Gherkin) style",     "Estructuras emblemáticas");
export const iconicPergola      = legacy("pergola",              "Pérgola de acero",            "Estructuras emblemáticas");

// ─── Demos FEM Q4 (validación contra OpenSees/SAP/ETABS) ────────────
export const demoShearWallQ4    = legacy("shear-wall-q4",        "Muro de Corte Q4",            "Demos FEM Q4");
export const demoCantileverQ4   = legacy("cantilever-beam-q4",   "Viga Cantilever Q4",          "Demos FEM Q4");
export const demoPlacaQ4        = legacy("placa-cantilever-q4",  "Placa Cantilever XY Q4",      "Demos FEM Q4");

// ─── Geotécnico ────────────────────────────────────────────────────
export const demoSlope          = legacy("slope-stability",      "Estabilidad de Talud (SRM)",  "Geotécnico");

/** Array completo de los 19+11 ejemplos legacy para registrar de un golpe. */
export const legacyAwatifExamples: ExampleDef[] = [
  legacy1dMesh,
  legacy2dMesh,
  legacy3dStructure,
  legacyAxialBar,
  legacyTruss,
  legacyAdvancedTruss,
  legacyBeams,
  legacyBuilding,
  legacyPlate,
  legacyPlateQ4,
  legacyColorMap,
  legacyCurves,
  legacyDrawing,
  legacyTables,
  legacyCadEditor,
  legacyCalcEditor,
  legacySlabDesigner,
  legacyFemExplained,
  legacyReport,
  // Iconic structures
  iconicGatewayArch,
  iconicCableBridge,
  iconicTwistedTower,
  iconicBurjKhalifa,
  iconicSydneyOpera,
  iconicDiagrid,
  iconicPergola,
  // FEM demos Q4
  demoShearWallQ4,
  demoCantileverQ4,
  demoPlacaQ4,
  // Geotécnico
  demoSlope,
];
