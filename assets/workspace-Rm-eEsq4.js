import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as k, P as J } from "./theme-CzzIlc4y.js";
import { g as ee } from "./getViewer-BpBQk0GY.js";
import { g as te } from "./styles-B8h3dtQW.js";
import { c as ne } from "./renderModalTable-29W4CuGz.js";
import { z as se, __tla as __tla_0 } from "./zapataVigaAmarre-DZo3fozE.js";
import { z as ae, __tla as __tla_1 } from "./zapataAislada-tMn5isa_.js";
import { m as S, p as W, d as O, __tla as __tla_2 } from "./didacticCpp-Bnj9OwqQ.js";
import { a as N } from "./analyze-ClLKGn9k.js";
import { e as oe, __tla as __tla_3 } from "./edificioAporticado-ChQ4aaFf.js";
import { d as H, f as j } from "./units-CVPhvG5E.js";
import "./Text-CBH-tcJP.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
Promise.all([
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  const le = {
    id: "plate-thin",
    name: "Plate Thin (Kirchhoff)",
    category: "Placas",
    defaultShellResult: "bendingXX",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "displacementZ"
    ],
    hasModal: true,
    params: {
      Lx: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Lx (m)"
      },
      Ly: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Ly (m)"
      },
      t: {
        default: 0.05,
        min: 0.02,
        max: 0.2,
        step: 0.01,
        label: "espesor t (m)"
      },
      E: {
        default: 3e7,
        min: 1e6,
        max: 2e8,
        step: 1e6,
        label: "E (kN/m\xB2)"
      },
      nu: {
        default: 0.3,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "\u03BD"
      },
      q: {
        default: 5,
        min: 1,
        max: 20,
        step: 0.5,
        label: "q presi\xF3n \u2193 (kN/m\xB2)"
      },
      nx: {
        default: 10,
        min: 4,
        max: 20,
        step: 1,
        label: "nx elementos"
      },
      ny: {
        default: 10,
        min: 4,
        max: 20,
        step: 1,
        label: "ny elementos"
      }
    },
    build(e, n) {
      const s = W({
        E: e.E,
        nu: e.nu,
        thickness: e.t,
        theoryType: 1,
        meshLx: e.Lx,
        meshLy: e.Ly,
        meshNx: Math.round(e.nx),
        meshNy: Math.round(e.ny),
        bcType: "simply-supported",
        pressure: -e.q
      }), l = s.nodeResults.map((t) => [
        t.x,
        t.y,
        0
      ]), c = s.elementResults.map((t) => t.nodes);
      n.nodes.val = l, n.elements.val = c;
      const o = /* @__PURE__ */ new Map();
      c.forEach((t, a) => o.set(a, e.t));
      const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), x = e.Lx / Math.round(e.nx) * (e.Ly / Math.round(e.ny));
      l.forEach((t, a) => {
        const f = Math.abs(t[0]) < 1e-6 || Math.abs(t[0] - e.Lx) < 1e-6 || Math.abs(t[1]) < 1e-6 || Math.abs(t[1] - e.Ly) < 1e-6;
        f && r.set(a, [
          true,
          true,
          true,
          false,
          false,
          false
        ]);
        const E = (Math.abs(t[0]) < 1e-6 || Math.abs(t[0] - e.Lx) < 1e-6) && (Math.abs(t[1]) < 1e-6 || Math.abs(t[1] - e.Ly) < 1e-6) ? 0.25 : f ? 0.5 : 1, L = -e.q * x * E;
        i.set(a, [
          0,
          0,
          L,
          0,
          0,
          0
        ]);
      }), n.nodeInputs.val = {
        supports: r,
        loads: i
      }, n.elementInputs.val = {
        thicknesses: o
      };
      const m = /* @__PURE__ */ new Map();
      s.nodeResults.forEach((t, a) => {
        m.set(a, [
          0,
          0,
          t.w,
          t.bx,
          t.by,
          0
        ]);
      }), n.deformOutputs.val = {
        deformations: m
      };
      const p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
      s.elementResults.forEach((t, a) => {
        p.set(a, [
          t.Mxx,
          t.Mxx,
          t.Mxx,
          t.Mxx
        ]), h.set(a, [
          t.Myy,
          t.Myy,
          t.Myy,
          t.Myy
        ]), v.set(a, [
          t.Mxy,
          t.Mxy,
          t.Mxy,
          t.Mxy
        ]);
      }), n.analyzeOutputs.val = {
        bendingXX: p,
        bendingYY: h,
        bendingXY: v
      };
      const d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
      c.forEach((t, a) => {
        d.set(a, e.E), u.set(a, e.nu), b.set(a, 24);
      }), n.elementInputs.val = {
        thicknesses: o,
        elasticities: d,
        poissonsRatios: u,
        densities: b
      }, n.objects3D.val = [];
    },
    runModal(e, n, s) {
      var _a, _b;
      const l = n.nodes.val, c = n.elements.val, o = n.nodeInputs.val, r = n.elementInputs.val;
      if (!(!l.length || !c.length || !((_a = o.supports) == null ? void 0 : _a.size) || !((_b = r.densities) == null ? void 0 : _b.size))) try {
        const i = S(l, c, o, r, 12);
        s.render(i, {
          title: `Plate Thin ${e.Lx}\xD7${e.Ly}m t=${e.t}m`,
          properties: [
            `E=${(e.E / 1e6).toFixed(1)} GPa  \u03BD=${e.nu}  \u03C1=24 kN/m\xB3`
          ]
        });
      } catch (i) {
        console.warn("Modal plate-thin error:", i.message);
      }
    }
  }, ie = {
    id: "plate-thick",
    name: "Plate Thick (Mindlin-Reissner)",
    category: "Placas",
    defaultShellResult: "bendingXX",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "displacementZ",
      "shearX",
      "shearY"
    ],
    hasModal: true,
    params: {
      Lx: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Lx (m)"
      },
      Ly: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Ly (m)"
      },
      t: {
        default: 0.3,
        min: 0.1,
        max: 0.8,
        step: 0.05,
        label: "espesor t (m)"
      },
      E: {
        default: 3e7,
        min: 1e6,
        max: 2e8,
        step: 1e6,
        label: "E (kN/m\xB2)"
      },
      nu: {
        default: 0.3,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "\u03BD"
      },
      q: {
        default: 10,
        min: 1,
        max: 30,
        step: 1,
        label: "q presi\xF3n \u2193 (kN/m\xB2)"
      },
      nx: {
        default: 10,
        min: 4,
        max: 20,
        step: 1,
        label: "nx elementos"
      },
      ny: {
        default: 10,
        min: 4,
        max: 20,
        step: 1,
        label: "ny elementos"
      }
    },
    build(e, n) {
      const s = W({
        E: e.E,
        nu: e.nu,
        thickness: e.t,
        theoryType: 0,
        meshLx: e.Lx,
        meshLy: e.Ly,
        meshNx: Math.round(e.nx),
        meshNy: Math.round(e.ny),
        bcType: "simply-supported",
        pressure: -e.q
      }), l = s.nodeResults.map((t) => [
        t.x,
        t.y,
        0
      ]), c = s.elementResults.map((t) => t.nodes);
      n.nodes.val = l, n.elements.val = c;
      const o = /* @__PURE__ */ new Map();
      c.forEach((t, a) => o.set(a, e.t));
      const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), x = e.Lx / Math.round(e.nx) * (e.Ly / Math.round(e.ny));
      l.forEach((t, a) => {
        const f = Math.abs(t[0]) < 1e-6 || Math.abs(t[0] - e.Lx) < 1e-6 || Math.abs(t[1]) < 1e-6 || Math.abs(t[1] - e.Ly) < 1e-6;
        f && r.set(a, [
          true,
          true,
          true,
          false,
          false,
          false
        ]);
        const w = (Math.abs(t[0]) < 1e-6 || Math.abs(t[0] - e.Lx) < 1e-6) && (Math.abs(t[1]) < 1e-6 || Math.abs(t[1] - e.Ly) < 1e-6) ? 0.25 : f ? 0.5 : 1;
        i.set(a, [
          0,
          0,
          -e.q * x * w,
          0,
          0,
          0
        ]);
      }), n.nodeInputs.val = {
        supports: r,
        loads: i
      }, n.elementInputs.val = {
        thicknesses: o
      };
      const m = /* @__PURE__ */ new Map();
      s.nodeResults.forEach((t, a) => {
        m.set(a, [
          0,
          0,
          t.w,
          t.bx,
          t.by,
          0
        ]);
      }), n.deformOutputs.val = {
        deformations: m
      };
      const p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
      s.elementResults.forEach((t, a) => {
        p.set(a, [
          t.Mxx,
          t.Mxx,
          t.Mxx,
          t.Mxx
        ]), h.set(a, [
          t.Myy,
          t.Myy,
          t.Myy,
          t.Myy
        ]), v.set(a, [
          t.Mxy,
          t.Mxy,
          t.Mxy,
          t.Mxy
        ]);
      }), n.analyzeOutputs.val = {
        bendingXX: p,
        bendingYY: h,
        bendingXY: v
      };
      const d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
      c.forEach((t, a) => {
        d.set(a, e.E), u.set(a, e.nu), b.set(a, 24);
      }), n.elementInputs.val = {
        thicknesses: o,
        elasticities: d,
        poissonsRatios: u,
        densities: b
      }, n.objects3D.val = [];
    },
    runModal(e, n, s) {
      var _a, _b;
      const l = n.nodes.val, c = n.elements.val, o = n.nodeInputs.val, r = n.elementInputs.val;
      if (!(!l.length || !c.length || !((_a = o.supports) == null ? void 0 : _a.size) || !((_b = r.densities) == null ? void 0 : _b.size))) try {
        const i = S(l, c, o, r, 12);
        s.render(i, {
          title: `Plate Thick ${e.Lx}\xD7${e.Ly}m t=${e.t}m`,
          properties: [
            `E=${(e.E / 1e6).toFixed(1)} GPa  \u03BD=${e.nu}  \u03C1=24 kN/m\xB3`
          ]
        });
      } catch (i) {
        console.warn("Modal plate-thick error:", i.message);
      }
    }
  }, re = {
    id: "membrana",
    name: "Membrana (Plane Stress) \u2014 Muro de corte",
    category: "Placas",
    defaultShellResult: "vonMises",
    availableShellResults: [
      "vonMises",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "displacementX",
      "displacementZ"
    ],
    hasModal: true,
    params: {
      W: {
        default: 3,
        min: 1,
        max: 8,
        step: 0.25,
        label: "W ancho X (m)"
      },
      H: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.25,
        label: "H altura Z (m)"
      },
      t: {
        default: 0.2,
        min: 0.05,
        max: 0.5,
        step: 0.01,
        label: "t espesor (m)"
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
      F: {
        default: 100,
        min: 10,
        max: 2e3,
        step: 10,
        label: "F lateral tope (kN)"
      },
      nx: {
        default: 8,
        min: 4,
        max: 20,
        step: 1,
        label: "nx elem X"
      },
      nz: {
        default: 10,
        min: 4,
        max: 30,
        step: 1,
        label: "nz elem Z"
      }
    },
    build(e, n) {
      var _a, _b;
      const s = Math.round(e.nx), l = Math.round(e.nz), c = e.W / s, o = e.H / l, r = [];
      for (let t = 0; t <= l; t++) for (let a = 0; a <= s; a++) r.push([
        a * c,
        0,
        t * o
      ]);
      const i = [];
      for (let t = 0; t < l; t++) for (let a = 0; a < s; a++) {
        const f = t * (s + 1) + a;
        i.push([
          f,
          f + 1,
          f + 1 + (s + 1),
          f + (s + 1)
        ]);
      }
      const x = /* @__PURE__ */ new Map();
      for (let t = 0; t <= s; t++) x.set(t, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = /* @__PURE__ */ new Map(), p = l * (s + 1), h = e.F / s;
      for (let t = 0; t <= s; t++) {
        const a = p + t, M = t === 0 || t === s ? h * 0.5 : h;
        m.set(a, [
          M,
          0,
          0,
          0,
          0,
          0
        ]);
      }
      const v = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
      i.forEach((t, a) => {
        v.set(a, e.t), d.set(a, e.E), u.set(a, e.nu), b.set(a, 24);
      }), n.nodes.val = r, n.elements.val = i, n.nodeInputs.val = {
        supports: x,
        loads: m
      }, n.elementInputs.val = {
        thicknesses: v,
        elasticities: d,
        poissonsRatios: u,
        densities: b
      };
      try {
        n.deformOutputs.val = O(r, i, {
          supports: x,
          loads: m
        }, n.elementInputs.val), n.analyzeOutputs.val = N(r, i, n.elementInputs.val, n.deformOutputs.val);
        const t = e.t * Math.pow(e.W, 3) / 12, a = e.t * e.W, f = e.E / (2 * (1 + e.nu)), M = e.F * Math.pow(e.H, 3) / (3 * e.E * t), w = 1.2 * e.F * e.H / (f * a), E = M + w, L = p + Math.floor(s / 2), T = ((_b = (_a = n.deformOutputs.val.deformations) == null ? void 0 : _a.get(L)) == null ? void 0 : _b[0]) ?? 0;
        console.log(`[Muro Q4] W=${e.W}m H=${e.H}m F=${e.F}kN  \u2192  \u03B4_top FEM=${(T * 1e3).toFixed(3)} mm | te\xF3rico flex+shear=${(E * 1e3).toFixed(3)} mm (flex=${(M * 1e3).toFixed(3)}, shear=${(w * 1e3).toFixed(3)})`);
      } catch (t) {
        console.error("Muro Q4 solver error:", t);
      }
      n.objects3D.val = [];
    },
    runModal(e, n, s) {
      var _a, _b, _c;
      const l = n.nodes.val, c = n.elements.val, o = n.nodeInputs.val, r = n.elementInputs.val;
      if (!(!l.length || !c.length || !((_a = o.supports) == null ? void 0 : _a.size) || !((_b = r.densities) == null ? void 0 : _b.size))) try {
        const i = S(l, c, o, r, 12), x = `Muro de corte ${e.W}\xD7${e.H}m t=${e.t}m`, m = [
          `E=${(e.E / 1e6).toFixed(1)} GPa  \u03BD=${e.nu}  \u03C1=24 kN/m\xB3`
        ];
        s.render(i, {
          title: x,
          properties: m
        }), console.log(`[Muro Modal] f\u2081 = ${(_c = i.frequencies[0]) == null ? void 0 : _c.toFixed(4)} Hz, T\u2081 = ${(1 / i.frequencies[0]).toFixed(4)} s`);
      } catch (i) {
        console.warn("Modal muro error:", i.message);
      }
    }
  }, ce = {
    id: "shell-thin",
    name: "Shell Thin (Kirchhoff-Love)",
    category: "C\xE1scaras",
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "vonMises",
      "displacementZ"
    ],
    params: {
      Lx: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Lx (m)"
      },
      Ly: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Ly (m)"
      },
      t: {
        default: 0.05,
        min: 0.01,
        max: 0.2,
        step: 0.01,
        label: "espesor t (m)"
      },
      E: {
        default: 3e7,
        min: 1e6,
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
        default: 5,
        min: 1,
        max: 20,
        step: 0.5,
        label: "q presi\xF3n \u2193 (kN/m\xB2)"
      },
      nx: {
        default: 8,
        min: 4,
        max: 16,
        step: 1,
        label: "nx"
      },
      ny: {
        default: 8,
        min: 4,
        max: 16,
        step: 1,
        label: "ny"
      }
    },
    build(e, n) {
      const s = Math.round(e.nx), l = Math.round(e.ny), c = [];
      for (let d = 0; d <= l; d++) for (let u = 0; u <= s; u++) c.push([
        u * e.Lx / s,
        d * e.Ly / l,
        0
      ]);
      const o = [];
      for (let d = 0; d < l; d++) for (let u = 0; u < s; u++) {
        const b = d * (s + 1) + u;
        o.push([
          b,
          b + 1,
          b + 1 + (s + 1),
          b + (s + 1)
        ]);
      }
      const r = /* @__PURE__ */ new Map();
      for (let d = 0; d <= s; d++) r.set(d, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), r.set(l * (s + 1) + d, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let d = 0; d <= l; d++) r.set(d * (s + 1), [
        true,
        true,
        true,
        false,
        false,
        false
      ]), r.set(d * (s + 1) + s, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const i = e.Lx / s * (e.Ly / l), x = /* @__PURE__ */ new Map();
      for (let d = 0; d <= l; d++) for (let u = 0; u <= s; u++) {
        const b = d * (s + 1) + u, f = (u === 0 || u === s) && (d === 0 || d === l) ? 0.25 : u === 0 || u === s || d === 0 || d === l ? 0.5 : 1, M = -e.q * i * f;
        x.set(b, [
          0,
          0,
          M,
          0,
          0,
          0
        ]);
      }
      const m = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
      o.forEach((d, u) => {
        m.set(u, e.t), p.set(u, e.E), h.set(u, e.nu), v.set(u, 24);
      }), n.nodes.val = c, n.elements.val = o, n.nodeInputs.val = {
        supports: r,
        loads: x
      }, n.elementInputs.val = {
        thicknesses: m,
        elasticities: p,
        poissonsRatios: h,
        densities: v
      };
      try {
        n.deformOutputs.val = O(c, o, {
          supports: r,
          loads: x
        }, n.elementInputs.val), n.analyzeOutputs.val = N(c, o, n.elementInputs.val, n.deformOutputs.val);
      } catch (d) {
        console.error("Shell thin solver error:", d);
      }
      n.objects3D.val = [];
    }
  }, de = {
    id: "shell-thick",
    name: "Shell Thick (MITC4) \u2014 Muro de corte",
    category: "C\xE1scaras",
    defaultShellResult: "vonMises",
    availableShellResults: [
      "vonMises",
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "shearX",
      "shearY",
      "displacementX",
      "displacementZ"
    ],
    hasModal: true,
    params: {
      W: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.25,
        label: "W ancho X (m)"
      },
      H: {
        default: 5,
        min: 2,
        max: 15,
        step: 0.25,
        label: "H altura Z (m)"
      },
      t: {
        default: 0.25,
        min: 0.1,
        max: 0.6,
        step: 0.01,
        label: "t espesor (m)"
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
      Fx: {
        default: 300,
        min: 0,
        max: 3e3,
        step: 10,
        label: "Fx lateral tope (kN)"
      },
      Fz: {
        default: -500,
        min: -5e3,
        max: 0,
        step: 50,
        label: "Fz gravitacional tope (kN)"
      },
      nx: {
        default: 8,
        min: 4,
        max: 20,
        step: 1,
        label: "nx elem X"
      },
      nz: {
        default: 12,
        min: 4,
        max: 30,
        step: 1,
        label: "nz elem Z"
      }
    },
    build(e, n) {
      var _a, _b;
      const s = Math.round(e.nx), l = Math.round(e.nz), c = e.W / s, o = e.H / l, r = [];
      for (let a = 0; a <= l; a++) for (let f = 0; f <= s; f++) r.push([
        f * c,
        0,
        a * o
      ]);
      const i = [];
      for (let a = 0; a < l; a++) for (let f = 0; f < s; f++) {
        const M = a * (s + 1) + f;
        i.push([
          M,
          M + 1,
          M + 1 + (s + 1),
          M + (s + 1)
        ]);
      }
      const x = /* @__PURE__ */ new Map();
      for (let a = 0; a <= s; a++) x.set(a, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const m = /* @__PURE__ */ new Map(), p = l * (s + 1), h = e.Fx / s, v = e.Fz / s;
      for (let a = 0; a <= s; a++) {
        const f = p + a, M = a === 0 || a === s, w = M ? h * 0.5 : h, E = M ? v * 0.5 : v;
        m.set(f, [
          w,
          0,
          E,
          0,
          0,
          0
        ]);
      }
      const d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
      i.forEach((a, f) => {
        d.set(f, e.t), u.set(f, e.E), b.set(f, e.nu), t.set(f, 24);
      }), n.nodes.val = r, n.elements.val = i, n.nodeInputs.val = {
        supports: x,
        loads: m
      }, n.elementInputs.val = {
        thicknesses: d,
        elasticities: u,
        poissonsRatios: b,
        densities: t
      };
      try {
        n.deformOutputs.val = O(r, i, {
          supports: x,
          loads: m
        }, n.elementInputs.val), n.analyzeOutputs.val = N(r, i, n.elementInputs.val, n.deformOutputs.val);
        const a = e.t * Math.pow(e.W, 3) / 12, f = e.t * e.W, M = e.E / (2 * (1 + e.nu)), w = e.Fx * Math.pow(e.H, 3) / (3 * e.E * a), E = 1.2 * e.Fx * e.H / (M * f), L = p + Math.floor(s / 2), T = ((_b = (_a = n.deformOutputs.val.deformations) == null ? void 0 : _a.get(L)) == null ? void 0 : _b[0]) ?? 0;
        console.log(`[Muro MITC4] W=${e.W}m H=${e.H}m Fx=${e.Fx}kN Fz=${e.Fz}kN  \u2192  \u03B4_top FEM=${(T * 1e3).toFixed(3)} mm | cant. ideal flex+shear=${((w + E) * 1e3).toFixed(3)} mm`);
      } catch (a) {
        console.error("Shell thick solver error:", a);
      }
      n.objects3D.val = [];
    },
    runModal(e, n, s) {
      var _a, _b, _c;
      const l = n.nodes.val, c = n.elements.val, o = n.nodeInputs.val, r = n.elementInputs.val;
      if (!(!l.length || !c.length || !((_a = o.supports) == null ? void 0 : _a.size) || !((_b = r.densities) == null ? void 0 : _b.size))) try {
        const i = S(l, c, o, r, 12);
        s.render(i, {
          title: `Muro MITC4 ${e.W}\xD7${e.H}m t=${e.t}m`,
          properties: [
            `E=${(e.E / 1e6).toFixed(1)} GPa  \u03BD=${e.nu}  \u03C1=24 kN/m\xB3`
          ]
        }), console.log(`[Muro MITC4 Modal] f\u2081=${(_c = i.frequencies[0]) == null ? void 0 : _c.toFixed(4)} Hz, T\u2081=${(1 / i.frequencies[0]).toFixed(4)} s`);
      } catch (i) {
        console.warn("Modal muro MITC4 error:", i.message);
      }
    }
  }, I = [
    oe,
    le,
    ie,
    re,
    ce,
    de,
    ae,
    se
  ], A = k.state([]), C = k.state([]), B = k.state({}), Z = k.state({}), D = k.state({}), G = k.state({}), U = k.state([]), g = {
    nodes: A,
    elements: C,
    nodeInputs: B,
    elementInputs: Z,
    deformOutputs: D,
    analyzeOutputs: G,
    objects3D: U
  };
  let y = null, z = {}, _ = null;
  const F = ne();
  F.div.style.display = "none";
  function V() {
    g.objects3D.val = [], g.nodes.val = [], g.elements.val = [], g.nodeInputs.val = {}, g.elementInputs.val = {}, g.deformOutputs.val = {}, g.analyzeOutputs.val = {};
  }
  function Q(e) {
    if (y = e, z = Object.fromEntries(Object.entries(e.params).map(([n, s]) => [
      n,
      s.default
    ])), V(), e.build(z, g, F), e.defaultShellResult) {
      const n = X.__settings;
      (n == null ? void 0 : n.shellResults) && (n.shellResults.val = e.defaultShellResult), (n == null ? void 0 : n.loads) && (n.loads.val = true), (n == null ? void 0 : n.supports) && (n.supports.val = true);
    }
    me(e.availableShellResults), K(), ue();
  }
  function K() {
    const e = X.__settings;
    (e == null ? void 0 : e.displayScale) && (e.displayScale.val = 1);
  }
  function me(e) {
    const n = X.querySelectorAll("select"), s = Array.from(n).find((c) => Array.from(c.options).some((o) => o.value === "bendingXX"));
    if (!s) return;
    for (const c of Array.from(s.options)) {
      const o = c.value === "none" || !e || e.includes(c.value);
      c.hidden = !o, c.disabled = !o;
    }
    const l = X.__settings;
    (l == null ? void 0 : l.shellResults) && (s.value = l.shellResults.val, s.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function P() {
    y && (V(), y.build(z, g, F), K());
  }
  const Y = document.createElement("div");
  Y.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px";
  document.body.appendChild(Y);
  function $(e) {
    const n = X.__ctx;
    if (!n) return;
    const { camera: s, controls: l, render: c } = n, o = l.target.clone(), r = s.position.distanceTo(o) || 10;
    switch (e) {
      case "iso":
        s.position.set(o.x + r * 0.6, o.y - r * 0.6, o.z + r * 0.6);
        break;
      case "plan":
        s.position.set(o.x, o.y, o.z + r);
        break;
      case "elevX":
        s.position.set(o.x + r, o.y, o.z);
        break;
      case "elevY":
        s.position.set(o.x, o.y + r, o.z);
        break;
    }
    s.up.set(0, 0, 1), s.lookAt(o), l.update(), c == null ? void 0 : c();
  }
  function ue() {
    if (_ && (_.dispose(), _ = null), Y.innerHTML = "", !y) return;
    const e = new J({
      container: Y,
      title: y.name
    }), n = {
      id: y.id
    }, s = Object.fromEntries(I.map((m) => [
      `${m.category} \xB7 ${m.name}`,
      m.id
    ]));
    e.addBinding(n, "id", {
      label: "Ejemplo",
      options: s
    }).on("change", (m) => {
      const p = I.find((h) => h.id === m.value);
      p && Q(p);
    });
    const l = e.addFolder({
      title: "Vista",
      expanded: false
    });
    l.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => $("iso")), l.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => $("plan")), l.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => $("elevX")), l.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => $("elevY"));
    const c = e.addFolder({
      title: "Unidades",
      expanded: false
    }), o = {
      force: j.val,
      disp: H.val
    };
    c.addBinding(o, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (m) => {
      j.val = m.value, P();
    }), c.addBinding(o, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (m) => {
      H.val = m.value, P();
    });
    const r = e.addFolder({
      title: "Par\xE1metros"
    });
    let i = null;
    const x = () => {
      i !== null && clearTimeout(i), i = window.setTimeout(() => {
        i = null, P();
      }, 120);
    };
    for (const [m, p] of Object.entries(y.params)) {
      const h = {
        label: p.label ?? m
      };
      p.options !== void 0 ? h.options = p.options : (p.min !== void 0 && (h.min = p.min), p.max !== void 0 && (h.max = p.max), p.step !== void 0 && (h.step = p.step)), r.addBinding(z, m, h).on("change", () => {
        (y == null ? void 0 : y.onParamChange) && (y.onParamChange(m, z), e.refresh()), x();
      });
    }
    y.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      F.div.style.display = "block", y.runModal && y.runModal(z, g, F);
    }), _ = e;
  }
  const fe = {
    deformedShape: true,
    shellResults: "pressure",
    gridSize: 10
  }, X = ee({
    mesh: {
      nodes: A,
      elements: C,
      nodeInputs: B,
      elementInputs: Z,
      deformOutputs: D,
      analyzeOutputs: G
    },
    objects3D: U,
    settingsObj: fe
  });
  document.body.append(X, te({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(F.div);
  const q = new URLSearchParams(window.location.search).get("t"), R = q && I.find((e) => e.id === q) || I.find((e) => e.id === "zapata-aislada") || I[0];
  R && (Q(R), (R.id === "zapata-aislada" || R.id === "zapata-viga-amarre") && setTimeout(() => $("iso"), 200));
});
