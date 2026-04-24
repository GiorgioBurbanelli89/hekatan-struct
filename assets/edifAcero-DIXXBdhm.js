import { e as c, __tla as __tla_0 } from "./edificioAporticado-Bl5n5_eH.js";
let s;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let i, r;
  i = {
    matCol: 1,
    matViga: 1,
    colSize: 0.3,
    vigaB: 0.2,
    vigaH: 0.45,
    vSecOn: 1,
    nVSec: 2,
    vSecDir: 0,
    slabOn: 1,
    slabT: 0.08
  };
  r = () => {
    const e = {};
    for (const [o, a] of Object.entries(c.params)) e[o] = {
      ...a,
      default: i[o] ?? a.default
    };
    return e;
  };
  s = {
    ...c,
    id: "edif-acero",
    name: "Edificio de Acero (W + deck)",
    params: r()
  };
});
export {
  __tla,
  s as e
};
