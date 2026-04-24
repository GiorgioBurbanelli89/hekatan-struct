import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as _, P as ve } from "./theme-CzzIlc4y.js";
import { c as ge, a as be, g as Me } from "./getViewer-aUy3Y4mH.js";
import { g as we } from "./styles-Y66YTQNs.js";
import { c as Se } from "./renderModalTable-29W4CuGz.js";
import { z as Ie, __tla as __tla_0 } from "./zapataVigaAmarre-ZIEkIpA5.js";
import { z as qe, __tla as __tla_1 } from "./zapataAislada-DXUkLbZF.js";
import { z as Pe, __tla as __tla_2 } from "./zapataAisladaValidacion-Brghwuvj.js";
import { e as ke, __tla as __tla_3 } from "./edificioConLosa-BL-5DIT2.js";
import { e as ze, __tla as __tla_4 } from "./edificioConMuros-CTs7uE-N.js";
import { p as Te, __tla as __tla_5 } from "./plane-D7dv__0b.js";
import { m as Ce, __tla as __tla_6 } from "./membranaCSI-bLtJdrZt.js";
import { p as _e, __tla as __tla_7 } from "./plateThin-C30Q-WjQ.js";
import { p as Ee, __tla as __tla_8 } from "./plateThick-DrHD17l3.js";
import { m as Ae, __tla as __tla_9 } from "./membrana-Darbd52d.js";
import { s as Be, __tla as __tla_10 } from "./shellThin-ORSIx719.js";
import { s as Fe, __tla as __tla_11 } from "./shellThick-BSU3qF0E.js";
import { e as Oe, __tla as __tla_12 } from "./edificioAporticado-BnvKrh7h.js";
import { t as Re, __tla as __tla_13 } from "./trussGen-CYTV_Ioz.js";
import { b as $e, __tla as __tla_14 } from "./barraAxial-Bnm-0MrG.js";
import { p as je, __tla as __tla_15 } from "./portico2D-kxfBcLlJ.js";
import { t as De, __tla as __tla_16 } from "./tower3D-tLRX3VEB.js";
import { g as Ue, __tla as __tla_17 } from "./galpon-BaNuuhBd.js";
import { e as Le, __tla as __tla_18 } from "./edifAcero-Cc34ndLY.js";
import { m as Ve, __tla as __tla_19 } from "./mezanine-D3iolUJX.js";
import { f as N, d as ee, a as Ne, b as Xe, t as Ye, g as He, s as Ke, c as Ge, m as Je, e as Ze } from "./units-B3ou5gwn.js";
import { a as We } from "./exampleVersion-D1A_5i59.js";
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
  function se(t) {
    const { mesh: a, viewerElm: i, onStatusChange: c } = t, x = t.scalePercent ?? 5, [h, v] = t.visFrequencyRange ?? [
      0.5,
      3
    ];
    let o = null, l = 0, f = 0, m = [];
    function r() {
      c == null ? void 0 : c();
    }
    function M() {
      var _a;
      if (!o || !o.frequencies || o.frequencies.length === 0) return {
        mode: "Sin resultados",
        frequency: "\u2014",
        period: "\u2014",
        dominant: "\u2014",
        state: "\u23F8 Detenido"
      };
      const s = o.frequencies[l] ?? 0, g = s > 0 ? 1 / s : 0, y = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], d = (_a = o.massParticipation) == null ? void 0 : _a[l];
      let I = "\u2014";
      if (d) {
        let u = 0, C = 0;
        for (let P = 0; P < 6; P++) Math.abs(d[P]) > u && (u = Math.abs(d[P]), C = P);
        I = `${y[C]} (${(u * 100).toFixed(0)}%)`;
      }
      return {
        mode: `Modo ${l + 1} / ${o.frequencies.length}`,
        frequency: `${s.toFixed(4)} Hz`,
        period: `${g.toFixed(4)} s`,
        dominant: I,
        state: f !== 0 ? "\u25B6 Reproduciendo" : "\u23F8 Pausado"
      };
    }
    function S() {
      return i.__ctx;
    }
    function e(s) {
      f && (cancelAnimationFrame(f), f = 0), s && m.length > 0 && (a.nodes.val = m.map((g) => [
        ...g
      ]));
    }
    function n() {
      var _a, _b;
      if (!o || !o.modeShapes || o.modeShapes.length === 0 || !o.modeShapes[l]) return;
      e(false);
      const s = o.modeShapes[l], g = ((_a = o.frequencies) == null ? void 0 : _a[l]) || 1, y = ((_b = o.frequencies) == null ? void 0 : _b[0]) || 1, d = Math.max(h, Math.min(v, g / y));
      m = a.nodes.rawVal.map((b) => [
        ...b
      ]);
      const I = m.length;
      let u = 1 / 0, C = 1 / 0, P = 1 / 0, G = -1 / 0, J = -1 / 0, Z = -1 / 0;
      for (const b of m) b[0] < u && (u = b[0]), b[0] > G && (G = b[0]), b[1] < C && (C = b[1]), b[1] > J && (J = b[1]), b[2] < P && (P = b[2]), b[2] > Z && (Z = b[2]);
      const ye = Math.sqrt((G - u) ** 2 + (J - C) ** 2 + (Z - P) ** 2) || 1;
      let L = 0;
      for (let b = 0; b < I; b++) {
        const F = s[b * 6] || 0, $ = s[b * 6 + 1] || 0, k = s[b * 6 + 2] || 0, O = Math.sqrt(F * F + $ * $ + k * k);
        O > L && (L = O);
      }
      const he = L > 1e-12 ? ye * x / 100 / L : 1, xe = performance.now(), oe = () => {
        var _a2;
        const b = (performance.now() - xe) / 1e3, F = Math.sin(2 * Math.PI * d * b) * he, $ = new Array(I);
        for (let k = 0; k < I; k++) {
          const O = m[k];
          $[k] = [
            O[0] + (s[k * 6] || 0) * F,
            O[1] + (s[k * 6 + 1] || 0) * F,
            O[2] + (s[k * 6 + 2] || 0) * F
          ];
        }
        a.nodes.val = $, (_a2 = S()) == null ? void 0 : _a2.render(), f = requestAnimationFrame(oe);
      };
      f = requestAnimationFrame(oe), r();
    }
    return {
      setResults(s) {
        var _a;
        o = s, l >= (((_a = s == null ? void 0 : s.frequencies) == null ? void 0 : _a.length) ?? 0) && (l = 0), r();
      },
      setMode(s) {
        var _a;
        if (!o) return;
        const g = ((_a = o.frequencies) == null ? void 0 : _a.length) ?? 0;
        l = Math.max(0, Math.min(g - 1, s)), f !== 0 ? n() : r();
      },
      play() {
        o && f === 0 && n();
      },
      stop() {
        e(true), r();
      },
      isPlaying() {
        return f !== 0;
      },
      modeCount() {
        var _a;
        return ((_a = o == null ? void 0 : o.frequencies) == null ? void 0 : _a.length) ?? 0;
      },
      currentMode() {
        return l;
      },
      currentFreq() {
        var _a;
        return ((_a = o == null ? void 0 : o.frequencies) == null ? void 0 : _a[l]) ?? 0;
      },
      getStatus() {
        return M();
      },
      dispose() {
        e(true), o = null;
      }
    };
  }
  const D = [
    $e,
    Re,
    je,
    De,
    Ue,
    Oe,
    ke,
    ze,
    Le,
    Ve,
    _e,
    Ee,
    Ae,
    Ce,
    Te,
    Be,
    Fe,
    qe,
    Pe,
    Ie
  ];
  _.derive(() => {
    ge.val = N.val;
  });
  _.derive(() => {
    be.val = ee.val;
  });
  const X = _.state([]), Y = _.state([]), re = _.state({}), le = _.state({}), H = _.state({}), K = _.state({}), de = _.state([]), w = {
    nodes: X,
    elements: Y,
    nodeInputs: re,
    elementInputs: le,
    deformOutputs: H,
    analyzeOutputs: K,
    objects3D: de
  };
  let p = null, q = {}, E = null;
  const ie = {
    modeIdx: 1
  };
  let z, A = null, R = null;
  const B = Se();
  B.div.style.display = "none";
  function ce() {
    w.objects3D.val = [], w.nodes.val = [], w.elements.val = [], w.nodeInputs.val = {}, w.elementInputs.val = {}, w.deformOutputs.val = {}, w.analyzeOutputs.val = {};
  }
  function fe(t) {
    if (p = t, q = Object.fromEntries(Object.entries(t.params).map(([a, i]) => {
      const c = i.default;
      return i.unitType === "force" ? [
        a,
        Ne(c)
      ] : i.unitType === "moment" ? [
        a,
        Xe(c)
      ] : [
        a,
        c
      ];
    })), We.v++, ce(), t.build(ne(), w, B), t.defaultShellResult) {
      const a = T.__settings;
      (a == null ? void 0 : a.shellResults) && (a.shellResults.val = t.defaultShellResult), (a == null ? void 0 : a.loads) && (a.loads.val = true), (a == null ? void 0 : a.supports) && (a.supports.val = true);
    }
    et(t.availableShellResults), Qe(), me(), te();
  }
  function Qe() {
    var _a;
    const t = T.__settings;
    if (!(t == null ? void 0 : t.deformScale)) return;
    const a = w.nodes.rawVal, i = (_a = w.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(a == null ? void 0 : a.length) || !i) {
      t.deformScale.val = 1;
      return;
    }
    let c = 1 / 0, x = 1 / 0, h = 1 / 0, v = -1 / 0, o = -1 / 0, l = -1 / 0;
    for (const r of a) r[0] < c && (c = r[0]), r[0] > v && (v = r[0]), r[1] < x && (x = r[1]), r[1] > o && (o = r[1]), r[2] < h && (h = r[2]), r[2] > l && (l = r[2]);
    const f = Math.sqrt((v - c) ** 2 + (o - x) ** 2 + (l - h) ** 2) || 1;
    let m = 0;
    if (i.forEach((r) => {
      const M = Math.sqrt((r[0] || 0) ** 2 + (r[1] || 0) ** 2 + (r[2] || 0) ** 2);
      M > m && (m = M);
    }), m < 1e-30) {
      t.deformScale.val = 1;
      return;
    }
    t.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * f / m)), t.displayScale && (t.displayScale.val = -2);
  }
  function me() {
    const t = T.__ctx, a = w.nodes.rawVal;
    if (!t || !(a == null ? void 0 : a.length)) return;
    const { camera: i, controls: c, render: x } = t;
    let h = 1 / 0, v = 1 / 0, o = 1 / 0, l = -1 / 0, f = -1 / 0, m = -1 / 0;
    for (const u of a) u[0] < h && (h = u[0]), u[0] > l && (l = u[0]), u[1] < v && (v = u[1]), u[1] > f && (f = u[1]), u[2] < o && (o = u[2]), u[2] > m && (m = u[2]);
    const r = (h + l) / 2, M = (v + f) / 2, S = (o + m) / 2, e = l - h, n = f - v, s = m - o, g = Math.max(Math.sqrt(e * e + n * n + s * s), 1), y = 2.2 * g;
    c.target.set(r, M, S);
    const d = y / Math.sqrt(3);
    i.position.set(r + d, M - d, S + d), i.up.set(0, 0, 1), i.near = g * 1e-3, i.far = g * 50, i.updateProjectionMatrix(), i.lookAt(r, M, S), c.update(), x == null ? void 0 : x();
    const I = T.__settings;
    (I == null ? void 0 : I.gridSize) && (I.gridSize.val = Math.max(Math.ceil(Math.max(e, n) * 1.2), 2));
  }
  function et(t) {
    const a = T.querySelectorAll("select"), i = Array.from(a).find((x) => Array.from(x.options).some((h) => h.value === "bendingXX"));
    if (!i) return;
    for (const x of Array.from(i.options)) {
      const h = x.value === "none" || !t || t.includes(x.value);
      x.hidden = !h, x.disabled = !h;
    }
    const c = T.__settings;
    (c == null ? void 0 : c.shellResults) && (i.value = c.shellResults.val, i.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function ne() {
    if (!p) return {};
    const t = {
      ...q
    };
    for (const [a, i] of Object.entries(p.params)) i.unitType === "force" && (t[a] = Ye(q[a])), i.unitType === "moment" && (t[a] = He(q[a]));
    return t;
  }
  function W() {
    if (p) {
      if (ce(), p.build(ne(), w, B), me(), p.computedLabels && A) {
        const t = p.computedLabels(q, w);
        for (const a of Object.keys(A)) a in t && (A[a] = t[a]);
      }
      if (p.inlineComputed && R) for (const t of p.inlineComputed) {
        const a = `__inline_${t.after}_${t.label}`;
        R[a] = t.compute(q, w);
      }
      E == null ? void 0 : E.refresh();
    }
  }
  const U = document.createElement("div"), ue = "hk_paneHostPos", Q = (() => {
    try {
      const t = localStorage.getItem(ue);
      if (t) return JSON.parse(t);
    } catch {
    }
    return null;
  })();
  U.style.cssText = "position:fixed;" + (Q ? `left:${Q.left}px;top:${Q.top}px;right:auto;` : "top:96px;right:16px;") + "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px;box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);";
  document.body.appendChild(U);
  function pe(t) {
    let i = t.querySelector(".tp-rotv_b, .tp-fldv_b");
    if (!i) {
      setTimeout(() => pe(t), 200);
      return;
    }
    i.style.cursor = "move", i.style.userSelect = "none";
    let c = false, x = 0, h = 0, v = 0, o = 0;
    i.addEventListener("mousedown", (l) => {
      c = true, x = l.clientX, h = l.clientY;
      const f = t.getBoundingClientRect();
      v = f.left, o = f.top, t.style.right = "auto", t.style.left = `${v}px`, t.style.top = `${o}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!c) return;
      const f = l.clientX - x, m = l.clientY - h, r = Math.max(0, Math.min(window.innerWidth - 40, v + f)), M = Math.max(0, Math.min(window.innerHeight - 40, o + m));
      t.style.left = `${r}px`, t.style.top = `${M}px`;
    }), window.addEventListener("mouseup", () => {
      if (c) {
        c = false;
        try {
          localStorage.setItem(ue, JSON.stringify({
            left: parseFloat(t.style.left),
            top: parseFloat(t.style.top)
          }));
        } catch {
        }
      }
    });
  }
  function j(t) {
    const a = T.__ctx;
    if (!a) return;
    const { camera: i, controls: c, render: x } = a, h = w.nodes.rawVal ?? [];
    let v = 1 / 0, o = 1 / 0, l = 1 / 0, f = -1 / 0, m = -1 / 0, r = -1 / 0;
    for (const d of h) d[0] < v && (v = d[0]), d[0] > f && (f = d[0]), d[1] < o && (o = d[1]), d[1] > m && (m = d[1]), d[2] < l && (l = d[2]), d[2] > r && (r = d[2]);
    const M = (v + f) / 2, S = (o + m) / 2, e = (l + r) / 2, n = f - v || 1, s = m - o || 1, g = r - l || 1, y = Math.sqrt(n * n + s * s + g * g) || 5;
    if (c.target.set(M, S, e), t === "iso") {
      i.fov = 45;
      const d = y * 1.2;
      i.position.set(M + d * 0.6, S - d * 0.6, e + d * 0.6);
    } else {
      i.fov = 5;
      const I = y / 2 * 25;
      switch (t) {
        case "plan":
          i.position.set(M, S, e + I);
          break;
        case "elevX":
          i.position.set(M + I, S, e);
          break;
        case "elevY":
          i.position.set(M, S + I, e);
          break;
      }
    }
    i.up.set(0, 0, 1), i.updateProjectionMatrix(), i.lookAt(M, S, e), c.update(), x == null ? void 0 : x();
  }
  function te() {
    var _a;
    if (E && (E.dispose(), E = null), U.innerHTML = "", !p) return;
    const t = new ve({
      container: U,
      title: p.name
    });
    setTimeout(() => pe(U), 0);
    const a = {
      id: p.id
    }, i = Object.fromEntries(D.map((e) => [
      `${e.category} \xB7 ${e.name}`,
      e.id
    ]));
    t.addBinding(a, "id", {
      label: "Ejemplo",
      options: i
    }).on("change", (e) => {
      const n = D.find((s) => s.id === e.value);
      n && fe(n);
    });
    const c = t.addFolder({
      title: "Vista",
      expanded: false
    });
    c.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => j("iso")), c.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => j("plan")), c.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => j("elevX")), c.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => j("elevY"));
    const x = t.addFolder({
      title: "Unidades",
      expanded: false
    }), h = {
      force: N.val,
      disp: ee.val
    };
    x.addBinding(h, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (e) => {
      const n = N.val, s = e.value;
      if (p && n !== s) {
        const g = n === "kN" ? 1 : n === "tonf" ? 9.80665 : 4.4482216, y = s === "kN" ? 1 : s === "tonf" ? 9.80665 : 4.4482216;
        for (const [d, I] of Object.entries(p.params)) (I.unitType === "force" || I.unitType === "moment") && (q[d] = q[d] * g / y);
      }
      N.val = s, te(), W();
    }), x.addBinding(h, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        m: "m",
        in: "in"
      }
    }).on("change", (e) => {
      ee.val = e.value, te(), W();
    });
    const v = "Par\xE1metros", o = /* @__PURE__ */ new Map(), l = (e) => e === v || /\bmodo\b/i.test(e) || /activar/i.test(e) || /combinaci/i.test(e), f = (e) => (o.has(e) || o.set(e, t.addFolder({
      title: e,
      expanded: l(e)
    })), o.get(e));
    let m = null;
    const r = () => {
      m !== null && clearTimeout(m), m = window.setTimeout(() => {
        m = null, W();
      }, 120);
    }, M = {}, S = /* @__PURE__ */ new Map();
    if (R = {}, p.inlineComputed) for (const e of p.inlineComputed) {
      const n = `__inline_${e.after}_${e.label}`;
      R[n] = e.compute(q, w), S.has(e.after) || S.set(e.after, []), S.get(e.after).push({
        label: e.label,
        key: n,
        compute: e.compute
      });
    }
    for (const [e, n] of Object.entries(p.params)) {
      const s = n.folder ?? v, g = f(s);
      if (n.boolean) {
        M[e] = q[e] >= 0.5, g.addBinding(M, e, {
          label: n.label ?? e
        }).on("change", (P) => {
          q[e] = P.value ? 1 : 0, (p == null ? void 0 : p.onParamChange) && (p.onParamChange(e, q), t.refresh()), r();
        });
        continue;
      }
      const y = Ke(n.label ?? e), d = n.unitType === "force" ? ` ${Ge()}` : n.unitType === "moment" ? ` ${Je()}` : n.unitType === "disp" ? ` ${Ze()}` : "", u = {
        label: y + d
      };
      n.options !== void 0 ? u.options = n.options : (n.min !== void 0 && (u.min = n.min), n.max !== void 0 && (u.max = n.max), n.step !== void 0 && (u.step = n.step)), g.addBinding(q, e, u).on("change", () => {
        (p == null ? void 0 : p.onParamChange) && (p.onParamChange(e, q), t.refresh()), r();
      });
      const C = S.get(e);
      if (C && R) for (const P of C) g.addBinding(R, P.key, {
        readonly: true,
        label: P.label,
        view: "text"
      });
    }
    if (p.computedLabels) {
      const e = t.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), n = p.computedLabels(q, w);
      A = {
        ...n
      }, console.log("[Calculados]", A);
      for (const s of Object.keys(n)) e.addBinding(A, s, {
        readonly: true,
        view: "text",
        interval: 0
      });
    } else A = null;
    if (p.hasModal) {
      const e = t.addFolder({
        title: "\u26A1 Modal + Animaci\xF3n",
        expanded: true
      }), n = {
        mode: "\u2014",
        frequency: "\u2014",
        period: "\u2014",
        dominant: "\u2014",
        state: "\u23F8 Detenido"
      };
      (_a = z.dispose) == null ? void 0 : _a.call(z), z = se({
        mesh: {
          nodes: X,
          elements: Y,
          deformOutputs: H,
          analyzeOutputs: K
        },
        viewerElm: T,
        scalePercent: 5,
        onStatusChange: () => {
          const y = z.getStatus();
          n.mode = y.mode, n.frequency = y.frequency, n.period = y.period, n.dominant = y.dominant, n.state = y.state, E == null ? void 0 : E.refresh();
        }
      });
      let s = null;
      const g = {
        div: B.div,
        render: (y, d) => {
          var _a2;
          s = y, B.render(y, d), ((_a2 = y == null ? void 0 : y.frequencies) == null ? void 0 : _a2.length) && (z.setResults(y), z.setMode(0), z.play(), ie.modeIdx = 1, E == null ? void 0 : E.refresh());
        }
      };
      e.addButton({
        title: "\u25B6 Correr modal + animar"
      }).on("click", () => {
        B.div.style.display = "block", p.runModal && p.runModal(ne(), w, g);
      }), e.addBinding(ie, "modeIdx", {
        label: "Modo #",
        min: 1,
        max: 30,
        step: 1
      }).on("change", (y) => {
        s && z.setMode(Math.round(y.value) - 1);
      }), e.addBinding(n, "mode", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Modo"
      }), e.addBinding(n, "frequency", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Frecuencia"
      }), e.addBinding(n, "period", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Per\xEDodo"
      }), e.addBinding(n, "dominant", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Dominante"
      }), e.addBinding(n, "state", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Estado"
      }), e.addButton({
        title: "\u23F8 Pausar"
      }).on("click", () => z.stop()), e.addButton({
        title: "\u25B6 Reanudar"
      }).on("click", () => {
        s && z.play();
      });
    }
    E = t;
  }
  const tt = {
    deformedShape: true,
    displayScale: -1.5,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, T = Me({
    mesh: {
      nodes: X,
      elements: Y,
      nodeInputs: re,
      elementInputs: le,
      deformOutputs: H,
      analyzeOutputs: K
    },
    objects3D: de,
    settingsObj: tt
  });
  document.body.append(T, we({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(B.div);
  z = se({
    mesh: {
      nodes: X,
      elements: Y,
      deformOutputs: H,
      analyzeOutputs: K
    },
    viewerElm: T,
    scalePercent: 5
  });
  const ae = new URLSearchParams(window.location.search).get("t"), V = ae && D.find((t) => t.id === ae) || D.find((t) => t.id === "zapata-aislada") || D[0];
  V && (fe(V), (V.id === "zapata-aislada" || V.id === "zapata-viga-amarre") && setTimeout(() => j("iso"), 200));
});
