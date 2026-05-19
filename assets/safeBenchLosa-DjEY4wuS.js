import { a as V } from "./analyze-DNPn2SjO.js";
import { d as $, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let te;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let D;
  D = 9.80665;
  te = {
    id: "safe-bench-losa-cimentacion",
    name: "SAFE Benchmark \xB7 Losa Cimentaci\xF3n 6\xD78\xD70.50m, 6 cols (\u0394 +0.33%)",
    category: "Cimentaciones",
    benchmark: true,
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "vonMises",
      "displacementZ"
    ],
    hasModal: false,
    guide: [
      "Caso 2 del framework Hekatan vs SAFE 20 (paridad <0.33% en w_max)",
      "Losa rectangular 6\xD78m \xD7 0.50m espesor sobre Winkler arena media (ks=2000 tonf/m\xB3)",
      "6 columnas en grilla 2\xD73 (luz 3m\xD74m), P=20 tonf c/u (P_total=120 tonf)",
      "Resultado SAFE referencia: w_max col centrales = -1.587 mm (Hekatan -1.582)",
      "El colormap muestra Uz (desplazamiento vertical), max en bajo cols 3,4 (centrales)"
    ],
    params: {
      Lz: {
        default: 6,
        min: 3,
        max: 15,
        step: 0.5,
        label: "Lz (m, eje x)"
      },
      Bz: {
        default: 8,
        min: 3,
        max: 20,
        step: 0.5,
        label: "Bz (m, eje y)"
      },
      tz: {
        default: 0.5,
        min: 0.2,
        max: 1.5,
        step: 0.05,
        label: "t (m, espesor)"
      },
      ks_tonfm3: {
        default: 2e3,
        min: 500,
        max: 1e4,
        step: 100,
        label: "ks (tonf/m\xB3)"
      },
      P_tonf: {
        default: 20,
        min: 1,
        max: 100,
        step: 1,
        label: "P por col (tonf)"
      },
      nx: {
        default: 12,
        min: 6,
        max: 24,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 16,
        min: 6,
        max: 32,
        step: 2,
        label: "ny mesh"
      },
      h_col: {
        default: 3,
        min: 0.5,
        max: 5,
        step: 0.25,
        label: "h columna 3D (m)"
      },
      b_col: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "lado columna (m)"
      }
    },
    build(a, m) {
      const x = a.Lz, u = a.Bz, T = a.tz, _ = a.ks_tonfm3 * D, H = a.P_tonf * D, k = Math.round(a.nx), z = Math.round(a.ny), l = k + 1, p = z + 1, M = x / k, g = u / z, J = a.h_col, h = a.b_col, Z = [
        x / 4,
        3 * x / 4
      ], q = [
        u / 4,
        u / 2,
        3 * u / 4
      ], w = [];
      for (const e of Z) for (const n of q) w.push([
        e,
        n
      ]);
      const c = [];
      for (let e = 0; e < p; ++e) for (let n = 0; n < l; ++n) c.push([
        n * M,
        e * g,
        0
      ]);
      const G = (e, n) => {
        let t = -1, o = 1 / 0;
        for (let s = 0; s < l * p; ++s) {
          const i = (c[s][0] - e) ** 2 + (c[s][1] - n) ** 2;
          i < o && (o = i, t = s);
        }
        return t;
      }, K = w.map(([e, n]) => G(e, n)), B = w.map(([e, n]) => (c.push([
        e,
        n,
        J
      ]), c.length - 1)), r = [], L = 0;
      for (let e = 0; e < z; ++e) for (let n = 0; n < k; ++n) {
        const t = e * l + n;
        r.push([
          t,
          t + 1,
          t + l + 1,
          t + l
        ]);
      }
      const y = r.length;
      K.forEach((e, n) => r.push([
        e,
        B[n]
      ]));
      const b = [];
      for (let e = 0; e < p; ++e) for (let n = 0; n < l; ++n) {
        const t = n === 0 || n === l - 1, o = e === 0 || e === p - 1, s = t && o ? 0.25 : t || o ? 0.5 : 1, i = M * g * s, f = e * l + n;
        if (b.push({
          node: f,
          dof: 2,
          k: _ * i
        }), t && o) {
          const d = 1e-6 * _ * M * g;
          b.push({
            node: f,
            dof: 3,
            k: d
          }), b.push({
            node: f,
            dof: 4,
            k: d
          });
        }
      }
      const S = /* @__PURE__ */ new Map();
      B.forEach((e) => S.set(e, [
        0,
        0,
        -H,
        0,
        0,
        0
      ]));
      const v = 24855e3, I = 0.2, U = v / (2 * (1 + I)), W = h * h, N = h ** 4 / 12, Q = 0.141 * h ** 4, E = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      for (let e = L; e < y; ++e) E.set(e, v), P.set(e, I), O.set(e, T);
      for (let e = y; e < r.length; ++e) E.set(e, v), P.set(e, I), A.set(e, W), C.set(e, N), Y.set(e, N), F.set(e, U), R.set(e, Q);
      const X = {
        supports: /* @__PURE__ */ new Map(),
        loads: S
      }, j = {
        elasticities: E,
        poissonsRatios: P,
        thicknesses: O,
        areas: A,
        momentsOfInertiaZ: C,
        momentsOfInertiaY: Y,
        shearModuli: F,
        torsionalConstants: R
      };
      m.nodes.val = c, m.elements.val = r, m.nodeInputs.val = X, m.elementInputs.val = j;
      try {
        const e = $(c, r, X, j, b);
        m.deformOutputs.val = e;
        const n = V(c, r, j, e), t = /* @__PURE__ */ new Map();
        for (let o = L; o < y; ++o) {
          const s = r[o];
          if (s.length !== 4) continue;
          const i = s.map((f) => {
            var _a;
            const d = (_a = e.deformations) == null ? void 0 : _a.get(f);
            return d ? _ * d[2] : 0;
          });
          t.set(o, i);
        }
        n.pressure = t, m.analyzeOutputs.val = n;
      } catch (e) {
        console.error("safe-bench-losa solver error:", e);
      }
      m.objects3D.val = [];
    }
  };
});
export {
  __tla,
  te as s
};
