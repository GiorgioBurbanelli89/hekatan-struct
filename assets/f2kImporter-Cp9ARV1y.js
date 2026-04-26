function P(L) {
  var _a, _b;
  const i = {}, h = L.split(/\r?\n/);
  let T = "tonf", m = "m";
  const y = L.match(/CurrUnits\s*=\s*"([^"]+)"/);
  if (y) {
    const c = y[1].split(",").map((o) => o.trim()), n = (_a = c[0]) == null ? void 0 : _a.toLowerCase(), t = (_b = c[1]) == null ? void 0 : _b.toLowerCase();
    (n === "tonf" || n === "kn" || n === "kip" || n === "lb" || n === "n") && (T = n === "kn" ? "kN" : n), (t === "m" || t === "mm" || t === "cm" || t === "ft" || t === "in") && (m = t);
  }
  const k = { tonf: 9.80665, kN: 1, kip: 4.4482216, lb: 0.0044482216, N: 1e-3 }, p = { m: 1, mm: 1e-3, cm: 0.01, ft: 0.3048, in: 0.0254 }, K = k[T] / Math.pow(p[m], 3), E = k[T] * p[m], I = k[T], r = p[m];
  function l(c, n) {
    const t = new RegExp(`${n}\\s*=\\s*("[^"]*"|[^\\s]+)`, "i"), o = c.match(t);
    return o ? o[1].replace(/^"|"$/g, "") : null;
  }
  function s(c) {
    if (c == null) return null;
    const n = parseFloat(c);
    return Number.isFinite(n) ? n : null;
  }
  let N = 1 / 0, _ = -1 / 0, M = 1 / 0, S = -1 / 0;
  const f = {};
  let O = null, F = null, e = "";
  for (const c of h) {
    const n = c.trim();
    if (n) {
      if (n.startsWith("TABLE:")) {
        const t = n.match(/TABLE:\s*"([^"]+)"/);
        e = t ? t[1] : "";
        continue;
      }
      if (e.includes("SLAB PROPERTY")) {
        const t = s(l(n, '"Total Thickness"')) ?? s(l(n, '"Slab Thickness"'));
        t != null && i.tz == null && (i.tz = t * r);
      }
      if (e.includes("AREA SPRINGS") || e.includes("SOIL SUBGRADE")) {
        const t = s(l(n, '"Subgrade Modulus"'));
        t != null && (i.ks_kNm3 = t * K, i._springType = "area");
      } else if (e.includes("POINT SPRINGS") && i.ks_kNm3 == null) {
        const t = s(l(n, '"Translational Z"')) ?? s(l(n, '"K Trans Z"'));
        t != null && (i._pointSpringKz_tonfm = t * (I / r) / 9.80665, i._springType = "point");
      }
      if (e === "POINT OBJECT CONNECTIVITY" || e === "JOINT COORDINATES" || e === "OBJECTS AND ELEMENTS - JOINTS") {
        const t = s(l(n, '"Global X"')) ?? s(l(n, "X")), o = s(l(n, '"Global Y"')) ?? s(l(n, "Y"));
        if (t != null && o != null) {
          const u = t * r, a = o * r;
          u < N && (N = u), u > _ && (_ = u), a < M && (M = a), a > S && (S = a);
        }
      }
      if (e.includes("JOINT LOADS") || e.includes("LOAD ASSIGNMENTS")) {
        const t = l(n, '"Load Pattern"'), o = s(l(n, "F3")) ?? s(l(n, "FZ")), u = s(l(n, "M1")) ?? s(l(n, "MX")), a = s(l(n, "M2")) ?? s(l(n, "MY"));
        if (t && (o != null || u != null || a != null)) {
          const d = f[t] ?? { Fz: 0, Mx: 0, My: 0 };
          o != null && (d.Fz += o * I), u != null && (d.Mx += u * E), a != null && (d.My += a * E), f[t] = d;
        }
        const x = s(l(n, '"X Dimension"')), D = s(l(n, '"Y Dimension"'));
        O == null && x != null && (O = x * r), F == null && D != null && (F = D * r);
      }
    }
  }
  return Number.isFinite(N) && Number.isFinite(_) && (i.Lz = _ - N, i.Bz = S - M), O != null && F != null && (i.bc = (O + F) / 2), f.Dead && (i.P_dead_tonf = -f.Dead.Fz / 9.80665, i.Mx_dead_tonfm = f.Dead.Mx / 9.80665, i.My_dead_tonfm = f.Dead.My / 9.80665), f.Live && (i.P_live_tonf = -f.Live.Fz / 9.80665), i.ks_kNm3 != null && (i.ks_factor = 20, i.q_adm = i.ks_kNm3 / (20 * 9.80665)), i;
}
export {
  P as parseZapataF2k
};
