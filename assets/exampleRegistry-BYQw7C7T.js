import { a as Ue, V as b, L as Xe, B as Ze } from "./Text-CBH-tcJP.js";
import { v as ht } from "./theme-CzzIlc4y.js";
import { a as xt } from "./analyze-ClLKGn9k.js";
import { m as gt, d as bt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as vt, __tla as __tla_1 } from "./plateThin-C30Q-WjQ.js";
import { p as kt, __tla as __tla_2 } from "./plateThick-DrHD17l3.js";
import { m as Lt, __tla as __tla_3 } from "./membrana-Darbd52d.js";
import { s as Pt, __tla as __tla_4 } from "./shellThin-ORSIx719.js";
import { s as wt, __tla as __tla_5 } from "./shellThick-BSU3qF0E.js";
import { e as Nt, __tla as __tla_6 } from "./edificioAporticado-DG3xVeOI.js";
import { t as zt, __tla as __tla_7 } from "./trussGen-CYTV_Ioz.js";
import { b as yt, __tla as __tla_8 } from "./barraAxial-Bnm-0MrG.js";
import { p as Dt, __tla as __tla_9 } from "./portico2D-kxfBcLlJ.js";
import { t as Et, __tla as __tla_10 } from "./tower3D-tLRX3VEB.js";
import { g as It, __tla as __tla_11 } from "./galpon-BaNuuhBd.js";
import { e as qt, __tla as __tla_12 } from "./edifAcero-Dhwvq9Mc.js";
import { m as Ct, __tla as __tla_13 } from "./mezanine-BmEOOT1G.js";
let Ye, jt, ro, Bt;
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
  let Be, Oe, rt, je, Tt, mt, ft, $t, At, Ft, ge, be, Ot, dt, ie, ut, Rt, pt, _t, Gt, Ht, Vt;
  Be = 25e6;
  Oe = 0.2;
  rt = Be / (2 * (1 + Oe));
  je = 24;
  Tt = 0.2;
  mt = 0.035;
  ft = 8;
  $t = 0.04;
  At = new Ue({
    color: 16711731,
    linewidth: 2
  });
  Ft = new Ue({
    color: 52224,
    linewidth: 2
  });
  Bt = {
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
      const f = e.Lz1, r = e.Bz1, M = e.Lv, _ = e.Bv, x = e.Hv, g = e.Lz2, Y = e.Bz2, ce = e.tz, S = e.bc, re = e.Hp, U = e.P1, Me = e.P2, B = e.ks, j = e.M1x ?? 0, oe = e.M1y ?? 0, se = e.M2x ?? 0, ne = e.M2y ?? 0, $ = Math.round(e.nSubX), v = Math.round(e.nSubY), W = 0.2, O = r / 2, R = f + M + g / 2, G = Y / 2, X = (O + G) / 2;
      function E(t, s, n, d) {
        const i = [
          t,
          ...n.filter((m) => m > t && m < s),
          s
        ].sort((m, c) => m - c), N = [];
        for (let m = 0; m < i.length - 1; m++) {
          const c = i[m], u = i[m + 1], h = Math.max(1, Math.round((u - c) / ((s - t) / d)));
          for (let k = 0; k < h; k++) N.push(c + (u - c) * k / h);
        }
        return N.push(i[i.length - 1]), N;
      }
      const z = E(0, f, [
        W
      ], $), L = E(0, r, [
        O,
        X
      ], v), me = E(f + M, f + M + g, [
        R
      ], $), fe = E(0, Y, [
        G,
        X
      ], v), J = [], y = [], Se = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Z = (t, s, n) => {
        const d = `${t.toFixed(4)},${s.toFixed(4)},${n.toFixed(4)}`;
        if (we.has(d)) return we.get(d);
        const i = J.length;
        return J.push([
          t,
          s,
          n
        ]), we.set(d, i), i;
      }, w = [];
      for (let t = 0; t < L.length; t++) {
        const s = [];
        for (let n = 0; n < z.length; n++) s.push(Z(z[n], L[t], 0));
        w.push(s);
      }
      for (let t = 0; t < L.length - 1; t++) for (let s = 0; s < z.length - 1; s++) {
        const n = y.length;
        y.push([
          w[t][s],
          w[t][s + 1],
          w[t + 1][s + 1],
          w[t + 1][s]
        ]), de.set(n, ce), P.set(n, Be), K.set(n, Oe), ae.set(n, je);
      }
      const q = [];
      for (let t = 0; t < fe.length; t++) {
        const s = [];
        for (let n = 0; n < me.length; n++) s.push(Z(me[n], fe[t], 0));
        q.push(s);
      }
      for (let t = 0; t < fe.length - 1; t++) for (let s = 0; s < me.length - 1; s++) {
        const n = y.length;
        y.push([
          q[t][s],
          q[t][s + 1],
          q[t + 1][s + 1],
          q[t + 1][s]
        ]), de.set(n, ce), P.set(n, Be), K.set(n, Oe), ae.set(n, je);
      }
      const C = Math.round(e.vigaLevel) === 0 ? ce : re, We = Z(W, O, 0), Ne = Z(W, O, C), H = Z(R, G, 0), ze = Z(R, G, C);
      for (const [t, s] of [
        [
          We,
          Ne
        ],
        [
          H,
          ze
        ]
      ]) {
        const n = y.length;
        y.push([
          t,
          s
        ]), P.set(n, Be), K.set(n, Oe), Le.set(n, rt), Q.set(n, S * S), ue.set(n, S ** 4 / 12), ve.set(n, S ** 4 / 12), ke.set(n, 0.14 * S ** 4), ae.set(n, je), Pe.set(n, {
          type: "rect",
          b: S,
          h: S
        });
      }
      const A = y.length;
      y.push([
        Ne,
        ze
      ]), P.set(A, Be), K.set(A, Oe), Le.set(A, rt), Q.set(A, _ * x), ue.set(A, _ * x ** 3 / 12), ve.set(A, x * _ ** 3 / 12), ke.set(A, 0.28 * _ * x ** 3), ae.set(A, je), Pe.set(A, {
        type: "rect",
        b: _,
        h: x
      }), I.set(Ne, [
        0,
        0,
        -U,
        j,
        oe,
        0
      ]), I.set(ze, [
        0,
        0,
        -Me,
        se,
        ne,
        0
      ]);
      const Ie = f / $, Ge = r / v, ee = g / $, ye = Y / v, De = 0.5, D = [], le = [];
      for (let t = 0; t < L.length; t++) for (let s = 0; s < z.length; s++) {
        const n = Ie * Ge * (s === 0 || s === z.length - 1 ? 0.5 : 1) * (t === 0 || t === L.length - 1 ? 0.5 : 1), d = B * n, i = B * n * De;
        D.push({
          node: w[t][s],
          dof: 0,
          k: i
        }), D.push({
          node: w[t][s],
          dof: 1,
          k: i
        }), D.push({
          node: w[t][s],
          dof: 2,
          k: d
        }), le.push(w[t][s]);
      }
      for (let t = 0; t < fe.length; t++) for (let s = 0; s < me.length; s++) {
        const n = ee * ye * (s === 0 || s === me.length - 1 ? 0.5 : 1) * (t === 0 || t === fe.length - 1 ? 0.5 : 1), d = B * n, i = B * n * De;
        D.push({
          node: q[t][s],
          dof: 0,
          k: i
        }), D.push({
          node: q[t][s],
          dof: 1,
          k: i
        }), D.push({
          node: q[t][s],
          dof: 2,
          k: d
        }), le.push(q[t][s]);
      }
      const pe = B * Ie * Ge * 1e-4;
      D.push({
        node: w[0][0],
        dof: 3,
        k: pe
      }), D.push({
        node: w[0][0],
        dof: 4,
        k: pe
      }), D.push({
        node: w[0][0],
        dof: 5,
        k: pe
      }), o.nodes.val = J.map((t) => [
        t[0],
        t[1],
        t[2]
      ]), o.elements.val = y, o.nodeInputs.val = {
        supports: Se,
        loads: I
      }, o.elementInputs.val = {
        elasticities: P,
        poissonsRatios: K,
        areas: Q,
        momentsOfInertiaZ: ue,
        momentsOfInertiaY: ve,
        torsionalConstants: ke,
        shearModuli: Le,
        thicknesses: de,
        densities: ae,
        sectionShapes: Pe
      };
      try {
        o.deformOutputs.val = bt(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, D);
        const t = xt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), s = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((d, i) => {
          if (d.length !== 4) return;
          const N = [];
          for (const m of d) {
            const c = s == null ? void 0 : s.get(m), u = c ? c[2] : 0;
            N.push(-B * u);
          }
          n.set(i, N);
        }), t.pressure = n, o.analyzeOutputs.val = t;
      } catch (t) {
        console.error("Solver error:", t);
      }
      const Je = o.deformOutputs.rawVal.deformations;
      let _e = 1e-9;
      for (const t of le) {
        const s = Je == null ? void 0 : Je.get(t);
        s && Number.isFinite(s[2]) && (_e = Math.max(_e, Math.abs(s[2])));
      }
      const Ke = new Set(le), he = ft * 12, qe = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, a = (t, s) => {
        const n = t ? s : 0, i = -(_e * Math.max(n, 1) + Tt), N = [];
        for (const m of le) {
          if (!Ke.has(m)) continue;
          const c = o.nodes.rawVal[m];
          if (!c) continue;
          const u = c[0], h = c[1], k = Je == null ? void 0 : Je.get(m), V = (T) => Number.isFinite(T) ? T : 0, Ce = k ? V(k[0]) : 0, xe = k ? V(k[1]) : 0, Te = k ? V(k[2]) : 0, te = u + Ce * n, He = h + xe * n, Ee = 0 + Te * n, et = Ee - i, $e = (T) => [
            u + (te - u) * T,
            h + (He - h) * T,
            i + et * T
          ], [tt, ot, st] = $e(0), [nt, Ae, F] = $e(0.05), Fe = [
            new b(tt, ot, st),
            new b(nt, Ae, F)
          ];
          for (let T = 0; T <= he; T++) {
            const lt = 0.05 + 0.9 * (T / he), [it, Ve, St] = $e(lt), ct = 2 * Math.PI * ft * (T / he);
            Fe.push(new b(it + mt * Math.cos(ct), Ve + mt * Math.sin(ct), St));
          }
          Fe.push(new b(te, He, Ee)), N.push(new Xe(new Ze().setFromPoints(Fe), At));
          const p = $t, at = [
            new b(u - p, h - p, i),
            new b(u + p, h - p, i),
            new b(u + p, h + p, i),
            new b(u - p, h + p, i),
            new b(u - p, h - p, i)
          ];
          N.push(new Xe(new Ze().setFromPoints(at), Ft));
        }
        return N;
      }, l = Ye.v;
      qe ? ht.derive(() => {
        const t = qe.deformedShape.val, s = qe.deformScale.val;
        Ye.v === l && (o.objects3D.val = a(t, s));
      }) : o.objects3D.val = a(true, 1);
    },
    runModal(e, o, f) {
      var _a, _b;
      const r = o.nodes.val, M = o.elements.val, _ = o.nodeInputs.val, x = o.elementInputs.val;
      if (!(!r.length || !M.length || !((_a = x.densities) == null ? void 0 : _a.size))) try {
        const g = gt(r, M, _, x, 12);
        f.render(g, {
          title: `Zapata + Viga amarre Lv=${e.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${e.Bv}\xD7${e.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = g.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (g) {
        console.warn("Modal zapata-viga error:", g.message);
      }
    }
  };
  ge = 25e6;
  be = 0.2;
  Ot = ge / (2 * (1 + be));
  dt = 24;
  ie = 9.80665;
  ut = [
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
  pt = 0.035;
  _t = 8;
  Gt = new Ue({
    color: 16711731,
    linewidth: 2
  });
  Ht = new Ue({
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
        options: Object.fromEntries(ut.map((e, o) => [
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
        label: "ks (kN/m\xB3)",
        compute: (e) => ((e.q_adm ?? 20) * ie * (e.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (e) => {
          const o = e.tz ?? 0.15;
          return (ge * o ** 3 / (12 * (1 - be ** 2))).toFixed(1);
        }
      },
      {
        after: "Lz",
        label: "k_r Biot",
        compute: (e) => {
          const o = e.tz ?? 0.15, f = e.Lz ?? 2.5, M = (e.q_adm ?? 20) * ie * (e.ks_factor ?? 10.5), x = ge * o ** 3 / (12 * (1 - be ** 2)) / (M * f ** 4);
          return x.toFixed(3) + (x < 1 ? " FLEX" : " R\xCDG");
        }
      }
    ],
    computedLabels(e, o) {
      var _a;
      const r = (e.q_adm ?? 20) * ie * (e.ks_factor ?? 10.5), M = e.tz ?? 0.15, _ = e.Lz ?? 2.5, x = ge * M ** 3 / (12 * (1 - be ** 2)), g = x / (r * _ ** 4), Y = (e.useSimple ?? 0) >= 0.5, ce = (e.useD ?? 0) >= 0.5, S = (e.useL ?? 0) >= 0.5, re = (e.useS ?? 0) >= 0.5, U = (e.useFactors ?? 1) >= 0.5, Me = U ? e.fD ?? 1.2 : 1, B = U ? e.fL ?? 1.6 : 1, j = U ? e.fS ?? 0 : 1, oe = ce ? 1 : 0, se = S ? 1 : 0, ne = re ? 1 : 0;
      let $ = 0;
      Y ? $ = e.P_simple ?? 0 : $ = oe * Me * (e.P_D ?? 0) + se * B * (e.P_L ?? 0) + ne * j * (e.P_S ?? 0);
      const v = [];
      Y ? v.push("Simple") : (ce && v.push("D"), S && v.push("L"), re && v.push("S"), v.length || v.push("NINGUNO"));
      const W = v.join("+") + (U && !Y ? " (factor)" : "");
      let O = 0, R = 0;
      const G = (_a = o.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (G && G.size) {
        for (const z of G.values()) for (const L of z) L < O && (O = L), (L < R || R === 0) && (R = L);
        let E = 1 / 0;
        for (const z of G.values()) for (const L of z) Math.abs(L) < E && (E = Math.abs(L));
        R = -E;
      }
      const X = Math.abs(O) / (e.q_adm || 1);
      return {
        "Patrones activos": W,
        "ks (kN/m\xB3)": r.toFixed(0),
        "D (kN\xB7m)": x.toFixed(1),
        "k_r (Biot)": g.toFixed(3) + (g < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": $.toFixed(2),
        "q_max (tonf/m\xB2)": O.toFixed(2),
        "q_min (tonf/m\xB2)": R.toFixed(2),
        "q/q_adm": X.toFixed(2) + (X > 1 ? " \u26A0" : " \u2713")
      };
    },
    onParamChange(e, o) {
      if (e === "soilType") {
        const f = Math.round(o.soilType ?? 0);
        if (f > 0) {
          const r = ut[f];
          o.q_adm = r.q_adm, o.ks_factor = r.ks_factor, o.su = r.su, o.phi = r.phi, o.gamma = r.gamma, o.N_SPT = r.N_SPT, o.E_soil = r.E_soil;
        }
      }
      if (e === "combo") {
        const f = Math.round(o.combo ?? 0), r = [
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
        f >= 0 && f < r.length && ([o.fD, o.fL, o.fS] = r[f]);
      }
    },
    build(e, o) {
      var _a;
      const { Lz: f, Bz: r, tz: M, bc: _, Hp: x } = e, g = e.q_adm, Y = e.ks_factor, S = g * ie * Y, re = (e.useSimple ?? 0) >= 0.5, U = (e.useD ?? 0) >= 0.5, Me = (e.useL ?? 0) >= 0.5, B = (e.useS ?? 0) >= 0.5, j = (e.useFactors ?? 1) >= 0.5, oe = j ? e.fD ?? 1.2 : 1, se = j ? e.fL ?? 1.6 : 1, ne = j ? e.fS ?? 0 : 1, $ = U ? 1 : 0, v = Me ? 1 : 0, W = B ? 1 : 0, O = oe, R = se, G = ne;
      let X = 0, E = 0, z = 0;
      re ? (X = e.P_simple ?? 0, E = e.Mx_simple ?? 0, z = e.My_simple ?? 0) : (X = $ * oe * (e.P_D ?? 0) + v * se * (e.P_L ?? 0) + W * ne * (e.P_S ?? 0), E = $ * oe * (e.Mx_D ?? 0) + v * se * (e.Mx_L ?? 0) + W * ne * (e.Mx_S ?? 0), z = $ * oe * (e.My_D ?? 0) + v * se * (e.My_L ?? 0) + W * ne * (e.My_S ?? 0));
      const L = X * ie, me = E * ie, fe = z * ie, J = Math.round(e.nSub), y = f / 2, Se = r / 2, I = [], P = [];
      for (let a = 0; a <= J; a++) I.push(f * a / J), P.push(r * a / J);
      I.includes(y) || (I.push(y), I.sort((a, l) => a - l)), P.includes(Se) || (P.push(Se), P.sort((a, l) => a - l));
      const K = [], Q = [], de = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), Re = (a, l, t) => {
        const s = `${a.toFixed(4)},${l.toFixed(4)},${t.toFixed(4)}`;
        if (q.has(s)) return q.get(s);
        const n = K.length;
        return K.push([
          a,
          l,
          t
        ]), q.set(s, n), n;
      }, C = [];
      for (let a = 0; a < P.length; a++) {
        const l = [];
        for (let t = 0; t < I.length; t++) l.push(Re(I[t], P[a], 0));
        C.push(l);
      }
      for (let a = 0; a < P.length - 1; a++) for (let l = 0; l < I.length - 1; l++) {
        const t = Q.length;
        Q.push([
          C[a][l],
          C[a][l + 1],
          C[a + 1][l + 1],
          C[a + 1][l]
        ]), ke.set(t, M), de.set(t, ge), ue.set(t, be), Z.set(t, dt);
      }
      const We = Re(y, Se, 0), Ne = Re(y, Se, x), H = Q.length;
      Q.push([
        We,
        Ne
      ]), de.set(H, ge), ue.set(H, be), we.set(H, Ot), ve.set(H, _ * _), Le.set(H, _ ** 4 / 12), ae.set(H, _ ** 4 / 12), Pe.set(H, 0.14 * _ ** 4), Z.set(H, dt), w.set(H, {
        type: "rect",
        b: _,
        h: _
      });
      const ze = /* @__PURE__ */ new Map();
      ze.set(Ne, [
        0,
        0,
        -L,
        me,
        fe,
        0
      ]);
      const A = f / J, Ie = r / J, Ge = 0.5, ee = [], ye = [];
      for (let a = 0; a < P.length; a++) for (let l = 0; l < I.length; l++) {
        const t = A * Ie * (l === 0 || l === I.length - 1 ? 0.5 : 1) * (a === 0 || a === P.length - 1 ? 0.5 : 1), s = S * t, n = S * t * Ge;
        ee.push({
          node: C[a][l],
          dof: 0,
          k: n
        }), ee.push({
          node: C[a][l],
          dof: 1,
          k: n
        }), ee.push({
          node: C[a][l],
          dof: 2,
          k: s
        }), ye.push(C[a][l]);
      }
      const De = S * A * Ie * 1e-4, D = C[0][0];
      ee.push({
        node: D,
        dof: 3,
        k: De
      }), ee.push({
        node: D,
        dof: 4,
        k: De
      }), ee.push({
        node: D,
        dof: 5,
        k: De
      }), o.nodes.val = K.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), o.elements.val = Q, o.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: ze
      }, o.elementInputs.val = {
        elasticities: de,
        poissonsRatios: ue,
        areas: ve,
        momentsOfInertiaZ: Le,
        momentsOfInertiaY: ae,
        torsionalConstants: Pe,
        shearModuli: we,
        thicknesses: ke,
        densities: Z,
        sectionShapes: w
      };
      try {
        o.deformOutputs.val = bt(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, ee);
        const a = xt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), l = o.deformOutputs.rawVal.deformations, t = /* @__PURE__ */ new Map();
        let s = 0;
        o.elements.rawVal.forEach((h, k) => {
          if (h.length !== 4) return;
          const V = [];
          for (const Ce of h) {
            const xe = l == null ? void 0 : l.get(Ce), te = S * (xe ? xe[2] : 0) / ie;
            V.push(te), te < s && (s = te);
          }
          t.set(k, V);
        }), a.pressure = t, o.analyzeOutputs.val = a;
        const n = Math.abs(s);
        let d = 1 / 0;
        t.forEach((h) => {
          for (const k of h) {
            const V = Math.abs(k);
            V < d && (d = V);
          }
        }), Number.isFinite(d) || (d = 0);
        const i = n / e.q_adm, m = ge * M ** 3 / (12 * (1 - be ** 2)) / (S * f ** 4), c = [];
        re ? c.push("Simple") : (U && c.push(`D${j ? "\xD7" + O : ""}`), Me && c.push(`L${j ? "\xD7" + R : ""}`), B && c.push(`S${j ? "\xD7" + G : ""}`), c.length || c.push("\u26A0 NINGUNO activo"));
        const u = c.join(" + ");
        console.log(`[Zapata Aislada]  Patrones activos: ${u}
  Cargas totales: P=${X.toFixed(2)} tonf, Mx=${E.toFixed(2)} tonf\xB7m, My=${z.toFixed(2)} tonf\xB7m
  Patrones: D(${e.P_D}, ${e.Mx_D}, ${e.My_D}) L(${e.P_L}, ${e.Mx_L}, ${e.My_L}) S(${e.P_S}, ${e.Mx_S}, ${e.My_S})
  q_max (centro) = -${n.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${d.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - d / (n || 1)) * 100).toFixed(1)}%
  q_adm = -${e.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${i.toFixed(2)}` + (i > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${m.toFixed(2)} (${m < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (a) {
        console.error("Solver error zapata aislada:", a);
      }
      const le = o.deformOutputs.rawVal.deformations;
      let pe = 1e-9;
      for (const a of ye) {
        const l = le == null ? void 0 : le.get(a);
        l && Number.isFinite(l[2]) && (pe = Math.max(pe, Math.abs(l[2])));
      }
      const _e = _t * 12, Ke = new Set(ye), he = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Qe = (a, l) => {
        const t = a ? l : 0, n = -(pe * Math.max(t, 1) + Rt), d = [];
        for (const i of ye) {
          if (!Ke.has(i)) continue;
          const N = o.nodes.rawVal[i];
          if (!N) continue;
          const m = N[0], c = N[1], u = le == null ? void 0 : le.get(i), h = (p) => Number.isFinite(p) ? p : 0, k = u ? h(u[0]) : 0, V = u ? h(u[1]) : 0, Ce = u ? h(u[2]) : 0, xe = m + k * t, Te = c + V * t, te = 0 + Ce * t, He = te - n, Ee = (p) => [
            m + (xe - m) * p,
            c + (Te - c) * p,
            n + He * p
          ], [et, $e, tt] = Ee(0), [ot, st, nt] = Ee(0.05), Ae = [
            new b(et, $e, tt),
            new b(ot, st, nt)
          ];
          for (let p = 0; p <= _e; p++) {
            const at = 0.05 + 0.9 * (p / _e), [T, lt, it] = Ee(at), Ve = 2 * Math.PI * _t * (p / _e);
            Ae.push(new b(T + pt * Math.cos(Ve), lt + pt * Math.sin(Ve), it));
          }
          Ae.push(new b(xe, Te, te)), d.push(new Xe(new Ze().setFromPoints(Ae), Gt));
          const F = Vt, Fe = [
            new b(m - F, c - F, n),
            new b(m + F, c - F, n),
            new b(m + F, c + F, n),
            new b(m - F, c + F, n),
            new b(m - F, c - F, n)
          ];
          d.push(new Xe(new Ze().setFromPoints(Fe), Ht));
        }
        return d;
      }, qe = Ye.v;
      he ? ht.derive(() => {
        const a = he.deformedShape.val, l = he.deformScale.val;
        Ye.v === qe && (o.objects3D.val = Qe(a, l));
      }) : o.objects3D.val = Qe(true, 1);
    },
    runModal(e, o, f) {
      var _a, _b;
      const r = o.nodes.val, M = o.elements.val, _ = o.nodeInputs.val, x = o.elementInputs.val;
      if (!(!r.length || !M.length || !((_a = x.densities) == null ? void 0 : _a.size))) try {
        const g = gt(r, M, _, x, 12);
        f.render(g, {
          title: `Zapata Aislada ${e.Lz}\xD7${e.Bz}m t=${e.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${e.bc}m  Hp=${e.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = g.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (g) {
        console.warn("Modal zapata error:", g.message);
      }
    }
  };
  Ye = {
    v: 0
  };
  ro = [
    yt,
    zt,
    Dt,
    Et,
    It,
    Nt,
    qt,
    Ct,
    vt,
    kt,
    Lt,
    Pt,
    wt,
    jt,
    Bt
  ];
});
export {
  __tla,
  Ye as a,
  jt as b,
  ro as e,
  Bt as z
};
