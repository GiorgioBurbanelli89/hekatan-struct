import "./modulepreload-polyfill-B5Qt9EMX.js";
import { _ as G, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { v as S, P as J } from "./theme-CzzIlc4y.js";
import { g as Q } from "./getViewer-DXzw4WPM.js";
import { g as W } from "./styles-Z6stOm1O.js";
import { c as tt } from "./renderModalTable-29W4CuGz.js";
import { e as R, a as et, __tla as __tla_1 } from "./exampleRegistry-le-M_Egm.js";
import { d as V, f as F } from "./units-CVPhvG5E.js";
import "./Text-CBH-tcJP.js";
import "./analyze-ClLKGn9k.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import { __tla as __tla_2 } from "./plateThickValidacion-D_mgYE7c.js";
import { __tla as __tla_3 } from "./plateThin-C30Q-WjQ.js";
import { __tla as __tla_4 } from "./plateThick-DrHD17l3.js";
import { __tla as __tla_5 } from "./membrana-Darbd52d.js";
import { __tla as __tla_6 } from "./shellThin-ORSIx719.js";
import { __tla as __tla_7 } from "./shellThick-BSU3qF0E.js";
import { __tla as __tla_8 } from "./edificioAporticado-DG3xVeOI.js";
import { __tla as __tla_9 } from "./trussGen-CYTV_Ioz.js";
import { __tla as __tla_10 } from "./barraAxial-Bnm-0MrG.js";
import { __tla as __tla_11 } from "./portico2D-kxfBcLlJ.js";
import { __tla as __tla_12 } from "./tower3D-tLRX3VEB.js";
import { __tla as __tla_13 } from "./galpon-BaNuuhBd.js";
import { __tla as __tla_14 } from "./edifAcero-Dhwvq9Mc.js";
import { __tla as __tla_15 } from "./mezanine-BmEOOT1G.js";
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
  })()
]).then(async () => {
  const q = S.state([]), L = S.state([]), X = S.state({}), D = S.state({}), U = S.state({}), Y = S.state({}), $ = S.state([]), d = {
    nodes: q,
    elements: L,
    nodeInputs: X,
    elementInputs: D,
    deformOutputs: U,
    analyzeOutputs: Y,
    objects3D: $
  };
  let s = null, x = {}, C = null, z = null, P = null, nt = [];
  const E = tt();
  E.div.style.display = "none";
  function H() {
    d.objects3D.val = [], d.nodes.val = [], d.elements.val = [], d.nodeInputs.val = {}, d.elementInputs.val = {}, d.deformOutputs.val = {}, d.analyzeOutputs.val = {};
  }
  function K(e) {
    if (s = e, x = Object.fromEntries(Object.entries(e.params).map(([a, i]) => [
      a,
      i.default
    ])), et.v++, H(), e.build(x, d, E), e.defaultShellResult) {
      const a = k.__settings;
      (a == null ? void 0 : a.shellResults) && (a.shellResults.val = e.defaultShellResult), (a == null ? void 0 : a.loads) && (a.loads.val = true), (a == null ? void 0 : a.supports) && (a.supports.val = true);
    }
    it(e.availableShellResults), N(), Z(), ot();
  }
  function N() {
    var _a;
    const e = k.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const a = d.nodes.rawVal, i = (_a = d.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(a == null ? void 0 : a.length) || !i) {
      e.deformScale.val = 1;
      return;
    }
    let f = 1 / 0, p = 1 / 0, c = 1 / 0, m = -1 / 0, u = -1 / 0, v = -1 / 0;
    for (const o of a) o[0] < f && (f = o[0]), o[0] > m && (m = o[0]), o[1] < p && (p = o[1]), o[1] > u && (u = o[1]), o[2] < c && (c = o[2]), o[2] > v && (v = o[2]);
    const g = Math.sqrt((m - f) ** 2 + (u - p) ** 2 + (v - c) ** 2) || 1;
    let r = 0;
    if (i.forEach((o) => {
      const h = Math.sqrt((o[0] || 0) ** 2 + (o[1] || 0) ** 2 + (o[2] || 0) ** 2);
      h > r && (r = h);
    }), r < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * g / r)), e.displayScale && (e.displayScale.val = 1);
  }
  function Z() {
    const e = k.__ctx, a = d.nodes.rawVal;
    if (!e || !(a == null ? void 0 : a.length)) return;
    const { camera: i, controls: f, render: p } = e;
    let c = 1 / 0, m = 1 / 0, u = 1 / 0, v = -1 / 0, g = -1 / 0, r = -1 / 0;
    for (const b of a) b[0] < c && (c = b[0]), b[0] > v && (v = b[0]), b[1] < m && (m = b[1]), b[1] > g && (g = b[1]), b[2] < u && (u = b[2]), b[2] > r && (r = b[2]);
    const o = (c + v) / 2, h = (m + g) / 2, y = (u + r) / 2, t = v - c, n = g - m, w = r - u, _ = Math.max(Math.sqrt(t * t + n * n + w * w), 1), I = 2.2 * _;
    f.target.set(o, h, y);
    const l = I / Math.sqrt(3);
    i.position.set(o + l, h - l, y + l), i.up.set(0, 0, 1), i.near = _ * 1e-3, i.far = _ * 50, i.updateProjectionMatrix(), i.lookAt(o, h, y), f.update(), p == null ? void 0 : p();
    const M = k.__settings;
    (M == null ? void 0 : M.gridSize) && (M.gridSize.val = Math.max(Math.ceil(Math.max(t, n) * 1.2), 2));
  }
  function it(e) {
    const a = k.querySelectorAll("select"), i = Array.from(a).find((p) => Array.from(p.options).some((c) => c.value === "bendingXX"));
    if (!i) return;
    for (const p of Array.from(i.options)) {
      const c = p.value === "none" || !e || e.includes(p.value);
      p.hidden = !c, p.disabled = !c;
    }
    const f = k.__settings;
    (f == null ? void 0 : f.shellResults) && (i.value = f.shellResults.val, i.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function T() {
    if (s) {
      if (H(), s.build(x, d, E), N(), Z(), s.computedLabels && z) {
        const e = s.computedLabels(x, d);
        for (const a of Object.keys(z)) a in e && (z[a] = e[a]);
      }
      if (s.inlineComputed && P) for (const e of s.inlineComputed) {
        const a = `__inline_${e.after}_${e.label}`;
        P[a] = e.compute(x, d);
      }
      C == null ? void 0 : C.refresh();
    }
  }
  const A = document.createElement("div");
  A.style.cssText = "position:fixed;top:96px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px";
  document.body.appendChild(A);
  function O(e) {
    const a = k.__ctx;
    if (!a) return;
    const { camera: i, controls: f, render: p } = a, c = d.nodes.rawVal ?? [];
    let m = 1 / 0, u = 1 / 0, v = 1 / 0, g = -1 / 0, r = -1 / 0, o = -1 / 0;
    for (const l of c) l[0] < m && (m = l[0]), l[0] > g && (g = l[0]), l[1] < u && (u = l[1]), l[1] > r && (r = l[1]), l[2] < v && (v = l[2]), l[2] > o && (o = l[2]);
    const h = (m + g) / 2, y = (u + r) / 2, t = (v + o) / 2, n = g - m || 1, w = r - u || 1, _ = o - v || 1, I = Math.sqrt(n * n + w * w + _ * _) || 5;
    if (f.target.set(h, y, t), e === "iso") {
      i.fov = 45;
      const l = I * 1.2;
      i.position.set(h + l * 0.6, y - l * 0.6, t + l * 0.6);
    } else {
      i.fov = 5;
      const M = I / 2 * 25;
      switch (e) {
        case "plan":
          i.position.set(h, y, t + M);
          break;
        case "elevX":
          i.position.set(h + M, y, t);
          break;
        case "elevY":
          i.position.set(h, y + M, t);
          break;
      }
    }
    i.up.set(0, 0, 1), i.updateProjectionMatrix(), i.lookAt(h, y, t), f.update(), p == null ? void 0 : p();
  }
  function ot() {
    if (C && (C.dispose(), C = null), A.innerHTML = "", !s) return;
    const e = new J({
      container: A,
      title: s.name
    }), a = {
      id: s.id
    }, i = Object.fromEntries(R.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(a, "id", {
      label: "Ejemplo",
      options: i
    }).on("change", (t) => {
      const n = R.find((w) => w.id === t.value);
      n && K(n);
    }), e.addButton({
      title: "\u{1F4D0} Reporte matem\xE1tico FEM"
    }).on("click", () => {
      s && G(async () => {
        const { openMathReport: t } = await import("./mathReport-BaMgfvFs.js");
        return {
          openMathReport: t
        };
      }, []).then(({ openMathReport: t }) => {
        t(s.id, s.name, x, d);
      });
    });
    const f = e.addFolder({
      title: "Vista",
      expanded: false
    });
    f.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => O("iso")), f.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => O("plan")), f.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => O("elevX")), f.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => O("elevY"));
    const p = e.addFolder({
      title: "Unidades",
      expanded: false
    }), c = {
      force: F.val,
      disp: V.val
    };
    p.addBinding(c, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      F.val = t.value, T();
    }), p.addBinding(c, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (t) => {
      V.val = t.value, T();
    });
    const m = "Par\xE1metros", u = /* @__PURE__ */ new Map(), v = (t) => t === m || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), g = (t) => (u.has(t) || u.set(t, e.addFolder({
      title: t,
      expanded: v(t)
    })), u.get(t));
    let r = null;
    const o = () => {
      r !== null && clearTimeout(r), r = window.setTimeout(() => {
        r = null, T();
      }, 120);
    }, h = {}, y = /* @__PURE__ */ new Map();
    if (P = {}, s.inlineComputed) for (const t of s.inlineComputed) {
      const n = `__inline_${t.after}_${t.label}`;
      P[n] = t.compute(x, d), y.has(t.after) || y.set(t.after, []), y.get(t.after).push({
        label: t.label,
        key: n,
        compute: t.compute
      });
    }
    for (const [t, n] of Object.entries(s.params)) {
      const w = n.folder ?? m, _ = g(w);
      if (n.boolean) {
        h[t] = x[t] >= 0.5;
        const M = _.addBinding(h, t, {
          label: n.label ?? t
        });
        M.on("change", (b) => {
          x[t] = b.value ? 1 : 0, (s == null ? void 0 : s.onParamChange) && (s.onParamChange(t, x), e.refresh()), applyHiddenBindings(), o();
        }), n.hiddenIf && nt.push({
          binding: M,
          hiddenIf: n.hiddenIf
        });
        continue;
      }
      const I = {
        label: n.label ?? t
      };
      n.options !== void 0 ? I.options = n.options : (n.min !== void 0 && (I.min = n.min), n.max !== void 0 && (I.max = n.max), n.step !== void 0 && (I.step = n.step)), _.addBinding(x, t, I).on("change", () => {
        (s == null ? void 0 : s.onParamChange) && (s.onParamChange(t, x), e.refresh()), o();
      });
      const l = y.get(t);
      if (l && P) for (const M of l) _.addBinding(P, M.key, {
        readonly: true,
        label: M.label,
        view: "text"
      });
    }
    if (s.computedLabels) {
      const t = e.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), n = s.computedLabels(x, d);
      z = {
        ...n
      }, console.log("[Calculados]", z);
      for (const w of Object.keys(n)) t.addBinding(z, w, {
        readonly: true,
        view: "text",
        interval: 0
      });
    } else z = null;
    s.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      E.div.style.display = "block", s.runModal && s.runModal(x, d, E);
    }), C = e;
  }
  const at = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, k = Q({
    mesh: {
      nodes: q,
      elements: L,
      nodeInputs: X,
      elementInputs: D,
      deformOutputs: U,
      analyzeOutputs: Y
    },
    objects3D: $,
    settingsObj: at
  });
  document.body.append(k, W({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(E.div);
  let j = new URLSearchParams(window.location.search).get("t");
  if (!j || j === "zapata-aislada") {
    j = "zapata-aislada-validacion";
    try {
      const e = new URL(window.location.href);
      e.searchParams.set("t", j), window.history.replaceState(null, "", e.toString());
    } catch {
    }
  }
  const B = R.find((e) => e.id === j) || R.find((e) => e.id === "zapata-aislada-validacion") || R[0];
  B && (K(B), (B.id === "zapata-aislada" || B.id === "zapata-aislada-validacion" || B.id === "zapata-viga-amarre") && setTimeout(() => O("iso"), 200));
});
