import { M as fs, __tla as __tla_0 } from "./deform-Cdyihoxi.js";
let Ys, Rs, Ks, Ls, Ts;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const c = await fs();
  Rs = function(s, o, r, t, e) {
    if (s.length === 0) return;
    const a = [], i = S(s.flat(), Float64Array, c.HEAPF64);
    a.push(i);
    const L = o.flat(), K = S(L, Uint32Array, c.HEAPU32);
    a.push(K);
    const Y = o.map((A) => A.length), Q = S(Y, Uint32Array, c.HEAPU32);
    a.push(Q);
    const V = r.supports ? Array.from(r.supports.keys()) : [], z = r.supports ? Array.from(r.supports.values()).flat().map((A) => A ? 1 : 0) : [], q = S(V, Uint32Array, c.HEAPU32);
    a.push(q);
    const l = S(z, Uint8Array, c.HEAPU8);
    a.push(l);
    const E = r.loads ? Array.from(r.loads.keys()) : [], f = r.loads ? Array.from(r.loads.values()).flat() : [], n = S(E, Uint32Array, c.HEAPU32);
    a.push(n);
    const U = S(f, Float64Array, c.HEAPF64);
    a.push(U);
    const m = (A) => {
      const Ps = A ? Array.from(A.keys()) : [], Os = A ? Array.from(A.values()) : [], vs = S(Ps, Uint32Array, c.HEAPU32);
      a.push(vs);
      const zs = S(Os, Float64Array, c.HEAPF64);
      return a.push(zs), {
        keysPtr: vs,
        valuesPtr: zs,
        size: Ps.length
      };
    }, d = m(t.elasticities), p = m(t.elasticitiesOrthogonal), _ = m(t.areas), w = m(t.momentsOfInertiaZ), b = m(t.momentsOfInertiaY), x = m(t.shearModuli), u = m(t.torsionalConstants), T = m(t.thicknesses), R = m(t.poissonsRatios), N = m(t.shearAreasY), $ = m(t.shearAreasZ), G = t.rigidOffsets ? Array.from(t.rigidOffsets.keys()) : [], X = t.rigidOffsets ? Array.from(t.rigidOffsets.values()).flat() : [], D = S(G, Uint32Array, c.HEAPU32);
    a.push(D);
    const J = S(X, Float64Array, c.HEAPF64);
    a.push(J);
    const M = t.momentReleases ? Array.from(t.momentReleases.keys()) : [], j = t.momentReleases ? Array.from(t.momentReleases.values()).flat().map((A) => A ? 1 : 0) : [], C = S(M, Uint32Array, c.HEAPU32);
    a.push(C);
    const I = S(j, Uint8Array, c.HEAPU8);
    a.push(I);
    const B = c._malloc(4);
    a.push(B);
    const O = c._malloc(4);
    a.push(O);
    const ss = c._malloc(4);
    a.push(ss);
    const ts = c._malloc(4);
    a.push(ts);
    const os = e ? e.flatMap((A) => [
      A.node,
      A.dof,
      A.k
    ]) : [], k = S(os.length > 0 ? os : [
      0
    ], Float64Array, c.HEAPF64);
    a.push(k);
    const Z = t.plateFormulations, rs = Z ? Array.from(Z.keys()) : [], es = Z ? Array.from(Z.values()) : [], P = S(rs, Uint32Array, c.HEAPU32);
    a.push(P);
    const H = S(es, Uint32Array, c.HEAPU32);
    a.push(H);
    const F = t.drillingTypes, ns = F ? Array.from(F.keys()) : [], v = F ? Array.from(F.values()) : [], W = S(ns, Uint32Array, c.HEAPU32);
    a.push(W);
    const ys = S(v, Uint32Array, c.HEAPU32);
    a.push(ys);
    const is = t.drillingPenaltyScales, us = is ? Array.from(is.keys()) : [], Ms = is ? Array.from(is.values()) : [], ps = S(us, Uint32Array, c.HEAPU32);
    a.push(ps);
    const Fs = S(Ms, Float64Array, c.HEAPF64);
    a.push(Fs), c._deform(i, s.length, K, L.length, Q, o.length, q, l, V.length, n, U, E.length, d.keysPtr, d.valuesPtr, d.size, _.keysPtr, _.valuesPtr, _.size, w.keysPtr, w.valuesPtr, w.size, b.keysPtr, b.valuesPtr, b.size, x.keysPtr, x.valuesPtr, x.size, u.keysPtr, u.valuesPtr, u.size, T.keysPtr, T.valuesPtr, T.size, R.keysPtr, R.valuesPtr, R.size, p.keysPtr, p.valuesPtr, p.size, N.keysPtr, N.valuesPtr, N.size, $.keysPtr, $.valuesPtr, $.size, k, e ? e.length : 0, P, H, rs.length, W, ys, ns.length, ps, Fs, us.length, B, O, ss, ts);
    const Es = c.HEAPU32[B / 4], ds = c.HEAPU32[O / 4], ms = c.HEAPU32[ss / 4], Us = c.HEAPU32[ts / 4], Hs = new Float64Array(c.HEAPF64.buffer, Es, ds), gs = new Float64Array(c.HEAPF64.buffer, ms, Us), _s = /* @__PURE__ */ new Map();
    for (let A = 0; A < ds; A += 7) {
      const Ps = Hs[A];
      _s.set(Ps, Array.from(Hs.slice(A + 1, A + 7)));
    }
    const ks = /* @__PURE__ */ new Map();
    for (let A = 0; A < Us; A += 7) {
      const Ps = gs[A];
      ks.set(Ps, Array.from(gs.slice(A + 1, A + 7)));
    }
    return Es && a.push(Es), ms && a.push(ms), a.forEach((A) => c._free(A)), {
      deformations: _s,
      reactions: ks
    };
  };
  function S(s, o, r) {
    const t = new o(s), e = c._malloc(t.length * t.BYTES_PER_ELEMENT);
    return (o === Float64Array ? c.HEAPF64 : o === Uint32Array ? c.HEAPU32 : o === Uint8Array ? c.HEAPU8 : r).set(t, e / t.BYTES_PER_ELEMENT), e;
  }
  const h = await fs();
  Ks = function(s, o, r, t, e = 10, a = 0) {
    if (s.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const i = [], L = ls(s.flat(), Float64Array, h.HEAPF64);
    i.push(L);
    const K = o.flat(), Y = ls(K, Uint32Array, h.HEAPU32);
    i.push(Y);
    const Q = o.map((v) => v.length), V = ls(Q, Uint32Array, h.HEAPU32);
    i.push(V);
    const z = r.supports ? Array.from(r.supports.keys()) : [], q = r.supports ? Array.from(r.supports.values()).flat().map((v) => v ? 1 : 0) : [], l = ls(z, Uint32Array, h.HEAPU32);
    i.push(l);
    const E = ls(q, Uint8Array, h.HEAPU8);
    i.push(E);
    const f = (v) => {
      const W = v ? Array.from(v.keys()) : [], ys = v ? Array.from(v.values()) : [], is = ls(W, Uint32Array, h.HEAPU32);
      i.push(is);
      const us = ls(ys, Float64Array, h.HEAPF64);
      return i.push(us), {
        keysPtr: is,
        valuesPtr: us,
        size: W.length
      };
    }, n = f(t.elasticities), U = f(t.areas), m = f(t.momentsOfInertiaZ), d = f(t.momentsOfInertiaY), p = f(t.shearModuli), _ = f(t.torsionalConstants), w = f(t.densities), b = f(t.thicknesses), x = f(t.poissonsRatios), u = f(t.membraneModifiers), T = f(t.bendingModifiers), R = t.plateFormulations, N = R ? Array.from(R.keys()) : [], $ = R ? Array.from(R.values()) : [], G = ls(N, Uint32Array, h.HEAPU32);
    i.push(G);
    const X = ls($, Uint32Array, h.HEAPU32);
    i.push(X);
    const D = h._malloc(4);
    i.push(D);
    const J = h._malloc(4);
    i.push(J);
    const M = h._malloc(4);
    i.push(M);
    const j = h._malloc(4);
    i.push(j);
    const C = h._malloc(4);
    i.push(C);
    const I = h._malloc(4);
    i.push(I);
    const B = h._malloc(4);
    i.push(B);
    const O = h._malloc(4);
    i.push(O), h._modal(L, s.length, Y, K.length, V, o.length, l, E, z.length, n.keysPtr, n.valuesPtr, n.size, U.keysPtr, U.valuesPtr, U.size, m.keysPtr, m.valuesPtr, m.size, d.keysPtr, d.valuesPtr, d.size, p.keysPtr, p.valuesPtr, p.size, _.keysPtr, _.valuesPtr, _.size, w.keysPtr, w.valuesPtr, w.size, b.keysPtr, b.valuesPtr, b.size, x.keysPtr, x.valuesPtr, x.size, u.keysPtr, u.valuesPtr, u.size, T.keysPtr, T.valuesPtr, T.size, G, X, N.length, e, a, D, J, M, j, C, I, B, O);
    const ss = h.HEAPU32[D / 4], ts = h.HEAPU32[J / 4], os = h.HEAPU32[M / 4], k = h.HEAPU32[j / 4], Z = h.HEAPU32[C / 4], rs = h.HEAPU32[I / 4], es = h.HEAPU32[B / 4], P = h.HEAPU32[O / 4];
    let H = [], F = [], ns = [];
    if (ts > 0 && ss) {
      const v = new Float64Array(h.HEAPF64.buffer, ss, ts);
      H = Array.from(v), i.push(ss);
    }
    if (k > 0 && Z > 0 && os) {
      const v = new Float64Array(h.HEAPF64.buffer, os, k * Z);
      for (let W = 0; W < k; W++) F.push(Array.from(v.slice(W * Z, (W + 1) * Z)));
      i.push(os);
    }
    if (es > 0 && P > 0 && rs) {
      const v = new Float64Array(h.HEAPF64.buffer, rs, es * P);
      for (let W = 0; W < es; W++) ns.push(Array.from(v.slice(W * P, (W + 1) * P)));
      i.push(rs);
    }
    return i.forEach((v) => h._free(v)), {
      frequencies: H,
      modeShapes: F,
      massParticipation: ns
    };
  };
  function ls(s, o, r) {
    const t = new o(s), e = h._malloc(t.length * t.BYTES_PER_ELEMENT);
    return (o === Float64Array ? h.HEAPF64 : o === Uint32Array ? h.HEAPU32 : o === Uint8Array ? h.HEAPU8 : r).set(t, e / t.BYTES_PER_ELEMENT), e;
  }
  await fs();
  const as = await fs();
  Ts = function(s) {
    const { nodes: o, elements: r, E: t, nu: e, gamma: a, c: i, phi: L, thickness: K = 1, supports: Y, surcharge: Q = 0, surfaceYThreshold: V = -1e10 } = s, z = [], q = o.flat(), l = Ss(q);
    z.push(l);
    const E = r.flat(), f = bs(E);
    z.push(f);
    const n = [];
    for (const u of Y) n.push(u.node, u.fixX ? 1 : 0, u.fixY ? 1 : 0);
    const U = bs(n);
    z.push(U);
    const m = r.length, d = o.length, p = as._slopeAllocDouble(m);
    z.push(p);
    const _ = as._slopeAllocDouble(d * 2);
    z.push(_);
    const w = as._slopeStabilitySolver(l, d, f, m, t, e, a, i, L, K, U, Y.length, Q, V, p, _), b = [];
    for (let u = 0; u < m; u++) b.push(as.HEAPF64[p / 8 + u]);
    const x = [];
    for (let u = 0; u < d; u++) x.push([
      as.HEAPF64[_ / 8 + 2 * u],
      as.HEAPF64[_ / 8 + 2 * u + 1]
    ]);
    return z.forEach((u) => as._free(u)), {
      fos: w,
      plasticStrain: b,
      displacements: x
    };
  };
  function Ss(s) {
    const o = new Float64Array(s), r = as._malloc(o.length * o.BYTES_PER_ELEMENT);
    return as.HEAPF64.set(o, r / 8), r;
  }
  function bs(s) {
    const o = new Uint32Array(s), r = as._malloc(o.length * o.BYTES_PER_ELEMENT);
    return as.HEAPU32.set(o, r / 4), r;
  }
  const g = await fs();
  function hs(s, o, r) {
    const t = new o(s), e = g._malloc(t.length * t.BYTES_PER_ELEMENT);
    return (o === Float64Array ? g.HEAPF64 : o === Uint32Array ? g.HEAPU32 : o === Uint8Array ? g.HEAPU8 : r).set(t, e / t.BYTES_PER_ELEMENT), e;
  }
  Ls = function(s) {
    const o = [];
    let r = [], t = 0;
    s.nodes && s.nodes.length > 0 && (t = s.nodes.length, r = s.nodes.flat());
    const e = hs(r.length > 0 ? r : [
      0
    ], Float64Array, g.HEAPF64);
    o.push(e);
    let a = [], i = 0;
    s.elements && s.elements.length > 0 && (i = s.elements.length, a = s.elements.flat());
    const L = hs(a.length > 0 ? a : [
      0
    ], Int32Array, g.HEAPU32);
    o.push(L);
    let K = [], Y = 0;
    s.bcs && s.bcs.length > 0 && (Y = s.bcs.length, K = s.bcs.flatMap((P) => [
      P.node,
      P.dof,
      P.value
    ]));
    const Q = hs(K.length > 0 ? K : [
      0
    ], Float64Array, g.HEAPF64);
    o.push(Q);
    let V = [], z = 0;
    s.pointLoads && s.pointLoads.length > 0 && (z = s.pointLoads.length, V = s.pointLoads.flatMap((P) => [
      P.node,
      P.dof,
      P.value
    ]));
    const q = hs(V.length > 0 ? V : [
      0
    ], Float64Array, g.HEAPF64);
    o.push(q);
    const l = s.meshLx ?? 0, E = s.meshLy ?? 0, f = s.meshNx ?? 0, n = s.meshNy ?? 0, m = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[s.bcType ?? "none"] ?? 0, d = s.theoryType ?? 0;
    let p = [], _ = 0;
    s.springs && s.springs.length > 0 && (_ = s.springs.length, p = s.springs.flatMap((P) => [
      P.node,
      P.dof,
      P.k
    ]));
    const w = hs(p.length > 0 ? p : [
      0
    ], Float64Array, g.HEAPF64);
    o.push(w);
    let b = [], x = 0;
    s.thicknesses && s.thicknesses.length > 0 && (x = s.thicknesses.length, b = s.thicknesses.slice());
    const u = hs(b.length > 0 ? b : [
      0
    ], Float64Array, g.HEAPF64);
    o.push(u);
    const T = g._malloc(4);
    o.push(T);
    const R = g._malloc(4);
    o.push(R);
    const N = g._malloc(4);
    o.push(N);
    const $ = g._malloc(4);
    o.push($), g._plate_q4_solve(e, t, L, i, s.E, s.nu, s.thickness, Q, Y, s.pressure ?? 0, q, z, l, E, f, n, m, d, w, _, u, x, T, R, N, $);
    const G = g.HEAPU32[T / 4], X = g.HEAPU32[R / 4], D = g.HEAPU32[N / 4], J = g.HEAPU32[$ / 4], M = new Float64Array(g.HEAPF64.buffer, G, X), j = M[0], C = M[1], I = [];
    let B = 0;
    for (let P = 0; P < j; P++) {
      const H = 2 + P * 5, F = {
        x: M[H],
        y: M[H + 1],
        w: M[H + 2],
        bx: M[H + 3],
        by: M[H + 4]
      };
      I.push(F), Math.abs(F.w) > Math.abs(B) && (B = F.w);
    }
    const O = new Float64Array(g.HEAPF64.buffer, D, J), ss = [];
    let ts = 0, os = 0, k = 0, Z = 0, rs = 0;
    for (let P = 0; P < C; P++) {
      const H = P * 9, F = {
        nodes: [
          O[H],
          O[H + 1],
          O[H + 2],
          O[H + 3]
        ],
        Mxx: O[H + 4],
        Myy: O[H + 5],
        Mxy: O[H + 6],
        Qx: O[H + 7],
        Qy: O[H + 8]
      };
      ss.push(F), Math.abs(F.Mxx) > Math.abs(ts) && (ts = F.Mxx), Math.abs(F.Myy) > Math.abs(os) && (os = F.Myy), Math.abs(F.Mxy) > Math.abs(k) && (k = F.Mxy), Math.abs(F.Qx) > Math.abs(Z) && (Z = F.Qx), Math.abs(F.Qy) > Math.abs(rs) && (rs = F.Qy);
    }
    let es;
    if (l > 0 && E > 0) {
      const P = l / 2, H = E / 2;
      let F = 1 / 0;
      for (const ns of I) {
        const v = Math.hypot(ns.x - P, ns.y - H);
        v < F && (F = v, es = ns.w);
      }
    }
    return G && o.push(G), D && o.push(D), o.forEach((P) => g._free(P)), {
      nodeResults: I,
      elementResults: ss,
      maxW: B,
      maxMxx: ts,
      maxMyy: os,
      maxMxy: k,
      maxQx: Z,
      maxQy: rs,
      centerW: es
    };
  };
  const y = await fs();
  Ys = function(s, o, r, t) {
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
    const e = [], a = cs(s.flat(), Float64Array, y.HEAPF64);
    e.push(a);
    const i = o.flat(), L = cs(i, Uint32Array, y.HEAPU32);
    e.push(L);
    const K = o.map((k) => k.length), Y = cs(K, Uint32Array, y.HEAPU32);
    e.push(Y);
    const Q = r.supports ? Array.from(r.supports.keys()) : [], V = r.supports ? Array.from(r.supports.values()).flat().map((k) => k ? 1 : 0) : [], z = cs(Q, Uint32Array, y.HEAPU32);
    e.push(z);
    const q = cs(V, Uint8Array, y.HEAPU8);
    e.push(q);
    const l = r.loads ? Array.from(r.loads.keys()) : [], E = r.loads ? Array.from(r.loads.values()).flat() : [], f = cs(l, Uint32Array, y.HEAPU32);
    e.push(f);
    const n = cs(E, Float64Array, y.HEAPF64);
    e.push(n);
    const U = (k) => {
      const Z = k ? Array.from(k.keys()) : [], rs = k ? Array.from(k.values()) : [], es = cs(Z, Uint32Array, y.HEAPU32);
      e.push(es);
      const P = cs(rs, Float64Array, y.HEAPF64);
      return e.push(P), {
        keysPtr: es,
        valuesPtr: P,
        size: Z.length
      };
    }, m = U(t.elasticities), d = U(t.areas), p = U(t.momentsOfInertiaZ), _ = U(t.momentsOfInertiaY), w = U(t.shearModuli), b = U(t.torsionalConstants), x = U(t.thicknesses), u = U(t.poissonsRatios), T = U(t.shearAreasY), R = U(t.shearAreasZ), N = y._malloc(4);
    e.push(N);
    const $ = y._malloc(4);
    e.push($);
    const G = y._malloc(4);
    e.push(G);
    const X = y._malloc(4);
    e.push(X);
    const D = y._malloc(4);
    e.push(D);
    const J = y._malloc(4);
    e.push(J), y._didactic_solve(a, s.length, L, i.length, Y, o.length, z, q, Q.length, f, n, l.length, m.keysPtr, m.valuesPtr, m.size, d.keysPtr, d.valuesPtr, d.size, p.keysPtr, p.valuesPtr, p.size, _.keysPtr, _.valuesPtr, _.size, w.keysPtr, w.valuesPtr, w.size, b.keysPtr, b.valuesPtr, b.size, x.keysPtr, x.valuesPtr, x.size, u.keysPtr, u.valuesPtr, u.size, T.keysPtr, T.valuesPtr, T.size, R.keysPtr, R.valuesPtr, R.size, N, $, G, X, D, J);
    const M = y.HEAPU32[N / 4], j = y.HEAPU32[$ / 4], C = y.HEAPU32[G / 4], I = y.HEAPU32[X / 4], B = y.HEAPU32[D / 4], O = y.HEAPU32[J / 4], ss = M && j > 0 ? Array.from(new Float64Array(y.HEAPF64.buffer, M, j)) : [], ts = C && I > 0 ? Array.from(new Float64Array(y.HEAPF64.buffer, C, I)) : [], os = B && O > 0 ? Array.from(new Float64Array(y.HEAPF64.buffer, B, O)) : [];
    return M && e.push(M), C && e.push(C), B && e.push(B), e.forEach((k) => y._free(k)), xs(ss, ts, os, s.length, o.length);
  };
  function xs(s, o, r, t, e) {
    const a = t * 6, i = [];
    if (s.length > 0) {
      const l = s[0], E = [];
      for (let f = 0; f < l; f++) E.push(s[1 + f]);
      for (let f = 0; f < l; f++) {
        let n = E[f];
        const U = s[n++], m = s[n++], d = s[n++], p = d * d, _ = As(s.slice(n, n + p), d);
        n += p;
        const w = As(s.slice(n, n + p), d);
        n += p;
        const b = As(s.slice(n, n + p), d);
        n += p;
        const x = As(s.slice(n, n + 9), 3);
        n += 9;
        const u = s[n++], T = s[n++], R = s[n++], N = s[n++], $ = s[n++], G = s[n++], X = s[n++], D = s[n++], J = s[n++], M = s[n++], j = s[n++];
        i.push({
          index: U,
          type: m === 0 ? "frame" : "shell-Q4",
          nDOF: d,
          K_local: _,
          T: w,
          K_global: b,
          lambda: x,
          L: u,
          E: T,
          A: R,
          Iz: N,
          Iy: $,
          G,
          J: X,
          t: D,
          nu: J,
          phiZ: M,
          phiY: j
        });
      }
    }
    const L = [];
    let K = 0;
    if (o.length > 0) {
      K = o[0];
      for (let l = 0; l < K; l++) {
        const E = 1 + l * 3;
        L.push({
          row: o[E],
          col: o[E + 1],
          value: o[E + 2]
        });
      }
    }
    let Y = [], Q = [], V = [], z = [], q = [];
    if (r.length > 0) {
      let l = 0;
      const E = r[l++];
      Y = r.slice(l, l + E), l += E, Q = r.slice(l, l + E), l += E, V = r.slice(l, l + E), l += E;
      const f = r[l++];
      z = r.slice(l, l + f).map(Math.round), l += f;
      const n = r[l++];
      q = r.slice(l, l + n).map(Math.round);
    }
    return {
      nNodes: t,
      nElements: e,
      nDOF: a,
      elements: i,
      K_assembled_sparse: L,
      K_assembled_nnz: K,
      F_applied: Y,
      U_full: Q,
      R_full: V,
      freeDOFs: z,
      fixedDOFs: q
    };
  }
  function As(s, o) {
    const r = [];
    for (let t = 0; t < o; t++) r.push(s.slice(t * o, (t + 1) * o));
    return r;
  }
  function cs(s, o, r) {
    const t = new o(s), e = y._malloc(t.length * t.BYTES_PER_ELEMENT);
    return (o === Float64Array ? y.HEAPF64 : o === Uint32Array ? y.HEAPU32 : o === Uint8Array ? y.HEAPU8 : r).set(t, e / t.BYTES_PER_ELEMENT), e;
  }
});
export {
  __tla,
  Ys as a,
  Rs as d,
  Ks as m,
  Ls as p,
  Ts as s
};
