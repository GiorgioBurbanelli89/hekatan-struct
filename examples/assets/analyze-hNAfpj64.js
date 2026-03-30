import { s as Ht, n as Ct, b as qt, k as sn, i as Ut, z as k, c as Vt, m as J, t as dt, a as _t, e as C, f as jt } from "./pureFunctionsAny.generated-BHh0zpCc.js";
const z = 1 / Math.sqrt(3);
function Jt(t, o) {
  const s = [0.25 * (1 - t) * (1 - o), 0.25 * (1 + t) * (1 - o), 0.25 * (1 + t) * (1 + o), 0.25 * (1 - t) * (1 + o)], n = [-0.25 * (1 - o), 0.25 * (1 - o), 0.25 * (1 + o), -0.25 * (1 + o)], e = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: s, dNdxi: n, dNdeta: e };
}
function Dt(t, o, s, n) {
  let e = 0, r = 0, c = 0, h = 0;
  for (let l = 0; l < 4; l++) e += t[l] * s[l], r += t[l] * n[l], c += o[l] * s[l], h += o[l] * n[l];
  const a = e * h - r * c, i = 1 / a, w = [], S = [];
  for (let l = 0; l < 4; l++) w.push(i * (h * t[l] - r * o[l])), S.push(i * (-c * t[l] + e * o[l]));
  return { dNdx: w, dNdy: S, detJ: a };
}
function rn(t, o, s, n, e) {
  const a = $(12, 12), i = s * e / (1 - n * n), w = [[-z, -z], [z, -z], [z, z], [-z, z]], { dNdxi: S, dNdeta: l } = Jt(0, 0), { detJ: D } = Dt(S, l, t, o);
  for (const [p, f] of w) {
    const { dNdxi: Q, dNdeta: B } = Jt(p, f), { dNdx: R, dNdy: x, detJ: q } = Dt(Q, B, t, o);
    Dt(S, l, t, o);
    const pt = S.reduce((y, _, T) => y + _ * t[T], 0), Lt = S.reduce((y, _, T) => y + _ * o[T], 0), Ft = l.reduce((y, _, T) => y + _ * t[T], 0), Gt = l.reduce((y, _, T) => y + _ * o[T], 0), ft = 1 / D, kt = ft * Gt * (-2 * p), Ot = ft * -Ft * (-2 * p), A = ft * -Lt * (-2 * f), d = ft * pt * (-2 * f), Y = [[], [], []];
    for (let y = 0; y < 4; y++) Y[0].push(R[y], 0), Y[1].push(0, x[y]), Y[2].push(x[y], R[y]);
    Y[0].push(kt, 0, A, 0), Y[1].push(0, Ot, 0, d), Y[2].push(Ot, kt, d, A);
    for (let y = 0; y < 12; y++) for (let _ = 0; _ < 12; _++) {
      let T = 0;
      T += i * (Y[0][y] * Y[0][_] + n * Y[0][y] * Y[1][_] + n * Y[1][y] * Y[0][_] + Y[1][y] * Y[1][_]), T += i * (1 - n) / 2 * Y[2][y] * Y[2][_], a[y][_] += T * Math.abs(q);
    }
  }
  const b = $(8, 8), g = $(8, 4), X = $(4, 8), M = $(4, 4);
  for (let p = 0; p < 8; p++) for (let f = 0; f < 8; f++) b[p][f] = a[p][f];
  for (let p = 0; p < 8; p++) for (let f = 0; f < 4; f++) g[p][f] = a[p][8 + f];
  for (let p = 0; p < 4; p++) for (let f = 0; f < 8; f++) X[p][f] = a[8 + p][f];
  for (let p = 0; p < 4; p++) for (let f = 0; f < 4; f++) M[p][f] = a[8 + p][8 + f];
  const u = cn(M);
  if (!u) return b;
  const m = $(8, 8);
  for (let p = 0; p < 8; p++) for (let f = 0; f < 8; f++) {
    let Q = 0;
    for (let B = 0; B < 4; B++) for (let R = 0; R < 4; R++) Q += g[p][B] * u[B][R] * X[R][f];
    m[p][f] = b[p][f] - Q;
  }
  return m;
}
function cn(t) {
  const o = t.length, s = t.map((n, e) => {
    const r = [...n];
    for (let c = 0; c < o; c++) r.push(e === c ? 1 : 0);
    return r;
  });
  for (let n = 0; n < o; n++) {
    let e = n;
    for (let c = n + 1; c < o; c++) Math.abs(s[c][n]) > Math.abs(s[e][n]) && (e = c);
    if ([s[n], s[e]] = [s[e], s[n]], Math.abs(s[n][n]) < 1e-15) return null;
    const r = s[n][n];
    for (let c = 0; c < 2 * o; c++) s[n][c] /= r;
    for (let c = 0; c < o; c++) {
      if (c === n) continue;
      const h = s[c][n];
      for (let a = 0; a < 2 * o; a++) s[c][a] -= h * s[n][a];
    }
  }
  return s.map((n) => n.slice(o));
}
function en(t, o, s, n, e) {
  const r = $(12, 12), c = [[-z, -z], [z, -z], [z, z], [-z, z]];
  for (const [h, a] of c) {
    const { N: i, dNdxi: w, dNdeta: S } = Jt(h, a), { dNdx: l, dNdy: D, detJ: b } = Dt(w, S, t, o), g = new Array(12).fill(0);
    for (let M = 0; M < 4; M++) g[M * 3] = 0.5 * D[M], g[M * 3 + 1] = -0.5 * l[M], g[M * 3 + 2] = i[M];
    const X = e * s * n * Math.abs(b);
    for (let M = 0; M < 12; M++) for (let u = 0; u < 12; u++) r[M][u] += X * g[M] * g[u];
  }
  return r;
}
function an(t, o, s, n, e) {
  const r = $(12, 12), c = s * e * e * e / (12 * (1 - n * n)), a = 5 / 6 * s / (2 * (1 + n)) * e, i = [[-z, -z], [z, -z], [z, z], [-z, z]], w = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], S = [];
  for (const l of w) {
    const { N: D, dNdxi: b, dNdeta: g } = Jt(l.xi, l.eta), { dNdx: X, dNdy: M } = Dt(b, g, t, o), u = $(2, 12);
    for (let m = 0; m < 4; m++) u[0][m * 3] = X[m], u[0][m * 3 + 1] = -D[m], u[1][m * 3] = M[m], u[1][m * 3 + 2] = -D[m];
    S.push(u);
  }
  for (const [l, D] of i) {
    const { dNdxi: b, dNdeta: g } = Jt(l, D), { dNdx: X, dNdy: M, detJ: u } = Dt(b, g, t, o), m = $(3, 12);
    for (let x = 0; x < 4; x++) m[0][x * 3 + 1] = X[x], m[1][x * 3 + 2] = M[x], m[2][x * 3 + 1] = M[x], m[2][x * 3 + 2] = X[x];
    for (let x = 0; x < 12; x++) for (let q = 0; q < 12; q++) {
      let pt = 0;
      pt += c * (m[0][x] * m[0][q] + n * m[0][x] * m[1][q] + n * m[1][x] * m[0][q] + m[1][x] * m[1][q]), pt += c * (1 - n) / 2 * m[2][x] * m[2][q], r[x][q] += pt * Math.abs(u);
    }
    const p = $(2, 12), f = 0.5 * (1 - D), Q = 0.5 * (1 + D), B = 0.5 * (1 - l), R = 0.5 * (1 + l);
    for (let x = 0; x < 12; x++) p[0][x] = f * S[0][0][x] + Q * S[1][0][x], p[1][x] = B * S[2][1][x] + R * S[3][1][x];
    for (let x = 0; x < 12; x++) for (let q = 0; q < 12; q++) r[x][q] += a * (p[0][x] * p[0][q] + p[1][x] * p[1][q]) * Math.abs(u);
  }
  return r;
}
function ln(t, o, s) {
  var _a, _b, _c;
  const n = ((_a = o == null ? void 0 : o.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = o == null ? void 0 : o.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0.2, r = ((_c = o == null ? void 0 : o.thicknesses) == null ? void 0 : _c.get(s)) ?? 0;
  if (n === 0 || r === 0) return $(24, 24);
  const { localCoords: c } = It(t), h = c.map((u) => u[0]), a = c.map((u) => u[1]), i = rn(h, a, n, e, r), w = an(h, a, n, e, r), S = n / (2 * (1 + e)), D = en(h, a, S, r, 0.5), b = $(24, 24), g = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let u = 0; u < 8; u++) for (let m = 0; m < 8; m++) b[g[u]][g[m]] += i[u][m];
  const X = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let u = 0; u < 12; u++) for (let m = 0; m < 12; m++) b[X[u]][X[m]] += w[u][m];
  const M = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let u = 0; u < 12; u++) for (let m = 0; m < 12; m++) b[M[u]][M[m]] += D[u][m];
  return b;
}
function fn(t) {
  const { localX: o, localY: s, localZ: n } = It(t), e = [[o[0], o[1], o[2]], [s[0], s[1], s[2]], [n[0], n[1], n[2]]], r = $(24, 24);
  for (let c = 0; c < 4; c++) for (let h = 0; h < 2; h++) {
    const a = c * 6 + h * 3;
    for (let i = 0; i < 3; i++) for (let w = 0; w < 3; w++) r[a + i][a + w] = e[i][w];
  }
  return r;
}
function It(t) {
  const o = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], s = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], n = Wt(o, s), e = Math.sqrt(n[0] ** 2 + n[1] ** 2 + n[2] ** 2), r = n.map((b) => b / e), c = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], h = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2), a = c.map((b) => b / h), i = Wt(r, a), w = t.map((b) => b[0]).reduce((b, g) => b + g) / 4, S = t.map((b) => b[1]).reduce((b, g) => b + g) / 4, l = t.map((b) => b[2]).reduce((b, g) => b + g) / 4, D = t.map((b) => {
    const g = b[0] - w, X = b[1] - S, M = b[2] - l;
    return [g * a[0] + X * a[1] + M * a[2], g * i[0] + X * i[1] + M * i[2]];
  });
  return { localX: a, localY: i, localZ: r, localCoords: D };
}
function Wt(t, o) {
  return [t[1] * o[2] - t[2] * o[1], t[2] * o[0] - t[0] * o[2], t[0] * o[1] - t[1] * o[0]];
}
function $(t, o) {
  return Array.from({ length: t }, () => Array(o).fill(0));
}
function gn(t) {
  if (t.length === 2) return mn(t);
  if (t.length === 3) return hn(t);
  if (t.length === 4) return fn(t);
}
function mn(t) {
  const o = Ht(t[1], t[0]), s = Ct(o), n = qt(o, [1, 0, 0]) / s, e = qt(o, [0, 1, 0]) / s, r = qt(o, [0, 0, 1]) / s, c = Math.sqrt(n ** 2 + e ** 2);
  let h = [[n, e, r], [-e / c, n / c, 0], [-n * r / c, -e * r / c, c]];
  return r === 1 && (h = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), r === -1 && (h = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), sn(Ut(4), h).toArray();
}
function hn(t) {
  const r = [t[0], t[1], t[2]], c = k(3, 3).toArray();
  for (let f = 0; f < 3; f++) for (let Q = 0; Q < 3; Q++) c[f][Q] = r[Q][f];
  const h = [-1, 1, 0], a = [-1, 0, 1], i = k(3, 2).toArray();
  for (let f = 0; f < 3; f++) for (let Q = 0; Q < 3; Q++) i[f][0] += c[f][Q] * h[Q], i[f][1] += c[f][Q] * a[Q];
  const w = i.map((f) => f[0]), S = i.map((f) => f[1]);
  let l = Vt(w, S), D = Ct(l);
  if (D === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), k(18, 18).toArray();
  l = l.map((f) => f / D);
  const b = [...l], g = Ut(3).toArray(), X = l[0];
  let M;
  if (Math.abs(X) > 1 - 1e-10) {
    const f = l[2];
    M = g.map((Q, B) => Q[2] - f * l[B]);
  } else M = g.map((f, Q) => f[0] - X * l[Q]);
  if (D = Ct(M), D === 0) return console.warn("Degenerate local X-axis detected."), k(18, 18).toArray();
  M = M.map((f) => f / D);
  let u = Vt(b, M);
  if (D = Ct(u), D === 0) return console.warn("Degenerate local Y-axis detected."), k(18, 18).toArray();
  u = u.map((f) => f / D);
  const m = [M, u, b], p = k(18, 18).toArray();
  for (let f = 0; f < 3; f++) {
    const Q = f * 6, B = Q + 3;
    for (let R = 0; R < 3; R++) for (let x = 0; x < 3; x++) p[Q + R][Q + x] = m[R][x], p[B + R][B + x] = m[R][x];
  }
  return p;
}
function un(t, o, s) {
  var _a;
  if (t.length === 2) {
    let n = Mn(t, o, s);
    const e = (_a = o == null ? void 0 : o.momentReleases) == null ? void 0 : _a.get(s);
    return e && (n = yn(n, e)), n;
  }
  if (t.length === 3) return dn(t, o, s);
  if (t.length === 4) return ln(t, o, s);
}
function yn(t, o) {
  const s = [3, 4, 5, 9, 10, 11], n = [];
  for (let g = 0; g < 6; g++) o[g] && n.push(s[g]);
  if (n.length === 0) return t;
  const e = t.length, r = [];
  for (let g = 0; g < e; g++) n.includes(g) || r.push(g);
  const c = r.length, h = n.length, a = Array.from({ length: h }, (g, X) => Array.from({ length: h }, (M, u) => t[n[X]][n[u]])), i = Array.from({ length: c }, (g, X) => Array.from({ length: h }, (M, u) => t[r[X]][n[u]])), w = Array.from({ length: h }, (g, X) => Array.from({ length: c }, (M, u) => t[n[X]][r[u]])), S = bn(a);
  if (!S) return t;
  const l = $t(i, S), D = $t(l, w), b = Array.from({ length: e }, () => Array(e).fill(0));
  for (let g = 0; g < c; g++) for (let X = 0; X < c; X++) b[r[g]][r[X]] = t[r[g]][r[X]] - D[g][X];
  return b;
}
function $t(t, o) {
  const s = t.length, n = o[0].length, e = o.length, r = Array.from({ length: s }, () => Array(n).fill(0));
  for (let c = 0; c < s; c++) for (let h = 0; h < n; h++) for (let a = 0; a < e; a++) r[c][h] += t[c][a] * o[a][h];
  return r;
}
function bn(t) {
  const o = t.length, s = t.map((n, e) => {
    const r = [...n];
    for (let c = 0; c < o; c++) r.push(e === c ? 1 : 0);
    return r;
  });
  for (let n = 0; n < o; n++) {
    let e = n;
    for (let c = n + 1; c < o; c++) Math.abs(s[c][n]) > Math.abs(s[e][n]) && (e = c);
    if ([s[n], s[e]] = [s[e], s[n]], Math.abs(s[n][n]) < 1e-15) return null;
    const r = s[n][n];
    for (let c = 0; c < 2 * o; c++) s[n][c] /= r;
    for (let c = 0; c < o; c++) {
      if (c === n) continue;
      const h = s[c][n];
      for (let a = 0; a < 2 * o; a++) s[c][a] -= h * s[n][a];
    }
  }
  return s.map((n) => n.slice(o));
}
function Mn(t, o, s) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const n = ((_a = o == null ? void 0 : o.momentsOfInertiaZ) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = o == null ? void 0 : o.momentsOfInertiaY) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = o == null ? void 0 : o.elasticities) == null ? void 0 : _c.get(s)) ?? 0, c = ((_d = o == null ? void 0 : o.areas) == null ? void 0 : _d.get(s)) ?? 0, h = ((_e = o == null ? void 0 : o.shearModuli) == null ? void 0 : _e.get(s)) ?? 0, a = ((_f = o == null ? void 0 : o.torsionalConstants) == null ? void 0 : _f.get(s)) ?? 0, i = Ct(Ht(t[0], t[1]));
  let w = ((_g = o == null ? void 0 : o.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, S = ((_h = o == null ? void 0 : o.shearAreasZ) == null ? void 0 : _h.get(s)) ?? 0;
  w === 0 && S === 0 && c > 0 && h > 0 && (w = S = 5 / 6 * c);
  const l = S > 0 && h > 0 ? 12 * r * n / (h * S * i ** 2) : 0, D = w > 0 && h > 0 ? 12 * r * e / (h * w * i ** 2) : 0, b = r * c / i, g = h * a / i, X = 12 * r * n / i ** 3 / (1 + l), M = 6 * r * n / i ** 2 / (1 + l), u = 4 * r * n / i * (1 + l / 4) / (1 + l), m = 2 * r * n / i * (1 - l / 2) / (1 + l), p = 12 * r * e / i ** 3 / (1 + D), f = 6 * r * e / i ** 2 / (1 + D), Q = 4 * r * e / i * (1 + D / 4) / (1 + D), B = 2 * r * e / i * (1 - D / 2) / (1 + D);
  return [[b, 0, 0, 0, 0, 0, -b, 0, 0, 0, 0, 0], [0, X, 0, 0, 0, M, 0, -X, 0, 0, 0, M], [0, 0, p, 0, -f, 0, 0, 0, -p, 0, -f, 0], [0, 0, 0, g, 0, 0, 0, 0, 0, -g, 0, 0], [0, 0, -f, 0, Q, 0, 0, 0, f, 0, B, 0], [0, M, 0, 0, 0, u, 0, -M, 0, 0, 0, m], [-b, 0, 0, 0, 0, 0, b, 0, 0, 0, 0, 0], [0, -X, 0, 0, 0, -M, 0, X, 0, 0, 0, -M], [0, 0, -p, 0, f, 0, 0, 0, p, 0, f, 0], [0, 0, 0, -g, 0, 0, 0, 0, 0, g, 0, 0], [0, 0, -f, 0, B, 0, 0, 0, f, 0, Q, 0], [0, M, 0, 0, 0, m, 0, -M, 0, 0, 0, u]];
}
function dn(t, o, s) {
  var _a, _b, _c, _d, _e;
  const n = ((_a = o.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = o.elasticitiesOrthogonal) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = o.poissonsRatios) == null ? void 0 : _c.get(s)) ?? 0, c = ((_d = o.shearModuli) == null ? void 0 : _d.get(s)) ?? 0, h = ((_e = o.thicknesses) == null ? void 0 : _e.get(s)) ?? 0, a = e > 0, i = a ? Lt(n, e, c, r, h) : q(n, r, h), w = a ? Ft(c, h) : pt(n, r, h), S = a ? nn(n, e, c, r) : tn(n, r), l = t.map(([A, d]) => [A, d]), D = l[1][0] - l[0][0], b = l[2][0] - l[0][0], g = l[0][1] - l[1][1], X = l[2][1] - l[0][1], M = 0.5 * (D * X - b * -g), u = Gt(l), m = kt(l), p = Ot(l, S, h), f = J(J(dt(u), w), u), Q = J(J(dt(m), i), m), B = k(18, 18).toArray(), R = J(_t(f, Q), M), x = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let A = 0; A < 3; A++) for (let d = 0; d < 3; d++) for (let Y = 0; Y < 3; Y++) {
    const y = x[A][d], _ = x[Y][d];
    B[y][_] = p[A * 3 + d][Y * 3 + d];
  }
  for (let A = 0; A < 18; A++) for (let d = 0; d < 18; d++) B[A][d] = (B[A][d] ?? 0) + R.get([A, d]);
  return B;
  function q(A, d, Y) {
    const y = A / (1 - d * d), _ = C([[y, y * d, 0], [y * d, y, 0], [0, 0, y * (1 - d) / 2]]);
    return J(Y ** 3 / 12, _);
  }
  function pt(A, d, Y) {
    const y = 0.8333333333333334, _ = A / (2 * (1 + d)), T = y * _ * Y;
    return C([[T, 0], [0, T]]);
  }
  function Lt(A, d, Y, y, _) {
    const T = d * y / A, j = 1 - y * T, K = A / j, Z = d / j, L = y * d / j, v = C([[K, L, 0], [L, Z, 0], [0, 0, Y]]);
    return J(_ ** 3 / 12, v);
  }
  function Ft(A, d) {
    const y = 0.8333333333333334 * A * d;
    return C([[y, 0], [0, y]]);
  }
  function Gt(A) {
    const d = k(2, 18).toArray(), [Y, y] = A[0], [_, T] = A[1], [j, K] = A[2], Z = 0.5 * ((_ - Y) * (K - y) - (j - Y) * -(y - T)), L = (Y + _ + j) / 3, P = (y + T + K) / 3, v = [L, Y, _], nt = [P, y, T], ot = [L, _, j], W = [P, T, K], H = [L, j, Y], xt = [P, K, y], F = 1 / 3, [gt, mt, ht, Et] = ft(v, nt), [At, Kt, Tt, Qt] = ft(ot, W), [Yt, vt, zt, Bt] = ft(H, xt), ut = k(2, 18).toArray(), yt = k(2, 18).toArray(), bt = k(2, 18).toArray();
    for (let E = 0; E < 2; E++) for (let N = 0; N < 6; N++) ut[E][N] = F * gt[E][N] + mt[E][N], ut[E][N + 6] = F * gt[E][N] + ht[E][N], ut[E][N + 12] = F * gt[E][N], yt[E][N] = F * At[E][N], yt[E][N + 6] = F * At[E][N] + Kt[E][N], yt[E][N + 12] = F * At[E][N] + Tt[E][N], bt[E][N] = F * Yt[E][N] + zt[E][N], bt[E][N + 6] = F * Yt[E][N], bt[E][N + 12] = F * Yt[E][N] + vt[E][N];
    for (let E = 0; E < 2; E++) for (let N = 0; N < 18; N++) ut[E][N] *= Et, yt[E][N] *= Qt, bt[E][N] *= Bt, d[E][N] = (ut[E][N] + yt[E][N] + bt[E][N]) / Z;
    return d;
  }
  function ft(A, d) {
    const Y = k(2, 6).toArray(), y = k(2, 6).toArray(), _ = k(2, 6).toArray(), T = A[1] - A[0], j = A[0] - A[2], K = d[2] - d[0], Z = d[0] - d[1], L = A[2] - A[1], P = d[1] - d[2], v = 0.5 * (T * K - j * Z), nt = 0.5 * Z * j, ot = 0.5 * K * T, W = 0.5 * T * j, H = 0.5 * Z * K;
    return Y[0][2] = 0.5 * L / v, Y[0][3] = -0.5, Y[1][2] = 0.5 * P / v, Y[1][4] = 0.5, y[0][2] = 0.5 * j / v, y[0][3] = 0.5 * nt / v, y[0][4] = 0.5 * W / v, y[1][2] = 0.5 * K / v, y[1][3] = 0.5 * H / v, y[1][4] = 0.5 * ot / v, _[0][2] = 0.5 * T / v, _[0][3] = -0.5 * ot / v, _[0][4] = -0.5 * W / v, _[1][2] = 0.5 * Z / v, _[1][3] = -0.5 * H / v, _[1][4] = -0.5 * nt / v, [Y, y, _, v];
  }
  function kt(A) {
    const d = k(3, 18).toArray(), [Y, y] = A[0], [_, T] = A[1], [j, K] = A[2], Z = _ - Y, L = j - Y, P = j - _, v = T - K, nt = K - y, ot = y - T, W = 0.5 * (Z * nt - L * -ot), H = v / (2 * W), xt = P / (2 * W), F = nt / (2 * W), gt = -L / (2 * W), mt = ot / (2 * W), ht = Z / (2 * W);
    return d[0][4] = H, d[0][10] = F, d[0][16] = mt, d[1][3] = -xt, d[1][9] = -gt, d[1][15] = -ht, d[2][3] = -H, d[2][4] = xt, d[2][9] = -F, d[2][10] = gt, d[2][15] = -mt, d[2][16] = ht, d;
  }
  function Ot(A, d, Y) {
    let y = k(9, 9).toArray(), _ = k(9, 9).toArray(), T = k(9, 9).toArray(), j = k(9, 3).toArray(), K = k(3, 9).toArray(), Z = k(3, 3).toArray(), L = k(3, 3).toArray(), P = k(3, 3).toArray(), v = k(3, 3).toArray(), nt = k(3, 3).toArray(), ot = k(3, 3).toArray(), W = k(3, 3).toArray(), H = k(3, 3).toArray();
    const xt = 1 / 8, F = xt / 6, gt = xt ** 2 / 4, mt = 1, ht = 2, Et = 1, At = 0, Kt = 1, Tt = -1, Qt = -1, Yt = -1, vt = -2, zt = A[0][0], Bt = A[0][1], ut = A[1][0], yt = A[1][1], bt = A[2][0], E = A[2][1], N = zt - ut, Xt = ut - bt, Mt = bt - zt, Nt = Bt - yt, St = yt - E, wt = E - Bt, st = -N, at = -Xt, it = -Mt, rt = -Nt, ct = -St, et = -wt, Zt = 0.5 * (st * wt - Mt * -Nt), on = 2 * Zt, V = 4 * Zt, G = 0.5 * Y, Pt = Zt * Y, U = st ** 2 + rt ** 2, I = at ** 2 + ct ** 2, tt = it ** 2 + et ** 2;
    j[0][0] = G * St, j[0][2] = G * at, j[1][1] = G * at, j[1][2] = G * St, j[2][0] = G * St * (et - rt) * F, j[2][1] = G * at * (Mt - N) * F, j[2][2] = G * (Mt * et - N * rt) * 2 * F, j[3][0] = G * wt, j[3][2] = G * it, j[4][1] = G * it, j[4][2] = G * wt, j[5][0] = G * wt * (rt - ct) * F, j[5][1] = G * it * (N - Xt) * F, j[5][2] = G * (N * rt - Xt * ct) * 2 * F, j[6][0] = G * Nt, j[6][2] = G * st, j[7][1] = G * st, j[7][2] = G * Nt, j[8][0] = G * Nt * (ct - et) * F, j[8][1] = G * st * (Xt - Mt) * F, j[8][2] = G * (Xt * ct - Mt * et) * 2 * F, T = J(J(C(j), d), dt(C(j))).toArray(), T = J(C(T), 1 / Pt).toArray(), K[0][0] = at / V, K[0][1] = ct / V, K[0][2] = 1, K[0][3] = it / V, K[0][4] = et / V, K[0][6] = st / V, K[0][7] = rt / V, K[1][0] = at / V, K[1][1] = ct / V, K[1][3] = it / V, K[1][4] = et / V, K[1][5] = 1, K[1][6] = st / V, K[1][7] = rt / V, K[2][0] = at / V, K[2][1] = ct / V, K[2][3] = it / V, K[2][4] = et / V, K[2][6] = st / V, K[2][7] = rt / V, K[2][8] = 1;
    const lt = 1 / (Zt * V);
    Z[0][0] = lt * St * et * U, Z[0][1] = lt * wt * rt * I, Z[0][2] = lt * Nt * ct * tt, Z[1][0] = lt * Xt * it * U, Z[1][1] = lt * Mt * st * I, Z[1][2] = lt * N * at * tt, Z[2][0] = lt * (St * Mt + at * et) * U, Z[2][1] = lt * (wt * N + it * rt) * I, Z[2][2] = lt * (Nt * Xt + st * ct) * tt;
    const O = on / 3;
    L[0][0] = O * mt / U, L[0][1] = O * ht / U, L[0][2] = O * Et / U, L[1][0] = O * At / I, L[1][1] = O * Kt / I, L[1][2] = O * Tt / I, L[2][0] = O * Qt / tt, L[2][1] = O * Yt / tt, L[2][2] = O * vt / tt, P[0][0] = O * vt / U, P[0][1] = O * Qt / U, P[0][2] = O * Yt / U, P[1][0] = O * Et / I, P[1][1] = O * mt / I, P[1][2] = O * ht / I, P[2][0] = O * Tt / tt, P[2][1] = O * At / tt, P[2][2] = O * Kt / tt, v[0][0] = O * Kt / U, v[0][1] = O * Tt / U, v[0][2] = O * At / U, v[1][0] = O * Yt / I, v[1][1] = O * vt / I, v[1][2] = O * Qt / I, v[2][0] = O * ht / tt, v[2][1] = O * Et / tt, v[2][2] = O * mt / tt, nt = J(_t(C(L), C(P)), 0.5).toArray(), ot = J(_t(C(P), C(v)), 0.5).toArray(), W = J(_t(C(v), C(L)), 0.5).toArray();
    const Rt = J(J(dt(C(Z)), d), C(Z));
    return H = _t(_t(J(J(dt(C(nt)), Rt), C(nt)), J(J(dt(C(ot)), Rt), C(ot))), J(J(dt(C(W)), Rt), C(W))).toArray(), H = J(C(H), 3 / 4 * gt * Pt).toArray(), _ = J(J(dt(C(K)), C(H)), C(K)).toArray(), y = _t(C(T), C(_)).toArray(), y;
  }
}
function tn(t, o) {
  const s = t / (1 - o * o);
  return C([[s, s * o, 0], [s * o, s, 0], [0, 0, s * (1 - o) / 2]]);
}
function nn(t, o, s, n) {
  const e = o * n / t, r = 1 - n * e, c = t / r, h = o / r, a = n * o / r;
  return C([[c, a, 0], [a, h, 0], [0, 0, s]]);
}
function _n(t, o, s, n) {
  const e = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map() }, r = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map() };
  o.forEach((a, i) => {
    var _a;
    if (a.length === 4) return;
    const w = a.map((b) => t[b]), S = a.reduce((b, g) => {
      var _a2;
      const X = (_a2 = n.deformations) == null ? void 0 : _a2.get(g);
      return b.concat(X ?? [0, 0, 0, 0, 0, 0]);
    }, []), l = gn(w), D = J(l, S);
    if (a.length === 2) {
      const b = un(w, s, i);
      let g = J(b, D);
      e.normals.set(i, [g[0], g[6]]), e.shearsY.set(i, [g[1], g[7]]), e.shearsZ.set(i, [g[2], g[8]]), e.torsions.set(i, [g[3], g[9]]), e.bendingsY.set(i, [g[4], g[10]]), e.bendingsZ.set(i, [g[5], g[11]]);
    } else {
      const b = pn(s, i), g = xn(w), X = An(S), M = Yn(w), m = J(1 / (2 * M), J(J(b, g), X)).toArray(), p = ((_a = s.thicknesses) == null ? void 0 : _a.get(i)) ?? 1, f = m[0][0] * p, Q = m[1][0] * p, B = m[2][0] * p, R = m[0][1] * (p ** 3 / 12), x = m[1][1] * (p ** 3 / 12), q = m[2][1] * (p ** 3 / 12);
      r.membraneXX.set(i, f), r.membraneYY.set(i, Q), r.membraneXY.set(i, B), r.bendingXX.set(i, R), r.bendingYY.set(i, x), r.bendingXY.set(i, q);
    }
  });
  const { nodeToCentroidNodesMap: c, nodeToCentroidElementIndiciesMap: h } = Xn(t, o);
  return o.forEach((a, i) => {
    if (a.length !== 3) return;
    let w = [0, 0, 0], S = [0, 0, 0], l = [0, 0, 0], D = [0, 0, 0], b = [0, 0, 0], g = [0, 0, 0];
    a.forEach((X, M) => {
      c.get(X);
      const u = h.get(X) || [];
      w[M] = jt(u.map((m) => r.membraneXX.get(m) ?? 0)), S[M] = jt(u.map((m) => r.membraneYY.get(m) ?? 0)), l[M] = jt(u.map((m) => r.membraneXY.get(m) ?? 0)), D[M] = jt(u.map((m) => r.bendingXX.get(m) ?? 0)), b[M] = jt(u.map((m) => r.bendingYY.get(m) ?? 0)), g[M] = jt(u.map((m) => r.bendingXY.get(m) ?? 0));
    }), e.membraneXX.set(i, w), e.membraneYY.set(i, S), e.membraneXY.set(i, l), e.bendingXX.set(i, D), e.bendingYY.set(i, b), e.bendingXY.set(i, g);
  }), e;
}
function pn(t, o) {
  var _a, _b, _c, _d, _e;
  const s = ((_a = t.elasticities) == null ? void 0 : _a.get(o)) ?? 0, n = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(o)) ?? 0, e = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(o)) ?? 0, r = ((_d = t.shearModuli) == null ? void 0 : _d.get(o)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(o), n > 0 ? nn(s, n, r, e) : tn(s, e);
}
function xn(t) {
  const [o, s] = t[0], [n, e] = t[1], [r, c] = t[2], h = e - c, a = c - s, i = s - e, w = r - n, S = o - r, l = n - o;
  return C([[h, a, i, 0, 0, 0], [0, 0, 0, w, S, l], [w, S, l, h, a, i]]);
}
function An(t) {
  const [o, s, n] = [t[0], t[6], t[12]], [e, r, c] = [t[1], t[7], t[13]], [h, a, i] = [t[4], t[10], t[16]], [w, S, l] = [t[3], t[9], t[15]];
  return C([[o, -h], [s, -a], [n, -i], [e, w], [r, S], [c, l]]);
}
function Yn(t) {
  const [o, s] = t[0], [n, e] = t[1], [r, c] = t[2], h = n - o, a = r - o, i = c - s, w = s - e;
  return 0.5 * (h * i - a * -w);
}
function Xn(t, o) {
  const s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  return o.forEach((e, r) => {
    const c = e.map((a) => t[a]), h = Nn(c);
    e.forEach((a) => {
      var _a, _b;
      s.has(a) || s.set(a, []), (_a = s.get(a)) == null ? void 0 : _a.push(h), n.has(a) || n.set(a, []), (_b = n.get(a)) == null ? void 0 : _b.push(r);
    });
  }), { nodeToCentroidNodesMap: s, nodeToCentroidElementIndiciesMap: n };
}
function Nn(t) {
  const o = t.reduce((e, r) => e + r[0], 0) / t.length, s = t.reduce((e, r) => e + r[1], 0) / t.length, n = t.reduce((e, r) => e + r[2], 0) / t.length;
  return [o, s, n];
}
export {
  _n as a,
  gn as b,
  un as g
};
