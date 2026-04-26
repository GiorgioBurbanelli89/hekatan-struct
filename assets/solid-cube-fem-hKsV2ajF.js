import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as _ } from "./theme-2eEBQPmF.js";
import { g as lt } from "./getViewer-CARv9b4z.js";
import { g as rt } from "./getParameters-CIJBOwMB.js";
import { g as ct } from "./styles-Cjdl64P4.js";
import "./Text-DyNVkyur.js";
const it = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], h = 1 / Math.sqrt(3), U = [[-h, -h, -h], [+h, -h, -h], [+h, +h, -h], [-h, +h, -h], [-h, -h, +h], [+h, -h, +h], [+h, +h, +h], [-h, +h, +h]];
function q(e, l, a) {
  const n = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
  for (let c = 0; c < 8; c++) {
    const [s, i, b] = it[c];
    n[0][c] = s / 8 * (1 + i * l) * (1 + b * a), n[1][c] = i / 8 * (1 + s * e) * (1 + b * a), n[2][c] = b / 8 * (1 + s * e) * (1 + i * l);
  }
  return n;
}
function V(e, l) {
  const a = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let n = 0; n < 8; n++) {
    const [c, s, i] = e[n];
    a[0][0] += l[0][n] * c, a[0][1] += l[0][n] * s, a[0][2] += l[0][n] * i, a[1][0] += l[1][n] * c, a[1][1] += l[1][n] * s, a[1][2] += l[1][n] * i, a[2][0] += l[2][n] * c, a[2][1] += l[2][n] * s, a[2][2] += l[2][n] * i;
  }
  return a;
}
function Y(e) {
  return e[0][0] * (e[1][1] * e[2][2] - e[1][2] * e[2][1]) - e[0][1] * (e[1][0] * e[2][2] - e[1][2] * e[2][0]) + e[0][2] * (e[1][0] * e[2][1] - e[1][1] * e[2][0]);
}
function Z(e) {
  const l = Y(e);
  return [[(e[1][1] * e[2][2] - e[1][2] * e[2][1]) / l, (e[0][2] * e[2][1] - e[0][1] * e[2][2]) / l, (e[0][1] * e[1][2] - e[0][2] * e[1][1]) / l], [(e[1][2] * e[2][0] - e[1][0] * e[2][2]) / l, (e[0][0] * e[2][2] - e[0][2] * e[2][0]) / l, (e[0][2] * e[1][0] - e[0][0] * e[1][2]) / l], [(e[1][0] * e[2][1] - e[1][1] * e[2][0]) / l, (e[0][1] * e[2][0] - e[0][0] * e[2][1]) / l, (e[0][0] * e[1][1] - e[0][1] * e[1][0]) / l]];
}
function X(e) {
  const l = [];
  for (let a = 0; a < 6; a++) l.push(new Array(24).fill(0));
  for (let a = 0; a < 8; a++) {
    const n = e[0][a], c = e[1][a], s = e[2][a], i = a * 3;
    l[0][i + 0] = n, l[1][i + 1] = c, l[2][i + 2] = s, l[3][i + 0] = c, l[3][i + 1] = n, l[4][i + 1] = s, l[4][i + 2] = c, l[5][i + 0] = s, l[5][i + 2] = n;
  }
  return l;
}
function Q(e, l) {
  const a = e * l / ((1 + l) * (1 - 2 * l)), n = e / (2 * (1 + l)), c = a + 2 * n;
  return [[c, a, a, 0, 0, 0], [a, c, a, 0, 0, 0], [a, a, c, 0, 0, 0], [0, 0, 0, n, 0, 0], [0, 0, 0, 0, n, 0], [0, 0, 0, 0, 0, n]];
}
function ft(e, l, a) {
  const n = Q(l, a), c = [];
  for (let s = 0; s < 24; s++) c.push(new Array(24).fill(0));
  for (const [s, i, b] of U) {
    const d = q(s, i, b), D = V(e, d), P = Y(D), z = Z(D), r = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let u = 0; u < 8; u++) r[0][u] = z[0][0] * d[0][u] + z[0][1] * d[1][u] + z[0][2] * d[2][u], r[1][u] = z[1][0] * d[0][u] + z[1][1] * d[1][u] + z[1][2] * d[2][u], r[2][u] = z[2][0] * d[0][u] + z[2][1] * d[1][u] + z[2][2] * d[2][u];
    const j = X(r), S = [];
    for (let u = 0; u < 6; u++) {
      S.push(new Array(24).fill(0));
      for (let A = 0; A < 24; A++) {
        let f = 0;
        for (let g = 0; g < 6; g++) f += n[u][g] * j[g][A];
        S[u][A] = f;
      }
    }
    for (let u = 0; u < 24; u++) for (let A = 0; A < 24; A++) {
      let f = 0;
      for (let g = 0; g < 6; g++) f += j[g][u] * S[g][A];
      c[u][A] += f * P;
    }
  }
  return c;
}
function ut(e, l) {
  const a = l.length, n = [];
  for (let s = 0; s < a; s++) n.push([...e[s], l[s]]);
  for (let s = 0; s < a; s++) {
    let i = s, b = Math.abs(n[s][s]);
    for (let d = s + 1; d < a; d++) Math.abs(n[d][s]) > b && (i = d, b = Math.abs(n[d][s]));
    if (b < 1e-12) throw new Error(`Matriz singular en pivoteo i=${s}`);
    i !== s && ([n[s], n[i]] = [n[i], n[s]]);
    for (let d = s + 1; d < a; d++) {
      const D = n[d][s] / n[s][s];
      for (let P = s; P <= a; P++) n[d][P] -= D * n[s][P];
    }
  }
  const c = new Array(a).fill(0);
  for (let s = a - 1; s >= 0; s--) {
    let i = n[s][a];
    for (let b = s + 1; b < a; b++) i -= n[s][b] * c[b];
    c[s] = i / n[s][s];
  }
  return c;
}
function mt(e) {
  const l = performance.now(), { nodes: a, elements: n, E: c, nu: s, supports: i, loads: b } = e, d = a.length, D = 3 * d, P = Q(c, s), z = [];
  for (let f = 0; f < D; f++) z.push(new Array(D).fill(0));
  for (const f of n) {
    const g = f.map((x) => a[x]), N = ft(g, c, s);
    for (let x = 0; x < 8; x++) for (let w = 0; w < 8; w++) for (let E = 0; E < 3; E++) for (let B = 0; B < 3; B++) z[3 * f[x] + E][3 * f[w] + B] += N[3 * x + E][3 * w + B];
  }
  const r = new Array(D).fill(0);
  b.forEach(([f, g, N], x) => {
    r[3 * x + 0] += f, r[3 * x + 1] += g, r[3 * x + 2] += N;
  });
  const j = 1e15;
  i.forEach(([f, g, N], x) => {
    f && (z[3 * x + 0][3 * x + 0] += j), g && (z[3 * x + 1][3 * x + 1] += j), N && (z[3 * x + 2][3 * x + 2] += j);
  });
  const S = ut(z, r), u = /* @__PURE__ */ new Map();
  for (let f = 0; f < d; f++) u.set(f, [S[3 * f], S[3 * f + 1], S[3 * f + 2]]);
  const A = /* @__PURE__ */ new Map();
  for (let f = 0; f < n.length; f++) {
    const g = n[f], N = g.map((E) => a[E]), x = [];
    for (const E of g) x.push(S[3 * E], S[3 * E + 1], S[3 * E + 2]);
    const w = [];
    for (const [E, B, J] of U) {
      const y = q(E, B, J), C = V(N, y), $ = Z(C), R = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let p = 0; p < 8; p++) R[0][p] = $[0][0] * y[0][p] + $[0][1] * y[1][p] + $[0][2] * y[2][p], R[1][p] = $[1][0] * y[0][p] + $[1][1] * y[1][p] + $[1][2] * y[2][p], R[2][p] = $[2][0] * y[0][p] + $[2][1] * y[1][p] + $[2][2] * y[2][p];
      const K = X(R), G = new Array(6).fill(0);
      for (let p = 0; p < 6; p++) for (let L = 0; L < 24; L++) G[p] += K[p][L] * x[L];
      const t = new Array(6).fill(0);
      for (let p = 0; p < 6; p++) for (let L = 0; L < 6; L++) t[p] += P[p][L] * G[L];
      const o = t[0], m = t[1], O = t[2], v = t[3], H = t[4], k = t[5], F = Math.sqrt(0.5 * ((o - m) ** 2 + (m - O) ** 2 + (O - o) ** 2) + 3 * (v * v + H * H + k * k));
      w.push(F);
    }
    A.set(f, w);
  }
  return { displacements: u, vonMisesPerElement: A, elapsedMs: performance.now() - l };
}
const I = { Lx: { value: _.state(0.5), min: 0.25, max: 2, step: 0.05, label: "Lx (m, ancho)" }, Ly: { value: _.state(0.5), min: 0.25, max: 2, step: 0.05, label: "Ly (m, profundidad)" }, Lz: { value: _.state(2), min: 0.5, max: 5, step: 0.25, label: "Lz (m, altura COLUMNA)" }, nx: { value: _.state(3), min: 2, max: 8, step: 1, label: "Mesh nx" }, ny: { value: _.state(3), min: 2, max: 8, step: 1, label: "Mesh ny" }, nz: { value: _.state(6), min: 2, max: 12, step: 1, label: "Mesh nz (vertical)" }, E: { value: _.state(2e8), min: 25e6, max: 22e7, step: 5e6, label: "E (kN/m\xB2)" }, nu: { value: _.state(0.3), min: 0, max: 0.49, step: 0.01, label: "\u03BD (Poisson)" }, P_top: { value: _.state(-50), min: -500, max: 0, step: 10, label: "Carga top (kN, vertical)" } }, W = _.state([]), tt = _.state([]), et = _.state({}), ot = _.state({}), st = _.state({}), nt = _.state({}), pt = _.state([]);
_.derive(() => {
  const e = I.Lx.value.val, l = I.Ly.value.val, a = I.Lz.value.val, n = Math.round(I.nx.value.val), c = Math.round(I.ny.value.val), s = Math.round(I.nz.value.val), i = I.E.value.val, b = I.nu.value.val, d = I.P_top.value.val, D = e / n, P = l / c, z = a / s, r = (t, o, m) => t * (c + 1) * (s + 1) + o * (s + 1) + m, j = [];
  for (let t = 0; t <= n; t++) for (let o = 0; o <= c; o++) for (let m = 0; m <= s; m++) j.push([t * D, o * P, m * z]);
  const S = [];
  for (let t = 0; t < n; t++) for (let o = 0; o < c; o++) for (let m = 0; m < s; m++) S.push([r(t, o, m), r(t + 1, o, m), r(t + 1, o + 1, m), r(t, o + 1, m), r(t, o, m + 1), r(t + 1, o, m + 1), r(t + 1, o + 1, m + 1), r(t, o + 1, m + 1)]);
  const u = /* @__PURE__ */ new Map();
  for (let t = 0; t <= n; t++) for (let o = 0; o <= c; o++) u.set(r(t, o, 0), [true, true, true]);
  const A = [];
  for (let t = 0; t <= n; t++) for (let o = 0; o <= c; o++) A.push(r(t, o, s));
  const f = /* @__PURE__ */ new Map(), g = d / A.length;
  for (const t of A) f.set(t, [0, 0, g]);
  const N = j.length, x = 3 * N;
  console.log(`Cubo H8: ${N} nodos \xD7 3 DOF = ${x} DOFs, ${S.length} elementos`);
  let w, E = null;
  try {
    w = mt({ nodes: j, elements: S, E: i, nu: b, supports: u, loads: f }), console.log(`H8 resuelto en ${w.elapsedMs.toFixed(0)} ms`);
  } catch (t) {
    E = (t == null ? void 0 : t.message) ?? String(t), console.warn("H8 solver:", E), w = null;
  }
  const B = j.map((t) => [t[0], t[1], t[2]]), J = [], y = { elasticities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map() };
  function C(t, o, m, O) {
    J.push([t, o, m, O]);
    const v = J.length - 1;
    y.elasticities.set(v, i), y.poissonsRatios.set(v, b), y.thicknesses.set(v, 1e-3), y.shearModuli.set(v, i / (2 * (1 + b))), y.densities.set(v, 78), y.areas.set(v, 0), y.momentsOfInertiaY.set(v, 0), y.momentsOfInertiaZ.set(v, 0), y.torsionalConstants.set(v, 0);
  }
  for (let t = 0; t < n; t++) for (let o = 0; o < c; o++) C(r(t, o, 0), r(t + 1, o, 0), r(t + 1, o + 1, 0), r(t, o + 1, 0)), C(r(t, o, s), r(t + 1, o, s), r(t + 1, o + 1, s), r(t, o + 1, s));
  for (let t = 0; t < n; t++) for (let o = 0; o < s; o++) C(r(t, 0, o), r(t + 1, 0, o), r(t + 1, 0, o + 1), r(t, 0, o + 1)), C(r(t, c, o), r(t + 1, c, o), r(t + 1, c, o + 1), r(t, c, o + 1));
  for (let t = 0; t < c; t++) for (let o = 0; o < s; o++) C(r(0, t, o), r(0, t + 1, o), r(0, t + 1, o + 1), r(0, t, o + 1)), C(r(n, t, o), r(n, t + 1, o), r(n, t + 1, o + 1), r(n, t, o + 1));
  const $ = { deformations: /* @__PURE__ */ new Map() };
  w && w.displacements.forEach(([t, o, m], O) => {
    $.deformations.set(O, [t, o, m, 0, 0, 0]);
  });
  const R = {};
  if (w) {
    const t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
    S.forEach((m, O) => {
      const v = w.vonMisesPerElement.get(O) || [], H = v.reduce((k, F) => k + F, 0) / Math.max(1, v.length);
      for (const k of m) {
        const F = o.get(k) || { sum: 0, count: 0 };
        F.sum += H, F.count += 1, o.set(k, F);
      }
    }), J.forEach((m, O) => {
      const v = m.map((H) => {
        const k = o.get(H);
        return k ? k.sum / k.count : 0;
      });
      t.set(O, [v[0], v[1], v[2], v[3]]);
    }), R.vonMises = t;
  }
  const K = /* @__PURE__ */ new Map();
  for (let t = 0; t <= n; t++) for (let o = 0; o <= c; o++) K.set(r(t, o, 0), [true, true, true, true, true, true]);
  const G = /* @__PURE__ */ new Map();
  for (const t of A) G.set(t, [0, 0, g, 0, 0, 0]);
  if (console.log(`Solid cube H8: ${N} nodos, ${S.length} hexa, ${J.length} faces visibles`), w && w.elapsedMs) {
    let t = 0;
    w.displacements.forEach(([, , L]) => {
      Math.abs(L) > Math.abs(t) && (t = L);
    }), console.log(`  \u03B5 max vm = ${Math.max(...Array.from(w.vonMisesPerElement.values()).flat()).toFixed(0)} kN/m\xB2 | uz_tip \u2248 ${t.toExponential(3)} m | solve ${w.elapsedMs.toFixed(0)}ms`);
    const o = e * l, m = d / o, O = m / i, v = O * a;
    let H = 0, k = 0;
    for (let L = 0; L <= n; L++) for (let M = 0; M <= c; M++) {
      const T = w.displacements.get(r(L, M, s));
      T && (H += T[2], k++);
    }
    const F = H / Math.max(1, k), p = Math.abs(F - v) / Math.abs(v || 1) * 100;
    console.log("  \u2500\u2500\u2500 BENCHMARK uniaxial compression \u2500\u2500\u2500"), console.log(`  \u03C3_anal\xEDtico  = ${m.toExponential(3)} kN/m\xB2`), console.log(`  \u03B5_anal\xEDtico  = ${O.toExponential(3)}`), console.log(`  u_z anal\xEDtico  (top) = ${v.toExponential(3)} m`), console.log(`  u_z Hekatan H8 (top) = ${F.toExponential(3)} m`), console.log(`  \u0394 error = ${p.toFixed(3)}%  ${p < 1 ? "\u2713 PASA (<1%)" : p < 5 ? "\u26A0 marginal" : "\u2717 FALLA"}`);
  }
  E && console.error("Solver H8 fall\xF3:", E), W.val = B, tt.val = J, et.val = { supports: K, loads: G }, ot.val = y, st.val = $, nt.val = R;
});
const at = lt({ mesh: { nodes: W, elements: tt, nodeInputs: et, elementInputs: ot, deformOutputs: st, analyzeOutputs: nt }, objects3D: pt, settingsObj: { deformedShape: true, shellResults: "vonMises", gridSize: 4, deformScale: 200 } });
document.body.append(rt(I), at, ct({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/solid-cube-fem/main.ts" }));
setTimeout(() => {
  var _a;
  const e = at.__ctx;
  (e == null ? void 0 : e.camera) && (e == null ? void 0 : e.controls) && (e.camera.up.set(0, 0, 1), e.camera.position.set(3, -3, 2), e.controls.target.set(0.25, 0.25, 1), e.controls.update(), (_a = e.render) == null ? void 0 : _a.call(e));
}, 800);
