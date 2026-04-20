import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as b, P as K } from "./theme-CzzIlc4y.js";
import { g as $ } from "./getViewer-PGBsv6Zp.js";
import { g as G } from "./styles-B8h3dtQW.js";
import { c as Q } from "./renderModalTable-29W4CuGz.js";
import { z as J, __tla as __tla_0 } from "./zapataVigaAmarre-DrRBSNUQ.js";
import { z as W, __tla as __tla_1 } from "./zapataAislada-CgpMbKIV.js";
import { p as z, d as N, __tla as __tla_2 } from "./didacticCpp-Bnj9OwqQ.js";
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
      const s = /* @__PURE__ */ new Map();
      r.forEach((o, d) => s.set(d, e.t)), a.nodeInputs.val = {}, a.elementInputs.val = {
        thicknesses: s
      };
      const m = /* @__PURE__ */ new Map();
      t.nodeResults.forEach((o, d) => {
        m.set(d, [
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
      const s = /* @__PURE__ */ new Map();
      r.forEach((o, d) => s.set(d, e.t)), a.nodeInputs.val = {}, a.elementInputs.val = {
        thicknesses: s
      };
      const m = /* @__PURE__ */ new Map();
      t.nodeResults.forEach((o, d) => {
        m.set(d, [
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
      const s = /* @__PURE__ */ new Map();
      r.forEach((o, d) => s.set(d, e.t)), a.nodeInputs.val = {}, a.elementInputs.val = {
        thicknesses: s
      };
      const m = /* @__PURE__ */ new Map();
      t.nodeResults.forEach((o, d) => {
        m.set(d, [
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
      for (let n = 0; n <= i; n++) for (let l = 0; l <= t; l++) r.push([
        l * e.Lx / t,
        n * e.Ly / i,
        0
      ]);
      const s = [];
      for (let n = 0; n < i; n++) for (let l = 0; l < t; l++) {
        const f = n * (t + 1) + l;
        s.push([
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
      const o = e.Lx / t * (e.Ly / i), d = /* @__PURE__ */ new Map();
      for (let n = 0; n <= i; n++) for (let l = 0; l <= t; l++) {
        const f = n * (t + 1) + l, M = (l === 0 || l === t) && (n === 0 || n === i) ? 0.25 : l === 0 || l === t || n === 0 || n === i ? 0.5 : 1, H = e.q * o * M;
        d.set(f, [
          0,
          0,
          H,
          0,
          0,
          0
        ]);
      }
      const u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
      s.forEach((n, l) => {
        u.set(l, e.t), c.set(l, e.E), p.set(l, e.nu), k.set(l, 24);
      }), a.nodes.val = r, a.elements.val = s, a.nodeInputs.val = {
        supports: m,
        loads: d
      }, a.elementInputs.val = {
        thicknesses: u,
        elasticities: c,
        poissonsRatios: p,
        densities: k
      };
      try {
        a.deformOutputs.val = N(r, s, {
          supports: m,
          loads: d
        }, a.elementInputs.val), a.analyzeOutputs.val = R(r, s, a.elementInputs.val, a.deformOutputs.val);
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
      for (let n = 0; n <= i; n++) for (let l = 0; l <= t; l++) r.push([
        l * e.Lx / t,
        n * e.Ly / i,
        0
      ]);
      const s = [];
      for (let n = 0; n < i; n++) for (let l = 0; l < t; l++) {
        const f = n * (t + 1) + l;
        s.push([
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
      const o = e.Lx / t * (e.Ly / i), d = /* @__PURE__ */ new Map();
      for (let n = 0; n <= i; n++) for (let l = 0; l <= t; l++) {
        const f = n * (t + 1) + l, M = (l === 0 || l === t) && (n === 0 || n === i) ? 0.25 : l === 0 || l === t || n === 0 || n === i ? 0.5 : 1;
        d.set(f, [
          0,
          0,
          e.q * o * M,
          0,
          0,
          0
        ]);
      }
      const u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
      s.forEach((n, l) => {
        u.set(l, e.t), c.set(l, e.E), p.set(l, e.nu), k.set(l, 24);
      }), a.nodes.val = r, a.elements.val = s, a.nodeInputs.val = {
        supports: m,
        loads: d
      }, a.elementInputs.val = {
        thicknesses: u,
        elasticities: c,
        poissonsRatios: p,
        densities: k
      };
      try {
        a.deformOutputs.val = N(r, s, {
          supports: m,
          loads: d
        }, a.elementInputs.val), a.analyzeOutputs.val = R(r, s, a.elementInputs.val, a.deformOutputs.val);
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
  let x = null, y = {}, g = null;
  const v = Q();
  v.div.style.display = "none";
  function X() {
    h.objects3D.val = [], h.nodes.val = [], h.elements.val = [], h.nodeInputs.val = {}, h.elementInputs.val = {}, h.deformOutputs.val = {}, h.analyzeOutputs.val = {};
  }
  function F(e) {
    x = e, y = Object.fromEntries(Object.entries(e.params).map(([a, t]) => [
      a,
      t.default
    ])), X(), e.build(y, h, v), le();
  }
  function j() {
    x && (X(), x.build(y, h, v));
  }
  const E = document.createElement("div");
  E.style.cssText = "position:fixed;top:16px;right:16px;width:320px;z-index:100;max-height:90vh;overflow-y:auto";
  document.body.appendChild(E);
  function w(e) {
    const a = U.__ctx;
    if (!a) return;
    const { camera: t, controls: i, render: r } = a, s = i.target.clone(), m = t.position.distanceTo(s) || 10;
    switch (e) {
      case "iso":
        t.position.set(s.x + m * 0.6, s.y - m * 0.6, s.z + m * 0.6);
        break;
      case "plan":
        t.position.set(s.x, s.y, s.z + m);
        break;
      case "elevX":
        t.position.set(s.x + m, s.y, s.z);
        break;
      case "elevY":
        t.position.set(s.x, s.y + m, s.z);
        break;
    }
    t.up.set(0, 0, 1), t.lookAt(s), i.update(), r == null ? void 0 : r();
  }
  function le() {
    if (g && (g.dispose(), g = null), E.innerHTML = "", !x) return;
    const e = new K({
      container: E,
      title: x.name
    }), a = {
      id: x.id
    }, t = Object.fromEntries(L.map((u) => [
      `${u.category} \xB7 ${u.name}`,
      u.id
    ]));
    e.addBinding(a, "id", {
      label: "Ejemplo",
      options: t
    }).on("change", (u) => {
      const c = L.find((p) => p.id === u.value);
      c && F(c);
    });
    const i = e.addFolder({
      title: "Vista",
      expanded: false
    });
    i.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => w("iso")), i.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => w("plan")), i.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => w("elevX")), i.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => w("elevY"));
    const r = e.addFolder({
      title: "Unidades",
      expanded: false
    }), s = {
      force: T.val,
      disp: O.val
    };
    r.addBinding(s, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (u) => {
      T.val = u.value, j();
    }), r.addBinding(s, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (u) => {
      O.val = u.value, j();
    });
    const m = e.addFolder({
      title: "Par\xE1metros"
    });
    let o = null;
    const d = () => {
      o !== null && clearTimeout(o), o = window.setTimeout(() => {
        o = null, j();
      }, 120);
    };
    for (const [u, c] of Object.entries(x.params)) {
      const p = {
        label: c.label ?? u
      };
      c.options !== void 0 ? p.options = c.options : (c.min !== void 0 && (p.min = c.min), c.max !== void 0 && (p.max = c.max), c.step !== void 0 && (p.step = c.step)), m.addBinding(y, u, p).on("change", () => {
        (x == null ? void 0 : x.onParamChange) && (x.onParamChange(u, y), e.refresh()), d();
      });
    }
    x.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      v.div.style.display = "block", x.runModal && x.runModal(y, h, v);
    }), g = e;
  }
  const se = {
    deformedShape: true,
    shellResults: "bendingXX",
    gridSize: 10
  }, U = $({
    mesh: {
      nodes: q,
      elements: _,
      nodeInputs: B,
      elementInputs: S,
      deformOutputs: C,
      analyzeOutputs: D
    },
    objects3D: A,
    settingsObj: se
  });
  document.body.append(U, G({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(v.div);
  const P = new URLSearchParams(window.location.search).get("t"), I = P && L.find((e) => e.id === P) || L.find((e) => e.id === "zapata-aislada") || L[0];
  I && F(I);
});
