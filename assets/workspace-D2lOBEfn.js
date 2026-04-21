import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as b, P as K } from "./theme-CzzIlc4y.js";
import { g as $ } from "./getViewer-glAYEfJX.js";
import { g as G } from "./styles-B8h3dtQW.js";
import { c as Q } from "./renderModalTable-29W4CuGz.js";
import { z as J, __tla as __tla_0 } from "./zapataVigaAmarre-DrRBSNUQ.js";
import { z as W, __tla as __tla_1 } from "./zapataAislada-45tuknCp.js";
import { p as T, d as R, __tla as __tla_2 } from "./didacticCpp-Bnj9OwqQ.js";
import { a as N } from "./analyze-ClLKGn9k.js";
import { d as O, f as P } from "./units-CVPhvG5E.js";
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
    build(t, s) {
      const n = T({
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
      }), m = n.nodeResults.map((e) => [
        e.x,
        e.y,
        0
      ]), r = n.elementResults.map((e) => e.nodes);
      s.nodes.val = m, s.elements.val = r;
      const o = /* @__PURE__ */ new Map();
      r.forEach((e, i) => o.set(i, t.t)), s.nodeInputs.val = {}, s.elementInputs.val = {
        thicknesses: o
      };
      const d = /* @__PURE__ */ new Map();
      n.nodeResults.forEach((e, i) => {
        d.set(i, [
          0,
          0,
          e.w,
          e.bx,
          e.by,
          0
        ]);
      }), s.deformOutputs.val = {
        deformations: d
      };
      const p = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
      n.elementResults.forEach((e, i) => {
        p.set(i, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), c.set(i, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), u.set(i, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
      }), s.analyzeOutputs.val = {
        bendingXX: p,
        bendingYY: c,
        bendingXY: u
      }, s.objects3D.val = [];
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
        default: 10,
        min: 1,
        max: 30,
        step: 1,
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
    build(t, s) {
      const n = T({
        E: t.E,
        nu: t.nu,
        thickness: t.t,
        theoryType: 0,
        meshLx: t.Lx,
        meshLy: t.Ly,
        meshNx: Math.round(t.nx),
        meshNy: Math.round(t.ny),
        bcType: "simply-supported",
        pressure: -t.q
      }), m = n.nodeResults.map((e) => [
        e.x,
        e.y,
        0
      ]), r = n.elementResults.map((e) => e.nodes);
      s.nodes.val = m, s.elements.val = r;
      const o = /* @__PURE__ */ new Map();
      r.forEach((e, i) => o.set(i, t.t)), s.nodeInputs.val = {}, s.elementInputs.val = {
        thicknesses: o
      };
      const d = /* @__PURE__ */ new Map();
      n.nodeResults.forEach((e, i) => {
        d.set(i, [
          0,
          0,
          e.w,
          e.bx,
          e.by,
          0
        ]);
      }), s.deformOutputs.val = {
        deformations: d
      };
      const p = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
      n.elementResults.forEach((e, i) => {
        p.set(i, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), c.set(i, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), u.set(i, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
      }), s.analyzeOutputs.val = {
        bendingXX: p,
        bendingYY: c,
        bendingXY: u
      }, s.objects3D.val = [];
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
        default: 10,
        min: 1,
        max: 30,
        step: 1,
        label: "q tracci\xF3n (kN/m\xB2)"
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
    build(t, s) {
      const n = T({
        E: t.E,
        nu: t.nu,
        thickness: t.t,
        theoryType: 2,
        meshLx: t.Lx,
        meshLy: t.Ly,
        meshNx: Math.round(t.nx),
        meshNy: Math.round(t.ny),
        bcType: "simply-supported",
        pressure: -t.q
      }), m = n.nodeResults.map((e) => [
        e.x,
        e.y,
        0
      ]), r = n.elementResults.map((e) => e.nodes);
      s.nodes.val = m, s.elements.val = r;
      const o = /* @__PURE__ */ new Map();
      r.forEach((e, i) => o.set(i, t.t)), s.nodeInputs.val = {}, s.elementInputs.val = {
        thicknesses: o
      };
      const d = /* @__PURE__ */ new Map();
      n.nodeResults.forEach((e, i) => {
        d.set(i, [
          0,
          0,
          e.w,
          e.bx,
          e.by,
          0
        ]);
      }), s.deformOutputs.val = {
        deformations: d
      };
      const p = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
      n.elementResults.forEach((e, i) => {
        p.set(i, [
          e.Mxx,
          e.Mxx,
          e.Mxx,
          e.Mxx
        ]), c.set(i, [
          e.Myy,
          e.Myy,
          e.Myy,
          e.Myy
        ]), u.set(i, [
          e.Mxy,
          e.Mxy,
          e.Mxy,
          e.Mxy
        ]);
      }), s.analyzeOutputs.val = {
        membraneXX: p,
        membraneYY: c,
        membraneXY: u
      }, s.objects3D.val = [];
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
        default: 5,
        min: 1,
        max: 20,
        step: 0.5,
        label: "q presi\xF3n \u2193 (kN/m\xB2)"
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
    build(t, s) {
      const n = Math.round(t.nx), m = Math.round(t.ny), r = [];
      for (let a = 0; a <= m; a++) for (let l = 0; l <= n; l++) r.push([
        l * t.Lx / n,
        a * t.Ly / m,
        0
      ]);
      const o = [];
      for (let a = 0; a < m; a++) for (let l = 0; l < n; l++) {
        const f = a * (n + 1) + l;
        o.push([
          f,
          f + 1,
          f + 1 + (n + 1),
          f + (n + 1)
        ]);
      }
      const d = /* @__PURE__ */ new Map();
      for (let a = 0; a <= n; a++) d.set(a, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(m * (n + 1) + a, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let a = 0; a <= m; a++) d.set(a * (n + 1), [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(a * (n + 1) + n, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const p = t.Lx / n * (t.Ly / m), c = /* @__PURE__ */ new Map();
      for (let a = 0; a <= m; a++) for (let l = 0; l <= n; l++) {
        const f = a * (n + 1) + l, z = (l === 0 || l === n) && (a === 0 || a === m) ? 0.25 : l === 0 || l === n || a === 0 || a === m ? 0.5 : 1, H = -t.q * p * z;
        c.set(f, [
          0,
          0,
          H,
          0,
          0,
          0
        ]);
      }
      const u = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
      o.forEach((a, l) => {
        u.set(l, t.t), e.set(l, t.E), i.set(l, t.nu), v.set(l, 24);
      }), s.nodes.val = r, s.elements.val = o, s.nodeInputs.val = {
        supports: d,
        loads: c
      }, s.elementInputs.val = {
        thicknesses: u,
        elasticities: e,
        poissonsRatios: i,
        densities: v
      };
      try {
        s.deformOutputs.val = R(r, o, {
          supports: d,
          loads: c
        }, s.elementInputs.val), s.analyzeOutputs.val = N(r, o, s.elementInputs.val, s.deformOutputs.val);
      } catch (a) {
        console.error("Shell thin solver error:", a);
      }
      s.objects3D.val = [];
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
        default: 10,
        min: 1,
        max: 30,
        step: 1,
        label: "q presi\xF3n \u2193 (kN/m\xB2)"
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
    build(t, s) {
      const n = Math.round(t.nx), m = Math.round(t.ny), r = [];
      for (let a = 0; a <= m; a++) for (let l = 0; l <= n; l++) r.push([
        l * t.Lx / n,
        a * t.Ly / m,
        0
      ]);
      const o = [];
      for (let a = 0; a < m; a++) for (let l = 0; l < n; l++) {
        const f = a * (n + 1) + l;
        o.push([
          f,
          f + 1,
          f + 1 + (n + 1),
          f + (n + 1)
        ]);
      }
      const d = /* @__PURE__ */ new Map();
      for (let a = 0; a <= n; a++) d.set(a, [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(m * (n + 1) + a, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      for (let a = 0; a <= m; a++) d.set(a * (n + 1), [
        true,
        true,
        true,
        false,
        false,
        false
      ]), d.set(a * (n + 1) + n, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
      const p = t.Lx / n * (t.Ly / m), c = /* @__PURE__ */ new Map();
      for (let a = 0; a <= m; a++) for (let l = 0; l <= n; l++) {
        const f = a * (n + 1) + l, z = (l === 0 || l === n) && (a === 0 || a === m) ? 0.25 : l === 0 || l === n || a === 0 || a === m ? 0.5 : 1;
        c.set(f, [
          0,
          0,
          -t.q * p * z,
          0,
          0,
          0
        ]);
      }
      const u = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
      o.forEach((a, l) => {
        u.set(l, t.t), e.set(l, t.E), i.set(l, t.nu), v.set(l, 24);
      }), s.nodes.val = r, s.elements.val = o, s.nodeInputs.val = {
        supports: d,
        loads: c
      }, s.elementInputs.val = {
        thicknesses: u,
        elasticities: e,
        poissonsRatios: i,
        densities: v
      };
      try {
        s.deformOutputs.val = R(r, o, {
          supports: d,
          loads: c
        }, s.elementInputs.val), s.analyzeOutputs.val = N(r, o, s.elementInputs.val, s.deformOutputs.val);
      } catch (a) {
        console.error("Shell thick solver error:", a);
      }
      s.objects3D.val = [];
    }
  }, g = [
    Z,
    ee,
    te,
    ne,
    ae,
    W,
    J
  ], q = b.state([]), X = b.state([]), Y = b.state({}), _ = b.state({}), B = b.state({}), S = b.state({}), C = b.state([]), y = {
    nodes: q,
    elements: X,
    nodeInputs: Y,
    elementInputs: _,
    deformOutputs: B,
    analyzeOutputs: S,
    objects3D: C
  };
  let x = null, h = {}, k = null;
  const M = Q();
  M.div.style.display = "none";
  function D() {
    y.objects3D.val = [], y.nodes.val = [], y.elements.val = [], y.nodeInputs.val = {}, y.elementInputs.val = {}, y.deformOutputs.val = {}, y.analyzeOutputs.val = {};
  }
  function A(t) {
    x = t, h = Object.fromEntries(Object.entries(t.params).map(([s, n]) => [
      s,
      n.default
    ])), D(), t.build(h, y, M), se();
  }
  function j() {
    x && (D(), x.build(h, y, M));
  }
  const E = document.createElement("div");
  E.style.cssText = "position:fixed;top:16px;right:16px;width:320px;z-index:100;max-height:90vh;overflow-y:auto";
  document.body.appendChild(E);
  function w(t) {
    const s = F.__ctx;
    if (!s) return;
    const { camera: n, controls: m, render: r } = s, o = m.target.clone(), d = n.position.distanceTo(o) || 10;
    switch (t) {
      case "iso":
        n.position.set(o.x + d * 0.6, o.y - d * 0.6, o.z + d * 0.6);
        break;
      case "plan":
        n.position.set(o.x, o.y, o.z + d);
        break;
      case "elevX":
        n.position.set(o.x + d, o.y, o.z);
        break;
      case "elevY":
        n.position.set(o.x, o.y + d, o.z);
        break;
    }
    n.up.set(0, 0, 1), n.lookAt(o), m.update(), r == null ? void 0 : r();
  }
  function se() {
    if (k && (k.dispose(), k = null), E.innerHTML = "", !x) return;
    const t = new K({
      container: E,
      title: x.name
    }), s = {
      id: x.id
    }, n = Object.fromEntries(g.map((u) => [
      `${u.category} \xB7 ${u.name}`,
      u.id
    ]));
    t.addBinding(s, "id", {
      label: "Ejemplo",
      options: n
    }).on("change", (u) => {
      const e = g.find((i) => i.id === u.value);
      e && A(e);
    });
    const m = t.addFolder({
      title: "Vista",
      expanded: false
    });
    m.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => w("iso")), m.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => w("plan")), m.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => w("elevX")), m.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => w("elevY"));
    const r = t.addFolder({
      title: "Unidades",
      expanded: false
    }), o = {
      force: P.val,
      disp: O.val
    };
    r.addBinding(o, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (u) => {
      P.val = u.value, j();
    }), r.addBinding(o, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (u) => {
      O.val = u.value, j();
    });
    const d = t.addFolder({
      title: "Par\xE1metros"
    });
    let p = null;
    const c = () => {
      p !== null && clearTimeout(p), p = window.setTimeout(() => {
        p = null, j();
      }, 120);
    };
    for (const [u, e] of Object.entries(x.params)) {
      const i = {
        label: e.label ?? u
      };
      e.options !== void 0 ? i.options = e.options : (e.min !== void 0 && (i.min = e.min), e.max !== void 0 && (i.max = e.max), e.step !== void 0 && (i.step = e.step)), d.addBinding(h, u, i).on("change", () => {
        (x == null ? void 0 : x.onParamChange) && (x.onParamChange(u, h), t.refresh()), c();
      });
    }
    x.hasModal && t.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      M.div.style.display = "block", x.runModal && x.runModal(h, y, M);
    }), k = t;
  }
  const le = {
    deformedShape: true,
    shellResults: "pressure",
    gridSize: 10
  }, F = $({
    mesh: {
      nodes: q,
      elements: X,
      nodeInputs: Y,
      elementInputs: _,
      deformOutputs: B,
      analyzeOutputs: S
    },
    objects3D: C,
    settingsObj: le
  });
  document.body.append(F, G({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(M.div);
  const I = new URLSearchParams(window.location.search).get("t"), L = I && g.find((t) => t.id === I) || g.find((t) => t.id === "zapata-aislada") || g[0];
  L && (A(L), (L.id === "zapata-aislada" || L.id === "zapata-viga-amarre") && setTimeout(() => w("plan"), 200));
});
