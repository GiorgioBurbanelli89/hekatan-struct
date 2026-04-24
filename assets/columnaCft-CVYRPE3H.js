import { d as z, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let V;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function G(e) {
    const l = e / 1e3;
    return 4700 * Math.sqrt(l) * 1e3;
  }
  function k(e) {
    const l = e.shape ?? "circular", s = e.t, u = e.L, o = e.fc, n = e.Fy, r = e.Es ?? 2e8, M = e.rhoSR ?? 0, a = e.K ?? 1;
    let i, d, m, p, F, _, b;
    if (l === "circular") {
      const c = e.D, f = c - 2 * s;
      m = Math.PI * c * c / 4;
      const x = Math.PI * f * f / 4;
      i = m - x, d = x, p = Math.PI / 64 * (Math.pow(c, 4) - Math.pow(f, 4)), F = Math.PI / 64 * Math.pow(f, 4), _ = c / s, b = 0.95;
    } else {
      const c = e.D, f = e.H ?? c;
      m = c * f;
      const x = c - 2 * s, D = f - 2 * s, K = x * D;
      i = m - K, d = K, p = (c * Math.pow(f, 3) - x * Math.pow(D, 3)) / 12, F = x * Math.pow(D, 3) / 12, _ = Math.max(c, f) / s, b = 0.85;
    }
    const C = G(o), I = M * m, E = Math.min(0.7, 0.25 + 3 * (i + I) / m), w = 0.5, P = n * i + b * o * (d + I * r / C), $ = r * p + w * r * 0 + E * C * F, N = r * i + r * I + C * d;
    let A, h, t;
    l === "circular" ? (A = 0.15 * r / n, h = 0.19 * r / n) : (A = 2.26 * Math.sqrt(r / n), h = 3 * Math.sqrt(r / n)), _ <= A ? t = "compact" : _ <= h ? t = "noncompact" : t = "slender";
    const S = a * u, g = Math.PI * Math.PI * $ / (S * S), H = P / g;
    let v;
    H <= 2.25 ? v = P * Math.pow(0.658, H) : v = 0.877 * g;
    const q = n * i + M * n * m;
    let y;
    if (l === "circular") {
      const c = e.D, f = c - 2 * s;
      y = (Math.pow(c, 3) - Math.pow(f, 3)) / 6;
    } else {
      const c = e.D, f = e.H ?? c, x = c - 2 * s, D = f - 2 * s;
      y = (c * f * f - x * D * D) / 4;
    }
    const B = n * y + 0.85 * o * F / (e.D / 2);
    let L;
    if (l === "circular") L = 2 * s * (e.D - s);
    else {
      const c = e.H ?? e.D;
      L = 2 * s * (c - s);
    }
    const O = 0.6 * n * L;
    return {
      As: i,
      Ac: d,
      Ag: m,
      Is: p,
      Ic: F,
      Ec: C,
      Pno: P,
      EI_eff: $,
      EA_eff: N,
      C1: E,
      C2: b,
      C3: w,
      slenderness: t,
      slendernessRatio: _,
      lambda_p: A,
      lambda_r: h,
      Pn: v,
      Pnt: q,
      Mno: B,
      Vn: O,
      lambda_global: H,
      Pe: g
    };
  }
  function T(e, l, s) {
    const u = k(e), o = 0.75, n = 0.9, r = o * u.Pn, M = n * u.Mno, a = l / r;
    let i, d;
    return a >= 0.2 ? (i = a + 8 / 9 * (s / M), d = "Eq. H1-1a (P/Pc \u2265 0.2)") : (i = a / 2 + s / M, d = "Eq. H1-1b (P/Pc < 0.2)"), {
      ratio: i,
      passes: i <= 1,
      Pc: r,
      Mc: M,
      governing: d
    };
  }
  V = {
    id: "columna-cft",
    name: "Columna CFT (AISC 360-22 \xA7I2)",
    category: "Columnas",
    hasModal: false,
    params: {
      shape: {
        default: 0,
        label: "Forma",
        options: {
          "Circular HSS": 0,
          "Rectangular HSS": 1
        }
      },
      Dout: {
        default: 0.3,
        min: 0.1,
        max: 0.8,
        step: 0.01,
        label: "D exterior (m)"
      },
      Hrect: {
        default: 0.3,
        min: 0.1,
        max: 0.8,
        step: 0.01,
        label: "H alto rect (m)",
        folder: "Solo rectangular"
      },
      t_tube: {
        default: 0.01,
        min: 4e-3,
        max: 0.025,
        step: 1e-3,
        label: "t tubo (m)"
      },
      L_col: {
        default: 3,
        min: 1.5,
        max: 8,
        step: 0.1,
        label: "L columna (m)"
      },
      K_eff: {
        default: 1,
        min: 0.5,
        max: 2,
        step: 0.1,
        label: "K efectivo (AISC Table C-A-7.1)"
      },
      fc: {
        default: 28e3,
        min: 14e3,
        max: 7e4,
        step: 1e3,
        label: "f'c (kN/m\xB2)",
        folder: "Materiales"
      },
      Fy: {
        default: 345e3,
        min: 25e4,
        max: 45e4,
        step: 5e3,
        label: "Fy acero (kN/m\xB2)",
        folder: "Materiales"
      },
      Pu: {
        default: 2e3,
        min: 0,
        max: 2e4,
        step: 50,
        label: "Pu compresi\xF3n (kN)",
        folder: "Demanda LRFD",
        unitType: "force"
      },
      Mu: {
        default: 150,
        min: 0,
        max: 2e3,
        step: 10,
        label: "Mu flector (kN\xB7m)",
        folder: "Demanda LRFD",
        unitType: "moment"
      }
    },
    defaultShellResult: "none",
    availableShellResults: [],
    build(e, l) {
      const u = e.L_col, o = [];
      for (let t = 0; t <= 10; t++) o.push([
        0,
        0,
        t / 10 * u
      ]);
      const n = [];
      for (let t = 0; t < 10; t++) n.push([
        t,
        t + 1
      ]);
      const r = e.shape < 0.5 ? "circular" : "rectangular", M = {
        shape: r,
        D: e.Dout,
        H: e.Hrect,
        t: e.t_tube,
        L: e.L_col,
        fc: e.fc,
        Fy: e.Fy,
        K: e.K_eff
      }, a = k(M), i = /* @__PURE__ */ new Map();
      i.set(0, [
        true,
        true,
        true,
        true,
        true,
        true
      ]);
      const d = /* @__PURE__ */ new Map();
      d.set(10, [
        0,
        0,
        -e.Pu,
        e.Mu,
        0,
        0
      ]), l.nodes.val = o, l.elements.val = n, l.nodeInputs.val = {
        supports: i,
        loads: d
      };
      const m = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), P = 2e8, R = a.EA_eff / P, $ = a.EI_eff / P, N = 2 * $, A = P / (2 * (1 + 0.3));
      for (let t = 0; t < n.length; t++) m.set(t, R), p.set(t, $), F.set(t, $), _.set(t, N), b.set(t, P), C.set(t, A), I.set(t, 24), E.set(t, e.t_tube), w.set(t, 0.2);
      l.elementInputs.val = {
        areas: m,
        momentsOfInertiaY: F,
        momentsOfInertiaZ: p,
        torsionalConstants: _,
        elasticities: b,
        shearModuli: C,
        densities: I,
        thicknesses: E,
        poissonsRatios: w
      };
      try {
        l.deformOutputs.val = z(o, n, {
          supports: i,
          loads: d
        }, l.elementInputs.val);
      } catch (t) {
        console.error("CFT deform error:", t);
      }
      l.objects3D.val = [];
      const h = T(M, e.Pu, e.Mu);
      console.log(`[CFT ${r}] D=${(e.Dout * 1e3).toFixed(0)}mm t=${(e.t_tube * 1e3).toFixed(1)}mm f'c=${(e.fc / 1e3).toFixed(0)}MPa Fy=${(e.Fy / 1e3).toFixed(0)}MPa
  Pno=${a.Pno.toFixed(0)} kN \xB7 Pn=${a.Pn.toFixed(0)} kN \xB7 Pnt=${a.Pnt.toFixed(0)} kN
  EI_eff=${(a.EI_eff / 1e6).toFixed(1)} MN\xB7m\xB2 \xB7 EA_eff=${(a.EA_eff / 1e6).toFixed(1)} MN
  C1=${a.C1.toFixed(3)} \xB7 C2=${a.C2} \xB7 C3=${a.C3} \xB7 slenderness=${a.slenderness} (ratio ${a.slendernessRatio.toFixed(1)})
  Demand/Capacity ratio = ${h.ratio.toFixed(3)} ${h.passes ? "\u2713 OK" : "\u2717 FAIL"} (${h.governing})`);
    },
    computedLabels(e, l) {
      const s = e.shape < 0.5 ? "circular" : "rectangular", u = {
        shape: s,
        D: e.Dout,
        H: e.Hrect,
        t: e.t_tube,
        L: e.L_col,
        fc: e.fc,
        Fy: e.Fy,
        K: e.K_eff
      }, o = k(u), n = T(u, e.Pu, e.Mu);
      return {
        "\u2500\u2500 Geometr\xEDa CFT \u2500\u2500": "",
        Forma: s,
        "As acero": `${(o.As * 1e4).toFixed(1)} cm\xB2`,
        "Ac concreto": `${(o.Ac * 1e4).toFixed(0)} cm\xB2`,
        "As/Ag": `${(o.As / o.Ag * 100).toFixed(1)} %`,
        "\u2500\u2500 AISC 360-22 \xA7I2.1b \u2500\u2500": "",
        "Pno (compresi\xF3n nominal)": `${o.Pno.toFixed(0)} kN`,
        "Pn (con pandeo global)": `${o.Pn.toFixed(0)} kN`,
        "Pnt (tracci\xF3n)": `${o.Pnt.toFixed(0)} kN`,
        "Mno (flexi\xF3n)": `${o.Mno.toFixed(1)} kN\xB7m`,
        EI_eff: `${(o.EI_eff / 1e6).toFixed(1)} MN\xB7m\xB2`,
        EA_eff: `${(o.EA_eff / 1e6).toFixed(1)} MN`,
        "Factor C1 (concreto)": o.C1.toFixed(3),
        "Factor C2 (confinamiento)": o.C2.toFixed(2),
        "\u2500\u2500 Esbeltez (\xA7I1.4) \u2500\u2500": "",
        [`${s === "circular" ? "D/t" : "b/t"}`]: o.slendernessRatio.toFixed(1),
        "\u03BBp (compact limit)": o.lambda_p.toFixed(1),
        Clasificaci\u00F3n: o.slenderness.toUpperCase(),
        "\u2500\u2500 Verificaci\xF3n \xA7H1.1 \u2500\u2500": "",
        "Pu / Pc (Pc = \u03C6Pn)": `${(e.Pu / n.Pc).toFixed(3)}`,
        "Mu / Mc (Mc = \u03C6Mno)": `${(e.Mu / n.Mc).toFixed(3)}`,
        "Ratio D/C": `${n.ratio.toFixed(3)} ${n.passes ? "\u2713" : "\u2717 FAIL"}`,
        "Ecuaci\xF3n gobernante": n.governing
      };
    }
  };
});
export {
  __tla,
  V as c
};
