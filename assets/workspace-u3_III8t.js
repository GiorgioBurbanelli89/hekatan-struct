import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as M, P as $ } from "./theme-CzzIlc4y.js";
import { g as G } from "./getViewer-DXzw4WPM.js";
import { g as J } from "./styles-Z6stOm1O.js";
import { c as K } from "./renderModalTable-29W4CuGz.js";
import { e as P, a as Q, __tla as __tla_0 } from "./exampleRegistry-pnS8SieU.js";
import { d as B, f as T } from "./units-CVPhvG5E.js";
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
  const X = M.state([]), C = M.state([]), F = M.state({}), q = M.state({}), Y = M.state({}), D = M.state({}), U = M.state([]), h = {
    nodes: X,
    elements: C,
    nodeInputs: F,
    elementInputs: q,
    deformOutputs: Y,
    analyzeOutputs: D,
    objects3D: U
  };
  let g = null, S = {}, O = null;
  const z = K();
  z.div.style.display = "none";
  function H() {
    h.objects3D.val = [], h.nodes.val = [], h.elements.val = [], h.nodeInputs.val = {}, h.elementInputs.val = {}, h.deformOutputs.val = {}, h.analyzeOutputs.val = {};
  }
  function L(e) {
    if (g = e, S = Object.fromEntries(Object.entries(e.params).map(([o, n]) => [
      o,
      n.default
    ])), Q.v++, H(), e.build(S, h, z), e.defaultShellResult) {
      const o = b.__settings;
      (o == null ? void 0 : o.shellResults) && (o.shellResults.val = e.defaultShellResult), (o == null ? void 0 : o.loads) && (o.loads.val = true), (o == null ? void 0 : o.supports) && (o.supports.val = true);
    }
    W(e.availableShellResults), N(), Z(), tt();
  }
  function N() {
    var _a;
    const e = b.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const o = h.nodes.rawVal, n = (_a = h.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(o == null ? void 0 : o.length) || !n) {
      e.deformScale.val = 1;
      return;
    }
    let l = 1 / 0, r = 1 / 0, s = 1 / 0, d = -1 / 0, c = -1 / 0, p = -1 / 0;
    for (const t of o) t[0] < l && (l = t[0]), t[0] > d && (d = t[0]), t[1] < r && (r = t[1]), t[1] > c && (c = t[1]), t[2] < s && (s = t[2]), t[2] > p && (p = t[2]);
    const f = Math.sqrt((d - l) ** 2 + (c - r) ** 2 + (p - s) ** 2) || 1;
    let m = 0;
    if (n.forEach((t) => {
      const i = Math.sqrt((t[0] || 0) ** 2 + (t[1] || 0) ** 2 + (t[2] || 0) ** 2);
      i > m && (m = i);
    }), m < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * f / m)), e.displayScale && (e.displayScale.val = 1);
  }
  function Z() {
    const e = b.__ctx, o = h.nodes.rawVal;
    if (!e || !(o == null ? void 0 : o.length)) return;
    const { camera: n, controls: l, render: r } = e;
    let s = 1 / 0, d = 1 / 0, c = 1 / 0, p = -1 / 0, f = -1 / 0, m = -1 / 0;
    for (const y of o) y[0] < s && (s = y[0]), y[0] > p && (p = y[0]), y[1] < d && (d = y[1]), y[1] > f && (f = y[1]), y[2] < c && (c = y[2]), y[2] > m && (m = y[2]);
    const t = (s + p) / 2, i = (d + f) / 2, u = (c + m) / 2, v = p - s, x = f - d, k = m - c, w = Math.max(Math.sqrt(v * v + x * x + k * k), 1), j = 2.2 * w;
    l.target.set(t, i, u);
    const a = j / Math.sqrt(3);
    n.position.set(t + a, i - a, u + a), n.up.set(0, 0, 1), n.near = w * 1e-3, n.far = w * 50, n.updateProjectionMatrix(), n.lookAt(t, i, u), l.update(), r == null ? void 0 : r();
    const I = b.__settings;
    (I == null ? void 0 : I.gridSize) && (I.gridSize.val = Math.max(Math.ceil(Math.max(v, x) * 1.2), 2));
  }
  function W(e) {
    const o = b.querySelectorAll("select"), n = Array.from(o).find((r) => Array.from(r.options).some((s) => s.value === "bendingXX"));
    if (!n) return;
    for (const r of Array.from(n.options)) {
      const s = r.value === "none" || !e || e.includes(r.value);
      r.hidden = !s, r.disabled = !s;
    }
    const l = b.__settings;
    (l == null ? void 0 : l.shellResults) && (n.value = l.shellResults.val, n.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function A() {
    g && (H(), g.build(S, h, z), N(), Z());
  }
  const _ = document.createElement("div");
  _.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px";
  document.body.appendChild(_);
  function E(e) {
    const o = b.__ctx;
    if (!o) return;
    const { camera: n, controls: l, render: r } = o, s = h.nodes.rawVal ?? [];
    let d = 1 / 0, c = 1 / 0, p = 1 / 0, f = -1 / 0, m = -1 / 0, t = -1 / 0;
    for (const a of s) a[0] < d && (d = a[0]), a[0] > f && (f = a[0]), a[1] < c && (c = a[1]), a[1] > m && (m = a[1]), a[2] < p && (p = a[2]), a[2] > t && (t = a[2]);
    const i = (d + f) / 2, u = (c + m) / 2, v = (p + t) / 2, x = f - d || 1, k = m - c || 1, w = t - p || 1, j = Math.sqrt(x * x + k * k + w * w) || 5;
    if (l.target.set(i, u, v), e === "iso") {
      n.fov = 45;
      const a = j * 1.2;
      n.position.set(i + a * 0.6, u - a * 0.6, v + a * 0.6);
    } else {
      n.fov = 5;
      const I = j / 2 * 25;
      switch (e) {
        case "plan":
          n.position.set(i, u, v + I);
          break;
        case "elevX":
          n.position.set(i + I, u, v);
          break;
        case "elevY":
          n.position.set(i, u + I, v);
          break;
      }
    }
    n.up.set(0, 0, 1), n.updateProjectionMatrix(), n.lookAt(i, u, v), l.update(), r == null ? void 0 : r();
  }
  function tt() {
    if (O && (O.dispose(), O = null), _.innerHTML = "", !g) return;
    const e = new $({
      container: _,
      title: g.name
    }), o = {
      id: g.id
    }, n = Object.fromEntries(P.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(o, "id", {
      label: "Ejemplo",
      options: n
    }).on("change", (t) => {
      const i = P.find((u) => u.id === t.value);
      i && L(i);
    });
    const l = e.addFolder({
      title: "Vista",
      expanded: false
    });
    l.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => E("iso")), l.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => E("plan")), l.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => E("elevX")), l.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => E("elevY"));
    const r = e.addFolder({
      title: "Unidades",
      expanded: false
    }), s = {
      force: T.val,
      disp: B.val
    };
    r.addBinding(s, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      T.val = t.value, A();
    }), r.addBinding(s, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (t) => {
      B.val = t.value, A();
    });
    const d = "Par\xE1metros", c = /* @__PURE__ */ new Map(), p = (t) => (c.has(t) || c.set(t, e.addFolder({
      title: t,
      expanded: t === d
    })), c.get(t));
    let f = null;
    const m = () => {
      f !== null && clearTimeout(f), f = window.setTimeout(() => {
        f = null, A();
      }, 120);
    };
    for (const [t, i] of Object.entries(g.params)) {
      const u = i.folder ?? d, v = p(u), x = {
        label: i.label ?? t
      };
      i.options !== void 0 ? x.options = i.options : (i.min !== void 0 && (x.min = i.min), i.max !== void 0 && (x.max = i.max), i.step !== void 0 && (x.step = i.step)), v.addBinding(S, t, x).on("change", () => {
        (g == null ? void 0 : g.onParamChange) && (g.onParamChange(t, S), e.refresh()), m();
      });
    }
    g.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      z.div.style.display = "block", g.runModal && g.runModal(S, h, z);
    }), O = e;
  }
  const et = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, b = G({
    mesh: {
      nodes: X,
      elements: C,
      nodeInputs: F,
      elementInputs: q,
      deformOutputs: Y,
      analyzeOutputs: D
    },
    objects3D: U,
    settingsObj: et
  });
  document.body.append(b, J({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(z.div);
  const V = new URLSearchParams(window.location.search).get("t"), R = V && P.find((e) => e.id === V) || P.find((e) => e.id === "zapata-aislada") || P[0];
  R && (L(R), (R.id === "zapata-aislada" || R.id === "zapata-viga-amarre") && setTimeout(() => E("iso"), 200));
});
