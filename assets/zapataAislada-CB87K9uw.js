import { a as Te, V as y, L as Ye, B as qe, h as Ke } from "./Text-CBH-tcJP.js";
import { v as Ue } from "./theme-CzzIlc4y.js";
import { a as Je } from "./analyze-ClLKGn9k.js";
import { m as We, d as Qe, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let pt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let H, j, et, we, A, ve, tt, Pe, Ie, nt, ot, at;
  H = 25e6;
  j = 0.2;
  et = H / (2 * (1 + j));
  we = 24;
  A = 9.80665;
  ve = [
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
  tt = 0.2;
  Pe = 0.035;
  Ie = 8;
  nt = new Te({
    color: 16711731,
    linewidth: 2
  });
  ot = new Te({
    color: 52224,
    linewidth: 2
  });
  at = 0.04;
  pt = {
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
        default: 1.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Lz (m)"
      },
      Bz: {
        default: 1.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Bz (m)"
      },
      tz: {
        default: 0.3,
        min: 0.2,
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
        options: Object.fromEntries(ve.map((s, n) => [
          s.name,
          n
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
      P: {
        default: 20,
        min: 1,
        max: 400,
        step: 1,
        label: "P axial (tonf)"
      },
      Mx: {
        default: 0,
        min: -1,
        max: 1,
        step: 0.05,
        label: "Mx (tonf\xB7m)"
      },
      My: {
        default: 0,
        min: -1,
        max: 1,
        step: 0.05,
        label: "My (tonf\xB7m)"
      },
      nSub: {
        default: 10,
        min: 3,
        max: 16,
        step: 1,
        label: "n subdivisiones"
      }
    },
    onParamChange(s, n) {
      if (s === "soilType") {
        const u = Math.round(n.soilType ?? 0);
        if (u > 0) {
          const c = ve[u];
          n.q_adm = c.q_adm, n.ks_factor = c.ks_factor, n.su = c.su, n.phi = c.phi, n.gamma = c.gamma, n.N_SPT = c.N_SPT, n.E_soil = c.E_soil;
        }
      }
    },
    build(s, n) {
      var _a;
      const { Lz: u, Bz: c, tz: q, bc: x, Hp: w } = s, k = s.q_adm, ze = s.ks_factor, L = k * A * ze, ye = s.P * A, Ae = s.Mx * A, Le = s.My * A, v = Math.round(s.nSub), B = u / 2, O = c / 2, f = [], p = [];
      for (let e = 0; e <= v; e++) f.push(u * e / v), p.push(c * e / v);
      f.includes(B) || (f.push(B), f.sort((e, t) => e - t)), p.includes(O) || (p.push(O), p.sort((e, t) => e - t));
      const V = [], P = [], D = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), K = (e, t, o) => {
        const S = `${e.toFixed(4)},${t.toFixed(4)},${o.toFixed(4)}`;
        if (Y.has(S)) return Y.get(S);
        const l = V.length;
        return V.push([
          e,
          t,
          o
        ]), Y.set(S, l), l;
      }, r = [];
      for (let e = 0; e < p.length; e++) {
        const t = [];
        for (let o = 0; o < f.length; o++) t.push(K(f[o], p[e], 0));
        r.push(t);
      }
      for (let e = 0; e < p.length - 1; e++) for (let t = 0; t < f.length - 1; t++) {
        const o = P.length;
        P.push([
          r[e][t],
          r[e][t + 1],
          r[e + 1][t + 1],
          r[e + 1][t]
        ]), le.set(o, q), D.set(o, H), X.set(o, j), Z.set(o, we);
      }
      const Be = K(B, O, 0), fe = K(B, O, w), g = P.length;
      P.push([
        Be,
        fe
      ]), D.set(g, H), X.set(g, j), de.set(g, et), se.set(g, x * x), ie.set(g, x ** 4 / 12), ce.set(g, x ** 4 / 12), me.set(g, 0.14 * x ** 4), Z.set(g, we), re.set(g, {
        type: "rect",
        b: x,
        h: x
      });
      const pe = /* @__PURE__ */ new Map();
      pe.set(fe, [
        0,
        0,
        -ye,
        Ae,
        Le,
        0
      ]);
      const ue = u / v, _e = c / v, M = [], U = [];
      for (let e = 0; e < p.length; e++) for (let t = 0; t < f.length; t++) {
        const o = ue * _e * (t === 0 || t === f.length - 1 ? 0.5 : 1) * (e === 0 || e === p.length - 1 ? 0.5 : 1);
        M.push({
          node: r[e][t],
          dof: 2,
          k: L * o
        }), U.push(r[e][t]);
      }
      const G = L * ue * _e * 0.01, J = G * 0.01, I = r[0][0];
      M.push({
        node: I,
        dof: 0,
        k: G
      }), M.push({
        node: I,
        dof: 1,
        k: G
      }), M.push({
        node: I,
        dof: 3,
        k: J
      }), M.push({
        node: I,
        dof: 4,
        k: J
      }), M.push({
        node: I,
        dof: 5,
        k: J
      }), M.push({
        node: r[p.length - 1][f.length - 1],
        dof: 1,
        k: G
      }), n.nodes.val = V.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), n.elements.val = P, n.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: pe
      }, n.elementInputs.val = {
        elasticities: D,
        poissonsRatios: X,
        areas: se,
        momentsOfInertiaZ: ie,
        momentsOfInertiaY: ce,
        torsionalConstants: me,
        shearModuli: de,
        thicknesses: le,
        densities: Z,
        sectionShapes: re
      };
      try {
        n.deformOutputs.val = Qe(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, M);
        const e = Je(n.nodes.val, n.elements.val, n.elementInputs.val, n.deformOutputs.val), t = n.deformOutputs.rawVal.deformations, o = /* @__PURE__ */ new Map();
        let S = 0;
        n.elements.rawVal.forEach((i, h) => {
          if (i.length !== 4) return;
          const b = [];
          for (const ee of i) {
            const F = t == null ? void 0 : t.get(ee), N = L * (F ? F[2] : 0) / A;
            b.push(N), N < S && (S = N);
          }
          o.set(h, b);
        }), e.pressure = o, n.analyzeOutputs.val = e;
        const l = Math.abs(S);
        let _ = 1 / 0;
        o.forEach((i) => {
          for (const h of i) {
            const b = Math.abs(h);
            b < _ && (_ = b);
          }
        }), Number.isFinite(_) || (_ = 0);
        const E = l / s.q_adm, m = H * q ** 3 / (12 * (1 - j ** 2)) / (L * u ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${l.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${_.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - _ / (l || 1)) * 100).toFixed(1)}%
  q_adm = -${s.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${E.toFixed(2)}` + (E > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${m.toFixed(2)} (${m < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (e) {
        console.error("Solver error zapata aislada:", e);
      }
      const he = n.deformOutputs.rawVal.deformations;
      let R = 1e-9;
      for (const e of U) {
        const t = he == null ? void 0 : he.get(e);
        t && (R = Math.max(R, Math.abs(t[2])));
      }
      const xe = 0.07 * Math.sqrt(u ** 2 + c ** 2 + w ** 2) / R, W = Ie * 12, T = f.length, $ = p.length, ge = 6, Me = Math.max(1, Math.ceil((T - 1) / (ge - 1))), Oe = Math.max(1, Math.ceil(($ - 1) / (ge - 1))), z = /* @__PURE__ */ new Set();
      for (let e = 0; e < $; e += Oe) {
        for (let t = 0; t < T; t += Me) z.add(r[e][t]);
        z.add(r[e][T - 1]);
      }
      for (let e = 0; e < T; e += Me) z.add(r[$ - 1][e]);
      z.add(r[$ - 1][T - 1]);
      const Q = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Se = (e, t) => {
        const o = e ? xe * t : 0, l = -(R * Math.max(o, xe) + tt), _ = [];
        for (const E of U) {
          if (!z.has(E)) continue;
          const C = n.nodes.rawVal[E];
          if (!C) continue;
          const m = C[0], i = C[1], h = he == null ? void 0 : he.get(E), b = h ? h[0] : 0, ee = h ? h[1] : 0, F = h ? h[2] : 0, te = m + b * o, N = i + ee * o, be = 0 + F * o, Ge = be - l, ne = (d) => [
            m + (te - m) * d,
            i + (N - i) * d,
            l + Ge * d
          ], [Re, $e, Ce] = ne(0), [Fe, He, je] = ne(0.05), oe = [
            new y(Re, $e, Ce),
            new y(Fe, He, je)
          ];
          for (let d = 0; d <= W; d++) {
            const ae = 0.05 + 0.9 * (d / W), [De, Xe, Ze] = ne(ae), Ne = 2 * Math.PI * Ie * (d / W);
            oe.push(new y(De + Pe * Math.cos(Ne), Xe + Pe * Math.sin(Ne), Ze));
          }
          oe.push(new y(te, N, be)), _.push(new Ye(new qe().setFromPoints(oe), nt));
          const a = at, ke = [
            [
              m - a,
              i - a,
              l - a * 2
            ],
            [
              m + a,
              i - a,
              l - a * 2
            ],
            [
              m + a,
              i + a,
              l - a * 2
            ],
            [
              m - a,
              i + a,
              l - a * 2
            ],
            [
              m - a,
              i - a,
              l
            ],
            [
              m + a,
              i - a,
              l
            ],
            [
              m + a,
              i + a,
              l
            ],
            [
              m - a,
              i + a,
              l
            ]
          ].map((d) => new y(d[0], d[1], d[2])), Ve = [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ],
            [
              3,
              0
            ],
            [
              4,
              5
            ],
            [
              5,
              6
            ],
            [
              6,
              7
            ],
            [
              7,
              4
            ],
            [
              0,
              4
            ],
            [
              1,
              5
            ],
            [
              2,
              6
            ],
            [
              3,
              7
            ]
          ], Ee = [];
          for (const [d, ae] of Ve) Ee.push(ke[d], ke[ae]);
          _.push(new Ke(new qe().setFromPoints(Ee), ot));
        }
        return _;
      };
      Q ? Ue.derive(() => {
        const e = Q.deformedShape.val, t = Q.displayScale.val, o = t === 0 ? 1 : t > 0 ? t : -1 / t;
        n.objects3D.val = Se(e, o);
      }) : n.objects3D.val = Se(true, 1);
    },
    runModal(s, n, u) {
      var _a, _b;
      const c = n.nodes.val, q = n.elements.val, x = n.nodeInputs.val, w = n.elementInputs.val;
      if (!(!c.length || !q.length || !((_a = w.densities) == null ? void 0 : _a.size))) try {
        const k = We(c, q, x, w, 12);
        u.render(k, {
          title: `Zapata Aislada ${s.Lz}\xD7${s.Bz}m t=${s.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${s.bc}m  Hp=${s.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = k.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (k) {
        console.warn("Modal zapata error:", k.message);
      }
    }
  };
});
export {
  __tla,
  pt as z
};
