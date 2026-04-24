import { e as l, __tla as __tla_0 } from "./edificioAporticado-KUAnCkeF.js";
let o;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const a = l.params, e = {
    ...a
  };
  e.matCol = {
    ...a.matCol,
    default: 0
  };
  e.matViga = {
    ...a.matViga,
    default: 1
  };
  e.colShape = {
    ...a.colShape,
    default: 0
  };
  e.slabOn = {
    ...a.slabOn,
    default: 1
  };
  e.bracesMode = {
    ...a.bracesMode,
    default: 2
  };
  e.slabT = {
    ...a.slabT,
    default: 0.12
  };
  e.fcConcr = {
    ...a.fcConcr,
    default: 280
  };
  e.nPisos = {
    ...a.nPisos,
    default: 10
  };
  o = {
    id: "edificio-dual",
    name: "Edificio Dual (Mixto + Muros + Diagonales)",
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
    build: l.build,
    runModal: l.runModal,
    computedLabels: l.computedLabels,
    dynamicParams: l.dynamicParams
  };
});
export {
  __tla,
  o as e
};
