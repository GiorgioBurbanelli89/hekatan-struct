import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as C, P as N } from "./theme-CzzIlc4y.js";
import { g as Z } from "./getViewer-DCEDXJ2J.js";
import { g as J } from "./styles-Y66YTQNs.js";
import { c as Q } from "./renderModalTable-29W4CuGz.js";
import { z as W, __tla as __tla_0 } from "./zapataVigaAmarre-ZIEkIpA5.js";
import { z as tt, __tla as __tla_1 } from "./zapataAislada-DXUkLbZF.js";
import { z as et, __tla as __tla_2 } from "./zapataAisladaValidacion-Brghwuvj.js";
import { e as nt, __tla as __tla_3 } from "./edificioConLosa-BL-5DIT2.js";
import { e as ot, __tla as __tla_4 } from "./edificioConMuros-CTs7uE-N.js";
import { p as it, __tla as __tla_5 } from "./plane-MPvkUdLa.js";
import { m as at, __tla as __tla_6 } from "./membranaCSI-Ba_Zr0-H.js";
import { p as st, __tla as __tla_7 } from "./plateThin-C30Q-WjQ.js";
import { p as lt, __tla as __tla_8 } from "./plateThick-DrHD17l3.js";
import { m as rt, __tla as __tla_9 } from "./membrana-Darbd52d.js";
import { s as ct, __tla as __tla_10 } from "./shellThin-ORSIx719.js";
import { s as dt, __tla as __tla_11 } from "./shellThick-BSU3qF0E.js";
import { e as ft, __tla as __tla_12 } from "./edificioAporticado-BnvKrh7h.js";
import { t as mt, __tla as __tla_13 } from "./trussGen-CYTV_Ioz.js";
import { b as pt, __tla as __tla_14 } from "./barraAxial-Bnm-0MrG.js";
import { p as ut, __tla as __tla_15 } from "./portico2D-kxfBcLlJ.js";
import { t as ht, __tla as __tla_16 } from "./tower3D-tLRX3VEB.js";
import { g as bt, __tla as __tla_17 } from "./galpon-BaNuuhBd.js";
import { e as vt, __tla as __tla_18 } from "./edifAcero-Cc34ndLY.js";
import { m as yt, __tla as __tla_19 } from "./mezanine-D3iolUJX.js";
import { d as R, f as V } from "./units-CVPhvG5E.js";
import { a as xt } from "./exampleVersion-D1A_5i59.js";
import "./Text-BCbgLTjz.js";
import "./analyze-ClLKGn9k.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import { __tla as __tla_20 } from "./didacticCpp-Bnj9OwqQ.js";
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
  })(),
  (() => {
    try {
      return __tla_15;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_16;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_17;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_18;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_19;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_20;
    } catch {
    }
  })()
]).then(async () => {
  const j = [
    pt,
    mt,
    ut,
    ht,
    bt,
    ft,
    nt,
    ot,
    vt,
    yt,
    st,
    lt,
    rt,
    at,
    it,
    ct,
    dt,
    tt,
    et,
    W
  ], D = C.state([]), F = C.state([]), X = C.state({}), L = C.state({}), Y = C.state({}), $ = C.state({}), U = C.state([]), d = {
    nodes: D,
    elements: F,
    nodeInputs: X,
    elementInputs: L,
    deformOutputs: Y,
    analyzeOutputs: $,
    objects3D: U
  };
  let l = null, x = {}, E = null, S = null, _ = null;
  const P = Q();
  P.div.style.display = "none";
  function G() {
    d.objects3D.val = [], d.nodes.val = [], d.elements.val = [], d.nodeInputs.val = {}, d.elementInputs.val = {}, d.deformOutputs.val = {}, d.analyzeOutputs.val = {};
  }
  function H(e) {
    if (l = e, x = Object.fromEntries(Object.entries(e.params).map(([a, n]) => [
      a,
      n.default
    ])), xt.v++, G(), e.build(x, d, P), e.defaultShellResult) {
      const a = I.__settings;
      (a == null ? void 0 : a.shellResults) && (a.shellResults.val = e.defaultShellResult), (a == null ? void 0 : a.loads) && (a.loads.val = true), (a == null ? void 0 : a.supports) && (a.supports.val = true);
    }
    Mt(e.availableShellResults), gt(), K(), wt();
  }
  function gt() {
    var _a;
    const e = I.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const a = d.nodes.rawVal, n = (_a = d.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(a == null ? void 0 : a.length) || !n) {
      e.deformScale.val = 1;
      return;
    }
    let f = 1 / 0, m = 1 / 0, c = 1 / 0, u = -1 / 0, p = -1 / 0, b = -1 / 0;
    for (const o of a) o[0] < f && (f = o[0]), o[0] > u && (u = o[0]), o[1] < m && (m = o[1]), o[1] > p && (p = o[1]), o[2] < c && (c = o[2]), o[2] > b && (b = o[2]);
    const y = Math.sqrt((u - f) ** 2 + (p - m) ** 2 + (b - c) ** 2) || 1;
    let r = 0;
    if (n.forEach((o) => {
      const h = Math.sqrt((o[0] || 0) ** 2 + (o[1] || 0) ** 2 + (o[2] || 0) ** 2);
      h > r && (r = h);
    }), r < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * y / r)), e.displayScale && (e.displayScale.val = -2);
  }
  function K() {
    const e = I.__ctx, a = d.nodes.rawVal;
    if (!e || !(a == null ? void 0 : a.length)) return;
    const { camera: n, controls: f, render: m } = e;
    let c = 1 / 0, u = 1 / 0, p = 1 / 0, b = -1 / 0, y = -1 / 0, r = -1 / 0;
    for (const g of a) g[0] < c && (c = g[0]), g[0] > b && (b = g[0]), g[1] < u && (u = g[1]), g[1] > y && (y = g[1]), g[2] < p && (p = g[2]), g[2] > r && (r = g[2]);
    const o = (c + b) / 2, h = (u + y) / 2, v = (p + r) / 2, t = b - c, i = y - u, M = r - p, k = Math.max(Math.sqrt(t * t + i * i + M * M), 1), z = 2.2 * k;
    f.target.set(o, h, v);
    const s = z / Math.sqrt(3);
    n.position.set(o + s, h - s, v + s), n.up.set(0, 0, 1), n.near = k * 1e-3, n.far = k * 50, n.updateProjectionMatrix(), n.lookAt(o, h, v), f.update(), m == null ? void 0 : m();
    const w = I.__settings;
    (w == null ? void 0 : w.gridSize) && (w.gridSize.val = Math.max(Math.ceil(Math.max(t, i) * 1.2), 2));
  }
  function Mt(e) {
    const a = I.querySelectorAll("select"), n = Array.from(a).find((m) => Array.from(m.options).some((c) => c.value === "bendingXX"));
    if (!n) return;
    for (const m of Array.from(n.options)) {
      const c = m.value === "none" || !e || e.includes(m.value);
      m.hidden = !c, m.disabled = !c;
    }
    const f = I.__settings;
    (f == null ? void 0 : f.shellResults) && (n.value = f.shellResults.val, n.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function T() {
    if (l) {
      if (G(), l.build(x, d, P), K(), l.computedLabels && S) {
        const e = l.computedLabels(x, d);
        for (const a of Object.keys(S)) a in e && (S[a] = e[a]);
      }
      if (l.inlineComputed && _) for (const e of l.inlineComputed) {
        const a = `__inline_${e.after}_${e.label}`;
        _[a] = e.compute(x, d);
      }
      E == null ? void 0 : E.refresh();
    }
  }
  const B = document.createElement("div");
  B.style.cssText = "position:fixed;top:96px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px";
  document.body.appendChild(B);
  function A(e) {
    const a = I.__ctx;
    if (!a) return;
    const { camera: n, controls: f, render: m } = a, c = d.nodes.rawVal ?? [];
    let u = 1 / 0, p = 1 / 0, b = 1 / 0, y = -1 / 0, r = -1 / 0, o = -1 / 0;
    for (const s of c) s[0] < u && (u = s[0]), s[0] > y && (y = s[0]), s[1] < p && (p = s[1]), s[1] > r && (r = s[1]), s[2] < b && (b = s[2]), s[2] > o && (o = s[2]);
    const h = (u + y) / 2, v = (p + r) / 2, t = (b + o) / 2, i = y - u || 1, M = r - p || 1, k = o - b || 1, z = Math.sqrt(i * i + M * M + k * k) || 5;
    if (f.target.set(h, v, t), e === "iso") {
      n.fov = 45;
      const s = z * 1.2;
      n.position.set(h + s * 0.6, v - s * 0.6, t + s * 0.6);
    } else {
      n.fov = 5;
      const w = z / 2 * 25;
      switch (e) {
        case "plan":
          n.position.set(h, v, t + w);
          break;
        case "elevX":
          n.position.set(h + w, v, t);
          break;
        case "elevY":
          n.position.set(h, v + w, t);
          break;
      }
    }
    n.up.set(0, 0, 1), n.updateProjectionMatrix(), n.lookAt(h, v, t), f.update(), m == null ? void 0 : m();
  }
  function wt() {
    if (E && (E.dispose(), E = null), B.innerHTML = "", !l) return;
    const e = new N({
      container: B,
      title: l.name
    }), a = {
      id: l.id
    }, n = Object.fromEntries(j.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(a, "id", {
      label: "Ejemplo",
      options: n
    }).on("change", (t) => {
      const i = j.find((M) => M.id === t.value);
      i && H(i);
    });
    const f = e.addFolder({
      title: "Vista",
      expanded: false
    });
    f.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => A("iso")), f.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => A("plan")), f.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => A("elevX")), f.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => A("elevY"));
    const m = e.addFolder({
      title: "Unidades",
      expanded: false
    }), c = {
      force: V.val,
      disp: R.val
    };
    m.addBinding(c, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      V.val = t.value, T();
    }), m.addBinding(c, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (t) => {
      R.val = t.value, T();
    });
    const u = "Par\xE1metros", p = /* @__PURE__ */ new Map(), b = (t) => t === u || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), y = (t) => (p.has(t) || p.set(t, e.addFolder({
      title: t,
      expanded: b(t)
    })), p.get(t));
    let r = null;
    const o = () => {
      r !== null && clearTimeout(r), r = window.setTimeout(() => {
        r = null, T();
      }, 120);
    }, h = {}, v = /* @__PURE__ */ new Map();
    if (_ = {}, l.inlineComputed) for (const t of l.inlineComputed) {
      const i = `__inline_${t.after}_${t.label}`;
      _[i] = t.compute(x, d), v.has(t.after) || v.set(t.after, []), v.get(t.after).push({
        label: t.label,
        key: i,
        compute: t.compute
      });
    }
    for (const [t, i] of Object.entries(l.params)) {
      const M = i.folder ?? u, k = y(M);
      if (i.boolean) {
        h[t] = x[t] >= 0.5, k.addBinding(h, t, {
          label: i.label ?? t
        }).on("change", (w) => {
          x[t] = w.value ? 1 : 0, (l == null ? void 0 : l.onParamChange) && (l.onParamChange(t, x), e.refresh()), o();
        });
        continue;
      }
      const z = {
        label: i.label ?? t
      };
      i.options !== void 0 ? z.options = i.options : (i.min !== void 0 && (z.min = i.min), i.max !== void 0 && (z.max = i.max), i.step !== void 0 && (z.step = i.step)), k.addBinding(x, t, z).on("change", () => {
        (l == null ? void 0 : l.onParamChange) && (l.onParamChange(t, x), e.refresh()), o();
      });
      const s = v.get(t);
      if (s && _) for (const w of s) k.addBinding(_, w.key, {
        readonly: true,
        label: w.label,
        view: "text"
      });
    }
    if (l.computedLabels) {
      const t = e.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), i = l.computedLabels(x, d);
      S = {
        ...i
      }, console.log("[Calculados]", S);
      for (const M of Object.keys(i)) t.addBinding(S, M, {
        readonly: true,
        view: "text",
        interval: 0
      });
    } else S = null;
    l.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      P.div.style.display = "block", l.runModal && l.runModal(x, d, P);
    }), E = e;
  }
  const kt = {
    deformedShape: true,
    displayScale: -2,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, I = Z({
    mesh: {
      nodes: D,
      elements: F,
      nodeInputs: X,
      elementInputs: L,
      deformOutputs: Y,
      analyzeOutputs: $
    },
    objects3D: U,
    settingsObj: kt
  });
  document.body.append(I, J({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(P.div);
  const q = new URLSearchParams(window.location.search).get("t"), O = q && j.find((e) => e.id === q) || j.find((e) => e.id === "zapata-aislada") || j[0];
  O && (H(O), (O.id === "zapata-aislada" || O.id === "zapata-viga-amarre") && setTimeout(() => A("iso"), 200));
});
