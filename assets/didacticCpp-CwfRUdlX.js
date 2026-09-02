import { M as ws, __tla as __tla_0 } from "./deform-B_v9vqMJ.js";
let ct, at, ot, et, nt, lt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function Is(t) {
    const r = new Array(12).fill(0);
    if (!t) return r;
    if (t.length >= 12) {
      for (let s = 0; s < 12; s++) r[s] = t[s] ? 1 : 0;
      return r;
    }
    const e = [
      3,
      4,
      5,
      9,
      10,
      11
    ];
    for (let s = 0; s < 6 && s < t.length; s++) t[s] && (r[e[s]] = 1);
    return r;
  }
  const i = await ws();
  ot = function(t, r, e, s, a) {
    if (t.length === 0) return;
    const o = [], Q = g(t.flat(), Float64Array, i.HEAPF64);
    o.push(Q);
    const $ = r.flat(), N = g($, Uint32Array, i.HEAPU32);
    o.push(N);
    const J = r.map((U) => U.length), n = g(J, Uint32Array, i.HEAPU32);
    o.push(n);
    const q = e.supports ? Array.from(e.supports.keys()) : [], w = e.supports ? Array.from(e.supports.values()).flat().map((U) => U ? 1 : 0) : [], Z = g(q, Uint32Array, i.HEAPU32);
    o.push(Z);
    const P = g(w, Uint8Array, i.HEAPU8);
    o.push(P);
    const A = e.loads ? Array.from(e.loads.keys()) : [], H = e.loads ? Array.from(e.loads.values()).flat() : [], c = g(A, Uint32Array, i.HEAPU32);
    o.push(c);
    const k = g(H, Float64Array, i.HEAPF64);
    o.push(k);
    const m = (U) => {
      const fs = U ? Array.from(U.keys()) : [], qs = U ? Array.from(U.values()) : [], Js = g(fs, Uint32Array, i.HEAPU32);
      o.push(Js);
      const Xs = g(qs, Float64Array, i.HEAPF64);
      return o.push(Xs), {
        keysPtr: Js,
        valuesPtr: Xs,
        size: fs.length
      };
    }, h = m(s.elasticities), E = m(s.elasticitiesOrthogonal), v = m(s.areas), K = m(s.momentsOfInertiaZ), z = m(s.momentsOfInertiaY), O = m(s.shearModuli), u = m(s.torsionalConstants), V = m(s.thicknesses), T = m(s.poissonsRatios), Y = m(s.shearAreasY), L = m(s.shearAreasZ), B = s.rigidOffsets ? Array.from(s.rigidOffsets.keys()) : [], D = s.rigidOffsets ? Array.from(s.rigidOffsets.values()).flat() : [], C = g(B, Uint32Array, i.HEAPU32);
    o.push(C);
    const rs = g(D, Float64Array, i.HEAPF64);
    o.push(rs);
    const M = s.momentReleases ? Array.from(s.momentReleases.keys()) : [], os = s.momentReleases ? Array.from(s.momentReleases.values()).flatMap(Is) : [], X = g(M, Uint32Array, i.HEAPU32);
    o.push(X);
    const I = g(os, Uint8Array, i.HEAPU8);
    o.push(I);
    const W = i._malloc(4);
    o.push(W);
    const b = i._malloc(4);
    o.push(b);
    const es = i._malloc(4);
    o.push(es);
    const G = i._malloc(4);
    o.push(G);
    const ss = a ? a.flatMap((U) => [
      U.node,
      U.dof,
      U.k
    ]) : [], x = g(ss.length > 0 ? ss : [
      0
    ], Float64Array, i.HEAPF64);
    o.push(x);
    const j = s.plateFormulations, ls = j ? Array.from(j.keys()) : [], F = j ? Array.from(j.values()) : [], l = g(ls, Uint32Array, i.HEAPU32);
    o.push(l);
    const _ = g(F, Uint32Array, i.HEAPU32);
    o.push(_);
    const d = s.drillingTypes, ns = d ? Array.from(d.keys()) : [], ms = d ? Array.from(d.values()) : [], Ks = g(ns, Uint32Array, i.HEAPU32);
    o.push(Ks);
    const Us = g(ms, Uint32Array, i.HEAPU32);
    o.push(Us);
    const Ps = s.drillingPenaltyScales, Es = Ps ? Array.from(Ps.keys()) : [], Zs = Ps ? Array.from(Ps.values()) : [], xs = g(Es, Uint32Array, i.HEAPU32);
    o.push(xs);
    const gs = g(Zs, Float64Array, i.HEAPF64);
    o.push(gs);
    const hs = s.membraneModifiers, ys = s.bendingModifiers, Hs = hs ? Array.from(hs.keys()) : [], Rs = hs ? Array.from(hs.values()) : [], ks = g(Hs, Uint32Array, i.HEAPU32);
    o.push(ks);
    const _s = g(Rs, Float64Array, i.HEAPF64);
    o.push(_s);
    const vs = ys ? Array.from(ys.keys()) : [], Vs = ys ? Array.from(ys.values()) : [], Ts = g(vs, Uint32Array, i.HEAPU32);
    o.push(Ts);
    const zs = g(Vs, Float64Array, i.HEAPF64);
    o.push(zs);
    const As = s.shellModifiers, us = As ? Array.from(As.keys()) : [], Ms = [];
    if (As) for (const U of us) {
      const fs = As.get(U);
      for (let qs = 0; qs < 8; qs++) Ms.push(fs[qs] ?? 1);
    }
    const bs = g(us, Uint32Array, i.HEAPU32);
    o.push(bs);
    const ps = g(Ms, Float64Array, i.HEAPF64);
    o.push(ps);
    const ds = s.localAngles, Ys = ds ? Array.from(ds.keys()) : [], Bs = ds ? Array.from(ds.values()) : [], S = g(Ys, Uint32Array, i.HEAPU32);
    o.push(S);
    const as = g(Bs, Float64Array, i.HEAPF64);
    o.push(as), i._deform(Q, t.length, N, $.length, n, r.length, Z, P, q.length, c, k, A.length, h.keysPtr, h.valuesPtr, h.size, v.keysPtr, v.valuesPtr, v.size, K.keysPtr, K.valuesPtr, K.size, z.keysPtr, z.valuesPtr, z.size, O.keysPtr, O.valuesPtr, O.size, u.keysPtr, u.valuesPtr, u.size, V.keysPtr, V.valuesPtr, V.size, T.keysPtr, T.valuesPtr, T.size, E.keysPtr, E.valuesPtr, E.size, Y.keysPtr, Y.valuesPtr, Y.size, L.keysPtr, L.valuesPtr, L.size, x, a ? a.length : 0, l, _, ls.length, Ks, Us, ns.length, xs, gs, Es.length, ks, _s, Hs.length, Ts, zs, vs.length, bs, ps, us.length, S, as, Ys.length, X, I, M.length, W, b, es, G);
    const Ls = i.HEAPU32[W / 4], Ns = i.HEAPU32[b / 4], Os = i.HEAPU32[es / 4], $s = i.HEAPU32[G / 4], Ds = new Float64Array(i.HEAPF64.buffer, Ls, Ns), Cs = new Float64Array(i.HEAPF64.buffer, Os, $s), Ws = /* @__PURE__ */ new Map();
    for (let U = 0; U < Ns; U += 7) {
      const fs = Ds[U];
      Ws.set(fs, Array.from(Ds.slice(U + 1, U + 7)));
    }
    const Gs = /* @__PURE__ */ new Map();
    for (let U = 0; U < $s; U += 7) {
      const fs = Cs[U];
      Gs.set(fs, Array.from(Cs.slice(U + 1, U + 7)));
    }
    return Ls && o.push(Ls), Os && o.push(Os), o.forEach((U) => i._free(U)), {
      deformations: Ws,
      reactions: Gs
    };
  };
  function g(t, r, e) {
    const s = new r(t), a = i._malloc(s.length * s.BYTES_PER_ELEMENT);
    return (r === Float64Array ? i.HEAPF64 : r === Uint32Array ? i.HEAPU32 : r === Uint8Array ? i.HEAPU8 : e).set(s, a / s.BYTES_PER_ELEMENT), a;
  }
  const y = await ws();
  et = function(t, r, e, s, a = 10, o = 0, Q = 0, $ = 1, N, J) {
    if (t.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const n = [], q = ts(t.flat(), Float64Array, y.HEAPF64);
    n.push(q);
    const w = r.flat(), Z = ts(w, Uint32Array, y.HEAPU32);
    n.push(Z);
    const P = r.map((S) => S.length), A = ts(P, Uint32Array, y.HEAPU32);
    n.push(A);
    const H = e.supports ? Array.from(e.supports.keys()) : [], c = e.supports ? Array.from(e.supports.values()).flat().map((S) => S ? 1 : 0) : [], k = ts(H, Uint32Array, y.HEAPU32);
    n.push(k);
    const m = ts(c, Uint8Array, y.HEAPU8);
    n.push(m);
    const h = (S) => {
      const as = S ? Array.from(S.keys()) : [], Ls = S ? Array.from(S.values()) : [], Ns = ts(as, Uint32Array, y.HEAPU32);
      n.push(Ns);
      const Os = ts(Ls, Float64Array, y.HEAPF64);
      return n.push(Os), {
        keysPtr: Ns,
        valuesPtr: Os,
        size: as.length
      };
    }, E = h(s.elasticities), v = h(s.areas), K = h(s.momentsOfInertiaZ), z = h(s.momentsOfInertiaY), O = h(s.shearModuli), u = h(s.torsionalConstants), V = h(s.densities), T = h(s.thicknesses), Y = h(s.poissonsRatios), L = h(s.membraneModifiers), B = h(s.bendingModifiers), D = s.plateFormulations, C = D ? Array.from(D.keys()) : [], rs = D ? Array.from(D.values()) : [], M = ts(C, Uint32Array, y.HEAPU32);
    n.push(M);
    const os = ts(rs, Uint32Array, y.HEAPU32);
    n.push(os);
    const X = s.drillingTypes, I = X ? Array.from(X.keys()) : [], W = X ? Array.from(X.values()) : [], b = ts(I, Uint32Array, y.HEAPU32);
    n.push(b);
    const es = ts(W, Uint32Array, y.HEAPU32);
    n.push(es);
    const G = s.drillingPenaltyScales, ss = G ? Array.from(G.keys()) : [], x = G ? Array.from(G.values()) : [], j = ts(ss, Uint32Array, y.HEAPU32);
    n.push(j);
    const ls = ts(x, Float64Array, y.HEAPF64);
    n.push(ls);
    const F = h(s.shearAreasY), l = h(s.shearAreasZ), _ = h(s.localAngles), d = s.momentReleases ? Array.from(s.momentReleases.keys()) : [], ns = s.momentReleases ? Array.from(s.momentReleases.values()).flatMap(Is) : [], ms = ts(d, Uint32Array, y.HEAPU32);
    n.push(ms);
    const Ks = ts(ns, Uint8Array, y.HEAPU8);
    n.push(Ks);
    const Us = h(e.masses), Ps = h(N ?? e.diaphragms), Es = J ?? e.springs, Zs = Es ? Es.flatMap((S) => [
      S.node,
      S.dof,
      S.k
    ]) : [], xs = ts(Zs.length > 0 ? Zs : [
      0
    ], Float64Array, y.HEAPF64);
    n.push(xs);
    const gs = y._malloc(4);
    n.push(gs);
    const hs = y._malloc(4);
    n.push(hs);
    const ys = y._malloc(4);
    n.push(ys);
    const Hs = y._malloc(4);
    n.push(Hs);
    const Rs = y._malloc(4);
    n.push(Rs);
    const ks = y._malloc(4);
    n.push(ks);
    const _s = y._malloc(4);
    n.push(_s);
    const vs = y._malloc(4);
    n.push(vs), y._modal(q, t.length, Z, w.length, A, r.length, k, m, H.length, E.keysPtr, E.valuesPtr, E.size, v.keysPtr, v.valuesPtr, v.size, K.keysPtr, K.valuesPtr, K.size, z.keysPtr, z.valuesPtr, z.size, O.keysPtr, O.valuesPtr, O.size, u.keysPtr, u.valuesPtr, u.size, V.keysPtr, V.valuesPtr, V.size, T.keysPtr, T.valuesPtr, T.size, Y.keysPtr, Y.valuesPtr, Y.size, L.keysPtr, L.valuesPtr, L.size, B.keysPtr, B.valuesPtr, B.size, M, os, C.length, b, es, I.length, j, ls, ss.length, F.keysPtr, F.valuesPtr, F.size, l.keysPtr, l.valuesPtr, l.size, _.keysPtr, _.valuesPtr, _.size, ms, Ks, d.length, Us.keysPtr, Us.valuesPtr, Us.size, $, Ps.keysPtr, Ps.valuesPtr, Ps.size, xs, Es ? Es.length : 0, a, o, Q, gs, hs, ys, Hs, Rs, ks, _s, vs);
    const Vs = y.HEAPU32[gs / 4], Ts = y.HEAPU32[hs / 4], zs = y.HEAPU32[ys / 4], As = y.HEAPU32[Hs / 4], us = y.HEAPU32[Rs / 4], Ms = y.HEAPU32[ks / 4], bs = y.HEAPU32[_s / 4], ps = y.HEAPU32[vs / 4];
    let ds = [], Ys = [], Bs = [];
    if (Ts > 0 && Vs) {
      const S = new Float64Array(y.HEAPF64.buffer, Vs, Ts);
      ds = Array.from(S), n.push(Vs);
    }
    if (As > 0 && us > 0 && zs) {
      const S = new Float64Array(y.HEAPF64.buffer, zs, As * us);
      for (let as = 0; as < As; as++) Ys.push(Array.from(S.slice(as * us, (as + 1) * us)));
      n.push(zs);
    }
    if (bs > 0 && ps > 0 && Ms) {
      const S = new Float64Array(y.HEAPF64.buffer, Ms, bs * ps);
      for (let as = 0; as < bs; as++) Bs.push(Array.from(S.slice(as * ps, (as + 1) * ps)));
      n.push(Ms);
    }
    return n.forEach((S) => y._free(S)), {
      frequencies: ds,
      modeShapes: Ys,
      massParticipation: Bs
    };
  };
  function ts(t, r, e) {
    const s = new r(t), a = y._malloc(s.length * s.BYTES_PER_ELEMENT);
    return (r === Float64Array ? y.HEAPF64 : r === Uint32Array ? y.HEAPU32 : r === Uint8Array ? y.HEAPU8 : e).set(s, a / s.BYTES_PER_ELEMENT), a;
  }
  const f = await ws();
  at = function(t, r, e, s, a = 10) {
    if (t.length === 0) return {
      frequencies: [],
      modeShapes: [],
      massParticipation: []
    };
    const o = [], Q = Fs(t.flat(), Float64Array, f.HEAPF64);
    o.push(Q);
    const $ = r.flat(), N = Fs($, Uint32Array, f.HEAPU32);
    o.push(N);
    const J = r.map((F) => F.length), n = Fs(J, Uint32Array, f.HEAPU32);
    o.push(n);
    const q = e.supports ? Array.from(e.supports.keys()) : [], w = e.supports ? Array.from(e.supports.values()).flat().map((F) => F ? 1 : 0) : [], Z = Fs(q, Uint32Array, f.HEAPU32);
    o.push(Z);
    const P = Fs(w, Uint8Array, f.HEAPU8);
    o.push(P);
    const A = (F) => {
      const l = F ? Array.from(F.keys()) : [], _ = F ? Array.from(F.values()) : [], d = Fs(l, Uint32Array, f.HEAPU32);
      o.push(d);
      const ns = Fs(_, Float64Array, f.HEAPF64);
      return o.push(ns), {
        keysPtr: d,
        valuesPtr: ns,
        size: l.length
      };
    }, H = A(s.elasticities), c = A(s.areas), k = A(s.momentsOfInertiaZ), m = A(s.momentsOfInertiaY), h = A(s.shearModuli), E = A(s.torsionalConstants), v = A(s.densities), K = A(s.thicknesses), z = A(s.poissonsRatios), O = A(s.membraneModifiers), u = A(s.bendingModifiers), V = A(s.polarMomentsOfInertia), T = f._malloc(4);
    o.push(T);
    const Y = f._malloc(4);
    o.push(Y);
    const L = f._malloc(4);
    o.push(L);
    const B = f._malloc(4);
    o.push(B);
    const D = f._malloc(4);
    o.push(D);
    const C = f._malloc(4);
    o.push(C);
    const rs = f._malloc(4);
    o.push(rs);
    const M = f._malloc(4);
    o.push(M), f._modal_paz(Q, t.length, N, $.length, n, r.length, Z, P, q.length, H.keysPtr, H.valuesPtr, H.size, c.keysPtr, c.valuesPtr, c.size, k.keysPtr, k.valuesPtr, k.size, m.keysPtr, m.valuesPtr, m.size, h.keysPtr, h.valuesPtr, h.size, E.keysPtr, E.valuesPtr, E.size, v.keysPtr, v.valuesPtr, v.size, K.keysPtr, K.valuesPtr, K.size, z.keysPtr, z.valuesPtr, z.size, O.keysPtr, O.valuesPtr, O.size, u.keysPtr, u.valuesPtr, u.size, V.keysPtr, V.valuesPtr, V.size, a, T, Y, L, B, D, C, rs, M);
    const os = f.HEAPU32[T / 4], X = f.HEAPU32[Y / 4], I = f.HEAPU32[L / 4], W = f.HEAPU32[B / 4], b = f.HEAPU32[D / 4], es = f.HEAPU32[C / 4], G = f.HEAPU32[rs / 4], ss = f.HEAPU32[M / 4];
    let x = [], j = [], ls = [];
    if (X > 0 && os) {
      const F = new Float64Array(f.HEAPF64.buffer, os, X);
      x = Array.from(F), o.push(os);
    }
    if (W > 0 && b > 0 && I) {
      const F = new Float64Array(f.HEAPF64.buffer, I, W * b);
      for (let l = 0; l < W; l++) j.push(Array.from(F.slice(l * b, (l + 1) * b)));
      o.push(I);
    }
    if (G > 0 && ss > 0 && es) {
      const F = new Float64Array(f.HEAPF64.buffer, es, G * ss);
      for (let l = 0; l < G; l++) ls.push(Array.from(F.slice(l * ss, (l + 1) * ss)));
      o.push(es);
    }
    return o.forEach((F) => f._free(F)), {
      frequencies: x,
      modeShapes: j,
      massParticipation: ls
    };
  };
  function Fs(t, r, e) {
    const s = new r(t), a = f._malloc(s.length * s.BYTES_PER_ELEMENT);
    return (r === Float64Array ? f.HEAPF64 : r === Uint32Array ? f.HEAPU32 : r === Uint8Array ? f.HEAPU8 : e).set(s, a / s.BYTES_PER_ELEMENT), a;
  }
  const cs = await ws();
  lt = function(t) {
    const { nodes: r, elements: e, E: s, nu: a, gamma: o, c: Q, phi: $, thickness: N = 1, supports: J, surcharge: n = 0, surfaceYThreshold: q = -1e10 } = t, w = [], Z = r.flat(), P = st(Z);
    w.push(P);
    const A = e.flat(), H = js(A);
    w.push(H);
    const c = [];
    for (const u of J) c.push(u.node, u.fixX ? 1 : 0, u.fixY ? 1 : 0);
    const k = js(c);
    w.push(k);
    const m = e.length, h = r.length, E = cs._slopeAllocDouble(m);
    w.push(E);
    const v = cs._slopeAllocDouble(h * 2);
    w.push(v);
    const K = cs._slopeStabilitySolver(P, h, H, m, s, a, o, Q, $, N, k, J.length, n, q, E, v), z = [];
    for (let u = 0; u < m; u++) z.push(cs.HEAPF64[E / 8 + u]);
    const O = [];
    for (let u = 0; u < h; u++) O.push([
      cs.HEAPF64[v / 8 + 2 * u],
      cs.HEAPF64[v / 8 + 2 * u + 1]
    ]);
    return w.forEach((u) => cs._free(u)), {
      fos: K,
      plasticStrain: z,
      displacements: O
    };
  };
  function st(t) {
    const r = new Float64Array(t), e = cs._malloc(r.length * r.BYTES_PER_ELEMENT);
    return cs.HEAPF64.set(r, e / 8), e;
  }
  function js(t) {
    const r = new Uint32Array(t), e = cs._malloc(r.length * r.BYTES_PER_ELEMENT);
    return cs.HEAPU32.set(r, e / 4), e;
  }
  const R = await ws();
  function Ss(t, r, e) {
    const s = new r(t), a = R._malloc(s.length * s.BYTES_PER_ELEMENT);
    return (r === Float64Array ? R.HEAPF64 : r === Uint32Array ? R.HEAPU32 : r === Uint8Array ? R.HEAPU8 : e).set(s, a / s.BYTES_PER_ELEMENT), a;
  }
  nt = function(t) {
    const r = [];
    let e = [], s = 0;
    t.nodes && t.nodes.length > 0 && (s = t.nodes.length, e = t.nodes.flat());
    const a = Ss(e.length > 0 ? e : [
      0
    ], Float64Array, R.HEAPF64);
    r.push(a);
    let o = [], Q = 0;
    t.elements && t.elements.length > 0 && (Q = t.elements.length, o = t.elements.flat());
    const $ = Ss(o.length > 0 ? o : [
      0
    ], Int32Array, R.HEAPU32);
    r.push($);
    let N = [], J = 0;
    t.bcs && t.bcs.length > 0 && (J = t.bcs.length, N = t.bcs.flatMap((l) => [
      l.node,
      l.dof,
      l.value
    ]));
    const n = Ss(N.length > 0 ? N : [
      0
    ], Float64Array, R.HEAPF64);
    r.push(n);
    let q = [], w = 0;
    t.pointLoads && t.pointLoads.length > 0 && (w = t.pointLoads.length, q = t.pointLoads.flatMap((l) => [
      l.node,
      l.dof,
      l.value
    ]));
    const Z = Ss(q.length > 0 ? q : [
      0
    ], Float64Array, R.HEAPF64);
    r.push(Z);
    const P = t.meshLx ?? 0, A = t.meshLy ?? 0, H = t.meshNx ?? 0, c = t.meshNy ?? 0, m = {
      none: 0,
      "simply-supported": 1,
      clamped: 2
    }[t.bcType ?? "none"] ?? 0, h = t.theoryType ?? 0;
    let E = [], v = 0;
    t.springs && t.springs.length > 0 && (v = t.springs.length, E = t.springs.flatMap((l) => [
      l.node,
      l.dof,
      l.k
    ]));
    const K = Ss(E.length > 0 ? E : [
      0
    ], Float64Array, R.HEAPF64);
    r.push(K);
    let z = [], O = 0;
    t.thicknesses && t.thicknesses.length > 0 && (O = t.thicknesses.length, z = t.thicknesses.slice());
    const u = Ss(z.length > 0 ? z : [
      0
    ], Float64Array, R.HEAPF64);
    r.push(u);
    const V = R._malloc(4);
    r.push(V);
    const T = R._malloc(4);
    r.push(T);
    const Y = R._malloc(4);
    r.push(Y);
    const L = R._malloc(4);
    r.push(L), R._plate_q4_solve(a, s, $, Q, t.E, t.nu, t.thickness, n, J, t.pressure ?? 0, Z, w, P, A, H, c, m, h, K, v, u, O, V, T, Y, L);
    const B = R.HEAPU32[V / 4], D = R.HEAPU32[T / 4], C = R.HEAPU32[Y / 4], rs = R.HEAPU32[L / 4], M = new Float64Array(R.HEAPF64.buffer, B, D), os = M[0], X = M[1], I = [];
    let W = 0;
    for (let l = 0; l < os; l++) {
      const _ = 2 + l * 5, d = {
        x: M[_],
        y: M[_ + 1],
        w: M[_ + 2],
        bx: M[_ + 3],
        by: M[_ + 4]
      };
      I.push(d), Math.abs(d.w) > Math.abs(W) && (W = d.w);
    }
    const b = new Float64Array(R.HEAPF64.buffer, C, rs), es = [];
    let G = 0, ss = 0, x = 0, j = 0, ls = 0;
    for (let l = 0; l < X; l++) {
      const _ = l * 9, d = {
        nodes: [
          b[_],
          b[_ + 1],
          b[_ + 2],
          b[_ + 3]
        ],
        Mxx: b[_ + 4],
        Myy: b[_ + 5],
        Mxy: b[_ + 6],
        Qx: b[_ + 7],
        Qy: b[_ + 8]
      };
      es.push(d), Math.abs(d.Mxx) > Math.abs(G) && (G = d.Mxx), Math.abs(d.Myy) > Math.abs(ss) && (ss = d.Myy), Math.abs(d.Mxy) > Math.abs(x) && (x = d.Mxy), Math.abs(d.Qx) > Math.abs(j) && (j = d.Qx), Math.abs(d.Qy) > Math.abs(ls) && (ls = d.Qy);
    }
    let F;
    if (P > 0 && A > 0) {
      const l = P / 2, _ = A / 2;
      let d = 1 / 0;
      for (const ns of I) {
        const ms = Math.hypot(ns.x - l, ns.y - _);
        ms < d && (d = ms, F = ns.w);
      }
    }
    return B && r.push(B), C && r.push(C), r.forEach((l) => R._free(l)), {
      nodeResults: I,
      elementResults: es,
      maxW: W,
      maxMxx: G,
      maxMyy: ss,
      maxMxy: x,
      maxQx: j,
      maxQy: ls,
      centerW: F
    };
  };
  const p = await ws();
  ct = function(t, r, e, s) {
    if (t.length === 0) return {
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
    const a = [], o = is(t.flat(), Float64Array, p.HEAPF64);
    a.push(o);
    const Q = r.flat(), $ = is(Q, Uint32Array, p.HEAPU32);
    a.push($);
    const N = r.map((x) => x.length), J = is(N, Uint32Array, p.HEAPU32);
    a.push(J);
    const n = e.supports ? Array.from(e.supports.keys()) : [], q = e.supports ? Array.from(e.supports.values()).flat().map((x) => x ? 1 : 0) : [], w = is(n, Uint32Array, p.HEAPU32);
    a.push(w);
    const Z = is(q, Uint8Array, p.HEAPU8);
    a.push(Z);
    const P = e.loads ? Array.from(e.loads.keys()) : [], A = e.loads ? Array.from(e.loads.values()).flat() : [], H = is(P, Uint32Array, p.HEAPU32);
    a.push(H);
    const c = is(A, Float64Array, p.HEAPF64);
    a.push(c);
    const k = (x) => {
      const j = x ? Array.from(x.keys()) : [], ls = x ? Array.from(x.values()) : [], F = is(j, Uint32Array, p.HEAPU32);
      a.push(F);
      const l = is(ls, Float64Array, p.HEAPF64);
      return a.push(l), {
        keysPtr: F,
        valuesPtr: l,
        size: j.length
      };
    }, m = k(s.elasticities), h = k(s.areas), E = k(s.momentsOfInertiaZ), v = k(s.momentsOfInertiaY), K = k(s.shearModuli), z = k(s.torsionalConstants), O = k(s.thicknesses), u = k(s.poissonsRatios), V = k(s.shearAreasY), T = k(s.shearAreasZ), Y = p._malloc(4);
    a.push(Y);
    const L = p._malloc(4);
    a.push(L);
    const B = p._malloc(4);
    a.push(B);
    const D = p._malloc(4);
    a.push(D);
    const C = p._malloc(4);
    a.push(C);
    const rs = p._malloc(4);
    a.push(rs), p._didactic_solve(o, t.length, $, Q.length, J, r.length, w, Z, n.length, H, c, P.length, m.keysPtr, m.valuesPtr, m.size, h.keysPtr, h.valuesPtr, h.size, E.keysPtr, E.valuesPtr, E.size, v.keysPtr, v.valuesPtr, v.size, K.keysPtr, K.valuesPtr, K.size, z.keysPtr, z.valuesPtr, z.size, O.keysPtr, O.valuesPtr, O.size, u.keysPtr, u.valuesPtr, u.size, V.keysPtr, V.valuesPtr, V.size, T.keysPtr, T.valuesPtr, T.size, Y, L, B, D, C, rs);
    const M = p.HEAPU32[Y / 4], os = p.HEAPU32[L / 4], X = p.HEAPU32[B / 4], I = p.HEAPU32[D / 4], W = p.HEAPU32[C / 4], b = p.HEAPU32[rs / 4], es = M && os > 0 ? Array.from(new Float64Array(p.HEAPF64.buffer, M, os)) : [], G = X && I > 0 ? Array.from(new Float64Array(p.HEAPF64.buffer, X, I)) : [], ss = W && b > 0 ? Array.from(new Float64Array(p.HEAPF64.buffer, W, b)) : [];
    return M && a.push(M), X && a.push(X), W && a.push(W), a.forEach((x) => p._free(x)), tt(es, G, ss, t.length, r.length);
  };
  function tt(t, r, e, s, a) {
    const o = s * 6, Q = [];
    if (t.length > 0) {
      const P = t[0], A = [];
      for (let H = 0; H < P; H++) A.push(t[1 + H]);
      for (let H = 0; H < P; H++) {
        let c = A[H];
        const k = t[c++], m = t[c++], h = t[c++], E = h * h, v = Qs(t.slice(c, c + E), h);
        c += E;
        const K = Qs(t.slice(c, c + E), h);
        c += E;
        const z = Qs(t.slice(c, c + E), h);
        c += E;
        const O = Qs(t.slice(c, c + 9), 3);
        c += 9;
        const u = t[c++], V = t[c++], T = t[c++], Y = t[c++], L = t[c++], B = t[c++], D = t[c++], C = t[c++], rs = t[c++], M = t[c++], os = t[c++];
        Q.push({
          index: k,
          type: m === 0 ? "frame" : "shell-Q4",
          nDOF: h,
          K_local: v,
          T: K,
          K_global: z,
          lambda: O,
          L: u,
          E: V,
          A: T,
          Iz: Y,
          Iy: L,
          G: B,
          J: D,
          t: C,
          nu: rs,
          phiZ: M,
          phiY: os
        });
      }
    }
    const $ = [];
    let N = 0;
    if (r.length > 0) {
      N = r[0];
      for (let P = 0; P < N; P++) {
        const A = 1 + P * 3;
        $.push({
          row: r[A],
          col: r[A + 1],
          value: r[A + 2]
        });
      }
    }
    let J = [], n = [], q = [], w = [], Z = [];
    if (e.length > 0) {
      let P = 0;
      const A = e[P++];
      J = e.slice(P, P + A), P += A, n = e.slice(P, P + A), P += A, q = e.slice(P, P + A), P += A;
      const H = e[P++];
      w = e.slice(P, P + H).map(Math.round), P += H;
      const c = e[P++];
      Z = e.slice(P, P + c).map(Math.round);
    }
    return {
      nNodes: s,
      nElements: a,
      nDOF: o,
      elements: Q,
      K_assembled_sparse: $,
      K_assembled_nnz: N,
      F_applied: J,
      U_full: n,
      R_full: q,
      freeDOFs: w,
      fixedDOFs: Z
    };
  }
  function Qs(t, r) {
    const e = [];
    for (let s = 0; s < r; s++) e.push(t.slice(s * r, (s + 1) * r));
    return e;
  }
  function is(t, r, e) {
    const s = new r(t), a = p._malloc(s.length * s.BYTES_PER_ELEMENT);
    return (r === Float64Array ? p.HEAPF64 : r === Uint32Array ? p.HEAPU32 : r === Uint8Array ? p.HEAPU8 : e).set(s, a / s.BYTES_PER_ELEMENT), a;
  }
});
export {
  __tla,
  ct as a,
  at as b,
  ot as d,
  et as m,
  nt as p,
  lt as s
};
