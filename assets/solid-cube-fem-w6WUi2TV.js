import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as p, P as tt } from "./theme-2eEBQPmF.js";
import { g as ot, c as Te, a as ze, e as Fe } from "./getViewer-DnVmZy1T.js";
import { g as st } from "./getParameters-CIJBOwMB.js";
import { g as nt } from "./styles-Cjdl64P4.js";
import "./Text-DyNVkyur.js";
const at = 3;
function we(e) {
  const o = e.querySelector(":scope > .tp-rotv_b");
  if (!o || o.dataset.dragInit === "1") return;
  o.dataset.dragInit = "1", o.style.cursor = "move", o.style.userSelect = "none";
  let n = 0, s = 0, c = 0, t = 0, r = false, _ = false;
  const m = (f) => {
    if (f.button !== 0) return;
    r = true, _ = false, n = f.clientX, s = f.clientY;
    const M = e.getBoundingClientRect();
    c = M.left, t = M.top;
  }, D = (f) => {
    if (!r) return;
    const M = f.clientX - n, S = f.clientY - s;
    if (!_) {
      if (Math.abs(M) + Math.abs(S) < at) return;
      _ = true, e.style.position = "fixed", e.style.left = `${c}px`, e.style.top = `${t}px`, e.style.right = "auto", e.style.bottom = "auto", e.style.zIndex = "10000", e.style.margin = "0";
    }
    let T = c + M, i = t + S;
    const L = e.offsetWidth;
    T = Math.max(-L + 50, Math.min(window.innerWidth - 50, T)), i = Math.max(0, Math.min(window.innerHeight - 30, i)), e.style.left = `${T}px`, e.style.top = `${i}px`, f.preventDefault();
  }, P = () => {
    r = false;
  };
  o.addEventListener("mousedown", m), document.addEventListener("mousemove", D), document.addEventListener("mouseup", P);
}
function lt() {
  document.querySelectorAll(".tp-rotv").forEach(we), new MutationObserver((o) => {
    for (const n of o) n.addedNodes.forEach((s) => {
      var _a, _b;
      s instanceof HTMLElement && (((_a = s.classList) == null ? void 0 : _a.contains("tp-rotv")) && we(s), (_b = s.querySelectorAll) == null ? void 0 : _b.call(s, ".tp-rotv").forEach(we));
    });
  }).observe(document.body, { childList: true, subtree: true });
}
const rt = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]], b = 1 / Math.sqrt(3), De = [[-b, -b, -b], [+b, -b, -b], [+b, +b, -b], [-b, +b, -b], [-b, -b, +b], [+b, -b, +b], [+b, +b, +b], [-b, +b, +b]];
function He(e, o, n) {
  const s = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
  for (let c = 0; c < 8; c++) {
    const [t, r, _] = rt[c];
    s[0][c] = t / 8 * (1 + r * o) * (1 + _ * n), s[1][c] = r / 8 * (1 + t * e) * (1 + _ * n), s[2][c] = _ / 8 * (1 + t * e) * (1 + r * o);
  }
  return s;
}
function Oe(e, o) {
  const n = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let s = 0; s < 8; s++) {
    const [c, t, r] = e[s];
    n[0][0] += o[0][s] * c, n[0][1] += o[0][s] * t, n[0][2] += o[0][s] * r, n[1][0] += o[1][s] * c, n[1][1] += o[1][s] * t, n[1][2] += o[1][s] * r, n[2][0] += o[2][s] * c, n[2][1] += o[2][s] * t, n[2][2] += o[2][s] * r;
  }
  return n;
}
function Ie(e) {
  return e[0][0] * (e[1][1] * e[2][2] - e[1][2] * e[2][1]) - e[0][1] * (e[1][0] * e[2][2] - e[1][2] * e[2][0]) + e[0][2] * (e[1][0] * e[2][1] - e[1][1] * e[2][0]);
}
function Ce(e) {
  const o = Ie(e);
  return [[(e[1][1] * e[2][2] - e[1][2] * e[2][1]) / o, (e[0][2] * e[2][1] - e[0][1] * e[2][2]) / o, (e[0][1] * e[1][2] - e[0][2] * e[1][1]) / o], [(e[1][2] * e[2][0] - e[1][0] * e[2][2]) / o, (e[0][0] * e[2][2] - e[0][2] * e[2][0]) / o, (e[0][2] * e[1][0] - e[0][0] * e[1][2]) / o], [(e[1][0] * e[2][1] - e[1][1] * e[2][0]) / o, (e[0][1] * e[2][0] - e[0][0] * e[2][1]) / o, (e[0][0] * e[1][1] - e[0][1] * e[1][0]) / o]];
}
function Ne(e) {
  const o = [];
  for (let n = 0; n < 6; n++) o.push(new Array(24).fill(0));
  for (let n = 0; n < 8; n++) {
    const s = e[0][n], c = e[1][n], t = e[2][n], r = n * 3;
    o[0][r + 0] = s, o[1][r + 1] = c, o[2][r + 2] = t, o[3][r + 0] = c, o[3][r + 1] = s, o[4][r + 1] = t, o[4][r + 2] = c, o[5][r + 0] = t, o[5][r + 2] = s;
  }
  return o;
}
function Ye(e, o) {
  const n = e * o / ((1 + o) * (1 - 2 * o)), s = e / (2 * (1 + o)), c = n + 2 * s;
  return [[c, n, n, 0, 0, 0], [n, c, n, 0, 0, 0], [n, n, c, 0, 0, 0], [0, 0, 0, s, 0, 0], [0, 0, 0, 0, s, 0], [0, 0, 0, 0, 0, s]];
}
function ct(e, o, n) {
  const s = Ye(o, n), c = [];
  for (let t = 0; t < 24; t++) c.push(new Array(24).fill(0));
  for (const [t, r, _] of De) {
    const m = He(t, r, _), D = Oe(e, m), P = Ie(D), f = Ce(D), M = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
    for (let i = 0; i < 8; i++) M[0][i] = f[0][0] * m[0][i] + f[0][1] * m[1][i] + f[0][2] * m[2][i], M[1][i] = f[1][0] * m[0][i] + f[1][1] * m[1][i] + f[1][2] * m[2][i], M[2][i] = f[2][0] * m[0][i] + f[2][1] * m[1][i] + f[2][2] * m[2][i];
    const S = Ne(M), T = [];
    for (let i = 0; i < 6; i++) {
      T.push(new Array(24).fill(0));
      for (let L = 0; L < 24; L++) {
        let z = 0;
        for (let d = 0; d < 6; d++) z += s[i][d] * S[d][L];
        T[i][L] = z;
      }
    }
    for (let i = 0; i < 24; i++) for (let L = 0; L < 24; L++) {
      let z = 0;
      for (let d = 0; d < 6; d++) z += S[d][i] * T[d][L];
      c[i][L] += z * P;
    }
  }
  return c;
}
function it(e, o) {
  const n = o.length, s = [];
  for (let t = 0; t < n; t++) s.push([...e[t], o[t]]);
  for (let t = 0; t < n; t++) {
    let r = t, _ = Math.abs(s[t][t]);
    for (let m = t + 1; m < n; m++) Math.abs(s[m][t]) > _ && (r = m, _ = Math.abs(s[m][t]));
    if (_ < 1e-12) throw new Error(`Matriz singular en pivoteo i=${t}`);
    r !== t && ([s[t], s[r]] = [s[r], s[t]]);
    for (let m = t + 1; m < n; m++) {
      const D = s[m][t] / s[t][t];
      for (let P = t; P <= n; P++) s[m][P] -= D * s[t][P];
    }
  }
  const c = new Array(n).fill(0);
  for (let t = n - 1; t >= 0; t--) {
    let r = s[t][n];
    for (let _ = t + 1; _ < n; _++) r -= s[t][_] * c[_];
    c[t] = r / s[t][t];
  }
  return c;
}
function dt(e) {
  const o = performance.now(), { nodes: n, elements: s, E: c, nu: t, supports: r, loads: _ } = e, m = n.length, D = 3 * m, P = Ye(c, t), f = [];
  for (let d = 0; d < D; d++) f.push(new Array(D).fill(0));
  for (const d of s) {
    const U = d.map((h) => n[h]), R = ct(U, c, t);
    for (let h = 0; h < 8; h++) for (let O = 0; O < 8; O++) for (let $ = 0; $ < 3; $++) for (let k = 0; k < 3; k++) f[3 * d[h] + $][3 * d[O] + k] += R[3 * h + $][3 * O + k];
  }
  const M = new Array(D).fill(0);
  _.forEach(([d, U, R], h) => {
    M[3 * h + 0] += d, M[3 * h + 1] += U, M[3 * h + 2] += R;
  });
  const S = 1e15;
  r.forEach(([d, U, R], h) => {
    d && (f[3 * h + 0][3 * h + 0] += S), U && (f[3 * h + 1][3 * h + 1] += S), R && (f[3 * h + 2][3 * h + 2] += S);
  });
  const T = it(f, M), i = /* @__PURE__ */ new Map();
  for (let d = 0; d < m; d++) i.set(d, [T[3 * d], T[3 * d + 1], T[3 * d + 2]]);
  const L = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
  for (let d = 0; d < s.length; d++) {
    const U = s[d], R = U.map((k) => n[k]), h = [];
    for (const k of U) h.push(T[3 * k], T[3 * k + 1], T[3 * k + 2]);
    const O = [], $ = [];
    for (const [k, ke, ce] of De) {
      const I = He(k, ke, ce), ie = Oe(R, I), X = Ce(ie), K = [new Array(8).fill(0), new Array(8).fill(0), new Array(8).fill(0)];
      for (let v = 0; v < 8; v++) K[0][v] = X[0][0] * I[0][v] + X[0][1] * I[1][v] + X[0][2] * I[2][v], K[1][v] = X[1][0] * I[0][v] + X[1][1] * I[1][v] + X[1][2] * I[2][v], K[2][v] = X[2][0] * I[0][v] + X[2][1] * I[1][v] + X[2][2] * I[2][v];
      const de = Ne(K), V = new Array(6).fill(0);
      for (let v = 0; v < 6; v++) for (let x = 0; x < 24; x++) V[v] += de[v][x] * h[x];
      const q = new Array(6).fill(0);
      for (let v = 0; v < 6; v++) for (let x = 0; x < 6; x++) q[v] += P[v][x] * V[x];
      const ee = q[0], le = q[1], te = q[2], Q = q[3], G = q[4], oe = q[5], ue = Math.sqrt(0.5 * ((ee - le) ** 2 + (le - te) ** 2 + (te - ee) ** 2) + 3 * (Q * Q + G * G + oe * oe));
      O.push(ue), $.push([ee, le, te, Q, G, oe]);
    }
    L.set(d, O), z.set(d, $);
  }
  return { displacements: i, vonMisesPerElement: L, stressPerElement: z, elapsedMs: performance.now() - o };
}
const H = { Lx_col: { value: p.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Lx col (m)" }, Ly_col: { value: p.state(0.4), min: 0.2, max: 0.8, step: 0.1, label: "Ly col (m)" }, Lz: { value: p.state(3), min: 1.5, max: 6, step: 0.5, label: "Altura col Lz (m)" }, W_beam: { value: p.state(0.2), min: 0.1, max: 0.4, step: 0.1, label: "W viga (m, ancho)" }, H_beam: { value: p.state(0.5), min: 0.25, max: 1, step: 0.25, label: "H viga (m, peralte)" }, L_beam: { value: p.state(1.5), min: 0.5, max: 3, step: 0.25, label: "L viga (m, voladizo)" }, nx_col: { value: p.state(4), min: 2, max: 6, step: 2, label: "nx col" }, ny_col: { value: p.state(4), min: 2, max: 6, step: 2, label: "ny col" }, nz: { value: p.state(12), min: 6, max: 18, step: 2, label: "nz col" }, ny_b: { value: p.state(6), min: 2, max: 12, step: 1, label: "ny viga" }, E: { value: p.state(25e6), min: 15e6, max: 4e7, step: 1e6, label: "E concreto (kN/m\xB2)" }, nu: { value: p.state(0.2), min: 0, max: 0.3, step: 0.01, label: "\u03BD concreto" }, P_tip: { value: p.state(-30), min: -200, max: 200, step: 10, label: "P tip viga (kN, vertical)" } }, $e = p.state([]), Xe = p.state([]), je = p.state({}), Ze = p.state({}), Ue = p.state({}), ye = p.state({}), ut = p.state([]), ve = p.state("vonMises"), Re = p.state({}), Ge = p.state([]), We = p.state({ P: 0, L_beam: 0, I_beam: 0, delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0, delta_he: 0, errEBpct: 0, errTotalPct: 0, elapsed: 0 });
p.derive(() => {
  const e = H.Lx_col.value.val, o = H.Ly_col.value.val, n = H.Lz.value.val, s = H.W_beam.value.val, c = H.H_beam.value.val, t = H.L_beam.value.val, r = Math.round(H.nx_col.value.val), _ = Math.round(H.ny_col.value.val), m = Math.round(H.nz.value.val), D = Math.round(H.ny_b.value.val), P = H.E.value.val, f = H.nu.value.val, M = H.P_tip.value.val, S = [], T = /* @__PURE__ */ new Map(), i = [], L = 4;
  function z(a, l, u) {
    const w = `${a.toFixed(L)},${l.toFixed(L)},${u.toFixed(L)}`;
    let y = T.get(w);
    return y === void 0 && (S.push([a, l, u]), y = S.length - 1, T.set(w, y)), y;
  }
  function d(a, l, u, w, y, j, E, Z, A) {
    const B = (w - a) / E, C = (y - l) / Z, W = (j - u) / A;
    for (let F = 0; F < A; F++) for (let N = 0; N < Z; N++) for (let Y = 0; Y < E; Y++) i.push([z(a + Y * B, l + N * C, u + F * W), z(a + (Y + 1) * B, l + N * C, u + F * W), z(a + (Y + 1) * B, l + (N + 1) * C, u + F * W), z(a + Y * B, l + (N + 1) * C, u + F * W), z(a + Y * B, l + N * C, u + (F + 1) * W), z(a + (Y + 1) * B, l + N * C, u + (F + 1) * W), z(a + (Y + 1) * B, l + (N + 1) * C, u + (F + 1) * W), z(a + Y * B, l + (N + 1) * C, u + (F + 1) * W)]);
  }
  const U = e / r, R = n / m;
  let h = Math.max(2, Math.round(s / U));
  r - h & 1 && (h = Math.max(2, h - 1));
  let O = Math.max(2, Math.round(c / R));
  O & 1 && (O = Math.max(2, O - 1));
  const $ = h * U, k = O * R, ce = Math.round(m / 2) * R, I = ce - k / 2, ie = ce + k / 2, X = -e / 2, K = e / 2, de = -o / 2, V = o / 2;
  d(X, de, 0, K, V, n, r, _, m);
  const q = -$ / 2, ee = $ / 2, le = V, te = V + t;
  d(q, le, I, ee, te, ie, h, D, O);
  const Q = /* @__PURE__ */ new Map();
  S.forEach((a, l) => {
    a[0] >= X - 1e-6 && a[0] <= K + 1e-6 && a[1] >= de - 1e-6 && a[1] <= V + 1e-6 && (Math.abs(a[2]) < 1e-6 || Math.abs(a[2] - n) < 1e-6) && Q.set(l, [true, true, true]);
  });
  const G = [];
  S.forEach((a, l) => {
    Math.abs(a[1] - te) < 1e-6 && a[0] >= q - 1e-6 && a[0] <= ee + 1e-6 && a[2] >= I - 1e-6 && a[2] <= ie + 1e-6 && G.push(l);
  });
  const oe = /* @__PURE__ */ new Map(), ue = G.length > 0 ? M / G.length : 0;
  for (const a of G) oe.set(a, [0, 0, ue]);
  const v = S.length;
  console.log(`Col+Viga H8: ${v} nodos \xD7 3 DOF = ${3 * v} DOFs, ${i.length} elementos`);
  let x, me = null;
  try {
    x = dt({ nodes: S, elements: i, E: P, nu: f, supports: Q, loads: oe }), console.log(`H8 resuelto en ${x.elapsedMs.toFixed(0)} ms`);
  } catch (a) {
    me = (a == null ? void 0 : a.message) ?? String(a), console.warn("H8 solver:", me), x = null;
  }
  const Ke = S.map((a) => [a[0], a[1], a[2]]), fe = [], J = { elasticities: /* @__PURE__ */ new Map(), poissonsRatios: /* @__PURE__ */ new Map(), thicknesses: /* @__PURE__ */ new Map(), shearModuli: /* @__PURE__ */ new Map(), densities: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), momentsOfInertiaY: /* @__PURE__ */ new Map(), momentsOfInertiaZ: /* @__PURE__ */ new Map(), torsionalConstants: /* @__PURE__ */ new Map() }, xe = /* @__PURE__ */ new Map();
  function Ve(a) {
    return [...a].sort((l, u) => l - u).join(",");
  }
  function se(a, l, u, w) {
    const y = Ve([a, l, u, w]), j = xe.get(y);
    j ? j.count += 1 : xe.set(y, { face: [a, l, u, w], count: 1 });
  }
  for (const a of i) {
    const [l, u, w, y, j, E, Z, A] = a;
    se(l, u, w, y), se(j, E, Z, A), se(l, u, E, j), se(y, w, Z, A), se(l, y, A, j), se(u, w, Z, E);
  }
  function Qe(a) {
    fe.push(a);
    const l = fe.length - 1;
    J.elasticities.set(l, P), J.poissonsRatios.set(l, f), J.thicknesses.set(l, 1e-3), J.shearModuli.set(l, P / (2 * (1 + f))), J.densities.set(l, 24 / 9.80665), J.areas.set(l, 0), J.momentsOfInertiaY.set(l, 0), J.momentsOfInertiaZ.set(l, 0), J.torsionalConstants.set(l, 0);
  }
  for (const { face: a, count: l } of xe.values()) l === 1 && Qe(a);
  const Ae = { deformations: /* @__PURE__ */ new Map() };
  x && x.displacements.forEach(([a, l, u], w) => {
    Ae.deformations.set(w, [a, l, u, 0, 0, 0]);
  });
  const re = { vonMises: /* @__PURE__ */ new Map(), sigmaXX: /* @__PURE__ */ new Map(), sigmaYY: /* @__PURE__ */ new Map(), sigmaZZ: /* @__PURE__ */ new Map(), tauXY: /* @__PURE__ */ new Map(), tauYZ: /* @__PURE__ */ new Map(), tauXZ: /* @__PURE__ */ new Map(), ux: /* @__PURE__ */ new Map(), uy: /* @__PURE__ */ new Map(), uz: /* @__PURE__ */ new Map() };
  if (x) {
    const a = { vonMises: /* @__PURE__ */ new Map(), sigmaXX: /* @__PURE__ */ new Map(), sigmaYY: /* @__PURE__ */ new Map(), sigmaZZ: /* @__PURE__ */ new Map(), tauXY: /* @__PURE__ */ new Map(), tauYZ: /* @__PURE__ */ new Map(), tauXZ: /* @__PURE__ */ new Map() };
    i.forEach((l, u) => {
      const w = x.vonMisesPerElement.get(u) || [], y = x.stressPerElement.get(u) || [], j = w.reduce((A, B) => A + B, 0) / Math.max(1, w.length), E = [0, 0, 0, 0, 0, 0];
      for (const A of y) for (let B = 0; B < 6; B++) E[B] += A[B];
      for (let A = 0; A < 6; A++) E[A] /= Math.max(1, y.length);
      const Z = { vonMises: j, sigmaXX: E[0], sigmaYY: E[1], sigmaZZ: E[2], tauXY: E[3], tauYZ: E[4], tauXZ: E[5] };
      for (const A of l) for (const B of Object.keys(a)) {
        const C = a[B].get(A) || { sum: 0, count: 0 };
        C.sum += Z[B], C.count += 1, a[B].set(A, C);
      }
    });
    for (const l of Object.keys(a)) a[l].forEach((u, w) => {
      re[l].set(w, u.sum / Math.max(1, u.count));
    });
    x.displacements.forEach(([l, u, w], y) => {
      re.ux.set(y, l), re.uy.set(y, u), re.uz.set(y, w);
    });
  }
  Re.val = re, Ge.val = fe;
  const Le = /* @__PURE__ */ new Map();
  Q.forEach((a, l) => Le.set(l, [true, true, true, true, true, true]));
  const Se = /* @__PURE__ */ new Map();
  for (const a of G) Se.set(a, [0, 0, ue, 0, 0, 0]);
  if (x) {
    let a = 0, l = 0;
    for (const et of G) {
      const pe = x.displacements.get(et);
      pe && (l += pe[2], Math.abs(pe[2]) > Math.abs(a) && (a = pe[2]));
    }
    l /= Math.max(1, G.length);
    const u = $ * k * k * k / 12, w = $ * k, y = P / (2 * (1 + f)), j = 5 / 6, E = M * t * t * t / (3 * P * u), Z = M * t / (j * y * w), A = e * o * o * o / 12, W = M * t * n / (16 * P * A) * t, F = E + Z + W, N = Math.abs(l - E) / Math.abs(E || 1) * 100, Y = Math.abs(l - F) / Math.abs(F || 1) * 100;
    console.log("  \u2500\u2500\u2500 BENCHMARK col+viga H8 \u2500\u2500\u2500"), console.log(`  \u03B4 E-B puro (rigid wall) = ${E.toExponential(4)} m`), console.log(`  \u03B4 + Timoshenko shear   = ${(E + Z).toExponential(4)} m`), console.log(`  \u03B4 + col flex (joint)   = ${F.toExponential(4)} m`), console.log(`  \u03B4 Hekatan H8 (medido)  = ${l.toExponential(4)} m`), console.log(`  \u0394 vs E-B puro = ${N.toFixed(2)}% (esperado 20-40% extra)`), console.log(`  \u0394 vs total anal\xEDtico = ${Y.toFixed(2)}% (esperado <15%)`), We.val = { P: M, L_beam: t, I_beam: u, delta_EB: E, delta_shear: Z, delta_col: W, delta_total_an: F, delta_he: l, errEBpct: N, errTotalPct: Y, elapsed: x.elapsedMs };
  }
  me && console.error("Solver H8 fall\xF3:", me), $e.val = Ke, Xe.val = fe, je.val = { supports: Le, loads: Se }, Ze.val = J, Ue.val = Ae;
});
p.derive(() => {
  const e = Re.val, o = Ge.val, n = ve.val, s = e[n];
  if (!s || s.size === 0 || o.length === 0) {
    ye.val = {};
    return;
  }
  const c = /* @__PURE__ */ new Map();
  o.forEach((t, r) => {
    const _ = s.get(t[0]) ?? 0, m = s.get(t[1]) ?? 0, D = s.get(t[2]) ?? 0, P = s.get(t[3]) ?? 0;
    c.set(r, [_, m, D, P]);
  }), ye.val = { vonMises: c };
});
const Ee = ot({ mesh: { nodes: $e, elements: Xe, nodeInputs: je, elementInputs: Ze, deformOutputs: Ue, analyzeOutputs: ye }, objects3D: ut, settingsObj: { deformedShape: true, shellResults: "none", solidResults: "vonMises", gridSize: 4, deformScale: 100, loads: true, supports: true, displayScale: 0.4 } });
setTimeout(() => {
  const e = Ee.__settings;
  (e == null ? void 0 : e.solidResults) && (ve.val = e.solidResults.val !== "none" ? e.solidResults.val : "vonMises", e.solidResults.val === "none" ? e.shellResults.val = "none" : e.shellResults.val = "vonMises", p.derive(() => {
    const o = e.solidResults.val;
    if (o === "none") e.shellResults.val = "none";
    else {
      e.shellResults.val = "vonMises";
      const n = o;
      n !== ve.val && (ve.val = n);
    }
  }));
}, 100);
const Me = document.createElement("div");
Me.style.cssText = `
  position: fixed; top: 8px; right: 8px;
  width: 280px; max-height: 85vh; overflow-y: auto;
  z-index: 9999;
`;
const ne = new tt({ title: "\u{1F9EA} Benchmark \u2014 col+viga H8", container: Me, expanded: true }), g = { delta_EB: 0, delta_shear: 0, delta_col: 0, delta_total_an: 0, delta_he: 0, errTotalPct: 0, errEBpct: 0, status: "\u2014", I_beam: 0, L_beam: 0, P: 0, elapsed: 0 }, ae = (e) => e.toExponential(3), qe = (e) => e.toFixed(2), Je = (e) => e.toFixed(2), he = ne.addFolder({ title: "Anal\xEDtico (E-B + Timoshenko + col flex)" });
he.addBinding(g, "delta_EB", { readonly: true, label: "\u03B4 E-B (m)", format: ae });
he.addBinding(g, "delta_shear", { readonly: true, label: "\u03B4 Timoshenko (m)", format: ae });
he.addBinding(g, "delta_col", { readonly: true, label: "\u03B4 col joint (m)", format: ae });
he.addBinding(g, "delta_total_an", { readonly: true, label: "\u03B4 TOTAL (m)", format: ae });
const _e = ne.addFolder({ title: "Hekatan H8 (medido)" });
_e.addBinding(g, "delta_he", { readonly: true, label: "\u03B4 tip (m)", format: ae });
_e.addBinding(g, "errTotalPct", { readonly: true, label: "\u0394 vs total (%)", format: qe });
_e.addBinding(g, "errEBpct", { readonly: true, label: "\u0394 vs E-B (%)", format: qe });
_e.addBinding(g, "status", { readonly: true, label: "Status" });
const be = ne.addFolder({ title: "Par\xE1metros / runtime", expanded: false });
be.addBinding(g, "I_beam", { readonly: true, label: "I_beam (m\u2074)", format: ae });
be.addBinding(g, "L_beam", { readonly: true, label: "L_beam (m)", format: Je });
be.addBinding(g, "P", { readonly: true, label: "P tip (kN)", format: Je });
be.addBinding(g, "elapsed", { readonly: true, label: "Solve (ms)", format: (e) => e.toFixed(0) });
const Be = ne.addFolder({ title: "Unidades color map", expanded: true }), Pe = { stress: Fe.val, disp: ze.val, force: Te.val };
Be.addBinding(Pe, "stress", { options: { "kN/m\xB2": "kN/m\xB2", kPa: "kPa", MPa: "MPa", GPa: "GPa", "kgf/cm\xB2": "kgf/cm\xB2", "tonf/m\xB2": "tonf/m\xB2", ksi: "ksi", psi: "psi" }, label: "Tensi\xF3n \u03C3/\u03C4" }).on("change", (e) => {
  Fe.val = e.value;
});
Be.addBinding(Pe, "disp", { options: { m: "m", cm: "cm", mm: "mm", \u00B5m: "\xB5m" }, label: "Desplazamiento u" }).on("change", (e) => {
  ze.val = e.value;
});
Be.addBinding(Pe, "force", { options: { kN: "kN", tonf: "tonf", kip: "kip" }, label: "Fuerza (shells)" }).on("change", (e) => {
  Te.val = e.value;
});
const mt = ne.addFolder({ title: "Pendientes", expanded: false }), ge = document.createElement("div");
ge.style.cssText = "font:10.5px ui-monospace,monospace;color:#aaa;padding:6px 8px;line-height:1.5;";
ge.textContent = `\xB7 Patch test (constant strain)
\xB7 MacNeal-Harder warped beam
\xB7 Cook's membrane / Pinched cylinder
\xB7 vs CalculiX, Code Aster, FEniCS, SAP2000`;
ge.style.whiteSpace = "pre-line";
mt.element.appendChild(ge);
document.body.append(Me);
p.derive(() => {
  const e = We.val;
  g.delta_EB = e.delta_EB, g.delta_shear = e.delta_shear, g.delta_col = e.delta_col, g.delta_total_an = e.delta_total_an, g.delta_he = e.delta_he, g.errTotalPct = e.errTotalPct, g.errEBpct = e.errEBpct, g.status = e.errTotalPct < 5 ? "\u2713 PASA (<5%)" : e.errTotalPct < 15 ? "\u26A0 ACEPTABLE (5-15%)" : "\u2717 revisar (>15%)", g.I_beam = e.I_beam, g.L_beam = e.L_beam, g.P = e.P, g.elapsed = e.elapsed, ne.refresh();
});
document.body.append(st(H), Ee, nt({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/solid-cube-fem/main.ts" }));
setTimeout(() => lt(), 200);
setTimeout(() => {
  var _a;
  const e = Ee.__ctx;
  (e == null ? void 0 : e.camera) && (e == null ? void 0 : e.controls) && (e.camera.up.set(0, 0, 1), e.camera.position.set(3.5, 3.5, 2.5), e.controls.target.set(0, 1, 1.5), e.controls.update(), (_a = e.render) == null ? void 0 : _a.call(e));
}, 800);
