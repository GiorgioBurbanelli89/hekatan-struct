import { a as B } from "./analyze-DNPn2SjO.js";
import { m as X, d as Z, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let tt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let H, c;
  H = 98.0665;
  c = (e, o, m, s, d, h) => ({
    default: m,
    min: s,
    max: d,
    step: h,
    label: o,
    folder: e
  });
  tt = {
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
        ...c("Geometr\xEDa", "N vanos", 3, 1, 10, 1),
        regenOnChange: true
      },
      H: c("Geometr\xEDa", "Altura H (m)", 3, 2, 6, 0.1),
      nSubV: c("Geometr\xEDa", "Div. viga (1=sin discretizar)", 1, 1, 8, 1),
      nSubC: c("Geometr\xEDa", "Div. columna (1=sin discretizar)", 1, 1, 8, 1),
      bCol: c("Secciones", "b columna (m)", 0.3, 0.2, 0.6, 0.05),
      hCol: c("Secciones", "h columna (m)", 0.3, 0.2, 0.6, 0.05),
      bViga: c("Secciones", "b viga (m)", 0.2, 0.15, 0.4, 0.05),
      hViga: c("Secciones", "h viga (m)", 0.3, 0.2, 0.6, 0.05),
      factorE: c("Materiales", "factor E (NEC=14100)", 14100, 8e3, 18e3, 100),
      fc_kgcm2: c("Materiales", "f'c (kgf/cm\xB2)", 210, 140, 420, 10),
      nu: c("Materiales", "\u03BD Poisson", 0.2, 0.15, 0.25, 0.01),
      rho: c("Materiales", "\u03B3 (kN/m\xB3)", 24, 20, 26, 0.5),
      q_vert: c("Cargas", "q viga (kN/m)", -7, -50, 0, 0.5),
      Ex: c("Cargas", "Ex lateral tope X (kN, in-plane\u2192My)", 0, -100, 100, 1),
      Ey: c("Cargas", "Ey lateral tope Y (kN, out-of-plane\u2192Mz)", 0, -100, 100, 1)
    },
    dynamicParams(e) {
      const o = {}, m = Math.max(1, Math.round(e.nVanos ?? 3));
      for (let s = 1; s <= m; s++) o[`L_v${s}`] = c("Luces de vano", `L vano ${s} (m)`, 4, 1, 12, 0.25);
      return o;
    },
    computedLabels(e) {
      const o = e.factorE * Math.sqrt(e.fc_kgcm2), s = o * H / 1e3;
      return {
        "E = factor\xB7\u221A(f'c)": `${e.factorE.toFixed(0)} \xB7 \u221A${e.fc_kgcm2.toFixed(0)} = ${o.toFixed(0)} kgf/cm\xB2`,
        "E (MPa)": `${s.toFixed(0)} MPa  (\u2248 ${(s / 1e3).toFixed(2)} GPa)`,
        "G = E/(2(1+\u03BD))": `${(o / (2 * (1 + e.nu))).toFixed(0)} kgf/cm\xB2`
      };
    },
    build(e, o) {
      const m = Math.max(1, Math.round(e.nVanos)), s = e.H, d = Math.max(1, Math.round(e.nSubV)), h = Math.max(1, Math.round(e.nSubC ?? 1)), l = [
        0
      ];
      for (let t = 1; t <= m; t++) {
        const a = e[`L_v${t}`] ?? 4;
        l.push(l[l.length - 1] + a);
      }
      const n = [], x = [], v = [];
      for (let t = 0; t < l.length; t++) x.push(n.length), n.push([
        l[t],
        0,
        0
      ]), v.push(n.length), n.push([
        l[t],
        0,
        s
      ]);
      const r = [], g = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
      for (let t = 0; t < l.length; t++) {
        let a = x[t];
        for (let M = 1; M < h; M++) {
          const f = M / h, u = n.length;
          n.push([
            l[t],
            0,
            f * s
          ]), g.add(r.length), r.push([
            a,
            u
          ]), a = u;
        }
        g.add(r.length), r.push([
          a,
          v[t]
        ]);
      }
      for (let t = 0; t < m; t++) {
        const a = l[t], M = l[t + 1];
        let f = v[t];
        for (let u = 1; u < d; u++) {
          const p = u / d, G = n.length;
          n.push([
            a + p * (M - a),
            0,
            s
          ]), I.add(r.length), r.push([
            f,
            G
          ]), f = G;
        }
        I.add(r.length), r.push([
          f,
          v[t + 1]
        ]);
      }
      const $ = /* @__PURE__ */ new Map();
      for (const t of x) $.set(t, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const b = /* @__PURE__ */ new Map(), V = [], w = [];
      for (let t = 0; t < n.length; t++) Math.abs(n[t][2] - s) < 1e-9 && (w.push(t), V.push(n[t][0]));
      const i = w.map((t, a) => ({
        idx: t,
        x: V[a]
      })).sort((t, a) => t.x - a.x);
      if (e.q_vert !== 0) for (let t = 0; t < i.length; t++) {
        const a = t > 0 ? (i[t].x + i[t - 1].x) / 2 : i[t].x, f = (t < i.length - 1 ? (i[t].x + i[t + 1].x) / 2 : i[t].x) - a, u = e.q_vert * f, p = b.get(i[t].idx) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        b.set(i[t].idx, [
          p[0],
          p[1],
          p[2] + u,
          0,
          0,
          0
        ]);
      }
      if (e.Ex !== 0) {
        const t = i[0].idx, a = b.get(t) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        b.set(t, [
          a[0] + e.Ex,
          a[1],
          a[2],
          0,
          0,
          0
        ]);
      }
      const S = e.factorE * Math.sqrt(e.fc_kgcm2) * H, z = e.nu, O = S / (2 * (1 + z)), P = e.rho, R = e.bCol * e.hCol, A = e.bCol * e.hCol ** 3 / 12, D = e.hCol * e.bCol ** 3 / 12, J = 0.14 * Math.pow(Math.min(e.bCol, e.hCol), 4), T = e.bViga * e.hViga, j = e.bViga * e.hViga ** 3 / 12, K = e.hViga * e.bViga ** 3 / 12, Y = 0.14 * Math.pow(Math.min(e.bViga, e.hViga), 4), L = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
      for (let t = 0; t < r.length; t++) L.set(t, S), N.set(t, O), y.set(t, z), F.set(t, P), g.has(t) ? (C.set(t, R), E.set(t, A), k.set(t, D), _.set(t, J)) : (C.set(t, T), E.set(t, j), k.set(t, K), _.set(t, Y));
      o.nodes.val = n, o.elements.val = r, o.nodeInputs.val = {
        supports: $,
        loads: b
      }, o.elementInputs.val = {
        elasticities: L,
        shearModuli: N,
        areas: C,
        momentsOfInertiaZ: E,
        momentsOfInertiaY: k,
        torsionalConstants: _,
        densities: F,
        poissonsRatios: y
      };
      const q = Z(n, r, o.nodeInputs.val, o.elementInputs.val);
      o.deformOutputs.val = q, o.analyzeOutputs.val = B(n, r, o.elementInputs.val, q), o.objects3D.val = [];
    },
    runModal(e, o, m) {
      var _a, _b;
      const s = o.nodes.val, d = o.elements.val, h = o.nodeInputs.val, l = o.elementInputs.val;
      if (!(!s.length || !d.length || !((_a = h.supports) == null ? void 0 : _a.size) || !((_b = l.densities) == null ? void 0 : _b.size))) try {
        const n = X(s, d, h, l, 8), x = Math.round(e.nVanos), v = (() => {
          let r = 0;
          for (let g = 1; g <= x; g++) r += e[`L_v${g}`] ?? 4;
          return r;
        })();
        m.render(n, {
          title: `Cerramiento ${x} vanos \xB7 L_tot=${v.toFixed(2)} m \xB7 H=${e.H} m`,
          properties: [
            `Hormig\xF3n col ${e.bCol}\xD7${e.hCol} m \xB7 viga ${e.bViga}\xD7${e.hViga} m`,
            `E = ${e.factorE}\xB7\u221A${e.fc_kgcm2} = ${(e.factorE * Math.sqrt(e.fc_kgcm2)).toFixed(0)} kgf/cm\xB2`
          ]
        });
      } catch (n) {
        console.warn("Modal cerramiento error:", n.message);
      }
    }
  };
});
export {
  __tla,
  tt as c
};
