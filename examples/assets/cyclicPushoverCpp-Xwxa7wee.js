import { M as h, __tla as __tla_0 } from "./didacticCpp-BGUxSkhs.js";
let H;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let l = null;
  async function A() {
    return l || (l = await h()), l;
  }
  function P(t, c) {
    const r = c.length * 8, e = t._malloc(r);
    return t.HEAPF64.set(new Float64Array(c), e / 8), e;
  }
  H = async function(t) {
    const c = await A(), { col: r, beam: e, steelCol: s, dispHistory: _ } = t, i = 2 * Math.abs(r.fpc) / (r.epsc0 ?? 2e-3), y = 2 * Math.abs(e.fpc) / (e.epsc0 ?? 2e-3), u = P(c, _), n = c._malloc(4), f = c._malloc(4), p = c._malloc(4);
    c._cyclic_pushover(t.colHeight, t.beamLength, r.b, r.h, r.fpc, r.epsc0 ?? -2e-3, r.fpcu ?? r.fpc * 0.2, r.epsU ?? -5e-3, r.ft ?? Math.abs(r.fpc) * 0.1, r.Ets ?? i * 0.1, r.Fy_rebar, r.E_rebar, r.b_rebar ?? 0.01, r.rebar_area, r.cover, r.n_rebar, e.b, e.h, e.fpc, e.epsc0 ?? -2e-3, e.fpcu ?? e.fpc * 0.2, e.epsU ?? -5e-3, e.ft ?? Math.abs(e.fpc) * 0.1, e.Ets ?? y * 0.1, e.Fy_rebar, e.E_rebar, e.b_rebar ?? 0.01, e.rebar_area, e.cover, e.n_rebar, (s == null ? void 0 : s.Fy) ?? 0, (s == null ? void 0 : s.E) ?? 0, (s == null ? void 0 : s.b) ?? 0, (s == null ? void 0 : s.A) ?? 0, (s == null ? void 0 : s.I) ?? 0, u, _.length, n, f, p);
    const b = new Int32Array(c.HEAPU8.buffer, p, 1)[0], a = c.HEAPU32[n / 4], o = c.HEAPU32[f / 4], m = Array.from(c.HEAPF64.subarray(a / 8, a / 8 + b)), E = Array.from(c.HEAPF64.subarray(o / 8, o / 8 + b));
    return c._free(u), a && c._free(a), o && c._free(o), c._free(n), c._free(f), c._free(p), {
      displacements: E,
      forces: m,
      nSteps: b
    };
  };
});
export {
  __tla,
  H as cyclicPushover
};
