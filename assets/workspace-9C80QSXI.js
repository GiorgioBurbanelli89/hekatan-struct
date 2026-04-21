import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as b, P as Z } from "./theme-CzzIlc4y.js";
import { g as $ } from "./getViewer-6Q4ZHSQ2.js";
import { g as J } from "./styles-B8h3dtQW.js";
import { c as K } from "./renderModalTable-29W4CuGz.js";
import { z as Q, __tla as __tla_0 } from "./zapataVigaAmarre-CCmblxVn.js";
import { z as W, __tla as __tla_1 } from "./zapataAislada-CB87K9uw.js";
import { p as tt, __tla as __tla_2 } from "./plateThin-C30Q-WjQ.js";
import { p as et, __tla as __tla_3 } from "./plateThick-DrHD17l3.js";
import { m as ot, __tla as __tla_4 } from "./membrana-Darbd52d.js";
import { s as at, __tla as __tla_5 } from "./shellThin-ORSIx719.js";
import { s as nt, __tla as __tla_6 } from "./shellThick-BSU3qF0E.js";
import { e as st, __tla as __tla_7 } from "./edificioAporticado-DG3xVeOI.js";
import { t as it, __tla as __tla_8 } from "./trussGen-CYTV_Ioz.js";
import { b as lt, __tla as __tla_9 } from "./barraAxial-Bnm-0MrG.js";
import { p as rt, __tla as __tla_10 } from "./portico2D-kxfBcLlJ.js";
import { t as ct, __tla as __tla_11 } from "./tower3D-tLRX3VEB.js";
import { g as dt, __tla as __tla_12 } from "./galpon-BaNuuhBd.js";
import { e as mt, __tla as __tla_13 } from "./edifAcero-Dhwvq9Mc.js";
import { m as pt, __tla as __tla_14 } from "./mezanine-BmEOOT1G.js";
import { d as I, f as O } from "./units-CVPhvG5E.js";
import "./Text-CBH-tcJP.js";
import "./analyze-ClLKGn9k.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import { __tla as __tla_15 } from "./didacticCpp-Bnj9OwqQ.js";
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
  const S = [
    lt,
    it,
    rt,
    ct,
    dt,
    st,
    mt,
    pt,
    tt,
    et,
    ot,
    at,
    nt,
    W,
    Q
  ], X = b.state([]), C = b.state([]), F = b.state({}), D = b.state({}), V = b.state({}), Y = b.state({}), U = b.state([]), m = {
    nodes: X,
    elements: C,
    nodeInputs: F,
    elementInputs: D,
    deformOutputs: V,
    analyzeOutputs: Y,
    objects3D: U
  };
  let d = null, y = {}, P = null;
  const w = K();
  w.div.style.display = "none";
  function q() {
    m.objects3D.val = [], m.nodes.val = [], m.elements.val = [], m.nodeInputs.val = {}, m.elementInputs.val = {}, m.deformOutputs.val = {}, m.analyzeOutputs.val = {};
  }
  function G(t) {
    if (d = t, y = Object.fromEntries(Object.entries(t.params).map(([n, a]) => [
      n,
      a.default
    ])), q(), t.build(y, m, w), t.defaultShellResult) {
      const n = h.__settings;
      (n == null ? void 0 : n.shellResults) && (n.shellResults.val = t.defaultShellResult), (n == null ? void 0 : n.loads) && (n.loads.val = true), (n == null ? void 0 : n.supports) && (n.supports.val = true);
    }
    ft(t.availableShellResults), H(), L(), ut();
  }
  function H() {
    const t = h.__settings;
    (t == null ? void 0 : t.displayScale) && (t.displayScale.val = -1);
  }
  function L() {
    const t = h.__ctx, n = m.nodes.rawVal;
    if (!t || !(n == null ? void 0 : n.length)) return;
    const { camera: a, controls: l, render: r } = t;
    let e = 1 / 0, i = 1 / 0, u = 1 / 0, g = -1 / 0, p = -1 / 0, x = -1 / 0;
    for (const c of n) c[0] < e && (e = c[0]), c[0] > g && (g = c[0]), c[1] < i && (i = c[1]), c[1] > p && (p = c[1]), c[2] < u && (u = c[2]), c[2] > x && (x = c[2]);
    const o = (e + g) / 2, s = (i + p) / 2, v = (u + x) / 2, z = g - e, f = p - i, _ = x - u, A = Math.max(Math.sqrt(z * z + f * f + _ * _), 1), N = 2.2 * A;
    l.target.set(o, s, v);
    const E = N / Math.sqrt(3);
    a.position.set(o + E, s - E, v + E), a.up.set(0, 0, 1), a.near = A * 1e-3, a.far = A * 50, a.updateProjectionMatrix(), a.lookAt(o, s, v), l.update(), r == null ? void 0 : r();
    const j = h.__settings;
    (j == null ? void 0 : j.gridSize) && (j.gridSize.val = Math.max(Math.ceil(Math.max(z, f) * 1.2), 2));
  }
  function ft(t) {
    const n = h.querySelectorAll("select"), a = Array.from(n).find((r) => Array.from(r.options).some((e) => e.value === "bendingXX"));
    if (!a) return;
    for (const r of Array.from(a.options)) {
      const e = r.value === "none" || !t || t.includes(r.value);
      r.hidden = !e, r.disabled = !e;
    }
    const l = h.__settings;
    (l == null ? void 0 : l.shellResults) && (a.value = l.shellResults.val, a.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function R() {
    d && (q(), d.build(y, m, w), H(), L());
  }
  const M = document.createElement("div");
  M.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px";
  document.body.appendChild(M);
  function k(t) {
    const n = h.__ctx;
    if (!n) return;
    const { camera: a, controls: l, render: r } = n, e = l.target.clone(), i = a.position.distanceTo(e) || 10;
    switch (t) {
      case "iso":
        a.position.set(e.x + i * 0.6, e.y - i * 0.6, e.z + i * 0.6);
        break;
      case "plan":
        a.position.set(e.x, e.y, e.z + i);
        break;
      case "elevX":
        a.position.set(e.x + i, e.y, e.z);
        break;
      case "elevY":
        a.position.set(e.x, e.y + i, e.z);
        break;
    }
    a.up.set(0, 0, 1), a.lookAt(e), l.update(), r == null ? void 0 : r();
  }
  function ut() {
    if (P && (P.dispose(), P = null), M.innerHTML = "", !d) return;
    const t = new Z({
      container: M,
      title: d.name
    }), n = {
      id: d.id
    }, a = Object.fromEntries(S.map((o) => [
      `${o.category} \xB7 ${o.name}`,
      o.id
    ]));
    t.addBinding(n, "id", {
      label: "Ejemplo",
      options: a
    }).on("change", (o) => {
      const s = S.find((v) => v.id === o.value);
      s && G(s);
    });
    const l = t.addFolder({
      title: "Vista",
      expanded: false
    });
    l.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => k("iso")), l.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => k("plan")), l.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => k("elevX")), l.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => k("elevY"));
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
    }).on("change", (o) => {
      O.val = o.value, R();
    }), r.addBinding(e, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (o) => {
      I.val = o.value, R();
    });
    const i = "Par\xE1metros", u = /* @__PURE__ */ new Map(), g = (o) => (u.has(o) || u.set(o, t.addFolder({
      title: o,
      expanded: o === i
    })), u.get(o));
    let p = null;
    const x = () => {
      p !== null && clearTimeout(p), p = window.setTimeout(() => {
        p = null, R();
      }, 120);
    };
    for (const [o, s] of Object.entries(d.params)) {
      const v = s.folder ?? i, z = g(v), f = {
        label: s.label ?? o
      };
      s.options !== void 0 ? f.options = s.options : (s.min !== void 0 && (f.min = s.min), s.max !== void 0 && (f.max = s.max), s.step !== void 0 && (f.step = s.step)), z.addBinding(y, o, f).on("change", () => {
        (d == null ? void 0 : d.onParamChange) && (d.onParamChange(o, y), t.refresh()), x();
      });
    }
    d.hasModal && t.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      w.div.style.display = "block", d.runModal && d.runModal(y, m, w);
    }), P = t;
  }
  const ht = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, h = $({
    mesh: {
      nodes: X,
      elements: C,
      nodeInputs: F,
      elementInputs: D,
      deformOutputs: V,
      analyzeOutputs: Y
    },
    objects3D: U,
    settingsObj: ht
  });
  document.body.append(h, J({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(w.div);
  const B = new URLSearchParams(window.location.search).get("t"), T = B && S.find((t) => t.id === B) || S.find((t) => t.id === "zapata-aislada") || S[0];
  T && (G(T), (T.id === "zapata-aislada" || T.id === "zapata-viga-amarre") && setTimeout(() => k("iso"), 200));
});
