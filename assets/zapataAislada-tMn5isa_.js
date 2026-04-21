import { a as ue, V as h, L as me, B as ce } from "./Text-CBH-tcJP.js";
import { a as be } from "./analyze-ClLKGn9k.js";
import { d as Me, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let Le;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let z, y, qe, de, P, re, we, Ne, pe, Se, Pe, Te;
  z = 25e6;
  y = 0.2;
  qe = z / (2 * (1 + y));
  de = 24;
  P = 9.80665;
  re = [
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
  we = 0.2;
  Ne = 0.035;
  pe = 8;
  Se = new ue({
    color: 16711731,
    linewidth: 2
  });
  Pe = new ue({
    color: 52224,
    linewidth: 2
  });
  Te = 0.04;
  Le = {
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
        options: Object.fromEntries(re.map((l, n) => [
          l.name,
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
    onParamChange(l, n) {
      if (l === "soilType") {
        const f = Math.round(n.soilType ?? 0);
        if (f > 0) {
          const i = re[f];
          n.q_adm = i.q_adm, n.ks_factor = i.ks_factor, n.su = i.su, n.phi = i.phi, n.gamma = i.gamma, n.N_SPT = i.N_SPT, n.E_soil = i.E_soil;
        }
      }
    },
    build(l, n) {
      const { Lz: f, Bz: i, tz: j, bc: g, Hp: Z } = l, fe = l.q_adm, _e = l.ks_factor, T = fe * P * _e, he = l.P * P, ge = l.Mx * P, xe = l.My * P, q = Math.round(l.nSub), E = f / 2, I = i / 2, m = [], c = [];
      for (let e = 0; e <= q; e++) m.push(f * e / q), c.push(i * e / q);
      m.includes(E) || (m.push(E), m.sort((e, a) => e - a)), c.includes(I) || (c.push(I), c.sort((e, a) => e - a));
      const O = [], w = [], L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), C = (e, a, s) => {
        const o = `${e.toFixed(4)},${a.toFixed(4)},${s.toFixed(4)}`;
        if (B.has(o)) return B.get(o);
        const u = O.length;
        return O.push([
          e,
          a,
          s
        ]), B.set(o, u), u;
      }, r = [];
      for (let e = 0; e < c.length; e++) {
        const a = [];
        for (let s = 0; s < m.length; s++) a.push(C(m[s], c[e], 0));
        r.push(a);
      }
      for (let e = 0; e < c.length - 1; e++) for (let a = 0; a < m.length - 1; a++) {
        const s = w.length;
        w.push([
          r[e][a],
          r[e][a + 1],
          r[e + 1][a + 1],
          r[e + 1][a]
        ]), X.set(s, j), L.set(s, z), R.set(s, y), F.set(s, de);
      }
      const ke = C(E, I, 0), ee = C(E, I, Z), p = w.length;
      w.push([
        ke,
        ee
      ]), L.set(p, z), R.set(p, y), W.set(p, qe), Y.set(p, g * g), K.set(p, g ** 4 / 12), U.set(p, g ** 4 / 12), J.set(p, 0.14 * g ** 4), F.set(p, de), Q.set(p, {
        type: "rect",
        b: g,
        h: g
      });
      const ae = /* @__PURE__ */ new Map();
      ae.set(ee, [
        0,
        0,
        -he,
        ge,
        xe,
        0
      ]);
      const ne = f / q, se = i / q, _ = [], G = [];
      for (let e = 0; e < c.length; e++) for (let a = 0; a < m.length; a++) {
        const s = ne * se * (a === 0 || a === m.length - 1 ? 0.5 : 1) * (e === 0 || e === c.length - 1 ? 0.5 : 1);
        _.push({
          node: r[e][a],
          dof: 2,
          k: T * s
        }), G.push(r[e][a]);
      }
      const v = T * ne * se * 0.01, $ = v * 0.01, N = r[0][0];
      _.push({
        node: N,
        dof: 0,
        k: v
      }), _.push({
        node: N,
        dof: 1,
        k: v
      }), _.push({
        node: N,
        dof: 3,
        k: $
      }), _.push({
        node: N,
        dof: 4,
        k: $
      }), _.push({
        node: N,
        dof: 5,
        k: $
      }), _.push({
        node: r[c.length - 1][m.length - 1],
        dof: 1,
        k: v
      }), n.nodes.val = O.map((e) => [
        e[0],
        e[1],
        e[2]
      ]), n.elements.val = w, n.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: ae
      }, n.elementInputs.val = {
        elasticities: L,
        poissonsRatios: R,
        areas: Y,
        momentsOfInertiaZ: K,
        momentsOfInertiaY: U,
        torsionalConstants: J,
        shearModuli: W,
        thicknesses: X,
        densities: F,
        sectionShapes: Q
      };
      try {
        n.deformOutputs.val = Me(n.nodes.val, n.elements.val, n.nodeInputs.val, n.elementInputs.val, _);
        const e = be(n.nodes.val, n.elements.val, n.elementInputs.val, n.deformOutputs.val), a = n.deformOutputs.rawVal.deformations, s = /* @__PURE__ */ new Map();
        let o = 0;
        n.elements.rawVal.forEach((t, S) => {
          if (t.length !== 4) return;
          const d = [];
          for (const H of t) {
            const ie = a == null ? void 0 : a.get(H), V = T * (ie ? ie[2] : 0) / P;
            d.push(V), V < o && (o = V);
          }
          s.set(S, d);
        }), e.pressure = s, n.analyzeOutputs.val = e;
        const u = Math.abs(o);
        let k = 1 / 0;
        s.forEach((t) => {
          for (const S of t) {
            const d = Math.abs(S);
            d < k && (k = d);
          }
        }), Number.isFinite(k) || (k = 0);
        const b = u / l.q_adm, M = z * j ** 3 / (12 * (1 - y ** 2)) / (T * f ** 4);
        console.log(`[Zapata Aislada]
  q_max (centro) = -${u.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${k.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - k / (u || 1)) * 100).toFixed(1)}%
  q_adm = -${l.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${b.toFixed(2)}` + (b > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${M.toFixed(2)} (${M < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (e) {
        console.error("Solver error zapata aislada:", e);
      }
      const oe = n.deformOutputs.rawVal.deformations;
      let A = 1e-9;
      for (const e of G) {
        const a = oe == null ? void 0 : oe.get(e);
        a && (A = Math.max(A, Math.abs(a[2])));
      }
      const te = 0.07 * Math.sqrt(f ** 2 + i ** 2 + Z ** 2) / A, x = -(A * te + we), D = [];
      for (const e of G) {
        const a = n.nodes.rawVal[e];
        if (!a) continue;
        const s = a[0], o = a[1], u = oe == null ? void 0 : oe.get(e), b = 0 + (u ? u[2] : 0) * te, le = (b - x) / pe, M = [
          new h(s, o, b)
        ];
        for (let d = 1; d < pe; d++) {
          const H = d % 2 === 0 ? Ne : -0.035;
          M.push(new h(s + H, o, b - d * le));
        }
        M.push(new h(s, o, x)), D.push(new me(new ce().setFromPoints(M), Se));
        const t = Te, S = [
          new h(s - t, o, x - t),
          new h(s + t, o, x - t),
          new h(s + t, o, x + t),
          new h(s - t, o, x + t),
          new h(s - t, o, x - t)
        ];
        D.push(new me(new ce().setFromPoints(S), Pe));
      }
      n.objects3D.val = D;
    }
  };
});
export {
  __tla,
  Le as z
};
