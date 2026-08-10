import { a as be } from "./analyze-CDRzE7vM.js";
import { m as ge, d as Ce, __tla as __tla_0 } from "./didacticCpp-BTBicwl0.js";
let xe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let E, ce, T;
  E = 9.80665;
  ce = {
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
    computedLabels(o, l) {
      const s = {}, c = l._mesaTorsionCases;
      if (!c) return s;
      s["\u2014\u2014 ETABS ref T\u2081 Ux \u2014\u2014"] = `${T[0].toFixed(4)} s`, s["\u2014\u2014 ETABS ref T\u2082 Uy \u2014\u2014"] = `${T[1].toFixed(4)} s`, s["\u2014\u2014 ETABS ref T\u2083 Rz \u2014\u2014"] = `${T[2].toFixed(4)} s`;
      for (const i of [
        "Dead",
        "Live",
        "SCP",
        "UDCon1",
        "UDCon2"
      ]) {
        const a = c[i], r = ce[i];
        if (!a || !r) continue;
        const d = (P, S) => {
          const w = S !== 0 ? (P - S) / S * 100 : 0;
          return `H=${P.toFixed(2)}  E=${S.toFixed(2)}  \u0394=${w >= 0 ? "+" : ""}${w.toFixed(1)}%`;
        };
        s[`${i} |P|`] = d(a.P, r.P), s[`${i} |V\u2082|`] = d(a.V2, r.V2), s[`${i} |V\u2083|`] = d(a.V3, r.V3), s[`${i} |T|`] = d(a.T, r.T), s[`${i} |M\u2082|`] = d(a.M2, r.M2), s[`${i} |M\u2083|`] = d(a.M3, r.M3);
      }
      return s;
    },
    build(o, l) {
      const s = Math.round(o.nMesh), c = o.Lx, i = o.Ly, a = o.H, r = c / s, d = i / s, P = o.gamma_kNm3 / 9.81, S = [
        [
          0,
          0,
          0
        ],
        [
          c,
          0,
          0
        ],
        [
          c,
          i,
          0
        ],
        [
          0,
          i,
          0
        ]
      ], w = 4;
      for (let e = 0; e <= s; e++) for (let t = 0; t <= s; t++) S.push([
        t * r,
        e * d,
        a
      ]);
      const n = (e, t) => w + t * (s + 1) + e, m = [];
      for (let e = 0; e < s; e++) for (let t = 0; t < s; t++) m.push([
        n(t, e),
        n(t + 1, e),
        n(t + 1, e + 1),
        n(t, e + 1)
      ]);
      const U = m.length;
      m.push([
        0,
        n(0, 0)
      ]), m.push([
        1,
        n(s, 0)
      ]), m.push([
        2,
        n(s, s)
      ]), m.push([
        3,
        n(0, s)
      ]);
      const K = U, W = m.length;
      for (let e = 0; e < s; e++) m.push([
        n(e, 0),
        n(e + 1, 0)
      ]);
      for (let e = 0; e < s; e++) m.push([
        n(s, e),
        n(s, e + 1)
      ]);
      for (let e = 0; e < s; e++) m.push([
        n(e, s),
        n(e + 1, s)
      ]);
      for (let e = 0; e < s; e++) m.push([
        n(0, e),
        n(0, e + 1)
      ]);
      const B = W, Q = m.length, z = /* @__PURE__ */ new Map(), de = o.apoyo < 0.5;
      for (const e of [
        0,
        1,
        2,
        3
      ]) z.set(e, de ? [
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
      const L = o.E_GPa * 1e6, ee = L / (2 * (1 + o.nu)), oe = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map();
      for (let e = 0; e < U; e++) oe.set(e, o.tLosa), D.set(e, L), y.set(e, o.nu), F.set(e, P), se.set(e, 1);
      const te = o.bCol * o.hCol, me = o.bCol * Math.pow(o.hCol, 3) / 12, fe = o.hCol * Math.pow(o.bCol, 3) / 12, ne = (e, t) => {
        const h = Math.max(e, t), f = Math.min(e, t), M = f / h;
        return 1 / 3 * (1 - 0.21 * M * (1 - Math.pow(M, 4) / 12)) * h * Math.pow(f, 3);
      }, ue = ne(o.bCol, o.hCol), ae = o.rigidOffsets > 0.5 ? o.hViga / 2 / a : 0;
      for (let e = K; e < W; e++) D.set(e, L), y.set(e, o.nu), q.set(e, ee), O.set(e, te), N.set(e, fe), G.set(e, me), R.set(e, ue), F.set(e, P), H.set(e, {
        type: "rect",
        b: o.bCol,
        h: o.hCol
      }), ae > 0 && A.set(e, [
        0,
        ae
      ]);
      const le = o.bViga * o.hViga, he = o.bViga * Math.pow(o.hViga, 3) / 12, pe = o.hViga * Math.pow(o.bViga, 3) / 12, Me = ne(o.bViga, o.hViga), ie = c / s, Y = o.rigidOffsets > 0.5 ? o.bCol / 2 / ie : 0;
      let g = B;
      for (let e = 0; e < 4; e++) for (let t = 0; t < s; t++) {
        if (D.set(g, L), y.set(g, o.nu), q.set(g, ee), O.set(g, le), N.set(g, pe), G.set(g, he), R.set(g, Me), F.set(g, P), H.set(g, {
          type: "rect",
          b: o.bViga,
          h: o.hViga
        }), Y > 0) {
          const h = t === 0 ? Y : 0, f = t === s - 1 ? Y : 0;
          h + f > 0 && A.set(g, [
            h,
            f
          ]);
        }
        g++;
      }
      l.nodes.val = S, l.elements.val = m, l.elementInputs.val = {
        elasticities: D,
        poissonsRatios: y,
        shearModuli: q,
        areas: O,
        momentsOfInertiaY: N,
        momentsOfInertiaZ: G,
        torsionalConstants: R,
        thicknesses: oe,
        densities: F,
        sectionShapes: H,
        rigidOffsets: A.size > 0 ? A : void 0,
        plateFormulations: se
      };
      function re(e, t, h) {
        const f = /* @__PURE__ */ new Map(), M = (u, C) => {
          const v = f.get(u) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          f.set(u, [
            v[0],
            v[1],
            v[2] + C,
            v[3],
            v[4],
            v[5]
          ]);
        };
        if (e !== 0) {
          for (let b = 0; b < s; b++) for (let p = 0; p < s; p++) {
            const Z = -(o.tLosa * r * d * o.gamma_kNm3 * e) / 4;
            for (const I of [
              n(p, b),
              n(p + 1, b),
              n(p + 1, b + 1),
              n(p, b + 1)
            ]) M(I, Z);
          }
          const u = te * a * o.gamma_kNm3 * e, C = [
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
          for (const [b, p] of C) M(b, -u / 2), M(p, -u / 2);
          let v = B;
          for (let b = 0; b < 4; b++) for (let p = 0; p < s; p++) {
            const [k, Z] = m[v], I = le * ie * o.gamma_kNm3 * e;
            M(k, -I / 2), M(Z, -I / 2), v++;
          }
        }
        const $ = (t + h) * E;
        if ($ !== 0) for (let u = 0; u <= s; u++) for (let C = 0; C <= s; C++) {
          const p = (C === 0 || C === s) && (u === 0 || u === s) ? 0.25 : C === 0 || C === s || u === 0 || u === s ? 0.5 : 1, k = -$ * r * d * p;
          M(n(C, u), k);
        }
        return f;
      }
      const V = [
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
      for (const e of V) {
        const t = re(e.sw, e.scp, e.live);
        try {
          const h = Ce(S, m, {
            supports: z,
            loads: t
          }, l.elementInputs.val), f = be(S, m, l.elementInputs.val, h);
          j[e.name] = {
            deform: h,
            analyze: f
          }, X[e.name] = ve(f, K, Q);
        } catch (h) {
          console.warn(`[Mesa torsi\xF3n] caso ${e.name} fall\xF3:`, h.message);
        }
      }
      l._mesaTorsionCases = X, l._mesaTorsionAllResults = j;
      const _ = [
        "Dead",
        "Live",
        "SCP",
        "UDCon1",
        "UDCon2"
      ][Math.round(o.activeCase)] || "UDCon2", J = j[_];
      J && (l.deformOutputs.val = J.deform, l.analyzeOutputs.val = J.analyze), l.nodeInputs.val = {
        supports: z,
        loads: re(V.find((e) => e.name === _).sw, V.find((e) => e.name === _).scp, V.find((e) => e.name === _).live)
      };
      const x = [];
      x.push(`[Mesa torsi\xF3n] Caso visualizado: ${_}`), x.push(`  Discretizaci\xF3n: ${U} shells losa, 4 cols, ${Q - B} segs viga`), x.push(`  Rigid offsets: ${o.rigidOffsets > 0.5 ? `ON (col top -${(o.hViga / 2).toFixed(2)}m, viga ends -${(o.bCol / 2).toFixed(2)}m)` : "OFF"}`), x.push(""), x.push("  Picks por caso \u2014 Hekatan vs ETABS (\u0394% relativo, sin remapear componentes):"), x.push(`  ${"Case".padEnd(8)} ${"Comp".padEnd(4)} ${"Hekatan".padStart(10)} ${"ETABS".padStart(10)} ${"\u0394%".padStart(8)}`);
      for (const e of V) {
        const t = X[e.name], h = ce[e.name];
        if (!(!t || !h)) for (const f of [
          "P",
          "V2",
          "V3",
          "T",
          "M2",
          "M3"
        ]) {
          const M = t[f], $ = h[f], u = $ !== 0 ? (M - $) / $ * 100 : 0;
          x.push(`  ${e.name.padEnd(8)} ${f.padEnd(4)} ${M.toFixed(3).padStart(10)} ${$.toFixed(3).padStart(10)} ${(u >= 0 ? "+" : "") + u.toFixed(1).padStart(7)}%`);
        }
      }
      console.log(x.join(`
`)), l.objects3D.val = [];
    },
    runModal(o, l, s) {
      if (!l.nodes.val.length) return;
      const c = Math.round(o.nModos);
      try {
        const i = ge(l.nodes.val, l.elements.val, l.nodeInputs.val, l.elementInputs.val, c), a = [];
        a.push(`[Mesa torsi\xF3n Modal Hekatan FEM 3D] ${c} modos:`);
        for (let r = 0; r < Math.min(c, 6); r++) {
          const d = 1 / i.frequencies[r];
          a.push(`  Modo ${r + 1}: T = ${d.toFixed(4)} s   f = ${i.frequencies[r].toFixed(3)} Hz`);
        }
        a.push(""), a.push("ETABS 19.1 reference:"), a.push(`  Modo 1 T\u2081 Ux = ${T[0].toFixed(4)} s`), a.push(`  Modo 2 T\u2082 Uy = ${T[1].toFixed(4)} s`), a.push(`  Modo 3 T\u2083 Rz = ${T[2].toFixed(4)} s`), console.log(a.join(`
`)), (s == null ? void 0 : s.render) && s.render(i, {
          title: `Mesa de Torsi\xF3n \u2014 ${o.Lx}\xD7${o.Ly}m, ${o.H}m alto`,
          properties: [
            `${o.apoyo < 0.5 ? "Pinned base" : "Empotrado"}  E=${o.E_GPa} GPa  \u03BD=${o.nu}`,
            `ETABS ref: T\u2081=${T[0]}s  T\u2082=${T[1]}s  T\u2083=${T[2]}s`
          ]
        });
      } catch (i) {
        console.error("[Mesa torsi\xF3n Modal] error:", i.message);
      }
    }
  };
  function ve(o, l, s) {
    const c = (i) => {
      if (!i) return 0;
      let a = 0;
      for (let r = l; r < s; r++) {
        const d = i.get(r);
        d && (a = Math.max(a, Math.abs(d[0]), Math.abs(d[1])));
      }
      return a;
    };
    return {
      P: c(o.normals) / E,
      V2: c(o.shearsY) / E,
      V3: c(o.shearsZ) / E,
      T: c(o.torsions) / E,
      M2: c(o.bendingsY) / E,
      M3: c(o.bendingsZ) / E
    };
  }
});
export {
  __tla,
  xe as m
};
