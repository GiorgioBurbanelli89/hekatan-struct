function h(o) {
  return { moiZ: o.Iz, moiY: o.Iy };
}
function B(o, t) {
  const c = o * t, e = o * t * t * t / 12, r = t * o * o * o / 12, a = Math.min(o, t), M = Math.max(o, t), f = a * a * a * M * (1 / 3 - 0.21 * (a / M) * (1 - a * a * a * a / (12 * M * M * M * M)));
  return { A: c, Iz: e, Iy: r, J: f };
}
function E(o) {
  const t = o / 2, c = Math.PI * t * t, e = Math.PI * t * t * t * t / 4, r = Math.PI * t * t * t * t / 2;
  return { A: c, Iz: e, Iy: e, J: r };
}
function H(o, t, c, e) {
  const r = t - 2 * c, a = 2 * o * c + r * e, M = (o * t * t * t - (o - e) * r * r * r) / 12, f = (2 * c * o * o * o + r * e * e * e) / 12, l = (2 * o * c * c * c + r * e * e * e) / 3;
  return { A: a, Iz: M, Iy: f, J: l };
}
function K(o, t, c) {
  const e = o - 2 * c, r = t - 2 * c, a = o * t - e * r, M = (o * t * t * t - e * r * r * r) / 12, f = (t * o * o * o - r * e * e * e) / 12, l = (o - c) * (t - c), u = 2 * ((o - c) / c + (t - c) / c), k = 4 * l * l / (u > 0 ? u : 1);
  return { A: a, Iz: M, Iy: f, J: k };
}
function R(o, t = 4e3) {
  const c = Math.min(...o.map((s) => s.y0)), r = (Math.max(...o.map((s) => s.y1)) - c) / t, a = new Float64Array(t), M = new Float64Array(t);
  for (let s = 0; s < t; s++) {
    M[s] = c + (s + 0.5) * r;
    const m = o.find((w) => M[s] >= w.y0 && M[s] < w.y1);
    a[s] = m ? m.w : 0;
  }
  let f = 0, l = 0;
  for (let s = 0; s < t; s++) f += a[s] * r, l += a[s] * M[s] * r;
  const u = f > 0 ? l / f : 0;
  let k = 0;
  for (let s = 0; s < t; s++) k += a[s] * (M[s] - u) ** 2 * r;
  let d = 0, p = 0;
  for (let s = t - 1; s >= 0; s--) d += a[s] * (M[s] - u) * r, a[s] > 0 && (p += d * d / a[s] * r);
  return p > 0 ? k * k / p : 0;
}
const Q = /* @__PURE__ */ new Map();
function Y(o, t, c, e, r = 64) {
  const a = `${o}|${t}|${c}|${e}|${r}`, M = Q.get(a);
  if (M !== void 0) return M;
  const f = (m, w) => {
    const F = o / m, z = t / w, J = m * w, A = w, S = new Float64Array(J);
    for (let n = 0; n < m; n++) for (let i = 0; i < w; i++) {
      const y = (n + 0.5) * F - o / 2, I = (i + 0.5) * z - t / 2, $ = Math.abs(y) < o / 2 - c && Math.abs(I) < t / 2 - c;
      S[n * w + i] = 1 / ($ ? e : 1);
    }
    const _ = (n, i) => 2 * n * i / (n + i), g = new Float64Array(J), j = new Float64Array(J), G = new Float64Array(J);
    for (let n = 0; n < m; n++) for (let i = 0; i < w; i++) {
      const y = n * w + i, I = S[y], $ = (n < m - 1 ? _(I, S[y + w]) : I) / (F * F), P = (n > 0 ? _(I, S[y - w]) : I) / (F * F), N = (i < w - 1 ? _(I, S[y + 1]) : I) / (z * z), W = (i > 0 ? _(I, S[y - 1]) : I) / (z * z);
      g[y] = $ + P + N + W, i < w - 1 && (j[y] = -N), n < m - 1 && (G[y] = -$);
    }
    const T = (n, i) => n === i ? g[i] : n === i + 1 ? j[i] : n === i + A ? G[i] : 0, x = new Float64Array(J * (A + 1));
    for (let n = 0; n < J; n++) {
      const i = Math.min(J - 1, n + A);
      for (let y = n; y <= i; y++) {
        let I = T(y, n);
        const $ = Math.max(0, y - A);
        for (let P = $; P < n; P++) I -= x[y * (A + 1) + (y - P)] * x[n * (A + 1) + (n - P)];
        y === n ? x[n * (A + 1)] = Math.sqrt(I) : x[y * (A + 1) + (y - n)] = I / x[n * (A + 1)];
      }
    }
    const q = new Float64Array(J);
    for (let n = 0; n < J; n++) {
      let i = 2;
      for (let y = Math.max(0, n - A); y < n; y++) i -= x[n * (A + 1) + (n - y)] * q[y];
      q[n] = i / x[n * (A + 1)];
    }
    const C = new Float64Array(J);
    for (let n = J - 1; n >= 0; n--) {
      let i = q[n];
      const y = Math.min(J - 1, n + A);
      for (let I = n + 1; I <= y; I++) i -= x[I * (A + 1) + (I - n)] * C[I];
      C[n] = i / x[n * (A + 1)];
    }
    let L = 0;
    for (let n = 0; n < J; n++) L += C[n];
    return 2 * L * F * z;
  }, l = Math.max(2, Math.round(o / c)), u = Math.max(2, Math.round(t / c)), k = 4 * Math.max(l, u) <= 160 ? 2 : 1, d = f(k * l, k * u), s = 2 * f(2 * k * l, 2 * k * u) - d;
  return Q.set(a, s), s;
}
function Z(o, t, c, e, r, a, M) {
  const f = a / e, l = o - 2 * c, u = t - 2 * c, k = o * t - l * u, d = (o * t * t * t - l * u * u * u) / 12, p = (t * o * o * o - u * l * l * l) / 12, s = l * u, m = l * u * u * u / 12, w = u * l * l * l / 12, F = k + f * s, z = d + f * m, J = p + f * w, A = e / (2 * (1 + r)), S = a / (2 * (1 + M)), _ = R([{ y0: -t / 2, y1: -u / 2, w: o }, { y0: -u / 2, y1: u / 2, w: 2 * c + f * l }, { y0: u / 2, y1: t / 2, w: o }]), g = R([{ y0: -o / 2, y1: -l / 2, w: t }, { y0: -l / 2, y1: l / 2, w: 2 * c + f * u }, { y0: l / 2, y1: o / 2, w: t }]), j = Y(o, t, c, S / A);
  return { A: F, Iz: z, Iy: J, J: j, Es: e, Gs: A, A_steel: k, A_conc: s, As2: _, As3: g, n: f, Ec: a };
}
function O(o, t, c, e, r, a, M) {
  const f = 4700 * Math.sqrt(a / 1e3) * 1e3;
  return Z(o, t, c, e, r, f, M);
}
export {
  E as a,
  O as b,
  Z as c,
  K as h,
  H as i,
  B as r,
  h as t
};
