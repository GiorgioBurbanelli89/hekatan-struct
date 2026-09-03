function B(t) {
  return { moiZ: t.Iz, moiY: t.Iy };
}
function H(t, n) {
  const c = t * n, s = t * n * n * n / 12, a = n * t * t * t / 12, e = Math.min(t, n), l = Math.max(t, n), M = e * e * e * l * (1 / 3 - 0.21 * (e / l) * (1 - e * e * e * e / (12 * l * l * l * l)));
  return { A: c, Iz: s, Iy: a, J: M };
}
function K(t) {
  const n = t / 2, c = Math.PI * n * n, s = Math.PI * n * n * n * n / 4, a = Math.PI * n * n * n * n / 2;
  return { A: c, Iz: s, Iy: s, J: a };
}
function O(t, n, c, s) {
  const a = n - 2 * c, e = 2 * t * c + a * s, l = (t * n * n * n - (t - s) * a * a * a) / 12, M = (2 * c * t * t * t + a * s * s * s) / 12, r = (2 * t * c * c * c + a * s * s * s) / 3;
  return { A: e, Iz: l, Iy: M, J: r };
}
function U(t, n, c) {
  const s = t - 2 * c, a = n - 2 * c, e = t * n - s * a, l = (t * n * n * n - s * a * a * a) / 12, M = (n * t * t * t - a * s * s * s) / 12, r = (t - c) * (n - c), I = 2 * ((t - c) / c + (n - c) / c), w = 4 * r * r / (I > 0 ? I : 1);
  return { A: e, Iz: l, Iy: M, J: w };
}
function L(t, n = 4e3) {
  const c = Math.min(...t.map((a) => a.y0)), s = Math.max(...t.map((a) => a.y1));
  return T((a) => {
    const e = t.find((l) => a >= l.y0 && a < l.y1);
    return e ? e.w : 0;
  }, c, s, n);
}
function T(t, n, c, s = 4e3) {
  const a = (c - n) / s, e = new Float64Array(s), l = new Float64Array(s);
  for (let i = 0; i < s; i++) l[i] = n + (i + 0.5) * a, e[i] = Math.max(0, t(l[i]));
  let M = 0, r = 0;
  for (let i = 0; i < s; i++) M += e[i] * a, r += e[i] * l[i] * a;
  const I = M > 0 ? r / M : 0;
  let w = 0;
  for (let i = 0; i < s; i++) w += e[i] * (l[i] - I) ** 2 * a;
  let x = 0, S = 0;
  for (let i = s - 1; i >= 0; i--) x += e[i] * (l[i] - I) * a, e[i] > 0 && (S += x * x / e[i] * a);
  return S > 0 ? w * w / S : 0;
}
const N = /* @__PURE__ */ new Map();
function Y(t, n, c, s, a = 64) {
  const e = `${t}|${n}|${c}|${s}|${a}`, l = N.get(e);
  if (l !== void 0) return l;
  const M = (P, m) => {
    const k = t / P, d = n / m, h = P * m, y = m, z = new Float64Array(h);
    for (let o = 0; o < P; o++) for (let u = 0; u < m; u++) {
      const f = (o + 0.5) * k - t / 2, A = (u + 0.5) * d - n / 2, _ = Math.abs(f) < t / 2 - c && Math.abs(A) < n / 2 - c;
      z[o * m + u] = 1 / (_ ? s : 1);
    }
    const J = (o, u) => 2 * o * u / (o + u), $ = new Float64Array(h), q = new Float64Array(h), R = new Float64Array(h);
    for (let o = 0; o < P; o++) for (let u = 0; u < m; u++) {
      const f = o * m + u, A = z[f], _ = (o < P - 1 ? J(A, z[f + m]) : A) / (k * k), p = (o > 0 ? J(A, z[f - m]) : A) / (k * k), j = (u < m - 1 ? J(A, z[f + 1]) : A) / (d * d), Q = (u > 0 ? J(A, z[f - 1]) : A) / (d * d);
      $[f] = _ + p + j + Q, u < m - 1 && (q[f] = -j), o < P - 1 && (R[f] = -_);
    }
    const W = (o, u) => o === u ? $[u] : o === u + 1 ? q[u] : o === u + y ? R[u] : 0, F = new Float64Array(h * (y + 1));
    for (let o = 0; o < h; o++) {
      const u = Math.min(h - 1, o + y);
      for (let f = o; f <= u; f++) {
        let A = W(f, o);
        const _ = Math.max(0, f - y);
        for (let p = _; p < o; p++) A -= F[f * (y + 1) + (f - p)] * F[o * (y + 1) + (o - p)];
        f === o ? F[o * (y + 1)] = Math.sqrt(A) : F[f * (y + 1) + (f - o)] = A / F[o * (y + 1)];
      }
    }
    const G = new Float64Array(h);
    for (let o = 0; o < h; o++) {
      let u = 2;
      for (let f = Math.max(0, o - y); f < o; f++) u -= F[o * (y + 1) + (o - f)] * G[f];
      G[o] = u / F[o * (y + 1)];
    }
    const C = new Float64Array(h);
    for (let o = h - 1; o >= 0; o--) {
      let u = G[o];
      const f = Math.min(h - 1, o + y);
      for (let A = o + 1; A <= f; A++) u -= F[A * (y + 1) + (A - o)] * C[A];
      C[o] = u / F[o * (y + 1)];
    }
    let g = 0;
    for (let o = 0; o < h; o++) g += C[o];
    return 2 * g * k * d;
  }, r = Math.max(2, Math.round(t / c)), I = Math.max(2, Math.round(n / c)), w = 4 * Math.max(r, I) <= 160 ? 2 : 1, x = M(w * r, w * I), i = 2 * M(2 * w * r, 2 * w * I) - x;
  return N.set(e, i), i;
}
function Z(t, n, c, s, a, e, l) {
  const M = e / s, r = t - 2 * c, I = n - 2 * c, w = t * n - r * I, x = (t * n * n * n - r * I * I * I) / 12, S = (n * t * t * t - I * r * r * r) / 12, i = r * I, P = r * I * I * I / 12, m = I * r * r * r / 12, k = w + M * i, d = x + M * P, h = S + M * m, y = s / (2 * (1 + a)), z = e / (2 * (1 + l)), J = L([{ y0: -n / 2, y1: -I / 2, w: t }, { y0: -I / 2, y1: I / 2, w: 2 * c + M * r }, { y0: I / 2, y1: n / 2, w: t }]), $ = L([{ y0: -t / 2, y1: -r / 2, w: n }, { y0: -r / 2, y1: r / 2, w: 2 * c + M * I }, { y0: r / 2, y1: t / 2, w: n }]), q = Y(t, n, c, z / y);
  return { A: k, Iz: d, Iy: h, J: q, Es: s, Gs: y, A_steel: w, A_conc: i, As2: J, As3: $, n: M, Ec: e };
}
function V(t, n, c, s, a, e) {
  const l = a / c, M = t - 2 * n, r = t / 2, I = M / 2, w = Math.PI * (t * t - M * M) / 4, x = Math.PI * M * M / 4, S = Math.PI * (t ** 4 - M ** 4) / 64, i = Math.PI * M ** 4 / 64, P = w + l * x, m = S + l * i, k = c / (2 * (1 + s)), d = a / (2 * (1 + e)), y = T((J) => 2 * Math.sqrt(Math.max(0, r * r - J * J)) - (Math.abs(J) < I ? (1 - l) * 2 * Math.sqrt(Math.max(0, I * I - J * J)) : 0), -r, r, 8e3), z = Math.PI * (t ** 4 - M ** 4) / 32 + d / k * Math.PI * M ** 4 / 32;
  return { A: P, Iz: m, Iy: m, J: z, Es: c, Gs: k, A_steel: w, A_conc: x, As2: y, As3: y, n: l, Ec: a };
}
function X(t, n, c, s, a, e, l) {
  const M = 4700 * Math.sqrt(e / 1e3) * 1e3;
  return Z(t, n, c, s, a, M, l);
}
export {
  Z as a,
  K as b,
  V as c,
  X as d,
  U as h,
  O as i,
  H as r,
  B as t
};
