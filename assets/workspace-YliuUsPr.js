import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as y, P as $ } from "./theme-CzzIlc4y.js";
import { g as G } from "./getViewer-DkrjKQ7d.js";
import { g as J } from "./styles-B8h3dtQW.js";
import { c as K } from "./renderModalTable-29W4CuGz.js";
import { e as k, a as Q, __tla as __tla_0 } from "./exampleRegistry-DAyIGtBe.js";
import { d as T, f as B } from "./units-CVPhvG5E.js";
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
  const V = y.state([]), X = y.state([]), C = y.state({}), F = y.state({}), Y = y.state({}), q = y.state({}), D = y.state([]), c = {
    nodes: V,
    elements: X,
    nodeInputs: C,
    elementInputs: F,
    deformOutputs: Y,
    analyzeOutputs: q,
    objects3D: D
  };
  let m = null, b = {}, z = null;
  const w = K();
  w.div.style.display = "none";
  function U() {
    c.objects3D.val = [], c.nodes.val = [], c.elements.val = [], c.nodeInputs.val = {}, c.elementInputs.val = {}, c.deformOutputs.val = {}, c.analyzeOutputs.val = {};
  }
  function H(e) {
    if (m = e, b = Object.fromEntries(Object.entries(e.params).map(([i, o]) => [
      i,
      o.default
    ])), Q.v++, U(), e.build(b, c, w), e.defaultShellResult) {
      const i = x.__settings;
      (i == null ? void 0 : i.shellResults) && (i.shellResults.val = e.defaultShellResult), (i == null ? void 0 : i.loads) && (i.loads.val = true), (i == null ? void 0 : i.supports) && (i.supports.val = true);
    }
    W(e.availableShellResults), L(), N(), tt();
  }
  function L() {
    var _a;
    const e = x.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const i = c.nodes.rawVal, o = (_a = c.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(i == null ? void 0 : i.length) || !o) {
      e.deformScale.val = 1;
      return;
    }
    let l = 1 / 0, r = 1 / 0, n = 1 / 0, s = -1 / 0, d = -1 / 0, h = -1 / 0;
    for (const t of i) t[0] < l && (l = t[0]), t[0] > s && (s = t[0]), t[1] < r && (r = t[1]), t[1] > d && (d = t[1]), t[2] < n && (n = t[2]), t[2] > h && (h = t[2]);
    const p = Math.sqrt((s - l) ** 2 + (d - r) ** 2 + (h - n) ** 2) || 1;
    let u = 0;
    if (o.forEach((t) => {
      const a = Math.sqrt((t[0] || 0) ** 2 + (t[1] || 0) ** 2 + (t[2] || 0) ** 2);
      a > u && (u = a);
    }), u < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(1e4, Math.max(1, 0.05 * p / u)), e.displayScale && (e.displayScale.val = 1);
  }
  function N() {
    const e = x.__ctx, i = c.nodes.rawVal;
    if (!e || !(i == null ? void 0 : i.length)) return;
    const { camera: o, controls: l, render: r } = e;
    let n = 1 / 0, s = 1 / 0, d = 1 / 0, h = -1 / 0, p = -1 / 0, u = -1 / 0;
    for (const f of i) f[0] < n && (n = f[0]), f[0] > h && (h = f[0]), f[1] < s && (s = f[1]), f[1] > p && (p = f[1]), f[2] < d && (d = f[2]), f[2] > u && (u = f[2]);
    const t = (n + h) / 2, a = (s + p) / 2, g = (d + u) / 2, M = h - n, v = p - s, _ = u - d, P = Math.max(Math.sqrt(M * M + v * v + _ * _), 1), Z = 2.2 * P;
    l.target.set(t, a, g);
    const O = Z / Math.sqrt(3);
    o.position.set(t + O, a - O, g + O), o.up.set(0, 0, 1), o.near = P * 1e-3, o.far = P * 50, o.updateProjectionMatrix(), o.lookAt(t, a, g), l.update(), r == null ? void 0 : r();
    const j = x.__settings;
    (j == null ? void 0 : j.gridSize) && (j.gridSize.val = Math.max(Math.ceil(Math.max(M, v) * 1.2), 2));
  }
  function W(e) {
    const i = x.querySelectorAll("select"), o = Array.from(i).find((r) => Array.from(r.options).some((n) => n.value === "bendingXX"));
    if (!o) return;
    for (const r of Array.from(o.options)) {
      const n = r.value === "none" || !e || e.includes(r.value);
      r.hidden = !n, r.disabled = !n;
    }
    const l = x.__settings;
    (l == null ? void 0 : l.shellResults) && (o.value = l.shellResults.val, o.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function R() {
    m && (U(), m.build(b, c, w), L(), N());
  }
  const E = document.createElement("div");
  E.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px";
  document.body.appendChild(E);
  function S(e) {
    const i = x.__ctx;
    if (!i) return;
    const { camera: o, controls: l, render: r } = i, n = l.target.clone(), s = o.position.distanceTo(n) || 10;
    switch (e) {
      case "iso":
        o.position.set(n.x + s * 0.6, n.y - s * 0.6, n.z + s * 0.6);
        break;
      case "plan":
        o.position.set(n.x, n.y, n.z + s);
        break;
      case "elevX":
        o.position.set(n.x + s, n.y, n.z);
        break;
      case "elevY":
        o.position.set(n.x, n.y + s, n.z);
        break;
    }
    o.up.set(0, 0, 1), o.lookAt(n), l.update(), r == null ? void 0 : r();
  }
  function tt() {
    if (z && (z.dispose(), z = null), E.innerHTML = "", !m) return;
    const e = new $({
      container: E,
      title: m.name
    }), i = {
      id: m.id
    }, o = Object.fromEntries(k.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(i, "id", {
      label: "Ejemplo",
      options: o
    }).on("change", (t) => {
      const a = k.find((g) => g.id === t.value);
      a && H(a);
    });
    const l = e.addFolder({
      title: "Vista",
      expanded: false
    });
    l.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => S("iso")), l.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => S("plan")), l.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => S("elevX")), l.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => S("elevY"));
    const r = e.addFolder({
      title: "Unidades",
      expanded: false
    }), n = {
      force: B.val,
      disp: T.val
    };
    r.addBinding(n, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      B.val = t.value, R();
    }), r.addBinding(n, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (t) => {
      T.val = t.value, R();
    });
    const s = "Par\xE1metros", d = /* @__PURE__ */ new Map(), h = (t) => (d.has(t) || d.set(t, e.addFolder({
      title: t,
      expanded: t === s
    })), d.get(t));
    let p = null;
    const u = () => {
      p !== null && clearTimeout(p), p = window.setTimeout(() => {
        p = null, R();
      }, 120);
    };
    for (const [t, a] of Object.entries(m.params)) {
      const g = a.folder ?? s, M = h(g), v = {
        label: a.label ?? t
      };
      a.options !== void 0 ? v.options = a.options : (a.min !== void 0 && (v.min = a.min), a.max !== void 0 && (v.max = a.max), a.step !== void 0 && (v.step = a.step)), M.addBinding(b, t, v).on("change", () => {
        (m == null ? void 0 : m.onParamChange) && (m.onParamChange(t, b), e.refresh()), u();
      });
    }
    m.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      w.div.style.display = "block", m.runModal && m.runModal(b, c, w);
    }), z = e;
  }
  const et = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, x = G({
    mesh: {
      nodes: V,
      elements: X,
      nodeInputs: C,
      elementInputs: F,
      deformOutputs: Y,
      analyzeOutputs: q
    },
    objects3D: D,
    settingsObj: et
  });
  document.body.append(x, J({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(w.div);
  const A = new URLSearchParams(window.location.search).get("t"), I = A && k.find((e) => e.id === A) || k.find((e) => e.id === "zapata-aislada") || k[0];
  I && (H(I), (I.id === "zapata-aislada" || I.id === "zapata-viga-amarre") && setTimeout(() => S("iso"), 200));
});
