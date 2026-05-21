import { L as Ae, V as g, a as Pe, B as He } from "./Text-BmY6zyQy.js";
import { v as ft } from "./theme-2eEBQPmF.js";
import { a as pt } from "./analyze-DNPn2SjO.js";
import { m as ht, d as vt, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
import { a as Ce } from "./exampleVersion-D1A_5i59.js";
let Et;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let j, X, Ve, J, gt, xt, Oe, bt, Mt, wt;
  j = 25e6;
  X = 0.2;
  Ve = j / (2 * (1 + X));
  J = 24;
  gt = 0.2;
  xt = 0.035;
  Oe = 8;
  bt = 0.04;
  Mt = new Ae({
    color: 16711731,
    linewidth: 2
  });
  wt = new Ae({
    color: 52224,
    linewidth: 2
  });
  Et = {
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
        default: 25,
        min: 1,
        max: 200,
        step: 1,
        label: "P1 axial (tonf)"
      },
      M1x: {
        default: 1,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1x (tonf\xB7m)"
      },
      M1y: {
        default: 2.5,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1y (tonf\xB7m)"
      },
      P2: {
        default: 40,
        min: 1,
        max: 200,
        step: 1,
        label: "P2 axial (tonf)"
      },
      M2x: {
        default: 1,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2x (tonf\xB7m)"
      },
      M2y: {
        default: 2.5,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2y (tonf\xB7m)"
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
    build(s, o) {
      var _a;
      const z = s.Lz1, y = s.Bz1, L = s.Lv, S = s.Bv, x = s.Hv, b = s.Lz2, Z = s.Bz2, K = s.tz, I = s.bc, Ge = s.Hp, _ = 9.80665, Re = s.P1 * _, Te = s.P2 * _, B = s.ks, Fe = (s.M1x ?? 0) * _, je = (s.M1y ?? 0) * _, Xe = (s.M2x ?? 0) * _, Ze = (s.M2y ?? 0) * _, $ = Math.round(s.nSubX), Y = Math.round(s.nSubY), U = (y - Z) / 2, Q = 0.2, D = y / 2, ee = z + L + b / 2, te = Z / 2 + U, we = D;
      function q(e, t, n, a) {
        const l = [
          e,
          ...n.filter((r) => r > e && r < t),
          t
        ].sort((r, m) => r - m), c = [];
        for (let r = 0; r < l.length - 1; r++) {
          const m = l[r], N = l[r + 1], P = Math.max(1, Math.round((N - m) / ((t - e) / a)));
          for (let k = 0; k < P; k++) c.push(m + (N - m) * k / P);
        }
        return c.push(l[l.length - 1]), c;
      }
      const C = q(0, z, [
        Q
      ], $), V = q(0, y, [
        D,
        we
      ], Y), O = q(z + L, z + L + b, [
        ee
      ], $), A = q(U, U + Z, [
        te,
        we
      ], Y), ne = [], p = [], $e = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), E = (e, t, n) => {
        const a = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (de.has(a)) return de.get(a);
        const l = ne.length;
        return ne.push([
          e,
          t,
          n
        ]), de.set(a, l), l;
      }, i = [];
      for (let e = 0; e < V.length; e++) {
        const t = [];
        for (let n = 0; n < C.length; n++) t.push(E(C[n], V[e], 0));
        i.push(t);
      }
      for (let e = 0; e < V.length - 1; e++) for (let t = 0; t < C.length - 1; t++) {
        const n = p.length;
        p.push([
          i[e][t],
          i[e][t + 1],
          i[e + 1][t + 1],
          i[e + 1][t]
        ]), ae.set(n, K), G.set(n, j), R.set(n, X), T.set(n, J);
      }
      const h = [];
      for (let e = 0; e < A.length; e++) {
        const t = [];
        for (let n = 0; n < O.length; n++) t.push(E(O[n], A[e], 0));
        h.push(t);
      }
      for (let e = 0; e < A.length - 1; e++) for (let t = 0; t < O.length - 1; t++) {
        const n = p.length;
        p.push([
          h[e][t],
          h[e][t + 1],
          h[e + 1][t + 1],
          h[e + 1][t]
        ]), ae.set(n, K), G.set(n, j), R.set(n, X), T.set(n, J);
      }
      const ze = Math.round(s.vigaLevel) === 0 ? K : Ge, Ye = E(Q, D, 0), ue = E(Q, D, ze), De = E(ee, te, 0), fe = E(ee, te, ze);
      for (const [e, t] of [
        [
          Ye,
          ue
        ],
        [
          De,
          fe
        ]
      ]) {
        const n = p.length;
        p.push([
          e,
          t
        ]), G.set(n, j), R.set(n, X), ie.set(n, Ve), se.set(n, I * I), le.set(n, I ** 4 / 12), ce.set(n, I ** 4 / 12), re.set(n, 0.14 * I ** 4), T.set(n, J), me.set(n, {
          type: "rect",
          b: I,
          h: I
        });
      }
      const v = p.length;
      p.push([
        ue,
        fe
      ]), G.set(v, j), R.set(v, X), ie.set(v, Ve), se.set(v, S * x), le.set(v, S * x ** 3 / 12), ce.set(v, x * S ** 3 / 12), re.set(v, 0.28 * S * x ** 3), T.set(v, J), me.set(v, {
        type: "rect",
        b: S,
        h: x
      }), oe.set(ue, [
        0,
        0,
        -Re,
        Fe,
        je,
        0
      ]), oe.set(fe, [
        0,
        0,
        -Te,
        Xe,
        Ze,
        0
      ]);
      const ye = z / $, Se = y / Y, qe = b / $, We = Z / Y, Ie = 0.5, u = [], F = [];
      for (let e = 0; e < V.length; e++) for (let t = 0; t < C.length; t++) {
        const n = ye * Se * (t === 0 || t === C.length - 1 ? 0.5 : 1) * (e === 0 || e === V.length - 1 ? 0.5 : 1), a = B * n, l = B * n * Ie;
        u.push({
          node: i[e][t],
          dof: 0,
          k: l
        }), u.push({
          node: i[e][t],
          dof: 1,
          k: l
        }), u.push({
          node: i[e][t],
          dof: 2,
          k: a
        }), F.push(i[e][t]);
      }
      for (let e = 0; e < A.length; e++) for (let t = 0; t < O.length; t++) {
        const n = qe * We * (t === 0 || t === O.length - 1 ? 0.5 : 1) * (e === 0 || e === A.length - 1 ? 0.5 : 1), a = B * n, l = B * n * Ie;
        u.push({
          node: h[e][t],
          dof: 0,
          k: l
        }), u.push({
          node: h[e][t],
          dof: 1,
          k: l
        }), u.push({
          node: h[e][t],
          dof: 2,
          k: a
        }), F.push(h[e][t]);
      }
      const pe = B * ye * Se * 1e-4;
      u.push({
        node: i[0][0],
        dof: 3,
        k: pe
      }), u.push({
        node: i[0][0],
        dof: 4,
        k: pe
      }), u.push({
        node: i[0][0],
        dof: 5,
        k: pe
      }), o.nodes.val = ne.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), o.elements.val = p, o.nodeInputs.val = {
        supports: $e,
        loads: oe
      }, o.elementInputs.val = {
        elasticities: G,
        poissonsRatios: R,
        areas: se,
        momentsOfInertiaZ: le,
        momentsOfInertiaY: ce,
        torsionalConstants: re,
        shearModuli: ie,
        thicknesses: ae,
        densities: T,
        sectionShapes: me
      };
      try {
        o.deformOutputs.val = vt(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, u);
        const e = pt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), t = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((a, l) => {
          if (a.length !== 4) return;
          const c = [];
          for (const r of a) {
            const m = t == null ? void 0 : t.get(r), N = m ? m[2] : 0;
            c.push(-B * N);
          }
          n.set(l, c);
        }), e.pressure = n, o.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const ke = o.deformOutputs.rawVal.deformations;
      let he = 1e-9;
      for (const e of F) {
        const t = ke == null ? void 0 : ke.get(e);
        t && Number.isFinite(t[2]) && (he = Math.max(he, Math.abs(t[2])));
      }
      const Je = new Set(F), ve = Oe * 12, W = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Le = (e, t, n = 1) => {
        const a = e ? t : 0, c = -(he * Math.max(a, 1) + gt), r = n > 0 ? n : n < 0 ? -1 / n : 1, m = xt * r, N = bt * r, P = [];
        for (const k of F) {
          if (!Je.has(k)) continue;
          const ge = o.nodes.rawVal[k];
          if (!ge) continue;
          const M = ge[0], w = ge[1], H = ke == null ? void 0 : ke.get(k), xe = (d) => Number.isFinite(d) ? d : 0, Ue = H ? xe(H[0]) : 0, Qe = H ? xe(H[1]) : 0, et = H ? xe(H[2]) : 0, _e = M + Ue * a, Be = w + Qe * a, Ee = 0 + et * a, tt = Ee - c, be = (d) => [
            M + (_e - M) * d,
            w + (Be - w) * d,
            c + tt * d
          ], [nt, ot, st] = be(0), [at, lt, ct] = be(0.05), Me = [
            new g(nt, ot, st),
            new g(at, lt, ct)
          ];
          for (let d = 0; d <= ve; d++) {
            const it = 0.05 + 0.9 * (d / ve), [mt, dt, ut] = be(it), Ne = 2 * Math.PI * Oe * (d / ve);
            Me.push(new g(mt + m * Math.cos(Ne), dt + m * Math.sin(Ne), ut));
          }
          Me.push(new g(_e, Be, Ee)), P.push(new Pe(new He().setFromPoints(Me), Mt));
          const f = N, rt = [
            new g(M - f, w - f, c),
            new g(M + f, w - f, c),
            new g(M + f, w + f, c),
            new g(M - f, w + f, c),
            new g(M - f, w - f, c)
          ];
          P.push(new Pe(new He().setFromPoints(rt), wt));
        }
        return P;
      }, Ke = Ce.v;
      W ? ft.derive(() => {
        if (Ce.v !== Ke) return;
        const e = W.deformedShape.val, t = W.deformScale.val, n = W.displayScale.val;
        o.objects3D.val = Le(e, t, n);
      }) : o.objects3D.val = Le(true, 1, 1);
    },
    runModal(s, o, z) {
      var _a, _b;
      const y = o.nodes.val, L = o.elements.val, S = o.nodeInputs.val, x = o.elementInputs.val;
      if (!(!y.length || !L.length || !((_a = x.densities) == null ? void 0 : _a.size))) try {
        const b = ht(y, L, S, x, 12);
        z.render(b, {
          title: `Zapata + Viga amarre Lv=${s.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${s.Bv}\xD7${s.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = b.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (b) {
        console.warn("Modal zapata-viga error:", b.message);
      }
    }
  };
});
export {
  __tla,
  Et as z
};
