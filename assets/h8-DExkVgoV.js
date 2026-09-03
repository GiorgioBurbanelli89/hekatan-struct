import { M as K, __tla as __tla_0 } from "./deform-4oOtoiZB.js";
let R;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const s = await K();
  function B(a) {
    const r = new Float64Array(a), l = s._malloc(r.length * 8);
    return s.HEAPF64.set(r, l / 8), l;
  }
  function L(a) {
    const r = new Int32Array(a), l = s._malloc(r.length * 4);
    return new Int32Array(s.HEAPF64.buffer).set(r, l / 4), l;
  }
  R = function(a) {
    const { nodes: r, elements: l, E: N, nu: j, supports: w, loads: H } = a, g = r.length, p = l.length, e = [], v = [];
    for (const t of r) v.push(t[0], t[1], t[2]);
    const z = B(v);
    e.push(z);
    const b = [];
    for (const t of l) b.push(...t);
    const M = L(b);
    e.push(M);
    const f = [];
    w.forEach(([t, c, o], n) => {
      f.push(n, t ? 1 : 0, c ? 1 : 0, o ? 1 : 0);
    });
    const O = L(f.length > 0 ? f : [
      0
    ]);
    e.push(O);
    const h = [];
    H.forEach(([t, c, o], n) => {
      h.push(n, t, c, o);
    });
    const S = B(h.length > 0 ? h : [
      0
    ]);
    e.push(S);
    const i = s._malloc(4);
    e.push(i);
    const m = s._malloc(4);
    e.push(m);
    const P = s._malloc(4);
    e.push(P);
    const A = s._malloc(4);
    e.push(A);
    const E = s._malloc(4);
    e.push(E);
    const d = s._malloc(4);
    e.push(d);
    const F = s._malloc(8);
    e.push(F), s._hex8_solve(z, g, M, p, N, j, O, w.size, S, H.size, i, m, P, A, E, d, F, a.incompatible === false ? 0 : 1);
    const y = s.HEAPU32[i / 4], k = s.HEAPU32[m / 4], U = s.HEAPU32[P / 4], q = s.HEAPU32[A / 4], x = s.HEAPU32[E / 4], C = s.HEAPU32[d / 4], G = s.HEAPF64[F / 8], _ = new Float64Array(s.HEAPF64.buffer, y, k), D = /* @__PURE__ */ new Map();
    for (let t = 0; t < g; t++) D.set(t, [
      _[3 * t],
      _[3 * t + 1],
      _[3 * t + 2]
    ]);
    const J = new Float64Array(s.HEAPF64.buffer, U, q), I = /* @__PURE__ */ new Map();
    for (let t = 0; t < p; t++) {
      const c = [];
      for (let o = 0; o < 8; o++) c.push(J[t * 8 + o]);
      I.set(t, c);
    }
    const u = new Float64Array(s.HEAPF64.buffer, x, C), V = /* @__PURE__ */ new Map();
    for (let t = 0; t < p; t++) {
      const c = [];
      for (let o = 0; o < 8; o++) {
        const n = (t * 8 + o) * 6;
        c.push([
          u[n + 0],
          u[n + 1],
          u[n + 2],
          u[n + 3],
          u[n + 4],
          u[n + 5]
        ]);
      }
      V.set(t, c);
    }
    for (const t of e) s._free(t);
    return s._free(y), s._free(U), s._free(x), {
      displacements: D,
      vonMisesPerElement: I,
      stressPerElement: V,
      elapsedMs: G
    };
  };
});
export {
  __tla,
  R as h
};
