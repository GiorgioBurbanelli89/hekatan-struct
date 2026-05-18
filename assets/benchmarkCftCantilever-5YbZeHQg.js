import { m as S, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
import { a as s, b as f, c as g } from "./units-yggW8zr_.js";
import { b as T, e as y, __tla as __tla_1 } from "./cantileverE2k-3xUfmnG9.js";
let k;
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
  let p;
  p = {
    Uz_top_mm: -28e-4
  };
  k = {
    id: "benchmark-cft-cantilever",
    name: "\u{1F3C1} Frame \xB7 Columna CFT Cantilever",
    category: "\u{1F3C1} Benchmarks \xB7 \u{1F3AF} 1 DOF Cantilever Axial",
    benchmark: true,
    defaultShellResult: "none",
    guide: [
      "Caso CAN\xD3NICO de validaci\xF3n FRAME: 1 columna CFT cantilever, L=3m, peso propio.",
      "Secci\xF3n CR300\xD7300\xD7121mm = HSS 300\xD7300\xD712 + concreto fill 4000Psi (Filled Steel Tube).",
      "Empotramiento total en base (UX UY UZ RX RY RZ) \u2014 coincide con ETABS can\xF3nico.",
      "Carga: peso propio aplicado como punto equivalente P=qL/2 en tope (u_top match exacto).",
      "Hover sobre nodo top \u2192 ver Uz; hover sobre base \u2192 ver reacci\xF3n Fz=qL=8.58 kN.",
      "Compara consola: Hekatan \u2248 ETABS API (-0.0028 mm) \u2248 anal\xEDtico (qL\xB2/2EA = -0.00276 mm).",
      "\u2705 Toggle 'Exportar a .e2k' \u2192 descarga archivo ETABS para validaci\xF3n cruzada."
    ],
    params: {
      materialType: {
        default: 2,
        label: "Tipo de columna",
        options: {
          "Acero (HSS hueco)": 0,
          "Hormig\xF3n (rectangular)": 1,
          "Mixta CFT (Filled Steel Tube)": 2
        },
        folder: "Secci\xF3n",
        regenOnChange: true
      },
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
        label: "t pared (m, s\xF3lo Acero/CFT)",
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
      E_c: {
        default: 2486e4,
        min: 1e7,
        max: 5e7,
        step: 1e6,
        label: "E concreto (kN/m\xB2)",
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
      gamma_c: {
        default: 23.56,
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
      }
    },
    hasModal: true,
    onParamChange(e, a) {
      if (e === "exportE2k" && a.exportE2k > 0.5) {
        const l = Math.round(a.materialType ?? 2);
        y(a, l), a.exportE2k = 0;
      }
    },
    computedLabels(e) {
      const a = e.D_out, l = e.t_HSS, o = a - 2 * l, t = a * a - o * o, r = o * o, d = (a ** 4 - o ** 4) / 12, c = o ** 4 / 12, n = e.E_s / e.E_c, _ = t + r / n, m = d + c / n, u = e.gamma_s * t + e.gamma_c * r, x = u * e.L, i = u * e.L * e.L / (2 * e.E_s * _) * 1e3;
      return {
        "A_s (HSS)": `${(t * 1e4).toFixed(2)} cm\xB2`,
        "A_c (fill)": `${(r * 1e4).toFixed(2)} cm\xB2`,
        "n=E_s/E_c": n.toFixed(3),
        A_eq: `${(_ * 1e4).toFixed(2)} cm\xB2 (E\xB7A=${(e.E_s * _).toFixed(0)} kN)`,
        I_eq: `${(m * 1e8).toFixed(2)} cm\u2074 (E\xB7I=${(e.E_s * m).toFixed(0)} kN\xB7m\xB2)`,
        "q peso propio": `${u.toFixed(3)} kN/m`,
        "W = q\xB7L": `${x.toFixed(3)} kN`,
        "Uz_top anal\xEDtico": `${i.toFixed(5)} mm`,
        "ETABS API ref": `${p.Uz_top_mm} mm`
      };
    },
    build(e, a) {
      var _a, _b;
      const l = Math.round(e.materialType ?? 2), { sec: o } = T(e, a, l), t = e.L, r = Math.max(1, Math.round(e.nSegments)), d = (_a = a.deformOutputs.val.deformations) == null ? void 0 : _a.get(r), c = (_b = a.deformOutputs.val.reactions) == null ? void 0 : _b.get(0);
      if (d) {
        const n = d[2], _ = d[0], m = -o.q * t * t / (2 * o.E_col * o.A_eq), u = (n * 1e3 - p.Uz_top_mm) / Math.abs(p.Uz_top_mm) * 100, x = (n - m) / Math.abs(m) * 100;
        let i = `[Cantilever ${o.materialType}] ${r} segmentos
  Secci\xF3n: ${o.sectionLabel}
  Modifiers: A=${e.A_mod} As2=${e.As2_mod} As3=${e.As3_mod} J=${e.J_mod} I22=${e.I22_mod} I33=${e.I33_mod}
  Uz_top   = ${s(n, 5)}  (anal\xEDtico ${s(m, 5)}, \u0394 ${x.toFixed(3)}%)
`;
        if (l === 2 && (i += `  ETABS API: ${p.Uz_top_mm.toFixed(5)} mm  (\u0394 ${u.toFixed(2)}%)
`), Math.abs(e.P_lat) > 1e-9) {
          const $ = 0.8333333333333334 * o.A_eq, b = e.P_lat * t * t * t / (3 * o.E_col * o.I_eq), A = e.P_lat * t / (o.G_col * $), E = b + A, M = e.P_lat * t, F = e.P_lat;
          i += `  Ux_top = ${s(_, 4)} (lateral, P=${f(e.P_lat)})
    Anal\xEDtico Timoshenko: ${s(E, 4)} (bending ${s(b, 4)} + shear ${s(A, 4)})
  Esperado en base: M = P\xB7L = ${g(M)},  V = P = ${f(F)}
`;
        }
        c && (i += `  Reacci\xF3n base: Fz=${f(c[2], 3)}  My=${g(c[4], 3)}  (W=${f(o.q * t, 3)} esperado)`), console.log(i);
      }
    },
    runModal(e, a, l) {
      if (a.nodes.val.length) try {
        const o = S(a.nodes.val, a.elements.val, a.nodeInputs.val, a.elementInputs.val, 3);
        console.log(`[Cantilever \u2014 Modal] 3 primeros modos:
` + o.frequencies.map((t, r) => `  Modo ${r + 1}: f = ${t.toFixed(3)} Hz   T = ${(1 / t).toFixed(4)} s`).join(`
`)), (l == null ? void 0 : l.render) && l.render(o, {
          title: `Cantilever ${e.materialType === 0 ? "Acero" : e.materialType === 1 ? "Hormig\xF3n" : "CFT"} L=${e.L}m`,
          properties: [
            `D=${(e.D_out * 1e3).toFixed(0)}mm  t=${(e.t_HSS * 1e3).toFixed(0)}mm  E=${(e.E_s / 1e6).toFixed(1)} GPa`
          ]
        });
      } catch (o) {
        console.error("[Cantilever Modal] error:", o.message);
      }
    }
  };
});
export {
  __tla,
  k as b
};
