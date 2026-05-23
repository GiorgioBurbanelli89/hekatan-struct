import { M as As, __tla as __tla_0 } from "./deform-wakq4P6K.js";
let zs, Us, ks, xs, vs;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const u = await As();
  Us = function(s, o, e, t, a) {
    if (s.length === 0) return;
    const r = [], T = Z(s.flat(), Float64Array, u.HEAPF64);
    r.push(T);
    const L = o.flat(), R = Z(L, Uint32Array, u.HEAPU32);
    r.push(R);
    const B = o.map((h) => h.length), K = Z(B, Uint32Array, u.HEAPU32);
    r.push(K);
    const Y = e.supports ? Array.from(e.supports.keys()) : [], b = e.supports ? Array.from(e.supports.values()).flat().map((h) => h ? 1 : 0) : [], N = Z(Y, Uint32Array, u.HEAPU32);
    r.push(N);
    const l = Z(b, Uint8Array, u.HEAPU8);
    r.push(l);
    const c = e.loads ? Array.from(e.loads.keys()) : [], F = e.loads ? Array.from(e.loads.values()).flat() : [], n = Z(c, Uint32Array, u.HEAPU32);
    r.push(n);
    const _ = Z(F, Float64Array, u.HEAPF64);
    r.push(_);
    const m = (h) => {
      const cs = h ? Array.from(h.keys()) : [], Es = h ? Array.from(h.values()) : [], ms = Z(cs, Uint32Array, u.HEAPU32);
      r.push(ms);
      const ds = Z(Es, Float64Array, u.HEAPF64);
      return r.push(ds), {
        keysPtr: ms,
        valuesPtr: ds,
        size: cs.length
      };
    }, g = m(t.elasticities), E = m(t.elasticitiesOrthogonal), U = m(t.areas), S = m(t.momentsOfInertiaZ), v = m(t.momentsOfInertiaY), O = m(t.shearModuli), f = m(t.torsionalConstants), w = m(t.thicknesses), V = m(t.poissonsRatios), q = m(t.shearAreasY), Q = m(t.shearAreasZ), W = t.rigidOffsets ? Array.from(t.rigidOffsets.keys()) : [], j = t.rigidOffsets ? Array.from(t.rigidOffsets.values()).flat() : [], D = Z(W, Uint32Array, u.HEAPU32);
    r.push(D);
    const G = Z(j, Float64Array, u.HEAPF64);
    r.push(G);
    const x = t.momentReleases ? Array.from(t.momentReleases.keys()) : [], X = t.momentReleases ? Array.from(t.momentReleases.values()).flat().map((h) => h ? 1 : 0) : [], I = Z(x, Uint32Array, u.HEAPU32);
    r.push(I);
    const ss = Z(X, Uint8Array, u.HEAPU8);
    r.push(ss);
    const C = u._malloc(4);
    r.push(C);
    const z = u._malloc(4);
    r.push(z);
    const as = u._malloc(4);
    r.push(as);
    const J = u._malloc(4);
    r.push(J);
    const ts = a ? a.flatMap((h) => [
      h.node,
      h.dof,
      h.k
    ]) : [], H = Z(ts.length > 0 ? ts : [
      0
    ], Float64Array, u.HEAPF64);
    r.push(H);
    const $ = t.plateFormulations, os = $ ? Array.from($.keys()) : [], es = $ ? Array.from($.values()) : [], i = Z(os, Uint32Array, u.HEAPU32);
    r.push(i);
    const d = Z(es, Uint32Array, u.HEAPU32);
    r.push(d), u._deform(T, s.length, R, L.length, K, o.length, N, l, Y.length, n, _, c.length, g.keysPtr, g.valuesPtr, g.size, U.keysPtr, U.valuesPtr, U.size, S.keysPtr, S.valuesPtr, S.size, v.keysPtr, v.valuesPtr, v.size, O.keysPtr, O.valuesPtr, O.size, f.keysPtr, f.valuesPtr, f.size, w.keysPtr, w.valuesPtr, w.size, V.keysPtr, V.valuesPtr, V.size, E.keysPtr, E.valuesPtr, E.size, q.keysPtr, q.valuesPtr, q.size, Q.keysPtr, Q.valuesPtr, Q.size, H, a ? a.length : 0, i, d, os.length, C, z, as, J);
    const P = u.HEAPU32[C / 4], A = u.HEAPU32[z / 4], k = u.HEAPU32[as / 4], ys = u.HEAPU32[J / 4], hs = new Float64Array(u.HEAPF64.buffer, P, A), fs = new Float64Array(u.HEAPF64.buffer, k, ys), rs = /* @__PURE__ */ new Map();
    for (let h = 0; h < A; h += 7) {
      const cs = hs[h];
      rs.set(cs, Array.from(hs.slice(h + 1, h + 7)));
    }
    const ls = /* @__PURE__ */ new Map();
    for (let h = 0; h < ys; h += 7) {
      const cs = fs[h];
      ls.set(cs, Array.from(fs.slice(h + 1, h + 7)));
    }
    return P && r.push(P), k && r.push(k), r.forEach((h) => u._free(h)), {
      deformations: rs,
      reactions: ls
    };
  };
  function Z(s, o, e) {
    const t = new o(s), a = u._malloc(t.length * t.BYTES_PER_ELEMENT);
    return e.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  const y = await As();
  ks = function(s, o, e, t, a = 10) {
    if (s.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const r = [], T = is(s.flat(), Float64Array, y.HEAPF64);
    r.push(T);
    const L = o.flat(), R = is(L, Uint32Array, y.HEAPU32);
    r.push(R);
    const B = o.map((A) => A.length), K = is(B, Uint32Array, y.HEAPU32);
    r.push(K);
    const Y = e.supports ? Array.from(e.supports.keys()) : [], b = e.supports ? Array.from(e.supports.values()).flat().map((A) => A ? 1 : 0) : [], N = is(Y, Uint32Array, y.HEAPU32);
    r.push(N);
    const l = is(b, Uint8Array, y.HEAPU8);
    r.push(l);
    const c = (A) => {
      const k = A ? Array.from(A.keys()) : [], ys = A ? Array.from(A.values()) : [], hs = is(k, Uint32Array, y.HEAPU32);
      r.push(hs);
      const fs = is(ys, Float64Array, y.HEAPF64);
      return r.push(fs), {
        keysPtr: hs,
        valuesPtr: fs,
        size: k.length
      };
    }, F = c(t.elasticities), n = c(t.areas), _ = c(t.momentsOfInertiaZ), m = c(t.momentsOfInertiaY), g = c(t.shearModuli), E = c(t.torsionalConstants), U = c(t.densities), S = c(t.thicknesses), v = c(t.poissonsRatios), O = c(t.membraneModifiers), f = c(t.bendingModifiers), w = t.plateFormulations, V = w ? Array.from(w.keys()) : [], q = w ? Array.from(w.values()) : [], Q = is(V, Uint32Array, y.HEAPU32);
    r.push(Q);
    const W = is(q, Uint32Array, y.HEAPU32);
    r.push(W);
    const j = y._malloc(4);
    r.push(j);
    const D = y._malloc(4);
    r.push(D);
    const G = y._malloc(4);
    r.push(G);
    const x = y._malloc(4);
    r.push(x);
    const X = y._malloc(4);
    r.push(X);
    const I = y._malloc(4);
    r.push(I);
    const ss = y._malloc(4);
    r.push(ss);
    const C = y._malloc(4);
    r.push(C), y._modal(T, s.length, R, L.length, K, o.length, N, l, Y.length, F.keysPtr, F.valuesPtr, F.size, n.keysPtr, n.valuesPtr, n.size, _.keysPtr, _.valuesPtr, _.size, m.keysPtr, m.valuesPtr, m.size, g.keysPtr, g.valuesPtr, g.size, E.keysPtr, E.valuesPtr, E.size, U.keysPtr, U.valuesPtr, U.size, S.keysPtr, S.valuesPtr, S.size, v.keysPtr, v.valuesPtr, v.size, O.keysPtr, O.valuesPtr, O.size, f.keysPtr, f.valuesPtr, f.size, Q, W, V.length, a, j, D, G, x, X, I, ss, C);
    const z = y.HEAPU32[j / 4], as = y.HEAPU32[D / 4], J = y.HEAPU32[G / 4], ts = y.HEAPU32[x / 4], H = y.HEAPU32[X / 4], $ = y.HEAPU32[I / 4], os = y.HEAPU32[ss / 4], es = y.HEAPU32[C / 4];
    let i = [], d = [], P = [];
    if (as > 0 && z) {
      const A = new Float64Array(y.HEAPF64.buffer, z, as);
      i = Array.from(A), r.push(z);
    }
    if (ts > 0 && H > 0 && J) {
      const A = new Float64Array(y.HEAPF64.buffer, J, ts * H);
      for (let k = 0; k < ts; k++) d.push(Array.from(A.slice(k * H, (k + 1) * H)));
      r.push(J);
    }
    if (os > 0 && es > 0 && $) {
      const A = new Float64Array(y.HEAPF64.buffer, $, os * es);
      for (let k = 0; k < os; k++) P.push(Array.from(A.slice(k * es, (k + 1) * es)));
      r.push($);
    }
    return r.forEach((A) => y._free(A)), {
      frequencies: i,
      modeShapes: d,
      massParticipation: P
    };
  };
  function is(s, o, e) {
    const t = new o(s), a = y._malloc(t.length * t.BYTES_PER_ELEMENT);
    return e.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  await As();
  const ns = await As();
  vs = function(s) {
    const { nodes: o, elements: e, E: t, nu: a, gamma: r, c: T, phi: L, thickness: R = 1, supports: B, surcharge: K = 0, surfaceYThreshold: Y = -1e10 } = s, b = [], N = o.flat(), l = gs(N);
    b.push(l);
    const c = e.flat(), F = Fs(c);
    b.push(F);
    const n = [];
    for (const f of B) n.push(f.node, f.fixX ? 1 : 0, f.fixY ? 1 : 0);
    const _ = Fs(n);
    b.push(_);
    const m = e.length, g = o.length, E = ns._slopeAllocDouble(m);
    b.push(E);
    const U = ns._slopeAllocDouble(g * 2);
    b.push(U);
    const S = ns._slopeStabilitySolver(l, g, F, m, t, a, r, T, L, R, _, B.length, K, Y, E, U), v = [];
    for (let f = 0; f < m; f++) v.push(ns.HEAPF64[E / 8 + f]);
    const O = [];
    for (let f = 0; f < g; f++) O.push([
      ns.HEAPF64[U / 8 + 2 * f],
      ns.HEAPF64[U / 8 + 2 * f + 1]
    ]);
    return b.forEach((f) => ns._free(f)), {
      fos: S,
      plasticStrain: v,
      displacements: O
    };
  };
  function gs(s) {
    const o = new Float64Array(s), e = ns._malloc(o.length * o.BYTES_PER_ELEMENT);
    return ns.HEAPF64.set(o, e / 8), e;
  }
  function Fs(s) {
    const o = new Uint32Array(s), e = ns._malloc(o.length * o.BYTES_PER_ELEMENT);
    return ns.HEAPU32.set(o, e / 4), e;
  }
  const M = await As();
  function us(s, o, e) {
    const t = new o(s), a = M._malloc(t.length * t.BYTES_PER_ELEMENT);
    return e.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
  xs = function(s) {
    const o = [];
    let e = [], t = 0;
    s.nodes && s.nodes.length > 0 && (t = s.nodes.length, e = s.nodes.flat());
    const a = us(e.length > 0 ? e : [
      0
    ], Float64Array, M.HEAPF64);
    o.push(a);
    let r = [], T = 0;
    s.elements && s.elements.length > 0 && (T = s.elements.length, r = s.elements.flat());
    const L = us(r.length > 0 ? r : [
      0
    ], Int32Array, M.HEAPU32);
    o.push(L);
    let R = [], B = 0;
    s.bcs && s.bcs.length > 0 && (B = s.bcs.length, R = s.bcs.flatMap((i) => [
      i.node,
      i.dof,
      i.value
    ]));
    const K = us(R.length > 0 ? R : [
      0
    ], Float64Array, M.HEAPF64);
    o.push(K);
    let Y = [], b = 0;
    s.pointLoads && s.pointLoads.length > 0 && (b = s.pointLoads.length, Y = s.pointLoads.flatMap((i) => [
      i.node,
      i.dof,
      i.value
    ]));
    const N = us(Y.length > 0 ? Y : [
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
      const i = l, d = c, P = F, A = n;
      if (i > 0 && d > 0 && P > 0 && A > 0) {
        const k = i / P, ys = d / A, hs = [];
        for (let rs = 0; rs <= A; rs++) for (let ls = 0; ls <= P; ls++) hs.push({
          x: ls * k,
          y: rs * ys,
          w: 0,
          bx: 0,
          by: 0
        });
        const fs = [];
        for (let rs = 0; rs < A; rs++) for (let ls = 0; ls < P; ls++) {
          const h = rs * (P + 1) + ls, cs = h + 1, Es = cs + (P + 1), ms = h + (P + 1);
          fs.push({
            nodes: [
              h,
              cs,
              Es,
              ms
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
          elementResults: fs,
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
    let E = [], U = 0;
    s.springs && s.springs.length > 0 && (U = s.springs.length, E = s.springs.flatMap((i) => [
      i.node,
      i.dof,
      i.k
    ]));
    const S = us(E.length > 0 ? E : [
      0
    ], Float64Array, M.HEAPF64);
    o.push(S);
    let v = [], O = 0;
    s.thicknesses && s.thicknesses.length > 0 && (O = s.thicknesses.length, v = s.thicknesses.slice());
    const f = us(v.length > 0 ? v : [
      0
    ], Float64Array, M.HEAPF64);
    o.push(f);
    const w = M._malloc(4);
    o.push(w);
    const V = M._malloc(4);
    o.push(V);
    const q = M._malloc(4);
    o.push(q);
    const Q = M._malloc(4);
    o.push(Q), M._plate_q4_solve(a, t, L, T, s.E, s.nu, s.thickness, K, B, s.pressure ?? 0, N, b, l, c, F, n, m, g, S, U, f, O, w, V, q, Q);
    const W = M.HEAPU32[w / 4], j = M.HEAPU32[V / 4], D = M.HEAPU32[q / 4], G = M.HEAPU32[Q / 4], x = new Float64Array(M.HEAPF64.buffer, W, j), X = x[0], I = x[1], ss = [];
    let C = 0;
    for (let i = 0; i < X; i++) {
      const d = 2 + i * 5, P = {
        x: x[d],
        y: x[d + 1],
        w: x[d + 2],
        bx: x[d + 3],
        by: x[d + 4]
      };
      ss.push(P), Math.abs(P.w) > Math.abs(C) && (C = P.w);
    }
    const z = new Float64Array(M.HEAPF64.buffer, D, G), as = [];
    let J = 0, ts = 0, H = 0, $ = 0, os = 0;
    for (let i = 0; i < I; i++) {
      const d = i * 9, P = {
        nodes: [
          z[d],
          z[d + 1],
          z[d + 2],
          z[d + 3]
        ],
        Mxx: z[d + 4],
        Myy: z[d + 5],
        Mxy: z[d + 6],
        Qx: z[d + 7],
        Qy: z[d + 8]
      };
      as.push(P), Math.abs(P.Mxx) > Math.abs(J) && (J = P.Mxx), Math.abs(P.Myy) > Math.abs(ts) && (ts = P.Myy), Math.abs(P.Mxy) > Math.abs(H) && (H = P.Mxy), Math.abs(P.Qx) > Math.abs($) && ($ = P.Qx), Math.abs(P.Qy) > Math.abs(os) && (os = P.Qy);
    }
    let es;
    if (l > 0 && c > 0) {
      const i = l / 2, d = c / 2;
      let P = 1 / 0;
      for (const A of ss) {
        const k = Math.hypot(A.x - i, A.y - d);
        k < P && (P = k, es = A.w);
      }
    }
    return W && o.push(W), D && o.push(D), o.forEach((i) => M._free(i)), {
      nodeResults: ss,
      elementResults: as,
      maxW: C,
      maxMxx: J,
      maxMyy: ts,
      maxMxy: H,
      maxQx: $,
      maxQy: os,
      centerW: es
    };
  };
  const p = await As();
  zs = function(s, o, e, t) {
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
    const a = [], r = Ps(s.flat(), Float64Array, p.HEAPF64);
    a.push(r);
    const T = o.flat(), L = Ps(T, Uint32Array, p.HEAPU32);
    a.push(L);
    const R = o.map((H) => H.length), B = Ps(R, Uint32Array, p.HEAPU32);
    a.push(B);
    const K = e.supports ? Array.from(e.supports.keys()) : [], Y = e.supports ? Array.from(e.supports.values()).flat().map((H) => H ? 1 : 0) : [], b = Ps(K, Uint32Array, p.HEAPU32);
    a.push(b);
    const N = Ps(Y, Uint8Array, p.HEAPU8);
    a.push(N);
    const l = e.loads ? Array.from(e.loads.keys()) : [], c = e.loads ? Array.from(e.loads.values()).flat() : [], F = Ps(l, Uint32Array, p.HEAPU32);
    a.push(F);
    const n = Ps(c, Float64Array, p.HEAPF64);
    a.push(n);
    const _ = (H) => {
      const $ = H ? Array.from(H.keys()) : [], os = H ? Array.from(H.values()) : [], es = Ps($, Uint32Array, p.HEAPU32);
      a.push(es);
      const i = Ps(os, Float64Array, p.HEAPF64);
      return a.push(i), {
        keysPtr: es,
        valuesPtr: i,
        size: $.length
      };
    }, m = _(t.elasticities), g = _(t.areas), E = _(t.momentsOfInertiaZ), U = _(t.momentsOfInertiaY), S = _(t.shearModuli), v = _(t.torsionalConstants), O = _(t.thicknesses), f = _(t.poissonsRatios), w = _(t.shearAreasY), V = _(t.shearAreasZ), q = p._malloc(4);
    a.push(q);
    const Q = p._malloc(4);
    a.push(Q);
    const W = p._malloc(4);
    a.push(W);
    const j = p._malloc(4);
    a.push(j);
    const D = p._malloc(4);
    a.push(D);
    const G = p._malloc(4);
    a.push(G), p._didactic_solve(r, s.length, L, T.length, B, o.length, b, N, K.length, F, n, l.length, m.keysPtr, m.valuesPtr, m.size, g.keysPtr, g.valuesPtr, g.size, E.keysPtr, E.valuesPtr, E.size, U.keysPtr, U.valuesPtr, U.size, S.keysPtr, S.valuesPtr, S.size, v.keysPtr, v.valuesPtr, v.size, O.keysPtr, O.valuesPtr, O.size, f.keysPtr, f.valuesPtr, f.size, w.keysPtr, w.valuesPtr, w.size, V.keysPtr, V.valuesPtr, V.size, q, Q, W, j, D, G);
    const x = p.HEAPU32[q / 4], X = p.HEAPU32[Q / 4], I = p.HEAPU32[W / 4], ss = p.HEAPU32[j / 4], C = p.HEAPU32[D / 4], z = p.HEAPU32[G / 4], as = x && X > 0 ? Array.from(new Float64Array(p.HEAPF64.buffer, x, X)) : [], J = I && ss > 0 ? Array.from(new Float64Array(p.HEAPF64.buffer, I, ss)) : [], ts = C && z > 0 ? Array.from(new Float64Array(p.HEAPF64.buffer, C, z)) : [];
    return x && a.push(x), I && a.push(I), C && a.push(C), a.forEach((H) => p._free(H)), _s(as, J, ts, s.length, o.length);
  };
  function _s(s, o, e, t, a) {
    const r = t * 6, T = [];
    if (s.length > 0) {
      const l = s[0], c = [];
      for (let F = 0; F < l; F++) c.push(s[1 + F]);
      for (let F = 0; F < l; F++) {
        let n = c[F];
        const _ = s[n++], m = s[n++], g = s[n++], E = g * g, U = ps(s.slice(n, n + E), g);
        n += E;
        const S = ps(s.slice(n, n + E), g);
        n += E;
        const v = ps(s.slice(n, n + E), g);
        n += E;
        const O = ps(s.slice(n, n + 9), 3);
        n += 9;
        const f = s[n++], w = s[n++], V = s[n++], q = s[n++], Q = s[n++], W = s[n++], j = s[n++], D = s[n++], G = s[n++], x = s[n++], X = s[n++];
        T.push({
          index: _,
          type: m === 0 ? "frame" : "shell-Q4",
          nDOF: g,
          K_local: U,
          T: S,
          K_global: v,
          lambda: O,
          L: f,
          E: w,
          A: V,
          Iz: q,
          Iy: Q,
          G: W,
          J: j,
          t: D,
          nu: G,
          phiZ: x,
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
    let B = [], K = [], Y = [], b = [], N = [];
    if (e.length > 0) {
      let l = 0;
      const c = e[l++];
      B = e.slice(l, l + c), l += c, K = e.slice(l, l + c), l += c, Y = e.slice(l, l + c), l += c;
      const F = e[l++];
      b = e.slice(l, l + F).map(Math.round), l += F;
      const n = e[l++];
      N = e.slice(l, l + n).map(Math.round);
    }
    return {
      nNodes: t,
      nElements: a,
      nDOF: r,
      elements: T,
      K_assembled_sparse: L,
      K_assembled_nnz: R,
      F_applied: B,
      U_full: K,
      R_full: Y,
      freeDOFs: b,
      fixedDOFs: N
    };
  }
  function ps(s, o) {
    const e = [];
    for (let t = 0; t < o; t++) e.push(s.slice(t * o, (t + 1) * o));
    return e;
  }
  function Ps(s, o, e) {
    const t = new o(s), a = p._malloc(t.length * t.BYTES_PER_ELEMENT);
    return e.set(t, a / t.BYTES_PER_ELEMENT), a;
  }
});
export {
  __tla,
  zs as a,
  Us as d,
  ks as m,
  xs as p,
  vs as s
};
