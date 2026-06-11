import { v as a } from "./theme-D5p5K0bJ.js";
const n = a.state(localStorage.getItem("hk_forceUnit") || "tonf"), i = a.state(localStorage.getItem("hk_dispUnit") || "mm");
a.derive(() => {
  localStorage.setItem("hk_forceUnit", n.val), window.__hekatanForceUnit = n.val;
});
a.derive(() => {
  localStorage.setItem("hk_dispUnit", i.val), window.__hekatanDispUnit = i.val;
});
const v = { kN: 1, tonf: 9.80665, kip: 4.4482216 };
function _(e, t) {
  return e * v[n.val];
}
function k(e, t) {
  return e / v[t ?? n.val];
}
const g = { kN: 1, tonf: 9.80665, kip: 1.3558179 };
function I(e, t) {
  return e * g[n.val];
}
function h(e, t) {
  return e / g[t ?? n.val];
}
const d = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 };
function U(e, t) {
  return e * d[t ?? i.val];
}
function w(e, t = 2) {
  const s = i.val;
  return `${U(e, s).toFixed(t)} ${s}`;
}
function $(e, t = 2) {
  const s = n.val;
  return `${k(e, s).toFixed(t)} ${s}`;
}
function b(e, t = 2) {
  const s = n.val, S = s === "kip" ? "kip\xB7ft" : `${s}\xB7m`;
  return `${h(e, s).toFixed(t)} ${S}`;
}
function T() {
  return `(${n.val})`;
}
function F() {
  return n.val === "kip" ? "(kip\xB7ft)" : `(${n.val}\xB7m)`;
}
function x() {
  return `(${i.val})`;
}
function M(e) {
  return e.replace(/\s*\((kN|tonf|kip)(·m|·ft)?\)\s*$/i, "").replace(/\s*\((mm|cm|m|in|µm|um)\)\s*$/i, "").trim();
}
const r = a.state(localStorage.getItem("hk_stressUnit") || "tonf/m\xB2");
a.derive(() => {
  localStorage.setItem("hk_stressUnit", r.val), window.__hekatanStressUnit = r.val;
});
const o = a.state(localStorage.getItem("hk_subgradeUnit") || "tonf/m\xB3");
a.derive(() => {
  localStorage.setItem("hk_subgradeUnit", o.val);
});
const l = a.state(localStorage.getItem("hk_stiffTransUnit") || "tonf/m");
a.derive(() => {
  localStorage.setItem("hk_stiffTransUnit", l.val);
});
const c = a.state(localStorage.getItem("hk_lengthSectionUnit") || "mm");
a.derive(() => {
  localStorage.setItem("hk_lengthSectionUnit", c.val);
});
const f = a.state(localStorage.getItem("hk_lengthStructureUnit") || "m");
a.derive(() => {
  localStorage.setItem("hk_lengthStructureUnit", f.val);
});
const m = { "Metric MKS": { force: "tonf", disp: "mm", stress: "kgf/cm\xB2", subgrade: "tonf/m\xB3", stiffTrans: "tonf/m", lengthSection: "cm", lengthStructure: "m" }, "Metric SI": { force: "kN", disp: "mm", stress: "MPa", subgrade: "kN/m\xB3", stiffTrans: "kN/m", lengthSection: "mm", lengthStructure: "m" }, "U.S. Imperial": { force: "kip", disp: "in", stress: "ksi", subgrade: "kip/ft\xB3", stiffTrans: "kip/in", lengthSection: "in", lengthStructure: "ft" } };
function u(e) {
  const t = m[e];
  n.val = t.force, i.val = t.disp, r.val = t.stress, o.val = t.subgrade, l.val = t.stiffTrans, c.val = t.lengthSection, f.val = t.lengthStructure, localStorage.setItem("hk_unitsPreset", e), window.__hekatanForceUnit = n.val, window.__hekatanDispUnit = i.val, window.__hekatanStressUnit = r.val;
}
(() => {
  const e = localStorage.getItem("hk_unitsPreset");
  e ? e !== "Custom" && e in m ? u(e) : (window.__hekatanForceUnit = n.val, window.__hekatanDispUnit = i.val, window.__hekatanStressUnit = r.val) : u("Metric MKS");
})();
function N() {
  for (const [e, t] of Object.entries(m)) if (t.force === n.val && t.disp === i.val && t.stress === r.val && t.subgrade === o.val && t.stiffTrans === l.val && t.lengthSection === c.val && t.lengthStructure === f.val) return e;
  return "Custom";
}
export {
  w as a,
  $ as b,
  b as c,
  i as d,
  k as e,
  n as f,
  h as g,
  N as h,
  u as i,
  o as j,
  l as k,
  c as l,
  M as m,
  T as n,
  F as o,
  x as p,
  I as q,
  r as s,
  _ as t
};
