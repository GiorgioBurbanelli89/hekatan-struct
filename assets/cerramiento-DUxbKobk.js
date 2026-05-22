import { a as Z } from "./analyze-DNPn2SjO.js";
import { m as Q, d as U, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
let ot;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let P, r;
  P = 98.0665;
  r = (t, o, d, s, v, M) => ({
    default: d,
    min: s,
    max: v,
    step: M,
    label: o,
    folder: t
  });
  ot = {
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
      nSubV: r("Geometr\xEDa", "Div. viga (1=sin discretizar)", 1, 1, 8, 1),
      nSubC: r("Geometr\xEDa", "Div. columna (1=sin discretizar)", 1, 1, 8, 1),
      bCol: r("Secciones", "b columna (m)", 0.3, 0.2, 0.6, 0.05),
      hCol: r("Secciones", "h columna (m)", 0.3, 0.2, 0.6, 0.05),
      bViga: r("Secciones", "b viga (m)", 0.2, 0.15, 0.4, 0.05),
      hViga: r("Secciones", "h viga (m)", 0.3, 0.2, 0.6, 0.05),
      factorE: r("Materiales", "factor E (NEC=14100)", 14100, 8e3, 18e3, 100),
      fc_kgcm2: r("Materiales", "f'c (kgf/cm\xB2)", 210, 140, 420, 10),
      nu: r("Materiales", "\u03BD Poisson", 0.2, 0.15, 0.25, 0.01),
      rho: r("Materiales", "\u03B3 (kN/m\xB3)", 24, 20, 26, 0.5),
      q_vert: r("Cargas", "q viga (kN/m)", -7, -50, 0, 0.5),
      Ex: r("Cargas", "Ex lateral tope X (kN, in-plane\u2192My)", 0, -100, 100, 1),
      Ey: r("Cargas", "Ey lateral tope Y (kN, out-of-plane\u2192Mz)", 0, -100, 100, 1)
    },
    dynamicParams(t) {
      const o = {}, d = Math.max(1, Math.round(t.nVanos ?? 3));
      for (let s = 1; s <= d; s++) o[`L_v${s}`] = r("Luces de vano", `L vano ${s} (m)`, 4, 1, 12, 0.25);
      return o;
    },
    computedLabels(t) {
      const o = t.factorE * Math.sqrt(t.fc_kgcm2), s = o * P / 1e3;
      return {
        "E = factor\xB7\u221A(f'c)": `${t.factorE.toFixed(0)} \xB7 \u221A${t.fc_kgcm2.toFixed(0)} = ${o.toFixed(0)} kgf/cm\xB2`,
        "E (MPa)": `${s.toFixed(0)} MPa  (\u2248 ${(s / 1e3).toFixed(2)} GPa)`,
        "G = E/(2(1+\u03BD))": `${(o / (2 * (1 + t.nu))).toFixed(0)} kgf/cm\xB2`
      };
    },
    build(t, o) {
      const d = Math.max(1, Math.round(t.nVanos)), s = t.H, v = Math.max(1, Math.round(t.nSubV)), M = Math.max(1, Math.round(t.nSubC ?? 1)), l = [
        0
      ];
      for (let e = 1; e <= d; e++) {
        const a = t[`L_v${e}`] ?? 4;
        l.push(l[l.length - 1] + a);
      }
      const n = [], C = [], h = [];
      for (let e = 0; e < l.length; e++) C.push(n.length), n.push([
        l[e],
        0,
        0
      ]), h.push(n.length), n.push([
        l[e],
        0,
        s
      ]);
      const c = [], x = /* @__PURE__ */ new Set(), _ = /* @__PURE__ */ new Set();
      for (let e = 0; e < l.length; e++) {
        let a = C[e];
        for (let m = 1; m < M; m++) {
          const u = m / M, i = n.length;
          n.push([
            l[e],
            0,
            u * s
          ]), x.add(c.length), c.push([
            a,
            i
          ]), a = i;
        }
        x.add(c.length), c.push([
          a,
          h[e]
        ]);
      }
      for (let e = 0; e < d; e++) {
        const a = l[e], m = l[e + 1];
        let u = h[e];
        for (let i = 1; i < v; i++) {
          const g = i / v, E = n.length;
          n.push([
            a + g * (m - a),
            0,
            s
          ]), _.add(c.length), c.push([
            u,
            E
          ]), u = E;
        }
        _.add(c.length), c.push([
          u,
          h[e + 1]
        ]);
      }
      const w = /* @__PURE__ */ new Map();
      for (const e of C) w.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const k = /* @__PURE__ */ new Map(), b = (e, a, m, u, i, g, E) => {
        const f = k.get(e) ?? [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        k.set(e, [
          f[0] + a,
          f[1] + m,
          f[2] + u,
          f[3] + i,
          f[4] + g,
          f[5] + E
        ]);
      };
      if (t.q_vert !== 0) for (const e of _) {
        const [a, m] = c[e], u = n[a][0], i = n[m][0], g = Math.abs(i - u);
        if (g < 1e-12) continue;
        const E = u < i ? a : m, f = u < i ? m : a, H = t.q_vert * g / 2, O = t.q_vert * g * g / 12;
        b(E, 0, 0, H, 0, O, 0), b(f, 0, 0, H, 0, -O, 0);
      }
      const L = h.reduce((e, a) => n[a][0] < n[e][0] ? a : e, h[0]);
      t.Ex !== 0 && b(L, t.Ex, 0, 0, 0, 0, 0), t.Ey !== 0 && b(L, 0, t.Ey, 0, 0, 0, 0);
      const S = t.factorE * Math.sqrt(t.fc_kgcm2) * P, y = t.nu, A = S / (2 * (1 + y)), j = t.rho, D = t.bCol * t.hCol, J = t.bCol * t.hCol ** 3 / 12, R = t.hCol * t.bCol ** 3 / 12, K = 0.14 * Math.pow(Math.min(t.bCol, t.hCol), 4), Y = t.bViga * t.hViga, B = t.bViga * t.hViga ** 3 / 12, T = t.hViga * t.bViga ** 3 / 12, X = 0.14 * Math.pow(Math.min(t.bViga, t.hViga), 4), F = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map();
      for (let e = 0; e < c.length; e++) F.set(e, S), N.set(e, A), z.set(e, y), q.set(e, j), x.has(e) ? (I.set(e, D), $.set(e, J), p.set(e, R), V.set(e, K)) : (I.set(e, Y), $.set(e, B), p.set(e, T), V.set(e, X));
      o.nodes.val = n, o.elements.val = c, o.nodeInputs.val = {
        supports: w,
        loads: k
      }, o.elementInputs.val = {
        elasticities: F,
        shearModuli: N,
        areas: I,
        momentsOfInertiaZ: p,
        momentsOfInertiaY: $,
        torsionalConstants: V,
        densities: q,
        poissonsRatios: z
      };
      const G = U(n, c, o.nodeInputs.val, o.elementInputs.val);
      o.deformOutputs.val = G, o.analyzeOutputs.val = Z(n, c, o.elementInputs.val, G), o.objects3D.val = [];
    },
    runModal(t, o, d) {
      var _a, _b;
      const s = o.nodes.val, v = o.elements.val, M = o.nodeInputs.val, l = o.elementInputs.val;
      if (!(!s.length || !v.length || !((_a = M.supports) == null ? void 0 : _a.size) || !((_b = l.densities) == null ? void 0 : _b.size))) try {
        const n = Q(s, v, M, l, 8), C = Math.round(t.nVanos), h = (() => {
          let c = 0;
          for (let x = 1; x <= C; x++) c += t[`L_v${x}`] ?? 4;
          return c;
        })();
        d.render(n, {
          title: `Cerramiento ${C} vanos \xB7 L_tot=${h.toFixed(2)} m \xB7 H=${t.H} m`,
          properties: [
            `Hormig\xF3n col ${t.bCol}\xD7${t.hCol} m \xB7 viga ${t.bViga}\xD7${t.hViga} m`,
            `E = ${t.factorE}\xB7\u221A${t.fc_kgcm2} = ${(t.factorE * Math.sqrt(t.fc_kgcm2)).toFixed(0)} kgf/cm\xB2`
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
  ot as c
};
