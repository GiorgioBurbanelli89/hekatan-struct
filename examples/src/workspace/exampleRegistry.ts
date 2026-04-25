/**
 * Registry de ejemplos llamables desde el workspace Tweakpane.
 * Cada ejemplo es un módulo que exporta un ExampleDef con su build().
 */
import type { State } from "vanjs-core";
import type * as THREE from "three";
import type {
  Node, Element, NodeInputs, ElementInputs,
  DeformOutputs, AnalyzeOutputs,
} from "awatif-fem";

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
  params: Record<string, ParamDef>;
  /** Construye el modelo y ejecuta el análisis estático */
  build: (params: Record<string, number>, states: BuildStates, modalPanel?: ModalPanelApi) => void;
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
import { shellThick } from "../shell-thick/shellThick";
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";
import { edificioValidadoEtabs } from "../edificio-validado-etabs/edificioValidadoEtabs";
// Variantes limpias de edificios por tipo estructural
import { edificioHormigon } from "../edificio-hormigon/edificioHormigon";
import { edificioAceroV2 } from "../edificio-acero-v2/edificioAceroV2";
import { edificioMixto } from "../edificio-mixto/edificioMixto";
import { edificioMuros } from "../edificio-muros/edificioMuros";
import { edificioDual } from "../edificio-dual/edificioDual";
import { columnaCft } from "../columna-cft/columnaCft";
import { triangularPlate } from "../triangular-plate/triangularPlate";
import { conexionRbs } from "../conexion-rbs/conexionRbs";
import { placaBase } from "../placa-base/placaBase";
import { trussGen } from "../truss-gen/trussGen";
import { barraAxial } from "../barra-axial/barraAxial";
import { portico2D } from "../portico-2d/portico2D";
import { tower3D } from "../tower-3d/tower3D";
import { galpon } from "../galpon/galpon";
import { edifAcero } from "../edif-acero/edifAcero";
import { mezanine } from "../mezanine/mezanine";

export const examplesRegistry: ExampleDef[] = [
  // Frames 1D
  barraAxial,
  trussGen,
  portico2D,
  tower3D,
  galpon,
  // Columnas (diseño individual)
  columnaCft,
  // Conexiones (prequalificación sísmica)
  conexionRbs,
  placaBase,
  // Edificios — variantes limpias por tipo estructural
  edificioAporticado,
  edificioValidadoEtabs,  // 🧪 Validado vs ETABS + OpenSeesPy
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
  // Placas
  plateThin,
  plateThick,
  triangularPlate,
  membrana,
  membranaCSI,
  plane,
  // Cáscaras
  shellThin,
  shellThick,
  // Cimentaciones
  zapataAislada,
  zapataAisladaValidacion,
  zapataVigaAmarre,
];
