import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as $, P as Me } from "./theme-CzzIlc4y.js";
import { c as we, a as Se, g as Ie } from "./getViewer-aUy3Y4mH.js";
import { g as Pe } from "./styles-Y66YTQNs.js";
import { c as ke } from "./renderModalTable-29W4CuGz.js";
import { z as qe, __tla as __tla_0 } from "./zapataVigaAmarre-ZIEkIpA5.js";
import { z as ze, __tla as __tla_1 } from "./zapataAislada-DXUkLbZF.js";
import { z as Te, __tla as __tla_2 } from "./zapataAisladaValidacion-Brghwuvj.js";
import { e as Be, __tla as __tla_3 } from "./edificioConLosa-DM8fLhWb.js";
import { e as Ce, __tla as __tla_4 } from "./edificioConMuros-joDDL-F5.js";
import { p as Ae, __tla as __tla_5 } from "./plane-Ca8zEI1Q.js";
import { m as _e, __tla as __tla_6 } from "./membranaCSI-bLtJdrZt.js";
import { p as Oe, __tla as __tla_7 } from "./plateThin-C30Q-WjQ.js";
import { p as Ee, __tla as __tla_8 } from "./plateThick-DrHD17l3.js";
import { m as Re, __tla as __tla_9 } from "./membrana-Darbd52d.js";
import { s as Fe, __tla as __tla_10 } from "./shellThin-ORSIx719.js";
import { s as je, __tla as __tla_11 } from "./shellThick-BSU3qF0E.js";
import { e as $e, __tla as __tla_12 } from "./edificioAporticado-DBJgBqVU.js";
import { t as De, __tla as __tla_13 } from "./trussGen-CYTV_Ioz.js";
import { b as Le, __tla as __tla_14 } from "./barraAxial-Bnm-0MrG.js";
import { p as Ue, __tla as __tla_15 } from "./portico2D-kxfBcLlJ.js";
import { t as Ve, __tla as __tla_16 } from "./tower3D-tLRX3VEB.js";
import { g as Ne, __tla as __tla_17 } from "./galpon-BaNuuhBd.js";
import { e as Xe, __tla as __tla_18 } from "./edifAcero-BzIyJMZO.js";
import { m as Ye, __tla as __tla_19 } from "./mezanine-Cs3oqByI.js";
import { f as W, d as oe, a as ce, b as fe, t as He, g as Ke, s as re, c as Ge, m as Je, e as Ze } from "./units-B3ou5gwn.js";
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
  function me(n) {
    const { mesh: o, viewerElm: a, onStatusChange: f } = n, v = n.scalePercent ?? 5, [h, b] = n.visFrequencyRange ?? [
      0.5,
      3
    ];
    let i = null, r = 0, m = 0, u = [];
    function s() {
      f == null ? void 0 : f();
    }
    function w() {
      var _a;
      if (!i || !i.frequencies || i.frequencies.length === 0) return {
        mode: "Sin resultados",
        frequency: "\u2014",
        period: "\u2014",
        dominant: "\u2014",
        state: "\u23F8 Detenido"
      };
      const p = i.frequencies[r] ?? 0, k = p > 0 ? 1 / p : 0, A = [
        "Ux",
        "Uy",
        "Uz",
        "Rx",
        "Ry",
        "Rz"
      ], d = (_a = i.massParticipation) == null ? void 0 : _a[r];
      let t = "\u2014";
      if (d) {
        let e = 0, l = 0;
        for (let S = 0; S < 6; S++) Math.abs(d[S]) > e && (e = Math.abs(d[S]), l = S);
        t = `${A[l]} (${(e * 100).toFixed(0)}%)`;
      }
      return {
        mode: `Modo ${r + 1} / ${i.frequencies.length}`,
        frequency: `${p.toFixed(4)} Hz`,
        period: `${k.toFixed(4)} s`,
        dominant: t,
        state: m !== 0 ? "\u25B6 Reproduciendo" : "\u23F8 Pausado"
      };
    }
    function g() {
      return a.__ctx;
    }
    function I(p) {
      m && (cancelAnimationFrame(m), m = 0), p && u.length > 0 && (o.nodes.val = u.map((k) => [
        ...k
      ]));
    }
    function C() {
      var _a, _b;
      if (!i || !i.modeShapes || i.modeShapes.length === 0 || !i.modeShapes[r]) return;
      I(false);
      const p = i.modeShapes[r], k = ((_a = i.frequencies) == null ? void 0 : _a[r]) || 1, A = ((_b = i.frequencies) == null ? void 0 : _b[0]) || 1, d = Math.max(h, Math.min(b, k / A));
      u = o.nodes.rawVal.map((x) => [
        ...x
      ]);
      const t = u.length;
      let e = 1 / 0, l = 1 / 0, S = 1 / 0, y = -1 / 0, z = -1 / 0, F = -1 / 0;
      for (const x of u) x[0] < e && (e = x[0]), x[0] > y && (y = x[0]), x[1] < l && (l = x[1]), x[1] > z && (z = x[1]), x[2] < S && (S = x[2]), x[2] > F && (F = x[2]);
      const j = Math.sqrt((y - e) ** 2 + (z - l) ** 2 + (F - S) ** 2) || 1;
      let T = 0;
      for (let x = 0; x < t; x++) {
        const q = p[x * 6] || 0, X = p[x * 6 + 1] || 0, O = p[x * 6 + 2] || 0, V = Math.sqrt(q * q + X * X + O * O);
        V > T && (T = V);
      }
      const _ = T > 1e-12 ? j * v / 100 / T : 1, G = performance.now(), B = () => {
        var _a2;
        const x = (performance.now() - G) / 1e3, q = Math.sin(2 * Math.PI * d * x) * _, X = new Array(t);
        for (let O = 0; O < t; O++) {
          const V = u[O];
          X[O] = [
            V[0] + (p[O * 6] || 0) * q,
            V[1] + (p[O * 6 + 1] || 0) * q,
            V[2] + (p[O * 6 + 2] || 0) * q
          ];
        }
        o.nodes.val = X, (_a2 = g()) == null ? void 0 : _a2.render(), m = requestAnimationFrame(B);
      };
      m = requestAnimationFrame(B), s();
    }
    return {
      setResults(p) {
        var _a;
        i = p, r >= (((_a = p == null ? void 0 : p.frequencies) == null ? void 0 : _a.length) ?? 0) && (r = 0), s();
      },
      setMode(p) {
        var _a;
        if (!i) return;
        const k = ((_a = i.frequencies) == null ? void 0 : _a.length) ?? 0;
        r = Math.max(0, Math.min(k - 1, p)), m !== 0 ? C() : s();
      },
      play() {
        i && m === 0 && C();
      },
      stop() {
        I(true), s();
      },
      isPlaying() {
        return m !== 0;
      },
      modeCount() {
        var _a;
        return ((_a = i == null ? void 0 : i.frequencies) == null ? void 0 : _a.length) ?? 0;
      },
      currentMode() {
        return r;
      },
      currentFreq() {
        var _a;
        return ((_a = i == null ? void 0 : i.frequencies) == null ? void 0 : _a[r]) ?? 0;
      },
      getStatus() {
        return w();
      },
      dispose() {
        I(true), i = null;
      }
    };
  }
  const H = [
    Le,
    De,
    Ue,
    Ve,
    Ne,
    $e,
    Be,
    Ce,
    Xe,
    Ye,
    Oe,
    Ee,
    Re,
    _e,
    Ae,
    Fe,
    je,
    ze,
    Te,
    qe
  ];
  $.derive(() => {
    we.val = W.val;
  });
  $.derive(() => {
    Se.val = oe.val;
  });
  const ee = $.state([]), te = $.state([]), ue = $.state({}), pe = $.state({}), ne = $.state({}), ie = $.state({}), xe = $.state([]), P = {
    nodes: ee,
    elements: te,
    nodeInputs: ue,
    elementInputs: pe,
    deformOutputs: ne,
    analyzeOutputs: ie,
    objects3D: xe
  };
  let c = null, M = {}, D = null;
  const le = {
    modeIdx: 1
  };
  let E, L = null, N = null;
  const U = ke();
  U.div.style.display = "none";
  function ye() {
    P.objects3D.val = [], P.nodes.val = [], P.elements.val = [], P.nodeInputs.val = {}, P.elementInputs.val = {}, P.deformOutputs.val = {}, P.analyzeOutputs.val = {};
  }
  function he(n) {
    if (c = n, M = Object.fromEntries(Object.entries(n.params).map(([o, a]) => {
      const f = a.default;
      return a.unitType === "force" ? [
        o,
        ce(f)
      ] : a.unitType === "moment" ? [
        o,
        fe(f)
      ] : [
        o,
        f
      ];
    })), We.v++, ye(), n.build(se(), P, U), n.defaultShellResult) {
      const o = R.__settings;
      (o == null ? void 0 : o.shellResults) && (o.shellResults.val = n.defaultShellResult), (o == null ? void 0 : o.loads) && (o.loads.val = true), (o == null ? void 0 : o.supports) && (o.supports.val = true);
    }
    et(n.availableShellResults), Qe(), ge(), Q();
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
    let f = 1 / 0, v = 1 / 0, h = 1 / 0, b = -1 / 0, i = -1 / 0, r = -1 / 0;
    for (const s of o) s[0] < f && (f = s[0]), s[0] > b && (b = s[0]), s[1] < v && (v = s[1]), s[1] > i && (i = s[1]), s[2] < h && (h = s[2]), s[2] > r && (r = s[2]);
    const m = Math.sqrt((b - f) ** 2 + (i - v) ** 2 + (r - h) ** 2) || 1;
    let u = 0;
    if (a.forEach((s) => {
      const w = Math.sqrt((s[0] || 0) ** 2 + (s[1] || 0) ** 2 + (s[2] || 0) ** 2);
      w > u && (u = w);
    }), u < 1e-30) {
      n.deformScale.val = 1;
      return;
    }
    n.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * m / u)), n.displayScale && (n.displayScale.val = -2);
  }
  function ge() {
    const n = R.__ctx, o = P.nodes.rawVal;
    if (!n || !(o == null ? void 0 : o.length)) return;
    const { camera: a, controls: f, render: v } = n;
    let h = 1 / 0, b = 1 / 0, i = 1 / 0, r = -1 / 0, m = -1 / 0, u = -1 / 0;
    for (const e of o) e[0] < h && (h = e[0]), e[0] > r && (r = e[0]), e[1] < b && (b = e[1]), e[1] > m && (m = e[1]), e[2] < i && (i = e[2]), e[2] > u && (u = e[2]);
    const s = (h + r) / 2, w = (b + m) / 2, g = (i + u) / 2, I = r - h, C = m - b, p = u - i, k = Math.max(Math.sqrt(I * I + C * C + p * p), 1), A = 2.2 * k;
    f.target.set(s, w, g);
    const d = A / Math.sqrt(3);
    a.position.set(s + d, w - d, g + d), a.up.set(0, 0, 1), a.near = k * 1e-3, a.far = k * 50, a.updateProjectionMatrix(), a.lookAt(s, w, g), f.update(), v == null ? void 0 : v();
    const t = R.__settings;
    (t == null ? void 0 : t.gridSize) && (t.gridSize.val = Math.max(Math.ceil(Math.max(I, C) * 1.2), 2));
  }
  function et(n) {
    const o = R.querySelectorAll("select"), a = Array.from(o).find((v) => Array.from(v.options).some((h) => h.value === "bendingXX"));
    if (!a) return;
    for (const v of Array.from(a.options)) {
      const h = v.value === "none" || !n || n.includes(v.value);
      v.hidden = !h, v.disabled = !h;
    }
    const f = R.__settings;
    (f == null ? void 0 : f.shellResults) && (a.value = f.shellResults.val, a.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function se() {
    if (!c) return {};
    const n = {
      ...M
    };
    for (const [o, a] of Object.entries(c.params)) a.unitType === "force" && (n[o] = He(M[o])), a.unitType === "moment" && (n[o] = Ke(M[o]));
    return n;
  }
  function J() {
    if (c) {
      if (ye(), c.build(se(), P, U), ge(), c.computedLabels && L) {
        const n = c.computedLabels(M, P);
        for (const o of Object.keys(L)) o in n && (L[o] = n[o]);
      }
      if (c.inlineComputed && N) for (const n of c.inlineComputed) {
        const o = `__inline_${n.after}_${n.label}`;
        N[o] = n.compute(M, P);
      }
      D == null ? void 0 : D.refresh();
    }
  }
  const K = document.createElement("div"), ve = "hk_paneHostPos", ae = (() => {
    try {
      const n = localStorage.getItem(ve);
      if (n) return JSON.parse(n);
    } catch {
    }
    return null;
  })();
  K.style.cssText = "position:fixed;" + (ae ? `left:${ae.left}px;top:${ae.top}px;right:auto;` : "top:96px;right:16px;") + "width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px;box-shadow:0 6px 24px rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);";
  document.body.appendChild(K);
  function be(n) {
    let a = n.querySelector(".tp-rotv_b, .tp-fldv_b");
    if (!a) {
      setTimeout(() => be(n), 200);
      return;
    }
    a.style.cursor = "move", a.style.userSelect = "none";
    let f = false, v = 0, h = 0, b = 0, i = 0;
    a.addEventListener("mousedown", (r) => {
      f = true, v = r.clientX, h = r.clientY;
      const m = n.getBoundingClientRect();
      b = m.left, i = m.top, n.style.right = "auto", n.style.left = `${b}px`, n.style.top = `${i}px`, r.preventDefault();
    }), window.addEventListener("mousemove", (r) => {
      if (!f) return;
      const m = r.clientX - v, u = r.clientY - h, s = Math.max(0, Math.min(window.innerWidth - 40, b + m)), w = Math.max(0, Math.min(window.innerHeight - 40, i + u));
      n.style.left = `${s}px`, n.style.top = `${w}px`;
    }), window.addEventListener("mouseup", () => {
      if (f) {
        f = false;
        try {
          localStorage.setItem(ve, JSON.stringify({
            left: parseFloat(n.style.left),
            top: parseFloat(n.style.top)
          }));
        } catch {
        }
      }
    });
  }
  function Y(n) {
    const o = R.__ctx;
    if (!o) return;
    const { camera: a, controls: f, render: v } = o, h = P.nodes.rawVal ?? [];
    let b = 1 / 0, i = 1 / 0, r = 1 / 0, m = -1 / 0, u = -1 / 0, s = -1 / 0;
    for (const d of h) d[0] < b && (b = d[0]), d[0] > m && (m = d[0]), d[1] < i && (i = d[1]), d[1] > u && (u = d[1]), d[2] < r && (r = d[2]), d[2] > s && (s = d[2]);
    const w = (b + m) / 2, g = (i + u) / 2, I = (r + s) / 2, C = m - b || 1, p = u - i || 1, k = s - r || 1, A = Math.sqrt(C * C + p * p + k * k) || 5;
    if (f.target.set(w, g, I), n === "iso") {
      a.fov = 45;
      const d = A * 1.2;
      a.position.set(w + d * 0.6, g - d * 0.6, I + d * 0.6);
    } else {
      a.fov = 5;
      const t = A / 2 * 25;
      switch (n) {
        case "plan":
          a.position.set(w, g, I + t);
          break;
        case "elevX":
          a.position.set(w + t, g, I);
          break;
        case "elevY":
          a.position.set(w, g + t, I);
          break;
      }
    }
    a.up.set(0, 0, 1), a.updateProjectionMatrix(), a.lookAt(w, g, I), f.update(), v == null ? void 0 : v();
  }
  function Q() {
    var _a;
    if (D && (D.dispose(), D = null), K.innerHTML = "", !c) return;
    const n = new Me({
      container: K,
      title: c.name
    });
    setTimeout(() => be(K), 0);
    const o = {
      id: c.id
    }, a = Object.fromEntries(H.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    n.addBinding(o, "id", {
      label: "Ejemplo",
      options: a
    }).on("change", (t) => {
      const e = H.find((l) => l.id === t.value);
      e && he(e);
    });
    const f = n.addFolder({
      title: "Vista",
      expanded: false
    });
    f.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => Y("iso")), f.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => Y("plan")), f.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => Y("elevX")), f.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => Y("elevY"));
    const v = n.addFolder({
      title: "Unidades",
      expanded: false
    }), h = {
      force: W.val,
      disp: oe.val
    };
    v.addBinding(h, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      const e = W.val, l = t.value;
      if (c && e !== l) {
        const S = e === "kN" ? 1 : e === "tonf" ? 9.80665 : 4.4482216, y = l === "kN" ? 1 : l === "tonf" ? 9.80665 : 4.4482216;
        for (const [z, F] of Object.entries(c.params)) (F.unitType === "force" || F.unitType === "moment") && (M[z] = M[z] * S / y);
      }
      W.val = l, Q(), J();
    }), v.addBinding(h, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        m: "m",
        in: "in"
      }
    }).on("change", (t) => {
      oe.val = t.value, Q(), J();
    });
    const b = "Par\xE1metros", i = /* @__PURE__ */ new Map(), r = (t) => t === b || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), m = (t) => (i.has(t) || i.set(t, n.addFolder({
      title: t,
      expanded: r(t)
    })), i.get(t));
    let u = null;
    const s = () => {
      u !== null && clearTimeout(u), u = window.setTimeout(() => {
        u = null, J();
      }, 120);
    }, w = {}, g = {}, I = {}, C = (t) => t.rangeAdjustable === true || t.rangeAdjustable !== false && (t.unitType === "force" || t.unitType === "moment"), p = /* @__PURE__ */ new Map();
    if (N = {}, c.inlineComputed) for (const t of c.inlineComputed) {
      const e = `__inline_${t.after}_${t.label}`;
      N[e] = t.compute(M, P), p.has(t.after) || p.set(t.after, []), p.get(t.after).push({
        label: t.label,
        key: e,
        compute: t.compute
      });
    }
    const k = c.dynamicParams ? c.dynamicParams(M) : {};
    for (const [t, e] of Object.entries(k)) if (!(t in M)) {
      const l = e.default;
      M[t] = e.unitType === "force" ? ce(l) : e.unitType === "moment" ? fe(l) : l;
    }
    const A = {
      ...c.params,
      ...k
    };
    for (const [t, e] of Object.entries(A)) {
      const l = e.folder ?? b, S = m(l);
      if (e.boolean) {
        w[t] = M[t] >= 0.5, S.addBinding(w, t, {
          label: e.label ?? t
        }).on("change", (B) => {
          M[t] = B.value ? 1 : 0, (c == null ? void 0 : c.onParamChange) && (c.onParamChange(t, M), n.refresh()), s();
        });
        continue;
      }
      const y = re(e.label ?? t), z = e.unitType === "force" ? ` ${Ge()}` : e.unitType === "moment" ? ` ${Je()}` : e.unitType === "disp" ? ` ${Ze()}` : "", j = {
        label: y + z
      };
      e.options !== void 0 ? j.options = e.options : (e.min !== void 0 && (j.min = e.min), e.max !== void 0 && (j.max = e.max), e.step !== void 0 && (j.step = e.step));
      let T = null;
      const _ = (B, x) => {
        var _a2;
        if (T) try {
          (_a2 = T.dispose) == null ? void 0 : _a2.call(T);
        } catch {
        }
        const q = {
          ...j
        };
        B !== void 0 && (q.min = B), x !== void 0 && (q.max = x), q.min !== void 0 && M[t] < q.min && (M[t] = q.min), q.max !== void 0 && M[t] > q.max && (M[t] = q.max), T = S.addBinding(M, t, q), T.on("change", () => {
          (c == null ? void 0 : c.onParamChange) && (c.onParamChange(t, M), n.refresh()), e.regenOnChange ? window.setTimeout(() => {
            Q(), J();
          }, 80) : s();
        });
      };
      _(e.min, e.max), C(e) && e.min !== void 0 && e.max !== void 0 && (g[t] = {
        min: e.min,
        max: e.max
      }, I[t] = {
        rebuild: (B, x) => _(B, x)
      });
      const G = p.get(t);
      if (G && N) for (const B of G) S.addBinding(N, B.key, {
        readonly: true,
        label: B.label,
        view: "text"
      });
    }
    const d = Object.keys(g);
    if (d.length > 0) {
      const t = n.addFolder({
        title: "\u{1F4CF} Rangos",
        expanded: false
      });
      for (const e of d) {
        const l = c.params[e], S = re(l.label ?? e), y = l.step ?? 1, z = Math.abs(l.max - l.min), F = l.min - z * 5, j = l.max + z * 5;
        t.addBinding(g[e], "min", {
          label: `${S} min`,
          min: F,
          max: l.max,
          step: y
        }).on("change", (T) => {
          const _ = Math.min(T.value, g[e].max - y);
          g[e].min = _, I[e].rebuild(_, g[e].max);
        }), t.addBinding(g[e], "max", {
          label: `${S} max`,
          min: l.min,
          max: j,
          step: y
        }).on("change", (T) => {
          const _ = Math.max(T.value, g[e].min + y);
          g[e].max = _, I[e].rebuild(g[e].min, _);
        });
      }
    }
    if (c.computedLabels) {
      const t = n.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), e = c.computedLabels(M, P);
      L = {
        ...e
      }, console.log("[Calculados]", L);
      for (const l of Object.keys(e)) t.addBinding(L, l, {
        readonly: true,
        view: "text",
        interval: 0
      });
    } else L = null;
    if (c.hasModal) {
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
      (_a = E.dispose) == null ? void 0 : _a.call(E), E = me({
        mesh: {
          nodes: ee,
          elements: te,
          deformOutputs: ne,
          analyzeOutputs: ie
        },
        viewerElm: R,
        scalePercent: 5,
        onStatusChange: () => {
          const y = E.getStatus();
          e.mode = y.mode, e.frequency = y.frequency, e.period = y.period, e.dominant = y.dominant, e.state = y.state, D == null ? void 0 : D.refresh();
        }
      });
      let l = null;
      const S = {
        div: U.div,
        render: (y, z) => {
          var _a2;
          l = y, U.render(y, z), ((_a2 = y == null ? void 0 : y.frequencies) == null ? void 0 : _a2.length) && (E.setResults(y), E.setMode(0), E.play(), le.modeIdx = 1, D == null ? void 0 : D.refresh());
        }
      };
      t.addButton({
        title: "\u25B6 Correr modal + animar"
      }).on("click", () => {
        U.div.style.display = "block", c.runModal && c.runModal(se(), P, S);
      }), t.addBinding(le, "modeIdx", {
        label: "Modo #",
        min: 1,
        max: 30,
        step: 1
      }).on("change", (y) => {
        l && E.setMode(Math.round(y.value) - 1);
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
        l && E.play();
      });
    }
    D = n;
  }
  const tt = {
    deformedShape: true,
    displayScale: -1.5,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, R = Ie({
    mesh: {
      nodes: ee,
      elements: te,
      nodeInputs: ue,
      elementInputs: pe,
      deformOutputs: ne,
      analyzeOutputs: ie
    },
    objects3D: xe,
    settingsObj: tt
  });
  document.body.append(R, Pe({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(U.div);
  E = me({
    mesh: {
      nodes: ee,
      elements: te,
      deformOutputs: ne,
      analyzeOutputs: ie
    },
    viewerElm: R,
    scalePercent: 5
  });
  const de = new URLSearchParams(window.location.search).get("t"), Z = de && H.find((n) => n.id === de) || H.find((n) => n.id === "zapata-aislada") || H[0];
  Z && (he(Z), (Z.id === "zapata-aislada" || Z.id === "zapata-viga-amarre") && setTimeout(() => Y("iso"), 200));
});
