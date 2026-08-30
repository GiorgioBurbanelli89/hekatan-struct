import { v as r } from "./theme-Co6w-pfC.js";
function lt(e) {
  const { mesh: t, viewerElm: g, onStatusChange: Y } = e, B = e.scalePercent ?? 5, [Z, tt] = e.visFrequencyRange ?? [0.5, 3];
  let a = null, l = 0, S = 0, x = [], N = [], I = null;
  function K() {
    var _a;
    return g.__settings ?? ((_a = g.__ctx) == null ? void 0 : _a.settings);
  }
  function P() {
    Y == null ? void 0 : Y();
  }
  function et() {
    var _a;
    if (!a || !a.frequencies || a.frequencies.length === 0) return { mode: "Sin resultados", frequency: "\u2014", period: "\u2014", dominant: "\u2014", state: "\u23F8 Detenido" };
    const i = a.frequencies[l] ?? 0, o = i > 0 ? 1 / i : 0, c = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], d = (_a = a.massParticipation) == null ? void 0 : _a[l];
    let k = "\u2014";
    if (d) {
      let f = 0, p = 0;
      for (let u = 0; u < 6; u++) Math.abs(d[u]) > f && (f = Math.abs(d[u]), p = u);
      k = `${c[p]} (${(f * 100).toFixed(0)}%)`;
    }
    return { mode: `Modo ${l + 1} / ${a.frequencies.length}`, frequency: `${i.toFixed(4)} Hz`, period: `${o.toFixed(4)} s`, dominant: k, state: S !== 0 ? "\u25B6 Reproduciendo" : "\u23F8 Pausado" };
  }
  function V() {
    return g.__ctx;
  }
  function A(i) {
    var _a;
    if (S && (cancelAnimationFrame(S), S = 0), i) {
      const o = K();
      (o == null ? void 0 : o.deformedShape) && I !== null && (o.deformedShape.val = I, I = null);
      const c = x.length > 0 ? x : N;
      c.length > 0 && (t.nodes.val = c.map((d) => [...d]), (_a = V()) == null ? void 0 : _a.render());
    }
  }
  function G() {
    var _a, _b;
    if (!a || !a.modeShapes || a.modeShapes.length === 0 || !a.modeShapes[l]) return;
    A(false);
    const i = K();
    (i == null ? void 0 : i.deformedShape) && (I === null && (I = i.deformedShape.val), i.deformedShape.val = false);
    const o = a.modeShapes[l], c = ((_a = a.frequencies) == null ? void 0 : _a[l]) || 1, d = ((_b = a.frequencies) == null ? void 0 : _b[0]) || 1, k = Math.max(Z, Math.min(tt, c / d));
    N = (x.length > 0 ? x : t.nodes.rawVal).map((s) => [...s]);
    const f = N.length, p = Math.floor(o.length / 6);
    if (p !== f) {
      console.warn(`[animateMode] el modo es de otra malla: ${p} nudos contra ${f} en pantalla. No animo (saldr\xEDan quietos los pisos de arriba). Corr\xE9 el modal sobre la misma malla que se muestra.`);
      return;
    }
    let u = 1 / 0, w = 1 / 0, q = 1 / 0, y = -1 / 0, T = -1 / 0, _ = -1 / 0;
    for (const s of N) s[0] < u && (u = s[0]), s[0] > y && (y = s[0]), s[1] < w && (w = s[1]), s[1] > T && (T = s[1]), s[2] < q && (q = s[2]), s[2] > _ && (_ = s[2]);
    const D = Math.sqrt((y - u) ** 2 + (T - w) ** 2 + (_ - q) ** 2) || 1;
    let $ = 0;
    for (let s = 0; s < f; s++) {
      const v = o[s * 6] || 0, C = o[s * 6 + 1] || 0, h = o[s * 6 + 2] || 0, F = Math.sqrt(v * v + C * C + h * h);
      F > $ && ($ = F);
    }
    const n = $ > 1e-12 ? D * B / 100 / $ : 1, U = performance.now(), z = () => {
      var _a2;
      const s = (performance.now() - U) / 1e3, v = Math.sin(2 * Math.PI * k * s) * n, C = new Array(f);
      for (let h = 0; h < f; h++) {
        const F = N[h];
        C[h] = [F[0] + (o[h * 6] || 0) * v, F[1] + (o[h * 6 + 1] || 0) * v, F[2] + (o[h * 6 + 2] || 0) * v];
      }
      t.nodes.val = C, (_a2 = V()) == null ? void 0 : _a2.render(), S = requestAnimationFrame(z);
    };
    S = requestAnimationFrame(z), P();
  }
  function nt(i) {
    var _a, _b;
    if (!a || !a.modeShapes || !a.modeShapes[i]) return;
    A(false);
    const o = K();
    (o == null ? void 0 : o.deformedShape) && (I === null && (I = o.deformedShape.val), o.deformedShape.val = false), l = Math.max(0, Math.min((((_a = a.frequencies) == null ? void 0 : _a.length) ?? 1) - 1, i));
    const c = a.modeShapes[l], d = (x.length > 0 ? x : t.nodes.rawVal).map((n) => [...n]), k = d.length;
    let f = 1 / 0, p = 1 / 0, u = 1 / 0, w = -1 / 0, q = -1 / 0, y = -1 / 0;
    for (const n of d) n[0] < f && (f = n[0]), n[0] > w && (w = n[0]), n[1] < p && (p = n[1]), n[1] > q && (q = n[1]), n[2] < u && (u = n[2]), n[2] > y && (y = n[2]);
    const T = Math.sqrt((w - f) ** 2 + (q - p) ** 2 + (y - u) ** 2) || 1;
    let _ = 0;
    for (let n = 0; n < k; n++) {
      const U = c[n * 6] || 0, z = c[n * 6 + 1] || 0, s = c[n * 6 + 2] || 0, v = Math.sqrt(U * U + z * z + s * s);
      v > _ && (_ = v);
    }
    const D = _ > 1e-12 ? T * B / 100 / _ : 1, $ = new Array(k);
    for (let n = 0; n < k; n++) {
      const U = d[n];
      $[n] = [U[0] + (c[n * 6] || 0) * D, U[1] + (c[n * 6 + 1] || 0) * D, U[2] + (c[n * 6 + 2] || 0) * D];
    }
    t.nodes.val = $, (_b = V()) == null ? void 0 : _b.render(), P();
  }
  return { setResults(i) {
    var _a;
    a = i, l >= (((_a = i == null ? void 0 : i.frequencies) == null ? void 0 : _a.length) ?? 0) && (l = 0), x = t.nodes.rawVal.map((o) => [...o]), P();
  }, setMode(i) {
    var _a;
    if (!a) return;
    const o = ((_a = a.frequencies) == null ? void 0 : _a.length) ?? 0;
    l = Math.max(0, Math.min(o - 1, i)), S !== 0 ? G() : P();
  }, showStatic(i) {
    nt(i);
  }, play() {
    a && S === 0 && G();
  }, stop() {
    A(true), P();
  }, isPlaying() {
    return S !== 0;
  }, modeCount() {
    var _a;
    return ((_a = a == null ? void 0 : a.frequencies) == null ? void 0 : _a.length) ?? 0;
  }, currentMode() {
    return l;
  }, currentFreq() {
    var _a;
    return ((_a = a == null ? void 0 : a.frequencies) == null ? void 0 : _a[l]) ?? 0;
  }, getStatus() {
    return et();
  }, dispose() {
    A(true), a = null;
  } };
}
const m = r.state(localStorage.getItem("hk_forceUnit") || "tonf"), M = r.state(localStorage.getItem("hk_dispUnit") || "mm");
r.derive(() => {
  localStorage.setItem("hk_forceUnit", m.val), window.__hekatanForceUnit = m.val;
});
r.derive(() => {
  localStorage.setItem("hk_dispUnit", M.val), window.__hekatanDispUnit = M.val;
});
const E = { kN: 1, tonf: 9.80665, kip: 4.4482216 };
function ct(e, t) {
  return e * E[m.val];
}
function at(e, t) {
  return e / E[t ?? m.val];
}
function st(e) {
  return 1 / W[R.val];
}
function Q(e, t) {
  return E[m.val] * st();
}
function ft(e, t) {
  return e * Q();
}
function ot(e, t) {
  return e / Q();
}
const W = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402, ft: 3.280839895 };
function it(e, t) {
  return e * W[t ?? M.val];
}
function ut(e, t = 2) {
  const g = M.val;
  return `${it(e, g).toFixed(t)} ${g}`;
}
function mt(e, t = 2) {
  const g = m.val;
  return `${at(e, g).toFixed(t)} ${g}`;
}
function dt(e, t = 2) {
  return `${ot(e).toFixed(t)} ${X()}`;
}
function X() {
  return `${m.val}\xB7${R.val}`;
}
function ht() {
  return `(${m.val})`;
}
function gt() {
  return `(${X()})`;
}
function St() {
  return `(${M.val})`;
}
function pt(e) {
  return e.replace(/\s*\((kN|tonf|kip)(·m|·ft)?\)\s*$/i, "").replace(/\s*\((mm|cm|m|in|ft|µm|um)\)\s*$/i, "").trim();
}
const b = r.state(localStorage.getItem("hk_stressUnit") || "tonf/m\xB2");
r.derive(() => {
  localStorage.setItem("hk_stressUnit", b.val), window.__hekatanStressUnit = b.val;
});
const j = r.state(localStorage.getItem("hk_subgradeUnit") || "tonf/m\xB3");
r.derive(() => {
  localStorage.setItem("hk_subgradeUnit", j.val);
});
const O = r.state(localStorage.getItem("hk_stiffTransUnit") || "tonf/m");
r.derive(() => {
  localStorage.setItem("hk_stiffTransUnit", O.val);
});
const H = r.state(localStorage.getItem("hk_lengthSectionUnit") || "mm");
r.derive(() => {
  localStorage.setItem("hk_lengthSectionUnit", H.val);
});
const R = r.state(localStorage.getItem("hk_lengthStructureUnit") || "m");
r.derive(() => {
  localStorage.setItem("hk_lengthStructureUnit", R.val);
});
const L = { "Metric MKS": { force: "tonf", disp: "mm", stress: "kgf/cm\xB2", subgrade: "tonf/m\xB3", stiffTrans: "tonf/m", lengthSection: "cm", lengthStructure: "m" }, "Metric SI": { force: "kN", disp: "mm", stress: "MPa", subgrade: "kN/m\xB3", stiffTrans: "kN/m", lengthSection: "mm", lengthStructure: "m" }, "U.S. Imperial": { force: "kip", disp: "in", stress: "ksi", subgrade: "kip/ft\xB3", stiffTrans: "kip/in", lengthSection: "in", lengthStructure: "ft" } };
function J(e) {
  const t = L[e];
  m.val = t.force, M.val = t.disp, b.val = t.stress, j.val = t.subgrade, O.val = t.stiffTrans, H.val = t.lengthSection, R.val = t.lengthStructure, localStorage.setItem("hk_unitsPreset", e), window.__hekatanForceUnit = m.val, window.__hekatanDispUnit = M.val, window.__hekatanStressUnit = b.val;
}
(() => {
  const e = localStorage.getItem("hk_unitsPreset");
  e ? e !== "Custom" && e in L ? J(e) : (window.__hekatanForceUnit = m.val, window.__hekatanDispUnit = M.val, window.__hekatanStressUnit = b.val) : J("Metric MKS");
})();
function vt() {
  for (const [e, t] of Object.entries(L)) if (t.force === m.val && t.disp === M.val && t.stress === b.val && t.subgrade === j.val && t.stiffTrans === O.val && t.lengthSection === H.val && t.lengthStructure === R.val) return e;
  return "Custom";
}
export {
  ut as a,
  mt as b,
  dt as c,
  M as d,
  at as e,
  m as f,
  ot as g,
  lt as h,
  vt as i,
  J as j,
  j as k,
  O as l,
  H as m,
  pt as n,
  ht as o,
  gt as p,
  St as q,
  ft as r,
  b as s,
  ct as t,
  it as u
};
