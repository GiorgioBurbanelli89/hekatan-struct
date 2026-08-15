import { s as It, n as Zt, b as Bt, k as Vt, i as Pt, z as R, c as Wt, m as O, t as Tt, a as Ct, e as C, f as rn } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const W = 1 / Math.sqrt(3);
function Rt(t, n) {
  const s = [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)], o = [-0.25 * (1 - n), 0.25 * (1 - n), 0.25 * (1 + n), -0.25 * (1 + n)], a = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: s, dNdxi: o, dNdeta: a };
}
function Ot(t, n, s, o) {
  let a = 0, e = 0, r = 0, u = 0;
  for (let g = 0; g < 4; g++) a += t[g] * s[g], e += t[g] * o[g], r += n[g] * s[g], u += n[g] * o[g];
  const c = a * u - e * r, y = 1 / c, p = [], x = [];
  for (let g = 0; g < 4; g++) p.push(y * (u * t[g] - e * n[g])), x.push(y * (-r * t[g] + a * n[g]));
  return { dNdx: p, dNdy: x, detJ: c };
}
function cn(t, n, s, o, a) {
  const c = ct(12, 12), y = s * a / (1 - o * o), p = [[-W, -W], [W, -W], [W, W], [-W, W]], { dNdxi: x, dNdeta: g } = Rt(0, 0), { detJ: X } = Ot(x, g, t, n);
  for (const [h, i] of p) {
    const { dNdxi: w, dNdeta: Z } = Rt(h, i), { dNdx: q, dNdy: v, detJ: V } = Ot(w, Z, t, n);
    Ot(x, g, t, n);
    const ut = x.reduce((A, D, T) => A + D * t[T], 0), xt = x.reduce((A, D, T) => A + D * n[T], 0), et = g.reduce((A, D, T) => A + D * t[T], 0), st = g.reduce((A, D, T) => A + D * n[T], 0), rt = 1 / X, At = rt * st * (-2 * h), Yt = rt * -et * (-2 * h), N = rt * -xt * (-2 * i), Y = rt * ut * (-2 * i), _ = [[], [], []];
    for (let A = 0; A < 4; A++) _[0].push(q[A], 0), _[1].push(0, v[A]), _[2].push(v[A], q[A]);
    _[0].push(At, 0, N, 0), _[1].push(0, Yt, 0, Y), _[2].push(Yt, At, Y, N);
    for (let A = 0; A < 12; A++) for (let D = 0; D < 12; D++) {
      let T = 0;
      T += y * (_[0][A] * _[0][D] + o * _[0][A] * _[1][D] + o * _[1][A] * _[0][D] + _[1][A] * _[1][D]), T += y * (1 - o) / 2 * _[2][A] * _[2][D], c[A][D] += T * Math.abs(V);
    }
  }
  const f = ct(8, 8), l = ct(8, 4), Q = ct(4, 8), m = ct(4, 4);
  for (let h = 0; h < 8; h++) for (let i = 0; i < 8; i++) f[h][i] = c[h][i];
  for (let h = 0; h < 8; h++) for (let i = 0; i < 4; i++) l[h][i] = c[h][8 + i];
  for (let h = 0; h < 4; h++) for (let i = 0; i < 8; i++) Q[h][i] = c[8 + h][i];
  for (let h = 0; h < 4; h++) for (let i = 0; i < 4; i++) m[h][i] = c[8 + h][8 + i];
  const b = en(m);
  if (!b) return f;
  const M = ct(8, 8);
  for (let h = 0; h < 8; h++) for (let i = 0; i < 8; i++) {
    let w = 0;
    for (let Z = 0; Z < 4; Z++) for (let q = 0; q < 4; q++) w += l[h][Z] * b[Z][q] * Q[q][i];
    M[h][i] = f[h][i] - w;
  }
  return M;
}
function en(t) {
  const n = t.length, s = t.map((o, a) => {
    const e = [...o];
    for (let r = 0; r < n; r++) e.push(a === r ? 1 : 0);
    return e;
  });
  for (let o = 0; o < n; o++) {
    let a = o;
    for (let r = o + 1; r < n; r++) Math.abs(s[r][o]) > Math.abs(s[a][o]) && (a = r);
    if ([s[o], s[a]] = [s[a], s[o]], Math.abs(s[o][o]) < 1e-15) return null;
    const e = s[o][o];
    for (let r = 0; r < 2 * n; r++) s[o][r] /= e;
    for (let r = 0; r < n; r++) {
      if (r === o) continue;
      const u = s[r][o];
      for (let c = 0; c < 2 * n; c++) s[r][c] -= u * s[o][c];
    }
  }
  return s.map((o) => o.slice(n));
}
function an(t, n, s, o, a) {
  const e = ct(12, 12), r = [[-W, -W], [W, -W], [W, W], [-W, W]];
  for (const [u, c] of r) {
    const { N: y, dNdxi: p, dNdeta: x } = Rt(u, c), { dNdx: g, dNdy: X, detJ: f } = Ot(p, x, t, n), l = new Array(12).fill(0);
    for (let m = 0; m < 4; m++) l[m * 3] = 0.5 * X[m], l[m * 3 + 1] = -0.5 * g[m], l[m * 3 + 2] = y[m];
    const Q = a * s * o * Math.abs(f);
    for (let m = 0; m < 12; m++) for (let b = 0; b < 12; b++) e[m][b] += Q * l[m] * l[b];
  }
  return e;
}
function ln(t, n, s, o, a) {
  const e = ct(12, 12), r = s * a * a * a / (12 * (1 - o * o)), c = 5 / 6 * s / (2 * (1 + o)) * a, y = [[-W, -W], [W, -W], [W, W], [-W, W]], p = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], x = [];
  for (const g of p) {
    const { N: X, dNdxi: f, dNdeta: l } = Rt(g.xi, g.eta), { dNdx: Q, dNdy: m } = Ot(f, l, t, n), b = ct(2, 12);
    for (let M = 0; M < 4; M++) b[0][M * 3] = Q[M], b[0][M * 3 + 1] = -X[M], b[1][M * 3] = m[M], b[1][M * 3 + 2] = -X[M];
    x.push(b);
  }
  for (const [g, X] of y) {
    const { dNdxi: f, dNdeta: l } = Rt(g, X), { dNdx: Q, dNdy: m, detJ: b } = Ot(f, l, t, n), M = ct(3, 12);
    for (let v = 0; v < 4; v++) M[0][v * 3 + 1] = Q[v], M[1][v * 3 + 2] = m[v], M[2][v * 3 + 1] = m[v], M[2][v * 3 + 2] = Q[v];
    for (let v = 0; v < 12; v++) for (let V = 0; V < 12; V++) {
      let ut = 0;
      ut += r * (M[0][v] * M[0][V] + o * M[0][v] * M[1][V] + o * M[1][v] * M[0][V] + M[1][v] * M[1][V]), ut += r * (1 - o) / 2 * M[2][v] * M[2][V], e[v][V] += ut * Math.abs(b);
    }
    const h = ct(2, 12), i = 0.5 * (1 - X), w = 0.5 * (1 + X), Z = 0.5 * (1 - g), q = 0.5 * (1 + g);
    for (let v = 0; v < 12; v++) h[0][v] = i * x[0][0][v] + w * x[1][0][v], h[1][v] = Z * x[2][1][v] + q * x[3][1][v];
    for (let v = 0; v < 12; v++) for (let V = 0; V < 12; V++) e[v][V] += c * (h[0][v] * h[0][V] + h[1][v] * h[1][V]) * Math.abs(b);
  }
  return e;
}
function fn(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n == null ? void 0 : n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, a = ((_b = n == null ? void 0 : n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0.2, e = ((_c = n == null ? void 0 : n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0;
  if (o === 0 || e === 0) return ct(24, 24);
  const { localCoords: r } = tn(t), u = r.map((b) => b[0]), c = r.map((b) => b[1]), y = cn(u, c, o, a, e), p = ln(u, c, o, a, e), x = o / (2 * (1 + a)), X = an(u, c, x, e, 0.5), f = ct(24, 24), l = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let b = 0; b < 8; b++) for (let M = 0; M < 8; M++) f[l[b]][l[M]] += y[b][M];
  const Q = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let b = 0; b < 12; b++) for (let M = 0; M < 12; M++) f[Q[b]][Q[M]] += p[b][M];
  const m = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let b = 0; b < 12; b++) for (let M = 0; M < 12; M++) f[m[b]][m[M]] += X[b][M];
  return f;
}
function gn(t) {
  const { localX: n, localY: s, localZ: o } = tn(t), a = [[n[0], n[1], n[2]], [s[0], s[1], s[2]], [o[0], o[1], o[2]]], e = ct(24, 24);
  for (let r = 0; r < 4; r++) for (let u = 0; u < 2; u++) {
    const c = r * 6 + u * 3;
    for (let y = 0; y < 3; y++) for (let p = 0; p < 3; p++) e[c + y][c + p] = a[y][p];
  }
  return e;
}
function tn(t) {
  const n = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], s = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], o = $t(n, s), a = Math.sqrt(o[0] ** 2 + o[1] ** 2 + o[2] ** 2), e = o.map((f) => f / a), r = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], u = Math.sqrt(r[0] ** 2 + r[1] ** 2 + r[2] ** 2), c = r.map((f) => f / u), y = $t(e, c), p = t.map((f) => f[0]).reduce((f, l) => f + l) / 4, x = t.map((f) => f[1]).reduce((f, l) => f + l) / 4, g = t.map((f) => f[2]).reduce((f, l) => f + l) / 4, X = t.map((f) => {
    const l = f[0] - p, Q = f[1] - x, m = f[2] - g;
    return [l * c[0] + Q * c[1] + m * c[2], l * y[0] + Q * y[1] + m * y[2]];
  });
  return { localX: c, localY: y, localZ: e, localCoords: X };
}
function $t(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function ct(t, n) {
  return Array.from({ length: t }, () => Array(n).fill(0));
}
function Ht(t, n = 0) {
  if (t.length === 2) return hn(t, n);
  if (t.length === 3) return yn(t);
  if (t.length === 4) return gn(t);
}
function hn(t, n = 0) {
  const s = (p) => {
    if (Math.abs(n) < 1e-12) return p;
    const x = n * Math.PI / 180, g = Math.cos(x), X = Math.sin(x);
    return [p[0], [g * p[1][0] + X * p[2][0], g * p[1][1] + X * p[2][1], g * p[1][2] + X * p[2][2]], [-X * p[1][0] + g * p[2][0], -X * p[1][1] + g * p[2][1], -X * p[1][2] + g * p[2][2]]];
  }, o = It(t[1], t[0]), a = Zt(o), e = Bt(o, [1, 0, 0]) / a, r = Bt(o, [0, 1, 0]) / a, u = Bt(o, [0, 0, 1]) / a, c = Math.sqrt(e ** 2 + r ** 2);
  if (c < 1e-9) {
    const p = u > 0 ? 1 : -1, x = [[0, 0, p], [1, 0, 0], [0, p, 0]];
    return Vt(Pt(4), s(x)).toArray();
  }
  const y = [[e, r, u], [-e * u / c, -r * u / c, c], [r / c, -e / c, 0]];
  return Vt(Pt(4), s(y)).toArray();
}
function yn(t) {
  const e = [t[0], t[1], t[2]], r = R(3, 3).toArray();
  for (let i = 0; i < 3; i++) for (let w = 0; w < 3; w++) r[i][w] = e[w][i];
  const u = [-1, 1, 0], c = [-1, 0, 1], y = R(3, 2).toArray();
  for (let i = 0; i < 3; i++) for (let w = 0; w < 3; w++) y[i][0] += r[i][w] * u[w], y[i][1] += r[i][w] * c[w];
  const p = y.map((i) => i[0]), x = y.map((i) => i[1]);
  let g = Wt(p, x), X = Zt(g);
  if (X === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), R(18, 18).toArray();
  g = g.map((i) => i / X);
  const f = [...g], l = Pt(3).toArray(), Q = g[0];
  let m;
  if (Math.abs(Q) > 1 - 1e-10) {
    const i = g[2];
    m = l.map((w, Z) => w[2] - i * g[Z]);
  } else m = l.map((i, w) => i[0] - Q * g[w]);
  if (X = Zt(m), X === 0) return console.warn("Degenerate local X-axis detected."), R(18, 18).toArray();
  m = m.map((i) => i / X);
  let b = Wt(f, m);
  if (X = Zt(b), X === 0) return console.warn("Degenerate local Y-axis detected."), R(18, 18).toArray();
  b = b.map((i) => i / X);
  const M = [m, b, f], h = R(18, 18).toArray();
  for (let i = 0; i < 3; i++) {
    const w = i * 6, Z = w + 3;
    for (let q = 0; q < 3; q++) for (let v = 0; v < 3; v++) h[w + q][w + v] = M[q][v], h[Z + q][Z + v] = M[q][v];
  }
  return h;
}
function un(t, n, s) {
  var _a, _b;
  if (t.length === 2) {
    let o = pn(t, n, s);
    const a = (_a = n == null ? void 0 : n.partialFixitySprings) == null ? void 0 : _a.get(s);
    a && (o = Mn(o, a));
    const e = (_b = n == null ? void 0 : n.momentReleases) == null ? void 0 : _b.get(s);
    return e && (o = mn(o, e)), o;
  }
  if (t.length === 3) return dn(t, n, s);
  if (t.length === 4) return fn(t, n, s);
}
function Mn(t, n) {
  const s = t.map((a) => [...a]), o = Math.min(n.length, 12);
  for (let a = 0; a < o; a++) n[a] > 1e-12 && (s[a][a] += n[a]);
  return s;
}
function mn(t, n) {
  const s = [];
  if (n.length >= 12) for (let f = 0; f < 12; f++) n[f] && s.push(f);
  else {
    const f = [3, 4, 5, 9, 10, 11];
    for (let l = 0; l < Math.min(n.length, 6); l++) n[l] && s.push(f[l]);
  }
  if (s.length === 0) return t;
  const o = t.length, a = [];
  for (let f = 0; f < o; f++) s.includes(f) || a.push(f);
  const e = a.length, r = s.length, u = Array.from({ length: r }, (f, l) => Array.from({ length: r }, (Q, m) => t[s[l]][s[m]])), c = Array.from({ length: e }, (f, l) => Array.from({ length: r }, (Q, m) => t[a[l]][s[m]])), y = Array.from({ length: r }, (f, l) => Array.from({ length: e }, (Q, m) => t[s[l]][a[m]])), p = bn(u);
  if (!p) return t;
  const x = Ut(c, p), g = Ut(x, y), X = Array.from({ length: o }, () => Array(o).fill(0));
  for (let f = 0; f < e; f++) for (let l = 0; l < e; l++) X[a[f]][a[l]] = t[a[f]][a[l]] - g[f][l];
  return X;
}
function Ut(t, n) {
  const s = t.length, o = n[0].length, a = n.length, e = Array.from({ length: s }, () => Array(o).fill(0));
  for (let r = 0; r < s; r++) for (let u = 0; u < o; u++) for (let c = 0; c < a; c++) e[r][u] += t[r][c] * n[c][u];
  return e;
}
function bn(t) {
  const n = t.length, s = t.map((o, a) => {
    const e = [...o];
    for (let r = 0; r < n; r++) e.push(a === r ? 1 : 0);
    return e;
  });
  for (let o = 0; o < n; o++) {
    let a = o;
    for (let r = o + 1; r < n; r++) Math.abs(s[r][o]) > Math.abs(s[a][o]) && (a = r);
    if ([s[o], s[a]] = [s[a], s[o]], Math.abs(s[o][o]) < 1e-15) return null;
    const e = s[o][o];
    for (let r = 0; r < 2 * n; r++) s[o][r] /= e;
    for (let r = 0; r < n; r++) {
      if (r === o) continue;
      const u = s[r][o];
      for (let c = 0; c < 2 * n; c++) s[r][c] -= u * s[o][c];
    }
  }
  return s.map((o) => o.slice(n));
}
function pn(t, n, s) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const o = ((_a = n == null ? void 0 : n.momentsOfInertiaZ) == null ? void 0 : _a.get(s)) ?? 0, a = ((_b = n == null ? void 0 : n.momentsOfInertiaY) == null ? void 0 : _b.get(s)) ?? 0, e = ((_c = n == null ? void 0 : n.elasticities) == null ? void 0 : _c.get(s)) ?? 0, r = ((_d = n == null ? void 0 : n.areas) == null ? void 0 : _d.get(s)) ?? 0, u = ((_e = n == null ? void 0 : n.shearModuli) == null ? void 0 : _e.get(s)) ?? 0, c = ((_f = n == null ? void 0 : n.torsionalConstants) == null ? void 0 : _f.get(s)) ?? 0, y = Zt(It(t[0], t[1]));
  let p = ((_g = n == null ? void 0 : n.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, x = ((_h = n == null ? void 0 : n.shearAreasZ) == null ? void 0 : _h.get(s)) ?? 0;
  p === 0 && x === 0 && r > 0 && u > 0 && (p = x = 5 / 6 * r);
  const g = x > 0 && u > 0 ? 12 * e * o / (u * x * y ** 2) : 0, X = p > 0 && u > 0 ? 12 * e * a / (u * p * y ** 2) : 0, f = e * r / y, l = u * c / y, Q = 12 * e * o / y ** 3 / (1 + g), m = 6 * e * o / y ** 2 / (1 + g), b = 4 * e * o / y * (1 + g / 4) / (1 + g), M = 2 * e * o / y * (1 - g / 2) / (1 + g), h = 12 * e * a / y ** 3 / (1 + X), i = 6 * e * a / y ** 2 / (1 + X), w = 4 * e * a / y * (1 + X / 4) / (1 + X), Z = 2 * e * a / y * (1 - X / 2) / (1 + X);
  return [[f, 0, 0, 0, 0, 0, -f, 0, 0, 0, 0, 0], [0, Q, 0, 0, 0, m, 0, -Q, 0, 0, 0, m], [0, 0, h, 0, -i, 0, 0, 0, -h, 0, -i, 0], [0, 0, 0, l, 0, 0, 0, 0, 0, -l, 0, 0], [0, 0, -i, 0, w, 0, 0, 0, i, 0, Z, 0], [0, m, 0, 0, 0, b, 0, -m, 0, 0, 0, M], [-f, 0, 0, 0, 0, 0, f, 0, 0, 0, 0, 0], [0, -Q, 0, 0, 0, -m, 0, Q, 0, 0, 0, -m], [0, 0, -h, 0, i, 0, 0, 0, h, 0, i, 0], [0, 0, 0, -l, 0, 0, 0, 0, 0, l, 0, 0], [0, 0, -i, 0, Z, 0, 0, 0, i, 0, w, 0], [0, m, 0, 0, 0, M, 0, -m, 0, 0, 0, b]];
}
function dn(t, n, s) {
  var _a, _b, _c, _d, _e;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, a = ((_b = n.elasticitiesOrthogonal) == null ? void 0 : _b.get(s)) ?? 0, e = ((_c = n.poissonsRatios) == null ? void 0 : _c.get(s)) ?? 0, r = ((_d = n.shearModuli) == null ? void 0 : _d.get(s)) ?? 0, u = ((_e = n.thicknesses) == null ? void 0 : _e.get(s)) ?? 0, c = a > 0, y = c ? xt(o, a, r, e, u) : V(o, e, u), p = c ? et(r, u) : ut(o, e, u), x = c ? on(o, a, r, e) : nn(o, e), g = t.map(([N, Y]) => [N, Y]), X = g[1][0] - g[0][0], f = g[2][0] - g[0][0], l = g[0][1] - g[1][1], Q = g[2][1] - g[0][1], m = 0.5 * (X * Q - f * -l), b = st(g), M = At(g), h = Yt(g, x, u), i = O(O(Tt(b), p), b), w = O(O(Tt(M), y), M), Z = R(18, 18).toArray(), q = O(Ct(i, w), m), v = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let N = 0; N < 3; N++) for (let Y = 0; Y < 3; Y++) for (let _ = 0; _ < 3; _++) {
    const A = v[N][Y], D = v[_][Y];
    Z[A][D] = h[N * 3 + Y][_ * 3 + Y];
  }
  for (let N = 0; N < 18; N++) for (let Y = 0; Y < 18; Y++) Z[N][Y] = (Z[N][Y] ?? 0) + q.get([N, Y]);
  return Z;
  function V(N, Y, _) {
    const A = N / (1 - Y * Y), D = C([[A, A * Y, 0], [A * Y, A, 0], [0, 0, A * (1 - Y) / 2]]);
    return O(_ ** 3 / 12, D);
  }
  function ut(N, Y, _) {
    const A = 0.8333333333333334, D = N / (2 * (1 + Y)), T = A * D * _;
    return C([[T, 0], [0, T]]);
  }
  function xt(N, Y, _, A, D) {
    const T = Y * A / N, j = 1 - A * T, E = N / j, P = Y / j, G = A * Y / j, K = C([[E, G, 0], [G, P, 0], [0, 0, _]]);
    return O(D ** 3 / 12, K);
  }
  function et(N, Y) {
    const A = 0.8333333333333334 * N * Y;
    return C([[A, 0], [0, A]]);
  }
  function st(N) {
    const Y = R(2, 18).toArray(), [_, A] = N[0], [D, T] = N[1], [j, E] = N[2], P = 0.5 * ((D - _) * (E - A) - (j - _) * -(A - T)), G = (_ + D + j) / 3, $ = (A + T + E) / 3, K = [G, _, D], tt = [$, A, T], nt = [G, D, j], U = [$, T, E], ot = [G, j, _], Mt = [$, E, A], B = 1 / 3, [at, it, lt, Et] = rt(K, tt), [mt, Dt, jt, kt] = rt(nt, U), [Qt, Kt, zt, Lt] = rt(ot, Mt), bt = R(2, 18).toArray(), Xt = R(2, 18).toArray(), wt = R(2, 18).toArray();
    for (let J = 0; J < 2; J++) for (let S = 0; S < 6; S++) bt[J][S] = B * at[J][S] + it[J][S], bt[J][S + 6] = B * at[J][S] + lt[J][S], bt[J][S + 12] = B * at[J][S], Xt[J][S] = B * mt[J][S], Xt[J][S + 6] = B * mt[J][S] + Dt[J][S], Xt[J][S + 12] = B * mt[J][S] + jt[J][S], wt[J][S] = B * Qt[J][S] + zt[J][S], wt[J][S + 6] = B * Qt[J][S], wt[J][S + 12] = B * Qt[J][S] + Kt[J][S];
    for (let J = 0; J < 2; J++) for (let S = 0; S < 18; S++) bt[J][S] *= Et, Xt[J][S] *= kt, wt[J][S] *= Lt, Y[J][S] = (bt[J][S] + Xt[J][S] + wt[J][S]) / P;
    return Y;
  }
  function rt(N, Y) {
    const _ = R(2, 6).toArray(), A = R(2, 6).toArray(), D = R(2, 6).toArray(), T = N[1] - N[0], j = N[0] - N[2], E = Y[2] - Y[0], P = Y[0] - Y[1], G = N[2] - N[1], $ = Y[1] - Y[2], K = 0.5 * (T * E - j * P), tt = 0.5 * P * j, nt = 0.5 * E * T, U = 0.5 * T * j, ot = 0.5 * P * E;
    return _[0][2] = 0.5 * G / K, _[0][3] = -0.5, _[1][2] = 0.5 * $ / K, _[1][4] = 0.5, A[0][2] = 0.5 * j / K, A[0][3] = 0.5 * tt / K, A[0][4] = 0.5 * U / K, A[1][2] = 0.5 * E / K, A[1][3] = 0.5 * ot / K, A[1][4] = 0.5 * nt / K, D[0][2] = 0.5 * T / K, D[0][3] = -0.5 * nt / K, D[0][4] = -0.5 * U / K, D[1][2] = 0.5 * P / K, D[1][3] = -0.5 * ot / K, D[1][4] = -0.5 * tt / K, [_, A, D, K];
  }
  function At(N) {
    const Y = R(3, 18).toArray(), [_, A] = N[0], [D, T] = N[1], [j, E] = N[2], P = D - _, G = j - _, $ = j - D, K = T - E, tt = E - A, nt = A - T, U = 0.5 * (P * tt - G * -nt), ot = K / (2 * U), Mt = $ / (2 * U), B = tt / (2 * U), at = -G / (2 * U), it = nt / (2 * U), lt = P / (2 * U);
    return Y[0][4] = ot, Y[0][10] = B, Y[0][16] = it, Y[1][3] = -Mt, Y[1][9] = -at, Y[1][15] = -lt, Y[2][3] = -ot, Y[2][4] = Mt, Y[2][9] = -B, Y[2][10] = at, Y[2][15] = -it, Y[2][16] = lt, Y;
  }
  function Yt(N, Y, _) {
    let A = R(9, 9).toArray(), D = R(9, 9).toArray(), T = R(9, 9).toArray(), j = R(9, 3).toArray(), E = R(3, 9).toArray(), P = R(3, 3).toArray(), G = R(3, 3).toArray(), $ = R(3, 3).toArray(), K = R(3, 3).toArray(), tt = R(3, 3).toArray(), nt = R(3, 3).toArray(), U = R(3, 3).toArray(), ot = R(3, 3).toArray();
    const Mt = 1 / 8, B = Mt / 6, at = Mt ** 2 / 4, it = 1, lt = 2, Et = 1, mt = 0, Dt = 1, jt = -1, kt = -1, Qt = -1, Kt = -2, zt = N[0][0], Lt = N[0][1], bt = N[1][0], Xt = N[1][1], wt = N[2][0], J = N[2][1], S = zt - bt, vt = bt - wt, Nt = wt - zt, pt = Lt - Xt, _t = Xt - J, St = J - Lt, ft = -S, dt = -vt, d = -Nt, k = -pt, L = -_t, z = -St, Ft = 0.5 * (ft * St - Nt * -pt), sn = 2 * Ft, I = 4 * Ft, H = 0.5 * _, Gt = Ft * _, gt = ft ** 2 + k ** 2, ht = dt ** 2 + L ** 2, yt = d ** 2 + z ** 2;
    j[0][0] = H * _t, j[0][2] = H * dt, j[1][1] = H * dt, j[1][2] = H * _t, j[2][0] = H * _t * (z - k) * B, j[2][1] = H * dt * (Nt - S) * B, j[2][2] = H * (Nt * z - S * k) * 2 * B, j[3][0] = H * St, j[3][2] = H * d, j[4][1] = H * d, j[4][2] = H * St, j[5][0] = H * St * (k - L) * B, j[5][1] = H * d * (S - vt) * B, j[5][2] = H * (S * k - vt * L) * 2 * B, j[6][0] = H * pt, j[6][2] = H * ft, j[7][1] = H * ft, j[7][2] = H * pt, j[8][0] = H * pt * (L - z) * B, j[8][1] = H * ft * (vt - Nt) * B, j[8][2] = H * (vt * L - Nt * z) * 2 * B, T = O(O(C(j), Y), Tt(C(j))).toArray(), T = O(C(T), 1 / Gt).toArray(), E[0][0] = dt / I, E[0][1] = L / I, E[0][2] = 1, E[0][3] = d / I, E[0][4] = z / I, E[0][6] = ft / I, E[0][7] = k / I, E[1][0] = dt / I, E[1][1] = L / I, E[1][3] = d / I, E[1][4] = z / I, E[1][5] = 1, E[1][6] = ft / I, E[1][7] = k / I, E[2][0] = dt / I, E[2][1] = L / I, E[2][3] = d / I, E[2][4] = z / I, E[2][6] = ft / I, E[2][7] = k / I, E[2][8] = 1;
    const Jt = 1 / (Ft * I);
    P[0][0] = Jt * _t * z * gt, P[0][1] = Jt * St * k * ht, P[0][2] = Jt * pt * L * yt, P[1][0] = Jt * vt * d * gt, P[1][1] = Jt * Nt * ft * ht, P[1][2] = Jt * S * dt * yt, P[2][0] = Jt * (_t * Nt + dt * z) * gt, P[2][1] = Jt * (St * S + d * k) * ht, P[2][2] = Jt * (pt * vt + ft * L) * yt;
    const F = sn / 3;
    G[0][0] = F * it / gt, G[0][1] = F * lt / gt, G[0][2] = F * Et / gt, G[1][0] = F * mt / ht, G[1][1] = F * Dt / ht, G[1][2] = F * jt / ht, G[2][0] = F * kt / yt, G[2][1] = F * Qt / yt, G[2][2] = F * Kt / yt, $[0][0] = F * Kt / gt, $[0][1] = F * kt / gt, $[0][2] = F * Qt / gt, $[1][0] = F * Et / ht, $[1][1] = F * it / ht, $[1][2] = F * lt / ht, $[2][0] = F * jt / yt, $[2][1] = F * mt / yt, $[2][2] = F * Dt / yt, K[0][0] = F * Dt / gt, K[0][1] = F * jt / gt, K[0][2] = F * mt / gt, K[1][0] = F * Qt / ht, K[1][1] = F * Kt / ht, K[1][2] = F * kt / ht, K[2][0] = F * lt / yt, K[2][1] = F * Et / yt, K[2][2] = F * it / yt, tt = O(Ct(C(G), C($)), 0.5).toArray(), nt = O(Ct(C($), C(K)), 0.5).toArray(), U = O(Ct(C(K), C(G)), 0.5).toArray();
    const qt = O(O(Tt(C(P)), Y), C(P));
    return ot = Ct(Ct(O(O(Tt(C(tt)), qt), C(tt)), O(O(Tt(C(nt)), qt), C(nt))), O(O(Tt(C(U)), qt), C(U))).toArray(), ot = O(C(ot), 3 / 4 * at * Gt).toArray(), D = O(O(Tt(C(E)), C(ot)), C(E)).toArray(), A = Ct(C(T), C(D)).toArray(), A;
  }
}
function nn(t, n) {
  const s = t / (1 - n * n);
  return C([[s, s * n, 0], [s * n, s, 0], [0, 0, s * (1 - n) / 2]]);
}
function on(t, n, s, o) {
  const a = n * o / t, e = 1 - o * a, r = t / e, u = n / e, c = o * n / e;
  return C([[r, c, 0], [c, u, 0], [0, 0, s]]);
}
function Sn(t, n, s, o) {
  const a = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() }, e = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() };
  n.forEach((u, c) => {
    var _a, _b, _c, _d;
    const y = u.map((x) => t[x]), p = u.reduce((x, g) => {
      var _a2;
      const X = (_a2 = o.deformations) == null ? void 0 : _a2.get(g);
      return x.concat(X ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (u.length === 2) {
      const x = Ht(y, ((_a = s == null ? void 0 : s.localAngles) == null ? void 0 : _a.get(c)) ?? 0), g = O(x, p), X = un(y, s, c);
      let f = O(X, g);
      const l = (_b = s == null ? void 0 : s.frameLoads) == null ? void 0 : _b.get(c);
      if (l && (l[0] || l[1] || l[2])) {
        const Q = y[0], m = y[1], b = [m[0] - Q[0], m[1] - Q[1], m[2] - Q[2]], M = Math.hypot(b[0], b[1], b[2]);
        if (M > 1e-9) {
          const h = [b[0] / M, b[1] / M, b[2] / M], i = M * M / 12, w = [h[1] * l[2] - h[2] * l[1], h[2] * l[0] - h[0] * l[2], h[0] * l[1] - h[1] * l[0]], Z = [-l[0] * M / 2, -l[1] * M / 2, -l[2] * M / 2, -i * w[0], -i * w[1], -i * w[2], -l[0] * M / 2, -l[1] * M / 2, -l[2] * M / 2, +i * w[0], +i * w[1], +i * w[2]], q = O(x, Z);
          f = f.map((v, V) => v + q[V]);
        }
      }
      a.normals.set(c, [f[0], f[6]]), a.shearsY.set(c, [f[1], f[7]]), a.shearsZ.set(c, [f[2], f[8]]), a.torsions.set(c, [f[3], f[9]]), a.bendingsY.set(c, [f[4], f[10]]), a.bendingsZ.set(c, [f[5], f[11]]);
    } else if (u.length === 4) {
      const x = xn(y, p, s, c);
      e.membraneXX.set(c, x.Nx), e.membraneYY.set(c, x.Ny), e.membraneXY.set(c, x.Nxy), e.bendingXX.set(c, x.Mx), e.bendingYY.set(c, x.My), e.bendingXY.set(c, x.Mxy), e.tranverseShearX.set(c, x.Qx), e.tranverseShearY.set(c, x.Qy), e.vonMises.set(c, x.vonMises);
    } else if (u.length === 3) {
      const x = Ht(y, ((_c = s == null ? void 0 : s.localAngles) == null ? void 0 : _c.get(c)) ?? 0);
      O(x, p);
      const g = An(s, c), X = Yn(y), f = Xn(p), l = wn(y), m = O(1 / (2 * l), O(O(g, X), f)).toArray(), b = ((_d = s.thicknesses) == null ? void 0 : _d.get(c)) ?? 1, M = m[0][0] * b, h = m[1][0] * b, i = m[2][0] * b, w = m[0][1] * (b ** 3 / 12), Z = m[1][1] * (b ** 3 / 12), q = m[2][1] * (b ** 3 / 12);
      e.membraneXX.set(c, M), e.membraneYY.set(c, h), e.membraneXY.set(c, i), e.bendingXX.set(c, w), e.bendingYY.set(c, Z), e.bendingXY.set(c, q);
    }
  });
  const { nodeToCentroidElementIndiciesMap: r } = vn(t, n);
  return n.forEach((u, c) => {
    if (u.length !== 3 && u.length !== 4) return;
    const y = u.length, p = new Array(y).fill(0), x = new Array(y).fill(0), g = new Array(y).fill(0), X = new Array(y).fill(0), f = new Array(y).fill(0), l = new Array(y).fill(0), Q = new Array(y).fill(0), m = new Array(y).fill(0), b = new Array(y).fill(0);
    u.forEach((M, h) => {
      const i = r.get(M) || [], w = (Z) => rn(i.map((q) => Z.get(q) ?? 0));
      p[h] = w(e.membraneXX), x[h] = w(e.membraneYY), g[h] = w(e.membraneXY), X[h] = w(e.bendingXX), f[h] = w(e.bendingYY), l[h] = w(e.bendingXY), Q[h] = w(e.tranverseShearX), m[h] = w(e.tranverseShearY), b[h] = w(e.vonMises);
    }), a.membraneXX.set(c, p), a.membraneYY.set(c, x), a.membraneXY.set(c, g), a.bendingXX.set(c, X), a.bendingYY.set(c, f), a.bendingXY.set(c, l), a.tranverseShearX.set(c, Q), a.tranverseShearY.set(c, m), a.vonMises.set(c, b);
  }), a;
}
function xn(t, n, s, o) {
  var _a, _b, _c;
  const a = ((_a = s.elasticities) == null ? void 0 : _a.get(o)) ?? 0, e = ((_b = s.poissonsRatios) == null ? void 0 : _b.get(o)) ?? 0, r = ((_c = s.thicknesses) == null ? void 0 : _c.get(o)) ?? 1, u = t[0], c = t[1], y = t[2], p = t[3], x = [c[0] - u[0], c[1] - u[1], c[2] - u[2]], g = [y[0] - p[0], y[1] - p[1], y[2] - p[2]];
  let X = [x[0] + g[0], x[1] + g[1], x[2] + g[2]], f = Math.sqrt(X[0] * X[0] + X[1] * X[1] + X[2] * X[2]);
  f < 1e-14 && (f = 1);
  let l = [X[0] / f, X[1] / f, X[2] / f];
  const Q = [y[0] - u[0], y[1] - u[1], y[2] - u[2]], m = [p[0] - c[0], p[1] - c[1], p[2] - c[2]];
  let b = [Q[1] * m[2] - Q[2] * m[1], Q[2] * m[0] - Q[0] * m[2], Q[0] * m[1] - Q[1] * m[0]], M = Math.sqrt(b[0] * b[0] + b[1] * b[1] + b[2] * b[2]);
  M < 1e-14 && (M = 1);
  let h = [b[0] / M, b[1] / M, b[2] / M], i = [h[1] * l[2] - h[2] * l[1], h[2] * l[0] - h[0] * l[2], h[0] * l[1] - h[1] * l[0]], w = Math.sqrt(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
  w < 1e-14 && (w = 1), i = [i[0] / w, i[1] / w, i[2] / w];
  {
    if (Math.abs(h[2]) > 1 - 1e-6) l = [1, 0, 0];
    else {
      const L = [-h[1], h[0], 0], z = Math.hypot(L[0], L[1], L[2]) || 1;
      l = [L[0] / z, L[1] / z, L[2] / z];
    }
    i = [h[1] * l[2] - h[2] * l[1], h[2] * l[0] - h[0] * l[2], h[0] * l[1] - h[1] * l[0]];
    const k = Math.hypot(i[0], i[1], i[2]) || 1;
    i = [i[0] / k, i[1] / k, i[2] / k], l = [i[1] * h[2] - i[2] * h[1], i[2] * h[0] - i[0] * h[2], i[0] * h[1] - i[1] * h[0]];
  }
  const Z = 0.25 * (u[0] + c[0] + y[0] + p[0]), q = 0.25 * (u[1] + c[1] + y[1] + p[1]), v = 0.25 * (u[2] + c[2] + y[2] + p[2]), V = [], ut = [];
  for (let d = 0; d < 4; d++) {
    const k = t[d][0] - Z, L = t[d][1] - q, z = t[d][2] - v;
    V.push(k * l[0] + L * l[1] + z * l[2]), ut.push(k * i[0] + L * i[1] + z * i[2]);
  }
  const xt = [l, i, h], et = new Array(24).fill(0);
  for (let d = 0; d < 4; d++) {
    const k = d * 6, L = d * 6;
    for (let z = 0; z < 3; z++) et[L + z] = xt[z][0] * n[k] + xt[z][1] * n[k + 1] + xt[z][2] * n[k + 2];
    for (let z = 0; z < 3; z++) et[L + 3 + z] = xt[z][0] * n[k + 3] + xt[z][1] * n[k + 4] + xt[z][2] * n[k + 5];
  }
  const st = a / (1 - e * e), rt = [[st * r, st * e * r, 0], [st * e * r, st * r, 0], [0, 0, st * (1 - e) / 2 * r]], At = r * r * r / 12, Yt = [[st * At, st * e * At, 0], [st * e * At, st * At, 0], [0, 0, st * (1 - e) / 2 * At]], N = [-0.25, 0.25, 0.25, -0.25], Y = [-0.25, -0.25, 0.25, 0.25];
  let _ = 0, A = 0, D = 0, T = 0;
  for (let d = 0; d < 4; d++) _ += N[d] * V[d], A += N[d] * ut[d], D += Y[d] * V[d], T += Y[d] * ut[d];
  const j = _ * T - A * D;
  if (Math.abs(j) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  const E = T / j, P = -A / j, G = -D / j, $ = _ / j, K = [], tt = [];
  for (let d = 0; d < 4; d++) K.push(E * N[d] + P * Y[d]), tt.push(G * N[d] + $ * Y[d]);
  let nt = 0, U = 0, ot = 0;
  for (let d = 0; d < 4; d++) {
    const k = et[d * 6 + 0], L = et[d * 6 + 1];
    nt += K[d] * k, U += tt[d] * L, ot += tt[d] * k + K[d] * L;
  }
  const Mt = rt[0][0] * nt + rt[0][1] * U, B = rt[1][0] * nt + rt[1][1] * U, at = rt[2][2] * ot;
  let it = 0, lt = 0, Et = 0;
  for (let d = 0; d < 4; d++) {
    const k = et[d * 6 + 3], L = et[d * 6 + 4];
    it += K[d] * L, lt += -tt[d] * k, Et += tt[d] * L - K[d] * k;
  }
  const mt = Yt[0][0] * it + Yt[0][1] * lt, Dt = Yt[1][0] * it + Yt[1][1] * lt, jt = Yt[2][2] * Et, kt = 5 / 6, Qt = a / (2 * (1 + e)), Kt = kt * Qt * r;
  let zt = 0, Lt = 0;
  const bt = [0.25, 0.25, 0.25, 0.25];
  for (let d = 0; d < 4; d++) {
    const k = et[d * 6 + 2], L = et[d * 6 + 3], z = et[d * 6 + 4];
    zt += K[d] * k + bt[d] * L, Lt += tt[d] * k + bt[d] * z;
  }
  const Xt = Kt * zt, wt = Kt * Lt, J = Mt / r + 6 * mt / (r * r), S = B / r + 6 * Dt / (r * r), vt = at / r + 6 * jt / (r * r), Nt = Math.sqrt(J * J - J * S + S * S + 3 * vt * vt), pt = Mt / r - 6 * mt / (r * r), _t = B / r - 6 * Dt / (r * r), St = at / r - 6 * jt / (r * r), ft = Math.sqrt(pt * pt - pt * _t + _t * _t + 3 * St * St), dt = Math.max(Nt, ft);
  return { Nx: Mt, Ny: B, Nxy: at, Mx: mt, My: Dt, Mxy: jt, Qx: Xt, Qy: wt, vonMises: dt };
}
function An(t, n) {
  var _a, _b, _c, _d, _e;
  const s = ((_a = t.elasticities) == null ? void 0 : _a.get(n)) ?? 0, o = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, a = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, e = ((_d = t.shearModuli) == null ? void 0 : _d.get(n)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(n), o > 0 ? on(s, o, e, a) : nn(s, a);
}
function Yn(t) {
  const [n, s] = t[0], [o, a] = t[1], [e, r] = t[2], u = a - r, c = r - s, y = s - a, p = e - o, x = n - e, g = o - n;
  return C([[u, c, y, 0, 0, 0], [0, 0, 0, p, x, g], [p, x, g, u, c, y]]);
}
function Xn(t) {
  const [n, s, o] = [t[0], t[6], t[12]], [a, e, r] = [t[1], t[7], t[13]], [u, c, y] = [t[4], t[10], t[16]], [p, x, g] = [t[3], t[9], t[15]];
  return C([[n, -u], [s, -c], [o, -y], [a, p], [e, x], [r, g]]);
}
function wn(t) {
  const [n, s] = t[0], [o, a] = t[1], [e, r] = t[2], u = o - n, c = e - n, y = r - s, p = s - a;
  return 0.5 * (u * y - c * -p);
}
function vn(t, n) {
  const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return n.forEach((a, e) => {
    const r = a.map((c) => t[c]), u = Nn(r);
    a.forEach((c) => {
      var _a, _b;
      s.has(c) || s.set(c, []), (_a = s.get(c)) == null ? void 0 : _a.push(u), o.has(c) || o.set(c, []), (_b = o.get(c)) == null ? void 0 : _b.push(e);
    });
  }), { nodeToCentroidNodesMap: s, nodeToCentroidElementIndiciesMap: o };
}
function Nn(t) {
  const n = t.reduce((a, e) => a + e[0], 0) / t.length, s = t.reduce((a, e) => a + e[1], 0) / t.length, o = t.reduce((a, e) => a + e[2], 0) / t.length;
  return [n, s, o];
}
export {
  Sn as a,
  Ht as b,
  un as g
};
