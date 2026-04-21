import { a as je, V as p, L as He, B as Ge } from "./Text-CBH-tcJP.js";
import { v as mt } from "./theme-CzzIlc4y.js";
import { a as rt } from "./analyze-ClLKGn9k.js";
import { m as dt, d as ft, __tla as __tla_0 } from "./didacticCpp-CZmuvtpn.js";
import { p as St, __tla as __tla_1 } from "./plateThin-sXd5jsKD.js";
import { p as wt, __tla as __tla_2 } from "./plateThick-Dx2Xbupk.js";
import { m as kt, __tla as __tla_3 } from "./membrana-BKqd5un6.js";
import { s as Lt, __tla as __tla_4 } from "./shellThin-6MKyLJ9v.js";
import { s as yt, __tla as __tla_5 } from "./shellThick-ChzlAC5r.js";
import { e as zt, __tla as __tla_6 } from "./edificioAporticado-9UqWC461.js";
import { t as Nt, __tla as __tla_7 } from "./trussGen-CvG9p9LI.js";
import { b as Pt, __tla as __tla_8 } from "./barraAxial-2wQJpjXL.js";
import { p as Et, __tla as __tla_9 } from "./portico2D-FgeJY6Th.js";
import { t as It, __tla as __tla_10 } from "./tower3D-C_iiyCKZ.js";
import { g as Dt, __tla as __tla_11 } from "./galpon-B-Ndkzwt.js";
import { e as Tt, __tla as __tla_12 } from "./edifAcero-BYada1ZT.js";
import { m as $t, __tla as __tla_13 } from "./mezanine-B2PI96lp.js";
let Ve, jt, mo, Ot;
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
  let ze, Ne, ot, Oe, Ct, nt, st, qt, At, Bt, Re, Fe, Rt, at, ye, lt, Ft, ct, it, Ht, Gt, Vt;
  ze = 25e6;
  Ne = 0.2;
  ot = ze / (2 * (1 + Ne));
  Oe = 24;
  Ct = 0.2;
  nt = 0.035;
  st = 8;
  qt = 0.04;
  At = new je({
    color: 16711731,
    linewidth: 2
  });
  Bt = new je({
    color: 52224,
    linewidth: 2
  });
  Ot = {
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
    build(o, t) {
      var _a;
      const r = o.Lz1, m = o.Bz1, D = o.Lv, h = o.Bv, z = o.Hv, x = o.Lz2, Me = o.Bz2, Pe = o.tz, N = o.bc, ie = o.Hp, me = o.P1, re = o.P2, j = o.ks, Ee = o.M1x ?? 0, Ie = o.M1y ?? 0, Xe = o.M2x ?? 0, Ze = o.M2y ?? 0, de = Math.round(o.nSubX), F = Math.round(o.nSubY), J = 0.2, X = m / 2, P = r + D + x / 2, M = Me / 2, fe = (X + M) / 2;
      function H(e, n, s, _) {
        const c = [
          e,
          ...s.filter((u) => u > e && u < n),
          n
        ].sort((u, L) => u - L), C = [];
        for (let u = 0; u < c.length - 1; u++) {
          const L = c[u], g = c[u + 1], I = Math.max(1, Math.round((g - L) / ((n - e) / _)));
          for (let q = 0; q < I; q++) C.push(L + (g - L) * q / I);
        }
        return C.push(c[c.length - 1]), C;
      }
      const Z = H(0, r, [
        J
      ], de), Y = H(0, m, [
        X,
        fe
      ], F), K = H(r + D, r + D + x, [
        P
      ], de), U = H(0, Me, [
        M,
        fe
      ], F), ue = [], T = [], De = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), te = (e, n, s) => {
        const _ = `${e.toFixed(4)},${n.toFixed(4)},${s.toFixed(4)}`;
        if (xe.has(_)) return xe.get(_);
        const c = ue.length;
        return ue.push([
          e,
          n,
          s
        ]), xe.set(_, c), c;
      }, d = [];
      for (let e = 0; e < Y.length; e++) {
        const n = [];
        for (let s = 0; s < Z.length; s++) n.push(te(Z[s], Y[e], 0));
        d.push(n);
      }
      for (let e = 0; e < Y.length - 1; e++) for (let n = 0; n < Z.length - 1; n++) {
        const s = T.length;
        T.push([
          d[e][n],
          d[e][n + 1],
          d[e + 1][n + 1],
          d[e + 1][n]
        ]), se.set(s, Pe), W.set(s, ze), Q.set(s, Ne), ee.set(s, Oe);
      }
      const S = [];
      for (let e = 0; e < U.length; e++) {
        const n = [];
        for (let s = 0; s < K.length; s++) n.push(te(K[s], U[e], 0));
        S.push(n);
      }
      for (let e = 0; e < U.length - 1; e++) for (let n = 0; n < K.length - 1; n++) {
        const s = T.length;
        T.push([
          S[e][n],
          S[e][n + 1],
          S[e + 1][n + 1],
          S[e + 1][n]
        ]), se.set(s, Pe), W.set(s, ze), Q.set(s, Ne), ee.set(s, Oe);
      }
      const be = Math.round(o.vigaLevel) === 0 ? Pe : ie, $e = te(J, X, 0), ae = te(J, X, be), et = te(P, M, 0), le = te(P, M, be);
      for (const [e, n] of [
        [
          $e,
          ae
        ],
        [
          et,
          le
        ]
      ]) {
        const s = T.length;
        T.push([
          e,
          n
        ]), W.set(s, ze), Q.set(s, Ne), E.set(s, ot), ne.set(s, N * N), v.set(s, N ** 4 / 12), ve.set(s, N ** 4 / 12), he.set(s, 0.14 * N ** 4), ee.set(s, Oe), _e.set(s, {
          type: "rect",
          b: N,
          h: N
        });
      }
      const B = T.length;
      T.push([
        ae,
        le
      ]), W.set(B, ze), Q.set(B, Ne), E.set(B, ot), ne.set(B, h * z), v.set(B, h * z ** 3 / 12), ve.set(B, z * h ** 3 / 12), he.set(B, 0.28 * h * z ** 3), ee.set(B, Oe), _e.set(B, {
        type: "rect",
        b: h,
        h: z
      }), pe.set(ae, [
        0,
        0,
        -me,
        Ee,
        Ie,
        0
      ]), pe.set(le, [
        0,
        0,
        -re,
        Xe,
        Ze,
        0
      ]);
      const Ye = r / de, ge = m / F, Ce = x / de, We = Me / F, a = 0.5, l = [], i = [];
      for (let e = 0; e < Y.length; e++) for (let n = 0; n < Z.length; n++) {
        const s = Ye * ge * (n === 0 || n === Z.length - 1 ? 0.5 : 1) * (e === 0 || e === Y.length - 1 ? 0.5 : 1), _ = j * s, c = j * s * a;
        l.push({
          node: d[e][n],
          dof: 0,
          k: c
        }), l.push({
          node: d[e][n],
          dof: 1,
          k: c
        }), l.push({
          node: d[e][n],
          dof: 2,
          k: _
        }), i.push(d[e][n]);
      }
      for (let e = 0; e < U.length; e++) for (let n = 0; n < K.length; n++) {
        const s = Ce * We * (n === 0 || n === K.length - 1 ? 0.5 : 1) * (e === 0 || e === U.length - 1 ? 0.5 : 1), _ = j * s, c = j * s * a;
        l.push({
          node: S[e][n],
          dof: 0,
          k: c
        }), l.push({
          node: S[e][n],
          dof: 1,
          k: c
        }), l.push({
          node: S[e][n],
          dof: 2,
          k: _
        }), i.push(S[e][n]);
      }
      const w = j * Ye * ge * 1e-4;
      l.push({
        node: d[0][0],
        dof: 3,
        k: w
      }), l.push({
        node: d[0][0],
        dof: 4,
        k: w
      }), l.push({
        node: d[0][0],
        dof: 5,
        k: w
      }), t.nodes.val = ue.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), t.elements.val = T, t.nodeInputs.val = {
        supports: De,
        loads: pe
      }, t.elementInputs.val = {
        elasticities: W,
        poissonsRatios: Q,
        areas: ne,
        momentsOfInertiaZ: v,
        momentsOfInertiaY: ve,
        torsionalConstants: he,
        shearModuli: E,
        thicknesses: se,
        densities: ee,
        sectionShapes: _e
      };
      try {
        t.deformOutputs.val = ft(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, l);
        const e = rt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), n = t.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        t.elements.rawVal.forEach((_, c) => {
          if (_.length !== 4) return;
          const C = [];
          for (const u of _) {
            const L = n == null ? void 0 : n.get(u), g = L ? L[2] : 0;
            C.push(-j * g);
          }
          s.set(c, C);
        }), e.pressure = s, t.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const f = t.deformOutputs.rawVal.deformations;
      let k = 1e-9;
      for (const e of i) {
        const n = f == null ? void 0 : f.get(e);
        n && Number.isFinite(n[2]) && (k = Math.max(k, Math.abs(n[2])));
      }
      const oe = new Set(i), b = st * 12, $ = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, O = (e, n) => {
        const s = e ? n : 0, c = -(k * Math.max(s, 1) + Ct), C = [];
        for (const u of i) {
          if (!oe.has(u)) continue;
          const L = t.nodes.rawVal[u];
          if (!L) continue;
          const g = L[0], I = L[1], q = f == null ? void 0 : f.get(u), we = (R) => Number.isFinite(R) ? R : 0, Je = q ? we(q[0]) : 0, ke = q ? we(q[1]) : 0, A = q ? we(q[2]) : 0, qe = g + Je * s, y = I + ke * s, Ae = 0 + A * s, Ke = Ae - c, Le = (R) => [
            g + (qe - g) * R,
            I + (y - I) * R,
            c + Ke * R
          ], [Ue, Be, ut] = Le(0), [pt, ht, _t] = Le(0.05), Qe = [
            new p(Ue, Be, ut),
            new p(pt, ht, _t)
          ];
          for (let R = 0; R <= b; R++) {
            const bt = 0.05 + 0.9 * (R / b), [gt, Mt, vt] = Le(bt), tt = 2 * Math.PI * st * (R / b);
            Qe.push(new p(gt + nt * Math.cos(tt), Mt + nt * Math.sin(tt), vt));
          }
          Qe.push(new p(qe, y, Ae)), C.push(new He(new Ge().setFromPoints(Qe), At));
          const V = qt, xt = [
            new p(g - V, I - V, c),
            new p(g + V, I - V, c),
            new p(g + V, I + V, c),
            new p(g - V, I + V, c),
            new p(g - V, I - V, c)
          ];
          C.push(new He(new Ge().setFromPoints(xt), Bt));
        }
        return C;
      }, ce = Ve.v;
      $ ? mt.derive(() => {
        const e = $.deformedShape.val, n = $.deformScale.val;
        Ve.v === ce && (t.objects3D.val = O(e, n));
      }) : t.objects3D.val = O(true, 1);
    },
    runModal(o, t, r) {
      var _a, _b;
      const m = t.nodes.val, D = t.elements.val, h = t.nodeInputs.val, z = t.elementInputs.val;
      if (!(!m.length || !D.length || !((_a = z.densities) == null ? void 0 : _a.size))) try {
        const x = dt(m, D, h, z, 12);
        r.render(x, {
          title: `Zapata + Viga amarre Lv=${o.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${o.Bv}\xD7${o.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = x.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (x) {
        console.warn("Modal zapata-viga error:", x.message);
      }
    }
  };
  Re = 25e6;
  Fe = 0.2;
  Rt = Re / (2 * (1 + Fe));
  at = 24;
  ye = 9.80665;
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
  Ft = 0.2;
  ct = 0.035;
  it = 8;
  Ht = new je({
    color: 16711731,
    linewidth: 2
  });
  Gt = new je({
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
        options: Object.fromEntries(lt.map((o, t) => [
          o.name,
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
    onParamChange(o, t) {
      if (o === "soilType") {
        const r = Math.round(t.soilType ?? 0);
        if (r > 0) {
          const m = lt[r];
          t.q_adm = m.q_adm, t.ks_factor = m.ks_factor, t.su = m.su, t.phi = m.phi, t.gamma = m.gamma, t.N_SPT = m.N_SPT, t.E_soil = m.E_soil;
        }
      }
      if (o === "combo") {
        const r = Math.round(t.combo ?? 0), m = [
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
        r >= 0 && r < m.length && ([t.fD, t.fL, t.fS] = m[r]);
      }
    },
    build(o, t) {
      var _a;
      const { Lz: r, Bz: m, tz: D, bc: h, Hp: z } = o, x = o.q_adm, Me = o.ks_factor, N = x * ye * Me, ie = o.fD ?? 1.2, me = o.fL ?? 1.6, re = o.fS ?? 0, j = ie * (o.P_D ?? 0) + me * (o.P_L ?? 0) + re * (o.P_S ?? 0), Ee = ie * (o.Mx_D ?? 0) + me * (o.Mx_L ?? 0) + re * (o.Mx_S ?? 0), Ie = ie * (o.My_D ?? 0) + me * (o.My_L ?? 0) + re * (o.My_S ?? 0), Xe = j * ye, Ze = Ee * ye, de = Ie * ye, F = Math.round(o.nSub), J = r / 2, X = m / 2, P = [], M = [];
      for (let a = 0; a <= F; a++) P.push(r * a / F), M.push(m * a / F);
      P.includes(J) || (P.push(J), P.sort((a, l) => a - l)), M.includes(X) || (M.push(X), M.sort((a, l) => a - l));
      const fe = [], H = [], Z = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), se = (a, l, i) => {
        const w = `${a.toFixed(4)},${l.toFixed(4)},${i.toFixed(4)}`;
        if (ne.has(w)) return ne.get(w);
        const f = fe.length;
        return fe.push([
          a,
          l,
          i
        ]), ne.set(w, f), f;
      }, v = [];
      for (let a = 0; a < M.length; a++) {
        const l = [];
        for (let i = 0; i < P.length; i++) l.push(se(P[i], M[a], 0));
        v.push(l);
      }
      for (let a = 0; a < M.length - 1; a++) for (let l = 0; l < P.length - 1; l++) {
        const i = H.length;
        H.push([
          v[a][l],
          v[a][l + 1],
          v[a + 1][l + 1],
          v[a + 1][l]
        ]), U.set(i, D), Z.set(i, Re), Y.set(i, Fe), W.set(i, at);
      }
      const ve = se(J, X, 0), he = se(J, X, z), E = H.length;
      H.push([
        ve,
        he
      ]), Z.set(E, Re), Y.set(E, Fe), pe.set(E, Rt), K.set(E, h * h), ue.set(E, h ** 4 / 12), T.set(E, h ** 4 / 12), De.set(E, 0.14 * h ** 4), W.set(E, at), Q.set(E, {
        type: "rect",
        b: h,
        h
      });
      const ee = /* @__PURE__ */ new Map();
      ee.set(he, [
        0,
        0,
        -Xe,
        Ze,
        de,
        0
      ]);
      const _e = r / F, xe = m / F, te = 0.5, d = [], S = [];
      for (let a = 0; a < M.length; a++) for (let l = 0; l < P.length; l++) {
        const i = _e * xe * (l === 0 || l === P.length - 1 ? 0.5 : 1) * (a === 0 || a === M.length - 1 ? 0.5 : 1), w = N * i, f = N * i * te;
        d.push({
          node: v[a][l],
          dof: 0,
          k: f
        }), d.push({
          node: v[a][l],
          dof: 1,
          k: f
        }), d.push({
          node: v[a][l],
          dof: 2,
          k: w
        }), S.push(v[a][l]);
      }
      const Te = N * _e * xe * 1e-4, be = v[0][0];
      d.push({
        node: be,
        dof: 3,
        k: Te
      }), d.push({
        node: be,
        dof: 4,
        k: Te
      }), d.push({
        node: be,
        dof: 5,
        k: Te
      }), t.nodes.val = fe.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), t.elements.val = H, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: ee
      }, t.elementInputs.val = {
        elasticities: Z,
        poissonsRatios: Y,
        areas: K,
        momentsOfInertiaZ: ue,
        momentsOfInertiaY: T,
        torsionalConstants: De,
        shearModuli: pe,
        thicknesses: U,
        densities: W,
        sectionShapes: Q
      };
      try {
        t.deformOutputs.val = ft(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, d);
        const a = rt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), l = t.deformOutputs.rawVal.deformations, i = /* @__PURE__ */ new Map();
        let w = 0;
        t.elements.rawVal.forEach((O, ce) => {
          if (O.length !== 4) return;
          const e = [];
          for (const n of O) {
            const s = l == null ? void 0 : l.get(n), c = N * (s ? s[2] : 0) / ye;
            e.push(c), c < w && (w = c);
          }
          i.set(ce, e);
        }), a.pressure = i, t.analyzeOutputs.val = a;
        const f = Math.abs(w);
        let k = 1 / 0;
        i.forEach((O) => {
          for (const ce of O) {
            const e = Math.abs(ce);
            e < k && (k = e);
          }
        }), Number.isFinite(k) || (k = 0);
        const oe = f / o.q_adm, b = Re * D ** 3 / (12 * (1 - Fe ** 2)) / (N * r ** 4), $ = [
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
        ][Math.round(o.combo ?? 0)] ?? "?";
        console.log(`[Zapata Aislada]  Combo: ${$}  (fD=${ie}, fL=${me}, fS=${re})
  Cargas totales: P=${j.toFixed(2)} tonf, Mx=${Ee.toFixed(2)} tonf\xB7m, My=${Ie.toFixed(2)} tonf\xB7m
  Patrones: D(${o.P_D}, ${o.Mx_D}, ${o.My_D}) L(${o.P_L}, ${o.Mx_L}, ${o.My_L}) S(${o.P_S}, ${o.Mx_S}, ${o.My_S})
  q_max (centro) = -${f.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${k.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - k / (f || 1)) * 100).toFixed(1)}%
  q_adm = -${o.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${oe.toFixed(2)}` + (oe > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${b.toFixed(2)} (${b < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (a) {
        console.error("Solver error zapata aislada:", a);
      }
      const $e = t.deformOutputs.rawVal.deformations;
      let ae = 1e-9;
      for (const a of S) {
        const l = $e == null ? void 0 : $e.get(a);
        l && Number.isFinite(l[2]) && (ae = Math.max(ae, Math.abs(l[2])));
      }
      const le = it * 12, B = new Set(S), ge = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Ce = (a, l) => {
        const i = a ? l : 0, f = -(ae * Math.max(i, 1) + Ft), k = [];
        for (const oe of S) {
          if (!B.has(oe)) continue;
          const Se = t.nodes.rawVal[oe];
          if (!Se) continue;
          const b = Se[0], G = Se[1], $ = $e == null ? void 0 : $e.get(oe), O = (y) => Number.isFinite(y) ? y : 0, ce = $ ? O($[0]) : 0, e = $ ? O($[1]) : 0, n = $ ? O($[2]) : 0, s = b + ce * i, _ = G + e * i, c = 0 + n * i, C = c - f, u = (y) => [
            b + (s - b) * y,
            G + (_ - G) * y,
            f + C * y
          ], [L, g, I] = u(0), [q, we, Je] = u(0.05), ke = [
            new p(L, g, I),
            new p(q, we, Je)
          ];
          for (let y = 0; y <= le; y++) {
            const Ae = 0.05 + 0.9 * (y / le), [Ke, Le, Ue] = u(Ae), Be = 2 * Math.PI * it * (y / le);
            ke.push(new p(Ke + ct * Math.cos(Be), Le + ct * Math.sin(Be), Ue));
          }
          ke.push(new p(s, _, c)), k.push(new He(new Ge().setFromPoints(ke), Ht));
          const A = Vt, qe = [
            new p(b - A, G - A, f),
            new p(b + A, G - A, f),
            new p(b + A, G + A, f),
            new p(b - A, G + A, f),
            new p(b - A, G - A, f)
          ];
          k.push(new He(new Ge().setFromPoints(qe), Gt));
        }
        return k;
      }, We = Ve.v;
      ge ? mt.derive(() => {
        const a = ge.deformedShape.val, l = ge.deformScale.val;
        Ve.v === We && (t.objects3D.val = Ce(a, l));
      }) : t.objects3D.val = Ce(true, 1);
    },
    runModal(o, t, r) {
      var _a, _b;
      const m = t.nodes.val, D = t.elements.val, h = t.nodeInputs.val, z = t.elementInputs.val;
      if (!(!m.length || !D.length || !((_a = z.densities) == null ? void 0 : _a.size))) try {
        const x = dt(m, D, h, z, 12);
        r.render(x, {
          title: `Zapata Aislada ${o.Lz}\xD7${o.Bz}m t=${o.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${o.bc}m  Hp=${o.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = x.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (x) {
        console.warn("Modal zapata error:", x.message);
      }
    }
  };
  Ve = {
    v: 0
  };
  mo = [
    Pt,
    Nt,
    Et,
    It,
    Dt,
    zt,
    Tt,
    $t,
    St,
    wt,
    kt,
    Lt,
    yt,
    jt,
    Ot
  ];
});
export {
  __tla,
  Ve as a,
  jt as b,
  mo as e,
  Ot as z
};
