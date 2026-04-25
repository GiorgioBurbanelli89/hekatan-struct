import { e as i, __tla as __tla_0 } from "./edificioAporticado-Z8szeC12.js";
let d;
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
    default: 1
  };
  e.matViga = {
    ...a.matViga,
    default: 1
  };
  e.slabOn = {
    ...a.slabOn,
    default: 1
  };
  e.bracesMode = {
    ...a.bracesMode,
    default: 0
  };
  e.slabT = {
    ...a.slabT,
    default: 0.12
  };
  d = {
    id: "edificio-acero-v2",
    name: "Edificio Acero (W profiles)",
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
  d as e
};
