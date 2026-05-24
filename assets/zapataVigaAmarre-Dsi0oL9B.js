import { _ as be } from "./preload-helper-DrUBW0xl.js";
import { L as Kt, V as F, a as jt, B as Xt } from "./Text-CEhsqBUu.js";
import { v as ye } from "./theme-2eEBQPmF.js";
import { a as ke } from "./analyze-DOGq34F5.js";
import { m as ze, d as we, __tla as __tla_0 } from "./didacticCpp-CT_TM4EM.js";
import { a as Dt } from "./exampleVersion-D1A_5i59.js";
let He;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let Y, W, Lt, ut, Ce, Ie, qt, Le, Se, Ne;
  Y = 25e6;
  W = 0.2;
  Lt = Y / (2 * (1 + W));
  ut = 24;
  Ce = 0.2;
  Ie = 0.035;
  qt = 8;
  Le = 0.04;
  Se = new Kt({
    color: 16711731,
    linewidth: 2
  });
  Ne = new Kt({
    color: 52224,
    linewidth: 2
  });
  He = {
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
      const f = o.Lz1, u = o.Bz1, p = o.Lv, M = o.Bv, _ = o.Hv, b = o.Lz2, z = o.Bz2, E = o.tz, i = o.bc, O = o.Hp, w = 9.80665, Q = o.P1 * w, tt = o.P2 * w, P = o.ks, et = (o.M1x ?? 0) * w, nt = (o.M1y ?? 0) * w, pt = (o.M2x ?? 0) * w, ht = (o.M2y ?? 0) * w, A = Math.round(o.nSubX), H = Math.round(o.nSubY), J = (u - z) / 2, T = i / 2, C = u / 2, ot = f + p + b / 2, st = z / 2 + J, St = C;
      function at(t, e, n, l) {
        const a = [
          t,
          ...n.filter((r) => r > t && r < e),
          e
        ].sort((r, m) => r - m), d = [];
        for (let r = 0; r < a.length - 1; r++) {
          const m = a[r], x = a[r + 1], S = Math.max(1, Math.round((x - m) / ((e - t) / l)));
          for (let v = 0; v < S; v++) d.push(m + (x - m) * v / S);
        }
        return d.push(a[a.length - 1]), d;
      }
      const G = at(0, f, [
        T
      ], A), V = at(0, u, [
        C,
        St
      ], H), Z = at(f + p, f + p + b, [
        ot
      ], A), j = at(J, J + z, [
        st,
        St
      ], H), xt = [], y = [], Yt = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), K = (t, e, n) => {
        const l = `${t.toFixed(4)},${e.toFixed(4)},${n.toFixed(4)}`;
        if (Mt.has(l)) return Mt.get(l);
        const a = xt.length;
        return xt.push([
          t,
          e,
          n
        ]), Mt.set(l, a), a;
      }, h = [];
      for (let t = 0; t < V.length; t++) {
        const e = [];
        for (let n = 0; n < G.length; n++) e.push(K(G[n], V[t], 0));
        h.push(e);
      }
      for (let t = 0; t < V.length - 1; t++) for (let e = 0; e < G.length - 1; e++) {
        const n = y.length;
        y.push([
          h[t][e],
          h[t][e + 1],
          h[t + 1][e + 1],
          h[t + 1][e]
        ]), gt.set(n, E), X.set(n, Y), D.set(n, W), q.set(n, ut);
      }
      const I = [];
      for (let t = 0; t < j.length; t++) {
        const e = [];
        for (let n = 0; n < Z.length; n++) e.push(K(Z[n], j[t], 0));
        I.push(e);
      }
      for (let t = 0; t < j.length - 1; t++) for (let e = 0; e < Z.length - 1; e++) {
        const n = y.length;
        y.push([
          I[t][e],
          I[t][e + 1],
          I[t + 1][e + 1],
          I[t + 1][e]
        ]), gt.set(n, E), X.set(n, Y), D.set(n, W), q.set(n, ut);
      }
      const _t = K(T, C, 0), Nt = K(T, C, O), bt = K(ot, st, 0), Bt = K(ot, st, O);
      for (const [t, e] of [
        [
          _t,
          Nt
        ],
        [
          bt,
          Bt
        ]
      ]) {
        const n = y.length;
        y.push([
          t,
          e
        ]), X.set(n, Y), D.set(n, W), dt.set(n, Lt), lt.set(n, i * i), ct.set(n, i ** 4 / 12), it.set(n, i ** 4 / 12), rt.set(n, 0.14 * i ** 4), q.set(n, ut), mt.set(n, {
          type: "rect",
          b: i,
          h: i
        });
      }
      const $ = y.length;
      y.push([
        _t,
        bt
      ]), X.set($, Y), D.set($, W), dt.set($, Lt), lt.set($, M * _), ct.set($, M * _ ** 3 / 12), it.set($, _ * M ** 3 / 12), rt.set($, 0.28 * M * _ ** 3), q.set($, ut), mt.set($, {
        type: "rect",
        b: M,
        h: _
      });
      const Et = 0.5, Wt = Y * 1e3, Jt = Lt * 1e3, Ut = i * i * 100, Pt = i ** 4 / 12 * 100, Qt = 0.14 * i ** 4 * 100;
      function $t(t, e, n, l, a, d) {
        let r = 0;
        for (let m = 0; m < a.length; m++) for (let x = 0; x < l.length; x++) {
          const S = l[x], v = a[m];
          if (Math.abs(S - e) > Et / 2 + 1e-6 || Math.abs(v - n) > Et / 2 + 1e-6) continue;
          const R = d[m][x];
          if (R === t) continue;
          const c = y.length;
          y.push([
            t,
            R
          ]), X.set(c, Wt), D.set(c, W), dt.set(c, Jt), lt.set(c, Ut), ct.set(c, Pt), it.set(c, Pt), rt.set(c, Qt), q.set(c, 0), mt.set(c, {
            type: "rect",
            b: i,
            h: i
          }), r++;
        }
        return r;
      }
      const te = $t(_t, T, C, G, V, h), ee = $t(bt, ot, st, Z, j, I);
      console.log(`[Rigid links] Col1:${te} Col2:${ee}  (viga col-a-col directa nCol1Bot\u2194nCol2Bot)`), vt.set(Nt, [
        0,
        0,
        -Q,
        et,
        nt,
        0
      ]), vt.set(Bt, [
        0,
        0,
        -tt,
        pt,
        ht,
        0
      ]);
      const Ft = f / A, Rt = u / H, ne = b / A, oe = z / H, Ot = 0.5, L = [], U = [];
      for (let t = 0; t < V.length; t++) for (let e = 0; e < G.length; e++) {
        const n = Ft * Rt * (e === 0 || e === G.length - 1 ? 0.5 : 1) * (t === 0 || t === V.length - 1 ? 0.5 : 1), l = P * n, a = P * n * Ot;
        L.push({
          node: h[t][e],
          dof: 0,
          k: a
        }), L.push({
          node: h[t][e],
          dof: 1,
          k: a
        }), L.push({
          node: h[t][e],
          dof: 2,
          k: l
        }), U.push(h[t][e]);
      }
      for (let t = 0; t < j.length; t++) for (let e = 0; e < Z.length; e++) {
        const n = ne * oe * (e === 0 || e === Z.length - 1 ? 0.5 : 1) * (t === 0 || t === j.length - 1 ? 0.5 : 1), l = P * n, a = P * n * Ot;
        L.push({
          node: I[t][e],
          dof: 0,
          k: a
        }), L.push({
          node: I[t][e],
          dof: 1,
          k: a
        }), L.push({
          node: I[t][e],
          dof: 2,
          k: l
        }), U.push(I[t][e]);
      }
      const yt = P * Ft * Rt * 1e-4;
      L.push({
        node: h[0][0],
        dof: 3,
        k: yt
      }), L.push({
        node: h[0][0],
        dof: 4,
        k: yt
      }), L.push({
        node: h[0][0],
        dof: 5,
        k: yt
      }), s.nodes.val = xt.map((t) => [
        t[0],
        t[1],
        t[2]
      ]), s.elements.val = y, s.nodeInputs.val = {
        supports: Yt,
        loads: vt
      }, s.elementInputs.val = {
        elasticities: X,
        poissonsRatios: D,
        areas: lt,
        momentsOfInertiaZ: ct,
        momentsOfInertiaY: it,
        torsionalConstants: rt,
        shearModuli: dt,
        thicknesses: gt,
        densities: q,
        sectionShapes: mt
      };
      try {
        s.deformOutputs.val = we(s.nodes.val, s.elements.val, s.nodeInputs.val, s.elementInputs.val, L);
        const t = ke(s.nodes.val, s.elements.val, s.elementInputs.val, s.deformOutputs.val), e = s.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        let l = 0, a = 0;
        s.elements.rawVal.forEach((x, S) => {
          if (x.length !== 4) return;
          const v = [];
          for (const R of x) {
            const c = e == null ? void 0 : e.get(R), N = c ? c[2] : 0, g = P * N;
            v.push(g), g < l && (l = g), g > a && (a = g);
          }
          n.set(S, v);
        }), t.pressure = n;
        const d = 9.80665, r = Math.min(-12 * d, a), m = Math.max(-26 * d, l);
        t.colorMapRanges = {
          pressure: [
            r,
            m
          ]
        }, s.analyzeOutputs.val = t;
      } catch (t) {
        console.error("Solver error:", t);
      }
      const At = s.deformOutputs.rawVal.deformations;
      let kt = 1e-9;
      for (const t of U) {
        const e = At == null ? void 0 : At.get(t);
        e && Number.isFinite(e[2]) && (kt = Math.max(kt, Math.abs(e[2])));
      }
      const se = new Set(U), zt = qt * 12, ft = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Ht = (t, e, n = 1) => {
        const l = t ? e : 0, d = -(kt * Math.max(l, 1) + Ce), r = n > 0 ? n : n < 0 ? -1 / n : 1, m = Ie * r, x = Le * r, S = [];
        for (const v of U) {
          if (!se.has(v)) continue;
          const R = s.nodes.rawVal[v];
          if (!R) continue;
          const c = R[0], N = R[1], g = At == null ? void 0 : At.get(v), wt = (k) => Number.isFinite(k) ? k : 0, le = g ? wt(g[0]) : 0, ce = g ? wt(g[1]) : 0, ie = g ? wt(g[2]) : 0, Tt = c + le * l, Gt = N + ce * l, Vt = 0 + ie * l, re = Vt - d, Ct = (k) => [
            c + (Tt - c) * k,
            N + (Gt - N) * k,
            d + re * k
          ], [de, me, fe] = Ct(0), [ue, pe, he] = Ct(0.05), It = [
            new F(de, me, fe),
            new F(ue, pe, he)
          ];
          for (let k = 0; k <= zt; k++) {
            const ve = 0.05 + 0.9 * (k / zt), [ge, Me, _e] = Ct(ve), Zt = 2 * Math.PI * qt * (k / zt);
            It.push(new F(ge + m * Math.cos(Zt), Me + m * Math.sin(Zt), _e));
          }
          It.push(new F(Tt, Gt, Vt)), S.push(new jt(new Xt().setFromPoints(It), Se));
          const B = x, xe = [
            new F(c - B, N - B, d),
            new F(c + B, N - B, d),
            new F(c + B, N + B, d),
            new F(c - B, N + B, d),
            new F(c - B, N - B, d)
          ];
          S.push(new jt(new Xt().setFromPoints(xe), Ne));
        }
        return S;
      }, ae = Dt.v;
      ft ? ye.derive(() => {
        if (Dt.v !== ae) return;
        const t = ft.deformedShape.val, e = ft.deformScale.val, n = ft.displayScale.val;
        s.objects3D.val = Ht(t, e, n);
      }) : s.objects3D.val = Ht(true, 1, 1);
    },
    runModal(o, s, f) {
      var _a, _b;
      const u = s.nodes.val, p = s.elements.val, M = s.nodeInputs.val, _ = s.elementInputs.val;
      if (!(!u.length || !p.length || !((_a = _.densities) == null ? void 0 : _a.size))) try {
        const b = ze(u, p, M, _, 12);
        f.render(b, {
          title: `Zapata + Viga amarre Lv=${o.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${o.Bv}\xD7${o.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = b.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (b) {
        console.warn("Modal zapata-viga error:", b.message);
      }
    },
    async exportF2k(o) {
      const { downloadEdificioCimentacionF2k: s } = await be(async () => {
        const { downloadEdificioCimentacionF2k: C } = await import("./f2kCimentacionCompleta-DNZcSTHO.js");
        return {
          downloadEdificioCimentacionF2k: C
        };
      }, []), f = 9.80665, u = o.Lz1, p = o.Bz1, M = o.Lv, _ = o.Bv, b = o.Hv, z = o.Lz2, E = o.Bz2, i = o.tz, O = o.bc, w = o.ks, Q = (p - E) / 2, tt = O / 2, P = p / 2, et = u + M + z / 2, nt = E / 2 + Q, pt = u / 2, ht = p / 2, A = u + M + z / 2, H = Q + E / 2, J = [
        {
          xC: pt,
          yC: ht,
          xCol: tt,
          yCol: P,
          Lz: u,
          Bz: p,
          tz: i,
          bc: O,
          P_dead_kN: (o.P1 ?? 0) * f,
          Mx_dead_kNm: (o.M1x ?? 0) * f,
          My_dead_kNm: (o.M1y ?? 0) * f,
          label: 1
        },
        {
          xC: A,
          yC: H,
          xCol: et,
          yCol: nt,
          Lz: z,
          Bz: E,
          tz: i,
          bc: O,
          P_dead_kN: (o.P2 ?? 0) * f,
          Mx_dead_kNm: (o.M2x ?? 0) * f,
          My_dead_kNm: (o.M2y ?? 0) * f,
          label: 2
        }
      ], T = [
        {
          x1: tt,
          y1: P,
          x2: et,
          y2: nt,
          h: b,
          b: _,
          z: 0
        }
      ];
      try {
        s({
          zapatas: J,
          vigasAmarre: T,
          ks_kNm3: w,
          Z: 0
        }, `ZapataVigaAmarre_Hekatan_${Date.now()}.f2k`), alert(`\u2705 F2K exportado con 2 zapatas + 1 viga de amarre:
\u2022 Z1 ${u}\xD7${p} m, P=${o.P1} tonf, Mx=${o.M1x}, My=${o.M1y} tonf\xB7m
\u2022 Z2 ${z}\xD7${E} m, P=${o.P2} tonf, Mx=${o.M2x}, My=${o.M2y} tonf\xB7m
\u2022 Viga amarre ${_}\xD7${b} m, Lv=${M} m
\u2022 ks = ${w.toFixed(0)} kN/m\xB3

Abrilo en SAFE 20.x: File \u2192 Import \u2192 SAFE Text File (.f2k)`), console.log(`[F2K Zapata+Viga] exportado: Z1=${u}\xD7${p}, Z2=${z}\xD7${E}, ks=${w} kN/m\xB3`);
      } catch (C) {
        alert(`\u274C Error exportando F2K: ${C.message}`), console.error(C);
      }
    }
  };
});
export {
  __tla,
  He as z
};
