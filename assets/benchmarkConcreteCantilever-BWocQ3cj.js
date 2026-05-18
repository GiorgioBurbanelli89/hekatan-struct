import { m as v, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
import { a as n, b as d, c as b } from "./units-yggW8zr_.js";
import { g as y, b as P, e as F, __tla as __tla_1 } from "./loadCaseHelpers-CqGkeYfR.js";
let h;
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
  h = {
    id: "benchmark-concrete-cantilever",
    name: "\u{1F3C1} Frame \xB7 Columna HORMIG\xD3N Cantilever",
    category: "\u{1F3C1} Benchmarks \xB7 1\uFE0F\u20E3 Frames \xB7 \u{1F3DB} Columnas \xB7 \u{1F3AF} 1 DOF Axial",
    benchmark: true,
    defaultShellResult: "none",
    guide: [
      "Caso CAN\xD3NICO de validaci\xF3n FRAME HORMIG\xD3N: 1 columna 30\xD730cm cantilever, L=3m.",
      "Secci\xF3n Concrete Rectangular s\xF3lida \u2014 material concrete (E=25 GPa, \u03B3=23.5 kN/m\xB3).",
      "Empotramiento total en base (UX UY UZ RX RY RZ) \u2014 coincide con ETABS can\xF3nico.",
      "Peso propio aplicado como nodal equivalente q\xB7L = 6.36 kN distribuido.",
      "Hover sobre nodo top \u2192 ver Uz; hover sobre base \u2192 ver reacci\xF3n Fz=qL.",
      "\u2705 Toggle 'Exportar a .e2k' \u2192 descarga archivo ETABS para validaci\xF3n cruzada."
    ],
    params: {
      L: {
        default: 3,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Altura columna (m)",
        folder: "Geometr\xEDa"
      },
      D_out: {
        default: 0.3,
        min: 0.15,
        max: 0.8,
        step: 0.01,
        label: "B = H secci\xF3n (m)",
        folder: "Secci\xF3n"
      },
      E_c: {
        default: 2499e4,
        min: 1e7,
        max: 5e7,
        step: 1e6,
        label: "E concreto (kN/m\xB2)",
        folder: "Material"
      },
      gamma_c: {
        default: 23.54,
        min: 18,
        max: 28,
        step: 0.5,
        label: "\u03B3_c concreto (kN/m\xB3)",
        folder: "Material"
      },
      A_mod: {
        default: 1,
        min: 0,
        max: 1,
        step: 0.01,
        label: "Area mod (axial)",
        folder: "Property Modifiers"
      },
      As2_mod: {
        default: 1,
        min: 0,
        max: 1,
        step: 0.01,
        label: "As2 mod (cortante 2)",
        folder: "Property Modifiers"
      },
      As3_mod: {
        default: 1,
        min: 0,
        max: 1,
        step: 0.01,
        label: "As3 mod (cortante 3)",
        folder: "Property Modifiers"
      },
      J_mod: {
        default: 1,
        min: 0,
        max: 1,
        step: 0.01,
        label: "Torsion mod (J)",
        folder: "Property Modifiers"
      },
      I22_mod: {
        default: 1,
        min: 0,
        max: 1,
        step: 0.01,
        label: "I22 mod (flexi\xF3n weak)",
        folder: "Property Modifiers"
      },
      I33_mod: {
        default: 1,
        min: 0,
        max: 1,
        step: 0.01,
        label: "I33 mod (flexi\xF3n strong)",
        folder: "Property Modifiers"
      },
      P_lat: {
        default: 0,
        min: -100,
        max: 100,
        step: 1,
        label: "Fx top (carga lateral X)",
        folder: "Cargas",
        unitType: "force",
        rangeAdjustable: true
      },
      P_lat_y: {
        default: 0,
        min: -100,
        max: 100,
        step: 1,
        label: "Fy top (carga lateral Y)",
        folder: "Cargas",
        unitType: "force",
        rangeAdjustable: true
      },
      M_top_x: {
        default: 0,
        min: -100,
        max: 100,
        step: 0.5,
        label: "Mx top (alrededor X global)",
        folder: "Cargas",
        unitType: "moment",
        rangeAdjustable: true
      },
      M_top_y: {
        default: 0,
        min: -100,
        max: 100,
        step: 0.5,
        label: "My top (alrededor Y global)",
        folder: "Cargas",
        unitType: "moment",
        rangeAdjustable: true
      },
      M_top_z: {
        default: 0,
        min: -100,
        max: 100,
        step: 0.5,
        label: "Mz top (torsor)",
        folder: "Cargas",
        unitType: "moment",
        rangeAdjustable: true
      },
      nSegments: {
        default: 10,
        min: 1,
        max: 50,
        step: 1,
        label: "Segmentos columna",
        folder: "Mesh"
      },
      exportE2k: {
        default: 0,
        boolean: true,
        label: "\u{1F4E4} Exportar a ETABS .e2k",
        folder: "Exportar"
      },
      _t_HSS: {
        default: 0.012,
        label: "(no usar)",
        folder: "Avanzado"
      },
      _E_s: {
        default: 2e8,
        label: "(no usar)",
        folder: "Avanzado"
      },
      _gamma_s: {
        default: 76.97,
        label: "(no usar)",
        folder: "Avanzado"
      }
    },
    hasModal: true,
    onParamChange(e, o) {
      e === "exportE2k" && o.exportE2k > 0.5 && (F(x(o), 1), o.exportE2k = 0);
    },
    computedLabels(e) {
      const o = e.D_out, l = o * o, a = o ** 4 / 12, t = e.gamma_c * l, r = t * e.L, m = t * e.L * e.L / (2 * e.E_c * l) * 1e3;
      return {
        A: `${(l * 1e4).toFixed(2)} cm\xB2`,
        I: `${(a * 1e8).toFixed(2)} cm\u2074`,
        EA: `${(e.E_c * l).toFixed(0)} kN`,
        EI: `${(e.E_c * a).toFixed(0)} kN\xB7m\xB2`,
        "q peso propio": `${t.toFixed(3)} kN/m`,
        "W = q\xB7L": `${r.toFixed(3)} kN`,
        "Uz_top anal\xEDtico": `${m.toFixed(5)} mm`
      };
    },
    build(e, o) {
      var _a, _b;
      const l = y(o), { sec: a } = P(x(e), o, 1, l), t = e.L, r = Math.max(1, Math.round(e.nSegments)), m = (_a = o.deformOutputs.val.deformations) == null ? void 0 : _a.get(r), s = (_b = o.deformOutputs.val.reactions) == null ? void 0 : _b.get(0);
      if (m) {
        const c = m[2], g = m[0], i = -a.q * t * t / (2 * a.E_col * a.A_eq), M = (c - i) / Math.abs(i) * 100;
        let _ = `[Cantilever HORMIG\xD3N] ${r} segmentos
  Secci\xF3n: ${a.sectionLabel}
  Modifiers: A=${e.A_mod} As2=${e.As2_mod} As3=${e.As3_mod} J=${e.J_mod} I22=${e.I22_mod} I33=${e.I33_mod}
  Uz_top   = ${n(c, 5)}  (anal\xEDtico ${n(i, 5)}, \u0394 ${M.toFixed(3)}%)
`;
        if (Math.abs(e.P_lat) > 1e-9) {
          const A = 0.8333333333333334 * a.A_eq, u = e.P_lat * t * t * t / (3 * a.E_col * a.I_eq), f = e.P_lat * t / (a.G_col * A), p = u + f, $ = e.P_lat * t, E = e.P_lat;
          _ += `  Ux_top = ${n(g, 4)} (lateral, P=${d(e.P_lat)})
    Anal\xEDtico Timoshenko: ${n(p, 4)} (bending ${n(u, 4)} + shear ${n(f, 4)})
  Esperado en base: M = P\xB7L = ${b($)},  V = P = ${d(E)}
`;
        }
        s && (_ += `  Reacci\xF3n base: Fz=${d(s[2], 3)}  My=${b(s[4], 3)}  (W=${d(a.q * t, 3)} esperado)`), console.log(_);
      }
    },
    runModal(e, o, l) {
      if (o.nodes.val.length) try {
        const a = v(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, 3);
        console.log(`[Cantilever Hormig\xF3n \u2014 Modal] 3 primeros modos:
` + a.frequencies.map((t, r) => `  Modo ${r + 1}: f = ${t.toFixed(3)} Hz   T = ${(1 / t).toFixed(4)} s`).join(`
`)), (l == null ? void 0 : l.render) && l.render(a, {
          title: `Cantilever HORMIG\xD3N L=${e.L}m  ${(e.D_out * 100).toFixed(0)}\xD7${(e.D_out * 100).toFixed(0)}cm`,
          properties: [
            `E=${(e.E_c / 1e6).toFixed(1)} GPa  \u03B3=${e.gamma_c.toFixed(2)} kN/m\xB3`
          ]
        });
      } catch (a) {
        console.error("[Cantilever Hormig\xF3n Modal] error:", a.message);
      }
    }
  };
  function x(e) {
    return {
      L: e.L,
      D_out: e.D_out,
      t_HSS: e._t_HSS ?? 0.012,
      E_s: e._E_s ?? 2e8,
      E_c: e.E_c,
      gamma_s: e._gamma_s ?? 76.97,
      gamma_c: e.gamma_c,
      A_mod: e.A_mod,
      As2_mod: e.As2_mod,
      As3_mod: e.As3_mod,
      J_mod: e.J_mod,
      I22_mod: e.I22_mod,
      I33_mod: e.I33_mod,
      P_lat: e.P_lat,
      P_lat_y: e.P_lat_y ?? 0,
      M_top_x: e.M_top_x ?? 0,
      M_top_y: e.M_top_y ?? 0,
      M_top_z: e.M_top_z ?? 0,
      nSegments: e.nSegments
    };
  }
});
export {
  __tla,
  h as b
};
