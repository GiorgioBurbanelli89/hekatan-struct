import { a as q } from "./analyze-DOGq34F5.js";
import { d as Z, __tla as __tla_0 } from "./didacticCpp-CT_TM4EM.js";
let P;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let D, K;
  D = {
    "shellThin/areaOnly": -2.42,
    "shellThin/perimFrames": -3.055,
    "shellThin/fullBuilding": -2.5,
    "shellThick/areaOnly": -2.42,
    "shellThick/perimFrames": -3.032,
    "shellThick/fullBuilding": -2.5,
    "plateThin/areaOnly": -2.42,
    "plateThick/areaOnly": -2.42,
    "membrane/areaOnly": 0.126,
    "plane/areaOnly": 0.126
  };
  K = {
    "shellThin/areaOnly": -2.371,
    "shellThin/perimFrames": -2.371,
    "shellThick/areaOnly": -2.371,
    "shellThick/perimFrames": -2.371,
    "plateThin/areaOnly": -2.371,
    "membrane/areaOnly": 0.084
  };
  P = {
    id: "benchmark-3way",
    name: "\u{1F3C1} Benchmark 3-way (Shell+Frame DOF mismatch)",
    category: "\u{1F3C1} Benchmarks \xB7 4\uFE0F\u20E3 Combinados",
    benchmark: true,
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "displacementZ",
      "displacementX",
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "membraneXX",
      "membraneYY",
      "vonMises"
    ],
    params: {
      areaType: {
        default: 1,
        label: "Tipo de \xC1rea",
        options: {
          "membrane (in-plane only)": 0,
          "shellThin (Kirchhoff)": 1,
          "shellThick (Mindlin)": 2,
          "plateThin (no membrane)": 3,
          "plateThick (no membrane)": 4,
          "plane (in-plane only)": 5,
          "layered (CLT approx)": 6
        }
      },
      setup: {
        default: 1,
        label: "Configuraci\xF3n",
        options: {
          "areaOnly (BCs en bordes)": 0,
          "perimFrames (vigas+4 cols esquina)": 1,
          "fullBuilding (cruz interna+col centro)": 2
        }
      },
      Lx: {
        default: 4,
        min: 2,
        max: 8,
        step: 0.5,
        label: "Lx (m)",
        folder: "Geometr\xEDa"
      },
      Ly: {
        default: 4,
        min: 2,
        max: 8,
        step: 0.5,
        label: "Ly (m)",
        folder: "Geometr\xEDa"
      },
      nx: {
        default: 4,
        min: 2,
        max: 16,
        step: 1,
        label: "nx mesh",
        folder: "Geometr\xEDa"
      },
      ny: {
        default: 4,
        min: 2,
        max: 16,
        step: 1,
        label: "ny mesh",
        folder: "Geometr\xEDa"
      },
      t: {
        default: 0.1,
        min: 0.05,
        max: 0.4,
        step: 0.01,
        label: "espesor (m)",
        folder: "Geometr\xEDa"
      },
      E_c: {
        default: 25e6,
        min: 1e6,
        max: 2e8,
        step: 1e6,
        label: "E concreto (kN/m\xB2)",
        folder: "Material"
      },
      nu_c: {
        default: 0.2,
        min: 0,
        max: 0.45,
        step: 0.01,
        label: "\u03BD concreto",
        folder: "Material"
      },
      E_s: {
        default: 2e8,
        min: 1e8,
        max: 25e7,
        step: 5e6,
        label: "E acero (kN/m\xB2)",
        folder: "Material"
      },
      A_b: {
        default: 7610,
        min: 1e3,
        max: 3e4,
        step: 100,
        label: "A viga (mm\xB2)",
        folder: "Frame W360x60"
      },
      Iy_b: {
        default: 12.9,
        min: 1,
        max: 100,
        step: 0.5,
        label: "Iy strong (\xD710\u207B\u2075 m\u2074)",
        folder: "Frame W360x60"
      },
      Iz_b: {
        default: 1.2,
        min: 0.1,
        max: 50,
        step: 0.1,
        label: "Iz weak (\xD710\u207B\u2075 m\u2074)",
        folder: "Frame W360x60"
      },
      q: {
        default: 5,
        min: 0.5,
        max: 30,
        step: 0.5,
        label: "q vertical (kN/m\xB2)",
        folder: "Carga",
        unitType: "force"
      },
      F: {
        default: 100,
        min: 10,
        max: 500,
        step: 10,
        label: "F lateral (kN)",
        folder: "Carga",
        unitType: "force"
      }
    },
    build(r, m) {
      var _a;
      const $ = [
        "membrane",
        "shellThin",
        "shellThick",
        "plateThin",
        "plateThick",
        "plane",
        "layered"
      ], j = [
        "areaOnly",
        "perimFrames",
        "fullBuilding"
      ], p = $[Math.round(r.areaType)] || "shellThin", d = j[Math.round(r.setup)] || "perimFrames", f = !(p === "membrane" || p === "plane"), z = r.Lx, C = r.Ly, t = Math.round(r.nx), o = Math.round(r.ny), a = t + 1, N = o + 1, b = z / t, y = C / o, R = f ? 4 : 0, i = [];
      if (f) for (let e = 0; e <= o; e++) for (let l = 0; l <= t; l++) i.push([
        l * b,
        e * y,
        R
      ]);
      else for (let e = 0; e <= o; e++) for (let l = 0; l <= t; l++) i.push([
        l * b,
        0,
        e * y
      ]);
      const x = [];
      for (let e = 0; e < o; e++) for (let l = 0; l < t; l++) {
        const n = e * a + l;
        x.push([
          n,
          n + 1,
          (e + 1) * a + l + 1,
          (e + 1) * a + l
        ]);
      }
      const c = [];
      let M = 0;
      if (d === "perimFrames" || d === "fullBuilding") {
        for (let l = 0; l < t; l++) c.push([
          l,
          l + 1
        ]);
        const e = o * a;
        for (let l = 0; l < t; l++) c.push([
          e + l,
          e + l + 1
        ]);
        for (let l = 0; l < o; l++) c.push([
          l * a,
          (l + 1) * a
        ]);
        for (let l = 0; l < o; l++) c.push([
          l * a + t,
          (l + 1) * a + t
        ]);
        if (f) {
          const l = i.length;
          i.push([
            0,
            0,
            0
          ]), i.push([
            t * b,
            0,
            0
          ]), i.push([
            0,
            o * y,
            0
          ]), i.push([
            t * b,
            o * y,
            0
          ]);
          const n = [
            0,
            t,
            o * a,
            o * a + t
          ];
          for (let s = 0; s < 4; s++) c.push([
            l + s,
            n[s]
          ]);
          M = 4;
        }
      }
      if (d === "fullBuilding" && f) {
        const e = Math.floor(t / 2), l = Math.floor(o / 2);
        for (let s = 0; s < t; s++) c.push([
          l * a + s,
          l * a + s + 1
        ]);
        for (let s = 0; s < o; s++) c.push([
          s * a + e,
          (s + 1) * a + e
        ]);
        const n = i.length;
        i.push([
          e * b,
          l * y,
          0
        ]), c.push([
          n,
          l * a + e
        ]), M += 1;
      }
      const _ = [
        ...x,
        ...c
      ], u = /* @__PURE__ */ new Map();
      if (d === "areaOnly") if (f) {
        for (let e = 0; e <= t; e++) u.set(e, [
          true,
          true,
          true,
          false,
          false,
          false
        ]), u.set(o * a + e, [
          true,
          true,
          true,
          false,
          false,
          false
        ]);
        for (let e = 0; e <= o; e++) u.set(e * a, [
          true,
          true,
          true,
          false,
          false,
          false
        ]), u.set(e * a + t, [
          true,
          true,
          true,
          false,
          false,
          false
        ]);
      } else for (let e = 0; e <= t; e++) u.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      else if (f) {
        const e = [
          true,
          true,
          true,
          false,
          false,
          false
        ], l = a * N;
        for (let n = 0; n < M; n++) u.set(l + n, e);
      } else for (let e = 0; e <= t; e++) u.set(e, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const T = /* @__PURE__ */ new Map();
      if (f) for (const e of x) {
        const l = b * y, n = -r.q * l / 4;
        for (const s of e) {
          const h = T.get(s) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          h[2] += n, T.set(s, h);
        }
      }
      else {
        const e = r.F / a;
        for (let l = 0; l <= t; l++) {
          const n = o * a + l;
          T.set(n, [
            e,
            0,
            0,
            0,
            0,
            0
          ]);
        }
      }
      let w = r.t;
      (p === "membrane" || p === "plane") && (w = Math.max(1e-3, r.t * 0.01));
      const k = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), Y = r.E_c / (2 * (1 + r.nu_c));
      for (let e = 0; e < x.length; e++) k.set(e, r.E_c), B.set(e, r.nu_c), E.set(e, w), g.set(e, Y), F.set(e, 24);
      for (let e = 0; e < c.length; e++) {
        const l = x.length + e;
        k.set(l, r.E_s), g.set(l, r.E_s / 2.6), I.set(l, r.A_b * 1e-6), L.set(l, r.Iy_b * 1e-5), A.set(l, r.Iz_b * 1e-5), S.set(l, 31e-8), F.set(l, 78.5);
      }
      m.nodes.val = i, m.elements.val = _, m.nodeInputs.val = {
        supports: u,
        loads: T
      }, m.elementInputs.val = {
        elasticities: k,
        poissonsRatios: B,
        thicknesses: E,
        shearModuli: g,
        areas: I,
        momentsOfInertiaY: L,
        momentsOfInertiaZ: A,
        torsionalConstants: S,
        densities: F
      };
      try {
        m.deformOutputs.val = Z(i, _, {
          supports: u,
          loads: T
        }, m.elementInputs.val), m.analyzeOutputs.val = q(i, _, m.elementInputs.val, m.deformOutputs.val);
      } catch (e) {
        console.error(`Benchmark 3-way solver error (${p}/${d}):`, e.message);
      }
      m.objects3D.val = [];
      const v = `${p}/${d}`, G = Math.floor(t / 2), X = Math.floor(o / 2) * a + G, O = (_a = m.deformOutputs.val.deformations) == null ? void 0 : _a.get(X);
      if (O) {
        const e = (f ? O[2] : O[0]) * 1e3, l = f ? "w_centro" : "ux_top", n = D[v], s = K[v];
        if (console.log(`[Benchmark 3-way] ${v}
  ${l} = ${e.toFixed(4)} mm` + (s !== void 0 ? `  (MATLAB: ${s.toFixed(4)})` : "") + (n !== void 0 ? `  (ETABS ref: ${n.toFixed(4)})` : "")), n !== void 0 && Math.abs(n) > 1e-9) {
          const h = Math.abs(e - n) / Math.abs(n) * 100;
          h > 50 ? console.warn(`  \u26A0 ERROR ${h.toFixed(0)}% vs ETABS \u2014 bug DOF mismatch (ver BUG_ANALYSIS_*.md)`) : h > 10 ? console.warn(`  \u0394 ${h.toFixed(1)}% vs ETABS`) : console.log(`  \u2713 \u0394 ${h.toFixed(2)}% vs ETABS`);
        }
      }
    }
  };
});
export {
  __tla,
  P as b
};
