import { a as De, V as Z, L as pt, B as je, h as ut } from "./Text-CBH-tcJP.js";
import { v as ft } from "./theme-CzzIlc4y.js";
import { a as ht } from "./analyze-ClLKGn9k.js";
import { m as xt, d as _t, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as zt, __tla as __tla_1 } from "./plateThin-C30Q-WjQ.js";
import { p as Nt, __tla as __tla_2 } from "./plateThick-DrHD17l3.js";
import { m as Et, __tla as __tla_3 } from "./membrana-Darbd52d.js";
import { s as yt, __tla as __tla_4 } from "./shellThin-ORSIx719.js";
import { s as It, __tla as __tla_5 } from "./shellThick-BSU3qF0E.js";
import { e as Pt, __tla as __tla_6 } from "./edificioAporticado-DG3xVeOI.js";
import { t as Tt, __tla as __tla_7 } from "./trussGen-CYTV_Ioz.js";
import { b as Lt, __tla as __tla_8 } from "./barraAxial-Bnm-0MrG.js";
import { p as qt, __tla as __tla_9 } from "./portico2D-kxfBcLlJ.js";
import { t as Bt, __tla as __tla_10 } from "./tower3D-tLRX3VEB.js";
import { g as At, __tla as __tla_11 } from "./galpon-BaNuuhBd.js";
import { e as Ct, __tla as __tla_12 } from "./edifAcero-Dhwvq9Mc.js";
import { m as $t, __tla as __tla_13 } from "./mezanine-BmEOOT1G.js";
let Xe, Yt, un, Vt;
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
  let Be, Ae, at, He, Ot, lt, ct, Gt, Rt, Ht, Ve, Fe, Ft, it, qe, rt, jt, mt, dt, Xt, Dt, Zt;
  Be = 25e6;
  Ae = 0.2;
  at = Be / (2 * (1 + Ae));
  He = 24;
  Ot = 0.2;
  lt = 0.035;
  ct = 8;
  Gt = 0.04;
  Rt = new De({
    color: 16711731,
    linewidth: 2
  });
  Ht = new De({
    color: 52224,
    linewidth: 2
  });
  Vt = {
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
    build(a, n) {
      var _a;
      const x = a.Lz1, d = a.Bz1, C = a.Lv, _ = a.Bv, I = a.Hv, S = a.Lz2, we = a.Bz2, Ce = a.tz, P = a.bc, Ze = a.Hp, Ye = a.P1, We = a.P2, $ = a.ks, me = a.M1x ?? 0, de = a.M1y ?? 0, O = a.M2x ?? 0, G = a.M2y ?? 0, K = Math.round(a.nSubX), F = Math.round(a.nSubY), oe = 0.2, U = d / 2, pe = x + C + S / 2, se = we / 2, Se = (U + se) / 2;
      function ae(e, t, s, k) {
        const i = [
          e,
          ...s.filter((g) => g > e && g < t),
          t
        ].sort((g, y) => g - y), E = [];
        for (let g = 0; g < i.length - 1; g++) {
          const y = i[g], h = i[g + 1], w = Math.max(1, Math.round((h - y) / ((t - e) / k)));
          for (let R = 0; R < w; R++) E.push(y + (h - y) * R / w);
        }
        return E.push(i[i.length - 1]), E;
      }
      const Q = ae(0, x, [
        oe
      ], K), ee = ae(0, d, [
        U,
        Se
      ], F), Y = ae(x + C, x + C + S, [
        pe
      ], K), te = ae(0, we, [
        se,
        Se
      ], F), le = [], T = [], v = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), j = (e, t, s) => {
        const k = `${e.toFixed(4)},${t.toFixed(4)},${s.toFixed(4)}`;
        if (xe.has(k)) return xe.get(k);
        const i = le.length;
        return le.push([
          e,
          t,
          s
        ]), xe.set(k, i), i;
      }, L = [];
      for (let e = 0; e < ee.length; e++) {
        const t = [];
        for (let s = 0; s < Q.length; s++) t.push(j(Q[s], ee[e], 0));
        L.push(t);
      }
      for (let e = 0; e < ee.length - 1; e++) for (let t = 0; t < Q.length - 1; t++) {
        const s = T.length;
        T.push([
          L[e][t],
          L[e][t + 1],
          L[e + 1][t + 1],
          L[e + 1][t]
        ]), fe.set(s, Ce), ne.set(s, Be), z.set(s, Ae), W.set(s, He);
      }
      const q = [];
      for (let e = 0; e < te.length; e++) {
        const t = [];
        for (let s = 0; s < Y.length; s++) t.push(j(Y[s], te[e], 0));
        q.push(t);
      }
      for (let e = 0; e < te.length - 1; e++) for (let t = 0; t < Y.length - 1; t++) {
        const s = T.length;
        T.push([
          q[e][t],
          q[e][t + 1],
          q[e + 1][t + 1],
          q[e + 1][t]
        ]), fe.set(s, Ce), ne.set(s, Be), z.set(s, Ae), W.set(s, He);
      }
      const re = Math.round(a.vigaLevel) === 0 ? Ce : Ze, $e = j(oe, U, 0), ge = j(oe, U, re), Je = j(pe, se, 0), J = j(pe, se, re);
      for (const [e, t] of [
        [
          $e,
          ge
        ],
        [
          Je,
          J
        ]
      ]) {
        const s = T.length;
        T.push([
          e,
          t
        ]), ne.set(s, Be), z.set(s, Ae), ce.set(s, at), ue.set(s, P * P), he.set(s, P ** 4 / 12), Ne.set(s, P ** 4 / 12), H.set(s, 0.14 * P ** 4), W.set(s, He), ie.set(s, {
          type: "rect",
          b: P,
          h: P
        });
      }
      const X = T.length;
      T.push([
        ge,
        J
      ]), ne.set(X, Be), z.set(X, Ae), ce.set(X, at), ue.set(X, _ * I), he.set(X, _ * I ** 3 / 12), Ne.set(X, I * _ ** 3 / 12), H.set(X, 0.28 * _ * I ** 3), W.set(X, He), ie.set(X, {
        type: "rect",
        b: _,
        h: I
      }), ze.set(ge, [
        0,
        0,
        -Ye,
        me,
        de,
        0
      ]), ze.set(J, [
        0,
        0,
        -We,
        O,
        G,
        0
      ]);
      const Me = x / K, Ee = d / F, Ke = S / K, o = we / F, l = 0.5, c = [], b = [];
      for (let e = 0; e < ee.length; e++) for (let t = 0; t < Q.length; t++) {
        const s = Me * Ee * (t === 0 || t === Q.length - 1 ? 0.5 : 1) * (e === 0 || e === ee.length - 1 ? 0.5 : 1), k = $ * s, i = $ * s * l;
        c.push({
          node: L[e][t],
          dof: 0,
          k: i
        }), c.push({
          node: L[e][t],
          dof: 1,
          k: i
        }), c.push({
          node: L[e][t],
          dof: 2,
          k
        }), b.push(L[e][t]);
      }
      for (let e = 0; e < te.length; e++) for (let t = 0; t < Y.length; t++) {
        const s = Ke * o * (t === 0 || t === Y.length - 1 ? 0.5 : 1) * (e === 0 || e === te.length - 1 ? 0.5 : 1), k = $ * s, i = $ * s * l;
        c.push({
          node: q[e][t],
          dof: 0,
          k: i
        }), c.push({
          node: q[e][t],
          dof: 1,
          k: i
        }), c.push({
          node: q[e][t],
          dof: 2,
          k
        }), b.push(q[e][t]);
      }
      const r = $ * Me * Ee * 1e-4;
      c.push({
        node: L[0][0],
        dof: 3,
        k: r
      }), c.push({
        node: L[0][0],
        dof: 4,
        k: r
      }), c.push({
        node: L[0][0],
        dof: 5,
        k: r
      }), n.nodes.val = le.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), n.elements.val = T, n.nodeInputs.val = {
        supports: v,
        loads: ze
      }, n.elementInputs.val = {
        elasticities: ne,
        poissonsRatios: z,
        areas: ue,
        momentsOfInertiaZ: he,
        momentsOfInertiaY: Ne,
        torsionalConstants: H,
        shearModuli: ce,
        thicknesses: fe,
        densities: W,
        sectionShapes: ie
      };
      try {
        n.deformOutputs.val = _t(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, c);
        const e = ht(n.nodes.val, n.elements.val, n.elementInputs.val, n.deformOutputs.val), t = n.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        n.elements.rawVal.forEach((k, i) => {
          if (k.length !== 4) return;
          const E = [];
          for (const g of k) {
            const y = t == null ? void 0 : t.get(g), h = y ? y[2] : 0;
            E.push(-$ * h);
          }
          s.set(i, E);
        }), e.pressure = s, n.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const B = n.deformOutputs.rawVal.deformations;
      let D = 1e-9;
      for (const e of b) {
        const t = B == null ? void 0 : B.get(e);
        t && Number.isFinite(t[2]) && (D = Math.max(D, Math.abs(t[2])));
      }
      const ve = new Set(b), p = ct * 12, A = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, be = (e, t) => {
        const s = e ? t : 0, i = -(D * Math.max(s, 1) + Ot), E = [];
        for (const g of b) {
          if (!ve.has(g)) continue;
          const y = n.nodes.rawVal[g];
          if (!y) continue;
          const h = y[0], w = y[1], R = B == null ? void 0 : B.get(g), ye = (M) => Number.isFinite(M) ? M : 0, Ie = R ? ye(R[0]) : 0, m = R ? ye(R[1]) : 0, Oe = R ? ye(R[2]) : 0, Ge = h + Ie * s, Pe = w + m * s, u = 0 + Oe * s, Te = u - i, Le = (M) => [
            h + (Ge - h) * M,
            w + (Pe - w) * M,
            i + Te * M
          ], [Ue, Qe, Re] = Le(0), [gt, Mt, vt] = Le(0.05), et = [
            new Z(Ue, Qe, Re),
            new Z(gt, Mt, vt)
          ];
          for (let M = 0; M <= p; M++) {
            const tt = 0.05 + 0.9 * (M / p), [kt, wt, St] = Le(tt), st = 2 * Math.PI * ct * (M / p);
            et.push(new Z(kt + lt * Math.cos(st), wt + lt * Math.sin(st), St));
          }
          et.push(new Z(Ge, Pe, u)), E.push(new pt(new je().setFromPoints(et), Rt));
          const f = Gt, nt = [
            [
              h - f,
              w - f,
              i - f * 2
            ],
            [
              h + f,
              w - f,
              i - f * 2
            ],
            [
              h + f,
              w + f,
              i - f * 2
            ],
            [
              h - f,
              w + f,
              i - f * 2
            ],
            [
              h - f,
              w - f,
              i
            ],
            [
              h + f,
              w - f,
              i
            ],
            [
              h + f,
              w + f,
              i
            ],
            [
              h - f,
              w + f,
              i
            ]
          ].map((M) => new Z(M[0], M[1], M[2])), bt = [
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
          ], ot = [];
          for (const [M, tt] of bt) ot.push(nt[M], nt[tt]);
          E.push(new ut(new je().setFromPoints(ot), Ht));
        }
        return E;
      }, ke = Xe.v;
      A ? ft.derive(() => {
        const e = A.deformedShape.val, t = A.deformScale.val;
        Xe.v === ke && (n.objects3D.val = be(e, t));
      }) : n.objects3D.val = be(true, 1);
    },
    runModal(a, n, x) {
      var _a, _b;
      const d = n.nodes.val, C = n.elements.val, _ = n.nodeInputs.val, I = n.elementInputs.val;
      if (!(!d.length || !C.length || !((_a = I.densities) == null ? void 0 : _a.size))) try {
        const S = xt(d, C, _, I, 12);
        x.render(S, {
          title: `Zapata + Viga amarre Lv=${a.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${a.Bv}\xD7${a.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = S.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (S) {
        console.warn("Modal zapata-viga error:", S.message);
      }
    }
  };
  Ve = 25e6;
  Fe = 0.2;
  Ft = Ve / (2 * (1 + Fe));
  it = 24;
  qe = 9.80665;
  rt = [
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
  jt = 0.2;
  mt = 0.035;
  dt = 8;
  Xt = new De({
    color: 16711731,
    linewidth: 2
  });
  Dt = new De({
    color: 52224,
    linewidth: 2
  });
  Zt = 0.04;
  Yt = {
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
        default: 0.15,
        min: 0.1,
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
        options: Object.fromEntries(rt.map((a, n) => [
          a.name,
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
        default: 0,
        min: -10,
        max: 10,
        step: 0.5,
        label: "Mx (tonf\xB7m)"
      },
      My: {
        default: 0,
        min: -10,
        max: 10,
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
    onParamChange(a, n) {
      if (a === "soilType") {
        const x = Math.round(n.soilType ?? 0);
        if (x > 0) {
          const d = rt[x];
          n.q_adm = d.q_adm, n.ks_factor = d.ks_factor, n.su = d.su, n.phi = d.phi, n.gamma = d.gamma, n.N_SPT = d.N_SPT, n.E_soil = d.E_soil;
        }
      }
    },
    build(a, n) {
      var _a;
      const { Lz: x, Bz: d, tz: C, bc: _, Hp: I } = a, S = a.q_adm, we = a.ks_factor, P = S * qe * we, Ze = (a.CM + a.CV) * qe, Ye = a.Mx * qe, We = a.My * qe, $ = Math.round(a.nSub), me = x / 2, de = d / 2, O = [], G = [];
      for (let o = 0; o <= $; o++) O.push(x * o / $), G.push(d * o / $);
      O.includes(me) || (O.push(me), O.sort((o, l) => o - l)), G.includes(de) || (G.push(de), G.sort((o, l) => o - l));
      const K = [], F = [], oe = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), T = (o, l, c) => {
        const b = `${o.toFixed(4)},${l.toFixed(4)},${c.toFixed(4)}`;
        if (le.has(b)) return le.get(b);
        const r = K.length;
        return K.push([
          o,
          l,
          c
        ]), le.set(b, r), r;
      }, v = [];
      for (let o = 0; o < G.length; o++) {
        const l = [];
        for (let c = 0; c < O.length; c++) l.push(T(O[c], G[o], 0));
        v.push(l);
      }
      for (let o = 0; o < G.length - 1; o++) for (let l = 0; l < O.length - 1; l++) {
        const c = F.length;
        F.push([
          v[o][l],
          v[o][l + 1],
          v[o + 1][l + 1],
          v[o + 1][l]
        ]), se.set(c, C), oe.set(c, Ve), U.set(c, Fe), Y.set(c, it);
      }
      const ze = T(me, de, 0), ne = T(me, de, I), z = F.length;
      F.push([
        ze,
        ne
      ]), oe.set(z, Ve), U.set(z, Fe), ee.set(z, Ft), pe.set(z, _ * _), Se.set(z, _ ** 4 / 12), ae.set(z, _ ** 4 / 12), Q.set(z, 0.14 * _ ** 4), Y.set(z, it), te.set(z, {
        type: "rect",
        b: _,
        h: _
      });
      const ue = /* @__PURE__ */ new Map();
      ue.set(ne, [
        0,
        0,
        -Ze,
        Ye,
        We,
        0
      ]);
      const fe = x / $, he = d / $, Ne = 0.5, H = [], ce = [];
      for (let o = 0; o < G.length; o++) for (let l = 0; l < O.length; l++) {
        const c = fe * he * (l === 0 || l === O.length - 1 ? 0.5 : 1) * (o === 0 || o === G.length - 1 ? 0.5 : 1), b = P * c, r = P * c * Ne;
        H.push({
          node: v[o][l],
          dof: 0,
          k: r
        }), H.push({
          node: v[o][l],
          dof: 1,
          k: r
        }), H.push({
          node: v[o][l],
          dof: 2,
          k: b
        }), ce.push(v[o][l]);
      }
      const W = P * fe * he * 1e-4, ie = v[0][0];
      H.push({
        node: ie,
        dof: 3,
        k: W
      }), H.push({
        node: ie,
        dof: 4,
        k: W
      }), H.push({
        node: ie,
        dof: 5,
        k: W
      }), n.nodes.val = K.map((o) => [
        o[0],
        o[1],
        o[2]
      ]), n.elements.val = F, n.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: ue
      }, n.elementInputs.val = {
        elasticities: oe,
        poissonsRatios: U,
        areas: pe,
        momentsOfInertiaZ: Se,
        momentsOfInertiaY: ae,
        torsionalConstants: Q,
        shearModuli: ee,
        thicknesses: se,
        densities: Y,
        sectionShapes: te
      };
      try {
        n.deformOutputs.val = _t(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, H);
        const o = ht(n.nodes.val, n.elements.val, n.elementInputs.val, n.deformOutputs.val), l = n.deformOutputs.rawVal.deformations, c = /* @__PURE__ */ new Map();
        let b = 0;
        n.elements.rawVal.forEach((p, V) => {
          if (p.length !== 4) return;
          const A = [];
          for (const be of p) {
            const ke = l == null ? void 0 : l.get(be), t = P * (ke ? ke[2] : 0) / qe;
            A.push(t), t < b && (b = t);
          }
          c.set(V, A);
        }), o.pressure = c, n.analyzeOutputs.val = o;
        const r = Math.abs(b);
        let B = 1 / 0;
        c.forEach((p) => {
          for (const V of p) {
            const A = Math.abs(V);
            A < B && (B = A);
          }
        }), Number.isFinite(B) || (B = 0);
        const D = r / a.q_adm, N = Ve * C ** 3 / (12 * (1 - Fe ** 2)) / (P * x ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${r.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${B.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - B / (r || 1)) * 100).toFixed(1)}%
  q_adm = -${a.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${D.toFixed(2)}` + (D > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${N.toFixed(2)} (${N < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (o) {
        console.error("Solver error zapata aislada:", o);
      }
      const xe = n.deformOutputs.rawVal.deformations;
      let j = 1e-9;
      for (const o of ce) {
        const l = xe == null ? void 0 : xe.get(o);
        l && Number.isFinite(l[2]) && (j = Math.max(j, Math.abs(l[2])));
      }
      const q = dt * 12, _e = O.length, re = G.length, $e = 6, ge = Math.max(1, Math.ceil((_e - 1) / ($e - 1))), Je = Math.max(1, Math.ceil((re - 1) / ($e - 1))), J = /* @__PURE__ */ new Set();
      for (let o = 0; o < re; o += Je) {
        for (let l = 0; l < _e; l += ge) J.add(v[o][l]);
        J.add(v[o][_e - 1]);
      }
      for (let o = 0; o < _e; o += ge) J.add(v[re - 1][o]);
      J.add(v[re - 1][_e - 1]);
      const Me = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Ee = (o, l) => {
        const c = o ? l : 0, r = -(j * Math.max(c, 1) + jt), B = [];
        for (const D of ce) {
          if (!J.has(D)) continue;
          const ve = n.nodes.rawVal[D];
          if (!ve) continue;
          const N = ve[0], p = ve[1], V = xe == null ? void 0 : xe.get(D), A = (u) => Number.isFinite(u) ? u : 0, be = V ? A(V[0]) : 0, ke = V ? A(V[1]) : 0, e = V ? A(V[2]) : 0, t = N + be * c, s = p + ke * c, k = 0 + e * c, i = k - r, E = (u) => [
            N + (t - N) * u,
            p + (s - p) * u,
            r + i * u
          ], [g, y, h] = E(0), [w, R, ye] = E(0.05), Ie = [
            new Z(g, y, h),
            new Z(w, R, ye)
          ];
          for (let u = 0; u <= q; u++) {
            const Te = 0.05 + 0.9 * (u / q), [Le, Ue, Qe] = E(Te), Re = 2 * Math.PI * dt * (u / q);
            Ie.push(new Z(Le + mt * Math.cos(Re), Ue + mt * Math.sin(Re), Qe));
          }
          Ie.push(new Z(t, s, k)), B.push(new pt(new je().setFromPoints(Ie), Xt));
          const m = Zt, Oe = [
            [
              N - m,
              p - m,
              r - m * 2
            ],
            [
              N + m,
              p - m,
              r - m * 2
            ],
            [
              N + m,
              p + m,
              r - m * 2
            ],
            [
              N - m,
              p + m,
              r - m * 2
            ],
            [
              N - m,
              p - m,
              r
            ],
            [
              N + m,
              p - m,
              r
            ],
            [
              N + m,
              p + m,
              r
            ],
            [
              N - m,
              p + m,
              r
            ]
          ].map((u) => new Z(u[0], u[1], u[2])), Ge = [
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
          ], Pe = [];
          for (const [u, Te] of Ge) Pe.push(Oe[u], Oe[Te]);
          B.push(new ut(new je().setFromPoints(Pe), Dt));
        }
        return B;
      }, Ke = Xe.v;
      Me ? ft.derive(() => {
        const o = Me.deformedShape.val, l = Me.deformScale.val;
        Xe.v === Ke && (n.objects3D.val = Ee(o, l));
      }) : n.objects3D.val = Ee(true, 1);
    },
    runModal(a, n, x) {
      var _a, _b;
      const d = n.nodes.val, C = n.elements.val, _ = n.nodeInputs.val, I = n.elementInputs.val;
      if (!(!d.length || !C.length || !((_a = I.densities) == null ? void 0 : _a.size))) try {
        const S = xt(d, C, _, I, 12);
        x.render(S, {
          title: `Zapata Aislada ${a.Lz}\xD7${a.Bz}m t=${a.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${a.bc}m  Hp=${a.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = S.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (S) {
        console.warn("Modal zapata error:", S.message);
      }
    }
  };
  Xe = {
    v: 0
  };
  un = [
    Lt,
    Tt,
    qt,
    Bt,
    At,
    Pt,
    Ct,
    $t,
    zt,
    Nt,
    Et,
    yt,
    It,
    Yt,
    Vt
  ];
});
export {
  __tla,
  Xe as a,
  Yt as b,
  un as e,
  Vt as z
};
