import { b as O, L as T, E as A, a as D } from "./theme-Co6w-pfC.js";
import { p as Z, __tla as __tla_0 } from "./didacticCpp-PqvqKlgs.js";
let J;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Y = 9.80665;
  function G(t, a, m, p) {
    const x = new O(p, p, m), i = new T(new A(x), new D({
      color: 8421504,
      linewidth: 2
    }));
    return i.position.set(t, a, m / 2), [
      i
    ];
  }
  J = {
    id: "safe-bench-zapata-combinada",
    name: "SAFE Benchmark \xB7 Zapata Combinada 4\xD72\xD70.40m, 2 cols (\u0394 +0.08%)",
    category: "2\uFE0F\u20E3 Shells \xB7 \u{1F9F0} Cimentaciones",
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
      h_ped: {
        default: 0.5,
        min: 0.2,
        max: 1.5,
        step: 0.05,
        label: "Hp pedestal (m)"
      },
      b_ped: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "lado pedestal (m)"
      }
    },
    build(t, a) {
      const m = t.Lz, p = t.Bz, x = t.tz, i = t.ks_tonfm3 * Y, j = t.P_tonf * Y, y = Math.round(t.nx), h = Math.round(t.ny), d = y + 1, w = h + 1, k = m / y, _ = p / h, v = [
        [
          m / 4,
          p / 2
        ],
        [
          3 * m / 4,
          p / 2
        ]
      ], r = [];
      for (let n = 0; n < w; ++n) for (let e = 0; e < d; ++e) r.push([
        e * k,
        n * _
      ]);
      const c = [];
      for (let n = 0; n < h; ++n) for (let e = 0; e < y; ++e) {
        const s = n * d + e;
        c.push([
          s,
          s + 1,
          s + d + 1,
          s + d
        ]);
      }
      const b = [];
      for (let n = 0; n < w; ++n) for (let e = 0; e < d; ++e) {
        const s = e === 0 || e === d - 1, o = n === 0 || n === w - 1, l = s && o ? 0.25 : s || o ? 0.5 : 1, M = k * _ * l, u = n * d + e;
        if (b.push({
          node: u,
          dof: 0,
          k: i * M
        }), s && o) {
          const f = 1e-6 * i * k * _;
          b.push({
            node: u,
            dof: 1,
            k: f
          }), b.push({
            node: u,
            dof: 2,
            k: f
          });
        }
      }
      const C = (n, e) => {
        let s = -1, o = 1 / 0;
        for (let l = 0; l < r.length; ++l) {
          const M = r[l][0] - n, u = r[l][1] - e, f = M * M + u * u;
          f < o && (o = f, s = l);
        }
        return s;
      }, I = v.map(([n, e]) => ({
        node: C(n, e),
        dof: 0,
        value: -j
      })), z = 24855e3, E = 0.2, g = Z({
        E: z,
        nu: E,
        thickness: x,
        theoryType: 0,
        bcType: "none",
        nodes: r,
        elements: c,
        bcs: [],
        pointLoads: I,
        springs: b
      }), F = r.map((n) => [
        n[0],
        n[1],
        0
      ]);
      a.nodes.val = F, a.elements.val = c, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, a.elementInputs.val = {
        elasticities: new Map(c.map((n, e) => [
          e,
          z
        ])),
        poissonsRatios: new Map(c.map((n, e) => [
          e,
          E
        ])),
        thicknesses: new Map(c.map((n, e) => [
          e,
          x
        ]))
      };
      const B = /* @__PURE__ */ new Map();
      g.nodeResults.forEach((n, e) => B.set(e, [
        0,
        0,
        n.w,
        n.bx,
        n.by,
        0
      ])), a.deformOutputs.val = {
        deformations: B,
        reactions: /* @__PURE__ */ new Map()
      };
      const L = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      c.forEach((n, e) => {
        L.set(e, n.map((l) => i * g.nodeResults[l].w));
        const s = g.elementResults[e];
        N.set(e, [
          s.Mxx,
          s.Mxx,
          s.Mxx,
          s.Mxx
        ]), P.set(e, [
          s.Myy,
          s.Myy,
          s.Myy,
          s.Myy
        ]), S.set(e, [
          s.Mxy,
          s.Mxy,
          s.Mxy,
          s.Mxy
        ]);
        const o = Math.sqrt(s.Mxx ** 2 + s.Myy ** 2 - s.Mxx * s.Myy + 3 * s.Mxy ** 2);
        R.set(e, [
          o,
          o,
          o,
          o
        ]);
      }), a.analyzeOutputs.val = {
        pressure: L,
        bendingXX: N,
        bendingYY: P,
        bendingXY: S,
        vonMises: R
      };
      const X = [];
      for (const [n, e] of v) X.push(...G(n, e, t.h_ped, t.b_ped));
      a.objects3D.val = X;
    }
  };
});
export {
  __tla,
  J as s
};
