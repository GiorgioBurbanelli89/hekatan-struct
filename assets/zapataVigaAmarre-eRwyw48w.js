import { _ as we } from "./preload-helper-DrUBW0xl.js";
import { L as Wt, V as F, a as Dt, B as qt } from "./Text-CEhsqBUu.js";
import { v as Le } from "./theme-2eEBQPmF.js";
import { a as Ie } from "./analyze-DOGq34F5.js";
import { m as Se, d as Ce, __tla as __tla_0 } from "./didacticCpp-CT_TM4EM.js";
import { a as Kt } from "./exampleVersion-D1A_5i59.js";
let Ge;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let Y, W, It, ft, Ne, Ee, Yt, Be, $e, Pe;
  Y = 25e6;
  W = 0.2;
  It = Y / (2 * (1 + W));
  ft = 24;
  Ne = 0.2;
  Ee = 0.035;
  Yt = 8;
  Be = 0.04;
  $e = new Wt({
    color: 16711731,
    linewidth: 2
  });
  Pe = new Wt({
    color: 52224,
    linewidth: 2
  });
  Ge = {
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
      const i = o.Lz1, d = o.Bz1, u = o.Lv, x = o.Bv, b = o.Hv, y = o.Lz2, L = o.Bz2, B = o.tz, m = o.bc, J = o.Hp, I = 9.80665, tt = o.P1 * I, ut = o.P2 * I, $ = o.ks, pt = (o.M1x ?? 0) * I, et = (o.M1y ?? 0) * I, ht = (o.M2x ?? 0) * I, xt = (o.M2y ?? 0) * I, Z = Math.round(o.nSubX), G = Math.round(o.nSubY), U = (d - L) / 2, j = 0.2, v = d / 2, nt = i + u + y / 2, X = L / 2 + U, St = v;
      function ot(t, e, n, l) {
        const a = [
          t,
          ...n.filter((r) => r > t && r < e),
          e
        ].sort((r, p) => r - p), f = [];
        for (let r = 0; r < a.length - 1; r++) {
          const p = a[r], g = a[r + 1], C = Math.max(1, Math.round((g - p) / ((e - t) / l)));
          for (let M = 0; M < C; M++) f.push(p + (g - p) * M / C);
        }
        return f.push(a[a.length - 1]), f;
      }
      const O = ot(0, i, [
        j
      ], Z), A = ot(0, d, [
        v,
        St
      ], G), H = ot(i + u, i + u + y, [
        nt
      ], Z), T = ot(U, U + L, [
        X,
        St
      ], G), vt = [], k = [], Jt = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map(), V = (t, e, n) => {
        const l = `${t.toFixed(4)},${e.toFixed(4)},${n.toFixed(4)}`;
        if (_t.has(l)) return _t.get(l);
        const a = vt.length;
        return vt.push([
          t,
          e,
          n
        ]), _t.set(l, a), a;
      }, h = [];
      for (let t = 0; t < A.length; t++) {
        const e = [];
        for (let n = 0; n < O.length; n++) e.push(V(O[n], A[t], 0));
        h.push(e);
      }
      for (let t = 0; t < A.length - 1; t++) for (let e = 0; e < O.length - 1; e++) {
        const n = k.length;
        k.push([
          h[t][e],
          h[t][e + 1],
          h[t + 1][e + 1],
          h[t + 1][e]
        ]), Mt.set(n, B), D.set(n, Y), q.set(n, W), K.set(n, ft);
      }
      const z = [];
      for (let t = 0; t < T.length; t++) {
        const e = [];
        for (let n = 0; n < H.length; n++) e.push(V(H[n], T[t], 0));
        z.push(e);
      }
      for (let t = 0; t < T.length - 1; t++) for (let e = 0; e < H.length - 1; e++) {
        const n = k.length;
        k.push([
          z[t][e],
          z[t][e + 1],
          z[t + 1][e + 1],
          z[t + 1][e]
        ]), Mt.set(n, B), D.set(n, Y), q.set(n, W), K.set(n, ft);
      }
      const Ct = V(j, v, 0), Nt = V(j, v, J), Et = V(nt, X, 0), Bt = V(nt, X, J);
      for (const [t, e] of [
        [
          Ct,
          Nt
        ],
        [
          Et,
          Bt
        ]
      ]) {
        const n = k.length;
        k.push([
          t,
          e
        ]), D.set(n, Y), q.set(n, W), it.set(n, It), st.set(n, m * m), at.set(n, m ** 4 / 12), lt.set(n, m ** 4 / 12), ct.set(n, 0.14 * m ** 4), K.set(n, ft), rt.set(n, {
          type: "rect",
          b: m,
          h: m
        });
      }
      const $t = V(i, v, 0), Pt = V(i + u, X, 0), P = k.length;
      k.push([
        $t,
        Pt
      ]), D.set(P, Y), q.set(P, W), it.set(P, It), st.set(P, x * b), at.set(P, x * b ** 3 / 12), lt.set(P, b * x ** 3 / 12), ct.set(P, 0.28 * x * b ** 3), K.set(P, ft), rt.set(P, {
        type: "rect",
        b: x,
        h: b
      });
      const Ft = 0.5, Ut = Y * 1e3, Qt = It * 1e3, te = m * m * 100, Vt = m ** 4 / 12 * 100, ee = 0.14 * m ** 4 * 100;
      function dt(t, e, n, l, a, f) {
        let r = 0;
        for (let p = 0; p < a.length; p++) for (let g = 0; g < l.length; g++) {
          const C = l[g], M = a[p];
          if (Math.abs(C - e) > Ft / 2 + 1e-6 || Math.abs(M - n) > Ft / 2 + 1e-6) continue;
          const R = f[p][g];
          if (R === t) continue;
          const c = k.length;
          k.push([
            t,
            R
          ]), D.set(c, Ut), q.set(c, W), it.set(c, Qt), st.set(c, te), at.set(c, Vt), lt.set(c, Vt), ct.set(c, ee), K.set(c, 0), rt.set(c, {
            type: "rect",
            b: m,
            h: m
          }), r++;
        }
        return r;
      }
      const ne = dt(Ct, j, v, O, A, h), oe = dt(Et, nt, X, H, T, z), se = dt($t, i, v, O, A, h), ae = dt(Pt, i + u, X, H, T, z);
      console.log(`[Rigid links] Col1:${ne} Col2:${oe} VigaZ1:${se} VigaZ2:${ae}`), gt.set(Nt, [
        0,
        0,
        -tt,
        pt,
        et,
        0
      ]), gt.set(Bt, [
        0,
        0,
        -ut,
        ht,
        xt,
        0
      ]);
      const Rt = i / Z, Ot = d / G, le = y / Z, ce = L / G, At = 0.5, S = [], Q = [];
      for (let t = 0; t < A.length; t++) for (let e = 0; e < O.length; e++) {
        const n = Rt * Ot * (e === 0 || e === O.length - 1 ? 0.5 : 1) * (t === 0 || t === A.length - 1 ? 0.5 : 1), l = $ * n, a = $ * n * At;
        S.push({
          node: h[t][e],
          dof: 0,
          k: a
        }), S.push({
          node: h[t][e],
          dof: 1,
          k: a
        }), S.push({
          node: h[t][e],
          dof: 2,
          k: l
        }), Q.push(h[t][e]);
      }
      for (let t = 0; t < T.length; t++) for (let e = 0; e < H.length; e++) {
        const n = le * ce * (e === 0 || e === H.length - 1 ? 0.5 : 1) * (t === 0 || t === T.length - 1 ? 0.5 : 1), l = $ * n, a = $ * n * At;
        S.push({
          node: z[t][e],
          dof: 0,
          k: a
        }), S.push({
          node: z[t][e],
          dof: 1,
          k: a
        }), S.push({
          node: z[t][e],
          dof: 2,
          k: l
        }), Q.push(z[t][e]);
      }
      const bt = $ * Rt * Ot * 1e-4;
      S.push({
        node: h[0][0],
        dof: 3,
        k: bt
      }), S.push({
        node: h[0][0],
        dof: 4,
        k: bt
      }), S.push({
        node: h[0][0],
        dof: 5,
        k: bt
      }), s.nodes.val = vt.map((t) => [
        t[0],
        t[1],
        t[2]
      ]), s.elements.val = k, s.nodeInputs.val = {
        supports: Jt,
        loads: gt
      }, s.elementInputs.val = {
        elasticities: D,
        poissonsRatios: q,
        areas: st,
        momentsOfInertiaZ: at,
        momentsOfInertiaY: lt,
        torsionalConstants: ct,
        shearModuli: it,
        thicknesses: Mt,
        densities: K,
        sectionShapes: rt
      };
      try {
        s.deformOutputs.val = Ce(s.nodes.val, s.elements.val, s.nodeInputs.val, s.elementInputs.val, S);
        const t = Ie(s.nodes.val, s.elements.val, s.elementInputs.val, s.deformOutputs.val), e = s.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        let l = 0, a = 0;
        s.elements.rawVal.forEach((g, C) => {
          if (g.length !== 4) return;
          const M = [];
          for (const R of g) {
            const c = e == null ? void 0 : e.get(R), N = c ? c[2] : 0, _ = $ * N;
            M.push(_), _ < l && (l = _), _ > a && (a = _);
          }
          n.set(C, M);
        }), t.pressure = n;
        const f = 9.80665, r = Math.min(-12 * f, a), p = Math.max(-26 * f, l);
        t.colorMapRanges = {
          pressure: [
            r,
            p
          ]
        }, s.analyzeOutputs.val = t;
      } catch (t) {
        console.error("Solver error:", t);
      }
      const Ht = s.deformOutputs.rawVal.deformations;
      let yt = 1e-9;
      for (const t of Q) {
        const e = Ht == null ? void 0 : Ht.get(t);
        e && Number.isFinite(e[2]) && (yt = Math.max(yt, Math.abs(e[2])));
      }
      const ie = new Set(Q), kt = Yt * 12, mt = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Tt = (t, e, n = 1) => {
        const l = t ? e : 0, f = -(yt * Math.max(l, 1) + Ne), r = n > 0 ? n : n < 0 ? -1 / n : 1, p = Ee * r, g = Be * r, C = [];
        for (const M of Q) {
          if (!ie.has(M)) continue;
          const R = s.nodes.rawVal[M];
          if (!R) continue;
          const c = R[0], N = R[1], _ = Ht == null ? void 0 : Ht.get(M), zt = (w) => Number.isFinite(w) ? w : 0, de = _ ? zt(_[0]) : 0, me = _ ? zt(_[1]) : 0, fe = _ ? zt(_[2]) : 0, Zt = c + de * l, Gt = N + me * l, jt = 0 + fe * l, ue = jt - f, wt = (w) => [
            c + (Zt - c) * w,
            N + (Gt - N) * w,
            f + ue * w
          ], [pe, he, xe] = wt(0), [ve, ge, Me] = wt(0.05), Lt = [
            new F(pe, he, xe),
            new F(ve, ge, Me)
          ];
          for (let w = 0; w <= kt; w++) {
            const be = 0.05 + 0.9 * (w / kt), [ye, ke, ze] = wt(be), Xt = 2 * Math.PI * Yt * (w / kt);
            Lt.push(new F(ye + p * Math.cos(Xt), ke + p * Math.sin(Xt), ze));
          }
          Lt.push(new F(Zt, Gt, jt)), C.push(new Dt(new qt().setFromPoints(Lt), $e));
          const E = g, _e = [
            new F(c - E, N - E, f),
            new F(c + E, N - E, f),
            new F(c + E, N + E, f),
            new F(c - E, N + E, f),
            new F(c - E, N - E, f)
          ];
          C.push(new Dt(new qt().setFromPoints(_e), Pe));
        }
        return C;
      }, re = Kt.v;
      mt ? Le.derive(() => {
        if (Kt.v !== re) return;
        const t = mt.deformedShape.val, e = mt.deformScale.val, n = mt.displayScale.val;
        s.objects3D.val = Tt(t, e, n);
      }) : s.objects3D.val = Tt(true, 1, 1);
    },
    runModal(o, s, i) {
      var _a, _b;
      const d = s.nodes.val, u = s.elements.val, x = s.nodeInputs.val, b = s.elementInputs.val;
      if (!(!d.length || !u.length || !((_a = b.densities) == null ? void 0 : _a.size))) try {
        const y = Se(d, u, x, b, 12);
        i.render(y, {
          title: `Zapata + Viga amarre Lv=${o.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${o.Bv}\xD7${o.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = y.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (y) {
        console.warn("Modal zapata-viga error:", y.message);
      }
    },
    async exportF2k(o) {
      const { downloadEdificioCimentacionF2k: s } = await we(async () => {
        const { downloadEdificioCimentacionF2k: v } = await import("./f2kCimentacionCompleta-DNZcSTHO.js");
        return {
          downloadEdificioCimentacionF2k: v
        };
      }, []), i = 9.80665, d = o.Lz1, u = o.Bz1, x = o.Lv, b = o.Bv, y = o.Hv, L = o.Lz2, B = o.Bz2, m = o.tz, J = o.bc, I = o.ks, tt = (u - B) / 2, ut = 0.2, $ = u / 2, pt = d + x + L / 2, et = B / 2 + tt, ht = d / 2, xt = u / 2, Z = d + x + L / 2, G = tt + B / 2, U = [
        {
          xC: ht,
          yC: xt,
          xCol: ut,
          yCol: $,
          Lz: d,
          Bz: u,
          tz: m,
          bc: J,
          P_dead_kN: (o.P1 ?? 0) * i,
          Mx_dead_kNm: (o.M1x ?? 0) * i,
          My_dead_kNm: (o.M1y ?? 0) * i,
          label: 1
        },
        {
          xC: Z,
          yC: G,
          xCol: pt,
          yCol: et,
          Lz: L,
          Bz: B,
          tz: m,
          bc: J,
          P_dead_kN: (o.P2 ?? 0) * i,
          Mx_dead_kNm: (o.M2x ?? 0) * i,
          My_dead_kNm: (o.M2y ?? 0) * i,
          label: 2
        }
      ], j = [
        {
          x1: d,
          y1: $,
          x2: d + x,
          y2: et,
          h: y,
          b,
          z: 0
        }
      ];
      try {
        s({
          zapatas: U,
          vigasAmarre: j,
          ks_kNm3: I,
          Z: 0
        }, `ZapataVigaAmarre_Hekatan_${Date.now()}.f2k`), alert(`\u2705 F2K exportado con 2 zapatas + 1 viga de amarre:
\u2022 Z1 ${d}\xD7${u} m, P=${o.P1} tonf, Mx=${o.M1x}, My=${o.M1y} tonf\xB7m
\u2022 Z2 ${L}\xD7${B} m, P=${o.P2} tonf, Mx=${o.M2x}, My=${o.M2y} tonf\xB7m
\u2022 Viga amarre ${b}\xD7${y} m, Lv=${x} m
\u2022 ks = ${I.toFixed(0)} kN/m\xB3

Abrilo en SAFE 20.x: File \u2192 Import \u2192 SAFE Text File (.f2k)`), console.log(`[F2K Zapata+Viga] exportado: Z1=${d}\xD7${u}, Z2=${L}\xD7${B}, ks=${I} kN/m\xB3`);
      } catch (v) {
        alert(`\u274C Error exportando F2K: ${v.message}`), console.error(v);
      }
    }
  };
});
export {
  __tla,
  Ge as z
};
