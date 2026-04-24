/**
 * Edificio Muros — Hormigón + Muros de Corte perimetrales.
 *
 * Sistema muros de corte (shear walls) actuando como diagonales rígidas
 * (en este ejemplo modelados como diagonales perimetrales, proxy simplificado).
 * Sin diagonales metálicas adicionales. Losa + muros comparten la rigidez lateral.
 *
 * Típico para edificios altos de hormigón armado (6+ pisos) donde los pórticos
 * solos no alcanzan para limitar la deriva sísmica.
 */
import { edificioAporticado } from "../edificio-aporticado/edificioAporticado";
import type { ExampleDef } from "../workspace/exampleRegistry";

const base = edificioAporticado.params;
const params = { ...base };

params.matCol     = { ...base.matCol,     default: 0 };  // Hormigón
params.matViga    = { ...base.matViga,    default: 0 };
params.slabOn     = { ...base.slabOn,     default: 1 };
params.bracesMode = { ...base.bracesMode, default: 1 };  // perimetrales (muros proxy)
params.slabT      = { ...base.slabT,      default: 0.15 };
params.fcConcr    = { ...base.fcConcr,    default: 280 };
params.nPisos     = { ...base.nPisos,     default: 6 };

export const edificioMuros: ExampleDef = {
  id: "edificio-muros",
  name: "Edificio con Muros de Corte (Hormigón)",
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
