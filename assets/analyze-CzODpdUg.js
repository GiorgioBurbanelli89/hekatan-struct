import { s as It, n as Rt, b as Zt, k as Et, i as Ft, z as $, c as Wt, m as P, t as Ot, a as qt, e as G, f as ro } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const Kt = 1 / Math.sqrt(3);
function Gt(t, o) {
  const r = [0.25 * (1 - t) * (1 - o), 0.25 * (1 + t) * (1 - o), 0.25 * (1 + t) * (1 + o), 0.25 * (1 - t) * (1 + o)], e = [-0.25 * (1 - o), 0.25 * (1 - o), 0.25 * (1 + o), -0.25 * (1 + o)], a = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: r, dNdxi: e, dNdeta: a };
}
function Vt(t, o, r, e) {
  let a = 0, s = 0, n = 0, g = 0;
  for (let f = 0; f < 4; f++) a += t[f] * r[f], s += t[f] * e[f], n += o[f] * r[f], g += o[f] * e[f];
  const c = a * g - s * n, u = 1 / c, y = [], M = [];
  for (let f = 0; f < 4; f++) y.push(u * (g * t[f] - s * o[f])), M.push(u * (-n * t[f] + a * o[f]));
  return { dNdx: y, dNdy: M, detJ: c };
}
function co(t, o, r, e, a, s) {
  const n = r * a / (1 - e * e), g = [[n, n * e, 0], [n * e, n, 0], [0, 0, n * (1 - e) / 2]], c = [1, 2, 3, 0], u = [3, 0, 1, 2], y = [], M = [];
  for (let S = 0; S < 4; S++) y.push((o[c[S]] - o[S]) / 8), M.push(-(t[c[S]] - t[S]) / 8);
  const f = [-Math.sqrt(3 / 5), 0, Math.sqrt(3 / 5)], d = [5 / 9, 8 / 9, 5 / 9], i = Qt(14, 14);
  let l = [], j = [], b = [], p = [], m = [], x = 0, h = 0, w = 0;
  for (let S = 0; S < 3; S++) for (let E = 0; E < 3; E++) {
    const nt = f[S], I = f[E], N = d[S] * d[E], { N: X, dNdxi: L, dNdeta: J } = Gt(nt, I);
    let K = 0, W = 0, _ = 0, k = 0;
    for (let A = 0; A < 4; A++) K += L[A] * t[A], W += L[A] * o[A], _ += J[A] * t[A], k += J[A] * o[A];
    const C = K * k - W * _, V = k / C, U = -W / C, T = -_ / C, st = K / C, et = [], ot = [];
    for (let A = 0; A < 4; A++) et.push(V * L[A] + U * J[A]), ot.push(T * L[A] + st * J[A]);
    const lt = [-nt * (1 - I), 0.5 * (1 - I * I), -nt * (1 + I), -0.5 * (1 - I * I)], bt = [-0.5 * (1 - nt * nt), -I * (1 + nt), 0.5 * (1 - nt * nt), -I * (1 - nt)], Z = [], ft = [];
    for (let A = 0; A < 4; A++) Z.push(V * lt[A] + U * bt[A]), ft.push(T * lt[A] + st * bt[A]);
    const gt = -2 * nt * (1 - I * I), ht = -2 * I * (1 - nt * nt), Yt = V * gt + U * ht, yt = T * gt + st * ht, xt = [], pt = [], St = [], Xt = [];
    for (let A = 0; A < 4; A++) {
      const tt = u[A];
      xt.push(Z[tt] * y[tt] - Z[A] * y[A]), pt.push(ft[tt] * y[tt] - ft[A] * y[A]), St.push(Z[tt] * M[tt] - Z[A] * M[A]), Xt.push(ft[tt] * M[tt] - ft[A] * M[A]);
    }
    const rt = Qt(3, 14);
    for (let A = 0; A < 4; A++) rt[0][3 * A] = et[A], rt[1][3 * A + 1] = ot[A], rt[2][3 * A] = ot[A], rt[2][3 * A + 1] = et[A], rt[0][3 * A + 2] = xt[A], rt[1][3 * A + 2] = Xt[A], rt[2][3 * A + 2] = pt[A] + St[A];
    rt[0][12] = Yt, rt[2][12] = yt, rt[1][13] = yt, rt[2][13] = Yt;
    const Lt = N * Math.abs(C);
    for (let A = 0; A < 14; A++) for (let tt = 0; tt < 14; tt++) {
      let At = 0;
      for (let Mt = 0; Mt < 3; Mt++) for (let D = 0; D < 3; D++) At += rt[Mt][A] * g[Mt][D] * rt[D][tt];
      i[A][tt] += Lt * At;
    }
    S === 1 && E === 1 && (l = X.slice(), j = et.slice(), b = ot.slice(), p = pt.slice(), m = St.slice(), x = Yt, h = yt, w = Math.abs(C));
  }
  const B = r / (2 * (1 + e)), O = new Array(14).fill(0);
  for (let S = 0; S < 4; S++) O[3 * S] = -0.5 * b[S], O[3 * S + 1] = 0.5 * j[S], O[3 * S + 2] = 0.5 * (m[S] - p[S]) - l[S];
  O[12] = -0.5 * h, O[13] = 0.5 * x;
  const v = s * B * a * 4 * w;
  for (let S = 0; S < 14; S++) for (let E = 0; E < 14; E++) i[S][E] += v * O[S] * O[E];
  const z = [[i[12][12], i[12][13]], [i[13][12], i[13][13]]], it = z[0][0] * z[1][1] - z[0][1] * z[1][0], ut = Qt(12, 12);
  for (let S = 0; S < 12; S++) for (let E = 0; E < 12; E++) ut[S][E] = i[S][E];
  if (Math.abs(it) < 1e-30) return ut;
  const mt = [[z[1][1] / it, -z[0][1] / it], [-z[1][0] / it, z[0][0] / it]];
  for (let S = 0; S < 12; S++) for (let E = 0; E < 12; E++) {
    let nt = 0;
    for (let I = 0; I < 2; I++) for (let N = 0; N < 2; N++) nt += i[S][12 + I] * mt[I][N] * i[12 + N][E];
    ut[S][E] -= nt;
  }
  return ut;
}
function eo(t, o, r, e, a) {
  const s = Qt(12, 12), n = r * a * a * a / (12 * (1 - e * e)), c = 5 / 6 * r / (2 * (1 + e)) * a, u = [[-Kt, -Kt], [Kt, -Kt], [Kt, Kt], [-Kt, Kt]], y = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], M = [];
  for (const f of y) {
    const { N: d, dNdxi: i, dNdeta: l } = Gt(f.xi, f.eta), { dNdx: j, dNdy: b } = Vt(i, l, t, o), p = Qt(2, 12);
    for (let m = 0; m < 4; m++) p[0][m * 3] = j[m], p[0][m * 3 + 1] = -d[m], p[1][m * 3] = b[m], p[1][m * 3 + 2] = -d[m];
    M.push(p);
  }
  for (const [f, d] of u) {
    const { dNdxi: i, dNdeta: l } = Gt(f, d), { dNdx: j, dNdy: b, detJ: p } = Vt(i, l, t, o), m = Qt(3, 12);
    for (let v = 0; v < 4; v++) m[0][v * 3 + 1] = j[v], m[1][v * 3 + 2] = b[v], m[2][v * 3 + 1] = b[v], m[2][v * 3 + 2] = j[v];
    for (let v = 0; v < 12; v++) for (let z = 0; z < 12; z++) {
      let it = 0;
      it += n * (m[0][v] * m[0][z] + e * m[0][v] * m[1][z] + e * m[1][v] * m[0][z] + m[1][v] * m[1][z]), it += n * (1 - e) / 2 * m[2][v] * m[2][z], s[v][z] += it * Math.abs(p);
    }
    const x = Qt(2, 12), h = 0.5 * (1 - d), w = 0.5 * (1 + d), B = 0.5 * (1 - f), O = 0.5 * (1 + f);
    for (let v = 0; v < 12; v++) x[0][v] = h * M[0][0][v] + w * M[1][0][v], x[1][v] = B * M[2][1][v] + O * M[3][1][v];
    for (let v = 0; v < 12; v++) for (let z = 0; z < 12; z++) s[v][z] += c * (x[0][v] * x[0][z] + x[1][v] * x[1][z]) * Math.abs(p);
  }
  return s;
}
function ao(t, o, r) {
  var _a, _b, _c;
  const e = ((_a = o == null ? void 0 : o.elasticities) == null ? void 0 : _a.get(r)) ?? 0, a = ((_b = o == null ? void 0 : o.poissonsRatios) == null ? void 0 : _b.get(r)) ?? 0.2, s = ((_c = o == null ? void 0 : o.thicknesses) == null ? void 0 : _c.get(r)) ?? 0;
  if (e === 0 || s === 0) return Qt(24, 24);
  const { localCoords: n } = to(t), g = n.map((b) => b[0]), c = n.map((b) => b[1]), u = eo(g, c, e, a, s), M = co(g, c, e, a, s, 0.4), f = Qt(24, 24), d = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22], i = [[1, 0, 0], [0, 0, -1], [0, 1, 0]], l = Qt(12, 12);
  for (let b = 0; b < 12; b++) for (let p = 0; p < 12; p++) {
    let m = 0;
    const x = b / 3 | 0, h = b % 3, w = p / 3 | 0, B = p % 3;
    for (let O = 0; O < 3; O++) {
      const v = i[O][h];
      if (v !== 0) for (let z = 0; z < 3; z++) {
        const it = i[z][B];
        it !== 0 && (m += v * u[x * 3 + O][w * 3 + z] * it);
      }
    }
    l[b][p] = m;
  }
  for (let b = 0; b < 12; b++) for (let p = 0; p < 12; p++) f[d[b]][d[p]] += l[b][p];
  const j = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let b = 0; b < 12; b++) for (let p = 0; p < 12; p++) f[j[b]][j[p]] += M[b][p];
  return f;
}
function io(t) {
  const { localX: o, localY: r, localZ: e } = to(t), a = [[o[0], o[1], o[2]], [r[0], r[1], r[2]], [e[0], e[1], e[2]]], s = Qt(24, 24);
  for (let n = 0; n < 4; n++) for (let g = 0; g < 2; g++) {
    const c = n * 6 + g * 3;
    for (let u = 0; u < 3; u++) for (let y = 0; y < 3; y++) s[c + u][c + y] = a[u][y];
  }
  return s;
}
function to(t) {
  const o = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], r = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], e = $t(o, r), a = Math.sqrt(e[0] ** 2 + e[1] ** 2 + e[2] ** 2), s = e.map((i) => i / a), n = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], g = Math.sqrt(n[0] ** 2 + n[1] ** 2 + n[2] ** 2), c = n.map((i) => i / g), u = $t(s, c), y = t.map((i) => i[0]).reduce((i, l) => i + l) / 4, M = t.map((i) => i[1]).reduce((i, l) => i + l) / 4, f = t.map((i) => i[2]).reduce((i, l) => i + l) / 4, d = t.map((i) => {
    const l = i[0] - y, j = i[1] - M, b = i[2] - f;
    return [l * c[0] + j * c[1] + b * c[2], l * u[0] + j * u[1] + b * u[2]];
  });
  return { localX: c, localY: u, localZ: s, localCoords: d };
}
function $t(t, o) {
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
  const r = (y) => {
    if (Math.abs(o) < 1e-12) return y;
    const M = o * Math.PI / 180, f = Math.cos(M), d = Math.sin(M);
    return [y[0], [f * y[1][0] + d * y[2][0], f * y[1][1] + d * y[2][1], f * y[1][2] + d * y[2][2]], [-d * y[1][0] + f * y[2][0], -d * y[1][1] + f * y[2][1], -d * y[1][2] + f * y[2][2]]];
  }, e = It(t[1], t[0]), a = Rt(e), s = Zt(e, [1, 0, 0]) / a, n = Zt(e, [0, 1, 0]) / a, g = Zt(e, [0, 0, 1]) / a, c = Math.sqrt(s ** 2 + n ** 2);
  if (c < 1e-9) {
    const y = g > 0 ? 1 : -1, M = [[0, 0, y], [1, 0, 0], [0, y, 0]];
    return Et(Ft(4), r(M)).toArray();
  }
  const u = [[s, n, g], [-s * g / c, -n * g / c, c], [n / c, -s / c, 0]];
  return Et(Ft(4), r(u)).toArray();
}
function fo(t) {
  const s = [t[0], t[1], t[2]], n = $(3, 3).toArray();
  for (let h = 0; h < 3; h++) for (let w = 0; w < 3; w++) n[h][w] = s[w][h];
  const g = [-1, 1, 0], c = [-1, 0, 1], u = $(3, 2).toArray();
  for (let h = 0; h < 3; h++) for (let w = 0; w < 3; w++) u[h][0] += n[h][w] * g[w], u[h][1] += n[h][w] * c[w];
  const y = u.map((h) => h[0]), M = u.map((h) => h[1]);
  let f = Wt(y, M), d = Rt(f);
  if (d === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), $(18, 18).toArray();
  f = f.map((h) => h / d);
  const i = [...f], l = Ft(3).toArray(), j = f[0];
  let b;
  if (Math.abs(j) > 1 - 1e-10) {
    const h = f[2];
    b = l.map((w, B) => w[2] - h * f[B]);
  } else b = l.map((h, w) => h[0] - j * f[w]);
  if (d = Rt(b), d === 0) return console.warn("Degenerate local X-axis detected."), $(18, 18).toArray();
  b = b.map((h) => h / d);
  let p = Wt(i, b);
  if (d = Rt(p), d === 0) return console.warn("Degenerate local Y-axis detected."), $(18, 18).toArray();
  p = p.map((h) => h / d);
  const m = [b, p, i], x = $(18, 18).toArray();
  for (let h = 0; h < 3; h++) {
    const w = h * 6, B = w + 3;
    for (let O = 0; O < 3; O++) for (let v = 0; v < 3; v++) x[w + O][w + v] = m[O][v], x[B + O][B + v] = m[O][v];
  }
  return x;
}
function go(t, o, r) {
  var _a, _b, _c;
  if (t.length === 2) {
    let e = mo(t, o, r);
    const a = (_a = o == null ? void 0 : o.partialFixitySprings) == null ? void 0 : _a.get(r);
    a && (e = ho(e, a));
    const s = (_b = o == null ? void 0 : o.momentReleases) == null ? void 0 : _b.get(r);
    s && (e = yo(e, s));
    const n = (_c = o == null ? void 0 : o.endOffsets) == null ? void 0 : _c.get(r);
    if (n && n[2] > 0 && (n[0] > 0 || n[1] > 0)) {
      const g = bo(n[2] * n[0], n[2] * n[1]);
      e = uo(g, e, g);
    }
    return e;
  }
  if (t.length === 3) return po(t, o, r);
  if (t.length === 4) return ao(t, o, r);
}
function ho(t, o) {
  const r = t.map((a) => [...a]), e = Math.min(o.length, 12);
  for (let a = 0; a < e; a++) o[a] > 1e-12 && (r[a][a] += o[a]);
  return r;
}
function yo(t, o) {
  const r = [];
  if (o.length >= 12) for (let i = 0; i < 12; i++) o[i] && r.push(i);
  else {
    const i = [3, 4, 5, 9, 10, 11];
    for (let l = 0; l < Math.min(o.length, 6); l++) o[l] && r.push(i[l]);
  }
  if (r.length === 0) return t;
  const e = t.length, a = [];
  for (let i = 0; i < e; i++) r.includes(i) || a.push(i);
  const s = a.length, n = r.length, g = Array.from({ length: n }, (i, l) => Array.from({ length: n }, (j, b) => t[r[l]][r[b]])), c = Array.from({ length: s }, (i, l) => Array.from({ length: n }, (j, b) => t[a[l]][r[b]])), u = Array.from({ length: n }, (i, l) => Array.from({ length: s }, (j, b) => t[r[l]][a[b]])), y = Mo(g);
  if (!y) return t;
  const M = Ut(c, y), f = Ut(M, u), d = Array.from({ length: e }, () => Array(e).fill(0));
  for (let i = 0; i < s; i++) for (let l = 0; l < s; l++) d[a[i]][a[l]] = t[a[i]][a[l]] - f[i][l];
  return d;
}
function Ut(t, o) {
  const r = t.length, e = o[0].length, a = o.length, s = Array.from({ length: r }, () => Array(e).fill(0));
  for (let n = 0; n < r; n++) for (let g = 0; g < e; g++) for (let c = 0; c < a; c++) s[n][g] += t[n][c] * o[c][g];
  return s;
}
function Mo(t) {
  const o = t.length, r = t.map((e, a) => {
    const s = [...e];
    for (let n = 0; n < o; n++) s.push(a === n ? 1 : 0);
    return s;
  });
  for (let e = 0; e < o; e++) {
    let a = e;
    for (let n = e + 1; n < o; n++) Math.abs(r[n][e]) > Math.abs(r[a][e]) && (a = n);
    if ([r[e], r[a]] = [r[a], r[e]], Math.abs(r[e][e]) < 1e-15) return null;
    const s = r[e][e];
    for (let n = 0; n < 2 * o; n++) r[e][n] /= s;
    for (let n = 0; n < o; n++) {
      if (n === e) continue;
      const g = r[n][e];
      for (let c = 0; c < 2 * o; c++) r[n][c] -= g * r[e][c];
    }
  }
  return r.map((e) => e.slice(o));
}
function bo(t, o) {
  const r = Array.from({ length: 12 }, (e, a) => Array.from({ length: 12 }, (s, n) => a === n ? 1 : 0));
  return Math.abs(t) > 1e-12 && (r[1][5] = t, r[2][4] = -t), Math.abs(o) > 1e-12 && (r[7][11] = -o, r[8][10] = o), r;
}
function uo(t, o, r) {
  const e = Array.from({ length: 12 }, () => Array(12).fill(0));
  for (let s = 0; s < 12; s++) for (let n = 0; n < 12; n++) {
    let g = 0;
    for (let c = 0; c < 12; c++) g += t[c][s] * o[c][n];
    e[s][n] = g;
  }
  const a = Array.from({ length: 12 }, () => Array(12).fill(0));
  for (let s = 0; s < 12; s++) for (let n = 0; n < 12; n++) {
    let g = 0;
    for (let c = 0; c < 12; c++) g += e[s][c] * r[c][n];
    a[s][n] = g;
  }
  return a;
}
function mo(t, o, r) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const e = ((_a = o == null ? void 0 : o.momentsOfInertiaZ) == null ? void 0 : _a.get(r)) ?? 0, a = ((_b = o == null ? void 0 : o.momentsOfInertiaY) == null ? void 0 : _b.get(r)) ?? 0, s = ((_c = o == null ? void 0 : o.elasticities) == null ? void 0 : _c.get(r)) ?? 0, n = ((_d = o == null ? void 0 : o.areas) == null ? void 0 : _d.get(r)) ?? 0, g = ((_e = o == null ? void 0 : o.shearModuli) == null ? void 0 : _e.get(r)) ?? 0, c = ((_f = o == null ? void 0 : o.torsionalConstants) == null ? void 0 : _f.get(r)) ?? 0, u = Rt(It(t[0], t[1])), y = (_g = o == null ? void 0 : o.endOffsets) == null ? void 0 : _g.get(r), M = y && y[2] > 0 ? u - y[2] * (y[0] + y[1]) : u;
  if (M <= 1e-9) throw new Error(`end offsets se comen la barra ${r}`);
  let f = ((_h = o == null ? void 0 : o.shearAreasY) == null ? void 0 : _h.get(r)) ?? 0, d = ((_i = o == null ? void 0 : o.shearAreasZ) == null ? void 0 : _i.get(r)) ?? 0;
  f === 0 && d === 0 && n > 0 && g > 0 && (f = d = 5 / 6 * n);
  const i = d > 0 && g > 0 ? 12 * s * e / (g * d * M ** 2) : 0, l = f > 0 && g > 0 ? 12 * s * a / (g * f * M ** 2) : 0, j = s * n / u, b = g * c / u, p = 12 * s * e / M ** 3 / (1 + i), m = 6 * s * e / M ** 2 / (1 + i), x = 4 * s * e / M * (1 + i / 4) / (1 + i), h = 2 * s * e / M * (1 - i / 2) / (1 + i), w = 12 * s * a / M ** 3 / (1 + l), B = 6 * s * a / M ** 2 / (1 + l), O = 4 * s * a / M * (1 + l / 4) / (1 + l), v = 2 * s * a / M * (1 - l / 2) / (1 + l);
  return [[j, 0, 0, 0, 0, 0, -j, 0, 0, 0, 0, 0], [0, p, 0, 0, 0, m, 0, -p, 0, 0, 0, m], [0, 0, w, 0, -B, 0, 0, 0, -w, 0, -B, 0], [0, 0, 0, b, 0, 0, 0, 0, 0, -b, 0, 0], [0, 0, -B, 0, O, 0, 0, 0, B, 0, v, 0], [0, m, 0, 0, 0, x, 0, -m, 0, 0, 0, h], [-j, 0, 0, 0, 0, 0, j, 0, 0, 0, 0, 0], [0, -p, 0, 0, 0, -m, 0, p, 0, 0, 0, -m], [0, 0, -w, 0, B, 0, 0, 0, w, 0, B, 0], [0, 0, 0, -b, 0, 0, 0, 0, 0, b, 0, 0], [0, 0, -B, 0, v, 0, 0, 0, B, 0, O, 0], [0, m, 0, 0, 0, h, 0, -m, 0, 0, 0, x]];
}
function po(t, o, r) {
  var _a, _b, _c, _d, _e;
  const e = ((_a = o.elasticities) == null ? void 0 : _a.get(r)) ?? 0, a = ((_b = o.elasticitiesOrthogonal) == null ? void 0 : _b.get(r)) ?? 0, s = ((_c = o.poissonsRatios) == null ? void 0 : _c.get(r)) ?? 0, n = ((_d = o.shearModuli) == null ? void 0 : _d.get(r)) ?? 0, g = ((_e = o.thicknesses) == null ? void 0 : _e.get(r)) ?? 0, c = a > 0, u = c ? ut(e, a, n, s, g) : z(e, s, g), y = c ? mt(n, g) : it(e, s, g), M = c ? no(e, a, n, s) : oo(e, s), f = t.map(([N, X]) => [N, X]), d = f[1][0] - f[0][0], i = f[2][0] - f[0][0], l = f[0][1] - f[1][1], j = f[2][1] - f[0][1], b = 0.5 * (d * j - i * -l), p = S(f), m = nt(f), x = I(f, M, g), h = P(P(Ot(p), y), p), w = P(P(Ot(m), u), m), B = $(18, 18).toArray(), O = P(qt(h, w), b), v = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let N = 0; N < 3; N++) for (let X = 0; X < 3; X++) for (let L = 0; L < 3; L++) {
    const J = v[N][X], K = v[L][X];
    B[J][K] = x[N * 3 + X][L * 3 + X];
  }
  for (let N = 0; N < 18; N++) for (let X = 0; X < 18; X++) B[N][X] = (B[N][X] ?? 0) + O.get([N, X]);
  return B;
  function z(N, X, L) {
    const J = N / (1 - X * X), K = G([[J, J * X, 0], [J * X, J, 0], [0, 0, J * (1 - X) / 2]]);
    return P(L ** 3 / 12, K);
  }
  function it(N, X, L) {
    const J = 0.8333333333333334, K = N / (2 * (1 + X)), W = J * K * L;
    return G([[W, 0], [0, W]]);
  }
  function ut(N, X, L, J, K) {
    const W = X * J / N, _ = 1 - J * W, k = N / _, C = X / _, V = J * X / _, T = G([[k, V, 0], [V, C, 0], [0, 0, L]]);
    return P(K ** 3 / 12, T);
  }
  function mt(N, X) {
    const J = 0.8333333333333334 * N * X;
    return G([[J, 0], [0, J]]);
  }
  function S(N) {
    const X = $(2, 18).toArray(), [L, J] = N[0], [K, W] = N[1], [_, k] = N[2], C = 0.5 * ((K - L) * (k - J) - (_ - L) * -(J - W)), V = (L + K + _) / 3, U = (J + W + k) / 3, T = [V, L, K], st = [U, J, W], et = [V, K, _], ot = [U, W, k], lt = [V, _, L], bt = [U, k, J], Z = 1 / 3, [ft, gt, ht, Yt] = E(T, st), [yt, xt, pt, St] = E(et, ot), [Xt, rt, Lt, A] = E(lt, bt), tt = $(2, 18).toArray(), At = $(2, 18).toArray(), Mt = $(2, 18).toArray();
    for (let D = 0; D < 2; D++) for (let Q = 0; Q < 6; Q++) tt[D][Q] = Z * ft[D][Q] + gt[D][Q], tt[D][Q + 6] = Z * ft[D][Q] + ht[D][Q], tt[D][Q + 12] = Z * ft[D][Q], At[D][Q] = Z * yt[D][Q], At[D][Q + 6] = Z * yt[D][Q] + xt[D][Q], At[D][Q + 12] = Z * yt[D][Q] + pt[D][Q], Mt[D][Q] = Z * Xt[D][Q] + Lt[D][Q], Mt[D][Q + 6] = Z * Xt[D][Q], Mt[D][Q + 12] = Z * Xt[D][Q] + rt[D][Q];
    for (let D = 0; D < 2; D++) for (let Q = 0; Q < 18; Q++) tt[D][Q] *= Yt, At[D][Q] *= St, Mt[D][Q] *= A, X[D][Q] = (tt[D][Q] + At[D][Q] + Mt[D][Q]) / C;
    return X;
  }
  function E(N, X) {
    const L = $(2, 6).toArray(), J = $(2, 6).toArray(), K = $(2, 6).toArray(), W = N[1] - N[0], _ = N[0] - N[2], k = X[2] - X[0], C = X[0] - X[1], V = N[2] - N[1], U = X[1] - X[2], T = 0.5 * (W * k - _ * C), st = 0.5 * C * _, et = 0.5 * k * W, ot = 0.5 * W * _, lt = 0.5 * C * k;
    return L[0][2] = 0.5 * V / T, L[0][3] = -0.5, L[1][2] = 0.5 * U / T, L[1][4] = 0.5, J[0][2] = 0.5 * _ / T, J[0][3] = 0.5 * st / T, J[0][4] = 0.5 * ot / T, J[1][2] = 0.5 * k / T, J[1][3] = 0.5 * lt / T, J[1][4] = 0.5 * et / T, K[0][2] = 0.5 * W / T, K[0][3] = -0.5 * et / T, K[0][4] = -0.5 * ot / T, K[1][2] = 0.5 * C / T, K[1][3] = -0.5 * lt / T, K[1][4] = -0.5 * st / T, [L, J, K, T];
  }
  function nt(N) {
    const X = $(3, 18).toArray(), [L, J] = N[0], [K, W] = N[1], [_, k] = N[2], C = K - L, V = _ - L, U = _ - K, T = W - k, st = k - J, et = J - W, ot = 0.5 * (C * st - V * -et), lt = T / (2 * ot), bt = U / (2 * ot), Z = st / (2 * ot), ft = -V / (2 * ot), gt = et / (2 * ot), ht = C / (2 * ot);
    return X[0][4] = lt, X[0][10] = Z, X[0][16] = gt, X[1][3] = -bt, X[1][9] = -ft, X[1][15] = -ht, X[2][3] = -lt, X[2][4] = bt, X[2][9] = -Z, X[2][10] = ft, X[2][15] = -gt, X[2][16] = ht, X;
  }
  function I(N, X, L) {
    let J = $(9, 9).toArray(), K = $(9, 9).toArray(), W = $(9, 9).toArray(), _ = $(9, 3).toArray(), k = $(3, 9).toArray(), C = $(3, 3).toArray(), V = $(3, 3).toArray(), U = $(3, 3).toArray(), T = $(3, 3).toArray(), st = $(3, 3).toArray(), et = $(3, 3).toArray(), ot = $(3, 3).toArray(), lt = $(3, 3).toArray();
    const bt = 1 / 8, Z = bt / 6, ft = bt ** 2 / 4, gt = 1, ht = 2, Yt = 1, yt = 0, xt = 1, pt = -1, St = -1, Xt = -1, rt = -2, Lt = N[0][0], A = N[0][1], tt = N[1][0], At = N[1][1], Mt = N[2][0], D = N[2][1], Q = Lt - tt, Jt = tt - Mt, kt = Mt - Lt, _t = A - At, Tt = At - D, jt = D - A, dt = -Q, Dt = -Jt, Y = -kt, q = -_t, F = -Tt, R = -jt, Bt = 0.5 * (dt * jt - kt * -_t), so = 2 * Bt, at = 4 * Bt, ct = 0.5 * L, Pt = Bt * L, wt = dt ** 2 + q ** 2, vt = Dt ** 2 + F ** 2, Nt = Y ** 2 + R ** 2;
    _[0][0] = ct * Tt, _[0][2] = ct * Dt, _[1][1] = ct * Dt, _[1][2] = ct * Tt, _[2][0] = ct * Tt * (R - q) * Z, _[2][1] = ct * Dt * (kt - Q) * Z, _[2][2] = ct * (kt * R - Q * q) * 2 * Z, _[3][0] = ct * jt, _[3][2] = ct * Y, _[4][1] = ct * Y, _[4][2] = ct * jt, _[5][0] = ct * jt * (q - F) * Z, _[5][1] = ct * Y * (Q - Jt) * Z, _[5][2] = ct * (Q * q - Jt * F) * 2 * Z, _[6][0] = ct * _t, _[6][2] = ct * dt, _[7][1] = ct * dt, _[7][2] = ct * _t, _[8][0] = ct * _t * (F - R) * Z, _[8][1] = ct * dt * (Jt - kt) * Z, _[8][2] = ct * (Jt * F - kt * R) * 2 * Z, W = P(P(G(_), X), Ot(G(_))).toArray(), W = P(G(W), 1 / Pt).toArray(), k[0][0] = Dt / at, k[0][1] = F / at, k[0][2] = 1, k[0][3] = Y / at, k[0][4] = R / at, k[0][6] = dt / at, k[0][7] = q / at, k[1][0] = Dt / at, k[1][1] = F / at, k[1][3] = Y / at, k[1][4] = R / at, k[1][5] = 1, k[1][6] = dt / at, k[1][7] = q / at, k[2][0] = Dt / at, k[2][1] = F / at, k[2][3] = Y / at, k[2][4] = R / at, k[2][6] = dt / at, k[2][7] = q / at, k[2][8] = 1;
    const zt = 1 / (Bt * at);
    C[0][0] = zt * Tt * R * wt, C[0][1] = zt * jt * q * vt, C[0][2] = zt * _t * F * Nt, C[1][0] = zt * Jt * Y * wt, C[1][1] = zt * kt * dt * vt, C[1][2] = zt * Q * Dt * Nt, C[2][0] = zt * (Tt * kt + Dt * R) * wt, C[2][1] = zt * (jt * Q + Y * q) * vt, C[2][2] = zt * (_t * Jt + dt * F) * Nt;
    const H = so / 3;
    V[0][0] = H * gt / wt, V[0][1] = H * ht / wt, V[0][2] = H * Yt / wt, V[1][0] = H * yt / vt, V[1][1] = H * xt / vt, V[1][2] = H * pt / vt, V[2][0] = H * St / Nt, V[2][1] = H * Xt / Nt, V[2][2] = H * rt / Nt, U[0][0] = H * rt / wt, U[0][1] = H * St / wt, U[0][2] = H * Xt / wt, U[1][0] = H * Yt / vt, U[1][1] = H * gt / vt, U[1][2] = H * ht / vt, U[2][0] = H * pt / Nt, U[2][1] = H * yt / Nt, U[2][2] = H * xt / Nt, T[0][0] = H * xt / wt, T[0][1] = H * pt / wt, T[0][2] = H * yt / wt, T[1][0] = H * Xt / vt, T[1][1] = H * rt / vt, T[1][2] = H * St / vt, T[2][0] = H * ht / Nt, T[2][1] = H * Yt / Nt, T[2][2] = H * gt / Nt, st = P(qt(G(V), G(U)), 0.5).toArray(), et = P(qt(G(U), G(T)), 0.5).toArray(), ot = P(qt(G(T), G(V)), 0.5).toArray();
    const Ct = P(P(Ot(G(C)), X), G(C));
    return lt = qt(qt(P(P(Ot(G(st)), Ct), G(st)), P(P(Ot(G(et)), Ct), G(et))), P(P(Ot(G(ot)), Ct), G(ot))).toArray(), lt = P(G(lt), 3 / 4 * ft * Pt).toArray(), K = P(P(Ot(G(k)), G(lt)), G(k)).toArray(), J = qt(G(W), G(K)).toArray(), J;
  }
}
function oo(t, o) {
  const r = t / (1 - o * o);
  return G([[r, r * o, 0], [r * o, r, 0], [0, 0, r * (1 - o) / 2]]);
}
function no(t, o, r, e) {
  const a = o * e / t, s = 1 - e * a, n = t / s, g = o / s, c = e * o / s;
  return G([[n, c, 0], [c, g, 0], [0, 0, r]]);
}
function _o(t, o, r, e) {
  const a = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() }, s = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() };
  o.forEach((g, c) => {
    var _a, _b, _c, _d;
    const u = g.map((M) => t[M]), y = g.reduce((M, f) => {
      var _a2;
      const d = (_a2 = e.deformations) == null ? void 0 : _a2.get(f);
      return M.concat(d ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (g.length === 2) {
      const M = Ht(u, ((_a = r == null ? void 0 : r.localAngles) == null ? void 0 : _a.get(c)) ?? 0), f = P(M, y), d = go(u, r, c);
      let i = P(d, f);
      const l = (_b = r == null ? void 0 : r.frameLoads) == null ? void 0 : _b.get(c);
      if (l && (l[0] || l[1] || l[2])) {
        const j = u[0], b = u[1], p = [b[0] - j[0], b[1] - j[1], b[2] - j[2]], m = Math.hypot(p[0], p[1], p[2]);
        if (m > 1e-9) {
          const x = [p[0] / m, p[1] / m, p[2] / m], h = m * m / 12, w = [x[1] * l[2] - x[2] * l[1], x[2] * l[0] - x[0] * l[2], x[0] * l[1] - x[1] * l[0]], B = [-l[0] * m / 2, -l[1] * m / 2, -l[2] * m / 2, -h * w[0], -h * w[1], -h * w[2], -l[0] * m / 2, -l[1] * m / 2, -l[2] * m / 2, +h * w[0], +h * w[1], +h * w[2]], O = P(M, B);
          i = i.map((v, z) => v + O[z]);
        }
      }
      a.normals.set(c, [i[0], i[6]]), a.shearsY.set(c, [i[1], i[7]]), a.shearsZ.set(c, [i[2], i[8]]), a.torsions.set(c, [i[3], i[9]]), a.bendingsY.set(c, [i[4], i[10]]), a.bendingsZ.set(c, [i[5], i[11]]);
    } else if (g.length === 4) {
      const M = Ao(u, y, r, c);
      s.membraneXX.set(c, M.Nx), s.membraneYY.set(c, M.Ny), s.membraneXY.set(c, M.Nxy), s.bendingXX.set(c, M.Mx), s.bendingYY.set(c, M.My), s.bendingXY.set(c, M.Mxy), s.tranverseShearX.set(c, M.Qx), s.tranverseShearY.set(c, M.Qy), s.vonMises.set(c, M.vonMises);
    } else if (g.length === 3) {
      const M = Ht(u, ((_c = r == null ? void 0 : r.localAngles) == null ? void 0 : _c.get(c)) ?? 0);
      P(M, y);
      const f = Yo(r, c), d = xo(u), i = Xo(y), l = wo(u), b = P(1 / (2 * l), P(P(f, d), i)).toArray(), p = ((_d = r.thicknesses) == null ? void 0 : _d.get(c)) ?? 1, m = b[0][0] * p, x = b[1][0] * p, h = b[2][0] * p, w = b[0][1] * (p ** 3 / 12), B = b[1][1] * (p ** 3 / 12), O = b[2][1] * (p ** 3 / 12);
      s.membraneXX.set(c, m), s.membraneYY.set(c, x), s.membraneXY.set(c, h), s.bendingXX.set(c, w), s.bendingYY.set(c, B), s.bendingXY.set(c, O);
    }
  });
  const { nodeToCentroidElementIndiciesMap: n } = vo(t, o);
  return o.forEach((g, c) => {
    if (g.length !== 3 && g.length !== 4) return;
    const u = g.length, y = new Array(u).fill(0), M = new Array(u).fill(0), f = new Array(u).fill(0), d = new Array(u).fill(0), i = new Array(u).fill(0), l = new Array(u).fill(0), j = new Array(u).fill(0), b = new Array(u).fill(0), p = new Array(u).fill(0);
    g.forEach((m, x) => {
      const h = n.get(m) || [], w = (B) => ro(h.map((O) => B.get(O) ?? 0));
      y[x] = w(s.membraneXX), M[x] = w(s.membraneYY), f[x] = w(s.membraneXY), d[x] = w(s.bendingXX), i[x] = w(s.bendingYY), l[x] = w(s.bendingXY), j[x] = w(s.tranverseShearX), b[x] = w(s.tranverseShearY), p[x] = w(s.vonMises);
    }), a.membraneXX.set(c, y), a.membraneYY.set(c, M), a.membraneXY.set(c, f), a.bendingXX.set(c, d), a.bendingYY.set(c, i), a.bendingXY.set(c, l), a.tranverseShearX.set(c, j), a.tranverseShearY.set(c, b), a.vonMises.set(c, p);
  }), a;
}
function Ao(t, o, r, e) {
  var _a, _b, _c;
  const a = ((_a = r.elasticities) == null ? void 0 : _a.get(e)) ?? 0, s = ((_b = r.poissonsRatios) == null ? void 0 : _b.get(e)) ?? 0, n = ((_c = r.thicknesses) == null ? void 0 : _c.get(e)) ?? 1, g = t[0], c = t[1], u = t[2], y = t[3], M = [c[0] - g[0], c[1] - g[1], c[2] - g[2]], f = [u[0] - y[0], u[1] - y[1], u[2] - y[2]];
  let d = [M[0] + f[0], M[1] + f[1], M[2] + f[2]], i = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  i < 1e-14 && (i = 1);
  let l = [d[0] / i, d[1] / i, d[2] / i];
  const j = [u[0] - g[0], u[1] - g[1], u[2] - g[2]], b = [y[0] - c[0], y[1] - c[1], y[2] - c[2]];
  let p = [j[1] * b[2] - j[2] * b[1], j[2] * b[0] - j[0] * b[2], j[0] * b[1] - j[1] * b[0]], m = Math.sqrt(p[0] * p[0] + p[1] * p[1] + p[2] * p[2]);
  m < 1e-14 && (m = 1);
  let x = [p[0] / m, p[1] / m, p[2] / m], h = [x[1] * l[2] - x[2] * l[1], x[2] * l[0] - x[0] * l[2], x[0] * l[1] - x[1] * l[0]], w = Math.sqrt(h[0] * h[0] + h[1] * h[1] + h[2] * h[2]);
  w < 1e-14 && (w = 1), h = [h[0] / w, h[1] / w, h[2] / w];
  {
    if (Math.abs(x[2]) > 1 - 1e-6) l = [1, 0, 0];
    else {
      const F = [-x[1], x[0], 0], R = Math.hypot(F[0], F[1], F[2]) || 1;
      l = [F[0] / R, F[1] / R, F[2] / R];
    }
    h = [x[1] * l[2] - x[2] * l[1], x[2] * l[0] - x[0] * l[2], x[0] * l[1] - x[1] * l[0]];
    const q = Math.hypot(h[0], h[1], h[2]) || 1;
    h = [h[0] / q, h[1] / q, h[2] / q], l = [h[1] * x[2] - h[2] * x[1], h[2] * x[0] - h[0] * x[2], h[0] * x[1] - h[1] * x[0]];
  }
  const B = 0.25 * (g[0] + c[0] + u[0] + y[0]), O = 0.25 * (g[1] + c[1] + u[1] + y[1]), v = 0.25 * (g[2] + c[2] + u[2] + y[2]), z = [], it = [];
  for (let Y = 0; Y < 4; Y++) {
    const q = t[Y][0] - B, F = t[Y][1] - O, R = t[Y][2] - v;
    z.push(q * l[0] + F * l[1] + R * l[2]), it.push(q * h[0] + F * h[1] + R * h[2]);
  }
  const ut = [l, h, x], mt = new Array(24).fill(0);
  for (let Y = 0; Y < 4; Y++) {
    const q = Y * 6, F = Y * 6;
    for (let R = 0; R < 3; R++) mt[F + R] = ut[R][0] * o[q] + ut[R][1] * o[q + 1] + ut[R][2] * o[q + 2];
    for (let R = 0; R < 3; R++) mt[F + 3 + R] = ut[R][0] * o[q + 3] + ut[R][1] * o[q + 4] + ut[R][2] * o[q + 5];
  }
  const S = a / (1 - s * s), E = [[S * n, S * s * n, 0], [S * s * n, S * n, 0], [0, 0, S * (1 - s) / 2 * n]], nt = n * n * n / 12, I = [[S * nt, S * s * nt, 0], [S * s * nt, S * nt, 0], [0, 0, S * (1 - s) / 2 * nt]], N = [-0.25, 0.25, 0.25, -0.25], X = [-0.25, -0.25, 0.25, 0.25];
  let L = 0, J = 0, K = 0, W = 0;
  for (let Y = 0; Y < 4; Y++) L += N[Y] * z[Y], J += N[Y] * it[Y], K += X[Y] * z[Y], W += X[Y] * it[Y];
  const _ = L * W - J * K;
  if (Math.abs(_) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  const k = W / _, C = -J / _, V = -K / _, U = L / _, T = [], st = [];
  for (let Y = 0; Y < 4; Y++) T.push(k * N[Y] + C * X[Y]), st.push(V * N[Y] + U * X[Y]);
  let et = 0, ot = 0, lt = 0;
  for (let Y = 0; Y < 4; Y++) {
    const q = mt[Y * 6 + 0], F = mt[Y * 6 + 1];
    et += T[Y] * q, ot += st[Y] * F, lt += st[Y] * q + T[Y] * F;
  }
  const bt = E[0][0] * et + E[0][1] * ot, Z = E[1][0] * et + E[1][1] * ot, ft = E[2][2] * lt;
  let gt = 0, ht = 0, Yt = 0;
  for (let Y = 0; Y < 4; Y++) {
    const q = mt[Y * 6 + 3], F = mt[Y * 6 + 4];
    gt += T[Y] * F, ht += -st[Y] * q, Yt += st[Y] * F - T[Y] * q;
  }
  const yt = I[0][0] * gt + I[0][1] * ht, xt = I[1][0] * gt + I[1][1] * ht, pt = I[2][2] * Yt, St = 5 / 6, Xt = a / (2 * (1 + s)), rt = St * Xt * n;
  let Lt = 0, A = 0;
  const tt = [0.25, 0.25, 0.25, 0.25];
  for (let Y = 0; Y < 4; Y++) {
    const q = mt[Y * 6 + 2], F = mt[Y * 6 + 3], R = mt[Y * 6 + 4];
    Lt += T[Y] * q + tt[Y] * F, A += st[Y] * q + tt[Y] * R;
  }
  const At = rt * Lt, Mt = rt * A, D = bt / n + 6 * yt / (n * n), Q = Z / n + 6 * xt / (n * n), Jt = ft / n + 6 * pt / (n * n), kt = Math.sqrt(D * D - D * Q + Q * Q + 3 * Jt * Jt), _t = bt / n - 6 * yt / (n * n), Tt = Z / n - 6 * xt / (n * n), jt = ft / n - 6 * pt / (n * n), dt = Math.sqrt(_t * _t - _t * Tt + Tt * Tt + 3 * jt * jt), Dt = Math.max(kt, dt);
  return { Nx: bt, Ny: Z, Nxy: ft, Mx: yt, My: xt, Mxy: pt, Qx: At, Qy: Mt, vonMises: Dt };
}
function Yo(t, o) {
  var _a, _b, _c, _d, _e;
  const r = ((_a = t.elasticities) == null ? void 0 : _a.get(o)) ?? 0, e = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(o)) ?? 0, a = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(o)) ?? 0, s = ((_d = t.shearModuli) == null ? void 0 : _d.get(o)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(o), e > 0 ? no(r, e, s, a) : oo(r, a);
}
function xo(t) {
  const [o, r] = t[0], [e, a] = t[1], [s, n] = t[2], g = a - n, c = n - r, u = r - a, y = s - e, M = o - s, f = e - o;
  return G([[g, c, u, 0, 0, 0], [0, 0, 0, y, M, f], [y, M, f, g, c, u]]);
}
function Xo(t) {
  const [o, r, e] = [t[0], t[6], t[12]], [a, s, n] = [t[1], t[7], t[13]], [g, c, u] = [t[4], t[10], t[16]], [y, M, f] = [t[3], t[9], t[15]];
  return G([[o, -g], [r, -c], [e, -u], [a, y], [s, M], [n, f]]);
}
function wo(t) {
  const [o, r] = t[0], [e, a] = t[1], [s, n] = t[2], g = e - o, c = s - o, u = n - r, y = r - a;
  return 0.5 * (g * u - c * -y);
}
function vo(t, o) {
  const r = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
  return o.forEach((a, s) => {
    const n = a.map((c) => t[c]), g = No(n);
    a.forEach((c) => {
      var _a, _b;
      r.has(c) || r.set(c, []), (_a = r.get(c)) == null ? void 0 : _a.push(g), e.has(c) || e.set(c, []), (_b = e.get(c)) == null ? void 0 : _b.push(s);
    });
  }), { nodeToCentroidNodesMap: r, nodeToCentroidElementIndiciesMap: e };
}
function No(t) {
  const o = t.reduce((a, s) => a + s[0], 0) / t.length, r = t.reduce((a, s) => a + s[1], 0) / t.length, e = t.reduce((a, s) => a + s[2], 0) / t.length;
  return [o, r, e];
}
export {
  _o as a,
  Ht as b,
  go as g
};
