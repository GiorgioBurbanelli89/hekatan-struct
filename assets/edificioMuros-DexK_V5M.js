import { e as i, __tla as __tla_0 } from "./edificioAporticado-Df-PAK3a.js";
let o;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const a = i.params, e = {
    ...a
  };
  e.matCol = {
    ...a.matCol,
    default: 0
  };
  e.matViga = {
    ...a.matViga,
    default: 0
  };
  e.slabOn = {
    ...a.slabOn,
    default: 1
  };
  e.bracesMode = {
    ...a.bracesMode,
    default: 1
  };
  e.slabT = {
    ...a.slabT,
    default: 0.15
  };
  e.fcConcr = {
    ...a.fcConcr,
    default: 280
  };
  e.nPisos = {
    ...a.nPisos,
    default: 6
  };
  e.diafragmaRigido = {
    ...a.diafragmaRigido,
    default: 1
  };
  o = {
    id: "edificio-muros",
    name: "Edificio con Muros de Corte (Hormig\xF3n)",
    category: "Edificios",
    defaultShellResult: "bendingXX",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: true,
    params: e,
    build: i.build,
    runModal: i.runModal,
    computedLabels: i.computedLabels,
    dynamicParams: i.dynamicParams
  };
});
export {
  __tla,
  o as e
};
