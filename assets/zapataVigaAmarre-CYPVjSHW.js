import { L as Oe, V as v, a as Be, B as Ne } from "./Text-BmY6zyQy.js";
import { v as ct } from "./theme-2eEBQPmF.js";
import { a as rt } from "./analyze-DNPn2SjO.js";
import { m as it, d as mt, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
import { a as Pe } from "./exampleVersion-D1A_5i59.js";
let St;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let Y, D, dt, ce, ut, ft, He, pt, ht, vt;
  Y = 25e6;
  D = 0.2;
  dt = Y / (2 * (1 + D));
  ce = 24;
  ut = 0.2;
  ft = 0.035;
  He = 8;
  pt = 0.04;
  ht = new Oe({
    color: 16711731,
    linewidth: 2
  });
  vt = new Oe({
    color: 52224,
    linewidth: 2
  });
  St = {
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
      const w = s.Lz1, z = s.Bz1, k = s.Lv, y = s.Bv, x = s.Hv, g = s.Lz2, A = s.Bz2, re = s.tz;
      s.bc, s.Hp;
      const _ = 9.80665, Ve = s.P1 * _, Ce = s.P2 * _, L = s.ks, Ae = (s.M1x ?? 0) * _, Ge = (s.M1y ?? 0) * _, Re = (s.M2x ?? 0) * _, Fe = (s.M2y ?? 0) * _, G = Math.round(s.nSubX), R = Math.round(s.nSubY), q = (z - A) / 2, ie = 0.2, W = z / 2, me = w + k + g / 2, de = A / 2 + q, ue = W;
      function F(e, t, n, a) {
        const l = [
          e,
          ...n.filter((r) => r > e && r < t),
          t
        ].sort((r, m) => r - m), c = [];
        for (let r = 0; r < l.length - 1; r++) {
          const m = l[r], E = l[r + 1], B = Math.max(1, Math.round((E - m) / ((t - e) / a)));
          for (let I = 0; I < B; I++) c.push(m + (E - m) * I / B);
        }
        return c.push(l[l.length - 1]), c;
      }
      const P = F(0, w, [
        ie
      ], G), H = F(0, z, [
        W,
        ue
      ], R), O = F(w + k, w + k + g, [
        me
      ], G), V = F(q, q + A, [
        de,
        ue
      ], R), J = [], S = [], Te = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), Z = (e, t, n) => {
        const a = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (Q.has(a)) return Q.get(a);
        const l = J.length;
        return J.push([
          e,
          t,
          n
        ]), Q.set(a, l), l;
      }, i = [];
      for (let e = 0; e < H.length; e++) {
        const t = [];
        for (let n = 0; n < P.length; n++) t.push(Z(P[n], H[e], 0));
        i.push(t);
      }
      for (let e = 0; e < H.length - 1; e++) for (let t = 0; t < P.length - 1; t++) {
        const n = S.length;
        S.push([
          i[e][t],
          i[e][t + 1],
          i[e + 1][t + 1],
          i[e + 1][t]
        ]), U.set(n, re), T.set(n, Y), j.set(n, D), X.set(n, ce);
      }
      const p = [];
      for (let e = 0; e < V.length; e++) {
        const t = [];
        for (let n = 0; n < O.length; n++) t.push(Z(O[n], V[e], 0));
        p.push(t);
      }
      for (let e = 0; e < V.length - 1; e++) for (let t = 0; t < O.length - 1; t++) {
        const n = S.length;
        S.push([
          p[e][t],
          p[e][t + 1],
          p[e + 1][t + 1],
          p[e + 1][t]
        ]), U.set(n, re), T.set(n, Y), j.set(n, D), X.set(n, ce);
      }
      const Me = Z(ie, W, 0), be = Z(me, de, 0), h = S.length;
      S.push([
        Me,
        be
      ]), T.set(h, Y), j.set(h, D), xe.set(h, dt), fe.set(h, y * x), pe.set(h, y * x ** 3 / 12), he.set(h, x * y ** 3 / 12), ve.set(h, 0.28 * y * x ** 3), X.set(h, ce), ge.set(h, {
        type: "rect",
        b: y,
        h: x
      }), K.set(Me, [
        0,
        0,
        -Ve,
        Ae,
        Ge,
        0
      ]), K.set(be, [
        0,
        0,
        -Ce,
        Re,
        Fe,
        0
      ]);
      const we = w / G, ze = z / R, je = g / G, Xe = A / R, ye = 0.5, u = [], C = [];
      for (let e = 0; e < H.length; e++) for (let t = 0; t < P.length; t++) {
        const n = we * ze * (t === 0 || t === P.length - 1 ? 0.5 : 1) * (e === 0 || e === H.length - 1 ? 0.5 : 1), a = L * n, l = L * n * ye;
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
        }), C.push(i[e][t]);
      }
      for (let e = 0; e < V.length; e++) for (let t = 0; t < O.length; t++) {
        const n = je * Xe * (t === 0 || t === O.length - 1 ? 0.5 : 1) * (e === 0 || e === V.length - 1 ? 0.5 : 1), a = L * n, l = L * n * ye;
        u.push({
          node: p[e][t],
          dof: 0,
          k: l
        }), u.push({
          node: p[e][t],
          dof: 1,
          k: l
        }), u.push({
          node: p[e][t],
          dof: 2,
          k: a
        }), C.push(p[e][t]);
      }
      const ee = L * we * ze * 1e-4;
      u.push({
        node: i[0][0],
        dof: 3,
        k: ee
      }), u.push({
        node: i[0][0],
        dof: 4,
        k: ee
      }), u.push({
        node: i[0][0],
        dof: 5,
        k: ee
      }), o.nodes.val = J.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), o.elements.val = S, o.nodeInputs.val = {
        supports: Te,
        loads: K
      }, o.elementInputs.val = {
        elasticities: T,
        poissonsRatios: j,
        areas: fe,
        momentsOfInertiaZ: pe,
        momentsOfInertiaY: he,
        torsionalConstants: ve,
        shearModuli: xe,
        thicknesses: U,
        densities: X,
        sectionShapes: ge
      };
      try {
        o.deformOutputs.val = mt(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, u);
        const e = rt(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), t = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        o.elements.rawVal.forEach((a, l) => {
          if (a.length !== 4) return;
          const c = [];
          for (const r of a) {
            const m = t == null ? void 0 : t.get(r), E = m ? m[2] : 0;
            c.push(-L * E);
          }
          n.set(l, c);
        }), e.pressure = n, o.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const Se = o.deformOutputs.rawVal.deformations;
      let te = 1e-9;
      for (const e of C) {
        const t = Se == null ? void 0 : Se.get(e);
        t && Number.isFinite(t[2]) && (te = Math.max(te, Math.abs(t[2])));
      }
      const Ze = new Set(C), ne = He * 12, $ = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Ie = (e, t, n = 1) => {
        const a = e ? t : 0, c = -(te * Math.max(a, 1) + ut), r = n > 0 ? n : n < 0 ? -1 / n : 1, m = ft * r, E = pt * r, B = [];
        for (const I of C) {
          if (!Ze.has(I)) continue;
          const oe = o.nodes.rawVal[I];
          if (!oe) continue;
          const M = oe[0], b = oe[1], N = Se == null ? void 0 : Se.get(I), se = (d) => Number.isFinite(d) ? d : 0, Ye = N ? se(N[0]) : 0, De = N ? se(N[1]) : 0, qe = N ? se(N[2]) : 0, ke = M + Ye * a, _e = b + De * a, Le = 0 + qe * a, We = Le - c, ae = (d) => [
            M + (ke - M) * d,
            b + (_e - b) * d,
            c + We * d
          ], [Je, Ke, Ue] = ae(0), [Qe, et, tt] = ae(0.05), le = [
            new v(Je, Ke, Ue),
            new v(Qe, et, tt)
          ];
          for (let d = 0; d <= ne; d++) {
            const ot = 0.05 + 0.9 * (d / ne), [st, at, lt] = ae(ot), Ee = 2 * Math.PI * He * (d / ne);
            le.push(new v(st + m * Math.cos(Ee), at + m * Math.sin(Ee), lt));
          }
          le.push(new v(ke, _e, Le)), B.push(new Be(new Ne().setFromPoints(le), ht));
          const f = E, nt = [
            new v(M - f, b - f, c),
            new v(M + f, b - f, c),
            new v(M + f, b + f, c),
            new v(M - f, b + f, c),
            new v(M - f, b - f, c)
          ];
          B.push(new Be(new Ne().setFromPoints(nt), vt));
        }
        return B;
      }, $e = Pe.v;
      $ ? ct.derive(() => {
        if (Pe.v !== $e) return;
        const e = $.deformedShape.val, t = $.deformScale.val, n = $.displayScale.val;
        o.objects3D.val = Ie(e, t, n);
      }) : o.objects3D.val = Ie(true, 1, 1);
    },
    runModal(s, o, w) {
      var _a, _b;
      const z = o.nodes.val, k = o.elements.val, y = o.nodeInputs.val, x = o.elementInputs.val;
      if (!(!z.length || !k.length || !((_a = x.densities) == null ? void 0 : _a.size))) try {
        const g = it(z, k, y, x, 12);
        w.render(g, {
          title: `Zapata + Viga amarre Lv=${s.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${s.Bv}\xD7${s.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = g.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (g) {
        console.warn("Modal zapata-viga error:", g.message);
      }
    }
  };
});
export {
  __tla,
  St as z
};
