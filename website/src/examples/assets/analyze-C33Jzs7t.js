import { s as Ht, n as Ct, b as Pt, k as sn, i as Ut, z as k, c as Vt, m as J, t as Mt, a as _t, e as C, f as jt } from "./pureFunctionsAny.generated-JAcEVsJ7.js";
const z = 1 / Math.sqrt(3);
function Jt(t, n) {
  const s = [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)], o = [-0.25 * (1 - n), 0.25 * (1 - n), 0.25 * (1 + n), -0.25 * (1 + n)], r = [-0.25 * (1 - t), -0.25 * (1 + t), 0.25 * (1 + t), 0.25 * (1 - t)];
  return { N: s, dNdxi: o, dNdeta: r };
}
function Dt(t, n, s, o) {
  let r = 0, c = 0, e = 0, y = 0;
  for (let f = 0; f < 4; f++) r += t[f] * s[f], c += t[f] * o[f], e += n[f] * s[f], y += n[f] * o[f];
  const a = r * y - c * e, l = 1 / a, X = [], _ = [];
  for (let f = 0; f < 4; f++) X.push(l * (y * t[f] - c * n[f])), _.push(l * (-e * t[f] + r * n[f]));
  return { dNdx: X, dNdy: _, detJ: a };
}
function rn(t, n, s, o, r) {
  const a = $(12, 12), l = s * r / (1 - o * o), X = [[-z, -z], [z, -z], [z, z], [-z, z]], { dNdxi: _, dNdeta: f } = Jt(0, 0), { detJ: S } = Dt(_, f, t, n);
  for (const [d, g] of X) {
    const { dNdxi: Q, dNdeta: B } = Jt(d, g), { dNdx: R, dNdy: x, detJ: P } = Dt(Q, B, t, n);
    Dt(_, f, t, n);
    const dt = _.reduce((b, w, T) => b + w * t[T], 0), Zt = _.reduce((b, w, T) => b + w * n[T], 0), Lt = f.reduce((b, w, T) => b + w * t[T], 0), Gt = f.reduce((b, w, T) => b + w * n[T], 0), ft = 1 / S, kt = ft * Gt * (-2 * d), Ot = ft * -Lt * (-2 * d), A = ft * -Zt * (-2 * g), p = ft * dt * (-2 * g), Y = [[], [], []];
    for (let b = 0; b < 4; b++) Y[0].push(R[b], 0), Y[1].push(0, x[b]), Y[2].push(x[b], R[b]);
    Y[0].push(kt, 0, A, 0), Y[1].push(0, Ot, 0, p), Y[2].push(Ot, kt, p, A);
    for (let b = 0; b < 12; b++) for (let w = 0; w < 12; w++) {
      let T = 0;
      T += l * (Y[0][b] * Y[0][w] + o * Y[0][b] * Y[1][w] + o * Y[1][b] * Y[0][w] + Y[1][b] * Y[1][w]), T += l * (1 - o) / 2 * Y[2][b] * Y[2][w], a[b][w] += T * Math.abs(P);
    }
  }
  const i = $(8, 8), h = $(8, 4), E = $(4, 8), u = $(4, 4);
  for (let d = 0; d < 8; d++) for (let g = 0; g < 8; g++) i[d][g] = a[d][g];
  for (let d = 0; d < 8; d++) for (let g = 0; g < 4; g++) h[d][g] = a[d][8 + g];
  for (let d = 0; d < 4; d++) for (let g = 0; g < 8; g++) E[d][g] = a[8 + d][g];
  for (let d = 0; d < 4; d++) for (let g = 0; g < 4; g++) u[d][g] = a[8 + d][8 + g];
  const M = cn(u);
  if (!M) return i;
  const m = $(8, 8);
  for (let d = 0; d < 8; d++) for (let g = 0; g < 8; g++) {
    let Q = 0;
    for (let B = 0; B < 4; B++) for (let R = 0; R < 4; R++) Q += h[d][B] * M[B][R] * E[R][g];
    m[d][g] = i[d][g] - Q;
  }
  return m;
}
function cn(t) {
  const n = t.length, s = t.map((o, r) => {
    const c = [...o];
    for (let e = 0; e < n; e++) c.push(r === e ? 1 : 0);
    return c;
  });
  for (let o = 0; o < n; o++) {
    let r = o;
    for (let e = o + 1; e < n; e++) Math.abs(s[e][o]) > Math.abs(s[r][o]) && (r = e);
    if ([s[o], s[r]] = [s[r], s[o]], Math.abs(s[o][o]) < 1e-15) return null;
    const c = s[o][o];
    for (let e = 0; e < 2 * n; e++) s[o][e] /= c;
    for (let e = 0; e < n; e++) {
      if (e === o) continue;
      const y = s[e][o];
      for (let a = 0; a < 2 * n; a++) s[e][a] -= y * s[o][a];
    }
  }
  return s.map((o) => o.slice(n));
}
function en(t, n, s, o, r) {
  const c = $(12, 12), e = [[-z, -z], [z, -z], [z, z], [-z, z]];
  for (const [y, a] of e) {
    const { N: l, dNdxi: X, dNdeta: _ } = Jt(y, a), { dNdx: f, dNdy: S, detJ: i } = Dt(X, _, t, n), h = new Array(12).fill(0);
    for (let u = 0; u < 4; u++) h[u * 3] = 0.5 * S[u], h[u * 3 + 1] = -0.5 * f[u], h[u * 3 + 2] = l[u];
    const E = r * s * o * Math.abs(i);
    for (let u = 0; u < 12; u++) for (let M = 0; M < 12; M++) c[u][M] += E * h[u] * h[M];
  }
  return c;
}
function an(t, n, s, o, r) {
  const c = $(12, 12), e = s * r * r * r / (12 * (1 - o * o)), a = 5 / 6 * s / (2 * (1 + o)) * r, l = [[-z, -z], [z, -z], [z, z], [-z, z]], X = [{ xi: 0, eta: -1 }, { xi: 0, eta: 1 }, { xi: -1, eta: 0 }, { xi: 1, eta: 0 }], _ = [];
  for (const f of X) {
    const { N: S, dNdxi: i, dNdeta: h } = Jt(f.xi, f.eta), { dNdx: E, dNdy: u } = Dt(i, h, t, n), M = $(2, 12);
    for (let m = 0; m < 4; m++) M[0][m * 3] = E[m], M[0][m * 3 + 1] = -S[m], M[1][m * 3] = u[m], M[1][m * 3 + 2] = -S[m];
    _.push(M);
  }
  for (const [f, S] of l) {
    const { dNdxi: i, dNdeta: h } = Jt(f, S), { dNdx: E, dNdy: u, detJ: M } = Dt(i, h, t, n), m = $(3, 12);
    for (let x = 0; x < 4; x++) m[0][x * 3 + 1] = E[x], m[1][x * 3 + 2] = u[x], m[2][x * 3 + 1] = u[x], m[2][x * 3 + 2] = E[x];
    for (let x = 0; x < 12; x++) for (let P = 0; P < 12; P++) {
      let dt = 0;
      dt += e * (m[0][x] * m[0][P] + o * m[0][x] * m[1][P] + o * m[1][x] * m[0][P] + m[1][x] * m[1][P]), dt += e * (1 - o) / 2 * m[2][x] * m[2][P], c[x][P] += dt * Math.abs(M);
    }
    const d = $(2, 12), g = 0.5 * (1 - S), Q = 0.5 * (1 + S), B = 0.5 * (1 - f), R = 0.5 * (1 + f);
    for (let x = 0; x < 12; x++) d[0][x] = g * _[0][0][x] + Q * _[1][0][x], d[1][x] = B * _[2][1][x] + R * _[3][1][x];
    for (let x = 0; x < 12; x++) for (let P = 0; P < 12; P++) c[x][P] += a * (d[0][x] * d[0][P] + d[1][x] * d[1][P]) * Math.abs(M);
  }
  return c;
}
function ln(t, n, s) {
  var _a, _b, _c;
  const o = ((_a = n == null ? void 0 : n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, r = ((_b = n == null ? void 0 : n.poissonsRatios) == null ? void 0 : _b.get(s)) ?? 0.2, c = ((_c = n == null ? void 0 : n.thicknesses) == null ? void 0 : _c.get(s)) ?? 0;
  if (o === 0 || c === 0) return $(24, 24);
  const { localCoords: e } = It(t), y = e.map((M) => M[0]), a = e.map((M) => M[1]), l = rn(y, a, o, r, c), X = an(y, a, o, r, c), _ = o / (2 * (1 + r)), S = en(y, a, _, c, 0.5), i = $(24, 24), h = [0, 1, 6, 7, 12, 13, 18, 19];
  for (let M = 0; M < 8; M++) for (let m = 0; m < 8; m++) i[h[M]][h[m]] += l[M][m];
  const E = [2, 3, 4, 8, 9, 10, 14, 15, 16, 20, 21, 22];
  for (let M = 0; M < 12; M++) for (let m = 0; m < 12; m++) i[E[M]][E[m]] += X[M][m];
  const u = [0, 1, 5, 6, 7, 11, 12, 13, 17, 18, 19, 23];
  for (let M = 0; M < 12; M++) for (let m = 0; m < 12; m++) i[u[M]][u[m]] += S[M][m];
  return i;
}
function fn(t) {
  const { localX: n, localY: s, localZ: o } = It(t), r = [[n[0], n[1], n[2]], [s[0], s[1], s[2]], [o[0], o[1], o[2]]], c = $(24, 24);
  for (let e = 0; e < 4; e++) for (let y = 0; y < 2; y++) {
    const a = e * 6 + y * 3;
    for (let l = 0; l < 3; l++) for (let X = 0; X < 3; X++) c[a + l][a + X] = r[l][X];
  }
  return c;
}
function It(t) {
  const n = [t[2][0] - t[0][0], t[2][1] - t[0][1], t[2][2] - t[0][2]], s = [t[3][0] - t[1][0], t[3][1] - t[1][1], t[3][2] - t[1][2]], o = Wt(n, s), r = Math.sqrt(o[0] ** 2 + o[1] ** 2 + o[2] ** 2), c = o.map((i) => i / r), e = [t[1][0] - t[0][0], t[1][1] - t[0][1], t[1][2] - t[0][2]], y = Math.sqrt(e[0] ** 2 + e[1] ** 2 + e[2] ** 2), a = e.map((i) => i / y), l = Wt(c, a), X = t.map((i) => i[0]).reduce((i, h) => i + h) / 4, _ = t.map((i) => i[1]).reduce((i, h) => i + h) / 4, f = t.map((i) => i[2]).reduce((i, h) => i + h) / 4, S = t.map((i) => {
    const h = i[0] - X, E = i[1] - _, u = i[2] - f;
    return [h * a[0] + E * a[1] + u * a[2], h * l[0] + E * l[1] + u * l[2]];
  });
  return { localX: a, localY: l, localZ: c, localCoords: S };
}
function Wt(t, n) {
  return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
}
function $(t, n) {
  return Array.from({ length: t }, () => Array(n).fill(0));
}
function gn(t) {
  if (t.length === 2) return hn(t);
  if (t.length === 3) return mn(t);
  if (t.length === 4) return fn(t);
}
function hn(t) {
  const n = Ht(t[1], t[0]), s = Ct(n), o = Pt(n, [1, 0, 0]) / s, r = Pt(n, [0, 1, 0]) / s, c = Pt(n, [0, 0, 1]) / s, e = Math.sqrt(o ** 2 + r ** 2);
  let y = [[o, r, c], [-r / e, o / e, 0], [-o * c / e, -r * c / e, e]];
  return c === 1 && (y = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), c === -1 && (y = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), sn(Ut(4), y).toArray();
}
function mn(t) {
  const c = [t[0], t[1], t[2]], e = k(3, 3).toArray();
  for (let g = 0; g < 3; g++) for (let Q = 0; Q < 3; Q++) e[g][Q] = c[Q][g];
  const y = [-1, 1, 0], a = [-1, 0, 1], l = k(3, 2).toArray();
  for (let g = 0; g < 3; g++) for (let Q = 0; Q < 3; Q++) l[g][0] += e[g][Q] * y[Q], l[g][1] += e[g][Q] * a[Q];
  const X = l.map((g) => g[0]), _ = l.map((g) => g[1]);
  let f = Vt(X, _), S = Ct(f);
  if (S === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), k(18, 18).toArray();
  f = f.map((g) => g / S);
  const i = [...f], h = Ut(3).toArray(), E = f[0];
  let u;
  if (Math.abs(E) > 1 - 1e-10) {
    const g = f[2];
    u = h.map((Q, B) => Q[2] - g * f[B]);
  } else u = h.map((g, Q) => g[0] - E * f[Q]);
  if (S = Ct(u), S === 0) return console.warn("Degenerate local X-axis detected."), k(18, 18).toArray();
  u = u.map((g) => g / S);
  let M = Vt(i, u);
  if (S = Ct(M), S === 0) return console.warn("Degenerate local Y-axis detected."), k(18, 18).toArray();
  M = M.map((g) => g / S);
  const m = [u, M, i], d = k(18, 18).toArray();
  for (let g = 0; g < 3; g++) {
    const Q = g * 6, B = Q + 3;
    for (let R = 0; R < 3; R++) for (let x = 0; x < 3; x++) d[Q + R][Q + x] = m[R][x], d[B + R][B + x] = m[R][x];
  }
  return d;
}
function un(t, n, s) {
  var _a, _b;
  if (t.length === 2) {
    let o = Mn(t, n, s);
    const r = (_a = n == null ? void 0 : n.partialFixitySprings) == null ? void 0 : _a.get(s);
    r && (o = yn(o, r));
    const c = (_b = n == null ? void 0 : n.momentReleases) == null ? void 0 : _b.get(s);
    return c && (o = bn(o, c)), o;
  }
  if (t.length === 3) return dn(t, n, s);
  if (t.length === 4) return ln(t, n, s);
}
function yn(t, n) {
  const s = t.map((r) => [...r]), o = Math.min(n.length, 12);
  for (let r = 0; r < o; r++) n[r] > 1e-12 && (s[r][r] += n[r]);
  return s;
}
function bn(t, n) {
  const s = [];
  if (n.length >= 12) for (let i = 0; i < 12; i++) n[i] && s.push(i);
  else {
    const i = [3, 4, 5, 9, 10, 11];
    for (let h = 0; h < Math.min(n.length, 6); h++) n[h] && s.push(i[h]);
  }
  if (s.length === 0) return t;
  const o = t.length, r = [];
  for (let i = 0; i < o; i++) s.includes(i) || r.push(i);
  const c = r.length, e = s.length, y = Array.from({ length: e }, (i, h) => Array.from({ length: e }, (E, u) => t[s[h]][s[u]])), a = Array.from({ length: c }, (i, h) => Array.from({ length: e }, (E, u) => t[r[h]][s[u]])), l = Array.from({ length: e }, (i, h) => Array.from({ length: c }, (E, u) => t[s[h]][r[u]])), X = pn(y);
  if (!X) return t;
  const _ = $t(a, X), f = $t(_, l), S = Array.from({ length: o }, () => Array(o).fill(0));
  for (let i = 0; i < c; i++) for (let h = 0; h < c; h++) S[r[i]][r[h]] = t[r[i]][r[h]] - f[i][h];
  return S;
}
function $t(t, n) {
  const s = t.length, o = n[0].length, r = n.length, c = Array.from({ length: s }, () => Array(o).fill(0));
  for (let e = 0; e < s; e++) for (let y = 0; y < o; y++) for (let a = 0; a < r; a++) c[e][y] += t[e][a] * n[a][y];
  return c;
}
function pn(t) {
  const n = t.length, s = t.map((o, r) => {
    const c = [...o];
    for (let e = 0; e < n; e++) c.push(r === e ? 1 : 0);
    return c;
  });
  for (let o = 0; o < n; o++) {
    let r = o;
    for (let e = o + 1; e < n; e++) Math.abs(s[e][o]) > Math.abs(s[r][o]) && (r = e);
    if ([s[o], s[r]] = [s[r], s[o]], Math.abs(s[o][o]) < 1e-15) return null;
    const c = s[o][o];
    for (let e = 0; e < 2 * n; e++) s[o][e] /= c;
    for (let e = 0; e < n; e++) {
      if (e === o) continue;
      const y = s[e][o];
      for (let a = 0; a < 2 * n; a++) s[e][a] -= y * s[o][a];
    }
  }
  return s.map((o) => o.slice(n));
}
function Mn(t, n, s) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const o = ((_a = n == null ? void 0 : n.momentsOfInertiaZ) == null ? void 0 : _a.get(s)) ?? 0, r = ((_b = n == null ? void 0 : n.momentsOfInertiaY) == null ? void 0 : _b.get(s)) ?? 0, c = ((_c = n == null ? void 0 : n.elasticities) == null ? void 0 : _c.get(s)) ?? 0, e = ((_d = n == null ? void 0 : n.areas) == null ? void 0 : _d.get(s)) ?? 0, y = ((_e = n == null ? void 0 : n.shearModuli) == null ? void 0 : _e.get(s)) ?? 0, a = ((_f = n == null ? void 0 : n.torsionalConstants) == null ? void 0 : _f.get(s)) ?? 0, l = Ct(Ht(t[0], t[1]));
  let X = ((_g = n == null ? void 0 : n.shearAreasY) == null ? void 0 : _g.get(s)) ?? 0, _ = ((_h = n == null ? void 0 : n.shearAreasZ) == null ? void 0 : _h.get(s)) ?? 0;
  X === 0 && _ === 0 && e > 0 && y > 0 && (X = _ = 5 / 6 * e);
  const f = _ > 0 && y > 0 ? 12 * c * o / (y * _ * l ** 2) : 0, S = X > 0 && y > 0 ? 12 * c * r / (y * X * l ** 2) : 0, i = c * e / l, h = y * a / l, E = 12 * c * o / l ** 3 / (1 + f), u = 6 * c * o / l ** 2 / (1 + f), M = 4 * c * o / l * (1 + f / 4) / (1 + f), m = 2 * c * o / l * (1 - f / 2) / (1 + f), d = 12 * c * r / l ** 3 / (1 + S), g = 6 * c * r / l ** 2 / (1 + S), Q = 4 * c * r / l * (1 + S / 4) / (1 + S), B = 2 * c * r / l * (1 - S / 2) / (1 + S);
  return [[i, 0, 0, 0, 0, 0, -i, 0, 0, 0, 0, 0], [0, E, 0, 0, 0, u, 0, -E, 0, 0, 0, u], [0, 0, d, 0, -g, 0, 0, 0, -d, 0, -g, 0], [0, 0, 0, h, 0, 0, 0, 0, 0, -h, 0, 0], [0, 0, -g, 0, Q, 0, 0, 0, g, 0, B, 0], [0, u, 0, 0, 0, M, 0, -u, 0, 0, 0, m], [-i, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0], [0, -E, 0, 0, 0, -u, 0, E, 0, 0, 0, -u], [0, 0, -d, 0, g, 0, 0, 0, d, 0, g, 0], [0, 0, 0, -h, 0, 0, 0, 0, 0, h, 0, 0], [0, 0, -g, 0, B, 0, 0, 0, g, 0, Q, 0], [0, u, 0, 0, 0, m, 0, -u, 0, 0, 0, M]];
}
function dn(t, n, s) {
  var _a, _b, _c, _d, _e;
  const o = ((_a = n.elasticities) == null ? void 0 : _a.get(s)) ?? 0, r = ((_b = n.elasticitiesOrthogonal) == null ? void 0 : _b.get(s)) ?? 0, c = ((_c = n.poissonsRatios) == null ? void 0 : _c.get(s)) ?? 0, e = ((_d = n.shearModuli) == null ? void 0 : _d.get(s)) ?? 0, y = ((_e = n.thicknesses) == null ? void 0 : _e.get(s)) ?? 0, a = r > 0, l = a ? Zt(o, r, e, c, y) : P(o, c, y), X = a ? Lt(e, y) : dt(o, c, y), _ = a ? nn(o, r, e, c) : tn(o, c), f = t.map(([A, p]) => [A, p]), S = f[1][0] - f[0][0], i = f[2][0] - f[0][0], h = f[0][1] - f[1][1], E = f[2][1] - f[0][1], u = 0.5 * (S * E - i * -h), M = Gt(f), m = kt(f), d = Ot(f, _, y), g = J(J(Mt(M), X), M), Q = J(J(Mt(m), l), m), B = k(18, 18).toArray(), R = J(_t(g, Q), u), x = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let A = 0; A < 3; A++) for (let p = 0; p < 3; p++) for (let Y = 0; Y < 3; Y++) {
    const b = x[A][p], w = x[Y][p];
    B[b][w] = d[A * 3 + p][Y * 3 + p];
  }
  for (let A = 0; A < 18; A++) for (let p = 0; p < 18; p++) B[A][p] = (B[A][p] ?? 0) + R.get([A, p]);
  return B;
  function P(A, p, Y) {
    const b = A / (1 - p * p), w = C([[b, b * p, 0], [b * p, b, 0], [0, 0, b * (1 - p) / 2]]);
    return J(Y ** 3 / 12, w);
  }
  function dt(A, p, Y) {
    const b = 0.8333333333333334, w = A / (2 * (1 + p)), T = b * w * Y;
    return C([[T, 0], [0, T]]);
  }
  function Zt(A, p, Y, b, w) {
    const T = p * b / A, j = 1 - b * T, K = A / j, F = p / j, Z = b * p / j, v = C([[K, Z, 0], [Z, F, 0], [0, 0, Y]]);
    return J(w ** 3 / 12, v);
  }
  function Lt(A, p) {
    const b = 0.8333333333333334 * A * p;
    return C([[b, 0], [0, b]]);
  }
  function Gt(A) {
    const p = k(2, 18).toArray(), [Y, b] = A[0], [w, T] = A[1], [j, K] = A[2], F = 0.5 * ((w - Y) * (K - b) - (j - Y) * -(b - T)), Z = (Y + w + j) / 3, q = (b + T + K) / 3, v = [Z, Y, w], nt = [q, b, T], ot = [Z, w, j], W = [q, T, K], H = [Z, j, Y], xt = [q, K, b], L = 1 / 3, [gt, ht, mt, Kt] = ft(v, nt), [At, Et, Tt, Qt] = ft(ot, W), [Yt, vt, zt, Bt] = ft(H, xt), ut = k(2, 18).toArray(), yt = k(2, 18).toArray(), bt = k(2, 18).toArray();
    for (let D = 0; D < 2; D++) for (let N = 0; N < 6; N++) ut[D][N] = L * gt[D][N] + ht[D][N], ut[D][N + 6] = L * gt[D][N] + mt[D][N], ut[D][N + 12] = L * gt[D][N], yt[D][N] = L * At[D][N], yt[D][N + 6] = L * At[D][N] + Et[D][N], yt[D][N + 12] = L * At[D][N] + Tt[D][N], bt[D][N] = L * Yt[D][N] + zt[D][N], bt[D][N + 6] = L * Yt[D][N], bt[D][N + 12] = L * Yt[D][N] + vt[D][N];
    for (let D = 0; D < 2; D++) for (let N = 0; N < 18; N++) ut[D][N] *= Kt, yt[D][N] *= Qt, bt[D][N] *= Bt, p[D][N] = (ut[D][N] + yt[D][N] + bt[D][N]) / F;
    return p;
  }
  function ft(A, p) {
    const Y = k(2, 6).toArray(), b = k(2, 6).toArray(), w = k(2, 6).toArray(), T = A[1] - A[0], j = A[0] - A[2], K = p[2] - p[0], F = p[0] - p[1], Z = A[2] - A[1], q = p[1] - p[2], v = 0.5 * (T * K - j * F), nt = 0.5 * F * j, ot = 0.5 * K * T, W = 0.5 * T * j, H = 0.5 * F * K;
    return Y[0][2] = 0.5 * Z / v, Y[0][3] = -0.5, Y[1][2] = 0.5 * q / v, Y[1][4] = 0.5, b[0][2] = 0.5 * j / v, b[0][3] = 0.5 * nt / v, b[0][4] = 0.5 * W / v, b[1][2] = 0.5 * K / v, b[1][3] = 0.5 * H / v, b[1][4] = 0.5 * ot / v, w[0][2] = 0.5 * T / v, w[0][3] = -0.5 * ot / v, w[0][4] = -0.5 * W / v, w[1][2] = 0.5 * F / v, w[1][3] = -0.5 * H / v, w[1][4] = -0.5 * nt / v, [Y, b, w, v];
  }
  function kt(A) {
    const p = k(3, 18).toArray(), [Y, b] = A[0], [w, T] = A[1], [j, K] = A[2], F = w - Y, Z = j - Y, q = j - w, v = T - K, nt = K - b, ot = b - T, W = 0.5 * (F * nt - Z * -ot), H = v / (2 * W), xt = q / (2 * W), L = nt / (2 * W), gt = -Z / (2 * W), ht = ot / (2 * W), mt = F / (2 * W);
    return p[0][4] = H, p[0][10] = L, p[0][16] = ht, p[1][3] = -xt, p[1][9] = -gt, p[1][15] = -mt, p[2][3] = -H, p[2][4] = xt, p[2][9] = -L, p[2][10] = gt, p[2][15] = -ht, p[2][16] = mt, p;
  }
  function Ot(A, p, Y) {
    let b = k(9, 9).toArray(), w = k(9, 9).toArray(), T = k(9, 9).toArray(), j = k(9, 3).toArray(), K = k(3, 9).toArray(), F = k(3, 3).toArray(), Z = k(3, 3).toArray(), q = k(3, 3).toArray(), v = k(3, 3).toArray(), nt = k(3, 3).toArray(), ot = k(3, 3).toArray(), W = k(3, 3).toArray(), H = k(3, 3).toArray();
    const xt = 1 / 8, L = xt / 6, gt = xt ** 2 / 4, ht = 1, mt = 2, Kt = 1, At = 0, Et = 1, Tt = -1, Qt = -1, Yt = -1, vt = -2, zt = A[0][0], Bt = A[0][1], ut = A[1][0], yt = A[1][1], bt = A[2][0], D = A[2][1], N = zt - ut, Xt = ut - bt, pt = bt - zt, Nt = Bt - yt, St = yt - D, wt = D - Bt, st = -N, at = -Xt, it = -pt, rt = -Nt, ct = -St, et = -wt, Ft = 0.5 * (st * wt - pt * -Nt), on = 2 * Ft, V = 4 * Ft, G = 0.5 * Y, qt = Ft * Y, U = st ** 2 + rt ** 2, I = at ** 2 + ct ** 2, tt = it ** 2 + et ** 2;
    j[0][0] = G * St, j[0][2] = G * at, j[1][1] = G * at, j[1][2] = G * St, j[2][0] = G * St * (et - rt) * L, j[2][1] = G * at * (pt - N) * L, j[2][2] = G * (pt * et - N * rt) * 2 * L, j[3][0] = G * wt, j[3][2] = G * it, j[4][1] = G * it, j[4][2] = G * wt, j[5][0] = G * wt * (rt - ct) * L, j[5][1] = G * it * (N - Xt) * L, j[5][2] = G * (N * rt - Xt * ct) * 2 * L, j[6][0] = G * Nt, j[6][2] = G * st, j[7][1] = G * st, j[7][2] = G * Nt, j[8][0] = G * Nt * (ct - et) * L, j[8][1] = G * st * (Xt - pt) * L, j[8][2] = G * (Xt * ct - pt * et) * 2 * L, T = J(J(C(j), p), Mt(C(j))).toArray(), T = J(C(T), 1 / qt).toArray(), K[0][0] = at / V, K[0][1] = ct / V, K[0][2] = 1, K[0][3] = it / V, K[0][4] = et / V, K[0][6] = st / V, K[0][7] = rt / V, K[1][0] = at / V, K[1][1] = ct / V, K[1][3] = it / V, K[1][4] = et / V, K[1][5] = 1, K[1][6] = st / V, K[1][7] = rt / V, K[2][0] = at / V, K[2][1] = ct / V, K[2][3] = it / V, K[2][4] = et / V, K[2][6] = st / V, K[2][7] = rt / V, K[2][8] = 1;
    const lt = 1 / (Ft * V);
    F[0][0] = lt * St * et * U, F[0][1] = lt * wt * rt * I, F[0][2] = lt * Nt * ct * tt, F[1][0] = lt * Xt * it * U, F[1][1] = lt * pt * st * I, F[1][2] = lt * N * at * tt, F[2][0] = lt * (St * pt + at * et) * U, F[2][1] = lt * (wt * N + it * rt) * I, F[2][2] = lt * (Nt * Xt + st * ct) * tt;
    const O = on / 3;
    Z[0][0] = O * ht / U, Z[0][1] = O * mt / U, Z[0][2] = O * Kt / U, Z[1][0] = O * At / I, Z[1][1] = O * Et / I, Z[1][2] = O * Tt / I, Z[2][0] = O * Qt / tt, Z[2][1] = O * Yt / tt, Z[2][2] = O * vt / tt, q[0][0] = O * vt / U, q[0][1] = O * Qt / U, q[0][2] = O * Yt / U, q[1][0] = O * Kt / I, q[1][1] = O * ht / I, q[1][2] = O * mt / I, q[2][0] = O * Tt / tt, q[2][1] = O * At / tt, q[2][2] = O * Et / tt, v[0][0] = O * Et / U, v[0][1] = O * Tt / U, v[0][2] = O * At / U, v[1][0] = O * Yt / I, v[1][1] = O * vt / I, v[1][2] = O * Qt / I, v[2][0] = O * mt / tt, v[2][1] = O * Kt / tt, v[2][2] = O * ht / tt, nt = J(_t(C(Z), C(q)), 0.5).toArray(), ot = J(_t(C(q), C(v)), 0.5).toArray(), W = J(_t(C(v), C(Z)), 0.5).toArray();
    const Rt = J(J(Mt(C(F)), p), C(F));
    return H = _t(_t(J(J(Mt(C(nt)), Rt), C(nt)), J(J(Mt(C(ot)), Rt), C(ot))), J(J(Mt(C(W)), Rt), C(W))).toArray(), H = J(C(H), 3 / 4 * gt * qt).toArray(), w = J(J(Mt(C(K)), C(H)), C(K)).toArray(), b = _t(C(T), C(w)).toArray(), b;
  }
}
function tn(t, n) {
  const s = t / (1 - n * n);
  return C([[s, s * n, 0], [s * n, s, 0], [0, 0, s * (1 - n) / 2]]);
}
function nn(t, n, s, o) {
  const r = n * o / t, c = 1 - o * r, e = t / c, y = n / c, a = o * n / c;
  return C([[e, a, 0], [a, y, 0], [0, 0, s]]);
}
function Sn(t, n, s, o) {
  const r = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map() }, c = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map() };
  n.forEach((a, l) => {
    var _a;
    if (a.length === 4) return;
    const X = a.map((i) => t[i]), _ = a.reduce((i, h) => {
      var _a2;
      const E = (_a2 = o.deformations) == null ? void 0 : _a2.get(h);
      return i.concat(E ?? [0, 0, 0, 0, 0, 0]);
    }, []), f = gn(X), S = J(f, _);
    if (a.length === 2) {
      const i = un(X, s, l);
      let h = J(i, S);
      r.normals.set(l, [h[0], h[6]]), r.shearsY.set(l, [h[1], h[7]]), r.shearsZ.set(l, [h[2], h[8]]), r.torsions.set(l, [h[3], h[9]]), r.bendingsY.set(l, [h[4], h[10]]), r.bendingsZ.set(l, [h[5], h[11]]);
    } else {
      const i = xn(s, l), h = An(X), E = Yn(_), u = Xn(X), m = J(1 / (2 * u), J(J(i, h), E)).toArray(), d = ((_a = s.thicknesses) == null ? void 0 : _a.get(l)) ?? 1, g = m[0][0] * d, Q = m[1][0] * d, B = m[2][0] * d, R = m[0][1] * (d ** 3 / 12), x = m[1][1] * (d ** 3 / 12), P = m[2][1] * (d ** 3 / 12);
      c.membraneXX.set(l, g), c.membraneYY.set(l, Q), c.membraneXY.set(l, B), c.bendingXX.set(l, R), c.bendingYY.set(l, x), c.bendingXY.set(l, P);
    }
  });
  const { nodeToCentroidNodesMap: e, nodeToCentroidElementIndiciesMap: y } = Nn(t, n);
  return n.forEach((a, l) => {
    if (a.length !== 3) return;
    let X = [0, 0, 0], _ = [0, 0, 0], f = [0, 0, 0], S = [0, 0, 0], i = [0, 0, 0], h = [0, 0, 0];
    a.forEach((E, u) => {
      e.get(E);
      const M = y.get(E) || [];
      X[u] = jt(M.map((m) => c.membraneXX.get(m) ?? 0)), _[u] = jt(M.map((m) => c.membraneYY.get(m) ?? 0)), f[u] = jt(M.map((m) => c.membraneXY.get(m) ?? 0)), S[u] = jt(M.map((m) => c.bendingXX.get(m) ?? 0)), i[u] = jt(M.map((m) => c.bendingYY.get(m) ?? 0)), h[u] = jt(M.map((m) => c.bendingXY.get(m) ?? 0));
    }), r.membraneXX.set(l, X), r.membraneYY.set(l, _), r.membraneXY.set(l, f), r.bendingXX.set(l, S), r.bendingYY.set(l, i), r.bendingXY.set(l, h);
  }), r;
}
function xn(t, n) {
  var _a, _b, _c, _d, _e;
  const s = ((_a = t.elasticities) == null ? void 0 : _a.get(n)) ?? 0, o = ((_b = t.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, r = ((_c = t.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, c = ((_d = t.shearModuli) == null ? void 0 : _d.get(n)) ?? 0;
  return (_e = t.thicknesses) == null ? void 0 : _e.get(n), o > 0 ? nn(s, o, c, r) : tn(s, r);
}
function An(t) {
  const [n, s] = t[0], [o, r] = t[1], [c, e] = t[2], y = r - e, a = e - s, l = s - r, X = c - o, _ = n - c, f = o - n;
  return C([[y, a, l, 0, 0, 0], [0, 0, 0, X, _, f], [X, _, f, y, a, l]]);
}
function Yn(t) {
  const [n, s, o] = [t[0], t[6], t[12]], [r, c, e] = [t[1], t[7], t[13]], [y, a, l] = [t[4], t[10], t[16]], [X, _, f] = [t[3], t[9], t[15]];
  return C([[n, -y], [s, -a], [o, -l], [r, X], [c, _], [e, f]]);
}
function Xn(t) {
  const [n, s] = t[0], [o, r] = t[1], [c, e] = t[2], y = o - n, a = c - n, l = e - s, X = s - r;
  return 0.5 * (y * l - a * -X);
}
function Nn(t, n) {
  const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return n.forEach((r, c) => {
    const e = r.map((a) => t[a]), y = wn(e);
    r.forEach((a) => {
      var _a, _b;
      s.has(a) || s.set(a, []), (_a = s.get(a)) == null ? void 0 : _a.push(y), o.has(a) || o.set(a, []), (_b = o.get(a)) == null ? void 0 : _b.push(c);
    });
  }), { nodeToCentroidNodesMap: s, nodeToCentroidElementIndiciesMap: o };
}
function wn(t) {
  const n = t.reduce((r, c) => r + c[0], 0) / t.length, s = t.reduce((r, c) => r + c[1], 0) / t.length, o = t.reduce((r, c) => r + c[2], 0) / t.length;
  return [n, s, o];
}
export {
  Sn as a,
  gn as b,
  un as g
};
