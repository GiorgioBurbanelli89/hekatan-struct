import { L as Ve, V as P, a as Te, B as $e } from "./Text-Dh9LKuSL.js";
import { v as ct } from "./theme-CzzIlc4y.js";
import { a as rt } from "./analyze-ClLKGn9k.js";
import { m as mt, d as ft, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { a as Ae } from "./exampleVersion-D1A_5i59.js";
let Pt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let A, O, dt, Oe, w, Be, ut, Re, Ge, _t, pt, St;
  A = 25e6;
  O = 0.2;
  dt = A / (2 * (1 + O));
  Oe = 24;
  w = 9.80665;
  Be = [
    {
      name: "Custom",
      q_adm: 20,
      ks_factor: 10.5,
      su: 0,
      phi: 30,
      gamma: 18,
      N_SPT: 20,
      E_soil: 2e4
    },
    {
      name: "Arcilla blanda",
      q_adm: 5,
      ks_factor: 12,
      su: 25,
      phi: 0,
      gamma: 16,
      N_SPT: 3,
      E_soil: 3e3
    },
    {
      name: "Arcilla firme",
      q_adm: 15,
      ks_factor: 11,
      su: 75,
      phi: 0,
      gamma: 18,
      N_SPT: 10,
      E_soil: 15e3
    },
    {
      name: "Arcilla dura",
      q_adm: 30,
      ks_factor: 10,
      su: 150,
      phi: 0,
      gamma: 19,
      N_SPT: 20,
      E_soil: 3e4
    },
    {
      name: "Limo compacto",
      q_adm: 12,
      ks_factor: 10.5,
      su: 40,
      phi: 25,
      gamma: 18,
      N_SPT: 15,
      E_soil: 8e3
    },
    {
      name: "Arena suelta",
      q_adm: 10,
      ks_factor: 14,
      su: 0,
      phi: 28,
      gamma: 16,
      N_SPT: 10,
      E_soil: 1e4
    },
    {
      name: "Arena media",
      q_adm: 20,
      ks_factor: 13,
      su: 0,
      phi: 33,
      gamma: 18,
      N_SPT: 20,
      E_soil: 25e3
    },
    {
      name: "Arena densa",
      q_adm: 40,
      ks_factor: 12,
      su: 0,
      phi: 40,
      gamma: 20,
      N_SPT: 40,
      E_soil: 6e4
    },
    {
      name: "Grava densa",
      q_adm: 60,
      ks_factor: 12,
      su: 0,
      phi: 42,
      gamma: 22,
      N_SPT: 50,
      E_soil: 1e5
    },
    {
      name: "Roca alterada",
      q_adm: 100,
      ks_factor: 15,
      su: 0,
      phi: 45,
      gamma: 22,
      N_SPT: 100,
      E_soil: 5e5
    },
    {
      name: "Roca sana",
      q_adm: 200,
      ks_factor: 20,
      su: 0,
      phi: 50,
      gamma: 25,
      N_SPT: 100,
      E_soil: 2e6
    }
  ];
  ut = 0.2;
  Re = 0.035;
  Ge = 8;
  _t = new Ve({
    color: 16711731,
    linewidth: 2
  });
  pt = new Ve({
    color: 52224,
    linewidth: 2
  });
  St = 0.04;
  Pt = {
    id: "zapata-aislada",
    name: "Zapata Aislada (Ecuador q_adm tonf/m\xB2)",
    category: "Cimentaciones",
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
      "bendingXX",
      "bendingYY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: true,
    params: {
      Lz: {
        default: 2.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Lz (m)"
      },
      Bz: {
        default: 2.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Bz (m)"
      },
      tz: {
        default: 0.1,
        min: 0.05,
        max: 1,
        step: 0.05,
        label: "tz (m)"
      },
      bc: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "bc columna (m)"
      },
      Hp: {
        default: 0.5,
        min: 0.3,
        max: 2,
        step: 0.1,
        label: "Hp pedestal (m)"
      },
      soilType: {
        default: 6,
        label: "Tipo de suelo",
        options: Object.fromEntries(Be.map((e, t) => [
          e.name,
          t
        ]))
      },
      q_adm: {
        default: 20,
        min: 1,
        max: 100,
        step: 1,
        label: "q_adm (tonf/m\xB2)"
      },
      ks_factor: {
        default: 10.5,
        min: 5,
        max: 20,
        step: 0.5,
        label: "ks/q_adm (Bowles)"
      },
      su: {
        default: 0,
        min: 0,
        max: 300,
        step: 1,
        label: "su cohesi\xF3n (kPa)"
      },
      phi: {
        default: 33,
        min: 0,
        max: 55,
        step: 1,
        label: "\u03C6 fricci\xF3n (\xB0)"
      },
      gamma: {
        default: 18,
        min: 14,
        max: 26,
        step: 0.5,
        label: "\u03B3 suelo (kN/m\xB3)"
      },
      N_SPT: {
        default: 20,
        min: 0,
        max: 100,
        step: 1,
        label: "N SPT"
      },
      E_soil: {
        default: 25e3,
        min: 1e3,
        max: 2e6,
        step: 1e3,
        label: "E suelo (kPa)"
      },
      useSimple: {
        default: 0,
        boolean: true,
        label: "\u{1F3AF} Usar Carga Simple (ignora D/L/S)",
        folder: "Cargas \u2014 Activar"
      },
      useD: {
        default: 1,
        boolean: true,
        label: "\u2611 Usar Patr\xF3n D (Muerta)",
        folder: "Cargas \u2014 Activar"
      },
      useL: {
        default: 1,
        boolean: true,
        label: "\u2611 Usar Patr\xF3n L (Viva)",
        folder: "Cargas \u2014 Activar"
      },
      useS: {
        default: 0,
        boolean: true,
        label: "\u2610 Usar Patr\xF3n S (Sobrecarga)",
        folder: "Cargas \u2014 Activar"
      },
      useFactors: {
        default: 1,
        boolean: true,
        label: "\xD7 Aplicar factores fD/fL/fS",
        folder: "Cargas \u2014 Activar"
      },
      P_simple: {
        default: 20,
        min: 0,
        max: 100,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Simple"
      },
      Mx_simple: {
        default: 1,
        min: -5,
        max: 5,
        step: 0.1,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Simple"
      },
      My_simple: {
        default: 2,
        min: -5,
        max: 5,
        step: 0.1,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Simple"
      },
      P_D: {
        default: 10,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Patr\xF3n D (Muerta)"
      },
      Mx_D: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n D (Muerta)"
      },
      My_D: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n D (Muerta)"
      },
      P_L: {
        default: 5,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Patr\xF3n L (Viva)"
      },
      Mx_L: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n L (Viva)"
      },
      My_L: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n L (Viva)"
      },
      P_S: {
        default: 0,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Patr\xF3n S (Sobrec.)"
      },
      Mx_S: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n S (Sobrec.)"
      },
      My_S: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n S (Sobrec.)"
      },
      combo: {
        default: 0,
        label: "Combinaci\xF3n (solo modo 5)",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S",
        options: {
          "1.2D + 1.6L (gravitatoria)": 0,
          "1.4D": 1,
          "1.2D + 1.0L": 2,
          "1.2D + 1.0L + 0.5S": 3,
          "1.2D + 1.6S + 0.5L": 4,
          "Servicio 1.0D + 1.0L": 5,
          "1.0D (solo D)": 6,
          "1.0L (solo L)": 7,
          "1.0S (solo S)": 8,
          "S\xEDsmica 1.2D+1.0L+1.0E": 9,
          "S\xEDsmica 0.9D + 1.0E": 10,
          Custom: 11
        }
      },
      fD: {
        default: 1.2,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor D",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S"
      },
      fL: {
        default: 1.6,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor L",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S"
      },
      fS: {
        default: 0,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor S (o E)",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S"
      },
      nSub: {
        default: 10,
        min: 3,
        max: 16,
        step: 1,
        label: "n subdivisiones"
      }
    },
    inlineComputed: [
      {
        after: "ks_factor",
        label: "ks (kN/m\xB3)",
        compute: (e) => ((e.q_adm ?? 20) * w * (e.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (e) => {
          const t = e.tz ?? 0.15;
          return (A * t ** 3 / (12 * (1 - O ** 2))).toFixed(1);
        }
      },
      {
        after: "Lz",
        label: "k_r Biot",
        compute: (e) => {
          const t = e.tz ?? 0.15, l = e.Lz ?? 2.5, h = (e.q_adm ?? 20) * w * (e.ks_factor ?? 10.5), u = A * t ** 3 / (12 * (1 - O ** 2)) / (h * l ** 4);
          return u.toFixed(3) + (u < 1 ? " FLEX" : " R\xCDG");
        }
      }
    ],
    computedLabels(e, t) {
      var _a;
      const n = (e.q_adm ?? 20) * w * (e.ks_factor ?? 10.5), h = e.tz ?? 0.15, r = e.Lz ?? 2.5, u = A * h ** 3 / (12 * (1 - O ** 2)), b = u / (n * r ** 4), X = (e.useSimple ?? 0) >= 0.5, le = (e.useD ?? 0) >= 0.5, D = (e.useL ?? 0) >= 0.5, Z = (e.useS ?? 0) >= 0.5, z = (e.useFactors ?? 1) >= 0.5, ee = z ? e.fD ?? 1.2 : 1, te = z ? e.fL ?? 1.6 : 1, v = z ? e.fS ?? 0 : 1, B = le ? 1 : 0, R = D ? 1 : 0, G = Z ? 1 : 0;
      let y = 0;
      X ? y = e.P_simple ?? 0 : y = B * ee * (e.P_D ?? 0) + R * te * (e.P_L ?? 0) + G * v * (e.P_S ?? 0);
      const m = [];
      X ? m.push("Simple") : (le && m.push("D"), D && m.push("L"), Z && m.push("S"), m.length || m.push("NINGUNO"));
      const Y = m.join("+") + (z && !X ? " (factor)" : "");
      let V = 0, F = 0;
      const H = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (H && H.size) {
        for (const q of H.values()) for (const M of q) M < V && (V = M), (M < F || F === 0) && (F = M);
        let N = 1 / 0;
        for (const q of H.values()) for (const M of q) Math.abs(M) < N && (N = Math.abs(M));
        F = -N;
      }
      const I = Math.abs(V) / (e.q_adm || 1);
      return {
        "Patrones activos": Y,
        "ks (kN/m\xB3)": n.toFixed(0),
        "D (kN\xB7m)": u.toFixed(1),
        "k_r (Biot)": b.toFixed(3) + (b < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": y.toFixed(2),
        "q_max (tonf/m\xB2)": V.toFixed(2),
        "q_min (tonf/m\xB2)": F.toFixed(2),
        "q/q_adm": I.toFixed(2) + (I > 1 ? " \u26A0" : " \u2713")
      };
    },
    onParamChange(e, t) {
      if (e === "soilType") {
        const l = Math.round(t.soilType ?? 0);
        if (l > 0) {
          const n = Be[l];
          t.q_adm = n.q_adm, t.ks_factor = n.ks_factor, t.su = n.su, t.phi = n.phi, t.gamma = n.gamma, t.N_SPT = n.N_SPT, t.E_soil = n.E_soil;
        }
      }
      if (e === "combo") {
        const l = Math.round(t.combo ?? 0), n = [
          [
            1.2,
            1.6,
            0
          ],
          [
            1.4,
            0,
            0
          ],
          [
            1.2,
            1,
            0
          ],
          [
            1.2,
            1,
            0.5
          ],
          [
            1.2,
            0.5,
            1.6
          ],
          [
            1,
            1,
            0
          ],
          [
            1,
            0,
            0
          ],
          [
            0,
            1,
            0
          ],
          [
            0,
            0,
            1
          ],
          [
            1.2,
            1,
            1
          ],
          [
            0.9,
            0,
            1
          ]
        ];
        l >= 0 && l < n.length && ([t.fD, t.fL, t.fS] = n[l]);
      }
    },
    build(e, t) {
      var _a;
      const { Lz: l, Bz: n, tz: h, bc: r, Hp: u } = e, b = e.q_adm, X = e.ks_factor, D = b * w * X, Z = (e.useSimple ?? 0) >= 0.5, z = (e.useD ?? 0) >= 0.5, ee = (e.useL ?? 0) >= 0.5, te = (e.useS ?? 0) >= 0.5, v = (e.useFactors ?? 1) >= 0.5, B = v ? e.fD ?? 1.2 : 1, R = v ? e.fL ?? 1.6 : 1, G = v ? e.fS ?? 0 : 1, y = z ? 1 : 0, m = ee ? 1 : 0, Y = te ? 1 : 0, V = B, F = R, H = G;
      let I = 0, N = 0, q = 0;
      Z ? (I = e.P_simple ?? 0, N = e.Mx_simple ?? 0, q = e.My_simple ?? 0) : (I = y * B * (e.P_D ?? 0) + m * R * (e.P_L ?? 0) + Y * G * (e.P_S ?? 0), N = y * B * (e.Mx_D ?? 0) + m * R * (e.Mx_L ?? 0) + Y * G * (e.Mx_S ?? 0), q = y * B * (e.My_D ?? 0) + m * R * (e.My_L ?? 0) + Y * G * (e.My_S ?? 0));
      const M = I * w, He = N * w, je = q * w, K = Math.round(e.nSub), ae = l / 2, oe = n / 2, g = [], k = [];
      for (let a = 0; a <= K; a++) g.push(l * a / K), k.push(n * a / K);
      g.includes(ae) || (g.push(ae), g.sort((a, o) => a - o)), k.includes(oe) || (k.push(oe), k.sort((a, o) => a - o));
      const ie = [], J = [], ce = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), de = (a, o, s) => {
        const p = `${a.toFixed(4)},${o.toFixed(4)},${s.toFixed(4)}`;
        if (fe.has(p)) return fe.get(p);
        const i = ie.length;
        return ie.push([
          a,
          o,
          s
        ]), fe.set(p, i), i;
      }, _ = [];
      for (let a = 0; a < k.length; a++) {
        const o = [];
        for (let s = 0; s < g.length; s++) o.push(de(g[s], k[a], 0));
        _.push(o);
      }
      for (let a = 0; a < k.length - 1; a++) for (let o = 0; o < g.length - 1; o++) {
        const s = J.length;
        J.push([
          _[a][o],
          _[a][o + 1],
          _[a + 1][o + 1],
          _[a + 1][o]
        ]), Le.set(s, h), ce.set(s, A), re.set(s, O), me.set(s, Oe);
      }
      const Ue = de(ae, oe, 0), Ee = de(ae, oe, u), L = J.length;
      J.push([
        Ue,
        Ee
      ]), ce.set(L, A), re.set(L, O), Ne.set(L, dt), ke.set(L, r * r), Pe.set(L, r ** 4 / 12), De.set(L, r ** 4 / 12), ve.set(L, 0.14 * r ** 4), me.set(L, Oe), qe.set(L, {
        type: "rect",
        b: r,
        h: r
      });
      const Ce = /* @__PURE__ */ new Map();
      Ce.set(Ee, [
        0,
        0,
        -M,
        He,
        je,
        0
      ]);
      const we = l / K, ze = n / K, Xe = 0.5, T = [], se = [];
      for (let a = 0; a < k.length; a++) for (let o = 0; o < g.length; o++) {
        const s = we * ze * (o === 0 || o === g.length - 1 ? 0.5 : 1) * (a === 0 || a === k.length - 1 ? 0.5 : 1), p = D * s, i = D * s * Xe;
        T.push({
          node: _[a][o],
          dof: 0,
          k: i
        }), T.push({
          node: _[a][o],
          dof: 1,
          k: i
        }), T.push({
          node: _[a][o],
          dof: 2,
          k: p
        }), se.push(_[a][o]);
      }
      const ue = D * we * ze * 1e-4, _e = _[0][0];
      T.push({
        node: _e,
        dof: 3,
        k: ue
      }), T.push({
        node: _e,
        dof: 4,
        k: ue
      }), T.push({
        node: _e,
        dof: 5,
        k: ue
      }), t.nodes.val = ie.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), t.elements.val = J, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: Ce
      }, t.elementInputs.val = {
        elasticities: ce,
        poissonsRatios: re,
        areas: ke,
        momentsOfInertiaZ: Pe,
        momentsOfInertiaY: De,
        torsionalConstants: ve,
        shearModuli: Ne,
        thicknesses: Le,
        densities: me,
        sectionShapes: qe
      };
      try {
        t.deformOutputs.val = ft(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, T);
        const a = rt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), o = t.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        let p = 0;
        t.elements.rawVal.forEach((C, W) => {
          if (C.length !== 4) return;
          const $ = [];
          for (const he of C) {
            const Q = o == null ? void 0 : o.get(he), U = D * (Q ? Q[2] : 0) / w;
            $.push(U), U < p && (p = U);
          }
          s.set(W, $);
        }), a.pressure = s, t.analyzeOutputs.val = a;
        const i = Math.abs(p);
        let S = 1 / 0;
        s.forEach((C) => {
          for (const W of C) {
            const $ = Math.abs(W);
            $ < S && (S = $);
          }
        }), Number.isFinite(S) || (S = 0);
        const j = i / e.q_adm, f = A * h ** 3 / (12 * (1 - O ** 2)) / (D * l ** 4), c = [];
        Z ? c.push("Simple") : (z && c.push(`D${v ? "\xD7" + V : ""}`), ee && c.push(`L${v ? "\xD7" + F : ""}`), te && c.push(`S${v ? "\xD7" + H : ""}`), c.length || c.push("\u26A0 NINGUNO activo"));
        const E = c.join(" + ");
        console.log(`[Zapata Aislada]  Patrones activos: ${E}
  Cargas totales: P=${I.toFixed(2)} tonf, Mx=${N.toFixed(2)} tonf\xB7m, My=${q.toFixed(2)} tonf\xB7m
  Patrones: D(${e.P_D}, ${e.Mx_D}, ${e.My_D}) L(${e.P_L}, ${e.Mx_L}, ${e.My_L}) S(${e.P_S}, ${e.Mx_S}, ${e.My_S})
  q_max (centro) = -${i.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${S.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - S / (i || 1)) * 100).toFixed(1)}%
  q_adm = -${e.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${j.toFixed(2)}` + (j > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${f.toFixed(2)} (${f < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (a) {
        console.error("Solver error zapata aislada:", a);
      }
      const ye = t.deformOutputs.rawVal.deformations;
      let pe = 1e-9;
      for (const a of se) {
        const o = ye == null ? void 0 : ye.get(a);
        o && Number.isFinite(o[2]) && (pe = Math.max(pe, Math.abs(o[2])));
      }
      const Se = Ge * 12, Ze = new Set(se), xe = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Fe = (a, o) => {
        const s = a ? o : 0, i = -(pe * Math.max(s, 1) + ut), S = [];
        for (const j of se) {
          if (!Ze.has(j)) continue;
          const ne = t.nodes.rawVal[j];
          if (!ne) continue;
          const f = ne[0], c = ne[1], E = ye == null ? void 0 : ye.get(j), C = (d) => Number.isFinite(d) ? d : 0, W = E ? C(E[0]) : 0, $ = E ? C(E[1]) : 0, he = E ? C(E[2]) : 0, Q = f + W * s, be = c + $ * s, U = 0 + he * s, Ke = U - i, Me = (d) => [
            f + (Q - f) * d,
            c + (be - c) * d,
            i + Ke * d
          ], [Je, We, Qe] = Me(0), [et, tt, at] = Me(0.05), ge = [
            new P(Je, We, Qe),
            new P(et, tt, at)
          ];
          for (let d = 0; d <= Se; d++) {
            const st = 0.05 + 0.9 * (d / Se), [nt, lt, it] = Me(st), Ie = 2 * Math.PI * Ge * (d / Se);
            ge.push(new P(nt + Re * Math.cos(Ie), lt + Re * Math.sin(Ie), it));
          }
          ge.push(new P(Q, be, U)), S.push(new Te(new $e().setFromPoints(ge), _t));
          const x = St, ot = [
            new P(f - x, c - x, i),
            new P(f + x, c - x, i),
            new P(f + x, c + x, i),
            new P(f - x, c + x, i),
            new P(f - x, c - x, i)
          ];
          S.push(new Te(new $e().setFromPoints(ot), pt));
        }
        return S;
      }, Ye = Ae.v;
      xe ? ct.derive(() => {
        const a = xe.deformedShape.val, o = xe.deformScale.val;
        Ae.v === Ye && (t.objects3D.val = Fe(a, o));
      }) : t.objects3D.val = Fe(true, 1);
    },
    runModal(e, t, l) {
      var _a, _b;
      const n = t.nodes.val, h = t.elements.val, r = t.nodeInputs.val, u = t.elementInputs.val;
      if (!(!n.length || !h.length || !((_a = u.densities) == null ? void 0 : _a.size))) try {
        const b = mt(n, h, r, u, 12);
        l.render(b, {
          title: `Zapata Aislada ${e.Lz}\xD7${e.Bz}m t=${e.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${e.bc}m  Hp=${e.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = b.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (b) {
        console.warn("Modal zapata error:", b.message);
      }
    }
  };
});
export {
  __tla,
  Pt as z
};
