import { p as O, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let C;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let j;
  j = 9.80665;
  C = {
    id: "safe-bench-losa-cimentacion",
    name: "SAFE Benchmark \xB7 Losa Cimentaci\xF3n 6\xD78\xD70.50m, 6 cols (\u0394 +0.33%)",
    category: "Cimentaciones",
    benchmark: true,
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "displacementZ",
      "bendingXX",
      "bendingYY",
      "vonMises"
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
      }
    },
    build(l, m) {
      const h = l.Lz, f = l.Bz, z = l.tz, b = l.ks_tonfm3 * j, B = l.P_tonf * j, x = Math.round(l.nx), k = Math.round(l.ny), c = x + 1, w = k + 1, y = h / x, _ = f / k, R = [
        h / 4,
        3 * h / 4
      ], S = [
        f / 4,
        f / 2,
        3 * f / 4
      ], M = [];
      for (const e of R) for (const n of S) M.push([
        e,
        n
      ]);
      const r = [];
      for (let e = 0; e < w; ++e) for (let n = 0; n < c; ++n) r.push([
        n * y,
        e * _
      ]);
      const t = [];
      for (let e = 0; e < k; ++e) for (let n = 0; n < x; ++n) {
        const o = e * c + n;
        t.push([
          o,
          o + 1,
          o + c + 1,
          o + c
        ]);
      }
      const p = [];
      for (let e = 0; e < w; ++e) for (let n = 0; n < c; ++n) {
        const o = n === 0 || n === c - 1, a = e === 0 || e === w - 1, s = o && a ? 0.25 : o || a ? 0.5 : 1, u = y * _ * s, d = e * c + n;
        if (p.push({
          node: d,
          dof: 0,
          k: b * u
        }), o && a) {
          const i = 1e-6 * b * y * _;
          p.push({
            node: d,
            dof: 1,
            k: i
          }), p.push({
            node: d,
            dof: 2,
            k: i
          });
        }
      }
      const I = (e, n) => {
        let o = -1, a = 1 / 0;
        for (let s = 0; s < r.length; ++s) {
          const u = r[s][0] - e, d = r[s][1] - n, i = u * u + d * d;
          i < a && (a = i, o = s);
        }
        return o;
      }, A = M.map(([e, n]) => ({
        node: I(e, n),
        dof: 0,
        value: -B
      })), v = 24855e3, g = 0.2, N = O({
        E: v,
        nu: g,
        thickness: z,
        theoryType: 0,
        bcType: "none",
        nodes: r,
        elements: t,
        bcs: [],
        pointLoads: A,
        springs: p
      }), F = r.map((e) => [
        e[0],
        e[1],
        0
      ]);
      m.nodes.val = F, m.elements.val = t, m.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, m.elementInputs.val = {
        elasticities: new Map(t.map((e, n) => [
          n,
          v
        ])),
        poissonsRatios: new Map(t.map((e, n) => [
          n,
          g
        ])),
        thicknesses: new Map(t.map((e, n) => [
          n,
          z
        ]))
      };
      const P = /* @__PURE__ */ new Map();
      for (const e of N.nodeResults) P.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      m.deformOutputs.val = {
        deformations: P,
        reactions: /* @__PURE__ */ new Map()
      };
      const E = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map();
      for (let e = 0; e < t.length; ++e) {
        const n = [], o = [];
        for (const a of t[e]) {
          const s = N.nodeResults[a];
          n.push(s.w * 1e3), o.push(b * s.w);
        }
        L.set(e, n), E.set(e, o);
      }
      m.analyzeOutputs.val = {
        displacementZ: L,
        pressure: E
      };
    }
  };
});
export {
  __tla,
  C as s
};
