import { s as ln, n as Gt, b as tn, k as Mn, i as fn, z as P, c as cn, m as z, t as Tt, a as Ot, e as L, f as bn } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const $ = 1 / Math.sqrt(3);
function Ht(t, n) {
  const s = [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)], o = [-0.25 * (1 - n), 0.25 * (1 - n), 0.25 * (1 + n), -0.25 * (1 + n)], e = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: s, dNdxi: o, dNdeta: e };
}
function qt(t, n, s, o) {
  let e = 0, r = 0, c = 0, i = 0;
  for (let g = 0; g < 4; g++) e += t[g] * s[g], r += t[g] * o[g], c += n[g] * s[g], i += n[g] * o[g];
  const a = e * i - r * c, l = 1 / a, m = [], M = [];
  for (let g = 0; g < 4; g++) m.push(l * (i * t[g] - r * n[g])), M.push(l * (-c * t[g] + e * n[g]));
  return { dNdx: m, dNdy: M, detJ: a };
}
function dn(t, n, s, o, e) {
  const a = rt(12, 12), l = s * e / (1 - o * o), m = [[-$, -$], [$, -$], [$, $], [-$, $]], { dNdxi: M, dNdeta: g } = Ht(0, 0), { detJ: _ } = qt(M, g, t, n);
  for (const [b, u] of m) {
    const { dNdxi: N, dNdeta: T } = Ht(b, u), { dNdx: R, dNdy: v, detJ: q } = qt(N, T, t, n);
    qt(M, g, t, n);
    const pt = M.reduce((X, x, K) => X + x * t[K], 0), Yt = M.reduce((X, x, K) => X + x * n[K], 0), et = g.reduce((X, x, K) => X + x * t[K], 0), st = g.reduce((X, x, K) => X + x * n[K], 0), ct = 1 / _, At = ct * st * (-2 * b), Xt = ct * -et * (-2 * b), S = ct * -Yt * (-2 * u), w = ct * pt * (-2 * u), j = [[], [], []];
    for (let X = 0; X < 4; X++) j[0].push(R[X], 0), j[1].push(0, v[X]), j[2].push(v[X], R[X]);
    j[0].push(At, 0, S, 0), j[1].push(0, Xt, 0, w), j[2].push(Xt, At, w, S);
    for (let X = 0; X < 12; X++) for (let x = 0; x < 12; x++) {
      let K = 0;
      K += l * (j[0][X] * j[0][x] + o * j[0][X] * j[1][x] + o * j[1][X] * j[0][x] + j[1][X] * j[1][x]), K += l * (1 - o) / 2 * j[2][X] * j[2][x], a[X][x] += K * Math.abs(q);
    }
  }
  const h = rt(8, 8), y = rt(8, 4), d = rt(4, 8), f = rt(4, 4);
  for (let b = 0; b < 8; b++) for (let u = 0; u < 8; u++) h[b][u] = a[b][u];
  for (let b = 0; b < 8; b++) for (let u = 0; u < 4; u++) y[b][u] = a[b][8 + u];
  for (let b = 0; b < 4; b++) for (let u = 0; u < 8; u++) d[b][u] = a[8 + b][u];
  for (let b = 0; b < 4; b++) for (let u = 0; u < 4; u++) f[b][u] = a[8 + b][8 + u];
  const p = yn(f);
  if (!p) return h;
  const Y = rt(8, 8);
  for (let b = 0; b < 8; b++) for (let u = 0; u < 8; u++) {
    let N = 0;
    for (let T = 0; T < 4; T++) for (let R = 0; R < 4; R++) N += y[b][T] * p[T][R] * d[R][u];
    Y[b][u] = h[b][u] - N;
  }
  return Y;
}
function yn(t) {
  const n = t.length, s = t.map((o, e) => {
    const r = [...o];
    for (let c = 0; c < n; c++) r.push(e === c ? 1 : 0);
    return r;
  });
  for (let o = 0; o < n; o++) {
    let e = o;
    for (let c = o + 1; c < n; c++) Math.abs(s[c][o]) > Math.abs(s[e][o]) && (e = c);
    if ([s[o], s[e]] = [s[e], s[o]], Math.abs(s[o][o]) < 1e-15) return null;
    const r = s[o][o];
    for (let c = 0; c < 2 * n; c++) s[o][c] /= r;
    for (let c = 0; c < n; c++) {
      if (c === o) continue;
      const i = s[c][o];
      for (let a = 0; a < 2 * n; a++) s[c][a] -= i * s[o][a];
    }
  }
  return s.map((o) => o.slice(n));
}
function _n(t, n, s, o, e) {
  const r = rt(12, 12), c = [[-$, -$], [$, -$], [$, $], [-$, $]];
  for (const [i, a] of c) {
    const { N: l, dNdxi: m, dNdeta: M } = Ht(i, a), { dNdx: g, dNdy: _, detJ: h } = qt(m, M, t, n), y = new Array(12).fill(0);
    for (let f = 0; f < 4; f++) y[f * 3] = 0.5 * _[f], y[f * 3 + 1] = -0.5 * g[f], y[f * 3 + 2] = l[f];
    const d = e * s * o * Math.abs(h);
    for (let f = 0; f < 12; f++) for (let p = 0; p < 12; p++) r[f][p] += d * y[f] * y[p];
  }
  return r;
}
function Yn(t, n, s, o, e) {
  const r = rt(12, 12), c = s * e * e * e / (12 * (1 - o * o)), a = 5 / 6 * s / (2 * (1 + o)) * e, l = [[-$, -$], [$, -$], [$, $], [-$, $]], m = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], M = [];
  for (const g of m) {
    const { N: _, dNdxi: h, dNdeta: y } = Ht(g.xi, g.eta), { dNdx: d, dNdy: f } = qt(h, y, t, n), p = rt(2, 12);
    for (let Y = 0; Y < 4; Y++) p[0][Y * 3] = d[Y], p[0][Y * 3 + 1] = -_[Y], p[1][Y * 3] = f[Y], p[1][Y * 3 + 2] = -_[Y];
    M.push(p);
  }
  for (const [g, _] of l) {
    const { dNdxi: h, dNdeta: y } = Ht(g, _), { dNdx: d, dNdy: f, detJ: p } = qt(h, y, t, n), Y = rt(3, 12);
    for (let v = 0; v < 4; v++) Y[0][v * 3 + 1] = d[v], Y[1][v * 3 + 2] = f[v], Y[2][v * 3 + 1] = f[v], Y[2][v * 3 + 2] = d[v];
    for (let v = 0; v < 12; v++) for (let q = 0; q < 12; q++) {
      let pt = 0;
      pt += c * (Y[0][v] * Y[0][q] + o * Y[0][v] * Y[1][q] + o * Y[1][v] * Y[0][q] + Y[1][v] * Y[1][q]), pt += c * (1 - o) / 2 * Y[2][v] * Y[2][q], r[v][q] += pt * Math.abs(p);
    }
    const b = rt(2, 12), u = 0.5 * (1 - _), N = 0.5 * (1 + _), T = 0.5 * (1 - g), R = 0.5 * (1 + g);
    for (let v = 0; v < 12; v++) b[0][v] = u * M[0][0][v] + N * M[1][0][v], b[1][v] = T * M[2][1][v] + R * M[3][1][v];
    for (let v = 0; v < 12; v++) for (let q = 0; q < 12; q++) r[v][q] += a * (b[0][v] * b[0][q] + b[1][v] * b[1][q]) * Math.abs(p);
  }
  return r;
}
function An(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n == null ? void 0 : n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n == null ? void 0 : n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0.2, r = ((_c = n == null ? void 0 : n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0;
  if (o === 0 || r === 0) return rt(24, 24);
  const { localCoords: c } = hn(t), i = c.map((p) => p[0]), a = c.map((p) => p[1]), l = dn(i, a, o, e, r), m = Yn(i, a, o, e, r), M = o / (2 * (1 + e)), _ = _n(i, a, M, r, 0.5), h = rt(24, 24), y = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let p = 0; p < 8; p++) for (let Y = 0; Y < 8; Y++) h[y[p]][y[Y]] += l[p][Y];
  const d = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let p = 0; p < 12; p++) for (let Y = 0; Y < 12; Y++) h[d[p]][d[Y]] += m[p][Y];
  const f = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let p = 0; p < 12; p++) for (let Y = 0; Y < 12; Y++) h[f[p]][f[Y]] += _[p][Y];
  return h;
}
function Xn(t) {
  const { localX: n, localY: s, localZ: o } = hn(t), e = [[n[0], n[1], n[2]], [s[0], s[1], s[2]], [o[0], o[1], o[2]]], r = rt(24, 24);
  for (let c = 0; c < 4; c++) for (let i = 0; i < 2; i++) {
    const a = c * 6 + i * 3;
    for (let l = 0; l < 3; l++) for (let m = 0; m < 3; m++) r[a + l][a + m] = e[l][m];
  }
  return r;
}
function hn(t) {
  const n = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], s = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], o = rn(n, s), e = Math.sqrt(o[0] ** 2 + o[1] ** 2 + o[2] ** 2), r = o.map((h) => h / e), c = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], i = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2), a = c.map((h) => h / i), l = rn(r, a), m = t.map((h) => h[0]).reduce((h, y) => h + y) / 4, M = t.map((h) => h[1]).reduce((h, y) => h + y) / 4, g = t.map((h) => h[2]).reduce((h, y) => h + y) / 4, _ = t.map((h) => {
    const y = h[0] - m, d = h[1] - M, f = h[2] - g;
    return [y * a[0] + d * a[1] + f * a[2], y * l[0] + d * l[1] + f * l[2]];
  });
  return { localX: a, localY: l, localZ: r, localCoords: _ };
}
function rn(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function rt(t, n) {
  return Array.from({ length: t }, () => Array(n).fill(0));
}
function en(t) {
  if (t.length === 2) return wn(t);
  if (t.length === 3) return Nn(t);
  if (t.length === 4) return Xn(t);
}
function wn(t) {
  const n = ln(t[1], t[0]), s = Gt(n), o = tn(n, [1, 0, 0]) / s, e = tn(n, [0, 1, 0]) / s, r = tn(n, [0, 0, 1]) / s, c = Math.sqrt(o ** 2 + e ** 2);
  let i = [[o, e, r], [-e / c, o / c, 0], [-o * r / c, -e * r / c, c]];
  return r === 1 && (i = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), r === -1 && (i = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), Mn(fn(4), i).toArray();
}
function Nn(t) {
  const r = [t[0], t[1], t[2]], c = P(3, 3).toArray();
  for (let u = 0; u < 3; u++) for (let N = 0; N < 3; N++) c[u][N] = r[N][u];
  const i = [-1, 1, 0], a = [-1, 0, 1], l = P(3, 2).toArray();
  for (let u = 0; u < 3; u++) for (let N = 0; N < 3; N++) l[u][0] += c[u][N] * i[N], l[u][1] += c[u][N] * a[N];
  const m = l.map((u) => u[0]), M = l.map((u) => u[1]);
  let g = cn(m, M), _ = Gt(g);
  if (_ === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), P(18, 18).toArray();
  g = g.map((u) => u / _);
  const h = [...g], y = fn(3).toArray(), d = g[0];
  let f;
  if (Math.abs(d) > 1 - 1e-10) {
    const u = g[2];
    f = y.map((N, T) => N[2] - u * g[T]);
  } else f = y.map((u, N) => u[0] - d * g[N]);
  if (_ = Gt(f), _ === 0) return console.warn("Degenerate local X-axis detected."), P(18, 18).toArray();
  f = f.map((u) => u / _);
  let p = cn(h, f);
  if (_ = Gt(p), _ === 0) return console.warn("Degenerate local Y-axis detected."), P(18, 18).toArray();
  p = p.map((u) => u / _);
  const Y = [f, p, h], b = P(18, 18).toArray();
  for (let u = 0; u < 3; u++) {
    const N = u * 6, T = N + 3;
    for (let R = 0; R < 3; R++) for (let v = 0; v < 3; v++) b[N + R][N + v] = Y[R][v], b[T + R][T + v] = Y[R][v];
  }
  return b;
}
function Zt(t, n) {
  const s = [];
  for (let o = 0; o < t; o++) {
    const e = [];
    for (let r = 0; r < n; r++) e.push(0);
    s.push(e);
  }
  return s;
}
function at(t, n) {
  const s = t.length, o = n[0].length, e = n.length, r = Zt(s, o);
  for (let c = 0; c < s; c++) for (let i = 0; i < o; i++) {
    let a = 0;
    for (let l = 0; l < e; l++) a += t[c][l] * n[l][i];
    r[c][i] = a;
  }
  return r;
}
function Wt(t, n) {
  const s = t.length, o = t[0].length, e = Zt(s, o);
  for (let r = 0; r < s; r++) for (let c = 0; c < o; c++) e[r][c] = t[r][c] + n[r][c];
  return e;
}
function $t(t, n) {
  const s = t.length, o = t[0].length, e = Zt(s, o);
  for (let r = 0; r < s; r++) for (let c = 0; c < o; c++) e[r][c] = t[r][c] * n;
  return e;
}
function nn(t) {
  const n = t.length, s = t[0].length, o = Zt(s, n);
  for (let e = 0; e < n; e++) for (let r = 0; r < s; r++) o[r][e] = t[e][r];
  return o;
}
function on(t) {
  return t[0][0] * t[1][1] - t[0][1] * t[1][0];
}
function Ut(t) {
  const n = on(t);
  return [[t[1][1] / n, -t[0][1] / n], [-t[1][0] / n, t[0][0] / n]];
}
function vn(t) {
  const [n, s, o, e] = t, r = [s[0] - n[0], s[1] - n[1], s[2] - n[2]], c = [o[0] - n[0], o[1] - n[1], o[2] - n[2]], i = [e[0] - n[0], e[1] - n[1], e[2] - n[2]], a = Math.hypot(r[0], r[1], r[2]), l = [r[0] / a, r[1] / a, r[2] / a], m = [l[1] * c[2] - l[2] * c[1], l[2] * c[0] - l[0] * c[2], l[0] * c[1] - l[1] * c[0]], M = Math.hypot(m[0], m[1], m[2]), g = [m[0] / M, m[1] / M, m[2] / M], _ = [g[1] * l[2] - g[2] * l[1], g[2] * l[0] - g[0] * l[2], g[0] * l[1] - g[1] * l[0]], h = (f, p) => f[0] * p[0] + f[1] * p[1] + f[2] * p[2], y = [0, h(r, l), h(c, l), h(i, l)], d = [0, h(r, _), h(c, _), h(i, _)];
  return { x: y, y: d };
}
function xt(t, n, s) {
  if (s === 5) return Math.hypot(t[1] - t[0], n[1] - n[0]);
  if (s === 6) return Math.hypot(t[2] - t[1], n[2] - n[1]);
  if (s === 7) return Math.hypot(t[3] - t[2], n[3] - n[2]);
  if (s === 8) return Math.hypot(t[0] - t[3], n[0] - n[3]);
  throw new Error("k debe ser 5..8");
}
function zt(t, n, s) {
  const o = xt(t, n, s);
  if (s === 5) return [(t[1] - t[0]) / o, (n[1] - n[0]) / o];
  if (s === 6) return [(t[2] - t[1]) / o, (n[2] - n[1]) / o];
  if (s === 7) return [(t[3] - t[2]) / o, (n[3] - n[2]) / o];
  if (s === 8) return [(t[0] - t[3]) / o, (n[0] - n[3]) / o];
  throw new Error("k debe ser 5..8");
}
function Et(t, n, s, o, e) {
  return 2 / (0.8333333333333334 * (1 - e)) * Math.pow(o / xt(t, n, s), 2);
}
function Ft(t, n, s, o) {
  return [[0.25 * (t[0] * (o - 1) - t[1] * (o - 1) + t[2] * (o + 1) - t[3] * (o + 1)), 0.25 * (n[0] * (o - 1) - n[1] * (o - 1) + n[2] * (o + 1) - n[3] * (o + 1))], [0.25 * (t[0] * (s - 1) - t[1] * (s + 1) + t[2] * (s + 1) - t[3] * (s - 1)), 0.25 * (n[0] * (s - 1) - n[1] * (s + 1) + n[2] * (s + 1) - n[3] * (s - 1))]];
}
function Sn(t, n) {
  return [[0.5 * (1 - n), 0, 0.5 * (1 + n), 0], [0, 0.5 * (1 + t), 0, 0.5 * (1 - t)]];
}
function jn(t, n) {
  const s = xt(t, n, 5), o = xt(t, n, 6), e = xt(t, n, 7), r = xt(t, n, 8);
  return [[s / 2, 0, 0, 0], [0, o / 2, 0, 0], [0, 0, -e / 2, 0], [0, 0, 0, -r / 2]];
}
function gn(t, n) {
  const s = xt(t, n, 5), o = xt(t, n, 6), e = xt(t, n, 7), r = xt(t, n, 8), [c, i] = zt(t, n, 5), [a, l] = zt(t, n, 6), [m, M] = zt(t, n, 7), [g, _] = zt(t, n, 8);
  return $t([[-2 / s, c, i, 2 / s, c, i, 0, 0, 0, 0, 0, 0], [0, 0, 0, -2 / o, a, l, 2 / o, a, l, 0, 0, 0], [0, 0, 0, 0, 0, 0, -2 / e, m, M, 2 / e, m, M], [2 / r, g, _, 0, 0, 0, 0, 0, 0, -2 / r, g, _]], 0.5);
}
function Dn(t, n, s, o) {
  const e = Et(t, n, 5, s, o), r = Et(t, n, 6, s, o), c = Et(t, n, 7, s, o), i = Et(t, n, 8, s, o);
  return $t([[1 / (1 + e), 0, 0, 0], [0, 1 / (1 + r), 0, 0], [0, 0, 1 / (1 + c), 0], [0, 0, 0, 1 / (1 + i)]], -1.5);
}
function xn(t, n, s, o) {
  const e = Et(t, n, 5, s, o), r = Et(t, n, 6, s, o), c = Et(t, n, 7, s, o), i = Et(t, n, 8, s, o);
  return [[e / (1 + e), 0, 0, 0], [0, r / (1 + r), 0, 0], [0, 0, c / (1 + c), 0], [0, 0, 0, i / (1 + i)]];
}
function Cn(t, n, s, o) {
  const e = Ut(Ft(t, n, s, o)), [r, c] = e[0], [i, a] = e[1], l = 0.25 * (o - 1), m = -0.25 * (o - 1), M = 0.25 * (o + 1), g = -0.25 * (o + 1), _ = 0.25 * (s - 1), h = -0.25 * (s + 1), y = 0.25 * (s + 1), d = -0.25 * (s - 1), f = [r * l + c * _, r * m + c * h, r * M + c * y, r * g + c * d], p = [i * l + a * _, i * m + a * h, i * M + a * y, i * g + a * d];
  return [[0, f[0], 0, 0, f[1], 0, 0, f[2], 0, 0, f[3], 0], [0, 0, p[0], 0, 0, p[1], 0, 0, p[2], 0, 0, p[3]], [0, p[0], f[0], 0, p[1], f[1], 0, p[2], f[2], 0, p[3], f[3]]];
}
function Qn(t, n, s, o) {
  const e = Ut(Ft(t, n, s, o)), [r, c] = e[0], [i, a] = e[1], l = s * (o - 1), m = -0.5 * (o - 1) * (o + 1), M = -s * (o + 1), g = 0.5 * (o - 1) * (o + 1), _ = 0.5 * (s - 1) * (s + 1), h = -o * (s + 1), y = -0.5 * (s - 1) * (s + 1), d = o * (s - 1), f = [r * l + c * _, r * m + c * h, r * M + c * y, r * g + c * d], p = [i * l + a * _, i * m + a * h, i * M + a * y, i * g + a * d], [Y, b] = zt(t, n, 5), [u, N] = zt(t, n, 6), [T, R] = zt(t, n, 7), [v, q] = zt(t, n, 8);
  return [[f[0] * Y, f[1] * u, f[2] * T, f[3] * v], [p[0] * b, p[1] * N, p[2] * R, p[3] * q], [p[0] * Y + f[0] * b, p[1] * u + f[1] * N, p[2] * T + f[2] * R, p[3] * v + f[3] * q]];
}
function kn(t, n, s, o, e, r) {
  return Wt(Cn(t, n, s, o), at(at(Qn(t, n, s, o), Dn(t, n, e, r)), gn(t, n)));
}
function Jn(t, n, s, o, e, r) {
  return at(at(at(at(Ut(Ft(t, n, s, o)), Sn(s, o)), jn(t, n)), xn(t, n, e, r)), gn(t, n));
}
function Kn(t, n, s, o) {
  const e = Ut(Ft(t, n, s, o)), r = [[0.25 * (o - 1), 0.25 * (-o + 1), 0.25 * (o + 1), 0.25 * (-o - 1)], [0.25 * (s - 1), 0.25 * (-s - 1), 0.25 * (s + 1), 0.25 * (-s + 1)]], c = at(e, r);
  return [[c[0][0], 0, c[0][1], 0, c[0][2], 0, c[0][3], 0], [0, c[1][0], 0, c[1][1], 0, c[1][2], 0, c[1][3]], [c[1][0], c[0][0], c[1][1], c[0][1], c[1][2], c[0][2], c[1][3], c[0][3]]];
}
function Ln(t, n, s) {
  const o = t * s ** 3 / (12 * (1 - n ** 2));
  return [[o, o * n, 0], [o * n, o, 0], [0, 0, o * (1 - n) / 2]];
}
function Tn(t, n, s) {
  const e = t * s * 0.8333333333333334 / (2 * (1 + n));
  return [[e, 0], [0, e]];
}
function zn(t, n) {
  const s = t / (2 * (1 + n)), o = 1 / (1 - n * n);
  return [[o * t, o * n * t, 0], [o * n * t, o * t, 0], [0, 0, (1 - n * n) * s]];
}
function En(t, n, s, o, e) {
  const r = Ln(o, e, s), c = Tn(o, e, s), i = 1 / Math.sqrt(3), a = [-i, i, i, -i], l = [-i, -i, i, i];
  let m = Zt(12, 12);
  for (let M = 0; M < 4; M++) {
    const g = on(Ft(t, n, a[M], l[M])), _ = kn(t, n, a[M], l[M], s, e), h = Jn(t, n, a[M], l[M], s, e);
    m = Wt(m, $t(at(at(nn(_), r), _), g)), m = Wt(m, $t(at(at(nn(h), c), h), g));
  }
  return m;
}
function Bn(t, n, s, o, e) {
  const r = zn(o, e), c = 1 / Math.sqrt(3), i = [-c, c, c, -c], a = [-c, -c, c, c];
  let l = Zt(8, 8);
  for (let m = 0; m < 4; m++) {
    const M = on(Ft(t, n, i[m], a[m])), g = Kn(t, n, i[m], a[m]);
    l = Wt(l, $t(at(at(nn(g), r), g), M * s));
  }
  return l;
}
function Pn(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0, { x: c, y: i } = vn(t), a = En(c, i, r, o, e), l = Bn(c, i, r, o, e), m = Zt(24, 24), M = (d) => [0, 3, 6, 9].includes(d) ? 2 * d + 2 : [1, 4, 7, 10].includes(d) ? 2 * d + 1 : 2 * d;
  for (let d = 0; d < 12; d++) for (let f = 0; f < 12; f++) m[M(d)][M(f)] = a[d][f];
  const g = [1, 2, 4, 5, 7, 8, 10, 11].map((d) => Math.abs(a[d][d])), _ = Math.min(...g) / 1e3;
  m[5][5] = _, m[11][11] = _, m[17][17] = _, m[23][23] = _;
  for (const d of [4, 10, 16, 22]) for (let f = 0; f < 24; f++) m[d][f] *= -1, m[f][d] *= -1;
  const h = (d, f, p) => {
    const Y = d[f];
    d[f] = d[p], d[p] = Y;
    for (let b = 0; b < d.length; b++) {
      const u = d[b][f];
      d[b][f] = d[b][p], d[b][p] = u;
    }
  };
  h(m, 3, 4), h(m, 9, 10), h(m, 15, 16), h(m, 21, 22);
  const y = (d) => Math.floor(d / 2) * 6 + d % 2;
  for (let d = 0; d < 8; d++) for (let f = 0; f < 8; f++) m[y(d)][y(f)] += l[d][f];
  return m;
}
function Rn(t, n, s) {
  var _a, _b;
  if (t.length === 2) {
    let o = Fn(t, n, s);
    const e = (_a = n == null ? void 0 : n.partialFixitySprings) == null ? void 0 : _a.get(s);
    e && (o = On(o, e));
    const r = (_b = n == null ? void 0 : n.momentReleases) == null ? void 0 : _b.get(s);
    return r && (o = Zn(o, r)), o;
  }
  if (t.length === 3) return Gn(t, n, s);
  if (t.length === 4) {
    try {
      const o = typeof window < "u" ? window : globalThis;
      if (o && o.__hekatanShellFormulation === "DKMQ") return Pn(t, n, s);
    } catch {
    }
    return An(t, n, s);
  }
}
function On(t, n) {
  const s = t.map((e) => [...e]), o = Math.min(n.length, 12);
  for (let e = 0; e < o; e++) n[e] > 1e-12 && (s[e][e] += n[e]);
  return s;
}
function Zn(t, n) {
  const s = [];
  if (n.length >= 12) for (let h = 0; h < 12; h++) n[h] && s.push(h);
  else {
    const h = [3, 4, 5, 9, 10, 11];
    for (let y = 0; y < Math.min(n.length, 6); y++) n[y] && s.push(h[y]);
  }
  if (s.length === 0) return t;
  const o = t.length, e = [];
  for (let h = 0; h < o; h++) s.includes(h) || e.push(h);
  const r = e.length, c = s.length, i = Array.from({ length: c }, (h, y) => Array.from({ length: c }, (d, f) => t[s[y]][s[f]])), a = Array.from({ length: r }, (h, y) => Array.from({ length: c }, (d, f) => t[e[y]][s[f]])), l = Array.from({ length: c }, (h, y) => Array.from({ length: r }, (d, f) => t[s[y]][e[f]])), m = qn(i);
  if (!m) return t;
  const M = an(a, m), g = an(M, l), _ = Array.from({ length: o }, () => Array(o).fill(0));
  for (let h = 0; h < r; h++) for (let y = 0; y < r; y++) _[e[h]][e[y]] = t[e[h]][e[y]] - g[h][y];
  return _;
}
function an(t, n) {
  const s = t.length, o = n[0].length, e = n.length, r = Array.from({ length: s }, () => Array(o).fill(0));
  for (let c = 0; c < s; c++) for (let i = 0; i < o; i++) for (let a = 0; a < e; a++) r[c][i] += t[c][a] * n[a][i];
  return r;
}
function qn(t) {
  const n = t.length, s = t.map((o, e) => {
    const r = [...o];
    for (let c = 0; c < n; c++) r.push(e === c ? 1 : 0);
    return r;
  });
  for (let o = 0; o < n; o++) {
    let e = o;
    for (let c = o + 1; c < n; c++) Math.abs(s[c][o]) > Math.abs(s[e][o]) && (e = c);
    if ([s[o], s[e]] = [s[e], s[o]], Math.abs(s[o][o]) < 1e-15) return null;
    const r = s[o][o];
    for (let c = 0; c < 2 * n; c++) s[o][c] /= r;
    for (let c = 0; c < n; c++) {
      if (c === o) continue;
      const i = s[c][o];
      for (let a = 0; a < 2 * n; a++) s[c][a] -= i * s[o][a];
    }
  }
  return s.map((o) => o.slice(n));
}
function Fn(t, n, s) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const o = ((_a = n == null ? void 0 : n.momentsOfInertiaZ) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n == null ? void 0 : n.momentsOfInertiaY) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n == null ? void 0 : n.elasticities) == null ? void 0 : _c.get(s)) ?? 0, c = ((_d = n == null ? void 0 : n.areas) == null ? void 0 : _d.get(s)) ?? 0, i = ((_e = n == null ? void 0 : n.shearModuli) == null ? void 0 : _e.get(s)) ?? 0, a = ((_f = n == null ? void 0 : n.torsionalConstants) == null ? void 0 : _f.get(s)) ?? 0, l = Gt(ln(t[0], t[1]));
  let m = ((_g = n == null ? void 0 : n.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, M = ((_h = n == null ? void 0 : n.shearAreasZ) == null ? void 0 : _h.get(s)) ?? 0;
  m === 0 && M === 0 && c > 0 && i > 0 && (m = M = 5 / 6 * c);
  const g = M > 0 && i > 0 ? 12 * r * o / (i * M * l ** 2) : 0, _ = m > 0 && i > 0 ? 12 * r * e / (i * m * l ** 2) : 0, h = r * c / l, y = i * a / l, d = 12 * r * o / l ** 3 / (1 + g), f = 6 * r * o / l ** 2 / (1 + g), p = 4 * r * o / l * (1 + g / 4) / (1 + g), Y = 2 * r * o / l * (1 - g / 2) / (1 + g), b = 12 * r * e / l ** 3 / (1 + _), u = 6 * r * e / l ** 2 / (1 + _), N = 4 * r * e / l * (1 + _ / 4) / (1 + _), T = 2 * r * e / l * (1 - _ / 2) / (1 + _);
  return [[h, 0, 0, 0, 0, 0, -h, 0, 0, 0, 0, 0], [0, d, 0, 0, 0, f, 0, -d, 0, 0, 0, f], [0, 0, b, 0, -u, 0, 0, 0, -b, 0, -u, 0], [0, 0, 0, y, 0, 0, 0, 0, 0, -y, 0, 0], [0, 0, -u, 0, N, 0, 0, 0, u, 0, T, 0], [0, f, 0, 0, 0, p, 0, -f, 0, 0, 0, Y], [-h, 0, 0, 0, 0, 0, h, 0, 0, 0, 0, 0], [0, -d, 0, 0, 0, -f, 0, d, 0, 0, 0, -f], [0, 0, -b, 0, u, 0, 0, 0, b, 0, u, 0], [0, 0, 0, -y, 0, 0, 0, 0, 0, y, 0, 0], [0, 0, -u, 0, T, 0, 0, 0, u, 0, N, 0], [0, f, 0, 0, 0, Y, 0, -f, 0, 0, 0, p]];
}
function Gn(t, n, s) {
  var _a, _b, _c, _d, _e;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.elasticitiesOrthogonal) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n.poissonsRatios) == null ? void 0 : _c.get(s)) ?? 0, c = ((_d = n.shearModuli) == null ? void 0 : _d.get(s)) ?? 0, i = ((_e = n.thicknesses) == null ? void 0 : _e.get(s)) ?? 0, a = e > 0, l = a ? Yt(o, e, c, r, i) : q(o, r, i), m = a ? et(c, i) : pt(o, r, i), M = a ? mn(o, e, c, r) : un(o, r), g = t.map(([S, w]) => [S, w]), _ = g[1][0] - g[0][0], h = g[2][0] - g[0][0], y = g[0][1] - g[1][1], d = g[2][1] - g[0][1], f = 0.5 * (_ * d - h * -y), p = st(g), Y = At(g), b = Xt(g, M, i), u = z(z(Tt(p), m), p), N = z(z(Tt(Y), l), Y), T = P(18, 18).toArray(), R = z(Ot(u, N), f), v = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let S = 0; S < 3; S++) for (let w = 0; w < 3; w++) for (let j = 0; j < 3; j++) {
    const X = v[S][w], x = v[j][w];
    T[X][x] = b[S * 3 + w][j * 3 + w];
  }
  for (let S = 0; S < 18; S++) for (let w = 0; w < 18; w++) T[S][w] = (T[S][w] ?? 0) + R.get([S, w]);
  return T;
  function q(S, w, j) {
    const X = S / (1 - w * w), x = L([[X, X * w, 0], [X * w, X, 0], [0, 0, X * (1 - w) / 2]]);
    return z(j ** 3 / 12, x);
  }
  function pt(S, w, j) {
    const X = 0.8333333333333334, x = S / (2 * (1 + w)), K = X * x * j;
    return L([[K, 0], [0, K]]);
  }
  function Yt(S, w, j, X, x) {
    const K = w * X / S, C = 1 - X * K, k = S / C, F = w / C, G = X * w / C, J = L([[k, G, 0], [G, F, 0], [0, 0, j]]);
    return z(x ** 3 / 12, J);
  }
  function et(S, w) {
    const X = 0.8333333333333334 * S * w;
    return L([[X, 0], [0, X]]);
  }
  function st(S) {
    const w = P(2, 18).toArray(), [j, X] = S[0], [x, K] = S[1], [C, k] = S[2], F = 0.5 * ((x - j) * (k - X) - (C - j) * -(X - K)), G = (j + x + C) / 3, V = (X + K + k) / 3, J = [G, j, x], tt = [V, X, K], nt = [G, x, C], U = [V, K, k], ot = [G, C, j], Mt = [V, k, X], Z = 1 / 3, [it, lt, ft, Kt] = ct(J, tt), [bt, Ct, Qt, Bt] = ct(nt, U), [kt, Lt, Pt, Rt] = ct(ot, Mt), dt = P(2, 18).toArray(), wt = P(2, 18).toArray(), Nt = P(2, 18).toArray();
    for (let Q = 0; Q < 2; Q++) for (let D = 0; D < 6; D++) dt[Q][D] = Z * it[Q][D] + lt[Q][D], dt[Q][D + 6] = Z * it[Q][D] + ft[Q][D], dt[Q][D + 12] = Z * it[Q][D], wt[Q][D] = Z * bt[Q][D], wt[Q][D + 6] = Z * bt[Q][D] + Ct[Q][D], wt[Q][D + 12] = Z * bt[Q][D] + Qt[Q][D], Nt[Q][D] = Z * kt[Q][D] + Pt[Q][D], Nt[Q][D + 6] = Z * kt[Q][D], Nt[Q][D + 12] = Z * kt[Q][D] + Lt[Q][D];
    for (let Q = 0; Q < 2; Q++) for (let D = 0; D < 18; D++) dt[Q][D] *= Kt, wt[Q][D] *= Bt, Nt[Q][D] *= Rt, w[Q][D] = (dt[Q][D] + wt[Q][D] + Nt[Q][D]) / F;
    return w;
  }
  function ct(S, w) {
    const j = P(2, 6).toArray(), X = P(2, 6).toArray(), x = P(2, 6).toArray(), K = S[1] - S[0], C = S[0] - S[2], k = w[2] - w[0], F = w[0] - w[1], G = S[2] - S[1], V = w[1] - w[2], J = 0.5 * (K * k - C * F), tt = 0.5 * F * C, nt = 0.5 * k * K, U = 0.5 * K * C, ot = 0.5 * F * k;
    return j[0][2] = 0.5 * G / J, j[0][3] = -0.5, j[1][2] = 0.5 * V / J, j[1][4] = 0.5, X[0][2] = 0.5 * C / J, X[0][3] = 0.5 * tt / J, X[0][4] = 0.5 * U / J, X[1][2] = 0.5 * k / J, X[1][3] = 0.5 * ot / J, X[1][4] = 0.5 * nt / J, x[0][2] = 0.5 * K / J, x[0][3] = -0.5 * nt / J, x[0][4] = -0.5 * U / J, x[1][2] = 0.5 * F / J, x[1][3] = -0.5 * ot / J, x[1][4] = -0.5 * tt / J, [j, X, x, J];
  }
  function At(S) {
    const w = P(3, 18).toArray(), [j, X] = S[0], [x, K] = S[1], [C, k] = S[2], F = x - j, G = C - j, V = C - x, J = K - k, tt = k - X, nt = X - K, U = 0.5 * (F * tt - G * -nt), ot = J / (2 * U), Mt = V / (2 * U), Z = tt / (2 * U), it = -G / (2 * U), lt = nt / (2 * U), ft = F / (2 * U);
    return w[0][4] = ot, w[0][10] = Z, w[0][16] = lt, w[1][3] = -Mt, w[1][9] = -it, w[1][15] = -ft, w[2][3] = -ot, w[2][4] = Mt, w[2][9] = -Z, w[2][10] = it, w[2][15] = -lt, w[2][16] = ft, w;
  }
  function Xt(S, w, j) {
    let X = P(9, 9).toArray(), x = P(9, 9).toArray(), K = P(9, 9).toArray(), C = P(9, 3).toArray(), k = P(3, 9).toArray(), F = P(3, 3).toArray(), G = P(3, 3).toArray(), V = P(3, 3).toArray(), J = P(3, 3).toArray(), tt = P(3, 3).toArray(), nt = P(3, 3).toArray(), U = P(3, 3).toArray(), ot = P(3, 3).toArray();
    const Mt = 1 / 8, Z = Mt / 6, it = Mt ** 2 / 4, lt = 1, ft = 2, Kt = 1, bt = 0, Ct = 1, Qt = -1, Bt = -1, kt = -1, Lt = -2, Pt = S[0][0], Rt = S[0][1], dt = S[1][0], wt = S[1][1], Nt = S[2][0], Q = S[2][1], D = Pt - dt, vt = dt - Nt, St = Nt - Pt, yt = Rt - wt, jt = wt - Q, Dt = Q - Rt, ht = -D, _t = -vt, A = -St, E = -yt, H = -jt, B = -Dt, Vt = 0.5 * (ht * Dt - St * -yt), pn = 2 * Vt, I = 4 * Vt, W = 0.5 * j, sn = Vt * j, gt = ht ** 2 + E ** 2, ut = _t ** 2 + H ** 2, mt = A ** 2 + B ** 2;
    C[0][0] = W * jt, C[0][2] = W * _t, C[1][1] = W * _t, C[1][2] = W * jt, C[2][0] = W * jt * (B - E) * Z, C[2][1] = W * _t * (St - D) * Z, C[2][2] = W * (St * B - D * E) * 2 * Z, C[3][0] = W * Dt, C[3][2] = W * A, C[4][1] = W * A, C[4][2] = W * Dt, C[5][0] = W * Dt * (E - H) * Z, C[5][1] = W * A * (D - vt) * Z, C[5][2] = W * (D * E - vt * H) * 2 * Z, C[6][0] = W * yt, C[6][2] = W * ht, C[7][1] = W * ht, C[7][2] = W * yt, C[8][0] = W * yt * (H - B) * Z, C[8][1] = W * ht * (vt - St) * Z, C[8][2] = W * (vt * H - St * B) * 2 * Z, K = z(z(L(C), w), Tt(L(C))).toArray(), K = z(L(K), 1 / sn).toArray(), k[0][0] = _t / I, k[0][1] = H / I, k[0][2] = 1, k[0][3] = A / I, k[0][4] = B / I, k[0][6] = ht / I, k[0][7] = E / I, k[1][0] = _t / I, k[1][1] = H / I, k[1][3] = A / I, k[1][4] = B / I, k[1][5] = 1, k[1][6] = ht / I, k[1][7] = E / I, k[2][0] = _t / I, k[2][1] = H / I, k[2][3] = A / I, k[2][4] = B / I, k[2][6] = ht / I, k[2][7] = E / I, k[2][8] = 1;
    const Jt = 1 / (Vt * I);
    F[0][0] = Jt * jt * B * gt, F[0][1] = Jt * Dt * E * ut, F[0][2] = Jt * yt * H * mt, F[1][0] = Jt * vt * A * gt, F[1][1] = Jt * St * ht * ut, F[1][2] = Jt * D * _t * mt, F[2][0] = Jt * (jt * St + _t * B) * gt, F[2][1] = Jt * (Dt * D + A * E) * ut, F[2][2] = Jt * (yt * vt + ht * H) * mt;
    const O = pn / 3;
    G[0][0] = O * lt / gt, G[0][1] = O * ft / gt, G[0][2] = O * Kt / gt, G[1][0] = O * bt / ut, G[1][1] = O * Ct / ut, G[1][2] = O * Qt / ut, G[2][0] = O * Bt / mt, G[2][1] = O * kt / mt, G[2][2] = O * Lt / mt, V[0][0] = O * Lt / gt, V[0][1] = O * Bt / gt, V[0][2] = O * kt / gt, V[1][0] = O * Kt / ut, V[1][1] = O * lt / ut, V[1][2] = O * ft / ut, V[2][0] = O * Qt / mt, V[2][1] = O * bt / mt, V[2][2] = O * Ct / mt, J[0][0] = O * Ct / gt, J[0][1] = O * Qt / gt, J[0][2] = O * bt / gt, J[1][0] = O * kt / ut, J[1][1] = O * Lt / ut, J[1][2] = O * Bt / ut, J[2][0] = O * ft / mt, J[2][1] = O * Kt / mt, J[2][2] = O * lt / mt, tt = z(Ot(L(G), L(V)), 0.5).toArray(), nt = z(Ot(L(V), L(J)), 0.5).toArray(), U = z(Ot(L(J), L(G)), 0.5).toArray();
    const It = z(z(Tt(L(F)), w), L(F));
    return ot = Ot(Ot(z(z(Tt(L(tt)), It), L(tt)), z(z(Tt(L(nt)), It), L(nt))), z(z(Tt(L(U)), It), L(U))).toArray(), ot = z(L(ot), 3 / 4 * it * sn).toArray(), x = z(z(Tt(L(k)), L(ot)), L(k)).toArray(), X = Ot(L(K), L(x)).toArray(), X;
  }
}
function un(t, n) {
  const s = t / (1 - n * n);
  return L([[s, s * n, 0], [s * n, s, 0], [0, 0, s * (1 - n) / 2]]);
}
function mn(t, n, s, o) {
  const e = n * o / t, r = 1 - o * e, c = t / r, i = n / r, a = o * n / r;
  return L([[c, a, 0], [a, i, 0], [0, 0, s]]);
}
function oo(t, n, s, o) {
  const e = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() }, r = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() };
  n.forEach((i, a) => {
    var _a;
    const l = i.map((M) => t[M]), m = i.reduce((M, g) => {
      var _a2;
      const _ = (_a2 = o.deformations) == null ? void 0 : _a2.get(g);
      return M.concat(_ ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (i.length === 2) {
      const M = en(l), g = z(M, m), _ = Rn(l, s, a);
      let h = z(_, g);
      e.normals.set(a, [h[0], h[6]]), e.shearsY.set(a, [h[1], h[7]]), e.shearsZ.set(a, [h[2], h[8]]), e.torsions.set(a, [h[3], h[9]]), e.bendingsY.set(a, [h[4], h[10]]), e.bendingsZ.set(a, [h[5], h[11]]);
    } else if (i.length === 4) {
      const M = Hn(l, m, s, a);
      r.membraneXX.set(a, M.Nx), r.membraneYY.set(a, M.Ny), r.membraneXY.set(a, M.Nxy), r.bendingXX.set(a, M.Mx), r.bendingYY.set(a, M.My), r.bendingXY.set(a, M.Mxy), r.tranverseShearX.set(a, M.Qx), r.tranverseShearY.set(a, M.Qy), r.vonMises.set(a, M.vonMises);
    } else if (i.length === 3) {
      const M = en(l);
      z(M, m);
      const g = $n(s, a), _ = Vn(l), h = Wn(m), y = Un(l), f = z(1 / (2 * y), z(z(g, _), h)).toArray(), p = ((_a = s.thicknesses) == null ? void 0 : _a.get(a)) ?? 1, Y = f[0][0] * p, b = f[1][0] * p, u = f[2][0] * p, N = f[0][1] * (p ** 3 / 12), T = f[1][1] * (p ** 3 / 12), R = f[2][1] * (p ** 3 / 12);
      r.membraneXX.set(a, Y), r.membraneYY.set(a, b), r.membraneXY.set(a, u), r.bendingXX.set(a, N), r.bendingYY.set(a, T), r.bendingXY.set(a, R);
    }
  });
  const { nodeToCentroidElementIndiciesMap: c } = In(t, n);
  return n.forEach((i, a) => {
    if (i.length !== 3 && i.length !== 4) return;
    const l = i.length, m = new Array(l).fill(0), M = new Array(l).fill(0), g = new Array(l).fill(0), _ = new Array(l).fill(0), h = new Array(l).fill(0), y = new Array(l).fill(0), d = new Array(l).fill(0), f = new Array(l).fill(0), p = new Array(l).fill(0);
    i.forEach((Y, b) => {
      const u = c.get(Y) || [], N = (T) => bn(u.map((R) => T.get(R) ?? 0));
      m[b] = N(r.membraneXX), M[b] = N(r.membraneYY), g[b] = N(r.membraneXY), _[b] = N(r.bendingXX), h[b] = N(r.bendingYY), y[b] = N(r.bendingXY), d[b] = N(r.tranverseShearX), f[b] = N(r.tranverseShearY), p[b] = N(r.vonMises);
    }), e.membraneXX.set(a, m), e.membraneYY.set(a, M), e.membraneXY.set(a, g), e.bendingXX.set(a, _), e.bendingYY.set(a, h), e.bendingXY.set(a, y), e.tranverseShearX.set(a, d), e.tranverseShearY.set(a, f), e.vonMises.set(a, p);
  }), e;
}
function Hn(t, n, s, o) {
  var _a, _b, _c;
  const e = ((_a = s.elasticities) == null ? void 0 : _a.get(o)) ?? 0, r = ((_b = s.poissonsRatios) == null ? void 0 : _b.get(o)) ?? 0, c = ((_c = s.thicknesses) == null ? void 0 : _c.get(o)) ?? 1, i = t[0], a = t[1], l = t[2], m = t[3], M = [a[0] - i[0], a[1] - i[1], a[2] - i[2]], g = [l[0] - m[0], l[1] - m[1], l[2] - m[2]];
  let _ = [M[0] + g[0], M[1] + g[1], M[2] + g[2]], h = Math.sqrt(_[0] * _[0] + _[1] * _[1] + _[2] * _[2]);
  h < 1e-14 && (h = 1);
  let y = [_[0] / h, _[1] / h, _[2] / h];
  const d = [l[0] - i[0], l[1] - i[1], l[2] - i[2]], f = [m[0] - a[0], m[1] - a[1], m[2] - a[2]];
  let p = [d[1] * f[2] - d[2] * f[1], d[2] * f[0] - d[0] * f[2], d[0] * f[1] - d[1] * f[0]], Y = Math.sqrt(p[0] * p[0] + p[1] * p[1] + p[2] * p[2]);
  Y < 1e-14 && (Y = 1);
  let b = [p[0] / Y, p[1] / Y, p[2] / Y], u = [b[1] * y[2] - b[2] * y[1], b[2] * y[0] - b[0] * y[2], b[0] * y[1] - b[1] * y[0]], N = Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2]);
  N < 1e-14 && (N = 1), u = [u[0] / N, u[1] / N, u[2] / N], y = [u[1] * b[2] - u[2] * b[1], u[2] * b[0] - u[0] * b[2], u[0] * b[1] - u[1] * b[0]];
  const T = 0.25 * (i[0] + a[0] + l[0] + m[0]), R = 0.25 * (i[1] + a[1] + l[1] + m[1]), v = 0.25 * (i[2] + a[2] + l[2] + m[2]), q = [], pt = [];
  for (let A = 0; A < 4; A++) {
    const E = t[A][0] - T, H = t[A][1] - R, B = t[A][2] - v;
    q.push(E * y[0] + H * y[1] + B * y[2]), pt.push(E * u[0] + H * u[1] + B * u[2]);
  }
  const Yt = [y, u, b], et = new Array(24).fill(0);
  for (let A = 0; A < 4; A++) {
    const E = A * 6, H = A * 6;
    for (let B = 0; B < 3; B++) et[H + B] = Yt[B][0] * n[E] + Yt[B][1] * n[E + 1] + Yt[B][2] * n[E + 2];
    for (let B = 0; B < 3; B++) et[H + 3 + B] = Yt[B][0] * n[E + 3] + Yt[B][1] * n[E + 4] + Yt[B][2] * n[E + 5];
  }
  const st = e / (1 - r * r), ct = [[st * c, st * r * c, 0], [st * r * c, st * c, 0], [0, 0, st * (1 - r) / 2 * c]], At = c * c * c / 12, Xt = [[st * At, st * r * At, 0], [st * r * At, st * At, 0], [0, 0, st * (1 - r) / 2 * At]], S = [-0.25, 0.25, 0.25, -0.25], w = [-0.25, -0.25, 0.25, 0.25];
  let j = 0, X = 0, x = 0, K = 0;
  for (let A = 0; A < 4; A++) j += S[A] * q[A], X += S[A] * pt[A], x += w[A] * q[A], K += w[A] * pt[A];
  const C = j * K - X * x;
  if (Math.abs(C) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  const k = K / C, F = -X / C, G = -x / C, V = j / C, J = [], tt = [];
  for (let A = 0; A < 4; A++) J.push(k * S[A] + F * w[A]), tt.push(G * S[A] + V * w[A]);
  let nt = 0, U = 0, ot = 0;
  for (let A = 0; A < 4; A++) {
    const E = et[A * 6 + 0], H = et[A * 6 + 1];
    nt += J[A] * E, U += tt[A] * H, ot += tt[A] * E + J[A] * H;
  }
  const Mt = ct[0][0] * nt + ct[0][1] * U, Z = ct[1][0] * nt + ct[1][1] * U, it = ct[2][2] * ot;
  let lt = 0, ft = 0, Kt = 0;
  for (let A = 0; A < 4; A++) {
    const E = et[A * 6 + 3], H = et[A * 6 + 4];
    lt += -J[A] * E, ft += -tt[A] * H, Kt += -tt[A] * E - J[A] * H;
  }
  const bt = Xt[0][0] * lt + Xt[0][1] * ft, Ct = Xt[1][0] * lt + Xt[1][1] * ft, Qt = Xt[2][2] * Kt, Bt = 5 / 6, kt = e / (2 * (1 + r)), Lt = Bt * kt * c;
  let Pt = 0, Rt = 0;
  const dt = [0.25, 0.25, 0.25, 0.25];
  for (let A = 0; A < 4; A++) {
    const E = et[A * 6 + 2], H = et[A * 6 + 3], B = et[A * 6 + 4];
    Pt += J[A] * E + dt[A] * H, Rt += tt[A] * E + dt[A] * B;
  }
  const wt = Lt * Pt, Nt = Lt * Rt, Q = Mt / c + 6 * bt / (c * c), D = Z / c + 6 * Ct / (c * c), vt = it / c + 6 * Qt / (c * c), St = Math.sqrt(Q * Q - Q * D + D * D + 3 * vt * vt), yt = Mt / c - 6 * bt / (c * c), jt = Z / c - 6 * Ct / (c * c), Dt = it / c - 6 * Qt / (c * c), ht = Math.sqrt(yt * yt - yt * jt + jt * jt + 3 * Dt * Dt), _t = Math.max(St, ht);
  return { Nx: Mt, Ny: Z, Nxy: it, Mx: bt, My: Ct, Mxy: Qt, Qx: wt, Qy: Nt, vonMises: _t };
}
function $n(t, n) {
  var _a, _b, _c, _d, _e;
  const s = ((_a = t.elasticities) == null ? void 0 : _a.get(n)) ?? 0, o = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, e = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, r = ((_d = t.shearModuli) == null ? void 0 : _d.get(n)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(n), o > 0 ? mn(s, o, r, e) : un(s, e);
}
function Vn(t) {
  const [n, s] = t[0], [o, e] = t[1], [r, c] = t[2], i = e - c, a = c - s, l = s - e, m = r - o, M = n - r, g = o - n;
  return L([[i, a, l, 0, 0, 0], [0, 0, 0, m, M, g], [m, M, g, i, a, l]]);
}
function Wn(t) {
  const [n, s, o] = [t[0], t[6], t[12]], [e, r, c] = [t[1], t[7], t[13]], [i, a, l] = [t[4], t[10], t[16]], [m, M, g] = [t[3], t[9], t[15]];
  return L([[n, -i], [s, -a], [o, -l], [e, m], [r, M], [c, g]]);
}
function Un(t) {
  const [n, s] = t[0], [o, e] = t[1], [r, c] = t[2], i = o - n, a = r - n, l = c - s, m = s - e;
  return 0.5 * (i * l - a * -m);
}
function In(t, n) {
  const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return n.forEach((e, r) => {
    const c = e.map((a) => t[a]), i = to(c);
    e.forEach((a) => {
      var _a, _b;
      s.has(a) || s.set(a, []), (_a = s.get(a)) == null ? void 0 : _a.push(i), o.has(a) || o.set(a, []), (_b = o.get(a)) == null ? void 0 : _b.push(r);
    });
  }), { nodeToCentroidNodesMap: s, nodeToCentroidElementIndiciesMap: o };
}
function to(t) {
  const n = t.reduce((e, r) => e + r[0], 0) / t.length, s = t.reduce((e, r) => e + r[1], 0) / t.length, o = t.reduce((e, r) => e + r[2], 0) / t.length;
  return [n, s, o];
}
export {
  oo as a,
  en as b,
  Rn as g
};
