import { m as p, __tla as __tla_0 } from "./didacticCpp-q5lN0Q74.js";
import { g as b, h as E, d as h, P as l, __tla as __tla_1 } from "./pazFrameE2k-x3QT6IG7.js";
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
  let k;
  k = {
    freqs_Hz: [
      4.02,
      4.97,
      10.33
    ],
    L_in: 100,
    AE_lb: 6e4,
    EI_lbin2: 1e6
  };
  A = {
    id: "benchmark-paz-11-1",
    name: "\u{1F3C1} Frame \xB7 Paz 11.1 (plane frame inclinado 45\xB0)",
    category: "\u{1F3C1} Benchmarks \xB7 6\uFE0F\u20E3 Paz",
    benchmark: true,
    defaultShellResult: "none",
    guide: [
      "Paz Ej. 11.1 \u2014 Plane frame 2 elementos: barra inclinada 45\xB0 + horizontal.",
      "Datos derivados: L=100 in, AE=60,000 lb, EI=1e6 lb\xB7in\xB2.",
      "Resultados libro: f\u2081=4.02 Hz, f\u2082=4.97 Hz, f\u2083=10.33 Hz (3 modos in-plane).",
      "\u{1F4E4} Toggle 'Exportar a .e2k' \u2192 modelo ETABS plane frame 2D."
    ],
    params: {
      L_in: {
        default: 100,
        min: 50,
        max: 300,
        step: 5,
        label: "L cada barra (in)",
        folder: "Geometr\xEDa"
      },
      A_in2: {
        default: 2,
        min: 0.5,
        max: 50,
        step: 0.1,
        label: "A barra (in\xB2)",
        folder: "Secci\xF3n"
      },
      I_in4: {
        default: 33.33,
        min: 10,
        max: 200,
        step: 0.5,
        label: "I barra (in\u2074)",
        folder: "Secci\xF3n"
      },
      E_psi: {
        default: 3e7,
        min: 25e6,
        max: 35e6,
        step: 5e5,
        label: "E (psi)",
        folder: "Material"
      },
      G_psi: {
        default: 12e6,
        min: 1e7,
        max: 14e6,
        step: 5e5,
        label: "G (psi)",
        folder: "Material"
      },
      mbar: {
        default: 0.078,
        min: 0.01,
        max: 1,
        step: 1e-3,
        label: "m\u0304 (lb\xB7s\xB2/in/in)",
        folder: "Masa"
      },
      exportE2k: {
        default: 0,
        boolean: true,
        label: "\u{1F4E4} Exportar a ETABS .e2k",
        folder: "Exportar"
      }
    },
    hasModal: true,
    onParamChange(e, n) {
      if (e === "exportE2k" && n.exportE2k > 0.5) {
        const a = c(n), { filename: o, content: t } = E(a, "Paz_11_1");
        h(o, t), console.log(`[Paz 11.1] e2k exportado: ${o}`), n.exportE2k = 0;
      }
    },
    computedLabels(e) {
      const n = e.A_in2 * e.E_psi, a = e.E_psi * e.I_in4;
      return {
        AE: `${n.toFixed(0)} lb  (libro 60,000)`,
        EI: `${a.toExponential(3)} lb\xB7in\xB2  (libro 1.0e6)`,
        "AE/L": (n / e.L_in).toFixed(2),
        "EI/L\xB3 \xD712": (12 * a / Math.pow(e.L_in, 3)).toFixed(2)
      };
    },
    build(e, n) {
      const a = c(e);
      b(a, n), console.log(`[Paz 11.1] Modelo construido. L=${e.L_in}in, A=${e.A_in2}in\xB2, I=${e.I_in4}in\u2074`);
    },
    runModal(e, n, a) {
      if (n.nodes.val.length) try {
        const o = p(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, 6);
        console.log(`[Paz 11.1 \u2014 Modal] frecuencias:
` + o.frequencies.slice(0, 6).map((t, r) => {
          const i = k.freqs_Hz[r] ?? null, m = i ? ` (libro ${i.toFixed(2)})` : "";
          return `  Modo ${r + 1}: f = ${t.toFixed(3)} Hz${m}`;
        }).join(`
`)), (a == null ? void 0 : a.render) && a.render(o, {
          title: "Paz 11.1 \u2014 Plane frame inclinado 45\xB0",
          properties: [
            "Libro: f\u2081=4.02, f\u2082=4.97, f\u2083=10.33 Hz"
          ]
        });
      } catch (o) {
        console.error("[Paz 11.1 Modal]", o.message);
      }
    }
  };
  function c(e) {
    const n = l.in_to_m(e.L_in), a = l.psi_to_kNm2(e.E_psi), o = l.psi_to_kNm2(e.G_psi), t = l.in2_to_m2(e.A_in2), r = l.in4_to_m4(e.I_in4), d = e.mbar * 386.088 * 175.13 / 9.80665 / t, u = [
      [
        0,
        0,
        0
      ],
      [
        n * Math.cos(Math.PI / 4),
        0,
        n * Math.sin(Math.PI / 4)
      ],
      [
        n * Math.cos(Math.PI / 4) + n,
        0,
        n * Math.sin(Math.PI / 4)
      ]
    ], f = [
      [
        0,
        1
      ],
      [
        1,
        2
      ]
    ], s = /* @__PURE__ */ new Map();
    s.set(0, [
      true,
      true,
      true,
      true,
      true,
      true
    ]), s.set(2, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    const _ = {
      A: t,
      Iy: r,
      Iz: r * 0.3,
      J: r * 0.05,
      E: a,
      G: o,
      rho: d,
      label: `Paz 11.1 frame elem (A=${e.A_in2}in\xB2, I=${e.I_in4}in\u2074)`,
      e2kName: "FRAME_PAZ11_1",
      e2kShape: "Steel I/Wide Flange",
      e2kD: 0.3,
      e2kB: 0.2,
      e2kTF: 0.018,
      e2kTW: 0.011
    };
    return {
      nodes: u,
      elements: f,
      supports: s,
      sectionByElement: [
        _,
        _
      ],
      materialName: "A992Fy50",
      materialType: "Steel"
    };
  }
});
export {
  __tla,
  A as b
};
