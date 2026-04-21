import { a as Ue, V as g, L as Xe, B as Ze } from "./Text-CBH-tcJP.js";
import { v as ht } from "./theme-CzzIlc4y.js";
import { a as xt } from "./analyze-ClLKGn9k.js";
import { m as gt, d as bt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as vt, __tla as __tla_1 } from "./plateThin-C30Q-WjQ.js";
import { p as kt, __tla as __tla_2 } from "./plateThick-DrHD17l3.js";
import { m as Lt, __tla as __tla_3 } from "./membrana-Darbd52d.js";
import { s as Pt, __tla as __tla_4 } from "./shellThin-ORSIx719.js";
import { s as wt, __tla as __tla_5 } from "./shellThick-BSU3qF0E.js";
import { e as Nt, __tla as __tla_6 } from "./edificioAporticado-DG3xVeOI.js";
import { t as yt, __tla as __tla_7 } from "./trussGen-CYTV_Ioz.js";
import { b as zt, __tla as __tla_8 } from "./barraAxial-Bnm-0MrG.js";
import { p as Et, __tla as __tla_9 } from "./portico2D-kxfBcLlJ.js";
import { t as Dt, __tla as __tla_10 } from "./tower3D-tLRX3VEB.js";
import { g as It, __tla as __tla_11 } from "./galpon-BaNuuhBd.js";
import { e as Ct, __tla as __tla_12 } from "./edifAcero-Dhwvq9Mc.js";
import { m as qt, __tla as __tla_13 } from "./mezanine-BmEOOT1G.js";
let Ye, jt, ro, Ft;
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
  let Ae, Be, rt, je, Tt, mt, ft, $t, At, Bt, Fe, Oe, Ot, dt, ze, ut, Rt, pt, _t, Gt, Ht, Vt;
  Ae = 25e6;
  Be = 0.2;
  rt = Ae / (2 * (1 + Be));
  je = 24;
  Tt = 0.2;
  mt = 0.035;
  ft = 8;
  $t = 0.04;
  At = new Ue({
    color: 16711731,
    linewidth: 2
  });
  Bt = new Ue({
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
      const d = e.Lz1, r = e.Bz1, N = e.Lv, h = e.Bv, b = e.Hv, x = e.Lz2, Y = e.Bz2, ie = e.tz, M = e.bc, ce = e.Hp, U = e.P1, xe = e.P2, F = e.ks, j = e.M1x ?? 0, oe = e.M1y ?? 0, se = e.M2x ?? 0, ne = e.M2y ?? 0, $ = Math.round(e.nSubX), S = Math.round(e.nSubY), W = 0.2, O = r / 2, R = d + N + x / 2, G = Y / 2, X = (O + G) / 2;
      function D(t, s, n, f) {
        const i = [
          t,
          ...n.filter((m) => m > t && m < s),
          s
        ].sort((m, c) => m - c), w = [];
        for (let m = 0; m < i.length - 1; m++) {
          const c = i[m], u = i[m + 1], _ = Math.max(1, Math.round((u - c) / ((s - t) / f)));
          for (let v = 0; v < _; v++) w.push(c + (u - c) * v / _);
        }
        return w.push(i[i.length - 1]), w;
      }
      const y = D(0, d, [
        W
      ], $), k = D(0, r, [
        O,
        X
      ], S), re = D(d + N, d + N + x, [
        R
      ], $), me = D(0, Y, [
        G,
        X
      ], S), J = [], z = [], ge = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Z = (t, s, n) => {
        const f = `${t.toFixed(4)},${s.toFixed(4)},${n.toFixed(4)}`;
        if (ke.has(f)) return ke.get(f);
        const i = J.length;
        return J.push([
          t,
          s,
          n
        ]), ke.set(f, i), i;
      }, P = [];
      for (let t = 0; t < k.length; t++) {
        const s = [];
        for (let n = 0; n < y.length; n++) s.push(Z(y[n], k[t], 0));
        P.push(s);
      }
      for (let t = 0; t < k.length - 1; t++) for (let s = 0; s < y.length - 1; s++) {
        const n = z.length;
        z.push([
          P[t][s],
          P[t][s + 1],
          P[t + 1][s + 1],
          P[t + 1][s]
        ]), fe.set(n, ie), L.set(n, Ae), K.set(n, Be), ae.set(n, je);
      }
      const C = [];
      for (let t = 0; t < me.length; t++) {
        const s = [];
        for (let n = 0; n < re.length; n++) s.push(Z(re[n], me[t], 0));
        C.push(s);
      }
      for (let t = 0; t < me.length - 1; t++) for (let s = 0; s < re.length - 1; s++) {
        const n = z.length;
        z.push([
          C[t][s],
          C[t][s + 1],
          C[t + 1][s + 1],
          C[t + 1][s]
        ]), fe.set(n, ie), L.set(n, Ae), K.set(n, Be), ae.set(n, je);
      }
      const q = Math.round(e.vigaLevel) === 0 ? ie : ce, We = Z(W, O, 0), Le = Z(W, O, q), H = Z(R, G, 0), Pe = Z(R, G, q);
      for (const [t, s] of [
        [
          We,
          Le
        ],
        [
          H,
          Pe
        ]
      ]) {
        const n = z.length;
        z.push([
          t,
          s
        ]), L.set(n, Ae), K.set(n, Be), Se.set(n, rt), Q.set(n, M * M), de.set(n, M ** 4 / 12), be.set(n, M ** 4 / 12), Me.set(n, 0.14 * M ** 4), ae.set(n, je), ve.set(n, {
          type: "rect",
          b: M,
          h: M
        });
      }
      const A = z.length;
      z.push([
        Le,
        Pe
      ]), L.set(A, Ae), K.set(A, Be), Se.set(A, rt), Q.set(A, h * b), de.set(A, h * b ** 3 / 12), be.set(A, b * h ** 3 / 12), Me.set(A, 0.28 * h * b ** 3), ae.set(A, je), ve.set(A, {
        type: "rect",
        b: h,
        h: b
      }), I.set(Le, [
        0,
        0,
        -U,
        j,
        oe,
        0
      ]), I.set(Pe, [
        0,
        0,
        -xe,
        se,
        ne,
        0
      ]);
      const Ee = d / $, Ge = r / S, ee = x / $, we = Y / S, Ne = 0.5, E = [], le = [];
      for (let t = 0; t < k.length; t++) for (let s = 0; s < y.length; s++) {
        const n = Ee * Ge * (s === 0 || s === y.length - 1 ? 0.5 : 1) * (t === 0 || t === k.length - 1 ? 0.5 : 1), f = F * n, i = F * n * Ne;
        E.push({
          node: P[t][s],
          dof: 0,
          k: i
        }), E.push({
          node: P[t][s],
          dof: 1,
          k: i
        }), E.push({
          node: P[t][s],
          dof: 2,
          k: f
        }), le.push(P[t][s]);
      }
      for (let t = 0; t < me.length; t++) for (let s = 0; s < re.length; s++) {
        const n = ee * we * (s === 0 || s === re.length - 1 ? 0.5 : 1) * (t === 0 || t === me.length - 1 ? 0.5 : 1), f = F * n, i = F * n * Ne;
        E.push({
          node: C[t][s],
          dof: 0,
          k: i
        }), E.push({
          node: C[t][s],
          dof: 1,
          k: i
        }), E.push({
          node: C[t][s],
          dof: 2,
          k: f
        }), le.push(C[t][s]);
      }
      const ue = F * Ee * Ge * 1e-4;
      E.push({
        node: P[0][0],
        dof: 3,
        k: ue
      }), E.push({
        node: P[0][0],
        dof: 4,
        k: ue
      }), E.push({
        node: P[0][0],
        dof: 5,
        k: ue
      }), o.nodes.val = J.map((t) => [
        t[0],
        t[1],
        t[2]
      ]), o.elements.val = z, o.nodeInputs.val = {
        supports: ge,
        loads: I
      }, o.elementInputs.val = {
        elasticities: L,
        poissonsRatios: K,
        areas: Q,
        momentsOfInertiaZ: de,
        momentsOfInertiaY: be,
        torsionalConstants: Me,
        shearModuli: Se,
        thicknesses: fe,
        densities: ae,
        sectionShapes: ve
      };
      try {
        o.deformOutputs.val = bt(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, E);
        const t = xt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), s = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((f, i) => {
          if (f.length !== 4) return;
          const w = [];
          for (const m of f) {
            const c = s == null ? void 0 : s.get(m), u = c ? c[2] : 0;
            w.push(-F * u);
          }
          n.set(i, w);
        }), t.pressure = n, o.analyzeOutputs.val = t;
      } catch (t) {
        console.error("Solver error:", t);
      }
      const Je = o.deformOutputs.rawVal.deformations;
      let pe = 1e-9;
      for (const t of le) {
        const s = Je == null ? void 0 : Je.get(t);
        s && Number.isFinite(s[2]) && (pe = Math.max(pe, Math.abs(s[2])));
      }
      const Ke = new Set(le), _e = ft * 12, De = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, a = (t, s) => {
        const n = t ? s : 0, i = -(pe * Math.max(n, 1) + Tt), w = [];
        for (const m of le) {
          if (!Ke.has(m)) continue;
          const c = o.nodes.rawVal[m];
          if (!c) continue;
          const u = c[0], _ = c[1], v = Je == null ? void 0 : Je.get(m), V = (T) => Number.isFinite(T) ? T : 0, Ie = v ? V(v[0]) : 0, he = v ? V(v[1]) : 0, Ce = v ? V(v[2]) : 0, te = u + Ie * n, He = _ + he * n, ye = 0 + Ce * n, et = ye - i, qe = (T) => [
            u + (te - u) * T,
            _ + (He - _) * T,
            i + et * T
          ], [tt, ot, st] = qe(0), [nt, Te, B] = qe(0.05), $e = [
            new g(tt, ot, st),
            new g(nt, Te, B)
          ];
          for (let T = 0; T <= _e; T++) {
            const lt = 0.05 + 0.9 * (T / _e), [it, Ve, St] = qe(lt), ct = 2 * Math.PI * ft * (T / _e);
            $e.push(new g(it + mt * Math.cos(ct), Ve + mt * Math.sin(ct), St));
          }
          $e.push(new g(te, He, ye)), w.push(new Xe(new Ze().setFromPoints($e), At));
          const p = $t, at = [
            new g(u - p, _ - p, i),
            new g(u + p, _ - p, i),
            new g(u + p, _ + p, i),
            new g(u - p, _ + p, i),
            new g(u - p, _ - p, i)
          ];
          w.push(new Xe(new Ze().setFromPoints(at), Bt));
        }
        return w;
      }, l = Ye.v;
      De ? ht.derive(() => {
        const t = De.deformedShape.val, s = De.deformScale.val;
        Ye.v === l && (o.objects3D.val = a(t, s));
      }) : o.objects3D.val = a(true, 1);
    },
    runModal(e, o, d) {
      var _a, _b;
      const r = o.nodes.val, N = o.elements.val, h = o.nodeInputs.val, b = o.elementInputs.val;
      if (!(!r.length || !N.length || !((_a = b.densities) == null ? void 0 : _a.size))) try {
        const x = gt(r, N, h, b, 12);
        d.render(x, {
          title: `Zapata + Viga amarre Lv=${e.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${e.Bv}\xD7${e.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = x.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (x) {
        console.warn("Modal zapata-viga error:", x.message);
      }
    }
  };
  Fe = 25e6;
  Oe = 0.2;
  Ot = Fe / (2 * (1 + Oe));
  dt = 24;
  ze = 9.80665;
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
    computedLabels(e, o) {
      var _a;
      const r = (e.q_adm ?? 20) * ze * (e.ks_factor ?? 10.5), N = e.tz ?? 0.15, h = e.Lz ?? 2.5, b = Fe * N ** 3 / (12 * (1 - Oe ** 2)), x = b / (r * h ** 4), Y = (e.useSimple ?? 0) >= 0.5, ie = (e.useD ?? 0) >= 0.5, M = (e.useL ?? 0) >= 0.5, ce = (e.useS ?? 0) >= 0.5, U = (e.useFactors ?? 1) >= 0.5, xe = U ? e.fD ?? 1.2 : 1, F = U ? e.fL ?? 1.6 : 1, j = U ? e.fS ?? 0 : 1, oe = ie ? 1 : 0, se = M ? 1 : 0, ne = ce ? 1 : 0;
      let $ = 0;
      Y ? $ = e.P_simple ?? 0 : $ = oe * xe * (e.P_D ?? 0) + se * F * (e.P_L ?? 0) + ne * j * (e.P_S ?? 0);
      const S = [];
      Y ? S.push("Simple") : (ie && S.push("D"), M && S.push("L"), ce && S.push("S"), S.length || S.push("NINGUNO"));
      const W = S.join("+") + (U && !Y ? " (factor)" : "");
      let O = 0, R = 0;
      const G = (_a = o.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (G && G.size) {
        for (const y of G.values()) for (const k of y) k < O && (O = k), (k < R || R === 0) && (R = k);
        let D = 1 / 0;
        for (const y of G.values()) for (const k of y) Math.abs(k) < D && (D = Math.abs(k));
        R = -D;
      }
      const X = Math.abs(O) / (e.q_adm || 1);
      return {
        "Patrones activos": W,
        "ks (kN/m\xB3)": r.toFixed(0),
        "D (kN\xB7m)": b.toFixed(1),
        "k_r (Biot)": x.toFixed(3) + (x < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": $.toFixed(2),
        "q_max (tonf/m\xB2)": O.toFixed(2),
        "q_min (tonf/m\xB2)": R.toFixed(2),
        "q/q_adm": X.toFixed(2) + (X > 1 ? " \u26A0" : " \u2713")
      };
    },
    onParamChange(e, o) {
      if (e === "soilType") {
        const d = Math.round(o.soilType ?? 0);
        if (d > 0) {
          const r = ut[d];
          o.q_adm = r.q_adm, o.ks_factor = r.ks_factor, o.su = r.su, o.phi = r.phi, o.gamma = r.gamma, o.N_SPT = r.N_SPT, o.E_soil = r.E_soil;
        }
      }
      if (e === "combo") {
        const d = Math.round(o.combo ?? 0), r = [
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
        d >= 0 && d < r.length && ([o.fD, o.fL, o.fS] = r[d]);
      }
    },
    build(e, o) {
      var _a;
      const { Lz: d, Bz: r, tz: N, bc: h, Hp: b } = e, x = e.q_adm, Y = e.ks_factor, M = x * ze * Y, ce = (e.useSimple ?? 0) >= 0.5, U = (e.useD ?? 0) >= 0.5, xe = (e.useL ?? 0) >= 0.5, F = (e.useS ?? 0) >= 0.5, j = (e.useFactors ?? 1) >= 0.5, oe = j ? e.fD ?? 1.2 : 1, se = j ? e.fL ?? 1.6 : 1, ne = j ? e.fS ?? 0 : 1, $ = U ? 1 : 0, S = xe ? 1 : 0, W = F ? 1 : 0, O = oe, R = se, G = ne;
      let X = 0, D = 0, y = 0;
      ce ? (X = e.P_simple ?? 0, D = e.Mx_simple ?? 0, y = e.My_simple ?? 0) : (X = $ * oe * (e.P_D ?? 0) + S * se * (e.P_L ?? 0) + W * ne * (e.P_S ?? 0), D = $ * oe * (e.Mx_D ?? 0) + S * se * (e.Mx_L ?? 0) + W * ne * (e.Mx_S ?? 0), y = $ * oe * (e.My_D ?? 0) + S * se * (e.My_L ?? 0) + W * ne * (e.My_S ?? 0));
      const k = X * ze, re = D * ze, me = y * ze, J = Math.round(e.nSub), z = d / 2, ge = r / 2, I = [], L = [];
      for (let a = 0; a <= J; a++) I.push(d * a / J), L.push(r * a / J);
      I.includes(z) || (I.push(z), I.sort((a, l) => a - l)), L.includes(ge) || (L.push(ge), L.sort((a, l) => a - l));
      const K = [], Q = [], fe = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), Re = (a, l, t) => {
        const s = `${a.toFixed(4)},${l.toFixed(4)},${t.toFixed(4)}`;
        if (C.has(s)) return C.get(s);
        const n = K.length;
        return K.push([
          a,
          l,
          t
        ]), C.set(s, n), n;
      }, q = [];
      for (let a = 0; a < L.length; a++) {
        const l = [];
        for (let t = 0; t < I.length; t++) l.push(Re(I[t], L[a], 0));
        q.push(l);
      }
      for (let a = 0; a < L.length - 1; a++) for (let l = 0; l < I.length - 1; l++) {
        const t = Q.length;
        Q.push([
          q[a][l],
          q[a][l + 1],
          q[a + 1][l + 1],
          q[a + 1][l]
        ]), Me.set(t, N), fe.set(t, Fe), de.set(t, Oe), Z.set(t, dt);
      }
      const We = Re(z, ge, 0), Le = Re(z, ge, b), H = Q.length;
      Q.push([
        We,
        Le
      ]), fe.set(H, Fe), de.set(H, Oe), ke.set(H, Ot), be.set(H, h * h), Se.set(H, h ** 4 / 12), ae.set(H, h ** 4 / 12), ve.set(H, 0.14 * h ** 4), Z.set(H, dt), P.set(H, {
        type: "rect",
        b: h,
        h
      });
      const Pe = /* @__PURE__ */ new Map();
      Pe.set(Le, [
        0,
        0,
        -k,
        re,
        me,
        0
      ]);
      const A = d / J, Ee = r / J, Ge = 0.5, ee = [], we = [];
      for (let a = 0; a < L.length; a++) for (let l = 0; l < I.length; l++) {
        const t = A * Ee * (l === 0 || l === I.length - 1 ? 0.5 : 1) * (a === 0 || a === L.length - 1 ? 0.5 : 1), s = M * t, n = M * t * Ge;
        ee.push({
          node: q[a][l],
          dof: 0,
          k: n
        }), ee.push({
          node: q[a][l],
          dof: 1,
          k: n
        }), ee.push({
          node: q[a][l],
          dof: 2,
          k: s
        }), we.push(q[a][l]);
      }
      const Ne = M * A * Ee * 1e-4, E = q[0][0];
      ee.push({
        node: E,
        dof: 3,
        k: Ne
      }), ee.push({
        node: E,
        dof: 4,
        k: Ne
      }), ee.push({
        node: E,
        dof: 5,
        k: Ne
      }), o.nodes.val = K.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), o.elements.val = Q, o.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: Pe
      }, o.elementInputs.val = {
        elasticities: fe,
        poissonsRatios: de,
        areas: be,
        momentsOfInertiaZ: Se,
        momentsOfInertiaY: ae,
        torsionalConstants: ve,
        shearModuli: ke,
        thicknesses: Me,
        densities: Z,
        sectionShapes: P
      };
      try {
        o.deformOutputs.val = bt(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, ee);
        const a = xt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), l = o.deformOutputs.rawVal.deformations, t = /* @__PURE__ */ new Map();
        let s = 0;
        o.elements.rawVal.forEach((_, v) => {
          if (_.length !== 4) return;
          const V = [];
          for (const Ie of _) {
            const he = l == null ? void 0 : l.get(Ie), te = M * (he ? he[2] : 0) / ze;
            V.push(te), te < s && (s = te);
          }
          t.set(v, V);
        }), a.pressure = t, o.analyzeOutputs.val = a;
        const n = Math.abs(s);
        let f = 1 / 0;
        t.forEach((_) => {
          for (const v of _) {
            const V = Math.abs(v);
            V < f && (f = V);
          }
        }), Number.isFinite(f) || (f = 0);
        const i = n / e.q_adm, m = Fe * N ** 3 / (12 * (1 - Oe ** 2)) / (M * d ** 4), c = [];
        ce ? c.push("Simple") : (U && c.push(`D${j ? "\xD7" + O : ""}`), xe && c.push(`L${j ? "\xD7" + R : ""}`), F && c.push(`S${j ? "\xD7" + G : ""}`), c.length || c.push("\u26A0 NINGUNO activo"));
        const u = c.join(" + ");
        console.log(`[Zapata Aislada]  Patrones activos: ${u}
  Cargas totales: P=${X.toFixed(2)} tonf, Mx=${D.toFixed(2)} tonf\xB7m, My=${y.toFixed(2)} tonf\xB7m
  Patrones: D(${e.P_D}, ${e.Mx_D}, ${e.My_D}) L(${e.P_L}, ${e.Mx_L}, ${e.My_L}) S(${e.P_S}, ${e.Mx_S}, ${e.My_S})
  q_max (centro) = -${n.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${f.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - f / (n || 1)) * 100).toFixed(1)}%
  q_adm = -${e.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${i.toFixed(2)}` + (i > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${m.toFixed(2)} (${m < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (a) {
        console.error("Solver error zapata aislada:", a);
      }
      const le = o.deformOutputs.rawVal.deformations;
      let ue = 1e-9;
      for (const a of we) {
        const l = le == null ? void 0 : le.get(a);
        l && Number.isFinite(l[2]) && (ue = Math.max(ue, Math.abs(l[2])));
      }
      const pe = _t * 12, Ke = new Set(we), _e = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Qe = (a, l) => {
        const t = a ? l : 0, n = -(ue * Math.max(t, 1) + Rt), f = [];
        for (const i of we) {
          if (!Ke.has(i)) continue;
          const w = o.nodes.rawVal[i];
          if (!w) continue;
          const m = w[0], c = w[1], u = le == null ? void 0 : le.get(i), _ = (p) => Number.isFinite(p) ? p : 0, v = u ? _(u[0]) : 0, V = u ? _(u[1]) : 0, Ie = u ? _(u[2]) : 0, he = m + v * t, Ce = c + V * t, te = 0 + Ie * t, He = te - n, ye = (p) => [
            m + (he - m) * p,
            c + (Ce - c) * p,
            n + He * p
          ], [et, qe, tt] = ye(0), [ot, st, nt] = ye(0.05), Te = [
            new g(et, qe, tt),
            new g(ot, st, nt)
          ];
          for (let p = 0; p <= pe; p++) {
            const at = 0.05 + 0.9 * (p / pe), [T, lt, it] = ye(at), Ve = 2 * Math.PI * _t * (p / pe);
            Te.push(new g(T + pt * Math.cos(Ve), lt + pt * Math.sin(Ve), it));
          }
          Te.push(new g(he, Ce, te)), f.push(new Xe(new Ze().setFromPoints(Te), Gt));
          const B = Vt, $e = [
            new g(m - B, c - B, n),
            new g(m + B, c - B, n),
            new g(m + B, c + B, n),
            new g(m - B, c + B, n),
            new g(m - B, c - B, n)
          ];
          f.push(new Xe(new Ze().setFromPoints($e), Ht));
        }
        return f;
      }, De = Ye.v;
      _e ? ht.derive(() => {
        const a = _e.deformedShape.val, l = _e.deformScale.val;
        Ye.v === De && (o.objects3D.val = Qe(a, l));
      }) : o.objects3D.val = Qe(true, 1);
    },
    runModal(e, o, d) {
      var _a, _b;
      const r = o.nodes.val, N = o.elements.val, h = o.nodeInputs.val, b = o.elementInputs.val;
      if (!(!r.length || !N.length || !((_a = b.densities) == null ? void 0 : _a.size))) try {
        const x = gt(r, N, h, b, 12);
        d.render(x, {
          title: `Zapata Aislada ${e.Lz}\xD7${e.Bz}m t=${e.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${e.bc}m  Hp=${e.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = x.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (x) {
        console.warn("Modal zapata error:", x.message);
      }
    }
  };
  Ye = {
    v: 0
  };
  ro = [
    zt,
    yt,
    Et,
    Dt,
    It,
    Nt,
    Ct,
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
  Ye as a,
  jt as b,
  ro as e,
  Ft as z
};
