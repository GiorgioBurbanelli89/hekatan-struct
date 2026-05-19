import { p as T, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let Z;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const D = 9.80665;
  function j(e, t, i, l) {
    const p = i + 1, f = l + 1, c = e / i, h = t / l, r = [];
    for (let a = 0; a < f; ++a) for (let m = 0; m < p; ++m) r.push([
      m * c,
      a * h
    ]);
    const _ = [];
    for (let a = 0; a < l; ++a) for (let m = 0; m < i; ++m) {
      const k = a * p + m;
      _.push([
        k,
        k + 1,
        k + p + 1,
        k + p
      ]);
    }
    return {
      nxn: p,
      nyn: f,
      dx: c,
      dy: h,
      nodes: r,
      elements: _
    };
  }
  function S(e, t, i, l, p, f, c, h, r, _) {
    const { nxn: a, nyn: m, dx: k, dy: y, nodes: V, elements: v } = j(t, i, r, _), w = [], x = [], W = Math.floor(r / 2), N = [
      {
        node: Math.floor(_ / 2) * a + W,
        dof: 0,
        value: -h
      }
    ], d = (n, u, L, P) => {
      if (w.push({
        node: n,
        dof: 0,
        k: c * u
      }), L) {
        const g = 0.5 * c * u;
        w.push({
          node: n,
          dof: 1,
          k: g * 1e-3
        }), w.push({
          node: n,
          dof: 2,
          k: g * 1e-3
        });
      }
      if (P) {
        const g = 1e-6 * c * k * y;
        w.push({
          node: n,
          dof: 1,
          k: g
        }), w.push({
          node: n,
          dof: 2,
          k: g
        });
      }
    };
    for (let n = 0; n < m; ++n) for (let u = 0; u < a; ++u) {
      const L = u === 0 || u === a - 1, P = n === 0 || n === m - 1, g = L && P ? 0.25 : L || P ? 0.5 : 1, U = k * y * g, C = n * a + u, I = L && P;
      switch (e) {
        case 0:
          x.push({
            node: C,
            dof: 0,
            value: 0
          });
          break;
        case 1:
          d(C, U, false, false);
          break;
        case 2:
          d(C, U, true, false);
          break;
        case 3:
          d(C, U, false, false);
          break;
        case 4:
          d(C, U, false, I);
          break;
      }
    }
    e !== 0 && (e === 1 || e === 2 || e === 3) && (x.push({
      node: 0,
      dof: 1,
      value: 0
    }), x.push({
      node: 0,
      dof: 2,
      value: 0
    }));
    const o = T({
      E: p,
      nu: f,
      thickness: l,
      theoryType: 0,
      bcType: "none",
      nodes: V,
      elements: v,
      bcs: x,
      pointLoads: N,
      springs: w
    });
    let E = 0, M = 0, q = 1 / 0, s = 0, b = 0;
    for (const n of o.nodeResults) {
      Math.abs(n.w) > Math.abs(E) && (E = n.w);
      const u = c * Math.abs(n.w);
      u > M && (M = u), u < q && u > 0 && (q = u), s += u, b++;
    }
    isFinite(q) || (q = 0);
    const R = b > 0 ? s / b : 0, O = M > 0 ? q / M : 1;
    return {
      w_max_mm: E * 1e3,
      q_max_kNm2: M,
      q_avg_kNm2: R,
      uniformidad: O,
      output: o
    };
  }
  let A;
  A = {
    0: "1\uFE0F\u20E3 Empotrada (UBC 1960)",
    1: "2\uFE0F\u20E3 Winkler vertical (1867)",
    2: "3\uFE0F\u20E3 Winkler 3D Bowles (1996)",
    3: "4\uFE0F\u20E3 Vesic ks-anal\xEDtico (1973)",
    4: "5\uFE0F\u20E3 Winkler + anti-sing (moderno)"
  };
  Z = {
    id: "safe-bench-zapata-comparativa",
    name: "\u{1F393} Zapata ISSE Comparativa: Empotrada vs Winkler vs Vesic (5 autores)",
    category: "Cimentaciones",
    benchmark: true,
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "displacementZ",
      "bendingXX",
      "bendingYY",
      "vonMises"
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
    computedLabels(e) {
      const t = e.Lz, i = e.Bz, l = e.tz, p = e.q_adm_tonf * D, f = e.P_tonf * D, c = Math.round(e.nx), h = Math.round(e.ny), r = 24855e3, _ = 0.2, a = p * e.ks_factor_Bowles, m = e.E_suelo_kPa, k = e.nu_suelo, y = r, V = l ** 3 / 12, v = Math.min(t, i), x = 0.65 * Math.pow(m * v ** 4 / (y * V), 1 / 12) * m / (v * (1 - k * k)), W = S(0, t, i, l, r, _, a, f, c, h), B = S(1, t, i, l, r, _, a, f, c, h), z = S(2, t, i, l, r, _, a, f, c, h), N = S(3, t, i, l, r, _, x, f, c, h), d = S(4, t, i, l, r, _, a, f, c, h), o = (E, M = 2) => Number.isFinite(E) ? E.toFixed(M) : "\u2014";
      return {
        "\u2500\u2500 \u{1F4DA} Comparativa ISSE 5 autores \u2500\u2500": "",
        "Modelo activo (vista 3D)": A[e.model | 0] ?? "\u2014",
        "ks Bowles (kN/m\xB3)": o(a, 0),
        "ks Vesic (kN/m\xB3)": o(x, 0),
        "\u2500\u2500 w_max [mm] por modelo \u2500\u2500": "",
        "1. Empotrada": `${o(Math.abs(W.w_max_mm), 4)} (rigid)`,
        "2. Winkler vert.": o(Math.abs(B.w_max_mm), 4),
        "3. Winkler 3D Bow.": o(Math.abs(z.w_max_mm), 4),
        "4. Vesic ks-analit.": o(Math.abs(N.w_max_mm), 4),
        "5. Winkler+antisig.": o(Math.abs(d.w_max_mm), 4),
        "\u2500\u2500 q_max [kN/m\xB2] por modelo \u2500\u2500": "",
        "q_max 1. Empot.": "0 (no hay springs)",
        "q_max 2. Winkler": o(B.q_max_kNm2, 2),
        "q_max 3. W3D Bow.": o(z.q_max_kNm2, 2),
        "q_max 4. Vesic": o(N.q_max_kNm2, 2),
        "q_max 5. W+antis.": o(d.q_max_kNm2, 2),
        "\u2500\u2500 Uniformidad q_min/q_max \u2500\u2500": "",
        "Unif. 2. Winkler": o(B.uniformidad, 3),
        "Unif. 3. W3D Bow.": o(z.uniformidad, 3),
        "Unif. 4. Vesic": o(N.uniformidad, 3),
        "Unif. 5. W+antis.": o(d.uniformidad, 3),
        "\u2500\u2500 An\xE1lisis \u2500\u2500": "",
        "Era 1960 (1)": "Subestima asentamiento, sobreestima fuerzas en columna",
        "Era Bowles (2-3,5)": "Asentamiento realista, distribuci\xF3n uniforme",
        "Era Vesic (4)": "ks computado de E_s \u2192 mejor para suelos blandos",
        "Recomendaci\xF3n moderna": "Modelo 5 (Winkler + anti-sing)"
      };
    },
    build(e, t) {
      const i = e.Lz, l = e.Bz, p = e.tz, f = 24855e3, c = 0.2, h = e.q_adm_tonf * D * e.ks_factor_Bowles, r = e.E_suelo_kPa, _ = e.nu_suelo, a = f, m = p ** 3 / 12, k = Math.min(i, l), V = 0.65 * Math.pow(r * k ** 4 / (a * m), 1 / 12) * r / (k * (1 - _ * _)), v = Math.round(e.model), w = v === 3 ? V : h, x = e.P_tonf * D, W = Math.round(e.nx), B = Math.round(e.ny), z = S(v, i, l, p, f, c, w, x, W, B), { nodes: N, elements: d } = j(i, l, W, B), o = N.map((s) => [
        s[0],
        s[1],
        0
      ]);
      t.nodes.val = o, t.elements.val = d, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, t.elementInputs.val = {
        elasticities: new Map(d.map((s, b) => [
          b,
          f
        ])),
        poissonsRatios: new Map(d.map((s, b) => [
          b,
          c
        ])),
        thicknesses: new Map(d.map((s, b) => [
          b,
          p
        ]))
      };
      const E = /* @__PURE__ */ new Map();
      for (const s of z.output.nodeResults) E.set(s.node, [
        0,
        0,
        s.w,
        s.bx,
        s.by,
        0
      ]);
      t.deformOutputs.val = {
        deformations: E,
        reactions: /* @__PURE__ */ new Map()
      };
      const M = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
      for (let s = 0; s < d.length; ++s) {
        const b = [], R = [];
        for (const O of d[s]) {
          const n = z.output.nodeResults[O];
          b.push(n.w * 1e3), R.push(w * n.w);
        }
        q.set(s, b), M.set(s, R);
      }
      t.analyzeOutputs.val = {
        displacementZ: q,
        pressure: M
      };
    }
  };
});
export {
  __tla,
  Z as s
};
