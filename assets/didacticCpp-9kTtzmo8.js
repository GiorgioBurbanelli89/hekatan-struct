import { M as Ps, __tla as __tla_0 } from "./deform-Brz07dfy.js";
let bs, Us, ks, vs, zs;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const h = await Ps();
  Us = function(s, e, o, t, a) {
    if (s.length === 0) return;
    const r = [], N = Q(s.flat(), Float64Array, h.HEAPF64);
    r.push(N);
    const V = e.flat(), w = Q(V, Uint32Array, h.HEAPU32);
    r.push(w);
    const q = e.map((u) => u.length), B = Q(q, Uint32Array, h.HEAPU32);
    r.push(B);
    const C = o.supports ? Array.from(o.supports.keys()) : [], M = o.supports ? Array.from(o.supports.values()).flat().map((u) => u ? 1 : 0) : [], Z = Q(C, Uint32Array, h.HEAPU32);
    r.push(Z);
    const l = Q(M, Uint8Array, h.HEAPU8);
    r.push(l);
    const c = o.loads ? Array.from(o.loads.keys()) : [], d = o.loads ? Array.from(o.loads.values()).flat() : [], n = Q(c, Uint32Array, h.HEAPU32);
    r.push(n);
    const g = Q(d, Float64Array, h.HEAPF64);
    r.push(g);
    const y = (u) => {
      const cs = u ? Array.from(u.keys()) : [], Fs = u ? Array.from(u.values()) : [], Es = Q(cs, Uint32Array, h.HEAPU32);
      r.push(Es);
      const ps = Q(Fs, Float64Array, h.HEAPF64);
      return r.push(ps), {
        keysPtr: Es,
        valuesPtr: ps,
        size: cs.length
      };
    }, F = y(t.elasticities), m = y(t.elasticitiesOrthogonal), H = y(t.areas), S = y(t.momentsOfInertiaZ), U = y(t.momentsOfInertiaY), O = y(t.shearModuli), i = y(t.torsionalConstants), T = y(t.thicknesses), R = y(t.poissonsRatios), L = y(t.shearAreasY), Y = y(t.shearAreasZ), $ = t.rigidOffsets ? Array.from(t.rigidOffsets.keys()) : [], J = t.rigidOffsets ? Array.from(t.rigidOffsets.values()).flat() : [], D = Q($, Uint32Array, h.HEAPU32);
    r.push(D);
    const X = Q(J, Float64Array, h.HEAPF64);
    r.push(X);
    const k = t.momentReleases ? Array.from(t.momentReleases.keys()) : [], ts = t.momentReleases ? Array.from(t.momentReleases.values()).flat().map((u) => u ? 1 : 0) : [], j = Q(k, Uint32Array, h.HEAPU32);
    r.push(j);
    const I = Q(ts, Uint8Array, h.HEAPU8);
    r.push(I);
    const K = h._malloc(4);
    r.push(K);
    const z = h._malloc(4);
    r.push(z);
    const ss = h._malloc(4);
    r.push(ss);
    const W = h._malloc(4);
    r.push(W);
    const os = a ? a.flatMap((u) => [
      u.node,
      u.dof,
      u.k
    ]) : [], v = Q(os.length > 0 ? os : [
      0
    ], Float64Array, h.HEAPF64);
    r.push(v);
    const G = t.plateFormulations, E = G ? Array.from(G.keys()) : [], b = G ? Array.from(G.values()) : [], P = Q(E, Uint32Array, h.HEAPU32);
    r.push(P);
    const _ = Q(b, Uint32Array, h.HEAPU32);
    r.push(_), h._deform(N, s.length, w, V.length, B, e.length, Z, l, C.length, n, g, c.length, F.keysPtr, F.valuesPtr, F.size, H.keysPtr, H.valuesPtr, H.size, S.keysPtr, S.valuesPtr, S.size, U.keysPtr, U.valuesPtr, U.size, O.keysPtr, O.valuesPtr, O.size, i.keysPtr, i.valuesPtr, i.size, T.keysPtr, T.valuesPtr, T.size, R.keysPtr, R.valuesPtr, R.size, m.keysPtr, m.valuesPtr, m.size, L.keysPtr, L.valuesPtr, L.size, Y.keysPtr, Y.valuesPtr, Y.size, v, a ? a.length : 0, P, _, E.length, K, z, ss, W);
    const p = h.HEAPU32[K / 4], ns = h.HEAPU32[z / 4], ls = h.HEAPU32[ss / 4], fs = h.HEAPU32[W / 4], us = new Float64Array(h.HEAPF64.buffer, p, ns), ys = new Float64Array(h.HEAPF64.buffer, ls, fs), As = /* @__PURE__ */ new Map();
    for (let u = 0; u < ns; u += 7) {
      const cs = us[u];
      As.set(cs, Array.from(us.slice(u + 1, u + 7)));
    }
    const ms = /* @__PURE__ */ new Map();
    for (let u = 0; u < fs; u += 7) {
      const cs = ys[u];
      ms.set(cs, Array.from(ys.slice(u + 1, u + 7)));
    }
    return p && r.push(p), ls && r.push(ls), r.forEach((u) => h._free(u)), {
      deformations: As,
      reactions: ms
    };
  };
  function Q(s, e, o) {
    const t = new e(s), a = h._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  const f = await Ps();
  ks = function(s, e, o, t, a = 10) {
    if (s.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const r = [], N = as(s.flat(), Float64Array, f.HEAPF64);
    r.push(N);
    const V = e.flat(), w = as(V, Uint32Array, f.HEAPU32);
    r.push(w);
    const q = e.map((E) => E.length), B = as(q, Uint32Array, f.HEAPU32);
    r.push(B);
    const C = o.supports ? Array.from(o.supports.keys()) : [], M = o.supports ? Array.from(o.supports.values()).flat().map((E) => E ? 1 : 0) : [], Z = as(C, Uint32Array, f.HEAPU32);
    r.push(Z);
    const l = as(M, Uint8Array, f.HEAPU8);
    r.push(l);
    const c = (E) => {
      const b = E ? Array.from(E.keys()) : [], P = E ? Array.from(E.values()) : [], _ = as(b, Uint32Array, f.HEAPU32);
      r.push(_);
      const p = as(P, Float64Array, f.HEAPF64);
      return r.push(p), {
        keysPtr: _,
        valuesPtr: p,
        size: b.length
      };
    }, d = c(t.elasticities), n = c(t.areas), g = c(t.momentsOfInertiaZ), y = c(t.momentsOfInertiaY), F = c(t.shearModuli), m = c(t.torsionalConstants), H = c(t.densities), S = c(t.thicknesses), U = c(t.poissonsRatios), O = c(t.membraneModifiers), i = c(t.bendingModifiers), T = f._malloc(4);
    r.push(T);
    const R = f._malloc(4);
    r.push(R);
    const L = f._malloc(4);
    r.push(L);
    const Y = f._malloc(4);
    r.push(Y);
    const $ = f._malloc(4);
    r.push($);
    const J = f._malloc(4);
    r.push(J);
    const D = f._malloc(4);
    r.push(D);
    const X = f._malloc(4);
    r.push(X), f._modal(N, s.length, w, V.length, B, e.length, Z, l, C.length, d.keysPtr, d.valuesPtr, d.size, n.keysPtr, n.valuesPtr, n.size, g.keysPtr, g.valuesPtr, g.size, y.keysPtr, y.valuesPtr, y.size, F.keysPtr, F.valuesPtr, F.size, m.keysPtr, m.valuesPtr, m.size, H.keysPtr, H.valuesPtr, H.size, S.keysPtr, S.valuesPtr, S.size, U.keysPtr, U.valuesPtr, U.size, O.keysPtr, O.valuesPtr, O.size, i.keysPtr, i.valuesPtr, i.size, a, T, R, L, Y, $, J, D, X);
    const k = f.HEAPU32[T / 4], ts = f.HEAPU32[R / 4], j = f.HEAPU32[L / 4], I = f.HEAPU32[Y / 4], K = f.HEAPU32[$ / 4], z = f.HEAPU32[J / 4], ss = f.HEAPU32[D / 4], W = f.HEAPU32[X / 4];
    let os = [], v = [], G = [];
    if (ts > 0 && k) {
      const E = new Float64Array(f.HEAPF64.buffer, k, ts);
      os = Array.from(E), r.push(k);
    }
    if (I > 0 && K > 0 && j) {
      const E = new Float64Array(f.HEAPF64.buffer, j, I * K);
      for (let b = 0; b < I; b++) v.push(Array.from(E.slice(b * K, (b + 1) * K)));
      r.push(j);
    }
    if (ss > 0 && W > 0 && z) {
      const E = new Float64Array(f.HEAPF64.buffer, z, ss * W);
      for (let b = 0; b < ss; b++) G.push(Array.from(E.slice(b * W, (b + 1) * W)));
      r.push(z);
    }
    return r.forEach((E) => f._free(E)), {
      frequencies: os,
      modeShapes: v,
      massParticipation: G
    };
  };
  function as(s, e, o) {
    const t = new e(s), a = f._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  await Ps();
  const es = await Ps();
  zs = function(s) {
    const { nodes: e, elements: o, E: t, nu: a, gamma: r, c: N, phi: V, thickness: w = 1, supports: q, surcharge: B = 0, surfaceYThreshold: C = -1e10 } = s, M = [], Z = e.flat(), l = gs(Z);
    M.push(l);
    const c = o.flat(), d = ds(c);
    M.push(d);
    const n = [];
    for (const i of q) n.push(i.node, i.fixX ? 1 : 0, i.fixY ? 1 : 0);
    const g = ds(n);
    M.push(g);
    const y = o.length, F = e.length, m = es._slopeAllocDouble(y);
    M.push(m);
    const H = es._slopeAllocDouble(F * 2);
    M.push(H);
    const S = es._slopeStabilitySolver(l, F, d, y, t, a, r, N, V, w, g, q.length, B, C, m, H), U = [];
    for (let i = 0; i < y; i++) U.push(es.HEAPF64[m / 8 + i]);
    const O = [];
    for (let i = 0; i < F; i++) O.push([
      es.HEAPF64[H / 8 + 2 * i],
      es.HEAPF64[H / 8 + 2 * i + 1]
    ]);
    return M.forEach((i) => es._free(i)), {
      fos: S,
      plasticStrain: U,
      displacements: O
    };
  };
  function gs(s) {
    const e = new Float64Array(s), o = es._malloc(e.length * e.BYTES_PER_ELEMENT);
    return es.HEAPF64.set(e, o / 8), o;
  }
  function ds(s) {
    const e = new Uint32Array(s), o = es._malloc(e.length * e.BYTES_PER_ELEMENT);
    return es.HEAPU32.set(e, o / 4), o;
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
    let r = [], N = 0;
    s.elements && s.elements.length > 0 && (N = s.elements.length, r = s.elements.flat());
    const V = is(r.length > 0 ? r : [
      0
    ], Int32Array, x.HEAPU32);
    e.push(V);
    let w = [], q = 0;
    s.bcs && s.bcs.length > 0 && (q = s.bcs.length, w = s.bcs.flatMap((P) => [
      P.node,
      P.dof,
      P.value
    ]));
    const B = is(w.length > 0 ? w : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(B);
    let C = [], M = 0;
    s.pointLoads && s.pointLoads.length > 0 && (M = s.pointLoads.length, C = s.pointLoads.flatMap((P) => [
      P.node,
      P.dof,
      P.value
    ]));
    const Z = is(C.length > 0 ? C : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(Z);
    const l = s.meshLx ?? 0, c = s.meshLy ?? 0, d = s.meshNx ?? 0, n = s.meshNy ?? 0, y = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[s.bcType ?? "none"] ?? 0, F = s.theoryType ?? 0;
    let m = [], H = 0;
    s.springs && s.springs.length > 0 && (H = s.springs.length, m = s.springs.flatMap((P) => [
      P.node,
      P.dof,
      P.k
    ]));
    const S = is(m.length > 0 ? m : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(S);
    let U = [], O = 0;
    s.thicknesses && s.thicknesses.length > 0 && (O = s.thicknesses.length, U = s.thicknesses.slice());
    const i = is(U.length > 0 ? U : [
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
    e.push(Y), x._plate_q4_solve(a, t, V, N, s.E, s.nu, s.thickness, B, q, s.pressure ?? 0, Z, M, l, c, d, n, y, F, S, H, i, O, T, R, L, Y);
    const $ = x.HEAPU32[T / 4], J = x.HEAPU32[R / 4], D = x.HEAPU32[L / 4], X = x.HEAPU32[Y / 4], k = new Float64Array(x.HEAPF64.buffer, $, J), ts = k[0], j = k[1], I = [];
    let K = 0;
    for (let P = 0; P < ts; P++) {
      const _ = 2 + P * 5, p = {
        x: k[_],
        y: k[_ + 1],
        w: k[_ + 2],
        bx: k[_ + 3],
        by: k[_ + 4]
      };
      I.push(p), Math.abs(p.w) > Math.abs(K) && (K = p.w);
    }
    const z = new Float64Array(x.HEAPF64.buffer, D, X), ss = [];
    let W = 0, os = 0, v = 0, G = 0, E = 0;
    for (let P = 0; P < j; P++) {
      const _ = P * 9, p = {
        nodes: [
          z[_],
          z[_ + 1],
          z[_ + 2],
          z[_ + 3]
        ],
        Mxx: z[_ + 4],
        Myy: z[_ + 5],
        Mxy: z[_ + 6],
        Qx: z[_ + 7],
        Qy: z[_ + 8]
      };
      ss.push(p), Math.abs(p.Mxx) > Math.abs(W) && (W = p.Mxx), Math.abs(p.Myy) > Math.abs(os) && (os = p.Myy), Math.abs(p.Mxy) > Math.abs(v) && (v = p.Mxy), Math.abs(p.Qx) > Math.abs(G) && (G = p.Qx), Math.abs(p.Qy) > Math.abs(E) && (E = p.Qy);
    }
    let b;
    if (l > 0 && c > 0) {
      const P = l / 2, _ = c / 2;
      let p = 1 / 0;
      for (const ns of I) {
        const ls = Math.hypot(ns.x - P, ns.y - _);
        ls < p && (p = ls, b = ns.w);
      }
    }
    return $ && e.push($), D && e.push(D), e.forEach((P) => x._free(P)), {
      nodeResults: I,
      elementResults: ss,
      maxW: K,
      maxMxx: W,
      maxMyy: os,
      maxMxy: v,
      maxQx: G,
      maxQy: E,
      centerW: b
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
    const a = [], r = rs(s.flat(), Float64Array, A.HEAPF64);
    a.push(r);
    const N = e.flat(), V = rs(N, Uint32Array, A.HEAPU32);
    a.push(V);
    const w = e.map((v) => v.length), q = rs(w, Uint32Array, A.HEAPU32);
    a.push(q);
    const B = o.supports ? Array.from(o.supports.keys()) : [], C = o.supports ? Array.from(o.supports.values()).flat().map((v) => v ? 1 : 0) : [], M = rs(B, Uint32Array, A.HEAPU32);
    a.push(M);
    const Z = rs(C, Uint8Array, A.HEAPU8);
    a.push(Z);
    const l = o.loads ? Array.from(o.loads.keys()) : [], c = o.loads ? Array.from(o.loads.values()).flat() : [], d = rs(l, Uint32Array, A.HEAPU32);
    a.push(d);
    const n = rs(c, Float64Array, A.HEAPF64);
    a.push(n);
    const g = (v) => {
      const G = v ? Array.from(v.keys()) : [], E = v ? Array.from(v.values()) : [], b = rs(G, Uint32Array, A.HEAPU32);
      a.push(b);
      const P = rs(E, Float64Array, A.HEAPF64);
      return a.push(P), {
        keysPtr: b,
        valuesPtr: P,
        size: G.length
      };
    }, y = g(t.elasticities), F = g(t.areas), m = g(t.momentsOfInertiaZ), H = g(t.momentsOfInertiaY), S = g(t.shearModuli), U = g(t.torsionalConstants), O = g(t.thicknesses), i = g(t.poissonsRatios), T = g(t.shearAreasY), R = g(t.shearAreasZ), L = A._malloc(4);
    a.push(L);
    const Y = A._malloc(4);
    a.push(Y);
    const $ = A._malloc(4);
    a.push($);
    const J = A._malloc(4);
    a.push(J);
    const D = A._malloc(4);
    a.push(D);
    const X = A._malloc(4);
    a.push(X), A._didactic_solve(r, s.length, V, N.length, q, e.length, M, Z, B.length, d, n, l.length, y.keysPtr, y.valuesPtr, y.size, F.keysPtr, F.valuesPtr, F.size, m.keysPtr, m.valuesPtr, m.size, H.keysPtr, H.valuesPtr, H.size, S.keysPtr, S.valuesPtr, S.size, U.keysPtr, U.valuesPtr, U.size, O.keysPtr, O.valuesPtr, O.size, i.keysPtr, i.valuesPtr, i.size, T.keysPtr, T.valuesPtr, T.size, R.keysPtr, R.valuesPtr, R.size, L, Y, $, J, D, X);
    const k = A.HEAPU32[L / 4], ts = A.HEAPU32[Y / 4], j = A.HEAPU32[$ / 4], I = A.HEAPU32[J / 4], K = A.HEAPU32[D / 4], z = A.HEAPU32[X / 4], ss = k && ts > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, k, ts)) : [], W = j && I > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, j, I)) : [], os = K && z > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, K, z)) : [];
    return k && a.push(k), j && a.push(j), K && a.push(K), a.forEach((v) => A._free(v)), _s(ss, W, os, s.length, e.length);
  };
  function _s(s, e, o, t, a) {
    const r = t * 6, N = [];
    if (s.length > 0) {
      const l = s[0], c = [];
      for (let d = 0; d < l; d++) c.push(s[1 + d]);
      for (let d = 0; d < l; d++) {
        let n = c[d];
        const g = s[n++], y = s[n++], F = s[n++], m = F * F, H = hs(s.slice(n, n + m), F);
        n += m;
        const S = hs(s.slice(n, n + m), F);
        n += m;
        const U = hs(s.slice(n, n + m), F);
        n += m;
        const O = hs(s.slice(n, n + 9), 3);
        n += 9;
        const i = s[n++], T = s[n++], R = s[n++], L = s[n++], Y = s[n++], $ = s[n++], J = s[n++], D = s[n++], X = s[n++], k = s[n++], ts = s[n++];
        N.push({
          index: g,
          type: y === 0 ? "frame" : "shell-Q4",
          nDOF: F,
          K_local: H,
          T: S,
          K_global: U,
          lambda: O,
          L: i,
          E: T,
          A: R,
          Iz: L,
          Iy: Y,
          G: $,
          J,
          t: D,
          nu: X,
          phiZ: k,
          phiY: ts
        });
      }
    }
    const V = [];
    let w = 0;
    if (e.length > 0) {
      w = e[0];
      for (let l = 0; l < w; l++) {
        const c = 1 + l * 3;
        V.push({
          row: e[c],
          col: e[c + 1],
          value: e[c + 2]
        });
      }
    }
    let q = [], B = [], C = [], M = [], Z = [];
    if (o.length > 0) {
      let l = 0;
      const c = o[l++];
      q = o.slice(l, l + c), l += c, B = o.slice(l, l + c), l += c, C = o.slice(l, l + c), l += c;
      const d = o[l++];
      M = o.slice(l, l + d).map(Math.round), l += d;
      const n = o[l++];
      Z = o.slice(l, l + n).map(Math.round);
    }
    return {
      nNodes: t,
      nElements: a,
      nDOF: r,
      elements: N,
      K_assembled_sparse: V,
      K_assembled_nnz: w,
      F_applied: q,
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
  bs as a,
  Us as d,
  ks as m,
  vs as p,
  zs as s
};
