import { M as ls, __tla as __tla_0 } from "./deform-CGyu4ATa.js";
let gs, ms, ps, Fs, ds;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const y = await ls();
  ms = function(s, e, o, t, a) {
    if (s.length === 0) return;
    const r = [], Y = G(s.flat(), Float64Array, y.HEAPF64);
    r.push(Y);
    const K = e.flat(), w = G(K, Uint32Array, y.HEAPU32);
    r.push(w);
    const C = e.map((i) => i.length), N = G(C, Uint32Array, y.HEAPU32);
    r.push(N);
    const V = o.supports ? Array.from(o.supports.keys()) : [], M = o.supports ? Array.from(o.supports.values()).flat().map((i) => i ? 1 : 0) : [], B = G(V, Uint32Array, y.HEAPU32);
    r.push(B);
    const c = G(M, Uint8Array, y.HEAPU8);
    r.push(c);
    const l = o.loads ? Array.from(o.loads.keys()) : [], p = o.loads ? Array.from(o.loads.values()).flat() : [], n = G(l, Uint32Array, y.HEAPU32);
    r.push(n);
    const g = G(p, Float64Array, y.HEAPF64);
    r.push(g);
    const u = (i) => {
      const rs = i ? Array.from(i.keys()) : [], us = i ? Array.from(i.values()) : [], Ps = G(rs, Uint32Array, y.HEAPU32);
      r.push(Ps);
      const hs = G(us, Float64Array, y.HEAPF64);
      return r.push(hs), {
        keysPtr: Ps,
        valuesPtr: hs,
        size: rs.length
      };
    }, d = u(t.elasticities), E = u(t.elasticitiesOrthogonal), H = u(t.areas), S = u(t.momentsOfInertiaZ), k = u(t.momentsOfInertiaY), O = u(t.shearModuli), P = u(t.torsionalConstants), T = u(t.thicknesses), R = u(t.poissonsRatios);
    u(t.shearAreasY), u(t.shearAreasZ);
    const Q = t.rigidOffsets ? Array.from(t.rigidOffsets.keys()) : [], Z = t.rigidOffsets ? Array.from(t.rigidOffsets.values()).flat() : [], q = G(Q, Uint32Array, y.HEAPU32);
    r.push(q);
    const J = G(Z, Float64Array, y.HEAPF64);
    r.push(J);
    const $ = t.momentReleases ? Array.from(t.momentReleases.keys()) : [], X = t.momentReleases ? Array.from(t.momentReleases.values()).flat().map((i) => i ? 1 : 0) : [], z = G($, Uint32Array, y.HEAPU32);
    r.push(z);
    const ts = G(X, Uint8Array, y.HEAPU8);
    r.push(ts);
    const D = y._malloc(4);
    r.push(D);
    const W = y._malloc(4);
    r.push(W);
    const L = y._malloc(4);
    r.push(L);
    const v = y._malloc(4);
    r.push(v);
    const os = a ? a.flatMap((i) => [
      i.node,
      i.dof,
      i.k
    ]) : [], j = G(os.length > 0 ? os : [
      0
    ], Float64Array, y.HEAPF64);
    r.push(j), y._deform(Y, s.length, w, K.length, N, e.length, B, c, V.length, n, g, l.length, d.keysPtr, d.valuesPtr, d.size, H.keysPtr, H.valuesPtr, H.size, S.keysPtr, S.valuesPtr, S.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, P.keysPtr, P.valuesPtr, P.size, T.keysPtr, T.valuesPtr, T.size, R.keysPtr, R.valuesPtr, R.size, E.keysPtr, E.valuesPtr, E.size, j, a ? a.length : 0, D, W, L, v);
    const ss = y.HEAPU32[D / 4], b = y.HEAPU32[W / 4], I = y.HEAPU32[L / 4], m = y.HEAPU32[v / 4], U = new Float64Array(y.HEAPF64.buffer, ss, b), h = new Float64Array(y.HEAPF64.buffer, I, m), _ = /* @__PURE__ */ new Map();
    for (let i = 0; i < b; i += 7) {
      const rs = U[i];
      _.set(rs, Array.from(U.slice(i + 1, i + 7)));
    }
    const F = /* @__PURE__ */ new Map();
    for (let i = 0; i < m; i += 7) {
      const rs = h[i];
      F.set(rs, Array.from(h.slice(i + 1, i + 7)));
    }
    return ss && r.push(ss), I && r.push(I), r.forEach((i) => y._free(i)), {
      deformations: _,
      reactions: F
    };
  };
  function G(s, e, o) {
    const t = new e(s), a = y._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  const f = await ls();
  ps = function(s, e, o, t, a = 10) {
    if (s.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const r = [], Y = ns(s.flat(), Float64Array, f.HEAPF64);
    r.push(Y);
    const K = e.flat(), w = ns(K, Uint32Array, f.HEAPU32);
    r.push(w);
    const C = e.map((m) => m.length), N = ns(C, Uint32Array, f.HEAPU32);
    r.push(N);
    const V = o.supports ? Array.from(o.supports.keys()) : [], M = o.supports ? Array.from(o.supports.values()).flat().map((m) => m ? 1 : 0) : [], B = ns(V, Uint32Array, f.HEAPU32);
    r.push(B);
    const c = ns(M, Uint8Array, f.HEAPU8);
    r.push(c);
    const l = (m) => {
      const U = m ? Array.from(m.keys()) : [], h = m ? Array.from(m.values()) : [], _ = ns(U, Uint32Array, f.HEAPU32);
      r.push(_);
      const F = ns(h, Float64Array, f.HEAPF64);
      return r.push(F), {
        keysPtr: _,
        valuesPtr: F,
        size: U.length
      };
    }, p = l(t.elasticities), n = l(t.areas), g = l(t.momentsOfInertiaZ), u = l(t.momentsOfInertiaY), d = l(t.shearModuli), E = l(t.torsionalConstants), H = l(t.densities), S = l(t.thicknesses), k = l(t.poissonsRatios), O = l(t.membraneModifiers), P = l(t.bendingModifiers), T = f._malloc(4);
    r.push(T);
    const R = f._malloc(4);
    r.push(R);
    const Q = f._malloc(4);
    r.push(Q);
    const Z = f._malloc(4);
    r.push(Z);
    const q = f._malloc(4);
    r.push(q);
    const J = f._malloc(4);
    r.push(J);
    const $ = f._malloc(4);
    r.push($);
    const X = f._malloc(4);
    r.push(X), f._modal(Y, s.length, w, K.length, N, e.length, B, c, V.length, p.keysPtr, p.valuesPtr, p.size, n.keysPtr, n.valuesPtr, n.size, g.keysPtr, g.valuesPtr, g.size, u.keysPtr, u.valuesPtr, u.size, d.keysPtr, d.valuesPtr, d.size, E.keysPtr, E.valuesPtr, E.size, H.keysPtr, H.valuesPtr, H.size, S.keysPtr, S.valuesPtr, S.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, P.keysPtr, P.valuesPtr, P.size, a, T, R, Q, Z, q, J, $, X);
    const z = f.HEAPU32[T / 4], ts = f.HEAPU32[R / 4], D = f.HEAPU32[Q / 4], W = f.HEAPU32[Z / 4], L = f.HEAPU32[q / 4], v = f.HEAPU32[J / 4], os = f.HEAPU32[$ / 4], j = f.HEAPU32[X / 4];
    let ss = [], b = [], I = [];
    if (ts > 0 && z) {
      const m = new Float64Array(f.HEAPF64.buffer, z, ts);
      ss = Array.from(m), r.push(z);
    }
    if (W > 0 && L > 0 && D) {
      const m = new Float64Array(f.HEAPF64.buffer, D, W * L);
      for (let U = 0; U < W; U++) b.push(Array.from(m.slice(U * L, (U + 1) * L)));
      r.push(D);
    }
    if (os > 0 && j > 0 && v) {
      const m = new Float64Array(f.HEAPF64.buffer, v, os * j);
      for (let U = 0; U < os; U++) I.push(Array.from(m.slice(U * j, (U + 1) * j)));
      r.push(v);
    }
    return r.forEach((m) => f._free(m)), {
      frequencies: ss,
      modeShapes: b,
      massParticipation: I
    };
  };
  function ns(s, e, o) {
    const t = new e(s), a = f._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  await ls();
  const es = await ls();
  ds = function(s) {
    const { nodes: e, elements: o, E: t, nu: a, gamma: r, c: Y, phi: K, thickness: w = 1, supports: C, surcharge: N = 0, surfaceYThreshold: V = -1e10 } = s, M = [], B = e.flat(), c = ys(B);
    M.push(c);
    const l = o.flat(), p = fs(l);
    M.push(p);
    const n = [];
    for (const P of C) n.push(P.node, P.fixX ? 1 : 0, P.fixY ? 1 : 0);
    const g = fs(n);
    M.push(g);
    const u = o.length, d = e.length, E = es._slopeAllocDouble(u);
    M.push(E);
    const H = es._slopeAllocDouble(d * 2);
    M.push(H);
    const S = es._slopeStabilitySolver(c, d, p, u, t, a, r, Y, K, w, g, C.length, N, V, E, H), k = [];
    for (let P = 0; P < u; P++) k.push(es.HEAPF64[E / 8 + P]);
    const O = [];
    for (let P = 0; P < d; P++) O.push([
      es.HEAPF64[H / 8 + 2 * P],
      es.HEAPF64[H / 8 + 2 * P + 1]
    ]);
    return M.forEach((P) => es._free(P)), {
      fos: S,
      plasticStrain: k,
      displacements: O
    };
  };
  function ys(s) {
    const e = new Float64Array(s), o = es._malloc(e.length * e.BYTES_PER_ELEMENT);
    return es.HEAPF64.set(e, o / 8), o;
  }
  function fs(s) {
    const e = new Uint32Array(s), o = es._malloc(e.length * e.BYTES_PER_ELEMENT);
    return es.HEAPU32.set(e, o / 4), o;
  }
  const x = await ls();
  function cs(s, e, o) {
    const t = new e(s), a = x._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  Fs = function(s) {
    const e = [];
    let o = [], t = 0;
    s.nodes && s.nodes.length > 0 && (t = s.nodes.length, o = s.nodes.flat());
    const a = cs(o.length > 0 ? o : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(a);
    let r = [], Y = 0;
    s.elements && s.elements.length > 0 && (Y = s.elements.length, r = s.elements.flat());
    const K = cs(r.length > 0 ? r : [
      0
    ], Int32Array, x.HEAPU32);
    e.push(K);
    let w = [], C = 0;
    s.bcs && s.bcs.length > 0 && (C = s.bcs.length, w = s.bcs.flatMap((h) => [
      h.node,
      h.dof,
      h.value
    ]));
    const N = cs(w.length > 0 ? w : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(N);
    let V = [], M = 0;
    s.pointLoads && s.pointLoads.length > 0 && (M = s.pointLoads.length, V = s.pointLoads.flatMap((h) => [
      h.node,
      h.dof,
      h.value
    ]));
    const B = cs(V.length > 0 ? V : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(B);
    const c = s.meshLx ?? 0, l = s.meshLy ?? 0, p = s.meshNx ?? 0, n = s.meshNy ?? 0, u = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[s.bcType ?? "none"] ?? 0, d = s.theoryType ?? 0;
    let E = [], H = 0;
    s.springs && s.springs.length > 0 && (H = s.springs.length, E = s.springs.flatMap((h) => [
      h.node,
      h.dof,
      h.k
    ]));
    const S = cs(E.length > 0 ? E : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(S);
    let k = [], O = 0;
    s.thicknesses && s.thicknesses.length > 0 && (O = s.thicknesses.length, k = s.thicknesses.slice());
    const P = cs(k.length > 0 ? k : [
      0
    ], Float64Array, x.HEAPF64);
    e.push(P);
    const T = x._malloc(4);
    e.push(T);
    const R = x._malloc(4);
    e.push(R);
    const Q = x._malloc(4);
    e.push(Q);
    const Z = x._malloc(4);
    e.push(Z), x._plate_q4_solve(a, t, K, Y, s.E, s.nu, s.thickness, N, C, s.pressure ?? 0, B, M, c, l, p, n, u, d, S, H, P, O, T, R, Q, Z);
    const q = x.HEAPU32[T / 4], J = x.HEAPU32[R / 4], $ = x.HEAPU32[Q / 4], X = x.HEAPU32[Z / 4], z = new Float64Array(x.HEAPF64.buffer, q, J), ts = z[0], D = z[1], W = [];
    let L = 0;
    for (let h = 0; h < ts; h++) {
      const _ = 2 + h * 5, F = {
        x: z[_],
        y: z[_ + 1],
        w: z[_ + 2],
        bx: z[_ + 3],
        by: z[_ + 4]
      };
      W.push(F), Math.abs(F.w) > Math.abs(L) && (L = F.w);
    }
    const v = new Float64Array(x.HEAPF64.buffer, $, X), os = [];
    let j = 0, ss = 0, b = 0, I = 0, m = 0;
    for (let h = 0; h < D; h++) {
      const _ = h * 9, F = {
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
      os.push(F), Math.abs(F.Mxx) > Math.abs(j) && (j = F.Mxx), Math.abs(F.Myy) > Math.abs(ss) && (ss = F.Myy), Math.abs(F.Mxy) > Math.abs(b) && (b = F.Mxy), Math.abs(F.Qx) > Math.abs(I) && (I = F.Qx), Math.abs(F.Qy) > Math.abs(m) && (m = F.Qy);
    }
    let U;
    if (c > 0 && l > 0) {
      const h = c / 2, _ = l / 2;
      let F = 1 / 0;
      for (const i of W) {
        const rs = Math.hypot(i.x - h, i.y - _);
        rs < F && (F = rs, U = i.w);
      }
    }
    return q && e.push(q), $ && e.push($), e.forEach((h) => x._free(h)), {
      nodeResults: W,
      elementResults: os,
      maxW: L,
      maxMxx: j,
      maxMyy: ss,
      maxMxy: b,
      maxQx: I,
      maxQy: m,
      centerW: U
    };
  };
  const A = await ls();
  gs = function(s, e, o, t) {
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
    const a = [], r = as(s.flat(), Float64Array, A.HEAPF64);
    a.push(r);
    const Y = e.flat(), K = as(Y, Uint32Array, A.HEAPU32);
    a.push(K);
    const w = e.map((b) => b.length), C = as(w, Uint32Array, A.HEAPU32);
    a.push(C);
    const N = o.supports ? Array.from(o.supports.keys()) : [], V = o.supports ? Array.from(o.supports.values()).flat().map((b) => b ? 1 : 0) : [], M = as(N, Uint32Array, A.HEAPU32);
    a.push(M);
    const B = as(V, Uint8Array, A.HEAPU8);
    a.push(B);
    const c = o.loads ? Array.from(o.loads.keys()) : [], l = o.loads ? Array.from(o.loads.values()).flat() : [], p = as(c, Uint32Array, A.HEAPU32);
    a.push(p);
    const n = as(l, Float64Array, A.HEAPF64);
    a.push(n);
    const g = (b) => {
      const I = b ? Array.from(b.keys()) : [], m = b ? Array.from(b.values()) : [], U = as(I, Uint32Array, A.HEAPU32);
      a.push(U);
      const h = as(m, Float64Array, A.HEAPF64);
      return a.push(h), {
        keysPtr: U,
        valuesPtr: h,
        size: I.length
      };
    }, u = g(t.elasticities), d = g(t.areas), E = g(t.momentsOfInertiaZ), H = g(t.momentsOfInertiaY), S = g(t.shearModuli), k = g(t.torsionalConstants), O = g(t.thicknesses), P = g(t.poissonsRatios), T = g(t.shearAreasY), R = g(t.shearAreasZ), Q = A._malloc(4);
    a.push(Q);
    const Z = A._malloc(4);
    a.push(Z);
    const q = A._malloc(4);
    a.push(q);
    const J = A._malloc(4);
    a.push(J);
    const $ = A._malloc(4);
    a.push($);
    const X = A._malloc(4);
    a.push(X), A._didactic_solve(r, s.length, K, Y.length, C, e.length, M, B, N.length, p, n, c.length, u.keysPtr, u.valuesPtr, u.size, d.keysPtr, d.valuesPtr, d.size, E.keysPtr, E.valuesPtr, E.size, H.keysPtr, H.valuesPtr, H.size, S.keysPtr, S.valuesPtr, S.size, k.keysPtr, k.valuesPtr, k.size, O.keysPtr, O.valuesPtr, O.size, P.keysPtr, P.valuesPtr, P.size, T.keysPtr, T.valuesPtr, T.size, R.keysPtr, R.valuesPtr, R.size, Q, Z, q, J, $, X);
    const z = A.HEAPU32[Q / 4], ts = A.HEAPU32[Z / 4], D = A.HEAPU32[q / 4], W = A.HEAPU32[J / 4], L = A.HEAPU32[$ / 4], v = A.HEAPU32[X / 4], os = z && ts > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, z, ts)) : [], j = D && W > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, D, W)) : [], ss = L && v > 0 ? Array.from(new Float64Array(A.HEAPF64.buffer, L, v)) : [];
    return z && a.push(z), D && a.push(D), L && a.push(L), a.forEach((b) => A._free(b)), As(os, j, ss, s.length, e.length);
  };
  function As(s, e, o, t, a) {
    const r = t * 6, Y = [];
    if (s.length > 0) {
      const c = s[0], l = [];
      for (let p = 0; p < c; p++) l.push(s[1 + p]);
      for (let p = 0; p < c; p++) {
        let n = l[p];
        const g = s[n++], u = s[n++], d = s[n++], E = d * d, H = is(s.slice(n, n + E), d);
        n += E;
        const S = is(s.slice(n, n + E), d);
        n += E;
        const k = is(s.slice(n, n + E), d);
        n += E;
        const O = is(s.slice(n, n + 9), 3);
        n += 9;
        const P = s[n++], T = s[n++], R = s[n++], Q = s[n++], Z = s[n++], q = s[n++], J = s[n++], $ = s[n++], X = s[n++], z = s[n++], ts = s[n++];
        Y.push({
          index: g,
          type: u === 0 ? "frame" : "shell-Q4",
          nDOF: d,
          K_local: H,
          T: S,
          K_global: k,
          lambda: O,
          L: P,
          E: T,
          A: R,
          Iz: Q,
          Iy: Z,
          G: q,
          J,
          t: $,
          nu: X,
          phiZ: z,
          phiY: ts
        });
      }
    }
    const K = [];
    let w = 0;
    if (e.length > 0) {
      w = e[0];
      for (let c = 0; c < w; c++) {
        const l = 1 + c * 3;
        K.push({
          row: e[l],
          col: e[l + 1],
          value: e[l + 2]
        });
      }
    }
    let C = [], N = [], V = [], M = [], B = [];
    if (o.length > 0) {
      let c = 0;
      const l = o[c++];
      C = o.slice(c, c + l), c += l, N = o.slice(c, c + l), c += l, V = o.slice(c, c + l), c += l;
      const p = o[c++];
      M = o.slice(c, c + p).map(Math.round), c += p;
      const n = o[c++];
      B = o.slice(c, c + n).map(Math.round);
    }
    return {
      nNodes: t,
      nElements: a,
      nDOF: r,
      elements: Y,
      K_assembled_sparse: K,
      K_assembled_nnz: w,
      F_applied: C,
      U_full: N,
      R_full: V,
      freeDOFs: M,
      fixedDOFs: B
    };
  }
  function is(s, e) {
    const o = [];
    for (let t = 0; t < e; t++) o.push(s.slice(t * e, (t + 1) * e));
    return o;
  }
  function as(s, e, o) {
    const t = new e(s), a = A._malloc(t.length * t.BYTES_PER_ELEMENT);
    return o.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
});
export {
  __tla,
  gs as a,
  ms as d,
  ps as m,
  Fs as p,
  ds as s
};
