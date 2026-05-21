import { L as Ae, V as x, a as Pe, B as He } from "./Text-BmY6zyQy.js";
import { v as ut } from "./theme-2eEBQPmF.js";
import { a as pt } from "./analyze-DNPn2SjO.js";
import { m as ft, d as ht, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
import { a as Ce } from "./exampleVersion-D1A_5i59.js";
let Bt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let j, X, Oe, J, vt, xt, Ve, gt, bt, Mt;
  j = 25e6;
  X = 0.2;
  Oe = j / (2 * (1 + X));
  J = 24;
  vt = 0.2;
  xt = 0.035;
  Ve = 8;
  gt = 0.04;
  bt = new Ae({
    color: 16711731,
    linewidth: 2
  });
  Mt = new Ae({
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
      const z = s.Lz1, y = s.Bz1, _ = s.Lv, S = s.Bv, g = s.Hv, b = s.Lz2, Z = s.Bz2, Me = s.tz, I = s.bc, we = s.Hp, B = 9.80665, Ge = s.P1 * B, Re = s.P2 * B, L = s.ks, Te = (s.M1x ?? 0) * B, Fe = (s.M1y ?? 0) * B, je = (s.M2x ?? 0) * B, Xe = (s.M2y ?? 0) * B, $ = Math.round(s.nSubX), Y = Math.round(s.nSubY), K = (y - Z) / 2, U = 0.2, D = y / 2, Q = z + _ + b / 2, ee = Z / 2 + K, ze = D;
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
        U
      ], $), O = q(0, y, [
        D,
        ze
      ], Y), V = q(z + _, z + _ + b, [
        Q
      ], $), A = q(K, K + Z, [
        ee,
        ze
      ], Y), te = [], f = [], Ze = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), E = (e, t, n) => {
        const a = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (me.has(a)) return me.get(a);
        const l = te.length;
        return te.push([
          e,
          t,
          n
        ]), me.set(a, l), l;
      }, i = [];
      for (let e = 0; e < O.length; e++) {
        const t = [];
        for (let n = 0; n < C.length; n++) t.push(E(C[n], O[e], 0));
        i.push(t);
      }
      for (let e = 0; e < O.length - 1; e++) for (let t = 0; t < C.length - 1; t++) {
        const n = f.length;
        f.push([
          i[e][t],
          i[e][t + 1],
          i[e + 1][t + 1],
          i[e + 1][t]
        ]), se.set(n, Me), G.set(n, j), R.set(n, X), T.set(n, J);
      }
      const h = [];
      for (let e = 0; e < A.length; e++) {
        const t = [];
        for (let n = 0; n < V.length; n++) t.push(E(V[n], A[e], 0));
        h.push(t);
      }
      for (let e = 0; e < A.length - 1; e++) for (let t = 0; t < V.length - 1; t++) {
        const n = f.length;
        f.push([
          h[e][t],
          h[e][t + 1],
          h[e + 1][t + 1],
          h[e + 1][t]
        ]), se.set(n, Me), G.set(n, j), R.set(n, X), T.set(n, J);
      }
      const $e = E(U, D, 0), de = E(U, D, we), Ye = E(Q, ee, 0), ue = E(Q, ee, we);
      for (const [e, t] of [
        [
          $e,
          de
        ],
        [
          Ye,
          ue
        ]
      ]) {
        const n = f.length;
        f.push([
          e,
          t
        ]), G.set(n, j), R.set(n, X), re.set(n, Oe), oe.set(n, I * I), ae.set(n, I ** 4 / 12), le.set(n, I ** 4 / 12), ce.set(n, 0.14 * I ** 4), T.set(n, J), ie.set(n, {
          type: "rect",
          b: I,
          h: I
        });
      }
      const v = f.length;
      f.push([
        de,
        ue
      ]), G.set(v, j), R.set(v, X), re.set(v, Oe), oe.set(v, S * g), ae.set(v, S * g ** 3 / 12), le.set(v, g * S ** 3 / 12), ce.set(v, 0.28 * S * g ** 3), T.set(v, J), ie.set(v, {
        type: "rect",
        b: S,
        h: g
      }), ne.set(de, [
        0,
        0,
        -Ge,
        Te,
        Fe,
        0
      ]), ne.set(ue, [
        0,
        0,
        -Re,
        je,
        Xe,
        0
      ]);
      const ye = z / $, Se = y / Y, De = b / $, qe = Z / Y, Ie = 0.5, u = [], F = [];
      for (let e = 0; e < O.length; e++) for (let t = 0; t < C.length; t++) {
        const n = ye * Se * (t === 0 || t === C.length - 1 ? 0.5 : 1) * (e === 0 || e === O.length - 1 ? 0.5 : 1), a = L * n, l = L * n * Ie;
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
      for (let e = 0; e < A.length; e++) for (let t = 0; t < V.length; t++) {
        const n = De * qe * (t === 0 || t === V.length - 1 ? 0.5 : 1) * (e === 0 || e === A.length - 1 ? 0.5 : 1), a = L * n, l = L * n * Ie;
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
      const pe = L * ye * Se * 1e-4;
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
      }), o.nodes.val = te.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), o.elements.val = f, o.nodeInputs.val = {
        supports: Ze,
        loads: ne
      }, o.elementInputs.val = {
        elasticities: G,
        poissonsRatios: R,
        areas: oe,
        momentsOfInertiaZ: ae,
        momentsOfInertiaY: le,
        torsionalConstants: ce,
        shearModuli: re,
        thicknesses: se,
        densities: T,
        sectionShapes: ie
      };
      try {
        o.deformOutputs.val = ht(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, u);
        const e = pt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), t = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((a, l) => {
          if (a.length !== 4) return;
          const c = [];
          for (const r of a) {
            const m = t == null ? void 0 : t.get(r), N = m ? m[2] : 0;
            c.push(-L * N);
          }
          n.set(l, c);
        }), e.pressure = n, o.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const ke = o.deformOutputs.rawVal.deformations;
      let fe = 1e-9;
      for (const e of F) {
        const t = ke == null ? void 0 : ke.get(e);
        t && Number.isFinite(t[2]) && (fe = Math.max(fe, Math.abs(t[2])));
      }
      const We = new Set(F), he = Ve * 12, W = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, _e = (e, t, n = 1) => {
        const a = e ? t : 0, c = -(fe * Math.max(a, 1) + vt), r = n > 0 ? n : n < 0 ? -1 / n : 1, m = xt * r, N = gt * r, P = [];
        for (const k of F) {
          if (!We.has(k)) continue;
          const ve = o.nodes.rawVal[k];
          if (!ve) continue;
          const M = ve[0], w = ve[1], H = ke == null ? void 0 : ke.get(k), xe = (d) => Number.isFinite(d) ? d : 0, Ke = H ? xe(H[0]) : 0, Ue = H ? xe(H[1]) : 0, Qe = H ? xe(H[2]) : 0, Be = M + Ke * a, Le = w + Ue * a, Ee = 0 + Qe * a, et = Ee - c, ge = (d) => [
            M + (Be - M) * d,
            w + (Le - w) * d,
            c + et * d
          ], [tt, nt, ot] = ge(0), [st, at, lt] = ge(0.05), be = [
            new x(tt, nt, ot),
            new x(st, at, lt)
          ];
          for (let d = 0; d <= he; d++) {
            const rt = 0.05 + 0.9 * (d / he), [it, mt, dt] = ge(rt), Ne = 2 * Math.PI * Ve * (d / he);
            be.push(new x(it + m * Math.cos(Ne), mt + m * Math.sin(Ne), dt));
          }
          be.push(new x(Be, Le, Ee)), P.push(new Pe(new He().setFromPoints(be), bt));
          const p = N, ct = [
            new x(M - p, w - p, c),
            new x(M + p, w - p, c),
            new x(M + p, w + p, c),
            new x(M - p, w + p, c),
            new x(M - p, w - p, c)
          ];
          P.push(new Pe(new He().setFromPoints(ct), Mt));
        }
        return P;
      }, Je = Ce.v;
      W ? ut.derive(() => {
        if (Ce.v !== Je) return;
        const e = W.deformedShape.val, t = W.deformScale.val, n = W.displayScale.val;
        o.objects3D.val = _e(e, t, n);
      }) : o.objects3D.val = _e(true, 1, 1);
    },
    runModal(s, o, z) {
      var _a, _b;
      const y = o.nodes.val, _ = o.elements.val, S = o.nodeInputs.val, g = o.elementInputs.val;
      if (!(!y.length || !_.length || !((_a = g.densities) == null ? void 0 : _a.size))) try {
        const b = ft(y, _, S, g, 12);
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
  Bt as z
};
