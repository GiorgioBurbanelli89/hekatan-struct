import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as p, P as D } from "./theme-CzzIlc4y.js";
import { g as Y } from "./getViewer-BpBQk0GY.js";
import { g as H } from "./styles-B8h3dtQW.js";
import { c as L } from "./renderModalTable-29W4CuGz.js";
import { z as N, __tla as __tla_0 } from "./zapataVigaAmarre-CAFZbpuf.js";
import { z as $, __tla as __tla_1 } from "./zapataAislada-CmJZXWcO.js";
import { p as q, __tla as __tla_2 } from "./plateThin-C30Q-WjQ.js";
import { p as G, __tla as __tla_3 } from "./plateThick-DrHD17l3.js";
import { m as J, __tla as __tla_4 } from "./membrana-Darbd52d.js";
import { s as K, __tla as __tla_5 } from "./shellThin-ORSIx719.js";
import { s as Q, __tla as __tla_6 } from "./shellThick-BSU3qF0E.js";
import { e as W, __tla as __tla_7 } from "./edificioAporticado-PkQ-5RVJ.js";
import { d as T, f as P } from "./units-CVPhvG5E.js";
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
  const b = [
    W,
    q,
    G,
    J,
    K,
    Q,
    $,
    N
  ], R = p.state([]), O = p.state([]), j = p.state({}), B = p.state({}), A = p.state({}), _ = p.state({}), M = p.state([]), d = {
    nodes: R,
    elements: O,
    nodeInputs: j,
    elementInputs: B,
    deformOutputs: A,
    analyzeOutputs: _,
    objects3D: M
  };
  let i = null, m = {}, y = null;
  const u = L();
  u.div.style.display = "none";
  function F() {
    d.objects3D.val = [], d.nodes.val = [], d.elements.val = [], d.nodeInputs.val = {}, d.elementInputs.val = {}, d.deformOutputs.val = {}, d.analyzeOutputs.val = {};
  }
  function X(e) {
    if (i = e, m = Object.fromEntries(Object.entries(e.params).map(([s, a]) => [
      s,
      a.default
    ])), F(), e.build(m, d, u), e.defaultShellResult) {
      const s = f.__settings;
      (s == null ? void 0 : s.shellResults) && (s.shellResults.val = e.defaultShellResult), (s == null ? void 0 : s.loads) && (s.loads.val = true), (s == null ? void 0 : s.supports) && (s.supports.val = true);
    }
    Z(e.availableShellResults), C(), ee();
  }
  function C() {
    const e = f.__settings;
    (e == null ? void 0 : e.displayScale) && (e.displayScale.val = -1);
  }
  function Z(e) {
    const s = f.querySelectorAll("select"), a = Array.from(s).find((l) => Array.from(l.options).some((t) => t.value === "bendingXX"));
    if (!a) return;
    for (const l of Array.from(a.options)) {
      const t = l.value === "none" || !e || e.includes(l.value);
      l.hidden = !t, l.disabled = !t;
    }
    const r = f.__settings;
    (r == null ? void 0 : r.shellResults) && (a.value = r.shellResults.val, a.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function S() {
    i && (F(), i.build(m, d, u), C());
  }
  const w = document.createElement("div");
  w.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px";
  document.body.appendChild(w);
  function v(e) {
    const s = f.__ctx;
    if (!s) return;
    const { camera: a, controls: r, render: l } = s, t = r.target.clone(), c = a.position.distanceTo(t) || 10;
    switch (e) {
      case "iso":
        a.position.set(t.x + c * 0.6, t.y - c * 0.6, t.z + c * 0.6);
        break;
      case "plan":
        a.position.set(t.x, t.y, t.z + c);
        break;
      case "elevX":
        a.position.set(t.x + c, t.y, t.z);
        break;
      case "elevY":
        a.position.set(t.x, t.y + c, t.z);
        break;
    }
    a.up.set(0, 0, 1), a.lookAt(t), r.update(), l == null ? void 0 : l();
  }
  function ee() {
    if (y && (y.dispose(), y = null), w.innerHTML = "", !i) return;
    const e = new D({
      container: w,
      title: i.name
    }), s = {
      id: i.id
    }, a = Object.fromEntries(b.map((o) => [
      `${o.category} \xB7 ${o.name}`,
      o.id
    ]));
    e.addBinding(s, "id", {
      label: "Ejemplo",
      options: a
    }).on("change", (o) => {
      const n = b.find((z) => z.id === o.value);
      n && X(n);
    });
    const r = e.addFolder({
      title: "Vista",
      expanded: false
    });
    r.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => v("iso")), r.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => v("plan")), r.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => v("elevX")), r.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => v("elevY"));
    const l = e.addFolder({
      title: "Unidades",
      expanded: false
    }), t = {
      force: P.val,
      disp: T.val
    };
    l.addBinding(t, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (o) => {
      P.val = o.value, S();
    }), l.addBinding(t, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (o) => {
      T.val = o.value, S();
    });
    const c = "Par\xE1metros", k = /* @__PURE__ */ new Map(), I = (o) => (k.has(o) || k.set(o, e.addFolder({
      title: o,
      expanded: o === c
    })), k.get(o));
    let g = null;
    const U = () => {
      g !== null && clearTimeout(g), g = window.setTimeout(() => {
        g = null, S();
      }, 120);
    };
    for (const [o, n] of Object.entries(i.params)) {
      const z = n.folder ?? c, V = I(z), h = {
        label: n.label ?? o
      };
      n.options !== void 0 ? h.options = n.options : (n.min !== void 0 && (h.min = n.min), n.max !== void 0 && (h.max = n.max), n.step !== void 0 && (h.step = n.step)), V.addBinding(m, o, h).on("change", () => {
        (i == null ? void 0 : i.onParamChange) && (i.onParamChange(o, m), e.refresh()), U();
      });
    }
    i.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      u.div.style.display = "block", i.runModal && i.runModal(m, d, u);
    }), y = e;
  }
  const te = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10
  }, f = Y({
    mesh: {
      nodes: R,
      elements: O,
      nodeInputs: j,
      elementInputs: B,
      deformOutputs: A,
      analyzeOutputs: _
    },
    objects3D: M,
    settingsObj: te
  });
  document.body.append(f, H({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(u.div);
  const E = new URLSearchParams(window.location.search).get("t"), x = E && b.find((e) => e.id === E) || b.find((e) => e.id === "zapata-aislada") || b[0];
  x && (X(x), (x.id === "zapata-aislada" || x.id === "zapata-viga-amarre") && setTimeout(() => v("iso"), 200));
});
