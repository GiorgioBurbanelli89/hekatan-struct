import { a as Ae } from "./analyze-DQyLT4zB.js";
import { m as _e, d as De, __tla as __tla_0 } from "./didacticCpp-C2di29sC.js";
let Le;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let v, Ce, V;
  v = 9.80665;
  Ce = {
    Dead: {
      P: 5.72,
      V2: 2.05,
      V3: 0.45,
      T: 0.53,
      M2: 1.57,
      M3: 2.43
    },
    Live: {
      P: 4.5,
      V2: 2.2,
      V3: 0.61,
      T: 1.15,
      M2: 2.13,
      M3: 3.14
    },
    SCP: {
      P: 9,
      V2: 4.41,
      V3: 1.22,
      T: 2.29,
      M2: 4.26,
      M3: 6.28
    },
    UDCon1: {
      P: 20.61,
      V2: 9.03,
      V3: 2.33,
      T: 3.96,
      M2: 8.16,
      M3: 12.2
    },
    UDCon2: {
      P: 24.86,
      V2: 11.27,
      V3: 2.97,
      T: 5.22,
      M2: 10.4,
      M3: 15.48
    }
  };
  V = [
    0.34337,
    0.34337,
    0.28756
  ];
  Le = {
    id: "mesa-torsion",
    name: "\u{1F300} Mesa de Torsi\xF3n (ETABS Gabriela/Seproinca)",
    category: "\u{1F3C1} Benchmarks \xB7 4\uFE0F\u20E3 Combinados",
    benchmark: true,
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "none",
      "displacementZ",
      "vonMises",
      "membraneXX",
      "membraneYY",
      "membraneXY",
      "bendingXX",
      "bendingYY",
      "bendingXY"
    ],
    hasModal: true,
    guide: [
      "Modelo 'Mesa de torsi\xF3n' ETABS 19.1 (Gabriela/Seproinca 2020).",
      "6\xD76m \xD7 4m alto \xB7 4 col C40\xD740 PINNED-base \xB7 4 vigas V30\xD750 perim \xB7 losa 10cm \xB7 diaph r\xEDgido.",
      "Selector 'Caso visualizado' cambia entre Dead/Live/SCP/UDCon1/UDCon2.",
      "Tabla \u{1F4CA} Comparaci\xF3n ETABS muestra picks ETABS vs Hekatan por componente y diferencia %.",
      "ETABS periodos modal: T1=T2=0.34337s lateral, T3=0.28756s torsi\xF3n Rz.",
      "Rigid offsets ETABS: col flexible=3.5m (auto -h_viga/2), viga flexible=5.6m (auto -b_col/2)."
    ],
    params: {
      activeCase: {
        default: 0,
        label: "Caso visualizado",
        options: {
          "Dead (selfweight)": 0,
          "Live (q=0.5 tonf/m\xB2)": 1,
          "SCP (q=1.0 tonf/m\xB2)": 2,
          "UDCon1 (1.4D+1.4SCP)": 3,
          "UDCon2 (1.2D+1.6L+1.2SCP)": 4
        },
        folder: "Caso"
      },
      Lx: {
        default: 6,
        min: 4,
        max: 12,
        step: 0.5,
        label: "Lx (m)",
        folder: "Geometr\xEDa"
      },
      Ly: {
        default: 6,
        min: 4,
        max: 12,
        step: 0.5,
        label: "Ly (m)",
        folder: "Geometr\xEDa"
      },
      H: {
        default: 4,
        min: 2.5,
        max: 6,
        step: 0.25,
        label: "H piso (m)",
        folder: "Geometr\xEDa"
      },
      nMesh: {
        default: 5,
        min: 2,
        max: 12,
        step: 1,
        label: "Subdiv losa (n\xD7n)",
        folder: "Geometr\xEDa"
      },
      bCol: {
        default: 0.4,
        min: 0.25,
        max: 0.8,
        step: 0.05,
        label: "b col (m)",
        folder: "Secciones"
      },
      hCol: {
        default: 0.4,
        min: 0.25,
        max: 0.8,
        step: 0.05,
        label: "h col (m)",
        folder: "Secciones"
      },
      bViga: {
        default: 0.3,
        min: 0.2,
        max: 0.6,
        step: 0.05,
        label: "b viga (m)",
        folder: "Secciones"
      },
      hViga: {
        default: 0.5,
        min: 0.3,
        max: 0.9,
        step: 0.05,
        label: "h viga (m)",
        folder: "Secciones"
      },
      tLosa: {
        default: 0.1,
        min: 0.08,
        max: 0.3,
        step: 0.01,
        label: "t losa (m)",
        folder: "Secciones"
      },
      E_GPa: {
        default: 24.85,
        min: 15,
        max: 35,
        step: 0.5,
        label: "E (GPa)",
        folder: "Material"
      },
      nu: {
        default: 0.2,
        min: 0.1,
        max: 0.3,
        step: 0.01,
        label: "\u03BD",
        folder: "Material"
      },
      gamma_kNm3: {
        default: 23.57,
        min: 18,
        max: 28,
        step: 0.1,
        label: "\u03B3 (kN/m\xB3)",
        folder: "Material"
      },
      apoyo: {
        default: 0,
        label: "Apoyo base",
        options: {
          "Pinned (UX UY UZ)": 0,
          "Empotrado (6 DOF)": 1
        },
        folder: "Apoyo"
      },
      rigidOffsets: {
        default: 0,
        label: "Rigid offsets ETABS-like",
        options: {
          "OFF (full length, ETABS default)": 0,
          "ON (h_viga/2 + b_col/2)": 1
        },
        folder: "ETABS features"
      },
      q_SCP: {
        default: 1,
        min: 0,
        max: 5,
        step: 0.1,
        label: "SCP (tonf/m\xB2)",
        folder: "Cargas"
      },
      q_Live: {
        default: 0.5,
        min: 0,
        max: 5,
        step: 0.1,
        label: "Live (tonf/m\xB2)",
        folder: "Cargas"
      },
      nModos: {
        default: 12,
        min: 3,
        max: 24,
        step: 1,
        label: "N modos modal",
        folder: "Modal"
      }
    },
    computedLabels(o, r) {
      const s = {}, M = r._mesaTorsionCases;
      if (!M) return s;
      s["\u2014\u2014 ETABS ref T\u2081 Ux \u2014\u2014"] = `${V[0].toFixed(4)} s`, s["\u2014\u2014 ETABS ref T\u2082 Uy \u2014\u2014"] = `${V[1].toFixed(4)} s`, s["\u2014\u2014 ETABS ref T\u2083 Rz \u2014\u2014"] = `${V[2].toFixed(4)} s`;
      for (const d of [
        "Dead",
        "Live",
        "SCP",
        "UDCon1",
        "UDCon2"
      ]) {
        const l = M[d], m = Ce[d];
        if (!l || !m) continue;
        const b = (_, E) => {
          const B = E !== 0 ? (_ - E) / E * 100 : 0;
          return `H=${_.toFixed(2)}  E=${E.toFixed(2)}  \u0394=${B >= 0 ? "+" : ""}${B.toFixed(1)}%`;
        };
        s[`${d} |P|`] = b(l.P, m.P), s[`${d} |V\u2082|`] = b(l.V2, m.V2), s[`${d} |V\u2083|`] = b(l.V3, m.V3), s[`${d} |T|`] = b(l.T, m.T), s[`${d} |M\u2082|`] = b(l.M2, m.M2), s[`${d} |M\u2083|`] = b(l.M3, m.M3);
      }
      return s;
    },
    build(o, r) {
      var _a;
      const s = Math.round(o.nMesh), M = o.Lx, d = o.Ly, l = o.H, m = M / s, b = d / s, _ = o.gamma_kNm3 / 9.81, E = [
        [
          0,
          0,
          0
        ],
        [
          M,
          0,
          0
        ],
        [
          M,
          d,
          0
        ],
        [
          0,
          d,
          0
        ]
      ], B = 4;
      for (let e = 0; e <= s; e++) for (let t = 0; t <= s; t++) E.push([
        t * m,
        e * b,
        l
      ]);
      const i = (e, t) => B + t * (s + 1) + e, C = [];
      for (let e = 0; e < s; e++) for (let t = 0; t < s; t++) C.push([
        i(t, e),
        i(t + 1, e),
        i(t + 1, e + 1),
        i(t, e + 1)
      ]);
      const k = C.length;
      C.push([
        0,
        i(0, 0)
      ]), C.push([
        1,
        i(s, 0)
      ]), C.push([
        2,
        i(s, s)
      ]), C.push([
        3,
        i(0, s)
      ]);
      const H = k, Y = C.length;
      for (let e = 0; e < s; e++) C.push([
        i(e, 0),
        i(e + 1, 0)
      ]);
      for (let e = 0; e < s; e++) C.push([
        i(s, e),
        i(s, e + 1)
      ]);
      for (let e = 0; e < s; e++) C.push([
        i(e, s),
        i(e + 1, s)
      ]);
      for (let e = 0; e < s; e++) C.push([
        i(0, e),
        i(0, e + 1)
      ]);
      const y = Y, j = C.length, q = /* @__PURE__ */ new Map(), Se = o.apoyo < 0.5;
      for (const e of [
        0,
        1,
        2,
        3
      ]) q.set(e, Se ? [
        true,
        true,
        true,
        false,
        false,
        false
      ] : [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const U = o.E_GPa * 1e6, ne = U / (2 * (1 + o.nu)), ae = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
      for (let e = 0; e < k; e++) ae.set(e, o.tLosa), I.set(e, U), O.set(e, o.nu), z.set(e, _), ie.set(e, 1);
      const le = o.bCol * o.hCol, ge = o.bCol * Math.pow(o.hCol, 3) / 12, ve = o.hCol * Math.pow(o.bCol, 3) / 12, ce = (e, t) => {
        const u = Math.max(e, t), a = Math.min(e, t), p = a / u;
        return 1 / 3 * (1 - 0.21 * p * (1 - Math.pow(p, 4) / 12)) * u * Math.pow(a, 3);
      }, Te = ce(o.bCol, o.hCol), re = o.rigidOffsets > 0.5 ? o.hViga / 2 / l : 0;
      for (let e = H; e < Y; e++) I.set(e, U), O.set(e, o.nu), K.set(e, ne), X.set(e, le), Z.set(e, ve), J.set(e, ge), W.set(e, Te), z.set(e, _), Q.set(e, {
        type: "rect",
        b: o.bCol,
        h: o.hCol
      }), re > 0 && R.set(e, [
        0,
        re
      ]);
      const de = o.bViga * o.hViga, xe = o.bViga * Math.pow(o.hViga, 3) / 12, $e = o.hViga * Math.pow(o.bViga, 3) / 12, Ee = ce(o.bViga, o.hViga), me = M / s, ee = o.rigidOffsets > 0.5 ? o.bCol / 2 / me : 0;
      let T = y;
      for (let e = 0; e < 4; e++) for (let t = 0; t < s; t++) {
        if (I.set(T, U), O.set(T, o.nu), K.set(T, ne), X.set(T, de), Z.set(T, xe), J.set(T, $e), W.set(T, Ee), z.set(T, _), Q.set(T, {
          type: "rect",
          b: o.bViga,
          h: o.hViga
        }), ee > 0) {
          const u = t === 0 ? ee : 0, a = t === s - 1 ? ee : 0;
          u + a > 0 && R.set(T, [
            u,
            a
          ]);
        }
        T++;
      }
      r.nodes.val = E, r.elements.val = C, r.elementInputs.val = {
        elasticities: I,
        poissonsRatios: O,
        shearModuli: K,
        areas: X,
        momentsOfInertiaZ: Z,
        momentsOfInertiaY: J,
        torsionalConstants: W,
        thicknesses: ae,
        densities: z,
        sectionShapes: Q,
        rigidOffsets: R.size > 0 ? R : void 0,
        plateFormulations: ie
      };
      function fe(e, t, u) {
        const a = /* @__PURE__ */ new Map(), p = (n, f) => {
          const g = a.get(n) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          a.set(n, [
            g[0],
            g[1],
            g[2] + f,
            g[3],
            g[4],
            g[5]
          ]);
        };
        if (e !== 0) {
          for (let h = 0; h < s; h++) for (let c = 0; c < s; c++) {
            const L = -(o.tLosa * m * b * o.gamma_kNm3 * e) / 4;
            for (const A of [
              i(c, h),
              i(c + 1, h),
              i(c + 1, h + 1),
              i(c, h + 1)
            ]) p(A, L);
          }
          const n = le * l * o.gamma_kNm3 * e, f = [
            [
              0,
              i(0, 0)
            ],
            [
              1,
              i(s, 0)
            ],
            [
              2,
              i(s, s)
            ],
            [
              3,
              i(0, s)
            ]
          ];
          for (const [h, c] of f) p(h, -n / 2), p(c, -n / 2);
          let g = y;
          for (let h = 0; h < 4; h++) for (let c = 0; c < s; c++) {
            const [$, L] = C[g], A = de * me * o.gamma_kNm3 * e;
            p($, -A / 2), p(L, -A / 2), g++;
          }
        }
        const S = (t + u) * v;
        if (S !== 0) for (let n = 0; n <= s; n++) for (let f = 0; f <= s; f++) {
          const c = (f === 0 || f === s) && (n === 0 || n === s) ? 0.25 : f === 0 || f === s || n === 0 || n === s ? 0.5 : 1, $ = -S * m * b * c;
          p(i(f, n), $);
        }
        return a;
      }
      const F = [
        {
          name: "Dead",
          sw: 1,
          scp: 0,
          live: 0
        },
        {
          name: "Live",
          sw: 0,
          scp: 0,
          live: o.q_Live
        },
        {
          name: "SCP",
          sw: 0,
          scp: o.q_SCP,
          live: 0
        },
        {
          name: "UDCon1",
          sw: 1.4,
          scp: 1.4 * o.q_SCP,
          live: 0
        },
        {
          name: "UDCon2",
          sw: 1.2,
          scp: 1.2 * o.q_SCP,
          live: 1.6 * o.q_Live
        }
      ], N = {}, oe = {}, ue = {}, pe = {};
      for (const e of F) {
        const t = fe(e.sw, e.scp, e.live);
        try {
          const u = De(E, C, {
            supports: q,
            loads: t
          }, r.elementInputs.val), a = Ae(E, C, r.elementInputs.val, u);
          N[e.name] = {
            deform: u,
            analyze: a
          }, oe[e.name] = te(a, H, j), ue[e.name] = te(a, H, Y), pe[e.name] = te(a, y, j);
        } catch (u) {
          console.warn(`[Mesa torsi\xF3n] caso ${e.name} fall\xF3:`, u.message);
        }
      }
      r._mesaTorsionCases = oe, r._mesaTorsionAllResults = N;
      const w = [
        "Dead",
        "Live",
        "SCP",
        "UDCon1",
        "UDCon2"
      ][Math.round(o.activeCase)] || "UDCon2", se = N[w];
      se && (r.deformOutputs.val = se.deform, r.analyzeOutputs.val = se.analyze), r.nodeInputs.val = {
        supports: q,
        loads: fe(F.find((e) => e.name === w).sw, F.find((e) => e.name === w).scp, F.find((e) => e.name === w).live)
      };
      const P = [];
      P.push(`[Mesa torsi\xF3n] Caso visualizado: ${w}`), P.push(`  Discretizaci\xF3n: ${k} shells losa, 4 cols, ${j - y} segs viga`), P.push(`  Rigid offsets: ${o.rigidOffsets > 0.5 ? `ON (col top -${(o.hViga / 2).toFixed(2)}m, viga ends -${(o.bCol / 2).toFixed(2)}m)` : "OFF"}`), P.push(""), P.push("  Picks por caso \u2014 Hekatan vs ETABS (\u0394% relativo, con SWAP V2\u2194V3 y M2\u2194M3 por convenci\xF3n awatif Z-up vs ETABS):"), P.push(`  ${"Case".padEnd(8)} ${"Comp".padEnd(4)} ${"Hekatan".padStart(10)} ${"ETABS".padStart(10)} ${"\u0394%".padStart(8)}`);
      const G = {
        P: "P",
        T: "T",
        V2: "V3",
        V3: "V2",
        M2: "M3",
        M3: "M2"
      };
      for (const e of F) {
        const t = oe[e.name], u = Ce[e.name];
        if (!(!t || !u)) for (const a of [
          "P",
          "V2",
          "V3",
          "T",
          "M2",
          "M3"
        ]) {
          const p = t[a], S = u[G[a]], n = S !== 0 ? (p - S) / S * 100 : 0, f = a !== G[a] ? ` (\u2194ETABS ${G[a]})` : "";
          P.push(`  ${e.name.padEnd(8)} ${a.padEnd(4)} ${p.toFixed(3).padStart(10)} ${S.toFixed(3).padStart(10)} ${(n >= 0 ? "+" : "") + n.toFixed(1).padStart(7)}%${f}`);
        }
      }
      console.log(P.join(`
`));
      const Ve = {
        P: 24.86,
        V2: 2.97,
        V3: 2.97,
        T: 0,
        M2: 10.4,
        M3: 10.4
      }, Pe = {
        P: 1.84,
        V2: 11.27,
        V3: 0.08,
        T: 5.23,
        M2: 0.04,
        M3: 15.48
      }, x = [];
      x.push(""), x.push("  \u2550\u2550\u2550 COMPARATIVA SEPARADA por elemento (UDCon2 vs ETABS espec\xEDficos) \u2550\u2550\u2550"), x.push("  Convenci\xF3n awatif: V\u2082\u2194ETABS V\u2083, M\u2082\u2194ETABS M\u2083 (ejes rotados 90\xB0)"), x.push("  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"), x.push("  \u2502  Elemento  Comp      \u2502 Hekatan \u2502  ETABS  \u2502   \u0394%     \u2502"), x.push("  \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524");
      const he = (e, t, u) => {
        for (const a of [
          "P",
          "V2",
          "V3",
          "T",
          "M2",
          "M3"
        ]) {
          const p = t[a], S = u[G[a]], n = S > 0.01 ? (p - S) / S * 100 : p > 0.01 ? 1 / 0 : 0, f = isFinite(n) ? (n >= 0 ? "+" : "") + n.toFixed(1) + "%" : p > 0.01 ? "\u2014" : "0%";
          x.push(`  \u2502  ${e.padEnd(8)} ${a.padEnd(4)}     \u2502 ${p.toFixed(3).padStart(7)} \u2502 ${S.toFixed(3).padStart(7)} \u2502 ${f.padStart(8)} \u2502`);
        }
        x.push("  \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524");
      }, Me = ue.UDCon2, be = pe.UDCon2;
      Me && be && (he("COL", Me, Ve), he("VIGA", be, Pe)), x.push("  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"), console.log(x.join(`
`));
      const D = (_a = N.UDCon2) == null ? void 0 : _a.analyze;
      if (D) {
        const e = (g) => {
          if (!g) return 0;
          let h = 0;
          for (let c = 0; c < k; c++) {
            const $ = g.get(c);
            if ($) for (const L of $) {
              const A = Math.abs(L);
              A > h && (h = A);
            }
          }
          return h;
        }, t = e(D.bendingXX) / v, u = e(D.bendingYY) / v, a = e(D.bendingXY) / v, p = e(D.tranverseShearX) / v, S = e(D.tranverseShearY) / v, n = [];
        n.push(""), n.push("  \u2550\u2550\u2550 ESFUERZOS SHELL (LOSA) \u2014 UDCon2 (tonf\xB7m/m, tonf/m) \u2550\u2550\u2550"), n.push("  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"), n.push("  \u2502  Comp     \u2502 Hekatan \u2502  ETABS  \u2502   \u0394%     \u2502"), n.push("  \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524");
        const f = (g, h, c) => {
          const $ = c > 0.01 ? (h - c) / c * 100 : 0;
          n.push(`  \u2502  ${g.padEnd(8)} \u2502 ${h.toFixed(3).padStart(7)} \u2502 ${c.toFixed(3).padStart(7)} \u2502 ${(($ >= 0 ? "+" : "") + $.toFixed(1) + "%").padStart(8)} \u2502`);
        };
        f("|M11|max", t, 2.97), f("|M22|max", u, 2.97), f("|M12|max", a, 0.857), f("|V13|max", p, 3.619), f("|V23|max", S, 3.619), n.push("  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"), console.log(n.join(`
`));
      }
      r.objects3D.val = [];
    },
    runModal(o, r, s) {
      if (!r.nodes.val.length) return;
      const M = Math.round(o.nModos);
      try {
        const d = _e(r.nodes.val, r.elements.val, r.nodeInputs.val, r.elementInputs.val, M), l = [];
        l.push(`[Mesa torsi\xF3n Modal Hekatan FEM 3D] ${M} modos:`);
        for (let m = 0; m < Math.min(M, 6); m++) {
          const b = 1 / d.frequencies[m];
          l.push(`  Modo ${m + 1}: T = ${b.toFixed(4)} s   f = ${d.frequencies[m].toFixed(3)} Hz`);
        }
        l.push(""), l.push("ETABS 19.1 reference:"), l.push(`  Modo 1 T\u2081 Ux = ${V[0].toFixed(4)} s`), l.push(`  Modo 2 T\u2082 Uy = ${V[1].toFixed(4)} s`), l.push(`  Modo 3 T\u2083 Rz = ${V[2].toFixed(4)} s`), console.log(l.join(`
`)), (s == null ? void 0 : s.render) && s.render(d, {
          title: `Mesa de Torsi\xF3n \u2014 ${o.Lx}\xD7${o.Ly}m, ${o.H}m alto`,
          properties: [
            `${o.apoyo < 0.5 ? "Pinned base" : "Empotrado"}  E=${o.E_GPa} GPa  \u03BD=${o.nu}`,
            `ETABS ref: T\u2081=${V[0]}s  T\u2082=${V[1]}s  T\u2083=${V[2]}s`
          ]
        });
      } catch (d) {
        console.error("[Mesa torsi\xF3n Modal] error:", d.message);
      }
    }
  };
  function te(o, r, s) {
    const M = (d) => {
      if (!d) return 0;
      let l = 0;
      for (let m = r; m < s; m++) {
        const b = d.get(m);
        b && (l = Math.max(l, Math.abs(b[0]), Math.abs(b[1])));
      }
      return l;
    };
    return {
      P: M(o.normals) / v,
      V2: M(o.shearsY) / v,
      V3: M(o.shearsZ) / v,
      T: M(o.torsions) / v,
      M2: M(o.bendingsY) / v,
      M3: M(o.bendingsZ) / v
    };
  }
});
export {
  __tla,
  Le as m
};
