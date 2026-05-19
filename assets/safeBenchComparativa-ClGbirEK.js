import { p as Y, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let A;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const j = 9.80665;
  function O(a, t, i, l) {
    const _ = i + 1, u = l + 1, c = a / i, k = t / l, m = [];
    for (let n = 0; n < u; ++n) for (let r = 0; r < _; ++r) m.push([
      r * c,
      n * k
    ]);
    const f = [];
    for (let n = 0; n < l; ++n) for (let r = 0; r < i; ++r) {
      const p = n * _ + r;
      f.push([
        p,
        p + 1,
        p + _ + 1,
        p + _
      ]);
    }
    return {
      nxn: _,
      nyn: u,
      dx: c,
      dy: k,
      nodes: m,
      elements: f
    };
  }
  function S(a, t, i, l, _, u, c, k, m, f) {
    const { nxn: n, nyn: r, dx: p, dy: V, nodes: L, elements: v } = O(t, i, m, f), h = [], w = [], N = Math.floor(m / 2), g = [
      {
        node: Math.floor(f / 2) * n + N,
        dof: 0,
        value: -k
      }
    ], M = (s, d, C, D) => {
      if (h.push({
        node: s,
        dof: 0,
        k: c * d
      }), C) {
        const z = 0.5 * c * d;
        h.push({
          node: s,
          dof: 1,
          k: z * 1e-3
        }), h.push({
          node: s,
          dof: 2,
          k: z * 1e-3
        });
      }
      if (D) {
        const z = 1e-6 * c * p * V;
        h.push({
          node: s,
          dof: 1,
          k: z
        }), h.push({
          node: s,
          dof: 2,
          k: z
        });
      }
    };
    for (let s = 0; s < r; ++s) for (let d = 0; d < n; ++d) {
      const C = d === 0 || d === n - 1, D = s === 0 || s === r - 1, z = C && D ? 0.25 : C || D ? 0.5 : 1, U = p * V * z, R = s * n + d, X = C && D;
      switch (a) {
        case 0:
          w.push({
            node: R,
            dof: 0,
            value: 0
          });
          break;
        case 1:
          M(R, U, false, false);
          break;
        case 2:
          M(R, U, true, false);
          break;
        case 3:
          M(R, U, false, false);
          break;
        case 4:
          M(R, U, false, X);
          break;
      }
    }
    a !== 0 && (a === 1 || a === 2 || a === 3) && (w.push({
      node: 0,
      dof: 1,
      value: 0
    }), w.push({
      node: 0,
      dof: 2,
      value: 0
    }));
    const o = Y({
      E: _,
      nu: u,
      thickness: l,
      theoryType: 0,
      bcType: "none",
      nodes: L,
      elements: v,
      bcs: w,
      pointLoads: g,
      springs: h
    });
    let E = 0, b = 0, y = 1 / 0, P = 0, W = 0;
    for (const s of o.nodeResults) {
      Math.abs(s.w) > Math.abs(E) && (E = s.w);
      const d = c * Math.abs(s.w);
      d > b && (b = d), d < y && d > 0 && (y = d), P += d, W++;
    }
    isFinite(y) || (y = 0);
    const e = W > 0 ? P / W : 0, x = b > 0 ? y / b : 1;
    return {
      w_max_mm: E * 1e3,
      q_max_kNm2: b,
      q_avg_kNm2: e,
      uniformidad: x,
      output: o
    };
  }
  let I;
  I = {
    0: "1\uFE0F\u20E3 Empotrada (UBC 1960)",
    1: "2\uFE0F\u20E3 Winkler vertical (1867)",
    2: "3\uFE0F\u20E3 Winkler 3D Bowles (1996)",
    3: "4\uFE0F\u20E3 Vesic ks-anal\xEDtico (1973)",
    4: "5\uFE0F\u20E3 Winkler + anti-sing (moderno)"
  };
  A = {
    id: "safe-bench-zapata-comparativa",
    name: "\u{1F393} Zapata ISSE Comparativa: Empotrada vs Winkler vs Vesic (5 autores)",
    category: "Cimentaciones",
    benchmark: true,
    defaultShellResult: "bendingXX",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "vonMises",
      "displacementZ"
    ],
    hasModal: false,
    guide: [
      "Ejemplo did\xE1ctico para mostrar la EVOLUCI\xD3N HIST\xD3RICA de modelos ISSE",
      "Selector 'Modelo' cambia entre 5 enfoques cl\xE1sicos (1867-presente)",
      "Empotrada da MENOS asentamiento pero MAYORES momentos en columna (rigidez sobreestimada)",
      "Winkler/Vesic dan asentamientos realistas + redistribuci\xF3n a la zapata",
      "Tabla 'Comparativa autores' muestra los 5 modelos corridos en paralelo",
      "Use ks_factor=10.5 Bowles para arena media (default), 12 para arena densa, 15 para roca"
    ],
    params: {
      model: {
        default: 4,
        options: {
          "1\uFE0F\u20E3 Empotrada (UBC 1960)": 0,
          "2\uFE0F\u20E3 Winkler vertical (1867)": 1,
          "3\uFE0F\u20E3 Winkler 3D Bowles (1996)": 2,
          "4\uFE0F\u20E3 Vesic ks-anal\xEDtico (1973)": 3,
          "5\uFE0F\u20E3 Winkler + anti-sing (moderno)": 4
        },
        label: "\u{1F4DA} Modelo hist\xF3rico"
      },
      Lz: {
        default: 1.5,
        min: 1,
        max: 4,
        step: 0.05,
        label: "Lz (m)"
      },
      Bz: {
        default: 1.5,
        min: 1,
        max: 4,
        step: 0.05,
        label: "Bz (m)"
      },
      tz: {
        default: 0.3,
        min: 0.1,
        max: 1,
        step: 0.05,
        label: "t (m)"
      },
      q_adm_tonf: {
        default: 20,
        min: 1,
        max: 100,
        step: 1,
        label: "q_adm (tonf/m\xB2)"
      },
      ks_factor_Bowles: {
        default: 10.5,
        min: 5,
        max: 20,
        step: 0.5,
        label: "ks_factor Bowles"
      },
      E_suelo_kPa: {
        default: 25e3,
        min: 1e3,
        max: 5e5,
        step: 1e3,
        label: "E suelo (kPa) \u2014 Vesic"
      },
      nu_suelo: {
        default: 0.3,
        min: 0.1,
        max: 0.45,
        step: 0.05,
        label: "\u03BD suelo \u2014 Vesic"
      },
      P_tonf: {
        default: 20,
        min: 1,
        max: 100,
        step: 1,
        label: "P central (tonf)"
      },
      nx: {
        default: 12,
        min: 6,
        max: 24,
        step: 2,
        label: "nx mesh"
      },
      ny: {
        default: 12,
        min: 6,
        max: 24,
        step: 2,
        label: "ny mesh"
      }
    },
    computedLabels(a) {
      const t = a.Lz, i = a.Bz, l = a.tz, _ = a.q_adm_tonf * j, u = a.P_tonf * j, c = Math.round(a.nx), k = Math.round(a.ny), m = 24855e3, f = 0.2, n = _ * a.ks_factor_Bowles, r = a.E_suelo_kPa, p = a.nu_suelo, V = m, L = l ** 3 / 12, v = Math.min(t, i), w = 0.65 * Math.pow(r * v ** 4 / (V * L), 1 / 12) * r / (v * (1 - p * p)), N = S(0, t, i, l, m, f, n, u, c, k), q = S(1, t, i, l, m, f, n, u, c, k), B = S(2, t, i, l, m, f, n, u, c, k), g = S(3, t, i, l, m, f, w, u, c, k), M = S(4, t, i, l, m, f, n, u, c, k), o = (E, b = 2) => Number.isFinite(E) ? E.toFixed(b) : "\u2014";
      return {
        "\u2500\u2500 \u{1F4DA} Comparativa ISSE 5 autores \u2500\u2500": "",
        "Modelo activo (vista 3D)": I[a.model | 0] ?? "\u2014",
        "ks Bowles (kN/m\xB3)": o(n, 0),
        "ks Vesic (kN/m\xB3)": o(w, 0),
        "\u2500\u2500 w_max [mm] por modelo \u2500\u2500": "",
        "1. Empotrada": `${o(Math.abs(N.w_max_mm), 4)} (rigid)`,
        "2. Winkler vert.": o(Math.abs(q.w_max_mm), 4),
        "3. Winkler 3D Bow.": o(Math.abs(B.w_max_mm), 4),
        "4. Vesic ks-analit.": o(Math.abs(g.w_max_mm), 4),
        "5. Winkler+antisig.": o(Math.abs(M.w_max_mm), 4),
        "\u2500\u2500 q_max [kN/m\xB2] por modelo \u2500\u2500": "",
        "q_max 1. Empot.": "0 (no hay springs)",
        "q_max 2. Winkler": o(q.q_max_kNm2, 2),
        "q_max 3. W3D Bow.": o(B.q_max_kNm2, 2),
        "q_max 4. Vesic": o(g.q_max_kNm2, 2),
        "q_max 5. W+antis.": o(M.q_max_kNm2, 2),
        "\u2500\u2500 Uniformidad q_min/q_max \u2500\u2500": "",
        "Unif. 2. Winkler": o(q.uniformidad, 3),
        "Unif. 3. W3D Bow.": o(B.uniformidad, 3),
        "Unif. 4. Vesic": o(g.uniformidad, 3),
        "Unif. 5. W+antis.": o(M.uniformidad, 3),
        "\u2500\u2500 An\xE1lisis \u2500\u2500": "",
        "Era 1960 (1)": "Subestima asentamiento, sobreestima fuerzas en columna",
        "Era Bowles (2-3,5)": "Asentamiento realista, distribuci\xF3n uniforme",
        "Era Vesic (4)": "ks computado de E_s \u2192 mejor para suelos blandos",
        "Recomendaci\xF3n moderna": "Modelo 5 (Winkler + anti-sing)"
      };
    },
    build(a, t) {
      const i = a.Lz, l = a.Bz, _ = a.tz, u = 24855e3, c = 0.2, k = a.q_adm_tonf * j * a.ks_factor_Bowles, m = a.E_suelo_kPa, f = a.nu_suelo, n = u, r = _ ** 3 / 12, p = Math.min(i, l), L = 0.65 * Math.pow(m * p ** 4 / (n * r), 1 / 12) * m / (p * (1 - f * f)), v = Math.round(a.model), h = v === 3 ? L : k, w = a.P_tonf * j, N = Math.round(a.nx), q = Math.round(a.ny), B = S(v, i, l, _, u, c, h, w, N, q), { nodes: g, elements: M } = O(i, l, N, q), o = g.map((e) => [
        e[0],
        e[1],
        0
      ]);
      t.nodes.val = o, t.elements.val = M, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, t.elementInputs.val = {
        elasticities: new Map(M.map((e, x) => [
          x,
          u
        ])),
        poissonsRatios: new Map(M.map((e, x) => [
          x,
          c
        ])),
        thicknesses: new Map(M.map((e, x) => [
          x,
          _
        ]))
      };
      const E = /* @__PURE__ */ new Map();
      for (const e of B.output.nodeResults) E.set(e.node, [
        0,
        0,
        e.w,
        e.bx,
        e.by,
        0
      ]);
      t.deformOutputs.val = {
        deformations: E,
        reactions: /* @__PURE__ */ new Map()
      };
      const b = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map();
      B.output.elementResults.forEach((e, x) => {
        b.set(x, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), y.set(x, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), P.set(x, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
        const s = Math.sqrt(e.Mxx ** 2 + e.Myy ** 2 - e.Mxx * e.Myy + 3 * e.Mxy ** 2);
        W.set(x, [
          s,
          s,
          s,
          s
        ]);
      }), t.analyzeOutputs.val = {
        bendingXX: b,
        bendingYY: y,
        bendingXY: P,
        vonMises: W
      }, t.objects3D.val = [];
    }
  };
});
export {
  __tla,
  A as s
};
