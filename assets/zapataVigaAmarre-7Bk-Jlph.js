import { _ as bt } from "./preload-helper-DrUBW0xl.js";
import { L as Ye, v as yt, V as $, a as je, B as Xe } from "./theme-CaJUXK9g.js";
import { a as Pt } from "./analyze-DOGq34F5.js";
import { m as kt, d as zt, __tla as __tla_0 } from "./didacticCpp-CT_TM4EM.js";
import { a as qe } from "./exampleVersion-D1A_5i59.js";
let Gt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let W, J, we, _e, wt, Nt, Ke, Ct, It, St;
  W = 25e6;
  J = 0.2;
  we = W / (2 * (1 + J));
  _e = 24;
  wt = 0.2;
  Nt = 0.035;
  Ke = 8;
  Ct = 0.04;
  It = new Ye({
    color: 16711731,
    linewidth: 2
  });
  St = new Ye({
    color: 52224,
    linewidth: 2
  });
  Gt = {
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
        label: "P1 Dead (tonf)"
      },
      M1x: {
        default: 1,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1x Dead (tonf\xB7m)"
      },
      M1y: {
        default: 2.5,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1y Dead (tonf\xB7m)"
      },
      P2: {
        default: 40,
        min: 1,
        max: 200,
        step: 1,
        label: "P2 Dead (tonf)"
      },
      M2x: {
        default: 1,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2x Dead (tonf\xB7m)"
      },
      M2y: {
        default: 2.5,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2y Dead (tonf\xB7m)"
      },
      P1_L: {
        default: 0,
        min: 0,
        max: 200,
        step: 1,
        label: "P1 Live (tonf)"
      },
      M1x_L: {
        default: 0,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1x Live (tonf\xB7m)"
      },
      M1y_L: {
        default: 0,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1y Live (tonf\xB7m)"
      },
      P2_L: {
        default: 0,
        min: 0,
        max: 200,
        step: 1,
        label: "P2 Live (tonf)"
      },
      M2x_L: {
        default: 0,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2x Live (tonf\xB7m)"
      },
      M2y_L: {
        default: 0,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2y Live (tonf\xB7m)"
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
    build(t, a) {
      var _a;
      const i = t.Lz1, u = t.Bz1, _ = t.Lv, g = t.Bv, L = t.Hv, b = t.Lz2, k = t.Bz2, B = t.tz, r = t.bc, H = t.Hp, z = 9.80665, te = (t.P1 + (t.P1_L ?? 0)) * z, ne = (t.P2 + (t.P2_L ?? 0)) * z, E = t.ks, oe = ((t.M1x ?? 0) + (t.M1x_L ?? 0)) * z, se = ((t.M1y ?? 0) + (t.M1y_L ?? 0)) * z, xe = ((t.M2x ?? 0) + (t.M2x_L ?? 0)) * z, he = ((t.M2y ?? 0) + (t.M2y_L ?? 0)) * z, T = Math.round(t.nSubX), V = Math.round(t.nSubY), U = (u - k) / 2, Z = r / 2, x = u / 2, D = i + _ + b / 2, A = k / 2 + U, ae = x;
      function le(e, n, o, s) {
        const l = [
          e,
          ...o.filter((d) => d > e && d < n),
          n
        ].sort((d, f) => d - f), m = [];
        for (let d = 0; d < l.length - 1; d++) {
          const f = l[d], v = l[d + 1], C = Math.max(1, Math.round((v - f) / ((n - e) / s)));
          for (let p = 0; p < C; p++) m.push(f + (v - f) * p / C);
        }
        return m.push(l[l.length - 1]), m;
      }
      const O = le(0, i, [
        Z
      ], T), j = le(0, u, [
        x,
        ae
      ], V), G = le(i + _, i + _ + b, [
        D
      ], T), X = le(U, U + k, [
        A,
        ae
      ], V), ve = [], y = [], We = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), F = (e, n, o) => {
        const s = `${e.toFixed(4)},${n.toFixed(4)},${o.toFixed(4)}`;
        if (ge.has(s)) return ge.get(s);
        const l = ve.length;
        return ve.push([
          e,
          n,
          o
        ]), ge.set(s, l), l;
      }, h = [];
      for (let e = 0; e < j.length; e++) {
        const n = [];
        for (let o = 0; o < O.length; o++) n.push(F(O[o], j[e], 0));
        h.push(n);
      }
      for (let e = 0; e < j.length - 1; e++) for (let n = 0; n < O.length - 1; n++) {
        const o = y.length;
        y.push([
          h[e][n],
          h[e][n + 1],
          h[e + 1][n + 1],
          h[e + 1][n]
        ]), Me.set(o, B), q.set(o, W), K.set(o, J), Y.set(o, _e);
      }
      const w = [];
      for (let e = 0; e < X.length; e++) {
        const n = [];
        for (let o = 0; o < G.length; o++) n.push(F(G[o], X[e], 0));
        w.push(n);
      }
      for (let e = 0; e < X.length - 1; e++) for (let n = 0; n < G.length - 1; n++) {
        const o = y.length;
        y.push([
          w[e][n],
          w[e][n + 1],
          w[e + 1][n + 1],
          w[e + 1][n]
        ]), Me.set(o, B), q.set(o, W), K.set(o, J), Y.set(o, _e);
      }
      const Ne = F(Z, x, 0), Ce = F(Z, x, H), Ie = F(D, A, 0), Se = F(D, A, H);
      for (const [e, n] of [
        [
          Ne,
          Ce
        ],
        [
          Ie,
          Se
        ]
      ]) {
        const o = y.length;
        y.push([
          e,
          n
        ]), q.set(o, W), K.set(o, J), me.set(o, we), ce.set(o, r * r), ie.set(o, r ** 4 / 12), re.set(o, r ** 4 / 12), de.set(o, 0.14 * r ** 4), Y.set(o, _e), fe.set(o, {
          type: "rect",
          b: r,
          h: r
        });
      }
      const Q = [];
      for (const e of O) Q.push(F(e, x, 0));
      for (const e of G) Q.push(F(e, A, 0));
      let Be = 0;
      for (let e = 0; e < Q.length - 1; e++) {
        const n = Q[e], o = Q[e + 1];
        if (n === o) continue;
        const s = y.length;
        y.push([
          n,
          o
        ]), q.set(s, W), K.set(s, J), me.set(s, we), ce.set(s, g * L), ie.set(s, g * L ** 3 / 12), re.set(s, L * g ** 3 / 12), de.set(s, 0.28 * g * L ** 3), Y.set(s, _e), fe.set(s, {
          type: "rect",
          b: g,
          h: L
        }), Be++;
      }
      console.log(`[viga amarre] ${Be} segmentos col-a-col compartiendo nodos con slab`);
      const Ee = 0.5, Je = W * 1e3, Ue = we * 1e3, Qe = r * r * 100, $e = r ** 4 / 12 * 100, et = 0.14 * r ** 4 * 100;
      function Fe(e, n, o, s, l, m) {
        let d = 0;
        for (let f = 0; f < l.length; f++) for (let v = 0; v < s.length; v++) {
          const C = s[v], p = l[f];
          if (Math.abs(C - n) > Ee / 2 + 1e-6 || Math.abs(p - o) > Ee / 2 + 1e-6) continue;
          const R = m[f][v];
          if (R === e) continue;
          const c = y.length;
          y.push([
            e,
            R
          ]), q.set(c, Je), K.set(c, J), me.set(c, Ue), ce.set(c, Qe), ie.set(c, $e), re.set(c, $e), de.set(c, et), Y.set(c, 0), fe.set(c, {
            type: "rect",
            b: r,
            h: r
          }), d++;
        }
        return d;
      }
      const tt = Fe(Ne, Z, x, O, j, h), nt = Fe(Ie, D, A, G, X, w);
      console.log(`[Rigid links] Col1:${tt} Col2:${nt}  (viga col-a-col directa nCol1Bot\u2194nCol2Bot)`), pe.set(Ce, [
        0,
        0,
        -te,
        oe,
        se,
        0
      ]), pe.set(Se, [
        0,
        0,
        -ne,
        xe,
        he,
        0
      ]);
      const Re = i / T, Ae = u / V, ot = b / T, st = k / V, Oe = 0.5, N = [], ee = [];
      for (let e = 0; e < j.length; e++) for (let n = 0; n < O.length; n++) {
        const o = Re * Ae * (n === 0 || n === O.length - 1 ? 0.5 : 1) * (e === 0 || e === j.length - 1 ? 0.5 : 1), s = E * o, l = E * o * Oe;
        N.push({
          node: h[e][n],
          dof: 0,
          k: l
        }), N.push({
          node: h[e][n],
          dof: 1,
          k: l
        }), N.push({
          node: h[e][n],
          dof: 2,
          k: s
        }), ee.push(h[e][n]);
      }
      for (let e = 0; e < X.length; e++) for (let n = 0; n < G.length; n++) {
        const o = ot * st * (n === 0 || n === G.length - 1 ? 0.5 : 1) * (e === 0 || e === X.length - 1 ? 0.5 : 1), s = E * o, l = E * o * Oe;
        N.push({
          node: w[e][n],
          dof: 0,
          k: l
        }), N.push({
          node: w[e][n],
          dof: 1,
          k: l
        }), N.push({
          node: w[e][n],
          dof: 2,
          k: s
        }), ee.push(w[e][n]);
      }
      const Le = E * Re * Ae * 1e-4;
      N.push({
        node: h[0][0],
        dof: 3,
        k: Le
      }), N.push({
        node: h[0][0],
        dof: 4,
        k: Le
      }), N.push({
        node: h[0][0],
        dof: 5,
        k: Le
      }), a.nodes.val = ve.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), a.elements.val = y, a.nodeInputs.val = {
        supports: We,
        loads: pe
      }, a.elementInputs.val = {
        elasticities: q,
        poissonsRatios: K,
        areas: ce,
        momentsOfInertiaZ: ie,
        momentsOfInertiaY: re,
        torsionalConstants: de,
        shearModuli: me,
        thicknesses: Me,
        densities: Y,
        sectionShapes: fe
      };
      try {
        a.deformOutputs.val = zt(a.nodes.val, a.elements.val, a.nodeInputs.val, a.elementInputs.val, N);
        const e = Pt(a.nodes.val, a.elements.val, a.elementInputs.val, a.deformOutputs.val), n = a.deformOutputs.rawVal.deformations, o = /* @__PURE__ */ new Map();
        let s = 0, l = 0;
        a.elements.rawVal.forEach((v, C) => {
          if (v.length !== 4) return;
          const p = [];
          for (const R of v) {
            const c = n == null ? void 0 : n.get(R), I = c ? c[2] : 0, M = E * I;
            p.push(M), M < s && (s = M), M > l && (l = M);
          }
          o.set(C, p);
        }), e.pressure = o;
        const m = 9.80665, d = Math.min(-12 * m, l), f = Math.max(-26 * m, s);
        e.colorMapRanges = {
          pressure: [
            d,
            f
          ]
        }, a.analyzeOutputs.val = e;
      } catch (e) {
        console.error("Solver error:", e);
      }
      const Ge = a.deformOutputs.rawVal.deformations;
      let be = 1e-9;
      for (const e of ee) {
        const n = Ge == null ? void 0 : Ge.get(e);
        n && Number.isFinite(n[2]) && (be = Math.max(be, Math.abs(n[2])));
      }
      const at = new Set(ee), ye = Ke * 12, ue = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, He = (e, n, o = 1) => {
        const s = e ? n : 0, m = -(be * Math.max(s, 1) + wt), d = o > 0 ? o : o < 0 ? -1 / o : 1, f = Nt * d, v = Ct * d, C = [];
        for (const p of ee) {
          if (!at.has(p)) continue;
          const R = a.nodes.rawVal[p];
          if (!R) continue;
          const c = R[0], I = R[1], M = Ge == null ? void 0 : Ge.get(p), Pe = (P) => Number.isFinite(P) ? P : 0, ct = M ? Pe(M[0]) : 0, it = M ? Pe(M[1]) : 0, rt = M ? Pe(M[2]) : 0, Te = c + ct * s, Ve = I + it * s, Ze = 0 + rt * s, dt = Ze - m, ke = (P) => [
            c + (Te - c) * P,
            I + (Ve - I) * P,
            m + dt * P
          ], [mt, ft, ut] = ke(0), [_t, xt, ht] = ke(0.05), ze = [
            new $(mt, ft, ut),
            new $(_t, xt, ht)
          ];
          for (let P = 0; P <= ye; P++) {
            const pt = 0.05 + 0.9 * (P / ye), [Mt, gt, Lt] = ke(pt), De = 2 * Math.PI * Ke * (P / ye);
            ze.push(new $(Mt + f * Math.cos(De), gt + f * Math.sin(De), Lt));
          }
          ze.push(new $(Te, Ve, Ze)), C.push(new je(new Xe().setFromPoints(ze), It));
          const S = v, vt = [
            new $(c - S, I - S, m),
            new $(c + S, I - S, m),
            new $(c + S, I + S, m),
            new $(c - S, I + S, m),
            new $(c - S, I - S, m)
          ];
          C.push(new je(new Xe().setFromPoints(vt), St));
        }
        return C;
      }, lt = qe.v;
      ue ? yt.derive(() => {
        if (qe.v !== lt) return;
        const e = ue.deformedShape.val, n = ue.deformScale.val, o = ue.displayScale.val;
        a.objects3D.val = He(e, n, o);
      }) : a.objects3D.val = He(true, 1, 1);
    },
    runModal(t, a, i) {
      var _a, _b;
      const u = a.nodes.val, _ = a.elements.val, g = a.nodeInputs.val, L = a.elementInputs.val;
      if (!(!u.length || !_.length || !((_a = L.densities) == null ? void 0 : _a.size))) try {
        const b = kt(u, _, g, L, 12);
        i.render(b, {
          title: `Zapata + Viga amarre Lv=${t.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${t.Bv}\xD7${t.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = b.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (b) {
        console.warn("Modal zapata-viga error:", b.message);
      }
    },
    async exportF2k(t) {
      const { downloadEdificioCimentacionF2k: a } = await bt(async () => {
        const { downloadEdificioCimentacionF2k: x } = await import("./f2kCimentacionCompleta-DC7r5uTU.js");
        return {
          downloadEdificioCimentacionF2k: x
        };
      }, []), i = 9.80665, u = t.Lz1, _ = t.Bz1, g = t.Lv, L = t.Bv, b = t.Hv, k = t.Lz2, B = t.Bz2, r = t.tz, H = t.bc, z = t.ks, te = (_ - B) / 2, ne = H / 2, E = _ / 2, oe = u + g + k / 2, se = B / 2 + te, xe = u / 2, he = _ / 2, T = u + g + k / 2, V = te + B / 2, U = [
        {
          xC: xe,
          yC: he,
          xCol: ne,
          yCol: E,
          Lz: u,
          Bz: _,
          tz: r,
          bc: H,
          P_dead_kN: (t.P1 ?? 0) * i,
          Mx_dead_kNm: (t.M1x ?? 0) * i,
          My_dead_kNm: (t.M1y ?? 0) * i,
          P_live_kN: (t.P1_L ?? 0) * i,
          Mx_live_kNm: (t.M1x_L ?? 0) * i,
          My_live_kNm: (t.M1y_L ?? 0) * i,
          label: 1
        },
        {
          xC: T,
          yC: V,
          xCol: oe,
          yCol: se,
          Lz: k,
          Bz: B,
          tz: r,
          bc: H,
          P_dead_kN: (t.P2 ?? 0) * i,
          Mx_dead_kNm: (t.M2x ?? 0) * i,
          My_dead_kNm: (t.M2y ?? 0) * i,
          P_live_kN: (t.P2_L ?? 0) * i,
          Mx_live_kNm: (t.M2x_L ?? 0) * i,
          My_live_kNm: (t.M2y_L ?? 0) * i,
          label: 2
        }
      ], Z = [
        {
          x1: ne,
          y1: E,
          x2: oe,
          y2: se,
          h: b,
          b: L,
          z: 0
        }
      ];
      try {
        a({
          zapatas: U,
          vigasAmarre: Z,
          ks_kNm3: z,
          Z: 0
        }, `ZapataVigaAmarre_Hekatan_${Date.now()}.f2k`);
        const x = (t.P1 ?? 0) + (t.P1_L ?? 0), D = (t.P2 ?? 0) + (t.P2_L ?? 0), A = 1.4 * (t.P1 ?? 0) + 1.7 * (t.P1_L ?? 0), ae = 1.4 * (t.P2 ?? 0) + 1.7 * (t.P2_L ?? 0);
        alert(`\u2705 F2K exportado con 2 zapatas + viga de amarre:

\u2022 Z1 ${u}\xD7${_} m \u2014 PD=${t.P1} + PL=${t.P1_L ?? 0} = ${x} tonf | Pu=${A.toFixed(1)} tonf
\u2022 Z2 ${k}\xD7${B} m \u2014 PD=${t.P2} + PL=${t.P2_L ?? 0} = ${D} tonf | Pu=${ae.toFixed(1)} tonf
\u2022 Viga amarre ${L}\xD7${b} m, Lv=${g} m
\u2022 ks = ${z.toFixed(0)} kN/m\xB3

Patrones de carga incluidos: Dead (+peso propio), Live
Combinaci\xF3n: Pu = 1.4D + 1.7L (ACI 318 nominal Guerra MDI)

Abrilo en SAFE 20.x: File \u2192 Import \u2192 SAFE Text File (.f2k)`), console.log(`[F2K Zapata+Viga] exportado: Z1=${u}\xD7${_}, Z2=${k}\xD7${B}, ks=${z} kN/m\xB3`);
      } catch (x) {
        alert(`\u274C Error exportando F2K: ${x.message}`), console.error(x);
      }
    }
  };
});
export {
  __tla,
  Gt as z
};
