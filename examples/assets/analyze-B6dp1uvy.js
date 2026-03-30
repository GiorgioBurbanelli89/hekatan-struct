import { s as Kt, n as Nt, b as zt, k as Ut, i as Lt, z as S, c as Ft, m as _, t as ht, a as dt, e as d, f as Xt } from "./pureFunctionsAny.generated-BHh0zpCc.js";
function $t(t) {
  if (t.length === 2) return It(t);
  if (t.length === 3) return tn(t);
}
function It(t) {
  const r = Kt(t[1], t[0]), s = Nt(r), n = zt(r, [1, 0, 0]) / s, e = zt(r, [0, 1, 0]) / s, o = zt(r, [0, 0, 1]) / s, a = Math.sqrt(n ** 2 + e ** 2);
  let y = [[n, e, o], [-e / a, n / a, 0], [-n * o / a, -e * o / a, a]];
  return o === 1 && (y = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), o === -1 && (y = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), Ut(Lt(4), y).toArray();
}
function tn(t) {
  const o = [t[0], t[1], t[2]], a = S(3, 3).toArray();
  for (let h = 0; h < 3; h++) for (let N = 0; N < 3; N++) a[h][N] = o[N][h];
  const y = [-1, 1, 0], f = [-1, 0, 1], i = S(3, 2).toArray();
  for (let h = 0; h < 3; h++) for (let N = 0; N < 3; N++) i[h][0] += a[h][N] * y[N], i[h][1] += a[h][N] * f[N];
  const j = i.map((h) => h[0]), K = i.map((h) => h[1]);
  let u = Ft(j, K), T = Nt(u);
  if (T === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), S(18, 18).toArray();
  u = u.map((h) => h / T);
  const k = [...u], l = Lt(3).toArray(), w = u[0];
  let Y;
  if (Math.abs(w) > 1 - 1e-10) {
    const h = u[2];
    Y = l.map((N, P) => N[2] - h * u[P]);
  } else Y = l.map((h, N) => h[0] - w * u[N]);
  if (T = Nt(Y), T === 0) return console.warn("Degenerate local X-axis detected."), S(18, 18).toArray();
  Y = Y.map((h) => h / T);
  let v = Ft(k, Y);
  if (T = Nt(v), T === 0) return console.warn("Degenerate local Y-axis detected."), S(18, 18).toArray();
  v = v.map((h) => h / T);
  const D = [Y, v, k], E = S(18, 18).toArray();
  for (let h = 0; h < 3; h++) {
    const N = h * 6, P = N + 3;
    for (let I = 0; I < 3; I++) for (let H = 0; H < 3; H++) E[N + I][N + H] = D[I][H], E[P + I][P + H] = D[I][H];
  }
  return E;
}
function nn(t, r, s) {
  var _a;
  if (t.length === 2) {
    let n = rn(t, r, s);
    const e = (_a = r == null ? void 0 : r.momentReleases) == null ? void 0 : _a.get(s);
    return e && (n = on(n, e)), n;
  }
  if (t.length === 3) return en(t, r, s);
}
function on(t, r) {
  const s = [3, 4, 5, 9, 10, 11], n = [];
  for (let l = 0; l < 6; l++) r[l] && n.push(s[l]);
  if (n.length === 0) return t;
  const e = t.length, o = [];
  for (let l = 0; l < e; l++) n.includes(l) || o.push(l);
  const a = o.length, y = n.length, f = Array.from({ length: y }, (l, w) => Array.from({ length: y }, (Y, v) => t[n[w]][n[v]])), i = Array.from({ length: a }, (l, w) => Array.from({ length: y }, (Y, v) => t[o[w]][n[v]])), j = Array.from({ length: y }, (l, w) => Array.from({ length: a }, (Y, v) => t[n[w]][o[v]])), K = sn(f);
  if (!K) return t;
  const u = Gt(i, K), T = Gt(u, j), k = Array.from({ length: e }, () => Array(e).fill(0));
  for (let l = 0; l < a; l++) for (let w = 0; w < a; w++) k[o[l]][o[w]] = t[o[l]][o[w]] - T[l][w];
  return k;
}
function Gt(t, r) {
  const s = t.length, n = r[0].length, e = r.length, o = Array.from({ length: s }, () => Array(n).fill(0));
  for (let a = 0; a < s; a++) for (let y = 0; y < n; y++) for (let f = 0; f < e; f++) o[a][y] += t[a][f] * r[f][y];
  return o;
}
function sn(t) {
  const r = t.length, s = t.map((n, e) => {
    const o = [...n];
    for (let a = 0; a < r; a++) o.push(e === a ? 1 : 0);
    return o;
  });
  for (let n = 0; n < r; n++) {
    let e = n;
    for (let a = n + 1; a < r; a++) Math.abs(s[a][n]) > Math.abs(s[e][n]) && (e = a);
    if ([s[n], s[e]] = [s[e], s[n]], Math.abs(s[n][n]) < 1e-15) return null;
    const o = s[n][n];
    for (let a = 0; a < 2 * r; a++) s[n][a] /= o;
    for (let a = 0; a < r; a++) {
      if (a === n) continue;
      const y = s[a][n];
      for (let f = 0; f < 2 * r; f++) s[a][f] -= y * s[n][f];
    }
  }
  return s.map((n) => n.slice(r));
}
function rn(t, r, s) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const n = ((_a = r == null ? void 0 : r.momentsOfInertiaZ) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = r == null ? void 0 : r.momentsOfInertiaY) == null ? void 0 : _b.get(s)) ?? 0, o = ((_c = r == null ? void 0 : r.elasticities) == null ? void 0 : _c.get(s)) ?? 0, a = ((_d = r == null ? void 0 : r.areas) == null ? void 0 : _d.get(s)) ?? 0, y = ((_e = r == null ? void 0 : r.shearModuli) == null ? void 0 : _e.get(s)) ?? 0, f = ((_f = r == null ? void 0 : r.torsionalConstants) == null ? void 0 : _f.get(s)) ?? 0, i = Nt(Kt(t[0], t[1])), j = ((_g = r == null ? void 0 : r.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, K = ((_h = r == null ? void 0 : r.shearAreasZ) == null ? void 0 : _h.get(s)) ?? 0, u = K > 0 && y > 0 ? 12 * o * n / (y * K * i ** 2) : 0, T = j > 0 && y > 0 ? 12 * o * e / (y * j * i ** 2) : 0, k = o * a / i, l = y * f / i, w = 12 * o * n / i ** 3 / (1 + u), Y = 6 * o * n / i ** 2 / (1 + u), v = 4 * o * n / i * (1 + u / 4) / (1 + u), D = 2 * o * n / i * (1 - u / 2) / (1 + u), E = 12 * o * e / i ** 3 / (1 + T), h = 6 * o * e / i ** 2 / (1 + T), N = 4 * o * e / i * (1 + T / 4) / (1 + T), P = 2 * o * e / i * (1 - T / 2) / (1 + T);
  return [[k, 0, 0, 0, 0, 0, -k, 0, 0, 0, 0, 0], [0, w, 0, 0, 0, Y, 0, -w, 0, 0, 0, Y], [0, 0, E, 0, -h, 0, 0, 0, -E, 0, -h, 0], [0, 0, 0, l, 0, 0, 0, 0, 0, -l, 0, 0], [0, 0, -h, 0, N, 0, 0, 0, h, 0, P, 0], [0, Y, 0, 0, 0, v, 0, -Y, 0, 0, 0, D], [-k, 0, 0, 0, 0, 0, k, 0, 0, 0, 0, 0], [0, -w, 0, 0, 0, -Y, 0, w, 0, 0, 0, -Y], [0, 0, -E, 0, h, 0, 0, 0, E, 0, h, 0], [0, 0, 0, -l, 0, 0, 0, 0, 0, l, 0, 0], [0, 0, -h, 0, P, 0, 0, 0, h, 0, N, 0], [0, Y, 0, 0, 0, D, 0, -Y, 0, 0, 0, v]];
}
function en(t, r, s) {
  var _a, _b, _c, _d, _e;
  const n = ((_a = r.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = r.elasticitiesOrthogonal) == null ? void 0 : _b.get(s)) ?? 0, o = ((_c = r.poissonsRatios) == null ? void 0 : _c.get(s)) ?? 0, a = ((_d = r.shearModuli) == null ? void 0 : _d.get(s)) ?? 0, y = ((_e = r.thicknesses) == null ? void 0 : _e.get(s)) ?? 0, f = e > 0, i = f ? Pt(n, e, a, o, y) : jt(n, o, y), j = f ? Vt(a, y) : Bt(n, o, y), K = f ? Et(n, e, a, o) : Rt(n, o), u = t.map(([m, c]) => [m, c]), T = u[1][0] - u[0][0], k = u[2][0] - u[0][0], l = u[0][1] - u[1][1], w = u[2][1] - u[0][1], Y = 0.5 * (T * w - k * -l), v = qt(u), D = Jt(u), E = Wt(u, K, y), h = _(_(ht(v), j), v), N = _(_(ht(D), i), D), P = S(18, 18).toArray(), I = _(dt(h, N), Y), H = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let m = 0; m < 3; m++) for (let c = 0; c < 3; c++) for (let X = 0; X < 3; X++) {
    const p = H[m][c], O = H[X][c];
    P[p][O] = E[m * 3 + c][X * 3 + c];
  }
  for (let m = 0; m < 18; m++) for (let c = 0; c < 18; c++) P[m][c] = (P[m][c] ?? 0) + I.get([m, c]);
  return P;
  function jt(m, c, X) {
    const p = m / (1 - c * c), O = d([[p, p * c, 0], [p * c, p, 0], [0, 0, p * (1 - c) / 2]]);
    return _(X ** 3 / 12, O);
  }
  function Bt(m, c, X) {
    const p = 0.8333333333333334, O = m / (2 * (1 + c)), Z = p * O * X;
    return d([[Z, 0], [0, Z]]);
  }
  function Pt(m, c, X, p, O) {
    const Z = c * p / m, b = 1 - p * Z, A = m / b, C = c / b, z = p * c / b, x = d([[A, z, 0], [z, C, 0], [0, 0, X]]);
    return _(O ** 3 / 12, x);
  }
  function Vt(m, c) {
    const p = 0.8333333333333334 * m * c;
    return d([[p, 0], [0, p]]);
  }
  function qt(m) {
    const c = S(2, 18).toArray(), [X, p] = m[0], [O, Z] = m[1], [b, A] = m[2], C = 0.5 * ((O - X) * (A - p) - (b - X) * -(p - Z)), z = (X + O + b) / 3, L = (p + Z + A) / 3, x = [z, X, O], U = [L, p, Z], $ = [z, O, b], B = [L, Z, A], V = [z, b, X], bt = [L, A, p], F = 1 / 3, [ct, it, lt, _t] = kt(x, U), [ut, wt, St, Dt] = kt($, B), [Mt, Qt, Ot, Tt] = kt(V, bt), ft = S(2, 18).toArray(), gt = S(2, 18).toArray(), mt = S(2, 18).toArray();
    for (let M = 0; M < 2; M++) for (let g = 0; g < 6; g++) ft[M][g] = F * ct[M][g] + it[M][g], ft[M][g + 6] = F * ct[M][g] + lt[M][g], ft[M][g + 12] = F * ct[M][g], gt[M][g] = F * ut[M][g], gt[M][g + 6] = F * ut[M][g] + wt[M][g], gt[M][g + 12] = F * ut[M][g] + St[M][g], mt[M][g] = F * Mt[M][g] + Ot[M][g], mt[M][g + 6] = F * Mt[M][g], mt[M][g + 12] = F * Mt[M][g] + Qt[M][g];
    for (let M = 0; M < 2; M++) for (let g = 0; g < 18; g++) ft[M][g] *= _t, gt[M][g] *= Dt, mt[M][g] *= Tt, c[M][g] = (ft[M][g] + gt[M][g] + mt[M][g]) / C;
    return c;
  }
  function kt(m, c) {
    const X = S(2, 6).toArray(), p = S(2, 6).toArray(), O = S(2, 6).toArray(), Z = m[1] - m[0], b = m[0] - m[2], A = c[2] - c[0], C = c[0] - c[1], z = m[2] - m[1], L = c[1] - c[2], x = 0.5 * (Z * A - b * C), U = 0.5 * C * b, $ = 0.5 * A * Z, B = 0.5 * Z * b, V = 0.5 * C * A;
    return X[0][2] = 0.5 * z / x, X[0][3] = -0.5, X[1][2] = 0.5 * L / x, X[1][4] = 0.5, p[0][2] = 0.5 * b / x, p[0][3] = 0.5 * U / x, p[0][4] = 0.5 * B / x, p[1][2] = 0.5 * A / x, p[1][3] = 0.5 * V / x, p[1][4] = 0.5 * $ / x, O[0][2] = 0.5 * Z / x, O[0][3] = -0.5 * $ / x, O[0][4] = -0.5 * B / x, O[1][2] = 0.5 * C / x, O[1][3] = -0.5 * V / x, O[1][4] = -0.5 * U / x, [X, p, O, x];
  }
  function Jt(m) {
    const c = S(3, 18).toArray(), [X, p] = m[0], [O, Z] = m[1], [b, A] = m[2], C = O - X, z = b - X, L = b - O, x = Z - A, U = A - p, $ = p - Z, B = 0.5 * (C * U - z * -$), V = x / (2 * B), bt = L / (2 * B), F = U / (2 * B), ct = -z / (2 * B), it = $ / (2 * B), lt = C / (2 * B);
    return c[0][4] = V, c[0][10] = F, c[0][16] = it, c[1][3] = -bt, c[1][9] = -ct, c[1][15] = -lt, c[2][3] = -V, c[2][4] = bt, c[2][9] = -F, c[2][10] = ct, c[2][15] = -it, c[2][16] = lt, c;
  }
  function Wt(m, c, X) {
    let p = S(9, 9).toArray(), O = S(9, 9).toArray(), Z = S(9, 9).toArray(), b = S(9, 3).toArray(), A = S(3, 9).toArray(), C = S(3, 3).toArray(), z = S(3, 3).toArray(), L = S(3, 3).toArray(), x = S(3, 3).toArray(), U = S(3, 3).toArray(), $ = S(3, 3).toArray(), B = S(3, 3).toArray(), V = S(3, 3).toArray();
    const bt = 1 / 8, F = bt / 6, ct = bt ** 2 / 4, it = 1, lt = 2, _t = 1, ut = 0, wt = 1, St = -1, Dt = -1, Mt = -1, Qt = -2, Ot = m[0][0], Tt = m[0][1], ft = m[1][0], gt = m[1][1], mt = m[2][0], M = m[2][1], g = Ot - ft, At = ft - mt, yt = mt - Ot, pt = Tt - gt, Yt = gt - M, xt = M - Tt, tt = -g, rt = -At, et = -yt, nt = -pt, ot = -Yt, st = -xt, vt = 0.5 * (tt * xt - yt * -pt), Ht = 2 * vt, R = 4 * vt, G = 0.5 * X, Zt = vt * X, q = tt ** 2 + nt ** 2, J = rt ** 2 + ot ** 2, W = et ** 2 + st ** 2;
    b[0][0] = G * Yt, b[0][2] = G * rt, b[1][1] = G * rt, b[1][2] = G * Yt, b[2][0] = G * Yt * (st - nt) * F, b[2][1] = G * rt * (yt - g) * F, b[2][2] = G * (yt * st - g * nt) * 2 * F, b[3][0] = G * xt, b[3][2] = G * et, b[4][1] = G * et, b[4][2] = G * xt, b[5][0] = G * xt * (nt - ot) * F, b[5][1] = G * et * (g - At) * F, b[5][2] = G * (g * nt - At * ot) * 2 * F, b[6][0] = G * pt, b[6][2] = G * tt, b[7][1] = G * tt, b[7][2] = G * pt, b[8][0] = G * pt * (ot - st) * F, b[8][1] = G * tt * (At - yt) * F, b[8][2] = G * (At * ot - yt * st) * 2 * F, Z = _(_(d(b), c), ht(d(b))).toArray(), Z = _(d(Z), 1 / Zt).toArray(), A[0][0] = rt / R, A[0][1] = ot / R, A[0][2] = 1, A[0][3] = et / R, A[0][4] = st / R, A[0][6] = tt / R, A[0][7] = nt / R, A[1][0] = rt / R, A[1][1] = ot / R, A[1][3] = et / R, A[1][4] = st / R, A[1][5] = 1, A[1][6] = tt / R, A[1][7] = nt / R, A[2][0] = rt / R, A[2][1] = ot / R, A[2][3] = et / R, A[2][4] = st / R, A[2][6] = tt / R, A[2][7] = nt / R, A[2][8] = 1;
    const at = 1 / (vt * R);
    C[0][0] = at * Yt * st * q, C[0][1] = at * xt * nt * J, C[0][2] = at * pt * ot * W, C[1][0] = at * At * et * q, C[1][1] = at * yt * tt * J, C[1][2] = at * g * rt * W, C[2][0] = at * (Yt * yt + rt * st) * q, C[2][1] = at * (xt * g + et * nt) * J, C[2][2] = at * (pt * At + tt * ot) * W;
    const Q = Ht / 3;
    z[0][0] = Q * it / q, z[0][1] = Q * lt / q, z[0][2] = Q * _t / q, z[1][0] = Q * ut / J, z[1][1] = Q * wt / J, z[1][2] = Q * St / J, z[2][0] = Q * Dt / W, z[2][1] = Q * Mt / W, z[2][2] = Q * Qt / W, L[0][0] = Q * Qt / q, L[0][1] = Q * Dt / q, L[0][2] = Q * Mt / q, L[1][0] = Q * _t / J, L[1][1] = Q * it / J, L[1][2] = Q * lt / J, L[2][0] = Q * St / W, L[2][1] = Q * ut / W, L[2][2] = Q * wt / W, x[0][0] = Q * wt / q, x[0][1] = Q * St / q, x[0][2] = Q * ut / q, x[1][0] = Q * Mt / J, x[1][1] = Q * Qt / J, x[1][2] = Q * Dt / J, x[2][0] = Q * lt / W, x[2][1] = Q * _t / W, x[2][2] = Q * it / W, U = _(dt(d(z), d(L)), 0.5).toArray(), $ = _(dt(d(L), d(x)), 0.5).toArray(), B = _(dt(d(x), d(z)), 0.5).toArray();
    const Ct = _(_(ht(d(C)), c), d(C));
    return V = dt(dt(_(_(ht(d(U)), Ct), d(U)), _(_(ht(d($)), Ct), d($))), _(_(ht(d(B)), Ct), d(B))).toArray(), V = _(d(V), 3 / 4 * ct * Zt).toArray(), O = _(_(ht(d(A)), d(V)), d(A)).toArray(), p = dt(d(Z), d(O)).toArray(), p;
  }
}
function Rt(t, r) {
  const s = t / (1 - r * r);
  return d([[s, s * r, 0], [s * r, s, 0], [0, 0, s * (1 - r) / 2]]);
}
function Et(t, r, s, n) {
  const e = r * n / t, o = 1 - n * e, a = t / o, y = r / o, f = n * r / o;
  return d([[a, f, 0], [f, y, 0], [0, 0, s]]);
}
function hn(t, r, s, n) {
  const e = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map() }, o = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map() };
  r.forEach((f, i) => {
    var _a;
    if (f.length === 4) return;
    const j = f.map((k) => t[k]), K = f.reduce((k, l) => {
      var _a2;
      const w = (_a2 = n.deformations) == null ? void 0 : _a2.get(l);
      return k.concat(w ?? [0, 0, 0, 0, 0, 0]);
    }, []), u = $t(j), T = _(u, K);
    if (f.length === 2) {
      const k = nn(j, s, i);
      let l = _(k, T);
      e.normals.set(i, [l[0], l[6]]), e.shearsY.set(i, [l[1], l[7]]), e.shearsZ.set(i, [l[2], l[8]]), e.torsions.set(i, [l[3], l[9]]), e.bendingsY.set(i, [l[4], l[10]]), e.bendingsZ.set(i, [l[5], l[11]]);
    } else {
      const k = an(s, i), l = cn(j), w = ln(K), Y = fn(j), D = _(1 / (2 * Y), _(_(k, l), w)).toArray(), E = ((_a = s.thicknesses) == null ? void 0 : _a.get(i)) ?? 1, h = D[0][0] * E, N = D[1][0] * E, P = D[2][0] * E, I = D[0][1] * (E ** 3 / 12), H = D[1][1] * (E ** 3 / 12), jt = D[2][1] * (E ** 3 / 12);
      o.membraneXX.set(i, h), o.membraneYY.set(i, N), o.membraneXY.set(i, P), o.bendingXX.set(i, I), o.bendingYY.set(i, H), o.bendingXY.set(i, jt);
    }
  });
  const { nodeToCentroidNodesMap: a, nodeToCentroidElementIndiciesMap: y } = gn(t, r);
  return r.forEach((f, i) => {
    if (f.length !== 3) return;
    let j = [0, 0, 0], K = [0, 0, 0], u = [0, 0, 0], T = [0, 0, 0], k = [0, 0, 0], l = [0, 0, 0];
    f.forEach((w, Y) => {
      a.get(w);
      const v = y.get(w) || [];
      j[Y] = Xt(v.map((D) => o.membraneXX.get(D) ?? 0)), K[Y] = Xt(v.map((D) => o.membraneYY.get(D) ?? 0)), u[Y] = Xt(v.map((D) => o.membraneXY.get(D) ?? 0)), T[Y] = Xt(v.map((D) => o.bendingXX.get(D) ?? 0)), k[Y] = Xt(v.map((D) => o.bendingYY.get(D) ?? 0)), l[Y] = Xt(v.map((D) => o.bendingXY.get(D) ?? 0));
    }), e.membraneXX.set(i, j), e.membraneYY.set(i, K), e.membraneXY.set(i, u), e.bendingXX.set(i, T), e.bendingYY.set(i, k), e.bendingXY.set(i, l);
  }), e;
}
function an(t, r) {
  var _a, _b, _c, _d, _e;
  const s = ((_a = t.elasticities) == null ? void 0 : _a.get(r)) ?? 0, n = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(r)) ?? 0, e = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(r)) ?? 0, o = ((_d = t.shearModuli) == null ? void 0 : _d.get(r)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(r), n > 0 ? Et(s, n, o, e) : Rt(s, e);
}
function cn(t) {
  const [r, s] = t[0], [n, e] = t[1], [o, a] = t[2], y = e - a, f = a - s, i = s - e, j = o - n, K = r - o, u = n - r;
  return d([[y, f, i, 0, 0, 0], [0, 0, 0, j, K, u], [j, K, u, y, f, i]]);
}
function ln(t) {
  const [r, s, n] = [t[0], t[6], t[12]], [e, o, a] = [t[1], t[7], t[13]], [y, f, i] = [t[4], t[10], t[16]], [j, K, u] = [t[3], t[9], t[15]];
  return d([[r, -y], [s, -f], [n, -i], [e, j], [o, K], [a, u]]);
}
function fn(t) {
  const [r, s] = t[0], [n, e] = t[1], [o, a] = t[2], y = n - r, f = o - r, i = a - s, j = s - e;
  return 0.5 * (y * i - f * -j);
}
function gn(t, r) {
  const s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return r.forEach((e, o) => {
    const a = e.map((f) => t[f]), y = mn(a);
    e.forEach((f) => {
      var _a, _b;
      s.has(f) || s.set(f, []), (_a = s.get(f)) == null ? void 0 : _a.push(y), n.has(f) || n.set(f, []), (_b = n.get(f)) == null ? void 0 : _b.push(o);
    });
  }), { nodeToCentroidNodesMap: s, nodeToCentroidElementIndiciesMap: n };
}
function mn(t) {
  const r = t.reduce((e, o) => e + o[0], 0) / t.length, s = t.reduce((e, o) => e + o[1], 0) / t.length, n = t.reduce((e, o) => e + o[2], 0) / t.length;
  return [r, s, n];
}
export {
  hn as a,
  $t as b,
  nn as g
};
