import { s as wn, n as cn, b as pn, k as Cn, i as Qn, z as G, c as Yn, m as Z, t as Ft, a as It, e as O, f as Jn } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const W = 1 / Math.sqrt(3);
function en(t, n) {
  const s = [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)], o = [-0.25 * (1 - n), 0.25 * (1 - n), 0.25 * (1 + n), -0.25 * (1 + n)], e = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: s, dNdxi: o, dNdeta: e };
}
function on(t, n, s, o) {
  let e = 0, r = 0, c = 0, M = 0;
  for (let i = 0; i < 4; i++) e += t[i] * s[i], r += t[i] * o[i], c += n[i] * s[i], M += n[i] * o[i];
  const l = e * M - r * c, a = 1 / l, f = [], _ = [];
  for (let i = 0; i < 4; i++) f.push(a * (M * t[i] - r * n[i])), _.push(a * (-c * t[i] + e * n[i]));
  return { dNdx: f, dNdy: _, detJ: l };
}
function Kn(t, n, s, o, e) {
  const l = bt(12, 12), a = s * e / (1 - o * o), f = [[-W, -W], [W, -W], [W, W], [-W, W]], { dNdxi: _, dNdeta: i } = en(0, 0), { detJ: d } = on(_, i, t, n);
  for (const [N, g] of f) {
    const { dNdxi: D, dNdeta: z } = en(N, g), { dNdx: q, dNdy: w, detJ: v } = on(D, z, t, n);
    on(_, i, t, n);
    const L = _.reduce((b, X, B) => b + X * t[B], 0), H = _.reduce((b, X, B) => b + X * n[B], 0), Q = i.reduce((b, X, B) => b + X * t[B], 0), st = i.reduce((b, X, B) => b + X * n[B], 0), ht = 1 / d, Tt = ht * st * (-2 * N), et = ht * -Q * (-2 * N), S = ht * -H * (-2 * g), x = ht * L * (-2 * g), A = [[], [], []];
    for (let b = 0; b < 4; b++) A[0].push(q[b], 0), A[1].push(0, w[b]), A[2].push(w[b], q[b]);
    A[0].push(Tt, 0, S, 0), A[1].push(0, et, 0, x), A[2].push(et, Tt, x, S);
    for (let b = 0; b < 12; b++) for (let X = 0; X < 12; X++) {
      let B = 0;
      B += a * (A[0][b] * A[0][X] + o * A[0][b] * A[1][X] + o * A[1][b] * A[0][X] + A[1][b] * A[1][X]), B += a * (1 - o) / 2 * A[2][b] * A[2][X], l[b][X] += B * Math.abs(v);
    }
  }
  const h = bt(8, 8), u = bt(8, 4), y = bt(4, 8), m = bt(4, 4);
  for (let N = 0; N < 8; N++) for (let g = 0; g < 8; g++) h[N][g] = l[N][g];
  for (let N = 0; N < 8; N++) for (let g = 0; g < 4; g++) u[N][g] = l[N][8 + g];
  for (let N = 0; N < 4; N++) for (let g = 0; g < 8; g++) y[N][g] = l[8 + N][g];
  for (let N = 0; N < 4; N++) for (let g = 0; g < 4; g++) m[N][g] = l[8 + N][8 + g];
  const p = Bn(m);
  if (!p) return h;
  const Y = bt(8, 8);
  for (let N = 0; N < 8; N++) for (let g = 0; g < 8; g++) {
    let D = 0;
    for (let z = 0; z < 4; z++) for (let q = 0; q < 4; q++) D += u[N][z] * p[z][q] * y[q][g];
    Y[N][g] = h[N][g] - D;
  }
  return Y;
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
  const r = bt(12, 12), c = [[-W, -W], [W, -W], [W, W], [-W, W]];
  for (const [M, l] of c) {
    const { N: a, dNdxi: f, dNdeta: _ } = en(M, l), { dNdx: i, dNdy: d, detJ: h } = on(f, _, t, n), u = new Array(12).fill(0);
    for (let m = 0; m < 4; m++) u[m * 3] = 0.5 * d[m], u[m * 3 + 1] = -0.5 * i[m], u[m * 3 + 2] = a[m];
    const y = e * s * o * Math.abs(h);
    for (let m = 0; m < 12; m++) for (let p = 0; p < 12; p++) r[m][p] += y * u[m] * u[p];
  }
  return r;
}
function Rn(t, n, s, o, e) {
  const r = bt(12, 12), c = s * e * e * e / (12 * (1 - o * o)), l = 5 / 6 * s / (2 * (1 + o)) * e, a = [[-W, -W], [W, -W], [W, W], [-W, W]], f = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], _ = [];
  for (const i of f) {
    const { N: d, dNdxi: h, dNdeta: u } = en(i.xi, i.eta), { dNdx: y, dNdy: m } = on(h, u, t, n), p = bt(2, 12);
    for (let Y = 0; Y < 4; Y++) p[0][Y * 3] = y[Y], p[0][Y * 3 + 1] = -d[Y], p[1][Y * 3] = m[Y], p[1][Y * 3 + 2] = -d[Y];
    _.push(p);
  }
  for (const [i, d] of a) {
    const { dNdxi: h, dNdeta: u } = en(i, d), { dNdx: y, dNdy: m, detJ: p } = on(h, u, t, n), Y = bt(3, 12);
    for (let w = 0; w < 4; w++) Y[0][w * 3 + 1] = y[w], Y[1][w * 3 + 2] = m[w], Y[2][w * 3 + 1] = m[w], Y[2][w * 3 + 2] = y[w];
    for (let w = 0; w < 12; w++) for (let v = 0; v < 12; v++) {
      let L = 0;
      L += c * (Y[0][w] * Y[0][v] + o * Y[0][w] * Y[1][v] + o * Y[1][w] * Y[0][v] + Y[1][w] * Y[1][v]), L += c * (1 - o) / 2 * Y[2][w] * Y[2][v], r[w][v] += L * Math.abs(p);
    }
    const N = bt(2, 12), g = 0.5 * (1 - d), D = 0.5 * (1 + d), z = 0.5 * (1 - i), q = 0.5 * (1 + i);
    for (let w = 0; w < 12; w++) N[0][w] = g * _[0][0][w] + D * _[1][0][w], N[1][w] = z * _[2][1][w] + q * _[3][1][w];
    for (let w = 0; w < 12; w++) for (let v = 0; v < 12; v++) r[w][v] += l * (N[0][w] * N[0][v] + N[1][w] * N[1][v]) * Math.abs(p);
  }
  return r;
}
function zn(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n == null ? void 0 : n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n == null ? void 0 : n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0.2, r = ((_c = n == null ? void 0 : n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0;
  if (o === 0 || r === 0) return bt(24, 24);
  const { localCoords: c } = Sn(t), M = c.map((p) => p[0]), l = c.map((p) => p[1]), a = Kn(M, l, o, e, r), f = Rn(M, l, o, e, r), _ = o / (2 * (1 + e)), d = Ln(M, l, _, r, 0.5), h = bt(24, 24), u = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let p = 0; p < 8; p++) for (let Y = 0; Y < 8; Y++) h[u[p]][u[Y]] += a[p][Y];
  const y = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let p = 0; p < 12; p++) for (let Y = 0; Y < 12; Y++) h[y[p]][y[Y]] += f[p][Y];
  const m = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let p = 0; p < 12; p++) for (let Y = 0; Y < 12; Y++) h[m[p]][m[Y]] += d[p][Y];
  return h;
}
function En(t) {
  const { localX: n, localY: s, localZ: o } = Sn(t), e = [[n[0], n[1], n[2]], [s[0], s[1], s[2]], [o[0], o[1], o[2]]], r = bt(24, 24);
  for (let c = 0; c < 4; c++) for (let M = 0; M < 2; M++) {
    const l = c * 6 + M * 3;
    for (let a = 0; a < 3; a++) for (let f = 0; f < 3; f++) r[l + a][l + f] = e[a][f];
  }
  return r;
}
function Sn(t) {
  const n = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], s = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], o = An(n, s), e = Math.sqrt(o[0] ** 2 + o[1] ** 2 + o[2] ** 2), r = o.map((h) => h / e), c = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], M = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2), l = c.map((h) => h / M), a = An(r, l), f = t.map((h) => h[0]).reduce((h, u) => h + u) / 4, _ = t.map((h) => h[1]).reduce((h, u) => h + u) / 4, i = t.map((h) => h[2]).reduce((h, u) => h + u) / 4, d = t.map((h) => {
    const u = h[0] - f, y = h[1] - _, m = h[2] - i;
    return [u * l[0] + y * l[1] + m * l[2], u * a[0] + y * a[1] + m * a[2]];
  });
  return { localX: l, localY: a, localZ: r, localCoords: d };
}
function An(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function bt(t, n) {
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
  return r === 1 && (M = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), r === -1 && (M = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), Cn(Qn(4), M).toArray();
}
function Fn(t) {
  const r = [t[0], t[1], t[2]], c = G(3, 3).toArray();
  for (let g = 0; g < 3; g++) for (let D = 0; D < 3; D++) c[g][D] = r[D][g];
  const M = [-1, 1, 0], l = [-1, 0, 1], a = G(3, 2).toArray();
  for (let g = 0; g < 3; g++) for (let D = 0; D < 3; D++) a[g][0] += c[g][D] * M[D], a[g][1] += c[g][D] * l[D];
  const f = a.map((g) => g[0]), _ = a.map((g) => g[1]);
  let i = Yn(f, _), d = cn(i);
  if (d === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), G(18, 18).toArray();
  i = i.map((g) => g / d);
  const h = [...i], u = Qn(3).toArray(), y = i[0];
  let m;
  if (Math.abs(y) > 1 - 1e-10) {
    const g = i[2];
    m = u.map((D, z) => D[2] - g * i[z]);
  } else m = u.map((g, D) => g[0] - y * i[D]);
  if (d = cn(m), d === 0) return console.warn("Degenerate local X-axis detected."), G(18, 18).toArray();
  m = m.map((g) => g / d);
  let p = Yn(h, m);
  if (d = cn(p), d === 0) return console.warn("Degenerate local Y-axis detected."), G(18, 18).toArray();
  p = p.map((g) => g / d);
  const Y = [m, p, h], N = G(18, 18).toArray();
  for (let g = 0; g < 3; g++) {
    const D = g * 6, z = D + 3;
    for (let q = 0; q < 3; q++) for (let w = 0; w < 3; w++) N[D + q][D + w] = Y[q][w], N[z + q][z + w] = Y[q][w];
  }
  return N;
}
function tn(t, n) {
  const s = [];
  for (let o = 0; o < t; o++) {
    const e = [];
    for (let r = 0; r < n; r++) e.push(0);
    s.push(e);
  }
  return s;
}
function Yt(t, n) {
  const s = t.length, o = n[0].length, e = n.length, r = tn(s, o);
  for (let c = 0; c < s; c++) for (let M = 0; M < o; M++) {
    let l = 0;
    for (let a = 0; a < e; a++) l += t[c][a] * n[a][M];
    r[c][M] = l;
  }
  return r;
}
function Mn(t, n) {
  const s = t.length, o = t[0].length, e = tn(s, o);
  for (let r = 0; r < s; r++) for (let c = 0; c < o; c++) e[r][c] = t[r][c] + n[r][c];
  return e;
}
function an(t, n) {
  const s = t.length, o = t[0].length, e = tn(s, o);
  for (let r = 0; r < s; r++) for (let c = 0; c < o; c++) e[r][c] = t[r][c] * n;
  return e;
}
function un(t) {
  const n = t.length, s = t[0].length, o = tn(s, n);
  for (let e = 0; e < n; e++) for (let r = 0; r < s; r++) o[r][e] = t[e][r];
  return o;
}
function bn(t) {
  return t[0][0] * t[1][1] - t[0][1] * t[1][0];
}
function mn(t) {
  const n = bn(t);
  return [[t[1][1] / n, -t[0][1] / n], [-t[1][0] / n, t[0][0] / n]];
}
function On(t) {
  const [n, s, o, e] = t, r = [s[0] - n[0], s[1] - n[1], s[2] - n[2]], c = [o[0] - n[0], o[1] - n[1], o[2] - n[2]], M = [e[0] - n[0], e[1] - n[1], e[2] - n[2]], l = Math.hypot(r[0], r[1], r[2]), a = [r[0] / l, r[1] / l, r[2] / l], f = [a[1] * c[2] - a[2] * c[1], a[2] * c[0] - a[0] * c[2], a[0] * c[1] - a[1] * c[0]], _ = Math.hypot(f[0], f[1], f[2]), i = [f[0] / _, f[1] / _, f[2] / _], d = [i[1] * a[2] - i[2] * a[1], i[2] * a[0] - i[0] * a[2], i[0] * a[1] - i[1] * a[0]], h = (m, p) => m[0] * p[0] + m[1] * p[1] + m[2] * p[2], u = [0, h(r, a), h(c, a), h(M, a)], y = [0, h(r, d), h(c, d), h(M, d)];
  return { x: u, y };
}
function Kt(t, n, s) {
  if (s === 5) return Math.hypot(t[1] - t[0], n[1] - n[0]);
  if (s === 6) return Math.hypot(t[2] - t[1], n[2] - n[1]);
  if (s === 7) return Math.hypot(t[3] - t[2], n[3] - n[2]);
  if (s === 8) return Math.hypot(t[0] - t[3], n[0] - n[3]);
  throw new Error("k debe ser 5..8");
}
function Ht(t, n, s) {
  const o = Kt(t, n, s);
  if (s === 5) return [(t[1] - t[0]) / o, (n[1] - n[0]) / o];
  if (s === 6) return [(t[2] - t[1]) / o, (n[2] - n[1]) / o];
  if (s === 7) return [(t[3] - t[2]) / o, (n[3] - n[2]) / o];
  if (s === 8) return [(t[0] - t[3]) / o, (n[0] - n[3]) / o];
  throw new Error("k debe ser 5..8");
}
function Vt(t, n, s, o, e) {
  return 2 / (0.8333333333333334 * (1 - e)) * Math.pow(o / Kt(t, n, s), 2);
}
function sn(t, n, s, o) {
  return [[0.25 * (t[0] * (o - 1) - t[1] * (o - 1) + t[2] * (o + 1) - t[3] * (o + 1)), 0.25 * (n[0] * (o - 1) - n[1] * (o - 1) + n[2] * (o + 1) - n[3] * (o + 1))], [0.25 * (t[0] * (s - 1) - t[1] * (s + 1) + t[2] * (s + 1) - t[3] * (s - 1)), 0.25 * (n[0] * (s - 1) - n[1] * (s + 1) + n[2] * (s + 1) - n[3] * (s - 1))]];
}
function Zn(t, n) {
  return [[0.5 * (1 - n), 0, 0.5 * (1 + n), 0], [0, 0.5 * (1 + t), 0, 0.5 * (1 - t)]];
}
function Gn(t, n) {
  const s = Kt(t, n, 5), o = Kt(t, n, 6), e = Kt(t, n, 7), r = Kt(t, n, 8);
  return [[s / 2, 0, 0, 0], [0, o / 2, 0, 0], [0, 0, -e / 2, 0], [0, 0, 0, -r / 2]];
}
function Pn(t, n) {
  const s = Kt(t, n, 5), o = Kt(t, n, 6), e = Kt(t, n, 7), r = Kt(t, n, 8), [c, M] = Ht(t, n, 5), [l, a] = Ht(t, n, 6), [f, _] = Ht(t, n, 7), [i, d] = Ht(t, n, 8);
  return an([[-2 / s, c, M, 2 / s, c, M, 0, 0, 0, 0, 0, 0], [0, 0, 0, -2 / o, l, a, 2 / o, l, a, 0, 0, 0], [0, 0, 0, 0, 0, 0, -2 / e, f, _, 2 / e, f, _], [2 / r, i, d, 0, 0, 0, 0, 0, 0, -2 / r, i, d]], 0.5);
}
function Hn(t, n, s, o) {
  const e = Vt(t, n, 5, s, o), r = Vt(t, n, 6, s, o), c = Vt(t, n, 7, s, o), M = Vt(t, n, 8, s, o);
  return an([[1 / (1 + e), 0, 0, 0], [0, 1 / (1 + r), 0, 0], [0, 0, 1 / (1 + c), 0], [0, 0, 0, 1 / (1 + M)]], -1.5);
}
function Vn(t, n, s, o) {
  const e = Vt(t, n, 5, s, o), r = Vt(t, n, 6, s, o), c = Vt(t, n, 7, s, o), M = Vt(t, n, 8, s, o);
  return [[e / (1 + e), 0, 0, 0], [0, r / (1 + r), 0, 0], [0, 0, c / (1 + c), 0], [0, 0, 0, M / (1 + M)]];
}
function $n(t, n, s, o) {
  const e = mn(sn(t, n, s, o)), [r, c] = e[0], [M, l] = e[1], a = 0.25 * (o - 1), f = -0.25 * (o - 1), _ = 0.25 * (o + 1), i = -0.25 * (o + 1), d = 0.25 * (s - 1), h = -0.25 * (s + 1), u = 0.25 * (s + 1), y = -0.25 * (s - 1), m = [r * a + c * d, r * f + c * h, r * _ + c * u, r * i + c * y], p = [M * a + l * d, M * f + l * h, M * _ + l * u, M * i + l * y];
  return [[0, m[0], 0, 0, m[1], 0, 0, m[2], 0, 0, m[3], 0], [0, 0, p[0], 0, 0, p[1], 0, 0, p[2], 0, 0, p[3]], [0, p[0], m[0], 0, p[1], m[1], 0, p[2], m[2], 0, p[3], m[3]]];
}
function Wn(t, n, s, o) {
  const e = mn(sn(t, n, s, o)), [r, c] = e[0], [M, l] = e[1], a = s * (o - 1), f = -0.5 * (o - 1) * (o + 1), _ = -s * (o + 1), i = 0.5 * (o - 1) * (o + 1), d = 0.5 * (s - 1) * (s + 1), h = -o * (s + 1), u = -0.5 * (s - 1) * (s + 1), y = o * (s - 1), m = [r * a + c * d, r * f + c * h, r * _ + c * u, r * i + c * y], p = [M * a + l * d, M * f + l * h, M * _ + l * u, M * i + l * y], [Y, N] = Ht(t, n, 5), [g, D] = Ht(t, n, 6), [z, q] = Ht(t, n, 7), [w, v] = Ht(t, n, 8);
  return [[m[0] * Y, m[1] * g, m[2] * z, m[3] * w], [p[0] * N, p[1] * D, p[2] * q, p[3] * v], [p[0] * Y + m[0] * N, p[1] * g + m[1] * D, p[2] * z + m[2] * q, p[3] * w + m[3] * v]];
}
function Un(t, n, s, o, e, r) {
  return Mn($n(t, n, s, o), Yt(Yt(Wn(t, n, s, o), Hn(t, n, e, r)), Pn(t, n)));
}
function In(t, n, s, o, e, r) {
  return Yt(Yt(Yt(Yt(mn(sn(t, n, s, o)), Zn(s, o)), Gn(t, n)), Vn(t, n, e, r)), Pn(t, n));
}
function to(t, n, s, o) {
  const e = mn(sn(t, n, s, o)), r = [[0.25 * (o - 1), 0.25 * (-o + 1), 0.25 * (o + 1), 0.25 * (-o - 1)], [0.25 * (s - 1), 0.25 * (-s - 1), 0.25 * (s + 1), 0.25 * (-s + 1)]], c = Yt(e, r);
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
  let f = tn(12, 12);
  for (let _ = 0; _ < 4; _++) {
    const i = bn(sn(t, n, l[_], a[_])), d = Un(t, n, l[_], a[_], s, e), h = In(t, n, l[_], a[_], s, e);
    f = Mn(f, an(Yt(Yt(un(d), r), d), i)), f = Mn(f, an(Yt(Yt(un(h), c), h), i));
  }
  return f;
}
function co(t, n, s, o, e) {
  const r = so(o, e), c = 1 / Math.sqrt(3), M = [-c, c, c, -c], l = [-c, -c, c, c];
  let a = tn(8, 8);
  for (let f = 0; f < 4; f++) {
    const _ = bn(sn(t, n, M[f], l[f])), i = to(t, n, M[f], l[f]);
    a = Mn(a, an(Yt(Yt(un(i), r), i), _ * s));
  }
  return a;
}
function eo(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0, { x: c, y: M } = On(t), l = ro(c, M, r, o, e), a = co(c, M, r, o, e), f = tn(24, 24), _ = (y) => [0, 3, 6, 9].includes(y) ? 2 * y + 2 : [1, 4, 7, 10].includes(y) ? 2 * y + 1 : 2 * y;
  for (let y = 0; y < 12; y++) for (let m = 0; m < 12; m++) f[_(y)][_(m)] = l[y][m];
  const i = [1, 2, 4, 5, 7, 8, 10, 11].map((y) => Math.abs(l[y][y])), d = Math.min(...i) / 1e3;
  f[5][5] = d, f[11][11] = d, f[17][17] = d, f[23][23] = d;
  for (const y of [4, 10, 16, 22]) for (let m = 0; m < 24; m++) f[y][m] *= -1, f[m][y] *= -1;
  const h = (y, m, p) => {
    const Y = y[m];
    y[m] = y[p], y[p] = Y;
    for (let N = 0; N < y.length; N++) {
      const g = y[N][m];
      y[N][m] = y[N][p], y[N][p] = g;
    }
  };
  h(f, 3, 4), h(f, 9, 10), h(f, 15, 16), h(f, 21, 22);
  const u = (y) => Math.floor(y / 2) * 6 + y % 2;
  for (let y = 0; y < 8; y++) for (let m = 0; m < 8; m++) f[u(y)][u(m)] += a[y][m];
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
    for (let u = 0; u < Math.min(n.length, 6); u++) n[u] && s.push(h[u]);
  }
  if (s.length === 0) return t;
  const o = t.length, e = [];
  for (let h = 0; h < o; h++) s.includes(h) || e.push(h);
  const r = e.length, c = s.length, M = Array.from({ length: c }, (h, u) => Array.from({ length: c }, (y, m) => t[s[u]][s[m]])), l = Array.from({ length: r }, (h, u) => Array.from({ length: c }, (y, m) => t[e[u]][s[m]])), a = Array.from({ length: c }, (h, u) => Array.from({ length: r }, (y, m) => t[s[u]][e[m]])), f = fo(M);
  if (!f) return t;
  const _ = vn(l, f), i = vn(_, a), d = Array.from({ length: o }, () => Array(o).fill(0));
  for (let h = 0; h < r; h++) for (let u = 0; u < r; u++) d[e[h]][e[u]] = t[e[h]][e[u]] - i[h][u];
  return d;
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
  let f = ((_g = n == null ? void 0 : n.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, _ = ((_h = n == null ? void 0 : n.shearAreasZ) == null ? void 0 : _h.get(s)) ?? 0;
  f === 0 && _ === 0 && c > 0 && M > 0 && (f = _ = 5 / 6 * c);
  const i = _ > 0 && M > 0 ? 12 * r * o / (M * _ * a ** 2) : 0, d = f > 0 && M > 0 ? 12 * r * e / (M * f * a ** 2) : 0, h = r * c / a, u = M * l / a, y = 12 * r * o / a ** 3 / (1 + i), m = 6 * r * o / a ** 2 / (1 + i), p = 4 * r * o / a * (1 + i / 4) / (1 + i), Y = 2 * r * o / a * (1 - i / 2) / (1 + i), N = 12 * r * e / a ** 3 / (1 + d), g = 6 * r * e / a ** 2 / (1 + d), D = 4 * r * e / a * (1 + d / 4) / (1 + d), z = 2 * r * e / a * (1 - d / 2) / (1 + d);
  return [[h, 0, 0, 0, 0, 0, -h, 0, 0, 0, 0, 0], [0, y, 0, 0, 0, m, 0, -y, 0, 0, 0, m], [0, 0, N, 0, -g, 0, 0, 0, -N, 0, -g, 0], [0, 0, 0, u, 0, 0, 0, 0, 0, -u, 0, 0], [0, 0, -g, 0, D, 0, 0, 0, g, 0, z, 0], [0, m, 0, 0, 0, p, 0, -m, 0, 0, 0, Y], [-h, 0, 0, 0, 0, 0, h, 0, 0, 0, 0, 0], [0, -y, 0, 0, 0, -m, 0, y, 0, 0, 0, -m], [0, 0, -N, 0, g, 0, 0, 0, N, 0, g, 0], [0, 0, 0, -u, 0, 0, 0, 0, 0, u, 0, 0], [0, 0, -g, 0, z, 0, 0, 0, g, 0, D, 0], [0, m, 0, 0, 0, Y, 0, -m, 0, 0, 0, p]];
}
function mo(t, n, s) {
  var _a, _b, _c, _d, _e;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, e = ((_b = n.elasticitiesOrthogonal) == null ? void 0 : _b.get(s)) ?? 0, r = ((_c = n.poissonsRatios) == null ? void 0 : _c.get(s)) ?? 0, c = ((_d = n.shearModuli) == null ? void 0 : _d.get(s)) ?? 0, M = ((_e = n.thicknesses) == null ? void 0 : _e.get(s)) ?? 0, l = e > 0, a = l ? H(o, e, c, r, M) : v(o, r, M), f = l ? Q(c, M) : L(o, r, M), _ = l ? Dn(o, e, c, r) : jn(o, r), i = t.map(([S, x]) => [S, x]), d = i[1][0] - i[0][0], h = i[2][0] - i[0][0], u = i[0][1] - i[1][1], y = i[2][1] - i[0][1], m = 0.5 * (d * y - h * -u), p = st(i), Y = Tt(i), N = et(i, _, M), g = Z(Z(Ft(p), f), p), D = Z(Z(Ft(Y), a), Y), z = G(18, 18).toArray(), q = Z(It(g, D), m), w = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let S = 0; S < 3; S++) for (let x = 0; x < 3; x++) for (let A = 0; A < 3; A++) {
    const b = w[S][x], X = w[A][x];
    z[b][X] = N[S * 3 + x][A * 3 + x];
  }
  for (let S = 0; S < 18; S++) for (let x = 0; x < 18; x++) z[S][x] = (z[S][x] ?? 0) + q.get([S, x]);
  return z;
  function v(S, x, A) {
    const b = S / (1 - x * x), X = O([[b, b * x, 0], [b * x, b, 0], [0, 0, b * (1 - x) / 2]]);
    return Z(A ** 3 / 12, X);
  }
  function L(S, x, A) {
    const b = 0.8333333333333334, X = S / (2 * (1 + x)), B = b * X * A;
    return O([[B, 0], [0, B]]);
  }
  function H(S, x, A, b, X) {
    const B = x * b / S, j = 1 - b * B, K = S / j, V = x / j, $ = b * x / j, R = O([[K, $, 0], [$, V, 0], [0, 0, A]]);
    return Z(X ** 3 / 12, R);
  }
  function Q(S, x) {
    const b = 0.8333333333333334 * S * x;
    return O([[b, 0], [0, b]]);
  }
  function st(S) {
    const x = G(2, 18).toArray(), [A, b] = S[0], [X, B] = S[1], [j, K] = S[2], V = 0.5 * ((X - A) * (K - b) - (j - A) * -(b - B)), $ = (A + X + j) / 3, tt = (b + B + K) / 3, R = [$, A, X], xt = [tt, b, B], dt = [$, X, j], ot = [tt, B, K], gt = [$, j, A], J = [tt, K, b], T = 1 / 3, [U, E, at, _t] = ht(R, xt), [rt, wt, Qt, Nt] = ht(dt, ot), [St, Bt, Et, nn] = ht(gt, J), it = G(2, 18).toArray(), lt = G(2, 18).toArray(), At = G(2, 18).toArray();
    for (let C = 0; C < 2; C++) for (let k = 0; k < 6; k++) it[C][k] = T * U[C][k] + E[C][k], it[C][k + 6] = T * U[C][k] + at[C][k], it[C][k + 12] = T * U[C][k], lt[C][k] = T * rt[C][k], lt[C][k + 6] = T * rt[C][k] + wt[C][k], lt[C][k + 12] = T * rt[C][k] + Qt[C][k], At[C][k] = T * St[C][k] + Et[C][k], At[C][k + 6] = T * St[C][k], At[C][k + 12] = T * St[C][k] + Bt[C][k];
    for (let C = 0; C < 2; C++) for (let k = 0; k < 18; k++) it[C][k] *= _t, lt[C][k] *= Nt, At[C][k] *= nn, x[C][k] = (it[C][k] + lt[C][k] + At[C][k]) / V;
    return x;
  }
  function ht(S, x) {
    const A = G(2, 6).toArray(), b = G(2, 6).toArray(), X = G(2, 6).toArray(), B = S[1] - S[0], j = S[0] - S[2], K = x[2] - x[0], V = x[0] - x[1], $ = S[2] - S[1], tt = x[1] - x[2], R = 0.5 * (B * K - j * V), xt = 0.5 * V * j, dt = 0.5 * K * B, ot = 0.5 * B * j, gt = 0.5 * V * K;
    return A[0][2] = 0.5 * $ / R, A[0][3] = -0.5, A[1][2] = 0.5 * tt / R, A[1][4] = 0.5, b[0][2] = 0.5 * j / R, b[0][3] = 0.5 * xt / R, b[0][4] = 0.5 * ot / R, b[1][2] = 0.5 * K / R, b[1][3] = 0.5 * gt / R, b[1][4] = 0.5 * dt / R, X[0][2] = 0.5 * B / R, X[0][3] = -0.5 * dt / R, X[0][4] = -0.5 * ot / R, X[1][2] = 0.5 * V / R, X[1][3] = -0.5 * gt / R, X[1][4] = -0.5 * xt / R, [A, b, X, R];
  }
  function Tt(S) {
    const x = G(3, 18).toArray(), [A, b] = S[0], [X, B] = S[1], [j, K] = S[2], V = X - A, $ = j - A, tt = j - X, R = B - K, xt = K - b, dt = b - B, ot = 0.5 * (V * xt - $ * -dt), gt = R / (2 * ot), J = tt / (2 * ot), T = xt / (2 * ot), U = -$ / (2 * ot), E = dt / (2 * ot), at = V / (2 * ot);
    return x[0][4] = gt, x[0][10] = T, x[0][16] = E, x[1][3] = -J, x[1][9] = -U, x[1][15] = -at, x[2][3] = -gt, x[2][4] = J, x[2][9] = -T, x[2][10] = U, x[2][15] = -E, x[2][16] = at, x;
  }
  function et(S, x, A) {
    let b = G(9, 9).toArray(), X = G(9, 9).toArray(), B = G(9, 9).toArray(), j = G(9, 3).toArray(), K = G(3, 9).toArray(), V = G(3, 3).toArray(), $ = G(3, 3).toArray(), tt = G(3, 3).toArray(), R = G(3, 3).toArray(), xt = G(3, 3).toArray(), dt = G(3, 3).toArray(), ot = G(3, 3).toArray(), gt = G(3, 3).toArray();
    const J = 1 / 8, T = J / 6, U = J ** 2 / 4, E = 1, at = 2, _t = 1, rt = 0, wt = 1, Qt = -1, Nt = -1, St = -1, Bt = -2, Et = S[0][0], nn = S[0][1], it = S[1][0], lt = S[1][1], At = S[2][0], C = S[2][1], k = Et - it, Pt = it - At, Xt = At - Et, jt = nn - lt, qt = lt - C, Lt = C - nn, vt = -k, Dt = -Pt, yt = -Xt, ft = -jt, pt = -qt, ct = -Lt, Ct = 0.5 * (vt * Lt - Xt * -jt), $t = 2 * Ct, nt = 4 * Ct, I = 0.5 * A, rn = Ct * A, Mt = vt ** 2 + ft ** 2, mt = Dt ** 2 + pt ** 2, ut = yt ** 2 + ct ** 2;
    j[0][0] = I * qt, j[0][2] = I * Dt, j[1][1] = I * Dt, j[1][2] = I * qt, j[2][0] = I * qt * (ct - ft) * T, j[2][1] = I * Dt * (Xt - k) * T, j[2][2] = I * (Xt * ct - k * ft) * 2 * T, j[3][0] = I * Lt, j[3][2] = I * yt, j[4][1] = I * yt, j[4][2] = I * Lt, j[5][0] = I * Lt * (ft - pt) * T, j[5][1] = I * yt * (k - Pt) * T, j[5][2] = I * (k * ft - Pt * pt) * 2 * T, j[6][0] = I * jt, j[6][2] = I * vt, j[7][1] = I * vt, j[7][2] = I * jt, j[8][0] = I * jt * (pt - ct) * T, j[8][1] = I * vt * (Pt - Xt) * T, j[8][2] = I * (Pt * pt - Xt * ct) * 2 * T, B = Z(Z(O(j), x), Ft(O(j))).toArray(), B = Z(O(B), 1 / rn).toArray(), K[0][0] = Dt / nt, K[0][1] = pt / nt, K[0][2] = 1, K[0][3] = yt / nt, K[0][4] = ct / nt, K[0][6] = vt / nt, K[0][7] = ft / nt, K[1][0] = Dt / nt, K[1][1] = pt / nt, K[1][3] = yt / nt, K[1][4] = ct / nt, K[1][5] = 1, K[1][6] = vt / nt, K[1][7] = ft / nt, K[2][0] = Dt / nt, K[2][1] = pt / nt, K[2][3] = yt / nt, K[2][4] = ct / nt, K[2][6] = vt / nt, K[2][7] = ft / nt, K[2][8] = 1;
    const kt = 1 / (Ct * nt);
    V[0][0] = kt * qt * ct * Mt, V[0][1] = kt * Lt * ft * mt, V[0][2] = kt * jt * pt * ut, V[1][0] = kt * Pt * yt * Mt, V[1][1] = kt * Xt * vt * mt, V[1][2] = kt * k * Dt * ut, V[2][0] = kt * (qt * Xt + Dt * ct) * Mt, V[2][1] = kt * (Lt * k + yt * ft) * mt, V[2][2] = kt * (jt * Pt + vt * pt) * ut;
    const F = $t / 3;
    $[0][0] = F * E / Mt, $[0][1] = F * at / Mt, $[0][2] = F * _t / Mt, $[1][0] = F * rt / mt, $[1][1] = F * wt / mt, $[1][2] = F * Qt / mt, $[2][0] = F * Nt / ut, $[2][1] = F * St / ut, $[2][2] = F * Bt / ut, tt[0][0] = F * Bt / Mt, tt[0][1] = F * Nt / Mt, tt[0][2] = F * St / Mt, tt[1][0] = F * _t / mt, tt[1][1] = F * E / mt, tt[1][2] = F * at / mt, tt[2][0] = F * Qt / ut, tt[2][1] = F * rt / ut, tt[2][2] = F * wt / ut, R[0][0] = F * wt / Mt, R[0][1] = F * Qt / Mt, R[0][2] = F * rt / Mt, R[1][0] = F * St / mt, R[1][1] = F * Bt / mt, R[1][2] = F * Nt / mt, R[2][0] = F * at / ut, R[2][1] = F * _t / ut, R[2][2] = F * E / ut, xt = Z(It(O($), O(tt)), 0.5).toArray(), dt = Z(It(O(tt), O(R)), 0.5).toArray(), ot = Z(It(O(R), O($)), 0.5).toArray();
    const Wt = Z(Z(Ft(O(V)), x), O(V));
    return gt = It(It(Z(Z(Ft(O(xt)), Wt), O(xt)), Z(Z(Ft(O(dt)), Wt), O(dt))), Z(Z(Ft(O(ot)), Wt), O(ot))).toArray(), gt = Z(O(gt), 3 / 4 * U * rn).toArray(), X = Z(Z(Ft(O(K)), O(gt)), O(K)).toArray(), b = It(O(B), O(X)).toArray(), b;
  }
}
function jn(t, n) {
  const s = t / (1 - n * n);
  return O([[s, s * n, 0], [s * n, s, 0], [0, 0, s * (1 - n) / 2]]);
}
function Dn(t, n, s, o) {
  const e = n * o / t, r = 1 - o * e, c = t / r, M = n / r, l = o * n / r;
  return O([[c, l, 0], [l, M, 0], [0, 0, s]]);
}
function Ao(t, n, s, o) {
  const e = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map(), membranePrincipalMax: /* @__PURE__ */ new Map(), membranePrincipalMin: /* @__PURE__ */ new Map(), bendingPrincipalMax: /* @__PURE__ */ new Map(), bendingPrincipalMin: /* @__PURE__ */ new Map(), transverseShearMax: /* @__PURE__ */ new Map() }, r = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map(), membranePrincipalMax: /* @__PURE__ */ new Map(), membranePrincipalMin: /* @__PURE__ */ new Map(), bendingPrincipalMax: /* @__PURE__ */ new Map(), bendingPrincipalMin: /* @__PURE__ */ new Map(), transverseShearMax: /* @__PURE__ */ new Map() }, c = (l, a, f) => {
    const _ = (l + a) / 2, i = Math.sqrt(((l - a) / 2) ** 2 + f ** 2);
    return { max: _ + i, min: _ - i };
  };
  n.forEach((l, a) => {
    var _a;
    const f = l.map((i) => t[i]), _ = l.reduce((i, d) => {
      var _a2;
      const h = (_a2 = o.deformations) == null ? void 0 : _a2.get(d);
      return i.concat(h ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (l.length === 2) {
      const i = Xn(f), d = Z(i, _), h = ao(f, s, a);
      let u = Z(h, d);
      e.normals.set(a, [u[0], u[6]]), e.shearsY.set(a, [u[1], u[7]]), e.shearsZ.set(a, [u[2], u[8]]), e.torsions.set(a, [u[3], u[9]]), e.bendingsY.set(a, [u[4], u[10]]), e.bendingsZ.set(a, [u[5], u[11]]);
    } else if (l.length === 4) {
      const i = yo(f, _, s, a);
      r.membraneXX.set(a, i.Nx), r.membraneYY.set(a, i.Ny), r.membraneXY.set(a, i.Nxy), r.bendingXX.set(a, i.Mx), r.bendingYY.set(a, i.My), r.bendingXY.set(a, i.Mxy), r.tranverseShearX.set(a, i.Qx), r.tranverseShearY.set(a, i.Qy), r.vonMises.set(a, i.vonMises);
      const d = c(i.Nx, i.Ny, i.Nxy), h = c(i.Mx, i.My, i.Mxy);
      r.membranePrincipalMax.set(a, d.max), r.membranePrincipalMin.set(a, d.min), r.bendingPrincipalMax.set(a, h.max), r.bendingPrincipalMin.set(a, h.min), r.transverseShearMax.set(a, Math.sqrt(i.Qx ** 2 + i.Qy ** 2));
      const u = i.nodes.map((Q) => Q.Nx), y = i.nodes.map((Q) => Q.Ny), m = i.nodes.map((Q) => Q.Nxy), p = i.nodes.map((Q) => Q.Mx), Y = i.nodes.map((Q) => Q.My), N = i.nodes.map((Q) => Q.Mxy), g = i.nodes.map((Q) => Q.Qx), D = i.nodes.map((Q) => Q.Qy), z = i.nodes.map((Q) => Q.vonMises);
      e.membraneXX.set(a, u), e.membraneYY.set(a, y), e.membraneXY.set(a, m), e.bendingXX.set(a, p), e.bendingYY.set(a, Y), e.bendingXY.set(a, N), e.tranverseShearX.set(a, g), e.tranverseShearY.set(a, D), e.vonMises.set(a, z);
      const q = i.nodes.map((Q) => c(Q.Nx, Q.Ny, Q.Nxy).max), w = i.nodes.map((Q) => c(Q.Nx, Q.Ny, Q.Nxy).min), v = i.nodes.map((Q) => c(Q.Mx, Q.My, Q.Mxy).max), L = i.nodes.map((Q) => c(Q.Mx, Q.My, Q.Mxy).min), H = i.nodes.map((Q) => Math.sqrt(Q.Qx * Q.Qx + Q.Qy * Q.Qy));
      e.membranePrincipalMax.set(a, q), e.membranePrincipalMin.set(a, w), e.bendingPrincipalMax.set(a, v), e.bendingPrincipalMin.set(a, L), e.transverseShearMax.set(a, H);
    } else if (l.length === 3) {
      const i = Xn(f);
      Z(i, _);
      const d = po(s, a), h = uo(f), u = bo(_), y = xo(f), p = Z(1 / (2 * y), Z(Z(d, h), u)).toArray(), Y = ((_a = s.thicknesses) == null ? void 0 : _a.get(a)) ?? 1, N = p[0][0] * Y, g = p[1][0] * Y, D = p[2][0] * Y, z = p[0][1] * (Y ** 3 / 12), q = p[1][1] * (Y ** 3 / 12), w = p[2][1] * (Y ** 3 / 12);
      r.membraneXX.set(a, N), r.membraneYY.set(a, g), r.membraneXY.set(a, D), r.bendingXX.set(a, z), r.bendingYY.set(a, q), r.bendingXY.set(a, w);
      const v = c(N, g, D), L = c(z, q, w);
      r.membranePrincipalMax.set(a, v.max), r.membranePrincipalMin.set(a, v.min), r.bendingPrincipalMax.set(a, L.max), r.bendingPrincipalMin.set(a, L.min), r.transverseShearMax.set(a, 0);
    }
  });
  const { nodeToCentroidElementIndiciesMap: M } = _o(t, n);
  return n.forEach((l, a) => {
    if (l.length !== 3 && l.length !== 4 || l.length === 4 && e.bendingXX.has(a)) return;
    const f = l.length, _ = new Array(f).fill(0), i = new Array(f).fill(0), d = new Array(f).fill(0), h = new Array(f).fill(0), u = new Array(f).fill(0), y = new Array(f).fill(0), m = new Array(f).fill(0), p = new Array(f).fill(0), Y = new Array(f).fill(0), N = new Array(f).fill(0), g = new Array(f).fill(0), D = new Array(f).fill(0), z = new Array(f).fill(0), q = new Array(f).fill(0);
    l.forEach((w, v) => {
      const L = M.get(w) || [], H = (Q) => Jn(L.map((st) => Q.get(st) ?? 0));
      _[v] = H(r.membraneXX), i[v] = H(r.membraneYY), d[v] = H(r.membraneXY), h[v] = H(r.bendingXX), u[v] = H(r.bendingYY), y[v] = H(r.bendingXY), m[v] = H(r.tranverseShearX), p[v] = H(r.tranverseShearY), N[v] = H(r.membranePrincipalMax), g[v] = H(r.membranePrincipalMin), D[v] = H(r.bendingPrincipalMax), z[v] = H(r.bendingPrincipalMin), q[v] = H(r.transverseShearMax), Y[v] = H(r.vonMises);
    }), e.membraneXX.set(a, _), e.membraneYY.set(a, i), e.membraneXY.set(a, d), e.bendingXX.set(a, h), e.bendingYY.set(a, u), e.bendingXY.set(a, y), e.tranverseShearX.set(a, m), e.tranverseShearY.set(a, p), e.vonMises.set(a, Y), e.membranePrincipalMax.set(a, N), e.membranePrincipalMin.set(a, g), e.bendingPrincipalMax.set(a, D), e.bendingPrincipalMin.set(a, z), e.transverseShearMax.set(a, q);
  }), e;
}
const hn = Math.sqrt(3), Ot = 1 / hn, Zt = [[-Ot, -Ot], [Ot, -Ot], [Ot, Ot], [-Ot, Ot]], ln = 1 + hn / 2, Gt = -0.5, fn = 1 - hn / 2, ho = [[ln, Gt, fn, Gt], [Gt, ln, Gt, fn], [fn, Gt, ln, Gt], [Gt, fn, Gt, ln]];
function zt(t, n, s, o, e) {
  const r = ho[e];
  return r[0] * t + r[1] * n + r[2] * s + r[3] * o;
}
function go(t, n, s, o, e) {
  const r = [3 * t * (1 - n) / (s * s), -3 * t * (1 - n) / (s * s), -3 * t * (1 + n) / (s * s), 3 * t * (1 + n) / (s * s)], c = [(1 - n) * (3 * t - 1) / (2 * s), (1 - n) * (1 + 3 * t) / (2 * s), (1 + n) * (1 + 3 * t) / (2 * s), (1 + n) * (3 * t - 1) / (2 * s)], M = [3 * (1 - t) * n / (o * o), 3 * (1 + t) * n / (o * o), -3 * (1 + t) * n / (o * o), -3 * (1 - t) * n / (o * o)], l = [(1 - t) * (3 * n - 1) / (2 * o), (1 + t) * (3 * n - 1) / (2 * o), (1 + t) * (1 + 3 * n) / (2 * o), (1 - t) * (1 + 3 * n) / (2 * o)], a = 3 * (2 - t * t - n * n) / (2 * s * o), f = [a, -a, a, -a], _ = [(1 - n) * (1 + 3 * n) / (4 * s), -(1 - n) * (1 + 3 * n) / (4 * s), (1 + n) * (3 * n - 1) / (4 * s), (1 + n) * (1 - 3 * n) / (4 * s)], i = [(1 - t) * (1 + 3 * t) / (4 * o), (1 + t) * (1 - 3 * t) / (4 * o), (1 + t) * (3 * t - 1) / (4 * o), -(1 - t) * (1 + 3 * t) / (4 * o)];
  let d = 0, h = 0, u = 0;
  for (let y = 0; y < 4; y++) {
    const m = e[y * 6 + 2], p = e[y * 6 + 3], Y = e[y * 6 + 4];
    d += r[y] * m - c[y] * Y, h += M[y] * m + l[y] * p, u += f[y] * m + _[y] * p - i[y] * Y;
  }
  return [d, h, u];
}
function yo(t, n, s, o) {
  var _a, _b, _c;
  const e = ((_a = s.elasticities) == null ? void 0 : _a.get(o)) ?? 0, r = ((_b = s.poissonsRatios) == null ? void 0 : _b.get(o)) ?? 0, c = ((_c = s.thicknesses) == null ? void 0 : _c.get(o)) ?? 1, M = t[0], l = t[1], a = t[2], f = t[3], _ = [l[0] - M[0], l[1] - M[1], l[2] - M[2]], i = [a[0] - f[0], a[1] - f[1], a[2] - f[2]];
  let d = [_[0] + i[0], _[1] + i[1], _[2] + i[2]], h = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  h < 1e-14 && (h = 1);
  let u = [d[0] / h, d[1] / h, d[2] / h];
  const y = [a[0] - M[0], a[1] - M[1], a[2] - M[2]], m = [f[0] - l[0], f[1] - l[1], f[2] - l[2]];
  let p = [y[1] * m[2] - y[2] * m[1], y[2] * m[0] - y[0] * m[2], y[0] * m[1] - y[1] * m[0]], Y = Math.sqrt(p[0] * p[0] + p[1] * p[1] + p[2] * p[2]);
  Y < 1e-14 && (Y = 1);
  let N = [p[0] / Y, p[1] / Y, p[2] / Y], g = [N[1] * u[2] - N[2] * u[1], N[2] * u[0] - N[0] * u[2], N[0] * u[1] - N[1] * u[0]], D = Math.sqrt(g[0] * g[0] + g[1] * g[1] + g[2] * g[2]);
  D < 1e-14 && (D = 1), g = [g[0] / D, g[1] / D, g[2] / D], u = [g[1] * N[2] - g[2] * N[1], g[2] * N[0] - g[0] * N[2], g[0] * N[1] - g[1] * N[0]];
  const z = 0.25 * (M[0] + l[0] + a[0] + f[0]), q = 0.25 * (M[1] + l[1] + a[1] + f[1]), w = 0.25 * (M[2] + l[2] + a[2] + f[2]), v = [], L = [];
  for (let J = 0; J < 4; J++) {
    const T = t[J][0] - z, U = t[J][1] - q, E = t[J][2] - w;
    v.push(T * u[0] + U * u[1] + E * u[2]), L.push(T * g[0] + U * g[1] + E * g[2]);
  }
  const H = [u, g, N], Q = new Array(24).fill(0);
  for (let J = 0; J < 4; J++) {
    const T = J * 6, U = J * 6;
    for (let E = 0; E < 3; E++) Q[U + E] = H[E][0] * n[T] + H[E][1] * n[T + 1] + H[E][2] * n[T + 2];
    for (let E = 0; E < 3; E++) Q[U + 3 + E] = H[E][0] * n[T + 3] + H[E][1] * n[T + 4] + H[E][2] * n[T + 5];
  }
  const st = e / (1 - r * r), ht = [[st * c, st * r * c, 0], [st * r * c, st * c, 0], [0, 0, st * (1 - r) / 2 * c]], Tt = c * c * c / 12, et = [[st * Tt, st * r * Tt, 0], [st * r * Tt, st * Tt, 0], [0, 0, st * (1 - r) / 2 * Tt]];
  function S(J, T) {
    const U = [-0.25 * (1 - T), 0.25 * (1 - T), 0.25 * (1 + T), -0.25 * (1 + T)], E = [-0.25 * (1 - J), -0.25 * (1 + J), 0.25 * (1 + J), 0.25 * (1 - J)], at = [0.25 * (1 - J) * (1 - T), 0.25 * (1 + J) * (1 - T), 0.25 * (1 + J) * (1 + T), 0.25 * (1 - J) * (1 + T)];
    let _t = 0, rt = 0, wt = 0, Qt = 0;
    for (let P = 0; P < 4; P++) _t += U[P] * v[P], rt += U[P] * L[P], wt += E[P] * v[P], Qt += E[P] * L[P];
    const Nt = _t * Qt - rt * wt;
    if (Math.abs(Nt) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
    const St = Qt / Nt, Bt = -rt / Nt, Et = -wt / Nt, nn = _t / Nt, it = [], lt = [];
    for (let P = 0; P < 4; P++) it.push(St * U[P] + Bt * E[P]), lt.push(Et * U[P] + nn * E[P]);
    let At = 0, C = 0, k = 0;
    for (let P = 0; P < 4; P++) {
      const Rt = Q[P * 6 + 0], Ut = Q[P * 6 + 1];
      At += it[P] * Rt, C += lt[P] * Ut, k += lt[P] * Rt + it[P] * Ut;
    }
    const Pt = ht[0][0] * At + ht[0][1] * C, Xt = ht[1][0] * At + ht[1][1] * C, jt = ht[2][2] * k, qt = Math.min(v[0], v[1], v[2], v[3]), Lt = Math.max(v[0], v[1], v[2], v[3]), vt = Math.min(L[0], L[1], L[2], L[3]), Dt = Math.max(L[0], L[1], L[2], L[3]), yt = Lt - qt, ft = Dt - vt;
    let pt = yt > 1e-9 && ft > 1e-9;
    if (pt) {
      for (let P = 0; P < 4; P++) if (Math.abs(Math.abs(v[P]) - yt / 2) > 1e-6 * yt || Math.abs(Math.abs(L[P]) - ft / 2) > 1e-6 * ft) {
        pt = false;
        break;
      }
    }
    let ct, Ct, $t;
    if (pt) {
      const P = go(J, T, yt, ft, Q);
      ct = et[0][0] * P[0] + et[0][1] * P[1], Ct = et[1][0] * P[0] + et[1][1] * P[1], $t = et[2][2] * P[2];
    } else {
      let P = 0, Rt = 0, Ut = 0;
      for (let Jt = 0; Jt < 4; Jt++) {
        const _n = Q[Jt * 6 + 3], Nn = Q[Jt * 6 + 4];
        P += -it[Jt] * Nn, Rt += +lt[Jt] * _n, Ut += +it[Jt] * _n - lt[Jt] * Nn;
      }
      ct = et[0][0] * P + et[0][1] * Rt, Ct = et[1][0] * P + et[1][1] * Rt, $t = et[2][2] * Ut;
    }
    const nt = 5 / 6, I = e / (2 * (1 + r)), rn = nt * I * c;
    let Mt = 0, mt = 0;
    for (let P = 0; P < 4; P++) {
      const Rt = Q[P * 6 + 2], Ut = Q[P * 6 + 3], Jt = Q[P * 6 + 4];
      Mt += it[P] * Rt + at[P] * Ut, mt += lt[P] * Rt + at[P] * Jt;
    }
    const ut = rn * Mt, kt = rn * mt, F = Pt / c + 6 * ct / (c * c), Wt = Xt / c + 6 * Ct / (c * c), xn = jt / c + 6 * $t / (c * c), gn = Pt / c - 6 * ct / (c * c), yn = Xt / c - 6 * Ct / (c * c), dn = jt / c - 6 * $t / (c * c), kn = Math.sqrt(F * F - F * Wt + Wt * Wt + 3 * xn * xn), Tn = Math.sqrt(gn * gn - gn * yn + yn * yn + 3 * dn * dn);
    return { Nx: Pt, Ny: Xt, Nxy: jt, Mx: ct, My: Ct, Mxy: $t, Qx: ut, Qy: kt, vonMises: Math.max(kn, Tn) };
  }
  const x = S(Zt[0][0], Zt[0][1]), A = S(Zt[1][0], Zt[1][1]), b = S(Zt[2][0], Zt[2][1]), X = S(Zt[3][0], Zt[3][1]);
  {
    const J = Math.min(v[0], v[1], v[2], v[3]), T = Math.max(v[0], v[1], v[2], v[3]), U = Math.min(L[0], L[1], L[2], L[3]), E = Math.max(L[0], L[1], L[2], L[3]), at = T - J, _t = E - U;
    if (at > 1e-9 && _t > 1e-9) {
      const rt = hn / 2, wt = rt * (A.Mx + b.Mx - (x.Mx + X.Mx)) / at, Qt = rt * (b.My + X.My - (x.My + A.My)) / _t, Nt = rt * (b.Mxy + X.Mxy - (x.Mxy + A.Mxy)) / _t, St = rt * (A.Mxy + b.Mxy - (x.Mxy + X.Mxy)) / at, Bt = -(wt + Nt), Et = -(Qt + St);
      x.Qx = A.Qx = b.Qx = X.Qx = Bt, x.Qy = A.Qy = b.Qy = X.Qy = Et;
    }
  }
  const B = [0, 1, 2, 3].map((J) => ({ Nx: zt(x.Nx, A.Nx, b.Nx, X.Nx, J), Ny: zt(x.Ny, A.Ny, b.Ny, X.Ny, J), Nxy: zt(x.Nxy, A.Nxy, b.Nxy, X.Nxy, J), Mx: zt(x.Mx, A.Mx, b.Mx, X.Mx, J), My: zt(x.My, A.My, b.My, X.My, J), Mxy: zt(x.Mxy, A.Mxy, b.Mxy, X.Mxy, J), Qx: zt(x.Qx, A.Qx, b.Qx, X.Qx, J), Qy: zt(x.Qy, A.Qy, b.Qy, X.Qy, J), vonMises: zt(x.vonMises, A.vonMises, b.vonMises, X.vonMises, J) })), j = (J, T, U, E) => 0.25 * (J + T + U + E), K = j(x.Nx, A.Nx, b.Nx, X.Nx), V = j(x.Ny, A.Ny, b.Ny, X.Ny), $ = j(x.Nxy, A.Nxy, b.Nxy, X.Nxy), tt = j(x.Mx, A.Mx, b.Mx, X.Mx), R = j(x.My, A.My, b.My, X.My), xt = j(x.Mxy, A.Mxy, b.Mxy, X.Mxy), dt = j(x.Qx, A.Qx, b.Qx, X.Qx), ot = j(x.Qy, A.Qy, b.Qy, X.Qy), gt = j(x.vonMises, A.vonMises, b.vonMises, X.vonMises);
  return { Nx: K, Ny: V, Nxy: $, Mx: tt, My: R, Mxy: xt, Qx: dt, Qy: ot, vonMises: gt, nodes: B };
}
function po(t, n) {
  var _a, _b, _c, _d, _e;
  const s = ((_a = t.elasticities) == null ? void 0 : _a.get(n)) ?? 0, o = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, e = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, r = ((_d = t.shearModuli) == null ? void 0 : _d.get(n)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(n), o > 0 ? Dn(s, o, r, e) : jn(s, e);
}
function uo(t) {
  const [n, s] = t[0], [o, e] = t[1], [r, c] = t[2], M = e - c, l = c - s, a = s - e, f = r - o, _ = n - r, i = o - n;
  return O([[M, l, a, 0, 0, 0], [0, 0, 0, f, _, i], [f, _, i, M, l, a]]);
}
function bo(t) {
  const [n, s, o] = [t[0], t[6], t[12]], [e, r, c] = [t[1], t[7], t[13]], [M, l, a] = [t[4], t[10], t[16]], [f, _, i] = [t[3], t[9], t[15]];
  return O([[n, -M], [s, -l], [o, -a], [e, f], [r, _], [c, i]]);
}
function xo(t) {
  const [n, s] = t[0], [o, e] = t[1], [r, c] = t[2], M = o - n, l = r - n, a = c - s, f = s - e;
  return 0.5 * (M * a - l * -f);
}
function _o(t, n) {
  const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return n.forEach((e, r) => {
    const c = e.map((l) => t[l]), M = No(c);
    e.forEach((l) => {
      var _a, _b;
      s.has(l) || s.set(l, []), (_a = s.get(l)) == null ? void 0 : _a.push(M), o.has(l) || o.set(l, []), (_b = o.get(l)) == null ? void 0 : _b.push(r);
    });
  }), { nodeToCentroidNodesMap: s, nodeToCentroidElementIndiciesMap: o };
}
function No(t) {
  const n = t.reduce((e, r) => e + r[0], 0) / t.length, s = t.reduce((e, r) => e + r[1], 0) / t.length, o = t.reduce((e, r) => e + r[2], 0) / t.length;
  return [n, s, o];
}
export {
  Ao as a,
  Xn as b,
  ao as g
};
