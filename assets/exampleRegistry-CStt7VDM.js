import { a as $e, V as u, L as Be, B as Ae } from "./Text-CBH-tcJP.js";
import { v as lt } from "./theme-CzzIlc4y.js";
import { a as ct } from "./analyze-ClLKGn9k.js";
import { m as it, d as rt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as wt, __tla as __tla_1 } from "./plateThin-C30Q-WjQ.js";
import { p as kt, __tla as __tla_2 } from "./plateThick-DrHD17l3.js";
import { m as St, __tla as __tla_3 } from "./membrana-Darbd52d.js";
import { s as zt, __tla as __tla_4 } from "./shellThin-ORSIx719.js";
import { s as Nt, __tla as __tla_5 } from "./shellThick-BSU3qF0E.js";
import { e as Et, __tla as __tla_6 } from "./edificioAporticado-DG3xVeOI.js";
import { t as yt, __tla as __tla_7 } from "./trussGen-CYTV_Ioz.js";
import { b as It, __tla as __tla_8 } from "./barraAxial-Bnm-0MrG.js";
import { p as Pt, __tla as __tla_9 } from "./portico2D-kxfBcLlJ.js";
import { t as Tt, __tla as __tla_10 } from "./tower3D-tLRX3VEB.js";
import { g as Lt, __tla as __tla_11 } from "./galpon-BaNuuhBd.js";
import { e as qt, __tla as __tla_12 } from "./edifAcero-Dhwvq9Mc.js";
import { m as Bt, __tla as __tla_13 } from "./mezanine-BmEOOT1G.js";
let Ce, Dt, mn, Rt;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })()
]).then(async () => {
  let ye, Ie, Qe, Te, At, et, tt, Ct, $t, Ot, Le, qe, Ht, nt, Ee, ot, Gt, st, at, Vt, Ft, jt;
  ye = 25e6;
  Ie = 0.2;
  Qe = ye / (2 * (1 + Ie));
  Te = 24;
  At = 0.2;
  et = 0.035;
  tt = 8;
  Ct = 0.04;
  $t = new $e({
    color: 16711731,
    linewidth: 2
  });
  Ot = new $e({
    color: 52224,
    linewidth: 2
  });
  Rt = {
    id: "zapata-viga-amarre",
    name: "Zapata + Viga de Amarre + Pedestal",
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
      Lz1: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Lz1 (m)"
      },
      Bz1: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Bz1 (m)"
      },
      Lv: {
        default: 3,
        min: 1,
        max: 6,
        step: 0.1,
        label: "Lv (m)"
      },
      Bv: {
        default: 0.25,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "Bv (m)"
      },
      Hv: {
        default: 0.3,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "Hv canto (m)"
      },
      Lz2: {
        default: 2.5,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Lz2 (m)"
      },
      Bz2: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Bz2 (m)"
      },
      tz: {
        default: 0.5,
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
        default: 0.8,
        min: 0.3,
        max: 2,
        step: 0.1,
        label: "Hp pedestal (m)"
      },
      vigaLevel: {
        default: 0,
        min: 0,
        max: 1,
        step: 1,
        label: "Viga: 0=baja 1=alta"
      },
      ks: {
        default: 2e3,
        min: 500,
        max: 3e4,
        step: 500,
        label: "ks Winkler (kN/m\xB3)"
      },
      P1: {
        default: 800,
        min: 100,
        max: 2e3,
        step: 10,
        label: "P1 axial (kN)"
      },
      M1x: {
        default: 80,
        min: -500,
        max: 500,
        step: 10,
        label: "M1x (kN\xB7m)"
      },
      M1y: {
        default: 60,
        min: -500,
        max: 500,
        step: 10,
        label: "M1y (kN\xB7m)"
      },
      P2: {
        default: 1200,
        min: 100,
        max: 2500,
        step: 10,
        label: "P2 axial (kN)"
      },
      M2x: {
        default: 120,
        min: -500,
        max: 500,
        step: 10,
        label: "M2x (kN\xB7m)"
      },
      M2y: {
        default: 90,
        min: -500,
        max: 500,
        step: 10,
        label: "M2y (kN\xB7m)"
      },
      nSubX: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "nx subdiv"
      },
      nSubY: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "ny subdiv"
      }
    },
    build(a, t) {
      var _a;
      const f = a.Lz1, d = a.Bz1, q = a.Lv, h = a.Bv, S = a.Hv, b = a.Lz2, xe = a.Bz2, Pe = a.tz, z = a.bc, Oe = a.Hp, Re = a.P1, He = a.P2, B = a.ks, ce = a.M1x ?? 0, ie = a.M1y ?? 0, O = a.M2x ?? 0, R = a.M2y ?? 0, Y = Math.round(a.nSubX), V = Math.round(a.nSubY), te = 0.2, W = d / 2, re = f + q + b / 2, ne = xe / 2, ge = (W + ne) / 2;
      function oe(e, n, s, k) {
        const i = [
          e,
          ...s.filter((g) => g > e && g < n),
          n
        ].sort((g, v) => g - v), $ = [];
        for (let g = 0; g < i.length - 1; g++) {
          const v = i[g], r = i[g + 1], L = Math.max(1, Math.round((r - v) / ((n - e) / k)));
          for (let m = 0; m < L; m++) $.push(v + (r - v) * m / L);
        }
        return $.push(i[i.length - 1]), $;
      }
      const J = oe(0, f, [
        te
      ], Y), K = oe(0, d, [
        W,
        ge
      ], V), D = oe(f + q, f + q + b, [
        re
      ], Y), U = oe(0, xe, [
        ne,
        ge
      ], V), se = [], N = [], A = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), F = (e, n, s) => {
        const k = `${e.toFixed(4)},${n.toFixed(4)},${s.toFixed(4)}`;
        if (ue.has(k)) return ue.get(k);
        const i = se.length;
        return se.push([
          e,
          n,
          s
        ]), ue.set(k, i), i;
      }, E = [];
      for (let e = 0; e < K.length; e++) {
        const n = [];
        for (let s = 0; s < J.length; s++) n.push(F(J[s], K[e], 0));
        E.push(n);
      }
      for (let e = 0; e < K.length - 1; e++) for (let n = 0; n < J.length - 1; n++) {
        const s = N.length;
        N.push([
          E[e][n],
          E[e][n + 1],
          E[e + 1][n + 1],
          E[e + 1][n]
        ]), de.set(s, Pe), Q.set(s, ye), M.set(s, Ie), X.set(s, Te);
      }
      const y = [];
      for (let e = 0; e < U.length; e++) {
        const n = [];
        for (let s = 0; s < D.length; s++) n.push(F(D[s], U[e], 0));
        y.push(n);
      }
      for (let e = 0; e < U.length - 1; e++) for (let n = 0; n < D.length - 1; n++) {
        const s = N.length;
        N.push([
          y[e][n],
          y[e][n + 1],
          y[e + 1][n + 1],
          y[e + 1][n]
        ]), de.set(s, Pe), Q.set(s, ye), M.set(s, Ie), X.set(s, Te);
      }
      const Ge = Math.round(a.vigaLevel) === 0 ? Pe : Oe, Me = F(te, W, 0), fe = F(te, W, Ge), Ve = F(re, ne, 0), o = F(re, ne, Ge);
      for (const [e, n] of [
        [
          Me,
          fe
        ],
        [
          Ve,
          o
        ]
      ]) {
        const s = N.length;
        N.push([
          e,
          n
        ]), Q.set(s, ye), M.set(s, Ie), ee.set(s, Qe), me.set(s, z * z), pe.set(s, z ** 4 / 12), be.set(s, z ** 4 / 12), H.set(s, 0.14 * z ** 4), X.set(s, Te), ae.set(s, {
          type: "rect",
          b: z,
          h: z
        });
      }
      const l = N.length;
      N.push([
        fe,
        o
      ]), Q.set(l, ye), M.set(l, Ie), ee.set(l, Qe), me.set(l, h * S), pe.set(l, h * S ** 3 / 12), be.set(l, S * h ** 3 / 12), H.set(l, 0.28 * h * S ** 3), X.set(l, Te), ae.set(l, {
        type: "rect",
        b: h,
        h: S
      }), ve.set(fe, [
        0,
        0,
        -Re,
        ce,
        ie,
        0
      ]), ve.set(o, [
        0,
        0,
        -He,
        O,
        R,
        0
      ]);
      const c = f / Y, I = d / V, p = b / Y, C = xe / V, Z = 0.5, w = [], _ = [];
      for (let e = 0; e < K.length; e++) for (let n = 0; n < J.length; n++) {
        const s = c * I * (n === 0 || n === J.length - 1 ? 0.5 : 1) * (e === 0 || e === K.length - 1 ? 0.5 : 1), k = B * s, i = B * s * Z;
        w.push({
          node: E[e][n],
          dof: 0,
          k: i
        }), w.push({
          node: E[e][n],
          dof: 1,
          k: i
        }), w.push({
          node: E[e][n],
          dof: 2,
          k
        }), _.push(E[e][n]);
      }
      for (let e = 0; e < U.length; e++) for (let n = 0; n < D.length; n++) {
        const s = p * C * (n === 0 || n === D.length - 1 ? 0.5 : 1) * (e === 0 || e === U.length - 1 ? 0.5 : 1), k = B * s, i = B * s * Z;
        w.push({
          node: y[e][n],
          dof: 0,
          k: i
        }), w.push({
          node: y[e][n],
          dof: 1,
          k: i
        }), w.push({
          node: y[e][n],
          dof: 2,
          k
        }), _.push(y[e][n]);
      }
      const x = B * c * I * 1e-4;
      w.push({
        node: E[0][0],
        dof: 3,
        k: x
      }), w.push({
        node: E[0][0],
        dof: 4,
        k: x
      }), w.push({
        node: E[0][0],
        dof: 5,
        k: x
      }), t.nodes.val = se.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), t.elements.val = N, t.nodeInputs.val = {
        supports: A,
        loads: ve
      }, t.elementInputs.val = {
        elasticities: Q,
        poissonsRatios: M,
        areas: me,
        momentsOfInertiaZ: pe,
        momentsOfInertiaY: be,
        torsionalConstants: H,
        shearModuli: ee,
        thicknesses: de,
        densities: X,
        sectionShapes: ae
      };
      try {
        t.deformOutputs.val = rt(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, w);
        const e = ct(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), n = t.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        t.elements.rawVal.forEach((k, i) => {
          if (k.length !== 4) return;
          const $ = [];
          for (const g of k) {
            const v = n == null ? void 0 : n.get(g), r = v ? v[2] : 0;
            $.push(-B * r);
          }
          s.set(i, $);
        }), e.pressure = s, t.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const P = t.deformOutputs.rawVal.deformations;
      let T = 1e-9;
      for (const e of _) {
        const n = P == null ? void 0 : P.get(e);
        n && Number.isFinite(n[2]) && (T = Math.max(T, Math.abs(n[2])));
      }
      const we = new Set(_), he = tt * 12, _e = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Se = (e, n) => {
        const s = e ? n : 0, i = -(T * Math.max(s, 1) + At), $ = [];
        for (const g of _) {
          if (!we.has(g)) continue;
          const v = t.nodes.rawVal[g];
          if (!v) continue;
          const r = v[0], L = v[1], m = P == null ? void 0 : P.get(g), ze = (G) => Number.isFinite(G) ? G : 0, je = m ? ze(m[0]) : 0, De = m ? ze(m[1]) : 0, Xe = m ? ze(m[2]) : 0, Ne = r + je * s, Je = L + De * s, Ke = 0 + Xe * s, mt = Ke - i, Ze = (G) => [
            r + (Ne - r) * G,
            L + (Je - L) * G,
            i + mt * G
          ], [dt, pt, ut] = Ze(0), [ft, ht, _t] = Ze(0.05), Ye = [
            new u(dt, pt, ut),
            new u(ft, ht, _t)
          ];
          for (let G = 0; G <= he; G++) {
            const gt = 0.05 + 0.9 * (G / he), [vt, bt, Mt] = Ze(gt), Ue = 2 * Math.PI * tt * (G / he);
            Ye.push(new u(vt + et * Math.cos(Ue), bt + et * Math.sin(Ue), Mt));
          }
          Ye.push(new u(Ne, Je, Ke)), $.push(new Be(new Ae().setFromPoints(Ye), $t));
          const j = Ct, xt = [
            new u(r - j, L - j, i),
            new u(r + j, L - j, i),
            new u(r + j, L + j, i),
            new u(r - j, L + j, i),
            new u(r - j, L - j, i)
          ];
          $.push(new Be(new Ae().setFromPoints(xt), Ot));
        }
        return $;
      }, Fe = Ce.v;
      _e ? lt.derive(() => {
        const e = _e.deformedShape.val, n = _e.deformScale.val;
        Ce.v === Fe && (t.objects3D.val = Se(e, n));
      }) : t.objects3D.val = Se(true, 1);
    },
    runModal(a, t, f) {
      var _a, _b;
      const d = t.nodes.val, q = t.elements.val, h = t.nodeInputs.val, S = t.elementInputs.val;
      if (!(!d.length || !q.length || !((_a = S.densities) == null ? void 0 : _a.size))) try {
        const b = it(d, q, h, S, 12);
        f.render(b, {
          title: `Zapata + Viga amarre Lv=${a.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${a.Bv}\xD7${a.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = b.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (b) {
        console.warn("Modal zapata-viga error:", b.message);
      }
    }
  };
  Le = 25e6;
  qe = 0.2;
  Ht = Le / (2 * (1 + qe));
  nt = 24;
  Ee = 9.80665;
  ot = [
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
  Gt = 0.2;
  st = 0.035;
  at = 8;
  Vt = new $e({
    color: 16711731,
    linewidth: 2
  });
  Ft = new $e({
    color: 52224,
    linewidth: 2
  });
  jt = 0.04;
  Dt = {
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
        default: 2.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Lz (m)"
      },
      Bz: {
        default: 2.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Bz (m)"
      },
      tz: {
        default: 0.1,
        min: 0.05,
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
        options: Object.fromEntries(ot.map((a, t) => [
          a.name,
          t
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
      CM: {
        default: 15,
        min: 0,
        max: 300,
        step: 1,
        label: "CM axial (tonf)"
      },
      CV: {
        default: 5,
        min: 0,
        max: 200,
        step: 1,
        label: "CV axial (tonf)"
      },
      Mx: {
        default: 3,
        min: -20,
        max: 20,
        step: 0.5,
        label: "Mx (tonf\xB7m)"
      },
      My: {
        default: 2,
        min: -20,
        max: 20,
        step: 0.5,
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
    onParamChange(a, t) {
      if (a === "soilType") {
        const f = Math.round(t.soilType ?? 0);
        if (f > 0) {
          const d = ot[f];
          t.q_adm = d.q_adm, t.ks_factor = d.ks_factor, t.su = d.su, t.phi = d.phi, t.gamma = d.gamma, t.N_SPT = d.N_SPT, t.E_soil = d.E_soil;
        }
      }
    },
    build(a, t) {
      var _a;
      const { Lz: f, Bz: d, tz: q, bc: h, Hp: S } = a, b = a.q_adm, xe = a.ks_factor, z = b * Ee * xe, Oe = (a.CM + a.CV) * Ee, Re = a.Mx * Ee, He = a.My * Ee, B = Math.round(a.nSub), ce = f / 2, ie = d / 2, O = [], R = [];
      for (let o = 0; o <= B; o++) O.push(f * o / B), R.push(d * o / B);
      O.includes(ce) || (O.push(ce), O.sort((o, l) => o - l)), R.includes(ie) || (R.push(ie), R.sort((o, l) => o - l));
      const Y = [], V = [], te = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), N = (o, l, c) => {
        const I = `${o.toFixed(4)},${l.toFixed(4)},${c.toFixed(4)}`;
        if (se.has(I)) return se.get(I);
        const p = Y.length;
        return Y.push([
          o,
          l,
          c
        ]), se.set(I, p), p;
      }, A = [];
      for (let o = 0; o < R.length; o++) {
        const l = [];
        for (let c = 0; c < O.length; c++) l.push(N(O[c], R[o], 0));
        A.push(l);
      }
      for (let o = 0; o < R.length - 1; o++) for (let l = 0; l < O.length - 1; l++) {
        const c = V.length;
        V.push([
          A[o][l],
          A[o][l + 1],
          A[o + 1][l + 1],
          A[o + 1][l]
        ]), ne.set(c, q), te.set(c, Le), W.set(c, qe), D.set(c, nt);
      }
      const ve = N(ce, ie, 0), Q = N(ce, ie, S), M = V.length;
      V.push([
        ve,
        Q
      ]), te.set(M, Le), W.set(M, qe), K.set(M, Ht), re.set(M, h * h), ge.set(M, h ** 4 / 12), oe.set(M, h ** 4 / 12), J.set(M, 0.14 * h ** 4), D.set(M, nt), U.set(M, {
        type: "rect",
        b: h,
        h
      });
      const me = /* @__PURE__ */ new Map();
      me.set(Q, [
        0,
        0,
        -Oe,
        Re,
        He,
        0
      ]);
      const de = f / B, pe = d / B, be = 0.5, H = [], ee = [];
      for (let o = 0; o < R.length; o++) for (let l = 0; l < O.length; l++) {
        const c = de * pe * (l === 0 || l === O.length - 1 ? 0.5 : 1) * (o === 0 || o === R.length - 1 ? 0.5 : 1), I = z * c, p = z * c * be;
        H.push({
          node: A[o][l],
          dof: 0,
          k: p
        }), H.push({
          node: A[o][l],
          dof: 1,
          k: p
        }), H.push({
          node: A[o][l],
          dof: 2,
          k: I
        }), ee.push(A[o][l]);
      }
      const X = z * de * pe * 1e-4, ae = A[0][0];
      H.push({
        node: ae,
        dof: 3,
        k: X
      }), H.push({
        node: ae,
        dof: 4,
        k: X
      }), H.push({
        node: ae,
        dof: 5,
        k: X
      }), t.nodes.val = Y.map((o) => [
        o[0],
        o[1],
        o[2]
      ]), t.elements.val = V, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: me
      }, t.elementInputs.val = {
        elasticities: te,
        poissonsRatios: W,
        areas: re,
        momentsOfInertiaZ: ge,
        momentsOfInertiaY: oe,
        torsionalConstants: J,
        shearModuli: K,
        thicknesses: ne,
        densities: D,
        sectionShapes: U
      };
      try {
        t.deformOutputs.val = rt(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, H);
        const o = ct(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), l = t.deformOutputs.rawVal.deformations, c = /* @__PURE__ */ new Map();
        let I = 0;
        t.elements.rawVal.forEach((x, P) => {
          if (x.length !== 4) return;
          const T = [];
          for (const we of x) {
            const ke = l == null ? void 0 : l.get(we), le = z * (ke ? ke[2] : 0) / Ee;
            T.push(le), le < I && (I = le);
          }
          c.set(P, T);
        }), o.pressure = c, t.analyzeOutputs.val = o;
        const p = Math.abs(I);
        let C = 1 / 0;
        c.forEach((x) => {
          for (const P of x) {
            const T = Math.abs(P);
            T < C && (C = T);
          }
        }), Number.isFinite(C) || (C = 0);
        const Z = p / a.q_adm, _ = Le * q ** 3 / (12 * (1 - qe ** 2)) / (z * f ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${p.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${C.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - C / (p || 1)) * 100).toFixed(1)}%
  q_adm = -${a.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${Z.toFixed(2)}` + (Z > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${_.toFixed(2)} (${_ < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (o) {
        console.error("Solver error zapata aislada:", o);
      }
      const ue = t.deformOutputs.rawVal.deformations;
      let F = 1e-9;
      for (const o of ee) {
        const l = ue == null ? void 0 : ue.get(o);
        l && Number.isFinite(l[2]) && (F = Math.max(F, Math.abs(l[2])));
      }
      const y = at * 12, We = new Set(ee), Me = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, fe = (o, l) => {
        const c = o ? l : 0, p = -(F * Math.max(c, 1) + Gt), C = [];
        for (const Z of ee) {
          if (!We.has(Z)) continue;
          const w = t.nodes.rawVal[Z];
          if (!w) continue;
          const _ = w[0], x = w[1], P = ue == null ? void 0 : ue.get(Z), T = (m) => Number.isFinite(m) ? m : 0, we = P ? T(P[0]) : 0, ke = P ? T(P[1]) : 0, he = P ? T(P[2]) : 0, le = _ + we * c, _e = x + ke * c, Se = 0 + he * c, Fe = Se - p, e = (m) => [
            _ + (le - _) * m,
            x + (_e - x) * m,
            p + Fe * m
          ], [n, s, k] = e(0), [i, $, g] = e(0.05), v = [
            new u(n, s, k),
            new u(i, $, g)
          ];
          for (let m = 0; m <= y; m++) {
            const ze = 0.05 + 0.9 * (m / y), [je, De, Xe] = e(ze), Ne = 2 * Math.PI * at * (m / y);
            v.push(new u(je + st * Math.cos(Ne), De + st * Math.sin(Ne), Xe));
          }
          v.push(new u(le, _e, Se)), C.push(new Be(new Ae().setFromPoints(v), Vt));
          const r = jt, L = [
            new u(_ - r, x - r, p),
            new u(_ + r, x - r, p),
            new u(_ + r, x + r, p),
            new u(_ - r, x + r, p),
            new u(_ - r, x - r, p)
          ];
          C.push(new Be(new Ae().setFromPoints(L), Ft));
        }
        return C;
      }, Ve = Ce.v;
      Me ? lt.derive(() => {
        const o = Me.deformedShape.val, l = Me.deformScale.val;
        Ce.v === Ve && (t.objects3D.val = fe(o, l));
      }) : t.objects3D.val = fe(true, 1);
    },
    runModal(a, t, f) {
      var _a, _b;
      const d = t.nodes.val, q = t.elements.val, h = t.nodeInputs.val, S = t.elementInputs.val;
      if (!(!d.length || !q.length || !((_a = S.densities) == null ? void 0 : _a.size))) try {
        const b = it(d, q, h, S, 12);
        f.render(b, {
          title: `Zapata Aislada ${a.Lz}\xD7${a.Bz}m t=${a.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${a.bc}m  Hp=${a.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = b.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (b) {
        console.warn("Modal zapata error:", b.message);
      }
    }
  };
  Ce = {
    v: 0
  };
  mn = [
    It,
    yt,
    Pt,
    Tt,
    Lt,
    Et,
    qt,
    Bt,
    wt,
    kt,
    St,
    zt,
    Nt,
    Dt,
    Rt
  ];
});
export {
  __tla,
  Ce as a,
  Dt as b,
  mn as e,
  Rt as z
};
