/**
 * Edificio Mixto — Columnas Hormigón + Vigas Acero W.
 *
 * Sistema estructural mixto compuesto (composite) muy popular en edificios
 * altos: la columna de hormigón aporta rigidez gravitacional y las vigas de
 * acero W aligeran piso + permiten luces mayores. Losa colaborante 12 cm.
 *
 * NEC-SE-HM + NEC-SE-AC / AISC 360 Part II.
 */
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";
import type { ExampleDef } from "../workspace/exampleRegistry";

const base = edificioAporticado.params;
const params = { ...base };

params.matCol     = { ...base.matCol,     default: 0 };  // Hormigón
params.matViga    = { ...base.matViga,    default: 1 };  // Acero W
params.colShape   = { ...base.colShape,   default: 0 };  // Col Rectangular
params.slabOn     = { ...base.slabOn,     default: 1 };
params.bracesMode = { ...base.bracesMode, default: 0 };
params.slabT      = { ...base.slabT,      default: 0.12 };
params.fcConcr    = { ...base.fcConcr,    default: 280 };  // f'c típico composite

export const edificioMixto: ExampleDef = {
  id: "edificio-mixto",
  name: "Edificio Mixto (Col Hormigón + Viga Acero)",
  category: "Edificios",
  defaultShellResult: "bendingXX",
  availableShellResults: ["bendingXX", "bendingYY", "displacementZ", "vonMises"],
  hasModal: true,
  params,
  build: edificioAporticado.build,
  runModal: edificioAporticado.runModal,
  computedLabels: edificioAporticado.computedLabels,
  dynamicParams: edificioAporticado.dynamicParams,
};
