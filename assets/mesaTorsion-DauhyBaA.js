import { a as Z } from "./analyze-DNPn2SjO.js";
import { m as J, d as K, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let ee;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let T, b, V;
  T = 9.80665;
  b = 23.57 / 9.81;
  V = {
    T1_s: null,
    T2_s: null,
    T3_s: null
  };
  ee = {
    id: "mesa-torsion",
    name: "\u{1F300} Mesa de Torsi\xF3n (ETABS Gabriela/Seproinca)",
    category: "\u{1F3C1} Benchmarks \xB7 4\uFE0F\u20E3 Combinados",
    benchmark: true,
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "none",
      "displacementZ",
      "vonMises",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "bendingXX",
      "bendingYY",
      "bendingXY"
    ],
    hasModal: true,
    guide: [
      "Modelo 'Mesa de torsi\xF3n' de Gabriela/Seproinca (Venezuela 2020) reabierto en ETABS 19.1.",
      "1 piso 6\xD76 m \xD7 4 m alto \xB7 4 col C40\xD740 PINNED-base (UX UY UZ, rotaciones libres).",
      "4 vigas V30\xD750 perimetrales \xB7 losa 10 cm ShellThin \xB7 diafragma r\xEDgido auto.",
      "Modal Eigen 12 modos. Sim\xE9trico \u2192 modos 1,2,3 son Ux, Uy, Rz puros.",
      "Slider 'Excentricidad de masa' a\xF1ade P concentrado en esquina \u2192 acopla torsi\xF3n.",
      "Comparativa con ETABS API: ver validacion/Api CSI Computers/etabs-api/python-verificado/15_mesa_torsion.py",
      "Excel original ('Modelo Correcci\xF3n de Torsi\xF3n.xlsx') calcula correcci\xF3n torsional anal\xEDtica."
    ],
    params: {
      Lx: {
        default: 6,
        min: 4,
        max: 12,
        step: 0.5,
        label: "Lx (m)",
        folder: "Geometr\xEDa"
      },
      Ly: {
        default: 6,
        min: 4,
        max: 12,
        step: 0.5,
        label: "Ly (m)",
        folder: "Geometr\xEDa"
      },
      H: {
        default: 4,
        min: 2.5,
        max: 6,
        step: 0.25,
        label: "H piso (m)",
        folder: "Geometr\xEDa"
      },
      nMesh: {
        default: 5,
        min: 2,
        max: 12,
        step: 1,
        label: "Subdiv losa (n\xD7n)",
        folder: "Geometr\xEDa"
      },
      bCol: {
        default: 0.4,
        min: 0.25,
        max: 0.8,
        step: 0.05,
        label: "b col (m)",
        folder: "Secciones"
      },
      hCol: {
        default: 0.4,
        min: 0.25,
        max: 0.8,
        step: 0.05,
        label: "h col (m)",
        folder: "Secciones"
      },
      bViga: {
        default: 0.3,
        min: 0.2,
        max: 0.6,
        step: 0.05,
        label: "b viga (m)",
        folder: "Secciones"
      },
      hViga: {
        default: 0.5,
        min: 0.3,
        max: 0.9,
        step: 0.05,
        label: "h viga (m)",
        folder: "Secciones"
      },
      tLosa: {
        default: 0.1,
        min: 0.08,
        max: 0.3,
        step: 0.01,
        label: "t losa (m)",
        folder: "Secciones"
      },
      E_GPa: {
        default: 24.85,
        min: 15,
        max: 35,
        step: 0.5,
        label: "E (GPa)",
        folder: "Material"
      },
      nu: {
        default: 0.2,
        min: 0.1,
        max: 0.3,
        step: 0.01,
        label: "\u03BD",
        folder: "Material"
      },
      apoyo: {
        default: 0,
        label: "Apoyo base",
        options: {
          "Pinned (UX UY UZ)": 0,
          "Empotrado (6 DOF)": 1
        },
        folder: "Apoyo"
      },
      q_SCP: {
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        label: "SCP (tonf/m\xB2)",
        folder: "Cargas"
      },
      q_Live: {
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        label: "Live (tonf/m\xB2)",
        folder: "Cargas"
      },
      pEcc: {
        default: 0,
        min: 0,
        max: 30,
        step: 1,
        label: "P exc\xE9ntrico en esquina (tonf)",
        folder: "Torsi\xF3n (did\xE1ctico)"
      },
      eccCorner: {
        default: 0,
        label: "Esquina exc\xE9ntrica",
        options: {
          "(0,0)": 0,
          "(Lx,0)": 1,
          "(Lx,Ly)": 2,
          "(0,Ly)": 3
        },
        folder: "Torsi\xF3n (did\xE1ctico)"
      },
      nModos: {
        default: 12,
        min: 3,
        max: 24,
        step: 1,
        label: "N modos modal",
        folder: "Modal"
      }
    },
    computedLabels(o, n) {
      const t = {}, i = o.Lx * o.Ly * o.tLosa * b, f = 2 * (o.Lx + o.Ly) * o.bViga * o.hViga * b, u = 4 * o.H * o.bCol * o.hCol * b, c = i + f + u;
      t["Masa losa"] = `${i.toFixed(2)} ton`, t["Masa vigas"] = `${f.toFixed(2)} ton`, t["Masa cols"] = `${u.toFixed(2)} ton`, t["Masa total"] = `${c.toFixed(2)} ton  (\u2248 ${(c * T).toFixed(1)} kN)`;
      const r = o.E_GPa * 1e6, M = o.bCol * Math.pow(o.hCol, 3) / 12, a = 3 * r * M / Math.pow(o.H, 3);
      t["k_col (pinned-fixed)"] = `${a.toFixed(0)} kN/m`, t["K total lateral (4 cols)"] = `${(4 * a).toFixed(0)} kN/m`;
      const l = 2 * Math.PI * Math.sqrt(c / (4 * a));
      return t["T\u2081 aprox (SDOF)"] = `${l.toFixed(3)} s`, t;
    },
    build(o, n) {
      const t = Math.round(o.nMesh), m = o.Lx, i = o.Ly, f = o.H, u = m / t, c = i / t, r = [];
      r.push([
        0,
        0,
        0
      ]), r.push([
        m,
        0,
        0
      ]), r.push([
        m,
        i,
        0
      ]), r.push([
        0,
        i,
        0
      ]);
      const M = 4;
      for (let e = 0; e <= t; e++) for (let s = 0; s <= t; s++) r.push([
        s * u,
        e * c,
        f
      ]);
      const a = (e, s) => M + s * (t + 1) + e, l = [];
      for (let e = 0; e < t; e++) for (let s = 0; s < t; s++) l.push([
        a(s, e),
        a(s + 1, e),
        a(s + 1, e + 1),
        a(s, e + 1)
      ]);
      const $ = l.length;
      l.push([
        0,
        a(0, 0)
      ]), l.push([
        1,
        a(t, 0)
      ]), l.push([
        2,
        a(t, t)
      ]), l.push([
        3,
        a(0, t)
      ]);
      const k = $, w = l.length;
      for (let e = 0; e < t; e++) l.push([
        a(e, 0),
        a(e + 1, 0)
      ]);
      for (let e = 0; e < t; e++) l.push([
        a(t, e),
        a(t, e + 1)
      ]);
      for (let e = 0; e < t; e++) l.push([
        a(e, t),
        a(e + 1, t)
      ]);
      for (let e = 0; e < t; e++) l.push([
        a(0, e),
        a(0, e + 1)
      ]);
      const I = w, P = l.length, d = /* @__PURE__ */ new Map();
      o.apoyo < 0.5 ? (d.set(0, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(1, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(2, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(3, [
        true,
        true,
        true,
        false,
        false,
        false
      ])) : (d.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(1, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(2, [
        true,
        true,
        true,
        true,
        true,
        true
      ]), d.set(3, [
        true,
        true,
        true,
        true,
        true,
        true
      ]));
      const N = (o.q_SCP + o.q_Live) * T, x = /* @__PURE__ */ new Map();
      for (let e = 0; e <= t; e++) for (let s = 0; s <= t; s++) {
        const D = (s === 0 || s === t) && (e === 0 || e === t) ? 0.25 : s === 0 || s === t || e === 0 || e === t ? 0.5 : 1, R = -N * u * c * D;
        x.set(a(s, e), [
          0,
          0,
          R,
          0,
          0,
          0
        ]);
      }
      if (o.pEcc > 0.01) {
        const s = [
          a(0, 0),
          a(t, 0),
          a(t, t),
          a(0, t)
        ][Math.round(o.eccCorner) % 4], h = x.get(s) || [
          0,
          0,
          0,
          0,
          0,
          0
        ], A = o.pEcc * T;
        x.set(s, [
          h[0],
          h[1],
          h[2] - A,
          h[3],
          h[4],
          h[5]
        ]);
      }
      const p = o.E_GPa * 1e6, G = p / (2 * (1 + o.nu)), q = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map();
      for (let e = 0; e < $; e++) q.set(e, o.tLosa), g.set(e, p), C.set(e, o.nu), v.set(e, b);
      const z = o.bCol * o.hCol, U = o.bCol * Math.pow(o.hCol, 3) / 12, H = o.hCol * Math.pow(o.bCol, 3) / 12, O = 0.28 * Math.min(o.bCol, o.hCol) * Math.pow(Math.max(o.bCol, o.hCol), 3);
      for (let e = k; e < w; e++) g.set(e, p), C.set(e, o.nu), S.set(e, G), L.set(e, z), y.set(e, H), _.set(e, U), E.set(e, O), v.set(e, b), F.set(e, {
        type: "rect",
        b: o.bCol,
        h: o.hCol
      });
      const Y = o.bViga * o.hViga, X = o.bViga * Math.pow(o.hViga, 3) / 12, B = o.hViga * Math.pow(o.bViga, 3) / 12, j = 0.28 * Math.min(o.bViga, o.hViga) * Math.pow(Math.max(o.bViga, o.hViga), 3);
      for (let e = I; e < P; e++) g.set(e, p), C.set(e, o.nu), S.set(e, G), L.set(e, Y), y.set(e, X), _.set(e, B), E.set(e, j), v.set(e, b), F.set(e, {
        type: "rect",
        b: o.bViga,
        h: o.hViga
      });
      n.nodes.val = r, n.elements.val = l, n.nodeInputs.val = {
        supports: d,
        loads: x
      }, n.elementInputs.val = {
        elasticities: g,
        poissonsRatios: C,
        shearModuli: S,
        areas: L,
        momentsOfInertiaZ: y,
        momentsOfInertiaY: _,
        torsionalConstants: E,
        thicknesses: q,
        densities: v,
        sectionShapes: F
      };
      try {
        n.deformOutputs.val = K(r, l, {
          supports: d,
          loads: x
        }, n.elementInputs.val), n.analyzeOutputs.val = Z(r, l, n.elementInputs.val, n.deformOutputs.val);
        const e = Math.max(...[
          ...n.deformOutputs.val.deformations.values()
        ].map((s) => Math.abs(s[2])));
        console.log(`[Mesa torsi\xF3n] ${m}\xD7${i} m \xD7 ${f} m alto \xB7 q=${(o.q_SCP + o.q_Live).toFixed(2)} tonf/m\xB2
  ${r.length} nodos \xB7 ${$} shells losa \xB7 4 cols \xB7 ${P - I} segmentos viga
  Base ${o.apoyo < 0.5 ? "pinned (UX UY UZ)" : "empotrada"}
  \u03B4z_max = ${(e * 1e3).toFixed(3)} mm`);
      } catch (e) {
        console.error("[Mesa torsi\xF3n] static error:", e.message);
      }
      n.objects3D.val = [];
    },
    runModal(o, n, t) {
      if (!n.nodes.val.length) return;
      const m = Math.round(o.nModos);
      try {
        const i = J(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, m), f = [
          `[Mesa torsi\xF3n \u2014 Modal Hekatan FEM 3D] ${m} modos:`,
          ...i.frequencies.slice(0, Math.min(m, 12)).map((c, r) => {
            const M = 1 / c;
            return `  Modo ${r + 1}: T = ${M.toFixed(4)} s   f = ${c.toFixed(3)} Hz   \u03C9 = ${(2 * Math.PI * c).toFixed(2)} rad/s`;
          })
        ].join(`
`);
        console.log(f);
        const u = [];
        V.T1_s, V.T2_s, V.T3_s, u.length === 0 && u.push("Correr 15_mesa_torsion.py para llenar la referencia ETABS"), (t == null ? void 0 : t.render) && t.render(i, {
          title: `Mesa de Torsi\xF3n \u2014 ${o.Lx}\xD7${o.Ly}m, ${o.H}m alto`,
          properties: [
            `${o.apoyo < 0.5 ? "Pinned base" : "Empotrado"}  \xB7  E=${o.E_GPa} GPa  \u03BD=${o.nu}`,
            `C${(o.bCol * 100).toFixed(0)}\xD7${(o.hCol * 100).toFixed(0)}  V${(o.bViga * 100).toFixed(0)}\xD7${(o.hViga * 100).toFixed(0)}  losa t=${(o.tLosa * 100).toFixed(0)}cm`,
            `P exc\xE9ntrico = ${o.pEcc} tonf en esquina ${[
              "(0,0)",
              "(Lx,0)",
              "(Lx,Ly)",
              "(0,Ly)"
            ][Math.round(o.eccCorner) % 4]}`,
            ...u
          ]
        });
      } catch (i) {
        console.error("[Mesa torsi\xF3n Modal] error:", i.message);
      }
    }
  };
});
export {
  __tla,
  ee as m
};
