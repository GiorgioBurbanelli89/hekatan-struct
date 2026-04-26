import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as f, P as We } from "./theme-2eEBQPmF.js";
import { g as Ge } from "./getViewer-Crmeo3ZQ.js";
import { g as qe } from "./getParameters-CIJBOwMB.js";
import { g as Ue } from "./styles-Cjdl64P4.js";
import "./Text-DyNVkyur.js";
const Qe = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], _ = 1 / Math.sqrt(3), Le = [[-_, -_, -_], [+_, -_, -_], [+_, +_, -_], [-_, +_, -_], [-_, -_, +_], [+_, -_, +_], [+_, +_, +_], [-_, +_, +_]];
function ke(e, s, a) {
  const n = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
  for (let d = 0; d < 8; d++) {
    const [t, i, E] = Qe[d];
    n[0][d] = t / 8 * (1 + i * s) * (1 + E * a), n[1][d] = i / 8 * (1 + t * e) * (1 + E * a), n[2][d] = E / 8 * (1 + t * e) * (1 + i * s);
  }
  return n;
}
function Se(e, s) {
  const a = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let n = 0; n < 8; n++) {
    const [d, t, i] = e[n];
    a[0][0] += s[0][n] * d, a[0][1] += s[0][n] * t, a[0][2] += s[0][n] * i, a[1][0] += s[1][n] * d, a[1][1] += s[1][n] * t, a[1][2] += s[1][n] * i, a[2][0] += s[2][n] * d, a[2][1] += s[2][n] * t, a[2][2] += s[2][n] * i;
  }
  return a;
}
function ze(e) {
  return e[0][0] * (e[1][1] * e[2][2] - e[1][2] * e[2][1]) - e[0][1] * (e[1][0] * e[2][2] - e[1][2] * e[2][0]) + e[0][2] * (e[1][0] * e[2][1] - e[1][1] * e[2][0]);
}
function Fe(e) {
  const s = ze(e);
  return [[(e[1][1] * e[2][2] - e[1][2] * e[2][1]) / s, (e[0][2] * e[2][1] - e[0][1] * e[2][2]) / s, (e[0][1] * e[1][2] - e[0][2] * e[1][1]) / s], [(e[1][2] * e[2][0] - e[1][0] * e[2][2]) / s, (e[0][0] * e[2][2] - e[0][2] * e[2][0]) / s, (e[0][2] * e[1][0] - e[0][0] * e[1][2]) / s], [(e[1][0] * e[2][1] - e[1][1] * e[2][0]) / s, (e[0][1] * e[2][0] - e[0][0] * e[2][1]) / s, (e[0][0] * e[1][1] - e[0][1] * e[1][0]) / s]];
}
function Te(e) {
  const s = [];
  for (let a = 0; a < 6; a++) s.push(new Array(24).fill(0));
  for (let a = 0; a < 8; a++) {
    const n = e[0][a], d = e[1][a], t = e[2][a], i = a * 3;
    s[0][i + 0] = n, s[1][i + 1] = d, s[2][i + 2] = t, s[3][i + 0] = d, s[3][i + 1] = n, s[4][i + 1] = t, s[4][i + 2] = d, s[5][i + 0] = t, s[5][i + 2] = n;
  }
  return s;
}
function He(e, s) {
  const a = e * s / ((1 + s) * (1 - 2 * s)), n = e / (2 * (1 + s)), d = a + 2 * n;
  return [[d, a, a, 0, 0, 0], [a, d, a, 0, 0, 0], [a, a, d, 0, 0, 0], [0, 0, 0, n, 0, 0], [0, 0, 0, 0, n, 0], [0, 0, 0, 0, 0, n]];
}
function et(e, s, a) {
  const n = He(s, a), d = [];
  for (let t = 0; t < 24; t++) d.push(new Array(24).fill(0));
  for (const [t, i, E] of Le) {
    const u = ke(t, i, E), Y = Se(e, u), A = ze(Y), y = Fe(Y), S = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let m = 0; m < 8; m++) S[0][m] = y[0][0] * u[0][m] + y[0][1] * u[1][m] + y[0][2] * u[2][m], S[1][m] = y[1][0] * u[0][m] + y[1][1] * u[1][m] + y[1][2] * u[2][m], S[2][m] = y[2][0] * u[0][m] + y[2][1] * u[1][m] + y[2][2] * u[2][m];
    const F = Te(S), H = [];
    for (let m = 0; m < 6; m++) {
      H.push(new Array(24).fill(0));
      for (let k = 0; k < 24; k++) {
        let L = 0;
        for (let c = 0; c < 6; c++) L += n[m][c] * F[c][k];
        H[m][k] = L;
      }
    }
    for (let m = 0; m < 24; m++) for (let k = 0; k < 24; k++) {
      let L = 0;
      for (let c = 0; c < 6; c++) L += F[c][m] * H[c][k];
      d[m][k] += L * A;
    }
  }
  return d;
}
function tt(e, s) {
  const a = s.length, n = [];
  for (let t = 0; t < a; t++) n.push([...e[t], s[t]]);
  for (let t = 0; t < a; t++) {
    let i = t, E = Math.abs(n[t][t]);
    for (let u = t + 1; u < a; u++) Math.abs(n[u][t]) > E && (i = u, E = Math.abs(n[u][t]));
    if (E < 1e-12) throw new Error(`Matriz singular en pivoteo i=${t}`);
    i !== t && ([n[t], n[i]] = [n[i], n[t]]);
    for (let u = t + 1; u < a; u++) {
      const Y = n[u][t] / n[t][t];
      for (let A = t; A <= a; A++) n[u][A] -= Y * n[t][A];
    }
  }
  const d = new Array(a).fill(0);
  for (let t = a - 1; t >= 0; t--) {
    let i = n[t][a];
    for (let E = t + 1; E < a; E++) i -= n[t][E] * d[E];
    d[t] = i / n[t][t];
  }
  return d;
}
function ot(e) {
  const s = performance.now(), { nodes: a, elements: n, E: d, nu: t, supports: i, loads: E } = e, u = a.length, Y = 3 * u, A = He(d, t), y = [];
  for (let c = 0; c < Y; c++) y.push(new Array(Y).fill(0));
  for (const c of n) {
    const D = c.map((v) => a[v]), J = et(D, d, t);
    for (let v = 0; v < 8; v++) for (let O = 0; O < 8; O++) for (let X = 0; X < 3; X++) for (let B = 0; B < 3; B++) y[3 * c[v] + X][3 * c[O] + B] += J[3 * v + X][3 * O + B];
  }
  const S = new Array(Y).fill(0);
  E.forEach(([c, D, J], v) => {
    S[3 * v + 0] += c, S[3 * v + 1] += D, S[3 * v + 2] += J;
  });
  const F = 1e15;
  i.forEach(([c, D, J], v) => {
    c && (y[3 * v + 0][3 * v + 0] += F), D && (y[3 * v + 1][3 * v + 1] += F), J && (y[3 * v + 2][3 * v + 2] += F);
  });
  const H = tt(y, S), m = /* @__PURE__ */ new Map();
  for (let c = 0; c < u; c++) m.set(c, [H[3 * c], H[3 * c + 1], H[3 * c + 2]]);
  const k = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
  for (let c = 0; c < n.length; c++) {
    const D = n[c], J = D.map((B) => a[B]), v = [];
    for (const B of D) v.push(H[3 * B], H[3 * B + 1], H[3 * B + 2]);
    const O = [], X = [];
    for (const [B, Me, re] of Le) {
      const C = ke(B, Me, re), ie = Se(J, C), Z = Fe(ie), q = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let p = 0; p < 8; p++) q[0][p] = Z[0][0] * C[0][p] + Z[0][1] * C[1][p] + Z[0][2] * C[2][p], q[1][p] = Z[1][0] * C[0][p] + Z[1][1] * C[1][p] + Z[1][2] * C[2][p], q[2][p] = Z[2][0] * C[0][p] + Z[2][1] * C[1][p] + Z[2][2] * C[2][p];
      const de = Te(q), U = new Array(6).fill(0);
      for (let p = 0; p < 6; p++) for (let b = 0; b < 24; b++) U[p] += de[p][b] * v[b];
      const W = new Array(6).fill(0);
      for (let p = 0; p < 6; p++) for (let b = 0; b < 6; b++) W[p] += A[p][b] * U[b];
      const ee = W[0], ne = W[1], te = W[2], Q = W[3], K = W[4], oe = W[5], me = Math.sqrt(0.5 * ((ee - ne) ** 2 + (ne - te) ** 2 + (te - ee) ** 2) + 3 * (Q * Q + K * K + oe * oe));
      O.push(me), X.push([ee, ne, te, Q, K, oe]);
    }
    k.set(c, O), L.set(c, X);
  }
  return { displacements: m, vonMisesPerElement: k, stressPerElement: L, elapsedMs: performance.now() - s };
}
const T = { Lx_col: { value: f.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Lx col (m)" }, Ly_col: { value: f.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Ly col (m)" }, Lz: { value: f.state(3), min: 1.5, max: 6, step: 0.5, label: "Altura col Lz (m)" }, W_beam: { value: f.state(0.2), min: 0.1, max: 0.4, step: 0.1, label: "W viga (m, ancho)" }, H_beam: { value: f.state(0.5), min: 0.25, max: 1, step: 0.25, label: "H viga (m, peralte)" }, L_beam: { value: f.state(1.5), min: 0.5, max: 3, step: 0.25, label: "L viga (m, voladizo)" }, nx_col: { value: f.state(4), min: 2, max: 6, step: 2, label: "nx col" }, ny_col: { value: f.state(4), min: 2, max: 6, step: 2, label: "ny col" }, nz: { value: f.state(12), min: 6, max: 18, step: 2, label: "nz col" }, ny_b: { value: f.state(6), min: 2, max: 12, step: 1, label: "ny viga" }, E: { value: f.state(25e6), min: 15e6, max: 4e7, step: 1e6, label: "E concreto (kN/m\xB2)" }, nu: { value: f.state(0.2), min: 0, max: 0.3, step: 0.01, label: "\u03BD concreto" }, P_tip: { value: f.state(-30), min: -200, max: 200, step: 10, label: "P tip viga (kN, vertical)" } }, Oe = f.state([]), Ce = f.state([]), Ie = f.state({}), Re = f.state({}), je = f.state({}), we = f.state({}), st = f.state([]), ve = f.state("vonMises"), Ye = f.state({}), Xe = f.state([]), Ze = f.state({ P: 0, L_beam: 0, I_beam: 0, delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0, delta_he: 0, errEBpct: 0, errTotalPct: 0, elapsed: 0 });
f.derive(() => {
  const e = T.Lx_col.value.val, s = T.Ly_col.value.val, a = T.Lz.value.val, n = T.W_beam.value.val, d = T.H_beam.value.val, t = T.L_beam.value.val, i = Math.round(T.nx_col.value.val), E = Math.round(T.ny_col.value.val), u = Math.round(T.nz.value.val), Y = Math.round(T.ny_b.value.val), A = T.E.value.val, y = T.nu.value.val, S = T.P_tip.value.val, F = [], H = /* @__PURE__ */ new Map(), m = [], k = 4;
  function L(o, l, r) {
    const g = `${o.toFixed(k)},${l.toFixed(k)},${r.toFixed(k)}`;
    let x = H.get(g);
    return x === void 0 && (F.push([o, l, r]), x = F.length - 1, H.set(g, x)), x;
  }
  function c(o, l, r, g, x, $, w, N, P) {
    const M = (g - o) / w, I = (x - l) / N, V = ($ - r) / P;
    for (let z = 0; z < P; z++) for (let R = 0; R < N; R++) for (let j = 0; j < w; j++) m.push([L(o + j * M, l + R * I, r + z * V), L(o + (j + 1) * M, l + R * I, r + z * V), L(o + (j + 1) * M, l + (R + 1) * I, r + z * V), L(o + j * M, l + (R + 1) * I, r + z * V), L(o + j * M, l + R * I, r + (z + 1) * V), L(o + (j + 1) * M, l + R * I, r + (z + 1) * V), L(o + (j + 1) * M, l + (R + 1) * I, r + (z + 1) * V), L(o + j * M, l + (R + 1) * I, r + (z + 1) * V)]);
  }
  const D = e / i, J = a / u;
  let v = Math.max(2, Math.round(n / D));
  i - v & 1 && (v = Math.max(2, v - 1));
  let O = Math.max(2, Math.round(d / J));
  O & 1 && (O = Math.max(2, O - 1));
  const X = v * D, B = O * J, re = Math.round(u / 2) * J, C = re - B / 2, ie = re + B / 2, Z = -e / 2, q = e / 2, de = -s / 2, U = s / 2;
  c(Z, de, 0, q, U, a, i, E, u);
  const W = -X / 2, ee = X / 2, ne = U, te = U + t;
  c(W, ne, C, ee, te, ie, v, Y, O);
  const Q = /* @__PURE__ */ new Map();
  F.forEach((o, l) => {
    o[0] >= Z - 1e-6 && o[0] <= q + 1e-6 && o[1] >= de - 1e-6 && o[1] <= U + 1e-6 && (Math.abs(o[2]) < 1e-6 || Math.abs(o[2] - a) < 1e-6) && Q.set(l, [true, true, true]);
  });
  const K = [];
  F.forEach((o, l) => {
    Math.abs(o[1] - te) < 1e-6 && o[0] >= W - 1e-6 && o[0] <= ee + 1e-6 && o[2] >= C - 1e-6 && o[2] <= ie + 1e-6 && K.push(l);
  });
  const oe = /* @__PURE__ */ new Map(), me = K.length > 0 ? S / K.length : 0;
  for (const o of K) oe.set(o, [0, 0, me]);
  const p = F.length;
  console.log(`Col+Viga H8: ${p} nodos \xD7 3 DOF = ${3 * p} DOFs, ${m.length} elementos`);
  let b, ue = null;
  try {
    b = ot({ nodes: F, elements: m, E: A, nu: y, supports: Q, loads: oe }), console.log(`H8 resuelto en ${b.elapsedMs.toFixed(0)} ms`);
  } catch (o) {
    ue = (o == null ? void 0 : o.message) ?? String(o), console.warn("H8 solver:", ue), b = null;
  }
  const De = F.map((o) => [o[0], o[1], o[2]]), fe = [], G = { elasticities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map() }, xe = /* @__PURE__ */ new Map();
  function Je(o) {
    return [...o].sort((l, r) => l - r).join(",");
  }
  function se(o, l, r, g) {
    const x = Je([o, l, r, g]), $ = xe.get(x);
    $ ? $.count += 1 : xe.set(x, { face: [o, l, r, g], count: 1 });
  }
  for (const o of m) {
    const [l, r, g, x, $, w, N, P] = o;
    se(l, r, g, x), se($, w, N, P), se(l, r, w, $), se(x, g, N, P), se(l, x, P, $), se(r, g, N, w);
  }
  function Ke(o) {
    fe.push(o);
    const l = fe.length - 1;
    G.elasticities.set(l, A), G.poissonsRatios.set(l, y), G.thicknesses.set(l, 1e-3), G.shearModuli.set(l, A / (2 * (1 + y))), G.densities.set(l, 24 / 9.80665), G.areas.set(l, 0), G.momentsOfInertiaY.set(l, 0), G.momentsOfInertiaZ.set(l, 0), G.torsionalConstants.set(l, 0);
  }
  for (const { face: o, count: l } of xe.values()) l === 1 && Ke(o);
  const Be = { deformations: /* @__PURE__ */ new Map() };
  b && b.displacements.forEach(([o, l, r], g) => {
    Be.deformations.set(g, [o, l, r, 0, 0, 0]);
  });
  const le = { vonMises: /* @__PURE__ */ new Map(), sigmaXX: /* @__PURE__ */ new Map(), sigmaYY: /* @__PURE__ */ new Map(), sigmaZZ: /* @__PURE__ */ new Map(), tauXY: /* @__PURE__ */ new Map(), tauYZ: /* @__PURE__ */ new Map(), tauXZ: /* @__PURE__ */ new Map(), ux: /* @__PURE__ */ new Map(), uy: /* @__PURE__ */ new Map(), uz: /* @__PURE__ */ new Map() };
  if (b) {
    const o = { vonMises: /* @__PURE__ */ new Map(), sigmaXX: /* @__PURE__ */ new Map(), sigmaYY: /* @__PURE__ */ new Map(), sigmaZZ: /* @__PURE__ */ new Map(), tauXY: /* @__PURE__ */ new Map(), tauYZ: /* @__PURE__ */ new Map(), tauXZ: /* @__PURE__ */ new Map() };
    m.forEach((l, r) => {
      const g = b.vonMisesPerElement.get(r) || [], x = b.stressPerElement.get(r) || [], $ = g.reduce((P, M) => P + M, 0) / Math.max(1, g.length), w = [0, 0, 0, 0, 0, 0];
      for (const P of x) for (let M = 0; M < 6; M++) w[M] += P[M];
      for (let P = 0; P < 6; P++) w[P] /= Math.max(1, x.length);
      const N = { vonMises: $, sigmaXX: w[0], sigmaYY: w[1], sigmaZZ: w[2], tauXY: w[3], tauYZ: w[4], tauXZ: w[5] };
      for (const P of l) for (const M of Object.keys(o)) {
        const I = o[M].get(P) || { sum: 0, count: 0 };
        I.sum += N[M], I.count += 1, o[M].set(P, I);
      }
    });
    for (const l of Object.keys(o)) o[l].forEach((r, g) => {
      le[l].set(g, r.sum / Math.max(1, r.count));
    });
    b.displacements.forEach(([l, r, g], x) => {
      le.ux.set(x, l), le.uy.set(x, r), le.uz.set(x, g);
    });
  }
  Ye.val = le, Xe.val = fe;
  const Pe = /* @__PURE__ */ new Map();
  Q.forEach((o, l) => Pe.set(l, [true, true, true, true, true, true]));
  const Ae = /* @__PURE__ */ new Map();
  for (const o of K) Ae.set(o, [0, 0, me, 0, 0, 0]);
  if (b) {
    let o = 0, l = 0;
    for (const Ve of K) {
      const pe = b.displacements.get(Ve);
      pe && (l += pe[2], Math.abs(pe[2]) > Math.abs(o) && (o = pe[2]));
    }
    l /= Math.max(1, K.length);
    const r = X * B * B * B / 12, g = X * B, x = A / (2 * (1 + y)), $ = 5 / 6, w = S * t * t * t / (3 * A * r), N = S * t / ($ * x * g), P = e * s * s * s / 12, V = S * t * a / (16 * A * P) * t, z = w + N + V, R = Math.abs(l - w) / Math.abs(w || 1) * 100, j = Math.abs(l - z) / Math.abs(z || 1) * 100;
    console.log("  \u2500\u2500\u2500 BENCHMARK col+viga H8 \u2500\u2500\u2500"), console.log(`  \u03B4 E-B puro (rigid wall) = ${w.toExponential(4)} m`), console.log(`  \u03B4 + Timoshenko shear   = ${(w + N).toExponential(4)} m`), console.log(`  \u03B4 + col flex (joint)   = ${z.toExponential(4)} m`), console.log(`  \u03B4 Hekatan H8 (medido)  = ${l.toExponential(4)} m`), console.log(`  \u0394 vs E-B puro = ${R.toFixed(2)}% (esperado 20-40% extra)`), console.log(`  \u0394 vs total anal\xEDtico = ${j.toFixed(2)}% (esperado <15%)`), Ze.val = { P: S, L_beam: t, I_beam: r, delta_EB: w, delta_shear: N, delta_col: V, delta_total_an: z, delta_he: l, errEBpct: R, errTotalPct: j, elapsed: b.elapsedMs };
  }
  ue && console.error("Solver H8 fall\xF3:", ue), Oe.val = De, Ce.val = fe, Ie.val = { supports: Pe, loads: Ae }, Re.val = G, je.val = Be;
});
f.derive(() => {
  const e = Ye.val, s = Xe.val, a = ve.val, n = e[a];
  if (!n || n.size === 0 || s.length === 0) {
    we.val = {};
    return;
  }
  const d = /* @__PURE__ */ new Map();
  s.forEach((t, i) => {
    const E = n.get(t[0]) ?? 0, u = n.get(t[1]) ?? 0, Y = n.get(t[2]) ?? 0, A = n.get(t[3]) ?? 0;
    d.set(i, [E, u, Y, A]);
  }), we.val = { vonMises: d };
});
const ye = Ge({ mesh: { nodes: Oe, elements: Ce, nodeInputs: Ie, elementInputs: Re, deformOutputs: je, analyzeOutputs: we }, objects3D: st, settingsObj: { deformedShape: true, shellResults: "none", solidResults: "vonMises", gridSize: 4, deformScale: 100, loads: true, supports: true, displayScale: 0.4 } });
setTimeout(() => {
  const e = ye.__settings;
  (e == null ? void 0 : e.solidResults) && (ve.val = e.solidResults.val !== "none" ? e.solidResults.val : "vonMises", e.solidResults.val === "none" ? e.shellResults.val = "none" : e.shellResults.val = "vonMises", f.derive(() => {
    const s = e.solidResults.val;
    if (s === "none") e.shellResults.val = "none";
    else {
      e.shellResults.val = "vonMises";
      const a = s;
      a !== ve.val && (ve.val = a);
    }
  }));
}, 100);
const Ee = document.createElement("div");
Ee.style.cssText = `
  position: fixed; top: 8px; right: 8px;
  width: 280px; max-height: 85vh; overflow-y: auto;
  z-index: 9999;
`;
const ce = new We({ title: "\u{1F9EA} Benchmark \u2014 col+viga H8", container: Ee, expanded: true }), h = { delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0, delta_he: 0, errTotalPct: 0, errEBpct: 0, status: "\u2014", I_beam: 0, L_beam: 0, P: 0, elapsed: 0 }, ae = (e) => e.toExponential(3), $e = (e) => e.toFixed(2), Ne = (e) => e.toFixed(2), _e = ce.addFolder({ title: "Anal\xEDtico (E-B + Timoshenko + col flex)" });
_e.addBinding(h, "delta_EB", { readonly: true, label: "\u03B4 E-B (m)", format: ae });
_e.addBinding(h, "delta_shear", { readonly: true, label: "\u03B4 Timoshenko (m)", format: ae });
_e.addBinding(h, "delta_col", { readonly: true, label: "\u03B4 col joint (m)", format: ae });
_e.addBinding(h, "delta_total_an", { readonly: true, label: "\u03B4 TOTAL (m)", format: ae });
const he = ce.addFolder({ title: "Hekatan H8 (medido)" });
he.addBinding(h, "delta_he", { readonly: true, label: "\u03B4 tip (m)", format: ae });
he.addBinding(h, "errTotalPct", { readonly: true, label: "\u0394 vs total (%)", format: $e });
he.addBinding(h, "errEBpct", { readonly: true, label: "\u0394 vs E-B (%)", format: $e });
he.addBinding(h, "status", { readonly: true, label: "Status" });
const be = ce.addFolder({ title: "Par\xE1metros / runtime", expanded: false });
be.addBinding(h, "I_beam", { readonly: true, label: "I_beam (m\u2074)", format: ae });
be.addBinding(h, "L_beam", { readonly: true, label: "L_beam (m)", format: Ne });
be.addBinding(h, "P", { readonly: true, label: "P tip (kN)", format: Ne });
be.addBinding(h, "elapsed", { readonly: true, label: "Solve (ms)", format: (e) => e.toFixed(0) });
const at = ce.addFolder({ title: "Pendientes", expanded: false }), ge = document.createElement("div");
ge.style.cssText = "font:10.5px ui-monospace,monospace;color:#aaa;padding:6px 8px;line-height:1.5;";
ge.textContent = `\xB7 Patch test (constant strain)
\xB7 MacNeal-Harder warped beam
\xB7 Cook's membrane / Pinched cylinder
\xB7 vs CalculiX, Code Aster, FEniCS, SAP2000`;
ge.style.whiteSpace = "pre-line";
at.element.appendChild(ge);
document.body.append(Ee);
f.derive(() => {
  const e = Ze.val;
  h.delta_EB = e.delta_EB, h.delta_shear = e.delta_shear, h.delta_col = e.delta_col, h.delta_total_an = e.delta_total_an, h.delta_he = e.delta_he, h.errTotalPct = e.errTotalPct, h.errEBpct = e.errEBpct, h.status = e.errTotalPct < 5 ? "\u2713 PASA (<5%)" : e.errTotalPct < 15 ? "\u26A0 ACEPTABLE (5-15%)" : "\u2717 revisar (>15%)", h.I_beam = e.I_beam, h.L_beam = e.L_beam, h.P = e.P, h.elapsed = e.elapsed, ce.refresh();
});
document.body.append(qe(T), ye, Ue({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/solid-cube-fem/main.ts" }));
setTimeout(() => {
  var _a;
  const e = ye.__ctx;
  (e == null ? void 0 : e.camera) && (e == null ? void 0 : e.controls) && (e.camera.up.set(0, 0, 1), e.camera.position.set(3.5, 3.5, 2.5), e.controls.target.set(0, 1, 1.5), e.controls.update(), (_a = e.render) == null ? void 0 : _a.call(e));
}, 800);
