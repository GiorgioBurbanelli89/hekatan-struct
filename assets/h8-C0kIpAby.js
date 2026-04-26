import { M as K, __tla as __tla_0 } from "./deform-CGyu4ATa.js";
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
  function B(u) {
    const r = new Float64Array(u), l = s._malloc(r.length * 8);
    return s.HEAPF64.set(r, l / 8), l;
  }
  function L(u) {
    const r = new Int32Array(u), l = s._malloc(r.length * 4);
    return new Int32Array(s.HEAPF64.buffer).set(r, l / 4), l;
  }
  R = function(u) {
    const { nodes: r, elements: l, E: N, nu: j, supports: w, loads: H } = u, g = r.length, p = l.length, e = [], v = [];
    for (const t of r) v.push(t[0], t[1], t[2]);
    const z = B(v);
    e.push(z);
    const M = [];
    for (const t of l) M.push(...t);
    const O = L(M);
    e.push(O);
    const f = [];
    w.forEach(([t, c, o], n) => {
      f.push(n, t ? 1 : 0, c ? 1 : 0, o ? 1 : 0);
    });
    const S = L(f.length > 0 ? f : [
      0
    ]);
    e.push(S);
    const h = [];
    H.forEach(([t, c, o], n) => {
      h.push(n, t, c, o);
    });
    const b = B(h.length > 0 ? h : [
      0
    ]);
    e.push(b);
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
    e.push(F), s._hex8_solve(z, g, O, p, N, j, S, w.size, b, H.size, i, m, P, A, E, d, F);
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
    const a = new Float64Array(s.HEAPF64.buffer, x, C), V = /* @__PURE__ */ new Map();
    for (let t = 0; t < p; t++) {
      const c = [];
      for (let o = 0; o < 8; o++) {
        const n = (t * 8 + o) * 6;
        c.push([
          a[n + 0],
          a[n + 1],
          a[n + 2],
          a[n + 3],
          a[n + 4],
          a[n + 5]
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
