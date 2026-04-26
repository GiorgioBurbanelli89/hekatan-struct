import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as f, P as et } from "./theme-2eEBQPmF.js";
import { g as tt, c as Se, a as ze, e as Fe } from "./getViewer-DnVmZy1T.js";
import { e as ot } from "./makeDraggable-zx2br6Yh.js";
import { g as at } from "./getParameters-CIJBOwMB.js";
import { g as st } from "./styles-Cjdl64P4.js";
import "./Text-DyNVkyur.js";
const nt = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], h = 1 / Math.sqrt(3), Te = [[-h, -h, -h], [+h, -h, -h], [+h, +h, -h], [-h, +h, -h], [-h, -h, +h], [+h, -h, +h], [+h, +h, +h], [-h, +h, +h]];
function Oe(e, a, s) {
  const n = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
  for (let d = 0; d < 8; d++) {
    const [t, i, E] = nt[d];
    n[0][d] = t / 8 * (1 + i * a) * (1 + E * s), n[1][d] = i / 8 * (1 + t * e) * (1 + E * s), n[2][d] = E / 8 * (1 + t * e) * (1 + i * a);
  }
  return n;
}
function He(e, a) {
  const s = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let n = 0; n < 8; n++) {
    const [d, t, i] = e[n];
    s[0][0] += a[0][n] * d, s[0][1] += a[0][n] * t, s[0][2] += a[0][n] * i, s[1][0] += a[1][n] * d, s[1][1] += a[1][n] * t, s[1][2] += a[1][n] * i, s[2][0] += a[2][n] * d, s[2][1] += a[2][n] * t, s[2][2] += a[2][n] * i;
  }
  return s;
}
function Ce(e) {
  return e[0][0] * (e[1][1] * e[2][2] - e[1][2] * e[2][1]) - e[0][1] * (e[1][0] * e[2][2] - e[1][2] * e[2][0]) + e[0][2] * (e[1][0] * e[2][1] - e[1][1] * e[2][0]);
}
function Ie(e) {
  const a = Ce(e);
  return [[(e[1][1] * e[2][2] - e[1][2] * e[2][1]) / a, (e[0][2] * e[2][1] - e[0][1] * e[2][2]) / a, (e[0][1] * e[1][2] - e[0][2] * e[1][1]) / a], [(e[1][2] * e[2][0] - e[1][0] * e[2][2]) / a, (e[0][0] * e[2][2] - e[0][2] * e[2][0]) / a, (e[0][2] * e[1][0] - e[0][0] * e[1][2]) / a], [(e[1][0] * e[2][1] - e[1][1] * e[2][0]) / a, (e[0][1] * e[2][0] - e[0][0] * e[2][1]) / a, (e[0][0] * e[1][1] - e[0][1] * e[1][0]) / a]];
}
function Ne(e) {
  const a = [];
  for (let s = 0; s < 6; s++) a.push(new Array(24).fill(0));
  for (let s = 0; s < 8; s++) {
    const n = e[0][s], d = e[1][s], t = e[2][s], i = s * 3;
    a[0][i + 0] = n, a[1][i + 1] = d, a[2][i + 2] = t, a[3][i + 0] = d, a[3][i + 1] = n, a[4][i + 1] = t, a[4][i + 2] = d, a[5][i + 0] = t, a[5][i + 2] = n;
  }
  return a;
}
function je(e, a) {
  const s = e * a / ((1 + a) * (1 - 2 * a)), n = e / (2 * (1 + a)), d = s + 2 * n;
  return [[d, s, s, 0, 0, 0], [s, d, s, 0, 0, 0], [s, s, d, 0, 0, 0], [0, 0, 0, n, 0, 0], [0, 0, 0, 0, n, 0], [0, 0, 0, 0, 0, n]];
}
function lt(e, a, s) {
  const n = je(a, s), d = [];
  for (let t = 0; t < 24; t++) d.push(new Array(24).fill(0));
  for (const [t, i, E] of Te) {
    const u = Oe(t, i, E), R = He(e, u), k = Ce(R), y = Ie(R), S = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let m = 0; m < 8; m++) S[0][m] = y[0][0] * u[0][m] + y[0][1] * u[1][m] + y[0][2] * u[2][m], S[1][m] = y[1][0] * u[0][m] + y[1][1] * u[1][m] + y[1][2] * u[2][m], S[2][m] = y[2][0] * u[0][m] + y[2][1] * u[1][m] + y[2][2] * u[2][m];
    const F = Ne(S), O = [];
    for (let m = 0; m < 6; m++) {
      O.push(new Array(24).fill(0));
      for (let L = 0; L < 24; L++) {
        let A = 0;
        for (let c = 0; c < 6; c++) A += n[m][c] * F[c][L];
        O[m][L] = A;
      }
    }
    for (let m = 0; m < 24; m++) for (let L = 0; L < 24; L++) {
      let A = 0;
      for (let c = 0; c < 6; c++) A += F[c][m] * O[c][L];
      d[m][L] += A * k;
    }
  }
  return d;
}
function ct(e, a) {
  const s = a.length, n = [];
  for (let t = 0; t < s; t++) n.push([...e[t], a[t]]);
  for (let t = 0; t < s; t++) {
    let i = t, E = Math.abs(n[t][t]);
    for (let u = t + 1; u < s; u++) Math.abs(n[u][t]) > E && (i = u, E = Math.abs(n[u][t]));
    if (E < 1e-12) throw new Error(`Matriz singular en pivoteo i=${t}`);
    i !== t && ([n[t], n[i]] = [n[i], n[t]]);
    for (let u = t + 1; u < s; u++) {
      const R = n[u][t] / n[t][t];
      for (let k = t; k <= s; k++) n[u][k] -= R * n[t][k];
    }
  }
  const d = new Array(s).fill(0);
  for (let t = s - 1; t >= 0; t--) {
    let i = n[t][s];
    for (let E = t + 1; E < s; E++) i -= n[t][E] * d[E];
    d[t] = i / n[t][t];
  }
  return d;
}
function rt(e) {
  const a = performance.now(), { nodes: s, elements: n, E: d, nu: t, supports: i, loads: E } = e, u = s.length, R = 3 * u, k = je(d, t), y = [];
  for (let c = 0; c < R; c++) y.push(new Array(R).fill(0));
  for (const c of n) {
    const $ = c.map((v) => s[v]), U = lt($, d, t);
    for (let v = 0; v < 8; v++) for (let H = 0; H < 8; H++) for (let D = 0; D < 3; D++) for (let B = 0; B < 3; B++) y[3 * c[v] + D][3 * c[H] + B] += U[3 * v + D][3 * H + B];
  }
  const S = new Array(R).fill(0);
  E.forEach(([c, $, U], v) => {
    S[3 * v + 0] += c, S[3 * v + 1] += $, S[3 * v + 2] += U;
  });
  const F = 1e15;
  i.forEach(([c, $, U], v) => {
    c && (y[3 * v + 0][3 * v + 0] += F), $ && (y[3 * v + 1][3 * v + 1] += F), U && (y[3 * v + 2][3 * v + 2] += F);
  });
  const O = ct(y, S), m = /* @__PURE__ */ new Map();
  for (let c = 0; c < u; c++) m.set(c, [O[3 * c], O[3 * c + 1], O[3 * c + 2]]);
  const L = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
  for (let c = 0; c < n.length; c++) {
    const $ = n[c], U = $.map((B) => s[B]), v = [];
    for (const B of $) v.push(O[3 * B], O[3 * B + 1], O[3 * B + 2]);
    const H = [], D = [];
    for (const [B, Pe, re] of Te) {
      const C = Oe(B, Pe, re), ie = He(U, C), Y = Ie(ie), W = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let p = 0; p < 8; p++) W[0][p] = Y[0][0] * C[0][p] + Y[0][1] * C[1][p] + Y[0][2] * C[2][p], W[1][p] = Y[1][0] * C[0][p] + Y[1][1] * C[1][p] + Y[1][2] * C[2][p], W[2][p] = Y[2][0] * C[0][p] + Y[2][1] * C[1][p] + Y[2][2] * C[2][p];
      const de = Ne(W), q = new Array(6).fill(0);
      for (let p = 0; p < 6; p++) for (let b = 0; b < 24; b++) q[p] += de[p][b] * v[b];
      const K = new Array(6).fill(0);
      for (let p = 0; p < 6; p++) for (let b = 0; b < 6; b++) K[p] += k[p][b] * q[b];
      const ee = K[0], le = K[1], te = K[2], Q = K[3], G = K[4], oe = K[5], me = Math.sqrt(0.5 * ((ee - le) ** 2 + (le - te) ** 2 + (te - ee) ** 2) + 3 * (Q * Q + G * G + oe * oe));
      H.push(me), D.push([ee, le, te, Q, G, oe]);
    }
    L.set(c, H), A.set(c, D);
  }
  return { displacements: m, vonMisesPerElement: L, stressPerElement: A, elapsedMs: performance.now() - a };
}
const T = { Lx_col: { value: f.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Lx col (m)" }, Ly_col: { value: f.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Ly col (m)" }, Lz: { value: f.state(3), min: 1.5, max: 6, step: 0.5, label: "Altura col Lz (m)" }, W_beam: { value: f.state(0.2), min: 0.1, max: 0.4, step: 0.1, label: "W viga (m, ancho)" }, H_beam: { value: f.state(0.5), min: 0.25, max: 1, step: 0.25, label: "H viga (m, peralte)" }, L_beam: { value: f.state(1.5), min: 0.5, max: 3, step: 0.25, label: "L viga (m, voladizo)" }, nx_col: { value: f.state(4), min: 2, max: 6, step: 2, label: "nx col" }, ny_col: { value: f.state(4), min: 2, max: 6, step: 2, label: "ny col" }, nz: { value: f.state(12), min: 6, max: 18, step: 2, label: "nz col" }, ny_b: { value: f.state(6), min: 2, max: 12, step: 1, label: "ny viga" }, E: { value: f.state(25e6), min: 15e6, max: 4e7, step: 1e6, label: "E concreto (kN/m\xB2)" }, nu: { value: f.state(0.2), min: 0, max: 0.3, step: 0.01, label: "\u03BD concreto" }, P_tip: { value: f.state(-30), min: -200, max: 200, step: 10, label: "P tip viga (kN, vertical)" } }, Re = f.state([]), De = f.state([]), Ye = f.state({}), Xe = f.state({}), Ze = f.state({}), we = f.state({}), it = f.state([]), ve = f.state("vonMises"), $e = f.state({}), Ue = f.state([]), Ge = f.state({ P: 0, L_beam: 0, I_beam: 0, delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0, delta_he: 0, errEBpct: 0, errTotalPct: 0, elapsed: 0 });
f.derive(() => {
  const e = T.Lx_col.value.val, a = T.Ly_col.value.val, s = T.Lz.value.val, n = T.W_beam.value.val, d = T.H_beam.value.val, t = T.L_beam.value.val, i = Math.round(T.nx_col.value.val), E = Math.round(T.ny_col.value.val), u = Math.round(T.nz.value.val), R = Math.round(T.ny_b.value.val), k = T.E.value.val, y = T.nu.value.val, S = T.P_tip.value.val, F = [], O = /* @__PURE__ */ new Map(), m = [], L = 4;
  function A(o, l, r) {
    const g = `${o.toFixed(L)},${l.toFixed(L)},${r.toFixed(L)}`;
    let x = O.get(g);
    return x === void 0 && (F.push([o, l, r]), x = F.length - 1, O.set(g, x)), x;
  }
  function c(o, l, r, g, x, X, w, Z, P) {
    const M = (g - o) / w, I = (x - l) / Z, J = (X - r) / P;
    for (let z = 0; z < P; z++) for (let N = 0; N < Z; N++) for (let j = 0; j < w; j++) m.push([A(o + j * M, l + N * I, r + z * J), A(o + (j + 1) * M, l + N * I, r + z * J), A(o + (j + 1) * M, l + (N + 1) * I, r + z * J), A(o + j * M, l + (N + 1) * I, r + z * J), A(o + j * M, l + N * I, r + (z + 1) * J), A(o + (j + 1) * M, l + N * I, r + (z + 1) * J), A(o + (j + 1) * M, l + (N + 1) * I, r + (z + 1) * J), A(o + j * M, l + (N + 1) * I, r + (z + 1) * J)]);
  }
  const $ = e / i, U = s / u;
  let v = Math.max(2, Math.round(n / $));
  i - v & 1 && (v = Math.max(2, v - 1));
  let H = Math.max(2, Math.round(d / U));
  H & 1 && (H = Math.max(2, H - 1));
  const D = v * $, B = H * U, re = Math.round(u / 2) * U, C = re - B / 2, ie = re + B / 2, Y = -e / 2, W = e / 2, de = -a / 2, q = a / 2;
  c(Y, de, 0, W, q, s, i, E, u);
  const K = -D / 2, ee = D / 2, le = q, te = q + t;
  c(K, le, C, ee, te, ie, v, R, H);
  const Q = /* @__PURE__ */ new Map();
  F.forEach((o, l) => {
    o[0] >= Y - 1e-6 && o[0] <= W + 1e-6 && o[1] >= de - 1e-6 && o[1] <= q + 1e-6 && (Math.abs(o[2]) < 1e-6 || Math.abs(o[2] - s) < 1e-6) && Q.set(l, [true, true, true]);
  });
  const G = [];
  F.forEach((o, l) => {
    Math.abs(o[1] - te) < 1e-6 && o[0] >= K - 1e-6 && o[0] <= ee + 1e-6 && o[2] >= C - 1e-6 && o[2] <= ie + 1e-6 && G.push(l);
  });
  const oe = /* @__PURE__ */ new Map(), me = G.length > 0 ? S / G.length : 0;
  for (const o of G) oe.set(o, [0, 0, me]);
  const p = F.length;
  console.log(`Col+Viga H8: ${p} nodos \xD7 3 DOF = ${3 * p} DOFs, ${m.length} elementos`);
  let b, ue = null;
  try {
    b = rt({ nodes: F, elements: m, E: k, nu: y, supports: Q, loads: oe }), console.log(`H8 resuelto en ${b.elapsedMs.toFixed(0)} ms`);
  } catch (o) {
    ue = (o == null ? void 0 : o.message) ?? String(o), console.warn("H8 solver:", ue), b = null;
  }
  const Ve = F.map((o) => [o[0], o[1], o[2]]), fe = [], V = { elasticities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map() }, xe = /* @__PURE__ */ new Map();
  function We(o) {
    return [...o].sort((l, r) => l - r).join(",");
  }
  function ae(o, l, r, g) {
    const x = We([o, l, r, g]), X = xe.get(x);
    X ? X.count += 1 : xe.set(x, { face: [o, l, r, g], count: 1 });
  }
  for (const o of m) {
    const [l, r, g, x, X, w, Z, P] = o;
    ae(l, r, g, x), ae(X, w, Z, P), ae(l, r, w, X), ae(x, g, Z, P), ae(l, x, P, X), ae(r, g, Z, w);
  }
  function qe(o) {
    fe.push(o);
    const l = fe.length - 1;
    V.elasticities.set(l, k), V.poissonsRatios.set(l, y), V.thicknesses.set(l, 1e-3), V.shearModuli.set(l, k / (2 * (1 + y))), V.densities.set(l, 24 / 9.80665), V.areas.set(l, 0), V.momentsOfInertiaY.set(l, 0), V.momentsOfInertiaZ.set(l, 0), V.torsionalConstants.set(l, 0);
  }
  for (const { face: o, count: l } of xe.values()) l === 1 && qe(o);
  const ke = { deformations: /* @__PURE__ */ new Map() };
  b && b.displacements.forEach(([o, l, r], g) => {
    ke.deformations.set(g, [o, l, r, 0, 0, 0]);
  });
  const ce = { vonMises: /* @__PURE__ */ new Map(), sigmaXX: /* @__PURE__ */ new Map(), sigmaYY: /* @__PURE__ */ new Map(), sigmaZZ: /* @__PURE__ */ new Map(), tauXY: /* @__PURE__ */ new Map(), tauYZ: /* @__PURE__ */ new Map(), tauXZ: /* @__PURE__ */ new Map(), ux: /* @__PURE__ */ new Map(), uy: /* @__PURE__ */ new Map(), uz: /* @__PURE__ */ new Map() };
  if (b) {
    const o = { vonMises: /* @__PURE__ */ new Map(), sigmaXX: /* @__PURE__ */ new Map(), sigmaYY: /* @__PURE__ */ new Map(), sigmaZZ: /* @__PURE__ */ new Map(), tauXY: /* @__PURE__ */ new Map(), tauYZ: /* @__PURE__ */ new Map(), tauXZ: /* @__PURE__ */ new Map() };
    m.forEach((l, r) => {
      const g = b.vonMisesPerElement.get(r) || [], x = b.stressPerElement.get(r) || [], X = g.reduce((P, M) => P + M, 0) / Math.max(1, g.length), w = [0, 0, 0, 0, 0, 0];
      for (const P of x) for (let M = 0; M < 6; M++) w[M] += P[M];
      for (let P = 0; P < 6; P++) w[P] /= Math.max(1, x.length);
      const Z = { vonMises: X, sigmaXX: w[0], sigmaYY: w[1], sigmaZZ: w[2], tauXY: w[3], tauYZ: w[4], tauXZ: w[5] };
      for (const P of l) for (const M of Object.keys(o)) {
        const I = o[M].get(P) || { sum: 0, count: 0 };
        I.sum += Z[M], I.count += 1, o[M].set(P, I);
      }
    });
    for (const l of Object.keys(o)) o[l].forEach((r, g) => {
      ce[l].set(g, r.sum / Math.max(1, r.count));
    });
    b.displacements.forEach(([l, r, g], x) => {
      ce.ux.set(x, l), ce.uy.set(x, r), ce.uz.set(x, g);
    });
  }
  $e.val = ce, Ue.val = fe;
  const Ae = /* @__PURE__ */ new Map();
  Q.forEach((o, l) => Ae.set(l, [true, true, true, true, true, true]));
  const Le = /* @__PURE__ */ new Map();
  for (const o of G) Le.set(o, [0, 0, me, 0, 0, 0]);
  if (b) {
    let o = 0, l = 0;
    for (const Qe of G) {
      const pe = b.displacements.get(Qe);
      pe && (l += pe[2], Math.abs(pe[2]) > Math.abs(o) && (o = pe[2]));
    }
    l /= Math.max(1, G.length);
    const r = D * B * B * B / 12, g = D * B, x = k / (2 * (1 + y)), X = 5 / 6, w = S * t * t * t / (3 * k * r), Z = S * t / (X * x * g), P = e * a * a * a / 12, J = S * t * s / (16 * k * P) * t, z = w + Z + J, N = Math.abs(l - w) / Math.abs(w || 1) * 100, j = Math.abs(l - z) / Math.abs(z || 1) * 100;
    console.log("  \u2500\u2500\u2500 BENCHMARK col+viga H8 \u2500\u2500\u2500"), console.log(`  \u03B4 E-B puro (rigid wall) = ${w.toExponential(4)} m`), console.log(`  \u03B4 + Timoshenko shear   = ${(w + Z).toExponential(4)} m`), console.log(`  \u03B4 + col flex (joint)   = ${z.toExponential(4)} m`), console.log(`  \u03B4 Hekatan H8 (medido)  = ${l.toExponential(4)} m`), console.log(`  \u0394 vs E-B puro = ${N.toFixed(2)}% (esperado 20-40% extra)`), console.log(`  \u0394 vs total anal\xEDtico = ${j.toFixed(2)}% (esperado <15%)`), Ge.val = { P: S, L_beam: t, I_beam: r, delta_EB: w, delta_shear: Z, delta_col: J, delta_total_an: z, delta_he: l, errEBpct: N, errTotalPct: j, elapsed: b.elapsedMs };
  }
  ue && console.error("Solver H8 fall\xF3:", ue), Re.val = Ve, De.val = fe, Ye.val = { supports: Ae, loads: Le }, Xe.val = V, Ze.val = ke;
});
f.derive(() => {
  const e = $e.val, a = Ue.val, s = ve.val, n = e[s];
  if (!n || n.size === 0 || a.length === 0) {
    we.val = {};
    return;
  }
  const d = /* @__PURE__ */ new Map();
  a.forEach((t, i) => {
    const E = n.get(t[0]) ?? 0, u = n.get(t[1]) ?? 0, R = n.get(t[2]) ?? 0, k = n.get(t[3]) ?? 0;
    d.set(i, [E, u, R, k]);
  }), we.val = { vonMises: d };
});
const ye = tt({ mesh: { nodes: Re, elements: De, nodeInputs: Ye, elementInputs: Xe, deformOutputs: Ze, analyzeOutputs: we }, objects3D: it, settingsObj: { deformedShape: true, shellResults: "none", solidResults: "vonMises", gridSize: 4, deformScale: 100, loads: true, supports: true, displayScale: 0.4 } });
setTimeout(() => {
  const e = ye.__settings;
  (e == null ? void 0 : e.solidResults) && (ve.val = e.solidResults.val !== "none" ? e.solidResults.val : "vonMises", e.solidResults.val === "none" ? e.shellResults.val = "none" : e.shellResults.val = "vonMises", f.derive(() => {
    const a = e.solidResults.val;
    if (a === "none") e.shellResults.val = "none";
    else {
      e.shellResults.val = "vonMises";
      const s = a;
      s !== ve.val && (ve.val = s);
    }
  }));
}, 100);
const Ee = document.createElement("div");
Ee.style.cssText = `
  position: fixed; top: 8px; right: 8px;
  width: 280px; max-height: 85vh; overflow-y: auto;
  z-index: 9999;
`;
const se = new et({ title: "\u{1F9EA} Benchmark \u2014 col+viga H8", container: Ee, expanded: true }), _ = { delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0, delta_he: 0, errTotalPct: 0, errEBpct: 0, status: "\u2014", I_beam: 0, L_beam: 0, P: 0, elapsed: 0 }, ne = (e) => e.toExponential(3), Je = (e) => e.toFixed(2), Ke = (e) => e.toFixed(2), he = se.addFolder({ title: "Anal\xEDtico (E-B + Timoshenko + col flex)" });
he.addBinding(_, "delta_EB", { readonly: true, label: "\u03B4 E-B (m)", format: ne });
he.addBinding(_, "delta_shear", { readonly: true, label: "\u03B4 Timoshenko (m)", format: ne });
he.addBinding(_, "delta_col", { readonly: true, label: "\u03B4 col joint (m)", format: ne });
he.addBinding(_, "delta_total_an", { readonly: true, label: "\u03B4 TOTAL (m)", format: ne });
const _e = se.addFolder({ title: "Hekatan H8 (medido)" });
_e.addBinding(_, "delta_he", { readonly: true, label: "\u03B4 tip (m)", format: ne });
_e.addBinding(_, "errTotalPct", { readonly: true, label: "\u0394 vs total (%)", format: Je });
_e.addBinding(_, "errEBpct", { readonly: true, label: "\u0394 vs E-B (%)", format: Je });
_e.addBinding(_, "status", { readonly: true, label: "Status" });
const be = se.addFolder({ title: "Par\xE1metros / runtime", expanded: false });
be.addBinding(_, "I_beam", { readonly: true, label: "I_beam (m\u2074)", format: ne });
be.addBinding(_, "L_beam", { readonly: true, label: "L_beam (m)", format: Ke });
be.addBinding(_, "P", { readonly: true, label: "P tip (kN)", format: Ke });
be.addBinding(_, "elapsed", { readonly: true, label: "Solve (ms)", format: (e) => e.toFixed(0) });
const Me = se.addFolder({ title: "Unidades color map", expanded: true }), Be = { stress: Fe.val, disp: ze.val, force: Se.val };
Me.addBinding(Be, "stress", { options: { "kN/m\xB2": "kN/m\xB2", kPa: "kPa", MPa: "MPa", GPa: "GPa", "kgf/cm\xB2": "kgf/cm\xB2", "tonf/m\xB2": "tonf/m\xB2", ksi: "ksi", psi: "psi" }, label: "Tensi\xF3n \u03C3/\u03C4" }).on("change", (e) => {
  Fe.val = e.value;
});
Me.addBinding(Be, "disp", { options: { m: "m", cm: "cm", mm: "mm", \u00B5m: "\xB5m" }, label: "Desplazamiento u" }).on("change", (e) => {
  ze.val = e.value;
});
Me.addBinding(Be, "force", { options: { kN: "kN", tonf: "tonf", kip: "kip" }, label: "Fuerza (shells)" }).on("change", (e) => {
  Se.val = e.value;
});
const dt = se.addFolder({ title: "Pendientes", expanded: false }), ge = document.createElement("div");
ge.style.cssText = "font:10.5px ui-monospace,monospace;color:#aaa;padding:6px 8px;line-height:1.5;";
ge.textContent = `\xB7 Patch test (constant strain)
\xB7 MacNeal-Harder warped beam
\xB7 Cook's membrane / Pinched cylinder
\xB7 vs CalculiX, Code Aster, FEniCS, SAP2000`;
ge.style.whiteSpace = "pre-line";
dt.element.appendChild(ge);
document.body.append(Ee);
f.derive(() => {
  const e = Ge.val;
  _.delta_EB = e.delta_EB, _.delta_shear = e.delta_shear, _.delta_col = e.delta_col, _.delta_total_an = e.delta_total_an, _.delta_he = e.delta_he, _.errTotalPct = e.errTotalPct, _.errEBpct = e.errEBpct, _.status = e.errTotalPct < 5 ? "\u2713 PASA (<5%)" : e.errTotalPct < 15 ? "\u26A0 ACEPTABLE (5-15%)" : "\u2717 revisar (>15%)", _.I_beam = e.I_beam, _.L_beam = e.L_beam, _.P = e.P, _.elapsed = e.elapsed, se.refresh();
});
document.body.append(at(T), ye, st({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/solid-cube-fem/main.ts" }));
setTimeout(() => ot(), 200);
setTimeout(() => {
  var _a;
  const e = ye.__ctx;
  (e == null ? void 0 : e.camera) && (e == null ? void 0 : e.controls) && (e.camera.up.set(0, 0, 1), e.camera.position.set(3.5, 3.5, 2.5), e.controls.target.set(0, 1, 1.5), e.controls.update(), (_a = e.render) == null ? void 0 : _a.call(e));
}, 800);
