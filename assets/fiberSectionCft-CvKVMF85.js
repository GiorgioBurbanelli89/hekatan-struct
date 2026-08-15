function k(s) {
  const t = s.fc, n = s.eco ?? 2e-3, i = s.fl_prime, c = s.Ec ?? 4700 * Math.sqrt(t / 1e3) * 1e3, e = i / t, o = t * (-1.254 + 2.254 * Math.sqrt(1 + 7.94 * e) - 2 * e), r = o / t, l = n * (1 + 5 * (r - 1)), f = Math.min(0.04, 4 * l);
  return { fcc: o, ecc: l, ecu: f, Ec: c, K_conf: r };
}
function y(s, t) {
  if (s <= 0 || s >= t.ecu) return 0;
  const n = s / t.ecc, i = t.fcc / t.ecc, c = t.Ec / (t.Ec - i);
  return t.fcc * n * c / (c - 1 + Math.pow(n, c));
}
function C(s, t) {
  const n = t.Fy, i = t.Es ?? 2e8, c = t.b ?? 0.01, e = n / i;
  if (Math.abs(s) <= e) return i * s;
  const o = s >= 0 ? 1 : -1, r = o * (s - o * e);
  return o * n + c * i * r * o;
}
function I(s, t, n, i, c = 32, e = 8) {
  const o = s / 2, r = o - t, l = 2 * i * t / (s - 2 * t), f = k({ fc: n, fl_prime: l }), d = { Fy: i, Es: 2e8, b: 0.01 }, M = [], _ = Math.PI * (o * o - r * r) / c;
  for (let a = 0; a < c; a++) {
    const h = (a + 0.5) * (2 * Math.PI / c), u = (o + r) / 2;
    M.push({ x: u * Math.cos(h), y: u * Math.sin(h), A: _, kind: "steel" });
  }
  for (let a = 0; a < e; a++) {
    const h = r * (a + 1) / e, u = r * a / e, m = Math.PI * (h * h - u * u) / c, b = (h + u) / 2;
    for (let E = 0; E < c; E++) {
      const A = (E + 0.5) * (2 * Math.PI / c);
      M.push({ x: b * Math.cos(A), y: b * Math.sin(A), A: m, kind: "concrete" });
    }
  }
  return { shape: "circular", D: s, H: s, t, fibers: M, mander: f, steel: d };
}
function j(s, t, n, i, c, e = 16, o = 16) {
  const r = s - 2 * n, l = t - 2 * n, f = 0.6 * 2 * c * n / Math.min(r, l), d = k({ fc: i, fl_prime: f }), M = { Fy: c, Es: 2e8, b: 0.01 }, _ = [], a = s / e, h = t / o;
  for (let u = 0; u < e; u++) for (let p = 0; p < o; p++) {
    const m = -s / 2 + (u + 0.5) * a, b = -t / 2 + (p + 0.5) * h, E = m > -s / 2 + n && m < s / 2 - n, A = b > -t / 2 + n && b < t / 2 - n, x = E && A;
    _.push({ x: m, y: b, A: a * h, kind: x ? "concrete" : "steel" });
  }
  return { shape: "rectangular", D: s, H: t, t: n, fibers: _, mander: d, steel: M };
}
function P(s, t, n) {
  let i = 0, c = 0;
  for (const e of s.fibers) {
    const o = t - n * e.y;
    let r = 0;
    e.kind === "steel" ? r = C(o, s.steel) : r = y(o, s.mander), e.kind === "steel" && (r = -r), i += r * e.A, c += r * e.A * e.y;
  }
  return { P: i, M: c };
}
function g(s, t, n) {
  let i = t / 1e8;
  const c = 1e-6;
  for (let o = 0; o < 50; o++) {
    const { P: r } = P(s, i, n), { P: l } = P(s, i + c, n), f = (l - r) / c;
    if (Math.abs(f) < 1e-3) break;
    const d = r - t;
    if (Math.abs(d) < Math.abs(t) * 1e-4) break;
    i -= d / f;
  }
  const e = P(s, i, n);
  return { M: e.M, eps_a: i, P_actual: e.P };
}
function F(s, t, n, i = 20, c = 50) {
  const e = [];
  for (let o = 0; o <= i; o++) {
    const r = o / i, l = t * (1 - r) + -n * r;
    let f = 0;
    const d = 0.1;
    for (let M = 1; M <= c; M++) {
      const _ = M / c * d, { M: a } = g(s, l, _);
      Math.abs(a) > Math.abs(f) && (f = a);
    }
    e.push({ P: l, M: Math.abs(f) });
  }
  return e;
}
export {
  j as a,
  y as b,
  g as c,
  I as d,
  C as e,
  k as m,
  F as p,
  P as s
};
