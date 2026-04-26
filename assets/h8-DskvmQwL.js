const Y = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], u = 1 / Math.sqrt(3), F = [[-u, -u, -u], [+u, -u, -u], [+u, +u, -u], [-u, +u, -u], [-u, -u, +u], [+u, -u, +u], [+u, +u, +u], [-u, +u, +u]];
function I(t, r, n) {
  const e = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
  for (let l = 0; l < 8; l++) {
    const [o, c, w] = Y[l];
    e[0][l] = o / 8 * (1 + c * r) * (1 + w * n), e[1][l] = c / 8 * (1 + o * t) * (1 + w * n), e[2][l] = w / 8 * (1 + o * t) * (1 + c * r);
  }
  return e;
}
function R(t, r) {
  const n = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let e = 0; e < 8; e++) {
    const [l, o, c] = t[e];
    n[0][0] += r[0][e] * l, n[0][1] += r[0][e] * o, n[0][2] += r[0][e] * c, n[1][0] += r[1][e] * l, n[1][1] += r[1][e] * o, n[1][2] += r[1][e] * c, n[2][0] += r[2][e] * l, n[2][1] += r[2][e] * o, n[2][2] += r[2][e] * c;
  }
  return n;
}
function U(t) {
  return t[0][0] * (t[1][1] * t[2][2] - t[1][2] * t[2][1]) - t[0][1] * (t[1][0] * t[2][2] - t[1][2] * t[2][0]) + t[0][2] * (t[1][0] * t[2][1] - t[1][1] * t[2][0]);
}
function V(t) {
  const r = U(t);
  return [[(t[1][1] * t[2][2] - t[1][2] * t[2][1]) / r, (t[0][2] * t[2][1] - t[0][1] * t[2][2]) / r, (t[0][1] * t[1][2] - t[0][2] * t[1][1]) / r], [(t[1][2] * t[2][0] - t[1][0] * t[2][2]) / r, (t[0][0] * t[2][2] - t[0][2] * t[2][0]) / r, (t[0][2] * t[1][0] - t[0][0] * t[1][2]) / r], [(t[1][0] * t[2][1] - t[1][1] * t[2][0]) / r, (t[0][1] * t[2][0] - t[0][0] * t[2][1]) / r, (t[0][0] * t[1][1] - t[0][1] * t[1][0]) / r]];
}
function X(t) {
  const r = [];
  for (let n = 0; n < 6; n++) r.push(new Array(24).fill(0));
  for (let n = 0; n < 8; n++) {
    const e = t[0][n], l = t[1][n], o = t[2][n], c = n * 3;
    r[0][c + 0] = e, r[1][c + 1] = l, r[2][c + 2] = o, r[3][c + 0] = l, r[3][c + 1] = e, r[4][c + 1] = o, r[4][c + 2] = l, r[5][c + 0] = o, r[5][c + 2] = e;
  }
  return r;
}
function $(t, r) {
  const n = t * r / ((1 + r) * (1 - 2 * r)), e = t / (2 * (1 + r)), l = n + 2 * e;
  return [[l, n, n, 0, 0, 0], [n, l, n, 0, 0, 0], [n, n, l, 0, 0, 0], [0, 0, 0, e, 0, 0], [0, 0, 0, 0, e, 0], [0, 0, 0, 0, 0, e]];
}
function Z(t, r, n) {
  const e = $(r, n), l = [];
  for (let o = 0; o < 24; o++) l.push(new Array(24).fill(0));
  for (const [o, c, w] of F) {
    const i = I(o, c, w), E = R(t, i), b = U(E), h = V(E), v = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let f = 0; f < 8; f++) v[0][f] = h[0][0] * i[0][f] + h[0][1] * i[1][f] + h[0][2] * i[2][f], v[1][f] = h[1][0] * i[0][f] + h[1][1] * i[1][f] + h[1][2] * i[2][f], v[2][f] = h[2][0] * i[0][f] + h[2][1] * i[1][f] + h[2][2] * i[2][f];
    const _ = X(v), m = [];
    for (let f = 0; f < 6; f++) {
      m.push(new Array(24).fill(0));
      for (let y = 0; y < 24; y++) {
        let g = 0;
        for (let s = 0; s < 6; s++) g += e[f][s] * _[s][y];
        m[f][y] = g;
      }
    }
    for (let f = 0; f < 24; f++) for (let y = 0; y < 24; y++) {
      let g = 0;
      for (let s = 0; s < 6; s++) g += _[s][f] * m[s][y];
      l[f][y] += g * b;
    }
  }
  return l;
}
function M(t, r) {
  const n = r.length, e = [];
  for (let o = 0; o < n; o++) e.push([...t[o], r[o]]);
  for (let o = 0; o < n; o++) {
    let c = o, w = Math.abs(e[o][o]);
    for (let i = o + 1; i < n; i++) Math.abs(e[i][o]) > w && (c = i, w = Math.abs(e[i][o]));
    if (w < 1e-12) throw new Error(`Matriz singular en pivoteo i=${o}`);
    c !== o && ([e[o], e[c]] = [e[c], e[o]]);
    for (let i = o + 1; i < n; i++) {
      const E = e[i][o] / e[o][o];
      for (let b = o; b <= n; b++) e[i][b] -= E * e[o][b];
    }
  }
  const l = new Array(n).fill(0);
  for (let o = n - 1; o >= 0; o--) {
    let c = e[o][n];
    for (let w = o + 1; w < n; w++) c -= e[o][w] * l[w];
    l[o] = c / e[o][o];
  }
  return l;
}
function tt(t) {
  const r = performance.now(), { nodes: n, elements: e, E: l, nu: o, supports: c, loads: w } = t, i = n.length, E = 3 * i, b = $(l, o), h = [];
  for (let s = 0; s < E; s++) h.push(new Array(E).fill(0));
  for (const s of e) {
    const D = s.map((p) => n[p]), J = Z(D, l, o);
    for (let p = 0; p < 8; p++) for (let k = 0; k < 8; k++) for (let B = 0; B < 3; B++) for (let A = 0; A < 3; A++) h[3 * s[p] + B][3 * s[k] + A] += J[3 * p + B][3 * k + A];
  }
  const v = new Array(E).fill(0);
  w.forEach(([s, D, J], p) => {
    v[3 * p + 0] += s, v[3 * p + 1] += D, v[3 * p + 2] += J;
  });
  const _ = 1e15;
  c.forEach(([s, D, J], p) => {
    s && (h[3 * p + 0][3 * p + 0] += _), D && (h[3 * p + 1][3 * p + 1] += _), J && (h[3 * p + 2][3 * p + 2] += _);
  });
  const m = M(h, v), f = /* @__PURE__ */ new Map();
  for (let s = 0; s < i; s++) f.set(s, [m[3 * s], m[3 * s + 1], m[3 * s + 2]]);
  const y = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map();
  for (let s = 0; s < e.length; s++) {
    const D = e[s], J = D.map((A) => n[A]), p = [];
    for (const A of D) p.push(m[3 * A], m[3 * A + 1], m[3 * A + 2]);
    const k = [], B = [];
    for (const [A, C, H] of F) {
      const x = I(A, C, H), Q = R(J, x), d = V(Q), j = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let a = 0; a < 8; a++) j[0][a] = d[0][0] * x[0][a] + d[0][1] * x[1][a] + d[0][2] * x[2][a], j[1][a] = d[1][0] * x[0][a] + d[1][1] * x[1][a] + d[1][2] * x[2][a], j[2][a] = d[2][0] * x[0][a] + d[2][1] * x[1][a] + d[2][2] * x[2][a];
      const T = X(j), O = new Array(6).fill(0);
      for (let a = 0; a < 6; a++) for (let z = 0; z < 24; z++) O[a] += T[a][z] * p[z];
      const S = new Array(6).fill(0);
      for (let a = 0; a < 6; a++) for (let z = 0; z < 6; z++) S[a] += b[a][z] * O[z];
      const q = S[0], K = S[1], L = S[2], N = S[3], P = S[4], G = S[5], W = Math.sqrt(0.5 * ((q - K) ** 2 + (K - L) ** 2 + (L - q) ** 2) + 3 * (N * N + P * P + G * G));
      k.push(W), B.push([q, K, L, N, P, G]);
    }
    y.set(s, k), g.set(s, B);
  }
  return { displacements: f, vonMisesPerElement: y, stressPerElement: g, elapsedMs: performance.now() - r };
}
export {
  tt as h
};
