import { a as re, V as R, B as ue, L as fe } from "./Text-CBH-tcJP.js";
import { a as _e } from "./analyze-ClLKGn9k.js";
import { d as he, __tla as __tla_0 } from "./didacticCpp-CZmuvtpn.js";
let Se;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let F, G, ge, ae, q, oe, ke, se, xe, Me;
  F = 25e6;
  G = 0.2;
  ge = F / (2 * (1 + G));
  ae = 24;
  q = 9.80665;
  oe = [
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
  ke = 0.08;
  se = 6;
  xe = new re({
    color: 16711731,
    linewidth: 3
  });
  Me = 10;
  Se = {
    id: "zapata-aislada",
    name: "Zapata Aislada (Ecuador q_adm tonf/m\xB2)",
    category: "Cimentaciones",
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
        default: 0.5,
        min: 0.2,
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
        options: Object.fromEntries(oe.map((n, a) => [
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
        default: 50,
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
        default: 6,
        min: 3,
        max: 12,
        step: 1,
        label: "n subdivisiones"
      }
    },
    onParamChange(n, a) {
      if (n === "soilType") {
        const f = Math.round(a.soilType ?? 0);
        if (f > 0) {
          const t = oe[f];
          a.q_adm = t.q_adm, a.ks_factor = t.ks_factor, a.su = t.su, a.phi = t.phi, a.gamma = t.gamma, a.N_SPT = t.N_SPT, a.E_soil = t.E_soil;
        }
      }
    },
    build(n, a) {
      const { Lz: f, Bz: t, tz: ne, bc: u, Hp: te } = n, V = n.q_adm, le = n.ks_factor, v = V * q * le, me = n.P * q, ie = n.Mx * q, ce = n.My * q, h = Math.round(n.nSub), N = f / 2, P = t / 2, m = [], i = [];
      for (let e = 0; e <= h; e++) m.push(f * e / h), i.push(t * e / h);
      m.includes(N) || (m.push(N), m.sort((e, o) => e - o)), i.includes(P) || (i.push(P), i.sort((e, o) => e - o));
      const z = [], g = [], A = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), L = (e, o, s) => {
        const l = `${e.toFixed(4)},${o.toFixed(4)},${s.toFixed(4)}`;
        if (O.has(l)) return O.get(l);
        const r = z.length;
        return z.push([
          e,
          o,
          s
        ]), O.set(l, r), r;
      }, c = [];
      for (let e = 0; e < i.length; e++) {
        const o = [];
        for (let s = 0; s < m.length; s++) o.push(L(m[s], i[e], 0));
        c.push(o);
      }
      for (let e = 0; e < i.length - 1; e++) for (let o = 0; o < m.length - 1; o++) {
        const s = g.length;
        g.push([
          c[e][o],
          c[e][o + 1],
          c[e + 1][o + 1],
          c[e + 1][o]
        ]), j.set(s, ne), A.set(s, F), y.set(s, G), I.set(s, ae);
      }
      const de = L(N, P, 0), J = L(N, P, te), d = g.length;
      g.push([
        de,
        J
      ]), A.set(d, F), y.set(d, G), K.set(d, ge), $.set(d, u * u), H.set(d, u ** 4 / 12), D.set(d, u ** 4 / 12), Z.set(d, 0.14 * u ** 4), I.set(d, ae), Y.set(d, {
        type: "rect",
        b: u,
        h: u
      });
      const U = /* @__PURE__ */ new Map();
      U.set(J, [
        0,
        0,
        -me,
        ie,
        ce,
        0
      ]);
      const W = f / h, Q = t / h, p = [], X = [];
      for (let e = 0; e < i.length; e++) for (let o = 0; o < m.length; o++) {
        const s = W * Q * (o === 0 || o === m.length - 1 ? 0.5 : 1) * (e === 0 || e === i.length - 1 ? 0.5 : 1);
        p.push({
          node: c[e][o],
          dof: 2,
          k: v * s
        }), X.push(c[e][o]);
      }
      const S = v * W * Q * 0.01, B = S * 0.01, k = c[0][0];
      p.push({
        node: k,
        dof: 0,
        k: S
      }), p.push({
        node: k,
        dof: 1,
        k: S
      }), p.push({
        node: k,
        dof: 3,
        k: B
      }), p.push({
        node: k,
        dof: 4,
        k: B
      }), p.push({
        node: k,
        dof: 5,
        k: B
      }), p.push({
        node: c[i.length - 1][m.length - 1],
        dof: 1,
        k: S
      }), a.nodes.val = z.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), a.elements.val = g, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: U
      }, a.elementInputs.val = {
        elasticities: A,
        poissonsRatios: y,
        areas: $,
        momentsOfInertiaZ: H,
        momentsOfInertiaY: D,
        torsionalConstants: Z,
        shearModuli: K,
        thicknesses: j,
        densities: I,
        sectionShapes: Y
      };
      try {
        a.deformOutputs.val = he(a.nodes.val, a.elements.val, a.nodeInputs.val, a.elementInputs.val, p);
        const e = _e(a.nodes.val, a.elements.val, a.elementInputs.val, a.deformOutputs.val), o = a.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        let l = 0;
        a.elements.rawVal.forEach((_, w) => {
          if (_.length !== 4) return;
          const T = [];
          for (const x of _) {
            const E = o == null ? void 0 : o.get(x), b = v * (E ? E[2] : 0) / q;
            T.push(b), b < l && (l = b);
          }
          s.set(w, T);
        }), e.pressure = s, e.colorMapRange = [
          0,
          -V
        ], a.analyzeOutputs.val = e;
        const r = Math.abs(l), C = r / n.q_adm;
        console.log(`[Zapata Aislada] q_max = -${r.toFixed(2)} tonf/m\xB2 | q_adm = -${n.q_adm} tonf/m\xB2 | ratio = ${C.toFixed(2)}` + (C > 1 ? " \u26A0 SOBREPASA q_adm" : " \u2713 OK"));
      } catch (e) {
        console.error("Solver error zapata aislada:", e);
      }
      const ee = [], pe = a.deformOutputs.rawVal.deformations;
      for (const e of X) {
        const o = a.nodes.rawVal[e];
        if (!o) continue;
        const s = o[0], l = o[1], r = pe == null ? void 0 : pe.get(e), _ = 0 + (r ? r[2] : 0) * Me, w = -0.3, T = (_ - w) / se, x = [
          new R(s, l, _)
        ];
        for (let M = 1; M < se; M++) {
          const b = M % 2 === 0 ? ke : -0.08;
          x.push(new R(s + b, l, _ - M * T));
        }
        x.push(new R(s, l, w));
        const E = new ue().setFromPoints(x);
        ee.push(new fe(E, xe));
      }
      a.objects3D.val = ee;
    }
  };
});
export {
  __tla,
  Se as z
};
