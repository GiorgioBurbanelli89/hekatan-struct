import { M as hs, __tla as __tla_0 } from "./deform-BeOgLxmb.js";
let Ys, Ts, Rs, Ls, Ks;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const i = await hs();
  Ts = function(s, e, o, t, a) {
    if (s.length === 0) return;
    const r = [], K = b(s.flat(), Float64Array, i.HEAPF64);
    r.push(K);
    const L = e.flat(), T = b(L, Uint32Array, i.HEAPU32);
    r.push(T);
    const Q = e.map((y) => y.length), Y = b(Q, Uint32Array, i.HEAPU32);
    r.push(Y);
    const V = o.supports ? Array.from(o.supports.keys()) : [], M = o.supports ? Array.from(o.supports.values()).flat().map((y) => y ? 1 : 0) : [], N = b(V, Uint32Array, i.HEAPU32);
    r.push(N);
    const n = b(M, Uint8Array, i.HEAPU8);
    r.push(n);
    const c = o.loads ? Array.from(o.loads.keys()) : [], E = o.loads ? Array.from(o.loads.values()).flat() : [], l = b(c, Uint32Array, i.HEAPU32);
    r.push(l);
    const F = b(E, Float64Array, i.HEAPF64);
    r.push(F);
    const u = (y) => {
      const is = y ? Array.from(y.keys()) : [], Os = y ? Array.from(y.values()) : [], vs = b(is, Uint32Array, i.HEAPU32);
      r.push(vs);
      const zs = b(Os, Float64Array, i.HEAPF64);
      return r.push(zs), {
        keysPtr: vs,
        valuesPtr: zs,
        size: is.length
      };
    }, d = u(t.elasticities), p = u(t.elasticitiesOrthogonal), _ = u(t.areas), x = u(t.momentsOfInertiaZ), k = u(t.momentsOfInertiaY), O = u(t.shearModuli), h = u(t.torsionalConstants), w = u(t.thicknesses), B = u(t.poissonsRatios), q = u(t.shearAreasY), C = u(t.shearAreasZ), W = t.rigidOffsets ? Array.from(t.rigidOffsets.keys()) : [], G = t.rigidOffsets ? Array.from(t.rigidOffsets.values()).flat() : [], $ = b(W, Uint32Array, i.HEAPU32);
    r.push($);
    const J = b(G, Float64Array, i.HEAPF64);
    r.push(J);
    const v = t.momentReleases ? Array.from(t.momentReleases.keys()) : [], j = t.momentReleases ? Array.from(t.momentReleases.values()).flat().map((y) => y ? 1 : 0) : [], I = b(v, Uint32Array, i.HEAPU32);
    r.push(I);
    const ss = b(j, Uint8Array, i.HEAPU8);
    r.push(ss);
    const Z = i._malloc(4);
    r.push(Z);
    const z = i._malloc(4);
    r.push(z);
    const es = i._malloc(4);
    r.push(es);
    const X = i._malloc(4);
    r.push(X);
    const ts = a ? a.flatMap((y) => [
      y.node,
      y.dof,
      y.k
    ]) : [], U = b(ts.length > 0 ? ts : [
      0
    ], Float64Array, i.HEAPF64);
    r.push(U);
    const D = t.plateFormulations, rs = D ? Array.from(D.keys()) : [], os = D ? Array.from(D.values()) : [], P = b(rs, Uint32Array, i.HEAPU32);
    r.push(P);
    const g = b(os, Uint32Array, i.HEAPU32);
    r.push(g);
    const m = t.drillingTypes, H = m ? Array.from(m.keys()) : [], R = m ? Array.from(m.values()) : [], ys = b(H, Uint32Array, i.HEAPU32);
    r.push(ys);
    const fs = b(R, Uint32Array, i.HEAPU32);
    r.push(fs);
    const cs = t.drillingPenaltyScales, ms = cs ? Array.from(cs.keys()) : [], Ms = cs ? Array.from(cs.values()) : [], Es = b(ms, Uint32Array, i.HEAPU32);
    r.push(Es);
    const ds = b(Ms, Float64Array, i.HEAPF64);
    r.push(ds), i._deform(K, s.length, T, L.length, Y, e.length, N, n, V.length, l, F, c.length, d.keysPtr, d.valuesPtr, d.size, _.keysPtr, _.valuesPtr, _.size, x.keysPtr, x.valuesPtr, x.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, h.keysPtr, h.valuesPtr, h.size, w.keysPtr, w.valuesPtr, w.size, B.keysPtr, B.valuesPtr, B.size, p.keysPtr, p.valuesPtr, p.size, q.keysPtr, q.valuesPtr, q.size, C.keysPtr, C.valuesPtr, C.size, U, a ? a.length : 0, P, g, rs.length, ys, fs, H.length, Es, ds, ms.length, Z, z, es, X);
    const As = i.HEAPU32[Z / 4], Fs = i.HEAPU32[z / 4], ps = i.HEAPU32[es / 4], gs = i.HEAPU32[X / 4], Hs = new Float64Array(i.HEAPF64.buffer, As, Fs), Us = new Float64Array(i.HEAPF64.buffer, ps, gs), _s = /* @__PURE__ */ new Map();
    for (let y = 0; y < Fs; y += 7) {
      const is = Hs[y];
      _s.set(is, Array.from(Hs.slice(y + 1, y + 7)));
    }
    const ks = /* @__PURE__ */ new Map();
    for (let y = 0; y < gs; y += 7) {
      const is = Us[y];
      ks.set(is, Array.from(Us.slice(y + 1, y + 7)));
    }
    return As && r.push(As), ps && r.push(ps), r.forEach((y) => i._free(y)), {
      deformations: _s,
      reactions: ks
    };
  };
  function b(s, e, o) {
    const t = new e(s), a = i._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  const f = await hs();
  Rs = function(s, e, o, t, a = 10) {
    if (s.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const r = [], K = ls(s.flat(), Float64Array, f.HEAPF64);
    r.push(K);
    const L = e.flat(), T = ls(L, Uint32Array, f.HEAPU32);
    r.push(T);
    const Q = e.map((H) => H.length), Y = ls(Q, Uint32Array, f.HEAPU32);
    r.push(Y);
    const V = o.supports ? Array.from(o.supports.keys()) : [], M = o.supports ? Array.from(o.supports.values()).flat().map((H) => H ? 1 : 0) : [], N = ls(V, Uint32Array, f.HEAPU32);
    r.push(N);
    const n = ls(M, Uint8Array, f.HEAPU8);
    r.push(n);
    const c = (H) => {
      const R = H ? Array.from(H.keys()) : [], ys = H ? Array.from(H.values()) : [], fs = ls(R, Uint32Array, f.HEAPU32);
      r.push(fs);
      const cs = ls(ys, Float64Array, f.HEAPF64);
      return r.push(cs), {
        keysPtr: fs,
        valuesPtr: cs,
        size: R.length
      };
    }, E = c(t.elasticities), l = c(t.areas), F = c(t.momentsOfInertiaZ), u = c(t.momentsOfInertiaY), d = c(t.shearModuli), p = c(t.torsionalConstants), _ = c(t.densities), x = c(t.thicknesses), k = c(t.poissonsRatios), O = c(t.membraneModifiers), h = c(t.bendingModifiers), w = t.plateFormulations, B = w ? Array.from(w.keys()) : [], q = w ? Array.from(w.values()) : [], C = ls(B, Uint32Array, f.HEAPU32);
    r.push(C);
    const W = ls(q, Uint32Array, f.HEAPU32);
    r.push(W);
    const G = f._malloc(4);
    r.push(G);
    const $ = f._malloc(4);
    r.push($);
    const J = f._malloc(4);
    r.push(J);
    const v = f._malloc(4);
    r.push(v);
    const j = f._malloc(4);
    r.push(j);
    const I = f._malloc(4);
    r.push(I);
    const ss = f._malloc(4);
    r.push(ss);
    const Z = f._malloc(4);
    r.push(Z), f._modal(K, s.length, T, L.length, Y, e.length, N, n, V.length, E.keysPtr, E.valuesPtr, E.size, l.keysPtr, l.valuesPtr, l.size, F.keysPtr, F.valuesPtr, F.size, u.keysPtr, u.valuesPtr, u.size, d.keysPtr, d.valuesPtr, d.size, p.keysPtr, p.valuesPtr, p.size, _.keysPtr, _.valuesPtr, _.size, x.keysPtr, x.valuesPtr, x.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, h.keysPtr, h.valuesPtr, h.size, C, W, B.length, a, G, $, J, v, j, I, ss, Z);
    const z = f.HEAPU32[G / 4], es = f.HEAPU32[$ / 4], X = f.HEAPU32[J / 4], ts = f.HEAPU32[v / 4], U = f.HEAPU32[j / 4], D = f.HEAPU32[I / 4], rs = f.HEAPU32[ss / 4], os = f.HEAPU32[Z / 4];
    let P = [], g = [], m = [];
    if (es > 0 && z) {
      const H = new Float64Array(f.HEAPF64.buffer, z, es);
      P = Array.from(H), r.push(z);
    }
    if (ts > 0 && U > 0 && X) {
      const H = new Float64Array(f.HEAPF64.buffer, X, ts * U);
      for (let R = 0; R < ts; R++) g.push(Array.from(H.slice(R * U, (R + 1) * U)));
      r.push(X);
    }
    if (rs > 0 && os > 0 && D) {
      const H = new Float64Array(f.HEAPF64.buffer, D, rs * os);
      for (let R = 0; R < rs; R++) m.push(Array.from(H.slice(R * os, (R + 1) * os)));
      r.push(D);
    }
    return r.forEach((H) => f._free(H)), {
      frequencies: P,
      modeShapes: g,
      massParticipation: m
    };
  };
  function ls(s, e, o) {
    const t = new e(s), a = f._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  await hs();
  const as = await hs();
  Ks = function(s) {
    const { nodes: e, elements: o, E: t, nu: a, gamma: r, c: K, phi: L, thickness: T = 1, supports: Q, surcharge: Y = 0, surfaceYThreshold: V = -1e10 } = s, M = [], N = e.flat(), n = Ss(N);
    M.push(n);
    const c = o.flat(), E = bs(c);
    M.push(E);
    const l = [];
    for (const h of Q) l.push(h.node, h.fixX ? 1 : 0, h.fixY ? 1 : 0);
    const F = bs(l);
    M.push(F);
    const u = o.length, d = e.length, p = as._slopeAllocDouble(u);
    M.push(p);
    const _ = as._slopeAllocDouble(d * 2);
    M.push(_);
    const x = as._slopeStabilitySolver(n, d, E, u, t, a, r, K, L, T, F, Q.length, Y, V, p, _), k = [];
    for (let h = 0; h < u; h++) k.push(as.HEAPF64[p / 8 + h]);
    const O = [];
    for (let h = 0; h < d; h++) O.push([
      as.HEAPF64[_ / 8 + 2 * h],
      as.HEAPF64[_ / 8 + 2 * h + 1]
    ]);
    return M.forEach((h) => as._free(h)), {
      fos: x,
      plasticStrain: k,
      displacements: O
    };
  };
  function Ss(s) {
    const e = new Float64Array(s), o = as._malloc(e.length * e.BYTES_PER_ELEMENT);
    return as.HEAPF64.set(e, o / 8), o;
  }
  function bs(s) {
    const e = new Uint32Array(s), o = as._malloc(e.length * e.BYTES_PER_ELEMENT);
    return as.HEAPU32.set(e, o / 4), o;
  }
  const S = await hs();
  function Ps(s, e, o) {
    const t = new e(s), a = S._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  Ls = function(s) {
    const e = [];
    let o = [], t = 0;
    s.nodes && s.nodes.length > 0 && (t = s.nodes.length, o = s.nodes.flat());
    const a = Ps(o.length > 0 ? o : [
      0
    ], Float64Array, S.HEAPF64);
    e.push(a);
    let r = [], K = 0;
    s.elements && s.elements.length > 0 && (K = s.elements.length, r = s.elements.flat());
    const L = Ps(r.length > 0 ? r : [
      0
    ], Int32Array, S.HEAPU32);
    e.push(L);
    let T = [], Q = 0;
    s.bcs && s.bcs.length > 0 && (Q = s.bcs.length, T = s.bcs.flatMap((P) => [
      P.node,
      P.dof,
      P.value
    ]));
    const Y = Ps(T.length > 0 ? T : [
      0
    ], Float64Array, S.HEAPF64);
    e.push(Y);
    let V = [], M = 0;
    s.pointLoads && s.pointLoads.length > 0 && (M = s.pointLoads.length, V = s.pointLoads.flatMap((P) => [
      P.node,
      P.dof,
      P.value
    ]));
    const N = Ps(V.length > 0 ? V : [
      0
    ], Float64Array, S.HEAPF64);
    e.push(N);
    const n = s.meshLx ?? 0, c = s.meshLy ?? 0, E = s.meshNx ?? 0, l = s.meshNy ?? 0, u = {
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
    const x = Ps(p.length > 0 ? p : [
      0
    ], Float64Array, S.HEAPF64);
    e.push(x);
    let k = [], O = 0;
    s.thicknesses && s.thicknesses.length > 0 && (O = s.thicknesses.length, k = s.thicknesses.slice());
    const h = Ps(k.length > 0 ? k : [
      0
    ], Float64Array, S.HEAPF64);
    e.push(h);
    const w = S._malloc(4);
    e.push(w);
    const B = S._malloc(4);
    e.push(B);
    const q = S._malloc(4);
    e.push(q);
    const C = S._malloc(4);
    e.push(C), S._plate_q4_solve(a, t, L, K, s.E, s.nu, s.thickness, Y, Q, s.pressure ?? 0, N, M, n, c, E, l, u, d, x, _, h, O, w, B, q, C);
    const W = S.HEAPU32[w / 4], G = S.HEAPU32[B / 4], $ = S.HEAPU32[q / 4], J = S.HEAPU32[C / 4], v = new Float64Array(S.HEAPF64.buffer, W, G), j = v[0], I = v[1], ss = [];
    let Z = 0;
    for (let P = 0; P < j; P++) {
      const g = 2 + P * 5, m = {
        x: v[g],
        y: v[g + 1],
        w: v[g + 2],
        bx: v[g + 3],
        by: v[g + 4]
      };
      ss.push(m), Math.abs(m.w) > Math.abs(Z) && (Z = m.w);
    }
    const z = new Float64Array(S.HEAPF64.buffer, $, J), es = [];
    let X = 0, ts = 0, U = 0, D = 0, rs = 0;
    for (let P = 0; P < I; P++) {
      const g = P * 9, m = {
        nodes: [
          z[g],
          z[g + 1],
          z[g + 2],
          z[g + 3]
        ],
        Mxx: z[g + 4],
        Myy: z[g + 5],
        Mxy: z[g + 6],
        Qx: z[g + 7],
        Qy: z[g + 8]
      };
      es.push(m), Math.abs(m.Mxx) > Math.abs(X) && (X = m.Mxx), Math.abs(m.Myy) > Math.abs(ts) && (ts = m.Myy), Math.abs(m.Mxy) > Math.abs(U) && (U = m.Mxy), Math.abs(m.Qx) > Math.abs(D) && (D = m.Qx), Math.abs(m.Qy) > Math.abs(rs) && (rs = m.Qy);
    }
    let os;
    if (n > 0 && c > 0) {
      const P = n / 2, g = c / 2;
      let m = 1 / 0;
      for (const H of ss) {
        const R = Math.hypot(H.x - P, H.y - g);
        R < m && (m = R, os = H.w);
      }
    }
    return W && e.push(W), $ && e.push($), e.forEach((P) => S._free(P)), {
      nodeResults: ss,
      elementResults: es,
      maxW: Z,
      maxMxx: X,
      maxMyy: ts,
      maxMxy: U,
      maxQx: D,
      maxQy: rs,
      centerW: os
    };
  };
  const A = await hs();
  Ys = function(s, e, o, t) {
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
    const a = [], r = ns(s.flat(), Float64Array, A.HEAPF64);
    a.push(r);
    const K = e.flat(), L = ns(K, Uint32Array, A.HEAPU32);
    a.push(L);
    const T = e.map((U) => U.length), Q = ns(T, Uint32Array, A.HEAPU32);
    a.push(Q);
    const Y = o.supports ? Array.from(o.supports.keys()) : [], V = o.supports ? Array.from(o.supports.values()).flat().map((U) => U ? 1 : 0) : [], M = ns(Y, Uint32Array, A.HEAPU32);
    a.push(M);
    const N = ns(V, Uint8Array, A.HEAPU8);
    a.push(N);
    const n = o.loads ? Array.from(o.loads.keys()) : [], c = o.loads ? Array.from(o.loads.values()).flat() : [], E = ns(n, Uint32Array, A.HEAPU32);
    a.push(E);
    const l = ns(c, Float64Array, A.HEAPF64);
    a.push(l);
    const F = (U) => {
      const D = U ? Array.from(U.keys()) : [], rs = U ? Array.from(U.values()) : [], os = ns(D, Uint32Array, A.HEAPU32);
      a.push(os);
      const P = ns(rs, Float64Array, A.HEAPF64);
      return a.push(P), {
        keysPtr: os,
        valuesPtr: P,
        size: D.length
      };
    }, u = F(t.elasticities), d = F(t.areas), p = F(t.momentsOfInertiaZ), _ = F(t.momentsOfInertiaY), x = F(t.shearModuli), k = F(t.torsionalConstants), O = F(t.thicknesses), h = F(t.poissonsRatios), w = F(t.shearAreasY), B = F(t.shearAreasZ), q = A._malloc(4);
    a.push(q);
    const C = A._malloc(4);
    a.push(C);
    const W = A._malloc(4);
    a.push(W);
    const G = A._malloc(4);
    a.push(G);
    const $ = A._malloc(4);
    a.push($);
    const J = A._malloc(4);
    a.push(J), A._didactic_solve(r, s.length, L, K.length, Q, e.length, M, N, Y.length, E, l, n.length, u.keysPtr, u.valuesPtr, u.size, d.keysPtr, d.valuesPtr, d.size, p.keysPtr, p.valuesPtr, p.size, _.keysPtr, _.valuesPtr, _.size, x.keysPtr, x.valuesPtr, x.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, h.keysPtr, h.valuesPtr, h.size, w.keysPtr, w.valuesPtr, w.size, B.keysPtr, B.valuesPtr, B.size, q, C, W, G, $, J);
    const v = A.HEAPU32[q / 4], j = A.HEAPU32[C / 4], I = A.HEAPU32[W / 4], ss = A.HEAPU32[G / 4], Z = A.HEAPU32[$ / 4], z = A.HEAPU32[J / 4], es = v && j > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, v, j)) : [], X = I && ss > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, I, ss)) : [], ts = Z && z > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, Z, z)) : [];
    return v && a.push(v), I && a.push(I), Z && a.push(Z), a.forEach((U) => A._free(U)), xs(es, X, ts, s.length, e.length);
  };
  function xs(s, e, o, t, a) {
    const r = t * 6, K = [];
    if (s.length > 0) {
      const n = s[0], c = [];
      for (let E = 0; E < n; E++) c.push(s[1 + E]);
      for (let E = 0; E < n; E++) {
        let l = c[E];
        const F = s[l++], u = s[l++], d = s[l++], p = d * d, _ = us(s.slice(l, l + p), d);
        l += p;
        const x = us(s.slice(l, l + p), d);
        l += p;
        const k = us(s.slice(l, l + p), d);
        l += p;
        const O = us(s.slice(l, l + 9), 3);
        l += 9;
        const h = s[l++], w = s[l++], B = s[l++], q = s[l++], C = s[l++], W = s[l++], G = s[l++], $ = s[l++], J = s[l++], v = s[l++], j = s[l++];
        K.push({
          index: F,
          type: u === 0 ? "frame" : "shell-Q4",
          nDOF: d,
          K_local: _,
          T: x,
          K_global: k,
          lambda: O,
          L: h,
          E: w,
          A: B,
          Iz: q,
          Iy: C,
          G: W,
          J: G,
          t: $,
          nu: J,
          phiZ: v,
          phiY: j
        });
      }
    }
    const L = [];
    let T = 0;
    if (e.length > 0) {
      T = e[0];
      for (let n = 0; n < T; n++) {
        const c = 1 + n * 3;
        L.push({
          row: e[c],
          col: e[c + 1],
          value: e[c + 2]
        });
      }
    }
    let Q = [], Y = [], V = [], M = [], N = [];
    if (o.length > 0) {
      let n = 0;
      const c = o[n++];
      Q = o.slice(n, n + c), n += c, Y = o.slice(n, n + c), n += c, V = o.slice(n, n + c), n += c;
      const E = o[n++];
      M = o.slice(n, n + E).map(Math.round), n += E;
      const l = o[n++];
      N = o.slice(n, n + l).map(Math.round);
    }
    return {
      nNodes: t,
      nElements: a,
      nDOF: r,
      elements: K,
      K_assembled_sparse: L,
      K_assembled_nnz: T,
      F_applied: Q,
      U_full: Y,
      R_full: V,
      freeDOFs: M,
      fixedDOFs: N
    };
  }
  function us(s, e) {
    const o = [];
    for (let t = 0; t < e; t++) o.push(s.slice(t * e, (t + 1) * e));
    return o;
  }
  function ns(s, e, o) {
    const t = new e(s), a = A._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
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
