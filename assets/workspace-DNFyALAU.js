import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as m, P as M } from "./theme-CzzIlc4y.js";
import { g as U } from "./getViewer-BpBQk0GY.js";
import { g as V } from "./styles-B8h3dtQW.js";
import { c as D } from "./renderModalTable-29W4CuGz.js";
import { z as F, __tla as __tla_0 } from "./zapataVigaAmarre-DZo3fozE.js";
import { z as Y, __tla as __tla_1 } from "./zapataAislada-tMn5isa_.js";
import { p as H, __tla as __tla_2 } from "./plateThin-C30Q-WjQ.js";
import { p as L, __tla as __tla_3 } from "./plateThick-DrHD17l3.js";
import { m as N, __tla as __tla_4 } from "./membrana-Darbd52d.js";
import { s as $, __tla as __tla_5 } from "./shellThin-D6-HrlUZ.js";
import { s as q, __tla as __tla_6 } from "./shellThick-BSU3qF0E.js";
import { e as G, __tla as __tla_7 } from "./edificioAporticado-ChQ4aaFf.js";
import { d as z, f as P } from "./units-CVPhvG5E.js";
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
    G,
    H,
    L,
    N,
    $,
    q,
    Y,
    F
  ], E = m.state([]), R = m.state([]), T = m.state({}), O = m.state({}), j = m.state({}), B = m.state({}), A = m.state([]), d = {
    nodes: E,
    elements: R,
    nodeInputs: T,
    elementInputs: O,
    deformOutputs: j,
    analyzeOutputs: B,
    objects3D: A
  };
  let i = null, u = {}, y = null;
  const f = D();
  f.div.style.display = "none";
  function _() {
    d.objects3D.val = [], d.nodes.val = [], d.elements.val = [], d.nodeInputs.val = {}, d.elementInputs.val = {}, d.deformOutputs.val = {}, d.analyzeOutputs.val = {};
  }
  function X(t) {
    if (i = t, u = Object.fromEntries(Object.entries(t.params).map(([a, o]) => [
      a,
      o.default
    ])), _(), t.build(u, d, f), t.defaultShellResult) {
      const a = h.__settings;
      (a == null ? void 0 : a.shellResults) && (a.shellResults.val = t.defaultShellResult), (a == null ? void 0 : a.loads) && (a.loads.val = true), (a == null ? void 0 : a.supports) && (a.supports.val = true);
    }
    J(t.availableShellResults), C(), K();
  }
  function C() {
    const t = h.__settings;
    (t == null ? void 0 : t.displayScale) && (t.displayScale.val = 1);
  }
  function J(t) {
    const a = h.querySelectorAll("select"), o = Array.from(a).find((l) => Array.from(l.options).some((e) => e.value === "bendingXX"));
    if (!o) return;
    for (const l of Array.from(o.options)) {
      const e = l.value === "none" || !t || t.includes(l.value);
      l.hidden = !e, l.disabled = !e;
    }
    const r = h.__settings;
    (r == null ? void 0 : r.shellResults) && (o.value = r.shellResults.val, o.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function w() {
    i && (_(), i.build(u, d, f), C());
  }
  const k = document.createElement("div");
  k.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px";
  document.body.appendChild(k);
  function v(t) {
    const a = h.__ctx;
    if (!a) return;
    const { camera: o, controls: r, render: l } = a, e = r.target.clone(), c = o.position.distanceTo(e) || 10;
    switch (t) {
      case "iso":
        o.position.set(e.x + c * 0.6, e.y - c * 0.6, e.z + c * 0.6);
        break;
      case "plan":
        o.position.set(e.x, e.y, e.z + c);
        break;
      case "elevX":
        o.position.set(e.x + c, e.y, e.z);
        break;
      case "elevY":
        o.position.set(e.x, e.y + c, e.z);
        break;
    }
    o.up.set(0, 0, 1), o.lookAt(e), r.update(), l == null ? void 0 : l();
  }
  function K() {
    if (y && (y.dispose(), y = null), k.innerHTML = "", !i) return;
    const t = new M({
      container: k,
      title: i.name
    }), a = {
      id: i.id
    }, o = Object.fromEntries(b.map((s) => [
      `${s.category} \xB7 ${s.name}`,
      s.id
    ]));
    t.addBinding(a, "id", {
      label: "Ejemplo",
      options: o
    }).on("change", (s) => {
      const n = b.find((p) => p.id === s.value);
      n && X(n);
    });
    const r = t.addFolder({
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
    const l = t.addFolder({
      title: "Unidades",
      expanded: false
    }), e = {
      force: P.val,
      disp: z.val
    };
    l.addBinding(e, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (s) => {
      P.val = s.value, w();
    }), l.addBinding(e, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (s) => {
      z.val = s.value, w();
    });
    const c = t.addFolder({
      title: "Par\xE1metros"
    });
    let g = null;
    const I = () => {
      g !== null && clearTimeout(g), g = window.setTimeout(() => {
        g = null, w();
      }, 120);
    };
    for (const [s, n] of Object.entries(i.params)) {
      const p = {
        label: n.label ?? s
      };
      n.options !== void 0 ? p.options = n.options : (n.min !== void 0 && (p.min = n.min), n.max !== void 0 && (p.max = n.max), n.step !== void 0 && (p.step = n.step)), c.addBinding(u, s, p).on("change", () => {
        (i == null ? void 0 : i.onParamChange) && (i.onParamChange(s, u), t.refresh()), I();
      });
    }
    i.hasModal && t.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      f.div.style.display = "block", i.runModal && i.runModal(u, d, f);
    }), y = t;
  }
  const Q = {
    deformedShape: true,
    shellResults: "pressure",
    gridSize: 10
  }, h = U({
    mesh: {
      nodes: E,
      elements: R,
      nodeInputs: T,
      elementInputs: O,
      deformOutputs: j,
      analyzeOutputs: B
    },
    objects3D: A,
    settingsObj: Q
  });
  document.body.append(h, V({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(f.div);
  const S = new URLSearchParams(window.location.search).get("t"), x = S && b.find((t) => t.id === S) || b.find((t) => t.id === "zapata-aislada") || b[0];
  x && (X(x), (x.id === "zapata-aislada" || x.id === "zapata-viga-amarre") && setTimeout(() => v("iso"), 200));
});
