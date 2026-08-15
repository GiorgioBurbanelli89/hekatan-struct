function oo(s, c, f = "plane-stress") {
  if (f === "plane-strain") {
    const n = (1 + c) * (1 - 2 * c), l = s * c / n, e = s / (2 * (1 + c));
    return [[l + 2 * e, l, 0], [l, l + 2 * e, 0], [0, 0, e]];
  }
  const a = s / (1 - c * c);
  return [[a, a * c, 0], [a * c, a, 0], [0, 0, a * (1 - c) / 2]];
}
function to(s, c, f, a = "plane-stress") {
  const n = oo(s, c, a);
  if (Math.abs(f) < 1e-10) return n;
  const l = Math.cos(f), e = Math.sin(f), m = l * l, r = e * e, A = l * e, t = m * m, N = r * r, M = m * A, x = A * r, v = n[0][0], p = n[0][1], i = n[1][1], y = n[2][2];
  return [[v * t + 2 * (p + 2 * y) * m * r + i * N, (v + i - 4 * y) * m * r + p * (t + N), (v - p - 2 * y) * M + (p - i + 2 * y) * x], [(v + i - 4 * y) * m * r + p * (t + N), v * N + 2 * (p + 2 * y) * m * r + i * t, (v - p - 2 * y) * x + (p - i + 2 * y) * M], [(v - p - 2 * y) * M + (p - i + 2 * y) * x, (v - p - 2 * y) * x + (p - i + 2 * y) * M, (v + i - 2 * p - 2 * y) * m * r + y * (t + N)]];
}
function R(s, c = "plane-stress") {
  const f = s.reduce((t, N) => t + N.thickness, 0), a = [];
  let n = -f / 2;
  for (const t of s) {
    const N = n + t.thickness / 2;
    a.push({ E: t.E, nu: t.nu, thickness: t.thickness, angle: t.angle ?? 0, density: t.density ?? 0, z_mid: t.z_mid !== void 0 ? t.z_mid : N }), n += t.thickness;
  }
  const l = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], e = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], m = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], r = [[0, 0], [0, 0]];
  let A = 0;
  for (const t of a) {
    const N = to(t.E, t.nu, t.angle, c), M = t.thickness, x = t.z_mid, v = M * M * M / 12 + M * x * x;
    for (let y = 0; y < 3; y++) for (let _ = 0; _ < 3; _++) l[y][_] += N[y][_] * M, e[y][_] += N[y][_] * M * x, m[y][_] += N[y][_] * v;
    const p = t.E / (2 * (1 + t.nu)), i = 5 / 6;
    r[0][0] += i * p * M, r[1][1] += i * p * M, A += t.density * M;
  }
  return { A: l, B: e, D: m, As: r, t_total: f, rho_eff: A };
}
function co(s) {
  const c = (a) => a.toExponential(3).padStart(11);
  let f = "";
  f += `t_total = ${s.t_total.toFixed(4)} m,  rho_eff = ${s.rho_eff.toFixed(4)} ton/m\xB2
`, f += `
A matrix (extensional [kN/m]):
`;
  for (const a of s.A) f += "  [" + a.map(c).join(", ") + ` ]
`;
  f += `
B matrix (coupling [kN]):
`;
  for (const a of s.B) f += "  [" + a.map(c).join(", ") + ` ]
`;
  f += `
D matrix (bending [kN\xB7m]):
`;
  for (const a of s.D) f += "  [" + a.map(c).join(", ") + ` ]
`;
  f += `
As matrix (transverse shear [kN/m]):
`;
  for (const a of s.As) f += "  [" + a.map(c).join(", ") + ` ]
`;
  return f;
}
function ao(s) {
  return { abbd: R(s.layers) };
}
const so = [[-1 / Math.sqrt(3), -1 / Math.sqrt(3)], [1 / Math.sqrt(3), -1 / Math.sqrt(3)], [1 / Math.sqrt(3), 1 / Math.sqrt(3)], [-1 / Math.sqrt(3), 1 / Math.sqrt(3)]];
function F(s, c) {
  const f = [0.25 * (1 - s) * (1 - c), 0.25 * (1 + s) * (1 - c), 0.25 * (1 + s) * (1 + c), 0.25 * (1 - s) * (1 + c)], a = [-0.25 * (1 - c), 0.25 * (1 - c), 0.25 * (1 + c), -0.25 * (1 + c)], n = [-0.25 * (1 - s), -0.25 * (1 + s), 0.25 * (1 + s), 0.25 * (1 - s)];
  return { N: f, dNdxi: a, dNdeta: n };
}
function P(s, c, f, a) {
  let n = 0, l = 0, e = 0, m = 0;
  for (let t = 0; t < 4; t++) n += f[t] * s[t], l += f[t] * c[t], e += a[t] * s[t], m += a[t] * c[t];
  const r = n * m - l * e, A = [[m / r, -l / r], [-e / r, n / r]];
  return { detJ: r, invJ: A };
}
function no(s, c, f) {
  const a = f.A, n = f.B, l = f.D, e = f.As, m = Array(20).fill(0).map(() => Array(20).fill(0));
  for (const [r, A] of so) {
    const { dNdxi: t, dNdeta: N } = F(r, A), { detJ: M, invJ: x } = P(s, c, t, N), v = new Array(4), p = new Array(4);
    for (let h = 0; h < 4; h++) v[h] = x[0][0] * t[h] + x[0][1] * N[h], p[h] = x[1][0] * t[h] + x[1][1] * N[h];
    const i = Array(3).fill(0).map(() => Array(20).fill(0));
    for (let h = 0; h < 4; h++) {
      const o = h * 5;
      i[0][o + 0] = v[h], i[1][o + 1] = p[h], i[2][o + 0] = p[h], i[2][o + 1] = v[h];
    }
    const y = Array(3).fill(0).map(() => Array(20).fill(0));
    for (let h = 0; h < 4; h++) {
      const o = h * 5;
      y[0][o + 3] = -v[h], y[1][o + 4] = -p[h], y[2][o + 3] = -p[h], y[2][o + 4] = -v[h];
    }
    const _ = eo(a, n, l), E = Array(6).fill(0).map(() => Array(20).fill(0));
    for (let h = 0; h < 20; h++) {
      for (let o = 0; o < 3; o++) E[o][h] = i[o][h];
      for (let o = 0; o < 3; o++) E[o + 3][h] = y[o][h];
    }
    Z(m, E, _, Math.abs(M));
  }
  {
    const { N: r, dNdxi: A, dNdeta: t } = F(0, 0), { detJ: N, invJ: M } = P(s, c, A, t), x = new Array(4), v = new Array(4);
    for (let i = 0; i < 4; i++) x[i] = M[0][0] * A[i] + M[0][1] * t[i], v[i] = M[1][0] * A[i] + M[1][1] * t[i];
    const p = Array(2).fill(0).map(() => Array(20).fill(0));
    for (let i = 0; i < 4; i++) {
      const y = i * 5;
      p[0][y + 2] = x[i], p[0][y + 3] = r[i], p[1][y + 2] = v[i], p[1][y + 4] = r[i];
    }
    Z(m, p, e, Math.abs(N) * 4);
  }
  return m;
}
function eo(s, c, f) {
  const a = Array(6).fill(0).map(() => Array(6).fill(0));
  for (let n = 0; n < 3; n++) for (let l = 0; l < 3; l++) a[n][l] = s[n][l], a[n][l + 3] = c[n][l], a[n + 3][l] = c[l][n], a[n + 3][l + 3] = f[n][l];
  return a;
}
function Z(s, c, f, a) {
  const n = c.length, l = c[0].length;
  for (let e = 0; e < l; e++) for (let m = 0; m < l; m++) {
    let r = 0;
    for (let A = 0; A < n; A++) for (let t = 0; t < n; t++) r += c[A][e] * f[A][t] * c[t][m];
    s[e][m] += r * a;
  }
}
function ro(s, c) {
  const f = c.length, a = s.map((e) => [...e]), n = [...c];
  for (let e = 0; e < f; e++) {
    let m = e;
    for (let r = e + 1; r < f; r++) Math.abs(a[r][e]) > Math.abs(a[m][e]) && (m = r);
    m !== e && ([a[e], a[m]] = [a[m], a[e]], [n[e], n[m]] = [n[m], n[e]]);
    for (let r = e + 1; r < f; r++) {
      const A = a[r][e] / a[e][e];
      for (let t = e; t < f; t++) a[r][t] -= A * a[e][t];
      n[r] -= A * n[e];
    }
  }
  const l = new Array(f).fill(0);
  for (let e = f - 1; e >= 0; e--) {
    let m = n[e];
    for (let r = e + 1; r < f; r++) m -= a[e][r] * l[r];
    l[e] = m / a[e][e];
  }
  return l;
}
function fo(s) {
  const c = R(s.layers, s.stressMode ?? "plane-stress"), f = s.meshLx, a = s.meshLy, n = s.meshNx, l = s.meshNy, e = f / n, m = a / l, r = [];
  for (let o = 0; o <= l; o++) for (let d = 0; d <= n; d++) r.push({ x: d * e, y: o * m });
  const A = [];
  for (let o = 0; o < l; o++) for (let d = 0; d < n; d++) {
    const g = o * (n + 1) + d;
    A.push({ nodes: [g, g + 1, g + 1 + (n + 1), g + (n + 1)] });
  }
  const t = r.length * 5, N = Array(t).fill(0).map(() => Array(t).fill(0));
  for (const o of A) {
    const d = o.nodes.map((k) => r[k].x), g = o.nodes.map((k) => r[k].y), j = no(d, g, c);
    for (let k = 0; k < 4; k++) for (let J = 0; J < 5; J++) {
      const Y = o.nodes[k] * 5 + J;
      for (let b = 0; b < 4; b++) for (let B = 0; B < 5; B++) {
        const X = o.nodes[b] * 5 + B;
        N[Y][X] += j[k * 5 + J][b * 5 + B];
      }
    }
  }
  const M = new Array(t).fill(0);
  if (s.pressure !== void 0 && s.pressure !== 0) for (const o of A) {
    const d = o.nodes.map((Q) => r[Q].x), g = o.nodes.map((Q) => r[Q].y), j = d[0], k = g[0], J = d[1], Y = g[1], b = d[2], B = g[2], X = d[3], q = g[3], z = 0.5 * Math.abs((j - b) * (Y - q) - (J - X) * (k - B)), L = s.pressure * z / 4;
    for (const Q of o.nodes) M[Q * 5 + 2] += L;
  }
  if (s.pointLoads) for (const o of s.pointLoads) M[o.node * 5 + o.dof] += o.value;
  const x = [];
  if (s.bcType === "simply-supported") for (let o = 0; o <= l; o++) for (let d = 0; d <= n; d++) {
    if (!(d === 0 || d === n || o === 0 || o === l)) continue;
    const j = o * (n + 1) + d;
    x.push({ node: j, dof: 2, value: 0 }), d === 0 && o === 0 ? (x.push({ node: j, dof: 0, value: 0 }), x.push({ node: j, dof: 1, value: 0 })) : d === n && o === 0 && x.push({ node: j, dof: 1, value: 0 });
  }
  else if (s.bcType === "clamped") for (let o = 0; o <= l; o++) for (let d = 0; d <= n; d++) {
    if (!(d === 0 || d === n || o === 0 || o === l)) continue;
    const j = o * (n + 1) + d;
    x.push({ node: j, dof: 0, value: 0 }), x.push({ node: j, dof: 1, value: 0 }), x.push({ node: j, dof: 2, value: 0 }), x.push({ node: j, dof: 3, value: 0 }), x.push({ node: j, dof: 4, value: 0 });
  }
  s.bcs && x.push(...s.bcs);
  const v = 1e15;
  for (const o of x) {
    const d = o.node * 5 + o.dof;
    N[d][d] += v, M[d] += v * o.value;
  }
  const p = ro(N, M), i = r.map((o, d) => ({ u: p[d * 5 + 0], v: p[d * 5 + 1], w: p[d * 5 + 2], thetaX: p[d * 5 + 3], thetaY: p[d * 5 + 4] })), y = A.map((o) => {
    const d = o.nodes.map((u) => r[u].x), g = o.nodes.map((u) => r[u].y), { dNdxi: j, dNdeta: k } = F(0, 0), { invJ: J } = P(d, g, j, k), Y = new Array(4), b = new Array(4);
    for (let u = 0; u < 4; u++) Y[u] = J[0][0] * j[u] + J[0][1] * k[u], b[u] = J[1][0] * j[u] + J[1][1] * k[u];
    let B = 0, X = 0, q = 0, z = 0, L = 0, Q = 0;
    for (let u = 0; u < 4; u++) {
      const D = i[o.nodes[u]];
      B += Y[u] * D.u, X += b[u] * D.v, q += b[u] * D.u + Y[u] * D.v, z += -Y[u] * D.thetaX, L += -b[u] * D.thetaY, Q += -b[u] * D.thetaX - Y[u] * D.thetaY;
    }
    const C = c.A, w = c.B, K = c.D, W = C[0][0] * B + C[0][1] * X + C[0][2] * q + w[0][0] * z + w[0][1] * L + w[0][2] * Q, $ = C[1][0] * B + C[1][1] * X + C[1][2] * q + w[1][0] * z + w[1][1] * L + w[1][2] * Q, G = C[2][0] * B + C[2][1] * X + C[2][2] * q + w[2][0] * z + w[2][1] * L + w[2][2] * Q, I = w[0][0] * B + w[0][1] * X + w[0][2] * q + K[0][0] * z + K[0][1] * L + K[0][2] * Q, O = w[1][0] * B + w[1][1] * X + w[1][2] * q + K[1][0] * z + K[1][1] * L + K[1][2] * Q, H = w[2][0] * B + w[2][1] * X + w[2][2] * q + K[2][0] * z + K[2][1] * L + K[2][2] * Q;
    let S = 0, T = 0;
    for (let u = 0; u < 4; u++) {
      const D = i[o.nodes[u]];
      S += Y[u] * D.w + 0.25 * D.thetaX, T += b[u] * D.w + 0.25 * D.thetaY;
    }
    const U = c.As[0][0] * S, V = c.As[1][1] * T;
    return { Nxx: W, Nyy: $, Nxy: G, Mxx: I, Myy: O, Mxy: H, Qx: U, Qy: V };
  });
  let _ = 0, E = 0, h = 0;
  for (const o of i) Math.abs(o.w) > Math.abs(_) && (_ = o.w);
  for (const o of y) Math.abs(o.Mxx) > Math.abs(E) && (E = o.Mxx), Math.abs(o.Myy) > Math.abs(h) && (h = o.Myy);
  return { abbd: c, nodes: r, elements: A, displacements: i, elementResults: y, maxW: _, maxMxx: E, maxMyy: h };
}
export {
  ao as a,
  R as c,
  fo as l,
  co as p
};
