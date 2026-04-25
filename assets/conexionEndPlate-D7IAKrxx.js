import { a as we } from "./analyze-ClLKGn9k.js";
import { d as ye, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { M as K, b as Q, C as ie, S as ze } from "./Text-C52Bkp-N.js";
let Se;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  Se = {
    id: "conexion-end-plate",
    name: "Conexi\xF3n End Plate 4E/4ES (AISC 358 \xA76)",
    category: "Conexiones",
    hasModal: false,
    defaultShellResult: "vonMises",
    availableShellResults: [
      "vonMises",
      "membraneXX",
      "membraneYY",
      "displacementZ"
    ],
    params: {
      config: {
        default: 0,
        label: "Configuraci\xF3n AISC 358",
        options: {
          "4E (Unstiffened)": 0,
          "4ES (Stiffened)": 1,
          "8ES (Eight-Bolt Stiff.)": 2
        },
        folder: "Configuraci\xF3n"
      },
      d_beam: {
        default: 0.5,
        min: 0.3,
        max: 0.9,
        step: 0.02,
        label: "d viga (m)",
        folder: "Viga"
      },
      bf_beam: {
        default: 0.2,
        min: 0.12,
        max: 0.4,
        step: 0.01,
        label: "bf pat\xEDn (m)",
        folder: "Viga"
      },
      tf_beam: {
        default: 0.018,
        min: 0.01,
        max: 0.04,
        step: 2e-3,
        label: "tf pat\xEDn (m)",
        folder: "Viga"
      },
      tw_beam: {
        default: 0.012,
        min: 8e-3,
        max: 0.025,
        step: 1e-3,
        label: "tw alma (m)",
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
        default: 0.4,
        min: 0.3,
        max: 0.7,
        step: 0.02,
        label: "d col (m)",
        folder: "Columna"
      },
      bf_col: {
        default: 0.4,
        min: 0.25,
        max: 0.6,
        step: 0.01,
        label: "bf col (m)",
        folder: "Columna"
      },
      tf_col: {
        default: 0.025,
        min: 0.012,
        max: 0.05,
        step: 2e-3,
        label: "tf col (m)",
        folder: "Columna"
      },
      tw_col: {
        default: 0.018,
        min: 0.01,
        max: 0.035,
        step: 1e-3,
        label: "tw col (m)",
        folder: "Columna"
      },
      bp: {
        default: 0.25,
        min: 0.15,
        max: 0.5,
        step: 0.01,
        label: "bp ancho placa (m)",
        folder: "End Plate"
      },
      hp: {
        default: 0.65,
        min: 0.3,
        max: 1,
        step: 0.02,
        label: "hp altura placa (m)",
        folder: "End Plate"
      },
      tp: {
        default: 0.03,
        min: 0.015,
        max: 0.06,
        step: 2e-3,
        label: "tp espesor (m)",
        folder: "End Plate"
      },
      pf: {
        default: 0.06,
        min: 0.03,
        max: 0.15,
        step: 0.01,
        label: "pf bolt to flange (m)",
        folder: "End Plate"
      },
      g: {
        default: 0.1,
        min: 0.06,
        max: 0.2,
        step: 0.01,
        label: "g gauge (m)",
        folder: "End Plate"
      },
      d_bolt: {
        default: 0.025,
        min: 0.016,
        max: 0.04,
        step: 2e-3,
        label: "\xD8 perno (m)",
        folder: "Pernos"
      },
      Fu_bolt: {
        default: 103e4,
        min: 83e4,
        max: 11e5,
        step: 1e4,
        label: "Fu perno A490 (kN/m\xB2)",
        folder: "Pernos"
      },
      Fy: {
        default: 345e3,
        min: 25e4,
        max: 45e4,
        step: 5e3,
        label: "Fy acero (kN/m\xB2)",
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
      Mu: {
        default: 350,
        min: 0,
        max: 2e3,
        step: 25,
        label: "Mu demanda (kN\xB7m)",
        folder: "Cargas",
        unitType: "moment"
      },
      mesh_density: {
        default: 3,
        min: 1,
        max: 5,
        step: 1,
        label: "Densidad malla",
        folder: "Malla"
      }
    },
    build(e, c) {
      const f = [], _ = [], x = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), F = e.E_steel / 2.6, de = 77 / 9.81, Z = 1e-4, ee = /* @__PURE__ */ new Map(), l = (t, o, n) => {
        const a = `${Math.round(t / Z)},${Math.round(o / Z)},${Math.round(n / Z)}`;
        let m = ee.get(a);
        return m === void 0 && (f.push([
          t,
          o,
          n
        ]), m = f.length - 1, ee.set(a, m)), m;
      }, d = (t, o, n, a, m) => {
        _.push([
          t,
          o,
          n,
          a
        ]);
        const s = _.length - 1;
        x.set(s, m), R.set(s, e.E_steel), N.set(s, 0.3), p.set(s, de), B.set(s, 0), z.set(s, 0), I.set(s, 0), M.set(s, 0), V.set(s, F);
      }, u = Math.max(1, Math.round(e.mesh_density)), te = Math.round(e.config), be = te >= 1, _e = te === 2, D = 4, k = +e.d_col / 2 - e.tf_col / 2, U = -e.d_col / 2 + e.tf_col / 2, b = 8 * u, E = 2 * u, A = [];
      for (let t = 0; t <= b; t++) {
        const o = -2 + t * D / b, n = [];
        for (let a = 0; a <= E; a++) n.push(l(k, -e.bf_col / 2 + a * e.bf_col / E, o));
        A.push(n);
      }
      for (let t = 0; t < b; t++) for (let o = 0; o < E; o++) d(A[t][o], A[t][o + 1], A[t + 1][o + 1], A[t + 1][o], e.tf_col);
      const L = [];
      for (let t = 0; t <= b; t++) {
        const o = -2 + t * D / b, n = [];
        for (let a = 0; a <= E; a++) n.push(l(U, -e.bf_col / 2 + a * e.bf_col / E, o));
        L.push(n);
      }
      for (let t = 0; t < b; t++) for (let o = 0; o < E; o++) d(L[t][o], L[t][o + 1], L[t + 1][o + 1], L[t + 1][o], e.tf_col);
      const W = u + 1, T = [];
      for (let t = 0; t <= b; t++) {
        const o = -2 + t * D / b, n = [];
        for (let a = 0; a <= W; a++) n.push(l(U + (k - U) * (a / W), 0, o));
        T.push(n);
      }
      for (let t = 0; t < b; t++) for (let o = 0; o < W; o++) d(T[t][o], T[t][o + 1], T[t + 1][o + 1], T[t + 1][o], e.tw_col);
      const X = 3 * u, H = 6 * u, O = [];
      for (let t = 0; t <= H; t++) {
        const o = -e.hp / 2 + t * e.hp / H, n = [];
        for (let a = 0; a <= X; a++) {
          const m = -e.bp / 2 + a * e.bp / X;
          n.push(l(k, m, o));
        }
        O.push(n);
      }
      for (let t = 0; t < H; t++) for (let o = 0; o < X; o++) d(O[t][o], O[t][o + 1], O[t + 1][o + 1], O[t + 1][o], e.tp);
      const i = k + e.tp, g = +e.d_beam / 2 - e.tf_beam / 2, h = -e.d_beam / 2 + e.tf_beam / 2, G = 8 * u, $ = 2 * u, Y = 2 * u, w = [], S = [], P = [];
      for (let t = 0; t <= G; t++) {
        const o = i + t * e.L_beam / G, n = [], a = [];
        for (let s = 0; s <= $; s++) {
          const q = -e.bf_beam / 2 + s * e.bf_beam / $;
          n.push(l(o, q, g)), a.push(l(o, q, h));
        }
        w.push(n), S.push(a);
        const m = [];
        for (let s = 0; s <= Y; s++) {
          const q = h + (g - h) * (s / Y);
          m.push(l(o, 0, q));
        }
        P.push(m);
      }
      for (let t = 0; t < G; t++) {
        for (let o = 0; o < $; o++) d(w[t][o], w[t][o + 1], w[t + 1][o + 1], w[t + 1][o], e.tf_beam), d(S[t][o], S[t][o + 1], S[t + 1][o + 1], S[t + 1][o], e.tf_beam);
        for (let o = 0; o < Y; o++) d(P[t][o], P[t][o + 1], P[t + 1][o + 1], P[t + 1][o], e.tw_beam);
      }
      if (be) {
        const t = (e.hp - e.d_beam) / 2 - 0.02, o = t * 1.5;
        g + e.tf_beam / 2 + t / 2, h - e.tf_beam / 2 - t / 2;
        const n = e.tw_beam, a = 0;
        d(l(i, a, g + e.tf_beam / 2), l(i + o, a, g + e.tf_beam / 2), l(i + o, a, g + e.tf_beam / 2), l(i, a, g + e.tf_beam / 2 + t), n), d(l(i, a, h - e.tf_beam / 2 - t), l(i + o, a, h - e.tf_beam / 2), l(i + o, a, h - e.tf_beam / 2), l(i, a, h - e.tf_beam / 2), n);
      }
      const y = /* @__PURE__ */ new Map();
      for (let t = 0; t <= $; t++) y.set(w[0][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]), y.set(S[0][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t <= Y; t++) y.set(P[0][t], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      for (let t = 0; t < f.length; t++) Math.abs(Math.abs(f[t][2]) - D / 2) < 1e-4 && Math.abs(f[t][0]) >= e.d_col / 2 - e.tf_col - 1e-4 && (y.has(t) || y.set(t, [
        true,
        true,
        true,
        true,
        true,
        true
      ]));
      const ue = e.Mu / Math.max(e.d_beam - e.tf_beam, 0.1) * 0.4, J = /* @__PURE__ */ new Map(), he = ue / ($ + 1);
      for (let t = 0; t <= $; t++) J.set(w[G][t], [
        0,
        0,
        -he,
        0,
        0,
        0
      ]);
      c.nodes.val = f, c.elements.val = _, c.nodeInputs.val = {
        supports: y,
        loads: J
      }, c.elementInputs.val = {
        thicknesses: x,
        elasticities: R,
        poissonsRatios: N,
        densities: p,
        areas: B,
        momentsOfInertiaY: z,
        momentsOfInertiaZ: I,
        torsionalConstants: M,
        shearModuli: V
      };
      try {
        const t = ye(f, _, {
          supports: y,
          loads: J
        }, c.elementInputs.val);
        c.deformOutputs.val = t;
        const o = we(f, _, c.elementInputs.val, t);
        c.analyzeOutputs.val = o;
      } catch (t) {
        console.error("[EndPlate] solver error:", t == null ? void 0 : t.message);
      }
      const j = [], xe = new K({
        color: 4473924,
        metalness: 0.8
      }), pe = new K({
        color: 2236962
      }), oe = e.tp + e.tf_col + 0.02, ae = +e.d_beam / 2 + e.pf, ne = +e.d_beam / 2 - e.pf, se = -e.d_beam / 2 - e.pf, le = -e.d_beam / 2 + e.pf, me = +e.d_beam / 2 + e.pf * 2, ce = -e.d_beam / 2 - e.pf * 2, v = -e.g / 2, C = +e.g / 2, r = k - e.tp / 2 - 5e-3, re = [
        [
          r,
          v,
          ae
        ],
        [
          r,
          C,
          ae
        ],
        [
          r,
          v,
          ne
        ],
        [
          r,
          C,
          ne
        ],
        [
          r,
          v,
          se
        ],
        [
          r,
          C,
          se
        ],
        [
          r,
          v,
          le
        ],
        [
          r,
          C,
          le
        ]
      ];
      _e && re.push([
        r,
        v,
        me
      ], [
        r,
        C,
        me
      ], [
        r,
        v,
        ce
      ], [
        r,
        C,
        ce
      ]);
      for (const [t, o, n] of re) {
        const a = new Q(new ie(e.d_bolt / 2, e.d_bolt / 2, oe, 12), xe);
        a.rotation.z = Math.PI / 2, a.position.set(t, o, n), j.push(a);
        const m = new Q(new ie(e.d_bolt * 0.85, e.d_bolt * 0.85, e.d_bolt * 0.8, 6), pe);
        m.rotation.z = Math.PI / 2, m.position.set(t + oe / 2 + 5e-3, o, n), j.push(m);
      }
      const Me = Math.min(e.d_beam / 2, 3 * e.bf_beam), ge = new K({
        color: 16720384,
        emissive: 5574912,
        transparent: true,
        opacity: 0.7
      }), fe = new Q(new ze(Math.min(e.bf_beam, e.d_beam) * 0.25, 16, 12), ge);
      fe.position.set(i + Me, 0, 0), j.push(fe), c.objects3D.val = j;
    },
    computedLabels(e) {
      const c = Math.round(e.config), f = c === 0 ? "4E (Unstiffened)" : c === 1 ? "4ES (Stiffened)" : "8ES", _ = Math.PI * Math.pow(e.d_bolt / 2, 2), x = c === 2 ? 8 : 4, R = 0.75, N = 0.6 * e.Fu_bolt * _, p = R * N * (x / 2), B = e.bf_beam * e.tf_beam * (e.d_beam - e.tf_beam) + e.tw_beam * Math.pow(e.d_beam - 2 * e.tf_beam, 2) / 4, z = e.Fy * B, I = 1.1 * 1.2 * z, M = I / Math.max(e.d_beam, 0.1), V = Math.min(e.d_beam / 2, 3 * e.bf_beam), F = Math.sqrt(1.11 * 1.2 * z / (0.9 * e.Fy * (e.bp / 2)));
      return {
        "\u2500\u2500 Configuraci\xF3n AISC 358 \xA76 \u2500\u2500": "",
        Tipo: f,
        "Pernos totales": `${x} (${x / 2} arriba + ${x / 2} abajo)`,
        "\u2500\u2500 Geometr\xEDa End Plate \u2500\u2500": "",
        "Sh (r\xF3tula pl\xE1stica)": `${(V * 1e3).toFixed(0)} mm desde cara col`,
        "bp \xD7 hp \xD7 tp": `${(e.bp * 1e3).toFixed(0)} \xD7 ${(e.hp * 1e3).toFixed(0)} \xD7 ${(e.tp * 1e3).toFixed(0)} mm`,
        "pf bolt-flange": `${(e.pf * 1e3).toFixed(0)} mm`,
        "g gauge": `${(e.g * 1e3).toFixed(0)} mm`,
        "\u2500\u2500 Capacidades \u2500\u2500": "",
        "Mp viga": `${z.toFixed(0)} kN\xB7m`,
        "M_pr (Cpr\xB7Ry\xB7Mp)": `${I.toFixed(0)} kN\xB7m`,
        "T demanda": `${M.toFixed(0)} kN`,
        "\u2500\u2500 Espesor placa \xA76.7 \u2500\u2500": "",
        "tp requerido (Yc)": `${(F * 1e3).toFixed(1)} mm`,
        "tp dado": `${(e.tp * 1e3).toFixed(1)} mm`,
        "Ratio tp/tp_req": `${(e.tp / F).toFixed(2)} ${e.tp >= F ? "\u2713" : "\u2717"}`,
        "\u2500\u2500 Pernos \xA76.7 \u2500\u2500": "",
        [`A_b (\xD8 ${(e.d_bolt * 1e3).toFixed(0)} mm)`]: `${(_ * 1e6).toFixed(0)} mm\xB2`,
        "\u03C6Rn por perno": `${(R * N).toFixed(1)} kN`,
        "\u03A3\u03C6Rn (N/2 pernos por pat\xEDn)": `${p.toFixed(0)} kN`,
        "Ratio T/\u03A3\u03C6Rn": `${(M / p).toFixed(3)} ${M <= p ? "\u2713" : "\u2717"}`,
        "\u2500\u2500 Dictamen \u2500\u2500": "",
        Status: e.tp >= F && M <= p ? `\u2713 PASA ${f}` : "\u2717 REVISAR"
      };
    }
  };
});
export {
  __tla,
  Se as c
};
