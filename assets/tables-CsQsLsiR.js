import "./modulepreload-polyfill-B5Qt9EMX.js";
import { a as n, B as r, L as d, v as t, F as m } from "./theme-B_wdNv2N.js";
import { g as p } from "./getViewer-C6TT2yG5.js";
import { g as c } from "./styles-uKUt2GN_.js";
import { g as f } from "./getTables-ti40HR--.js";
import { g as b } from "./getDialog-soX6SmCV.js";
import "./Text-2ZjbNsXj.js";
const a = t.state([[0, 0, 0], [5, 0, 5], [10, 0, 0]]), i = new n(new r(), new d()), e = t.state([i]), o = /* @__PURE__ */ new Map();
o.set("polyline", { text: "Polyline", fields: [{ field: "A", text: "X-coordinate", min: "25", editable: { type: "float" } }, { field: "B", text: "Y-coordinate", editable: { type: "float" } }, { field: "C", text: "Z-coordinate", editable: { type: "float" } }], data: a });
t.derive(() => a.val = o.get("polyline").data.val);
t.derive(() => {
  i.geometry.setAttribute("position", new m(a.val.flat(), 3)), e.val = [...e.rawVal];
});
const l = t.state(""), s = t.state(void 0);
t.derive(() => {
  l.val === "Tables" && (s.val = f({ tables: o }));
});
document.body.append(c({ clickedButton: l, buttons: ["Tables"], sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/tables/main.ts", author: "https://www.linkedin.com/in/cal-mense/" }), b({ dialogBody: s }), p({ objects3D: e }));
