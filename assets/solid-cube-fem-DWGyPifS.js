import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as S } from "./theme-2eEBQPmF.js";
import { g as nt } from "./getViewer-CARv9b4z.js";
import { g as at } from "./getParameters-CIJBOwMB.js";
import { g as lt } from "./styles-Cjdl64P4.js";
import "./Text-DyNVkyur.js";
const rt = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], v = 1 / Math.sqrt(3), K = [[-v, -v, -v], [+v, -v, -v], [+v, +v, -v], [-v, +v, -v], [-v, -v, +v], [+v, -v, +v], [+v, +v, +v], [-v, +v, +v]];
function U(e, l, a) {
  const n = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
  for (let c = 0; c < 8; c++) {
    const [o, i, y] = rt[c];
    n[0][c] = o / 8 * (1 + i * l) * (1 + y * a), n[1][c] = i / 8 * (1 + o * e) * (1 + y * a), n[2][c] = y / 8 * (1 + o * e) * (1 + i * l);
  }
  return n;
}
function V(e, l) {
  const a = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let n = 0; n < 8; n++) {
    const [c, o, i] = e[n];
    a[0][0] += l[0][n] * c, a[0][1] += l[0][n] * o, a[0][2] += l[0][n] * i, a[1][0] += l[1][n] * c, a[1][1] += l[1][n] * o, a[1][2] += l[1][n] * i, a[2][0] += l[2][n] * c, a[2][1] += l[2][n] * o, a[2][2] += l[2][n] * i;
  }
  return a;
}
function T(e) {
  return e[0][0] * (e[1][1] * e[2][2] - e[1][2] * e[2][1]) - e[0][1] * (e[1][0] * e[2][2] - e[1][2] * e[2][0]) + e[0][2] * (e[1][0] * e[2][1] - e[1][1] * e[2][0]);
}
function Y(e) {
  const l = T(e);
  return [[(e[1][1] * e[2][2] - e[1][2] * e[2][1]) / l, (e[0][2] * e[2][1] - e[0][1] * e[2][2]) / l, (e[0][1] * e[1][2] - e[0][2] * e[1][1]) / l], [(e[1][2] * e[2][0] - e[1][0] * e[2][2]) / l, (e[0][0] * e[2][2] - e[0][2] * e[2][0]) / l, (e[0][2] * e[1][0] - e[0][0] * e[1][2]) / l], [(e[1][0] * e[2][1] - e[1][1] * e[2][0]) / l, (e[0][1] * e[2][0] - e[0][0] * e[2][1]) / l, (e[0][0] * e[1][1] - e[0][1] * e[1][0]) / l]];
}
function Z(e) {
  const l = [];
  for (let a = 0; a < 6; a++) l.push(new Array(24).fill(0));
  for (let a = 0; a < 8; a++) {
    const n = e[0][a], c = e[1][a], o = e[2][a], i = a * 3;
    l[0][i + 0] = n, l[1][i + 1] = c, l[2][i + 2] = o, l[3][i + 0] = c, l[3][i + 1] = n, l[4][i + 1] = o, l[4][i + 2] = c, l[5][i + 0] = o, l[5][i + 2] = n;
  }
  return l;
}
function X(e, l) {
  const a = e * l / ((1 + l) * (1 - 2 * l)), n = e / (2 * (1 + l)), c = a + 2 * n;
  return [[c, a, a, 0, 0, 0], [a, c, a, 0, 0, 0], [a, a, c, 0, 0, 0], [0, 0, 0, n, 0, 0], [0, 0, 0, 0, n, 0], [0, 0, 0, 0, 0, n]];
}
function ct(e, l, a) {
  const n = X(l, a), c = [];
  for (let o = 0; o < 24; o++) c.push(new Array(24).fill(0));
  for (const [o, i, y] of K) {
    const p = U(o, i, y), N = V(e, p), $ = T(N), z = Y(N), r = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let u = 0; u < 8; u++) r[0][u] = z[0][0] * p[0][u] + z[0][1] * p[1][u] + z[0][2] * p[2][u], r[1][u] = z[1][0] * p[0][u] + z[1][1] * p[1][u] + z[1][2] * p[2][u], r[2][u] = z[2][0] * p[0][u] + z[2][1] * p[1][u] + z[2][2] * p[2][u];
    const k = Z(r), O = [];
    for (let u = 0; u < 6; u++) {
      O.push(new Array(24).fill(0));
      for (let A = 0; A < 24; A++) {
        let f = 0;
        for (let x = 0; x < 6; x++) f += n[u][x] * k[x][A];
        O[u][A] = f;
      }
    }
    for (let u = 0; u < 24; u++) for (let A = 0; A < 24; A++) {
      let f = 0;
      for (let x = 0; x < 6; x++) f += k[x][u] * O[x][A];
      c[u][A] += f * $;
    }
  }
  return c;
}
function it(e, l) {
  const a = l.length, n = [];
  for (let o = 0; o < a; o++) n.push([...e[o], l[o]]);
  for (let o = 0; o < a; o++) {
    let i = o, y = Math.abs(n[o][o]);
    for (let p = o + 1; p < a; p++) Math.abs(n[p][o]) > y && (i = p, y = Math.abs(n[p][o]));
    if (y < 1e-12) throw new Error(`Matriz singular en pivoteo i=${o}`);
    i !== o && ([n[o], n[i]] = [n[i], n[o]]);
    for (let p = o + 1; p < a; p++) {
      const N = n[p][o] / n[o][o];
      for (let $ = o; $ <= a; $++) n[p][$] -= N * n[o][$];
    }
  }
  const c = new Array(a).fill(0);
  for (let o = a - 1; o >= 0; o--) {
    let i = n[o][a];
    for (let y = o + 1; y < a; y++) i -= n[o][y] * c[y];
    c[o] = i / n[o][o];
  }
  return c;
}
function ft(e) {
  const l = performance.now(), { nodes: a, elements: n, E: c, nu: o, supports: i, loads: y } = e, p = a.length, N = 3 * p, $ = X(c, o), z = [];
  for (let f = 0; f < N; f++) z.push(new Array(N).fill(0));
  for (const f of n) {
    const x = f.map((h) => a[h]), j = ct(x, c, o);
    for (let h = 0; h < 8; h++) for (let g = 0; g < 8; g++) for (let E = 0; E < 3; E++) for (let F = 0; F < 3; F++) z[3 * f[h] + E][3 * f[g] + F] += j[3 * h + E][3 * g + F];
  }
  const r = new Array(N).fill(0);
  y.forEach(([f, x, j], h) => {
    r[3 * h + 0] += f, r[3 * h + 1] += x, r[3 * h + 2] += j;
  });
  const k = 1e15;
  i.forEach(([f, x, j], h) => {
    f && (z[3 * h + 0][3 * h + 0] += k), x && (z[3 * h + 1][3 * h + 1] += k), j && (z[3 * h + 2][3 * h + 2] += k);
  });
  const O = it(z, r), u = /* @__PURE__ */ new Map();
  for (let f = 0; f < p; f++) u.set(f, [O[3 * f], O[3 * f + 1], O[3 * f + 2]]);
  const A = /* @__PURE__ */ new Map();
  for (let f = 0; f < n.length; f++) {
    const x = n[f], j = x.map((E) => a[E]), h = [];
    for (const E of x) h.push(O[3 * E], O[3 * E + 1], O[3 * E + 2]);
    const g = [];
    for (const [E, F, C] of K) {
      const w = U(E, F, C), B = V(j, w), L = Y(B), H = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let d = 0; d < 8; d++) H[0][d] = L[0][0] * w[0][d] + L[0][1] * w[1][d] + L[0][2] * w[2][d], H[1][d] = L[1][0] * w[0][d] + L[1][1] * w[1][d] + L[1][2] * w[2][d], H[2][d] = L[2][0] * w[0][d] + L[2][1] * w[1][d] + L[2][2] * w[2][d];
      const q = Z(H), R = new Array(6).fill(0);
      for (let d = 0; d < 6; d++) for (let P = 0; P < 24; P++) R[d] += q[d][P] * h[P];
      const t = new Array(6).fill(0);
      for (let d = 0; d < 6; d++) for (let P = 0; P < 6; P++) t[d] += $[d][P] * R[P];
      const s = t[0], m = t[1], I = t[2], b = t[3], G = t[4], D = t[5], J = Math.sqrt(0.5 * ((s - m) ** 2 + (m - I) ** 2 + (I - s) ** 2) + 3 * (b * b + G * G + D * D));
      g.push(J);
    }
    A.set(f, g);
  }
  return { displacements: u, vonMisesPerElement: A, elapsedMs: performance.now() - l };
}
const _ = { Lx: { value: S.state(0.5), min: 0.25, max: 2, step: 0.05, label: "Lx (m, ancho)" }, Ly: { value: S.state(0.5), min: 0.25, max: 2, step: 0.05, label: "Ly (m, profundidad)" }, Lz: { value: S.state(2), min: 0.5, max: 5, step: 0.25, label: "Lz (m, altura COLUMNA)" }, nx: { value: S.state(3), min: 2, max: 8, step: 1, label: "Mesh nx" }, ny: { value: S.state(3), min: 2, max: 8, step: 1, label: "Mesh ny" }, nz: { value: S.state(6), min: 2, max: 12, step: 1, label: "Mesh nz (vertical)" }, E: { value: S.state(2e8), min: 25e6, max: 22e7, step: 5e6, label: "E (kN/m\xB2)" }, nu: { value: S.state(0.3), min: 0, max: 0.49, step: 0.01, label: "\u03BD (Poisson)" }, P_top: { value: S.state(-50), min: -500, max: 0, step: 10, label: "Carga top (kN, vertical)" } }, M = S.state([]), Q = S.state([]), W = S.state({}), tt = S.state({}), et = S.state({}), st = S.state({}), ut = S.state([]);
S.derive(() => {
  const e = _.Lx.value.val, l = _.Ly.value.val, a = _.Lz.value.val, n = Math.round(_.nx.value.val), c = Math.round(_.ny.value.val), o = Math.round(_.nz.value.val), i = _.E.value.val, y = _.nu.value.val, p = _.P_top.value.val, N = e / n, $ = l / c, z = a / o, r = (t, s, m) => t * (c + 1) * (o + 1) + s * (o + 1) + m, k = [];
  for (let t = 0; t <= n; t++) for (let s = 0; s <= c; s++) for (let m = 0; m <= o; m++) k.push([t * N, s * $, m * z]);
  const O = [];
  for (let t = 0; t < n; t++) for (let s = 0; s < c; s++) for (let m = 0; m < o; m++) O.push([r(t, s, m), r(t + 1, s, m), r(t + 1, s + 1, m), r(t, s + 1, m), r(t, s, m + 1), r(t + 1, s, m + 1), r(t + 1, s + 1, m + 1), r(t, s + 1, m + 1)]);
  const u = /* @__PURE__ */ new Map();
  for (let t = 0; t <= n; t++) for (let s = 0; s <= c; s++) u.set(r(t, s, 0), [true, true, true]);
  const A = [];
  for (let t = 0; t <= n; t++) for (let s = 0; s <= c; s++) A.push(r(t, s, o));
  const f = /* @__PURE__ */ new Map(), x = p / A.length;
  for (const t of A) f.set(t, [0, 0, x]);
  const j = k.length, h = 3 * j;
  console.log(`Cubo H8: ${j} nodos \xD7 3 DOF = ${h} DOFs, ${O.length} elementos`);
  let g, E = null;
  try {
    g = ft({ nodes: k, elements: O, E: i, nu: y, supports: u, loads: f }), console.log(`H8 resuelto en ${g.elapsedMs.toFixed(0)} ms`);
  } catch (t) {
    E = (t == null ? void 0 : t.message) ?? String(t), console.warn("H8 solver:", E), g = null;
  }
  const F = k.map((t) => [t[0], t[1], t[2]]), C = [], w = { elasticities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map() };
  function B(t, s, m, I) {
    C.push([t, s, m, I]);
    const b = C.length - 1;
    w.elasticities.set(b, i), w.poissonsRatios.set(b, y), w.thicknesses.set(b, 1e-3), w.shearModuli.set(b, i / (2 * (1 + y))), w.densities.set(b, 78), w.areas.set(b, 0), w.momentsOfInertiaY.set(b, 0), w.momentsOfInertiaZ.set(b, 0), w.torsionalConstants.set(b, 0);
  }
  for (let t = 0; t < n; t++) for (let s = 0; s < c; s++) B(r(t, s, 0), r(t + 1, s, 0), r(t + 1, s + 1, 0), r(t, s + 1, 0)), B(r(t, s, o), r(t + 1, s, o), r(t + 1, s + 1, o), r(t, s + 1, o));
  for (let t = 0; t < n; t++) for (let s = 0; s < o; s++) B(r(t, 0, s), r(t + 1, 0, s), r(t + 1, 0, s + 1), r(t, 0, s + 1)), B(r(t, c, s), r(t + 1, c, s), r(t + 1, c, s + 1), r(t, c, s + 1));
  for (let t = 0; t < c; t++) for (let s = 0; s < o; s++) B(r(0, t, s), r(0, t + 1, s), r(0, t + 1, s + 1), r(0, t, s + 1)), B(r(n, t, s), r(n, t + 1, s), r(n, t + 1, s + 1), r(n, t, s + 1));
  const L = { deformations: /* @__PURE__ */ new Map() };
  g && g.displacements.forEach(([t, s, m], I) => {
    L.deformations.set(I, [t, s, m, 0, 0, 0]);
  });
  const H = {};
  if (g) {
    const t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
    O.forEach((m, I) => {
      const b = g.vonMisesPerElement.get(I) || [], G = b.reduce((D, J) => D + J, 0) / Math.max(1, b.length);
      for (const D of m) {
        const J = s.get(D) || { sum: 0, count: 0 };
        J.sum += G, J.count += 1, s.set(D, J);
      }
    }), C.forEach((m, I) => {
      const b = m.map((G) => {
        const D = s.get(G);
        return D ? D.sum / D.count : 0;
      });
      t.set(I, [b[0], b[1], b[2], b[3]]);
    }), H.vonMises = t;
  }
  const q = /* @__PURE__ */ new Map();
  for (let t = 0; t <= n; t++) for (let s = 0; s <= c; s++) q.set(r(t, s, 0), [true, true, true, true, true, true]);
  const R = /* @__PURE__ */ new Map();
  for (const t of A) R.set(t, [0, 0, x, 0, 0, 0]);
  if (console.log(`Solid cube H8: ${j} nodos, ${O.length} hexa, ${C.length} faces visibles`), g && g.elapsedMs) {
    let t = 0;
    g.displacements.forEach(([, , s]) => {
      Math.abs(s) > Math.abs(t) && (t = s);
    }), console.log(`  \u03B5 max vm = ${Math.max(...Array.from(g.vonMisesPerElement.values()).flat()).toFixed(0)} kN/m\xB2 | uz_tip \u2248 ${t.toExponential(3)} m | solve ${g.elapsedMs.toFixed(0)}ms`);
  }
  E && console.error("Solver H8 fall\xF3:", E), M.val = F, Q.val = C, W.val = { supports: q, loads: R }, tt.val = w, et.val = L, st.val = H;
});
const ot = nt({ mesh: { nodes: M, elements: Q, nodeInputs: W, elementInputs: tt, deformOutputs: et, analyzeOutputs: st }, objects3D: ut, settingsObj: { deformedShape: true, shellResults: "vonMises", gridSize: 4, deformScale: 200 } });
document.body.append(at(_), ot, lt({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/solid-cube-fem/main.ts" }));
setTimeout(() => {
  var _a;
  const e = ot.__ctx;
  (e == null ? void 0 : e.camera) && (e == null ? void 0 : e.controls) && (e.camera.up.set(0, 0, 1), e.camera.position.set(3, -3, 2), e.controls.target.set(0.25, 0.25, 1), e.controls.update(), (_a = e.render) == null ? void 0 : _a.call(e));
}, 800);
