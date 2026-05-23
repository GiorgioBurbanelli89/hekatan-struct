import { L as Zt, V as k, a as Ft, B as At } from "./Text-CEhsqBUu.js";
import { v as ke } from "./theme-2eEBQPmF.js";
import { a as Ie } from "./analyze-CRXZq0x4.js";
import { m as Se, d as Le, __tla as __tla_0 } from "./didacticCpp-9rTpExtC.js";
import { a as $t } from "./exampleVersion-D1A_5i59.js";
let Ae;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let Z, X, Mt, ct, Ee, Be, jt, Ne, Re, Ve;
  Z = 25e6;
  X = 0.2;
  Mt = Z / (2 * (1 + X));
  ct = 24;
  Ee = 0.2;
  Be = 0.035;
  jt = 8;
  Ne = 0.04;
  Re = new Zt({
    color: 16711731,
    linewidth: 2
  });
  Ve = new Zt({
    color: 52224,
    linewidth: 2
  });
  Ae = {
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
    build(o, s) {
      var _a;
      const g = o.Lz1, N = o.Bz1, I = o.Lv, R = o.Bv, S = o.Hv, L = o.Lz2, Y = o.Bz2, bt = o.tz, u = o.bc, wt = o.Hp, O = 9.80665, Xt = o.P1 * O, qt = o.P2 * O, T = o.ks, Yt = (o.M1x ?? 0) * O, Dt = (o.M1y ?? 0) * O, Wt = (o.M2x ?? 0) * O, Jt = (o.M2y ?? 0) * O, D = Math.round(o.nSubX), W = Math.round(o.nSubY), it = (N - Y) / 2, J = 0.2, V = N / 2, K = g + I + L / 2, F = Y / 2 + it, yt = V;
      function U(t, e, n, l) {
        const a = [
          t,
          ...n.filter((i) => i > t && i < e),
          e
        ].sort((i, d) => i - d), r = [];
        for (let i = 0; i < a.length - 1; i++) {
          const d = a[i], f = a[i + 1], w = Math.max(1, Math.round((f - d) / ((e - t) / l)));
          for (let p = 0; p < w; p++) r.push(d + (f - d) * p / w);
        }
        return r.push(a[a.length - 1]), r;
      }
      const P = U(0, g, [
        J
      ], D), C = U(0, N, [
        V,
        yt
      ], W), G = U(g + I, g + I + L, [
        K
      ], D), H = U(it, it + Y, [
        F,
        yt
      ], W), rt = [], v = [], Kt = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), E = (t, e, n) => {
        const l = `${t.toFixed(4)},${e.toFixed(4)},${n.toFixed(4)}`;
        if (ut.has(l)) return ut.get(l);
        const a = rt.length;
        return rt.push([
          t,
          e,
          n
        ]), ut.set(l, a), a;
      }, m = [];
      for (let t = 0; t < C.length; t++) {
        const e = [];
        for (let n = 0; n < P.length; n++) e.push(E(P[n], C[t], 0));
        m.push(e);
      }
      for (let t = 0; t < C.length - 1; t++) for (let e = 0; e < P.length - 1; e++) {
        const n = v.length;
        v.push([
          m[t][e],
          m[t][e + 1],
          m[t + 1][e + 1],
          m[t + 1][e]
        ]), mt.set(n, bt), A.set(n, Z), $.set(n, X), j.set(n, ct);
      }
      const x = [];
      for (let t = 0; t < H.length; t++) {
        const e = [];
        for (let n = 0; n < G.length; n++) e.push(E(G[n], H[t], 0));
        x.push(e);
      }
      for (let t = 0; t < H.length - 1; t++) for (let e = 0; e < G.length - 1; e++) {
        const n = v.length;
        v.push([
          x[t][e],
          x[t][e + 1],
          x[t + 1][e + 1],
          x[t + 1][e]
        ]), mt.set(n, bt), A.set(n, Z), $.set(n, X), j.set(n, ct);
      }
      const zt = E(J, V, 0), _t = E(J, V, wt), kt = E(K, F, 0), It = E(K, F, wt);
      for (const [t, e] of [
        [
          zt,
          _t
        ],
        [
          kt,
          It
        ]
      ]) {
        const n = v.length;
        v.push([
          t,
          e
        ]), A.set(n, Z), $.set(n, X), st.set(n, Mt), Q.set(n, u * u), tt.set(n, u ** 4 / 12), et.set(n, u ** 4 / 12), nt.set(n, 0.14 * u ** 4), j.set(n, ct), ot.set(n, {
          type: "rect",
          b: u,
          h: u
        });
      }
      const St = E(g, V, 0), Lt = E(g + I, F, 0), _ = v.length;
      v.push([
        St,
        Lt
      ]), A.set(_, Z), $.set(_, X), st.set(_, Mt), Q.set(_, R * S), tt.set(_, R * S ** 3 / 12), et.set(_, S * R ** 3 / 12), nt.set(_, 0.28 * R * S ** 3), j.set(_, ct), ot.set(_, {
        type: "rect",
        b: R,
        h: S
      });
      const Et = 0.5, Ut = Z * 1e3, Qt = Mt * 1e3, te = u * u * 100, Bt = u ** 4 / 12 * 100, ee = 0.14 * u ** 4 * 100;
      function at(t, e, n, l, a, r) {
        let i = 0;
        for (let d = 0; d < a.length; d++) for (let f = 0; f < l.length; f++) {
          const w = l[f], p = a[d];
          if (Math.abs(w - e) > Et / 2 + 1e-6 || Math.abs(p - n) > Et / 2 + 1e-6) continue;
          const B = r[d][f];
          if (B === t) continue;
          const c = v.length;
          v.push([
            t,
            B
          ]), A.set(c, Ut), $.set(c, X), st.set(c, Qt), Q.set(c, te), tt.set(c, Bt), et.set(c, Bt), nt.set(c, ee), j.set(c, 0), ot.set(c, {
            type: "rect",
            b: u,
            h: u
          }), i++;
        }
        return i;
      }
      const ne = at(zt, J, V, P, C, m), se = at(kt, K, F, G, H, x), oe = at(St, g, V, P, C, m), ae = at(Lt, g + I, F, G, H, x);
      console.log(`[Rigid links] Col1:${ne} Col2:${se} VigaZ1:${oe} VigaZ2:${ae}`), dt.set(_t, [
        0,
        0,
        -Xt,
        Yt,
        Dt,
        0
      ]), dt.set(It, [
        0,
        0,
        -qt,
        Wt,
        Jt,
        0
      ]);
      const Nt = g / D, Rt = N / W, le = L / D, ce = Y / W, Vt = 0.5, b = [], q = [];
      for (let t = 0; t < C.length; t++) for (let e = 0; e < P.length; e++) {
        const n = Nt * Rt * (e === 0 || e === P.length - 1 ? 0.5 : 1) * (t === 0 || t === C.length - 1 ? 0.5 : 1), l = T * n, a = T * n * Vt;
        b.push({
          node: m[t][e],
          dof: 0,
          k: a
        }), b.push({
          node: m[t][e],
          dof: 1,
          k: a
        }), b.push({
          node: m[t][e],
          dof: 2,
          k: l
        }), q.push(m[t][e]);
      }
      for (let t = 0; t < H.length; t++) for (let e = 0; e < G.length; e++) {
        const n = le * ce * (e === 0 || e === G.length - 1 ? 0.5 : 1) * (t === 0 || t === H.length - 1 ? 0.5 : 1), l = T * n, a = T * n * Vt;
        b.push({
          node: x[t][e],
          dof: 0,
          k: a
        }), b.push({
          node: x[t][e],
          dof: 1,
          k: a
        }), b.push({
          node: x[t][e],
          dof: 2,
          k: l
        }), q.push(x[t][e]);
      }
      const ft = T * Nt * Rt * 1e-4;
      b.push({
        node: m[0][0],
        dof: 3,
        k: ft
      }), b.push({
        node: m[0][0],
        dof: 4,
        k: ft
      }), b.push({
        node: m[0][0],
        dof: 5,
        k: ft
      }), s.nodes.val = rt.map((t) => [
        t[0],
        t[1],
        t[2]
      ]), s.elements.val = v, s.nodeInputs.val = {
        supports: Kt,
        loads: dt
      }, s.elementInputs.val = {
        elasticities: A,
        poissonsRatios: $,
        areas: Q,
        momentsOfInertiaZ: tt,
        momentsOfInertiaY: et,
        torsionalConstants: nt,
        shearModuli: st,
        thicknesses: mt,
        densities: j,
        sectionShapes: ot
      };
      try {
        s.deformOutputs.val = Le(s.nodes.val, s.elements.val, s.nodeInputs.val, s.elementInputs.val, b);
        const t = Ie(s.nodes.val, s.elements.val, s.elementInputs.val, s.deformOutputs.val), e = s.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        let l = 0, a = 0;
        s.elements.rawVal.forEach((f, w) => {
          if (f.length !== 4) return;
          const p = [];
          for (const B of f) {
            const c = e == null ? void 0 : e.get(B), y = c ? c[2] : 0, h = T * y;
            p.push(h), h < l && (l = h), h > a && (a = h);
          }
          n.set(w, p);
        }), t.pressure = n;
        const r = 9.80665, i = Math.min(-12 * r, a), d = Math.max(-26 * r, l);
        t.colorMapRanges = {
          pressure: [
            i,
            d
          ]
        }, s.analyzeOutputs.val = t;
      } catch (t) {
        console.error("Solver error:", t);
      }
      const Pt = s.deformOutputs.rawVal.deformations;
      let pt = 1e-9;
      for (const t of q) {
        const e = Pt == null ? void 0 : Pt.get(t);
        e && Number.isFinite(e[2]) && (pt = Math.max(pt, Math.abs(e[2])));
      }
      const ie = new Set(q), ht = jt * 12, lt = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Ct = (t, e, n = 1) => {
        const l = t ? e : 0, r = -(pt * Math.max(l, 1) + Ee), i = n > 0 ? n : n < 0 ? -1 / n : 1, d = Be * i, f = Ne * i, w = [];
        for (const p of q) {
          if (!ie.has(p)) continue;
          const B = s.nodes.rawVal[p];
          if (!B) continue;
          const c = B[0], y = B[1], h = Pt == null ? void 0 : Pt.get(p), gt = (M) => Number.isFinite(M) ? M : 0, de = h ? gt(h[0]) : 0, me = h ? gt(h[1]) : 0, ue = h ? gt(h[2]) : 0, Gt = c + de * l, Ht = y + me * l, Ot = 0 + ue * l, fe = Ot - r, vt = (M) => [
            c + (Gt - c) * M,
            y + (Ht - y) * M,
            r + fe * M
          ], [pe, he, ge] = vt(0), [ve, xe, Me] = vt(0.05), xt = [
            new k(pe, he, ge),
            new k(ve, xe, Me)
          ];
          for (let M = 0; M <= ht; M++) {
            const we = 0.05 + 0.9 * (M / ht), [ye, ze, _e] = vt(we), Tt = 2 * Math.PI * jt * (M / ht);
            xt.push(new k(ye + d * Math.cos(Tt), ze + d * Math.sin(Tt), _e));
          }
          xt.push(new k(Gt, Ht, Ot)), w.push(new Ft(new At().setFromPoints(xt), Re));
          const z = f, be = [
            new k(c - z, y - z, r),
            new k(c + z, y - z, r),
            new k(c + z, y + z, r),
            new k(c - z, y + z, r),
            new k(c - z, y - z, r)
          ];
          w.push(new Ft(new At().setFromPoints(be), Ve));
        }
        return w;
      }, re = $t.v;
      lt ? ke.derive(() => {
        if ($t.v !== re) return;
        const t = lt.deformedShape.val, e = lt.deformScale.val, n = lt.displayScale.val;
        s.objects3D.val = Ct(t, e, n);
      }) : s.objects3D.val = Ct(true, 1, 1);
    },
    runModal(o, s, g) {
      var _a, _b;
      const N = s.nodes.val, I = s.elements.val, R = s.nodeInputs.val, S = s.elementInputs.val;
      if (!(!N.length || !I.length || !((_a = S.densities) == null ? void 0 : _a.size))) try {
        const L = Se(N, I, R, S, 12);
        g.render(L, {
          title: `Zapata + Viga amarre Lv=${o.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${o.Bv}\xD7${o.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = L.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (L) {
        console.warn("Modal zapata-viga error:", L.message);
      }
    }
  };
});
export {
  __tla,
  Ae as z
};
