import { a as K } from "./analyze-DoaxThCI.js";
import { d as P, __tla as __tla_0 } from "./didacticCpp-Blq_L2Iw.js";
let Q;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  Q = {
    id: "slab-beams-columns",
    name: "Slab + Vigas + Columnas (1 piso completo)",
    category: "\u{1F3C1} Benchmarks \xB7 2\uFE0F\u20E3 \xC1reas",
    benchmark: true,
    defaultShellResult: "bendingXX",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "shearX",
      "shearY",
      "vonMises",
      "displacementZ"
    ],
    params: {
      Lx: {
        default: 6,
        min: 2,
        max: 12,
        step: 0.5,
        label: "Lx (m)"
      },
      Ly: {
        default: 4,
        min: 2,
        max: 12,
        step: 0.5,
        label: "Ly (m)"
      },
      h: {
        default: 3,
        min: 2,
        max: 6,
        step: 0.25,
        label: "h piso (m)"
      },
      t: {
        default: 0.1,
        min: 0.05,
        max: 0.4,
        step: 0.01,
        label: "t losa (m)"
      },
      bW: {
        default: 0.3,
        min: 0.15,
        max: 0.6,
        step: 0.05,
        label: "viga b (m)"
      },
      bH: {
        default: 0.5,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "viga h (m)"
      },
      cS: {
        default: 0.3,
        min: 0.2,
        max: 0.6,
        step: 0.05,
        label: "col \u25A1 (m)"
      },
      E: {
        default: 35e6,
        min: 1e6,
        max: 2e8,
        step: 1e6,
        label: "E (kN/m\xB2)"
      },
      nu: {
        default: 0.15,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "\u03BD"
      },
      q: {
        default: 10,
        min: 1,
        max: 30,
        step: 1,
        label: "q \u2193 (kN/m\xB2)"
      },
      nx: {
        default: 6,
        min: 2,
        max: 12,
        step: 1,
        label: "nx"
      },
      ny: {
        default: 4,
        min: 2,
        max: 12,
        step: 1,
        label: "ny"
      },
      nz: {
        default: 3,
        min: 1,
        max: 8,
        step: 1,
        label: "nz col (segmentos)"
      }
    },
    build(t, l) {
      const o = Math.round(t.nx), c = Math.round(t.ny), k = Math.round(t.nz), z = t.Lx / o, N = t.Ly / c, q = t.h / k, r = [], n = (e, s) => s * (o + 1) + e;
      for (let e = 0; e <= c; e++) for (let s = 0; s <= o; s++) r.push([
        s * z,
        e * N,
        t.h
      ]);
      r.length;
      const B = [
        n(0, 0),
        n(o, 0),
        n(0, c),
        n(o, c)
      ], J = [
        [
          0,
          0
        ],
        [
          t.Lx,
          0
        ],
        [
          0,
          t.Ly
        ],
        [
          t.Lx,
          t.Ly
        ]
      ], b = [
        [],
        [],
        [],
        []
      ];
      for (let e = 0; e < 4; e++) {
        b[e].push(B[e]);
        const [s, a] = J[e];
        for (let d = 1; d <= k; d++) {
          const L = t.h - d * q;
          r.push([
            s,
            a,
            L
          ]), b[e].push(r.length - 1);
        }
      }
      const p = [];
      for (let e = 0; e < c; e++) for (let s = 0; s < o; s++) p.push([
        n(s, e),
        n(s + 1, e),
        n(s + 1, e + 1),
        n(s, e + 1)
      ]);
      const m = p.length, u = [];
      for (let e = 0; e < o; e++) u.push([
        n(e, 0),
        n(e + 1, 0)
      ]);
      for (let e = 0; e < o; e++) u.push([
        n(e, c),
        n(e + 1, c)
      ]);
      for (let e = 0; e < c; e++) u.push([
        n(0, e),
        n(0, e + 1)
      ]);
      for (let e = 0; e < c; e++) u.push([
        n(o, e),
        n(o, e + 1)
      ]);
      const i = u.length, M = [];
      for (let e = 0; e < 4; e++) {
        const s = b[e];
        for (let a = 0; a < s.length - 1; a++) M.push([
          s[a],
          s[a + 1]
        ]);
      }
      const g = M.length, w = [
        ...p,
        ...u,
        ...M
      ];
      l.nodes.val = r, l.elements.val = w;
      const H = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), Y = t.E / (2 * (1 + t.nu));
      for (let e = 0; e < m; e++) H.set(e, t.t), f.set(e, t.E), h.set(e, t.nu), x.set(e, 24), X.set(e, 2);
      const F = t.bW * t.bH, j = t.bW * t.bH ** 3 / 12, C = t.bH * t.bW ** 3 / 12, T = j + C;
      for (let e = 0; e < i; e++) {
        const s = m + e;
        f.set(s, t.E), h.set(s, t.nu), x.set(s, 24), _.set(s, F), y.set(s, j), v.set(s, C), I.set(s, T), S.set(s, Y), E.set(s, [
          t.bH,
          t.bW
        ]), O.set(s, [
          0,
          0,
          1
        ]);
      }
      const Z = t.cS * t.cS, R = t.cS ** 4 / 12, D = 0.141 * t.cS ** 4;
      for (let e = 0; e < g; e++) {
        const s = m + i + e;
        f.set(s, t.E), h.set(s, t.nu), x.set(s, 24), _.set(s, Z), y.set(s, R), v.set(s, R), I.set(s, D), S.set(s, Y), E.set(s, [
          t.cS,
          t.cS
        ]);
      }
      l.elementInputs.val = {
        thicknesses: H,
        elasticities: f,
        poissonsRatios: h,
        densities: x,
        areas: _,
        momentsOfInertiaY: y,
        momentsOfInertiaZ: v,
        torsionalConstants: I,
        orientations: O,
        sections: E,
        shearModuli: S,
        plateFormulations: X
      };
      const W = /* @__PURE__ */ new Map();
      for (let e = 0; e < 4; e++) {
        const s = b[e][b[e].length - 1];
        W.set(s, [
          true,
          true,
          true,
          true,
          true,
          true
        ]);
      }
      const A = /* @__PURE__ */ new Map(), G = t.q * z * N;
      for (let e = 0; e <= c; e++) for (let s = 0; s <= o; s++) {
        const a = s === 0 || s === o, d = e === 0 || e === c, L = a && d ? 0.25 : a || d ? 0.5 : 1;
        A.set(n(s, e), [
          0,
          0,
          -G * L,
          0,
          0,
          0
        ]);
      }
      l.nodeInputs.val = {
        supports: W,
        loads: A
      };
      try {
        l.deformOutputs.val = P(r, w, l.nodeInputs.val, l.elementInputs.val), l.analyzeOutputs.val = K(r, w, l.elementInputs.val, l.deformOutputs.val);
        const e = l.deformOutputs.val.deformations;
        let s = 0;
        e == null ? void 0 : e.forEach((a) => {
          Math.abs(a[2]) > Math.abs(s) && (s = a[2]);
        }), window.__lastHekatanResult = {
          example: "slab-beams-columns",
          params: {
            ...t
          },
          n_nodes: r.length,
          n_shells: m,
          n_beams: i,
          n_cols: g,
          w_max_m: s,
          w_max_mm: s * 1e3,
          ranges: {
            shells: {
              start: 0,
              end: m - 1
            },
            beams: {
              start: m,
              end: m + i - 1
            },
            columns: {
              start: m + i,
              end: m + i + g - 1
            }
          }
        }, console.log("HEKATAN_RESULT:", JSON.stringify(window.__lastHekatanResult));
      } catch (e) {
        console.error("slab-beams-columns build error:", e == null ? void 0 : e.message);
      }
      l.objects3D.val = [];
    }
  };
});
export {
  __tla,
  Q as s
};
