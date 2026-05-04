import { v as n } from "./theme-2eEBQPmF.js";
const s = n.state(localStorage.getItem("hk_forceUnit") || "tonf"), r = n.state(localStorage.getItem("hk_dispUnit") || "mm");
n.derive(() => {
  localStorage.setItem("hk_forceUnit", s.val);
});
n.derive(() => {
  localStorage.setItem("hk_dispUnit", r.val);
});
const f = { kN: 1, tonf: 9.80665, kip: 4.4482216 };
function S(e, t) {
  return e * f[s.val];
}
function v(e, t) {
  return e / f[s.val];
}
const m = { kN: 1, tonf: 9.80665, kip: 1.3558179 };
function h(e, t) {
  return e * m[s.val];
}
function k(e, t) {
  return e / m[s.val];
}
function U() {
  return `(${s.val})`;
}
function p() {
  return s.val === "kip" ? "(kip\xB7ft)" : `(${s.val}\xB7m)`;
}
function d() {
  return `(${r.val})`;
}
function I(e) {
  return e.replace(/\s*\((kN|tonf|kip)(·m|·ft)?\)\s*$/i, "").replace(/\s*\((mm|cm|m|in|µm|um)\)\s*$/i, "").trim();
}
const a = n.state(localStorage.getItem("hk_stressUnit") || "tonf/m\xB2");
n.derive(() => {
  localStorage.setItem("hk_stressUnit", a.val);
});
const i = n.state(localStorage.getItem("hk_subgradeUnit") || "tonf/m\xB3");
n.derive(() => {
  localStorage.setItem("hk_subgradeUnit", i.val);
});
const o = n.state(localStorage.getItem("hk_stiffTransUnit") || "tonf/m");
n.derive(() => {
  localStorage.setItem("hk_stiffTransUnit", o.val);
});
const l = n.state(localStorage.getItem("hk_lengthSectionUnit") || "mm");
n.derive(() => {
  localStorage.setItem("hk_lengthSectionUnit", l.val);
});
const c = n.state(localStorage.getItem("hk_lengthStructureUnit") || "m");
n.derive(() => {
  localStorage.setItem("hk_lengthStructureUnit", c.val);
});
const u = { "Metric MKS": { force: "tonf", disp: "mm", stress: "kgf/cm\xB2", subgrade: "tonf/m\xB3", stiffTrans: "tonf/m", lengthSection: "cm", lengthStructure: "m" }, "Metric SI": { force: "kN", disp: "mm", stress: "MPa", subgrade: "kN/m\xB3", stiffTrans: "kN/m", lengthSection: "mm", lengthStructure: "m" }, "U.S. Imperial": { force: "kip", disp: "in", stress: "ksi", subgrade: "kip/ft\xB3", stiffTrans: "kip/in", lengthSection: "in", lengthStructure: "ft" } };
function _(e) {
  const t = u[e];
  s.val = t.force, r.val = t.disp, a.val = t.stress, i.val = t.subgrade, o.val = t.stiffTrans, l.val = t.lengthSection, c.val = t.lengthStructure, localStorage.setItem("hk_unitsPreset", e);
}
function b() {
  for (const [e, t] of Object.entries(u)) if (t.force === s.val && t.disp === r.val && t.stress === a.val && t.subgrade === i.val && t.stiffTrans === o.val && t.lengthSection === l.val && t.lengthStructure === c.val) return e;
  return "Custom";
}
export {
  v as a,
  k as b,
  b as c,
  r as d,
  _ as e,
  s as f,
  i as g,
  o as h,
  I as i,
  U as j,
  d as k,
  l,
  p as m,
  h as n,
  a as s,
  S as t
};
