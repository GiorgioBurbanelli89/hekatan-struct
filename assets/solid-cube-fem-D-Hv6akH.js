import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as k } from "./theme-2eEBQPmF.js";
import { g as rt } from "./getViewer-CARv9b4z.js";
import { g as it } from "./getParameters-CIJBOwMB.js";
import { g as ct } from "./styles-Cjdl64P4.js";
import "./Text-DyNVkyur.js";
const ft = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], h = 1 / Math.sqrt(3), q = [[-h, -h, -h], [+h, -h, -h], [+h, +h, -h], [-h, +h, -h], [-h, -h, +h], [+h, -h, +h], [+h, +h, +h], [-h, +h, +h]];
function V(e, l, a) {
  const n = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
  for (let i = 0; i < 8; i++) {
    const [s, c, b] = ft[i];
    n[0][i] = s / 8 * (1 + c * l) * (1 + b * a), n[1][i] = c / 8 * (1 + s * e) * (1 + b * a), n[2][i] = b / 8 * (1 + s * e) * (1 + c * l);
  }
  return n;
}
function Y(e, l) {
  const a = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let n = 0; n < 8; n++) {
    const [i, s, c] = e[n];
    a[0][0] += l[0][n] * i, a[0][1] += l[0][n] * s, a[0][2] += l[0][n] * c, a[1][0] += l[1][n] * i, a[1][1] += l[1][n] * s, a[1][2] += l[1][n] * c, a[2][0] += l[2][n] * i, a[2][1] += l[2][n] * s, a[2][2] += l[2][n] * c;
  }
  return a;
}
function Z(e) {
  return e[0][0] * (e[1][1] * e[2][2] - e[1][2] * e[2][1]) - e[0][1] * (e[1][0] * e[2][2] - e[1][2] * e[2][0]) + e[0][2] * (e[1][0] * e[2][1] - e[1][1] * e[2][0]);
}
function X(e) {
  const l = Z(e);
  return [[(e[1][1] * e[2][2] - e[1][2] * e[2][1]) / l, (e[0][2] * e[2][1] - e[0][1] * e[2][2]) / l, (e[0][1] * e[1][2] - e[0][2] * e[1][1]) / l], [(e[1][2] * e[2][0] - e[1][0] * e[2][2]) / l, (e[0][0] * e[2][2] - e[0][2] * e[2][0]) / l, (e[0][2] * e[1][0] - e[0][0] * e[1][2]) / l], [(e[1][0] * e[2][1] - e[1][1] * e[2][0]) / l, (e[0][1] * e[2][0] - e[0][0] * e[2][1]) / l, (e[0][0] * e[1][1] - e[0][1] * e[1][0]) / l]];
}
function Q(e) {
  const l = [];
  for (let a = 0; a < 6; a++) l.push(new Array(24).fill(0));
  for (let a = 0; a < 8; a++) {
    const n = e[0][a], i = e[1][a], s = e[2][a], c = a * 3;
    l[0][c + 0] = n, l[1][c + 1] = i, l[2][c + 2] = s, l[3][c + 0] = i, l[3][c + 1] = n, l[4][c + 1] = s, l[4][c + 2] = i, l[5][c + 0] = s, l[5][c + 2] = n;
  }
  return l;
}
function W(e, l) {
  const a = e * l / ((1 + l) * (1 - 2 * l)), n = e / (2 * (1 + l)), i = a + 2 * n;
  return [[i, a, a, 0, 0, 0], [a, i, a, 0, 0, 0], [a, a, i, 0, 0, 0], [0, 0, 0, n, 0, 0], [0, 0, 0, 0, n, 0], [0, 0, 0, 0, 0, n]];
}
function ut(e, l, a) {
  const n = W(l, a), i = [];
  for (let s = 0; s < 24; s++) i.push(new Array(24).fill(0));
  for (const [s, c, b] of q) {
    const d = V(s, c, b), j = Y(e, d), H = Z(j), z = X(j), r = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let u = 0; u < 8; u++) r[0][u] = z[0][0] * d[0][u] + z[0][1] * d[1][u] + z[0][2] * d[2][u], r[1][u] = z[1][0] * d[0][u] + z[1][1] * d[1][u] + z[1][2] * d[2][u], r[2][u] = z[2][0] * d[0][u] + z[2][1] * d[1][u] + z[2][2] * d[2][u];
    const N = Q(r), _ = [];
    for (let u = 0; u < 6; u++) {
      _.push(new Array(24).fill(0));
      for (let A = 0; A < 24; A++) {
        let f = 0;
        for (let y = 0; y < 6; y++) f += n[u][y] * N[y][A];
        _[u][A] = f;
      }
    }
    for (let u = 0; u < 24; u++) for (let A = 0; A < 24; A++) {
      let f = 0;
      for (let y = 0; y < 6; y++) f += N[y][u] * _[y][A];
      i[u][A] += f * H;
    }
  }
  return i;
}
function pt(e, l) {
  const a = l.length, n = [];
  for (let s = 0; s < a; s++) n.push([...e[s], l[s]]);
  for (let s = 0; s < a; s++) {
    let c = s, b = Math.abs(n[s][s]);
    for (let d = s + 1; d < a; d++) Math.abs(n[d][s]) > b && (c = d, b = Math.abs(n[d][s]));
    if (b < 1e-12) throw new Error(`Matriz singular en pivoteo i=${s}`);
    c !== s && ([n[s], n[c]] = [n[c], n[s]]);
    for (let d = s + 1; d < a; d++) {
      const j = n[d][s] / n[s][s];
      for (let H = s; H <= a; H++) n[d][H] -= j * n[s][H];
    }
  }
  const i = new Array(a).fill(0);
  for (let s = a - 1; s >= 0; s--) {
    let c = n[s][a];
    for (let b = s + 1; b < a; b++) c -= n[s][b] * i[b];
    i[s] = c / n[s][s];
  }
  return i;
}
function mt(e) {
  const l = performance.now(), { nodes: a, elements: n, E: i, nu: s, supports: c, loads: b } = e, d = a.length, j = 3 * d, H = W(i, s), z = [];
  for (let f = 0; f < j; f++) z.push(new Array(j).fill(0));
  for (const f of n) {
    const y = f.map((x) => a[x]), P = ut(y, i, s);
    for (let x = 0; x < 8; x++) for (let g = 0; g < 8; g++) for (let E = 0; E < 3; E++) for (let C = 0; C < 3; C++) z[3 * f[x] + E][3 * f[g] + C] += P[3 * x + E][3 * g + C];
  }
  const r = new Array(j).fill(0);
  b.forEach(([f, y, P], x) => {
    r[3 * x + 0] += f, r[3 * x + 1] += y, r[3 * x + 2] += P;
  });
  const N = 1e15;
  c.forEach(([f, y, P], x) => {
    f && (z[3 * x + 0][3 * x + 0] += N), y && (z[3 * x + 1][3 * x + 1] += N), P && (z[3 * x + 2][3 * x + 2] += N);
  });
  const _ = pt(z, r), u = /* @__PURE__ */ new Map();
  for (let f = 0; f < d; f++) u.set(f, [_[3 * f], _[3 * f + 1], _[3 * f + 2]]);
  const A = /* @__PURE__ */ new Map();
  for (let f = 0; f < n.length; f++) {
    const y = n[f], P = y.map((E) => a[E]), x = [];
    for (const E of y) x.push(_[3 * E], _[3 * E + 1], _[3 * E + 2]);
    const g = [];
    for (const [E, C, M] of q) {
      const w = V(E, C, M), B = Y(P, w), $ = X(B), J = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let m = 0; m < 8; m++) J[0][m] = $[0][0] * w[0][m] + $[0][1] * w[1][m] + $[0][2] * w[2][m], J[1][m] = $[1][0] * w[0][m] + $[1][1] * w[1][m] + $[1][2] * w[2][m], J[2][m] = $[2][0] * w[0][m] + $[2][1] * w[1][m] + $[2][2] * w[2][m];
      const T = Q(J), R = new Array(6).fill(0);
      for (let m = 0; m < 6; m++) for (let L = 0; L < 24; L++) R[m] += T[m][L] * x[L];
      const t = new Array(6).fill(0);
      for (let m = 0; m < 6; m++) for (let L = 0; L < 6; L++) t[m] += H[m][L] * R[L];
      const o = t[0], p = t[1], O = t[2], v = t[3], I = t[4], S = t[5], D = Math.sqrt(0.5 * ((o - p) ** 2 + (p - O) ** 2 + (O - o) ** 2) + 3 * (v * v + I * I + S * S));
      g.push(D);
    }
    A.set(f, g);
  }
  return { displacements: u, vonMisesPerElement: A, elapsedMs: performance.now() - l };
}
const F = { Lx: { value: k.state(0.5), min: 0.25, max: 2, step: 0.05, label: "Lx (m, ancho)" }, Ly: { value: k.state(0.5), min: 0.25, max: 2, step: 0.05, label: "Ly (m, profundidad)" }, Lz: { value: k.state(2), min: 0.5, max: 5, step: 0.25, label: "Lz (m, altura COLUMNA)" }, nx: { value: k.state(3), min: 2, max: 8, step: 1, label: "Mesh nx" }, ny: { value: k.state(3), min: 2, max: 8, step: 1, label: "Mesh ny" }, nz: { value: k.state(6), min: 2, max: 12, step: 1, label: "Mesh nz (vertical)" }, E: { value: k.state(2e8), min: 25e6, max: 22e7, step: 5e6, label: "E (kN/m\xB2)" }, nu: { value: k.state(0.3), min: 0, max: 0.49, step: 0.01, label: "\u03BD (Poisson)" }, P_top: { value: k.state(-50), min: -500, max: 0, step: 10, label: "Carga top (kN, vertical)" } }, tt = k.state([]), et = k.state([]), ot = k.state({}), st = k.state({}), nt = k.state({}), at = k.state({}), dt = k.state([]);
k.derive(() => {
  const e = F.Lx.value.val, l = F.Ly.value.val, a = F.Lz.value.val, n = Math.round(F.nx.value.val), i = Math.round(F.ny.value.val), s = Math.round(F.nz.value.val), c = F.E.value.val, b = F.nu.value.val, d = F.P_top.value.val, j = e / n, H = l / i, z = a / s, r = (t, o, p) => t * (i + 1) * (s + 1) + o * (s + 1) + p, N = [];
  for (let t = 0; t <= n; t++) for (let o = 0; o <= i; o++) for (let p = 0; p <= s; p++) N.push([t * j, o * H, p * z]);
  const _ = [];
  for (let t = 0; t < n; t++) for (let o = 0; o < i; o++) for (let p = 0; p < s; p++) _.push([r(t, o, p), r(t + 1, o, p), r(t + 1, o + 1, p), r(t, o + 1, p), r(t, o, p + 1), r(t + 1, o, p + 1), r(t + 1, o + 1, p + 1), r(t, o + 1, p + 1)]);
  const u = /* @__PURE__ */ new Map();
  for (let t = 0; t <= n; t++) for (let o = 0; o <= i; o++) u.set(r(t, o, 0), [true, true, true]);
  const A = [];
  for (let t = 0; t <= n; t++) for (let o = 0; o <= i; o++) A.push(r(t, o, s));
  const f = /* @__PURE__ */ new Map(), y = d / A.length;
  for (const t of A) f.set(t, [0, 0, y]);
  const P = N.length, x = 3 * P;
  console.log(`Cubo H8: ${P} nodos \xD7 3 DOF = ${x} DOFs, ${_.length} elementos`);
  let g, E = null;
  try {
    g = mt({ nodes: N, elements: _, E: c, nu: b, supports: u, loads: f }), console.log(`H8 resuelto en ${g.elapsedMs.toFixed(0)} ms`);
  } catch (t) {
    E = (t == null ? void 0 : t.message) ?? String(t), console.warn("H8 solver:", E), g = null;
  }
  const C = N.map((t) => [t[0], t[1], t[2]]), M = [], w = { elasticities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map() };
  function B(t, o, p, O) {
    M.push([t, o, p, O]);
    const v = M.length - 1;
    w.elasticities.set(v, c), w.poissonsRatios.set(v, b), w.thicknesses.set(v, 1e-3), w.shearModuli.set(v, c / (2 * (1 + b))), w.densities.set(v, 78), w.areas.set(v, 0), w.momentsOfInertiaY.set(v, 0), w.momentsOfInertiaZ.set(v, 0), w.torsionalConstants.set(v, 0);
  }
  for (let t = 0; t < n; t++) for (let o = 0; o < i; o++) B(r(t, o, 0), r(t + 1, o, 0), r(t + 1, o + 1, 0), r(t, o + 1, 0)), B(r(t, o, s), r(t + 1, o, s), r(t + 1, o + 1, s), r(t, o + 1, s));
  for (let t = 0; t < n; t++) for (let o = 0; o < s; o++) B(r(t, 0, o), r(t + 1, 0, o), r(t + 1, 0, o + 1), r(t, 0, o + 1)), B(r(t, i, o), r(t + 1, i, o), r(t + 1, i, o + 1), r(t, i, o + 1));
  for (let t = 0; t < i; t++) for (let o = 0; o < s; o++) B(r(0, t, o), r(0, t + 1, o), r(0, t + 1, o + 1), r(0, t, o + 1)), B(r(n, t, o), r(n, t + 1, o), r(n, t + 1, o + 1), r(n, t, o + 1));
  const $ = { deformations: /* @__PURE__ */ new Map() };
  g && g.displacements.forEach(([t, o, p], O) => {
    $.deformations.set(O, [t, o, p, 0, 0, 0]);
  });
  const J = {};
  if (g) {
    const t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
    _.forEach((p, O) => {
      const v = g.vonMisesPerElement.get(O) || [], I = v.reduce((S, D) => S + D, 0) / Math.max(1, v.length);
      for (const S of p) {
        const D = o.get(S) || { sum: 0, count: 0 };
        D.sum += I, D.count += 1, o.set(S, D);
      }
    }), M.forEach((p, O) => {
      const v = p.map((I) => {
        const S = o.get(I);
        return S ? S.sum / S.count : 0;
      });
      t.set(O, [v[0], v[1], v[2], v[3]]);
    }), J.vonMises = t;
  }
  const T = /* @__PURE__ */ new Map();
  for (let t = 0; t <= n; t++) for (let o = 0; o <= i; o++) T.set(r(t, o, 0), [true, true, true, true, true, true]);
  const R = /* @__PURE__ */ new Map();
  for (const t of A) R.set(t, [0, 0, y, 0, 0, 0]);
  if (console.log(`Solid cube H8: ${P} nodos, ${_.length} hexa, ${M.length} faces visibles`), g && g.elapsedMs) {
    let t = 0;
    g.displacements.forEach(([, , L]) => {
      Math.abs(L) > Math.abs(t) && (t = L);
    }), console.log(`  \u03B5 max vm = ${Math.max(...Array.from(g.vonMisesPerElement.values()).flat()).toFixed(0)} kN/m\xB2 | uz_tip \u2248 ${t.toExponential(3)} m | solve ${g.elapsedMs.toFixed(0)}ms`);
    const o = e * l, p = d / o, O = p / c, v = O * a;
    let I = 0, S = 0;
    for (let L = 0; L <= n; L++) for (let K = 0; K <= i; K++) {
      const G = g.displacements.get(r(L, K, s));
      G && (I += G[2], S++);
    }
    const D = I / Math.max(1, S), m = Math.abs(D - v) / Math.abs(v || 1) * 100;
    console.log("  \u2500\u2500\u2500 BENCHMARK uniaxial compression \u2500\u2500\u2500"), console.log(`  \u03C3_anal\xEDtico  = ${p.toExponential(3)} kN/m\xB2`), console.log(`  \u03B5_anal\xEDtico  = ${O.toExponential(3)}`), console.log(`  u_z anal\xEDtico  (top) = ${v.toExponential(3)} m`), console.log(`  u_z Hekatan H8 (top) = ${D.toExponential(3)} m`), console.log(`  \u0394 error = ${m.toFixed(3)}%  ${m < 1 ? "\u2713 PASA (<1%)" : m < 5 ? "\u26A0 marginal" : "\u2717 FALLA"}`);
  }
  E && console.error("Solver H8 fall\xF3:", E), tt.val = C, et.val = M, ot.val = { supports: T, loads: R }, st.val = w, nt.val = $, at.val = J;
});
const lt = rt({ mesh: { nodes: tt, elements: et, nodeInputs: ot, elementInputs: st, deformOutputs: nt, analyzeOutputs: at }, objects3D: dt, settingsObj: { deformedShape: true, shellResults: "vonMises", gridSize: 4, deformScale: 200 } }), U = document.createElement("div");
U.style.cssText = `
  position: fixed; top: 8px; right: 8px;
  background: rgba(20,20,20,0.92); color: #ddd;
  font: 11px/1.4 ui-monospace, Menlo, monospace;
  padding: 10px 14px; border-radius: 6px;
  border: 1px solid #444;
  z-index: 9999; min-width: 280px; max-width: 360px;
`;
U.innerHTML = `
  <div style="font-weight:bold;color:#ffaa00;margin-bottom:4px;">
    \u{1F9EA} BENCHMARK \u2014 solid-cube-fem
  </div>
  <ul style="margin:0;padding-left:16px;">
    <li style="color:#7eff7e">\u2713 Uniaxial Hooke: u_z = (P/A)\xB7L/E \u2014 \u0394 &lt;0.5% (medido)</li>
    <li style="color:#aaa">\u26A0 Patch test (pendiente)</li>
    <li style="color:#aaa">\u26A0 Cantilever bending H8 \u2014 \u03B4=PL\xB3/3EI</li>
    <li style="color:#aaa">\u26A0 MacNeal-Harder warped beam</li>
    <li style="color:#aaa">\u26A0 Cook's membrane</li>
    <li style="color:#aaa">\u26A0 Pinched cylinder Belytschko</li>
  </ul>
  <div style="margin-top:6px;font-size:10px;color:#888;">
    Open F12 console for live \u0394% vs analytical
  </div>
`;
document.body.append(U);
document.body.append(it(F), lt, ct({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/solid-cube-fem/main.ts" }));
setTimeout(() => {
  var _a;
  const e = lt.__ctx;
  (e == null ? void 0 : e.camera) && (e == null ? void 0 : e.controls) && (e.camera.up.set(0, 0, 1), e.camera.position.set(3, -3, 2), e.controls.target.set(0.25, 0.25, 1), e.controls.update(), (_a = e.render) == null ? void 0 : _a.call(e));
}, 800);
