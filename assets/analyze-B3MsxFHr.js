import { s as It, n as Zt, b as Bt, k as Vt, i as Pt, z as R, c as Wt, m as Z, t as Tt, a as Ct, e as O, f as rn } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const W = 1 / Math.sqrt(3);
function qt(t, n) {
  const r = [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)], o = [-0.25 * (1 - n), 0.25 * (1 - n), 0.25 * (1 + n), -0.25 * (1 + n)], i = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: r, dNdxi: o, dNdeta: i };
}
function Ot(t, n, r, o) {
  let i = 0, a = 0, c = 0, u = 0;
  for (let h = 0; h < 4; h++) i += t[h] * r[h], a += t[h] * o[h], c += n[h] * r[h], u += n[h] * o[h];
  const e = i * u - a * c, y = 1 / e, b = [], p = [];
  for (let h = 0; h < 4; h++) b.push(y * (u * t[h] - a * n[h])), p.push(y * (-c * t[h] + i * n[h]));
  return { dNdx: b, dNdy: p, detJ: e };
}
function cn(t, n, r, o, i) {
  const e = et(12, 12), y = r * i / (1 - o * o), b = [[-W, -W], [W, -W], [W, W], [-W, W]], { dNdxi: p, dNdeta: h } = qt(0, 0), { detJ: Y } = Ot(p, h, t, n);
  for (const [l, s] of b) {
    const { dNdxi: X, dNdeta: L } = qt(l, s), { dNdx: q, dNdy: v, detJ: B } = Ot(X, L, t, n);
    Ot(p, h, t, n);
    const st = p.reduce((d, D, T) => d + D * t[T], 0), it = p.reduce((d, D, T) => d + D * n[T], 0), tt = h.reduce((d, D, T) => d + D * t[T], 0), ot = h.reduce((d, D, T) => d + D * n[T], 0), at = 1 / Y, At = at * ot * (-2 * l), Yt = at * -tt * (-2 * l), N = at * -it * (-2 * s), A = at * st * (-2 * s), _ = [[], [], []];
    for (let d = 0; d < 4; d++) _[0].push(q[d], 0), _[1].push(0, v[d]), _[2].push(v[d], q[d]);
    _[0].push(At, 0, N, 0), _[1].push(0, Yt, 0, A), _[2].push(Yt, At, A, N);
    for (let d = 0; d < 12; d++) for (let D = 0; D < 12; D++) {
      let T = 0;
      T += y * (_[0][d] * _[0][D] + o * _[0][d] * _[1][D] + o * _[1][d] * _[0][D] + _[1][d] * _[1][D]), T += y * (1 - o) / 2 * _[2][d] * _[2][D], e[d][D] += T * Math.abs(B);
    }
  }
  const g = et(8, 8), f = et(8, 4), Q = et(4, 8), M = et(4, 4);
  for (let l = 0; l < 8; l++) for (let s = 0; s < 8; s++) g[l][s] = e[l][s];
  for (let l = 0; l < 8; l++) for (let s = 0; s < 4; s++) f[l][s] = e[l][8 + s];
  for (let l = 0; l < 4; l++) for (let s = 0; s < 8; s++) Q[l][s] = e[8 + l][s];
  for (let l = 0; l < 4; l++) for (let s = 0; s < 4; s++) M[l][s] = e[8 + l][8 + s];
  const w = en(M);
  if (!w) return g;
  const x = et(8, 8);
  for (let l = 0; l < 8; l++) for (let s = 0; s < 8; s++) {
    let X = 0;
    for (let L = 0; L < 4; L++) for (let q = 0; q < 4; q++) X += f[l][L] * w[L][q] * Q[q][s];
    x[l][s] = g[l][s] - X;
  }
  return x;
}
function en(t) {
  const n = t.length, r = t.map((o, i) => {
    const a = [...o];
    for (let c = 0; c < n; c++) a.push(i === c ? 1 : 0);
    return a;
  });
  for (let o = 0; o < n; o++) {
    let i = o;
    for (let c = o + 1; c < n; c++) Math.abs(r[c][o]) > Math.abs(r[i][o]) && (i = c);
    if ([r[o], r[i]] = [r[i], r[o]], Math.abs(r[o][o]) < 1e-15) return null;
    const a = r[o][o];
    for (let c = 0; c < 2 * n; c++) r[o][c] /= a;
    for (let c = 0; c < n; c++) {
      if (c === o) continue;
      const u = r[c][o];
      for (let e = 0; e < 2 * n; e++) r[c][e] -= u * r[o][e];
    }
  }
  return r.map((o) => o.slice(n));
}
function an(t, n, r, o, i) {
  const a = et(12, 12), c = [[-W, -W], [W, -W], [W, W], [-W, W]];
  for (const [u, e] of c) {
    const { N: y, dNdxi: b, dNdeta: p } = qt(u, e), { dNdx: h, dNdy: Y, detJ: g } = Ot(b, p, t, n), f = new Array(12).fill(0);
    for (let M = 0; M < 4; M++) f[M * 3] = 0.5 * Y[M], f[M * 3 + 1] = -0.5 * h[M], f[M * 3 + 2] = y[M];
    const Q = i * r * o * Math.abs(g);
    for (let M = 0; M < 12; M++) for (let w = 0; w < 12; w++) a[M][w] += Q * f[M] * f[w];
  }
  return a;
}
function ln(t, n, r, o, i) {
  const a = et(12, 12), c = r * i * i * i / (12 * (1 - o * o)), e = 5 / 6 * r / (2 * (1 + o)) * i, y = [[-W, -W], [W, -W], [W, W], [-W, W]], b = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], p = [];
  for (const h of b) {
    const { N: Y, dNdxi: g, dNdeta: f } = qt(h.xi, h.eta), { dNdx: Q, dNdy: M } = Ot(g, f, t, n), w = et(2, 12);
    for (let x = 0; x < 4; x++) w[0][x * 3] = Q[x], w[0][x * 3 + 1] = -Y[x], w[1][x * 3] = M[x], w[1][x * 3 + 2] = -Y[x];
    p.push(w);
  }
  for (const [h, Y] of y) {
    const { dNdxi: g, dNdeta: f } = qt(h, Y), { dNdx: Q, dNdy: M, detJ: w } = Ot(g, f, t, n), x = et(3, 12);
    for (let v = 0; v < 4; v++) x[0][v * 3 + 1] = Q[v], x[1][v * 3 + 2] = M[v], x[2][v * 3 + 1] = M[v], x[2][v * 3 + 2] = Q[v];
    for (let v = 0; v < 12; v++) for (let B = 0; B < 12; B++) {
      let st = 0;
      st += c * (x[0][v] * x[0][B] + o * x[0][v] * x[1][B] + o * x[1][v] * x[0][B] + x[1][v] * x[1][B]), st += c * (1 - o) / 2 * x[2][v] * x[2][B], a[v][B] += st * Math.abs(w);
    }
    const l = et(2, 12), s = 0.5 * (1 - Y), X = 0.5 * (1 + Y), L = 0.5 * (1 - h), q = 0.5 * (1 + h);
    for (let v = 0; v < 12; v++) l[0][v] = s * p[0][0][v] + X * p[1][0][v], l[1][v] = L * p[2][1][v] + q * p[3][1][v];
    for (let v = 0; v < 12; v++) for (let B = 0; B < 12; B++) a[v][B] += e * (l[0][v] * l[0][B] + l[1][v] * l[1][B]) * Math.abs(w);
  }
  return a;
}
function fn(t, n, r) {
  var _a, _b, _c;
  const o = ((_a = n == null ? void 0 : n.elasticities) == null ? void 0 : _a.get(r)) ?? 0, i = ((_b = n == null ? void 0 : n.poissonsRatios) == null ? void 0 : _b.get(r)) ?? 0.2, a = ((_c = n == null ? void 0 : n.thicknesses) == null ? void 0 : _c.get(r)) ?? 0;
  if (o === 0 || a === 0) return et(24, 24);
  const { localCoords: c } = tn(t), u = c.map((l) => l[0]), e = c.map((l) => l[1]), y = cn(u, e, o, i, a), b = ln(u, e, o, i, a), p = o / (2 * (1 + i)), Y = an(u, e, p, a, 0.5), g = et(24, 24), f = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let l = 0; l < 8; l++) for (let s = 0; s < 8; s++) g[f[l]][f[s]] += y[l][s];
  const Q = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22], M = [[1, 0, 0], [0, 0, -1], [0, 1, 0]], w = et(12, 12);
  for (let l = 0; l < 12; l++) for (let s = 0; s < 12; s++) {
    let X = 0;
    const L = l / 3 | 0, q = l % 3, v = s / 3 | 0, B = s % 3;
    for (let st = 0; st < 3; st++) {
      const it = M[st][q];
      if (it !== 0) for (let tt = 0; tt < 3; tt++) {
        const ot = M[tt][B];
        ot !== 0 && (X += it * b[L * 3 + st][v * 3 + tt] * ot);
      }
    }
    w[l][s] = X;
  }
  for (let l = 0; l < 12; l++) for (let s = 0; s < 12; s++) g[Q[l]][Q[s]] += w[l][s];
  const x = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let l = 0; l < 12; l++) for (let s = 0; s < 12; s++) g[x[l]][x[s]] += Y[l][s];
  return g;
}
function gn(t) {
  const { localX: n, localY: r, localZ: o } = tn(t), i = [[n[0], n[1], n[2]], [r[0], r[1], r[2]], [o[0], o[1], o[2]]], a = et(24, 24);
  for (let c = 0; c < 4; c++) for (let u = 0; u < 2; u++) {
    const e = c * 6 + u * 3;
    for (let y = 0; y < 3; y++) for (let b = 0; b < 3; b++) a[e + y][e + b] = i[y][b];
  }
  return a;
}
function tn(t) {
  const n = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], r = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], o = $t(n, r), i = Math.sqrt(o[0] ** 2 + o[1] ** 2 + o[2] ** 2), a = o.map((g) => g / i), c = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], u = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2), e = c.map((g) => g / u), y = $t(a, e), b = t.map((g) => g[0]).reduce((g, f) => g + f) / 4, p = t.map((g) => g[1]).reduce((g, f) => g + f) / 4, h = t.map((g) => g[2]).reduce((g, f) => g + f) / 4, Y = t.map((g) => {
    const f = g[0] - b, Q = g[1] - p, M = g[2] - h;
    return [f * e[0] + Q * e[1] + M * e[2], f * y[0] + Q * y[1] + M * y[2]];
  });
  return { localX: e, localY: y, localZ: a, localCoords: Y };
}
function $t(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function et(t, n) {
  return Array.from({ length: t }, () => Array(n).fill(0));
}
function Ht(t, n = 0) {
  if (t.length === 2) return hn(t, n);
  if (t.length === 3) return yn(t);
  if (t.length === 4) return gn(t);
}
function hn(t, n = 0) {
  const r = (b) => {
    if (Math.abs(n) < 1e-12) return b;
    const p = n * Math.PI / 180, h = Math.cos(p), Y = Math.sin(p);
    return [b[0], [h * b[1][0] + Y * b[2][0], h * b[1][1] + Y * b[2][1], h * b[1][2] + Y * b[2][2]], [-Y * b[1][0] + h * b[2][0], -Y * b[1][1] + h * b[2][1], -Y * b[1][2] + h * b[2][2]]];
  }, o = It(t[1], t[0]), i = Zt(o), a = Bt(o, [1, 0, 0]) / i, c = Bt(o, [0, 1, 0]) / i, u = Bt(o, [0, 0, 1]) / i, e = Math.sqrt(a ** 2 + c ** 2);
  if (e < 1e-9) {
    const b = u > 0 ? 1 : -1, p = [[0, 0, b], [1, 0, 0], [0, b, 0]];
    return Vt(Pt(4), r(p)).toArray();
  }
  const y = [[a, c, u], [-a * u / e, -c * u / e, e], [c / e, -a / e, 0]];
  return Vt(Pt(4), r(y)).toArray();
}
function yn(t) {
  const a = [t[0], t[1], t[2]], c = R(3, 3).toArray();
  for (let s = 0; s < 3; s++) for (let X = 0; X < 3; X++) c[s][X] = a[X][s];
  const u = [-1, 1, 0], e = [-1, 0, 1], y = R(3, 2).toArray();
  for (let s = 0; s < 3; s++) for (let X = 0; X < 3; X++) y[s][0] += c[s][X] * u[X], y[s][1] += c[s][X] * e[X];
  const b = y.map((s) => s[0]), p = y.map((s) => s[1]);
  let h = Wt(b, p), Y = Zt(h);
  if (Y === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), R(18, 18).toArray();
  h = h.map((s) => s / Y);
  const g = [...h], f = Pt(3).toArray(), Q = h[0];
  let M;
  if (Math.abs(Q) > 1 - 1e-10) {
    const s = h[2];
    M = f.map((X, L) => X[2] - s * h[L]);
  } else M = f.map((s, X) => s[0] - Q * h[X]);
  if (Y = Zt(M), Y === 0) return console.warn("Degenerate local X-axis detected."), R(18, 18).toArray();
  M = M.map((s) => s / Y);
  let w = Wt(g, M);
  if (Y = Zt(w), Y === 0) return console.warn("Degenerate local Y-axis detected."), R(18, 18).toArray();
  w = w.map((s) => s / Y);
  const x = [M, w, g], l = R(18, 18).toArray();
  for (let s = 0; s < 3; s++) {
    const X = s * 6, L = X + 3;
    for (let q = 0; q < 3; q++) for (let v = 0; v < 3; v++) l[X + q][X + v] = x[q][v], l[L + q][L + v] = x[q][v];
  }
  return l;
}
function un(t, n, r) {
  var _a, _b;
  if (t.length === 2) {
    let o = pn(t, n, r);
    const i = (_a = n == null ? void 0 : n.partialFixitySprings) == null ? void 0 : _a.get(r);
    i && (o = Mn(o, i));
    const a = (_b = n == null ? void 0 : n.momentReleases) == null ? void 0 : _b.get(r);
    return a && (o = bn(o, a)), o;
  }
  if (t.length === 3) return dn(t, n, r);
  if (t.length === 4) return fn(t, n, r);
}
function Mn(t, n) {
  const r = t.map((i) => [...i]), o = Math.min(n.length, 12);
  for (let i = 0; i < o; i++) n[i] > 1e-12 && (r[i][i] += n[i]);
  return r;
}
function bn(t, n) {
  const r = [];
  if (n.length >= 12) for (let g = 0; g < 12; g++) n[g] && r.push(g);
  else {
    const g = [3, 4, 5, 9, 10, 11];
    for (let f = 0; f < Math.min(n.length, 6); f++) n[f] && r.push(g[f]);
  }
  if (r.length === 0) return t;
  const o = t.length, i = [];
  for (let g = 0; g < o; g++) r.includes(g) || i.push(g);
  const a = i.length, c = r.length, u = Array.from({ length: c }, (g, f) => Array.from({ length: c }, (Q, M) => t[r[f]][r[M]])), e = Array.from({ length: a }, (g, f) => Array.from({ length: c }, (Q, M) => t[i[f]][r[M]])), y = Array.from({ length: c }, (g, f) => Array.from({ length: a }, (Q, M) => t[r[f]][i[M]])), b = mn(u);
  if (!b) return t;
  const p = Ut(e, b), h = Ut(p, y), Y = Array.from({ length: o }, () => Array(o).fill(0));
  for (let g = 0; g < a; g++) for (let f = 0; f < a; f++) Y[i[g]][i[f]] = t[i[g]][i[f]] - h[g][f];
  return Y;
}
function Ut(t, n) {
  const r = t.length, o = n[0].length, i = n.length, a = Array.from({ length: r }, () => Array(o).fill(0));
  for (let c = 0; c < r; c++) for (let u = 0; u < o; u++) for (let e = 0; e < i; e++) a[c][u] += t[c][e] * n[e][u];
  return a;
}
function mn(t) {
  const n = t.length, r = t.map((o, i) => {
    const a = [...o];
    for (let c = 0; c < n; c++) a.push(i === c ? 1 : 0);
    return a;
  });
  for (let o = 0; o < n; o++) {
    let i = o;
    for (let c = o + 1; c < n; c++) Math.abs(r[c][o]) > Math.abs(r[i][o]) && (i = c);
    if ([r[o], r[i]] = [r[i], r[o]], Math.abs(r[o][o]) < 1e-15) return null;
    const a = r[o][o];
    for (let c = 0; c < 2 * n; c++) r[o][c] /= a;
    for (let c = 0; c < n; c++) {
      if (c === o) continue;
      const u = r[c][o];
      for (let e = 0; e < 2 * n; e++) r[c][e] -= u * r[o][e];
    }
  }
  return r.map((o) => o.slice(n));
}
function pn(t, n, r) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const o = ((_a = n == null ? void 0 : n.momentsOfInertiaZ) == null ? void 0 : _a.get(r)) ?? 0, i = ((_b = n == null ? void 0 : n.momentsOfInertiaY) == null ? void 0 : _b.get(r)) ?? 0, a = ((_c = n == null ? void 0 : n.elasticities) == null ? void 0 : _c.get(r)) ?? 0, c = ((_d = n == null ? void 0 : n.areas) == null ? void 0 : _d.get(r)) ?? 0, u = ((_e = n == null ? void 0 : n.shearModuli) == null ? void 0 : _e.get(r)) ?? 0, e = ((_f = n == null ? void 0 : n.torsionalConstants) == null ? void 0 : _f.get(r)) ?? 0, y = Zt(It(t[0], t[1]));
  let b = ((_g = n == null ? void 0 : n.shearAreasY) == null ? void 0 : _g.get(r)) ?? 0, p = ((_h = n == null ? void 0 : n.shearAreasZ) == null ? void 0 : _h.get(r)) ?? 0;
  b === 0 && p === 0 && c > 0 && u > 0 && (b = p = 5 / 6 * c);
  const h = p > 0 && u > 0 ? 12 * a * o / (u * p * y ** 2) : 0, Y = b > 0 && u > 0 ? 12 * a * i / (u * b * y ** 2) : 0, g = a * c / y, f = u * e / y, Q = 12 * a * o / y ** 3 / (1 + h), M = 6 * a * o / y ** 2 / (1 + h), w = 4 * a * o / y * (1 + h / 4) / (1 + h), x = 2 * a * o / y * (1 - h / 2) / (1 + h), l = 12 * a * i / y ** 3 / (1 + Y), s = 6 * a * i / y ** 2 / (1 + Y), X = 4 * a * i / y * (1 + Y / 4) / (1 + Y), L = 2 * a * i / y * (1 - Y / 2) / (1 + Y);
  return [[g, 0, 0, 0, 0, 0, -g, 0, 0, 0, 0, 0], [0, Q, 0, 0, 0, M, 0, -Q, 0, 0, 0, M], [0, 0, l, 0, -s, 0, 0, 0, -l, 0, -s, 0], [0, 0, 0, f, 0, 0, 0, 0, 0, -f, 0, 0], [0, 0, -s, 0, X, 0, 0, 0, s, 0, L, 0], [0, M, 0, 0, 0, w, 0, -M, 0, 0, 0, x], [-g, 0, 0, 0, 0, 0, g, 0, 0, 0, 0, 0], [0, -Q, 0, 0, 0, -M, 0, Q, 0, 0, 0, -M], [0, 0, -l, 0, s, 0, 0, 0, l, 0, s, 0], [0, 0, 0, -f, 0, 0, 0, 0, 0, f, 0, 0], [0, 0, -s, 0, L, 0, 0, 0, s, 0, X, 0], [0, M, 0, 0, 0, x, 0, -M, 0, 0, 0, w]];
}
function dn(t, n, r) {
  var _a, _b, _c, _d, _e;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(r)) ?? 0, i = ((_b = n.elasticitiesOrthogonal) == null ? void 0 : _b.get(r)) ?? 0, a = ((_c = n.poissonsRatios) == null ? void 0 : _c.get(r)) ?? 0, c = ((_d = n.shearModuli) == null ? void 0 : _d.get(r)) ?? 0, u = ((_e = n.thicknesses) == null ? void 0 : _e.get(r)) ?? 0, e = i > 0, y = e ? it(o, i, c, a, u) : B(o, a, u), b = e ? tt(c, u) : st(o, a, u), p = e ? on(o, i, c, a) : nn(o, a), h = t.map(([N, A]) => [N, A]), Y = h[1][0] - h[0][0], g = h[2][0] - h[0][0], f = h[0][1] - h[1][1], Q = h[2][1] - h[0][1], M = 0.5 * (Y * Q - g * -f), w = ot(h), x = At(h), l = Yt(h, p, u), s = Z(Z(Tt(w), b), w), X = Z(Z(Tt(x), y), x), L = R(18, 18).toArray(), q = Z(Ct(s, X), M), v = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let N = 0; N < 3; N++) for (let A = 0; A < 3; A++) for (let _ = 0; _ < 3; _++) {
    const d = v[N][A], D = v[_][A];
    L[d][D] = l[N * 3 + A][_ * 3 + A];
  }
  for (let N = 0; N < 18; N++) for (let A = 0; A < 18; A++) L[N][A] = (L[N][A] ?? 0) + q.get([N, A]);
  return L;
  function B(N, A, _) {
    const d = N / (1 - A * A), D = O([[d, d * A, 0], [d * A, d, 0], [0, 0, d * (1 - A) / 2]]);
    return Z(_ ** 3 / 12, D);
  }
  function st(N, A, _) {
    const d = 0.8333333333333334, D = N / (2 * (1 + A)), T = d * D * _;
    return O([[T, 0], [0, T]]);
  }
  function it(N, A, _, d, D) {
    const T = A * d / N, j = 1 - d * T, K = N / j, G = A / j, V = d * A / j, E = O([[K, V, 0], [V, G, 0], [0, 0, _]]);
    return Z(D ** 3 / 12, E);
  }
  function tt(N, A) {
    const d = 0.8333333333333334 * N * A;
    return O([[d, 0], [0, d]]);
  }
  function ot(N) {
    const A = R(2, 18).toArray(), [_, d] = N[0], [D, T] = N[1], [j, K] = N[2], G = 0.5 * ((D - _) * (K - d) - (j - _) * -(d - T)), V = (_ + D + j) / 3, $ = (d + T + K) / 3, E = [V, _, D], nt = [$, d, T], rt = [V, D, j], U = [$, T, K], ct = [V, j, _], bt = [$, K, d], P = 1 / 3, [lt, ft, gt, Kt] = at(E, nt), [mt, Dt, jt, kt] = at(rt, U), [Qt, Et, zt, Lt] = at(ct, bt), pt = R(2, 18).toArray(), Xt = R(2, 18).toArray(), wt = R(2, 18).toArray();
    for (let J = 0; J < 2; J++) for (let S = 0; S < 6; S++) pt[J][S] = P * lt[J][S] + ft[J][S], pt[J][S + 6] = P * lt[J][S] + gt[J][S], pt[J][S + 12] = P * lt[J][S], Xt[J][S] = P * mt[J][S], Xt[J][S + 6] = P * mt[J][S] + Dt[J][S], Xt[J][S + 12] = P * mt[J][S] + jt[J][S], wt[J][S] = P * Qt[J][S] + zt[J][S], wt[J][S + 6] = P * Qt[J][S], wt[J][S + 12] = P * Qt[J][S] + Et[J][S];
    for (let J = 0; J < 2; J++) for (let S = 0; S < 18; S++) pt[J][S] *= Kt, Xt[J][S] *= kt, wt[J][S] *= Lt, A[J][S] = (pt[J][S] + Xt[J][S] + wt[J][S]) / G;
    return A;
  }
  function at(N, A) {
    const _ = R(2, 6).toArray(), d = R(2, 6).toArray(), D = R(2, 6).toArray(), T = N[1] - N[0], j = N[0] - N[2], K = A[2] - A[0], G = A[0] - A[1], V = N[2] - N[1], $ = A[1] - A[2], E = 0.5 * (T * K - j * G), nt = 0.5 * G * j, rt = 0.5 * K * T, U = 0.5 * T * j, ct = 0.5 * G * K;
    return _[0][2] = 0.5 * V / E, _[0][3] = -0.5, _[1][2] = 0.5 * $ / E, _[1][4] = 0.5, d[0][2] = 0.5 * j / E, d[0][3] = 0.5 * nt / E, d[0][4] = 0.5 * U / E, d[1][2] = 0.5 * K / E, d[1][3] = 0.5 * ct / E, d[1][4] = 0.5 * rt / E, D[0][2] = 0.5 * T / E, D[0][3] = -0.5 * rt / E, D[0][4] = -0.5 * U / E, D[1][2] = 0.5 * G / E, D[1][3] = -0.5 * ct / E, D[1][4] = -0.5 * nt / E, [_, d, D, E];
  }
  function At(N) {
    const A = R(3, 18).toArray(), [_, d] = N[0], [D, T] = N[1], [j, K] = N[2], G = D - _, V = j - _, $ = j - D, E = T - K, nt = K - d, rt = d - T, U = 0.5 * (G * nt - V * -rt), ct = E / (2 * U), bt = $ / (2 * U), P = nt / (2 * U), lt = -V / (2 * U), ft = rt / (2 * U), gt = G / (2 * U);
    return A[0][4] = ct, A[0][10] = P, A[0][16] = ft, A[1][3] = -bt, A[1][9] = -lt, A[1][15] = -gt, A[2][3] = -ct, A[2][4] = bt, A[2][9] = -P, A[2][10] = lt, A[2][15] = -ft, A[2][16] = gt, A;
  }
  function Yt(N, A, _) {
    let d = R(9, 9).toArray(), D = R(9, 9).toArray(), T = R(9, 9).toArray(), j = R(9, 3).toArray(), K = R(3, 9).toArray(), G = R(3, 3).toArray(), V = R(3, 3).toArray(), $ = R(3, 3).toArray(), E = R(3, 3).toArray(), nt = R(3, 3).toArray(), rt = R(3, 3).toArray(), U = R(3, 3).toArray(), ct = R(3, 3).toArray();
    const bt = 1 / 8, P = bt / 6, lt = bt ** 2 / 4, ft = 1, gt = 2, Kt = 1, mt = 0, Dt = 1, jt = -1, kt = -1, Qt = -1, Et = -2, zt = N[0][0], Lt = N[0][1], pt = N[1][0], Xt = N[1][1], wt = N[2][0], J = N[2][1], S = zt - pt, vt = pt - wt, Nt = wt - zt, dt = Lt - Xt, _t = Xt - J, St = J - Lt, ht = -S, xt = -vt, m = -Nt, k = -dt, C = -_t, z = -St, Rt = 0.5 * (ht * St - Nt * -dt), sn = 2 * Rt, I = 4 * Rt, H = 0.5 * _, Gt = Rt * _, yt = ht ** 2 + k ** 2, ut = xt ** 2 + C ** 2, Mt = m ** 2 + z ** 2;
    j[0][0] = H * _t, j[0][2] = H * xt, j[1][1] = H * xt, j[1][2] = H * _t, j[2][0] = H * _t * (z - k) * P, j[2][1] = H * xt * (Nt - S) * P, j[2][2] = H * (Nt * z - S * k) * 2 * P, j[3][0] = H * St, j[3][2] = H * m, j[4][1] = H * m, j[4][2] = H * St, j[5][0] = H * St * (k - C) * P, j[5][1] = H * m * (S - vt) * P, j[5][2] = H * (S * k - vt * C) * 2 * P, j[6][0] = H * dt, j[6][2] = H * ht, j[7][1] = H * ht, j[7][2] = H * dt, j[8][0] = H * dt * (C - z) * P, j[8][1] = H * ht * (vt - Nt) * P, j[8][2] = H * (vt * C - Nt * z) * 2 * P, T = Z(Z(O(j), A), Tt(O(j))).toArray(), T = Z(O(T), 1 / Gt).toArray(), K[0][0] = xt / I, K[0][1] = C / I, K[0][2] = 1, K[0][3] = m / I, K[0][4] = z / I, K[0][6] = ht / I, K[0][7] = k / I, K[1][0] = xt / I, K[1][1] = C / I, K[1][3] = m / I, K[1][4] = z / I, K[1][5] = 1, K[1][6] = ht / I, K[1][7] = k / I, K[2][0] = xt / I, K[2][1] = C / I, K[2][3] = m / I, K[2][4] = z / I, K[2][6] = ht / I, K[2][7] = k / I, K[2][8] = 1;
    const Jt = 1 / (Rt * I);
    G[0][0] = Jt * _t * z * yt, G[0][1] = Jt * St * k * ut, G[0][2] = Jt * dt * C * Mt, G[1][0] = Jt * vt * m * yt, G[1][1] = Jt * Nt * ht * ut, G[1][2] = Jt * S * xt * Mt, G[2][0] = Jt * (_t * Nt + xt * z) * yt, G[2][1] = Jt * (St * S + m * k) * ut, G[2][2] = Jt * (dt * vt + ht * C) * Mt;
    const F = sn / 3;
    V[0][0] = F * ft / yt, V[0][1] = F * gt / yt, V[0][2] = F * Kt / yt, V[1][0] = F * mt / ut, V[1][1] = F * Dt / ut, V[1][2] = F * jt / ut, V[2][0] = F * kt / Mt, V[2][1] = F * Qt / Mt, V[2][2] = F * Et / Mt, $[0][0] = F * Et / yt, $[0][1] = F * kt / yt, $[0][2] = F * Qt / yt, $[1][0] = F * Kt / ut, $[1][1] = F * ft / ut, $[1][2] = F * gt / ut, $[2][0] = F * jt / Mt, $[2][1] = F * mt / Mt, $[2][2] = F * Dt / Mt, E[0][0] = F * Dt / yt, E[0][1] = F * jt / yt, E[0][2] = F * mt / yt, E[1][0] = F * Qt / ut, E[1][1] = F * Et / ut, E[1][2] = F * kt / ut, E[2][0] = F * gt / Mt, E[2][1] = F * Kt / Mt, E[2][2] = F * ft / Mt, nt = Z(Ct(O(V), O($)), 0.5).toArray(), rt = Z(Ct(O($), O(E)), 0.5).toArray(), U = Z(Ct(O(E), O(V)), 0.5).toArray();
    const Ft = Z(Z(Tt(O(G)), A), O(G));
    return ct = Ct(Ct(Z(Z(Tt(O(nt)), Ft), O(nt)), Z(Z(Tt(O(rt)), Ft), O(rt))), Z(Z(Tt(O(U)), Ft), O(U))).toArray(), ct = Z(O(ct), 3 / 4 * lt * Gt).toArray(), D = Z(Z(Tt(O(K)), O(ct)), O(K)).toArray(), d = Ct(O(T), O(D)).toArray(), d;
  }
}
function nn(t, n) {
  const r = t / (1 - n * n);
  return O([[r, r * n, 0], [r * n, r, 0], [0, 0, r * (1 - n) / 2]]);
}
function on(t, n, r, o) {
  const i = n * o / t, a = 1 - o * i, c = t / a, u = n / a, e = o * n / a;
  return O([[c, e, 0], [e, u, 0], [0, 0, r]]);
}
function Sn(t, n, r, o) {
  const i = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() }, a = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() };
  n.forEach((u, e) => {
    var _a, _b, _c, _d;
    const y = u.map((p) => t[p]), b = u.reduce((p, h) => {
      var _a2;
      const Y = (_a2 = o.deformations) == null ? void 0 : _a2.get(h);
      return p.concat(Y ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (u.length === 2) {
      const p = Ht(y, ((_a = r == null ? void 0 : r.localAngles) == null ? void 0 : _a.get(e)) ?? 0), h = Z(p, b), Y = un(y, r, e);
      let g = Z(Y, h);
      const f = (_b = r == null ? void 0 : r.frameLoads) == null ? void 0 : _b.get(e);
      if (f && (f[0] || f[1] || f[2])) {
        const Q = y[0], M = y[1], w = [M[0] - Q[0], M[1] - Q[1], M[2] - Q[2]], x = Math.hypot(w[0], w[1], w[2]);
        if (x > 1e-9) {
          const l = [w[0] / x, w[1] / x, w[2] / x], s = x * x / 12, X = [l[1] * f[2] - l[2] * f[1], l[2] * f[0] - l[0] * f[2], l[0] * f[1] - l[1] * f[0]], L = [-f[0] * x / 2, -f[1] * x / 2, -f[2] * x / 2, -s * X[0], -s * X[1], -s * X[2], -f[0] * x / 2, -f[1] * x / 2, -f[2] * x / 2, +s * X[0], +s * X[1], +s * X[2]], q = Z(p, L);
          g = g.map((v, B) => v + q[B]);
        }
      }
      i.normals.set(e, [g[0], g[6]]), i.shearsY.set(e, [g[1], g[7]]), i.shearsZ.set(e, [g[2], g[8]]), i.torsions.set(e, [g[3], g[9]]), i.bendingsY.set(e, [g[4], g[10]]), i.bendingsZ.set(e, [g[5], g[11]]);
    } else if (u.length === 4) {
      const p = xn(y, b, r, e);
      a.membraneXX.set(e, p.Nx), a.membraneYY.set(e, p.Ny), a.membraneXY.set(e, p.Nxy), a.bendingXX.set(e, p.Mx), a.bendingYY.set(e, p.My), a.bendingXY.set(e, p.Mxy), a.tranverseShearX.set(e, p.Qx), a.tranverseShearY.set(e, p.Qy), a.vonMises.set(e, p.vonMises);
    } else if (u.length === 3) {
      const p = Ht(y, ((_c = r == null ? void 0 : r.localAngles) == null ? void 0 : _c.get(e)) ?? 0);
      Z(p, b);
      const h = An(r, e), Y = Yn(y), g = Xn(b), f = wn(y), M = Z(1 / (2 * f), Z(Z(h, Y), g)).toArray(), w = ((_d = r.thicknesses) == null ? void 0 : _d.get(e)) ?? 1, x = M[0][0] * w, l = M[1][0] * w, s = M[2][0] * w, X = M[0][1] * (w ** 3 / 12), L = M[1][1] * (w ** 3 / 12), q = M[2][1] * (w ** 3 / 12);
      a.membraneXX.set(e, x), a.membraneYY.set(e, l), a.membraneXY.set(e, s), a.bendingXX.set(e, X), a.bendingYY.set(e, L), a.bendingXY.set(e, q);
    }
  });
  const { nodeToCentroidElementIndiciesMap: c } = vn(t, n);
  return n.forEach((u, e) => {
    if (u.length !== 3 && u.length !== 4) return;
    const y = u.length, b = new Array(y).fill(0), p = new Array(y).fill(0), h = new Array(y).fill(0), Y = new Array(y).fill(0), g = new Array(y).fill(0), f = new Array(y).fill(0), Q = new Array(y).fill(0), M = new Array(y).fill(0), w = new Array(y).fill(0);
    u.forEach((x, l) => {
      const s = c.get(x) || [], X = (L) => rn(s.map((q) => L.get(q) ?? 0));
      b[l] = X(a.membraneXX), p[l] = X(a.membraneYY), h[l] = X(a.membraneXY), Y[l] = X(a.bendingXX), g[l] = X(a.bendingYY), f[l] = X(a.bendingXY), Q[l] = X(a.tranverseShearX), M[l] = X(a.tranverseShearY), w[l] = X(a.vonMises);
    }), i.membraneXX.set(e, b), i.membraneYY.set(e, p), i.membraneXY.set(e, h), i.bendingXX.set(e, Y), i.bendingYY.set(e, g), i.bendingXY.set(e, f), i.tranverseShearX.set(e, Q), i.tranverseShearY.set(e, M), i.vonMises.set(e, w);
  }), i;
}
function xn(t, n, r, o) {
  var _a, _b, _c;
  const i = ((_a = r.elasticities) == null ? void 0 : _a.get(o)) ?? 0, a = ((_b = r.poissonsRatios) == null ? void 0 : _b.get(o)) ?? 0, c = ((_c = r.thicknesses) == null ? void 0 : _c.get(o)) ?? 1, u = t[0], e = t[1], y = t[2], b = t[3], p = [e[0] - u[0], e[1] - u[1], e[2] - u[2]], h = [y[0] - b[0], y[1] - b[1], y[2] - b[2]];
  let Y = [p[0] + h[0], p[1] + h[1], p[2] + h[2]], g = Math.sqrt(Y[0] * Y[0] + Y[1] * Y[1] + Y[2] * Y[2]);
  g < 1e-14 && (g = 1);
  let f = [Y[0] / g, Y[1] / g, Y[2] / g];
  const Q = [y[0] - u[0], y[1] - u[1], y[2] - u[2]], M = [b[0] - e[0], b[1] - e[1], b[2] - e[2]];
  let w = [Q[1] * M[2] - Q[2] * M[1], Q[2] * M[0] - Q[0] * M[2], Q[0] * M[1] - Q[1] * M[0]], x = Math.sqrt(w[0] * w[0] + w[1] * w[1] + w[2] * w[2]);
  x < 1e-14 && (x = 1);
  let l = [w[0] / x, w[1] / x, w[2] / x], s = [l[1] * f[2] - l[2] * f[1], l[2] * f[0] - l[0] * f[2], l[0] * f[1] - l[1] * f[0]], X = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]);
  X < 1e-14 && (X = 1), s = [s[0] / X, s[1] / X, s[2] / X];
  {
    if (Math.abs(l[2]) > 1 - 1e-6) f = [1, 0, 0];
    else {
      const C = [-l[1], l[0], 0], z = Math.hypot(C[0], C[1], C[2]) || 1;
      f = [C[0] / z, C[1] / z, C[2] / z];
    }
    s = [l[1] * f[2] - l[2] * f[1], l[2] * f[0] - l[0] * f[2], l[0] * f[1] - l[1] * f[0]];
    const k = Math.hypot(s[0], s[1], s[2]) || 1;
    s = [s[0] / k, s[1] / k, s[2] / k], f = [s[1] * l[2] - s[2] * l[1], s[2] * l[0] - s[0] * l[2], s[0] * l[1] - s[1] * l[0]];
  }
  const L = 0.25 * (u[0] + e[0] + y[0] + b[0]), q = 0.25 * (u[1] + e[1] + y[1] + b[1]), v = 0.25 * (u[2] + e[2] + y[2] + b[2]), B = [], st = [];
  for (let m = 0; m < 4; m++) {
    const k = t[m][0] - L, C = t[m][1] - q, z = t[m][2] - v;
    B.push(k * f[0] + C * f[1] + z * f[2]), st.push(k * s[0] + C * s[1] + z * s[2]);
  }
  const it = [f, s, l], tt = new Array(24).fill(0);
  for (let m = 0; m < 4; m++) {
    const k = m * 6, C = m * 6;
    for (let z = 0; z < 3; z++) tt[C + z] = it[z][0] * n[k] + it[z][1] * n[k + 1] + it[z][2] * n[k + 2];
    for (let z = 0; z < 3; z++) tt[C + 3 + z] = it[z][0] * n[k + 3] + it[z][1] * n[k + 4] + it[z][2] * n[k + 5];
  }
  const ot = i / (1 - a * a), at = [[ot * c, ot * a * c, 0], [ot * a * c, ot * c, 0], [0, 0, ot * (1 - a) / 2 * c]], At = c * c * c / 12, Yt = [[ot * At, ot * a * At, 0], [ot * a * At, ot * At, 0], [0, 0, ot * (1 - a) / 2 * At]], N = [-0.25, 0.25, 0.25, -0.25], A = [-0.25, -0.25, 0.25, 0.25];
  let _ = 0, d = 0, D = 0, T = 0;
  for (let m = 0; m < 4; m++) _ += N[m] * B[m], d += N[m] * st[m], D += A[m] * B[m], T += A[m] * st[m];
  const j = _ * T - d * D;
  if (Math.abs(j) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  const K = T / j, G = -d / j, V = -D / j, $ = _ / j, E = [], nt = [];
  for (let m = 0; m < 4; m++) E.push(K * N[m] + G * A[m]), nt.push(V * N[m] + $ * A[m]);
  let rt = 0, U = 0, ct = 0;
  for (let m = 0; m < 4; m++) {
    const k = tt[m * 6 + 0], C = tt[m * 6 + 1];
    rt += E[m] * k, U += nt[m] * C, ct += nt[m] * k + E[m] * C;
  }
  const bt = at[0][0] * rt + at[0][1] * U, P = at[1][0] * rt + at[1][1] * U, lt = at[2][2] * ct;
  let ft = 0, gt = 0, Kt = 0;
  for (let m = 0; m < 4; m++) {
    const k = tt[m * 6 + 3], C = tt[m * 6 + 4];
    ft += E[m] * C, gt += -nt[m] * k, Kt += nt[m] * C - E[m] * k;
  }
  const mt = Yt[0][0] * ft + Yt[0][1] * gt, Dt = Yt[1][0] * ft + Yt[1][1] * gt, jt = Yt[2][2] * Kt, kt = 5 / 6, Qt = i / (2 * (1 + a)), Et = kt * Qt * c;
  let zt = 0, Lt = 0;
  const pt = [0.25, 0.25, 0.25, 0.25];
  for (let m = 0; m < 4; m++) {
    const k = tt[m * 6 + 2], C = tt[m * 6 + 3], z = tt[m * 6 + 4];
    zt += E[m] * k + pt[m] * C, Lt += nt[m] * k + pt[m] * z;
  }
  const Xt = Et * zt, wt = Et * Lt, J = bt / c + 6 * mt / (c * c), S = P / c + 6 * Dt / (c * c), vt = lt / c + 6 * jt / (c * c), Nt = Math.sqrt(J * J - J * S + S * S + 3 * vt * vt), dt = bt / c - 6 * mt / (c * c), _t = P / c - 6 * Dt / (c * c), St = lt / c - 6 * jt / (c * c), ht = Math.sqrt(dt * dt - dt * _t + _t * _t + 3 * St * St), xt = Math.max(Nt, ht);
  return { Nx: bt, Ny: P, Nxy: lt, Mx: mt, My: Dt, Mxy: jt, Qx: Xt, Qy: wt, vonMises: xt };
}
function An(t, n) {
  var _a, _b, _c, _d, _e;
  const r = ((_a = t.elasticities) == null ? void 0 : _a.get(n)) ?? 0, o = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, i = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, a = ((_d = t.shearModuli) == null ? void 0 : _d.get(n)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(n), o > 0 ? on(r, o, a, i) : nn(r, i);
}
function Yn(t) {
  const [n, r] = t[0], [o, i] = t[1], [a, c] = t[2], u = i - c, e = c - r, y = r - i, b = a - o, p = n - a, h = o - n;
  return O([[u, e, y, 0, 0, 0], [0, 0, 0, b, p, h], [b, p, h, u, e, y]]);
}
function Xn(t) {
  const [n, r, o] = [t[0], t[6], t[12]], [i, a, c] = [t[1], t[7], t[13]], [u, e, y] = [t[4], t[10], t[16]], [b, p, h] = [t[3], t[9], t[15]];
  return O([[n, -u], [r, -e], [o, -y], [i, b], [a, p], [c, h]]);
}
function wn(t) {
  const [n, r] = t[0], [o, i] = t[1], [a, c] = t[2], u = o - n, e = a - n, y = c - r, b = r - i;
  return 0.5 * (u * y - e * -b);
}
function vn(t, n) {
  const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return n.forEach((i, a) => {
    const c = i.map((e) => t[e]), u = Nn(c);
    i.forEach((e) => {
      var _a, _b;
      r.has(e) || r.set(e, []), (_a = r.get(e)) == null ? void 0 : _a.push(u), o.has(e) || o.set(e, []), (_b = o.get(e)) == null ? void 0 : _b.push(a);
    });
  }), { nodeToCentroidNodesMap: r, nodeToCentroidElementIndiciesMap: o };
}
function Nn(t) {
  const n = t.reduce((i, a) => i + a[0], 0) / t.length, r = t.reduce((i, a) => i + a[1], 0) / t.length, o = t.reduce((i, a) => i + a[2], 0) / t.length;
  return [n, r, o];
}
export {
  Sn as a,
  Ht as b,
  un as g
};
