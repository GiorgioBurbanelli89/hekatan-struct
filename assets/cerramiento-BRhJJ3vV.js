import { a as D } from "./analyze-DNPn2SjO.js";
import { m as K, d as B, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let Q;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let S, r;
  S = 98.0665;
  r = (e, t, l, n, i, a) => ({
    default: l,
    min: n,
    max: i,
    step: a,
    label: t,
    folder: e
  });
  Q = {
    id: "cerramiento",
    name: "Cerramiento (p\xF3rtico plano N vanos)",
    category: "\u{1F9F1} Construcci\xF3n",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    guide: [
      "Cambi\xE1 'N vanos' para agregar/quitar columnas \u2014 se regeneran los sliders de luces.",
      "Cada vano (L\u2081, L\u2082, \u2026) ajusta su luz independientemente.",
      "Columnas: hormig\xF3n 30\xD730 cm por defecto (b_col, h_col editables).",
      "E = factor\xB7\u221A(f'c) en kgf/cm\xB2. Factor=14100 (NEC Ecuador). f'c=210 kgf/cm\xB2 t\xEDpico.",
      "Empotrado en la base. La zapata se dise\xF1a aparte (pr\xF3ximo m\xF3dulo)."
    ],
    params: {
      nVanos: {
        ...r("Geometr\xEDa", "N vanos", 3, 1, 10, 1),
        regenOnChange: true
      },
      H: r("Geometr\xEDa", "Altura H (m)", 3, 2, 6, 0.1),
      nSubV: r("Geometr\xEDa", "Div. viga (por vano)", 2, 1, 6, 1),
      bCol: r("Secciones", "b columna (m)", 0.3, 0.2, 0.6, 0.05),
      hCol: r("Secciones", "h columna (m)", 0.3, 0.2, 0.6, 0.05),
      bViga: r("Secciones", "b viga (m)", 0.2, 0.15, 0.4, 0.05),
      hViga: r("Secciones", "h viga (m)", 0.3, 0.2, 0.6, 0.05),
      factorE: r("Materiales", "factor E (NEC=14100)", 14100, 8e3, 18e3, 100),
      fc_kgcm2: r("Materiales", "f'c (kgf/cm\xB2)", 210, 140, 420, 10),
      nu: r("Materiales", "\u03BD Poisson", 0.2, 0.15, 0.25, 0.01),
      rho: r("Materiales", "\u03B3 (kN/m\xB3)", 24, 20, 26, 0.5)
    },
    dynamicParams(e) {
      const t = {}, l = Math.max(1, Math.round(e.nVanos ?? 3));
      for (let n = 1; n <= l; n++) t[`L_v${n}`] = r("Luces de vano", `L vano ${n} (m)`, 4, 1, 12, 0.25);
      return t;
    },
    computedLabels(e) {
      const t = e.factorE * Math.sqrt(e.fc_kgcm2), n = t * S / 1e3;
      return {
        "E = factor\xB7\u221A(f'c)": `${e.factorE.toFixed(0)} \xB7 \u221A${e.fc_kgcm2.toFixed(0)} = ${t.toFixed(0)} kgf/cm\xB2`,
        "E (MPa)": `${n.toFixed(0)} MPa  (\u2248 ${(n / 1e3).toFixed(2)} GPa)`,
        "G = E/(2(1+\u03BD))": `${(t / (2 * (1 + e.nu))).toFixed(0)} kgf/cm\xB2`
      };
    },
    build(e, t) {
      const l = Math.max(1, Math.round(e.nVanos)), n = e.H, i = Math.max(1, Math.round(e.nSubV)), a = [
        0
      ];
      for (let o = 1; o <= l; o++) {
        const g = e[`L_v${o}`] ?? 4;
        a.push(a[a.length - 1] + g);
      }
      const s = [], m = [], u = [];
      for (let o = 0; o < a.length; o++) m.push(s.length), s.push([
        a[o],
        0,
        0
      ]), u.push(s.length), s.push([
        a[o],
        0,
        n
      ]);
      const c = [], h = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
      for (let o = 0; o < a.length; o++) h.add(c.length), c.push([
        m[o],
        u[o]
      ]);
      for (let o = 0; o < l; o++) {
        const g = a[o], R = a[o + 1];
        let C = u[o];
        for (let p = 1; p < i; p++) {
          const j = p / i, L = s.length;
          s.push([
            g + j * (R - g),
            0,
            n
          ]), d.add(c.length), c.push([
            C,
            L
          ]), C = L;
        }
        d.add(c.length), c.push([
          C,
          u[o + 1]
        ]);
      }
      const E = /* @__PURE__ */ new Map();
      for (const o of m) E.set(o, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const F = /* @__PURE__ */ new Map(), x = e.factorE * Math.sqrt(e.fc_kgcm2) * S, I = e.nu, z = x / (2 * (1 + I)), N = e.rho, y = e.bCol * e.hCol, G = e.bCol * e.hCol ** 3 / 12, H = e.hCol * e.bCol ** 3 / 12, O = 0.14 * Math.pow(Math.min(e.bCol, e.hCol), 4), P = e.bViga * e.hViga, q = e.bViga * e.hViga ** 3 / 12, A = e.hViga * e.bViga ** 3 / 12, J = 0.14 * Math.pow(Math.min(e.bViga, e.hViga), 4), _ = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
      for (let o = 0; o < c.length; o++) _.set(o, x), $.set(o, z), k.set(o, I), V.set(o, N), h.has(o) ? (f.set(o, y), v.set(o, G), M.set(o, H), b.set(o, O)) : (f.set(o, P), v.set(o, q), M.set(o, A), b.set(o, J));
      t.nodes.val = s, t.elements.val = c, t.nodeInputs.val = {
        supports: E,
        loads: F
      }, t.elementInputs.val = {
        elasticities: _,
        shearModuli: $,
        areas: f,
        momentsOfInertiaZ: v,
        momentsOfInertiaY: M,
        torsionalConstants: b,
        densities: V,
        poissonsRatios: k
      };
      const w = B(s, c, t.nodeInputs.val, t.elementInputs.val);
      t.deformOutputs.val = w, t.analyzeOutputs.val = D(s, c, t.elementInputs.val, w), t.objects3D.val = [];
    },
    runModal(e, t, l) {
      var _a, _b;
      const n = t.nodes.val, i = t.elements.val, a = t.nodeInputs.val, s = t.elementInputs.val;
      if (!(!n.length || !i.length || !((_a = a.supports) == null ? void 0 : _a.size) || !((_b = s.densities) == null ? void 0 : _b.size))) try {
        const m = K(n, i, a, s, 8), u = Math.round(e.nVanos), c = (() => {
          let h = 0;
          for (let d = 1; d <= u; d++) h += e[`L_v${d}`] ?? 4;
          return h;
        })();
        l.render(m, {
          title: `Cerramiento ${u} vanos \xB7 L_tot=${c.toFixed(2)} m \xB7 H=${e.H} m`,
          properties: [
            `Hormig\xF3n col ${e.bCol}\xD7${e.hCol} m \xB7 viga ${e.bViga}\xD7${e.hViga} m`,
            `E = ${e.factorE}\xB7\u221A${e.fc_kgcm2} = ${(e.factorE * Math.sqrt(e.fc_kgcm2)).toFixed(0)} kgf/cm\xB2`
          ]
        });
      } catch (m) {
        console.warn("Modal cerramiento error:", m.message);
      }
    }
  };
});
export {
  __tla,
  Q as c
};
