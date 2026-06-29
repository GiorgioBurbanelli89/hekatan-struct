import { M as fs, __tla as __tla_0 } from "./deform-CJHwc1af.js";
let Ys, Ts, Rs, Ls, Ks;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const P = await fs();
  Ts = function(s, o, r, t, e) {
    if (s.length === 0) return;
    const l = [], c = O(s.flat(), Float64Array, P.HEAPF64);
    l.push(c);
    const L = o.flat(), R = O(L, Uint32Array, P.HEAPU32);
    l.push(R);
    const Y = o.map((u) => u.length), Z = O(Y, Uint32Array, P.HEAPU32);
    l.push(Z);
    const V = r.supports ? Array.from(r.supports.keys()) : [], v = r.supports ? Array.from(r.supports.values()).flat().map((u) => u ? 1 : 0) : [], Q = O(V, Uint32Array, P.HEAPU32);
    l.push(Q);
    const n = O(v, Uint8Array, P.HEAPU8);
    l.push(n);
    const A = r.loads ? Array.from(r.loads.keys()) : [], h = r.loads ? Array.from(r.loads.values()).flat() : [], a = O(A, Uint32Array, P.HEAPU32);
    l.push(a);
    const g = O(h, Float64Array, P.HEAPF64);
    l.push(g);
    const p = (u) => {
      const Ps = u ? Array.from(u.keys()) : [], Os = u ? Array.from(u.values()) : [], vs = O(Ps, Uint32Array, P.HEAPU32);
      l.push(vs);
      const zs = O(Os, Float64Array, P.HEAPF64);
      return l.push(zs), {
        keysPtr: vs,
        valuesPtr: zs,
        size: Ps.length
      };
    }, F = p(t.elasticities), E = p(t.elasticitiesOrthogonal), U = p(t.areas), w = p(t.momentsOfInertiaZ), z = p(t.momentsOfInertiaY), S = p(t.shearModuli), f = p(t.torsionalConstants), K = p(t.thicknesses), T = p(t.poissonsRatios), N = p(t.shearAreasY), q = p(t.shearAreasZ), W = t.rigidOffsets ? Array.from(t.rigidOffsets.keys()) : [], J = t.rigidOffsets ? Array.from(t.rigidOffsets.values()).flat() : [], $ = O(W, Uint32Array, P.HEAPU32);
    l.push($);
    const G = O(J, Float64Array, P.HEAPF64);
    l.push(G);
    const b = t.momentReleases ? Array.from(t.momentReleases.keys()) : [], X = t.momentReleases ? Array.from(t.momentReleases.values()).flat().map((u) => u ? 1 : 0) : [], j = O(b, Uint32Array, P.HEAPU32);
    l.push(j);
    const I = O(X, Uint8Array, P.HEAPU8);
    l.push(I);
    const B = P._malloc(4);
    l.push(B);
    const M = P._malloc(4);
    l.push(M);
    const ss = P._malloc(4);
    l.push(ss);
    const ts = P._malloc(4);
    l.push(ts);
    const rs = e ? e.flatMap((u) => [
      u.node,
      u.dof,
      u.k
    ]) : [], _ = O(rs.length > 0 ? rs : [
      0
    ], Float64Array, P.HEAPF64);
    l.push(_);
    const C = t.plateFormulations, os = C ? Array.from(C.keys()) : [], es = C ? Array.from(C.values()) : [], i = O(os, Uint32Array, P.HEAPU32);
    l.push(i);
    const H = O(es, Uint32Array, P.HEAPU32);
    l.push(H);
    const d = t.drillingTypes, ls = d ? Array.from(d.keys()) : [], k = d ? Array.from(d.values()) : [], D = O(ls, Uint32Array, P.HEAPU32);
    l.push(D);
    const us = O(k, Uint32Array, P.HEAPU32);
    l.push(us);
    const is = t.drillingPenaltyScales, ys = is ? Array.from(is.keys()) : [], Ms = is ? Array.from(is.values()) : [], Es = O(ys, Uint32Array, P.HEAPU32);
    l.push(Es);
    const ds = O(Ms, Float64Array, P.HEAPF64);
    l.push(ds), P._deform(c, s.length, R, L.length, Z, o.length, Q, n, V.length, a, g, A.length, F.keysPtr, F.valuesPtr, F.size, U.keysPtr, U.valuesPtr, U.size, w.keysPtr, w.valuesPtr, w.size, z.keysPtr, z.valuesPtr, z.size, S.keysPtr, S.valuesPtr, S.size, f.keysPtr, f.valuesPtr, f.size, K.keysPtr, K.valuesPtr, K.size, T.keysPtr, T.valuesPtr, T.size, E.keysPtr, E.valuesPtr, E.size, N.keysPtr, N.valuesPtr, N.size, q.keysPtr, q.valuesPtr, q.size, _, e ? e.length : 0, i, H, os.length, D, us, ls.length, Es, ds, ys.length, B, M, ss, ts);
    const ps = P.HEAPU32[B / 4], Fs = P.HEAPU32[M / 4], ms = P.HEAPU32[ss / 4], gs = P.HEAPU32[ts / 4], Hs = new Float64Array(P.HEAPF64.buffer, ps, Fs), Us = new Float64Array(P.HEAPF64.buffer, ms, gs), _s = /* @__PURE__ */ new Map();
    for (let u = 0; u < Fs; u += 7) {
      const Ps = Hs[u];
      _s.set(Ps, Array.from(Hs.slice(u + 1, u + 7)));
    }
    const ks = /* @__PURE__ */ new Map();
    for (let u = 0; u < gs; u += 7) {
      const Ps = Us[u];
      ks.set(Ps, Array.from(Us.slice(u + 1, u + 7)));
    }
    return ps && l.push(ps), ms && l.push(ms), l.forEach((u) => P._free(u)), {
      deformations: _s,
      reactions: ks
    };
  };
  function O(s, o, r) {
    const t = new o(s), e = P._malloc(t.length * t.BYTES_PER_ELEMENT);
    return r.set(t, e / t.BYTES_PER_ELEMENT), e;
  }
  const y = await fs();
  Rs = function(s, o, r, t, e = 10, l = 0) {
    if (s.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const c = [], L = ns(s.flat(), Float64Array, y.HEAPF64);
    c.push(L);
    const R = o.flat(), Y = ns(R, Uint32Array, y.HEAPU32);
    c.push(Y);
    const Z = o.map((k) => k.length), V = ns(Z, Uint32Array, y.HEAPU32);
    c.push(V);
    const v = r.supports ? Array.from(r.supports.keys()) : [], Q = r.supports ? Array.from(r.supports.values()).flat().map((k) => k ? 1 : 0) : [], n = ns(v, Uint32Array, y.HEAPU32);
    c.push(n);
    const A = ns(Q, Uint8Array, y.HEAPU8);
    c.push(A);
    const h = (k) => {
      const D = k ? Array.from(k.keys()) : [], us = k ? Array.from(k.values()) : [], is = ns(D, Uint32Array, y.HEAPU32);
      c.push(is);
      const ys = ns(us, Float64Array, y.HEAPF64);
      return c.push(ys), {
        keysPtr: is,
        valuesPtr: ys,
        size: D.length
      };
    }, a = h(t.elasticities), g = h(t.areas), p = h(t.momentsOfInertiaZ), F = h(t.momentsOfInertiaY), E = h(t.shearModuli), U = h(t.torsionalConstants), w = h(t.densities), z = h(t.thicknesses), S = h(t.poissonsRatios), f = h(t.membraneModifiers), K = h(t.bendingModifiers), T = t.plateFormulations, N = T ? Array.from(T.keys()) : [], q = T ? Array.from(T.values()) : [], W = ns(N, Uint32Array, y.HEAPU32);
    c.push(W);
    const J = ns(q, Uint32Array, y.HEAPU32);
    c.push(J);
    const $ = y._malloc(4);
    c.push($);
    const G = y._malloc(4);
    c.push(G);
    const b = y._malloc(4);
    c.push(b);
    const X = y._malloc(4);
    c.push(X);
    const j = y._malloc(4);
    c.push(j);
    const I = y._malloc(4);
    c.push(I);
    const B = y._malloc(4);
    c.push(B);
    const M = y._malloc(4);
    c.push(M), y._modal(L, s.length, Y, R.length, V, o.length, n, A, v.length, a.keysPtr, a.valuesPtr, a.size, g.keysPtr, g.valuesPtr, g.size, p.keysPtr, p.valuesPtr, p.size, F.keysPtr, F.valuesPtr, F.size, E.keysPtr, E.valuesPtr, E.size, U.keysPtr, U.valuesPtr, U.size, w.keysPtr, w.valuesPtr, w.size, z.keysPtr, z.valuesPtr, z.size, S.keysPtr, S.valuesPtr, S.size, f.keysPtr, f.valuesPtr, f.size, K.keysPtr, K.valuesPtr, K.size, W, J, N.length, e, l, $, G, b, X, j, I, B, M);
    const ss = y.HEAPU32[$ / 4], ts = y.HEAPU32[G / 4], rs = y.HEAPU32[b / 4], _ = y.HEAPU32[X / 4], C = y.HEAPU32[j / 4], os = y.HEAPU32[I / 4], es = y.HEAPU32[B / 4], i = y.HEAPU32[M / 4];
    let H = [], d = [], ls = [];
    if (ts > 0 && ss) {
      const k = new Float64Array(y.HEAPF64.buffer, ss, ts);
      H = Array.from(k), c.push(ss);
    }
    if (_ > 0 && C > 0 && rs) {
      const k = new Float64Array(y.HEAPF64.buffer, rs, _ * C);
      for (let D = 0; D < _; D++) d.push(Array.from(k.slice(D * C, (D + 1) * C)));
      c.push(rs);
    }
    if (es > 0 && i > 0 && os) {
      const k = new Float64Array(y.HEAPF64.buffer, os, es * i);
      for (let D = 0; D < es; D++) ls.push(Array.from(k.slice(D * i, (D + 1) * i)));
      c.push(os);
    }
    return c.forEach((k) => y._free(k)), {
      frequencies: H,
      modeShapes: d,
      massParticipation: ls
    };
  };
  function ns(s, o, r) {
    const t = new o(s), e = y._malloc(t.length * t.BYTES_PER_ELEMENT);
    return r.set(t, e / t.BYTES_PER_ELEMENT), e;
  }
  await fs();
  const as = await fs();
  Ks = function(s) {
    const { nodes: o, elements: r, E: t, nu: e, gamma: l, c, phi: L, thickness: R = 1, supports: Y, surcharge: Z = 0, surfaceYThreshold: V = -1e10 } = s, v = [], Q = o.flat(), n = Ss(Q);
    v.push(n);
    const A = r.flat(), h = bs(A);
    v.push(h);
    const a = [];
    for (const f of Y) a.push(f.node, f.fixX ? 1 : 0, f.fixY ? 1 : 0);
    const g = bs(a);
    v.push(g);
    const p = r.length, F = o.length, E = as._slopeAllocDouble(p);
    v.push(E);
    const U = as._slopeAllocDouble(F * 2);
    v.push(U);
    const w = as._slopeStabilitySolver(n, F, h, p, t, e, l, c, L, R, g, Y.length, Z, V, E, U), z = [];
    for (let f = 0; f < p; f++) z.push(as.HEAPF64[E / 8 + f]);
    const S = [];
    for (let f = 0; f < F; f++) S.push([
      as.HEAPF64[U / 8 + 2 * f],
      as.HEAPF64[U / 8 + 2 * f + 1]
    ]);
    return v.forEach((f) => as._free(f)), {
      fos: w,
      plasticStrain: z,
      displacements: S
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
  const x = await fs();
  function hs(s, o, r) {
    const t = new o(s), e = x._malloc(t.length * t.BYTES_PER_ELEMENT);
    return r.set(t, e / t.BYTES_PER_ELEMENT), e;
  }
  Ls = function(s) {
    const o = [];
    let r = [], t = 0;
    s.nodes && s.nodes.length > 0 && (t = s.nodes.length, r = s.nodes.flat());
    const e = hs(r.length > 0 ? r : [
      0
    ], Float64Array, x.HEAPF64);
    o.push(e);
    let l = [], c = 0;
    s.elements && s.elements.length > 0 && (c = s.elements.length, l = s.elements.flat());
    const L = hs(l.length > 0 ? l : [
      0
    ], Int32Array, x.HEAPU32);
    o.push(L);
    let R = [], Y = 0;
    s.bcs && s.bcs.length > 0 && (Y = s.bcs.length, R = s.bcs.flatMap((i) => [
      i.node,
      i.dof,
      i.value
    ]));
    const Z = hs(R.length > 0 ? R : [
      0
    ], Float64Array, x.HEAPF64);
    o.push(Z);
    let V = [], v = 0;
    s.pointLoads && s.pointLoads.length > 0 && (v = s.pointLoads.length, V = s.pointLoads.flatMap((i) => [
      i.node,
      i.dof,
      i.value
    ]));
    const Q = hs(V.length > 0 ? V : [
      0
    ], Float64Array, x.HEAPF64);
    o.push(Q);
    const n = s.meshLx ?? 0, A = s.meshLy ?? 0, h = s.meshNx ?? 0, a = s.meshNy ?? 0, p = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[s.bcType ?? "none"] ?? 0, F = s.theoryType ?? 0;
    let E = [], U = 0;
    s.springs && s.springs.length > 0 && (U = s.springs.length, E = s.springs.flatMap((i) => [
      i.node,
      i.dof,
      i.k
    ]));
    const w = hs(E.length > 0 ? E : [
      0
    ], Float64Array, x.HEAPF64);
    o.push(w);
    let z = [], S = 0;
    s.thicknesses && s.thicknesses.length > 0 && (S = s.thicknesses.length, z = s.thicknesses.slice());
    const f = hs(z.length > 0 ? z : [
      0
    ], Float64Array, x.HEAPF64);
    o.push(f);
    const K = x._malloc(4);
    o.push(K);
    const T = x._malloc(4);
    o.push(T);
    const N = x._malloc(4);
    o.push(N);
    const q = x._malloc(4);
    o.push(q), x._plate_q4_solve(e, t, L, c, s.E, s.nu, s.thickness, Z, Y, s.pressure ?? 0, Q, v, n, A, h, a, p, F, w, U, f, S, K, T, N, q);
    const W = x.HEAPU32[K / 4], J = x.HEAPU32[T / 4], $ = x.HEAPU32[N / 4], G = x.HEAPU32[q / 4], b = new Float64Array(x.HEAPF64.buffer, W, J), X = b[0], j = b[1], I = [];
    let B = 0;
    for (let i = 0; i < X; i++) {
      const H = 2 + i * 5, d = {
        x: b[H],
        y: b[H + 1],
        w: b[H + 2],
        bx: b[H + 3],
        by: b[H + 4]
      };
      I.push(d), Math.abs(d.w) > Math.abs(B) && (B = d.w);
    }
    const M = new Float64Array(x.HEAPF64.buffer, $, G), ss = [];
    let ts = 0, rs = 0, _ = 0, C = 0, os = 0;
    for (let i = 0; i < j; i++) {
      const H = i * 9, d = {
        nodes: [
          M[H],
          M[H + 1],
          M[H + 2],
          M[H + 3]
        ],
        Mxx: M[H + 4],
        Myy: M[H + 5],
        Mxy: M[H + 6],
        Qx: M[H + 7],
        Qy: M[H + 8]
      };
      ss.push(d), Math.abs(d.Mxx) > Math.abs(ts) && (ts = d.Mxx), Math.abs(d.Myy) > Math.abs(rs) && (rs = d.Myy), Math.abs(d.Mxy) > Math.abs(_) && (_ = d.Mxy), Math.abs(d.Qx) > Math.abs(C) && (C = d.Qx), Math.abs(d.Qy) > Math.abs(os) && (os = d.Qy);
    }
    let es;
    if (n > 0 && A > 0) {
      const i = n / 2, H = A / 2;
      let d = 1 / 0;
      for (const ls of I) {
        const k = Math.hypot(ls.x - i, ls.y - H);
        k < d && (d = k, es = ls.w);
      }
    }
    return W && o.push(W), $ && o.push($), o.forEach((i) => x._free(i)), {
      nodeResults: I,
      elementResults: ss,
      maxW: B,
      maxMxx: ts,
      maxMyy: rs,
      maxMxy: _,
      maxQx: C,
      maxQy: os,
      centerW: es
    };
  };
  const m = await fs();
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
    const e = [], l = cs(s.flat(), Float64Array, m.HEAPF64);
    e.push(l);
    const c = o.flat(), L = cs(c, Uint32Array, m.HEAPU32);
    e.push(L);
    const R = o.map((_) => _.length), Y = cs(R, Uint32Array, m.HEAPU32);
    e.push(Y);
    const Z = r.supports ? Array.from(r.supports.keys()) : [], V = r.supports ? Array.from(r.supports.values()).flat().map((_) => _ ? 1 : 0) : [], v = cs(Z, Uint32Array, m.HEAPU32);
    e.push(v);
    const Q = cs(V, Uint8Array, m.HEAPU8);
    e.push(Q);
    const n = r.loads ? Array.from(r.loads.keys()) : [], A = r.loads ? Array.from(r.loads.values()).flat() : [], h = cs(n, Uint32Array, m.HEAPU32);
    e.push(h);
    const a = cs(A, Float64Array, m.HEAPF64);
    e.push(a);
    const g = (_) => {
      const C = _ ? Array.from(_.keys()) : [], os = _ ? Array.from(_.values()) : [], es = cs(C, Uint32Array, m.HEAPU32);
      e.push(es);
      const i = cs(os, Float64Array, m.HEAPF64);
      return e.push(i), {
        keysPtr: es,
        valuesPtr: i,
        size: C.length
      };
    }, p = g(t.elasticities), F = g(t.areas), E = g(t.momentsOfInertiaZ), U = g(t.momentsOfInertiaY), w = g(t.shearModuli), z = g(t.torsionalConstants), S = g(t.thicknesses), f = g(t.poissonsRatios), K = g(t.shearAreasY), T = g(t.shearAreasZ), N = m._malloc(4);
    e.push(N);
    const q = m._malloc(4);
    e.push(q);
    const W = m._malloc(4);
    e.push(W);
    const J = m._malloc(4);
    e.push(J);
    const $ = m._malloc(4);
    e.push($);
    const G = m._malloc(4);
    e.push(G), m._didactic_solve(l, s.length, L, c.length, Y, o.length, v, Q, Z.length, h, a, n.length, p.keysPtr, p.valuesPtr, p.size, F.keysPtr, F.valuesPtr, F.size, E.keysPtr, E.valuesPtr, E.size, U.keysPtr, U.valuesPtr, U.size, w.keysPtr, w.valuesPtr, w.size, z.keysPtr, z.valuesPtr, z.size, S.keysPtr, S.valuesPtr, S.size, f.keysPtr, f.valuesPtr, f.size, K.keysPtr, K.valuesPtr, K.size, T.keysPtr, T.valuesPtr, T.size, N, q, W, J, $, G);
    const b = m.HEAPU32[N / 4], X = m.HEAPU32[q / 4], j = m.HEAPU32[W / 4], I = m.HEAPU32[J / 4], B = m.HEAPU32[$ / 4], M = m.HEAPU32[G / 4], ss = b && X > 0 ? Array.from(new Float64Array(m.HEAPF64.buffer, b, X)) : [], ts = j && I > 0 ? Array.from(new Float64Array(m.HEAPF64.buffer, j, I)) : [], rs = B && M > 0 ? Array.from(new Float64Array(m.HEAPF64.buffer, B, M)) : [];
    return b && e.push(b), j && e.push(j), B && e.push(B), e.forEach((_) => m._free(_)), xs(ss, ts, rs, s.length, o.length);
  };
  function xs(s, o, r, t, e) {
    const l = t * 6, c = [];
    if (s.length > 0) {
      const n = s[0], A = [];
      for (let h = 0; h < n; h++) A.push(s[1 + h]);
      for (let h = 0; h < n; h++) {
        let a = A[h];
        const g = s[a++], p = s[a++], F = s[a++], E = F * F, U = As(s.slice(a, a + E), F);
        a += E;
        const w = As(s.slice(a, a + E), F);
        a += E;
        const z = As(s.slice(a, a + E), F);
        a += E;
        const S = As(s.slice(a, a + 9), 3);
        a += 9;
        const f = s[a++], K = s[a++], T = s[a++], N = s[a++], q = s[a++], W = s[a++], J = s[a++], $ = s[a++], G = s[a++], b = s[a++], X = s[a++];
        c.push({
          index: g,
          type: p === 0 ? "frame" : "shell-Q4",
          nDOF: F,
          K_local: U,
          T: w,
          K_global: z,
          lambda: S,
          L: f,
          E: K,
          A: T,
          Iz: N,
          Iy: q,
          G: W,
          J,
          t: $,
          nu: G,
          phiZ: b,
          phiY: X
        });
      }
    }
    const L = [];
    let R = 0;
    if (o.length > 0) {
      R = o[0];
      for (let n = 0; n < R; n++) {
        const A = 1 + n * 3;
        L.push({
          row: o[A],
          col: o[A + 1],
          value: o[A + 2]
        });
      }
    }
    let Y = [], Z = [], V = [], v = [], Q = [];
    if (r.length > 0) {
      let n = 0;
      const A = r[n++];
      Y = r.slice(n, n + A), n += A, Z = r.slice(n, n + A), n += A, V = r.slice(n, n + A), n += A;
      const h = r[n++];
      v = r.slice(n, n + h).map(Math.round), n += h;
      const a = r[n++];
      Q = r.slice(n, n + a).map(Math.round);
    }
    return {
      nNodes: t,
      nElements: e,
      nDOF: l,
      elements: c,
      K_assembled_sparse: L,
      K_assembled_nnz: R,
      F_applied: Y,
      U_full: Z,
      R_full: V,
      freeDOFs: v,
      fixedDOFs: Q
    };
  }
  function As(s, o) {
    const r = [];
    for (let t = 0; t < o; t++) r.push(s.slice(t * o, (t + 1) * o));
    return r;
  }
  function cs(s, o, r) {
    const t = new o(s), e = m._malloc(t.length * t.BYTES_PER_ELEMENT);
    return r.set(t, e / t.BYTES_PER_ELEMENT), e;
  }
});
export {
  __tla,
  Ys as a,
  Ts as d,
  Rs as m,
  Ls as p,
  Ks as s
};
