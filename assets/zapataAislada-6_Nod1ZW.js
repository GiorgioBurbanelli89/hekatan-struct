import { a as ue, V as G, B as _e, L as he } from "./Text-CBH-tcJP.js";
import { a as ge } from "./analyze-ClLKGn9k.js";
import { d as ke, __tla as __tla_0 } from "./didacticCpp-CZmuvtpn.js";
let Ee;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let v, z, xe, ne, N, te, be, le, Me, qe;
  v = 25e6;
  z = 0.2;
  xe = v / (2 * (1 + z));
  ne = 24;
  N = 9.80665;
  te = [
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
  be = 0.08;
  le = 6;
  Me = new ue({
    color: 16711731,
    linewidth: 3
  });
  qe = 10;
  Ee = {
    id: "zapata-aislada",
    name: "Zapata Aislada (Ecuador q_adm tonf/m\xB2)",
    category: "Cimentaciones",
    params: {
      Lz: {
        default: 2,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Lz (m)"
      },
      Bz: {
        default: 2,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Bz (m)"
      },
      tz: {
        default: 0.2,
        min: 0.1,
        max: 1.2,
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
        options: Object.fromEntries(te.map((n, a) => [
          n.name,
          a
        ]))
      },
      q_adm: {
        default: 20,
        min: 1,
        max: 200,
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
        default: 30,
        min: 1,
        max: 200,
        step: 1,
        label: "P axial (tonf)"
      },
      Mx: {
        default: 0,
        min: -3,
        max: 3,
        step: 0.1,
        label: "Mx (tonf\xB7m)"
      },
      My: {
        default: 0,
        min: -3,
        max: 3,
        step: 0.1,
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
    onParamChange(n, a) {
      if (n === "soilType") {
        const _ = Math.round(a.soilType ?? 0);
        if (_ > 0) {
          const t = te[_];
          a.q_adm = t.q_adm, a.ks_factor = t.ks_factor, a.su = t.su, a.phi = t.phi, a.gamma = t.gamma, a.N_SPT = t.N_SPT, a.E_soil = t.E_soil;
        }
      }
    },
    build(n, a) {
      const { Lz: _, Bz: t, tz: V, bc: h, Hp: me } = n, D = n.q_adm, ie = n.ks_factor, P = D * N * ie, ce = n.P * N, de = n.Mx * N, re = n.My * N, x = Math.round(n.nSub), S = _ / 2, w = t / 2, m = [], i = [];
      for (let e = 0; e <= x; e++) m.push(_ * e / x), i.push(t * e / x);
      m.includes(S) || (m.push(S), m.sort((e, o) => e - o)), i.includes(w) || (i.push(w), i.sort((e, o) => e - o));
      const A = [], b = [], I = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), F = (e, o, s) => {
        const l = `${e.toFixed(4)},${o.toFixed(4)},${s.toFixed(4)}`;
        if (O.has(l)) return O.get(l);
        const p = A.length;
        return A.push([
          e,
          o,
          s
        ]), O.set(l, p), p;
      }, d = [];
      for (let e = 0; e < i.length; e++) {
        const o = [];
        for (let s = 0; s < m.length; s++) o.push(F(m[s], i[e], 0));
        d.push(o);
      }
      for (let e = 0; e < i.length - 1; e++) for (let o = 0; o < m.length - 1; o++) {
        const s = b.length;
        b.push([
          d[e][o],
          d[e][o + 1],
          d[e + 1][o + 1],
          d[e + 1][o]
        ]), H.set(s, V), I.set(s, v), y.set(s, z), L.set(s, ne);
      }
      const pe = F(S, w, 0), W = F(S, w, me), r = b.length;
      b.push([
        pe,
        W
      ]), I.set(r, v), y.set(r, z), J.set(r, xe), j.set(r, h * h), Z.set(r, h ** 4 / 12), K.set(r, h ** 4 / 12), Y.set(r, 0.14 * h ** 4), L.set(r, ne), U.set(r, {
        type: "rect",
        b: h,
        h
      });
      const X = /* @__PURE__ */ new Map();
      X.set(W, [
        0,
        0,
        -ce,
        de,
        re,
        0
      ]);
      const Q = _ / x, ee = t / x, f = [], ae = [];
      for (let e = 0; e < i.length; e++) for (let o = 0; o < m.length; o++) {
        const s = Q * ee * (o === 0 || o === m.length - 1 ? 0.5 : 1) * (e === 0 || e === i.length - 1 ? 0.5 : 1);
        f.push({
          node: d[e][o],
          dof: 2,
          k: P * s
        }), ae.push(d[e][o]);
      }
      const T = P * Q * ee * 0.01, B = T * 0.01, M = d[0][0];
      f.push({
        node: M,
        dof: 0,
        k: T
      }), f.push({
        node: M,
        dof: 1,
        k: T
      }), f.push({
        node: M,
        dof: 3,
        k: B
      }), f.push({
        node: M,
        dof: 4,
        k: B
      }), f.push({
        node: M,
        dof: 5,
        k: B
      }), f.push({
        node: d[i.length - 1][m.length - 1],
        dof: 1,
        k: T
      }), a.nodes.val = A.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), a.elements.val = b, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: X
      }, a.elementInputs.val = {
        elasticities: I,
        poissonsRatios: y,
        areas: j,
        momentsOfInertiaZ: Z,
        momentsOfInertiaY: K,
        torsionalConstants: Y,
        shearModuli: J,
        thicknesses: H,
        densities: L,
        sectionShapes: U
      };
      try {
        a.deformOutputs.val = ke(a.nodes.val, a.elements.val, a.nodeInputs.val, a.elementInputs.val, f);
        const e = ge(a.nodes.val, a.elements.val, a.elementInputs.val, a.deformOutputs.val), o = a.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        let l = 0;
        a.elements.rawVal.forEach((u, q) => {
          if (u.length !== 4) return;
          const c = [];
          for (const R of u) {
            const se = o == null ? void 0 : o.get(R), $ = P * (se ? se[2] : 0) / N;
            c.push($), $ < l && (l = $);
          }
          s.set(q, c);
        }), e.pressure = s, e.colorMapRange = [
          0,
          -D
        ], a.analyzeOutputs.val = e;
        const p = Math.abs(l);
        let g = 1 / 0;
        s.forEach((u) => {
          for (const q of u) {
            const c = Math.abs(q);
            c < g && (g = c);
          }
        }), Number.isFinite(g) || (g = 0);
        const k = p / n.q_adm, E = v * V ** 3 / (12 * (1 - z ** 2)) / (P * _ ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${p.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${g.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - g / (p || 1)) * 100).toFixed(1)}%
  q_adm = -${n.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${k.toFixed(2)}` + (k > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${E.toFixed(2)} (${E < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (e) {
        console.error("Solver error zapata aislada:", e);
      }
      const oe = [], fe = a.deformOutputs.rawVal.deformations;
      for (const e of ae) {
        const o = a.nodes.rawVal[e];
        if (!o) continue;
        const s = o[0], l = o[1], p = fe == null ? void 0 : fe.get(e), k = 0 + (p ? p[2] : 0) * qe, C = -0.3, E = (k - C) / le, u = [
          new G(s, l, k)
        ];
        for (let c = 1; c < le; c++) {
          const R = c % 2 === 0 ? be : -0.08;
          u.push(new G(s + R, l, k - c * E));
        }
        u.push(new G(s, l, C));
        const q = new _e().setFromPoints(u);
        oe.push(new he(q, Me));
      }
      a.objects3D.val = oe;
    }
  };
});
export {
  __tla,
  Ee as z
};
