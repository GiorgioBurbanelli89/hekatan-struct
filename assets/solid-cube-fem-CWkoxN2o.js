import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as h } from "./theme-2eEBQPmF.js";
import { g as It } from "./getViewer-CARv9b4z.js";
import { g as Ct } from "./getParameters-CIJBOwMB.js";
import { g as Bt } from "./styles-Cjdl64P4.js";
import "./Text-DyNVkyur.js";
const Nt = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], x = 1 / Math.sqrt(3), ht = [[-x, -x, -x], [+x, -x, -x], [+x, +x, -x], [-x, +x, -x], [-x, -x, +x], [+x, -x, +x], [+x, +x, +x], [-x, +x, +x]];
function gt(t, n, s) {
  const a = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
  for (let p = 0; p < 8; p++) {
    const [e, c, w] = Nt[p];
    a[0][p] = e / 8 * (1 + c * n) * (1 + w * s), a[1][p] = c / 8 * (1 + e * t) * (1 + w * s), a[2][p] = w / 8 * (1 + e * t) * (1 + c * n);
  }
  return a;
}
function bt(t, n) {
  const s = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let a = 0; a < 8; a++) {
    const [p, e, c] = t[a];
    s[0][0] += n[0][a] * p, s[0][1] += n[0][a] * e, s[0][2] += n[0][a] * c, s[1][0] += n[1][a] * p, s[1][1] += n[1][a] * e, s[1][2] += n[1][a] * c, s[2][0] += n[2][a] * p, s[2][1] += n[2][a] * e, s[2][2] += n[2][a] * c;
  }
  return s;
}
function _t(t) {
  return t[0][0] * (t[1][1] * t[2][2] - t[1][2] * t[2][1]) - t[0][1] * (t[1][0] * t[2][2] - t[1][2] * t[2][0]) + t[0][2] * (t[1][0] * t[2][1] - t[1][1] * t[2][0]);
}
function yt(t) {
  const n = _t(t);
  return [[(t[1][1] * t[2][2] - t[1][2] * t[2][1]) / n, (t[0][2] * t[2][1] - t[0][1] * t[2][2]) / n, (t[0][1] * t[1][2] - t[0][2] * t[1][1]) / n], [(t[1][2] * t[2][0] - t[1][0] * t[2][2]) / n, (t[0][0] * t[2][2] - t[0][2] * t[2][0]) / n, (t[0][2] * t[1][0] - t[0][0] * t[1][2]) / n], [(t[1][0] * t[2][1] - t[1][1] * t[2][0]) / n, (t[0][1] * t[2][0] - t[0][0] * t[2][1]) / n, (t[0][0] * t[1][1] - t[0][1] * t[1][0]) / n]];
}
function wt(t) {
  const n = [];
  for (let s = 0; s < 6; s++) n.push(new Array(24).fill(0));
  for (let s = 0; s < 8; s++) {
    const a = t[0][s], p = t[1][s], e = t[2][s], c = s * 3;
    n[0][c + 0] = a, n[1][c + 1] = p, n[2][c + 2] = e, n[3][c + 0] = p, n[3][c + 1] = a, n[4][c + 1] = e, n[4][c + 2] = p, n[5][c + 0] = e, n[5][c + 2] = a;
  }
  return n;
}
function Et(t, n) {
  const s = t * n / ((1 + n) * (1 - 2 * n)), a = t / (2 * (1 + n)), p = s + 2 * a;
  return [[p, s, s, 0, 0, 0], [s, p, s, 0, 0, 0], [s, s, p, 0, 0, 0], [0, 0, 0, a, 0, 0], [0, 0, 0, 0, a, 0], [0, 0, 0, 0, 0, a]];
}
function Dt(t, n, s) {
  const a = Et(n, s), p = [];
  for (let e = 0; e < 24; e++) p.push(new Array(24).fill(0));
  for (const [e, c, w] of ht) {
    const m = gt(e, c, w), B = bt(t, m), P = _t(B), _ = yt(B), $ = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let i = 0; i < 8; i++) $[0][i] = _[0][0] * m[0][i] + _[0][1] * m[1][i] + _[0][2] * m[2][i], $[1][i] = _[1][0] * m[0][i] + _[1][1] * m[1][i] + _[1][2] * m[2][i], $[2][i] = _[2][0] * m[0][i] + _[2][1] * m[1][i] + _[2][2] * m[2][i];
    const L = wt($), S = [];
    for (let i = 0; i < 6; i++) {
      S.push(new Array(24).fill(0));
      for (let A = 0; A < 24; A++) {
        let r = 0;
        for (let b = 0; b < 6; b++) r += a[i][b] * L[b][A];
        S[i][A] = r;
      }
    }
    for (let i = 0; i < 24; i++) for (let A = 0; A < 24; A++) {
      let r = 0;
      for (let b = 0; b < 6; b++) r += L[b][i] * S[b][A];
      p[i][A] += r * P;
    }
  }
  return p;
}
function Rt(t, n) {
  const s = n.length, a = [];
  for (let e = 0; e < s; e++) a.push([...t[e], n[e]]);
  for (let e = 0; e < s; e++) {
    let c = e, w = Math.abs(a[e][e]);
    for (let m = e + 1; m < s; m++) Math.abs(a[m][e]) > w && (c = m, w = Math.abs(a[m][e]));
    if (w < 1e-12) throw new Error(`Matriz singular en pivoteo i=${e}`);
    c !== e && ([a[e], a[c]] = [a[c], a[e]]);
    for (let m = e + 1; m < s; m++) {
      const B = a[m][e] / a[e][e];
      for (let P = e; P <= s; P++) a[m][P] -= B * a[e][P];
    }
  }
  const p = new Array(s).fill(0);
  for (let e = s - 1; e >= 0; e--) {
    let c = a[e][s];
    for (let w = e + 1; w < s; w++) c -= a[e][w] * p[w];
    p[e] = c / a[e][e];
  }
  return p;
}
function jt(t) {
  const n = performance.now(), { nodes: s, elements: a, E: p, nu: e, supports: c, loads: w } = t, m = s.length, B = 3 * m, P = Et(p, e), _ = [];
  for (let r = 0; r < B; r++) _.push(new Array(B).fill(0));
  for (const r of a) {
    const b = r.map((v) => s[v]), N = Dt(b, p, e);
    for (let v = 0; v < 8; v++) for (let k = 0; k < 8; k++) for (let E = 0; E < 3; E++) for (let I = 0; I < 3; I++) _[3 * r[v] + E][3 * r[k] + I] += N[3 * v + E][3 * k + I];
  }
  const $ = new Array(B).fill(0);
  w.forEach(([r, b, N], v) => {
    $[3 * v + 0] += r, $[3 * v + 1] += b, $[3 * v + 2] += N;
  });
  const L = 1e15;
  c.forEach(([r, b, N], v) => {
    r && (_[3 * v + 0][3 * v + 0] += L), b && (_[3 * v + 1][3 * v + 1] += L), N && (_[3 * v + 2][3 * v + 2] += L);
  });
  const S = Rt(_, $), i = /* @__PURE__ */ new Map();
  for (let r = 0; r < m; r++) i.set(r, [S[3 * r], S[3 * r + 1], S[3 * r + 2]]);
  const A = /* @__PURE__ */ new Map();
  for (let r = 0; r < a.length; r++) {
    const b = a[r], N = b.map((E) => s[E]), v = [];
    for (const E of b) v.push(S[3 * E], S[3 * E + 1], S[3 * E + 2]);
    const k = [];
    for (const [E, I, V] of ht) {
      const C = gt(E, I, V), at = bt(N, C), F = yt(at), Y = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let u = 0; u < 8; u++) Y[0][u] = F[0][0] * C[0][u] + F[0][1] * C[1][u] + F[0][2] * C[2][u], Y[1][u] = F[1][0] * C[0][u] + F[1][1] * C[1][u] + F[1][2] * C[2][u], Y[2][u] = F[2][0] * C[0][u] + F[2][1] * C[1][u] + F[2][2] * C[2][u];
      const lt = wt(Y), et = new Array(6).fill(0);
      for (let u = 0; u < 6; u++) for (let M = 0; M < 24; M++) et[u] += lt[u][M] * v[M];
      const D = new Array(6).fill(0);
      for (let u = 0; u < 6; u++) for (let M = 0; M < 6; M++) D[u] += P[u][M] * et[M];
      const X = D[0], ot = D[1], nt = D[2], rt = D[3], st = D[4], Z = D[5], J = Math.sqrt(0.5 * ((X - ot) ** 2 + (ot - nt) ** 2 + (nt - X) ** 2) + 3 * (rt * rt + st * st + Z * Z));
      k.push(J);
    }
    A.set(r, k);
  }
  return { displacements: i, vonMisesPerElement: A, elapsedMs: performance.now() - n };
}
const H = { Lx_col: { value: h.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Lx col (m)" }, Ly_col: { value: h.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Ly col (m)" }, Lz: { value: h.state(3), min: 1.5, max: 6, step: 0.5, label: "Altura col Lz (m)" }, W_beam: { value: h.state(0.2), min: 0.1, max: 0.4, step: 0.1, label: "W viga (m, ancho)" }, H_beam: { value: h.state(0.5), min: 0.25, max: 1, step: 0.25, label: "H viga (m, peralte)" }, L_beam: { value: h.state(1.5), min: 0.5, max: 3, step: 0.25, label: "L viga (m, voladizo)" }, nx_col: { value: h.state(4), min: 2, max: 6, step: 2, label: "nx col" }, ny_col: { value: h.state(4), min: 2, max: 6, step: 2, label: "ny col" }, nz: { value: h.state(12), min: 6, max: 18, step: 2, label: "nz col" }, ny_b: { value: h.state(6), min: 2, max: 12, step: 1, label: "ny viga" }, E: { value: h.state(25e6), min: 15e6, max: 4e7, step: 1e6, label: "E concreto (kN/m\xB2)" }, nu: { value: h.state(0.2), min: 0, max: 0.3, step: 0.01, label: "\u03BD concreto" }, P_tip: { value: h.state(-30), min: -200, max: 200, step: 10, label: "P tip viga (kN, vertical)" } }, At = h.state([]), Lt = h.state([]), zt = h.state({}), Ht = h.state({}), Pt = h.state({}), $t = h.state({}), Tt = h.state([]), St = h.state({ P: 0, L_beam: 0, I_beam: 0, delta_an: 0, delta_he: 0, errPct: 0, elapsed: 0 });
h.derive(() => {
  const t = H.Lx_col.value.val, n = H.Ly_col.value.val, s = H.Lz.value.val, a = H.W_beam.value.val, p = H.H_beam.value.val, e = H.L_beam.value.val, c = Math.round(H.nx_col.value.val), w = Math.round(H.ny_col.value.val), m = Math.round(H.nz.value.val), B = Math.round(H.ny_b.value.val), P = H.E.value.val, _ = H.nu.value.val, $ = H.P_tip.value.val, L = [], S = /* @__PURE__ */ new Map(), i = [], A = 4;
  function r(o, l, d) {
    const g = `${o.toFixed(A)},${l.toFixed(A)},${d.toFixed(A)}`;
    let f = S.get(g);
    return f === void 0 && (L.push([o, l, d]), f = L.length - 1, S.set(g, f)), f;
  }
  function b(o, l, d, g, f, z, y, O, tt) {
    const G = (g - o) / y, q = (f - l) / O, U = (z - d) / tt;
    for (let T = 0; T < tt; T++) for (let W = 0; W < O; W++) for (let K = 0; K < y; K++) i.push([r(o + K * G, l + W * q, d + T * U), r(o + (K + 1) * G, l + W * q, d + T * U), r(o + (K + 1) * G, l + (W + 1) * q, d + T * U), r(o + K * G, l + (W + 1) * q, d + T * U), r(o + K * G, l + W * q, d + (T + 1) * U), r(o + (K + 1) * G, l + W * q, d + (T + 1) * U), r(o + (K + 1) * G, l + (W + 1) * q, d + (T + 1) * U), r(o + K * G, l + (W + 1) * q, d + (T + 1) * U)]);
  }
  const N = t / c, v = s / m;
  let k = Math.max(2, Math.round(a / N));
  c - k & 1 && (k = Math.max(2, k - 1));
  let E = Math.max(2, Math.round(p / v));
  E & 1 && (E = Math.max(2, E - 1));
  const I = k * N, V = E * v, at = Math.round(m / 2) * v, F = at - V / 2, Y = at + V / 2, lt = -t / 2, et = t / 2, D = -n / 2, X = n / 2;
  b(lt, D, 0, et, X, s, c, w, m);
  const ot = -I / 2, nt = I / 2, rt = X, st = X + e;
  b(ot, rt, F, nt, st, Y, k, B, E);
  const Z = /* @__PURE__ */ new Map();
  L.forEach((o, l) => {
    o[0] >= lt - 1e-6 && o[0] <= et + 1e-6 && o[1] >= D - 1e-6 && o[1] <= X + 1e-6 && (Math.abs(o[2]) < 1e-6 || Math.abs(o[2] - s) < 1e-6) && Z.set(l, [true, true, true]);
  });
  const J = [];
  L.forEach((o, l) => {
    Math.abs(o[1] - st) < 1e-6 && o[0] >= ot - 1e-6 && o[0] <= nt + 1e-6 && o[2] >= F - 1e-6 && o[2] <= Y + 1e-6 && J.push(l);
  });
  const u = /* @__PURE__ */ new Map(), M = J.length > 0 ? $ / J.length : 0;
  for (const o of J) u.set(o, [0, 0, M]);
  const mt = L.length;
  console.log(`Col+Viga H8: ${mt} nodos \xD7 3 DOF = ${3 * mt} DOFs, ${i.length} elementos`);
  let R, ct = null;
  try {
    R = jt({ nodes: L, elements: i, E: P, nu: _, supports: Z, loads: u }), console.log(`H8 resuelto en ${R.elapsedMs.toFixed(0)} ms`);
  } catch (o) {
    ct = (o == null ? void 0 : o.message) ?? String(o), console.warn("H8 solver:", ct), R = null;
  }
  const Ft = L.map((o) => [o[0], o[1], o[2]]), it = [], j = { elasticities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map() }, dt = /* @__PURE__ */ new Map();
  function Mt(o) {
    return [...o].sort((l, d) => l - d).join(",");
  }
  function Q(o, l, d, g) {
    const f = Mt([o, l, d, g]), z = dt.get(f);
    z ? z.count += 1 : dt.set(f, { face: [o, l, d, g], count: 1 });
  }
  for (const o of i) {
    const [l, d, g, f, z, y, O, tt] = o;
    Q(l, d, g, f), Q(z, y, O, tt), Q(l, d, y, z), Q(f, g, O, tt), Q(l, f, tt, z), Q(d, g, O, y);
  }
  function Ot(o) {
    it.push(o);
    const l = it.length - 1;
    j.elasticities.set(l, P), j.poissonsRatios.set(l, _), j.thicknesses.set(l, 1e-3), j.shearModuli.set(l, P / (2 * (1 + _))), j.densities.set(l, 24 / 9.80665), j.areas.set(l, 0), j.momentsOfInertiaY.set(l, 0), j.momentsOfInertiaZ.set(l, 0), j.torsionalConstants.set(l, 0);
  }
  for (const { face: o, count: l } of dt.values()) l === 1 && Ot(o);
  const ut = { deformations: /* @__PURE__ */ new Map() };
  R && R.displacements.forEach(([o, l, d], g) => {
    ut.deformations.set(g, [o, l, d, 0, 0, 0]);
  });
  const ft = {};
  if (R) {
    const o = /* @__PURE__ */ new Map();
    i.forEach((d, g) => {
      const f = R.vonMisesPerElement.get(g) || [], z = f.reduce((y, O) => y + O, 0) / Math.max(1, f.length);
      for (const y of d) {
        const O = o.get(y) || { sum: 0, count: 0 };
        O.sum += z, O.count += 1, o.set(y, O);
      }
    });
    const l = /* @__PURE__ */ new Map();
    it.forEach((d, g) => {
      const f = d.map((z) => {
        const y = o.get(z);
        return y ? y.sum / y.count : 0;
      });
      l.set(g, [f[0], f[1], f[2], f[3]]);
    }), ft.vonMises = l;
  }
  const vt = /* @__PURE__ */ new Map();
  Z.forEach((o, l) => vt.set(l, [true, true, true, true, true, true]));
  const xt = /* @__PURE__ */ new Map();
  for (const o of J) xt.set(o, [0, 0, M, 0, 0, 0]);
  if (R) {
    let o = 0, l = 0;
    for (const z of J) {
      const y = R.displacements.get(z);
      y && (l += y[2], Math.abs(y[2]) > Math.abs(o) && (o = y[2]));
    }
    l /= Math.max(1, J.length);
    const d = I * V * V * V / 12, g = $ * e * e * e / (3 * P * d), f = Math.abs(l - g) / Math.abs(g || 1) * 100;
    console.log("  \u2500\u2500\u2500 BENCHMARK cantilever beam (Euler-Bernoulli) \u2500\u2500\u2500"), console.log(`  L_beam=${e.toFixed(2)} m, W=${I.toFixed(3)} \xD7 H=${V.toFixed(3)}`), console.log(`  I_beam = W\xB7H\xB3/12 = ${d.toExponential(3)} m\u2074`), console.log(`  \u03B4 anal\xEDtico = P\xB7L\xB3/(3\xB7E\xB7I) = ${g.toExponential(4)} m`), console.log(`  \u03B4 Hekatan H8 (uz tip avg) = ${l.toExponential(4)} m`), console.log(`  \u0394 = ${f.toFixed(2)}%  ${f < 1 ? "\u2713" : f < 10 ? "\u26A0" : "\u2717"}`), St.val = { P: $, L_beam: e, I_beam: d, delta_an: g, delta_he: l, errPct: f, elapsed: R.elapsedMs };
  }
  ct && console.error("Solver H8 fall\xF3:", ct), At.val = Ft, Lt.val = it, zt.val = { supports: vt, loads: xt }, Ht.val = j, Pt.val = ut, $t.val = ft;
});
const kt = It({ mesh: { nodes: At, elements: Lt, nodeInputs: zt, elementInputs: Ht, deformOutputs: Pt, analyzeOutputs: $t }, objects3D: Tt, settingsObj: { deformedShape: true, shellResults: "vonMises", gridSize: 4, deformScale: 100, loads: true, supports: true, displayScale: 0.4 } }), pt = document.createElement("div");
pt.style.cssText = `
  position: fixed; top: 8px; right: 8px;
  background: rgba(20,20,20,0.94); color: #ddd;
  font: 11px/1.4 ui-monospace, Menlo, monospace;
  padding: 10px 14px; border-radius: 6px;
  border: 1px solid #444;
  z-index: 9999; min-width: 340px; max-width: 420px;
`;
h.derive(() => {
  const t = St.val, n = t.errPct < 1 ? '<span style="color:#7eff7e">\u2713 PASA (\u0394&lt;1%)</span>' : t.errPct < 10 ? '<span style="color:#ffcc00">\u26A0 ERROR ACEPTABLE (1-10%, shear deformation H8)</span>' : '<span style="color:#ff5555">\u2717 FALLA (\u0394&gt;10%)</span>';
  pt.innerHTML = `
    <div style="font-weight:bold;color:#ffaa00;margin-bottom:6px;">
      \u{1F9EA} BENCHMARK \u2014 col+viga H8 (concreto)
    </div>
    <table style="border-collapse:collapse;width:100%;">
      <tr style="color:#999;border-bottom:1px solid #444;">
        <td style="padding:2px 6px 2px 0;">Magnitud</td>
        <td style="padding:2px 6px;text-align:right;">Euler-Bern.</td>
        <td style="padding:2px 0;text-align:right;">Hekatan H8</td>
      </tr>
      <tr><td style="padding:1px 6px 1px 0;">\u03B4 tip viga (m)</td>
          <td style="text-align:right;padding:1px 6px;">${t.delta_an.toExponential(3)}</td>
          <td style="text-align:right;padding:1px 0;">${t.delta_he.toExponential(3)}</td></tr>
      <tr><td style="padding:1px 6px 1px 0;">I = W\xB7H\xB3/12 (m\u2074)</td>
          <td colspan="2" style="text-align:right;padding:1px 0;">${t.I_beam.toExponential(3)}</td></tr>
      <tr><td style="padding:1px 6px 1px 0;">L_beam (m)</td>
          <td colspan="2" style="text-align:right;padding:1px 0;">${t.L_beam.toFixed(2)}</td></tr>
      <tr><td style="padding:1px 6px 1px 0;">P tip (kN)</td>
          <td colspan="2" style="text-align:right;padding:1px 0;">${t.P.toFixed(1)}</td></tr>
    </table>
    <div style="margin-top:6px;padding-top:4px;border-top:1px solid #444;">
      <div>\u0394 error = <b>${t.errPct.toFixed(2)}%</b> ${n}</div>
      <div style="color:#888;font-size:10px;">Solver H8 puro TS \xB7 ${t.elapsed.toFixed(0)} ms</div>
    </div>
    <div style="margin-top:6px;color:#999;font-size:10px;">
      <div style="font-weight:bold;color:#aaa;">M\xE1s benchmarks (pendientes):</div>
      <div>\xB7 Patch test (constant strain reproducci\xF3n)</div>
      <div>\xB7 MacNeal-Harder warped beam</div>
      <div>\xB7 Cook's membrane / Pinched cylinder</div>
      <div>\xB7 vs CalculiX, Code Aster, FEniCS, SAP2000</div>
    </div>
  `;
});
document.body.append(pt);
document.body.append(Ct(H), kt, Bt({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/solid-cube-fem/main.ts" }));
setTimeout(() => {
  var _a;
  const t = kt.__ctx;
  (t == null ? void 0 : t.camera) && (t == null ? void 0 : t.controls) && (t.camera.up.set(0, 0, 1), t.camera.position.set(3.5, 3.5, 2.5), t.controls.target.set(0, 1, 1.5), t.controls.update(), (_a = t.render) == null ? void 0 : _a.call(t));
}, 800);
