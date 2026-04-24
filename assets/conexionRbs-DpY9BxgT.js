import { a as dt } from "./analyze-ClLKGn9k.js";
import { d as ft, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { b as _t, m as ut, i as bt } from "./menegottoPinto-B-C2cxus.js";
import { s as He, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { L as O, B as D, a as L, p as Me, e as ge, c as N, V as B, b as he, d as ht, E as Mt, f as Ke, M as ee, T as We } from "./Text-Dh9LKuSL.js";
let Lt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  function gt(e) {
    var _a, _b;
    const n = e.nSteps ?? 10, l = e.maxIterPerStep ?? 8, d = e.softeningFactor, x = [], u = [], b = [], h = [], v = [];
    let w = -1, a = {}, s = {};
    for (let F = 1; F <= n; F++) {
      const p = F / n, S = e.buildLoads(p), z = {
        supports: e.supports,
        loads: S
      }, m = He({
        nodes: e.nodes,
        elements: e.elements,
        nodeInputs: z,
        elementInputs: e.elementInputs,
        Fy: e.Fy,
        maxIter: l,
        tol: 0.03,
        softeningFactor: d
      }), M = (_a = m.deformOutputs) == null ? void 0 : _a.deformations;
      let C = 0;
      if (M) {
        const $ = M.get(e.trackNode);
        $ && (C = Math.abs($[e.trackDof] ?? 0));
      }
      let c = 0;
      const g = (_b = m.analyzeOutputs) == null ? void 0 : _b.vonMises;
      if (g) for (const $ of g.values()) for (const f of $) {
        const I = Math.abs(f);
        I > c && (c = I);
      }
      x.push(p), u.push(C), b.push(c), h.push(m.elementsYielded), v.push(m.converged), w < 0 && m.elementsYielded > 0 && (w = F - 1), a = m.deformOutputs, s = m.analyzeOutputs;
    }
    const i = u[0] > 1e-12 ? x[0] / u[0] : 0;
    return {
      lambdas: x,
      displacements: u,
      vonMisesMax: b,
      elementsYielded: h,
      firstYieldStep: w,
      finalDeformOutputs: a,
      finalAnalyzeOutputs: s,
      ultimateLoadFactor: x[x.length - 1] ?? 0,
      elasticStiffness: i,
      converged: v
    };
  }
  function wt(e) {
    const n = e.size ?? 1.5, l = [], d = e.lambdas.length;
    if (d === 0) return l;
    const x = Math.max(...e.displacements, 1e-9), u = Math.max(...e.lambdas, 1e-9), b = e.displacements.map((c) => c / x * n), h = e.lambdas.map((c) => c / u * n), [v, w, a] = e.center, s = (c, g) => new B(v + c, w, a + g), i = new O({
      color: 11184810
    }), F = new D().setFromPoints([
      s(0, 0),
      s(n * 1.05, 0)
    ]), p = new D().setFromPoints([
      s(0, 0),
      s(0, n * 1.05)
    ]);
    l.push(new L(F, i)), l.push(new L(p, i));
    const S = new O({
      color: 5592405,
      transparent: true,
      opacity: 0.4
    });
    for (let c = 1; c <= 5; c++) {
      const g = c / 5 * n, $ = new D().setFromPoints([
        s(0, g),
        s(n, g)
      ]);
      l.push(new L($, S));
    }
    const z = new O({
      color: 65484,
      linewidth: 3
    }), m = [
      s(0, 0)
    ];
    for (let c = 0; c < d; c++) m.push(s(b[c], h[c]));
    const M = new D().setFromPoints(m);
    l.push(new L(M, z));
    const C = new Me(n * 0.015, 8, 6);
    for (let c = 0; c < d; c++) {
      const $ = c === e.firstYieldStep ? 16776960 : 65484, f = new ge({
        color: $
      }), I = new N(C, f);
      I.position.copy(s(b[c], h[c])), l.push(I);
    }
    if (e.firstYieldStep >= 0) {
      const c = e.firstYieldStep, g = s(b[c], h[c]), $ = new O({
        color: 16711680
      }), f = n * 0.04, I = new D().setFromPoints([
        g.clone().add(new B(-f, 0, -f)),
        g.clone().add(new B(+f, 0, +f))
      ]), ie = new D().setFromPoints([
        g.clone().add(new B(-f, 0, +f)),
        g.clone().add(new B(+f, 0, -f))
      ]);
      l.push(new L(I, $)), l.push(new L(ie, $));
    }
    return l;
  }
  function xt(e) {
    const n = /* @__PURE__ */ new Map(), l = e.weld_tol ?? e.tf_beam * 1.5;
    for (let d = 0; d < e.elements.length; d++) {
      const x = e.elements[d];
      let u = 0, b = 0, h = 0;
      for (const g of x) u += e.nodes[g][0], b += e.nodes[g][1], h += e.nodes[g][2];
      u /= x.length, b /= x.length, h /= x.length;
      const v = Math.abs(u), w = Math.abs(b), a = Math.abs(h), s = Math.abs(u - (e.d_col / 2 - e.tf_col / 2)) < l, i = Math.abs(u - (-e.d_col / 2 + e.tf_col / 2)) < l, F = w < 1e-3 && v <= e.d_col / 2 && a <= e.d_col, p = u > e.x_col_face - l, S = p && Math.abs(h - (e.d_beam / 2 - e.tf_beam / 2)) < l, z = p && Math.abs(h - (-e.d_beam / 2 + e.tf_beam / 2)) < l, m = p && w < 1e-3 && a < e.d_beam / 2 - e.tf_beam / 2, M = p && u < e.x_col_face + l * 2, C = u >= e.x_rbs_start && u <= e.x_rbs_end;
      let c = "other";
      M && (S || z || m) ? c = "weld_zone" : S && C ? c = "RBS_top" : z && C ? c = "RBS_bot" : S ? c = "beam_flange_top" : z ? c = "beam_flange_bot" : m ? c = "beam_web" : s ? c = "col_flange_front" : i ? c = "col_flange_back" : F && (c = "col_web"), n.set(d, c);
    }
    return n;
  }
  const pt = {
    RBS_top: "RBS \u2014 pat\xEDn sup.",
    RBS_bot: "RBS \u2014 pat\xEDn inf.",
    beam_flange_top: "Viga \u2014 pat\xEDn sup.",
    beam_flange_bot: "Viga \u2014 pat\xEDn inf.",
    beam_web: "Viga \u2014 alma",
    col_flange_front: "Columna \u2014 pat\xEDn frontal",
    col_flange_back: "Columna \u2014 pat\xEDn trasero",
    col_web: "Columna \u2014 alma",
    weld_zone: "Zona soldadura",
    plate_body: "Cuerpo placa",
    plate_around_bolt: "Placa alrededor del perno",
    other: "Otros"
  };
  function yt(e, n, l) {
    const d = /* @__PURE__ */ new Map();
    for (const [u, b] of e.entries()) {
      const h = n.get(u);
      if (!h || h.length === 0) continue;
      let v = 0;
      for (const a of h) {
        const s = Math.abs(a);
        s > v && (v = s);
      }
      let w = d.get(b);
      w || (w = {
        vmValues: [],
        count: 0
      }, d.set(b, w)), w.vmValues.push(v), w.count++;
    }
    const x = [];
    for (const [u, b] of d.entries()) {
      if (b.vmValues.length === 0) continue;
      const h = Math.max(...b.vmValues), v = b.vmValues.reduce((i, F) => i + F, 0) / b.vmValues.length, w = h / l;
      let a = "green", s = "\u{1F7E2}";
      w > 1 ? (a = "red", s = "\u{1F534}") : w > 0.8 && (a = "yellow", s = "\u{1F7E1}"), x.push({
        zone: u,
        label: pt[u],
        nElements: b.count,
        maxVm: h,
        meanVm: v,
        ratio: w,
        status: a,
        statusIcon: s
      });
    }
    return x.sort((u, b) => b.ratio - u.ratio), x;
  }
  function vt(e) {
    return e.length > 0 ? e[0] : null;
  }
  function Ft(e) {
    return e ? e.ratio < 0.5 ? "Sin esfuerzo significativo (aument\xE1 carga)" : e.ratio < 0.8 ? "Rango el\xE1stico seguro" : e.ratio < 1 ? `Cerca del l\xEDmite \u2014 governing: ${e.label}` : e.ratio < 1.5 ? `\u26A0 Fluencia en: ${e.label}` : `\u2717 COLAPSO en: ${e.label} (\u03C3=${e.ratio.toFixed(1)}\xD7Fy)` : "\u2014";
  }
  function St(e, n, l, d) {
    if (!d) return [];
    let x = 1 / 0, u = 1 / 0, b = 1 / 0, h = -1 / 0, v = -1 / 0, w = -1 / 0, a = 0;
    for (const [z, m] of l.entries()) {
      if (m !== d) continue;
      const M = n[z];
      for (const C of M) {
        const [c, g, $] = e[C];
        c < x && (x = c), g < u && (u = g), $ < b && (b = $), c > h && (h = c), g > v && (v = g), $ > w && (w = $);
      }
      a++;
    }
    if (a === 0) return [];
    const s = 0.015;
    x -= s, u -= s, b -= s, h += s, v += s, w += s;
    const i = new he(h - x, v - u, w - b), F = new ge({
      color: 16711748,
      transparent: true,
      opacity: 0.15,
      wireframe: false
    }), p = new N(i, F);
    p.position.set((x + h) / 2, (u + v) / 2, (b + w) / 2);
    const S = new ht(new Mt(i), new O({
      color: 16711748,
      linewidth: 2
    }));
    return S.position.copy(p.position), [
      p,
      S
    ];
  }
  function zt(e) {
    const n = [], l = e.theta.length;
    if (l < 2) return {
      objects: n,
      moveCursor: () => {
      },
      setProgress: () => {
      }
    };
    const d = e.size, x = Math.max(...e.theta.map((f) => Math.abs(f)), 1e-9), u = Math.max(...e.M.map((f) => Math.abs(f)), 1e-9), b = e.theta.map((f) => f / x * (d / 2)), h = e.M.map((f) => f / u * (d / 2)), [v, w, a] = e.center, s = (f, I) => new B(v + f, w, a + I), i = d / 2, F = new O({
      color: 6710886
    });
    n.push(new L(new D().setFromPoints([
      s(-i, -i),
      s(+i, -i),
      s(+i, +i),
      s(-i, +i),
      s(-i, -i)
    ]), F));
    const p = new O({
      color: 11184810
    });
    n.push(new L(new D().setFromPoints([
      s(-i, 0),
      s(+i, 0)
    ]), p)), n.push(new L(new D().setFromPoints([
      s(0, -i),
      s(0, +i)
    ]), p));
    const S = 0.8 * e.Mp / u * (d / 2);
    if (Math.abs(S) <= i) {
      const f = new O({
        color: 65280
      });
      n.push(new L(new D().setFromPoints([
        s(-i, +S),
        s(+i, +S)
      ]), f)), n.push(new L(new D().setFromPoints([
        s(-i, -S),
        s(+i, -S)
      ]), f));
    }
    const z = e.targetDrift / x * (d / 2);
    if (Math.abs(z) <= i) {
      const f = new O({
        color: 16746496,
        transparent: true,
        opacity: 0.6
      });
      n.push(new L(new D().setFromPoints([
        s(+z, -i),
        s(+z, +i)
      ]), f)), n.push(new L(new D().setFromPoints([
        s(-z, -i),
        s(-z, +i)
      ]), f));
    }
    const m = new Float32Array(l * 3);
    for (let f = 0; f < l; f++) {
      const I = s(b[f], h[f]);
      m[f * 3 + 0] = I.x, m[f * 3 + 1] = I.y, m[f * 3 + 2] = I.z;
    }
    const M = new D();
    M.setAttribute("position", new Ke(m, 3)), M.setDrawRange(0, l);
    const C = new O({
      color: 65484,
      linewidth: 3
    }), c = new L(M, C);
    n.push(c);
    const g = new ge({
      color: 16711748
    }), $ = new N(new Me(d * 0.025, 12, 8), g);
    return $.position.copy(s(b[0], h[0])), n.push($), {
      objects: n,
      moveCursor: (f) => {
        const I = Math.max(0, Math.min(l - 1, f));
        $.position.copy(s(b[I], h[I]));
      },
      setProgress: (f) => {
        const I = Math.max(1, Math.min(l, f + 1));
        M.setDrawRange(0, I);
      }
    };
  }
  function $t(e) {
    const n = [], l = e.drifts.length;
    if (l < 2) return {
      objects: n,
      moveCursor: () => {
      },
      setProgress: () => {
      }
    };
    const d = e.size, x = Math.max(...e.drifts.map((m) => Math.abs(m)), 1e-9), u = e.drifts.map((m, M) => M / (l - 1) * d), b = e.drifts.map((m) => m / x * (d / 2)), [h, v, w] = e.center, a = (m, M) => new B(h + m, v, w + M), s = d / 2;
    n.push(new L(new D().setFromPoints([
      a(0, -s),
      a(d, -s),
      a(d, +s),
      a(0, +s),
      a(0, -s)
    ]), new O({
      color: 6710886
    }))), n.push(new L(new D().setFromPoints([
      a(0, 0),
      a(d, 0)
    ]), new O({
      color: 11184810
    })));
    const i = new Float32Array(l * 3);
    for (let m = 0; m < l; m++) {
      const M = a(u[m], b[m]);
      i[m * 3 + 0] = M.x, i[m * 3 + 1] = M.y, i[m * 3 + 2] = M.z;
    }
    const F = new D();
    F.setAttribute("position", new Ke(i, 3)), F.setDrawRange(0, l);
    const p = new L(F, new O({
      color: 16755200,
      linewidth: 2
    }));
    n.push(p);
    const S = new ge({
      color: 16711748
    }), z = new N(new Me(d * 0.022, 12, 8), S);
    return z.position.copy(a(u[0], b[0])), n.push(z), {
      objects: n,
      moveCursor: (m) => {
        const M = Math.max(0, Math.min(l - 1, m));
        z.position.copy(a(u[M], b[M]));
      },
      setProgress: (m) => {
        const M = Math.max(1, Math.min(l, m + 1));
        F.setDrawRange(0, M);
      }
    };
  }
  Lt = {
    id: "conexion-rbs",
    name: "Conexi\xF3n RBS (AISC 358-22 \xB7 Protocolo K3)",
    category: "Conexiones",
    hasModal: false,
    defaultShellResult: "vonMises",
    availableShellResults: [
      "vonMises",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "bendingXX",
      "bendingYY",
      "displacementZ"
    ],
    params: {
      d_beam: {
        default: 0.6,
        min: 0.3,
        max: 1,
        step: 0.02,
        label: "d viga (m)",
        folder: "Viga"
      },
      bf_beam: {
        default: 0.22,
        min: 0.12,
        max: 0.4,
        step: 0.01,
        label: "bf pat\xEDn viga (m)",
        folder: "Viga"
      },
      tf_beam: {
        default: 0.02,
        min: 0.01,
        max: 0.04,
        step: 2e-3,
        label: "tf pat\xEDn viga (m)",
        folder: "Viga"
      },
      tw_beam: {
        default: 0.012,
        min: 6e-3,
        max: 0.025,
        step: 1e-3,
        label: "tw alma viga (m)",
        folder: "Viga"
      },
      L_beam: {
        default: 3.5,
        min: 2,
        max: 6,
        step: 0.1,
        label: "L viga (m)",
        folder: "Viga"
      },
      d_col: {
        default: 0.42,
        min: 0.3,
        max: 0.7,
        step: 0.02,
        label: "d columna (m)",
        folder: "Columna"
      },
      bf_col: {
        default: 0.4,
        min: 0.25,
        max: 0.6,
        step: 0.01,
        label: "bf pat\xEDn col (m)",
        folder: "Columna"
      },
      tf_col: {
        default: 0.025,
        min: 0.012,
        max: 0.05,
        step: 2e-3,
        label: "tf pat\xEDn col (m)",
        folder: "Columna"
      },
      tw_col: {
        default: 0.018,
        min: 0.01,
        max: 0.035,
        step: 1e-3,
        label: "tw alma col (m)",
        folder: "Columna"
      },
      a_rbs: {
        default: 0.625,
        min: 0.5,
        max: 0.75,
        step: 0.025,
        label: "a/bf",
        folder: "RBS"
      },
      b_rbs: {
        default: 0.75,
        min: 0.65,
        max: 0.85,
        step: 0.025,
        label: "b/d",
        folder: "RBS"
      },
      c_rbs: {
        default: 0.25,
        min: 0.2,
        max: 0.25,
        step: 0.025,
        label: "c/bf (reducci\xF3n)",
        folder: "RBS"
      },
      Fy: {
        default: 345e3,
        min: 25e4,
        max: 45e4,
        step: 5e3,
        label: "Fy (kN/m\xB2)",
        folder: "Material"
      },
      E_steel: {
        default: 2e8,
        min: 19e7,
        max: 21e7,
        step: 1e6,
        label: "E (kN/m\xB2)",
        folder: "Material"
      },
      b_hard: {
        default: 0.01,
        min: 5e-3,
        max: 0.05,
        step: 5e-3,
        label: "b strain hardening",
        folder: "Material"
      },
      weld_type: {
        default: 0,
        label: "Tipo soldadura",
        options: {
          "CJP (penetraci\xF3n completa)": 0,
          "PJP (parcial)": 1,
          Filete: 2
        },
        folder: "Soldadura"
      },
      electrode_Fexx: {
        default: 48e4,
        label: "Electrodo Fexx (kN/m\xB2)",
        options: {
          "E60XX (414 MPa)": 414e3,
          "E70XX (483 MPa)": 483e3,
          "E80XX (552 MPa)": 552e3
        },
        folder: "Soldadura"
      },
      weld_throat: {
        default: 8e-3,
        min: 4e-3,
        max: 0.02,
        step: 1e-3,
        label: "Garganta tw (m, filete/PJP)",
        folder: "Soldadura"
      },
      weld_access_hole: {
        default: 1,
        label: "Weld access hole",
        options: {
          No: 0,
          "S\xED (AWS D1.8)": 1
        },
        folder: "Soldadura"
      },
      classification: {
        default: 1,
        label: "Clasificaci\xF3n sismo",
        options: {
          "IMF (0.02 rad)": 0,
          "SMF (0.04 rad)": 1,
          "Extendido (0.06 rad)": 2
        },
        folder: "Ensayo K3"
      },
      story_h: {
        default: 3.66,
        min: 2.5,
        max: 5,
        step: 0.1,
        label: "h piso (m)",
        folder: "Ensayo K3"
      },
      steps_per_cycle: {
        default: 40,
        min: 20,
        max: 100,
        step: 10,
        label: "Steps/ciclo",
        folder: "Ensayo K3"
      },
      mesh_density: {
        default: 3,
        min: 1,
        max: 5,
        step: 1,
        label: "Densidad malla",
        folder: "Malla"
      },
      use_nonlinear: {
        default: 2,
        label: "Solver",
        options: {
          "Lineal (el\xE1stico)": 0,
          "No-lineal J2 secante": 1,
          "IDEA StatiCa (pushover)": 2
        },
        folder: "Solver"
      },
      nl_max_iter: {
        default: 10,
        min: 3,
        max: 25,
        step: 1,
        label: "Max iter NL",
        folder: "Solver"
      },
      load_factor: {
        default: 0.5,
        min: 0.02,
        max: 0.8,
        step: 0.02,
        label: "Factor carga (\xD7Mp)",
        folder: "Solver"
      },
      idea_steps: {
        default: 12,
        min: 4,
        max: 30,
        step: 1,
        label: "N pasos pushover",
        folder: "Solver"
      },
      animate_k3: {
        default: 0,
        label: "Animaci\xF3n K3",
        options: {
          Off: 0,
          "On (40 Hz)": 1,
          "On (lenta 10 Hz)": 2
        },
        folder: "Solver"
      },
      anim_amp: {
        default: 30,
        min: 5,
        max: 120,
        step: 5,
        label: "Amplificaci\xF3n visual",
        folder: "Solver"
      },
      colormap_mode: {
        default: 0,
        label: "Colormap",
        options: {
          "\u03C3vm por shell (FEM cl\xE1sico)": 0,
          "Utilization por componente (IDEA)": 1
        },
        folder: "Solver"
      }
    },
    build(e, n) {
      var _a;
      const l = [], d = [], x = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), F = e.E_steel / 2.6, p = 77, S = 1e-4, z = /* @__PURE__ */ new Map(), m = (t, o, r) => {
        const _ = Math.round(t / S), y = Math.round(o / S), R = Math.round(r / S), A = `${_},${y},${R}`;
        let P = z.get(A);
        return P === void 0 && (l.push([
          t,
          o,
          r
        ]), P = l.length - 1, z.set(A, P)), P;
      }, M = (t, o, r, _, y) => {
        d.push([
          t,
          o,
          r,
          _
        ]);
        const R = d.length - 1;
        x.set(R, y), u.set(R, e.E_steel), b.set(R, 0.3), h.set(R, p), v.set(R, 0), w.set(R, 0), a.set(R, 0), s.set(R, 0), i.set(R, F);
      }, C = e.story_h, c = Math.max(1, Math.round(e.mesh_density)), g = 6 * c, $ = 2 * c, f = c + 1, I = +e.d_col / 2 - e.tf_col / 2, ie = -e.d_col / 2 + e.tf_col / 2, Se = ie, Ze = I, te = [];
      for (let t = 0; t <= g; t++) {
        const o = -C / 2 + t * C / g, r = [];
        for (let _ = 0; _ <= $; _++) {
          const y = -e.bf_col / 2 + _ * e.bf_col / $;
          r.push(m(I, y, o));
        }
        te.push(r);
      }
      for (let t = 0; t < g; t++) for (let o = 0; o < $; o++) M(te[t][o], te[t][o + 1], te[t + 1][o + 1], te[t + 1][o], e.tf_col);
      const oe = [];
      for (let t = 0; t <= g; t++) {
        const o = -C / 2 + t * C / g, r = [];
        for (let _ = 0; _ <= $; _++) {
          const y = -e.bf_col / 2 + _ * e.bf_col / $;
          r.push(m(ie, y, o));
        }
        oe.push(r);
      }
      for (let t = 0; t < g; t++) for (let o = 0; o < $; o++) M(oe[t][o], oe[t][o + 1], oe[t + 1][o + 1], oe[t + 1][o], e.tf_col);
      const ne = [];
      for (let t = 0; t <= g; t++) {
        const o = -C / 2 + t * C / g, r = [];
        for (let _ = 0; _ <= f; _++) {
          const y = Se + (Ze - Se) * (_ / f);
          r.push(m(y, 0, o));
        }
        ne.push(r);
      }
      for (let t = 0; t < g; t++) for (let o = 0; o < f; o++) M(ne[t][o], ne[t][o + 1], ne[t + 1][o + 1], ne[t + 1][o], e.tw_col);
      const E = e.d_col / 2, T = e.a_rbs * e.bf_beam, j = T + e.b_rbs * e.d_beam, ze = (T + j) / 2, me = e.c_rbs * e.bf_beam, $e = e.b_rbs * e.d_beam, we = (4 * me * me + $e * $e) / (8 * me), Ce = (t) => {
        if (t < T || t > j) return e.bf_beam;
        const o = t - ze, r = Math.sqrt(Math.max(0, we * we - o * o)) - (we - me);
        return e.bf_beam - 2 * Math.max(0, r);
      }, J = [
        0
      ], Re = 2 * c;
      for (let t = 1; t <= Re; t++) J.push(T * t / Re);
      const Ie = 8 * c + 4;
      for (let t = 1; t < Ie; t++) J.push(T + (j - T) * t / Ie);
      J.push(j);
      const Pe = 5 * c;
      for (let t = 1; t <= Pe; t++) J.push(j + (e.L_beam - j) * t / Pe);
      J.sort((t, o) => t - o);
      const K = [];
      for (const t of J) (K.length === 0 || K[K.length - 1] < t - 1e-6) && K.push(t);
      const Ae = +e.d_beam / 2 - e.tf_beam / 2, xe = -e.d_beam / 2 + e.tf_beam / 2, V = [], q = [], U = [], W = 2 * c, de = 2 * c;
      for (const t of K) {
        const o = Ce(t), r = E + t, _ = [], y = [];
        for (let A = 0; A <= W; A++) {
          const P = -o / 2 + A * o / W;
          _.push(m(r, P, Ae)), y.push(m(r, P, xe));
        }
        V.push(_), q.push(y);
        const R = [];
        for (let A = 0; A <= de; A++) {
          const P = xe + (Ae - xe) * (A / de);
          R.push(m(r, 0, P));
        }
        U.push(R);
      }
      for (let t = 0; t < K.length - 1; t++) {
        for (let o = 0; o < W; o++) M(V[t][o], V[t][o + 1], V[t + 1][o + 1], V[t + 1][o], e.tf_beam), M(q[t][o], q[t][o + 1], q[t + 1][o + 1], q[t + 1][o], e.tf_beam);
        for (let o = 0; o < de; o++) M(U[t][o], U[t][o + 1], U[t + 1][o + 1], U[t + 1][o], e.tw_beam);
      }
      const X = /* @__PURE__ */ new Map(), pe = 0;
      for (let t = 0; t <= W; t++) X.set(V[pe][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), X.set(q[pe][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t <= de; t++) X.set(U[pe][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t < l.length; t++) {
        const o = l[t][2], r = Math.abs(l[t][0]) > e.d_col / 2 - 1e-4 - 1e-6 || Math.abs(l[t][1]) < 1e-6;
        Math.abs(Math.abs(o) - C / 2) < 1e-4 && r && l[t][0] <= e.d_col / 2 + 1e-4 && (X.has(t) || X.set(t, [
          true,
          true,
          true,
          true,
          true,
          true
        ]));
      }
      const Je = e.bf_beam * (1 - 2 * e.c_rbs) * e.tf_beam * (e.d_beam - e.tf_beam), qe = e.Fy * Je, Ue = e.L_beam - e.a_rbs * e.bf_beam - e.b_rbs * e.d_beam / 2, De = e.load_factor * qe / Math.max(Ue, 0.5), fe = /* @__PURE__ */ new Map(), ye = K.length - 1, Qe = De / (W + 1);
      for (let t = 0; t <= W; t++) fe.set(V[ye][t], [
        0,
        0,
        -Qe,
        0,
        0,
        0
      ]);
      n.nodes.val = l, n.elements.val = d, n.nodeInputs.val = {
        supports: X,
        loads: fe
      }, n.elementInputs.val = {
        thicknesses: x,
        elasticities: u,
        poissonsRatios: b,
        densities: h,
        areas: v,
        momentsOfInertiaY: w,
        momentsOfInertiaZ: a,
        torsionalConstants: s,
        shearModuli: i
      };
      try {
        const t = Math.round(e.use_nonlinear);
        if (t === 2) {
          const o = V[ye][0], r = gt({
            nodes: l,
            elements: d,
            supports: X,
            elementInputs: n.elementInputs.val,
            buildLoads: (A) => {
              const P = /* @__PURE__ */ new Map(), Y = De * A / (W + 1);
              for (let H = 0; H <= W; H++) P.set(V[ye][H], [
                0,
                0,
                -Y,
                0,
                0,
                0
              ]);
              return P;
            },
            Fy: e.Fy,
            trackNode: o,
            trackDof: 2,
            nSteps: Math.round(e.idea_steps),
            maxIterPerStep: Math.round(e.nl_max_iter),
            softeningFactor: 0.9
          });
          n.deformOutputs.val = r.finalDeformOutputs;
          const _ = r.finalAnalyzeOutputs;
          _.colorMapRanges = {
            ..._.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = _, n.__ideaInfo = r, n.__nlInfo = null;
          const y = [
            E + e.L_beam * 0.55,
            -e.bf_beam * 2.5,
            0
          ], R = wt({
            lambdas: r.lambdas,
            displacements: r.displacements,
            firstYieldStep: r.firstYieldStep,
            center: y,
            size: Math.max(e.L_beam * 0.4, 1),
            plane: "xz"
          });
          n.objects3D.val = [
            ...n.objects3D.val,
            ...R
          ], console.log(`[conexion-rbs IDEA] ${r.lambdas.length} pasos | \u03BB_max=${r.ultimateLoadFactor.toFixed(2)} | \u03B4_max=${(r.displacements[r.displacements.length - 1] * 1e3).toFixed(2)}mm | 1er yield en paso ${r.firstYieldStep + 1}/${r.lambdas.length} | k_el\xE1stica=${r.elasticStiffness.toFixed(1)}`);
        } else if (t === 1) {
          const o = He({
            nodes: l,
            elements: d,
            nodeInputs: {
              supports: X,
              loads: fe
            },
            elementInputs: n.elementInputs.val,
            Fy: e.Fy,
            maxIter: Math.round(e.nl_max_iter),
            tol: 0.03,
            softeningFactor: 0.9
          });
          n.deformOutputs.val = o.deformOutputs;
          const r = o.analyzeOutputs;
          r.colorMapRanges = {
            ...r.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = r, n.__nlInfo = {
            iterations: o.iterations,
            converged: o.converged,
            elementsYielded: o.elementsYielded,
            maxRatio: o.maxRatio
          }, n.__ideaInfo = null;
        } else {
          const o = ft(l, d, {
            supports: X,
            loads: fe
          }, n.elementInputs.val);
          n.deformOutputs.val = o;
          const r = dt(l, d, n.elementInputs.val, o);
          r.colorMapRanges = {
            ...r.colorMapRanges,
            vonMises: [
              0,
              e.Fy
            ]
          }, n.analyzeOutputs.val = r, n.__nlInfo = null, n.__ideaInfo = null;
        }
      } catch (t) {
        console.error("[conexion-rbs] solver error:", (t == null ? void 0 : t.message) || t, t), n.deformOutputs.val = {}, n.analyzeOutputs.val = {};
      }
      try {
        const t = xt({
          nodes: l,
          elements: d,
          x_col_face: E,
          d_col: e.d_col,
          bf_col: e.bf_col,
          tf_col: e.tf_col,
          d_beam: e.d_beam,
          bf_beam: e.bf_beam,
          tf_beam: e.tf_beam,
          x_rbs_start: E + T,
          x_rbs_end: E + j,
          weld_tol: e.tf_beam * 1.5
        }), o = (_a = n.analyzeOutputs.val) == null ? void 0 : _a.vonMises;
        if (o) {
          const r = yt(t, o, e.Fy), _ = vt(r), y = Ft(_);
          if (n.__componentRatios = r, n.__governingComponent = _, n.__failureMode = y, e.colormap_mode > 0.5) {
            const A = /* @__PURE__ */ new Map();
            for (const Y of r) A.set(Y.zone, Y.ratio);
            const P = /* @__PURE__ */ new Map();
            for (let Y = 0; Y < d.length; Y++) {
              const H = t.get(Y), be = H ? A.get(H) ?? 0 : 0, Z = d[Y].length, mt = new Array(Z).fill(be * e.Fy);
              P.set(Y, mt);
            }
            n.analyzeOutputs.val.vonMises = P, n.analyzeOutputs.val.colorMapRanges = {
              ...n.analyzeOutputs.val.colorMapRanges,
              vonMises: [
                0,
                e.Fy
              ]
            };
          }
          const R = St(l, d, t, (_ == null ? void 0 : _.zone) ?? null);
          n.objects3D.val = [
            ...n.objects3D.val,
            ...R
          ];
        }
      } catch (t) {
        console.warn("[conexion-rbs] component analysis skipped:", (t == null ? void 0 : t.message) || t);
      }
      const G = [], Le = E + ze, Oe = Math.min(e.bf_beam, e.d_beam) * 0.28, et = new Me(Oe, 20, 16), tt = new ee({
        color: 16720384,
        emissive: 6689024,
        metalness: 0.2,
        roughness: 0.5,
        transparent: true,
        opacity: 0.85
      }), Ee = new N(et, tt);
      Ee.position.set(Le, 0, 0), G.push(Ee);
      const ot = new We(Oe * 1.25, 0.015, 12, 32), nt = new ee({
        color: 16755200,
        emissive: 4465152
      }), ve = new N(ot, nt);
      ve.position.set(Le, 0, 0), ve.rotation.y = Math.PI / 2, G.push(ve);
      const ke = e.weld_type < 0.5 ? 16755200 : e.weld_type < 1.5 ? 16742144 : 16733440, Q = e.weld_type < 0.5 ? e.tf_beam * 0.95 : e.weld_type < 1.5 ? e.tf_beam * 0.6 : e.weld_throat, Ye = (t) => {
        const o = new he(Q * 1.1, e.bf_beam, Q * 1.2), r = new ee({
          color: ke,
          emissive: 3346688,
          metalness: 0.7,
          roughness: 0.45
        }), _ = new N(o, r);
        return _.position.set(E - Q / 2, 0, t), _;
      };
      G.push(Ye(+e.d_beam / 2 - e.tf_beam / 2)), G.push(Ye(-e.d_beam / 2 + e.tf_beam / 2));
      const st = e.d_beam - 2 * e.tf_beam - (e.weld_access_hole > 0.5 ? 2 * (e.tf_beam * 1.5) : 0), at = new he(Q * 1.1, Q * 1.2, st), lt = new ee({
        color: ke,
        emissive: 3346688,
        metalness: 0.7,
        roughness: 0.45
      }), Be = new N(at, lt);
      if (Be.position.set(E - Q / 2, 0, 0), G.push(Be), e.weld_access_hole > 0.5) {
        const t = e.tf_beam * 1.2;
        for (const o of [
          +e.d_beam / 2 - e.tf_beam - t,
          -e.d_beam / 2 + e.tf_beam + t
        ]) {
          const r = new We(t, 3e-3, 10, 24), _ = new ee({
            color: 3355443,
            metalness: 0.5,
            roughness: 0.6
          }), y = new N(r, _);
          y.position.set(E + 2e-3, 0, o), y.rotation.y = Math.PI / 2, G.push(y);
        }
      }
      if (e.weld_type < 0.5) {
        const t = new he(0.025, e.bf_beam + 0.02, 0.01), o = new ee({
          color: 5588019,
          metalness: 0.3,
          roughness: 0.8
        });
        for (const r of [
          +e.d_beam / 2 - e.tf_beam / 2,
          -e.d_beam / 2 + e.tf_beam / 2
        ]) {
          const _ = new N(t, o), y = r > 0 ? -1 : 1;
          _.position.set(E - 0.015, 0, r + y * e.tf_beam * 0.7), G.push(_);
        }
      }
      const Ge = (t) => {
        const o = Ce(t), r = E + t, _ = [
          new B(r, -o / 2, +e.d_beam / 2 + 5e-3),
          new B(r, +o / 2, +e.d_beam / 2 + 5e-3),
          new B(r, +o / 2, -e.d_beam / 2 - 5e-3),
          new B(r, -o / 2, -e.d_beam / 2 - 5e-3),
          new B(r, -o / 2, +e.d_beam / 2 + 5e-3)
        ], y = new D().setFromPoints(_), R = new O({
          color: 16776960
        });
        return new L(y, R);
      };
      G.push(Ge(T)), G.push(Ge(j)), n.objects3D.val = G;
      const se = e.classification < 0.5 ? 0.02 : e.classification < 1.5 ? 0.04 : 0.06, rt = _t(e.story_h, Math.round(e.steps_per_cycle), se), ct = e.b_rbs * e.d_beam, it = e.d_beam / 2 / ct, Ne = {
        Fy: e.Fy,
        E: e.E_steel,
        b: e.b_hard,
        R0: 15,
        cR1: 0.925,
        cR2: 0.15
      }, Ve = e.bf_beam * (1 - 2 * e.c_rbs), Xe = Ve * e.tf_beam * (e.d_beam - e.tf_beam), _e = e.Fy * Xe, k = [], ae = [];
      let Fe = bt(Ne);
      for (const t of rt) {
        const o = t * it;
        Fe = ut(o, Fe, Ne), k.push(t), ae.push(Fe.sigma * Xe);
      }
      n.__rbsHistory = {
        theta: k,
        M: ae,
        Mp: _e,
        targetDrift: se,
        classification: e.classification < 0.5 ? "IMF" : e.classification < 1.5 ? "SMF" : "Extended"
      };
      const le = Math.max(e.L_beam * 0.6, 1.5), re = zt({
        theta: k,
        M: ae,
        Mp: _e,
        targetDrift: se,
        center: [
          E + e.L_beam + le * 0.7,
          0,
          0
        ],
        size: le
      }), ce = $t({
        drifts: k,
        center: [
          E + e.L_beam * 0.5 - le / 2,
          0,
          -e.story_h / 2 - le * 0.7
        ],
        size: le
      });
      n.objects3D.val = [
        ...n.objects3D.val,
        ...re.objects,
        ...ce.objects
      ], window.__rbsCharts = {
        hyst: re,
        prot: ce
      }, e.animate_k3 < 0.5 ? (re.setProgress(k.length - 1), ce.setProgress(k.length - 1), re.moveCursor(k.length - 1), ce.moveCursor(k.length - 1)) : (re.setProgress(0), ce.setProgress(0));
      const Te = window.__rbsK3Anim;
      if (Te && (clearInterval(Te), window.__rbsK3Anim = null), e.animate_k3 > 0.5) {
        const t = e.animate_k3 < 1.5 ? 25 : 100, o = Math.max(...k.map((R) => Math.abs(R))), r = e.anim_amp;
        let _ = 0;
        const y = window.__rbsCharts;
        setTimeout(() => {
          const A = (() => {
            const be = document.querySelectorAll("div");
            for (const Z of be) if (Z.__settings && Z.__ctx) return Z;
            return null;
          })();
          if (!A) return;
          const P = A.__settings, Y = A.__ctx;
          if (!(P == null ? void 0 : P.deformScale) || !(Y == null ? void 0 : Y.render)) return;
          P.deformedShape && (P.deformedShape.val = true);
          const H = setInterval(() => {
            var _a2;
            const Z = (k[_] ?? 0) / o * r;
            P.deformScale.val = Z, (y == null ? void 0 : y.hyst) && (y.hyst.moveCursor(_), y.hyst.setProgress(_)), (y == null ? void 0 : y.prot) && (y.prot.moveCursor(_), y.prot.setProgress(_)), (_a2 = Y.render) == null ? void 0 : _a2.call(Y), _ = (_ + 1) % k.length;
          }, t);
          window.__rbsK3Anim = H;
        }, 600);
      }
      let ue = 0;
      for (let t = 0; t < k.length; t++) Math.abs(k[t] - se) < 5e-3 && Math.abs(ae[t]) > Math.abs(ue) && (ue = ae[t]);
      const je = Math.abs(ue) / _e;
      console.log(`[RBS AISC 358-22] Shells=${d.length}, Nodos=${l.length}
  bf_rbs=${Ve.toFixed(3)}m, Mp_rbs=${_e.toFixed(1)} kN\xB7m
  M@${(se * 100).toFixed(1)}%=${ue.toFixed(1)} kN\xB7m \xB7 Ratio=${je.toFixed(3)} \u2192 ${je >= 0.8 ? "PASA" : "FALLA"}`);
    },
    computedLabels(e, n) {
      const l = n.__rbsHistory;
      if (!l) return {
        Status: "\u2014"
      };
      const d = e.bf_beam * (1 - 2 * e.c_rbs), x = d * e.tf_beam * (e.d_beam - e.tf_beam), u = l.Mp, b = l.targetDrift;
      let h = 0;
      for (const a of l.M) Math.abs(a) > Math.abs(h) && (h = a);
      let v = 0;
      for (let a = 0; a < l.theta.length; a++) Math.abs(l.theta[a] - b) < 5e-3 && Math.abs(l.M[a]) > Math.abs(v) && (v = l.M[a]);
      const w = Math.abs(v) / u;
      return {
        "\u2500\u2500 Geometr\xEDa RBS (AISC 358-22 \xA75) \u2500\u2500": "",
        "Clasificaci\xF3n ensayo": l.classification,
        "Target drift \u03B8": `${(b * 100).toFixed(1)} %`,
        "bf pat\xEDn original": `${(e.bf_beam * 1e3).toFixed(0)} mm`,
        "bf pat\xEDn reducido RBS": `${(d * 1e3).toFixed(0)} mm (-${(e.c_rbs * 100 * 2).toFixed(0)}%)`,
        "a (inicio dogbone)": `${(e.a_rbs * e.bf_beam * 1e3).toFixed(0)} mm desde cara col`,
        "b (long. dogbone)": `${(e.b_rbs * e.d_beam * 1e3).toFixed(0)} mm`,
        "c (corte m\xE1x c/lado)": `${(e.c_rbs * e.bf_beam * 1e3).toFixed(0)} mm`,
        Zx_rbs: `${(x * 1e6).toFixed(0)} cm\xB3`,
        Mp_rbs: `${u.toFixed(1)} kN\xB7m`,
        "\u2500\u2500 Protocolo AISC 341 K3 \u2500\u2500": "",
        "M_max en historia": `${Math.abs(h).toFixed(1)} kN\xB7m`,
        "M @ target drift": `${Math.abs(v).toFixed(1)} kN\xB7m`,
        "Ratio M/Mp @ target": `${w.toFixed(3)}`,
        "Criterio (\u2265 0.80)": `${w >= 0.8 ? "\u2713 PASA" : "\u2717 FALLA"} \u2014 ${l.classification}`,
        "Data points generados": `${l.theta.length}`,
        "\u2500\u2500 Soldadura AISC 360 \xA7J2 \u2500\u2500": "",
        ...(() => {
          const a = e.weld_type < 0.5 ? "CJP" : e.weld_type < 1.5 ? "PJP" : "Filete", s = e.weld_type < 0.5 ? e.tf_beam : e.weld_type < 1.5 ? e.tf_beam * 0.7 : e.weld_throat, i = e.electrode_Fexx, F = 0.75, p = e.bf_beam, S = s * p, z = e.weld_type < 0.5 ? e.Fy * e.bf_beam * e.tf_beam : 0.6 * i * S, m = F * z, C = 0.8 * u / Math.max(e.d_beam - e.tf_beam, 0.1), c = C / m, g = i < 44e4 ? "E60XX" : i < 52e4 ? "E70XX" : "E80XX";
          return {
            "Tipo soldadura": a,
            Electrodo: `${g} (Fexx=${(i / 1e3).toFixed(0)} MPa)`,
            "Garganta efectiva": `${(s * 1e3).toFixed(1)} mm`,
            "L cord\xF3n (pat\xEDn)": `${(p * 1e3).toFixed(0)} mm`,
            "Ae (pat\xEDn)": `${(S * 1e6).toFixed(0)} mm\xB2`,
            "Rn cord\xF3n (nominal)": `${z.toFixed(0)} kN`,
            "\u03C6Rn (dise\xF1o)": `${m.toFixed(0)} kN`,
            "F_demand en pat\xEDn (0.8Mp)": `${C.toFixed(0)} kN`,
            "Ratio F/\u03C6Rn": `${c.toFixed(3)} ${c <= 1 ? "\u2713" : "\u2717"}`,
            "Weld access hole": e.weld_access_hole > 0.5 ? "S\xED (AWS D1.8 \xA76.10)" : "No",
            "Dictamen soldadura": e.weld_type < 0.5 ? "CJP \u2713 Demand-critical (AISC 358 \xA73.7)" : c <= 1 ? "\u2713 OK" : "\u2717 REVISAR garganta / electrodo"
          };
        })(),
        ...(() => {
          const a = n.__componentRatios, s = n.__governingComponent, i = n.__failureMode;
          if (!a || a.length === 0) return {};
          const F = {
            "\u2500\u2500 Componentes (\u03C3vm/Fy) tipo IDEA StatiCa \u2500\u2500": ""
          };
          for (const p of a.slice(0, 8)) F[`${p.statusIcon} ${p.label}`] = `${(p.ratio * 100).toFixed(0)}% (${p.nElements} shells)`;
          return s && (F["\u{1F3AF} Componente gobernante"] = s.label), i && (F["\u{1F50E} Modo de falla estimado"] = i), F;
        })(),
        ...(() => {
          const a = n.__ideaInfo, s = n.__nlInfo;
          if (a) {
            const i = a.displacements[a.displacements.length - 1] ?? 0, F = a.lambdas[a.lambdas.length - 1] ?? 0, p = a.firstYieldStep >= 0 ? a.lambdas[a.firstYieldStep] : null, S = a.firstYieldStep >= 0 ? a.displacements[a.firstYieldStep] : null, z = Math.max(...a.vonMisesMax), m = a.elementsYielded[a.elementsYielded.length - 1] ?? 0, M = a.converged.every((C) => C);
            return {
              "\u2500\u2500 IDEA StatiCa (pushover incremental) \u2500\u2500": "",
              "Pasos ejecutados": `${a.lambdas.length}`,
              Convergencia: M ? "\u2713 todos los pasos" : "\u2717 alg\xFAn paso no convergi\xF3",
              "\u03BB inicio fluencia": p !== null ? `${(p * 100).toFixed(0)}% (paso ${a.firstYieldStep + 1})` : "no fluy\xF3",
              "\u03B4 @ 1er yield": S !== null ? `${(S * 1e3).toFixed(2)} mm` : "\u2014",
              "\u03BB final": `${(F * 100).toFixed(0)}%`,
              "\u03B4 final (tip)": `${(i * 1e3).toFixed(2)} mm`,
              "k el\xE1stica (\u03BB/\u03B4)": `${a.elasticStiffness.toFixed(2)} 1/m`,
              "\u03C3vm_max (todo el pushover)": `${(z / 1e3).toFixed(1)} MPa`,
              "\u03C3vm / Fy": `${(z / e.Fy).toFixed(2)}`,
              "Shells plastificados (final)": `${m}`,
              "Modo falla (estimado)": m > 0 ? "RBS (dogbone) \u2014 donde concentra plastificaci\xF3n" : "Rango el\xE1stico (aument\xE1 load_factor)"
            };
          }
          return s ? {
            "\u2500\u2500 Solver FEM shells (NO-LINEAL J2) \u2500\u2500": "",
            "Iteraciones NL": `${s.iterations}${s.converged ? " \u2713 convergi\xF3" : " \u2717 max-iter"}`,
            "Elementos plastificados": `${s.elementsYielded}`,
            "Max \u03C3/Fy (lineal inicial)": s.maxRatio.toFixed(2),
            Interpretaci\u00F3n: s.elementsYielded > 0 ? `${s.elementsYielded} shells fluyeron \u2192 redistribuci\xF3n` : "Rango el\xE1stico (sin plastificar)"
          } : {
            "\u2500\u2500 Solver FEM shells \u2500\u2500": "",
            Tipo: "Lineal el\xE1stico"
          };
        })()
      };
    }
  };
});
export {
  __tla,
  Lt as c
};
