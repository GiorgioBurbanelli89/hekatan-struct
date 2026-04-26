import { v as i } from "./theme-2eEBQPmF.js";
const n = i.state(localStorage.getItem("hk_forceUnit") || "kN"), o = i.state(localStorage.getItem("hk_dispUnit") || "mm");
i.derive(() => {
  localStorage.setItem("hk_forceUnit", n.val);
});
i.derive(() => {
  localStorage.setItem("hk_dispUnit", o.val);
});
const r = { kN: 1, tonf: 9.80665, kip: 4.4482216 };
function f(t, e) {
  return t * r[n.val];
}
function c(t, e) {
  return t / r[n.val];
}
const a = { kN: 1, tonf: 9.80665, kip: 1.3558179 };
function m(t, e) {
  return t * a[n.val];
}
function u(t, e) {
  return t / a[n.val];
}
function l() {
  return `(${n.val})`;
}
function p() {
  return n.val === "kip" ? "(kip\xB7ft)" : `(${n.val}\xB7m)`;
}
function v() {
  return `(${o.val})`;
}
function k(t) {
  return t.replace(/\s*\((kN|tonf|kip)(·m|·ft)?\)\s*$/i, "").replace(/\s*\((mm|cm|m|in|µm|um)\)\s*$/i, "").trim();
}
export {
  c as a,
  u as b,
  l as c,
  o as d,
  v as e,
  n as f,
  m as g,
  p as m,
  k as s,
  f as t
};
