/**
 * Edificio Hormigón — Pórtico de hormigón armado puro.
 *
 * Variante limpia del edificio-aporticado configurada para SOLO HORMIGÓN:
 *   - matCol = 0 (Hormigón)
 *   - matViga = 0 (Hormigón)
 *   - colShape = 0 (Rectangular)
 *   - slabOn = 1 (losa de hormigón 15 cm, discretizada ETABS-style)
 *   - bracesMode = 0 (sin diagonales)
 *   - Sin muros de corte
 *
 * Caso típico NEC-SE-HM (Ecuador) / ACI 318 (USA) para edificios residenciales
 * y oficinas pequeñas de 3-6 pisos.
 */
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";
import type { ExampleDef } from "../workspace/exampleRegistry";

const base = edificioAporticado.params;
const params = { ...base };

// Forzar hormigón + losa + sin diagonales
params.matCol     = { ...base.matCol,     default: 0 };
params.matViga    = { ...base.matViga,    default: 0 };
params.colShape   = { ...base.colShape,   default: 0 };
params.slabOn     = { ...base.slabOn,     default: 1 };
params.bracesMode = { ...base.bracesMode, default: 0 };
params.slabT      = { ...base.slabT,      default: 0.15 };
params.fcConcr    = { ...base.fcConcr,    default: 240 };

export const edificioHormigon: ExampleDef = {
  id: "edificio-hormigon",
  name: "Edificio Hormigón (puro)",
  category: "Edificios",
  defaultShellResult: "bendingXX",
  availableShellResults: ["bendingXX", "bendingYY", "bendingXY", "displacementZ", "vonMises"],
  hasModal: true,
  params,
  build: edificioAporticado.build,
  runModal: edificioAporticado.runModal,
  computedLabels: edificioAporticado.computedLabels,
  dynamicParams: edificioAporticado.dynamicParams,
};
