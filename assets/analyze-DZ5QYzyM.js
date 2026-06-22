import { s as wn, n as cn, b as pn, k as Cn, i as Sn, z as Z, c as Yn, m as O, t as Et, a as Ut, e as F, f as Jn } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const W = 1 / Math.sqrt(3);
function en(t, n) {
  const s = [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)], o = [-0.25 * (1 - n), 0.25 * (1 - n), 0.25 * (1 + n), -0.25 * (1 + n)], e = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: s, dNdxi: o, dNdeta: e };
}
function on(t, n, s, o) {
  let e = 0, r = 0, c = 0, M = 0;
  for (let i = 0; i < 4; i++) e += t[i] * s[i], r += t[i] * o[i], c += n[i] * s[i], M += n[i] * o[i];
  const l = e * M - r * c, a = 1 / l, f = [], d = [];
  for (let i = 0; i < 4; i++) f.push(a * (M * t[i] - r * n[i])), d.push(a * (-c * t[i] + e * n[i]));
  return { dNdx: f, dNdy: d, detJ: l };
}
function Kn(t, n, s, o, e) {
  const l = ut(12, 12), a = s * e / (1 - o * o), f = [[-W, -W], [W, -W], [W, W], [-W, W]], { dNdxi: d, dNdeta: i } = en(0, 0), { detJ: b } = on(d, i, t, n);
  for (const [x, g] of f) {
    const { dNdxi: D, dNdeta: R } = en(x, g), { dNdx: E, dNdy: v, detJ: S } = on(D, R, t, n);
    on(d, i, t, n);
    const G = d.reduce((N, X, B) => N + X * t[B], 0), H = d.reduce((N, X, B) => N + X * n[B], 0), w = i.reduce((N, X, B) => N + X * t[B], 0), st = i.reduce((N, X, B) => N + X * n[B], 0), Mt = 1 / b, Pt = Mt * st * (-2 * x), ct = Mt * -w * (-2 * x), Q = Mt * -H * (-2 * g), Y = Mt * G * (-2 * g), A = [[], [], []];
    for (let N = 0; N < 4; N++) A[0].push(E[N], 0), A[1].push(0, v[N]), A[2].push(v[N], E[N]);
    A[0].push(Pt, 0, Q, 0), A[1].push(0, ct, 0, Y), A[2].push(ct, Pt, Y, Q);
    for (let N = 0; N < 12; N++) for (let X = 0; X < 12; X++) {
      let B = 0;
      B += a * (A[0][N] * A[0][X] + o * A[0][N] * A[1][X] + o * A[1][N] * A[0][X] + A[1][N] * A[1][X]), B += a * (1 - o) / 2 * A[2][N] * A[2][X], l[N][X] += B * Math.abs(S);
    }
  }
  const h = ut(8, 8), y = ut(8, 4), p = ut(4, 8), m = ut(4, 4);
  for (let x = 0; x < 8; x++) for (let g = 0; g < 8; g++) h[x][g] = l[x][g];
  for (let x = 0; x < 8; x++) for (let g = 0; g < 4; g++) y[x][g] = l[x][8 + g];
  for (let x = 0; x < 4; x++) for (let g = 0; g < 8; g++) p[x][g] = l[8 + x][g];
  for (let x = 0; x < 4; x++) for (let g = 0; g < 4; g++) m[x][g] = l[8 + x][8 + g];
  const u = Bn(m);
  if (!u) return h;
  const _ = ut(8, 8);
  for (let x = 0; x < 8; x++) for (let g = 0; g < 8; g++) {
    let D = 0;
    for (let R = 0; R < 4; R++) for (let E = 0; E < 4; E++) D += y[x][R] * u[R][E] * p[E][g];
    _[x][g] = h[x][g] - D;
  }
  return _;
}
function Bn(t) {
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
      const M = s[c][o];
      for (let l = 0; l < 2 * n; l++) s[c][l] -= M * s[o][l];
    }
  }
  return s.map((o) => o.slice(n));
}
function Ln(t, n, s, o, e) {
  const r = ut(12, 12), c = [[-W, -W], [W, -W], [W, W], [-W, W]];
  for (const [M, l] of c) {
    const { N: a, dNdxi: f, dNdeta: d } = en(M, l), { dNdx: i, dNdy: b, detJ: h } = on(f, d, t, n), y = new Array(12).fill(0);
    for (let m = 0; m < 4; m++) y[m * 3] = 0.5 * b[m], y[m * 3 + 1] = -0.5 * i[m], y[m * 3 + 2] = a[m];
    const p = e * s * o * Math.abs(h);
    for (let m = 0; m < 12; m++) for (let u = 0; u < 12; u++) r[m][u] += p * y[m] * y[u];
  }
  return r;
}
function Rn(t, n, s, o, e) {
  const r = ut(12, 12), c = s * e * e * e / (12 * (1 - o * o)), l = 5 / 6 * s / (2 * (1 + o)) * e, a = [[-W, -W], [W, -W], [W, W], [-W, W]], f = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], d = [];
  for (const i of f) {
    const { N: b, dNdxi: h, dNdeta: y } = en(i.xi, i.eta), { dNdx: p, dNdy: m } = on(h, y, t, n), u = ut(2, 12);
    for (let _ = 0; _ < 4; _++) u[0][_ * 3] = p[_], u[0][_ * 3 + 1] = -b[_], u[1][_ * 3] = m[_], u[1][_ * 3 + 2] = -b[_];
    d.push(u);
  }
  for (const [i, b] of a) {
    const { dNdxi: h, dNdeta: y } = en(i, b), { dNdx: p, dNdy: m, detJ: u } = on(h, y, t, n), _ = ut(3, 12);
    for (let v = 0; v < 4; v++) _[0][v * 3 + 1] = p[v], _[1][v * 3 + 2] = m[v], _[2][v * 3 + 1] = m[v], _[2][v * 3 + 2] = p[v];
    for (let v = 0; v < 12; v++) for (let S = 0; S < 12; S++) {
      let G = 0;
      G += c * (_[0][v] * _[0][S] + o * _[0][v] * _[1][S] + o * _[1][v] * _[0][S] + _[1][v] * _[1][S]), G += c * (1 - o) / 2 * _[2][v] * _[2][S], r[v][S] += G * Math.abs(u);
    }
    const x = ut(2, 12), g = 0.5 * (1 - b), D = 0.5 * (1 + b), R = 0.5 * (1 - i), E = 0.5 * (1 + i);
    for (let v = 0; v < 12; v++) x[0][v] = g * d[0][0][v] + D * d[1][0][v], x[1][v] = R * d[2][1][v] + E * d[3][1][v];
    for (let v = 0; v < 12; v++) for (let S = 0; S < 12; S++) r[v][S] += l * (x[0][v] * x[0][S] + x[1][v] * x[1][S]) * Math.abs(u);
  }
  return r;
}
function zn(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n == null ? void 0 : n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n == null ? void 0 : n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0.2, r = ((_c = n == null ? void 0 : n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0;
  if (o === 0 || r === 0) return ut(24, 24);
  const { localCoords: c } = Qn(t), M = c.map((u) => u[0]), l = c.map((u) => u[1]), a = Kn(M, l, o, e, r), f = Rn(M, l, o, e, r), d = o / (2 * (1 + e)), b = Ln(M, l, d, r, 0.5), h = ut(24, 24), y = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let u = 0; u < 8; u++) for (let _ = 0; _ < 8; _++) h[y[u]][y[_]] += a[u][_];
  const p = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let u = 0; u < 12; u++) for (let _ = 0; _ < 12; _++) h[p[u]][p[_]] += f[u][_];
  const m = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let u = 0; u < 12; u++) for (let _ = 0; _ < 12; _++) h[m[u]][m[_]] += b[u][_];
  return h;
}
function En(t) {
  const { localX: n, localY: s, localZ: o } = Qn(t), e = [[n[0], n[1], n[2]], [s[0], s[1], s[2]], [o[0], o[1], o[2]]], r = ut(24, 24);
  for (let c = 0; c < 4; c++) for (let M = 0; M < 2; M++) {
    const l = c * 6 + M * 3;
    for (let a = 0; a < 3; a++) for (let f = 0; f < 3; f++) r[l + a][l + f] = e[a][f];
  }
  return r;
}
function Qn(t) {
  const n = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], s = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], o = An(n, s), e = Math.sqrt(o[0] ** 2 + o[1] ** 2 + o[2] ** 2), r = o.map((h) => h / e), c = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], M = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2), l = c.map((h) => h / M), a = An(r, l), f = t.map((h) => h[0]).reduce((h, y) => h + y) / 4, d = t.map((h) => h[1]).reduce((h, y) => h + y) / 4, i = t.map((h) => h[2]).reduce((h, y) => h + y) / 4, b = t.map((h) => {
    const y = h[0] - f, p = h[1] - d, m = h[2] - i;
    return [y * l[0] + p * l[1] + m * l[2], y * a[0] + p * a[1] + m * a[2]];
  });
  return { localX: l, localY: a, localZ: r, localCoords: b };
}
function An(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function ut(t, n) {
  return Array.from({ length: t }, () => Array(n).fill(0));
}
function Xn(t) {
  if (t.length === 2) return qn(t);
  if (t.length === 3) return Fn(t);
  if (t.length === 4) return En(t);
}
function qn(t) {
  const n = wn(t[1], t[0]), s = cn(n), o = pn(n, [1, 0, 0]) / s, e = pn(n, [0, 1, 0]) / s, r = pn(n, [0, 0, 1]) / s, c = Math.sqrt(o ** 2 + e ** 2);
  let M = [[o, e, r], [-e / c, o / c, 0], [-o * r / c, -e * r / c, c]];
  return r === 1 && (M = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), r === -1 && (M = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), Cn(Sn(4), M).toArray();
}
function Fn(t) {
  const r = [t[0], t[1], t[2]], c = Z(3, 3).toArray();
  for (let g = 0; g < 3; g++) for (let D = 0; D < 3; D++) c[g][D] = r[D][g];
  const M = [-1, 1, 0], l = [-1, 0, 1], a = Z(3, 2).toArray();
  for (let g = 0; g < 3; g++) for (let D = 0; D < 3; D++) a[g][0] += c[g][D] * M[D], a[g][1] += c[g][D] * l[D];
  const f = a.map((g) => g[0]), d = a.map((g) => g[1]);
  let i = Yn(f, d), b = cn(i);
  if (b === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), Z(18, 18).toArray();
  i = i.map((g) => g / b);
  const h = [...i], y = Sn(3).toArray(), p = i[0];
  let m;
  if (Math.abs(p) > 1 - 1e-10) {
    const g = i[2];
    m = y.map((D, R) => D[2] - g * i[R]);
  } else m = y.map((g, D) => g[0] - p * i[D]);
  if (b = cn(m), b === 0) return console.warn("Degenerate local X-axis detected."), Z(18, 18).toArray();
  m = m.map((g) => g / b);
  let u = Yn(h, m);
  if (b = cn(u), b === 0) return console.warn("Degenerate local Y-axis detected."), Z(18, 18).toArray();
  u = u.map((g) => g / b);
  const _ = [m, u, h], x = Z(18, 18).toArray();
  for (let g = 0; g < 3; g++) {
    const D = g * 6, R = D + 3;
    for (let E = 0; E < 3; E++) for (let v = 0; v < 3; v++) x[D + E][D + v] = _[E][v], x[R + E][R + v] = _[E][v];
  }
  return x;
}
function It(t, n) {
  const s = [];
  for (let o = 0; o < t; o++) {
    const e = [];
    for (let r = 0; r < n; r++) e.push(0);
    s.push(e);
  }
  return s;
}
function dt(t, n) {
  const s = t.length, o = n[0].length, e = n.length, r = It(s, o);
  for (let c = 0; c < s; c++) for (let M = 0; M < o; M++) {
    let l = 0;
    for (let a = 0; a < e; a++) l += t[c][a] * n[a][M];
    r[c][M] = l;
  }
  return r;
}
function Mn(t, n) {
  const s = t.length, o = t[0].length, e = It(s, o);
  for (let r = 0; r < s; r++) for (let c = 0; c < o; c++) e[r][c] = t[r][c] + n[r][c];
  return e;
}
function an(t, n) {
  const s = t.length, o = t[0].length, e = It(s, o);
  for (let r = 0; r < s; r++) for (let c = 0; c < o; c++) e[r][c] = t[r][c] * n;
  return e;
}
function un(t) {
  const n = t.length, s = t[0].length, o = It(s, n);
  for (let e = 0; e < n; e++) for (let r = 0; r < s; r++) o[r][e] = t[e][r];
  return o;
}
function yn(t) {
  return t[0][0] * t[1][1] - t[0][1] * t[1][0];
}
function mn(t) {
  const n = yn(t);
  return [[t[1][1] / n, -t[0][1] / n], [-t[1][0] / n, t[0][0] / n]];
}
function On(t) {
  const [n, s, o, e] = t, r = [s[0] - n[0], s[1] - n[1], s[2] - n[2]], c = [o[0] - n[0], o[1] - n[1], o[2] - n[2]], M = [e[0] - n[0], e[1] - n[1], e[2] - n[2]], l = Math.hypot(r[0], r[1], r[2]), a = [r[0] / l, r[1] / l, r[2] / l], f = [a[1] * c[2] - a[2] * c[1], a[2] * c[0] - a[0] * c[2], a[0] * c[1] - a[1] * c[0]], d = Math.hypot(f[0], f[1], f[2]), i = [f[0] / d, f[1] / d, f[2] / d], b = [i[1] * a[2] - i[2] * a[1], i[2] * a[0] - i[0] * a[2], i[0] * a[1] - i[1] * a[0]], h = (m, u) => m[0] * u[0] + m[1] * u[1] + m[2] * u[2], y = [0, h(r, a), h(c, a), h(M, a)], p = [0, h(r, b), h(c, b), h(M, b)];
  return { x: y, y: p };
}
function kt(t, n, s) {
  if (s === 5) return Math.hypot(t[1] - t[0], n[1] - n[0]);
  if (s === 6) return Math.hypot(t[2] - t[1], n[2] - n[1]);
  if (s === 7) return Math.hypot(t[3] - t[2], n[3] - n[2]);
  if (s === 8) return Math.hypot(t[0] - t[3], n[0] - n[3]);
  throw new Error("k debe ser 5..8");
}
function Zt(t, n, s) {
  const o = kt(t, n, s);
  if (s === 5) return [(t[1] - t[0]) / o, (n[1] - n[0]) / o];
  if (s === 6) return [(t[2] - t[1]) / o, (n[2] - n[1]) / o];
  if (s === 7) return [(t[3] - t[2]) / o, (n[3] - n[2]) / o];
  if (s === 8) return [(t[0] - t[3]) / o, (n[0] - n[3]) / o];
  throw new Error("k debe ser 5..8");
}
function Gt(t, n, s, o, e) {
  return 2 / (0.8333333333333334 * (1 - e)) * Math.pow(o / kt(t, n, s), 2);
}
function sn(t, n, s, o) {
  return [[0.25 * (t[0] * (o - 1) - t[1] * (o - 1) + t[2] * (o + 1) - t[3] * (o + 1)), 0.25 * (n[0] * (o - 1) - n[1] * (o - 1) + n[2] * (o + 1) - n[3] * (o + 1))], [0.25 * (t[0] * (s - 1) - t[1] * (s + 1) + t[2] * (s + 1) - t[3] * (s - 1)), 0.25 * (n[0] * (s - 1) - n[1] * (s + 1) + n[2] * (s + 1) - n[3] * (s - 1))]];
}
function Zn(t, n) {
  return [[0.5 * (1 - n), 0, 0.5 * (1 + n), 0], [0, 0.5 * (1 + t), 0, 0.5 * (1 - t)]];
}
function Gn(t, n) {
  const s = kt(t, n, 5), o = kt(t, n, 6), e = kt(t, n, 7), r = kt(t, n, 8);
  return [[s / 2, 0, 0, 0], [0, o / 2, 0, 0], [0, 0, -e / 2, 0], [0, 0, 0, -r / 2]];
}
function Pn(t, n) {
  const s = kt(t, n, 5), o = kt(t, n, 6), e = kt(t, n, 7), r = kt(t, n, 8), [c, M] = Zt(t, n, 5), [l, a] = Zt(t, n, 6), [f, d] = Zt(t, n, 7), [i, b] = Zt(t, n, 8);
  return an([[-2 / s, c, M, 2 / s, c, M, 0, 0, 0, 0, 0, 0], [0, 0, 0, -2 / o, l, a, 2 / o, l, a, 0, 0, 0], [0, 0, 0, 0, 0, 0, -2 / e, f, d, 2 / e, f, d], [2 / r, i, b, 0, 0, 0, 0, 0, 0, -2 / r, i, b]], 0.5);
}
function Hn(t, n, s, o) {
  const e = Gt(t, n, 5, s, o), r = Gt(t, n, 6, s, o), c = Gt(t, n, 7, s, o), M = Gt(t, n, 8, s, o);
  return an([[1 / (1 + e), 0, 0, 0], [0, 1 / (1 + r), 0, 0], [0, 0, 1 / (1 + c), 0], [0, 0, 0, 1 / (1 + M)]], -1.5);
}
function Vn(t, n, s, o) {
  const e = Gt(t, n, 5, s, o), r = Gt(t, n, 6, s, o), c = Gt(t, n, 7, s, o), M = Gt(t, n, 8, s, o);
  return [[e / (1 + e), 0, 0, 0], [0, r / (1 + r), 0, 0], [0, 0, c / (1 + c), 0], [0, 0, 0, M / (1 + M)]];
}
function $n(t, n, s, o) {
  const e = mn(sn(t, n, s, o)), [r, c] = e[0], [M, l] = e[1], a = 0.25 * (o - 1), f = -0.25 * (o - 1), d = 0.25 * (o + 1), i = -0.25 * (o + 1), b = 0.25 * (s - 1), h = -0.25 * (s + 1), y = 0.25 * (s + 1), p = -0.25 * (s - 1), m = [r * a + c * b, r * f + c * h, r * d + c * y, r * i + c * p], u = [M * a + l * b, M * f + l * h, M * d + l * y, M * i + l * p];
  return [[0, m[0], 0, 0, m[1], 0, 0, m[2], 0, 0, m[3], 0], [0, 0, u[0], 0, 0, u[1], 0, 0, u[2], 0, 0, u[3]], [0, u[0], m[0], 0, u[1], m[1], 0, u[2], m[2], 0, u[3], m[3]]];
}
function Wn(t, n, s, o) {
  const e = mn(sn(t, n, s, o)), [r, c] = e[0], [M, l] = e[1], a = s * (o - 1), f = -0.5 * (o - 1) * (o + 1), d = -s * (o + 1), i = 0.5 * (o - 1) * (o + 1), b = 0.5 * (s - 1) * (s + 1), h = -o * (s + 1), y = -0.5 * (s - 1) * (s + 1), p = o * (s - 1), m = [r * a + c * b, r * f + c * h, r * d + c * y, r * i + c * p], u = [M * a + l * b, M * f + l * h, M * d + l * y, M * i + l * p], [_, x] = Zt(t, n, 5), [g, D] = Zt(t, n, 6), [R, E] = Zt(t, n, 7), [v, S] = Zt(t, n, 8);
  return [[m[0] * _, m[1] * g, m[2] * R, m[3] * v], [u[0] * x, u[1] * D, u[2] * E, u[3] * S], [u[0] * _ + m[0] * x, u[1] * g + m[1] * D, u[2] * R + m[2] * E, u[3] * v + m[3] * S]];
}
function Un(t, n, s, o, e, r) {
  return Mn($n(t, n, s, o), dt(dt(Wn(t, n, s, o), Hn(t, n, e, r)), Pn(t, n)));
}
function In(t, n, s, o, e, r) {
  return dt(dt(dt(dt(mn(sn(t, n, s, o)), Zn(s, o)), Gn(t, n)), Vn(t, n, e, r)), Pn(t, n));
}
function to(t, n, s, o) {
  const e = mn(sn(t, n, s, o)), r = [[0.25 * (o - 1), 0.25 * (-o + 1), 0.25 * (o + 1), 0.25 * (-o - 1)], [0.25 * (s - 1), 0.25 * (-s - 1), 0.25 * (s + 1), 0.25 * (-s + 1)]], c = dt(e, r);
  return [[c[0][0], 0, c[0][1], 0, c[0][2], 0, c[0][3], 0], [0, c[1][0], 0, c[1][1], 0, c[1][2], 0, c[1][3]], [c[1][0], c[0][0], c[1][1], c[0][1], c[1][2], c[0][2], c[1][3], c[0][3]]];
}
function no(t, n, s) {
  const o = t * s ** 3 / (12 * (1 - n ** 2));
  return [[o, o * n, 0], [o * n, o, 0], [0, 0, o * (1 - n) / 2]];
}
function oo(t, n, s) {
  const e = t * s * 0.8333333333333334 / (2 * (1 + n));
  return [[e, 0], [0, e]];
}
function so(t, n) {
  const s = t / (2 * (1 + n)), o = 1 / (1 - n * n);
  return [[o * t, o * n * t, 0], [o * n * t, o * t, 0], [0, 0, (1 - n * n) * s]];
}
function ro(t, n, s, o, e) {
  const r = no(o, e, s), c = oo(o, e, s), M = 1 / Math.sqrt(3), l = [-M, M, M, -M], a = [-M, -M, M, M];
  let f = It(12, 12);
  for (let d = 0; d < 4; d++) {
    const i = yn(sn(t, n, l[d], a[d])), b = Un(t, n, l[d], a[d], s, e), h = In(t, n, l[d], a[d], s, e);
    f = Mn(f, an(dt(dt(un(b), r), b), i)), f = Mn(f, an(dt(dt(un(h), c), h), i));
  }
  return f;
}
function co(t, n, s, o, e) {
  const r = so(o, e), c = 1 / Math.sqrt(3), M = [-c, c, c, -c], l = [-c, -c, c, c];
  let a = It(8, 8);
  for (let f = 0; f < 4; f++) {
    const d = yn(sn(t, n, M[f], l[f])), i = to(t, n, M[f], l[f]);
    a = Mn(a, an(dt(dt(un(i), r), i), d * s));
  }
  return a;
}
function eo(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0, { x: c, y: M } = On(t), l = ro(c, M, r, o, e), a = co(c, M, r, o, e), f = It(24, 24), d = (p) => [0, 3, 6, 9].includes(p) ? 2 * p + 2 : [1, 4, 7, 10].includes(p) ? 2 * p + 1 : 2 * p;
  for (let p = 0; p < 12; p++) for (let m = 0; m < 12; m++) f[d(p)][d(m)] = l[p][m];
  const i = [1, 2, 4, 5, 7, 8, 10, 11].map((p) => Math.abs(l[p][p])), b = Math.min(...i) / 1e3;
  f[5][5] = b, f[11][11] = b, f[17][17] = b, f[23][23] = b;
  for (const p of [4, 10, 16, 22]) for (let m = 0; m < 24; m++) f[p][m] *= -1, f[m][p] *= -1;
  const h = (p, m, u) => {
    const _ = p[m];
    p[m] = p[u], p[u] = _;
    for (let x = 0; x < p.length; x++) {
      const g = p[x][m];
      p[x][m] = p[x][u], p[x][u] = g;
    }
  };
  h(f, 3, 4), h(f, 9, 10), h(f, 15, 16), h(f, 21, 22);
  const y = (p) => Math.floor(p / 2) * 6 + p % 2;
  for (let p = 0; p < 8; p++) for (let m = 0; m < 8; m++) f[y(p)][y(m)] += a[p][m];
  return f;
}
function ao(t, n, s) {
  var _a, _b;
  if (t.length === 2) {
    let o = Mo(t, n, s);
    const e = (_a = n == null ? void 0 : n.partialFixitySprings) == null ? void 0 : _a.get(s);
    e && (o = io(o, e));
    const r = (_b = n == null ? void 0 : n.momentReleases) == null ? void 0 : _b.get(s);
    return r && (o = lo(o, r)), o;
  }
  if (t.length === 3) return mo(t, n, s);
  if (t.length === 4) {
    try {
      const o = typeof window < "u" ? window : globalThis;
      if (o && o.__hekatanShellFormulation === "DKMQ") return eo(t, n, s);
    } catch {
    }
    return zn(t, n, s);
  }
}
function io(t, n) {
  const s = t.map((e) => [...e]), o = Math.min(n.length, 12);
  for (let e = 0; e < o; e++) n[e] > 1e-12 && (s[e][e] += n[e]);
  return s;
}
function lo(t, n) {
  const s = [];
  if (n.length >= 12) for (let h = 0; h < 12; h++) n[h] && s.push(h);
  else {
    const h = [3, 4, 5, 9, 10, 11];
    for (let y = 0; y < Math.min(n.length, 6); y++) n[y] && s.push(h[y]);
  }
  if (s.length === 0) return t;
  const o = t.length, e = [];
  for (let h = 0; h < o; h++) s.includes(h) || e.push(h);
  const r = e.length, c = s.length, M = Array.from({ length: c }, (h, y) => Array.from({ length: c }, (p, m) => t[s[y]][s[m]])), l = Array.from({ length: r }, (h, y) => Array.from({ length: c }, (p, m) => t[e[y]][s[m]])), a = Array.from({ length: c }, (h, y) => Array.from({ length: r }, (p, m) => t[s[y]][e[m]])), f = fo(M);
  if (!f) return t;
  const d = vn(l, f), i = vn(d, a), b = Array.from({ length: o }, () => Array(o).fill(0));
  for (let h = 0; h < r; h++) for (let y = 0; y < r; y++) b[e[h]][e[y]] = t[e[h]][e[y]] - i[h][y];
  return b;
}
function vn(t, n) {
  const s = t.length, o = n[0].length, e = n.length, r = Array.from({ length: s }, () => Array(o).fill(0));
  for (let c = 0; c < s; c++) for (let M = 0; M < o; M++) for (let l = 0; l < e; l++) r[c][M] += t[c][l] * n[l][M];
  return r;
}
function fo(t) {
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
      const M = s[c][o];
      for (let l = 0; l < 2 * n; l++) s[c][l] -= M * s[o][l];
    }
  }
  return s.map((o) => o.slice(n));
}
function Mo(t, n, s) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const o = ((_a = n == null ? void 0 : n.momentsOfInertiaZ) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n == null ? void 0 : n.momentsOfInertiaY) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n == null ? void 0 : n.elasticities) == null ? void 0 : _c.get(s)) ?? 0, c = ((_d = n == null ? void 0 : n.areas) == null ? void 0 : _d.get(s)) ?? 0, M = ((_e = n == null ? void 0 : n.shearModuli) == null ? void 0 : _e.get(s)) ?? 0, l = ((_f = n == null ? void 0 : n.torsionalConstants) == null ? void 0 : _f.get(s)) ?? 0, a = cn(wn(t[0], t[1]));
  let f = ((_g = n == null ? void 0 : n.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, d = ((_h = n == null ? void 0 : n.shearAreasZ) == null ? void 0 : _h.get(s)) ?? 0;
  f === 0 && d === 0 && c > 0 && M > 0 && (f = d = 5 / 6 * c);
  const i = d > 0 && M > 0 ? 12 * r * o / (M * d * a ** 2) : 0, b = f > 0 && M > 0 ? 12 * r * e / (M * f * a ** 2) : 0, h = r * c / a, y = M * l / a, p = 12 * r * o / a ** 3 / (1 + i), m = 6 * r * o / a ** 2 / (1 + i), u = 4 * r * o / a * (1 + i / 4) / (1 + i), _ = 2 * r * o / a * (1 - i / 2) / (1 + i), x = 12 * r * e / a ** 3 / (1 + b), g = 6 * r * e / a ** 2 / (1 + b), D = 4 * r * e / a * (1 + b / 4) / (1 + b), R = 2 * r * e / a * (1 - b / 2) / (1 + b);
  return [[h, 0, 0, 0, 0, 0, -h, 0, 0, 0, 0, 0], [0, p, 0, 0, 0, m, 0, -p, 0, 0, 0, m], [0, 0, x, 0, -g, 0, 0, 0, -x, 0, -g, 0], [0, 0, 0, y, 0, 0, 0, 0, 0, -y, 0, 0], [0, 0, -g, 0, D, 0, 0, 0, g, 0, R, 0], [0, m, 0, 0, 0, u, 0, -m, 0, 0, 0, _], [-h, 0, 0, 0, 0, 0, h, 0, 0, 0, 0, 0], [0, -p, 0, 0, 0, -m, 0, p, 0, 0, 0, -m], [0, 0, -x, 0, g, 0, 0, 0, x, 0, g, 0], [0, 0, 0, -y, 0, 0, 0, 0, 0, y, 0, 0], [0, 0, -g, 0, R, 0, 0, 0, g, 0, D, 0], [0, m, 0, 0, 0, _, 0, -m, 0, 0, 0, u]];
}
function mo(t, n, s) {
  var _a, _b, _c, _d, _e;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.elasticitiesOrthogonal) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n.poissonsRatios) == null ? void 0 : _c.get(s)) ?? 0, c = ((_d = n.shearModuli) == null ? void 0 : _d.get(s)) ?? 0, M = ((_e = n.thicknesses) == null ? void 0 : _e.get(s)) ?? 0, l = e > 0, a = l ? H(o, e, c, r, M) : S(o, r, M), f = l ? w(c, M) : G(o, r, M), d = l ? Dn(o, e, c, r) : jn(o, r), i = t.map(([Q, Y]) => [Q, Y]), b = i[1][0] - i[0][0], h = i[2][0] - i[0][0], y = i[0][1] - i[1][1], p = i[2][1] - i[0][1], m = 0.5 * (b * p - h * -y), u = st(i), _ = Pt(i), x = ct(i, d, M), g = O(O(Et(u), f), u), D = O(O(Et(_), a), _), R = Z(18, 18).toArray(), E = O(Ut(g, D), m), v = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let Q = 0; Q < 3; Q++) for (let Y = 0; Y < 3; Y++) for (let A = 0; A < 3; A++) {
    const N = v[Q][Y], X = v[A][Y];
    R[N][X] = x[Q * 3 + Y][A * 3 + Y];
  }
  for (let Q = 0; Q < 18; Q++) for (let Y = 0; Y < 18; Y++) R[Q][Y] = (R[Q][Y] ?? 0) + E.get([Q, Y]);
  return R;
  function S(Q, Y, A) {
    const N = Q / (1 - Y * Y), X = F([[N, N * Y, 0], [N * Y, N, 0], [0, 0, N * (1 - Y) / 2]]);
    return O(A ** 3 / 12, X);
  }
  function G(Q, Y, A) {
    const N = 0.8333333333333334, X = Q / (2 * (1 + Y)), B = N * X * A;
    return F([[B, 0], [0, B]]);
  }
  function H(Q, Y, A, N, X) {
    const B = Y * N / Q, j = 1 - N * B, J = Q / j, V = Y / j, $ = N * Y / j, L = F([[J, $, 0], [$, V, 0], [0, 0, A]]);
    return O(X ** 3 / 12, L);
  }
  function w(Q, Y) {
    const N = 0.8333333333333334 * Q * Y;
    return F([[N, 0], [0, N]]);
  }
  function st(Q) {
    const Y = Z(2, 18).toArray(), [A, N] = Q[0], [X, B] = Q[1], [j, J] = Q[2], V = 0.5 * ((X - A) * (J - N) - (j - A) * -(N - B)), $ = (A + X + j) / 3, I = (N + B + J) / 3, L = [$, A, X], yt = [I, N, B], bt = [$, X, j], ot = [I, B, J], mt = [$, j, A], K = [I, J, N], T = 1 / 3, [tt, z, Yt, Tt] = Mt(L, yt), [At, Ct, Jt, Xt] = Mt(bt, ot), [Kt, Ht, tn, nn] = Mt(mt, K), et = Z(2, 18).toArray(), at = Z(2, 18).toArray(), xt = Z(2, 18).toArray();
    for (let C = 0; C < 2; C++) for (let k = 0; k < 6; k++) et[C][k] = T * tt[C][k] + z[C][k], et[C][k + 6] = T * tt[C][k] + Yt[C][k], et[C][k + 12] = T * tt[C][k], at[C][k] = T * At[C][k], at[C][k + 6] = T * At[C][k] + Ct[C][k], at[C][k + 12] = T * At[C][k] + Jt[C][k], xt[C][k] = T * Kt[C][k] + tn[C][k], xt[C][k + 6] = T * Kt[C][k], xt[C][k + 12] = T * Kt[C][k] + Ht[C][k];
    for (let C = 0; C < 2; C++) for (let k = 0; k < 18; k++) et[C][k] *= Tt, at[C][k] *= Xt, xt[C][k] *= nn, Y[C][k] = (et[C][k] + at[C][k] + xt[C][k]) / V;
    return Y;
  }
  function Mt(Q, Y) {
    const A = Z(2, 6).toArray(), N = Z(2, 6).toArray(), X = Z(2, 6).toArray(), B = Q[1] - Q[0], j = Q[0] - Q[2], J = Y[2] - Y[0], V = Y[0] - Y[1], $ = Q[2] - Q[1], I = Y[1] - Y[2], L = 0.5 * (B * J - j * V), yt = 0.5 * V * j, bt = 0.5 * J * B, ot = 0.5 * B * j, mt = 0.5 * V * J;
    return A[0][2] = 0.5 * $ / L, A[0][3] = -0.5, A[1][2] = 0.5 * I / L, A[1][4] = 0.5, N[0][2] = 0.5 * j / L, N[0][3] = 0.5 * yt / L, N[0][4] = 0.5 * ot / L, N[1][2] = 0.5 * J / L, N[1][3] = 0.5 * mt / L, N[1][4] = 0.5 * bt / L, X[0][2] = 0.5 * B / L, X[0][3] = -0.5 * bt / L, X[0][4] = -0.5 * ot / L, X[1][2] = 0.5 * V / L, X[1][3] = -0.5 * mt / L, X[1][4] = -0.5 * yt / L, [A, N, X, L];
  }
  function Pt(Q) {
    const Y = Z(3, 18).toArray(), [A, N] = Q[0], [X, B] = Q[1], [j, J] = Q[2], V = X - A, $ = j - A, I = j - X, L = B - J, yt = J - N, bt = N - B, ot = 0.5 * (V * yt - $ * -bt), mt = L / (2 * ot), K = I / (2 * ot), T = yt / (2 * ot), tt = -$ / (2 * ot), z = bt / (2 * ot), Yt = V / (2 * ot);
    return Y[0][4] = mt, Y[0][10] = T, Y[0][16] = z, Y[1][3] = -K, Y[1][9] = -tt, Y[1][15] = -Yt, Y[2][3] = -mt, Y[2][4] = K, Y[2][9] = -T, Y[2][10] = tt, Y[2][15] = -z, Y[2][16] = Yt, Y;
  }
  function ct(Q, Y, A) {
    let N = Z(9, 9).toArray(), X = Z(9, 9).toArray(), B = Z(9, 9).toArray(), j = Z(9, 3).toArray(), J = Z(3, 9).toArray(), V = Z(3, 3).toArray(), $ = Z(3, 3).toArray(), I = Z(3, 3).toArray(), L = Z(3, 3).toArray(), yt = Z(3, 3).toArray(), bt = Z(3, 3).toArray(), ot = Z(3, 3).toArray(), mt = Z(3, 3).toArray();
    const K = 1 / 8, T = K / 6, tt = K ** 2 / 4, z = 1, Yt = 2, Tt = 1, At = 0, Ct = 1, Jt = -1, Xt = -1, Kt = -1, Ht = -2, tn = Q[0][0], nn = Q[0][1], et = Q[1][0], at = Q[1][1], xt = Q[2][0], C = Q[2][1], k = tn - et, vt = et - xt, Nt = xt - tn, wt = nn - at, zt = at - C, Bt = C - nn, _t = -k, St = -vt, ht = -Nt, it = -wt, gt = -zt, rt = -Bt, jt = 0.5 * (_t * Bt - Nt * -wt), Vt = 2 * jt, nt = 4 * jt, U = 0.5 * A, rn = jt * A, lt = _t ** 2 + it ** 2, ft = St ** 2 + gt ** 2, pt = ht ** 2 + rt ** 2;
    j[0][0] = U * zt, j[0][2] = U * St, j[1][1] = U * St, j[1][2] = U * zt, j[2][0] = U * zt * (rt - it) * T, j[2][1] = U * St * (Nt - k) * T, j[2][2] = U * (Nt * rt - k * it) * 2 * T, j[3][0] = U * Bt, j[3][2] = U * ht, j[4][1] = U * ht, j[4][2] = U * Bt, j[5][0] = U * Bt * (it - gt) * T, j[5][1] = U * ht * (k - vt) * T, j[5][2] = U * (k * it - vt * gt) * 2 * T, j[6][0] = U * wt, j[6][2] = U * _t, j[7][1] = U * _t, j[7][2] = U * wt, j[8][0] = U * wt * (gt - rt) * T, j[8][1] = U * _t * (vt - Nt) * T, j[8][2] = U * (vt * gt - Nt * rt) * 2 * T, B = O(O(F(j), Y), Et(F(j))).toArray(), B = O(F(B), 1 / rn).toArray(), J[0][0] = St / nt, J[0][1] = gt / nt, J[0][2] = 1, J[0][3] = ht / nt, J[0][4] = rt / nt, J[0][6] = _t / nt, J[0][7] = it / nt, J[1][0] = St / nt, J[1][1] = gt / nt, J[1][3] = ht / nt, J[1][4] = rt / nt, J[1][5] = 1, J[1][6] = _t / nt, J[1][7] = it / nt, J[2][0] = St / nt, J[2][1] = gt / nt, J[2][3] = ht / nt, J[2][4] = rt / nt, J[2][6] = _t / nt, J[2][7] = it / nt, J[2][8] = 1;
    const Qt = 1 / (jt * nt);
    V[0][0] = Qt * zt * rt * lt, V[0][1] = Qt * Bt * it * ft, V[0][2] = Qt * wt * gt * pt, V[1][0] = Qt * vt * ht * lt, V[1][1] = Qt * Nt * _t * ft, V[1][2] = Qt * k * St * pt, V[2][0] = Qt * (zt * Nt + St * rt) * lt, V[2][1] = Qt * (Bt * k + ht * it) * ft, V[2][2] = Qt * (wt * vt + _t * gt) * pt;
    const q = Vt / 3;
    $[0][0] = q * z / lt, $[0][1] = q * Yt / lt, $[0][2] = q * Tt / lt, $[1][0] = q * At / ft, $[1][1] = q * Ct / ft, $[1][2] = q * Jt / ft, $[2][0] = q * Xt / pt, $[2][1] = q * Kt / pt, $[2][2] = q * Ht / pt, I[0][0] = q * Ht / lt, I[0][1] = q * Xt / lt, I[0][2] = q * Kt / lt, I[1][0] = q * Tt / ft, I[1][1] = q * z / ft, I[1][2] = q * Yt / ft, I[2][0] = q * Jt / pt, I[2][1] = q * At / pt, I[2][2] = q * Ct / pt, L[0][0] = q * Ct / lt, L[0][1] = q * Jt / lt, L[0][2] = q * At / lt, L[1][0] = q * Kt / ft, L[1][1] = q * Ht / ft, L[1][2] = q * Xt / ft, L[2][0] = q * Yt / pt, L[2][1] = q * Tt / pt, L[2][2] = q * z / pt, yt = O(Ut(F($), F(I)), 0.5).toArray(), bt = O(Ut(F(I), F(L)), 0.5).toArray(), ot = O(Ut(F(L), F($)), 0.5).toArray();
    const $t = O(O(Et(F(V)), Y), F(V));
    return mt = Ut(Ut(O(O(Et(F(yt)), $t), F(yt)), O(O(Et(F(bt)), $t), F(bt))), O(O(Et(F(ot)), $t), F(ot))).toArray(), mt = O(F(mt), 3 / 4 * tt * rn).toArray(), X = O(O(Et(F(J)), F(mt)), F(J)).toArray(), N = Ut(F(B), F(X)).toArray(), N;
  }
}
function jn(t, n) {
  const s = t / (1 - n * n);
  return F([[s, s * n, 0], [s * n, s, 0], [0, 0, s * (1 - n) / 2]]);
}
function Dn(t, n, s, o) {
  const e = n * o / t, r = 1 - o * e, c = t / r, M = n / r, l = o * n / r;
  return F([[c, l, 0], [l, M, 0], [0, 0, s]]);
}
function Ao(t, n, s, o) {
  const e = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map(), membranePrincipalMax: /* @__PURE__ */ new Map(), membranePrincipalMin: /* @__PURE__ */ new Map(), bendingPrincipalMax: /* @__PURE__ */ new Map(), bendingPrincipalMin: /* @__PURE__ */ new Map(), transverseShearMax: /* @__PURE__ */ new Map() }, r = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map(), membranePrincipalMax: /* @__PURE__ */ new Map(), membranePrincipalMin: /* @__PURE__ */ new Map(), bendingPrincipalMax: /* @__PURE__ */ new Map(), bendingPrincipalMin: /* @__PURE__ */ new Map(), transverseShearMax: /* @__PURE__ */ new Map() }, c = (l, a, f) => {
    const d = (l + a) / 2, i = Math.sqrt(((l - a) / 2) ** 2 + f ** 2);
    return { max: d + i, min: d - i };
  };
  n.forEach((l, a) => {
    var _a;
    const f = l.map((i) => t[i]), d = l.reduce((i, b) => {
      var _a2;
      const h = (_a2 = o.deformations) == null ? void 0 : _a2.get(b);
      return i.concat(h ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (l.length === 2) {
      const i = Xn(f), b = O(i, d), h = ao(f, s, a);
      let y = O(h, b);
      e.normals.set(a, [y[0], y[6]]), e.shearsY.set(a, [y[1], y[7]]), e.shearsZ.set(a, [y[2], y[8]]), e.torsions.set(a, [y[3], y[9]]), e.bendingsY.set(a, [y[4], y[10]]), e.bendingsZ.set(a, [y[5], y[11]]);
    } else if (l.length === 4) {
      const i = po(f, d, s, a);
      r.membraneXX.set(a, i.Nx), r.membraneYY.set(a, i.Ny), r.membraneXY.set(a, i.Nxy), r.bendingXX.set(a, i.Mx), r.bendingYY.set(a, i.My), r.bendingXY.set(a, i.Mxy), r.tranverseShearX.set(a, i.Qx), r.tranverseShearY.set(a, i.Qy), r.vonMises.set(a, i.vonMises);
      const b = c(i.Nx, i.Ny, i.Nxy), h = c(i.Mx, i.My, i.Mxy);
      r.membranePrincipalMax.set(a, b.max), r.membranePrincipalMin.set(a, b.min), r.bendingPrincipalMax.set(a, h.max), r.bendingPrincipalMin.set(a, h.min), r.transverseShearMax.set(a, Math.sqrt(i.Qx ** 2 + i.Qy ** 2));
      const y = i.nodes.map((w) => w.Nx), p = i.nodes.map((w) => w.Ny), m = i.nodes.map((w) => w.Nxy), u = i.nodes.map((w) => w.Mx), _ = i.nodes.map((w) => w.My), x = i.nodes.map((w) => w.Mxy), g = i.nodes.map((w) => w.Qx), D = i.nodes.map((w) => w.Qy), R = i.nodes.map((w) => w.vonMises);
      e.membraneXX.set(a, y), e.membraneYY.set(a, p), e.membraneXY.set(a, m), e.bendingXX.set(a, u), e.bendingYY.set(a, _), e.bendingXY.set(a, x), e.tranverseShearX.set(a, g), e.tranverseShearY.set(a, D), e.vonMises.set(a, R);
      const E = i.nodes.map((w) => c(w.Nx, w.Ny, w.Nxy).max), v = i.nodes.map((w) => c(w.Nx, w.Ny, w.Nxy).min), S = i.nodes.map((w) => c(w.Mx, w.My, w.Mxy).max), G = i.nodes.map((w) => c(w.Mx, w.My, w.Mxy).min), H = i.nodes.map((w) => Math.sqrt(w.Qx * w.Qx + w.Qy * w.Qy));
      e.membranePrincipalMax.set(a, E), e.membranePrincipalMin.set(a, v), e.bendingPrincipalMax.set(a, S), e.bendingPrincipalMin.set(a, G), e.transverseShearMax.set(a, H);
    } else if (l.length === 3) {
      const i = Xn(f);
      O(i, d);
      const b = uo(s, a), h = yo(f), y = bo(d), p = xo(f), u = O(1 / (2 * p), O(O(b, h), y)).toArray(), _ = ((_a = s.thicknesses) == null ? void 0 : _a.get(a)) ?? 1, x = u[0][0] * _, g = u[1][0] * _, D = u[2][0] * _, R = u[0][1] * (_ ** 3 / 12), E = u[1][1] * (_ ** 3 / 12), v = u[2][1] * (_ ** 3 / 12);
      r.membraneXX.set(a, x), r.membraneYY.set(a, g), r.membraneXY.set(a, D), r.bendingXX.set(a, R), r.bendingYY.set(a, E), r.bendingXY.set(a, v);
      const S = c(x, g, D), G = c(R, E, v);
      r.membranePrincipalMax.set(a, S.max), r.membranePrincipalMin.set(a, S.min), r.bendingPrincipalMax.set(a, G.max), r.bendingPrincipalMin.set(a, G.min), r.transverseShearMax.set(a, 0);
    }
  });
  const { nodeToCentroidElementIndiciesMap: M } = No(t, n);
  return n.forEach((l, a) => {
    if (l.length !== 3 && l.length !== 4 || l.length === 4 && e.bendingXX.has(a)) return;
    const f = l.length, d = new Array(f).fill(0), i = new Array(f).fill(0), b = new Array(f).fill(0), h = new Array(f).fill(0), y = new Array(f).fill(0), p = new Array(f).fill(0), m = new Array(f).fill(0), u = new Array(f).fill(0), _ = new Array(f).fill(0), x = new Array(f).fill(0), g = new Array(f).fill(0), D = new Array(f).fill(0), R = new Array(f).fill(0), E = new Array(f).fill(0);
    l.forEach((v, S) => {
      const G = M.get(v) || [], H = (w) => Jn(G.map((st) => w.get(st) ?? 0));
      d[S] = H(r.membraneXX), i[S] = H(r.membraneYY), b[S] = H(r.membraneXY), h[S] = H(r.bendingXX), y[S] = H(r.bendingYY), p[S] = H(r.bendingXY), m[S] = H(r.tranverseShearX), u[S] = H(r.tranverseShearY), x[S] = H(r.membranePrincipalMax), g[S] = H(r.membranePrincipalMin), D[S] = H(r.bendingPrincipalMax), R[S] = H(r.bendingPrincipalMin), E[S] = H(r.transverseShearMax), _[S] = H(r.vonMises);
    }), e.membraneXX.set(a, d), e.membraneYY.set(a, i), e.membraneXY.set(a, b), e.bendingXX.set(a, h), e.bendingYY.set(a, y), e.bendingXY.set(a, p), e.tranverseShearX.set(a, m), e.tranverseShearY.set(a, u), e.vonMises.set(a, _), e.membranePrincipalMax.set(a, x), e.membranePrincipalMin.set(a, g), e.bendingPrincipalMax.set(a, D), e.bendingPrincipalMin.set(a, R), e.transverseShearMax.set(a, E);
  }), e;
}
const bn = Math.sqrt(3), qt = 1 / bn, Ft = [[-qt, -qt], [qt, -qt], [qt, qt], [-qt, qt]], ln = 1 + bn / 2, Ot = -0.5, fn = 1 - bn / 2, ho = [[ln, Ot, fn, Ot], [Ot, ln, Ot, fn], [fn, Ot, ln, Ot], [Ot, fn, Ot, ln]];
function Rt(t, n, s, o, e) {
  const r = ho[e];
  return r[0] * t + r[1] * n + r[2] * s + r[3] * o;
}
function go(t, n, s, o, e) {
  const r = [3 * t * (1 - n) / (s * s), -3 * t * (1 - n) / (s * s), -3 * t * (1 + n) / (s * s), 3 * t * (1 + n) / (s * s)], c = [(1 - n) * (3 * t - 1) / (2 * s), (1 - n) * (1 + 3 * t) / (2 * s), (1 + n) * (1 + 3 * t) / (2 * s), (1 + n) * (3 * t - 1) / (2 * s)], M = [3 * (1 - t) * n / (o * o), 3 * (1 + t) * n / (o * o), -3 * (1 + t) * n / (o * o), -3 * (1 - t) * n / (o * o)], l = [(1 - t) * (3 * n - 1) / (2 * o), (1 + t) * (3 * n - 1) / (2 * o), (1 + t) * (1 + 3 * n) / (2 * o), (1 - t) * (1 + 3 * n) / (2 * o)], a = 3 * (2 - t * t - n * n) / (2 * s * o), f = [a, -a, a, -a], d = [(1 - n) * (1 + 3 * n) / (4 * s), -(1 - n) * (1 + 3 * n) / (4 * s), (1 + n) * (3 * n - 1) / (4 * s), (1 + n) * (1 - 3 * n) / (4 * s)], i = [(1 - t) * (1 + 3 * t) / (4 * o), (1 + t) * (1 - 3 * t) / (4 * o), (1 + t) * (3 * t - 1) / (4 * o), -(1 - t) * (1 + 3 * t) / (4 * o)];
  let b = 0, h = 0, y = 0;
  for (let p = 0; p < 4; p++) {
    const m = e[p * 6 + 2], u = e[p * 6 + 3], _ = e[p * 6 + 4];
    b += r[p] * m - c[p] * _, h += M[p] * m + l[p] * u, y += f[p] * m + d[p] * u - i[p] * _;
  }
  return [b, h, y];
}
function po(t, n, s, o) {
  var _a, _b, _c;
  const e = ((_a = s.elasticities) == null ? void 0 : _a.get(o)) ?? 0, r = ((_b = s.poissonsRatios) == null ? void 0 : _b.get(o)) ?? 0, c = ((_c = s.thicknesses) == null ? void 0 : _c.get(o)) ?? 1, M = t[0], l = t[1], a = t[2], f = t[3], d = [l[0] - M[0], l[1] - M[1], l[2] - M[2]], i = [a[0] - f[0], a[1] - f[1], a[2] - f[2]];
  let b = [d[0] + i[0], d[1] + i[1], d[2] + i[2]], h = Math.sqrt(b[0] * b[0] + b[1] * b[1] + b[2] * b[2]);
  h < 1e-14 && (h = 1);
  let y = [b[0] / h, b[1] / h, b[2] / h];
  const p = [a[0] - M[0], a[1] - M[1], a[2] - M[2]], m = [f[0] - l[0], f[1] - l[1], f[2] - l[2]];
  let u = [p[1] * m[2] - p[2] * m[1], p[2] * m[0] - p[0] * m[2], p[0] * m[1] - p[1] * m[0]], _ = Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2]);
  _ < 1e-14 && (_ = 1);
  let x = [u[0] / _, u[1] / _, u[2] / _], g = [x[1] * y[2] - x[2] * y[1], x[2] * y[0] - x[0] * y[2], x[0] * y[1] - x[1] * y[0]], D = Math.sqrt(g[0] * g[0] + g[1] * g[1] + g[2] * g[2]);
  D < 1e-14 && (D = 1), g = [g[0] / D, g[1] / D, g[2] / D], y = [g[1] * x[2] - g[2] * x[1], g[2] * x[0] - g[0] * x[2], g[0] * x[1] - g[1] * x[0]];
  const R = 0.25 * (M[0] + l[0] + a[0] + f[0]), E = 0.25 * (M[1] + l[1] + a[1] + f[1]), v = 0.25 * (M[2] + l[2] + a[2] + f[2]), S = [], G = [];
  for (let K = 0; K < 4; K++) {
    const T = t[K][0] - R, tt = t[K][1] - E, z = t[K][2] - v;
    S.push(T * y[0] + tt * y[1] + z * y[2]), G.push(T * g[0] + tt * g[1] + z * g[2]);
  }
  const H = [y, g, x], w = new Array(24).fill(0);
  for (let K = 0; K < 4; K++) {
    const T = K * 6, tt = K * 6;
    for (let z = 0; z < 3; z++) w[tt + z] = H[z][0] * n[T] + H[z][1] * n[T + 1] + H[z][2] * n[T + 2];
    for (let z = 0; z < 3; z++) w[tt + 3 + z] = H[z][0] * n[T + 3] + H[z][1] * n[T + 4] + H[z][2] * n[T + 5];
  }
  const st = e / (1 - r * r), Mt = [[st * c, st * r * c, 0], [st * r * c, st * c, 0], [0, 0, st * (1 - r) / 2 * c]], Pt = c * c * c / 12, ct = [[st * Pt, st * r * Pt, 0], [st * r * Pt, st * Pt, 0], [0, 0, st * (1 - r) / 2 * Pt]];
  function Q(K, T) {
    const tt = [-0.25 * (1 - T), 0.25 * (1 - T), 0.25 * (1 + T), -0.25 * (1 + T)], z = [-0.25 * (1 - K), -0.25 * (1 + K), 0.25 * (1 + K), 0.25 * (1 - K)], Yt = [0.25 * (1 - K) * (1 - T), 0.25 * (1 + K) * (1 - T), 0.25 * (1 + K) * (1 + T), 0.25 * (1 - K) * (1 + T)];
    let Tt = 0, At = 0, Ct = 0, Jt = 0;
    for (let P = 0; P < 4; P++) Tt += tt[P] * S[P], At += tt[P] * G[P], Ct += z[P] * S[P], Jt += z[P] * G[P];
    const Xt = Tt * Jt - At * Ct;
    if (Math.abs(Xt) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
    const Kt = Jt / Xt, Ht = -At / Xt, tn = -Ct / Xt, nn = Tt / Xt, et = [], at = [];
    for (let P = 0; P < 4; P++) et.push(Kt * tt[P] + Ht * z[P]), at.push(tn * tt[P] + nn * z[P]);
    let xt = 0, C = 0, k = 0;
    for (let P = 0; P < 4; P++) {
      const Lt = w[P * 6 + 0], Wt = w[P * 6 + 1];
      xt += et[P] * Lt, C += at[P] * Wt, k += at[P] * Lt + et[P] * Wt;
    }
    const vt = Mt[0][0] * xt + Mt[0][1] * C, Nt = Mt[1][0] * xt + Mt[1][1] * C, wt = Mt[2][2] * k, zt = Math.min(S[0], S[1], S[2], S[3]), Bt = Math.max(S[0], S[1], S[2], S[3]), _t = Math.min(G[0], G[1], G[2], G[3]), St = Math.max(G[0], G[1], G[2], G[3]), ht = Bt - zt, it = St - _t;
    let gt = ht > 1e-9 && it > 1e-9;
    if (gt) {
      for (let P = 0; P < 4; P++) if (Math.abs(Math.abs(S[P]) - ht / 2) > 1e-6 * ht || Math.abs(Math.abs(G[P]) - it / 2) > 1e-6 * it) {
        gt = false;
        break;
      }
    }
    let rt, jt, Vt;
    if (gt) {
      const P = go(K, T, ht, it, w);
      rt = ct[0][0] * P[0] + ct[0][1] * P[1], jt = ct[1][0] * P[0] + ct[1][1] * P[1], Vt = ct[2][2] * P[2];
    } else {
      let P = 0, Lt = 0, Wt = 0;
      for (let Dt = 0; Dt < 4; Dt++) {
        const Nn = w[Dt * 6 + 3], _n = w[Dt * 6 + 4];
        P += -et[Dt] * _n, Lt += +at[Dt] * Nn, Wt += +et[Dt] * Nn - at[Dt] * _n;
      }
      rt = ct[0][0] * P + ct[0][1] * Lt, jt = ct[1][0] * P + ct[1][1] * Lt, Vt = ct[2][2] * Wt;
    }
    const nt = 5 / 6, U = e / (2 * (1 + r)), rn = nt * U * c;
    let lt = 0, ft = 0;
    for (let P = 0; P < 4; P++) {
      const Lt = w[P * 6 + 2], Wt = w[P * 6 + 3], Dt = w[P * 6 + 4];
      lt += et[P] * Lt + Yt[P] * Wt, ft += at[P] * Lt + Yt[P] * Dt;
    }
    const pt = rn * lt, Qt = rn * ft, q = vt / c + 6 * rt / (c * c), $t = Nt / c + 6 * jt / (c * c), dn = wt / c + 6 * Vt / (c * c), hn = vt / c - 6 * rt / (c * c), gn = Nt / c - 6 * jt / (c * c), xn = wt / c - 6 * Vt / (c * c), kn = Math.sqrt(q * q - q * $t + $t * $t + 3 * dn * dn), Tn = Math.sqrt(hn * hn - hn * gn + gn * gn + 3 * xn * xn);
    return { Nx: vt, Ny: Nt, Nxy: wt, Mx: rt, My: jt, Mxy: Vt, Qx: pt, Qy: Qt, vonMises: Math.max(kn, Tn) };
  }
  const Y = Q(Ft[0][0], Ft[0][1]), A = Q(Ft[1][0], Ft[1][1]), N = Q(Ft[2][0], Ft[2][1]), X = Q(Ft[3][0], Ft[3][1]), B = [0, 1, 2, 3].map((K) => ({ Nx: Rt(Y.Nx, A.Nx, N.Nx, X.Nx, K), Ny: Rt(Y.Ny, A.Ny, N.Ny, X.Ny, K), Nxy: Rt(Y.Nxy, A.Nxy, N.Nxy, X.Nxy, K), Mx: Rt(Y.Mx, A.Mx, N.Mx, X.Mx, K), My: Rt(Y.My, A.My, N.My, X.My, K), Mxy: Rt(Y.Mxy, A.Mxy, N.Mxy, X.Mxy, K), Qx: Rt(Y.Qx, A.Qx, N.Qx, X.Qx, K), Qy: Rt(Y.Qy, A.Qy, N.Qy, X.Qy, K), vonMises: Rt(Y.vonMises, A.vonMises, N.vonMises, X.vonMises, K) })), j = (K, T, tt, z) => 0.25 * (K + T + tt + z), J = j(Y.Nx, A.Nx, N.Nx, X.Nx), V = j(Y.Ny, A.Ny, N.Ny, X.Ny), $ = j(Y.Nxy, A.Nxy, N.Nxy, X.Nxy), I = j(Y.Mx, A.Mx, N.Mx, X.Mx), L = j(Y.My, A.My, N.My, X.My), yt = j(Y.Mxy, A.Mxy, N.Mxy, X.Mxy), bt = j(Y.Qx, A.Qx, N.Qx, X.Qx), ot = j(Y.Qy, A.Qy, N.Qy, X.Qy), mt = j(Y.vonMises, A.vonMises, N.vonMises, X.vonMises);
  return { Nx: J, Ny: V, Nxy: $, Mx: I, My: L, Mxy: yt, Qx: bt, Qy: ot, vonMises: mt, nodes: B };
}
function uo(t, n) {
  var _a, _b, _c, _d, _e;
  const s = ((_a = t.elasticities) == null ? void 0 : _a.get(n)) ?? 0, o = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, e = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, r = ((_d = t.shearModuli) == null ? void 0 : _d.get(n)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(n), o > 0 ? Dn(s, o, r, e) : jn(s, e);
}
function yo(t) {
  const [n, s] = t[0], [o, e] = t[1], [r, c] = t[2], M = e - c, l = c - s, a = s - e, f = r - o, d = n - r, i = o - n;
  return F([[M, l, a, 0, 0, 0], [0, 0, 0, f, d, i], [f, d, i, M, l, a]]);
}
function bo(t) {
  const [n, s, o] = [t[0], t[6], t[12]], [e, r, c] = [t[1], t[7], t[13]], [M, l, a] = [t[4], t[10], t[16]], [f, d, i] = [t[3], t[9], t[15]];
  return F([[n, -M], [s, -l], [o, -a], [e, f], [r, d], [c, i]]);
}
function xo(t) {
  const [n, s] = t[0], [o, e] = t[1], [r, c] = t[2], M = o - n, l = r - n, a = c - s, f = s - e;
  return 0.5 * (M * a - l * -f);
}
function No(t, n) {
  const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return n.forEach((e, r) => {
    const c = e.map((l) => t[l]), M = _o(c);
    e.forEach((l) => {
      var _a, _b;
      s.has(l) || s.set(l, []), (_a = s.get(l)) == null ? void 0 : _a.push(M), o.has(l) || o.set(l, []), (_b = o.get(l)) == null ? void 0 : _b.push(r);
    });
  }), { nodeToCentroidNodesMap: s, nodeToCentroidElementIndiciesMap: o };
}
function _o(t) {
  const n = t.reduce((e, r) => e + r[0], 0) / t.length, s = t.reduce((e, r) => e + r[1], 0) / t.length, o = t.reduce((e, r) => e + r[2], 0) / t.length;
  return [n, s, o];
}
export {
  Ao as a,
  Xn as b,
  ao as g
};
