import { e as o, __tla as __tla_0 } from "./edificioAporticado-D79LDTkY.js";
let c;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let s, i;
  s = {
    nVanosX: 3,
    nVanosY: 2,
    nPisos: 1,
    spanX: 6,
    spanY: 5,
    hPiso: 4.5,
    matCol: 1,
    matViga: 1,
    colSize: 0.25,
    vigaB: 0.2,
    vigaH: 0.4,
    vSecOn: 1,
    nVSec: 3,
    vSecDir: 1,
    slabOn: 1,
    slabT: 0.08,
    nSubViga: 3
  };
  i = () => {
    const a = {};
    for (const [n, e] of Object.entries(o.params)) a[n] = {
      ...e,
      default: s[n] ?? e.default
    };
    return a;
  };
  c = {
    ...o,
    id: "mezanine",
    name: "Mezanine (1 piso acero + deck)",
    params: i()
  };
});
export {
  __tla,
  c as m
};
