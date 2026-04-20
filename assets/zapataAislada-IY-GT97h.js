import { a as re, V as B, B as ue, L as fe } from "./Text-CBH-tcJP.js";
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
  let C, R, ge, ee, q, ae, ke, oe, xe, Me;
  C = 25e6;
  R = 0.2;
  ge = C / (2 * (1 + R));
  ee = 24;
  q = 9.80665;
  ae = [
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
  oe = 6;
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
        options: Object.fromEntries(ae.map((n, a) => [
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
        const _ = Math.round(a.soilType ?? 0);
        if (_ > 0) {
          const l = ae[_];
          a.q_adm = l.q_adm, a.ks_factor = l.ks_factor, a.su = l.su, a.phi = l.phi, a.gamma = l.gamma, a.N_SPT = l.N_SPT, a.E_soil = l.E_soil;
        }
      }
    },
    build(n, a) {
      const { Lz: _, Bz: l, tz: se, bc: f, Hp: ne } = n, F = n.q_adm, te = n.ks_factor, w = F * q * te, le = n.P * q, me = n.Mx * q, ie = n.My * q, g = Math.round(n.nSub), P = _ / 2, b = l / 2, m = [], i = [];
      for (let e = 0; e <= g; e++) m.push(_ * e / g), i.push(l * e / g);
      m.includes(P) || (m.push(P), m.sort((e, o) => e - o)), i.includes(b) || (i.push(b), i.sort((e, o) => e - o));
      const T = [], k = [], E = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), A = (e, o, s) => {
        const t = `${e.toFixed(4)},${o.toFixed(4)},${s.toFixed(4)}`;
        if (y.has(t)) return y.get(t);
        const r = T.length;
        return T.push([
          e,
          o,
          s
        ]), y.set(t, r), r;
      }, c = [];
      for (let e = 0; e < i.length; e++) {
        const o = [];
        for (let s = 0; s < m.length; s++) o.push(A(m[s], i[e], 0));
        c.push(o);
      }
      for (let e = 0; e < i.length - 1; e++) for (let o = 0; o < m.length - 1; o++) {
        const s = k.length;
        k.push([
          c[e][o],
          c[e][o + 1],
          c[e + 1][o + 1],
          c[e + 1][o]
        ]), V.set(s, se), E.set(s, C), v.set(s, R), z.set(s, ee);
      }
      const ce = A(P, b, 0), K = A(P, b, ne), d = k.length;
      k.push([
        ce,
        K
      ]), E.set(d, C), v.set(d, R), D.set(d, ge), G.set(d, f * f), $.set(d, f ** 4 / 12), j.set(d, f ** 4 / 12), H.set(d, 0.14 * f ** 4), z.set(d, ee), Z.set(d, {
        type: "rect",
        b: f,
        h: f
      });
      const Y = /* @__PURE__ */ new Map();
      Y.set(K, [
        0,
        0,
        -le,
        me,
        ie,
        0
      ]);
      const J = _ / g, U = l / g, p = [], W = [];
      for (let e = 0; e < i.length; e++) for (let o = 0; o < m.length; o++) {
        const s = J * U * (o === 0 || o === m.length - 1 ? 0.5 : 1) * (e === 0 || e === i.length - 1 ? 0.5 : 1);
        p.push({
          node: c[e][o],
          dof: 2,
          k: w * s
        }), W.push(c[e][o]);
      }
      const S = w * J * U * 0.01, I = S * 0.01, x = c[0][0];
      p.push({
        node: x,
        dof: 0,
        k: S
      }), p.push({
        node: x,
        dof: 1,
        k: S
      }), p.push({
        node: x,
        dof: 3,
        k: I
      }), p.push({
        node: x,
        dof: 4,
        k: I
      }), p.push({
        node: x,
        dof: 5,
        k: I
      }), p.push({
        node: c[i.length - 1][m.length - 1],
        dof: 1,
        k: S
      }), a.nodes.val = T.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), a.elements.val = k, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: Y
      }, a.elementInputs.val = {
        elasticities: E,
        poissonsRatios: v,
        areas: G,
        momentsOfInertiaZ: $,
        momentsOfInertiaY: j,
        torsionalConstants: H,
        shearModuli: D,
        thicknesses: V,
        densities: z,
        sectionShapes: Z
      };
      try {
        a.deformOutputs.val = he(a.nodes.val, a.elements.val, a.nodeInputs.val, a.elementInputs.val, p);
        const e = _e(a.nodes.val, a.elements.val, a.elementInputs.val, a.deformOutputs.val), o = a.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        let t = 0;
        a.elements.rawVal.forEach((O, M) => {
          if (O.length !== 4) return;
          const N = [];
          for (const L of O) {
            const h = o == null ? void 0 : o.get(L), u = -w * (h ? h[2] : 0) / q;
            N.push(u), u > t && (t = u);
          }
          s.set(M, N);
        }), e.pressure = s, e.colorMapRange = [
          0,
          1.5 * F
        ], a.analyzeOutputs.val = e;
        const r = t / n.q_adm;
        console.log(`[Zapata Aislada] q_max = ${t.toFixed(2)} tonf/m\xB2 | q_adm = ${n.q_adm} tonf/m\xB2 | ratio = ${r.toFixed(2)}` + (r > 1 ? " \u26A0 SOBREPASA q_adm" : " \u2713 OK"));
      } catch (e) {
        console.error("Solver error zapata aislada:", e);
      }
      const Q = [], de = a.deformOutputs.rawVal.deformations;
      for (const e of W) {
        const o = a.nodes.rawVal[e];
        if (!o) continue;
        const s = o[0], t = o[1], r = de == null ? void 0 : de.get(e), M = 0 + (r ? r[2] : 0) * Me, N = -0.3, L = (M - N) / oe, h = [
          new B(s, t, M)
        ];
        for (let u = 1; u < oe; u++) {
          const pe = u % 2 === 0 ? ke : -0.08;
          h.push(new B(s + pe, t, M - u * L));
        }
        h.push(new B(s, t, N));
        const X = new ue().setFromPoints(h);
        Q.push(new fe(X, xe));
      }
      a.objects3D.val = Q;
    }
  };
});
export {
  __tla,
  Se as z
};
