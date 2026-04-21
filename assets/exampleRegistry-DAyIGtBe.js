import { a as Ue, V as D, L as ut, B as Ze, h as ft } from "./Text-CBH-tcJP.js";
import { v as ht } from "./theme-CzzIlc4y.js";
import { a as _t } from "./analyze-ClLKGn9k.js";
import { m as xt, d as gt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as It, __tla as __tla_1 } from "./plateThin-C30Q-WjQ.js";
import { p as Pt, __tla as __tla_2 } from "./plateThick-DrHD17l3.js";
import { m as Lt, __tla as __tla_3 } from "./membrana-Darbd52d.js";
import { s as Tt, __tla as __tla_4 } from "./shellThin-ORSIx719.js";
import { s as At, __tla as __tla_5 } from "./shellThick-BSU3qF0E.js";
import { e as qt, __tla as __tla_6 } from "./edificioAporticado-DG3xVeOI.js";
import { t as Bt, __tla as __tla_7 } from "./trussGen-CYTV_Ioz.js";
import { b as Ct, __tla as __tla_8 } from "./barraAxial-Bnm-0MrG.js";
import { p as $t, __tla as __tla_9 } from "./portico2D-kxfBcLlJ.js";
import { t as Ot, __tla as __tla_10 } from "./tower3D-tLRX3VEB.js";
import { g as Gt, __tla as __tla_11 } from "./galpon-BaNuuhBd.js";
import { e as Rt, __tla as __tla_12 } from "./edifAcero-Dhwvq9Mc.js";
import { m as Ht, __tla as __tla_13 } from "./mezanine-BmEOOT1G.js";
let Ye, Kt, xn, Dt;
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
  let Te, Ae, lt, je, Vt, ct, it, Ft, jt, Xt, Xe, De, Zt, rt, Le, mt, Yt, dt, pt, Ut, Wt, Jt;
  Te = 25e6;
  Ae = 0.2;
  lt = Te / (2 * (1 + Ae));
  je = 24;
  Vt = 0.2;
  ct = 0.035;
  it = 8;
  Ft = 0.04;
  jt = new Ue({
    color: 16711731,
    linewidth: 2
  });
  Xt = new Ue({
    color: 52224,
    linewidth: 2
  });
  Dt = {
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
    build(l, n) {
      var _a;
      const f = l.Lz1, d = l.Bz1, I = l.Lv, x = l.Bv, N = l.Hv, k = l.Lz2, ue = l.Bz2, qe = l.tz, P = l.bc, Be = l.Hp, We = l.P1, Je = l.P2, B = l.ks, fe = l.M1x ?? 0, he = l.M1y ?? 0, C = l.M2x ?? 0, $ = l.M2y ?? 0, U = Math.round(l.nSubX), X = Math.round(l.nSubY), le = 0.2, W = d / 2, _e = f + I + k / 2, ce = ue / 2, we = (W + ce) / 2;
      function ie(t, o, s, M) {
        const i = [
          t,
          ...s.filter((v) => v > t && v < o),
          o
        ].sort((v, y) => v - y), R = [];
        for (let v = 0; v < i.length - 1; v++) {
          const y = i[v], _ = i[v + 1], w = Math.max(1, Math.round((_ - y) / ((o - t) / M)));
          for (let E = 0; E < w; E++) R.push(y + (_ - y) * E / w);
        }
        return R.push(i[i.length - 1]), R;
      }
      const J = ie(0, f, [
        le
      ], U), K = ie(0, d, [
        W,
        we
      ], X), Z = ie(f + I, f + I + k, [
        _e
      ], U), Q = ie(0, ue, [
        ce,
        we
      ], X), re = [], L = [], S = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), V = (t, o, s) => {
        const M = `${t.toFixed(4)},${o.toFixed(4)},${s.toFixed(4)}`;
        if (ve.has(M)) return ve.get(M);
        const i = re.length;
        return re.push([
          t,
          o,
          s
        ]), ve.set(M, i), i;
      }, T = [];
      for (let t = 0; t < K.length; t++) {
        const o = [];
        for (let s = 0; s < J.length; s++) o.push(V(J[s], K[t], 0));
        T.push(o);
      }
      for (let t = 0; t < K.length - 1; t++) for (let o = 0; o < J.length - 1; o++) {
        const s = L.length;
        L.push([
          T[t][o],
          T[t][o + 1],
          T[t + 1][o + 1],
          T[t + 1][o]
        ]), ge.set(s, qe), ee.set(s, Te), z.set(s, Ae), Y.set(s, je);
      }
      const O = [];
      for (let t = 0; t < Q.length; t++) {
        const o = [];
        for (let s = 0; s < Z.length; s++) o.push(V(Z[s], Q[t], 0));
        O.push(o);
      }
      for (let t = 0; t < Q.length - 1; t++) for (let o = 0; o < Z.length - 1; o++) {
        const s = L.length;
        L.push([
          O[t][o],
          O[t][o + 1],
          O[t + 1][o + 1],
          O[t + 1][o]
        ]), ge.set(s, qe), ee.set(s, Te), z.set(s, Ae), Y.set(s, je);
      }
      const be = Math.round(l.vigaLevel) === 0 ? qe : Be, pe = V(le, W, 0), te = V(le, W, be), Ce = V(_e, ce, 0), ke = V(_e, ce, be);
      for (const [t, o] of [
        [
          pe,
          te
        ],
        [
          Ce,
          ke
        ]
      ]) {
        const s = L.length;
        L.push([
          t,
          o
        ]), ee.set(s, Te), z.set(s, Ae), me.set(s, lt), xe.set(s, P * P), Me.set(s, P ** 4 / 12), Ne.set(s, P ** 4 / 12), H.set(s, 0.14 * P ** 4), Y.set(s, je), de.set(s, {
          type: "rect",
          b: P,
          h: P
        });
      }
      const F = L.length;
      L.push([
        te,
        ke
      ]), ee.set(F, Te), z.set(F, Ae), me.set(F, lt), xe.set(F, x * N), Me.set(F, x * N ** 3 / 12), Ne.set(F, N * x ** 3 / 12), H.set(F, 0.28 * x * N ** 3), Y.set(F, je), de.set(F, {
        type: "rect",
        b: x,
        h: N
      }), ze.set(te, [
        0,
        0,
        -We,
        fe,
        he,
        0
      ]), ze.set(ke, [
        0,
        0,
        -Je,
        C,
        $,
        0
      ]);
      const ne = f / U, Ke = d / X, ye = k / U, $e = ue / X, Oe = 0.5, e = [], a = [];
      for (let t = 0; t < K.length; t++) for (let o = 0; o < J.length; o++) {
        const s = ne * Ke * (o === 0 || o === J.length - 1 ? 0.5 : 1) * (t === 0 || t === K.length - 1 ? 0.5 : 1), M = B * s, i = B * s * Oe;
        e.push({
          node: T[t][o],
          dof: 0,
          k: i
        }), e.push({
          node: T[t][o],
          dof: 1,
          k: i
        }), e.push({
          node: T[t][o],
          dof: 2,
          k: M
        }), a.push(T[t][o]);
      }
      for (let t = 0; t < Q.length; t++) for (let o = 0; o < Z.length; o++) {
        const s = ye * $e * (o === 0 || o === Z.length - 1 ? 0.5 : 1) * (t === 0 || t === Q.length - 1 ? 0.5 : 1), M = B * s, i = B * s * Oe;
        e.push({
          node: O[t][o],
          dof: 0,
          k: i
        }), e.push({
          node: O[t][o],
          dof: 1,
          k: i
        }), e.push({
          node: O[t][o],
          dof: 2,
          k: M
        }), a.push(O[t][o]);
      }
      const c = B * ne * Ke * 1e-4;
      e.push({
        node: T[0][0],
        dof: 3,
        k: c
      }), e.push({
        node: T[0][0],
        dof: 4,
        k: c
      }), e.push({
        node: T[0][0],
        dof: 5,
        k: c
      }), n.nodes.val = re.map((t) => [
        t[0],
        t[1],
        t[2]
      ]), n.elements.val = L, n.nodeInputs.val = {
        supports: S,
        loads: ze
      }, n.elementInputs.val = {
        elasticities: ee,
        poissonsRatios: z,
        areas: xe,
        momentsOfInertiaZ: Me,
        momentsOfInertiaY: Ne,
        torsionalConstants: H,
        shearModuli: me,
        thicknesses: ge,
        densities: Y,
        sectionShapes: de
      };
      try {
        n.deformOutputs.val = gt(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, e);
        const t = _t(n.nodes.val, n.elements.val, n.elementInputs.val, n.deformOutputs.val), o = n.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        n.elements.rawVal.forEach((M, i) => {
          if (M.length !== 4) return;
          const R = [];
          for (const v of M) {
            const y = o == null ? void 0 : o.get(v), _ = y ? y[2] : 0;
            R.push(-B * _);
          }
          s.set(i, R);
        }), t.pressure = s, n.analyzeOutputs.val = t;
      } catch (t) {
        console.error("Solver error:", t);
      }
      const A = n.deformOutputs.rawVal.deformations;
      let r = 1e-9;
      for (const t of a) {
        const o = A == null ? void 0 : A.get(t);
        o && Number.isFinite(o[2]) && (r = Math.max(r, Math.abs(o[2])));
      }
      const G = f + I + k, oe = Math.max(d, ue), g = 0.07 * Math.sqrt(G ** 2 + oe ** 2 + Be ** 2) / r, h = new Set(a), q = it * 12, se = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Ie = (t, o) => {
        const s = t ? g * o : 0, i = -(r * Math.max(s, g) + Vt), R = [];
        for (const v of a) {
          if (!h.has(v)) continue;
          const y = n.nodes.rawVal[v];
          if (!y) continue;
          const _ = y[0], w = y[1], E = A == null ? void 0 : A.get(v), m = (b) => Number.isFinite(b) ? b : 0, Re = E ? m(E[0]) : 0, Qe = E ? m(E[1]) : 0, He = E ? m(E[2]) : 0, p = _ + Re * s, Se = w + Qe * s, Ve = 0 + He * s, et = Ve - i, Pe = (b) => [
            _ + (p - _) * b,
            w + (Se - w) * b,
            i + et * b
          ], [Fe, vt, bt] = Pe(0), [kt, St, wt] = Pe(0.05), tt = [
            new D(Fe, vt, bt),
            new D(kt, St, wt)
          ];
          for (let b = 0; b <= q; b++) {
            const nt = 0.05 + 0.9 * (b / q), [Nt, yt, Et] = Pe(nt), at = 2 * Math.PI * it * (b / q);
            tt.push(new D(Nt + ct * Math.cos(at), yt + ct * Math.sin(at), Et));
          }
          tt.push(new D(p, Se, Ve)), R.push(new ut(new Ze().setFromPoints(tt), jt));
          const u = Ft, ot = [
            [
              _ - u,
              w - u,
              i - u * 2
            ],
            [
              _ + u,
              w - u,
              i - u * 2
            ],
            [
              _ + u,
              w + u,
              i - u * 2
            ],
            [
              _ - u,
              w + u,
              i - u * 2
            ],
            [
              _ - u,
              w - u,
              i
            ],
            [
              _ + u,
              w - u,
              i
            ],
            [
              _ + u,
              w + u,
              i
            ],
            [
              _ - u,
              w + u,
              i
            ]
          ].map((b) => new D(b[0], b[1], b[2])), zt = [
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
          ], st = [];
          for (const [b, nt] of zt) st.push(ot[b], ot[nt]);
          R.push(new ft(new Ze().setFromPoints(st), Xt));
        }
        return R;
      }, ae = Ye.v;
      se ? ht.derive(() => {
        const t = se.deformedShape.val, o = se.displayScale.val;
        if (Ye.v !== ae) return;
        const s = o === 0 ? 1 : o > 0 ? o : -1 / o;
        n.objects3D.val = Ie(t, s);
      }) : n.objects3D.val = Ie(true, 1);
    },
    runModal(l, n, f) {
      var _a, _b;
      const d = n.nodes.val, I = n.elements.val, x = n.nodeInputs.val, N = n.elementInputs.val;
      if (!(!d.length || !I.length || !((_a = N.densities) == null ? void 0 : _a.size))) try {
        const k = xt(d, I, x, N, 12);
        f.render(k, {
          title: `Zapata + Viga amarre Lv=${l.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${l.Bv}\xD7${l.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = k.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (k) {
        console.warn("Modal zapata-viga error:", k.message);
      }
    }
  };
  Xe = 25e6;
  De = 0.2;
  Zt = Xe / (2 * (1 + De));
  rt = 24;
  Le = 9.80665;
  mt = [
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
  dt = 0.035;
  pt = 8;
  Ut = new Ue({
    color: 16711731,
    linewidth: 2
  });
  Wt = new Ue({
    color: 52224,
    linewidth: 2
  });
  Jt = 0.04;
  Kt = {
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
        options: Object.fromEntries(mt.map((l, n) => [
          l.name,
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
    onParamChange(l, n) {
      if (l === "soilType") {
        const f = Math.round(n.soilType ?? 0);
        if (f > 0) {
          const d = mt[f];
          n.q_adm = d.q_adm, n.ks_factor = d.ks_factor, n.su = d.su, n.phi = d.phi, n.gamma = d.gamma, n.N_SPT = d.N_SPT, n.E_soil = d.E_soil;
        }
      }
    },
    build(l, n) {
      var _a;
      const { Lz: f, Bz: d, tz: I, bc: x, Hp: N } = l, k = l.q_adm, ue = l.ks_factor, P = k * Le * ue, Be = (l.CM + l.CV) * Le, We = l.Mx * Le, Je = l.My * Le, B = Math.round(l.nSub), fe = f / 2, he = d / 2, C = [], $ = [];
      for (let e = 0; e <= B; e++) C.push(f * e / B), $.push(d * e / B);
      C.includes(fe) || (C.push(fe), C.sort((e, a) => e - a)), $.includes(he) || ($.push(he), $.sort((e, a) => e - a));
      const U = [], X = [], le = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), L = (e, a, c) => {
        const A = `${e.toFixed(4)},${a.toFixed(4)},${c.toFixed(4)}`;
        if (re.has(A)) return re.get(A);
        const r = U.length;
        return U.push([
          e,
          a,
          c
        ]), re.set(A, r), r;
      }, S = [];
      for (let e = 0; e < $.length; e++) {
        const a = [];
        for (let c = 0; c < C.length; c++) a.push(L(C[c], $[e], 0));
        S.push(a);
      }
      for (let e = 0; e < $.length - 1; e++) for (let a = 0; a < C.length - 1; a++) {
        const c = X.length;
        X.push([
          S[e][a],
          S[e][a + 1],
          S[e + 1][a + 1],
          S[e + 1][a]
        ]), ce.set(c, I), le.set(c, Xe), W.set(c, De), Z.set(c, rt);
      }
      const ze = L(fe, he, 0), ee = L(fe, he, N), z = X.length;
      X.push([
        ze,
        ee
      ]), le.set(z, Xe), W.set(z, De), K.set(z, Zt), _e.set(z, x * x), we.set(z, x ** 4 / 12), ie.set(z, x ** 4 / 12), J.set(z, 0.14 * x ** 4), Z.set(z, rt), Q.set(z, {
        type: "rect",
        b: x,
        h: x
      });
      const xe = /* @__PURE__ */ new Map();
      xe.set(ee, [
        0,
        0,
        -Be,
        We,
        Je,
        0
      ]);
      const ge = f / B, Me = d / B, Ne = 0.5, H = [], me = [];
      for (let e = 0; e < $.length; e++) for (let a = 0; a < C.length; a++) {
        const c = ge * Me * (a === 0 || a === C.length - 1 ? 0.5 : 1) * (e === 0 || e === $.length - 1 ? 0.5 : 1), A = P * c, r = P * c * Ne;
        H.push({
          node: S[e][a],
          dof: 0,
          k: r
        }), H.push({
          node: S[e][a],
          dof: 1,
          k: r
        }), H.push({
          node: S[e][a],
          dof: 2,
          k: A
        }), me.push(S[e][a]);
      }
      const Y = P * ge * Me * 1e-4, de = S[0][0];
      H.push({
        node: de,
        dof: 3,
        k: Y
      }), H.push({
        node: de,
        dof: 4,
        k: Y
      }), H.push({
        node: de,
        dof: 5,
        k: Y
      }), n.nodes.val = U.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), n.elements.val = X, n.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: xe
      }, n.elementInputs.val = {
        elasticities: le,
        poissonsRatios: W,
        areas: _e,
        momentsOfInertiaZ: we,
        momentsOfInertiaY: ie,
        torsionalConstants: J,
        shearModuli: K,
        thicknesses: ce,
        densities: Z,
        sectionShapes: Q
      };
      try {
        n.deformOutputs.val = gt(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, H);
        const e = _t(n.nodes.val, n.elements.val, n.elementInputs.val, n.deformOutputs.val), a = n.deformOutputs.rawVal.deformations, c = /* @__PURE__ */ new Map();
        let A = 0;
        n.elements.rawVal.forEach((h, j) => {
          if (h.length !== 4) return;
          const q = [];
          for (const Ge of h) {
            const se = a == null ? void 0 : a.get(Ge), ae = P * (se ? se[2] : 0) / Le;
            q.push(ae), ae < A && (A = ae);
          }
          c.set(j, q);
        }), e.pressure = c, n.analyzeOutputs.val = e;
        const r = Math.abs(A);
        let G = 1 / 0;
        c.forEach((h) => {
          for (const j of h) {
            const q = Math.abs(j);
            q < G && (G = q);
          }
        }), Number.isFinite(G) || (G = 0);
        const oe = r / l.q_adm, g = Xe * I ** 3 / (12 * (1 - De ** 2)) / (P * f ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${r.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${G.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - G / (r || 1)) * 100).toFixed(1)}%
  q_adm = -${l.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${oe.toFixed(2)}` + (oe > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${g.toFixed(2)} (${g < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (e) {
        console.error("Solver error zapata aislada:", e);
      }
      const ve = n.deformOutputs.rawVal.deformations;
      let V = 1e-9;
      for (const e of me) {
        const a = ve == null ? void 0 : ve.get(e);
        a && Number.isFinite(a[2]) && (V = Math.max(V, Math.abs(a[2])));
      }
      const O = 0.07 * Math.sqrt(f ** 2 + d ** 2 + N ** 2) / V, be = pt * 12, pe = C.length, te = $.length, Ce = 6, ke = Math.max(1, Math.ceil((pe - 1) / (Ce - 1))), F = Math.max(1, Math.ceil((te - 1) / (Ce - 1))), ne = /* @__PURE__ */ new Set();
      for (let e = 0; e < te; e += F) {
        for (let a = 0; a < pe; a += ke) ne.add(S[e][a]);
        ne.add(S[e][pe - 1]);
      }
      for (let e = 0; e < pe; e += ke) ne.add(S[te - 1][e]);
      ne.add(S[te - 1][pe - 1]);
      const ye = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, $e = (e, a) => {
        const c = e ? O * a : 0, r = -(V * Math.max(c, O) + Yt), G = [];
        for (const oe of me) {
          if (!ne.has(oe)) continue;
          const Ee = n.nodes.rawVal[oe];
          if (!Ee) continue;
          const g = Ee[0], h = Ee[1], j = ve == null ? void 0 : ve.get(oe), q = (p) => Number.isFinite(p) ? p : 0, Ge = j ? q(j[0]) : 0, se = j ? q(j[1]) : 0, Ie = j ? q(j[2]) : 0, ae = g + Ge * c, t = h + se * c, o = 0 + Ie * c, s = o - r, M = (p) => [
            g + (ae - g) * p,
            h + (t - h) * p,
            r + s * p
          ], [i, R, v] = M(0), [y, _, w] = M(0.05), E = [
            new D(i, R, v),
            new D(y, _, w)
          ];
          for (let p = 0; p <= be; p++) {
            const Se = 0.05 + 0.9 * (p / be), [Ve, et, Pe] = M(Se), Fe = 2 * Math.PI * pt * (p / be);
            E.push(new D(Ve + dt * Math.cos(Fe), et + dt * Math.sin(Fe), Pe));
          }
          E.push(new D(ae, t, o)), G.push(new ut(new Ze().setFromPoints(E), Ut));
          const m = Jt, Re = [
            [
              g - m,
              h - m,
              r - m * 2
            ],
            [
              g + m,
              h - m,
              r - m * 2
            ],
            [
              g + m,
              h + m,
              r - m * 2
            ],
            [
              g - m,
              h + m,
              r - m * 2
            ],
            [
              g - m,
              h - m,
              r
            ],
            [
              g + m,
              h - m,
              r
            ],
            [
              g + m,
              h + m,
              r
            ],
            [
              g - m,
              h + m,
              r
            ]
          ].map((p) => new D(p[0], p[1], p[2])), Qe = [
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
          ], He = [];
          for (const [p, Se] of Qe) He.push(Re[p], Re[Se]);
          G.push(new ft(new Ze().setFromPoints(He), Wt));
        }
        return G;
      }, Oe = Ye.v;
      ye ? ht.derive(() => {
        const e = ye.deformedShape.val, a = ye.displayScale.val;
        if (Ye.v !== Oe) return;
        const c = a === 0 ? 1 : a > 0 ? a : -1 / a;
        n.objects3D.val = $e(e, c);
      }) : n.objects3D.val = $e(true, 1);
    },
    runModal(l, n, f) {
      var _a, _b;
      const d = n.nodes.val, I = n.elements.val, x = n.nodeInputs.val, N = n.elementInputs.val;
      if (!(!d.length || !I.length || !((_a = N.densities) == null ? void 0 : _a.size))) try {
        const k = xt(d, I, x, N, 12);
        f.render(k, {
          title: `Zapata Aislada ${l.Lz}\xD7${l.Bz}m t=${l.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${l.bc}m  Hp=${l.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = k.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (k) {
        console.warn("Modal zapata error:", k.message);
      }
    }
  };
  Ye = {
    v: 0
  };
  xn = [
    Ct,
    Bt,
    $t,
    Ot,
    Gt,
    qt,
    Rt,
    Ht,
    It,
    Pt,
    Lt,
    Tt,
    At,
    Kt,
    Dt
  ];
});
export {
  __tla,
  Ye as a,
  Kt as b,
  xn as e,
  Dt as z
};
