import { a as Ke, V as M, L as Ze, B as Ye } from "./Text-CBH-tcJP.js";
import { v as ut } from "./theme-CzzIlc4y.js";
import { a as pt } from "./analyze-ClLKGn9k.js";
import { m as Pt, d as Xe, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as Nt, __tla as __tla_1 } from "./plateThickValidacion-D_mgYE7c.js";
import { p as yt, __tla as __tla_2 } from "./plateThin-C30Q-WjQ.js";
import { p as It, __tla as __tla_3 } from "./plateThick-DrHD17l3.js";
import { m as Et, __tla as __tla_4 } from "./membrana-Darbd52d.js";
import { s as Dt, __tla as __tla_5 } from "./shellThin-ORSIx719.js";
import { s as Ft, __tla as __tla_6 } from "./shellThick-BSU3qF0E.js";
import { e as qt, __tla as __tla_7 } from "./edificioAporticado-DG3xVeOI.js";
import { t as Ct, __tla as __tla_8 } from "./trussGen-CYTV_Ioz.js";
import { b as $t, __tla as __tla_9 } from "./barraAxial-Bnm-0MrG.js";
import { p as At, __tla as __tla_10 } from "./portico2D-kxfBcLlJ.js";
import { t as Tt, __tla as __tla_11 } from "./tower3D-tLRX3VEB.js";
import { g as Bt, __tla as __tla_12 } from "./galpon-BaNuuhBd.js";
import { e as Ot, __tla as __tla_13 } from "./edifAcero-Dhwvq9Mc.js";
import { m as Rt, __tla as __tla_14 } from "./mezanine-BmEOOT1G.js";
let Ue, Jt, so, wo, Xt;
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
  })(),
  (() => {
    try {
      return __tla_14;
    } catch {
    }
  })()
]).then(async () => {
  let et, tt, ht, st, Gt, xt, Mt, Ht, Vt, jt, Oe, Re, Zt, bt, Ce, gt, Yt, vt, kt, Ut, Kt, Wt, Ge, He, Qt, St, Be, eo, wt, Lt, to, oo, no;
  et = 25e6;
  tt = 0.2;
  ht = et / (2 * (1 + tt));
  st = 24;
  Gt = 0.2;
  xt = 0.035;
  Mt = 8;
  Ht = 0.04;
  Vt = new Ke({
    color: 16711731,
    linewidth: 2
  });
  jt = new Ke({
    color: 52224,
    linewidth: 2
  });
  Xt = {
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
      const r = e.Lz1, m = e.Bz1, z = e.Lv, d = e.Bv, I = e.Hv, L = e.Lz2, C = e.Bz2, ae = e.tz, N = e.bc, J = e.Hp, V = e.P1, he = e.P2, O = e.ks, $ = e.M1x ?? 0, Q = e.M1y ?? 0, K = e.M2x ?? 0, E = e.M2y ?? 0, x = Math.round(e.nSubX), D = Math.round(e.nSubY), ee = 0.2, te = m / 2, oe = r + z + L / 2, le = C / 2, de = (te + le) / 2;
      function W(o, n, s, b) {
        const f = [
          o,
          ...s.filter((h) => h > o && h < n),
          n
        ].sort((h, u) => h - u), U = [];
        for (let h = 0; h < f.length - 1; h++) {
          const u = f[h], g = f[h + 1], p = Math.max(1, Math.round((g - u) / ((n - o) / b)));
          for (let H = 0; H < p; H++) U.push(u + (g - u) * H / p);
        }
        return U.push(f[f.length - 1]), U;
      }
      const j = W(0, r, [
        ee
      ], x), R = W(0, m, [
        te,
        de
      ], D), ke = W(r + z, r + z + L, [
        oe
      ], x), ge = W(0, C, [
        le,
        de
      ], D), xe = [], G = [], Se = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), ue = (o, n, s) => {
        const b = `${o.toFixed(4)},${n.toFixed(4)},${s.toFixed(4)}`;
        if (ze.has(b)) return ze.get(b);
        const f = xe.length;
        return xe.push([
          o,
          n,
          s
        ]), ze.set(b, f), f;
      }, T = [];
      for (let o = 0; o < R.length; o++) {
        const n = [];
        for (let s = 0; s < j.length; s++) n.push(ue(j[s], R[o], 0));
        T.push(n);
      }
      for (let o = 0; o < R.length - 1; o++) for (let n = 0; n < j.length - 1; n++) {
        const s = G.length;
        G.push([
          T[o][n],
          T[o][n + 1],
          T[o + 1][n + 1],
          T[o + 1][n]
        ]), we.set(s, ae), X.set(s, et), ne.set(s, tt), fe.set(s, st);
      }
      const ce = [];
      for (let o = 0; o < ge.length; o++) {
        const n = [];
        for (let s = 0; s < ke.length; s++) n.push(ue(ke[s], ge[o], 0));
        ce.push(n);
      }
      for (let o = 0; o < ge.length - 1; o++) for (let n = 0; n < ke.length - 1; n++) {
        const s = G.length;
        G.push([
          ce[o][n],
          ce[o][n + 1],
          ce[o + 1][n + 1],
          ce[o + 1][n]
        ]), we.set(s, ae), X.set(s, et), ne.set(s, tt), fe.set(s, st);
      }
      const se = Math.round(e.vigaLevel) === 0 ? ae : J, ot = ue(ee, te, 0), Ne = ue(ee, te, se), ie = ue(oe, le, 0), qe = ue(oe, le, se);
      for (const [o, n] of [
        [
          ot,
          Ne
        ],
        [
          ie,
          qe
        ]
      ]) {
        const s = G.length;
        G.push([
          o,
          n
        ]), X.set(s, et), ne.set(s, tt), Z.set(s, ht), A.set(s, N * N), Le.set(s, N ** 4 / 12), Ie.set(s, N ** 4 / 12), De.set(s, 0.14 * N ** 4), fe.set(s, st), Pe.set(s, {
          type: "rect",
          b: N,
          h: N
        });
      }
      const a = G.length;
      G.push([
        Ne,
        qe
      ]), X.set(a, et), ne.set(a, tt), Z.set(a, ht), A.set(a, d * I), Le.set(a, d * I ** 3 / 12), Ie.set(a, I * d ** 3 / 12), De.set(a, 0.28 * d * I ** 3), fe.set(a, st), Pe.set(a, {
        type: "rect",
        b: d,
        h: I
      }), v.set(Ne, [
        0,
        0,
        -V,
        $,
        Q,
        0
      ]), v.set(qe, [
        0,
        0,
        -he,
        K,
        E,
        0
      ]);
      const i = r / x, _ = m / D, F = L / x, k = C / D, Me = 0.5, q = [], re = [];
      for (let o = 0; o < R.length; o++) for (let n = 0; n < j.length; n++) {
        const s = i * _ * (n === 0 || n === j.length - 1 ? 0.5 : 1) * (o === 0 || o === R.length - 1 ? 0.5 : 1), b = O * s, f = O * s * Me;
        q.push({
          node: T[o][n],
          dof: 0,
          k: f
        }), q.push({
          node: T[o][n],
          dof: 1,
          k: f
        }), q.push({
          node: T[o][n],
          dof: 2,
          k: b
        }), re.push(T[o][n]);
      }
      for (let o = 0; o < ge.length; o++) for (let n = 0; n < ke.length; n++) {
        const s = F * k * (n === 0 || n === ke.length - 1 ? 0.5 : 1) * (o === 0 || o === ge.length - 1 ? 0.5 : 1), b = O * s, f = O * s * Me;
        q.push({
          node: ce[o][n],
          dof: 0,
          k: f
        }), q.push({
          node: ce[o][n],
          dof: 1,
          k: f
        }), q.push({
          node: ce[o][n],
          dof: 2,
          k: b
        }), re.push(ce[o][n]);
      }
      const y = O * i * _ * 1e-4;
      q.push({
        node: T[0][0],
        dof: 3,
        k: y
      }), q.push({
        node: T[0][0],
        dof: 4,
        k: y
      }), q.push({
        node: T[0][0],
        dof: 5,
        k: y
      }), t.nodes.val = xe.map((o) => [
        o[0],
        o[1],
        o[2]
      ]), t.elements.val = G, t.nodeInputs.val = {
        supports: Se,
        loads: v
      }, t.elementInputs.val = {
        elasticities: X,
        poissonsRatios: ne,
        areas: A,
        momentsOfInertiaZ: Le,
        momentsOfInertiaY: Ie,
        torsionalConstants: De,
        shearModuli: Z,
        thicknesses: we,
        densities: fe,
        sectionShapes: Pe
      };
      try {
        t.deformOutputs.val = Xe(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, q);
        const o = pt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), n = t.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        t.elements.rawVal.forEach((b, f) => {
          if (b.length !== 4) return;
          const U = [];
          for (const h of b) {
            const u = n == null ? void 0 : n.get(h), g = u ? u[2] : 0;
            U.push(-O * g);
          }
          s.set(f, U);
        }), o.pressure = s, t.analyzeOutputs.val = o;
      } catch (o) {
        console.error("Solver error:", o);
      }
      const B = t.deformOutputs.rawVal.deformations;
      let Y = 1e-9;
      for (const o of re) {
        const n = B == null ? void 0 : B.get(o);
        n && Number.isFinite(n[2]) && (Y = Math.max(Y, Math.abs(n[2])));
      }
      const ye = new Set(re), S = Mt * 12, me = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, l = (o, n) => {
        const s = o ? n : 0, f = -(Y * Math.max(s, 1) + Gt), U = [];
        for (const h of re) {
          if (!ye.has(h)) continue;
          const u = t.nodes.rawVal[h];
          if (!u) continue;
          const g = u[0], p = u[1], H = B == null ? void 0 : B.get(h), w = (_e) => Number.isFinite(_e) ? _e : 0, $e = H ? w(H[0]) : 0, Ee = H ? w(H[1]) : 0, Ae = H ? w(H[2]) : 0, ve = g + $e * s, Te = p + Ee * s, je = 0 + Ae * s, at = je - f, We = (_e) => [
            g + (ve - g) * _e,
            p + (Te - p) * _e,
            f + at * _e
          ], [lt, ct, it] = We(0), [rt, Je, be] = We(0.05), Qe = [
            new M(lt, ct, it),
            new M(rt, Je, be)
          ];
          for (let _e = 0; _e <= S; _e++) {
            const dt = 0.05 + 0.9 * (_e / S), [ft, nt, zt] = We(dt), _t = 2 * Math.PI * Mt * (_e / S);
            Qe.push(new M(ft + xt * Math.cos(_t), nt + xt * Math.sin(_t), zt));
          }
          Qe.push(new M(ve, Te, je)), U.push(new Ze(new Ye().setFromPoints(Qe), Vt));
          const P = Ht, mt = [
            new M(g - P, p - P, f),
            new M(g + P, p - P, f),
            new M(g + P, p + P, f),
            new M(g - P, p + P, f),
            new M(g - P, p - P, f)
          ];
          U.push(new Ze(new Ye().setFromPoints(mt), jt));
        }
        return U;
      }, c = Ue.v;
      me ? ut.derive(() => {
        const o = me.deformedShape.val, n = me.deformScale.val;
        Ue.v === c && (t.objects3D.val = l(o, n));
      }) : t.objects3D.val = l(true, 1);
    },
    runModal(e, t, r) {
      var _a, _b;
      const m = t.nodes.val, z = t.elements.val, d = t.nodeInputs.val, I = t.elementInputs.val;
      if (!(!m.length || !z.length || !((_a = I.densities) == null ? void 0 : _a.size))) try {
        const L = Pt(m, z, d, I, 12);
        r.render(L, {
          title: `Zapata + Viga amarre Lv=${e.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${e.Bv}\xD7${e.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = L.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (L) {
        console.warn("Modal zapata-viga error:", L.message);
      }
    }
  };
  Oe = 25e6;
  Re = 0.2;
  Zt = Oe / (2 * (1 + Re));
  bt = 24;
  Ce = 9.80665;
  gt = [
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
  Yt = 0.2;
  vt = 0.035;
  kt = 8;
  Ut = new Ke({
    color: 16711731,
    linewidth: 2
  });
  Kt = new Ke({
    color: 52224,
    linewidth: 2
  });
  Wt = 0.04;
  Jt = {
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
        options: Object.fromEntries(gt.map((e, t) => [
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
        label: "ks_factor Bowles (referencia)"
      },
      ks: {
        default: 2059,
        min: 100,
        max: 2e5,
        step: 10,
        label: "ks (kN/m\xB3)"
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
      useSimple: {
        default: 0,
        boolean: true,
        label: "\u{1F3AF} Usar Carga Simple (ignora D/L/S)",
        folder: "Cargas \u2014 Activar"
      },
      useD: {
        default: 1,
        boolean: true,
        label: "\u2611 Usar Patr\xF3n D (Muerta)",
        folder: "Cargas \u2014 Activar"
      },
      useL: {
        default: 1,
        boolean: true,
        label: "\u2611 Usar Patr\xF3n L (Viva)",
        folder: "Cargas \u2014 Activar"
      },
      useS: {
        default: 0,
        boolean: true,
        label: "\u2610 Usar Patr\xF3n S (Sobrecarga)",
        folder: "Cargas \u2014 Activar"
      },
      useFactors: {
        default: 1,
        boolean: true,
        label: "\xD7 Aplicar factores fD/fL/fS",
        folder: "Cargas \u2014 Activar"
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
    inlineComputed: [
      {
        after: "ks_factor",
        label: "ks Bowles ref. (kN/m\xB3)",
        compute: (e) => ((e.q_adm ?? 20) * Ce * (e.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (e) => {
          const t = e.tz ?? 0.15;
          return (Oe * t ** 3 / (12 * (1 - Re ** 2))).toFixed(1);
        }
      },
      {
        after: "ks",
        label: "k_r Biot",
        compute: (e) => {
          const t = e.tz ?? 0.15, r = e.Lz ?? 2.5, m = e.ks ?? 2059, d = Oe * t ** 3 / (12 * (1 - Re ** 2)) / (m * r ** 4);
          return d.toFixed(3) + (d < 1 ? " FLEX" : " R\xCDG");
        }
      }
    ],
    computedLabels(e, t) {
      var _a;
      const r = (e.q_adm ?? 20) * Ce, m = e.ks ?? r * (e.ks_factor ?? 10.5), z = e.tz ?? 0.15, d = e.Lz ?? 2.5, I = Oe * z ** 3 / (12 * (1 - Re ** 2)), L = I / (m * d ** 4), C = (e.useSimple ?? 0) >= 0.5, ae = (e.useD ?? 0) >= 0.5, N = (e.useL ?? 0) >= 0.5, J = (e.useS ?? 0) >= 0.5, V = (e.useFactors ?? 1) >= 0.5, he = V ? e.fD ?? 1.2 : 1, O = V ? e.fL ?? 1.6 : 1, $ = V ? e.fS ?? 0 : 1, Q = ae ? 1 : 0, K = N ? 1 : 0, E = J ? 1 : 0;
      let x = 0;
      C ? x = e.P_simple ?? 0 : x = Q * he * (e.P_D ?? 0) + K * O * (e.P_L ?? 0) + E * $ * (e.P_S ?? 0);
      const D = [];
      C ? D.push("Simple") : (ae && D.push("D"), N && D.push("L"), J && D.push("S"), D.length || D.push("NINGUNO"));
      const ee = D.join("+") + (V && !C ? " (factor)" : "");
      let te = 0, oe = 0;
      const le = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (le && le.size) {
        for (const j of le.values()) for (const R of j) R < te && (te = R), (R < oe || oe === 0) && (oe = R);
        let W = 1 / 0;
        for (const j of le.values()) for (const R of j) Math.abs(R) < W && (W = Math.abs(R));
        oe = -W;
      }
      const de = Math.abs(te) / (e.q_adm || 1);
      return {
        "Patrones activos": ee,
        "ks (kN/m\xB3)": m.toFixed(0),
        "D (kN\xB7m)": I.toFixed(1),
        "k_r (Biot)": L.toFixed(3) + (L < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": x.toFixed(2),
        "q_max (tonf/m\xB2)": te.toFixed(2),
        "q_min (tonf/m\xB2)": oe.toFixed(2),
        "q/q_adm": de.toFixed(2) + (de > 1 ? " \u26A0" : " \u2713")
      };
    },
    onParamChange(e, t) {
      if (e === "soilType") {
        const r = Math.round(t.soilType ?? 0);
        if (r >= 0) {
          const m = gt[r];
          t.q_adm = m.q_adm, t.ks_factor = m.ks_factor, t.su = m.su, t.phi = m.phi, t.gamma = m.gamma, t.N_SPT = m.N_SPT, t.E_soil = m.E_soil, t.ks = m.q_adm * Ce * m.ks_factor;
        }
      }
      if (e === "combo") {
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
    build(e, t) {
      var _a;
      const { Lz: r, Bz: m, tz: z, bc: d, Hp: I } = e, L = e.q_adm, C = e.ks_factor, ae = L * Ce, N = e.ks ?? ae * C, J = (e.useSimple ?? 0) >= 0.5, V = (e.useD ?? 0) >= 0.5, he = (e.useL ?? 0) >= 0.5, O = (e.useS ?? 0) >= 0.5, $ = (e.useFactors ?? 1) >= 0.5, Q = $ ? e.fD ?? 1.2 : 1, K = $ ? e.fL ?? 1.6 : 1, E = $ ? e.fS ?? 0 : 1, x = V ? 1 : 0, D = he ? 1 : 0, ee = O ? 1 : 0, te = Q, oe = K, le = E;
      let de = 0, W = 0, j = 0;
      J ? (de = e.P_simple ?? 0, W = e.Mx_simple ?? 0, j = e.My_simple ?? 0) : (de = x * Q * (e.P_D ?? 0) + D * K * (e.P_L ?? 0) + ee * E * (e.P_S ?? 0), W = x * Q * (e.Mx_D ?? 0) + D * K * (e.Mx_L ?? 0) + ee * E * (e.Mx_S ?? 0), j = x * Q * (e.My_D ?? 0) + D * K * (e.My_L ?? 0) + ee * E * (e.My_S ?? 0));
      const R = de * Ce, ke = W * Ce, ge = j * Ce, xe = Math.round(e.nSub), G = r / 2, Se = m / 2, v = [], X = [];
      for (let l = 0; l <= xe; l++) v.push(r * l / xe), X.push(m * l / xe);
      v.includes(G) || (v.push(G), v.sort((l, c) => l - c)), X.includes(Se) || (X.push(Se), X.sort((l, c) => l - c));
      const ne = [], A = [], we = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Fe = (l, c, o) => {
        const n = `${l.toFixed(4)},${c.toFixed(4)},${o.toFixed(4)}`;
        if (ce.has(n)) return ce.get(n);
        const s = ne.length;
        return ne.push([
          l,
          c,
          o
        ]), ce.set(n, s), s;
      }, se = [];
      for (let l = 0; l < X.length; l++) {
        const c = [];
        for (let o = 0; o < v.length; o++) c.push(Fe(v[o], X[l], 0));
        se.push(c);
      }
      for (let l = 0; l < X.length - 1; l++) for (let c = 0; c < v.length - 1; c++) {
        const o = A.length;
        A.push([
          se[l][c],
          se[l][c + 1],
          se[l + 1][c + 1],
          se[l + 1][c]
        ]), De.set(o, z), we.set(o, Oe), Le.set(o, Re), ue.set(o, bt);
      }
      const ot = Fe(G, Se, 0), Ne = Fe(G, Se, I), ie = A.length;
      A.push([
        ot,
        Ne
      ]), we.set(ie, Oe), Le.set(ie, Re), ze.set(ie, Zt), Ie.set(ie, d * d), Z.set(ie, d ** 4 / 12), fe.set(ie, d ** 4 / 12), Pe.set(ie, 0.14 * d ** 4), ue.set(ie, bt), T.set(ie, {
        type: "rect",
        b: d,
        h: d
      });
      const qe = /* @__PURE__ */ new Map();
      qe.set(Ne, [
        0,
        0,
        -R,
        ke,
        ge,
        0
      ]);
      const a = r / xe, i = m / xe, _ = 0.5, F = [], k = [];
      for (let l = 0; l < X.length; l++) for (let c = 0; c < v.length; c++) {
        const o = a * i * (c === 0 || c === v.length - 1 ? 0.5 : 1) * (l === 0 || l === X.length - 1 ? 0.5 : 1), n = N * o, s = N * o * _;
        F.push({
          node: se[l][c],
          dof: 0,
          k: s
        }), F.push({
          node: se[l][c],
          dof: 1,
          k: s
        }), F.push({
          node: se[l][c],
          dof: 2,
          k: n
        }), k.push(se[l][c]);
      }
      const Me = N * a * i * 1e-4, q = se[0][0];
      F.push({
        node: q,
        dof: 3,
        k: Me
      }), F.push({
        node: q,
        dof: 4,
        k: Me
      }), F.push({
        node: q,
        dof: 5,
        k: Me
      }), t.nodes.val = ne.map((l) => [
        l[0],
        l[1],
        l[2]
      ]), t.elements.val = A, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: qe
      }, t.elementInputs.val = {
        elasticities: we,
        poissonsRatios: Le,
        areas: Ie,
        momentsOfInertiaZ: Z,
        momentsOfInertiaY: fe,
        torsionalConstants: Pe,
        shearModuli: ze,
        thicknesses: De,
        densities: ue,
        sectionShapes: T
      };
      try {
        t.deformOutputs.val = Xe(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, F);
        const l = pt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), c = t.deformOutputs.rawVal.deformations, o = /* @__PURE__ */ new Map();
        let n = 0;
        t.elements.rawVal.forEach((p, H) => {
          if (p.length !== 4) return;
          const w = [];
          for (const $e of p) {
            const Ee = c == null ? void 0 : c.get($e), ve = N * (Ee ? Ee[2] : 0) / Ce;
            w.push(ve), ve < n && (n = ve);
          }
          o.set(H, w);
        }), l.pressure = o, t.analyzeOutputs.val = l;
        const s = Math.abs(n);
        let b = 1 / 0;
        o.forEach((p) => {
          for (const H of p) {
            const w = Math.abs(H);
            w < b && (b = w);
          }
        }), Number.isFinite(b) || (b = 0);
        const f = s / e.q_adm, h = Oe * z ** 3 / (12 * (1 - Re ** 2)) / (N * r ** 4), u = [];
        J ? u.push("Simple") : (V && u.push(`D${$ ? "\xD7" + te : ""}`), he && u.push(`L${$ ? "\xD7" + oe : ""}`), O && u.push(`S${$ ? "\xD7" + le : ""}`), u.length || u.push("\u26A0 NINGUNO activo"));
        const g = u.join(" + ");
        console.log(`[Zapata Aislada]  Patrones activos: ${g}
  Cargas totales: P=${de.toFixed(2)} tonf, Mx=${W.toFixed(2)} tonf\xB7m, My=${j.toFixed(2)} tonf\xB7m
  Patrones: D(${e.P_D}, ${e.Mx_D}, ${e.My_D}) L(${e.P_L}, ${e.Mx_L}, ${e.My_L}) S(${e.P_S}, ${e.Mx_S}, ${e.My_S})
  q_max (centro) = -${s.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${b.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - b / (s || 1)) * 100).toFixed(1)}%
  q_adm = -${e.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${f.toFixed(2)}` + (f > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${h.toFixed(2)} (${h < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (l) {
        console.error("Solver error zapata aislada:", l);
      }
      const re = t.deformOutputs.rawVal.deformations;
      let y = 1e-9;
      for (const l of k) {
        const c = re == null ? void 0 : re.get(l);
        c && Number.isFinite(c[2]) && (y = Math.max(y, Math.abs(c[2])));
      }
      const Y = kt * 12, ye = new Set(k), S = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, pe = (l, c) => {
        const o = l ? c : 0, s = -(y * Math.max(o, 1) + Yt), b = [];
        for (const f of k) {
          if (!ye.has(f)) continue;
          const U = t.nodes.rawVal[f];
          if (!U) continue;
          const h = U[0], u = U[1], g = re == null ? void 0 : re.get(f), p = (P) => Number.isFinite(P) ? P : 0, H = g ? p(g[0]) : 0, w = g ? p(g[1]) : 0, $e = g ? p(g[2]) : 0, Ee = h + H * o, Ae = u + w * o, ve = 0 + $e * o, Te = ve - s, je = (P) => [
            h + (Ee - h) * P,
            u + (Ae - u) * P,
            s + Te * P
          ], [at, We, lt] = je(0), [ct, it, rt] = je(0.05), Je = [
            new M(at, We, lt),
            new M(ct, it, rt)
          ];
          for (let P = 0; P <= Y; P++) {
            const mt = 0.05 + 0.9 * (P / Y), [_e, dt, ft] = je(mt), nt = 2 * Math.PI * kt * (P / Y);
            Je.push(new M(_e + vt * Math.cos(nt), dt + vt * Math.sin(nt), ft));
          }
          Je.push(new M(Ee, Ae, ve)), b.push(new Ze(new Ye().setFromPoints(Je), Ut));
          const be = Wt, Qe = [
            new M(h - be, u - be, s),
            new M(h + be, u - be, s),
            new M(h + be, u + be, s),
            new M(h - be, u + be, s),
            new M(h - be, u - be, s)
          ];
          b.push(new Ze(new Ye().setFromPoints(Qe), Kt));
        }
        return b;
      }, me = Ue.v;
      S ? ut.derive(() => {
        const l = S.deformedShape.val, c = S.deformScale.val;
        Ue.v === me && (t.objects3D.val = pe(l, c));
      }) : t.objects3D.val = pe(true, 1);
    },
    runModal(e, t, r) {
      var _a, _b;
      const m = t.nodes.val, z = t.elements.val, d = t.nodeInputs.val, I = t.elementInputs.val;
      if (!(!m.length || !z.length || !((_a = I.densities) == null ? void 0 : _a.size))) try {
        const L = Pt(m, z, d, I, 12);
        r.render(L, {
          title: `Zapata Aislada ${e.Lz}\xD7${e.Bz}m t=${e.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${e.bc}m  Hp=${e.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = L.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (L) {
        console.warn("Modal zapata error:", L.message);
      }
    }
  };
  Ge = 228e5;
  He = 0.2;
  Qt = Ge / (2 * (1 + He));
  St = 24;
  Be = 9.80665;
  eo = 0.2;
  wt = 0.035;
  Lt = 8;
  to = new Ke({
    color: 16711731,
    linewidth: 2
  });
  oo = new Ke({
    color: 52224,
    linewidth: 2
  });
  no = 0.04;
  so = {
    id: "zapata-aislada-validacion",
    name: "Isolated Footing \u2014 Calcpad validation",
    category: "Foundations",
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
      "bendingXX",
      "bendingYY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: false,
    params: {
      Lz: {
        default: 1.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Lz \u2014 length X (m)"
      },
      Bz: {
        default: 1.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Bz \u2014 length Y (m)"
      },
      tz: {
        default: 0.3,
        min: 0.05,
        max: 1,
        step: 0.05,
        label: "t \u2014 thickness (m)"
      },
      bc: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "bc \u2014 column side (m)"
      },
      Hp: {
        default: 0.5,
        min: 0.3,
        max: 2,
        step: 0.1,
        label: "Hp \u2014 pedestal height (m)"
      },
      q_adm: {
        default: 10,
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
        label: "ks_factor (Bowles)"
      },
      ks: {
        default: 1030,
        min: 100,
        max: 2e5,
        step: 10,
        label: "ks \u2014 subgrade modulus (kN/m\xB3)"
      },
      P_simple: {
        default: 20,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P \u2014 axial (tonf)",
        folder: "Loads"
      },
      Mx_simple: {
        default: 0.5,
        min: -50,
        max: 50,
        step: 0.1,
        label: "Mx (tonf\xB7m)",
        folder: "Loads"
      },
      My_simple: {
        default: -0.5,
        min: -50,
        max: 50,
        step: 0.1,
        label: "My (tonf\xB7m)",
        folder: "Loads"
      },
      nSub: {
        default: 10,
        min: 3,
        max: 16,
        step: 1,
        label: "n \u2014 mesh subdivisions"
      }
    },
    inlineComputed: [
      {
        after: "ks_factor",
        label: "ks computed (kN/m\xB3)",
        compute: (e) => ((e.q_adm ?? 10) * Be * (e.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (e) => {
          const t = e.tz ?? 0.3;
          return (Ge * t ** 3 / (12 * (1 - He ** 2))).toFixed(1);
        }
      },
      {
        after: "ks",
        label: "k_r Biot",
        compute: (e) => {
          const t = e.tz ?? 0.3, r = e.Lz ?? 1.5, m = e.ks ?? 1030, d = Ge * t ** 3 / (12 * (1 - He ** 2)) / (m * r ** 4);
          return d.toFixed(3) + (d < 1 ? " FLEX" : " RIGID");
        }
      }
    ],
    computedLabels(e, t) {
      var _a;
      const r = e.q_adm ?? 10, m = e.ks_factor ?? 10.5, z = r * Be, d = e.ks ?? z * m, I = e.tz ?? 0.3, L = e.Lz ?? 1.5, C = Ge * I ** 3 / (12 * (1 - He ** 2)), ae = C / (d * L ** 4), N = e.P_simple ?? 0;
      let J = 0, V = 0, he = false;
      const O = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (O && O.size) for (const E of O.values()) for (const x of E) he || (J = V = x, he = true), x < J && (J = x), x > V && (V = x);
      const $ = Math.abs(J), Q = Math.abs(V), K = $ / (r || 1);
      return {
        Mode: "Direct P/Mx/My",
        "ks (kN/m\xB3)": d.toFixed(0),
        "D (kN\xB7m)": C.toFixed(1),
        "k_r (Biot)": ae.toFixed(3) + (ae < 1 ? " FLEXIBLE" : " RIGID"),
        "P (tonf)": N.toFixed(2),
        "Mx (tonf\xB7m)": (e.Mx_simple ?? 0).toFixed(2),
        "My (tonf\xB7m)": (e.My_simple ?? 0).toFixed(2),
        "\u03C3_max comp (tonf/m\xB2)": $.toFixed(2),
        "\u03C3_min comp (tonf/m\xB2)": Q.toFixed(2),
        "q_adm (tonf/m\xB2)": r.toFixed(2),
        "\u03C3/q_adm": K.toFixed(2) + (K > 1 ? " \u26A0" : " \u2713")
      };
    },
    build(e, t) {
      var _a;
      const { Lz: r, Bz: m, tz: z, bc: d, Hp: I } = e, L = e.q_adm * Be, C = e.ks ?? L * e.ks_factor, ae = e.P_simple ?? 0, N = e.Mx_simple ?? 0, J = e.My_simple ?? 0, V = ae * Be, he = N * Be, O = J * Be, $ = Math.round(e.nSub), Q = r / 2, K = m / 2, E = [], x = [];
      for (let a = 0; a <= $; a++) E.push(r * a / $), x.push(m * a / $);
      E.includes(Q) || (E.push(Q), E.sort((a, i) => a - i)), x.includes(K) || (x.push(K), x.sort((a, i) => a - i));
      const D = [], ee = [], te = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), Se = (a, i, _) => {
        const F = `${a.toFixed(4)},${i.toFixed(4)},${_.toFixed(4)}`;
        if (G.has(F)) return G.get(F);
        const k = D.length;
        return D.push([
          a,
          i,
          _
        ]), G.set(F, k), k;
      }, v = [];
      for (let a = 0; a < x.length; a++) {
        const i = [];
        for (let _ = 0; _ < E.length; _++) i.push(Se(E[_], x[a], 0));
        v.push(i);
      }
      for (let a = 0; a < x.length - 1; a++) for (let i = 0; i < E.length - 1; i++) {
        const _ = ee.length;
        ee.push([
          v[a][i],
          v[a][i + 1],
          v[a + 1][i + 1],
          v[a + 1][i]
        ]), de.set(_, z), te.set(_, Ge), oe.set(_, He), ge.set(_, St);
      }
      const X = Se(Q, K, 0), ne = Se(Q, K, I), A = ee.length;
      ee.push([
        X,
        ne
      ]), te.set(A, Ge), oe.set(A, He), ke.set(A, Qt), le.set(A, d * d), W.set(A, d ** 4 / 12), j.set(A, d ** 4 / 12), R.set(A, 0.14 * d ** 4), ge.set(A, St), xe.set(A, {
        type: "rect",
        b: d,
        h: d
      });
      const we = /* @__PURE__ */ new Map();
      we.set(ne, [
        0,
        0,
        -V,
        he,
        O,
        0
      ]);
      const Le = r / $, Ie = m / $, De = 0.5, Z = [], fe = [];
      for (let a = 0; a < x.length; a++) for (let i = 0; i < E.length; i++) {
        const _ = Le * Ie * (i === 0 || i === E.length - 1 ? 0.5 : 1) * (a === 0 || a === x.length - 1 ? 0.5 : 1), F = C * _, k = C * _ * De;
        Z.push({
          node: v[a][i],
          dof: 0,
          k
        }), Z.push({
          node: v[a][i],
          dof: 1,
          k
        }), Z.push({
          node: v[a][i],
          dof: 2,
          k: F
        }), fe.push(v[a][i]);
      }
      const Pe = C * Le * Ie * 1e-4, ze = v[0][0];
      Z.push({
        node: ze,
        dof: 3,
        k: Pe
      }), Z.push({
        node: ze,
        dof: 4,
        k: Pe
      }), Z.push({
        node: ze,
        dof: 5,
        k: Pe
      }), t.nodes.val = D.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), t.elements.val = ee, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: we
      }, t.elementInputs.val = {
        elasticities: te,
        poissonsRatios: oe,
        areas: le,
        momentsOfInertiaZ: W,
        momentsOfInertiaY: j,
        torsionalConstants: R,
        shearModuli: ke,
        thicknesses: de,
        densities: ge,
        sectionShapes: xe
      };
      try {
        t.deformOutputs.val = Xe(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, Z);
        const a = pt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), i = t.deformOutputs.rawVal.deformations, _ = (S) => {
          const pe = /* @__PURE__ */ new Map();
          return t.elements.rawVal.forEach((me, l) => {
            if (me.length !== 4) return;
            const c = [];
            for (const o of me) {
              const n = S == null ? void 0 : S.get(o), s = C * (n ? n[2] : 0);
              c.push(s / Be);
            }
            pe.set(l, c);
          }), pe;
        }, F = _(i);
        let k = 0;
        F.forEach((S) => {
          for (const pe of S) pe < k && (k = pe);
        }), a.pressure = F;
        const Me = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map([
            [
              ne,
              [
                0,
                0,
                -V,
                0,
                0,
                0
              ]
            ]
          ])
        }, q = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map([
            [
              ne,
              [
                0,
                0,
                0,
                he,
                0,
                0
              ]
            ]
          ])
        }, re = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map([
            [
              ne,
              [
                0,
                0,
                0,
                0,
                O,
                0
              ]
            ]
          ])
        };
        try {
          const S = Xe(t.nodes.val, t.elements.val, Me, t.elementInputs.val, Z);
          a.pressure_P = _(S.deformations), a.deform_P = S.deformations;
        } catch {
        }
        try {
          const S = Xe(t.nodes.val, t.elements.val, q, t.elementInputs.val, Z);
          a.pressure_Mx = _(S.deformations), a.deform_Mx = S.deformations;
        } catch {
        }
        try {
          const S = Xe(t.nodes.val, t.elements.val, re, t.elementInputs.val, Z);
          a.pressure_My = _(S.deformations), a.deform_My = S.deformations;
        } catch {
        }
        t.analyzeOutputs.val = a;
        const y = Math.abs(k);
        let B = 1 / 0;
        F.forEach((S) => {
          for (const pe of S) {
            const me = Math.abs(pe);
            me < B && (B = me);
          }
        }), Number.isFinite(B) || (B = 0);
        const Y = y / e.q_adm, ye = Ge * z ** 3 / (12 * (1 - He ** 2)), Ve = ye / (C * r ** 4);
        console.log(`[Zapata VALIDACI\xD3N \u2014 espejo Calcpad]
  Cargas: P=${ae.toFixed(2)} tonf, Mx=${N.toFixed(2)} tonf\xB7m, My=${J.toFixed(2)} tonf\xB7m
  \u2500\u2500\u2500 Valores derivados (comparar con Calcpad) \u2500\u2500\u2500
  D flexural = ${ye.toFixed(1)} kN\xB7m   (Calcpad: idem)
  ks         = ${C.toFixed(0)} kN/m\xB3      (Calcpad: idem)
  k_r Biot   = ${Ve.toFixed(3)} ${Ve < 1 ? "FLEXIBLE" : "R\xCDGIDA"}
  \u2500\u2500\u2500 Resultados FEM Hekatan \u2500\u2500\u2500
  q_max (centro) = -${y.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${B.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - B / (y || 1)) * 100).toFixed(1)}%
  ratio q/q_adm = ${Y.toFixed(3)} ${Y > 1 ? "\u26A0 SOBREPASA" : "\u2713 OK"}
  FS = ${(e.q_adm / (y || 1)).toFixed(3)}`);
      } catch (a) {
        console.error("Solver error zapata validaci\xF3n:", a);
      }
      const ue = t.deformOutputs.rawVal.deformations;
      let T = 1e-9;
      for (const a of fe) {
        const i = ue == null ? void 0 : ue.get(a);
        i && Number.isFinite(i[2]) && (T = Math.max(T, Math.abs(i[2])));
      }
      const Fe = Lt * 12, se = new Set(fe), Ne = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, ie = (a, i) => {
        const _ = a ? i : 0, k = -(T * Math.max(_, 1) + eo), Me = [];
        for (const q of fe) {
          if (!se.has(q)) continue;
          const re = t.nodes.rawVal[q];
          if (!re) continue;
          const y = re[0], B = re[1], Y = ue == null ? void 0 : ue.get(q), ye = (w) => Number.isFinite(w) ? w : 0, Ve = Y ? ye(Y[0]) : 0, S = Y ? ye(Y[1]) : 0, pe = Y ? ye(Y[2]) : 0, me = y + Ve * _, l = B + S * _, c = 0 + pe * _, o = c - k, n = (w) => [
            y + (me - y) * w,
            B + (l - B) * w,
            k + o * w
          ], [s, b, f] = n(0), [U, h, u] = n(0.05), g = [
            new M(s, b, f),
            new M(U, h, u)
          ];
          for (let w = 0; w <= Fe; w++) {
            const $e = 0.05 + 0.9 * (w / Fe), [Ee, Ae, ve] = n($e), Te = 2 * Math.PI * Lt * (w / Fe);
            g.push(new M(Ee + wt * Math.cos(Te), Ae + wt * Math.sin(Te), ve));
          }
          g.push(new M(me, l, c)), Me.push(new Ze(new Ye().setFromPoints(g), to));
          const p = no, H = [
            new M(y - p, B - p, k),
            new M(y + p, B - p, k),
            new M(y + p, B + p, k),
            new M(y - p, B + p, k),
            new M(y - p, B - p, k)
          ];
          Me.push(new Ze(new Ye().setFromPoints(H), oo));
        }
        return Me;
      }, qe = Ue.v;
      Ne ? ut.derive(() => {
        const a = Ne.deformedShape.val, i = Ne.deformScale.val;
        Ue.v === qe && (t.objects3D.val = ie(a, i));
      }) : t.objects3D.val = ie(true, 1);
    }
  };
  Ue = {
    v: 0
  };
  wo = [
    so,
    Nt,
    Jt,
    Xt,
    $t,
    Ct,
    At,
    Tt,
    Bt,
    qt,
    Ot,
    Rt,
    yt,
    It,
    Et,
    Dt,
    Ft
  ];
});
export {
  __tla,
  Ue as a,
  Jt as b,
  so as c,
  wo as e,
  Xt as z
};
