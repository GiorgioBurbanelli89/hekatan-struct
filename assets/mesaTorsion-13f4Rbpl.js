import { a as ge } from "./analyze-DoaxThCI.js";
import { m as Ce, d as ve, __tla as __tla_0 } from "./didacticCpp-C9OmPBGn.js";
let xe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let V, de, T;
  V = 9.80665;
  de = {
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
  T = [
    0.34337,
    0.34337,
    0.28756
  ];
  xe = {
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
        default: 1,
        label: "Rigid offsets ETABS-like",
        options: {
          "ON (h_viga/2 + b_col/2)": 1,
          "OFF (full length)": 0
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
    computedLabels(o, i) {
      const s = {}, d = i._mesaTorsionCases;
      if (!d) return s;
      s["\u2014\u2014 ETABS ref T\u2081 Ux \u2014\u2014"] = `${T[0].toFixed(4)} s`, s["\u2014\u2014 ETABS ref T\u2082 Uy \u2014\u2014"] = `${T[1].toFixed(4)} s`, s["\u2014\u2014 ETABS ref T\u2083 Rz \u2014\u2014"] = `${T[2].toFixed(4)} s`;
      for (const l of [
        "Dead",
        "Live",
        "SCP",
        "UDCon1",
        "UDCon2"
      ]) {
        const a = d[l], r = de[l];
        if (!a || !r) continue;
        const m = (P, S) => {
          const w = S !== 0 ? (P - S) / S * 100 : 0;
          return `H=${P.toFixed(2)}  E=${S.toFixed(2)}  \u0394=${w >= 0 ? "+" : ""}${w.toFixed(1)}%`;
        };
        s[`${l} |P|`] = m(a.P, r.P), s[`${l} |V\u2082|`] = m(a.V2, r.V2), s[`${l} |V\u2083|`] = m(a.V3, r.V3), s[`${l} |T|`] = m(a.T, r.T), s[`${l} |M\u2082|`] = m(a.M2, r.M2), s[`${l} |M\u2083|`] = m(a.M3, r.M3);
      }
      return s;
    },
    build(o, i) {
      const s = Math.round(o.nMesh), d = o.Lx, l = o.Ly, a = o.H, r = d / s, m = l / s, P = o.gamma_kNm3 / 9.81, S = [
        [
          0,
          0,
          0
        ],
        [
          d,
          0,
          0
        ],
        [
          d,
          l,
          0
        ],
        [
          0,
          l,
          0
        ]
      ], w = 4;
      for (let e = 0; e <= s; e++) for (let t = 0; t <= s; t++) S.push([
        t * r,
        e * m,
        a
      ]);
      const n = (e, t) => w + t * (s + 1) + e, f = [];
      for (let e = 0; e < s; e++) for (let t = 0; t < s; t++) f.push([
        n(t, e),
        n(t + 1, e),
        n(t + 1, e + 1),
        n(t, e + 1)
      ]);
      const I = f.length;
      f.push([
        0,
        n(0, 0)
      ]), f.push([
        1,
        n(s, 0)
      ]), f.push([
        2,
        n(s, s)
      ]), f.push([
        3,
        n(0, s)
      ]);
      const K = I, Q = f.length;
      for (let e = 0; e < s; e++) f.push([
        n(e, 0),
        n(e + 1, 0)
      ]);
      for (let e = 0; e < s; e++) f.push([
        n(s, e),
        n(s, e + 1)
      ]);
      for (let e = 0; e < s; e++) f.push([
        n(e, s),
        n(e + 1, s)
      ]);
      for (let e = 0; e < s; e++) f.push([
        n(0, e),
        n(0, e + 1)
      ]);
      const U = Q, ee = f.length, z = /* @__PURE__ */ new Map(), me = o.apoyo < 0.5;
      for (const e of [
        0,
        1,
        2,
        3
      ]) z.set(e, me ? [
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
      const A = o.E_GPa * 1e6, oe = A / (2 * (1 + o.nu)), se = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map();
      for (let e = 0; e < I; e++) se.set(e, o.tLosa), L.set(e, A), y.set(e, o.nu), D.set(e, P), te.set(e, 1);
      const ne = o.bCol * o.hCol, fe = o.bCol * Math.pow(o.hCol, 3) / 12, ue = o.hCol * Math.pow(o.bCol, 3) / 12, ae = (e, t) => {
        const M = Math.max(e, t), c = Math.min(e, t), b = c / M;
        return 1 / 3 * (1 - 0.21 * b * (1 - Math.pow(b, 4) / 12)) * M * Math.pow(c, 3);
      }, Me = ae(o.bCol, o.hCol), ie = o.rigidOffsets > 0.5 ? o.hViga / 2 / a : 0;
      for (let e = K; e < Q; e++) L.set(e, A), y.set(e, o.nu), q.set(e, oe), O.set(e, ne), N.set(e, ue), G.set(e, fe), R.set(e, Me), D.set(e, P), H.set(e, {
        type: "rect",
        b: o.bCol,
        h: o.hCol
      }), ie > 0 && F.set(e, [
        0,
        ie
      ]);
      const le = o.bViga * o.hViga, he = o.bViga * Math.pow(o.hViga, 3) / 12, pe = o.hViga * Math.pow(o.bViga, 3) / 12, be = ae(o.bViga, o.hViga), re = d / s, Y = o.rigidOffsets > 0.5 ? o.bCol / 2 / re : 0;
      let C = U;
      for (let e = 0; e < 4; e++) for (let t = 0; t < s; t++) {
        if (L.set(C, A), y.set(C, o.nu), q.set(C, oe), O.set(C, le), N.set(C, he), G.set(C, pe), R.set(C, be), D.set(C, P), H.set(C, {
          type: "rect",
          b: o.bViga,
          h: o.hViga
        }), Y > 0) {
          const M = t === 0 ? Y : 0, c = t === s - 1 ? Y : 0;
          M + c > 0 && F.set(C, [
            M,
            c
          ]);
        }
        C++;
      }
      i.nodes.val = S, i.elements.val = f, i.elementInputs.val = {
        elasticities: L,
        poissonsRatios: y,
        shearModuli: q,
        areas: O,
        momentsOfInertiaZ: N,
        momentsOfInertiaY: G,
        torsionalConstants: R,
        thicknesses: se,
        densities: D,
        sectionShapes: H,
        rigidOffsets: F.size > 0 ? F : void 0,
        plateFormulations: te
      };
      function ce(e, t, M) {
        const c = /* @__PURE__ */ new Map(), b = (u, h) => {
          const v = c.get(u) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          c.set(u, [
            v[0],
            v[1],
            v[2] + h,
            v[3],
            v[4],
            v[5]
          ]);
        };
        if (e !== 0) {
          for (let g = 0; g < s; g++) for (let p = 0; p < s; p++) {
            const W = -(o.tLosa * r * m * o.gamma_kNm3 * e) / 4;
            for (const B of [
              n(p, g),
              n(p + 1, g),
              n(p + 1, g + 1),
              n(p, g + 1)
            ]) b(B, W);
          }
          const u = ne * a * o.gamma_kNm3 * e, h = [
            [
              0,
              n(0, 0)
            ],
            [
              1,
              n(s, 0)
            ],
            [
              2,
              n(s, s)
            ],
            [
              3,
              n(0, s)
            ]
          ];
          for (const [g, p] of h) b(g, -u / 2), b(p, -u / 2);
          let v = U;
          for (let g = 0; g < 4; g++) for (let p = 0; p < s; p++) {
            const [k, W] = f[v], B = le * re * o.gamma_kNm3 * e;
            b(k, -B / 2), b(W, -B / 2), v++;
          }
        }
        const x = (t + M) * V;
        if (x !== 0) for (let u = 0; u <= s; u++) for (let h = 0; h <= s; h++) {
          const p = (h === 0 || h === s) && (u === 0 || u === s) ? 0.25 : h === 0 || h === s || u === 0 || u === s ? 0.5 : 1, k = -x * r * m * p;
          b(n(h, u), k);
        }
        return c;
      }
      const E = [
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
      ], j = {}, X = {};
      for (const e of E) {
        const t = ce(e.sw, e.scp, e.live);
        try {
          const M = ve(S, f, {
            supports: z,
            loads: t
          }, i.elementInputs.val), c = ge(S, f, i.elementInputs.val, M);
          j[e.name] = {
            deform: M,
            analyze: c
          }, X[e.name] = Se(c, K, ee);
        } catch (M) {
          console.warn(`[Mesa torsi\xF3n] caso ${e.name} fall\xF3:`, M.message);
        }
      }
      i._mesaTorsionCases = X, i._mesaTorsionAllResults = j;
      const _ = [
        "Dead",
        "Live",
        "SCP",
        "UDCon1",
        "UDCon2"
      ][Math.round(o.activeCase)] || "UDCon2", Z = j[_];
      Z && (i.deformOutputs.val = Z.deform, i.analyzeOutputs.val = Z.analyze), i.nodeInputs.val = {
        supports: z,
        loads: ce(E.find((e) => e.name === _).sw, E.find((e) => e.name === _).scp, E.find((e) => e.name === _).live)
      };
      const $ = [];
      $.push(`[Mesa torsi\xF3n] Caso visualizado: ${_}`), $.push(`  Discretizaci\xF3n: ${I} shells losa, 4 cols, ${ee - U} segs viga`), $.push(`  Rigid offsets: ${o.rigidOffsets > 0.5 ? `ON (col top -${(o.hViga / 2).toFixed(2)}m, viga ends -${(o.bCol / 2).toFixed(2)}m)` : "OFF"}`), $.push(""), $.push("  Picks por caso \u2014 Hekatan vs ETABS (\u0394% relativo, con SWAP V2\u2194V3 y M2\u2194M3 por convenci\xF3n awatif Z-up vs ETABS):"), $.push(`  ${"Case".padEnd(8)} ${"Comp".padEnd(4)} ${"Hekatan".padStart(10)} ${"ETABS".padStart(10)} ${"\u0394%".padStart(8)}`);
      const J = {
        P: "P",
        T: "T",
        V2: "V3",
        V3: "V2",
        M2: "M3",
        M3: "M2"
      };
      for (const e of E) {
        const t = X[e.name], M = de[e.name];
        if (!(!t || !M)) for (const c of [
          "P",
          "V2",
          "V3",
          "T",
          "M2",
          "M3"
        ]) {
          const b = t[c], x = M[J[c]], u = x !== 0 ? (b - x) / x * 100 : 0, h = c !== J[c] ? ` (\u2194ETABS ${J[c]})` : "";
          $.push(`  ${e.name.padEnd(8)} ${c.padEnd(4)} ${b.toFixed(3).padStart(10)} ${x.toFixed(3).padStart(10)} ${(u >= 0 ? "+" : "") + u.toFixed(1).padStart(7)}%${h}`);
        }
      }
      console.log($.join(`
`)), i.objects3D.val = [];
    },
    runModal(o, i, s) {
      if (!i.nodes.val.length) return;
      const d = Math.round(o.nModos);
      try {
        const l = Ce(i.nodes.val, i.elements.val, i.nodeInputs.val, i.elementInputs.val, d), a = [];
        a.push(`[Mesa torsi\xF3n Modal Hekatan FEM 3D] ${d} modos:`);
        for (let r = 0; r < Math.min(d, 6); r++) {
          const m = 1 / l.frequencies[r];
          a.push(`  Modo ${r + 1}: T = ${m.toFixed(4)} s   f = ${l.frequencies[r].toFixed(3)} Hz`);
        }
        a.push(""), a.push("ETABS 19.1 reference:"), a.push(`  Modo 1 T\u2081 Ux = ${T[0].toFixed(4)} s`), a.push(`  Modo 2 T\u2082 Uy = ${T[1].toFixed(4)} s`), a.push(`  Modo 3 T\u2083 Rz = ${T[2].toFixed(4)} s`), console.log(a.join(`
`)), (s == null ? void 0 : s.render) && s.render(l, {
          title: `Mesa de Torsi\xF3n \u2014 ${o.Lx}\xD7${o.Ly}m, ${o.H}m alto`,
          properties: [
            `${o.apoyo < 0.5 ? "Pinned base" : "Empotrado"}  E=${o.E_GPa} GPa  \u03BD=${o.nu}`,
            `ETABS ref: T\u2081=${T[0]}s  T\u2082=${T[1]}s  T\u2083=${T[2]}s`
          ]
        });
      } catch (l) {
        console.error("[Mesa torsi\xF3n Modal] error:", l.message);
      }
    }
  };
  function Se(o, i, s) {
    const d = (l) => {
      if (!l) return 0;
      let a = 0;
      for (let r = i; r < s; r++) {
        const m = l.get(r);
        m && (a = Math.max(a, Math.abs(m[0]), Math.abs(m[1])));
      }
      return a;
    };
    return {
      P: d(o.normals) / V,
      V2: d(o.shearsY) / V,
      V3: d(o.shearsZ) / V,
      T: d(o.torsions) / V,
      M2: d(o.bendingsY) / V,
      M3: d(o.bendingsZ) / V
    };
  }
});
export {
  __tla,
  xe as m
};
