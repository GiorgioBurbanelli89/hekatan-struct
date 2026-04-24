import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as q, P as ye } from "./theme-CzzIlc4y.js";
import { c as he, a as ge, g as be } from "./getViewer-aUy3Y4mH.js";
import { g as ve } from "./styles-Y66YTQNs.js";
import { c as Me } from "./renderModalTable-29W4CuGz.js";
import { z as we, __tla as __tla_0 } from "./zapataVigaAmarre-ZIEkIpA5.js";
import { z as Ie, __tla as __tla_1 } from "./zapataAislada-DXUkLbZF.js";
import { z as Se, __tla as __tla_2 } from "./zapataAisladaValidacion-Brghwuvj.js";
import { e as ke, __tla as __tla_3 } from "./edificioConLosa-BL-5DIT2.js";
import { e as ze, __tla as __tla_4 } from "./edificioConMuros-CTs7uE-N.js";
import { p as Pe, __tla as __tla_5 } from "./plane-D7dv__0b.js";
import { m as Te, __tla as __tla_6 } from "./membranaCSI-bLtJdrZt.js";
import { p as qe, __tla as __tla_7 } from "./plateThin-C30Q-WjQ.js";
import { p as _e, __tla as __tla_8 } from "./plateThick-DrHD17l3.js";
import { m as Ce, __tla as __tla_9 } from "./membrana-Darbd52d.js";
import { s as Ee, __tla as __tla_10 } from "./shellThin-ORSIx719.js";
import { s as Ae, __tla as __tla_11 } from "./shellThick-BSU3qF0E.js";
import { e as Fe, __tla as __tla_12 } from "./edificioAporticado-BnvKrh7h.js";
import { t as Oe, __tla as __tla_13 } from "./trussGen-CYTV_Ioz.js";
import { b as $e, __tla as __tla_14 } from "./barraAxial-Bnm-0MrG.js";
import { p as Re, __tla as __tla_15 } from "./portico2D-kxfBcLlJ.js";
import { t as Be, __tla as __tla_16 } from "./tower3D-tLRX3VEB.js";
import { g as je, __tla as __tla_17 } from "./galpon-BaNuuhBd.js";
import { e as Le, __tla as __tla_18 } from "./edifAcero-Cc34ndLY.js";
import { m as Ue, __tla as __tla_19 } from "./mezanine-D3iolUJX.js";
import { f as N, d as G, a as De, b as Ve, t as Ne, g as Xe, s as Ye, c as He, m as Ke, e as Ge } from "./units-B3ou5gwn.js";
import { a as Je } from "./exampleVersion-D1A_5i59.js";
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
  function Ze(e) {
    const { mesh: a, viewerElm: i } = e, f = e.scalePercent, [g, h] = e.visFrequencyRange ?? [
      0.5,
      3
    ];
    let o = null, r = 0, c = 0, u = [];
    const d = document.createElement("div");
    d.id = "modal-animation-badge", d.style.cssText = `
    position: fixed; bottom: 16px; right: 16px; z-index: 9999;
    background: linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%);
    color: #fff; font-family: monospace; font-size: 13px; font-weight: 700;
    padding: 10px 16px; border-radius: 8px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.45);
    display: none; pointer-events: none;
    border: 1px solid rgba(255,255,255,0.25);
    letter-spacing: 0.3px;
  `, d.innerHTML = "\u26A1 Modal", document.body.appendChild(d);
    function s() {
      var _a;
      if (!o || !o.frequencies || o.frequencies.length === 0) {
        d.style.display = "none";
        return;
      }
      const n = o.frequencies[r] ?? 0, m = n > 0 ? 1 / n : 0, x = (_a = o.massParticipation) == null ? void 0 : _a[r], k = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ];
      let l = "\u2014";
      if (x) {
        let w = 0, y = 0;
        for (let z = 0; z < 6; z++) Math.abs(x[z]) > w && (w = Math.abs(x[z]), y = z);
        l = `${k[y]} (${(w * 100).toFixed(0)}%)`;
      }
      d.innerHTML = `\u26A1 Modo ${r + 1} / ${o.frequencies.length} <br><span style="color:#fde047">f = ${n.toFixed(3)} Hz</span> \xB7 <span style="color:#a5f3fc">T = ${m.toFixed(3)} s</span> <br><span style="color:#86efac;font-size:11px">Dominante: ${l}</span>`, d.style.display = "block";
    }
    function v() {
      return i.__ctx;
    }
    function M(n) {
      c && (cancelAnimationFrame(c), c = 0), n && u.length > 0 && (a.nodes.val = u.map((m) => [
        ...m
      ])), d.style.display = "none";
    }
    function t() {
      var _a, _b;
      if (!o || !o.modeShapes || o.modeShapes.length === 0 || !o.modeShapes[r]) return;
      M(false);
      const n = o.modeShapes[r], m = ((_a = o.frequencies) == null ? void 0 : _a[r]) || 1, x = ((_b = o.frequencies) == null ? void 0 : _b[0]) || 1, k = Math.max(g, Math.min(h, m / x));
      u = a.nodes.rawVal.map((b) => [
        ...b
      ]);
      const l = u.length;
      let w = 1 / 0, y = 1 / 0, z = 1 / 0, _ = -1 / 0, X = -1 / 0, Y = -1 / 0;
      for (const b of u) b[0] < w && (w = b[0]), b[0] > _ && (_ = b[0]), b[1] < y && (y = b[1]), b[1] > X && (X = b[1]), b[2] < z && (z = b[2]), b[2] > Y && (Y = b[2]);
      const pe = Math.sqrt((_ - w) ** 2 + (X - y) ** 2 + (Y - z) ** 2) || 1;
      let D = 0;
      for (let b = 0; b < l; b++) {
        const F = n[b * 6] || 0, B = n[b * 6 + 1] || 0, P = n[b * 6 + 2] || 0, O = Math.sqrt(F * F + B * B + P * P);
        O > D && (D = O);
      }
      const ue = D > 1e-12 ? pe * f / 100 / D : 1;
      s();
      const xe = performance.now(), ne = () => {
        var _a2;
        const b = (performance.now() - xe) / 1e3, F = Math.sin(2 * Math.PI * k * b) * ue, B = new Array(l);
        for (let P = 0; P < l; P++) {
          const O = u[P];
          B[P] = [
            O[0] + (n[P * 6] || 0) * F,
            O[1] + (n[P * 6 + 1] || 0) * F,
            O[2] + (n[P * 6 + 2] || 0) * F
          ];
        }
        a.nodes.val = B, (_a2 = v()) == null ? void 0 : _a2.render(), c = requestAnimationFrame(ne);
      };
      c = requestAnimationFrame(ne);
    }
    return {
      setResults(n) {
        var _a;
        o = n, r >= (((_a = n == null ? void 0 : n.frequencies) == null ? void 0 : _a.length) ?? 0) && (r = 0), s();
      },
      setMode(n) {
        var _a;
        if (!o) return;
        const m = ((_a = o.frequencies) == null ? void 0 : _a.length) ?? 0;
        r = Math.max(0, Math.min(m - 1, n)), c !== 0 ? t() : s();
      },
      play() {
        o && c === 0 && t();
      },
      stop() {
        M(true);
      },
      isPlaying() {
        return c !== 0;
      },
      modeCount() {
        var _a;
        return ((_a = o == null ? void 0 : o.frequencies) == null ? void 0 : _a.length) ?? 0;
      },
      currentMode() {
        return r;
      },
      currentFreq() {
        var _a;
        return ((_a = o == null ? void 0 : o.frequencies) == null ? void 0 : _a[r]) ?? 0;
      },
      dispose() {
        M(true), d.remove(), o = null;
      }
    };
  }
  const L = [
    $e,
    Oe,
    Re,
    Be,
    je,
    Fe,
    ke,
    ze,
    Le,
    Ue,
    qe,
    _e,
    Ce,
    Te,
    Pe,
    Ee,
    Ae,
    Ie,
    Se,
    we
  ];
  q.derive(() => {
    he.val = N.val;
  });
  q.derive(() => {
    ge.val = G.val;
  });
  const Z = q.state([]), W = q.state([]), ae = q.state({}), se = q.state({}), Q = q.state({}), ee = q.state({}), re = q.state([]), I = {
    nodes: Z,
    elements: W,
    nodeInputs: ae,
    elementInputs: se,
    deformOutputs: Q,
    analyzeOutputs: ee,
    objects3D: re
  };
  let p = null, S = {}, $ = null;
  const oe = {
    modeIdx: 1
  };
  let C, E = null, R = null;
  const A = Me();
  A.div.style.display = "none";
  function le() {
    I.objects3D.val = [], I.nodes.val = [], I.elements.val = [], I.nodeInputs.val = {}, I.elementInputs.val = {}, I.deformOutputs.val = {}, I.analyzeOutputs.val = {};
  }
  function ce(e) {
    if (p = e, S = Object.fromEntries(Object.entries(e.params).map(([a, i]) => {
      const f = i.default;
      return i.unitType === "force" ? [
        a,
        De(f)
      ] : i.unitType === "moment" ? [
        a,
        Ve(f)
      ] : [
        a,
        f
      ];
    })), Je.v++, le(), e.build(te(), I, A), e.defaultShellResult) {
      const a = T.__settings;
      (a == null ? void 0 : a.shellResults) && (a.shellResults.val = e.defaultShellResult), (a == null ? void 0 : a.loads) && (a.loads.val = true), (a == null ? void 0 : a.supports) && (a.supports.val = true);
    }
    Qe(e.availableShellResults), We(), de(), J();
  }
  function We() {
    var _a;
    const e = T.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const a = I.nodes.rawVal, i = (_a = I.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(a == null ? void 0 : a.length) || !i) {
      e.deformScale.val = 1;
      return;
    }
    let f = 1 / 0, g = 1 / 0, h = 1 / 0, o = -1 / 0, r = -1 / 0, c = -1 / 0;
    for (const s of a) s[0] < f && (f = s[0]), s[0] > o && (o = s[0]), s[1] < g && (g = s[1]), s[1] > r && (r = s[1]), s[2] < h && (h = s[2]), s[2] > c && (c = s[2]);
    const u = Math.sqrt((o - f) ** 2 + (r - g) ** 2 + (c - h) ** 2) || 1;
    let d = 0;
    if (i.forEach((s) => {
      const v = Math.sqrt((s[0] || 0) ** 2 + (s[1] || 0) ** 2 + (s[2] || 0) ** 2);
      v > d && (d = v);
    }), d < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * u / d)), e.displayScale && (e.displayScale.val = -2);
  }
  function de() {
    const e = T.__ctx, a = I.nodes.rawVal;
    if (!e || !(a == null ? void 0 : a.length)) return;
    const { camera: i, controls: f, render: g } = e;
    let h = 1 / 0, o = 1 / 0, r = 1 / 0, c = -1 / 0, u = -1 / 0, d = -1 / 0;
    for (const y of a) y[0] < h && (h = y[0]), y[0] > c && (c = y[0]), y[1] < o && (o = y[1]), y[1] > u && (u = y[1]), y[2] < r && (r = y[2]), y[2] > d && (d = y[2]);
    const s = (h + c) / 2, v = (o + u) / 2, M = (r + d) / 2, t = c - h, n = u - o, m = d - r, x = Math.max(Math.sqrt(t * t + n * n + m * m), 1), k = 2.2 * x;
    f.target.set(s, v, M);
    const l = k / Math.sqrt(3);
    i.position.set(s + l, v - l, M + l), i.up.set(0, 0, 1), i.near = x * 1e-3, i.far = x * 50, i.updateProjectionMatrix(), i.lookAt(s, v, M), f.update(), g == null ? void 0 : g();
    const w = T.__settings;
    (w == null ? void 0 : w.gridSize) && (w.gridSize.val = Math.max(Math.ceil(Math.max(t, n) * 1.2), 2));
  }
  function Qe(e) {
    const a = T.querySelectorAll("select"), i = Array.from(a).find((g) => Array.from(g.options).some((h) => h.value === "bendingXX"));
    if (!i) return;
    for (const g of Array.from(i.options)) {
      const h = g.value === "none" || !e || e.includes(g.value);
      g.hidden = !h, g.disabled = !h;
    }
    const f = T.__settings;
    (f == null ? void 0 : f.shellResults) && (i.value = f.shellResults.val, i.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function te() {
    if (!p) return {};
    const e = {
      ...S
    };
    for (const [a, i] of Object.entries(p.params)) i.unitType === "force" && (e[a] = Ne(S[a])), i.unitType === "moment" && (e[a] = Xe(S[a]));
    return e;
  }
  function H() {
    if (p) {
      if (le(), p.build(te(), I, A), de(), p.computedLabels && E) {
        const e = p.computedLabels(S, I);
        for (const a of Object.keys(E)) a in e && (E[a] = e[a]);
      }
      if (p.inlineComputed && R) for (const e of p.inlineComputed) {
        const a = `__inline_${e.after}_${e.label}`;
        R[a] = e.compute(S, I);
      }
      $ == null ? void 0 : $.refresh();
    }
  }
  const U = document.createElement("div"), fe = "hk_paneHostPos", K = (() => {
    try {
      const e = localStorage.getItem(fe);
      if (e) return JSON.parse(e);
    } catch {
    }
    return null;
  })();
  U.style.cssText = "position:fixed;" + (K ? `left:${K.left}px;top:${K.top}px;right:auto;` : "top:96px;right:16px;") + "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px;box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);";
  document.body.appendChild(U);
  function me(e) {
    let i = e.querySelector(".tp-rotv_b, .tp-fldv_b");
    if (!i) {
      setTimeout(() => me(e), 200);
      return;
    }
    i.style.cursor = "move", i.style.userSelect = "none";
    let f = false, g = 0, h = 0, o = 0, r = 0;
    i.addEventListener("mousedown", (c) => {
      f = true, g = c.clientX, h = c.clientY;
      const u = e.getBoundingClientRect();
      o = u.left, r = u.top, e.style.right = "auto", e.style.left = `${o}px`, e.style.top = `${r}px`, c.preventDefault();
    }), window.addEventListener("mousemove", (c) => {
      if (!f) return;
      const u = c.clientX - g, d = c.clientY - h, s = Math.max(0, Math.min(window.innerWidth - 40, o + u)), v = Math.max(0, Math.min(window.innerHeight - 40, r + d));
      e.style.left = `${s}px`, e.style.top = `${v}px`;
    }), window.addEventListener("mouseup", () => {
      if (f) {
        f = false;
        try {
          localStorage.setItem(fe, JSON.stringify({
            left: parseFloat(e.style.left),
            top: parseFloat(e.style.top)
          }));
        } catch {
        }
      }
    });
  }
  function j(e) {
    const a = T.__ctx;
    if (!a) return;
    const { camera: i, controls: f, render: g } = a, h = I.nodes.rawVal ?? [];
    let o = 1 / 0, r = 1 / 0, c = 1 / 0, u = -1 / 0, d = -1 / 0, s = -1 / 0;
    for (const l of h) l[0] < o && (o = l[0]), l[0] > u && (u = l[0]), l[1] < r && (r = l[1]), l[1] > d && (d = l[1]), l[2] < c && (c = l[2]), l[2] > s && (s = l[2]);
    const v = (o + u) / 2, M = (r + d) / 2, t = (c + s) / 2, n = u - o || 1, m = d - r || 1, x = s - c || 1, k = Math.sqrt(n * n + m * m + x * x) || 5;
    if (f.target.set(v, M, t), e === "iso") {
      i.fov = 45;
      const l = k * 1.2;
      i.position.set(v + l * 0.6, M - l * 0.6, t + l * 0.6);
    } else {
      i.fov = 5;
      const w = k / 2 * 25;
      switch (e) {
        case "plan":
          i.position.set(v, M, t + w);
          break;
        case "elevX":
          i.position.set(v + w, M, t);
          break;
        case "elevY":
          i.position.set(v, M + w, t);
          break;
      }
    }
    i.up.set(0, 0, 1), i.updateProjectionMatrix(), i.lookAt(v, M, t), f.update(), g == null ? void 0 : g();
  }
  function J() {
    if ($ && ($.dispose(), $ = null), U.innerHTML = "", !p) return;
    const e = new ye({
      container: U,
      title: p.name
    });
    setTimeout(() => me(U), 0);
    const a = {
      id: p.id
    }, i = Object.fromEntries(L.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(a, "id", {
      label: "Ejemplo",
      options: i
    }).on("change", (t) => {
      const n = L.find((m) => m.id === t.value);
      n && ce(n);
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
    const g = e.addFolder({
      title: "Unidades",
      expanded: false
    }), h = {
      force: N.val,
      disp: G.val
    };
    g.addBinding(h, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      const n = N.val, m = t.value;
      if (p && n !== m) {
        const x = n === "kN" ? 1 : n === "tonf" ? 9.80665 : 4.4482216, k = m === "kN" ? 1 : m === "tonf" ? 9.80665 : 4.4482216;
        for (const [l, w] of Object.entries(p.params)) (w.unitType === "force" || w.unitType === "moment") && (S[l] = S[l] * x / k);
      }
      N.val = m, J(), H();
    }), g.addBinding(h, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        m: "m",
        in: "in"
      }
    }).on("change", (t) => {
      G.val = t.value, J(), H();
    });
    const o = "Par\xE1metros", r = /* @__PURE__ */ new Map(), c = (t) => t === o || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), u = (t) => (r.has(t) || r.set(t, e.addFolder({
      title: t,
      expanded: c(t)
    })), r.get(t));
    let d = null;
    const s = () => {
      d !== null && clearTimeout(d), d = window.setTimeout(() => {
        d = null, H();
      }, 120);
    }, v = {}, M = /* @__PURE__ */ new Map();
    if (R = {}, p.inlineComputed) for (const t of p.inlineComputed) {
      const n = `__inline_${t.after}_${t.label}`;
      R[n] = t.compute(S, I), M.has(t.after) || M.set(t.after, []), M.get(t.after).push({
        label: t.label,
        key: n,
        compute: t.compute
      });
    }
    for (const [t, n] of Object.entries(p.params)) {
      const m = n.folder ?? o, x = u(m);
      if (n.boolean) {
        v[t] = S[t] >= 0.5, x.addBinding(v, t, {
          label: n.label ?? t
        }).on("change", (_) => {
          S[t] = _.value ? 1 : 0, (p == null ? void 0 : p.onParamChange) && (p.onParamChange(t, S), e.refresh()), s();
        });
        continue;
      }
      const k = Ye(n.label ?? t), l = n.unitType === "force" ? ` ${He()}` : n.unitType === "moment" ? ` ${Ke()}` : n.unitType === "disp" ? ` ${Ge()}` : "", y = {
        label: k + l
      };
      n.options !== void 0 ? y.options = n.options : (n.min !== void 0 && (y.min = n.min), n.max !== void 0 && (y.max = n.max), n.step !== void 0 && (y.step = n.step)), x.addBinding(S, t, y).on("change", () => {
        (p == null ? void 0 : p.onParamChange) && (p.onParamChange(t, S), e.refresh()), s();
      });
      const z = M.get(t);
      if (z && R) for (const _ of z) x.addBinding(R, _.key, {
        readonly: true,
        label: _.label,
        view: "text"
      });
    }
    if (p.computedLabels) {
      const t = e.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), n = p.computedLabels(S, I);
      E = {
        ...n
      }, console.log("[Calculados]", E);
      for (const m of Object.keys(n)) t.addBinding(E, m, {
        readonly: true,
        view: "text",
        interval: 0
      });
    } else E = null;
    if (p.hasModal) {
      const t = e.addFolder({
        title: "\u26A1 Modal + Animaci\xF3n",
        expanded: true
      });
      let n = null;
      const m = {
        div: A.div,
        render: (x, k) => {
          var _a;
          n = x, A.render(x, k), ((_a = x == null ? void 0 : x.frequencies) == null ? void 0 : _a.length) && (C.setResults(x), C.setMode(0), C.play(), oe.modeIdx = 1, $ == null ? void 0 : $.refresh());
        }
      };
      t.addButton({
        title: "\u25B6 Correr modal + animar"
      }).on("click", () => {
        A.div.style.display = "block", p.runModal && p.runModal(te(), I, m);
      }), t.addBinding(oe, "modeIdx", {
        label: "Modo #",
        min: 1,
        max: 30,
        step: 1
      }).on("change", (x) => {
        n && C.setMode(Math.round(x.value) - 1);
      }), t.addButton({
        title: "\u23F8 Pausar"
      }).on("click", () => C.stop()), t.addButton({
        title: "\u25B6 Reanudar"
      }).on("click", () => {
        n && C.play();
      });
    }
    $ = e;
  }
  const et = {
    deformedShape: true,
    displayScale: -1.5,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, T = be({
    mesh: {
      nodes: Z,
      elements: W,
      nodeInputs: ae,
      elementInputs: se,
      deformOutputs: Q,
      analyzeOutputs: ee
    },
    objects3D: re,
    settingsObj: et
  });
  document.body.append(T, ve({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(A.div);
  C = Ze({
    mesh: {
      nodes: Z,
      elements: W,
      deformOutputs: Q,
      analyzeOutputs: ee
    },
    viewerElm: T,
    scalePercent: 5
  });
  const ie = new URLSearchParams(window.location.search).get("t"), V = ie && L.find((e) => e.id === ie) || L.find((e) => e.id === "zapata-aislada") || L[0];
  V && (ce(V), (V.id === "zapata-aislada" || V.id === "zapata-viga-amarre") && setTimeout(() => j("iso"), 200));
});
