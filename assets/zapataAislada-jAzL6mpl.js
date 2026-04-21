import { a as Ie, V as y, L as Ye, B as Ne, h as Ke } from "./Text-CBH-tcJP.js";
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
  let C, F, et, qe, A, ve, tt, we, Pe, ot, nt, at;
  C = 25e6;
  F = 0.2;
  et = C / (2 * (1 + F));
  qe = 24;
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
  we = 0.035;
  Pe = 8;
  ot = new Ie({
    color: 16711731,
    linewidth: 2
  });
  nt = new Ie({
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
        options: Object.fromEntries(ve.map((l, o) => [
          l.name,
          o
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
    onParamChange(l, o) {
      if (l === "soilType") {
        const f = Math.round(o.soilType ?? 0);
        if (f > 0) {
          const i = ve[f];
          o.q_adm = i.q_adm, o.ks_factor = i.ks_factor, o.su = i.su, o.phi = i.phi, o.gamma = i.gamma, o.N_SPT = i.N_SPT, o.E_soil = i.E_soil;
        }
      }
    },
    build(l, o) {
      var _a;
      const { Lz: f, Bz: i, tz: q, bc: g, Hp: v } = l, k = l.q_adm, Te = l.ks_factor, w = k * A * Te, ze = l.P * A, ye = l.Mx * A, Ae = l.My * A, P = Math.round(l.nSub), L = f / 2, B = i / 2, p = [], u = [];
      for (let e = 0; e <= P; e++) p.push(f * e / P), u.push(i * e / P);
      p.includes(L) || (p.push(L), p.sort((e, t) => e - t)), u.includes(B) || (u.push(B), u.sort((e, t) => e - t));
      const H = [], I = [], j = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), Z = (e, t, n) => {
        const _ = `${e.toFixed(4)},${t.toFixed(4)},${n.toFixed(4)}`;
        if (X.has(_)) return X.get(_);
        const a = H.length;
        return H.push([
          e,
          t,
          n
        ]), X.set(_, a), a;
      }, m = [];
      for (let e = 0; e < u.length; e++) {
        const t = [];
        for (let n = 0; n < p.length; n++) t.push(Z(p[n], u[e], 0));
        m.push(t);
      }
      for (let e = 0; e < u.length - 1; e++) for (let t = 0; t < p.length - 1; t++) {
        const n = I.length;
        I.push([
          m[e][t],
          m[e][t + 1],
          m[e + 1][t + 1],
          m[e + 1][t]
        ]), se.set(n, q), j.set(n, C), V.set(n, F), D.set(n, qe);
      }
      const Le = Z(L, B, 0), re = Z(L, B, v), M = I.length;
      I.push([
        Le,
        re
      ]), j.set(M, C), V.set(M, F), me.set(M, et), ae.set(M, g * g), le.set(M, g ** 4 / 12), ce.set(M, g ** 4 / 12), ie.set(M, 0.14 * g ** 4), D.set(M, qe), de.set(M, {
        type: "rect",
        b: g,
        h: g
      });
      const fe = /* @__PURE__ */ new Map();
      fe.set(re, [
        0,
        0,
        -ze,
        ye,
        Ae,
        0
      ]);
      const pe = f / P, ue = i / P, Be = 0.5, S = [], Y = [];
      for (let e = 0; e < u.length; e++) for (let t = 0; t < p.length; t++) {
        const n = pe * ue * (t === 0 || t === p.length - 1 ? 0.5 : 1) * (e === 0 || e === u.length - 1 ? 0.5 : 1), _ = w * n, a = w * n * Be;
        S.push({
          node: m[e][t],
          dof: 0,
          k: a
        }), S.push({
          node: m[e][t],
          dof: 1,
          k: a
        }), S.push({
          node: m[e][t],
          dof: 2,
          k: _
        }), Y.push(m[e][t]);
      }
      const K = w * pe * ue * 1e-4, U = m[0][0];
      S.push({
        node: U,
        dof: 3,
        k: K
      }), S.push({
        node: U,
        dof: 4,
        k: K
      }), S.push({
        node: U,
        dof: 5,
        k: K
      }), o.nodes.val = H.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), o.elements.val = I, o.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: fe
      }, o.elementInputs.val = {
        elasticities: j,
        poissonsRatios: V,
        areas: ae,
        momentsOfInertiaZ: le,
        momentsOfInertiaY: ce,
        torsionalConstants: ie,
        shearModuli: me,
        thicknesses: se,
        densities: D,
        sectionShapes: de
      };
      try {
        o.deformOutputs.val = Qe(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val, S);
        const e = Je(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val), t = o.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        let _ = 0;
        o.elements.rawVal.forEach((c, x) => {
          if (c.length !== 4) return;
          const b = [];
          for (const Q of c) {
            const $ = t == null ? void 0 : t.get(Q), N = w * ($ ? $[2] : 0) / A;
            b.push(N), N < _ && (_ = N);
          }
          n.set(x, b);
        }), e.pressure = n, o.analyzeOutputs.val = e;
        const a = Math.abs(_);
        let h = 1 / 0;
        n.forEach((c) => {
          for (const x of c) {
            const b = Math.abs(x);
            b < h && (h = b);
          }
        }), Number.isFinite(h) || (h = 0);
        const E = a / l.q_adm, d = C * q ** 3 / (12 * (1 - F ** 2)) / (w * f ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${a.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${h.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - h / (a || 1)) * 100).toFixed(1)}%
  q_adm = -${l.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${E.toFixed(2)}` + (E > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${d.toFixed(2)} (${d < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (e) {
        console.error("Solver error zapata aislada:", e);
      }
      const _e = o.deformOutputs.rawVal.deformations;
      let O = 1e-9;
      for (const e of Y) {
        const t = _e == null ? void 0 : _e.get(e);
        t && (O = Math.max(O, Math.abs(t[2])));
      }
      const he = 0.07 * Math.sqrt(f ** 2 + i ** 2 + v ** 2) / O, J = Pe * 12, T = p.length, G = u.length, xe = 6, ge = Math.max(1, Math.ceil((T - 1) / (xe - 1))), Oe = Math.max(1, Math.ceil((G - 1) / (xe - 1))), z = /* @__PURE__ */ new Set();
      for (let e = 0; e < G; e += Oe) {
        for (let t = 0; t < T; t += ge) z.add(m[e][t]);
        z.add(m[e][T - 1]);
      }
      for (let e = 0; e < T; e += ge) z.add(m[G - 1][e]);
      z.add(m[G - 1][T - 1]);
      const W = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Me = (e, t) => {
        const n = e ? he * t : 0, a = -(O * Math.max(n, he) + tt), h = [];
        for (const E of Y) {
          if (!z.has(E)) continue;
          const R = o.nodes.rawVal[E];
          if (!R) continue;
          const d = R[0], c = R[1], x = _e == null ? void 0 : _e.get(E), b = x ? x[0] : 0, Q = x ? x[1] : 0, $ = x ? x[2] : 0, ee = d + b * n, N = c + Q * n, Se = 0 + $ * n, Ge = Se - a, te = (r) => [
            d + (ee - d) * r,
            c + (N - c) * r,
            a + Ge * r
          ], [Re, $e, Ce] = te(0), [Fe, He, je] = te(0.05), oe = [
            new y(Re, $e, Ce),
            new y(Fe, He, je)
          ];
          for (let r = 0; r <= J; r++) {
            const ne = 0.05 + 0.9 * (r / J), [De, Xe, Ze] = te(ne), Ee = 2 * Math.PI * Pe * (r / J);
            oe.push(new y(De + we * Math.cos(Ee), Xe + we * Math.sin(Ee), Ze));
          }
          oe.push(new y(ee, N, Se)), h.push(new Ye(new Ne().setFromPoints(oe), ot));
          const s = at, be = [
            [
              d - s,
              c - s,
              a - s * 2
            ],
            [
              d + s,
              c - s,
              a - s * 2
            ],
            [
              d + s,
              c + s,
              a - s * 2
            ],
            [
              d - s,
              c + s,
              a - s * 2
            ],
            [
              d - s,
              c - s,
              a
            ],
            [
              d + s,
              c - s,
              a
            ],
            [
              d + s,
              c + s,
              a
            ],
            [
              d - s,
              c + s,
              a
            ]
          ].map((r) => new y(r[0], r[1], r[2])), Ve = [
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
          ], ke = [];
          for (const [r, ne] of Ve) ke.push(be[r], be[ne]);
          h.push(new Ke(new Ne().setFromPoints(ke), nt));
        }
        return h;
      };
      W ? Ue.derive(() => {
        const e = W.deformedShape.val, t = W.displayScale.val, n = t === 0 ? 1 : t > 0 ? t : -1 / t;
        o.objects3D.val = Me(e, n);
      }) : o.objects3D.val = Me(true, 1);
    },
    runModal(l, o, f) {
      var _a, _b;
      const i = o.nodes.val, q = o.elements.val, g = o.nodeInputs.val, v = o.elementInputs.val;
      if (!(!i.length || !q.length || !((_a = v.densities) == null ? void 0 : _a.size))) try {
        const k = We(i, q, g, v, 12);
        f.render(k, {
          title: `Zapata Aislada ${l.Lz}\xD7${l.Bz}m t=${l.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${l.bc}m  Hp=${l.Hp}m`
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
