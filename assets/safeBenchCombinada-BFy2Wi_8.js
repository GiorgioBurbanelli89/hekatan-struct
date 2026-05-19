import { p as j, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let T;
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
  T = {
    id: "safe-bench-zapata-combinada",
    name: "SAFE Benchmark \xB7 Zapata Combinada 4\xD72\xD70.40m, 2 cols (\u0394 +0.08%)",
    category: "Cimentaciones",
    benchmark: true,
    defaultShellResult: "bendingXX",
    availableShellResults: [
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
    build(t, s) {
      const x = t.Lz, M = t.Bz, g = t.tz, v = t.ks_tonfm3 * Y, C = t.P_tonf * Y, y = Math.round(t.nx), b = Math.round(t.ny), a = y + 1, r = b + 1, h = x / y, k = M / b, I = [
        [
          x / 4,
          M / 2
        ],
        [
          3 * x / 4,
          M / 2
        ]
      ], d = [];
      for (let n = 0; n < r; ++n) for (let e = 0; e < a; ++e) d.push([
        e * h,
        n * k
      ]);
      const c = [];
      for (let n = 0; n < b; ++n) for (let e = 0; e < y; ++e) {
        const o = n * a + e;
        c.push([
          o,
          o + 1,
          o + a + 1,
          o + a
        ]);
      }
      const f = [];
      for (let n = 0; n < r; ++n) for (let e = 0; e < a; ++e) {
        const o = e === 0 || e === a - 1, m = n === 0 || n === r - 1, l = o && m ? 0.25 : o || m ? 0.5 : 1, u = h * k * l, i = n * a + e;
        if (f.push({
          node: i,
          dof: 0,
          k: v * u
        }), o && m) {
          const p = 1e-6 * v * h * k;
          f.push({
            node: i,
            dof: 1,
            k: p
          }), f.push({
            node: i,
            dof: 2,
            k: p
          });
        }
      }
      const L = (n, e) => {
        let o = -1, m = 1 / 0;
        for (let l = 0; l < d.length; ++l) {
          const u = d[l][0] - n, i = d[l][1] - e, p = u * u + i * i;
          p < m && (m = p, o = l);
        }
        return o;
      }, R = I.map(([n, e]) => ({
        node: L(n, e),
        dof: 0,
        value: -C
      })), w = 24855e3, z = 0.2, _ = j({
        E: w,
        nu: z,
        thickness: g,
        theoryType: 0,
        bcType: "none",
        nodes: d,
        elements: c,
        bcs: [],
        pointLoads: R,
        springs: f
      }), S = d.map((n) => [
        n[0],
        n[1],
        0
      ]);
      s.nodes.val = S, s.elements.val = c, s.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, s.elementInputs.val = {
        elasticities: new Map(c.map((n, e) => [
          e,
          w
        ])),
        poissonsRatios: new Map(c.map((n, e) => [
          e,
          z
        ])),
        thicknesses: new Map(c.map((n, e) => [
          e,
          g
        ]))
      };
      const N = /* @__PURE__ */ new Map();
      for (const n of _.nodeResults) N.set(n.node, [
        0,
        0,
        n.w,
        n.bx,
        n.by,
        0
      ]);
      s.deformOutputs.val = {
        deformations: N,
        reactions: /* @__PURE__ */ new Map()
      };
      const X = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
      _.elementResults.forEach((n, e) => {
        X.set(e, [
          n.Mxx,
          n.Mxx,
          n.Mxx,
          n.Mxx
        ]), E.set(e, [
          n.Myy,
          n.Myy,
          n.Myy,
          n.Myy
        ]), B.set(e, [
          n.Mxy,
          n.Mxy,
          n.Mxy,
          n.Mxy
        ]);
        const o = Math.sqrt(n.Mxx ** 2 + n.Myy ** 2 - n.Mxx * n.Myy + 3 * n.Mxy ** 2);
        P.set(e, [
          o,
          o,
          o,
          o
        ]);
      }), s.analyzeOutputs.val = {
        bendingXX: X,
        bendingYY: E,
        bendingXY: B,
        vonMises: P
      }, s.objects3D.val = [];
    }
  };
});
export {
  __tla,
  T as s
};
