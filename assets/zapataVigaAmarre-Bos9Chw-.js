import { _ as ye } from "./preload-helper-DrUBW0xl.js";
import { L as Yt, v as ke, V as $, a as Xt, B as Dt } from "./theme-CaJUXK9g.js";
import { a as ze } from "./analyze-DOGq34F5.js";
import { m as we, d as Ce, __tla as __tla_0 } from "./didacticCpp-CT_TM4EM.js";
import { a as qt } from "./exampleVersion-D1A_5i59.js";
let He;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let K, Y, Ct, ut, Ie, Se, Kt, Le, Ne, Be;
  K = 25e6;
  Y = 0.2;
  Ct = K / (2 * (1 + Y));
  ut = 24;
  Ie = 0.2;
  Se = 0.035;
  Kt = 8;
  Le = 0.04;
  Ne = new Yt({
    color: 16711731,
    linewidth: 2
  });
  Be = new Yt({
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
    build(o, a) {
      var _a;
      const f = o.Lz1, u = o.Bz1, p = o.Lv, M = o.Bv, _ = o.Hv, b = o.Lz2, w = o.Bz2, E = o.tz, i = o.bc, H = o.Hp, C = 9.80665, tt = o.P1 * C, et = o.P2 * C, P = o.ks, nt = (o.M1x ?? 0) * C, ot = (o.M1y ?? 0) * C, pt = (o.M2x ?? 0) * C, ht = (o.M2y ?? 0) * C, T = Math.round(o.nSubX), V = Math.round(o.nSubY), W = (u - w) / 2, G = i / 2, y = u / 2, st = f + p + b / 2, J = w / 2 + W, It = y;
      function at(t, e, n, s) {
        const l = [
          t,
          ...n.filter((r) => r > t && r < e),
          e
        ].sort((r, m) => r - m), d = [];
        for (let r = 0; r < l.length - 1; r++) {
          const m = l[r], x = l[r + 1], L = Math.max(1, Math.round((x - m) / ((e - t) / s)));
          for (let g = 0; g < L; g++) d.push(m + (x - m) * g / L);
        }
        return d.push(l[l.length - 1]), d;
      }
      const O = at(0, f, [
        G
      ], T), Z = at(0, u, [
        y,
        It
      ], V), A = at(f + p, f + p + b, [
        st
      ], T), j = at(W, W + w, [
        J,
        It
      ], V), xt = [], k = [], Wt = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), F = (t, e, n) => {
        const s = `${t.toFixed(4)},${e.toFixed(4)},${n.toFixed(4)}`;
        if (Mt.has(s)) return Mt.get(s);
        const l = xt.length;
        return xt.push([
          t,
          e,
          n
        ]), Mt.set(s, l), l;
      }, h = [];
      for (let t = 0; t < Z.length; t++) {
        const e = [];
        for (let n = 0; n < O.length; n++) e.push(F(O[n], Z[t], 0));
        h.push(e);
      }
      for (let t = 0; t < Z.length - 1; t++) for (let e = 0; e < O.length - 1; e++) {
        const n = k.length;
        k.push([
          h[t][e],
          h[t][e + 1],
          h[t + 1][e + 1],
          h[t + 1][e]
        ]), vt.set(n, E), X.set(n, K), D.set(n, Y), q.set(n, ut);
      }
      const I = [];
      for (let t = 0; t < j.length; t++) {
        const e = [];
        for (let n = 0; n < A.length; n++) e.push(F(A[n], j[t], 0));
        I.push(e);
      }
      for (let t = 0; t < j.length - 1; t++) for (let e = 0; e < A.length - 1; e++) {
        const n = k.length;
        k.push([
          I[t][e],
          I[t][e + 1],
          I[t + 1][e + 1],
          I[t + 1][e]
        ]), vt.set(n, E), X.set(n, K), D.set(n, Y), q.set(n, ut);
      }
      const St = F(G, y, 0), Lt = F(G, y, H), Nt = F(st, J, 0), Bt = F(st, J, H);
      for (const [t, e] of [
        [
          St,
          Lt
        ],
        [
          Nt,
          Bt
        ]
      ]) {
        const n = k.length;
        k.push([
          t,
          e
        ]), X.set(n, K), D.set(n, Y), dt.set(n, Ct), lt.set(n, i * i), ct.set(n, i ** 4 / 12), it.set(n, i ** 4 / 12), rt.set(n, 0.14 * i ** 4), q.set(n, ut), mt.set(n, {
          type: "rect",
          b: i,
          h: i
        });
      }
      const U = [];
      for (const t of O) U.push(F(t, y, 0));
      for (const t of A) U.push(F(t, J, 0));
      let Et = 0;
      for (let t = 0; t < U.length - 1; t++) {
        const e = U[t], n = U[t + 1];
        if (e === n) continue;
        const s = k.length;
        k.push([
          e,
          n
        ]), X.set(s, K), D.set(s, Y), dt.set(s, Ct), lt.set(s, M * _), ct.set(s, M * _ ** 3 / 12), it.set(s, _ * M ** 3 / 12), rt.set(s, 0.28 * M * _ ** 3), q.set(s, ut), mt.set(s, {
          type: "rect",
          b: M,
          h: _
        }), Et++;
      }
      console.log(`[viga amarre] ${Et} segmentos col-a-col compartiendo nodos con slab`);
      const Pt = 0.5, Jt = K * 1e3, Ut = Ct * 1e3, Qt = i * i * 100, $t = i ** 4 / 12 * 100, te = 0.14 * i ** 4 * 100;
      function Ft(t, e, n, s, l, d) {
        let r = 0;
        for (let m = 0; m < l.length; m++) for (let x = 0; x < s.length; x++) {
          const L = s[x], g = l[m];
          if (Math.abs(L - e) > Pt / 2 + 1e-6 || Math.abs(g - n) > Pt / 2 + 1e-6) continue;
          const R = d[m][x];
          if (R === t) continue;
          const c = k.length;
          k.push([
            t,
            R
          ]), X.set(c, Jt), D.set(c, Y), dt.set(c, Ut), lt.set(c, Qt), ct.set(c, $t), it.set(c, $t), rt.set(c, te), q.set(c, 0), mt.set(c, {
            type: "rect",
            b: i,
            h: i
          }), r++;
        }
        return r;
      }
      const ee = Ft(St, G, y, O, Z, h), ne = Ft(Nt, st, J, A, j, I);
      console.log(`[Rigid links] Col1:${ee} Col2:${ne}  (viga col-a-col directa nCol1Bot\u2194nCol2Bot)`), gt.set(Lt, [
        0,
        0,
        -tt,
        nt,
        ot,
        0
      ]), gt.set(Bt, [
        0,
        0,
        -et,
        pt,
        ht,
        0
      ]);
      const Rt = f / T, Ot = u / V, oe = b / T, se = w / V, At = 0.5, S = [], Q = [];
      for (let t = 0; t < Z.length; t++) for (let e = 0; e < O.length; e++) {
        const n = Rt * Ot * (e === 0 || e === O.length - 1 ? 0.5 : 1) * (t === 0 || t === Z.length - 1 ? 0.5 : 1), s = P * n, l = P * n * At;
        S.push({
          node: h[t][e],
          dof: 0,
          k: l
        }), S.push({
          node: h[t][e],
          dof: 1,
          k: l
        }), S.push({
          node: h[t][e],
          dof: 2,
          k: s
        }), Q.push(h[t][e]);
      }
      for (let t = 0; t < j.length; t++) for (let e = 0; e < A.length; e++) {
        const n = oe * se * (e === 0 || e === A.length - 1 ? 0.5 : 1) * (t === 0 || t === j.length - 1 ? 0.5 : 1), s = P * n, l = P * n * At;
        S.push({
          node: I[t][e],
          dof: 0,
          k: l
        }), S.push({
          node: I[t][e],
          dof: 1,
          k: l
        }), S.push({
          node: I[t][e],
          dof: 2,
          k: s
        }), Q.push(I[t][e]);
      }
      const _t = P * Rt * Ot * 1e-4;
      S.push({
        node: h[0][0],
        dof: 3,
        k: _t
      }), S.push({
        node: h[0][0],
        dof: 4,
        k: _t
      }), S.push({
        node: h[0][0],
        dof: 5,
        k: _t
      }), a.nodes.val = xt.map((t) => [
        t[0],
        t[1],
        t[2]
      ]), a.elements.val = k, a.nodeInputs.val = {
        supports: Wt,
        loads: gt
      }, a.elementInputs.val = {
        elasticities: X,
        poissonsRatios: D,
        areas: lt,
        momentsOfInertiaZ: ct,
        momentsOfInertiaY: it,
        torsionalConstants: rt,
        shearModuli: dt,
        thicknesses: vt,
        densities: q,
        sectionShapes: mt
      };
      try {
        a.deformOutputs.val = Ce(a.nodes.val, a.elements.val, a.nodeInputs.val, a.elementInputs.val, S);
        const t = ze(a.nodes.val, a.elements.val, a.elementInputs.val, a.deformOutputs.val), e = a.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        let s = 0, l = 0;
        a.elements.rawVal.forEach((x, L) => {
          if (x.length !== 4) return;
          const g = [];
          for (const R of x) {
            const c = e == null ? void 0 : e.get(R), N = c ? c[2] : 0, v = P * N;
            g.push(v), v < s && (s = v), v > l && (l = v);
          }
          n.set(L, g);
        }), t.pressure = n;
        const d = 9.80665, r = Math.min(-12 * d, l), m = Math.max(-26 * d, s);
        t.colorMapRanges = {
          pressure: [
            r,
            m
          ]
        }, a.analyzeOutputs.val = t;
      } catch (t) {
        console.error("Solver error:", t);
      }
      const Ht = a.deformOutputs.rawVal.deformations;
      let bt = 1e-9;
      for (const t of Q) {
        const e = Ht == null ? void 0 : Ht.get(t);
        e && Number.isFinite(e[2]) && (bt = Math.max(bt, Math.abs(e[2])));
      }
      const ae = new Set(Q), yt = Kt * 12, ft = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Tt = (t, e, n = 1) => {
        const s = t ? e : 0, d = -(bt * Math.max(s, 1) + Ie), r = n > 0 ? n : n < 0 ? -1 / n : 1, m = Se * r, x = Le * r, L = [];
        for (const g of Q) {
          if (!ae.has(g)) continue;
          const R = a.nodes.rawVal[g];
          if (!R) continue;
          const c = R[0], N = R[1], v = Ht == null ? void 0 : Ht.get(g), kt = (z) => Number.isFinite(z) ? z : 0, ce = v ? kt(v[0]) : 0, ie = v ? kt(v[1]) : 0, re = v ? kt(v[2]) : 0, Vt = c + ce * s, Gt = N + ie * s, Zt = 0 + re * s, de = Zt - d, zt = (z) => [
            c + (Vt - c) * z,
            N + (Gt - N) * z,
            d + de * z
          ], [me, fe, ue] = zt(0), [pe, he, xe] = zt(0.05), wt = [
            new $(me, fe, ue),
            new $(pe, he, xe)
          ];
          for (let z = 0; z <= yt; z++) {
            const ve = 0.05 + 0.9 * (z / yt), [Me, _e, be] = zt(ve), jt = 2 * Math.PI * Kt * (z / yt);
            wt.push(new $(Me + m * Math.cos(jt), _e + m * Math.sin(jt), be));
          }
          wt.push(new $(Vt, Gt, Zt)), L.push(new Xt(new Dt().setFromPoints(wt), Ne));
          const B = x, ge = [
            new $(c - B, N - B, d),
            new $(c + B, N - B, d),
            new $(c + B, N + B, d),
            new $(c - B, N + B, d),
            new $(c - B, N - B, d)
          ];
          L.push(new Xt(new Dt().setFromPoints(ge), Be));
        }
        return L;
      }, le = qt.v;
      ft ? ke.derive(() => {
        if (qt.v !== le) return;
        const t = ft.deformedShape.val, e = ft.deformScale.val, n = ft.displayScale.val;
        a.objects3D.val = Tt(t, e, n);
      }) : a.objects3D.val = Tt(true, 1, 1);
    },
    runModal(o, a, f) {
      var _a, _b;
      const u = a.nodes.val, p = a.elements.val, M = a.nodeInputs.val, _ = a.elementInputs.val;
      if (!(!u.length || !p.length || !((_a = _.densities) == null ? void 0 : _a.size))) try {
        const b = we(u, p, M, _, 12);
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
      const { downloadEdificioCimentacionF2k: a } = await ye(async () => {
        const { downloadEdificioCimentacionF2k: y } = await import("./f2kCimentacionCompleta-DNZcSTHO.js");
        return {
          downloadEdificioCimentacionF2k: y
        };
      }, []), f = 9.80665, u = o.Lz1, p = o.Bz1, M = o.Lv, _ = o.Bv, b = o.Hv, w = o.Lz2, E = o.Bz2, i = o.tz, H = o.bc, C = o.ks, tt = (p - E) / 2, et = H / 2, P = p / 2, nt = u + M + w / 2, ot = E / 2 + tt, pt = u / 2, ht = p / 2, T = u + M + w / 2, V = tt + E / 2, W = [
        {
          xC: pt,
          yC: ht,
          xCol: et,
          yCol: P,
          Lz: u,
          Bz: p,
          tz: i,
          bc: H,
          P_dead_kN: (o.P1 ?? 0) * f,
          Mx_dead_kNm: (o.M1x ?? 0) * f,
          My_dead_kNm: (o.M1y ?? 0) * f,
          label: 1
        },
        {
          xC: T,
          yC: V,
          xCol: nt,
          yCol: ot,
          Lz: w,
          Bz: E,
          tz: i,
          bc: H,
          P_dead_kN: (o.P2 ?? 0) * f,
          Mx_dead_kNm: (o.M2x ?? 0) * f,
          My_dead_kNm: (o.M2y ?? 0) * f,
          label: 2
        }
      ], G = [
        {
          x1: et,
          y1: P,
          x2: nt,
          y2: ot,
          h: b,
          b: _,
          z: 0
        }
      ];
      try {
        a({
          zapatas: W,
          vigasAmarre: G,
          ks_kNm3: C,
          Z: 0
        }, `ZapataVigaAmarre_Hekatan_${Date.now()}.f2k`), alert(`\u2705 F2K exportado con 2 zapatas + 1 viga de amarre:
\u2022 Z1 ${u}\xD7${p} m, P=${o.P1} tonf, Mx=${o.M1x}, My=${o.M1y} tonf\xB7m
\u2022 Z2 ${w}\xD7${E} m, P=${o.P2} tonf, Mx=${o.M2x}, My=${o.M2y} tonf\xB7m
\u2022 Viga amarre ${_}\xD7${b} m, Lv=${M} m
\u2022 ks = ${C.toFixed(0)} kN/m\xB3

Abrilo en SAFE 20.x: File \u2192 Import \u2192 SAFE Text File (.f2k)`), console.log(`[F2K Zapata+Viga] exportado: Z1=${u}\xD7${p}, Z2=${w}\xD7${E}, ks=${C} kN/m\xB3`);
      } catch (y) {
        alert(`\u274C Error exportando F2K: ${y.message}`), console.error(y);
      }
    }
  };
});
export {
  __tla,
  He as z
};
