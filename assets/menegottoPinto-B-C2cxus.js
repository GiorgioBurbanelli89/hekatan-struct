function k(i) {
  const s = i.Fy;
  return { eps: 0, sigma: 0, E_tangent: i.E, eps_r: 0, sigma_r: 0, eps_0: 0, sigma_0: 0, direction: 0, eps_max_plus: s / i.E, eps_max_minus: -s / i.E, Fy_plus: s, Fy_minus: -s };
}
function H(i, s, n) {
  const r = n.E, _ = n.b ?? 0.01, c = n.R0, e = n.cR1, o = n.cR2, m = n.a1 ?? 0, y = n.a2 ?? 0, d = n.a3 ?? 0, u = n.a4 ?? 0, b = i - s.eps;
  let a = s.direction;
  const g = b >= 0 ? 1 : -1;
  if (s.direction === 0 || g !== s.direction) {
    a = g, s = { ...s, direction: a, eps_r: s.eps, sigma_r: s.sigma };
    const E = a === 1 ? s.Fy_plus : s.Fy_minus;
    s.eps_0 = E / r + s.eps_r, s.sigma_0 = E + _ * r * (s.eps_0 - s.eps_r);
  }
  const h = Math.abs(s.eps - s.eps_r) / (Math.abs(s.eps_0 - s.eps_r) + 1e-30), p = c - e * h / (o + h), l = (i - s.eps_r) / (s.eps_0 - s.eps_r + 1e-30), R = Math.pow(1 + Math.pow(Math.abs(l), p), 1 / p), w = _ * l + (1 - _) * l / R, M = s.sigma_r + w * (s.sigma_0 - s.sigma_r), S = (_ + (1 - _) / Math.pow(1 + Math.pow(Math.abs(l), p), 1 + 1 / p)) * (s.sigma_0 - s.sigma_r) / (s.eps_0 - s.eps_r + 1e-30), F = i - M / r;
  let t = Math.max(s.eps_max_plus, F), f = Math.min(s.eps_max_minus, F), C = s.Fy_plus, x = s.Fy_minus;
  return m !== 0 && t > y && (C = n.Fy * (1 + m * (t - y))), d !== 0 && f < -u && (x = -n.Fy * (1 + d * (-f - u))), { eps: i, sigma: M, E_tangent: Math.max(S, 1e-3 * r), eps_r: s.eps_r, sigma_r: s.sigma_r, eps_0: s.eps_0, sigma_0: s.sigma_0, direction: a, eps_max_plus: t, eps_max_minus: f, Fy_plus: C, Fy_minus: x };
}
function v(i, s = 0.06) {
  const n = [{ drift: 375e-5, nCycles: 6 }, { drift: 5e-3, nCycles: 6 }, { drift: 75e-4, nCycles: 6 }, { drift: 0.01, nCycles: 4 }, { drift: 0.015, nCycles: 2 }, { drift: 0.02, nCycles: 2 }, { drift: 0.03, nCycles: 2 }, { drift: 0.04, nCycles: 2 }, { drift: 0.05, nCycles: 2 }, { drift: 0.06, nCycles: 2 }], r = [];
  let _ = 0;
  for (const c of n) {
    if (c.drift > s + 1e-9) break;
    _++, r.push({ step: _, drift: c.drift, nCycles: c.nCycles, displacement: c.drift * i });
  }
  return r;
}
function I(i, s = 40, n = 0.06) {
  const r = v(i, n), _ = [0];
  for (const c of r) for (let e = 0; e < c.nCycles; e++) for (let o = 1; o <= s; o++) {
    const m = o / s * 2 * Math.PI;
    _.push(c.drift * Math.sin(m));
  }
  return _;
}
export {
  v as a,
  I as b,
  k as i,
  H as m
};
