/**
 * Edificio Dual — Mixto + Muros de Corte + Diagonales.
 *
 * Sistema estructural dual más sofisticado:
 *   - Columnas: Hormigón (rigidez gravitacional)
 *   - Vigas: Acero W (luces grandes)
 *   - Muros de corte perimetrales
 *   - Diagonales en TODOS los vanos (extra rigidez lateral)
 *
 * Caso típico de edificios altos (15+ pisos) en zona sísmica alta. Sistema
 * redundante: si muros fallan, diagonales toman la carga; si diagonales
 * pandean, muros resisten (principio de dual system en ASCE 7 / NEC-SE-DS).
 */
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";
import type { ExampleDef } from "../workspace/exampleRegistry";

const base = edificioAporticado.params;
const params = { ...base };

params.matCol     = { ...base.matCol,     default: 0 };  // Hormigón
params.matViga    = { ...base.matViga,    default: 1 };  // Acero W
params.colShape   = { ...base.colShape,   default: 0 };
params.slabOn     = { ...base.slabOn,     default: 1 };
params.bracesMode = { ...base.bracesMode, default: 2 };  // todas las diagonales
params.slabT      = { ...base.slabT,      default: 0.12 };
params.fcConcr    = { ...base.fcConcr,    default: 280 };
params.nPisos     = { ...base.nPisos,     default: 10 };

export const edificioDual: ExampleDef = {
  id: "edificio-dual",
  name: "Edificio Dual (Mixto + Muros + Diagonales)",
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
