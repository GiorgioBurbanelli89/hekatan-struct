import { a as Ye, V as x, L as je, B as Xe } from "./Text-CBH-tcJP.js";
import { v as mt } from "./theme-CzzIlc4y.js";
import { a as dt } from "./analyze-ClLKGn9k.js";
import { m as ft, d as ut, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as vt, __tla as __tla_1 } from "./plateThin-C30Q-WjQ.js";
import { p as kt, __tla as __tla_2 } from "./plateThick-DrHD17l3.js";
import { m as Lt, __tla as __tla_3 } from "./membrana-Darbd52d.js";
import { s as Pt, __tla as __tla_4 } from "./shellThin-ORSIx719.js";
import { s as wt, __tla as __tla_5 } from "./shellThick-BSU3qF0E.js";
import { e as yt, __tla as __tla_6 } from "./edificioAporticado-DG3xVeOI.js";
import { t as zt, __tla as __tla_7 } from "./trussGen-CYTV_Ioz.js";
import { b as Nt, __tla as __tla_8 } from "./barraAxial-Bnm-0MrG.js";
import { p as Dt, __tla as __tla_9 } from "./portico2D-kxfBcLlJ.js";
import { t as Et, __tla as __tla_10 } from "./tower3D-tLRX3VEB.js";
import { g as Ct, __tla as __tla_11 } from "./galpon-BaNuuhBd.js";
import { e as It, __tla as __tla_12 } from "./edifAcero-Dhwvq9Mc.js";
import { m as qt, __tla as __tla_13 } from "./mezanine-BmEOOT1G.js";
let Ze, jt, ro, Ft;
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
  let Ie, qe, nt, Ve, $t, at, st, Tt, Bt, At, $e, Te, Ot, lt, Le, it, Rt, ct, rt, Gt, Ht, Vt;
  Ie = 25e6;
  qe = 0.2;
  nt = Ie / (2 * (1 + qe));
  Ve = 24;
  $t = 0.2;
  at = 0.035;
  st = 8;
  Tt = 0.04;
  Bt = new Ye({
    color: 16711731,
    linewidth: 2
  });
  At = new Ye({
    color: 52224,
    linewidth: 2
  });
  Ft = {
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
    build(e, t) {
      var _a;
      const m = e.Lz1, c = e.Bz1, w = e.Lv, p = e.Bv, g = e.Hv, h = e.Lz2, oe = e.Bz2, _e = e.tz, v = e.bc, re = e.Hp, ne = e.P1, q = e.P2, S = e.ks, k = e.M1x ?? 0, y = e.M1y ?? 0, F = e.M2x ?? 0, me = e.M2y ?? 0, Y = Math.round(e.nSubX), z = Math.round(e.nSubY), J = 0.2, K = c / 2, ae = m + w + h / 2, N = oe / 2, O = (K + N) / 2;
      function se(o, n, s, f) {
        const i = [
          o,
          ...s.filter((u) => u > o && u < n),
          n
        ].sort((u, b) => u - b), P = [];
        for (let u = 0; u < i.length - 1; u++) {
          const b = i[u], _ = i[u + 1], B = Math.max(1, Math.round((_ - b) / ((n - o) / f)));
          for (let V = 0; V < B; V++) P.push(b + (_ - b) * V / B);
        }
        return P.push(i[i.length - 1]), P;
      }
      const j = se(0, m, [
        J
      ], Y), U = se(0, c, [
        K,
        O
      ], z), Q = se(m + w, m + w + h, [
        ae
      ], Y), le = se(0, oe, [
        N,
        O
      ], z), he = [], R = [], Be = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), te = (o, n, s) => {
        const f = `${o.toFixed(4)},${n.toFixed(4)},${s.toFixed(4)}`;
        if (Se.has(f)) return Se.get(f);
        const i = he.length;
        return he.push([
          o,
          n,
          s
        ]), Se.set(f, i), i;
      }, E = [];
      for (let o = 0; o < U.length; o++) {
        const n = [];
        for (let s = 0; s < j.length; s++) n.push(te(j[s], U[o], 0));
        E.push(n);
      }
      for (let o = 0; o < U.length - 1; o++) for (let n = 0; n < j.length - 1; n++) {
        const s = R.length;
        R.push([
          E[o][n],
          E[o][n + 1],
          E[o + 1][n + 1],
          E[o + 1][n]
        ]), de.set(s, _e), ie.set(s, Ie), ee.set(s, qe), L.set(s, Ve);
      }
      const M = [];
      for (let o = 0; o < le.length; o++) {
        const n = [];
        for (let s = 0; s < Q.length; s++) n.push(te(Q[s], le[o], 0));
        M.push(n);
      }
      for (let o = 0; o < le.length - 1; o++) for (let n = 0; n < Q.length - 1; n++) {
        const s = R.length;
        R.push([
          M[o][n],
          M[o][n + 1],
          M[o + 1][n + 1],
          M[o + 1][n]
        ]), de.set(s, _e), ie.set(s, Ie), ee.set(s, qe), L.set(s, Ve);
      }
      const ve = Math.round(e.vigaLevel) === 0 ? _e : re, ye = te(J, K, 0), ke = te(J, K, ve), ze = te(ae, N, 0), Ae = te(ae, N, ve);
      for (const [o, n] of [
        [
          ye,
          ke
        ],
        [
          ze,
          Ae
        ]
      ]) {
        const s = R.length;
        R.push([
          o,
          n
        ]), ie.set(s, Ie), ee.set(s, qe), be.set(s, nt), Me.set(s, v * v), fe.set(s, v ** 4 / 12), D.set(s, v ** 4 / 12), Pe.set(s, 0.14 * v ** 4), L.set(s, Ve), ge.set(s, {
          type: "rect",
          b: v,
          h: v
        });
      }
      const $ = R.length;
      R.push([
        ke,
        Ae
      ]), ie.set($, Ie), ee.set($, qe), be.set($, nt), Me.set($, p * g), fe.set($, p * g ** 3 / 12), D.set($, g * p ** 3 / 12), Pe.set($, 0.28 * p * g ** 3), L.set($, Ve), ge.set($, {
        type: "rect",
        b: p,
        h: g
      }), xe.set(ke, [
        0,
        0,
        -ne,
        k,
        y,
        0
      ]), xe.set(Ae, [
        0,
        0,
        -q,
        F,
        me,
        0
      ]);
      const Fe = m / Y, We = c / z, Ne = h / Y, Oe = oe / z, Re = 0.5, a = [], l = [];
      for (let o = 0; o < U.length; o++) for (let n = 0; n < j.length; n++) {
        const s = Fe * We * (n === 0 || n === j.length - 1 ? 0.5 : 1) * (o === 0 || o === U.length - 1 ? 0.5 : 1), f = S * s, i = S * s * Re;
        a.push({
          node: E[o][n],
          dof: 0,
          k: i
        }), a.push({
          node: E[o][n],
          dof: 1,
          k: i
        }), a.push({
          node: E[o][n],
          dof: 2,
          k: f
        }), l.push(E[o][n]);
      }
      for (let o = 0; o < le.length; o++) for (let n = 0; n < Q.length; n++) {
        const s = Ne * Oe * (n === 0 || n === Q.length - 1 ? 0.5 : 1) * (o === 0 || o === le.length - 1 ? 0.5 : 1), f = S * s, i = S * s * Re;
        a.push({
          node: M[o][n],
          dof: 0,
          k: i
        }), a.push({
          node: M[o][n],
          dof: 1,
          k: i
        }), a.push({
          node: M[o][n],
          dof: 2,
          k: f
        }), l.push(M[o][n]);
      }
      const r = S * Fe * We * 1e-4;
      a.push({
        node: E[0][0],
        dof: 3,
        k: r
      }), a.push({
        node: E[0][0],
        dof: 4,
        k: r
      }), a.push({
        node: E[0][0],
        dof: 5,
        k: r
      }), t.nodes.val = he.map((o) => [
        o[0],
        o[1],
        o[2]
      ]), t.elements.val = R, t.nodeInputs.val = {
        supports: Be,
        loads: xe
      }, t.elementInputs.val = {
        elasticities: ie,
        poissonsRatios: ee,
        areas: Me,
        momentsOfInertiaZ: fe,
        momentsOfInertiaY: D,
        torsionalConstants: Pe,
        shearModuli: be,
        thicknesses: de,
        densities: L,
        sectionShapes: ge
      };
      try {
        t.deformOutputs.val = ut(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, a);
        const o = dt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), n = t.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        t.elements.rawVal.forEach((f, i) => {
          if (f.length !== 4) return;
          const P = [];
          for (const u of f) {
            const b = n == null ? void 0 : n.get(u), _ = b ? b[2] : 0;
            P.push(-S * _);
          }
          s.set(i, P);
        }), o.pressure = s, t.analyzeOutputs.val = o;
      } catch (o) {
        console.error("Solver error:", o);
      }
      const T = t.deformOutputs.rawVal.deformations;
      let d = 1e-9;
      for (const o of l) {
        const n = T == null ? void 0 : T.get(o);
        n && Number.isFinite(n[2]) && (d = Math.max(d, Math.abs(n[2])));
      }
      const G = new Set(l), ce = st * 12, C = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, X = (o, n) => {
        const s = o ? n : 0, i = -(d * Math.max(s, 1) + $t), P = [];
        for (const u of l) {
          if (!G.has(u)) continue;
          const b = t.nodes.rawVal[u];
          if (!b) continue;
          const _ = b[0], B = b[1], V = T == null ? void 0 : T.get(u), De = (Z) => Number.isFinite(Z) ? Z : 0, Je = V ? De(V[0]) : 0, Ke = V ? De(V[1]) : 0, Ee = V ? De(V[2]) : 0, A = _ + Je * s, Ge = B + Ke * s, I = 0 + Ee * s, Ue = I - i, Ce = (Z) => [
            _ + (A - _) * Z,
            B + (Ge - B) * Z,
            i + Ue * Z
          ], [Qe, et, He] = Ce(0), [pt, _t, ht] = Ce(0.05), tt = [
            new x(Qe, et, He),
            new x(pt, _t, ht)
          ];
          for (let Z = 0; Z <= ce; Z++) {
            const Mt = 0.05 + 0.9 * (Z / ce), [bt, gt, St] = Ce(Mt), ot = 2 * Math.PI * st * (Z / ce);
            tt.push(new x(bt + at * Math.cos(ot), gt + at * Math.sin(ot), St));
          }
          tt.push(new x(A, Ge, I)), P.push(new je(new Xe().setFromPoints(tt), Bt));
          const W = Tt, xt = [
            new x(_ - W, B - W, i),
            new x(_ + W, B - W, i),
            new x(_ + W, B + W, i),
            new x(_ - W, B + W, i),
            new x(_ - W, B - W, i)
          ];
          P.push(new je(new Xe().setFromPoints(xt), At));
        }
        return P;
      }, pe = Ze.v;
      C ? mt.derive(() => {
        const o = C.deformedShape.val, n = C.deformScale.val;
        Ze.v === pe && (t.objects3D.val = X(o, n));
      }) : t.objects3D.val = X(true, 1);
    },
    runModal(e, t, m) {
      var _a, _b;
      const c = t.nodes.val, w = t.elements.val, p = t.nodeInputs.val, g = t.elementInputs.val;
      if (!(!c.length || !w.length || !((_a = g.densities) == null ? void 0 : _a.size))) try {
        const h = ft(c, w, p, g, 12);
        m.render(h, {
          title: `Zapata + Viga amarre Lv=${e.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${e.Bv}\xD7${e.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = h.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (h) {
        console.warn("Modal zapata-viga error:", h.message);
      }
    }
  };
  $e = 25e6;
  Te = 0.2;
  Ot = $e / (2 * (1 + Te));
  lt = 24;
  Le = 9.80665;
  it = [
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
  Rt = 0.2;
  ct = 0.035;
  rt = 8;
  Gt = new Ye({
    color: 16711731,
    linewidth: 2
  });
  Ht = new Ye({
    color: 52224,
    linewidth: 2
  });
  Vt = 0.04;
  jt = {
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
        options: Object.fromEntries(it.map((e, t) => [
          e.name,
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
      analysisMode: {
        default: 4,
        label: "Modo de an\xE1lisis",
        folder: "Cargas \u2014 Modo",
        options: {
          "1. Carga simple (P, Mx, My)": 0,
          "2. Solo Carga Muerta (D)": 1,
          "3. Solo Carga Viva (L)": 2,
          "4. Solo Sobrecarga (S)": 3,
          "5. Combinaci\xF3n D+L+S (factores)": 4
        }
      },
      P_simple: {
        default: 20,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Simple"
      },
      Mx_simple: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Simple"
      },
      My_simple: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Simple"
      },
      P_D: {
        default: 10,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Patr\xF3n D (Muerta)"
      },
      Mx_D: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n D (Muerta)"
      },
      My_D: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n D (Muerta)"
      },
      P_L: {
        default: 5,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Patr\xF3n L (Viva)"
      },
      Mx_L: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n L (Viva)"
      },
      My_L: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n L (Viva)"
      },
      P_S: {
        default: 0,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Patr\xF3n S (Sobrec.)"
      },
      Mx_S: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n S (Sobrec.)"
      },
      My_S: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n S (Sobrec.)"
      },
      combo: {
        default: 0,
        label: "Combinaci\xF3n (solo modo 5)",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S",
        options: {
          "1.2D + 1.6L (gravitatoria)": 0,
          "1.4D": 1,
          "1.2D + 1.0L": 2,
          "1.2D + 1.0L + 0.5S": 3,
          "1.2D + 1.6S + 0.5L": 4,
          "Servicio 1.0D + 1.0L": 5,
          "1.0D (solo D)": 6,
          "1.0L (solo L)": 7,
          "1.0S (solo S)": 8,
          "S\xEDsmica 1.2D+1.0L+1.0E": 9,
          "S\xEDsmica 0.9D + 1.0E": 10,
          Custom: 11
        }
      },
      fD: {
        default: 1.2,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor D",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S"
      },
      fL: {
        default: 1.6,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor L",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S"
      },
      fS: {
        default: 0,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor S (o E)",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S"
      },
      nSub: {
        default: 10,
        min: 3,
        max: 16,
        step: 1,
        label: "n subdivisiones"
      }
    },
    computedLabels(e, t) {
      var _a;
      const c = (e.q_adm ?? 20) * Le * (e.ks_factor ?? 10.5), w = e.tz ?? 0.15, p = e.Lz ?? 2.5, g = $e * w ** 3 / (12 * (1 - Te ** 2)), h = g / (c * p ** 4), oe = Math.round(e.analysisMode ?? 4), _e = [
        "Simple",
        "Solo D",
        "Solo L",
        "Solo S",
        "Combinaci\xF3n D+L+S"
      ], v = e.fD ?? 1.2, re = e.fL ?? 1.6, ne = e.fS ?? 0;
      let q = 0;
      switch (oe) {
        case 0:
          q = e.P_simple ?? 0;
          break;
        case 1:
          q = e.P_D ?? 0;
          break;
        case 2:
          q = e.P_L ?? 0;
          break;
        case 3:
          q = e.P_S ?? 0;
          break;
        case 4:
        default:
          q = v * (e.P_D ?? 0) + re * (e.P_L ?? 0) + ne * (e.P_S ?? 0);
      }
      let S = 0, k = 0;
      const y = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (y && y.size) {
        for (const Y of y.values()) for (const z of Y) z < S && (S = z), (z < k || k === 0) && (k = z);
        let me = 1 / 0;
        for (const Y of y.values()) for (const z of Y) Math.abs(z) < me && (me = Math.abs(z));
        k = -me;
      }
      const F = Math.abs(S) / (e.q_adm || 1);
      return {
        "Modo activo": _e[oe] ?? "?",
        "ks (kN/m\xB3)": c.toFixed(0),
        "D (kN\xB7m)": g.toFixed(1),
        "k_r (Biot)": h.toFixed(3) + (h < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": q.toFixed(2),
        "q_max (tonf/m\xB2)": S.toFixed(2),
        "q_min (tonf/m\xB2)": k.toFixed(2),
        "q/q_adm": F.toFixed(2) + (F > 1 ? " \u26A0" : " \u2713")
      };
    },
    onParamChange(e, t) {
      if (e === "soilType") {
        const m = Math.round(t.soilType ?? 0);
        if (m > 0) {
          const c = it[m];
          t.q_adm = c.q_adm, t.ks_factor = c.ks_factor, t.su = c.su, t.phi = c.phi, t.gamma = c.gamma, t.N_SPT = c.N_SPT, t.E_soil = c.E_soil;
        }
      }
      if (e === "combo") {
        const m = Math.round(t.combo ?? 0), c = [
          [
            1.2,
            1.6,
            0
          ],
          [
            1.4,
            0,
            0
          ],
          [
            1.2,
            1,
            0
          ],
          [
            1.2,
            1,
            0.5
          ],
          [
            1.2,
            0.5,
            1.6
          ],
          [
            1,
            1,
            0
          ],
          [
            1,
            0,
            0
          ],
          [
            0,
            1,
            0
          ],
          [
            0,
            0,
            1
          ],
          [
            1.2,
            1,
            1
          ],
          [
            0.9,
            0,
            1
          ]
        ];
        m >= 0 && m < c.length && ([t.fD, t.fL, t.fS] = c[m]);
      }
    },
    build(e, t) {
      var _a;
      const { Lz: m, Bz: c, tz: w, bc: p, Hp: g } = e, h = e.q_adm, oe = e.ks_factor, v = h * Le * oe, re = Math.round(e.analysisMode ?? 4), ne = e.fD ?? 1.2, q = e.fL ?? 1.6, S = e.fS ?? 0;
      let k = 0, y = 0, F = 0;
      switch (re) {
        case 0:
          k = e.P_simple ?? 0, y = e.Mx_simple ?? 0, F = e.My_simple ?? 0;
          break;
        case 1:
          k = e.P_D ?? 0, y = e.Mx_D ?? 0, F = e.My_D ?? 0;
          break;
        case 2:
          k = e.P_L ?? 0, y = e.Mx_L ?? 0, F = e.My_L ?? 0;
          break;
        case 3:
          k = e.P_S ?? 0, y = e.Mx_S ?? 0, F = e.My_S ?? 0;
          break;
        case 4:
        default:
          k = ne * (e.P_D ?? 0) + q * (e.P_L ?? 0) + S * (e.P_S ?? 0), y = ne * (e.Mx_D ?? 0) + q * (e.Mx_L ?? 0) + S * (e.Mx_S ?? 0), F = ne * (e.My_D ?? 0) + q * (e.My_L ?? 0) + S * (e.My_S ?? 0);
          break;
      }
      const me = k * Le, Y = y * Le, z = F * Le, J = Math.round(e.nSub), K = m / 2, ae = c / 2, N = [], O = [];
      for (let a = 0; a <= J; a++) N.push(m * a / J), O.push(c * a / J);
      N.includes(K) || (N.push(K), N.sort((a, l) => a - l)), O.includes(ae) || (O.push(ae), O.sort((a, l) => a - l));
      const se = [], j = [], U = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), fe = (a, l, r) => {
        const T = `${a.toFixed(4)},${l.toFixed(4)},${r.toFixed(4)}`;
        if (de.has(T)) return de.get(T);
        const d = se.length;
        return se.push([
          a,
          l,
          r
        ]), de.set(T, d), d;
      }, D = [];
      for (let a = 0; a < O.length; a++) {
        const l = [];
        for (let r = 0; r < N.length; r++) l.push(fe(N[r], O[a], 0));
        D.push(l);
      }
      for (let a = 0; a < O.length - 1; a++) for (let l = 0; l < N.length - 1; l++) {
        const r = j.length;
        j.push([
          D[a][l],
          D[a][l + 1],
          D[a + 1][l + 1],
          D[a + 1][l]
        ]), he.set(r, w), U.set(r, $e), Q.set(r, Te), ee.set(r, lt);
      }
      const Pe = fe(K, ae, 0), be = fe(K, ae, g), L = j.length;
      j.push([
        Pe,
        be
      ]), U.set(L, $e), Q.set(L, Te), ie.set(L, Ot), le.set(L, p * p), R.set(L, p ** 4 / 12), Be.set(L, p ** 4 / 12), xe.set(L, 0.14 * p ** 4), ee.set(L, lt), Me.set(L, {
        type: "rect",
        b: p,
        h: p
      });
      const ge = /* @__PURE__ */ new Map();
      ge.set(be, [
        0,
        0,
        -me,
        Y,
        z,
        0
      ]);
      const Se = m / J, te = c / J, E = 0.5, M = [], we = [];
      for (let a = 0; a < O.length; a++) for (let l = 0; l < N.length; l++) {
        const r = Se * te * (l === 0 || l === N.length - 1 ? 0.5 : 1) * (a === 0 || a === O.length - 1 ? 0.5 : 1), T = v * r, d = v * r * E;
        M.push({
          node: D[a][l],
          dof: 0,
          k: d
        }), M.push({
          node: D[a][l],
          dof: 1,
          k: d
        }), M.push({
          node: D[a][l],
          dof: 2,
          k: T
        }), we.push(D[a][l]);
      }
      const ve = v * Se * te * 1e-4, ye = D[0][0];
      M.push({
        node: ye,
        dof: 3,
        k: ve
      }), M.push({
        node: ye,
        dof: 4,
        k: ve
      }), M.push({
        node: ye,
        dof: 5,
        k: ve
      }), t.nodes.val = se.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), t.elements.val = j, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: ge
      }, t.elementInputs.val = {
        elasticities: U,
        poissonsRatios: Q,
        areas: le,
        momentsOfInertiaZ: R,
        momentsOfInertiaY: Be,
        torsionalConstants: xe,
        shearModuli: ie,
        thicknesses: he,
        densities: ee,
        sectionShapes: Me
      };
      try {
        t.deformOutputs.val = ut(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, M);
        const a = dt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), l = t.deformOutputs.rawVal.deformations, r = /* @__PURE__ */ new Map();
        let T = 0;
        t.elements.rawVal.forEach((s, f) => {
          if (s.length !== 4) return;
          const i = [];
          for (const P of s) {
            const u = l == null ? void 0 : l.get(P), _ = v * (u ? u[2] : 0) / Le;
            i.push(_), _ < T && (T = _);
          }
          r.set(f, i);
        }), a.pressure = r, t.analyzeOutputs.val = a;
        const d = Math.abs(T);
        let G = 1 / 0;
        r.forEach((s) => {
          for (const f of s) {
            const i = Math.abs(f);
            i < G && (G = i);
          }
        }), Number.isFinite(G) || (G = 0);
        const ue = d / e.q_adm, H = $e * w ** 3 / (12 * (1 - Te ** 2)) / (v * m ** 4), C = [
          "Simple P/Mx/My",
          "Solo D (Muerta)",
          "Solo L (Viva)",
          "Solo S (Sobrecarga)",
          "Combinaci\xF3n D+L+S"
        ], X = [
          "1.2D+1.6L",
          "1.4D",
          "1.2D+1.0L",
          "1.2D+1.0L+0.5S",
          "1.2D+1.6S+0.5L",
          "D+L serv.",
          "1.0D",
          "1.0L",
          "1.0S",
          "1.2D+1.0L+1.0E",
          "0.9D+1.0E",
          "Custom"
        ], pe = C[re] ?? "?", o = X[Math.round(e.combo ?? 0)] ?? "?", n = re === 4 ? `  (${o}: fD=${ne}, fL=${q}, fS=${S})` : "";
        console.log(`[Zapata Aislada]  Modo: ${pe}${n}
  Cargas totales: P=${k.toFixed(2)} tonf, Mx=${y.toFixed(2)} tonf\xB7m, My=${F.toFixed(2)} tonf\xB7m
  Patrones: D(${e.P_D}, ${e.Mx_D}, ${e.My_D}) L(${e.P_L}, ${e.Mx_L}, ${e.My_L}) S(${e.P_S}, ${e.Mx_S}, ${e.My_S})
  q_max (centro) = -${d.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${G.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - G / (d || 1)) * 100).toFixed(1)}%
  q_adm = -${e.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${ue.toFixed(2)}` + (ue > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${H.toFixed(2)} (${H < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (a) {
        console.error("Solver error zapata aislada:", a);
      }
      const ke = t.deformOutputs.rawVal.deformations;
      let ze = 1e-9;
      for (const a of we) {
        const l = ke == null ? void 0 : ke.get(a);
        l && Number.isFinite(l[2]) && (ze = Math.max(ze, Math.abs(l[2])));
      }
      const $ = rt * 12, Fe = new Set(we), Ne = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Oe = (a, l) => {
        const r = a ? l : 0, d = -(ze * Math.max(r, 1) + Rt), G = [];
        for (const ue of we) {
          if (!Fe.has(ue)) continue;
          const ce = t.nodes.rawVal[ue];
          if (!ce) continue;
          const H = ce[0], C = ce[1], X = ke == null ? void 0 : ke.get(ue), pe = (I) => Number.isFinite(I) ? I : 0, o = X ? pe(X[0]) : 0, n = X ? pe(X[1]) : 0, s = X ? pe(X[2]) : 0, f = H + o * r, i = C + n * r, P = 0 + s * r, u = P - d, b = (I) => [
            H + (f - H) * I,
            C + (i - C) * I,
            d + u * I
          ], [_, B, V] = b(0), [De, Je, Ke] = b(0.05), Ee = [
            new x(_, B, V),
            new x(De, Je, Ke)
          ];
          for (let I = 0; I <= $; I++) {
            const Ue = 0.05 + 0.9 * (I / $), [Ce, Qe, et] = b(Ue), He = 2 * Math.PI * rt * (I / $);
            Ee.push(new x(Ce + ct * Math.cos(He), Qe + ct * Math.sin(He), et));
          }
          Ee.push(new x(f, i, P)), G.push(new je(new Xe().setFromPoints(Ee), Gt));
          const A = Vt, Ge = [
            new x(H - A, C - A, d),
            new x(H + A, C - A, d),
            new x(H + A, C + A, d),
            new x(H - A, C + A, d),
            new x(H - A, C - A, d)
          ];
          G.push(new je(new Xe().setFromPoints(Ge), Ht));
        }
        return G;
      }, Re = Ze.v;
      Ne ? mt.derive(() => {
        const a = Ne.deformedShape.val, l = Ne.deformScale.val;
        Ze.v === Re && (t.objects3D.val = Oe(a, l));
      }) : t.objects3D.val = Oe(true, 1);
    },
    runModal(e, t, m) {
      var _a, _b;
      const c = t.nodes.val, w = t.elements.val, p = t.nodeInputs.val, g = t.elementInputs.val;
      if (!(!c.length || !w.length || !((_a = g.densities) == null ? void 0 : _a.size))) try {
        const h = ft(c, w, p, g, 12);
        m.render(h, {
          title: `Zapata Aislada ${e.Lz}\xD7${e.Bz}m t=${e.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${e.bc}m  Hp=${e.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = h.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (h) {
        console.warn("Modal zapata error:", h.message);
      }
    }
  };
  Ze = {
    v: 0
  };
  ro = [
    Nt,
    zt,
    Dt,
    Et,
    Ct,
    yt,
    It,
    qt,
    vt,
    kt,
    Lt,
    Pt,
    wt,
    jt,
    Ft
  ];
});
export {
  __tla,
  Ze as a,
  jt as b,
  ro as e,
  Ft as z
};
