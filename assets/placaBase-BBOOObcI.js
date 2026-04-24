import { c as ee, M as D, b as g, d as ue, E as _e, L as fe, C as Y, R as be, e as te, D as oe } from "./Text-C52Bkp-N.js";
const xe = { id: "placa-base", name: "Placa base anclada (AISC 360-22 \xA7J8 + ACI 318)", category: "Conexiones", hasModal: false, params: { B: { default: 0.5, min: 0.25, max: 1.2, step: 0.02, label: "B placa (m, eje X)", folder: "Placa" }, H: { default: 0.5, min: 0.25, max: 1.2, step: 0.02, label: "H placa (m, eje Y)", folder: "Placa" }, t_plate: { default: 0.025, min: 0.012, max: 0.06, step: 2e-3, label: "Espesor placa (m)", folder: "Placa" }, d_col: { default: 0.3, min: 0.18, max: 0.5, step: 0.02, label: "d columna (m)", folder: "Columna" }, bf_col: { default: 0.25, min: 0.15, max: 0.4, step: 0.01, label: "bf columna (m)", folder: "Columna" }, tf_col: { default: 0.022, min: 0.012, max: 0.04, step: 2e-3, label: "tf (m)", folder: "Columna" }, tw_col: { default: 0.014, min: 8e-3, max: 0.025, step: 1e-3, label: "tw (m)", folder: "Columna" }, L_col_stub: { default: 0.5, min: 0.3, max: 1, step: 0.05, label: "L col stub (m)", folder: "Columna" }, bolt_layout: { default: 4, label: "Disposici\xF3n pernos", options: { "4 (2\xD72)": 4, "6 (3\xD72)": 6, "8 (4\xD72)": 8, "9 (3\xD73)": 9 }, folder: "Pernos", regenOnChange: true }, d_bolt: { default: 0.024, min: 0.012, max: 0.05, step: 2e-3, label: "\xD8 perno (m)", folder: "Pernos" }, d_hole: { default: 0.036, min: 0.02, max: 0.08, step: 2e-3, label: "\xD8 orificio (m)", folder: "Pernos" }, edge_dist: { default: 0.07, min: 0.03, max: 0.2, step: 0.01, label: "Dist borde (m)", folder: "Pernos" }, L_bolt: { default: 0.3, min: 0.15, max: 0.6, step: 0.02, label: "L embebido (m)", folder: "Pernos" }, B_ped: { default: 0.8, min: 0.4, max: 1.8, step: 0.05, label: "B pedestal (m)", folder: "Pedestal" }, H_ped: { default: 0.8, min: 0.4, max: 1.8, step: 0.05, label: "H pedestal (m)", folder: "Pedestal" }, h_ped: { default: 0.5, min: 0.3, max: 1.5, step: 0.05, label: "h pedestal (m)", folder: "Pedestal" }, Fy_plate: { default: 25e4, min: 24e4, max: 45e4, step: 5e3, label: "Fy placa (kN/m\xB2)", folder: "Material" }, Fu_bolt: { default: 83e4, min: 6e5, max: 103e4, step: 1e4, label: "Fu perno A307/A449 (kN/m\xB2)", folder: "Material" }, E_steel: { default: 2e8, min: 19e7, max: 21e7, step: 1e6, label: "E (kN/m\xB2)", folder: "Material" }, fc: { default: 28e3, min: 17e3, max: 5e4, step: 1e3, label: "f'c pedestal (kN/m\xB2)", folder: "Material" }, Pu: { default: 800, min: 0, max: 5e3, step: 25, label: "Pu (compresi\xF3n)", folder: "Cargas", unitType: "force" }, Mu: { default: 80, min: 0, max: 800, step: 5, label: "Mu (momento)", folder: "Cargas", unitType: "moment" }, mesh_n: { default: 28, min: 14, max: 50, step: 2, label: "Divisiones por lado", folder: "Malla" } }, build(e, _) {
  const y = [], B = [], f = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), G = e.E_steel / 2.6, T = 77, r = (t, n, o) => (y.push([t, n, o]), y.length - 1), P = (t, n, o, s, c) => {
    B.push([t, n, o, s]);
    const a = B.length - 1;
    f.set(a, c), L.set(a, e.E_steel), C.set(a, 0.3), A.set(a, T), k.set(a, 0), H.set(a, 0), z.set(a, 0), I.set(a, 0), R.set(a, G);
  }, M = ((t) => {
    const n = e.edge_dist, o = e.B / 2 - n, s = e.H / 2 - n;
    return t === 4 ? [[-o, -s], [+o, -s], [+o, +s], [-o, +s]] : t === 6 ? [[-o, -s], [0, -s], [+o, -s], [-o, +s], [0, +s], [+o, +s]] : t === 8 ? [[-o, -s], [-o / 3, -s], [+o / 3, -s], [+o, -s], [-o, +s], [-o / 3, +s], [+o / 3, +s], [+o, +s]] : t === 9 ? [[-o, -s], [0, -s], [+o, -s], [-o, 0], [0, 0], [+o, 0], [-o, +s], [0, +s], [+o, +s]] : [[-o, -s], [+o, -s], [+o, +s], [-o, +s]];
  })(e.bolt_layout), i = e.d_hole / 2, b = Math.max(14, Math.round(e.mesh_n)), h = Math.max(14, Math.round(e.mesh_n)), O = e.B / b, N = e.H / h, l = [];
  for (let t = 0; t <= h; t++) {
    const n = [];
    for (let o = 0; o <= b; o++) {
      let s = -e.B / 2 + o * O, c = -e.H / 2 + t * N, a = false;
      for (const [$, F] of M) {
        const d = s - $, w = c - F, u = Math.sqrt(d * d + w * w);
        if (u < i * 0.35) {
          a = true;
          break;
        }
        if (u < i && u > 1e-9) {
          s = $ + d / u * i, c = F + w / u * i;
          break;
        }
      }
      a ? n.push(-1) : n.push(r(s, c, 0));
    }
    l.push(n);
  }
  for (let t = 0; t < h; t++) for (let n = 0; n < b; n++) {
    const o = l[t][n], s = l[t][n + 1], c = l[t + 1][n + 1], a = l[t + 1][n];
    if (o < 0 || s < 0 || c < 0 || a < 0) continue;
    const $ = -e.B / 2 + (n + 0.5) * O, F = -e.H / 2 + (t + 0.5) * N;
    let d = false;
    for (const [w, u] of M) if (Math.sqrt(($ - w) ** 2 + (F - u) ** 2) < i * 0.95) {
      d = true;
      break;
    }
    d || P(o, s, c, a, e.t_plate);
  }
  const x = e.t_plate;
  x + e.L_col_stub;
  const m = 5, S = [];
  for (let t = 0; t <= m; t++) {
    const n = x + t * e.L_col_stub / m;
    S.push([r(+e.d_col / 2, -e.bf_col / 2, n), r(+e.d_col / 2, +e.bf_col / 2, n)]);
  }
  for (let t = 0; t < m; t++) P(S[t][0], S[t][1], S[t + 1][1], S[t + 1][0], e.tf_col);
  const q = [];
  for (let t = 0; t <= m; t++) {
    const n = x + t * e.L_col_stub / m;
    q.push([r(-e.d_col / 2, -e.bf_col / 2, n), r(-e.d_col / 2, +e.bf_col / 2, n)]);
  }
  for (let t = 0; t < m; t++) P(q[t][0], q[t][1], q[t + 1][1], q[t + 1][0], e.tf_col);
  const v = [], J = 2;
  for (let t = 0; t <= m; t++) {
    const n = x + t * e.L_col_stub / m, o = [];
    for (let s = 0; s <= J; s++) {
      const c = -e.d_col / 2 + e.tf_col + (e.d_col - 2 * e.tf_col) * (s / J);
      o.push(r(c, 0, n));
    }
    v.push(o);
  }
  for (let t = 0; t < m; t++) for (let n = 0; n < J; n++) P(v[t][n], v[t][n + 1], v[t + 1][n + 1], v[t + 1][n], e.tw_col);
  const E = /* @__PURE__ */ new Map();
  for (let t = 0; t <= h; t++) {
    const n = l[t][0], o = l[t][b];
    n >= 0 && E.set(n, [true, true, true, true, true, true]), o >= 0 && E.set(o, [true, true, true, true, true, true]);
  }
  for (let t = 0; t <= b; t++) {
    const n = l[0][t], o = l[h][t];
    n >= 0 && E.set(n, [true, true, true, true, true, true]), o >= 0 && E.set(o, [true, true, true, true, true, true]);
  }
  const ne = /* @__PURE__ */ new Map();
  _.nodes.val = y, _.elements.val = B, _.nodeInputs.val = { supports: E, loads: ne }, _.elementInputs.val = { thicknesses: f, elasticities: L, poissonsRatios: C, densities: A, areas: k, momentsOfInertiaY: H, momentsOfInertiaZ: z, torsionalConstants: I, shearModuli: R }, _.deformOutputs.val = {}, _.analyzeOutputs.val = {};
  const p = [], K = new ee(e.B_ped, e.H_ped, e.h_ped), se = new D({ color: 12298888, transparent: true, opacity: 0.35, metalness: 0.1, roughness: 0.9 }), V = new g(K, se);
  V.position.set(0, 0, -e.h_ped / 2), p.push(V);
  const W = new ue(new _e(K), new fe({ color: 4473924 }));
  W.position.set(0, 0, -e.h_ped / 2), p.push(W);
  const ae = new D({ color: 8026746, metalness: 0.8, roughness: 0.3 }), le = new D({ color: 3355443, metalness: 0.8, roughness: 0.3 });
  for (const [t, n] of M) {
    const o = e.d_bolt * 1, s = e.L_bolt + e.t_plate + o + 0.015, c = new Y(e.d_bolt / 2, e.d_bolt / 2, s, 16), a = new g(c, ae);
    a.rotation.x = Math.PI / 2;
    const $ = -e.L_bolt + s / 2;
    a.position.set(t, n, $), p.push(a);
    const F = new Y(e.d_bolt * 0.9, e.d_bolt * 0.9, o, 6), d = new g(F, le);
    d.rotation.x = Math.PI / 2, d.position.set(t, n, e.t_plate + o / 2), p.push(d);
    const w = new Y(e.d_hole / 2 * 1.4, e.d_hole / 2 * 1.4, 4e-3, 20), u = new D({ color: 8947848, metalness: 0.6, roughness: 0.4 }), j = new g(w, u);
    j.rotation.x = Math.PI / 2, j.position.set(t, n, e.t_plate + 2e-3), p.push(j);
    const de = new be(i, i * 1.05, 32), me = new te({ color: 16776960, side: oe }), U = new g(de, me);
    U.position.set(t, n, e.t_plate + 5e-4), p.push(U);
  }
  const ce = Math.sqrt(e.B * e.H), Z = Math.min(ce + 2 * e.h_ped, Math.min(e.B_ped, e.H_ped)), re = new ee(Z, Z, 2e-3), ie = new te({ color: 16746496, transparent: true, opacity: 0.18, side: oe }), Q = new g(re, ie);
  Q.position.set(0, 0, -e.h_ped + 1e-3), p.push(Q), _.objects3D.val = p, console.log(`[Placa Base AISC \xA7J8] Shells=${B.length}, Nodos=${y.length}
  Placa ${e.B}\xD7${e.H}\xD7${e.t_plate}m, Pernos=${e.bolt_layout} \xD8${e.d_bolt * 1e3}mm
  Pedestal ${e.B_ped}\xD7${e.H_ped}\xD7${e.h_ped}m f'c=${e.fc / 1e3} MPa`);
}, computedLabels(e) {
  const f = e.B * e.H, L = Math.min(e.B_ped * e.H_ped, f * 4), C = Math.min(Math.sqrt(L / f), 2), A = 0.85 * e.fc * f * C, k = 0.65 * A, H = Math.max(0, (e.B - 0.95 * e.d_col) / 2), z = Math.max(0, (e.H - 0.8 * e.bf_col) / 2), I = Math.sqrt(e.d_col * e.bf_col) / 4, R = Math.max(H, z, I), G = e.Pu / f, T = R * Math.sqrt(2 * G / (0.9 * e.Fy_plate)), r = e.t_plate / T, P = e.Mu / Math.max(e.Pu, 1e-3), X = e.bolt_layout / 2, M = e.H / 2 - e.edge_dist, i = Math.max(0, (e.Mu - e.Pu * M) / (2 * M)), b = i / Math.max(X, 1), h = Math.PI * (e.d_bolt / 2) ** 2, N = 0.75 * (0.75 * e.Fu_bolt * h), l = e.Pu / k, x = b / N;
  return { "\u2500\u2500 Geometr\xEDa \u2500\u2500": "", "A1 (\xE1rea placa)": `${(f * 1e4).toFixed(0)} cm\xB2`, "A2 (\xE1rea pedestal)": `${(L * 1e4).toFixed(0)} cm\xB2`, "\u221A(A2/A1)": C.toFixed(2), "m (voladizo X)": `${(H * 1e3).toFixed(0)} mm`, "n (voladizo Y)": `${(z * 1e3).toFixed(0)} mm`, "\u03BBn' (Thornton)": `${(I * 1e3).toFixed(0)} mm`, "\u2113 cr\xEDtico": `${(R * 1e3).toFixed(0)} mm`, "\u2500\u2500 Aplastamiento concreto AISC \xA7J8 \u2500\u2500": "", "Pp (nominal)": `${A.toFixed(0)} kN`, "\u03C6Pp (dise\xF1o)": `${k.toFixed(0)} kN`, "Pu aplicado": `${e.Pu.toFixed(0)} kN`, "Ratio Pu/\u03C6Pp": `${l.toFixed(3)} ${l <= 1 ? "\u2713" : "\u2717"}`, "\u2500\u2500 Espesor placa AISC DG-1 \u2500\u2500": "", "f_p (presi\xF3n)": `${(G / 1e3).toFixed(0)} kPa (${(G / 1e3).toFixed(0)} kN/m\xB2)`, "t req.": `${(T * 1e3).toFixed(1)} mm`, "t dado": `${(e.t_plate * 1e3).toFixed(1)} mm`, "Ratio t/t_req": `${r.toFixed(2)} ${r >= 1 ? "\u2713" : "\u2717"}`, "\u2500\u2500 Pernos anclaje AISC \xA7J3 / ACI \xA717 \u2500\u2500": "", "e = Mu/Pu": `${(P * 1e3).toFixed(0)} mm`, "Brazo a pernos": `${(M * 1e3).toFixed(0)} mm`, "Tu total (tensi\xF3n neta)": `${i.toFixed(1)} kN`, "Tu por perno": `${b.toFixed(1)} kN`, A_perno: `${(h * 1e6).toFixed(1)} mm\xB2`, "\u03C6Rn perno": `${N.toFixed(1)} kN`, "Ratio Tu/\u03C6Rn": `${x.toFixed(3)} ${x <= 1 ? "\u2713" : "\u2717"}`, "\u2500\u2500 Dictamen \u2500\u2500": "", "Criterio global": `${l <= 1 && r >= 1 && x <= 1 ? "\u2713 OK" : "\u2717 REVISAR"}` };
} };
export {
  xe as p
};
