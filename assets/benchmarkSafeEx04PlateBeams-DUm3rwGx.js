import { a as ce } from "./analyze-CRXZq0x4.js";
import { m as le, d as ie, __tla as __tla_0 } from "./didacticCpp-9rTpExtC.js";
let ue;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let v, K, re, de, V, X, C, Y, L, W, y, A, me, B, H, J;
  v = 0.0254;
  K = 0.3048;
  re = 0.04788;
  de = 6894.76;
  V = 30;
  X = 20;
  C = 8;
  Y = V * K;
  L = X * K;
  W = C * v;
  y = 3e3 * de;
  A = 0.3;
  me = y * W ** 3 / (12 * (1 - A ** 2));
  B = 100 * re;
  H = [
    {
      x: 180,
      y: 120,
      label: "P1 (180,120) \u2014 CENTRO de placa"
    },
    {
      x: 180,
      y: 60,
      label: "P2 (180,60) \u2014 cuadrante"
    },
    {
      x: 180,
      y: 0,
      label: "P3 (180,0) \u2014 sobre la viga el\xE1stica"
    }
  ];
  J = {
    P1: 0.18572,
    P2: 0.15349,
    P3: 0.07365
  };
  ue = {
    id: "benchmark-safe-ex04-plate-beams",
    name: "SAFE Ex.4 \xB7 Placa SS + vigas el\xE1sticas (Timoshenko, \u03BB=4)",
    category: "\u{1F3C1} Benchmarks \xB7 2\uFE0F\u20E3 \xC1reas \xB7 \u{1F4D8} SAFE",
    benchmark: true,
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "displacementZ",
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "shearX",
      "shearY",
      "vonMises"
    ],
    hasModal: true,
    params: {
      lambda: {
        default: 4,
        min: 0.5,
        max: 20,
        step: 0.5,
        label: "\u03BB rigidez relativa viga/losa"
      },
      mesh: {
        default: 8,
        label: "Mesh (nx = ny)",
        options: {
          "4\xD74": 4,
          "8\xD78": 8,
          "12\xD712": 12,
          "16\xD716": 16
        }
      }
    },
    build(F, o) {
      const x = F.lambda, r = x * Y * me / y, M = Math.round(F.mesh), t = M, c = M, l = Y / t, a = L / c, E = [];
      for (let e = 0; e <= c; e++) for (let n = 0; n <= t; n++) E.push([
        n * l,
        e * a,
        0
      ]);
      const i = [];
      for (let e = 0; e < c; e++) for (let n = 0; n < t; n++) {
        const s = e * (t + 1) + n;
        i.push([
          s,
          s + 1,
          s + 1 + (t + 1),
          s + (t + 1)
        ]);
      }
      const g = i.length;
      for (let e = 0; e < t; e++) i.push([
        e,
        e + 1
      ]);
      for (let e = 0; e < t; e++) {
        const n = c * (t + 1);
        i.push([
          n + e,
          n + e + 1
        ]);
      }
      const d = /* @__PURE__ */ new Map();
      for (let e = 0; e <= c; e++) {
        const n = e * (t + 1), s = e * (t + 1) + t;
        d.set(n, [
          true,
          true,
          true,
          false,
          false,
          false
        ]), d.set(s, [
          true,
          true,
          true,
          false,
          false,
          false
        ]);
      }
      const p = /* @__PURE__ */ new Map();
      for (let e = 0; e <= c; e++) for (let n = 0; n <= t; n++) {
        const s = n === 0 || n === t, _ = e === 0 || e === c, u = s && _ ? 0.25 : s || _ ? 0.5 : 1, h = e * (t + 1) + n;
        p.set(h, [
          0,
          0,
          -B * l * a * u,
          0,
          0,
          0
        ]);
      }
      const f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map();
      for (let e = 0; e < g; e++) f.set(e, W), m.set(e, y), w.set(e, A), S.set(e, 0);
      const P = 0.6, j = 12 * r / Math.pow(P, 3), Z = j * P, D = P * Math.pow(j, 3) / 12, Q = 1e-12, U = y / (2 * (1 + A));
      for (let e = g; e < i.length; e++) m.set(e, y), w.set(e, A), G.set(e, U), b.set(e, Z), O.set(e, r), k.set(e, D), T.set(e, Q), S.set(e, 0), N.set(e, {
        type: "rect",
        b: j,
        h: P
      }), q.set(e, [
        0,
        0,
        1
      ]);
      o.nodes.val = E, o.elements.val = i, o.nodeInputs.val = {
        supports: d,
        loads: p
      }, o.elementInputs.val = {
        elasticities: m,
        poissonsRatios: w,
        areas: b,
        momentsOfInertiaZ: O,
        momentsOfInertiaY: k,
        torsionalConstants: T,
        shearModuli: G,
        thicknesses: f,
        densities: S,
        sectionShapes: N,
        orientations: q
      };
      try {
        let e = function(s, _) {
          var _a, _b, _c, _d;
          const u = Math.min(t - 1, Math.max(0, Math.floor(s / l))), h = Math.min(c - 1, Math.max(0, Math.floor(_ / a))), $ = (s - u * l) / l, I = (_ - h * a) / a, z = h * (t + 1) + u, R = h * (t + 1) + u + 1, ee = (h + 1) * (t + 1) + u + 1, te = (h + 1) * (t + 1) + u, oe = ((_a = n.get(z)) == null ? void 0 : _a[2]) ?? 0, ne = ((_b = n.get(R)) == null ? void 0 : _b[2]) ?? 0, se = ((_c = n.get(ee)) == null ? void 0 : _c[2]) ?? 0, ae = ((_d = n.get(te)) == null ? void 0 : _d[2]) ?? 0;
          return (1 - $) * (1 - I) * oe + $ * (1 - I) * ne + $ * I * se + (1 - $) * I * ae;
        };
        o.deformOutputs.val = ie(o.nodes.val, o.elements.val, o.nodeInputs.val, o.elementInputs.val), o.analyzeOutputs.val = ce(o.nodes.val, o.elements.val, o.elementInputs.val, o.deformOutputs.val);
        const n = o.deformOutputs.val.deformations;
        console.log(`
[SAFE Ex.4 \xB7 ${t}\xD7${c}]  Geom ${V}'\xD7${X}'\xD7${C}"  E=${(y / 1e6).toFixed(1)} GPa  \u03BD=${A}`), console.log(`  q = ${B.toFixed(3)} kN/m\xB2 (= 100 psf)`), console.log(`  \u03BB = ${x} \u2192 Ib = ${(r * 1e6).toFixed(2)} \xD7 10\u207B\u2076 m\u2074 \u2192 viga ${(j * 100).toFixed(1)}cm \xD7 ${(P * 100).toFixed(0)}cm (J\u22480)`), console.log("  Punto                          X(in) Y(in) w_Hek(in)  w_Teor(in) \u0394%");
        for (const s of H) {
          const _ = s.x * v, u = s.y * v, h = e(_, u), $ = Math.abs(h) / v, I = s.label.split(" ")[0], z = J[I], R = ($ / z - 1) * 100;
          console.log(`  ${s.label.padEnd(40)} ${s.x.toString().padStart(3)} ${s.y.toString().padStart(3)}  ${$.toFixed(4)}     ${z.toFixed(4)}    ${R >= 0 ? "+" : ""}${R.toFixed(2)}%`);
        }
      } catch (e) {
        console.error("[SAFE Ex.4 solver error]:", e);
      }
      o.objects3D.val = [];
    },
    computedLabels: (F, o) => {
      var _a;
      const x = {}, r = (_a = o.deformOutputs.val) == null ? void 0 : _a.deformations;
      if (!r) return x;
      const M = Math.round(F.mesh), t = M, c = M, l = Y / t, a = L / c;
      function E(i, g) {
        var _a2, _b, _c, _d;
        const d = Math.min(t - 1, Math.max(0, Math.floor(i / l))), p = Math.min(c - 1, Math.max(0, Math.floor(g / a))), f = (i - d * l) / l, m = (g - p * a) / a, w = p * (t + 1) + d, b = p * (t + 1) + d + 1, O = (p + 1) * (t + 1) + d + 1, k = (p + 1) * (t + 1) + d, T = ((_a2 = r.get(w)) == null ? void 0 : _a2[2]) ?? 0, G = ((_b = r.get(b)) == null ? void 0 : _b[2]) ?? 0, S = ((_c = r.get(O)) == null ? void 0 : _c[2]) ?? 0, N = ((_d = r.get(k)) == null ? void 0 : _d[2]) ?? 0;
        return (1 - f) * (1 - m) * T + f * (1 - m) * G + f * m * S + (1 - f) * m * N;
      }
      for (const i of H) {
        const g = i.x * v, d = i.y * v, p = E(g, d), f = Math.abs(p) / v, m = i.label.split(" ")[0], w = J[m], b = (f / w - 1) * 100;
        x[`${m} w_Hek/teor`] = `${f.toFixed(4)} / ${w.toFixed(4)} in (${b >= 0 ? "+" : ""}${b.toFixed(2)}%)`;
      }
      return x;
    },
    runModal(F, o, x) {
      var _a, _b, _c;
      const r = o.nodes.val, M = o.elements.val, t = o.nodeInputs.val, c = o.elementInputs.val;
      if (!r.length || !M.length || !((_a = t.supports) == null ? void 0 : _a.size) || !((_b = c.densities) == null ? void 0 : _b.size)) return;
      const l = new Map(c.densities);
      for (const [a, E] of l) l.set(a, 24);
      try {
        const a = le(r, M, t, {
          ...c,
          densities: l
        }, 12);
        x.render(a, {
          title: `SAFE Ex.4 Placa+Vigas ${V}'\xD7${X}'\xD7${C}"  \u03BB=${F.lambda}`,
          properties: [
            "E=20.7 GPa  \u03BD=0.3"
          ]
        }), console.log(`[SAFE Ex.4 Modal] f\u2081=${(_c = a.frequencies[0]) == null ? void 0 : _c.toFixed(4)} Hz, T\u2081=${(1 / a.frequencies[0]).toFixed(4)} s`);
      } catch (a) {
        console.warn("Modal SAFE Ex.4 error:", a.message);
      }
    }
  };
});
export {
  __tla,
  ue as b
};
