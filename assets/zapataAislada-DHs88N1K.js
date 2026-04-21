import { a as re, V as _, L as le, B as ie } from "./Text-CBH-tcJP.js";
import { a as Me } from "./analyze-ClLKGn9k.js";
import { d as be, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let ye;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let v, z, we, me, S, ce, qe, Ne, de, Pe, Se, Te;
  v = 25e6;
  z = 0.2;
  we = v / (2 * (1 + z));
  me = 24;
  S = 9.80665;
  ce = [
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
  qe = 0.15;
  Ne = 0.04;
  de = 4;
  Pe = new re({
    color: 16711731,
    linewidth: 2
  });
  Se = new re({
    color: 52224,
    linewidth: 2
  });
  Te = 0.04;
  ye = {
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
        options: Object.fromEntries(ce.map((l, a) => [
          l.name,
          a
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
    onParamChange(l, a) {
      if (l === "soilType") {
        const h = Math.round(a.soilType ?? 0);
        if (h > 0) {
          const i = ce[h];
          a.q_adm = i.q_adm, a.ks_factor = i.ks_factor, a.su = i.su, a.phi = i.phi, a.gamma = i.gamma, a.N_SPT = i.N_SPT, a.E_soil = i.E_soil;
        }
      }
    },
    build(l, a) {
      const { Lz: h, Bz: i, tz: j, bc: x, Hp: pe } = l, fe = l.q_adm, ue = l.ks_factor, T = fe * S * ue, _e = l.P * S, he = l.Mx * S, xe = l.My * S, w = Math.round(l.nSub), E = h / 2, I = i / 2, m = [], c = [];
      for (let e = 0; e <= w; e++) m.push(h * e / w), c.push(i * e / w);
      m.includes(E) || (m.push(E), m.sort((e, o) => e - o)), c.includes(I) || (c.push(I), c.sort((e, o) => e - o));
      const y = [], q = [], O = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), B = (e, o, n) => {
        const s = `${e.toFixed(4)},${o.toFixed(4)},${n.toFixed(4)}`;
        if (R.has(s)) return R.get(s);
        const f = y.length;
        return y.push([
          e,
          o,
          n
        ]), R.set(s, f), f;
      }, r = [];
      for (let e = 0; e < c.length; e++) {
        const o = [];
        for (let n = 0; n < m.length; n++) o.push(B(m[n], c[e], 0));
        r.push(o);
      }
      for (let e = 0; e < c.length - 1; e++) for (let o = 0; o < m.length - 1; o++) {
        const n = q.length;
        q.push([
          r[e][o],
          r[e][o + 1],
          r[e + 1][o + 1],
          r[e + 1][o]
        ]), K.set(n, j), O.set(n, v), L.set(n, z), F.set(n, me);
      }
      const ge = B(E, I, 0), Q = B(E, I, pe), p = q.length;
      q.push([
        ge,
        Q
      ]), O.set(p, v), L.set(p, z), W.set(p, we), Z.set(p, x * x), U.set(p, x ** 4 / 12), Y.set(p, x ** 4 / 12), J.set(p, 0.14 * x ** 4), F.set(p, me), X.set(p, {
        type: "rect",
        b: x,
        h: x
      });
      const ee = /* @__PURE__ */ new Map();
      ee.set(Q, [
        0,
        0,
        -_e,
        he,
        xe,
        0
      ]);
      const oe = h / w, ae = i / w, u = [], C = [];
      for (let e = 0; e < c.length; e++) for (let o = 0; o < m.length; o++) {
        const n = oe * ae * (o === 0 || o === m.length - 1 ? 0.5 : 1) * (e === 0 || e === c.length - 1 ? 0.5 : 1);
        u.push({
          node: r[e][o],
          dof: 2,
          k: T * n
        }), C.push(r[e][o]);
      }
      const A = T * oe * ae * 0.01, G = A * 0.01, N = r[0][0];
      u.push({
        node: N,
        dof: 0,
        k: A
      }), u.push({
        node: N,
        dof: 1,
        k: A
      }), u.push({
        node: N,
        dof: 3,
        k: G
      }), u.push({
        node: N,
        dof: 4,
        k: G
      }), u.push({
        node: N,
        dof: 5,
        k: G
      }), u.push({
        node: r[c.length - 1][m.length - 1],
        dof: 1,
        k: A
      }), a.nodes.val = y.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), a.elements.val = q, a.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: ee
      }, a.elementInputs.val = {
        elasticities: O,
        poissonsRatios: L,
        areas: Z,
        momentsOfInertiaZ: U,
        momentsOfInertiaY: Y,
        torsionalConstants: J,
        shearModuli: W,
        thicknesses: K,
        densities: F,
        sectionShapes: X
      };
      try {
        a.deformOutputs.val = be(a.nodes.val, a.elements.val, a.nodeInputs.val, a.elementInputs.val, u);
        const e = Me(a.nodes.val, a.elements.val, a.elementInputs.val, a.deformOutputs.val), o = a.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        let s = 0;
        a.elements.rawVal.forEach((t, P) => {
          if (t.length !== 4) return;
          const d = [];
          for (const H of t) {
            const te = o == null ? void 0 : o.get(H), V = T * (te ? te[2] : 0) / S;
            d.push(V), V < s && (s = V);
          }
          n.set(P, d);
        }), e.pressure = n, a.analyzeOutputs.val = e;
        const f = Math.abs(s);
        let k = 1 / 0;
        n.forEach((t) => {
          for (const P of t) {
            const d = Math.abs(P);
            d < k && (k = d);
          }
        }), Number.isFinite(k) || (k = 0);
        const M = f / l.q_adm, b = v * j ** 3 / (12 * (1 - z ** 2)) / (T * h ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${f.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${k.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - k / (f || 1)) * 100).toFixed(1)}%
  q_adm = -${l.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${M.toFixed(2)}` + (M > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${b.toFixed(2)} (${b < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (e) {
        console.error("Solver error zapata aislada:", e);
      }
      const ne = a.deformOutputs.rawVal.deformations;
      let $ = 1e-9;
      for (const e of C) {
        const o = ne == null ? void 0 : ne.get(e);
        o && ($ = Math.max($, Math.abs(o[2])));
      }
      const ke = qe * 0.5 / $, g = -0.15, D = [];
      for (const e of C) {
        const o = a.nodes.rawVal[e];
        if (!o) continue;
        const n = o[0], s = o[1], f = ne == null ? void 0 : ne.get(e), M = 0 + (f ? f[2] : 0) * ke, se = (M - g) / de, b = [
          new _(n, s, M)
        ];
        for (let d = 1; d < de; d++) {
          const H = d % 2 === 0 ? Ne : -0.04;
          b.push(new _(n + H, s, M - d * se));
        }
        b.push(new _(n, s, g)), D.push(new le(new ie().setFromPoints(b), Pe));
        const t = Te, P = [
          new _(n - t, s, g - t),
          new _(n + t, s, g - t),
          new _(n + t, s, g + t),
          new _(n - t, s, g + t),
          new _(n - t, s, g - t)
        ];
        D.push(new le(new ie().setFromPoints(P), Se));
      }
      a.objects3D.val = D;
    }
  };
});
export {
  __tla,
  ye as z
};
