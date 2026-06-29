function j(t, e, n) {
  const r = t * n * n * n / (12 * (1 - e * e));
  return [[r, r * e, 0], [r * e, r, 0], [0, 0, r * (1 - e) / 2]];
}
function F(t, e, n, r) {
  const f = t / (2 * (1 + e)), i = r * f * n;
  return [[i, 0], [0, i]];
}
function Q(t, e) {
  const n = t[1] - t[0], r = e[1] - e[0], f = t[2] - t[0], i = e[2] - e[0], o = 0.5 * (n * i - f * r);
  if (Math.abs(o) < 1e-14) throw new Error("Degenerate triangle (area\u22480)");
  const c = 2 * o, l = [(e[1] - e[2]) / c, (e[2] - e[0]) / c, (e[0] - e[1]) / c], M = [(t[2] - t[1]) / c, (t[0] - t[2]) / c, (t[1] - t[0]) / c], d = [[(t[0] + t[1]) / 2, (e[0] + e[1]) / 2], [(t[1] + t[2]) / 2, (e[1] + e[2]) / 2], [(t[2] + t[0]) / 2, (e[2] + e[0]) / 2]];
  return { area: o, dL_dx: l, dL_dy: M, edgeMidpoints: d };
}
function G(t) {
  const e = Array.from({ length: 3 }, () => new Array(9).fill(0));
  for (let n = 0; n < 3; n++) e[0][3 * n + 1] = t.dL_dx[n], e[1][3 * n + 2] = t.dL_dy[n], e[2][3 * n + 1] = t.dL_dy[n], e[2][3 * n + 2] = t.dL_dx[n];
  return e;
}
function I(t) {
  const e = Array.from({ length: 2 }, () => new Array(9).fill(0));
  for (let n = 0; n < 3; n++) e[0][3 * n] = t.dL_dx[n], e[1][3 * n] = t.dL_dy[n], e[0][3 * n + 1] = -1 / 3, e[1][3 * n + 2] = -1 / 3;
  return e;
}
function N(t, e, n, r) {
  const f = Q(t, e), i = G(f), o = I(f), c = R(n, i), l = T(i, c), M = R(r, o), d = T(o, M), y = Array.from({ length: 9 }, () => new Array(9).fill(0));
  for (let b = 0; b < 9; b++) for (let A = 0; A < 9; A++) y[b][A] = f.area * (l[b][A] + d[b][A]);
  return { Ke: y, Bb: i, Bs: o, area: f.area };
}
function R(t, e) {
  const n = t.length, r = e[0].length, f = e.length, i = Array.from({ length: n }, () => new Array(r).fill(0));
  for (let o = 0; o < n; o++) for (let c = 0; c < r; c++) {
    let l = 0;
    for (let M = 0; M < f; M++) l += t[o][M] * e[M][c];
    i[o][c] = l;
  }
  return i;
}
function T(t, e) {
  const n = t[0].length, r = e[0].length, f = t.length, i = Array.from({ length: n }, () => new Array(r).fill(0));
  for (let o = 0; o < n; o++) for (let c = 0; c < r; c++) {
    let l = 0;
    for (let M = 0; M < f; M++) l += t[M][o] * e[M][c];
    i[o][c] = l;
  }
  return i;
}
function S(t, e) {
  const n = t.length, r = t.map((o) => o.slice()), f = e.slice();
  for (let o = 0; o < n; o++) {
    let c = Math.abs(r[o][o]), l = o;
    for (let d = o + 1; d < n; d++) Math.abs(r[d][o]) > c && (c = Math.abs(r[d][o]), l = d);
    if (c < 1e-14) throw new Error(`Singular matrix in MITC3 solver (row ${o})`);
    l !== o && ([r[o], r[l]] = [r[l], r[o]], [f[o], f[l]] = [f[l], f[o]]);
    const M = r[o][o];
    for (let d = o + 1; d < n; d++) {
      if (r[d][o] === 0) continue;
      const y = r[d][o] / M;
      r[d][o] = y;
      for (let b = o + 1; b < n; b++) r[d][b] -= y * r[o][b];
      f[d] -= y * f[o];
    }
  }
  const i = new Array(n);
  for (let o = n - 1; o >= 0; o--) {
    let c = f[o];
    for (let l = o + 1; l < n; l++) c -= r[o][l] * i[l];
    i[o] = c / r[o][o];
  }
  return i;
}
function q(t) {
  const { nodes: e, elements: n } = t;
  if (!e || !n) throw new Error("MITC3: nodes y elements requeridos");
  const f = 3 * e.length, i = j(t.E, t.nu, t.thickness), o = F(t.E, t.nu, t.thickness, t.shearCorrection ?? 5 / 6), c = Array.from({ length: f }, () => new Array(f).fill(0)), l = new Array(f).fill(0), M = [], d = [], y = [];
  for (let s = 0; s < n.length; s++) {
    const [m, u, w] = n[s], _ = [e[m][0], e[u][0], e[w][0]], v = [e[m][1], e[u][1], e[w][1]], { Ke: K, Bb: x, Bs: B, area: L } = N(_, v, i, o);
    M.push(x), d.push(B), y.push(L);
    const D = [3 * m, 3 * m + 1, 3 * m + 2, 3 * u, 3 * u + 1, 3 * u + 2, 3 * w, 3 * w + 1, 3 * w + 2];
    for (let a = 0; a < 9; a++) for (let h = 0; h < 9; h++) c[D[a]][D[h]] += K[a][h];
    if (t.pressure && t.pressure !== 0) {
      const a = t.pressure * L / 3;
      l[3 * m] += a, l[3 * u] += a, l[3 * w] += a;
    }
  }
  if (t.pointLoads) for (const s of t.pointLoads) l[3 * s.node] += s.Fw ?? 0, l[3 * s.node + 1] += s.Mx ?? 0, l[3 * s.node + 2] += s.My ?? 0;
  let b = 0;
  for (let s = 0; s < f; s++) Math.abs(c[s][s]) > b && (b = Math.abs(c[s][s]));
  const A = b * 1e12;
  if (t.bcs) for (const s of t.bcs) {
    const m = 3 * s.node + s.dof;
    c[m][m] += A, l[m] += A * s.value;
  }
  const g = S(c, l), C = e.map((s, m) => ({ x: s[0], y: s[1], w: g[3 * m], thetaX: g[3 * m + 1], thetaY: g[3 * m + 2] }));
  let p = 0;
  for (const s of C) Math.abs(s.w) > p && (p = Math.abs(s.w));
  const E = [];
  let k = 0;
  for (let s = 0; s < n.length; s++) {
    const [m, u, w] = n[s], _ = [g[3 * m], g[3 * m + 1], g[3 * m + 2], g[3 * u], g[3 * u + 1], g[3 * u + 2], g[3 * w], g[3 * w + 1], g[3 * w + 2]], v = M[s], K = d[s], x = [0, 0, 0];
    for (let a = 0; a < 3; a++) for (let h = 0; h < 9; h++) x[a] += v[a][h] * _[h];
    const B = [0, 0, 0];
    for (let a = 0; a < 3; a++) for (let h = 0; h < 3; h++) B[a] += i[a][h] * x[h];
    const L = [0, 0];
    for (let a = 0; a < 2; a++) for (let h = 0; h < 9; h++) L[a] += K[a][h] * _[h];
    const D = [0, 0];
    for (let a = 0; a < 2; a++) for (let h = 0; h < 2; h++) D[a] += o[a][h] * L[h];
    Math.abs(B[0]) > k && (k = Math.abs(B[0])), E.push({ nodes: [m, u, w], Mxx: B[0], Myy: B[1], Mxy: B[2], Qx: D[0], Qy: D[1], area: y[s] });
  }
  return { nodeResults: C, elementResults: E, maxW: p, maxMxx: k, nDOF: f };
}
export {
  q as m
};
