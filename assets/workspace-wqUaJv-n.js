import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as w, P as G } from "./theme-CzzIlc4y.js";
import { g as J } from "./getViewer-DXzw4WPM.js";
import { g as K } from "./styles-Z6stOm1O.js";
import { c as Q } from "./renderModalTable-29W4CuGz.js";
import { e as O, a as W, __tla as __tla_0 } from "./exampleRegistry-DIccksYi.js";
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
  const F = w.state([]), X = w.state([]), q = w.state({}), L = w.state({}), Y = w.state({}), D = w.state({}), U = w.state([]), h = {
    nodes: F,
    elements: X,
    nodeInputs: q,
    elementInputs: L,
    deformOutputs: Y,
    analyzeOutputs: D,
    objects3D: U
  };
  let u = null, g = {}, P = null, S = null;
  const z = Q();
  z.div.style.display = "none";
  function H() {
    h.objects3D.val = [], h.nodes.val = [], h.elements.val = [], h.nodeInputs.val = {}, h.elementInputs.val = {}, h.deformOutputs.val = {}, h.analyzeOutputs.val = {};
  }
  function N(e) {
    if (u = e, g = Object.fromEntries(Object.entries(e.params).map(([o, i]) => [
      o,
      i.default
    ])), W.v++, H(), e.build(g, h, z), e.defaultShellResult) {
      const o = M.__settings;
      (o == null ? void 0 : o.shellResults) && (o.shellResults.val = e.defaultShellResult), (o == null ? void 0 : o.loads) && (o.loads.val = true), (o == null ? void 0 : o.supports) && (o.supports.val = true);
    }
    tt(e.availableShellResults), Z(), $(), et();
  }
  function Z() {
    var _a;
    const e = M.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const o = h.nodes.rawVal, i = (_a = h.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(o == null ? void 0 : o.length) || !i) {
      e.deformScale.val = 1;
      return;
    }
    let l = 1 / 0, r = 1 / 0, s = 1 / 0, d = -1 / 0, c = -1 / 0, v = -1 / 0;
    for (const t of o) t[0] < l && (l = t[0]), t[0] > d && (d = t[0]), t[1] < r && (r = t[1]), t[1] > c && (c = t[1]), t[2] < s && (s = t[2]), t[2] > v && (v = t[2]);
    const f = Math.sqrt((d - l) ** 2 + (c - r) ** 2 + (v - s) ** 2) || 1;
    let p = 0;
    if (i.forEach((t) => {
      const n = Math.sqrt((t[0] || 0) ** 2 + (t[1] || 0) ** 2 + (t[2] || 0) ** 2);
      n > p && (p = n);
    }), p < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * f / p)), e.displayScale && (e.displayScale.val = 1);
  }
  function $() {
    const e = M.__ctx, o = h.nodes.rawVal;
    if (!e || !(o == null ? void 0 : o.length)) return;
    const { camera: i, controls: l, render: r } = e;
    let s = 1 / 0, d = 1 / 0, c = 1 / 0, v = -1 / 0, f = -1 / 0, p = -1 / 0;
    for (const b of o) b[0] < s && (s = b[0]), b[0] > v && (v = b[0]), b[1] < d && (d = b[1]), b[1] > f && (f = b[1]), b[2] < c && (c = b[2]), b[2] > p && (p = b[2]);
    const t = (s + v) / 2, n = (d + f) / 2, m = (c + p) / 2, y = v - s, x = f - d, E = p - c, k = Math.max(Math.sqrt(y * y + x * x + E * E), 1), R = 2.2 * k;
    l.target.set(t, n, m);
    const a = R / Math.sqrt(3);
    i.position.set(t + a, n - a, m + a), i.up.set(0, 0, 1), i.near = k * 1e-3, i.far = k * 50, i.updateProjectionMatrix(), i.lookAt(t, n, m), l.update(), r == null ? void 0 : r();
    const I = M.__settings;
    (I == null ? void 0 : I.gridSize) && (I.gridSize.val = Math.max(Math.ceil(Math.max(y, x) * 1.2), 2));
  }
  function tt(e) {
    const o = M.querySelectorAll("select"), i = Array.from(o).find((r) => Array.from(r.options).some((s) => s.value === "bendingXX"));
    if (!i) return;
    for (const r of Array.from(i.options)) {
      const s = r.value === "none" || !e || e.includes(r.value);
      r.hidden = !s, r.disabled = !s;
    }
    const l = M.__settings;
    (l == null ? void 0 : l.shellResults) && (i.value = l.shellResults.val, i.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function A() {
    if (u && (H(), u.build(g, h, z), Z(), $(), u.computedLabels && S)) {
      const e = u.computedLabels(g, h);
      for (const o of Object.keys(S)) o in e && (S[o] = e[o]);
      P == null ? void 0 : P.refresh();
    }
  }
  const B = document.createElement("div");
  B.style.cssText = "position:fixed;top:96px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px";
  document.body.appendChild(B);
  function j(e) {
    const o = M.__ctx;
    if (!o) return;
    const { camera: i, controls: l, render: r } = o, s = h.nodes.rawVal ?? [];
    let d = 1 / 0, c = 1 / 0, v = 1 / 0, f = -1 / 0, p = -1 / 0, t = -1 / 0;
    for (const a of s) a[0] < d && (d = a[0]), a[0] > f && (f = a[0]), a[1] < c && (c = a[1]), a[1] > p && (p = a[1]), a[2] < v && (v = a[2]), a[2] > t && (t = a[2]);
    const n = (d + f) / 2, m = (c + p) / 2, y = (v + t) / 2, x = f - d || 1, E = p - c || 1, k = t - v || 1, R = Math.sqrt(x * x + E * E + k * k) || 5;
    if (l.target.set(n, m, y), e === "iso") {
      i.fov = 45;
      const a = R * 1.2;
      i.position.set(n + a * 0.6, m - a * 0.6, y + a * 0.6);
    } else {
      i.fov = 5;
      const I = R / 2 * 25;
      switch (e) {
        case "plan":
          i.position.set(n, m, y + I);
          break;
        case "elevX":
          i.position.set(n + I, m, y);
          break;
        case "elevY":
          i.position.set(n, m + I, y);
          break;
      }
    }
    i.up.set(0, 0, 1), i.updateProjectionMatrix(), i.lookAt(n, m, y), l.update(), r == null ? void 0 : r();
  }
  function et() {
    if (P && (P.dispose(), P = null), B.innerHTML = "", !u) return;
    const e = new G({
      container: B,
      title: u.name
    }), o = {
      id: u.id
    }, i = Object.fromEntries(O.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(o, "id", {
      label: "Ejemplo",
      options: i
    }).on("change", (t) => {
      const n = O.find((m) => m.id === t.value);
      n && N(n);
    });
    const l = e.addFolder({
      title: "Vista",
      expanded: false
    });
    l.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => j("iso")), l.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => j("plan")), l.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => j("elevX")), l.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => j("elevY"));
    const r = e.addFolder({
      title: "Unidades",
      expanded: false
    }), s = {
      force: C.val,
      disp: T.val
    };
    r.addBinding(s, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      C.val = t.value, A();
    }), r.addBinding(s, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (t) => {
      T.val = t.value, A();
    });
    const d = "Par\xE1metros", c = /* @__PURE__ */ new Map(), v = (t) => (c.has(t) || c.set(t, e.addFolder({
      title: t,
      expanded: t === d
    })), c.get(t));
    let f = null;
    const p = () => {
      f !== null && clearTimeout(f), f = window.setTimeout(() => {
        f = null, A();
      }, 120);
    };
    for (const [t, n] of Object.entries(u.params)) {
      const m = n.folder ?? d, y = v(m), x = {
        label: n.label ?? t
      };
      n.options !== void 0 ? x.options = n.options : (n.min !== void 0 && (x.min = n.min), n.max !== void 0 && (x.max = n.max), n.step !== void 0 && (x.step = n.step)), y.addBinding(g, t, x).on("change", () => {
        (u == null ? void 0 : u.onParamChange) && (u.onParamChange(t, g), e.refresh()), p();
      });
    }
    if (u.computedLabels) {
      const t = e.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), n = u.computedLabels(g, h);
      S = {
        ...n
      };
      for (const m of Object.keys(n)) t.addBinding(S, m, {
        readonly: true
      });
    } else S = null;
    u.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      z.div.style.display = "block", u.runModal && u.runModal(g, h, z);
    }), P = e;
  }
  const nt = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, M = J({
    mesh: {
      nodes: F,
      elements: X,
      nodeInputs: q,
      elementInputs: L,
      deformOutputs: Y,
      analyzeOutputs: D
    },
    objects3D: U,
    settingsObj: nt
  });
  document.body.append(M, K({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(z.div);
  const V = new URLSearchParams(window.location.search).get("t"), _ = V && O.find((e) => e.id === V) || O.find((e) => e.id === "zapata-aislada") || O[0];
  _ && (N(_), (_.id === "zapata-aislada" || _.id === "zapata-viga-amarre") && setTimeout(() => j("iso"), 200));
});
