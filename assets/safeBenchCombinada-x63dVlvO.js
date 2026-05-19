import { p as O, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let A;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let Y;
  Y = 9.80665;
  A = {
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
      }
    },
    build(a, l) {
      const u = a.Lz, M = a.Bz, g = a.tz, x = a.ks_tonfm3 * Y, C = a.P_tonf * Y, y = Math.round(a.nx), b = Math.round(a.ny), d = y + 1, h = b + 1, k = u / y, w = M / b, I = [
        [
          u / 4,
          M / 2
        ],
        [
          3 * u / 4,
          M / 2
        ]
      ], m = [];
      for (let e = 0; e < h; ++e) for (let n = 0; n < d; ++n) m.push([
        n * k,
        e * w
      ]);
      const c = [];
      for (let e = 0; e < b; ++e) for (let n = 0; n < y; ++n) {
        const s = e * d + n;
        c.push([
          s,
          s + 1,
          s + d + 1,
          s + d
        ]);
      }
      const i = [];
      for (let e = 0; e < h; ++e) for (let n = 0; n < d; ++n) {
        const s = n === 0 || n === d - 1, t = e === 0 || e === h - 1, o = s && t ? 0.25 : s || t ? 0.5 : 1, f = k * w * o, p = e * d + n;
        if (i.push({
          node: p,
          dof: 0,
          k: x * f
        }), s && t) {
          const r = 1e-6 * x * k * w;
          i.push({
            node: p,
            dof: 1,
            k: r
          }), i.push({
            node: p,
            dof: 2,
            k: r
          });
        }
      }
      const L = (e, n) => {
        let s = -1, t = 1 / 0;
        for (let o = 0; o < m.length; ++o) {
          const f = m[o][0] - e, p = m[o][1] - n, r = f * f + p * p;
          r < t && (t = r, s = o);
        }
        return s;
      }, S = I.map(([e, n]) => ({
        node: L(e, n),
        dof: 0,
        value: -C
      })), z = 24855e3, _ = 0.2, v = O({
        E: z,
        nu: _,
        thickness: g,
        theoryType: 0,
        bcType: "none",
        nodes: m,
        elements: c,
        bcs: [],
        pointLoads: S,
        springs: i
      }), j = m.map((e) => [
        e[0],
        e[1],
        0
      ]);
      l.nodes.val = j, l.elements.val = c, l.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, l.elementInputs.val = {
        elasticities: new Map(c.map((e, n) => [
          n,
          z
        ])),
        poissonsRatios: new Map(c.map((e, n) => [
          n,
          _
        ])),
        thicknesses: new Map(c.map((e, n) => [
          n,
          g
        ]))
      };
      const N = /* @__PURE__ */ new Map();
      for (const e of v.nodeResults) N.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      l.deformOutputs.val = {
        deformations: N,
        reactions: /* @__PURE__ */ new Map()
      };
      const E = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
      c.forEach((e, n) => {
        E.set(n, e.map((o) => x * v.nodeResults[o].w));
        const s = v.elementResults[n];
        B.set(n, [
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
        X.set(n, [
          t,
          t,
          t,
          t
        ]);
      }), l.analyzeOutputs.val = {
        pressure: E,
        bendingXX: B,
        bendingYY: P,
        bendingXY: R,
        vonMises: X
      }, l.objects3D.val = [];
    }
  };
});
export {
  __tla,
  A as s
};
