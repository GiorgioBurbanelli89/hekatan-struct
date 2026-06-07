import { M as ms, __tla as __tla_0 } from "./deform-D-nmLsId.js";
let Vs, Ts, Rs, Ls, Ks;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const h = await ms();
  Ts = function(s, o, r, t, a) {
    if (s.length === 0) return;
    const e = [], K = z(s.flat(), Float64Array, h.HEAPF64);
    e.push(K);
    const L = o.flat(), R = z(L, Uint32Array, h.HEAPU32);
    e.push(R);
    const q = o.map((A) => A.length), V = z(q, Uint32Array, h.HEAPU32);
    e.push(V);
    const Y = r.supports ? Array.from(r.supports.keys()) : [], b = r.supports ? Array.from(r.supports.values()).flat().map((A) => A ? 1 : 0) : [], N = z(Y, Uint32Array, h.HEAPU32);
    e.push(N);
    const l = z(b, Uint8Array, h.HEAPU8);
    e.push(l);
    const c = r.loads ? Array.from(r.loads.keys()) : [], F = r.loads ? Array.from(r.loads.values()).flat() : [], n = z(c, Uint32Array, h.HEAPU32);
    e.push(n);
    const U = z(F, Float64Array, h.HEAPF64);
    e.push(U);
    const m = (A) => {
      const us = A ? Array.from(A.keys()) : [], bs = A ? Array.from(A.values()) : [], xs = z(us, Uint32Array, h.HEAPU32);
      e.push(xs);
      const zs = z(bs, Float64Array, h.HEAPF64);
      return e.push(zs), {
        keysPtr: xs,
        valuesPtr: zs,
        size: us.length
      };
    }, g = m(t.elasticities), E = m(t.elasticitiesOrthogonal), _ = m(t.areas), w = m(t.momentsOfInertiaZ), k = m(t.momentsOfInertiaY), O = m(t.shearModuli), y = m(t.torsionalConstants), T = m(t.thicknesses), Q = m(t.poissonsRatios), D = m(t.shearAreasY), C = m(t.shearAreasZ), $ = t.rigidOffsets ? Array.from(t.rigidOffsets.keys()) : [], G = t.rigidOffsets ? Array.from(t.rigidOffsets.values()).flat() : [], Z = z($, Uint32Array, h.HEAPU32);
    e.push(Z);
    const j = z(G, Float64Array, h.HEAPF64);
    e.push(j);
    const v = t.momentReleases ? Array.from(t.momentReleases.keys()) : [], X = t.momentReleases ? Array.from(t.momentReleases.values()).flat().map((A) => A ? 1 : 0) : [], I = z(v, Uint32Array, h.HEAPU32);
    e.push(I);
    const ss = z(X, Uint8Array, h.HEAPU8);
    e.push(ss);
    const B = h._malloc(4);
    e.push(B);
    const x = h._malloc(4);
    e.push(x);
    const as = h._malloc(4);
    e.push(as);
    const J = h._malloc(4);
    e.push(J);
    const ts = a ? a.flatMap((A) => [
      A.node,
      A.dof,
      A.k
    ]) : [], H = z(ts.length > 0 ? ts : [
      0
    ], Float64Array, h.HEAPF64);
    e.push(H);
    const W = t.plateFormulations, es = W ? Array.from(W.keys()) : [], os = W ? Array.from(W.values()) : [], i = z(es, Uint32Array, h.HEAPU32);
    e.push(i);
    const d = z(os, Uint32Array, h.HEAPU32);
    e.push(d);
    const P = t.drillingTypes, u = P ? Array.from(P.keys()) : [], S = P ? Array.from(P.values()) : [], ys = z(u, Uint32Array, h.HEAPU32);
    e.push(ys);
    const hs = z(S, Uint32Array, h.HEAPU32);
    e.push(hs);
    const ls = t.drillingPenaltyScales, rs = ls ? Array.from(ls.keys()) : [], cs = ls ? Array.from(ls.values()) : [], fs = z(rs, Uint32Array, h.HEAPU32);
    e.push(fs);
    const ps = z(cs, Float64Array, h.HEAPF64);
    e.push(ps), h._deform(K, s.length, R, L.length, V, o.length, N, l, Y.length, n, U, c.length, g.keysPtr, g.valuesPtr, g.size, _.keysPtr, _.valuesPtr, _.size, w.keysPtr, w.valuesPtr, w.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, y.keysPtr, y.valuesPtr, y.size, T.keysPtr, T.valuesPtr, T.size, Q.keysPtr, Q.valuesPtr, Q.size, E.keysPtr, E.valuesPtr, E.size, D.keysPtr, D.valuesPtr, D.size, C.keysPtr, C.valuesPtr, C.size, H, a ? a.length : 0, i, d, es.length, ys, hs, u.length, fs, ps, rs.length, Z, j, $.length, B, x, as, J);
    const Es = h.HEAPU32[B / 4], ds = h.HEAPU32[x / 4], gs = h.HEAPU32[as / 4], Us = h.HEAPU32[J / 4], Hs = new Float64Array(h.HEAPF64.buffer, Es, ds), _s = new Float64Array(h.HEAPF64.buffer, gs, Us), ks = /* @__PURE__ */ new Map();
    for (let A = 0; A < ds; A += 7) {
      const us = Hs[A];
      ks.set(us, Array.from(Hs.slice(A + 1, A + 7)));
    }
    const vs = /* @__PURE__ */ new Map();
    for (let A = 0; A < Us; A += 7) {
      const us = _s[A];
      vs.set(us, Array.from(_s.slice(A + 1, A + 7)));
    }
    return Es && e.push(Es), gs && e.push(gs), e.forEach((A) => h._free(A)), {
      deformations: ks,
      reactions: vs
    };
  };
  function z(s, o, r) {
    const t = new o(s), a = h._malloc(t.length * t.BYTES_PER_ELEMENT);
    return r.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  const f = await ms();
  Rs = function(s, o, r, t, a = 10) {
    if (s.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const e = [], K = is(s.flat(), Float64Array, f.HEAPF64);
    e.push(K);
    const L = o.flat(), R = is(L, Uint32Array, f.HEAPU32);
    e.push(R);
    const q = o.map((u) => u.length), V = is(q, Uint32Array, f.HEAPU32);
    e.push(V);
    const Y = r.supports ? Array.from(r.supports.keys()) : [], b = r.supports ? Array.from(r.supports.values()).flat().map((u) => u ? 1 : 0) : [], N = is(Y, Uint32Array, f.HEAPU32);
    e.push(N);
    const l = is(b, Uint8Array, f.HEAPU8);
    e.push(l);
    const c = (u) => {
      const S = u ? Array.from(u.keys()) : [], ys = u ? Array.from(u.values()) : [], hs = is(S, Uint32Array, f.HEAPU32);
      e.push(hs);
      const ls = is(ys, Float64Array, f.HEAPF64);
      return e.push(ls), {
        keysPtr: hs,
        valuesPtr: ls,
        size: S.length
      };
    }, F = c(t.elasticities), n = c(t.areas), U = c(t.momentsOfInertiaZ), m = c(t.momentsOfInertiaY), g = c(t.shearModuli), E = c(t.torsionalConstants), _ = c(t.densities), w = c(t.thicknesses), k = c(t.poissonsRatios), O = c(t.membraneModifiers), y = c(t.bendingModifiers), T = t.plateFormulations, Q = T ? Array.from(T.keys()) : [], D = T ? Array.from(T.values()) : [], C = is(Q, Uint32Array, f.HEAPU32);
    e.push(C);
    const $ = is(D, Uint32Array, f.HEAPU32);
    e.push($);
    const G = f._malloc(4);
    e.push(G);
    const Z = f._malloc(4);
    e.push(Z);
    const j = f._malloc(4);
    e.push(j);
    const v = f._malloc(4);
    e.push(v);
    const X = f._malloc(4);
    e.push(X);
    const I = f._malloc(4);
    e.push(I);
    const ss = f._malloc(4);
    e.push(ss);
    const B = f._malloc(4);
    e.push(B), f._modal(K, s.length, R, L.length, V, o.length, N, l, Y.length, F.keysPtr, F.valuesPtr, F.size, n.keysPtr, n.valuesPtr, n.size, U.keysPtr, U.valuesPtr, U.size, m.keysPtr, m.valuesPtr, m.size, g.keysPtr, g.valuesPtr, g.size, E.keysPtr, E.valuesPtr, E.size, _.keysPtr, _.valuesPtr, _.size, w.keysPtr, w.valuesPtr, w.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, y.keysPtr, y.valuesPtr, y.size, C, $, Q.length, a, G, Z, j, v, X, I, ss, B);
    const x = f.HEAPU32[G / 4], as = f.HEAPU32[Z / 4], J = f.HEAPU32[j / 4], ts = f.HEAPU32[v / 4], H = f.HEAPU32[X / 4], W = f.HEAPU32[I / 4], es = f.HEAPU32[ss / 4], os = f.HEAPU32[B / 4];
    let i = [], d = [], P = [];
    if (as > 0 && x) {
      const u = new Float64Array(f.HEAPF64.buffer, x, as);
      i = Array.from(u), e.push(x);
    }
    if (ts > 0 && H > 0 && J) {
      const u = new Float64Array(f.HEAPF64.buffer, J, ts * H);
      for (let S = 0; S < ts; S++) d.push(Array.from(u.slice(S * H, (S + 1) * H)));
      e.push(J);
    }
    if (es > 0 && os > 0 && W) {
      const u = new Float64Array(f.HEAPF64.buffer, W, es * os);
      for (let S = 0; S < es; S++) P.push(Array.from(u.slice(S * os, (S + 1) * os)));
      e.push(W);
    }
    return e.forEach((u) => f._free(u)), {
      frequencies: i,
      modeShapes: d,
      massParticipation: P
    };
  };
  function is(s, o, r) {
    const t = new o(s), a = f._malloc(t.length * t.BYTES_PER_ELEMENT);
    return r.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  await ms();
  const ns = await ms();
  Ks = function(s) {
    const { nodes: o, elements: r, E: t, nu: a, gamma: e, c: K, phi: L, thickness: R = 1, supports: q, surcharge: V = 0, surfaceYThreshold: Y = -1e10 } = s, b = [], N = o.flat(), l = Os(N);
    b.push(l);
    const c = r.flat(), F = Ms(c);
    b.push(F);
    const n = [];
    for (const y of q) n.push(y.node, y.fixX ? 1 : 0, y.fixY ? 1 : 0);
    const U = Ms(n);
    b.push(U);
    const m = r.length, g = o.length, E = ns._slopeAllocDouble(m);
    b.push(E);
    const _ = ns._slopeAllocDouble(g * 2);
    b.push(_);
    const w = ns._slopeStabilitySolver(l, g, F, m, t, a, e, K, L, R, U, q.length, V, Y, E, _), k = [];
    for (let y = 0; y < m; y++) k.push(ns.HEAPF64[E / 8 + y]);
    const O = [];
    for (let y = 0; y < g; y++) O.push([
      ns.HEAPF64[_ / 8 + 2 * y],
      ns.HEAPF64[_ / 8 + 2 * y + 1]
    ]);
    return b.forEach((y) => ns._free(y)), {
      fos: w,
      plasticStrain: k,
      displacements: O
    };
  };
  function Os(s) {
    const o = new Float64Array(s), r = ns._malloc(o.length * o.BYTES_PER_ELEMENT);
    return ns.HEAPF64.set(o, r / 8), r;
  }
  function Ms(s) {
    const o = new Uint32Array(s), r = ns._malloc(o.length * o.BYTES_PER_ELEMENT);
    return ns.HEAPU32.set(o, r / 4), r;
  }
  const M = await ms();
  function As(s, o, r) {
    const t = new o(s), a = M._malloc(t.length * t.BYTES_PER_ELEMENT);
    return r.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  Ls = function(s) {
    const o = [];
    let r = [], t = 0;
    s.nodes && s.nodes.length > 0 && (t = s.nodes.length, r = s.nodes.flat());
    const a = As(r.length > 0 ? r : [
      0
    ], Float64Array, M.HEAPF64);
    o.push(a);
    let e = [], K = 0;
    s.elements && s.elements.length > 0 && (K = s.elements.length, e = s.elements.flat());
    const L = As(e.length > 0 ? e : [
      0
    ], Int32Array, M.HEAPU32);
    o.push(L);
    let R = [], q = 0;
    s.bcs && s.bcs.length > 0 && (q = s.bcs.length, R = s.bcs.flatMap((i) => [
      i.node,
      i.dof,
      i.value
    ]));
    const V = As(R.length > 0 ? R : [
      0
    ], Float64Array, M.HEAPF64);
    o.push(V);
    let Y = [], b = 0;
    s.pointLoads && s.pointLoads.length > 0 && (b = s.pointLoads.length, Y = s.pointLoads.flatMap((i) => [
      i.node,
      i.dof,
      i.value
    ]));
    const N = As(Y.length > 0 ? Y : [
      0
    ], Float64Array, M.HEAPF64);
    o.push(N);
    const l = s.meshLx ?? 0, c = s.meshLy ?? 0, F = s.meshNx ?? 0, n = s.meshNy ?? 0, m = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[s.bcType ?? "none"] ?? 0, g = s.theoryType ?? 0;
    if (g === 2 && (s.pressure ?? 0) !== 0 && (!s.pointLoads || s.pointLoads.length === 0)) {
      console.warn("[plateQ4Solve] theoryType=2 (Membrane) con carga vertical (pressure) es FISICAMENTE INVALIDO \u2014 la membrana no resiste cargas out-of-plane. Devolviendo UZ=0 y momentos/cortantes=0 (caso degenerate). Para membrana real con cargas in-plane usar deform/analyze plane-stress (ver examples/src/membrana-pstress/).");
      const i = l, d = c, P = F, u = n;
      if (i > 0 && d > 0 && P > 0 && u > 0) {
        const S = i / P, ys = d / u, hs = [];
        for (let rs = 0; rs <= u; rs++) for (let cs = 0; cs <= P; cs++) hs.push({
          x: cs * S,
          y: rs * ys,
          w: 0,
          bx: 0,
          by: 0
        });
        const ls = [];
        for (let rs = 0; rs < u; rs++) for (let cs = 0; cs < P; cs++) {
          const fs = rs * (P + 1) + cs, ps = fs + 1, Es = ps + (P + 1), ds = fs + (P + 1);
          ls.push({
            nodes: [
              fs,
              ps,
              Es,
              ds
            ],
            Mxx: 0,
            Myy: 0,
            Mxy: 0,
            Qx: 0,
            Qy: 0
          });
        }
        return o.forEach((rs) => M._free(rs)), {
          nodeResults: hs,
          elementResults: ls,
          maxW: 0,
          maxMxx: 0,
          maxMyy: 0,
          maxMxy: 0,
          maxQx: 0,
          maxQy: 0,
          centerW: 0
        };
      }
    }
    let E = [], _ = 0;
    s.springs && s.springs.length > 0 && (_ = s.springs.length, E = s.springs.flatMap((i) => [
      i.node,
      i.dof,
      i.k
    ]));
    const w = As(E.length > 0 ? E : [
      0
    ], Float64Array, M.HEAPF64);
    o.push(w);
    let k = [], O = 0;
    s.thicknesses && s.thicknesses.length > 0 && (O = s.thicknesses.length, k = s.thicknesses.slice());
    const y = As(k.length > 0 ? k : [
      0
    ], Float64Array, M.HEAPF64);
    o.push(y);
    const T = M._malloc(4);
    o.push(T);
    const Q = M._malloc(4);
    o.push(Q);
    const D = M._malloc(4);
    o.push(D);
    const C = M._malloc(4);
    o.push(C), M._plate_q4_solve(a, t, L, K, s.E, s.nu, s.thickness, V, q, s.pressure ?? 0, N, b, l, c, F, n, m, g, w, _, y, O, T, Q, D, C);
    const $ = M.HEAPU32[T / 4], G = M.HEAPU32[Q / 4], Z = M.HEAPU32[D / 4], j = M.HEAPU32[C / 4], v = new Float64Array(M.HEAPF64.buffer, $, G), X = v[0], I = v[1], ss = [];
    let B = 0;
    for (let i = 0; i < X; i++) {
      const d = 2 + i * 5, P = {
        x: v[d],
        y: v[d + 1],
        w: v[d + 2],
        bx: v[d + 3],
        by: v[d + 4]
      };
      ss.push(P), Math.abs(P.w) > Math.abs(B) && (B = P.w);
    }
    const x = new Float64Array(M.HEAPF64.buffer, Z, j), as = [];
    let J = 0, ts = 0, H = 0, W = 0, es = 0;
    for (let i = 0; i < I; i++) {
      const d = i * 9, P = {
        nodes: [
          x[d],
          x[d + 1],
          x[d + 2],
          x[d + 3]
        ],
        Mxx: x[d + 4],
        Myy: x[d + 5],
        Mxy: x[d + 6],
        Qx: x[d + 7],
        Qy: x[d + 8]
      };
      as.push(P), Math.abs(P.Mxx) > Math.abs(J) && (J = P.Mxx), Math.abs(P.Myy) > Math.abs(ts) && (ts = P.Myy), Math.abs(P.Mxy) > Math.abs(H) && (H = P.Mxy), Math.abs(P.Qx) > Math.abs(W) && (W = P.Qx), Math.abs(P.Qy) > Math.abs(es) && (es = P.Qy);
    }
    let os;
    if (l > 0 && c > 0) {
      const i = l / 2, d = c / 2;
      let P = 1 / 0;
      for (const u of ss) {
        const S = Math.hypot(u.x - i, u.y - d);
        S < P && (P = S, os = u.w);
      }
    }
    return $ && o.push($), Z && o.push(Z), o.forEach((i) => M._free(i)), {
      nodeResults: ss,
      elementResults: as,
      maxW: B,
      maxMxx: J,
      maxMyy: ts,
      maxMxy: H,
      maxQx: W,
      maxQy: es,
      centerW: os
    };
  };
  const p = await ms();
  Vs = function(s, o, r, t) {
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
    const a = [], e = Ps(s.flat(), Float64Array, p.HEAPF64);
    a.push(e);
    const K = o.flat(), L = Ps(K, Uint32Array, p.HEAPU32);
    a.push(L);
    const R = o.map((H) => H.length), q = Ps(R, Uint32Array, p.HEAPU32);
    a.push(q);
    const V = r.supports ? Array.from(r.supports.keys()) : [], Y = r.supports ? Array.from(r.supports.values()).flat().map((H) => H ? 1 : 0) : [], b = Ps(V, Uint32Array, p.HEAPU32);
    a.push(b);
    const N = Ps(Y, Uint8Array, p.HEAPU8);
    a.push(N);
    const l = r.loads ? Array.from(r.loads.keys()) : [], c = r.loads ? Array.from(r.loads.values()).flat() : [], F = Ps(l, Uint32Array, p.HEAPU32);
    a.push(F);
    const n = Ps(c, Float64Array, p.HEAPF64);
    a.push(n);
    const U = (H) => {
      const W = H ? Array.from(H.keys()) : [], es = H ? Array.from(H.values()) : [], os = Ps(W, Uint32Array, p.HEAPU32);
      a.push(os);
      const i = Ps(es, Float64Array, p.HEAPF64);
      return a.push(i), {
        keysPtr: os,
        valuesPtr: i,
        size: W.length
      };
    }, m = U(t.elasticities), g = U(t.areas), E = U(t.momentsOfInertiaZ), _ = U(t.momentsOfInertiaY), w = U(t.shearModuli), k = U(t.torsionalConstants), O = U(t.thicknesses), y = U(t.poissonsRatios), T = U(t.shearAreasY), Q = U(t.shearAreasZ), D = p._malloc(4);
    a.push(D);
    const C = p._malloc(4);
    a.push(C);
    const $ = p._malloc(4);
    a.push($);
    const G = p._malloc(4);
    a.push(G);
    const Z = p._malloc(4);
    a.push(Z);
    const j = p._malloc(4);
    a.push(j), p._didactic_solve(e, s.length, L, K.length, q, o.length, b, N, V.length, F, n, l.length, m.keysPtr, m.valuesPtr, m.size, g.keysPtr, g.valuesPtr, g.size, E.keysPtr, E.valuesPtr, E.size, _.keysPtr, _.valuesPtr, _.size, w.keysPtr, w.valuesPtr, w.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, y.keysPtr, y.valuesPtr, y.size, T.keysPtr, T.valuesPtr, T.size, Q.keysPtr, Q.valuesPtr, Q.size, D, C, $, G, Z, j);
    const v = p.HEAPU32[D / 4], X = p.HEAPU32[C / 4], I = p.HEAPU32[$ / 4], ss = p.HEAPU32[G / 4], B = p.HEAPU32[Z / 4], x = p.HEAPU32[j / 4], as = v && X > 0 ? Array.from(new Float64Array(p.HEAPF64.buffer, v, X)) : [], J = I && ss > 0 ? Array.from(new Float64Array(p.HEAPF64.buffer, I, ss)) : [], ts = B && x > 0 ? Array.from(new Float64Array(p.HEAPF64.buffer, B, x)) : [];
    return v && a.push(v), I && a.push(I), B && a.push(B), a.forEach((H) => p._free(H)), Ss(as, J, ts, s.length, o.length);
  };
  function Ss(s, o, r, t, a) {
    const e = t * 6, K = [];
    if (s.length > 0) {
      const l = s[0], c = [];
      for (let F = 0; F < l; F++) c.push(s[1 + F]);
      for (let F = 0; F < l; F++) {
        let n = c[F];
        const U = s[n++], m = s[n++], g = s[n++], E = g * g, _ = Fs(s.slice(n, n + E), g);
        n += E;
        const w = Fs(s.slice(n, n + E), g);
        n += E;
        const k = Fs(s.slice(n, n + E), g);
        n += E;
        const O = Fs(s.slice(n, n + 9), 3);
        n += 9;
        const y = s[n++], T = s[n++], Q = s[n++], D = s[n++], C = s[n++], $ = s[n++], G = s[n++], Z = s[n++], j = s[n++], v = s[n++], X = s[n++];
        K.push({
          index: U,
          type: m === 0 ? "frame" : "shell-Q4",
          nDOF: g,
          K_local: _,
          T: w,
          K_global: k,
          lambda: O,
          L: y,
          E: T,
          A: Q,
          Iz: D,
          Iy: C,
          G: $,
          J: G,
          t: Z,
          nu: j,
          phiZ: v,
          phiY: X
        });
      }
    }
    const L = [];
    let R = 0;
    if (o.length > 0) {
      R = o[0];
      for (let l = 0; l < R; l++) {
        const c = 1 + l * 3;
        L.push({
          row: o[c],
          col: o[c + 1],
          value: o[c + 2]
        });
      }
    }
    let q = [], V = [], Y = [], b = [], N = [];
    if (r.length > 0) {
      let l = 0;
      const c = r[l++];
      q = r.slice(l, l + c), l += c, V = r.slice(l, l + c), l += c, Y = r.slice(l, l + c), l += c;
      const F = r[l++];
      b = r.slice(l, l + F).map(Math.round), l += F;
      const n = r[l++];
      N = r.slice(l, l + n).map(Math.round);
    }
    return {
      nNodes: t,
      nElements: a,
      nDOF: e,
      elements: K,
      K_assembled_sparse: L,
      K_assembled_nnz: R,
      F_applied: q,
      U_full: V,
      R_full: Y,
      freeDOFs: b,
      fixedDOFs: N
    };
  }
  function Fs(s, o) {
    const r = [];
    for (let t = 0; t < o; t++) r.push(s.slice(t * o, (t + 1) * o));
    return r;
  }
  function Ps(s, o, r) {
    const t = new o(s), a = p._malloc(t.length * t.BYTES_PER_ELEMENT);
    return r.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
});
export {
  __tla,
  Vs as a,
  Ts as d,
  Rs as m,
  Ls as p,
  Ks as s
};
