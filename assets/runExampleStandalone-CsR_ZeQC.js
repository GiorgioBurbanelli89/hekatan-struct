import { P as z, v as o } from "./theme-CzzIlc4y.js";
import { g as O } from "./getViewer-DCEDXJ2J.js";
import { g as P } from "./styles-Y66YTQNs.js";
import { d as x, f as w } from "./units-CVPhvG5E.js";
function C(s) {
  const l = o.state([]), r = o.state([]), m = o.state({}), c = o.state({}), p = o.state({}), u = o.state({}), f = o.state([]), y = { nodes: l, elements: r, nodeInputs: m, elementInputs: c, deformOutputs: p, analyzeOutputs: u, objects3D: f }, h = Object.fromEntries(Object.entries(s.params).map(([e, t]) => [e, t.default])), a = () => s.build(h, y), d = document.createElement("div");
  d.style.cssText = "position:fixed;top:16px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:90vh;overflow-y:auto;font-size:12px", document.body.appendChild(d);
  const b = new z({ container: d, title: s.name }), g = b.addFolder({ title: "Unidades", expanded: false }), v = { force: w.val, disp: x.val };
  g.addBinding(v, "force", { label: "Fuerza", options: { kN: "kN", tonf: "tonf", kip: "kip" } }).on("change", (e) => {
    w.val = e.value, a();
  }), g.addBinding(v, "disp", { label: "Desplazamiento", options: { mm: "mm", cm: "cm", \u00B5m: "\xB5m" } }).on("change", (e) => {
    x.val = e.value, a();
  });
  const k = b.addFolder({ title: "Par\xE1metros" });
  let i = null;
  const j = () => {
    i !== null && clearTimeout(i), i = window.setTimeout(() => {
      i = null, a();
    }, 120);
  };
  for (const [e, t] of Object.entries(s.params)) {
    const n = { label: t.label ?? e };
    t.options !== void 0 ? n.options = t.options : (t.min !== void 0 && (n.min = t.min), t.max !== void 0 && (n.max = t.max), t.step !== void 0 && (n.step = t.step)), k.addBinding(h, e, n).on("change", j);
  }
  document.body.append(O({ mesh: { nodes: l, elements: r, nodeInputs: m, elementInputs: c, deformOutputs: p, analyzeOutputs: u }, objects3D: f, settingsObj: { deformedShape: true, displayScale: -2, shellResults: "displacementZ", gridSize: 10, showCotas: true } }), P({ sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct", author: "https://www.linkedin.com/in/jorge-burbano-213741138/" })), a();
}
export {
  C as r
};
