import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as f, P as Ge } from "./theme-2eEBQPmF.js";
import { e as Se, g as Ue } from "./getViewer-DS85_s5t.js";
import { g as qe } from "./getParameters-CIJBOwMB.js";
import { g as Qe } from "./styles-Cjdl64P4.js";
import "./Text-DyNVkyur.js";
const et = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], _ = 1 / Math.sqrt(3), ke = [[-_, -_, -_], [+_, -_, -_], [+_, +_, -_], [-_, +_, -_], [-_, -_, +_], [+_, -_, +_], [+_, +_, +_], [-_, +_, +_]];
function Le(e, a, o) {
  const n = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
  for (let d = 0; d < 8; d++) {
    const [t, i, E] = et[d];
    n[0][d] = t / 8 * (1 + i * a) * (1 + E * o), n[1][d] = i / 8 * (1 + t * e) * (1 + E * o), n[2][d] = E / 8 * (1 + t * e) * (1 + i * a);
  }
  return n;
}
function ze(e, a) {
  const o = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let n = 0; n < 8; n++) {
    const [d, t, i] = e[n];
    o[0][0] += a[0][n] * d, o[0][1] += a[0][n] * t, o[0][2] += a[0][n] * i, o[1][0] += a[1][n] * d, o[1][1] += a[1][n] * t, o[1][2] += a[1][n] * i, o[2][0] += a[2][n] * d, o[2][1] += a[2][n] * t, o[2][2] += a[2][n] * i;
  }
  return o;
}
function Te(e) {
  return e[0][0] * (e[1][1] * e[2][2] - e[1][2] * e[2][1]) - e[0][1] * (e[1][0] * e[2][2] - e[1][2] * e[2][0]) + e[0][2] * (e[1][0] * e[2][1] - e[1][1] * e[2][0]);
}
function Fe(e) {
  const a = Te(e);
  return [[(e[1][1] * e[2][2] - e[1][2] * e[2][1]) / a, (e[0][2] * e[2][1] - e[0][1] * e[2][2]) / a, (e[0][1] * e[1][2] - e[0][2] * e[1][1]) / a], [(e[1][2] * e[2][0] - e[1][0] * e[2][2]) / a, (e[0][0] * e[2][2] - e[0][2] * e[2][0]) / a, (e[0][2] * e[1][0] - e[0][0] * e[1][2]) / a], [(e[1][0] * e[2][1] - e[1][1] * e[2][0]) / a, (e[0][1] * e[2][0] - e[0][0] * e[2][1]) / a, (e[0][0] * e[1][1] - e[0][1] * e[1][0]) / a]];
}
function Oe(e) {
  const a = [];
  for (let o = 0; o < 6; o++) a.push(new Array(24).fill(0));
  for (let o = 0; o < 8; o++) {
    const n = e[0][o], d = e[1][o], t = e[2][o], i = o * 3;
    a[0][i + 0] = n, a[1][i + 1] = d, a[2][i + 2] = t, a[3][i + 0] = d, a[3][i + 1] = n, a[4][i + 1] = t, a[4][i + 2] = d, a[5][i + 0] = t, a[5][i + 2] = n;
  }
  return a;
}
function He(e, a) {
  const o = e * a / ((1 + a) * (1 - 2 * a)), n = e / (2 * (1 + a)), d = o + 2 * n;
  return [[d, o, o, 0, 0, 0], [o, d, o, 0, 0, 0], [o, o, d, 0, 0, 0], [0, 0, 0, n, 0, 0], [0, 0, 0, 0, n, 0], [0, 0, 0, 0, 0, n]];
}
function tt(e, a, o) {
  const n = He(a, o), d = [];
  for (let t = 0; t < 24; t++) d.push(new Array(24).fill(0));
  for (const [t, i, E] of ke) {
    const u = Le(t, i, E), Z = ze(e, u), A = Te(Z), y = Fe(Z), L = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let m = 0; m < 8; m++) L[0][m] = y[0][0] * u[0][m] + y[0][1] * u[1][m] + y[0][2] * u[2][m], L[1][m] = y[1][0] * u[0][m] + y[1][1] * u[1][m] + y[1][2] * u[2][m], L[2][m] = y[2][0] * u[0][m] + y[2][1] * u[1][m] + y[2][2] * u[2][m];
    const T = Oe(L), O = [];
    for (let m = 0; m < 6; m++) {
      O.push(new Array(24).fill(0));
      for (let k = 0; k < 24; k++) {
        let S = 0;
        for (let c = 0; c < 6; c++) S += n[m][c] * T[c][k];
        O[m][k] = S;
      }
    }
    for (let m = 0; m < 24; m++) for (let k = 0; k < 24; k++) {
      let S = 0;
      for (let c = 0; c < 6; c++) S += T[c][m] * O[c][k];
      d[m][k] += S * A;
    }
  }
  return d;
}
function ot(e, a) {
  const o = a.length, n = [];
  for (let t = 0; t < o; t++) n.push([...e[t], a[t]]);
  for (let t = 0; t < o; t++) {
    let i = t, E = Math.abs(n[t][t]);
    for (let u = t + 1; u < o; u++) Math.abs(n[u][t]) > E && (i = u, E = Math.abs(n[u][t]));
    if (E < 1e-12) throw new Error(`Matriz singular en pivoteo i=${t}`);
    i !== t && ([n[t], n[i]] = [n[i], n[t]]);
    for (let u = t + 1; u < o; u++) {
      const Z = n[u][t] / n[t][t];
      for (let A = t; A <= o; A++) n[u][A] -= Z * n[t][A];
    }
  }
  const d = new Array(o).fill(0);
  for (let t = o - 1; t >= 0; t--) {
    let i = n[t][o];
    for (let E = t + 1; E < o; E++) i -= n[t][E] * d[E];
    d[t] = i / n[t][t];
  }
  return d;
}
function st(e) {
  const a = performance.now(), { nodes: o, elements: n, E: d, nu: t, supports: i, loads: E } = e, u = o.length, Z = 3 * u, A = He(d, t), y = [];
  for (let c = 0; c < Z; c++) y.push(new Array(Z).fill(0));
  for (const c of n) {
    const $ = c.map((v) => o[v]), J = tt($, d, t);
    for (let v = 0; v < 8; v++) for (let H = 0; H < 8; H++) for (let R = 0; R < 3; R++) for (let B = 0; B < 3; B++) y[3 * c[v] + R][3 * c[H] + B] += J[3 * v + R][3 * H + B];
  }
  const L = new Array(Z).fill(0);
  E.forEach(([c, $, J], v) => {
    L[3 * v + 0] += c, L[3 * v + 1] += $, L[3 * v + 2] += J;
  });
  const T = 1e15;
  i.forEach(([c, $, J], v) => {
    c && (y[3 * v + 0][3 * v + 0] += T), $ && (y[3 * v + 1][3 * v + 1] += T), J && (y[3 * v + 2][3 * v + 2] += T);
  });
  const O = ot(y, L), m = /* @__PURE__ */ new Map();
  for (let c = 0; c < u; c++) m.set(c, [O[3 * c], O[3 * c + 1], O[3 * c + 2]]);
  const k = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
  for (let c = 0; c < n.length; c++) {
    const $ = n[c], J = $.map((B) => o[B]), v = [];
    for (const B of $) v.push(O[3 * B], O[3 * B + 1], O[3 * B + 2]);
    const H = [], R = [];
    for (const [B, Me, re] of ke) {
      const I = Le(B, Me, re), ie = ze(J, I), j = Fe(ie), U = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let p = 0; p < 8; p++) U[0][p] = j[0][0] * I[0][p] + j[0][1] * I[1][p] + j[0][2] * I[2][p], U[1][p] = j[1][0] * I[0][p] + j[1][1] * I[1][p] + j[1][2] * I[2][p], U[2][p] = j[2][0] * I[0][p] + j[2][1] * I[1][p] + j[2][2] * I[2][p];
      const de = Oe(U), q = new Array(6).fill(0);
      for (let p = 0; p < 6; p++) for (let b = 0; b < 24; b++) q[p] += de[p][b] * v[b];
      const W = new Array(6).fill(0);
      for (let p = 0; p < 6; p++) for (let b = 0; b < 6; b++) W[p] += A[p][b] * q[b];
      const ee = W[0], ne = W[1], te = W[2], Q = W[3], K = W[4], oe = W[5], me = Math.sqrt(0.5 * ((ee - ne) ** 2 + (ne - te) ** 2 + (te - ee) ** 2) + 3 * (Q * Q + K * K + oe * oe));
      H.push(me), R.push([ee, ne, te, Q, K, oe]);
    }
    k.set(c, H), S.set(c, R);
  }
  return { displacements: m, vonMisesPerElement: k, stressPerElement: S, elapsedMs: performance.now() - a };
}
const F = { Lx_col: { value: f.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Lx col (m)" }, Ly_col: { value: f.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Ly col (m)" }, Lz: { value: f.state(3), min: 1.5, max: 6, step: 0.5, label: "Altura col Lz (m)" }, W_beam: { value: f.state(0.2), min: 0.1, max: 0.4, step: 0.1, label: "W viga (m, ancho)" }, H_beam: { value: f.state(0.5), min: 0.25, max: 1, step: 0.25, label: "H viga (m, peralte)" }, L_beam: { value: f.state(1.5), min: 0.5, max: 3, step: 0.25, label: "L viga (m, voladizo)" }, nx_col: { value: f.state(4), min: 2, max: 6, step: 2, label: "nx col" }, ny_col: { value: f.state(4), min: 2, max: 6, step: 2, label: "ny col" }, nz: { value: f.state(12), min: 6, max: 18, step: 2, label: "nz col" }, ny_b: { value: f.state(6), min: 2, max: 12, step: 1, label: "ny viga" }, E: { value: f.state(25e6), min: 15e6, max: 4e7, step: 1e6, label: "E concreto (kN/m\xB2)" }, nu: { value: f.state(0.2), min: 0, max: 0.3, step: 0.01, label: "\u03BD concreto" }, P_tip: { value: f.state(-30), min: -200, max: 200, step: 10, label: "P tip viga (kN, vertical)" } }, Ie = f.state([]), Ye = f.state([]), Ce = f.state({}), Xe = f.state({}), Ze = f.state({}), we = f.state({}), at = f.state([]), ve = f.state("vonMises"), Re = f.state({}), je = f.state([]), De = f.state({ P: 0, L_beam: 0, I_beam: 0, delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0, delta_he: 0, errEBpct: 0, errTotalPct: 0, elapsed: 0 });
f.derive(() => {
  const e = F.Lx_col.value.val, a = F.Ly_col.value.val, o = F.Lz.value.val, n = F.W_beam.value.val, d = F.H_beam.value.val, t = F.L_beam.value.val, i = Math.round(F.nx_col.value.val), E = Math.round(F.ny_col.value.val), u = Math.round(F.nz.value.val), Z = Math.round(F.ny_b.value.val), A = F.E.value.val, y = F.nu.value.val, L = F.P_tip.value.val, T = [], O = /* @__PURE__ */ new Map(), m = [], k = 4;
  function S(s, l, r) {
    const g = `${s.toFixed(k)},${l.toFixed(k)},${r.toFixed(k)}`;
    let x = O.get(g);
    return x === void 0 && (T.push([s, l, r]), x = T.length - 1, O.set(g, x)), x;
  }
  function c(s, l, r, g, x, D, w, N, P) {
    const M = (g - s) / w, Y = (x - l) / N, V = (D - r) / P;
    for (let z = 0; z < P; z++) for (let C = 0; C < N; C++) for (let X = 0; X < w; X++) m.push([S(s + X * M, l + C * Y, r + z * V), S(s + (X + 1) * M, l + C * Y, r + z * V), S(s + (X + 1) * M, l + (C + 1) * Y, r + z * V), S(s + X * M, l + (C + 1) * Y, r + z * V), S(s + X * M, l + C * Y, r + (z + 1) * V), S(s + (X + 1) * M, l + C * Y, r + (z + 1) * V), S(s + (X + 1) * M, l + (C + 1) * Y, r + (z + 1) * V), S(s + X * M, l + (C + 1) * Y, r + (z + 1) * V)]);
  }
  const $ = e / i, J = o / u;
  let v = Math.max(2, Math.round(n / $));
  i - v & 1 && (v = Math.max(2, v - 1));
  let H = Math.max(2, Math.round(d / J));
  H & 1 && (H = Math.max(2, H - 1));
  const R = v * $, B = H * J, re = Math.round(u / 2) * J, I = re - B / 2, ie = re + B / 2, j = -e / 2, U = e / 2, de = -a / 2, q = a / 2;
  c(j, de, 0, U, q, o, i, E, u);
  const W = -R / 2, ee = R / 2, ne = q, te = q + t;
  c(W, ne, I, ee, te, ie, v, Z, H);
  const Q = /* @__PURE__ */ new Map();
  T.forEach((s, l) => {
    s[0] >= j - 1e-6 && s[0] <= U + 1e-6 && s[1] >= de - 1e-6 && s[1] <= q + 1e-6 && (Math.abs(s[2]) < 1e-6 || Math.abs(s[2] - o) < 1e-6) && Q.set(l, [true, true, true]);
  });
  const K = [];
  T.forEach((s, l) => {
    Math.abs(s[1] - te) < 1e-6 && s[0] >= W - 1e-6 && s[0] <= ee + 1e-6 && s[2] >= I - 1e-6 && s[2] <= ie + 1e-6 && K.push(l);
  });
  const oe = /* @__PURE__ */ new Map(), me = K.length > 0 ? L / K.length : 0;
  for (const s of K) oe.set(s, [0, 0, me]);
  const p = T.length;
  console.log(`Col+Viga H8: ${p} nodos \xD7 3 DOF = ${3 * p} DOFs, ${m.length} elementos`);
  let b, ue = null;
  try {
    b = st({ nodes: T, elements: m, E: A, nu: y, supports: Q, loads: oe }), console.log(`H8 resuelto en ${b.elapsedMs.toFixed(0)} ms`);
  } catch (s) {
    ue = (s == null ? void 0 : s.message) ?? String(s), console.warn("H8 solver:", ue), b = null;
  }
  const Je = T.map((s) => [s[0], s[1], s[2]]), fe = [], G = { elasticities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map() }, xe = /* @__PURE__ */ new Map();
  function Ke(s) {
    return [...s].sort((l, r) => l - r).join(",");
  }
  function se(s, l, r, g) {
    const x = Ke([s, l, r, g]), D = xe.get(x);
    D ? D.count += 1 : xe.set(x, { face: [s, l, r, g], count: 1 });
  }
  for (const s of m) {
    const [l, r, g, x, D, w, N, P] = s;
    se(l, r, g, x), se(D, w, N, P), se(l, r, w, D), se(x, g, N, P), se(l, x, P, D), se(r, g, N, w);
  }
  function Ve(s) {
    fe.push(s);
    const l = fe.length - 1;
    G.elasticities.set(l, A), G.poissonsRatios.set(l, y), G.thicknesses.set(l, 1e-3), G.shearModuli.set(l, A / (2 * (1 + y))), G.densities.set(l, 24 / 9.80665), G.areas.set(l, 0), G.momentsOfInertiaY.set(l, 0), G.momentsOfInertiaZ.set(l, 0), G.torsionalConstants.set(l, 0);
  }
  for (const { face: s, count: l } of xe.values()) l === 1 && Ve(s);
  const Be = { deformations: /* @__PURE__ */ new Map() };
  b && b.displacements.forEach(([s, l, r], g) => {
    Be.deformations.set(g, [s, l, r, 0, 0, 0]);
  });
  const le = { vonMises: /* @__PURE__ */ new Map(), sigmaXX: /* @__PURE__ */ new Map(), sigmaYY: /* @__PURE__ */ new Map(), sigmaZZ: /* @__PURE__ */ new Map(), tauXY: /* @__PURE__ */ new Map(), tauYZ: /* @__PURE__ */ new Map(), tauXZ: /* @__PURE__ */ new Map(), ux: /* @__PURE__ */ new Map(), uy: /* @__PURE__ */ new Map(), uz: /* @__PURE__ */ new Map() };
  if (b) {
    const s = { vonMises: /* @__PURE__ */ new Map(), sigmaXX: /* @__PURE__ */ new Map(), sigmaYY: /* @__PURE__ */ new Map(), sigmaZZ: /* @__PURE__ */ new Map(), tauXY: /* @__PURE__ */ new Map(), tauYZ: /* @__PURE__ */ new Map(), tauXZ: /* @__PURE__ */ new Map() };
    m.forEach((l, r) => {
      const g = b.vonMisesPerElement.get(r) || [], x = b.stressPerElement.get(r) || [], D = g.reduce((P, M) => P + M, 0) / Math.max(1, g.length), w = [0, 0, 0, 0, 0, 0];
      for (const P of x) for (let M = 0; M < 6; M++) w[M] += P[M];
      for (let P = 0; P < 6; P++) w[P] /= Math.max(1, x.length);
      const N = { vonMises: D, sigmaXX: w[0], sigmaYY: w[1], sigmaZZ: w[2], tauXY: w[3], tauYZ: w[4], tauXZ: w[5] };
      for (const P of l) for (const M of Object.keys(s)) {
        const Y = s[M].get(P) || { sum: 0, count: 0 };
        Y.sum += N[M], Y.count += 1, s[M].set(P, Y);
      }
    });
    for (const l of Object.keys(s)) s[l].forEach((r, g) => {
      le[l].set(g, r.sum / Math.max(1, r.count));
    });
    b.displacements.forEach(([l, r, g], x) => {
      le.ux.set(x, l), le.uy.set(x, r), le.uz.set(x, g);
    });
  }
  Re.val = le, je.val = fe;
  const Pe = /* @__PURE__ */ new Map();
  Q.forEach((s, l) => Pe.set(l, [true, true, true, true, true, true]));
  const Ae = /* @__PURE__ */ new Map();
  for (const s of K) Ae.set(s, [0, 0, me, 0, 0, 0]);
  if (b) {
    let s = 0, l = 0;
    for (const We of K) {
      const pe = b.displacements.get(We);
      pe && (l += pe[2], Math.abs(pe[2]) > Math.abs(s) && (s = pe[2]));
    }
    l /= Math.max(1, K.length);
    const r = R * B * B * B / 12, g = R * B, x = A / (2 * (1 + y)), D = 5 / 6, w = L * t * t * t / (3 * A * r), N = L * t / (D * x * g), P = e * a * a * a / 12, V = L * t * o / (16 * A * P) * t, z = w + N + V, C = Math.abs(l - w) / Math.abs(w || 1) * 100, X = Math.abs(l - z) / Math.abs(z || 1) * 100;
    console.log("  \u2500\u2500\u2500 BENCHMARK col+viga H8 \u2500\u2500\u2500"), console.log(`  \u03B4 E-B puro (rigid wall) = ${w.toExponential(4)} m`), console.log(`  \u03B4 + Timoshenko shear   = ${(w + N).toExponential(4)} m`), console.log(`  \u03B4 + col flex (joint)   = ${z.toExponential(4)} m`), console.log(`  \u03B4 Hekatan H8 (medido)  = ${l.toExponential(4)} m`), console.log(`  \u0394 vs E-B puro = ${C.toFixed(2)}% (esperado 20-40% extra)`), console.log(`  \u0394 vs total anal\xEDtico = ${X.toFixed(2)}% (esperado <15%)`), De.val = { P: L, L_beam: t, I_beam: r, delta_EB: w, delta_shear: N, delta_col: V, delta_total_an: z, delta_he: l, errEBpct: C, errTotalPct: X, elapsed: b.elapsedMs };
  }
  ue && console.error("Solver H8 fall\xF3:", ue), Ie.val = Je, Ye.val = fe, Ce.val = { supports: Pe, loads: Ae }, Xe.val = G, Ze.val = Be;
});
const nt = /* @__PURE__ */ new Set(["vonMises", "sigmaXX", "sigmaYY", "sigmaZZ", "tauXY", "tauYZ", "tauXZ"]), lt = /* @__PURE__ */ new Set(["ux", "uy", "uz"]);
f.derive(() => {
  const e = Re.val, a = je.val, o = ve.val, n = e[o];
  if (!n || n.size === 0 || a.length === 0) {
    we.val = {};
    return;
  }
  const d = /* @__PURE__ */ new Map();
  a.forEach((t, i) => {
    const E = n.get(t[0]) ?? 0, u = n.get(t[1]) ?? 0, Z = n.get(t[2]) ?? 0, A = n.get(t[3]) ?? 0;
    d.set(i, [E, u, Z, A]);
  }), we.val = { vonMises: d }, setTimeout(() => {
    nt.has(o) ? Se.val = "kN/m\xB2" : lt.has(o) && (Se.val = "m");
  }, 0);
});
const ye = Ue({ mesh: { nodes: Ie, elements: Ye, nodeInputs: Ce, elementInputs: Xe, deformOutputs: Ze, analyzeOutputs: we }, objects3D: at, settingsObj: { deformedShape: true, shellResults: "none", solidResults: "vonMises", gridSize: 4, deformScale: 100, loads: true, supports: true, displayScale: 0.4 } });
setTimeout(() => {
  const e = ye.__settings;
  (e == null ? void 0 : e.solidResults) && (ve.val = e.solidResults.val !== "none" ? e.solidResults.val : "vonMises", e.solidResults.val === "none" ? e.shellResults.val = "none" : e.shellResults.val = "vonMises", f.derive(() => {
    const a = e.solidResults.val;
    if (a === "none") e.shellResults.val = "none";
    else {
      e.shellResults.val = "vonMises";
      const o = a;
      o !== ve.val && (ve.val = o);
    }
  }));
}, 100);
const Ee = document.createElement("div");
Ee.style.cssText = `
  position: fixed; top: 8px; right: 8px;
  width: 280px; max-height: 85vh; overflow-y: auto;
  z-index: 9999;
`;
const ce = new Ge({ title: "\u{1F9EA} Benchmark \u2014 col+viga H8", container: Ee, expanded: true }), h = { delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0, delta_he: 0, errTotalPct: 0, errEBpct: 0, status: "\u2014", I_beam: 0, L_beam: 0, P: 0, elapsed: 0 }, ae = (e) => e.toExponential(3), Ne = (e) => e.toFixed(2), $e = (e) => e.toFixed(2), _e = ce.addFolder({ title: "Anal\xEDtico (E-B + Timoshenko + col flex)" });
_e.addBinding(h, "delta_EB", { readonly: true, label: "\u03B4 E-B (m)", format: ae });
_e.addBinding(h, "delta_shear", { readonly: true, label: "\u03B4 Timoshenko (m)", format: ae });
_e.addBinding(h, "delta_col", { readonly: true, label: "\u03B4 col joint (m)", format: ae });
_e.addBinding(h, "delta_total_an", { readonly: true, label: "\u03B4 TOTAL (m)", format: ae });
const he = ce.addFolder({ title: "Hekatan H8 (medido)" });
he.addBinding(h, "delta_he", { readonly: true, label: "\u03B4 tip (m)", format: ae });
he.addBinding(h, "errTotalPct", { readonly: true, label: "\u0394 vs total (%)", format: Ne });
he.addBinding(h, "errEBpct", { readonly: true, label: "\u0394 vs E-B (%)", format: Ne });
he.addBinding(h, "status", { readonly: true, label: "Status" });
const be = ce.addFolder({ title: "Par\xE1metros / runtime", expanded: false });
be.addBinding(h, "I_beam", { readonly: true, label: "I_beam (m\u2074)", format: ae });
be.addBinding(h, "L_beam", { readonly: true, label: "L_beam (m)", format: $e });
be.addBinding(h, "P", { readonly: true, label: "P tip (kN)", format: $e });
be.addBinding(h, "elapsed", { readonly: true, label: "Solve (ms)", format: (e) => e.toFixed(0) });
const ct = ce.addFolder({ title: "Pendientes", expanded: false }), ge = document.createElement("div");
ge.style.cssText = "font:10.5px ui-monospace,monospace;color:#aaa;padding:6px 8px;line-height:1.5;";
ge.textContent = `\xB7 Patch test (constant strain)
\xB7 MacNeal-Harder warped beam
\xB7 Cook's membrane / Pinched cylinder
\xB7 vs CalculiX, Code Aster, FEniCS, SAP2000`;
ge.style.whiteSpace = "pre-line";
ct.element.appendChild(ge);
document.body.append(Ee);
f.derive(() => {
  const e = De.val;
  h.delta_EB = e.delta_EB, h.delta_shear = e.delta_shear, h.delta_col = e.delta_col, h.delta_total_an = e.delta_total_an, h.delta_he = e.delta_he, h.errTotalPct = e.errTotalPct, h.errEBpct = e.errEBpct, h.status = e.errTotalPct < 5 ? "\u2713 PASA (<5%)" : e.errTotalPct < 15 ? "\u26A0 ACEPTABLE (5-15%)" : "\u2717 revisar (>15%)", h.I_beam = e.I_beam, h.L_beam = e.L_beam, h.P = e.P, h.elapsed = e.elapsed, ce.refresh();
});
document.body.append(qe(F), ye, Qe({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/solid-cube-fem/main.ts" }));
setTimeout(() => {
  var _a;
  const e = ye.__ctx;
  (e == null ? void 0 : e.camera) && (e == null ? void 0 : e.controls) && (e.camera.up.set(0, 0, 1), e.camera.position.set(3.5, 3.5, 2.5), e.controls.target.set(0, 1, 1.5), e.controls.update(), (_a = e.render) == null ? void 0 : _a.call(e));
}, 800);
