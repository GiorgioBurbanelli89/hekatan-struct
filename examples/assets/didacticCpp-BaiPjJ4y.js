import { M as is, __tla as __tla_0 } from "./deform-DcHCKCpm.js";
let Hs, ds, Fs, _s, gs;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const y = await is();
  ds = function(s, e, o, t, a) {
    if (s.length === 0) return;
    const r = [], N = W(s.flat(), Float64Array, y.HEAPF64);
    r.push(N);
    const V = e.flat(), w = W(V, Uint32Array, y.HEAPU32);
    r.push(w);
    const Q = e.map((f) => f.length), B = W(Q, Uint32Array, y.HEAPU32);
    r.push(B);
    const C = o.supports ? Array.from(o.supports.keys()) : [], M = o.supports ? Array.from(o.supports.values()).flat().map((f) => f ? 1 : 0) : [], Z = W(C, Uint32Array, y.HEAPU32);
    r.push(Z);
    const c = W(M, Uint8Array, y.HEAPU8);
    r.push(c);
    const l = o.loads ? Array.from(o.loads.keys()) : [], p = o.loads ? Array.from(o.loads.values()).flat() : [], n = W(l, Uint32Array, y.HEAPU32);
    r.push(n);
    const g = W(p, Float64Array, y.HEAPF64);
    r.push(g);
    const u = (f) => {
      const cs = f ? Array.from(f.keys()) : [], As = f ? Array.from(f.values()) : [], fs = W(cs, Uint32Array, y.HEAPU32);
      r.push(fs);
      const us = W(As, Float64Array, y.HEAPF64);
      return r.push(us), {
        keysPtr: fs,
        valuesPtr: us,
        size: cs.length
      };
    }, d = u(t.elasticities), E = u(t.elasticitiesOrthogonal), U = u(t.areas), S = u(t.momentsOfInertiaZ), k = u(t.momentsOfInertiaY), O = u(t.shearModuli), i = u(t.torsionalConstants), T = u(t.thicknesses), R = u(t.poissonsRatios), L = u(t.shearAreasY), Y = u(t.shearAreasZ), q = t.rigidOffsets ? Array.from(t.rigidOffsets.keys()) : [], G = t.rigidOffsets ? Array.from(t.rigidOffsets.values()).flat() : [], $ = W(q, Uint32Array, y.HEAPU32);
    r.push($);
    const J = W(G, Float64Array, y.HEAPF64);
    r.push(J);
    const z = t.momentReleases ? Array.from(t.momentReleases.keys()) : [], ts = t.momentReleases ? Array.from(t.momentReleases.values()).flat().map((f) => f ? 1 : 0) : [], j = W(z, Uint32Array, y.HEAPU32);
    r.push(j);
    const I = W(ts, Uint8Array, y.HEAPU8);
    r.push(I);
    const K = y._malloc(4);
    r.push(K);
    const v = y._malloc(4);
    r.push(v);
    const ss = y._malloc(4);
    r.push(ss);
    const D = y._malloc(4);
    r.push(D);
    const os = a ? a.flatMap((f) => [
      f.node,
      f.dof,
      f.k
    ]) : [], b = W(os.length > 0 ? os : [
      0
    ], Float64Array, y.HEAPF64);
    r.push(b), y._deform(N, s.length, w, V.length, B, e.length, Z, c, C.length, n, g, l.length, d.keysPtr, d.valuesPtr, d.size, U.keysPtr, U.valuesPtr, U.size, S.keysPtr, S.valuesPtr, S.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, i.keysPtr, i.valuesPtr, i.size, T.keysPtr, T.valuesPtr, T.size, R.keysPtr, R.valuesPtr, R.size, E.keysPtr, E.valuesPtr, E.size, L.keysPtr, L.valuesPtr, L.size, Y.keysPtr, Y.valuesPtr, Y.size, b, a ? a.length : 0, K, v, ss, D);
    const X = y.HEAPU32[K / 4], m = y.HEAPU32[v / 4], H = y.HEAPU32[ss / 4], P = y.HEAPU32[D / 4], _ = new Float64Array(y.HEAPF64.buffer, X, m), F = new Float64Array(y.HEAPF64.buffer, H, P), ns = /* @__PURE__ */ new Map();
    for (let f = 0; f < m; f += 7) {
      const cs = _[f];
      ns.set(cs, Array.from(_.slice(f + 1, f + 7)));
    }
    const Ps = /* @__PURE__ */ new Map();
    for (let f = 0; f < P; f += 7) {
      const cs = F[f];
      Ps.set(cs, Array.from(F.slice(f + 1, f + 7)));
    }
    return X && r.push(X), H && r.push(H), r.forEach((f) => y._free(f)), {
      deformations: ns,
      reactions: Ps
    };
  };
  function W(s, e, o) {
    const t = new e(s), a = y._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  const h = await is();
  Fs = function(s, e, o, t, a = 10) {
    if (s.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const r = [], N = as(s.flat(), Float64Array, h.HEAPF64);
    r.push(N);
    const V = e.flat(), w = as(V, Uint32Array, h.HEAPU32);
    r.push(w);
    const Q = e.map((m) => m.length), B = as(Q, Uint32Array, h.HEAPU32);
    r.push(B);
    const C = o.supports ? Array.from(o.supports.keys()) : [], M = o.supports ? Array.from(o.supports.values()).flat().map((m) => m ? 1 : 0) : [], Z = as(C, Uint32Array, h.HEAPU32);
    r.push(Z);
    const c = as(M, Uint8Array, h.HEAPU8);
    r.push(c);
    const l = (m) => {
      const H = m ? Array.from(m.keys()) : [], P = m ? Array.from(m.values()) : [], _ = as(H, Uint32Array, h.HEAPU32);
      r.push(_);
      const F = as(P, Float64Array, h.HEAPF64);
      return r.push(F), {
        keysPtr: _,
        valuesPtr: F,
        size: H.length
      };
    }, p = l(t.elasticities), n = l(t.areas), g = l(t.momentsOfInertiaZ), u = l(t.momentsOfInertiaY), d = l(t.shearModuli), E = l(t.torsionalConstants), U = l(t.densities), S = l(t.thicknesses), k = l(t.poissonsRatios), O = l(t.membraneModifiers), i = l(t.bendingModifiers), T = h._malloc(4);
    r.push(T);
    const R = h._malloc(4);
    r.push(R);
    const L = h._malloc(4);
    r.push(L);
    const Y = h._malloc(4);
    r.push(Y);
    const q = h._malloc(4);
    r.push(q);
    const G = h._malloc(4);
    r.push(G);
    const $ = h._malloc(4);
    r.push($);
    const J = h._malloc(4);
    r.push(J), h._modal(N, s.length, w, V.length, B, e.length, Z, c, C.length, p.keysPtr, p.valuesPtr, p.size, n.keysPtr, n.valuesPtr, n.size, g.keysPtr, g.valuesPtr, g.size, u.keysPtr, u.valuesPtr, u.size, d.keysPtr, d.valuesPtr, d.size, E.keysPtr, E.valuesPtr, E.size, U.keysPtr, U.valuesPtr, U.size, S.keysPtr, S.valuesPtr, S.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, i.keysPtr, i.valuesPtr, i.size, a, T, R, L, Y, q, G, $, J);
    const z = h.HEAPU32[T / 4], ts = h.HEAPU32[R / 4], j = h.HEAPU32[L / 4], I = h.HEAPU32[Y / 4], K = h.HEAPU32[q / 4], v = h.HEAPU32[G / 4], ss = h.HEAPU32[$ / 4], D = h.HEAPU32[J / 4];
    let os = [], b = [], X = [];
    if (ts > 0 && z) {
      const m = new Float64Array(h.HEAPF64.buffer, z, ts);
      os = Array.from(m), r.push(z);
    }
    if (I > 0 && K > 0 && j) {
      const m = new Float64Array(h.HEAPF64.buffer, j, I * K);
      for (let H = 0; H < I; H++) b.push(Array.from(m.slice(H * K, (H + 1) * K)));
      r.push(j);
    }
    if (ss > 0 && D > 0 && v) {
      const m = new Float64Array(h.HEAPF64.buffer, v, ss * D);
      for (let H = 0; H < ss; H++) X.push(Array.from(m.slice(H * D, (H + 1) * D)));
      r.push(v);
    }
    return r.forEach((m) => h._free(m)), {
      frequencies: os,
      modeShapes: b,
      massParticipation: X
    };
  };
  function as(s, e, o) {
    const t = new e(s), a = h._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  await is();
  const es = await is();
  gs = function(s) {
    const { nodes: e, elements: o, E: t, nu: a, gamma: r, c: N, phi: V, thickness: w = 1, supports: Q, surcharge: B = 0, surfaceYThreshold: C = -1e10 } = s, M = [], Z = e.flat(), c = Es(Z);
    M.push(c);
    const l = o.flat(), p = ys(l);
    M.push(p);
    const n = [];
    for (const i of Q) n.push(i.node, i.fixX ? 1 : 0, i.fixY ? 1 : 0);
    const g = ys(n);
    M.push(g);
    const u = o.length, d = e.length, E = es._slopeAllocDouble(u);
    M.push(E);
    const U = es._slopeAllocDouble(d * 2);
    M.push(U);
    const S = es._slopeStabilitySolver(c, d, p, u, t, a, r, N, V, w, g, Q.length, B, C, E, U), k = [];
    for (let i = 0; i < u; i++) k.push(es.HEAPF64[E / 8 + i]);
    const O = [];
    for (let i = 0; i < d; i++) O.push([
      es.HEAPF64[U / 8 + 2 * i],
      es.HEAPF64[U / 8 + 2 * i + 1]
    ]);
    return M.forEach((i) => es._free(i)), {
      fos: S,
      plasticStrain: k,
      displacements: O
    };
  };
  function Es(s) {
    const e = new Float64Array(s), o = es._malloc(e.length * e.BYTES_PER_ELEMENT);
    return es.HEAPF64.set(e, o / 8), o;
  }
  function ys(s) {
    const e = new Uint32Array(s), o = es._malloc(e.length * e.BYTES_PER_ELEMENT);
    return es.HEAPU32.set(e, o / 4), o;
  }
  const x = await is();
  function ls(s, e, o) {
    const t = new e(s), a = x._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  _s = function(s) {
    const e = [];
    let o = [], t = 0;
    s.nodes && s.nodes.length > 0 && (t = s.nodes.length, o = s.nodes.flat());
    const a = ls(o.length > 0 ? o : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(a);
    let r = [], N = 0;
    s.elements && s.elements.length > 0 && (N = s.elements.length, r = s.elements.flat());
    const V = ls(r.length > 0 ? r : [
      0
    ], Int32Array, x.HEAPU32);
    e.push(V);
    let w = [], Q = 0;
    s.bcs && s.bcs.length > 0 && (Q = s.bcs.length, w = s.bcs.flatMap((P) => [
      P.node,
      P.dof,
      P.value
    ]));
    const B = ls(w.length > 0 ? w : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(B);
    let C = [], M = 0;
    s.pointLoads && s.pointLoads.length > 0 && (M = s.pointLoads.length, C = s.pointLoads.flatMap((P) => [
      P.node,
      P.dof,
      P.value
    ]));
    const Z = ls(C.length > 0 ? C : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(Z);
    const c = s.meshLx ?? 0, l = s.meshLy ?? 0, p = s.meshNx ?? 0, n = s.meshNy ?? 0, u = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[s.bcType ?? "none"] ?? 0, d = s.theoryType ?? 0;
    let E = [], U = 0;
    s.springs && s.springs.length > 0 && (U = s.springs.length, E = s.springs.flatMap((P) => [
      P.node,
      P.dof,
      P.k
    ]));
    const S = ls(E.length > 0 ? E : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(S);
    let k = [], O = 0;
    s.thicknesses && s.thicknesses.length > 0 && (O = s.thicknesses.length, k = s.thicknesses.slice());
    const i = ls(k.length > 0 ? k : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(i);
    const T = x._malloc(4);
    e.push(T);
    const R = x._malloc(4);
    e.push(R);
    const L = x._malloc(4);
    e.push(L);
    const Y = x._malloc(4);
    e.push(Y), x._plate_q4_solve(a, t, V, N, s.E, s.nu, s.thickness, B, Q, s.pressure ?? 0, Z, M, c, l, p, n, u, d, S, U, i, O, T, R, L, Y);
    const q = x.HEAPU32[T / 4], G = x.HEAPU32[R / 4], $ = x.HEAPU32[L / 4], J = x.HEAPU32[Y / 4], z = new Float64Array(x.HEAPF64.buffer, q, G), ts = z[0], j = z[1], I = [];
    let K = 0;
    for (let P = 0; P < ts; P++) {
      const _ = 2 + P * 5, F = {
        x: z[_],
        y: z[_ + 1],
        w: z[_ + 2],
        bx: z[_ + 3],
        by: z[_ + 4]
      };
      I.push(F), Math.abs(F.w) > Math.abs(K) && (K = F.w);
    }
    const v = new Float64Array(x.HEAPF64.buffer, $, J), ss = [];
    let D = 0, os = 0, b = 0, X = 0, m = 0;
    for (let P = 0; P < j; P++) {
      const _ = P * 9, F = {
        nodes: [
          v[_],
          v[_ + 1],
          v[_ + 2],
          v[_ + 3]
        ],
        Mxx: v[_ + 4],
        Myy: v[_ + 5],
        Mxy: v[_ + 6],
        Qx: v[_ + 7],
        Qy: v[_ + 8]
      };
      ss.push(F), Math.abs(F.Mxx) > Math.abs(D) && (D = F.Mxx), Math.abs(F.Myy) > Math.abs(os) && (os = F.Myy), Math.abs(F.Mxy) > Math.abs(b) && (b = F.Mxy), Math.abs(F.Qx) > Math.abs(X) && (X = F.Qx), Math.abs(F.Qy) > Math.abs(m) && (m = F.Qy);
    }
    let H;
    if (c > 0 && l > 0) {
      const P = c / 2, _ = l / 2;
      let F = 1 / 0;
      for (const ns of I) {
        const Ps = Math.hypot(ns.x - P, ns.y - _);
        Ps < F && (F = Ps, H = ns.w);
      }
    }
    return q && e.push(q), $ && e.push($), e.forEach((P) => x._free(P)), {
      nodeResults: I,
      elementResults: ss,
      maxW: K,
      maxMxx: D,
      maxMyy: os,
      maxMxy: b,
      maxQx: X,
      maxQy: m,
      centerW: H
    };
  };
  const A = await is();
  Hs = function(s, e, o, t) {
    if (s.length === 0) return {
      nNodes: 0,
      nElements: 0,
      nDOF: 0,
      elements: [],
      K_assembled_sparse: [],
      K_assembled_nnz: 0,
      F_applied: [],
      U_full: [],
      R_full: [],
      freeDOFs: [],
      fixedDOFs: []
    };
    const a = [], r = rs(s.flat(), Float64Array, A.HEAPF64);
    a.push(r);
    const N = e.flat(), V = rs(N, Uint32Array, A.HEAPU32);
    a.push(V);
    const w = e.map((b) => b.length), Q = rs(w, Uint32Array, A.HEAPU32);
    a.push(Q);
    const B = o.supports ? Array.from(o.supports.keys()) : [], C = o.supports ? Array.from(o.supports.values()).flat().map((b) => b ? 1 : 0) : [], M = rs(B, Uint32Array, A.HEAPU32);
    a.push(M);
    const Z = rs(C, Uint8Array, A.HEAPU8);
    a.push(Z);
    const c = o.loads ? Array.from(o.loads.keys()) : [], l = o.loads ? Array.from(o.loads.values()).flat() : [], p = rs(c, Uint32Array, A.HEAPU32);
    a.push(p);
    const n = rs(l, Float64Array, A.HEAPF64);
    a.push(n);
    const g = (b) => {
      const X = b ? Array.from(b.keys()) : [], m = b ? Array.from(b.values()) : [], H = rs(X, Uint32Array, A.HEAPU32);
      a.push(H);
      const P = rs(m, Float64Array, A.HEAPF64);
      return a.push(P), {
        keysPtr: H,
        valuesPtr: P,
        size: X.length
      };
    }, u = g(t.elasticities), d = g(t.areas), E = g(t.momentsOfInertiaZ), U = g(t.momentsOfInertiaY), S = g(t.shearModuli), k = g(t.torsionalConstants), O = g(t.thicknesses), i = g(t.poissonsRatios), T = g(t.shearAreasY), R = g(t.shearAreasZ), L = A._malloc(4);
    a.push(L);
    const Y = A._malloc(4);
    a.push(Y);
    const q = A._malloc(4);
    a.push(q);
    const G = A._malloc(4);
    a.push(G);
    const $ = A._malloc(4);
    a.push($);
    const J = A._malloc(4);
    a.push(J), A._didactic_solve(r, s.length, V, N.length, Q, e.length, M, Z, B.length, p, n, c.length, u.keysPtr, u.valuesPtr, u.size, d.keysPtr, d.valuesPtr, d.size, E.keysPtr, E.valuesPtr, E.size, U.keysPtr, U.valuesPtr, U.size, S.keysPtr, S.valuesPtr, S.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, i.keysPtr, i.valuesPtr, i.size, T.keysPtr, T.valuesPtr, T.size, R.keysPtr, R.valuesPtr, R.size, L, Y, q, G, $, J);
    const z = A.HEAPU32[L / 4], ts = A.HEAPU32[Y / 4], j = A.HEAPU32[q / 4], I = A.HEAPU32[G / 4], K = A.HEAPU32[$ / 4], v = A.HEAPU32[J / 4], ss = z && ts > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, z, ts)) : [], D = j && I > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, j, I)) : [], os = K && v > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, K, v)) : [];
    return z && a.push(z), j && a.push(j), K && a.push(K), a.forEach((b) => A._free(b)), ms(ss, D, os, s.length, e.length);
  };
  function ms(s, e, o, t, a) {
    const r = t * 6, N = [];
    if (s.length > 0) {
      const c = s[0], l = [];
      for (let p = 0; p < c; p++) l.push(s[1 + p]);
      for (let p = 0; p < c; p++) {
        let n = l[p];
        const g = s[n++], u = s[n++], d = s[n++], E = d * d, U = hs(s.slice(n, n + E), d);
        n += E;
        const S = hs(s.slice(n, n + E), d);
        n += E;
        const k = hs(s.slice(n, n + E), d);
        n += E;
        const O = hs(s.slice(n, n + 9), 3);
        n += 9;
        const i = s[n++], T = s[n++], R = s[n++], L = s[n++], Y = s[n++], q = s[n++], G = s[n++], $ = s[n++], J = s[n++], z = s[n++], ts = s[n++];
        N.push({
          index: g,
          type: u === 0 ? "frame" : "shell-Q4",
          nDOF: d,
          K_local: U,
          T: S,
          K_global: k,
          lambda: O,
          L: i,
          E: T,
          A: R,
          Iz: L,
          Iy: Y,
          G: q,
          J: G,
          t: $,
          nu: J,
          phiZ: z,
          phiY: ts
        });
      }
    }
    const V = [];
    let w = 0;
    if (e.length > 0) {
      w = e[0];
      for (let c = 0; c < w; c++) {
        const l = 1 + c * 3;
        V.push({
          row: e[l],
          col: e[l + 1],
          value: e[l + 2]
        });
      }
    }
    let Q = [], B = [], C = [], M = [], Z = [];
    if (o.length > 0) {
      let c = 0;
      const l = o[c++];
      Q = o.slice(c, c + l), c += l, B = o.slice(c, c + l), c += l, C = o.slice(c, c + l), c += l;
      const p = o[c++];
      M = o.slice(c, c + p).map(Math.round), c += p;
      const n = o[c++];
      Z = o.slice(c, c + n).map(Math.round);
    }
    return {
      nNodes: t,
      nElements: a,
      nDOF: r,
      elements: N,
      K_assembled_sparse: V,
      K_assembled_nnz: w,
      F_applied: Q,
      U_full: B,
      R_full: C,
      freeDOFs: M,
      fixedDOFs: Z
    };
  }
  function hs(s, e) {
    const o = [];
    for (let t = 0; t < e; t++) o.push(s.slice(t * e, (t + 1) * e));
    return o;
  }
  function rs(s, e, o) {
    const t = new e(s), a = A._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
});
export {
  __tla,
  Hs as a,
  ds as d,
  Fs as m,
  _s as p,
  gs as s
};
