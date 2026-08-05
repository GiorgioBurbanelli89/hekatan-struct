import "./modulepreload-polyfill-B5Qt9EMX.js";
import { a as n, B as r, L as d, v as t, F as m } from "./theme-DDCjfe25.js";
import { g as p } from "./getViewer-Dd7TO-13.js";
import "./tweakpane-BXg6ZhiP.js";
import { g as c } from "./styles-CqK8TRG5.js";
import { g as f } from "./getTables-DAg4ZPNH.js";
import { g as b } from "./getDialog-B5MD8Pns.js";
import "./Text-DAMC3bLh.js";
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
