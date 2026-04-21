import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as b, P as $ } from "./theme-CzzIlc4y.js";
import { g as G } from "./getViewer-6Q4ZHSQ2.js";
import { g as J } from "./styles-B8h3dtQW.js";
import { c as K } from "./renderModalTable-29W4CuGz.js";
import { z as Q, __tla as __tla_0 } from "./zapataVigaAmarre-CAFZbpuf.js";
import { z as W, __tla as __tla_1 } from "./zapataAislada-CmJZXWcO.js";
import { p as tt, __tla as __tla_2 } from "./plateThin-C30Q-WjQ.js";
import { p as et, __tla as __tla_3 } from "./plateThick-DrHD17l3.js";
import { m as nt, __tla as __tla_4 } from "./membrana-Darbd52d.js";
import { s as ot, __tla as __tla_5 } from "./shellThin-ORSIx719.js";
import { s as at, __tla as __tla_6 } from "./shellThick-BSU3qF0E.js";
import { e as st, __tla as __tla_7 } from "./edificioAporticado-DG3xVeOI.js";
import { d as I, f as O } from "./units-CVPhvG5E.js";
import "./Text-CBH-tcJP.js";
import "./analyze-ClLKGn9k.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import { __tla as __tla_8 } from "./didacticCpp-Bnj9OwqQ.js";
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
  })()
]).then(async () => {
  const S = [
    st,
    tt,
    et,
    nt,
    ot,
    at,
    W,
    Q
  ], X = b.state([]), C = b.state([]), F = b.state({}), V = b.state({}), Y = b.state({}), U = b.state({}), D = b.state([]), p = {
    nodes: X,
    elements: C,
    nodeInputs: F,
    elementInputs: V,
    deformOutputs: Y,
    analyzeOutputs: U,
    objects3D: D
  };
  let c = null, y = {}, P = null;
  const w = K();
  w.div.style.display = "none";
  function q() {
    p.objects3D.val = [], p.nodes.val = [], p.elements.val = [], p.nodeInputs.val = {}, p.elementInputs.val = {}, p.deformOutputs.val = {}, p.analyzeOutputs.val = {};
  }
  function H(t) {
    if (c = t, y = Object.fromEntries(Object.entries(t.params).map(([a, o]) => [
      a,
      o.default
    ])), q(), t.build(y, p, w), t.defaultShellResult) {
      const a = h.__settings;
      (a == null ? void 0 : a.shellResults) && (a.shellResults.val = t.defaultShellResult), (a == null ? void 0 : a.loads) && (a.loads.val = true), (a == null ? void 0 : a.supports) && (a.supports.val = true);
    }
    it(t.availableShellResults), L(), N(), lt();
  }
  function L() {
    const t = h.__settings;
    (t == null ? void 0 : t.displayScale) && (t.displayScale.val = -1);
  }
  function N() {
    const t = h.__ctx, a = p.nodes.rawVal;
    if (!t || !(a == null ? void 0 : a.length)) return;
    const { camera: o, controls: l, render: r } = t;
    let e = 1 / 0, i = 1 / 0, u = 1 / 0, g = -1 / 0, m = -1 / 0, x = -1 / 0;
    for (const d of a) d[0] < e && (e = d[0]), d[0] > g && (g = d[0]), d[1] < i && (i = d[1]), d[1] > m && (m = d[1]), d[2] < u && (u = d[2]), d[2] > x && (x = d[2]);
    const n = (e + g) / 2, s = (i + m) / 2, v = (u + x) / 2, k = g - e, f = m - i, j = x - u, E = Math.max(Math.sqrt(k * k + f * f + j * j), 1), Z = 2.2 * E;
    l.target.set(n, s, v);
    const R = Z / Math.sqrt(3);
    o.position.set(n + R, s - R, v + R), o.up.set(0, 0, 1), o.near = E * 1e-3, o.far = E * 50, o.updateProjectionMatrix(), o.lookAt(n, s, v), l.update(), r == null ? void 0 : r();
    const A = h.__settings;
    (A == null ? void 0 : A.gridSize) && (A.gridSize.val = Math.max(Math.ceil(Math.max(k, f) * 1.2), 2));
  }
  function it(t) {
    const a = h.querySelectorAll("select"), o = Array.from(a).find((r) => Array.from(r.options).some((e) => e.value === "bendingXX"));
    if (!o) return;
    for (const r of Array.from(o.options)) {
      const e = r.value === "none" || !t || t.includes(r.value);
      r.hidden = !e, r.disabled = !e;
    }
    const l = h.__settings;
    (l == null ? void 0 : l.shellResults) && (o.value = l.shellResults.val, o.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function _() {
    c && (q(), c.build(y, p, w), L(), N());
  }
  const M = document.createElement("div");
  M.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px";
  document.body.appendChild(M);
  function z(t) {
    const a = h.__ctx;
    if (!a) return;
    const { camera: o, controls: l, render: r } = a, e = l.target.clone(), i = o.position.distanceTo(e) || 10;
    switch (t) {
      case "iso":
        o.position.set(e.x + i * 0.6, e.y - i * 0.6, e.z + i * 0.6);
        break;
      case "plan":
        o.position.set(e.x, e.y, e.z + i);
        break;
      case "elevX":
        o.position.set(e.x + i, e.y, e.z);
        break;
      case "elevY":
        o.position.set(e.x, e.y + i, e.z);
        break;
    }
    o.up.set(0, 0, 1), o.lookAt(e), l.update(), r == null ? void 0 : r();
  }
  function lt() {
    if (P && (P.dispose(), P = null), M.innerHTML = "", !c) return;
    const t = new $({
      container: M,
      title: c.name
    }), a = {
      id: c.id
    }, o = Object.fromEntries(S.map((n) => [
      `${n.category} \xB7 ${n.name}`,
      n.id
    ]));
    t.addBinding(a, "id", {
      label: "Ejemplo",
      options: o
    }).on("change", (n) => {
      const s = S.find((v) => v.id === n.value);
      s && H(s);
    });
    const l = t.addFolder({
      title: "Vista",
      expanded: false
    });
    l.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => z("iso")), l.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => z("plan")), l.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => z("elevX")), l.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => z("elevY"));
    const r = t.addFolder({
      title: "Unidades",
      expanded: false
    }), e = {
      force: O.val,
      disp: I.val
    };
    r.addBinding(e, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (n) => {
      O.val = n.value, _();
    }), r.addBinding(e, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (n) => {
      I.val = n.value, _();
    });
    const i = "Par\xE1metros", u = /* @__PURE__ */ new Map(), g = (n) => (u.has(n) || u.set(n, t.addFolder({
      title: n,
      expanded: n === i
    })), u.get(n));
    let m = null;
    const x = () => {
      m !== null && clearTimeout(m), m = window.setTimeout(() => {
        m = null, _();
      }, 120);
    };
    for (const [n, s] of Object.entries(c.params)) {
      const v = s.folder ?? i, k = g(v), f = {
        label: s.label ?? n
      };
      s.options !== void 0 ? f.options = s.options : (s.min !== void 0 && (f.min = s.min), s.max !== void 0 && (f.max = s.max), s.step !== void 0 && (f.step = s.step)), k.addBinding(y, n, f).on("change", () => {
        (c == null ? void 0 : c.onParamChange) && (c.onParamChange(n, y), t.refresh()), x();
      });
    }
    c.hasModal && t.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      w.div.style.display = "block", c.runModal && c.runModal(y, p, w);
    }), P = t;
  }
  const rt = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, h = G({
    mesh: {
      nodes: X,
      elements: C,
      nodeInputs: F,
      elementInputs: V,
      deformOutputs: Y,
      analyzeOutputs: U
    },
    objects3D: D,
    settingsObj: rt
  });
  document.body.append(h, J({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(w.div);
  const B = new URLSearchParams(window.location.search).get("t"), T = B && S.find((t) => t.id === B) || S.find((t) => t.id === "zapata-aislada") || S[0];
  T && (H(T), (T.id === "zapata-aislada" || T.id === "zapata-viga-amarre") && setTimeout(() => z("iso"), 200));
});
