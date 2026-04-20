import { v as t } from "./theme-CzzIlc4y.js";
const e = t.state(localStorage.getItem("hk_forceUnit") || "kN"), a = t.state(localStorage.getItem("hk_dispUnit") || "mm");
t.derive(() => {
  localStorage.setItem("hk_forceUnit", e.val);
});
t.derive(() => {
  localStorage.setItem("hk_dispUnit", a.val);
});
export {
  a as d,
  e as f
};
