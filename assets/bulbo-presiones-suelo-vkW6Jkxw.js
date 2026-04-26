import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as l, P as ge } from "./theme-2eEBQPmF.js";
import { h as be, __tla as __tla_0 } from "./h8-C0kIpAby.js";
import { g as we, a as Q, e as W } from "./getViewer-BrlnwplQ.js";
import { e as ye } from "./makeDraggable-zx2br6Yh.js";
import { g as Me } from "./getParameters-CIJBOwMB.js";
import { g as _e } from "./styles-Cjdl64P4.js";
import { __tla as __tla_1 } from "./deform-CGyu4ATa.js";
import "./Text-DyNVkyur.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const r = {
    Lx: {
      value: l.state(20),
      min: 5,
      max: 40,
      step: 1,
      label: "Lx suelo (m)"
    },
    Ly: {
      value: l.state(20),
      min: 5,
      max: 40,
      step: 1,
      label: "Ly suelo (m)"
    },
    Lz: {
      value: l.state(10),
      min: 4,
      max: 20,
      step: 1,
      label: "Lz suelo (m)"
    },
    nx: {
      value: l.state(6),
      min: 4,
      max: 16,
      step: 2,
      label: "nx mesh"
    },
    ny: {
      value: l.state(6),
      min: 4,
      max: 16,
      step: 2,
      label: "ny mesh"
    },
    nz: {
      value: l.state(3),
      min: 2,
      max: 8,
      step: 1,
      label: "nz mesh"
    },
    Es: {
      value: l.state(2e4),
      min: 5e3,
      max: 1e5,
      step: 1e3,
      label: "Es suelo (kN/m\xB2)"
    },
    nu: {
      value: l.state(0.42),
      min: 0.2,
      max: 0.49,
      step: 0.01,
      label: "\u03BD suelo"
    },
    Rx: {
      value: l.state(5),
      min: 1,
      max: 15,
      step: 0.5,
      label: "Rx carga (m)"
    },
    Ry: {
      value: l.state(3),
      min: 1,
      max: 15,
      step: 0.5,
      label: "Ry carga (m)"
    },
    w: {
      value: l.state(100),
      min: 10,
      max: 500,
      step: 10,
      label: "w (kN/m\xB2)"
    },
    showSlice: {
      value: l.state(1),
      min: 0,
      max: 1,
      step: 1,
      label: "Vista rebanada XZ (1=si)"
    }
  }, ee = l.state([]), te = l.state([]), se = l.state({}), ae = l.state({}), ne = l.state({}), oe = l.state({}), le = l.state({
    N: 0,
    nElems: 0,
    nDOF: 0,
    s33_min: 0,
    s33_max: 0,
    uz_max: 0,
    elapsed: 0
  });
  l.derive(() => {
    const n = r.Lx.value.val, I = r.Ly.value.val, me = r.Lz.value.val, p = Math.round(r.nx.value.val), u = Math.round(r.ny.value.val), _ = Math.round(r.nz.value.val), R = r.Es.value.val, N = r.nu.value.val, Z = r.Rx.value.val, Y = r.Ry.value.val, ce = r.w.value.val, z = Math.round(r.showSlice.value.val) === 1, L = n / p, O = I / u, pe = me / _, d = (e, t, a) => a * (p + 1) * (u + 1) + t * (p + 1) + e, S = [];
    for (let e = 0; e <= _; e++) for (let t = 0; t <= u; t++) for (let a = 0; a <= p; a++) S.push([
      -n / 2 + a * L,
      -I / 2 + t * O,
      -e * pe
    ]);
    const E = [];
    for (let e = 0; e < _; e++) for (let t = 0; t < u; t++) for (let a = 0; a < p; a++) E.push([
      d(a, t, e + 1),
      d(a + 1, t, e + 1),
      d(a + 1, t + 1, e + 1),
      d(a, t + 1, e + 1),
      d(a, t, e),
      d(a + 1, t, e),
      d(a + 1, t + 1, e),
      d(a, t + 1, e)
    ]);
    const f = /* @__PURE__ */ new Map();
    for (let e = 0; e <= u; e++) for (let t = 0; t <= p; t++) f.set(d(t, e, _), [
      true,
      true,
      true
    ]);
    for (let e = 0; e <= _; e++) for (let t = 0; t <= u; t++) {
      const a = d(0, t, e), s = d(p, t, e), o = f.get(a) ?? [
        false,
        false,
        false
      ], i = f.get(s) ?? [
        false,
        false,
        false
      ];
      f.set(a, [
        true,
        o[1],
        o[2]
      ]), f.set(s, [
        true,
        i[1],
        i[2]
      ]);
    }
    for (let e = 0; e <= _; e++) for (let t = 0; t <= p; t++) {
      const a = d(t, 0, e), s = d(t, u, e), o = f.get(a) ?? [
        false,
        false,
        false
      ], i = f.get(s) ?? [
        false,
        false,
        false
      ];
      f.set(a, [
        o[0],
        true,
        o[2]
      ]), f.set(s, [
        i[0],
        true,
        i[2]
      ]);
    }
    const ue = -Z / 2, fe = Z / 2, he = -Y / 2, ve = Y / 2, P = /* @__PURE__ */ new Map();
    for (let e = 0; e <= u; e++) for (let t = 0; t <= p; t++) {
      const a = -n / 2 + t * L, s = -I / 2 + e * O;
      if (a < ue - 1e-6 || a > fe + 1e-6 || s < he - 1e-6 || s > ve + 1e-6) continue;
      let o = L, i = O;
      (t === 0 || t === p) && (o = L / 2), (e === 0 || e === u) && (i = O / 2);
      const c = o * i, m = -ce * c;
      P.set(d(t, e, 0), [
        0,
        0,
        m
      ]);
    }
    const C = S.length;
    console.log(`Bulbo presiones: ${C} nodos, ${E.length} hex8, ${3 * C} DOFs`);
    let h;
    try {
      h = be({
        nodes: S,
        elements: E,
        E: R,
        nu: N,
        supports: f,
        loads: P
      }), console.log(`H8 resuelto en ${h.elapsedMs.toFixed(0)} ms`);
    } catch (e) {
      console.warn("Bulbo presiones H8:", (e == null ? void 0 : e.message) ?? e), h = null;
    }
    const xe = S.map((e) => [
      e[0],
      e[1],
      e[2]
    ]), v = [], x = {
      elasticities: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map()
    };
    function g(e, t, a, s) {
      v.push([
        e,
        t,
        a,
        s
      ]);
      const o = v.length - 1;
      x.elasticities.set(o, R), x.poissonsRatios.set(o, N), x.thicknesses.set(o, 1e-3), x.shearModuli.set(o, R / (2 * (1 + N))), x.densities.set(o, 18 / 9.80665), x.areas.set(o, 0), x.momentsOfInertiaY.set(o, 0), x.momentsOfInertiaZ.set(o, 0), x.torsionalConstants.set(o, 0);
    }
    const T = Math.floor(u / 2), k = /* @__PURE__ */ new Map();
    let y = 0;
    for (let e = 0; e < _; e++) for (let t = 0; t < u; t++) for (let a = 0; a < p; a++) {
      if (z && t !== T) {
        y++;
        continue;
      }
      const s = (i, c, m) => d(a + i, t + c, e + m), o = v.length;
      if (g(s(0, 0, 0), s(1, 0, 0), s(1, 0, 1), s(0, 0, 1)), k.set(o, y), !z || t === T) {
        if (z) {
          const m = v.length;
          g(s(0, 1, 0), s(1, 1, 0), s(1, 1, 1), s(0, 1, 1)), k.set(m, y);
        }
        const i = v.length;
        g(s(0, 0, 0), s(1, 0, 0), s(1, 1, 0), s(0, 1, 0)), k.set(i, y);
        const c = v.length;
        if (g(s(0, 0, 1), s(1, 0, 1), s(1, 1, 1), s(0, 1, 1)), k.set(c, y), !z) g(s(0, 1, 0), s(1, 1, 0), s(1, 1, 1), s(0, 1, 1)), g(s(0, 0, 0), s(0, 1, 0), s(0, 1, 1), s(0, 0, 1)), g(s(1, 0, 0), s(1, 1, 0), s(1, 1, 1), s(1, 0, 1));
        else {
          if (a === 0) {
            const m = v.length;
            g(s(0, 0, 0), s(0, 1, 0), s(0, 1, 1), s(0, 0, 1)), k.set(m, y);
          }
          if (a === p - 1) {
            const m = v.length;
            g(s(1, 0, 0), s(1, 1, 0), s(1, 1, 1), s(1, 0, 1)), k.set(m, y);
          }
        }
      }
      y++;
    }
    const V = {
      deformations: /* @__PURE__ */ new Map()
    };
    h && h.displacements.forEach(([e, t, a], s) => {
      V.deformations.set(s, [
        e,
        t,
        a,
        0,
        0,
        0
      ]);
    });
    const H = {};
    if (h) {
      const e = /* @__PURE__ */ new Map();
      E.forEach((a, s) => {
        const o = h.stressPerElement.get(s) || [];
        let i = 0, c = 0;
        for (const m of o) i += m[2], c++;
        i = c > 0 ? i / c : 0;
        for (const m of a) {
          const A = e.get(m) || {
            sum: 0,
            count: 0
          };
          A.sum += i, A.count += 1, e.set(m, A);
        }
      });
      const t = /* @__PURE__ */ new Map();
      v.forEach((a, s) => {
        const o = a.map((i) => {
          const c = e.get(i);
          return c ? c.sum / c.count : 0;
        });
        t.set(s, [
          o[0],
          o[1],
          o[2],
          o[3]
        ]);
      }), H.vonMises = t;
    }
    const U = /* @__PURE__ */ new Map();
    f.forEach((e, t) => U.set(t, [
      e[0],
      e[1],
      e[2],
      true,
      true,
      true
    ]));
    const $ = /* @__PURE__ */ new Map();
    P.forEach((e, t) => $.set(t, [
      e[0],
      e[1],
      e[2],
      0,
      0,
      0
    ]));
    let G = 0, q = 0, j = 0;
    if (h) {
      let e = 1 / 0, t = -1 / 0;
      h.vonMisesPerElement.forEach((a) => {
        a.forEach((s) => {
          s < e && (e = s), s > t && (t = s);
        });
      }), G = e === 1 / 0 ? 0 : e, q = t === -1 / 0 ? 0 : t, h.displacements.forEach(([, , a]) => {
        Math.abs(a) > Math.abs(j) && (j = a);
      });
    }
    le.val = {
      N: C,
      nElems: E.length,
      nDOF: 3 * C,
      s33_min: G,
      s33_max: q,
      uz_max: j,
      elapsed: (h == null ? void 0 : h.elapsedMs) ?? 0
    }, ee.val = xe, te.val = v, se.val = {
      supports: U,
      loads: $
    }, ae.val = x, ne.val = V, oe.val = H;
  });
  const ie = we({
    mesh: {
      nodes: ee,
      elements: te,
      nodeInputs: se,
      elementInputs: ae,
      deformOutputs: ne,
      analyzeOutputs: oe
    },
    settingsObj: {
      deformedShape: false,
      shellResults: "vonMises",
      gridSize: 25,
      deformScale: 100,
      custom3D: false,
      loads: true,
      supports: true,
      showCotas: false,
      displayScale: 0.5
    }
  }), D = document.createElement("div");
  D.style.cssText = "position:fixed;top:8px;right:8px;width:320px;max-height:90vh;overflow-y:auto;z-index:9999;";
  const B = new ge({
    title: "\u{1F30D} Bulbo de Presiones (Serquen SF-70)",
    container: D,
    expanded: true
  }), M = {
    N: 0,
    nElems: 0,
    nDOF: 0,
    s33_min: 0,
    s33_max: 0,
    uz_max: 0,
    elapsed: 0
  }, F = B.addFolder({
    title: "Estad\xEDsticas malla H8"
  });
  F.addBinding(M, "N", {
    readonly: true,
    label: "Nodos",
    format: (n) => n.toFixed(0)
  });
  F.addBinding(M, "nElems", {
    readonly: true,
    label: "Elementos hex8",
    format: (n) => n.toFixed(0)
  });
  F.addBinding(M, "nDOF", {
    readonly: true,
    label: "DOFs",
    format: (n) => n.toFixed(0)
  });
  F.addBinding(M, "elapsed", {
    readonly: true,
    label: "solve (ms)",
    format: (n) => n.toFixed(0)
  });
  const X = B.addFolder({
    title: "Resultados (vonMises proxy de S33)"
  });
  X.addBinding(M, "s33_min", {
    readonly: true,
    label: "vM min (kN/m\xB2)",
    format: (n) => n.toExponential(3)
  });
  X.addBinding(M, "s33_max", {
    readonly: true,
    label: "vM max (kN/m\xB2)",
    format: (n) => n.toExponential(3)
  });
  X.addBinding(M, "uz_max", {
    readonly: true,
    label: "u_z max (m)",
    format: (n) => n.toExponential(3)
  });
  const b = B.addFolder({
    title: "\u2702\uFE0F Planos de corte X/Y/Z",
    expanded: true
  }), w = window.__hekatanClip, J = r.Lx.value.rawVal, K = r.Ly.value.rawVal, ke = r.Lz.value.rawVal;
  b.addBinding(w, "enableX", {
    label: "Cortar X"
  }).on("change", () => window.__hekatanClipApply());
  b.addBinding(w, "posX", {
    min: -J / 2,
    max: J / 2,
    step: 0.1,
    label: "  pos X (m)"
  }).on("change", () => window.__hekatanClipApply());
  b.addBinding(w, "invertX", {
    label: "  invertir X"
  }).on("change", () => window.__hekatanClipApply());
  b.addBinding(w, "enableY", {
    label: "Cortar Y"
  }).on("change", () => window.__hekatanClipApply());
  b.addBinding(w, "posY", {
    min: -K / 2,
    max: K / 2,
    step: 0.1,
    label: "  pos Y (m)"
  }).on("change", () => window.__hekatanClipApply());
  b.addBinding(w, "invertY", {
    label: "  invertir Y"
  }).on("change", () => window.__hekatanClipApply());
  b.addBinding(w, "enableZ", {
    label: "Cortar Z"
  }).on("change", () => window.__hekatanClipApply());
  b.addBinding(w, "posZ", {
    min: -ke,
    max: 0,
    step: 0.1,
    label: "  pos Z (m)"
  }).on("change", () => window.__hekatanClipApply());
  b.addBinding(w, "invertZ", {
    label: "  invertir Z"
  }).on("change", () => window.__hekatanClipApply());
  const re = B.addFolder({
    title: "Unidades",
    expanded: false
  }), de = {
    stress: W.val,
    disp: Q.val
  };
  re.addBinding(de, "stress", {
    options: {
      "kN/m\xB2": "kN/m\xB2",
      kPa: "kPa",
      MPa: "MPa",
      "kgf/cm\xB2": "kgf/cm\xB2",
      "tonf/m\xB2": "tonf/m\xB2",
      ksi: "ksi",
      psi: "psi"
    },
    label: "Tensi\xF3n"
  }).on("change", (n) => {
    W.val = n.value;
  });
  re.addBinding(de, "disp", {
    options: {
      m: "m",
      cm: "cm",
      mm: "mm",
      \u00B5m: "\xB5m"
    },
    label: "Desplaz."
  }).on("change", (n) => {
    Q.val = n.value;
  });
  document.body.append(D);
  l.derive(() => {
    Object.assign(M, le.val), B.refresh();
  });
  document.body.append(Me(r), ie, _e({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct/blob/main/examples/src/bulbo-presiones-suelo/main.ts"
  }));
  setTimeout(() => ye(), 200);
  setTimeout(() => {
    var _a;
    const n = ie.__ctx;
    (n == null ? void 0 : n.camera) && (n == null ? void 0 : n.controls) && (n.camera.up.set(0, 0, 1), n.camera.position.set(20, -25, 18), n.controls.target.set(0, 0, -5), n.controls.update(), (_a = n.render) == null ? void 0 : _a.call(n));
  }, 800);
});
