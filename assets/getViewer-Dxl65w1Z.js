import { N as de, B as L, U as ue, F as K, G as q, d as _e, L as oe, e as J, D as j, b as Q, r as U, y as We, c as $e, V as B, w as ne, x as H, X as ge, k as ke, a as se, f as D, h as he, Y as pe, l as De, j as He, Z as Ue, _ as Ge, $ as Xe, a0 as le, a1 as qe, a2 as Ke, a3 as Qe, a4 as Oe, a5 as Je, n as ze, a6 as Te, q as je, s as et, t as tt, W as nt, u as ot, z as ye, A as st, v as Ee, O as at } from "./Text-CRP5ss3E.js";
import { v as S, P as it, g as te, o as me } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function rt(e, t, i) {
  const o = document.createElement("div"), n = new it({ title: "Settings", expanded: true, container: o });
  if (window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(n), o.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.deformScale, "val", { label: "Deform scale XY", min: 0.1, max: 5e3, step: 0.1 }), n.addBinding(e.deformScaleZ, "val", { label: "Deform scale Z", min: 0.01, max: 10, step: 0.01 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const d = n.addFolder({ title: "Analysis Inputs" });
    d.addBinding(e.supports, "val", { label: "Supports" }), d.addBinding(e.loads, "val", { label: "Loads" }), d.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), d.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const d = n.addFolder({ title: "Analysis Outputs" });
    d.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), d.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), d.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), d.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), d.addBinding(e.deformedShape, "val", { label: "Deformed shape" });
  }
  i && n.addBinding(e.solids, "val", { label: "Solids" });
  const r = n.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), l = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), c = () => {
    const d = window.__hekatanClipApply;
    typeof d == "function" && d();
  };
  return r.addBinding(l, "enableX", { label: "Cortar X" }).on("change", c), r.addBinding(l, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", c), r.addBinding(l, "invertX", { label: "  invertir X" }).on("change", c), r.addBinding(l, "enableY", { label: "Cortar Y" }).on("change", c), r.addBinding(l, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", c), r.addBinding(l, "invertY", { label: "  invertir Y" }).on("change", c), r.addBinding(l, "enableZ", { label: "Cortar Z" }).on("change", c), r.addBinding(l, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", c), r.addBinding(l, "invertZ", { label: "  invertir Z" }).on("change", c), o;
}
function lt(e) {
  return { gridSize: S.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: S.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: S.state((e == null ? void 0 : e.nodes) ?? true), elements: S.state((e == null ? void 0 : e.elements) ?? true), edges: S.state((e == null ? void 0 : e.edges) ?? true), elemColumns: S.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: S.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: S.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: S.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: S.state((e == null ? void 0 : e.orientations) ?? false), sections: S.state((e == null ? void 0 : e.sections) ?? true), secColumns: S.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: S.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: S.state((e == null ? void 0 : e.secFloor) ?? -1), supports: S.state((e == null ? void 0 : e.supports) ?? true), loads: S.state((e == null ? void 0 : e.loads) ?? false), deformedShape: S.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: S.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: S.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: S.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: S.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: S.state((e == null ? void 0 : e.flipAxes) ?? false), solids: S.state((e == null ? void 0 : e.solids) ?? true), custom3D: S.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: S.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: S.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: S.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function ct(e, t, i) {
  const o = te(), n = new de(new L(), new ue({ color: o.nodePoint }));
  return me((r, l) => {
    n.material.color.setHex(l.nodePoint);
  }), n.frustumCulled = false, S.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new K(t.val.flat(), 3));
  }), S.derive(() => {
    i.val;
    const r = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = r * i.rawVal);
  }), S.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function dt(e, t, i) {
  const o = te(), n = new q(), r = new _e(new L(), new oe({ color: o.elementLine }));
  me((P, X) => {
    r.material.color.setHex(X.elementLine);
  }), r.frustumCulled = false, r.renderOrder = 2, n.add(r);
  const l = new J({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: j, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), c = new Q(new L(), l);
  c.frustumCulled = false, n.add(c);
  let d = new U(o.shellWall), g = new U(o.shellSlab), w = new U(o.shellTri);
  me((P, X) => {
    d = new U(X.shellWall), g = new U(X.shellSlab), w = new U(X.shellTri), l.opacity = X.shellOpacity, l.needsUpdate = true;
  });
  function F(P, X) {
    const C = Math.abs(X[0] - P[0]), _ = Math.abs(X[1] - P[1]), p = Math.abs(X[2] - P[2]);
    return p > C && p > _ || _ > C && _ > p;
  }
  return S.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const P = t.elemColumns.rawVal, X = t.elemBeams.rawVal, C = i.val, _ = ((_a = e.elements) == null ? void 0 : _a.val) || [], p = _.filter((z) => {
      if (z.length !== 2) return true;
      const m = C[z[0]], y = C[z[1]];
      if (!m || !y) return true;
      const f = F(m, y);
      return !(f && !P || !f && !X);
    }).map((z) => ut(z).map((m) => [...C[m[0]], ...C[m[1]]]).flat()).flat();
    r.geometry.setAttribute("position", new K(p, 3));
    const R = [], E = [];
    function V(z, m, y, f) {
      const s = [m[0] - z[0], m[1] - z[1], m[2] - z[2]], u = [f[0] - z[0], f[1] - z[1], f[2] - z[2]], v = s[1] * u[2] - s[2] * u[1], a = s[2] * u[0] - s[0] * u[2], h = s[0] * u[1] - s[1] * u[0], x = Math.sqrt(v * v + a * a + h * h);
      return x < 1e-12 ? false : Math.abs(h / x) < 0.5;
    }
    for (const z of _) if (z.length === 3) {
      const [m, y, f] = z;
      if (C[m] && C[y] && C[f]) {
        R.push(...C[m], ...C[y], ...C[f]);
        for (let s = 0; s < 3; s++) E.push(w.r, w.g, w.b);
      }
    } else if (z.length === 4) {
      const [m, y, f, s] = z;
      if (C[m] && C[y] && C[f] && C[s]) {
        const u = V(C[m], C[y], C[f], C[s]) ? d : g;
        R.push(...C[m], ...C[y], ...C[f]), R.push(...C[m], ...C[f], ...C[s]);
        for (let v = 0; v < 6; v++) E.push(u.r, u.g, u.b);
      }
    }
    R.length > 0 ? (c.geometry.dispose(), c.geometry = new L(), c.geometry.setAttribute("position", new K(R, 3)), c.geometry.setAttribute("color", new K(E, 3)), c.geometry.computeVertexNormals(), c.visible = true) : c.visible = false;
  }), S.derive(() => {
    n.visible = t.elements.val;
  }), S.derive(() => {
    t.edges && (r.visible = t.edges.val);
  }), n;
}
function ut(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let i = 0; i < e.length; i++) t.push([e[i], e[(i + 1) % e.length]]);
  return t;
}
function Ie(e) {
  const t = te(), i = new We(e, 20, t.grid, t.grid);
  return i.position.set(0.5 * e, 0.5 * e, 0), i.rotateX(Math.PI / 2), i;
}
function ht(e, t, i, o) {
  const n = new q(), r = new $e(0.5, 0.5, 0.5), l = new J({ color: 10166822 });
  return S.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const c = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((d, g) => {
      const w = i.val[g];
      if (!w) return;
      const F = new Q(r, l);
      F.position.set(...w);
      const P = c * o.rawVal;
      F.scale.set(P, P, P), n.add(F);
    });
  }), S.derive(() => {
    if (o.val, !t.supports.rawVal) return;
    const d = 0.05 * t.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((g) => g.scale.set(d, d, d));
  }), S.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function pt(e, t, i, o) {
  const n = new q();
  n.name = "loadsGroup";
  function r(l) {
    if (l.length < 2) return 0.12 * t.gridSize.rawVal;
    const c = [1 / 0, 1 / 0, 1 / 0], d = [-1 / 0, -1 / 0, -1 / 0];
    for (const w of l) for (let F = 0; F < 3; F++) c[F] = Math.min(c[F], w[F]), d[F] = Math.max(d[F], w[F]);
    return 0.08 * Math.max(d[0] - c[0], d[1] - c[1], d[2] - c[2], 0.1);
  }
  return S.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const l = i.val, c = r(l);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((d, g) => {
      const w = l[g];
      if (!w) return;
      const F = new B(...d.slice(0, 3));
      if (F.lengthSq() < 1e-30) return;
      F.normalize();
      const P = new ne(F, new B(...w), 1, 15637248, 0.3, 0.3), X = c * o.rawVal;
      P.scale.set(X, X, X), n.add(P);
    });
  }), S.derive(() => {
    if (o.val, !t.loads.rawVal) return;
    const c = r(i.rawVal) * o.rawVal;
    n.children.forEach((d) => d.scale.set(c, c, c));
  }), S.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function mt(e, t, i) {
  const o = new q();
  return S.derive(() => {
    if (!e.nodesIndexes.val) return;
    o.children.forEach((r) => r.dispose()), o.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((r, l) => {
      const c = new H(`${l}`);
      c.position.set(...r), c.updateScale(n * i.rawVal), o.add(c);
    });
  }), S.derive(() => {
    if (i.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    o.children.forEach((r) => r.updateScale(n * i.rawVal));
  }), S.derive(() => {
    o.visible = e.nodesIndexes.val;
  }), o;
}
function ft(e, t, i, o) {
  const n = new q();
  return S.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const r = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((l, c) => {
      const d = new H(`${c}`, void 0, "#001219");
      d.position.set(...wt(l.map((g) => i.rawVal[g]))), d.updateScale(r * o.rawVal), n.add(d);
    });
  }), S.derive(() => {
    if (o.val, !t.elementsIndexes.rawVal) return;
    const r = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((l) => l.updateScale(r * o.rawVal));
  }), S.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function wt(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), i = e.length;
  return [t[0] / i, t[1] / i, t[2] / i];
}
function vt(e, t) {
  const i = new q(), o = 0.05 * e * 1, n = te(), r = new H("X", "red", "transparent"), l = new H(t ? "Z" : "Y", "green", "transparent"), c = new H(t ? "Y" : "Z", "blue", "transparent"), d = new ne(new B(1, 0, 0), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), g = new ne(new B(0, 1, 0), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), w = new ne(new B(0, 0, 1), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return r.position.set(1.3 * o, 0, 0), l.position.set(0, 1.3 * o, 0), c.position.set(0, 0, 1.3 * o), r.updateScale(0.4 * o), l.updateScale(0.4 * o), c.updateScale(0.4 * o), d.scale.set(o, o, o), g.scale.set(o, o, o), w.scale.set(o, o, o), i.add(d, g, w, r, l, c), i;
}
function Ae(e, t) {
  const i = new B(...e), n = new B(...t).clone().sub(i), r = n.length(), l = n.dot(new B(1, 0, 0)) / r, c = n.dot(new B(0, 1, 0)) / r, d = n.dot(new B(0, 0, 1)) / r, g = Math.sqrt(l ** 2 + c ** 2);
  let w = new ge().fromArray([[l, c, d], [-c / g, l / g, 0], [-l * d / g, -c * d / g, g]].flat());
  return d === 1 && (w = new ge().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), d === -1 && (w = new ge().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new ke().setFromMatrix3(w);
}
function Se(e, t) {
  return e == null ? void 0 : e.map((i, o) => (9 * i + t[o]) / 10);
}
function ie(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), i = e.length;
  return [t[0] / i, t[1] / i, t[2] / i];
}
function xt(e, t, i) {
  const o = ie([t, i]), n = ie([e, i]), r = ie([e, t]), l = new B(...o).sub(new B(...n)).normalize(), c = new B(...i).sub(new B(...r)).normalize(), d = l.clone().cross(c).normalize(), g = d.clone().cross(l).normalize();
  return new ke().makeBasis(l, g, d);
}
function bt(e, t, i, o) {
  const n = new q(), r = new L(), l = new oe({ vertexColors: true }), c = [0, 0, 0], d = [1, 0, 0], g = [0, 1, 0], w = [0, 0, 1];
  r.setAttribute("position", new K([...c, ...d, ...c, ...g, ...c, ...w], 3));
  const F = [255, 0, 0], P = [0, 255, 0], X = [0, 0, 255];
  return r.setAttribute("color", new K([...F, ...F, ...P, ...P, ...X, ...X], 3)), S.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((C) => {
      const _ = new _e(r, l), p = i.rawVal[C[0]], R = i.rawVal[C[1]];
      if (C.length === 2 && (_.position.set(...Se(p, R)), _.rotation.setFromRotationMatrix(Ae(p, R))), C.length === 3) {
        const z = i.rawVal[C[2]];
        _.position.set(...ie([p, R, z])), _.rotation.setFromRotationMatrix(xt(p, R, z));
      }
      const V = 0.05 * t.gridSize.rawVal * 0.75 * o.rawVal;
      _.scale.set(V, V, V), n.add(_);
    }));
  }), S.derive(() => {
    if (o.val, !t.orientations.rawVal) return;
    const _ = 0.05 * t.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((p) => p.scale.set(_, _, _));
  }), S.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function gt(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), i = (e.h * 100).toFixed(0);
    return `${t}x${i}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function yt(e, t, i, o) {
  const n = new q();
  function r(m, y) {
    const f = m / 2, s = y / 2, u = new Float32Array([0, -f, -s, 0, f, -s, 0, f, s, 0, -f, -s, 0, f, s, 0, -f, s]), v = new L();
    v.setAttribute("position", new D(u, 3));
    const a = new Float32Array([0, -f, -s, 0, f, -s, 0, f, s, 0, -f, s, 0, -f, -s]), h = new L();
    return h.setAttribute("position", new D(a, 3)), { fill: v, outline: h };
  }
  function l(m, y = 24) {
    const f = m / 2, s = new Float32Array(y * 9);
    for (let h = 0; h < y; h++) {
      const x = h / y * Math.PI * 2, M = (h + 1) / y * Math.PI * 2;
      s[h * 9] = 0, s[h * 9 + 1] = 0, s[h * 9 + 2] = 0, s[h * 9 + 3] = 0, s[h * 9 + 4] = f * Math.cos(x), s[h * 9 + 5] = f * Math.sin(x), s[h * 9 + 6] = 0, s[h * 9 + 7] = f * Math.cos(M), s[h * 9 + 8] = f * Math.sin(M);
    }
    const u = new L();
    u.setAttribute("position", new D(s, 3));
    const v = new Float32Array((y + 1) * 3);
    for (let h = 0; h <= y; h++) {
      const x = h / y * Math.PI * 2;
      v[h * 3] = 0, v[h * 3 + 1] = f * Math.cos(x), v[h * 3 + 2] = f * Math.sin(x);
    }
    const a = new L();
    return a.setAttribute("position", new D(v, 3)), { fill: u, outline: a };
  }
  function c(m, y, f, s) {
    const u = f ?? y * 0.08, v = s ?? m * 0.07, a = m / 2, h = y / 2, x = h - u, M = v / 2, Y = [];
    function b(T, k, N, W) {
      Y.push(0, T, k, 0, N, k, 0, N, W, 0, T, k, 0, N, W, 0, T, W);
    }
    b(-a, -h, a, -x), b(-M, -x, M, x), b(-a, x, a, h);
    const A = new L();
    A.setAttribute("position", new D(new Float32Array(Y), 3));
    const I = new Float32Array([0, -a, -h, 0, a, -h, 0, a, -x, 0, M, -x, 0, M, x, 0, a, x, 0, a, h, 0, -a, h, 0, -a, x, 0, -M, x, 0, -M, -x, 0, -a, -x, 0, -a, -h]), Z = new L();
    return Z.setAttribute("position", new D(I, 3)), { fill: A, outline: Z };
  }
  function d(m, y, f) {
    const s = m / 2, u = y / 2, v = s - f, a = u - f, h = [];
    function x(A, I, Z, T) {
      h.push(0, A, I, 0, Z, I, 0, Z, T, 0, A, I, 0, Z, T, 0, A, T);
    }
    x(-s, -u, s, -a), x(-s, a, s, u), x(-s, -a, -v, a), x(v, -a, s, a);
    const M = new L();
    M.setAttribute("position", new D(new Float32Array(h), 3));
    const Y = new Float32Array([0, -s, -u, 0, s, -u, 0, s, -u, 0, s, u, 0, s, u, 0, -s, u, 0, -s, u, 0, -s, -u, 0, -v, -a, 0, v, -a, 0, v, -a, 0, v, a, 0, v, a, 0, -v, a, 0, -v, a, 0, -v, -a]), b = new L();
    return b.setAttribute("position", new D(Y, 3)), { fill: M, outline: b };
  }
  function g(m, y, f) {
    const s = m / 2, u = y / 2, v = s - f, a = u - f, h = new L(), x = new Float32Array([0, -v, -a, 0, v, -a, 0, v, a, 0, -v, -a, 0, v, a, 0, -v, a]);
    h.setAttribute("position", new D(x, 3));
    const M = [];
    function Y(Z, T, k, N) {
      M.push(0, Z, T, 0, k, T, 0, k, N, 0, Z, T, 0, k, N, 0, Z, N);
    }
    Y(-s, -u, s, -a), Y(-s, a, s, u), Y(-s, -a, -v, a), Y(v, -a, s, a);
    const b = new L();
    b.setAttribute("position", new D(new Float32Array(M), 3));
    const A = new Float32Array([0, -s, -u, 0, s, -u, 0, s, -u, 0, s, u, 0, s, u, 0, -s, u, 0, -s, u, 0, -s, -u, 0, -v, -a, 0, v, -a, 0, v, -a, 0, v, a, 0, v, a, 0, -v, a, 0, -v, a, 0, -v, -a]), I = new L();
    return I.setAttribute("position", new D(A, 3)), { concFill: h, steelFillGeom: b, outline: I };
  }
  function w(m, y, f) {
    const s = [], u = [[0, -m / 2, -y / 2], [0, -m / 2 + f, -y / 2], [0, -m / 2 + f, y / 2 - f], [0, m / 2, y / 2 - f], [0, m / 2, y / 2], [0, -m / 2, y / 2]], v = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const M of v) s.push(...u[M]);
    const a = new L();
    a.setAttribute("position", new D(new Float32Array(s), 3));
    const h = [];
    for (let M = 0; M < u.length; M++) {
      const Y = (M + 1) % u.length;
      h.push(...u[M], ...u[Y]);
    }
    const x = new L();
    return x.setAttribute("position", new D(new Float32Array(h), 3)), { fill: a, outline: x };
  }
  function F(m, y, f, s) {
    const u = s / 2, v = [], a = [[0, -m - u, -y / 2], [0, -f - u, -y / 2], [0, -f - u, y / 2 - f], [0, -u, y / 2 - f], [0, -u, y / 2], [0, -m - u, y / 2]], h = [[0, u, -y / 2], [0, u + f, -y / 2], [0, u + f, y / 2 - f], [0, m + u, y / 2 - f], [0, m + u, y / 2], [0, u, y / 2]], x = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of x) v.push(...a[A]);
    for (const A of x) v.push(...h[A]);
    const M = new L();
    M.setAttribute("position", new D(new Float32Array(v), 3));
    const Y = [];
    for (const A of [a, h]) for (let I = 0; I < A.length; I++) {
      const Z = (I + 1) % A.length;
      Y.push(...A[I], ...A[Z]);
    }
    const b = new L();
    return b.setAttribute("position", new D(new Float32Array(Y), 3)), { fill: M, outline: b };
  }
  function P(m, y, f, s) {
    const u = y / 2, v = m, a = [[0, -v, -u], [0, -v, -u + f], [0, -s, -u + f], [0, -s, u - f], [0, -v, u - f], [0, -v, u], [0, 0, u], [0, 0, -u]], h = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], x = [];
    for (const A of h) x.push(...a[A]);
    const M = new L();
    M.setAttribute("position", new D(new Float32Array(x), 3));
    const Y = [];
    for (let A = 0; A < a.length; A++) {
      const I = (A + 1) % a.length;
      Y.push(...a[A], ...a[I]);
    }
    const b = new L();
    return b.setAttribute("position", new D(new Float32Array(Y), 3)), { fill: M, outline: b };
  }
  function X(m, y, f, s, u) {
    const v = y / 2, a = u / 2, h = [], x = [[0, -m, -v], [0, -m, -v + f], [0, -a - s, -v + f], [0, -a - s, v - f], [0, -m, v - f], [0, -m, v], [0, -a, v], [0, -a, -v]], M = x.map((Z) => [Z[0], -Z[1], Z[2]]), Y = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of Y) h.push(...x[Z]);
    for (const Z of Y) h.push(...M[Z]);
    const b = new L();
    b.setAttribute("position", new D(new Float32Array(h), 3));
    const A = [];
    for (const Z of [x, M]) for (let T = 0; T < Z.length; T++) {
      const k = (T + 1) % Z.length;
      A.push(...Z[T], ...Z[k]);
    }
    const I = new L();
    return I.setAttribute("position", new D(new Float32Array(A), 3)), { fill: b, outline: I };
  }
  function C(m, y, f, s) {
    const u = m / 2, v = y / 2, a = s / 2, h = [[0, -a, -v], [0, a, -v], [0, a, v - f], [0, u, v - f], [0, u, v], [0, -u, v], [0, -u, v - f], [0, -a, v - f]], x = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], M = [];
    for (const I of x) M.push(...h[I]);
    const Y = new L();
    Y.setAttribute("position", new D(new Float32Array(M), 3));
    const b = [];
    for (let I = 0; I < h.length; I++) {
      const Z = (I + 1) % h.length;
      b.push(...h[I], ...h[Z]);
    }
    const A = new L();
    return A.setAttribute("position", new D(new Float32Array(b), 3)), { fill: Y, outline: A };
  }
  function _(m, y, f = 24) {
    const s = m / 2, u = s - y, v = [];
    for (let M = 0; M < f; M++) {
      const Y = M / f * Math.PI * 2, b = (M + 1) / f * Math.PI * 2, A = Math.cos(Y), I = Math.sin(Y), Z = Math.cos(b), T = Math.sin(b);
      v.push(0, s * A, s * I, 0, s * Z, s * T, 0, u * Z, u * T), v.push(0, s * A, s * I, 0, u * Z, u * T, 0, u * A, u * I);
    }
    const a = new L();
    a.setAttribute("position", new D(new Float32Array(v), 3));
    const h = [];
    for (let M = 0; M < f; M++) {
      const Y = M / f * Math.PI * 2, b = (M + 1) / f * Math.PI * 2;
      h.push(0, s * Math.cos(Y), s * Math.sin(Y), 0, s * Math.cos(b), s * Math.sin(b)), h.push(0, u * Math.cos(Y), u * Math.sin(Y), 0, u * Math.cos(b), u * Math.sin(b));
    }
    const x = new L();
    return x.setAttribute("position", new D(new Float32Array(h), 3)), { fill: a, outline: x };
  }
  const p = new J({ color: 52479, transparent: true, opacity: 0.35, side: j, depthWrite: false }), R = new oe({ color: 52479 }), E = new J({ color: 16750848, transparent: true, opacity: 0.4, side: j, depthWrite: false }), V = new oe({ color: 16750848 });
  function z(m, y) {
    const f = Math.abs(y[0] - m[0]), s = Math.abs(y[1] - m[1]), u = Math.abs(y[2] - m[2]);
    return u > f && u > s || s > f && s > u;
  }
  return S.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const m = t.secColumns.rawVal, y = t.secBeams.rawVal;
    if (!m && !y) {
      n.children.forEach((a) => {
        a instanceof H && a.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((a) => {
      a instanceof H && a.dispose();
    }), n.clear();
    const f = (_a = e.elements) == null ? void 0 : _a.val, s = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!f || !s) return;
    const u = s.sectionShapes, v = t.secFloor.rawVal;
    f.forEach((a, h) => {
      if (a.length !== 2) return;
      const x = i.rawVal[a[0]], M = i.rawVal[a[1]];
      if (!x || !M) return;
      const Y = z(x, M);
      if (Y && !m || !Y && !y) return;
      if (v >= 0) {
        const T = Math.min(x[1], M[1]);
        Math.max(x[1], M[1]);
        const k = t.gridSize.rawVal || 3;
        if (Math.floor(T / k + 0.01) !== v) return;
      }
      const b = u == null ? void 0 : u.get(h);
      if (!b) return;
      const A = [(x[0] + M[0]) / 2, (x[1] + M[1]) / 2, (x[2] + M[2]) / 2], I = Ae(x, M);
      if (b.type === "CFT") {
        const T = g(b.b, b.h, b.tw ?? b.b * 0.05), k = new Q(T.concFill, p);
        k.position.set(...A), k.rotation.setFromRotationMatrix(I), n.add(k);
        const N = new Q(T.steelFillGeom, E);
        N.position.set(...A), N.rotation.setFromRotationMatrix(I), n.add(N);
        const W = new se(T.outline, V);
        W.position.set(...A), W.rotation.setFromRotationMatrix(I), n.add(W);
      } else {
        let T, k, N;
        switch (b.type) {
          case "rect":
            T = r(b.b, b.h), k = p, N = R;
            break;
          case "circ":
            T = l(b.d), k = p, N = R;
            break;
          case "I":
            T = c(b.b, b.h, b.tf, b.tw), k = E, N = V;
            break;
          case "HSS":
            T = d(b.b, b.h, b.tw ?? b.b * 0.05), k = E, N = V;
            break;
          case "CFT":
            T = g(b.b, b.h, b.tw ?? b.b * 0.05), k = E, N = V;
            break;
          case "L":
            T = w(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3), k = E, N = V;
            break;
          case "2L":
            T = F(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3, b.dis ?? 0.01), k = E, N = V;
            break;
          case "C":
          case "coldC":
            T = P(b.b, b.h, b.tf ?? b.t ?? 3e-3, b.tw ?? b.t ?? 3e-3), k = E, N = V;
            break;
          case "2C":
            T = X(b.b, b.h, b.tf ?? 5e-3, b.tw ?? 5e-3, b.dis ?? 0.01), k = E, N = V;
            break;
          case "T":
            T = C(b.b, b.h, b.tf ?? 0.01, b.tw ?? 6e-3), k = E, N = V;
            break;
          case "pipe":
            T = _(b.d, b.tw ?? b.d * 0.05), k = E, N = V;
            break;
          default:
            return;
        }
        const W = new Q(T.fill, k);
        W.position.set(...A), W.rotation.setFromRotationMatrix(I), n.add(W);
        const $ = new se(T.outline, N);
        $.position.set(...A), $.rotation.setFromRotationMatrix(I), n.add($);
      }
      const Z = gt(b);
      if (Z) {
        const k = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(b.type) ? "#ff9900" : "#00ccff", N = new H(Z, k, "transparent");
        N.position.set(A[0], A[1], A[2]);
        const W = 0.05 * t.gridSize.rawVal * 0.5;
        N.updateScale(W * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(N);
      }
    });
  }), o && S.derive(() => {
    if (o.val, !t.sections.rawVal) return;
    const m = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((y) => {
      y instanceof H && y.updateScale(m * o.rawVal);
    });
  }), S.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class ce extends q {
  constructor(t, i, o, n, r, l, c) {
    super();
    const d = new he().moveTo(0, 0).lineTo(0, l[1]).lineTo(o, l[1]).lineTo(o, 0).lineTo(0, 0), g = d.getPoints(), w = new L().setFromPoints(g);
    this.lines = new se(w, new oe({ color: te().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const F = new pe(d), P = new J({ color: l[1] > 0 ? 24435 : 11411474, side: j });
    this.mesh = new Q(F, P), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new H(`${r[1].toFixed(4)}`), this.normalizedResult = l, this.textPosition = ie([t, i]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Be extends q {
  constructor(t, i, o, n, r, l, c) {
    super();
    const d = r[0] * o / (r[0] + r[1]), g = r[0] * r[1] > 0;
    if (this.text = new H(`${r[0].toFixed(4)}`), this.text2 = new H(`${(r[1] * -1).toFixed(4)}`), this.normalizedResult = l, this.textPosition = Se(t, i), this.text2Position = Se(i, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), g) {
      const w = new he().moveTo(0, 0).lineTo(0, l[0]).lineTo(d, 0).lineTo(0, 0), F = new he().moveTo(d, 0).lineTo(o, -l[1]).lineTo(o, 0).lineTo(d, 0), P = w.getPoints(), X = F.getPoints(), C = new L().setFromPoints(P), _ = new L().setFromPoints(X), p = new oe({ color: te().resultOutline });
      this.lines = new se(C, p), this.lines2 = new se(_, p), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), c && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const R = new pe(w), E = new pe(F), V = new J({ color: l[0] > 0 ? 24435 : 11411474, side: j }), z = new J({ color: -l[1] > 0 ? 24435 : 11411474, side: j });
      this.mesh = new Q(R, V), this.mesh2 = new Q(E, z), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), c && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const w = new he().moveTo(0, 0).lineTo(0, l[0]).lineTo(o, -l[1]).lineTo(o, 0).lineTo(0, 0), F = w.getPoints(), P = new L().setFromPoints(F);
      this.lines = new se(P, new oe({ color: te().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const X = new pe(w), C = new J({ color: l[0] > 0 ? 24435 : 11411474, side: j });
      this.mesh = new Q(X, C), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Le = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Le || {});
function Mt(e, t, i, o) {
  const n = new q(), r = { normals: ce, shearsY: ce, shearsZ: ce, torsions: ce, bendingsY: Be, bendingsZ: Be };
  return S.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, i.val, t.frameResults.val == "none") return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const l = Le[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[l]) == null ? void 0 : _b.forEach((c, d) => {
      var _a2, _b2;
      const g = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[d]) ?? [0, 1], w = i.rawVal[g[0]], F = i.rawVal[g[1]], P = new B(...F).distanceTo(new B(...w)), X = Ft((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[l]), C = c == null ? void 0 : c.map((E) => E / (X === 0 ? 1 : X)), _ = Ae(w, F), p = new r[l](w, F, P, _, c ?? [0, 0], C ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(l)), R = 0.05 * t.gridSize.rawVal;
      p.updateScale(R * o.rawVal), n.add(p);
    });
  }), S.derive(() => {
    if (o.val, t.frameResults.rawVal == "none") return;
    const l = 0.05 * t.gridSize.val;
    n.children.forEach((c) => c.updateScale(l * o.rawVal));
  }), S.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function Ft(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((i) => {
    const o = Math.max(...i ?? [0, 0]);
    o > t && (t = o);
  }), t;
}
class St extends q {
  constructor(t, i, o) {
    super();
    const n = i === Ve.reactions;
    o[0] && (this.xText1 = new H(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new H(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new H(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new H(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new H(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new H(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new ne(new B(1, 0, 0), new B(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new ne(new B(0, 1, 0), new B(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new ne(new B(0, 0, 1), new B(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var Ve = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Ve || {});
function Ct(e, t, i, o) {
  const n = new q();
  return S.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const r = Ve[t.nodeResults.rawVal], l = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[r]) == null ? void 0 : _b.forEach((c, d) => {
      const g = new St(i.rawVal[d], r, c ?? [0, 0, 0, 0, 0, 0]);
      g.updateScale(l * o.rawVal), n.add(g);
    });
  }), S.derive(() => {
    if (o.val, t.nodeResults.rawVal == "none") return;
    const r = 0.05 * t.gridSize.val;
    n.children.forEach((l) => l.updateScale(r * o.rawVal));
  }), S.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function At({ drawingObj: e, gridObj: t, scene: i, camera: o, controls: n, gridSize: r, derivedDisplayScale: l, rendererElm: c, viewerRender: d }) {
  const g = new De(), w = new He(), F = new Q(new Ue(r, r), new J({ side: j })), P = new de(new L(), new ue()), X = new de(new L(), new ue({ color: "gray" })), C = new de(new L(), new ue({ color: "orange", size: 0.8 }));
  i.add(C), P.geometry.setAttribute("position", new K(e.points.rawVal.flat(), 3)), P.geometry.computeBoundingSphere(), P.frustumCulled = false, X.frustumCulled = false, i.add(X), F.position.set(0.5 * r, 0.5 * r, 0), F.rotateX(Math.PI / 2), F.geometry.rotateX(Math.PI / 2), F.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), S.derive(() => {
    e.gridTarget && (Vt(t, { position: new B(...e.gridTarget.val.position), quaternion: new Ge().setFromEuler(new Xe(...e.gridTarget.val.rotation)) }, d), F.position.set(...e.gridTarget.val.position), F.quaternion.setFromEuler(new Xe(...e.gridTarget.val.rotation)), F.updateMatrixWorld());
  }), S.derive(() => {
    P.geometry.setAttribute("position", new K(e.points.val.flat(), 3)), P.geometry.computeBoundingSphere();
  }), S.derive(() => {
    const V = 0.05 * r * 0.5 * l.val;
    X.material.size = V, g.params.Points.threshold = 0.4 * V;
  }), S.derive(() => {
    var _a;
    const V = e.points.val ?? [], m = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], y = [];
    for (const s of m) {
      const [u, v, a] = V[s];
      y.push(u, v, a);
    }
    const f = new L();
    f.setAttribute("position", new K(y, 3)), C.geometry.dispose(), C.geometry = f;
  });
  let _ = false, p = 0;
  c.addEventListener("pointerdown", () => {
    _ = true;
  }), c.addEventListener("pointerup", () => {
    _ = false;
  }), c.addEventListener("pointermove", () => {
    _ && p++;
  }), c.addEventListener("click", (V) => {
    if (p > 5) {
      p = 0;
      return;
    }
    p = 0, w.x = V.clientX / window.innerWidth * 2 - 1, w.y = -(V.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(w, o);
    const z = g.intersectObject(F);
    if (z.length) {
      let m = z[0].point;
      (V.ctrlKey || V.metaKey) && (m = new B(Math.round(z[0].point.x), Math.round(z[0].point.y), Math.round(z[0].point.z))), e.points.val = [...e.points.rawVal, m.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), c.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), c.addEventListener("pointermove", (V) => {
    w.x = V.clientX / window.innerWidth * 2 - 1, w.y = -(V.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(w, o);
    const z = g.intersectObject(F);
    if (X.geometry.deleteAttribute("position"), z.length) {
      let m = z[0].point;
      (V.ctrlKey || V.metaKey) && (m = new B(Math.round(z[0].point.x), Math.round(z[0].point.y), Math.round(z[0].point.z))), X.geometry.setAttribute("position", new K(m.toArray(), 3));
    }
    d();
  }), c.addEventListener("pointermove", (V) => {
    var _a;
    w.x = V.clientX / window.innerWidth * 2 - 1, w.y = -(V.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(w, o);
    let z = false;
    const m = g.intersectObject(P), y = g.intersectObject(F);
    if (m.length && y.length) {
      const f = new B(...e.points.rawVal[m[0].index]), s = new B(...y[0].point), u = f.sub(s), v = (_a = y[0].face) == null ? void 0 : _a.normal;
      v.transformDirection(F.matrixWorld), Math.abs(u.dot(v)) < 1e-4 && (z = true);
    }
    X.visible = !z;
  });
  let R = false, E;
  c.addEventListener("pointermove", (V) => {
    var _a;
    if (!p) return;
    w.x = V.clientX / window.innerWidth * 2 - 1, w.y = -(V.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(w, o);
    let z = false;
    const m = g.intersectObject(P), y = g.intersectObject(F);
    if (m.length && y.length) {
      const s = new B(...e.points.rawVal[m[0].index]), u = new B(...y[0].point), v = s.sub(u), a = (_a = y[0].face) == null ? void 0 : _a.normal;
      a.transformDirection(F.matrixWorld), Math.abs(v.dot(a)) < 1e-4 && (z = true);
    }
    if (z && p < 5 && (R = true, n.enabled = false, E = m[0].index), !R || p % 2 !== 0) return;
    const f = [...e.points.rawVal];
    if (E !== void 0) {
      let s = y[0].point;
      (V.ctrlKey || V.metaKey) && (s = new B(Math.round(s.x), Math.round(s.y), Math.round(s.z))), f[E] = s.toArray();
    }
    e.points.val = f;
  }), c.addEventListener("pointerup", () => {
    n.enabled = true, R = false;
  }), c.addEventListener("contextmenu", (V) => {
    var _a;
    w.x = V.clientX / window.innerWidth * 2 - 1, w.y = -(V.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(w, o);
    let z = false;
    const m = g.intersectObject(P), y = g.intersectObject(F);
    if (m.length && y.length) {
      const u = new B(...e.points.rawVal[m[0].index]), v = new B(...y[0].point), a = u.sub(v), h = (_a = y[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(F.matrixWorld), Math.abs(a.dot(h)) < 1e-4 && (z = true);
    }
    if (!z) return;
    const f = [...e.points.rawVal];
    if (f.splice(m[0].index, 1), e.points.val = f, !e.polylines) return;
    const s = e.polylines.rawVal.map((u) => u.filter((v) => v !== m[0].index)).map((u) => u.map((v) => v > m[0].index ? v - 1 : v)).filter((u) => u.length);
    s.push([]), e.polylines.val = s;
  });
}
function Vt(e, t, i) {
  const r = Math.round(14.999999999999998), l = { position: e.position.clone(), quaternion: e.quaternion.clone() }, c = setInterval(g, 1e3 / 30);
  let d = 0;
  function g() {
    d++;
    const w = d / r;
    e.position.lerpVectors(l.position, t.position, w), e.quaternion.slerpQuaternions(l.quaternion, t.quaternion, w), i && i(), d == r && clearInterval(c);
  }
}
class Ne {
  constructor(t, i = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(t, i);
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
  setColorMap(t, i = 32) {
    this.map = Me[t] || Me.rainbow, this.n = i;
    const o = 1 / this.n, n = new U(), r = new U();
    this.lut.length = 0, this.lut.push(new U(this.map[0][1]));
    for (let l = 1; l < i; l++) {
      const c = l * o;
      for (let d = 0; d < this.map.length - 1; d++) if (c > this.map[d][0] && c <= this.map[d + 1][0]) {
        const g = this.map[d][0], w = this.map[d + 1][0];
        n.setHex(this.map[d][1], le), r.setHex(this.map[d + 1][1], le);
        const F = new U().lerpColors(n, r, (c - g) / (w - g));
        this.lut.push(F);
      }
    }
    return this.lut.push(new U(this.map[this.map.length - 1][1])), this;
  }
  copy(t) {
    return this.lut = t.lut, this.map = t.map, this.n = t.n, this.minV = t.minV, this.maxV = t.maxV, this;
  }
  getColor(t) {
    t = qe.clamp(t, this.minV, this.maxV), t = (t - this.minV) / (this.maxV - this.minV);
    const i = Math.round(t * this.n);
    return this.lut[i];
  }
  addColorMap(t, i) {
    return Me[t] = i, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const i = t.getContext("2d", { alpha: false }), o = i.getImageData(0, 0, 1, this.n), n = o.data;
    let r = 0;
    const l = 1 / this.n, c = new U(), d = new U(), g = new U();
    for (let w = 1; w >= 0; w -= l) for (let F = this.map.length - 1; F >= 0; F--) if (w < this.map[F][0] && w >= this.map[F - 1][0]) {
      const P = this.map[F - 1][0], X = this.map[F][0];
      c.setHex(this.map[F - 1][1], le), d.setHex(this.map[F][1], le), g.lerpColors(c, d, (w - P) / (X - P)), n[r * 4] = Math.round(g.r * 255), n[r * 4 + 1] = Math.round(g.g * 255), n[r * 4 + 2] = Math.round(g.b * 255), n[r * 4 + 3] = 255, r += 1;
    }
    return i.putImageData(o, 0, 0), t;
  }
}
const Me = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, ae = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Yt(e) {
  e = Math.max(0, Math.min(1, e));
  for (let i = 0; i < ae.length - 1; i++) {
    const [o, n, r, l] = ae[i], [c, d, g, w] = ae[i + 1];
    if (e <= c) {
      const F = (e - o) / (c - o);
      return [n + (d - n) * F, r + (g - r) * F, l + (w - l) * F];
    }
  }
  const t = ae[ae.length - 1];
  return [t[1], t[2], t[3]];
}
function Pt() {
  const t = new Uint8Array(1024);
  for (let o = 0; o < 256; o++) {
    const n = o / 255, [r, l, c] = Yt(n);
    t[o * 4 + 0] = r, t[o * 4 + 1] = l, t[o * 4 + 2] = c, t[o * 4 + 3] = 255;
  }
  const i = new Oe(t, 256, 1, Je);
  return i.minFilter = ze, i.magFilter = ze, i.wrapS = Te, i.wrapT = Te, i.needsUpdate = true, i;
}
function Xt(e, t, i) {
  new Ne();
  const o = Pt(), n = new Ke({ uniforms: { cmap: { value: o }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: j, transparent: false, clipping: true, depthWrite: true, depthTest: true }), r = new Q(new L(), n);
  return r.renderOrder = -1, r.frustumCulled = false, S.derive(() => {
    r.geometry.setAttribute("position", new K(e.val.flat(), 3));
    const l = [];
    for (const p of t.val) p.length === 3 ? l.push(p[0], p[1], p[2]) : p.length === 4 && (l.push(p[0], p[1], p[2]), l.push(p[0], p[2], p[3]));
    r.geometry.setIndex(new Qe(l, 1));
    const c = i.val.filter((p) => Number.isFinite(p));
    let d, g;
    const w = Ye.val;
    if (w ? (g = w[0], d = w[1]) : (d = c.length ? Math.max(...c) : 1, g = c.length ? Math.min(...c) : 0, g >= 0 && d > 0 && (g = 0)), d === g) {
      const p = Math.max(Math.abs(d) * 1e-6, 1e-9);
      d += p, g -= p;
    }
    const F = w && w[0] > w[1], P = Math.min(g, d), X = Math.max(g, d), C = X - P, _ = new Float32Array(i.val.length);
    for (let p = 0; p < i.val.length; p++) {
      const R = i.val[p];
      if (!Number.isFinite(R)) {
        _[p] = -1;
        continue;
      }
      const V = ((F ? X + P - R : R) - P) / C;
      _[p] = Math.max(0, Math.min(1, V));
    }
    r.geometry.setAttribute("scalar", new D(_, 1));
  }), r;
}
function zt(e, t, i, o) {
  const n = Xt(i, e.elements, o);
  return S.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const Tt = 6, Fe = 10, Et = 0.012;
function It(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Bt(e, t, i, o) {
  if (!i && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && i) {
    const r = i[e];
    if (r && r.has(t)) return r.get(t);
  }
  return null;
}
function Rt(e, t, i, o) {
  const n = new q(), r = new Ne();
  r.setColorMap("rainbow");
  const l = new U(), c = S.state([]);
  return S.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const d = i.val, g = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], w = It(t.frameResults.val);
    if (n.children.forEach((h) => {
      h.geometry && h.geometry.dispose(), h.material && h.material.dispose();
    }), n.clear(), !w || g.length === 0 || d.length === 0) {
      c.val = [];
      return;
    }
    const F = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, P = (_c = e.deformOutputs) == null ? void 0 : _c.val, X = [], C = [];
    for (let h = 0; h < g.length; h++) {
      if (g[h].length !== 2) continue;
      const M = Bt(w, h, F, P);
      M && (X.push(M[0], M[1]), C.push({ idx: h, vals: M }));
    }
    if (X.length === 0) {
      c.val = [];
      return;
    }
    const _ = Math.min(...X), p = Math.max(...X);
    r.setMin(_), r.setMax(p), c.val = X;
    const R = [1 / 0, 1 / 0, 1 / 0], E = [-1 / 0, -1 / 0, -1 / 0];
    for (const h of d) for (let x = 0; x < 3; x++) R[x] = Math.min(R[x], h[x]), E[x] = Math.max(E[x], h[x]);
    const z = Math.max(E[0] - R[0], E[1] - R[1], E[2] - R[2], 1) * Et, m = [], y = [], f = [];
    let s = 0;
    for (const { idx: h, vals: x } of C) {
      const M = g[h], Y = d[M[0]], b = d[M[1]];
      if (!Y || !b) continue;
      const A = new B(b[0] - Y[0], b[1] - Y[1], b[2] - Y[2]), I = A.length();
      if (I < 1e-10) continue;
      A.normalize();
      const Z = Math.abs(A.y) < 0.99 ? new B(0, 1, 0) : new B(1, 0, 0), T = new B().crossVectors(A, Z).normalize(), k = new B().crossVectors(A, T).normalize(), N = Fe + 1, W = Tt;
      for (let $ = 0; $ < N; $++) {
        const G = $ / Fe, O = Y[0] + A.x * I * G, ee = Y[1] + A.y * I * G, fe = Y[2] + A.z * I * G, we = x[0] + (x[1] - x[0]) * G, re = r.getColor(we) ?? new U(0, 0, 0);
        l.copy(re).convertSRGBToLinear();
        for (let ve = 0; ve < W; ve++) {
          const Pe = ve / W * Math.PI * 2, xe = Math.cos(Pe), be = Math.sin(Pe);
          m.push(O + (T.x * xe + k.x * be) * z, ee + (T.y * xe + k.y * be) * z, fe + (T.z * xe + k.z * be) * z), y.push(l.r, l.g, l.b);
        }
      }
      for (let $ = 0; $ < Fe; $++) for (let G = 0; G < W; G++) {
        const O = (G + 1) % W, ee = s + $ * W + G, fe = s + $ * W + O, we = s + ($ + 1) * W + G, re = s + ($ + 1) * W + O;
        f.push(ee, fe, re), f.push(ee, re, we);
      }
      s += N * W;
    }
    if (m.length === 0) return;
    const u = new L();
    u.setAttribute("position", new K(m, 3)), u.setAttribute("color", new K(y, 3)), u.setIndex(f), u.computeVertexNormals();
    const v = new J({ vertexColors: true, side: j }), a = new Q(u, v);
    a.frustumCulled = false, n.add(a);
  }), n.__colorMapValues = c, n;
}
function Re(e, t = 8) {
  const i = document.createElement("div");
  i.id = "legend";
  const o = document.createElement("div");
  o.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", i.appendChild(o), setTimeout(() => {
    S.derive(() => {
      o.textContent = Ce.val ? `[${Ce.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (d, g) => g / t).reverse();
  let r, l;
  n.forEach((d, g) => {
    r = document.createElement("div"), r.id = `marker-${g}`, r.className = "marker", r.style.marginTop = g == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, l = document.createElement("p"), l.id = `marker-text-${g}`, r.append(l), i.append(r);
  });
  const c = [];
  return i.querySelectorAll("p").forEach((d) => c.push(d)), setTimeout(() => {
    S.derive(() => {
      n.forEach((d, g) => {
        const w = c[g];
        w && (w.innerText = Zt(e.val, d).toString());
      });
    });
  }), i;
}
function Zt(e, t) {
  const i = Ye.val;
  if (i) return (i[0] + t * (i[1] - i[0])).toPrecision(3);
  const o = e.filter((l) => Number.isFinite(l));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const r = Math.max(...o);
  return n >= 0 && r > 0 && (n = 0), (n + t * (r - n)).toPrecision(3);
}
function qt({ mesh: e, settingsObj: t, drawingObj: i, objects3D: o, solids: n }) {
  at.DEFAULT_UP = new B(0, 0, 1);
  const r = document.createElement("div"), l = new je(), c = new et(45, 1, 0.1, 2 * 1e6), d = new tt(-10, 10, 10, -10, -1e3, 2e6);
  let g = c;
  const w = new nt({ antialias: true });
  w.localClippingEnabled = true;
  const F = new ot(c, w.domElement), P = new ye(new B(-1, 0, 0), 0), X = new ye(new B(0, -1, 0), 0), C = new ye(new B(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function _() {
    const a = window.__hekatanClip, h = [];
    a.enableX && (P.normal.set(a.invertX ? 1 : -1, 0, 0), P.constant = a.invertX ? -a.posX : a.posX, h.push(P)), a.enableY && (X.normal.set(0, a.invertY ? 1 : -1, 0), X.constant = a.invertY ? -a.posY : a.posY, h.push(X)), a.enableZ && (C.normal.set(0, 0, a.invertZ ? 1 : -1), C.constant = a.invertZ ? -a.posZ : a.posZ, h.push(C)), w.clippingPlanes = h, l.traverse((M) => {
      const Y = M;
      if (Y.material) {
        const b = Array.isArray(Y.material) ? Y.material : [Y.material];
        for (const A of b) A.clippingPlanes = h, A.needsUpdate = true;
      }
    });
    const x = window.__hekatanPanes ?? [];
    for (const M of x) try {
      M && typeof M.refresh == "function" && M.refresh();
    } catch {
    }
    w.render(l, g);
  }
  _(), window.__hekatanClipApply = _;
  const p = lt(t), R = S.derive(() => p.displayScale.val === 0 ? 1 : p.displayScale.val > 0 ? p.displayScale.val : -1 / p.displayScale.val), E = _t(e, p);
  let V = Ie(p.gridSize.rawVal);
  r.appendChild(rt(p, e, n)), r.setAttribute("id", "viewer"), r.appendChild(w.domElement), w.setPixelRatio(window.devicePixelRatio);
  const z = te();
  w.setClearColor(z.background, 1);
  const m = p.gridSize.rawVal, y = m * 0.5 + m * 0.5 / Math.tan(45 * 0.5);
  c.position.set(0.5 * m, 0.8 * -y, 0.5 * m), F.target.set(0.5 * m, 0.5 * m, 0), F.minDistance = 1, F.maxDistance = y * 2.5, r.__settings = p, F.zoomSpeed = 1, F._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, F.update(), l.add(V, vt(p.gridSize.rawVal, p.flipAxes.rawVal)), new ResizeObserver((a) => {
    var _a, _b;
    for (const h of a) {
      const x = (_a = h.target) == null ? void 0 : _a.clientWidth, M = (_b = h.target) == null ? void 0 : _b.clientHeight;
      if (x === 0 || M === 0) continue;
      c.aspect = x / M, c.updateProjectionMatrix();
      const Y = x / M, b = d.top;
      d.left = -b * Y, d.right = b * Y, d.updateProjectionMatrix(), w.setSize(x, M), s();
    }
  }).observe(r), F.addEventListener("change", s), S.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, p.displayScale.val, p.nodes.val, p.elements.val, (_g = p.edges) == null ? void 0 : _g.val, p.elemColumns.val, p.elemBeams.val, p.nodesIndexes.val, p.elementsIndexes.val, p.orientations.val, p.sections.val, p.secColumns.val, p.secBeams.val, p.secFloor.val, p.supports.val, p.loads.val, p.deformedShape.val, p.nodeResults.val, p.frameResults.val, p.shellResults.val, (_h = p.solidResults) == null ? void 0 : _h.val, setTimeout(s);
  });
  function s() {
    w.render(l, g);
  }
  function u(a) {
    g = a, F.object = a, F.update(), s();
  }
  if (e) {
    l.add(ct(p, E, R), dt(e, p, E), mt(p, E, R), ft(e, p, E, R), ht(e, p, E, R), pt(e, p, E, R), bt(e, p, E, R), yt(e, p, E, R), Ct(e, p, E, R), Mt(e, p, E, R));
    const a = Dt(e, p), h = zt(e, p, E, a), x = Re(a);
    l.add(h), r.appendChild(x);
    const M = Rt(e, p, E);
    l.add(M);
    const Y = M.__colorMapValues, b = Re(Y);
    b.id = "frame-legend", r.appendChild(b), S.derive(() => {
      var _a;
      const A = p.shellResults.val != "none", I = (((_a = p.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Z = A || I, T = p.frameResults.val.startsWith("contour:");
      x.hidden = !Z, h.visible = Z, b.hidden = !T;
    });
  }
  if (n) {
    const a = new st(16777215, 0.5);
    l.add(a);
    const h = new Ee(16777215, 0.5);
    h.position.set(30, 25, -10), h.shadow.mapSize.width = 1024, h.shadow.mapSize.height = 1024, l.add(h);
    const x = 10;
    h.shadow.camera.left = -x, h.shadow.camera.right = x, h.shadow.camera.top = x, h.shadow.camera.bottom = -x, h.shadow.camera.far = 1e3;
    const M = new Ee(16777215, 0.5);
    M.color.setHSL(11, 43, 96), M.position.set(-10, 0, 30), l.add(M), S.derive(() => {
      (n == null ? void 0 : n.val.length) && (l.remove(...n.oldVal), l.add(...n.rawVal), s());
    }), S.derive(() => {
      n.rawVal.forEach((Y) => Y.visible = p.solids.val), s();
    });
  }
  if (o) {
    const a = [], h = (M) => {
      var _a;
      return ((_a = M == null ? void 0 : M.userData) == null ? void 0 : _a.isCota) ? p.showCotas.val : p.custom3D.val;
    }, x = () => {
      for (const M of a) M.visible = h(M);
      s();
    };
    S.derive(() => {
      const M = o.val;
      a.length && (l.remove(...a), a.length = 0), M.length && (l.add(...M), a.push(...M), x()), s();
    }), S.derive(() => {
      p.custom3D.val, x();
    }), S.derive(() => {
      p.showCotas.val, x();
    });
  }
  i && At({ drawingObj: i, gridObj: V, scene: l, camera: c, controls: F, gridSize: m, derivedDisplayScale: R, rendererElm: w.domElement, viewerRender: s }), me((a, h) => {
    w.setClearColor(h.background, 1), l.remove(V), V.geometry.dispose(), V.material.dispose(), V = Ie(p.gridSize.rawVal), l.add(V), r.style.setProperty("--awatif-legend-color", h.legendMarker), s();
  });
  const v = { scene: l, perspCamera: c, orthoCamera: d, get camera() {
    return g;
  }, controls: F, renderer: w, rendererElm: w.domElement, render: s, setActiveCamera: u, settings: p };
  return r.__ctx = v, r;
}
function _t(e, t) {
  return S.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const i = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || i.length === 0) return i;
    const n = t.deformScale.val, r = t.deformScale.val * t.deformScaleZ.val, l = Number.isFinite(n) ? n : 1, c = Number.isFinite(r) ? r : 1;
    return i.map((d, g) => {
      var _a2;
      const w = ((_a2 = o.get(g)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], F = Number.isFinite(w[0]) ? w[0] : 0, P = Number.isFinite(w[1]) ? w[1] : 0, X = Number.isFinite(w[2]) ? w[2] : 0;
      return [d[0] + F * l, d[1] + P * l, d[2] + X * c];
    });
  });
}
const Ye = S.state(null), Ce = S.state(""), kt = S.state("kN"), Lt = S.state("mm"), Nt = S.state("kN/m\xB2"), Wt = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Ze = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, $t = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Dt(e, t) {
  const i = S.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), S.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), C = (N, W) => {
      N == null ? void 0 : N.forEach(($, G) => {
        const O = e.elements.val[G];
        if (O) for (let ee = 0; ee < O.length; ee++) W.set(O[ee], [$[ee] ?? $[0]]);
      });
    };
    C((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), C((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, r), C((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, l), C((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, c), C((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, d), C((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, g), C((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, w), C((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, F), C((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, P), C((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, X);
    const _ = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, p = (_w = t.solidResults) == null ? void 0 : _w.val, E = p && p !== "none" ? p : t.shellResults.val, V = _ == null ? void 0 : _[E], z = { bendingXX: [n, 0], bendingYY: [r, 0], bendingXY: [l, 0], membraneXX: [c, 0], membraneYY: [d, 0], membraneXY: [g, 0], tranverseShearX: [w, 0], tranverseShearY: [F, 0], vonMises: [P, 0], pressure: [X, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, m = t.shellResults.val, y = kt.val, f = Lt.val, s = m === "displacementX" || m === "displacementY" || m === "displacementZ", u = m === "bendingXX" || m === "bendingYY" || m === "bendingXY", v = m === "membraneXX" || m === "membraneYY" || m === "membraneXY", a = m === "vonMises" || m === "pressure", h = m === "tranverseShearX" || m === "tranverseShearY", x = (_D = t.solidResults) == null ? void 0 : _D.val, M = x === "vonMises" || x === "sigmaXX" || x === "sigmaYY" || x === "sigmaZZ" || x === "tauXY" || x === "tauYZ" || x === "tauXZ", Y = x === "ux" || x === "uy" || x === "uz", b = Nt.val, A = M ? $t[b] : Y || s ? Ze[f] : u || v || a || h ? 1 / Wt[y] : 1, I = M ? b : Y || s ? f : u ? `${y}\xB7m/m` : v ? `${y}/m\xB2` : a ? `${y}/m\xB2` : h ? `${y}/m` : "";
    Ce.val = I, Ye.val = Array.isArray(V) && V.length === 2 ? [V[0] * A, V[1] * A] : null;
    const T = x && x !== "none" ? [P, 0] : z[m], k = [];
    e.nodes.val.forEach((N, W) => {
      const $ = T;
      if (!$ || !$[0] || typeof $[0].has != "function") return;
      if (!$[0].has(W)) {
        k.push(Number.NaN);
        return;
      }
      const G = $[0].get(W), O = G ? G[$[1]] ?? 0 : 0;
      k.push(O * A);
    }), i.val = k;
  }), i;
}
export {
  Lt as a,
  Xt as b,
  kt as c,
  Re as d,
  Nt as e,
  qt as g
};
