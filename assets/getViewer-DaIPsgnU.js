import { N as de, B as N, U as ue, F as K, G as q, d as _e, L as oe, e as J, D as j, b as O, r as G, y as De, c as $e, V as I, w as ne, x as H, X as ge, k as Le, a as se, f as $, h as pe, Y as he, l as He, j as Ue, Z as Ge, _ as qe, $ as ze, a0 as le, a1 as Ke, a2 as Oe, a3 as Qe, a4 as Je, a5 as je, n as Xe, a6 as Te, q as et, s as tt, t as nt, W as ot, u as st, a7 as Ee, z as ye, A as at, v as Be, O as it } from "./Text-QYN3x2IP.js";
import { v as F, P as rt, g as te, o as me } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function lt(e, t, l) {
  const o = document.createElement("div"), n = new rt({ title: "Settings", expanded: true, container: o });
  if (window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(n), o.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.deformScale, "val", { label: "Deform scale XY", min: 0.1, max: 5e3, step: 0.1 }), n.addBinding(e.deformScaleZ, "val", { label: "Deform scale Z", min: 0.01, max: 10, step: 0.01 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), n.addBinding(e.faces, "val", { label: "  Caras (fill)" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const d = n.addFolder({ title: "Analysis Inputs" });
    d.addBinding(e.supports, "val", { label: "Supports" }), d.addBinding(e.loads, "val", { label: "Loads" }), d.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), d.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const d = n.addFolder({ title: "Analysis Outputs" });
    d.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), d.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), d.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), d.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), d.addBinding(e.deformedShape, "val", { label: "Deformed shape" });
  }
  l && n.addBinding(e.solids, "val", { label: "Solids" });
  const i = n.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), c = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), r = () => {
    const d = window.__hekatanClipApply;
    typeof d == "function" && d();
  };
  return i.addBinding(c, "enableX", { label: "Cortar X" }).on("change", r), i.addBinding(c, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", r), i.addBinding(c, "invertX", { label: "  invertir X" }).on("change", r), i.addBinding(c, "enableY", { label: "Cortar Y" }).on("change", r), i.addBinding(c, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", r), i.addBinding(c, "invertY", { label: "  invertir Y" }).on("change", r), i.addBinding(c, "enableZ", { label: "Cortar Z" }).on("change", r), i.addBinding(c, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", r), i.addBinding(c, "invertZ", { label: "  invertir Z" }).on("change", r), o;
}
function ct(e) {
  return { gridSize: F.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: F.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: F.state((e == null ? void 0 : e.nodes) ?? true), elements: F.state((e == null ? void 0 : e.elements) ?? true), edges: F.state((e == null ? void 0 : e.edges) ?? true), faces: F.state((e == null ? void 0 : e.faces) ?? true), elemColumns: F.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: F.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: F.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: F.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: F.state((e == null ? void 0 : e.orientations) ?? false), sections: F.state((e == null ? void 0 : e.sections) ?? true), secColumns: F.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: F.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: F.state((e == null ? void 0 : e.secFloor) ?? -1), supports: F.state((e == null ? void 0 : e.supports) ?? true), loads: F.state((e == null ? void 0 : e.loads) ?? false), deformedShape: F.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: F.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: F.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: F.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: F.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: F.state((e == null ? void 0 : e.flipAxes) ?? false), solids: F.state((e == null ? void 0 : e.solids) ?? true), custom3D: F.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: F.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: F.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: F.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function dt(e, t, l) {
  const o = te(), n = new de(new N(), new ue({ color: o.nodePoint }));
  return me((i, c) => {
    n.material.color.setHex(c.nodePoint);
  }), n.frustumCulled = false, F.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new K(t.val.flat(), 3));
  }), F.derive(() => {
    l.val;
    const i = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = i * l.rawVal);
  }), F.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function ut(e, t, l) {
  const o = te(), n = new q(), i = new _e(new N(), new oe({ color: o.elementLine }));
  me((X, T) => {
    i.material.color.setHex(T.elementLine);
  }), i.frustumCulled = false, i.renderOrder = 2, n.add(i);
  const c = new J({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: j, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), r = new O(new N(), c);
  r.frustumCulled = false, n.add(r);
  let d = new G(o.shellWall), v = new G(o.shellSlab), x = new G(o.shellTri);
  me((X, T) => {
    d = new G(T.shellWall), v = new G(T.shellSlab), x = new G(T.shellTri), c.opacity = T.shellOpacity, c.needsUpdate = true;
  });
  function f(X, T) {
    const P = Math.abs(T[0] - X[0]), L = Math.abs(T[1] - X[1]), h = Math.abs(T[2] - X[2]);
    return h > P && h > L || L > P && L > h;
  }
  return F.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const X = t.elemColumns.rawVal, T = t.elemBeams.rawVal, P = l.val, L = ((_a = e.elements) == null ? void 0 : _a.val) || [], h = L.filter((E) => {
      if (E.length !== 2) return true;
      const m = P[E[0]], M = P[E[1]];
      if (!m || !M) return true;
      const w = f(m, M);
      return !(w && !X || !w && !T);
    }).map((E) => pt(E).map((m) => [...P[m[0]], ...P[m[1]]]).flat()).flat();
    i.geometry.setAttribute("position", new K(h, 3));
    const _ = [], Z = [];
    function z(E, m, M, w) {
      const s = [m[0] - E[0], m[1] - E[1], m[2] - E[2]], u = [w[0] - E[0], w[1] - E[1], w[2] - E[2]], b = s[1] * u[2] - s[2] * u[1], p = s[2] * u[0] - s[0] * u[2], g = s[0] * u[1] - s[1] * u[0], S = Math.sqrt(b * b + p * p + g * g);
      return S < 1e-12 ? false : Math.abs(g / S) < 0.5;
    }
    for (const E of L) if (E.length === 3) {
      const [m, M, w] = E;
      if (P[m] && P[M] && P[w]) {
        _.push(...P[m], ...P[M], ...P[w]);
        for (let s = 0; s < 3; s++) Z.push(x.r, x.g, x.b);
      }
    } else if (E.length === 4) {
      const [m, M, w, s] = E;
      if (P[m] && P[M] && P[w] && P[s]) {
        const u = z(P[m], P[M], P[w], P[s]) ? d : v;
        _.push(...P[m], ...P[M], ...P[w]), _.push(...P[m], ...P[w], ...P[s]);
        for (let b = 0; b < 6; b++) Z.push(u.r, u.g, u.b);
      }
    }
    _.length > 0 ? (r.geometry.dispose(), r.geometry = new N(), r.geometry.setAttribute("position", new K(_, 3)), r.geometry.setAttribute("color", new K(Z, 3)), r.geometry.computeVertexNormals(), r.visible = t.faces ? t.faces.rawVal : true) : r.visible = false;
  }), F.derive(() => {
    n.visible = t.elements.val;
  }), F.derive(() => {
    t.edges && (i.visible = t.edges.val);
  }), F.derive(() => {
    t.faces && r.geometry.attributes.position && (r.visible = t.faces.val);
  }), n;
}
function pt(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let l = 0; l < e.length; l++) t.push([e[l], e[(l + 1) % e.length]]);
  return t;
}
function Ie(e) {
  const t = te(), l = new De(e, 20, t.grid, t.grid);
  return l.position.set(0.5 * e, 0.5 * e, 0), l.rotateX(Math.PI / 2), l;
}
function ht(e, t, l, o) {
  const n = new q(), i = new $e(0.5, 0.5, 0.5), c = new J({ color: 10166822 });
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const r = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((d, v) => {
      const x = l.val[v];
      if (!x) return;
      const f = new O(i, c);
      f.position.set(...x);
      const X = r * o.rawVal;
      f.scale.set(X, X, X), n.add(f);
    });
  }), F.derive(() => {
    if (o.val, !t.supports.rawVal) return;
    const d = 0.05 * t.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((v) => v.scale.set(d, d, d));
  }), F.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function mt(e, t, l, o) {
  const n = new q();
  n.name = "loadsGroup";
  function i(c) {
    if (c.length < 2) return 0.12 * t.gridSize.rawVal;
    const r = [1 / 0, 1 / 0, 1 / 0], d = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of c) for (let f = 0; f < 3; f++) r[f] = Math.min(r[f], x[f]), d[f] = Math.max(d[f], x[f]);
    return 0.08 * Math.max(d[0] - r[0], d[1] - r[1], d[2] - r[2], 0.1);
  }
  return F.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const c = l.val, r = i(c);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((d, v) => {
      const x = c[v];
      if (!x) return;
      const f = new I(...d.slice(0, 3));
      if (f.lengthSq() < 1e-30) return;
      f.normalize();
      const X = new ne(f, new I(...x), 1, 15637248, 0.3, 0.3), T = r * o.rawVal;
      X.scale.set(T, T, T), n.add(X);
    });
  }), F.derive(() => {
    if (o.val, !t.loads.rawVal) return;
    const r = i(l.rawVal) * o.rawVal;
    n.children.forEach((d) => d.scale.set(r, r, r));
  }), F.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function ft(e, t, l) {
  const o = new q();
  return F.derive(() => {
    if (!e.nodesIndexes.val) return;
    o.children.forEach((i) => i.dispose()), o.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((i, c) => {
      const r = new H(`${c}`);
      r.position.set(...i), r.updateScale(n * l.rawVal), o.add(r);
    });
  }), F.derive(() => {
    if (l.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    o.children.forEach((i) => i.updateScale(n * l.rawVal));
  }), F.derive(() => {
    o.visible = e.nodesIndexes.val;
  }), o;
}
function wt(e, t, l, o) {
  const n = new q();
  return F.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const i = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((c, r) => {
      const d = new H(`${r}`, void 0, "#001219");
      d.position.set(...vt(c.map((v) => l.rawVal[v]))), d.updateScale(i * o.rawVal), n.add(d);
    });
  }), F.derive(() => {
    if (o.val, !t.elementsIndexes.rawVal) return;
    const i = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(i * o.rawVal));
  }), F.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function vt(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = e.length;
  return [t[0] / l, t[1] / l, t[2] / l];
}
function xt(e, t) {
  const l = new q(), o = 0.05 * e * 1, n = te(), i = new H("X", "red", "transparent"), c = new H(t ? "Z" : "Y", "green", "transparent"), r = new H(t ? "Y" : "Z", "blue", "transparent"), d = new ne(new I(1, 0, 0), new I(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), v = new ne(new I(0, 1, 0), new I(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), x = new ne(new I(0, 0, 1), new I(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return i.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), r.position.set(0, 0, 1.3 * o), i.updateScale(0.4 * o), c.updateScale(0.4 * o), r.updateScale(0.4 * o), d.scale.set(o, o, o), v.scale.set(o, o, o), x.scale.set(o, o, o), l.add(d, v, x, i, c, r), l;
}
function Ve(e, t) {
  const l = new I(...e), n = new I(...t).clone().sub(l), i = n.length(), c = n.dot(new I(1, 0, 0)) / i, r = n.dot(new I(0, 1, 0)) / i, d = n.dot(new I(0, 0, 1)) / i, v = Math.sqrt(c ** 2 + r ** 2);
  let x = new ge().fromArray([[c, r, d], [-r / v, c / v, 0], [-c * d / v, -r * d / v, v]].flat());
  return d === 1 && (x = new ge().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), d === -1 && (x = new ge().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Le().setFromMatrix3(x);
}
function Fe(e, t) {
  return e == null ? void 0 : e.map((l, o) => (9 * l + t[o]) / 10);
}
function ie(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = e.length;
  return [t[0] / l, t[1] / l, t[2] / l];
}
function bt(e, t, l) {
  const o = ie([t, l]), n = ie([e, l]), i = ie([e, t]), c = new I(...o).sub(new I(...n)).normalize(), r = new I(...l).sub(new I(...i)).normalize(), d = c.clone().cross(r).normalize(), v = d.clone().cross(c).normalize();
  return new Le().makeBasis(c, v, d);
}
function gt(e, t, l, o) {
  const n = new q(), i = new N(), c = new oe({ vertexColors: true }), r = [0, 0, 0], d = [1, 0, 0], v = [0, 1, 0], x = [0, 0, 1];
  i.setAttribute("position", new K([...r, ...d, ...r, ...v, ...r, ...x], 3));
  const f = [255, 0, 0], X = [0, 255, 0], T = [0, 0, 255];
  return i.setAttribute("color", new K([...f, ...f, ...X, ...X, ...T, ...T], 3)), F.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((P) => {
      const L = new _e(i, c), h = l.rawVal[P[0]], _ = l.rawVal[P[1]];
      if (P.length === 2 && (L.position.set(...Fe(h, _)), L.rotation.setFromRotationMatrix(Ve(h, _))), P.length === 3) {
        const E = l.rawVal[P[2]];
        L.position.set(...ie([h, _, E])), L.rotation.setFromRotationMatrix(bt(h, _, E));
      }
      const z = 0.05 * t.gridSize.rawVal * 0.75 * o.rawVal;
      L.scale.set(z, z, z), n.add(L);
    }));
  }), F.derive(() => {
    if (o.val, !t.orientations.rawVal) return;
    const L = 0.05 * t.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((h) => h.scale.set(L, L, L));
  }), F.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function yt(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), l = (e.h * 100).toFixed(0);
    return `${t}x${l}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Mt(e, t, l, o) {
  const n = new q();
  function i(m, M) {
    const w = m / 2, s = M / 2, u = new Float32Array([0, -w, -s, 0, w, -s, 0, w, s, 0, -w, -s, 0, w, s, 0, -w, s]), b = new N();
    b.setAttribute("position", new $(u, 3));
    const p = new Float32Array([0, -w, -s, 0, w, -s, 0, w, s, 0, -w, s, 0, -w, -s]), g = new N();
    return g.setAttribute("position", new $(p, 3)), { fill: b, outline: g };
  }
  function c(m, M = 24) {
    const w = m / 2, s = new Float32Array(M * 9);
    for (let g = 0; g < M; g++) {
      const S = g / M * Math.PI * 2, A = (g + 1) / M * Math.PI * 2;
      s[g * 9] = 0, s[g * 9 + 1] = 0, s[g * 9 + 2] = 0, s[g * 9 + 3] = 0, s[g * 9 + 4] = w * Math.cos(S), s[g * 9 + 5] = w * Math.sin(S), s[g * 9 + 6] = 0, s[g * 9 + 7] = w * Math.cos(A), s[g * 9 + 8] = w * Math.sin(A);
    }
    const u = new N();
    u.setAttribute("position", new $(s, 3));
    const b = new Float32Array((M + 1) * 3);
    for (let g = 0; g <= M; g++) {
      const S = g / M * Math.PI * 2;
      b[g * 3] = 0, b[g * 3 + 1] = w * Math.cos(S), b[g * 3 + 2] = w * Math.sin(S);
    }
    const p = new N();
    return p.setAttribute("position", new $(b, 3)), { fill: u, outline: p };
  }
  function r(m, M, w, s) {
    const u = w ?? M * 0.08, b = s ?? m * 0.07, p = m / 2, g = M / 2, S = g - u, A = b / 2, R = [];
    function a(Y, B, k, W) {
      R.push(0, Y, B, 0, k, B, 0, k, W, 0, Y, B, 0, k, W, 0, Y, W);
    }
    a(-p, -g, p, -S), a(-A, -S, A, S), a(-p, S, p, g);
    const y = new N();
    y.setAttribute("position", new $(new Float32Array(R), 3));
    const V = new Float32Array([0, -p, -g, 0, p, -g, 0, p, -S, 0, A, -S, 0, A, S, 0, p, S, 0, p, g, 0, -p, g, 0, -p, S, 0, -A, S, 0, -A, -S, 0, -p, -S, 0, -p, -g]), C = new N();
    return C.setAttribute("position", new $(V, 3)), { fill: y, outline: C };
  }
  function d(m, M, w) {
    const s = m / 2, u = M / 2, b = s - w, p = u - w, g = [];
    function S(y, V, C, Y) {
      g.push(0, y, V, 0, C, V, 0, C, Y, 0, y, V, 0, C, Y, 0, y, Y);
    }
    S(-s, -u, s, -p), S(-s, p, s, u), S(-s, -p, -b, p), S(b, -p, s, p);
    const A = new N();
    A.setAttribute("position", new $(new Float32Array(g), 3));
    const R = new Float32Array([0, -s, -u, 0, s, -u, 0, s, -u, 0, s, u, 0, s, u, 0, -s, u, 0, -s, u, 0, -s, -u, 0, -b, -p, 0, b, -p, 0, b, -p, 0, b, p, 0, b, p, 0, -b, p, 0, -b, p, 0, -b, -p]), a = new N();
    return a.setAttribute("position", new $(R, 3)), { fill: A, outline: a };
  }
  function v(m, M, w) {
    const s = m / 2, u = M / 2, b = s - w, p = u - w, g = new N(), S = new Float32Array([0, -b, -p, 0, b, -p, 0, b, p, 0, -b, -p, 0, b, p, 0, -b, p]);
    g.setAttribute("position", new $(S, 3));
    const A = [];
    function R(C, Y, B, k) {
      A.push(0, C, Y, 0, B, Y, 0, B, k, 0, C, Y, 0, B, k, 0, C, k);
    }
    R(-s, -u, s, -p), R(-s, p, s, u), R(-s, -p, -b, p), R(b, -p, s, p);
    const a = new N();
    a.setAttribute("position", new $(new Float32Array(A), 3));
    const y = new Float32Array([0, -s, -u, 0, s, -u, 0, s, -u, 0, s, u, 0, s, u, 0, -s, u, 0, -s, u, 0, -s, -u, 0, -b, -p, 0, b, -p, 0, b, -p, 0, b, p, 0, b, p, 0, -b, p, 0, -b, p, 0, -b, -p]), V = new N();
    return V.setAttribute("position", new $(y, 3)), { concFill: g, steelFillGeom: a, outline: V };
  }
  function x(m, M, w) {
    const s = [], u = [[0, -m / 2, -M / 2], [0, -m / 2 + w, -M / 2], [0, -m / 2 + w, M / 2 - w], [0, m / 2, M / 2 - w], [0, m / 2, M / 2], [0, -m / 2, M / 2]], b = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of b) s.push(...u[A]);
    const p = new N();
    p.setAttribute("position", new $(new Float32Array(s), 3));
    const g = [];
    for (let A = 0; A < u.length; A++) {
      const R = (A + 1) % u.length;
      g.push(...u[A], ...u[R]);
    }
    const S = new N();
    return S.setAttribute("position", new $(new Float32Array(g), 3)), { fill: p, outline: S };
  }
  function f(m, M, w, s) {
    const u = s / 2, b = [], p = [[0, -m - u, -M / 2], [0, -w - u, -M / 2], [0, -w - u, M / 2 - w], [0, -u, M / 2 - w], [0, -u, M / 2], [0, -m - u, M / 2]], g = [[0, u, -M / 2], [0, u + w, -M / 2], [0, u + w, M / 2 - w], [0, m + u, M / 2 - w], [0, m + u, M / 2], [0, u, M / 2]], S = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const y of S) b.push(...p[y]);
    for (const y of S) b.push(...g[y]);
    const A = new N();
    A.setAttribute("position", new $(new Float32Array(b), 3));
    const R = [];
    for (const y of [p, g]) for (let V = 0; V < y.length; V++) {
      const C = (V + 1) % y.length;
      R.push(...y[V], ...y[C]);
    }
    const a = new N();
    return a.setAttribute("position", new $(new Float32Array(R), 3)), { fill: A, outline: a };
  }
  function X(m, M, w, s) {
    const u = M / 2, b = m, p = [[0, -b, -u], [0, -b, -u + w], [0, -s, -u + w], [0, -s, u - w], [0, -b, u - w], [0, -b, u], [0, 0, u], [0, 0, -u]], g = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], S = [];
    for (const y of g) S.push(...p[y]);
    const A = new N();
    A.setAttribute("position", new $(new Float32Array(S), 3));
    const R = [];
    for (let y = 0; y < p.length; y++) {
      const V = (y + 1) % p.length;
      R.push(...p[y], ...p[V]);
    }
    const a = new N();
    return a.setAttribute("position", new $(new Float32Array(R), 3)), { fill: A, outline: a };
  }
  function T(m, M, w, s, u) {
    const b = M / 2, p = u / 2, g = [], S = [[0, -m, -b], [0, -m, -b + w], [0, -p - s, -b + w], [0, -p - s, b - w], [0, -m, b - w], [0, -m, b], [0, -p, b], [0, -p, -b]], A = S.map((C) => [C[0], -C[1], C[2]]), R = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const C of R) g.push(...S[C]);
    for (const C of R) g.push(...A[C]);
    const a = new N();
    a.setAttribute("position", new $(new Float32Array(g), 3));
    const y = [];
    for (const C of [S, A]) for (let Y = 0; Y < C.length; Y++) {
      const B = (Y + 1) % C.length;
      y.push(...C[Y], ...C[B]);
    }
    const V = new N();
    return V.setAttribute("position", new $(new Float32Array(y), 3)), { fill: a, outline: V };
  }
  function P(m, M, w, s) {
    const u = m / 2, b = M / 2, p = s / 2, g = [[0, -p, -b], [0, p, -b], [0, p, b - w], [0, u, b - w], [0, u, b], [0, -u, b], [0, -u, b - w], [0, -p, b - w]], S = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], A = [];
    for (const V of S) A.push(...g[V]);
    const R = new N();
    R.setAttribute("position", new $(new Float32Array(A), 3));
    const a = [];
    for (let V = 0; V < g.length; V++) {
      const C = (V + 1) % g.length;
      a.push(...g[V], ...g[C]);
    }
    const y = new N();
    return y.setAttribute("position", new $(new Float32Array(a), 3)), { fill: R, outline: y };
  }
  function L(m, M, w = 24) {
    const s = m / 2, u = s - M, b = [];
    for (let A = 0; A < w; A++) {
      const R = A / w * Math.PI * 2, a = (A + 1) / w * Math.PI * 2, y = Math.cos(R), V = Math.sin(R), C = Math.cos(a), Y = Math.sin(a);
      b.push(0, s * y, s * V, 0, s * C, s * Y, 0, u * C, u * Y), b.push(0, s * y, s * V, 0, u * C, u * Y, 0, u * y, u * V);
    }
    const p = new N();
    p.setAttribute("position", new $(new Float32Array(b), 3));
    const g = [];
    for (let A = 0; A < w; A++) {
      const R = A / w * Math.PI * 2, a = (A + 1) / w * Math.PI * 2;
      g.push(0, s * Math.cos(R), s * Math.sin(R), 0, s * Math.cos(a), s * Math.sin(a)), g.push(0, u * Math.cos(R), u * Math.sin(R), 0, u * Math.cos(a), u * Math.sin(a));
    }
    const S = new N();
    return S.setAttribute("position", new $(new Float32Array(g), 3)), { fill: p, outline: S };
  }
  const h = new J({ color: 52479, transparent: true, opacity: 0.35, side: j, depthWrite: false }), _ = new oe({ color: 52479 }), Z = new J({ color: 16750848, transparent: true, opacity: 0.4, side: j, depthWrite: false }), z = new oe({ color: 16750848 });
  function E(m, M) {
    const w = Math.abs(M[0] - m[0]), s = Math.abs(M[1] - m[1]), u = Math.abs(M[2] - m[2]);
    return u > w && u > s || s > w && s > u;
  }
  return F.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const m = t.secColumns.rawVal, M = t.secBeams.rawVal;
    if (!m && !M) {
      n.children.forEach((p) => {
        p instanceof H && p.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((p) => {
      p instanceof H && p.dispose();
    }), n.clear();
    const w = (_a = e.elements) == null ? void 0 : _a.val, s = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!w || !s) return;
    const u = s.sectionShapes, b = t.secFloor.rawVal;
    w.forEach((p, g) => {
      if (p.length !== 2) return;
      const S = l.rawVal[p[0]], A = l.rawVal[p[1]];
      if (!S || !A) return;
      const R = E(S, A);
      if (R && !m || !R && !M) return;
      if (b >= 0) {
        const Y = Math.min(S[1], A[1]);
        Math.max(S[1], A[1]);
        const B = t.gridSize.rawVal || 3;
        if (Math.floor(Y / B + 0.01) !== b) return;
      }
      const a = u == null ? void 0 : u.get(g);
      if (!a) return;
      const y = [(S[0] + A[0]) / 2, (S[1] + A[1]) / 2, (S[2] + A[2]) / 2], V = Ve(S, A);
      if (a.type === "CFT") {
        const Y = v(a.b, a.h, a.tw ?? a.b * 0.05), B = new O(Y.concFill, h);
        B.position.set(...y), B.rotation.setFromRotationMatrix(V), n.add(B);
        const k = new O(Y.steelFillGeom, Z);
        k.position.set(...y), k.rotation.setFromRotationMatrix(V), n.add(k);
        const W = new se(Y.outline, z);
        W.position.set(...y), W.rotation.setFromRotationMatrix(V), n.add(W);
      } else {
        let Y, B, k;
        switch (a.type) {
          case "rect":
            Y = i(a.b, a.h), B = h, k = _;
            break;
          case "circ":
            Y = c(a.d), B = h, k = _;
            break;
          case "I":
            Y = r(a.b, a.h, a.tf, a.tw), B = Z, k = z;
            break;
          case "HSS":
            Y = d(a.b, a.h, a.tw ?? a.b * 0.05), B = Z, k = z;
            break;
          case "CFT":
            Y = v(a.b, a.h, a.tw ?? a.b * 0.05), B = Z, k = z;
            break;
          case "L":
            Y = x(a.b ?? a.h, a.h, a.t ?? a.tw ?? 3e-3), B = Z, k = z;
            break;
          case "2L":
            Y = f(a.b ?? a.h, a.h, a.t ?? a.tw ?? 3e-3, a.dis ?? 0.01), B = Z, k = z;
            break;
          case "C":
          case "coldC":
            Y = X(a.b, a.h, a.tf ?? a.t ?? 3e-3, a.tw ?? a.t ?? 3e-3), B = Z, k = z;
            break;
          case "2C":
            Y = T(a.b, a.h, a.tf ?? 5e-3, a.tw ?? 5e-3, a.dis ?? 0.01), B = Z, k = z;
            break;
          case "T":
            Y = P(a.b, a.h, a.tf ?? 0.01, a.tw ?? 6e-3), B = Z, k = z;
            break;
          case "pipe":
            Y = L(a.d, a.tw ?? a.d * 0.05), B = Z, k = z;
            break;
          default:
            return;
        }
        const W = new O(Y.fill, B);
        W.position.set(...y), W.rotation.setFromRotationMatrix(V), n.add(W);
        const D = new se(Y.outline, k);
        D.position.set(...y), D.rotation.setFromRotationMatrix(V), n.add(D);
      }
      const C = yt(a);
      if (C) {
        const B = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(a.type) ? "#ff9900" : "#00ccff", k = new H(C, B, "transparent");
        k.position.set(y[0], y[1], y[2]);
        const W = 0.05 * t.gridSize.rawVal * 0.5;
        k.updateScale(W * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(k);
      }
    });
  }), o && F.derive(() => {
    if (o.val, !t.sections.rawVal) return;
    const m = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((M) => {
      M instanceof H && M.updateScale(m * o.rawVal);
    });
  }), F.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class ce extends q {
  constructor(t, l, o, n, i, c, r) {
    super();
    const d = new pe().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), v = d.getPoints(), x = new N().setFromPoints(v);
    this.lines = new se(x, new oe({ color: te().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), r && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const f = new he(d), X = new J({ color: c[1] > 0 ? 24435 : 11411474, side: j });
    this.mesh = new O(f, X), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), r && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new H(`${i[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = ie([t, l]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Re extends q {
  constructor(t, l, o, n, i, c, r) {
    super();
    const d = i[0] * o / (i[0] + i[1]), v = i[0] * i[1] > 0;
    if (this.text = new H(`${i[0].toFixed(4)}`), this.text2 = new H(`${(i[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = Fe(t, l), this.text2Position = Fe(l, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), v) {
      const x = new pe().moveTo(0, 0).lineTo(0, c[0]).lineTo(d, 0).lineTo(0, 0), f = new pe().moveTo(d, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(d, 0), X = x.getPoints(), T = f.getPoints(), P = new N().setFromPoints(X), L = new N().setFromPoints(T), h = new oe({ color: te().resultOutline });
      this.lines = new se(P, h), this.lines2 = new se(L, h), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), r && this.lines.rotateX(Math.PI / 2), r && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const _ = new he(x), Z = new he(f), z = new J({ color: c[0] > 0 ? 24435 : 11411474, side: j }), E = new J({ color: -c[1] > 0 ? 24435 : 11411474, side: j });
      this.mesh = new O(_, z), this.mesh2 = new O(Z, E), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), r && this.mesh.rotateX(Math.PI / 2), r && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const x = new pe().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), f = x.getPoints(), X = new N().setFromPoints(f);
      this.lines = new se(X, new oe({ color: te().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), r && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const T = new he(x), P = new J({ color: c[0] > 0 ? 24435 : 11411474, side: j });
      this.mesh = new O(T, P), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), r && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(t) {
    var _a, _b;
    this.lines.scale.set(1, t * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text2.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * t), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    var _a, _b, _c, _d, _e2, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e2 = this.mesh2) == null ? void 0 : _e2.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var Ne = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Ne || {});
function St(e, t, l, o) {
  const n = new q(), i = { normals: ce, shearsY: ce, shearsZ: ce, torsions: ce, bendingsY: Re, bendingsZ: Re };
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, l.val, t.frameResults.val == "none") return;
    n.children.forEach((r) => r.dispose()), n.clear();
    const c = Ne[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((r, d) => {
      var _a2, _b2;
      const v = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[d]) ?? [0, 1], x = l.rawVal[v[0]], f = l.rawVal[v[1]], X = new I(...f).distanceTo(new I(...x)), T = Ft((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), P = r == null ? void 0 : r.map((Z) => Z / (T === 0 ? 1 : T)), L = Ve(x, f), h = new i[c](x, f, X, L, r ?? [0, 0], P ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), _ = 0.05 * t.gridSize.rawVal;
      h.updateScale(_ * o.rawVal), n.add(h);
    });
  }), F.derive(() => {
    if (o.val, t.frameResults.rawVal == "none") return;
    const c = 0.05 * t.gridSize.val;
    n.children.forEach((r) => r.updateScale(c * o.rawVal));
  }), F.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function Ft(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((l) => {
    const o = Math.max(...l ?? [0, 0]);
    o > t && (t = o);
  }), t;
}
class Ct extends q {
  constructor(t, l, o) {
    super();
    const n = l === Ae.reactions;
    o[0] && (this.xText1 = new H(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new H(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new H(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new H(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new H(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new H(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new ne(new I(1, 0, 0), new I(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new ne(new I(0, 1, 0), new I(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new ne(new I(0, 0, 1), new I(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(t) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(t, t, t), (_b = this.yArrow) == null ? void 0 : _b.scale.set(t, t, t), (_c = this.zArrow) == null ? void 0 : _c.scale.set(t, t, t), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * t, 0, 0), (_e2 = this.xText2) == null ? void 0 : _e2.position.set(1.3 * t, 0, 0.5 * t), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * t, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * t, 0.5 * t), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * t), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * t + 0.5 * t), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * t), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * t), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * t), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * t), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * t), (_o = this.zText2) == null ? void 0 : _o.updateScale(0.4 * t);
  }
  dispose() {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e2 = this.xText2) == null ? void 0 : _e2.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var Ae = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Ae || {});
function Vt(e, t, l, o) {
  const n = new q();
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((r) => r.dispose()), n.clear();
    const i = Ae[t.nodeResults.rawVal], c = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[i]) == null ? void 0 : _b.forEach((r, d) => {
      const v = new Ct(l.rawVal[d], i, r ?? [0, 0, 0, 0, 0, 0]);
      v.updateScale(c * o.rawVal), n.add(v);
    });
  }), F.derive(() => {
    if (o.val, t.nodeResults.rawVal == "none") return;
    const i = 0.05 * t.gridSize.val;
    n.children.forEach((c) => c.updateScale(i * o.rawVal));
  }), F.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function At({ drawingObj: e, gridObj: t, scene: l, camera: o, controls: n, gridSize: i, derivedDisplayScale: c, rendererElm: r, viewerRender: d }) {
  const v = new He(), x = new Ue(), f = new O(new Ge(i, i), new J({ side: j })), X = new de(new N(), new ue()), T = new de(new N(), new ue({ color: "gray" })), P = new de(new N(), new ue({ color: "orange", size: 0.8 }));
  l.add(P), X.geometry.setAttribute("position", new K(e.points.rawVal.flat(), 3)), X.geometry.computeBoundingSphere(), X.frustumCulled = false, T.frustumCulled = false, l.add(T), f.position.set(0.5 * i, 0.5 * i, 0), f.rotateX(Math.PI / 2), f.geometry.rotateX(Math.PI / 2), f.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), F.derive(() => {
    e.gridTarget && (Pt(t, { position: new I(...e.gridTarget.val.position), quaternion: new qe().setFromEuler(new ze(...e.gridTarget.val.rotation)) }, d), f.position.set(...e.gridTarget.val.position), f.quaternion.setFromEuler(new ze(...e.gridTarget.val.rotation)), f.updateMatrixWorld());
  }), F.derive(() => {
    X.geometry.setAttribute("position", new K(e.points.val.flat(), 3)), X.geometry.computeBoundingSphere();
  }), F.derive(() => {
    const z = 0.05 * i * 0.5 * c.val;
    T.material.size = z, v.params.Points.threshold = 0.4 * z;
  }), F.derive(() => {
    var _a;
    const z = e.points.val ?? [], m = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], M = [];
    for (const s of m) {
      const [u, b, p] = z[s];
      M.push(u, b, p);
    }
    const w = new N();
    w.setAttribute("position", new K(M, 3)), P.geometry.dispose(), P.geometry = w;
  });
  let L = false, h = 0;
  r.addEventListener("pointerdown", () => {
    L = true;
  }), r.addEventListener("pointerup", () => {
    L = false;
  }), r.addEventListener("pointermove", () => {
    L && h++;
  }), r.addEventListener("click", (z) => {
    if (h > 5) {
      h = 0;
      return;
    }
    h = 0, x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    const E = v.intersectObject(f);
    if (E.length) {
      let m = E[0].point;
      (z.ctrlKey || z.metaKey) && (m = new I(Math.round(E[0].point.x), Math.round(E[0].point.y), Math.round(E[0].point.z))), e.points.val = [...e.points.rawVal, m.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), r.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), r.addEventListener("pointermove", (z) => {
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    const E = v.intersectObject(f);
    if (T.geometry.deleteAttribute("position"), E.length) {
      let m = E[0].point;
      (z.ctrlKey || z.metaKey) && (m = new I(Math.round(E[0].point.x), Math.round(E[0].point.y), Math.round(E[0].point.z))), T.geometry.setAttribute("position", new K(m.toArray(), 3));
    }
    d();
  }), r.addEventListener("pointermove", (z) => {
    var _a;
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    let E = false;
    const m = v.intersectObject(X), M = v.intersectObject(f);
    if (m.length && M.length) {
      const w = new I(...e.points.rawVal[m[0].index]), s = new I(...M[0].point), u = w.sub(s), b = (_a = M[0].face) == null ? void 0 : _a.normal;
      b.transformDirection(f.matrixWorld), Math.abs(u.dot(b)) < 1e-4 && (E = true);
    }
    T.visible = !E;
  });
  let _ = false, Z;
  r.addEventListener("pointermove", (z) => {
    var _a;
    if (!h) return;
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    let E = false;
    const m = v.intersectObject(X), M = v.intersectObject(f);
    if (m.length && M.length) {
      const s = new I(...e.points.rawVal[m[0].index]), u = new I(...M[0].point), b = s.sub(u), p = (_a = M[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(f.matrixWorld), Math.abs(b.dot(p)) < 1e-4 && (E = true);
    }
    if (E && h < 5 && (_ = true, n.enabled = false, Z = m[0].index), !_ || h % 2 !== 0) return;
    const w = [...e.points.rawVal];
    if (Z !== void 0) {
      let s = M[0].point;
      (z.ctrlKey || z.metaKey) && (s = new I(Math.round(s.x), Math.round(s.y), Math.round(s.z))), w[Z] = s.toArray();
    }
    e.points.val = w;
  }), r.addEventListener("pointerup", () => {
    n.enabled = true, _ = false;
  }), r.addEventListener("contextmenu", (z) => {
    var _a;
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    let E = false;
    const m = v.intersectObject(X), M = v.intersectObject(f);
    if (m.length && M.length) {
      const u = new I(...e.points.rawVal[m[0].index]), b = new I(...M[0].point), p = u.sub(b), g = (_a = M[0].face) == null ? void 0 : _a.normal;
      g.transformDirection(f.matrixWorld), Math.abs(p.dot(g)) < 1e-4 && (E = true);
    }
    if (!E) return;
    const w = [...e.points.rawVal];
    if (w.splice(m[0].index, 1), e.points.val = w, !e.polylines) return;
    const s = e.polylines.rawVal.map((u) => u.filter((b) => b !== m[0].index)).map((u) => u.map((b) => b > m[0].index ? b - 1 : b)).filter((u) => u.length);
    s.push([]), e.polylines.val = s;
  });
}
function Pt(e, t, l) {
  const i = Math.round(14.999999999999998), c = { position: e.position.clone(), quaternion: e.quaternion.clone() }, r = setInterval(v, 1e3 / 30);
  let d = 0;
  function v() {
    d++;
    const x = d / i;
    e.position.lerpVectors(c.position, t.position, x), e.quaternion.slerpQuaternions(c.quaternion, t.quaternion, x), l && l(), d == i && clearInterval(r);
  }
}
class We {
  constructor(t, l = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(t, l);
  }
  set(t) {
    return t.isLut === true && this.copy(t), this;
  }
  setMin(t) {
    return this.minV = t, this;
  }
  setMax(t) {
    return this.maxV = t, this;
  }
  setColorMap(t, l = 32) {
    this.map = Me[t] || Me.rainbow, this.n = l;
    const o = 1 / this.n, n = new G(), i = new G();
    this.lut.length = 0, this.lut.push(new G(this.map[0][1]));
    for (let c = 1; c < l; c++) {
      const r = c * o;
      for (let d = 0; d < this.map.length - 1; d++) if (r > this.map[d][0] && r <= this.map[d + 1][0]) {
        const v = this.map[d][0], x = this.map[d + 1][0];
        n.setHex(this.map[d][1], le), i.setHex(this.map[d + 1][1], le);
        const f = new G().lerpColors(n, i, (r - v) / (x - v));
        this.lut.push(f);
      }
    }
    return this.lut.push(new G(this.map[this.map.length - 1][1])), this;
  }
  copy(t) {
    return this.lut = t.lut, this.map = t.map, this.n = t.n, this.minV = t.minV, this.maxV = t.maxV, this;
  }
  getColor(t) {
    t = Ke.clamp(t, this.minV, this.maxV), t = (t - this.minV) / (this.maxV - this.minV);
    const l = Math.round(t * this.n);
    return this.lut[l];
  }
  addColorMap(t, l) {
    return Me[t] = l, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const l = t.getContext("2d", { alpha: false }), o = l.getImageData(0, 0, 1, this.n), n = o.data;
    let i = 0;
    const c = 1 / this.n, r = new G(), d = new G(), v = new G();
    for (let x = 1; x >= 0; x -= c) for (let f = this.map.length - 1; f >= 0; f--) if (x < this.map[f][0] && x >= this.map[f - 1][0]) {
      const X = this.map[f - 1][0], T = this.map[f][0];
      r.setHex(this.map[f - 1][1], le), d.setHex(this.map[f][1], le), v.lerpColors(r, d, (x - X) / (T - X)), n[i * 4] = Math.round(v.r * 255), n[i * 4 + 1] = Math.round(v.g * 255), n[i * 4 + 2] = Math.round(v.b * 255), n[i * 4 + 3] = 255, i += 1;
    }
    return l.putImageData(o, 0, 0), t;
  }
}
const Me = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, ae = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Yt(e) {
  e = Math.max(0, Math.min(1, e));
  for (let l = 0; l < ae.length - 1; l++) {
    const [o, n, i, c] = ae[l], [r, d, v, x] = ae[l + 1];
    if (e <= r) {
      const f = (e - o) / (r - o);
      return [n + (d - n) * f, i + (v - i) * f, c + (x - c) * f];
    }
  }
  const t = ae[ae.length - 1];
  return [t[1], t[2], t[3]];
}
function zt() {
  const t = new Uint8Array(1024);
  for (let o = 0; o < 256; o++) {
    const n = o / 255, [i, c, r] = Yt(n);
    t[o * 4 + 0] = i, t[o * 4 + 1] = c, t[o * 4 + 2] = r, t[o * 4 + 3] = 255;
  }
  const l = new Je(t, 256, 1, je);
  return l.minFilter = Xe, l.magFilter = Xe, l.wrapS = Te, l.wrapT = Te, l.needsUpdate = true, l;
}
function Xt(e, t, l) {
  new We();
  const o = zt(), n = new Oe({ uniforms: { cmap: { value: o }, ambient: { value: 0.95 } }, vertexShader: `
      #include <common>
      #include <clipping_planes_pars_vertex>
      attribute float scalar;
      varying float vScalar;
      void main() {
        vScalar = scalar;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }
    `, fragmentShader: `
      #include <common>
      #include <clipping_planes_pars_fragment>
      uniform sampler2D cmap;
      uniform float ambient;
      varying float vScalar;
      void main() {
        #include <clipping_planes_fragment>
        // Si NaN (vScalar < -0.5 sentinel), gris neutro
        if (vScalar < -0.5) {
          gl_FragColor = vec4(0.5, 0.5, 0.5, 1.0);
          return;
        }
        vec3 color = texture2D(cmap, vec2(clamp(vScalar, 0.0, 1.0), 0.5)).rgb;
        gl_FragColor = vec4(color * ambient, 1.0);
      }
    `, side: j, transparent: false, clipping: true, depthWrite: true, depthTest: true }), i = new O(new N(), n);
  return i.renderOrder = -1, i.frustumCulled = false, F.derive(() => {
    i.geometry.setAttribute("position", new K(e.val.flat(), 3));
    const c = [];
    for (const h of t.val) h.length === 3 ? c.push(h[0], h[1], h[2]) : h.length === 4 && (c.push(h[0], h[1], h[2]), c.push(h[0], h[2], h[3]));
    i.geometry.setIndex(new Qe(c, 1));
    const r = l.val.filter((h) => Number.isFinite(h));
    let d, v;
    const x = Pe.val;
    if (x ? (v = x[0], d = x[1]) : (d = r.length ? Math.max(...r) : 1, v = r.length ? Math.min(...r) : 0, v >= 0 && d > 0 && (v = 0)), d === v) {
      const h = Math.max(Math.abs(d) * 1e-6, 1e-9);
      d += h, v -= h;
    }
    const f = x && x[0] > x[1], X = Math.min(v, d), T = Math.max(v, d), P = T - X, L = new Float32Array(l.val.length);
    for (let h = 0; h < l.val.length; h++) {
      const _ = l.val[h];
      if (!Number.isFinite(_)) {
        L[h] = -1;
        continue;
      }
      const z = ((f ? T + X - _ : _) - X) / P;
      L[h] = Math.max(0, Math.min(1, z));
    }
    i.geometry.setAttribute("scalar", new $(L, 1));
  }), i;
}
function Tt(e, t, l, o) {
  const n = Xt(l, e.elements, o);
  return F.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const Et = 6, Se = 10, Bt = 0.012;
function It(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Rt(e, t, l, o) {
  if (!l && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && l) {
    const i = l[e];
    if (i && i.has(t)) return i.get(t);
  }
  return null;
}
function Zt(e, t, l, o) {
  const n = new q(), i = new We();
  i.setColorMap("rainbow");
  const c = new G(), r = F.state([]);
  return F.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const d = l.val, v = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], x = It(t.frameResults.val);
    if (n.children.forEach((g) => {
      g.geometry && g.geometry.dispose(), g.material && g.material.dispose();
    }), n.clear(), !x || v.length === 0 || d.length === 0) {
      r.val = [];
      return;
    }
    const f = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, X = (_c = e.deformOutputs) == null ? void 0 : _c.val, T = [], P = [];
    for (let g = 0; g < v.length; g++) {
      if (v[g].length !== 2) continue;
      const A = Rt(x, g, f, X);
      A && (T.push(A[0], A[1]), P.push({ idx: g, vals: A }));
    }
    if (T.length === 0) {
      r.val = [];
      return;
    }
    const L = Math.min(...T), h = Math.max(...T);
    i.setMin(L), i.setMax(h), r.val = T;
    const _ = [1 / 0, 1 / 0, 1 / 0], Z = [-1 / 0, -1 / 0, -1 / 0];
    for (const g of d) for (let S = 0; S < 3; S++) _[S] = Math.min(_[S], g[S]), Z[S] = Math.max(Z[S], g[S]);
    const E = Math.max(Z[0] - _[0], Z[1] - _[1], Z[2] - _[2], 1) * Bt, m = [], M = [], w = [];
    let s = 0;
    for (const { idx: g, vals: S } of P) {
      const A = v[g], R = d[A[0]], a = d[A[1]];
      if (!R || !a) continue;
      const y = new I(a[0] - R[0], a[1] - R[1], a[2] - R[2]), V = y.length();
      if (V < 1e-10) continue;
      y.normalize();
      const C = Math.abs(y.y) < 0.99 ? new I(0, 1, 0) : new I(1, 0, 0), Y = new I().crossVectors(y, C).normalize(), B = new I().crossVectors(y, Y).normalize(), k = Se + 1, W = Et;
      for (let D = 0; D < k; D++) {
        const U = D / Se, Q = R[0] + y.x * V * U, ee = R[1] + y.y * V * U, fe = R[2] + y.z * V * U, we = S[0] + (S[1] - S[0]) * U, re = i.getColor(we) ?? new G(0, 0, 0);
        c.copy(re).convertSRGBToLinear();
        for (let ve = 0; ve < W; ve++) {
          const Ye = ve / W * Math.PI * 2, xe = Math.cos(Ye), be = Math.sin(Ye);
          m.push(Q + (Y.x * xe + B.x * be) * E, ee + (Y.y * xe + B.y * be) * E, fe + (Y.z * xe + B.z * be) * E), M.push(c.r, c.g, c.b);
        }
      }
      for (let D = 0; D < Se; D++) for (let U = 0; U < W; U++) {
        const Q = (U + 1) % W, ee = s + D * W + U, fe = s + D * W + Q, we = s + (D + 1) * W + U, re = s + (D + 1) * W + Q;
        w.push(ee, fe, re), w.push(ee, re, we);
      }
      s += k * W;
    }
    if (m.length === 0) return;
    const u = new N();
    u.setAttribute("position", new K(m, 3)), u.setAttribute("color", new K(M, 3)), u.setIndex(w), u.computeVertexNormals();
    const b = new J({ vertexColors: true, side: j }), p = new O(u, b);
    p.frustumCulled = false, n.add(p);
  }), n.__colorMapValues = r, n;
}
function Ze(e, t = 8) {
  const l = document.createElement("div");
  l.id = "legend";
  const o = document.createElement("div");
  o.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", l.appendChild(o), setTimeout(() => {
    F.derive(() => {
      o.textContent = Ce.val ? `[${Ce.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (d, v) => v / t).reverse();
  let i, c;
  n.forEach((d, v) => {
    i = document.createElement("div"), i.id = `marker-${v}`, i.className = "marker", i.style.marginTop = v == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, c = document.createElement("p"), c.id = `marker-text-${v}`, i.append(c), l.append(i);
  });
  const r = [];
  return l.querySelectorAll("p").forEach((d) => r.push(d)), setTimeout(() => {
    F.derive(() => {
      n.forEach((d, v) => {
        const x = r[v];
        x && (x.innerText = kt(e.val, d).toString());
      });
    });
  }), l;
}
function kt(e, t) {
  const l = Pe.val;
  if (l) return (l[0] + t * (l[1] - l[0])).toPrecision(3);
  const o = e.filter((c) => Number.isFinite(c));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const i = Math.max(...o);
  return n >= 0 && i > 0 && (n = 0), (n + t * (i - n)).toPrecision(3);
}
function Kt({ mesh: e, settingsObj: t, drawingObj: l, objects3D: o, solids: n }) {
  it.DEFAULT_UP = new I(0, 0, 1);
  const i = document.createElement("div"), c = new et(), r = new tt(45, 1, 0.1, 2 * 1e6), d = new nt(-10, 10, 10, -10, -1e3, 2e6);
  let v = r;
  const x = new ot({ antialias: true });
  x.localClippingEnabled = true;
  const f = new st(r, x.domElement);
  f.enableDamping = true, f.dampingFactor = 0.1, f.screenSpacePanning = true, f.zoomSpeed = 0.8, f.panSpeed = 1.2, f.rotateSpeed = 0.9, f.keyPanSpeed = 12, f.listenToKeyEvents(window), f.touches = { ONE: Ee.ROTATE, TWO: Ee.DOLLY_PAN }, x.domElement.addEventListener("wheel", (a) => {
    if (!a.ctrlKey && Math.abs(a.deltaX) > Math.abs(a.deltaY) * 1.5) {
      a.preventDefault();
      const y = f.target, V = new I().subVectors(r.position, y), C = new I();
      C.crossVectors(r.up, V).normalize();
      const B = V.length() * 1e-3 * f.panSpeed;
      y.addScaledVector(C, a.deltaX * B), r.position.addScaledVector(C, a.deltaX * B), f.update();
    }
  }, { passive: false });
  const X = new ye(new I(-1, 0, 0), 0), T = new ye(new I(0, -1, 0), 0), P = new ye(new I(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function L() {
    const a = window.__hekatanClip, y = [];
    a.enableX && (X.normal.set(a.invertX ? 1 : -1, 0, 0), X.constant = a.invertX ? -a.posX : a.posX, y.push(X)), a.enableY && (T.normal.set(0, a.invertY ? 1 : -1, 0), T.constant = a.invertY ? -a.posY : a.posY, y.push(T)), a.enableZ && (P.normal.set(0, 0, a.invertZ ? 1 : -1), P.constant = a.invertZ ? -a.posZ : a.posZ, y.push(P)), x.clippingPlanes = y, c.traverse((C) => {
      const Y = C;
      if (Y.material) {
        const B = Array.isArray(Y.material) ? Y.material : [Y.material];
        for (const k of B) k.clippingPlanes = y, k.needsUpdate = true;
      }
    });
    const V = window.__hekatanPanes ?? [];
    for (const C of V) try {
      C && typeof C.refresh == "function" && C.refresh();
    } catch {
    }
    x.render(c, v);
  }
  L(), window.__hekatanClipApply = L;
  const h = ct(t), _ = F.derive(() => h.displayScale.val === 0 ? 1 : h.displayScale.val > 0 ? h.displayScale.val : -1 / h.displayScale.val), Z = _t(e, h);
  let z = Ie(h.gridSize.rawVal);
  i.appendChild(lt(h, e, n)), i.setAttribute("id", "viewer"), i.appendChild(x.domElement), x.setPixelRatio(window.devicePixelRatio);
  const E = te();
  x.setClearColor(E.background, 1);
  const m = h.gridSize.rawVal, M = m * 0.5 + m * 0.5 / Math.tan(45 * 0.5);
  r.position.set(0.5 * m, 0.8 * -M, 0.5 * m), f.target.set(0.5 * m, 0.5 * m, 0), f.minDistance = 0.1, f.maxDistance = 1e4, i.__settings = h, f.zoomSpeed = 1, f._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, f.update(), c.add(z, xt(h.gridSize.rawVal, h.flipAxes.rawVal)), new ResizeObserver((a) => {
    var _a, _b;
    for (const y of a) {
      const V = (_a = y.target) == null ? void 0 : _a.clientWidth, C = (_b = y.target) == null ? void 0 : _b.clientHeight;
      if (V === 0 || C === 0) continue;
      r.aspect = V / C, r.updateProjectionMatrix();
      const Y = V / C, B = d.top;
      d.left = -B * Y, d.right = B * Y, d.updateProjectionMatrix(), x.setSize(V, C), s();
    }
  }).observe(i), f.addEventListener("change", s), F.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, h.displayScale.val, h.nodes.val, h.elements.val, (_g = h.edges) == null ? void 0 : _g.val, h.elemColumns.val, h.elemBeams.val, h.nodesIndexes.val, h.elementsIndexes.val, h.orientations.val, h.sections.val, h.secColumns.val, h.secBeams.val, h.secFloor.val, h.supports.val, h.loads.val, h.deformedShape.val, h.nodeResults.val, h.frameResults.val, h.shellResults.val, (_h = h.solidResults) == null ? void 0 : _h.val, setTimeout(s);
  });
  function s() {
    x.render(c, v);
  }
  function u(a) {
    v = a, f.object = a, f.update(), s();
  }
  if (e) {
    c.add(dt(h, Z, _), ut(e, h, Z), ft(h, Z, _), wt(e, h, Z, _), ht(e, h, Z, _), mt(e, h, Z, _), gt(e, h, Z, _), Mt(e, h, Z, _), Vt(e, h, Z, _), St(e, h, Z, _));
    const a = Ht(e, h), y = Tt(e, h, Z, a), V = Ze(a);
    c.add(y), i.appendChild(V);
    const C = Zt(e, h, Z);
    c.add(C);
    const Y = C.__colorMapValues, B = Ze(Y);
    B.id = "frame-legend", i.appendChild(B), F.derive(() => {
      var _a;
      const k = h.shellResults.val != "none", W = (((_a = h.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", D = k || W, U = h.frameResults.val.startsWith("contour:");
      V.hidden = !D, y.visible = D, B.hidden = !U;
    });
  }
  if (n) {
    const a = new at(16777215, 0.5);
    c.add(a);
    const y = new Be(16777215, 0.5);
    y.position.set(30, 25, -10), y.shadow.mapSize.width = 1024, y.shadow.mapSize.height = 1024, c.add(y);
    const V = 10;
    y.shadow.camera.left = -V, y.shadow.camera.right = V, y.shadow.camera.top = V, y.shadow.camera.bottom = -V, y.shadow.camera.far = 1e3;
    const C = new Be(16777215, 0.5);
    C.color.setHSL(11, 43, 96), C.position.set(-10, 0, 30), c.add(C), F.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), s());
    }), F.derive(() => {
      n.rawVal.forEach((Y) => Y.visible = h.solids.val), s();
    });
  }
  if (o) {
    const a = [], y = (C) => {
      var _a;
      return ((_a = C == null ? void 0 : C.userData) == null ? void 0 : _a.isCota) ? h.showCotas.val : h.custom3D.val;
    }, V = () => {
      for (const C of a) C.visible = y(C);
      s();
    };
    F.derive(() => {
      const C = o.val;
      a.length && (c.remove(...a), a.length = 0), C.length && (c.add(...C), a.push(...C), V()), s();
    }), F.derive(() => {
      h.custom3D.val, V();
    }), F.derive(() => {
      h.showCotas.val, V();
    });
  }
  l && At({ drawingObj: l, gridObj: z, scene: c, camera: r, controls: f, gridSize: m, derivedDisplayScale: _, rendererElm: x.domElement, viewerRender: s }), me((a, y) => {
    x.setClearColor(y.background, 1), c.remove(z), z.geometry.dispose(), z.material.dispose(), z = Ie(h.gridSize.rawVal), c.add(z), i.style.setProperty("--awatif-legend-color", y.legendMarker), s();
  });
  const b = { scene: c, perspCamera: r, orthoCamera: d, get camera() {
    return v;
  }, controls: f, renderer: x, rendererElm: x.domElement, render: s, setActiveCamera: u, settings: h };
  i.__ctx = b;
  const p = document.createElement("div");
  p.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const g = (a, y, V) => {
    const C = document.createElement("button");
    return C.textContent = a, C.title = y, C.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), C.onmouseenter = () => {
      C.style.background = "rgba(70,70,70,0.9)";
    }, C.onmouseleave = () => {
      C.style.background = "rgba(40,40,40,0.85)";
    }, C.onclick = (Y) => {
      Y.preventDefault(), V();
    }, C;
  }, S = (a, y) => {
    const V = f.target, C = new I().subVectors(v.position, V), Y = C.length(), B = new I(), k = new I();
    B.crossVectors(v.up, C).normalize(), k.copy(v.up).normalize();
    const W = Y * 0.05;
    V.addScaledVector(B, -a * W), V.addScaledVector(k, y * W), v.position.addScaledVector(B, -a * W), v.position.addScaledVector(k, y * W), f.update(), s();
  }, A = (a) => {
    const y = new I().subVectors(v.position, f.target);
    y.multiplyScalar(a), v.position.copy(f.target).add(y), f.update(), s();
  }, R = () => {
    const a = document.createElement("div");
    return a.style.cssText = "width:32px;height:32px;", a;
  };
  return p.append(R()), p.append(g("\u2191", "Pan arriba", () => S(0, 1))), p.append(g("\u2295", "Zoom in", () => A(0.85))), p.append(g("\u2190", "Pan izquierda", () => S(-1, 0))), p.append(g("\u2302", "Reset vista", () => {
    f.reset(), s();
  })), p.append(g("\u2192", "Pan derecha", () => S(1, 0))), p.append(g("\u2296", "Zoom out", () => A(1.18))), p.append(g("\u2193", "Pan abajo", () => S(0, -1))), p.append(R()), getComputedStyle(i).position === "static" && (i.style.position = "relative"), i.appendChild(p), i;
}
function _t(e, t) {
  return F.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const l = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || l.length === 0) return l;
    const n = t.deformScale.val, i = t.deformScale.val * t.deformScaleZ.val, c = Number.isFinite(n) ? n : 1, r = Number.isFinite(i) ? i : 1;
    return l.map((d, v) => {
      var _a2;
      const x = ((_a2 = o.get(v)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], f = Number.isFinite(x[0]) ? x[0] : 0, X = Number.isFinite(x[1]) ? x[1] : 0, T = Number.isFinite(x[2]) ? x[2] : 0;
      return [d[0] + f * c, d[1] + X * c, d[2] + T * r];
    });
  });
}
const Pe = F.state(null), Ce = F.state(""), Lt = F.state("kN"), Nt = F.state("mm"), Wt = F.state("kN/m\xB2"), Dt = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, ke = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, $t = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Ht(e, t) {
  const l = F.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), F.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), P = (k, W) => {
      k == null ? void 0 : k.forEach((D, U) => {
        const Q = e.elements.val[U];
        if (Q) for (let ee = 0; ee < Q.length; ee++) W.set(Q[ee], [D[ee] ?? D[0]]);
      });
    };
    P((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), P((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, i), P((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, c), P((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, r), P((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, d), P((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, v), P((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, x), P((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, f), P((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, X), P((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, T);
    const L = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, h = (_w = t.solidResults) == null ? void 0 : _w.val, Z = h && h !== "none" ? h : t.shellResults.val, z = L == null ? void 0 : L[Z], E = { bendingXX: [n, 0], bendingYY: [i, 0], bendingXY: [c, 0], membraneXX: [r, 0], membraneYY: [d, 0], membraneXY: [v, 0], tranverseShearX: [x, 0], tranverseShearY: [f, 0], vonMises: [X, 0], pressure: [T, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, m = t.shellResults.val, M = Lt.val, w = Nt.val, s = m === "displacementX" || m === "displacementY" || m === "displacementZ", u = m === "bendingXX" || m === "bendingYY" || m === "bendingXY", b = m === "membraneXX" || m === "membraneYY" || m === "membraneXY", p = m === "vonMises" || m === "pressure", g = m === "tranverseShearX" || m === "tranverseShearY", S = (_D = t.solidResults) == null ? void 0 : _D.val, A = S === "vonMises" || S === "sigmaXX" || S === "sigmaYY" || S === "sigmaZZ" || S === "tauXY" || S === "tauYZ" || S === "tauXZ", R = S === "ux" || S === "uy" || S === "uz", a = Wt.val, y = A ? $t[a] : R || s ? ke[w] : u || b || p || g ? 1 / Dt[M] : 1, V = A ? a : R || s ? w : u ? `${M}\xB7m/m` : b ? `${M}/m\xB2` : p ? `${M}/m\xB2` : g ? `${M}/m` : "";
    Ce.val = V, Pe.val = Array.isArray(z) && z.length === 2 ? [z[0] * y, z[1] * y] : null;
    const Y = S && S !== "none" ? [X, 0] : E[m], B = [];
    e.nodes.val.forEach((k, W) => {
      const D = Y;
      if (!D || !D[0] || typeof D[0].has != "function") return;
      if (!D[0].has(W)) {
        B.push(Number.NaN);
        return;
      }
      const U = D[0].get(W), Q = U ? U[D[1]] ?? 0 : 0;
      B.push(Q * y);
    }), l.val = B;
  }), l;
}
export {
  Nt as a,
  Xt as b,
  Lt as c,
  Ze as d,
  Wt as e,
  Kt as g
};
