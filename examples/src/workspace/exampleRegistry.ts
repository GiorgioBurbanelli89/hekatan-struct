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
import { plateThin } from "../plate-thin/plateThin";
import { plateThick } from "../plate-thick/plateThick";
import { membrana } from "../membrana-pstress/membrana";
import { shellThin } from "../shell-thin/shellThin";
import { shellThick } from "../shell-thick/shellThick";
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";

export const examplesRegistry: ExampleDef[] = [
  // Edificios
  edificioAporticado,
  // Placas
  plateThin,
  plateThick,
  membrana,
  // Cáscaras
  shellThin,
  shellThick,
  // Cimentaciones
  zapataAislada,
  zapataVigaAmarre,
];
