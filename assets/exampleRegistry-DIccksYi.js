import { a as Ze, V as h, L as Ve, B as je } from "./Text-CBH-tcJP.js";
import { v as mt } from "./theme-CzzIlc4y.js";
import { a as rt } from "./analyze-ClLKGn9k.js";
import { m as dt, d as ft, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as St, __tla as __tla_1 } from "./plateThin-C30Q-WjQ.js";
import { p as kt, __tla as __tla_2 } from "./plateThick-DrHD17l3.js";
import { m as wt, __tla as __tla_3 } from "./membrana-Darbd52d.js";
import { s as Lt, __tla as __tla_4 } from "./shellThin-ORSIx719.js";
import { s as zt, __tla as __tla_5 } from "./shellThick-BSU3qF0E.js";
import { e as Pt, __tla as __tla_6 } from "./edificioAporticado-DG3xVeOI.js";
import { t as yt, __tla as __tla_7 } from "./trussGen-CYTV_Ioz.js";
import { b as Nt, __tla as __tla_8 } from "./barraAxial-Bnm-0MrG.js";
import { p as Et, __tla as __tla_9 } from "./portico2D-kxfBcLlJ.js";
import { t as It, __tla as __tla_10 } from "./tower3D-tLRX3VEB.js";
import { g as Dt, __tla as __tla_11 } from "./galpon-BaNuuhBd.js";
import { e as qt, __tla as __tla_12 } from "./edifAcero-Dhwvq9Mc.js";
import { m as Tt, __tla as __tla_13 } from "./mezanine-BmEOOT1G.js";
let Xe, jt, mo, Ft;
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
  let De, qe, ot, He, $t, nt, st, Ct, Bt, At, Te, $e, Ot, at, ze, lt, Rt, ct, it, Gt, Ht, Vt;
  De = 25e6;
  qe = 0.2;
  ot = De / (2 * (1 + qe));
  He = 24;
  $t = 0.2;
  nt = 0.035;
  st = 8;
  Ct = 0.04;
  Bt = new Ze({
    color: 16711731,
    linewidth: 2
  });
  At = new Ze({
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
    build(e, o) {
      var _a;
      const r = e.Lz1, m = e.Bz1, S = e.Lv, u = e.Bv, b = e.Hv, _ = e.Lz2, ie = e.Bz2, he = e.tz, M = e.bc, Q = e.Hp, O = e.P1, T = e.P2, k = e.ks, me = e.M1x ?? 0, ee = e.M1y ?? 0, re = e.M2x ?? 0, R = e.M2y ?? 0, xe = Math.round(e.nSubX), j = Math.round(e.nSubY), te = 0.2, W = m / 2, I = r + S + _ / 2, w = ie / 2, be = (W + w) / 2;
      function X(t, n, s, x) {
        const c = [
          t,
          ...s.filter((p) => p > t && p < n),
          n
        ].sort((p, N) => p - N), B = [];
        for (let p = 0; p < c.length - 1; p++) {
          const N = c[p], v = c[p + 1], q = Math.max(1, Math.round((v - N) / ((n - t) / x)));
          for (let A = 0; A < q; A++) B.push(N + (v - N) * A / q);
        }
        return B.push(c[c.length - 1]), B;
      }
      const J = X(0, r, [
        te
      ], xe), K = X(0, m, [
        W,
        be
      ], j), oe = X(r + S, r + S + _, [
        I
      ], xe), ne = X(0, ie, [
        w,
        be
      ], j), Me = [], $ = [], Ce = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), le = (t, n, s) => {
        const x = `${t.toFixed(4)},${n.toFixed(4)},${s.toFixed(4)}`;
        if (ke.has(x)) return ke.get(x);
        const c = Me.length;
        return Me.push([
          t,
          n,
          s
        ]), ke.set(x, c), c;
      }, d = [];
      for (let t = 0; t < K.length; t++) {
        const n = [];
        for (let s = 0; s < J.length; s++) n.push(le(J[s], K[t], 0));
        d.push(n);
      }
      for (let t = 0; t < K.length - 1; t++) for (let n = 0; n < J.length - 1; n++) {
        const s = $.length;
        $.push([
          d[t][n],
          d[t][n + 1],
          d[t + 1][n + 1],
          d[t + 1][n]
        ]), fe.set(s, he), U.set(s, De), se.set(s, qe), ae.set(s, He);
      }
      const z = [];
      for (let t = 0; t < ne.length; t++) {
        const n = [];
        for (let s = 0; s < oe.length; s++) n.push(le(oe[s], ne[t], 0));
        z.push(n);
      }
      for (let t = 0; t < ne.length - 1; t++) for (let n = 0; n < oe.length - 1; n++) {
        const s = $.length;
        $.push([
          z[t][n],
          z[t][n + 1],
          z[t + 1][n + 1],
          z[t + 1][n]
        ]), fe.set(s, he), U.set(s, De), se.set(s, qe), ae.set(s, He);
      }
      const we = Math.round(e.vigaLevel) === 0 ? he : Q, Ae = le(te, W, 0), ue = le(te, W, we), et = le(I, w, 0), pe = le(I, w, we);
      for (const [t, n] of [
        [
          Ae,
          ue
        ],
        [
          et,
          pe
        ]
      ]) {
        const s = $.length;
        $.push([
          t,
          n
        ]), U.set(s, De), se.set(s, qe), D.set(s, ot), de.set(s, M * M), L.set(s, M ** 4 / 12), Pe.set(s, M ** 4 / 12), ve.set(s, 0.14 * M ** 4), ae.set(s, He), Se.set(s, {
          type: "rect",
          b: M,
          h: M
        });
      }
      const G = $.length;
      $.push([
        ue,
        pe
      ]), U.set(G, De), se.set(G, qe), D.set(G, ot), de.set(G, u * b), L.set(G, u * b ** 3 / 12), Pe.set(G, b * u ** 3 / 12), ve.set(G, 0.28 * u * b ** 3), ae.set(G, He), Se.set(G, {
        type: "rect",
        b: u,
        h: b
      }), ge.set(ue, [
        0,
        0,
        -O,
        me,
        ee,
        0
      ]), ge.set(pe, [
        0,
        0,
        -T,
        re,
        R,
        0
      ]);
      const Ye = r / xe, Le = m / j, Fe = _ / xe, We = ie / j, a = 0.5, l = [], i = [];
      for (let t = 0; t < K.length; t++) for (let n = 0; n < J.length; n++) {
        const s = Ye * Le * (n === 0 || n === J.length - 1 ? 0.5 : 1) * (t === 0 || t === K.length - 1 ? 0.5 : 1), x = k * s, c = k * s * a;
        l.push({
          node: d[t][n],
          dof: 0,
          k: c
        }), l.push({
          node: d[t][n],
          dof: 1,
          k: c
        }), l.push({
          node: d[t][n],
          dof: 2,
          k: x
        }), i.push(d[t][n]);
      }
      for (let t = 0; t < ne.length; t++) for (let n = 0; n < oe.length; n++) {
        const s = Fe * We * (n === 0 || n === oe.length - 1 ? 0.5 : 1) * (t === 0 || t === ne.length - 1 ? 0.5 : 1), x = k * s, c = k * s * a;
        l.push({
          node: z[t][n],
          dof: 0,
          k: c
        }), l.push({
          node: z[t][n],
          dof: 1,
          k: c
        }), l.push({
          node: z[t][n],
          dof: 2,
          k: x
        }), i.push(z[t][n]);
      }
      const P = k * Ye * Le * 1e-4;
      l.push({
        node: d[0][0],
        dof: 3,
        k: P
      }), l.push({
        node: d[0][0],
        dof: 4,
        k: P
      }), l.push({
        node: d[0][0],
        dof: 5,
        k: P
      }), o.nodes.val = Me.map((t) => [
        t[0],
        t[1],
        t[2]
      ]), o.elements.val = $, o.nodeInputs.val = {
        supports: Ce,
        loads: ge
      }, o.elementInputs.val = {
        elasticities: U,
        poissonsRatios: se,
        areas: de,
        momentsOfInertiaZ: L,
        momentsOfInertiaY: Pe,
        torsionalConstants: ve,
        shearModuli: D,
        thicknesses: fe,
        densities: ae,
        sectionShapes: Se
      };
      try {
        o.deformOutputs.val = ft(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, l);
        const t = rt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), n = o.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((x, c) => {
          if (x.length !== 4) return;
          const B = [];
          for (const p of x) {
            const N = n == null ? void 0 : n.get(p), v = N ? N[2] : 0;
            B.push(-k * v);
          }
          s.set(c, B);
        }), t.pressure = s, o.analyzeOutputs.val = t;
      } catch (t) {
        console.error("Solver error:", t);
      }
      const f = o.deformOutputs.rawVal.deformations;
      let y = 1e-9;
      for (const t of i) {
        const n = f == null ? void 0 : f.get(t);
        n && Number.isFinite(n[2]) && (y = Math.max(y, Math.abs(n[2])));
      }
      const ce = new Set(i), g = st * 12, C = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, H = (t, n) => {
        const s = t ? n : 0, c = -(y * Math.max(s, 1) + $t), B = [];
        for (const p of i) {
          if (!ce.has(p)) continue;
          const N = o.nodes.rawVal[p];
          if (!N) continue;
          const v = N[0], q = N[1], A = f == null ? void 0 : f.get(p), Ne = (V) => Number.isFinite(V) ? V : 0, Je = A ? Ne(A[0]) : 0, Ee = A ? Ne(A[1]) : 0, F = A ? Ne(A[2]) : 0, Oe = v + Je * s, E = q + Ee * s, Re = 0 + F * s, Ke = Re - c, Ie = (V) => [
            v + (Oe - v) * V,
            q + (E - q) * V,
            c + Ke * V
          ], [Ue, Ge, ut] = Ie(0), [pt, _t, ht] = Ie(0.05), Qe = [
            new h(Ue, Ge, ut),
            new h(pt, _t, ht)
          ];
          for (let V = 0; V <= g; V++) {
            const bt = 0.05 + 0.9 * (V / g), [Mt, gt, vt] = Ie(bt), tt = 2 * Math.PI * st * (V / g);
            Qe.push(new h(Mt + nt * Math.cos(tt), gt + nt * Math.sin(tt), vt));
          }
          Qe.push(new h(Oe, E, Re)), B.push(new Ve(new je().setFromPoints(Qe), Bt));
          const Y = Ct, xt = [
            new h(v - Y, q - Y, c),
            new h(v + Y, q - Y, c),
            new h(v + Y, q + Y, c),
            new h(v - Y, q + Y, c),
            new h(v - Y, q - Y, c)
          ];
          B.push(new Ve(new je().setFromPoints(xt), At));
        }
        return B;
      }, _e = Xe.v;
      C ? mt.derive(() => {
        const t = C.deformedShape.val, n = C.deformScale.val;
        Xe.v === _e && (o.objects3D.val = H(t, n));
      }) : o.objects3D.val = H(true, 1);
    },
    runModal(e, o, r) {
      var _a, _b;
      const m = o.nodes.val, S = o.elements.val, u = o.nodeInputs.val, b = o.elementInputs.val;
      if (!(!m.length || !S.length || !((_a = b.densities) == null ? void 0 : _a.size))) try {
        const _ = dt(m, S, u, b, 12);
        r.render(_, {
          title: `Zapata + Viga amarre Lv=${e.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${e.Bv}\xD7${e.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = _.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (_) {
        console.warn("Modal zapata-viga error:", _.message);
      }
    }
  };
  Te = 25e6;
  $e = 0.2;
  Ot = Te / (2 * (1 + $e));
  at = 24;
  ze = 9.80665;
  lt = [
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
  it = 8;
  Gt = new Ze({
    color: 16711731,
    linewidth: 2
  });
  Ht = new Ze({
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
        options: Object.fromEntries(lt.map((e, o) => [
          e.name,
          o
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
      P_D: {
        default: 10,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Carga Muerta (D)"
      },
      Mx_D: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Carga Muerta (D)"
      },
      My_D: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Carga Muerta (D)"
      },
      P_L: {
        default: 5,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Carga Viva (L)"
      },
      Mx_L: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Carga Viva (L)"
      },
      My_L: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Carga Viva (L)"
      },
      P_S: {
        default: 0,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Sobrecarga (S)"
      },
      Mx_S: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Sobrecarga (S)"
      },
      My_S: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Sobrecarga (S)"
      },
      combo: {
        default: 0,
        label: "Combinaci\xF3n",
        folder: "Combinaci\xF3n",
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
        folder: "Combinaci\xF3n"
      },
      fL: {
        default: 1.6,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor L",
        folder: "Combinaci\xF3n"
      },
      fS: {
        default: 0,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor S (o E)",
        folder: "Combinaci\xF3n"
      },
      nSub: {
        default: 10,
        min: 3,
        max: 16,
        step: 1,
        label: "n subdivisiones"
      }
    },
    computedLabels(e, o) {
      var _a;
      const m = (e.q_adm ?? 20) * ze * (e.ks_factor ?? 10.5), S = e.tz ?? 0.15, u = e.Lz ?? 2.5, b = Te * S ** 3 / (12 * (1 - $e ** 2)), _ = b / (m * u ** 4), ie = e.fD ?? 1.2, he = e.fL ?? 1.6, M = e.fS ?? 0, Q = ie * (e.P_D ?? 0) + he * (e.P_L ?? 0) + M * (e.P_S ?? 0);
      let O = 0, T = 0;
      const k = (_a = o.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (k && k.size) {
        for (const re of k.values()) for (const R of re) R < O && (O = R), (R < T || T === 0) && (T = R);
        let ee = 1 / 0;
        for (const re of k.values()) for (const R of re) Math.abs(R) < ee && (ee = Math.abs(R));
        T = -ee;
      }
      const me = Math.abs(O) / (e.q_adm || 1);
      return {
        "ks (kN/m\xB3)": m.toFixed(0),
        "D (kN\xB7m)": b.toFixed(1),
        "k_r (Biot)": _.toFixed(3) + (_ < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": Q.toFixed(2),
        "q_max (tonf/m\xB2)": O.toFixed(2),
        "q_min (tonf/m\xB2)": T.toFixed(2),
        "q/q_adm": me.toFixed(2) + (me > 1 ? " \u26A0" : " \u2713")
      };
    },
    onParamChange(e, o) {
      if (e === "soilType") {
        const r = Math.round(o.soilType ?? 0);
        if (r > 0) {
          const m = lt[r];
          o.q_adm = m.q_adm, o.ks_factor = m.ks_factor, o.su = m.su, o.phi = m.phi, o.gamma = m.gamma, o.N_SPT = m.N_SPT, o.E_soil = m.E_soil;
        }
      }
      if (e === "combo") {
        const r = Math.round(o.combo ?? 0), m = [
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
        r >= 0 && r < m.length && ([o.fD, o.fL, o.fS] = m[r]);
      }
    },
    build(e, o) {
      var _a;
      const { Lz: r, Bz: m, tz: S, bc: u, Hp: b } = e, _ = e.q_adm, ie = e.ks_factor, M = _ * ze * ie, Q = e.fD ?? 1.2, O = e.fL ?? 1.6, T = e.fS ?? 0, k = Q * (e.P_D ?? 0) + O * (e.P_L ?? 0) + T * (e.P_S ?? 0), me = Q * (e.Mx_D ?? 0) + O * (e.Mx_L ?? 0) + T * (e.Mx_S ?? 0), ee = Q * (e.My_D ?? 0) + O * (e.My_L ?? 0) + T * (e.My_S ?? 0), re = k * ze, R = me * ze, xe = ee * ze, j = Math.round(e.nSub), te = r / 2, W = m / 2, I = [], w = [];
      for (let a = 0; a <= j; a++) I.push(r * a / j), w.push(m * a / j);
      I.includes(te) || (I.push(te), I.sort((a, l) => a - l)), w.includes(W) || (w.push(W), w.sort((a, l) => a - l));
      const be = [], X = [], J = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), fe = (a, l, i) => {
        const P = `${a.toFixed(4)},${l.toFixed(4)},${i.toFixed(4)}`;
        if (de.has(P)) return de.get(P);
        const f = be.length;
        return be.push([
          a,
          l,
          i
        ]), de.set(P, f), f;
      }, L = [];
      for (let a = 0; a < w.length; a++) {
        const l = [];
        for (let i = 0; i < I.length; i++) l.push(fe(I[i], w[a], 0));
        L.push(l);
      }
      for (let a = 0; a < w.length - 1; a++) for (let l = 0; l < I.length - 1; l++) {
        const i = X.length;
        X.push([
          L[a][l],
          L[a][l + 1],
          L[a + 1][l + 1],
          L[a + 1][l]
        ]), ne.set(i, S), J.set(i, Te), K.set(i, $e), U.set(i, at);
      }
      const Pe = fe(te, W, 0), ve = fe(te, W, b), D = X.length;
      X.push([
        Pe,
        ve
      ]), J.set(D, Te), K.set(D, $e), ge.set(D, Ot), oe.set(D, u * u), Me.set(D, u ** 4 / 12), $.set(D, u ** 4 / 12), Ce.set(D, 0.14 * u ** 4), U.set(D, at), se.set(D, {
        type: "rect",
        b: u,
        h: u
      });
      const ae = /* @__PURE__ */ new Map();
      ae.set(ve, [
        0,
        0,
        -re,
        R,
        xe,
        0
      ]);
      const Se = r / j, ke = m / j, le = 0.5, d = [], z = [];
      for (let a = 0; a < w.length; a++) for (let l = 0; l < I.length; l++) {
        const i = Se * ke * (l === 0 || l === I.length - 1 ? 0.5 : 1) * (a === 0 || a === w.length - 1 ? 0.5 : 1), P = M * i, f = M * i * le;
        d.push({
          node: L[a][l],
          dof: 0,
          k: f
        }), d.push({
          node: L[a][l],
          dof: 1,
          k: f
        }), d.push({
          node: L[a][l],
          dof: 2,
          k: P
        }), z.push(L[a][l]);
      }
      const Be = M * Se * ke * 1e-4, we = L[0][0];
      d.push({
        node: we,
        dof: 3,
        k: Be
      }), d.push({
        node: we,
        dof: 4,
        k: Be
      }), d.push({
        node: we,
        dof: 5,
        k: Be
      }), o.nodes.val = be.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), o.elements.val = X, o.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: ae
      }, o.elementInputs.val = {
        elasticities: J,
        poissonsRatios: K,
        areas: oe,
        momentsOfInertiaZ: Me,
        momentsOfInertiaY: $,
        torsionalConstants: Ce,
        shearModuli: ge,
        thicknesses: ne,
        densities: U,
        sectionShapes: se
      };
      try {
        o.deformOutputs.val = ft(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, d);
        const a = rt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), l = o.deformOutputs.rawVal.deformations, i = /* @__PURE__ */ new Map();
        let P = 0;
        o.elements.rawVal.forEach((H, _e) => {
          if (H.length !== 4) return;
          const t = [];
          for (const n of H) {
            const s = l == null ? void 0 : l.get(n), c = M * (s ? s[2] : 0) / ze;
            t.push(c), c < P && (P = c);
          }
          i.set(_e, t);
        }), a.pressure = i, o.analyzeOutputs.val = a;
        const f = Math.abs(P);
        let y = 1 / 0;
        i.forEach((H) => {
          for (const _e of H) {
            const t = Math.abs(_e);
            t < y && (y = t);
          }
        }), Number.isFinite(y) || (y = 0);
        const ce = f / e.q_adm, g = Te * S ** 3 / (12 * (1 - $e ** 2)) / (M * r ** 4), C = [
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
        ][Math.round(e.combo ?? 0)] ?? "?";
        console.log(`[Zapata Aislada]  Combo: ${C}  (fD=${Q}, fL=${O}, fS=${T})
  Cargas totales: P=${k.toFixed(2)} tonf, Mx=${me.toFixed(2)} tonf\xB7m, My=${ee.toFixed(2)} tonf\xB7m
  Patrones: D(${e.P_D}, ${e.Mx_D}, ${e.My_D}) L(${e.P_L}, ${e.Mx_L}, ${e.My_L}) S(${e.P_S}, ${e.Mx_S}, ${e.My_S})
  q_max (centro) = -${f.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${y.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - y / (f || 1)) * 100).toFixed(1)}%
  q_adm = -${e.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${ce.toFixed(2)}` + (ce > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${g.toFixed(2)} (${g < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (a) {
        console.error("Solver error zapata aislada:", a);
      }
      const Ae = o.deformOutputs.rawVal.deformations;
      let ue = 1e-9;
      for (const a of z) {
        const l = Ae == null ? void 0 : Ae.get(a);
        l && Number.isFinite(l[2]) && (ue = Math.max(ue, Math.abs(l[2])));
      }
      const pe = it * 12, G = new Set(z), Le = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Fe = (a, l) => {
        const i = a ? l : 0, f = -(ue * Math.max(i, 1) + Rt), y = [];
        for (const ce of z) {
          if (!G.has(ce)) continue;
          const ye = o.nodes.rawVal[ce];
          if (!ye) continue;
          const g = ye[0], Z = ye[1], C = Ae == null ? void 0 : Ae.get(ce), H = (E) => Number.isFinite(E) ? E : 0, _e = C ? H(C[0]) : 0, t = C ? H(C[1]) : 0, n = C ? H(C[2]) : 0, s = g + _e * i, x = Z + t * i, c = 0 + n * i, B = c - f, p = (E) => [
            g + (s - g) * E,
            Z + (x - Z) * E,
            f + B * E
          ], [N, v, q] = p(0), [A, Ne, Je] = p(0.05), Ee = [
            new h(N, v, q),
            new h(A, Ne, Je)
          ];
          for (let E = 0; E <= pe; E++) {
            const Re = 0.05 + 0.9 * (E / pe), [Ke, Ie, Ue] = p(Re), Ge = 2 * Math.PI * it * (E / pe);
            Ee.push(new h(Ke + ct * Math.cos(Ge), Ie + ct * Math.sin(Ge), Ue));
          }
          Ee.push(new h(s, x, c)), y.push(new Ve(new je().setFromPoints(Ee), Gt));
          const F = Vt, Oe = [
            new h(g - F, Z - F, f),
            new h(g + F, Z - F, f),
            new h(g + F, Z + F, f),
            new h(g - F, Z + F, f),
            new h(g - F, Z - F, f)
          ];
          y.push(new Ve(new je().setFromPoints(Oe), Ht));
        }
        return y;
      }, We = Xe.v;
      Le ? mt.derive(() => {
        const a = Le.deformedShape.val, l = Le.deformScale.val;
        Xe.v === We && (o.objects3D.val = Fe(a, l));
      }) : o.objects3D.val = Fe(true, 1);
    },
    runModal(e, o, r) {
      var _a, _b;
      const m = o.nodes.val, S = o.elements.val, u = o.nodeInputs.val, b = o.elementInputs.val;
      if (!(!m.length || !S.length || !((_a = b.densities) == null ? void 0 : _a.size))) try {
        const _ = dt(m, S, u, b, 12);
        r.render(_, {
          title: `Zapata Aislada ${e.Lz}\xD7${e.Bz}m t=${e.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${e.bc}m  Hp=${e.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = _.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (_) {
        console.warn("Modal zapata error:", _.message);
      }
    }
  };
  Xe = {
    v: 0
  };
  mo = [
    Nt,
    yt,
    Et,
    It,
    Dt,
    Pt,
    qt,
    Tt,
    St,
    kt,
    wt,
    Lt,
    zt,
    jt,
    Ft
  ];
});
export {
  __tla,
  Xe as a,
  jt as b,
  mo as e,
  Ft as z
};
