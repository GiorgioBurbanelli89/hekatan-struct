import { a as Me } from "./analyze-DNPn2SjO.js";
import { m as be, d as pe, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let Se;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let E, le, T;
  E = 9.80665;
  le = {
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
  Se = {
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
      const s = {}, c = i._mesaTorsionCases;
      if (!c) return s;
      s["\u2014\u2014 ETABS ref T\u2081 Ux \u2014\u2014"] = `${T[0].toFixed(4)} s`, s["\u2014\u2014 ETABS ref T\u2082 Uy \u2014\u2014"] = `${T[1].toFixed(4)} s`, s["\u2014\u2014 ETABS ref T\u2083 Rz \u2014\u2014"] = `${T[2].toFixed(4)} s`;
      for (const l of [
        "Dead",
        "Live",
        "SCP",
        "UDCon1",
        "UDCon2"
      ]) {
        const a = c[l], r = le[l];
        if (!a || !r) continue;
        const d = (V, v) => {
          const w = v !== 0 ? (V - v) / v * 100 : 0;
          return `H=${V.toFixed(2)}  E=${v.toFixed(2)}  \u0394=${w >= 0 ? "+" : ""}${w.toFixed(1)}%`;
        };
        s[`${l} |P|`] = d(a.P, r.P), s[`${l} |V\u2082|`] = d(a.V2, r.V2), s[`${l} |V\u2083|`] = d(a.V3, r.V3), s[`${l} |T|`] = d(a.T, r.T), s[`${l} |M\u2082|`] = d(a.M2, r.M2), s[`${l} |M\u2083|`] = d(a.M3, r.M3);
      }
      return s;
    },
    build(o, i) {
      const s = Math.round(o.nMesh), c = o.Lx, l = o.Ly, a = o.H, r = c / s, d = l / s, V = o.gamma_kNm3 / 9.81, v = [
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
          l,
          0
        ],
        [
          0,
          l,
          0
        ]
      ], w = 4;
      for (let e = 0; e <= s; e++) for (let n = 0; n <= s; n++) v.push([
        n * r,
        e * d,
        a
      ]);
      const t = (e, n) => w + n * (s + 1) + e, m = [];
      for (let e = 0; e < s; e++) for (let n = 0; n < s; n++) m.push([
        t(n, e),
        t(n + 1, e),
        t(n + 1, e + 1),
        t(n, e + 1)
      ]);
      const U = m.length;
      m.push([
        0,
        t(0, 0)
      ]), m.push([
        1,
        t(s, 0)
      ]), m.push([
        2,
        t(s, s)
      ]), m.push([
        3,
        t(0, s)
      ]);
      const K = U, W = m.length;
      for (let e = 0; e < s; e++) m.push([
        t(e, 0),
        t(e + 1, 0)
      ]);
      for (let e = 0; e < s; e++) m.push([
        t(s, e),
        t(s, e + 1)
      ]);
      for (let e = 0; e < s; e++) m.push([
        t(e, s),
        t(e + 1, s)
      ]);
      for (let e = 0; e < s; e++) m.push([
        t(0, e),
        t(0, e + 1)
      ]);
      const B = W, Q = m.length, z = /* @__PURE__ */ new Map(), re = o.apoyo < 0.5;
      for (const e of [
        0,
        1,
        2,
        3
      ]) z.set(e, re ? [
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
      const L = o.E_GPa * 1e6, ee = L / (2 * (1 + o.nu)), oe = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map();
      for (let e = 0; e < U; e++) oe.set(e, o.tLosa), D.set(e, L), y.set(e, o.nu), F.set(e, V);
      const se = o.bCol * o.hCol, ce = o.bCol * Math.pow(o.hCol, 3) / 12, de = o.hCol * Math.pow(o.bCol, 3) / 12, me = 0.28 * Math.min(o.bCol, o.hCol) * Math.pow(Math.max(o.bCol, o.hCol), 3), te = o.rigidOffsets > 0.5 ? o.hViga / 2 / a : 0;
      for (let e = K; e < W; e++) D.set(e, L), y.set(e, o.nu), q.set(e, ee), O.set(e, se), N.set(e, de), G.set(e, ce), R.set(e, me), F.set(e, V), H.set(e, {
        type: "rect",
        b: o.bCol,
        h: o.hCol
      }), te > 0 && A.set(e, [
        0,
        te
      ]);
      const ae = o.bViga * o.hViga, fe = o.bViga * Math.pow(o.hViga, 3) / 12, ue = o.hViga * Math.pow(o.bViga, 3) / 12, he = 0.28 * Math.min(o.bViga, o.hViga) * Math.pow(Math.max(o.bViga, o.hViga), 3), ne = c / s, Y = o.rigidOffsets > 0.5 ? o.bCol / 2 / ne : 0;
      let p = B;
      for (let e = 0; e < 4; e++) for (let n = 0; n < s; n++) {
        if (D.set(p, L), y.set(p, o.nu), q.set(p, ee), O.set(p, ae), N.set(p, fe), G.set(p, ue), R.set(p, he), F.set(p, V), H.set(p, {
          type: "rect",
          b: o.bViga,
          h: o.hViga
        }), Y > 0) {
          const M = n === 0 ? Y : 0, u = n === s - 1 ? Y : 0;
          M + u > 0 && A.set(p, [
            M,
            u
          ]);
        }
        p++;
      }
      i.nodes.val = v, i.elements.val = m, i.elementInputs.val = {
        elasticities: D,
        poissonsRatios: y,
        shearModuli: q,
        areas: O,
        momentsOfInertiaZ: N,
        momentsOfInertiaY: G,
        torsionalConstants: R,
        thicknesses: oe,
        densities: F,
        sectionShapes: H,
        rigidOffsets: A.size > 0 ? A : void 0
      };
      function ie(e, n, M) {
        const u = /* @__PURE__ */ new Map(), S = (f, g) => {
          const C = u.get(f) || [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          u.set(f, [
            C[0],
            C[1],
            C[2] + g,
            C[3],
            C[4],
            C[5]
          ]);
        };
        if (e !== 0) {
          for (let b = 0; b < s; b++) for (let h = 0; h < s; h++) {
            const J = -(o.tLosa * r * d * o.gamma_kNm3 * e) / 4;
            for (const I of [
              t(h, b),
              t(h + 1, b),
              t(h + 1, b + 1),
              t(h, b + 1)
            ]) S(I, J);
          }
          const f = se * a * o.gamma_kNm3 * e, g = [
            [
              0,
              t(0, 0)
            ],
            [
              1,
              t(s, 0)
            ],
            [
              2,
              t(s, s)
            ],
            [
              3,
              t(0, s)
            ]
          ];
          for (const [b, h] of g) S(b, -f / 2), S(h, -f / 2);
          let C = B;
          for (let b = 0; b < 4; b++) for (let h = 0; h < s; h++) {
            const [k, J] = m[C], I = ae * ne * o.gamma_kNm3 * e;
            S(k, -I / 2), S(J, -I / 2), C++;
          }
        }
        const $ = (n + M) * E;
        if ($ !== 0) for (let f = 0; f <= s; f++) for (let g = 0; g <= s; g++) {
          const h = (g === 0 || g === s) && (f === 0 || f === s) ? 0.25 : g === 0 || g === s || f === 0 || f === s ? 0.5 : 1, k = -$ * r * d * h;
          S(t(g, f), k);
        }
        return u;
      }
      const P = [
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
      for (const e of P) {
        const n = ie(e.sw, e.scp, e.live);
        try {
          const M = pe(v, m, {
            supports: z,
            loads: n
          }, i.elementInputs.val), u = Me(v, m, i.elementInputs.val, M);
          j[e.name] = {
            deform: M,
            analyze: u
          }, X[e.name] = ge(u, K, Q);
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
        loads: ie(P.find((e) => e.name === _).sw, P.find((e) => e.name === _).scp, P.find((e) => e.name === _).live)
      };
      const x = [];
      x.push(`[Mesa torsi\xF3n] Caso visualizado: ${_}`), x.push(`  Discretizaci\xF3n: ${U} shells losa, 4 cols, ${Q - B} segs viga`), x.push(`  Rigid offsets: ${o.rigidOffsets > 0.5 ? `ON (col top -${(o.hViga / 2).toFixed(2)}m, viga ends -${(o.bCol / 2).toFixed(2)}m)` : "OFF"}`), x.push(""), x.push("  Picks por caso \u2014 Hekatan vs ETABS (\u0394% relativo):"), x.push(`  ${"Case".padEnd(8)} ${"Comp".padEnd(4)} ${"Hekatan".padStart(10)} ${"ETABS".padStart(10)} ${"\u0394%".padStart(8)}`);
      for (const e of P) {
        const n = X[e.name], M = le[e.name];
        if (!(!n || !M)) for (const u of [
          "P",
          "V2",
          "V3",
          "T",
          "M2",
          "M3"
        ]) {
          const S = n[u], $ = M[u], f = $ !== 0 ? (S - $) / $ * 100 : 0;
          x.push(`  ${e.name.padEnd(8)} ${u.padEnd(4)} ${S.toFixed(3).padStart(10)} ${$.toFixed(3).padStart(10)} ${(f >= 0 ? "+" : "") + f.toFixed(1).padStart(7)}%`);
        }
      }
      console.log(x.join(`
`)), i.objects3D.val = [];
    },
    runModal(o, i, s) {
      if (!i.nodes.val.length) return;
      const c = Math.round(o.nModos);
      try {
        const l = be(i.nodes.val, i.elements.val, i.nodeInputs.val, i.elementInputs.val, c), a = [];
        a.push(`[Mesa torsi\xF3n Modal Hekatan FEM 3D] ${c} modos:`);
        for (let r = 0; r < Math.min(c, 6); r++) {
          const d = 1 / l.frequencies[r];
          a.push(`  Modo ${r + 1}: T = ${d.toFixed(4)} s   f = ${l.frequencies[r].toFixed(3)} Hz`);
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
  function ge(o, i, s) {
    const c = (l) => {
      if (!l) return 0;
      let a = 0;
      for (let r = i; r < s; r++) {
        const d = l.get(r);
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
  Se as m
};
