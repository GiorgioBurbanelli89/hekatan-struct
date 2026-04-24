import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as O, P as ve } from "./theme-CzzIlc4y.js";
import { c as be, a as Me, g as we } from "./getViewer-aUy3Y4mH.js";
import { g as Se } from "./styles-Y66YTQNs.js";
import { c as Ie } from "./renderModalTable-29W4CuGz.js";
import { z as Pe, __tla as __tla_0 } from "./zapataVigaAmarre-ZIEkIpA5.js";
import { z as ke, __tla as __tla_1 } from "./zapataAislada-DXUkLbZF.js";
import { z as qe, __tla as __tla_2 } from "./zapataAisladaValidacion-Brghwuvj.js";
import { e as ze, __tla as __tla_3 } from "./edificioConLosa-BL-5DIT2.js";
import { e as Te, __tla as __tla_4 } from "./edificioConMuros-CTs7uE-N.js";
import { p as Be, __tla as __tla_5 } from "./plane-D7dv__0b.js";
import { m as Ae, __tla as __tla_6 } from "./membranaCSI-bLtJdrZt.js";
import { p as Ce, __tla as __tla_7 } from "./plateThin-C30Q-WjQ.js";
import { p as _e, __tla as __tla_8 } from "./plateThick-DrHD17l3.js";
import { m as Ee, __tla as __tla_9 } from "./membrana-Darbd52d.js";
import { s as Re, __tla as __tla_10 } from "./shellThin-ORSIx719.js";
import { s as Fe, __tla as __tla_11 } from "./shellThick-BSU3qF0E.js";
import { e as Oe, __tla as __tla_12 } from "./edificioAporticado-BnvKrh7h.js";
import { t as $e, __tla as __tla_13 } from "./trussGen-CYTV_Ioz.js";
import { b as je, __tla as __tla_14 } from "./barraAxial-Bnm-0MrG.js";
import { p as De, __tla as __tla_15 } from "./portico2D-kxfBcLlJ.js";
import { t as Le, __tla as __tla_16 } from "./tower3D-tLRX3VEB.js";
import { g as Ue, __tla as __tla_17 } from "./galpon-BaNuuhBd.js";
import { e as Ve, __tla as __tla_18 } from "./edifAcero-Cc34ndLY.js";
import { m as Ne, __tla as __tla_19 } from "./mezanine-D3iolUJX.js";
import { f as Z, d as ae, a as Xe, b as Ye, t as He, g as Ke, s as re, c as Ge, m as Je, e as Ze } from "./units-B3ou5gwn.js";
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
  function ce(n) {
    const { mesh: o, viewerElm: a, onStatusChange: c } = n, g = n.scalePercent ?? 5, [h, v] = n.visFrequencyRange ?? [
      0.5,
      3
    ];
    let i = null, l = 0, f = 0, m = [];
    function r() {
      c == null ? void 0 : c();
    }
    function M() {
      var _a;
      if (!i || !i.frequencies || i.frequencies.length === 0) return {
        mode: "Sin resultados",
        frequency: "\u2014",
        period: "\u2014",
        dominant: "\u2014",
        state: "\u23F8 Detenido"
      };
      const u = i.frequencies[l] ?? 0, k = u > 0 ? 1 / u : 0, t = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], e = (_a = i.massParticipation) == null ? void 0 : _a[l];
      let s = "\u2014";
      if (e) {
        let d = 0, p = 0;
        for (let w = 0; w < 6; w++) Math.abs(e[w]) > d && (d = Math.abs(e[w]), p = w);
        s = `${t[p]} (${(d * 100).toFixed(0)}%)`;
      }
      return {
        mode: `Modo ${l + 1} / ${i.frequencies.length}`,
        frequency: `${u.toFixed(4)} Hz`,
        period: `${k.toFixed(4)} s`,
        dominant: s,
        state: f !== 0 ? "\u25B6 Reproduciendo" : "\u23F8 Pausado"
      };
    }
    function y() {
      return a.__ctx;
    }
    function I(u) {
      f && (cancelAnimationFrame(f), f = 0), u && m.length > 0 && (o.nodes.val = m.map((k) => [
        ...k
      ]));
    }
    function T() {
      var _a, _b;
      if (!i || !i.modeShapes || i.modeShapes.length === 0 || !i.modeShapes[l]) return;
      I(false);
      const u = i.modeShapes[l], k = ((_a = i.frequencies) == null ? void 0 : _a[l]) || 1, t = ((_b = i.frequencies) == null ? void 0 : _b[0]) || 1, e = Math.max(h, Math.min(v, k / t));
      m = o.nodes.rawVal.map((b) => [
        ...b
      ]);
      const s = m.length;
      let d = 1 / 0, p = 1 / 0, w = 1 / 0, F = -1 / 0, B = -1 / 0, q = -1 / 0;
      for (const b of m) b[0] < d && (d = b[0]), b[0] > F && (F = b[0]), b[1] < p && (p = b[1]), b[1] > B && (B = b[1]), b[2] < w && (w = b[2]), b[2] > q && (q = b[2]);
      const C = Math.sqrt((F - d) ** 2 + (B - p) ** 2 + (q - w) ** 2) || 1;
      let $ = 0;
      for (let b = 0; b < s; b++) {
        const V = u[b * 6] || 0, Y = u[b * 6 + 1] || 0, _ = u[b * 6 + 2] || 0, N = Math.sqrt(V * V + Y * Y + _ * _);
        N > $ && ($ = N);
      }
      const A = $ > 1e-12 ? C * g / 100 / $ : 1, U = performance.now(), z = () => {
        var _a2;
        const b = (performance.now() - U) / 1e3, V = Math.sin(2 * Math.PI * e * b) * A, Y = new Array(s);
        for (let _ = 0; _ < s; _++) {
          const N = m[_];
          Y[_] = [
            N[0] + (u[_ * 6] || 0) * V,
            N[1] + (u[_ * 6 + 1] || 0) * V,
            N[2] + (u[_ * 6 + 2] || 0) * V
          ];
        }
        o.nodes.val = Y, (_a2 = y()) == null ? void 0 : _a2.render(), f = requestAnimationFrame(z);
      };
      f = requestAnimationFrame(z), r();
    }
    return {
      setResults(u) {
        var _a;
        i = u, l >= (((_a = u == null ? void 0 : u.frequencies) == null ? void 0 : _a.length) ?? 0) && (l = 0), r();
      },
      setMode(u) {
        var _a;
        if (!i) return;
        const k = ((_a = i.frequencies) == null ? void 0 : _a.length) ?? 0;
        l = Math.max(0, Math.min(k - 1, u)), f !== 0 ? T() : r();
      },
      play() {
        i && f === 0 && T();
      },
      stop() {
        I(true), r();
      },
      isPlaying() {
        return f !== 0;
      },
      modeCount() {
        var _a;
        return ((_a = i == null ? void 0 : i.frequencies) == null ? void 0 : _a.length) ?? 0;
      },
      currentMode() {
        return l;
      },
      currentFreq() {
        var _a;
        return ((_a = i == null ? void 0 : i.frequencies) == null ? void 0 : _a[l]) ?? 0;
      },
      getStatus() {
        return M();
      },
      dispose() {
        I(true), i = null;
      }
    };
  }
  const K = [
    je,
    $e,
    De,
    Le,
    Ue,
    Oe,
    ze,
    Te,
    Ve,
    Ne,
    Ce,
    _e,
    Ee,
    Ae,
    Be,
    Re,
    Fe,
    ke,
    qe,
    Pe
  ];
  O.derive(() => {
    be.val = Z.val;
  });
  O.derive(() => {
    Me.val = ae.val;
  });
  const W = O.state([]), Q = O.state([]), fe = O.state({}), me = O.state({}), ee = O.state({}), te = O.state({}), ue = O.state([]), P = {
    nodes: W,
    elements: Q,
    nodeInputs: fe,
    elementInputs: me,
    deformOutputs: ee,
    analyzeOutputs: te,
    objects3D: ue
  };
  let x = null, S = {}, j = null;
  const le = {
    modeIdx: 1
  };
  let E, D = null, X = null;
  const L = Ie();
  L.div.style.display = "none";
  function pe() {
    P.objects3D.val = [], P.nodes.val = [], P.elements.val = [], P.nodeInputs.val = {}, P.elementInputs.val = {}, P.deformOutputs.val = {}, P.analyzeOutputs.val = {};
  }
  function xe(n) {
    if (x = n, S = Object.fromEntries(Object.entries(n.params).map(([o, a]) => {
      const c = a.default;
      return a.unitType === "force" ? [
        o,
        Xe(c)
      ] : a.unitType === "moment" ? [
        o,
        Ye(c)
      ] : [
        o,
        c
      ];
    })), We.v++, pe(), n.build(se(), P, L), n.defaultShellResult) {
      const o = R.__settings;
      (o == null ? void 0 : o.shellResults) && (o.shellResults.val = n.defaultShellResult), (o == null ? void 0 : o.loads) && (o.loads.val = true), (o == null ? void 0 : o.supports) && (o.supports.val = true);
    }
    et(n.availableShellResults), Qe(), he(), oe();
  }
  function Qe() {
    var _a;
    const n = R.__settings;
    if (!(n == null ? void 0 : n.deformScale)) return;
    const o = P.nodes.rawVal, a = (_a = P.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(o == null ? void 0 : o.length) || !a) {
      n.deformScale.val = 1;
      return;
    }
    let c = 1 / 0, g = 1 / 0, h = 1 / 0, v = -1 / 0, i = -1 / 0, l = -1 / 0;
    for (const r of o) r[0] < c && (c = r[0]), r[0] > v && (v = r[0]), r[1] < g && (g = r[1]), r[1] > i && (i = r[1]), r[2] < h && (h = r[2]), r[2] > l && (l = r[2]);
    const f = Math.sqrt((v - c) ** 2 + (i - g) ** 2 + (l - h) ** 2) || 1;
    let m = 0;
    if (a.forEach((r) => {
      const M = Math.sqrt((r[0] || 0) ** 2 + (r[1] || 0) ** 2 + (r[2] || 0) ** 2);
      M > m && (m = M);
    }), m < 1e-30) {
      n.deformScale.val = 1;
      return;
    }
    n.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * f / m)), n.displayScale && (n.displayScale.val = -2);
  }
  function he() {
    const n = R.__ctx, o = P.nodes.rawVal;
    if (!n || !(o == null ? void 0 : o.length)) return;
    const { camera: a, controls: c, render: g } = n;
    let h = 1 / 0, v = 1 / 0, i = 1 / 0, l = -1 / 0, f = -1 / 0, m = -1 / 0;
    for (const d of o) d[0] < h && (h = d[0]), d[0] > l && (l = d[0]), d[1] < v && (v = d[1]), d[1] > f && (f = d[1]), d[2] < i && (i = d[2]), d[2] > m && (m = d[2]);
    const r = (h + l) / 2, M = (v + f) / 2, y = (i + m) / 2, I = l - h, T = f - v, u = m - i, k = Math.max(Math.sqrt(I * I + T * T + u * u), 1), t = 2.2 * k;
    c.target.set(r, M, y);
    const e = t / Math.sqrt(3);
    a.position.set(r + e, M - e, y + e), a.up.set(0, 0, 1), a.near = k * 1e-3, a.far = k * 50, a.updateProjectionMatrix(), a.lookAt(r, M, y), c.update(), g == null ? void 0 : g();
    const s = R.__settings;
    (s == null ? void 0 : s.gridSize) && (s.gridSize.val = Math.max(Math.ceil(Math.max(I, T) * 1.2), 2));
  }
  function et(n) {
    const o = R.querySelectorAll("select"), a = Array.from(o).find((g) => Array.from(g.options).some((h) => h.value === "bendingXX"));
    if (!a) return;
    for (const g of Array.from(a.options)) {
      const h = g.value === "none" || !n || n.includes(g.value);
      g.hidden = !h, g.disabled = !h;
    }
    const c = R.__settings;
    (c == null ? void 0 : c.shellResults) && (a.value = c.shellResults.val, a.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function se() {
    if (!x) return {};
    const n = {
      ...S
    };
    for (const [o, a] of Object.entries(x.params)) a.unitType === "force" && (n[o] = He(S[o])), a.unitType === "moment" && (n[o] = Ke(S[o]));
    return n;
  }
  function ne() {
    if (x) {
      if (pe(), x.build(se(), P, L), he(), x.computedLabels && D) {
        const n = x.computedLabels(S, P);
        for (const o of Object.keys(D)) o in n && (D[o] = n[o]);
      }
      if (x.inlineComputed && X) for (const n of x.inlineComputed) {
        const o = `__inline_${n.after}_${n.label}`;
        X[o] = n.compute(S, P);
      }
      j == null ? void 0 : j.refresh();
    }
  }
  const G = document.createElement("div"), ye = "hk_paneHostPos", ie = (() => {
    try {
      const n = localStorage.getItem(ye);
      if (n) return JSON.parse(n);
    } catch {
    }
    return null;
  })();
  G.style.cssText = "position:fixed;" + (ie ? `left:${ie.left}px;top:${ie.top}px;right:auto;` : "top:96px;right:16px;") + "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px;box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);";
  document.body.appendChild(G);
  function ge(n) {
    let a = n.querySelector(".tp-rotv_b, .tp-fldv_b");
    if (!a) {
      setTimeout(() => ge(n), 200);
      return;
    }
    a.style.cursor = "move", a.style.userSelect = "none";
    let c = false, g = 0, h = 0, v = 0, i = 0;
    a.addEventListener("mousedown", (l) => {
      c = true, g = l.clientX, h = l.clientY;
      const f = n.getBoundingClientRect();
      v = f.left, i = f.top, n.style.right = "auto", n.style.left = `${v}px`, n.style.top = `${i}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!c) return;
      const f = l.clientX - g, m = l.clientY - h, r = Math.max(0, Math.min(window.innerWidth - 40, v + f)), M = Math.max(0, Math.min(window.innerHeight - 40, i + m));
      n.style.left = `${r}px`, n.style.top = `${M}px`;
    }), window.addEventListener("mouseup", () => {
      if (c) {
        c = false;
        try {
          localStorage.setItem(ye, JSON.stringify({
            left: parseFloat(n.style.left),
            top: parseFloat(n.style.top)
          }));
        } catch {
        }
      }
    });
  }
  function H(n) {
    const o = R.__ctx;
    if (!o) return;
    const { camera: a, controls: c, render: g } = o, h = P.nodes.rawVal ?? [];
    let v = 1 / 0, i = 1 / 0, l = 1 / 0, f = -1 / 0, m = -1 / 0, r = -1 / 0;
    for (const e of h) e[0] < v && (v = e[0]), e[0] > f && (f = e[0]), e[1] < i && (i = e[1]), e[1] > m && (m = e[1]), e[2] < l && (l = e[2]), e[2] > r && (r = e[2]);
    const M = (v + f) / 2, y = (i + m) / 2, I = (l + r) / 2, T = f - v || 1, u = m - i || 1, k = r - l || 1, t = Math.sqrt(T * T + u * u + k * k) || 5;
    if (c.target.set(M, y, I), n === "iso") {
      a.fov = 45;
      const e = t * 1.2;
      a.position.set(M + e * 0.6, y - e * 0.6, I + e * 0.6);
    } else {
      a.fov = 5;
      const s = t / 2 * 25;
      switch (n) {
        case "plan":
          a.position.set(M, y, I + s);
          break;
        case "elevX":
          a.position.set(M + s, y, I);
          break;
        case "elevY":
          a.position.set(M, y + s, I);
          break;
      }
    }
    a.up.set(0, 0, 1), a.updateProjectionMatrix(), a.lookAt(M, y, I), c.update(), g == null ? void 0 : g();
  }
  function oe() {
    var _a;
    if (j && (j.dispose(), j = null), G.innerHTML = "", !x) return;
    const n = new ve({
      container: G,
      title: x.name
    });
    setTimeout(() => ge(G), 0);
    const o = {
      id: x.id
    }, a = Object.fromEntries(K.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    n.addBinding(o, "id", {
      label: "Ejemplo",
      options: a
    }).on("change", (t) => {
      const e = K.find((s) => s.id === t.value);
      e && xe(e);
    });
    const c = n.addFolder({
      title: "Vista",
      expanded: false
    });
    c.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => H("iso")), c.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => H("plan")), c.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => H("elevX")), c.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => H("elevY"));
    const g = n.addFolder({
      title: "Unidades",
      expanded: false
    }), h = {
      force: Z.val,
      disp: ae.val
    };
    g.addBinding(h, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      const e = Z.val, s = t.value;
      if (x && e !== s) {
        const d = e === "kN" ? 1 : e === "tonf" ? 9.80665 : 4.4482216, p = s === "kN" ? 1 : s === "tonf" ? 9.80665 : 4.4482216;
        for (const [w, F] of Object.entries(x.params)) (F.unitType === "force" || F.unitType === "moment") && (S[w] = S[w] * d / p);
      }
      Z.val = s, oe(), ne();
    }), g.addBinding(h, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        m: "m",
        in: "in"
      }
    }).on("change", (t) => {
      ae.val = t.value, oe(), ne();
    });
    const v = "Par\xE1metros", i = /* @__PURE__ */ new Map(), l = (t) => t === v || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), f = (t) => (i.has(t) || i.set(t, n.addFolder({
      title: t,
      expanded: l(t)
    })), i.get(t));
    let m = null;
    const r = () => {
      m !== null && clearTimeout(m), m = window.setTimeout(() => {
        m = null, ne();
      }, 120);
    }, M = {}, y = {}, I = {}, T = (t) => t.rangeAdjustable === true || t.rangeAdjustable !== false && (t.unitType === "force" || t.unitType === "moment"), u = /* @__PURE__ */ new Map();
    if (X = {}, x.inlineComputed) for (const t of x.inlineComputed) {
      const e = `__inline_${t.after}_${t.label}`;
      X[e] = t.compute(S, P), u.has(t.after) || u.set(t.after, []), u.get(t.after).push({
        label: t.label,
        key: e,
        compute: t.compute
      });
    }
    for (const [t, e] of Object.entries(x.params)) {
      const s = e.folder ?? v, d = f(s);
      if (e.boolean) {
        M[t] = S[t] >= 0.5, d.addBinding(M, t, {
          label: e.label ?? t
        }).on("change", (A) => {
          S[t] = A.value ? 1 : 0, (x == null ? void 0 : x.onParamChange) && (x.onParamChange(t, S), n.refresh()), r();
        });
        continue;
      }
      const p = re(e.label ?? t), w = e.unitType === "force" ? ` ${Ge()}` : e.unitType === "moment" ? ` ${Je()}` : e.unitType === "disp" ? ` ${Ze()}` : "", B = {
        label: p + w
      };
      e.options !== void 0 ? B.options = e.options : (e.min !== void 0 && (B.min = e.min), e.max !== void 0 && (B.max = e.max), e.step !== void 0 && (B.step = e.step));
      let q = null;
      const C = (A, U) => {
        var _a2;
        if (q) try {
          (_a2 = q.dispose) == null ? void 0 : _a2.call(q);
        } catch {
        }
        const z = {
          ...B
        };
        A !== void 0 && (z.min = A), U !== void 0 && (z.max = U), z.min !== void 0 && S[t] < z.min && (S[t] = z.min), z.max !== void 0 && S[t] > z.max && (S[t] = z.max), q = d.addBinding(S, t, z), q.on("change", () => {
          (x == null ? void 0 : x.onParamChange) && (x.onParamChange(t, S), n.refresh()), r();
        });
      };
      C(e.min, e.max), T(e) && e.min !== void 0 && e.max !== void 0 && (y[t] = {
        min: e.min,
        max: e.max
      }, I[t] = {
        rebuild: (A, U) => C(A, U)
      });
      const $ = u.get(t);
      if ($ && X) for (const A of $) d.addBinding(X, A.key, {
        readonly: true,
        label: A.label,
        view: "text"
      });
    }
    const k = Object.keys(y);
    if (k.length > 0) {
      const t = n.addFolder({
        title: "\u{1F4CF} Rangos",
        expanded: false
      });
      for (const e of k) {
        const s = x.params[e], d = re(s.label ?? e), p = s.step ?? 1, w = Math.abs(s.max - s.min), F = s.min - w * 5, B = s.max + w * 5;
        t.addBinding(y[e], "min", {
          label: `${d} min`,
          min: F,
          max: s.max,
          step: p
        }).on("change", (q) => {
          const C = Math.min(q.value, y[e].max - p);
          y[e].min = C, I[e].rebuild(C, y[e].max);
        }), t.addBinding(y[e], "max", {
          label: `${d} max`,
          min: s.min,
          max: B,
          step: p
        }).on("change", (q) => {
          const C = Math.max(q.value, y[e].min + p);
          y[e].max = C, I[e].rebuild(y[e].min, C);
        });
      }
    }
    if (x.computedLabels) {
      const t = n.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), e = x.computedLabels(S, P);
      D = {
        ...e
      }, console.log("[Calculados]", D);
      for (const s of Object.keys(e)) t.addBinding(D, s, {
        readonly: true,
        view: "text",
        interval: 0
      });
    } else D = null;
    if (x.hasModal) {
      const t = n.addFolder({
        title: "\u26A1 Modal + Animaci\xF3n",
        expanded: true
      }), e = {
        mode: "\u2014",
        frequency: "\u2014",
        period: "\u2014",
        dominant: "\u2014",
        state: "\u23F8 Detenido"
      };
      (_a = E.dispose) == null ? void 0 : _a.call(E), E = ce({
        mesh: {
          nodes: W,
          elements: Q,
          deformOutputs: ee,
          analyzeOutputs: te
        },
        viewerElm: R,
        scalePercent: 5,
        onStatusChange: () => {
          const p = E.getStatus();
          e.mode = p.mode, e.frequency = p.frequency, e.period = p.period, e.dominant = p.dominant, e.state = p.state, j == null ? void 0 : j.refresh();
        }
      });
      let s = null;
      const d = {
        div: L.div,
        render: (p, w) => {
          var _a2;
          s = p, L.render(p, w), ((_a2 = p == null ? void 0 : p.frequencies) == null ? void 0 : _a2.length) && (E.setResults(p), E.setMode(0), E.play(), le.modeIdx = 1, j == null ? void 0 : j.refresh());
        }
      };
      t.addButton({
        title: "\u25B6 Correr modal + animar"
      }).on("click", () => {
        L.div.style.display = "block", x.runModal && x.runModal(se(), P, d);
      }), t.addBinding(le, "modeIdx", {
        label: "Modo #",
        min: 1,
        max: 30,
        step: 1
      }).on("change", (p) => {
        s && E.setMode(Math.round(p.value) - 1);
      }), t.addBinding(e, "mode", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Modo"
      }), t.addBinding(e, "frequency", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Frecuencia"
      }), t.addBinding(e, "period", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Per\xEDodo"
      }), t.addBinding(e, "dominant", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Dominante"
      }), t.addBinding(e, "state", {
        readonly: true,
        view: "text",
        interval: 0,
        label: "Estado"
      }), t.addButton({
        title: "\u23F8 Pausar"
      }).on("click", () => E.stop()), t.addButton({
        title: "\u25B6 Reanudar"
      }).on("click", () => {
        s && E.play();
      });
    }
    j = n;
  }
  const tt = {
    deformedShape: true,
    displayScale: -1.5,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, R = we({
    mesh: {
      nodes: W,
      elements: Q,
      nodeInputs: fe,
      elementInputs: me,
      deformOutputs: ee,
      analyzeOutputs: te
    },
    objects3D: ue,
    settingsObj: tt
  });
  document.body.append(R, Se({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(L.div);
  E = ce({
    mesh: {
      nodes: W,
      elements: Q,
      deformOutputs: ee,
      analyzeOutputs: te
    },
    viewerElm: R,
    scalePercent: 5
  });
  const de = new URLSearchParams(window.location.search).get("t"), J = de && K.find((n) => n.id === de) || K.find((n) => n.id === "zapata-aislada") || K[0];
  J && (xe(J), (J.id === "zapata-aislada" || J.id === "zapata-viga-amarre") && setTimeout(() => H("iso"), 200));
});
