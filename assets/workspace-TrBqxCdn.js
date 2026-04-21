import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as _, P as G } from "./theme-CzzIlc4y.js";
import { g as J } from "./getViewer-DXzw4WPM.js";
import { g as Q } from "./styles-Z6stOm1O.js";
import { c as W } from "./renderModalTable-29W4CuGz.js";
import { e as O, a as tt, __tla as __tla_0 } from "./exampleRegistry-BYQw7C7T.js";
import { d as T, f as V } from "./units-CVPhvG5E.js";
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
  const F = _.state([]), X = _.state([]), D = _.state({}), L = _.state({}), Y = _.state({}), $ = _.state({}), U = _.state([]), d = {
    nodes: F,
    elements: X,
    nodeInputs: D,
    elementInputs: L,
    deformOutputs: Y,
    analyzeOutputs: $,
    objects3D: U
  };
  let l = null, x = {}, C = null, z = null, P = null;
  const E = W();
  E.div.style.display = "none";
  function H() {
    d.objects3D.val = [], d.nodes.val = [], d.elements.val = [], d.nodeInputs.val = {}, d.elementInputs.val = {}, d.deformOutputs.val = {}, d.analyzeOutputs.val = {};
  }
  function K(e) {
    if (l = e, x = Object.fromEntries(Object.entries(e.params).map(([a, n]) => [
      a,
      n.default
    ])), tt.v++, H(), e.build(x, d, E), e.defaultShellResult) {
      const a = S.__settings;
      (a == null ? void 0 : a.shellResults) && (a.shellResults.val = e.defaultShellResult), (a == null ? void 0 : a.loads) && (a.loads.val = true), (a == null ? void 0 : a.supports) && (a.supports.val = true);
    }
    et(e.availableShellResults), N(), Z(), nt();
  }
  function N() {
    var _a;
    const e = S.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const a = d.nodes.rawVal, n = (_a = d.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(a == null ? void 0 : a.length) || !n) {
      e.deformScale.val = 1;
      return;
    }
    let f = 1 / 0, u = 1 / 0, c = 1 / 0, p = -1 / 0, m = -1 / 0, v = -1 / 0;
    for (const i of a) i[0] < f && (f = i[0]), i[0] > p && (p = i[0]), i[1] < u && (u = i[1]), i[1] > m && (m = i[1]), i[2] < c && (c = i[2]), i[2] > v && (v = i[2]);
    const b = Math.sqrt((p - f) ** 2 + (m - u) ** 2 + (v - c) ** 2) || 1;
    let r = 0;
    if (n.forEach((i) => {
      const h = Math.sqrt((i[0] || 0) ** 2 + (i[1] || 0) ** 2 + (i[2] || 0) ** 2);
      h > r && (r = h);
    }), r < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * b / r)), e.displayScale && (e.displayScale.val = 1);
  }
  function Z() {
    const e = S.__ctx, a = d.nodes.rawVal;
    if (!e || !(a == null ? void 0 : a.length)) return;
    const { camera: n, controls: f, render: u } = e;
    let c = 1 / 0, p = 1 / 0, m = 1 / 0, v = -1 / 0, b = -1 / 0, r = -1 / 0;
    for (const g of a) g[0] < c && (c = g[0]), g[0] > v && (v = g[0]), g[1] < p && (p = g[1]), g[1] > b && (b = g[1]), g[2] < m && (m = g[2]), g[2] > r && (r = g[2]);
    const i = (c + v) / 2, h = (p + b) / 2, y = (m + r) / 2, t = v - c, o = b - p, M = r - m, k = Math.max(Math.sqrt(t * t + o * o + M * M), 1), I = 2.2 * k;
    f.target.set(i, h, y);
    const s = I / Math.sqrt(3);
    n.position.set(i + s, h - s, y + s), n.up.set(0, 0, 1), n.near = k * 1e-3, n.far = k * 50, n.updateProjectionMatrix(), n.lookAt(i, h, y), f.update(), u == null ? void 0 : u();
    const w = S.__settings;
    (w == null ? void 0 : w.gridSize) && (w.gridSize.val = Math.max(Math.ceil(Math.max(t, o) * 1.2), 2));
  }
  function et(e) {
    const a = S.querySelectorAll("select"), n = Array.from(a).find((u) => Array.from(u.options).some((c) => c.value === "bendingXX"));
    if (!n) return;
    for (const u of Array.from(n.options)) {
      const c = u.value === "none" || !e || e.includes(u.value);
      u.hidden = !c, u.disabled = !c;
    }
    const f = S.__settings;
    (f == null ? void 0 : f.shellResults) && (n.value = f.shellResults.val, n.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function A() {
    if (l) {
      if (H(), l.build(x, d, E), N(), Z(), l.computedLabels && z) {
        const e = l.computedLabels(x, d);
        for (const a of Object.keys(z)) a in e && (z[a] = e[a]);
      }
      if (l.inlineComputed && P) for (const e of l.inlineComputed) {
        const a = `__inline_${e.after}_${e.label}`;
        P[a] = e.compute(x, d);
      }
      C == null ? void 0 : C.refresh();
    }
  }
  const R = document.createElement("div");
  R.style.cssText = "position:fixed;top:96px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px";
  document.body.appendChild(R);
  function j(e) {
    const a = S.__ctx;
    if (!a) return;
    const { camera: n, controls: f, render: u } = a, c = d.nodes.rawVal ?? [];
    let p = 1 / 0, m = 1 / 0, v = 1 / 0, b = -1 / 0, r = -1 / 0, i = -1 / 0;
    for (const s of c) s[0] < p && (p = s[0]), s[0] > b && (b = s[0]), s[1] < m && (m = s[1]), s[1] > r && (r = s[1]), s[2] < v && (v = s[2]), s[2] > i && (i = s[2]);
    const h = (p + b) / 2, y = (m + r) / 2, t = (v + i) / 2, o = b - p || 1, M = r - m || 1, k = i - v || 1, I = Math.sqrt(o * o + M * M + k * k) || 5;
    if (f.target.set(h, y, t), e === "iso") {
      n.fov = 45;
      const s = I * 1.2;
      n.position.set(h + s * 0.6, y - s * 0.6, t + s * 0.6);
    } else {
      n.fov = 5;
      const w = I / 2 * 25;
      switch (e) {
        case "plan":
          n.position.set(h, y, t + w);
          break;
        case "elevX":
          n.position.set(h + w, y, t);
          break;
        case "elevY":
          n.position.set(h, y + w, t);
          break;
      }
    }
    n.up.set(0, 0, 1), n.updateProjectionMatrix(), n.lookAt(h, y, t), f.update(), u == null ? void 0 : u();
  }
  function nt() {
    if (C && (C.dispose(), C = null), R.innerHTML = "", !l) return;
    const e = new G({
      container: R,
      title: l.name
    }), a = {
      id: l.id
    }, n = Object.fromEntries(O.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(a, "id", {
      label: "Ejemplo",
      options: n
    }).on("change", (t) => {
      const o = O.find((M) => M.id === t.value);
      o && K(o);
    });
    const f = e.addFolder({
      title: "Vista",
      expanded: false
    });
    f.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => j("iso")), f.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => j("plan")), f.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => j("elevX")), f.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => j("elevY"));
    const u = e.addFolder({
      title: "Unidades",
      expanded: false
    }), c = {
      force: V.val,
      disp: T.val
    };
    u.addBinding(c, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      V.val = t.value, A();
    }), u.addBinding(c, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (t) => {
      T.val = t.value, A();
    });
    const p = "Par\xE1metros", m = /* @__PURE__ */ new Map(), v = (t) => t === p || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), b = (t) => (m.has(t) || m.set(t, e.addFolder({
      title: t,
      expanded: v(t)
    })), m.get(t));
    let r = null;
    const i = () => {
      r !== null && clearTimeout(r), r = window.setTimeout(() => {
        r = null, A();
      }, 120);
    }, h = {}, y = /* @__PURE__ */ new Map();
    if (P = {}, l.inlineComputed) for (const t of l.inlineComputed) {
      const o = `__inline_${t.after}_${t.label}`;
      P[o] = t.compute(x, d), y.has(t.after) || y.set(t.after, []), y.get(t.after).push({
        label: t.label,
        key: o,
        compute: t.compute
      });
    }
    for (const [t, o] of Object.entries(l.params)) {
      const M = o.folder ?? p, k = b(M);
      if (o.boolean) {
        h[t] = x[t] >= 0.5, k.addBinding(h, t, {
          label: o.label ?? t
        }).on("change", (w) => {
          x[t] = w.value ? 1 : 0, (l == null ? void 0 : l.onParamChange) && (l.onParamChange(t, x), e.refresh()), i();
        });
        continue;
      }
      const I = {
        label: o.label ?? t
      };
      o.options !== void 0 ? I.options = o.options : (o.min !== void 0 && (I.min = o.min), o.max !== void 0 && (I.max = o.max), o.step !== void 0 && (I.step = o.step)), k.addBinding(x, t, I).on("change", () => {
        (l == null ? void 0 : l.onParamChange) && (l.onParamChange(t, x), e.refresh()), i();
      });
      const s = y.get(t);
      if (s && P) for (const w of s) k.addBinding(P, w.key, {
        readonly: true,
        label: w.label,
        view: "text"
      });
    }
    if (l.computedLabels) {
      const t = e.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), o = l.computedLabels(x, d);
      z = {
        ...o
      }, console.log("[Calculados]", z);
      for (const M of Object.keys(o)) t.addBinding(z, M, {
        readonly: true,
        view: "text",
        interval: 0
      });
    } else z = null;
    l.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      E.div.style.display = "block", l.runModal && l.runModal(x, d, E);
    }), C = e;
  }
  const it = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, S = J({
    mesh: {
      nodes: F,
      elements: X,
      nodeInputs: D,
      elementInputs: L,
      deformOutputs: Y,
      analyzeOutputs: $
    },
    objects3D: U,
    settingsObj: it
  });
  document.body.append(S, Q({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(E.div);
  const q = new URLSearchParams(window.location.search).get("t"), B = q && O.find((e) => e.id === q) || O.find((e) => e.id === "zapata-aislada") || O[0];
  B && (K(B), (B.id === "zapata-aislada" || B.id === "zapata-viga-amarre") && setTimeout(() => j("iso"), 200));
});
