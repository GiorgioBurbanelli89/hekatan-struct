function x(n) {
  const t = n.fc, s = n.eco ?? 2e-3, r = n.fl_prime, c = n.Ec ?? 4700 * Math.sqrt(t / 1e3) * 1e3, e = r / t, i = t * (-1.254 + 2.254 * Math.sqrt(1 + 7.94 * e) - 2 * e), o = i / t, u = s * (1 + 5 * (o - 1)), d = Math.min(0.04, 4 * u);
  return { fcc: i, ecc: u, ecu: d, Ec: c, K_conf: o };
}
function C(n, t) {
  if (n <= 0 || n >= t.ecu) return 0;
  const s = n / t.ecc, r = t.fcc / t.ecc, c = t.Ec / (t.Ec - r);
  return t.fcc * s * c / (c - 1 + Math.pow(s, c));
}
function g(n, t) {
  const s = t.Fy, r = t.Es ?? 2e8, c = t.b ?? 0.01, e = s / r;
  if (Math.abs(n) <= e) return r * n;
  const i = n >= 0 ? 1 : -1, o = i * (n - i * e);
  return i * s + c * r * o * i;
}
function I(n, t, s, r, c = 32, e = 8) {
  const i = n / 2, o = i - t, u = 2 * r * t / (n - 2 * t), d = x({ fc: s, fl_prime: u }), M = { Fy: r, Es: 2e8, b: 0.01 }, _ = [], m = Math.PI * (i * i - o * o) / c;
  for (let f = 0; f < c; f++) {
    const l = (f + 0.5) * (2 * Math.PI / c), a = (i + o) / 2;
    _.push({ x: a * Math.cos(l), y: a * Math.sin(l), A: m, kind: "steel" });
  }
  for (let f = 0; f < e; f++) {
    const l = o * (f + 1) / e, a = o * f / e, b = Math.PI * (l * l - a * a) / c, h = (l + a) / 2;
    for (let E = 0; E < c; E++) {
      const P = (E + 0.5) * (2 * Math.PI / c);
      _.push({ x: h * Math.cos(P), y: h * Math.sin(P), A: b, kind: "concrete" });
    }
  }
  return { shape: "circular", D: n, H: n, t, fibers: _, mander: d, steel: M };
}
function p(n, t, s, r, c, e = 16, i = 16) {
  const o = n - 2 * s, u = t - 2 * s, d = 0.6 * 2 * c * s / Math.min(o, u), M = x({ fc: r, fl_prime: d }), _ = { Fy: c, Es: 2e8, b: 0.01 }, m = [], f = n / e, l = t / i;
  for (let a = 0; a < e; a++) for (let A = 0; A < i; A++) {
    const b = -n / 2 + (a + 0.5) * f, h = -t / 2 + (A + 0.5) * l, E = b > -n / 2 + s && b < n / 2 - s, P = h > -t / 2 + s && h < t / 2 - s, y = E && P;
    m.push({ x: b, y: h, A: f * l, kind: y ? "concrete" : "steel" });
  }
  return { shape: "rectangular", D: n, H: t, t: s, fibers: m, mander: M, steel: _ };
}
function k(n, t, s) {
  let r = 0, c = 0;
  for (const e of n.fibers) {
    const i = t - s * e.y;
    let o = 0;
    e.kind === "steel" ? o = g(i, n.steel) : o = C(i, n.mander), e.kind === "steel" && (o = -o), r += o * e.A, c += o * e.A * e.y;
  }
  return { P: r, M: c };
}
function j(n, t, s) {
  let r = t / 1e8;
  const c = 1e-6;
  for (let i = 0; i < 50; i++) {
    const { P: o } = k(n, r, s), { P: u } = k(n, r + c, s), d = (u - o) / c;
    if (Math.abs(d) < 1e-3) break;
    const M = o - t;
    if (Math.abs(M) < Math.abs(t) * 1e-4) break;
    r -= M / d;
  }
  const e = k(n, r, s);
  return { M: e.M, eps_a: r, P_actual: e.P };
}
export {
  C as a,
  p as b,
  k as c,
  I as d,
  j as e,
  x as m,
  g as s
};
