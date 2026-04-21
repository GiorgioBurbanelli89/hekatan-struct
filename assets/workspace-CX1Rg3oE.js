import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as k, P as G } from "./theme-CzzIlc4y.js";
import { g as J } from "./getViewer-DXzw4WPM.js";
import { g as K } from "./styles-Z6stOm1O.js";
import { c as Q } from "./renderModalTable-29W4CuGz.js";
import { e as O, a as W, __tla as __tla_0 } from "./exampleRegistry-C0b86vB5.js";
import { d as T, f as C } from "./units-CVPhvG5E.js";
import "./Text-CBH-tcJP.js";
import "./analyze-ClLKGn9k.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import { __tla as __tla_1 } from "./didacticCpp-Bnj9OwqQ.js";
import { __tla as __tla_2 } from "./plateThin-C30Q-WjQ.js";
import { __tla as __tla_3 } from "./plateThick-DrHD17l3.js";
import { __tla as __tla_4 } from "./membrana-Darbd52d.js";
import { __tla as __tla_5 } from "./shellThin-ORSIx719.js";
import { __tla as __tla_6 } from "./shellThick-BSU3qF0E.js";
import { __tla as __tla_7 } from "./edificioAporticado-DG3xVeOI.js";
import { __tla as __tla_8 } from "./trussGen-CYTV_Ioz.js";
import { __tla as __tla_9 } from "./barraAxial-Bnm-0MrG.js";
import { __tla as __tla_10 } from "./portico2D-kxfBcLlJ.js";
import { __tla as __tla_11 } from "./tower3D-tLRX3VEB.js";
import { __tla as __tla_12 } from "./galpon-BaNuuhBd.js";
import { __tla as __tla_13 } from "./edifAcero-Dhwvq9Mc.js";
import { __tla as __tla_14 } from "./mezanine-BmEOOT1G.js";
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
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_14;
    } catch {
    }
  })()
]).then(async () => {
  const F = k.state([]), X = k.state([]), q = k.state({}), D = k.state({}), L = k.state({}), Y = k.state({}), U = k.state([]), h = {
    nodes: F,
    elements: X,
    nodeInputs: q,
    elementInputs: D,
    deformOutputs: L,
    analyzeOutputs: Y,
    objects3D: U
  };
  let u = null, M = {}, P = null, z = null;
  const E = Q();
  E.div.style.display = "none";
  function H() {
    h.objects3D.val = [], h.nodes.val = [], h.elements.val = [], h.nodeInputs.val = {}, h.elementInputs.val = {}, h.deformOutputs.val = {}, h.analyzeOutputs.val = {};
  }
  function N(e) {
    if (u = e, M = Object.fromEntries(Object.entries(e.params).map(([a, n]) => [
      a,
      n.default
    ])), W.v++, H(), e.build(M, h, E), e.defaultShellResult) {
      const a = w.__settings;
      (a == null ? void 0 : a.shellResults) && (a.shellResults.val = e.defaultShellResult), (a == null ? void 0 : a.loads) && (a.loads.val = true), (a == null ? void 0 : a.supports) && (a.supports.val = true);
    }
    tt(e.availableShellResults), Z(), $(), et();
  }
  function Z() {
    var _a;
    const e = w.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const a = h.nodes.rawVal, n = (_a = h.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(a == null ? void 0 : a.length) || !n) {
      e.deformScale.val = 1;
      return;
    }
    let c = 1 / 0, d = 1 / 0, r = 1 / 0, m = -1 / 0, f = -1 / 0, v = -1 / 0;
    for (const i of a) i[0] < c && (c = i[0]), i[0] > m && (m = i[0]), i[1] < d && (d = i[1]), i[1] > f && (f = i[1]), i[2] < r && (r = i[2]), i[2] > v && (v = i[2]);
    const y = Math.sqrt((m - c) ** 2 + (f - d) ** 2 + (v - r) ** 2) || 1;
    let l = 0;
    if (n.forEach((i) => {
      const t = Math.sqrt((i[0] || 0) ** 2 + (i[1] || 0) ** 2 + (i[2] || 0) ** 2);
      t > l && (l = t);
    }), l < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * y / l)), e.displayScale && (e.displayScale.val = 1);
  }
  function $() {
    const e = w.__ctx, a = h.nodes.rawVal;
    if (!e || !(a == null ? void 0 : a.length)) return;
    const { camera: n, controls: c, render: d } = e;
    let r = 1 / 0, m = 1 / 0, f = 1 / 0, v = -1 / 0, y = -1 / 0, l = -1 / 0;
    for (const x of a) x[0] < r && (r = x[0]), x[0] > v && (v = x[0]), x[1] < m && (m = x[1]), x[1] > y && (y = x[1]), x[2] < f && (f = x[2]), x[2] > l && (l = x[2]);
    const i = (r + v) / 2, t = (m + y) / 2, o = (f + l) / 2, p = v - r, g = y - m, b = l - f, I = Math.max(Math.sqrt(p * p + g * g + b * b), 1), B = 2.2 * I;
    c.target.set(i, t, o);
    const s = B / Math.sqrt(3);
    n.position.set(i + s, t - s, o + s), n.up.set(0, 0, 1), n.near = I * 1e-3, n.far = I * 50, n.updateProjectionMatrix(), n.lookAt(i, t, o), c.update(), d == null ? void 0 : d();
    const S = w.__settings;
    (S == null ? void 0 : S.gridSize) && (S.gridSize.val = Math.max(Math.ceil(Math.max(p, g) * 1.2), 2));
  }
  function tt(e) {
    const a = w.querySelectorAll("select"), n = Array.from(a).find((d) => Array.from(d.options).some((r) => r.value === "bendingXX"));
    if (!n) return;
    for (const d of Array.from(n.options)) {
      const r = d.value === "none" || !e || e.includes(d.value);
      d.hidden = !r, d.disabled = !r;
    }
    const c = w.__settings;
    (c == null ? void 0 : c.shellResults) && (n.value = c.shellResults.val, n.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function A() {
    if (u && (H(), u.build(M, h, E), Z(), $(), u.computedLabels && z)) {
      const e = u.computedLabels(M, h);
      for (const a of Object.keys(z)) a in e && (z[a] = e[a]);
      P == null ? void 0 : P.refresh();
    }
  }
  const _ = document.createElement("div");
  _.style.cssText = "position:fixed;top:96px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px";
  document.body.appendChild(_);
  function j(e) {
    const a = w.__ctx;
    if (!a) return;
    const { camera: n, controls: c, render: d } = a, r = h.nodes.rawVal ?? [];
    let m = 1 / 0, f = 1 / 0, v = 1 / 0, y = -1 / 0, l = -1 / 0, i = -1 / 0;
    for (const s of r) s[0] < m && (m = s[0]), s[0] > y && (y = s[0]), s[1] < f && (f = s[1]), s[1] > l && (l = s[1]), s[2] < v && (v = s[2]), s[2] > i && (i = s[2]);
    const t = (m + y) / 2, o = (f + l) / 2, p = (v + i) / 2, g = y - m || 1, b = l - f || 1, I = i - v || 1, B = Math.sqrt(g * g + b * b + I * I) || 5;
    if (c.target.set(t, o, p), e === "iso") {
      n.fov = 45;
      const s = B * 1.2;
      n.position.set(t + s * 0.6, o - s * 0.6, p + s * 0.6);
    } else {
      n.fov = 5;
      const S = B / 2 * 25;
      switch (e) {
        case "plan":
          n.position.set(t, o, p + S);
          break;
        case "elevX":
          n.position.set(t + S, o, p);
          break;
        case "elevY":
          n.position.set(t, o + S, p);
          break;
      }
    }
    n.up.set(0, 0, 1), n.updateProjectionMatrix(), n.lookAt(t, o, p), c.update(), d == null ? void 0 : d();
  }
  function et() {
    if (P && (P.dispose(), P = null), _.innerHTML = "", !u) return;
    const e = new G({
      container: _,
      title: u.name
    }), a = {
      id: u.id
    }, n = Object.fromEntries(O.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(a, "id", {
      label: "Ejemplo",
      options: n
    }).on("change", (t) => {
      const o = O.find((p) => p.id === t.value);
      o && N(o);
    });
    const c = e.addFolder({
      title: "Vista",
      expanded: false
    });
    c.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => j("iso")), c.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => j("plan")), c.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => j("elevX")), c.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => j("elevY"));
    const d = e.addFolder({
      title: "Unidades",
      expanded: false
    }), r = {
      force: C.val,
      disp: T.val
    };
    d.addBinding(r, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      C.val = t.value, A();
    }), d.addBinding(r, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (t) => {
      T.val = t.value, A();
    });
    const m = "Par\xE1metros", f = /* @__PURE__ */ new Map(), v = (t) => t === m || /\bmodo\b/i.test(t) || /combinaci/i.test(t), y = (t) => (f.has(t) || f.set(t, e.addFolder({
      title: t,
      expanded: v(t)
    })), f.get(t));
    let l = null;
    const i = () => {
      l !== null && clearTimeout(l), l = window.setTimeout(() => {
        l = null, A();
      }, 120);
    };
    for (const [t, o] of Object.entries(u.params)) {
      const p = o.folder ?? m, g = y(p), b = {
        label: o.label ?? t
      };
      o.options !== void 0 ? b.options = o.options : (o.min !== void 0 && (b.min = o.min), o.max !== void 0 && (b.max = o.max), o.step !== void 0 && (b.step = o.step)), g.addBinding(M, t, b).on("change", () => {
        (u == null ? void 0 : u.onParamChange) && (u.onParamChange(t, M), e.refresh()), i();
      });
    }
    if (u.computedLabels) {
      const t = e.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), o = u.computedLabels(M, h);
      z = {
        ...o
      };
      for (const p of Object.keys(o)) t.addBinding(z, p, {
        readonly: true
      });
    } else z = null;
    u.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      E.div.style.display = "block", u.runModal && u.runModal(M, h, E);
    }), P = e;
  }
  const nt = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, w = J({
    mesh: {
      nodes: F,
      elements: X,
      nodeInputs: q,
      elementInputs: D,
      deformOutputs: L,
      analyzeOutputs: Y
    },
    objects3D: U,
    settingsObj: nt
  });
  document.body.append(w, K({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(E.div);
  const V = new URLSearchParams(window.location.search).get("t"), R = V && O.find((e) => e.id === V) || O.find((e) => e.id === "zapata-aislada") || O[0];
  R && (N(R), (R.id === "zapata-aislada" || R.id === "zapata-viga-amarre") && setTimeout(() => j("iso"), 200));
});
