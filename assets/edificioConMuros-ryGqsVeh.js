import { e as s, __tla as __tla_0 } from "./edificioAporticado-ir6k9nnb.js";
let i;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const e = s.params, a = {
    ...e
  };
  a.slabOn = {
    ...e.slabOn,
    default: 1
  };
  a.bracesMode = {
    ...e.bracesMode,
    default: 1
  };
  a.slabT = {
    ...e.slabT,
    default: 0.15
  };
  a.nPisos = {
    ...e.nPisos,
    default: 6
  };
  i = {
    id: "edificio-con-muros",
    name: "Edificio con Muros de corte",
    category: "Edificios",
    defaultShellResult: "bendingXX",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: true,
    params: a,
    build: s.build,
    runModal: s.runModal,
    computedLabels: s.computedLabels
  };
});
export {
  __tla,
  i as e
};
