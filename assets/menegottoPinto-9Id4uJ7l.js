function v(i) {
  const s = i.Fy;
  return { eps: 0, sigma: 0, E_tangent: i.E, eps_r: 0, sigma_r: 0, eps_0: 0, sigma_0: 0, direction: 0, eps_max_plus: s / i.E, eps_max_minus: -s / i.E, Fy_plus: s, Fy_minus: -s };
}
function K(i, s, n) {
  const o = n.E, c = n.b ?? 0.01, _ = n.R0 ?? 15, e = n.cR1 ?? 0.925, r = n.cR2 ?? 0.15, t = n.a1 ?? 0, u = n.a2 ?? 0, y = n.a3 ?? 0, g = n.a4 ?? 0, b = i - s.eps;
  let a = s.direction;
  const d = b >= 0 ? 1 : -1;
  if (s.direction === 0 || d !== s.direction) {
    a = d, s = { ...s, direction: a, eps_r: s.eps, sigma_r: s.sigma };
    const x = a === 1 ? s.Fy_plus : s.Fy_minus;
    s.eps_0 = x / o + s.eps_r, s.sigma_0 = x + c * o * (s.eps_0 - s.eps_r);
  }
  const h = Math.abs(s.eps - s.eps_r) / (Math.abs(s.eps_0 - s.eps_r) + 1e-30), m = _ - e * h / (r + h), p = (i - s.eps_r) / (s.eps_0 - s.eps_r + 1e-30), R = Math.pow(1 + Math.pow(Math.abs(p), m), 1 / m), w = c * p + (1 - c) * p / R, M = s.sigma_r + w * (s.sigma_0 - s.sigma_r), S = (c + (1 - c) / Math.pow(1 + Math.pow(Math.abs(p), m), 1 + 1 / m)) * (s.sigma_0 - s.sigma_r) / (s.eps_0 - s.eps_r + 1e-30), E = i - M / o;
  let l = Math.max(s.eps_max_plus, E), f = Math.min(s.eps_max_minus, E), F = s.Fy_plus, C = s.Fy_minus;
  return t !== 0 && l > u && (F = n.Fy * (1 + t * (l - u))), y !== 0 && f < -g && (C = -n.Fy * (1 + y * (-f - g))), { eps: i, sigma: M, E_tangent: Math.max(S, 1e-3 * o), eps_r: s.eps_r, sigma_r: s.sigma_r, eps_0: s.eps_0, sigma_0: s.sigma_0, direction: a, eps_max_plus: l, eps_max_minus: f, Fy_plus: F, Fy_minus: C };
}
function I(i, s) {
  let n = v(s);
  const o = [], c = [];
  for (const _ of i) n = K(_, n, s), o.push(n.sigma), c.push(n.E_tangent);
  return { eps: i, sigma: o, E_tangent: c };
}
function k(i, s = 0.06) {
  const n = [{ drift: 375e-5, nCycles: 6 }, { drift: 5e-3, nCycles: 6 }, { drift: 75e-4, nCycles: 6 }, { drift: 0.01, nCycles: 4 }, { drift: 0.015, nCycles: 2 }, { drift: 0.02, nCycles: 2 }, { drift: 0.03, nCycles: 2 }, { drift: 0.04, nCycles: 2 }, { drift: 0.05, nCycles: 2 }, { drift: 0.06, nCycles: 2 }], o = [];
  let c = 0;
  for (const _ of n) {
    if (_.drift > s + 1e-9) break;
    c++, o.push({ step: c, drift: _.drift, nCycles: _.nCycles, displacement: _.drift * i });
  }
  return o;
}
function L(i, s = 40, n = 0.06) {
  const o = k(i, n), c = [0];
  for (const _ of o) for (let e = 0; e < _.nCycles; e++) for (let r = 1; r <= s; r++) {
    const t = r / s * 2 * Math.PI;
    c.push(_.drift * Math.sin(t));
  }
  return c;
}
export {
  k as a,
  L as b,
  K as c,
  v as i,
  I as m
};
