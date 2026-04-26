const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CQ6xsyEv.js","assets/analyze-BydHtRcI.js","assets/pureFunctionsAny.generated-DeJSBP3k.js","assets/didacticCpp-B5f-GyHC.js","assets/deform-CGyu4ATa.js","assets/planeQ4-DsCzHfbV.js","assets/mitc3-2FJr2z_r.js","assets/fiberSectionCft-DmBufNsV.js","assets/menegottoPinto-B-C2cxus.js"])))=>i.map(i=>d[i]);
import { _ as j, __tla as __tla_0 } from "./deform-CGyu4ATa.js";
import { a as z } from "./analyze-BydHtRcI.js";
import { d as F, __tla as __tla_1 } from "./didacticCpp-B5f-GyHC.js";
let A;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  let b;
  b = 24;
  A = {
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
      const t = Math.round(a.nx), s = Math.round(a.ny), r = a.Lx / t, g = a.Ly / s, i = [];
      for (let e = 0; e <= s; e++) for (let n = 0; n <= t; n++) i.push([
        n * r,
        e * g,
        0
      ]);
      const l = [];
      for (let e = 0; e < s; e++) for (let n = 0; n < t; n++) {
        const m = e * (t + 1) + n;
        l.push([
          m,
          m + 1,
          m + 1 + (t + 1),
          m + (t + 1)
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
        const m = e * (t + 1) + n, O = (n === 0 || n === t) && (e === 0 || e === s) ? 0.25 : n === 0 || n === t || e === 0 || e === s ? 0.5 : 1, k = -a.q * r * g * O;
        u.set(m, [
          0,
          0,
          k,
          0,
          0,
          0
        ]);
      }
      const v = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), S = a.E / (2 * (1 + a.nu));
      for (let e = 0; e < M; e++) v.set(e, a.t), f.set(e, a.E), x.set(e, a.nu), h.set(e, b);
      const C = a.bViga * a.hViga, E = a.bViga * a.hViga ** 3 / 12, N = a.hViga * a.bViga ** 3 / 12, q = 0.28 * a.bViga * a.hViga ** 3;
      for (let e = M; e < l.length; e++) f.set(e, a.E), x.set(e, a.nu), _.set(e, S), y.set(e, C), p.set(e, E), L.set(e, N), I.set(e, q), h.set(e, b), w.set(e, {
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
        shearModuli: _,
        areas: y,
        momentsOfInertiaZ: p,
        momentsOfInertiaY: L,
        torsionalConstants: I,
        thicknesses: v,
        densities: h,
        sectionShapes: w
      };
      try {
        o.deformOutputs.val = F(i, l, {
          supports: d,
          loads: u
        }, o.elementInputs.val), o.analyzeOutputs.val = z(i, l, o.elementInputs.val, o.deformOutputs.val);
        const e = a.Lx < a.Ly, n = a.q * Math.min(a.Lx, a.Ly) / 2, m = a.q * Math.min(a.Lx, a.Ly) / 2, $ = Math.max(...[
          ...o.deformOutputs.val.deformations.values()
        ].map((V) => Math.abs(V[2])));
        console.log(`[Membrana CSI] Losa ${a.Lx}\xD7${a.Ly}m t=${a.t}m q=${a.q} kN/m\xB2
  Shell Q4 membrana con drilling DOF (Rz activo)
  CSI apportionment by area: q \xD7 A_trib a cada nodo
  Distribuci\xF3n emergente a vigas perimetrales:
    Vigas ${e ? "cortas" : "largas"} (lado ${Math.min(a.Lx, a.Ly)}m): trapecio w_max=${n.toFixed(2)} kN/m
    Vigas ${e ? "largas" : "cortas"} (lado ${Math.max(a.Lx, a.Ly)}m): tri\xE1ngulo w_max=${m.toFixed(2)} kN/m
  \u03B4_max = ${($ * 1e3).toFixed(3)} mm`);
      } catch (e) {
        console.error("Membrana CSI solver error:", e);
      }
      o.objects3D.val = [];
    },
    runModal: function(a, o, t) {
      j(async () => {
        const { modalAnalysis: s } = await import("./index-CQ6xsyEv.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          modalAnalysis: s
        };
      }, __vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(({ modalAnalysis: s }) => {
        try {
          const r = s(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, 12);
          t.render(r, {
            title: `Membrana CSI ${a.Lx}\xD7${a.Ly}m t=${a.t}m`,
            properties: [
              `E=${(a.E / 1e6).toFixed(1)} GPa  \u03BD=${a.nu}  \u03C1=${b} kN/m\xB3`
            ]
          });
        } catch (r) {
          console.warn("Modal membrana CSI error:", r.message);
        }
      });
    }
  };
});
export {
  __tla,
  A as m
};
