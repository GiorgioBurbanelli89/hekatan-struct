function x() {
  return { nodes: /* @__PURE__ */ new Map(), lines: /* @__PURE__ */ new Map(), areas: /* @__PURE__ */ new Map(), solids: /* @__PURE__ */ new Map() };
}
function z() {
  return { model: x(), tool: "select", snap: 0.5, workPlane: "xy", workZ: 0, pendingNodes: [], nextNodeId: 1, nextLineId: 1, nextAreaId: 1, nextSolidId: 1 };
}
let s = z();
function k() {
  return s;
}
function S() {
  s = z(), p();
}
function p() {
  const n = ["# CAD Drawer \u2014 modelo dibujado con mouse", "# (estos comandos se generan automaticamente cuando dibujas con CAD)", ""];
  s.model.nodes.size > 0 && n.push("# Nodos");
  for (const e of s.model.nodes.values()) n.push(`node ${e.id}  ${e.pos[0]}  ${e.pos[1]}  ${e.pos[2]}`);
  s.model.nodes.size > 0 && n.push(""), s.model.lines.size > 0 && n.push("# Frames");
  for (const e of s.model.lines.values()) e.kind !== "edge" && n.push(`frame ${e.id}  ${e.nI} ${e.nJ}  25e6  0.16  0.0021`);
  s.model.lines.size > 0 && n.push(""), s.model.areas.size > 0 && n.push("# Shells");
  for (const e of s.model.areas.values()) e.pts.length < 3 || (e.pts.length === 4 ? n.push(`shell ${e.id}  ${e.pts.join(" ")}  0.20  25e6`) : n.push(`# shell ${e.id} (3 nodos \u2014 triangle, FEM no soportado, solo visual)`));
  s.model.areas.size > 0 && n.push(""), window.__hekatanCliScript = n.join(`
`);
}
function A(n) {
  const e = s.nextNodeId++, o = { id: e, pos: n };
  return s.model.nodes.set(e, o), p(), o;
}
function D(n, e, o = "frame") {
  const i = s.nextLineId++, r = { id: i, nI: n, nJ: e, kind: o };
  return s.model.lines.set(i, r), p(), r;
}
function y(n, e = "shell") {
  const o = s.nextAreaId++, i = { id: o, pts: n, kind: e };
  return s.model.areas.set(o, i), p(), i;
}
function C(n) {
  s.tool = n, s.pendingNodes = [];
}
function N() {
  return { nodes: s.model.nodes.size, lines: s.model.lines.size, areas: s.model.areas.size, solids: s.model.solids.size, tool: s.tool, snap: s.snap, workPlane: s.workPlane, workZ: s.workZ, pending: s.pendingNodes.length };
}
window.__hekatanCadState = { get: k, reset: S, addNode: A, addLine: D, addArea: y, setTool: C, getStats: N };
const b = { id: "cad-draw", name: "CAD Drawer (mouse + Tweakpane)", category: "Modelar", defaultShellResult: "none", availableShellResults: [], params: {}, build(n, e) {
  const o = k(), i = Array.from(o.model.nodes.keys()).sort((a, d) => a - d), r = /* @__PURE__ */ new Map(), u = [];
  for (const a of i) {
    r.set(a, u.length);
    const d = o.model.nodes.get(a);
    u.push(d.pos);
  }
  const c = [], m = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  for (const a of o.model.lines.values()) {
    const d = r.get(a.nI), l = r.get(a.nJ);
    if (d === void 0 || l === void 0) continue;
    const t = c.length;
    c.push([d, l]), m.set(t, 25e6), f.set(t, 25e6 / (2 * 1.2)), g.set(t, 0.16), M.set(t, 21e-4), I.set(t, 21e-4), $.set(t, 14e-4), w.set(t, 2.45), h.set(t, 0.2);
  }
  for (const a of o.model.areas.values()) {
    if (a.pts.length !== 4) continue;
    const d = a.pts.map((t) => r.get(t));
    if (d.some((t) => t === void 0)) continue;
    const l = c.length;
    c.push(d), m.set(l, 25e6), f.set(l, 25e6 / (2 * 1.2)), v.set(l, 0.2), w.set(l, 2.45), h.set(l, 0.2);
  }
  e.nodes.val = u, e.elements.val = c, e.nodeInputs.val = { supports: /* @__PURE__ */ new Map(), loads: /* @__PURE__ */ new Map() }, e.elementInputs.val = { elasticities: m, shearModuli: f, areas: g, momentsOfInertiaY: M, momentsOfInertiaZ: I, torsionalConstants: $, densities: w, poissonsRatios: h, thicknesses: v }, e.objects3D.val = [], console.log(`[CAD Draw] tool=${o.tool} | snap=${o.snap}m | plane=${o.workPlane}@z=${o.workZ}m | nodes=${o.model.nodes.size} lines=${o.model.lines.size} areas=${o.model.areas.size}`);
} };
export {
  b as c
};
