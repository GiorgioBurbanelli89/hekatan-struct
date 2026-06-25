function $(c, r, p = "plane-stress") {
  if (p === "plane-strain") {
    const s = (1 + r) * (1 - 2 * r), a = c * r / s, n = c / (2 * (1 + r));
    return [[a + 2 * n, a, 0], [a, a + 2 * n, 0], [0, 0, n]];
  }
  const l = c / (1 - r * r);
  return [[l, l * r, 0], [l * r, l, 0], [0, 0, l * (1 - r) / 2]];
}
function oo(c, r, p, l = "plane-stress") {
  const s = $(c, r, l);
  if (Math.abs(p) < 1e-10) return s;
  const a = Math.cos(p), n = Math.sin(p), i = a * a, e = n * n, A = a * n, t = i * i, v = e * e, M = i * A, x = A * e, b = s[0][0], m = s[0][1], f = s[1][1], y = s[2][2];
  return [[b * t + 2 * (m + 2 * y) * i * e + f * v, (b + f - 4 * y) * i * e + m * (t + v), (b - m - 2 * y) * M + (m - f + 2 * y) * x], [(b + f - 4 * y) * i * e + m * (t + v), b * v + 2 * (m + 2 * y) * i * e + f * t, (b - m - 2 * y) * x + (m - f + 2 * y) * M], [(b - m - 2 * y) * M + (m - f + 2 * y) * x, (b - m - 2 * y) * x + (m - f + 2 * y) * M, (b + f - 2 * m - 2 * y) * i * e + y * (t + v)]];
}
function to(c, r = "plane-stress") {
  const p = c.reduce((t, v) => t + v.thickness, 0), l = [];
  let s = -p / 2;
  for (const t of c) {
    const v = s + t.thickness / 2;
    l.push({ E: t.E, nu: t.nu, thickness: t.thickness, angle: t.angle ?? 0, density: t.density ?? 0, z_mid: t.z_mid !== void 0 ? t.z_mid : v }), s += t.thickness;
  }
  const a = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], n = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], i = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], e = [[0, 0], [0, 0]];
  let A = 0;
  for (const t of l) {
    const v = oo(t.E, t.nu, t.angle, r), M = t.thickness, x = t.z_mid, b = M * M * M / 12 + M * x * x;
    for (let y = 0; y < 3; y++) for (let j = 0; j < 3; j++) a[y][j] += v[y][j] * M, n[y][j] += v[y][j] * M * x, i[y][j] += v[y][j] * b;
    const m = t.E / (2 * (1 + t.nu)), f = 5 / 6;
    e[0][0] += f * m * M, e[1][1] += f * m * M, A += t.density * M;
  }
  return { A: a, B: n, D: i, As: e, t_total: p, rho_eff: A };
}
const so = [[-1 / Math.sqrt(3), -1 / Math.sqrt(3)], [1 / Math.sqrt(3), -1 / Math.sqrt(3)], [1 / Math.sqrt(3), 1 / Math.sqrt(3)], [-1 / Math.sqrt(3), 1 / Math.sqrt(3)]];
function E(c, r) {
  const p = [0.25 * (1 - c) * (1 - r), 0.25 * (1 + c) * (1 - r), 0.25 * (1 + c) * (1 + r), 0.25 * (1 - c) * (1 + r)], l = [-0.25 * (1 - r), 0.25 * (1 - r), 0.25 * (1 + r), -0.25 * (1 + r)], s = [-0.25 * (1 - c), -0.25 * (1 + c), 0.25 * (1 + c), 0.25 * (1 - c)];
  return { N: p, dNdxi: l, dNdeta: s };
}
function T(c, r, p, l) {
  let s = 0, a = 0, n = 0, i = 0;
  for (let t = 0; t < 4; t++) s += p[t] * c[t], a += p[t] * r[t], n += l[t] * c[t], i += l[t] * r[t];
  const e = s * i - a * n, A = [[i / e, -a / e], [-n / e, s / e]];
  return { detJ: e, invJ: A };
}
function no(c, r, p) {
  const l = p.A, s = p.B, a = p.D, n = p.As, i = Array(20).fill(0).map(() => Array(20).fill(0));
  for (const [e, A] of so) {
    const { dNdxi: t, dNdeta: v } = E(e, A), { detJ: M, invJ: x } = T(c, r, t, v), b = new Array(4), m = new Array(4);
    for (let h = 0; h < 4; h++) b[h] = x[0][0] * t[h] + x[0][1] * v[h], m[h] = x[1][0] * t[h] + x[1][1] * v[h];
    const f = Array(3).fill(0).map(() => Array(20).fill(0));
    for (let h = 0; h < 4; h++) {
      const o = h * 5;
      f[0][o + 0] = b[h], f[1][o + 1] = m[h], f[2][o + 0] = m[h], f[2][o + 1] = b[h];
    }
    const y = Array(3).fill(0).map(() => Array(20).fill(0));
    for (let h = 0; h < 4; h++) {
      const o = h * 5;
      y[0][o + 3] = -b[h], y[1][o + 4] = -m[h], y[2][o + 3] = -m[h], y[2][o + 4] = -b[h];
    }
    const j = eo(l, s, a), P = Array(6).fill(0).map(() => Array(20).fill(0));
    for (let h = 0; h < 20; h++) {
      for (let o = 0; o < 3; o++) P[o][h] = f[o][h];
      for (let o = 0; o < 3; o++) P[o + 3][h] = y[o][h];
    }
    R(i, P, j, Math.abs(M));
  }
  {
    const { N: e, dNdxi: A, dNdeta: t } = E(0, 0), { detJ: v, invJ: M } = T(c, r, A, t), x = new Array(4), b = new Array(4);
    for (let f = 0; f < 4; f++) x[f] = M[0][0] * A[f] + M[0][1] * t[f], b[f] = M[1][0] * A[f] + M[1][1] * t[f];
    const m = Array(2).fill(0).map(() => Array(20).fill(0));
    for (let f = 0; f < 4; f++) {
      const y = f * 5;
      m[0][y + 2] = x[f], m[0][y + 3] = e[f], m[1][y + 2] = b[f], m[1][y + 4] = e[f];
    }
    R(i, m, n, Math.abs(v) * 4);
  }
  return i;
}
function eo(c, r, p) {
  const l = Array(6).fill(0).map(() => Array(6).fill(0));
  for (let s = 0; s < 3; s++) for (let a = 0; a < 3; a++) l[s][a] = c[s][a], l[s][a + 3] = r[s][a], l[s + 3][a] = r[a][s], l[s + 3][a + 3] = p[s][a];
  return l;
}
function R(c, r, p, l) {
  const s = r.length, a = r[0].length;
  for (let n = 0; n < a; n++) for (let i = 0; i < a; i++) {
    let e = 0;
    for (let A = 0; A < s; A++) for (let t = 0; t < s; t++) e += r[A][n] * p[A][t] * r[t][i];
    c[n][i] += e * l;
  }
}
function ro(c, r) {
  const p = r.length, l = c.map((n) => [...n]), s = [...r];
  for (let n = 0; n < p; n++) {
    let i = n;
    for (let e = n + 1; e < p; e++) Math.abs(l[e][n]) > Math.abs(l[i][n]) && (i = e);
    i !== n && ([l[n], l[i]] = [l[i], l[n]], [s[n], s[i]] = [s[i], s[n]]);
    for (let e = n + 1; e < p; e++) {
      const A = l[e][n] / l[n][n];
      for (let t = n; t < p; t++) l[e][t] -= A * l[n][t];
      s[e] -= A * s[n];
    }
  }
  const a = new Array(p).fill(0);
  for (let n = p - 1; n >= 0; n--) {
    let i = s[n];
    for (let e = n + 1; e < p; e++) i -= l[n][e] * a[e];
    a[n] = i / l[n][n];
  }
  return a;
}
function co(c) {
  const r = to(c.layers, c.stressMode ?? "plane-stress"), p = c.meshLx, l = c.meshLy, s = c.meshNx, a = c.meshNy, n = p / s, i = l / a, e = [];
  for (let o = 0; o <= a; o++) for (let d = 0; d <= s; d++) e.push({ x: d * n, y: o * i });
  const A = [];
  for (let o = 0; o < a; o++) for (let d = 0; d < s; d++) {
    const w = o * (s + 1) + d;
    A.push({ nodes: [w, w + 1, w + 1 + (s + 1), w + (s + 1)] });
  }
  const t = e.length * 5, v = Array(t).fill(0).map(() => Array(t).fill(0));
  for (const o of A) {
    const d = o.nodes.map((Q) => e[Q].x), w = o.nodes.map((Q) => e[Q].y), N = no(d, w, r);
    for (let Q = 0; Q < 4; Q++) for (let X = 0; X < 5; X++) {
      const q = o.nodes[Q] * 5 + X;
      for (let k = 0; k < 4; k++) for (let _ = 0; _ < 5; _++) {
        const Y = o.nodes[k] * 5 + _;
        v[q][Y] += N[Q * 5 + X][k * 5 + _];
      }
    }
  }
  const M = new Array(t).fill(0);
  if (c.pressure !== void 0 && c.pressure !== 0) for (const o of A) {
    const d = o.nodes.map((B) => e[B].x), w = o.nodes.map((B) => e[B].y), N = d[0], Q = w[0], X = d[1], q = w[1], k = d[2], _ = w[2], Y = d[3], D = w[3], z = 0.5 * Math.abs((N - k) * (q - D) - (X - Y) * (Q - _)), L = c.pressure * z / 4;
    for (const B of o.nodes) M[B * 5 + 2] += L;
  }
  if (c.pointLoads) for (const o of c.pointLoads) M[o.node * 5 + o.dof] += o.value;
  const x = [];
  if (c.bcType === "simply-supported") for (let o = 0; o <= a; o++) for (let d = 0; d <= s; d++) {
    if (!(d === 0 || d === s || o === 0 || o === a)) continue;
    const N = o * (s + 1) + d;
    x.push({ node: N, dof: 2, value: 0 }), d === 0 && o === 0 ? (x.push({ node: N, dof: 0, value: 0 }), x.push({ node: N, dof: 1, value: 0 })) : d === s && o === 0 && x.push({ node: N, dof: 1, value: 0 });
  }
  else if (c.bcType === "clamped") for (let o = 0; o <= a; o++) for (let d = 0; d <= s; d++) {
    if (!(d === 0 || d === s || o === 0 || o === a)) continue;
    const N = o * (s + 1) + d;
    x.push({ node: N, dof: 0, value: 0 }), x.push({ node: N, dof: 1, value: 0 }), x.push({ node: N, dof: 2, value: 0 }), x.push({ node: N, dof: 3, value: 0 }), x.push({ node: N, dof: 4, value: 0 });
  }
  c.bcs && x.push(...c.bcs);
  const b = 1e15;
  for (const o of x) {
    const d = o.node * 5 + o.dof;
    v[d][d] += b, M[d] += b * o.value;
  }
  const m = ro(v, M), f = e.map((o, d) => ({ u: m[d * 5 + 0], v: m[d * 5 + 1], w: m[d * 5 + 2], thetaX: m[d * 5 + 3], thetaY: m[d * 5 + 4] })), y = A.map((o) => {
    const d = o.nodes.map((u) => e[u].x), w = o.nodes.map((u) => e[u].y), { dNdxi: N, dNdeta: Q } = E(0, 0), { invJ: X } = T(d, w, N, Q), q = new Array(4), k = new Array(4);
    for (let u = 0; u < 4; u++) q[u] = X[0][0] * N[u] + X[0][1] * Q[u], k[u] = X[1][0] * N[u] + X[1][1] * Q[u];
    let _ = 0, Y = 0, D = 0, z = 0, L = 0, B = 0;
    for (let u = 0; u < 4; u++) {
      const J = f[o.nodes[u]];
      _ += q[u] * J.u, Y += k[u] * J.v, D += k[u] * J.u + q[u] * J.v, z += -q[u] * J.thetaX, L += -k[u] * J.thetaY, B += -k[u] * J.thetaX - q[u] * J.thetaY;
    }
    const C = r.A, g = r.B, K = r.D, W = C[0][0] * _ + C[0][1] * Y + C[0][2] * D + g[0][0] * z + g[0][1] * L + g[0][2] * B, G = C[1][0] * _ + C[1][1] * Y + C[1][2] * D + g[1][0] * z + g[1][1] * L + g[1][2] * B, I = C[2][0] * _ + C[2][1] * Y + C[2][2] * D + g[2][0] * z + g[2][1] * L + g[2][2] * B, O = g[0][0] * _ + g[0][1] * Y + g[0][2] * D + K[0][0] * z + K[0][1] * L + K[0][2] * B, S = g[1][0] * _ + g[1][1] * Y + g[1][2] * D + K[1][0] * z + K[1][1] * L + K[1][2] * B, H = g[2][0] * _ + g[2][1] * Y + g[2][2] * D + K[2][0] * z + K[2][1] * L + K[2][2] * B;
    let Z = 0, F = 0;
    for (let u = 0; u < 4; u++) {
      const J = f[o.nodes[u]];
      Z += q[u] * J.w + 0.25 * J.thetaX, F += k[u] * J.w + 0.25 * J.thetaY;
    }
    const U = r.As[0][0] * Z, V = r.As[1][1] * F;
    return { Nxx: W, Nyy: G, Nxy: I, Mxx: O, Myy: S, Mxy: H, Qx: U, Qy: V };
  });
  let j = 0, P = 0, h = 0;
  for (const o of f) Math.abs(o.w) > Math.abs(j) && (j = o.w);
  for (const o of y) Math.abs(o.Mxx) > Math.abs(P) && (P = o.Mxx), Math.abs(o.Myy) > Math.abs(h) && (h = o.Myy);
  return { abbd: r, nodes: e, elements: A, displacements: f, elementResults: y, maxW: j, maxMxx: P, maxMyy: h };
}
export {
  to as c,
  co as l
};
