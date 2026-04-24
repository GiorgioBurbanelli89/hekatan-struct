import { a as R } from "./analyze-ClLKGn9k.js";
import { d as P, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
let N, C;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  C = function(t) {
    const { nodes: m, elements: e, nodeInputs: o, elementInputs: g, Fy: n } = t, r = t.maxIter ?? 12, l = t.tol ?? 0.03, d = t.softeningFactor ?? 0.9, M = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), I = g.elasticities;
    for (let s = 0; s < e.length; s++) {
      const c = I.get(s) ?? 2e8;
      M.set(s, c), h.set(s, c);
    }
    let p = {}, x = {}, i = 0, E = 1, y = false, b = 0;
    for (i = 0; i < r; i++) {
      const s = {
        ...g,
        elasticities: new Map(h)
      };
      p = P(m, e, o, s), x = R(m, e, s, p);
      let c = false, v = 1;
      b = 0;
      const O = x.vonMises ?? /* @__PURE__ */ new Map();
      for (let a = 0; a < e.length; a++) {
        const _ = O.get(a);
        if (!_ || _.length === 0) continue;
        let f = 0;
        for (const u of _) Math.abs(u) > f && (f = Math.abs(u));
        if (f > n) {
          const u = f / n, w = h.get(a) ?? M.get(a), z = M.get(a), F = Math.max(w * (n / f) * d, z * 0.01);
          Math.abs(F - w) / w > l && (h.set(a, F), c = true), b++, i === 0 && u > v && (v = u);
        }
      }
      if (i === 0 && (E = v), !c) {
        y = true;
        break;
      }
    }
    return {
      deformOutputs: p,
      analyzeOutputs: x,
      iterations: i + 1,
      converged: y,
      elementsYielded: b,
      maxRatio: E
    };
  };
  N = function(t, m = 90, e) {
    if (!t || t.size === 0) return [
      0,
      1
    ];
    const o = [];
    for (const r of t.values()) for (const l of r) {
      const d = Math.abs(l);
      Number.isFinite(d) && o.push(d);
    }
    if (o.length === 0) return [
      0,
      1
    ];
    o.sort((r, l) => r - l);
    const g = Math.floor(m / 100 * (o.length - 1));
    let n = o[g];
    return e && n > e && (n = e), [
      0,
      n
    ];
  };
});
export {
  __tla,
  N as c,
  C as s
};
