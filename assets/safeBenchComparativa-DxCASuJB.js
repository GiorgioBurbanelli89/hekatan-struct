import { p as j, __tla as __tla_0 } from "./didacticCpp-BfFs_eNG.js";
import { c as I } from "./cargaColumnaConsistente-DPcPMAlx.js";
let F;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const U = 9.80665;
  function O(e, t, c, r) {
    const f = c + 1, u = r + 1, d = e / c, x = t / r, p = [];
    for (let m = 0; m < u; ++m) for (let i = 0; i < f; ++i) p.push([
      i * d,
      m * x
    ]);
    const _ = [];
    for (let m = 0; m < r; ++m) for (let i = 0; i < c; ++i) {
      const M = m * f + i;
      _.push([
        M,
        M + 1,
        M + f + 1,
        M + f
      ]);
    }
    return {
      nxn: f,
      nyn: u,
      dx: d,
      dy: x,
      nodes: p,
      elements: _
    };
  }
  function C(e, t, c, r, f, u, d, x, p, _, m) {
    const { nxn: i, nyn: M, dx: N, dy: W, nodes: z, elements: v } = O(t, c, p, _), y = [], E = [], g = I(z, v, x, t / 2, c / 2, m).pointLoads, b = (l, a, n, o) => {
      if (y.push({
        node: l,
        dof: 0,
        k: d * a
      }), n) {
        const h = 0.5 * d * a;
        y.push({
          node: l,
          dof: 1,
          k: h * 1e-3
        }), y.push({
          node: l,
          dof: 2,
          k: h * 1e-3
        });
      }
      if (o) {
        const h = 1e-6 * d * N * W;
        y.push({
          node: l,
          dof: 1,
          k: h
        }), y.push({
          node: l,
          dof: 2,
          k: h
        });
      }
    };
    for (let l = 0; l < M; ++l) for (let a = 0; a < i; ++a) {
      const n = a === 0 || a === i - 1, o = l === 0 || l === M - 1, h = n && o ? 0.25 : n || o ? 0.5 : 1, V = N * W * h, P = l * i + a, Y = n && o;
      switch (e) {
        case 0:
          E.push({
            node: P,
            dof: 0,
            value: 0
          });
          break;
        case 1:
          b(P, V, false, false);
          break;
        case 2:
          b(P, V, true, false);
          break;
        case 3:
          b(P, V, false, false);
          break;
        case 4:
          b(P, V, false, Y);
          break;
      }
    }
    e !== 0 && (e === 1 || e === 2 || e === 3) && (E.push({
      node: 0,
      dof: 1,
      value: 0
    }), E.push({
      node: 0,
      dof: 2,
      value: 0
    }));
    const q = j({
      E: f,
      nu: u,
      thickness: r,
      theoryType: 0,
      bcType: "none",
      nodes: z,
      elements: v,
      bcs: E,
      pointLoads: g,
      springs: y
    });
    let k = 0, s = 0, w = 1 / 0, B = 0, S = 0;
    for (const l of q.nodeResults) {
      Math.abs(l.w) > Math.abs(k) && (k = l.w);
      const a = d * Math.abs(l.w);
      a > s && (s = a), a < w && a > 0 && (w = a), B += a, S++;
    }
    isFinite(w) || (w = 0);
    const R = S > 0 ? B / S : 0, D = s > 0 ? w / s : 1;
    return {
      w_max_mm: k * 1e3,
      q_max_kNm2: s,
      q_avg_kNm2: R,
      uniformidad: D,
      output: q
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
  F = {
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
      col_size: {
        default: 0.3,
        min: 0.15,
        max: 1,
        step: 0.05,
        label: "lado de la columna (m)"
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
      const t = e.Lz, c = e.Bz, r = e.tz, f = e.q_adm_tonf * U, u = e.P_tonf * U, d = Math.round(e.nx), x = Math.round(e.ny), p = e.col_size, _ = 24855e3, m = 0.2, i = f * e.ks_factor_Bowles, M = e.E_suelo_kPa, N = e.nu_suelo, W = _, z = r ** 3 / 12, v = Math.min(t, c), E = 0.65 * Math.pow(M * v ** 4 / (W * z), 1 / 12) * M / (v * (1 - N * N)), L = C(0, t, c, r, _, m, i, u, d, x, p), g = C(1, t, c, r, _, m, i, u, d, x, p), b = C(2, t, c, r, _, m, i, u, d, x, p), q = C(3, t, c, r, _, m, E, u, d, x, p), k = C(4, t, c, r, _, m, i, u, d, x, p), s = (w, B = 2) => Number.isFinite(w) ? w.toFixed(B) : "\u2014";
      return {
        "\u2500\u2500 \u{1F4DA} Comparativa ISSE 5 autores \u2500\u2500": "",
        "Modelo activo (vista 3D)": T[e.model | 0] ?? "\u2014",
        "ks Bowles (kN/m\xB3)": s(i, 0),
        "ks Vesic (kN/m\xB3)": s(E, 0),
        "\u2500\u2500 w_max [mm] por modelo \u2500\u2500": "",
        "1. Empotrada": `${s(Math.abs(L.w_max_mm), 4)} (rigid)`,
        "2. Winkler vert.": s(Math.abs(g.w_max_mm), 4),
        "3. Winkler 3D Bow.": s(Math.abs(b.w_max_mm), 4),
        "4. Vesic ks-analit.": s(Math.abs(q.w_max_mm), 4),
        "5. Winkler+antisig.": s(Math.abs(k.w_max_mm), 4),
        "\u2500\u2500 q_max [kN/m\xB2] por modelo \u2500\u2500": "",
        "q_max 1. Empot.": "0 (no hay springs)",
        "q_max 2. Winkler": s(g.q_max_kNm2, 2),
        "q_max 3. W3D Bow.": s(b.q_max_kNm2, 2),
        "q_max 4. Vesic": s(q.q_max_kNm2, 2),
        "q_max 5. W+antis.": s(k.q_max_kNm2, 2),
        "\u2500\u2500 Uniformidad q_min/q_max \u2500\u2500": "",
        "Unif. 2. Winkler": s(g.uniformidad, 3),
        "Unif. 3. W3D Bow.": s(b.uniformidad, 3),
        "Unif. 4. Vesic": s(q.uniformidad, 3),
        "Unif. 5. W+antis.": s(k.uniformidad, 3),
        "\u2500\u2500 An\xE1lisis \u2500\u2500": "",
        "Era 1960 (1)": "Subestima asentamiento, sobreestima fuerzas en columna",
        "Era Bowles (2-3,5)": "Asentamiento realista, distribuci\xF3n uniforme",
        "Era Vesic (4)": "ks computado de E_s \u2192 mejor para suelos blandos",
        "Recomendaci\xF3n moderna": "Modelo 5 (Winkler + anti-sing)"
      };
    },
    build(e, t) {
      const c = e.Lz, r = e.Bz, f = e.tz, u = 24855e3, d = 0.2, x = e.q_adm_tonf * U * e.ks_factor_Bowles, p = e.E_suelo_kPa, _ = e.nu_suelo, m = u, i = f ** 3 / 12, M = Math.min(c, r), W = 0.65 * Math.pow(p * M ** 4 / (m * i), 1 / 12) * p / (M * (1 - _ * _)), z = Math.round(e.model), v = z === 3 ? W : x, y = e.P_tonf * U, E = Math.round(e.nx), L = Math.round(e.ny), g = e.col_size, b = C(z, c, r, f, u, d, v, y, E, L, g), { nodes: q, elements: k } = O(c, r, E, L), s = q.map((a) => [
        a[0],
        a[1],
        0
      ]);
      t.nodes.val = s, t.elements.val = k, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: /* @__PURE__ */ new Map()
      }, t.elementInputs.val = {
        elasticities: new Map(k.map((a, n) => [
          n,
          u
        ])),
        poissonsRatios: new Map(k.map((a, n) => [
          n,
          d
        ])),
        thicknesses: new Map(k.map((a, n) => [
          n,
          f
        ]))
      };
      const w = /* @__PURE__ */ new Map();
      b.output.nodeResults.forEach((a, n) => {
        w.set(n, [
          0,
          0,
          a.w,
          a.bx,
          a.by,
          0
        ]);
      }), t.deformOutputs.val = {
        deformations: w,
        reactions: /* @__PURE__ */ new Map()
      };
      const B = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
      k.forEach((a, n) => {
        B.set(n, a.map((V) => v * b.output.nodeResults[V].w));
        const o = b.output.elementResults[n];
        S.set(n, [
          o.Mxx,
          o.Mxx,
          o.Mxx,
          o.Mxx
        ]), R.set(n, [
          o.Myy,
          o.Myy,
          o.Myy,
          o.Myy
        ]), D.set(n, [
          o.Mxy,
          o.Mxy,
          o.Mxy,
          o.Mxy
        ]);
        const h = Math.sqrt(o.Mxx ** 2 + o.Myy ** 2 - o.Mxx * o.Myy + 3 * o.Mxy ** 2);
        l.set(n, [
          h,
          h,
          h,
          h
        ]);
      }), t.analyzeOutputs.val = {
        pressure: B,
        bendingXX: S,
        bendingYY: R,
        bendingXY: D,
        vonMises: l
      }, t.objects3D.val = [];
    }
  };
});
export {
  __tla,
  F as s
};
