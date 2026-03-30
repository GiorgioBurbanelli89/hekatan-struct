import { s as qt, n as vt, b as Bt, k as so, i as Et, z as k, c as Jt, m as C, t as bt, a as wt, e as j, f as Nt } from "./pureFunctionsAny.generated-BHh0zpCc.js";
const E = 1 / Math.sqrt(3);
function Lt(t, o) {
  const r = [0.25 * (1 - t) * (1 - o), 0.25 * (1 + t) * (1 - o), 0.25 * (1 + t) * (1 + o), 0.25 * (1 - t) * (1 + o)], n = [-0.25 * (1 - o), 0.25 * (1 - o), 0.25 * (1 + o), -0.25 * (1 + o)], c = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: r, dNdxi: n, dNdeta: c };
}
function Ft(t, o, r, n) {
  let c = 0, s = 0, e = 0, m = 0;
  for (let f = 0; f < 4; f++) c += t[f] * r[f], s += t[f] * n[f], e += o[f] * r[f], m += o[f] * n[f];
  const g = c * m - s * e, l = 1 / g, X = [], _ = [];
  for (let f = 0; f < 4; f++) X.push(l * (m * t[f] - s * o[f])), _.push(l * (-e * t[f] + c * o[f]));
  return { dNdx: X, dNdy: _, detJ: g };
}
function ro(t, o, r, n, c) {
  const s = Mt(8, 8), e = r * c / (1 - n * n), m = [[-E, -E], [E, -E], [E, E], [-E, E]];
  for (const [g, l] of m) {
    const { dNdxi: X, dNdeta: _ } = Lt(g, l), { dNdx: f, dNdy: x, detJ: b } = Ft(X, _, t, o), a = [[], [], []];
    for (let i = 0; i < 4; i++) a[0].push(f[i], 0), a[1].push(0, x[i]), a[2].push(x[i], f[i]);
    for (let i = 0; i < 8; i++) for (let h = 0; h < 8; h++) {
      let N = 0;
      N += e * (a[0][i] * a[0][h] + n * a[0][i] * a[1][h] + n * a[1][i] * a[0][h] + a[1][i] * a[1][h]), N += e * (1 - n) / 2 * a[2][i] * a[2][h], s[i][h] += N * Math.abs(b);
    }
  }
  return s;
}
function co(t, o, r, n, c) {
  const s = Mt(12, 12), e = r * c * c * c / (12 * (1 - n * n)), g = 5 / 6 * r / (2 * (1 + n)) * c, l = [[-E, -E], [E, -E], [E, E], [-E, E]], X = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], _ = [];
  for (const f of X) {
    const { N: x, dNdxi: b, dNdeta: a } = Lt(f.xi, f.eta), { dNdx: i, dNdy: h } = Ft(b, a, t, o), N = Mt(2, 12);
    for (let u = 0; u < 4; u++) N[0][u * 3] = i[u], N[0][u * 3 + 1] = -x[u], N[1][u * 3] = h[u], N[1][u * 3 + 2] = -x[u];
    _.push(N);
  }
  for (const [f, x] of l) {
    const { dNdxi: b, dNdeta: a } = Lt(f, x), { dNdx: i, dNdy: h, detJ: N } = Ft(b, a, t, o), u = Mt(3, 12);
    for (let M = 0; M < 4; M++) u[0][M * 3 + 1] = i[M], u[1][M * 3 + 2] = h[M], u[2][M * 3 + 1] = h[M], u[2][M * 3 + 2] = i[M];
    for (let M = 0; M < 12; M++) for (let P = 0; P < 12; P++) {
      let _t = 0;
      _t += e * (u[0][M] * u[0][P] + n * u[0][M] * u[1][P] + n * u[1][M] * u[0][P] + u[1][M] * u[1][P]), _t += e * (1 - n) / 2 * u[2][M] * u[2][P], s[M][P] += _t * Math.abs(N);
    }
    const K = Mt(2, 12), p = 0.5 * (1 - x), v = 0.5 * (1 + x), q = 0.5 * (1 - f), W = 0.5 * (1 + f);
    for (let M = 0; M < 12; M++) K[0][M] = p * _[0][0][M] + v * _[1][0][M], K[1][M] = q * _[2][1][M] + W * _[3][1][M];
    for (let M = 0; M < 12; M++) for (let P = 0; P < 12; P++) s[M][P] += g * (K[0][M] * K[0][P] + K[1][M] * K[1][P]) * Math.abs(N);
  }
  return s;
}
function eo(t, o, r) {
  var _a, _b, _c;
  const n = ((_a = o == null ? void 0 : o.elasticities) == null ? void 0 : _a.get(r)) ?? 0, c = ((_b = o == null ? void 0 : o.poissonsRatios) == null ? void 0 : _b.get(r)) ?? 0.2, s = ((_c = o == null ? void 0 : o.thicknesses) == null ? void 0 : _c.get(r)) ?? 0;
  if (n === 0 || s === 0) return Mt(24, 24);
  const { localCoords: e } = Vt(t), m = e.map((i) => i[0]), g = e.map((i) => i[1]), l = ro(m, g, n, c, s), X = co(m, g, n, c, s);
  let _ = 0;
  for (let i = 0; i < 8; i++) _ += Math.abs(l[i][i]);
  const f = 1e-6 * _ / 8, x = Mt(24, 24), b = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let i = 0; i < 8; i++) for (let h = 0; h < 8; h++) x[b[i]][b[h]] += l[i][h];
  const a = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let i = 0; i < 12; i++) for (let h = 0; h < 12; h++) x[a[i]][a[h]] += X[i][h];
  for (let i = 0; i < 4; i++) x[6 * i + 5][6 * i + 5] += f;
  return x;
}
function ao(t) {
  const { localX: o, localY: r, localZ: n } = Vt(t), c = [[o[0], o[1], o[2]], [r[0], r[1], r[2]], [n[0], n[1], n[2]]], s = Mt(24, 24);
  for (let e = 0; e < 4; e++) for (let m = 0; m < 2; m++) {
    const g = e * 6 + m * 3;
    for (let l = 0; l < 3; l++) for (let X = 0; X < 3; X++) s[g + l][g + X] = c[l][X];
  }
  return s;
}
function Vt(t) {
  const o = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], r = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], n = Rt(o, r), c = Math.sqrt(n[0] ** 2 + n[1] ** 2 + n[2] ** 2), s = n.map((b) => b / c), e = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], m = Math.sqrt(e[0] ** 2 + e[1] ** 2 + e[2] ** 2), g = e.map((b) => b / m), l = Rt(s, g), X = t.map((b) => b[0]).reduce((b, a) => b + a) / 4, _ = t.map((b) => b[1]).reduce((b, a) => b + a) / 4, f = t.map((b) => b[2]).reduce((b, a) => b + a) / 4, x = t.map((b) => {
    const a = b[0] - X, i = b[1] - _, h = b[2] - f;
    return [a * g[0] + i * g[1] + h * g[2], a * l[0] + i * l[1] + h * l[2]];
  });
  return { localX: g, localY: l, localZ: s, localCoords: x };
}
function Rt(t, o) {
  return [t[1] * o[2] - t[2] * o[1], t[2] * o[0] - t[0] * o[2], t[0] * o[1] - t[1] * o[0]];
}
function Mt(t, o) {
  return Array.from({ length: t }, () => Array(o).fill(0));
}
function io(t) {
  if (t.length === 2) return lo(t);
  if (t.length === 3) return fo(t);
  if (t.length === 4) return ao(t);
}
function lo(t) {
  const o = qt(t[1], t[0]), r = vt(o), n = Bt(o, [1, 0, 0]) / r, c = Bt(o, [0, 1, 0]) / r, s = Bt(o, [0, 0, 1]) / r, e = Math.sqrt(n ** 2 + c ** 2);
  let m = [[n, c, s], [-c / e, n / e, 0], [-n * s / e, -c * s / e, e]];
  return s === 1 && (m = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), s === -1 && (m = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), so(Et(4), m).toArray();
}
function fo(t) {
  const s = [t[0], t[1], t[2]], e = k(3, 3).toArray();
  for (let p = 0; p < 3; p++) for (let v = 0; v < 3; v++) e[p][v] = s[v][p];
  const m = [-1, 1, 0], g = [-1, 0, 1], l = k(3, 2).toArray();
  for (let p = 0; p < 3; p++) for (let v = 0; v < 3; v++) l[p][0] += e[p][v] * m[v], l[p][1] += e[p][v] * g[v];
  const X = l.map((p) => p[0]), _ = l.map((p) => p[1]);
  let f = Jt(X, _), x = vt(f);
  if (x === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), k(18, 18).toArray();
  f = f.map((p) => p / x);
  const b = [...f], a = Et(3).toArray(), i = f[0];
  let h;
  if (Math.abs(i) > 1 - 1e-10) {
    const p = f[2];
    h = a.map((v, q) => v[2] - p * f[q]);
  } else h = a.map((p, v) => p[0] - i * f[v]);
  if (x = vt(h), x === 0) return console.warn("Degenerate local X-axis detected."), k(18, 18).toArray();
  h = h.map((p) => p / x);
  let N = Jt(b, h);
  if (x = vt(N), x === 0) return console.warn("Degenerate local Y-axis detected."), k(18, 18).toArray();
  N = N.map((p) => p / x);
  const u = [h, N, b], K = k(18, 18).toArray();
  for (let p = 0; p < 3; p++) {
    const v = p * 6, q = v + 3;
    for (let W = 0; W < 3; W++) for (let M = 0; M < 3; M++) K[v + W][v + M] = u[W][M], K[q + W][q + M] = u[W][M];
  }
  return K;
}
function go(t, o, r) {
  var _a;
  if (t.length === 2) {
    let n = yo(t, o, r);
    const c = (_a = o == null ? void 0 : o.momentReleases) == null ? void 0 : _a.get(r);
    return c && (n = mo(n, c)), n;
  }
  if (t.length === 3) return uo(t, o, r);
  if (t.length === 4) return eo(t, o, r);
}
function mo(t, o) {
  const r = [3, 4, 5, 9, 10, 11], n = [];
  for (let a = 0; a < 6; a++) o[a] && n.push(r[a]);
  if (n.length === 0) return t;
  const c = t.length, s = [];
  for (let a = 0; a < c; a++) n.includes(a) || s.push(a);
  const e = s.length, m = n.length, g = Array.from({ length: m }, (a, i) => Array.from({ length: m }, (h, N) => t[n[i]][n[N]])), l = Array.from({ length: e }, (a, i) => Array.from({ length: m }, (h, N) => t[s[i]][n[N]])), X = Array.from({ length: m }, (a, i) => Array.from({ length: e }, (h, N) => t[n[i]][s[N]])), _ = ho(g);
  if (!_) return t;
  const f = Pt(l, _), x = Pt(f, X), b = Array.from({ length: c }, () => Array(c).fill(0));
  for (let a = 0; a < e; a++) for (let i = 0; i < e; i++) b[s[a]][s[i]] = t[s[a]][s[i]] - x[a][i];
  return b;
}
function Pt(t, o) {
  const r = t.length, n = o[0].length, c = o.length, s = Array.from({ length: r }, () => Array(n).fill(0));
  for (let e = 0; e < r; e++) for (let m = 0; m < n; m++) for (let g = 0; g < c; g++) s[e][m] += t[e][g] * o[g][m];
  return s;
}
function ho(t) {
  const o = t.length, r = t.map((n, c) => {
    const s = [...n];
    for (let e = 0; e < o; e++) s.push(c === e ? 1 : 0);
    return s;
  });
  for (let n = 0; n < o; n++) {
    let c = n;
    for (let e = n + 1; e < o; e++) Math.abs(r[e][n]) > Math.abs(r[c][n]) && (c = e);
    if ([r[n], r[c]] = [r[c], r[n]], Math.abs(r[n][n]) < 1e-15) return null;
    const s = r[n][n];
    for (let e = 0; e < 2 * o; e++) r[n][e] /= s;
    for (let e = 0; e < o; e++) {
      if (e === n) continue;
      const m = r[e][n];
      for (let g = 0; g < 2 * o; g++) r[e][g] -= m * r[n][g];
    }
  }
  return r.map((n) => n.slice(o));
}
function yo(t, o, r) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const n = ((_a = o == null ? void 0 : o.momentsOfInertiaZ) == null ? void 0 : _a.get(r)) ?? 0, c = ((_b = o == null ? void 0 : o.momentsOfInertiaY) == null ? void 0 : _b.get(r)) ?? 0, s = ((_c = o == null ? void 0 : o.elasticities) == null ? void 0 : _c.get(r)) ?? 0, e = ((_d = o == null ? void 0 : o.areas) == null ? void 0 : _d.get(r)) ?? 0, m = ((_e = o == null ? void 0 : o.shearModuli) == null ? void 0 : _e.get(r)) ?? 0, g = ((_f = o == null ? void 0 : o.torsionalConstants) == null ? void 0 : _f.get(r)) ?? 0, l = vt(qt(t[0], t[1])), X = ((_g = o == null ? void 0 : o.shearAreasY) == null ? void 0 : _g.get(r)) ?? 0, _ = ((_h = o == null ? void 0 : o.shearAreasZ) == null ? void 0 : _h.get(r)) ?? 0, f = _ > 0 && m > 0 ? 12 * s * n / (m * _ * l ** 2) : 0, x = X > 0 && m > 0 ? 12 * s * c / (m * X * l ** 2) : 0, b = s * e / l, a = m * g / l, i = 12 * s * n / l ** 3 / (1 + f), h = 6 * s * n / l ** 2 / (1 + f), N = 4 * s * n / l * (1 + f / 4) / (1 + f), u = 2 * s * n / l * (1 - f / 2) / (1 + f), K = 12 * s * c / l ** 3 / (1 + x), p = 6 * s * c / l ** 2 / (1 + x), v = 4 * s * c / l * (1 + x / 4) / (1 + x), q = 2 * s * c / l * (1 - x / 2) / (1 + x);
  return [[b, 0, 0, 0, 0, 0, -b, 0, 0, 0, 0, 0], [0, i, 0, 0, 0, h, 0, -i, 0, 0, 0, h], [0, 0, K, 0, -p, 0, 0, 0, -K, 0, -p, 0], [0, 0, 0, a, 0, 0, 0, 0, 0, -a, 0, 0], [0, 0, -p, 0, v, 0, 0, 0, p, 0, q, 0], [0, h, 0, 0, 0, N, 0, -h, 0, 0, 0, u], [-b, 0, 0, 0, 0, 0, b, 0, 0, 0, 0, 0], [0, -i, 0, 0, 0, -h, 0, i, 0, 0, 0, -h], [0, 0, -K, 0, p, 0, 0, 0, K, 0, p, 0], [0, 0, 0, -a, 0, 0, 0, 0, 0, a, 0, 0], [0, 0, -p, 0, q, 0, 0, 0, p, 0, v, 0], [0, h, 0, 0, 0, u, 0, -h, 0, 0, 0, N]];
}
function uo(t, o, r) {
  var _a, _b, _c, _d, _e;
  const n = ((_a = o.elasticities) == null ? void 0 : _a.get(r)) ?? 0, c = ((_b = o.elasticitiesOrthogonal) == null ? void 0 : _b.get(r)) ?? 0, s = ((_c = o.poissonsRatios) == null ? void 0 : _c.get(r)) ?? 0, e = ((_d = o.shearModuli) == null ? void 0 : _d.get(r)) ?? 0, m = ((_e = o.thicknesses) == null ? void 0 : _e.get(r)) ?? 0, g = c > 0, l = g ? Ht(n, c, e, s, m) : P(n, s, m), X = g ? Ut(e, m) : _t(n, s, m), _ = g ? $t(n, c, e, s) : Wt(n, s), f = t.map(([d, y]) => [d, y]), x = f[1][0] - f[0][0], b = f[2][0] - f[0][0], a = f[0][1] - f[1][1], i = f[2][1] - f[0][1], h = 0.5 * (x * i - b * -a), N = It(f), u = to(f), K = oo(f, _, m), p = C(C(bt(N), X), N), v = C(C(bt(u), l), u), q = k(18, 18).toArray(), W = C(wt(p, v), h), M = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let d = 0; d < 3; d++) for (let y = 0; y < 3; y++) for (let T = 0; T < 3; T++) {
    const D = M[d][y], z = M[T][y];
    q[D][z] = K[d * 3 + y][T * 3 + y];
  }
  for (let d = 0; d < 18; d++) for (let y = 0; y < 18; y++) q[d][y] = (q[d][y] ?? 0) + W.get([d, y]);
  return q;
  function P(d, y, T) {
    const D = d / (1 - y * y), z = j([[D, D * y, 0], [D * y, D, 0], [0, 0, D * (1 - y) / 2]]);
    return C(T ** 3 / 12, z);
  }
  function _t(d, y, T) {
    const D = 0.8333333333333334, z = d / (2 * (1 + y)), L = D * z * T;
    return j([[L, 0], [0, L]]);
  }
  function Ht(d, y, T, D, z) {
    const L = y * D / d, Y = 1 - D * L, S = d / Y, Z = y / Y, B = D * y / Y, Q = j([[S, B, 0], [B, Z, 0], [0, 0, T]]);
    return C(z ** 3 / 12, Q);
  }
  function Ut(d, y) {
    const D = 0.8333333333333334 * d * y;
    return j([[D, 0], [0, D]]);
  }
  function It(d) {
    const y = k(2, 18).toArray(), [T, D] = d[0], [z, L] = d[1], [Y, S] = d[2], Z = 0.5 * ((z - T) * (S - D) - (Y - T) * -(D - L)), B = (T + z + Y) / 3, J = (D + L + S) / 3, Q = [B, T, z], tt = [J, D, L], ot = [B, z, Y], V = [J, L, S], $ = [B, Y, T], pt = [J, S, D], F = 1 / 3, [lt, ft, gt, Dt] = Kt(Q, tt), [At, Qt, jt, Tt] = Kt(ot, V), [dt, Ct, kt, Ot] = Kt($, pt), mt = k(2, 18).toArray(), ht = k(2, 18).toArray(), yt = k(2, 18).toArray();
    for (let w = 0; w < 2; w++) for (let A = 0; A < 6; A++) mt[w][A] = F * lt[w][A] + ft[w][A], mt[w][A + 6] = F * lt[w][A] + gt[w][A], mt[w][A + 12] = F * lt[w][A], ht[w][A] = F * At[w][A], ht[w][A + 6] = F * At[w][A] + Qt[w][A], ht[w][A + 12] = F * At[w][A] + jt[w][A], yt[w][A] = F * dt[w][A] + kt[w][A], yt[w][A + 6] = F * dt[w][A], yt[w][A + 12] = F * dt[w][A] + Ct[w][A];
    for (let w = 0; w < 2; w++) for (let A = 0; A < 18; A++) mt[w][A] *= Dt, ht[w][A] *= Tt, yt[w][A] *= Ot, y[w][A] = (mt[w][A] + ht[w][A] + yt[w][A]) / Z;
    return y;
  }
  function Kt(d, y) {
    const T = k(2, 6).toArray(), D = k(2, 6).toArray(), z = k(2, 6).toArray(), L = d[1] - d[0], Y = d[0] - d[2], S = y[2] - y[0], Z = y[0] - y[1], B = d[2] - d[1], J = y[1] - y[2], Q = 0.5 * (L * S - Y * Z), tt = 0.5 * Z * Y, ot = 0.5 * S * L, V = 0.5 * L * Y, $ = 0.5 * Z * S;
    return T[0][2] = 0.5 * B / Q, T[0][3] = -0.5, T[1][2] = 0.5 * J / Q, T[1][4] = 0.5, D[0][2] = 0.5 * Y / Q, D[0][3] = 0.5 * tt / Q, D[0][4] = 0.5 * V / Q, D[1][2] = 0.5 * S / Q, D[1][3] = 0.5 * $ / Q, D[1][4] = 0.5 * ot / Q, z[0][2] = 0.5 * L / Q, z[0][3] = -0.5 * ot / Q, z[0][4] = -0.5 * V / Q, z[1][2] = 0.5 * Z / Q, z[1][3] = -0.5 * $ / Q, z[1][4] = -0.5 * tt / Q, [T, D, z, Q];
  }
  function to(d) {
    const y = k(3, 18).toArray(), [T, D] = d[0], [z, L] = d[1], [Y, S] = d[2], Z = z - T, B = Y - T, J = Y - z, Q = L - S, tt = S - D, ot = D - L, V = 0.5 * (Z * tt - B * -ot), $ = Q / (2 * V), pt = J / (2 * V), F = tt / (2 * V), lt = -B / (2 * V), ft = ot / (2 * V), gt = Z / (2 * V);
    return y[0][4] = $, y[0][10] = F, y[0][16] = ft, y[1][3] = -pt, y[1][9] = -lt, y[1][15] = -gt, y[2][3] = -$, y[2][4] = pt, y[2][9] = -F, y[2][10] = lt, y[2][15] = -ft, y[2][16] = gt, y;
  }
  function oo(d, y, T) {
    let D = k(9, 9).toArray(), z = k(9, 9).toArray(), L = k(9, 9).toArray(), Y = k(9, 3).toArray(), S = k(3, 9).toArray(), Z = k(3, 3).toArray(), B = k(3, 3).toArray(), J = k(3, 3).toArray(), Q = k(3, 3).toArray(), tt = k(3, 3).toArray(), ot = k(3, 3).toArray(), V = k(3, 3).toArray(), $ = k(3, 3).toArray();
    const pt = 1 / 8, F = pt / 6, lt = pt ** 2 / 4, ft = 1, gt = 2, Dt = 1, At = 0, Qt = 1, jt = -1, Tt = -1, dt = -1, Ct = -2, kt = d[0][0], Ot = d[0][1], mt = d[1][0], ht = d[1][1], yt = d[2][0], w = d[2][1], A = kt - mt, xt = mt - yt, ut = yt - kt, Yt = Ot - ht, St = ht - w, Xt = w - Ot, nt = -A, et = -xt, at = -ut, st = -Yt, rt = -St, ct = -Xt, zt = 0.5 * (nt * Xt - ut * -Yt), no = 2 * zt, R = 4 * zt, G = 0.5 * T, Gt = zt * T, H = nt ** 2 + st ** 2, U = et ** 2 + rt ** 2, I = at ** 2 + ct ** 2;
    Y[0][0] = G * St, Y[0][2] = G * et, Y[1][1] = G * et, Y[1][2] = G * St, Y[2][0] = G * St * (ct - st) * F, Y[2][1] = G * et * (ut - A) * F, Y[2][2] = G * (ut * ct - A * st) * 2 * F, Y[3][0] = G * Xt, Y[3][2] = G * at, Y[4][1] = G * at, Y[4][2] = G * Xt, Y[5][0] = G * Xt * (st - rt) * F, Y[5][1] = G * at * (A - xt) * F, Y[5][2] = G * (A * st - xt * rt) * 2 * F, Y[6][0] = G * Yt, Y[6][2] = G * nt, Y[7][1] = G * nt, Y[7][2] = G * Yt, Y[8][0] = G * Yt * (rt - ct) * F, Y[8][1] = G * nt * (xt - ut) * F, Y[8][2] = G * (xt * rt - ut * ct) * 2 * F, L = C(C(j(Y), y), bt(j(Y))).toArray(), L = C(j(L), 1 / Gt).toArray(), S[0][0] = et / R, S[0][1] = rt / R, S[0][2] = 1, S[0][3] = at / R, S[0][4] = ct / R, S[0][6] = nt / R, S[0][7] = st / R, S[1][0] = et / R, S[1][1] = rt / R, S[1][3] = at / R, S[1][4] = ct / R, S[1][5] = 1, S[1][6] = nt / R, S[1][7] = st / R, S[2][0] = et / R, S[2][1] = rt / R, S[2][3] = at / R, S[2][4] = ct / R, S[2][6] = nt / R, S[2][7] = st / R, S[2][8] = 1;
    const it = 1 / (zt * R);
    Z[0][0] = it * St * ct * H, Z[0][1] = it * Xt * st * U, Z[0][2] = it * Yt * rt * I, Z[1][0] = it * xt * at * H, Z[1][1] = it * ut * nt * U, Z[1][2] = it * A * et * I, Z[2][0] = it * (St * ut + et * ct) * H, Z[2][1] = it * (Xt * A + at * st) * U, Z[2][2] = it * (Yt * xt + nt * rt) * I;
    const O = no / 3;
    B[0][0] = O * ft / H, B[0][1] = O * gt / H, B[0][2] = O * Dt / H, B[1][0] = O * At / U, B[1][1] = O * Qt / U, B[1][2] = O * jt / U, B[2][0] = O * Tt / I, B[2][1] = O * dt / I, B[2][2] = O * Ct / I, J[0][0] = O * Ct / H, J[0][1] = O * Tt / H, J[0][2] = O * dt / H, J[1][0] = O * Dt / U, J[1][1] = O * ft / U, J[1][2] = O * gt / U, J[2][0] = O * jt / I, J[2][1] = O * At / I, J[2][2] = O * Qt / I, Q[0][0] = O * Qt / H, Q[0][1] = O * jt / H, Q[0][2] = O * At / H, Q[1][0] = O * dt / U, Q[1][1] = O * Ct / U, Q[1][2] = O * Tt / U, Q[2][0] = O * gt / I, Q[2][1] = O * Dt / I, Q[2][2] = O * ft / I, tt = C(wt(j(B), j(J)), 0.5).toArray(), ot = C(wt(j(J), j(Q)), 0.5).toArray(), V = C(wt(j(Q), j(B)), 0.5).toArray();
    const Zt = C(C(bt(j(Z)), y), j(Z));
    return $ = wt(wt(C(C(bt(j(tt)), Zt), j(tt)), C(C(bt(j(ot)), Zt), j(ot))), C(C(bt(j(V)), Zt), j(V))).toArray(), $ = C(j($), 3 / 4 * lt * Gt).toArray(), z = C(C(bt(j(S)), j($)), j(S)).toArray(), D = wt(j(L), j(z)).toArray(), D;
  }
}
function Wt(t, o) {
  const r = t / (1 - o * o);
  return j([[r, r * o, 0], [r * o, r, 0], [0, 0, r * (1 - o) / 2]]);
}
function $t(t, o, r, n) {
  const c = o * n / t, s = 1 - n * c, e = t / s, m = o / s, g = n * o / s;
  return j([[e, g, 0], [g, m, 0], [0, 0, r]]);
}
function wo(t, o, r, n) {
  const c = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map() }, s = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map() };
  o.forEach((g, l) => {
    var _a;
    if (g.length === 4) return;
    const X = g.map((b) => t[b]), _ = g.reduce((b, a) => {
      var _a2;
      const i = (_a2 = n.deformations) == null ? void 0 : _a2.get(a);
      return b.concat(i ?? [0, 0, 0, 0, 0, 0]);
    }, []), f = io(X), x = C(f, _);
    if (g.length === 2) {
      const b = go(X, r, l);
      let a = C(b, x);
      c.normals.set(l, [a[0], a[6]]), c.shearsY.set(l, [a[1], a[7]]), c.shearsZ.set(l, [a[2], a[8]]), c.torsions.set(l, [a[3], a[9]]), c.bendingsY.set(l, [a[4], a[10]]), c.bendingsZ.set(l, [a[5], a[11]]);
    } else {
      const b = bo(r, l), a = Mo(X), i = po(_), h = Ao(X), u = C(1 / (2 * h), C(C(b, a), i)).toArray(), K = ((_a = r.thicknesses) == null ? void 0 : _a.get(l)) ?? 1, p = u[0][0] * K, v = u[1][0] * K, q = u[2][0] * K, W = u[0][1] * (K ** 3 / 12), M = u[1][1] * (K ** 3 / 12), P = u[2][1] * (K ** 3 / 12);
      s.membraneXX.set(l, p), s.membraneYY.set(l, v), s.membraneXY.set(l, q), s.bendingXX.set(l, W), s.bendingYY.set(l, M), s.bendingXY.set(l, P);
    }
  });
  const { nodeToCentroidNodesMap: e, nodeToCentroidElementIndiciesMap: m } = xo(t, o);
  return o.forEach((g, l) => {
    if (g.length !== 3) return;
    let X = [0, 0, 0], _ = [0, 0, 0], f = [0, 0, 0], x = [0, 0, 0], b = [0, 0, 0], a = [0, 0, 0];
    g.forEach((i, h) => {
      e.get(i);
      const N = m.get(i) || [];
      X[h] = Nt(N.map((u) => s.membraneXX.get(u) ?? 0)), _[h] = Nt(N.map((u) => s.membraneYY.get(u) ?? 0)), f[h] = Nt(N.map((u) => s.membraneXY.get(u) ?? 0)), x[h] = Nt(N.map((u) => s.bendingXX.get(u) ?? 0)), b[h] = Nt(N.map((u) => s.bendingYY.get(u) ?? 0)), a[h] = Nt(N.map((u) => s.bendingXY.get(u) ?? 0));
    }), c.membraneXX.set(l, X), c.membraneYY.set(l, _), c.membraneXY.set(l, f), c.bendingXX.set(l, x), c.bendingYY.set(l, b), c.bendingXY.set(l, a);
  }), c;
}
function bo(t, o) {
  var _a, _b, _c, _d, _e;
  const r = ((_a = t.elasticities) == null ? void 0 : _a.get(o)) ?? 0, n = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(o)) ?? 0, c = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(o)) ?? 0, s = ((_d = t.shearModuli) == null ? void 0 : _d.get(o)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(o), n > 0 ? $t(r, n, s, c) : Wt(r, c);
}
function Mo(t) {
  const [o, r] = t[0], [n, c] = t[1], [s, e] = t[2], m = c - e, g = e - r, l = r - c, X = s - n, _ = o - s, f = n - o;
  return j([[m, g, l, 0, 0, 0], [0, 0, 0, X, _, f], [X, _, f, m, g, l]]);
}
function po(t) {
  const [o, r, n] = [t[0], t[6], t[12]], [c, s, e] = [t[1], t[7], t[13]], [m, g, l] = [t[4], t[10], t[16]], [X, _, f] = [t[3], t[9], t[15]];
  return j([[o, -m], [r, -g], [n, -l], [c, X], [s, _], [e, f]]);
}
function Ao(t) {
  const [o, r] = t[0], [n, c] = t[1], [s, e] = t[2], m = n - o, g = s - o, l = e - r, X = r - c;
  return 0.5 * (m * l - g * -X);
}
function xo(t, o) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return o.forEach((c, s) => {
    const e = c.map((g) => t[g]), m = Yo(e);
    c.forEach((g) => {
      var _a, _b;
      r.has(g) || r.set(g, []), (_a = r.get(g)) == null ? void 0 : _a.push(m), n.has(g) || n.set(g, []), (_b = n.get(g)) == null ? void 0 : _b.push(s);
    });
  }), { nodeToCentroidNodesMap: r, nodeToCentroidElementIndiciesMap: n };
}
function Yo(t) {
  const o = t.reduce((c, s) => c + s[0], 0) / t.length, r = t.reduce((c, s) => c + s[1], 0) / t.length, n = t.reduce((c, s) => c + s[2], 0) / t.length;
  return [o, r, n];
}
export {
  wo as a,
  io as b,
  go as g
};
