import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as o } from "./theme-CzzIlc4y.js";
import { g as k } from "./getViewer-6Q4ZHSQ2.js";
import { g as x } from "./getParameters-D_F_vOn_.js";
import { w as C, g as P } from "./styles-B8h3dtQW.js";
import "./Text-CBH-tcJP.js";
function T({ onToolbarClick: t }) {
  const n = document.createElement("div");
  return n.id = "drawing-toolbar", new C({ name: "toolbar", box: n, items: [{ type: "radio", id: "1st-floor", text: "1st Floor", checked: true }, { type: "radio", id: "2nd-floor", text: "2nd Floor" }], onClick(s) {
    t(s.target);
  } }), n;
}
const m = o.state([]), v = o.state([]), d = o.state([[5, 5, 0], [10, 15, 0], [15, 10, 0]]), w = o.state([[10, 2, 5], [2, 2, 5], [2, 10, 5], [7, 10, 5]]), h = o.state([]), g = o.state([[0, 1, 2, 3], []]), c = o.state([]), p = o.state([]), y = { width: { value: o.state(2), min: 0.5, max: 5, step: 0.1 } }, E = o.state({ position: [10, 10, 0], rotation: [Math.PI / 2, 0, 0] }), b = 5;
c.val = d.val;
let f = "1st-floor";
function F(t) {
  f = t, E.val = { position: [10, 10, t === "1st-floor" ? 0 : b], rotation: [Math.PI / 2, 0, 0] }, c.val = t === "1st-floor" ? d.val : w.val, p.val = t === "1st-floor" ? h.val : g.val;
}
o.derive(() => {
  f == "1st-floor" && (d.val = c.val, h.val = p.val), f == "2nd-floor" && (w.val = c.val, g.val = p.val);
});
o.derive(() => {
  m.val = [], v.val = [];
  const t = [], n = [];
  d.val.forEach((a, r) => {
    const { columnNodes: i, columnElements: u } = N(r * 4, a, b, y.width.value.val);
    t.push(...i), n.push(...u);
  });
  const s = [];
  w.val.forEach((a, r) => {
    s.push(a);
  });
  const l = [], e = t.length;
  g.val.forEach((a, r) => {
    const i = a.map((u) => e + u);
    l.push(i);
  }), m.val = [...m.rawVal, ...t, ...s], v.val = [...v.rawVal, ...n, ...l];
});
document.body.append(x(y), k({ mesh: { nodes: m, elements: v }, drawingObj: { points: c, polylines: p, gridTarget: E } }), T({ onToolbarClick: F }), P({ sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/drawing/main.ts", author: "https://www.linkedin.com/in/madil4/" }));
function N(t, n, s, l) {
  const e = n[0], a = n[1], r = [n, [e - 0.5 * l, a - 0.5 * l, s], [e + 0.5 * l, a - 0.5 * l, s], [e, a + 0.5 * l, s]], i = [[t, t + 1], [t, t + 2], [t, t + 3]];
  return { columnNodes: r, columnElements: i };
}
