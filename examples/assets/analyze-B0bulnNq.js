import { s as Gt, n as Nt, b as vt, k as Ht, i as Lt, z as S, c as jt, m as X, t as bt, a as dt, e as A, f as Xt } from "./pureFunctionsAny.generated-BHh0zpCc.js";
function Ut(t) {
  if (t.length === 2) return $t(t);
  if (t.length === 3) return It(t);
}
function $t(t) {
  const o = Gt(t[1], t[0]), r = Nt(o), f = vt(o, [1, 0, 0]) / r, e = vt(o, [0, 1, 0]) / r, n = vt(o, [0, 0, 1]) / r, x = Math.sqrt(f ** 2 + e ** 2);
  let p = [[f, e, n], [-e / x, f / x, 0], [-f * n / x, -e * n / x, x]];
  return n === 1 && (p = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), n === -1 && (p = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), Ht(Lt(4), p).toArray();
}
function It(t) {
  const n = [t[0], t[1], t[2]], x = S(3, 3).toArray();
  for (let l = 0; l < 3; l++) for (let Q = 0; Q < 3; Q++) x[l][Q] = n[Q][l];
  const p = [-1, 1, 0], M = [-1, 0, 1], a = S(3, 2).toArray();
  for (let l = 0; l < 3; l++) for (let Q = 0; Q < 3; Q++) a[l][0] += x[l][Q] * p[Q], a[l][1] += x[l][Q] * M[Q];
  const Z = a.map((l) => l[0]), B = a.map((l) => l[1]);
  let b = jt(Z, B), k = Nt(b);
  if (k === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), S(18, 18).toArray();
  b = b.map((l) => l / k);
  const F = [...b], d = Lt(3).toArray(), K = b[0];
  let w;
  if (Math.abs(K) > 1 - 1e-10) {
    const l = b[2];
    w = d.map((Q, P) => Q[2] - l * b[P]);
  } else w = d.map((l, Q) => l[0] - K * b[Q]);
  if (k = Nt(w), k === 0) return console.warn("Degenerate local X-axis detected."), S(18, 18).toArray();
  w = w.map((l) => l / k);
  let L = jt(F, w);
  if (k = Nt(L), k === 0) return console.warn("Degenerate local Y-axis detected."), S(18, 18).toArray();
  L = L.map((l) => l / k);
  const _ = [w, L, F], E = S(18, 18).toArray();
  for (let l = 0; l < 3; l++) {
    const Q = l * 6, P = Q + 3;
    for (let I = 0; I < 3; I++) for (let H = 0; H < 3; H++) E[Q + I][Q + H] = _[I][H], E[P + I][P + H] = _[I][H];
  }
  return E;
}
function tn(t, o, r) {
  if (t.length === 2) return nn(t, o, r);
  if (t.length === 3) return on(t, o, r);
}
function nn(t, o, r) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const f = ((_a = o == null ? void 0 : o.momentsOfInertiaZ) == null ? void 0 : _a.get(r)) ?? 0, e = ((_b = o == null ? void 0 : o.momentsOfInertiaY) == null ? void 0 : _b.get(r)) ?? 0, n = ((_c = o == null ? void 0 : o.elasticities) == null ? void 0 : _c.get(r)) ?? 0, x = ((_d = o == null ? void 0 : o.areas) == null ? void 0 : _d.get(r)) ?? 0, p = ((_e = o == null ? void 0 : o.shearModuli) == null ? void 0 : _e.get(r)) ?? 0, M = ((_f = o == null ? void 0 : o.torsionalConstants) == null ? void 0 : _f.get(r)) ?? 0, a = Nt(Gt(t[0], t[1])), Z = ((_g = o == null ? void 0 : o.shearAreasY) == null ? void 0 : _g.get(r)) ?? 0, B = ((_h = o == null ? void 0 : o.shearAreasZ) == null ? void 0 : _h.get(r)) ?? 0, b = B > 0 && p > 0 ? 12 * n * f / (p * B * a ** 2) : 0, k = Z > 0 && p > 0 ? 12 * n * e / (p * Z * a ** 2) : 0, F = n * x / a, d = p * M / a, K = 12 * n * f / a ** 3 / (1 + b), w = 6 * n * f / a ** 2 / (1 + b), L = 4 * n * f / a * (1 + b / 4) / (1 + b), _ = 2 * n * f / a * (1 - b / 2) / (1 + b), E = 12 * n * e / a ** 3 / (1 + k), l = 6 * n * e / a ** 2 / (1 + k), Q = 4 * n * e / a * (1 + k / 4) / (1 + k), P = 2 * n * e / a * (1 - k / 2) / (1 + k);
  return [[F, 0, 0, 0, 0, 0, -F, 0, 0, 0, 0, 0], [0, K, 0, 0, 0, w, 0, -K, 0, 0, 0, w], [0, 0, E, 0, -l, 0, 0, 0, -E, 0, -l, 0], [0, 0, 0, d, 0, 0, 0, 0, 0, -d, 0, 0], [0, 0, -l, 0, Q, 0, 0, 0, l, 0, P, 0], [0, w, 0, 0, 0, L, 0, -w, 0, 0, 0, _], [-F, 0, 0, 0, 0, 0, F, 0, 0, 0, 0, 0], [0, -K, 0, 0, 0, -w, 0, K, 0, 0, 0, -w], [0, 0, -E, 0, l, 0, 0, 0, E, 0, l, 0], [0, 0, 0, -d, 0, 0, 0, 0, 0, d, 0, 0], [0, 0, -l, 0, P, 0, 0, 0, l, 0, Q, 0], [0, w, 0, 0, 0, _, 0, -w, 0, 0, 0, L]];
}
function on(t, o, r) {
  var _a, _b, _c, _d, _e;
  const f = ((_a = o.elasticities) == null ? void 0 : _a.get(r)) ?? 0, e = ((_b = o.elasticitiesOrthogonal) == null ? void 0 : _b.get(r)) ?? 0, n = ((_c = o.poissonsRatios) == null ? void 0 : _c.get(r)) ?? 0, x = ((_d = o.shearModuli) == null ? void 0 : _d.get(r)) ?? 0, p = ((_e = o.thicknesses) == null ? void 0 : _e.get(r)) ?? 0, M = e > 0, a = M ? Rt(f, e, x, n, p) : zt(f, n, p), Z = M ? Pt(x, p) : Kt(f, n, p), B = M ? Et(f, e, x, n) : Bt(f, n), b = t.map(([i, s]) => [i, s]), k = b[1][0] - b[0][0], F = b[2][0] - b[0][0], d = b[0][1] - b[1][1], K = b[2][1] - b[0][1], w = 0.5 * (k * K - F * -d), L = Vt(b), _ = qt(b), E = Jt(b, B, p), l = X(X(bt(L), Z), L), Q = X(X(bt(_), a), _), P = S(18, 18).toArray(), I = X(dt(l, Q), w), H = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let i = 0; i < 3; i++) for (let s = 0; s < 3; s++) for (let Y = 0; Y < 3; Y++) {
    const h = H[i][s], N = H[Y][s];
    P[h][N] = E[i * 3 + s][Y * 3 + s];
  }
  for (let i = 0; i < 18; i++) for (let s = 0; s < 18; s++) P[i][s] = (P[i][s] ?? 0) + I.get([i, s]);
  return P;
  function zt(i, s, Y) {
    const h = i / (1 - s * s), N = A([[h, h * s, 0], [h * s, h, 0], [0, 0, h * (1 - s) / 2]]);
    return X(Y ** 3 / 12, N);
  }
  function Kt(i, s, Y) {
    const h = 0.8333333333333334, N = i / (2 * (1 + s)), z = h * N * Y;
    return A([[z, 0], [0, z]]);
  }
  function Rt(i, s, Y, h, N) {
    const z = s * h / i, g = 1 - h * z, y = i / g, O = s / g, T = h * s / g, u = A([[y, T, 0], [T, O, 0], [0, 0, Y]]);
    return X(N ** 3 / 12, u);
  }
  function Pt(i, s) {
    const h = 0.8333333333333334 * i * s;
    return A([[h, 0], [0, h]]);
  }
  function Vt(i) {
    const s = S(2, 18).toArray(), [Y, h] = i[0], [N, z] = i[1], [g, y] = i[2], O = 0.5 * ((N - Y) * (y - h) - (g - Y) * -(h - z)), T = (Y + N + g) / 3, j = (h + z + y) / 3, u = [T, Y, N], U = [j, h, z], $ = [T, N, g], R = [j, z, y], V = [T, g, Y], ht = [j, y, h], C = 1 / 3, [ct, it, lt, St] = Ct(u, U), [Mt, wt, _t, Dt] = Ct($, R), [ut, Qt, Ot, Tt] = Ct(V, ht), ft = S(2, 18).toArray(), gt = S(2, 18).toArray(), mt = S(2, 18).toArray();
    for (let m = 0; m < 2; m++) for (let c = 0; c < 6; c++) ft[m][c] = C * ct[m][c] + it[m][c], ft[m][c + 6] = C * ct[m][c] + lt[m][c], ft[m][c + 12] = C * ct[m][c], gt[m][c] = C * Mt[m][c], gt[m][c + 6] = C * Mt[m][c] + wt[m][c], gt[m][c + 12] = C * Mt[m][c] + _t[m][c], mt[m][c] = C * ut[m][c] + Ot[m][c], mt[m][c + 6] = C * ut[m][c], mt[m][c + 12] = C * ut[m][c] + Qt[m][c];
    for (let m = 0; m < 2; m++) for (let c = 0; c < 18; c++) ft[m][c] *= St, gt[m][c] *= Dt, mt[m][c] *= Tt, s[m][c] = (ft[m][c] + gt[m][c] + mt[m][c]) / O;
    return s;
  }
  function Ct(i, s) {
    const Y = S(2, 6).toArray(), h = S(2, 6).toArray(), N = S(2, 6).toArray(), z = i[1] - i[0], g = i[0] - i[2], y = s[2] - s[0], O = s[0] - s[1], T = i[2] - i[1], j = s[1] - s[2], u = 0.5 * (z * y - g * O), U = 0.5 * O * g, $ = 0.5 * y * z, R = 0.5 * z * g, V = 0.5 * O * y;
    return Y[0][2] = 0.5 * T / u, Y[0][3] = -0.5, Y[1][2] = 0.5 * j / u, Y[1][4] = 0.5, h[0][2] = 0.5 * g / u, h[0][3] = 0.5 * U / u, h[0][4] = 0.5 * R / u, h[1][2] = 0.5 * y / u, h[1][3] = 0.5 * V / u, h[1][4] = 0.5 * $ / u, N[0][2] = 0.5 * z / u, N[0][3] = -0.5 * $ / u, N[0][4] = -0.5 * R / u, N[1][2] = 0.5 * O / u, N[1][3] = -0.5 * V / u, N[1][4] = -0.5 * U / u, [Y, h, N, u];
  }
  function qt(i) {
    const s = S(3, 18).toArray(), [Y, h] = i[0], [N, z] = i[1], [g, y] = i[2], O = N - Y, T = g - Y, j = g - N, u = z - y, U = y - h, $ = h - z, R = 0.5 * (O * U - T * -$), V = u / (2 * R), ht = j / (2 * R), C = U / (2 * R), ct = -T / (2 * R), it = $ / (2 * R), lt = O / (2 * R);
    return s[0][4] = V, s[0][10] = C, s[0][16] = it, s[1][3] = -ht, s[1][9] = -ct, s[1][15] = -lt, s[2][3] = -V, s[2][4] = ht, s[2][9] = -C, s[2][10] = ct, s[2][15] = -it, s[2][16] = lt, s;
  }
  function Jt(i, s, Y) {
    let h = S(9, 9).toArray(), N = S(9, 9).toArray(), z = S(9, 9).toArray(), g = S(9, 3).toArray(), y = S(3, 9).toArray(), O = S(3, 3).toArray(), T = S(3, 3).toArray(), j = S(3, 3).toArray(), u = S(3, 3).toArray(), U = S(3, 3).toArray(), $ = S(3, 3).toArray(), R = S(3, 3).toArray(), V = S(3, 3).toArray();
    const ht = 1 / 8, C = ht / 6, ct = ht ** 2 / 4, it = 1, lt = 2, St = 1, Mt = 0, wt = 1, _t = -1, Dt = -1, ut = -1, Qt = -2, Ot = i[0][0], Tt = i[0][1], ft = i[1][0], gt = i[1][1], mt = i[2][0], m = i[2][1], c = Ot - ft, At = ft - mt, yt = mt - Ot, pt = Tt - gt, Yt = gt - m, xt = m - Tt, tt = -c, rt = -At, et = -yt, nt = -pt, ot = -Yt, st = -xt, kt = 0.5 * (tt * xt - yt * -pt), Wt = 2 * kt, G = 4 * kt, v = 0.5 * Y, Ft = kt * Y, q = tt ** 2 + nt ** 2, J = rt ** 2 + ot ** 2, W = et ** 2 + st ** 2;
    g[0][0] = v * Yt, g[0][2] = v * rt, g[1][1] = v * rt, g[1][2] = v * Yt, g[2][0] = v * Yt * (st - nt) * C, g[2][1] = v * rt * (yt - c) * C, g[2][2] = v * (yt * st - c * nt) * 2 * C, g[3][0] = v * xt, g[3][2] = v * et, g[4][1] = v * et, g[4][2] = v * xt, g[5][0] = v * xt * (nt - ot) * C, g[5][1] = v * et * (c - At) * C, g[5][2] = v * (c * nt - At * ot) * 2 * C, g[6][0] = v * pt, g[6][2] = v * tt, g[7][1] = v * tt, g[7][2] = v * pt, g[8][0] = v * pt * (ot - st) * C, g[8][1] = v * tt * (At - yt) * C, g[8][2] = v * (At * ot - yt * st) * 2 * C, z = X(X(A(g), s), bt(A(g))).toArray(), z = X(A(z), 1 / Ft).toArray(), y[0][0] = rt / G, y[0][1] = ot / G, y[0][2] = 1, y[0][3] = et / G, y[0][4] = st / G, y[0][6] = tt / G, y[0][7] = nt / G, y[1][0] = rt / G, y[1][1] = ot / G, y[1][3] = et / G, y[1][4] = st / G, y[1][5] = 1, y[1][6] = tt / G, y[1][7] = nt / G, y[2][0] = rt / G, y[2][1] = ot / G, y[2][3] = et / G, y[2][4] = st / G, y[2][6] = tt / G, y[2][7] = nt / G, y[2][8] = 1;
    const at = 1 / (kt * G);
    O[0][0] = at * Yt * st * q, O[0][1] = at * xt * nt * J, O[0][2] = at * pt * ot * W, O[1][0] = at * At * et * q, O[1][1] = at * yt * tt * J, O[1][2] = at * c * rt * W, O[2][0] = at * (Yt * yt + rt * st) * q, O[2][1] = at * (xt * c + et * nt) * J, O[2][2] = at * (pt * At + tt * ot) * W;
    const D = Wt / 3;
    T[0][0] = D * it / q, T[0][1] = D * lt / q, T[0][2] = D * St / q, T[1][0] = D * Mt / J, T[1][1] = D * wt / J, T[1][2] = D * _t / J, T[2][0] = D * Dt / W, T[2][1] = D * ut / W, T[2][2] = D * Qt / W, j[0][0] = D * Qt / q, j[0][1] = D * Dt / q, j[0][2] = D * ut / q, j[1][0] = D * St / J, j[1][1] = D * it / J, j[1][2] = D * lt / J, j[2][0] = D * _t / W, j[2][1] = D * Mt / W, j[2][2] = D * wt / W, u[0][0] = D * wt / q, u[0][1] = D * _t / q, u[0][2] = D * Mt / q, u[1][0] = D * ut / J, u[1][1] = D * Qt / J, u[1][2] = D * Dt / J, u[2][0] = D * lt / W, u[2][1] = D * St / W, u[2][2] = D * it / W, U = X(dt(A(T), A(j)), 0.5).toArray(), $ = X(dt(A(j), A(u)), 0.5).toArray(), R = X(dt(A(u), A(T)), 0.5).toArray();
    const Zt = X(X(bt(A(O)), s), A(O));
    return V = dt(dt(X(X(bt(A(U)), Zt), A(U)), X(X(bt(A($)), Zt), A($))), X(X(bt(A(R)), Zt), A(R))).toArray(), V = X(A(V), 3 / 4 * ct * Ft).toArray(), N = X(X(bt(A(y)), A(V)), A(y)).toArray(), h = dt(A(z), A(N)).toArray(), h;
  }
}
function Bt(t, o) {
  const r = t / (1 - o * o);
  return A([[r, r * o, 0], [r * o, r, 0], [0, 0, r * (1 - o) / 2]]);
}
function Et(t, o, r, f) {
  const e = o * f / t, n = 1 - f * e, x = t / n, p = o / n, M = f * o / n;
  return A([[x, M, 0], [M, p, 0], [0, 0, r]]);
}
function gn(t, o, r, f) {
  const e = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map() }, n = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map() };
  o.forEach((M, a) => {
    var _a;
    if (M.length === 4) return;
    const Z = M.map((F) => t[F]), B = M.reduce((F, d) => {
      var _a2;
      const K = (_a2 = f.deformations) == null ? void 0 : _a2.get(d);
      return F.concat(K ?? [0, 0, 0, 0, 0, 0]);
    }, []), b = Ut(Z), k = X(b, B);
    if (M.length === 2) {
      const F = tn(Z, r, a);
      let d = X(F, k);
      e.normals.set(a, [d[0], d[6]]), e.shearsY.set(a, [d[1], d[7]]), e.shearsZ.set(a, [d[2], d[8]]), e.torsions.set(a, [d[3], d[9]]), e.bendingsY.set(a, [d[4], d[10]]), e.bendingsZ.set(a, [d[5], d[11]]);
    } else {
      const F = sn(r, a), d = rn(Z), K = en(B), w = an(Z), _ = X(1 / (2 * w), X(X(F, d), K)).toArray(), E = ((_a = r.thicknesses) == null ? void 0 : _a.get(a)) ?? 1, l = _[0][0] * E, Q = _[1][0] * E, P = _[2][0] * E, I = _[0][1] * (E ** 3 / 12), H = _[1][1] * (E ** 3 / 12), zt = _[2][1] * (E ** 3 / 12);
      n.membraneXX.set(a, l), n.membraneYY.set(a, Q), n.membraneXY.set(a, P), n.bendingXX.set(a, I), n.bendingYY.set(a, H), n.bendingXY.set(a, zt);
    }
  });
  const { nodeToCentroidNodesMap: x, nodeToCentroidElementIndiciesMap: p } = cn(t, o);
  return o.forEach((M, a) => {
    if (M.length !== 3) return;
    let Z = [0, 0, 0], B = [0, 0, 0], b = [0, 0, 0], k = [0, 0, 0], F = [0, 0, 0], d = [0, 0, 0];
    M.forEach((K, w) => {
      x.get(K);
      const L = p.get(K) || [];
      Z[w] = Xt(L.map((_) => n.membraneXX.get(_) ?? 0)), B[w] = Xt(L.map((_) => n.membraneYY.get(_) ?? 0)), b[w] = Xt(L.map((_) => n.membraneXY.get(_) ?? 0)), k[w] = Xt(L.map((_) => n.bendingXX.get(_) ?? 0)), F[w] = Xt(L.map((_) => n.bendingYY.get(_) ?? 0)), d[w] = Xt(L.map((_) => n.bendingXY.get(_) ?? 0));
    }), e.membraneXX.set(a, Z), e.membraneYY.set(a, B), e.membraneXY.set(a, b), e.bendingXX.set(a, k), e.bendingYY.set(a, F), e.bendingXY.set(a, d);
  }), e;
}
function sn(t, o) {
  var _a, _b, _c, _d, _e;
  const r = ((_a = t.elasticities) == null ? void 0 : _a.get(o)) ?? 0, f = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(o)) ?? 0, e = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(o)) ?? 0, n = ((_d = t.shearModuli) == null ? void 0 : _d.get(o)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(o), f > 0 ? Et(r, f, n, e) : Bt(r, e);
}
function rn(t) {
  const [o, r] = t[0], [f, e] = t[1], [n, x] = t[2], p = e - x, M = x - r, a = r - e, Z = n - f, B = o - n, b = f - o;
  return A([[p, M, a, 0, 0, 0], [0, 0, 0, Z, B, b], [Z, B, b, p, M, a]]);
}
function en(t) {
  const [o, r, f] = [t[0], t[6], t[12]], [e, n, x] = [t[1], t[7], t[13]], [p, M, a] = [t[4], t[10], t[16]], [Z, B, b] = [t[3], t[9], t[15]];
  return A([[o, -p], [r, -M], [f, -a], [e, Z], [n, B], [x, b]]);
}
function an(t) {
  const [o, r] = t[0], [f, e] = t[1], [n, x] = t[2], p = f - o, M = n - o, a = x - r, Z = r - e;
  return 0.5 * (p * a - M * -Z);
}
function cn(t, o) {
  const r = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  return o.forEach((e, n) => {
    const x = e.map((M) => t[M]), p = ln(x);
    e.forEach((M) => {
      var _a, _b;
      r.has(M) || r.set(M, []), (_a = r.get(M)) == null ? void 0 : _a.push(p), f.has(M) || f.set(M, []), (_b = f.get(M)) == null ? void 0 : _b.push(n);
    });
  }), { nodeToCentroidNodesMap: r, nodeToCentroidElementIndiciesMap: f };
}
function ln(t) {
  const o = t.reduce((e, n) => e + n[0], 0) / t.length, r = t.reduce((e, n) => e + n[1], 0) / t.length, f = t.reduce((e, n) => e + n[2], 0) / t.length;
  return [o, r, f];
}
export {
  gn as a,
  Ut as b,
  tn as g
};
