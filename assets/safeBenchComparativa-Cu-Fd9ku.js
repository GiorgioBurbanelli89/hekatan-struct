import { p as I, __tla as __tla_0 } from "./didacticCpp-PqvqKlgs.js";
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
    const _ = i + 1, d = l + 1, c = a / i, k = t / l, r = [];
    for (let o = 0; o < d; ++o) for (let m = 0; m < _; ++m) r.push([
      m * c,
      o * k
    ]);
    const u = [];
    for (let o = 0; o < l; ++o) for (let m = 0; m < i; ++m) {
      const p = o * _ + m;
      u.push([
        p,
        p + 1,
        p + _ + 1,
        p + _
      ]);
    }
    return {
      nxn: _,
      nyn: d,
      dx: c,
      dy: k,
      nodes: r,
      elements: u
    };
  }
  function V(a, t, i, l, _, d, c, k, r, u) {
    const { nxn: o, nyn: m, dx: p, dy: L, nodes: P, elements: q } = O(t, i, r, u), x = [], w = [], W = Math.floor(r / 2), z = [
      {
        node: Math.floor(u / 2) * o + W,
        dof: 0,
        value: -k
      }
    ], f = (s, e, h, g) => {
      if (x.push({
        node: s,
        dof: 0,
        k: c * e
      }), h) {
        const N = 0.5 * c * e;
        x.push({
          node: s,
          dof: 1,
          k: N * 1e-3
        }), x.push({
          node: s,
          dof: 2,
          k: N * 1e-3
        });
      }
      if (g) {
        const N = 1e-6 * c * p * L;
        x.push({
          node: s,
          dof: 1,
          k: N
        }), x.push({
          node: s,
          dof: 2,
          k: N
        });
      }
    };
    for (let s = 0; s < m; ++s) for (let e = 0; e < o; ++e) {
      const h = e === 0 || e === o - 1, g = s === 0 || s === m - 1, N = h && g ? 0.25 : h || g ? 0.5 : 1, U = p * L * N, C = s * o + e, Y = h && g;
      switch (a) {
        case 0:
          w.push({
            node: C,
            dof: 0,
            value: 0
          });
          break;
        case 1:
          f(C, U, false, false);
          break;
        case 2:
          f(C, U, true, false);
          break;
        case 3:
          f(C, U, false, false);
          break;
        case 4:
          f(C, U, false, Y);
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
    const n = I({
      E: _,
      nu: d,
      thickness: l,
      theoryType: 0,
      bcType: "none",
      nodes: P,
      elements: q,
      bcs: w,
      pointLoads: z,
      springs: x
    });
    let E = 0, b = 0, v = 1 / 0, R = 0, S = 0;
    for (const s of n.nodeResults) {
      Math.abs(s.w) > Math.abs(E) && (E = s.w);
      const e = c * Math.abs(s.w);
      e > b && (b = e), e < v && e > 0 && (v = e), R += e, S++;
    }
    isFinite(v) || (v = 0);
    const D = S > 0 ? R / S : 0, M = b > 0 ? v / b : 1;
    return {
      w_max_mm: E * 1e3,
      q_max_kNm2: b,
      q_avg_kNm2: D,
      uniformidad: M,
      output: n
    };
  }
  let T;
  T = {
    0: "1\uFE0F\u20E3 Empotrada (UBC 1960)",
    1: "2\uFE0F\u20E3 Winkler vertical (1867)",
    2: "3\uFE0F\u20E3 Winkler 3D Bowles (1996)",
    3: "4\uFE0F\u20E3 Vesic ks-anal\xEDtico (1973)",
    4: "5\uFE0F\u20E3 Winkler + anti-sing (moderno)"
  };
  A = {
    id: "safe-bench-zapata-comparativa",
    name: "\u{1F393} Zapata ISSE Comparativa: Empotrada vs Winkler vs Vesic (5 autores)",
    category: "2\uFE0F\u20E3 Shells \xB7 \u{1F9F0} Cimentaciones",
    benchmark: true,
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
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
      const t = a.Lz, i = a.Bz, l = a.tz, _ = a.q_adm_tonf * j, d = a.P_tonf * j, c = Math.round(a.nx), k = Math.round(a.ny), r = 24855e3, u = 0.2, o = _ * a.ks_factor_Bowles, m = a.E_suelo_kPa, p = a.nu_suelo, L = r, P = l ** 3 / 12, q = Math.min(t, i), w = 0.65 * Math.pow(m * q ** 4 / (L * P), 1 / 12) * m / (q * (1 - p * p)), W = V(0, t, i, l, r, u, o, d, c, k), B = V(1, t, i, l, r, u, o, d, c, k), y = V(2, t, i, l, r, u, o, d, c, k), z = V(3, t, i, l, r, u, w, d, c, k), f = V(4, t, i, l, r, u, o, d, c, k), n = (E, b = 2) => Number.isFinite(E) ? E.toFixed(b) : "\u2014";
      return {
        "\u2500\u2500 \u{1F4DA} Comparativa ISSE 5 autores \u2500\u2500": "",
        "Modelo activo (vista 3D)": T[a.model | 0] ?? "\u2014",
        "ks Bowles (kN/m\xB3)": n(o, 0),
        "ks Vesic (kN/m\xB3)": n(w, 0),
        "\u2500\u2500 w_max [mm] por modelo \u2500\u2500": "",
        "1. Empotrada": `${n(Math.abs(W.w_max_mm), 4)} (rigid)`,
        "2. Winkler vert.": n(Math.abs(B.w_max_mm), 4),
        "3. Winkler 3D Bow.": n(Math.abs(y.w_max_mm), 4),
        "4. Vesic ks-analit.": n(Math.abs(z.w_max_mm), 4),
        "5. Winkler+antisig.": n(Math.abs(f.w_max_mm), 4),
        "\u2500\u2500 q_max [kN/m\xB2] por modelo \u2500\u2500": "",
        "q_max 1. Empot.": "0 (no hay springs)",
        "q_max 2. Winkler": n(B.q_max_kNm2, 2),
        "q_max 3. W3D Bow.": n(y.q_max_kNm2, 2),
        "q_max 4. Vesic": n(z.q_max_kNm2, 2),
        "q_max 5. W+antis.": n(f.q_max_kNm2, 2),
        "\u2500\u2500 Uniformidad q_min/q_max \u2500\u2500": "",
        "Unif. 2. Winkler": n(B.uniformidad, 3),
        "Unif. 3. W3D Bow.": n(y.uniformidad, 3),
        "Unif. 4. Vesic": n(z.uniformidad, 3),
        "Unif. 5. W+antis.": n(f.uniformidad, 3),
        "\u2500\u2500 An\xE1lisis \u2500\u2500": "",
        "Era 1960 (1)": "Subestima asentamiento, sobreestima fuerzas en columna",
        "Era Bowles (2-3,5)": "Asentamiento realista, distribuci\xF3n uniforme",
        "Era Vesic (4)": "ks computado de E_s \u2192 mejor para suelos blandos",
        "Recomendaci\xF3n moderna": "Modelo 5 (Winkler + anti-sing)"
      };
    },
    build(a, t) {
      const i = a.Lz, l = a.Bz, _ = a.tz, d = 24855e3, c = 0.2, k = a.q_adm_tonf * j * a.ks_factor_Bowles, r = a.E_suelo_kPa, u = a.nu_suelo, o = d, m = _ ** 3 / 12, p = Math.min(i, l), P = 0.65 * Math.pow(r * p ** 4 / (o * m), 1 / 12) * r / (p * (1 - u * u)), q = Math.round(a.model), x = q === 3 ? P : k, w = a.P_tonf * j, W = Math.round(a.nx), B = Math.round(a.ny), y = V(q, i, l, _, d, c, x, w, W, B), { nodes: z, elements: f } = O(i, l, W, B), n = z.map((M) => [
        M[0],
        M[1],
        0
      ]);
      t.nodes.val = n, t.elements.val = f, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, t.elementInputs.val = {
        elasticities: new Map(f.map((M, s) => [
          s,
          d
        ])),
        poissonsRatios: new Map(f.map((M, s) => [
          s,
          c
        ])),
        thicknesses: new Map(f.map((M, s) => [
          s,
          _
        ]))
      };
      const E = /* @__PURE__ */ new Map();
      y.output.nodeResults.forEach((M, s) => {
        E.set(s, [
          0,
          0,
          M.w,
          M.bx,
          M.by,
          0
        ]);
      }), t.deformOutputs.val = {
        deformations: E,
        reactions: /* @__PURE__ */ new Map()
      };
      const b = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map();
      f.forEach((M, s) => {
        b.set(s, M.map((g) => x * y.output.nodeResults[g].w));
        const e = y.output.elementResults[s];
        v.set(s, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), R.set(s, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), S.set(s, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
        const h = Math.sqrt(e.Mxx ** 2 + e.Myy ** 2 - e.Mxx * e.Myy + 3 * e.Mxy ** 2);
        D.set(s, [
          h,
          h,
          h,
          h
        ]);
      }), t.analyzeOutputs.val = {
        pressure: b,
        bendingXX: v,
        bendingYY: R,
        bendingXY: S,
        vonMises: D
      }, t.objects3D.val = [];
    }
  };
});
export {
  __tla,
  A as s
};
