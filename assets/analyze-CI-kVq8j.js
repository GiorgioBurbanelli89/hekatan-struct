import { s as It, n as Rt, b as Bt, k as $t, i as Zt, z as W, c as Gt, m as $, t as Ot, a as qt, e as P, f as ro } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const Kt = 1 / Math.sqrt(3);
function Et(t, o) {
  const c = [0.25 * (1 - t) * (1 - o), 0.25 * (1 + t) * (1 - o), 0.25 * (1 + t) * (1 + o), 0.25 * (1 - t) * (1 + o)], e = [-0.25 * (1 - o), 0.25 * (1 - o), 0.25 * (1 + o), -0.25 * (1 + o)], a = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: c, dNdxi: e, dNdeta: a };
}
function Vt(t, o, c, e) {
  let a = 0, s = 0, n = 0, h = 0;
  for (let f = 0; f < 4; f++) a += t[f] * c[f], s += t[f] * e[f], n += o[f] * c[f], h += o[f] * e[f];
  const r = a * h - s * n, u = 1 / r, y = [], M = [];
  for (let f = 0; f < 4; f++) y.push(u * (h * t[f] - s * o[f])), M.push(u * (-n * t[f] + a * o[f]));
  return { dNdx: y, dNdy: M, detJ: r };
}
function co(t, o, c, e, a, s) {
  const n = c * a / (1 - e * e), h = [[n, n * e, 0], [n * e, n, 0], [0, 0, n * (1 - e) / 2]], r = [1, 2, 3, 0], u = [3, 0, 1, 2], y = [], M = [];
  for (let S = 0; S < 4; S++) y.push((o[r[S]] - o[S]) / 8), M.push(-(t[r[S]] - t[S]) / 8);
  const f = [-Math.sqrt(3 / 5), 0, Math.sqrt(3 / 5)], A = [5 / 9, 8 / 9, 5 / 9], i = Qt(14, 14);
  let l = [], j = [], b = [], d = [], m = [], p = 0, g = 0, X = 0;
  for (let S = 0; S < 3; S++) for (let q = 0; q < 3; q++) {
    const U = f[S], tt = f[q], N = A[S] * A[q], { N: w, dNdxi: O, dNdeta: k } = Et(U, tt);
    let R = 0, G = 0, _ = 0, J = 0;
    for (let Y = 0; Y < 4; Y++) R += O[Y] * t[Y], G += O[Y] * o[Y], _ += k[Y] * t[Y], J += k[Y] * o[Y];
    const B = R * J - G * _, V = J / B, I = -G / B, T = -_ / B, rt = R / B, at = [], nt = [];
    for (let Y = 0; Y < 4; Y++) at.push(V * O[Y] + I * k[Y]), nt.push(T * O[Y] + rt * k[Y]);
    const lt = [-U * (1 - tt), 0.5 * (1 - tt * tt), -U * (1 + tt), -0.5 * (1 - tt * tt)], mt = [-0.5 * (1 - U * U), -tt * (1 + U), 0.5 * (1 - U * U), -tt * (1 - U)], Z = [], ft = [];
    for (let Y = 0; Y < 4; Y++) Z.push(V * lt[Y] + I * mt[Y]), ft.push(T * lt[Y] + rt * mt[Y]);
    const yt = -2 * U * (1 - tt * tt), Mt = -2 * tt * (1 - U * U), dt = V * yt + I * Mt, ut = T * yt + rt * Mt, Yt = [], pt = [], Nt = [], xt = [];
    for (let Y = 0; Y < 4; Y++) {
      const ot = u[Y];
      Yt.push(Z[ot] * y[ot] - Z[Y] * y[Y]), pt.push(ft[ot] * y[ot] - ft[Y] * y[Y]), Nt.push(Z[ot] * M[ot] - Z[Y] * M[Y]), xt.push(ft[ot] * M[ot] - ft[Y] * M[Y]);
    }
    const ct = Qt(3, 14);
    for (let Y = 0; Y < 4; Y++) ct[0][3 * Y] = at[Y], ct[1][3 * Y + 1] = nt[Y], ct[2][3 * Y] = nt[Y], ct[2][3 * Y + 1] = at[Y], ct[0][3 * Y + 2] = Yt[Y], ct[1][3 * Y + 2] = xt[Y], ct[2][3 * Y + 2] = pt[Y] + Nt[Y];
    ct[0][12] = dt, ct[2][12] = ut, ct[1][13] = ut, ct[2][13] = dt;
    const Lt = N * Math.abs(B);
    for (let Y = 0; Y < 14; Y++) for (let ot = 0; ot < 14; ot++) {
      let At = 0;
      for (let bt = 0; bt < 3; bt++) for (let D = 0; D < 3; D++) At += ct[bt][Y] * h[bt][D] * ct[D][ot];
      i[Y][ot] += Lt * At;
    }
    S === 1 && q === 1 && (l = w.slice(), j = at.slice(), b = nt.slice(), d = pt.slice(), m = Nt.slice(), p = dt, g = ut, X = Math.abs(B));
  }
  const K = c / (2 * (1 + e)), L = new Array(14).fill(0);
  for (let S = 0; S < 4; S++) L[3 * S] = -0.5 * b[S], L[3 * S + 1] = 0.5 * j[S], L[3 * S + 2] = 0.5 * (m[S] - d[S]) - l[S];
  L[12] = -0.5 * g, L[13] = 0.5 * p;
  const v = s * K * a * 4 * X;
  for (let S = 0; S < 14; S++) for (let q = 0; q < 14; q++) i[S][q] += v * L[S] * L[q];
  const z = [[i[12][12], i[12][13]], [i[13][12], i[13][13]]], st = z[0][0] * z[1][1] - z[0][1] * z[1][0], gt = Qt(12, 12);
  for (let S = 0; S < 12; S++) for (let q = 0; q < 12; q++) gt[S][q] = i[S][q];
  if (Math.abs(st) < 1e-30) return gt;
  const ht = [[z[1][1] / st, -z[0][1] / st], [-z[1][0] / st, z[0][0] / st]];
  for (let S = 0; S < 12; S++) for (let q = 0; q < 12; q++) {
    let U = 0;
    for (let tt = 0; tt < 2; tt++) for (let N = 0; N < 2; N++) U += i[S][12 + tt] * ht[tt][N] * i[12 + N][q];
    gt[S][q] -= U;
  }
  return gt;
}
function eo(t, o, c, e, a) {
  const s = Qt(12, 12), n = c * a * a * a / (12 * (1 - e * e)), r = 5 / 6 * c / (2 * (1 + e)) * a, u = [[-Kt, -Kt], [Kt, -Kt], [Kt, Kt], [-Kt, Kt]], y = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], M = [];
  for (const f of y) {
    const { N: A, dNdxi: i, dNdeta: l } = Et(f.xi, f.eta), { dNdx: j, dNdy: b } = Vt(i, l, t, o), d = Qt(2, 12);
    for (let m = 0; m < 4; m++) d[0][m * 3] = j[m], d[0][m * 3 + 1] = -A[m], d[1][m * 3] = b[m], d[1][m * 3 + 2] = -A[m];
    M.push(d);
  }
  for (const [f, A] of u) {
    const { dNdxi: i, dNdeta: l } = Et(f, A), { dNdx: j, dNdy: b, detJ: d } = Vt(i, l, t, o), m = Qt(3, 12);
    for (let v = 0; v < 4; v++) m[0][v * 3 + 1] = j[v], m[1][v * 3 + 2] = b[v], m[2][v * 3 + 1] = b[v], m[2][v * 3 + 2] = j[v];
    for (let v = 0; v < 12; v++) for (let z = 0; z < 12; z++) {
      let st = 0;
      st += n * (m[0][v] * m[0][z] + e * m[0][v] * m[1][z] + e * m[1][v] * m[0][z] + m[1][v] * m[1][z]), st += n * (1 - e) / 2 * m[2][v] * m[2][z], s[v][z] += st * Math.abs(d);
    }
    const p = Qt(2, 12), g = 0.5 * (1 - A), X = 0.5 * (1 + A), K = 0.5 * (1 - f), L = 0.5 * (1 + f);
    for (let v = 0; v < 12; v++) p[0][v] = g * M[0][0][v] + X * M[1][0][v], p[1][v] = K * M[2][1][v] + L * M[3][1][v];
    for (let v = 0; v < 12; v++) for (let z = 0; z < 12; z++) s[v][z] += r * (p[0][v] * p[0][z] + p[1][v] * p[1][z]) * Math.abs(d);
  }
  return s;
}
function ao(t, o, c) {
  var _a, _b, _c;
  const e = ((_a = o == null ? void 0 : o.elasticities) == null ? void 0 : _a.get(c)) ?? 0, a = ((_b = o == null ? void 0 : o.poissonsRatios) == null ? void 0 : _b.get(c)) ?? 0.2, s = ((_c = o == null ? void 0 : o.thicknesses) == null ? void 0 : _c.get(c)) ?? 0;
  if (e === 0 || s === 0) return Qt(24, 24);
  const { localCoords: n } = to(t), h = n.map((b) => b[0]), r = n.map((b) => b[1]), u = eo(h, r, e, a, s), M = co(h, r, e, a, s, 0.4), f = Qt(24, 24), A = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22], i = [[1, 0, 0], [0, 0, -1], [0, 1, 0]], l = Qt(12, 12);
  for (let b = 0; b < 12; b++) for (let d = 0; d < 12; d++) {
    let m = 0;
    const p = b / 3 | 0, g = b % 3, X = d / 3 | 0, K = d % 3;
    for (let L = 0; L < 3; L++) {
      const v = i[L][g];
      if (v !== 0) for (let z = 0; z < 3; z++) {
        const st = i[z][K];
        st !== 0 && (m += v * u[p * 3 + L][X * 3 + z] * st);
      }
    }
    l[b][d] = m;
  }
  for (let b = 0; b < 12; b++) for (let d = 0; d < 12; d++) f[A[b]][A[d]] += l[b][d];
  const j = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let b = 0; b < 12; b++) for (let d = 0; d < 12; d++) f[j[b]][j[d]] += M[b][d];
  return f;
}
function io(t) {
  const { localX: o, localY: c, localZ: e } = to(t), a = [[o[0], o[1], o[2]], [c[0], c[1], c[2]], [e[0], e[1], e[2]]], s = Qt(24, 24);
  for (let n = 0; n < 4; n++) for (let h = 0; h < 2; h++) {
    const r = n * 6 + h * 3;
    for (let u = 0; u < 3; u++) for (let y = 0; y < 3; y++) s[r + u][r + y] = a[u][y];
  }
  return s;
}
function to(t) {
  const o = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], c = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], e = Wt(o, c), a = Math.sqrt(e[0] ** 2 + e[1] ** 2 + e[2] ** 2), s = e.map((i) => i / a), n = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], h = Math.sqrt(n[0] ** 2 + n[1] ** 2 + n[2] ** 2), r = n.map((i) => i / h), u = Wt(s, r), y = t.map((i) => i[0]).reduce((i, l) => i + l) / 4, M = t.map((i) => i[1]).reduce((i, l) => i + l) / 4, f = t.map((i) => i[2]).reduce((i, l) => i + l) / 4, A = t.map((i) => {
    const l = i[0] - y, j = i[1] - M, b = i[2] - f;
    return [l * r[0] + j * r[1] + b * r[2], l * u[0] + j * u[1] + b * u[2]];
  });
  return { localX: r, localY: u, localZ: s, localCoords: A };
}
function Wt(t, o) {
  return [t[1] * o[2] - t[2] * o[1], t[2] * o[0] - t[0] * o[2], t[0] * o[1] - t[1] * o[0]];
}
function Qt(t, o) {
  return Array.from({ length: t }, () => Array(o).fill(0));
}
function Ht(t, o = 0) {
  if (t.length === 2) return lo(t, o);
  if (t.length === 3) return fo(t);
  if (t.length === 4) return io(t);
}
function lo(t, o = 0) {
  const c = (y) => {
    if (Math.abs(o) < 1e-12) return y;
    const M = o * Math.PI / 180, f = Math.cos(M), A = Math.sin(M);
    return [y[0], [f * y[1][0] + A * y[2][0], f * y[1][1] + A * y[2][1], f * y[1][2] + A * y[2][2]], [-A * y[1][0] + f * y[2][0], -A * y[1][1] + f * y[2][1], -A * y[1][2] + f * y[2][2]]];
  }, e = It(t[1], t[0]), a = Rt(e), s = Bt(e, [1, 0, 0]) / a, n = Bt(e, [0, 1, 0]) / a, h = Bt(e, [0, 0, 1]) / a, r = Math.sqrt(s ** 2 + n ** 2);
  if (r < 1e-9) {
    const y = h > 0 ? 1 : -1, M = [[0, 0, y], [1, 0, 0], [0, y, 0]];
    return $t(Zt(4), c(M)).toArray();
  }
  const u = [[s, n, h], [-s * h / r, -n * h / r, r], [n / r, -s / r, 0]];
  return $t(Zt(4), c(u)).toArray();
}
function fo(t) {
  const s = [t[0], t[1], t[2]], n = W(3, 3).toArray();
  for (let g = 0; g < 3; g++) for (let X = 0; X < 3; X++) n[g][X] = s[X][g];
  const h = [-1, 1, 0], r = [-1, 0, 1], u = W(3, 2).toArray();
  for (let g = 0; g < 3; g++) for (let X = 0; X < 3; X++) u[g][0] += n[g][X] * h[X], u[g][1] += n[g][X] * r[X];
  const y = u.map((g) => g[0]), M = u.map((g) => g[1]);
  let f = Gt(y, M), A = Rt(f);
  if (A === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), W(18, 18).toArray();
  f = f.map((g) => g / A);
  const i = [...f], l = Zt(3).toArray(), j = f[0];
  let b;
  if (Math.abs(j) > 1 - 1e-10) {
    const g = f[2];
    b = l.map((X, K) => X[2] - g * f[K]);
  } else b = l.map((g, X) => g[0] - j * f[X]);
  if (A = Rt(b), A === 0) return console.warn("Degenerate local X-axis detected."), W(18, 18).toArray();
  b = b.map((g) => g / A);
  let d = Gt(i, b);
  if (A = Rt(d), A === 0) return console.warn("Degenerate local Y-axis detected."), W(18, 18).toArray();
  d = d.map((g) => g / A);
  const m = [b, d, i], p = W(18, 18).toArray();
  for (let g = 0; g < 3; g++) {
    const X = g * 6, K = X + 3;
    for (let L = 0; L < 3; L++) for (let v = 0; v < 3; v++) p[X + L][X + v] = m[L][v], p[K + L][K + v] = m[L][v];
  }
  return p;
}
function go(t, o, c) {
  var _a, _b, _c;
  if (t.length === 2) {
    let e = mo(t, o, c);
    const a = (_a = o == null ? void 0 : o.partialFixitySprings) == null ? void 0 : _a.get(c);
    a && (e = ho(e, a));
    const s = (_b = o == null ? void 0 : o.momentReleases) == null ? void 0 : _b.get(c);
    s && (e = yo(e, s));
    const n = (_c = o == null ? void 0 : o.endOffsets) == null ? void 0 : _c.get(c);
    if (n && n[2] > 0 && (n[0] > 0 || n[1] > 0)) {
      const h = uo(n[2] * n[0], n[2] * n[1]);
      e = bo(h, e, h);
    }
    return e;
  }
  if (t.length === 3) return po(t, o, c);
  if (t.length === 4) return ao(t, o, c);
}
function ho(t, o) {
  const c = t.map((a) => [...a]), e = Math.min(o.length, 12);
  for (let a = 0; a < e; a++) o[a] > 1e-12 && (c[a][a] += o[a]);
  return c;
}
function yo(t, o) {
  const c = [];
  if (o.length >= 12) for (let i = 0; i < 12; i++) o[i] && c.push(i);
  else {
    const i = [3, 4, 5, 9, 10, 11];
    for (let l = 0; l < Math.min(o.length, 6); l++) o[l] && c.push(i[l]);
  }
  if (c.length === 0) return t;
  const e = t.length, a = [];
  for (let i = 0; i < e; i++) c.includes(i) || a.push(i);
  const s = a.length, n = c.length, h = Array.from({ length: n }, (i, l) => Array.from({ length: n }, (j, b) => t[c[l]][c[b]])), r = Array.from({ length: s }, (i, l) => Array.from({ length: n }, (j, b) => t[a[l]][c[b]])), u = Array.from({ length: n }, (i, l) => Array.from({ length: s }, (j, b) => t[c[l]][a[b]])), y = Mo(h);
  if (!y) return t;
  const M = Ut(r, y), f = Ut(M, u), A = Array.from({ length: e }, () => Array(e).fill(0));
  for (let i = 0; i < s; i++) for (let l = 0; l < s; l++) A[a[i]][a[l]] = t[a[i]][a[l]] - f[i][l];
  return A;
}
function Ut(t, o) {
  const c = t.length, e = o[0].length, a = o.length, s = Array.from({ length: c }, () => Array(e).fill(0));
  for (let n = 0; n < c; n++) for (let h = 0; h < e; h++) for (let r = 0; r < a; r++) s[n][h] += t[n][r] * o[r][h];
  return s;
}
function Mo(t) {
  const o = t.length, c = t.map((e, a) => {
    const s = [...e];
    for (let n = 0; n < o; n++) s.push(a === n ? 1 : 0);
    return s;
  });
  for (let e = 0; e < o; e++) {
    let a = e;
    for (let n = e + 1; n < o; n++) Math.abs(c[n][e]) > Math.abs(c[a][e]) && (a = n);
    if ([c[e], c[a]] = [c[a], c[e]], Math.abs(c[e][e]) < 1e-15) return null;
    const s = c[e][e];
    for (let n = 0; n < 2 * o; n++) c[e][n] /= s;
    for (let n = 0; n < o; n++) {
      if (n === e) continue;
      const h = c[n][e];
      for (let r = 0; r < 2 * o; r++) c[n][r] -= h * c[e][r];
    }
  }
  return c.map((e) => e.slice(o));
}
function uo(t, o) {
  const c = Array.from({ length: 12 }, (e, a) => Array.from({ length: 12 }, (s, n) => a === n ? 1 : 0));
  return Math.abs(t) > 1e-12 && (c[1][5] = t, c[2][4] = -t), Math.abs(o) > 1e-12 && (c[7][11] = -o, c[8][10] = o), c;
}
function bo(t, o, c) {
  const e = Array.from({ length: 12 }, () => Array(12).fill(0));
  for (let s = 0; s < 12; s++) for (let n = 0; n < 12; n++) {
    let h = 0;
    for (let r = 0; r < 12; r++) h += t[r][s] * o[r][n];
    e[s][n] = h;
  }
  const a = Array.from({ length: 12 }, () => Array(12).fill(0));
  for (let s = 0; s < 12; s++) for (let n = 0; n < 12; n++) {
    let h = 0;
    for (let r = 0; r < 12; r++) h += e[s][r] * c[r][n];
    a[s][n] = h;
  }
  return a;
}
function mo(t, o, c) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const e = ((_a = o == null ? void 0 : o.momentsOfInertiaZ) == null ? void 0 : _a.get(c)) ?? 0, a = ((_b = o == null ? void 0 : o.momentsOfInertiaY) == null ? void 0 : _b.get(c)) ?? 0, s = ((_c = o == null ? void 0 : o.elasticities) == null ? void 0 : _c.get(c)) ?? 0, n = ((_d = o == null ? void 0 : o.areas) == null ? void 0 : _d.get(c)) ?? 0, h = ((_e = o == null ? void 0 : o.shearModuli) == null ? void 0 : _e.get(c)) ?? 0, r = ((_f = o == null ? void 0 : o.torsionalConstants) == null ? void 0 : _f.get(c)) ?? 0, u = Rt(It(t[0], t[1]));
  if (u < 1e-12) return console.warn(`[hekatan-fem] barra ${c} de longitud CERO: matriz nula (no aporta rigidez). Mismo criterio que getLocalStiffnessMatrix.cpp.`), Array.from({ length: 12 }, () => new Array(12).fill(0));
  const y = (_g = o == null ? void 0 : o.endOffsets) == null ? void 0 : _g.get(c), M = y && y[2] > 0 ? u - y[2] * (y[0] + y[1]) : u;
  if (M <= 1e-9) throw new Error(`end offsets se comen la barra ${c}: L = ${u.toFixed(4)} m, rz = ${y[2]}, offsets ${y[0]} y ${y[1]} -> Lf = ${M.toFixed(4)} m`);
  let f = ((_h = o == null ? void 0 : o.shearAreasY) == null ? void 0 : _h.get(c)) ?? 0, A = ((_i = o == null ? void 0 : o.shearAreasZ) == null ? void 0 : _i.get(c)) ?? 0;
  f === 0 && A === 0 && n > 0 && h > 0 && (f = A = 5 / 6 * n);
  const i = A > 0 && h > 0 ? 12 * s * e / (h * A * M ** 2) : 0, l = f > 0 && h > 0 ? 12 * s * a / (h * f * M ** 2) : 0, j = s * n / u, b = h * r / u, d = 12 * s * e / M ** 3 / (1 + i), m = 6 * s * e / M ** 2 / (1 + i), p = 4 * s * e / M * (1 + i / 4) / (1 + i), g = 2 * s * e / M * (1 - i / 2) / (1 + i), X = 12 * s * a / M ** 3 / (1 + l), K = 6 * s * a / M ** 2 / (1 + l), L = 4 * s * a / M * (1 + l / 4) / (1 + l), v = 2 * s * a / M * (1 - l / 2) / (1 + l);
  return [[j, 0, 0, 0, 0, 0, -j, 0, 0, 0, 0, 0], [0, d, 0, 0, 0, m, 0, -d, 0, 0, 0, m], [0, 0, X, 0, -K, 0, 0, 0, -X, 0, -K, 0], [0, 0, 0, b, 0, 0, 0, 0, 0, -b, 0, 0], [0, 0, -K, 0, L, 0, 0, 0, K, 0, v, 0], [0, m, 0, 0, 0, p, 0, -m, 0, 0, 0, g], [-j, 0, 0, 0, 0, 0, j, 0, 0, 0, 0, 0], [0, -d, 0, 0, 0, -m, 0, d, 0, 0, 0, -m], [0, 0, -X, 0, K, 0, 0, 0, X, 0, K, 0], [0, 0, 0, -b, 0, 0, 0, 0, 0, b, 0, 0], [0, 0, -K, 0, v, 0, 0, 0, K, 0, L, 0], [0, m, 0, 0, 0, g, 0, -m, 0, 0, 0, p]];
}
function po(t, o, c) {
  var _a, _b, _c, _d, _e;
  const e = ((_a = o.elasticities) == null ? void 0 : _a.get(c)) ?? 0, a = ((_b = o.elasticitiesOrthogonal) == null ? void 0 : _b.get(c)) ?? 0, s = ((_c = o.poissonsRatios) == null ? void 0 : _c.get(c)) ?? 0, n = ((_d = o.shearModuli) == null ? void 0 : _d.get(c)) ?? 0, h = ((_e = o.thicknesses) == null ? void 0 : _e.get(c)) ?? 0, r = a > 0, u = r ? gt(e, a, n, s, h) : z(e, s, h), y = r ? ht(n, h) : st(e, s, h), M = r ? no(e, a, n, s) : oo(e, s), f = t.map(([N, w]) => [N, w]), A = f[1][0] - f[0][0], i = f[2][0] - f[0][0], l = f[0][1] - f[1][1], j = f[2][1] - f[0][1], b = 0.5 * (A * j - i * -l), d = S(f), m = U(f), p = tt(f, M, h), g = $($(Ot(d), y), d), X = $($(Ot(m), u), m), K = W(18, 18).toArray(), L = $(qt(g, X), b), v = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let N = 0; N < 3; N++) for (let w = 0; w < 3; w++) for (let O = 0; O < 3; O++) {
    const k = v[N][w], R = v[O][w];
    K[k][R] = p[N * 3 + w][O * 3 + w];
  }
  for (let N = 0; N < 18; N++) for (let w = 0; w < 18; w++) K[N][w] = (K[N][w] ?? 0) + L.get([N, w]);
  return K;
  function z(N, w, O) {
    const k = N / (1 - w * w), R = P([[k, k * w, 0], [k * w, k, 0], [0, 0, k * (1 - w) / 2]]);
    return $(O ** 3 / 12, R);
  }
  function st(N, w, O) {
    const k = 0.8333333333333334, R = N / (2 * (1 + w)), G = k * R * O;
    return P([[G, 0], [0, G]]);
  }
  function gt(N, w, O, k, R) {
    const G = w * k / N, _ = 1 - k * G, J = N / _, B = w / _, V = k * w / _, T = P([[J, V, 0], [V, B, 0], [0, 0, O]]);
    return $(R ** 3 / 12, T);
  }
  function ht(N, w) {
    const k = 0.8333333333333334 * N * w;
    return P([[k, 0], [0, k]]);
  }
  function S(N) {
    const w = W(2, 18).toArray(), [O, k] = N[0], [R, G] = N[1], [_, J] = N[2], B = 0.5 * ((R - O) * (J - k) - (_ - O) * -(k - G)), V = (O + R + _) / 3, I = (k + G + J) / 3, T = [V, O, R], rt = [I, k, G], at = [V, R, _], nt = [I, G, J], lt = [V, _, O], mt = [I, J, k], Z = 1 / 3, [ft, yt, Mt, dt] = q(T, rt), [ut, Yt, pt, Nt] = q(at, nt), [xt, ct, Lt, Y] = q(lt, mt), ot = W(2, 18).toArray(), At = W(2, 18).toArray(), bt = W(2, 18).toArray();
    for (let D = 0; D < 2; D++) for (let Q = 0; Q < 6; Q++) ot[D][Q] = Z * ft[D][Q] + yt[D][Q], ot[D][Q + 6] = Z * ft[D][Q] + Mt[D][Q], ot[D][Q + 12] = Z * ft[D][Q], At[D][Q] = Z * ut[D][Q], At[D][Q + 6] = Z * ut[D][Q] + Yt[D][Q], At[D][Q + 12] = Z * ut[D][Q] + pt[D][Q], bt[D][Q] = Z * xt[D][Q] + Lt[D][Q], bt[D][Q + 6] = Z * xt[D][Q], bt[D][Q + 12] = Z * xt[D][Q] + ct[D][Q];
    for (let D = 0; D < 2; D++) for (let Q = 0; Q < 18; Q++) ot[D][Q] *= dt, At[D][Q] *= Nt, bt[D][Q] *= Y, w[D][Q] = (ot[D][Q] + At[D][Q] + bt[D][Q]) / B;
    return w;
  }
  function q(N, w) {
    const O = W(2, 6).toArray(), k = W(2, 6).toArray(), R = W(2, 6).toArray(), G = N[1] - N[0], _ = N[0] - N[2], J = w[2] - w[0], B = w[0] - w[1], V = N[2] - N[1], I = w[1] - w[2], T = 0.5 * (G * J - _ * B), rt = 0.5 * B * _, at = 0.5 * J * G, nt = 0.5 * G * _, lt = 0.5 * B * J;
    return O[0][2] = 0.5 * V / T, O[0][3] = -0.5, O[1][2] = 0.5 * I / T, O[1][4] = 0.5, k[0][2] = 0.5 * _ / T, k[0][3] = 0.5 * rt / T, k[0][4] = 0.5 * nt / T, k[1][2] = 0.5 * J / T, k[1][3] = 0.5 * lt / T, k[1][4] = 0.5 * at / T, R[0][2] = 0.5 * G / T, R[0][3] = -0.5 * at / T, R[0][4] = -0.5 * nt / T, R[1][2] = 0.5 * B / T, R[1][3] = -0.5 * lt / T, R[1][4] = -0.5 * rt / T, [O, k, R, T];
  }
  function U(N) {
    const w = W(3, 18).toArray(), [O, k] = N[0], [R, G] = N[1], [_, J] = N[2], B = R - O, V = _ - O, I = _ - R, T = G - J, rt = J - k, at = k - G, nt = 0.5 * (B * rt - V * -at), lt = T / (2 * nt), mt = I / (2 * nt), Z = rt / (2 * nt), ft = -V / (2 * nt), yt = at / (2 * nt), Mt = B / (2 * nt);
    return w[0][4] = lt, w[0][10] = Z, w[0][16] = yt, w[1][3] = -mt, w[1][9] = -ft, w[1][15] = -Mt, w[2][3] = -lt, w[2][4] = mt, w[2][9] = -Z, w[2][10] = ft, w[2][15] = -yt, w[2][16] = Mt, w;
  }
  function tt(N, w, O) {
    let k = W(9, 9).toArray(), R = W(9, 9).toArray(), G = W(9, 9).toArray(), _ = W(9, 3).toArray(), J = W(3, 9).toArray(), B = W(3, 3).toArray(), V = W(3, 3).toArray(), I = W(3, 3).toArray(), T = W(3, 3).toArray(), rt = W(3, 3).toArray(), at = W(3, 3).toArray(), nt = W(3, 3).toArray(), lt = W(3, 3).toArray();
    const mt = 1 / 8, Z = mt / 6, ft = mt ** 2 / 4, yt = 1, Mt = 2, dt = 1, ut = 0, Yt = 1, pt = -1, Nt = -1, xt = -1, ct = -2, Lt = N[0][0], Y = N[0][1], ot = N[1][0], At = N[1][1], bt = N[2][0], D = N[2][1], Q = Lt - ot, jt = ot - bt, kt = bt - Lt, _t = Y - At, Jt = At - D, Tt = D - Y, Xt = -Q, Dt = -jt, x = -kt, C = -_t, E = -Jt, F = -Tt, Ct = 0.5 * (Xt * Tt - kt * -_t), so = 2 * Ct, it = 4 * Ct, et = 0.5 * O, Pt = Ct * O, wt = Xt ** 2 + C ** 2, vt = Dt ** 2 + E ** 2, St = x ** 2 + F ** 2;
    _[0][0] = et * Jt, _[0][2] = et * Dt, _[1][1] = et * Dt, _[1][2] = et * Jt, _[2][0] = et * Jt * (F - C) * Z, _[2][1] = et * Dt * (kt - Q) * Z, _[2][2] = et * (kt * F - Q * C) * 2 * Z, _[3][0] = et * Tt, _[3][2] = et * x, _[4][1] = et * x, _[4][2] = et * Tt, _[5][0] = et * Tt * (C - E) * Z, _[5][1] = et * x * (Q - jt) * Z, _[5][2] = et * (Q * C - jt * E) * 2 * Z, _[6][0] = et * _t, _[6][2] = et * Xt, _[7][1] = et * Xt, _[7][2] = et * _t, _[8][0] = et * _t * (E - F) * Z, _[8][1] = et * Xt * (jt - kt) * Z, _[8][2] = et * (jt * E - kt * F) * 2 * Z, G = $($(P(_), w), Ot(P(_))).toArray(), G = $(P(G), 1 / Pt).toArray(), J[0][0] = Dt / it, J[0][1] = E / it, J[0][2] = 1, J[0][3] = x / it, J[0][4] = F / it, J[0][6] = Xt / it, J[0][7] = C / it, J[1][0] = Dt / it, J[1][1] = E / it, J[1][3] = x / it, J[1][4] = F / it, J[1][5] = 1, J[1][6] = Xt / it, J[1][7] = C / it, J[2][0] = Dt / it, J[2][1] = E / it, J[2][3] = x / it, J[2][4] = F / it, J[2][6] = Xt / it, J[2][7] = C / it, J[2][8] = 1;
    const zt = 1 / (Ct * it);
    B[0][0] = zt * Jt * F * wt, B[0][1] = zt * Tt * C * vt, B[0][2] = zt * _t * E * St, B[1][0] = zt * jt * x * wt, B[1][1] = zt * kt * Xt * vt, B[1][2] = zt * Q * Dt * St, B[2][0] = zt * (Jt * kt + Dt * F) * wt, B[2][1] = zt * (Tt * Q + x * C) * vt, B[2][2] = zt * (_t * jt + Xt * E) * St;
    const H = so / 3;
    V[0][0] = H * yt / wt, V[0][1] = H * Mt / wt, V[0][2] = H * dt / wt, V[1][0] = H * ut / vt, V[1][1] = H * Yt / vt, V[1][2] = H * pt / vt, V[2][0] = H * Nt / St, V[2][1] = H * xt / St, V[2][2] = H * ct / St, I[0][0] = H * ct / wt, I[0][1] = H * Nt / wt, I[0][2] = H * xt / wt, I[1][0] = H * dt / vt, I[1][1] = H * yt / vt, I[1][2] = H * Mt / vt, I[2][0] = H * pt / St, I[2][1] = H * ut / St, I[2][2] = H * Yt / St, T[0][0] = H * Yt / wt, T[0][1] = H * pt / wt, T[0][2] = H * ut / wt, T[1][0] = H * xt / vt, T[1][1] = H * ct / vt, T[1][2] = H * Nt / vt, T[2][0] = H * Mt / St, T[2][1] = H * dt / St, T[2][2] = H * yt / St, rt = $(qt(P(V), P(I)), 0.5).toArray(), at = $(qt(P(I), P(T)), 0.5).toArray(), nt = $(qt(P(T), P(V)), 0.5).toArray();
    const Ft = $($(Ot(P(B)), w), P(B));
    return lt = qt(qt($($(Ot(P(rt)), Ft), P(rt)), $($(Ot(P(at)), Ft), P(at))), $($(Ot(P(nt)), Ft), P(nt))).toArray(), lt = $(P(lt), 3 / 4 * ft * Pt).toArray(), R = $($(Ot(P(J)), P(lt)), P(J)).toArray(), k = qt(P(G), P(R)).toArray(), k;
  }
}
function oo(t, o) {
  const c = t / (1 - o * o);
  return P([[c, c * o, 0], [c * o, c, 0], [0, 0, c * (1 - o) / 2]]);
}
function no(t, o, c, e) {
  const a = o * e / t, s = 1 - e * a, n = t / s, h = o / s, r = e * o / s;
  return P([[n, r, 0], [r, h, 0], [0, 0, c]]);
}
function _o(t, o, c, e) {
  const a = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() }, s = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() };
  o.forEach((h, r) => {
    var _a, _b, _c, _d;
    const u = h.map((M) => t[M]), y = h.reduce((M, f) => {
      var _a2;
      const A = (_a2 = e.deformations) == null ? void 0 : _a2.get(f);
      return M.concat(A ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (h.length === 2) {
      const M = Ht(u, ((_a = c == null ? void 0 : c.localAngles) == null ? void 0 : _a.get(r)) ?? 0), f = $(M, y), A = go(u, c, r);
      let i = $(A, f);
      const l = (_b = c == null ? void 0 : c.frameLoads) == null ? void 0 : _b.get(r);
      if (l && (l[0] || l[1] || l[2])) {
        const j = u[0], b = u[1], d = [b[0] - j[0], b[1] - j[1], b[2] - j[2]], m = Math.hypot(d[0], d[1], d[2]);
        if (m > 1e-9) {
          const p = [d[0] / m, d[1] / m, d[2] / m], g = m * m / 12, X = [p[1] * l[2] - p[2] * l[1], p[2] * l[0] - p[0] * l[2], p[0] * l[1] - p[1] * l[0]], K = [-l[0] * m / 2, -l[1] * m / 2, -l[2] * m / 2, -g * X[0], -g * X[1], -g * X[2], -l[0] * m / 2, -l[1] * m / 2, -l[2] * m / 2, +g * X[0], +g * X[1], +g * X[2]], L = $(M, K);
          i = i.map((v, z) => v + L[z]);
        }
      }
      a.normals.set(r, [i[0], i[6]]), a.shearsY.set(r, [i[1], i[7]]), a.shearsZ.set(r, [i[2], i[8]]), a.torsions.set(r, [i[3], i[9]]), a.bendingsY.set(r, [i[4], i[10]]), a.bendingsZ.set(r, [i[5], i[11]]);
    } else if (h.length === 4) {
      const M = Ao(u, y, c, r);
      s.membraneXX.set(r, M.Nx), s.membraneYY.set(r, M.Ny), s.membraneXY.set(r, M.Nxy), s.bendingXX.set(r, M.Mx), s.bendingYY.set(r, M.My), s.bendingXY.set(r, M.Mxy), s.tranverseShearX.set(r, M.Qx), s.tranverseShearY.set(r, M.Qy), s.vonMises.set(r, M.vonMises);
    } else if (h.length === 3) {
      const M = Ht(u, ((_c = c == null ? void 0 : c.localAngles) == null ? void 0 : _c.get(r)) ?? 0);
      $(M, y);
      const f = Yo(c, r), A = xo(u), i = Xo(y), l = wo(u), b = $(1 / (2 * l), $($(f, A), i)).toArray(), d = ((_d = c.thicknesses) == null ? void 0 : _d.get(r)) ?? 1, m = b[0][0] * d, p = b[1][0] * d, g = b[2][0] * d, X = b[0][1] * (d ** 3 / 12), K = b[1][1] * (d ** 3 / 12), L = b[2][1] * (d ** 3 / 12);
      s.membraneXX.set(r, m), s.membraneYY.set(r, p), s.membraneXY.set(r, g), s.bendingXX.set(r, X), s.bendingYY.set(r, K), s.bendingXY.set(r, L);
    }
  });
  const { nodeToCentroidElementIndiciesMap: n } = vo(t, o);
  {
    const h = (y) => {
      var _a;
      return (((_a = c == null ? void 0 : c.plateFormulations) == null ? void 0 : _a.get(y)) ?? 0) === 1;
    }, r = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
    if (o.forEach((y, M) => {
      if (y.length !== 4) return;
      const f = y.map((A) => t[A]);
      r.set(M, [0, 1, 2].map((A) => f.reduce((i, l) => i + l[A], 0) / 4)), u.set(M, y);
    }), [...u.keys()].some(h)) {
      const y = /* @__PURE__ */ new Map();
      for (const [M, f] of u) for (const A of f) {
        const i = y.get(A) ?? [];
        i.push(M), y.set(A, i);
      }
      for (const [M, f] of u) {
        if (!h(M)) continue;
        const A = /* @__PURE__ */ new Map();
        for (const p of f) for (const g of y.get(p) ?? []) g !== M && A.set(g, (A.get(g) ?? 0) + 1);
        const i = [...A].filter(([, p]) => p >= 2).map(([p]) => p);
        if (i.length < 2) continue;
        const l = r.get(M), j = (p) => {
          let g = 0, X = 0, K = 0, L = 0, v = 0;
          const z = p.get(M) ?? 0;
          for (const gt of i) {
            const ht = r.get(gt), S = ht[0] - l[0], q = ht[1] - l[1], U = (p.get(gt) ?? 0) - z;
            g += S * S, X += S * q, K += q * q, L += S * U, v += q * U;
          }
          const st = g * K - X * X;
          return Math.abs(st) < 1e-12 ? [0, 0] : [(L * K - v * X) / st, (g * v - X * L) / st];
        }, b = j(s.bendingXX), d = j(s.bendingYY), m = j(s.bendingXY);
        s.tranverseShearX.set(M, b[0] + m[1]), s.tranverseShearY.set(M, d[1] + m[0]);
      }
    }
  }
  return o.forEach((h, r) => {
    if (h.length !== 3 && h.length !== 4) return;
    const u = h.length, y = new Array(u).fill(0), M = new Array(u).fill(0), f = new Array(u).fill(0), A = new Array(u).fill(0), i = new Array(u).fill(0), l = new Array(u).fill(0), j = new Array(u).fill(0), b = new Array(u).fill(0), d = new Array(u).fill(0);
    h.forEach((m, p) => {
      const g = n.get(m) || [], X = (K) => ro(g.map((L) => K.get(L) ?? 0));
      y[p] = X(s.membraneXX), M[p] = X(s.membraneYY), f[p] = X(s.membraneXY), A[p] = X(s.bendingXX), i[p] = X(s.bendingYY), l[p] = X(s.bendingXY), j[p] = X(s.tranverseShearX), b[p] = X(s.tranverseShearY), d[p] = X(s.vonMises);
    }), a.membraneXX.set(r, y), a.membraneYY.set(r, M), a.membraneXY.set(r, f), a.bendingXX.set(r, A), a.bendingYY.set(r, i), a.bendingXY.set(r, l), a.tranverseShearX.set(r, j), a.tranverseShearY.set(r, b), a.vonMises.set(r, d);
  }), a;
}
function Ao(t, o, c, e) {
  var _a, _b, _c;
  const a = ((_a = c.elasticities) == null ? void 0 : _a.get(e)) ?? 0, s = ((_b = c.poissonsRatios) == null ? void 0 : _b.get(e)) ?? 0, n = ((_c = c.thicknesses) == null ? void 0 : _c.get(e)) ?? 1, h = t[0], r = t[1], u = t[2], y = t[3], M = [r[0] - h[0], r[1] - h[1], r[2] - h[2]], f = [u[0] - y[0], u[1] - y[1], u[2] - y[2]];
  let A = [M[0] + f[0], M[1] + f[1], M[2] + f[2]], i = Math.sqrt(A[0] * A[0] + A[1] * A[1] + A[2] * A[2]);
  i < 1e-14 && (i = 1);
  let l = [A[0] / i, A[1] / i, A[2] / i];
  const j = [u[0] - h[0], u[1] - h[1], u[2] - h[2]], b = [y[0] - r[0], y[1] - r[1], y[2] - r[2]];
  let d = [j[1] * b[2] - j[2] * b[1], j[2] * b[0] - j[0] * b[2], j[0] * b[1] - j[1] * b[0]], m = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  m < 1e-14 && (m = 1);
  let p = [d[0] / m, d[1] / m, d[2] / m], g = [p[1] * l[2] - p[2] * l[1], p[2] * l[0] - p[0] * l[2], p[0] * l[1] - p[1] * l[0]], X = Math.sqrt(g[0] * g[0] + g[1] * g[1] + g[2] * g[2]);
  X < 1e-14 && (X = 1), g = [g[0] / X, g[1] / X, g[2] / X];
  {
    if (Math.abs(p[2]) > 1 - 1e-6) l = [1, 0, 0];
    else {
      const E = [-p[1], p[0], 0], F = Math.hypot(E[0], E[1], E[2]) || 1;
      l = [E[0] / F, E[1] / F, E[2] / F];
    }
    g = [p[1] * l[2] - p[2] * l[1], p[2] * l[0] - p[0] * l[2], p[0] * l[1] - p[1] * l[0]];
    const C = Math.hypot(g[0], g[1], g[2]) || 1;
    g = [g[0] / C, g[1] / C, g[2] / C], l = [g[1] * p[2] - g[2] * p[1], g[2] * p[0] - g[0] * p[2], g[0] * p[1] - g[1] * p[0]];
  }
  const K = 0.25 * (h[0] + r[0] + u[0] + y[0]), L = 0.25 * (h[1] + r[1] + u[1] + y[1]), v = 0.25 * (h[2] + r[2] + u[2] + y[2]), z = [], st = [];
  for (let x = 0; x < 4; x++) {
    const C = t[x][0] - K, E = t[x][1] - L, F = t[x][2] - v;
    z.push(C * l[0] + E * l[1] + F * l[2]), st.push(C * g[0] + E * g[1] + F * g[2]);
  }
  const gt = [l, g, p], ht = new Array(24).fill(0);
  for (let x = 0; x < 4; x++) {
    const C = x * 6, E = x * 6;
    for (let F = 0; F < 3; F++) ht[E + F] = gt[F][0] * o[C] + gt[F][1] * o[C + 1] + gt[F][2] * o[C + 2];
    for (let F = 0; F < 3; F++) ht[E + 3 + F] = gt[F][0] * o[C + 3] + gt[F][1] * o[C + 4] + gt[F][2] * o[C + 5];
  }
  const S = a / (1 - s * s), q = [[S * n, S * s * n, 0], [S * s * n, S * n, 0], [0, 0, S * (1 - s) / 2 * n]], U = n * n * n / 12, tt = [[S * U, S * s * U, 0], [S * s * U, S * U, 0], [0, 0, S * (1 - s) / 2 * U]], N = [-0.25, 0.25, 0.25, -0.25], w = [-0.25, -0.25, 0.25, 0.25];
  let O = 0, k = 0, R = 0, G = 0;
  for (let x = 0; x < 4; x++) O += N[x] * z[x], k += N[x] * st[x], R += w[x] * z[x], G += w[x] * st[x];
  const _ = O * G - k * R;
  if (Math.abs(_) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  const J = G / _, B = -k / _, V = -R / _, I = O / _, T = [], rt = [];
  for (let x = 0; x < 4; x++) T.push(J * N[x] + B * w[x]), rt.push(V * N[x] + I * w[x]);
  let at = 0, nt = 0, lt = 0;
  for (let x = 0; x < 4; x++) {
    const C = ht[x * 6 + 0], E = ht[x * 6 + 1];
    at += T[x] * C, nt += rt[x] * E, lt += rt[x] * C + T[x] * E;
  }
  const mt = q[0][0] * at + q[0][1] * nt, Z = q[1][0] * at + q[1][1] * nt, ft = q[2][2] * lt;
  let yt = 0, Mt = 0, dt = 0;
  for (let x = 0; x < 4; x++) {
    const C = ht[x * 6 + 3], E = ht[x * 6 + 4];
    yt += T[x] * E, Mt += -rt[x] * C, dt += rt[x] * E - T[x] * C;
  }
  const ut = tt[0][0] * yt + tt[0][1] * Mt, Yt = tt[1][0] * yt + tt[1][1] * Mt, pt = tt[2][2] * dt, Nt = 5 / 6, xt = a / (2 * (1 + s)), ct = Nt * xt * n;
  let Lt = 0, Y = 0;
  const ot = [0.25, 0.25, 0.25, 0.25];
  for (let x = 0; x < 4; x++) {
    const C = ht[x * 6 + 2], E = ht[x * 6 + 3], F = ht[x * 6 + 4];
    Lt += T[x] * C + ot[x] * E, Y += rt[x] * C + ot[x] * F;
  }
  const At = ct * Lt, bt = ct * Y, D = mt / n + 6 * ut / (n * n), Q = Z / n + 6 * Yt / (n * n), jt = ft / n + 6 * pt / (n * n), kt = Math.sqrt(D * D - D * Q + Q * Q + 3 * jt * jt), _t = mt / n - 6 * ut / (n * n), Jt = Z / n - 6 * Yt / (n * n), Tt = ft / n - 6 * pt / (n * n), Xt = Math.sqrt(_t * _t - _t * Jt + Jt * Jt + 3 * Tt * Tt), Dt = Math.max(kt, Xt);
  return { Nx: mt, Ny: Z, Nxy: ft, Mx: ut, My: Yt, Mxy: pt, Qx: At, Qy: bt, vonMises: Dt };
}
function Yo(t, o) {
  var _a, _b, _c, _d, _e;
  const c = ((_a = t.elasticities) == null ? void 0 : _a.get(o)) ?? 0, e = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(o)) ?? 0, a = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(o)) ?? 0, s = ((_d = t.shearModuli) == null ? void 0 : _d.get(o)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(o), e > 0 ? no(c, e, s, a) : oo(c, a);
}
function xo(t) {
  const [o, c] = t[0], [e, a] = t[1], [s, n] = t[2], h = a - n, r = n - c, u = c - a, y = s - e, M = o - s, f = e - o;
  return P([[h, r, u, 0, 0, 0], [0, 0, 0, y, M, f], [y, M, f, h, r, u]]);
}
function Xo(t) {
  const [o, c, e] = [t[0], t[6], t[12]], [a, s, n] = [t[1], t[7], t[13]], [h, r, u] = [t[4], t[10], t[16]], [y, M, f] = [t[3], t[9], t[15]];
  return P([[o, -h], [c, -r], [e, -u], [a, y], [s, M], [n, f]]);
}
function wo(t) {
  const [o, c] = t[0], [e, a] = t[1], [s, n] = t[2], h = e - o, r = s - o, u = n - c, y = c - a;
  return 0.5 * (h * u - r * -y);
}
function vo(t, o) {
  const c = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
  return o.forEach((a, s) => {
    const n = a.map((r) => t[r]), h = So(n);
    a.forEach((r) => {
      var _a, _b;
      c.has(r) || c.set(r, []), (_a = c.get(r)) == null ? void 0 : _a.push(h), e.has(r) || e.set(r, []), (_b = e.get(r)) == null ? void 0 : _b.push(s);
    });
  }), { nodeToCentroidNodesMap: c, nodeToCentroidElementIndiciesMap: e };
}
function So(t) {
  const o = t.reduce((a, s) => a + s[0], 0) / t.length, c = t.reduce((a, s) => a + s[1], 0) / t.length, e = t.reduce((a, s) => a + s[2], 0) / t.length;
  return [o, c, e];
}
export {
  _o as a,
  Ht as b,
  go as g
};
