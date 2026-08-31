import { s as It, n as Rt, b as Ft, k as $t, i as Zt, z as H, c as Gt, m as G, t as Ot, a as qt, e as $, f as ro } from "./pureFunctionsAny.generated-DeJSBP3k.js";
const Kt = 1 / Math.sqrt(3);
function Et(t, o) {
  const c = [0.25 * (1 - t) * (1 - o), 0.25 * (1 + t) * (1 - o), 0.25 * (1 + t) * (1 + o), 0.25 * (1 - t) * (1 + o)], e = [-0.25 * (1 - o), 0.25 * (1 - o), 0.25 * (1 + o), -0.25 * (1 + o)], a = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: c, dNdxi: e, dNdeta: a };
}
function Vt(t, o, c, e) {
  let a = 0, s = 0, n = 0, h = 0;
  for (let g = 0; g < 4; g++) a += t[g] * c[g], s += t[g] * e[g], n += o[g] * c[g], h += o[g] * e[g];
  const r = a * h - s * n, b = 1 / r, y = [], M = [];
  for (let g = 0; g < 4; g++) y.push(b * (h * t[g] - s * o[g])), M.push(b * (-n * t[g] + a * o[g]));
  return { dNdx: y, dNdy: M, detJ: r, J: [a, s, n, h] };
}
function co(t, o, c, e, a, s) {
  const n = c * a / (1 - e * e), h = [[n, n * e, 0], [n * e, n, 0], [0, 0, n * (1 - e) / 2]], r = [1, 2, 3, 0], b = [3, 0, 1, 2], y = [], M = [];
  for (let v = 0; v < 4; v++) y.push((o[r[v]] - o[v]) / 8), M.push(-(t[r[v]] - t[v]) / 8);
  const g = [-Math.sqrt(3 / 5), 0, Math.sqrt(3 / 5)], p = [5 / 9, 8 / 9, 5 / 9], i = Nt(14, 14);
  let f = [], Q = [], m = [], x = [], S = [], u = 0, l = 0, X = 0;
  for (let v = 0; v < 3; v++) for (let A = 0; A < 3; A++) {
    const T = g[v], F = g[A], N = p[v] * p[A], { N: w, dNdxi: q, dNdeta: k } = Et(T, F);
    let R = 0, V = 0, _ = 0, L = 0;
    for (let d = 0; d < 4; d++) R += q[d] * t[d], V += q[d] * o[d], _ += k[d] * t[d], L += k[d] * o[d];
    const Z = R * L - V * _, W = L / Z, I = -V / Z, z = -_ / Z, st = R / Z, at = [], nt = [];
    for (let d = 0; d < 4; d++) at.push(W * q[d] + I * k[d]), nt.push(z * q[d] + st * k[d]);
    const gt = [-T * (1 - F), 0.5 * (1 - F * F), -T * (1 + F), -0.5 * (1 - F * F)], mt = [-0.5 * (1 - T * T), -F * (1 + T), 0.5 * (1 - T * T), -F * (1 - T)], E = [], ht = [];
    for (let d = 0; d < 4; d++) E.push(W * gt[d] + I * mt[d]), ht.push(z * gt[d] + st * mt[d]);
    const yt = -2 * T * (1 - F * F), Mt = -2 * F * (1 - T * T), dt = W * yt + I * Mt, ut = z * yt + st * Mt, Yt = [], pt = [], _t = [], xt = [];
    for (let d = 0; d < 4; d++) {
      const ot = b[d];
      Yt.push(E[ot] * y[ot] - E[d] * y[d]), pt.push(ht[ot] * y[ot] - ht[d] * y[d]), _t.push(E[ot] * M[ot] - E[d] * M[d]), xt.push(ht[ot] * M[ot] - ht[d] * M[d]);
    }
    const rt = Nt(3, 14);
    for (let d = 0; d < 4; d++) rt[0][3 * d] = at[d], rt[1][3 * d + 1] = nt[d], rt[2][3 * d] = nt[d], rt[2][3 * d + 1] = at[d], rt[0][3 * d + 2] = Yt[d], rt[1][3 * d + 2] = xt[d], rt[2][3 * d + 2] = pt[d] + _t[d];
    rt[0][12] = dt, rt[2][12] = ut, rt[1][13] = ut, rt[2][13] = dt;
    const Lt = N * Math.abs(Z);
    for (let d = 0; d < 14; d++) for (let ot = 0; ot < 14; ot++) {
      let At = 0;
      for (let bt = 0; bt < 3; bt++) for (let D = 0; D < 3; D++) At += rt[bt][d] * h[bt][D] * rt[D][ot];
      i[d][ot] += Lt * At;
    }
    v === 1 && A === 1 && (f = w.slice(), Q = at.slice(), m = nt.slice(), x = pt.slice(), S = _t.slice(), u = dt, l = ut, X = Math.abs(Z));
  }
  const K = c / (2 * (1 + e)), O = new Array(14).fill(0);
  for (let v = 0; v < 4; v++) O[3 * v] = -0.5 * m[v], O[3 * v + 1] = 0.5 * Q[v], O[3 * v + 2] = 0.5 * (S[v] - x[v]) - f[v];
  O[12] = -0.5 * l, O[13] = 0.5 * u;
  const J = s * K * a * 4 * X;
  for (let v = 0; v < 14; v++) for (let A = 0; A < 14; A++) i[v][A] += J * O[v] * O[A];
  const tt = [[i[12][12], i[12][13]], [i[13][12], i[13][13]]], et = tt[0][0] * tt[1][1] - tt[0][1] * tt[1][0], lt = Nt(12, 12);
  for (let v = 0; v < 12; v++) for (let A = 0; A < 12; A++) lt[v][A] = i[v][A];
  if (Math.abs(et) < 1e-30) return lt;
  const ft = [[tt[1][1] / et, -tt[0][1] / et], [-tt[1][0] / et, tt[0][0] / et]];
  for (let v = 0; v < 12; v++) for (let A = 0; A < 12; A++) {
    let T = 0;
    for (let F = 0; F < 2; F++) for (let N = 0; N < 2; N++) T += i[v][12 + F] * ft[F][N] * i[12 + N][A];
    lt[v][A] -= T;
  }
  return lt;
}
function eo(t, o, c, e, a) {
  const s = Nt(12, 12), n = c * a * a * a / (12 * (1 - e * e)), r = 5 / 6 * c / (2 * (1 + e)) * a, b = [[-Kt, -Kt], [Kt, -Kt], [Kt, Kt], [-Kt, Kt]], y = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], M = [];
  for (const g of y) {
    const { N: p, dNdxi: i, dNdeta: f } = Et(g.xi, g.eta), { dNdx: Q, dNdy: m, J: x } = Vt(i, f, t, o), S = Nt(2, 12);
    for (let J = 0; J < 4; J++) S[0][J * 3] = Q[J], S[0][J * 3 + 1] = -p[J], S[1][J * 3] = m[J], S[1][J * 3 + 2] = -p[J];
    const [u, l, X, K] = x, O = Nt(2, 12);
    for (let J = 0; J < 12; J++) O[0][J] = u * S[0][J] + l * S[1][J], O[1][J] = X * S[0][J] + K * S[1][J];
    M.push(O);
  }
  for (const [g, p] of b) {
    const { dNdxi: i, dNdeta: f } = Et(g, p), { dNdx: Q, dNdy: m, detJ: x, J: S } = Vt(i, f, t, o), u = Nt(3, 12);
    for (let A = 0; A < 4; A++) u[0][A * 3 + 1] = Q[A], u[1][A * 3 + 2] = m[A], u[2][A * 3 + 1] = m[A], u[2][A * 3 + 2] = Q[A];
    for (let A = 0; A < 12; A++) for (let T = 0; T < 12; T++) {
      let F = 0;
      F += n * (u[0][A] * u[0][T] + e * u[0][A] * u[1][T] + e * u[1][A] * u[0][T] + u[1][A] * u[1][T]), F += n * (1 - e) / 2 * u[2][A] * u[2][T], s[A][T] += F * Math.abs(x);
    }
    const l = Nt(2, 12), X = 0.5 * (1 - p), K = 0.5 * (1 + p), O = 0.5 * (1 - g), J = 0.5 * (1 + g), [tt, et, lt, ft] = S, v = 1 / x;
    for (let A = 0; A < 12; A++) {
      const T = X * M[0][0][A] + K * M[1][0][A], F = O * M[2][1][A] + J * M[3][1][A];
      l[0][A] = v * (ft * T - et * F), l[1][A] = v * (-lt * T + tt * F);
    }
    for (let A = 0; A < 12; A++) for (let T = 0; T < 12; T++) s[A][T] += r * (l[0][A] * l[0][T] + l[1][A] * l[1][T]) * Math.abs(x);
  }
  return s;
}
function ao(t, o, c) {
  var _a, _b, _c;
  const e = ((_a = o == null ? void 0 : o.elasticities) == null ? void 0 : _a.get(c)) ?? 0, a = ((_b = o == null ? void 0 : o.poissonsRatios) == null ? void 0 : _b.get(c)) ?? 0.2, s = ((_c = o == null ? void 0 : o.thicknesses) == null ? void 0 : _c.get(c)) ?? 0;
  if (e === 0 || s === 0) return Nt(24, 24);
  const { localCoords: n } = to(t), h = n.map((m) => m[0]), r = n.map((m) => m[1]), b = eo(h, r, e, a, s), M = co(h, r, e, a, s, 0.4), g = Nt(24, 24), p = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22], i = [[1, 0, 0], [0, 0, -1], [0, 1, 0]], f = Nt(12, 12);
  for (let m = 0; m < 12; m++) for (let x = 0; x < 12; x++) {
    let S = 0;
    const u = m / 3 | 0, l = m % 3, X = x / 3 | 0, K = x % 3;
    for (let O = 0; O < 3; O++) {
      const J = i[O][l];
      if (J !== 0) for (let tt = 0; tt < 3; tt++) {
        const et = i[tt][K];
        et !== 0 && (S += J * b[u * 3 + O][X * 3 + tt] * et);
      }
    }
    f[m][x] = S;
  }
  for (let m = 0; m < 12; m++) for (let x = 0; x < 12; x++) g[p[m]][p[x]] += f[m][x];
  const Q = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let m = 0; m < 12; m++) for (let x = 0; x < 12; x++) g[Q[m]][Q[x]] += M[m][x];
  return g;
}
function io(t) {
  const { localX: o, localY: c, localZ: e } = to(t), a = [[o[0], o[1], o[2]], [c[0], c[1], c[2]], [e[0], e[1], e[2]]], s = Nt(24, 24);
  for (let n = 0; n < 4; n++) for (let h = 0; h < 2; h++) {
    const r = n * 6 + h * 3;
    for (let b = 0; b < 3; b++) for (let y = 0; y < 3; y++) s[r + b][r + y] = a[b][y];
  }
  return s;
}
function to(t) {
  const o = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], c = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], e = Wt(o, c), a = Math.sqrt(e[0] ** 2 + e[1] ** 2 + e[2] ** 2), s = e.map((i) => i / a), n = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], h = Math.sqrt(n[0] ** 2 + n[1] ** 2 + n[2] ** 2), r = n.map((i) => i / h), b = Wt(s, r), y = t.map((i) => i[0]).reduce((i, f) => i + f) / 4, M = t.map((i) => i[1]).reduce((i, f) => i + f) / 4, g = t.map((i) => i[2]).reduce((i, f) => i + f) / 4, p = t.map((i) => {
    const f = i[0] - y, Q = i[1] - M, m = i[2] - g;
    return [f * r[0] + Q * r[1] + m * r[2], f * b[0] + Q * b[1] + m * b[2]];
  });
  return { localX: r, localY: b, localZ: s, localCoords: p };
}
function Wt(t, o) {
  return [t[1] * o[2] - t[2] * o[1], t[2] * o[0] - t[0] * o[2], t[0] * o[1] - t[1] * o[0]];
}
function Nt(t, o) {
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
    const M = o * Math.PI / 180, g = Math.cos(M), p = Math.sin(M);
    return [y[0], [g * y[1][0] + p * y[2][0], g * y[1][1] + p * y[2][1], g * y[1][2] + p * y[2][2]], [-p * y[1][0] + g * y[2][0], -p * y[1][1] + g * y[2][1], -p * y[1][2] + g * y[2][2]]];
  }, e = It(t[1], t[0]), a = Rt(e), s = Ft(e, [1, 0, 0]) / a, n = Ft(e, [0, 1, 0]) / a, h = Ft(e, [0, 0, 1]) / a, r = Math.sqrt(s ** 2 + n ** 2);
  if (r < 1e-9) {
    const y = h > 0 ? 1 : -1, M = [[0, 0, y], [1, 0, 0], [0, y, 0]];
    return $t(Zt(4), c(M)).toArray();
  }
  const b = [[s, n, h], [-s * h / r, -n * h / r, r], [n / r, -s / r, 0]];
  return $t(Zt(4), c(b)).toArray();
}
function fo(t) {
  const s = [t[0], t[1], t[2]], n = H(3, 3).toArray();
  for (let l = 0; l < 3; l++) for (let X = 0; X < 3; X++) n[l][X] = s[X][l];
  const h = [-1, 1, 0], r = [-1, 0, 1], b = H(3, 2).toArray();
  for (let l = 0; l < 3; l++) for (let X = 0; X < 3; X++) b[l][0] += n[l][X] * h[X], b[l][1] += n[l][X] * r[X];
  const y = b.map((l) => l[0]), M = b.map((l) => l[1]);
  let g = Gt(y, M), p = Rt(g);
  if (p === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), H(18, 18).toArray();
  g = g.map((l) => l / p);
  const i = [...g], f = Zt(3).toArray(), Q = g[0];
  let m;
  if (Math.abs(Q) > 1 - 1e-10) {
    const l = g[2];
    m = f.map((X, K) => X[2] - l * g[K]);
  } else m = f.map((l, X) => l[0] - Q * g[X]);
  if (p = Rt(m), p === 0) return console.warn("Degenerate local X-axis detected."), H(18, 18).toArray();
  m = m.map((l) => l / p);
  let x = Gt(i, m);
  if (p = Rt(x), p === 0) return console.warn("Degenerate local Y-axis detected."), H(18, 18).toArray();
  x = x.map((l) => l / p);
  const S = [m, x, i], u = H(18, 18).toArray();
  for (let l = 0; l < 3; l++) {
    const X = l * 6, K = X + 3;
    for (let O = 0; O < 3; O++) for (let J = 0; J < 3; J++) u[X + O][X + J] = S[O][J], u[K + O][K + J] = S[O][J];
  }
  return u;
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
    for (let f = 0; f < Math.min(o.length, 6); f++) o[f] && c.push(i[f]);
  }
  if (c.length === 0) return t;
  const e = t.length, a = [];
  for (let i = 0; i < e; i++) c.includes(i) || a.push(i);
  const s = a.length, n = c.length, h = Array.from({ length: n }, (i, f) => Array.from({ length: n }, (Q, m) => t[c[f]][c[m]])), r = Array.from({ length: s }, (i, f) => Array.from({ length: n }, (Q, m) => t[a[f]][c[m]])), b = Array.from({ length: n }, (i, f) => Array.from({ length: s }, (Q, m) => t[c[f]][a[m]])), y = Mo(h);
  if (!y) return t;
  const M = Ut(r, y), g = Ut(M, b), p = Array.from({ length: e }, () => Array(e).fill(0));
  for (let i = 0; i < s; i++) for (let f = 0; f < s; f++) p[a[i]][a[f]] = t[a[i]][a[f]] - g[i][f];
  return p;
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
  const e = ((_a = o == null ? void 0 : o.momentsOfInertiaZ) == null ? void 0 : _a.get(c)) ?? 0, a = ((_b = o == null ? void 0 : o.momentsOfInertiaY) == null ? void 0 : _b.get(c)) ?? 0, s = ((_c = o == null ? void 0 : o.elasticities) == null ? void 0 : _c.get(c)) ?? 0, n = ((_d = o == null ? void 0 : o.areas) == null ? void 0 : _d.get(c)) ?? 0, h = ((_e = o == null ? void 0 : o.shearModuli) == null ? void 0 : _e.get(c)) ?? 0, r = ((_f = o == null ? void 0 : o.torsionalConstants) == null ? void 0 : _f.get(c)) ?? 0, b = Rt(It(t[0], t[1]));
  if (b < 1e-12) return console.warn(`[hekatan-fem] barra ${c} de longitud CERO: matriz nula (no aporta rigidez). Mismo criterio que getLocalStiffnessMatrix.cpp.`), Array.from({ length: 12 }, () => new Array(12).fill(0));
  const y = (_g = o == null ? void 0 : o.endOffsets) == null ? void 0 : _g.get(c), M = y && y[2] > 0 ? b - y[2] * (y[0] + y[1]) : b;
  if (M <= 1e-9) throw new Error(`end offsets se comen la barra ${c}: L = ${b.toFixed(4)} m, rz = ${y[2]}, offsets ${y[0]} y ${y[1]} -> Lf = ${M.toFixed(4)} m`);
  let g = ((_h = o == null ? void 0 : o.shearAreasY) == null ? void 0 : _h.get(c)) ?? 0, p = ((_i = o == null ? void 0 : o.shearAreasZ) == null ? void 0 : _i.get(c)) ?? 0;
  g === 0 && p === 0 && n > 0 && h > 0 && (g = p = 5 / 6 * n);
  const i = p > 0 && h > 0 ? 12 * s * e / (h * p * M ** 2) : 0, f = g > 0 && h > 0 ? 12 * s * a / (h * g * M ** 2) : 0, Q = s * n / b, m = h * r / b, x = 12 * s * e / M ** 3 / (1 + i), S = 6 * s * e / M ** 2 / (1 + i), u = 4 * s * e / M * (1 + i / 4) / (1 + i), l = 2 * s * e / M * (1 - i / 2) / (1 + i), X = 12 * s * a / M ** 3 / (1 + f), K = 6 * s * a / M ** 2 / (1 + f), O = 4 * s * a / M * (1 + f / 4) / (1 + f), J = 2 * s * a / M * (1 - f / 2) / (1 + f);
  return [[Q, 0, 0, 0, 0, 0, -Q, 0, 0, 0, 0, 0], [0, x, 0, 0, 0, S, 0, -x, 0, 0, 0, S], [0, 0, X, 0, -K, 0, 0, 0, -X, 0, -K, 0], [0, 0, 0, m, 0, 0, 0, 0, 0, -m, 0, 0], [0, 0, -K, 0, O, 0, 0, 0, K, 0, J, 0], [0, S, 0, 0, 0, u, 0, -S, 0, 0, 0, l], [-Q, 0, 0, 0, 0, 0, Q, 0, 0, 0, 0, 0], [0, -x, 0, 0, 0, -S, 0, x, 0, 0, 0, -S], [0, 0, -X, 0, K, 0, 0, 0, X, 0, K, 0], [0, 0, 0, -m, 0, 0, 0, 0, 0, m, 0, 0], [0, 0, -K, 0, J, 0, 0, 0, K, 0, O, 0], [0, S, 0, 0, 0, l, 0, -S, 0, 0, 0, u]];
}
function po(t, o, c) {
  var _a, _b, _c, _d, _e;
  const e = ((_a = o.elasticities) == null ? void 0 : _a.get(c)) ?? 0, a = ((_b = o.elasticitiesOrthogonal) == null ? void 0 : _b.get(c)) ?? 0, s = ((_c = o.poissonsRatios) == null ? void 0 : _c.get(c)) ?? 0, n = ((_d = o.shearModuli) == null ? void 0 : _d.get(c)) ?? 0, h = ((_e = o.thicknesses) == null ? void 0 : _e.get(c)) ?? 0, r = a > 0, b = r ? lt(e, a, n, s, h) : tt(e, s, h), y = r ? ft(n, h) : et(e, s, h), M = r ? no(e, a, n, s) : oo(e, s), g = t.map(([N, w]) => [N, w]), p = g[1][0] - g[0][0], i = g[2][0] - g[0][0], f = g[0][1] - g[1][1], Q = g[2][1] - g[0][1], m = 0.5 * (p * Q - i * -f), x = v(g), S = T(g), u = F(g, M, h), l = G(G(Ot(x), y), x), X = G(G(Ot(S), b), S), K = H(18, 18).toArray(), O = G(qt(l, X), m), J = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let N = 0; N < 3; N++) for (let w = 0; w < 3; w++) for (let q = 0; q < 3; q++) {
    const k = J[N][w], R = J[q][w];
    K[k][R] = u[N * 3 + w][q * 3 + w];
  }
  for (let N = 0; N < 18; N++) for (let w = 0; w < 18; w++) K[N][w] = (K[N][w] ?? 0) + O.get([N, w]);
  return K;
  function tt(N, w, q) {
    const k = N / (1 - w * w), R = $([[k, k * w, 0], [k * w, k, 0], [0, 0, k * (1 - w) / 2]]);
    return G(q ** 3 / 12, R);
  }
  function et(N, w, q) {
    const k = 0.8333333333333334, R = N / (2 * (1 + w)), V = k * R * q;
    return $([[V, 0], [0, V]]);
  }
  function lt(N, w, q, k, R) {
    const V = w * k / N, _ = 1 - k * V, L = N / _, Z = w / _, W = k * w / _, z = $([[L, W, 0], [W, Z, 0], [0, 0, q]]);
    return G(R ** 3 / 12, z);
  }
  function ft(N, w) {
    const k = 0.8333333333333334 * N * w;
    return $([[k, 0], [0, k]]);
  }
  function v(N) {
    const w = H(2, 18).toArray(), [q, k] = N[0], [R, V] = N[1], [_, L] = N[2], Z = 0.5 * ((R - q) * (L - k) - (_ - q) * -(k - V)), W = (q + R + _) / 3, I = (k + V + L) / 3, z = [W, q, R], st = [I, k, V], at = [W, R, _], nt = [I, V, L], gt = [W, _, q], mt = [I, L, k], E = 1 / 3, [ht, yt, Mt, dt] = A(z, st), [ut, Yt, pt, _t] = A(at, nt), [xt, rt, Lt, d] = A(gt, mt), ot = H(2, 18).toArray(), At = H(2, 18).toArray(), bt = H(2, 18).toArray();
    for (let D = 0; D < 2; D++) for (let j = 0; j < 6; j++) ot[D][j] = E * ht[D][j] + yt[D][j], ot[D][j + 6] = E * ht[D][j] + Mt[D][j], ot[D][j + 12] = E * ht[D][j], At[D][j] = E * ut[D][j], At[D][j + 6] = E * ut[D][j] + Yt[D][j], At[D][j + 12] = E * ut[D][j] + pt[D][j], bt[D][j] = E * xt[D][j] + Lt[D][j], bt[D][j + 6] = E * xt[D][j], bt[D][j + 12] = E * xt[D][j] + rt[D][j];
    for (let D = 0; D < 2; D++) for (let j = 0; j < 18; j++) ot[D][j] *= dt, At[D][j] *= _t, bt[D][j] *= d, w[D][j] = (ot[D][j] + At[D][j] + bt[D][j]) / Z;
    return w;
  }
  function A(N, w) {
    const q = H(2, 6).toArray(), k = H(2, 6).toArray(), R = H(2, 6).toArray(), V = N[1] - N[0], _ = N[0] - N[2], L = w[2] - w[0], Z = w[0] - w[1], W = N[2] - N[1], I = w[1] - w[2], z = 0.5 * (V * L - _ * Z), st = 0.5 * Z * _, at = 0.5 * L * V, nt = 0.5 * V * _, gt = 0.5 * Z * L;
    return q[0][2] = 0.5 * W / z, q[0][3] = -0.5, q[1][2] = 0.5 * I / z, q[1][4] = 0.5, k[0][2] = 0.5 * _ / z, k[0][3] = 0.5 * st / z, k[0][4] = 0.5 * nt / z, k[1][2] = 0.5 * L / z, k[1][3] = 0.5 * gt / z, k[1][4] = 0.5 * at / z, R[0][2] = 0.5 * V / z, R[0][3] = -0.5 * at / z, R[0][4] = -0.5 * nt / z, R[1][2] = 0.5 * Z / z, R[1][3] = -0.5 * gt / z, R[1][4] = -0.5 * st / z, [q, k, R, z];
  }
  function T(N) {
    const w = H(3, 18).toArray(), [q, k] = N[0], [R, V] = N[1], [_, L] = N[2], Z = R - q, W = _ - q, I = _ - R, z = V - L, st = L - k, at = k - V, nt = 0.5 * (Z * st - W * -at), gt = z / (2 * nt), mt = I / (2 * nt), E = st / (2 * nt), ht = -W / (2 * nt), yt = at / (2 * nt), Mt = Z / (2 * nt);
    return w[0][4] = gt, w[0][10] = E, w[0][16] = yt, w[1][3] = -mt, w[1][9] = -ht, w[1][15] = -Mt, w[2][3] = -gt, w[2][4] = mt, w[2][9] = -E, w[2][10] = ht, w[2][15] = -yt, w[2][16] = Mt, w;
  }
  function F(N, w, q) {
    let k = H(9, 9).toArray(), R = H(9, 9).toArray(), V = H(9, 9).toArray(), _ = H(9, 3).toArray(), L = H(3, 9).toArray(), Z = H(3, 3).toArray(), W = H(3, 3).toArray(), I = H(3, 3).toArray(), z = H(3, 3).toArray(), st = H(3, 3).toArray(), at = H(3, 3).toArray(), nt = H(3, 3).toArray(), gt = H(3, 3).toArray();
    const mt = 1 / 8, E = mt / 6, ht = mt ** 2 / 4, yt = 1, Mt = 2, dt = 1, ut = 0, Yt = 1, pt = -1, _t = -1, xt = -1, rt = -2, Lt = N[0][0], d = N[0][1], ot = N[1][0], At = N[1][1], bt = N[2][0], D = N[2][1], j = Lt - ot, Jt = ot - bt, Qt = bt - Lt, Dt = d - At, kt = At - D, Tt = D - d, Xt = -j, jt = -Jt, Y = -Qt, B = -Dt, P = -kt, C = -Tt, Bt = 0.5 * (Xt * Tt - Qt * -Dt), so = 2 * Bt, it = 4 * Bt, ct = 0.5 * q, Pt = Bt * q, wt = Xt ** 2 + B ** 2, vt = jt ** 2 + P ** 2, St = Y ** 2 + C ** 2;
    _[0][0] = ct * kt, _[0][2] = ct * jt, _[1][1] = ct * jt, _[1][2] = ct * kt, _[2][0] = ct * kt * (C - B) * E, _[2][1] = ct * jt * (Qt - j) * E, _[2][2] = ct * (Qt * C - j * B) * 2 * E, _[3][0] = ct * Tt, _[3][2] = ct * Y, _[4][1] = ct * Y, _[4][2] = ct * Tt, _[5][0] = ct * Tt * (B - P) * E, _[5][1] = ct * Y * (j - Jt) * E, _[5][2] = ct * (j * B - Jt * P) * 2 * E, _[6][0] = ct * Dt, _[6][2] = ct * Xt, _[7][1] = ct * Xt, _[7][2] = ct * Dt, _[8][0] = ct * Dt * (P - C) * E, _[8][1] = ct * Xt * (Jt - Qt) * E, _[8][2] = ct * (Jt * P - Qt * C) * 2 * E, V = G(G($(_), w), Ot($(_))).toArray(), V = G($(V), 1 / Pt).toArray(), L[0][0] = jt / it, L[0][1] = P / it, L[0][2] = 1, L[0][3] = Y / it, L[0][4] = C / it, L[0][6] = Xt / it, L[0][7] = B / it, L[1][0] = jt / it, L[1][1] = P / it, L[1][3] = Y / it, L[1][4] = C / it, L[1][5] = 1, L[1][6] = Xt / it, L[1][7] = B / it, L[2][0] = jt / it, L[2][1] = P / it, L[2][3] = Y / it, L[2][4] = C / it, L[2][6] = Xt / it, L[2][7] = B / it, L[2][8] = 1;
    const zt = 1 / (Bt * it);
    Z[0][0] = zt * kt * C * wt, Z[0][1] = zt * Tt * B * vt, Z[0][2] = zt * Dt * P * St, Z[1][0] = zt * Jt * Y * wt, Z[1][1] = zt * Qt * Xt * vt, Z[1][2] = zt * j * jt * St, Z[2][0] = zt * (kt * Qt + jt * C) * wt, Z[2][1] = zt * (Tt * j + Y * B) * vt, Z[2][2] = zt * (Dt * Jt + Xt * P) * St;
    const U = so / 3;
    W[0][0] = U * yt / wt, W[0][1] = U * Mt / wt, W[0][2] = U * dt / wt, W[1][0] = U * ut / vt, W[1][1] = U * Yt / vt, W[1][2] = U * pt / vt, W[2][0] = U * _t / St, W[2][1] = U * xt / St, W[2][2] = U * rt / St, I[0][0] = U * rt / wt, I[0][1] = U * _t / wt, I[0][2] = U * xt / wt, I[1][0] = U * dt / vt, I[1][1] = U * yt / vt, I[1][2] = U * Mt / vt, I[2][0] = U * pt / St, I[2][1] = U * ut / St, I[2][2] = U * Yt / St, z[0][0] = U * Yt / wt, z[0][1] = U * pt / wt, z[0][2] = U * ut / wt, z[1][0] = U * xt / vt, z[1][1] = U * rt / vt, z[1][2] = U * _t / vt, z[2][0] = U * Mt / St, z[2][1] = U * dt / St, z[2][2] = U * yt / St, st = G(qt($(W), $(I)), 0.5).toArray(), at = G(qt($(I), $(z)), 0.5).toArray(), nt = G(qt($(z), $(W)), 0.5).toArray();
    const Ct = G(G(Ot($(Z)), w), $(Z));
    return gt = qt(qt(G(G(Ot($(st)), Ct), $(st)), G(G(Ot($(at)), Ct), $(at))), G(G(Ot($(nt)), Ct), $(nt))).toArray(), gt = G($(gt), 3 / 4 * ht * Pt).toArray(), R = G(G(Ot($(L)), $(gt)), $(L)).toArray(), k = qt($(V), $(R)).toArray(), k;
  }
}
function oo(t, o) {
  const c = t / (1 - o * o);
  return $([[c, c * o, 0], [c * o, c, 0], [0, 0, c * (1 - o) / 2]]);
}
function no(t, o, c, e) {
  const a = o * e / t, s = 1 - e * a, n = t / s, h = o / s, r = e * o / s;
  return $([[n, r, 0], [r, h, 0], [0, 0, c]]);
}
function _o(t, o, c, e) {
  const a = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() }, s = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map(), vonMises: /* @__PURE__ */ new Map() };
  o.forEach((h, r) => {
    var _a, _b, _c, _d;
    const b = h.map((M) => t[M]), y = h.reduce((M, g) => {
      var _a2;
      const p = (_a2 = e.deformations) == null ? void 0 : _a2.get(g);
      return M.concat(p ?? [0, 0, 0, 0, 0, 0]);
    }, []);
    if (h.length === 2) {
      const M = Ht(b, ((_a = c == null ? void 0 : c.localAngles) == null ? void 0 : _a.get(r)) ?? 0), g = G(M, y), p = go(b, c, r);
      let i = G(p, g);
      const f = (_b = c == null ? void 0 : c.frameLoads) == null ? void 0 : _b.get(r);
      if (f && (f[0] || f[1] || f[2])) {
        const Q = b[0], m = b[1], x = [m[0] - Q[0], m[1] - Q[1], m[2] - Q[2]], S = Math.hypot(x[0], x[1], x[2]);
        if (S > 1e-9) {
          const u = [x[0] / S, x[1] / S, x[2] / S], l = S * S / 12, X = [u[1] * f[2] - u[2] * f[1], u[2] * f[0] - u[0] * f[2], u[0] * f[1] - u[1] * f[0]], K = [-f[0] * S / 2, -f[1] * S / 2, -f[2] * S / 2, -l * X[0], -l * X[1], -l * X[2], -f[0] * S / 2, -f[1] * S / 2, -f[2] * S / 2, +l * X[0], +l * X[1], +l * X[2]], O = G(M, K);
          i = i.map((J, tt) => J + O[tt]);
        }
      }
      a.normals.set(r, [i[0], i[6]]), a.shearsY.set(r, [i[1], i[7]]), a.shearsZ.set(r, [i[2], i[8]]), a.torsions.set(r, [i[3], i[9]]), a.bendingsY.set(r, [i[4], i[10]]), a.bendingsZ.set(r, [i[5], i[11]]);
    } else if (h.length === 4) {
      const M = Ao(b, y, c, r);
      s.membraneXX.set(r, M.Nx), s.membraneYY.set(r, M.Ny), s.membraneXY.set(r, M.Nxy), s.bendingXX.set(r, M.Mx), s.bendingYY.set(r, M.My), s.bendingXY.set(r, M.Mxy), s.tranverseShearX.set(r, M.Qx), s.tranverseShearY.set(r, M.Qy), s.vonMises.set(r, M.vonMises);
    } else if (h.length === 3) {
      const M = Ht(b, ((_c = c == null ? void 0 : c.localAngles) == null ? void 0 : _c.get(r)) ?? 0);
      G(M, y);
      const g = Yo(c, r), p = xo(b), i = Xo(y), f = wo(b), m = G(1 / (2 * f), G(G(g, p), i)).toArray(), x = ((_d = c.thicknesses) == null ? void 0 : _d.get(r)) ?? 1, S = m[0][0] * x, u = m[1][0] * x, l = m[2][0] * x, X = m[0][1] * (x ** 3 / 12), K = m[1][1] * (x ** 3 / 12), O = m[2][1] * (x ** 3 / 12);
      s.membraneXX.set(r, S), s.membraneYY.set(r, u), s.membraneXY.set(r, l), s.bendingXX.set(r, X), s.bendingYY.set(r, K), s.bendingXY.set(r, O);
    }
  });
  const { nodeToCentroidElementIndiciesMap: n } = vo(t, o);
  {
    const h = (y) => {
      var _a;
      return (((_a = c == null ? void 0 : c.plateFormulations) == null ? void 0 : _a.get(y)) ?? 0) === 1;
    }, r = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
    if (o.forEach((y, M) => {
      if (y.length !== 4) return;
      const g = y.map((p) => t[p]);
      r.set(M, [0, 1, 2].map((p) => g.reduce((i, f) => i + f[p], 0) / 4)), b.set(M, y);
    }), [...b.keys()].some(h)) {
      const y = /* @__PURE__ */ new Map();
      for (const [M, g] of b) for (const p of g) {
        const i = y.get(p) ?? [];
        i.push(M), y.set(p, i);
      }
      for (const [M, g] of b) {
        if (!h(M)) continue;
        const p = /* @__PURE__ */ new Map();
        for (const u of g) for (const l of y.get(u) ?? []) l !== M && p.set(l, (p.get(l) ?? 0) + 1);
        const i = [...p].filter(([, u]) => u >= 2).map(([u]) => u);
        if (i.length < 2) continue;
        const f = r.get(M), Q = (u) => {
          let l = 0, X = 0, K = 0, O = 0, J = 0;
          const tt = u.get(M) ?? 0;
          for (const lt of i) {
            const ft = r.get(lt), v = ft[0] - f[0], A = ft[1] - f[1], T = (u.get(lt) ?? 0) - tt;
            l += v * v, X += v * A, K += A * A, O += v * T, J += A * T;
          }
          const et = l * K - X * X;
          return Math.abs(et) < 1e-12 ? [0, 0] : [(O * K - J * X) / et, (l * J - X * O) / et];
        }, m = Q(s.bendingXX), x = Q(s.bendingYY), S = Q(s.bendingXY);
        s.tranverseShearX.set(M, m[0] + S[1]), s.tranverseShearY.set(M, x[1] + S[0]);
      }
    }
  }
  return o.forEach((h, r) => {
    if (h.length !== 3 && h.length !== 4) return;
    const b = h.length, y = new Array(b).fill(0), M = new Array(b).fill(0), g = new Array(b).fill(0), p = new Array(b).fill(0), i = new Array(b).fill(0), f = new Array(b).fill(0), Q = new Array(b).fill(0), m = new Array(b).fill(0), x = new Array(b).fill(0);
    h.forEach((S, u) => {
      const l = n.get(S) || [], X = (K) => ro(l.map((O) => K.get(O) ?? 0));
      y[u] = X(s.membraneXX), M[u] = X(s.membraneYY), g[u] = X(s.membraneXY), p[u] = X(s.bendingXX), i[u] = X(s.bendingYY), f[u] = X(s.bendingXY), Q[u] = X(s.tranverseShearX), m[u] = X(s.tranverseShearY), x[u] = X(s.vonMises);
    }), a.membraneXX.set(r, y), a.membraneYY.set(r, M), a.membraneXY.set(r, g), a.bendingXX.set(r, p), a.bendingYY.set(r, i), a.bendingXY.set(r, f), a.tranverseShearX.set(r, Q), a.tranverseShearY.set(r, m), a.vonMises.set(r, x);
  }), a;
}
function Ao(t, o, c, e) {
  var _a, _b, _c;
  const a = ((_a = c.elasticities) == null ? void 0 : _a.get(e)) ?? 0, s = ((_b = c.poissonsRatios) == null ? void 0 : _b.get(e)) ?? 0, n = ((_c = c.thicknesses) == null ? void 0 : _c.get(e)) ?? 1, h = t[0], r = t[1], b = t[2], y = t[3], M = [r[0] - h[0], r[1] - h[1], r[2] - h[2]], g = [b[0] - y[0], b[1] - y[1], b[2] - y[2]];
  let p = [M[0] + g[0], M[1] + g[1], M[2] + g[2]], i = Math.sqrt(p[0] * p[0] + p[1] * p[1] + p[2] * p[2]);
  i < 1e-14 && (i = 1);
  let f = [p[0] / i, p[1] / i, p[2] / i];
  const Q = [b[0] - h[0], b[1] - h[1], b[2] - h[2]], m = [y[0] - r[0], y[1] - r[1], y[2] - r[2]];
  let x = [Q[1] * m[2] - Q[2] * m[1], Q[2] * m[0] - Q[0] * m[2], Q[0] * m[1] - Q[1] * m[0]], S = Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]);
  S < 1e-14 && (S = 1);
  let u = [x[0] / S, x[1] / S, x[2] / S], l = [u[1] * f[2] - u[2] * f[1], u[2] * f[0] - u[0] * f[2], u[0] * f[1] - u[1] * f[0]], X = Math.sqrt(l[0] * l[0] + l[1] * l[1] + l[2] * l[2]);
  X < 1e-14 && (X = 1), l = [l[0] / X, l[1] / X, l[2] / X];
  {
    if (Math.abs(u[2]) > 1 - 1e-6) f = [1, 0, 0];
    else {
      const P = [-u[1], u[0], 0], C = Math.hypot(P[0], P[1], P[2]) || 1;
      f = [P[0] / C, P[1] / C, P[2] / C];
    }
    l = [u[1] * f[2] - u[2] * f[1], u[2] * f[0] - u[0] * f[2], u[0] * f[1] - u[1] * f[0]];
    const B = Math.hypot(l[0], l[1], l[2]) || 1;
    l = [l[0] / B, l[1] / B, l[2] / B], f = [l[1] * u[2] - l[2] * u[1], l[2] * u[0] - l[0] * u[2], l[0] * u[1] - l[1] * u[0]];
  }
  const K = 0.25 * (h[0] + r[0] + b[0] + y[0]), O = 0.25 * (h[1] + r[1] + b[1] + y[1]), J = 0.25 * (h[2] + r[2] + b[2] + y[2]), tt = [], et = [];
  for (let Y = 0; Y < 4; Y++) {
    const B = t[Y][0] - K, P = t[Y][1] - O, C = t[Y][2] - J;
    tt.push(B * f[0] + P * f[1] + C * f[2]), et.push(B * l[0] + P * l[1] + C * l[2]);
  }
  const lt = [f, l, u], ft = new Array(24).fill(0);
  for (let Y = 0; Y < 4; Y++) {
    const B = Y * 6, P = Y * 6;
    for (let C = 0; C < 3; C++) ft[P + C] = lt[C][0] * o[B] + lt[C][1] * o[B + 1] + lt[C][2] * o[B + 2];
    for (let C = 0; C < 3; C++) ft[P + 3 + C] = lt[C][0] * o[B + 3] + lt[C][1] * o[B + 4] + lt[C][2] * o[B + 5];
  }
  const v = a / (1 - s * s), A = [[v * n, v * s * n, 0], [v * s * n, v * n, 0], [0, 0, v * (1 - s) / 2 * n]], T = n * n * n / 12, F = [[v * T, v * s * T, 0], [v * s * T, v * T, 0], [0, 0, v * (1 - s) / 2 * T]], N = [-0.25, 0.25, 0.25, -0.25], w = [-0.25, -0.25, 0.25, 0.25];
  let q = 0, k = 0, R = 0, V = 0;
  for (let Y = 0; Y < 4; Y++) q += N[Y] * tt[Y], k += N[Y] * et[Y], R += w[Y] * tt[Y], V += w[Y] * et[Y];
  const _ = q * V - k * R;
  if (Math.abs(_) < 1e-20) return { Nx: 0, Ny: 0, Nxy: 0, Mx: 0, My: 0, Mxy: 0, Qx: 0, Qy: 0, vonMises: 0 };
  const L = V / _, Z = -k / _, W = -R / _, I = q / _, z = [], st = [];
  for (let Y = 0; Y < 4; Y++) z.push(L * N[Y] + Z * w[Y]), st.push(W * N[Y] + I * w[Y]);
  let at = 0, nt = 0, gt = 0;
  for (let Y = 0; Y < 4; Y++) {
    const B = ft[Y * 6 + 0], P = ft[Y * 6 + 1];
    at += z[Y] * B, nt += st[Y] * P, gt += st[Y] * B + z[Y] * P;
  }
  const mt = A[0][0] * at + A[0][1] * nt, E = A[1][0] * at + A[1][1] * nt, ht = A[2][2] * gt;
  let yt = 0, Mt = 0, dt = 0;
  for (let Y = 0; Y < 4; Y++) {
    const B = ft[Y * 6 + 3], P = ft[Y * 6 + 4];
    yt += z[Y] * P, Mt += -st[Y] * B, dt += st[Y] * P - z[Y] * B;
  }
  const ut = F[0][0] * yt + F[0][1] * Mt, Yt = F[1][0] * yt + F[1][1] * Mt, pt = F[2][2] * dt, _t = 5 / 6, xt = a / (2 * (1 + s)), rt = _t * xt * n;
  let Lt = 0, d = 0;
  const ot = [0.25, 0.25, 0.25, 0.25];
  for (let Y = 0; Y < 4; Y++) {
    const B = ft[Y * 6 + 2], P = ft[Y * 6 + 3], C = ft[Y * 6 + 4];
    Lt += z[Y] * B + ot[Y] * P, d += st[Y] * B + ot[Y] * C;
  }
  const At = rt * Lt, bt = rt * d, D = mt / n + 6 * ut / (n * n), j = E / n + 6 * Yt / (n * n), Jt = ht / n + 6 * pt / (n * n), Qt = Math.sqrt(D * D - D * j + j * j + 3 * Jt * Jt), Dt = mt / n - 6 * ut / (n * n), kt = E / n - 6 * Yt / (n * n), Tt = ht / n - 6 * pt / (n * n), Xt = Math.sqrt(Dt * Dt - Dt * kt + kt * kt + 3 * Tt * Tt), jt = Math.max(Qt, Xt);
  return { Nx: mt, Ny: E, Nxy: ht, Mx: ut, My: Yt, Mxy: pt, Qx: At, Qy: bt, vonMises: jt };
}
function Yo(t, o) {
  var _a, _b, _c, _d, _e;
  const c = ((_a = t.elasticities) == null ? void 0 : _a.get(o)) ?? 0, e = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(o)) ?? 0, a = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(o)) ?? 0, s = ((_d = t.shearModuli) == null ? void 0 : _d.get(o)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(o), e > 0 ? no(c, e, s, a) : oo(c, a);
}
function xo(t) {
  const [o, c] = t[0], [e, a] = t[1], [s, n] = t[2], h = a - n, r = n - c, b = c - a, y = s - e, M = o - s, g = e - o;
  return $([[h, r, b, 0, 0, 0], [0, 0, 0, y, M, g], [y, M, g, h, r, b]]);
}
function Xo(t) {
  const [o, c, e] = [t[0], t[6], t[12]], [a, s, n] = [t[1], t[7], t[13]], [h, r, b] = [t[4], t[10], t[16]], [y, M, g] = [t[3], t[9], t[15]];
  return $([[o, -h], [c, -r], [e, -b], [a, y], [s, M], [n, g]]);
}
function wo(t) {
  const [o, c] = t[0], [e, a] = t[1], [s, n] = t[2], h = e - o, r = s - o, b = n - c, y = c - a;
  return 0.5 * (h * b - r * -y);
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
