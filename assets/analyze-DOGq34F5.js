import { s as ln, n as Gt, b as tn, k as pn, i as fn, z as R, c as rn, m as z, t as Lt, a as Rt, e as T, f as bn } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const V = 1 / Math.sqrt(3);
function Ht(t, n) {
  const s = [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)], o = [-0.25 * (1 - n), 0.25 * (1 - n), 0.25 * (1 + n), -0.25 * (1 + n)], e = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: s, dNdxi: o, dNdeta: e };
}
function Zt(t, n, s, o) {
  let e = 0, c = 0, r = 0, h = 0;
  for (let i = 0; i < 4; i++) e += t[i] * s[i], c += t[i] * o[i], r += n[i] * s[i], h += n[i] * o[i];
  const l = e * h - c * r, a = 1 / l, f = [], d = [];
  for (let i = 0; i < 4; i++) f.push(a * (h * t[i] - c * n[i])), d.push(a * (-r * t[i] + e * n[i]));
  return { dNdx: f, dNdy: d, detJ: l };
}
function yn(t, n, s, o, e) {
  const l = it(12, 12), a = s * e / (1 - o * o), f = [[-V, -V], [V, -V], [V, V], [-V, V]], { dNdxi: d, dNdeta: i } = Ht(0, 0), { detJ: y } = Zt(d, i, t, n);
  for (const [_, u] of f) {
    const { dNdxi: j, dNdeta: L } = Ht(_, u), { dNdx: E, dNdy: v, detJ: Q } = Zt(j, L, t, n);
    Zt(d, i, t, n);
    const ot = d.reduce((Y, P, K) => Y + P * t[K], 0), F = d.reduce((Y, P, K) => Y + P * n[K], 0), rt = i.reduce((Y, P, K) => Y + P * t[K], 0), st = i.reduce((Y, P, K) => Y + P * n[K], 0), at = 1 / y, wt = at * st * (-2 * _), Yt = at * -rt * (-2 * _), S = at * -F * (-2 * u), X = at * ot * (-2 * u), x = [[], [], []];
    for (let Y = 0; Y < 4; Y++) x[0].push(E[Y], 0), x[1].push(0, v[Y]), x[2].push(v[Y], E[Y]);
    x[0].push(wt, 0, S, 0), x[1].push(0, Yt, 0, X), x[2].push(Yt, wt, X, S);
    for (let Y = 0; Y < 12; Y++) for (let P = 0; P < 12; P++) {
      let K = 0;
      K += a * (x[0][Y] * x[0][P] + o * x[0][Y] * x[1][P] + o * x[1][Y] * x[0][P] + x[1][Y] * x[1][P]), K += a * (1 - o) / 2 * x[2][Y] * x[2][P], l[Y][P] += K * Math.abs(Q);
    }
  }
  const M = it(8, 8), p = it(8, 4), b = it(4, 8), g = it(4, 4);
  for (let _ = 0; _ < 8; _++) for (let u = 0; u < 8; u++) M[_][u] = l[_][u];
  for (let _ = 0; _ < 8; _++) for (let u = 0; u < 4; u++) p[_][u] = l[_][8 + u];
  for (let _ = 0; _ < 4; _++) for (let u = 0; u < 8; u++) b[_][u] = l[8 + _][u];
  for (let _ = 0; _ < 4; _++) for (let u = 0; u < 4; u++) g[_][u] = l[8 + _][8 + u];
  const m = dn(g);
  if (!m) return M;
  const A = it(8, 8);
  for (let _ = 0; _ < 8; _++) for (let u = 0; u < 8; u++) {
    let j = 0;
    for (let L = 0; L < 4; L++) for (let E = 0; E < 4; E++) j += p[_][L] * m[L][E] * b[E][u];
    A[_][u] = M[_][u] - j;
  }
  return A;
}
function dn(t) {
  const n = t.length, s = t.map((o, e) => {
    const c = [...o];
    for (let r = 0; r < n; r++) c.push(e === r ? 1 : 0);
    return c;
  });
  for (let o = 0; o < n; o++) {
    let e = o;
    for (let r = o + 1; r < n; r++) Math.abs(s[r][o]) > Math.abs(s[e][o]) && (e = r);
    if ([s[o], s[e]] = [s[e], s[o]], Math.abs(s[o][o]) < 1e-15) return null;
    const c = s[o][o];
    for (let r = 0; r < 2 * n; r++) s[o][r] /= c;
    for (let r = 0; r < n; r++) {
      if (r === o) continue;
      const h = s[r][o];
      for (let l = 0; l < 2 * n; l++) s[r][l] -= h * s[o][l];
    }
  }
  return s.map((o) => o.slice(n));
}
function _n(t, n, s, o, e) {
  const c = it(12, 12), r = [[-V, -V], [V, -V], [V, V], [-V, V]];
  for (const [h, l] of r) {
    const { N: a, dNdxi: f, dNdeta: d } = Ht(h, l), { dNdx: i, dNdy: y, detJ: M } = Zt(f, d, t, n), p = new Array(12).fill(0);
    for (let g = 0; g < 4; g++) p[g * 3] = 0.5 * y[g], p[g * 3 + 1] = -0.5 * i[g], p[g * 3 + 2] = a[g];
    const b = e * s * o * Math.abs(M);
    for (let g = 0; g < 12; g++) for (let m = 0; m < 12; m++) c[g][m] += b * p[g] * p[m];
  }
  return c;
}
function An(t, n, s, o, e) {
  const c = it(12, 12), r = s * e * e * e / (12 * (1 - o * o)), l = 5 / 6 * s / (2 * (1 + o)) * e, a = [[-V, -V], [V, -V], [V, V], [-V, V]], f = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], d = [];
  for (const i of f) {
    const { N: y, dNdxi: M, dNdeta: p } = Ht(i.xi, i.eta), { dNdx: b, dNdy: g } = Zt(M, p, t, n), m = it(2, 12);
    for (let A = 0; A < 4; A++) m[0][A * 3] = b[A], m[0][A * 3 + 1] = -y[A], m[1][A * 3] = g[A], m[1][A * 3 + 2] = -y[A];
    d.push(m);
  }
  for (const [i, y] of a) {
    const { dNdxi: M, dNdeta: p } = Ht(i, y), { dNdx: b, dNdy: g, detJ: m } = Zt(M, p, t, n), A = it(3, 12);
    for (let v = 0; v < 4; v++) A[0][v * 3 + 1] = b[v], A[1][v * 3 + 2] = g[v], A[2][v * 3 + 1] = g[v], A[2][v * 3 + 2] = b[v];
    for (let v = 0; v < 12; v++) for (let Q = 0; Q < 12; Q++) {
      let ot = 0;
      ot += r * (A[0][v] * A[0][Q] + o * A[0][v] * A[1][Q] + o * A[1][v] * A[0][Q] + A[1][v] * A[1][Q]), ot += r * (1 - o) / 2 * A[2][v] * A[2][Q], c[v][Q] += ot * Math.abs(m);
    }
    const _ = it(2, 12), u = 0.5 * (1 - y), j = 0.5 * (1 + y), L = 0.5 * (1 - i), E = 0.5 * (1 + i);
    for (let v = 0; v < 12; v++) _[0][v] = u * d[0][0][v] + j * d[1][0][v], _[1][v] = L * d[2][1][v] + E * d[3][1][v];
    for (let v = 0; v < 12; v++) for (let Q = 0; Q < 12; Q++) c[v][Q] += l * (_[0][v] * _[0][Q] + _[1][v] * _[1][Q]) * Math.abs(m);
  }
  return c;
}
function wn(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n == null ? void 0 : n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n == null ? void 0 : n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0.2, c = ((_c = n == null ? void 0 : n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0;
  if (o === 0 || c === 0) return it(24, 24);
  const { localCoords: r } = hn(t), h = r.map((m) => m[0]), l = r.map((m) => m[1]), a = yn(h, l, o, e, c), f = An(h, l, o, e, c), d = o / (2 * (1 + e)), y = _n(h, l, d, c, 0.5), M = it(24, 24), p = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let m = 0; m < 8; m++) for (let A = 0; A < 8; A++) M[p[m]][p[A]] += a[m][A];
  const b = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let m = 0; m < 12; m++) for (let A = 0; A < 12; A++) M[b[m]][b[A]] += f[m][A];
  const g = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let m = 0; m < 12; m++) for (let A = 0; A < 12; A++) M[g[m]][g[A]] += y[m][A];
  return M;
}
function Yn(t) {
  const { localX: n, localY: s, localZ: o } = hn(t), e = [[n[0], n[1], n[2]], [s[0], s[1], s[2]], [o[0], o[1], o[2]]], c = it(24, 24);
  for (let r = 0; r < 4; r++) for (let h = 0; h < 2; h++) {
    const l = r * 6 + h * 3;
    for (let a = 0; a < 3; a++) for (let f = 0; f < 3; f++) c[l + a][l + f] = e[a][f];
  }
  return c;
}
function hn(t) {
  const n = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], s = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], o = cn(n, s), e = Math.sqrt(o[0] ** 2 + o[1] ** 2 + o[2] ** 2), c = o.map((M) => M / e), r = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], h = Math.sqrt(r[0] ** 2 + r[1] ** 2 + r[2] ** 2), l = r.map((M) => M / h), a = cn(c, l), f = t.map((M) => M[0]).reduce((M, p) => M + p) / 4, d = t.map((M) => M[1]).reduce((M, p) => M + p) / 4, i = t.map((M) => M[2]).reduce((M, p) => M + p) / 4, y = t.map((M) => {
    const p = M[0] - f, b = M[1] - d, g = M[2] - i;
    return [p * l[0] + b * l[1] + g * l[2], p * a[0] + b * a[1] + g * a[2]];
  });
  return { localX: l, localY: a, localZ: c, localCoords: y };
}
function cn(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function it(t, n) {
  return Array.from({ length: t }, () => Array(n).fill(0));
}
function en(t) {
  if (t.length === 2) return Xn(t);
  if (t.length === 3) return vn(t);
  if (t.length === 4) return Yn(t);
}
function Xn(t) {
  const n = ln(t[1], t[0]), s = Gt(n), o = tn(n, [1, 0, 0]) / s, e = tn(n, [0, 1, 0]) / s, c = tn(n, [0, 0, 1]) / s, r = Math.sqrt(o ** 2 + e ** 2);
  let h = [[o, e, c], [-e / r, o / r, 0], [-o * c / r, -e * c / r, r]];
  return c === 1 && (h = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), c === -1 && (h = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), pn(fn(4), h).toArray();
}
function vn(t) {
  const c = [t[0], t[1], t[2]], r = R(3, 3).toArray();
  for (let u = 0; u < 3; u++) for (let j = 0; j < 3; j++) r[u][j] = c[j][u];
  const h = [-1, 1, 0], l = [-1, 0, 1], a = R(3, 2).toArray();
  for (let u = 0; u < 3; u++) for (let j = 0; j < 3; j++) a[u][0] += r[u][j] * h[j], a[u][1] += r[u][j] * l[j];
  const f = a.map((u) => u[0]), d = a.map((u) => u[1]);
  let i = rn(f, d), y = Gt(i);
  if (y === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), R(18, 18).toArray();
  i = i.map((u) => u / y);
  const M = [...i], p = fn(3).toArray(), b = i[0];
  let g;
  if (Math.abs(b) > 1 - 1e-10) {
    const u = i[2];
    g = p.map((j, L) => j[2] - u * i[L]);
  } else g = p.map((u, j) => u[0] - b * i[j]);
  if (y = Gt(g), y === 0) return console.warn("Degenerate local X-axis detected."), R(18, 18).toArray();
  g = g.map((u) => u / y);
  let m = rn(M, g);
  if (y = Gt(m), y === 0) return console.warn("Degenerate local Y-axis detected."), R(18, 18).toArray();
  m = m.map((u) => u / y);
  const A = [g, m, M], _ = R(18, 18).toArray();
  for (let u = 0; u < 3; u++) {
    const j = u * 6, L = j + 3;
    for (let E = 0; E < 3; E++) for (let v = 0; v < 3; v++) _[j + E][j + v] = A[E][v], _[L + E][L + v] = A[E][v];
  }
  return _;
}
function Ot(t, n) {
  const s = [];
  for (let o = 0; o < t; o++) {
    const e = [];
    for (let c = 0; c < n; c++) e.push(0);
    s.push(e);
  }
  return s;
}
function lt(t, n) {
  const s = t.length, o = n[0].length, e = n.length, c = Ot(s, o);
  for (let r = 0; r < s; r++) for (let h = 0; h < o; h++) {
    let l = 0;
    for (let a = 0; a < e; a++) l += t[r][a] * n[a][h];
    c[r][h] = l;
  }
  return c;
}
function Wt(t, n) {
  const s = t.length, o = t[0].length, e = Ot(s, o);
  for (let c = 0; c < s; c++) for (let r = 0; r < o; r++) e[c][r] = t[c][r] + n[c][r];
  return e;
}
function $t(t, n) {
  const s = t.length, o = t[0].length, e = Ot(s, o);
  for (let c = 0; c < s; c++) for (let r = 0; r < o; r++) e[c][r] = t[c][r] * n;
  return e;
}
function nn(t) {
  const n = t.length, s = t[0].length, o = Ot(s, n);
  for (let e = 0; e < n; e++) for (let c = 0; c < s; c++) o[c][e] = t[e][c];
  return o;
}
function on(t) {
  return t[0][0] * t[1][1] - t[0][1] * t[1][0];
}
function Ut(t) {
  const n = on(t);
  return [[t[1][1] / n, -t[0][1] / n], [-t[1][0] / n, t[0][0] / n]];
}
function Sn(t) {
  const [n, s, o, e] = t, c = [s[0] - n[0], s[1] - n[1], s[2] - n[2]], r = [o[0] - n[0], o[1] - n[1], o[2] - n[2]], h = [e[0] - n[0], e[1] - n[1], e[2] - n[2]], l = Math.hypot(c[0], c[1], c[2]), a = [c[0] / l, c[1] / l, c[2] / l], f = [a[1] * r[2] - a[2] * r[1], a[2] * r[0] - a[0] * r[2], a[0] * r[1] - a[1] * r[0]], d = Math.hypot(f[0], f[1], f[2]), i = [f[0] / d, f[1] / d, f[2] / d], y = [i[1] * a[2] - i[2] * a[1], i[2] * a[0] - i[0] * a[2], i[0] * a[1] - i[1] * a[0]], M = (g, m) => g[0] * m[0] + g[1] * m[1] + g[2] * m[2], p = [0, M(c, a), M(r, a), M(h, a)], b = [0, M(c, y), M(r, y), M(h, y)];
  return { x: p, y: b };
}
function jt(t, n, s) {
  if (s === 5) return Math.hypot(t[1] - t[0], n[1] - n[0]);
  if (s === 6) return Math.hypot(t[2] - t[1], n[2] - n[1]);
  if (s === 7) return Math.hypot(t[3] - t[2], n[3] - n[2]);
  if (s === 8) return Math.hypot(t[0] - t[3], n[0] - n[3]);
  throw new Error("k debe ser 5..8");
}
function Tt(t, n, s) {
  const o = jt(t, n, s);
  if (s === 5) return [(t[1] - t[0]) / o, (n[1] - n[0]) / o];
  if (s === 6) return [(t[2] - t[1]) / o, (n[2] - n[1]) / o];
  if (s === 7) return [(t[3] - t[2]) / o, (n[3] - n[2]) / o];
  if (s === 8) return [(t[0] - t[3]) / o, (n[0] - n[3]) / o];
  throw new Error("k debe ser 5..8");
}
function zt(t, n, s, o, e) {
  return 2 / (0.8333333333333334 * (1 - e)) * Math.pow(o / jt(t, n, s), 2);
}
function Ft(t, n, s, o) {
  return [[0.25 * (t[0] * (o - 1) - t[1] * (o - 1) + t[2] * (o + 1) - t[3] * (o + 1)), 0.25 * (n[0] * (o - 1) - n[1] * (o - 1) + n[2] * (o + 1) - n[3] * (o + 1))], [0.25 * (t[0] * (s - 1) - t[1] * (s + 1) + t[2] * (s + 1) - t[3] * (s - 1)), 0.25 * (n[0] * (s - 1) - n[1] * (s + 1) + n[2] * (s + 1) - n[3] * (s - 1))]];
}
function xn(t, n) {
  return [[0.5 * (1 - n), 0, 0.5 * (1 + n), 0], [0, 0.5 * (1 + t), 0, 0.5 * (1 - t)]];
}
function Nn(t, n) {
  const s = jt(t, n, 5), o = jt(t, n, 6), e = jt(t, n, 7), c = jt(t, n, 8);
  return [[s / 2, 0, 0, 0], [0, o / 2, 0, 0], [0, 0, -e / 2, 0], [0, 0, 0, -c / 2]];
}
function gn(t, n) {
  const s = jt(t, n, 5), o = jt(t, n, 6), e = jt(t, n, 7), c = jt(t, n, 8), [r, h] = Tt(t, n, 5), [l, a] = Tt(t, n, 6), [f, d] = Tt(t, n, 7), [i, y] = Tt(t, n, 8);
  return $t([[-2 / s, r, h, 2 / s, r, h, 0, 0, 0, 0, 0, 0], [0, 0, 0, -2 / o, l, a, 2 / o, l, a, 0, 0, 0], [0, 0, 0, 0, 0, 0, -2 / e, f, d, 2 / e, f, d], [2 / c, i, y, 0, 0, 0, 0, 0, 0, -2 / c, i, y]], 0.5);
}
function Pn(t, n, s, o) {
  const e = zt(t, n, 5, s, o), c = zt(t, n, 6, s, o), r = zt(t, n, 7, s, o), h = zt(t, n, 8, s, o);
  return $t([[1 / (1 + e), 0, 0, 0], [0, 1 / (1 + c), 0, 0], [0, 0, 1 / (1 + r), 0], [0, 0, 0, 1 / (1 + h)]], -1.5);
}
function jn(t, n, s, o) {
  const e = zt(t, n, 5, s, o), c = zt(t, n, 6, s, o), r = zt(t, n, 7, s, o), h = zt(t, n, 8, s, o);
  return [[e / (1 + e), 0, 0, 0], [0, c / (1 + c), 0, 0], [0, 0, r / (1 + r), 0], [0, 0, 0, h / (1 + h)]];
}
function Dn(t, n, s, o) {
  const e = Ut(Ft(t, n, s, o)), [c, r] = e[0], [h, l] = e[1], a = 0.25 * (o - 1), f = -0.25 * (o - 1), d = 0.25 * (o + 1), i = -0.25 * (o + 1), y = 0.25 * (s - 1), M = -0.25 * (s + 1), p = 0.25 * (s + 1), b = -0.25 * (s - 1), g = [c * a + r * y, c * f + r * M, c * d + r * p, c * i + r * b], m = [h * a + l * y, h * f + l * M, h * d + l * p, h * i + l * b];
  return [[0, g[0], 0, 0, g[1], 0, 0, g[2], 0, 0, g[3], 0], [0, 0, m[0], 0, 0, m[1], 0, 0, m[2], 0, 0, m[3]], [0, m[0], g[0], 0, m[1], g[1], 0, m[2], g[2], 0, m[3], g[3]]];
}
function Qn(t, n, s, o) {
  const e = Ut(Ft(t, n, s, o)), [c, r] = e[0], [h, l] = e[1], a = s * (o - 1), f = -0.5 * (o - 1) * (o + 1), d = -s * (o + 1), i = 0.5 * (o - 1) * (o + 1), y = 0.5 * (s - 1) * (s + 1), M = -o * (s + 1), p = -0.5 * (s - 1) * (s + 1), b = o * (s - 1), g = [c * a + r * y, c * f + r * M, c * d + r * p, c * i + r * b], m = [h * a + l * y, h * f + l * M, h * d + l * p, h * i + l * b], [A, _] = Tt(t, n, 5), [u, j] = Tt(t, n, 6), [L, E] = Tt(t, n, 7), [v, Q] = Tt(t, n, 8);
  return [[g[0] * A, g[1] * u, g[2] * L, g[3] * v], [m[0] * _, m[1] * j, m[2] * E, m[3] * Q], [m[0] * A + g[0] * _, m[1] * u + g[1] * j, m[2] * L + g[2] * E, m[3] * v + g[3] * Q]];
}
function Cn(t, n, s, o, e, c) {
  return Wt(Dn(t, n, s, o), lt(lt(Qn(t, n, s, o), Pn(t, n, e, c)), gn(t, n)));
}
function kn(t, n, s, o, e, c) {
  return lt(lt(lt(lt(Ut(Ft(t, n, s, o)), xn(s, o)), Nn(t, n)), jn(t, n, e, c)), gn(t, n));
}
function Jn(t, n, s, o) {
  const e = Ut(Ft(t, n, s, o)), c = [[0.25 * (o - 1), 0.25 * (-o + 1), 0.25 * (o + 1), 0.25 * (-o - 1)], [0.25 * (s - 1), 0.25 * (-s - 1), 0.25 * (s + 1), 0.25 * (-s + 1)]], r = lt(e, c);
  return [[r[0][0], 0, r[0][1], 0, r[0][2], 0, r[0][3], 0], [0, r[1][0], 0, r[1][1], 0, r[1][2], 0, r[1][3]], [r[1][0], r[0][0], r[1][1], r[0][1], r[1][2], r[0][2], r[1][3], r[0][3]]];
}
function Kn(t, n, s) {
  const o = t * s ** 3 / (12 * (1 - n ** 2));
  return [[o, o * n, 0], [o * n, o, 0], [0, 0, o * (1 - n) / 2]];
}
function Ln(t, n, s) {
  const e = t * s * 0.8333333333333334 / (2 * (1 + n));
  return [[e, 0], [0, e]];
}
function Tn(t, n) {
  const s = t / (2 * (1 + n)), o = 1 / (1 - n * n);
  return [[o * t, o * n * t, 0], [o * n * t, o * t, 0], [0, 0, (1 - n * n) * s]];
}
function zn(t, n, s, o, e) {
  const c = Kn(o, e, s), r = Ln(o, e, s), h = 1 / Math.sqrt(3), l = [-h, h, h, -h], a = [-h, -h, h, h];
  let f = Ot(12, 12);
  for (let d = 0; d < 4; d++) {
    const i = on(Ft(t, n, l[d], a[d])), y = Cn(t, n, l[d], a[d], s, e), M = kn(t, n, l[d], a[d], s, e);
    f = Wt(f, $t(lt(lt(nn(y), c), y), i)), f = Wt(f, $t(lt(lt(nn(M), r), M), i));
  }
  return f;
}
function En(t, n, s, o, e) {
  const c = Tn(o, e), r = 1 / Math.sqrt(3), h = [-r, r, r, -r], l = [-r, -r, r, r];
  let a = Ot(8, 8);
  for (let f = 0; f < 4; f++) {
    const d = on(Ft(t, n, h[f], l[f])), i = Jn(t, n, h[f], l[f]);
    a = Wt(a, $t(lt(lt(nn(i), c), i), d * s));
  }
  return a;
}
function Bn(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0, c = ((_c = n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0, { x: r, y: h } = Sn(t), l = zn(r, h, c, o, e), a = En(r, h, c, o, e), f = Ot(24, 24), d = (b) => [0, 3, 6, 9].includes(b) ? 2 * b + 2 : [1, 4, 7, 10].includes(b) ? 2 * b + 1 : 2 * b;
  for (let b = 0; b < 12; b++) for (let g = 0; g < 12; g++) f[d(b)][d(g)] = l[b][g];
  const i = [1, 2, 4, 5, 7, 8, 10, 11].map((b) => Math.abs(l[b][b])), y = Math.min(...i) / 1e3;
  f[5][5] = y, f[11][11] = y, f[17][17] = y, f[23][23] = y;
  for (const b of [4, 10, 16, 22]) for (let g = 0; g < 24; g++) f[b][g] *= -1, f[g][b] *= -1;
  const M = (b, g, m) => {
    const A = b[g];
    b[g] = b[m], b[m] = A;
    for (let _ = 0; _ < b.length; _++) {
      const u = b[_][g];
      b[_][g] = b[_][m], b[_][m] = u;
    }
  };
  M(f, 3, 4), M(f, 9, 10), M(f, 15, 16), M(f, 21, 22);
  const p = (b) => Math.floor(b / 2) * 6 + b % 2;
  for (let b = 0; b < 8; b++) for (let g = 0; g < 8; g++) f[p(b)][p(g)] += a[b][g];
  return f;
}
function qn(t, n, s) {
  var _a, _b;
  if (t.length === 2) {
    let o = Fn(t, n, s);
    const e = (_a = n == null ? void 0 : n.partialFixitySprings) == null ? void 0 : _a.get(s);
    e && (o = Rn(o, e));
    const c = (_b = n == null ? void 0 : n.momentReleases) == null ? void 0 : _b.get(s);
    return c && (o = On(o, c)), o;
  }
  if (t.length === 3) return Gn(t, n, s);
  if (t.length === 4) {
    try {
      const o = typeof window < "u" ? window : globalThis;
      if (o && o.__hekatanShellFormulation === "DKMQ") return Bn(t, n, s);
    } catch {
    }
    return wn(t, n, s);
  }
}
function Rn(t, n) {
  const s = t.map((e) => [...e]), o = Math.min(n.length, 12);
  for (let e = 0; e < o; e++) n[e] > 1e-12 && (s[e][e] += n[e]);
  return s;
}
function On(t, n) {
  const s = [];
  if (n.length >= 12) for (let M = 0; M < 12; M++) n[M] && s.push(M);
  else {
    const M = [3, 4, 5, 9, 10, 11];
    for (let p = 0; p < Math.min(n.length, 6); p++) n[p] && s.push(M[p]);
  }
  if (s.length === 0) return t;
  const o = t.length, e = [];
  for (let M = 0; M < o; M++) s.includes(M) || e.push(M);
  const c = e.length, r = s.length, h = Array.from({ length: r }, (M, p) => Array.from({ length: r }, (b, g) => t[s[p]][s[g]])), l = Array.from({ length: c }, (M, p) => Array.from({ length: r }, (b, g) => t[e[p]][s[g]])), a = Array.from({ length: r }, (M, p) => Array.from({ length: c }, (b, g) => t[s[p]][e[g]])), f = Zn(h);
  if (!f) return t;
  const d = an(l, f), i = an(d, a), y = Array.from({ length: o }, () => Array(o).fill(0));
  for (let M = 0; M < c; M++) for (let p = 0; p < c; p++) y[e[M]][e[p]] = t[e[M]][e[p]] - i[M][p];
  return y;
}
function an(t, n) {
  const s = t.length, o = n[0].length, e = n.length, c = Array.from({ length: s }, () => Array(o).fill(0));
  for (let r = 0; r < s; r++) for (let h = 0; h < o; h++) for (let l = 0; l < e; l++) c[r][h] += t[r][l] * n[l][h];
  return c;
}
function Zn(t) {
  const n = t.length, s = t.map((o, e) => {
    const c = [...o];
    for (let r = 0; r < n; r++) c.push(e === r ? 1 : 0);
    return c;
  });
  for (let o = 0; o < n; o++) {
    let e = o;
    for (let r = o + 1; r < n; r++) Math.abs(s[r][o]) > Math.abs(s[e][o]) && (e = r);
    if ([s[o], s[e]] = [s[e], s[o]], Math.abs(s[o][o]) < 1e-15) return null;
    const c = s[o][o];
    for (let r = 0; r < 2 * n; r++) s[o][r] /= c;
    for (let r = 0; r < n; r++) {
      if (r === o) continue;
      const h = s[r][o];
      for (let l = 0; l < 2 * n; l++) s[r][l] -= h * s[o][l];
    }
  }
  return s.map((o) => o.slice(n));
}
function Fn(t, n, s) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const o = ((_a = n == null ? void 0 : n.momentsOfInertiaZ) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n == null ? void 0 : n.momentsOfInertiaY) == null ? void 0 : _b.get(s)) ?? 0, c = ((_c = n == null ? void 0 : n.elasticities) == null ? void 0 : _c.get(s)) ?? 0, r = ((_d = n == null ? void 0 : n.areas) == null ? void 0 : _d.get(s)) ?? 0, h = ((_e = n == null ? void 0 : n.shearModuli) == null ? void 0 : _e.get(s)) ?? 0, l = ((_f = n == null ? void 0 : n.torsionalConstants) == null ? void 0 : _f.get(s)) ?? 0, a = Gt(ln(t[0], t[1]));
  let f = ((_g = n == null ? void 0 : n.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, d = ((_h = n == null ? void 0 : n.shearAreasZ) == null ? void 0 : _h.get(s)) ?? 0;
  f === 0 && d === 0 && r > 0 && h > 0 && (f = d = 5 / 6 * r);
  const i = d > 0 && h > 0 ? 12 * c * o / (h * d * a ** 2) : 0, y = f > 0 && h > 0 ? 12 * c * e / (h * f * a ** 2) : 0, M = c * r / a, p = h * l / a, b = 12 * c * o / a ** 3 / (1 + i), g = 6 * c * o / a ** 2 / (1 + i), m = 4 * c * o / a * (1 + i / 4) / (1 + i), A = 2 * c * o / a * (1 - i / 2) / (1 + i), _ = 12 * c * e / a ** 3 / (1 + y), u = 6 * c * e / a ** 2 / (1 + y), j = 4 * c * e / a * (1 + y / 4) / (1 + y), L = 2 * c * e / a * (1 - y / 2) / (1 + y);
  return [[M, 0, 0, 0, 0, 0, -M, 0, 0, 0, 0, 0], [0, b, 0, 0, 0, g, 0, -b, 0, 0, 0, g], [0, 0, _, 0, -u, 0, 0, 0, -_, 0, -u, 0], [0, 0, 0, p, 0, 0, 0, 0, 0, -p, 0, 0], [0, 0, -u, 0, j, 0, 0, 0, u, 0, L, 0], [0, g, 0, 0, 0, m, 0, -g, 0, 0, 0, A], [-M, 0, 0, 0, 0, 0, M, 0, 0, 0, 0, 0], [0, -b, 0, 0, 0, -g, 0, b, 0, 0, 0, -g], [0, 0, -_, 0, u, 0, 0, 0, _, 0, u, 0], [0, 0, 0, -p, 0, 0, 0, 0, 0, p, 0, 0], [0, 0, -u, 0, L, 0, 0, 0, u, 0, j, 0], [0, g, 0, 0, 0, A, 0, -g, 0, 0, 0, m]];
}
function Gn(t, n, s) {
  var _a, _b, _c, _d, _e;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.elasticitiesOrthogonal) == null ? void 0 : _b.get(s)) ?? 0, c = ((_c = n.poissonsRatios) == null ? void 0 : _c.get(s)) ?? 0, r = ((_d = n.shearModuli) == null ? void 0 : _d.get(s)) ?? 0, h = ((_e = n.thicknesses) == null ? void 0 : _e.get(s)) ?? 0, l = e > 0, a = l ? F(o, e, r, c, h) : Q(o, c, h), f = l ? rt(r, h) : ot(o, c, h), d = l ? un(o, e, r, c) : Mn(o, c), i = t.map(([S, X]) => [S, X]), y = i[1][0] - i[0][0], M = i[2][0] - i[0][0], p = i[0][1] - i[1][1], b = i[2][1] - i[0][1], g = 0.5 * (y * b - M * -p), m = st(i), A = wt(i), _ = Yt(i, d, h), u = z(z(Lt(m), f), m), j = z(z(Lt(A), a), A), L = R(18, 18).toArray(), E = z(Rt(u, j), g), v = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let S = 0; S < 3; S++) for (let X = 0; X < 3; X++) for (let x = 0; x < 3; x++) {
    const Y = v[S][X], P = v[x][X];
    L[Y][P] = _[S * 3 + X][x * 3 + X];
  }
  for (let S = 0; S < 18; S++) for (let X = 0; X < 18; X++) L[S][X] = (L[S][X] ?? 0) + E.get([S, X]);
  return L;
  function Q(S, X, x) {
    const Y = S / (1 - X * X), P = T([[Y, Y * X, 0], [Y * X, Y, 0], [0, 0, Y * (1 - X) / 2]]);
    return z(x ** 3 / 12, P);
  }
  function ot(S, X, x) {
    const Y = 0.8333333333333334, P = S / (2 * (1 + X)), K = Y * P * x;
    return T([[K, 0], [0, K]]);
  }
  function F(S, X, x, Y, P) {
    const K = X * Y / S, D = 1 - Y * K, k = S / D, G = X / D, H = Y * X / D, J = T([[k, H, 0], [H, G, 0], [0, 0, x]]);
    return z(P ** 3 / 12, J);
  }
  function rt(S, X) {
    const Y = 0.8333333333333334 * S * X;
    return T([[Y, 0], [0, Y]]);
  }
  function st(S) {
    const X = R(2, 18).toArray(), [x, Y] = S[0], [P, K] = S[1], [D, k] = S[2], G = 0.5 * ((P - x) * (k - Y) - (D - x) * -(Y - K)), H = (x + P + D) / 3, W = (Y + K + k) / 3, J = [H, x, P], nt = [W, Y, K], ct = [H, P, D], I = [W, K, k], et = [H, D, x], bt = [W, k, Y], Z = 1 / 3, [ft, ht, gt, Jt] = at(J, nt), [yt, Dt, Qt, Et] = at(ct, I), [Ct, Kt, Bt, qt] = at(et, bt), dt = R(2, 18).toArray(), Xt = R(2, 18).toArray(), vt = R(2, 18).toArray();
    for (let C = 0; C < 2; C++) for (let N = 0; N < 6; N++) dt[C][N] = Z * ft[C][N] + ht[C][N], dt[C][N + 6] = Z * ft[C][N] + gt[C][N], dt[C][N + 12] = Z * ft[C][N], Xt[C][N] = Z * yt[C][N], Xt[C][N + 6] = Z * yt[C][N] + Dt[C][N], Xt[C][N + 12] = Z * yt[C][N] + Qt[C][N], vt[C][N] = Z * Ct[C][N] + Bt[C][N], vt[C][N + 6] = Z * Ct[C][N], vt[C][N + 12] = Z * Ct[C][N] + Kt[C][N];
    for (let C = 0; C < 2; C++) for (let N = 0; N < 18; N++) dt[C][N] *= Jt, Xt[C][N] *= Et, vt[C][N] *= qt, X[C][N] = (dt[C][N] + Xt[C][N] + vt[C][N]) / G;
    return X;
  }
  function at(S, X) {
    const x = R(2, 6).toArray(), Y = R(2, 6).toArray(), P = R(2, 6).toArray(), K = S[1] - S[0], D = S[0] - S[2], k = X[2] - X[0], G = X[0] - X[1], H = S[2] - S[1], W = X[1] - X[2], J = 0.5 * (K * k - D * G), nt = 0.5 * G * D, ct = 0.5 * k * K, I = 0.5 * K * D, et = 0.5 * G * k;
    return x[0][2] = 0.5 * H / J, x[0][3] = -0.5, x[1][2] = 0.5 * W / J, x[1][4] = 0.5, Y[0][2] = 0.5 * D / J, Y[0][3] = 0.5 * nt / J, Y[0][4] = 0.5 * I / J, Y[1][2] = 0.5 * k / J, Y[1][3] = 0.5 * et / J, Y[1][4] = 0.5 * ct / J, P[0][2] = 0.5 * K / J, P[0][3] = -0.5 * ct / J, P[0][4] = -0.5 * I / J, P[1][2] = 0.5 * G / J, P[1][3] = -0.5 * et / J, P[1][4] = -0.5 * nt / J, [x, Y, P, J];
  }
  function wt(S) {
    const X = R(3, 18).toArray(), [x, Y] = S[0], [P, K] = S[1], [D, k] = S[2], G = P - x, H = D - x, W = D - P, J = K - k, nt = k - Y, ct = Y - K, I = 0.5 * (G * nt - H * -ct), et = J / (2 * I), bt = W / (2 * I), Z = nt / (2 * I), ft = -H / (2 * I), ht = ct / (2 * I), gt = G / (2 * I);
    return X[0][4] = et, X[0][10] = Z, X[0][16] = ht, X[1][3] = -bt, X[1][9] = -ft, X[1][15] = -gt, X[2][3] = -et, X[2][4] = bt, X[2][9] = -Z, X[2][10] = ft, X[2][15] = -ht, X[2][16] = gt, X;
  }
  function Yt(S, X, x) {
    let Y = R(9, 9).toArray(), P = R(9, 9).toArray(), K = R(9, 9).toArray(), D = R(9, 3).toArray(), k = R(3, 9).toArray(), G = R(3, 3).toArray(), H = R(3, 3).toArray(), W = R(3, 3).toArray(), J = R(3, 3).toArray(), nt = R(3, 3).toArray(), ct = R(3, 3).toArray(), I = R(3, 3).toArray(), et = R(3, 3).toArray();
    const bt = 1 / 8, Z = bt / 6, ft = bt ** 2 / 4, ht = 1, gt = 2, Jt = 1, yt = 0, Dt = 1, Qt = -1, Et = -1, Ct = -1, Kt = -2, Bt = S[0][0], qt = S[0][1], dt = S[1][0], Xt = S[1][1], vt = S[2][0], C = S[2][1], N = Bt - dt, St = dt - vt, xt = vt - Bt, _t = qt - Xt, Nt = Xt - C, Pt = C - qt, Mt = -N, At = -St, w = -xt, B = -_t, $ = -Nt, q = -Pt, Vt = 0.5 * (Mt * Pt - xt * -_t), mn = 2 * Vt, tt = 4 * Vt, U = 0.5 * x, sn = Vt * x, ut = Mt ** 2 + B ** 2, mt = At ** 2 + $ ** 2, pt = w ** 2 + q ** 2;
    D[0][0] = U * Nt, D[0][2] = U * At, D[1][1] = U * At, D[1][2] = U * Nt, D[2][0] = U * Nt * (q - B) * Z, D[2][1] = U * At * (xt - N) * Z, D[2][2] = U * (xt * q - N * B) * 2 * Z, D[3][0] = U * Pt, D[3][2] = U * w, D[4][1] = U * w, D[4][2] = U * Pt, D[5][0] = U * Pt * (B - $) * Z, D[5][1] = U * w * (N - St) * Z, D[5][2] = U * (N * B - St * $) * 2 * Z, D[6][0] = U * _t, D[6][2] = U * Mt, D[7][1] = U * Mt, D[7][2] = U * _t, D[8][0] = U * _t * ($ - q) * Z, D[8][1] = U * Mt * (St - xt) * Z, D[8][2] = U * (St * $ - xt * q) * 2 * Z, K = z(z(T(D), X), Lt(T(D))).toArray(), K = z(T(K), 1 / sn).toArray(), k[0][0] = At / tt, k[0][1] = $ / tt, k[0][2] = 1, k[0][3] = w / tt, k[0][4] = q / tt, k[0][6] = Mt / tt, k[0][7] = B / tt, k[1][0] = At / tt, k[1][1] = $ / tt, k[1][3] = w / tt, k[1][4] = q / tt, k[1][5] = 1, k[1][6] = Mt / tt, k[1][7] = B / tt, k[2][0] = At / tt, k[2][1] = $ / tt, k[2][3] = w / tt, k[2][4] = q / tt, k[2][6] = Mt / tt, k[2][7] = B / tt, k[2][8] = 1;
    const kt = 1 / (Vt * tt);
    G[0][0] = kt * Nt * q * ut, G[0][1] = kt * Pt * B * mt, G[0][2] = kt * _t * $ * pt, G[1][0] = kt * St * w * ut, G[1][1] = kt * xt * Mt * mt, G[1][2] = kt * N * At * pt, G[2][0] = kt * (Nt * xt + At * q) * ut, G[2][1] = kt * (Pt * N + w * B) * mt, G[2][2] = kt * (_t * St + Mt * $) * pt;
    const O = mn / 3;
    H[0][0] = O * ht / ut, H[0][1] = O * gt / ut, H[0][2] = O * Jt / ut, H[1][0] = O * yt / mt, H[1][1] = O * Dt / mt, H[1][2] = O * Qt / mt, H[2][0] = O * Et / pt, H[2][1] = O * Ct / pt, H[2][2] = O * Kt / pt, W[0][0] = O * Kt / ut, W[0][1] = O * Et / ut, W[0][2] = O * Ct / ut, W[1][0] = O * Jt / mt, W[1][1] = O * ht / mt, W[1][2] = O * gt / mt, W[2][0] = O * Qt / pt, W[2][1] = O * yt / pt, W[2][2] = O * Dt / pt, J[0][0] = O * Dt / ut, J[0][1] = O * Qt / ut, J[0][2] = O * yt / ut, J[1][0] = O * Ct / mt, J[1][1] = O * Kt / mt, J[1][2] = O * Et / mt, J[2][0] = O * gt / pt, J[2][1] = O * Jt / pt, J[2][2] = O * ht / pt, nt = z(Rt(T(H), T(W)), 0.5).toArray(), ct = z(Rt(T(W), T(J)), 0.5).toArray(), I = z(Rt(T(J), T(H)), 0.5).toArray();
    const It = z(z(Lt(T(G)), X), T(G));
    return et = Rt(Rt(z(z(Lt(T(nt)), It), T(nt)), z(z(Lt(T(ct)), It), T(ct))), z(z(Lt(T(I)), It), T(I))).toArray(), et = z(T(et), 3 / 4 * ft * sn).toArray(), P = z(z(Lt(T(k)), T(et)), T(k)).toArray(), Y = Rt(T(K), T(P)).toArray(), Y;
  }
}
function Mn(t, n) {
  const s = t / (1 - n * n);
  return T([[s, s * n, 0], [s * n, s, 0], [0, 0, s * (1 - n) / 2]]);
}
function un(t, n, s, o) {
  const e = n * o / t, c = 1 - o * e, r = t / c, h = n / c, l = o * n / c;
  return T([[r, l, 0], [l, h, 0], [0, 0, s]]);
}
function oo(t, n, s, o) {
  const e = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map(), membranePrincipalMax: /* @__PURE__ */ new Map(), membranePrincipalMin: /* @__PURE__ */ new Map(), bendingPrincipalMax: /* @__PURE__ */ new Map(), bendingPrincipalMin: /* @__PURE__ */ new Map(), transverseShearMax: /* @__PURE__ */ new Map() }, c = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map(), membranePrincipalMax: /* @__PURE__ */ new Map(), membranePrincipalMin: /* @__PURE__ */ new Map(), bendingPrincipalMax: /* @__PURE__ */ new Map(), bendingPrincipalMin: /* @__PURE__ */ new Map(), transverseShearMax: /* @__PURE__ */ new Map() }, r = (l, a, f) => {
    const d = (l + a) / 2, i = Math.sqrt(((l - a) / 2) ** 2 + f ** 2);
    return { max: d + i, min: d - i };
  };
  n.forEach((l, a) => {
    var _a;
    const f = l.map((i) => t[i]), d = l.reduce((i, y) => {
      var _a2;
      const M = (_a2 = o.deformations) == null ? void 0 : _a2.get(y);
      return i.concat(M ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (l.length === 2) {
      const i = en(f), y = z(i, d), M = qn(f, s, a);
      let p = z(M, y);
      e.normals.set(a, [p[0], p[6]]), e.shearsY.set(a, [p[1], p[7]]), e.shearsZ.set(a, [p[2], p[8]]), e.torsions.set(a, [p[3], p[9]]), e.bendingsY.set(a, [p[4], p[10]]), e.bendingsZ.set(a, [p[5], p[11]]);
    } else if (l.length === 4) {
      const i = Hn(f, d, s, a);
      c.membraneXX.set(a, i.Nx), c.membraneYY.set(a, i.Ny), c.membraneXY.set(a, i.Nxy), c.bendingXX.set(a, i.Mx), c.bendingYY.set(a, i.My), c.bendingXY.set(a, i.Mxy), c.tranverseShearX.set(a, i.Qx), c.tranverseShearY.set(a, i.Qy), c.vonMises.set(a, i.vonMises);
      const y = r(i.Nx, i.Ny, i.Nxy), M = r(i.Mx, i.My, i.Mxy);
      c.membranePrincipalMax.set(a, y.max), c.membranePrincipalMin.set(a, y.min), c.bendingPrincipalMax.set(a, M.max), c.bendingPrincipalMin.set(a, M.min), c.transverseShearMax.set(a, Math.sqrt(i.Qx ** 2 + i.Qy ** 2));
    } else if (l.length === 3) {
      const i = en(f);
      z(i, d);
      const y = $n(s, a), M = Vn(f), p = Wn(d), b = Un(f), m = z(1 / (2 * b), z(z(y, M), p)).toArray(), A = ((_a = s.thicknesses) == null ? void 0 : _a.get(a)) ?? 1, _ = m[0][0] * A, u = m[1][0] * A, j = m[2][0] * A, L = m[0][1] * (A ** 3 / 12), E = m[1][1] * (A ** 3 / 12), v = m[2][1] * (A ** 3 / 12);
      c.membraneXX.set(a, _), c.membraneYY.set(a, u), c.membraneXY.set(a, j), c.bendingXX.set(a, L), c.bendingYY.set(a, E), c.bendingXY.set(a, v);
      const Q = r(_, u, j), ot = r(L, E, v);
      c.membranePrincipalMax.set(a, Q.max), c.membranePrincipalMin.set(a, Q.min), c.bendingPrincipalMax.set(a, ot.max), c.bendingPrincipalMin.set(a, ot.min), c.transverseShearMax.set(a, 0);
    }
  });
  const { nodeToCentroidElementIndiciesMap: h } = In(t, n);
  return n.forEach((l, a) => {
    if (l.length !== 3 && l.length !== 4) return;
    const f = l.length, d = new Array(f).fill(0), i = new Array(f).fill(0), y = new Array(f).fill(0), M = new Array(f).fill(0), p = new Array(f).fill(0), b = new Array(f).fill(0), g = new Array(f).fill(0), m = new Array(f).fill(0), A = new Array(f).fill(0), _ = new Array(f).fill(0), u = new Array(f).fill(0), j = new Array(f).fill(0), L = new Array(f).fill(0), E = new Array(f).fill(0);
    l.forEach((v, Q) => {
      const ot = h.get(v) || [], F = (rt) => bn(ot.map((st) => rt.get(st) ?? 0));
      d[Q] = F(c.membraneXX), i[Q] = F(c.membraneYY), y[Q] = F(c.membraneXY), M[Q] = F(c.bendingXX), p[Q] = F(c.bendingYY), b[Q] = F(c.bendingXY), g[Q] = F(c.tranverseShearX), m[Q] = F(c.tranverseShearY), _[Q] = F(c.membranePrincipalMax), u[Q] = F(c.membranePrincipalMin), j[Q] = F(c.bendingPrincipalMax), L[Q] = F(c.bendingPrincipalMin), E[Q] = F(c.transverseShearMax), A[Q] = F(c.vonMises);
    }), e.membraneXX.set(a, d), e.membraneYY.set(a, i), e.membraneXY.set(a, y), e.bendingXX.set(a, M), e.bendingYY.set(a, p), e.bendingXY.set(a, b), e.tranverseShearX.set(a, g), e.tranverseShearY.set(a, m), e.vonMises.set(a, A), e.membranePrincipalMax.set(a, _), e.membranePrincipalMin.set(a, u), e.bendingPrincipalMax.set(a, j), e.bendingPrincipalMin.set(a, L), e.transverseShearMax.set(a, E);
  }), e;
}
function Hn(t, n, s, o) {
  var _a, _b, _c;
  const e = ((_a = s.elasticities) == null ? void 0 : _a.get(o)) ?? 0, c = ((_b = s.poissonsRatios) == null ? void 0 : _b.get(o)) ?? 0, r = ((_c = s.thicknesses) == null ? void 0 : _c.get(o)) ?? 1, h = t[0], l = t[1], a = t[2], f = t[3], d = [l[0] - h[0], l[1] - h[1], l[2] - h[2]], i = [a[0] - f[0], a[1] - f[1], a[2] - f[2]];
  let y = [d[0] + i[0], d[1] + i[1], d[2] + i[2]], M = Math.sqrt(y[0] * y[0] + y[1] * y[1] + y[2] * y[2]);
  M < 1e-14 && (M = 1);
  let p = [y[0] / M, y[1] / M, y[2] / M];
  const b = [a[0] - h[0], a[1] - h[1], a[2] - h[2]], g = [f[0] - l[0], f[1] - l[1], f[2] - l[2]];
  let m = [b[1] * g[2] - b[2] * g[1], b[2] * g[0] - b[0] * g[2], b[0] * g[1] - b[1] * g[0]], A = Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
  A < 1e-14 && (A = 1);
  let _ = [m[0] / A, m[1] / A, m[2] / A], u = [_[1] * p[2] - _[2] * p[1], _[2] * p[0] - _[0] * p[2], _[0] * p[1] - _[1] * p[0]], j = Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2]);
  j < 1e-14 && (j = 1), u = [u[0] / j, u[1] / j, u[2] / j], p = [u[1] * _[2] - u[2] * _[1], u[2] * _[0] - u[0] * _[2], u[0] * _[1] - u[1] * _[0]];
  const L = 0.25 * (h[0] + l[0] + a[0] + f[0]), E = 0.25 * (h[1] + l[1] + a[1] + f[1]), v = 0.25 * (h[2] + l[2] + a[2] + f[2]), Q = [], ot = [];
  for (let w = 0; w < 4; w++) {
    const B = t[w][0] - L, $ = t[w][1] - E, q = t[w][2] - v;
    Q.push(B * p[0] + $ * p[1] + q * p[2]), ot.push(B * u[0] + $ * u[1] + q * u[2]);
  }
  const F = [p, u, _], rt = new Array(24).fill(0);
  for (let w = 0; w < 4; w++) {
    const B = w * 6, $ = w * 6;
    for (let q = 0; q < 3; q++) rt[$ + q] = F[q][0] * n[B] + F[q][1] * n[B + 1] + F[q][2] * n[B + 2];
    for (let q = 0; q < 3; q++) rt[$ + 3 + q] = F[q][0] * n[B + 3] + F[q][1] * n[B + 4] + F[q][2] * n[B + 5];
  }
  const st = e / (1 - c * c), at = [[st * r, st * c * r, 0], [st * c * r, st * r, 0], [0, 0, st * (1 - c) / 2 * r]], wt = r * r * r / 12, Yt = [[st * wt, st * c * wt, 0], [st * c * wt, st * wt, 0], [0, 0, st * (1 - c) / 2 * wt]], S = [-0.25, 0.25, 0.25, -0.25], X = [-0.25, -0.25, 0.25, 0.25];
  let x = 0, Y = 0, P = 0, K = 0;
  for (let w = 0; w < 4; w++) x += S[w] * Q[w], Y += S[w] * ot[w], P += X[w] * Q[w], K += X[w] * ot[w];
  const D = x * K - Y * P;
  if (Math.abs(D) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  const k = K / D, G = -Y / D, H = -P / D, W = x / D, J = [], nt = [];
  for (let w = 0; w < 4; w++) J.push(k * S[w] + G * X[w]), nt.push(H * S[w] + W * X[w]);
  let ct = 0, I = 0, et = 0;
  for (let w = 0; w < 4; w++) {
    const B = rt[w * 6 + 0], $ = rt[w * 6 + 1];
    ct += J[w] * B, I += nt[w] * $, et += nt[w] * B + J[w] * $;
  }
  const bt = at[0][0] * ct + at[0][1] * I, Z = at[1][0] * ct + at[1][1] * I, ft = at[2][2] * et;
  let ht = 0, gt = 0, Jt = 0;
  for (let w = 0; w < 4; w++) {
    const B = rt[w * 6 + 3], $ = rt[w * 6 + 4];
    ht += -J[w] * $, gt += +nt[w] * B, Jt += +J[w] * B - nt[w] * $;
  }
  const yt = Yt[0][0] * ht + Yt[0][1] * gt, Dt = Yt[1][0] * ht + Yt[1][1] * gt, Qt = Yt[2][2] * Jt, Et = 5 / 6, Ct = e / (2 * (1 + c)), Kt = Et * Ct * r;
  let Bt = 0, qt = 0;
  const dt = [0.25, 0.25, 0.25, 0.25];
  for (let w = 0; w < 4; w++) {
    const B = rt[w * 6 + 2], $ = rt[w * 6 + 3], q = rt[w * 6 + 4];
    Bt += J[w] * B + dt[w] * $, qt += nt[w] * B + dt[w] * q;
  }
  const Xt = Kt * Bt, vt = Kt * qt, C = bt / r + 6 * yt / (r * r), N = Z / r + 6 * Dt / (r * r), St = ft / r + 6 * Qt / (r * r), xt = Math.sqrt(C * C - C * N + N * N + 3 * St * St), _t = bt / r - 6 * yt / (r * r), Nt = Z / r - 6 * Dt / (r * r), Pt = ft / r - 6 * Qt / (r * r), Mt = Math.sqrt(_t * _t - _t * Nt + Nt * Nt + 3 * Pt * Pt), At = Math.max(xt, Mt);
  return { Nx: bt, Ny: Z, Nxy: ft, Mx: yt, My: Dt, Mxy: Qt, Qx: Xt, Qy: vt, vonMises: At };
}
function $n(t, n) {
  var _a, _b, _c, _d, _e;
  const s = ((_a = t.elasticities) == null ? void 0 : _a.get(n)) ?? 0, o = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, e = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, c = ((_d = t.shearModuli) == null ? void 0 : _d.get(n)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(n), o > 0 ? un(s, o, c, e) : Mn(s, e);
}
function Vn(t) {
  const [n, s] = t[0], [o, e] = t[1], [c, r] = t[2], h = e - r, l = r - s, a = s - e, f = c - o, d = n - c, i = o - n;
  return T([[h, l, a, 0, 0, 0], [0, 0, 0, f, d, i], [f, d, i, h, l, a]]);
}
function Wn(t) {
  const [n, s, o] = [t[0], t[6], t[12]], [e, c, r] = [t[1], t[7], t[13]], [h, l, a] = [t[4], t[10], t[16]], [f, d, i] = [t[3], t[9], t[15]];
  return T([[n, -h], [s, -l], [o, -a], [e, f], [c, d], [r, i]]);
}
function Un(t) {
  const [n, s] = t[0], [o, e] = t[1], [c, r] = t[2], h = o - n, l = c - n, a = r - s, f = s - e;
  return 0.5 * (h * a - l * -f);
}
function In(t, n) {
  const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return n.forEach((e, c) => {
    const r = e.map((l) => t[l]), h = to(r);
    e.forEach((l) => {
      var _a, _b;
      s.has(l) || s.set(l, []), (_a = s.get(l)) == null ? void 0 : _a.push(h), o.has(l) || o.set(l, []), (_b = o.get(l)) == null ? void 0 : _b.push(c);
    });
  }), { nodeToCentroidNodesMap: s, nodeToCentroidElementIndiciesMap: o };
}
function to(t) {
  const n = t.reduce((e, c) => e + c[0], 0) / t.length, s = t.reduce((e, c) => e + c[1], 0) / t.length, o = t.reduce((e, c) => e + c[2], 0) / t.length;
  return [n, s, o];
}
export {
  oo as a,
  en as b,
  qn as g
};
