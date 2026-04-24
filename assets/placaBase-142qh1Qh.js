import { a as ue } from "./analyze-ClLKGn9k.js";
import { d as fe, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { s as be, __tla as __tla_1 } from "./secantPlasticity-B1VMR3_i.js";
import { b as oe, M as J, c as I, d as he, E as xe, L as pe, C as Z, R as Me, e as ne, D as ae } from "./Text-BA03d7vw.js";
let we;
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
  we = {
    id: "placa-base",
    name: "Placa base anclada (AISC 360-22 \xA7J8 + ACI 318)",
    category: "Conexiones",
    hasModal: false,
    defaultShellResult: "vonMises",
    availableShellResults: [
      "vonMises",
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "membraneXX",
      "membraneYY",
      "displacementZ"
    ],
    params: {
      B: {
        default: 0.5,
        min: 0.25,
        max: 1.2,
        step: 0.02,
        label: "B placa (m, eje X)",
        folder: "Placa"
      },
      H: {
        default: 0.5,
        min: 0.25,
        max: 1.2,
        step: 0.02,
        label: "H placa (m, eje Y)",
        folder: "Placa"
      },
      t_plate: {
        default: 0.025,
        min: 0.012,
        max: 0.06,
        step: 2e-3,
        label: "Espesor placa (m)",
        folder: "Placa"
      },
      d_col: {
        default: 0.3,
        min: 0.18,
        max: 0.5,
        step: 0.02,
        label: "d columna (m)",
        folder: "Columna"
      },
      bf_col: {
        default: 0.25,
        min: 0.15,
        max: 0.4,
        step: 0.01,
        label: "bf columna (m)",
        folder: "Columna"
      },
      tf_col: {
        default: 0.022,
        min: 0.012,
        max: 0.04,
        step: 2e-3,
        label: "tf (m)",
        folder: "Columna"
      },
      tw_col: {
        default: 0.014,
        min: 8e-3,
        max: 0.025,
        step: 1e-3,
        label: "tw (m)",
        folder: "Columna"
      },
      L_col_stub: {
        default: 0.5,
        min: 0.3,
        max: 1,
        step: 0.05,
        label: "L col stub (m)",
        folder: "Columna"
      },
      bolt_layout: {
        default: 4,
        label: "Disposici\xF3n pernos",
        options: {
          "4 (2\xD72)": 4,
          "6 (3\xD72)": 6,
          "8 (4\xD72)": 8,
          "9 (3\xD73)": 9
        },
        folder: "Pernos",
        regenOnChange: true
      },
      d_bolt: {
        default: 0.024,
        min: 0.012,
        max: 0.05,
        step: 2e-3,
        label: "\xD8 perno (m)",
        folder: "Pernos"
      },
      d_hole: {
        default: 0.036,
        min: 0.02,
        max: 0.08,
        step: 2e-3,
        label: "\xD8 orificio (m)",
        folder: "Pernos"
      },
      edge_dist: {
        default: 0.07,
        min: 0.03,
        max: 0.2,
        step: 0.01,
        label: "Dist borde (m)",
        folder: "Pernos"
      },
      L_bolt: {
        default: 0.3,
        min: 0.15,
        max: 0.6,
        step: 0.02,
        label: "L embebido (m)",
        folder: "Pernos"
      },
      B_ped: {
        default: 0.8,
        min: 0.4,
        max: 1.8,
        step: 0.05,
        label: "B pedestal (m)",
        folder: "Pedestal"
      },
      H_ped: {
        default: 0.8,
        min: 0.4,
        max: 1.8,
        step: 0.05,
        label: "H pedestal (m)",
        folder: "Pedestal"
      },
      h_ped: {
        default: 0.5,
        min: 0.3,
        max: 1.5,
        step: 0.05,
        label: "h pedestal (m)",
        folder: "Pedestal"
      },
      Fy_plate: {
        default: 25e4,
        min: 24e4,
        max: 45e4,
        step: 5e3,
        label: "Fy placa (kN/m\xB2)",
        folder: "Material"
      },
      Fu_bolt: {
        default: 83e4,
        min: 6e5,
        max: 103e4,
        step: 1e4,
        label: "Fu perno A307/A449 (kN/m\xB2)",
        folder: "Material"
      },
      E_steel: {
        default: 2e8,
        min: 19e7,
        max: 21e7,
        step: 1e6,
        label: "E (kN/m\xB2)",
        folder: "Material"
      },
      fc: {
        default: 28e3,
        min: 17e3,
        max: 5e4,
        step: 1e3,
        label: "f'c pedestal (kN/m\xB2)",
        folder: "Material"
      },
      Pu: {
        default: 800,
        min: 0,
        max: 5e3,
        step: 25,
        label: "Pu (compresi\xF3n)",
        folder: "Cargas",
        unitType: "force"
      },
      Mu: {
        default: 80,
        min: 0,
        max: 800,
        step: 5,
        label: "Mu (momento)",
        folder: "Cargas",
        unitType: "moment"
      },
      mesh_n: {
        default: 48,
        min: 20,
        max: 80,
        step: 2,
        label: "Divisiones por lado",
        folder: "Malla"
      },
      use_nonlinear: {
        default: 1,
        label: "Solver",
        options: {
          "Lineal (el\xE1stico)": 0,
          "No-lineal (plasticidad J2 secante)": 1
        },
        folder: "Solver"
      },
      nl_max_iter: {
        default: 12,
        min: 3,
        max: 30,
        step: 1,
        label: "Max iteraciones NL",
        folder: "Solver"
      }
    },
    build(e, c) {
      const l = [], u = [], G = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), E = e.E_steel / 2.6, q = 77, m = (t, a, n) => (l.push([
        t,
        a,
        n
      ]), l.length - 1), M = (t, a, n, o, i) => {
        u.push([
          t,
          a,
          n,
          o
        ]);
        const s = u.length - 1;
        G.set(s, i), Y.set(s, e.E_steel), x.set(s, 0.3), L.set(s, q), R.set(s, 0), B.set(s, 0), z.set(s, 0), C.set(s, 0), A.set(s, E);
      }, w = ((t) => {
        const a = e.edge_dist, n = e.B / 2 - a, o = e.H / 2 - a;
        return t === 4 ? [
          [
            -n,
            -o
          ],
          [
            +n,
            -o
          ],
          [
            +n,
            +o
          ],
          [
            -n,
            +o
          ]
        ] : t === 6 ? [
          [
            -n,
            -o
          ],
          [
            0,
            -o
          ],
          [
            +n,
            -o
          ],
          [
            -n,
            +o
          ],
          [
            0,
            +o
          ],
          [
            +n,
            +o
          ]
        ] : t === 8 ? [
          [
            -n,
            -o
          ],
          [
            -n / 3,
            -o
          ],
          [
            +n / 3,
            -o
          ],
          [
            +n,
            -o
          ],
          [
            -n,
            +o
          ],
          [
            -n / 3,
            +o
          ],
          [
            +n / 3,
            +o
          ],
          [
            +n,
            +o
          ]
        ] : t === 9 ? [
          [
            -n,
            -o
          ],
          [
            0,
            -o
          ],
          [
            +n,
            -o
          ],
          [
            -n,
            0
          ],
          [
            0,
            0
          ],
          [
            +n,
            0
          ],
          [
            -n,
            +o
          ],
          [
            0,
            +o
          ],
          [
            +n,
            +o
          ]
        ] : [
          [
            -n,
            -o
          ],
          [
            +n,
            -o
          ],
          [
            +n,
            +o
          ],
          [
            -n,
            +o
          ]
        ];
      })(e.bolt_layout), r = e.d_hole / 2, g = Math.max(14, Math.round(e.mesh_n)), P = Math.max(14, Math.round(e.mesh_n)), N = e.B / g, k = e.H / P, $ = [];
      for (let t = 0; t <= P; t++) {
        const a = [];
        for (let n = 0; n <= g; n++) {
          let o = -e.B / 2 + n * N, i = -e.H / 2 + t * k, s = false;
          for (const [b, v] of w) {
            const _ = o - b, y = i - v, h = Math.sqrt(_ * _ + y * y);
            if (h < r * 0.35) {
              s = true;
              break;
            }
            if (h < r && h > 1e-9) {
              o = b + _ / h * r, i = v + y / h * r;
              break;
            }
          }
          s ? a.push(-1) : a.push(m(o, i, 0));
        }
        $.push(a);
      }
      for (let t = 0; t < P; t++) for (let a = 0; a < g; a++) {
        const n = $[t][a], o = $[t][a + 1], i = $[t + 1][a + 1], s = $[t + 1][a];
        if (n < 0 || o < 0 || i < 0 || s < 0) continue;
        const b = -e.B / 2 + (a + 0.5) * N, v = -e.H / 2 + (t + 0.5) * k;
        let _ = false;
        for (const [y, h] of w) if (Math.sqrt((b - y) ** 2 + (v - h) ** 2) < r * 0.95) {
          _ = true;
          break;
        }
        _ || M(n, o, i, s, e.t_plate);
      }
      const F = e.t_plate;
      F + e.L_col_stub;
      const d = 5, f = [];
      for (let t = 0; t <= d; t++) {
        const a = F + t * e.L_col_stub / d;
        f.push([
          m(+e.d_col / 2, -e.bf_col / 2, a),
          m(+e.d_col / 2, +e.bf_col / 2, a)
        ]);
      }
      for (let t = 0; t < d; t++) M(f[t][0], f[t][1], f[t + 1][1], f[t + 1][0], e.tf_col);
      const H = [];
      for (let t = 0; t <= d; t++) {
        const a = F + t * e.L_col_stub / d;
        H.push([
          m(-e.d_col / 2, -e.bf_col / 2, a),
          m(-e.d_col / 2, +e.bf_col / 2, a)
        ]);
      }
      for (let t = 0; t < d; t++) M(H[t][0], H[t][1], H[t + 1][1], H[t + 1][0], e.tf_col);
      const S = [], W = 2;
      for (let t = 0; t <= d; t++) {
        const a = F + t * e.L_col_stub / d, n = [];
        for (let o = 0; o <= W; o++) {
          const i = -e.d_col / 2 + e.tf_col + (e.d_col - 2 * e.tf_col) * (o / W);
          n.push(m(i, 0, a));
        }
        S.push(n);
      }
      for (let t = 0; t < d; t++) for (let a = 0; a < W; a++) M(S[t][a], S[t][a + 1], S[t + 1][a + 1], S[t + 1][a], e.tw_col);
      const D = /* @__PURE__ */ new Map();
      for (const [t, a] of w) {
        const n = [];
        for (let o = 0; o < l.length; o++) {
          if (Math.abs(l[o][2]) > 1e-4) continue;
          const i = l[o][0] - t, s = l[o][1] - a, b = Math.sqrt(i * i + s * s);
          Math.abs(b - r) < r * 0.15 && n.push({
            idx: o,
            d: b
          });
        }
        for (const o of n) D.set(o.idx, [
          true,
          true,
          true,
          false,
          false,
          false
        ]);
      }
      const X = /* @__PURE__ */ new Map(), O = [];
      for (let t = 0; t < l.length; t++) {
        if (Math.abs(l[t][2]) > 1e-4) continue;
        const a = l[t][0], n = l[t][1], o = Math.abs(a - e.d_col / 2) < 0.02 && Math.abs(n) <= e.bf_col / 2 + 1e-6, i = Math.abs(a + e.d_col / 2) < 0.02 && Math.abs(n) <= e.bf_col / 2 + 1e-6, s = Math.abs(n) < 0.015 && Math.abs(a) <= e.d_col / 2 - e.tf_col + 1e-6;
        (o || i || s) && O.push(t);
      }
      if (O.length > 0) {
        const t = -e.Pu / O.length;
        for (const a of O) {
          const n = l[a][0], o = e.d_col / 2, i = e.Mu / (O.length * o) * (n > 0 ? 1 : -1);
          X.set(a, [
            0,
            0,
            t + i,
            0,
            0,
            0
          ]);
        }
      }
      c.nodes.val = l, c.elements.val = u, c.nodeInputs.val = {
        supports: D,
        loads: X
      }, c.elementInputs.val = {
        thicknesses: G,
        elasticities: Y,
        poissonsRatios: x,
        densities: L,
        areas: R,
        momentsOfInertiaY: B,
        momentsOfInertiaZ: z,
        torsionalConstants: C,
        shearModuli: A
      };
      try {
        if (e.use_nonlinear > 0.5) {
          const t = be({
            nodes: l,
            elements: u,
            nodeInputs: {
              supports: D,
              loads: X
            },
            elementInputs: c.elementInputs.val,
            Fy: e.Fy_plate,
            maxIter: Math.round(e.nl_max_iter),
            tol: 0.03,
            softeningFactor: 0.9
          });
          c.deformOutputs.val = t.deformOutputs;
          const a = t.analyzeOutputs;
          a.colorMapRanges = {
            ...a.colorMapRanges,
            vonMises: [
              0,
              e.Fy_plate
            ]
          }, c.analyzeOutputs.val = a, c.__nlInfo = {
            iterations: t.iterations,
            converged: t.converged,
            elementsYielded: t.elementsYielded,
            maxRatio: t.maxRatio
          }, console.log(`[placa-base NL] iter=${t.iterations}, converged=${t.converged}, yielded=${t.elementsYielded}, maxRatio=${t.maxRatio.toFixed(2)}`);
        } else {
          c.deformOutputs.val = fe(l, u, {
            supports: D,
            loads: X
          }, c.elementInputs.val);
          const t = ue(l, u, c.elementInputs.val, c.deformOutputs.val);
          t.colorMapRanges = {
            ...t.colorMapRanges,
            vonMises: [
              0,
              e.Fy_plate
            ]
          }, c.analyzeOutputs.val = t, c.__nlInfo = null;
        }
      } catch (t) {
        console.error("[placa-base] solver error:", (t == null ? void 0 : t.message) || t), c.deformOutputs.val = {}, c.analyzeOutputs.val = {};
      }
      const p = [], K = new oe(e.B_ped, e.H_ped, e.h_ped), le = new J({
        color: 12298888,
        transparent: true,
        opacity: 0.35,
        metalness: 0.1,
        roughness: 0.9
      }), V = new I(K, le);
      V.position.set(0, 0, -e.h_ped / 2), p.push(V);
      const Q = new he(new xe(K), new pe({
        color: 4473924
      }));
      Q.position.set(0, 0, -e.h_ped / 2), p.push(Q);
      const se = new J({
        color: 8026746,
        metalness: 0.8,
        roughness: 0.3
      }), ce = new J({
        color: 3355443,
        metalness: 0.8,
        roughness: 0.3
      });
      for (const [t, a] of w) {
        const n = e.d_bolt * 1, o = e.L_bolt + e.t_plate + n + 0.015, i = new Z(e.d_bolt / 2, e.d_bolt / 2, o, 16), s = new I(i, se);
        s.rotation.x = Math.PI / 2;
        const b = -e.L_bolt + o / 2;
        s.position.set(t, a, b), p.push(s);
        const v = new Z(e.d_bolt * 0.9, e.d_bolt * 0.9, n, 6), _ = new I(v, ce);
        _.rotation.x = Math.PI / 2, _.position.set(t, a, e.t_plate + n / 2), p.push(_);
        const y = new Z(e.d_hole / 2 * 1.4, e.d_hole / 2 * 1.4, 4e-3, 20), h = new J({
          color: 8947848,
          metalness: 0.6,
          roughness: 0.4
        }), j = new I(y, h);
        j.rotation.x = Math.PI / 2, j.position.set(t, a, e.t_plate + 2e-3), p.push(j);
        const me = new Me(r, r * 1.05, 32), _e = new ne({
          color: 16776960,
          side: ae
        }), te = new I(me, _e);
        te.position.set(t, a, e.t_plate + 5e-4), p.push(te);
      }
      const ie = Math.sqrt(e.B * e.H), U = Math.min(ie + 2 * e.h_ped, Math.min(e.B_ped, e.H_ped)), de = new oe(U, U, 2e-3), re = new ne({
        color: 16746496,
        transparent: true,
        opacity: 0.18,
        side: ae
      }), ee = new I(de, re);
      ee.position.set(0, 0, -e.h_ped + 1e-3), p.push(ee), c.objects3D.val = p, console.log(`[Placa Base AISC \xA7J8] Shells=${u.length}, Nodos=${l.length}
  Placa ${e.B}\xD7${e.H}\xD7${e.t_plate}m, Pernos=${e.bolt_layout} \xD8${e.d_bolt * 1e3}mm
  Pedestal ${e.B_ped}\xD7${e.H_ped}\xD7${e.h_ped}m f'c=${e.fc / 1e3} MPa`);
    },
    computedLabels(e, c) {
      const l = c.__nlInfo, u = 0.65, G = 0.9, Y = 0.75, x = e.B * e.H, L = Math.min(e.B_ped * e.H_ped, x * 4), R = Math.min(Math.sqrt(L / x), 2), B = 0.85 * e.fc * x * R, z = u * B, C = Math.max(0, (e.B - 0.95 * e.d_col) / 2), A = Math.max(0, (e.H - 0.8 * e.bf_col) / 2), E = Math.sqrt(e.d_col * e.bf_col) / 4, q = Math.max(C, A, E), m = e.Pu / x, M = q * Math.sqrt(2 * m / (G * e.Fy_plate)), T = e.t_plate / M, w = e.Mu / Math.max(e.Pu, 1e-3), r = e.bolt_layout / 2, g = e.H / 2 - e.edge_dist, P = Math.max(0, (e.Mu - e.Pu * g) / (2 * g)), N = P / Math.max(r, 1), k = Math.PI * (e.d_bolt / 2) ** 2, $ = 0.75 * e.Fu_bolt * k, F = Y * $, d = e.Pu / z, f = N / F;
      return {
        "\u2500\u2500 Geometr\xEDa \u2500\u2500": "",
        "A1 (\xE1rea placa)": `${(x * 1e4).toFixed(0)} cm\xB2`,
        "A2 (\xE1rea pedestal)": `${(L * 1e4).toFixed(0)} cm\xB2`,
        "\u221A(A2/A1)": R.toFixed(2),
        "m (voladizo X)": `${(C * 1e3).toFixed(0)} mm`,
        "n (voladizo Y)": `${(A * 1e3).toFixed(0)} mm`,
        "\u03BBn' (Thornton)": `${(E * 1e3).toFixed(0)} mm`,
        "\u2113 cr\xEDtico": `${(q * 1e3).toFixed(0)} mm`,
        "\u2500\u2500 Aplastamiento concreto AISC \xA7J8 \u2500\u2500": "",
        "Pp (nominal)": `${B.toFixed(0)} kN`,
        "\u03C6Pp (dise\xF1o)": `${z.toFixed(0)} kN`,
        "Pu aplicado": `${e.Pu.toFixed(0)} kN`,
        "Ratio Pu/\u03C6Pp": `${d.toFixed(3)} ${d <= 1 ? "\u2713" : "\u2717"}`,
        "\u2500\u2500 Espesor placa AISC DG-1 \u2500\u2500": "",
        "f_p (presi\xF3n)": `${(m / 1e3).toFixed(0)} kPa (${(m / 1e3).toFixed(0)} kN/m\xB2)`,
        "t req.": `${(M * 1e3).toFixed(1)} mm`,
        "t dado": `${(e.t_plate * 1e3).toFixed(1)} mm`,
        "Ratio t/t_req": `${T.toFixed(2)} ${T >= 1 ? "\u2713" : "\u2717"}`,
        "\u2500\u2500 Pernos anclaje AISC \xA7J3 / ACI \xA717 \u2500\u2500": "",
        "e = Mu/Pu": `${(w * 1e3).toFixed(0)} mm`,
        "Brazo a pernos": `${(g * 1e3).toFixed(0)} mm`,
        "Tu total (tensi\xF3n neta)": `${P.toFixed(1)} kN`,
        "Tu por perno": `${N.toFixed(1)} kN`,
        A_perno: `${(k * 1e6).toFixed(1)} mm\xB2`,
        "\u03C6Rn perno": `${F.toFixed(1)} kN`,
        "Ratio Tu/\u03C6Rn": `${f.toFixed(3)} ${f <= 1 ? "\u2713" : "\u2717"}`,
        "\u2500\u2500 Dictamen \u2500\u2500": "",
        "Criterio global": `${d <= 1 && T >= 1 && f <= 1 ? "\u2713 OK" : "\u2717 REVISAR"}`,
        "\u2500\u2500 Solver FEM \u2500\u2500": "",
        Tipo: l ? "NO-LINEAL (J2 secante)" : "Lineal el\xE1stico",
        ...l ? {
          "Iteraciones NL": `${l.iterations}${l.converged ? " \u2713 convergi\xF3" : " \u2717 max-iter"}`,
          "Elementos plastificados": `${l.elementsYielded}`,
          "Max \u03C3/Fy (lineal inicial)": l.maxRatio.toFixed(2),
          Interpretaci\u00F3n: l.elementsYielded > 0 ? `${l.elementsYielded} shells alcanzaron fluencia \u2192 redistribuci\xF3n` : "Toda la placa en rango el\xE1stico"
        } : {}
      };
    }
  };
});
export {
  __tla,
  we as p
};
