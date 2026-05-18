/**
 * Registry de ejemplos llamables desde el workspace Tweakpane.
 * Cada ejemplo es un módulo que exporta un ExampleDef con su build().
 */
import type { State } from "vanjs-core";
import type * as THREE from "three";
import type {
  Node, Element, NodeInputs, ElementInputs,
  DeformOutputs, AnalyzeOutputs,
} from "hekatan-fem";

export interface ParamDef {
  default: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  /** Si se define, Tweakpane lo renderiza como dropdown (numeric enum) */
  options?: Record<string, number>;
  /** Si `true`, se renderiza como CHECKBOX (on/off) en Tweakpane.
   *  El valor se guarda como 0 (off) o 1 (on) en `params`. Ejemplo: toggles
   *  para activar/desactivar patrones de carga D/L/S. */
  boolean?: boolean;
  /** Folder del Tweakpane donde va (e.g. "Geometría", "Luces", "Cargas").
   *  Si no se define, va en el folder raíz "Parámetros". */
  folder?: string;
  /**
   * Si `true`, el workspace agrega en el folder "📏 Rangos" (o el folder
   * equivalente) dos sliders readonly "<label> min" y "<label> max" que le
   * permiten al usuario ampliar o reducir el rango del slider principal.
   *
   * Inspirado en el panel "Rangos" de beams/FEM-Studio donde el usuario podía
   * extender CM de (−20, 0) a (−50, 0) sin editar código. Default: los
   * parámetros con unitType="force"|"moment" lo activan automáticamente.
   */
  rangeAdjustable?: boolean;
  /**
   * Si `true`, el workspace RECONSTRUYE el pane entero tras cada cambio en
   * este param. Útil para params "estructurales" (nPisos, nVanosX, nVanosY)
   * que regeneran `dynamicParams(currentParams)`.
   *
   * Sin esta flag, el cambio solo dispara `scheduleRebuild()` (re-ejecuta
   * ex.build) pero el pane mantiene los mismos sliders.
   */
  regenOnChange?: boolean;
  /**
   * Tipo de unidad del parámetro. Cuando se setea:
   *   - El valor almacenado en `currentParams` se convierte automáticamente
   *     a la unidad base SI (kN para fuerza, kN·m para momento, m para
   *     desplazamiento, etc.) cuando ex.build() lo lee.
   *   - El slider del Tweakpane muestra el valor en la unidad UI
   *     seleccionada por el usuario (forceUnit/dispUnit). Al cambiar unidad,
   *     los sliders se reescalan automáticamente.
   *   - El label recibe el sufijo de unidad actual, p. ej. "F lateral (kN)"
   *     → "F lateral (tonf)" tras switch.
   *
   * Valores soportados:
   *   "force"   → kN / tonf / kip         (base SI: kN)
   *   "moment"  → kN·m / tonf·m / kip·ft  (base SI: kN·m)
   *   "disp"    → mm / cm / µm            (base SI: m)
   *
   * Si no se define, el parámetro es adimensional y no sufre conversión.
   */
  unitType?: "force" | "moment" | "disp";
  /** Si la función retorna true, el binding se oculta (Tweakpane `.hidden = true`).
   *  Se re-evalúa en cada rebuild. Útil para mostrar `ks_factor` solo en Custom,
   *  o sliders de carga simple solo si useSimple=ON. */
  hiddenIf?: (params: Record<string, number>) => boolean;
}

export interface BuildStates {
  nodes: State<Node[]>;
  elements: State<Element[]>;
  nodeInputs: State<NodeInputs>;
  elementInputs: State<ElementInputs>;
  deformOutputs: State<DeformOutputs>;
  analyzeOutputs: State<AnalyzeOutputs>;
  objects3D: State<THREE.Object3D[]>;
}

export interface ModalPanelApi {
  div: HTMLElement;
  render: (out: any, meta: { title: string; properties?: string[] }) => void;
}

// Re-export de activeExampleVersion (vive en ./exampleVersion para evitar TDZ).
// Los ejemplos que lo usan DEBEN importarlo desde ./exampleVersion directamente,
// no desde aquí (para cortar la circularidad registry ← ejemplo ← registry).
export { activeExampleVersion } from "./exampleVersion";

export interface ExampleDef {
  id: string;
  name: string;
  category: string;
  /**
   * Si `true`, este ejemplo es un caso de **benchmark validado** — se compara
   * contra una referencia conocida (Paz 6.3, Serquen SF-70, OpenSees, CalculiX,
   * Bowles, etc.). En el selector del workspace aparece con un emoji 🏁
   * adelante para distinguirlo. Útil para que el usuario pueda elegir
   * directamente "Benchmarks" desde la categoría y validar el solver.
   */
  benchmark?: boolean;
  /**
   * Pasos numerados de uso del ejemplo. Se renderiza como folder "📖 Guía"
   * en Tweakpane, expandido por default cuando el ejemplo es nuevo para el
   * usuario (gobierno por localStorage flag por id).
   * Cada string es un paso conciso (idealmente < 80 chars).
   *   ej: ["Mové q_adm para fijar la presión admisible del suelo",
   *        "ks_factor = 10.5 es Bowles típico, ajustá según ensayo de placa",
   *        "El folder Calculados muestra σ_max — debe cumplir σ/q_adm ≤ 1"]
   */
  guide?: string[];
  /**
   * Si se define, este ejemplo NO usa el flujo Tweakpane del workspace.
   * Es un ejemplo "legacy" del upstream awatif (1d-mesh, 2d-mesh, beams, color-map…)
   * con su propia UI VanJS toolbar. Al seleccionarlo en el selector, el workspace
   * muestra un botón "Abrir ejemplo →" que navega a la página standalone
   * (`/<id>/index.html`). Cuando esto está presente, `params` y `build` son
   * ignorados (pueden estar vacíos o no existir).
   */
  standaloneUrl?: string;
  params?: Record<string, ParamDef>;
  /** Construye el modelo y ejecuta el análisis estático */
  build?: (params: Record<string, number>, states: BuildStates, modalPanel?: ModalPanelApi) => void;
  /** ¿Soporta análisis modal? */
  hasModal?: boolean;
  /** Si hasModal=true, función que corre el modal y actualiza modalPanel */
  runModal?: (params: Record<string, number>, states: BuildStates, modalPanel: ModalPanelApi) => void;
  /**
   * Callback que permite que un param derive/actualice otros params.
   * Se llama DESPUÉS de cada cambio, ANTES del rebuild. El ejemplo muta `params` in-place
   * y el workspace refresca la UI para reflejar los cambios.
   * Ejemplo: al cambiar soilType, actualizar q_adm y ks_factor.
   */
  onParamChange?: (changedKey: string, params: Record<string, number>) => void;
  /**
   * Genera params adicionales dinámicamente en función del estado actual de
   * `currentParams`. Se llama en CADA rebuild del pane (después de cambiar
   * parámetros de estructura como nPisos, nVanosX, nVanosY).
   *
   * Caso de uso clásico: secciones por piso. Si `currentParams.nPisos = 3`,
   * `dynamicParams` retorna { bCol_p1, hCol_p1, bCol_p2, hCol_p2, bCol_p3, hCol_p3 }.
   * Al cambiar nPisos a 5, se regeneran los sliders automáticamente.
   *
   * IMPORTANT: los keys retornados deben ser ÚNICOS y no colisionar con los
   * params estáticos. Convención: usar sufijos tipo `_p1`, `_p2`, `_vx1`, etc.
   *
   * Los valores actuales en currentParams se preservan si la key existía antes;
   * solo las nuevas keys usan `default` del ParamDef retornado.
   */
  dynamicParams?: (currentParams: Record<string, number>) => Record<string, ParamDef>;
  /**
   * Devuelve valores DERIVADOS (calculados) que se muestran como read-only en
   * el Tweakpane en el folder "📊 Calculados". Se llama después de cada build.
   * Ejemplo zapata: ks (módulo balasto), D (rigidez flexural), k_r (Biot), q_max.
   * Las keys son el label visible; los values se muestran como texto (ya formateados
   * con unidades, e.g. "ks = 2205 kN/m³").
   */
  computedLabels?: (params: Record<string, number>, states: BuildStates) => Record<string, string>;
  /**
   * Valores calculados INLINE — se muestran como read-only justo DESPUÉS del
   * parámetro indicado por `after` (en su mismo folder del Tweakpane). Útil para
   * mostrar ks calculado debajo de q_adm/ks_factor, o Mu debajo de la carga, etc.
   * Se actualizan en cada rebuild.
   */
  inlineComputed?: Array<{
    after: string;                                                        // key del param después del cual insertar
    label: string;                                                        // etiqueta visible
    compute: (params: Record<string, number>, states: BuildStates) => string;
    hiddenIf?: (params: Record<string, number>) => boolean;                // oculta dinámicamente
  }>;
  /** Shell colormap por defecto para este ejemplo (e.g. "bendingXX", "pressure"). */
  defaultShellResult?: string;
  /**
   * Lista explícita de opciones de Shell results que aplican a este ejemplo.
   * El dropdown filtra el resto. Si no se declara, se muestran todas.
   * Ej: placas flexión → ["bendingXX", "bendingYY", "bendingXY", "displacementZ"]
   *     zapatas Winkler → ["pressure", "displacementZ"]
   *     membrana → ["membraneXX", "membraneYY", "membraneXY", "vonMises"]
   */
  availableShellResults?: string[];
}

// ── Import de ejemplos (cada uno en su propia carpeta estilo awatif) ──
import { csiImporter } from "../csi-importer/csiImporter";
import { cliModeler } from "../cli-modeler/cliModeler";
import { cadDraw } from "../cad-draw/cadDraw";
import { vigaMedioElastico } from "../viga-medio-elastico/vigaMedioElastico";
import { zapataVigaAmarre } from "../zapata-viga-amarre/zapataVigaAmarre";
import { zapataAislada } from "../zapata-aislada/zapataAislada";
import { zapataAisladaValidacion } from "../zapata-aislada-validacion/zapataAisladaValidacion";
import { edificioConLosa } from "../edificio-con-losa/edificioConLosa";
import { edificioConMuros } from "../edificio-con-muros/edificioConMuros";
import { plane } from "../plane/plane";
import { membranaCSI } from "../membrana-csi/membranaCSI";
import { plateThin } from "../plate-thin/plateThin";
import { plateThick } from "../plate-thick/plateThick";
import { membrana } from "../membrana-pstress/membrana";
import { shellThin } from "../shell-thin/shellThin";
import { benchmark3way } from "../benchmark-3way/benchmark3way";
import { benchmarkCft } from "../benchmark-cft/benchmarkCft";
import { benchmarkCftCantilever } from "../benchmark-cft-cantilever/benchmarkCftCantilever";
import { benchmarkSteelCantilever } from "../benchmark-steel-cantilever/benchmarkSteelCantilever";
import { benchmarkConcreteCantilever } from "../benchmark-concrete-cantilever/benchmarkConcreteCantilever";
// ── Benchmarks Paz (validación contra "Structural Dynamics" 6ª ed) ──
import { benchmarkPaz4_1 } from "../benchmark-paz-4-1/benchmarkPaz4_1";
import { benchmarkPaz6_1 } from "../benchmark-paz-6-1/benchmarkPaz6_1";
import { benchmarkPaz7_1 } from "../benchmark-paz-7-1/benchmarkPaz7_1";
import { benchmarkPaz8_1 } from "../benchmark-paz-8-1/benchmarkPaz8_1";
import { benchmarkPaz9_3 } from "../benchmark-paz-9-3/benchmarkPaz9_3";
import { benchmarkPaz10_7 } from "../benchmark-paz-10-7/benchmarkPaz10_7";
import { benchmarkPaz11_1 } from "../benchmark-paz-11-1/benchmarkPaz11_1";
import { benchmarkPaz12_1 } from "../benchmark-paz-12-1/benchmarkPaz12_1";
import { benchmarkPaz13_1 } from "../benchmark-paz-13-1/benchmarkPaz13_1";
import { shellThick } from "../shell-thick/shellThick";
import { layeredShell } from "../layered-shell/layeredShell";
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";
import { edificioLadera } from "../edificio-ladera/edificioLadera";
import { edificioComparativaFem } from "../edificio-comparativa-fem/edificioComparativaFem";
// Variantes limpias de edificios por tipo estructural
import { edificioHormigon } from "../edificio-hormigon/edificioHormigon";
import { edificioAceroV2 } from "../edificio-acero-v2/edificioAceroV2";
import { edificioMixto } from "../edificio-mixto/edificioMixto";
import { edificioMuros } from "../edificio-muros/edificioMuros";
import { edificioDual } from "../edificio-dual/edificioDual";
import { columnaCft } from "../columna-cft/columnaCft";
import { triangularPlate } from "../triangular-plate/triangularPlate";
import { conexionRbs } from "../conexion-rbs/conexionRbs";
import { conexionBfp } from "../conexion-bfp/conexionBfp";
import { conexionEndPlate } from "../conexion-end-plate/conexionEndPlate";
import { placaBase } from "../placa-base/placaBase";
import { trussGen } from "../truss-gen/trussGen";
import { barraAxial } from "../W1_barra_axial/barraAxial";
import { vigaAxialCantilever } from "../W2_viga_axial_cantilever/vigaAxialCantilever";
import { vigaAxialConcreteCantilever } from "../W2_viga_axial_concrete_cantilever/vigaAxialConcreteCantilever";
import { vigaAxialCompositeCantilever } from "../W2_viga_axial_composite_cantilever/vigaAxialCompositeCantilever";
import { vigaFlexionConcreteCantilever } from "../W2_viga_flexion_concrete_cantilever/vigaFlexionConcreteCantilever";
import { vigaFlexionSteelCantilever } from "../W2_viga_flexion_steel_cantilever/vigaFlexionSteelCantilever";
import { portico2D } from "../portico-2d/portico2D";
import { tower3D } from "../tower-3d/tower3D";
import { galpon } from "../galpon/galpon";
import { edifAcero } from "../edif-acero/edifAcero";
import { mezanine } from "../mezanine/mezanine";
// Lienzo en blanco para dibujar (CAD interactivo)
import { newBlank } from "../new-blank/newBlank";
// Legacy del upstream awatif (rebrandeados, abren standalone)
import {
  legacyAwatifExamples,
  legacyBeams,           // Paz 6.3 Space Frame (FRAME 1D)
  solidCubeFEM,          // Cubo H8 (SOLIDO)
  bulboPresionesSuelo,   // Bulbo presiones (COMBINADO area+spring)
} from "./legacyAwatif";

export const examplesRegistry: ExampleDef[] = [
  // 📐 NewBlank — lienzo en blanco al inicio (más visible)
  newBlank,
  // Importador CSI (F2K/E2K/S2K) — al inicio para acceso rápido
  csiImporter,
  // CLI Modeler — modelar con comandos tipo SAP (sin importar ningun archivo)
  cliModeler,
  // CAD Drawer — dibujar con mouse + Tweakpane (sincronizado con CLI)
  cadDraw,
  // Cimentaciones (zapataAisladaValidacion va en sección Benchmarks Combinados)
  zapataAislada,
  zapataVigaAmarre,
  vigaMedioElastico,
  // 🎯 Benchmarks por DOFs — agrupados por número de grados de libertad efectivos
  // 1 DOF — Vigas axial puro (carga puntual sin peso propio)
  barraAxial,                       // Barra axial horizontal genérica
  vigaAxialConcreteCantilever,      // Viga Hormigón 30×30 axial puntual
  vigaAxialCantilever,              // Viga Acero I-450 axial puntual
  vigaAxialCompositeCantilever,     // Viga Compuesta (IPE+losa) axial puntual transformed-section
  // 2 DOF — Vigas flexión (peso propio + cargas verticales)
  vigaFlexionConcreteCantilever,    // Viga Hormigón 30×60 peso propio
  vigaFlexionSteelCantilever,       // Viga Acero IPE 300 peso propio
  // Frames 1D (resto)
  trussGen,
  portico2D,
  tower3D,
  galpon,
  // Columnas (diseño individual)
  columnaCft,
  // Conexiones (prequalificación sísmica)
  conexionRbs,           // AISC 358 §5 — Reduced Beam Section
  conexionBfp,           // AISC 358 §7 — Bolted Flange Plate
  conexionEndPlate,      // AISC 358 §6 — End Plate 4E/4ES/8ES
  placaBase,
  // Edificios — variantes limpias por tipo estructural
  edificioAporticado,
  edificioLadera,
  edificioComparativaFem,  // 🧪 Comparativa cruzada Hekatan vs OpenSees / CalculiX / Code Aster
  edificioHormigon,
  edificioAceroV2,
  edificioMixto,
  edificioMuros,
  edificioDual,
  // Legacy (se mantienen por compatibilidad con URLs existentes)
  edificioConLosa,
  edificioConMuros,
  edifAcero,
  mezanine,
  // Placas (no-benchmark: triangularPlate, membranaCSI, plane)
  triangularPlate,
  membranaCSI,
  plane,

  // ════════════════════════════════════════════════════════════════════
  // 🏁 BENCHMARKS — Validación cruzada Hekatan vs ETABS / OpenSees / analítico
  // Orden visual en el dropdown (categoría "🏁 Benchmarks"):
  //   1) FRAMES (1D)         — vigas, columnas, frame3D
  //   2) ÁREAS (Shell 2D)    — placas, membranas, cáscaras
  //   3) SÓLIDOS (3D)        — H8 cube
  //   4) COMBINADOS          — Area + Spring + Frame (zapatas, bulbo, edificios)
  //   5) LAYERED             — layered shells (CLT, sandwich, ABBD)
  // ════════════════════════════════════════════════════════════════════

  // ── 1) FRAMES (1D) ──────────────────────────────────────────────
  benchmarkSteelCantilever,    // Frame · Columna ACERO Cantilever (HSS hueco)
  benchmarkConcreteCantilever, // Frame · Columna HORMIGÓN Cantilever (rectangular)
  benchmarkCftCantilever,      // Frame · Columna CFT Cantilever (HSS + concrete fill)
  legacyBeams,                 // Paz 6.3 Space Frame (validación 4 solvers)
  // ── 6) Benchmarks Paz (Mario Paz "Structural Dynamics" 6ª ed) ──
  // 1-DOF / time history canónicos
  benchmarkPaz4_1,             // 1-DOF rectangular impulse
  benchmarkPaz6_1,             // Newmark-β canonical (trapezoidal load)
  // Shear buildings (frame + DIAPHRAGM RIGID, sin shells)
  benchmarkPaz7_1,             // 2-story shear building (modal + TH)
  benchmarkPaz8_1,             // 2-DOF triangular impulse (mismo modelo 7.1)
  benchmarkPaz9_3,             // 4-story uniform shear building (modal)
  // Vigas y frames con datos completos
  benchmarkPaz10_7,            // Fixed-fixed beam (4 elementos + TH)
  benchmarkPaz11_1,            // Plane frame inclinado 45°
  benchmarkPaz12_1,            // Grid frame 3D (parrilla horizontal)
  benchmarkPaz13_1,            // Space frame 3D (5 nodos, 4 vigas radiando)

  // ── 2) ÁREAS (Shell 2D) — orden canónico de los 6 benchmarks ──
  plateThin,               // 1) Plate Thin (Kirchhoff)
  plateThick,              // 2) Plate Thick (Mindlin-Reissner)
  membrana,                // 3) Membrana (Plane Stress)
  shellThin,               // 4) Shell Thin (Kirchhoff-Love)
  shellThick,              // 5) Shell Thick (MITC4)
  layeredShell,            // 6) Layered (CLT/Sandwich/ABBD multi-capa)

  // ── 3) SÓLIDOS (3D) ─────────────────────────────────────────────
  solidCubeFEM,            // Cubo Sólido H8 (validación CalculiX)

  // ── 4) COMBINADOS — Area + Spring + Frame ─────────────────────
  zapataAisladaValidacion, // Zapata aislada (Area + Winkler springs + Frame)
  bulboPresionesSuelo,     // Bulbo de Presiones — Serquen SF-70
  benchmark3way,           // Shell+Frame DOF mismatch (Area + Frame)
  benchmarkCft,            // CFT cols + I-beams + losa (Area + Frame composite)

  // ── Legacy upstream awatif (resto que no son benchmarks) ────
  ...legacyAwatifExamples.filter(e =>
    e.id !== "beams" && e.id !== "solid-cube-fem" && e.id !== "bulbo-presiones-suelo"
  ),
];
