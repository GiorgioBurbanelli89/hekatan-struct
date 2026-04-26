import { L as Pe, V as g, a as Fe, B as ge } from "./Text-DyNVkyur.js";
import { v as Ge } from "./theme-2eEBQPmF.js";
import { a as He } from "./analyze-BydHtRcI.js";
import { d as K, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { a as Ie } from "./exampleVersion-D1A_5i59.js";
let eo;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let C, A, Te, ye, L, je, Ne, ze, Xe, Ye, Ze;
  C = 25e6;
  A = 0.2;
  Te = C / (2 * (1 + A));
  ye = 24;
  L = 9.80665;
  je = 0.2;
  Ne = 0.035;
  ze = 8;
  Xe = 0.04;
  Ye = new Pe({
    color: 16711731,
    linewidth: 2
  });
  Ze = new Pe({
    color: 52224,
    linewidth: 2
  });
  eo = {
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
        compute: (n) => ((n.q_adm ?? 10) * L * (n.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (n) => {
          const t = n.tz ?? 0.3;
          return (C * t ** 3 / (12 * (1 - A ** 2))).toFixed(1);
        }
      },
      {
        after: "ks",
        label: "k_r Biot",
        compute: (n) => {
          const t = n.tz ?? 0.3, f = n.Lz ?? 1.5, N = n.ks ?? 1030, z = C * t ** 3 / (12 * (1 - A ** 2)) / (N * f ** 4);
          return z.toFixed(3) + (z < 1 ? " FLEX" : " RIGID");
        }
      }
    ],
    computedLabels(n, t) {
      var _a;
      const f = n.q_adm ?? 10, N = n.ks_factor ?? 10.5, z = f * L, u = n.ks ?? z * N, J = n.tz ?? 0.3, U = n.Lz ?? 1.5, w = C * J ** 3 / (12 * (1 - A ** 2)), $ = w / (u * U ** 4), G = n.P_simple ?? 0;
      let P = 0, x = 0, S = false;
      const I = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (I && I.size) for (const q of I.values()) for (const b of q) S || (P = x = b, S = true), b < P && (P = b), b > x && (x = b);
      const d = Math.abs(P), m = Math.abs(x), O = d / (f || 1);
      return {
        Mode: "Direct P/Mx/My",
        "ks (kN/m\xB3)": u.toFixed(0),
        "D (kN\xB7m)": w.toFixed(1),
        "k_r (Biot)": $.toFixed(3) + ($ < 1 ? " FLEXIBLE" : " RIGID"),
        "P (tonf)": G.toFixed(2),
        "Mx (tonf\xB7m)": (n.Mx_simple ?? 0).toFixed(2),
        "My (tonf\xB7m)": (n.My_simple ?? 0).toFixed(2),
        "\u03C3_max comp (tonf/m\xB2)": d.toFixed(2),
        "\u03C3_min comp (tonf/m\xB2)": m.toFixed(2),
        "q_adm (tonf/m\xB2)": f.toFixed(2),
        "\u03C3/q_adm": O.toFixed(2) + (O > 1 ? " \u26A0" : " \u2713")
      };
    },
    build(n, t) {
      var _a;
      const { Lz: f, Bz: N, tz: z, bc: u, Hp: J } = n, U = n.q_adm * L, w = n.ks ?? U * n.ks_factor, $ = (n.P_simple ?? 0) * L, G = (n.Mx_simple ?? 0) * L, P = (n.My_simple ?? 0) * L, x = Math.round(n.nSub), S = f / 2, I = N / 2, d = [], m = [];
      for (let e = 0; e <= x; e++) d.push(f * e / x), m.push(N * e / x);
      d.includes(S) || (d.push(S), d.sort((e, o) => e - o)), m.includes(I) || (m.push(I), m.sort((e, o) => e - o));
      const O = [], q = [], b = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), oe = (e, o, s) => {
        const a = `${e.toFixed(4)},${o.toFixed(4)},${s.toFixed(4)}`;
        if (ee.has(a)) return ee.get(a);
        const c = O.length;
        return O.push([
          e,
          o,
          s
        ]), ee.set(a, c), c;
      }, h = [];
      for (let e = 0; e < m.length; e++) {
        const o = [];
        for (let s = 0; s < d.length; s++) o.push(oe(d[s], m[e], 0));
        h.push(o);
      }
      for (let e = 0; e < m.length - 1; e++) for (let o = 0; o < d.length - 1; o++) {
        const s = q.length;
        q.push([
          h[e][o],
          h[e][o + 1],
          h[e + 1][o + 1],
          h[e + 1][o]
        ]), me.set(s, z), b.set(s, C), W.set(s, A), Q.set(s, ye);
      }
      const Se = oe(S, I, 0), B = oe(S, I, J), F = q.length;
      q.push([
        Se,
        B
      ]), b.set(F, C), W.set(F, A), xe.set(F, Te), de.set(F, u * u), pe.set(F, u ** 4 / 12), fe.set(F, u ** 4 / 12), ue.set(F, 0.14 * u ** 4), Q.set(F, ye), he.set(F, {
        type: "rect",
        b: u,
        h: u
      });
      const Me = /* @__PURE__ */ new Map();
      Me.set(B, [
        0,
        0,
        -$,
        G,
        P,
        0
      ]);
      const _e = f / x, ke = N / x, qe = 0.5, M = [], H = [];
      for (let e = 0; e < m.length; e++) for (let o = 0; o < d.length; o++) {
        const s = _e * ke * (o === 0 || o === d.length - 1 ? 0.5 : 1) * (e === 0 || e === m.length - 1 ? 0.5 : 1), a = w * s, c = w * s * qe;
        M.push({
          node: h[e][o],
          dof: 0,
          k: c
        }), M.push({
          node: h[e][o],
          dof: 1,
          k: c
        }), M.push({
          node: h[e][o],
          dof: 2,
          k: a
        }), H.push(h[e][o]);
      }
      const te = w * _e * ke * 1e-4, ne = h[0][0];
      M.push({
        node: ne,
        dof: 3,
        k: te
      }), M.push({
        node: ne,
        dof: 4,
        k: te
      }), M.push({
        node: ne,
        dof: 5,
        k: te
      }), t.nodes.val = O.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), t.elements.val = q, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: Me
      }, t.elementInputs.val = {
        elasticities: b,
        poissonsRatios: W,
        areas: de,
        momentsOfInertiaZ: pe,
        momentsOfInertiaY: fe,
        torsionalConstants: ue,
        shearModuli: xe,
        thicknesses: me,
        densities: Q,
        sectionShapes: he
      };
      try {
        t.deformOutputs.val = K(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, M);
        const e = He(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), o = (l) => {
          const k = /* @__PURE__ */ new Map();
          return t.elements.rawVal.forEach((y, X) => {
            if (y.length !== 4) return;
            const Y = [];
            for (const V of y) {
              const Z = l == null ? void 0 : l.get(V), ce = Z ? Z[2] : 0, ie = w * ce;
              Y.push(ie / L);
            }
            k.set(X, Y);
          }), k;
        }, s = t.deformOutputs.rawVal.deformations, a = o(s);
        let c = 0;
        a.forEach((l) => {
          for (const k of l) k < c && (c = k);
        }), e.pressure = a;
        const D = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map([
            [
              B,
              [
                0,
                0,
                -$,
                0,
                0,
                0
              ]
            ]
          ])
        }, E = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map([
            [
              B,
              [
                0,
                0,
                0,
                G,
                0,
                0
              ]
            ]
          ])
        }, _ = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map([
            [
              B,
              [
                0,
                0,
                0,
                0,
                P,
                0
              ]
            ]
          ])
        };
        try {
          const l = K(t.nodes.val, t.elements.val, D, t.elementInputs.val, M);
          e.pressure_P = o(l.deformations), e.deform_P = l.deformations;
        } catch {
        }
        try {
          const l = K(t.nodes.val, t.elements.val, E, t.elementInputs.val, M);
          e.pressure_Mx = o(l.deformations), e.deform_Mx = l.deformations;
        } catch {
        }
        try {
          const l = K(t.nodes.val, t.elements.val, _, t.elementInputs.val, M);
          e.pressure_My = o(l.deformations), e.deform_My = l.deformations;
        } catch {
        }
        t.analyzeOutputs.val = e;
        const i = Math.abs(c);
        let r = 1 / 0;
        a.forEach((l) => {
          for (const k of l) {
            const y = Math.abs(k);
            y < r && (r = y);
          }
        }), Number.isFinite(r) || (r = 0);
        const R = i / n.q_adm, T = C * z ** 3 / (12 * (1 - A ** 2)), j = T / (w * f ** 4);
        console.log(`[Zapata VALIDACI\xD3N \u2014 espejo Calcpad]
  Cargas: P=${(n.P_simple ?? 0).toFixed(2)} tonf, Mx=${(n.Mx_simple ?? 0).toFixed(2)} tonf\xB7m, My=${(n.My_simple ?? 0).toFixed(2)} tonf\xB7m
  \u2500\u2500\u2500 Valores derivados (comparar con Calcpad) \u2500\u2500\u2500
  D flexural = ${T.toFixed(1)} kN\xB7m   (Calcpad: idem)
  ks         = ${w.toFixed(0)} kN/m\xB3   (Calcpad: idem)
  k_r Biot   = ${j.toFixed(3)} ${j < 1 ? "FLEXIBLE" : "R\xCDGIDA"}
  \u2500\u2500\u2500 Resultados FEM Hekatan \u2500\u2500\u2500
  q_max (centro) = -${i.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${r.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - r / (i || 1)) * 100).toFixed(1)}%
  ratio q/q_adm = ${R.toFixed(3)} ${R > 1 ? "\u26A0 SOBREPASA" : "\u2713 OK"}
  FS = ${(n.q_adm / (i || 1)).toFixed(3)}`);
      } catch (e) {
        console.error("Solver error zapata validaci\xF3n:", e);
      }
      const ve = t.deformOutputs.rawVal.deformations;
      let se = 1e-9;
      for (const e of H) {
        const o = ve == null ? void 0 : ve.get(e);
        o && Number.isFinite(o[2]) && (se = Math.max(se, Math.abs(o[2])));
      }
      const ae = ze * 12, Le = new Set(H), le = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, we = (e, o) => {
        const s = e ? o : 0, a = -(se * Math.max(s, 1) + je), c = [];
        for (const D of H) {
          if (!Le.has(D)) continue;
          const E = t.nodes.rawVal[D];
          if (!E) continue;
          const _ = E[0], i = E[1], r = ve == null ? void 0 : ve.get(D), R = (p) => Number.isFinite(p) ? p : 0, T = r ? R(r[0]) : 0, j = r ? R(r[1]) : 0, l = r ? R(r[2]) : 0, k = _ + T * s, y = i + j * s, X = 0 + l * s, Y = X - a, V = (p) => [
            _ + (k - _) * p,
            i + (y - i) * p,
            a + Y * p
          ], [Z, ce, ie] = V(0), [Ae, Oe, Re] = V(0.05), re = [
            new g(Z, ce, ie),
            new g(Ae, Oe, Re)
          ];
          for (let p = 0; p <= ae; p++) {
            const Be = 0.05 + 0.9 * (p / ae), [De, Ee, Ve] = V(Be), be = 2 * Math.PI * ze * (p / ae);
            re.push(new g(De + Ne * Math.cos(be), Ee + Ne * Math.sin(be), Ve));
          }
          re.push(new g(k, y, X)), c.push(new Fe(new ge().setFromPoints(re), Ye));
          const v = Xe, $e = [
            new g(_ - v, i - v, a),
            new g(_ + v, i - v, a),
            new g(_ + v, i + v, a),
            new g(_ - v, i + v, a),
            new g(_ - v, i - v, a)
          ];
          c.push(new Fe(new ge().setFromPoints($e), Ze));
        }
        return c;
      }, Ce = Ie.v;
      le ? Ge.derive(() => {
        if (Ie.v !== Ce) return;
        const e = le.deformedShape.val, o = le.deformScale.val;
        t.objects3D.val = we(e, o);
      }) : t.objects3D.val = we(true, 1);
    }
  };
});
export {
  __tla,
  eo as z
};
