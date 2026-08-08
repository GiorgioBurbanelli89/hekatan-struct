import { s as It, n as Zt, b as Bt, k as Vt, i as Pt, z as O, c as Wt, m as z, t as Tt, a as Lt, e as k, f as rn } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const V = 1 / Math.sqrt(3);
function Rt(t, n) {
  const r = [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)], o = [-0.25 * (1 - n), 0.25 * (1 - n), 0.25 * (1 + n), -0.25 * (1 + n)], a = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: r, dNdxi: o, dNdeta: a };
}
function Ot(t, n, r, o) {
  let a = 0, c = 0, s = 0, h = 0;
  for (let f = 0; f < 4; f++) a += t[f] * r[f], c += t[f] * o[f], s += n[f] * r[f], h += n[f] * o[f];
  const e = a * h - c * s, g = 1 / e, Y = [], A = [];
  for (let f = 0; f < 4; f++) Y.push(g * (h * t[f] - c * n[f])), A.push(g * (-s * t[f] + a * n[f]));
  return { dNdx: Y, dNdy: A, detJ: e };
}
function cn(t, n, r, o, a) {
  const e = ct(12, 12), g = r * a / (1 - o * o), Y = [[-V, -V], [V, -V], [V, V], [-V, V]], { dNdxi: A, dNdeta: f } = Rt(0, 0), { detJ: X } = Ot(A, f, t, n);
  for (const [y, i] of Y) {
    const { dNdxi: N, dNdeta: Z } = Rt(y, i), { dNdx: P, dNdy: _, detJ: W } = Ot(N, Z, t, n);
    Ot(A, f, t, n);
    const ut = A.reduce((b, D, T) => b + D * t[T], 0), dt = A.reduce((b, D, T) => b + D * n[T], 0), et = f.reduce((b, D, T) => b + D * t[T], 0), st = f.reduce((b, D, T) => b + D * n[T], 0), rt = 1 / X, At = rt * st * (-2 * y), Yt = rt * -et * (-2 * y), w = rt * -dt * (-2 * i), x = rt * ut * (-2 * i), v = [[], [], []];
    for (let b = 0; b < 4; b++) v[0].push(P[b], 0), v[1].push(0, _[b]), v[2].push(_[b], P[b]);
    v[0].push(At, 0, w, 0), v[1].push(0, Yt, 0, x), v[2].push(Yt, At, x, w);
    for (let b = 0; b < 12; b++) for (let D = 0; D < 12; D++) {
      let T = 0;
      T += g * (v[0][b] * v[0][D] + o * v[0][b] * v[1][D] + o * v[1][b] * v[0][D] + v[1][b] * v[1][D]), T += g * (1 - o) / 2 * v[2][b] * v[2][D], e[b][D] += T * Math.abs(W);
    }
  }
  const l = ct(8, 8), m = ct(8, 4), K = ct(4, 8), u = ct(4, 4);
  for (let y = 0; y < 8; y++) for (let i = 0; i < 8; i++) l[y][i] = e[y][i];
  for (let y = 0; y < 8; y++) for (let i = 0; i < 4; i++) m[y][i] = e[y][8 + i];
  for (let y = 0; y < 4; y++) for (let i = 0; i < 8; i++) K[y][i] = e[8 + y][i];
  for (let y = 0; y < 4; y++) for (let i = 0; i < 4; i++) u[y][i] = e[8 + y][8 + i];
  const M = en(u);
  if (!M) return l;
  const d = ct(8, 8);
  for (let y = 0; y < 8; y++) for (let i = 0; i < 8; i++) {
    let N = 0;
    for (let Z = 0; Z < 4; Z++) for (let P = 0; P < 4; P++) N += m[y][Z] * M[Z][P] * K[P][i];
    d[y][i] = l[y][i] - N;
  }
  return d;
}
function en(t) {
  const n = t.length, r = t.map((o, a) => {
    const c = [...o];
    for (let s = 0; s < n; s++) c.push(a === s ? 1 : 0);
    return c;
  });
  for (let o = 0; o < n; o++) {
    let a = o;
    for (let s = o + 1; s < n; s++) Math.abs(r[s][o]) > Math.abs(r[a][o]) && (a = s);
    if ([r[o], r[a]] = [r[a], r[o]], Math.abs(r[o][o]) < 1e-15) return null;
    const c = r[o][o];
    for (let s = 0; s < 2 * n; s++) r[o][s] /= c;
    for (let s = 0; s < n; s++) {
      if (s === o) continue;
      const h = r[s][o];
      for (let e = 0; e < 2 * n; e++) r[s][e] -= h * r[o][e];
    }
  }
  return r.map((o) => o.slice(n));
}
function an(t, n, r, o, a) {
  const c = ct(12, 12), s = [[-V, -V], [V, -V], [V, V], [-V, V]];
  for (const [h, e] of s) {
    const { N: g, dNdxi: Y, dNdeta: A } = Rt(h, e), { dNdx: f, dNdy: X, detJ: l } = Ot(Y, A, t, n), m = new Array(12).fill(0);
    for (let u = 0; u < 4; u++) m[u * 3] = 0.5 * X[u], m[u * 3 + 1] = -0.5 * f[u], m[u * 3 + 2] = g[u];
    const K = a * r * o * Math.abs(l);
    for (let u = 0; u < 12; u++) for (let M = 0; M < 12; M++) c[u][M] += K * m[u] * m[M];
  }
  return c;
}
function ln(t, n, r, o, a) {
  const c = ct(12, 12), s = r * a * a * a / (12 * (1 - o * o)), e = 5 / 6 * r / (2 * (1 + o)) * a, g = [[-V, -V], [V, -V], [V, V], [-V, V]], Y = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], A = [];
  for (const f of Y) {
    const { N: X, dNdxi: l, dNdeta: m } = Rt(f.xi, f.eta), { dNdx: K, dNdy: u } = Ot(l, m, t, n), M = ct(2, 12);
    for (let d = 0; d < 4; d++) M[0][d * 3] = K[d], M[0][d * 3 + 1] = -X[d], M[1][d * 3] = u[d], M[1][d * 3 + 2] = -X[d];
    A.push(M);
  }
  for (const [f, X] of g) {
    const { dNdxi: l, dNdeta: m } = Rt(f, X), { dNdx: K, dNdy: u, detJ: M } = Ot(l, m, t, n), d = ct(3, 12);
    for (let _ = 0; _ < 4; _++) d[0][_ * 3 + 1] = K[_], d[1][_ * 3 + 2] = u[_], d[2][_ * 3 + 1] = u[_], d[2][_ * 3 + 2] = K[_];
    for (let _ = 0; _ < 12; _++) for (let W = 0; W < 12; W++) {
      let ut = 0;
      ut += s * (d[0][_] * d[0][W] + o * d[0][_] * d[1][W] + o * d[1][_] * d[0][W] + d[1][_] * d[1][W]), ut += s * (1 - o) / 2 * d[2][_] * d[2][W], c[_][W] += ut * Math.abs(M);
    }
    const y = ct(2, 12), i = 0.5 * (1 - X), N = 0.5 * (1 + X), Z = 0.5 * (1 - f), P = 0.5 * (1 + f);
    for (let _ = 0; _ < 12; _++) y[0][_] = i * A[0][0][_] + N * A[1][0][_], y[1][_] = Z * A[2][1][_] + P * A[3][1][_];
    for (let _ = 0; _ < 12; _++) for (let W = 0; W < 12; W++) c[_][W] += e * (y[0][_] * y[0][W] + y[1][_] * y[1][W]) * Math.abs(M);
  }
  return c;
}
function fn(t, n, r) {
  var _a, _b, _c;
  const o = ((_a = n == null ? void 0 : n.elasticities) == null ? void 0 : _a.get(r)) ?? 0, a = ((_b = n == null ? void 0 : n.poissonsRatios) == null ? void 0 : _b.get(r)) ?? 0.2, c = ((_c = n == null ? void 0 : n.thicknesses) == null ? void 0 : _c.get(r)) ?? 0;
  if (o === 0 || c === 0) return ct(24, 24);
  const { localCoords: s } = tn(t), h = s.map((M) => M[0]), e = s.map((M) => M[1]), g = cn(h, e, o, a, c), Y = ln(h, e, o, a, c), A = o / (2 * (1 + a)), X = an(h, e, A, c, 0.5), l = ct(24, 24), m = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let M = 0; M < 8; M++) for (let d = 0; d < 8; d++) l[m[M]][m[d]] += g[M][d];
  const K = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let M = 0; M < 12; M++) for (let d = 0; d < 12; d++) l[K[M]][K[d]] += Y[M][d];
  const u = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let M = 0; M < 12; M++) for (let d = 0; d < 12; d++) l[u[M]][u[d]] += X[M][d];
  return l;
}
function gn(t) {
  const { localX: n, localY: r, localZ: o } = tn(t), a = [[n[0], n[1], n[2]], [r[0], r[1], r[2]], [o[0], o[1], o[2]]], c = ct(24, 24);
  for (let s = 0; s < 4; s++) for (let h = 0; h < 2; h++) {
    const e = s * 6 + h * 3;
    for (let g = 0; g < 3; g++) for (let Y = 0; Y < 3; Y++) c[e + g][e + Y] = a[g][Y];
  }
  return c;
}
function tn(t) {
  const n = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], r = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], o = $t(n, r), a = Math.sqrt(o[0] ** 2 + o[1] ** 2 + o[2] ** 2), c = o.map((l) => l / a), s = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], h = Math.sqrt(s[0] ** 2 + s[1] ** 2 + s[2] ** 2), e = s.map((l) => l / h), g = $t(c, e), Y = t.map((l) => l[0]).reduce((l, m) => l + m) / 4, A = t.map((l) => l[1]).reduce((l, m) => l + m) / 4, f = t.map((l) => l[2]).reduce((l, m) => l + m) / 4, X = t.map((l) => {
    const m = l[0] - Y, K = l[1] - A, u = l[2] - f;
    return [m * e[0] + K * e[1] + u * e[2], m * g[0] + K * g[1] + u * g[2]];
  });
  return { localX: e, localY: g, localZ: c, localCoords: X };
}
function $t(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function ct(t, n) {
  return Array.from({ length: t }, () => Array(n).fill(0));
}
function Ht(t) {
  if (t.length === 2) return hn(t);
  if (t.length === 3) return yn(t);
  if (t.length === 4) return gn(t);
}
function hn(t) {
  const n = It(t[1], t[0]), r = Zt(n), o = Bt(n, [1, 0, 0]) / r, a = Bt(n, [0, 1, 0]) / r, c = Bt(n, [0, 0, 1]) / r, s = Math.sqrt(o ** 2 + a ** 2);
  if (s < 1e-9) {
    const e = c > 0 ? 1 : -1, g = [[0, 0, e], [1, 0, 0], [0, e, 0]];
    return Vt(Pt(4), g).toArray();
  }
  const h = [[o, a, c], [-o * c / s, -a * c / s, s], [a / s, -o / s, 0]];
  return Vt(Pt(4), h).toArray();
}
function yn(t) {
  const c = [t[0], t[1], t[2]], s = O(3, 3).toArray();
  for (let i = 0; i < 3; i++) for (let N = 0; N < 3; N++) s[i][N] = c[N][i];
  const h = [-1, 1, 0], e = [-1, 0, 1], g = O(3, 2).toArray();
  for (let i = 0; i < 3; i++) for (let N = 0; N < 3; N++) g[i][0] += s[i][N] * h[N], g[i][1] += s[i][N] * e[N];
  const Y = g.map((i) => i[0]), A = g.map((i) => i[1]);
  let f = Wt(Y, A), X = Zt(f);
  if (X === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), O(18, 18).toArray();
  f = f.map((i) => i / X);
  const l = [...f], m = Pt(3).toArray(), K = f[0];
  let u;
  if (Math.abs(K) > 1 - 1e-10) {
    const i = f[2];
    u = m.map((N, Z) => N[2] - i * f[Z]);
  } else u = m.map((i, N) => i[0] - K * f[N]);
  if (X = Zt(u), X === 0) return console.warn("Degenerate local X-axis detected."), O(18, 18).toArray();
  u = u.map((i) => i / X);
  let M = Wt(l, u);
  if (X = Zt(M), X === 0) return console.warn("Degenerate local Y-axis detected."), O(18, 18).toArray();
  M = M.map((i) => i / X);
  const d = [u, M, l], y = O(18, 18).toArray();
  for (let i = 0; i < 3; i++) {
    const N = i * 6, Z = N + 3;
    for (let P = 0; P < 3; P++) for (let _ = 0; _ < 3; _++) y[N + P][N + _] = d[P][_], y[Z + P][Z + _] = d[P][_];
  }
  return y;
}
function un(t, n, r) {
  var _a, _b;
  if (t.length === 2) {
    let o = bn(t, n, r);
    const a = (_a = n == null ? void 0 : n.partialFixitySprings) == null ? void 0 : _a.get(r);
    a && (o = mn(o, a));
    const c = (_b = n == null ? void 0 : n.momentReleases) == null ? void 0 : _b.get(r);
    return c && (o = Mn(o, c)), o;
  }
  if (t.length === 3) return xn(t, n, r);
  if (t.length === 4) return fn(t, n, r);
}
function mn(t, n) {
  const r = t.map((a) => [...a]), o = Math.min(n.length, 12);
  for (let a = 0; a < o; a++) n[a] > 1e-12 && (r[a][a] += n[a]);
  return r;
}
function Mn(t, n) {
  const r = [];
  if (n.length >= 12) for (let l = 0; l < 12; l++) n[l] && r.push(l);
  else {
    const l = [3, 4, 5, 9, 10, 11];
    for (let m = 0; m < Math.min(n.length, 6); m++) n[m] && r.push(l[m]);
  }
  if (r.length === 0) return t;
  const o = t.length, a = [];
  for (let l = 0; l < o; l++) r.includes(l) || a.push(l);
  const c = a.length, s = r.length, h = Array.from({ length: s }, (l, m) => Array.from({ length: s }, (K, u) => t[r[m]][r[u]])), e = Array.from({ length: c }, (l, m) => Array.from({ length: s }, (K, u) => t[a[m]][r[u]])), g = Array.from({ length: s }, (l, m) => Array.from({ length: c }, (K, u) => t[r[m]][a[u]])), Y = pn(h);
  if (!Y) return t;
  const A = Ut(e, Y), f = Ut(A, g), X = Array.from({ length: o }, () => Array(o).fill(0));
  for (let l = 0; l < c; l++) for (let m = 0; m < c; m++) X[a[l]][a[m]] = t[a[l]][a[m]] - f[l][m];
  return X;
}
function Ut(t, n) {
  const r = t.length, o = n[0].length, a = n.length, c = Array.from({ length: r }, () => Array(o).fill(0));
  for (let s = 0; s < r; s++) for (let h = 0; h < o; h++) for (let e = 0; e < a; e++) c[s][h] += t[s][e] * n[e][h];
  return c;
}
function pn(t) {
  const n = t.length, r = t.map((o, a) => {
    const c = [...o];
    for (let s = 0; s < n; s++) c.push(a === s ? 1 : 0);
    return c;
  });
  for (let o = 0; o < n; o++) {
    let a = o;
    for (let s = o + 1; s < n; s++) Math.abs(r[s][o]) > Math.abs(r[a][o]) && (a = s);
    if ([r[o], r[a]] = [r[a], r[o]], Math.abs(r[o][o]) < 1e-15) return null;
    const c = r[o][o];
    for (let s = 0; s < 2 * n; s++) r[o][s] /= c;
    for (let s = 0; s < n; s++) {
      if (s === o) continue;
      const h = r[s][o];
      for (let e = 0; e < 2 * n; e++) r[s][e] -= h * r[o][e];
    }
  }
  return r.map((o) => o.slice(n));
}
function bn(t, n, r) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const o = ((_a = n == null ? void 0 : n.momentsOfInertiaZ) == null ? void 0 : _a.get(r)) ?? 0, a = ((_b = n == null ? void 0 : n.momentsOfInertiaY) == null ? void 0 : _b.get(r)) ?? 0, c = ((_c = n == null ? void 0 : n.elasticities) == null ? void 0 : _c.get(r)) ?? 0, s = ((_d = n == null ? void 0 : n.areas) == null ? void 0 : _d.get(r)) ?? 0, h = ((_e = n == null ? void 0 : n.shearModuli) == null ? void 0 : _e.get(r)) ?? 0, e = ((_f = n == null ? void 0 : n.torsionalConstants) == null ? void 0 : _f.get(r)) ?? 0, g = Zt(It(t[0], t[1]));
  let Y = ((_g = n == null ? void 0 : n.shearAreasY) == null ? void 0 : _g.get(r)) ?? 0, A = ((_h = n == null ? void 0 : n.shearAreasZ) == null ? void 0 : _h.get(r)) ?? 0;
  Y === 0 && A === 0 && s > 0 && h > 0 && (Y = A = 5 / 6 * s);
  const f = A > 0 && h > 0 ? 12 * c * o / (h * A * g ** 2) : 0, X = Y > 0 && h > 0 ? 12 * c * a / (h * Y * g ** 2) : 0, l = c * s / g, m = h * e / g, K = 12 * c * o / g ** 3 / (1 + f), u = 6 * c * o / g ** 2 / (1 + f), M = 4 * c * o / g * (1 + f / 4) / (1 + f), d = 2 * c * o / g * (1 - f / 2) / (1 + f), y = 12 * c * a / g ** 3 / (1 + X), i = 6 * c * a / g ** 2 / (1 + X), N = 4 * c * a / g * (1 + X / 4) / (1 + X), Z = 2 * c * a / g * (1 - X / 2) / (1 + X);
  return [[l, 0, 0, 0, 0, 0, -l, 0, 0, 0, 0, 0], [0, K, 0, 0, 0, u, 0, -K, 0, 0, 0, u], [0, 0, y, 0, -i, 0, 0, 0, -y, 0, -i, 0], [0, 0, 0, m, 0, 0, 0, 0, 0, -m, 0, 0], [0, 0, -i, 0, N, 0, 0, 0, i, 0, Z, 0], [0, u, 0, 0, 0, M, 0, -u, 0, 0, 0, d], [-l, 0, 0, 0, 0, 0, l, 0, 0, 0, 0, 0], [0, -K, 0, 0, 0, -u, 0, K, 0, 0, 0, -u], [0, 0, -y, 0, i, 0, 0, 0, y, 0, i, 0], [0, 0, 0, -m, 0, 0, 0, 0, 0, m, 0, 0], [0, 0, -i, 0, Z, 0, 0, 0, i, 0, N, 0], [0, u, 0, 0, 0, d, 0, -u, 0, 0, 0, M]];
}
function xn(t, n, r) {
  var _a, _b, _c, _d, _e;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(r)) ?? 0, a = ((_b = n.elasticitiesOrthogonal) == null ? void 0 : _b.get(r)) ?? 0, c = ((_c = n.poissonsRatios) == null ? void 0 : _c.get(r)) ?? 0, s = ((_d = n.shearModuli) == null ? void 0 : _d.get(r)) ?? 0, h = ((_e = n.thicknesses) == null ? void 0 : _e.get(r)) ?? 0, e = a > 0, g = e ? dt(o, a, s, c, h) : W(o, c, h), Y = e ? et(s, h) : ut(o, c, h), A = e ? on(o, a, s, c) : nn(o, c), f = t.map(([w, x]) => [w, x]), X = f[1][0] - f[0][0], l = f[2][0] - f[0][0], m = f[0][1] - f[1][1], K = f[2][1] - f[0][1], u = 0.5 * (X * K - l * -m), M = st(f), d = At(f), y = Yt(f, A, h), i = z(z(Tt(M), Y), M), N = z(z(Tt(d), g), d), Z = O(18, 18).toArray(), P = z(Lt(i, N), u), _ = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let w = 0; w < 3; w++) for (let x = 0; x < 3; x++) for (let v = 0; v < 3; v++) {
    const b = _[w][x], D = _[v][x];
    Z[b][D] = y[w * 3 + x][v * 3 + x];
  }
  for (let w = 0; w < 18; w++) for (let x = 0; x < 18; x++) Z[w][x] = (Z[w][x] ?? 0) + P.get([w, x]);
  return Z;
  function W(w, x, v) {
    const b = w / (1 - x * x), D = k([[b, b * x, 0], [b * x, b, 0], [0, 0, b * (1 - x) / 2]]);
    return z(v ** 3 / 12, D);
  }
  function ut(w, x, v) {
    const b = 0.8333333333333334, D = w / (2 * (1 + x)), T = b * D * v;
    return k([[T, 0], [0, T]]);
  }
  function dt(w, x, v, b, D) {
    const T = x * b / w, j = 1 - b * T, J = w / j, q = x / j, B = b * x / j, E = k([[J, B, 0], [B, q, 0], [0, 0, v]]);
    return z(D ** 3 / 12, E);
  }
  function et(w, x) {
    const b = 0.8333333333333334 * w * x;
    return k([[b, 0], [0, b]]);
  }
  function st(w) {
    const x = O(2, 18).toArray(), [v, b] = w[0], [D, T] = w[1], [j, J] = w[2], q = 0.5 * ((D - v) * (J - b) - (j - v) * -(b - T)), B = (v + D + j) / 3, $ = (b + T + J) / 3, E = [B, v, D], tt = [$, b, T], nt = [B, D, j], U = [$, T, J], ot = [B, j, v], mt = [$, J, b], F = 1 / 3, [at, it, lt, Et] = rt(E, tt), [Mt, Dt, jt, kt] = rt(nt, U), [Qt, Kt, zt, Ct] = rt(ot, mt), pt = O(2, 18).toArray(), Xt = O(2, 18).toArray(), wt = O(2, 18).toArray();
    for (let Q = 0; Q < 2; Q++) for (let S = 0; S < 6; S++) pt[Q][S] = F * at[Q][S] + it[Q][S], pt[Q][S + 6] = F * at[Q][S] + lt[Q][S], pt[Q][S + 12] = F * at[Q][S], Xt[Q][S] = F * Mt[Q][S], Xt[Q][S + 6] = F * Mt[Q][S] + Dt[Q][S], Xt[Q][S + 12] = F * Mt[Q][S] + jt[Q][S], wt[Q][S] = F * Qt[Q][S] + zt[Q][S], wt[Q][S + 6] = F * Qt[Q][S], wt[Q][S + 12] = F * Qt[Q][S] + Kt[Q][S];
    for (let Q = 0; Q < 2; Q++) for (let S = 0; S < 18; S++) pt[Q][S] *= Et, Xt[Q][S] *= kt, wt[Q][S] *= Ct, x[Q][S] = (pt[Q][S] + Xt[Q][S] + wt[Q][S]) / q;
    return x;
  }
  function rt(w, x) {
    const v = O(2, 6).toArray(), b = O(2, 6).toArray(), D = O(2, 6).toArray(), T = w[1] - w[0], j = w[0] - w[2], J = x[2] - x[0], q = x[0] - x[1], B = w[2] - w[1], $ = x[1] - x[2], E = 0.5 * (T * J - j * q), tt = 0.5 * q * j, nt = 0.5 * J * T, U = 0.5 * T * j, ot = 0.5 * q * J;
    return v[0][2] = 0.5 * B / E, v[0][3] = -0.5, v[1][2] = 0.5 * $ / E, v[1][4] = 0.5, b[0][2] = 0.5 * j / E, b[0][3] = 0.5 * tt / E, b[0][4] = 0.5 * U / E, b[1][2] = 0.5 * J / E, b[1][3] = 0.5 * ot / E, b[1][4] = 0.5 * nt / E, D[0][2] = 0.5 * T / E, D[0][3] = -0.5 * nt / E, D[0][4] = -0.5 * U / E, D[1][2] = 0.5 * q / E, D[1][3] = -0.5 * ot / E, D[1][4] = -0.5 * tt / E, [v, b, D, E];
  }
  function At(w) {
    const x = O(3, 18).toArray(), [v, b] = w[0], [D, T] = w[1], [j, J] = w[2], q = D - v, B = j - v, $ = j - D, E = T - J, tt = J - b, nt = b - T, U = 0.5 * (q * tt - B * -nt), ot = E / (2 * U), mt = $ / (2 * U), F = tt / (2 * U), at = -B / (2 * U), it = nt / (2 * U), lt = q / (2 * U);
    return x[0][4] = ot, x[0][10] = F, x[0][16] = it, x[1][3] = -mt, x[1][9] = -at, x[1][15] = -lt, x[2][3] = -ot, x[2][4] = mt, x[2][9] = -F, x[2][10] = at, x[2][15] = -it, x[2][16] = lt, x;
  }
  function Yt(w, x, v) {
    let b = O(9, 9).toArray(), D = O(9, 9).toArray(), T = O(9, 9).toArray(), j = O(9, 3).toArray(), J = O(3, 9).toArray(), q = O(3, 3).toArray(), B = O(3, 3).toArray(), $ = O(3, 3).toArray(), E = O(3, 3).toArray(), tt = O(3, 3).toArray(), nt = O(3, 3).toArray(), U = O(3, 3).toArray(), ot = O(3, 3).toArray();
    const mt = 1 / 8, F = mt / 6, at = mt ** 2 / 4, it = 1, lt = 2, Et = 1, Mt = 0, Dt = 1, jt = -1, kt = -1, Qt = -1, Kt = -2, zt = w[0][0], Ct = w[0][1], pt = w[1][0], Xt = w[1][1], wt = w[2][0], Q = w[2][1], S = zt - pt, vt = pt - wt, Nt = wt - zt, bt = Ct - Xt, _t = Xt - Q, St = Q - Ct, ft = -S, xt = -vt, p = -Nt, C = -bt, G = -_t, L = -St, Ft = 0.5 * (ft * St - Nt * -bt), sn = 2 * Ft, I = 4 * Ft, H = 0.5 * v, Gt = Ft * v, gt = ft ** 2 + C ** 2, ht = xt ** 2 + G ** 2, yt = p ** 2 + L ** 2;
    j[0][0] = H * _t, j[0][2] = H * xt, j[1][1] = H * xt, j[1][2] = H * _t, j[2][0] = H * _t * (L - C) * F, j[2][1] = H * xt * (Nt - S) * F, j[2][2] = H * (Nt * L - S * C) * 2 * F, j[3][0] = H * St, j[3][2] = H * p, j[4][1] = H * p, j[4][2] = H * St, j[5][0] = H * St * (C - G) * F, j[5][1] = H * p * (S - vt) * F, j[5][2] = H * (S * C - vt * G) * 2 * F, j[6][0] = H * bt, j[6][2] = H * ft, j[7][1] = H * ft, j[7][2] = H * bt, j[8][0] = H * bt * (G - L) * F, j[8][1] = H * ft * (vt - Nt) * F, j[8][2] = H * (vt * G - Nt * L) * 2 * F, T = z(z(k(j), x), Tt(k(j))).toArray(), T = z(k(T), 1 / Gt).toArray(), J[0][0] = xt / I, J[0][1] = G / I, J[0][2] = 1, J[0][3] = p / I, J[0][4] = L / I, J[0][6] = ft / I, J[0][7] = C / I, J[1][0] = xt / I, J[1][1] = G / I, J[1][3] = p / I, J[1][4] = L / I, J[1][5] = 1, J[1][6] = ft / I, J[1][7] = C / I, J[2][0] = xt / I, J[2][1] = G / I, J[2][3] = p / I, J[2][4] = L / I, J[2][6] = ft / I, J[2][7] = C / I, J[2][8] = 1;
    const Jt = 1 / (Ft * I);
    q[0][0] = Jt * _t * L * gt, q[0][1] = Jt * St * C * ht, q[0][2] = Jt * bt * G * yt, q[1][0] = Jt * vt * p * gt, q[1][1] = Jt * Nt * ft * ht, q[1][2] = Jt * S * xt * yt, q[2][0] = Jt * (_t * Nt + xt * L) * gt, q[2][1] = Jt * (St * S + p * C) * ht, q[2][2] = Jt * (bt * vt + ft * G) * yt;
    const R = sn / 3;
    B[0][0] = R * it / gt, B[0][1] = R * lt / gt, B[0][2] = R * Et / gt, B[1][0] = R * Mt / ht, B[1][1] = R * Dt / ht, B[1][2] = R * jt / ht, B[2][0] = R * kt / yt, B[2][1] = R * Qt / yt, B[2][2] = R * Kt / yt, $[0][0] = R * Kt / gt, $[0][1] = R * kt / gt, $[0][2] = R * Qt / gt, $[1][0] = R * Et / ht, $[1][1] = R * it / ht, $[1][2] = R * lt / ht, $[2][0] = R * jt / yt, $[2][1] = R * Mt / yt, $[2][2] = R * Dt / yt, E[0][0] = R * Dt / gt, E[0][1] = R * jt / gt, E[0][2] = R * Mt / gt, E[1][0] = R * Qt / ht, E[1][1] = R * Kt / ht, E[1][2] = R * kt / ht, E[2][0] = R * lt / yt, E[2][1] = R * Et / yt, E[2][2] = R * it / yt, tt = z(Lt(k(B), k($)), 0.5).toArray(), nt = z(Lt(k($), k(E)), 0.5).toArray(), U = z(Lt(k(E), k(B)), 0.5).toArray();
    const qt = z(z(Tt(k(q)), x), k(q));
    return ot = Lt(Lt(z(z(Tt(k(tt)), qt), k(tt)), z(z(Tt(k(nt)), qt), k(nt))), z(z(Tt(k(U)), qt), k(U))).toArray(), ot = z(k(ot), 3 / 4 * at * Gt).toArray(), D = z(z(Tt(k(J)), k(ot)), k(J)).toArray(), b = Lt(k(T), k(D)).toArray(), b;
  }
}
function nn(t, n) {
  const r = t / (1 - n * n);
  return k([[r, r * n, 0], [r * n, r, 0], [0, 0, r * (1 - n) / 2]]);
}
function on(t, n, r, o) {
  const a = n * o / t, c = 1 - o * a, s = t / c, h = n / c, e = o * n / c;
  return k([[s, e, 0], [e, h, 0], [0, 0, r]]);
}
function Sn(t, n, r, o) {
  const a = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() }, c = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() };
  n.forEach((h, e) => {
    var _a;
    const g = h.map((A) => t[A]), Y = h.reduce((A, f) => {
      var _a2;
      const X = (_a2 = o.deformations) == null ? void 0 : _a2.get(f);
      return A.concat(X ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (h.length === 2) {
      const A = Ht(g), f = z(A, Y), X = un(g, r, e);
      let l = z(X, f);
      a.normals.set(e, [l[0], l[6]]), a.shearsY.set(e, [l[1], l[7]]), a.shearsZ.set(e, [l[2], l[8]]), a.torsions.set(e, [l[3], l[9]]), a.bendingsY.set(e, [l[4], l[10]]), a.bendingsZ.set(e, [l[5], l[11]]);
    } else if (h.length === 4) {
      const A = dn(g, Y, r, e);
      c.membraneXX.set(e, A.Nx), c.membraneYY.set(e, A.Ny), c.membraneXY.set(e, A.Nxy), c.bendingXX.set(e, A.Mx), c.bendingYY.set(e, A.My), c.bendingXY.set(e, A.Mxy), c.tranverseShearX.set(e, A.Qx), c.tranverseShearY.set(e, A.Qy), c.vonMises.set(e, A.vonMises);
    } else if (h.length === 3) {
      const A = Ht(g);
      z(A, Y);
      const f = An(r, e), X = Yn(g), l = Xn(Y), m = wn(g), u = z(1 / (2 * m), z(z(f, X), l)).toArray(), M = ((_a = r.thicknesses) == null ? void 0 : _a.get(e)) ?? 1, d = u[0][0] * M, y = u[1][0] * M, i = u[2][0] * M, N = u[0][1] * (M ** 3 / 12), Z = u[1][1] * (M ** 3 / 12), P = u[2][1] * (M ** 3 / 12);
      c.membraneXX.set(e, d), c.membraneYY.set(e, y), c.membraneXY.set(e, i), c.bendingXX.set(e, N), c.bendingYY.set(e, Z), c.bendingXY.set(e, P);
    }
  });
  const { nodeToCentroidElementIndiciesMap: s } = vn(t, n);
  return n.forEach((h, e) => {
    if (h.length !== 3 && h.length !== 4) return;
    const g = h.length, Y = new Array(g).fill(0), A = new Array(g).fill(0), f = new Array(g).fill(0), X = new Array(g).fill(0), l = new Array(g).fill(0), m = new Array(g).fill(0), K = new Array(g).fill(0), u = new Array(g).fill(0), M = new Array(g).fill(0);
    h.forEach((d, y) => {
      const i = s.get(d) || [], N = (Z) => rn(i.map((P) => Z.get(P) ?? 0));
      Y[y] = N(c.membraneXX), A[y] = N(c.membraneYY), f[y] = N(c.membraneXY), X[y] = N(c.bendingXX), l[y] = N(c.bendingYY), m[y] = N(c.bendingXY), K[y] = N(c.tranverseShearX), u[y] = N(c.tranverseShearY), M[y] = N(c.vonMises);
    }), a.membraneXX.set(e, Y), a.membraneYY.set(e, A), a.membraneXY.set(e, f), a.bendingXX.set(e, X), a.bendingYY.set(e, l), a.bendingXY.set(e, m), a.tranverseShearX.set(e, K), a.tranverseShearY.set(e, u), a.vonMises.set(e, M);
  }), a;
}
function dn(t, n, r, o) {
  var _a, _b, _c;
  const a = ((_a = r.elasticities) == null ? void 0 : _a.get(o)) ?? 0, c = ((_b = r.poissonsRatios) == null ? void 0 : _b.get(o)) ?? 0, s = ((_c = r.thicknesses) == null ? void 0 : _c.get(o)) ?? 1, h = t[0], e = t[1], g = t[2], Y = t[3], A = [e[0] - h[0], e[1] - h[1], e[2] - h[2]], f = [g[0] - Y[0], g[1] - Y[1], g[2] - Y[2]];
  let X = [A[0] + f[0], A[1] + f[1], A[2] + f[2]], l = Math.sqrt(X[0] * X[0] + X[1] * X[1] + X[2] * X[2]);
  l < 1e-14 && (l = 1);
  let m = [X[0] / l, X[1] / l, X[2] / l];
  const K = [g[0] - h[0], g[1] - h[1], g[2] - h[2]], u = [Y[0] - e[0], Y[1] - e[1], Y[2] - e[2]];
  let M = [K[1] * u[2] - K[2] * u[1], K[2] * u[0] - K[0] * u[2], K[0] * u[1] - K[1] * u[0]], d = Math.sqrt(M[0] * M[0] + M[1] * M[1] + M[2] * M[2]);
  d < 1e-14 && (d = 1);
  let y = [M[0] / d, M[1] / d, M[2] / d], i = [y[1] * m[2] - y[2] * m[1], y[2] * m[0] - y[0] * m[2], y[0] * m[1] - y[1] * m[0]], N = Math.sqrt(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
  N < 1e-14 && (N = 1), i = [i[0] / N, i[1] / N, i[2] / N], m = [i[1] * y[2] - i[2] * y[1], i[2] * y[0] - i[0] * y[2], i[0] * y[1] - i[1] * y[0]];
  const Z = 0.25 * (h[0] + e[0] + g[0] + Y[0]), P = 0.25 * (h[1] + e[1] + g[1] + Y[1]), _ = 0.25 * (h[2] + e[2] + g[2] + Y[2]), W = [], ut = [];
  for (let p = 0; p < 4; p++) {
    const C = t[p][0] - Z, G = t[p][1] - P, L = t[p][2] - _;
    W.push(C * m[0] + G * m[1] + L * m[2]), ut.push(C * i[0] + G * i[1] + L * i[2]);
  }
  const dt = [m, i, y], et = new Array(24).fill(0);
  for (let p = 0; p < 4; p++) {
    const C = p * 6, G = p * 6;
    for (let L = 0; L < 3; L++) et[G + L] = dt[L][0] * n[C] + dt[L][1] * n[C + 1] + dt[L][2] * n[C + 2];
    for (let L = 0; L < 3; L++) et[G + 3 + L] = dt[L][0] * n[C + 3] + dt[L][1] * n[C + 4] + dt[L][2] * n[C + 5];
  }
  const st = a / (1 - c * c), rt = [[st * s, st * c * s, 0], [st * c * s, st * s, 0], [0, 0, st * (1 - c) / 2 * s]], At = s * s * s / 12, Yt = [[st * At, st * c * At, 0], [st * c * At, st * At, 0], [0, 0, st * (1 - c) / 2 * At]], w = [-0.25, 0.25, 0.25, -0.25], x = [-0.25, -0.25, 0.25, 0.25];
  let v = 0, b = 0, D = 0, T = 0;
  for (let p = 0; p < 4; p++) v += w[p] * W[p], b += w[p] * ut[p], D += x[p] * W[p], T += x[p] * ut[p];
  const j = v * T - b * D;
  if (Math.abs(j) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  const J = T / j, q = -b / j, B = -D / j, $ = v / j, E = [], tt = [];
  for (let p = 0; p < 4; p++) E.push(J * w[p] + q * x[p]), tt.push(B * w[p] + $ * x[p]);
  let nt = 0, U = 0, ot = 0;
  for (let p = 0; p < 4; p++) {
    const C = et[p * 6 + 0], G = et[p * 6 + 1];
    nt += E[p] * C, U += tt[p] * G, ot += tt[p] * C + E[p] * G;
  }
  const mt = rt[0][0] * nt + rt[0][1] * U, F = rt[1][0] * nt + rt[1][1] * U, at = rt[2][2] * ot;
  let it = 0, lt = 0, Et = 0;
  for (let p = 0; p < 4; p++) {
    const C = et[p * 6 + 3], G = et[p * 6 + 4];
    it += -E[p] * C, lt += -tt[p] * G, Et += -tt[p] * C - E[p] * G;
  }
  const Mt = Yt[0][0] * it + Yt[0][1] * lt, Dt = Yt[1][0] * it + Yt[1][1] * lt, jt = Yt[2][2] * Et, kt = 5 / 6, Qt = a / (2 * (1 + c)), Kt = kt * Qt * s;
  let zt = 0, Ct = 0;
  const pt = [0.25, 0.25, 0.25, 0.25];
  for (let p = 0; p < 4; p++) {
    const C = et[p * 6 + 2], G = et[p * 6 + 3], L = et[p * 6 + 4];
    zt += E[p] * C + pt[p] * G, Ct += tt[p] * C + pt[p] * L;
  }
  const Xt = Kt * zt, wt = Kt * Ct, Q = mt / s + 6 * Mt / (s * s), S = F / s + 6 * Dt / (s * s), vt = at / s + 6 * jt / (s * s), Nt = Math.sqrt(Q * Q - Q * S + S * S + 3 * vt * vt), bt = mt / s - 6 * Mt / (s * s), _t = F / s - 6 * Dt / (s * s), St = at / s - 6 * jt / (s * s), ft = Math.sqrt(bt * bt - bt * _t + _t * _t + 3 * St * St), xt = Math.max(Nt, ft);
  return { Nx: mt, Ny: F, Nxy: at, Mx: Mt, My: Dt, Mxy: jt, Qx: Xt, Qy: wt, vonMises: xt };
}
function An(t, n) {
  var _a, _b, _c, _d, _e;
  const r = ((_a = t.elasticities) == null ? void 0 : _a.get(n)) ?? 0, o = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, a = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, c = ((_d = t.shearModuli) == null ? void 0 : _d.get(n)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(n), o > 0 ? on(r, o, c, a) : nn(r, a);
}
function Yn(t) {
  const [n, r] = t[0], [o, a] = t[1], [c, s] = t[2], h = a - s, e = s - r, g = r - a, Y = c - o, A = n - c, f = o - n;
  return k([[h, e, g, 0, 0, 0], [0, 0, 0, Y, A, f], [Y, A, f, h, e, g]]);
}
function Xn(t) {
  const [n, r, o] = [t[0], t[6], t[12]], [a, c, s] = [t[1], t[7], t[13]], [h, e, g] = [t[4], t[10], t[16]], [Y, A, f] = [t[3], t[9], t[15]];
  return k([[n, -h], [r, -e], [o, -g], [a, Y], [c, A], [s, f]]);
}
function wn(t) {
  const [n, r] = t[0], [o, a] = t[1], [c, s] = t[2], h = o - n, e = c - n, g = s - r, Y = r - a;
  return 0.5 * (h * g - e * -Y);
}
function vn(t, n) {
  const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return n.forEach((a, c) => {
    const s = a.map((e) => t[e]), h = Nn(s);
    a.forEach((e) => {
      var _a, _b;
      r.has(e) || r.set(e, []), (_a = r.get(e)) == null ? void 0 : _a.push(h), o.has(e) || o.set(e, []), (_b = o.get(e)) == null ? void 0 : _b.push(c);
    });
  }), { nodeToCentroidNodesMap: r, nodeToCentroidElementIndiciesMap: o };
}
function Nn(t) {
  const n = t.reduce((a, c) => a + c[0], 0) / t.length, r = t.reduce((a, c) => a + c[1], 0) / t.length, o = t.reduce((a, c) => a + c[2], 0) / t.length;
  return [n, r, o];
}
export {
  Sn as a,
  Ht as b,
  un as g
};
