const V = 1 / Math.sqrt(3), $ = [[-V, -V], [+V, -V], [+V, +V], [-V, +V]], z = [1, 1, 1, 1];
function P(n, f) {
  const r = [-1, 1, 1, -1], d = [-1, -1, 1, 1], s = new Array(4), h = new Array(4), g = new Array(4);
  for (let e = 0; e < 4; e++) s[e] = 0.25 * (1 + r[e] * n) * (1 + d[e] * f), h[e] = 0.25 * r[e] * (1 + d[e] * f), g[e] = 0.25 * d[e] * (1 + r[e] * n);
  return { N: s, dN_dxi: h, dN_deta: g };
}
function H(n, f) {
  const r = n / (1 - f * f);
  return [[r, r * f, 0], [r * f, r, 0], [0, 0, r * (1 - f) / 2]];
}
function X(n, f, r, d, s = true) {
  const h = Array.from({ length: 8 }, () => new Array(8).fill(0)), g = Array.from({ length: 4 }, () => new Array(4).fill(0)), e = Array.from({ length: 8 }, () => new Array(4).fill(0));
  let N = 0, a = 0, U = 0;
  if (s) {
    const { dN_dxi: x, dN_deta: k } = P(0, 0);
    let m = 0, y = 0, b = 0, t = 0;
    for (let l = 0; l < 4; l++) m += x[l] * n[l], y += k[l] * n[l], b += x[l] * f[l], t += k[l] * f[l];
    U = m * t - y * b, N = t / U, a = m / U;
  }
  let J = [], u = 0;
  for (let x = 0; x < 4; x++) {
    const [k, m] = $[x], { dN_dxi: y, dN_deta: b } = P(k, m);
    let t = 0, l = 0, i = 0, _ = 0;
    for (let o = 0; o < 4; o++) t += y[o] * n[o], l += b[o] * n[o], i += y[o] * f[o], _ += b[o] * f[o];
    const v = t * _ - l * i;
    if (Math.abs(v) < 1e-14) throw new Error("Degenerate Q4 element (detJ\u22480)");
    const S = _ / v, M = -l / v, c = -i / v, K = t / v, j = new Array(4), F = new Array(4);
    for (let o = 0; o < 4; o++) j[o] = S * y[o] + M * b[o], F[o] = c * y[o] + K * b[o];
    const A = Array.from({ length: 3 }, () => new Array(8).fill(0));
    for (let o = 0; o < 4; o++) A[0][2 * o] = j[o], A[1][2 * o + 1] = F[o], A[2][2 * o] = F[o], A[2][2 * o + 1] = j[o];
    const R = Array.from({ length: 3 }, () => new Array(8).fill(0));
    for (let o = 0; o < 3; o++) for (let B = 0; B < 8; B++) {
      let E = 0;
      for (let w = 0; w < 3; w++) E += r[o][w] * A[w][B];
      R[o][B] = E;
    }
    const q = d * z[x] * Math.abs(v);
    for (let o = 0; o < 8; o++) for (let B = 0; B < 8; B++) {
      let E = 0;
      for (let w = 0; w < 3; w++) E += A[w][o] * R[w][B];
      h[o][B] += q * E;
    }
    if (s) {
      const o = -2 * k, B = 0, E = 0, w = -2 * m, T = N * o, Q = a * B, W = N * E, C = a * w, O = [[T, 0, W, 0], [0, Q, 0, C], [Q, T, C, W]], I = Array.from({ length: 3 }, () => new Array(4).fill(0));
      for (let p = 0; p < 3; p++) for (let D = 0; D < 4; D++) {
        let G = 0;
        for (let L = 0; L < 3; L++) G += r[p][L] * O[L][D];
        I[p][D] = G;
      }
      for (let p = 0; p < 4; p++) for (let D = 0; D < 4; D++) {
        let G = 0;
        for (let L = 0; L < 3; L++) G += O[L][p] * I[L][D];
        g[p][D] += q * G;
      }
      for (let p = 0; p < 8; p++) for (let D = 0; D < 4; D++) {
        let G = 0;
        for (let L = 0; L < 3; L++) G += A[L][p] * I[L][D];
        e[p][D] += q * G;
      }
    }
    x === 0 && (J = A, u = v);
  }
  if (s) {
    const x = Y(g), k = Array.from({ length: 8 }, () => new Array(4).fill(0));
    for (let m = 0; m < 8; m++) for (let y = 0; y < 4; y++) {
      let b = 0;
      for (let t = 0; t < 4; t++) b += e[m][t] * x[t][y];
      k[m][y] = b;
    }
    for (let m = 0; m < 8; m++) for (let y = 0; y < 8; y++) {
      let b = 0;
      for (let t = 0; t < 4; t++) b += k[m][t] * e[y][t];
      h[m][y] -= b;
    }
  }
  {
    const { dN_dxi: x, dN_deta: k } = P(0, 0);
    let m = 0, y = 0, b = 0, t = 0;
    for (let c = 0; c < 4; c++) m += x[c] * n[c], y += k[c] * n[c], b += x[c] * f[c], t += k[c] * f[c];
    const l = m * t - y * b, i = t / l, _ = -y / l, v = -b / l, S = m / l, M = Array.from({ length: 3 }, () => new Array(8).fill(0));
    for (let c = 0; c < 4; c++) {
      const K = i * x[c] + _ * k[c], j = v * x[c] + S * k[c];
      M[0][2 * c] = K, M[1][2 * c + 1] = j, M[2][2 * c] = j, M[2][2 * c + 1] = K;
    }
    J = M, u = l;
  }
  return { Ke: h, B_center: J, detJ_center: u };
}
function Y(n) {
  const r = n.map((s) => s.slice()), d = Array.from({ length: 4 }, (s, h) => Array.from({ length: 4 }, (g, e) => h === e ? 1 : 0));
  for (let s = 0; s < 4; s++) {
    let h = s;
    for (let e = s + 1; e < 4; e++) Math.abs(r[e][s]) > Math.abs(r[h][s]) && (h = e);
    h !== s && ([r[s], r[h]] = [r[h], r[s]], [d[s], d[h]] = [d[h], d[s]]);
    const g = r[s][s];
    if (Math.abs(g) < 1e-14) throw new Error("Singular 4x4 (K_\u03B1\u03B1) in Wilson condensation");
    for (let e = 0; e < 4; e++) r[s][e] /= g, d[s][e] /= g;
    for (let e = 0; e < 4; e++) {
      if (e === s) continue;
      const N = r[e][s];
      if (N !== 0) for (let a = 0; a < 4; a++) r[e][a] -= N * r[s][a], d[e][a] -= N * d[s][a];
    }
  }
  return d;
}
function Z(n, f) {
  const r = n.length, d = n.map((e) => e.slice()), s = f.slice(), h = new Array(r);
  for (let e = 0; e < r; e++) h[e] = e;
  for (let e = 0; e < r; e++) {
    let N = Math.abs(d[e][e]), a = e;
    for (let J = e + 1; J < r; J++) Math.abs(d[J][e]) > N && (N = Math.abs(d[J][e]), a = J);
    if (N < 1e-14) throw new Error(`Singular matrix at row ${e}`);
    a !== e && ([d[e], d[a]] = [d[a], d[e]], [s[e], s[a]] = [s[a], s[e]], [h[e], h[a]] = [h[a], h[e]]);
    const U = d[e][e];
    for (let J = e + 1; J < r; J++) {
      if (d[J][e] === 0) continue;
      const u = d[J][e] / U;
      d[J][e] = u;
      for (let x = e + 1; x < r; x++) d[J][x] -= u * d[e][x];
      s[J] -= u * s[e];
    }
  }
  const g = new Array(r);
  for (let e = r - 1; e >= 0; e--) {
    let N = s[e];
    for (let a = e + 1; a < r; a++) N -= d[e][a] * g[a];
    g[e] = N / d[e][e];
  }
  return g;
}
function ee(n) {
  let f, r;
  if (n.nodes && n.elements) f = n.nodes, r = n.elements;
  else {
    const t = n.meshLx ?? 1, l = n.meshLy ?? 1, i = Math.round(n.meshNx ?? 4), _ = Math.round(n.meshNy ?? 4), v = t / i, S = l / _;
    f = [];
    for (let M = 0; M <= _; M++) for (let c = 0; c <= i; c++) f.push([c * v, M * S]);
    r = [];
    for (let M = 0; M < _; M++) for (let c = 0; c < i; c++) {
      const K = M * (i + 1) + c;
      r.push([K, K + 1, K + 1 + (i + 1), K + (i + 1)]);
    }
  }
  const s = 2 * f.length, h = H(n.E, n.nu), g = Array.from({ length: s }, () => new Array(s).fill(0)), e = new Array(s).fill(0), N = [];
  for (let t = 0; t < r.length; t++) {
    const [l, i, _, v] = r[t], S = [f[l][0], f[i][0], f[_][0], f[v][0]], M = [f[l][1], f[i][1], f[_][1], f[v][1]], c = n.incompatibleModes ?? true, { Ke: K, B_center: j } = X(S, M, h, n.thickness, c);
    N.push(j);
    const F = [2 * l, 2 * l + 1, 2 * i, 2 * i + 1, 2 * _, 2 * _ + 1, 2 * v, 2 * v + 1];
    for (let A = 0; A < 8; A++) for (let R = 0; R < 8; R++) g[F[A]][F[R]] += K[A][R];
    if (n.bodyForce) {
      const A = n.bodyForce.bx, R = n.bodyForce.by, q = 0.5 * Math.abs((S[2] - S[0]) * (M[3] - M[1]) - (S[3] - S[1]) * (M[2] - M[0])), o = n.thickness * q / 4;
      for (const B of [l, i, _, v]) e[2 * B] += o * A, e[2 * B + 1] += o * R;
    }
  }
  if (n.pointLoads) for (const t of n.pointLoads) e[2 * t.node] += t.fx, e[2 * t.node + 1] += t.fy;
  const a = n.bcs ? [...n.bcs] : [];
  if (n.bcType && n.meshLx && n.meshLy && n.meshNx && n.meshNy) {
    const t = Math.round(n.meshNx), l = Math.round(n.meshNy);
    if (n.bcType === "cantilever-bottom") for (let i = 0; i <= t; i++) a.push({ node: i, dof: 0, value: 0 }), a.push({ node: i, dof: 1, value: 0 });
    else if (n.bcType === "cantilever-left") for (let i = 0; i <= l; i++) {
      const _ = i * (t + 1);
      a.push({ node: _, dof: 0, value: 0 }), a.push({ node: _, dof: 1, value: 0 });
    }
    else n.bcType === "simply-supported" && (a.push({ node: 0, dof: 0, value: 0 }), a.push({ node: 0, dof: 1, value: 0 }), a.push({ node: t, dof: 1, value: 0 }));
  }
  let U = 0;
  for (let t = 0; t < s; t++) Math.abs(g[t][t]) > U && (U = Math.abs(g[t][t]));
  const J = U * 1e12;
  for (const t of a) {
    const l = 2 * t.node + t.dof;
    g[l][l] += J, e[l] += J * t.value;
  }
  const u = Z(g, e), x = f.map((t, l) => ({ x: t[0], y: t[1], ux: u[2 * l], uy: u[2 * l + 1] })), k = [];
  let m = 0;
  for (let t = 0; t < r.length; t++) {
    const [l, i, _, v] = r[t], S = [u[2 * l], u[2 * l + 1], u[2 * i], u[2 * i + 1], u[2 * _], u[2 * _ + 1], u[2 * v], u[2 * v + 1]], M = N[t], c = [0, 0, 0];
    for (let w = 0; w < 3; w++) for (let T = 0; T < 8; T++) c[w] += M[w][T] * S[T];
    const K = [0, 0, 0];
    for (let w = 0; w < 3; w++) for (let T = 0; T < 3; T++) K[w] += h[w][T] * c[T];
    const j = K[0], F = K[1], A = K[2], R = Math.sqrt(j * j - j * F + F * F + 3 * A * A), q = 0.5 * (j + F), o = Math.sqrt(Math.pow(0.5 * (j - F), 2) + A * A), B = q + o, E = q - o;
    m = Math.max(m, R), k.push({ nodes: [l, i, _, v], sigma_xx: j, sigma_yy: F, tau_xy: A, vonMises: R, sigma_1: B, sigma_2: E });
  }
  let y = 0, b = 0;
  for (const t of x) Math.abs(t.ux) > y && (y = Math.abs(t.ux)), Math.abs(t.uy) > b && (b = Math.abs(t.uy));
  return { nodeResults: x, elementResults: k, maxUx: y, maxUy: b, maxVonMises: m, nDOF: s };
}
export {
  ee as p
};
