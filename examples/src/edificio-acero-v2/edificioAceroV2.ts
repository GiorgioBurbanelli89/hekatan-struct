/**
 * Edificio Acero (v2) — Pórtico de acero W puro.
 *
 * Columnas y vigas de acero perfil W (AISC). Losa metal-deck + concreto (15 cm total).
 * Sin muros de corte ni diagonales.
 *
 * Caso típico AISC 360 / NEC-SE-AC (Ecuador) para oficinas, estacionamientos,
 * comerciales ligeros 3-10 pisos.
 */
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";
import type { ExampleDef } from "../workspace/exampleRegistry";

const base = edificioAporticado.params;
const params = { ...base };

params.matCol     = { ...base.matCol,     default: 1 };  // Acero W
params.matViga    = { ...base.matViga,    default: 1 };  // Acero W
params.slabOn     = { ...base.slabOn,     default: 1 };  // metal-deck
params.bracesMode = { ...base.bracesMode, default: 0 };
params.slabT      = { ...base.slabT,      default: 0.12 };  // 5-cm deck + 7-cm losa

export const edificioAceroV2: ExampleDef = {
  id: "edificio-acero-v2",
  name: "Edificio Acero (W profiles)",
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
