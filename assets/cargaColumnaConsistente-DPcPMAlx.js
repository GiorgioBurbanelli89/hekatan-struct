const f = 1 / Math.sqrt(3), w = [[-f, -f], [f, -f], [f, f], [-f, f]];
function S(t, n, u, c, h, l, i = l) {
  const d = c - l / 2, p = c + l / 2, j = h - i / 2, o = h + i / 2, m = 1e-9, $ = [];
  let q = 0;
  const C = (r) => {
    let a = 0;
    for (const [s, e] of w) a += y(t, r, s, e);
    return a;
  };
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    let s = 0, e = 0;
    for (const k of a) s += t[k][0] / 4, e += t[k][1] / 4;
    s < d - m || s > p + m || e < j - m || e > o + m || ($.push(r), q += C(a));
  }
  if ($.length === 0) throw new Error(`la huella de columna (${l}x${i} m en ${c},${h}) no cae sobre ninguna celda: la zapata quedar\xEDa sin carga y la flecha saldr\xEDa 0`);
  const M = u / q, b = /* @__PURE__ */ new Map();
  for (const r of $) {
    const a = n[r];
    for (const [s, e] of w) {
      const k = G(s, e), N = y(t, a, s, e);
      for (let g = 0; g < 4; g++) b.set(a[g], (b.get(a[g]) ?? 0) - k[g] * M * N);
    }
  }
  return { pointLoads: [...b].map(([r, a]) => ({ node: r, dof: 0, value: a })), nodos: [...b.keys()], areaCargada: q, celdas: $.length };
}
function G(t, n) {
  return [0.25 * (1 - t) * (1 - n), 0.25 * (1 + t) * (1 - n), 0.25 * (1 + t) * (1 + n), 0.25 * (1 - t) * (1 + n)];
}
function y(t, n, u, c) {
  const h = [-0.25 * (1 - c), 0.25 * (1 - c), 0.25 * (1 + c), -0.25 * (1 + c)], l = [-0.25 * (1 - u), -0.25 * (1 + u), 0.25 * (1 + u), 0.25 * (1 - u)];
  let i = 0, d = 0, p = 0, j = 0;
  for (let o = 0; o < 4; o++) i += h[o] * t[n[o]][0], d += h[o] * t[n[o]][1], p += l[o] * t[n[o]][0], j += l[o] * t[n[o]][1];
  return Math.abs(i * j - d * p);
}
export {
  S as c
};
