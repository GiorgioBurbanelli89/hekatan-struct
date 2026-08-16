function v(c) {
  return { moiZ: c.Iz, moiY: c.Iy };
}
function C(c, n) {
  const o = c * n, s = c * n * n * n / 12, t = n * c * c * c / 12, e = Math.min(c, n), I = Math.max(c, n), u = e * e * e * I * (1 / 3 - 0.21 * (e / I) * (1 - e * e * e * e / (12 * I * I * I * I)));
  return { A: o, Iz: s, Iy: t, J: u };
}
function G(c) {
  const n = c / 2, o = Math.PI * n * n, s = Math.PI * n * n * n * n / 4, t = Math.PI * n * n * n * n / 2;
  return { A: o, Iz: s, Iy: s, J: t };
}
function L(c, n, o, s) {
  const t = n - 2 * o, e = 2 * c * o + t * s, I = (c * n * n * n - (c - s) * t * t * t) / 12, u = (2 * o * c * c * c + t * s * s * s) / 12, a = (2 * c * o * o * o + t * s * s * s) / 3;
  return { A: e, Iz: I, Iy: u, J: a };
}
function R(c, n, o) {
  const s = c - 2 * o, t = n - 2 * o, e = c * n - s * t, I = (c * n * n * n - s * t * t * t) / 12, u = (n * c * c * c - t * s * s * s) / 12, a = (c - o) * (n - o), i = 2 * ((c - o) / o + (n - o) / o), r = 4 * a * a / (i > 0 ? i : 1);
  return { A: e, Iz: I, Iy: u, J: r };
}
function Y(c, n, o, s, t, e, I) {
  const a = 4700 * Math.sqrt(e / 1e3) * 1e3 / s, i = c - 2 * o, r = n - 2 * o, m = c * n - i * r, l = (c * n * n * n - i * r * r * r) / 12, M = (n * c * c * c - r * i * i * i) / 12, A = i * r, _ = i * r * r * r / 12, J = r * i * i * i / 12, S = m + a * A, P = l + a * _, p = M + a * J, x = s / (2 * (1 + t)), y = (c - o) * (n - o), z = 2 * ((c - o) / o + (n - o) / o), q = 4 * y * y / (z > 0 ? z : 1);
  return { A: S, Iz: P, Iy: p, J: q, Es: s, Gs: x, A_steel: m, A_conc: A };
}
export {
  Y as a,
  G as c,
  R as h,
  L as i,
  C as r,
  v as t
};
