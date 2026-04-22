import { p as v, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let q;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  q = {
    id: "plate-thick-validacion",
    name: "Rectangular Slab \u2014 Mindlin (Calcpad validation)",
    category: "Plates",
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "displacementZ",
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "shearX",
      "shearY"
    ],
    hasModal: false,
    params: {
      a: {
        default: 6,
        min: 1,
        max: 12,
        step: 0.5,
        label: "a \u2014 length X (m)"
      },
      b: {
        default: 4,
        min: 1,
        max: 12,
        step: 0.5,
        label: "b \u2014 length Y (m)"
      },
      t: {
        default: 0.1,
        min: 0.05,
        max: 0.8,
        step: 0.02,
        label: "t \u2014 thickness (m)"
      },
      q: {
        default: 10,
        min: 1,
        max: 50,
        step: 1,
        label: "q \u2014 uniform pressure (kN/m\xB2)"
      },
      E_MPa: {
        default: 35e3,
        min: 5e3,
        max: 21e4,
        step: 1e3,
        label: "E (MPa)"
      },
      nu: {
        default: 0.15,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "\u03BD (Poisson)"
      },
      nx: {
        default: 12,
        min: 4,
        max: 24,
        step: 1,
        label: "nx (elements in X)"
      },
      ny: {
        default: 8,
        min: 4,
        max: 24,
        step: 1,
        label: "ny (elements in Y)"
      }
    },
    inlineComputed: [
      {
        after: "nu",
        label: "D (plate rigidity, kN\xB7m)",
        compute: (e) => {
          const n = (e.E_MPa ?? 35e3) * 1e3, s = e.nu ?? 0.15, o = e.t ?? 0.1;
          return (n * Math.pow(o, 3) / (12 * (1 - s * s))).toFixed(1);
        }
      },
      {
        after: "t",
        label: "t/min(a,b) (thick if \u2265 0.05)",
        compute: (e) => {
          const n = e.t ?? 0.1, s = Math.min(e.a ?? 6, e.b ?? 4), o = n / s;
          return o.toFixed(4) + (o >= 0.05 ? " THICK \u2713" : " THIN");
        }
      }
    ],
    computedLabels(e, n) {
      var _a;
      const s = (e.E_MPa ?? 35e3) * 1e3, o = e.nu ?? 0.15, c = e.t ?? 0.1, d = e.a ?? 6, h = e.b ?? 4, M = e.q ?? 10, u = s * Math.pow(c, 3) / (12 * (1 - o * o)), l = 772e-5 * M * Math.pow(h, 4) / u * 1e3;
      let i = 0;
      try {
        const m = (_a = n.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
        if (m && m.size) for (const f of m.values()) Math.abs(f[2]) > Math.abs(i / 1e3) && (i = f[2] * 1e3);
      } catch {
      }
      const b = l !== 0 ? Math.abs(i / l) : 0;
      return {
        "a \xD7 b \xD7 t (m)": `${d.toFixed(1)} \xD7 ${h.toFixed(1)} \xD7 ${c.toFixed(2)}`,
        "E (MPa)": (s / 1e3).toFixed(0),
        "D (kN\xB7m)": u.toFixed(1),
        "q (kN/m\xB2)": M.toFixed(1),
        "w_Kirchhoff (mm)": l.toFixed(3),
        "w_FEM Mindlin (mm)": Math.abs(i).toFixed(3),
        "Mindlin/Kirchhoff": b.toFixed(3) + (b > 1 ? " \u2713 (FEM > Kirchhoff, as expected)" : " \u26A0")
      };
    },
    build(e, n) {
      const s = e.E_MPa * 1e3, o = v({
        E: s,
        nu: e.nu,
        thickness: e.t,
        theoryType: 0,
        meshLx: e.a,
        meshLy: e.b,
        meshNx: Math.round(e.nx),
        meshNy: Math.round(e.ny),
        bcType: "simply-supported",
        pressure: -e.q
      }), c = o.nodeResults.map((t) => [
        t.x,
        t.y,
        0
      ]), d = o.elementResults.map((t) => t.nodes);
      n.nodes.val = c, n.elements.val = d;
      const h = /* @__PURE__ */ new Map();
      d.forEach((t, a) => h.set(a, e.t));
      const M = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), x = e.a / Math.round(e.nx) * (e.b / Math.round(e.ny));
      c.forEach((t, a) => {
        const F = Math.abs(t[0]) < 1e-6 || Math.abs(t[0] - e.a) < 1e-6 || Math.abs(t[1]) < 1e-6 || Math.abs(t[1] - e.b) < 1e-6;
        F && M.set(a, [
          true,
          true,
          true,
          false,
          false,
          false
        ]);
        const _ = (Math.abs(t[0]) < 1e-6 || Math.abs(t[0] - e.a) < 1e-6) && (Math.abs(t[1]) < 1e-6 || Math.abs(t[1] - e.b) < 1e-6) ? 0.25 : F ? 0.5 : 1;
        u.set(a, [
          0,
          0,
          -e.q * x * _,
          0,
          0,
          0
        ]);
      }), n.nodeInputs.val = {
        supports: M,
        loads: u
      };
      const l = /* @__PURE__ */ new Map();
      o.nodeResults.forEach((t, a) => {
        l.set(a, [
          0,
          0,
          t.w,
          t.bx,
          t.by,
          0
        ]);
      }), n.deformOutputs.val = {
        deformations: l
      };
      const i = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
      o.elementResults.forEach((t, a) => {
        i.set(a, [
          t.Mxx,
          t.Mxx,
          t.Mxx,
          t.Mxx
        ]), b.set(a, [
          t.Myy,
          t.Myy,
          t.Myy,
          t.Myy
        ]), m.set(a, [
          t.Mxy,
          t.Mxy,
          t.Mxy,
          t.Mxy
        ]);
      }), n.analyzeOutputs.val = {
        bendingXX: i,
        bendingYY: b,
        bendingXY: m
      };
      const f = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
      d.forEach((t, a) => {
        f.set(a, s), y.set(a, e.nu), p.set(a, 24);
      }), n.elementInputs.val = {
        thicknesses: h,
        elasticities: f,
        poissonsRatios: y,
        densities: p
      }, n.objects3D.val = [];
      let r = 0;
      for (const t of l.values()) Math.abs(t[2]) > r && (r = Math.abs(t[2]));
      r *= 1e3;
      const w = s * Math.pow(e.t, 3) / (12 * (1 - e.nu * e.nu)), E = 772e-5 * e.q * Math.pow(e.b, 4) / w * 1e3;
      console.log(`[Plate Thick \u2014 Calcpad validation]
  Geometry: ${e.a} \xD7 ${e.b} \xD7 ${e.t} m
  Material: E = ${(s / 1e3).toFixed(0)} MPa, \u03BD = ${e.nu}
  Load:     q = ${e.q} kN/m\xB2
  D plate = ${w.toFixed(1)} kN\xB7m
  \u2500\u2500\u2500 Results \u2500\u2500\u2500
  w_FEM Mindlin    = ${r.toFixed(3)} mm
  w_Kirchhoff (Navier, \u03B1=0.00772) = ${E.toFixed(3)} mm
  Ratio Mindlin/Kirchhoff = ${(r / E).toFixed(3)} (expected > 1)`);
    }
  };
});
export {
  __tla,
  q as p
};
