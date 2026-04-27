import { L as Yt, V as y, a as Vt, B as Ht } from "./Text-QYN3x2IP.js";
import { v as de } from "./theme-2eEBQPmF.js";
import { a as ue } from "./analyze-BydHtRcI.js";
import { m as _e, d as xe, __tla as __tla_0 } from "./didacticCpp-B5f-GyHC.js";
import { a as Zt } from "./exampleVersion-D1A_5i59.js";
let qe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const B = 25e6, Y = 0.2, pe = B / (2 * (1 + Y)), Xt = 24, P = 9.80665, Wt = [
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
  function jt(t) {
    const e = Math.round(t.ks_method ?? 0);
    if (e === 3) return t.ks ?? 2059;
    if (e === 0) return (t.q_adm ?? 20) * P * (t.ks_factor ?? 10.5);
    if (e === 1) {
      const c = t.E_soil ?? 25e3, n = t.nu_soil ?? 0.3, l = Math.min(t.Lz ?? 1.5, t.Bz ?? 1.5), s = t.tz ?? 0.3, f = B, m = s ** 3 / 12, I = c * l ** 4 / (f * m);
      return 0.65 * Math.pow(I, 1 / 12) * c / (l * (1 - n ** 2));
    }
    if (e === 2) {
      const c = (t.q_plate ?? 5) * P, l = (t.delta_plate ?? 5) / 1e3, s = c / l, f = t.B_plate ?? 0.3, m = Math.min(t.Lz ?? 1.5, t.Bz ?? 1.5);
      return (t.soilGranular ?? 1) >= 0.5 ? s * Math.pow((m + f) / (2 * m), 2) : s * (f / m);
    }
    return 2059;
  }
  let he, Me, Ut, be, Se, ke;
  he = 0.2;
  Me = 0.035;
  Ut = 8;
  be = new Yt({
    color: 16711731,
    linewidth: 2
  });
  Se = new Yt({
    color: 52224,
    linewidth: 2
  });
  ke = 0.04;
  qe = {
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
        options: Object.fromEntries(Wt.map((t, e) => [
          t.name,
          e
        ]))
      },
      q_adm: {
        default: 20,
        min: 1,
        max: 200,
        step: 1,
        label: "q_adm (tonf/m\xB2)"
      },
      ks_method: {
        default: 0,
        label: "M\xE9todo ks",
        options: {
          "Bowles 1996 (q_adm \xD7 factor)": 0,
          "Vesic 1973 (E_soil)": 1,
          "Placa de carga (PLT)": 2,
          "Manual (ks directo)": 3
        }
      },
      ks_factor: {
        default: 10.5,
        min: 5,
        max: 200,
        step: 0.5,
        label: "ks_factor Bowles (referencia)"
      },
      nu_soil: {
        default: 0.3,
        min: 0,
        max: 0.5,
        step: 0.01,
        label: "\u03BD_soil Poisson"
      },
      q_plate: {
        default: 5,
        min: 0.5,
        max: 100,
        step: 0.5,
        label: "q_test placa (tonf/m\xB2)"
      },
      delta_plate: {
        default: 5,
        min: 0.1,
        max: 50,
        step: 0.1,
        label: "\u03B4_test placa (mm)"
      },
      B_plate: {
        default: 0.3,
        min: 0.1,
        max: 1,
        step: 0.05,
        label: "B_placa (m)"
      },
      soilGranular: {
        default: 1,
        boolean: true,
        label: "Suelo granular (Terzaghi)"
      },
      ks: {
        default: 2059,
        min: 100,
        max: 2e5,
        step: 10,
        label: "ks (kN/m/m\xB2)"
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
        compute: (t) => ((t.q_adm ?? 20) * P * (t.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "nu_soil",
        label: "ks Vesic ref. (kN/m\xB3)",
        compute: (t) => {
          const e = t.E_soil ?? 25e3, c = t.nu_soil ?? 0.3, n = Math.min(t.Lz ?? 1.5, t.Bz ?? 1.5), s = (t.tz ?? 0.3) ** 3 / 12, f = e * n ** 4 / (B * s);
          return (0.65 * Math.pow(f, 1 / 12) * e / (n * (1 - c ** 2))).toFixed(0);
        }
      },
      {
        after: "B_plate",
        label: "ks Placa ref. (kN/m\xB3)",
        compute: (t) => {
          const e = (t.q_plate ?? 5) * P, c = (t.delta_plate ?? 5) / 1e3, n = e / c, l = t.B_plate ?? 0.3, s = Math.min(t.Lz ?? 1.5, t.Bz ?? 1.5);
          return ((t.soilGranular ?? 1) >= 0.5 ? n * Math.pow((s + l) / (2 * s), 2) : n * (l / s)).toFixed(0);
        }
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (t) => {
          const e = t.tz ?? 0.15;
          return (B * e ** 3 / (12 * (1 - Y ** 2))).toFixed(1);
        }
      },
      {
        after: "ks",
        label: "\u21B3 ks SAFE (tonf/m\xB3)",
        compute: (t) => ((t.ks ?? 2059) / P).toFixed(2)
      },
      {
        after: "ks",
        label: "k_r Biot",
        compute: (t) => {
          const e = t.tz ?? 0.15, c = t.Lz ?? 2.5, n = t.ks ?? 2059, s = B * e ** 3 / (12 * (1 - Y ** 2)) / (n * c ** 4);
          return s.toFixed(3) + (s < 1 ? " FLEX" : " R\xCDG");
        }
      }
    ],
    computedLabels(t, e) {
      var _a, _b;
      const c = (t.q_adm ?? 20) * P, n = t.ks ?? c * (t.ks_factor ?? 10.5), l = t.tz ?? 0.15, s = t.Lz ?? 2.5, f = B * l ** 3 / (12 * (1 - Y ** 2)), m = f / (n * s ** 4), I = (t.useSimple ?? 0) >= 0.5, nt = (t.useD ?? 0) >= 0.5, T = (t.useL ?? 0) >= 0.5, lt = (t.useS ?? 0) >= 0.5, G = (t.useFactors ?? 1) >= 0.5, bt = G ? t.fD ?? 1.2 : 1, St = G ? t.fL ?? 1.6 : 1, A = G ? t.fS ?? 0 : 1, K = nt ? 1 : 0, J = T ? 1 : 0, Q = lt ? 1 : 0;
      let $ = 0;
      I ? $ = t.P_simple ?? 0 : $ = K * bt * (t.P_D ?? 0) + J * St * (t.P_L ?? 0) + Q * A * (t.P_S ?? 0);
      const S = [];
      I ? S.push("Simple") : (nt && S.push("D"), T && S.push("L"), lt && S.push("S"), S.length || S.push("NINGUNO"));
      const it = S.join("+") + (G && !I ? " (factor)" : "");
      let tt = 0, V = 0;
      const et = (_a = e.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (et && et.size) {
        for (const r of et.values()) for (const p of r) p < tt && (tt = p), (p < V || V === 0) && (V = p);
        let M = 1 / 0;
        for (const r of et.values()) for (const p of r) Math.abs(p) < M && (M = Math.abs(p));
        V = -M;
      }
      const H = Math.abs(tt) / (t.q_adm || 1), q = t.Bz ?? s, kt = s * q * l * 24 / 9.80665, rt = $ + kt, w = (_b = e.deformOutputs.rawVal) == null ? void 0 : _b.deformations;
      let E = 0, F = 0, h = 0, x = 0, ot = 0;
      if (w && w.size) {
        const M = e.nodes.rawVal, r = s / 2, p = q / 2;
        let C = 1 / 0;
        for (const [k, Pt] of w) {
          const j = M[k];
          if (!j || Math.abs(j[2]) > 1e-6) continue;
          const v = Pt[2];
          if (!Number.isFinite(v)) continue;
          v < E && (E = v), (v > F || x === 0) && (F = v), x++, ot += Math.abs(v);
          const vt = j[0] - r, N = j[1] - p, U = Math.sqrt(vt * vt + N * N);
          U < C && (C = U, h = v);
        }
      }
      const Z = s * q / Math.max(x, 1), mt = n * Z * ot, ft = E * 1e3, gt = F * 1e3, Lt = h * 1e3, dt = (F - E) * 1e3, ut = mt / 9.80665, X = e.analyzeOutputs.rawVal;
      let _t = 0, at = 0, xt = 0;
      const W = (M) => {
        if (!M) return 0;
        let r = 0;
        for (const p of M.values()) for (const C of p) Number.isFinite(C) && Math.abs(C) > r && (r = Math.abs(C));
        return r;
      };
      return X && (_t = W(X.bendingXX), at = W(X.bendingYY), xt = W(X.vonMises)), {
        "Patrones activos": it,
        "ks (kN/m\xB3)": n.toFixed(0),
        "D (kN\xB7m)": f.toFixed(1),
        "k_r (Biot)": m.toFixed(3) + (m < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": $.toFixed(2),
        "Peso propio losa (tonf)": kt.toFixed(3),
        "P + SW (tonf)": rt.toFixed(2) + " \u2190 match con SAFE",
        "q_max (tonf/m\xB2)": tt.toFixed(2) + " (compresi\xF3n pico)",
        "q_min (tonf/m\xB2)": V.toFixed(2) + " (compresi\xF3n menor)",
        "q/q_adm": H.toFixed(2) + (H > 1 ? " \u26A0 EXCEDE" : " \u2713 OK"),
        "\u0394z max losa (mm)": ft.toFixed(2) + " \u2193 (m\xE1s negativo)",
        "\u0394z centro losa (mm)": Lt.toFixed(2),
        "\u0394z m\xEDn losa (mm)": gt.toFixed(2) + " (esquina/borde)",
        "Asiento diferencial (mm)": dt.toFixed(2) + (dt / Math.max(s, q) / 1e3 > 1 / 300 ? " \u26A0 excede L/300" : " \u2713 < L/300"),
        "\u03A3Reacc Z (tonf) \u2248": ut.toFixed(2) + (Math.abs(ut - rt) / Math.max(rt, 1) < 0.1 ? " \u2713 \u2248 P+SW" : " \u26A0 verificar"),
        "|Mxx| max (kN\xB7m/m)": _t.toFixed(2),
        "|Myy| max (kN\xB7m/m)": at.toFixed(2),
        "von Mises max (kPa)": xt.toFixed(1)
      };
    },
    onParamChange(t, e) {
      if (t === "soilType") {
        const n = Math.round(e.soilType ?? 0);
        if (n >= 0) {
          const l = Wt[n];
          e.q_adm = l.q_adm, e.ks_factor = l.ks_factor, e.su = l.su, e.phi = l.phi, e.gamma = l.gamma, e.N_SPT = l.N_SPT, e.E_soil = l.E_soil, e.ks = jt(e);
        }
      }
      if ((/* @__PURE__ */ new Set([
        "ks_method",
        "q_adm",
        "ks_factor",
        "E_soil",
        "nu_soil",
        "Lz",
        "tz",
        "q_plate",
        "delta_plate",
        "B_plate",
        "soilGranular"
      ])).has(t) && Math.round(e.ks_method ?? 0) !== 3 && (e.ks = jt(e)), t === "combo") {
        const n = Math.round(e.combo ?? 0), l = [
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
        n >= 0 && n < l.length && ([e.fD, e.fL, e.fS] = l[n]);
      }
    },
    build(t, e) {
      var _a;
      const { Lz: c, Bz: n, tz: l, bc: s, Hp: f } = t, m = t.q_adm, I = t.ks_factor, nt = m * P, T = t.ks ?? nt * I, lt = (t.useSimple ?? 0) >= 0.5, G = (t.useD ?? 0) >= 0.5, bt = (t.useL ?? 0) >= 0.5, St = (t.useS ?? 0) >= 0.5, A = (t.useFactors ?? 1) >= 0.5, K = A ? t.fD ?? 1.2 : 1, J = A ? t.fL ?? 1.6 : 1, Q = A ? t.fS ?? 0 : 1, $ = G ? 1 : 0, S = bt ? 1 : 0, it = St ? 1 : 0, tt = K, V = J, et = Q;
      let H = 0, q = 0, ct = 0;
      lt ? (H = t.P_simple ?? 0, q = t.Mx_simple ?? 0, ct = t.My_simple ?? 0) : (H = $ * K * (t.P_D ?? 0) + S * J * (t.P_L ?? 0) + it * Q * (t.P_S ?? 0), q = $ * K * (t.Mx_D ?? 0) + S * J * (t.Mx_L ?? 0) + it * Q * (t.Mx_S ?? 0), ct = $ * K * (t.My_D ?? 0) + S * J * (t.My_L ?? 0) + it * Q * (t.My_S ?? 0));
      const Bt = H * P, kt = q * P, rt = ct * P, w = Math.round(t.nSub), E = c / 2, F = n / 2, h = [], x = [];
      for (let o = 0; o <= w; o++) h.push(c * o / w), x.push(n * o / w);
      h.includes(E) || (h.push(E), h.sort((o, a) => o - a)), x.includes(F) || (x.push(F), x.sort((o, a) => o - a));
      const ot = [], Z = [], mt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), Lt = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), M = (o, a, i) => {
        const d = `${o.toFixed(4)},${a.toFixed(4)},${i.toFixed(4)}`;
        if (W.has(d)) return W.get(d);
        const D = ot.length;
        return ot.push([
          o,
          a,
          i
        ]), W.set(d, D), D;
      }, r = [];
      for (let o = 0; o < x.length; o++) {
        const a = [];
        for (let i = 0; i < h.length; i++) a.push(M(h[i], x[o], 0));
        r.push(a);
      }
      for (let o = 0; o < x.length - 1; o++) for (let a = 0; a < h.length - 1; a++) {
        const i = Z.length;
        Z.push([
          r[o][a],
          r[o][a + 1],
          r[o + 1][a + 1],
          r[o + 1][a]
        ]), Lt.set(i, l), mt.set(i, B), ft.set(i, Y), at.set(i, Xt);
      }
      const p = M(E, F, 0), C = M(E, F, f), k = Z.length;
      Z.push([
        p,
        C
      ]), mt.set(k, B), ft.set(k, Y), _t.set(k, pe), gt.set(k, s * s), dt.set(k, s ** 4 / 12), ut.set(k, s ** 4 / 12), X.set(k, 0.14 * s ** 4), at.set(k, Xt), xt.set(k, {
        type: "rect",
        b: s,
        h: s
      });
      const Pt = /* @__PURE__ */ new Map();
      Pt.set(C, [
        0,
        0,
        -Bt,
        kt,
        rt,
        0
      ]);
      const j = c / w, v = n / w, vt = 0.5, N = [], U = [];
      for (let o = 0; o < x.length; o++) for (let a = 0; a < h.length; a++) {
        const i = j * v * (a === 0 || a === h.length - 1 ? 0.5 : 1) * (o === 0 || o === x.length - 1 ? 0.5 : 1), d = T * i, D = T * i * vt;
        N.push({
          node: r[o][a],
          dof: 0,
          k: D
        }), N.push({
          node: r[o][a],
          dof: 1,
          k: D
        }), N.push({
          node: r[o][a],
          dof: 2,
          k: d
        }), U.push(r[o][a]);
      }
      const zt = T * j * v * 1e-4, qt = r[0][0];
      N.push({
        node: qt,
        dof: 3,
        k: zt
      }), N.push({
        node: qt,
        dof: 4,
        k: zt
      }), N.push({
        node: qt,
        dof: 5,
        k: zt
      }), e.nodes.val = ot.map((o) => [
        o[0],
        o[1],
        o[2]
      ]), e.elements.val = Z, e.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: Pt
      }, e.elementInputs.val = {
        elasticities: mt,
        poissonsRatios: ft,
        areas: gt,
        momentsOfInertiaZ: dt,
        momentsOfInertiaY: ut,
        torsionalConstants: X,
        shearModuli: _t,
        thicknesses: Lt,
        densities: at,
        sectionShapes: xt
      };
      try {
        e.deformOutputs.val = xe(e.nodes.val, e.elements.val, e.nodeInputs.val, e.elementInputs.val, N);
        const o = ue(e.nodes.val, e.elements.val, e.elementInputs.val, e.deformOutputs.val), a = e.deformOutputs.rawVal.deformations, i = /* @__PURE__ */ new Map();
        let d = 0;
        e.elements.rawVal.forEach((O, b) => {
          if (O.length !== 4) return;
          const _ = [];
          for (const R of O) {
            const st = a == null ? void 0 : a.get(R), Mt = T * (st ? st[2] : 0) / P;
            _.push(Mt), Mt < d && (d = Mt);
          }
          i.set(b, _);
        }), o.pressure = i, e.analyzeOutputs.val = o;
        const D = Math.abs(d);
        let u = 1 / 0;
        i.forEach((O) => {
          for (const b of O) {
            const _ = Math.abs(b);
            _ < u && (u = _);
          }
        }), Number.isFinite(u) || (u = 0);
        const pt = D / t.q_adm, Dt = B * l ** 3 / (12 * (1 - Y ** 2)) / (T * c ** 4), g = [];
        lt ? g.push("Simple") : (G && g.push(`D${A ? "\xD7" + tt : ""}`), bt && g.push(`L${A ? "\xD7" + V : ""}`), St && g.push(`S${A ? "\xD7" + et : ""}`), g.length || g.push("\u26A0 NINGUNO activo"));
        const ht = g.join(" + ");
        console.log(`[Zapata Aislada]  Patrones activos: ${ht}
  Cargas totales: P=${H.toFixed(2)} tonf, Mx=${q.toFixed(2)} tonf\xB7m, My=${ct.toFixed(2)} tonf\xB7m
  Patrones: D(${t.P_D}, ${t.Mx_D}, ${t.My_D}) L(${t.P_L}, ${t.Mx_L}, ${t.My_L}) S(${t.P_S}, ${t.Mx_S}, ${t.My_S})
  q_max (centro) = -${D.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${u.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - u / (D || 1)) * 100).toFixed(1)}%
  q_adm = -${t.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${pt.toFixed(2)}` + (pt > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${Dt.toFixed(2)} (${Dt < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (o) {
        console.error("Solver error zapata aislada:", o);
      }
      const It = e.deformOutputs.rawVal.deformations;
      let wt = 1e-9;
      for (const o of U) {
        const a = It == null ? void 0 : It.get(o);
        a && Number.isFinite(a[2]) && (wt = Math.max(wt, Math.abs(a[2])));
      }
      const Et = Ut * 12, Kt = new Set(U), Nt = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Tt = (o, a, i = 1) => {
        const d = o ? a : 0, u = -(wt * Math.max(d, 1) + he), pt = i > 0 ? i : i < 0 ? -1 / i : 1, Ft = Me * pt, Dt = ke * pt, g = [];
        for (const ht of U) {
          if (!Kt.has(ht)) continue;
          const O = e.nodes.rawVal[ht];
          if (!O) continue;
          const b = O[0], _ = O[1], R = It == null ? void 0 : It.get(ht), st = (L) => Number.isFinite(L) ? L : 0, At = R ? st(R[0]) : 0, Mt = R ? st(R[1]) : 0, Qt = R ? st(R[2]) : 0, $t = b + At * d, Ot = _ + Mt * d, Rt = 0 + Qt * d, te = Rt - u, Ct = (L) => [
            b + ($t - b) * L,
            _ + (Ot - _) * L,
            u + te * L
          ], [ee, oe, ae] = Ct(0), [se, ne, le] = Ct(0.05), yt = [
            new y(ee, oe, ae),
            new y(se, ne, le)
          ];
          for (let L = 0; L <= Et; L++) {
            const ce = 0.05 + 0.9 * (L / Et), [re, me, fe] = Ct(ce), Gt = 2 * Math.PI * Ut * (L / Et);
            yt.push(new y(re + Ft * Math.cos(Gt), me + Ft * Math.sin(Gt), fe));
          }
          yt.push(new y($t, Ot, Rt)), g.push(new Vt(new Ht().setFromPoints(yt), be));
          const z = Dt, ie = [
            new y(b - z, _ - z, u),
            new y(b + z, _ - z, u),
            new y(b + z, _ + z, u),
            new y(b - z, _ + z, u),
            new y(b - z, _ - z, u)
          ];
          g.push(new Vt(new Ht().setFromPoints(ie), Se));
        }
        return g;
      }, Jt = Zt.v;
      Nt ? de.derive(() => {
        if (Zt.v !== Jt) return;
        const o = Nt.deformedShape.val, a = Nt.deformScale.val, i = Nt.displayScale.val;
        e.objects3D.val = Tt(o, a, i);
      }) : e.objects3D.val = Tt(true, 1);
    },
    runModal(t, e, c) {
      var _a, _b;
      const n = e.nodes.val, l = e.elements.val, s = e.nodeInputs.val, f = e.elementInputs.val;
      if (!(!n.length || !l.length || !((_a = f.densities) == null ? void 0 : _a.size))) try {
        const m = _e(n, l, s, f, 12);
        c.render(m, {
          title: `Zapata Aislada ${t.Lz}\xD7${t.Bz}m t=${t.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${t.bc}m  Hp=${t.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = m.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (m) {
        console.warn("Modal zapata error:", m.message);
      }
    }
  };
});
export {
  __tla,
  qe as z
};
