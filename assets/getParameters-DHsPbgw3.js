import { P as r } from "./tweakpane-BXg6ZhiP.js";
import "./styles-C91QLG29.js";
function u(s) {
  const t = document.createElement("div"), n = new r({ title: "Parameters", container: t }), l = a(s), i = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
  return t.setAttribute("id", "parameters"), i.set("root", n), Object.entries(s).forEach(([o, e]) => {
    var _a;
    e.folder && !i.get(e.folder) && i.set(e.folder, n.addFolder({ title: e.folder }));
    const c = (_a = i.get(e.folder ?? "root")) == null ? void 0 : _a.addBinding(l, o, { min: e.min || 0, max: e.max || 50, step: e.step || 0.5, label: e.label || o });
    c && d.set(o, c);
  }), n.on("change", (o) => {
    s[o.target.key].value.val = o.value;
  }), t.__bindings = d, t.__pane = n, t;
}
const a = (s) => Object.entries(s).reduce((t, [n, l]) => (t[n] = l.value.val, t), {});
export {
  u as g
};
