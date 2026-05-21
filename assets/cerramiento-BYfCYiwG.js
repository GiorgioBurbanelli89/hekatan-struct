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
  let H, r;
  H = 98.0665;
  r = (o, n, l, t, i, a) => ({
    default: l,
    min: t,
    max: i,
    step: a,
    label: n,
    folder: o
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
      factorE: r("Hormig\xF3n", "factor E (NEC=14100)", 14100, 8e3, 18e3, 100),
      fc_kgcm2: r("Hormig\xF3n", "f'c (kgf/cm\xB2)", 210, 140, 420, 10),
      nu: r("Hormig\xF3n", "\u03BD Poisson", 0.2, 0.15, 0.25, 0.01),
      rho: r("Hormig\xF3n", "\u03B3 (kN/m\xB3)", 24, 20, 26, 0.5)
    },
    dynamicParams(o) {
      const n = {}, l = Math.max(1, Math.round(o.nVanos ?? 3));
      for (let t = 1; t <= l; t++) n[`L_v${t}`] = r("Luces de vano", `L vano ${t} (m)`, 4, 1, 12, 0.25);
      return n;
    },
    computedLabels(o) {
      const n = o.factorE * Math.sqrt(o.fc_kgcm2), t = n * H / 1e3;
      return {
        "E = factor\xB7\u221A(f'c)": `${o.factorE.toFixed(0)} \xB7 \u221A${o.fc_kgcm2.toFixed(0)} = ${n.toFixed(0)} kgf/cm\xB2`,
        "E (MPa)": `${t.toFixed(0)} MPa  (\u2248 ${(t / 1e3).toFixed(2)} GPa)`,
        "G = E/(2(1+\u03BD))": `${(n / (2 * (1 + o.nu))).toFixed(0)} kgf/cm\xB2`
      };
    },
    build(o, n) {
      const l = Math.max(1, Math.round(o.nVanos)), t = o.H, i = Math.max(1, Math.round(o.nSubV)), a = [
        0
      ];
      for (let e = 1; e <= l; e++) {
        const g = o[`L_v${e}`] ?? 4;
        a.push(a[a.length - 1] + g);
      }
      const s = [], m = [], u = [];
      for (let e = 0; e < a.length; e++) m.push(s.length), s.push([
        a[e],
        0,
        0
      ]), u.push(s.length), s.push([
        a[e],
        0,
        t
      ]);
      const c = [], h = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set();
      for (let e = 0; e < a.length; e++) h.add(c.length), c.push([
        m[e],
        u[e]
      ]);
      for (let e = 0; e < l; e++) {
        const g = a[e], R = a[e + 1];
        let C = u[e];
        for (let p = 1; p < i; p++) {
          const j = p / i, L = s.length;
          s.push([
            g + j * (R - g),
            0,
            t
          ]), d.add(c.length), c.push([
            C,
            L
          ]), C = L;
        }
        d.add(c.length), c.push([
          C,
          u[e + 1]
        ]);
      }
      const E = /* @__PURE__ */ new Map();
      for (const e of m) E.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const S = /* @__PURE__ */ new Map(), x = o.factorE * Math.sqrt(o.fc_kgcm2) * H, I = o.nu, F = x / (2 * (1 + I)), z = o.rho, N = o.bCol * o.hCol, y = o.bCol * o.hCol ** 3 / 12, G = o.hCol * o.bCol ** 3 / 12, O = 0.14 * Math.pow(Math.min(o.bCol, o.hCol), 4), P = o.bViga * o.hViga, q = o.bViga * o.hViga ** 3 / 12, A = o.hViga * o.bViga ** 3 / 12, J = 0.14 * Math.pow(Math.min(o.bViga, o.hViga), 4), _ = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
      for (let e = 0; e < c.length; e++) _.set(e, x), $.set(e, F), k.set(e, I), V.set(e, z), h.has(e) ? (f.set(e, N), v.set(e, y), M.set(e, G), b.set(e, O)) : (f.set(e, P), v.set(e, q), M.set(e, A), b.set(e, J));
      n.nodes.val = s, n.elements.val = c, n.nodeInputs.val = {
        supports: E,
        loads: S
      }, n.elementInputs.val = {
        elasticities: _,
        shearModuli: $,
        areas: f,
        momentsOfInertiaZ: v,
        momentsOfInertiaY: M,
        torsionalConstants: b,
        densities: V,
        poissonsRatios: k
      };
      const w = B(s, c, n.nodeInputs.val, n.elementInputs.val);
      n.deformOutputs.val = w, n.analyzeOutputs.val = D(s, c, n.elementInputs.val, w), n.objects3D.val = [];
    },
    runModal(o, n, l) {
      var _a, _b;
      const t = n.nodes.val, i = n.elements.val, a = n.nodeInputs.val, s = n.elementInputs.val;
      if (!(!t.length || !i.length || !((_a = a.supports) == null ? void 0 : _a.size) || !((_b = s.densities) == null ? void 0 : _b.size))) try {
        const m = K(t, i, a, s, 8), u = Math.round(o.nVanos), c = (() => {
          let h = 0;
          for (let d = 1; d <= u; d++) h += o[`L_v${d}`] ?? 4;
          return h;
        })();
        l.render(m, {
          title: `Cerramiento ${u} vanos \xB7 L_tot=${c.toFixed(2)} m \xB7 H=${o.H} m`,
          properties: [
            `Hormig\xF3n col ${o.bCol}\xD7${o.hCol} m \xB7 viga ${o.bViga}\xD7${o.hViga} m`,
            `E = ${o.factorE}\xB7\u221A${o.fc_kgcm2} = ${(o.factorE * Math.sqrt(o.fc_kgcm2)).toFixed(0)} kgf/cm\xB2`
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
