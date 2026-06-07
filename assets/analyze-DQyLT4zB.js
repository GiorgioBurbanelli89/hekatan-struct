import { s as xn, n as on, b as mn, k as Qn, i as Nn, z as Z, c as yn, m as O, t as zt, a as Vt, e as F, f as Pn } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const $ = 1 / Math.sqrt(3);
function sn(t, n) {
  const s = [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)], o = [-0.25 * (1 - n), 0.25 * (1 - n), 0.25 * (1 + n), -0.25 * (1 + n)], e = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: s, dNdxi: o, dNdeta: e };
}
function tn(t, n, s, o) {
  let e = 0, r = 0, c = 0, M = 0;
  for (let i = 0; i < 4; i++) e += t[i] * s[i], r += t[i] * o[i], c += n[i] * s[i], M += n[i] * o[i];
  const l = e * M - r * c, a = 1 / l, f = [], N = [];
  for (let i = 0; i < 4; i++) f.push(a * (M * t[i] - r * n[i])), N.push(a * (-c * t[i] + e * n[i]));
  return { dNdx: f, dNdy: N, detJ: l };
}
function jn(t, n, s, o, e) {
  const l = mt(12, 12), a = s * e / (1 - o * o), f = [[-$, -$], [$, -$], [$, $], [-$, $]], { dNdxi: N, dNdeta: i } = sn(0, 0), { detJ: x } = tn(N, i, t, n);
  for (const [b, h] of f) {
    const { dNdxi: P, dNdeta: z } = sn(b, h), { dNdx: q, dNdy: v, detJ: D } = tn(P, z, t, n);
    tn(N, i, t, n);
    const nt = N.reduce((d, X, L) => d + X * t[L], 0), G = N.reduce((d, X, L) => d + X * n[L], 0), w = i.reduce((d, X, L) => d + X * t[L], 0), st = i.reduce((d, X, L) => d + X * n[L], 0), lt = 1 / x, Pt = lt * st * (-2 * b), jt = lt * -w * (-2 * b), S = lt * -G * (-2 * h), _ = lt * nt * (-2 * h), A = [[], [], []];
    for (let d = 0; d < 4; d++) A[0].push(q[d], 0), A[1].push(0, v[d]), A[2].push(v[d], q[d]);
    A[0].push(Pt, 0, S, 0), A[1].push(0, jt, 0, _), A[2].push(jt, Pt, _, S);
    for (let d = 0; d < 12; d++) for (let X = 0; X < 12; X++) {
      let L = 0;
      L += a * (A[0][d] * A[0][X] + o * A[0][d] * A[1][X] + o * A[1][d] * A[0][X] + A[1][d] * A[1][X]), L += a * (1 - o) / 2 * A[2][d] * A[2][X], l[d][X] += L * Math.abs(D);
    }
  }
  const g = mt(8, 8), y = mt(8, 4), p = mt(4, 8), m = mt(4, 4);
  for (let b = 0; b < 8; b++) for (let h = 0; h < 8; h++) g[b][h] = l[b][h];
  for (let b = 0; b < 8; b++) for (let h = 0; h < 4; h++) y[b][h] = l[b][8 + h];
  for (let b = 0; b < 4; b++) for (let h = 0; h < 8; h++) p[b][h] = l[8 + b][h];
  for (let b = 0; b < 4; b++) for (let h = 0; h < 4; h++) m[b][h] = l[8 + b][8 + h];
  const u = Dn(m);
  if (!u) return g;
  const Y = mt(8, 8);
  for (let b = 0; b < 8; b++) for (let h = 0; h < 8; h++) {
    let P = 0;
    for (let z = 0; z < 4; z++) for (let q = 0; q < 4; q++) P += y[b][z] * u[z][q] * p[q][h];
    Y[b][h] = g[b][h] - P;
  }
  return Y;
}
function Dn(t) {
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
function Cn(t, n, s, o, e) {
  const r = mt(12, 12), c = [[-$, -$], [$, -$], [$, $], [-$, $]];
  for (const [M, l] of c) {
    const { N: a, dNdxi: f, dNdeta: N } = sn(M, l), { dNdx: i, dNdy: x, detJ: g } = tn(f, N, t, n), y = new Array(12).fill(0);
    for (let m = 0; m < 4; m++) y[m * 3] = 0.5 * x[m], y[m * 3 + 1] = -0.5 * i[m], y[m * 3 + 2] = a[m];
    const p = e * s * o * Math.abs(g);
    for (let m = 0; m < 12; m++) for (let u = 0; u < 12; u++) r[m][u] += p * y[m] * y[u];
  }
  return r;
}
function kn(t, n, s, o, e) {
  const r = mt(12, 12), c = s * e * e * e / (12 * (1 - o * o)), l = 5 / 6 * s / (2 * (1 + o)) * e, a = [[-$, -$], [$, -$], [$, $], [-$, $]], f = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], N = [];
  for (const i of f) {
    const { N: x, dNdxi: g, dNdeta: y } = sn(i.xi, i.eta), { dNdx: p, dNdy: m } = tn(g, y, t, n), u = mt(2, 12);
    for (let Y = 0; Y < 4; Y++) u[0][Y * 3] = p[Y], u[0][Y * 3 + 1] = -x[Y], u[1][Y * 3] = m[Y], u[1][Y * 3 + 2] = -x[Y];
    N.push(u);
  }
  for (const [i, x] of a) {
    const { dNdxi: g, dNdeta: y } = sn(i, x), { dNdx: p, dNdy: m, detJ: u } = tn(g, y, t, n), Y = mt(3, 12);
    for (let v = 0; v < 4; v++) Y[0][v * 3 + 1] = p[v], Y[1][v * 3 + 2] = m[v], Y[2][v * 3 + 1] = m[v], Y[2][v * 3 + 2] = p[v];
    for (let v = 0; v < 12; v++) for (let D = 0; D < 12; D++) {
      let nt = 0;
      nt += c * (Y[0][v] * Y[0][D] + o * Y[0][v] * Y[1][D] + o * Y[1][v] * Y[0][D] + Y[1][v] * Y[1][D]), nt += c * (1 - o) / 2 * Y[2][v] * Y[2][D], r[v][D] += nt * Math.abs(u);
    }
    const b = mt(2, 12), h = 0.5 * (1 - x), P = 0.5 * (1 + x), z = 0.5 * (1 - i), q = 0.5 * (1 + i);
    for (let v = 0; v < 12; v++) b[0][v] = h * N[0][0][v] + P * N[1][0][v], b[1][v] = z * N[2][1][v] + q * N[3][1][v];
    for (let v = 0; v < 12; v++) for (let D = 0; D < 12; D++) r[v][D] += l * (b[0][v] * b[0][D] + b[1][v] * b[1][D]) * Math.abs(u);
  }
  return r;
}
function Jn(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n == null ? void 0 : n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n == null ? void 0 : n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0.2, r = ((_c = n == null ? void 0 : n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0;
  if (o === 0 || r === 0) return mt(24, 24);
  const { localCoords: c } = _n(t), M = c.map((u) => u[0]), l = c.map((u) => u[1]), a = jn(M, l, o, e, r), f = kn(M, l, o, e, r), N = o / (2 * (1 + e)), x = Cn(M, l, N, r, 0.5), g = mt(24, 24), y = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let u = 0; u < 8; u++) for (let Y = 0; Y < 8; Y++) g[y[u]][y[Y]] += a[u][Y];
  const p = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let u = 0; u < 12; u++) for (let Y = 0; Y < 12; Y++) g[p[u]][p[Y]] += f[u][Y];
  const m = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let u = 0; u < 12; u++) for (let Y = 0; Y < 12; Y++) g[m[u]][m[Y]] += x[u][Y];
  return g;
}
function Tn(t) {
  const { localX: n, localY: s, localZ: o } = _n(t), e = [[n[0], n[1], n[2]], [s[0], s[1], s[2]], [o[0], o[1], o[2]]], r = mt(24, 24);
  for (let c = 0; c < 4; c++) for (let M = 0; M < 2; M++) {
    const l = c * 6 + M * 3;
    for (let a = 0; a < 3; a++) for (let f = 0; f < 3; f++) r[l + a][l + f] = e[a][f];
  }
  return r;
}
function _n(t) {
  const n = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], s = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], o = pn(n, s), e = Math.sqrt(o[0] ** 2 + o[1] ** 2 + o[2] ** 2), r = o.map((g) => g / e), c = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], M = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2), l = c.map((g) => g / M), a = pn(r, l), f = t.map((g) => g[0]).reduce((g, y) => g + y) / 4, N = t.map((g) => g[1]).reduce((g, y) => g + y) / 4, i = t.map((g) => g[2]).reduce((g, y) => g + y) / 4, x = t.map((g) => {
    const y = g[0] - f, p = g[1] - N, m = g[2] - i;
    return [y * l[0] + p * l[1] + m * l[2], y * a[0] + p * a[1] + m * a[2]];
  });
  return { localX: l, localY: a, localZ: r, localCoords: x };
}
function pn(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function mt(t, n) {
  return Array.from({ length: t }, () => Array(n).fill(0));
}
function bn(t) {
  if (t.length === 2) return Kn(t);
  if (t.length === 3) return Ln(t);
  if (t.length === 4) return Tn(t);
}
function Kn(t) {
  const n = xn(t[1], t[0]), s = on(n), o = mn(n, [1, 0, 0]) / s, e = mn(n, [0, 1, 0]) / s, r = mn(n, [0, 0, 1]) / s, c = Math.sqrt(o ** 2 + e ** 2);
  let M = [[o, e, r], [-e / c, o / c, 0], [-o * r / c, -e * r / c, c]];
  return r === 1 && (M = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), r === -1 && (M = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), Qn(Nn(4), M).toArray();
}
function Ln(t) {
  const r = [t[0], t[1], t[2]], c = Z(3, 3).toArray();
  for (let h = 0; h < 3; h++) for (let P = 0; P < 3; P++) c[h][P] = r[P][h];
  const M = [-1, 1, 0], l = [-1, 0, 1], a = Z(3, 2).toArray();
  for (let h = 0; h < 3; h++) for (let P = 0; P < 3; P++) a[h][0] += c[h][P] * M[P], a[h][1] += c[h][P] * l[P];
  const f = a.map((h) => h[0]), N = a.map((h) => h[1]);
  let i = yn(f, N), x = on(i);
  if (x === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), Z(18, 18).toArray();
  i = i.map((h) => h / x);
  const g = [...i], y = Nn(3).toArray(), p = i[0];
  let m;
  if (Math.abs(p) > 1 - 1e-10) {
    const h = i[2];
    m = y.map((P, z) => P[2] - h * i[z]);
  } else m = y.map((h, P) => h[0] - p * i[P]);
  if (x = on(m), x === 0) return console.warn("Degenerate local X-axis detected."), Z(18, 18).toArray();
  m = m.map((h) => h / x);
  let u = yn(g, m);
  if (x = on(u), x === 0) return console.warn("Degenerate local Y-axis detected."), Z(18, 18).toArray();
  u = u.map((h) => h / x);
  const Y = [m, u, g], b = Z(18, 18).toArray();
  for (let h = 0; h < 3; h++) {
    const P = h * 6, z = P + 3;
    for (let q = 0; q < 3; q++) for (let v = 0; v < 3; v++) b[P + q][P + v] = Y[q][v], b[z + q][z + v] = Y[q][v];
  }
  return b;
}
function $t(t, n) {
  const s = [];
  for (let o = 0; o < t; o++) {
    const e = [];
    for (let r = 0; r < n; r++) e.push(0);
    s.push(e);
  }
  return s;
}
function dt(t, n) {
  const s = t.length, o = n[0].length, e = n.length, r = $t(s, o);
  for (let c = 0; c < s; c++) for (let M = 0; M < o; M++) {
    let l = 0;
    for (let a = 0; a < e; a++) l += t[c][a] * n[a][M];
    r[c][M] = l;
  }
  return r;
}
function fn(t, n) {
  const s = t.length, o = t[0].length, e = $t(s, o);
  for (let r = 0; r < s; r++) for (let c = 0; c < o; c++) e[r][c] = t[r][c] + n[r][c];
  return e;
}
function rn(t, n) {
  const s = t.length, o = t[0].length, e = $t(s, o);
  for (let r = 0; r < s; r++) for (let c = 0; c < o; c++) e[r][c] = t[r][c] * n;
  return e;
}
function hn(t) {
  const n = t.length, s = t[0].length, o = $t(s, n);
  for (let e = 0; e < n; e++) for (let r = 0; r < s; r++) o[r][e] = t[e][r];
  return o;
}
function gn(t) {
  return t[0][0] * t[1][1] - t[0][1] * t[1][0];
}
function Mn(t) {
  const n = gn(t);
  return [[t[1][1] / n, -t[0][1] / n], [-t[1][0] / n, t[0][0] / n]];
}
function Bn(t) {
  const [n, s, o, e] = t, r = [s[0] - n[0], s[1] - n[1], s[2] - n[2]], c = [o[0] - n[0], o[1] - n[1], o[2] - n[2]], M = [e[0] - n[0], e[1] - n[1], e[2] - n[2]], l = Math.hypot(r[0], r[1], r[2]), a = [r[0] / l, r[1] / l, r[2] / l], f = [a[1] * c[2] - a[2] * c[1], a[2] * c[0] - a[0] * c[2], a[0] * c[1] - a[1] * c[0]], N = Math.hypot(f[0], f[1], f[2]), i = [f[0] / N, f[1] / N, f[2] / N], x = [i[1] * a[2] - i[2] * a[1], i[2] * a[0] - i[0] * a[2], i[0] * a[1] - i[1] * a[0]], g = (m, u) => m[0] * u[0] + m[1] * u[1] + m[2] * u[2], y = [0, g(r, a), g(c, a), g(M, a)], p = [0, g(r, x), g(c, x), g(M, x)];
  return { x: y, y: p };
}
function Ct(t, n, s) {
  if (s === 5) return Math.hypot(t[1] - t[0], n[1] - n[0]);
  if (s === 6) return Math.hypot(t[2] - t[1], n[2] - n[1]);
  if (s === 7) return Math.hypot(t[3] - t[2], n[3] - n[2]);
  if (s === 8) return Math.hypot(t[0] - t[3], n[0] - n[3]);
  throw new Error("k debe ser 5..8");
}
function Ft(t, n, s) {
  const o = Ct(t, n, s);
  if (s === 5) return [(t[1] - t[0]) / o, (n[1] - n[0]) / o];
  if (s === 6) return [(t[2] - t[1]) / o, (n[2] - n[1]) / o];
  if (s === 7) return [(t[3] - t[2]) / o, (n[3] - n[2]) / o];
  if (s === 8) return [(t[0] - t[3]) / o, (n[0] - n[3]) / o];
  throw new Error("k debe ser 5..8");
}
function Ot(t, n, s, o, e) {
  return 2 / (0.8333333333333334 * (1 - e)) * Math.pow(o / Ct(t, n, s), 2);
}
function nn(t, n, s, o) {
  return [[0.25 * (t[0] * (o - 1) - t[1] * (o - 1) + t[2] * (o + 1) - t[3] * (o + 1)), 0.25 * (n[0] * (o - 1) - n[1] * (o - 1) + n[2] * (o + 1) - n[3] * (o + 1))], [0.25 * (t[0] * (s - 1) - t[1] * (s + 1) + t[2] * (s + 1) - t[3] * (s - 1)), 0.25 * (n[0] * (s - 1) - n[1] * (s + 1) + n[2] * (s + 1) - n[3] * (s - 1))]];
}
function zn(t, n) {
  return [[0.5 * (1 - n), 0, 0.5 * (1 + n), 0], [0, 0.5 * (1 + t), 0, 0.5 * (1 - t)]];
}
function En(t, n) {
  const s = Ct(t, n, 5), o = Ct(t, n, 6), e = Ct(t, n, 7), r = Ct(t, n, 8);
  return [[s / 2, 0, 0, 0], [0, o / 2, 0, 0], [0, 0, -e / 2, 0], [0, 0, 0, -r / 2]];
}
function Yn(t, n) {
  const s = Ct(t, n, 5), o = Ct(t, n, 6), e = Ct(t, n, 7), r = Ct(t, n, 8), [c, M] = Ft(t, n, 5), [l, a] = Ft(t, n, 6), [f, N] = Ft(t, n, 7), [i, x] = Ft(t, n, 8);
  return rn([[-2 / s, c, M, 2 / s, c, M, 0, 0, 0, 0, 0, 0], [0, 0, 0, -2 / o, l, a, 2 / o, l, a, 0, 0, 0], [0, 0, 0, 0, 0, 0, -2 / e, f, N, 2 / e, f, N], [2 / r, i, x, 0, 0, 0, 0, 0, 0, -2 / r, i, x]], 0.5);
}
function qn(t, n, s, o) {
  const e = Ot(t, n, 5, s, o), r = Ot(t, n, 6, s, o), c = Ot(t, n, 7, s, o), M = Ot(t, n, 8, s, o);
  return rn([[1 / (1 + e), 0, 0, 0], [0, 1 / (1 + r), 0, 0], [0, 0, 1 / (1 + c), 0], [0, 0, 0, 1 / (1 + M)]], -1.5);
}
function Rn(t, n, s, o) {
  const e = Ot(t, n, 5, s, o), r = Ot(t, n, 6, s, o), c = Ot(t, n, 7, s, o), M = Ot(t, n, 8, s, o);
  return [[e / (1 + e), 0, 0, 0], [0, r / (1 + r), 0, 0], [0, 0, c / (1 + c), 0], [0, 0, 0, M / (1 + M)]];
}
function Fn(t, n, s, o) {
  const e = Mn(nn(t, n, s, o)), [r, c] = e[0], [M, l] = e[1], a = 0.25 * (o - 1), f = -0.25 * (o - 1), N = 0.25 * (o + 1), i = -0.25 * (o + 1), x = 0.25 * (s - 1), g = -0.25 * (s + 1), y = 0.25 * (s + 1), p = -0.25 * (s - 1), m = [r * a + c * x, r * f + c * g, r * N + c * y, r * i + c * p], u = [M * a + l * x, M * f + l * g, M * N + l * y, M * i + l * p];
  return [[0, m[0], 0, 0, m[1], 0, 0, m[2], 0, 0, m[3], 0], [0, 0, u[0], 0, 0, u[1], 0, 0, u[2], 0, 0, u[3]], [0, u[0], m[0], 0, u[1], m[1], 0, u[2], m[2], 0, u[3], m[3]]];
}
function On(t, n, s, o) {
  const e = Mn(nn(t, n, s, o)), [r, c] = e[0], [M, l] = e[1], a = s * (o - 1), f = -0.5 * (o - 1) * (o + 1), N = -s * (o + 1), i = 0.5 * (o - 1) * (o + 1), x = 0.5 * (s - 1) * (s + 1), g = -o * (s + 1), y = -0.5 * (s - 1) * (s + 1), p = o * (s - 1), m = [r * a + c * x, r * f + c * g, r * N + c * y, r * i + c * p], u = [M * a + l * x, M * f + l * g, M * N + l * y, M * i + l * p], [Y, b] = Ft(t, n, 5), [h, P] = Ft(t, n, 6), [z, q] = Ft(t, n, 7), [v, D] = Ft(t, n, 8);
  return [[m[0] * Y, m[1] * h, m[2] * z, m[3] * v], [u[0] * b, u[1] * P, u[2] * q, u[3] * D], [u[0] * Y + m[0] * b, u[1] * h + m[1] * P, u[2] * z + m[2] * q, u[3] * v + m[3] * D]];
}
function Zn(t, n, s, o, e, r) {
  return fn(Fn(t, n, s, o), dt(dt(On(t, n, s, o), qn(t, n, e, r)), Yn(t, n)));
}
function Gn(t, n, s, o, e, r) {
  return dt(dt(dt(dt(Mn(nn(t, n, s, o)), zn(s, o)), En(t, n)), Rn(t, n, e, r)), Yn(t, n));
}
function Hn(t, n, s, o) {
  const e = Mn(nn(t, n, s, o)), r = [[0.25 * (o - 1), 0.25 * (-o + 1), 0.25 * (o + 1), 0.25 * (-o - 1)], [0.25 * (s - 1), 0.25 * (-s - 1), 0.25 * (s + 1), 0.25 * (-s + 1)]], c = dt(e, r);
  return [[c[0][0], 0, c[0][1], 0, c[0][2], 0, c[0][3], 0], [0, c[1][0], 0, c[1][1], 0, c[1][2], 0, c[1][3]], [c[1][0], c[0][0], c[1][1], c[0][1], c[1][2], c[0][2], c[1][3], c[0][3]]];
}
function Vn(t, n, s) {
  const o = t * s ** 3 / (12 * (1 - n ** 2));
  return [[o, o * n, 0], [o * n, o, 0], [0, 0, o * (1 - n) / 2]];
}
function $n(t, n, s) {
  const e = t * s * 0.8333333333333334 / (2 * (1 + n));
  return [[e, 0], [0, e]];
}
function Wn(t, n) {
  const s = t / (2 * (1 + n)), o = 1 / (1 - n * n);
  return [[o * t, o * n * t, 0], [o * n * t, o * t, 0], [0, 0, (1 - n * n) * s]];
}
function Un(t, n, s, o, e) {
  const r = Vn(o, e, s), c = $n(o, e, s), M = 1 / Math.sqrt(3), l = [-M, M, M, -M], a = [-M, -M, M, M];
  let f = $t(12, 12);
  for (let N = 0; N < 4; N++) {
    const i = gn(nn(t, n, l[N], a[N])), x = Zn(t, n, l[N], a[N], s, e), g = Gn(t, n, l[N], a[N], s, e);
    f = fn(f, rn(dt(dt(hn(x), r), x), i)), f = fn(f, rn(dt(dt(hn(g), c), g), i));
  }
  return f;
}
function In(t, n, s, o, e) {
  const r = Wn(o, e), c = 1 / Math.sqrt(3), M = [-c, c, c, -c], l = [-c, -c, c, c];
  let a = $t(8, 8);
  for (let f = 0; f < 4; f++) {
    const N = gn(nn(t, n, M[f], l[f])), i = Hn(t, n, M[f], l[f]);
    a = fn(a, rn(dt(dt(hn(i), r), i), N * s));
  }
  return a;
}
function to(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0, { x: c, y: M } = Bn(t), l = Un(c, M, r, o, e), a = In(c, M, r, o, e), f = $t(24, 24), N = (p) => [0, 3, 6, 9].includes(p) ? 2 * p + 2 : [1, 4, 7, 10].includes(p) ? 2 * p + 1 : 2 * p;
  for (let p = 0; p < 12; p++) for (let m = 0; m < 12; m++) f[N(p)][N(m)] = l[p][m];
  const i = [1, 2, 4, 5, 7, 8, 10, 11].map((p) => Math.abs(l[p][p])), x = Math.min(...i) / 1e3;
  f[5][5] = x, f[11][11] = x, f[17][17] = x, f[23][23] = x;
  for (const p of [4, 10, 16, 22]) for (let m = 0; m < 24; m++) f[p][m] *= -1, f[m][p] *= -1;
  const g = (p, m, u) => {
    const Y = p[m];
    p[m] = p[u], p[u] = Y;
    for (let b = 0; b < p.length; b++) {
      const h = p[b][m];
      p[b][m] = p[b][u], p[b][u] = h;
    }
  };
  g(f, 3, 4), g(f, 9, 10), g(f, 15, 16), g(f, 21, 22);
  const y = (p) => Math.floor(p / 2) * 6 + p % 2;
  for (let p = 0; p < 8; p++) for (let m = 0; m < 8; m++) f[y(p)][y(m)] += a[p][m];
  return f;
}
function no(t, n, s) {
  var _a, _b;
  if (t.length === 2) {
    let o = co(t, n, s);
    const e = (_a = n == null ? void 0 : n.partialFixitySprings) == null ? void 0 : _a.get(s);
    e && (o = oo(o, e));
    const r = (_b = n == null ? void 0 : n.momentReleases) == null ? void 0 : _b.get(s);
    return r && (o = so(o, r)), o;
  }
  if (t.length === 3) return eo(t, n, s);
  if (t.length === 4) {
    try {
      const o = typeof window < "u" ? window : globalThis;
      if (o && o.__hekatanShellFormulation === "DKMQ") return to(t, n, s);
    } catch {
    }
    return Jn(t, n, s);
  }
}
function oo(t, n) {
  const s = t.map((e) => [...e]), o = Math.min(n.length, 12);
  for (let e = 0; e < o; e++) n[e] > 1e-12 && (s[e][e] += n[e]);
  return s;
}
function so(t, n) {
  const s = [];
  if (n.length >= 12) for (let g = 0; g < 12; g++) n[g] && s.push(g);
  else {
    const g = [3, 4, 5, 9, 10, 11];
    for (let y = 0; y < Math.min(n.length, 6); y++) n[y] && s.push(g[y]);
  }
  if (s.length === 0) return t;
  const o = t.length, e = [];
  for (let g = 0; g < o; g++) s.includes(g) || e.push(g);
  const r = e.length, c = s.length, M = Array.from({ length: c }, (g, y) => Array.from({ length: c }, (p, m) => t[s[y]][s[m]])), l = Array.from({ length: r }, (g, y) => Array.from({ length: c }, (p, m) => t[e[y]][s[m]])), a = Array.from({ length: c }, (g, y) => Array.from({ length: r }, (p, m) => t[s[y]][e[m]])), f = ro(M);
  if (!f) return t;
  const N = dn(l, f), i = dn(N, a), x = Array.from({ length: o }, () => Array(o).fill(0));
  for (let g = 0; g < r; g++) for (let y = 0; y < r; y++) x[e[g]][e[y]] = t[e[g]][e[y]] - i[g][y];
  return x;
}
function dn(t, n) {
  const s = t.length, o = n[0].length, e = n.length, r = Array.from({ length: s }, () => Array(o).fill(0));
  for (let c = 0; c < s; c++) for (let M = 0; M < o; M++) for (let l = 0; l < e; l++) r[c][M] += t[c][l] * n[l][M];
  return r;
}
function ro(t) {
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
function co(t, n, s) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const o = ((_a = n == null ? void 0 : n.momentsOfInertiaZ) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n == null ? void 0 : n.momentsOfInertiaY) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n == null ? void 0 : n.elasticities) == null ? void 0 : _c.get(s)) ?? 0, c = ((_d = n == null ? void 0 : n.areas) == null ? void 0 : _d.get(s)) ?? 0, M = ((_e = n == null ? void 0 : n.shearModuli) == null ? void 0 : _e.get(s)) ?? 0, l = ((_f = n == null ? void 0 : n.torsionalConstants) == null ? void 0 : _f.get(s)) ?? 0, a = on(xn(t[0], t[1]));
  let f = ((_g = n == null ? void 0 : n.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, N = ((_h = n == null ? void 0 : n.shearAreasZ) == null ? void 0 : _h.get(s)) ?? 0;
  f === 0 && N === 0 && c > 0 && M > 0 && (f = N = 5 / 6 * c);
  const i = N > 0 && M > 0 ? 12 * r * o / (M * N * a ** 2) : 0, x = f > 0 && M > 0 ? 12 * r * e / (M * f * a ** 2) : 0, g = r * c / a, y = M * l / a, p = 12 * r * o / a ** 3 / (1 + i), m = 6 * r * o / a ** 2 / (1 + i), u = 4 * r * o / a * (1 + i / 4) / (1 + i), Y = 2 * r * o / a * (1 - i / 2) / (1 + i), b = 12 * r * e / a ** 3 / (1 + x), h = 6 * r * e / a ** 2 / (1 + x), P = 4 * r * e / a * (1 + x / 4) / (1 + x), z = 2 * r * e / a * (1 - x / 2) / (1 + x);
  return [[g, 0, 0, 0, 0, 0, -g, 0, 0, 0, 0, 0], [0, p, 0, 0, 0, m, 0, -p, 0, 0, 0, m], [0, 0, b, 0, -h, 0, 0, 0, -b, 0, -h, 0], [0, 0, 0, y, 0, 0, 0, 0, 0, -y, 0, 0], [0, 0, -h, 0, P, 0, 0, 0, h, 0, z, 0], [0, m, 0, 0, 0, u, 0, -m, 0, 0, 0, Y], [-g, 0, 0, 0, 0, 0, g, 0, 0, 0, 0, 0], [0, -p, 0, 0, 0, -m, 0, p, 0, 0, 0, -m], [0, 0, -b, 0, h, 0, 0, 0, b, 0, h, 0], [0, 0, 0, -y, 0, 0, 0, 0, 0, y, 0, 0], [0, 0, -h, 0, z, 0, 0, 0, h, 0, P, 0], [0, m, 0, 0, 0, Y, 0, -m, 0, 0, 0, u]];
}
function eo(t, n, s) {
  var _a, _b, _c, _d, _e;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.elasticitiesOrthogonal) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n.poissonsRatios) == null ? void 0 : _c.get(s)) ?? 0, c = ((_d = n.shearModuli) == null ? void 0 : _d.get(s)) ?? 0, M = ((_e = n.thicknesses) == null ? void 0 : _e.get(s)) ?? 0, l = e > 0, a = l ? G(o, e, c, r, M) : D(o, r, M), f = l ? w(c, M) : nt(o, r, M), N = l ? Xn(o, e, c, r) : An(o, r), i = t.map(([S, _]) => [S, _]), x = i[1][0] - i[0][0], g = i[2][0] - i[0][0], y = i[0][1] - i[1][1], p = i[2][1] - i[0][1], m = 0.5 * (x * p - g * -y), u = st(i), Y = Pt(i), b = jt(i, N, M), h = O(O(zt(u), f), u), P = O(O(zt(Y), a), Y), z = Z(18, 18).toArray(), q = O(Vt(h, P), m), v = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let S = 0; S < 3; S++) for (let _ = 0; _ < 3; _++) for (let A = 0; A < 3; A++) {
    const d = v[S][_], X = v[A][_];
    z[d][X] = b[S * 3 + _][A * 3 + _];
  }
  for (let S = 0; S < 18; S++) for (let _ = 0; _ < 18; _++) z[S][_] = (z[S][_] ?? 0) + q.get([S, _]);
  return z;
  function D(S, _, A) {
    const d = S / (1 - _ * _), X = F([[d, d * _, 0], [d * _, d, 0], [0, 0, d * (1 - _) / 2]]);
    return O(A ** 3 / 12, X);
  }
  function nt(S, _, A) {
    const d = 0.8333333333333334, X = S / (2 * (1 + _)), L = d * X * A;
    return F([[L, 0], [0, L]]);
  }
  function G(S, _, A, d, X) {
    const L = _ * d / S, Q = 1 - d * L, T = S / Q, H = _ / Q, V = d * _ / Q, B = F([[T, V, 0], [V, H, 0], [0, 0, A]]);
    return O(X ** 3 / 12, B);
  }
  function w(S, _) {
    const d = 0.8333333333333334 * S * _;
    return F([[d, 0], [0, d]]);
  }
  function st(S) {
    const _ = Z(2, 18).toArray(), [A, d] = S[0], [X, L] = S[1], [Q, T] = S[2], H = 0.5 * ((X - A) * (T - d) - (Q - A) * -(d - L)), V = (A + X + Q) / 3, U = (d + L + T) / 3, B = [V, A, X], ht = [U, d, L], gt = [V, X, Q], ot = [U, L, T], ft = [V, Q, A], K = [U, T, d], k = 1 / 3, [tt, E, At, kt] = lt(B, ht), [Xt, Jt, Tt, vt] = lt(gt, ot), [Kt, Zt, Wt, Ut] = lt(ft, K), et = Z(2, 18).toArray(), at = Z(2, 18).toArray(), xt = Z(2, 18).toArray();
    for (let J = 0; J < 2; J++) for (let j = 0; j < 6; j++) et[J][j] = k * tt[J][j] + E[J][j], et[J][j + 6] = k * tt[J][j] + At[J][j], et[J][j + 12] = k * tt[J][j], at[J][j] = k * Xt[J][j], at[J][j + 6] = k * Xt[J][j] + Jt[J][j], at[J][j + 12] = k * Xt[J][j] + Tt[J][j], xt[J][j] = k * Kt[J][j] + Wt[J][j], xt[J][j + 6] = k * Kt[J][j], xt[J][j + 12] = k * Kt[J][j] + Zt[J][j];
    for (let J = 0; J < 2; J++) for (let j = 0; j < 18; j++) et[J][j] *= kt, at[J][j] *= vt, xt[J][j] *= Ut, _[J][j] = (et[J][j] + at[J][j] + xt[J][j]) / H;
    return _;
  }
  function lt(S, _) {
    const A = Z(2, 6).toArray(), d = Z(2, 6).toArray(), X = Z(2, 6).toArray(), L = S[1] - S[0], Q = S[0] - S[2], T = _[2] - _[0], H = _[0] - _[1], V = S[2] - S[1], U = _[1] - _[2], B = 0.5 * (L * T - Q * H), ht = 0.5 * H * Q, gt = 0.5 * T * L, ot = 0.5 * L * Q, ft = 0.5 * H * T;
    return A[0][2] = 0.5 * V / B, A[0][3] = -0.5, A[1][2] = 0.5 * U / B, A[1][4] = 0.5, d[0][2] = 0.5 * Q / B, d[0][3] = 0.5 * ht / B, d[0][4] = 0.5 * ot / B, d[1][2] = 0.5 * T / B, d[1][3] = 0.5 * ft / B, d[1][4] = 0.5 * gt / B, X[0][2] = 0.5 * L / B, X[0][3] = -0.5 * gt / B, X[0][4] = -0.5 * ot / B, X[1][2] = 0.5 * H / B, X[1][3] = -0.5 * ft / B, X[1][4] = -0.5 * ht / B, [A, d, X, B];
  }
  function Pt(S) {
    const _ = Z(3, 18).toArray(), [A, d] = S[0], [X, L] = S[1], [Q, T] = S[2], H = X - A, V = Q - A, U = Q - X, B = L - T, ht = T - d, gt = d - L, ot = 0.5 * (H * ht - V * -gt), ft = B / (2 * ot), K = U / (2 * ot), k = ht / (2 * ot), tt = -V / (2 * ot), E = gt / (2 * ot), At = H / (2 * ot);
    return _[0][4] = ft, _[0][10] = k, _[0][16] = E, _[1][3] = -K, _[1][9] = -tt, _[1][15] = -At, _[2][3] = -ft, _[2][4] = K, _[2][9] = -k, _[2][10] = tt, _[2][15] = -E, _[2][16] = At, _;
  }
  function jt(S, _, A) {
    let d = Z(9, 9).toArray(), X = Z(9, 9).toArray(), L = Z(9, 9).toArray(), Q = Z(9, 3).toArray(), T = Z(3, 9).toArray(), H = Z(3, 3).toArray(), V = Z(3, 3).toArray(), U = Z(3, 3).toArray(), B = Z(3, 3).toArray(), ht = Z(3, 3).toArray(), gt = Z(3, 3).toArray(), ot = Z(3, 3).toArray(), ft = Z(3, 3).toArray();
    const K = 1 / 8, k = K / 6, tt = K ** 2 / 4, E = 1, At = 2, kt = 1, Xt = 0, Jt = 1, Tt = -1, vt = -1, Kt = -1, Zt = -2, Wt = S[0][0], Ut = S[0][1], et = S[1][0], at = S[1][1], xt = S[2][0], J = S[2][1], j = Wt - et, wt = et - xt, Nt = xt - Wt, St = Ut - at, Dt = at - J, Qt = J - Ut, ut = -j, yt = -wt, pt = -Nt, Mt = -St, _t = -Dt, Yt = -Qt, Gt = 0.5 * (ut * Qt - Nt * -St), cn = 2 * Gt, I = 4 * Gt, W = 0.5 * A, en = Gt * A, rt = ut ** 2 + Mt ** 2, ct = yt ** 2 + _t ** 2, it = pt ** 2 + Yt ** 2;
    Q[0][0] = W * Dt, Q[0][2] = W * yt, Q[1][1] = W * yt, Q[1][2] = W * Dt, Q[2][0] = W * Dt * (Yt - Mt) * k, Q[2][1] = W * yt * (Nt - j) * k, Q[2][2] = W * (Nt * Yt - j * Mt) * 2 * k, Q[3][0] = W * Qt, Q[3][2] = W * pt, Q[4][1] = W * pt, Q[4][2] = W * Qt, Q[5][0] = W * Qt * (Mt - _t) * k, Q[5][1] = W * pt * (j - wt) * k, Q[5][2] = W * (j * Mt - wt * _t) * 2 * k, Q[6][0] = W * St, Q[6][2] = W * ut, Q[7][1] = W * ut, Q[7][2] = W * St, Q[8][0] = W * St * (_t - Yt) * k, Q[8][1] = W * ut * (wt - Nt) * k, Q[8][2] = W * (wt * _t - Nt * Yt) * 2 * k, L = O(O(F(Q), _), zt(F(Q))).toArray(), L = O(F(L), 1 / en).toArray(), T[0][0] = yt / I, T[0][1] = _t / I, T[0][2] = 1, T[0][3] = pt / I, T[0][4] = Yt / I, T[0][6] = ut / I, T[0][7] = Mt / I, T[1][0] = yt / I, T[1][1] = _t / I, T[1][3] = pt / I, T[1][4] = Yt / I, T[1][5] = 1, T[1][6] = ut / I, T[1][7] = Mt / I, T[2][0] = yt / I, T[2][1] = _t / I, T[2][3] = pt / I, T[2][4] = Yt / I, T[2][6] = ut / I, T[2][7] = Mt / I, T[2][8] = 1;
    const bt = 1 / (Gt * I);
    H[0][0] = bt * Dt * Yt * rt, H[0][1] = bt * Qt * Mt * ct, H[0][2] = bt * St * _t * it, H[1][0] = bt * wt * pt * rt, H[1][1] = bt * Nt * ut * ct, H[1][2] = bt * j * yt * it, H[2][0] = bt * (Dt * Nt + yt * Yt) * rt, H[2][1] = bt * (Qt * j + pt * Mt) * ct, H[2][2] = bt * (St * wt + ut * _t) * it;
    const R = cn / 3;
    V[0][0] = R * E / rt, V[0][1] = R * At / rt, V[0][2] = R * kt / rt, V[1][0] = R * Xt / ct, V[1][1] = R * Jt / ct, V[1][2] = R * Tt / ct, V[2][0] = R * vt / it, V[2][1] = R * Kt / it, V[2][2] = R * Zt / it, U[0][0] = R * Zt / rt, U[0][1] = R * vt / rt, U[0][2] = R * Kt / rt, U[1][0] = R * kt / ct, U[1][1] = R * E / ct, U[1][2] = R * At / ct, U[2][0] = R * Tt / it, U[2][1] = R * Xt / it, U[2][2] = R * Jt / it, B[0][0] = R * Jt / rt, B[0][1] = R * Tt / rt, B[0][2] = R * Xt / rt, B[1][0] = R * Kt / ct, B[1][1] = R * Zt / ct, B[1][2] = R * vt / ct, B[2][0] = R * At / it, B[2][1] = R * kt / it, B[2][2] = R * E / it, ht = O(Vt(F(V), F(U)), 0.5).toArray(), gt = O(Vt(F(U), F(B)), 0.5).toArray(), ot = O(Vt(F(B), F(V)), 0.5).toArray();
    const It = O(O(zt(F(H)), _), F(H));
    return ft = Vt(Vt(O(O(zt(F(ht)), It), F(ht)), O(O(zt(F(gt)), It), F(gt))), O(O(zt(F(ot)), It), F(ot))).toArray(), ft = O(F(ft), 3 / 4 * tt * en).toArray(), X = O(O(zt(F(T)), F(ft)), F(T)).toArray(), d = Vt(F(L), F(X)).toArray(), d;
  }
}
function An(t, n) {
  const s = t / (1 - n * n);
  return F([[s, s * n, 0], [s * n, s, 0], [0, 0, s * (1 - n) / 2]]);
}
function Xn(t, n, s, o) {
  const e = n * o / t, r = 1 - o * e, c = t / r, M = n / r, l = o * n / r;
  return F([[c, l, 0], [l, M, 0], [0, 0, s]]);
}
function yo(t, n, s, o) {
  const e = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map(), membranePrincipalMax: /* @__PURE__ */ new Map(), membranePrincipalMin: /* @__PURE__ */ new Map(), bendingPrincipalMax: /* @__PURE__ */ new Map(), bendingPrincipalMin: /* @__PURE__ */ new Map(), transverseShearMax: /* @__PURE__ */ new Map() }, r = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map(), membranePrincipalMax: /* @__PURE__ */ new Map(), membranePrincipalMin: /* @__PURE__ */ new Map(), bendingPrincipalMax: /* @__PURE__ */ new Map(), bendingPrincipalMin: /* @__PURE__ */ new Map(), transverseShearMax: /* @__PURE__ */ new Map() }, c = (l, a, f) => {
    const N = (l + a) / 2, i = Math.sqrt(((l - a) / 2) ** 2 + f ** 2);
    return { max: N + i, min: N - i };
  };
  n.forEach((l, a) => {
    var _a;
    const f = l.map((i) => t[i]), N = l.reduce((i, x) => {
      var _a2;
      const g = (_a2 = o.deformations) == null ? void 0 : _a2.get(x);
      return i.concat(g ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (l.length === 2) {
      const i = bn(f), x = O(i, N), g = no(f, s, a);
      let y = O(g, x);
      e.normals.set(a, [y[0], y[6]]), e.shearsY.set(a, [y[1], y[7]]), e.shearsZ.set(a, [y[2], y[8]]), e.torsions.set(a, [y[3], y[9]]), e.bendingsY.set(a, [y[4], y[10]]), e.bendingsZ.set(a, [y[5], y[11]]);
    } else if (l.length === 4) {
      const i = io(f, N, s, a);
      r.membraneXX.set(a, i.Nx), r.membraneYY.set(a, i.Ny), r.membraneXY.set(a, i.Nxy), r.bendingXX.set(a, i.Mx), r.bendingYY.set(a, i.My), r.bendingXY.set(a, i.Mxy), r.tranverseShearX.set(a, i.Qx), r.tranverseShearY.set(a, i.Qy), r.vonMises.set(a, i.vonMises);
      const x = c(i.Nx, i.Ny, i.Nxy), g = c(i.Mx, i.My, i.Mxy);
      r.membranePrincipalMax.set(a, x.max), r.membranePrincipalMin.set(a, x.min), r.bendingPrincipalMax.set(a, g.max), r.bendingPrincipalMin.set(a, g.min), r.transverseShearMax.set(a, Math.sqrt(i.Qx ** 2 + i.Qy ** 2));
      const y = i.nodes.map((w) => w.Nx), p = i.nodes.map((w) => w.Ny), m = i.nodes.map((w) => w.Nxy), u = i.nodes.map((w) => w.Mx), Y = i.nodes.map((w) => w.My), b = i.nodes.map((w) => w.Mxy), h = i.nodes.map((w) => w.Qx), P = i.nodes.map((w) => w.Qy), z = i.nodes.map((w) => w.vonMises);
      e.membraneXX.set(a, y), e.membraneYY.set(a, p), e.membraneXY.set(a, m), e.bendingXX.set(a, u), e.bendingYY.set(a, Y), e.bendingXY.set(a, b), e.tranverseShearX.set(a, h), e.tranverseShearY.set(a, P), e.vonMises.set(a, z);
      const q = i.nodes.map((w) => c(w.Nx, w.Ny, w.Nxy).max), v = i.nodes.map((w) => c(w.Nx, w.Ny, w.Nxy).min), D = i.nodes.map((w) => c(w.Mx, w.My, w.Mxy).max), nt = i.nodes.map((w) => c(w.Mx, w.My, w.Mxy).min), G = i.nodes.map((w) => Math.sqrt(w.Qx * w.Qx + w.Qy * w.Qy));
      e.membranePrincipalMax.set(a, q), e.membranePrincipalMin.set(a, v), e.bendingPrincipalMax.set(a, D), e.bendingPrincipalMin.set(a, nt), e.transverseShearMax.set(a, G);
    } else if (l.length === 3) {
      const i = bn(f);
      O(i, N);
      const x = lo(s, a), g = fo(f), y = Mo(N), p = mo(f), u = O(1 / (2 * p), O(O(x, g), y)).toArray(), Y = ((_a = s.thicknesses) == null ? void 0 : _a.get(a)) ?? 1, b = u[0][0] * Y, h = u[1][0] * Y, P = u[2][0] * Y, z = u[0][1] * (Y ** 3 / 12), q = u[1][1] * (Y ** 3 / 12), v = u[2][1] * (Y ** 3 / 12);
      r.membraneXX.set(a, b), r.membraneYY.set(a, h), r.membraneXY.set(a, P), r.bendingXX.set(a, z), r.bendingYY.set(a, q), r.bendingXY.set(a, v);
      const D = c(b, h, P), nt = c(z, q, v);
      r.membranePrincipalMax.set(a, D.max), r.membranePrincipalMin.set(a, D.min), r.bendingPrincipalMax.set(a, nt.max), r.bendingPrincipalMin.set(a, nt.min), r.transverseShearMax.set(a, 0);
    }
  });
  const { nodeToCentroidElementIndiciesMap: M } = ho(t, n);
  return n.forEach((l, a) => {
    if (l.length !== 3 && l.length !== 4 || l.length === 4 && e.bendingXX.has(a)) return;
    const f = l.length, N = new Array(f).fill(0), i = new Array(f).fill(0), x = new Array(f).fill(0), g = new Array(f).fill(0), y = new Array(f).fill(0), p = new Array(f).fill(0), m = new Array(f).fill(0), u = new Array(f).fill(0), Y = new Array(f).fill(0), b = new Array(f).fill(0), h = new Array(f).fill(0), P = new Array(f).fill(0), z = new Array(f).fill(0), q = new Array(f).fill(0);
    l.forEach((v, D) => {
      const nt = M.get(v) || [], G = (w) => Pn(nt.map((st) => w.get(st) ?? 0));
      N[D] = G(r.membraneXX), i[D] = G(r.membraneYY), x[D] = G(r.membraneXY), g[D] = G(r.bendingXX), y[D] = G(r.bendingYY), p[D] = G(r.bendingXY), m[D] = G(r.tranverseShearX), u[D] = G(r.tranverseShearY), b[D] = G(r.membranePrincipalMax), h[D] = G(r.membranePrincipalMin), P[D] = G(r.bendingPrincipalMax), z[D] = G(r.bendingPrincipalMin), q[D] = G(r.transverseShearMax), Y[D] = G(r.vonMises);
    }), e.membraneXX.set(a, N), e.membraneYY.set(a, i), e.membraneXY.set(a, x), e.bendingXX.set(a, g), e.bendingYY.set(a, y), e.bendingXY.set(a, p), e.tranverseShearX.set(a, m), e.tranverseShearY.set(a, u), e.vonMises.set(a, Y), e.membranePrincipalMax.set(a, b), e.membranePrincipalMin.set(a, h), e.bendingPrincipalMax.set(a, P), e.bendingPrincipalMin.set(a, z), e.transverseShearMax.set(a, q);
  }), e;
}
const un = Math.sqrt(3), Et = 1 / un, qt = [[-Et, -Et], [Et, -Et], [Et, Et], [-Et, Et]], an = 1 + un / 2, Rt = -0.5, ln = 1 - un / 2, ao = [[an, Rt, ln, Rt], [Rt, an, Rt, ln], [ln, Rt, an, Rt], [Rt, ln, Rt, an]];
function Lt(t, n, s, o, e) {
  const r = ao[e];
  return r[0] * t + r[1] * n + r[2] * s + r[3] * o;
}
function io(t, n, s, o) {
  var _a, _b, _c;
  const e = ((_a = s.elasticities) == null ? void 0 : _a.get(o)) ?? 0, r = ((_b = s.poissonsRatios) == null ? void 0 : _b.get(o)) ?? 0, c = ((_c = s.thicknesses) == null ? void 0 : _c.get(o)) ?? 1, M = t[0], l = t[1], a = t[2], f = t[3], N = [l[0] - M[0], l[1] - M[1], l[2] - M[2]], i = [a[0] - f[0], a[1] - f[1], a[2] - f[2]];
  let x = [N[0] + i[0], N[1] + i[1], N[2] + i[2]], g = Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]);
  g < 1e-14 && (g = 1);
  let y = [x[0] / g, x[1] / g, x[2] / g];
  const p = [a[0] - M[0], a[1] - M[1], a[2] - M[2]], m = [f[0] - l[0], f[1] - l[1], f[2] - l[2]];
  let u = [p[1] * m[2] - p[2] * m[1], p[2] * m[0] - p[0] * m[2], p[0] * m[1] - p[1] * m[0]], Y = Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2]);
  Y < 1e-14 && (Y = 1);
  let b = [u[0] / Y, u[1] / Y, u[2] / Y], h = [b[1] * y[2] - b[2] * y[1], b[2] * y[0] - b[0] * y[2], b[0] * y[1] - b[1] * y[0]], P = Math.sqrt(h[0] * h[0] + h[1] * h[1] + h[2] * h[2]);
  P < 1e-14 && (P = 1), h = [h[0] / P, h[1] / P, h[2] / P], y = [h[1] * b[2] - h[2] * b[1], h[2] * b[0] - h[0] * b[2], h[0] * b[1] - h[1] * b[0]];
  const z = 0.25 * (M[0] + l[0] + a[0] + f[0]), q = 0.25 * (M[1] + l[1] + a[1] + f[1]), v = 0.25 * (M[2] + l[2] + a[2] + f[2]), D = [], nt = [];
  for (let K = 0; K < 4; K++) {
    const k = t[K][0] - z, tt = t[K][1] - q, E = t[K][2] - v;
    D.push(k * y[0] + tt * y[1] + E * y[2]), nt.push(k * h[0] + tt * h[1] + E * h[2]);
  }
  const G = [y, h, b], w = new Array(24).fill(0);
  for (let K = 0; K < 4; K++) {
    const k = K * 6, tt = K * 6;
    for (let E = 0; E < 3; E++) w[tt + E] = G[E][0] * n[k] + G[E][1] * n[k + 1] + G[E][2] * n[k + 2];
    for (let E = 0; E < 3; E++) w[tt + 3 + E] = G[E][0] * n[k + 3] + G[E][1] * n[k + 4] + G[E][2] * n[k + 5];
  }
  const st = e / (1 - r * r), lt = [[st * c, st * r * c, 0], [st * r * c, st * c, 0], [0, 0, st * (1 - r) / 2 * c]], Pt = c * c * c / 12, jt = [[st * Pt, st * r * Pt, 0], [st * r * Pt, st * Pt, 0], [0, 0, st * (1 - r) / 2 * Pt]];
  function S(K, k) {
    const tt = [-0.25 * (1 - k), 0.25 * (1 - k), 0.25 * (1 + k), -0.25 * (1 + k)], E = [-0.25 * (1 - K), -0.25 * (1 + K), 0.25 * (1 + K), 0.25 * (1 - K)], At = [0.25 * (1 - K) * (1 - k), 0.25 * (1 + K) * (1 - k), 0.25 * (1 + K) * (1 + k), 0.25 * (1 - K) * (1 + k)];
    let kt = 0, Xt = 0, Jt = 0, Tt = 0;
    for (let C = 0; C < 4; C++) kt += tt[C] * D[C], Xt += tt[C] * nt[C], Jt += E[C] * D[C], Tt += E[C] * nt[C];
    const vt = kt * Tt - Xt * Jt;
    if (Math.abs(vt) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
    const Kt = Tt / vt, Zt = -Xt / vt, Wt = -Jt / vt, Ut = kt / vt, et = [], at = [];
    for (let C = 0; C < 4; C++) et.push(Kt * tt[C] + Zt * E[C]), at.push(Wt * tt[C] + Ut * E[C]);
    let xt = 0, J = 0, j = 0;
    for (let C = 0; C < 4; C++) {
      const Bt = w[C * 6 + 0], Ht = w[C * 6 + 1];
      xt += et[C] * Bt, J += at[C] * Ht, j += at[C] * Bt + et[C] * Ht;
    }
    const wt = lt[0][0] * xt + lt[0][1] * J, Nt = lt[1][0] * xt + lt[1][1] * J, St = lt[2][2] * j;
    let Dt = 0, Qt = 0, ut = 0;
    for (let C = 0; C < 4; C++) {
      const Bt = w[C * 6 + 3], Ht = w[C * 6 + 4];
      Dt += -et[C] * Ht, Qt += +at[C] * Bt, ut += +et[C] * Bt - at[C] * Ht;
    }
    const yt = jt[0][0] * Dt + jt[0][1] * Qt, pt = jt[1][0] * Dt + jt[1][1] * Qt, Mt = jt[2][2] * ut, _t = 5 / 6, Yt = e / (2 * (1 + r)), Gt = _t * Yt * c;
    let cn = 0, I = 0;
    for (let C = 0; C < 4; C++) {
      const Bt = w[C * 6 + 2], Ht = w[C * 6 + 3], Sn = w[C * 6 + 4];
      cn += et[C] * Bt + At[C] * Ht, I += at[C] * Bt + At[C] * Sn;
    }
    const W = Gt * cn, en = Gt * I, rt = wt / c + 6 * yt / (c * c), ct = Nt / c + 6 * pt / (c * c), it = St / c + 6 * Mt / (c * c), bt = wt / c - 6 * yt / (c * c), R = Nt / c - 6 * pt / (c * c), It = St / c - 6 * Mt / (c * c), vn = Math.sqrt(rt * rt - rt * ct + ct * ct + 3 * it * it), wn = Math.sqrt(bt * bt - bt * R + R * R + 3 * It * It);
    return { Nx: wt, Ny: Nt, Nxy: St, Mx: yt, My: pt, Mxy: Mt, Qx: W, Qy: en, vonMises: Math.max(vn, wn) };
  }
  const _ = S(qt[0][0], qt[0][1]), A = S(qt[1][0], qt[1][1]), d = S(qt[2][0], qt[2][1]), X = S(qt[3][0], qt[3][1]), L = [0, 1, 2, 3].map((K) => ({ Nx: Lt(_.Nx, A.Nx, d.Nx, X.Nx, K), Ny: Lt(_.Ny, A.Ny, d.Ny, X.Ny, K), Nxy: Lt(_.Nxy, A.Nxy, d.Nxy, X.Nxy, K), Mx: Lt(_.Mx, A.Mx, d.Mx, X.Mx, K), My: Lt(_.My, A.My, d.My, X.My, K), Mxy: Lt(_.Mxy, A.Mxy, d.Mxy, X.Mxy, K), Qx: Lt(_.Qx, A.Qx, d.Qx, X.Qx, K), Qy: Lt(_.Qy, A.Qy, d.Qy, X.Qy, K), vonMises: Lt(_.vonMises, A.vonMises, d.vonMises, X.vonMises, K) })), Q = (K, k, tt, E) => 0.25 * (K + k + tt + E), T = Q(_.Nx, A.Nx, d.Nx, X.Nx), H = Q(_.Ny, A.Ny, d.Ny, X.Ny), V = Q(_.Nxy, A.Nxy, d.Nxy, X.Nxy), U = Q(_.Mx, A.Mx, d.Mx, X.Mx), B = Q(_.My, A.My, d.My, X.My), ht = Q(_.Mxy, A.Mxy, d.Mxy, X.Mxy), gt = Q(_.Qx, A.Qx, d.Qx, X.Qx), ot = Q(_.Qy, A.Qy, d.Qy, X.Qy), ft = Q(_.vonMises, A.vonMises, d.vonMises, X.vonMises);
  return { Nx: T, Ny: H, Nxy: V, Mx: U, My: B, Mxy: ht, Qx: gt, Qy: ot, vonMises: ft, nodes: L };
}
function lo(t, n) {
  var _a, _b, _c, _d, _e;
  const s = ((_a = t.elasticities) == null ? void 0 : _a.get(n)) ?? 0, o = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, e = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, r = ((_d = t.shearModuli) == null ? void 0 : _d.get(n)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(n), o > 0 ? Xn(s, o, r, e) : An(s, e);
}
function fo(t) {
  const [n, s] = t[0], [o, e] = t[1], [r, c] = t[2], M = e - c, l = c - s, a = s - e, f = r - o, N = n - r, i = o - n;
  return F([[M, l, a, 0, 0, 0], [0, 0, 0, f, N, i], [f, N, i, M, l, a]]);
}
function Mo(t) {
  const [n, s, o] = [t[0], t[6], t[12]], [e, r, c] = [t[1], t[7], t[13]], [M, l, a] = [t[4], t[10], t[16]], [f, N, i] = [t[3], t[9], t[15]];
  return F([[n, -M], [s, -l], [o, -a], [e, f], [r, N], [c, i]]);
}
function mo(t) {
  const [n, s] = t[0], [o, e] = t[1], [r, c] = t[2], M = o - n, l = r - n, a = c - s, f = s - e;
  return 0.5 * (M * a - l * -f);
}
function ho(t, n) {
  const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return n.forEach((e, r) => {
    const c = e.map((l) => t[l]), M = go(c);
    e.forEach((l) => {
      var _a, _b;
      s.has(l) || s.set(l, []), (_a = s.get(l)) == null ? void 0 : _a.push(M), o.has(l) || o.set(l, []), (_b = o.get(l)) == null ? void 0 : _b.push(r);
    });
  }), { nodeToCentroidNodesMap: s, nodeToCentroidElementIndiciesMap: o };
}
function go(t) {
  const n = t.reduce((e, r) => e + r[0], 0) / t.length, s = t.reduce((e, r) => e + r[1], 0) / t.length, o = t.reduce((e, r) => e + r[2], 0) / t.length;
  return [n, s, o];
}
export {
  yo as a,
  bn as b,
  no as g
};
