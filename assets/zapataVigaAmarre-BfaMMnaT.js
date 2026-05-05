import { L as Oe, V as g, a as Ne, B as Pe } from "./Text-BE0JKoqd.js";
import { v as ut } from "./theme-2eEBQPmF.js";
import { a as pt } from "./analyze-DNPn2SjO.js";
import { m as ft, d as ht, __tla as __tla_0 } from "./didacticCpp-Ck1qafl6.js";
import { a as He } from "./exampleVersion-D1A_5i59.js";
let Bt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let j, X, Ce, J, vt, gt, Ve, xt, bt, Mt;
  j = 25e6;
  X = 0.2;
  Ce = j / (2 * (1 + X));
  J = 24;
  vt = 0.2;
  gt = 0.035;
  Ve = 8;
  xt = 0.04;
  bt = new Oe({
    color: 16711731,
    linewidth: 2
  });
  Mt = new Oe({
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
      const z = s.Lz1, k = s.Bz1, L = s.Lv, y = s.Bv, x = s.Hv, b = s.Lz2, K = s.Bz2, U = s.tz, S = s.bc, Ae = s.Hp, _ = 9.80665, Ge = s.P1 * _, Re = s.P2 * _, B = s.ks, Te = (s.M1x ?? 0) * _, Fe = (s.M1y ?? 0) * _, je = (s.M2x ?? 0) * _, Xe = (s.M2y ?? 0) * _, Z = Math.round(s.nSubX), $ = Math.round(s.nSubY), Q = 0.2, Y = k / 2, ee = z + L + b / 2, D = K / 2, Me = (Y + D) / 2;
      function q(e, t, n, a) {
        const l = [
          e,
          ...n.filter((r) => r > e && r < t),
          t
        ].sort((r, m) => r - m), c = [];
        for (let r = 0; r < l.length - 1; r++) {
          const m = l[r], N = l[r + 1], P = Math.max(1, Math.round((N - m) / ((t - e) / a)));
          for (let I = 0; I < P; I++) c.push(m + (N - m) * I / P);
        }
        return c.push(l[l.length - 1]), c;
      }
      const C = q(0, z, [
        Q
      ], Z), V = q(0, k, [
        Y,
        Me
      ], $), O = q(z + L, z + L + b, [
        ee
      ], Z), A = q(0, K, [
        D,
        Me
      ], $), te = [], f = [], Ze = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), E = (e, t, n) => {
        const a = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (me.has(a)) return me.get(a);
        const l = te.length;
        return te.push([
          e,
          t,
          n
        ]), me.set(a, l), l;
      }, i = [];
      for (let e = 0; e < V.length; e++) {
        const t = [];
        for (let n = 0; n < C.length; n++) t.push(E(C[n], V[e], 0));
        i.push(t);
      }
      for (let e = 0; e < V.length - 1; e++) for (let t = 0; t < C.length - 1; t++) {
        const n = f.length;
        f.push([
          i[e][t],
          i[e][t + 1],
          i[e + 1][t + 1],
          i[e + 1][t]
        ]), se.set(n, U), G.set(n, j), R.set(n, X), T.set(n, J);
      }
      const h = [];
      for (let e = 0; e < A.length; e++) {
        const t = [];
        for (let n = 0; n < O.length; n++) t.push(E(O[n], A[e], 0));
        h.push(t);
      }
      for (let e = 0; e < A.length - 1; e++) for (let t = 0; t < O.length - 1; t++) {
        const n = f.length;
        f.push([
          h[e][t],
          h[e][t + 1],
          h[e + 1][t + 1],
          h[e + 1][t]
        ]), se.set(n, U), G.set(n, j), R.set(n, X), T.set(n, J);
      }
      const we = Math.round(s.vigaLevel) === 0 ? U : Ae, $e = E(Q, Y, 0), de = E(Q, Y, we), Ye = E(ee, D, 0), ue = E(ee, D, we);
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
        ]), G.set(n, j), R.set(n, X), re.set(n, Ce), oe.set(n, S * S), ae.set(n, S ** 4 / 12), le.set(n, S ** 4 / 12), ce.set(n, 0.14 * S ** 4), T.set(n, J), ie.set(n, {
          type: "rect",
          b: S,
          h: S
        });
      }
      const v = f.length;
      f.push([
        de,
        ue
      ]), G.set(v, j), R.set(v, X), re.set(v, Ce), oe.set(v, y * x), ae.set(v, y * x ** 3 / 12), le.set(v, x * y ** 3 / 12), ce.set(v, 0.28 * y * x ** 3), T.set(v, J), ie.set(v, {
        type: "rect",
        b: y,
        h: x
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
      const ze = z / Z, ye = k / $, De = b / Z, qe = K / $, Se = 0.5, u = [], F = [];
      for (let e = 0; e < V.length; e++) for (let t = 0; t < C.length; t++) {
        const n = ze * ye * (t === 0 || t === C.length - 1 ? 0.5 : 1) * (e === 0 || e === V.length - 1 ? 0.5 : 1), a = B * n, l = B * n * Se;
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
        const n = De * qe * (t === 0 || t === O.length - 1 ? 0.5 : 1) * (e === 0 || e === A.length - 1 ? 0.5 : 1), a = B * n, l = B * n * Se;
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
      const pe = B * ze * ye * 1e-4;
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
            c.push(-B * N);
          }
          n.set(l, c);
        }), e.pressure = n, o.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const Ie = o.deformOutputs.rawVal.deformations;
      let fe = 1e-9;
      for (const e of F) {
        const t = Ie == null ? void 0 : Ie.get(e);
        t && Number.isFinite(t[2]) && (fe = Math.max(fe, Math.abs(t[2])));
      }
      const We = new Set(F), he = Ve * 12, W = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, ke = (e, t, n = 1) => {
        const a = e ? t : 0, c = -(fe * Math.max(a, 1) + vt), r = n > 0 ? n : n < 0 ? -1 / n : 1, m = gt * r, N = xt * r, P = [];
        for (const I of F) {
          if (!We.has(I)) continue;
          const ve = o.nodes.rawVal[I];
          if (!ve) continue;
          const M = ve[0], w = ve[1], H = Ie == null ? void 0 : Ie.get(I), ge = (d) => Number.isFinite(d) ? d : 0, Ke = H ? ge(H[0]) : 0, Ue = H ? ge(H[1]) : 0, Qe = H ? ge(H[2]) : 0, Le = M + Ke * a, _e = w + Ue * a, Be = 0 + Qe * a, et = Be - c, xe = (d) => [
            M + (Le - M) * d,
            w + (_e - w) * d,
            c + et * d
          ], [tt, nt, ot] = xe(0), [st, at, lt] = xe(0.05), be = [
            new g(tt, nt, ot),
            new g(st, at, lt)
          ];
          for (let d = 0; d <= he; d++) {
            const rt = 0.05 + 0.9 * (d / he), [it, mt, dt] = xe(rt), Ee = 2 * Math.PI * Ve * (d / he);
            be.push(new g(it + m * Math.cos(Ee), mt + m * Math.sin(Ee), dt));
          }
          be.push(new g(Le, _e, Be)), P.push(new Ne(new Pe().setFromPoints(be), bt));
          const p = N, ct = [
            new g(M - p, w - p, c),
            new g(M + p, w - p, c),
            new g(M + p, w + p, c),
            new g(M - p, w + p, c),
            new g(M - p, w - p, c)
          ];
          P.push(new Ne(new Pe().setFromPoints(ct), Mt));
        }
        return P;
      }, Je = He.v;
      W ? ut.derive(() => {
        if (He.v !== Je) return;
        const e = W.deformedShape.val, t = W.deformScale.val, n = W.displayScale.val;
        o.objects3D.val = ke(e, t, n);
      }) : o.objects3D.val = ke(true, 1, 1);
    },
    runModal(s, o, z) {
      var _a, _b;
      const k = o.nodes.val, L = o.elements.val, y = o.nodeInputs.val, x = o.elementInputs.val;
      if (!(!k.length || !L.length || !((_a = x.densities) == null ? void 0 : _a.size))) try {
        const b = ft(k, L, y, x, 12);
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
