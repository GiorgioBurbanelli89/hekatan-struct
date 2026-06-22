import { m as q, p as N, __tla as __tla_0 } from "./didacticCpp-C0Qfkfmr.js";
let T;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  T = {
    id: "plate-thin",
    name: "Plate Thin (Kirchhoff) \u2014 Hekatan vs SAP -0.32%",
    category: "\u{1F3C1} Benchmarks \xB7 2\uFE0F\u20E3 \xC1reas",
    benchmark: true,
    defaultShellResult: "bendingXX",
    availableShellResults: [
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "shearX",
      "shearY",
      "vonMises",
      "displacementZ"
    ],
    hasModal: true,
    params: {
      Lx: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Lx (m)"
      },
      Ly: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Ly (m)"
      },
      t: {
        default: 0.05,
        min: 0.02,
        max: 0.2,
        step: 0.01,
        label: "espesor t (m)"
      },
      E: {
        default: 3e7,
        min: 1e6,
        max: 2e8,
        step: 1e6,
        label: "E (kN/m\xB2)"
      },
      nu: {
        default: 0.3,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "\u03BD"
      },
      q: {
        default: 5,
        min: 1,
        max: 20,
        step: 0.5,
        label: "q presi\xF3n \u2193 (kN/m\xB2)"
      },
      nx: {
        default: 10,
        min: 4,
        max: 20,
        step: 1,
        label: "nx elementos"
      },
      ny: {
        default: 10,
        min: 4,
        max: 20,
        step: 1,
        label: "ny elementos"
      }
    },
    build(t, n) {
      const a = N({
        E: t.E,
        nu: t.nu,
        thickness: t.t,
        theoryType: 1,
        meshLx: t.Lx,
        meshLy: t.Ly,
        meshNx: Math.round(t.nx),
        meshNy: Math.round(t.ny),
        bcType: "simply-supported",
        pressure: -t.q
      }), y = a.nodeResults.map((e) => [
        e.x,
        e.y,
        0
      ]), l = a.elementResults.map((e) => e.nodes);
      n.nodes.val = y, n.elements.val = l;
      const o = /* @__PURE__ */ new Map();
      l.forEach((e, s) => o.set(s, t.t));
      const h = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), Q = t.Lx / Math.round(t.nx) * (t.Ly / Math.round(t.ny));
      y.forEach((e, s) => {
        const M = Math.abs(e[0]) < 1e-6 || Math.abs(e[0] - t.Lx) < 1e-6 || Math.abs(e[1]) < 1e-6 || Math.abs(e[1] - t.Ly) < 1e-6;
        M && h.set(s, [
          true,
          true,
          true,
          false,
          false,
          false
        ]);
        const m = (Math.abs(e[0]) < 1e-6 || Math.abs(e[0] - t.Lx) < 1e-6) && (Math.abs(e[1]) < 1e-6 || Math.abs(e[1] - t.Ly) < 1e-6) ? 0.25 : M ? 0.5 : 1, Y = -t.q * Q * m;
        x.set(s, [
          0,
          0,
          Y,
          0,
          0,
          0
        ]);
      }), n.nodeInputs.val = {
        supports: h,
        loads: x
      }, n.elementInputs.val = {
        thicknesses: o
      };
      const p = /* @__PURE__ */ new Map();
      a.nodeResults.forEach((e, s) => {
        p.set(s, [
          0,
          0,
          e.w,
          e.bx,
          e.by,
          0
        ]);
      }), n.deformOutputs.val = {
        deformations: p
      };
      const w = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), i = t.t * t.t / 6;
      a.elementResults.forEach((e, s) => {
        w.set(s, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), L.set(s, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), E.set(s, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]), g.set(s, [
          e.Qx,
          e.Qx,
          e.Qx,
          e.Qx
        ]), v.set(s, [
          e.Qy,
          e.Qy,
          e.Qy,
          e.Qy
        ]);
        const M = e.Mxx / i, c = e.Myy / i, f = e.Mxy / i, m = Math.sqrt(M * M - M * c + c * c + 3 * f * f);
        _.set(s, [
          m,
          m,
          m,
          m
        ]);
      }), n.analyzeOutputs.val = {
        bendingXX: w,
        bendingYY: L,
        bendingXY: E,
        shearX: g,
        shearY: v,
        vonMises: _
      };
      let u = 0;
      a.nodeResults.forEach((e) => {
        Math.abs(e.w) > Math.abs(u) && (u = e.w);
      });
      let d = 0, b = 0, r = 0;
      a.elementResults.forEach((e) => {
        Math.abs(e.Mxx) > Math.abs(d) && (d = e.Mxx), Math.abs(e.Myy) > Math.abs(b) && (b = e.Myy), Math.abs(e.Mxy) > Math.abs(r) && (r = e.Mxy);
      }), window.__lastHekatanResult = {
        example: "plate-thin",
        params: {
          Lx: t.Lx,
          Ly: t.Ly,
          t: t.t,
          E: t.E,
          nu: t.nu,
          q: t.q,
          nx: t.nx,
          ny: t.ny
        },
        w_max_m: u,
        w_max_mm: u * 1e3,
        Mxx_max: d,
        Myy_max: b,
        Mxy_max: r,
        n_nodes: a.nodeResults.length,
        n_elements: a.elementResults.length
      }, console.log("HEKATAN_RESULT:", JSON.stringify(window.__lastHekatanResult));
      const R = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
      l.forEach((e, s) => {
        R.set(s, t.E), k.set(s, t.nu), X.set(s, 24);
      }), n.elementInputs.val = {
        thicknesses: o,
        elasticities: R,
        poissonsRatios: k,
        densities: X
      }, n.objects3D.val = [];
    },
    runModal(t, n, a) {
      var _a, _b;
      const y = n.nodes.val, l = n.elements.val, o = n.nodeInputs.val, h = n.elementInputs.val;
      if (!(!y.length || !l.length || !((_a = o.supports) == null ? void 0 : _a.size) || !((_b = h.densities) == null ? void 0 : _b.size))) try {
        const x = q(y, l, o, h, 12);
        a.render(x, {
          title: `Plate Thin ${t.Lx}\xD7${t.Ly}m t=${t.t}m`,
          properties: [
            `E=${(t.E / 1e6).toFixed(1)} GPa  \u03BD=${t.nu}  \u03C1=24 kN/m\xB3`
          ]
        });
      } catch (x) {
        console.warn("Modal plate-thin error:", x.message);
      }
    }
  };
});
export {
  __tla,
  T as p
};
