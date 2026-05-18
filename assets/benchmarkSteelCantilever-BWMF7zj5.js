import { m as E, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
import { a as m, b as s, c as b } from "./units-yggW8zr_.js";
import { b as S, e as v, __tla as __tla_1 } from "./cantileverE2k-3xUfmnG9.js";
let P;
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
  P = {
    id: "benchmark-steel-cantilever",
    name: "\u{1F3C1} Frame \xB7 Columna ACERO Cantilever",
    category: "\u{1F3C1} Benchmarks \xB7 \u{1F3AF} 1 DOF Cantilever Axial",
    benchmark: true,
    defaultShellResult: "none",
    guide: [
      "Caso CAN\xD3NICO de validaci\xF3n FRAME ACERO: 1 columna HSS hueca cantilever, L=3m.",
      "Secci\xF3n HSS300\xD7300\xD712mm (Steel Tube hueco) \u2014 material A572Gr50.",
      "Empotramiento total en base (UX UY UZ RX RY RZ) \u2014 coincide con ETABS can\xF3nico.",
      "Peso propio aplicado como nodal equivalente q\xB7L = 3.19 kN distribuido.",
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
        max: 0.5,
        step: 0.01,
        label: "D / B (m)",
        folder: "Secci\xF3n"
      },
      t_HSS: {
        default: 0.012,
        min: 5e-3,
        max: 0.03,
        step: 1e-3,
        label: "t pared (m)",
        folder: "Secci\xF3n"
      },
      E_s: {
        default: 2e8,
        min: 15e7,
        max: 22e7,
        step: 5e6,
        label: "E acero (kN/m\xB2)",
        folder: "Material"
      },
      gamma_s: {
        default: 76.97,
        min: 60,
        max: 90,
        step: 0.5,
        label: "\u03B3_s acero (kN/m\xB3)",
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
      _E_c: {
        default: 2486e4,
        label: "(no usar)",
        folder: "Avanzado"
      },
      _gamma_c: {
        default: 23.56,
        label: "(no usar)",
        folder: "Avanzado"
      }
    },
    hasModal: true,
    onParamChange(e, o) {
      e === "exportE2k" && o.exportE2k > 0.5 && (v(x(o), 0), o.exportE2k = 0);
    },
    computedLabels(e) {
      const o = e.D_out, t = e.t_HSS, a = o - 2 * t, l = o * o - a * a, r = (o ** 4 - a ** 4) / 12, n = e.gamma_s * l, d = n * e.L, i = n * e.L * e.L / (2 * e.E_s * l) * 1e3;
      return {
        "A_s (HSS hueca)": `${(l * 1e4).toFixed(2)} cm\xB2`,
        I_s: `${(r * 1e8).toFixed(2)} cm\u2074`,
        EA: `${(e.E_s * l).toFixed(0)} kN`,
        EI: `${(e.E_s * r).toFixed(0)} kN\xB7m\xB2`,
        "q peso propio": `${n.toFixed(3)} kN/m`,
        "W = q\xB7L": `${d.toFixed(3)} kN`,
        "Uz_top anal\xEDtico": `${i.toFixed(5)} mm`
      };
    },
    build(e, o) {
      var _a, _b;
      const { sec: t } = S(x(e), o, 0), a = e.L, l = Math.max(1, Math.round(e.nSegments)), r = (_a = o.deformOutputs.val.deformations) == null ? void 0 : _a.get(l), n = (_b = o.deformOutputs.val.reactions) == null ? void 0 : _b.get(0);
      if (r) {
        const d = r[2], i = r[0], _ = -t.q * a * a / (2 * t.E_col * t.A_eq), A = (d - _) / Math.abs(_) * 100;
        let c = `[Cantilever ACERO] ${l} segmentos
  Secci\xF3n: ${t.sectionLabel}
  Modifiers: A=${e.A_mod} As2=${e.As2_mod} As3=${e.As3_mod} J=${e.J_mod} I22=${e.I22_mod} I33=${e.I33_mod}
  Uz_top   = ${m(d, 5)}  (anal\xEDtico ${m(_, 5)}, \u0394 ${A.toFixed(3)}%)
`;
        if (Math.abs(e.P_lat) > 1e-9) {
          const g = 0.8333333333333334 * t.A_eq, u = e.P_lat * a * a * a / (3 * t.E_col * t.I_eq), f = e.P_lat * a / (t.G_col * g), p = u + f, M = e.P_lat * a, $ = e.P_lat;
          c += `  Ux_top = ${m(i, 4)} (lateral, P=${s(e.P_lat)})
    Anal\xEDtico Timoshenko: ${m(p, 4)} (bending ${m(u, 4)} + shear ${m(f, 4)})
  Esperado en base: M = P\xB7L = ${b(M)},  V = P = ${s($)}
`;
        }
        n && (c += `  Reacci\xF3n base: Fz=${s(n[2], 3)}  My=${b(n[4], 3)}  (W=${s(t.q * a, 3)} esperado)`), console.log(c);
      }
    },
    runModal(e, o, t) {
      if (o.nodes.val.length) try {
        const a = E(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, 3);
        console.log(`[Cantilever Acero \u2014 Modal] 3 primeros modos:
` + a.frequencies.map((l, r) => `  Modo ${r + 1}: f = ${l.toFixed(3)} Hz   T = ${(1 / l).toFixed(4)} s`).join(`
`)), (t == null ? void 0 : t.render) && t.render(a, {
          title: `Cantilever ACERO L=${e.L}m  HSS${(e.D_out * 1e3).toFixed(0)}\xD7${(e.D_out * 1e3).toFixed(0)}\xD7${(e.t_HSS * 1e3).toFixed(0)}mm`,
          properties: [
            `E=${(e.E_s / 1e6).toFixed(1)} GPa  \u03B3=${e.gamma_s.toFixed(2)} kN/m\xB3`
          ]
        });
      } catch (a) {
        console.error("[Cantilever Acero Modal] error:", a.message);
      }
    }
  };
  function x(e) {
    return {
      L: e.L,
      D_out: e.D_out,
      t_HSS: e.t_HSS,
      E_s: e.E_s,
      E_c: e._E_c ?? 2486e4,
      gamma_s: e.gamma_s,
      gamma_c: e._gamma_c ?? 23.56,
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
  P as b
};
