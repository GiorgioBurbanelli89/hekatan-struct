import { v as l } from "./theme-Co6w-pfC.js";
function ot(e) {
  const { mesh: t, viewerElm: c, onStatusChange: A } = e, G = e.scalePercent ?? 5, [X, Y] = e.visFrequencyRange ?? [0.5, 3];
  let s = null, f = 0, g = 0, x = [], N = [], I = null;
  function K() {
    var _a;
    return c.__settings ?? ((_a = c.__ctx) == null ? void 0 : _a.settings);
  }
  function P() {
    A == null ? void 0 : A();
  }
  function Z() {
    var _a;
    if (!s || !s.frequencies || s.frequencies.length === 0) return { mode: "Sin resultados", frequency: "\u2014", period: "\u2014", dominant: "\u2014", state: "\u23F8 Detenido" };
    const o = s.frequencies[f] ?? 0, i = o > 0 ? 1 / o : 0, m = ["Ux", "Uy", "Uz", "Rx", "Ry", "Rz"], h = (_a = s.massParticipation) == null ? void 0 : _a[f];
    let M = "\u2014";
    if (h) {
      let u = 0, S = 0;
      for (let d = 0; d < 6; d++) Math.abs(h[d]) > u && (u = Math.abs(h[d]), S = d);
      M = `${m[S]} (${(u * 100).toFixed(0)}%)`;
    }
    return { mode: `Modo ${f + 1} / ${s.frequencies.length}`, frequency: `${o.toFixed(4)} Hz`, period: `${i.toFixed(4)} s`, dominant: M, state: g !== 0 ? "\u25B6 Reproduciendo" : "\u23F8 Pausado" };
  }
  function V() {
    return c.__ctx;
  }
  function R(o) {
    var _a;
    if (g && (cancelAnimationFrame(g), g = 0), o) {
      const i = K();
      (i == null ? void 0 : i.deformedShape) && I !== null && (i.deformedShape.val = I, I = null);
      const m = x.length > 0 ? x : N;
      m.length > 0 && (t.nodes.val = m.map((h) => [...h]), (_a = V()) == null ? void 0 : _a.render());
    }
  }
  function J() {
    var _a, _b;
    if (!s || !s.modeShapes || s.modeShapes.length === 0 || !s.modeShapes[f]) return;
    R(false);
    const o = K();
    (o == null ? void 0 : o.deformedShape) && (I === null && (I = o.deformedShape.val), o.deformedShape.val = false);
    const i = s.modeShapes[f], m = ((_a = s.frequencies) == null ? void 0 : _a[f]) || 1, h = ((_b = s.frequencies) == null ? void 0 : _b[0]) || 1, M = Math.max(X, Math.min(Y, m / h));
    N = (x.length > 0 ? x : t.nodes.rawVal).map((a) => [...a]);
    const u = N.length, S = Math.floor(i.length / 6);
    if (S !== u) {
      console.warn(`[animateMode] el modo es de otra malla: ${S} nudos contra ${u} en pantalla. No animo (saldr\xEDan quietos los pisos de arriba). Corr\xE9 el modal sobre la misma malla que se muestra.`);
      return;
    }
    let d = 1 / 0, w = 1 / 0, q = 1 / 0, y = -1 / 0, T = -1 / 0, _ = -1 / 0;
    for (const a of N) a[0] < d && (d = a[0]), a[0] > y && (y = a[0]), a[1] < w && (w = a[1]), a[1] > T && (T = a[1]), a[2] < q && (q = a[2]), a[2] > _ && (_ = a[2]);
    const D = Math.sqrt((y - d) ** 2 + (T - w) ** 2 + (_ - q) ** 2) || 1;
    let F = 0;
    for (let a = 0; a < u; a++) {
      const v = i[a * 6] || 0, C = i[a * 6 + 1] || 0, p = i[a * 6 + 2] || 0, $ = Math.sqrt(v * v + C * C + p * p);
      $ > F && (F = $);
    }
    const n = F > 1e-12 ? D * G / 100 / F : 1, U = performance.now(), z = () => {
      var _a2;
      const a = (performance.now() - U) / 1e3, v = Math.sin(2 * Math.PI * M * a) * n, C = new Array(u);
      for (let p = 0; p < u; p++) {
        const $ = N[p];
        C[p] = [$[0] + (i[p * 6] || 0) * v, $[1] + (i[p * 6 + 1] || 0) * v, $[2] + (i[p * 6 + 2] || 0) * v];
      }
      t.nodes.val = C, (_a2 = V()) == null ? void 0 : _a2.render(), g = requestAnimationFrame(z);
    };
    g = requestAnimationFrame(z), P();
  }
  function tt(o) {
    var _a, _b;
    if (!s || !s.modeShapes || !s.modeShapes[o]) return;
    R(false);
    const i = K();
    (i == null ? void 0 : i.deformedShape) && (I === null && (I = i.deformedShape.val), i.deformedShape.val = false), f = Math.max(0, Math.min((((_a = s.frequencies) == null ? void 0 : _a.length) ?? 1) - 1, o));
    const m = s.modeShapes[f], h = (x.length > 0 ? x : t.nodes.rawVal).map((n) => [...n]), M = h.length;
    let u = 1 / 0, S = 1 / 0, d = 1 / 0, w = -1 / 0, q = -1 / 0, y = -1 / 0;
    for (const n of h) n[0] < u && (u = n[0]), n[0] > w && (w = n[0]), n[1] < S && (S = n[1]), n[1] > q && (q = n[1]), n[2] < d && (d = n[2]), n[2] > y && (y = n[2]);
    const T = Math.sqrt((w - u) ** 2 + (q - S) ** 2 + (y - d) ** 2) || 1;
    let _ = 0;
    for (let n = 0; n < M; n++) {
      const U = m[n * 6] || 0, z = m[n * 6 + 1] || 0, a = m[n * 6 + 2] || 0, v = Math.sqrt(U * U + z * z + a * a);
      v > _ && (_ = v);
    }
    const D = _ > 1e-12 ? T * G / 100 / _ : 1, F = new Array(M);
    for (let n = 0; n < M; n++) {
      const U = h[n];
      F[n] = [U[0] + (m[n * 6] || 0) * D, U[1] + (m[n * 6 + 1] || 0) * D, U[2] + (m[n * 6 + 2] || 0) * D];
    }
    t.nodes.val = F, (_b = V()) == null ? void 0 : _b.render(), P();
  }
  return { setResults(o) {
    var _a;
    s = o, f >= (((_a = o == null ? void 0 : o.frequencies) == null ? void 0 : _a.length) ?? 0) && (f = 0), x = t.nodes.rawVal.map((i) => [...i]), P();
  }, setMode(o) {
    var _a;
    if (!s) return;
    const i = ((_a = s.frequencies) == null ? void 0 : _a.length) ?? 0;
    f = Math.max(0, Math.min(i - 1, o)), g !== 0 ? J() : P();
  }, showStatic(o) {
    tt(o);
  }, play() {
    s && g === 0 && J();
  }, stop() {
    R(true), P();
  }, isPlaying() {
    return g !== 0;
  }, modeCount() {
    var _a;
    return ((_a = s == null ? void 0 : s.frequencies) == null ? void 0 : _a.length) ?? 0;
  }, currentMode() {
    return f;
  }, currentFreq() {
    var _a;
    return ((_a = s == null ? void 0 : s.frequencies) == null ? void 0 : _a[f]) ?? 0;
  }, getStatus() {
    return Z();
  }, dispose() {
    R(true), s = null;
  } };
}
const r = l.state(localStorage.getItem("hk_forceUnit") || "tonf"), k = l.state(localStorage.getItem("hk_dispUnit") || "mm");
l.derive(() => {
  localStorage.setItem("hk_forceUnit", r.val), window.__hekatanForceUnit = r.val;
});
l.derive(() => {
  localStorage.setItem("hk_dispUnit", k.val), window.__hekatanDispUnit = k.val;
});
const Q = { kN: 1, tonf: 9.80665, kip: 4.4482216 };
function rt(e, t) {
  return e * Q[r.val];
}
function et(e, t) {
  return e / Q[t ?? r.val];
}
const W = { kN: 1, tonf: 9.80665, kip: 1.3558179 };
function lt(e, t) {
  return e * W[r.val];
}
function nt(e, t) {
  return e / W[t ?? r.val];
}
const st = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 };
function at(e, t) {
  return e * st[t ?? k.val];
}
function ct(e, t = 2) {
  const c = k.val;
  return `${at(e, c).toFixed(t)} ${c}`;
}
function ft(e, t = 2) {
  const c = r.val;
  return `${et(e, c).toFixed(t)} ${c}`;
}
function mt(e, t = 2) {
  const c = r.val, A = c === "kip" ? "kip\xB7ft" : `${c}\xB7m`;
  return `${nt(e, c).toFixed(t)} ${A}`;
}
function ut() {
  return `(${r.val})`;
}
function dt() {
  return r.val === "kip" ? "(kip\xB7ft)" : `(${r.val}\xB7m)`;
}
function ht() {
  return `(${k.val})`;
}
function pt(e) {
  return e.replace(/\s*\((kN|tonf|kip)(·m|·ft)?\)\s*$/i, "").replace(/\s*\((mm|cm|m|in|µm|um)\)\s*$/i, "").trim();
}
const b = l.state(localStorage.getItem("hk_stressUnit") || "tonf/m\xB2");
l.derive(() => {
  localStorage.setItem("hk_stressUnit", b.val), window.__hekatanStressUnit = b.val;
});
const E = l.state(localStorage.getItem("hk_subgradeUnit") || "tonf/m\xB3");
l.derive(() => {
  localStorage.setItem("hk_subgradeUnit", E.val);
});
const j = l.state(localStorage.getItem("hk_stiffTransUnit") || "tonf/m");
l.derive(() => {
  localStorage.setItem("hk_stiffTransUnit", j.val);
});
const O = l.state(localStorage.getItem("hk_lengthSectionUnit") || "mm");
l.derive(() => {
  localStorage.setItem("hk_lengthSectionUnit", O.val);
});
const H = l.state(localStorage.getItem("hk_lengthStructureUnit") || "m");
l.derive(() => {
  localStorage.setItem("hk_lengthStructureUnit", H.val);
});
const B = { "Metric MKS": { force: "tonf", disp: "mm", stress: "kgf/cm\xB2", subgrade: "tonf/m\xB3", stiffTrans: "tonf/m", lengthSection: "cm", lengthStructure: "m" }, "Metric SI": { force: "kN", disp: "mm", stress: "MPa", subgrade: "kN/m\xB3", stiffTrans: "kN/m", lengthSection: "mm", lengthStructure: "m" }, "U.S. Imperial": { force: "kip", disp: "in", stress: "ksi", subgrade: "kip/ft\xB3", stiffTrans: "kip/in", lengthSection: "in", lengthStructure: "ft" } };
function L(e) {
  const t = B[e];
  r.val = t.force, k.val = t.disp, b.val = t.stress, E.val = t.subgrade, j.val = t.stiffTrans, O.val = t.lengthSection, H.val = t.lengthStructure, localStorage.setItem("hk_unitsPreset", e), window.__hekatanForceUnit = r.val, window.__hekatanDispUnit = k.val, window.__hekatanStressUnit = b.val;
}
(() => {
  const e = localStorage.getItem("hk_unitsPreset");
  e ? e !== "Custom" && e in B ? L(e) : (window.__hekatanForceUnit = r.val, window.__hekatanDispUnit = k.val, window.__hekatanStressUnit = b.val) : L("Metric MKS");
})();
function gt() {
  for (const [e, t] of Object.entries(B)) if (t.force === r.val && t.disp === k.val && t.stress === b.val && t.subgrade === E.val && t.stiffTrans === j.val && t.lengthSection === O.val && t.lengthStructure === H.val) return e;
  return "Custom";
}
export {
  ct as a,
  ft as b,
  mt as c,
  k as d,
  et as e,
  r as f,
  nt as g,
  ot as h,
  gt as i,
  L as j,
  E as k,
  j as l,
  O as m,
  pt as n,
  ut as o,
  dt as p,
  ht as q,
  lt as r,
  b as s,
  rt as t,
  at as u
};
