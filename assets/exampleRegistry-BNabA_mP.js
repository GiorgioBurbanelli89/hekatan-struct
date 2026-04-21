import { a as Xe, V as d, L as Ve, B as Fe } from "./Text-CBH-tcJP.js";
import { v as it } from "./theme-CzzIlc4y.js";
import { a as rt } from "./analyze-ClLKGn9k.js";
import { m as mt, d as dt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
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
let je, Xt, mn, Gt;
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
  let Le, qe, tt, Ge, At, nt, ot, Ct, $t, Ot, Re, He, Rt, st, Te, at, Ht, lt, ct, Vt, Ft, jt;
  Le = 25e6;
  qe = 0.2;
  tt = Le / (2 * (1 + qe));
  Ge = 24;
  At = 0.2;
  nt = 0.035;
  ot = 8;
  Ct = 0.04;
  $t = new Xe({
    color: 16711731,
    linewidth: 2
  });
  Ot = new Xe({
    color: 52224,
    linewidth: 2
  });
  Gt = {
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
      const p = a.Lz1, r = a.Bz1, q = a.Lv, u = a.Bv, z = a.Hv, M = a.Lz2, ke = a.Bz2, Be = a.tz, N = a.bc, De = a.Hp, Ze = a.P1, Ye = a.P2, B = a.ks, me = a.M1x ?? 0, de = a.M1y ?? 0, A = a.M2x ?? 0, C = a.M2y ?? 0, K = Math.round(a.nSubX), F = Math.round(a.nSubY), oe = 0.2, U = r / 2, pe = p + q + M / 2, se = ke / 2, Se = (U + se) / 2;
      function ae(e, t, s, g) {
        const i = [
          e,
          ...s.filter((h) => h > e && h < t),
          t
        ].sort((h, k) => h - k), w = [];
        for (let h = 0; h < i.length - 1; h++) {
          const k = i[h], b = i[h + 1], L = Math.max(1, Math.round((b - k) / ((t - e) / g)));
          for (let O = 0; O < L; O++) w.push(k + (b - k) * O / L);
        }
        return w.push(i[i.length - 1]), w;
      }
      const Q = ae(0, p, [
        oe
      ], K), ee = ae(0, r, [
        U,
        Se
      ], F), Y = ae(p + q, p + q + M, [
        pe
      ], K), te = ae(0, ke, [
        se,
        Se
      ], F), le = [], E = [], x = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), j = (e, t, s) => {
        const g = `${e.toFixed(4)},${t.toFixed(4)},${s.toFixed(4)}`;
        if (xe.has(g)) return xe.get(g);
        const i = le.length;
        return le.push([
          e,
          t,
          s
        ]), xe.set(g, i), i;
      }, y = [];
      for (let e = 0; e < ee.length; e++) {
        const t = [];
        for (let s = 0; s < Q.length; s++) t.push(j(Q[s], ee[e], 0));
        y.push(t);
      }
      for (let e = 0; e < ee.length - 1; e++) for (let t = 0; t < Q.length - 1; t++) {
        const s = E.length;
        E.push([
          y[e][t],
          y[e][t + 1],
          y[e + 1][t + 1],
          y[e + 1][t]
        ]), fe.set(s, Be), ne.set(s, Le), v.set(s, qe), W.set(s, Ge);
      }
      const I = [];
      for (let e = 0; e < te.length; e++) {
        const t = [];
        for (let s = 0; s < Y.length; s++) t.push(j(Y[s], te[e], 0));
        I.push(t);
      }
      for (let e = 0; e < te.length - 1; e++) for (let t = 0; t < Y.length - 1; t++) {
        const s = E.length;
        E.push([
          I[e][t],
          I[e][t + 1],
          I[e + 1][t + 1],
          I[e + 1][t]
        ]), fe.set(s, Be), ne.set(s, Le), v.set(s, qe), W.set(s, Ge);
      }
      const re = Math.round(a.vigaLevel) === 0 ? Be : De, Ae = j(oe, U, 0), ge = j(oe, U, re), We = j(pe, se, 0), J = j(pe, se, re);
      for (const [e, t] of [
        [
          Ae,
          ge
        ],
        [
          We,
          J
        ]
      ]) {
        const s = E.length;
        E.push([
          e,
          t
        ]), ne.set(s, Le), v.set(s, qe), ce.set(s, tt), ue.set(s, N * N), he.set(s, N ** 4 / 12), Ne.set(s, N ** 4 / 12), R.set(s, 0.14 * N ** 4), W.set(s, Ge), ie.set(s, {
          type: "rect",
          b: N,
          h: N
        });
      }
      const X = E.length;
      E.push([
        ge,
        J
      ]), ne.set(X, Le), v.set(X, qe), ce.set(X, tt), ue.set(X, u * z), he.set(X, u * z ** 3 / 12), Ne.set(X, z * u ** 3 / 12), R.set(X, 0.28 * u * z ** 3), W.set(X, Ge), ie.set(X, {
        type: "rect",
        b: u,
        h: z
      }), ze.set(ge, [
        0,
        0,
        -Ze,
        me,
        de,
        0
      ]), ze.set(J, [
        0,
        0,
        -Ye,
        A,
        C,
        0
      ]);
      const Me = p / K, Ee = r / F, Je = M / K, o = ke / F, l = 0.5, c = [], _ = [];
      for (let e = 0; e < ee.length; e++) for (let t = 0; t < Q.length; t++) {
        const s = Me * Ee * (t === 0 || t === Q.length - 1 ? 0.5 : 1) * (e === 0 || e === ee.length - 1 ? 0.5 : 1), g = B * s, i = B * s * l;
        c.push({
          node: y[e][t],
          dof: 0,
          k: i
        }), c.push({
          node: y[e][t],
          dof: 1,
          k: i
        }), c.push({
          node: y[e][t],
          dof: 2,
          k: g
        }), _.push(y[e][t]);
      }
      for (let e = 0; e < te.length; e++) for (let t = 0; t < Y.length; t++) {
        const s = Je * o * (t === 0 || t === Y.length - 1 ? 0.5 : 1) * (e === 0 || e === te.length - 1 ? 0.5 : 1), g = B * s, i = B * s * l;
        c.push({
          node: I[e][t],
          dof: 0,
          k: i
        }), c.push({
          node: I[e][t],
          dof: 1,
          k: i
        }), c.push({
          node: I[e][t],
          dof: 2,
          k: g
        }), _.push(I[e][t]);
      }
      const m = B * Me * Ee * 1e-4;
      c.push({
        node: y[0][0],
        dof: 3,
        k: m
      }), c.push({
        node: y[0][0],
        dof: 4,
        k: m
      }), c.push({
        node: y[0][0],
        dof: 5,
        k: m
      }), n.nodes.val = le.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), n.elements.val = E, n.nodeInputs.val = {
        supports: x,
        loads: ze
      }, n.elementInputs.val = {
        elasticities: ne,
        poissonsRatios: v,
        areas: ue,
        momentsOfInertiaZ: he,
        momentsOfInertiaY: Ne,
        torsionalConstants: R,
        shearModuli: ce,
        thicknesses: fe,
        densities: W,
        sectionShapes: ie
      };
      try {
        n.deformOutputs.val = dt(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, c);
        const e = rt(n.nodes.val, n.elements.val, n.elementInputs.val, n.deformOutputs.val), t = n.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        n.elements.rawVal.forEach((g, i) => {
          if (g.length !== 4) return;
          const w = [];
          for (const h of g) {
            const k = t == null ? void 0 : t.get(h), b = k ? k[2] : 0;
            w.push(-B * b);
          }
          s.set(i, w);
        }), e.pressure = s, n.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const P = n.deformOutputs.rawVal.deformations;
      let D = 1e-9;
      for (const e of _) {
        const t = P == null ? void 0 : P.get(e);
        t && Number.isFinite(t[2]) && (D = Math.max(D, Math.abs(t[2])));
      }
      const ve = new Set(_), f = ot * 12, T = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, be = (e, t) => {
        const s = e ? t : 0, i = -(D * Math.max(s, 1) + At), w = [];
        for (const h of _) {
          if (!ve.has(h)) continue;
          const k = n.nodes.rawVal[h];
          if (!k) continue;
          const b = k[0], L = k[1], O = P == null ? void 0 : P.get(h), ye = (V) => Number.isFinite(V) ? V : 0, Ie = O ? ye(O[0]) : 0, G = O ? ye(O[1]) : 0, Ke = O ? ye(O[2]) : 0, S = b + Ie * s, Ce = L + G * s, $e = 0 + Ke * s, Ue = $e - i, Pe = (V) => [
            b + (S - b) * V,
            L + (Ce - L) * V,
            i + Ue * V
          ], [Oe, pt, ut] = Pe(0), [ft, ht, xt] = Pe(0.05), Qe = [
            new d(Oe, pt, ut),
            new d(ft, ht, xt)
          ];
          for (let V = 0; V <= f; V++) {
            const gt = 0.05 + 0.9 * (V / f), [Mt, vt, bt] = Pe(gt), et = 2 * Math.PI * ot * (V / f);
            Qe.push(new d(Mt + nt * Math.cos(et), vt + nt * Math.sin(et), bt));
          }
          Qe.push(new d(S, Ce, $e)), w.push(new Ve(new Fe().setFromPoints(Qe), $t));
          const Z = Ct, _t = [
            new d(b - Z, L - Z, i),
            new d(b + Z, L - Z, i),
            new d(b + Z, L + Z, i),
            new d(b - Z, L + Z, i),
            new d(b - Z, L - Z, i)
          ];
          w.push(new Ve(new Fe().setFromPoints(_t), Ot));
        }
        return w;
      }, we = je.v;
      T ? it.derive(() => {
        const e = T.deformedShape.val, t = T.deformScale.val;
        je.v === we && (n.objects3D.val = be(e, t));
      }) : n.objects3D.val = be(true, 1);
    },
    runModal(a, n, p) {
      var _a, _b;
      const r = n.nodes.val, q = n.elements.val, u = n.nodeInputs.val, z = n.elementInputs.val;
      if (!(!r.length || !q.length || !((_a = z.densities) == null ? void 0 : _a.size))) try {
        const M = mt(r, q, u, z, 12);
        p.render(M, {
          title: `Zapata + Viga amarre Lv=${a.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${a.Bv}\xD7${a.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = M.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (M) {
        console.warn("Modal zapata-viga error:", M.message);
      }
    }
  };
  Re = 25e6;
  He = 0.2;
  Rt = Re / (2 * (1 + He));
  st = 24;
  Te = 9.80665;
  at = [
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
  Ht = 0.2;
  lt = 0.035;
  ct = 8;
  Vt = new Xe({
    color: 16711731,
    linewidth: 2
  });
  Ft = new Xe({
    color: 52224,
    linewidth: 2
  });
  jt = 0.04;
  Xt = {
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
        options: Object.fromEntries(at.map((a, n) => [
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
        const p = Math.round(n.soilType ?? 0);
        if (p > 0) {
          const r = at[p];
          n.q_adm = r.q_adm, n.ks_factor = r.ks_factor, n.su = r.su, n.phi = r.phi, n.gamma = r.gamma, n.N_SPT = r.N_SPT, n.E_soil = r.E_soil;
        }
      }
    },
    build(a, n) {
      var _a;
      const { Lz: p, Bz: r, tz: q, bc: u, Hp: z } = a, M = a.q_adm, ke = a.ks_factor, N = M * Te * ke, De = (a.CM + a.CV) * Te, Ze = a.Mx * Te, Ye = a.My * Te, B = Math.round(a.nSub), me = p / 2, de = r / 2, A = [], C = [];
      for (let o = 0; o <= B; o++) A.push(p * o / B), C.push(r * o / B);
      A.includes(me) || (A.push(me), A.sort((o, l) => o - l)), C.includes(de) || (C.push(de), C.sort((o, l) => o - l));
      const K = [], F = [], oe = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), E = (o, l, c) => {
        const _ = `${o.toFixed(4)},${l.toFixed(4)},${c.toFixed(4)}`;
        if (le.has(_)) return le.get(_);
        const m = K.length;
        return K.push([
          o,
          l,
          c
        ]), le.set(_, m), m;
      }, x = [];
      for (let o = 0; o < C.length; o++) {
        const l = [];
        for (let c = 0; c < A.length; c++) l.push(E(A[c], C[o], 0));
        x.push(l);
      }
      for (let o = 0; o < C.length - 1; o++) for (let l = 0; l < A.length - 1; l++) {
        const c = F.length;
        F.push([
          x[o][l],
          x[o][l + 1],
          x[o + 1][l + 1],
          x[o + 1][l]
        ]), se.set(c, q), oe.set(c, Re), U.set(c, He), Y.set(c, st);
      }
      const ze = E(me, de, 0), ne = E(me, de, z), v = F.length;
      F.push([
        ze,
        ne
      ]), oe.set(v, Re), U.set(v, He), ee.set(v, Rt), pe.set(v, u * u), Se.set(v, u ** 4 / 12), ae.set(v, u ** 4 / 12), Q.set(v, 0.14 * u ** 4), Y.set(v, st), te.set(v, {
        type: "rect",
        b: u,
        h: u
      });
      const ue = /* @__PURE__ */ new Map();
      ue.set(ne, [
        0,
        0,
        -De,
        Ze,
        Ye,
        0
      ]);
      const fe = p / B, he = r / B, Ne = 0.5, R = [], ce = [];
      for (let o = 0; o < C.length; o++) for (let l = 0; l < A.length; l++) {
        const c = fe * he * (l === 0 || l === A.length - 1 ? 0.5 : 1) * (o === 0 || o === C.length - 1 ? 0.5 : 1), _ = N * c, m = N * c * Ne;
        R.push({
          node: x[o][l],
          dof: 0,
          k: m
        }), R.push({
          node: x[o][l],
          dof: 1,
          k: m
        }), R.push({
          node: x[o][l],
          dof: 2,
          k: _
        }), ce.push(x[o][l]);
      }
      const W = N * fe * he * 1e-4, ie = x[0][0];
      R.push({
        node: ie,
        dof: 3,
        k: W
      }), R.push({
        node: ie,
        dof: 4,
        k: W
      }), R.push({
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
        n.deformOutputs.val = dt(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, R);
        const o = rt(n.nodes.val, n.elements.val, n.elementInputs.val, n.deformOutputs.val), l = n.deformOutputs.rawVal.deformations, c = /* @__PURE__ */ new Map();
        let _ = 0;
        n.elements.rawVal.forEach((f, H) => {
          if (f.length !== 4) return;
          const T = [];
          for (const be of f) {
            const we = l == null ? void 0 : l.get(be), t = N * (we ? we[2] : 0) / Te;
            T.push(t), t < _ && (_ = t);
          }
          c.set(H, T);
        }), o.pressure = c, n.analyzeOutputs.val = o;
        const m = Math.abs(_);
        let P = 1 / 0;
        c.forEach((f) => {
          for (const H of f) {
            const T = Math.abs(H);
            T < P && (P = T);
          }
        }), Number.isFinite(P) || (P = 0);
        const D = m / a.q_adm, $ = Re * q ** 3 / (12 * (1 - He ** 2)) / (N * p ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${m.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${P.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - P / (m || 1)) * 100).toFixed(1)}%
  q_adm = -${a.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${D.toFixed(2)}` + (D > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${$.toFixed(2)} (${$ < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (o) {
        console.error("Solver error zapata aislada:", o);
      }
      const xe = n.deformOutputs.rawVal.deformations;
      let j = 1e-9;
      for (const o of ce) {
        const l = xe == null ? void 0 : xe.get(o);
        l && Number.isFinite(l[2]) && (j = Math.max(j, Math.abs(l[2])));
      }
      const I = ct * 12, _e = A.length, re = C.length, Ae = 6, ge = Math.max(1, Math.ceil((_e - 1) / (Ae - 1))), We = Math.max(1, Math.ceil((re - 1) / (Ae - 1))), J = /* @__PURE__ */ new Set();
      for (let o = 0; o < re; o += We) {
        for (let l = 0; l < _e; l += ge) J.add(x[o][l]);
        J.add(x[o][_e - 1]);
      }
      for (let o = 0; o < _e; o += ge) J.add(x[re - 1][o]);
      J.add(x[re - 1][_e - 1]);
      const Me = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Ee = (o, l) => {
        const c = o ? l : 0, m = -(j * Math.max(c, 1) + Ht), P = [];
        for (const D of ce) {
          if (!J.has(D)) continue;
          const ve = n.nodes.rawVal[D];
          if (!ve) continue;
          const $ = ve[0], f = ve[1], H = xe == null ? void 0 : xe.get(D), T = (S) => Number.isFinite(S) ? S : 0, be = H ? T(H[0]) : 0, we = H ? T(H[1]) : 0, e = H ? T(H[2]) : 0, t = $ + be * c, s = f + we * c, g = 0 + e * c, i = g - m, w = (S) => [
            $ + (t - $) * S,
            f + (s - f) * S,
            m + i * S
          ], [h, k, b] = w(0), [L, O, ye] = w(0.05), Ie = [
            new d(h, k, b),
            new d(L, O, ye)
          ];
          for (let S = 0; S <= I; S++) {
            const Ce = 0.05 + 0.9 * (S / I), [$e, Ue, Pe] = w(Ce), Oe = 2 * Math.PI * ct * (S / I);
            Ie.push(new d($e + lt * Math.cos(Oe), Ue + lt * Math.sin(Oe), Pe));
          }
          Ie.push(new d(t, s, g)), P.push(new Ve(new Fe().setFromPoints(Ie), Vt));
          const G = jt, Ke = [
            new d($ - G, f - G, m),
            new d($ + G, f - G, m),
            new d($ + G, f + G, m),
            new d($ - G, f + G, m),
            new d($ - G, f - G, m)
          ];
          P.push(new Ve(new Fe().setFromPoints(Ke), Ft));
        }
        return P;
      }, Je = je.v;
      Me ? it.derive(() => {
        const o = Me.deformedShape.val, l = Me.deformScale.val;
        je.v === Je && (n.objects3D.val = Ee(o, l));
      }) : n.objects3D.val = Ee(true, 1);
    },
    runModal(a, n, p) {
      var _a, _b;
      const r = n.nodes.val, q = n.elements.val, u = n.nodeInputs.val, z = n.elementInputs.val;
      if (!(!r.length || !q.length || !((_a = z.densities) == null ? void 0 : _a.size))) try {
        const M = mt(r, q, u, z, 12);
        p.render(M, {
          title: `Zapata Aislada ${a.Lz}\xD7${a.Bz}m t=${a.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${a.bc}m  Hp=${a.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = M.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (M) {
        console.warn("Modal zapata error:", M.message);
      }
    }
  };
  je = {
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
    Xt,
    Gt
  ];
});
export {
  __tla,
  je as a,
  Xt as b,
  mn as e,
  Gt as z
};
