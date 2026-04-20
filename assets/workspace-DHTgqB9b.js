import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as b, P as K } from "./theme-CzzIlc4y.js";
import { g as $ } from "./getViewer-BLqMEmXo.js";
import { g as G } from "./styles-B8h3dtQW.js";
import { c as Q } from "./renderModalTable-29W4CuGz.js";
import { z as J, __tla as __tla_0 } from "./zapataVigaAmarre--wz0yhpH.js";
import { z as W, __tla as __tla_1 } from "./zapataAislada-CkK0kOEY.js";
import { p as z, d as N, __tla as __tla_2 } from "./didacticCpp-CZmuvtpn.js";
import { a as R } from "./analyze-ClLKGn9k.js";
import { d as O, f as T } from "./units-CVPhvG5E.js";
import "./Text-CBH-tcJP.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })()
]).then(async () => {
  const Z = {
    id: "plate-thin",
    name: "Plate Thin (Kirchhoff)",
    category: "Placas",
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
        default: -5,
        min: -20,
        max: -1,
        step: -0.5,
        label: "q presi\xF3n (kN/m\xB2)"
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
    build(e, a) {
      const t = z({
        E: e.E,
        nu: e.nu,
        thickness: e.t,
        theoryType: 1,
        meshLx: e.Lx,
        meshLy: e.Ly,
        meshNx: Math.round(e.nx),
        meshNy: Math.round(e.ny),
        bcType: "simply-supported",
        pressure: e.q
      }), i = t.nodeResults.map((o) => [
        o.x,
        o.y,
        0
      ]), r = t.elementResults.map((o) => o.nodes);
      a.nodes.val = i, a.elements.val = r;
      const l = /* @__PURE__ */ new Map();
      r.forEach((o, u) => l.set(u, e.t)), a.nodeInputs.val = {}, a.elementInputs.val = {
        thicknesses: l
      };
      const m = /* @__PURE__ */ new Map();
      t.nodeResults.forEach((o, u) => {
        m.set(u, [
          0,
          0,
          o.w,
          o.bx,
          o.by,
          0
        ]);
      }), a.deformOutputs.val = {
        deformations: m
      }, a.analyzeOutputs.val = {}, a.objects3D.val = [];
    }
  }, ee = {
    id: "plate-thick",
    name: "Plate Thick (Mindlin-Reissner)",
    category: "Placas",
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
        default: 0.3,
        min: 0.1,
        max: 0.8,
        step: 0.05,
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
        default: -10,
        min: -30,
        max: -1,
        step: -1,
        label: "q presi\xF3n (kN/m\xB2)"
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
    build(e, a) {
      const t = z({
        E: e.E,
        nu: e.nu,
        thickness: e.t,
        theoryType: 0,
        meshLx: e.Lx,
        meshLy: e.Ly,
        meshNx: Math.round(e.nx),
        meshNy: Math.round(e.ny),
        bcType: "simply-supported",
        pressure: e.q
      }), i = t.nodeResults.map((o) => [
        o.x,
        o.y,
        0
      ]), r = t.elementResults.map((o) => o.nodes);
      a.nodes.val = i, a.elements.val = r;
      const l = /* @__PURE__ */ new Map();
      r.forEach((o, u) => l.set(u, e.t)), a.nodeInputs.val = {}, a.elementInputs.val = {
        thicknesses: l
      };
      const m = /* @__PURE__ */ new Map();
      t.nodeResults.forEach((o, u) => {
        m.set(u, [
          0,
          0,
          o.w,
          o.bx,
          o.by,
          0
        ]);
      }), a.deformOutputs.val = {
        deformations: m
      }, a.analyzeOutputs.val = {}, a.objects3D.val = [];
    }
  }, te = {
    id: "membrana",
    name: "Membrana (Plane Stress)",
    category: "Placas",
    params: {
      Lx: {
        default: 4,
        min: 1,
        max: 10,
        step: 0.5,
        label: "Lx (m)"
      },
      Ly: {
        default: 2,
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
        default: 2e8,
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
        default: -10,
        min: -30,
        max: -1,
        step: -1,
        label: "q presi\xF3n (kN/m\xB2)"
      },
      nx: {
        default: 12,
        min: 4,
        max: 20,
        step: 1,
        label: "nx"
      },
      ny: {
        default: 6,
        min: 3,
        max: 20,
        step: 1,
        label: "ny"
      }
    },
    build(e, a) {
      const t = z({
        E: e.E,
        nu: e.nu,
        thickness: e.t,
        theoryType: 2,
        meshLx: e.Lx,
        meshLy: e.Ly,
        meshNx: Math.round(e.nx),
        meshNy: Math.round(e.ny),
        bcType: "simply-supported",
        pressure: e.q
      }), i = t.nodeResults.map((o) => [
        o.x,
        o.y,
        0
      ]), r = t.elementResults.map((o) => o.nodes);
      a.nodes.val = i, a.elements.val = r;
      const l = /* @__PURE__ */ new Map();
      r.forEach((o, u) => l.set(u, e.t)), a.nodeInputs.val = {}, a.elementInputs.val = {
        thicknesses: l
      };
      const m = /* @__PURE__ */ new Map();
      t.nodeResults.forEach((o, u) => {
        m.set(u, [
          0,
          0,
          o.w,
          o.bx,
          o.by,
          0
        ]);
      }), a.deformOutputs.val = {
        deformations: m
      }, a.analyzeOutputs.val = {}, a.objects3D.val = [];
    }
  }, ne = {
    id: "shell-thin",
    name: "Shell Thin (Kirchhoff-Love)",
    category: "C\xE1scaras",
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
        min: 0.01,
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
        default: 0.2,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "\u03BD"
      },
      q: {
        default: -5,
        min: -20,
        max: -1,
        step: -0.5,
        label: "q presi\xF3n (kN/m\xB2)"
      },
      nx: {
        default: 8,
        min: 4,
        max: 16,
        step: 1,
        label: "nx"
      },
      ny: {
        default: 8,
        min: 4,
        max: 16,
        step: 1,
        label: "ny"
      }
    },
    build(e, a) {
      const t = Math.round(e.nx), i = Math.round(e.ny), r = [];
      for (let n = 0; n <= i; n++) for (let s = 0; s <= t; s++) r.push([
        s * e.Lx / t,
        n * e.Ly / i,
        0
      ]);
      const l = [];
      for (let n = 0; n < i; n++) for (let s = 0; s < t; s++) {
        const f = n * (t + 1) + s;
        l.push([
          f,
          f + 1,
          f + 1 + (t + 1),
          f + (t + 1)
        ]);
      }
      const m = /* @__PURE__ */ new Map();
      for (let n = 0; n <= t; n++) m.set(n, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), m.set(i * (t + 1) + n, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let n = 0; n <= i; n++) m.set(n * (t + 1), [
        true,
        true,
        true,
        false,
        false,
        false
      ]), m.set(n * (t + 1) + t, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const o = e.Lx / t * (e.Ly / i), u = /* @__PURE__ */ new Map();
      for (let n = 0; n <= i; n++) for (let s = 0; s <= t; s++) {
        const f = n * (t + 1) + s, g = (s === 0 || s === t) && (n === 0 || n === i) ? 0.25 : s === 0 || s === t || n === 0 || n === i ? 0.5 : 1, H = e.q * o * g;
        u.set(f, [
          0,
          0,
          H,
          0,
          0,
          0
        ]);
      }
      const d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
      l.forEach((n, s) => {
        d.set(s, e.t), c.set(s, e.E), p.set(s, e.nu), k.set(s, 24);
      }), a.nodes.val = r, a.elements.val = l, a.nodeInputs.val = {
        supports: m,
        loads: u
      }, a.elementInputs.val = {
        thicknesses: d,
        elasticities: c,
        poissonsRatios: p,
        densities: k
      };
      try {
        a.deformOutputs.val = N(r, l, {
          supports: m,
          loads: u
        }, a.elementInputs.val), a.analyzeOutputs.val = R(r, l, a.elementInputs.val, a.deformOutputs.val);
      } catch (n) {
        console.error("Shell thin solver error:", n);
      }
      a.objects3D.val = [];
    }
  }, ae = {
    id: "shell-thick",
    name: "Shell Thick (Mindlin / MITC4)",
    category: "C\xE1scaras",
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
        default: 0.3,
        min: 0.1,
        max: 0.8,
        step: 0.05,
        label: "espesor t (m)"
      },
      E: {
        default: 25e6,
        min: 1e6,
        max: 2e8,
        step: 1e6,
        label: "E (kN/m\xB2)"
      },
      nu: {
        default: 0.2,
        min: 0.1,
        max: 0.4,
        step: 0.01,
        label: "\u03BD"
      },
      q: {
        default: -10,
        min: -30,
        max: -1,
        step: -1,
        label: "q presi\xF3n (kN/m\xB2)"
      },
      nx: {
        default: 8,
        min: 4,
        max: 16,
        step: 1,
        label: "nx"
      },
      ny: {
        default: 8,
        min: 4,
        max: 16,
        step: 1,
        label: "ny"
      }
    },
    build(e, a) {
      const t = Math.round(e.nx), i = Math.round(e.ny), r = [];
      for (let n = 0; n <= i; n++) for (let s = 0; s <= t; s++) r.push([
        s * e.Lx / t,
        n * e.Ly / i,
        0
      ]);
      const l = [];
      for (let n = 0; n < i; n++) for (let s = 0; s < t; s++) {
        const f = n * (t + 1) + s;
        l.push([
          f,
          f + 1,
          f + 1 + (t + 1),
          f + (t + 1)
        ]);
      }
      const m = /* @__PURE__ */ new Map();
      for (let n = 0; n <= t; n++) m.set(n, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), m.set(i * (t + 1) + n, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let n = 0; n <= i; n++) m.set(n * (t + 1), [
        true,
        true,
        true,
        false,
        false,
        false
      ]), m.set(n * (t + 1) + t, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const o = e.Lx / t * (e.Ly / i), u = /* @__PURE__ */ new Map();
      for (let n = 0; n <= i; n++) for (let s = 0; s <= t; s++) {
        const f = n * (t + 1) + s, g = (s === 0 || s === t) && (n === 0 || n === i) ? 0.25 : s === 0 || s === t || n === 0 || n === i ? 0.5 : 1;
        u.set(f, [
          0,
          0,
          e.q * o * g,
          0,
          0,
          0
        ]);
      }
      const d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
      l.forEach((n, s) => {
        d.set(s, e.t), c.set(s, e.E), p.set(s, e.nu), k.set(s, 24);
      }), a.nodes.val = r, a.elements.val = l, a.nodeInputs.val = {
        supports: m,
        loads: u
      }, a.elementInputs.val = {
        thicknesses: d,
        elasticities: c,
        poissonsRatios: p,
        densities: k
      };
      try {
        a.deformOutputs.val = N(r, l, {
          supports: m,
          loads: u
        }, a.elementInputs.val), a.analyzeOutputs.val = R(r, l, a.elementInputs.val, a.deformOutputs.val);
      } catch (n) {
        console.error("Shell thick solver error:", n);
      }
      a.objects3D.val = [];
    }
  }, L = [
    Z,
    ee,
    te,
    ne,
    ae,
    W,
    J
  ], q = b.state([]), _ = b.state([]), B = b.state({}), S = b.state({}), C = b.state({}), D = b.state({}), A = b.state([]), h = {
    nodes: q,
    elements: _,
    nodeInputs: B,
    elementInputs: S,
    deformOutputs: C,
    analyzeOutputs: D,
    objects3D: A
  };
  let x = null, y = {}, w = null;
  const v = Q();
  v.div.style.display = "none";
  function F() {
    h.objects3D.val = [], h.nodes.val = [], h.elements.val = [], h.nodeInputs.val = {}, h.elementInputs.val = {}, h.deformOutputs.val = {}, h.analyzeOutputs.val = {};
  }
  function U(e) {
    x = e, y = Object.fromEntries(Object.entries(e.params).map(([a, t]) => [
      a,
      t.default
    ])), F(), e.build(y, h, v), se();
  }
  function j() {
    x && (F(), x.build(y, h, v));
  }
  const M = document.createElement("div");
  M.style.cssText = "position:fixed;top:16px;right:16px;width:320px;z-index:100;max-height:90vh;overflow-y:auto";
  document.body.appendChild(M);
  function E(e) {
    const a = V.__ctx;
    if (!a) return;
    const { camera: t, controls: i, render: r } = a, l = i.target.clone(), m = t.position.distanceTo(l) || 10;
    switch (e) {
      case "iso":
        t.position.set(l.x + m * 0.6, l.y - m * 0.6, l.z + m * 0.6);
        break;
      case "plan":
        t.position.set(l.x, l.y, l.z + m);
        break;
      case "elevX":
        t.position.set(l.x + m, l.y, l.z);
        break;
      case "elevY":
        t.position.set(l.x, l.y + m, l.z);
        break;
    }
    t.up.set(0, 0, 1), t.lookAt(l), i.update(), r == null ? void 0 : r();
  }
  function se() {
    if (w && (w.dispose(), w = null), M.innerHTML = "", !x) return;
    const e = new K({
      container: M,
      title: x.name
    }), a = {
      id: x.id
    }, t = Object.fromEntries(L.map((d) => [
      `${d.category} \xB7 ${d.name}`,
      d.id
    ]));
    e.addBinding(a, "id", {
      label: "Ejemplo",
      options: t
    }).on("change", (d) => {
      const c = L.find((p) => p.id === d.value);
      c && U(c);
    });
    const i = e.addFolder({
      title: "Vista",
      expanded: false
    });
    i.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => E("iso")), i.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => E("plan")), i.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => E("elevX")), i.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => E("elevY"));
    const r = e.addFolder({
      title: "Unidades",
      expanded: false
    }), l = {
      force: T.val,
      disp: O.val
    };
    r.addBinding(l, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (d) => {
      T.val = d.value, j();
    }), r.addBinding(l, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (d) => {
      O.val = d.value, j();
    });
    const m = e.addFolder({
      title: "Par\xE1metros"
    });
    let o = null;
    const u = () => {
      o !== null && clearTimeout(o), o = window.setTimeout(() => {
        o = null, j();
      }, 120);
    };
    for (const [d, c] of Object.entries(x.params)) {
      const p = {
        label: c.label ?? d
      };
      c.options !== void 0 ? p.options = c.options : (c.min !== void 0 && (p.min = c.min), c.max !== void 0 && (p.max = c.max), c.step !== void 0 && (p.step = c.step)), m.addBinding(y, d, p).on("change", () => {
        (x == null ? void 0 : x.onParamChange) && (x.onParamChange(d, y), e.refresh()), u();
      });
    }
    x.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      v.div.style.display = "block", x.runModal && x.runModal(y, h, v);
    }), w = e;
  }
  const le = {
    deformedShape: true,
    shellResults: "pressure",
    gridSize: 10
  }, V = $({
    mesh: {
      nodes: q,
      elements: _,
      nodeInputs: B,
      elementInputs: S,
      deformOutputs: C,
      analyzeOutputs: D
    },
    objects3D: A,
    settingsObj: le
  });
  document.body.append(V, G({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(v.div);
  const P = new URLSearchParams(window.location.search).get("t"), I = P && L.find((e) => e.id === P) || L.find((e) => e.id === "zapata-aislada") || L[0];
  I && U(I);
});
