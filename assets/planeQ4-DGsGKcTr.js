const j = 1 / Math.sqrt(3), E = [[-j, -j], [+j, -j], [+j, +j], [-j, +j]], G = [1, 1, 1, 1];
function K(n, c) {
  const l = [-1, 1, 1, -1], h = [-1, -1, 1, 1], m = new Array(4), J = new Array(4), w = new Array(4);
  for (let e = 0; e < 4; e++) m[e] = 0.25 * (1 + l[e] * n) * (1 + h[e] * c), J[e] = 0.25 * l[e] * (1 + h[e] * c), w[e] = 0.25 * h[e] * (1 + l[e] * n);
  return { N: m, dN_dxi: J, dN_deta: w };
}
function V(n, c) {
  const l = n / (1 - c * c);
  return [[l, l * c, 0], [l * c, l, 0], [0, 0, l * (1 - c) / 2]];
}
function P(n, c, l, h) {
  const m = Array.from({ length: 8 }, () => new Array(8).fill(0));
  let J = [], w = 0;
  for (let e = 0; e < 4; e++) {
    const [A, a] = E[e], { dN_dxi: N, dN_deta: f } = K(A, a);
    let i = 0, M = 0, S = 0, L = 0;
    for (let o = 0; o < 4; o++) i += N[o] * n[o], M += f[o] * n[o], S += N[o] * c[o], L += f[o] * c[o];
    const D = i * L - M * S;
    if (Math.abs(D) < 1e-14) throw new Error("Degenerate Q4 element (detJ\u22480)");
    const p = L / D, t = -M / D, s = -S / D, r = i / D, d = new Array(4), _ = new Array(4);
    for (let o = 0; o < 4; o++) d[o] = p * N[o] + t * f[o], _[o] = s * N[o] + r * f[o];
    const g = Array.from({ length: 3 }, () => new Array(8).fill(0));
    for (let o = 0; o < 4; o++) g[0][2 * o] = d[o], g[1][2 * o + 1] = _[o], g[2][2 * o] = _[o], g[2][2 * o + 1] = d[o];
    const v = Array.from({ length: 3 }, () => new Array(8).fill(0));
    for (let o = 0; o < 3; o++) for (let x = 0; x < 8; x++) {
      let b = 0;
      for (let y = 0; y < 3; y++) b += l[o][y] * g[y][x];
      v[o][x] = b;
    }
    const u = h * G[e] * Math.abs(D);
    for (let o = 0; o < 8; o++) for (let x = 0; x < 8; x++) {
      let b = 0;
      for (let y = 0; y < 3; y++) b += g[y][o] * v[y][x];
      m[o][x] += u * b;
    }
    e === 0 && (J = g, w = D);
  }
  {
    const { dN_dxi: e, dN_deta: A } = K(0, 0);
    let a = 0, N = 0, f = 0, i = 0;
    for (let s = 0; s < 4; s++) a += e[s] * n[s], N += A[s] * n[s], f += e[s] * c[s], i += A[s] * c[s];
    const M = a * i - N * f, S = i / M, L = -N / M, D = -f / M, p = a / M, t = Array.from({ length: 3 }, () => new Array(8).fill(0));
    for (let s = 0; s < 4; s++) {
      const r = S * e[s] + L * A[s], d = D * e[s] + p * A[s];
      t[0][2 * s] = r, t[1][2 * s + 1] = d, t[2][2 * s] = d, t[2][2 * s + 1] = r;
    }
    J = t, w = M;
  }
  return { Ke: m, B_center: J, detJ_center: w };
}
function Q(n, c) {
  const l = n.length, h = n.map((e) => e.slice()), m = c.slice(), J = new Array(l);
  for (let e = 0; e < l; e++) J[e] = e;
  for (let e = 0; e < l; e++) {
    let A = Math.abs(h[e][e]), a = e;
    for (let f = e + 1; f < l; f++) Math.abs(h[f][e]) > A && (A = Math.abs(h[f][e]), a = f);
    if (A < 1e-14) throw new Error(`Singular matrix at row ${e}`);
    a !== e && ([h[e], h[a]] = [h[a], h[e]], [m[e], m[a]] = [m[a], m[e]], [J[e], J[a]] = [J[a], J[e]]);
    const N = h[e][e];
    for (let f = e + 1; f < l; f++) {
      if (h[f][e] === 0) continue;
      const i = h[f][e] / N;
      h[f][e] = i;
      for (let M = e + 1; M < l; M++) h[f][M] -= i * h[e][M];
      m[f] -= i * m[e];
    }
  }
  const w = new Array(l);
  for (let e = l - 1; e >= 0; e--) {
    let A = m[e];
    for (let a = e + 1; a < l; a++) A -= h[e][a] * w[a];
    w[e] = A / h[e][e];
  }
  return w;
}
function C(n) {
  let c, l;
  if (n.nodes && n.elements) c = n.nodes, l = n.elements;
  else {
    const t = n.meshLx ?? 1, s = n.meshLy ?? 1, r = Math.round(n.meshNx ?? 4), d = Math.round(n.meshNy ?? 4), _ = t / r, g = s / d;
    c = [];
    for (let v = 0; v <= d; v++) for (let u = 0; u <= r; u++) c.push([u * _, v * g]);
    l = [];
    for (let v = 0; v < d; v++) for (let u = 0; u < r; u++) {
      const o = v * (r + 1) + u;
      l.push([o, o + 1, o + 1 + (r + 1), o + (r + 1)]);
    }
  }
  const m = 2 * c.length, J = V(n.E, n.nu), w = Array.from({ length: m }, () => new Array(m).fill(0)), e = new Array(m).fill(0), A = [];
  for (let t = 0; t < l.length; t++) {
    const [s, r, d, _] = l[t], g = [c[s][0], c[r][0], c[d][0], c[_][0]], v = [c[s][1], c[r][1], c[d][1], c[_][1]], { Ke: u, B_center: o } = P(g, v, J, n.thickness);
    A.push(o);
    const x = [2 * s, 2 * s + 1, 2 * r, 2 * r + 1, 2 * d, 2 * d + 1, 2 * _, 2 * _ + 1];
    for (let b = 0; b < 8; b++) for (let y = 0; y < 8; y++) w[x[b]][x[y]] += u[b][y];
    if (n.bodyForce) {
      const b = n.bodyForce.bx, y = n.bodyForce.by, U = 0.5 * Math.abs((g[2] - g[0]) * (v[3] - v[1]) - (g[3] - g[1]) * (v[2] - v[0])), F = n.thickness * U / 4;
      for (const T of [s, r, d, _]) e[2 * T] += F * b, e[2 * T + 1] += F * y;
    }
  }
  if (n.pointLoads) for (const t of n.pointLoads) e[2 * t.node] += t.fx, e[2 * t.node + 1] += t.fy;
  const a = n.bcs ? [...n.bcs] : [];
  if (n.bcType && n.meshLx && n.meshLy && n.meshNx && n.meshNy) {
    const t = Math.round(n.meshNx), s = Math.round(n.meshNy);
    if (n.bcType === "cantilever-bottom") for (let r = 0; r <= t; r++) a.push({ node: r, dof: 0, value: 0 }), a.push({ node: r, dof: 1, value: 0 });
    else if (n.bcType === "cantilever-left") for (let r = 0; r <= s; r++) {
      const d = r * (t + 1);
      a.push({ node: d, dof: 0, value: 0 }), a.push({ node: d, dof: 1, value: 0 });
    }
    else n.bcType === "simply-supported" && (a.push({ node: 0, dof: 0, value: 0 }), a.push({ node: 0, dof: 1, value: 0 }), a.push({ node: t, dof: 1, value: 0 }));
  }
  let N = 0;
  for (let t = 0; t < m; t++) Math.abs(w[t][t]) > N && (N = Math.abs(w[t][t]));
  const f = N * 1e12;
  for (const t of a) {
    const s = 2 * t.node + t.dof;
    w[s][s] += f, e[s] += f * t.value;
  }
  const i = Q(w, e), M = c.map((t, s) => ({ x: t[0], y: t[1], ux: i[2 * s], uy: i[2 * s + 1] })), S = [];
  let L = 0;
  for (let t = 0; t < l.length; t++) {
    const [s, r, d, _] = l[t], g = [i[2 * s], i[2 * s + 1], i[2 * r], i[2 * r + 1], i[2 * d], i[2 * d + 1], i[2 * _], i[2 * _ + 1]], v = A[t], u = [0, 0, 0];
    for (let k = 0; k < 3; k++) for (let B = 0; B < 8; B++) u[k] += v[k][B] * g[B];
    const o = [0, 0, 0];
    for (let k = 0; k < 3; k++) for (let B = 0; B < 3; B++) o[k] += J[k][B] * u[B];
    const x = o[0], b = o[1], y = o[2], U = Math.sqrt(x * x - x * b + b * b + 3 * y * y), F = 0.5 * (x + b), T = Math.sqrt(Math.pow(0.5 * (x - b), 2) + y * y), R = F + T, q = F - T;
    L = Math.max(L, U), S.push({ nodes: [s, r, d, _], sigma_xx: x, sigma_yy: b, tau_xy: y, vonMises: U, sigma_1: R, sigma_2: q });
  }
  let D = 0, p = 0;
  for (const t of M) Math.abs(t.ux) > D && (D = Math.abs(t.ux)), Math.abs(t.uy) > p && (p = Math.abs(t.uy));
  return { nodeResults: M, elementResults: S, maxUx: D, maxUy: p, maxVonMises: L, nDOF: m };
}
export {
  C as p
};
