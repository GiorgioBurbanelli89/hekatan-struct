import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as I, P as G } from "./theme-CzzIlc4y.js";
import { g as J } from "./getViewer-DXzw4WPM.js";
import { g as K } from "./styles-Z6stOm1O.js";
import { c as Q } from "./renderModalTable-29W4CuGz.js";
import { e as B, a as W, __tla as __tla_0 } from "./exampleRegistry-CXZc21p7.js";
import { d as A, f as T } from "./units-CVPhvG5E.js";
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
  const F = I.state([]), X = I.state([]), q = I.state({}), D = I.state({}), L = I.state({}), Y = I.state({}), U = I.state([]), h = {
    nodes: F,
    elements: X,
    nodeInputs: q,
    elementInputs: D,
    deformOutputs: L,
    analyzeOutputs: Y,
    objects3D: U
  };
  let c = null, M = {}, j = null, P = null;
  const E = Q();
  E.div.style.display = "none";
  function H() {
    h.objects3D.val = [], h.nodes.val = [], h.elements.val = [], h.nodeInputs.val = {}, h.elementInputs.val = {}, h.deformOutputs.val = {}, h.analyzeOutputs.val = {};
  }
  function N(e) {
    if (c = e, M = Object.fromEntries(Object.entries(e.params).map(([a, o]) => [
      a,
      o.default
    ])), W.v++, H(), e.build(M, h, E), e.defaultShellResult) {
      const a = k.__settings;
      (a == null ? void 0 : a.shellResults) && (a.shellResults.val = e.defaultShellResult), (a == null ? void 0 : a.loads) && (a.loads.val = true), (a == null ? void 0 : a.supports) && (a.supports.val = true);
    }
    tt(e.availableShellResults), Z(), $(), et();
  }
  function Z() {
    var _a;
    const e = k.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const a = h.nodes.rawVal, o = (_a = h.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(a == null ? void 0 : a.length) || !o) {
      e.deformScale.val = 1;
      return;
    }
    let d = 1 / 0, f = 1 / 0, r = 1 / 0, p = -1 / 0, m = -1 / 0, v = -1 / 0;
    for (const i of a) i[0] < d && (d = i[0]), i[0] > p && (p = i[0]), i[1] < f && (f = i[1]), i[1] > m && (m = i[1]), i[2] < r && (r = i[2]), i[2] > v && (v = i[2]);
    const y = Math.sqrt((p - d) ** 2 + (m - f) ** 2 + (v - r) ** 2) || 1;
    let l = 0;
    if (o.forEach((i) => {
      const u = Math.sqrt((i[0] || 0) ** 2 + (i[1] || 0) ** 2 + (i[2] || 0) ** 2);
      u > l && (l = u);
    }), l < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * y / l)), e.displayScale && (e.displayScale.val = 1);
  }
  function $() {
    const e = k.__ctx, a = h.nodes.rawVal;
    if (!e || !(a == null ? void 0 : a.length)) return;
    const { camera: o, controls: d, render: f } = e;
    let r = 1 / 0, p = 1 / 0, m = 1 / 0, v = -1 / 0, y = -1 / 0, l = -1 / 0;
    for (const g of a) g[0] < r && (r = g[0]), g[0] > v && (v = g[0]), g[1] < p && (p = g[1]), g[1] > y && (y = g[1]), g[2] < m && (m = g[2]), g[2] > l && (l = g[2]);
    const i = (r + v) / 2, u = (p + y) / 2, t = (m + l) / 2, n = v - r, x = y - p, w = l - m, b = Math.max(Math.sqrt(n * n + x * x + w * w), 1), S = 2.2 * b;
    d.target.set(i, u, t);
    const s = S / Math.sqrt(3);
    o.position.set(i + s, u - s, t + s), o.up.set(0, 0, 1), o.near = b * 1e-3, o.far = b * 50, o.updateProjectionMatrix(), o.lookAt(i, u, t), d.update(), f == null ? void 0 : f();
    const z = k.__settings;
    (z == null ? void 0 : z.gridSize) && (z.gridSize.val = Math.max(Math.ceil(Math.max(n, x) * 1.2), 2));
  }
  function tt(e) {
    const a = k.querySelectorAll("select"), o = Array.from(a).find((f) => Array.from(f.options).some((r) => r.value === "bendingXX"));
    if (!o) return;
    for (const f of Array.from(o.options)) {
      const r = f.value === "none" || !e || e.includes(f.value);
      f.hidden = !r, f.disabled = !r;
    }
    const d = k.__settings;
    (d == null ? void 0 : d.shellResults) && (o.value = d.shellResults.val, o.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function C() {
    if (c && (H(), c.build(M, h, E), Z(), $(), c.computedLabels && P)) {
      const e = c.computedLabels(M, h);
      for (const a of Object.keys(P)) a in e && (P[a] = e[a]);
      j == null ? void 0 : j.refresh();
    }
  }
  const _ = document.createElement("div");
  _.style.cssText = "position:fixed;top:96px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px";
  document.body.appendChild(_);
  function O(e) {
    const a = k.__ctx;
    if (!a) return;
    const { camera: o, controls: d, render: f } = a, r = h.nodes.rawVal ?? [];
    let p = 1 / 0, m = 1 / 0, v = 1 / 0, y = -1 / 0, l = -1 / 0, i = -1 / 0;
    for (const s of r) s[0] < p && (p = s[0]), s[0] > y && (y = s[0]), s[1] < m && (m = s[1]), s[1] > l && (l = s[1]), s[2] < v && (v = s[2]), s[2] > i && (i = s[2]);
    const u = (p + y) / 2, t = (m + l) / 2, n = (v + i) / 2, x = y - p || 1, w = l - m || 1, b = i - v || 1, S = Math.sqrt(x * x + w * w + b * b) || 5;
    if (d.target.set(u, t, n), e === "iso") {
      o.fov = 45;
      const s = S * 1.2;
      o.position.set(u + s * 0.6, t - s * 0.6, n + s * 0.6);
    } else {
      o.fov = 5;
      const z = S / 2 * 25;
      switch (e) {
        case "plan":
          o.position.set(u, t, n + z);
          break;
        case "elevX":
          o.position.set(u + z, t, n);
          break;
        case "elevY":
          o.position.set(u, t + z, n);
          break;
      }
    }
    o.up.set(0, 0, 1), o.updateProjectionMatrix(), o.lookAt(u, t, n), d.update(), f == null ? void 0 : f();
  }
  function et() {
    if (j && (j.dispose(), j = null), _.innerHTML = "", !c) return;
    const e = new G({
      container: _,
      title: c.name
    }), a = {
      id: c.id
    }, o = Object.fromEntries(B.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(a, "id", {
      label: "Ejemplo",
      options: o
    }).on("change", (t) => {
      const n = B.find((x) => x.id === t.value);
      n && N(n);
    });
    const d = e.addFolder({
      title: "Vista",
      expanded: false
    });
    d.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => O("iso")), d.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => O("plan")), d.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => O("elevX")), d.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => O("elevY"));
    const f = e.addFolder({
      title: "Unidades",
      expanded: false
    }), r = {
      force: T.val,
      disp: A.val
    };
    f.addBinding(r, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      T.val = t.value, C();
    }), f.addBinding(r, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (t) => {
      A.val = t.value, C();
    });
    const p = "Par\xE1metros", m = /* @__PURE__ */ new Map(), v = (t) => t === p || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), y = (t) => (m.has(t) || m.set(t, e.addFolder({
      title: t,
      expanded: v(t)
    })), m.get(t));
    let l = null;
    const i = () => {
      l !== null && clearTimeout(l), l = window.setTimeout(() => {
        l = null, C();
      }, 120);
    }, u = {};
    for (const [t, n] of Object.entries(c.params)) {
      const x = n.folder ?? p, w = y(x);
      if (n.boolean) {
        u[t] = M[t] >= 0.5, w.addBinding(u, t, {
          label: n.label ?? t
        }).on("change", (S) => {
          M[t] = S.value ? 1 : 0, (c == null ? void 0 : c.onParamChange) && (c.onParamChange(t, M), e.refresh()), i();
        });
        continue;
      }
      const b = {
        label: n.label ?? t
      };
      n.options !== void 0 ? b.options = n.options : (n.min !== void 0 && (b.min = n.min), n.max !== void 0 && (b.max = n.max), n.step !== void 0 && (b.step = n.step)), w.addBinding(M, t, b).on("change", () => {
        (c == null ? void 0 : c.onParamChange) && (c.onParamChange(t, M), e.refresh()), i();
      });
    }
    if (c.computedLabels) {
      const t = e.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), n = c.computedLabels(M, h);
      P = {
        ...n
      };
      for (const x of Object.keys(n)) t.addBinding(P, x, {
        readonly: true
      });
    } else P = null;
    c.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      E.div.style.display = "block", c.runModal && c.runModal(M, h, E);
    }), j = e;
  }
  const nt = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, k = J({
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
  document.body.append(k, K({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(E.div);
  const V = new URLSearchParams(window.location.search).get("t"), R = V && B.find((e) => e.id === V) || B.find((e) => e.id === "zapata-aislada") || B[0];
  R && (N(R), (R.id === "zapata-aislada" || R.id === "zapata-viga-amarre") && setTimeout(() => O("iso"), 200));
});
