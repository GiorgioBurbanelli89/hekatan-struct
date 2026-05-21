import { a as B } from "./analyze-DNPn2SjO.js";
import { m as Y, d as Z, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let X;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let G, r;
  G = 98.0665;
  r = (e, o, m, n, u, s) => ({
    default: m,
    min: n,
    max: u,
    step: s,
    label: o,
    folder: e
  });
  X = {
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
      rho: r("Materiales", "\u03B3 (kN/m\xB3)", 24, 20, 26, 0.5),
      q_vert: r("Cargas", "q viga (kN/m)", -7, -50, 0, 0.5),
      Ex: r("Cargas", "Ex lateral tope (kN)", 0, -100, 100, 1)
    },
    dynamicParams(e) {
      const o = {}, m = Math.max(1, Math.round(e.nVanos ?? 3));
      for (let n = 1; n <= m; n++) o[`L_v${n}`] = r("Luces de vano", `L vano ${n} (m)`, 4, 1, 12, 0.25);
      return o;
    },
    computedLabels(e) {
      const o = e.factorE * Math.sqrt(e.fc_kgcm2), n = o * G / 1e3;
      return {
        "E = factor\xB7\u221A(f'c)": `${e.factorE.toFixed(0)} \xB7 \u221A${e.fc_kgcm2.toFixed(0)} = ${o.toFixed(0)} kgf/cm\xB2`,
        "E (MPa)": `${n.toFixed(0)} MPa  (\u2248 ${(n / 1e3).toFixed(2)} GPa)`,
        "G = E/(2(1+\u03BD))": `${(o / (2 * (1 + e.nu))).toFixed(0)} kgf/cm\xB2`
      };
    },
    build(e, o) {
      const m = Math.max(1, Math.round(e.nVanos)), n = e.H, u = Math.max(1, Math.round(e.nSubV)), s = [
        0
      ];
      for (let t = 1; t <= m; t++) {
        const c = e[`L_v${t}`] ?? 4;
        s.push(s[s.length - 1] + c);
      }
      const a = [], d = [], h = [];
      for (let t = 0; t < s.length; t++) d.push(a.length), a.push([
        s[t],
        0,
        0
      ]), h.push(a.length), a.push([
        s[t],
        0,
        n
      ]);
      const l = [], f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
      for (let t = 0; t < s.length; t++) f.add(l.length), l.push([
        d[t],
        h[t]
      ]);
      for (let t = 0; t < m; t++) {
        const c = s[t], q = s[t + 1];
        let x = h[t];
        for (let M = 1; M < u; M++) {
          const b = M / u, y = a.length;
          a.push([
            c + b * (q - c),
            0,
            n
          ]), g.add(l.length), l.push([
            x,
            y
          ]), x = y;
        }
        g.add(l.length), l.push([
          x,
          h[t + 1]
        ]);
      }
      const k = /* @__PURE__ */ new Map();
      for (const t of d) k.set(t, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const v = /* @__PURE__ */ new Map(), I = [], $ = [];
      for (let t = 0; t < a.length; t++) Math.abs(a[t][2] - n) < 1e-9 && ($.push(t), I.push(a[t][0]));
      const i = $.map((t, c) => ({
        idx: t,
        x: I[c]
      })).sort((t, c) => t.x - c.x);
      if (e.q_vert !== 0) for (let t = 0; t < i.length; t++) {
        const c = t > 0 ? (i[t].x + i[t - 1].x) / 2 : i[t].x, x = (t < i.length - 1 ? (i[t].x + i[t + 1].x) / 2 : i[t].x) - c, M = e.q_vert * x, b = v.get(i[t].idx) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        v.set(i[t].idx, [
          b[0],
          b[1],
          b[2] + M,
          0,
          0,
          0
        ]);
      }
      if (e.Ex !== 0) {
        const t = i[0].idx, c = v.get(t) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        v.set(t, [
          c[0] + e.Ex,
          c[1],
          c[2],
          0,
          0,
          0
        ]);
      }
      const V = e.factorE * Math.sqrt(e.fc_kgcm2) * G, w = e.nu, H = V / (2 * (1 + w)), O = e.rho, P = e.bCol * e.hCol, R = e.bCol * e.hCol ** 3 / 12, A = e.hCol * e.bCol ** 3 / 12, J = 0.14 * Math.pow(Math.min(e.bCol, e.hCol), 4), T = e.bViga * e.hViga, j = e.bViga * e.hViga ** 3 / 12, D = e.hViga * e.bViga ** 3 / 12, K = 0.14 * Math.pow(Math.min(e.bViga, e.hViga), 4), L = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
      for (let t = 0; t < l.length; t++) L.set(t, V), N.set(t, H), F.set(t, w), S.set(t, O), f.has(t) ? (p.set(t, P), C.set(t, R), E.set(t, A), _.set(t, J)) : (p.set(t, T), C.set(t, j), E.set(t, D), _.set(t, K));
      o.nodes.val = a, o.elements.val = l, o.nodeInputs.val = {
        supports: k,
        loads: v
      }, o.elementInputs.val = {
        elasticities: L,
        shearModuli: N,
        areas: p,
        momentsOfInertiaZ: C,
        momentsOfInertiaY: E,
        torsionalConstants: _,
        densities: S,
        poissonsRatios: F
      };
      const z = Z(a, l, o.nodeInputs.val, o.elementInputs.val);
      o.deformOutputs.val = z, o.analyzeOutputs.val = B(a, l, o.elementInputs.val, z), o.objects3D.val = [];
    },
    runModal(e, o, m) {
      var _a, _b;
      const n = o.nodes.val, u = o.elements.val, s = o.nodeInputs.val, a = o.elementInputs.val;
      if (!(!n.length || !u.length || !((_a = s.supports) == null ? void 0 : _a.size) || !((_b = a.densities) == null ? void 0 : _b.size))) try {
        const d = Y(n, u, s, a, 8), h = Math.round(e.nVanos), l = (() => {
          let f = 0;
          for (let g = 1; g <= h; g++) f += e[`L_v${g}`] ?? 4;
          return f;
        })();
        m.render(d, {
          title: `Cerramiento ${h} vanos \xB7 L_tot=${l.toFixed(2)} m \xB7 H=${e.H} m`,
          properties: [
            `Hormig\xF3n col ${e.bCol}\xD7${e.hCol} m \xB7 viga ${e.bViga}\xD7${e.hViga} m`,
            `E = ${e.factorE}\xB7\u221A${e.fc_kgcm2} = ${(e.factorE * Math.sqrt(e.fc_kgcm2)).toFixed(0)} kgf/cm\xB2`
          ]
        });
      } catch (d) {
        console.warn("Modal cerramiento error:", d.message);
      }
    }
  };
});
export {
  __tla,
  X as c
};
