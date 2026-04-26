import { L as Ve, V as k, a as Te, B as $e } from "./Text-DyNVkyur.js";
import { v as rt } from "./theme-2eEBQPmF.js";
import { a as ct } from "./analyze-BydHtRcI.js";
import { m as mt, d as ft, __tla as __tla_0 } from "./didacticCpp-B5f-GyHC.js";
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
  let A, B, dt, Be, w, Oe, ut, Re, Ge, _t, pt, St;
  A = 25e6;
  B = 0.2;
  dt = A / (2 * (1 + B));
  Be = 24;
  w = 9.80665;
  Oe = [
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
        options: Object.fromEntries(Oe.map((e, t) => [
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
        label: "ks_factor Bowles (referencia)"
      },
      ks: {
        default: 2059,
        min: 100,
        max: 2e5,
        step: 10,
        label: "ks (kN/m\xB3)"
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
        label: "ks Bowles ref. (kN/m\xB3)",
        compute: (e) => ((e.q_adm ?? 20) * w * (e.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (e) => {
          const t = e.tz ?? 0.15;
          return (A * t ** 3 / (12 * (1 - B ** 2))).toFixed(1);
        }
      },
      {
        after: "ks",
        label: "k_r Biot",
        compute: (e) => {
          const t = e.tz ?? 0.15, l = e.Lz ?? 2.5, s = e.ks ?? 2059, c = A * t ** 3 / (12 * (1 - B ** 2)) / (s * l ** 4);
          return c.toFixed(3) + (c < 1 ? " FLEX" : " R\xCDG");
        }
      }
    ],
    computedLabels(e, t) {
      var _a;
      const l = (e.q_adm ?? 20) * w, s = e.ks ?? l * (e.ks_factor ?? 10.5), L = e.tz ?? 0.15, c = e.Lz ?? 2.5, C = A * L ** 3 / (12 * (1 - B ** 2)), x = C / (s * c ** 4), X = (e.useSimple ?? 0) >= 0.5, ee = (e.useD ?? 0) >= 0.5, P = (e.useL ?? 0) >= 0.5, Z = (e.useS ?? 0) >= 0.5, z = (e.useFactors ?? 1) >= 0.5, te = z ? e.fD ?? 1.2 : 1, ae = z ? e.fL ?? 1.6 : 1, D = z ? e.fS ?? 0 : 1, O = ee ? 1 : 0, R = P ? 1 : 0, G = Z ? 1 : 0;
      let y = 0;
      X ? y = e.P_simple ?? 0 : y = O * te * (e.P_D ?? 0) + R * ae * (e.P_L ?? 0) + G * D * (e.P_S ?? 0);
      const m = [];
      X ? m.push("Simple") : (ee && m.push("D"), P && m.push("L"), Z && m.push("S"), m.length || m.push("NINGUNO"));
      const Y = m.join("+") + (z && !X ? " (factor)" : "");
      let V = 0, F = 0;
      const H = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (H && H.size) {
        for (const N of H.values()) for (const h of N) h < V && (V = h), (h < F || F === 0) && (F = h);
        let v = 1 / 0;
        for (const N of H.values()) for (const h of N) Math.abs(h) < v && (v = Math.abs(h));
        F = -v;
      }
      const I = Math.abs(V) / (e.q_adm || 1);
      return {
        "Patrones activos": Y,
        "ks (kN/m\xB3)": s.toFixed(0),
        "D (kN\xB7m)": C.toFixed(1),
        "k_r (Biot)": x.toFixed(3) + (x < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": y.toFixed(2),
        "q_max (tonf/m\xB2)": V.toFixed(2),
        "q_min (tonf/m\xB2)": F.toFixed(2),
        "q/q_adm": I.toFixed(2) + (I > 1 ? " \u26A0" : " \u2713")
      };
    },
    onParamChange(e, t) {
      if (e === "soilType") {
        const l = Math.round(t.soilType ?? 0);
        if (l >= 0) {
          const s = Oe[l];
          t.q_adm = s.q_adm, t.ks_factor = s.ks_factor, t.su = s.su, t.phi = s.phi, t.gamma = s.gamma, t.N_SPT = s.N_SPT, t.E_soil = s.E_soil, t.ks = s.q_adm * w * s.ks_factor;
        }
      }
      if (e === "combo") {
        const l = Math.round(t.combo ?? 0), s = [
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
        l >= 0 && l < s.length && ([t.fD, t.fL, t.fS] = s[l]);
      }
    },
    build(e, t) {
      var _a;
      const { Lz: l, Bz: s, tz: L, bc: c, Hp: C } = e, x = e.q_adm, X = e.ks_factor, ee = x * w, P = e.ks ?? ee * X, Z = (e.useSimple ?? 0) >= 0.5, z = (e.useD ?? 0) >= 0.5, te = (e.useL ?? 0) >= 0.5, ae = (e.useS ?? 0) >= 0.5, D = (e.useFactors ?? 1) >= 0.5, O = D ? e.fD ?? 1.2 : 1, R = D ? e.fL ?? 1.6 : 1, G = D ? e.fS ?? 0 : 1, y = z ? 1 : 0, m = te ? 1 : 0, Y = ae ? 1 : 0, V = O, F = R, H = G;
      let I = 0, v = 0, N = 0;
      Z ? (I = e.P_simple ?? 0, v = e.Mx_simple ?? 0, N = e.My_simple ?? 0) : (I = y * O * (e.P_D ?? 0) + m * R * (e.P_L ?? 0) + Y * G * (e.P_S ?? 0), v = y * O * (e.Mx_D ?? 0) + m * R * (e.Mx_L ?? 0) + Y * G * (e.Mx_S ?? 0), N = y * O * (e.My_D ?? 0) + m * R * (e.My_L ?? 0) + Y * G * (e.My_S ?? 0));
      const h = I * w, He = v * w, je = N * w, K = Math.round(e.nSub), oe = l / 2, se = s / 2, b = [], M = [];
      for (let a = 0; a <= K; a++) b.push(l * a / K), M.push(s * a / K);
      b.includes(oe) || (b.push(oe), b.sort((a, o) => a - o)), M.includes(se) || (M.push(se), M.sort((a, o) => a - o));
      const ie = [], J = [], re = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), De = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), de = (a, o, n) => {
        const _ = `${a.toFixed(4)},${o.toFixed(4)},${n.toFixed(4)}`;
        if (fe.has(_)) return fe.get(_);
        const i = ie.length;
        return ie.push([
          a,
          o,
          n
        ]), fe.set(_, i), i;
      }, u = [];
      for (let a = 0; a < M.length; a++) {
        const o = [];
        for (let n = 0; n < b.length; n++) o.push(de(b[n], M[a], 0));
        u.push(o);
      }
      for (let a = 0; a < M.length - 1; a++) for (let o = 0; o < b.length - 1; o++) {
        const n = J.length;
        J.push([
          u[a][o],
          u[a][o + 1],
          u[a + 1][o + 1],
          u[a + 1][o]
        ]), Le.set(n, L), re.set(n, A), ce.set(n, B), me.set(n, Be);
      }
      const Ue = de(oe, se, 0), Ee = de(oe, se, C), g = J.length;
      J.push([
        Ue,
        Ee
      ]), re.set(g, A), ce.set(g, B), Ne.set(g, dt), ke.set(g, c * c), Pe.set(g, c ** 4 / 12), De.set(g, c ** 4 / 12), ve.set(g, 0.14 * c ** 4), me.set(g, Be), qe.set(g, {
        type: "rect",
        b: c,
        h: c
      });
      const we = /* @__PURE__ */ new Map();
      we.set(Ee, [
        0,
        0,
        -h,
        He,
        je,
        0
      ]);
      const Ce = l / K, ze = s / K, Xe = 0.5, T = [], ne = [];
      for (let a = 0; a < M.length; a++) for (let o = 0; o < b.length; o++) {
        const n = Ce * ze * (o === 0 || o === b.length - 1 ? 0.5 : 1) * (a === 0 || a === M.length - 1 ? 0.5 : 1), _ = P * n, i = P * n * Xe;
        T.push({
          node: u[a][o],
          dof: 0,
          k: i
        }), T.push({
          node: u[a][o],
          dof: 1,
          k: i
        }), T.push({
          node: u[a][o],
          dof: 2,
          k: _
        }), ne.push(u[a][o]);
      }
      const ue = P * Ce * ze * 1e-4, _e = u[0][0];
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
        loads: we
      }, t.elementInputs.val = {
        elasticities: re,
        poissonsRatios: ce,
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
        const a = ct(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), o = t.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        let _ = 0;
        t.elements.rawVal.forEach((E, W) => {
          if (E.length !== 4) return;
          const $ = [];
          for (const he of E) {
            const Q = o == null ? void 0 : o.get(he), U = P * (Q ? Q[2] : 0) / w;
            $.push(U), U < _ && (_ = U);
          }
          n.set(W, $);
        }), a.pressure = n, t.analyzeOutputs.val = a;
        const i = Math.abs(_);
        let p = 1 / 0;
        n.forEach((E) => {
          for (const W of E) {
            const $ = Math.abs(W);
            $ < p && (p = $);
          }
        }), Number.isFinite(p) || (p = 0);
        const j = i / e.q_adm, f = A * L ** 3 / (12 * (1 - B ** 2)) / (P * l ** 4), r = [];
        Z ? r.push("Simple") : (z && r.push(`D${D ? "\xD7" + V : ""}`), te && r.push(`L${D ? "\xD7" + F : ""}`), ae && r.push(`S${D ? "\xD7" + H : ""}`), r.length || r.push("\u26A0 NINGUNO activo"));
        const q = r.join(" + ");
        console.log(`[Zapata Aislada]  Patrones activos: ${q}
  Cargas totales: P=${I.toFixed(2)} tonf, Mx=${v.toFixed(2)} tonf\xB7m, My=${N.toFixed(2)} tonf\xB7m
  Patrones: D(${e.P_D}, ${e.Mx_D}, ${e.My_D}) L(${e.P_L}, ${e.Mx_L}, ${e.My_L}) S(${e.P_S}, ${e.Mx_S}, ${e.My_S})
  q_max (centro) = -${i.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${p.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - p / (i || 1)) * 100).toFixed(1)}%
  q_adm = -${e.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${j.toFixed(2)}` + (j > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${f.toFixed(2)} (${f < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (a) {
        console.error("Solver error zapata aislada:", a);
      }
      const ye = t.deformOutputs.rawVal.deformations;
      let pe = 1e-9;
      for (const a of ne) {
        const o = ye == null ? void 0 : ye.get(a);
        o && Number.isFinite(o[2]) && (pe = Math.max(pe, Math.abs(o[2])));
      }
      const Se = Ge * 12, Ze = new Set(ne), xe = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Fe = (a, o) => {
        const n = a ? o : 0, i = -(pe * Math.max(n, 1) + ut), p = [];
        for (const j of ne) {
          if (!Ze.has(j)) continue;
          const le = t.nodes.rawVal[j];
          if (!le) continue;
          const f = le[0], r = le[1], q = ye == null ? void 0 : ye.get(j), E = (d) => Number.isFinite(d) ? d : 0, W = q ? E(q[0]) : 0, $ = q ? E(q[1]) : 0, he = q ? E(q[2]) : 0, Q = f + W * n, be = r + $ * n, U = 0 + he * n, Ke = U - i, Me = (d) => [
            f + (Q - f) * d,
            r + (be - r) * d,
            i + Ke * d
          ], [Je, We, Qe] = Me(0), [et, tt, at] = Me(0.05), ge = [
            new k(Je, We, Qe),
            new k(et, tt, at)
          ];
          for (let d = 0; d <= Se; d++) {
            const st = 0.05 + 0.9 * (d / Se), [nt, lt, it] = Me(st), Ie = 2 * Math.PI * Ge * (d / Se);
            ge.push(new k(nt + Re * Math.cos(Ie), lt + Re * Math.sin(Ie), it));
          }
          ge.push(new k(Q, be, U)), p.push(new Te(new $e().setFromPoints(ge), _t));
          const S = St, ot = [
            new k(f - S, r - S, i),
            new k(f + S, r - S, i),
            new k(f + S, r + S, i),
            new k(f - S, r + S, i),
            new k(f - S, r - S, i)
          ];
          p.push(new Te(new $e().setFromPoints(ot), pt));
        }
        return p;
      }, Ye = Ae.v;
      xe ? rt.derive(() => {
        if (Ae.v !== Ye) return;
        const a = xe.deformedShape.val, o = xe.deformScale.val;
        t.objects3D.val = Fe(a, o);
      }) : t.objects3D.val = Fe(true, 1);
    },
    runModal(e, t, l) {
      var _a, _b;
      const s = t.nodes.val, L = t.elements.val, c = t.nodeInputs.val, C = t.elementInputs.val;
      if (!(!s.length || !L.length || !((_a = C.densities) == null ? void 0 : _a.size))) try {
        const x = mt(s, L, c, C, 12);
        l.render(x, {
          title: `Zapata Aislada ${e.Lz}\xD7${e.Bz}m t=${e.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${e.bc}m  Hp=${e.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = x.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (x) {
        console.warn("Modal zapata error:", x.message);
      }
    }
  };
});
export {
  __tla,
  Pt as z
};
