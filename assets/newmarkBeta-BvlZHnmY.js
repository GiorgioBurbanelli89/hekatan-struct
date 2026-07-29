function R(h, u) {
  const n = h.length, o = h.map((t) => t.slice()), a = u.slice();
  for (let t = 0; t < n; t++) {
    let i = t, l = Math.abs(o[t][t]);
    for (let m = t + 1; m < n; m++) Math.abs(o[m][t]) > l && (l = Math.abs(o[m][t]), i = m);
    if (i !== t && ([o[t], o[i]] = [o[i], o[t]], [a[t], a[i]] = [a[i], a[t]]), Math.abs(o[t][t]) < 1e-14) throw new Error(`Singular matrix at row ${t}`);
    for (let m = t + 1; m < n; m++) {
      const v = o[m][t] / o[t][t];
      a[m] -= v * a[t];
      for (let M = t; M < n; M++) o[m][M] -= v * o[t][M];
    }
  }
  const c = new Array(n).fill(0);
  for (let t = n - 1; t >= 0; t--) {
    let i = a[t];
    for (let l = t + 1; l < n; l++) i -= o[t][l] * c[l];
    c[t] = i / o[t][t];
  }
  return c;
}
function E(h, u) {
  const n = h.length, o = new Array(n).fill(0);
  for (let a = 0; a < n; a++) {
    let c = 0;
    for (let t = 0; t < u.length; t++) c += h[a][t] * u[t];
    o[a] = c;
  }
  return o;
}
function z(h, u, n = 1) {
  return h.map((o, a) => o.map((c, t) => c + n * u[a][t]));
}
function A(h) {
  return Array.from({ length: h }, () => new Array(h).fill(0));
}
function W(h, u) {
  const n = h.length, o = A(n);
  for (let s = 0; s < n; s++) for (let e = 0; e <= s; e++) {
    let r = u[s][e];
    for (let f = 0; f < e; f++) r -= o[s][f] * o[e][f];
    if (s === e) {
      if (r <= 0) throw new Error("M not positive definite");
      o[s][e] = Math.sqrt(r);
    } else o[s][e] = r / o[e][e];
  }
  const a = A(n);
  for (let s = 0; s < n; s++) {
    a[s][s] = 1 / o[s][s];
    for (let e = 0; e < s; e++) {
      let r = 0;
      for (let f = e; f < s; f++) r -= o[s][f] * a[f][e];
      a[s][e] = r / o[s][s];
    }
  }
  const c = A(n);
  for (let s = 0; s < n; s++) for (let e = 0; e < n; e++) {
    let r = 0;
    for (let f = 0; f < n; f++) r += h[s][f] * a[e][f];
    c[s][e] = r;
  }
  const t = A(n);
  for (let s = 0; s < n; s++) for (let e = 0; e < n; e++) {
    let r = 0;
    for (let f = 0; f < n; f++) r += a[s][f] * c[f][e];
    t[s][e] = r;
  }
  for (let s = 0; s < n; s++) for (let e = s + 1; e < n; e++) {
    const r = (t[s][e] + t[e][s]) / 2;
    t[s][e] = r, t[e][s] = r;
  }
  const { values: i, vectors: l } = U(t), m = i.map((s, e) => e).sort((s, e) => i[s] - i[e]), v = m.map((s) => i[s]), M = m.map((s) => l.map((e) => e[s])), w = A(n);
  for (let s = 0; s < n; s++) for (let e = 0; e < n; e++) {
    let r = 0;
    for (let f = 0; f < n; f++) r += a[f][e] * M[s][f];
    w[e][s] = r;
  }
  return { omega2: v, freqs: v.map((s) => Math.sqrt(Math.max(s, 0)) / (2 * Math.PI)), modes: w };
}
function U(h) {
  const u = h.length, n = h.map((t) => t.slice()), o = A(u);
  for (let t = 0; t < u; t++) o[t][t] = 1;
  const a = 200, c = 1e-12;
  for (let t = 0; t < a; t++) {
    let i = 0, l = 1, m = 0;
    for (let r = 0; r < u; r++) for (let f = r + 1; f < u; f++) Math.abs(n[r][f]) > m && (m = Math.abs(n[r][f]), i = r, l = f);
    if (m < c) break;
    const v = (n[l][l] - n[i][i]) / (2 * n[i][l]);
    let M;
    Math.abs(v) > 1e30 ? M = 1 / (2 * v) : M = (v >= 0 ? 1 : -1) / (Math.abs(v) + Math.sqrt(v * v + 1));
    const w = 1 / Math.sqrt(M * M + 1), s = M * w, e = n[i][l];
    n[i][i] -= M * e, n[l][l] += M * e, n[i][l] = 0, n[l][i] = 0;
    for (let r = 0; r < u; r++) {
      if (r !== i && r !== l) {
        const j = n[r][i], k = n[r][l];
        n[r][i] = w * j - s * k, n[i][r] = n[r][i], n[r][l] = s * j + w * k, n[l][r] = n[r][l];
      }
      const f = o[r][i], q = o[r][l];
      o[r][i] = w * f - s * q, o[r][l] = s * f + w * q;
    }
  }
  return { values: n.map((t, i) => t[i]), vectors: o };
}
function X(h) {
  const { M: u, K: n, loadFunc: o, u0: a, v0: c, dt: t, nSteps: i } = h, l = u.length, m = h.C ?? A(l), v = h.gamma ?? 0.5, M = h.beta ?? 0.25, w = o(0), s = E(m, c), e = E(n, a), r = w.map((y, d) => y - s[d] - e[d]), f = R(u, r), q = 1 / (M * t * t), j = v / (M * t), k = z(z(n, u, q), m, j), F = [0], L = [a.slice()], S = [c.slice()], $ = [f.slice()];
  let x = a.slice(), b = c.slice(), g = f.slice();
  for (let y = 0; y < i; y++) {
    const d = (y + 1) * t, T = o(d), B = 1 / (M * t * t), D = 1 / (M * t), I = 1 / (2 * M) - 1, Y = v / (M * t), H = v / M - 1, J = t * (v / (2 * M) - 1), P = new Array(l).fill(0), G = new Array(l).fill(0), N = new Array(l).fill(0);
    for (let p = 0; p < l; p++) G[p] = B * x[p] + D * b[p] + I * g[p], N[p] = Y * x[p] + H * b[p] + J * g[p];
    const O = E(u, G), Q = E(m, N);
    for (let p = 0; p < l; p++) P[p] = T[p] + O[p] + Q[p];
    const K = R(k, P), C = new Array(l).fill(0), V = new Array(l).fill(0);
    for (let p = 0; p < l; p++) C[p] = B * (K[p] - x[p]) - D * b[p] - I * g[p], V[p] = b[p] + t * ((1 - v) * g[p] + v * C[p]);
    F.push(d), L.push(K.slice()), S.push(V.slice()), $.push(C.slice()), x = K, b = V, g = C;
  }
  return { t: F, u: L, v: S, a: $ };
}
function Z(h, u, n) {
  return (o) => o >= u && o <= n ? h : 0;
}
function _(h, u, n) {
  return (o) => {
    const a = new Array(n).fill(0);
    return a[u] = h(o), a;
  };
}
function tt(h, u) {
  const n = h.length;
  if (u.length !== n) throw new Error(`k.length=${u.length} != m.length=${n}`);
  const o = A(n), a = A(n);
  for (let c = 0; c < n; c++) a[c][c] = h[c], o[c][c] = u[c] + (c + 1 < n ? u[c + 1] : 0), c + 1 < n && (o[c][c + 1] = -u[c + 1], o[c + 1][c] = -u[c + 1]);
  return { K: o, M: a };
}
function nt(h, u, n, o, a, c = a) {
  const t = o * o - n * n, i = 2 * n * o * (a * o - c * n) / t, l = 2 * (c * o - a * n) / t;
  return z(h.map((m) => m.map((v) => i * v)), u, l);
}
export {
  W as a,
  nt as b,
  X as n,
  _ as p,
  Z as r,
  tt as s,
  A as z
};
