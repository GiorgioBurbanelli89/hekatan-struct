import { v as l } from "./theme-Co6w-pfC.js";
function at(e) {
  const { mesh: t, viewerElm: c, onStatusChange: R } = e, B = e.scalePercent ?? 5, [W, X] = e.visFrequencyRange ?? [0.5, 3];
  let s = null, f = 0, S = 0, I = [], P = [], w = null;
  function A() {
    var _a;
    return c.__settings ?? ((_a = c.__ctx) == null ? void 0 : _a.settings);
  }
  function T() {
    R == null ? void 0 : R();
  }
  function Y() {
    var _a;
    if (!s || !s.frequencies || s.frequencies.length === 0) return { mode: "Sin resultados", frequency: "\u2014", period: "\u2014", dominant: "\u2014", state: "\u23F8 Detenido" };
    const a = s.frequencies[f] ?? 0, o = a > 0 ? 1 / a : 0, u = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], d = (_a = s.massParticipation) == null ? void 0 : _a[f];
    let U = "\u2014";
    if (d) {
      let h = 0, p = 0;
      for (let m = 0; m < 6; m++) Math.abs(d[m]) > h && (h = Math.abs(d[m]), p = m);
      U = `${u[p]} (${(h * 100).toFixed(0)}%)`;
    }
    return { mode: `Modo ${f + 1} / ${s.frequencies.length}`, frequency: `${a.toFixed(4)} Hz`, period: `${o.toFixed(4)} s`, dominant: U, state: S !== 0 ? "\u25B6 Reproduciendo" : "\u23F8 Pausado" };
  }
  function K() {
    return c.__ctx;
  }
  function z(a) {
    var _a;
    if (S && (cancelAnimationFrame(S), S = 0), a) {
      const o = A();
      (o == null ? void 0 : o.deformedShape) && w !== null && (o.deformedShape.val = w, w = null);
      const u = I.length > 0 ? I : P;
      u.length > 0 && (t.nodes.val = u.map((d) => [...d]), (_a = K()) == null ? void 0 : _a.render());
    }
  }
  function G() {
    var _a, _b;
    if (!s || !s.modeShapes || s.modeShapes.length === 0 || !s.modeShapes[f]) return;
    z(false);
    const a = A();
    (a == null ? void 0 : a.deformedShape) && (w === null && (w = a.deformedShape.val), a.deformedShape.val = false);
    const o = s.modeShapes[f], u = ((_a = s.frequencies) == null ? void 0 : _a[f]) || 1, d = ((_b = s.frequencies) == null ? void 0 : _b[0]) || 1, U = Math.max(W, Math.min(X, u / d));
    P = (I.length > 0 ? I : t.nodes.rawVal).map((i) => [...i]);
    const h = P.length;
    let p = 1 / 0, m = 1 / 0, y = 1 / 0, q = -1 / 0, F = -1 / 0, D = -1 / 0;
    for (const i of P) i[0] < p && (p = i[0]), i[0] > q && (q = i[0]), i[1] < m && (m = i[1]), i[1] > F && (F = i[1]), i[2] < y && (y = i[2]), i[2] > D && (D = i[2]);
    const $ = Math.sqrt((q - p) ** 2 + (F - m) ** 2 + (D - y) ** 2) || 1;
    let M = 0;
    for (let i = 0; i < h; i++) {
      const k = o[i * 6] || 0, x = o[i * 6 + 1] || 0, g = o[i * 6 + 2] || 0, b = Math.sqrt(k * k + x * x + g * g);
      b > M && (M = b);
    }
    const C = M > 1e-12 ? $ * B / 100 / M : 1, n = performance.now(), v = () => {
      var _a2;
      const i = (performance.now() - n) / 1e3, k = Math.sin(2 * Math.PI * U * i) * C, x = new Array(h);
      for (let g = 0; g < h; g++) {
        const b = P[g];
        x[g] = [b[0] + (o[g * 6] || 0) * k, b[1] + (o[g * 6 + 1] || 0) * k, b[2] + (o[g * 6 + 2] || 0) * k];
      }
      t.nodes.val = x, (_a2 = K()) == null ? void 0 : _a2.render(), S = requestAnimationFrame(v);
    };
    S = requestAnimationFrame(v), T();
  }
  function Z(a) {
    var _a, _b;
    if (!s || !s.modeShapes || !s.modeShapes[a]) return;
    z(false);
    const o = A();
    (o == null ? void 0 : o.deformedShape) && (w === null && (w = o.deformedShape.val), o.deformedShape.val = false), f = Math.max(0, Math.min((((_a = s.frequencies) == null ? void 0 : _a.length) ?? 1) - 1, a));
    const u = s.modeShapes[f], d = (I.length > 0 ? I : t.nodes.rawVal).map((n) => [...n]), U = d.length;
    let h = 1 / 0, p = 1 / 0, m = 1 / 0, y = -1 / 0, q = -1 / 0, F = -1 / 0;
    for (const n of d) n[0] < h && (h = n[0]), n[0] > y && (y = n[0]), n[1] < p && (p = n[1]), n[1] > q && (q = n[1]), n[2] < m && (m = n[2]), n[2] > F && (F = n[2]);
    const D = Math.sqrt((y - h) ** 2 + (q - p) ** 2 + (F - m) ** 2) || 1;
    let $ = 0;
    for (let n = 0; n < U; n++) {
      const v = u[n * 6] || 0, i = u[n * 6 + 1] || 0, k = u[n * 6 + 2] || 0, x = Math.sqrt(v * v + i * i + k * k);
      x > $ && ($ = x);
    }
    const M = $ > 1e-12 ? D * B / 100 / $ : 1, C = new Array(U);
    for (let n = 0; n < U; n++) {
      const v = d[n];
      C[n] = [v[0] + (u[n * 6] || 0) * M, v[1] + (u[n * 6 + 1] || 0) * M, v[2] + (u[n * 6 + 2] || 0) * M];
    }
    t.nodes.val = C, (_b = K()) == null ? void 0 : _b.render(), T();
  }
  return { setResults(a) {
    var _a;
    s = a, f >= (((_a = a == null ? void 0 : a.frequencies) == null ? void 0 : _a.length) ?? 0) && (f = 0), I = t.nodes.rawVal.map((o) => [...o]), T();
  }, setMode(a) {
    var _a;
    if (!s) return;
    const o = ((_a = s.frequencies) == null ? void 0 : _a.length) ?? 0;
    f = Math.max(0, Math.min(o - 1, a)), S !== 0 ? G() : T();
  }, showStatic(a) {
    Z(a);
  }, play() {
    s && S === 0 && G();
  }, stop() {
    z(true), T();
  }, isPlaying() {
    return S !== 0;
  }, modeCount() {
    var _a;
    return ((_a = s == null ? void 0 : s.frequencies) == null ? void 0 : _a.length) ?? 0;
  }, currentMode() {
    return f;
  }, currentFreq() {
    var _a;
    return ((_a = s == null ? void 0 : s.frequencies) == null ? void 0 : _a[f]) ?? 0;
  }, getStatus() {
    return Y();
  }, dispose() {
    z(true), s = null;
  } };
}
const r = l.state(localStorage.getItem("hk_forceUnit") || "tonf"), _ = l.state(localStorage.getItem("hk_dispUnit") || "mm");
l.derive(() => {
  localStorage.setItem("hk_forceUnit", r.val), window.__hekatanForceUnit = r.val;
});
l.derive(() => {
  localStorage.setItem("hk_dispUnit", _.val), window.__hekatanDispUnit = _.val;
});
const L = { kN: 1, tonf: 9.80665, kip: 4.4482216 };
function ot(e, t) {
  return e * L[r.val];
}
function tt(e, t) {
  return e / L[t ?? r.val];
}
const Q = { kN: 1, tonf: 9.80665, kip: 1.3558179 };
function rt(e, t) {
  return e * Q[r.val];
}
function et(e, t) {
  return e / Q[t ?? r.val];
}
const nt = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 };
function st(e, t) {
  return e * nt[t ?? _.val];
}
function lt(e, t = 2) {
  const c = _.val;
  return `${st(e, c).toFixed(t)} ${c}`;
}
function ct(e, t = 2) {
  const c = r.val;
  return `${tt(e, c).toFixed(t)} ${c}`;
}
function ft(e, t = 2) {
  const c = r.val, R = c === "kip" ? "kip\xB7ft" : `${c}\xB7m`;
  return `${et(e, c).toFixed(t)} ${R}`;
}
function ut() {
  return `(${r.val})`;
}
function mt() {
  return r.val === "kip" ? "(kip\xB7ft)" : `(${r.val}\xB7m)`;
}
function dt() {
  return `(${_.val})`;
}
function ht(e) {
  return e.replace(/\s*\((kN|tonf|kip)(·m|·ft)?\)\s*$/i, "").replace(/\s*\((mm|cm|m|in|µm|um)\)\s*$/i, "").trim();
}
const N = l.state(localStorage.getItem("hk_stressUnit") || "tonf/m\xB2");
l.derive(() => {
  localStorage.setItem("hk_stressUnit", N.val), window.__hekatanStressUnit = N.val;
});
const V = l.state(localStorage.getItem("hk_subgradeUnit") || "tonf/m\xB3");
l.derive(() => {
  localStorage.setItem("hk_subgradeUnit", V.val);
});
const E = l.state(localStorage.getItem("hk_stiffTransUnit") || "tonf/m");
l.derive(() => {
  localStorage.setItem("hk_stiffTransUnit", E.val);
});
const j = l.state(localStorage.getItem("hk_lengthSectionUnit") || "mm");
l.derive(() => {
  localStorage.setItem("hk_lengthSectionUnit", j.val);
});
const O = l.state(localStorage.getItem("hk_lengthStructureUnit") || "m");
l.derive(() => {
  localStorage.setItem("hk_lengthStructureUnit", O.val);
});
const H = { "Metric MKS": { force: "tonf", disp: "mm", stress: "kgf/cm\xB2", subgrade: "tonf/m\xB3", stiffTrans: "tonf/m", lengthSection: "cm", lengthStructure: "m" }, "Metric SI": { force: "kN", disp: "mm", stress: "MPa", subgrade: "kN/m\xB3", stiffTrans: "kN/m", lengthSection: "mm", lengthStructure: "m" }, "U.S. Imperial": { force: "kip", disp: "in", stress: "ksi", subgrade: "kip/ft\xB3", stiffTrans: "kip/in", lengthSection: "in", lengthStructure: "ft" } };
function J(e) {
  const t = H[e];
  r.val = t.force, _.val = t.disp, N.val = t.stress, V.val = t.subgrade, E.val = t.stiffTrans, j.val = t.lengthSection, O.val = t.lengthStructure, localStorage.setItem("hk_unitsPreset", e), window.__hekatanForceUnit = r.val, window.__hekatanDispUnit = _.val, window.__hekatanStressUnit = N.val;
}
(() => {
  const e = localStorage.getItem("hk_unitsPreset");
  e ? e !== "Custom" && e in H ? J(e) : (window.__hekatanForceUnit = r.val, window.__hekatanDispUnit = _.val, window.__hekatanStressUnit = N.val) : J("Metric MKS");
})();
function pt() {
  for (const [e, t] of Object.entries(H)) if (t.force === r.val && t.disp === _.val && t.stress === N.val && t.subgrade === V.val && t.stiffTrans === E.val && t.lengthSection === j.val && t.lengthStructure === O.val) return e;
  return "Custom";
}
export {
  lt as a,
  ct as b,
  ft as c,
  _ as d,
  tt as e,
  r as f,
  et as g,
  at as h,
  pt as i,
  J as j,
  V as k,
  E as l,
  j as m,
  ht as n,
  ut as o,
  mt as p,
  dt as q,
  rt as r,
  N as s,
  ot as t
};
