import { a as $e } from "./analyze-ClLKGn9k.js";
import { m as ve, d as xe, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let Se;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let le, ae, be, Me;
  le = 25e6;
  ae = 0.2;
  be = le / (2 * (1 + ae));
  Me = 24;
  Se = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado (hormig\xF3n)",
    category: "Edificios",
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "displacementZ",
      "bendingXX",
      "vonMises"
    ],
    hasModal: true,
    params: {
      nVanosX: {
        default: 2,
        min: 1,
        max: 8,
        step: 1,
        label: "Vanos X"
      },
      nVanosY: {
        default: 2,
        min: 1,
        max: 8,
        step: 1,
        label: "Vanos Y"
      },
      nPisos: {
        default: 3,
        min: 1,
        max: 15,
        step: 1,
        label: "Pisos"
      },
      spanX: {
        default: 5,
        min: 2,
        max: 12,
        step: 0.5,
        label: "Luz X (m)"
      },
      spanY: {
        default: 5,
        min: 2,
        max: 12,
        step: 0.5,
        label: "Luz Y (m)"
      },
      hPiso: {
        default: 3,
        min: 2,
        max: 5,
        step: 0.1,
        label: "h piso (m)"
      },
      Lvix: {
        default: 0,
        min: 0,
        max: 3,
        step: 0.25,
        label: "Voladizo izq X (m)"
      },
      Lvdx: {
        default: 0,
        min: 0,
        max: 3,
        step: 0.25,
        label: "Voladizo der X (m)"
      },
      Lviy: {
        default: 0,
        min: 0,
        max: 3,
        step: 0.25,
        label: "Voladizo izq Y (m)"
      },
      Lvdy: {
        default: 0,
        min: 0,
        max: 3,
        step: 0.25,
        label: "Voladizo der Y (m)"
      },
      colSize: {
        default: 0.4,
        min: 0.25,
        max: 0.8,
        step: 0.05,
        label: "b columna (m)"
      },
      vigaB: {
        default: 0.3,
        min: 0.2,
        max: 0.6,
        step: 0.05,
        label: "b viga (m)"
      },
      vigaH: {
        default: 0.5,
        min: 0.3,
        max: 0.9,
        step: 0.05,
        label: "h viga (m)"
      },
      nSubViga: {
        default: 1,
        min: 1,
        max: 6,
        step: 1,
        label: "Div. vigas"
      },
      nSubCol: {
        default: 1,
        min: 1,
        max: 4,
        step: 1,
        label: "Div. columnas"
      },
      vSecOn: {
        default: 0,
        min: 0,
        max: 1,
        step: 1,
        label: "Vigas secundarias (0/1)"
      },
      nVSec: {
        default: 2,
        min: 1,
        max: 5,
        step: 1,
        label: "N\xB0 secundarias por vano"
      },
      vSecDir: {
        default: 0,
        min: 0,
        max: 1,
        step: 1,
        label: "Dir secundarias (0=X,1=Y)"
      },
      bracesMode: {
        default: 0,
        label: "Diagonales",
        options: {
          ninguna: 0,
          perimetrales: 1,
          todas: 2,
          "solo X": 3,
          "solo Y": 4
        }
      },
      slabOn: {
        default: 0,
        min: 0,
        max: 1,
        step: 1,
        label: "Losa (0/1)"
      },
      slabT: {
        default: 0.15,
        min: 0.08,
        max: 0.3,
        step: 0.01,
        label: "t losa (m)"
      },
      Ex: {
        default: 50,
        min: 0,
        max: 500,
        step: 10,
        label: "Ex lateral tope (kN)"
      },
      CM: {
        default: -5,
        min: -20,
        max: 0,
        step: 1,
        label: "CM por nodo (kN)"
      }
    },
    build(o, $) {
      const T = Math.round(o.nVanosX), B = Math.round(o.nVanosY), V = Math.round(o.nPisos), z = Math.max(1, Math.round(o.nSubViga)), E = Math.max(1, Math.round(o.nSubCol)), y = o.Lvix, w = o.Lvdx, L = o.Lviy, I = o.Lvdy, a = [];
      y > 0 && a.push(-y), a.push(0);
      for (let e = 0; e < T; e++) a.push(a[a.length - 1] + o.spanX);
      w > 0 && a.push(a[a.length - 1] + w);
      const i = [];
      L > 0 && i.push(-L), i.push(0);
      for (let e = 0; e < B; e++) i.push(i[i.length - 1] + o.spanY);
      I > 0 && i.push(i[i.length - 1] + I);
      const v = [];
      for (let e = 0; e <= V; e++) v.push(e * o.hPiso);
      const ie = (e) => y > 0 && e === 0 || w > 0 && e === a.length - 1, ce = (e) => L > 0 && e === 0 || I > 0 && e === i.length - 1, S = (e, n) => ie(e) || ce(n), h = [], m = {};
      for (let e = 0; e < v.length; e++) for (let n = 0; n < i.length; n++) for (let s = 0; s < a.length; s++) e === 0 && S(s, n) || (m[`${s},${n},${e}`] = h.length, h.push([
        a[s],
        i[n],
        v[e]
      ]));
      const u = [], J = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), k = (e, n, s, c) => {
        if (s <= 1) {
          c.add(u.length), u.push([
            e,
            n
          ]);
          return;
        }
        const t = h[e], f = h[n];
        let l = e;
        for (let d = 1; d < s; d++) {
          const p = d / s, g = h.length;
          h.push([
            t[0] + (f[0] - t[0]) * p,
            t[1] + (f[1] - t[1]) * p,
            t[2] + (f[2] - t[2]) * p
          ]), c.add(u.length), u.push([
            l,
            g
          ]), l = g;
        }
        c.add(u.length), u.push([
          l,
          n
        ]);
      };
      for (let e = 0; e < v.length - 1; e++) for (let n = 0; n < i.length; n++) for (let s = 0; s < a.length; s++) S(s, n) || k(m[`${s},${n},${e}`], m[`${s},${n},${e + 1}`], E, J);
      for (let e = 1; e < v.length; e++) for (let n = 0; n < i.length; n++) for (let s = 0; s < a.length - 1; s++) k(m[`${s},${n},${e}`], m[`${s + 1},${n},${e}`], z, D);
      for (let e = 1; e < v.length; e++) for (let n = 0; n < a.length; n++) for (let s = 0; s < i.length - 1; s++) k(m[`${n},${s},${e}`], m[`${n},${s + 1},${e}`], z, D);
      if (o.vSecOn >= 0.5 && o.nVSec >= 1) {
        const e = Math.round(o.nVSec), n = (c, t, f) => {
          for (let d = 0; d < h.length; d++) if (Math.abs(h[d][0] - c) < 1e-6 && Math.abs(h[d][1] - t) < 1e-6 && Math.abs(h[d][2] - f) < 1e-6) return d;
          const l = h.length;
          return h.push([
            c,
            t,
            f
          ]), l;
        }, s = o.vSecDir < 0.5 ? "x" : "y";
        for (let c = 1; c < v.length; c++) if (s === "x") for (let t = 0; t < i.length - 1; t++) {
          const f = i[t], l = i[t + 1];
          for (let d = 1; d <= e; d++) {
            const p = f + d / (e + 1) * (l - f), g = [];
            for (let r = 0; r < a.length; r++) g.push(n(a[r], p, v[c]));
            for (let r = 0; r < a.length - 1; r++) D.add(u.length), u.push([
              g[r],
              g[r + 1]
            ]);
          }
        }
        else for (let t = 0; t < a.length - 1; t++) {
          const f = a[t], l = a[t + 1];
          for (let d = 1; d <= e; d++) {
            const p = f + d / (e + 1) * (l - f), g = [];
            for (let r = 0; r < i.length; r++) g.push(n(p, i[r], v[c]));
            for (let r = 0; r < i.length - 1; r++) D.add(u.length), u.push([
              g[r],
              g[r + 1]
            ]);
          }
        }
      }
      const x = Math.round(o.bracesMode);
      if (x > 0) {
        const e = x === 1 || x === 2 || x === 3, n = x === 1 || x === 2 || x === 4, s = v.length - 1;
        for (let c = 0; c < s; c++) {
          if (e) for (let t = 0; t < i.length; t++) {
            if (x === 1 && t !== 0 && t !== i.length - 1) continue;
            const f = Math.floor((a.length - 1) / 2);
            for (let l = 0; l < a.length - 1; l++) {
              if (x === 1 && l !== f || S(l, t) || S(l + 1, t)) continue;
              const d = m[`${l},${t},${c}`], p = m[`${l + 1},${t},${c + 1}`], g = m[`${l + 1},${t},${c}`], r = m[`${l},${t},${c + 1}`];
              d !== void 0 && p !== void 0 && u.push([
                d,
                p
              ]), g !== void 0 && r !== void 0 && u.push([
                g,
                r
              ]);
            }
          }
          if (n) for (let t = 0; t < a.length; t++) {
            if (x === 1 && t !== 0 && t !== a.length - 1) continue;
            const f = Math.floor((i.length - 1) / 2);
            for (let l = 0; l < i.length - 1; l++) {
              if (x === 1 && l !== f || S(t, l) || S(t, l + 1)) continue;
              const d = m[`${t},${l},${c}`], p = m[`${t},${l + 1},${c + 1}`], g = m[`${t},${l + 1},${c}`], r = m[`${t},${l},${c + 1}`];
              d !== void 0 && p !== void 0 && u.push([
                d,
                p
              ]), g !== void 0 && r !== void 0 && u.push([
                g,
                r
              ]);
            }
          }
        }
      }
      if (o.slabOn >= 0.5) {
        const e = /* @__PURE__ */ new Map(), n = (t, f, l) => `${Math.round(t * 1e4)},${Math.round(f * 1e4)},${Math.round(l * 1e4)}`;
        for (let t = 0; t < h.length; t++) e.set(n(h[t][0], h[t][1], h[t][2]), t);
        const s = z, c = z;
        for (let t = 1; t < v.length; t++) {
          const f = v[t];
          for (let l = 0; l < a.length - 1; l++) for (let d = 0; d < i.length - 1; d++) {
            const p = a[l], g = a[l + 1], r = i[d], pe = i[d + 1], O = [];
            for (let b = 0; b <= c; b++) {
              const M = [];
              for (let q = 0; q <= s; q++) {
                const ee = p + q / s * (g - p), te = r + b / c * (pe - r), ne = n(ee, te, f), oe = e.get(ne);
                if (oe !== void 0) M.push(oe);
                else {
                  const se = h.length;
                  h.push([
                    ee,
                    te,
                    f
                  ]), e.set(ne, se), M.push(se);
                }
              }
              O.push(M);
            }
            for (let b = 0; b < c; b++) for (let M = 0; M < s; M++) R.add(u.length), u.push([
              O[b][M],
              O[b][M + 1],
              O[b + 1][M + 1],
              O[b + 1][M]
            ]);
          }
        }
      }
      const Z = /* @__PURE__ */ new Map();
      for (let e = 0; e < i.length; e++) for (let n = 0; n < a.length; n++) S(n, e) || Z.set(m[`${n},${e},0`], [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const P = /* @__PURE__ */ new Map();
      if (o.CM !== 0) for (let e = 1; e < v.length; e++) for (let n = 0; n < i.length; n++) for (let s = 0; s < a.length; s++) {
        const c = `${s},${n},${e}`;
        m[c] !== void 0 && P.set(m[c], [
          0,
          0,
          o.CM,
          0,
          0,
          0
        ]);
      }
      if (o.Ex !== 0) {
        const e = m[`${a.length - 1 - (w > 0 ? 1 : 0)},${L > 0 ? 1 : 0},${V}`];
        if (e !== void 0) {
          const n = P.get(e) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          P.set(e, [
            n[0] + o.Ex,
            n[1],
            n[2],
            n[3],
            n[4],
            n[5]
          ]);
        }
      }
      const C = o.colSize, de = C * C, F = C * Math.pow(C, 3) / 12, re = F, he = 0.14 * Math.pow(C, 4), X = o.vigaB, Y = o.vigaH, fe = X * Y, ue = X * Math.pow(Y, 3) / 12, me = Y * Math.pow(X, 3) / 12, ge = Math.min(X, Y) ** 3 * Math.max(X, Y) * 0.21, _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
      for (let e = 0; e < u.length; e++) _.set(e, le), G.set(e, be), Q.set(e, ae), K.set(e, Me), R.has(e) ? U.set(e, o.slabT) : J.has(e) ? (N.set(e, de), H.set(e, F), A.set(e, re), j.set(e, he)) : (N.set(e, fe), H.set(e, ue), A.set(e, me), j.set(e, ge));
      $.nodes.val = h, $.elements.val = u, $.nodeInputs.val = {
        supports: Z,
        loads: P
      }, $.elementInputs.val = {
        elasticities: _,
        shearModuli: G,
        areas: N,
        momentsOfInertiaZ: H,
        momentsOfInertiaY: A,
        torsionalConstants: j,
        densities: K,
        poissonsRatios: Q,
        thicknesses: U
      };
      const W = xe(h, u, $.nodeInputs.val, $.elementInputs.val);
      $.deformOutputs.val = W, $.analyzeOutputs.val = $e(h, u, $.elementInputs.val, W), $.objects3D.val = [];
    },
    runModal(o, $, T) {
      var _a, _b;
      const B = $.nodes.val, V = $.elements.val, z = $.nodeInputs.val, E = $.elementInputs.val;
      if (!(!B.length || !V.length || !((_a = z.supports) == null ? void 0 : _a.size) || !((_b = E.densities) == null ? void 0 : _b.size))) try {
        const y = ve(B, V, z, E, 12), w = Math.round(o.nVanosX), L = Math.round(o.nVanosY), I = Math.round(o.nPisos);
        T.render(y, {
          title: `Edificio ${w}\xD7${L} vanos, ${I} pisos`,
          properties: [
            `Luz X=${o.spanX}m  Luz Y=${o.spanY}m  h piso=${o.hPiso}m  voladizos: ${o.Lvix},${o.Lvdx},${o.Lviy},${o.Lvdy}`,
            `Cols ${o.colSize}\xD7${o.colSize}m  Vigas ${o.vigaB}\xD7${o.vigaH}m  ${o.slabOn >= 0.5 ? "con losa " + o.slabT + "m  " : ""}${o.bracesMode > 0 ? "con diagonales" : ""}`
          ]
        });
        const a = y.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] f\u2081=${a.toFixed(4)} Hz, T\u2081=${(1 / a).toFixed(4)} s`);
      } catch (y) {
        console.warn("Modal edificio error:", y.message);
      }
    }
  };
});
export {
  __tla,
  Se as e
};
