import { a as V, g as F, b as P } from "./analyze-ClLKGn9k.js";
import { _ as R, d as C, m as Y, s as A, p as D, a as X, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let Z;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let G, h;
  G = Object.freeze(Object.defineProperty({
    __proto__: null,
    analyze: V,
    deform: C,
    didacticSolveCpp: X,
    getLocalStiffnessMatrix: F,
    getTransformationMatrix: P,
    modalAnalysis: Y,
    plateQ4Solve: D,
    slopeSRM: A
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  h = 24;
  Z = {
    id: "membrana-csi",
    name: "Membrana CSI (Shell-Membrane + tri/trap load)",
    category: "Placas",
    defaultShellResult: "vonMises",
    availableShellResults: [
      "vonMises",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "displacementX",
      "displacementY",
      "displacementZ"
    ],
    hasModal: true,
    params: {
      Lx: {
        default: 5,
        min: 2,
        max: 10,
        step: 0.25,
        label: "Lx (m)"
      },
      Ly: {
        default: 4,
        min: 2,
        max: 10,
        step: 0.25,
        label: "Ly (m)"
      },
      t: {
        default: 0.15,
        min: 0.08,
        max: 0.3,
        step: 0.01,
        label: "t losa (m)"
      },
      E: {
        default: 25e6,
        min: 5e6,
        max: 2e8,
        step: 1e6,
        label: "E (kN/m\xB2)"
      },
      nu: {
        default: 0.2,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "\u03BD"
      },
      q: {
        default: 8,
        min: 1,
        max: 30,
        step: 1,
        label: "q carga \u2193 (kN/m\xB2)"
      },
      bViga: {
        default: 0.3,
        min: 0.2,
        max: 0.6,
        step: 0.05,
        label: "b viga (m)"
      },
      hViga: {
        default: 0.5,
        min: 0.3,
        max: 0.9,
        step: 0.05,
        label: "h viga (m)"
      },
      nx: {
        default: 10,
        min: 4,
        max: 20,
        step: 1,
        label: "nx elem X"
      },
      ny: {
        default: 8,
        min: 4,
        max: 20,
        step: 1,
        label: "ny elem Y"
      }
    },
    build(a, o) {
      const t = Math.round(a.nx), s = Math.round(a.ny), m = a.Lx / t, g = a.Ly / s, i = [];
      for (let e = 0; e <= s; e++) for (let n = 0; n <= t; n++) i.push([
        n * m,
        e * g,
        0
      ]);
      const l = [];
      for (let e = 0; e < s; e++) for (let n = 0; n < t; n++) {
        const r = e * (t + 1) + n;
        l.push([
          r,
          r + 1,
          r + 1 + (t + 1),
          r + (t + 1)
        ]);
      }
      const M = l.length;
      for (let e = 0; e < t; e++) l.push([
        e,
        e + 1
      ]);
      const c = s * (t + 1);
      for (let e = 0; e < t; e++) l.push([
        c + e,
        c + e + 1
      ]);
      for (let e = 0; e < s; e++) l.push([
        e * (t + 1),
        (e + 1) * (t + 1)
      ]);
      for (let e = 0; e < s; e++) l.push([
        e * (t + 1) + t,
        (e + 1) * (t + 1) + t
      ]);
      const d = /* @__PURE__ */ new Map();
      [
        0,
        t,
        c,
        c + t
      ].forEach((e) => d.set(e, [
        true,
        true,
        true,
        false,
        false,
        false
      ]));
      const u = /* @__PURE__ */ new Map();
      for (let e = 0; e <= s; e++) for (let n = 0; n <= t; n++) {
        const r = e * (t + 1) + n, k = (n === 0 || n === t) && (e === 0 || e === s) ? 0.25 : n === 0 || n === t || e === 0 || e === s ? 0.5 : 1, z = -a.q * m * g * k;
        u.set(r, [
          0,
          0,
          z,
          0,
          0,
          0
        ]);
      }
      const v = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), E = a.E / (2 * (1 + a.nu));
      for (let e = 0; e < M; e++) v.set(e, a.t), f.set(e, a.E), x.set(e, a.nu), b.set(e, h);
      const N = a.bViga * a.hViga, O = a.bViga * a.hViga ** 3 / 12, j = a.hViga * a.bViga ** 3 / 12, q = 0.28 * a.bViga * a.hViga ** 3;
      for (let e = M; e < l.length; e++) f.set(e, a.E), x.set(e, a.nu), I.set(e, E), p.set(e, N), y.set(e, O), L.set(e, j), _.set(e, q), b.set(e, h), w.set(e, {
        type: "rect",
        b: a.bViga,
        h: a.hViga
      });
      o.nodes.val = i, o.elements.val = l, o.nodeInputs.val = {
        supports: d,
        loads: u
      }, o.elementInputs.val = {
        elasticities: f,
        poissonsRatios: x,
        shearModuli: I,
        areas: p,
        momentsOfInertiaZ: y,
        momentsOfInertiaY: L,
        torsionalConstants: _,
        thicknesses: v,
        densities: b,
        sectionShapes: w
      };
      try {
        o.deformOutputs.val = C(i, l, {
          supports: d,
          loads: u
        }, o.elementInputs.val), o.analyzeOutputs.val = V(i, l, o.elementInputs.val, o.deformOutputs.val);
        const e = a.Lx < a.Ly, n = a.q * Math.min(a.Lx, a.Ly) / 2, r = a.q * Math.min(a.Lx, a.Ly) / 2, S = Math.max(...[
          ...o.deformOutputs.val.deformations.values()
        ].map(($) => Math.abs($[2])));
        console.log(`[Membrana CSI] Losa ${a.Lx}\xD7${a.Ly}m t=${a.t}m q=${a.q} kN/m\xB2
  Shell Q4 membrana con drilling DOF (Rz activo)
  CSI apportionment by area: q \xD7 A_trib a cada nodo
  Distribuci\xF3n emergente a vigas perimetrales:
    Vigas ${e ? "cortas" : "largas"} (lado ${Math.min(a.Lx, a.Ly)}m): trapecio w_max=${n.toFixed(2)} kN/m
    Vigas ${e ? "largas" : "cortas"} (lado ${Math.max(a.Lx, a.Ly)}m): tri\xE1ngulo w_max=${r.toFixed(2)} kN/m
  \u03B4_max = ${(S * 1e3).toFixed(3)} mm`);
      } catch (e) {
        console.error("Membrana CSI solver error:", e);
      }
      o.objects3D.val = [];
    },
    runModal: function(a, o, t) {
      R(async () => {
        const { modalAnalysis: s } = await Promise.resolve().then(() => G);
        return {
          modalAnalysis: s
        };
      }, void 0).then(({ modalAnalysis: s }) => {
        try {
          const m = s(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, 12);
          t.render(m, {
            title: `Membrana CSI ${a.Lx}\xD7${a.Ly}m t=${a.t}m`,
            properties: [
              `E=${(a.E / 1e6).toFixed(1)} GPa  \u03BD=${a.nu}  \u03C1=${h} kN/m\xB3`
            ]
          });
        } catch (m) {
          console.warn("Modal membrana CSI error:", m.message);
        }
      });
    }
  };
});
export {
  __tla,
  Z as m
};
