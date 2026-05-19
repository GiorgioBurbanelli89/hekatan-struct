import { b as F, E as T, c as O, L as V, M as G, d as H } from "./Text-Dbk7DZ4h.js";
import { p as q, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let Z;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const I = 9.80665;
  function J(s, a, m, u) {
    const p = new F(u, u, m), f = new T(p), b = new O(f, new V({
      color: 8421504,
      linewidth: 2
    }));
    b.position.set(s, a, m / 2);
    const x = new G(p, new H({
      color: 10526880,
      transparent: true,
      opacity: 0.25
    }));
    return x.position.set(s, a, m / 2), [
      x,
      b
    ];
  }
  Z = {
    id: "safe-bench-viga-cimentacion",
    name: "SAFE Benchmark \xB7 Viga Cimentaci\xF3n 8\xD71\xD70.50m, 4 cols (\u0394 +0.01%)",
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
      "Caso 5 del framework Hekatan vs SAFE \u2014 PARIDAD CASI PERFECTA <0.01%",
      "Viga corrida 8\xD71m \xD7 0.50m espesor, 4 columnas alineadas en eje x",
      "Cargas: 4 cols \xD7 20 tonf en (1, 0.5), (3, 0.5), (5, 0.5), (7, 0.5)",
      "Resultado: w_max bajo col interiores -5.11 mm (Hekatan = SAFE)",
      "Comportamiento cuasi-r\xEDgido: ratio w_max/w_teorico \u2248 1.02"
    ],
    params: {
      Lz: {
        default: 8,
        min: 4,
        max: 20,
        step: 0.5,
        label: "Lz longitudinal (m)"
      },
      Bz: {
        default: 1,
        min: 0.5,
        max: 3,
        step: 0.25,
        label: "Bz ancho (m)"
      },
      tz: {
        default: 0.5,
        min: 0.2,
        max: 1.5,
        step: 0.05,
        label: "t espesor (m)"
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
      nCols: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "N columnas"
      },
      nx: {
        default: 32,
        min: 8,
        max: 64,
        step: 4,
        label: "nx mesh (longitudinal)"
      },
      ny: {
        default: 4,
        min: 2,
        max: 10,
        step: 1,
        label: "ny mesh (transversal)"
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
    build(s, a) {
      const m = s.Lz, u = s.Bz, p = s.tz, f = s.ks_tonfm3 * I, b = s.P_tonf * I, x = Math.round(s.nCols), w = Math.round(s.nx), g = Math.round(s.ny), c = w + 1, _ = g + 1, k = m / w, v = u / g, z = [];
      for (let e = 1; e <= x; ++e) {
        const n = e * m / (x + 1);
        z.push([
          n,
          u / 2
        ]);
      }
      const r = [];
      for (let e = 0; e < _; ++e) for (let n = 0; n < c; ++n) r.push([
        n * k,
        e * v
      ]);
      const i = [];
      for (let e = 0; e < g; ++e) for (let n = 0; n < w; ++n) {
        const o = e * c + n;
        i.push([
          o,
          o + 1,
          o + c + 1,
          o + c
        ]);
      }
      const y = [];
      for (let e = 0; e < _; ++e) for (let n = 0; n < c; ++n) {
        const o = n === 0 || n === c - 1, t = e === 0 || e === _ - 1, l = o && t ? 0.25 : o || t ? 0.5 : 1, h = k * v * l, d = e * c + n;
        if (y.push({
          node: d,
          dof: 0,
          k: f * h
        }), o && t) {
          const M = 1e-6 * f * k * v;
          y.push({
            node: d,
            dof: 1,
            k: M
          }), y.push({
            node: d,
            dof: 2,
            k: M
          });
        }
      }
      const P = (e, n) => {
        let o = -1, t = 1 / 0;
        for (let l = 0; l < r.length; ++l) {
          const h = r[l][0] - e, d = r[l][1] - n, M = h * h + d * d;
          M < t && (t = M, o = l);
        }
        return o;
      }, X = z.map(([e, n]) => ({
        node: P(e, n),
        dof: 0,
        value: -b
      })), C = 24855e3, B = 0.2, E = q({
        E: C,
        nu: B,
        thickness: p,
        theoryType: 0,
        bcType: "none",
        nodes: r,
        elements: i,
        bcs: [],
        pointLoads: X,
        springs: y
      }), Y = r.map((e) => [
        e[0],
        e[1],
        0
      ]);
      a.nodes.val = Y, a.elements.val = i, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, a.elementInputs.val = {
        elasticities: new Map(i.map((e, n) => [
          n,
          C
        ])),
        poissonsRatios: new Map(i.map((e, n) => [
          n,
          B
        ])),
        thicknesses: new Map(i.map((e, n) => [
          n,
          p
        ]))
      };
      const N = /* @__PURE__ */ new Map();
      for (const e of E.nodeResults) N.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      a.deformOutputs.val = {
        deformations: N,
        reactions: /* @__PURE__ */ new Map()
      };
      const R = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
      i.forEach((e, n) => {
        R.set(n, e.map((l) => f * E.nodeResults[l].w));
        const o = E.elementResults[n];
        A.set(n, [
          o.Mxx,
          o.Mxx,
          o.Mxx,
          o.Mxx
        ]), L.set(n, [
          o.Myy,
          o.Myy,
          o.Myy,
          o.Myy
        ]), S.set(n, [
          o.Mxy,
          o.Mxy,
          o.Mxy,
          o.Mxy
        ]);
        const t = Math.sqrt(o.Mxx ** 2 + o.Myy ** 2 - o.Mxx * o.Myy + 3 * o.Mxy ** 2);
        j.set(n, [
          t,
          t,
          t,
          t
        ]);
      }), a.analyzeOutputs.val = {
        pressure: R,
        bendingXX: A,
        bendingYY: L,
        bendingXY: S,
        vonMises: j
      };
      const D = [];
      for (const [e, n] of z) D.push(...J(e, n, s.h_col, s.b_col));
      a.objects3D.val = D;
    }
  };
});
export {
  __tla,
  Z as s
};
