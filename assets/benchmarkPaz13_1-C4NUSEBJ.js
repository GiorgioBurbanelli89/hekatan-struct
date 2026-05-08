import { m as F, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
import { i as S, j as I, d as P, P as u, __tla as __tla_1 } from "./pazFrameE2k-CZP8Q2TF.js";
import { a as L, z as y, p as $, r as k, n as v, g as A } from "./newmarkBeta-CZ1uRmPu.js";
let G;
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
  G = {
    id: "benchmark-paz-13-1",
    name: "\u{1F3C1} Frame \xB7 Paz 13.1 (Space Frame 3D \u2014 4 vigas radiando)",
    category: "\u{1F3C1} Benchmarks \xB7 6\uFE0F\u20E3 Paz",
    benchmark: true,
    defaultShellResult: "none",
    guide: [
      "Paz Ej. 13.1 \u2014 Space frame 3D, 5 nodos (1 libre + 4 empotrados radiando).",
      "Members 1,3 (verticales/X): A=50 in\xB2, Iy=Iz=200 in\u2074, J=40, m=0.2 lb\xB7s\xB2/in\xB2.",
      "Members 2,4 (Y\xB1): A=28, Iy=Iz=64, J=12.8, m=0.1.",
      "Material: E=30e6 psi, G=12e6 psi (acero).",
      "Carga: F=5000 lb step en Z por 0.1s aplicada en nodo 1.",
      "\u{1F4C8} Chart Panel: time history u_z(t), v_z(t), a_z(t) del nodo 1.",
      "\u{1F4E4} Toggle 'Exportar a .e2k' \u2192 modelo ETABS multi-story para validaci\xF3n."
    ],
    params: {
      L_in: {
        default: 200,
        min: 50,
        max: 500,
        step: 10,
        label: "Longitud miembro (in)",
        folder: "Geometr\xEDa"
      },
      A1_in2: {
        default: 50,
        min: 10,
        max: 200,
        step: 1,
        label: "A miembros 1,3 (in\xB2)",
        folder: "Secci\xF3n"
      },
      I1_in4: {
        default: 200,
        min: 50,
        max: 1e3,
        step: 5,
        label: "Iy=Iz miembros 1,3 (in\u2074)",
        folder: "Secci\xF3n"
      },
      J1_in4: {
        default: 40,
        min: 10,
        max: 200,
        step: 1,
        label: "J miembros 1,3 (in\u2074)",
        folder: "Secci\xF3n"
      },
      A2_in2: {
        default: 28,
        min: 10,
        max: 200,
        step: 1,
        label: "A miembros 2,4 (in\xB2)",
        folder: "Secci\xF3n"
      },
      I2_in4: {
        default: 64,
        min: 20,
        max: 500,
        step: 1,
        label: "Iy=Iz miembros 2,4 (in\u2074)",
        folder: "Secci\xF3n"
      },
      J2_in4: {
        default: 12.8,
        min: 5,
        max: 100,
        step: 0.5,
        label: "J miembros 2,4 (in\u2074)",
        folder: "Secci\xF3n"
      },
      E_psi: {
        default: 3e7,
        min: 25e6,
        max: 35e6,
        step: 5e5,
        label: "E acero (psi)",
        folder: "Material"
      },
      G_psi: {
        default: 12e6,
        min: 1e7,
        max: 14e6,
        step: 5e5,
        label: "G acero (psi)",
        folder: "Material"
      },
      mbar1: {
        default: 0.2,
        min: 0.05,
        max: 1,
        step: 0.05,
        label: "m\u0304 miembros 1,3 (lb\xB7s\xB2/in\xB2)",
        folder: "Masa"
      },
      mbar2: {
        default: 0.1,
        min: 0.05,
        max: 1,
        step: 0.05,
        label: "m\u0304 miembros 2,4 (lb\xB7s\xB2/in\xB2)",
        folder: "Masa"
      },
      F0_lb: {
        default: 5e3,
        min: 0,
        max: 2e4,
        step: 100,
        label: "Step F0 nodo 1 Z (lb)",
        folder: "Time History"
      },
      pulseDur_s: {
        default: 0.1,
        min: 0.01,
        max: 1,
        step: 0.01,
        label: "Duraci\xF3n step (s)",
        folder: "Time History"
      },
      tEnd_s: {
        default: 0.5,
        min: 0.1,
        max: 5,
        step: 0.1,
        label: "t fin an\xE1lisis (s)",
        folder: "Time History"
      },
      dt_s: {
        default: 1e-3,
        min: 1e-4,
        max: 0.01,
        step: 1e-4,
        label: "\u0394t Newmark (s)",
        folder: "Time History"
      },
      xi: {
        default: 0.05,
        min: 0,
        max: 0.2,
        step: 5e-3,
        label: "Damping \u03BE",
        folder: "Time History"
      },
      showTH: {
        default: 1,
        boolean: true,
        label: "\u{1F4C8} Mostrar Chart Panel",
        folder: "Time History"
      },
      plotType: {
        default: 0,
        label: "Tipo gr\xE1fica",
        options: {
          "u_z(t)": 0,
          "v_z(t)": 1,
          "a_z(t)": 2,
          "F(t)": 3,
          "u_x,y,z(t)": 4
        },
        folder: "Time History"
      },
      exportE2k: {
        default: 0,
        boolean: true,
        label: "\u{1F4E4} Exportar a ETABS .e2k",
        folder: "Exportar"
      }
    },
    hasModal: true,
    onParamChange(e, l) {
      if (e === "exportE2k" && l.exportE2k > 0.5) {
        const c = E(l), { filename: t, content: r } = I(c, "Paz_13_1");
        P(t, r), console.log(`[Paz 13.1] e2k exportado: ${t} (${r.length} bytes)`), l.exportE2k = 0;
      }
      e === "showTH" && l.showTH < 0.5 && A().hide();
    },
    build(e, l) {
      const c = E(e);
      S(c, l);
      let t = `[Paz 13.1] Space Frame 3D \u2014 5 nodos
`;
      if (e.showTH > 0.5) {
        const { K6: r, M6: m } = H(e);
        try {
          const d = L(r, m);
          t += `  Modal (solver matricial directo, 6 DOF nodo 1):
`, d.freqs.forEach((o, s) => {
            t += `    Modo ${s + 1}: f = ${o.toFixed(3)} Hz, \u03C9\xB2 = ${d.omega2[s].toFixed(2)}
`;
          });
          const b = Math.sqrt(d.omega2[0]), f = Math.sqrt(d.omega2[Math.min(5, d.omega2.length - 1)]), p = y(6), _ = 2 * e.xi * b * f / (b + f), z = 2 * e.xi / (b + f);
          for (let o = 0; o < 6; o++) for (let s = 0; s < 6; s++) p[o][s] = _ * m[o][s] + z * r[o][s];
          const x = $(k(e.F0_lb, 0, e.pulseDur_s), 2, 6), M = Math.floor(e.tEnd_s / e.dt_s), n = v({
            M: m,
            K: r,
            C: p,
            loadFunc: x,
            u0: [
              0,
              0,
              0,
              0,
              0,
              0
            ],
            v0: [
              0,
              0,
              0,
              0,
              0,
              0
            ],
            dt: e.dt_s,
            nSteps: M
          }), i = Math.max(...n.u.map((o) => Math.abs(o[2])));
          t += `  Newmark-\u03B2 TH (F=${e.F0_lb} lb step ${e.pulseDur_s}s, \u03BE=${e.xi}):
`, t += `    u_z_max nodo 1 = ${i.toExponential(4)} in
`;
          const a = A(), h = Math.round(e.plotType ?? 0);
          h === 0 ? (a.setTitle("Paz 13.1 \u2014 u_z(t) nodo 1"), a.setSeries([
            {
              label: "u_z(t)",
              data: n.t.map((o, s) => [
                o,
                n.u[s][2]
              ]),
              color: "#1a4d8c",
              width: 2
            }
          ]), a.setAxes({
            xLabel: "t (s)",
            yLabel: "u_z (in)",
            grid: true
          })) : h === 1 ? (a.setTitle("Paz 13.1 \u2014 v_z(t) nodo 1"), a.setSeries([
            {
              label: "v_z(t)",
              data: n.t.map((o, s) => [
                o,
                n.v[s][2]
              ]),
              color: "#1a4d8c",
              width: 2
            }
          ]), a.setAxes({
            xLabel: "t (s)",
            yLabel: "v_z (in/s)",
            grid: true
          })) : h === 2 ? (a.setTitle("Paz 13.1 \u2014 a_z(t) nodo 1"), a.setSeries([
            {
              label: "a_z(t)",
              data: n.t.map((o, s) => [
                o,
                n.a[s][2]
              ]),
              color: "#1a4d8c",
              width: 2
            }
          ]), a.setAxes({
            xLabel: "t (s)",
            yLabel: "a_z (in/s\xB2)",
            grid: true
          })) : h === 3 ? (a.setTitle("Paz 13.1 \u2014 Carga F(t) nodo 1"), a.setSeries([
            {
              label: "F_z(t)",
              data: n.t.map((o) => [
                o,
                k(e.F0_lb, 0, e.pulseDur_s)(o)
              ]),
              color: "#7d3c98"
            }
          ]), a.setAxes({
            xLabel: "t (s)",
            yLabel: "F (lb)",
            grid: true
          })) : h === 4 && (a.setTitle("Paz 13.1 \u2014 Translaciones nodo 1"), a.setSeries([
            {
              label: "u_x(t)",
              data: n.t.map((o, s) => [
                o,
                n.u[s][0]
              ]),
              color: "#1a4d8c"
            },
            {
              label: "u_y(t)",
              data: n.t.map((o, s) => [
                o,
                n.u[s][1]
              ]),
              color: "#2d8659"
            },
            {
              label: "u_z(t)",
              data: n.t.map((o, s) => [
                o,
                n.u[s][2]
              ]),
              color: "#c0392b"
            }
          ]), a.setAxes({
            xLabel: "t (s)",
            yLabel: "u (in)",
            grid: true
          })), a.show();
        } catch (d) {
          t += `  \u26A0\uFE0F Error TH: ${d.message}
`;
        }
      }
      console.log(t);
    },
    runModal(e, l, c) {
      if (l.nodes.val.length) try {
        const t = F(l.nodes.val, l.elements.val, l.nodeInputs.val, l.elementInputs.val, 6);
        console.log(`[Paz 13.1 \u2014 Modal Hekatan FEM 3D] frecuencias:
` + t.frequencies.slice(0, 6).map((r, m) => `  Modo ${m + 1}: f = ${r.toFixed(3)} Hz   T = ${(1 / r).toFixed(4)} s`).join(`
`)), (c == null ? void 0 : c.render) && c.render(t, {
          title: "Paz 13.1 \u2014 Space frame 3D",
          properties: [
            `5 nodos: 1 libre + 4 empotrados radiando, L=${e.L_in}in`,
            `M1,3: A=${e.A1_in2} I=${e.I1_in4}; M2,4: A=${e.A2_in2} I=${e.I2_in4}`
          ]
        });
      } catch (t) {
        console.error("[Paz 13.1 Modal FEM] error:", t.message);
      }
    }
  };
  function E(e) {
    const l = u.in_to_m(e.L_in), c = u.psi_to_kNm2(e.E_psi), t = u.psi_to_kNm2(e.G_psi), r = u.in2_to_m2(e.A1_in2), m = u.in2_to_m2(e.A2_in2), d = u.in4_to_m4(e.I1_in4), b = u.in4_to_m4(e.I2_in4), f = u.in4_to_m4(e.J1_in4), p = u.in4_to_m4(e.J2_in4), _ = 386.088, z = e.mbar1 * _ / e.A1_in2 * 175.13 / 0.0254, x = e.mbar2 * _ / e.A2_in2 * 175.13 / 0.0254, M = [
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        -l
      ],
      [
        0,
        l,
        0
      ],
      [
        -l,
        0,
        0
      ],
      [
        0,
        -l,
        0
      ]
    ], T = [
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        4
      ]
    ], g = /* @__PURE__ */ new Map();
    for (let i = 1; i <= 4; i++) g.set(i, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    const n = [
      0,
      1,
      2,
      3
    ].map((i) => {
      const a = i === 0 || i === 2;
      return {
        A: a ? r : m,
        Iy: a ? d : b,
        Iz: a ? d : b,
        J: a ? f : p,
        E: c,
        G: t,
        rho: a ? z : x,
        label: a ? `Member ${i + 1} (type 1)` : `Member ${i + 1} (type 2)`,
        e2kName: a ? "MEM_TYPE1" : "MEM_TYPE2",
        e2kShape: "Steel I/Wide Flange",
        e2kD: a ? 0.3 : 0.2,
        e2kB: a ? 0.2 : 0.15,
        e2kTF: 0.018,
        e2kTW: 0.011
      };
    });
    return {
      nodes: M,
      elements: T,
      supports: g,
      sectionByElement: n,
      materialName: "A992Fy50",
      materialType: "Steel"
    };
  }
  function H(e) {
    const l = e.E_psi, c = e.G_psi, t = e.L_in, r = y(6), m = y(6);
    function d(b, f, p, _, z) {
      const x = l * b / t, M = 12 * l * f / Math.pow(t, 3), T = c * p / t, g = 4 * l * f / t;
      r[_][_] += x;
      for (let i = 0; i < 3; i++) i !== _ && (r[i][i] += M);
      r[_ + 3][_ + 3] += T;
      for (let i = 3; i < 6; i++) i !== _ + 3 && (r[i][i] += g);
      const n = z * t / 2;
      m[0][0] += n, m[1][1] += n, m[2][2] += n, m[3][3] += n * t * t * 1e-3, m[4][4] += n * t * t * 1e-3, m[5][5] += n * t * t * 1e-3;
    }
    return d(e.A1_in2, e.I1_in4, e.J1_in4, 2, e.mbar1), d(e.A2_in2, e.I2_in4, e.J2_in4, 1, e.mbar2), d(e.A1_in2, e.I1_in4, e.J1_in4, 0, e.mbar1), d(e.A2_in2, e.I2_in4, e.J2_in4, 1, e.mbar2), {
      K6: r,
      M6: m
    };
  }
});
export {
  __tla,
  G as b
};
