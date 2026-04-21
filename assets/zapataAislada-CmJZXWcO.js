import { a as we, V as A, L as Oe, B as be, h as Ge } from "./Text-CBH-tcJP.js";
import { v as Re } from "./theme-CzzIlc4y.js";
import { a as $e } from "./analyze-ClLKGn9k.js";
import { m as Ce, d as Fe, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let et;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let V, D, Be, ke, y, Ee, He, Ne, qe, je, Ve, De;
  V = 25e6;
  D = 0.2;
  Be = V / (2 * (1 + D));
  ke = 24;
  y = 9.80665;
  Ee = [
    {
      name: "Custom",
      q_adm: 20,
      ks_factor: 10.5,
      su: 0,
      phi: 30,
      gamma: 18,
      N_SPT: 20,
      E_soil: 2e4
    },
    {
      name: "Arcilla blanda",
      q_adm: 5,
      ks_factor: 12,
      su: 25,
      phi: 0,
      gamma: 16,
      N_SPT: 3,
      E_soil: 3e3
    },
    {
      name: "Arcilla firme",
      q_adm: 15,
      ks_factor: 11,
      su: 75,
      phi: 0,
      gamma: 18,
      N_SPT: 10,
      E_soil: 15e3
    },
    {
      name: "Arcilla dura",
      q_adm: 30,
      ks_factor: 10,
      su: 150,
      phi: 0,
      gamma: 19,
      N_SPT: 20,
      E_soil: 3e4
    },
    {
      name: "Limo compacto",
      q_adm: 12,
      ks_factor: 10.5,
      su: 40,
      phi: 25,
      gamma: 18,
      N_SPT: 15,
      E_soil: 8e3
    },
    {
      name: "Arena suelta",
      q_adm: 10,
      ks_factor: 14,
      su: 0,
      phi: 28,
      gamma: 16,
      N_SPT: 10,
      E_soil: 1e4
    },
    {
      name: "Arena media",
      q_adm: 20,
      ks_factor: 13,
      su: 0,
      phi: 33,
      gamma: 18,
      N_SPT: 20,
      E_soil: 25e3
    },
    {
      name: "Arena densa",
      q_adm: 40,
      ks_factor: 12,
      su: 0,
      phi: 40,
      gamma: 20,
      N_SPT: 40,
      E_soil: 6e4
    },
    {
      name: "Grava densa",
      q_adm: 60,
      ks_factor: 12,
      su: 0,
      phi: 42,
      gamma: 22,
      N_SPT: 50,
      E_soil: 1e5
    },
    {
      name: "Roca alterada",
      q_adm: 100,
      ks_factor: 15,
      su: 0,
      phi: 45,
      gamma: 22,
      N_SPT: 100,
      E_soil: 5e5
    },
    {
      name: "Roca sana",
      q_adm: 200,
      ks_factor: 20,
      su: 0,
      phi: 50,
      gamma: 25,
      N_SPT: 100,
      E_soil: 2e6
    }
  ];
  He = 0.2;
  Ne = 0.035;
  qe = 8;
  je = new we({
    color: 16711731,
    linewidth: 2
  });
  Ve = new we({
    color: 52224,
    linewidth: 2
  });
  De = 0.04;
  et = {
    id: "zapata-aislada",
    name: "Zapata Aislada (Ecuador q_adm tonf/m\xB2)",
    category: "Cimentaciones",
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
      "bendingXX",
      "bendingYY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: true,
    params: {
      Lz: {
        default: 1.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Lz (m)"
      },
      Bz: {
        default: 1.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Bz (m)"
      },
      tz: {
        default: 0.3,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "tz (m)"
      },
      bc: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "bc columna (m)"
      },
      Hp: {
        default: 0.5,
        min: 0.3,
        max: 2,
        step: 0.1,
        label: "Hp pedestal (m)"
      },
      soilType: {
        default: 6,
        label: "Tipo de suelo",
        options: Object.fromEntries(Ee.map((s, n) => [
          s.name,
          n
        ]))
      },
      q_adm: {
        default: 20,
        min: 1,
        max: 100,
        step: 1,
        label: "q_adm (tonf/m\xB2)"
      },
      ks_factor: {
        default: 10.5,
        min: 5,
        max: 20,
        step: 0.5,
        label: "ks/q_adm (Bowles)"
      },
      su: {
        default: 0,
        min: 0,
        max: 300,
        step: 1,
        label: "su cohesi\xF3n (kPa)"
      },
      phi: {
        default: 33,
        min: 0,
        max: 55,
        step: 1,
        label: "\u03C6 fricci\xF3n (\xB0)"
      },
      gamma: {
        default: 18,
        min: 14,
        max: 26,
        step: 0.5,
        label: "\u03B3 suelo (kN/m\xB3)"
      },
      N_SPT: {
        default: 20,
        min: 0,
        max: 100,
        step: 1,
        label: "N SPT"
      },
      E_soil: {
        default: 25e3,
        min: 1e3,
        max: 2e6,
        step: 1e3,
        label: "E suelo (kPa)"
      },
      P: {
        default: 20,
        min: 1,
        max: 400,
        step: 1,
        label: "P axial (tonf)"
      },
      Mx: {
        default: 0,
        min: -1,
        max: 1,
        step: 0.05,
        label: "Mx (tonf\xB7m)"
      },
      My: {
        default: 0,
        min: -1,
        max: 1,
        step: 0.05,
        label: "My (tonf\xB7m)"
      },
      nSub: {
        default: 10,
        min: 3,
        max: 16,
        step: 1,
        label: "n subdivisiones"
      }
    },
    onParamChange(s, n) {
      if (s === "soilType") {
        const p = Math.round(n.soilType ?? 0);
        if (p > 0) {
          const c = Ee[p];
          n.q_adm = c.q_adm, n.ks_factor = c.ks_factor, n.su = c.su, n.phi = c.phi, n.gamma = c.gamma, n.N_SPT = c.N_SPT, n.E_soil = c.E_soil;
        }
      }
    },
    build(s, n) {
      var _a;
      const { Lz: p, Bz: c, tz: N, bc: _, Hp: q } = s, S = s.q_adm, ve = s.ks_factor, L = S * y * ve, Pe = s.P * y, Ie = s.Mx * y, Te = s.My * y, w = Math.round(s.nSub), O = p / 2, G = c / 2, r = [], f = [];
      for (let e = 0; e <= w; e++) r.push(p * e / w), f.push(c * e / w);
      r.includes(O) || (r.push(O), r.sort((e, t) => e - t)), f.includes(G) || (f.push(G), f.sort((e, t) => e - t));
      const X = [], v = [], Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), J = (e, t, a) => {
        const x = `${e.toFixed(4)},${t.toFixed(4)},${a.toFixed(4)}`;
        if (U.has(x)) return U.get(x);
        const l = X.length;
        return X.push([
          e,
          t,
          a
        ]), U.set(x, l), l;
      }, d = [];
      for (let e = 0; e < f.length; e++) {
        const t = [];
        for (let a = 0; a < r.length; a++) t.push(J(r[a], f[e], 0));
        d.push(t);
      }
      for (let e = 0; e < f.length - 1; e++) for (let t = 0; t < r.length - 1; t++) {
        const a = v.length;
        v.push([
          d[e][t],
          d[e][t + 1],
          d[e + 1][t + 1],
          d[e + 1][t]
        ]), ne.set(a, N), Z.set(a, V), Y.set(a, D), K.set(a, ke);
      }
      const ze = J(O, G, 0), ce = J(O, G, q), h = v.length;
      v.push([
        ze,
        ce
      ]), Z.set(h, V), Y.set(h, D), le.set(h, Be), te.set(h, _ * _), oe.set(h, _ ** 4 / 12), ae.set(h, _ ** 4 / 12), se.set(h, 0.14 * _ ** 4), K.set(h, ke), ie.set(h, {
        type: "rect",
        b: _,
        h: _
      });
      const me = /* @__PURE__ */ new Map();
      me.set(ce, [
        0,
        0,
        -Pe,
        Ie,
        Te,
        0
      ]);
      const de = p / w, re = c / w, M = [], W = [];
      for (let e = 0; e < f.length; e++) for (let t = 0; t < r.length; t++) {
        const a = de * re * (t === 0 || t === r.length - 1 ? 0.5 : 1) * (e === 0 || e === f.length - 1 ? 0.5 : 1);
        M.push({
          node: d[e][t],
          dof: 2,
          k: L * a
        }), W.push(d[e][t]);
      }
      const R = L * de * re * 0.01, Q = R * 0.01, P = d[0][0];
      M.push({
        node: P,
        dof: 0,
        k: R
      }), M.push({
        node: P,
        dof: 1,
        k: R
      }), M.push({
        node: P,
        dof: 3,
        k: Q
      }), M.push({
        node: P,
        dof: 4,
        k: Q
      }), M.push({
        node: P,
        dof: 5,
        k: Q
      }), M.push({
        node: d[f.length - 1][r.length - 1],
        dof: 1,
        k: R
      }), n.nodes.val = X.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), n.elements.val = v, n.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: me
      }, n.elementInputs.val = {
        elasticities: Z,
        poissonsRatios: Y,
        areas: te,
        momentsOfInertiaZ: oe,
        momentsOfInertiaY: ae,
        torsionalConstants: se,
        shearModuli: le,
        thicknesses: ne,
        densities: K,
        sectionShapes: ie
      };
      try {
        n.deformOutputs.val = Fe(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, M);
        const e = $e(n.nodes.val, n.elements.val, n.elementInputs.val, n.deformOutputs.val), t = n.deformOutputs.rawVal.deformations, a = /* @__PURE__ */ new Map();
        let x = 0;
        n.elements.rawVal.forEach((i, k) => {
          if (i.length !== 4) return;
          const E = [];
          for (const B of i) {
            const z = t == null ? void 0 : t.get(B), o = L * (z ? z[2] : 0) / y;
            E.push(o), o < x && (x = o);
          }
          a.set(k, E);
        }), e.pressure = a, n.analyzeOutputs.val = e;
        const l = Math.abs(x);
        let u = 1 / 0;
        a.forEach((i) => {
          for (const k of i) {
            const E = Math.abs(k);
            E < u && (u = E);
          }
        }), Number.isFinite(u) || (u = 0);
        const b = l / s.q_adm, m = V * N ** 3 / (12 * (1 - D ** 2)) / (L * p ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${l.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${u.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - u / (l || 1)) * 100).toFixed(1)}%
  q_adm = -${s.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${b.toFixed(2)}` + (b > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${m.toFixed(2)} (${m < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (e) {
        console.error("Solver error zapata aislada:", e);
      }
      const fe = n.deformOutputs.rawVal.deformations;
      let $ = 1e-9;
      for (const e of W) {
        const t = fe == null ? void 0 : fe.get(e);
        t && ($ = Math.max($, Math.abs(t[2])));
      }
      const pe = 0.07 * Math.sqrt(p ** 2 + c ** 2 + q ** 2) / $, ue = qe * 12, I = r.length, C = f.length, _e = 6, he = Math.max(1, Math.ceil((I - 1) / (_e - 1))), Ae = Math.max(1, Math.ceil((C - 1) / (_e - 1))), T = /* @__PURE__ */ new Set();
      for (let e = 0; e < C; e += Ae) {
        for (let t = 0; t < I; t += he) T.add(d[e][t]);
        T.add(d[e][I - 1]);
      }
      for (let e = 0; e < I; e += he) T.add(d[C - 1][e]);
      T.add(d[C - 1][I - 1]);
      const ee = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, ge = (e, t) => {
        const a = e ? pe * t : 0, l = -($ * Math.max(a, pe) + He), u = [];
        for (const b of W) {
          if (!T.has(b)) continue;
          const F = n.nodes.rawVal[b];
          if (!F) continue;
          const m = F[0], i = F[1], k = fe == null ? void 0 : fe.get(b), B = 0 + (k ? k[2] : 0) * a, z = B - l, H = [
            new A(m, i, l),
            new A(m, i, l + z * 0.05)
          ];
          for (let g = 0; g <= ue; g++) {
            const j = g / ue, Se = 2 * Math.PI * qe * j, Le = l + z * (0.05 + 0.9 * j);
            H.push(new A(m + Ne * Math.cos(Se), i + Ne * Math.sin(Se), Le));
          }
          H.push(new A(m, i, B)), u.push(new Oe(new be().setFromPoints(H), je));
          const o = De, Me = [
            [
              m - o,
              i - o,
              l - o * 2
            ],
            [
              m + o,
              i - o,
              l - o * 2
            ],
            [
              m + o,
              i + o,
              l - o * 2
            ],
            [
              m - o,
              i + o,
              l - o * 2
            ],
            [
              m - o,
              i - o,
              l
            ],
            [
              m + o,
              i - o,
              l
            ],
            [
              m + o,
              i + o,
              l
            ],
            [
              m - o,
              i + o,
              l
            ]
          ].map((g) => new A(g[0], g[1], g[2])), ye = [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              0
            ],
            [
              4,
              5
            ],
            [
              5,
              6
            ],
            [
              6,
              7
            ],
            [
              7,
              4
            ],
            [
              0,
              4
            ],
            [
              1,
              5
            ],
            [
              2,
              6
            ],
            [
              3,
              7
            ]
          ], xe = [];
          for (const [g, j] of ye) xe.push(Me[g], Me[j]);
          u.push(new Ge(new be().setFromPoints(xe), Ve));
        }
        return u;
      };
      ee ? Re.derive(() => {
        const e = ee.deformedShape.val, t = ee.displayScale.val, a = t === 0 ? 1 : t > 0 ? t : -1 / t;
        n.objects3D.val = ge(e, a);
      }) : n.objects3D.val = ge(true, 1);
    },
    runModal(s, n, p) {
      var _a, _b;
      const c = n.nodes.val, N = n.elements.val, _ = n.nodeInputs.val, q = n.elementInputs.val;
      if (!(!c.length || !N.length || !((_a = q.densities) == null ? void 0 : _a.size))) try {
        const S = Ce(c, N, _, q, 12);
        p.render(S, {
          title: `Zapata Aislada ${s.Lz}\xD7${s.Bz}m t=${s.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${s.bc}m  Hp=${s.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = S.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (S) {
        console.warn("Modal zapata error:", S.message);
      }
    }
  };
});
export {
  __tla,
  et as z
};
