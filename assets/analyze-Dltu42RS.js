import { s as It, n as Ct, b as Rt, k as Et, i as Ft, z as V, c as Wt, m as G, t as Kt, a as Bt, e as F, f as ro } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const qt = 1 / Math.sqrt(3);
function Gt(t, o) {
  const r = [0.25 * (1 - t) * (1 - o), 0.25 * (1 + t) * (1 - o), 0.25 * (1 + t) * (1 + o), 0.25 * (1 - t) * (1 + o)], c = [-0.25 * (1 - o), 0.25 * (1 - o), 0.25 * (1 + o), -0.25 * (1 + o)], a = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: r, dNdxi: c, dNdeta: a };
}
function Vt(t, o, r, c) {
  let a = 0, n = 0, e = 0, y = 0;
  for (let l = 0; l < 4; l++) a += t[l] * r[l], n += t[l] * c[l], e += o[l] * r[l], y += o[l] * c[l];
  const s = a * y - n * e, h = 1 / s, b = [], m = [];
  for (let l = 0; l < 4; l++) b.push(h * (y * t[l] - n * o[l])), m.push(h * (-e * t[l] + a * o[l]));
  return { dNdx: b, dNdy: m, detJ: s };
}
function co(t, o, r, c, a, n) {
  const e = r * a / (1 - c * c), y = [[e, e * c, 0], [e * c, e, 0], [0, 0, e * (1 - c) / 2]], s = [1, 2, 3, 0], h = [3, 0, 1, 2], b = [], m = [];
  for (let S = 0; S < 4; S++) b.push((o[s[S]] - o[S]) / 8), m.push(-(t[s[S]] - t[S]) / 8);
  const l = [-Math.sqrt(3 / 5), 0, Math.sqrt(3 / 5)], d = [5 / 9, 8 / 9, 5 / 9], i = Qt(14, 14);
  let f = [], j = [], M = [], A = [], x = [], Y = 0, g = 0, w = 0;
  for (let S = 0; S < 3; S++) for (let P = 0; P < 3; P++) {
    const nt = l[S], I = l[P], v = d[S] * d[P], { N: X, dNdxi: z, dNdeta: J } = Gt(nt, I);
    let K = 0, E = 0, _ = 0, T = 0;
    for (let u = 0; u < 4; u++) K += z[u] * t[u], E += z[u] * o[u], _ += J[u] * t[u], T += J[u] * o[u];
    const C = K * T - E * _, W = T / C, U = -E / C, k = -_ / C, st = K / C, et = [], ot = [];
    for (let u = 0; u < 4; u++) et.push(W * z[u] + U * J[u]), ot.push(k * z[u] + st * J[u]);
    const lt = [-nt * (1 - I), 0.5 * (1 - I * I), -nt * (1 + I), -0.5 * (1 - I * I)], bt = [-0.5 * (1 - nt * nt), -I * (1 + nt), 0.5 * (1 - nt * nt), -I * (1 - nt)], O = [], ft = [];
    for (let u = 0; u < 4; u++) O.push(W * lt[u] + U * bt[u]), ft.push(k * lt[u] + st * bt[u]);
    const gt = -2 * nt * (1 - I * I), ht = -2 * I * (1 - nt * nt), Yt = W * gt + U * ht, yt = k * gt + st * ht, xt = [], mt = [], St = [], Xt = [];
    for (let u = 0; u < 4; u++) {
      const tt = h[u];
      xt.push(O[tt] * b[tt] - O[u] * b[u]), mt.push(ft[tt] * b[tt] - ft[u] * b[u]), St.push(O[tt] * m[tt] - O[u] * m[u]), Xt.push(ft[tt] * m[tt] - ft[u] * m[u]);
    }
    const rt = Qt(3, 14);
    for (let u = 0; u < 4; u++) rt[0][3 * u] = et[u], rt[1][3 * u + 1] = ot[u], rt[2][3 * u] = ot[u], rt[2][3 * u + 1] = et[u], rt[0][3 * u + 2] = xt[u], rt[1][3 * u + 2] = Xt[u], rt[2][3 * u + 2] = mt[u] + St[u];
    rt[0][12] = Yt, rt[2][12] = yt, rt[1][13] = yt, rt[2][13] = Yt;
    const zt = v * Math.abs(C);
    for (let u = 0; u < 14; u++) for (let tt = 0; tt < 14; tt++) {
      let At = 0;
      for (let Mt = 0; Mt < 3; Mt++) for (let D = 0; D < 3; D++) At += rt[Mt][u] * y[Mt][D] * rt[D][tt];
      i[u][tt] += zt * At;
    }
    S === 1 && P === 1 && (f = X.slice(), j = et.slice(), M = ot.slice(), A = mt.slice(), x = St.slice(), Y = Yt, g = yt, w = Math.abs(C));
  }
  const H = r / (2 * (1 + c)), Z = new Array(14).fill(0);
  for (let S = 0; S < 4; S++) Z[3 * S] = -0.5 * M[S], Z[3 * S + 1] = 0.5 * j[S], Z[3 * S + 2] = 0.5 * (x[S] - A[S]) - f[S];
  Z[12] = -0.5 * g, Z[13] = 0.5 * Y;
  const N = n * H * a * 4 * w;
  for (let S = 0; S < 14; S++) for (let P = 0; P < 14; P++) i[S][P] += N * Z[S] * Z[P];
  const L = [[i[12][12], i[12][13]], [i[13][12], i[13][13]]], it = L[0][0] * L[1][1] - L[0][1] * L[1][0], ut = Qt(12, 12);
  for (let S = 0; S < 12; S++) for (let P = 0; P < 12; P++) ut[S][P] = i[S][P];
  if (Math.abs(it) < 1e-30) return ut;
  const pt = [[L[1][1] / it, -L[0][1] / it], [-L[1][0] / it, L[0][0] / it]];
  for (let S = 0; S < 12; S++) for (let P = 0; P < 12; P++) {
    let nt = 0;
    for (let I = 0; I < 2; I++) for (let v = 0; v < 2; v++) nt += i[S][12 + I] * pt[I][v] * i[12 + v][P];
    ut[S][P] -= nt;
  }
  return ut;
}
function eo(t, o, r, c, a) {
  const n = Qt(12, 12), e = r * a * a * a / (12 * (1 - c * c)), s = 5 / 6 * r / (2 * (1 + c)) * a, h = [[-qt, -qt], [qt, -qt], [qt, qt], [-qt, qt]], b = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], m = [];
  for (const l of b) {
    const { N: d, dNdxi: i, dNdeta: f } = Gt(l.xi, l.eta), { dNdx: j, dNdy: M } = Vt(i, f, t, o), A = Qt(2, 12);
    for (let x = 0; x < 4; x++) A[0][x * 3] = j[x], A[0][x * 3 + 1] = -d[x], A[1][x * 3] = M[x], A[1][x * 3 + 2] = -d[x];
    m.push(A);
  }
  for (const [l, d] of h) {
    const { dNdxi: i, dNdeta: f } = Gt(l, d), { dNdx: j, dNdy: M, detJ: A } = Vt(i, f, t, o), x = Qt(3, 12);
    for (let N = 0; N < 4; N++) x[0][N * 3 + 1] = j[N], x[1][N * 3 + 2] = M[N], x[2][N * 3 + 1] = M[N], x[2][N * 3 + 2] = j[N];
    for (let N = 0; N < 12; N++) for (let L = 0; L < 12; L++) {
      let it = 0;
      it += e * (x[0][N] * x[0][L] + c * x[0][N] * x[1][L] + c * x[1][N] * x[0][L] + x[1][N] * x[1][L]), it += e * (1 - c) / 2 * x[2][N] * x[2][L], n[N][L] += it * Math.abs(A);
    }
    const Y = Qt(2, 12), g = 0.5 * (1 - d), w = 0.5 * (1 + d), H = 0.5 * (1 - l), Z = 0.5 * (1 + l);
    for (let N = 0; N < 12; N++) Y[0][N] = g * m[0][0][N] + w * m[1][0][N], Y[1][N] = H * m[2][1][N] + Z * m[3][1][N];
    for (let N = 0; N < 12; N++) for (let L = 0; L < 12; L++) n[N][L] += s * (Y[0][N] * Y[0][L] + Y[1][N] * Y[1][L]) * Math.abs(A);
  }
  return n;
}
function ao(t, o, r) {
  var _a, _b, _c;
  const c = ((_a = o == null ? void 0 : o.elasticities) == null ? void 0 : _a.get(r)) ?? 0, a = ((_b = o == null ? void 0 : o.poissonsRatios) == null ? void 0 : _b.get(r)) ?? 0.2, n = ((_c = o == null ? void 0 : o.thicknesses) == null ? void 0 : _c.get(r)) ?? 0;
  if (c === 0 || n === 0) return Qt(24, 24);
  const { localCoords: e } = to(t), y = e.map((M) => M[0]), s = e.map((M) => M[1]), h = eo(y, s, c, a, n), m = co(y, s, c, a, n, 0.4), l = Qt(24, 24), d = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22], i = [[1, 0, 0], [0, 0, -1], [0, 1, 0]], f = Qt(12, 12);
  for (let M = 0; M < 12; M++) for (let A = 0; A < 12; A++) {
    let x = 0;
    const Y = M / 3 | 0, g = M % 3, w = A / 3 | 0, H = A % 3;
    for (let Z = 0; Z < 3; Z++) {
      const N = i[Z][g];
      if (N !== 0) for (let L = 0; L < 3; L++) {
        const it = i[L][H];
        it !== 0 && (x += N * h[Y * 3 + Z][w * 3 + L] * it);
      }
    }
    f[M][A] = x;
  }
  for (let M = 0; M < 12; M++) for (let A = 0; A < 12; A++) l[d[M]][d[A]] += f[M][A];
  const j = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let M = 0; M < 12; M++) for (let A = 0; A < 12; A++) l[j[M]][j[A]] += m[M][A];
  return l;
}
function io(t) {
  const { localX: o, localY: r, localZ: c } = to(t), a = [[o[0], o[1], o[2]], [r[0], r[1], r[2]], [c[0], c[1], c[2]]], n = Qt(24, 24);
  for (let e = 0; e < 4; e++) for (let y = 0; y < 2; y++) {
    const s = e * 6 + y * 3;
    for (let h = 0; h < 3; h++) for (let b = 0; b < 3; b++) n[s + h][s + b] = a[h][b];
  }
  return n;
}
function to(t) {
  const o = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], r = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], c = $t(o, r), a = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2), n = c.map((i) => i / a), e = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], y = Math.sqrt(e[0] ** 2 + e[1] ** 2 + e[2] ** 2), s = e.map((i) => i / y), h = $t(n, s), b = t.map((i) => i[0]).reduce((i, f) => i + f) / 4, m = t.map((i) => i[1]).reduce((i, f) => i + f) / 4, l = t.map((i) => i[2]).reduce((i, f) => i + f) / 4, d = t.map((i) => {
    const f = i[0] - b, j = i[1] - m, M = i[2] - l;
    return [f * s[0] + j * s[1] + M * s[2], f * h[0] + j * h[1] + M * h[2]];
  });
  return { localX: s, localY: h, localZ: n, localCoords: d };
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
  const r = (b) => {
    if (Math.abs(o) < 1e-12) return b;
    const m = o * Math.PI / 180, l = Math.cos(m), d = Math.sin(m);
    return [b[0], [l * b[1][0] + d * b[2][0], l * b[1][1] + d * b[2][1], l * b[1][2] + d * b[2][2]], [-d * b[1][0] + l * b[2][0], -d * b[1][1] + l * b[2][1], -d * b[1][2] + l * b[2][2]]];
  }, c = It(t[1], t[0]), a = Ct(c), n = Rt(c, [1, 0, 0]) / a, e = Rt(c, [0, 1, 0]) / a, y = Rt(c, [0, 0, 1]) / a, s = Math.sqrt(n ** 2 + e ** 2);
  if (s < 1e-9) {
    const b = y > 0 ? 1 : -1, m = [[0, 0, b], [1, 0, 0], [0, b, 0]];
    return Et(Ft(4), r(m)).toArray();
  }
  const h = [[n, e, y], [-n * y / s, -e * y / s, s], [e / s, -n / s, 0]];
  return Et(Ft(4), r(h)).toArray();
}
function fo(t) {
  const n = [t[0], t[1], t[2]], e = V(3, 3).toArray();
  for (let g = 0; g < 3; g++) for (let w = 0; w < 3; w++) e[g][w] = n[w][g];
  const y = [-1, 1, 0], s = [-1, 0, 1], h = V(3, 2).toArray();
  for (let g = 0; g < 3; g++) for (let w = 0; w < 3; w++) h[g][0] += e[g][w] * y[w], h[g][1] += e[g][w] * s[w];
  const b = h.map((g) => g[0]), m = h.map((g) => g[1]);
  let l = Wt(b, m), d = Ct(l);
  if (d === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), V(18, 18).toArray();
  l = l.map((g) => g / d);
  const i = [...l], f = Ft(3).toArray(), j = l[0];
  let M;
  if (Math.abs(j) > 1 - 1e-10) {
    const g = l[2];
    M = f.map((w, H) => w[2] - g * l[H]);
  } else M = f.map((g, w) => g[0] - j * l[w]);
  if (d = Ct(M), d === 0) return console.warn("Degenerate local X-axis detected."), V(18, 18).toArray();
  M = M.map((g) => g / d);
  let A = Wt(i, M);
  if (d = Ct(A), d === 0) return console.warn("Degenerate local Y-axis detected."), V(18, 18).toArray();
  A = A.map((g) => g / d);
  const x = [M, A, i], Y = V(18, 18).toArray();
  for (let g = 0; g < 3; g++) {
    const w = g * 6, H = w + 3;
    for (let Z = 0; Z < 3; Z++) for (let N = 0; N < 3; N++) Y[w + Z][w + N] = x[Z][N], Y[H + Z][H + N] = x[Z][N];
  }
  return Y;
}
function go(t, o, r) {
  var _a, _b;
  if (t.length === 2) {
    let c = bo(t, o, r);
    const a = (_a = o == null ? void 0 : o.partialFixitySprings) == null ? void 0 : _a.get(r);
    a && (c = ho(c, a));
    const n = (_b = o == null ? void 0 : o.momentReleases) == null ? void 0 : _b.get(r);
    return n && (c = yo(c, n)), c;
  }
  if (t.length === 3) return uo(t, o, r);
  if (t.length === 4) return ao(t, o, r);
}
function ho(t, o) {
  const r = t.map((a) => [...a]), c = Math.min(o.length, 12);
  for (let a = 0; a < c; a++) o[a] > 1e-12 && (r[a][a] += o[a]);
  return r;
}
function yo(t, o) {
  const r = [];
  if (o.length >= 12) for (let i = 0; i < 12; i++) o[i] && r.push(i);
  else {
    const i = [3, 4, 5, 9, 10, 11];
    for (let f = 0; f < Math.min(o.length, 6); f++) o[f] && r.push(i[f]);
  }
  if (r.length === 0) return t;
  const c = t.length, a = [];
  for (let i = 0; i < c; i++) r.includes(i) || a.push(i);
  const n = a.length, e = r.length, y = Array.from({ length: e }, (i, f) => Array.from({ length: e }, (j, M) => t[r[f]][r[M]])), s = Array.from({ length: n }, (i, f) => Array.from({ length: e }, (j, M) => t[a[f]][r[M]])), h = Array.from({ length: e }, (i, f) => Array.from({ length: n }, (j, M) => t[r[f]][a[M]])), b = Mo(y);
  if (!b) return t;
  const m = Ut(s, b), l = Ut(m, h), d = Array.from({ length: c }, () => Array(c).fill(0));
  for (let i = 0; i < n; i++) for (let f = 0; f < n; f++) d[a[i]][a[f]] = t[a[i]][a[f]] - l[i][f];
  return d;
}
function Ut(t, o) {
  const r = t.length, c = o[0].length, a = o.length, n = Array.from({ length: r }, () => Array(c).fill(0));
  for (let e = 0; e < r; e++) for (let y = 0; y < c; y++) for (let s = 0; s < a; s++) n[e][y] += t[e][s] * o[s][y];
  return n;
}
function Mo(t) {
  const o = t.length, r = t.map((c, a) => {
    const n = [...c];
    for (let e = 0; e < o; e++) n.push(a === e ? 1 : 0);
    return n;
  });
  for (let c = 0; c < o; c++) {
    let a = c;
    for (let e = c + 1; e < o; e++) Math.abs(r[e][c]) > Math.abs(r[a][c]) && (a = e);
    if ([r[c], r[a]] = [r[a], r[c]], Math.abs(r[c][c]) < 1e-15) return null;
    const n = r[c][c];
    for (let e = 0; e < 2 * o; e++) r[c][e] /= n;
    for (let e = 0; e < o; e++) {
      if (e === c) continue;
      const y = r[e][c];
      for (let s = 0; s < 2 * o; s++) r[e][s] -= y * r[c][s];
    }
  }
  return r.map((c) => c.slice(o));
}
function bo(t, o, r) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const c = ((_a = o == null ? void 0 : o.momentsOfInertiaZ) == null ? void 0 : _a.get(r)) ?? 0, a = ((_b = o == null ? void 0 : o.momentsOfInertiaY) == null ? void 0 : _b.get(r)) ?? 0, n = ((_c = o == null ? void 0 : o.elasticities) == null ? void 0 : _c.get(r)) ?? 0, e = ((_d = o == null ? void 0 : o.areas) == null ? void 0 : _d.get(r)) ?? 0, y = ((_e = o == null ? void 0 : o.shearModuli) == null ? void 0 : _e.get(r)) ?? 0, s = ((_f = o == null ? void 0 : o.torsionalConstants) == null ? void 0 : _f.get(r)) ?? 0, h = Ct(It(t[0], t[1]));
  let b = ((_g = o == null ? void 0 : o.shearAreasY) == null ? void 0 : _g.get(r)) ?? 0, m = ((_h = o == null ? void 0 : o.shearAreasZ) == null ? void 0 : _h.get(r)) ?? 0;
  b === 0 && m === 0 && e > 0 && y > 0 && (b = m = 5 / 6 * e);
  const l = m > 0 && y > 0 ? 12 * n * c / (y * m * h ** 2) : 0, d = b > 0 && y > 0 ? 12 * n * a / (y * b * h ** 2) : 0, i = n * e / h, f = y * s / h, j = 12 * n * c / h ** 3 / (1 + l), M = 6 * n * c / h ** 2 / (1 + l), A = 4 * n * c / h * (1 + l / 4) / (1 + l), x = 2 * n * c / h * (1 - l / 2) / (1 + l), Y = 12 * n * a / h ** 3 / (1 + d), g = 6 * n * a / h ** 2 / (1 + d), w = 4 * n * a / h * (1 + d / 4) / (1 + d), H = 2 * n * a / h * (1 - d / 2) / (1 + d);
  return [[i, 0, 0, 0, 0, 0, -i, 0, 0, 0, 0, 0], [0, j, 0, 0, 0, M, 0, -j, 0, 0, 0, M], [0, 0, Y, 0, -g, 0, 0, 0, -Y, 0, -g, 0], [0, 0, 0, f, 0, 0, 0, 0, 0, -f, 0, 0], [0, 0, -g, 0, w, 0, 0, 0, g, 0, H, 0], [0, M, 0, 0, 0, A, 0, -M, 0, 0, 0, x], [-i, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0], [0, -j, 0, 0, 0, -M, 0, j, 0, 0, 0, -M], [0, 0, -Y, 0, g, 0, 0, 0, Y, 0, g, 0], [0, 0, 0, -f, 0, 0, 0, 0, 0, f, 0, 0], [0, 0, -g, 0, H, 0, 0, 0, g, 0, w, 0], [0, M, 0, 0, 0, x, 0, -M, 0, 0, 0, A]];
}
function uo(t, o, r) {
  var _a, _b, _c, _d, _e;
  const c = ((_a = o.elasticities) == null ? void 0 : _a.get(r)) ?? 0, a = ((_b = o.elasticitiesOrthogonal) == null ? void 0 : _b.get(r)) ?? 0, n = ((_c = o.poissonsRatios) == null ? void 0 : _c.get(r)) ?? 0, e = ((_d = o.shearModuli) == null ? void 0 : _d.get(r)) ?? 0, y = ((_e = o.thicknesses) == null ? void 0 : _e.get(r)) ?? 0, s = a > 0, h = s ? ut(c, a, e, n, y) : L(c, n, y), b = s ? pt(e, y) : it(c, n, y), m = s ? no(c, a, e, n) : oo(c, n), l = t.map(([v, X]) => [v, X]), d = l[1][0] - l[0][0], i = l[2][0] - l[0][0], f = l[0][1] - l[1][1], j = l[2][1] - l[0][1], M = 0.5 * (d * j - i * -f), A = S(l), x = nt(l), Y = I(l, m, y), g = G(G(Kt(A), b), A), w = G(G(Kt(x), h), x), H = V(18, 18).toArray(), Z = G(Bt(g, w), M), N = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let v = 0; v < 3; v++) for (let X = 0; X < 3; X++) for (let z = 0; z < 3; z++) {
    const J = N[v][X], K = N[z][X];
    H[J][K] = Y[v * 3 + X][z * 3 + X];
  }
  for (let v = 0; v < 18; v++) for (let X = 0; X < 18; X++) H[v][X] = (H[v][X] ?? 0) + Z.get([v, X]);
  return H;
  function L(v, X, z) {
    const J = v / (1 - X * X), K = F([[J, J * X, 0], [J * X, J, 0], [0, 0, J * (1 - X) / 2]]);
    return G(z ** 3 / 12, K);
  }
  function it(v, X, z) {
    const J = 0.8333333333333334, K = v / (2 * (1 + X)), E = J * K * z;
    return F([[E, 0], [0, E]]);
  }
  function ut(v, X, z, J, K) {
    const E = X * J / v, _ = 1 - J * E, T = v / _, C = X / _, W = J * X / _, k = F([[T, W, 0], [W, C, 0], [0, 0, z]]);
    return G(K ** 3 / 12, k);
  }
  function pt(v, X) {
    const J = 0.8333333333333334 * v * X;
    return F([[J, 0], [0, J]]);
  }
  function S(v) {
    const X = V(2, 18).toArray(), [z, J] = v[0], [K, E] = v[1], [_, T] = v[2], C = 0.5 * ((K - z) * (T - J) - (_ - z) * -(J - E)), W = (z + K + _) / 3, U = (J + E + T) / 3, k = [W, z, K], st = [U, J, E], et = [W, K, _], ot = [U, E, T], lt = [W, _, z], bt = [U, T, J], O = 1 / 3, [ft, gt, ht, Yt] = P(k, st), [yt, xt, mt, St] = P(et, ot), [Xt, rt, zt, u] = P(lt, bt), tt = V(2, 18).toArray(), At = V(2, 18).toArray(), Mt = V(2, 18).toArray();
    for (let D = 0; D < 2; D++) for (let Q = 0; Q < 6; Q++) tt[D][Q] = O * ft[D][Q] + gt[D][Q], tt[D][Q + 6] = O * ft[D][Q] + ht[D][Q], tt[D][Q + 12] = O * ft[D][Q], At[D][Q] = O * yt[D][Q], At[D][Q + 6] = O * yt[D][Q] + xt[D][Q], At[D][Q + 12] = O * yt[D][Q] + mt[D][Q], Mt[D][Q] = O * Xt[D][Q] + zt[D][Q], Mt[D][Q + 6] = O * Xt[D][Q], Mt[D][Q + 12] = O * Xt[D][Q] + rt[D][Q];
    for (let D = 0; D < 2; D++) for (let Q = 0; Q < 18; Q++) tt[D][Q] *= Yt, At[D][Q] *= St, Mt[D][Q] *= u, X[D][Q] = (tt[D][Q] + At[D][Q] + Mt[D][Q]) / C;
    return X;
  }
  function P(v, X) {
    const z = V(2, 6).toArray(), J = V(2, 6).toArray(), K = V(2, 6).toArray(), E = v[1] - v[0], _ = v[0] - v[2], T = X[2] - X[0], C = X[0] - X[1], W = v[2] - v[1], U = X[1] - X[2], k = 0.5 * (E * T - _ * C), st = 0.5 * C * _, et = 0.5 * T * E, ot = 0.5 * E * _, lt = 0.5 * C * T;
    return z[0][2] = 0.5 * W / k, z[0][3] = -0.5, z[1][2] = 0.5 * U / k, z[1][4] = 0.5, J[0][2] = 0.5 * _ / k, J[0][3] = 0.5 * st / k, J[0][4] = 0.5 * ot / k, J[1][2] = 0.5 * T / k, J[1][3] = 0.5 * lt / k, J[1][4] = 0.5 * et / k, K[0][2] = 0.5 * E / k, K[0][3] = -0.5 * et / k, K[0][4] = -0.5 * ot / k, K[1][2] = 0.5 * C / k, K[1][3] = -0.5 * lt / k, K[1][4] = -0.5 * st / k, [z, J, K, k];
  }
  function nt(v) {
    const X = V(3, 18).toArray(), [z, J] = v[0], [K, E] = v[1], [_, T] = v[2], C = K - z, W = _ - z, U = _ - K, k = E - T, st = T - J, et = J - E, ot = 0.5 * (C * st - W * -et), lt = k / (2 * ot), bt = U / (2 * ot), O = st / (2 * ot), ft = -W / (2 * ot), gt = et / (2 * ot), ht = C / (2 * ot);
    return X[0][4] = lt, X[0][10] = O, X[0][16] = gt, X[1][3] = -bt, X[1][9] = -ft, X[1][15] = -ht, X[2][3] = -lt, X[2][4] = bt, X[2][9] = -O, X[2][10] = ft, X[2][15] = -gt, X[2][16] = ht, X;
  }
  function I(v, X, z) {
    let J = V(9, 9).toArray(), K = V(9, 9).toArray(), E = V(9, 9).toArray(), _ = V(9, 3).toArray(), T = V(3, 9).toArray(), C = V(3, 3).toArray(), W = V(3, 3).toArray(), U = V(3, 3).toArray(), k = V(3, 3).toArray(), st = V(3, 3).toArray(), et = V(3, 3).toArray(), ot = V(3, 3).toArray(), lt = V(3, 3).toArray();
    const bt = 1 / 8, O = bt / 6, ft = bt ** 2 / 4, gt = 1, ht = 2, Yt = 1, yt = 0, xt = 1, mt = -1, St = -1, Xt = -1, rt = -2, zt = v[0][0], u = v[0][1], tt = v[1][0], At = v[1][1], Mt = v[2][0], D = v[2][1], Q = zt - tt, Jt = tt - Mt, Tt = Mt - zt, _t = u - At, kt = At - D, jt = D - u, dt = -Q, Dt = -Jt, p = -Tt, q = -_t, R = -kt, B = -jt, Ot = 0.5 * (dt * jt - Tt * -_t), so = 2 * Ot, at = 4 * Ot, ct = 0.5 * z, Pt = Ot * z, wt = dt ** 2 + q ** 2, vt = Dt ** 2 + R ** 2, Nt = p ** 2 + B ** 2;
    _[0][0] = ct * kt, _[0][2] = ct * Dt, _[1][1] = ct * Dt, _[1][2] = ct * kt, _[2][0] = ct * kt * (B - q) * O, _[2][1] = ct * Dt * (Tt - Q) * O, _[2][2] = ct * (Tt * B - Q * q) * 2 * O, _[3][0] = ct * jt, _[3][2] = ct * p, _[4][1] = ct * p, _[4][2] = ct * jt, _[5][0] = ct * jt * (q - R) * O, _[5][1] = ct * p * (Q - Jt) * O, _[5][2] = ct * (Q * q - Jt * R) * 2 * O, _[6][0] = ct * _t, _[6][2] = ct * dt, _[7][1] = ct * dt, _[7][2] = ct * _t, _[8][0] = ct * _t * (R - B) * O, _[8][1] = ct * dt * (Jt - Tt) * O, _[8][2] = ct * (Jt * R - Tt * B) * 2 * O, E = G(G(F(_), X), Kt(F(_))).toArray(), E = G(F(E), 1 / Pt).toArray(), T[0][0] = Dt / at, T[0][1] = R / at, T[0][2] = 1, T[0][3] = p / at, T[0][4] = B / at, T[0][6] = dt / at, T[0][7] = q / at, T[1][0] = Dt / at, T[1][1] = R / at, T[1][3] = p / at, T[1][4] = B / at, T[1][5] = 1, T[1][6] = dt / at, T[1][7] = q / at, T[2][0] = Dt / at, T[2][1] = R / at, T[2][3] = p / at, T[2][4] = B / at, T[2][6] = dt / at, T[2][7] = q / at, T[2][8] = 1;
    const Lt = 1 / (Ot * at);
    C[0][0] = Lt * kt * B * wt, C[0][1] = Lt * jt * q * vt, C[0][2] = Lt * _t * R * Nt, C[1][0] = Lt * Jt * p * wt, C[1][1] = Lt * Tt * dt * vt, C[1][2] = Lt * Q * Dt * Nt, C[2][0] = Lt * (kt * Tt + Dt * B) * wt, C[2][1] = Lt * (jt * Q + p * q) * vt, C[2][2] = Lt * (_t * Jt + dt * R) * Nt;
    const $ = so / 3;
    W[0][0] = $ * gt / wt, W[0][1] = $ * ht / wt, W[0][2] = $ * Yt / wt, W[1][0] = $ * yt / vt, W[1][1] = $ * xt / vt, W[1][2] = $ * mt / vt, W[2][0] = $ * St / Nt, W[2][1] = $ * Xt / Nt, W[2][2] = $ * rt / Nt, U[0][0] = $ * rt / wt, U[0][1] = $ * St / wt, U[0][2] = $ * Xt / wt, U[1][0] = $ * Yt / vt, U[1][1] = $ * gt / vt, U[1][2] = $ * ht / vt, U[2][0] = $ * mt / Nt, U[2][1] = $ * yt / Nt, U[2][2] = $ * xt / Nt, k[0][0] = $ * xt / wt, k[0][1] = $ * mt / wt, k[0][2] = $ * yt / wt, k[1][0] = $ * Xt / vt, k[1][1] = $ * rt / vt, k[1][2] = $ * St / vt, k[2][0] = $ * ht / Nt, k[2][1] = $ * Yt / Nt, k[2][2] = $ * gt / Nt, st = G(Bt(F(W), F(U)), 0.5).toArray(), et = G(Bt(F(U), F(k)), 0.5).toArray(), ot = G(Bt(F(k), F(W)), 0.5).toArray();
    const Zt = G(G(Kt(F(C)), X), F(C));
    return lt = Bt(Bt(G(G(Kt(F(st)), Zt), F(st)), G(G(Kt(F(et)), Zt), F(et))), G(G(Kt(F(ot)), Zt), F(ot))).toArray(), lt = G(F(lt), 3 / 4 * ft * Pt).toArray(), K = G(G(Kt(F(T)), F(lt)), F(T)).toArray(), J = Bt(F(E), F(K)).toArray(), J;
  }
}
function oo(t, o) {
  const r = t / (1 - o * o);
  return F([[r, r * o, 0], [r * o, r, 0], [0, 0, r * (1 - o) / 2]]);
}
function no(t, o, r, c) {
  const a = o * c / t, n = 1 - c * a, e = t / n, y = o / n, s = c * o / n;
  return F([[e, s, 0], [s, y, 0], [0, 0, r]]);
}
function No(t, o, r, c) {
  const a = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() }, n = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() };
  o.forEach((y, s) => {
    var _a, _b, _c, _d;
    const h = y.map((m) => t[m]), b = y.reduce((m, l) => {
      var _a2;
      const d = (_a2 = c.deformations) == null ? void 0 : _a2.get(l);
      return m.concat(d ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (y.length === 2) {
      const m = Ht(h, ((_a = r == null ? void 0 : r.localAngles) == null ? void 0 : _a.get(s)) ?? 0), l = G(m, b), d = go(h, r, s);
      let i = G(d, l);
      const f = (_b = r == null ? void 0 : r.frameLoads) == null ? void 0 : _b.get(s);
      if (f && (f[0] || f[1] || f[2])) {
        const j = h[0], M = h[1], A = [M[0] - j[0], M[1] - j[1], M[2] - j[2]], x = Math.hypot(A[0], A[1], A[2]);
        if (x > 1e-9) {
          const Y = [A[0] / x, A[1] / x, A[2] / x], g = x * x / 12, w = [Y[1] * f[2] - Y[2] * f[1], Y[2] * f[0] - Y[0] * f[2], Y[0] * f[1] - Y[1] * f[0]], H = [-f[0] * x / 2, -f[1] * x / 2, -f[2] * x / 2, -g * w[0], -g * w[1], -g * w[2], -f[0] * x / 2, -f[1] * x / 2, -f[2] * x / 2, +g * w[0], +g * w[1], +g * w[2]], Z = G(m, H);
          i = i.map((N, L) => N + Z[L]);
        }
      }
      a.normals.set(s, [i[0], i[6]]), a.shearsY.set(s, [i[1], i[7]]), a.shearsZ.set(s, [i[2], i[8]]), a.torsions.set(s, [i[3], i[9]]), a.bendingsY.set(s, [i[4], i[10]]), a.bendingsZ.set(s, [i[5], i[11]]);
    } else if (y.length === 4) {
      const m = po(h, b, r, s);
      n.membraneXX.set(s, m.Nx), n.membraneYY.set(s, m.Ny), n.membraneXY.set(s, m.Nxy), n.bendingXX.set(s, m.Mx), n.bendingYY.set(s, m.My), n.bendingXY.set(s, m.Mxy), n.tranverseShearX.set(s, m.Qx), n.tranverseShearY.set(s, m.Qy), n.vonMises.set(s, m.vonMises);
    } else if (y.length === 3) {
      const m = Ht(h, ((_c = r == null ? void 0 : r.localAngles) == null ? void 0 : _c.get(s)) ?? 0);
      G(m, b);
      const l = mo(r, s), d = Ao(h), i = Yo(b), f = xo(h), M = G(1 / (2 * f), G(G(l, d), i)).toArray(), A = ((_d = r.thicknesses) == null ? void 0 : _d.get(s)) ?? 1, x = M[0][0] * A, Y = M[1][0] * A, g = M[2][0] * A, w = M[0][1] * (A ** 3 / 12), H = M[1][1] * (A ** 3 / 12), Z = M[2][1] * (A ** 3 / 12);
      n.membraneXX.set(s, x), n.membraneYY.set(s, Y), n.membraneXY.set(s, g), n.bendingXX.set(s, w), n.bendingYY.set(s, H), n.bendingXY.set(s, Z);
    }
  });
  const { nodeToCentroidElementIndiciesMap: e } = Xo(t, o);
  return o.forEach((y, s) => {
    if (y.length !== 3 && y.length !== 4) return;
    const h = y.length, b = new Array(h).fill(0), m = new Array(h).fill(0), l = new Array(h).fill(0), d = new Array(h).fill(0), i = new Array(h).fill(0), f = new Array(h).fill(0), j = new Array(h).fill(0), M = new Array(h).fill(0), A = new Array(h).fill(0);
    y.forEach((x, Y) => {
      const g = e.get(x) || [], w = (H) => ro(g.map((Z) => H.get(Z) ?? 0));
      b[Y] = w(n.membraneXX), m[Y] = w(n.membraneYY), l[Y] = w(n.membraneXY), d[Y] = w(n.bendingXX), i[Y] = w(n.bendingYY), f[Y] = w(n.bendingXY), j[Y] = w(n.tranverseShearX), M[Y] = w(n.tranverseShearY), A[Y] = w(n.vonMises);
    }), a.membraneXX.set(s, b), a.membraneYY.set(s, m), a.membraneXY.set(s, l), a.bendingXX.set(s, d), a.bendingYY.set(s, i), a.bendingXY.set(s, f), a.tranverseShearX.set(s, j), a.tranverseShearY.set(s, M), a.vonMises.set(s, A);
  }), a;
}
function po(t, o, r, c) {
  var _a, _b, _c;
  const a = ((_a = r.elasticities) == null ? void 0 : _a.get(c)) ?? 0, n = ((_b = r.poissonsRatios) == null ? void 0 : _b.get(c)) ?? 0, e = ((_c = r.thicknesses) == null ? void 0 : _c.get(c)) ?? 1, y = t[0], s = t[1], h = t[2], b = t[3], m = [s[0] - y[0], s[1] - y[1], s[2] - y[2]], l = [h[0] - b[0], h[1] - b[1], h[2] - b[2]];
  let d = [m[0] + l[0], m[1] + l[1], m[2] + l[2]], i = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  i < 1e-14 && (i = 1);
  let f = [d[0] / i, d[1] / i, d[2] / i];
  const j = [h[0] - y[0], h[1] - y[1], h[2] - y[2]], M = [b[0] - s[0], b[1] - s[1], b[2] - s[2]];
  let A = [j[1] * M[2] - j[2] * M[1], j[2] * M[0] - j[0] * M[2], j[0] * M[1] - j[1] * M[0]], x = Math.sqrt(A[0] * A[0] + A[1] * A[1] + A[2] * A[2]);
  x < 1e-14 && (x = 1);
  let Y = [A[0] / x, A[1] / x, A[2] / x], g = [Y[1] * f[2] - Y[2] * f[1], Y[2] * f[0] - Y[0] * f[2], Y[0] * f[1] - Y[1] * f[0]], w = Math.sqrt(g[0] * g[0] + g[1] * g[1] + g[2] * g[2]);
  w < 1e-14 && (w = 1), g = [g[0] / w, g[1] / w, g[2] / w];
  {
    if (Math.abs(Y[2]) > 1 - 1e-6) f = [1, 0, 0];
    else {
      const R = [-Y[1], Y[0], 0], B = Math.hypot(R[0], R[1], R[2]) || 1;
      f = [R[0] / B, R[1] / B, R[2] / B];
    }
    g = [Y[1] * f[2] - Y[2] * f[1], Y[2] * f[0] - Y[0] * f[2], Y[0] * f[1] - Y[1] * f[0]];
    const q = Math.hypot(g[0], g[1], g[2]) || 1;
    g = [g[0] / q, g[1] / q, g[2] / q], f = [g[1] * Y[2] - g[2] * Y[1], g[2] * Y[0] - g[0] * Y[2], g[0] * Y[1] - g[1] * Y[0]];
  }
  const H = 0.25 * (y[0] + s[0] + h[0] + b[0]), Z = 0.25 * (y[1] + s[1] + h[1] + b[1]), N = 0.25 * (y[2] + s[2] + h[2] + b[2]), L = [], it = [];
  for (let p = 0; p < 4; p++) {
    const q = t[p][0] - H, R = t[p][1] - Z, B = t[p][2] - N;
    L.push(q * f[0] + R * f[1] + B * f[2]), it.push(q * g[0] + R * g[1] + B * g[2]);
  }
  const ut = [f, g, Y], pt = new Array(24).fill(0);
  for (let p = 0; p < 4; p++) {
    const q = p * 6, R = p * 6;
    for (let B = 0; B < 3; B++) pt[R + B] = ut[B][0] * o[q] + ut[B][1] * o[q + 1] + ut[B][2] * o[q + 2];
    for (let B = 0; B < 3; B++) pt[R + 3 + B] = ut[B][0] * o[q + 3] + ut[B][1] * o[q + 4] + ut[B][2] * o[q + 5];
  }
  const S = a / (1 - n * n), P = [[S * e, S * n * e, 0], [S * n * e, S * e, 0], [0, 0, S * (1 - n) / 2 * e]], nt = e * e * e / 12, I = [[S * nt, S * n * nt, 0], [S * n * nt, S * nt, 0], [0, 0, S * (1 - n) / 2 * nt]], v = [-0.25, 0.25, 0.25, -0.25], X = [-0.25, -0.25, 0.25, 0.25];
  let z = 0, J = 0, K = 0, E = 0;
  for (let p = 0; p < 4; p++) z += v[p] * L[p], J += v[p] * it[p], K += X[p] * L[p], E += X[p] * it[p];
  const _ = z * E - J * K;
  if (Math.abs(_) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  const T = E / _, C = -J / _, W = -K / _, U = z / _, k = [], st = [];
  for (let p = 0; p < 4; p++) k.push(T * v[p] + C * X[p]), st.push(W * v[p] + U * X[p]);
  let et = 0, ot = 0, lt = 0;
  for (let p = 0; p < 4; p++) {
    const q = pt[p * 6 + 0], R = pt[p * 6 + 1];
    et += k[p] * q, ot += st[p] * R, lt += st[p] * q + k[p] * R;
  }
  const bt = P[0][0] * et + P[0][1] * ot, O = P[1][0] * et + P[1][1] * ot, ft = P[2][2] * lt;
  let gt = 0, ht = 0, Yt = 0;
  for (let p = 0; p < 4; p++) {
    const q = pt[p * 6 + 3], R = pt[p * 6 + 4];
    gt += k[p] * R, ht += -st[p] * q, Yt += st[p] * R - k[p] * q;
  }
  const yt = I[0][0] * gt + I[0][1] * ht, xt = I[1][0] * gt + I[1][1] * ht, mt = I[2][2] * Yt, St = 5 / 6, Xt = a / (2 * (1 + n)), rt = St * Xt * e;
  let zt = 0, u = 0;
  const tt = [0.25, 0.25, 0.25, 0.25];
  for (let p = 0; p < 4; p++) {
    const q = pt[p * 6 + 2], R = pt[p * 6 + 3], B = pt[p * 6 + 4];
    zt += k[p] * q + tt[p] * R, u += st[p] * q + tt[p] * B;
  }
  const At = rt * zt, Mt = rt * u, D = bt / e + 6 * yt / (e * e), Q = O / e + 6 * xt / (e * e), Jt = ft / e + 6 * mt / (e * e), Tt = Math.sqrt(D * D - D * Q + Q * Q + 3 * Jt * Jt), _t = bt / e - 6 * yt / (e * e), kt = O / e - 6 * xt / (e * e), jt = ft / e - 6 * mt / (e * e), dt = Math.sqrt(_t * _t - _t * kt + kt * kt + 3 * jt * jt), Dt = Math.max(Tt, dt);
  return { Nx: bt, Ny: O, Nxy: ft, Mx: yt, My: xt, Mxy: mt, Qx: At, Qy: Mt, vonMises: Dt };
}
function mo(t, o) {
  var _a, _b, _c, _d, _e;
  const r = ((_a = t.elasticities) == null ? void 0 : _a.get(o)) ?? 0, c = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(o)) ?? 0, a = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(o)) ?? 0, n = ((_d = t.shearModuli) == null ? void 0 : _d.get(o)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(o), c > 0 ? no(r, c, n, a) : oo(r, a);
}
function Ao(t) {
  const [o, r] = t[0], [c, a] = t[1], [n, e] = t[2], y = a - e, s = e - r, h = r - a, b = n - c, m = o - n, l = c - o;
  return F([[y, s, h, 0, 0, 0], [0, 0, 0, b, m, l], [b, m, l, y, s, h]]);
}
function Yo(t) {
  const [o, r, c] = [t[0], t[6], t[12]], [a, n, e] = [t[1], t[7], t[13]], [y, s, h] = [t[4], t[10], t[16]], [b, m, l] = [t[3], t[9], t[15]];
  return F([[o, -y], [r, -s], [c, -h], [a, b], [n, m], [e, l]]);
}
function xo(t) {
  const [o, r] = t[0], [c, a] = t[1], [n, e] = t[2], y = c - o, s = n - o, h = e - r, b = r - a;
  return 0.5 * (y * h - s * -b);
}
function Xo(t, o) {
  const r = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  return o.forEach((a, n) => {
    const e = a.map((s) => t[s]), y = wo(e);
    a.forEach((s) => {
      var _a, _b;
      r.has(s) || r.set(s, []), (_a = r.get(s)) == null ? void 0 : _a.push(y), c.has(s) || c.set(s, []), (_b = c.get(s)) == null ? void 0 : _b.push(n);
    });
  }), { nodeToCentroidNodesMap: r, nodeToCentroidElementIndiciesMap: c };
}
function wo(t) {
  const o = t.reduce((a, n) => a + n[0], 0) / t.length, r = t.reduce((a, n) => a + n[1], 0) / t.length, c = t.reduce((a, n) => a + n[2], 0) / t.length;
  return [o, r, c];
}
export {
  No as a,
  Ht as b,
  go as g
};
