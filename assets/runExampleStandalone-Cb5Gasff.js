import { P as z, v as n } from "./theme-CzzIlc4y.js";
import { g as O } from "./getViewer-BpBQk0GY.js";
import { g as P } from "./styles-B8h3dtQW.js";
import { d as x, f as w } from "./units-CVPhvG5E.js";
function F(s) {
  const l = n.state([]), r = n.state([]), m = n.state({}), c = n.state({}), p = n.state({}), u = n.state({}), f = n.state([]), k = { nodes: l, elements: r, nodeInputs: m, elementInputs: c, deformOutputs: p, analyzeOutputs: u, objects3D: f }, b = Object.fromEntries(Object.entries(s.params).map(([e, t]) => [e, t.default])), a = () => s.build(b, k), d = document.createElement("div");
  d.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px", document.body.appendChild(d);
  const h = new z({ container: d, title: s.name }), g = h.addFolder({ title: "Unidades", expanded: false }), v = { force: w.val, disp: x.val };
  g.addBinding(v, "force", { label: "Fuerza", options: { kN: "kN", tonf: "tonf", kip: "kip" } }).on("change", (e) => {
    w.val = e.value, a();
  }), g.addBinding(v, "disp", { label: "Desplazamiento", options: { mm: "mm", cm: "cm", \u00B5m: "\xB5m" } }).on("change", (e) => {
    x.val = e.value, a();
  });
  const y = h.addFolder({ title: "Par\xE1metros" });
  let i = null;
  const j = () => {
    i !== null && clearTimeout(i), i = window.setTimeout(() => {
      i = null, a();
    }, 120);
  };
  for (const [e, t] of Object.entries(s.params)) {
    const o = { label: t.label ?? e };
    t.options !== void 0 ? o.options = t.options : (t.min !== void 0 && (o.min = t.min), t.max !== void 0 && (o.max = t.max), t.step !== void 0 && (o.step = t.step)), y.addBinding(b, e, o).on("change", j);
  }
  document.body.append(O({ mesh: { nodes: l, elements: r, nodeInputs: m, elementInputs: c, deformOutputs: p, analyzeOutputs: u }, objects3D: f, settingsObj: { deformedShape: true, shellResults: "displacementZ", gridSize: 10 } }), P({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct", author: "https://www.linkedin.com/in/jorge-burbano-213741138/" })), a();
}
export {
  F as r
};
