import { M as Ps, __tla as __tla_0 } from "./deform-C054iIuL.js";
let bs, Us, ks, vs, zs;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const f = await Ps();
  Us = function(s, e, o, t, a) {
    if (s.length === 0) return;
    const r = [], R = Z(s.flat(), Float64Array, f.HEAPF64);
    r.push(R);
    const K = e.flat(), T = Z(K, Uint32Array, f.HEAPU32);
    r.push(T);
    const Q = e.map((u) => u.length), L = Z(Q, Uint32Array, f.HEAPU32);
    r.push(L);
    const Y = o.supports ? Array.from(o.supports.keys()) : [], b = o.supports ? Array.from(o.supports.values()).flat().map((u) => u ? 1 : 0) : [], V = Z(Y, Uint32Array, f.HEAPU32);
    r.push(V);
    const l = Z(b, Uint8Array, f.HEAPU8);
    r.push(l);
    const c = o.loads ? Array.from(o.loads.keys()) : [], E = o.loads ? Array.from(o.loads.values()).flat() : [], n = Z(c, Uint32Array, f.HEAPU32);
    r.push(n);
    const F = Z(E, Float64Array, f.HEAPF64);
    r.push(F);
    const y = (u) => {
      const cs = u ? Array.from(u.keys()) : [], Fs = u ? Array.from(u.values()) : [], ps = Z(cs, Uint32Array, f.HEAPU32);
      r.push(ps);
      const Es = Z(Fs, Float64Array, f.HEAPF64);
      return r.push(Es), {
        keysPtr: ps,
        valuesPtr: Es,
        size: cs.length
      };
    }, d = y(t.elasticities), m = y(t.elasticitiesOrthogonal), U = y(t.areas), S = y(t.momentsOfInertiaZ), k = y(t.momentsOfInertiaY), M = y(t.shearModuli), P = y(t.torsionalConstants), w = y(t.thicknesses), N = y(t.poissonsRatios), q = y(t.shearAreasY), B = y(t.shearAreasZ), W = t.rigidOffsets ? Array.from(t.rigidOffsets.keys()) : [], G = t.rigidOffsets ? Array.from(t.rigidOffsets.values()).flat() : [], $ = Z(W, Uint32Array, f.HEAPU32);
    r.push($);
    const J = Z(G, Float64Array, f.HEAPF64);
    r.push(J);
    const z = t.momentReleases ? Array.from(t.momentReleases.keys()) : [], j = t.momentReleases ? Array.from(t.momentReleases.values()).flat().map((u) => u ? 1 : 0) : [], I = Z(z, Uint32Array, f.HEAPU32);
    r.push(I);
    const ss = Z(j, Uint8Array, f.HEAPU8);
    r.push(ss);
    const C = f._malloc(4);
    r.push(C);
    const v = f._malloc(4);
    r.push(v);
    const es = f._malloc(4);
    r.push(es);
    const X = f._malloc(4);
    r.push(X);
    const ts = a ? a.flatMap((u) => [
      u.node,
      u.dof,
      u.k
    ]) : [], H = Z(ts.length > 0 ? ts : [
      0
    ], Float64Array, f.HEAPF64);
    r.push(H);
    const D = t.plateFormulations, os = D ? Array.from(D.keys()) : [], rs = D ? Array.from(D.values()) : [], i = Z(os, Uint32Array, f.HEAPU32);
    r.push(i);
    const g = Z(rs, Uint32Array, f.HEAPU32);
    r.push(g), f._deform(R, s.length, T, K.length, L, e.length, V, l, Y.length, n, F, c.length, d.keysPtr, d.valuesPtr, d.size, U.keysPtr, U.valuesPtr, U.size, S.keysPtr, S.valuesPtr, S.size, k.keysPtr, k.valuesPtr, k.size, M.keysPtr, M.valuesPtr, M.size, P.keysPtr, P.valuesPtr, P.size, w.keysPtr, w.valuesPtr, w.size, N.keysPtr, N.valuesPtr, N.size, m.keysPtr, m.valuesPtr, m.size, q.keysPtr, q.valuesPtr, q.size, B.keysPtr, B.valuesPtr, B.size, H, a ? a.length : 0, i, g, os.length, C, v, es, X);
    const p = f.HEAPU32[C / 4], _ = f.HEAPU32[v / 4], O = f.HEAPU32[es / 4], us = f.HEAPU32[X / 4], hs = new Float64Array(f.HEAPF64.buffer, p, _), fs = new Float64Array(f.HEAPF64.buffer, O, us), As = /* @__PURE__ */ new Map();
    for (let u = 0; u < _; u += 7) {
      const cs = hs[u];
      As.set(cs, Array.from(hs.slice(u + 1, u + 7)));
    }
    const ms = /* @__PURE__ */ new Map();
    for (let u = 0; u < us; u += 7) {
      const cs = fs[u];
      ms.set(cs, Array.from(fs.slice(u + 1, u + 7)));
    }
    return p && r.push(p), O && r.push(O), r.forEach((u) => f._free(u)), {
      deformations: As,
      reactions: ms
    };
  };
  function Z(s, e, o) {
    const t = new e(s), a = f._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  const h = await Ps();
  ks = function(s, e, o, t, a = 10) {
    if (s.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const r = [], R = ns(s.flat(), Float64Array, h.HEAPF64);
    r.push(R);
    const K = e.flat(), T = ns(K, Uint32Array, h.HEAPU32);
    r.push(T);
    const Q = e.map((_) => _.length), L = ns(Q, Uint32Array, h.HEAPU32);
    r.push(L);
    const Y = o.supports ? Array.from(o.supports.keys()) : [], b = o.supports ? Array.from(o.supports.values()).flat().map((_) => _ ? 1 : 0) : [], V = ns(Y, Uint32Array, h.HEAPU32);
    r.push(V);
    const l = ns(b, Uint8Array, h.HEAPU8);
    r.push(l);
    const c = (_) => {
      const O = _ ? Array.from(_.keys()) : [], us = _ ? Array.from(_.values()) : [], hs = ns(O, Uint32Array, h.HEAPU32);
      r.push(hs);
      const fs = ns(us, Float64Array, h.HEAPF64);
      return r.push(fs), {
        keysPtr: hs,
        valuesPtr: fs,
        size: O.length
      };
    }, E = c(t.elasticities), n = c(t.areas), F = c(t.momentsOfInertiaZ), y = c(t.momentsOfInertiaY), d = c(t.shearModuli), m = c(t.torsionalConstants), U = c(t.densities), S = c(t.thicknesses), k = c(t.poissonsRatios), M = c(t.membraneModifiers), P = c(t.bendingModifiers), w = t.plateFormulations, N = w ? Array.from(w.keys()) : [], q = w ? Array.from(w.values()) : [], B = ns(N, Uint32Array, h.HEAPU32);
    r.push(B);
    const W = ns(q, Uint32Array, h.HEAPU32);
    r.push(W);
    const G = h._malloc(4);
    r.push(G);
    const $ = h._malloc(4);
    r.push($);
    const J = h._malloc(4);
    r.push(J);
    const z = h._malloc(4);
    r.push(z);
    const j = h._malloc(4);
    r.push(j);
    const I = h._malloc(4);
    r.push(I);
    const ss = h._malloc(4);
    r.push(ss);
    const C = h._malloc(4);
    r.push(C), h._modal(R, s.length, T, K.length, L, e.length, V, l, Y.length, E.keysPtr, E.valuesPtr, E.size, n.keysPtr, n.valuesPtr, n.size, F.keysPtr, F.valuesPtr, F.size, y.keysPtr, y.valuesPtr, y.size, d.keysPtr, d.valuesPtr, d.size, m.keysPtr, m.valuesPtr, m.size, U.keysPtr, U.valuesPtr, U.size, S.keysPtr, S.valuesPtr, S.size, k.keysPtr, k.valuesPtr, k.size, M.keysPtr, M.valuesPtr, M.size, P.keysPtr, P.valuesPtr, P.size, B, W, N.length, a, G, $, J, z, j, I, ss, C);
    const v = h.HEAPU32[G / 4], es = h.HEAPU32[$ / 4], X = h.HEAPU32[J / 4], ts = h.HEAPU32[z / 4], H = h.HEAPU32[j / 4], D = h.HEAPU32[I / 4], os = h.HEAPU32[ss / 4], rs = h.HEAPU32[C / 4];
    let i = [], g = [], p = [];
    if (es > 0 && v) {
      const _ = new Float64Array(h.HEAPF64.buffer, v, es);
      i = Array.from(_), r.push(v);
    }
    if (ts > 0 && H > 0 && X) {
      const _ = new Float64Array(h.HEAPF64.buffer, X, ts * H);
      for (let O = 0; O < ts; O++) g.push(Array.from(_.slice(O * H, (O + 1) * H)));
      r.push(X);
    }
    if (os > 0 && rs > 0 && D) {
      const _ = new Float64Array(h.HEAPF64.buffer, D, os * rs);
      for (let O = 0; O < os; O++) p.push(Array.from(_.slice(O * rs, (O + 1) * rs)));
      r.push(D);
    }
    return r.forEach((_) => h._free(_)), {
      frequencies: i,
      modeShapes: g,
      massParticipation: p
    };
  };
  function ns(s, e, o) {
    const t = new e(s), a = h._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  await Ps();
  const as = await Ps();
  zs = function(s) {
    const { nodes: e, elements: o, E: t, nu: a, gamma: r, c: R, phi: K, thickness: T = 1, supports: Q, surcharge: L = 0, surfaceYThreshold: Y = -1e10 } = s, b = [], V = e.flat(), l = gs(V);
    b.push(l);
    const c = o.flat(), E = ds(c);
    b.push(E);
    const n = [];
    for (const P of Q) n.push(P.node, P.fixX ? 1 : 0, P.fixY ? 1 : 0);
    const F = ds(n);
    b.push(F);
    const y = o.length, d = e.length, m = as._slopeAllocDouble(y);
    b.push(m);
    const U = as._slopeAllocDouble(d * 2);
    b.push(U);
    const S = as._slopeStabilitySolver(l, d, E, y, t, a, r, R, K, T, F, Q.length, L, Y, m, U), k = [];
    for (let P = 0; P < y; P++) k.push(as.HEAPF64[m / 8 + P]);
    const M = [];
    for (let P = 0; P < d; P++) M.push([
      as.HEAPF64[U / 8 + 2 * P],
      as.HEAPF64[U / 8 + 2 * P + 1]
    ]);
    return b.forEach((P) => as._free(P)), {
      fos: S,
      plasticStrain: k,
      displacements: M
    };
  };
  function gs(s) {
    const e = new Float64Array(s), o = as._malloc(e.length * e.BYTES_PER_ELEMENT);
    return as.HEAPF64.set(e, o / 8), o;
  }
  function ds(s) {
    const e = new Uint32Array(s), o = as._malloc(e.length * e.BYTES_PER_ELEMENT);
    return as.HEAPU32.set(e, o / 4), o;
  }
  const x = await Ps();
  function is(s, e, o) {
    const t = new e(s), a = x._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  vs = function(s) {
    const e = [];
    let o = [], t = 0;
    s.nodes && s.nodes.length > 0 && (t = s.nodes.length, o = s.nodes.flat());
    const a = is(o.length > 0 ? o : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(a);
    let r = [], R = 0;
    s.elements && s.elements.length > 0 && (R = s.elements.length, r = s.elements.flat());
    const K = is(r.length > 0 ? r : [
      0
    ], Int32Array, x.HEAPU32);
    e.push(K);
    let T = [], Q = 0;
    s.bcs && s.bcs.length > 0 && (Q = s.bcs.length, T = s.bcs.flatMap((i) => [
      i.node,
      i.dof,
      i.value
    ]));
    const L = is(T.length > 0 ? T : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(L);
    let Y = [], b = 0;
    s.pointLoads && s.pointLoads.length > 0 && (b = s.pointLoads.length, Y = s.pointLoads.flatMap((i) => [
      i.node,
      i.dof,
      i.value
    ]));
    const V = is(Y.length > 0 ? Y : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(V);
    const l = s.meshLx ?? 0, c = s.meshLy ?? 0, E = s.meshNx ?? 0, n = s.meshNy ?? 0, y = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[s.bcType ?? "none"] ?? 0, d = s.theoryType ?? 0;
    let m = [], U = 0;
    s.springs && s.springs.length > 0 && (U = s.springs.length, m = s.springs.flatMap((i) => [
      i.node,
      i.dof,
      i.k
    ]));
    const S = is(m.length > 0 ? m : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(S);
    let k = [], M = 0;
    s.thicknesses && s.thicknesses.length > 0 && (M = s.thicknesses.length, k = s.thicknesses.slice());
    const P = is(k.length > 0 ? k : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(P);
    const w = x._malloc(4);
    e.push(w);
    const N = x._malloc(4);
    e.push(N);
    const q = x._malloc(4);
    e.push(q);
    const B = x._malloc(4);
    e.push(B), x._plate_q4_solve(a, t, K, R, s.E, s.nu, s.thickness, L, Q, s.pressure ?? 0, V, b, l, c, E, n, y, d, S, U, P, M, w, N, q, B);
    const W = x.HEAPU32[w / 4], G = x.HEAPU32[N / 4], $ = x.HEAPU32[q / 4], J = x.HEAPU32[B / 4], z = new Float64Array(x.HEAPF64.buffer, W, G), j = z[0], I = z[1], ss = [];
    let C = 0;
    for (let i = 0; i < j; i++) {
      const g = 2 + i * 5, p = {
        x: z[g],
        y: z[g + 1],
        w: z[g + 2],
        bx: z[g + 3],
        by: z[g + 4]
      };
      ss.push(p), Math.abs(p.w) > Math.abs(C) && (C = p.w);
    }
    const v = new Float64Array(x.HEAPF64.buffer, $, J), es = [];
    let X = 0, ts = 0, H = 0, D = 0, os = 0;
    for (let i = 0; i < I; i++) {
      const g = i * 9, p = {
        nodes: [
          v[g],
          v[g + 1],
          v[g + 2],
          v[g + 3]
        ],
        Mxx: v[g + 4],
        Myy: v[g + 5],
        Mxy: v[g + 6],
        Qx: v[g + 7],
        Qy: v[g + 8]
      };
      es.push(p), Math.abs(p.Mxx) > Math.abs(X) && (X = p.Mxx), Math.abs(p.Myy) > Math.abs(ts) && (ts = p.Myy), Math.abs(p.Mxy) > Math.abs(H) && (H = p.Mxy), Math.abs(p.Qx) > Math.abs(D) && (D = p.Qx), Math.abs(p.Qy) > Math.abs(os) && (os = p.Qy);
    }
    let rs;
    if (l > 0 && c > 0) {
      const i = l / 2, g = c / 2;
      let p = 1 / 0;
      for (const _ of ss) {
        const O = Math.hypot(_.x - i, _.y - g);
        O < p && (p = O, rs = _.w);
      }
    }
    return W && e.push(W), $ && e.push($), e.forEach((i) => x._free(i)), {
      nodeResults: ss,
      elementResults: es,
      maxW: C,
      maxMxx: X,
      maxMyy: ts,
      maxMxy: H,
      maxQx: D,
      maxQy: os,
      centerW: rs
    };
  };
  const A = await Ps();
  bs = function(s, e, o, t) {
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
    const a = [], r = ls(s.flat(), Float64Array, A.HEAPF64);
    a.push(r);
    const R = e.flat(), K = ls(R, Uint32Array, A.HEAPU32);
    a.push(K);
    const T = e.map((H) => H.length), Q = ls(T, Uint32Array, A.HEAPU32);
    a.push(Q);
    const L = o.supports ? Array.from(o.supports.keys()) : [], Y = o.supports ? Array.from(o.supports.values()).flat().map((H) => H ? 1 : 0) : [], b = ls(L, Uint32Array, A.HEAPU32);
    a.push(b);
    const V = ls(Y, Uint8Array, A.HEAPU8);
    a.push(V);
    const l = o.loads ? Array.from(o.loads.keys()) : [], c = o.loads ? Array.from(o.loads.values()).flat() : [], E = ls(l, Uint32Array, A.HEAPU32);
    a.push(E);
    const n = ls(c, Float64Array, A.HEAPF64);
    a.push(n);
    const F = (H) => {
      const D = H ? Array.from(H.keys()) : [], os = H ? Array.from(H.values()) : [], rs = ls(D, Uint32Array, A.HEAPU32);
      a.push(rs);
      const i = ls(os, Float64Array, A.HEAPF64);
      return a.push(i), {
        keysPtr: rs,
        valuesPtr: i,
        size: D.length
      };
    }, y = F(t.elasticities), d = F(t.areas), m = F(t.momentsOfInertiaZ), U = F(t.momentsOfInertiaY), S = F(t.shearModuli), k = F(t.torsionalConstants), M = F(t.thicknesses), P = F(t.poissonsRatios), w = F(t.shearAreasY), N = F(t.shearAreasZ), q = A._malloc(4);
    a.push(q);
    const B = A._malloc(4);
    a.push(B);
    const W = A._malloc(4);
    a.push(W);
    const G = A._malloc(4);
    a.push(G);
    const $ = A._malloc(4);
    a.push($);
    const J = A._malloc(4);
    a.push(J), A._didactic_solve(r, s.length, K, R.length, Q, e.length, b, V, L.length, E, n, l.length, y.keysPtr, y.valuesPtr, y.size, d.keysPtr, d.valuesPtr, d.size, m.keysPtr, m.valuesPtr, m.size, U.keysPtr, U.valuesPtr, U.size, S.keysPtr, S.valuesPtr, S.size, k.keysPtr, k.valuesPtr, k.size, M.keysPtr, M.valuesPtr, M.size, P.keysPtr, P.valuesPtr, P.size, w.keysPtr, w.valuesPtr, w.size, N.keysPtr, N.valuesPtr, N.size, q, B, W, G, $, J);
    const z = A.HEAPU32[q / 4], j = A.HEAPU32[B / 4], I = A.HEAPU32[W / 4], ss = A.HEAPU32[G / 4], C = A.HEAPU32[$ / 4], v = A.HEAPU32[J / 4], es = z && j > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, z, j)) : [], X = I && ss > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, I, ss)) : [], ts = C && v > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, C, v)) : [];
    return z && a.push(z), I && a.push(I), C && a.push(C), a.forEach((H) => A._free(H)), _s(es, X, ts, s.length, e.length);
  };
  function _s(s, e, o, t, a) {
    const r = t * 6, R = [];
    if (s.length > 0) {
      const l = s[0], c = [];
      for (let E = 0; E < l; E++) c.push(s[1 + E]);
      for (let E = 0; E < l; E++) {
        let n = c[E];
        const F = s[n++], y = s[n++], d = s[n++], m = d * d, U = ys(s.slice(n, n + m), d);
        n += m;
        const S = ys(s.slice(n, n + m), d);
        n += m;
        const k = ys(s.slice(n, n + m), d);
        n += m;
        const M = ys(s.slice(n, n + 9), 3);
        n += 9;
        const P = s[n++], w = s[n++], N = s[n++], q = s[n++], B = s[n++], W = s[n++], G = s[n++], $ = s[n++], J = s[n++], z = s[n++], j = s[n++];
        R.push({
          index: F,
          type: y === 0 ? "frame" : "shell-Q4",
          nDOF: d,
          K_local: U,
          T: S,
          K_global: k,
          lambda: M,
          L: P,
          E: w,
          A: N,
          Iz: q,
          Iy: B,
          G: W,
          J: G,
          t: $,
          nu: J,
          phiZ: z,
          phiY: j
        });
      }
    }
    const K = [];
    let T = 0;
    if (e.length > 0) {
      T = e[0];
      for (let l = 0; l < T; l++) {
        const c = 1 + l * 3;
        K.push({
          row: e[c],
          col: e[c + 1],
          value: e[c + 2]
        });
      }
    }
    let Q = [], L = [], Y = [], b = [], V = [];
    if (o.length > 0) {
      let l = 0;
      const c = o[l++];
      Q = o.slice(l, l + c), l += c, L = o.slice(l, l + c), l += c, Y = o.slice(l, l + c), l += c;
      const E = o[l++];
      b = o.slice(l, l + E).map(Math.round), l += E;
      const n = o[l++];
      V = o.slice(l, l + n).map(Math.round);
    }
    return {
      nNodes: t,
      nElements: a,
      nDOF: r,
      elements: R,
      K_assembled_sparse: K,
      K_assembled_nnz: T,
      F_applied: Q,
      U_full: L,
      R_full: Y,
      freeDOFs: b,
      fixedDOFs: V
    };
  }
  function ys(s, e) {
    const o = [];
    for (let t = 0; t < e; t++) o.push(s.slice(t * e, (t + 1) * e));
    return o;
  }
  function ls(s, e, o) {
    const t = new e(s), a = A._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
});
export {
  __tla,
  bs as a,
  Us as d,
  ks as m,
  vs as p,
  zs as s
};
