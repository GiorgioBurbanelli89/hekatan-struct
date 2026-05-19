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
  let Y;
  Y = 9.80665;
  C = {
    id: "safe-bench-losa-cimentacion",
    name: "SAFE Benchmark \xB7 Losa Cimentaci\xF3n 6\xD78\xD70.50m, 6 cols (\u0394 +0.33%)",
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
    build(s, t) {
      const r = s.Lz, p = s.Bz, _ = s.tz, g = s.ks_tonfm3 * Y, B = s.P_tonf * Y, M = Math.round(s.nx), y = Math.round(s.ny), a = M + 1, b = y + 1, h = r / M, k = p / y, R = [
        r / 4,
        3 * r / 4
      ], S = [
        p / 4,
        p / 2,
        3 * p / 4
      ], v = [];
      for (const n of R) for (const e of S) v.push([
        n,
        e
      ]);
      const c = [];
      for (let n = 0; n < b; ++n) for (let e = 0; e < a; ++e) c.push([
        e * h,
        n * k
      ]);
      const m = [];
      for (let n = 0; n < y; ++n) for (let e = 0; e < M; ++e) {
        const o = n * a + e;
        m.push([
          o,
          o + 1,
          o + a + 1,
          o + a
        ]);
      }
      const u = [];
      for (let n = 0; n < b; ++n) for (let e = 0; e < a; ++e) {
        const o = e === 0 || e === a - 1, d = n === 0 || n === b - 1, l = o && d ? 0.25 : o || d ? 0.5 : 1, x = h * k * l, i = n * a + e;
        if (u.push({
          node: i,
          dof: 0,
          k: g * x
        }), o && d) {
          const f = 1e-6 * g * h * k;
          u.push({
            node: i,
            dof: 1,
            k: f
          }), u.push({
            node: i,
            dof: 2,
            k: f
          });
        }
      }
      const I = (n, e) => {
        let o = -1, d = 1 / 0;
        for (let l = 0; l < c.length; ++l) {
          const x = c[l][0] - n, i = c[l][1] - e, f = x * x + i * i;
          f < d && (d = f, o = l);
        }
        return o;
      }, A = v.map(([n, e]) => ({
        node: I(n, e),
        dof: 0,
        value: -B
      })), w = 24855e3, z = 0.2, E = O({
        E: w,
        nu: z,
        thickness: _,
        theoryType: 0,
        bcType: "none",
        nodes: c,
        elements: m,
        bcs: [],
        pointLoads: A,
        springs: u
      }), F = c.map((n) => [
        n[0],
        n[1],
        0
      ]);
      t.nodes.val = F, t.elements.val = m, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, t.elementInputs.val = {
        elasticities: new Map(m.map((n, e) => [
          e,
          w
        ])),
        poissonsRatios: new Map(m.map((n, e) => [
          e,
          z
        ])),
        thicknesses: new Map(m.map((n, e) => [
          e,
          _
        ]))
      };
      const X = /* @__PURE__ */ new Map();
      for (const n of E.nodeResults) X.set(n.node, [
        0,
        0,
        n.w,
        n.bx,
        n.by,
        0
      ]);
      t.deformOutputs.val = {
        deformations: X,
        reactions: /* @__PURE__ */ new Map()
      };
      const L = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
      E.elementResults.forEach((n, e) => {
        L.set(e, [
          n.Mxx,
          n.Mxx,
          n.Mxx,
          n.Mxx
        ]), N.set(e, [
          n.Myy,
          n.Myy,
          n.Myy,
          n.Myy
        ]), j.set(e, [
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
      }), t.analyzeOutputs.val = {
        bendingXX: L,
        bendingYY: N,
        bendingXY: j,
        vonMises: P
      }, t.objects3D.val = [];
    }
  };
});
export {
  __tla,
  C as s
};
