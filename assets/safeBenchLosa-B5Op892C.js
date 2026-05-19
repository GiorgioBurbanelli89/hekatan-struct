import { p as T, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let D;
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
  D = {
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
      }
    },
    build(a, l) {
      const x = a.Lz, f = a.Bz, v = a.tz, M = a.ks_tonfm3 * Y, B = a.P_tonf * Y, y = Math.round(a.nx), b = Math.round(a.ny), c = y + 1, h = b + 1, k = x / y, w = f / b, S = [
        x / 4,
        3 * x / 4
      ], I = [
        f / 4,
        f / 2,
        3 * f / 4
      ], z = [];
      for (const e of S) for (const n of I) z.push([
        e,
        n
      ]);
      const r = [];
      for (let e = 0; e < h; ++e) for (let n = 0; n < c; ++n) r.push([
        n * k,
        e * w
      ]);
      const m = [];
      for (let e = 0; e < b; ++e) for (let n = 0; n < y; ++n) {
        const o = e * c + n;
        m.push([
          o,
          o + 1,
          o + c + 1,
          o + c
        ]);
      }
      const u = [];
      for (let e = 0; e < h; ++e) for (let n = 0; n < c; ++n) {
        const o = n === 0 || n === c - 1, s = e === 0 || e === h - 1, t = o && s ? 0.25 : o || s ? 0.5 : 1, d = k * w * t, i = e * c + n;
        if (u.push({
          node: i,
          dof: 0,
          k: M * d
        }), o && s) {
          const p = 1e-6 * M * k * w;
          u.push({
            node: i,
            dof: 1,
            k: p
          }), u.push({
            node: i,
            dof: 2,
            k: p
          });
        }
      }
      const A = (e, n) => {
        let o = -1, s = 1 / 0;
        for (let t = 0; t < r.length; ++t) {
          const d = r[t][0] - e, i = r[t][1] - n, p = d * d + i * i;
          p < s && (s = p, o = t);
        }
        return o;
      }, F = z.map(([e, n]) => ({
        node: A(e, n),
        dof: 0,
        value: -B
      })), g = 24855e3, E = 0.2, _ = T({
        E: g,
        nu: E,
        thickness: v,
        theoryType: 0,
        bcType: "none",
        nodes: r,
        elements: m,
        bcs: [],
        pointLoads: F,
        springs: u
      }), O = r.map((e) => [
        e[0],
        e[1],
        0
      ]);
      l.nodes.val = O, l.elements.val = m, l.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, l.elementInputs.val = {
        elasticities: new Map(m.map((e, n) => [
          n,
          g
        ])),
        poissonsRatios: new Map(m.map((e, n) => [
          n,
          E
        ])),
        thicknesses: new Map(m.map((e, n) => [
          n,
          v
        ]))
      };
      const N = /* @__PURE__ */ new Map();
      for (const e of _.nodeResults) N.set(e.node, [
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
      const L = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
      m.forEach((e, n) => {
        const o = e.map((d) => M * _.nodeResults[d].w);
        L.set(n, o);
        const s = _.elementResults[n];
        P.set(n, [
          s.Mxx,
          s.Mxx,
          s.Mxx,
          s.Mxx
        ]), j.set(n, [
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
        pressure: L,
        bendingXX: P,
        bendingYY: j,
        bendingXY: R,
        vonMises: X
      }, l.objects3D.val = [];
    }
  };
});
export {
  __tla,
  D as s
};
