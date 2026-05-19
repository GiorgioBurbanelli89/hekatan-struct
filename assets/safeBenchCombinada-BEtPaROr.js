import { b as O, c as T, E as A, L as F, M as Z, d as G } from "./Text-Dbk7DZ4h.js";
import { p as q, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let Q;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Y = 9.80665;
  function H(o, a, c, i) {
    const f = new O(i, i, c), r = new T(new A(f), new F({
      color: 8421504,
      linewidth: 2
    }));
    r.position.set(o, a, c / 2);
    const x = new Z(f, new G({
      color: 10526880,
      transparent: true,
      opacity: 0.25
    }));
    return x.position.set(o, a, c / 2), [
      x,
      r
    ];
  }
  Q = {
    id: "safe-bench-zapata-combinada",
    name: "SAFE Benchmark \xB7 Zapata Combinada 4\xD72\xD70.40m, 2 cols (\u0394 +0.08%)",
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
      "Caso 3 del framework Hekatan vs SAFE \u2014 paridad <0.08%",
      "Zapata rectangular 4\xD72m \xD7 0.40m espesor sobre Winkler arena media",
      "2 columnas alineadas en (1.0, 1.0) y (3.0, 1.0), P=30 tonf c/u",
      "Caso t\xEDpico: medianera o muro de propiedad"
    ],
    params: {
      Lz: {
        default: 4,
        min: 2,
        max: 8,
        step: 0.25,
        label: "Lz (m)"
      },
      Bz: {
        default: 2,
        min: 1,
        max: 5,
        step: 0.25,
        label: "Bz (m)"
      },
      tz: {
        default: 0.4,
        min: 0.2,
        max: 1,
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
        default: 30,
        min: 1,
        max: 100,
        step: 1,
        label: "P por col (tonf)"
      },
      nx: {
        default: 16,
        min: 8,
        max: 32,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 8,
        min: 4,
        max: 16,
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
    build(o, a) {
      const c = o.Lz, i = o.Bz, f = o.tz, r = o.ks_tonfm3 * Y, x = o.P_tonf * Y, h = Math.round(o.nx), w = Math.round(o.ny), m = h + 1, k = w + 1, _ = c / h, g = i / w, z = [
        [
          c / 4,
          i / 2
        ],
        [
          3 * c / 4,
          i / 2
        ]
      ], p = [];
      for (let e = 0; e < k; ++e) for (let n = 0; n < m; ++n) p.push([
        n * _,
        e * g
      ]);
      const d = [];
      for (let e = 0; e < w; ++e) for (let n = 0; n < h; ++n) {
        const s = e * m + n;
        d.push([
          s,
          s + 1,
          s + m + 1,
          s + m
        ]);
      }
      const b = [];
      for (let e = 0; e < k; ++e) for (let n = 0; n < m; ++n) {
        const s = n === 0 || n === m - 1, t = e === 0 || e === k - 1, l = s && t ? 0.25 : s || t ? 0.5 : 1, y = _ * g * l, u = e * m + n;
        if (b.push({
          node: u,
          dof: 0,
          k: r * y
        }), s && t) {
          const M = 1e-6 * r * _ * g;
          b.push({
            node: u,
            dof: 1,
            k: M
          }), b.push({
            node: u,
            dof: 2,
            k: M
          });
        }
      }
      const j = (e, n) => {
        let s = -1, t = 1 / 0;
        for (let l = 0; l < p.length; ++l) {
          const y = p[l][0] - e, u = p[l][1] - n, M = y * y + u * u;
          M < t && (t = M, s = l);
        }
        return s;
      }, D = z.map(([e, n]) => ({
        node: j(e, n),
        dof: 0,
        value: -x
      })), B = 24855e3, E = 0.2, v = q({
        E: B,
        nu: E,
        thickness: f,
        theoryType: 0,
        bcType: "none",
        nodes: p,
        elements: d,
        bcs: [],
        pointLoads: D,
        springs: b
      }), I = p.map((e) => [
        e[0],
        e[1],
        0
      ]);
      a.nodes.val = I, a.elements.val = d, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, a.elementInputs.val = {
        elasticities: new Map(d.map((e, n) => [
          n,
          B
        ])),
        poissonsRatios: new Map(d.map((e, n) => [
          n,
          E
        ])),
        thicknesses: new Map(d.map((e, n) => [
          n,
          f
        ]))
      };
      const L = /* @__PURE__ */ new Map();
      for (const e of v.nodeResults) L.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      a.deformOutputs.val = {
        deformations: L,
        reactions: /* @__PURE__ */ new Map()
      };
      const N = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
      d.forEach((e, n) => {
        N.set(n, e.map((l) => r * v.nodeResults[l].w));
        const s = v.elementResults[n];
        C.set(n, [
          s.Mxx,
          s.Mxx,
          s.Mxx,
          s.Mxx
        ]), P.set(n, [
          s.Myy,
          s.Myy,
          s.Myy,
          s.Myy
        ]), R.set(n, [
          s.Mxy,
          s.Mxy,
          s.Mxy,
          s.Mxy
        ]);
        const t = Math.sqrt(s.Mxx ** 2 + s.Myy ** 2 - s.Mxx * s.Myy + 3 * s.Mxy ** 2);
        S.set(n, [
          t,
          t,
          t,
          t
        ]);
      }), a.analyzeOutputs.val = {
        pressure: N,
        bendingXX: C,
        bendingYY: P,
        bendingXY: R,
        vonMises: S
      };
      const X = [];
      for (const [e, n] of z) X.push(...H(e, n, o.h_col, o.b_col));
      a.objects3D.val = X;
    }
  };
});
export {
  __tla,
  Q as s
};
