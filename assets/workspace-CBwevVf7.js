import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as k, P as nt } from "./theme-CzzIlc4y.js";
import { c as ot, a as it, g as at } from "./getViewer-aUy3Y4mH.js";
import { g as st } from "./styles-Y66YTQNs.js";
import { c as lt } from "./renderModalTable-29W4CuGz.js";
import { z as rt, __tla as __tla_0 } from "./zapataVigaAmarre-ZIEkIpA5.js";
import { z as ct, __tla as __tla_1 } from "./zapataAislada-DXUkLbZF.js";
import { z as ft, __tla as __tla_2 } from "./zapataAisladaValidacion-Brghwuvj.js";
import { e as dt, __tla as __tla_3 } from "./edificioConLosa-BL-5DIT2.js";
import { e as mt, __tla as __tla_4 } from "./edificioConMuros-CTs7uE-N.js";
import { p as pt, __tla as __tla_5 } from "./plane-D7dv__0b.js";
import { m as ut, __tla as __tla_6 } from "./membranaCSI-bLtJdrZt.js";
import { p as yt, __tla as __tla_7 } from "./plateThin-C30Q-WjQ.js";
import { p as vt, __tla as __tla_8 } from "./plateThick-DrHD17l3.js";
import { m as bt, __tla as __tla_9 } from "./membrana-Darbd52d.js";
import { s as ht, __tla as __tla_10 } from "./shellThin-ORSIx719.js";
import { s as xt, __tla as __tla_11 } from "./shellThick-BSU3qF0E.js";
import { e as gt, __tla as __tla_12 } from "./edificioAporticado-BnvKrh7h.js";
import { t as wt, __tla as __tla_13 } from "./trussGen-CYTV_Ioz.js";
import { b as Mt, __tla as __tla_14 } from "./barraAxial-Bnm-0MrG.js";
import { p as St, __tla as __tla_15 } from "./portico2D-kxfBcLlJ.js";
import { t as kt, __tla as __tla_16 } from "./tower3D-tLRX3VEB.js";
import { g as It, __tla as __tla_17 } from "./galpon-BaNuuhBd.js";
import { e as zt, __tla as __tla_18 } from "./edifAcero-Cc34ndLY.js";
import { m as Tt, __tla as __tla_19 } from "./mezanine-D3iolUJX.js";
import { f as L, d as U, a as Pt, b as _t, t as Et, g as Ot, s as Ct, c as jt, m as At, e as Bt } from "./units-B3ou5gwn.js";
import { a as Lt } from "./exampleVersion-D1A_5i59.js";
import "./Text-BCbgLTjz.js";
import "./analyze-ClLKGn9k.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import { __tla as __tla_20 } from "./didacticCpp-Bnj9OwqQ.js";
import "./planeQ4-DGsGKcTr.js";
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
  const C = [
    Mt,
    wt,
    St,
    kt,
    It,
    gt,
    dt,
    mt,
    zt,
    Tt,
    yt,
    vt,
    bt,
    ut,
    pt,
    ht,
    xt,
    ct,
    ft,
    rt
  ];
  k.derive(() => {
    ot.val = L.val;
  });
  k.derive(() => {
    it.val = U.val;
  });
  const X = k.state([]), Y = k.state([]), q = k.state({}), N = k.state({}), K = k.state({}), H = k.state({}), G = k.state([]), h = {
    nodes: X,
    elements: Y,
    nodeInputs: q,
    elementInputs: N,
    deformOutputs: K,
    analyzeOutputs: H,
    objects3D: G
  };
  let r = null, g = {}, E = null, T = null, P = null;
  const _ = lt();
  _.div.style.display = "none";
  function J() {
    h.objects3D.val = [], h.nodes.val = [], h.elements.val = [], h.nodeInputs.val = {}, h.elementInputs.val = {}, h.deformOutputs.val = {}, h.analyzeOutputs.val = {};
  }
  function Z(t) {
    if (r = t, g = Object.fromEntries(Object.entries(t.params).map(([o, n]) => {
      const s = n.default;
      return n.unitType === "force" ? [
        o,
        Pt(s)
      ] : n.unitType === "moment" ? [
        o,
        _t(s)
      ] : [
        o,
        s
      ];
    })), Lt.v++, J(), t.build(Q(), h, _), t.defaultShellResult) {
      const o = z.__settings;
      (o == null ? void 0 : o.shellResults) && (o.shellResults.val = t.defaultShellResult), (o == null ? void 0 : o.loads) && (o.loads.val = true), (o == null ? void 0 : o.supports) && (o.supports.val = true);
    }
    Rt(t.availableShellResults), $t(), W(), D();
  }
  function $t() {
    var _a;
    const t = z.__settings;
    if (!(t == null ? void 0 : t.deformScale)) return;
    const o = h.nodes.rawVal, n = (_a = h.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(o == null ? void 0 : o.length) || !n) {
      t.deformScale.val = 1;
      return;
    }
    let s = 1 / 0, p = 1 / 0, f = 1 / 0, u = -1 / 0, d = -1 / 0, c = -1 / 0;
    for (const a of o) a[0] < s && (s = a[0]), a[0] > u && (u = a[0]), a[1] < p && (p = a[1]), a[1] > d && (d = a[1]), a[2] < f && (f = a[2]), a[2] > c && (c = a[2]);
    const y = Math.sqrt((u - s) ** 2 + (d - p) ** 2 + (c - f) ** 2) || 1;
    let m = 0;
    if (n.forEach((a) => {
      const v = Math.sqrt((a[0] || 0) ** 2 + (a[1] || 0) ** 2 + (a[2] || 0) ** 2);
      v > m && (m = v);
    }), m < 1e-30) {
      t.deformScale.val = 1;
      return;
    }
    t.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * y / m)), t.displayScale && (t.displayScale.val = -2);
  }
  function W() {
    const t = z.__ctx, o = h.nodes.rawVal;
    if (!t || !(o == null ? void 0 : o.length)) return;
    const { camera: n, controls: s, render: p } = t;
    let f = 1 / 0, u = 1 / 0, d = 1 / 0, c = -1 / 0, y = -1 / 0, m = -1 / 0;
    for (const b of o) b[0] < f && (f = b[0]), b[0] > c && (c = b[0]), b[1] < u && (u = b[1]), b[1] > y && (y = b[1]), b[2] < d && (d = b[2]), b[2] > m && (m = b[2]);
    const a = (f + c) / 2, v = (u + y) / 2, w = (d + m) / 2, e = c - f, i = y - u, x = m - d, M = Math.max(Math.sqrt(e * e + i * i + x * x), 1), I = 2.2 * M;
    s.target.set(a, v, w);
    const l = I / Math.sqrt(3);
    n.position.set(a + l, v - l, w + l), n.up.set(0, 0, 1), n.near = M * 1e-3, n.far = M * 50, n.updateProjectionMatrix(), n.lookAt(a, v, w), s.update(), p == null ? void 0 : p();
    const S = z.__settings;
    (S == null ? void 0 : S.gridSize) && (S.gridSize.val = Math.max(Math.ceil(Math.max(e, i) * 1.2), 2));
  }
  function Rt(t) {
    const o = z.querySelectorAll("select"), n = Array.from(o).find((p) => Array.from(p.options).some((f) => f.value === "bendingXX"));
    if (!n) return;
    for (const p of Array.from(n.options)) {
      const f = p.value === "none" || !t || t.includes(p.value);
      p.hidden = !f, p.disabled = !f;
    }
    const s = z.__settings;
    (s == null ? void 0 : s.shellResults) && (n.value = s.shellResults.val, n.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function Q() {
    if (!r) return {};
    const t = {
      ...g
    };
    for (const [o, n] of Object.entries(r.params)) n.unitType === "force" && (t[o] = Et(g[o])), n.unitType === "moment" && (t[o] = Ot(g[o]));
    return t;
  }
  function $() {
    if (r) {
      if (J(), r.build(Q(), h, _), W(), r.computedLabels && T) {
        const t = r.computedLabels(g, h);
        for (const o of Object.keys(T)) o in t && (T[o] = t[o]);
      }
      if (r.inlineComputed && P) for (const t of r.inlineComputed) {
        const o = `__inline_${t.after}_${t.label}`;
        P[o] = t.compute(g, h);
      }
      E == null ? void 0 : E.refresh();
    }
  }
  const j = document.createElement("div"), tt = "hk_paneHostPos", R = (() => {
    try {
      const t = localStorage.getItem(tt);
      if (t) return JSON.parse(t);
    } catch {
    }
    return null;
  })();
  j.style.cssText = "position:fixed;" + (R ? `left:${R.left}px;top:${R.top}px;right:auto;` : "top:96px;right:16px;") + "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px;box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);";
  document.body.appendChild(j);
  function et(t) {
    let n = t.querySelector(".tp-rotv_b, .tp-fldv_b");
    if (!n) {
      setTimeout(() => et(t), 200);
      return;
    }
    n.style.cursor = "move", n.style.userSelect = "none";
    let s = false, p = 0, f = 0, u = 0, d = 0;
    n.addEventListener("mousedown", (c) => {
      s = true, p = c.clientX, f = c.clientY;
      const y = t.getBoundingClientRect();
      u = y.left, d = y.top, t.style.right = "auto", t.style.left = `${u}px`, t.style.top = `${d}px`, c.preventDefault();
    }), window.addEventListener("mousemove", (c) => {
      if (!s) return;
      const y = c.clientX - p, m = c.clientY - f, a = Math.max(0, Math.min(window.innerWidth - 40, u + y)), v = Math.max(0, Math.min(window.innerHeight - 40, d + m));
      t.style.left = `${a}px`, t.style.top = `${v}px`;
    }), window.addEventListener("mouseup", () => {
      if (s) {
        s = false;
        try {
          localStorage.setItem(tt, JSON.stringify({
            left: parseFloat(t.style.left),
            top: parseFloat(t.style.top)
          }));
        } catch {
        }
      }
    });
  }
  function O(t) {
    const o = z.__ctx;
    if (!o) return;
    const { camera: n, controls: s, render: p } = o, f = h.nodes.rawVal ?? [];
    let u = 1 / 0, d = 1 / 0, c = 1 / 0, y = -1 / 0, m = -1 / 0, a = -1 / 0;
    for (const l of f) l[0] < u && (u = l[0]), l[0] > y && (y = l[0]), l[1] < d && (d = l[1]), l[1] > m && (m = l[1]), l[2] < c && (c = l[2]), l[2] > a && (a = l[2]);
    const v = (u + y) / 2, w = (d + m) / 2, e = (c + a) / 2, i = y - u || 1, x = m - d || 1, M = a - c || 1, I = Math.sqrt(i * i + x * x + M * M) || 5;
    if (s.target.set(v, w, e), t === "iso") {
      n.fov = 45;
      const l = I * 1.2;
      n.position.set(v + l * 0.6, w - l * 0.6, e + l * 0.6);
    } else {
      n.fov = 5;
      const S = I / 2 * 25;
      switch (t) {
        case "plan":
          n.position.set(v, w, e + S);
          break;
        case "elevX":
          n.position.set(v + S, w, e);
          break;
        case "elevY":
          n.position.set(v, w + S, e);
          break;
      }
    }
    n.up.set(0, 0, 1), n.updateProjectionMatrix(), n.lookAt(v, w, e), s.update(), p == null ? void 0 : p();
  }
  function D() {
    if (E && (E.dispose(), E = null), j.innerHTML = "", !r) return;
    const t = new nt({
      container: j,
      title: r.name
    });
    setTimeout(() => et(j), 0);
    const o = {
      id: r.id
    }, n = Object.fromEntries(C.map((e) => [
      `${e.category} \xB7 ${e.name}`,
      e.id
    ]));
    t.addBinding(o, "id", {
      label: "Ejemplo",
      options: n
    }).on("change", (e) => {
      const i = C.find((x) => x.id === e.value);
      i && Z(i);
    });
    const s = t.addFolder({
      title: "Vista",
      expanded: false
    });
    s.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => O("iso")), s.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => O("plan")), s.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => O("elevX")), s.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => O("elevY"));
    const p = t.addFolder({
      title: "Unidades",
      expanded: false
    }), f = {
      force: L.val,
      disp: U.val
    };
    p.addBinding(f, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (e) => {
      const i = L.val, x = e.value;
      if (r && i !== x) {
        const M = i === "kN" ? 1 : i === "tonf" ? 9.80665 : 4.4482216, I = x === "kN" ? 1 : x === "tonf" ? 9.80665 : 4.4482216;
        for (const [l, S] of Object.entries(r.params)) (S.unitType === "force" || S.unitType === "moment") && (g[l] = g[l] * M / I);
      }
      L.val = x, D(), $();
    }), p.addBinding(f, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        m: "m",
        in: "in"
      }
    }).on("change", (e) => {
      U.val = e.value, D(), $();
    });
    const u = "Par\xE1metros", d = /* @__PURE__ */ new Map(), c = (e) => e === u || /\bmodo\b/i.test(e) || /activar/i.test(e) || /combinaci/i.test(e), y = (e) => (d.has(e) || d.set(e, t.addFolder({
      title: e,
      expanded: c(e)
    })), d.get(e));
    let m = null;
    const a = () => {
      m !== null && clearTimeout(m), m = window.setTimeout(() => {
        m = null, $();
      }, 120);
    }, v = {}, w = /* @__PURE__ */ new Map();
    if (P = {}, r.inlineComputed) for (const e of r.inlineComputed) {
      const i = `__inline_${e.after}_${e.label}`;
      P[i] = e.compute(g, h), w.has(e.after) || w.set(e.after, []), w.get(e.after).push({
        label: e.label,
        key: i,
        compute: e.compute
      });
    }
    for (const [e, i] of Object.entries(r.params)) {
      const x = i.folder ?? u, M = y(x);
      if (i.boolean) {
        v[e] = g[e] >= 0.5, M.addBinding(v, e, {
          label: i.label ?? e
        }).on("change", (A) => {
          g[e] = A.value ? 1 : 0, (r == null ? void 0 : r.onParamChange) && (r.onParamChange(e, g), t.refresh()), a();
        });
        continue;
      }
      const I = Ct(i.label ?? e), l = i.unitType === "force" ? ` ${jt()}` : i.unitType === "moment" ? ` ${At()}` : i.unitType === "disp" ? ` ${Bt()}` : "", b = {
        label: I + l
      };
      i.options !== void 0 ? b.options = i.options : (i.min !== void 0 && (b.min = i.min), i.max !== void 0 && (b.max = i.max), i.step !== void 0 && (b.step = i.step)), M.addBinding(g, e, b).on("change", () => {
        (r == null ? void 0 : r.onParamChange) && (r.onParamChange(e, g), t.refresh()), a();
      });
      const F = w.get(e);
      if (F && P) for (const A of F) M.addBinding(P, A.key, {
        readonly: true,
        label: A.label,
        view: "text"
      });
    }
    if (r.computedLabels) {
      const e = t.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), i = r.computedLabels(g, h);
      T = {
        ...i
      }, console.log("[Calculados]", T);
      for (const x of Object.keys(i)) e.addBinding(T, x, {
        readonly: true,
        view: "text",
        interval: 0
      });
    } else T = null;
    r.hasModal && t.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      _.div.style.display = "block", r.runModal && r.runModal(g, h, _);
    }), E = t;
  }
  const Ut = {
    deformedShape: true,
    displayScale: -2,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, z = at({
    mesh: {
      nodes: X,
      elements: Y,
      nodeInputs: q,
      elementInputs: N,
      deformOutputs: K,
      analyzeOutputs: H
    },
    objects3D: G,
    settingsObj: Ut
  });
  document.body.append(z, st({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(_.div);
  const V = new URLSearchParams(window.location.search).get("t"), B = V && C.find((t) => t.id === V) || C.find((t) => t.id === "zapata-aislada") || C[0];
  B && (Z(B), (B.id === "zapata-aislada" || B.id === "zapata-viga-amarre") && setTimeout(() => O("iso"), 200));
});
