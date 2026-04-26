var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { v as N, P as Tt, U as he, _ as Fe, B as V, $ as Re, F as te, Z as _e, G as se, d as bt, L as pe, e as re, D as le, b as ie, s as q, H as At, c as Et, V as X, y as ue, z as J, a0 as Ve, l as yt, a as we, f as K, h as ze, a1 as Oe, m as It, k as Mt, a2 as Dt, a3 as Ft, a4 as rt, a5 as Ie, a6 as Rt, a7 as zt, r as Ot, t as Nt, u as Lt, W as Pt, w as Ht, I as We, A as jt, x as lt, O as Yt, a8 as Xt, Y as Bt } from "./Text-CSfbf1xJ.js";
function Vt(b, e, t) {
  const s = document.createElement("div"), i = new Tt({ title: "Settings", expanded: true, container: s });
  if (s.setAttribute("id", "settings"), (e == null ? void 0 : e.nodes) && (i.addBinding(b.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), i.addBinding(b.deformScale, "val", { label: "Deform scale XY", min: 0.1, max: 5e3, step: 0.1 }), i.addBinding(b.deformScaleZ, "val", { label: "Deform scale Z", min: 0.01, max: 10, step: 0.01 }), i.addBinding(b.nodes, "val", { label: "Nodes" }), i.addBinding(b.elements, "val", { label: "Elements" }), i.addBinding(b.elemColumns, "val", { label: "  Columnas" }), i.addBinding(b.elemBeams, "val", { label: "  Vigas" }), i.addBinding(b.nodesIndexes, "val", { label: "Nodes indexes" }), i.addBinding(b.elementsIndexes, "val", { label: "Elements indexes" }), i.addBinding(b.orientations, "val", { label: "Orientations" }), i.addBinding(b.sections, "val", { label: "Sections" }), i.addBinding(b.secColumns, "val", { label: "  Sec. Columnas" }), i.addBinding(b.secBeams, "val", { label: "  Sec. Vigas" }), i.addBinding(b.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (e == null ? void 0 : e.nodeInputs) || (e == null ? void 0 : e.elementInputs)) {
    const h = i.addFolder({ title: "Analysis Inputs" });
    h.addBinding(b.supports, "val", { label: "Supports" }), h.addBinding(b.loads, "val", { label: "Loads" }), h.addBinding(b.custom3D, "val", { label: "Resortes (Winkler)" }), h.addBinding(b.showCotas, "val", { label: "Cotas" });
  }
  if ((e == null ? void 0 : e.deformOutputs) || (e == null ? void 0 : e.analyzeOutputs)) {
    const h = i.addFolder({ title: "Analysis Outputs" });
    h.addBinding(b.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), h.addBinding(b.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), h.addBinding(b.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), h.addBinding(b.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), h.addBinding(b.deformedShape, "val", { label: "Deformed shape" });
  }
  t && i.addBinding(b.solids, "val", { label: "Solids" });
  const n = i.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), r = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), l = () => {
    const h = window.__hekatanClipApply;
    typeof h == "function" && h();
  };
  return n.addBinding(r, "enableX", { label: "Cortar X" }).on("change", l), n.addBinding(r, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X" }).on("change", l), n.addBinding(r, "invertX", { label: "  inv X" }).on("change", l), n.addBinding(r, "enableY", { label: "Cortar Y" }).on("change", l), n.addBinding(r, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y" }).on("change", l), n.addBinding(r, "invertY", { label: "  inv Y" }).on("change", l), n.addBinding(r, "enableZ", { label: "Cortar Z" }).on("change", l), n.addBinding(r, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z" }).on("change", l), n.addBinding(r, "invertZ", { label: "  inv Z" }).on("change", l), s;
}
function Wt(b) {
  return { gridSize: N.state((b == null ? void 0 : b.gridSize) ?? 20), displayScale: N.state((b == null ? void 0 : b.displayScale) ?? 1), nodes: N.state((b == null ? void 0 : b.nodes) ?? true), elements: N.state((b == null ? void 0 : b.elements) ?? true), elemColumns: N.state((b == null ? void 0 : b.elemColumns) ?? true), elemBeams: N.state((b == null ? void 0 : b.elemBeams) ?? true), nodesIndexes: N.state((b == null ? void 0 : b.nodesIndexes) ?? false), elementsIndexes: N.state((b == null ? void 0 : b.elementsIndexes) ?? false), orientations: N.state((b == null ? void 0 : b.orientations) ?? false), sections: N.state((b == null ? void 0 : b.sections) ?? true), secColumns: N.state((b == null ? void 0 : b.secColumns) ?? true), secBeams: N.state((b == null ? void 0 : b.secBeams) ?? true), secFloor: N.state((b == null ? void 0 : b.secFloor) ?? -1), supports: N.state((b == null ? void 0 : b.supports) ?? true), loads: N.state((b == null ? void 0 : b.loads) ?? false), deformedShape: N.state((b == null ? void 0 : b.deformedShape) ?? false), nodeResults: N.state((b == null ? void 0 : b.nodeResults) ?? "none"), frameResults: N.state((b == null ? void 0 : b.frameResults) ?? "none"), shellResults: N.state((b == null ? void 0 : b.shellResults) ?? "none"), solidResults: N.state((b == null ? void 0 : b.solidResults) ?? "none"), flipAxes: N.state((b == null ? void 0 : b.flipAxes) ?? false), solids: N.state((b == null ? void 0 : b.solids) ?? true), custom3D: N.state((b == null ? void 0 : b.custom3D) ?? true), showCotas: N.state((b == null ? void 0 : b.showCotas) ?? true), deformScale: N.state((b == null ? void 0 : b.deformScale) ?? 1), deformScaleZ: N.state((b == null ? void 0 : b.deformScaleZ) ?? 1) };
}
function Ut(b, e, t) {
  const s = he(), i = new Fe(new V(), new Re({ color: s.nodePoint }));
  return _e((n, r) => {
    i.material.color.setHex(r.nodePoint);
  }), i.frustumCulled = false, N.derive(() => {
    b.nodes.val && i.geometry.setAttribute("position", new te(e.val.flat(), 3));
  }), N.derive(() => {
    t.val;
    const n = 0.05 * b.gridSize.val * 0.5;
    b.nodes.rawVal && (i.material.size = n * t.rawVal);
  }), N.derive(() => {
    i.visible = b.nodes.val;
  }), i;
}
function Zt(b, e, t) {
  const s = he(), i = new se(), n = new bt(new V(), new pe({ color: s.elementLine }));
  _e((u, f) => {
    n.material.color.setHex(f.elementLine);
  }), n.frustumCulled = false, i.add(n);
  const r = new re({ vertexColors: true, transparent: true, opacity: s.shellOpacity, side: le, depthWrite: false }), l = new ie(new V(), r);
  l.frustumCulled = false, i.add(l);
  let h = new q(s.shellWall), o = new q(s.shellSlab), c = new q(s.shellTri);
  _e((u, f) => {
    h = new q(f.shellWall), o = new q(f.shellSlab), c = new q(f.shellTri), r.opacity = f.shellOpacity, r.needsUpdate = true;
  });
  function d(u, f) {
    const m = Math.abs(f[0] - u[0]), w = Math.abs(f[1] - u[1]), g = Math.abs(f[2] - u[2]);
    return g > m && g > w || w > m && w > g;
  }
  return N.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const u = e.elemColumns.rawVal, f = e.elemBeams.rawVal, m = t.val, w = ((_a = b.elements) == null ? void 0 : _a.val) || [], g = w.filter((S) => {
      if (S.length !== 2) return true;
      const $ = m[S[0]], I = m[S[1]];
      if (!$ || !I) return true;
      const A = d($, I);
      return !(A && !u || !A && !f);
    }).map((S) => Kt(S).map(($) => [...m[$[0]], ...m[$[1]]]).flat()).flat();
    n.geometry.setAttribute("position", new te(g, 3));
    const v = [], k = [];
    function x(S, $, I, A) {
      const _ = [$[0] - S[0], $[1] - S[1], $[2] - S[2]], E = [A[0] - S[0], A[1] - S[1], A[2] - S[2]], C = _[1] * E[2] - _[2] * E[1], y = _[2] * E[0] - _[0] * E[2], T = _[0] * E[1] - _[1] * E[0], M = Math.sqrt(C * C + y * y + T * T);
      return M < 1e-12 ? false : Math.abs(T / M) < 0.5;
    }
    for (const S of w) if (S.length === 3) {
      const [$, I, A] = S;
      if (m[$] && m[I] && m[A]) {
        v.push(...m[$], ...m[I], ...m[A]);
        for (let _ = 0; _ < 3; _++) k.push(c.r, c.g, c.b);
      }
    } else if (S.length === 4) {
      const [$, I, A, _] = S;
      if (m[$] && m[I] && m[A] && m[_]) {
        const E = x(m[$], m[I], m[A], m[_]) ? h : o;
        v.push(...m[$], ...m[I], ...m[A]), v.push(...m[$], ...m[A], ...m[_]);
        for (let C = 0; C < 6; C++) k.push(E.r, E.g, E.b);
      }
    }
    v.length > 0 ? (l.geometry.dispose(), l.geometry = new V(), l.geometry.setAttribute("position", new te(v, 3)), l.geometry.setAttribute("color", new te(k, 3)), l.geometry.computeVertexNormals(), l.visible = true) : l.visible = false;
  }), N.derive(() => {
    i.visible = e.elements.val;
  }), i;
}
function Kt(b) {
  if (b.length === 2) return [b];
  const e = [];
  for (let t = 0; t < b.length; t++) e.push([b[t], b[(t + 1) % b.length]]);
  return e;
}
function at(b) {
  const e = he(), t = new At(b, 20, e.grid, e.grid);
  return t.position.set(0.5 * b, 0.5 * b, 0), t.rotateX(Math.PI / 2), t;
}
function Gt(b, e, t, s) {
  const i = new se(), n = new Et(0.5, 0.5, 0.5), r = new re({ color: 10166822 });
  return N.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    i.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = b.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((h, o) => {
      const c = t.val[o];
      if (!c) return;
      const d = new ie(n, r);
      d.position.set(...c);
      const u = l * s.rawVal;
      d.scale.set(u, u, u), i.add(d);
    });
  }), N.derive(() => {
    if (s.val, !e.supports.rawVal) return;
    const h = 0.05 * e.gridSize.val * 0.6 * s.rawVal;
    i.children.forEach((o) => o.scale.set(h, h, h));
  }), N.derive(() => {
    i.visible = e.supports.val;
  }), i;
}
function qt(b, e, t, s) {
  const i = new se();
  i.name = "loadsGroup";
  function n(r) {
    if (r.length < 2) return 0.12 * e.gridSize.rawVal;
    const l = [1 / 0, 1 / 0, 1 / 0], h = [-1 / 0, -1 / 0, -1 / 0];
    for (const c of r) for (let d = 0; d < 3; d++) l[d] = Math.min(l[d], c[d]), h[d] = Math.max(h[d], c[d]);
    return 0.08 * Math.max(h[0] - l[0], h[1] - l[1], h[2] - l[2], 0.1);
  }
  return N.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    i.children.forEach((h) => h.dispose()), i.clear();
    const r = t.val, l = n(r);
    (_c = (_b = (_a = b.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((h, o) => {
      const c = r[o];
      if (!c) return;
      const d = new X(...h.slice(0, 3));
      if (d.lengthSq() < 1e-30) return;
      d.normalize();
      const u = new ue(d, new X(...c), 1, 15637248, 0.3, 0.3), f = l * s.rawVal;
      u.scale.set(f, f, f), i.add(u);
    });
  }), N.derive(() => {
    if (s.val, !e.loads.rawVal) return;
    const l = n(t.rawVal) * s.rawVal;
    i.children.forEach((h) => h.scale.set(l, l, l));
  }), N.derive(() => {
    i.visible = e.loads.val;
  }), i;
}
function Jt(b, e, t) {
  const s = new se();
  return N.derive(() => {
    if (!b.nodesIndexes.val) return;
    s.children.forEach((n) => n.dispose()), s.clear();
    const i = 0.05 * b.gridSize.val * 0.6;
    e.val.forEach((n, r) => {
      const l = new J(`${r}`);
      l.position.set(...n), l.updateScale(i * t.rawVal), s.add(l);
    });
  }), N.derive(() => {
    if (t.val, !b.nodesIndexes.rawVal) return;
    const i = 0.05 * b.gridSize.val * 0.6;
    s.children.forEach((n) => n.updateScale(i * t.rawVal));
  }), N.derive(() => {
    s.visible = b.nodesIndexes.val;
  }), s;
}
function Qt(b, e, t, s) {
  const i = new se();
  return N.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    i.children.forEach((r) => r.dispose()), i.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    (_a = b.elements) == null ? void 0 : _a.val.forEach((r, l) => {
      const h = new J(`${l}`, void 0, "#001219");
      h.position.set(...es(r.map((o) => t.rawVal[o]))), h.updateScale(n * s.rawVal), i.add(h);
    });
  }), N.derive(() => {
    if (s.val, !e.elementsIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    i.children.forEach((r) => r.updateScale(n * s.rawVal));
  }), N.derive(() => {
    i.visible = e.elementsIndexes.val;
  }), i;
}
function es(b) {
  const e = b.reduce((s, i) => [s[0] + i[0], s[1] + i[1], s[2] + i[2]], [0, 0, 0]), t = b.length;
  return [e[0] / t, e[1] / t, e[2] / t];
}
function ts(b, e) {
  const t = new se(), s = 0.05 * b * 1, i = he(), n = new J("X", "red", "transparent"), r = new J(e ? "Z" : "Y", "green", "transparent"), l = new J(e ? "Y" : "Z", "blue", "transparent"), h = new ue(new X(1, 0, 0), new X(0, 0, 0), 1, i.axisArrow, 0.2, 0.2), o = new ue(new X(0, 1, 0), new X(0, 0, 0), 1, i.axisArrow, 0.2, 0.2), c = new ue(new X(0, 0, 1), new X(0, 0, 0), 1, i.axisArrow, 0.2, 0.2);
  return n.position.set(1.3 * s, 0, 0), r.position.set(0, 1.3 * s, 0), l.position.set(0, 0, 1.3 * s), n.updateScale(0.4 * s), r.updateScale(0.4 * s), l.updateScale(0.4 * s), h.scale.set(s, s, s), o.scale.set(s, s, s), c.scale.set(s, s, s), t.add(h, o, c, n, r, l), t;
}
function Qe(b, e) {
  const t = new X(...b), i = new X(...e).clone().sub(t), n = i.length(), r = i.dot(new X(1, 0, 0)) / n, l = i.dot(new X(0, 1, 0)) / n, h = i.dot(new X(0, 0, 1)) / n, o = Math.sqrt(r ** 2 + l ** 2);
  let c = new Ve().fromArray([[r, l, h], [-l / o, r / o, 0], [-r * h / o, -l * h / o, o]].flat());
  return h === 1 && (c = new Ve().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), h === -1 && (c = new Ve().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new yt().setFromMatrix3(c);
}
function qe(b, e) {
  return b == null ? void 0 : b.map((t, s) => (9 * t + e[s]) / 10);
}
function xe(b) {
  const e = b.reduce((s, i) => [s[0] + i[0], s[1] + i[1], s[2] + i[2]], [0, 0, 0]), t = b.length;
  return [e[0] / t, e[1] / t, e[2] / t];
}
function ss(b, e, t) {
  const s = xe([e, t]), i = xe([b, t]), n = xe([b, e]), r = new X(...s).sub(new X(...i)).normalize(), l = new X(...t).sub(new X(...n)).normalize(), h = r.clone().cross(l).normalize(), o = h.clone().cross(r).normalize();
  return new yt().makeBasis(r, o, h);
}
function is(b, e, t, s) {
  const i = new se(), n = new V(), r = new pe({ vertexColors: true }), l = [0, 0, 0], h = [1, 0, 0], o = [0, 1, 0], c = [0, 0, 1];
  n.setAttribute("position", new te([...l, ...h, ...l, ...o, ...l, ...c], 3));
  const d = [255, 0, 0], u = [0, 255, 0], f = [0, 0, 255];
  return n.setAttribute("color", new te([...d, ...d, ...u, ...u, ...f, ...f], 3)), N.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (i.clear(), (_a = b.elements) == null ? void 0 : _a.val.forEach((m) => {
      const w = new bt(n, r), g = t.rawVal[m[0]], v = t.rawVal[m[1]];
      if (m.length === 2 && (w.position.set(...qe(g, v)), w.rotation.setFromRotationMatrix(Qe(g, v))), m.length === 3) {
        const S = t.rawVal[m[2]];
        w.position.set(...xe([g, v, S])), w.rotation.setFromRotationMatrix(ss(g, v, S));
      }
      const x = 0.05 * e.gridSize.rawVal * 0.75 * s.rawVal;
      w.scale.set(x, x, x), i.add(w);
    }));
  }), N.derive(() => {
    if (s.val, !e.orientations.rawVal) return;
    const w = 0.05 * e.gridSize.val * 0.75 * s.rawVal;
    i.children.forEach((g) => g.scale.set(w, w, w));
  }), N.derive(() => {
    i.visible = e.orientations.val;
  }), i;
}
function ns(b) {
  if (b.name) return b.name;
  if (b.type === "rect") {
    const e = (b.b * 100).toFixed(0), t = (b.h * 100).toFixed(0);
    return `${e}x${t}`;
  }
  return b.type === "circ" ? `D${(b.d * 100).toFixed(0)}` : "";
}
function rs(b, e, t, s) {
  const i = new se();
  function n($, I) {
    const A = $ / 2, _ = I / 2, E = new Float32Array([0, -A, -_, 0, A, -_, 0, A, _, 0, -A, -_, 0, A, _, 0, -A, _]), C = new V();
    C.setAttribute("position", new K(E, 3));
    const y = new Float32Array([0, -A, -_, 0, A, -_, 0, A, _, 0, -A, _, 0, -A, -_]), T = new V();
    return T.setAttribute("position", new K(y, 3)), { fill: C, outline: T };
  }
  function r($, I = 24) {
    const A = $ / 2, _ = new Float32Array(I * 9);
    for (let T = 0; T < I; T++) {
      const M = T / I * Math.PI * 2, R = (T + 1) / I * Math.PI * 2;
      _[T * 9] = 0, _[T * 9 + 1] = 0, _[T * 9 + 2] = 0, _[T * 9 + 3] = 0, _[T * 9 + 4] = A * Math.cos(M), _[T * 9 + 5] = A * Math.sin(M), _[T * 9 + 6] = 0, _[T * 9 + 7] = A * Math.cos(R), _[T * 9 + 8] = A * Math.sin(R);
    }
    const E = new V();
    E.setAttribute("position", new K(_, 3));
    const C = new Float32Array((I + 1) * 3);
    for (let T = 0; T <= I; T++) {
      const M = T / I * Math.PI * 2;
      C[T * 3] = 0, C[T * 3 + 1] = A * Math.cos(M), C[T * 3 + 2] = A * Math.sin(M);
    }
    const y = new V();
    return y.setAttribute("position", new K(C, 3)), { fill: E, outline: y };
  }
  function l($, I, A, _) {
    const E = A ?? I * 0.08, C = _ ?? $ * 0.07, y = $ / 2, T = I / 2, M = T - E, R = C / 2, H = [];
    function z(F, O, Y, j) {
      H.push(0, F, O, 0, Y, O, 0, Y, j, 0, F, O, 0, Y, j, 0, F, j);
    }
    z(-y, -T, y, -M), z(-R, -M, R, M), z(-y, M, y, T);
    const L = new V();
    L.setAttribute("position", new K(new Float32Array(H), 3));
    const D = new Float32Array([0, -y, -T, 0, y, -T, 0, y, -M, 0, R, -M, 0, R, M, 0, y, M, 0, y, T, 0, -y, T, 0, -y, M, 0, -R, M, 0, -R, -M, 0, -y, -M, 0, -y, -T]), P = new V();
    return P.setAttribute("position", new K(D, 3)), { fill: L, outline: P };
  }
  function h($, I, A) {
    const _ = $ / 2, E = I / 2, C = _ - A, y = E - A, T = [];
    function M(L, D, P, F) {
      T.push(0, L, D, 0, P, D, 0, P, F, 0, L, D, 0, P, F, 0, L, F);
    }
    M(-_, -E, _, -y), M(-_, y, _, E), M(-_, -y, -C, y), M(C, -y, _, y);
    const R = new V();
    R.setAttribute("position", new K(new Float32Array(T), 3));
    const H = new Float32Array([0, -_, -E, 0, _, -E, 0, _, -E, 0, _, E, 0, _, E, 0, -_, E, 0, -_, E, 0, -_, -E, 0, -C, -y, 0, C, -y, 0, C, -y, 0, C, y, 0, C, y, 0, -C, y, 0, -C, y, 0, -C, -y]), z = new V();
    return z.setAttribute("position", new K(H, 3)), { fill: R, outline: z };
  }
  function o($, I, A) {
    const _ = $ / 2, E = I / 2, C = _ - A, y = E - A, T = new V(), M = new Float32Array([0, -C, -y, 0, C, -y, 0, C, y, 0, -C, -y, 0, C, y, 0, -C, y]);
    T.setAttribute("position", new K(M, 3));
    const R = [];
    function H(P, F, O, Y) {
      R.push(0, P, F, 0, O, F, 0, O, Y, 0, P, F, 0, O, Y, 0, P, Y);
    }
    H(-_, -E, _, -y), H(-_, y, _, E), H(-_, -y, -C, y), H(C, -y, _, y);
    const z = new V();
    z.setAttribute("position", new K(new Float32Array(R), 3));
    const L = new Float32Array([0, -_, -E, 0, _, -E, 0, _, -E, 0, _, E, 0, _, E, 0, -_, E, 0, -_, E, 0, -_, -E, 0, -C, -y, 0, C, -y, 0, C, -y, 0, C, y, 0, C, y, 0, -C, y, 0, -C, y, 0, -C, -y]), D = new V();
    return D.setAttribute("position", new K(L, 3)), { concFill: T, steelFillGeom: z, outline: D };
  }
  function c($, I, A) {
    const _ = [], E = [[0, -$ / 2, -I / 2], [0, -$ / 2 + A, -I / 2], [0, -$ / 2 + A, I / 2 - A], [0, $ / 2, I / 2 - A], [0, $ / 2, I / 2], [0, -$ / 2, I / 2]], C = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const R of C) _.push(...E[R]);
    const y = new V();
    y.setAttribute("position", new K(new Float32Array(_), 3));
    const T = [];
    for (let R = 0; R < E.length; R++) {
      const H = (R + 1) % E.length;
      T.push(...E[R], ...E[H]);
    }
    const M = new V();
    return M.setAttribute("position", new K(new Float32Array(T), 3)), { fill: y, outline: M };
  }
  function d($, I, A, _) {
    const E = _ / 2, C = [], y = [[0, -$ - E, -I / 2], [0, -A - E, -I / 2], [0, -A - E, I / 2 - A], [0, -E, I / 2 - A], [0, -E, I / 2], [0, -$ - E, I / 2]], T = [[0, E, -I / 2], [0, E + A, -I / 2], [0, E + A, I / 2 - A], [0, $ + E, I / 2 - A], [0, $ + E, I / 2], [0, E, I / 2]], M = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const L of M) C.push(...y[L]);
    for (const L of M) C.push(...T[L]);
    const R = new V();
    R.setAttribute("position", new K(new Float32Array(C), 3));
    const H = [];
    for (const L of [y, T]) for (let D = 0; D < L.length; D++) {
      const P = (D + 1) % L.length;
      H.push(...L[D], ...L[P]);
    }
    const z = new V();
    return z.setAttribute("position", new K(new Float32Array(H), 3)), { fill: R, outline: z };
  }
  function u($, I, A, _) {
    const E = I / 2, C = $, y = [[0, -C, -E], [0, -C, -E + A], [0, -_, -E + A], [0, -_, E - A], [0, -C, E - A], [0, -C, E], [0, 0, E], [0, 0, -E]], T = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], M = [];
    for (const L of T) M.push(...y[L]);
    const R = new V();
    R.setAttribute("position", new K(new Float32Array(M), 3));
    const H = [];
    for (let L = 0; L < y.length; L++) {
      const D = (L + 1) % y.length;
      H.push(...y[L], ...y[D]);
    }
    const z = new V();
    return z.setAttribute("position", new K(new Float32Array(H), 3)), { fill: R, outline: z };
  }
  function f($, I, A, _, E) {
    const C = I / 2, y = E / 2, T = [], M = [[0, -$, -C], [0, -$, -C + A], [0, -y - _, -C + A], [0, -y - _, C - A], [0, -$, C - A], [0, -$, C], [0, -y, C], [0, -y, -C]], R = M.map((P) => [P[0], -P[1], P[2]]), H = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const P of H) T.push(...M[P]);
    for (const P of H) T.push(...R[P]);
    const z = new V();
    z.setAttribute("position", new K(new Float32Array(T), 3));
    const L = [];
    for (const P of [M, R]) for (let F = 0; F < P.length; F++) {
      const O = (F + 1) % P.length;
      L.push(...P[F], ...P[O]);
    }
    const D = new V();
    return D.setAttribute("position", new K(new Float32Array(L), 3)), { fill: z, outline: D };
  }
  function m($, I, A, _) {
    const E = $ / 2, C = I / 2, y = _ / 2, T = [[0, -y, -C], [0, y, -C], [0, y, C - A], [0, E, C - A], [0, E, C], [0, -E, C], [0, -E, C - A], [0, -y, C - A]], M = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], R = [];
    for (const D of M) R.push(...T[D]);
    const H = new V();
    H.setAttribute("position", new K(new Float32Array(R), 3));
    const z = [];
    for (let D = 0; D < T.length; D++) {
      const P = (D + 1) % T.length;
      z.push(...T[D], ...T[P]);
    }
    const L = new V();
    return L.setAttribute("position", new K(new Float32Array(z), 3)), { fill: H, outline: L };
  }
  function w($, I, A = 24) {
    const _ = $ / 2, E = _ - I, C = [];
    for (let R = 0; R < A; R++) {
      const H = R / A * Math.PI * 2, z = (R + 1) / A * Math.PI * 2, L = Math.cos(H), D = Math.sin(H), P = Math.cos(z), F = Math.sin(z);
      C.push(0, _ * L, _ * D, 0, _ * P, _ * F, 0, E * P, E * F), C.push(0, _ * L, _ * D, 0, E * P, E * F, 0, E * L, E * D);
    }
    const y = new V();
    y.setAttribute("position", new K(new Float32Array(C), 3));
    const T = [];
    for (let R = 0; R < A; R++) {
      const H = R / A * Math.PI * 2, z = (R + 1) / A * Math.PI * 2;
      T.push(0, _ * Math.cos(H), _ * Math.sin(H), 0, _ * Math.cos(z), _ * Math.sin(z)), T.push(0, E * Math.cos(H), E * Math.sin(H), 0, E * Math.cos(z), E * Math.sin(z));
    }
    const M = new V();
    return M.setAttribute("position", new K(new Float32Array(T), 3)), { fill: y, outline: M };
  }
  const g = new re({ color: 52479, transparent: true, opacity: 0.35, side: le, depthWrite: false }), v = new pe({ color: 52479 }), k = new re({ color: 16750848, transparent: true, opacity: 0.4, side: le, depthWrite: false }), x = new pe({ color: 16750848 });
  function S($, I) {
    const A = Math.abs(I[0] - $[0]), _ = Math.abs(I[1] - $[1]), E = Math.abs(I[2] - $[2]);
    return E > A && E > _ || _ > A && _ > E;
  }
  return N.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const $ = e.secColumns.rawVal, I = e.secBeams.rawVal;
    if (!$ && !I) {
      i.children.forEach((y) => {
        y instanceof J && y.dispose();
      }), i.clear();
      return;
    }
    i.children.forEach((y) => {
      y instanceof J && y.dispose();
    }), i.clear();
    const A = (_a = b.elements) == null ? void 0 : _a.val, _ = (_b = b.elementInputs) == null ? void 0 : _b.val;
    if (!A || !_) return;
    const E = _.sectionShapes, C = e.secFloor.rawVal;
    A.forEach((y, T) => {
      if (y.length !== 2) return;
      const M = t.rawVal[y[0]], R = t.rawVal[y[1]];
      if (!M || !R) return;
      const H = S(M, R);
      if (H && !$ || !H && !I) return;
      if (C >= 0) {
        const F = Math.min(M[1], R[1]);
        Math.max(M[1], R[1]);
        const O = e.gridSize.rawVal || 3;
        if (Math.floor(F / O + 0.01) !== C) return;
      }
      const z = E == null ? void 0 : E.get(T);
      if (!z) return;
      const L = [(M[0] + R[0]) / 2, (M[1] + R[1]) / 2, (M[2] + R[2]) / 2], D = Qe(M, R);
      if (z.type === "CFT") {
        const F = o(z.b, z.h, z.tw ?? z.b * 0.05), O = new ie(F.concFill, g);
        O.position.set(...L), O.rotation.setFromRotationMatrix(D), i.add(O);
        const Y = new ie(F.steelFillGeom, k);
        Y.position.set(...L), Y.rotation.setFromRotationMatrix(D), i.add(Y);
        const j = new we(F.outline, x);
        j.position.set(...L), j.rotation.setFromRotationMatrix(D), i.add(j);
      } else {
        let F, O, Y;
        switch (z.type) {
          case "rect":
            F = n(z.b, z.h), O = g, Y = v;
            break;
          case "circ":
            F = r(z.d), O = g, Y = v;
            break;
          case "I":
            F = l(z.b, z.h, z.tf, z.tw), O = k, Y = x;
            break;
          case "HSS":
            F = h(z.b, z.h, z.tw ?? z.b * 0.05), O = k, Y = x;
            break;
          case "CFT":
            F = o(z.b, z.h, z.tw ?? z.b * 0.05), O = k, Y = x;
            break;
          case "L":
            F = c(z.b ?? z.h, z.h, z.t ?? z.tw ?? 3e-3), O = k, Y = x;
            break;
          case "2L":
            F = d(z.b ?? z.h, z.h, z.t ?? z.tw ?? 3e-3, z.dis ?? 0.01), O = k, Y = x;
            break;
          case "C":
          case "coldC":
            F = u(z.b, z.h, z.tf ?? z.t ?? 3e-3, z.tw ?? z.t ?? 3e-3), O = k, Y = x;
            break;
          case "2C":
            F = f(z.b, z.h, z.tf ?? 5e-3, z.tw ?? 5e-3, z.dis ?? 0.01), O = k, Y = x;
            break;
          case "T":
            F = m(z.b, z.h, z.tf ?? 0.01, z.tw ?? 6e-3), O = k, Y = x;
            break;
          case "pipe":
            F = w(z.d, z.tw ?? z.d * 0.05), O = k, Y = x;
            break;
          default:
            return;
        }
        const j = new ie(F.fill, O);
        j.position.set(...L), j.rotation.setFromRotationMatrix(D), i.add(j);
        const U = new we(F.outline, Y);
        U.position.set(...L), U.rotation.setFromRotationMatrix(D), i.add(U);
      }
      const P = ns(z);
      if (P) {
        const O = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(z.type) ? "#ff9900" : "#00ccff", Y = new J(P, O, "transparent");
        Y.position.set(L[0], L[1], L[2]);
        const j = 0.05 * e.gridSize.rawVal * 0.5;
        Y.updateScale(j * ((s == null ? void 0 : s.rawVal) ?? 1)), i.add(Y);
      }
    });
  }), s && N.derive(() => {
    if (s.val, !e.sections.rawVal) return;
    const $ = 0.05 * e.gridSize.val * 0.5;
    i.children.forEach((I) => {
      I instanceof J && I.updateScale($ * s.rawVal);
    });
  }), N.derive(() => {
    i.visible = e.sections.val;
  }), i;
}
class Me extends se {
  constructor(e, t, s, i, n, r, l) {
    super();
    const h = new ze().moveTo(0, 0).lineTo(0, r[1]).lineTo(s, r[1]).lineTo(s, 0).lineTo(0, 0), o = h.getPoints(), c = new V().setFromPoints(o);
    this.lines = new we(c, new pe({ color: he().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(i), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const d = new Oe(h), u = new re({ color: r[1] > 0 ? 24435 : 11411474, side: le });
    this.mesh = new ie(d, u), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(i), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new J(`${n[1].toFixed(4)}`), this.normalizedResult = r, this.textPosition = xe([e, t]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(i), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class ot extends se {
  constructor(e, t, s, i, n, r, l) {
    super();
    const h = n[0] * s / (n[0] + n[1]), o = n[0] * n[1] > 0;
    if (this.text = new J(`${n[0].toFixed(4)}`), this.text2 = new J(`${(n[1] * -1).toFixed(4)}`), this.normalizedResult = r, this.textPosition = qe(e, t), this.text2Position = qe(t, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(i), this.text2.rotation.setFromRotationMatrix(i), this.add(this.text, this.text2), o) {
      const c = new ze().moveTo(0, 0).lineTo(0, r[0]).lineTo(h, 0).lineTo(0, 0), d = new ze().moveTo(h, 0).lineTo(s, -r[1]).lineTo(s, 0).lineTo(h, 0), u = c.getPoints(), f = d.getPoints(), m = new V().setFromPoints(u), w = new V().setFromPoints(f), g = new pe({ color: he().resultOutline });
      this.lines = new we(m, g), this.lines2 = new we(w, g), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(i), this.lines2.rotation.setFromRotationMatrix(i), l && this.lines.rotateX(Math.PI / 2), l && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const v = new Oe(c), k = new Oe(d), x = new re({ color: r[0] > 0 ? 24435 : 11411474, side: le }), S = new re({ color: -r[1] > 0 ? 24435 : 11411474, side: le });
      this.mesh = new ie(v, x), this.mesh2 = new ie(k, S), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(i), this.mesh2.rotation.setFromRotationMatrix(i), l && this.mesh.rotateX(Math.PI / 2), l && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const c = new ze().moveTo(0, 0).lineTo(0, r[0]).lineTo(s, -r[1]).lineTo(s, 0).lineTo(0, 0), d = c.getPoints(), u = new V().setFromPoints(d);
      this.lines = new we(u, new pe({ color: he().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(i), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const f = new Oe(c), m = new re({ color: r[0] > 0 ? 24435 : 11411474, side: le });
      this.mesh = new ie(f, m), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(i), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(e) {
    var _a, _b;
    this.lines.scale.set(1, e * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text2.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * e), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    var _a, _b, _c, _d, _e2, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e2 = this.mesh2) == null ? void 0 : _e2.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var xt = ((b) => (b.normals = "normals", b.shearsY = "shearsY", b.shearsZ = "shearsZ", b.torsions = "torsions", b.bendingsY = "bendingsY", b.bendingsZ = "bendingsZ", b))(xt || {});
function ls(b, e, t, s) {
  const i = new se(), n = { normals: Me, shearsY: Me, shearsZ: Me, torsions: Me, bendingsY: ot, bendingsZ: ot };
  return N.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, t.val, e.frameResults.val == "none") return;
    i.children.forEach((l) => l.dispose()), i.clear();
    const r = xt[e.frameResults.rawVal];
    (_b = (_a = b.analyzeOutputs) == null ? void 0 : _a.rawVal[r]) == null ? void 0 : _b.forEach((l, h) => {
      var _a2, _b2;
      const o = ((_a2 = b.elements) == null ? void 0 : _a2.rawVal[h]) ?? [0, 1], c = t.rawVal[o[0]], d = t.rawVal[o[1]], u = new X(...d).distanceTo(new X(...c)), f = as((_b2 = b.analyzeOutputs) == null ? void 0 : _b2.rawVal[r]), m = l == null ? void 0 : l.map((k) => k / (f === 0 ? 1 : f)), w = Qe(c, d), g = new n[r](c, d, u, w, l ?? [0, 0], m ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(r)), v = 0.05 * e.gridSize.rawVal;
      g.updateScale(v * s.rawVal), i.add(g);
    });
  }), N.derive(() => {
    if (s.val, e.frameResults.rawVal == "none") return;
    const r = 0.05 * e.gridSize.val;
    i.children.forEach((l) => l.updateScale(r * s.rawVal));
  }), N.derive(() => {
    i.visible = e.frameResults.val != "none";
  }), i;
}
function as(b) {
  let e = 0;
  return b == null ? void 0 : b.forEach((t) => {
    const s = Math.max(...t ?? [0, 0]);
    s > e && (e = s);
  }), e;
}
class os extends se {
  constructor(e, t, s) {
    super();
    const i = t === et.reactions;
    s[0] && (this.xText1 = new J(`${i ? "Fx" : "Dx"}: ` + s[0].toFixed(4))), s[3] && (this.xText2 = new J(`${i ? "Mx" : "Rx"}: ` + s[3].toFixed(4))), s[1] && (this.yText1 = new J(`${i ? "Fy" : "Dy"}: ` + s[1].toFixed(4))), s[4] && (this.yText2 = new J(`${i ? "My" : "Ry"}: ` + s[4].toFixed(4))), s[2] && (this.zText1 = new J(`${i ? "Fz" : "Dz"}: ` + s[2].toFixed(4))), s[5] && (this.zText2 = new J(`${i ? "Mz" : "Rz"}: ` + s[5].toFixed(4))), (s[0] || s[3]) && (this.xArrow = new ue(new X(1, 0, 0), new X(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[1] || s[4]) && (this.yArrow = new ue(new X(0, 1, 0), new X(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[2] || s[5]) && (this.zArrow = new ue(new X(0, 0, 1), new X(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...e), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(e) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(e, e, e), (_b = this.yArrow) == null ? void 0 : _b.scale.set(e, e, e), (_c = this.zArrow) == null ? void 0 : _c.scale.set(e, e, e), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * e, 0, 0), (_e2 = this.xText2) == null ? void 0 : _e2.position.set(1.3 * e, 0, 0.5 * e), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * e, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * e, 0.5 * e), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * e), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * e + 0.5 * e), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * e), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * e), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * e), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * e), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * e), (_o = this.zText2) == null ? void 0 : _o.updateScale(0.4 * e);
  }
  dispose() {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e2 = this.xText2) == null ? void 0 : _e2.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var et = ((b) => (b.deformations = "deformations", b.reactions = "reactions", b))(et || {});
function hs(b, e, t, s) {
  const i = new se();
  return N.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    i.children.forEach((l) => l.dispose()), i.clear();
    const n = et[e.nodeResults.rawVal], r = 0.05 * e.gridSize.val;
    (_b = (_a = b.deformOutputs) == null ? void 0 : _a.val[n]) == null ? void 0 : _b.forEach((l, h) => {
      const o = new os(t.rawVal[h], n, l ?? [0, 0, 0, 0, 0, 0]);
      o.updateScale(r * s.rawVal), i.add(o);
    });
  }), N.derive(() => {
    if (s.val, e.nodeResults.rawVal == "none") return;
    const n = 0.05 * e.gridSize.val;
    i.children.forEach((r) => r.updateScale(n * s.rawVal));
  }), N.derive(() => {
    i.visible = e.nodeResults.val != "none";
  }), i;
}
function cs({ drawingObj: b, gridObj: e, scene: t, camera: s, controls: i, gridSize: n, derivedDisplayScale: r, rendererElm: l, viewerRender: h }) {
  const o = new It(), c = new Mt(), d = new ie(new Dt(n, n), new re({ side: le })), u = new Fe(new V(), new Re()), f = new Fe(new V(), new Re({ color: "gray" })), m = new Fe(new V(), new Re({ color: "orange", size: 0.8 }));
  t.add(m), u.geometry.setAttribute("position", new te(b.points.rawVal.flat(), 3)), u.geometry.computeBoundingSphere(), u.frustumCulled = false, f.frustumCulled = false, t.add(f), d.position.set(0.5 * n, 0.5 * n, 0), d.rotateX(Math.PI / 2), d.geometry.rotateX(Math.PI / 2), d.updateMatrixWorld(), b.polylines && (b.polylines.val = [...b.polylines.rawVal, []]), N.derive(() => {
    b.gridTarget && (ds(e, { position: new X(...b.gridTarget.val.position), quaternion: new Ft().setFromEuler(new rt(...b.gridTarget.val.rotation)) }, h), d.position.set(...b.gridTarget.val.position), d.quaternion.setFromEuler(new rt(...b.gridTarget.val.rotation)), d.updateMatrixWorld());
  }), N.derive(() => {
    u.geometry.setAttribute("position", new te(b.points.val.flat(), 3)), u.geometry.computeBoundingSphere();
  }), N.derive(() => {
    const x = 0.05 * n * 0.5 * r.val;
    f.material.size = x, o.params.Points.threshold = 0.4 * x;
  }), N.derive(() => {
    var _a;
    const x = b.points.val ?? [], $ = (((_a = b.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], I = [];
    for (const _ of $) {
      const [E, C, y] = x[_];
      I.push(E, C, y);
    }
    const A = new V();
    A.setAttribute("position", new te(I, 3)), m.geometry.dispose(), m.geometry = A;
  });
  let w = false, g = 0;
  l.addEventListener("pointerdown", () => {
    w = true;
  }), l.addEventListener("pointerup", () => {
    w = false;
  }), l.addEventListener("pointermove", () => {
    w && g++;
  }), l.addEventListener("click", (x) => {
    if (g > 5) {
      g = 0;
      return;
    }
    g = 0, c.x = x.clientX / window.innerWidth * 2 - 1, c.y = -(x.clientY / window.innerHeight) * 2 + 1, o.setFromCamera(c, s);
    const S = o.intersectObject(d);
    if (S.length) {
      let $ = S[0].point;
      (x.ctrlKey || x.metaKey) && ($ = new X(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), b.points.val = [...b.points.rawVal, $.toArray()], b.polylines && (b.polylines.val = [...b.polylines.rawVal.slice(0, -1), [...b.polylines.rawVal.length ? b.polylines.rawVal.pop() : [], b.points.rawVal.length - 1]]);
    }
  }), l.addEventListener("contextmenu", () => {
    !b.polylines || b.polylines.rawVal[b.polylines.rawVal.length - 1].length === 0 || (b.polylines.val = [...b.polylines.rawVal, []]);
  }), l.addEventListener("pointermove", (x) => {
    c.x = x.clientX / window.innerWidth * 2 - 1, c.y = -(x.clientY / window.innerHeight) * 2 + 1, o.setFromCamera(c, s);
    const S = o.intersectObject(d);
    if (f.geometry.deleteAttribute("position"), S.length) {
      let $ = S[0].point;
      (x.ctrlKey || x.metaKey) && ($ = new X(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), f.geometry.setAttribute("position", new te($.toArray(), 3));
    }
    h();
  }), l.addEventListener("pointermove", (x) => {
    var _a;
    c.x = x.clientX / window.innerWidth * 2 - 1, c.y = -(x.clientY / window.innerHeight) * 2 + 1, o.setFromCamera(c, s);
    let S = false;
    const $ = o.intersectObject(u), I = o.intersectObject(d);
    if ($.length && I.length) {
      const A = new X(...b.points.rawVal[$[0].index]), _ = new X(...I[0].point), E = A.sub(_), C = (_a = I[0].face) == null ? void 0 : _a.normal;
      C.transformDirection(d.matrixWorld), Math.abs(E.dot(C)) < 1e-4 && (S = true);
    }
    f.visible = !S;
  });
  let v = false, k;
  l.addEventListener("pointermove", (x) => {
    var _a;
    if (!g) return;
    c.x = x.clientX / window.innerWidth * 2 - 1, c.y = -(x.clientY / window.innerHeight) * 2 + 1, o.setFromCamera(c, s);
    let S = false;
    const $ = o.intersectObject(u), I = o.intersectObject(d);
    if ($.length && I.length) {
      const _ = new X(...b.points.rawVal[$[0].index]), E = new X(...I[0].point), C = _.sub(E), y = (_a = I[0].face) == null ? void 0 : _a.normal;
      y.transformDirection(d.matrixWorld), Math.abs(C.dot(y)) < 1e-4 && (S = true);
    }
    if (S && g < 5 && (v = true, i.enabled = false, k = $[0].index), !v || g % 2 !== 0) return;
    const A = [...b.points.rawVal];
    if (k !== void 0) {
      let _ = I[0].point;
      (x.ctrlKey || x.metaKey) && (_ = new X(Math.round(_.x), Math.round(_.y), Math.round(_.z))), A[k] = _.toArray();
    }
    b.points.val = A;
  }), l.addEventListener("pointerup", () => {
    i.enabled = true, v = false;
  }), l.addEventListener("contextmenu", (x) => {
    var _a;
    c.x = x.clientX / window.innerWidth * 2 - 1, c.y = -(x.clientY / window.innerHeight) * 2 + 1, o.setFromCamera(c, s);
    let S = false;
    const $ = o.intersectObject(u), I = o.intersectObject(d);
    if ($.length && I.length) {
      const E = new X(...b.points.rawVal[$[0].index]), C = new X(...I[0].point), y = E.sub(C), T = (_a = I[0].face) == null ? void 0 : _a.normal;
      T.transformDirection(d.matrixWorld), Math.abs(y.dot(T)) < 1e-4 && (S = true);
    }
    if (!S) return;
    const A = [...b.points.rawVal];
    if (A.splice($[0].index, 1), b.points.val = A, !b.polylines) return;
    const _ = b.polylines.rawVal.map((E) => E.filter((C) => C !== $[0].index)).map((E) => E.map((C) => C > $[0].index ? C - 1 : C)).filter((E) => E.length);
    _.push([]), b.polylines.val = _;
  });
}
function ds(b, e, t) {
  const n = Math.round(14.999999999999998), r = { position: b.position.clone(), quaternion: b.quaternion.clone() }, l = setInterval(o, 1e3 / 30);
  let h = 0;
  function o() {
    h++;
    const c = h / n;
    b.position.lerpVectors(r.position, e.position, c), b.quaternion.slerpQuaternions(r.quaternion, e.quaternion, c), t && t(), h == n && clearInterval(l);
  }
}
class Ce {
  constructor(e, t = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(e, t);
  }
  set(e) {
    return e.isLut === true && this.copy(e), this;
  }
  setMin(e) {
    return this.minV = e, this;
  }
  setMax(e) {
    return this.maxV = e, this;
  }
  setColorMap(e, t = 32) {
    this.map = Ue[e] || Ue.rainbow, this.n = t;
    const s = 1 / this.n, i = new q(), n = new q();
    this.lut.length = 0, this.lut.push(new q(this.map[0][1]));
    for (let r = 1; r < t; r++) {
      const l = r * s;
      for (let h = 0; h < this.map.length - 1; h++) if (l > this.map[h][0] && l <= this.map[h + 1][0]) {
        const o = this.map[h][0], c = this.map[h + 1][0];
        i.setHex(this.map[h][1], Ie), n.setHex(this.map[h + 1][1], Ie);
        const d = new q().lerpColors(i, n, (l - o) / (c - o));
        this.lut.push(d);
      }
    }
    return this.lut.push(new q(this.map[this.map.length - 1][1])), this;
  }
  copy(e) {
    return this.lut = e.lut, this.map = e.map, this.n = e.n, this.minV = e.minV, this.maxV = e.maxV, this;
  }
  getColor(e) {
    e = Rt.clamp(e, this.minV, this.maxV), e = (e - this.minV) / (this.maxV - this.minV);
    const t = Math.round(e * this.n);
    return this.lut[t];
  }
  addColorMap(e, t) {
    return Ue[e] = t, this;
  }
  createCanvas() {
    const e = document.createElement("canvas");
    return e.width = 1, e.height = this.n, this.updateCanvas(e), e;
  }
  updateCanvas(e) {
    const t = e.getContext("2d", { alpha: false }), s = t.getImageData(0, 0, 1, this.n), i = s.data;
    let n = 0;
    const r = 1 / this.n, l = new q(), h = new q(), o = new q();
    for (let c = 1; c >= 0; c -= r) for (let d = this.map.length - 1; d >= 0; d--) if (c < this.map[d][0] && c >= this.map[d - 1][0]) {
      const u = this.map[d - 1][0], f = this.map[d][0];
      l.setHex(this.map[d - 1][1], Ie), h.setHex(this.map[d][1], Ie), o.lerpColors(l, h, (c - u) / (f - u)), i[n * 4] = Math.round(o.r * 255), i[n * 4 + 1] = Math.round(o.g * 255), i[n * 4 + 2] = Math.round(o.b * 255), i[n * 4 + 3] = 255, n += 1;
    }
    return t.putImageData(s, 0, 0), e;
  }
}
const Ue = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
Ce.ColorMapKeywords = Ce.ColorMapKeywords ?? {};
Ce.ColorMapKeywords.sap2000 = [[0, 16711935], [0.077, 16711860], [0.154, 16711680], [0.231, 16732160], [0.308, 16747520], [0.385, 16760320], [0.462, 16776960], [0.538, 11861760], [0.615, 65280], [0.692, 65460], [0.769, 65535], [0.846, 46335], [0.923, 255], [1, 180]];
function us(b, e, t) {
  const s = new Ce(), i = new q(), n = new ie(new V(), new re({ side: le, vertexColors: true }));
  return s.setColorMap("sap2000"), n.renderOrder = -1, n.frustumCulled = false, N.derive(() => {
    n.geometry.setAttribute("position", new te(b.val.flat(), 3));
    const r = [];
    for (const m of e.val) m.length === 3 ? r.push(m[0], m[1], m[2]) : m.length === 4 && (r.push(m[0], m[1], m[2]), r.push(m[0], m[2], m[3]));
    n.geometry.setIndex(new zt(r, 1)), n.geometry.setAttribute("color", new te(b.val.map(() => [0, 0, 0]).flat(), 3));
    const l = t.val.filter((m) => Number.isFinite(m));
    let h, o;
    const c = tt.val;
    if (c ? (o = c[0], h = c[1]) : (h = l.length ? Math.max(...l) : 1, o = l.length ? Math.min(...l) : 0, o >= 0 && h > 0 && (o = 0)), h === o) {
      const m = Math.max(Math.abs(h) * 1e-6, 1e-9);
      h += m, o -= m;
    }
    const d = c && c[0] > c[1], u = Math.min(o, h), f = Math.max(o, h);
    s.setMin(u), s.setMax(f);
    for (let m = 0; m < t.val.length; m++) {
      const w = t.val[m];
      if (!Number.isFinite(w)) {
        n.geometry.attributes.color.setXYZ(m, 0.3, 0.3, 0.3);
        continue;
      }
      const g = d ? f + u - w : w, v = s.getColor(g) ?? new q(0, 0, 0);
      i.copy(v).convertSRGBToLinear(), i.multiplyScalar(0.6), n.geometry.attributes.color.setXYZ(m, i.r, i.g, i.b);
    }
  }), n;
}
function ps(b, e, t, s) {
  const i = us(t, b.elements, s);
  return N.derive(() => {
    i.visible = e.shellResults.val != "none";
  }), i;
}
const ms = 6, Ze = 10, fs = 0.012;
function gs(b) {
  return b.startsWith("contour:") ? b.slice(8) : null;
}
function ws(b, e, t, s) {
  if (!t && !s) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(b) && t) {
    const n = t[b];
    if (n && n.has(e)) return n.get(e);
  }
  return null;
}
function vs(b, e, t, s) {
  const i = new se(), n = new Ce();
  n.setColorMap("rainbow");
  const r = new q(), l = N.state([]);
  return N.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const h = t.val, o = ((_a = b.elements) == null ? void 0 : _a.val) ?? [], c = gs(e.frameResults.val);
    if (i.children.forEach((T) => {
      T.geometry && T.geometry.dispose(), T.material && T.material.dispose();
    }), i.clear(), !c || o.length === 0 || h.length === 0) {
      l.val = [];
      return;
    }
    const d = (_b = b.analyzeOutputs) == null ? void 0 : _b.val, u = (_c = b.deformOutputs) == null ? void 0 : _c.val, f = [], m = [];
    for (let T = 0; T < o.length; T++) {
      if (o[T].length !== 2) continue;
      const R = ws(c, T, d, u);
      R && (f.push(R[0], R[1]), m.push({ idx: T, vals: R }));
    }
    if (f.length === 0) {
      l.val = [];
      return;
    }
    const w = Math.min(...f), g = Math.max(...f);
    n.setMin(w), n.setMax(g), l.val = f;
    const v = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
    for (const T of h) for (let M = 0; M < 3; M++) v[M] = Math.min(v[M], T[M]), k[M] = Math.max(k[M], T[M]);
    const S = Math.max(k[0] - v[0], k[1] - v[1], k[2] - v[2], 1) * fs, $ = [], I = [], A = [];
    let _ = 0;
    for (const { idx: T, vals: M } of m) {
      const R = o[T], H = h[R[0]], z = h[R[1]];
      if (!H || !z) continue;
      const L = new X(z[0] - H[0], z[1] - H[1], z[2] - H[2]), D = L.length();
      if (D < 1e-10) continue;
      L.normalize();
      const P = Math.abs(L.y) < 0.99 ? new X(0, 1, 0) : new X(1, 0, 0), F = new X().crossVectors(L, P).normalize(), O = new X().crossVectors(L, F).normalize(), Y = Ze + 1, j = ms;
      for (let U = 0; U < Y; U++) {
        const G = U / Ze, ne = H[0] + L.x * D * G, ge = H[1] + L.y * D * G, He = H[2] + L.z * D * G, je = M[0] + (M[1] - M[0]) * G, Ee = n.getColor(je) ?? new q(0, 0, 0);
        r.copy(Ee).convertSRGBToLinear();
        for (let Ye = 0; Ye < j; Ye++) {
          const nt = Ye / j * Math.PI * 2, Xe = Math.cos(nt), Be = Math.sin(nt);
          $.push(ne + (F.x * Xe + O.x * Be) * S, ge + (F.y * Xe + O.y * Be) * S, He + (F.z * Xe + O.z * Be) * S), I.push(r.r, r.g, r.b);
        }
      }
      for (let U = 0; U < Ze; U++) for (let G = 0; G < j; G++) {
        const ne = (G + 1) % j, ge = _ + U * j + G, He = _ + U * j + ne, je = _ + (U + 1) * j + G, Ee = _ + (U + 1) * j + ne;
        A.push(ge, He, Ee), A.push(ge, Ee, je);
      }
      _ += Y * j;
    }
    if ($.length === 0) return;
    const E = new V();
    E.setAttribute("position", new te($, 3)), E.setAttribute("color", new te(I, 3)), E.setIndex(A), E.computeVertexNormals();
    const C = new re({ vertexColors: true, side: le }), y = new ie(E, C);
    y.frustumCulled = false, i.add(y);
  }), i.__colorMapValues = l, i;
}
function ht(b, e = 8) {
  const t = document.createElement("div");
  t.id = "legend";
  const s = document.createElement("div");
  s.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", t.appendChild(s), setTimeout(() => {
    N.derive(() => {
      s.textContent = Je.val ? `[${Je.val}]` : "";
    });
  });
  const i = Array.from({ length: e + 1 }, (h, o) => o / e).reverse();
  let n, r;
  i.forEach((h, o) => {
    n = document.createElement("div"), n.id = `marker-${o}`, n.className = "marker", n.style.marginTop = o == 0 ? "0px" : `calc(${50 / e}vh - 1px)`, r = document.createElement("p"), r.id = `marker-text-${o}`, n.append(r), t.append(n);
  });
  const l = [];
  return t.querySelectorAll("p").forEach((h) => l.push(h)), setTimeout(() => {
    N.derive(() => {
      i.forEach((h, o) => {
        const c = l[o];
        c && (c.innerText = bs(b.val, h).toString());
      });
    });
  }), t;
}
function bs(b, e) {
  const t = tt.val;
  if (t) return (t[0] + e * (t[1] - t[0])).toPrecision(3);
  const s = b.filter((r) => Number.isFinite(r));
  if (s.length === 0) return "0";
  let i = Math.min(...s);
  const n = Math.max(...s);
  return i >= 0 && n > 0 && (i = 0), (i + e * (n - i)).toPrecision(3);
}
function Ws({ mesh: b, settingsObj: e, drawingObj: t, objects3D: s, solids: i }) {
  Yt.DEFAULT_UP = new X(0, 0, 1);
  const n = document.createElement("div"), r = new Ot(), l = new Nt(45, 1, 0.1, 2 * 1e6), h = new Lt(-10, 10, 10, -10, -1e3, 2e6);
  let o = l;
  const c = new Pt({ antialias: true });
  c.localClippingEnabled = true;
  const d = new Ht(l, c.domElement), u = new We(new X(-1, 0, 0), 0), f = new We(new X(0, -1, 0), 0), m = new We(new X(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function w() {
    const y = window.__hekatanClip, T = [];
    y.enableX && (u.normal.set(y.invertX ? 1 : -1, 0, 0), u.constant = y.invertX ? -y.posX : y.posX, T.push(u)), y.enableY && (f.normal.set(0, y.invertY ? 1 : -1, 0), f.constant = y.invertY ? -y.posY : y.posY, T.push(f)), y.enableZ && (m.normal.set(0, 0, y.invertZ ? 1 : -1), m.constant = y.invertZ ? -y.posZ : y.posZ, T.push(m)), c.clippingPlanes = T, r.traverse((M) => {
      const R = M;
      if (R.material) {
        const H = Array.isArray(R.material) ? R.material : [R.material];
        for (const z of H) z.clippingPlanes = T, z.needsUpdate = true;
      }
    });
  }
  w(), window.__hekatanClipApply = w;
  const g = Wt(e), v = N.derive(() => g.displayScale.val === 0 ? 1 : g.displayScale.val > 0 ? g.displayScale.val : -1 / g.displayScale.val), k = ys(b, g);
  let x = at(g.gridSize.rawVal);
  n.appendChild(Vt(g, b, i)), n.setAttribute("id", "viewer"), n.appendChild(c.domElement), c.setPixelRatio(window.devicePixelRatio);
  const S = he();
  c.setClearColor(S.background, 1);
  const $ = g.gridSize.rawVal, I = $ * 0.5 + $ * 0.5 / Math.tan(45 * 0.5);
  l.position.set(0.5 * $, 0.8 * -I, 0.5 * $), d.target.set(0.5 * $, 0.5 * $, 0), d.minDistance = 1, d.maxDistance = I * 2.5, n.__settings = g, d.zoomSpeed = 1, d._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, d.update(), r.add(x, ts(g.gridSize.rawVal, g.flipAxes.rawVal)), new ResizeObserver((y) => {
    var _a, _b;
    for (const T of y) {
      const M = (_a = T.target) == null ? void 0 : _a.clientWidth, R = (_b = T.target) == null ? void 0 : _b.clientHeight;
      if (M === 0 || R === 0) continue;
      l.aspect = M / R, l.updateProjectionMatrix();
      const H = M / R, z = h.top;
      h.left = -z * H, h.right = z * H, h.updateProjectionMatrix(), c.setSize(M, R), _();
    }
  }).observe(n), d.addEventListener("change", _), N.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = b == null ? void 0 : b.nodes) == null ? void 0 : _a.val, (_b = b == null ? void 0 : b.elements) == null ? void 0 : _b.val, (_c = b == null ? void 0 : b.nodeInputs) == null ? void 0 : _c.val, (_d = b == null ? void 0 : b.elementInputs) == null ? void 0 : _d.val, (_e2 = b == null ? void 0 : b.deformOutputs) == null ? void 0 : _e2.val, (_f = b == null ? void 0 : b.analyzeOutputs) == null ? void 0 : _f.val, g.displayScale.val, g.nodes.val, g.elements.val, g.elemColumns.val, g.elemBeams.val, g.nodesIndexes.val, g.elementsIndexes.val, g.orientations.val, g.sections.val, g.secColumns.val, g.secBeams.val, g.secFloor.val, g.supports.val, g.loads.val, g.deformedShape.val, g.nodeResults.val, g.frameResults.val, g.shellResults.val, setTimeout(_);
  });
  function _() {
    c.render(r, o);
  }
  function E(y) {
    o = y, d.object = y, d.update(), _();
  }
  if (b) {
    r.add(Ut(g, k, v), Zt(b, g, k), Jt(g, k, v), Qt(b, g, k, v), Gt(b, g, k, v), qt(b, g, k, v), is(b, g, k, v), rs(b, g, k, v), hs(b, g, k, v), ls(b, g, k, v));
    const y = $s(b, g), T = ps(b, g, k, y), M = ht(y);
    r.add(T), n.appendChild(M);
    const R = vs(b, g, k);
    r.add(R);
    const H = R.__colorMapValues, z = ht(H);
    z.id = "frame-legend", n.appendChild(z), N.derive(() => {
      const L = g.shellResults.val != "none", D = g.frameResults.val.startsWith("contour:");
      M.hidden = !L, T.visible = L, z.hidden = !D;
    });
  }
  if (i) {
    const y = new jt(16777215, 0.5);
    r.add(y);
    const T = new lt(16777215, 0.5);
    T.position.set(30, 25, -10), T.shadow.mapSize.width = 1024, T.shadow.mapSize.height = 1024, r.add(T);
    const M = 10;
    T.shadow.camera.left = -M, T.shadow.camera.right = M, T.shadow.camera.top = M, T.shadow.camera.bottom = -M, T.shadow.camera.far = 1e3;
    const R = new lt(16777215, 0.5);
    R.color.setHSL(11, 43, 96), R.position.set(-10, 0, 30), r.add(R), N.derive(() => {
      (i == null ? void 0 : i.val.length) && (r.remove(...i.oldVal), r.add(...i.rawVal), _());
    }), N.derive(() => {
      i.rawVal.forEach((H) => H.visible = g.solids.val), _();
    });
  }
  if (s) {
    const y = [], T = (R) => {
      var _a;
      return ((_a = R == null ? void 0 : R.userData) == null ? void 0 : _a.isCota) ? g.showCotas.val : g.custom3D.val;
    }, M = () => {
      for (const R of y) R.visible = T(R);
      _();
    };
    N.derive(() => {
      const R = s.val;
      y.length && (r.remove(...y), y.length = 0), R.length && (r.add(...R), y.push(...R), M()), _();
    }), N.derive(() => {
      g.custom3D.val, M();
    }), N.derive(() => {
      g.showCotas.val, M();
    });
  }
  t && cs({ drawingObj: t, gridObj: x, scene: r, camera: l, controls: d, gridSize: $, derivedDisplayScale: v, rendererElm: c.domElement, viewerRender: _ }), _e((y, T) => {
    c.setClearColor(T.background, 1), r.remove(x), x.geometry.dispose(), x.material.dispose(), x = at(g.gridSize.rawVal), r.add(x), n.style.setProperty("--awatif-legend-color", T.legendMarker), _();
  });
  const C = { scene: r, perspCamera: l, orthoCamera: h, get camera() {
    return o;
  }, controls: d, renderer: c, rendererElm: c.domElement, render: _, setActiveCamera: E, settings: g };
  return n.__ctx = C, n;
}
function ys(b, e) {
  return N.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = b == null ? void 0 : b.nodes) == null ? void 0 : _a.val) ?? [];
    const t = ((_b = b == null ? void 0 : b.nodes) == null ? void 0 : _b.val) ?? [], s = (_d = (_c = b == null ? void 0 : b.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!s || t.length === 0) return t;
    const i = e.deformScale.val, n = e.deformScale.val * e.deformScaleZ.val, r = Number.isFinite(i) ? i : 1, l = Number.isFinite(n) ? n : 1;
    return t.map((h, o) => {
      var _a2;
      const c = ((_a2 = s.get(o)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], d = Number.isFinite(c[0]) ? c[0] : 0, u = Number.isFinite(c[1]) ? c[1] : 0, f = Number.isFinite(c[2]) ? c[2] : 0;
      return [h[0] + d * r, h[1] + u * r, h[2] + f * l];
    });
  });
}
const tt = N.state(null), Je = N.state(""), xs = N.state("kN"), _s = N.state("mm"), Cs = N.state("kN/m\xB2"), ks = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, ct = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ss = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function $s(b, e) {
  const t = N.state([]);
  let s;
  return ((i) => {
    i.bendingXX = "bendingXX", i.bendingYY = "bendingYY", i.bendingXY = "bendingXY", i.membraneXX = "membraneXX", i.membraneYY = "membraneYY", i.membraneXY = "membraneXY", i.tranverseShearX = "tranverseShearX", i.tranverseShearY = "tranverseShearY", i.vonMises = "vonMises", i.pressure = "pressure", i.displacementX = "displacementX", i.displacementY = "displacementY", i.displacementZ = "displacementZ";
  })(s || (s = {})), N.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C;
    const i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), m = (D, P) => {
      D == null ? void 0 : D.forEach((F, O) => {
        const Y = b.elements.val[O];
        if (Y) for (let j = 0; j < Y.length; j++) P.set(Y[j], [F[j] ?? F[0]]);
      });
    };
    m((_b = (_a = b.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, i), m((_d = (_c = b.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, n), m((_f = (_e2 = b.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, r), m((_h = (_g = b.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, l), m((_j = (_i = b.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, h), m((_l = (_k = b.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, o), m((_n = (_m = b.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, c), m((_p = (_o = b.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, d), m((_r = (_q = b.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, u), m((_t2 = (_s2 = b.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t2.pressure, f);
    const w = (_v = (_u = b.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, g = e.shellResults.val, v = w == null ? void 0 : w[g];
    tt.val = Array.isArray(v) && v.length === 2 ? [v[0], v[1]] : null;
    const k = { bendingXX: [i, 0], bendingYY: [n, 0], bendingXY: [r, 0], membraneXX: [l, 0], membraneYY: [h, 0], membraneXY: [o, 0], tranverseShearX: [c, 0], tranverseShearY: [d, 0], vonMises: [u, 0], pressure: [f, 0], displacementX: [(_x = (_w = b.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = b.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = b.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, x = e.shellResults.val, S = xs.val, $ = _s.val, I = x === "displacementX" || x === "displacementY" || x === "displacementZ", A = x === "bendingXX" || x === "bendingYY" || x === "bendingXY", _ = x === "membraneXX" || x === "membraneYY" || x === "membraneXY", E = x === "vonMises" || x === "pressure", C = x === "tranverseShearX" || x === "tranverseShearY", y = (_C = e.solidResults) == null ? void 0 : _C.val, T = y === "vonMises" || y === "sigmaXX" || y === "sigmaYY" || y === "sigmaZZ" || y === "tauXY" || y === "tauYZ" || y === "tauXZ", M = y === "ux" || y === "uy" || y === "uz", R = Cs.val, H = T ? Ss[R] : M || I ? ct[$] : A || _ || E || C ? 1 / ks[S] : 1, z = T ? R : M || I ? $ : A ? `${S}\xB7m/m` : _ ? `${S}/m\xB2` : E ? `${S}/m\xB2` : C ? `${S}/m` : "";
    Je.val = z;
    const L = [];
    b.nodes.val.forEach((D, P) => {
      const F = k[x];
      if (!F || !F[0] || typeof F[0].has != "function") return;
      if (!F[0].has(P)) {
        L.push(Number.NaN);
        return;
      }
      const O = F[0].get(P), Y = O ? O[F[1]] ?? 0 : 0;
      L.push(Y * H);
    }), t.val = L;
  }), t;
}
class dt {
  constructor(e, t) {
    Object.assign(this, { type: t.type ?? null, detail: t, owner: e, target: t.target ?? null, phase: t.phase ?? "before", object: t.object ?? null, execute: null, isStopped: false, isCancelled: false, onComplete: null, listeners: [] }), delete t.type, delete t.target, delete t.object, this.complete = new Promise((s, i) => {
      this._resolve = s, this._reject = i;
    }), this.complete.catch(() => {
    });
  }
  finish(e) {
    e && p.extend(this.detail, e), this.phase = "after", this.owner.trigger.call(this.owner, this);
  }
  done(e) {
    this.listeners.push(e);
  }
  preventDefault() {
    this._reject(), this.isCancelled = true;
  }
  stopPropagation() {
    this.isStopped = true;
  }
}
class fe {
  constructor(e) {
    if (this.activeEvents = [], this.listeners = [], e !== void 0) {
      if (!p.checkName(e)) return;
      oe[e] = this;
    }
    this.debug = false;
  }
  on(e, t) {
    return (e = typeof e == "string" ? e.split(/[,\s]+/) : [e]).forEach((s) => {
      var i, n, r, l = typeof s == "string" ? s : s.type + ":" + s.execute + "." + s.scope;
      typeof s == "string" && ([n, i] = s.split("."), [n, r] = n.replace(":complete", ":after").replace(":done", ":after").split(":"), s = { type: n, execute: r ?? "before", scope: i }), (s = p.extend({ type: null, execute: "before", onComplete: null }, s)).type ? t ? (Array.isArray(this.listeners) || (this.listeners = []), this.listeners.push({ name: l, edata: s, handler: t }), this.debug && console.log("w2base: add event", { name: l, edata: s, handler: t })) : console.log("ERROR: You must specify event handler function when calling .on() method of " + this.name) : console.log("ERROR: You must specify event type when calling .on() method of " + this.name);
    }), this;
  }
  off(e, t) {
    return (e = typeof e == "string" ? e.split(/[,\s]+/) : [e]).forEach((s) => {
      var i, n, r, l = typeof s == "string" ? s : s.type + ":" + s.execute + "." + s.scope;
      if (typeof s == "string" && ([n, i] = s.split("."), [n, r] = n.replace(":complete", ":after").replace(":done", ":after").split(":"), s = { type: n || "*", execute: r || "", scope: i || "" }), (s = p.extend({ type: null, execute: null, onComplete: null }, s)).type || s.scope) {
        t = t || null;
        let h = 0;
        this.listeners = this.listeners.filter((o) => s.type !== "*" && s.type !== o.edata.type || s.execute !== "" && s.execute !== o.edata.execute || s.scope !== "" && s.scope !== o.edata.scope || s.handler != null && s.handler !== o.edata.handler || (h++, false)), this.debug && console.log(`w2base: remove event (${h})`, { name: l, edata: s, handler: t });
      } else console.log("ERROR: You must specify event type when calling .off() method of " + this.name);
    }), this;
  }
  trigger(e, t) {
    if (arguments.length == 1 ? t = e : (t.type = e, t.target = t.target ?? this), p.isPlainObject(t) && t.phase == "after") {
      if (!(t = this.activeEvents.find((r) => r.type == t.type && r.target == t.target))) return void console.log(`ERROR: Cannot find even handler for "${t.type}" on "${t.target}".`);
      console.log(`NOTICE: This syntax "edata.trigger({ phase: 'after' })" is outdated. Use edata.finish() instead.`);
    } else t instanceof dt || (t = new dt(this, t), this.activeEvents.push(t));
    let s, i, n;
    Array.isArray(this.listeners) || (this.listeners = []), this.debug && console.log(`w2base: trigger "${t.type}:${t.phase}"`, t);
    for (let r = this.listeners.length - 1; 0 <= r; r--) {
      let l = this.listeners[r];
      if (!(l == null || l.edata.type !== t.type && l.edata.type !== "*" || l.edata.target !== t.target && l.edata.target != null || l.edata.execute !== t.phase && l.edata.execute !== "*" && l.edata.phase !== "*") && (Object.keys(l.edata).forEach((h) => {
        t[h] == null && l.edata[h] != null && (t[h] = l.edata[h]);
      }), s = [], n = new RegExp(/\((.*?)\)/).exec(String(l.handler).split("=>")[0]), (s = n ? n[1].split(/\s*,\s*/) : s).length === 2 ? (l.handler.call(this, t.target, t), this.debug && console.log(" - call (old)", l.handler)) : (l.handler.call(this, t), this.debug && console.log(" - call", l.handler)), t.isStopped === true || t.stop === true)) return t;
    }
    if (e = "on" + t.type.substr(0, 1).toUpperCase() + t.type.substr(1), !(t.phase === "before" && typeof this[e] == "function" && (i = this[e], s = [], n = new RegExp(/\((.*?)\)/).exec(String(i).split("=>")[0]), (s = n ? n[1].split(/\s*,\s*/) : s).length === 2 ? (i.call(this, t.target, t), this.debug && console.log(" - call: on[Event] (old)", i)) : (i.call(this, t), this.debug && console.log(" - call: on[Event]", i)), t.isStopped === true || t.stop === true) || t.object != null && t.phase === "before" && typeof t.object[e] == "function" && (i = t.object[e], s = [], n = new RegExp(/\((.*?)\)/).exec(String(i).split("=>")[0]), (s = n ? n[1].split(/\s*,\s*/) : s).length === 2 ? (i.call(this, t.target, t), this.debug && console.log(" - call: edata.object (old)", i)) : (i.call(this, t), this.debug && console.log(" - call: edata.object", i)), t.isStopped === true || t.stop === true) || t.phase !== "after")) {
      typeof t.onComplete == "function" && t.onComplete.call(this, t);
      for (let r = 0; r < t.listeners.length; r++) typeof t.listeners[r] == "function" && (t.listeners[r].call(this, t), this.debug) && console.log(" - call: done", i);
      t._resolve(t), this.debug && console.log(`w2base: trigger "${t.type}:${t.phase}"`, t);
    }
    return t;
  }
}
const Ke = { locale: "en-US", dateFormat: "m/d/yyyy", timeFormat: "hh:mi pm", datetimeFormat: "m/d/yyyy|hh:mi pm", currencyPrefix: "$", currencySuffix: "", currencyPrecision: 2, groupSymbol: ",", decimalSymbol: ".", shortmonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], fullmonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortdays: ["M", "T", "W", "T", "F", "S", "S"], fulldays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], weekStarts: "S", phrases: { "${count} letters or more...": "---", "Add new record": "---", "Add New": "---", "Advanced Search": "---", after: "---", "AJAX error. See console for more details.": "---", "All Fields": "---", All: "---", Any: "---", "Are you sure you want to delete ${count} ${records}?": "---", "Attach files by dragging and dropping or Click to Select": "---", before: "---", "begins with": "---", begins: "---", between: "---", buffered: "---", Cancel: "---", Close: "---", Column: "---", Confirmation: "---", contains: "---", Copied: "---", "Copy to clipboard": "---", "Current Date & Time": "---", "Delete selected records": "---", Delete: "---", 'Do you want to delete search item "${item}"?': "---", "Edit selected record": "---", Edit: "---", "Empty list": "---", "ends with": "---", ends: "---", "Field should be at least ${count} characters.": "---", Hide: "---", in: "---", "is not": "---", is: "---", "less than": "---", "Line #": "---", "Load ${count} more...": "---", "Loading...": "---", "Maximum number of files is ${count}": "---", "Maximum total size is ${count}": "---", Modified: "---", "more than": "---", "Multiple Fields": "---", Name: "---", "No items found": "---", "No matches": "---", No: "---", none: "---", "Not a float": "---", "Not a hex number": "---", "Not a valid date": "---", "Not a valid email": "---", "Not alpha-numeric": "---", "Not an integer": "---", "Not in money format": "---", "not in": "---", Notification: "---", of: "---", Ok: "---", Opacity: "---", "Record ID": "---", record: "---", records: "---", "Refreshing...": "---", "Reload data in the list": "---", Remove: "---", "Remove This Field": "---", "Request aborted.": "---", "Required field": "---", Reset: "---", "Restore Default State": "---", "Returned data is not in valid JSON format.": "---", "Save changed records": "---", "Save Grid State": "---", Save: "---", "Saved Searches": "---", "Saving...": "---", "Search took ${count} seconds": "---", Search: "---", "Select Hour": "---", "Select Minute": "---", selected: "---", "Server Response ${count} seconds": "---", "Show/hide columns": "---", Show: "---", Size: "---", Skip: "---", "Sorting took ${count} seconds": "---", "Type to search...": "---", Type: "---", Yes: "---", Yesterday: "---", "Your remote data source record count has changed, reloading from the first record.": "---" } };
const _Z = class _Z {
  constructor(e, t, s) {
    this.context = t ?? document, this.previous = s ?? null;
    let i = [];
    if (Array.isArray(e)) i = e;
    else if (e instanceof Node || e instanceof Window) i = [e];
    else if (e instanceof _Z) i = e.nodes;
    else if (typeof e == "string") {
      if (typeof this.context.querySelector != "function") throw new Error("Invalid context");
      i = Array.from(this.context.querySelectorAll(e));
    } else if (e == null) i = [];
    else {
      if (t = Array.from(e ?? []), typeof e != "object" || !Array.isArray(t)) throw new Error(`Invalid selector "${e}"`);
      i = t;
    }
    this.nodes = i, this.length = i.length, this.each((n, r) => {
      this[r] = n;
    });
  }
  static _fragment(e) {
    let t = document.createElement("template");
    return t.innerHTML = e, t.content.childNodes.forEach((s) => {
      var i = _Z._scriptConvert(s);
      i != s && t.content.replaceChild(i, s);
    }), t.content;
  }
  static _scriptConvert(e) {
    let t = (s) => {
      var i = s.ownerDocument.createElement("script"), n = (i.text = s.text, s.attributes);
      for (let r = 0; r < n.length; r++) i.setAttribute(n[r].name, n[r].value);
      return i;
    };
    return (e = e.tagName == "SCRIPT" ? t(e) : e).querySelectorAll && e.querySelectorAll("script").forEach((s) => {
      s.parentNode.replaceChild(t(s), s);
    }), e;
  }
  static _fixProp(e) {
    var t = { cellpadding: "cellPadding", cellspacing: "cellSpacing", class: "className", colspan: "colSpan", contenteditable: "contentEditable", for: "htmlFor", frameborder: "frameBorder", maxlength: "maxLength", readonly: "readOnly", rowspan: "rowSpan", tabindex: "tabIndex", usemap: "useMap" };
    return t[e] || e;
  }
  _insert(e, t) {
    let s = [], i = this.length;
    if (!(i < 1)) {
      let n = this;
      if (typeof t == "string") this.each((r) => {
        var l = _Z._fragment(t);
        s.push(...l.childNodes), r[e](l);
      });
      else if (t instanceof _Z) {
        let r = i == 1;
        t.each((l) => {
          this.each((h) => {
            var o = r ? l : l.cloneNode(true);
            s.push(o), h[e](o), _Z._scriptConvert(o);
          });
        }), r || t.remove();
      } else {
        if (!(t instanceof Node)) throw new Error(`Incorrect argument for "${e}(html)". It expects one string argument.`);
        this.each((r) => {
          var l = i === 1 ? t : _Z._fragment(t.outerHTML);
          s.push(...i === 1 ? [t] : l.childNodes), r[e](l);
        }), 1 < i && t.remove();
      }
      return n = e == "replaceWith" ? new _Z(s, this.context, this) : n;
    }
  }
  _save(e, t, s) {
    e._mQuery = e._mQuery ?? {}, Array.isArray(s) ? (e._mQuery[t] = e._mQuery[t] ?? [], e._mQuery[t].push(...s)) : s != null ? e._mQuery[t] = s : delete e._mQuery[t];
  }
  get(e) {
    var t = this[e = e < 0 ? this.length + e : e];
    return t || (e != null ? null : this.nodes);
  }
  eq(e) {
    let t = [this[e = e < 0 ? this.length + e : e]];
    return t[0] == null && (t = []), new _Z(t, this.context, this);
  }
  then(e) {
    return e = e(this), e ?? this;
  }
  find(e) {
    let t = [];
    return this.each((s) => {
      s = Array.from(s.querySelectorAll(e)), 0 < s.length && t.push(...s);
    }), new _Z(t, this.context, this);
  }
  filter(e) {
    let t = [];
    return this.each((s) => {
      (s === e || typeof e == "string" && s.matches && s.matches(e) || typeof e == "function" && e(s)) && t.push(s);
    }), new _Z(t, this.context, this);
  }
  next() {
    let e = [];
    return this.each((t) => {
      t = t.nextElementSibling, t && e.push(t);
    }), new _Z(e, this.context, this);
  }
  prev() {
    let e = [];
    return this.each((t) => {
      t = t.previousElementSibling, t && e.push(t);
    }), new _Z(e, this.context, this);
  }
  shadow(e) {
    let t = [];
    this.each((i) => {
      i.shadowRoot && t.push(i.shadowRoot);
    });
    var s = new _Z(t, this.context, this);
    return e ? s.find(e) : s;
  }
  closest(e) {
    let t = [];
    return this.each((s) => {
      s = s.closest(e), s && t.push(s);
    }), new _Z(t, this.context, this);
  }
  host(e) {
    let t = [], s = (n) => n.parentNode ? s(n.parentNode) : n, i = (n) => {
      n = s(n), t.push(n.host || n), n.host && e && i(n.host);
    };
    return this.each((n) => {
      i(n);
    }), new _Z(t, this.context, this);
  }
  parent(e) {
    return this.parents(e, true);
  }
  parents(e, t) {
    let s = [], i = (r) => {
      if (s.indexOf(r) == -1 && s.push(r), !t && r.parentNode) return i(r.parentNode);
    };
    this.each((r) => {
      r.parentNode && i(r.parentNode);
    });
    var n = new _Z(s, this.context, this);
    return e ? n.filter(e) : n;
  }
  add(e) {
    return e = e instanceof _Z ? e.nodes : Array.isArray(e) ? e : [e], new _Z(this.nodes.concat(e), this.context, this);
  }
  each(e) {
    return this.nodes.forEach((t, s) => {
      e(t, s, this);
    }), this;
  }
  append(e) {
    return this._insert("append", e);
  }
  prepend(e) {
    return this._insert("prepend", e);
  }
  after(e) {
    return this._insert("after", e);
  }
  before(e) {
    return this._insert("before", e);
  }
  replace(e) {
    return this._insert("replaceWith", e);
  }
  remove() {
    return this.each((e) => {
      e.remove();
    }), this;
  }
  css(e, t) {
    let s = e;
    var i, n = arguments.length;
    return n === 0 || n === 1 && typeof e == "string" ? this[0] ? (n = this[0].style, typeof e == "string" ? (i = n.getPropertyPriority(e), n.getPropertyValue(e) + (i ? "!" + i : "")) : Object.fromEntries(this[0].style.cssText.split(";").filter((r) => !!r).map((r) => r.split(":").map((l) => l.trim())))) : void 0 : (typeof e != "object" && ((s = {})[e] = t), this.each((r, l) => {
      Object.keys(s).forEach((h) => {
        var o = String(s[h]).toLowerCase().includes("!important") ? "important" : "";
        r.style.setProperty(h, String(s[h]).replace(/\!important/i, ""), o);
      });
    }), this);
  }
  addClass(e) {
    return this.toggleClass(e, true), this;
  }
  removeClass(e) {
    return this.toggleClass(e, false), this;
  }
  toggleClass(e, t) {
    return typeof e == "string" && (e = e.split(/[,\s]+/)), this.each((s) => {
      let i = e;
      (i = i == null && t === false ? Array.from(s.classList) : i).forEach((n) => {
        if (n !== "") {
          let r = t != null ? t ? "add" : "remove" : "toggle";
          s.classList[r](n);
        }
      });
    }), this;
  }
  hasClass(e) {
    if ((e = typeof e == "string" ? e.split(/[,\s]+/) : e) == null && 0 < this.length) return Array.from(this[0].classList);
    let t = false;
    return this.each((s) => {
      t = t || e.every((i) => Array.from(s.classList ?? []).includes(i));
    }), t;
  }
  on(e, t, s) {
    typeof t == "function" && (s = t, t = void 0);
    let i;
    return (t == null ? void 0 : t.delegate) && (i = t.delegate, delete t.delegate), (e = e.split(/[,\s]+/)).forEach((n) => {
      let [r, l] = String(n).toLowerCase().split(".");
      if (i) {
        let h = s;
        s = (o) => {
          var c = a(o.target).parents(i);
          0 < c.length ? o.delegate = c[0] : o.delegate = o.target, (o.target.matches(i) || 0 < c.length) && h(o);
        };
      }
      this.each((h) => {
        this._save(h, "events", [{ event: r, scope: l, callback: s, options: t }]), h.addEventListener(r, s, t);
      });
    }), this;
  }
  off(e, t, s) {
    return typeof t == "function" && (s = t, t = void 0), (e = (e ?? "").split(/[,\s]+/)).forEach((i) => {
      let [n, r] = String(i).toLowerCase().split(".");
      this.each((l) => {
        var _a;
        if (Array.isArray((_a = l._mQuery) == null ? void 0 : _a.events)) for (let o = l._mQuery.events.length - 1; 0 <= o; o--) {
          var h = l._mQuery.events[o];
          r == null || r === "" ? h.event != n && n !== "" || h.callback != s && s != null || (l.removeEventListener(h.event, h.callback, h.options), l._mQuery.events.splice(o, 1)) : h.event != n && n !== "" || h.scope != r || (l.removeEventListener(h.event, h.callback, h.options), l._mQuery.events.splice(o, 1));
        }
      });
    }), this;
  }
  trigger(e, t) {
    let s;
    return s = e instanceof Event || e instanceof CustomEvent ? e : new (["click", "dblclick", "mousedown", "mouseup", "mousemove"].includes(e) ? MouseEvent : ["keydown", "keyup", "keypress"].includes(e) ? KeyboardEvent : Event)(e, t), this.each((i) => {
      i.dispatchEvent(s);
    }), this;
  }
  attr(e, t) {
    if (t === void 0 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : void 0;
    {
      let s = {};
      return typeof e == "object" ? s = e : s[e] = t, this.each((i) => {
        Object.entries(s).forEach(([n, r]) => {
          i.setAttribute(n, r);
        });
      }), this;
    }
  }
  removeAttr() {
    return this.each((e) => {
      Array.from(arguments).forEach((t) => {
        e.removeAttribute(t);
      });
    }), this;
  }
  prop(e, t) {
    if (t === void 0 && typeof e == "string") return this[0] ? this[0][e] : void 0;
    {
      let s = {};
      return typeof e == "object" ? s = e : s[e] = t, this.each((i) => {
        Object.entries(s).forEach(([n, r]) => {
          n = _Z._fixProp(n), i[n] = r, n == "innerHTML" && _Z._scriptConvert(i);
        });
      }), this;
    }
  }
  removeProp() {
    return this.each((e) => {
      Array.from(arguments).forEach((t) => {
        delete e[_Z._fixProp(t)];
      });
    }), this;
  }
  data(e, t) {
    if (e instanceof Object) Object.entries(e).forEach((s) => {
      this.data(s[0], s[1]);
    });
    else {
      if (e && e.indexOf("-") != -1 && console.error(`Key "${e}" contains "-" (dash). Dashes are not allowed in property names. Use camelCase instead.`), !(arguments.length < 2)) return this.each((s) => {
        t != null ? s.dataset[e] = t instanceof Object ? JSON.stringify(t) : t : delete s.dataset[e];
      }), this;
      if (this[0]) {
        let s = Object.assign({}, this[0].dataset);
        return Object.keys(s).forEach((i) => {
          if (s[i].startsWith("[") || s[i].startsWith("{")) try {
            s[i] = JSON.parse(s[i]);
          } catch {
          }
        }), e ? s[e] : s;
      }
    }
  }
  removeData(e) {
    return typeof e == "string" && (e = e.split(/[,\s]+/)), this.each((t) => {
      e.forEach((s) => {
        delete t.dataset[s];
      });
    }), this;
  }
  show() {
    return this.toggle(true);
  }
  hide() {
    return this.toggle(false);
  }
  toggle(e) {
    return this.each((t) => {
      var _a;
      var s, i = t.style.display, n = getComputedStyle(t).display, r = i == "none" || n == "none";
      !r || e != null && e !== true || (s = t instanceof HTMLTableRowElement ? "table-row" : t instanceof HTMLTableCellElement ? "table-cell" : "block", t.style.display = ((_a = t._mQuery) == null ? void 0 : _a.prevDisplay) ?? (i == n && n != "none" ? "" : s), this._save(t, "prevDisplay", null)), r || e != null && e !== false || (n != "none" && this._save(t, "prevDisplay", n), t.style.setProperty("display", "none"));
    });
  }
  empty() {
    return this.html("");
  }
  html(e) {
    return this.prop("innerHTML", e);
  }
  text(e) {
    return this.prop("textContent", e);
  }
  val(e) {
    return this.prop("value", e);
  }
  change() {
    return this.trigger("change");
  }
  click() {
    return this.trigger("click");
  }
};
__publicField(_Z, "version", 0.7);
let Z = _Z;
let a = function(b, e) {
  if (typeof b != "function") return new Z(b, e);
  document.readyState == "complete" ? b() : window.addEventListener("load", b);
}, oe = (a.html = (b) => (b = Z._fragment(b), a(b.children, b)), a.version = Z.version, {});
class Ts {
  constructor() {
    this.version = "2.0.x", this.tmp = {}, this.settings = this.extend({}, { dataType: "HTTPJSON", dateStartYear: 1950, dateEndYear: 2030, macButtonOrder: false, warnNoPhrase: false }, Ke, { phrases: null }), this.i18nCompare = Intl.Collator().compare, this.hasLocalStorage = function() {
      var e = "w2ui_test";
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), true;
      } catch {
        return false;
      }
    }(), this.isMac = /Mac/i.test(navigator.platform), this.isMobile = /(iphone|ipod|ipad|mobile|android)/i.test(navigator.userAgent), this.isIOS = /(iphone|ipod|ipad)/i.test(navigator.platform), this.isAndroid = /(android)/i.test(navigator.userAgent), this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), this.formatters = { number(e, t) {
      return 20 < parseInt(t) && (t = 20), parseInt(t) < 0 && (t = 0), e == null || e === "" ? "" : p.formatNumber(parseFloat(e), t, true);
    }, float(e, t) {
      return p.formatters.number(e, t);
    }, int(e, t) {
      return p.formatters.number(e, 0);
    }, money(e, t) {
      return e == null || e === "" ? "" : (e = p.formatNumber(Number(e), p.settings.currencyPrecision), (p.settings.currencyPrefix || "") + e + (p.settings.currencySuffix || ""));
    }, currency(e, t) {
      return p.formatters.money(e, t);
    }, percent(e, t) {
      return e == null || e === "" ? "" : p.formatNumber(e, t || 1) + "%";
    }, size(e, t) {
      return e == null || e === "" ? "" : p.formatSize(parseInt(e));
    }, date(e, t) {
      if (t === "" && (t = p.settings.dateFormat), e == null || e === 0 || e === "") return "";
      let s = p.isDateTime(e, t, true);
      return '<span title="' + (s = s === false ? p.isDate(e, t, true) : s) + '">' + p.formatDate(s, t) + "</span>";
    }, datetime(e, t) {
      if (t === "" && (t = p.settings.datetimeFormat), e == null || e === 0 || e === "") return "";
      let s = p.isDateTime(e, t, true);
      return '<span title="' + (s = s === false ? p.isDate(e, t, true) : s) + '">' + p.formatDateTime(s, t) + "</span>";
    }, time(e, t) {
      if (t === "" && (t = p.settings.timeFormat), e == null || e === 0 || e === "") return "";
      let s = p.isDateTime(e, t = (t = t === "h12" ? "hh:mi pm" : t) === "h24" ? "h24:mi" : t, true);
      return '<span title="' + (s = s === false ? p.isDate(e, t, true) : s) + '">' + p.formatTime(e, t) + "</span>";
    }, timestamp(e, t) {
      if (t === "" && (t = p.settings.datetimeFormat), e == null || e === 0 || e === "") return "";
      let s = p.isDateTime(e, t, true);
      return (s = s === false ? p.isDate(e, t, true) : s).toString ? s.toString() : "";
    }, gmt(e, t) {
      if (t === "" && (t = p.settings.datetimeFormat), e == null || e === 0 || e === "") return "";
      let s = p.isDateTime(e, t, true);
      return (s = s === false ? p.isDate(e, t, true) : s).toUTCString ? s.toUTCString() : "";
    }, age(e, t) {
      if (e == null || e === 0 || e === "") return "";
      let s = p.isDateTime(e, null, true);
      return '<span title="' + (s = s === false ? p.isDate(e, null, true) : s) + '">' + p.age(e) + (t ? " " + t : "") + "</span>";
    }, interval(e, t) {
      return e == null || e === 0 || e === "" ? "" : p.interval(e) + (t ? " " + t : "");
    }, toggle(e, t) {
      return e ? "Yes" : "";
    }, password(e, t) {
      let s = "";
      for (let i = 0; i < e.length; i++) s += "*";
      return s;
    } };
  }
  isBin(e) {
    return /^[0-1]+$/.test(e);
  }
  isInt(e) {
    return /^[-+]?[0-9]+$/.test(e);
  }
  isFloat(e) {
    return (typeof (e = typeof e == "string" ? e.replace(this.settings.groupSymbol, "").replace(this.settings.decimalSymbol, ".") : e) == "number" || typeof e == "string" && e !== "") && !isNaN(Number(e));
  }
  isMoney(e) {
    var t, s;
    return typeof e != "object" && e !== "" && (!!this.isFloat(e) || (t = this.settings, s = new RegExp("^" + (t.currencyPrefix ? "\\" + t.currencyPrefix + "?" : "") + "[-+]?" + (t.currencyPrefix ? "\\" + t.currencyPrefix + "?" : "") + "[0-9]*[\\" + t.decimalSymbol + "]?[0-9]+" + (t.currencySuffix ? "\\" + t.currencySuffix + "?" : "") + "$", "i"), typeof e == "string" && (e = e.replace(new RegExp(t.groupSymbol, "g"), "")), s.test(e)));
  }
  isHex(e) {
    return /^(0x)?[0-9a-fA-F]+$/.test(e);
  }
  isAlphaNumeric(e) {
    return /^[a-zA-Z0-9_-]+$/.test(e);
  }
  isEmail(e) {
    return /^[a-zA-Z0-9._%\-+]+@[а-яА-Яa-zA-Z0-9.-]+\.[а-яА-Яa-zA-Z]+$/.test(e);
  }
  isIpAddress(e) {
    return new RegExp("^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$").test(e);
  }
  isDate(e, t, s) {
    if (!e) return false;
    var i = "Invalid Date";
    let n, r, l;
    if (t == null && (t = this.settings.dateFormat), typeof e.getFullYear == "function") l = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate();
    else if (parseInt(e) == e && 0 < parseInt(e)) e = new Date(parseInt(e)), l = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate();
    else {
      if (e = String(e), new RegExp("mon", "ig").test(t)) {
        t = t.replace(/month/gi, "m").replace(/mon/gi, "m").replace(/dd/gi, "d").replace(/[, ]/gi, "/").replace(/\/\//g, "/").toLowerCase(), e = e.replace(/[, ]/gi, "/").replace(/\/\//g, "/").toLowerCase();
        for (let d = 0, u = this.settings.fullmonths.length; d < u; d++) {
          var h = this.settings.fullmonths[d];
          e = e.replace(new RegExp(h, "ig"), parseInt(d) + 1).replace(new RegExp(h.substr(0, 3), "ig"), parseInt(d) + 1);
        }
      }
      var o = e.replace(/-/g, "/").replace(/\./g, "/").toLowerCase().split("/"), t = t.replace(/-/g, "/").replace(/\./g, "/").toLowerCase();
      t === "mm/dd/yyyy" && (n = o[0], r = o[1], l = o[2]), t === "m/d/yyyy" && (n = o[0], r = o[1], l = o[2]), t === "dd/mm/yyyy" && (n = o[1], r = o[0], l = o[2]), t === "d/m/yyyy" && (n = o[1], r = o[0], l = o[2]), t === "yyyy/dd/mm" && (n = o[2], r = o[1], l = o[0]), t === "yyyy/d/m" && (n = o[2], r = o[1], l = o[0]), t === "yyyy/mm/dd" && (n = o[1], r = o[2], l = o[0]), t === "yyyy/m/d" && (n = o[1], r = o[2], l = o[0]), t === "mm/dd/yy" && (n = o[0], r = o[1], l = o[2]), t === "m/d/yy" && (n = o[0], r = o[1], l = parseInt(o[2]) + 1900), t === "dd/mm/yy" && (n = o[1], r = o[0], l = parseInt(o[2]) + 1900), t === "d/m/yy" && (n = o[1], r = o[0], l = parseInt(o[2]) + 1900), t === "yy/dd/mm" && (n = o[2], r = o[1], l = parseInt(o[0]) + 1900), t === "yy/d/m" && (n = o[2], r = o[1], l = parseInt(o[0]) + 1900), t === "yy/mm/dd" && (n = o[1], r = o[2], l = parseInt(o[0]) + 1900), t === "yy/m/d" && (n = o[1], r = o[2], l = parseInt(o[0]) + 1900);
    }
    return !!this.isInt(l) && !!this.isInt(n) && !!this.isInt(r) && (l = +l, n = +n, r = +r, (i = new Date(l, n - 1, r)).setFullYear(l), n != null) && String(i) !== "Invalid Date" && i.getMonth() + 1 === n && i.getDate() === r && i.getFullYear() === l && (s !== true || i);
  }
  isTime(l, t) {
    if (l == null) return false;
    let s, i, n;
    i = 0 <= (l = (l = String(l)).toUpperCase()).indexOf("AM");
    var r = (n = 0 <= l.indexOf("PM")) || i, l = (s = r ? 12 : 24, (l = l.replace("AM", "").replace("PM", "").trim()).split(":"));
    let h = parseInt(l[0] || 0), o = parseInt(l[1] || 0), c = parseInt(l[2] || 0);
    return (r && l.length === 1 || l.length === 2 || l.length === 3) && !(l[0] === "" || h < 0 || h > s || !this.isInt(l[0]) || 2 < l[0].length || 1 < l.length && (l[1] === "" || o < 0 || 59 < o || !this.isInt(l[1]) || l[1].length !== 2) || 2 < l.length && (l[2] === "" || c < 0 || 59 < c || !this.isInt(l[2]) || l[2].length !== 2) || !(r || s !== h || o === 0 && c === 0) || r && l.length === 1 && h === 0) && (t !== true || (n && h !== 12 && (h += 12), i && h === 12 && (h += 12), { hours: h, minutes: o, seconds: c }));
  }
  isDateTime(e, t, s) {
    var i;
    return typeof e.getFullYear == "function" ? s !== true || e : (i = parseInt(e)) === e ? !(i < 0) && (s !== true || new Date(i)) : (i = String(e).indexOf(" ")) < 0 ? !(String(e).indexOf("T") < 0 || String(new Date(e)) == "Invalid Date") && (s !== true || new Date(e)) : (t = (t = t ?? this.settings.datetimeFormat).split("|"), e = [e.substr(0, i), e.substr(i).trim()], t[0] = t[0].trim(), t[1] && (t[1] = t[1].trim()), i = this.isDate(e[0], t[0], true), t = this.isTime(e[1], true), i !== false && t !== false && (s !== true || (i.setHours(t.hours), i.setMinutes(t.minutes), i.setSeconds(t.seconds), i)));
  }
  age(e) {
    let t;
    if (e === "" || e == null || (t = typeof e.getFullYear == "function" ? e : parseInt(e) == e && 0 < parseInt(e) ? new Date(parseInt(e)) : new Date(e), String(t) === "Invalid Date")) return "";
    e = ((/* @__PURE__ */ new Date()).getTime() - t.getTime()) / 1e3;
    let s = "", i = "";
    return e < 0 ? (s = 0, i = "sec") : e < 60 ? (s = Math.floor(e), i = "sec", e < 0 && (s = 0, i = "sec")) : e < 3600 ? (s = Math.floor(e / 60), i = "min") : e < 86400 ? (s = Math.floor(e / 60 / 60), i = "hour") : e < 2592e3 ? (s = Math.floor(e / 24 / 60 / 60), i = "day") : e < 31536e3 ? (s = Math.floor(e / 30 / 24 / 60 / 60 * 10) / 10, i = "month") : e < 126144e3 ? (s = Math.floor(e / 365 / 24 / 60 / 60 * 10) / 10, i = "year") : 126144e3 <= e && (s = Math.floor(e / 365.25 / 24 / 60 / 60 * 10) / 10, i = "year"), s + " " + i + (1 < s ? "s" : "");
  }
  interval(e) {
    return e < 100 ? "< 0.01 sec" : e < 1e3 ? Math.floor(e / 10) / 100 + " sec" : e < 1e4 ? Math.floor(e / 100) / 10 + " sec" : e < 6e4 ? Math.floor(e / 1e3) + " secs" : e < 36e5 ? Math.floor(e / 6e4) + " mins" : e < 864e5 ? Math.floor(e / 36e5 * 10) / 10 + " hours" : e < 2628e6 ? Math.floor(e / 864e5 * 10) / 10 + " days" : e < 31536e6 ? Math.floor(e / 2628e6 * 10) / 10 + " months" : Math.floor(e / 31536e5) / 10 + " years";
  }
  date(n) {
    if (n === "" || n == null || typeof n == "object" && !n.getMonth) return "";
    let t = new Date(n);
    if (this.isInt(n) && (t = new Date(Number(n))), String(t) === "Invalid Date") return "";
    var n = this.settings.shortmonths, i = /* @__PURE__ */ new Date(), r = /* @__PURE__ */ new Date(), s = (r.setTime(r.getTime() - 864e5), n[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear()), i = n[i.getMonth()] + " " + i.getDate() + ", " + i.getFullYear(), n = n[r.getMonth()] + " " + r.getDate() + ", " + r.getFullYear(), r = t.getHours() - (12 < t.getHours() ? 12 : 0) + ":" + (t.getMinutes() < 10 ? "0" : "") + t.getMinutes() + " " + (12 <= t.getHours() ? "pm" : "am");
    let l = s == i ? r : s;
    return '<span title="' + s + " " + (t.getHours() - (12 < t.getHours() ? 12 : 0) + ":" + (t.getMinutes() < 10 ? "0" : "") + t.getMinutes() + ":" + (t.getSeconds() < 10 ? "0" : "") + t.getSeconds() + " " + (12 <= t.getHours() ? "pm" : "am")) + '">' + (l = s == n ? this.lang("Yesterday") : l) + "</span>";
  }
  formatSize(e) {
    var t;
    return this.isFloat(e) && e !== "" ? (e = parseFloat(e)) === 0 ? 0 : (t = parseInt(Math.floor(Math.log(e) / Math.log(1024))), (Math.floor(e / Math.pow(1024, t) * 10) / 10).toFixed(t === 0 ? 0 : 1) + " " + (["Bt", "KB", "MB", "GB", "TB", "PB", "EB", "ZB"][t] || "??")) : "";
  }
  formatNumber(e, t, s) {
    return e == null || e === "" || typeof e == "object" ? "" : (s = { minimumFractionDigits: parseInt(t), maximumFractionDigits: parseInt(t), useGrouping: !!s }, (t == null || t < 0) && (s.minimumFractionDigits = 0, s.maximumFractionDigits = 20), parseFloat(e).toLocaleString(this.settings.locale, s));
  }
  formatDate(e, t) {
    if (t = t || this.settings.dateFormat, e === "" || e == null || typeof e == "object" && !e.getMonth) return "";
    let s = new Date(e);
    var i, n;
    return this.isInt(e) && (s = new Date(Number(e))), String(s) === "Invalid Date" ? "" : (e = s.getFullYear(), i = s.getMonth(), n = s.getDate(), t.toLowerCase().replace("month", this.settings.fullmonths[i]).replace("mon", this.settings.shortmonths[i]).replace(/yyyy/g, ("000" + e).slice(-4)).replace(/yyy/g, ("000" + e).slice(-4)).replace(/yy/g, ("0" + e).slice(-2)).replace(/(^|[^a-z$])y/g, "$1" + e).replace(/mm/g, ("0" + (i + 1)).slice(-2)).replace(/dd/g, ("0" + n).slice(-2)).replace(/th/g, n == 1 ? "st" : "th").replace(/th/g, n == 2 ? "nd" : "th").replace(/th/g, n == 3 ? "rd" : "th").replace(/(^|[^a-z$])m/g, "$1" + (i + 1)).replace(/(^|[^a-z$])d/g, "$1" + n));
  }
  formatTime(e, t) {
    if (t = t || this.settings.timeFormat, e === "" || e == null || typeof e == "object" && !e.getMonth) return "";
    let s = new Date(e);
    if (this.isInt(e) && (s = new Date(Number(e))), this.isTime(e) && (e = this.isTime(e, true), (s = /* @__PURE__ */ new Date()).setHours(e.hours), s.setMinutes(e.minutes)), String(s) === "Invalid Date") return "";
    let i = "am", n = s.getHours();
    e = s.getHours();
    let r = s.getMinutes(), l = s.getSeconds();
    return r < 10 && (r = "0" + r), l < 10 && (l = "0" + l), t.indexOf("am") === -1 && t.indexOf("pm") === -1 || (12 <= n && (i = "pm"), 12 < n && (n -= 12), n === 0 && (n = 12)), t.toLowerCase().replace("am", i).replace("pm", i).replace("hhh", n < 10 ? "0" + n : n).replace("hh24", e < 10 ? "0" + e : e).replace("h24", e).replace("hh", n).replace("mm", r).replace("mi", r).replace("ss", l).replace(/(^|[^a-z$])h/g, "$1" + n).replace(/(^|[^a-z$])m/g, "$1" + r).replace(/(^|[^a-z$])s/g, "$1" + l);
  }
  formatDateTime(e, t) {
    let s;
    return e === "" || e == null || typeof e == "object" && !e.getMonth ? "" : (typeof t != "string" ? s = [this.settings.dateFormat, this.settings.timeFormat] : ((s = t.split("|"))[0] = s[0].trim(), s[1] = 1 < s.length ? s[1].trim() : this.settings.timeFormat), s[1] === "h12" && (s[1] = "h:m pm"), s[1] === "h24" && (s[1] = "h24:m"), this.formatDate(e, s[0]) + " " + this.formatTime(e, s[1]));
  }
  stripSpaces(e) {
    if (e != null) switch (typeof e) {
      case "number":
        break;
      case "string":
        e = String(e).replace(/(?:\r\n|\r|\n)/g, " ").replace(/\s\s+/g, " ").trim();
        break;
      case "object":
        Array.isArray(e) ? (e = this.extend([], e)).forEach((t, s) => {
          e[s] = this.stripSpaces(t);
        }) : (e = this.extend({}, e), Object.keys(e).forEach((t) => {
          e[t] = this.stripSpaces(e[t]);
        }));
    }
    return e;
  }
  stripTags(e) {
    if (e != null) switch (typeof e) {
      case "number":
        break;
      case "string":
        e = String(e).replace(/<(?:[^>=]|='[^']*'|="[^"]*"|=[^'"][^\s>]*)*>/gi, "");
        break;
      case "object":
        Array.isArray(e) ? (e = this.extend([], e)).forEach((t, s) => {
          e[s] = this.stripTags(t);
        }) : (e = this.extend({}, e), Object.keys(e).forEach((t) => {
          e[t] = this.stripTags(e[t]);
        }));
    }
    return e;
  }
  encodeTags(e) {
    if (e != null) switch (typeof e) {
      case "number":
        break;
      case "string":
        e = String(e).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        break;
      case "object":
        Array.isArray(e) ? (e = this.extend([], e)).forEach((t, s) => {
          e[s] = this.encodeTags(t);
        }) : (e = this.extend({}, e), Object.keys(e).forEach((t) => {
          e[t] = this.encodeTags(e[t]);
        }));
    }
    return e;
  }
  decodeTags(e) {
    if (e != null) switch (typeof e) {
      case "number":
        break;
      case "string":
        e = String(e).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
        break;
      case "object":
        Array.isArray(e) ? (e = this.extend([], e)).forEach((t, s) => {
          e[s] = this.decodeTags(t);
        }) : (e = this.extend({}, e), Object.keys(e).forEach((t) => {
          e[t] = this.decodeTags(e[t]);
        }));
    }
    return e;
  }
  escapeId(e) {
    return e === "" || e == null ? "" : (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, (t, s) => s ? t === "\0" ? "\uFFFD" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t);
  }
  unescapeId(e) {
    return e === "" || e == null ? "" : e.replace(/\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\([^\r\n\f])/g, (t, s) => (t = "0x" + t.slice(1) - 65536, s || (t < 0 ? String.fromCharCode(65536 + t) : String.fromCharCode(t >> 10 | 55296, 1023 & t | 56320))));
  }
  base64encode(e) {
    return btoa(e);
  }
  base64decode(e) {
    return atob(e);
  }
  async sha256(e) {
    return e = new TextEncoder().encode(e), crypto.subtle.digest("SHA-256", e).then((t) => Array.from(new Uint8Array(t)).map((s) => s.toString(16).padStart(2, "0")).join(""));
  }
  transition(e, t, s, i) {
    return new Promise((n, r) => {
      var l = getComputedStyle(e);
      let h = parseInt(l.width), o = parseInt(l.height);
      if (e && t) {
        switch (e.parentNode.style.cssText += "perspective: 900px; overflow: hidden;", e.style.cssText += "; position: absolute; z-index: 1019; backface-visibility: hidden", t.style.cssText += "; position: absolute; z-index: 1020; backface-visibility: hidden", s) {
          case "slide-left":
            e.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", t.style.cssText += "overflow: hidden; transform: translate3d(" + h + "px, 0, 0)", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; transform: translate3d(0, 0, 0)", e.style.cssText += "transition: 0.5s; transform: translate3d(-" + h + "px, 0, 0)";
            }, 1);
            break;
          case "slide-right":
            e.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", t.style.cssText += "overflow: hidden; transform: translate3d(-" + h + "px, 0, 0)", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; transform: translate3d(0px, 0, 0)", e.style.cssText += "transition: 0.5s; transform: translate3d(" + h + "px, 0, 0)";
            }, 1);
            break;
          case "slide-down":
            e.style.cssText += "overflow: hidden; z-index: 1; transform: translate3d(0, 0, 0)", t.style.cssText += "overflow: hidden; z-index: 0; transform: translate3d(0, 0, 0)", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; transform: translate3d(0, 0, 0)", e.style.cssText += "transition: 0.5s; transform: translate3d(0, " + o + "px, 0)";
            }, 1);
            break;
          case "slide-up":
            e.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", t.style.cssText += "overflow: hidden; transform: translate3d(0, " + o + "px, 0)", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; transform: translate3d(0, 0, 0)", e.style.cssText += "transition: 0.5s; transform: translate3d(0, 0, 0)";
            }, 1);
            break;
          case "flip-left":
            e.style.cssText += "overflow: hidden; transform: rotateY(0deg)", t.style.cssText += "overflow: hidden; transform: rotateY(-180deg)", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; transform: rotateY(0deg)", e.style.cssText += "transition: 0.5s; transform: rotateY(180deg)";
            }, 1);
            break;
          case "flip-right":
            e.style.cssText += "overflow: hidden; transform: rotateY(0deg)", t.style.cssText += "overflow: hidden; transform: rotateY(180deg)", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; transform: rotateY(0deg)", e.style.cssText += "transition: 0.5s; transform: rotateY(-180deg)";
            }, 1);
            break;
          case "flip-down":
            e.style.cssText += "overflow: hidden; transform: rotateX(0deg)", t.style.cssText += "overflow: hidden; transform: rotateX(180deg)", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; transform: rotateX(0deg)", e.style.cssText += "transition: 0.5s; transform: rotateX(-180deg)";
            }, 1);
            break;
          case "flip-up":
            e.style.cssText += "overflow: hidden; transform: rotateX(0deg)", t.style.cssText += "overflow: hidden; transform: rotateX(-180deg)", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; transform: rotateX(0deg)", e.style.cssText += "transition: 0.5s; transform: rotateX(180deg)";
            }, 1);
            break;
          case "pop-in":
            e.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", t.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0); transform: scale(.8); opacity: 0;", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; transform: scale(1); opacity: 1;", e.style.cssText += "transition: 0.5s;";
            }, 1);
            break;
          case "pop-out":
            e.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0); transform: scale(1); opacity: 1;", t.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0); opacity: 0;", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; opacity: 1;", e.style.cssText += "transition: 0.5s; transform: scale(1.7); opacity: 0;";
            }, 1);
            break;
          default:
            e.style.cssText += "overflow: hidden; transform: translate3d(0, 0, 0)", t.style.cssText += "overflow: hidden; translate3d(0, 0, 0); opacity: 0;", a(t).show(), setTimeout(() => {
              t.style.cssText += "transition: 0.5s; opacity: 1;", e.style.cssText += "transition: 0.5s";
            }, 1);
        }
        setTimeout(() => {
          s === "slide-down" && (a(e).css("z-index", "1019"), a(t).css("z-index", "1020")), t && a(t).css({ opacity: "1" }).css({ transition: "", transform: "" }), e && a(e).css({ opacity: "1" }).css({ transition: "", transform: "" }), typeof i == "function" && i(), n();
        }, 500);
      } else console.log("ERROR: Cannot do transition when one of the divs is null");
    });
  }
  lock(e, t = {}) {
    if (e != null) {
      typeof t == "string" && (t = { msg: t }), arguments[2] && (t.spinner = arguments[2]), t = this.extend({ spinner: false }, t), (e == null ? void 0 : e[0]) instanceof Node && (e = Array.isArray(e) ? e : e.get()), t.msg || t.msg === 0 || (t.msg = ""), this.unlock(e);
      var s = a(e).get(0);
      let i = s.scrollWidth, n = s.scrollHeight, r = (s.tagName == "BODY" && (i < innerWidth && (i = innerWidth), n < innerHeight) && (n = innerHeight), a(e).prepend(`<div class="w2ui-lock" style="height: ${n}px; width: ${i}px"></div><div class="w2ui-lock-msg"></div>`), a(e).find(".w2ui-lock"));
      s = a(e).find(".w2ui-lock-msg"), e = (t.msg || s.css({ "background-color": "transparent", "background-image": "none", border: "0px", "box-shadow": "none" }), t.spinner === true && (t.msg = `<div class="w2ui-spinner" ${t.msg ? "" : 'style="width: 35px; height: 35px"'}></div>` + t.msg), t.msg ? s.html(t.msg).css("display", "block") : s.remove(), t.opacity != null && r.css("opacity", t.opacity), r.css({ display: "block" }), t.bgColor && r.css({ "background-color": t.bgColor }), getComputedStyle(r.get(0)));
      let l = e.opacity ?? 0.15;
      r.on("mousedown", function() {
        typeof t.onClick == "function" ? t.onClick() : r.css({ transition: ".2s", opacity: 1.5 * l });
      }).on("mouseup", function() {
        typeof t.onClick != "function" && r.css({ transition: ".2s", opacity: l });
      }).on("mousewheel", function(h) {
        h && (h.stopPropagation(), h.preventDefault());
      });
    }
  }
  unlock(e, t) {
    var s;
    e != null && (clearTimeout(e._prevUnlock), (e == null ? void 0 : e[0]) instanceof Node && (e = Array.isArray(e) ? e : e.get()), this.isInt(t) && 0 < t ? (a(e).find(".w2ui-lock").css({ transition: t / 1e3 + "s", opacity: 0 }), s = a(e).get(0), clearTimeout(s._prevUnlock), s._prevUnlock = setTimeout(() => {
      a(e).find(".w2ui-lock").remove();
    }, t)) : a(e).find(".w2ui-lock").remove(), a(e).find(".w2ui-lock-msg").remove());
  }
  message(e, t) {
    var _a, _b;
    let s, i, n;
    var r = () => {
      var _a2;
      var m = a(e == null ? void 0 : e.box).find(".w2ui-message");
      m.length != 0 && typeof ((_a2 = t = m.get(0)._msg_options || {}) == null ? void 0 : _a2.close) == "function" && t.close();
    };
    let l = (m) => {
      var _a2, _b2;
      var w, g = m.box._msg_prevFocus;
      a(e.box).find(".w2ui-message").length <= 1 ? e.owner ? e.owner.unlock(e.param, 150) : this.unlock(e.box, 150) : a(e.box).find(`#w2ui-message-${(_a2 = e.owner) == null ? void 0 : _a2.name}-` + (m.msgIndex - 1)).css("z-index", 1500), g ? 0 < (w = a(g).closest(".w2ui-message")).length ? w.get(0)._msg_options.setFocus(g) : g.focus() : typeof ((_b2 = e.owner) == null ? void 0 : _b2.focus) == "function" && e.owner.focus(), a(m.box).remove(), m.msgIndex === 0 && (f.css("z-index", m.tmp.zIndex), a(e.box).css("overflow", m.tmp.overflow)), m.trigger && n.finish();
    };
    if (typeof (t = typeof t != "string" && typeof t != "number" ? t : { width: String(t).length < 300 ? 350 : 550, height: String(t).length < 300 ? 170 : 250, text: String(t) }) != "object") return void r();
    t.text != null && (t.body = `<div class="w2ui-centered w2ui-msg-text">${t.text}</div>`), t.width == null && (t.width = 350), t.height == null && (t.height = 170), t.hideOn == null && (t.hideOn = ["esc"]), t.on == null && (c = t, t = new fe(), p.extend(t, c)), t.on("open", (m) => {
      p.bindEvents(a(t.box).find(".w2ui-eaction"), t), a(m.detail.box).find("button, input, textarea, [name=hidden-first]").off(".message").on("keydown.message", function(w) {
        w.keyCode == 27 && t.hideOn.includes("esc") && (t.cancelAction ? t.action(t.cancelAction) : t.close());
      }), setTimeout(() => t.setFocus(t.focus), 300);
    }), t.off(".prom");
    let h = { self: t, action(m) {
      return t.on("action.prom", m), h;
    }, close(m) {
      return t.on("close.prom", m), h;
    }, open(m) {
      return t.on("open.prom", m), h;
    }, then(m) {
      return t.on("open:after.prom", m), h;
    } }, o = (t.actions == null && t.buttons == null && t.html == null && (t.actions = { Ok(m) {
      m.detail.self.close();
    } }), t.off(".buttons"), t.actions != null && (t.buttons = "", Object.keys(t.actions).forEach((m) => {
      var w = t.actions[m];
      let g = m;
      typeof w == "function" && (t.buttons += `<button class="w2ui-btn w2ui-eaction" data-click='["action","${m}","event"]' name="${m}">${m}</button>`), typeof w == "object" && (t.buttons += `<button class="w2ui-btn w2ui-eaction ${w.class || ""}" name="${m}" data-click='["action","${m}","event"]'
                        style="${w.style ?? ""}" ${w.attrs ?? ""}>${w.text || m}</button>`, g = Array.isArray(t.actions) ? w.text : m), typeof w == "string" && (t.buttons += `<button class="w2ui-btn w2ui-eaction" name="${w}" data-click='["action","${w}","event"]'>${w}</button>`, g = w), typeof g == "string" && (g = g[0].toLowerCase() + g.substr(1).replace(/\s+/g, "")), h[g] = function(v) {
        return t.on("action.buttons", (k) => {
          k.detail.action[0].toLowerCase() + k.detail.action.substr(1).replace(/\s+/g, "") == g && v(k);
        }), h;
      };
    })), Array("html", "body", "buttons").forEach((m) => {
      t[m] = String(t[m] ?? "").trim();
    }), t.body === "" && t.buttons === "" || (t.html = `
                <div class="w2ui-message-body">${t.body || ""}</div>
                <div class="w2ui-message-buttons">${t.buttons || ""}</div>
            `), getComputedStyle(a(e.box).get(0)));
    var c = parseFloat(o.width), d = parseFloat(o.height);
    let u = 0, f = (0 < a(e.after).length && (o = getComputedStyle(a(e.after).get(0)), u = parseInt(o.display != "none" ? parseInt(o.height) : 0)), t.width > c && (t.width = c - 10), t.height > d - u && (t.height = d - 10 - u), t.originalWidth = t.width, t.originalHeight = t.height, parseInt(t.width) < 0 && (t.width = c + t.width), parseInt(t.width) < 10 && (t.width = 10), parseInt(t.height) < 0 && (t.height = d + t.height - u), parseInt(t.height) < 10 && (t.height = 10), t.originalHeight < 0 && (t.height = d + t.originalHeight - u), t.originalWidth < 0 && (t.width = c + 2 * t.originalWidth), a(e.box).find(e.after));
    return t.tmp || (t.tmp = { zIndex: f.css("z-index"), overflow: o.overflow }), t.html === "" && t.body === "" && t.buttons === "" ? r() : (t.msgIndex = a(e.box).find(".w2ui-message").length, t.msgIndex === 0 && typeof this.lock == "function" && (a(e.box).css("overflow", "hidden"), e.owner ? e.owner.lock(e.param) : this.lock(e.box)), a(e.box).find(".w2ui-message").css("z-index", 1390), f.css("z-index", 1501), d = `
                <div id="w2ui-message-${(_a = e.owner) == null ? void 0 : _a.name}-${t.msgIndex}" class="w2ui-message" data-mousedown="stop"
                    style="z-index: 1500; left: ${(c - t.width) / 2}px; top: ${u}px;
                        width: ${t.width}px; height: ${t.height}px; transform: translateY(-${t.height}px)"
                    ${t.hideOn.includes("click") ? e.param ? `data-click='["message", "${e.param}"]` : 'data-click="message"' : ""}>
                    <span name="hidden-first" tabindex="0" style="position: absolute; top: 0; outline: none"></span>
                    ${t.html}
                    <span name="hidden-last" tabindex="0" style="position: absolute; top: 0; outline: none"></span>
                </div>`, 0 < a(e.after).length ? a(e.box).find(e.after).after(d) : a(e.box).prepend(d), t.box = a(e.box).find(`#w2ui-message-${(_b = e.owner) == null ? void 0 : _b.name}-` + t.msgIndex)[0], p.bindEvents(t.box, this), a(t.box).addClass("animating"), (t.box._msg_options = t).box._msg_prevFocus = document.activeElement, setTimeout(() => {
      var _a2;
      (n = t.trigger("open", { target: this.name, box: t.box, self: t })).isCancelled === true ? (a(e.box).find(`#w2ui-message-${(_a2 = e.owner) == null ? void 0 : _a2.name}-` + t.msgIndex).remove(), t.msgIndex === 0 && (f.css("z-index", t.tmp.zIndex), a(e.box).css("overflow", t.tmp.overflow))) : a(t.box).css({ transition: "0.3s", transform: "translateY(0px)" });
    }, 0), i = setTimeout(() => {
      var _a2;
      a(e.box).find(`#w2ui-message-${(_a2 = e.owner) == null ? void 0 : _a2.name}-` + t.msgIndex).removeClass("animating").css({ transition: "0s" }), n.finish();
    }, 300)), t.action = (m, w) => {
      let g = t.actions[m];
      g instanceof Object && g.onClick && (g = g.onClick), m = t.trigger("action", { target: this.name, action: m, self: t, originalEvent: w, value: t.input ? t.input.value : null }), m.isCancelled !== true && (typeof g == "function" && g(m), m.finish());
    }, t.close = () => {
      var _a2;
      (n = t.trigger("close", { target: "self", box: t.box, self: t })).isCancelled !== true && (clearTimeout(i), a(t.box).hasClass("animating") ? (clearTimeout(s), l(t)) : (a(t.box).addClass("w2ui-closing animating").css({ transition: "0.15s", transform: "translateY(-" + t.height + "px)" }), t.msgIndex !== 0 && a(e.box).find(`#w2ui-message-${(_a2 = e.owner) == null ? void 0 : _a2.name}-` + (t.msgIndex - 1)).css("z-index", 1499), s = setTimeout(() => {
        l(t);
      }, 150)));
    }, t.setFocus = (m) => {
      var _a2, _b2;
      var w = a(e.box).find(".w2ui-message").length - 1;
      let g = a(e.box).find(`#w2ui-message-${(_a2 = e.owner) == null ? void 0 : _a2.name}-` + w), v = "input, button, select, textarea, [contentEditable], .w2ui-input";
      (_b2 = m != null ? isNaN(m) ? g.find(v).filter(m).get(0) : g.find(v).get(m) : g.find("[name=hidden-first]").get(0)) == null ? void 0 : _b2.focus(), a(e.box).find(".w2ui-message").find(v + ",[name=hidden-first],[name=hidden-last]").off(".keep-focus"), a(g).find(v + ",[name=hidden-first],[name=hidden-last]").on("blur.keep-focus", function(k) {
        setTimeout(() => {
          var _a3, _b3, _c;
          var x = document.activeElement, S = 0 < a(g).find(v).filter(x).length, $ = a(x).attr("name");
          !S && x && x !== document.body && ((_a3 = a(g).find(v).get(0)) == null ? void 0 : _a3.focus()), $ == "hidden-last" && ((_b3 = a(g).find(v).get(0)) == null ? void 0 : _b3.focus()), $ == "hidden-first" && ((_c = a(g).find(v).get(-1)) == null ? void 0 : _c.focus());
        }, 1);
      });
    }, h;
  }
  notify(e, t) {
    return new Promise((s) => {
      if (typeof e == "object" && (e = (t = e).text), (t = t || {}).where = t.where ?? document.body, t.timeout = t.timeout ?? 15e3, typeof this.tmp.notify_resolve == "function" && (this.tmp.notify_resolve(), a(this.tmp.notify_where).find("#w2ui-notify").remove()), this.tmp.notify_resolve = s, this.tmp.notify_where = t.where, clearTimeout(this.tmp.notify_timer), e) {
        if (typeof t.actions == "object") {
          let n = {};
          Object.keys(t.actions).forEach((r) => {
            n[r] = `<a class="w2ui-notify-link" value="${r}">${r}</a>`;
          }), e = this.execTemplate(e, n);
        }
        var i = `
                    <div id="w2ui-notify">
                        <div class="${t.class} ${t.error ? "w2ui-notify-error" : ""}">
                            ${e}
                            <span class="w2ui-notify-close w2ui-icon-cross"></span>
                        </div>
                    </div>`;
        a(t.where).append(i), a(t.where).find("#w2ui-notify").find(".w2ui-notify-close").on("click", (n) => {
          a(t.where).find("#w2ui-notify").remove(), s();
        }), t.actions && a(t.where).find("#w2ui-notify .w2ui-notify-link").on("click", (n) => {
          n = a(n.target).attr("value"), t.actions[n](), a(t.where).find("#w2ui-notify").remove(), s();
        }), 0 < t.timeout && (this.tmp.notify_timer = setTimeout(() => {
          a(t.where).find("#w2ui-notify").remove(), s();
        }, t.timeout));
      }
    });
  }
  confirm(e, t) {
    return p.normButtons(t = typeof t == "string" ? { text: t } : t, { yes: "Yes", no: "No" }), e = p.message(e, t), e && e.action((s) => {
      s.detail.self.close();
    }), e;
  }
  normButtons(e, t) {
    e.actions = e.actions ?? {};
    var s = Object.keys(t);
    return s.forEach((i) => {
      var n = e["btn_" + i];
      n && (t[i] = { text: p.lang(n.text ?? ""), class: n.class ?? "", style: n.style ?? "", attrs: n.attrs ?? "" }, delete e["btn_" + i]), Array("text", "class", "style", "attrs").forEach((r) => {
        e[i + "_" + r] && (typeof t[i] == "string" && (t[i] = { text: t[i] }), t[i][r] = e[i + "_" + r], delete e[i + "_" + r]);
      });
    }), s.includes("yes") && s.includes("no") && (p.settings.macButtonOrder ? p.extend(e.actions, { no: t.no, yes: t.yes }) : p.extend(e.actions, { yes: t.yes, no: t.no })), s.includes("ok") && s.includes("cancel") && (p.settings.macButtonOrder ? p.extend(e.actions, { cancel: t.cancel, ok: t.ok }) : p.extend(e.actions, { ok: t.ok, cancel: t.cancel })), e;
  }
  getSize(e, t) {
    let s = 0;
    if (0 < (e = a(e)).length) {
      e = e[0];
      var i = getComputedStyle(e);
      switch (t) {
        case "width":
          s = parseFloat(i.width), i.width === "auto" && (s = 0);
          break;
        case "height":
          s = parseFloat(i.height), i.height === "auto" && (s = 0);
          break;
        default:
          s = parseFloat(i[t] ?? 0) || 0;
      }
    }
    return s;
  }
  getStrWidth(e, t) {
    return a("body").append(`
            <div id="_tmp_width" style="position: absolute; top: -9000px; ${t || ""}">
                ${this.encodeTags(e)}
            </div>`), t = a("#_tmp_width")[0].clientWidth, a("#_tmp_width").remove(), t;
  }
  execTemplate(e, t) {
    return typeof e == "string" && t && typeof t == "object" ? e.replace(/\${([^}]+)?}/g, function(s, i) {
      return t[i] || i;
    }) : e;
  }
  marker(e, t, s = { onlyFirst: false, wholeWord: false }) {
    Array.isArray(t) || (t = t != null && t !== "" ? [t] : []);
    let i = s.wholeWord;
    a(e).each((n) => {
      for (var r = n, l = /\<span class=\"w2ui\-marker\"\>((.|\n|\r)*)\<\/span\>/gi; r.innerHTML.indexOf('<span class="w2ui-marker"') !== -1; ) r.innerHTML = r.innerHTML.replace(l, "$1");
      t.forEach((h) => {
        h = (h = typeof h != "string" ? String(h) : h).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&").replace(/&/g, "&amp;").replace(/</g, "&gt;").replace(/>/g, "&lt;"), h = new RegExp((i ? "\\b" : "") + h + (i ? "\\b" : "") + "(?!([^<]+)?>)", "i" + (s.onlyFirst ? "" : "g")), n.innerHTML = n.innerHTML.replace(h, (o) => '<span class="w2ui-marker">' + o + "</span>");
      });
    });
  }
  lang(e, t) {
    if (!e || this.settings.phrases == null || typeof e != "string" || "<=>=".includes(e)) return this.execTemplate(e, t);
    let s = this.settings.phrases[e];
    return s == null ? (s = e, this.settings.warnNoPhrase && (this.settings.missing || (this.settings.missing = {}), this.settings.missing[e] = "---", this.settings.phrases[e] = "---", console.log(`Missing translation for "%c${e}%c", see %c w2utils.settings.phrases %c with value "---"`, "color: orange", "", "color: #999", ""))) : s !== "---" || this.settings.warnNoPhrase || (s = e), s === "---" && (s = `<span ${this.tooltip(e)}>---</span>`), this.execTemplate(s, t);
  }
  locale(e, t, s) {
    return new Promise((i, n) => {
      if (Array.isArray(e)) {
        this.settings.phrases = {};
        let r = [], l = {};
        e.forEach((h, o) => {
          h.length === 5 && (h = "locale/" + h.toLowerCase() + ".json", e[o] = h), r.push(this.locale(h, true, false));
        }), Promise.allSettled(r).then((h) => {
          h.forEach((o) => {
            o.value && (l[o.value.file] = o.value.data);
          }), e.forEach((o) => {
            this.settings = this.extend({}, this.settings, l[o]);
          }), i();
        });
      } else (e = e || "en-us") instanceof Object ? this.settings = this.extend({}, this.settings, Ke, e) : (e.length === 5 && (e = "locale/" + e.toLowerCase() + ".json"), fetch(e, { method: "GET" }).then((r) => r.json()).then((r) => {
        s !== true && (this.settings = t ? this.extend({}, this.settings, r) : this.extend({}, this.settings, Ke, { phrases: {} }, r)), i({ file: e, data: r });
      }).catch((r) => {
        console.log("ERROR: Cannot load locale " + e), n(r);
      }));
    });
  }
  scrollBarSize() {
    return this.tmp.scrollBarSize || (a("body").append(`
            <div id="_scrollbar_width" style="position: absolute; top: -300px; width: 100px; height: 100px; overflow-y: scroll;">
                <div style="height: 120px">1</div>
            </div>
        `), this.tmp.scrollBarSize = 100 - a("#_scrollbar_width > div")[0].clientWidth, a("#_scrollbar_width").remove()), this.tmp.scrollBarSize;
  }
  checkName(e) {
    return e == null ? (console.log('ERROR: Property "name" is required but not supplied.'), false) : oe[e] != null ? (console.log(`ERROR: Object named "${e}" is already registered as w2ui.${e}.`), false) : !!this.isAlphaNumeric(e) || (console.log('ERROR: Property "name" has to be alpha-numeric (a-z, 0-9, dash and underscore).'), false);
  }
  checkUniqueId(e, t, s, i) {
    Array.isArray(t) || (t = [t]);
    let n = true;
    return t.forEach((r) => {
      r.id === e && (console.log(`ERROR: The item id="${e}" is not unique within the ${s} "${i}".`, t), n = false);
    }), n;
  }
  encodeParams(e, t = "") {
    let s = "";
    return Object.keys(e).forEach((i) => {
      s != "" && (s += "&"), typeof e[i] == "object" ? s += this.encodeParams(e[i], t + i + (t ? "]" : "") + "[") : s += "" + t + i + (t ? "]" : "") + "=" + e[i];
    }), s;
  }
  parseRoute(e) {
    let t = [];
    return e = e.replace(/\/\(/g, "(?:/").replace(/\+/g, "__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, (s, i, n, r, l, h) => (t.push({ name: r, optional: !!h }), i = i || "", (h ? "" : i) + "(?:" + (h ? i : "") + (n || "") + (l || (n ? "([^/.]+?)" : "([^/]+?)")) + ")" + (h || ""))).replace(/([\/.])/g, "\\$1").replace(/__plus__/g, "(.+)").replace(/\*/g, "(.*)"), { path: new RegExp("^" + e + "$", "i"), keys: t };
  }
  getCursorPosition(e) {
    if (e == null) return null;
    let t = 0;
    var s, i = e.ownerDocument || e.document, n = i.defaultView || i.parentWindow;
    let r;
    return ["INPUT", "TEXTAREA"].includes(e.tagName) ? t = e.selectionStart : n.getSelection ? 0 < (r = n.getSelection()).rangeCount && ((s = (n = r.getRangeAt(0)).cloneRange()).selectNodeContents(e), s.setEnd(n.endContainer, n.endOffset), t = s.toString().length) : (r = i.selection) && r.type !== "Control" && (n = r.createRange(), (s = i.body.createTextRange()).moveToElementText(e), s.setEndPoint("EndToEnd", n), t = s.text.length), t;
  }
  setCursorPosition(e, t, s) {
    if (e != null) {
      var i = document.createRange();
      let n, r = window.getSelection();
      if (["INPUT", "TEXTAREA"].includes(e.tagName)) e.setSelectionRange(t, s ?? t);
      else {
        for (let l = 0; l < e.childNodes.length; l++) {
          let h = a(e.childNodes[l]).text();
          if (t <= (h = e.childNodes[l].tagName ? (h = a(e.childNodes[l]).html()).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ") : h).length) {
            (n = (n = e.childNodes[l]).childNodes && 0 < n.childNodes.length ? n.childNodes[0] : n).childNodes && 0 < n.childNodes.length && (n = n.childNodes[0]);
            break;
          }
          t -= h.length;
        }
        n != null && (t > n.length && (t = n.length), i.setStart(n, t), s ? i.setEnd(n, s) : i.collapse(true), r.removeAllRanges(), r.addRange(i));
      }
    }
  }
  parseColor(e) {
    if (typeof e != "string") return null;
    let t = {};
    if ((e = (e = e.trim().toUpperCase())[0] === "#" ? e.substr(1) : e).length === 3) t = { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: 1 };
    else if (e.length === 6) t = { r: parseInt(e.substr(0, 2), 16), g: parseInt(e.substr(2, 2), 16), b: parseInt(e.substr(4, 2), 16), a: 1 };
    else if (e.length === 8) t = { r: parseInt(e.substr(0, 2), 16), g: parseInt(e.substr(2, 2), 16), b: parseInt(e.substr(4, 2), 16), a: Math.round(parseInt(e.substr(6, 2), 16) / 255 * 100) / 100 };
    else if (4 < e.length && e.substr(0, 4) === "RGB(") {
      var s = e.replace("RGB", "").replace(/\(/g, "").replace(/\)/g, "").split(",");
      t = { r: parseInt(s[0], 10), g: parseInt(s[1], 10), b: parseInt(s[2], 10), a: 1 };
    } else {
      if (!(5 < e.length && e.substr(0, 5) === "RGBA(")) return null;
      s = e.replace("RGBA", "").replace(/\(/g, "").replace(/\)/g, "").split(","), t = { r: parseInt(s[0], 10), g: parseInt(s[1], 10), b: parseInt(s[2], 10), a: parseFloat(s[3]) };
    }
    return t;
  }
  hsv2rgb(e, t, s, i) {
    let n, r, l, h, o, c, d, u;
    switch (arguments.length === 1 && (t = e.s, s = e.v, i = e.a, e = e.h), c = (s /= 100) * (1 - (t /= 100)), d = s * (1 - (o = 6 * (e /= 360) - (h = Math.floor(6 * e))) * t), u = s * (1 - (1 - o) * t), h % 6) {
      case 0:
        n = s, r = u, l = c;
        break;
      case 1:
        n = d, r = s, l = c;
        break;
      case 2:
        n = c, r = s, l = u;
        break;
      case 3:
        n = c, r = d, l = s;
        break;
      case 4:
        n = u, r = c, l = s;
        break;
      case 5:
        n = s, r = c, l = d;
    }
    return { r: Math.round(255 * n), g: Math.round(255 * r), b: Math.round(255 * l), a: i ?? 1 };
  }
  rgb2hsv(e, t, s, i) {
    arguments.length === 1 && (t = e.g, s = e.b, i = e.a, e = e.r);
    let n = Math.max(e, t, s), r = Math.min(e, t, s), l = n - r, h, o = n === 0 ? 0 : l / n, c = n / 255;
    switch (n) {
      case r:
        h = 0;
        break;
      case e:
        h = t - s + l * (t < s ? 6 : 0), h /= 6 * l;
        break;
      case t:
        h = s - e + 2 * l, h /= 6 * l;
        break;
      case s:
        h = e - t + 4 * l, h /= 6 * l;
    }
    return { h: Math.round(360 * h), s: Math.round(100 * o), v: Math.round(100 * c), a: i ?? 1 };
  }
  tooltip(e, t) {
    let s = "mouseenter", i = "mouseleave";
    return t = (t = typeof e == "object" ? e : t) || {}, typeof e == "string" && (t.html = e), t.showOn && (s = t.showOn, delete t.showOn), t.hideOn && (i = t.hideOn, delete t.hideOn), t.name || (t.name = "no-name"), ` on${s}="w2tooltip.show(this, JSON.parse(w2utils.base64decode('${this.base64encode(JSON.stringify(t))}')))" on${i}="w2tooltip.hide('${t.name}')"`;
  }
  isPlainObject(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]" && (e.constructor === void 0 || (e = Object.getPrototypeOf(e)) === null || e === Object.prototype);
  }
  clone(e, t) {
    let s;
    return t = Object.assign({ functions: true, elements: true, events: true, exclude: [] }, t ?? {}), Array.isArray(e) ? (s = Array.from(e)).forEach((i, n) => {
      s[n] = this.clone(i, t);
    }) : this.isPlainObject(e) ? (s = {}, Object.assign(s, e), t.exclude && t.exclude.forEach((i) => {
      delete s[i];
    }), Object.keys(s).forEach((i) => {
      s[i] = this.clone(s[i], t), s[i] === void 0 && delete s[i];
    })) : e instanceof Function && !t.functions || e instanceof Node && !t.elements || e instanceof Event && !t.events || (s = e), s;
  }
  extend(e, t) {
    if (Array.isArray(e)) {
      if (!Array.isArray(t)) throw new Error("Arrays can be extended with arrays only");
      e.splice(0, e.length), t.forEach((s) => {
        e.push(this.clone(s));
      });
    } else {
      if (e instanceof Node || e instanceof Event) throw new Error("HTML elmenents and events cannot be extended");
      if (e && typeof e == "object" && t != null) {
        if (typeof t != "object") throw new Error("Object can be extended with other objects only.");
        Object.keys(t).forEach((s) => {
          var i;
          e[s] != null && typeof e[s] == "object" && t[s] != null && typeof t[s] == "object" ? (i = this.clone(t[s]), e[s] instanceof Node || e[s] instanceof Event ? e[s] = i : (Array.isArray(e[s]) && this.isPlainObject(i) && (e[s] = {}), this.extend(e[s], i))) : e[s] = this.clone(t[s]);
        });
      } else if (t != null) throw new Error("Object is not extendable, only {} or [] can be extended.");
    }
    if (2 < arguments.length) for (let s = 2; s < arguments.length; s++) this.extend(e, arguments[s]);
    return e;
  }
  naturalCompare(e, t) {
    let s, i, n = 1, r = 0, l = 0, h = String.alphabet;
    function o(c, d, u) {
      if (u) {
        for (s = d; (u = o(c, s)) < 76 && 65 < u; ) ++s;
        return +c.slice(d - 1, s);
      }
      return -1 < (u = h && h.indexOf(c.charAt(d))) ? u + 76 : (u = c.charCodeAt(d) || 0) < 45 || 127 < u ? u : u < 46 ? 65 : u < 48 ? u - 1 : u < 58 ? u + 18 : u < 65 ? u - 11 : u < 91 ? u + 11 : u < 97 ? u - 37 : u < 123 ? u + 5 : u - 63;
    }
    if ((e += "") != (t += "")) {
      for (; n; ) if (i = o(e, r++), n = o(t, l++), i < 76 && n < 76 && 66 < i && 66 < n && (i = o(e, r, r), n = o(t, l, r = s), l = s), i != n) return i < n ? -1 : 1;
    }
    return 0;
  }
  normMenu(e, t) {
    return Array.isArray(e) ? (e.forEach((s, i) => {
      typeof s == "string" || typeof s == "number" ? e[i] = { id: s, text: String(s) } : s != null ? (s.caption != null && s.text == null && (s.text = s.caption), s.text != null && s.id == null && (s.id = s.text), s.text == null && s.id != null && (s.text = s.id)) : e[i] = { id: null, text: "null" };
    }), e) : typeof e == "function" ? (t = e.call(this, e, t), p.normMenu.call(this, t)) : typeof e == "object" ? Object.keys(e).map((s) => ({ id: s, text: e[s] })) : void 0;
  }
  prepareParams(e, t, s) {
    s = s ?? p.settings.dataType;
    let i = t.body;
    switch (s) {
      case "HTTPJSON":
        i = { request: i }, ["PUT", "DELETE"].includes(t.method) && (t.method = "POST"), n();
        break;
      case "HTTP":
        ["PUT", "DELETE"].includes(t.method) && (t.method = "POST"), n();
        break;
      case "RESTFULL":
        ["PUT", "DELETE"].includes(t.method) ? t.headers["Content-Type"] = "application/json" : n();
        break;
      case "JSON":
        t.method == "GET" ? (i = { request: i }, n()) : (t.headers["Content-Type"] = "application/json", t.method = "POST");
    }
    return t.body = typeof t.body == "string" ? t.body : JSON.stringify(t.body), t;
    function n() {
      Object.keys(i).forEach((r) => {
        let l = i[r];
        typeof l == "object" && (l = JSON.stringify(l)), e.searchParams.append(r, l);
      }), delete t.body;
    }
  }
  bindEvents(e, t) {
    e.length != 0 && ((e == null ? void 0 : e[0]) instanceof Node && (e = Array.isArray(e) ? e : e.get()), a(e).each((s) => {
      let i = a(s).data();
      Object.keys(i).forEach((n) => {
        if (["click", "dblclick", "mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mousemove", "mouseup", "contextmenu", "focus", "focusin", "focusout", "blur", "input", "change", "keydown", "keyup", "keypress"].indexOf(String(n).toLowerCase()) != -1) {
          let r = i[n], l = (r = typeof r == "string" ? r.split("|").map((h) => {
            (h = (h = (h = h === "true" ? true : h) === "false" ? false : h) === "undefined" ? void 0 : h) === "null" && (h = null);
            var o = ["'", '"', "`"];
            return h = typeof (h = parseFloat(h) == h ? parseFloat(h) : h) == "string" && o.includes(h[0]) && o.includes(h[h.length - 1]) ? h.substring(1, h.length - 1) : h;
          }) : r)[0];
          r = r.slice(1), a(s).off(n + ".w2utils-bind").on(n + ".w2utils-bind", function(h) {
            switch (l) {
              case "alert":
                alert(r[0]);
                break;
              case "stop":
                h.stopPropagation();
                break;
              case "prevent":
                h.preventDefault();
                break;
              case "stopPrevent":
                return h.stopPropagation(), h.preventDefault(), false;
              default:
                if (t[l] == null) throw new Error(`Cannot dispatch event as the method "${l}" does not exist.`);
                t[l].apply(t, r.map((o, c) => {
                  switch (String(o).toLowerCase()) {
                    case "event":
                      return h;
                    case "this":
                      return this;
                    default:
                      return o;
                  }
                }));
            }
          });
        }
      });
    }));
  }
  debounce(e, t = 250) {
    let s;
    return (...i) => {
      clearTimeout(s), s = setTimeout(() => {
        e(...i);
      }, t);
    };
  }
}
var p = new Ts();
class As extends fe {
  constructor() {
    super(), this.defaults = { title: "", text: "", body: "", buttons: "", width: 450, height: 250, focus: null, actions: null, style: "", speed: 0.3, modal: false, maximized: false, keyboard: true, showClose: true, showMax: false, transition: null, openMaximized: false, moved: false }, this.name = "popup", this.status = "closed", this.onOpen = null, this.onClose = null, this.onMax = null, this.onMin = null, this.onToggle = null, this.onKeydown = null, this.onAction = null, this.onMove = null, this.tmp = {}, this.handleResize = (e) => {
      this.options.moved || this.center(void 0, void 0, true);
    };
  }
  open(e) {
    let t = this;
    this.status != "closing" && !a("#w2ui-popup").hasClass("animating") || this.close(true);
    var s = this.options;
    (e = ["string", "number"].includes(typeof e) ? p.extend({ title: "Notification", body: `<div class="w2ui-centered">${e}</div>`, actions: { Ok() {
      t.close();
    } }, cancelAction: "ok" }, arguments[1] ?? {}) : e).text != null && (e.body = `<div class="w2ui-centered w2ui-msg-text">${e.text}</div>`), e = Object.assign({}, this.defaults, s, { title: "", body: "" }, e, { maximized: false }), this.options = e, a("#w2ui-popup").length === 0 && (this.off("*"), Object.keys(this).forEach((c) => {
      c.startsWith("on") && c != "on" && (this[c] = null);
    })), Object.keys(e).forEach((c) => {
      c.startsWith("on") && c != "on" && e[c] && (this[c] = e[c]);
    }), e.width = parseInt(e.width), e.height = parseInt(e.height);
    let i, n, r;
    var { top: l, left: h } = this.center();
    let o = { self: this, action(c) {
      return t.on("action.prom", c), o;
    }, close(c) {
      return t.on("close.prom", c), o;
    }, then(c) {
      return t.on("open:after.prom", c), o;
    } };
    if (e.actions == null || e.buttons || (e.buttons = "", Object.keys(e.actions).forEach((c) => {
      var d = e.actions[c];
      let u = c;
      typeof d == "function" && (e.buttons += `<button class="w2ui-btn w2ui-eaction" data-click='["action","${c}","event"]'>${c}</button>`), typeof d == "object" && (e.buttons += `<button class="w2ui-btn w2ui-eaction ${d.class || ""}" name="${c}" data-click='["action","${c}","event"]'
                        style="${d.style}" ${d.attrs}>${d.text || c}</button>`, u = Array.isArray(e.actions) ? d.text : c), typeof d == "string" && (e.buttons += `<button class="w2ui-btn w2ui-eaction" data-click='["action","${d}","event"]'>${d}</button>`, u = d), typeof u == "string" && (u = u[0].toLowerCase() + u.substr(1).replace(/\s+/g, "")), o[u] = function(f) {
        return t.on("action.buttons", (m) => {
          m.detail.action[0].toLowerCase() + m.detail.action.substr(1).replace(/\s+/g, "") == u && f(m);
        }), o;
      };
    })), a("#w2ui-popup").length === 0) {
      if ((i = this.trigger("open", { target: "popup", present: false })).isCancelled === true) return;
      this.status = "opening", p.lock(document.body, { opacity: 0.3, onClick: e.modal ? null : () => {
        this.close();
      } });
      let c = "";
      e.showClose && (c += `<div class="w2ui-popup-button w2ui-popup-close">
                            <span class="w2ui-icon w2ui-icon-cross w2ui-eaction" data-mousedown="stop" data-click="close"></span>
                        </div>`), e.showMax && (c += `<div class="w2ui-popup-button w2ui-popup-max">
                            <span class="w2ui-icon w2ui-icon-box w2ui-eaction" data-mousedown="stop" data-click="toggle"></span>
                        </div>`), h = `
                left: ${h}px;
                top: ${l}px;
                width: ${parseInt(e.width)}px;
                height: ${parseInt(e.height)}px;
                transition: ${e.speed}s
            `, n = `<div id="w2ui-popup" class="w2ui-popup w2ui-anim-open animating" style="${p.stripSpaces(h)}"></div>`, a("body").append(n), a("#w2ui-popup")[0]._w2popup = { self: this, created: new Promise((d) => {
        this._promCreated = d;
      }), opened: new Promise((d) => {
        this._promOpened = d;
      }), closing: new Promise((d) => {
        this._promClosing = d;
      }), closed: new Promise((d) => {
        this._promClosed = d;
      }) }, h = `${e.title ? "" : "top: 0px !important;"} ` + (e.buttons ? "" : "bottom: 0px !important;"), n = `
                <span name="hidden-first" tabindex="0" style="position: absolute; top: -100px"></span>
                <div class="w2ui-popup-title-btns">${c}</div>
                <div class="w2ui-popup-title" style="${e.title ? "" : "display: none"}"></div>
                <div class="w2ui-box" style="${h}">
                    <div class="w2ui-popup-body ${!e.title || " w2ui-popup-no-title"}
                        ${!e.buttons || " w2ui-popup-no-buttons"}" style="${e.style}">
                    </div>
                </div>
                <div class="w2ui-popup-buttons" style="${e.buttons ? "" : "display: none"}"></div>
                <span name="hidden-last" tabindex="0" style="position: absolute; top: -100px"></span>
            `, a("#w2ui-popup").html(n), e.title && a("#w2ui-popup .w2ui-popup-title").append(p.lang(e.title)), e.buttons && a("#w2ui-popup .w2ui-popup-buttons").append(e.buttons), e.body && a("#w2ui-popup .w2ui-popup-body").append(e.body), setTimeout(() => {
        a("#w2ui-popup").css("transition", e.speed + "s").removeClass("w2ui-anim-open"), p.bindEvents("#w2ui-popup .w2ui-eaction", this), a("#w2ui-popup").find(".w2ui-popup-body").show(), this._promCreated();
      }, 1), clearTimeout(this._timer), this._timer = setTimeout(() => {
        this.status = "open", t.setFocus(e.focus), i.finish(), this._promOpened(), a("#w2ui-popup").removeClass("animating");
      }, 1e3 * e.speed);
    } else {
      if ((i = this.trigger("open", { target: "popup", present: true })).isCancelled === true) return;
      this.status = "opening", s != null && (s.maximized || s.width == e.width && s.height == e.height || this.resize(e.width, e.height), e.prevSize = e.width + "px:" + e.height + "px", e.maximized = s.maximized), l = a("#w2ui-popup .w2ui-box").get(0).cloneNode(true), a(l).removeClass("w2ui-box").addClass("w2ui-box-temp").find(".w2ui-popup-body").empty().append(e.body), a("#w2ui-popup .w2ui-box").after(l), e.buttons ? (a("#w2ui-popup .w2ui-popup-buttons").show().html("").append(e.buttons), a("#w2ui-popup .w2ui-popup-body").removeClass("w2ui-popup-no-buttons"), a("#w2ui-popup .w2ui-box, #w2ui-popup .w2ui-box-temp").css("bottom", "")) : (a("#w2ui-popup .w2ui-popup-buttons").hide().html(""), a("#w2ui-popup .w2ui-popup-body").addClass("w2ui-popup-no-buttons"), a("#w2ui-popup .w2ui-box, #w2ui-popup .w2ui-box-temp").css("bottom", "0px")), e.title ? (a("#w2ui-popup .w2ui-popup-title").show().html((e.showClose ? `<div class="w2ui-popup-button w2ui-popup-close">
                                <span class="w2ui-icon w2ui-icon-cross w2ui-eaction" data-mousedown="stop" data-click="close"></span>
                            </div>` : "") + (e.showMax ? `<div class="w2ui-popup-button w2ui-popup-max">
                                <span class="w2ui-icon w2ui-icon-box w2ui-eaction" data-mousedown="stop" data-click="toggle"></span>
                            </div>` : "")).append(e.title), a("#w2ui-popup .w2ui-popup-body").removeClass("w2ui-popup-no-title"), a("#w2ui-popup .w2ui-box, #w2ui-popup .w2ui-box-temp").css("top", "")) : (a("#w2ui-popup .w2ui-popup-title").hide().html(""), a("#w2ui-popup .w2ui-popup-body").addClass("w2ui-popup-no-title"), a("#w2ui-popup .w2ui-box, #w2ui-popup .w2ui-box-temp").css("top", "0px"));
      let c = a("#w2ui-popup .w2ui-box")[0], d = a("#w2ui-popup .w2ui-box-temp")[0];
      a("#w2ui-popup").addClass("animating"), p.transition(c, d, e.transition, () => {
        a(c).remove(), a(d).removeClass("w2ui-box-temp").addClass("w2ui-box");
        var u = a(d).find(".w2ui-popup-body");
        u.length == 1 && (u[0].style.cssText = e.style, u.show()), t.setFocus(e.focus), a("#w2ui-popup").removeClass("animating");
      }), this.status = "open", i.finish(), p.bindEvents("#w2ui-popup .w2ui-eaction", this), a("#w2ui-popup").find(".w2ui-popup-body").show();
    }
    return e.openMaximized && this.max(), e._last_focus = document.activeElement, e.keyboard && a(document.body).on("keydown", (c) => {
      this.keydown(c);
    }), a(window).on("resize", this.handleResize), r = { resizing: false, mvMove: function(c) {
      r.resizing == 1 && (c = c || window.event, r.div_x = c.screenX - r.x, r.div_y = c.screenY - r.y, (c = t.trigger("move", { target: "popup", div_x: r.div_x, div_y: r.div_y, originalEvent: c })).isCancelled !== true) && (a("#w2ui-popup").css({ transition: "none", transform: "translate3d(" + r.div_x + "px, " + r.div_y + "px, 0px)" }), t.options.moved = true, c.finish());
    }, mvStop: function(c) {
      r.resizing != 1 || (c = c || window.event, t.status = "open", r.div_x = c.screenX - r.x, r.div_y = c.screenY - r.y, a("#w2ui-popup").css({ left: r.pos_x + r.div_x + "px", top: r.pos_y + r.div_y + "px" }).css({ transition: "none", transform: "translate3d(0px, 0px, 0px)" }), r.resizing = false, a(document.body).off(".w2ui-popup"), r.isLocked) || t.unlock();
    } }, a("#w2ui-popup .w2ui-popup-title").on("mousedown", function(c) {
      var d;
      t.options.maximized || (c = (c = c) || window.event, t.status = "moving", d = a("#w2ui-popup").get(0).getBoundingClientRect(), Object.assign(r, { resizing: true, isLocked: a("#w2ui-popup > .w2ui-lock").length == 1, x: c.screenX, y: c.screenY, pos_x: d.x, pos_y: d.y }), r.isLocked || t.lock({ opacity: 0 }), a(document.body).on("mousemove.w2ui-popup", r.mvMove).on("mouseup.w2ui-popup", r.mvStop), c.stopPropagation ? c.stopPropagation() : c.cancelBubble = true, c.preventDefault && c.preventDefault());
    }), o;
  }
  load(e) {
    return new Promise((t, s) => {
      if ((e = typeof e == "string" ? { url: e } : e).url == null) console.log("ERROR: The url is not defined."), s("The url is not defined");
      else {
        this.status = "loading";
        let [i, n] = String(e.url).split("#");
        i && fetch(i).then((r) => r.text()).then((r) => {
          t(this.template(r, n, e));
        });
      }
    });
  }
  template(e, t, s = {}) {
    let i;
    try {
      i = a(e);
    } catch {
      i = a.html(e);
    }
    return t && (i = i.filter("#" + t)), Object.assign(s, { width: parseInt(a(i).css("width")), height: parseInt(a(i).css("height")), title: a(i).find("[rel=title]").html(), body: a(i).find("[rel=body]").html(), buttons: a(i).find("[rel=buttons]").html(), style: a(i).find("[rel=body]").get(0).style.cssText }), this.open(s);
  }
  action(e, t) {
    let s = this.options.actions[e];
    s instanceof Object && s.onClick && (s = s.onClick), e = this.trigger("action", { action: e, target: "popup", self: this, originalEvent: t, value: this.input ? this.input.value : null }), e.isCancelled !== true && (typeof s == "function" && s.call(this, t), e.finish());
  }
  keydown(e) {
    var t;
    this.options && !this.options.keyboard || (t = this.trigger("keydown", { target: "popup", originalEvent: e })).isCancelled !== true && (e.keyCode === 27 && (e.preventDefault(), a("#w2ui-popup .w2ui-message").length == 0) && (this.options.cancelAction ? this.action(this.options.cancelAction) : this.close()), t.finish());
  }
  close(e) {
    let t = this.trigger("close", { target: "popup" });
    var s;
    t.isCancelled !== true && (s = () => {
      a("#w2ui-popup").remove(), this.options._last_focus && 0 < this.options._last_focus.length && this.options._last_focus.focus(), this.status = "closed", this.options = {}, t.finish(), this._promClosed();
    }, a("#w2ui-popup").length !== 0) && this.status != "closed" && (this.status == "opening" && (e = true), this.status == "closing" && e === true ? (s(), clearTimeout(this.tmp.closingTimer), p.unlock(document.body, 0)) : (this.status = "closing", a("#w2ui-popup").css("transition", this.options.speed + "s").addClass("w2ui-anim-close animating"), p.unlock(document.body, 300), this._promClosing(), e ? s() : this.tmp.closingTimer = setTimeout(s, 1e3 * this.options.speed), this.options.keyboard && a(document.body).off("keydown", this.keydown), a(window).off("resize", this.handleResize)));
  }
  toggle() {
    let e = this.trigger("toggle", { target: "popup" });
    e.isCancelled !== true && (this.options.maximized === true ? this.min() : this.max(), setTimeout(() => {
      e.finish();
    }, 1e3 * this.options.speed + 50));
  }
  max() {
    if (this.options.maximized !== true) {
      let t = this.trigger("max", { target: "popup" });
      var e;
      t.isCancelled !== true && (this.status = "resizing", e = a("#w2ui-popup").get(0).getBoundingClientRect(), this.options.prevSize = e.width + ":" + e.height, this.resize(1e4, 1e4, () => {
        this.status = "open", this.options.maximized = true, t.finish();
      }));
    }
  }
  min() {
    if (this.options.maximized === true) {
      var e = this.options.prevSize.split(":");
      let t = this.trigger("min", { target: "popup" });
      t.isCancelled !== true && (this.status = "resizing", this.options.maximized = false, this.resize(parseInt(e[0]), parseInt(e[1]), () => {
        this.status = "open", this.options.prevSize = null, t.finish();
      }));
    }
  }
  clear() {
    a("#w2ui-popup .w2ui-popup-title").html(""), a("#w2ui-popup .w2ui-popup-body").html(""), a("#w2ui-popup .w2ui-popup-buttons").html("");
  }
  reset() {
    this.open(this.defaults);
  }
  message(e) {
    return p.message({ owner: this, box: a("#w2ui-popup").get(0), after: ".w2ui-popup-title" }, e);
  }
  confirm(e) {
    return p.confirm({ owner: this, box: a("#w2ui-popup"), after: ".w2ui-popup-title" }, e);
  }
  setFocus(e) {
    var _a;
    let t = a("#w2ui-popup"), s = "input, button, select, textarea, [contentEditable], .w2ui-input";
    e != null ? (_a = isNaN(e) ? t.find(s).filter(e).get(0) : t.find(s).get(e)) == null ? void 0 : _a.focus() : (e = t.find("[name=hidden-first]").get(0)) && e.focus(), a(t).find(s + ",[name=hidden-first],[name=hidden-last]").off(".keep-focus").on("blur.keep-focus", function(i) {
      setTimeout(() => {
        var _a2, _b, _c;
        var n = document.activeElement, r = 0 < a(t).find(s).filter(n).length, l = a(n).attr("name");
        !r && n && n !== document.body && ((_a2 = a(t).find(s).get(0)) == null ? void 0 : _a2.focus()), l == "hidden-last" && ((_b = a(t).find(s).get(0)) == null ? void 0 : _b.focus()), l == "hidden-first" && ((_c = a(t).find(s).get(-1)) == null ? void 0 : _c.focus());
      }, 1);
    });
  }
  lock(e, t) {
    var s = Array.from(arguments);
    s.unshift(a("#w2ui-popup")), p.lock(...s);
  }
  unlock(e) {
    p.unlock(a("#w2ui-popup"), e);
  }
  center(e, t, s) {
    let i, n;
    n = window.innerHeight == null ? (i = parseInt(document.documentElement.offsetWidth), parseInt(document.documentElement.offsetHeight)) : (i = parseInt(window.innerWidth), parseInt(window.innerHeight)), e = parseInt(e ?? this.options.width), t = parseInt(t ?? this.options.height), this.options.maximized === true && (e = i, t = n), i - 10 < e && (e = i - 10), n - 10 < t && (t = n - 10);
    var r = (n - t) / 2, l = (i - e) / 2;
    return s && (a("#w2ui-popup").css({ transition: "none", top: r + "px", left: l + "px", width: e + "px", height: t + "px" }), this.resizeMessages()), { top: r, left: l, width: e, height: t };
  }
  resize(n, r, s) {
    let i = this;
    this.options.speed == null && (this.options.speed = 0);
    var { top: n, left: r, width: l, height: h } = this.center(n, r), o = this.options.speed;
    a("#w2ui-popup").css({ transition: o + `s width, ${o}s height, ${o}s left, ${o}s top`, top: n + "px", left: r + "px", width: l + "px", height: h + "px" });
    let c = setInterval(() => {
      i.resizeMessages();
    }, 10);
    setTimeout(() => {
      clearInterval(c), i.resizeMessages(), typeof s == "function" && s();
    }, 1e3 * this.options.speed + 50);
  }
  resizeMessages() {
    a("#w2ui-popup .w2ui-message").each((e) => {
      var t = e._msg_options, s = a("#w2ui-popup"), n = (parseInt(t.width) < 10 && (t.width = 10), parseInt(t.height) < 10 && (t.height = 10), s[0].getBoundingClientRect()), s = parseInt(s.find(".w2ui-popup-title")[0].clientHeight), i = parseInt(n.width), n = parseInt(n.height);
      t.width = t.originalWidth, t.width > i - 10 && (t.width = i - 10), t.height = t.originalHeight, t.height > n - s - 5 && (t.height = n - s - 5), t.originalHeight < 0 && (t.height = n + t.originalHeight - s), t.originalWidth < 0 && (t.width = i + 2 * t.originalWidth), a(e).css({ left: (i - t.width) / 2 + "px", width: t.width + "px", height: t.height + "px" });
    });
  }
}
new As();
const _W = class _W {
  constructor() {
    this.defaults = { name: null, html: "", style: "", class: "", position: "top|bottom", align: "", anchor: null, anchorClass: "", anchorStyle: "", autoShow: false, autoShowOn: null, autoHideOn: null, arrowSize: 8, margin: 0, margin: 1, screenMargin: 2, autoResize: true, offsetX: 0, offsetY: 0, maxWidth: null, maxHeight: null, watchScroll: null, watchResize: null, hideOn: null, onThen: null, onShow: null, onHide: null, onUpdate: null, onMove: null };
  }
  trigger(e, t) {
    var s;
    if (arguments.length == 2 && (s = e, (e = t).type = s), e.overlay) return e.overlay.trigger(e);
    console.log("ERROR: cannot find overlay where to trigger events");
  }
  get(e) {
    return arguments.length == 0 ? Object.keys(_W.active) : e === true ? _W.active : _W.active[e.replace(/[\s\.#]/g, "_")];
  }
  attach(e, t) {
    let s, i, n = this;
    if (arguments.length != 0) {
      arguments.length == 1 && e.anchor ? e = (s = e).anchor : arguments.length === 2 && typeof t == "string" ? t = (s = { anchor: e, html: t }).html : arguments.length === 2 && t != null && typeof t == "object" && (t = (s = t).html), s = p.extend({}, this.defaults, s || {}), !(t = !t && s.text ? s.text : t) && s.html && (t = s.html), delete s.anchor;
      let r = s.name || e.id;
      e != document && e != document.body || (e = document.body, r = "context-menu"), r || (r = "noname-" + Object.keys(_W.active).length, console.log("NOTICE: name property is not defined for tooltip, could lead to too many instances")), r = r.replace(/[\s\.#]/g, "_"), _W.active[r] ? ((i = _W.active[r]).prevOptions = i.options, i.options = s, i.anchor = e, i.prevOptions.html == i.options.html && i.prevOptions.class == i.options.class && i.prevOptions.style == i.options.style || (i.needsUpdate = true), s = i.options) : (i = new fe(), Object.assign(i, { id: "w2overlay-" + r, name: r, options: s, anchor: e, displayed: false, tmp: { observeResize: new ResizeObserver(() => {
        this.resize(i.name);
      }) }, hide() {
        n.hide(r);
      } }), _W.active[r] = i), Object.keys(i.options).forEach((h) => {
        var o = i.options[h];
        h.startsWith("on") && typeof o == "function" && (i[h] = o, delete i.options[h]);
      }), s.autoShow === true && (s.autoShowOn = s.autoShowOn ?? "mouseenter", s.autoHideOn = s.autoHideOn ?? "mouseleave", s.autoShow = false), s.autoShowOn && (t = "autoShow-" + i.name, a(e).off("." + t).on(s.autoShowOn + "." + t, (h) => {
        n.show(i.name), h.stopPropagation();
      }), delete s.autoShowOn), s.autoHideOn && (t = "autoHide-" + i.name, a(e).off("." + t).on(s.autoHideOn + "." + t, (h) => {
        n.hide(i.name), h.stopPropagation();
      }), delete s.autoHideOn), i.off(".attach");
      let l = { overlay: i, then: (h) => (i.on("show:after.attach", (o) => {
        h(o);
      }), l), show: (h) => (i.on("show.attach", (o) => {
        h(o);
      }), l), hide: (h) => (i.on("hide.attach", (o) => {
        h(o);
      }), l), update: (h) => (i.on("update.attach", (o) => {
        h(o);
      }), l), move: (h) => (i.on("move.attach", (o) => {
        h(o);
      }), l) };
      return l;
    }
  }
  update(e, t) {
    var s = _W.active[e];
    s ? (s.needsUpdate = true, s.options.html = t, this.show(e)) : console.log(`Tooltip "${e}" is not displayed. Cannot update it.`);
  }
  show(e) {
    if (e instanceof HTMLElement || e instanceof Object) {
      let l = e, h = (e instanceof HTMLElement && ((l = arguments[1] || {}).anchor = e), this.attach(l));
      return a(h.overlay.anchor).off(".autoShow-" + h.overlay.name).off(".autoHide-" + h.overlay.name), setTimeout(() => {
        this.show(h.overlay.name), this.initControls && this.initControls(h.overlay);
      }, 1), h;
    }
    let t, s = this, i = _W.active[e.replace(/[\s\.#]/g, "_")];
    if (i) {
      let l = i.options;
      if (!i || i.displayed && !i.needsUpdate) this.resize(i == null ? void 0 : i.name);
      else {
        var n = l.position.split("|"), n = ["top", "bottom"].includes(n[0]);
        let h = l.align == "both" && n ? "" : "white-space: nowrap;";
        if (l.maxWidth && p.getStrWidth(l.html, "") > l.maxWidth && (h = "width: " + l.maxWidth + "px; white-space: inherit; overflow: auto;"), h += " max-height: " + (l.maxHeight || window.innerHeight - 40) + "px;", l.html !== "" && l.html != null) {
          if (i.box) {
            if ((t = this.trigger("update", { target: e, overlay: i })).isCancelled === true) return void (i.prevOptions && (i.options = i.prevOptions, delete i.prevOptions));
            a(i.box).find(".w2ui-overlay-body").attr("style", (l.style || "") + "; " + h).removeClass().addClass("w2ui-overlay-body " + l.class).html(l.html);
          } else {
            if ((t = this.trigger("show", { target: e, overlay: i })).isCancelled === true) return;
            a("body").append(`<div id="${i.id}" name="${e}" style="display: none; pointer-events: none" class="w2ui-overlay"
                        data-click="stop" data-focusin="stop">
                    <style></style>
                    <div class="w2ui-overlay-body ${l.class}" style="${l.style || ""}; ${h}">
                        ${l.html}
                    </div>
                </div>`), i.box = a("#" + p.escapeId(i.id))[0], i.displayed = true, n = a(i.anchor).data("tooltipName") ?? [], n.push(e), a(i.anchor).data("tooltipName", n), p.bindEvents(i.box, {}), i.tmp.originalCSS = "", 0 < a(i.anchor).length && (i.tmp.originalCSS = a(i.anchor)[0].style.cssText);
          }
          this.resize(i.name), l.anchorStyle && (i.anchor.style.cssText += ";" + l.anchorStyle), !l.anchorClass || l.anchorClass == "w2ui-focus" && i.anchor == document.body || a(i.anchor).addClass(l.anchorClass), typeof l.hideOn == "string" && (l.hideOn = [l.hideOn]), Array.isArray(l.hideOn) || (l.hideOn = []), Object.assign(i.tmp, { scrollLeft: document.body.scrollLeft, scrollTop: document.body.scrollTop });
          {
            let o = (u) => {
              s.hide(i.name);
            }, c = a(i.anchor), d = "tooltip-" + i.name;
            a("body").off("." + d), l.hideOn.includes("doc-click") && (["INPUT", "TEXTAREA"].includes(i.anchor.tagName) && c.off(`.${d}-doc`).on(`click.${d}-doc`, (u) => {
              u.stopPropagation();
            }), a("body").on("click." + d, o)), l.hideOn.includes("focus-change") && a("body").on("focusin." + d, (u) => {
              document.activeElement != i.anchor && s.hide(i.name);
            }), ["INPUT", "TEXTAREA"].includes(i.anchor.tagName) && (c.off("." + d), l.hideOn.forEach((u) => {
              ["doc-click", "focus-change"].indexOf(u) == -1 && c.on(u + "." + d, { once: true }, o);
            }));
          }
          {
            var r = document.body;
            let o = "tooltip-" + i.name, c = r;
            r.tagName == "BODY" && (c = r.ownerDocument), a(c).off("." + o).on("scroll." + o, (d) => {
              Object.assign(i.tmp, { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop }), s.resize(i.name);
            });
          }
          return a(i.box).show(), i.tmp.observeResize.observe(i.box), _W.observeRemove.observe(document.body, { subtree: true, childList: true }), a(i.box).css("opacity", 1).find(".w2ui-overlay-body").html(l.html), setTimeout(() => {
            a(i.box).css({ "pointer-events": "auto" }).data("ready", "yes");
          }, 100), delete i.needsUpdate, i.box.overlay = i, t && t.finish(), { overlay: i };
        }
        s.hide(e);
      }
    }
  }
  hide(e) {
    var _a;
    let t;
    if (arguments.length == 0) Object.keys(_W.active).forEach((n) => {
      this.hide(n);
    });
    else if (e instanceof HTMLElement) (a(e).data("tooltipName") ?? []).forEach((n) => {
      this.hide(n);
    });
    else if (typeof e == "string" && (e = e.replace(/[\s\.#]/g, "_"), t = _W.active[e]), t && t.box && (delete _W.active[e], e = this.trigger("hide", { target: e, overlay: t }), e.isCancelled !== true)) {
      var s = "tooltip-" + t.name;
      (_a = t.tmp.observeResize) == null ? void 0 : _a.disconnect(), t.options.watchScroll && a(t.options.watchScroll).off(".w2scroll-" + t.name);
      let n = 0;
      Object.keys(_W.active).forEach((r) => {
        _W.active[r].displayed && n++;
      }), n == 0 && _W.observeRemove.disconnect(), a("body").off("." + s), a(document).off("." + s), t.box.remove(), t.box = null, t.displayed = false;
      var i = a(t.anchor).data("tooltipName") ?? [];
      i.indexOf(t.name) != -1 && i.splice(i.indexOf(t.name), 1), i.length == 0 ? a(t.anchor).removeData("tooltipName") : a(t.anchor).data("tooltipName", i), t.anchor.style.cssText = t.tmp.originalCSS, a(t.anchor).off("." + s).removeClass(t.options.anchorClass), e.finish();
    }
  }
  resize(e) {
    if (arguments.length == 0) Object.keys(_W.active).forEach((i) => {
      i = _W.active[i], i.displayed && this.resize(i.name);
    });
    else {
      var t = _W.active[e.replace(/[\s\.#]/g, "_")];
      let i = this.getPosition(t.name);
      var s = i.left + "x" + i.top;
      let n;
      t.tmp.lastPos != s && (n = this.trigger("move", { target: e, overlay: t, pos: i })), a(t.box).css({ left: i.left + "px", top: i.top + "px" }).then((r) => {
        i.width != null && r.css("width", i.width + "px").find(".w2ui-overlay-body").css("width", "100%"), i.height != null && r.css("height", i.height + "px").find(".w2ui-overlay-body").css("height", "100%");
      }).find(".w2ui-overlay-body").removeClass("w2ui-arrow-right w2ui-arrow-left w2ui-arrow-top w2ui-arrow-bottom").addClass(i.arrow.class).closest(".w2ui-overlay").find("style").text(i.arrow.style), t.tmp.lastPos != s && n && (t.tmp.lastPos = s, n.finish());
    }
  }
  getPosition(e) {
    let t = _W.active[e.replace(/[\s\.#]/g, "_")];
    if (t && t.box) {
      let d = t.options;
      (t.tmp.resizedY || t.tmp.resizedX) && a(t.box).css({ width: "", height: "", scroll: "auto" });
      var e = p.scrollBarSize(), s = document.body.scrollWidth != document.body.clientWidth, i = document.body.scrollHeight != document.body.clientHeight;
      let f = { width: window.innerWidth - (i ? e : 0), height: window.innerHeight - (s ? e : 0) };
      var n, r = (d.position == "auto" ? "top|bottom|right|left" : d.position).split("|");
      let m = ["top", "bottom"].includes(r[0]), w = t.box.getBoundingClientRect(), g = t.anchor.getBoundingClientRect(), v = (t.anchor == document.body && ({ x: l, y: h, width: o, height: c } = d.originalEvent, g = { left: l - 2, top: h - 4, width: o, height: c, arrow: "none" }), d.arrowSize), k = (g.arrow == "none" && (v = 0), { top: g.top, bottom: f.height - (g.top + g.height) - +(s ? e : 0), left: g.left, right: f.width - (g.left + g.width) + (i ? e : 0) });
      w.width < 22 && (w.width = 22), w.height < 14 && (w.height = 14);
      let x, S, $, I, A = "", _ = { offset: 0, class: "", style: `#${t.id} { --tip-size: ${v}px; }` }, E = { left: 0, top: 0 }, C = { posX: "", x: 0, posY: "", y: 0 };
      r.forEach((y) => {
        ["top", "bottom"].includes(y) && (!A && w.height + v / 1.893 < k[y] && (A = y), k[y] > C.y) && Object.assign(C, { posY: y, y: k[y] }), ["left", "right"].includes(y) && (!A && w.width + v / 1.893 < k[y] && (A = y), k[y] > C.x) && Object.assign(C, { posX: y, x: k[y] });
      }), A = A || (m ? C.posY : C.posX), d.autoResize && (["top", "bottom"].includes(A) && (w.height > k[A] ? (I = k[A], t.tmp.resizedY = true) : t.tmp.resizedY = false), ["left", "right"].includes(A)) && (w.width > k[A] ? ($ = k[A], t.tmp.resizedX = true) : t.tmp.resizedX = false);
      var l = A;
      switch (_.class = g.arrow || "w2ui-arrow-" + l, l) {
        case "top":
          x = g.left + (g.width - ($ ?? w.width)) / 2, S = g.top - (I ?? w.height) - v / 1.5 + 1;
          break;
        case "bottom":
          x = g.left + (g.width - ($ ?? w.width)) / 2, S = g.top + g.height + v / 1.25 + 1;
          break;
        case "left":
          x = g.left - ($ ?? w.width) - v / 1.2 - 1, S = g.top + (g.height - (I ?? w.height)) / 2;
          break;
        case "right":
          x = g.left + g.width + v / 1.2 + 1, S = g.top + (g.height - (I ?? w.height)) / 2;
      }
      m && (d.align == "left" && (E.left = g.left - x, x = g.left), d.align == "right" && (E.left = g.left + g.width - ($ ?? w.width) - x, x = g.left + g.width - ($ ?? w.width)), ["top", "bottom"].includes(A) && d.align.startsWith("both") && (n = d.align.split(":")[1] ?? 50, g.width >= n) && (x = g.left, $ = g.width), d.align == "top" && (E.top = g.top - S, S = g.top), d.align == "bottom" && (E.top = g.top + g.height - (I ?? w.height) - S, S = g.top + g.height - (I ?? w.height)), ["left", "right"].includes(A) && d.align.startsWith("both") && (n = d.align.split(":")[1] ?? 50, g.height >= n) && (S = g.top, I = g.height));
      {
        let y;
        (["left", "right"].includes(d.align) && g.width < ($ ?? w.width) || ["top", "bottom"].includes(d.align) && g.height < (I ?? w.height)) && (y = true);
        var h = A == "right" ? v : d.screenMargin, o = A == "bottom" ? v : d.screenMargin, c = f.width - ($ ?? w.width) - (A == "left" ? v : d.screenMargin), s = f.height - (I ?? w.height) - (A == "top" ? v : d.screenMargin) + 3;
        (["top", "bottom"].includes(A) || d.autoResize) && (x < h && (y = true, E.left -= x, x = h), x > c) && (y = true, E.left -= x - c, x += c - x), (["left", "right"].includes(A) || d.autoResize) && (S < o && (y = true, E.top -= S, S = o), S > s) && (y = true, E.top -= S - s, S += s - S), y && (h = m ? "left" : "top", c = m ? "width" : "height", _.offset = -E[h], o = w[c] / 2 - v, Math.abs(_.offset) > o + v && (_.class = ""), Math.abs(_.offset) > o && (_.offset = _.offset < 0 ? -o : o), _.style = p.stripSpaces(`#${t.id} .w2ui-overlay-body:after,
                            #${t.id} .w2ui-overlay-body:before {
                                --tip-size: ${v}px;
                                margin-${h}: ${_.offset}px;
                            }`));
      }
      return i = A == "top" ? -d.margin : A == "bottom" ? d.margin : 0, e = A == "left" ? -d.margin : A == "right" ? d.margin : 0, S = Math.floor(100 * (S + parseFloat(d.offsetY) + parseFloat(i))) / 100, { left: x = Math.floor(100 * (x + parseFloat(d.offsetX) + parseFloat(e))) / 100, top: S, arrow: _, adjust: E, width: $, height: I, pos: A };
    }
  }
};
__publicField(_W, "active", {});
__publicField(_W, "observeRemove", new MutationObserver((e) => {
  let t = 0;
  Object.keys(_W.active).forEach((s) => {
    s = _W.active[s], s.displayed && (s.anchor && s.anchor.isConnected ? t++ : s.hide());
  }), t === 0 && _W.observeRemove.disconnect();
}));
let W = _W;
class Es extends W {
  constructor() {
    super(), this.palette = [["000000", "333333", "555555", "777777", "888888", "999999", "AAAAAA", "CCCCCC", "DDDDDD", "EEEEEE", "F7F7F7", "FFFFFF"], ["FF011B", "FF9838", "FFC300", "FFFD59", "86FF14", "14FF7A", "2EFFFC", "2693FF", "006CE7", "9B24F4", "FF21F5", "FF0099"], ["FFEAEA", "FCEFE1", "FCF4DC", "FFFECF", "EBFFD9", "D9FFE9", "E0FFFF", "E8F4FF", "ECF4FC", "EAE6F4", "FFF5FE", "FCF0F7"], ["F4CCCC", "FCE5CD", "FFF1C2", "FFFDA1", "D5FCB1", "B5F7D0", "BFFFFF", "D6ECFF", "CFE2F3", "D9D1E9", "FFE3FD", "FFD9F0"], ["EA9899", "F9CB9C", "FFE48C", "F7F56F", "B9F77E", "84F0B1", "83F7F7", "B5DAFF", "9FC5E8", "B4A7D6", "FAB9F6", "FFADDE"], ["E06666", "F6B26B", "DEB737", "E0DE51", "8FDB48", "52D189", "4EDEDB", "76ACE3", "6FA8DC", "8E7CC3", "E07EDA", "F26DBD"], ["CC0814", "E69138", "AB8816", "B5B20E", "6BAB30", "27A85F", "1BA8A6", "3C81C7", "3D85C6", "674EA7", "A14F9D", "BF4990"], ["99050C", "B45F17", "80650E", "737103", "395E14", "10783D", "13615E", "094785", "0A5394", "351C75", "780172", "782C5A"]], this.defaults = p.extend({}, this.defaults, { advanced: false, transparent: true, position: "top|bottom", class: "w2ui-white", color: "", liveUpdate: true, arrowSize: 12, autoResize: false, anchorClass: "w2ui-focus", autoShowOn: "focus", hideOn: ["doc-click", "focus-change"], onSelect: null, onLiveUpdate: null });
  }
  attach(e, t) {
    let s;
    arguments.length == 1 && e.anchor ? e = (s = e).anchor : arguments.length === 2 && t != null && typeof t == "object" && ((s = t).anchor = e), t = s.hideOn, s = p.extend({}, this.defaults, s || {}), t && (s.hideOn = t), s.style += "; padding: 0;", s.transparent && this.palette[0][1] == "333333" && (this.palette[0].splice(1, 1), this.palette[0].push("")), s.transparent || this.palette[0][1] == "333333" || (this.palette[0].splice(1, 0, "333333"), this.palette[0].pop()), s.color && (s.color = String(s.color).toUpperCase()), typeof s.color == "string" && s.color.substr(0, 1) === "#" && (s.color = s.color.substr(1)), this.index = [-1, -1];
    let i = super.attach(s), n = i.overlay;
    return n.options.html = this.getColorHTML(n.name, s), n.on("show.attach", (l) => {
      var l = l.detail.overlay, h = l.anchor, o = l.options;
      ["INPUT", "TEXTAREA"].includes(h.tagName) && !o.color && h.value && (l.tmp.initColor = h.value), delete l.newColor;
    }), n.on("show:after.attach", (r) => {
      var _a;
      var l;
      ((_a = i.overlay) == null ? void 0 : _a.box) && (l = a(i.overlay.box).find(".w2ui-eaction"), p.bindEvents(l, this), this.initControls(i.overlay));
    }), n.on("update:after.attach", (r) => {
      var _a;
      var l;
      ((_a = i.overlay) == null ? void 0 : _a.box) && (l = a(i.overlay.box).find(".w2ui-eaction"), p.bindEvents(l, this), this.initControls(i.overlay));
    }), n.on("hide.attach", (l) => {
      var l = l.detail.overlay, o = l.anchor, h = l.newColor ?? l.options.color ?? "", o = (["INPUT", "TEXTAREA"].includes(o.tagName) && o.value != h && (o.value = h), this.trigger("select", { color: h, target: l.name, overlay: l }));
      o.isCancelled !== true && o.finish();
    }), i.liveUpdate = (r) => (n.on("liveUpdate.attach", (l) => {
      r(l);
    }), i), i.select = (r) => (n.on("select.attach", (l) => {
      r(l);
    }), i), i;
  }
  select(e, n) {
    let s;
    this.index = [-1, -1], typeof n != "string" && (s = n.target, this.index = a(s).attr("index").split(":"), n = a(s).closest(".w2ui-overlay").attr("name"));
    var i = this.get(n), n = this.trigger("liveUpdate", { color: e, target: n, overlay: i, param: arguments[1] });
    n.isCancelled !== true && (["INPUT", "TEXTAREA"].includes(i.anchor.tagName) && i.options.liveUpdate && a(i.anchor).val(e), i.newColor = e, a(i.box).find(".w2ui-selected").removeClass("w2ui-selected"), s && a(s).addClass("w2ui-selected"), n.finish());
  }
  nextColor(e) {
    var t = this.palette;
    switch (e) {
      case "up":
        this.index[0]--;
        break;
      case "down":
        this.index[0]++;
        break;
      case "right":
        this.index[1]++;
        break;
      case "left":
        this.index[1]--;
    }
    return this.index[0] < 0 && (this.index[0] = 0), this.index[0] > t.length - 2 && (this.index[0] = t.length - 2), this.index[1] < 0 && (this.index[1] = 0), this.index[1] > t[0].length - 1 && (this.index[1] = t[0].length - 1), t[this.index[0]][this.index[1]];
  }
  tabClick(e, s) {
    typeof s != "string" && (s = a(s.target).closest(".w2ui-overlay").attr("name"));
    var s = this.get(s), i = a(s.box).find(`.w2ui-color-tab:nth-child(${e})`);
    a(s.box).find(".w2ui-color-tab").removeClass("w2ui-selected"), a(i).addClass("w2ui-selected"), a(s.box).find(".w2ui-tab-content").hide().closest(".w2ui-colors").find(".tab-" + e).show();
  }
  getColorHTML(e, t) {
    let s = `
            <div class="w2ui-colors">
                <div class="w2ui-tab-content tab-1">`;
    for (let n = 0; n < this.palette.length; n++) {
      s += '<div class="w2ui-color-row">';
      for (let r = 0; r < this.palette[n].length; r++) {
        var i = this.palette[n][r];
        let l = i === "FFFFFF" ? "; border: 1px solid #efefef" : "";
        s += `
                    <div class="w2ui-color w2ui-eaction ${i === "" ? "w2ui-no-color" : ""} ${t.color == i ? "w2ui-selected" : ""}"
                        style="background-color: #${i + l};" name="${i}" index="${n}:${r}"
                        data-mousedown="select|'${i}'|event" data-mouseup="hide|${e}">&nbsp;
                    </div>`;
      }
      s += "</div>", n < 2 && (s += '<div style="height: 8px"></div>');
    }
    return s = (s = (s += "</div>") + `
            <div class="w2ui-tab-content tab-2" style="display: none">
                <div class="color-info">
                    <div class="color-preview-bg"><div class="color-preview"></div><div class="color-original"></div></div>
                    <div class="color-part">
                        <span>H</span> <input class="w2ui-input" name="h" maxlength="3" max="360" tabindex="101">
                        <span>R</span> <input class="w2ui-input" name="r" maxlength="3" max="255" tabindex="104">
                    </div>
                    <div class="color-part">
                        <span>S</span> <input class="w2ui-input" name="s" maxlength="3" max="100" tabindex="102">
                        <span>G</span> <input class="w2ui-input" name="g" maxlength="3" max="255" tabindex="105">
                    </div>
                    <div class="color-part">
                        <span>V</span> <input class="w2ui-input" name="v" maxlength="3" max="100" tabindex="103">
                        <span>B</span> <input class="w2ui-input" name="b" maxlength="3" max="255" tabindex="106">
                    </div>
                    <div class="color-part opacity">
                        <span>${p.lang("Opacity")}</span>
                        <input class="w2ui-input" name="a" maxlength="5" max="1" tabindex="107">
                    </div>
                </div>
                <div class="palette" name="palette">
                    <div class="palette-bg"></div>
                    <div class="value1 move-x move-y"></div>
                </div>
                <div class="rainbow" name="rainbow">
                    <div class="value2 move-x"></div>
                </div>
                <div class="alpha" name="alpha">
                    <div class="alpha-bg"></div>
                    <div class="value2 move-x"></div>
                </div>
            </div>`) + `
            <div class="w2ui-color-tabs">
                <div class="w2ui-color-tab selected w2ui-eaction" data-click="tabClick|1|event|this"><span class="w2ui-icon w2ui-icon-colors"></span></div>
                <div class="w2ui-color-tab w2ui-eaction" data-click="tabClick|2|event|this"><span class="w2ui-icon w2ui-icon-settings"></span></div>
                <div style="padding: 5px; width: 100%; text-align: right;">
                    ${typeof t.html == "string" ? t.html : ""}
                </div>
            </div>`;
  }
  initControls(e) {
    let t, s = this;
    var i = e.options;
    let n = p.parseColor(i.color || e.tmp.initColor), r = (n == null && (n = { r: 140, g: 150, b: 160, a: 1 }), p.rgb2hsv(n));
    i.advanced === true && this.tabClick(2, e.name), o(r, true, true), a(e.box).find("input").off(".w2color").on("change.w2color", (g) => {
      g = a(g.target);
      let m = parseFloat(g.val());
      var w = parseFloat(g.attr("max")), w = (isNaN(m) && (m = 0, g.val(0)), 1 < w && (m = parseInt(m)), 0 < w && m > w && (g.val(w), m = w), m < 0 && (g.val(0), m = 0), g.attr("name")), g = {};
      ["r", "g", "b", "a"].indexOf(w) !== -1 ? (n[w] = m, r = p.rgb2hsv(n)) : ["h", "s", "v"].indexOf(w) !== -1 && (g[w] = m), o(g, true);
    }), a(e.box).find(".color-original").off(".w2color").on("click.w2color", (f) => {
      f = p.parseColor(a(f.target).css("background-color")), f != null && (n = f, o(r = p.rgb2hsv(n), true));
    }), i = `${p.isIOS ? "touchstart" : "mousedown"}.w2color`;
    let l = `${p.isIOS ? "touchend" : "mouseup"}.w2color`, h = `${p.isIOS ? "touchmove" : "mousemove"}.w2color`;
    function o(f, m, w) {
      var _a;
      f.h != null && (r.h = f.h), f.s != null && (r.s = f.s), f.v != null && (r.v = f.v), f.a != null && (n.a = f.a, r.a = f.a);
      let g = "rgba(" + (n = p.hsv2rgb(r)).r + "," + n.g + "," + n.b + "," + n.a + ")", v = [Number(n.r).toString(16).toUpperCase(), Number(n.g).toString(16).toUpperCase(), Number(n.b).toString(16).toUpperCase(), Math.round(255 * Number(n.a)).toString(16).toUpperCase()];
      var k, x;
      v.forEach((S, $) => {
        S.length === 1 && (v[$] = "0" + S);
      }), g = v[0] + v[1] + v[2] + v[3], n.a === 1 && (g = v[0] + v[1] + v[2]), a(e.box).find(".color-preview").css("background-color", "#" + g), a(e.box).find("input").each((S) => {
        S.name && (n[S.name] != null && (S.value = n[S.name]), r[S.name] != null && (S.value = r[S.name]), S.name === "a") && (S.value = n.a);
      }), w ? (f = ((_a = e.tmp) == null ? void 0 : _a.initColor) || g, a(e.box).find(".color-original").css("background-color", "#" + f), a(e.box).find(".w2ui-colors .w2ui-selected").removeClass("w2ui-selected"), a(e.box).find(`.w2ui-colors [name="${f}"]`).addClass("w2ui-selected"), g.length == 8 && s.tabClick(2, e.name)) : s.select(g, e.name), m && (w = a(e.box).find(".palette .value1"), f = a(e.box).find(".rainbow .value2"), m = a(e.box).find(".alpha .value2"), k = parseInt(w[0].clientWidth) / 2, x = parseInt(f[0].clientWidth) / 2, w.css({ left: 150 * r.s / 100 - k + "px", top: 125 * (100 - r.v) / 100 - k + "px" }), f.css("left", r.h / 2.4 - x + "px"), m.css("left", 150 * n.a - x + "px"), c());
    }
    function c() {
      var f = p.hsv2rgb(r.h, 100, 100), f = `${f.r},${f.g},` + f.b;
      a(e.box).find(".palette").css("background-image", `linear-gradient(90deg, rgba(${f},0) 0%, rgba(${f},1) 100%)`);
    }
    function d(f) {
      a("body").off(".w2color");
    }
    function u(v) {
      var x = t.el, g = v.pageX - t.x, v = v.pageY - t.y;
      let m = t.left + g, w = t.top + v;
      var g = parseInt(x.prop("clientWidth")) / 2, v = (m < -g && (m = -g), w < -g && (w = -g), m > t.width - g && (m = t.width - g), w > t.height - g && (w = t.height - g), x.hasClass("move-x") && x.css({ left: m + "px" }), x.hasClass("move-y") && x.css({ top: w + "px" }), a(x.get(0).parentNode).attr("name")), k = parseInt(x.css("left")) + g, x = parseInt(x.css("top")) + g;
      v === "palette" && o({ s: Math.round(k / t.width * 100), v: Math.round(100 - x / t.height * 100) }), v === "rainbow" && (o({ h: Math.round(2.4 * k) }), c()), v === "alpha" && o({ a: parseFloat(Number(k / 150).toFixed(2)) });
    }
    a(e.box).find(".palette, .rainbow, .alpha").off(".w2color").on(i + ".w2color", function(f) {
      var m = a(this).find(".value1, .value2"), w = parseInt(m.prop("clientWidth")) / 2;
      m.hasClass("move-x") && m.css({ left: f.offsetX - w + "px" }), m.hasClass("move-y") && m.css({ top: f.offsetY - w + "px" }), t = { el: m, x: f.pageX, y: f.pageY, width: m.prop("parentNode").clientWidth, height: m.prop("parentNode").clientHeight, left: parseInt(m.css("left")), top: parseInt(m.css("top")) }, u(f), a("body").off(".w2color").on(h, u).on(l, d);
    });
  }
}
class Is extends W {
  constructor() {
    super(), this.defaults = p.extend({}, this.defaults, { type: "normal", items: [], index: null, render: null, spinner: false, msgNoItems: p.lang("No items found"), topHTML: "", menuStyle: "", filter: false, markSearch: false, match: "contains", search: false, altRows: false, arrowSize: 10, align: "left", position: "bottom|top", class: "w2ui-white", anchorClass: "w2ui-focus", autoShowOn: "focus", hideOn: ["doc-click", "focus-change", "select"], onSelect: null, onSubMenu: null, onRemove: null });
  }
  attach(e, t) {
    let s;
    arguments.length == 1 && e.anchor ? e = (s = e).anchor : arguments.length === 2 && t != null && typeof t == "object" && ((s = t).anchor = e), t = s.hideOn, s = p.extend({}, this.defaults, s || {}), t && (s.hideOn = t), s.style += "; padding: 0;", s.items == null && (s.items = []), s.html = this.getMenuHTML(s);
    let i = super.attach(s), n = i.overlay;
    return n.on("show:after.attach, update:after.attach", (r) => {
      var _a;
      if ((_a = i.overlay) == null ? void 0 : _a.box) {
        let h = "";
        n.selected = null, n.options.items = p.normMenu(n.options.items), ["INPUT", "TEXTAREA"].includes(n.anchor.tagName) && (h = n.anchor.value, n.selected = n.anchor.dataset.selectedIndex);
        var l = a(i.overlay.box).find(".w2ui-eaction");
        p.bindEvents(l, this), this.applyFilter(n.name, null, h).then((o) => {
          n.tmp.searchCount = o.count, n.tmp.search = o.search, this.refreshSearch(n.name), this.initControls(i.overlay), this.refreshIndex(n.name);
        });
      }
    }), n.on("hide:after.attach", (r) => {
      B.hide(n.name + "-tooltip");
    }), i.select = (r) => (n.on("select.attach", (l) => {
      r(l);
    }), i), i.remove = (r) => (n.on("remove.attach", (l) => {
      r(l);
    }), i), i.subMenu = (r) => (n.on("subMenu.attach", (l) => {
      r(l);
    }), i), i;
  }
  update(e, t) {
    var s, i = W.active[e];
    i ? ((s = i.options).items != t && (s.items = t), t = this.getMenuHTML(s), s.html != t && (s.html = t, i.needsUpdate = true, this.show(e))) : console.log(`Tooltip "${e}" is not displayed. Cannot update it.`);
  }
  initControls(e) {
    a(e.box).find(".w2ui-menu:not(.w2ui-sub-menu)").off(".w2menu").on("mouseDown.w2menu", { delegate: ".w2ui-menu-item" }, (t) => {
      var s = t.delegate.dataset;
      this.menuDown(e, t, s.index, s.parents);
    }).on((p.isIOS ? "touchStart" : "click") + ".w2menu", { delegate: ".w2ui-menu-item" }, (t) => {
      var s = t.delegate.dataset;
      this.menuClick(e, t, parseInt(s.index), s.parents);
    }).find(".w2ui-menu-item").off(".w2menu").on("mouseEnter.w2menu", (t) => {
      var _a;
      var s = t.target.dataset, s = (_a = e.options.items[s.index]) == null ? void 0 : _a.tooltip;
      s && B.show({ name: e.name + "-tooltip", anchor: t.target, html: s, position: "right|left", hideOn: ["doc-click"] });
    }).on("mouseLeave.w2menu", (t) => {
      B.hide(e.name + "-tooltip");
    }), ["INPUT", "TEXTAREA"].includes(e.anchor.tagName) && a(e.anchor).off(".w2menu").on("input.w2menu", (t) => {
    }).on("keyup.w2menu", (t) => {
      t._searchType = "filter", this.keyUp(e, t);
    }), e.options.search && a(e.box).find("#menu-search").off(".w2menu").on("keyup.w2menu", (t) => {
      t._searchType = "search", this.keyUp(e, t);
    });
  }
  getCurrent(l, n) {
    var l = W.active[l.replace(/[\s\.#]/g, "_")], s = l.options;
    let i = (n || (l.selected ?? "")).split("-");
    var n = i.length - 1, l = i[n], r = i.slice(0, i.length - 1).join("-"), l = p.isInt(l) ? parseInt(l) : 0;
    let h = s.items;
    return i.forEach((o, c) => {
      c < i.length - 1 && (h = h[o].items);
    }), { last: n, index: l, items: h, item: h[l], parents: r };
  }
  getMenuHTML(e, t, s, i) {
    if (e.spinner) return `
            <div class="w2ui-menu">
                <div class="w2ui-no-items">
                    <div class="w2ui-spinner"></div>
                    ${p.lang("Loading...")}
                </div>
            </div>`;
    i = i || [], t == null && (t = e.items), Array.isArray(t) || (t = []);
    let n = 0, r = null, l = "", h = (!s && e.search && (l += `
                <div class="w2ui-menu-search">
                    <span class="w2ui-icon w2ui-icon-search"></span>
                    <input id="menu-search" class="w2ui-input" type="text"/>
                </div>`, t.forEach((o) => o.hidden = false)), !s && e.topHTML && (l += `<div class="w2ui-menu-top">${e.topHTML}</div>`), `
            ${l}
            <div class="w2ui-menu ${s ? "w2ui-sub-menu" : ""}" ${s ? "" : `style="${e.menuStyle}"`}
                data-parent="${i}">
        `);
    return t.forEach((o, c) => {
      r = o.icon;
      var d = (0 < i.length ? i.join("-") + "-" : "") + c;
      if (r == null && (r = null), ["radio", "check"].indexOf(e.type) == -1 || Array.isArray(o.items) || o.group === false || (r = o.checked === true ? "w2ui-icon-check" : "w2ui-icon-empty"), o.hidden !== true) {
        let f = o.text, m = "", w = "";
        if (typeof (f = typeof e.render == "function" ? e.render(o, e) : f) == "function" && (f = f(o, e)), r && (String(r).slice(0, 1) !== "<" && (r = `<span class="w2ui-icon ${r}"></span>`), m = `<div class="menu-icon">${r}</span></div>`), o.type !== "break" && f != null && f !== "" && String(f).substr(0, 2) != "--") {
          var u = ["w2ui-menu-item"];
          e.altRows == 1 && u.push(n % 2 == 0 ? "w2ui-even" : "w2ui-odd");
          let g = 1, v = (m === "" && g++, o.count == null && o.hotkey == null && o.remove !== true && o.items == null && g++, o.tooltip == null && o.hint != null && (o.tooltip = o.hint), "");
          if (o.remove === true) v = '<span class="remove">x</span>';
          else if (o.items != null) {
            let k = [];
            typeof o.items == "function" ? k = o.items(o) : Array.isArray(o.items) && (k = o.items), v = "<span></span>", w = `
                            <div class="w2ui-sub-menu-box" style="${o.expanded ? "" : "display: none"}">
                                ${this.getMenuHTML(e, k, true, i.concat(c))}
                            </div>`;
          } else o.count != null && (v += "<span>" + o.count + "</span>"), o.hotkey != null && (v += '<span class="hotkey">' + o.hotkey + "</span>");
          o.disabled === true && u.push("w2ui-disabled"), o._noSearchInside === true && u.push("w2ui-no-search-inside"), w !== "" && (u.push("has-sub-menu"), o.expanded ? u.push("expanded") : u.push("collapsed")), h += `
                        <div index="${d}" class="${u.join(" ")}" style="${o.style || ""}"
                            data-index="${c}" data-parents="${i.join("-")}">
                                <div style="width: ${(s ? 20 : 0) + parseInt(o.indent ?? 0)}px"></div>
                                ${m}
                                <div class="menu-text" colspan="${g}">${p.lang(f)}</div>
                                <div class="menu-extra">${v}</div>
                        </div>
                        ` + w, n++;
        } else u = (f ?? "").replace(/^-+/g, ""), h += `
                        <div index="${d}" class="w2ui-menu-divider ${u != "" ? "has-text" : ""}">
                            <div class="line"></div>
                            ${u ? `<div class="text">${u}</div>` : ""}
                        </div>`;
      }
      t[c] = o;
    }), n === 0 && e.msgNoItems && (h += `
                <div class="w2ui-no-items">
                    ${p.lang(e.msgNoItems)}
                </div>`), h += "</div>";
  }
  refreshIndex(i) {
    var t, s, i = W.active[i.replace(/[\s\.#]/g, "_")];
    i && (i.displayed || this.show(i.name), t = a(i.box).find(".w2ui-overlay-body").get(0), s = a(i.box).find(".w2ui-menu-search, .w2ui-menu-top").get(0), a(i.box).find(".w2ui-menu-item.w2ui-selected").removeClass("w2ui-selected"), i = a(i.box).find(`.w2ui-menu-item[index="${i.selected}"]`).addClass("w2ui-selected").get(0)) && (i.offsetTop + i.clientHeight > t.clientHeight + t.scrollTop && i.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" }), i.offsetTop < t.scrollTop + (s ? s.clientHeight : 0)) && i.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
  }
  refreshSearch(e) {
    var _a, _b;
    let t = W.active[e.replace(/[\s\.#]/g, "_")];
    t && (t.displayed || this.show(t.name), a(t.box).find(".w2ui-no-items").hide(), a(t.box).find(".w2ui-menu-item, .w2ui-menu-divider").each((s) => {
      var _a2, _b2;
      var i;
      ((_a2 = this.getCurrent(e, s.getAttribute("index")).item) == null ? void 0 : _a2.hidden) ? a(s).hide() : ((i = (_b2 = t.tmp) == null ? void 0 : _b2.search) && t.options.markSearch && p.marker(s, i, { onlyFirst: t.options.match == "begins" }), a(s).show());
    }), a(t.box).find(".w2ui-sub-menu").each((s) => {
      var i = a(s).find(".w2ui-menu-item").get().some((n) => n.style.display != "none");
      this.getCurrent(e, s.dataset.parent).item.expanded && (i ? a(s).parent().show() : a(s).parent().hide());
    }), t.tmp.searchCount != 0 && ((_b = (_a = t.options) == null ? void 0 : _a.items) == null ? void 0 : _b.length) != 0 || (a(t.box).find(".w2ui-no-items").length == 0 && a(t.box).find(".w2ui-menu:not(.w2ui-sub-menu)").append(`
                    <div class="w2ui-no-items">
                        ${p.lang(t.options.msgNoItems)}
                    </div>`), a(t.box).find(".w2ui-no-items").show()));
  }
  applyFilter(e, t, s, i) {
    var _a;
    let n = 0;
    var r = W.active[e.replace(/[\s\.#]/g, "_")];
    let l = r.options, h, o;
    var c = new Promise((f, m) => {
      h = f, o = m;
    });
    s == null && (s = ["INPUT", "TEXTAREA"].includes(r.anchor.tagName) ? r.anchor.value : "");
    let d = [];
    l.selected && (Array.isArray(l.selected) ? d = l.selected.map((f) => (f == null ? void 0 : f.id) ?? f) : ((_a = l.selected) == null ? void 0 : _a.id) && (d = [l.selected.id])), r.tmp.activeChain = null;
    var u = r.tmp.remote ?? { hasMore: true, emtpySet: false, search: null, total: -1 };
    if (t == null && l.url && u.hasMore && u.search !== s) {
      let f = true, m = p.lang("Loading...");
      s.length < l.minLength && u.emptySet !== true && (m = p.lang("${count} letters or more...", { count: l.minLength }), f = false, s === "") && (m = p.lang(l.msgSearch)), a(r.box).find(".w2ui-no-items").html(m), u.search = s, l.items = [], r.tmp.remote = u, f && this.request(r, s, i).then((w) => {
        this.update(e, w), this.applyFilter(e, null, s).then((g) => {
          h(g);
        });
      }).catch((w) => {
        console.log("Server Request error", w);
      });
    } else {
      let f;
      t == null && (f = this.trigger("search", { search: s, overlay: r, prom: c, resolve: h, reject: o })).isCancelled === true || (t == null && (t = r.options.items), l.filter === false ? h({ count: -1, search: s }) : (t.forEach((m) => {
        let w = "", g = "";
        ["is", "begins", "begins with"].indexOf(l.match) !== -1 && (w = "^"), ["is", "ends", "ends with"].indexOf(l.match) !== -1 && (g = "$");
        try {
          new RegExp(w + s + g, "i").test(m.text) || m.text === "..." ? m.hidden = false : m.hidden = true;
        } catch {
        }
        l.hideSelected && d.includes(m.id) && (m.hidden = true), Array.isArray(m.items) && 0 < m.items.length && (delete m._noSearchInside, this.applyFilter(e, m.items, s).then((v) => {
          v = v.count, 0 < v && (n += v, m.hidden && (m._noSearchInside = true), s && (m.expanded = true), m.hidden = false);
        })), m.hidden !== true && n++;
      }), h({ count: n, search: s }), f == null ? void 0 : f.finish()));
    }
    return c;
  }
  request(e, t, s) {
    let i = e.options, n = e.tmp.remote, r, l;
    return (i.items.length === 0 && n.total !== 0 || n.total == i.cacheMax && t.length > n.search.length || t.length >= n.search.length && t.substr(0, n.search.length) !== n.search || t.length < n.search.length) && (n.controller && n.controller.abort(), n.loading = true, clearTimeout(n.timeout), n.timeout = setTimeout(() => {
      var h = i.url;
      let o = { search: t, max: i.cacheMax };
      Object.assign(o, i.postData);
      var c, d = this.trigger("request", { search: t, overlay: e, url: h, postData: o, httpMethod: i.method ?? "GET", httpHeaders: {} });
      d.isCancelled !== true && (h = new URL(d.detail.url, location), c = p.prepareParams(h, { method: d.detail.httpMethod, headers: d.detail.httpHeaders, body: d.detail.postData }), n.controller = new AbortController(), c.signal = n.controller.signal, fetch(h, c).then((u) => u.json()).then((u) => {
        n.controller = null;
        var f = e.trigger("load", { search: o.search, overlay: e, data: u });
        f.isCancelled !== true && (typeof (u = f.detail.data) == "string" && (u = JSON.parse(u)), (u = Array.isArray(u) ? { records: u } : u).records == null && u.items != null && (u.records = u.items, delete u.items), u.error || u.records != null || (u.records = []), Array.isArray(u.records) ? (u.records.length >= i.cacheMax ? (u.records.splice(i.cacheMax, u.records.length), n.hasMore = true) : n.hasMore = false, i.recId == null && i.recid != null && (i.recId = i.recid), (i.recId || i.recText) && u.records.forEach((m) => {
          typeof i.recId == "string" && (m.id = m[i.recId]), typeof i.recId == "function" && (m.id = i.recId(m)), typeof i.recText == "string" && (m.text = m[i.recText]), typeof i.recText == "function" && (m.text = i.recText(m));
        }), n.loading = false, n.search = t, n.total = u.records.length, n.lastError = "", n.emptySet = t === "" && u.records.length === 0, f.finish(), r(p.normMenu(u.records))) : console.error("ERROR: server did not return proper data structure", `
`, " - it should return", { records: [{ id: 1, text: "item" }] }, `
`, " - or just an array ", [{ id: 1, text: "item" }], `
`, " - or if errorr ", { error: true, message: "error message" }));
      }).catch((u) => {
        var f = this.trigger("error", { overlay: e, search: t, error: u });
        f.isCancelled !== true && ((u == null ? void 0 : u.name) !== "AbortError" && console.error("ERROR: Server communication failed.", `
`, " - it should return", { records: [{ id: 1, text: "item" }] }, `
`, " - or just an array ", [{ id: 1, text: "item" }], `
`, " - or if errorr ", { error: true, message: "error message" }), n.loading = false, n.search = "", n.total = -1, n.emptySet = true, n.lastError = f.detail.error || "Server communication failed", i.items = [], f.finish(), l());
      }), d.finish());
    }, s ? i.debounce ?? 350 : 0)), new Promise((h, o) => {
      r = h, l = o;
    });
  }
  getActiveChain(e, t, s = [], i = [], n) {
    var r = W.active[e.replace(/[\s\.#]/g, "_")];
    return r.tmp.activeChain != null ? r.tmp.activeChain : ((t = t ?? r.options.items).forEach((l, h) => {
      var _a;
      l.hidden || l.disabled || ((_a = l == null ? void 0 : l.text) == null ? void 0 : _a.startsWith("--")) || (i.push(s.concat([h]).join("-")), Array.isArray(l.items) && 0 < l.items.length && l.expanded && (s.push(h), this.getActiveChain(e, l.items, s, i, true), s.pop()));
    }), n == null && (r.tmp.activeChain = i), i);
  }
  menuDown(e, t, s, i) {
    e = e.options;
    let n = e.items;
    var r = a(t.delegate).find(".w2ui-icon");
    let l = a(t.target).closest(".w2ui-menu:not(.w2ui-sub-menu)"), h = (typeof i == "string" && i !== "" && i.split("-").forEach((o) => {
      n = n[o].items;
    }), n[s]);
    if (!h.disabled) {
      let o = (c, d) => {
        c.forEach((u, f) => {
          u.id != h.id && (u.group === h.group && u.checked && (l.find(`.w2ui-menu-item[index="${(d ? d + "-" : "") + f}"] .w2ui-icon`).removeClass("w2ui-icon-check").addClass("w2ui-icon-empty"), c[f].checked = false), Array.isArray(u.items)) && o(u.items, f);
        });
      };
      e.type !== "check" && e.type !== "radio" || h.group === false || a(t.target).hasClass("remove") || a(t.target).closest(".w2ui-menu-item").hasClass("has-sub-menu") || (h.checked = e.type == "radio" || !h.checked, h.checked ? (e.type === "radio" && a(t.target).closest(".w2ui-menu").find(".w2ui-icon").removeClass("w2ui-icon-check").addClass("w2ui-icon-empty"), e.type === "check" && h.group != null && o(e.items), r.removeClass("w2ui-icon-empty").addClass("w2ui-icon-check")) : e.type === "check" && r.removeClass("w2ui-icon-check").addClass("w2ui-icon-empty")), a(t.target).hasClass("remove") || (l.find(".w2ui-menu-item").removeClass("w2ui-selected"), a(t.delegate).addClass("w2ui-selected"));
    }
  }
  menuClick(e, t, s, i) {
    var n = e.options;
    let r = n.items;
    var l = a(t.delegate).closest(".w2ui-menu-item");
    let h = !n.hideOn.includes("select");
    (t.shiftKey || t.metaKey || t.ctrlKey) && (h = true), typeof i == "string" && i !== "" ? i.split("-").forEach((c) => {
      r = r[c].items;
    }) : i = null;
    var o = (r = typeof r == "function" ? r({ overlay: e, index: s, parentIndex: i, event: t }) : r)[s];
    if (!o.disabled || a(t.target).hasClass("remove")) {
      let c;
      if (a(t.target).hasClass("remove")) {
        if ((c = this.trigger("remove", { originalEvent: t, target: e.name, overlay: e, item: o, index: s, parentIndex: i, el: l[0] })).isCancelled === true) return;
        h = !n.hideOn.includes("item-remove"), l.remove();
      } else if (l.hasClass("has-sub-menu")) {
        if ((c = this.trigger("subMenu", { originalEvent: t, target: e.name, overlay: e, item: o, index: s, parentIndex: i, el: l[0] })).isCancelled === true) return;
        h = true, l.hasClass("expanded") ? (o.expanded = false, l.removeClass("expanded").addClass("collapsed"), a(l.get(0).nextElementSibling).hide()) : (o.expanded = true, l.addClass("expanded").removeClass("collapsed"), a(l.get(0).nextElementSibling).show()), e.selected = parseInt(l.attr("index"));
      } else {
        if (n = this.findChecked(n.items), e.selected = parseInt(l.attr("index")), (c = this.trigger("select", { originalEvent: t, target: e.name, overlay: e, item: o, index: s, parentIndex: i, selected: n, keepOpen: h, el: l[0] })).isCancelled === true) return;
        o.keepOpen != null && (h = o.keepOpen), ["INPUT", "TEXTAREA"].includes(e.anchor.tagName) && (e.anchor.dataset.selected = o.id, e.anchor.dataset.selectedIndex = e.selected);
      }
      h || this.hide(e.name), c.finish();
    }
  }
  findChecked(e) {
    let t = [];
    return e.forEach((s) => {
      s.checked && t.push(s), Array.isArray(s.items) && (t = t.concat(this.findChecked(s.items)));
    }), t;
  }
  keyUp(e, t) {
    var _a, _b;
    var s = e.options, i = t.target.value;
    let n = true, r = false;
    switch (t.keyCode) {
      case 46:
      case 8:
        i !== "" || e.displayed || (n = false);
        break;
      case 13:
        if (!e.displayed || !e.selected) return;
        var { index: h, parents: l } = this.getCurrent(e.name);
        t.delegate = a(e.box).find(".w2ui-selected").get(0), this.menuClick(e, t, parseInt(h), l), n = false;
        break;
      case 27:
        n = false, e.displayed ? this.hide(e.name) : (h = e.anchor, ["INPUT", "TEXTAREA"].includes(h.tagName) && (h.value = "", delete h.dataset.selected, delete h.dataset.selectedIndex));
        break;
      case 37: {
        if (!e.displayed) return;
        let { item: c, index: d, parents: u } = this.getCurrent(e.name);
        u && (c = s.items[u], d = parseInt(u), u = "", r = true), Array.isArray(c == null ? void 0 : c.items) && 0 < c.items.length && c.expanded && (t.delegate = a(e.box).find(`.w2ui-menu-item[index="${d}"]`).get(0), e.selected = d, this.menuClick(e, t, parseInt(d), u)), n = false;
        break;
      }
      case 39:
        if (!e.displayed) return;
        var { item: l, index: h, parents: o } = this.getCurrent(e.name);
        Array.isArray(l == null ? void 0 : l.items) && 0 < l.items.length && !l.expanded && (t.delegate = a(e.box).find(".w2ui-selected").get(0), this.menuClick(e, t, parseInt(h), o)), n = false;
        break;
      case 38:
        e.displayed && (l = this.getActiveChain(e.name), e.selected == null || ((_a = e.selected) == null ? void 0 : _a.length) == 0 ? e.selected = l[l.length - 1] : ((h = l.indexOf(e.selected)) == -1 && (e.selected = l[l.length - 1]), 0 < h && (e.selected = l[h - 1])), n = false, r = true, t.preventDefault());
        break;
      case 40:
        e.displayed && (o = this.getActiveChain(e.name), e.selected == null || ((_b = e.selected) == null ? void 0 : _b.length) == 0 ? e.selected = o[0] : ((l = o.indexOf(e.selected)) == -1 && (e.selected = o[0]), l < o.length - 1 && (e.selected = o[l + 1])), n = false, r = true, t.preventDefault());
    }
    n && e.displayed && (s.filter && t._searchType == "filter" || s.search && t._searchType == "search") && this.applyFilter(e.name, null, i, true).then((c) => {
      e.tmp.searchCount = c.count, e.tmp.search = c.search, c.count !== 0 && this.getActiveChain(e.name).includes(e.selected) || (e.selected = null), this.refreshSearch(e.name);
    }), r && this.refreshIndex(e.name);
  }
}
class Ms extends W {
  constructor() {
    super();
    var e = /* @__PURE__ */ new Date();
    this.daysCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], this.today = e.getFullYear() + "/" + (Number(e.getMonth()) + 1) + "/" + e.getDate(), this.defaults = p.extend({}, this.defaults, { position: "top|bottom", class: "w2ui-calendar", type: "date", format: "", value: "", start: null, end: null, blockDates: [], blockWeekdays: [], colored: {}, arrowSize: 12, autoResize: false, anchorClass: "w2ui-focus", autoShowOn: "focus", hideOn: ["doc-click", "focus-change"], onSelect: null });
  }
  attach(n, i) {
    let s;
    arguments.length == 1 && n.anchor ? n = (s = n).anchor : arguments.length === 2 && i != null && typeof i == "object" && ((s = i).anchor = n);
    var i = s.hideOn, n = (s = p.extend({}, this.defaults, s || {}), i && (s.hideOn = i), s.format || (n = p.settings.dateFormat, i = p.settings.timeFormat, s.type == "date" ? s.format = n : s.type == "time" ? s.format = i : s.format = n + "|" + i), s.type == "time" ? this.getHourHTML(s) : this.getMonthHTML(s));
    s.style += "; padding: 0;", s.html = n.html;
    let r = super.attach(s), l = r.overlay;
    return Object.assign(l.tmp, n), l.on("show.attach", (o) => {
      var o = o.detail.overlay, c = o.anchor, d = o.options;
      ["INPUT", "TEXTAREA"].includes(c.tagName) && !d.value && c.value && (o.tmp.initValue = c.value), delete o.newValue, delete o.newDate;
    }), l.on("show:after.attach", (h) => {
      var _a;
      ((_a = r.overlay) == null ? void 0 : _a.box) && this.initControls(r.overlay);
    }), l.on("update:after.attach", (h) => {
      var _a;
      ((_a = r.overlay) == null ? void 0 : _a.box) && this.initControls(r.overlay);
    }), l.on("hide.attach", (o) => {
      var o = o.detail.overlay, c = o.anchor;
      o.newValue != null && (o.newDate && (o.newValue = o.newDate + " " + o.newValue), ["INPUT", "TEXTAREA"].includes(c.tagName) && c.value != o.newValue && (c.value = o.newValue), (c = this.trigger("select", { date: o.newValue, target: o.name, overlay: o })).isCancelled !== true) && c.finish();
    }), r.select = (h) => (l.on("select.attach", (o) => {
      h(o);
    }), r), r;
  }
  initControls(e) {
    let t = e.options, s = (n) => {
      let { month: r, year: l } = e.tmp;
      12 < (r += n) && (r = 1, l++), r < 1 && (r = 12, l--), n = this.getMonthHTML(t, r, l), Object.assign(e.tmp, n), a(e.box).find(".w2ui-overlay-body").html(n.html), this.initControls(e);
    }, i = (n, r) => {
      a(n.target).parent().find(".w2ui-jump-month, .w2ui-jump-year").removeClass("w2ui-selected"), a(n.target).addClass("w2ui-selected"), n = /* @__PURE__ */ new Date();
      let { jumpMonth: l, jumpYear: h } = e.tmp;
      (l = r && (h == null && (h = n.getFullYear()), l == null) ? n.getMonth() + 1 : l) && h && (r = this.getMonthHTML(t, l, h), Object.assign(e.tmp, r), a(e.box).find(".w2ui-overlay-body").html(r.html), e.tmp.jump = false, this.initControls(e));
    };
    a(e.box).find(".w2ui-cal-title").off(".calendar").on("click.calendar", (n) => {
      var r, l;
      Object.assign(e.tmp, { jumpYear: null, jumpMonth: null }), e.tmp.jump ? ({ month: r, year: l } = e.tmp, r = this.getMonthHTML(t, r, l), a(e.box).find(".w2ui-overlay-body").html(r.html), e.tmp.jump = false) : (a(e.box).find(".w2ui-overlay-body .w2ui-cal-days").replace(this.getYearHTML()), (l = a(e.box).find(`[name="${e.tmp.year}"]`).get(0)) && l.scrollIntoView(true), e.tmp.jump = true), this.initControls(e), n.stopPropagation();
    }).find(".w2ui-cal-previous").off(".calendar").on("click.calendar", (n) => {
      s(-1), n.stopPropagation();
    }).parent().find(".w2ui-cal-next").off(".calendar").on("click.calendar", (n) => {
      s(1), n.stopPropagation();
    }), a(e.box).find(".w2ui-cal-now").off(".calendar").on("click.calendar", (n) => {
      t.type == "datetime" ? e.newDate ? e.newValue = p.formatTime(/* @__PURE__ */ new Date(), t.format.split("|")[1]) : e.newValue = p.formatDateTime(/* @__PURE__ */ new Date(), t.format) : t.type == "date" ? e.newValue = p.formatDate(/* @__PURE__ */ new Date(), t.format) : t.type == "time" && (e.newValue = p.formatTime(/* @__PURE__ */ new Date(), t.format)), this.hide(e.name);
    }), a(e.box).off(".calendar").on("click.calendar", { delegate: ".w2ui-day.w2ui-date" }, (n) => {
      t.type == "datetime" ? (e.newDate = a(n.target).attr("date"), a(e.box).find(".w2ui-overlay-body").html(this.getHourHTML(e.options).html), this.initControls(e)) : (e.newValue = a(n.target).attr("date"), this.hide(e.name));
    }).on("click.calendar", { delegate: ".w2ui-jump-month" }, (n) => {
      e.tmp.jumpMonth = parseInt(a(n.target).attr("name")), i(n);
    }).on("dblclick.calendar", { delegate: ".w2ui-jump-month" }, (n) => {
      e.tmp.jumpMonth = parseInt(a(n.target).attr("name")), i(n, true);
    }).on("click.calendar", { delegate: ".w2ui-jump-year" }, (n) => {
      e.tmp.jumpYear = parseInt(a(n.target).attr("name")), i(n);
    }).on("dblclick.calendar", { delegate: ".w2ui-jump-year" }, (n) => {
      e.tmp.jumpYear = parseInt(a(n.target).attr("name")), i(n, true);
    }).on("click.calendar", { delegate: ".w2ui-time.hour" }, (r) => {
      var r = a(r.target).attr("hour");
      let l = this.str2min(t.value) % 60;
      e.tmp.initValue && !t.value && (l = this.str2min(e.tmp.initValue) % 60), t.noMinutes ? (e.newValue = this.min2str(60 * r, t.format), this.hide(e.name)) : (e.newValue = r + ":" + l, r = this.getMinHTML(r, t).html, a(e.box).find(".w2ui-overlay-body").html(r), this.initControls(e));
    }).on("click.calendar", { delegate: ".w2ui-time.min" }, (n) => {
      n = 60 * Math.floor(this.str2min(e.newValue) / 60) + parseInt(a(n.target).attr("min")), e.newValue = this.min2str(n, t.format), this.hide(e.name);
    });
  }
  getMonthHTML(e, t, s) {
    var r = p.settings.fulldays.slice(), i = p.settings.shortdays.slice();
    p.settings.weekStarts !== "M" && (r.unshift(r.pop()), i.unshift(i.pop()));
    let n = /* @__PURE__ */ new Date();
    var r = e.type === "datetime" ? p.isDateTime(e.value, e.format, true) : p.isDate(e.value, e.format, true), l = p.formatDate(r);
    t != null && s != null || (s = (r || n).getFullYear(), t = r ? r.getMonth() + 1 : n.getMonth() + 1), 12 < t && (t -= 12, s++), (t < 1 || t === 0) && (t += 12, s--), s / 4 == Math.floor(s / 4) ? this.daysCount[1] = 29 : this.daysCount[1] = 28, e.current = t + "/" + s;
    let h = (n = new Date(s, t - 1, 1)).getDay(), o = "";
    var c = p.settings.weekStarts;
    for (let k = 0; k < i.length; k++) {
      var d = c == "M" && k == 5 || c != "M" && k == 6, u = c == "M" && k == 6 || c != "M" && k == 0;
      o += `<div class="w2ui-day w2ui-weekday ${d ? "w2ui-sunday" : ""} ${u ? "w2ui-saturday" : ""}">${i[k]}</div>`;
    }
    let f = `
            <div class="w2ui-cal-title">
                <div class="w2ui-cal-previous">
                    <div></div>
                </div>
                <div class="w2ui-cal-next">
                    <div></div>
                </div>
                ${p.settings.fullmonths[t - 1]}, ${s}
                <span class="arrow-down"></span>
            </div>
            <div class="w2ui-cal-days">
                ${o}
        `, m = /* @__PURE__ */ new Date(s + `/${t}/1`);
    r = (m = new Date(m.getTime() + 432e5)).getDay(), p.settings.weekStarts == "M" && h--, 0 < r && (m = new Date(m.getTime() - 864e5 * h));
    for (let k = 0; k < 42; k++) {
      var w = [], g = `${m.getFullYear()}/${m.getMonth() + 1}/` + m.getDate(), v = (m.getDay() === 6 && w.push("w2ui-saturday"), m.getDay() === 0 && w.push("w2ui-sunday"), m.getMonth() + 1 !== t && w.push("outside"), g == this.today && w.push("w2ui-today"), m.getDate());
      let x = "", S = "", $, I;
      I = e.type === "datetime" ? ($ = p.formatDateTime(g, e.format), p.formatDate(g, p.settings.dateFormat)) : $ = p.formatDate(g, e.format), e.colored && e.colored[I] !== void 0 && (g = e.colored[I].split("|"), S = "background-color: " + g[0] + ";", x = "color: " + g[1] + ";"), f += `<div class="w2ui-day ${this.inRange($, e, true) ? "w2ui-date " + (I == l ? "w2ui-selected" : "") : "w2ui-blocked"} ${w.join(" ")}"
                       style="${x + S}" date="${I}" data-date="${m.getTime()}">
                            ${v}
                    </div>`, m = new Date(m.getTime() + 864e5);
    }
    return f += "</div>", e.btnNow && (r = p.lang("Today" + (e.type == "datetime" ? " & Now" : "")), f += `<div class="w2ui-cal-now">${r}</div>`), { html: f, month: t, year: s };
  }
  getYearHTML() {
    let e = "", t = "";
    for (let s = 0; s < p.settings.fullmonths.length; s++) e += `<div class="w2ui-jump-month" name="${s + 1}">${p.settings.shortmonths[s]}</div>`;
    for (let s = p.settings.dateStartYear; s <= p.settings.dateEndYear; s++) t += `<div class="w2ui-jump-year" name="${s}">${s}</div>`;
    return `<div class="w2ui-cal-jump">
            <div id="w2ui-jump-month">${e}</div>
            <div id="w2ui-jump-year">${t}</div>
        </div>`;
  }
  getHourHTML(e) {
    (e = e ?? {}).format || (e.format = p.settings.timeFormat);
    var t = -1 < e.format.indexOf("h24"), s = e.value || (e.anchor ? e.anchor.value : ""), i = [];
    for (let l = 0; l < 24; l++) {
      let h = (12 <= l && !t ? l - 12 : l) + ":00" + (t ? "" : l < 12 ? " am" : " pm"), o = (l != 12 || t || (h = "12:00 pm"), i[Math.floor(l / 8)] || (i[Math.floor(l / 8)] = ""), this.min2str(this.str2min(h))), c = this.min2str(this.str2min(h) + 59);
      e.type === "datetime" && (r = p.isDateTime(s, e.format, true), n = e.format.split("|")[0].trim(), o = p.formatDate(r, n) + " " + o, c = p.formatDate(r, n) + " " + c);
      var n, r = this.inRange(o, e) || this.inRange(c, e);
      i[Math.floor(l / 8)] += `<span hour="${l}"
                class="hour ${r ? "w2ui-time " : "w2ui-blocked"}">${h}</span>`;
    }
    return { html: `<div class="w2ui-calendar">
            <div class="w2ui-time-title">${p.lang("Select Hour")}</div>
            <div class="w2ui-cal-time">
                <div class="w2ui-cal-column">${i[0]}</div>
                <div class="w2ui-cal-column">${i[1]}</div>
                <div class="w2ui-cal-column">${i[2]}</div>
            </div>
            ${e.btnNow ? `<div class="w2ui-cal-now">${p.lang("Now")}</div>` : ""}
        </div>` };
  }
  getMinHTML(e, t) {
    e == null && (e = 0), (t = t ?? {}).format || (t.format = p.settings.timeFormat);
    var s = -1 < t.format.indexOf("h24"), i = t.value || (t.anchor ? t.anchor.value : ""), n = [];
    for (let c = 0; c < 60; c += 5) {
      var r = (12 < e && !s ? e - 12 : e) + ":" + (c < 10 ? 0 : "") + c + " " + (s ? "" : e < 12 ? "am" : "pm");
      let d = r;
      var l, h, o = c < 20 ? 0 : c < 40 ? 1 : 2;
      n[o] || (n[o] = ""), t.type === "datetime" && (l = p.isDateTime(i, t.format, true), h = t.format.split("|")[0].trim(), d = p.formatDate(l, h) + " " + d), n[o] += `<span min="${c}" class="min ${this.inRange(d, t) ? "w2ui-time " : "w2ui-blocked"}">${r}</span>`;
    }
    return { html: `<div class="w2ui-calendar">
            <div class="w2ui-time-title">${p.lang("Select Minute")}</div>
            <div class="w2ui-cal-time">
                <div class="w2ui-cal-column">${n[0]}</div>
                <div class="w2ui-cal-column">${n[1]}</div>
                <div class="w2ui-cal-column">${n[2]}</div>
            </div>
            ${t.btnNow ? `<div class="w2ui-cal-now">${p.lang("Now")}</div>` : ""}
        </div>` };
  }
  inRange(e, t, s) {
    let i = false;
    if (t.type === "date") {
      var n = p.isDate(e, t.format, true);
      if (n) {
        if (t.start || t.end) {
          var r = typeof t.start == "string" ? t.start : a(t.start).val(), l = typeof t.end == "string" ? t.end : a(t.end).val();
          let h = p.isDate(r, t.format, true), o = p.isDate(l, t.format, true);
          r = new Date(n), h = h || r, o = o || r, r >= h && r <= o && (i = true);
        } else i = true;
        Array.isArray(t.blockDates) && t.blockDates.includes(e) && (i = false), Array.isArray(t.blockWeekdays) && t.blockWeekdays.includes(n.getDay()) && (i = false);
      }
    } else if (t.type === "time") if (t.start || t.end) {
      l = this.str2min(e);
      let h = this.str2min(t.start), o = this.str2min(t.end);
      h = h || l, o = o || l, l >= h && l <= o && (i = true);
    } else i = true;
    else t.type === "datetime" && (r = p.isDateTime(e, t.format, true)) && (n = t.format.split("|").map((h) => h.trim()), s ? (l = p.formatDate(r, n[0]), e = p.extend({}, t, { type: "date", format: n[0] }), this.inRange(l, e) && (i = true)) : (s = p.formatTime(r, n[1]), l = { type: "time", format: n[1], start: t.startTime, end: t.endTime }, this.inRange(s, l) && (i = true)));
    return i;
  }
  str2min(e) {
    var t;
    return typeof e != "string" || (t = e.split(":")).length !== 2 ? null : (t[0] = parseInt(t[0]), t[1] = parseInt(t[1]), e.indexOf("pm") !== -1 && t[0] !== 12 && (t[0] += 12), e.includes("am") && t[0] == 12 && (t[0] = 0), 60 * t[0] + t[1]);
  }
  min2str(i, t) {
    1440 <= i && (i %= 1440), i < 0 && (i = 1440 + i);
    var s = Math.floor(i / 60), i = (i % 60 < 10 ? "0" : "") + i % 60;
    return t = t || p.settings.timeFormat, t.indexOf("h24") !== -1 ? s + ":" + i : (s <= 12 ? s : s - 12) + ":" + i + " " + (12 <= s ? "pm" : "am");
  }
}
let B = new W(), ee = new Is(), _t = new Es(), be = new Ms();
class Ds extends fe {
  constructor(e) {
    super(e.name), this.box = null, this.name = null, this.routeData = {}, this.items = [], this.right = "", this.tooltip = "top|left", this.onClick = null, this.onMouseDown = null, this.onMouseUp = null, this.onMouseEnter = null, this.onMouseLeave = null, this.onRender = null, this.onRefresh = null, this.onResize = null, this.onDestroy = null, this.item_template = { id: null, type: "button", text: null, html: "", tooltip: null, count: null, hidden: false, disabled: false, checked: false, icon: null, route: null, arrow: null, style: null, group: null, items: null, selected: null, color: null, overlay: { anchorClass: "" }, onClick: null, onRefresh: null }, this.last = { badge: {} };
    var t = e.items;
    delete e.items, Object.assign(this, e), Array.isArray(t) && this.add(t, true), e.items = t, typeof this.box == "string" && (this.box = a(this.box).get(0)), this.box && this.render(this.box);
  }
  add(e, t) {
    this.insert(null, e, t);
  }
  insert(e, t, s) {
    (t = Array.isArray(t) ? t : [t]).forEach((i, n, r) => {
      typeof i == "string" && (i = r[n] = { id: i, text: i });
      var l, h = ["button", "check", "radio", "drop", "menu", "menu-radio", "menu-check", "color", "text-color", "html", "break", "spacer", "new-line"];
      if (h.includes(String(i.type))) if (i.id != null || ["break", "spacer", "new-line"].includes(i.type)) {
        if (i.type == null) console.log('ERROR: The parameter "type" is required but not supplied.', i);
        else if (p.checkUniqueId(i.id, this.items, "toolbar", this.name)) {
          let o = p.extend({}, this.item_template, i);
          o.type == "menu-check" ? (Array.isArray(o.selected) || (o.selected = []), Array.isArray(o.items) && o.items.forEach((c) => {
            (c = typeof c == "string" ? r[n] = { id: c, text: c } : c).checked && !o.selected.includes(c.id) && o.selected.push(c.id), !c.checked && o.selected.includes(c.id) && (c.checked = true), c.checked == null && (c.checked = false);
          })) : o.type == "menu-radio" && Array.isArray(o.items) && o.items.forEach((c, d, u) => {
            (c = typeof c == "string" ? u[d] = { id: c, text: c } : c).checked && o.selected == null ? o.selected = c.id : c.checked = false, c.checked || o.selected != c.id || (c.checked = true), c.checked == null && (c.checked = false);
          }), e == null ? this.items.push(o) : (l = this.get(e, true), this.items = this.items.slice(0, l).concat([o], this.items.slice(l))), o.line = o.line ?? 1, s !== true && this.refresh(o.id);
        }
      } else console.log('ERROR: The parameter "id" is required but not supplied.', i);
      else console.log('ERROR: The parameter "type" should be one of the following:', h, `, but ${i.type} is supplied.`, i);
    }), s !== true && this.resize();
  }
  remove() {
    let e = 0;
    return Array.from(arguments).forEach((t) => {
      var s = this.get(t);
      s && String(t).indexOf(":") == -1 && (e++, a(this.box).find("#tb_" + this.name + "_item_" + p.escapeId(s.id)).remove(), (t = this.get(s.id, true)) != null) && this.items.splice(t, 1);
    }), this.resize(), e;
  }
  set(e, t) {
    var s = this.get(e);
    return s != null && (Object.assign(s, t), this.refresh(String(e).split(":")[0]), true);
  }
  get(e, t) {
    if (arguments.length === 0) {
      var s = [];
      for (let l = 0; l < this.items.length; l++) this.items[l].id != null && s.push(this.items[l].id);
      return s;
    }
    var i = String(e).split(":");
    for (let l = 0; l < this.items.length; l++) {
      var n = this.items[l];
      if (["menu", "menu-radio", "menu-check"].includes(n.type) && i.length == 2 && n.id == i[0]) {
        let h = n.items;
        typeof h == "function" && (h = h(this));
        for (let o = 0; o < h.length; o++) {
          var r = h[o];
          if (r.id == i[1] || r.id == null && r.text == i[1]) return t == 1 ? o : r;
          if (Array.isArray(r.items)) {
            for (let c = 0; c < r.items.length; c++) if (r.items[c].id == i[1] || r.items[c].id == null && r.items[c].text == i[1]) return t == 1 ? o : r.items[c];
          }
        }
      } else if (n.id == i[0]) return t == 1 ? l : n;
    }
    return null;
  }
  setCount(e, t, s, i) {
    var n = a(this.box).find(`#tb_${this.name}_item_${p.escapeId(e)} .w2ui-tb-count > span`);
    0 < n.length ? (n.removeClass().addClass(s ?? "").text(t).get(0).style.cssText = i ?? "", this.last.badge[e] = { className: s ?? "", style: i ?? "" }, this.get(e).count = t) : (this.set(e, { count: t }), this.setCount(...arguments));
  }
  show() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      var s = this.get(t);
      s && (s.hidden = false, e.push(String(t).split(":")[0]));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t), this.resize();
      });
    }, 15), e;
  }
  hide() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      var s = this.get(t);
      s && (s.hidden = true, e.push(String(t).split(":")[0]));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t), this.tooltipHide(t), this.resize();
      });
    }, 15), e;
  }
  enable() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      var s = this.get(t);
      s && (s.disabled = false, e.push(String(t).split(":")[0]));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t);
      });
    }, 15), e;
  }
  disable() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      var s = this.get(t);
      s && (s.disabled = true, e.push(String(t).split(":")[0]));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t), this.tooltipHide(t);
      });
    }, 15), e;
  }
  check() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      var s = this.get(t);
      s && String(t).indexOf(":") == -1 && (s.checked = true, e.push(String(t).split(":")[0]));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t);
      });
    }, 15), e;
  }
  uncheck() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      var s = this.get(t);
      s && String(t).indexOf(":") == -1 && (["menu", "menu-radio", "menu-check", "drop", "color", "text-color"].includes(s.type) && s.checked && B.hide(this.name + "-drop"), s.checked = false, e.push(String(t).split(":")[0]));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t);
      });
    }, 15), e;
  }
  click(e, t) {
    var s = String(e).split(":");
    let i = this.get(s[0]), n = i && i.items ? p.normMenu.call(this, i.items, i) : [];
    if (1 < s.length) (s = this.get(e)) && !s.disabled && this.menuClick({ name: this.name, item: i, subItem: s, originalEvent: t });
    else if (i && !i.disabled && (s = this.trigger("click", { target: e ?? this.name, item: i, object: i, originalEvent: t }), s.isCancelled !== true)) {
      n = i && i.items ? p.normMenu.call(this, i.items, i) : [];
      let h = "#tb_" + this.name + "_item_" + p.escapeId(i.id);
      if (a(this.box).find(h).removeClass("down"), i.type == "radio") {
        for (let o = 0; o < this.items.length; o++) {
          var r = this.items[o];
          r != null && r.id != i.id && r.type === "radio" && r.group == i.group && r.checked && (r.checked = false, this.refresh(r.id));
        }
        i.checked = true, a(this.box).find(h).addClass("checked");
      }
      if (["menu", "menu-radio", "menu-check", "drop", "color", "text-color"].includes(i.type)) {
        if (this.tooltipHide(e), i.checked) return void B.hide(this.name + "-drop");
        setTimeout(() => {
          var o = (d, u) => {
            let f = this;
            return function() {
              f.set(d, { checked: false });
            };
          }, c = a(this.box).find("#tb_" + this.name + "_item_" + p.escapeId(i.id));
          if (p.isPlainObject(i.overlay) || (i.overlay = {}), i.type == "drop" && B.show(p.extend({ html: i.html, class: "w2ui-white", hideOn: ["doc-click"] }, i.overlay, { anchor: c[0], name: this.name + "-drop", data: { item: i, btn: h } })).hide(o(i.id)), ["menu", "menu-radio", "menu-check"].includes(i.type)) {
            let d = "normal";
            i.type == "menu-radio" && (d = "radio", n.forEach((u) => {
              i.selected == u.id ? u.checked = true : u.checked = false;
            })), i.type == "menu-check" && (d = "check", n.forEach((u) => {
              Array.isArray(i.selected) && i.selected.includes(u.id) ? u.checked = true : u.checked = false;
            })), ee.show(p.extend({ items: n }, i.overlay, { type: d, name: this.name + "-drop", anchor: c[0], data: { item: i, btn: h } })).hide(o(i.id)).remove((u) => {
              this.menuClick({ name: this.name, remove: true, item: i, subItem: u.detail.item, originalEvent: u });
            }).select((u) => {
              this.menuClick({ name: this.name, item: i, subItem: u.detail.item, originalEvent: u });
            });
          }
          ["color", "text-color"].includes(i.type) && _t.show(p.extend({ color: i.color }, i.overlay, { anchor: c[0], name: this.name + "-drop", data: { item: i, btn: h } })).hide(o(i.id)).select((d) => {
            d.detail.color != null && this.colorClick({ name: this.name, item: i, color: d.detail.color });
          });
        }, 0);
      }
      if (["check", "menu", "menu-radio", "menu-check", "drop", "color", "text-color"].includes(i.type) && (i.checked = !i.checked, i.checked ? a(this.box).find(h).addClass("checked") : a(this.box).find(h).removeClass("checked")), i.route) {
        let o = ("/" + i.route).replace(/\/{2,}/g, "/");
        var l = p.parseRoute(o);
        if (0 < l.keys.length) for (let c = 0; c < l.keys.length; c++) o = o.replace(new RegExp(":" + l.keys[c].name, "g"), this.routeData[l.keys[c].name]);
        setTimeout(() => {
          window.location.hash = o;
        }, 1);
      }
      this.tooltipShow(e), s.finish();
    }
  }
  scroll(e, t, s) {
    return new Promise((i, n) => {
      var r = a(this.box).find(`.w2ui-tb-line:nth-child(${t}) .w2ui-scroll-wrapper`), l = r.get(0).scrollLeft, h = r.find(".w2ui-tb-right").get(0), o = r.parent().get(0).getBoundingClientRect().width, c = l + parseInt(h.offsetLeft) + parseInt(h.clientWidth);
      switch (e) {
        case "left":
          (scroll = l - o + 50) <= 0 && (scroll = 0), r.get(0).scrollTo({ top: 0, left: scroll, behavior: s ? "atuo" : "smooth" });
          break;
        case "right":
          (scroll = l + o - 50) >= c - o && (scroll = c - o), r.get(0).scrollTo({ top: 0, left: scroll, behavior: s ? "atuo" : "smooth" });
      }
      setTimeout(() => {
        this.resize(), i();
      }, s ? 0 : 500);
    });
  }
  render(e) {
    var t = Date.now(), s = (typeof e == "string" && (e = a(e).get(0)), this.trigger("render", { target: this.name, box: e ?? this.box }));
    if (s.isCancelled !== true && (e != null && (0 < a(this.box).find(".w2ui-scroll-wrapper .w2ui-tb-right").length && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-toolbar").html(""), this.box = e), this.box)) {
      Array.isArray(this.right) || (this.right = [this.right]);
      let n = "", r = 0;
      for (let l = 0; l < this.items.length; l++) {
        var i = this.items[l];
        i != null && (i.id == null && (i.id = "item_" + l), i.caption != null && console.log("NOTICE: toolbar item.caption property is deprecated, please use item.text. Item -> ", i), i.hint != null && console.log("NOTICE: toolbar item.hint property is deprecated, please use item.tooltip. Item -> ", i), l !== 0 && i.type != "new-line" || (r++, n += `
                    <div class="w2ui-tb-line">
                        <div class="w2ui-scroll-wrapper w2ui-eaction" data-mousedown="resize">
                            <div class="w2ui-tb-right">${this.right[r - 1] ?? ""}</div>
                        </div>
                        <div class="w2ui-scroll-left w2ui-eaction" data-click='["scroll", "left", "${r}"]'></div>
                        <div class="w2ui-scroll-right w2ui-eaction" data-click='["scroll", "right", "${r}"]'></div>
                    </div>
                `), i.line = r);
      }
      return a(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-toolbar").html(n), 0 < a(this.box).length && (a(this.box)[0].style.cssText += this.style), p.bindEvents(a(this.box).find(".w2ui-tb-line .w2ui-eaction"), this), this.last.observeResize = new ResizeObserver(() => {
        this.resize();
      }), this.last.observeResize.observe(this.box), this.refresh(), this.resize(), s.finish(), Date.now() - t;
    }
  }
  refresh(e) {
    var t = Date.now(), s = this.trigger("refresh", { target: e ?? this.name, item: this.get(e) });
    if (s.isCancelled !== true) {
      let h;
      if (e == null) for (let o = 0; o < this.items.length; o++) {
        var i = this.items[o];
        i.id == null && (i.id = "item_" + o), this.refresh(i.id);
      }
      else {
        var n = this.get(e);
        if (n == null) return false;
        if (typeof n.onRefresh != "function" || (h = this.trigger("refresh", { target: e, item: n, object: n })).isCancelled !== true) {
          var r = `#tb_${this.name}_item_` + p.escapeId(n.id);
          let o = a(this.box).find(r);
          var l = this.getItemHTML(n);
          if (this.tooltipHide(e), n.type == "spacer" && a(this.box).find(".w2ui-tb-line:nth-child(" + n.line).find(".w2ui-tb-right").css("width", "auto"), o.length === 0) {
            e = parseInt(this.get(e, true)) + 1;
            let c = a(this.box).find(`#tb_${this.name}_item_` + p.escapeId(this.items[e] ? this.items[e].id : ""));
            c.length == 0 ? c = a(this.box).find(".w2ui-tb-line:nth-child(" + n.line).find(".w2ui-tb-right").before(l) : c.after(l), p.bindEvents(a(this.box).find(r), this);
          } else {
            a(this.box).find(r).replace(a.html(l));
            let c = a(this.box).find(r).get(0), d = (p.bindEvents(c, this), B.get(true));
            Object.keys(d).forEach((u) => {
              d[u].anchor == o.get(0) && (d[u].anchor = c);
            });
          }
          if (["menu", "menu-radio", "menu-check"].includes(n.type) && n.checked) {
            let c = Array.isArray(n.selected) ? n.selected : [n.selected];
            n.items.forEach((d) => {
              c.includes(d.id) ? d.checked = true : d.checked = false;
            }), ee.update(this.name + "-drop", n.items);
          }
          return typeof n.onRefresh == "function" && h.finish(), s.finish(), Date.now() - t;
        }
      }
    }
  }
  resize() {
    var e = Date.now(), t = this.trigger("resize", { target: this.name });
    if (t.isCancelled !== true) return a(this.box).find(".w2ui-tb-line").each((i) => {
      var i = a(i), n = (i.find(".w2ui-scroll-left, .w2ui-scroll-right").hide(), i.find(".w2ui-scroll-wrapper").get(0)), l = i.find(".w2ui-tb-right"), r = i.get(0).getBoundingClientRect().width, l = 0 < l.length ? l[0].offsetLeft + l[0].clientWidth : 0;
      r < l && (0 < n.scrollLeft && i.find(".w2ui-scroll-left").show(), r < l - n.scrollLeft) && i.find(".w2ui-scroll-right").show();
    }), t.finish(), Date.now() - e;
  }
  destroy() {
    var _a;
    var e = this.trigger("destroy", { target: this.name });
    e.isCancelled !== true && (0 < a(this.box).find(".w2ui-scroll-wrapper  .w2ui-tb-right").length && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-toolbar").html(""), a(this.box).html(""), (_a = this.last.observeResize) == null ? void 0 : _a.disconnect(), delete oe[this.name], e.finish());
  }
  getItemHTML(e) {
    let t = "", s = (e.caption != null && e.text == null && (e.text = e.caption), e.text == null && (e.text = ""), e.tooltip == null && e.hint != null && (e.tooltip = e.hint), e.tooltip == null && (e.tooltip = ""), typeof e.get == "function" || !Array.isArray(e.items) && typeof e.items != "function" || (e.get = function(l) {
      let h = e.items;
      return (h = typeof h == "function" ? e.items(e) : h).find((o) => o.id == l);
    }), ""), i = typeof e.text == "function" ? e.text.call(this, e) : e.text;
    e.icon && (s = e.icon, typeof e.icon == "function" && (s = e.icon.call(this, e)), s = `<div class="w2ui-tb-icon">${s = String(s).slice(0, 1) !== "<" ? `<span class="${s}"></span>` : s}</div>`);
    var n = ["w2ui-tb-button"];
    switch (e.checked && n.push("checked"), e.disabled && n.push("disabled"), e.hidden && n.push("hidden"), s || n.push("no-icon"), e.type) {
      case "color":
      case "text-color":
        typeof e.color == "string" && (e.color.slice(0, 1) == "#" && (e.color = e.color.slice(1)), [3, 6, 8].includes(e.color.length)) && (e.color = "#" + e.color), e.type == "color" && (i = `<span class="w2ui-tb-color-box" style="background-color: ${e.color != null ? e.color : "#fff"}"></span>
                           ` + (e.text ? `<div style="margin-left: 17px;">${p.lang(e.text)}</div>` : "")), e.type == "text-color" && (i = '<span style="color: ' + (e.color != null ? e.color : "#444") + ';">' + (e.text ? p.lang(e.text) : "<b>Aa</b>") + "</span>");
      case "menu":
      case "menu-check":
      case "menu-radio":
      case "button":
      case "check":
      case "radio":
      case "drop":
        var r = e.arrow === true || e.arrow !== false && ["menu", "menu-radio", "menu-check", "drop", "color", "text-color"].includes(e.type);
        t = `
                    <div id="tb_${this.name}_item_${e.id}" style="${e.hidden ? "display: none" : ""}"
                        class="${n.join(" ")} ${e.class || ""}"
                        ${e.disabled ? "" : `data-click='["click","${e.id}"]'
                               data-mouseenter='["mouseAction", "event", "this", "Enter", "${e.id}"]'
                               data-mouseleave='["mouseAction", "event", "this", "Leave", "${e.id}"]'
                               data-mousedown='["mouseAction", "event", "this", "Down", "${e.id}"]'
                               data-mouseup='["mouseAction", "event", "this", "Up", "${e.id}"]'`}
                    >
                        ${s}
                        ${i != "" ? `<div class="w2ui-tb-text" style="${e.style || ""}">
                                    ${p.lang(i)}
                                    ${e.count != null ? p.stripSpaces(`<span class="w2ui-tb-count">
                                                <span class="${this.last.badge[e.id] ? this.last.badge[e.id].className ?? "" : ""}"
                                                    style="${this.last.badge[e.id] ? this.last.badge[e.id].style ?? "" : ""}"
                                                >${e.count}</span>
                                           </span>`) : ""}
                                    ${r ? '<span class="w2ui-tb-down"><span></span></span>' : ""}
                                </div>` : ""}
                    </div>
                `;
        break;
      case "break":
        t = `<div id="tb_${this.name}_item_${e.id}" class="w2ui-tb-break"
                            style="${e.hidden ? "display: none" : ""}; ${e.style || ""}">
                            &#160;
                        </div>`;
        break;
      case "spacer":
        t = `<div id="tb_${this.name}_item_${e.id}" class="w2ui-tb-spacer"
                            style="${e.hidden ? "display: none" : ""}; ${e.style || ""}">
                        </div>`;
        break;
      case "html":
        t = `<div id="tb_${this.name}_item_${e.id}" class="w2ui-tb-html ${n.join(" ")}"
                            style="${e.hidden ? "display: none" : ""}; ${e.style || ""}">
                            ${typeof e.html == "function" ? e.html.call(this, e) : e.html}
                        </div>`;
    }
    return t;
  }
  tooltipShow(e) {
    if (this.tooltip != null) {
      var t = a(this.box).find("#tb_" + this.name + "_item_" + p.escapeId(e)).get(0), e = this.get(e), s = this.tooltip;
      let n = e.tooltip;
      typeof n == "function" && (n = n.call(this, e)), ["menu", "menu-radio", "menu-check", "drop", "color", "text-color"].includes(e.type) && e.checked == 1 || B.show({ anchor: t, name: this.name + "-tooltip", html: n, position: s });
    }
  }
  tooltipHide(e) {
    this.tooltip != null && B.hide(this.name + "-tooltip");
  }
  menuClick(e) {
    if (e.item && !e.item.disabled) {
      var t = this.trigger(e.remove !== true ? "click" : "remove", { target: e.item.id + ":" + e.subItem.id, item: e.item, subItem: e.subItem, originalEvent: e.originalEvent });
      if (t.isCancelled !== true) {
        let n = e.subItem, r = this.get(e.item.id), l = r.items;
        if (typeof l == "function" && (l = r.items()), r.type == "menu" && (r.selected = n.id), r.type == "menu-radio" && (r.selected = n.id, Array.isArray(l) && l.forEach((h) => {
          h.checked === true && delete h.checked, Array.isArray(h.items) && h.items.forEach((o) => {
            o.checked === true && delete o.checked;
          });
        }), n.checked = true), r.type == "menu-check") {
          if (Array.isArray(r.selected) || (r.selected = []), n.group == null) {
            var s = r.selected.indexOf(n.id);
            s == -1 ? (r.selected.push(n.id), n.checked = true) : (r.selected.splice(s, 1), n.checked = false);
          } else if (n.group !== false) {
            let h = [];
            s = r.selected.indexOf(n.id);
            let o = (c) => {
              c.forEach((d) => {
                var u;
                d.group === n.group && (u = r.selected.indexOf(d.id)) != -1 && (d.id != n.id && h.push(d.id), r.selected.splice(u, 1)), Array.isArray(d.items) && o(d.items);
              });
            };
            o(l), s == -1 && (r.selected.push(n.id), n.checked = true);
          }
        }
        if (typeof n.route == "string") {
          let h = n.route !== "" ? ("/" + n.route).replace(/\/{2,}/g, "/") : "";
          var i = p.parseRoute(h);
          if (0 < i.keys.length) for (let o = 0; o < i.keys.length; o++) this.routeData[i.keys[o].name] != null && (h = h.replace(new RegExp(":" + i.keys[o].name, "g"), this.routeData[i.keys[o].name]));
          setTimeout(() => {
            window.location.hash = h;
          }, 1);
        }
        this.refresh(e.item.id), t.finish();
      }
    }
  }
  colorClick(e) {
    var t;
    e.item && !e.item.disabled && (t = this.trigger("click", { target: e.item.id, item: e.item, color: e.color, final: e.final, originalEvent: e.originalEvent })).isCancelled !== true && (e.item.color = e.color, this.refresh(e.item.id), t.finish());
  }
  mouseAction(r, t, s, i) {
    var n = this.get(i), r = this.trigger("mouse" + s, { target: i, item: n, object: n, originalEvent: r });
    if (r.isCancelled !== true && !n.disabled && !n.hidden) {
      switch (s) {
        case "Enter":
          a(t).addClass("over"), this.tooltipShow(i);
          break;
        case "Leave":
          a(t).removeClass("over down"), this.tooltipHide(i);
          break;
        case "Down":
          a(t).addClass("down");
          break;
        case "Up":
          a(t).removeClass("down");
      }
      r.finish();
    }
  }
}
class Us extends fe {
  constructor(e) {
    super(e.name), this.box = null, this.name = null, this.active = null, this.reorder = false, this.flow = "down", this.tooltip = "top|left", this.tabs = [], this.routeData = {}, this.last = {}, this.right = "", this.style = "", this.onClick = null, this.onMouseEnter = null, this.onMouseLeave = null, this.onMouseDown = null, this.onMouseUp = null, this.onClose = null, this.onRender = null, this.onRefresh = null, this.onResize = null, this.onDestroy = null, this.tab_template = { id: null, text: null, route: null, hidden: false, disabled: false, closable: false, tooltip: null, style: "", onClick: null, onRefresh: null, onClose: null };
    var t = e.tabs;
    delete e.tabs, Object.assign(this, e), Array.isArray(t) && this.add(t), e.tabs = t, typeof this.box == "string" && (this.box = a(this.box).get(0)), this.box && this.render(this.box);
  }
  add(e) {
    return this.insert(null, e);
  }
  insert(e, t) {
    Array.isArray(t) || (t = [t]);
    let s = [];
    return t.forEach((i) => {
      var n, r;
      i.id == null ? console.log(`ERROR: The parameter "id" is required but not supplied. (obj: ${this.name})`) : p.checkUniqueId(i.id, this.tabs, "tabs", this.name) && (i = Object.assign({}, this.tab_template, i), e == null ? (this.tabs.push(i), s.push(this.animateInsert(null, i))) : (n = this.get(e, true), r = this.tabs[n].id, this.tabs.splice(n, 0, i), s.push(this.animateInsert(r, i))));
    }), Promise.all(s);
  }
  remove() {
    let e = 0;
    return Array.from(arguments).forEach((t) => {
      t = this.get(t), t && (e++, this.tabs.splice(this.get(t.id, true), 1), a(this.box).find(`#tabs_${this.name}_tab_` + p.escapeId(t.id)).remove());
    }), this.resize(), e;
  }
  select(e) {
    return this.active != e && this.get(e) != null && (this.active = e, this.refresh(), true);
  }
  set(e, t) {
    var s = this.get(e, true);
    return s != null && (p.extend(this.tabs[s], t), this.refresh(e), true);
  }
  get(e, t) {
    if (arguments.length === 0) {
      var s = [];
      for (let i = 0; i < this.tabs.length; i++) this.tabs[i].id != null && s.push(this.tabs[i].id);
      return s;
    }
    for (let i = 0; i < this.tabs.length; i++) if (this.tabs[i].id == e) return t === true ? i : this.tabs[i];
    return null;
  }
  show() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      t = this.get(t), t && t.hidden !== false && (t.hidden = false, e.push(t.id));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t), this.resize();
      });
    }, 15), e;
  }
  hide() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      t = this.get(t), t && t.hidden !== true && (t.hidden = true, e.push(t.id));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t), this.resize();
      });
    }, 15), e;
  }
  enable() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      t = this.get(t), t && t.disabled !== false && (t.disabled = false, e.push(t.id));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t);
      });
    }, 15), e;
  }
  disable() {
    let e = [];
    return Array.from(arguments).forEach((t) => {
      t = this.get(t), t && t.disabled !== true && (t.disabled = true, e.push(t.id));
    }), setTimeout(() => {
      e.forEach((t) => {
        this.refresh(t);
      });
    }, 15), e;
  }
  dragMove(e) {
    if (this.last.reordering) {
      let h = function(o, c) {
        o += c;
        let d = l.tabs[o];
        return d = d && d.hidden ? h(o, c) : d;
      }, l = this;
      var t = this.last.moving, n = this.tabs[t.index], s = h(t.index, 1), i = h(t.index, -1), n = a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(n.id));
      if (0 < t.divX && s) {
        var r = a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(s.id));
        let o = parseInt(n.get(0).clientWidth), c = parseInt(r.get(0).clientWidth);
        if (o = o < c ? Math.floor(o / 3) : Math.floor(c / 3), c -= o, t.divX > c) return s = this.tabs.indexOf(s), this.tabs.splice(t.index, 0, this.tabs.splice(s, 1)[0]), t.$tab.before(r.get(0)), t.$tab.css("opacity", 0), void Object.assign(this.last.moving, { index: s, divX: -o, x: e.pageX + o, left: t.left + t.divX + o });
      }
      if (t.divX < 0 && i) {
        r = a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(i.id));
        let o = parseInt(n.get(0).clientWidth), c = parseInt(r.get(0).clientWidth);
        o = o < c ? Math.floor(o / 3) : Math.floor(c / 3), c -= o, Math.abs(t.divX) > c && (s = this.tabs.indexOf(i), this.tabs.splice(t.index, 0, this.tabs.splice(s, 1)[0]), r.before(t.$tab), t.$tab.css("opacity", 0), Object.assign(t, { index: s, divX: o, x: e.pageX - o, left: t.left + t.divX - o }));
      }
    }
  }
  mouseAction(e, t, s) {
    var i = this.get(t), n = this.trigger("mouse" + e, { target: t, tab: i, object: i, originalEvent: s });
    if (n.isCancelled !== true && !i.disabled && !i.hidden) {
      switch (e) {
        case "Enter":
          this.tooltipShow(t);
          break;
        case "Leave":
          this.tooltipHide(t);
          break;
        case "Down":
          this.initReorder(t, s);
      }
      n.finish();
    }
  }
  tooltipShow(s) {
    var t = this.get(s), s = a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(s)).get(0);
    if (this.tooltip != null && !t.disabled && !this.last.reordering) {
      var i = this.tooltip;
      let n = t.tooltip;
      typeof n == "function" && (n = n.call(this, t)), B.show({ anchor: s, name: this.name + "_tooltip", html: n, position: i });
    }
  }
  tooltipHide(e) {
    this.tooltip != null && B.hide(this.name + "_tooltip");
  }
  getTabHTML(e) {
    if (e = this.get(e, true), e = this.tabs[e], e == null) return false;
    e.text == null && e.caption != null && (e.text = e.caption), e.tooltip == null && e.hint != null && (e.tooltip = e.hint), e.caption != null && console.log("NOTICE: tabs tab.caption property is deprecated, please use tab.text. Tab -> ", e), e.hint != null && console.log("NOTICE: tabs tab.hint property is deprecated, please use tab.tooltip. Tab -> ", e);
    let t = e.text, s = ((t = typeof t == "function" ? t.call(this, e) : t) == null && (t = ""), ""), i = "";
    return e.hidden && (i += "display: none;"), e.disabled && (i += "opacity: 0.2;"), e.closable && !e.disabled && (s = `<div class="w2ui-tab-close w2ui-eaction ${this.active === e.id ? "active" : ""}"
                data-mousedown="stop" data-mouseup="clickClose|${e.id}|event">
            </div>`), `
            <div id="tabs_${this.name}_tab_${e.id}" style="${i} ${e.style}"
                class="w2ui-tab w2ui-eaction ${this.active === e.id ? "active" : ""} ${e.closable ? "closable" : ""} ${e.class || ""}"
                data-mouseenter="mouseAction|Enter|${e.id}|event]"
                data-mouseleave="mouseAction|Leave|${e.id}|event]"
                data-mousedown="mouseAction|Down|${e.id}|event"
                data-mouseup="mouseAction|Up|${e.id}|event"
                data-click="click|${e.id}|event"
               >
                    ${p.lang(t) + s}
            </div>`;
  }
  refresh(e) {
    var t = Date.now(), s = (this.flow == "up" ? a(this.box).addClass("w2ui-tabs-up") : a(this.box).removeClass("w2ui-tabs-up"), this.trigger("refresh", { target: e ?? this.name, object: this.get(e) }));
    if (s.isCancelled !== true) {
      if (e == null) for (let r = 0; r < this.tabs.length; r++) this.refresh(this.tabs[r].id);
      else {
        var i = "#tabs_" + this.name + "_tab_" + p.escapeId(e), n = a(this.box).find(i), e = this.getTabHTML(e);
        n.length === 0 ? a(this.box).find("#tabs_" + this.name + "_right").before(e) : a(this.box).find(".tab-animate-insert").length == 0 && n.replace(e), p.bindEvents(a(this.box).find(i + `, ${i} .w2ui-eaction`), this);
      }
      return a(this.box).find("#tabs_" + this.name + "_right").html(this.right), s.finish(), Date.now() - t;
    }
  }
  render(e) {
    var t = Date.now(), s = (typeof e == "string" && (e = a(e).get(0)), this.trigger("render", { target: this.name, box: e ?? this.box }));
    if (s.isCancelled !== true) return e != null && (0 < a(this.box).find("#tabs_" + this.name + "_right").length && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-tabs").html(""), this.box = e), !!this.box && (e = `
            <div class="w2ui-tabs-line"></div>
            <div class="w2ui-scroll-wrapper w2ui-eaction" data-mousedown="resize">
                <div id="tabs_${this.name}_right" class="w2ui-tabs-right">${this.right}</div>
            </div>
            <div class="w2ui-scroll-left w2ui-eaction" data-click='["scroll","left"]'></div>
            <div class="w2ui-scroll-right w2ui-eaction" data-click='["scroll","right"]'></div>`, a(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-tabs").html(e), 0 < a(this.box).length && (a(this.box)[0].style.cssText += this.style), p.bindEvents(a(this.box).find(".w2ui-eaction"), this), this.last.observeResize = new ResizeObserver(() => {
      this.resize();
    }), this.last.observeResize.observe(this.box), s.finish(), this.refresh(), this.resize(), Date.now() - t);
  }
  initReorder(e, t) {
    if (this.reorder) {
      let s = this, i = a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(e)), n = this.get(e, true), r = a(i.get(0).cloneNode(true)), l;
      r.attr("id", "#tabs_" + this.name + "_tab_ghost"), this.last.moving = { index: n, indexFrom: n, $tab: i, $ghost: r, divX: 0, left: i.get(0).getBoundingClientRect().left, parentX: a(this.box).get(0).getBoundingClientRect().left, x: t.pageX, opacity: i.css("opacity") }, a(document).off(".w2uiTabReorder").on("mousemove.w2uiTabReorder", function(h) {
        if (!s.last.reordering) {
          if ((l = s.trigger("reorder", { target: s.tabs[n].id, indexFrom: n, tab: s.tabs[n] })).isCancelled === true) return;
          B.hide(this.name + "_tooltip"), s.last.reordering = true, r.addClass("moving"), r.css({ "pointer-events": "none", position: "absolute", left: i.get(0).getBoundingClientRect().left }), i.css("opacity", 0), a(s.box).find(".w2ui-scroll-wrapper").append(r.get(0)), a(s.box).find(".w2ui-tab-close").hide();
        }
        s.last.moving.divX = h.pageX - s.last.moving.x, r.css("left", s.last.moving.left - s.last.moving.parentX + s.last.moving.divX + "px"), s.dragMove(h);
      }).on("mouseup.w2uiTabReorder", function() {
        a(document).off(".w2uiTabReorder"), r.css({ transition: "0.1s", left: s.last.moving.$tab.get(0).getBoundingClientRect().left - s.last.moving.parentX }), a(s.box).find(".w2ui-tab-close").show(), setTimeout(() => {
          r.remove(), i.css({ opacity: s.last.moving.opacity }), s.last.reordering && l.finish({ indexTo: s.last.moving.index }), s.last.reordering = false;
        }, 100);
      });
    }
  }
  scroll(e, t) {
    return new Promise((s, i) => {
      var n = a(this.box).find(".w2ui-scroll-wrapper"), r = n.get(0).scrollLeft, l = n.find(".w2ui-tabs-right").get(0), h = n.parent().get(0).getBoundingClientRect().width, o = r + parseInt(l.offsetLeft) + parseInt(l.clientWidth);
      switch (e) {
        case "left": {
          let c = r - h + 50;
          c <= 0 && (c = 0), n.get(0).scrollTo({ top: 0, left: c, behavior: t ? "atuo" : "smooth" });
          break;
        }
        case "right": {
          let c = r + h - 50;
          c >= o - h && (c = o - h), n.get(0).scrollTo({ top: 0, left: c, behavior: t ? "atuo" : "smooth" });
          break;
        }
      }
      setTimeout(() => {
        this.resize(), s();
      }, t ? 0 : 350);
    });
  }
  scrollIntoView(e, t) {
    return new Promise((s, i) => {
      e == null && (e = this.active), this.get(e) != null && (a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(e)).get(0).scrollIntoView({ block: "start", inline: "center", behavior: t ? "atuo" : "smooth" }), setTimeout(() => {
        this.resize(), s();
      }, t ? 0 : 500));
    });
  }
  resize() {
    var e = Date.now();
    if (this.box != null) {
      var t, s, i, n, r = this.trigger("resize", { target: this.name });
      if (r.isCancelled !== true) return (t = a(this.box)).find(".w2ui-scroll-left, .w2ui-scroll-right").hide(), s = t.find(".w2ui-scroll-wrapper").get(0), n = t.find(".w2ui-tabs-right"), (i = t.get(0).getBoundingClientRect().width) < (n = 0 < n.length ? n[0].offsetLeft + n[0].clientWidth : 0) && (0 < s.scrollLeft && t.find(".w2ui-scroll-left").show(), i < n - s.scrollLeft) && t.find(".w2ui-scroll-right").show(), r.finish(), Date.now() - e;
    }
  }
  destroy() {
    var _a;
    var e = this.trigger("destroy", { target: this.name });
    e.isCancelled !== true && (0 < a(this.box).find("#tabs_" + this.name + "_right").length && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-tabs").html(""), (_a = this.last.observeResize) == null ? void 0 : _a.disconnect(), delete oe[this.name], e.finish());
  }
  click(e, t) {
    var s = this.get(e);
    if (s == null || s.disabled || this.last.reordering) return false;
    if (e = this.trigger("click", { target: e, tab: s, object: s, originalEvent: t }), e.isCancelled !== true) {
      if (a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(this.active)).removeClass("active"), this.active = s.id, a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(this.active)).addClass("active"), typeof s.route == "string") {
        let n = s.route !== "" ? ("/" + s.route).replace(/\/{2,}/g, "/") : "";
        var i = p.parseRoute(n);
        if (0 < i.keys.length) for (let r = 0; r < i.keys.length; r++) this.routeData[i.keys[r].name] != null && (n = n.replace(new RegExp(":" + i.keys[r].name, "g"), this.routeData[i.keys[r].name]));
        setTimeout(() => {
          window.location.hash = n;
        }, 1);
      }
      e.finish();
    }
  }
  clickClose(e, t) {
    var s = this.get(e);
    if (s == null || s.disabled) return false;
    let i = this.trigger("close", { target: e, object: s, tab: s, originalEvent: t });
    i.isCancelled !== true && (this.animateClose(e).then(() => {
      this.remove(e), i.finish(), this.refresh();
    }), t) && t.stopPropagation();
  }
  animateClose(e) {
    return new Promise((t, s) => {
      var i = a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(e)), n = parseInt(i.get(0).clientWidth || 0);
      let r = i.replace(`<div class="tab-animate-close" style="display: inline-block; flex-shrink: 0; width: ${n}px; transition: width 0.25s"></div>`);
      setTimeout(() => {
        r.css({ width: "0px" });
      }, 1), setTimeout(() => {
        r.remove(), this.resize(), t();
      }, 500);
    });
  }
  animateInsert(e, t) {
    return new Promise((s, i) => {
      let n = a(this.box).find("#tabs_" + this.name + "_tab_" + p.escapeId(e)), r = a.html(this.getTabHTML(t.id));
      if (n.length == 0) (n = a(this.box).find("#tabs_tabs_right")).before(r), this.resize();
      else {
        r.css({ opacity: 0 }), a(this.box).find("#tabs_tabs_right").before(r.get(0));
        let l = a(this.box).find("#" + r.attr("id")).get(0).clientWidth ?? 0, h = a.html('<div class="tab-animate-insert" style="flex-shrink: 0; width: 0; transition: width 0.25s"></div>');
        n.before(h), r.hide(), h.before(r[0]), setTimeout(() => {
          h.css({ width: l + "px" });
        }, 1), setTimeout(() => {
          h.remove(), r.css({ opacity: 1 }).show(), this.refresh(t.id), this.resize(), s();
        }, 500);
      }
    });
  }
}
class Zs extends fe {
  constructor(e) {
    if (super(e.name), this.name = null, this.box = null, this.columns = [], this.columnGroups = [], this.records = [], this.summary = [], this.searches = [], this.toolbar = {}, this.ranges = [], this.contextMenu = [], this.searchMap = {}, this.searchData = [], this.sortMap = {}, this.sortData = [], this.savedSearches = [], this.defaultSearches = [], this.total = 0, this.recid = null, this.last = { field: "", label: "", logic: "AND", search: "", searchIds: [], selection: { indexes: [], columns: {} }, saved_sel: null, multi: false, scrollTop: 0, scrollLeft: 0, colStart: 0, colEnd: 0, fetch: { action: "", offset: null, start: 0, response: 0, options: null, controller: null, loaded: false, hasMore: false }, pull_more: false, pull_refresh: true, range_start: null, range_end: null, sel_ind: null, sel_col: null, sel_type: null, sel_recid: null, idCache: {}, move: null, cancelClick: null, inEditMode: false, _edit: null, kbd_timer: null, marker_timer: null, click_time: null, click_recid: null, bubbleEl: null, colResizing: false, tmp: null, copy_event: null, userSelect: "", columnDrag: false, state: null, show_extra: 0, toolbar_height: 0 }, this.header = "", this.url = "", this.limit = 100, this.offset = 0, this.postData = {}, this.routeData = {}, this.httpHeaders = {}, this.show = { header: false, toolbar: false, footer: false, columnMenu: true, columnHeaders: true, lineNumbers: false, expandColumn: false, selectColumn: false, emptyRecords: true, toolbarReload: true, toolbarColumns: false, toolbarSearch: true, toolbarAdd: false, toolbarEdit: false, toolbarDelete: false, toolbarSave: false, searchAll: true, searchLogic: true, searchHiddenMsg: false, searchSave: true, statusRange: true, statusBuffered: false, statusRecordID: true, statusSelection: true, statusResponse: true, statusSort: false, statusSearch: false, recordTitles: false, selectionBorder: true, skipRecords: true, saveRestoreState: true }, this.stateId = null, this.hasFocus = false, this.autoLoad = true, this.fixedBody = true, this.recordHeight = 32, this.lineNumberWidth = 34, this.keyboard = true, this.selectType = "row", this.liveSearch = false, this.multiSearch = true, this.multiSelect = true, this.multiSort = true, this.reorderColumns = false, this.reorderRows = false, this.showExtraOnSearch = 0, this.markSearch = true, this.columnTooltip = "top|bottom", this.disableCVS = false, this.nestedFields = true, this.vs_start = 150, this.vs_extra = 5, this.style = "", this.tabIndex = null, this.dataType = null, this.parser = null, this.advanceOnEdit = true, this.useLocalStorage = true, this.colTemplate = { text: "", field: "", size: null, min: 20, max: null, gridMinWidth: null, sizeCorrected: null, sizeCalculated: null, sizeOriginal: null, sizeType: null, hidden: false, sortable: false, sortMode: null, searchable: false, resizable: true, hideable: true, autoResize: null, attr: "", style: "", render: null, title: null, tooltip: null, editable: {}, frozen: false, info: null, clipboardCopy: false }, this.stateColProps = { text: false, field: true, size: true, min: false, max: false, gridMinWidth: false, sizeCorrected: false, sizeCalculated: true, sizeOriginal: true, sizeType: true, hidden: true, sortable: false, sortMode: true, searchable: false, resizable: false, hideable: false, autoResize: false, attr: false, style: false, render: false, title: false, tooltip: false, editable: false, frozen: true, info: false, clipboardCopy: false }, this.msgDelete = "Are you sure you want to delete ${count} ${records}?", this.msgNotJSON = "Returned data is not in valid JSON format.", this.msgHTTPError = "HTTP error. See console for more details.", this.msgServerError = "Server error", this.msgRefresh = "Refreshing...", this.msgNeedReload = "Your remote data source record count has changed, reloading from the first record.", this.msgEmpty = "", this.buttons = { reload: { type: "button", id: "w2ui-reload", icon: "w2ui-icon-reload", tooltip: "Reload data in the list" }, columns: { type: "menu-check", id: "w2ui-column-on-off", icon: "w2ui-icon-columns", tooltip: "Show/hide columns", overlay: { align: "none" } }, search: { type: "html", id: "w2ui-search", html: '<div class="w2ui-icon w2ui-icon-search w2ui-search-down w2ui-action" data-click="searchShowFields"></div>' }, add: { type: "button", id: "w2ui-add", text: "Add New", tooltip: "Add new record", icon: "w2ui-icon-plus" }, edit: { type: "button", id: "w2ui-edit", text: "Edit", tooltip: "Edit selected record", icon: "w2ui-icon-pencil", batch: 1, disabled: true }, delete: { type: "button", id: "w2ui-delete", text: "Delete", tooltip: "Delete selected records", icon: "w2ui-icon-cross", batch: true, disabled: true }, save: { type: "button", id: "w2ui-save", text: "Save", tooltip: "Save changed records", icon: "w2ui-icon-check" } }, this.operators = { text: ["is", "begins", "contains", "ends"], number: ["=", "between", ">", "<", ">=", "<="], date: ["is", { oper: "less", text: "before" }, { oper: "more", text: "since" }, "between"], list: ["is"], hex: ["is", "between"], color: ["is", "begins", "contains", "ends"], enum: ["in", "not in"] }, this.defaultOperator = { text: "begins", number: "=", date: "is", list: "is", enum: "in", hex: "begins", color: "begins" }, this.operatorsMap = { text: "text", int: "number", float: "number", money: "number", currency: "number", percent: "number", hex: "hex", alphanumeric: "text", color: "color", date: "date", time: "date", datetime: "date", list: "list", combo: "text", enum: "enum", file: "enum", select: "list", radio: "list", checkbox: "list", toggle: "list" }, this.onAdd = null, this.onEdit = null, this.onRequest = null, this.onLoad = null, this.onDelete = null, this.onSave = null, this.onSelect = null, this.onClick = null, this.onDblClick = null, this.onContextMenu = null, this.onContextMenuClick = null, this.onColumnClick = null, this.onColumnDblClick = null, this.onColumnContextMenu = null, this.onColumnResize = null, this.onColumnAutoResize = null, this.onSort = null, this.onSearch = null, this.onSearchOpen = null, this.onChange = null, this.onRestore = null, this.onExpand = null, this.onCollapse = null, this.onError = null, this.onKeydown = null, this.onToolbar = null, this.onColumnOnOff = null, this.onCopy = null, this.onPaste = null, this.onSelectionExtend = null, this.onEditField = null, this.onRender = null, this.onRefresh = null, this.onReload = null, this.onResize = null, this.onDestroy = null, this.onStateSave = null, this.onStateRestore = null, this.onFocus = null, this.onBlur = null, this.onReorderRow = null, this.onSearchSave = null, this.onSearchRemove = null, this.onSearchSelect = null, this.onColumnSelect = null, this.onColumnDragStart = null, this.onColumnDragEnd = null, this.onResizerDblClick = null, this.onMouseEnter = null, this.onMouseLeave = null, p.extend(this, e), Array.isArray(this.records)) {
      let t = [];
      this.records.forEach((s, i) => {
        var _a;
        s[this.recid] != null && (s.recid = s[this.recid]), s.recid == null && console.log("ERROR: Cannot add records without recid. (obj: " + this.name + ")"), ((_a = s.w2ui) == null ? void 0 : _a.summary) === true && (this.summary.push(s), t.push(i));
      }), t.sort();
      for (let s = t.length - 1; 0 <= s; s--) this.records.splice(t[s], 1);
    }
    Array.isArray(this.columns) && this.columns.forEach((t, s) => {
      if (t = p.extend({}, this.colTemplate, t), s = (this.columns[s] = t).searchable, s != null && s !== false && this.getSearch(t.field) == null) if (p.isPlainObject(s)) this.addSearch(p.extend({ field: t.field, label: t.text, type: "text" }, s));
      else {
        let i = t.searchable, n = "";
        t.searchable === true && (i = "text", n = 'size="20"'), this.addSearch({ field: t.field, label: t.text, type: i, attr: n });
      }
    }), Array.isArray(this.defaultSearches) && this.defaultSearches.forEach((t, s) => {
      t.id = "default-" + s, t.icon ?? (t.icon = "w2ui-icon-search");
    }), e = this.cache("searches"), Array.isArray(e) && e.forEach((t) => {
      this.savedSearches.push({ id: t.id ?? "none", text: t.text ?? "none", icon: "w2ui-icon-search", remove: true, logic: t.logic ?? "AND", data: t.data ?? [] });
    }), typeof this.box == "string" && (this.box = a(this.box).get(0)), this.box && this.render(this.box);
  }
  add(e, t) {
    var _a, _b;
    Array.isArray(e) || (e = [e]);
    let s = 0;
    for (let n = 0; n < e.length; n++) {
      var i = e[n];
      i[this.recid] != null && (i.recid = i[this.recid]), i.recid == null ? console.log("ERROR: Cannot add record without recid. (obj: " + this.name + ")") : (((_a = i.w2ui) == null ? void 0 : _a.summary) === true ? t ? this.summary.unshift(i) : this.summary.push(i) : t ? this.records.unshift(i) : this.records.push(i), s++);
    }
    return (((_b = this.url) == null ? void 0 : _b.get) ?? this.url) || (this.total = this.records.length, this.localSort(false, true), this.localSearch()), this.refresh(), s;
  }
  find(e, t, s) {
    var i, n = [];
    let r = false;
    for (i in e = e ?? {}) String(i).indexOf(".") != -1 && (r = true);
    var l = s ? this.last.range_start : 0;
    let h = s ? this.last.range_end + 1 : this.records.length;
    h > this.records.length && (h = this.records.length);
    for (let c = l; c < h; c++) {
      let d = true;
      for (var o in e) {
        let u = this.records[c][o];
        r && String(o).indexOf(".") != -1 && (u = this.parseField(this.records[c], o)), e[o] == "not-null" ? u != null && u !== "" || (d = false) : e[o] != u && (d = false);
      }
      d && t !== true && n.push(this.records[c].recid), d && t === true && n.push(c);
    }
    return n;
  }
  set(e, t, s) {
    if (typeof e == "object" && e !== null && (s = t, t = e, e = null), e == null) {
      for (let n = 0; n < this.records.length; n++) p.extend(this.records[n], t);
      s !== true && this.refresh();
    } else {
      var i = this.get(e, true);
      if (i == null) return false;
      !this.records[i] || this.records[i].recid != e ? p.extend(this.summary[i], t) : p.extend(this.records[i], t), s !== true && this.refreshRow(e, i);
    }
    return true;
  }
  get(e, t) {
    if (Array.isArray(e)) {
      var s = [];
      for (let r = 0; r < e.length; r++) {
        var i = this.get(e[r], t);
        i !== null && s.push(i);
      }
      return s;
    }
    {
      let r = this.last.idCache;
      r || (this.last.idCache = r = {});
      var n = r[e];
      if (typeof n == "number") {
        if (0 <= n && n < this.records.length && this.records[n].recid == e) return t === true ? n : this.records[n];
        if (0 <= (n = ~n) && n < this.summary.length && this.summary[n].recid == e) return t === true ? n : this.summary[n];
        this.last.idCache = r = {};
      }
      for (let l = 0; l < this.records.length; l++) if (this.records[l].recid == e) return r[e] = l, t === true ? l : this.records[l];
      for (let l = 0; l < this.summary.length; l++) if (this.summary[l].recid == e) return r[e] = ~l, t === true ? l : this.summary[l];
      return null;
    }
  }
  getFirst(e) {
    if (this.records.length == 0) return null;
    let t = this.records[0];
    var s = this.last.searchIds;
    return t = 0 < this.searchData.length ? Array.isArray(s) && 0 < s.length ? this.records[s[e || 0]] : null : t;
  }
  remove() {
    var _a;
    let e = 0;
    for (let t = 0; t < arguments.length; t++) {
      for (let s = this.records.length - 1; 0 <= s; s--) this.records[s].recid == arguments[t] && (this.records.splice(s, 1), e++);
      for (let s = this.summary.length - 1; 0 <= s; s--) this.summary[s].recid == arguments[t] && (this.summary.splice(s, 1), e++);
    }
    return (((_a = this.url) == null ? void 0 : _a.get) ?? this.url) || (this.localSort(false, true), this.localSearch()), this.refresh(), e;
  }
  addColumn(e, t) {
    let s = 0;
    arguments.length == 1 ? (t = e, e = this.columns.length) : (e = typeof e == "string" ? this.getColumn(e, true) : e) == null && (e = this.columns.length), Array.isArray(t) || (t = [t]);
    for (let n = 0; n < t.length; n++) {
      var i = p.extend({}, this.colTemplate, t[n]);
      if (this.columns.splice(e, 0, i), t[n].searchable) {
        let r = t[n].searchable, l = "";
        t[n].searchable === true && (r = "text", l = 'size="20"'), this.addSearch({ field: t[n].field, label: t[n].text, type: r, attr: l });
      }
      e++, s++;
    }
    return this.refresh(), s;
  }
  removeColumn() {
    let e = 0;
    for (let t = 0; t < arguments.length; t++) for (let s = this.columns.length - 1; 0 <= s; s--) this.columns[s].field == arguments[t] && (this.columns[s].searchable && this.removeSearch(arguments[t]), this.columns.splice(s, 1), e++);
    return this.refresh(), e;
  }
  getColumn(e, t) {
    if (arguments.length === 0) {
      var s = [];
      for (let i = 0; i < this.columns.length; i++) s.push(this.columns[i].field);
      return s;
    }
    for (let i = 0; i < this.columns.length; i++) if (this.columns[i].field == e) return t === true ? i : this.columns[i];
    return null;
  }
  updateColumn(e, t) {
    let s = 0;
    return (e = Array.isArray(e) ? e : [e]).forEach((i) => {
      this.columns.forEach((n) => {
        if (n.field == i) {
          let r = p.clone(t);
          Object.keys(r).forEach((l) => {
            typeof r[l] == "function" && (r[l] = r[l](n)), n[l] != r[l] && s++;
          }), p.extend(n, r);
        }
      });
    }), 0 < s && this.refresh(), s;
  }
  toggleColumn() {
    return this.updateColumn(Array.from(arguments), { hidden(e) {
      return !e.hidden;
    } });
  }
  showColumn() {
    return this.updateColumn(Array.from(arguments), { hidden: false });
  }
  hideColumn() {
    return this.updateColumn(Array.from(arguments), { hidden: true });
  }
  addSearch(e, t) {
    let s = 0;
    arguments.length == 1 ? (t = e, e = this.searches.length) : (e = typeof e == "string" ? this.getSearch(e, true) : e) == null && (e = this.searches.length), Array.isArray(t) || (t = [t]);
    for (let i = 0; i < t.length; i++) this.searches.splice(e, 0, t[i]), e++, s++;
    return this.searchClose(), s;
  }
  removeSearch() {
    let e = 0;
    for (let t = 0; t < arguments.length; t++) for (let s = this.searches.length - 1; 0 <= s; s--) this.searches[s].field == arguments[t] && (this.searches.splice(s, 1), e++);
    return this.searchClose(), e;
  }
  getSearch(e, t) {
    if (arguments.length === 0) {
      var s = [];
      for (let i = 0; i < this.searches.length; i++) s.push(this.searches[i].field);
      return s;
    }
    for (let i = 0; i < this.searches.length; i++) if (this.searches[i].field == e) return t === true ? i : this.searches[i];
    return null;
  }
  toggleSearch() {
    let e = 0;
    for (let t = 0; t < arguments.length; t++) for (let s = this.searches.length - 1; 0 <= s; s--) this.searches[s].field == arguments[t] && (this.searches[s].hidden = !this.searches[s].hidden, e++);
    return this.searchClose(), e;
  }
  showSearch() {
    let e = 0;
    for (let t = 0; t < arguments.length; t++) for (let s = this.searches.length - 1; 0 <= s; s--) this.searches[s].field == arguments[t] && this.searches[s].hidden !== false && (this.searches[s].hidden = false, e++);
    return this.searchClose(), e;
  }
  hideSearch() {
    let e = 0;
    for (let t = 0; t < arguments.length; t++) for (let s = this.searches.length - 1; 0 <= s; s--) this.searches[s].field == arguments[t] && this.searches[s].hidden !== true && (this.searches[s].hidden = true, e++);
    return this.searchClose(), e;
  }
  getSearchData(e) {
    for (let t = 0; t < this.searchData.length; t++) if (this.searchData[t].field == e) return this.searchData[t];
    return null;
  }
  localSort(e, t) {
    var _a, _b, _c;
    let s = this;
    if (((_a = this.url) == null ? void 0 : _a.get) ?? this.url) console.log("ERROR: grid.localSort can only be used on local data source, grid.url should be empty.");
    else if (Object.keys(this.sortData).length !== 0) {
      let h = function(d) {
        var u;
        return d.w2ui && d.w2ui.parent_recid != null ? d.w2ui._path || ((u = s.get(d.w2ui.parent_recid)) ? h(u).concat(d) : (console.log("ERROR: no parent record: " + d.w2ui.parent_recid), [d])) : [d];
      }, o = function(d, u) {
        if (d === u) return 0;
        for (let w = 0; w < s.sortData.length; w++) {
          var f = s.sortData[w].field, m = s.sortData[w].field_ || f;
          let g = d[m], v = u[m];
          if (String(f).indexOf(".") != -1 && (g = s.parseField(d, m), v = s.parseField(u, m)), m = s.getColumn(f), f = (m && 0 < Object.keys(m.editable).length && (p.isPlainObject(g) && g.text && (g = g.text), p.isPlainObject(v)) && v.text && (v = v.text), c(g, v, w, s.sortData[w].direction, m.sortMode || "default")), f !== 0) return f;
        }
        return c(d.recid, u.recid, 0, "asc");
      }, c = function(d, u, f, m, w) {
        if (d === u) return 0;
        if ((d == null || d === "") && u != null && u !== "") return 1;
        if (d != null && d !== "" && (u == null || u === "")) return -1;
        if (m = m.toLowerCase() === "asc" ? 1 : -1, typeof d != typeof u) return typeof u < typeof d ? m : -m;
        if (d.constructor.name != u.constructor.name) return d.constructor.name > u.constructor.name ? m : -m;
        d && typeof d == "object" && (d = d.valueOf()), u && typeof u == "object" && (u = u.valueOf());
        var g = {}.toString;
        switch (d && typeof d == "object" && d.toString != g && (d = String(d)), u && typeof u == "object" && u.toString != g && (u = String(u)), typeof d == "string" && (d = d.toLowerCase().trim()), typeof u == "string" && (u = u.toLowerCase().trim()), w) {
          case "natural":
            w = p.naturalCompare;
            break;
          case "i18n":
            w = p.i18nCompare;
        }
        return typeof w == "function" ? w(d, u) * m : u < d ? m : d < u ? -m : 0;
      }, l = Date.now();
      this.selectionSave(), this.prepareData(), t || this.reset();
      for (let d = 0; d < this.sortData.length; d++) {
        var i = this.getColumn(this.sortData[d].field);
        if (!i) return;
        typeof i.render == "string" && (["date", "age"].indexOf(i.render.split(":")[0]) != -1 && (this.sortData[d].field_ = i.field + "_"), ["time"].indexOf(i.render.split(":")[0]) != -1) && (this.sortData[d].field_ = i.field + "_");
      }
      for (let d = 0; d < s.records.length; d++) {
        var n = s.records[d];
        ((_b = n.w2ui) == null ? void 0 : _b.parent_recid) != null && (n.w2ui._path = h(n));
      }
      this.records.sort((d, u) => {
        if (!(d.w2ui && d.w2ui.parent_recid != null || u.w2ui && u.w2ui.parent_recid != null)) return o(d, u);
        var f = h(d), m = h(u);
        for (let g = 0; g < Math.min(f.length, m.length); g++) {
          var w = o(f[g], m[g]);
          if (w !== 0) return w;
        }
        return f.length > m.length ? 1 : f.length < m.length ? -1 : (console.log("ERROR: two paths should not be equal."), 0);
      });
      for (let d = 0; d < s.records.length; d++) {
        var r = s.records[d];
        ((_c = r.w2ui) == null ? void 0 : _c.parent_recid) != null && (r.w2ui._path = null);
      }
      return this.selectionRestore(t), l = Date.now() - l, e !== true && this.show.statusSort && setTimeout(() => {
        this.status(p.lang("Sorting took ${count} seconds", { count: l / 1e3 }));
      }, 10), l;
    }
  }
  localSearch(e) {
    var _a;
    let t = this;
    var s = ((_a = this.url) == null ? void 0 : _a.get) ?? this.url;
    if (s) console.log("ERROR: grid.localSearch can only be used on local data source, grid.url should be empty.");
    else {
      let n = Date.now(), r = {}.toString, l = {};
      if (this.total = this.records.length, this.last.searchIds = [], this.prepareData(), 0 < this.searchData.length && !s) {
        for (let h = this.total = 0; h < this.records.length; h++) {
          var i = this.records[h];
          if (function o(c) {
            var _a2, _b;
            let d = 0, u, f, m, w, g = false;
            for (let v = 0; v < t.searchData.length; v++) {
              let k = t.searchData[v], x = t.getSearch(k.field);
              if (k != null) {
                x == null && (x = { field: k.field, type: k.type });
                let S = t.parseField(c, x.field);
                switch (u = S == null || typeof S == "object" && S.toString == r ? "" : String(S).toLowerCase(), k.value != null && (Array.isArray(k.value) ? (f = k.value[0], m = k.value[1]) : f = String(k.value).toLowerCase()), k.operator) {
                  case "=":
                  case "is":
                    t.parseField(c, x.field) == k.value ? d++ : x.type == "date" ? (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.formatDate(w, "yyyy-mm-dd"), f = p.formatDate(p.isDate(f, p.settings.dateFormat, true), "yyyy-mm-dd"), u == f && d++) : x.type == "time" ? (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.formatTime(w, "hh24:mi"), f = p.formatTime(f, "hh24:mi"), u == f && d++) : x.type == "datetime" && (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.formatDateTime(w, "yyyy-mm-dd|hh24:mm:ss"), f = p.formatDateTime(p.isDateTime(f, p.settings.datetimeFormat, true), "yyyy-mm-dd|hh24:mm:ss"), u == f) && d++;
                    break;
                  case "between":
                    ["int", "float", "money", "currency", "percent"].indexOf(x.type) != -1 ? parseFloat(t.parseField(c, x.field)) >= parseFloat(f) && parseFloat(t.parseField(c, x.field)) <= parseFloat(m) && d++ : x.type == "date" ? (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.isDate(w, p.settings.dateFormat, true), f = p.isDate(f, p.settings.dateFormat, true), (m = p.isDate(m, p.settings.dateFormat, true)) != null && (m = new Date(m.getTime() + 864e5)), u >= f && u < m && d++) : x.type == "time" ? (u = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), f = p.isTime(f, true), m = p.isTime(m, true), f = (/* @__PURE__ */ new Date()).setHours(f.hours, f.minutes, f.seconds || 0, 0), m = (/* @__PURE__ */ new Date()).setHours(m.hours, m.minutes, m.seconds || 0, 0), u >= f && u < m && d++) : x.type == "datetime" && (u = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), f = p.isDateTime(f, p.settings.datetimeFormat, true), m = (m = p.isDateTime(m, p.settings.datetimeFormat, true)) && new Date(m.getTime() + 864e5), u >= f) && u < m && d++;
                    break;
                  case "<=":
                    g = true;
                  case "<":
                  case "less":
                    ["int", "float", "money", "currency", "percent"].indexOf(x.type) != -1 ? (u = parseFloat(t.parseField(c, x.field)), f = parseFloat(k.value), (u < f || g && u === f) && d++) : x.type == "date" ? (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.isDate(w, p.settings.dateFormat, true), f = p.isDate(f, p.settings.dateFormat, true), (u < f || g && u === f) && d++) : x.type == "time" ? (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.formatTime(w, "hh24:mi"), f = p.formatTime(f, "hh24:mi"), (u < f || g && u === f) && d++) : x.type == "datetime" && (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.formatDateTime(w, "yyyy-mm-dd|hh24:mm:ss"), f = p.formatDateTime(p.isDateTime(f, p.settings.datetimeFormat, true), "yyyy-mm-dd|hh24:mm:ss"), u.length == f.length) && (u < f || g && u === f) && d++;
                    break;
                  case ">=":
                    g = true;
                  case ">":
                  case "more":
                    ["int", "float", "money", "currency", "percent"].indexOf(x.type) != -1 ? (u = parseFloat(t.parseField(c, x.field)), f = parseFloat(k.value), (u > f || g && u === f) && d++) : x.type == "date" ? (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.isDate(w, p.settings.dateFormat, true), f = p.isDate(f, p.settings.dateFormat, true), (u > f || g && u === f) && d++) : x.type == "time" ? (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.formatTime(w, "hh24:mi"), f = p.formatTime(f, "hh24:mi"), (u > f || g && u === f) && d++) : x.type == "datetime" && (w = t.parseField(c, x.field + "_") instanceof Date ? t.parseField(c, x.field + "_") : t.parseField(c, x.field), u = p.formatDateTime(w, "yyyy-mm-dd|hh24:mm:ss"), f = p.formatDateTime(p.isDateTime(f, p.settings.datetimeFormat, true), "yyyy-mm-dd|hh24:mm:ss"), u.length == f.length) && (u > f || g && u === f) && d++;
                    break;
                  case "in":
                    w = k.value, (w = k.svalue ? k.svalue : w).indexOf(p.isFloat(S) ? parseFloat(S) : S) === -1 && w.indexOf(u) === -1 || d++;
                    break;
                  case "not in":
                    w = k.value, (w = k.svalue ? k.svalue : w).indexOf(p.isFloat(S) ? parseFloat(S) : S) === -1 && w.indexOf(u) === -1 && d++;
                    break;
                  case "begins":
                  case "begins with":
                    u.indexOf(f) === 0 && d++;
                    break;
                  case "contains":
                    0 <= u.indexOf(f) && d++;
                    break;
                  case "null":
                    t.parseField(c, x.field) == null && d++;
                    break;
                  case "not null":
                    t.parseField(c, x.field) != null && d++;
                    break;
                  case "ends":
                  case "ends with":
                    let $ = u.lastIndexOf(f);
                    $ !== -1 && $ == u.length - f.length && d++;
                }
              }
            }
            if (t.last.logic == "OR" && d !== 0 || t.last.logic == "AND" && d == t.searchData.length) return true;
            if (((_a2 = c.w2ui) == null ? void 0 : _a2.children) && ((_b = c.w2ui) == null ? void 0 : _b.expanded) !== true) for (let v = 0; v < c.w2ui.children.length; v++) {
              let k = c.w2ui.children[v];
              if (o(k)) return true;
            }
            return false;
          }(i)) if ((i == null ? void 0 : i.w2ui) && function o(c) {
            let d = t.get(c, true);
            if (d == null || c == null || l[c] || t.last.searchIds.includes(d)) return;
            l[c] = true;
            let u = t.records[d];
            (u == null ? void 0 : u.w2ui) && o(u.w2ui.parent_recid), t.last.searchIds.push(d);
          }(i.w2ui.parent_recid), 0 < this.showExtraOnSearch) {
            let o = this.showExtraOnSearch, c = this.showExtraOnSearch;
            if (h < o && (o = h), h + c > this.records.length && (c = this.records.length - h), 0 < o) for (let d = h - o; d < h; d++) this.last.searchIds.indexOf(d) < 0 && this.last.searchIds.push(d);
            if (this.last.searchIds.indexOf(h) < 0 && this.last.searchIds.push(h), 0 < c) for (let d = h + 1; d <= h + c; d++) this.last.searchIds.indexOf(d) < 0 && this.last.searchIds.push(d);
          } else this.last.searchIds.push(h);
        }
        this.total = this.last.searchIds.length;
      }
      return n = Date.now() - n, e !== true && this.show.statusSearch && setTimeout(() => {
        this.status(p.lang("Search took ${count} seconds", { count: n / 1e3 }));
      }, 10), n;
    }
  }
  getRangeData(e, t) {
    var s = this.get(e[0].recid, true), i = this.get(e[1].recid, true), n = e[0].column, r = e[1].column, l = [];
    if (n == r) for (let m = s; m <= i; m++) {
      var h = this.records[m], o = h[this.columns[n].field] || null;
      l.push(t !== true ? o : { data: o, column: n, index: m, record: h });
    }
    else if (s == i) {
      var c = this.records[s];
      for (let m = n; m <= r; m++) {
        var d = c[this.columns[m].field] || null;
        l.push(t !== true ? d : { data: d, column: m, index: s, record: c });
      }
    } else for (let m = s; m <= i; m++) {
      var u = this.records[m];
      l.push([]);
      for (let w = n; w <= r; w++) {
        var f = u[this.columns[w].field];
        t !== true ? l[l.length - 1].push(f) : l[l.length - 1].push({ data: f, column: w, index: m, record: u });
      }
    }
    return l;
  }
  addRange(e) {
    let t = 0, s, i;
    if (this.selectType != "row") {
      Array.isArray(e) || (e = [e]);
      for (let r = 0; r < e.length; r++) {
        if (typeof e[r] != "object" && (e[r] = { name: "selection" }), e[r].name == "selection") {
          if (this.show.selectionBorder === false) continue;
          var n = this.getSelection();
          if (n.length === 0) {
            this.removeRange("selection");
            continue;
          }
          s = n[0], i = n[n.length - 1];
        } else s = e[r].range[0], i = e[r].range[1];
        if (s) {
          n = { name: e[r].name, range: [{ recid: s.recid, column: s.column }, { recid: i.recid, column: i.column }], style: e[r].style || "" };
          let l = false;
          for (let h = 0; h < this.ranges.length; h++) if (this.ranges[h].name == e[r].name) {
            l = h;
            break;
          }
          l !== false ? this.ranges[l] = n : this.ranges.push(n), t++;
        }
      }
      this.refreshRanges();
    }
    return t;
  }
  removeRange() {
    let e = 0;
    for (let s = 0; s < arguments.length; s++) {
      var t = arguments[s];
      a(this.box).find("#grid_" + this.name + "_" + t).remove(), a(this.box).find("#grid_" + this.name + "_f" + t).remove();
      for (let i = this.ranges.length - 1; 0 <= i; i--) this.ranges[i].name == t && (this.ranges.splice(i, 1), e++);
    }
    return e;
  }
  refreshRanges() {
    if (this.ranges.length !== 0) {
      let w = function(v) {
        var k = u.last.move;
        if (k && k.type == "expand") {
          k.divX = v.screenX - k.x, k.divY = v.screenY - k.y;
          let x, S, $ = v.target;
          $.tagName.toUpperCase() != "TD" && ($ = a($).closest("td")[0]), (S = a($).attr("col") != null ? parseInt(a($).attr("col")) : S) != null && ($ = a($).closest("tr")[0], x = u.records[a($).attr("index")].recid, k.newRange[1].recid != x || k.newRange[1].column != S) && (v = p.clone(k.newRange), k.newRange = [{ recid: k.recid, column: k.column }, { recid: x, column: S }], m.detail && (m.detail.newRange = p.clone(k.newRange), m.detail.originalRange = p.clone(k.originalRange)), (m = u.trigger("selectionExtend", m)).isCancelled === true ? (k.newRange = v, m.detail.newRange = v) : (u.removeRange("grid-selection-expand"), u.addRange({ name: "grid-selection-expand", range: k.newRange, style: "background-color: rgba(100,100,100,0.1); border: 2px dotted rgba(100,100,100,0.5);" })));
        }
      }, g = function(v) {
        u.removeRange("grid-selection-expand"), delete u.last.move, a("body").off(".w2ui-" + u.name), m.finish && m.finish();
      }, u = this, f;
      var e = Date.now(), t = a(this.box).find(`#grid_${this.name}_frecords`), s = a(this.box).find(`#grid_${this.name}_records`);
      for (let v = 0; v < this.ranges.length; v++) {
        var i = this.ranges[v], n = i.range[0], r = i.range[1];
        n.index == null && (n.index = this.get(n.recid, true)), r.index == null && (r.index = this.get(r.recid, true));
        let k = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(n.recid) + ' td[col="' + n.column + '"]'), x = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(r.recid) + ' td[col="' + r.column + '"]'), S = a(this.box).find("#grid_" + this.name + "_frec_" + p.escapeId(n.recid) + ' td[col="' + n.column + '"]'), $ = a(this.box).find("#grid_" + this.name + "_frec_" + p.escapeId(r.recid) + ' td[col="' + r.column + '"]'), I = r.column;
        n.column < this.last.colStart && r.column > this.last.colStart && (k = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(n.recid) + ' td[col="start"]')), n.column < this.last.colEnd && r.column > this.last.colEnd && (x = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(r.recid) + ' td[col="end"]'), I = '"end"');
        var o = parseInt(a(this.box).find("#grid_" + this.name + "_rec_top").next().attr("index")), c = parseInt(a(this.box).find("#grid_" + this.name + "_rec_bottom").prev().attr("index")), d = parseInt(a(this.box).find("#grid_" + this.name + "_frec_top").next().attr("index")), l = parseInt(a(this.box).find("#grid_" + this.name + "_frec_bottom").prev().attr("index"));
        k.length === 0 && n.index < o && r.index > o && (k = a(this.box).find("#grid_" + this.name + "_rec_top").next().find('td[col="' + n.column + '"]')), x.length === 0 && r.index > c && n.index < c && (x = a(this.box).find("#grid_" + this.name + "_rec_bottom").prev().find('td[col="' + I + '"]')), S.length === 0 && n.index < d && r.index > d && (S = a(this.box).find("#grid_" + this.name + "_frec_top").next().find('td[col="' + n.column + '"]')), $.length === 0 && r.index > l && n.index < l && ($ = a(this.box).find("#grid_" + this.name + "_frec_bottom").prev().find('td[col="' + r.column + '"]'));
        var h, o = a(this.box).find("#grid_" + this.name + "_editable").find(".w2ui-input"), c = o.attr("recid"), d = o.attr("column");
        i.name == "selection" && i.range[0].recid == c && i.range[0].column == d || (f = a(this.box).find("#grid_" + this.name + "_f" + i.name), (0 < S.length || 0 < $.length) && (f.length === 0 ? (t.append('<div id="grid_' + this.name + "_f" + i.name + '" class="w2ui-selection" style="' + i.style + '">' + (i.name == "selection" ? '<div id="grid_' + this.name + '_resizer" class="w2ui-selection-resizer"></div>' : "") + "</div>"), f = a(this.box).find("#grid_" + this.name + "_f" + i.name)) : (f.attr("style", i.style), f.find(".w2ui-selection-resizer").show()), $.length === 0 && (($ = a(this.box).find("#grid_" + this.name + "_frec_" + p.escapeId(r.recid) + " td:last-child")).length === 0 && ($ = a(this.box).find("#grid_" + this.name + "_frec_bottom td:first-child")), f.css("border-right", "0px"), f.find(".w2ui-selection-resizer").hide()), n.recid != null) && r.recid != null && 0 < S.length && 0 < $.length ? (l = getComputedStyle($[0]), o = S.prop("offsetTop") - S.prop("scrollTop"), c = S.prop("offsetLeft") + S.prop("scrollLeft"), d = $.prop("offsetTop") - $.prop("scrollTop"), h = $.prop("offsetLeft") + $.prop("scrollLeft"), f.show().css({ top: (0 < o ? o : 0) + "px", left: (0 < c ? c : 0) + "px", width: h - c + parseFloat(l.width) + 2 + "px", height: d - o + parseFloat(l.height) + 1 + "px" })) : f.hide(), f = a(this.box).find("#grid_" + this.name + "_" + i.name), (0 < k.length || 0 < x.length) && (f.length === 0 ? (s.append('<div id="grid_' + this.name + "_" + i.name + '" class="w2ui-selection" style="' + i.style + '">' + (i.name == "selection" ? '<div id="grid_' + this.name + '_resizer" class="w2ui-selection-resizer"></div>' : "") + "</div>"), f = a(this.box).find("#grid_" + this.name + "_" + i.name)) : f.attr("style", i.style), k.length === 0 && (k = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(n.recid) + " td:first-child")).length === 0 && (k = a(this.box).find("#grid_" + this.name + "_rec_top td:first-child")), $.length !== 0 && f.css("border-left", "0px"), n.recid != null) && r.recid != null && 0 < k.length && 0 < x.length ? (h = getComputedStyle(x[0]), c = k.prop("offsetTop") - k.prop("scrollTop"), d = k.prop("offsetLeft") + k.prop("scrollLeft"), o = x.prop("offsetTop") - x.prop("scrollTop"), l = x.prop("offsetLeft") + x.prop("scrollLeft"), f.show().css({ top: (0 < c ? c : 0) + "px", left: (0 < d ? d : 0) + "px", width: l - d + parseFloat(h.width) + 2 + "px", height: o - c + parseFloat(h.height) + 1 + "px" })) : f.hide());
      }
      a(this.box).find(".w2ui-selection-resizer").off(".resizer").on("mousedown.resizer", function(v) {
        var k = u.getSelection();
        u.last.move = { type: "expand", x: v.screenX, y: v.screenY, divX: 0, divY: 0, recid: k[0].recid, column: k[0].column, originalRange: [p.clone(k[0]), p.clone(k[k.length - 1])], newRange: [p.clone(k[0]), p.clone(k[k.length - 1])] }, a("body").off(".w2ui-" + u.name).on("mousemove.w2ui-" + u.name, w).on("mouseup.w2ui-" + u.name, g), v.preventDefault();
      }).on("dblclick.resizer", (v) => {
        v = this.trigger("resizerDblClick", { target: this.name, originalEvent: v }), v.isCancelled !== true && v.finish();
      });
      let m = { target: this.name, originalRange: null, newRange: null };
      return Date.now() - e;
    }
  }
  select() {
    if (arguments.length === 0) return 0;
    let e = 0;
    var t = this.last.selection;
    this.multiSelect || this.selectNone(true);
    let s = Array.from(arguments);
    Array.isArray(s[0]) && (s = s[0]);
    var i = { target: this.name }, i = (s.length == 1 ? (i.multiple = false, p.isPlainObject(s[0]) ? i.clicked = { recid: s[0].recid, column: s[0].column } : i.recid = s[0]) : (i.multiple = true, i.clicked = { recids: s }), this.trigger("select", i));
    if (i.isCancelled === true) return 0;
    if (this.selectType == "row") for (let v = 0; v < s.length; v++) {
      var n = typeof s[v] == "object" ? s[v].recid : s[v], r = this.get(n, true);
      if (r != null) {
        let k = null, x = null;
        (this.searchData.length !== 0 || r + 1 >= this.last.range_start && r + 1 <= this.last.range_end) && (k = a(this.box).find("#grid_" + this.name + "_frec_" + p.escapeId(n)), x = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(n))), this.selectType == "row" && t.indexes.indexOf(r) == -1 && (t.indexes.push(r), k && x && (k.addClass("w2ui-selected").find(".w2ui-col-number").addClass("w2ui-row-selected"), x.addClass("w2ui-selected").find(".w2ui-col-number").addClass("w2ui-row-selected"), k.find(".w2ui-grid-select-check").prop("checked", true)), e++);
      }
    }
    else {
      var l = {};
      for (let v = 0; v < s.length; v++) {
        var h = typeof s[v] == "object" ? s[v].recid : s[v], o = typeof s[v] == "object" ? s[v].column : null;
        if (l[h] = l[h] || [], Array.isArray(o)) l[h] = o;
        else if (p.isInt(o)) l[h].push(o);
        else for (let k = 0; k < this.columns.length; k++) this.columns[k].hidden || l[h].push(parseInt(k));
      }
      var c, d = [];
      for (c in l) {
        var u = this.get(c, true);
        if (u != null) {
          let v = null, k = null;
          u + 1 >= this.last.range_start && u + 1 <= this.last.range_end && (v = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(c)), k = a(this.box).find("#grid_" + this.name + "_frec_" + p.escapeId(c)));
          var f = t.columns[u] || [];
          t.indexes.indexOf(u) == -1 && t.indexes.push(u);
          for (let x = 0; x < l[c].length; x++) f.indexOf(l[c][x]) == -1 && f.push(l[c][x]);
          f.sort((x, S) => x - S);
          for (let x = 0; x < l[c].length; x++) {
            var m = l[c][x];
            d.indexOf(m) == -1 && d.push(m), v && (v.find("#grid_" + this.name + "_data_" + u + "_" + m).addClass("w2ui-selected"), v.find(".w2ui-col-number").addClass("w2ui-row-selected"), v.find(".w2ui-grid-select-check").prop("checked", true)), k && (k.find("#grid_" + this.name + "_data_" + u + "_" + m).addClass("w2ui-selected"), k.find(".w2ui-col-number").addClass("w2ui-row-selected"), k.find(".w2ui-grid-select-check").prop("checked", true)), e++;
          }
          t.columns[u] = f;
        }
      }
      for (let v = 0; v < d.length; v++) a(this.box).find("#grid_" + this.name + "_column_" + d[v] + " .w2ui-col-header").addClass("w2ui-col-selected");
    }
    t.indexes.sort((v, k) => v - k);
    var w = 0 < this.records.length && t.indexes.length == this.records.length, g = 0 < t.indexes.length && this.searchData.length !== 0 && t.indexes.length == this.last.searchIds.length;
    return w || g ? a(this.box).find("#grid_" + this.name + "_check_all").prop("checked", true) : a(this.box).find("#grid_" + this.name + "_check_all").prop("checked", false), this.status(), this.addRange("selection"), this.updateToolbar(t, w), i.finish(), e;
  }
  unselect() {
    let e = 0;
    var t = this.last.selection;
    let s = Array.from(arguments);
    Array.isArray(s[0]) && (s = s[0]);
    var i = { target: this.name }, i = (s.length == 1 ? (i.multiple = false, p.isPlainObject(s[0]) ? i.clicked = { recid: s[0].recid, column: s[0].column } : i.clicked = { recid: s[0] }) : (i.multiple = true, i.recids = s), this.trigger("select", i));
    if (i.isCancelled === true) return 0;
    for (let m = 0; m < s.length; m++) {
      var n = typeof s[m] == "object" ? s[m].recid : s[m], r = this.get(n);
      if (r != null) {
        var r = this.get(r.recid, true), l = a(this.box).find("#grid_" + this.name + "_frec_" + p.escapeId(n)), h = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(n));
        if (this.selectType == "row") t.indexes.indexOf(r) != -1 && (t.indexes.splice(t.indexes.indexOf(r), 1), l.removeClass("w2ui-selected w2ui-inactive").find(".w2ui-col-number").removeClass("w2ui-row-selected"), h.removeClass("w2ui-selected w2ui-inactive").find(".w2ui-col-number").removeClass("w2ui-row-selected"), l.length != 0 && (l[0].style.cssText = "height: " + this.recordHeight + "px; " + l.attr("custom_style"), h[0].style.cssText = "height: " + this.recordHeight + "px; " + h.attr("custom_style")), l.find(".w2ui-grid-select-check").prop("checked", false), e++);
        else {
          var o = s[m].column;
          if (!p.isInt(o)) {
            var c = [];
            for (let g = 0; g < this.columns.length; g++) this.columns[g].hidden || c.push({ recid: n, column: g });
            return this.unselect(c);
          }
          if (h = t.columns[r], Array.isArray(h) && h.indexOf(o) != -1) {
            h.splice(h.indexOf(o), 1), a(this.box).find(`#grid_${this.name}_rec_${p.escapeId(n)} > td[col="${o}"]`).removeClass("w2ui-selected w2ui-inactive"), a(this.box).find(`#grid_${this.name}_frec_${p.escapeId(n)} > td[col="${o}"]`).removeClass("w2ui-selected w2ui-inactive");
            let g = false, v = false;
            var d = this.getSelection();
            for (let k = 0; k < d.length; k++) d[k].column == o && (g = true), d[k].recid == n && (v = true);
            g || a(this.box).find(`.w2ui-grid-columns td[col="${o}"] .w2ui-col-header, .w2ui-grid-fcolumns td[col="${o}"] .w2ui-col-header`).removeClass("w2ui-col-selected"), v || a(this.box).find("#grid_" + this.name + "_frec_" + p.escapeId(n)).find(".w2ui-col-number").removeClass("w2ui-row-selected"), e++, h.length === 0 && (delete t.columns[r], t.indexes.splice(t.indexes.indexOf(r), 1), l.find(".w2ui-grid-select-check").prop("checked", false));
          }
        }
      }
    }
    var u = 0 < this.records.length && t.indexes.length == this.records.length, f = 0 < t.indexes.length && this.searchData.length !== 0 && t.indexes.length == this.last.searchIds.length;
    return u || f ? a(this.box).find("#grid_" + this.name + "_check_all").prop("checked", true) : a(this.box).find("#grid_" + this.name + "_check_all").prop("checked", false), this.status(), this.addRange("selection"), this.updateToolbar(t, u), i.finish(), e;
  }
  selectAll() {
    var _a;
    var e = Date.now();
    if (this.multiSelect !== false) {
      var t = ((_a = this.url) == null ? void 0 : _a.get) ?? this.url;
      let i = p.clone(this.last.selection);
      var s = [];
      for (let n = 0; n < this.columns.length; n++) s.push(n);
      if (i.indexes = [], t || this.searchData.length === 0) {
        let n = this.records.length;
        this.searchData.length == 0 || t || (n = this.last.searchIds.length);
        for (let r = 0; r < n; r++) i.indexes.push(r), this.selectType != "row" && (i.columns[r] = s.slice());
      } else for (let n = 0; n < this.last.searchIds.length; n++) i.indexes.push(this.last.searchIds[n]), this.selectType != "row" && (i.columns[this.last.searchIds[n]] = s.slice());
      if (t = this.trigger("select", { target: this.name, multiple: true, all: true, clicked: i }), t.isCancelled !== true) return this.last.selection = i, this.selectType == "row" ? (a(this.box).find(".w2ui-grid-records tr:not(.w2ui-empty-record)").addClass("w2ui-selected").find(".w2ui-col-number").addClass("w2ui-row-selected"), a(this.box).find(".w2ui-grid-frecords tr:not(.w2ui-empty-record)").addClass("w2ui-selected").find(".w2ui-col-number").addClass("w2ui-row-selected")) : (a(this.box).find(".w2ui-grid-columns td .w2ui-col-header, .w2ui-grid-fcolumns td .w2ui-col-header").addClass("w2ui-col-selected"), a(this.box).find(".w2ui-grid-records tr .w2ui-col-number").addClass("w2ui-row-selected"), a(this.box).find(".w2ui-grid-records tr:not(.w2ui-empty-record)").find(".w2ui-grid-data:not(.w2ui-col-select)").addClass("w2ui-selected"), a(this.box).find(".w2ui-grid-frecords tr .w2ui-col-number").addClass("w2ui-row-selected"), a(this.box).find(".w2ui-grid-frecords tr:not(.w2ui-empty-record)").find(".w2ui-grid-data:not(.w2ui-col-select)").addClass("w2ui-selected")), a(this.box).find("input.w2ui-grid-select-check").prop("checked", true), i = this.getSelection(true), this.addRange("selection"), a(this.box).find("#grid_" + this.name + "_check_all").prop("checked", true), this.status(), this.updateToolbar({ indexes: i }, true), t.finish(), Date.now() - e;
    }
  }
  selectNone(e) {
    var t, s = Date.now();
    let i;
    if (e || (i = this.trigger("select", { target: this.name, clicked: [] })).isCancelled !== true) return t = this.last.selection, this.selectType == "row" ? (a(this.box).find(".w2ui-grid-records tr.w2ui-selected").removeClass("w2ui-selected w2ui-inactive").find(".w2ui-col-number").removeClass("w2ui-row-selected"), a(this.box).find(".w2ui-grid-frecords tr.w2ui-selected").removeClass("w2ui-selected w2ui-inactive").find(".w2ui-col-number").removeClass("w2ui-row-selected")) : (a(this.box).find(".w2ui-grid-columns td .w2ui-col-header, .w2ui-grid-fcolumns td .w2ui-col-header").removeClass("w2ui-col-selected"), a(this.box).find(".w2ui-grid-records tr .w2ui-col-number").removeClass("w2ui-row-selected"), a(this.box).find(".w2ui-grid-frecords tr .w2ui-col-number").removeClass("w2ui-row-selected"), a(this.box).find(".w2ui-grid-data.w2ui-selected").removeClass("w2ui-selected w2ui-inactive")), a(this.box).find("input.w2ui-grid-select-check").prop("checked", false), t.indexes = [], t.columns = {}, this.removeRange("selection"), a(this.box).find("#grid_" + this.name + "_check_all").prop("checked", false), this.status(), this.updateToolbar(t, false), e || i.finish(), Date.now() - s;
  }
  updateToolbar(e) {
    let t = this, s = e && e.indexes ? e.indexes.length : 0;
    function i(n, r) {
      if (n.batch != null) {
        let l = false;
        n.batch === true ? 0 < s && (l = true) : typeof n.batch == "number" ? s === n.batch && (l = true) : typeof n.batch == "function" && (l = n.batch({ cnt: s, sel: e })), l ? t.toolbar.enable(r + n.id) : t.toolbar.disable(r + n.id);
      }
    }
    this.toolbar.items.forEach((n) => {
      i(n, ""), Array.isArray(n.items) && n.items.forEach((r) => {
        i(r, n.id + ":");
      });
    }), this.show.toolbarSave && (0 < this.getChanges().length ? this.toolbar.enable("w2ui-save") : this.toolbar.disable("w2ui-save"));
  }
  getSelection(e) {
    var t = [], s = this.last.selection;
    if (this.selectType == "row") for (let n = 0; n < s.indexes.length; n++) this.records[s.indexes[n]] && t.push(e === true ? s.indexes[n] : this.records[s.indexes[n]].recid);
    else for (let n = 0; n < s.indexes.length; n++) {
      var i = s.columns[s.indexes[n]];
      if (this.records[s.indexes[n]]) for (let r = 0; r < i.length; r++) t.push({ recid: this.records[s.indexes[n]].recid, index: parseInt(s.indexes[n]), column: i[r] });
    }
    return t;
  }
  search(e, t) {
    var _a;
    var s = ((_a = this.url) == null ? void 0 : _a.get) ?? this.url, i = [];
    let n = this.last.multi, r = this.last.logic, l = this.last.field, h = this.last.search, o = false;
    var c = a(`#w2overlay-${this.name}-search-overlay`);
    for (let C = 0; C < this.searches.length; C++) this.searches[C].hidden && this.searches[C].value != null && (i.push({ field: this.searches[C].field, operator: this.searches[C].operator || "is", type: this.searches[C].type, value: this.searches[C].value || "" }), o = true);
    if (arguments.length === 0 && c.length === 0 && (t = this.multiSearch ? (e = this.searchData, this.last.logic) : (e = this.last.field, this.last.search)), arguments.length === 0 && c.length !== 0) {
      this.focus(), r = c.find(`#grid_${this.name}_logic`).val(), h = "";
      for (let C = 0; C < this.searches.length; C++) {
        var d = this.searches[C], u = c.find("#grid_" + this.name + "_operator_" + C).val(), f = c.find("#grid_" + this.name + "_field_" + C), m = c.find("#grid_" + this.name + "_field2_" + C);
        let y = f.val(), T = m.val(), M = null, R = null;
        if (["int", "float", "money", "currency", "percent"].indexOf(d.type) != -1 && (w = f[0]._w2field, m = m[0]._w2field, w && (y = w.clean(y)), m) && (T = m.clean(T)), ["list", "enum"].indexOf(d.type) != -1 || ["in", "not in"].indexOf(u) != -1) if (y = f[0]._w2field.selected || {}, Array.isArray(y)) {
          M = [];
          for (let H = 0; H < y.length; H++) M.push(p.isFloat(y[H].id) ? parseFloat(y[H].id) : String(y[H].id).toLowerCase()), delete y[H].hidden;
          Object.keys(y).length === 0 && (y = "");
        } else R = y.text || "", y = y.id || "";
        if (y !== "" && y != null || T != null && T !== "") {
          var w = { field: d.field, type: d.type, operator: u };
          u == "between" ? p.extend(w, { value: [y, T] }) : u == "in" && typeof y == "string" || u == "not in" && typeof y == "string" ? p.extend(w, { value: y.split(",") }) : p.extend(w, { value: y }), M && p.extend(w, { svalue: M }), R && p.extend(w, { text: R });
          try {
            d.type == "date" && u == "between" && (w.value[0] = y, w.value[1] = T), d.type == "date" && u == "is" && (w.value = y);
          } catch {
          }
          i.push(w), n = true;
        }
      }
    }
    if (typeof e == "string" && (arguments.length == 1 && (t = e, e = "all"), l = e, h = t, n = false, r = o ? "AND" : "OR", t != null)) if (e.toLowerCase() == "all") if (0 < this.searches.length) for (let C = 0; C < this.searches.length; C++) {
      var g, v = this.searches[C];
      if ((v.type == "text" || v.type == "alphanumeric" && p.isAlphaNumeric(t) || v.type == "int" && p.isInt(t) || v.type == "float" && p.isFloat(t) || v.type == "percent" && p.isFloat(t) || (v.type == "hex" || v.type == "color") && p.isHex(t) || v.type == "currency" && p.isMoney(t) || v.type == "money" && p.isMoney(t) || v.type == "date" && p.isDate(t) || v.type == "time" && p.isTime(t) || v.type == "datetime" && p.isDateTime(t) || v.type == "datetime" && p.isDate(t) || v.type == "enum" && p.isAlphaNumeric(t) || v.type == "list" && p.isAlphaNumeric(t)) && (g = this.defaultOperator[this.operatorsMap[v.type]], g = { field: v.field, type: v.type, operator: v.operator != null ? v.operator : g, value: t }, String(t).trim() != "") && i.push(g), ["int", "float", "money", "currency", "percent"].indexOf(v.type) != -1 && String(t).trim().split("-").length == 2 && (g = String(t).trim().split("-"), k = { field: v.field, type: v.type, operator: v.operator != null ? v.operator : "between", value: [g[0], g[1]] }, i.push(k)), ["list", "enum"].indexOf(v.type) != -1) {
        var k, x = [];
        v.options == null && (v.options = {}), Array.isArray(v.options.items) || (v.options.items = []);
        for (let y = 0; y < v.options.items; y++) {
          var S = v.options.items[y];
          try {
            var $ = new RegExp(t, "i");
            $.test(S) && x.push(y), S.text && $.test(S.text) && x.push(S.id);
          } catch {
          }
        }
        0 < x.length && (k = { field: v.field, type: v.type, operator: v.operator != null ? v.operator : "in", value: x }, i.push(k));
      }
    }
    else for (let C = 0; C < this.columns.length; C++) {
      var I = { field: this.columns[C].field, type: "text", operator: this.defaultOperator.text, value: t };
      i.push(I);
    }
    else {
      var A = c.find("#grid_" + this.name + "_search_all");
      let C = this.getSearch(e);
      if ((C = C ?? { field: e, type: "text" }).field == e && (this.last.label = C.label), t !== "") {
        let y = this.defaultOperator[this.operatorsMap[C.type]], T = t;
        if (["date", "time", "datetime"].indexOf(C.type) != -1 && (y = "is"), ["list", "enum"].indexOf(C.type) != -1 && (y = "is", A = A._w2field.get(), T = A && 0 < Object.keys(A).length ? A.id : ""), C.type == "int" && t !== "" && (y = "is", String(t).indexOf("-") != -1 && (A = t.split("-")).length == 2 && (y = "between", T = [parseInt(A[0]), parseInt(A[1])]), String(t).indexOf(",") != -1)) {
          var _ = t.split(",");
          y = "in", T = [];
          for (let M = 0; M < _.length; M++) T.push(_[M]);
        }
        C.operator != null && (y = C.operator), A = { field: C.field, type: C.type, operator: y, value: T }, i.push(A);
      }
    }
    if (Array.isArray(e)) {
      let C = "AND";
      typeof t == "string" && (C = t.toUpperCase()) != "OR" && C != "AND" && (C = "AND"), h = "", n = true, r = C;
      for (let y = 0; y < e.length; y++) {
        var E = e[y];
        typeof E.value == "number" && E.operator == null && (E.operator = this.defaultOperator.number), typeof E.value == "string" && E.operator == null && (E.operator = this.defaultOperator.text), Array.isArray(E.value) && E.operator == null && (E.operator = this.defaultOperator.enum), p.isDate(E.value) && E.operator == null && (E.operator = this.defaultOperator.date), i.push(E);
      }
    }
    A = this.trigger("search", { target: this.name, multi: arguments.length === 0, searchField: e || "multi", searchValue: e ? t : "multi", searchData: i, searchLogic: r }), A.isCancelled !== true && (this.searchData = A.detail.searchData, this.last.field = l, this.last.search = h, this.last.multi = n, this.last.logic = A.detail.searchLogic, this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.selection.indexes = [], this.last.selection.columns = {}, this.searchClose(), s ? (this.last.fetch.offset = 0, this.reload()) : (this.localSearch(), this.refresh()), A.finish());
  }
  searchOpen() {
    if (this.box && this.searches.length !== 0) {
      let e = this.trigger("searchOpen", { target: this.name });
      if (e.isCancelled !== true) {
        let t = a(this.toolbar.box).find(".w2ui-grid-search-input .w2ui-search-drop");
        t.addClass("checked"), B.show({ name: this.name + "-search-overlay", anchor: a(this.box).find("#grid_" + this.name + "_search_all").get(0), position: "bottom|top", html: this.getSearchesHTML(), align: "left", arrowSize: 12, class: "w2ui-grid-search-advanced", hideOn: ["doc-click"] }).then((s) => {
          this.initSearches(), this.last.search_opened = true;
          let i = a(`#w2overlay-${this.name}-search-overlay`);
          i.data("gridName", this.name).off(".grid-search").on("click.grid-search", () => {
            i.find("input, select").each((r) => {
              r = a(r).data("tooltipName"), r && r.forEach((l) => {
                B.hide(l);
              });
            });
          }), p.bindEvents(i.find("select, input, button"), this);
          var n = a(`#w2overlay-${this.name}-search-overlay *[rel=search]`);
          0 < n.length && n[0].focus(), e.finish();
        }).hide((s) => {
          t.removeClass("checked"), this.last.search_opened = false;
        });
      }
    }
  }
  searchClose() {
    B.hide(this.name + "-search-overlay");
  }
  searchFieldTooltip(i, t, s) {
    var i = this.searches[i], n = this.searchData[t];
    let r = n.operator, l = ((r = r == "more" && n.type == "date" ? "since" : r) == "less" && n.type == "date" && (r = "before"), ""), h = n.value;
    Array.isArray(n.value) ? (n.value.forEach((o) => {
      l += `<span class="value">${o.text || o}</span>`;
    }), n.type == "date" && (l = "", n.value.forEach((o) => {
      l += `<span class="value">${p.formatDate(o)}</span>`;
    }))) : n.type == "date" && (h = p.formatDateTime(h)), B.hide(this.name + "-search-props"), B.show({ name: this.name + "-search-props", anchor: s, class: "w2ui-white", hideOn: "doc-click", html: `
                <div class="w2ui-grid-search-single">
                    <span class="field">${i.label}</span>
                    <span class="operator">${p.lang(r)}</span>
                    ${Array.isArray(n.value) ? "" + l : `<span class="value">${h}</span>`}
                    <div class="buttons">
                        <button id="remove" class="w2ui-btn">${p.lang("Remove This Field")}</button>
                    </div>
                </div>` }).then((o) => {
      a(o.detail.overlay.box).find("#remove").on("click", () => {
        this.searchData.splice("" + t, 1), this.reload(), this.localSearch(), B.hide(this.name + "-search-props");
      });
    });
  }
  searchSuggest(e, t, s) {
    var _a, _b;
    clearTimeout(this.last.kbd_timer), clearTimeout(this.last.overlay_timer), this.searchShowFields(true), this.searchClose(), t === true ? B.hide(this.name + "-search-suggest") : 0 < a(`#w2overlay-${this.name}-search-suggest`).length || (e ? (t = a(this.box).find(`#grid_${this.name}_search_all`).get(0), e = [...this.defaultSearches ?? [], ...0 < ((_a = this.defaultSearches) == null ? void 0 : _a.length) && 0 < ((_b = this.savedSearches) == null ? void 0 : _b.length) ? ["--"] : [], ...this.savedSearches ?? []], Array.isArray(e) && 0 < e.length && ee.show({ name: this.name + "-search-suggest", anchor: t, align: "both", items: e, hideOn: ["doc-click", "sleect", "remove"], render(i) {
      let n = i.text;
      return n = i.isDefault ? `<b>${n}</b>` : n;
    } }).select((i) => {
      var n = this.trigger("searchSelect", { target: this.name, index: i.detail.index, item: i.detail.item });
      n.isCancelled === true ? i.preventDefault() : (i.detail.overlay.hide(), this.last.logic = i.detail.item.logic || "AND", this.last.search = "", this.last.label = "[Multiple Fields]", this.searchData = p.clone(i.detail.item.data), this.searchSelected = p.clone(i.detail.item, { exclude: ["icon", "remove"] }), this.reload(), n.finish());
    }).remove((i) => {
      let n = i.detail.item, r = this.trigger("searchRemove", { target: this.name, index: i.detail.index, item: n });
      r.isCancelled === true ? i.preventDefault() : (i.detail.overlay.hide(), this.confirm(p.lang('Do you want to delete search "${item}"?', { item: n.text })).yes((l) => {
        var h = this.savedSearches.findIndex((o) => o.id == n.id);
        h !== -1 && this.savedSearches.splice(h, 1), this.cacheSave("searches", this.savedSearches.map((o) => p.clone(o, { exclude: ["remove", "icon"] }))), l.detail.self.close(), r.finish();
      }).no((l) => {
        l.detail.self.close();
      }));
    })) : this.last.overlay_timer = setTimeout(() => {
      this.searchSuggest(true);
    }, 100));
  }
  searchSave() {
    let e = "", t = (this.searchSelected && (e = this.searchSelected.text), this.savedSearches.findIndex((i) => {
      var _a;
      return i.id == ((_a = this.searchSelected) == null ? void 0 : _a.id);
    })), s = this.trigger("searchSave", { target: this.name, saveLocalStorage: true });
    s.isCancelled !== true && this.message({ width: 350, height: 150, body: `<div class="w2ui-grid-save-search">
                        <span>${p.lang(t != -1 ? "Update Search" : "Save New Search")}</span>
                        <input class="search-name w2ui-input" placeholder="${p.lang("Search name")}">
                   </div>`, buttons: `
                <button id="grid-search-cancel" class="w2ui-btn">${p.lang("Cancel")}</button>
                <button id="grid-search-save" class="w2ui-btn w2ui-btn-blue" ${String(e).trim() == "" ? "disabled" : ""}>${p.lang("Save")}</button>
            ` }).open(async (i) => {
      a(i.detail.box).find("input, button").eq(0).val(e), await i.complete, a(i.detail.box).find("#grid-search-cancel").on("click", () => {
        this.message();
      }), a(i.detail.box).find("#grid-search-save").on("click", () => {
        var n = a(i.detail.box).find(".w2ui-message .search-name").val();
        this.searchSelected && t != -1 ? Object.assign(this.savedSearches[t], { id: n, text: n, logic: this.last.logic, data: p.clone(this.searchData) }) : this.savedSearches.push({ id: n, text: n, icon: "w2ui-icon-search", remove: true, logic: this.last.logic, data: this.searchData }), this.cacheSave("searches", this.savedSearches.map((r) => p.clone(r, { exclude: ["remove", "icon"] }))), this.message(), (this.searchSelected ? (this.searchSelected.text = n, a(this.box).find(`#grid_${this.name}_search_name .name-text`)) : (this.searchSelected = { text: n, logic: this.last.logic, data: p.clone(this.searchData) }, a(i.detail.box).find(`#grid_${this.name}_search_all`).val(" ").prop("readOnly", true), a(i.detail.box).find(`#grid_${this.name}_search_name`).show().find(".name-text"))).html(n), s.finish({ name: n });
      }), a(i.detail.box).find("input, button").off(".message").on("keydown.message", (n) => {
        var r = String(a(i.detail.box).find(".w2ui-message-body input").val()).trim();
        n.keyCode == 13 && r != "" && a(i.detail.box).find("#grid-search-save").trigger("click"), n.keyCode == 27 && this.message();
      }).eq(0).on("input.message", (n) => {
        var r = a(i.detail.box).closest(".w2ui-message").find("#grid-search-save");
        String(a(i.detail.box).val()).trim() === "" ? r.prop("disabled", true) : r.prop("disabled", false);
      }).get(0).focus();
    });
  }
  cache(e) {
    var _a;
    if (p.hasLocalStorage && this.useLocalStorage) try {
      var t = JSON.parse(localStorage.w2ui || "{}");
      return t[_a = this.stateId || this.name] ?? (t[_a] = {}), t[this.stateId || this.name][e];
    } catch {
    }
    return null;
  }
  cacheSave(e, t) {
    var _a;
    if (p.hasLocalStorage && this.useLocalStorage) try {
      var s = JSON.parse(localStorage.w2ui || "{}");
      return s[_a = this.stateId || this.name] ?? (s[_a] = {}), s[this.stateId || this.name][e] = t, localStorage.w2ui = JSON.stringify(s), true;
    } catch {
      delete localStorage.w2ui;
    }
    return false;
  }
  searchReset(e) {
    var t = [];
    let s = false;
    for (let r = 0; r < this.searches.length; r++) this.searches[r].hidden && this.searches[r].value != null && (t.push({ field: this.searches[r].field, operator: this.searches[r].operator || "is", type: this.searches[r].type, value: this.searches[r].value || "" }), s = true);
    var i = this.trigger("search", { reset: true, target: this.name, searchData: t });
    if (i.isCancelled !== true) {
      var n = a(this.box).find("#grid_" + this.name + "_search_all");
      if (this.searchData = i.detail.searchData, this.searchSelected = null, this.last.search = "", this.last.logic = s ? "AND" : "OR", n.next().hide(), 0 < this.searches.length) if (this.multiSearch && this.show.searchAll) this.last.field = "all", this.last.label = "All Fields", n.next().show();
      else {
        let r = 0;
        for (; r < this.searches.length && (this.searches[r].hidden || this.searches[r].simple === false); ) r++;
        r >= this.searches.length ? (this.last.field = "", this.last.label = "") : (this.last.field = this.searches[r].field, this.last.label = this.searches[r].label);
      }
      this.last.multi = false, this.last.fetch.offset = 0, this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.selection.indexes = [], this.last.selection.columns = {}, this.searchClose(), n = n.val("").get(0), (n == null ? void 0 : n._w2field) && n._w2field.reset(), e || this.reload(), i.finish();
    }
  }
  searchShowFields(e) {
    if (e === true) B.hide(this.name + "-search-fields");
    else {
      var t = [];
      for (let i = -1; i < this.searches.length; i++) {
        let n = this.searches[i];
        var s = n ? n.field : null, s = this.getColumn(s);
        let r = false, l = null;
        if (this.show.searchHiddenMsg == 1 && i != -1 && (s == null || s.hidden === true && s.hideable !== false) && (r = true, l = p.lang("This column " + (s == null ? "does not exist" : "is hidden"))), i == -1) {
          if (!this.multiSearch || !this.show.searchAll) continue;
          n = { field: "all", label: "All Fields" };
        } else if (s != null && s.hideable === false || n.hidden === true && (l = p.lang("This column is hidden"), n.simple === false)) continue;
        n.label == null && n.caption != null && (console.log("NOTICE: grid search.caption property is deprecated, please use search.label. Search ->", n), n.label = n.caption), t.push({ id: n.field, text: p.lang(n.label), search: n, tooltip: l, disabled: r, checked: n.field == this.last.field });
      }
      ee.show({ type: "radio", name: this.name + "-search-fields", anchor: a(this.box).find("#grid_" + this.name + "_search_name").parent().find(".w2ui-search-down").get(0), items: t, align: "none", hideOn: ["doc-click", "select"] }).select((i) => {
        this.searchInitInput(i.detail.item.search.field);
      });
    }
  }
  searchInitInput(e, t) {
    let s;
    var i = a(this.box).find("#grid_" + this.name + "_search_all");
    if (e == "all") s = { field: "all", label: p.lang("All Fields") };
    else if ((s = this.getSearch(e)) == null) return;
    this.last.search != "" ? (this.last.label = s.label, this.search(s.field, this.last.search)) : (this.last.field = s.field, this.last.label = s.label), i.attr("placeholder", p.lang("Search") + " " + p.lang(s.label || s.caption || s.field, true));
  }
  clear(e) {
    this.total = 0, this.records = [], this.summary = [], this.last.fetch.offset = 0, this.last.idCache = {}, this.last.selection = { indexes: [], columns: {} }, this.reset(true), e || this.refresh();
  }
  reset(e) {
    this.last.scrollTop = 0, this.last.scrollLeft = 0, this.last.range_start = null, this.last.range_end = null, a(this.box).find(`#grid_${this.name}_records`).prop("scrollTop", 0), e || this.refresh();
  }
  skip(e, t) {
    var _a;
    ((_a = this.url) == null ? void 0 : _a.get) ?? this.url ? (this.offset = parseInt(e), this.offset > this.total && (this.offset = this.total - this.limit), (this.offset < 0 || !p.isInt(this.offset)) && (this.offset = 0), this.clear(true), this.reload(t)) : console.log("ERROR: grid.skip() can only be called when you have remote data source.");
  }
  load(e, t) {
    return e == null ? (console.log('ERROR: You need to provide url argument when calling .load() method of "' + this.name + '" object.'), new Promise((s, i) => {
      i();
    })) : (this.clear(true), this.request("load", {}, e, t));
  }
  reload(e) {
    var _a;
    let t = this;
    var s = ((_a = this.url) == null ? void 0 : _a.get) ?? this.url;
    return t.selectionSave(), s ? this.load(s, () => {
      t.selectionRestore(), typeof e == "function" && e();
    }) : (this.reset(true), this.localSearch(), this.selectionRestore(), typeof e == "function" && e({ status: "success" }), new Promise((i) => {
      i();
    }));
  }
  request(e, t, s, i) {
    let n = this, r, l;
    var h = new Promise((f, m) => {
      r = f, l = m;
    });
    if (t == null && (t = {}), !(s = s || this.url)) return new Promise((f, m) => {
      m();
    });
    p.isInt(this.offset) || (this.offset = 0), p.isInt(this.last.fetch.offset) || (this.last.fetch.offset = 0);
    let o;
    var c = { limit: this.limit, offset: parseInt(this.offset) + parseInt(this.last.fetch.offset), searchLogic: this.last.logic, search: this.searchData.map((f) => (f = p.clone(f), this.searchMap && this.searchMap[f.field] && (f.field = this.searchMap[f.field]), f)), sort: this.sortData.map((f) => (f = p.clone(f), this.sortMap && this.sortMap[f.field] && (f.field = this.sortMap[f.field]), f)) };
    if (this.searchData.length === 0 && (delete c.search, delete c.searchLogic), this.sortData.length === 0 && delete c.sort, p.extend(c, this.postData), p.extend(c, t), e != "delete" && e != "save" || (delete c.limit, delete c.offset, (c.action = e) == "delete" && (c[this.recid || "recid"] = this.getSelection())), e == "load") {
      if ((o = this.trigger("request", { target: this.name, url: s, postData: c, httpMethod: "GET", httpHeaders: this.httpHeaders })).isCancelled === true) return new Promise((f, m) => {
        m();
      });
    } else o = { detail: { url: s, postData: c, httpMethod: e == "save" ? "PUT" : "DELETE", httpHeaders: this.httpHeaders } };
    if (this.last.fetch.offset === 0 && this.lock(p.lang(this.msgRefresh), true), this.last.fetch.controller) try {
      this.last.fetch.controller.abort();
    } catch {
    }
    switch (s = o.detail.url, e) {
      case "save":
        (s == null ? void 0 : s.save) && (s = s.save);
        break;
      case "delete":
        (s == null ? void 0 : s.remove) && (s = s.remove);
        break;
      default:
        s = (s == null ? void 0 : s.get) ?? s;
    }
    if (0 < Object.keys(this.routeData).length) {
      var d = p.parseRoute(s);
      if (0 < d.keys.length) for (let f = 0; f < d.keys.length; f++) this.routeData[d.keys[f].name] != null && (s = s.replace(new RegExp(":" + d.keys[f].name, "g"), this.routeData[d.keys[f].name]));
    }
    return s = new URL(s, location), t = p.prepareParams(s, { method: o.detail.httpMethod, headers: o.detail.httpHeaders, body: o.detail.postData }, this.dataType), Object.assign(this.last.fetch, { action: e, options: t, controller: new AbortController(), start: Date.now(), loaded: false }), t.signal = this.last.fetch.controller.signal, fetch(s, t).catch(u).then((f) => {
      f != null && ((f == null ? void 0 : f.status) != 200 ? u(f ?? {}) : (n.unlock(), f.json().catch(u).then((m) => {
        this.requestComplete(m, e, i, r, l);
      })));
    }), e == "load" && o.finish(), h;
    function u(f) {
      var m;
      (f == null ? void 0 : f.name) !== "AbortError" && (n.unlock(), (m = n.trigger("error", { response: f, lastFetch: n.last.fetch })).isCancelled !== true) && (f.status && f.status != 200 ? n.error(f.status + ": " + f.statusText) : (console.log("ERROR: Server communication failed.", `
   EXPECTED:`, { total: 5, records: [{ recid: 1, field: "value" }] }, `
         OR:`, { error: true, message: "error message" }), n.requestComplete({ error: true, message: p.lang(this.msgHTTPError), response: f }, e, i, r, l)), m.finish());
    }
  }
  requestComplete(e, t, s, i, n) {
    var _a;
    let r = e.error ?? false, l = (e.error == null && e.status === "error" && (r = true), this.last.fetch.response = (Date.now() - this.last.fetch.start) / 1e3, setTimeout(() => {
      this.show.statusResponse && this.status(p.lang("Server Response ${count} seconds", { count: this.last.fetch.response }));
    }, 10), this.last.pull_more = false, this.last.pull_refresh = true, "load");
    this.last.fetch.action == "save" && (l = "save"), this.last.fetch.action == "delete" && (l = "delete");
    var h = this.trigger(l, { target: this.name, error: r, data: e, lastFetch: this.last.fetch });
    if (h.isCancelled === true) n();
    else {
      if (r) this.error(p.lang(e.message ?? this.msgServerError)), n(e);
      else if (typeof this.parser == "function" ? typeof (e = this.parser(e)) != "object" && console.log("ERROR: Your parser did not return proper object") : e == null ? e = { error: true, message: p.lang(this.msgNotJSON) } : Array.isArray(e) && (e = { error: r, records: e, total: e.length }), t == "load") {
        if (e.total == null && (e.total = -1), e.records == null && (e.records = []), e.records.length == this.limit ? (n = this.records.length + e.records.length, this.last.fetch.hasMore = n != this.total) : (this.last.fetch.hasMore = false, this.total = this.offset + this.last.fetch.offset + e.records.length), this.last.fetch.hasMore || a(this.box).find("#grid_" + this.name + "_rec_more, #grid_" + this.name + "_frec_more").hide(), this.last.fetch.offset === 0) this.records = [], this.summary = [];
        else if (e.total != -1 && parseInt(e.total) != parseInt(this.total)) {
          let o = this;
          return this.message(p.lang(this.msgNeedReload)).ok(() => {
            delete o.last.fetch.offset, o.reload();
          }), new Promise((c) => {
            c();
          });
        }
        p.isInt(e.total) && (this.total = parseInt(e.total)), e.records && e.records.forEach((o) => {
          var _a2;
          this.recid && (o.recid = this.parseField(o, this.recid)), o.recid == null && (o.recid = "recid-" + this.records.length), (((_a2 = o.w2ui) == null ? void 0 : _a2.summary) === true ? this.summary : this.records).push(o);
        }), e.summary && (this.summary = [], e.summary.forEach((o) => {
          this.recid && (o.recid = this.parseField(o, this.recid)), o.recid == null && (o.recid = "recid-" + this.summary.length), this.summary.push(o);
        }));
      } else if (t == "delete") return this.reset(), this.reload();
      (((_a = this.url) == null ? void 0 : _a.get) ?? this.url) || (this.localSort(), this.localSearch()), this.total = parseInt(this.total), this.last.fetch.offset === 0 ? this.refresh() : (this.scroll(), this.resize()), typeof s == "function" && s(e), i(e), h.finish(), this.last.fetch.loaded = true;
    }
  }
  error(e) {
    var t = this.trigger("error", { target: this.name, message: e });
    t.isCancelled !== true && (this.message(e), t.finish());
  }
  getChanges(e) {
    var t = [];
    e === void 0 && (e = this.records);
    for (let n = 0; n < e.length; n++) {
      var s, i = e[n];
      (i == null ? void 0 : i.w2ui) && (i.w2ui.changes != null && ((s = {})[this.recid || "recid"] = i.recid, t.push(p.extend(s, i.w2ui.changes))), i.w2ui.expanded !== true) && i.w2ui.children && i.w2ui.children.length && t.push(...this.getChanges(i.w2ui.children));
    }
    return t;
  }
  mergeChanges() {
    var e = this.getChanges();
    for (let i = 0; i < e.length; i++) {
      var t, s = this.get(e[i][this.recid || "recid"]);
      for (t in e[i]) if (!(t == "recid" || this.recid && t == this.recid)) {
        typeof e[i][t] == "object" && (e[i][t] = e[i][t].text);
        try {
          (function n(r, l, h) {
            let o = l.split(".");
            o.length == 1 ? r[l] = h : (r = r[o[0]], o.shift(), n(r, o.join("."), h));
          })(s, t, e[i][t]);
        } catch (n) {
          console.log("ERROR: Cannot merge. ", n.message || "", n);
        }
        s.w2ui && delete s.w2ui.changes;
      }
    }
    this.refresh();
  }
  save(e) {
    var _a;
    var t = this.getChanges(), s = ((_a = this.url) == null ? void 0 : _a.save) ?? this.url;
    let i = this.trigger("save", { target: this.name, changes: t });
    i.isCancelled !== true && (s ? this.request("save", { changes: i.detail.changes }, null, (n) => {
      n.error || this.mergeChanges(), i.finish(), typeof e == "function" && e(n);
    }) : (this.mergeChanges(), i.finish()));
  }
  editField(e, t, s, i) {
    var _a, _b;
    let n = this;
    if (this.last.inEditMode === true) i && i.keyCode == 13 ? ({ index: r, column: l, value: h } = this.last._edit, this.editChange({ type: "custom", value: h }, r, l, i), this.editDone(r, l, i)) : 0 < (h = a(this.box).find("div.w2ui-edit-box .w2ui-input")).length && (h.get(0).tagName == "DIV" ? (h.text(h.text() + s), p.setCursorPosition(h.get(0), h.text().length)) : (h.val(h.val() + s), p.setCursorPosition(h.get(0), h.val().length)));
    else {
      let o = this.get(e, true), c = this.getCellEditable(o, t);
      if (c && !["checkbox", "check"].includes(c.type)) {
        let d = this.records[o], u = this.columns[t];
        var r = u.frozen === true ? "_f" : "_";
        if (["enum", "file"].indexOf(c.type) != -1) console.log('ERROR: input types "enum" and "file" are not supported in inline editing.');
        else {
          var l = this.trigger("editField", { target: this.name, recid: e, column: t, value: s, index: o, originalEvent: i });
          if (l.isCancelled !== true) {
            let x = function(S) {
              try {
                var $ = getComputedStyle(S), I = S.tagName.toUpperCase() == "DIV" ? S.innerText : S.value, A = a(n.box).find("#grid_" + n.name + "_editable").get(0), _ = `font-family: ${$["font-family"]}; font-size: ${$["font-size"]}; white-space: no-wrap;`, E = p.getStrWidth(I, _);
                E + 20 > A.clientWidth && a(A).css("width", E + 20 + "px");
              } catch {
              }
            };
            s = l.detail.value, this.last.inEditMode = true, this.last.editColumn = t, this.last._edit = { value: s, index: o, column: t, recid: e }, this.selectNone(true), this.select({ recid: e, column: t });
            var h = a(this.box).find("#grid_" + this.name + r + "rec_" + p.escapeId(e));
            let f = h.find('[col="' + t + '"] > div'), m = (this.last._edit.tr = h, this.last._edit.div = f, a(this.box).find("div.w2ui-edit-box").remove(), this.selectType != "row" && (a(this.box).find("#grid_" + this.name + r + "selection").attr("id", "grid_" + this.name + "_editable").removeClass("w2ui-selection").addClass("w2ui-edit-box").prepend('<div style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px;"></div>').find(".w2ui-selection-resizer").remove(), f = a(this.box).find("#grid_" + this.name + "_editable > div:first-child")), c.attr = c.attr ?? "", c.text = c.text ?? "", c.style = c.style ?? "", c.items = c.items ?? [], ((_b = (_a = d.w2ui) == null ? void 0 : _a.changes) == null ? void 0 : _b[u.field]) != null ? p.stripTags(d.w2ui.changes[u.field]) : p.stripTags(n.parseField(d, u.field))), w = typeof (m = m ?? "") != "object" ? m : "", g = (l.detail.prevValue != null && (w = l.detail.prevValue), s != null && (m = s), u.style != null ? u.style + ";" : "");
            typeof u.render == "string" && ["number", "int", "float", "money", "percent", "size"].includes(u.render.split(":")[0]) && (g += "text-align: right;"), 0 < c.items.length && !p.isPlainObject(c.items[0]) && (c.items = p.normMenu(c.items));
            let v, k = ["date", "time", "datetime", "color", "list", "combo"];
            i = getComputedStyle(h.find('[col="' + t + '"] > div').get(0)), r = `font-family: ${i["font-family"]}; font-size: ${i["font-size"]};`, c.type === "div" ? (f.addClass("w2ui-editable").html(p.stripSpaces(`<div id="grid_${this.name}_edit_${e}_${t}" class="w2ui-input w2ui-focus"
                        contenteditable autocorrect="off" autocomplete="off" spellcheck="false"
                        style="${r + g + c.style}"
                        field="${u.field}" recid="${e}" column="${t}" ${c.attr}>
                    </div>` + c.text)), (v = f.find("div.w2ui-input").get(0)).innerText = typeof m != "object" ? m : "", s != null ? p.setCursorPosition(v, v.innerText.length) : p.setCursorPosition(v, 0, v.innerText.length)) : (f.addClass("w2ui-editable").html(p.stripSpaces(`<input id="grid_${this.name}_edit_${e}_${t}" class="w2ui-input"
                        autocorrect="off" autocomplete="off" spellcheck="false" type="text"
                        style="${r + g + c.style}"
                        field="${u.field}" recid="${e}" column="${t}" ${c.attr}>` + c.text)), v = f.find("input").get(0), c.type == "number" && (m = p.formatNumber(m)), c.type == "date" && (m = p.formatDate(p.isDate(m, c.format, true) || /* @__PURE__ */ new Date(), c.format)), v.value = typeof m != "object" ? m : "", h = (S) => {
              var _a2, _b2, _c, _d;
              var $ = (_a2 = this.last._edit) == null ? void 0 : _a2.escKey;
              let I = false;
              var A = a(v).data("tooltipName");
              A && ((_b2 = B.get(A[0])) == null ? void 0 : _b2.selected) != null && (I = true), !this.last.inEditMode || $ || !k.includes(c.type) || ((_c = S.detail.overlay.anchor) == null ? void 0 : _c.id) != ((_d = this.last._edit.input) == null ? void 0 : _d.id) && c.type != "list" || (this.editChange(), this.editDone(void 0, void 0, { keyCode: I ? 13 : 0 }));
            }, new De(p.extend({}, c, { el: v, selected: m, onSelect: h, onHide: h })), s == null && v && v.select()), Object.assign(this.last._edit, { input: v, edit: c }), a(v).off(".w2ui-editable").on("blur.w2ui-editable", (S) => {
              var $, I;
              this.last.inEditMode && ($ = this.last._edit.edit.type, I = a(v).data("tooltipName"), k.includes($) && I || (this.editChange(v, o, t, S), this.editDone()));
            }).on("mousedown.w2ui-editable", (S) => {
              S.stopPropagation();
            }).on("click.w2ui-editable", (S) => {
              x.call(v, S);
            }).on("paste.w2ui-editable", (S) => {
              S.preventDefault(), S = S.clipboardData.getData("text/plain"), document.execCommand("insertHTML", false, S);
            }).on("keyup.w2ui-editable", (S) => {
              x.call(v, S);
            }).on("keydown.w2ui-editable", (S) => {
              switch (S.keyCode) {
                case 8:
                  c.type != "list" || v._w2field || S.preventDefault();
                  break;
                case 9:
                case 13:
                  S.preventDefault();
                  break;
                case 27:
                  var $ = a(v).data("tooltipName");
                  $ && 0 < $.length && (this.last._edit.escKey = true, B.hide($[0]), S.preventDefault()), S.stopPropagation();
              }
              setTimeout(() => {
                var _a2, _b2;
                switch (S.keyCode) {
                  case 9:
                    var I = S.shiftKey ? n.prevCell(o, t, true) : n.nextCell(o, t, true);
                    I != null && (A = n.records[I.index].recid, this.editChange(v, o, t, S), this.editDone(o, t, S), n.selectType != "row" ? (n.selectNone(true), n.select({ recid: A, column: I.colIndex })) : n.editField(A, I.colIndex, null, S), S.preventDefault) && S.preventDefault();
                    break;
                  case 13: {
                    let _ = false;
                    var A = a(v).data("tooltipName");
                    A && B.get(A[0]).selected != null && (_ = true), A && _ || (this.editChange(v, o, t, S), this.editDone(o, t, S));
                    break;
                  }
                  case 27: {
                    this.last._edit.escKey = false;
                    let _ = n.parseField(d, u.field);
                    ((_b2 = (_a2 = d.w2ui) == null ? void 0 : _a2.changes) == null ? void 0 : _b2[u.field]) != null && (_ = d.w2ui.changes[u.field]), v._prevValue != null && (_ = v._prevValue), v.tagName == "DIV" ? v.innerText = _ ?? "" : v.value = _ ?? "", this.editDone(o, t, S), setTimeout(() => {
                      n.select({ recid: e, column: t });
                    }, 1);
                    break;
                  }
                }
                x(v);
              }, 1);
            }), v && (v._prevValue = w), c.type != "list" && setTimeout(() => {
              this.last.inEditMode && v && (v.focus(), clearTimeout(this.last.kbd_timer), (v.resize = x)(v));
            }, 50), l.finish({ input: v });
          }
        }
      }
    }
  }
  editChange(e, t, s, i) {
    var _a, _b, _c, _d;
    e = e ?? this.last._edit.input, t = t ?? this.last._edit.index, s = s ?? this.last._edit.column, i = i ?? {};
    var n = (t < 0 ? this.summary : this.records)[t = t < 0 ? -t - 1 : t], r = this.columns[s];
    let l = (e == null ? void 0 : e.tagName) == "DIV" ? e.innerText : e.value;
    var h = e._w2field, o = (h && (h.type == "list" && (l = h.selected), Object.keys(l).length !== 0 && l != null || (l = ""), p.isPlainObject(l) || (l = h.clean(l))), e.type == "checkbox" && (((_a = n.w2ui) == null ? void 0 : _a.editable) === false && (e.checked = !e.checked), l = e.checked), this.parseField(n, r.field)), c = ((_b = n.w2ui) == null ? void 0 : _b.changes) && n.w2ui.changes.hasOwnProperty(r.field) ? n.w2ui.changes[r.field] : o;
    let d = { target: this.name, input: e, recid: n.recid, index: t, column: s, originalEvent: i, value: { new: l, previous: c, original: o } }, u = (((_c = i.target) == null ? void 0 : _c._prevValue) != null && (d.value.previous = i.target._prevValue), 0);
    for (; u < 20; ) {
      if (u++, typeof (l = d.value.new) != "object" && String(o) != String(l) || typeof l == "object" && l && l.id != o && (typeof o != "object" || o == null || l.id != o.id)) {
        if ((d = this.trigger("change", d)).isCancelled !== true) {
          if (l !== d.detail.value.new) continue;
          (d.detail.value.new !== "" && d.detail.value.new != null || c !== "" && c != null) && (n.w2ui = n.w2ui ?? {}, n.w2ui.changes = n.w2ui.changes ?? {}, n.w2ui.changes[r.field] = d.detail.value.new), d.finish();
        }
      } else if ((d = this.trigger("restore", d)).isCancelled !== true) {
        if (l !== d.detail.value.new) continue;
        ((_d = n.w2ui) == null ? void 0 : _d.changes) && (delete n.w2ui.changes[r.field], Object.keys(n.w2ui.changes).length === 0) && delete n.w2ui.changes, d.finish();
      }
      break;
    }
  }
  editDone(e, t, s) {
    var _a, _b;
    if (e = e ?? this.last._edit.index, t = t ?? this.last._edit.column, s = s ?? {}, this.advanceOnEdit && s.keyCode == 13) {
      let h = s.shiftKey ? this.prevRow(e, t, 1) : this.nextRow(e, t, 1);
      h == null && (h = e), setTimeout(() => {
        this.selectType != "row" ? (this.selectNone(true), this.select({ recid: this.records[h].recid, column: t })) : this.editField(this.records[h].recid, t, null, s);
      }, 1);
    }
    var i = e < 0, n = a(this.last._edit.tr).find('[col="' + t + '"]'), r = this.records[e], l = this.columns[t];
    this.last.inEditMode = false, this.last._edit = null, i || (((_b = (_a = r.w2ui) == null ? void 0 : _a.changes) == null ? void 0 : _b[l.field]) != null ? n.addClass("w2ui-changed") : n.removeClass("w2ui-changed"), n.replace(this.getCellHTML(e, t, i))), a(this.box).find("div.w2ui-edit-box").remove(), this.updateToolbar(), setTimeout(() => {
      var h = a(this.box).find(`#grid_${this.name}_focus`).get(0);
      document.activeElement === h || this.last.inEditMode || h.focus();
    }, 10);
  }
  delete(e) {
    var _a;
    var t = this.trigger("delete", { target: this.name, force: e });
    if (e && this.message(), t.isCancelled !== true) {
      e = t.detail.force;
      var s = this.getSelection();
      if (s.length !== 0) if (this.msgDelete == "" || e) {
        if (typeof this.url != "object" ? this.url : this.url.remove) this.request("delete");
        else if (typeof s[0] != "object") this.selectNone(), this.remove.apply(this, s);
        else {
          for (let l = 0; l < s.length; l++) {
            var i = this.columns[s[l].column].field, n = this.get(s[l].recid, true), r = this.records[n];
            n != null && i != "recid" && (this.records[n][i] = "", (_a = r.w2ui) == null ? void 0 : _a.changes) && delete r.w2ui.changes[i];
          }
          this.update();
        }
        t.finish();
      } else this.confirm({ text: p.lang(this.msgDelete, { count: s.length, records: p.lang(s.length == 1 ? "record" : "records") }), width: 380, height: 170, yes_text: p.lang("Delete"), yes_class: "w2ui-btn-red", no_text: p.lang("Cancel") }).yes((l) => {
        l.detail.self.close(), this.delete(true);
      }).no((l) => {
        l.detail.self.close();
      });
    }
  }
  click(e, t) {
    var _a, _b, _c;
    var s = Date.now();
    let i = null;
    if (!(this.last.cancelClick == 1 || t && t.altKey)) if (typeof e == "object" && e !== null && (i = e.column, e = e.recid), t == null && (t = {}), s - parseInt(this.last.click_time) < 350 && this.last.click_recid == e && t.type == "click") this.dblClick(e, t);
    else {
      if (this.last.bubbleEl && (this.last.bubbleEl = null), this.last.click_time = s, s = this.last.click_recid, this.last.click_recid = e, i == null && t.target) {
        let d = t.target;
        d.tagName != "TD" && (d = a(d).closest("td")[0]), a(d).attr("col") != null && (i = parseInt(a(d).attr("col")));
      }
      var n = this.trigger("click", { target: this.name, recid: e, column: i, originalEvent: t });
      if (n.isCancelled !== true) {
        var r = this.getSelection(), l = (a(this.box).find("#grid_" + this.name + "_check_all").prop("checked", false), this.get(e, true)), h = [];
        this.last.sel_ind = l, this.last.sel_col = i, this.last.sel_recid = e, this.last.sel_type = "click";
        let d, u, f, m;
        if (t.shiftKey && 0 < r.length && this.multiSelect) {
          if (r[0].recid) {
            d = this.get(r[0].recid, true), u = this.get(e, true), m = i > r[0].column ? (f = r[0].column, i) : (f = i, r[0].column);
            for (let w = f; w <= m; w++) h.push(w);
          } else d = this.get(s, true), u = this.get(e, true);
          var o = [], c = (d > u && (s = d, d = u, u = s), ((_a = this.url) == null ? void 0 : _a.get) ? this.url.get : this.url);
          for (let w = d; w <= u; w++) if (!(0 < this.searchData.length) || c || this.last.searchIds.includes(w)) if (this.selectType == "row") o.push(this.records[w].recid);
          else for (let g = 0; g < h.length; g++) o.push({ recid: this.records[w].recid, column: h[g] });
          this.select(o);
        } else {
          s = this.last.selection;
          let w = s.indexes.indexOf(l) != -1, g = false;
          a(t.target).closest("td").hasClass("w2ui-col-select") && (g = true), (t.ctrlKey || t.shiftKey || t.metaKey || g) && this.multiSelect || this.showSelectColumn ? (w = this.selectType == "row" || ((_b = s.columns[l]) == null ? void 0 : _b.includes(i)) ? w : false) === true ? this.unselect({ recid: e, column: i }) : this.select({ recid: e, column: i }) : (this.selectType == "row" || ((_c = s.columns[l]) == null ? void 0 : _c.includes(i)) || (w = false), this.selectNone(true), w === true && r.length == 1 ? this.unselect({ recid: e, column: i }) : this.select({ recid: e, column: i }));
        }
        this.status(), this.initResize(), n.finish();
      }
    }
  }
  columnClick(e, t) {
    if (this.last.colResizing !== true) {
      let r = this.trigger("columnClick", { target: this.name, field: e, originalEvent: t });
      if (r.isCancelled !== true) {
        if (this.selectType == "row") {
          var s = this.getColumn(e);
          s && s.sortable && this.sort(e, null, !(!t || !t.ctrlKey && !t.metaKey)), r.detail.field == "line-number" && (this.getSelection().length >= this.records.length ? this.selectNone() : this.selectAll());
        } else if (t.altKey && (s = this.getColumn(e)) && s.sortable && this.sort(e, null, !(!t || !t.ctrlKey && !t.metaKey)), r.detail.field == "line-number") this.getSelection().length >= this.records.length ? this.selectNone() : this.selectAll();
        else {
          t.shiftKey || t.metaKey || t.ctrlKey || this.selectNone(true);
          var s = this.getSelection(), e = this.getColumn(r.detail.field, true), i = [], n = [];
          if (s.length != 0 && t.shiftKey) {
            let o = e, c = s[0].column;
            o > c && (o = s[0].column, c = e);
            for (let d = o; d <= c; d++) n.push(d);
          } else n.push(e);
          if ((r = this.trigger("columnSelect", { target: this.name, columns: n })).isCancelled !== true) {
            for (let o = 0; o < this.records.length; o++) i.push({ recid: this.records[o].recid, column: n });
            this.select(i);
          }
          r.finish();
        }
        r.finish();
      }
    }
  }
  columnDblClick(e, t) {
    e = this.trigger("columnDblClick", { target: this.name, field: e, originalEvent: t }), e.isCancelled !== true && e.finish();
  }
  columnContextMenu(e, t) {
    e = this.trigger("columnContextMenu", { target: this.name, field: e, originalEvent: t }), e.isCancelled !== true && (this.show.columnMenu && (ee.show({ type: "check", anchor: document.body, originalEvent: t, items: this.initColumnOnOff() }).then(() => {
      a("#w2overlay-context-menu .w2ui-grid-skip").off(".w2ui-grid").on("click.w2ui-grid", (s) => {
        s.stopPropagation();
      }).on("keypress", (s) => {
        s.keyCode == 13 && (this.skip(s.target.value), this.toolbar.click("w2ui-column-on-off"));
      });
    }).select((s) => {
      var i = s.detail.item.id;
      ["w2ui-stateSave", "w2ui-stateReset"].includes(i) ? this[i.substring(5)]() : i != "w2ui-skip" && this.columnOnOff(s, s.detail.item.id), clearTimeout(this.last.kbd_timer);
    }), clearTimeout(this.last.kbd_timer)), t.preventDefault(), e.finish());
  }
  focus(e) {
    if (e = this.trigger("focus", { target: this.name, originalEvent: e }), e.isCancelled === true) return false;
    this.hasFocus = true, a(this.box).removeClass("w2ui-inactive").find(".w2ui-inactive").removeClass("w2ui-inactive"), setTimeout(() => {
      var t = a(this.box).find(`#grid_${this.name}_focus`).get(0);
      t && document.activeElement != t && t.focus();
    }, 10), e.finish();
  }
  blur(e) {
    if (e = this.trigger("blur", { target: this.name, originalEvent: e }), e.isCancelled === true) return false;
    this.hasFocus = false, a(this.box).addClass("w2ui-inactive").find(".w2ui-selected").addClass("w2ui-inactive"), a(this.box).find(".w2ui-selection").addClass("w2ui-inactive"), e.finish();
  }
  keydown(e) {
    let t = this, s = typeof this.url != "object" ? this.url : this.url.get;
    if (t.keyboard === true) {
      var i = t.trigger("keydown", { target: t.name, originalEvent: e });
      if (i.isCancelled !== true) if (0 < a(this.box).find(".w2ui-message").length) e.keyCode == 27 && this.message();
      else {
        let S = function(_) {
          if (h && I(), !(g.length <= 0)) {
            let y = t.prevRow(m, t.selectType == "row" ? 0 : c[0].column, _);
            if ((y = x || y != null ? y : t.searchData.length == 0 || s ? 0 : t.last.searchIds[0]) != null) {
              if (x && t.multiSelect) {
                if (A()) return;
                if (t.selectType == "row") t.last.sel_ind > y && t.last.sel_ind != w ? t.unselect(t.records[w].recid) : t.select(t.records[y].recid);
                else if (t.last.sel_ind > y && t.last.sel_ind != w) {
                  y = w;
                  var E = [];
                  for (let T = 0; T < u.length; T++) E.push({ recid: t.records[y].recid, column: u[T] });
                  t.unselect(E);
                } else {
                  var C = [];
                  for (let T = 0; T < u.length; T++) C.push({ recid: t.records[y].recid, column: u[T] });
                  t.select(C);
                }
              } else t.selectNone(true), t.click({ recid: t.records[y].recid, column: u[0] }, e);
              t.scrollIntoView(y, null, true, _ != 1), e.preventDefault && e.preventDefault();
            } else x || t.selectNone(true);
          }
        }, $ = function(_) {
          if (h && I(), !(g.length <= 0)) {
            let y = t.nextRow(w, t.selectType == "row" ? 0 : c[0].column, _);
            if ((y = x || y != null ? y : t.searchData.length == 0 || s ? t.records.length - 1 : t.last.searchIds[t.last.searchIds.length - 1]) != null) {
              if (x && t.multiSelect) {
                if (A()) return;
                if (t.selectType == "row") t.last.sel_ind < y && t.last.sel_ind != m ? t.unselect(t.records[m].recid) : t.select(t.records[y].recid);
                else if (t.last.sel_ind < y && t.last.sel_ind != m) {
                  y = m;
                  var E = [];
                  for (let T = 0; T < u.length; T++) E.push({ recid: t.records[y].recid, column: u[T] });
                  t.unselect(E);
                } else {
                  var C = [];
                  for (let T = 0; T < u.length; T++) C.push({ recid: t.records[y].recid, column: u[T] });
                  t.select(C);
                }
              } else t.selectNone(true), t.click({ recid: t.records[y].recid, column: u[0] }, e);
              t.scrollIntoView(y, null, true, _ != 1), v = true;
            } else x || t.selectNone(true);
          }
        }, I = function() {
          if (t.records && t.records.length !== 0) {
            let _ = Math.floor(o[0].scrollTop / t.recordHeight) + 1;
            (!t.records[_] || _ < 2) && (_ = 0), t.records[_] !== void 0 && t.select({ recid: t.records[_].recid, column: 0 });
          }
        }, A = function() {
          if (t.last.sel_type == "click") {
            if (t.selectType == "row") return t.last.sel_type = "key", 1 < c.length && (c.splice(c.indexOf(t.records[t.last.sel_ind].recid), 1), t.unselect(c), 1);
            if (t.last.sel_type = "key", 1 < c.length) {
              for (let _ = 0; _ < c.length; _++) if (c[_].recid == t.last.sel_recid && c[_].column == t.last.sel_col) {
                c.splice(_, 1);
                break;
              }
              return t.unselect(c), 1;
            }
          }
        }, h = false, o = a(t.box).find("#grid_" + t.name + "_records"), c = t.getSelection(), d = (c.length === 0 && (h = true), c[0] || null), u = [], f = c[c.length - 1];
        if (typeof d == "object" && d != null) {
          d = c[0].recid, u = [];
          let _ = 0;
          for (; !(!c[_] || c[_].recid != d); ) u.push(c[_].column), _++;
          f = c[c.length - 1].recid;
        }
        let m = t.get(d, true), w = t.get(f, true), g = a(t.box).find(`#grid_${t.name}_rec_` + (m != null ? p.escapeId(t.records[m].recid) : "none"));
        var n, r = Math.floor(o[0].clientHeight / t.recordHeight);
        let v = false, k = e.keyCode, x = e.shiftKey;
        switch (k) {
          case 8:
          case 46:
            t.delete(), v = true, e.stopPropagation();
            break;
          case 27:
            t.selectNone(), v = true;
            break;
          case 65:
            (e.metaKey || e.ctrlKey) && (t.selectAll(), v = true);
            break;
          case 13:
            if (this.selectType == "row" && t.show.expandColumn === true) {
              if (g.length <= 0) break;
              t.toggle(d, e), v = true;
            } else {
              for (let _ = 0; _ < this.columns.length; _++) if (this.getCellEditable(m, _)) {
                u.push(parseInt(_));
                break;
              }
              0 < (u = this.selectType == "row" && this.last._edit && this.last._edit.column ? [this.last._edit.column] : u).length && (t.editField(d, this.last.editColumn || u[0], null, e), v = true);
            }
            break;
          case 37:
            (function() {
              if (h) I();
              else {
                if (t.selectType == "row") {
                  if (g.length <= 0) return;
                  var _ = t.records[m].w2ui || {};
                  !_ || _.parent_recid == null || Array.isArray(_.children) && _.children.length !== 0 && _.expanded ? t.collapse(d, e) : (t.unselect(d), t.collapse(_.parent_recid, e), t.select(_.parent_recid));
                } else {
                  let T = t.prevCell(m, u[0]);
                  if (T = (T == null ? void 0 : T.index) != m ? null : T == null ? void 0 : T.colIndex, x || T != null || (t.selectNone(true), T = 0), T != null) if (x && t.multiSelect) {
                    if (A()) return;
                    var E = [], C = [], y = [];
                    if (u.indexOf(t.last.sel_col) === 0 && 1 < u.length) {
                      for (let M = 0; M < c.length; M++) E.indexOf(c[M].recid) == -1 && E.push(c[M].recid), y.push({ recid: c[M].recid, column: u[u.length - 1] });
                      t.unselect(y), t.scrollIntoView(m, u[u.length - 1], true);
                    } else {
                      for (let M = 0; M < c.length; M++) E.indexOf(c[M].recid) == -1 && E.push(c[M].recid), C.push({ recid: c[M].recid, column: T });
                      t.select(C), t.scrollIntoView(m, T, true);
                    }
                  } else t.click({ recid: d, column: T }, e), t.scrollIntoView(m, T, true);
                  else x || t.selectNone(true);
                }
                v = true;
              }
            })();
            break;
          case 39:
            (function() {
              if (h) I();
              else {
                if (t.selectType == "row") {
                  if (g.length <= 0) return;
                  t.expand(d, e);
                } else {
                  let y = t.nextCell(m, u[u.length - 1]);
                  if (y = y.index != m ? null : y.colIndex, x || y != null || (t.selectNone(true), y = t.columns.length - 1), y != null) if (x && k == 39 && t.multiSelect) {
                    if (A()) return;
                    var _ = [], E = [], C = [];
                    if (u.indexOf(t.last.sel_col) == u.length - 1 && 1 < u.length) {
                      for (let T = 0; T < c.length; T++) _.indexOf(c[T].recid) == -1 && _.push(c[T].recid), C.push({ recid: c[T].recid, column: u[0] });
                      t.unselect(C), t.scrollIntoView(m, u[0], true);
                    } else {
                      for (let T = 0; T < c.length; T++) _.indexOf(c[T].recid) == -1 && _.push(c[T].recid), E.push({ recid: c[T].recid, column: y });
                      t.select(E), t.scrollIntoView(m, y, true);
                    }
                  } else t.click({ recid: d, column: y }, e), t.scrollIntoView(m, y, true);
                  else x || t.selectNone(true);
                }
                v = true;
              }
            })();
            break;
          case 33:
            S(r);
            break;
          case 34:
            $(r);
            break;
          case 35:
            $(-1);
            break;
          case 36:
            S(-1);
            break;
          case 38:
            S(e.metaKey || e.ctrlKey ? -1 : 1);
            break;
          case 40:
            $(e.metaKey || e.ctrlKey ? -1 : 1);
            break;
          case 17:
          case 91:
            h || p.isSafari && (t.last.copy_event = t.copy(false, e), (n = a(t.box).find("#grid_" + t.name + "_focus")).val(t.last.copy_event.detail.text), n[0].select());
            break;
          case 67:
            (e.metaKey || e.ctrlKey) && (p.isSafari || (t.last.copy_event = t.copy(false, e), (n = a(t.box).find("#grid_" + t.name + "_focus")).val(t.last.copy_event.detail.text), n[0].select()), t.copy(t.last.copy_event, e));
            break;
          case 88:
            h || (e.ctrlKey || e.metaKey) && (p.isSafari || (t.last.copy_event = t.copy(false, e), (n = a(t.box).find("#grid_" + t.name + "_focus")).val(t.last.copy_event.detail.text), n[0].select()), t.copy(t.last.copy_event, e));
        }
        var l = [32, 187, 189, 192, 219, 220, 221, 186, 222, 188, 190, 191];
        for (let _ = 48; _ <= 111; _++) l.push(_);
        l.indexOf(k) == -1 || e.ctrlKey || e.metaKey || v || (u.length === 0 && u.push(0), v = false, setTimeout(() => {
          var _ = a(t.box).find("#grid_" + t.name + "_focus"), E = _.val();
          _.val(""), t.editField(d, u[0], E, e);
        }, 1)), v && e.preventDefault && e.preventDefault(), i.finish();
      }
    }
  }
  scrollIntoView(e, t, s, i) {
    let n = this.records.length;
    if ((n = this.searchData.length == 0 || this.url ? n : this.last.searchIds.length) !== 0) {
      if (e == null) {
        var r = this.getSelection();
        if (r.length === 0) return;
        p.isPlainObject(r[0]) ? (e = r[0].index, t = r[0].column) : e = this.get(r[0], true);
      }
      var r = a(this.box).find(`#grid_${this.name}_records`), l = r[0].clientWidth, h = r[0].clientHeight, o = r[0].scrollTop, c = r[0].scrollLeft, d = this.last.searchIds.length;
      if (0 < d && (e = this.last.searchIds.indexOf(e)), r.css({ "scroll-behavior": s ? "auto" : "smooth" }), h < this.recordHeight * (0 < d ? d : n) && 0 < r.length && (d = (s = Math.floor(o / this.recordHeight)) + Math.floor(h / this.recordHeight), e == s && r.prop("scrollTop", o - h / 1.3), e == d && r.prop("scrollTop", o + h / 1.3), (e < s || d < e) && r.prop("scrollTop", (e - 1) * this.recordHeight), i === true) && r.prop("scrollTop", e * this.recordHeight), t != null) {
        let f = 0, m = 0;
        o = p.scrollBarSize();
        for (let w = 0; w <= t; w++) {
          var u = this.columns[w];
          u.frozen || u.hidden || (f = m, m += parseInt(u.sizeCalculated));
        }
        l < m - c ? r.prop("scrollLeft", f - o) : f < c && r.prop("scrollLeft", m - l + 2 * o);
      }
    }
  }
  scrollToColumn(e) {
    if (e != null) {
      let s = 0, i = false;
      for (let n = 0; n < this.columns.length; n++) {
        var t = this.columns[n];
        if (t.field == e) {
          i = true;
          break;
        }
        t.frozen || t.hidden || (t = parseInt(t.sizeCalculated || t.size), s += t);
      }
      i && (this.last.scrollLeft = s + 1, this.scroll());
    }
  }
  dblClick(e, t) {
    let s = null;
    if (typeof e == "object" && e !== null && (s = e.column, e = e.recid), t == null && (t = {}), s == null && t.target) {
      let l = t.target;
      l.tagName.toUpperCase() != "TD" && (l = a(l).closest("td")[0]), s = parseInt(a(l).attr("col"));
    }
    var i = this.get(e, true), n = this.records[i], r = this.trigger("dblClick", { target: this.name, recid: e, column: s, originalEvent: t });
    r.isCancelled !== true && (this.selectNone(true), this.getCellEditable(i, s) ? this.editField(e, s, null, t) : (this.select({ recid: e, column: s }), (this.show.expandColumn || n && n.w2ui && Array.isArray(n.w2ui.children)) && this.toggle(e)), r.finish());
  }
  showContextMenu(e, t, s) {
    if (this.last.userSelect != "text") {
      (s = s ?? { offsetX: 0, offsetY: 0, target: a(this.box).find(`#grid_${this.name}_rec_` + e)[0] }).offsetX == null && (s.offsetX = s.layerX - s.target.offsetLeft, s.offsetY = s.layerY - s.target.offsetTop), p.isFloat(e) && (e = parseFloat(e));
      var i = this.getSelection();
      if (this.selectType == "row") i.indexOf(e) == -1 && this.click(e);
      else {
        let r = false;
        for (let l = 0; l < i.length; l++) i[l].recid != e && i[l].column != t || (r = true);
        r || e == null || this.click({ recid: e, column: t }), r || t == null || this.columnClick(this.columns[t].field, s);
      }
      var n = this.trigger("contextMenu", { target: this.name, originalEvent: s, recid: e, column: t });
      n.isCancelled !== true && (0 < this.contextMenu.length && (ee.show({ anchor: document.body, originalEvent: s, items: this.contextMenu }).select((r) => {
        clearTimeout(this.last.kbd_timer), this.contextMenuClick(e, t, r);
      }), clearTimeout(this.last.kbd_timer)), s.preventDefault(), n.finish());
    }
  }
  contextMenuClick(e, t, s) {
    e = this.trigger("contextMenuClick", { target: this.name, recid: e, column: t, originalEvent: s.detail.originalEvent, menuEvent: s, menuIndex: s.detail.index, menuItem: s.detail.item }), e.isCancelled !== true && e.finish();
  }
  toggle(e) {
    var t = this.get(e);
    if (t != null) return t.w2ui = t.w2ui ?? {}, t.w2ui.expanded === true ? this.collapse(e) : this.expand(e);
  }
  expand(e, t) {
    var _a;
    var s = this.get(e, true);
    let i = this.records[s];
    i.w2ui = i.w2ui ?? {};
    var n = p.escapeId(e), r = i.w2ui.children;
    let l;
    if (Array.isArray(r)) {
      if (i.w2ui.expanded === true || r.length === 0 || (l = this.trigger("expand", { target: this.name, recid: e })).isCancelled === true) return false;
      i.w2ui.expanded = true, r.forEach((h) => {
        h.w2ui = h.w2ui ?? {}, h.w2ui.parent_recid = i.recid, h.w2ui.children == null && (h.w2ui.children = []);
      }), this.records.splice.apply(this.records, [s + 1, 0].concat(r)), this.total !== -1 && (this.total += r.length), (typeof this.url != "object" ? this.url : this.url.get) || (this.localSort(true, true), 0 < this.searchData.length && this.localSearch(true)), t !== true && this.refresh(), l.finish();
    } else {
      if (0 < a(this.box).find("#grid_" + this.name + "_rec_" + n + "_expanded_row").length || this.show.expandColumn !== true || i.w2ui.expanded == "none") return false;
      if (a(this.box).find("#grid_" + this.name + "_rec_" + n).after(`<tr id="grid_${this.name}_rec_${e}_expanded_row" class="w2ui-expanded-row">
                    <td colspan="100" class="w2ui-expanded2">
                        <div id="grid_${this.name}_rec_${e}_expanded"></div>
                    </td>
                    <td class="w2ui-grid-data-last"></td>
                </tr>`), a(this.box).find("#grid_" + this.name + "_frec_" + n).after(`<tr id="grid_${this.name}_frec_${e}_expanded_row" class="w2ui-expanded-row">
                    ${this.show.lineNumbers ? '<td class="w2ui-col-number"></td>' : ""}
                    <td class="w2ui-grid-data w2ui-expanded1" colspan="100">
                       <div id="grid_${this.name}_frec_${e}_expanded"></div>
                    </td>
                </tr>`), (l = this.trigger("expand", { target: this.name, recid: e, box_id: "grid_" + this.name + "_rec_" + e + "_expanded", fbox_id: "grid_" + this.name + "_frec_" + e + "_expanded" })).isCancelled === true) return a(this.box).find("#grid_" + this.name + "_rec_" + n + "_expanded_row").remove(), a(this.box).find("#grid_" + this.name + "_frec_" + n + "_expanded_row").remove(), false;
      s = a(this.box).find("#grid_" + this.name + "_rec_" + e + "_expanded"), r = a(this.box).find("#grid_" + this.name + "_frec_" + e + "_expanded"), t = ((_a = s.find(":scope div:first-child")[0]) == null ? void 0 : _a.clientHeight) ?? 50, s[0].clientHeight < t && s.css({ height: t + "px" }), r[0].clientHeight < t && r.css({ height: t + "px" }), a(this.box).find("#grid_" + this.name + "_rec_" + n).attr("expanded", "yes").addClass("w2ui-expanded"), a(this.box).find("#grid_" + this.name + "_frec_" + n).attr("expanded", "yes").addClass("w2ui-expanded"), a(this.box).find("#grid_" + this.name + "_cell_" + this.get(e, true) + "_expand div").html("-"), i.w2ui.expanded = true, l.finish(), this.resizeRecords();
    }
    return true;
  }
  collapse(e, t) {
    var s = this.get(e, true);
    let i = this.records[s], n = (i.w2ui = i.w2ui || {}, p.escapeId(e));
    var r = i.w2ui.children;
    let l;
    if (Array.isArray(r)) {
      if (i.w2ui.expanded !== true || (l = this.trigger("collapse", { target: this.name, recid: e })).isCancelled === true) return false;
      (function c(d) {
        d.w2ui.expanded = false;
        for (let u = 0; u < d.w2ui.children.length; u++) {
          let f = d.w2ui.children[u];
          f.w2ui.expanded && c(f);
        }
      })(i);
      var h = [];
      for (let c = i; c != null; c = this.get(c.w2ui.parent_recid)) h.push(c.w2ui.parent_recid);
      r = s + 1;
      let o = r;
      for (; !(this.records.length <= o + 1 || this.records[o + 1].w2ui == null || 0 <= h.indexOf(this.records[o + 1].w2ui.parent_recid)); ) o++;
      this.records.splice(r, o - r + 1), this.total !== -1 && (this.total -= o - r + 1), (typeof this.url != "object" ? this.url : this.url.get) || 0 < this.searchData.length && this.localSearch(true), t !== true && this.refresh(), l.finish();
    } else {
      if (a(this.box).find("#grid_" + this.name + "_rec_" + n + "_expanded_row").length === 0 || this.show.expandColumn !== true || (l = this.trigger("collapse", { target: this.name, recid: e, box_id: "grid_" + this.name + "_rec_" + e + "_expanded", fbox_id: "grid_" + this.name + "_frec_" + e + "_expanded" })).isCancelled === true) return false;
      a(this.box).find("#grid_" + this.name + "_rec_" + n).removeAttr("expanded").removeClass("w2ui-expanded"), a(this.box).find("#grid_" + this.name + "_frec_" + n).removeAttr("expanded").removeClass("w2ui-expanded"), a(this.box).find("#grid_" + this.name + "_cell_" + this.get(e, true) + "_expand div").html("+"), a(this.box).find("#grid_" + this.name + "_rec_" + n + "_expanded").css("height", "0px"), a(this.box).find("#grid_" + this.name + "_frec_" + n + "_expanded").css("height", "0px"), setTimeout(() => {
        a(this.box).find("#grid_" + this.name + "_rec_" + n + "_expanded_row").remove(), a(this.box).find("#grid_" + this.name + "_frec_" + n + "_expanded_row").remove(), i.w2ui.expanded = false, l.finish(), this.resizeRecords();
      }, 300);
    }
    return true;
  }
  sort(e, t, s) {
    var i = this.trigger("sort", { target: this.name, field: e, direction: t, multiField: s });
    if (i.isCancelled !== true) {
      if (e != null) {
        let n = this.sortData.length;
        for (let r = 0; r < this.sortData.length; r++) if (this.sortData[r].field == e) {
          n = r;
          break;
        }
        t == null && (t = this.sortData[n] != null && (this.sortData[n].direction == null && (this.sortData[n].direction = ""), this.sortData[n].direction.toLowerCase() === "asc") ? "desc" : "asc"), this.multiSort === false && (this.sortData = [], n = 0), s != 1 && (this.sortData = [], n = 0), this.sortData[n] == null && (this.sortData[n] = {}), this.sortData[n].field = e, this.sortData[n].direction = t;
      } else this.sortData = [];
      (typeof this.url != "object" ? this.url : this.url.get) ? (i.finish({ direction: t }), this.last.fetch.offset = 0, this.reload()) : (this.localSort(false, true), 0 < this.searchData.length && this.localSearch(true), this.last.scrollTop = 0, a(this.box).find(`#grid_${this.name}_records`).prop("scrollTop", 0), i.finish({ direction: t }), this.refresh());
    }
  }
  copy(e, t) {
    if (p.isPlainObject(e)) return e.finish(), e.text;
    var s = this.getSelection();
    if (s.length === 0) return "";
    let i = "";
    if (typeof s[0] == "object") {
      let c = s[0].column, d = s[0].column;
      var n = [];
      for (let u = 0; u < s.length; u++) s[u].column < c && (c = s[u].column), s[u].column > d && (d = s[u].column), n.indexOf(s[u].index) == -1 && n.push(s[u].index);
      n.sort((u, f) => u - f);
      for (let u = 0; u < n.length; u++) {
        var r = n[u];
        for (let f = c; f <= d; f++) this.columns[f].hidden !== true && (i += this.getCellCopy(r, f) + "	");
        i = i.substr(0, i.length - 1), i += `
`;
      }
    } else {
      for (let c = 0; c < this.columns.length; c++) {
        var l = this.columns[c];
        if (l.hidden !== true) {
          let d = l.text || l.field;
          l.text && l.text.length < 3 && l.tooltip && (d = l.tooltip), i += '"' + p.stripTags(d) + '"	';
        }
      }
      i = i.substr(0, i.length - 1), i += `
`;
      for (let c = 0; c < s.length; c++) {
        var h = this.get(s[c], true);
        for (let d = 0; d < this.columns.length; d++) this.columns[d].hidden !== true && (i += '"' + this.getCellCopy(h, d) + '"	');
        i = i.substr(0, i.length - 1), i += `
`;
      }
    }
    i = i.substr(0, i.length - 1);
    let o;
    return e == null ? (o = this.trigger("copy", { target: this.name, text: i, cut: t.keyCode == 88, originalEvent: t })).isCancelled === true ? "" : (i = o.detail.text, o.finish(), i) : e === false ? (o = this.trigger("copy", { target: this.name, text: i, cut: t.keyCode == 88, originalEvent: t })).isCancelled === true ? "" : (i = o.detail.text, o) : void 0;
  }
  getCellCopy(e, t) {
    return p.stripTags(this.getCellHTML(e, t));
  }
  paste(e, o) {
    var s = this.getSelection();
    let i = this.get(s[0].recid, true);
    var n, r, l, h = s[0].column, o = this.trigger("paste", { target: this.name, text: e, index: i, column: h, originalEvent: o });
    if (o.isCancelled !== true) {
      if (e = o.detail.text, this.selectType == "row" || s.length === 0) console.log("ERROR: You can paste only if grid.selectType = 'cell' and when at least one cell selected.");
      else {
        if (typeof e != "object") {
          var c = [];
          e = e.split(`
`);
          for (let m = 0; m < e.length; m++) {
            var d = e[m].split("	");
            let w = 0;
            var u = this.records[i], f = [];
            if (u != null) {
              for (let g = 0; g < d.length; g++) this.columns[h + w] && (n = u, r = this.columns[h + w].field, l = d[g], n.w2ui = n.w2ui ?? {}, n.w2ui.changes = n.w2ui.changes || {}, n.w2ui.changes[r] = l, f.push(h + w), w++);
              for (let g = 0; g < f.length; g++) c.push({ recid: u.recid, column: f[g] });
              i++;
            }
          }
          this.selectNone(true), this.select(c);
        } else this.selectNone(true), this.select([{ recid: this.records[i], column: h }]);
        this.refresh();
      }
      o.finish();
    }
  }
  resize() {
    var e = Date.now();
    if (this.box && a(this.box).attr("name") == this.name) {
      var t = this.trigger("resize", { target: this.name });
      if (t.isCancelled !== true) return this.resizeBoxes(), this.resizeRecords(), t.finish(), Date.now() - e;
    }
  }
  update({ cells: e, fullCellRefresh: t, ignoreColumns: s } = {}) {
    var i = Date.now();
    let n = this;
    if (this.box == null) return 0;
    if (Array.isArray(e)) for (let d = 0; d < e.length; d++) {
      var r = e[d].index, l = e[d].column;
      if (!(r < 0)) if (r == null || l == null) console.log("ERROR: Wrong argument for grid.update({ cells }), cells should be [{ index: X, column: Y }, ...]");
      else {
        var h = this.records[r] ?? {};
        h.w2ui = h.w2ui ?? {}, h.w2ui._update = h.w2ui._update ?? { cells: [] };
        let u = h.w2ui._update.row1, f = h.w2ui._update.row2;
        u != null && u.isConnected && f != null && f.isColSelected || (u = this.box.querySelector(`#grid_${this.name}_rec_` + p.escapeId(h.recid)), f = this.box.querySelector(`#grid_${this.name}_frec_` + p.escapeId(h.recid)), h.w2ui._update.row1 = u, h.w2ui._update.row2 = f), c(h, u, f, r, l);
      }
    }
    else for (let d = this.last.range_start - 1; d <= this.last.range_end; d++) {
      let u = d;
      u = 0 < this.last.searchIds.length ? this.last.searchIds[d] : d;
      var o = this.records[u];
      if (!(u < 0 || o == null)) {
        o.w2ui = o.w2ui ?? {}, o.w2ui._update = o.w2ui._update ?? { cells: [] };
        let f = o.w2ui._update.row1, m = o.w2ui._update.row2;
        f != null && f.isConnected && m != null && m.isColSelected || (f = this.box.querySelector(`#grid_${this.name}_rec_` + p.escapeId(o.recid)), m = this.box.querySelector(`#grid_${this.name}_frec_` + p.escapeId(o.recid)), o.w2ui._update.row1 = f, o.w2ui._update.row2 = m);
        for (let w = 0; w < this.columns.length; w++) c(o, f, m, u, w);
      }
    }
    return Date.now() - i;
    function c(d, u, f, m, w) {
      var g = n.columns[w];
      if (!Array.isArray(s) || !s.includes(w) && !s.includes(g.field)) {
        let S = d.w2ui._update.cells[w];
        if (S != null && S.isConnected || (S = n.box.querySelector(`#grid_${n.name}_data_${m}_` + w), d.w2ui._update.cells[w] = S), S != null) {
          if (t) a(S).replace(n.getCellHTML(m, w, false)), S = n.box.querySelector(`#grid_${n.name}_data_${m}_` + w), d.w2ui._update.cells[w] = S;
          else {
            var v = S.children[0], { value: m, style: k, className: x } = n.getCellValue(m, w, false, true);
            if (v.innerHTML != m && (v.innerHTML = m), k != "" && S.style.cssText != k && (S.style.cssText = k), x != "") {
              let I = ["w2ui-grid-data"], A = [];
              v = x.split(" ").filter((_) => !!_), S.classList.forEach((_) => {
                I.includes(_) || A.push(_);
              }), S.classList.remove(...A), S.classList.add(...v);
            }
          }
          if (n.columns[w].style && n.columns[w].style != S.style.cssText && (S.style.cssText = n.columns[w].style ?? ""), d.w2ui.class != null) {
            if (typeof d.w2ui.class == "string") {
              let $ = ["w2ui-odd", "w2ui-even", "w2ui-record"], I = [];
              m = d.w2ui.class.split(" ").filter((A) => !!A), u && f && (u.classList.forEach((A) => {
                $.includes(A) || I.push(A);
              }), u.classList.remove(...I), u.classList.add(...m), f.classList.remove(...I), f.classList.add(...m));
            }
            if (p.isPlainObject(d.w2ui.class) && typeof d.w2ui.class[g.field] == "string") {
              let $ = ["w2ui-grid-data"], I = [];
              k = d.w2ui.class[g.field].split(" ").filter((A) => !!A), S.classList.forEach((A) => {
                $.includes(A) || I.push(A);
              }), S.classList.remove(...I), S.classList.add(...k);
            }
          }
          d.w2ui.style != null && (u && f && typeof d.w2ui.style == "string" && u.style.cssText !== d.w2ui.style && (u.style.cssText = "height: " + n.recordHeight + "px;" + d.w2ui.style, u.setAttribute("custom_style", d.w2ui.style), f.style.cssText = "height: " + n.recordHeight + "px;" + d.w2ui.style, f.setAttribute("custom_style", d.w2ui.style)), p.isPlainObject(d.w2ui.style)) && typeof d.w2ui.style[g.field] == "string" && S.style.cssText !== d.w2ui.style[g.field] && (S.style.cssText = d.w2ui.style[g.field]);
        }
      }
    }
  }
  refreshCell(n, i) {
    var s = this.get(n, true), i = this.getColumn(i, true), n = !this.records[s] || this.records[s].recid != n, r = a(this.box).find(`${n ? ".w2ui-grid-summary " : ""}#grid_${this.name}_data_${s}_` + i);
    return r.length != 0 && (r.replace(this.getCellHTML(s, i, n)), true);
  }
  refreshRow(e, t = null) {
    let s = a(this.box).find("#grid_" + this.name + "_frec_" + p.escapeId(e)), i = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(e));
    if (0 < s.length) {
      t == null && (t = this.get(e, true));
      var n = s.attr("line"), r = !this.records[t] || this.records[t].recid != e, l = typeof this.url != "object" ? this.url : this.url.get;
      if (0 < this.searchData.length && !l) for (let o = 0; o < this.last.searchIds.length; o++) this.last.searchIds[o] == t && (t = o);
      l = this.getRecordHTML(t, n, r), s.replace(l[0]), i.replace(l[1]);
      let h = this.records[t].w2ui ? this.records[t].w2ui.style : "";
      return typeof h == "string" && (s = a(this.box).find("#grid_" + this.name + "_frec_" + p.escapeId(e)), i = a(this.box).find("#grid_" + this.name + "_rec_" + p.escapeId(e)), s.attr("custom_style", h), i.attr("custom_style", h), s.hasClass("w2ui-selected") && (h = h.replace("background-color", "none")), s[0].style.cssText = "height: " + this.recordHeight + "px;" + h, i[0].style.cssText = "height: " + this.recordHeight + "px;" + h), r && this.resize(), true;
    }
    return false;
  }
  refresh() {
    var e = Date.now(), t = typeof this.url != "object" ? this.url : this.url.get;
    if (this.total <= 0 && !t && this.searchData.length === 0 && (this.total = this.records.length), this.box && (t = this.trigger("refresh", { target: this.name }), t.isCancelled !== true)) {
      this.show.header ? a(this.box).find(`#grid_${this.name}_header`).html(p.lang(this.header) + "&#160;").show() : a(this.box).find(`#grid_${this.name}_header`).hide(), this.show.toolbar ? a(this.box).find("#grid_" + this.name + "_toolbar").show() : a(this.box).find("#grid_" + this.name + "_toolbar").hide(), this.searchClose();
      var s = a(this.box).find("#grid_" + this.name + "_search_all");
      !this.multiSearch && this.last.field == "all" && 0 < this.searches.length && (this.last.field = this.searches[0].field, this.last.label = this.searches[0].label);
      for (let l = 0; l < this.searches.length; l++) this.searches[l].field == this.last.field && (this.last.label = this.searches[l].label);
      if (this.last.multi ? s.attr("placeholder", "[" + p.lang("Multiple Fields") + "]") : s.attr("placeholder", p.lang("Search") + " " + p.lang(this.last.label, true)), s.val() != this.last.search) {
        let l = this.last.search;
        var i = s._w2field;
        i && (l = i.format(l)), s.val(l);
      }
      this.refreshSearch(), this.refreshBody(), this.show.footer ? a(this.box).find(`#grid_${this.name}_footer`).html(this.getFooterHTML()).show() : a(this.box).find(`#grid_${this.name}_footer`).hide();
      var i = this.last.selection, s = 0 < this.records.length && i.indexes.length == this.records.length, i = 0 < i.indexes.length && this.searchData.length !== 0 && i.indexes.length == this.last.searchIds.length, n = (s || i ? a(this.box).find("#grid_" + this.name + "_check_all").prop("checked", true) : a(this.box).find("#grid_" + this.name + "_check_all").prop("checked", false), this.status(), this.find({ "w2ui.expanded": true }, true, true));
      for (let l = 0; l < n.length; l++) {
        var r = this.records[n[l]].w2ui;
        r && !Array.isArray(r.children) && (r.expanded = false);
      }
      return this.markSearch && setTimeout(() => {
        var l = [];
        for (let c = 0; c < this.searchData.length; c++) {
          var h = this.searchData[c], o = this.getSearch(h.field);
          o && !o.hidden && (o = this.getColumn(h.field, true), l.push({ field: h.field, search: h.value, col: o }));
        }
        0 < l.length && l.forEach((c) => {
          var d = a(this.box).find('td[col="' + c.col + '"]:not(.w2ui-head)');
          p.marker(d, c.search);
        });
      }, 50), this.updateToolbar(this.last.selection), t.finish(), this.resize(), this.addRange("selection"), setTimeout(() => {
        this.resize(), this.scroll();
      }, 1), this.reorderColumns && !this.last.columnDrag ? this.last.columnDrag = this.initColumnDrag() : !this.reorderColumns && this.last.columnDrag && this.last.columnDrag.remove(), Date.now() - e;
    }
  }
  refreshSearch() {
    if (this.multiSearch && 0 < this.searchData.length) {
      a(this.box).find(".w2ui-grid-searches").length == 0 && a(this.box).find(".w2ui-grid-toolbar").css("height", this.last.toolbar_height + 35 + "px").append(`<div id="grid_${this.name}_searches" class="w2ui-grid-searches"></div>`);
      let e = `
                <span id="grid_${this.name}_search_logic" class="w2ui-grid-search-logic"></span>
                <div class="grid-search-line"></div>`;
      this.searchData.forEach((t, s) => {
        var i = this.getSearch(t.field, true), n = this.searches[i];
        let r;
        if (r = Array.isArray(t.value) ? `<span class="grid-search-count">${t.value.length}</span>` : n && n.type == "list" && t.text && t.text !== t.value ? ": " + t.text : ": " + t.value, n && n.type == "date") if (t.operator == "between") {
          let l = t.value[0], h = t.value[1];
          Number(l) === l && (l = p.formatDate(l)), Number(h) === h && (h = p.formatDate(h)), r = `: ${l} - ` + h;
        } else {
          let l = t.value, h = (Number(l) == l && (l = p.formatDate(l)), t.operator);
          (h = (h = h == "more" ? "since" : h) == "less" ? "before" : h).substr(0, 5) == "more:" && (h = "since"), r = `: ${h} ` + l;
        }
        e += `<span class="w2ui-action" data-click="searchFieldTooltip|${i}|${s}|this">
                    ${n ? n.label : ""}
                    ${r}
                    <span class="icon-chevron-down"></span>
                </span>`;
      }), e += `
                ${this.show.searchSave ? `<div class="grid-search-line"></div>
                       <button class="w2ui-btn grid-search-btn" data-click="searchSave">${p.lang("Save")}</button>
                      ` : ""}
                <button class="w2ui-btn grid-search-btn btn-remove"
                    data-click="searchReset">X</button>
            `, a(this.box).find(`#grid_${this.name}_searches`).html(e), a(this.box).find(`#grid_${this.name}_search_logic`).html(p.lang(this.last.logic == "AND" ? "All" : "Any"));
    } else a(this.box).find(".w2ui-grid-toolbar").css("height", this.last.toolbar_height + "px").find(".w2ui-grid-searches").remove();
    this.searchSelected ? (a(this.box).find(`#grid_${this.name}_search_all`).val(" ").prop("readOnly", true), a(this.box).find(`#grid_${this.name}_search_name`).show().find(".name-text").html(this.searchSelected.text)) : (a(this.box).find(`#grid_${this.name}_search_all`).prop("readOnly", false), a(this.box).find(`#grid_${this.name}_search_name`).hide().find(".name-text").html("")), p.bindEvents(a(this.box).find(`#grid_${this.name}_searches .w2ui-action, #grid_${this.name}_searches button`), this);
  }
  refreshBody() {
    this.scroll();
    var t = this.getRecordsHTML(), e = this.getColumnsHTML(), t = '<div id="grid_' + this.name + '_frecords" class="w2ui-grid-frecords" style="margin-bottom: ' + (p.scrollBarSize() - 1) + 'px;">' + t[0] + '</div><div id="grid_' + this.name + '_records" class="w2ui-grid-records">' + t[1] + '</div><div id="grid_' + this.name + '_scroll1" class="w2ui-grid-scroll1" style="height: ' + p.scrollBarSize() + 'px"></div><div id="grid_' + this.name + '_fcolumns" class="w2ui-grid-fcolumns">    <table><tbody>' + e[0] + '</tbody></table></div><div id="grid_' + this.name + '_columns" class="w2ui-grid-columns">    <table><tbody>' + e[1] + `</tbody></table></div><div class="w2ui-intersection-marker" style="display: none; height: ${this.recordHeight - 5}px">
               <div class="top-marker"></div>
               <div class="bottom-marker"></div>
            </div>`;
    let s = a(this.box).find(`#grid_${this.name}_body`, this.box).html(t);
    e = a(this.box).find(`#grid_${this.name}_records`, this.box), t = a(this.box).find(`#grid_${this.name}_frecords`, this.box), this.selectType == "row" && (e.on("mouseover mouseout", { delegate: "tr" }, (i) => {
      var n = a(i.delegate).attr("recid");
      a(this.box).find(`#grid_${this.name}_frec_` + p.escapeId(n)).toggleClass("w2ui-record-hover", i.type == "mouseover");
    }), t.on("mouseover mouseout", { delegate: "tr" }, (i) => {
      var n = a(i.delegate).attr("recid");
      a(this.box).find(`#grid_${this.name}_rec_` + p.escapeId(n)).toggleClass("w2ui-record-hover", i.type == "mouseover");
    })), p.isIOS ? e.append(t).on("click", { delegate: "tr" }, (i) => {
      var n = a(i.delegate).attr("recid");
      this.dblClick(n, i);
    }) : e.add(t).on("click", { delegate: "tr" }, (i) => {
      var n = a(i.delegate).attr("recid");
      n != "-none-" && this.click(n, i);
    }).on("contextmenu", { delegate: "tr" }, (i) => {
      var n = a(i.delegate).attr("recid"), r = a(i.target).closest("td"), r = parseInt(r.attr("col") ?? -1);
      this.showContextMenu(n, r, i);
    }).on("mouseover", { delegate: "tr" }, (i) => {
      this.last.rec_out = false;
      let n = a(i.delegate).attr("index"), r = a(i.delegate).attr("recid");
      n !== this.last.rec_over && (this.last.rec_over = n, setTimeout(() => {
        delete this.last.rec_out, this.trigger("mouseEnter", { target: this.name, originalEvent: i, index: n, recid: r }).finish();
      }));
    }).on("mouseout", { delegate: "tr" }, (i) => {
      let n = a(i.delegate).attr("index"), r = a(i.delegate).attr("recid");
      this.last.rec_out = true, setTimeout(() => {
        let l = () => {
          this.trigger("mouseLeave", { target: this.name, originalEvent: i, index: n, recid: r }).finish();
        };
        n !== this.last.rec_over && l(), setTimeout(() => {
          this.last.rec_out && (delete this.last.rec_out, delete this.last.rec_over, l());
        });
      });
    }), s.data("scroll", { lastDelta: 0, lastTime: 0 }).find(".w2ui-grid-frecords").on("mousewheel DOMMouseScroll ", (l) => {
      l.preventDefault();
      var n = s.data("scroll"), r = s.find(".w2ui-grid-records"), l = typeof l.wheelDelta != null ? -l.wheelDelta : l.detail || l.deltaY, h = r.prop("scrollTop");
      n.lastDelta += l, l = Math.round(n.lastDelta), s.data("scroll", n), r.get(0).scroll({ top: h + l, behavior: "smooth" });
    }), e.off(".body-global").on("scroll.body-global", { delegate: ".w2ui-grid-records" }, (i) => {
      this.scroll(i);
    }), a(this.box).find(".w2ui-grid-body").off(".body-global").on("click.body-global dblclick.body-global contextmenu.body-global", { delegate: "td.w2ui-head" }, (i) => {
      var n = a(i.delegate).attr("col"), r = this.columns[n] ?? { field: n };
      switch (i.type) {
        case "click":
          this.columnClick(r.field, i);
          break;
        case "dblclick":
          this.columnDblClick(r.field, i);
          break;
        case "contextmenu":
          this.columnContextMenu(r.field, i);
      }
    }).on("mouseover.body-global", { delegate: ".w2ui-col-header" }, (i) => {
      let n = a(i.delegate).parent().attr("col");
      this.columnTooltipShow(n, i), a(i.delegate).off(".tooltip").on("mouseleave.tooltip", () => {
        this.columnTooltipHide(n, i);
      });
    }).on("click.body-global", { delegate: "input.w2ui-select-all" }, (i) => {
      i.delegate.checked ? this.selectAll() : this.selectNone(), i.stopPropagation(), clearTimeout(this.last.kbd_timer);
    }).on("click.body-global", { delegate: ".w2ui-show-children, .w2ui-col-expand" }, (i) => {
      i.stopPropagation(), this.toggle(a(i.target).parents("tr").attr("recid"));
    }).on("click.body-global mouseover.body-global", { delegate: ".w2ui-info" }, (i) => {
      var _a, _b;
      var n = a(i.delegate).closest("td"), r = n.parent(), l = this.columns[n.attr("col")], h = r.parents(".w2ui-grid-body").hasClass("w2ui-grid-summary");
      ["mouseenter", "mouseover"].includes((_b = (_a = l.info) == null ? void 0 : _a.showOn) == null ? void 0 : _b.toLowerCase()) && i.type == "mouseover" ? this.showBubble(r.attr("index"), n.attr("col"), h).then(() => {
        a(i.delegate).off(".tooltip").on("mouseleave.tooltip", () => {
          B.hide(this.name + "-bubble");
        });
      }) : i.type == "click" && (B.hide(this.name + "-bubble"), this.showBubble(r.attr("index"), n.attr("col"), h));
    }).on("mouseover.body-global", { delegate: ".w2ui-clipboard-copy" }, (i) => {
      if (!i.delegate._tooltipShow) {
        let r = a(i.delegate).parent(), l = r.parent();
        var n = this.columns[r.attr("col")];
        let h = l.parents(".w2ui-grid-body").hasClass("w2ui-grid-summary");
        B.show({ name: this.name + "-bubble", anchor: i.delegate, html: p.lang(typeof n.clipboardCopy == "string" ? n.clipboardCopy : "Copy to clipboard"), position: "top|bottom", offsetY: -2 }).hide((o) => {
          i.delegate._tooltipShow = false, a(i.delegate).off(".tooltip");
        }), a(i.delegate).off(".tooltip").on("mouseleave.tooltip", (o) => {
          B.hide(this.name + "-bubble");
        }).on("click.tooltip", (o) => {
          o.stopPropagation(), B.update(this.name + "-bubble", p.lang("Copied")), this.clipboardCopy(l.attr("index"), r.attr("col"), h);
        }), i.delegate._tooltipShow = true;
      }
    }).on("click.body-global", { delegate: ".w2ui-editable-checkbox" }, (i) => {
      var n = a(i.delegate).data();
      this.editChange.call(this, i.delegate, n.changeind, n.colind, i), this.updateToolbar();
    }), this.records.length === 0 && this.msgEmpty ? a(this.box).find(`#grid_${this.name}_body`).append(`<div id="grid_${this.name}_empty_msg" class="w2ui-grid-empty-msg"><div>${p.lang(this.msgEmpty)}</div></div>`) : 0 < a(this.box).find(`#grid_${this.name}_empty_msg`).length && a(this.box).find(`#grid_${this.name}_empty_msg`).remove(), 0 < this.summary.length ? (t = this.getSummaryHTML(), a(this.box).find(`#grid_${this.name}_fsummary`).html(t[0]).show(), a(this.box).find(`#grid_${this.name}_summary`).html(t[1]).show()) : (a(this.box).find(`#grid_${this.name}_fsummary`).hide(), a(this.box).find(`#grid_${this.name}_summary`).hide());
  }
  render(e) {
    var t = Date.now();
    let s = this;
    typeof e == "string" && (e = a(e).get(0));
    var i = this.trigger("render", { target: this.name, box: e ?? this.box });
    if (i.isCancelled !== true && (e != null && (0 < a(this.box).find(`#grid_${this.name}_body`).length && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-grid w2ui-inactive").html(""), this.box = e), this.box)) {
      let l = function(c) {
        var _a, _b;
        if (c.target.tagName) {
          var d = s.last.move;
          if (d && ["select", "select-column"].indexOf(d.type) != -1 && (d.divX = c.screenX - d.x, d.divY = c.screenY - d.y, !(Math.abs(d.divX) <= 1 && Math.abs(d.divY) <= 1))) if (s.last.cancelClick = true, s.reorderRows == 1 && s.last.move.reorder) {
            let $ = a(c.target).parents("tr").attr("recid");
            ($ = $ == "-none-" ? "bottom" : $) != d.from && (f = a(s.box).find("#grid_" + s.name + "_rec_" + $), a(s.box).find(".insert-before"), f.addClass("insert-before"), d.lastY = c.screenY, d.to = $, f = { top: (_a = f.get(0)) == null ? void 0 : _a.offsetTop, left: (_b = f.get(0)) == null ? void 0 : _b.offsetLeft }, a(s.box).find("#grid_" + s.name + "_ghost_line").css({ top: f.top + "px", left: d.pos.left + "px", "border-top": "2px solid #769EFC" })), a(s.box).find("#grid_" + s.name + "_ghost").css({ top: d.pos.top + d.divY + "px", left: d.pos.left + "px" });
          } else {
            d.start && d.recid && (s.selectNone(), d.start = false);
            var u = [], f = (c.target.tagName.toUpperCase() == "TR" ? a(c.target) : a(c.target).parents("tr")).attr("recid");
            if (f == null) {
              if (s.selectType != "row" && (!s.last.move || s.last.move.type != "select")) {
                var m = parseInt(a(c.target).parents("td").attr("col"));
                if (isNaN(m)) s.removeRange("column-selection"), a(s.box).find(".w2ui-grid-columns .w2ui-col-header, .w2ui-grid-fcolumns .w2ui-col-header").removeClass("w2ui-col-selected"), a(s.box).find(".w2ui-col-number").removeClass("w2ui-row-selected"), delete d.colRange;
                else {
                  let $ = m + "-" + m;
                  d.column < m && ($ = d.column + "-" + m);
                  var w = [], g = ($ = d.column > m ? m + "-" + d.column : $).split("-");
                  for (let I = parseInt(g[0]); I <= parseInt(g[1]); I++) w.push(I);
                  if (d.colRange != $ && (r = s.trigger("columnSelect", { target: s.name, columns: w })).isCancelled !== true) {
                    d.colRange == null && s.selectNone();
                    var v = $.split("-");
                    a(s.box).find(".w2ui-grid-columns .w2ui-col-header, .w2ui-grid-fcolumns .w2ui-col-header").removeClass("w2ui-col-selected");
                    for (let I = parseInt(v[0]); I <= parseInt(v[1]); I++) a(s.box).find("#grid_" + s.name + "_column_" + I + " .w2ui-col-header").addClass("w2ui-col-selected");
                    a(s.box).find(".w2ui-col-number").not(".w2ui-head").addClass("w2ui-row-selected"), d.colRange = $, s.removeRange("column-selection"), s.addRange({ name: "column-selection", range: [{ recid: s.records[0].recid, column: v[0] }, { recid: s.records[s.records.length - 1].recid, column: v[1] }], style: "background-color: rgba(90, 145, 234, 0.1)" });
                  }
                }
              }
            } else {
              let $ = s.get(d.recid, true);
              if (!($ == null || s.records[$] && s.records[$].recid != d.recid)) {
                let I = s.get(f, true);
                if (I != null) {
                  let A = parseInt(d.column), _ = parseInt((c.target.tagName.toUpperCase() == "TD" ? a(c.target) : a(c.target).parents("td")).attr("col"));
                  isNaN(A) && isNaN(_) && (A = 0, _ = s.columns.length - 1), $ > I && (m = $, $ = I, I = m);
                  var k, f = "ind1:" + $ + ",ind2;" + I + ",col1:" + A + ",col2:" + _;
                  if (d.range != f) {
                    d.range = f;
                    for (let C = $; C <= I; C++) if (!(0 < s.last.searchIds.length && s.last.searchIds.indexOf(C) == -1)) if (s.selectType != "row") {
                      A > _ && (k = A, A = _, _ = k);
                      for (let y = A; y <= _; y++) s.columns[y].hidden || u.push({ recid: s.records[C].recid, column: parseInt(y) });
                    } else u.push(s.records[C].recid);
                    if (s.selectType != "row") {
                      var x = s.getSelection();
                      let C = [];
                      for (let y = 0; y < u.length; y++) {
                        let T = false;
                        for (let M = 0; M < x.length; M++) u[y].recid == x[M].recid && u[y].column == x[M].column && (T = true);
                        T || C.push({ recid: u[y].recid, column: u[y].column });
                      }
                      s.select(C), C = [];
                      for (let y = 0; y < x.length; y++) {
                        let T = false;
                        for (let M = 0; M < u.length; M++) u[M].recid == x[y].recid && u[M].column == x[y].column && (T = true);
                        T || C.push({ recid: x[y].recid, column: x[y].column });
                      }
                      s.unselect(C);
                    } else if (s.multiSelect) {
                      var S = s.getSelection();
                      for (let C = 0; C < u.length; C++) S.indexOf(u[C]) == -1 && s.select(u[C]);
                      for (let C = 0; C < S.length; C++) u.indexOf(S[C]) == -1 && s.unselect(S[C]);
                    }
                  }
                }
              }
            }
          }
        }
      }, h = function(c) {
        var d = s.last.move;
        if (setTimeout(() => {
          delete s.last.cancelClick;
        }, 1), !a(c.target).parents().hasClass(".w2ui-head") && !a(c.target).hasClass(".w2ui-head")) {
          if (d && ["select", "select-column"].indexOf(d.type) != -1) {
            if (d.colRange != null && r.isCancelled !== true) {
              var u = d.colRange.split("-"), f = [];
              for (let g = 0; g < s.records.length; g++) {
                var m = [];
                for (let v = parseInt(u[0]); v <= parseInt(u[1]); v++) m.push(v);
                f.push({ recid: s.records[g].recid, column: m });
              }
              s.removeRange("column-selection"), r.finish(), s.select(f);
            }
            if (s.reorderRows == 1 && s.last.move.reorder) if (d.to != null) {
              if (c = s.trigger("reorderRow", { target: s.name, recid: d.from, moveBefore: d.to }), c.isCancelled === true) return o(), void delete s.last.move;
              var w = s.get(d.from, true);
              let g = s.get(d.to, true);
              d.to == "bottom" && (g = s.records.length), d = s.records[w], w != null && g != null && (s.records.splice(w, 1), w > g ? s.records.splice(g, 0, d) : s.records.splice(g - 1, 0, d)), s.sortData = [], a(s.box).find(`#grid_${s.name}_columns .w2ui-col-header`).removeClass("w2ui-col-sorted"), o(), c.finish();
            } else o();
          }
          delete s.last.move, a(document).off(".w2ui-" + s.name);
        }
      }, o = function() {
        a(s.box).find(`#grid_${s.name}_ghost`).remove(), a(s.box).find(`#grid_${s.name}_ghost_line`).remove(), s.refresh(), delete s.last.move;
      };
      if (e = typeof this.url != "object" ? this.url : this.url.get, this.reset(true), !this.last.field) if (this.multiSearch && this.show.searchAll) this.last.field = "all", this.last.label = "All Fields";
      else {
        let c = 0;
        for (; c < this.searches.length && (this.searches[c].hidden || this.searches[c].simple === false); ) c++;
        c >= this.searches.length ? (this.last.field = "", this.last.label = "") : (this.last.field = this.searches[c].field, this.last.label = this.searches[c].label);
      }
      if (a(this.box).attr("name", this.name).addClass("w2ui-reset w2ui-grid w2ui-inactive").html('<div class="w2ui-grid-box">    <div id="grid_' + this.name + '_header" class="w2ui-grid-header"></div>    <div id="grid_' + this.name + '_toolbar" class="w2ui-grid-toolbar"></div>    <div id="grid_' + this.name + '_body" class="w2ui-grid-body"></div>    <div id="grid_' + this.name + '_fsummary" class="w2ui-grid-body w2ui-grid-summary"></div>    <div id="grid_' + this.name + '_summary" class="w2ui-grid-body w2ui-grid-summary"></div>    <div id="grid_' + this.name + '_footer" class="w2ui-grid-footer"></div>    <textarea id="grid_' + this.name + '_focus" class="w2ui-grid-focus-input" ' + (this.tabIndex ? 'tabindex="' + this.tabIndex + '"' : "") + (p.isIOS ? "readonly" : "") + "></textarea></div>"), this.selectType != "row" && a(this.box).addClass("w2ui-ss"), 0 < a(this.box).length && (a(this.box)[0].style.cssText += this.style), this.initToolbar(), this.toolbar != null && this.toolbar.render(a(this.box).find("#grid_" + this.name + "_toolbar")[0]), this.last.toolbar_height = a(this.box).find(`#grid_${this.name}_toolbar`).prop("offsetHeight"), this.last.field && this.last.field != "all") {
        let c = this.searchData;
        setTimeout(() => {
          this.searchInitInput(this.last.field, c.length == 1 ? c[0].value : null);
        }, 1);
      }
      a(this.box).find(`#grid_${this.name}_footer`).html(this.getFooterHTML()), this.last.state || (this.last.state = this.stateSave(true)), this.stateRestore(), e && (this.clear(), this.refresh());
      let n = false;
      for (let c = 0; c < this.searches.length; c++) if (this.searches[c].hidden) {
        n = true;
        break;
      }
      n ? (this.searchReset(false), e || setTimeout(() => {
        this.searchReset();
      }, 1)) : this.reload(), a(this.box).find(`#grid_${this.name}_focus`).on("focus", (c) => {
        clearTimeout(this.last.kbd_timer), this.hasFocus || this.focus();
      }).on("blur", (c) => {
        clearTimeout(this.last.kbd_timer), this.last.kbd_timer = setTimeout(() => {
          this.hasFocus && this.blur();
        }, 100);
      }).on("paste", (c) => {
        var d = c.clipboardData || null;
        if (d) {
          let m = d.items, w = [];
          for (var u in m = m.length == 2 && (m = m.length == 2 && m[1].kind == "file" ? [m[1]] : m).length == 2 && m[0].type == "text/plain" && m[1].type == "text/html" ? [m[1]] : m) if (u = m[u], u.kind === "file") {
            var f = u.getAsFile();
            w.push({ kind: "file", data: f });
          } else if (u.kind === "string" && (u.type === "text/plain" || u.type === "text/html")) {
            c.preventDefault();
            let g = d.getData("text/plain");
            g.indexOf("\r") != -1 && g.indexOf(`
`) == -1 && (g = g.replace(/\r/g, `
`)), w.push({ kind: u.type == "text/html" ? "html" : "text", data: g });
          }
          w.length === 1 && w[0].kind != "file" && (w = w[0].data), oe[this.name].paste(w, c), c.preventDefault();
        }
      }).on("keydown", function(c) {
        oe[s.name].keydown.call(oe[s.name], c);
      });
      let r;
      return a(this.box).off("mousedown.mouseStart").on("mousedown.mouseStart", function(c) {
        if (c.which == 1 && (s.last.userSelect == "text" && (s.last.userSelect = "", a(s.box).find(".w2ui-grid-body").css("user-select", "none")), !(s.selectType == "row" && (a(c.target).parents().hasClass("w2ui-head") || a(c.target).hasClass("w2ui-head")) || s.last.move && s.last.move.type == "expand"))) {
          if (c.altKey) a(s.box).find(".w2ui-grid-body").css("user-select", "text"), s.selectNone(), s.last.move = { type: "text-select" }, s.last.userSelect = "text";
          else {
            let v = c.target;
            var d = { x: c.offsetX - 10, y: c.offsetY - 10 };
            let k = false;
            for (; v && (!v.classList || !v.classList.contains("w2ui-grid")); ) v.tagName && v.tagName.toUpperCase() == "TD" && (k = true), v.tagName && v.tagName.toUpperCase() != "TR" && k == 1 && (d.x += v.offsetLeft, d.y += v.offsetTop), v = v.parentNode;
            s.last.move = { x: c.screenX, y: c.screenY, divX: 0, divY: 0, focusX: d.x, focusY: d.y, recid: a(c.target).parents("tr").attr("recid"), column: parseInt((c.target.tagName.toUpperCase() == "TD" ? a(c.target) : a(c.target).parents("td")).attr("col")), type: "select", ghost: false, start: true }, s.last.move.recid == null && (s.last.move.type = "select-column");
            let x = c.target, S = a(s.box).find("#grid_" + s.name + "_focus");
            if (s.last.move) {
              let $ = s.last.move.focusX, I = s.last.move.focusY;
              var u = a(x).parents("table").parent();
              (u.hasClass("w2ui-grid-records") || u.hasClass("w2ui-grid-frecords") || u.hasClass("w2ui-grid-columns") || u.hasClass("w2ui-grid-fcolumns") || u.hasClass("w2ui-grid-summary")) && ($ = s.last.move.focusX - a(s.box).find("#grid_" + s.name + "_records").prop("scrollLeft"), I = s.last.move.focusY - a(s.box).find("#grid_" + s.name + "_records").prop("scrollTop")), (a(x).hasClass("w2ui-grid-footer") || 0 < a(x).parents("div.w2ui-grid-footer").length) && (I = a(s.box).find("#grid_" + s.name + "_footer").get(0).offsetTop), u.hasClass("w2ui-scroll-wrapper") && u.parent().hasClass("w2ui-toolbar") && ($ = s.last.move.focusX - u.prop("scrollLeft")), S.css({ left: $ - 10, top: I });
            }
            setTimeout(() => {
              var _a;
              s.last.inEditMode || (["INPUT", "TEXTAREA", "SELECT"].includes(x.tagName) ? x.focus() : S.get(0) !== document.active && ((_a = S.get(0)) == null ? void 0 : _a.focus({ preventScroll: true })));
            }, 50), s.multiSelect || s.reorderRows || s.last.move.type != "drag" || delete s.last.move;
          }
          if (s.reorderRows == 1) {
            let v = c.target;
            var f, m, w, g;
            v.tagName.toUpperCase() != "TD" && (v = a(v).parents("td")[0]), a(v).hasClass("w2ui-col-number") || a(v).hasClass("w2ui-col-order") ? (s.selectNone(), s.last.move.reorder = true, u = a(s.box).find(".w2ui-even.w2ui-empty-record").css("background-color"), f = a(s.box).find(".w2ui-odd.w2ui-empty-record").css("background-color"), a(s.box).find(".w2ui-even td").filter(":not(.w2ui-col-number)").css("background-color", u), a(s.box).find(".w2ui-odd td").filter(":not(.w2ui-col-number)").css("background-color", f), f = s.last.move, m = a(s.box).find(".w2ui-grid-records"), f.ghost || (w = a(s.box).find(`#grid_${s.name}_rec_` + f.recid), g = w.parents("table").find("tr:first-child").get(0).cloneNode(true), f.offsetY = c.offsetY, f.from = f.recid, f.pos = { top: w.get(0).offsetTop - 1, left: w.get(0).offsetLeft }, f.ghost = a(w.get(0).cloneNode(true)), f.ghost.removeAttr("id"), f.ghost.find("td").css({ "border-top": "1px solid silver", "border-bottom": "1px solid silver" }), w.find("td").remove(), w.append(`<td colspan="1000"><div class="w2ui-reorder-empty" style="height: ${s.recordHeight - 2}px"></div></td>`), m.append('<div id="grid_' + s.name + '_ghost_line" style="position: absolute; z-index: 999999; pointer-events: none; width: 100%;"></div>'), m.append('<table id="grid_' + s.name + '_ghost" style="position: absolute; z-index: 999998; opacity: 0.9; pointer-events: none;"></table>'), a(s.box).find("#grid_" + s.name + "_ghost").append(g).append(f.ghost)), a(s.box).find("#grid_" + s.name + "_ghost").css({ top: f.pos.top + "px", left: f.pos.left + "px" })) : s.last.move.reorder = false;
          }
          a(document).on("mousemove.w2ui-" + s.name, l).on("mouseup.w2ui-" + s.name, h), c.stopPropagation();
        }
      }), this.updateToolbar(), i.finish(), this.last.observeResize = new ResizeObserver(() => {
        this.resize();
      }), this.last.observeResize.observe(this.box), Date.now() - t;
    }
  }
  destroy() {
    var _a;
    var e = this.trigger("destroy", { target: this.name });
    e.isCancelled !== true && (a(this.box).off(), typeof this.toolbar == "object" && this.toolbar.destroy && this.toolbar.destroy(), 0 < a(this.box).find(`#grid_${this.name}_body`).length && a(this.box).removeAttr("name").removeClass("w2ui-reset w2ui-grid w2ui-inactive").html(""), (_a = this.last.observeResize) == null ? void 0 : _a.disconnect(), delete oe[this.name], e.finish());
  }
  initColumnOnOff() {
    var e, t = [{ id: "line-numbers", text: "Line #", checked: this.show.lineNumbers }];
    for (let n = 0; n < this.columns.length; n++) {
      var s = this.columns[n];
      let r = this.columns[n].text;
      s.hideable !== false && (r = (r = !r && this.columns[n].tooltip ? this.columns[n].tooltip : r) || "- column " + (parseInt(n) + 1) + " -", t.push({ id: s.field, text: p.stripTags(r), checked: !s.hidden }));
    }
    ((typeof this.url != "object" ? this.url : this.url.get) && this.show.skipRecords || this.show.saveRestoreState) && t.push({ text: "--" }), this.show.skipRecords && (e = p.lang("Skip") + `<input id="${this.name}_skip" type="text" class="w2ui-input w2ui-grid-skip" value="${this.offset}">` + p.lang("records"), t.push({ id: "w2ui-skip", text: e, group: false, icon: "w2ui-icon-empty" })), this.show.saveRestoreState && t.push({ id: "w2ui-stateSave", text: p.lang("Save Grid State"), icon: "w2ui-icon-empty", group: false }, { id: "w2ui-stateReset", text: p.lang("Restore Default State"), icon: "w2ui-icon-empty", group: false });
    let i = [];
    return t.forEach((n) => {
      n.text = p.lang(n.text), n.checked && i.push(n.id);
    }), this.toolbar.set("w2ui-column-on-off", { selected: i, items: t }), t;
  }
  initColumnDrag(e) {
    if (this.columnGroups && this.columnGroups.length) throw "Draggable columns are not currently supported with column groups.";
    let t = this, s = { pressed: false, targetPos: null, columnHead: null }, i = (l, h) => {
      var o = ["w2ui-col-number", "w2ui-col-expand", "w2ui-col-select"];
      h !== true && o.push("w2ui-head-last");
      for (let c = 0; c < o.length; c++) if (a(l).closest(".w2ui-head").hasClass(o[c])) return true;
      return false;
    };
    function n(l) {
      var h, o, c, d;
      s.pressed && s.columnHead && (h = l.pageX, o = l.pageY, i(l.target, true) || (l = l, a(l.target).closest("td").length != 0 && (d = a(t.box).find(".w2ui-grid-body").get(0).getBoundingClientRect(), c = a(l.target).closest("td").get(0).getBoundingClientRect(), a(t.box).find(".w2ui-intersection-marker").show().css({ left: c.left - d.left + "px" }), c = a(l.target).closest("td"), s.targetPos = c.hasClass("w2ui-head-last") ? t.columns.length : parseInt(c.attr("col")))), d = h, l = o, a(s.ghost).css({ left: d - 10 + "px", top: l - 10 + "px" }).show());
    }
    function r(l) {
      if (s.pressed && s.columnHead) {
        s.pressed = false;
        var h, o, c = () => {
          var d = a(t.box).find(".w2ui-grid-ghost");
          a(t.box).find(".w2ui-intersection-marker").hide(), a(s.ghost).remove(), d.remove(), a(document).off(".colDrag"), s = {};
        };
        if (l.pageX == s.initialX && l.pageY == s.initialY) t.columnClick(t.columns[s.originalPos].field, l), c();
        else {
          if ((l = t.trigger("columnDragEnd", { originalEvent: l, target: s.columnHead[0], dragData: s })).isCancelled === true) return false;
          h = t.columns[s.originalPos], o = t.columns, s.originalPos != s.targetPos && s.targetPos != null && (o.splice(s.targetPos, 0, p.clone(h)), o.splice(o.indexOf(h), 1)), c(), t.refresh(), l.finish({ targetColumn: NaN });
        }
      }
    }
    return a(t.box).off(".colDrag").on("mousedown.colDrag", function(l) {
      if (!s.pressed && s.numberPreColumnsPresent !== 0 && l.button === 0) {
        var h, o;
        if (a(l.target).parents().hasClass("w2ui-head") && !i(l.target)) {
          if (s.pressed = true, s.initialX = l.pageX, s.initialY = l.pageY, s.numberPreColumnsPresent = a(t.box).find(".w2ui-head.w2ui-col-number, .w2ui-head.w2ui-col-expand, .w2ui-head.w2ui-col-select").length, s.columnHead = c = a(l.target).closest(".w2ui-head"), s.originalPos = o = parseInt(c.attr("col"), 10), (o = t.trigger("columnDragStart", { originalEvent: l, origColumnNumber: o, target: c[0] })).isCancelled === true) return false;
          h = s.columns = a(t.box).find(".w2ui-head:not(.w2ui-head-last)"), a(document).on("mouseup.colDrag", r), a(document).on("mousemove.colDrag", n);
          var c = t.columns[s.originalPos], c = p.lang(typeof c.text == "function" ? c.text(c) : c.text);
          s.ghost = a.html(`<span col="${s.originalPos}">${c}</span>`)[0], a(document.body).append(s.ghost), a(s.ghost).css({ display: "none", left: l.pageX, top: l.pageY, opacity: 1, margin: "3px 0 0 20px", padding: "3px", "background-color": "white", position: "fixed", "z-index": 999999 }).addClass(".w2ui-grid-ghost"), s.offsets = [];
          for (let u = 0, f = h.length; u < f; u++) {
            var d = h[u].getBoundingClientRect();
            s.offsets.push(d.left);
          }
          o.finish();
        }
      }
    }), { remove() {
      a(t.box).off(".colDrag"), t.last.columnDrag = false;
    } };
  }
  columnOnOff(e, t) {
    if (e = this.trigger("columnOnOff", { target: this.name, field: t, originalEvent: e }), e.isCancelled !== true) {
      var s = this.find({ "w2ui.expanded": true }, true);
      for (let n = 0; n < s.length; n++) {
        var i = this.records[n].w2ui;
        i && !Array.isArray(i.children) && (this.records[n].w2ui.expanded = false);
      }
      t == "line-numbers" ? (this.show.lineNumbers = !this.show.lineNumbers, this.refresh()) : (t = this.getColumn(t)).hidden ? this.showColumn(t.field) : this.hideColumn(t.field), e.finish();
    }
  }
  initToolbar() {
    if (this.toolbar.render == null) {
      let t = this.toolbar.items || [];
      var e;
      this.toolbar.items = [], this.toolbar = new Ds(p.extend({}, this.toolbar, { name: this.name + "_toolbar", owner: this })), this.show.toolbarReload && this.toolbar.items.push(p.extend({}, this.buttons.reload)), this.show.toolbarColumns && this.toolbar.items.push(p.extend({}, this.buttons.columns)), this.show.toolbarSearch && (e = `
                <div class="w2ui-grid-search-input">
                    ${this.buttons.search.html}
                    <div id="grid_${this.name}_search_name" class="w2ui-grid-search-name">
                        <span class="name-icon w2ui-icon-search"></span>
                        <span class="name-text"></span>
                        <span class="name-cross w2ui-action" data-click="searchReset">x</span>
                    </div>
                    <input type="text" id="grid_${this.name}_search_all" class="w2ui-search-all" tabindex="-1"
                        autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false"
                        placeholder="${p.lang(this.last.label, true)}" value="${this.last.search}"
                        data-focus="searchSuggest" data-click="stop"
                    >
                    <div class="w2ui-search-drop w2ui-action" data-click="searchOpen"
                            style="${this.multiSearch ? "" : "display: none"}">
                        <span class="w2ui-icon-drop"></span>
                    </div>
                </div>`, this.toolbar.items.push({ id: "w2ui-search", type: "html", html: e, onRefresh: async (i) => {
        await i.complete;
        var i = a(this.box).find(`#grid_${this.name}_search_all`), n = (p.bindEvents(a(this.box).find(`#grid_${this.name}_search_all, .w2ui-action`), this), p.debounce((r) => {
          var l = r.target.value;
          this.liveSearch && this.last.liveText != l && (this.last.liveText = l, this.search(this.last.field, l)), r.keyCode == 40 && this.searchSuggest(true);
        }, 250));
        i.on("change", (r) => {
          this.liveSearch || (this.search(this.last.field, r.target.value), this.searchSuggest(true, true, this));
        }).on("blur", () => {
          this.last.liveText = "";
        }).on("keyup", n);
      } })), Array.isArray(t) && (e = t.map((s) => s.id), this.show.toolbarAdd && !e.includes(this.buttons.add.id) && this.toolbar.items.push(p.extend({}, this.buttons.add)), this.show.toolbarEdit && !e.includes(this.buttons.edit.id) && this.toolbar.items.push(p.extend({}, this.buttons.edit)), this.show.toolbarDelete && !e.includes(this.buttons.delete.id) && this.toolbar.items.push(p.extend({}, this.buttons.delete)), this.show.toolbarSave && !e.includes(this.buttons.save.id) && ((this.show.toolbarAdd || this.show.toolbarDelete || this.show.toolbarEdit) && this.toolbar.items.push({ type: "break", id: "w2ui-break2" }), this.toolbar.items.push(p.extend({}, this.buttons.save))), t = t.map((s) => this.buttons[s.name] ? p.extend({}, this.buttons[s.name], s) : s)), this.toolbar.items.push(...t), this.toolbar.on("click", (s) => {
        var i = this.trigger("toolbar", { target: s.target, originalEvent: s });
        if (i.isCancelled !== true) {
          let r;
          switch (s.detail.item.id) {
            case "w2ui-reload":
              if ((r = this.trigger("reload", { target: this.name })).isCancelled === true) return false;
              this.reload(), r.finish();
              break;
            case "w2ui-column-on-off":
              s.detail.subItem ? (n = s.detail.subItem.id, ["w2ui-stateSave", "w2ui-stateReset"].includes(n) ? this[n.substring(5)]() : n != "w2ui-skip" && this.columnOnOff(s, s.detail.subItem.id)) : (this.initColumnOnOff(), setTimeout(() => {
                a(`#w2overlay-${this.name}_toolbar-drop .w2ui-grid-skip`).off(".w2ui-grid").on("click.w2ui-grid", (l) => {
                  l.stopPropagation();
                }).on("keypress", (l) => {
                  l.keyCode == 13 && (this.skip(l.target.value), this.toolbar.click("w2ui-column-on-off"));
                });
              }, 100));
              break;
            case "w2ui-add":
              if ((r = this.trigger("add", { target: this.name, recid: null })).isCancelled === true) return false;
              r.finish();
              break;
            case "w2ui-edit": {
              var n = this.getSelection();
              let l = null;
              if (n.length == 1 && (l = n[0]), (r = this.trigger("edit", { target: this.name, recid: l })).isCancelled === true) return false;
              r.finish();
              break;
            }
            case "w2ui-delete":
              this.delete();
              break;
            case "w2ui-save":
              this.save();
          }
          i.finish();
        }
      }), this.toolbar.on("refresh", (s) => {
        if (s.target == "w2ui-search") {
          let i = this.searchData;
          setTimeout(() => {
            this.searchInitInput(this.last.field, i.length == 1 ? i[0].value : null);
          }, 1);
        }
      });
    }
  }
  initResize() {
    let e = this;
    a(this.box).find(".w2ui-resizer").off(".grid-col-resize").on("click.grid-col-resize", function(t) {
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = true, t.preventDefault && t.preventDefault();
    }).on("mousedown.grid-col-resize", function(t) {
      t = t || window.event, e.last.colResizing = true, e.last.tmp = { x: t.screenX, y: t.screenY, gx: t.screenX, gy: t.screenY, col: parseInt(a(this).attr("name")) }, e.last.tmp.tds = a(e.box).find("#grid_" + e.name + '_body table tr:first-child td[col="' + e.last.tmp.col + '"]'), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = true, t.preventDefault && t.preventDefault();
      for (let n = 0; n < e.columns.length; n++) e.columns[n].hidden || (e.columns[n].sizeOriginal == null && (e.columns[n].sizeOriginal = e.columns[n].size), e.columns[n].size = e.columns[n].sizeCalculated);
      let s = { phase: "before", type: "columnResize", target: e.name, column: e.last.tmp.col, field: e.columns[e.last.tmp.col].field };
      s = e.trigger(p.extend(s, { resizeBy: 0, originalEvent: t }));
      let i;
      a(document).off(".grid-col-resize").on("mousemove.grid-col-resize", function(n) {
        var r;
        e.last.colResizing == 1 && (n = n || window.event, (s = e.trigger(p.extend(s, { resizeBy: n.screenX - e.last.tmp.gx, originalEvent: n }))).isCancelled === true ? s.isCancelled = false : (e.last.tmp.x = n.screenX - e.last.tmp.x, e.last.tmp.y = n.screenY - e.last.tmp.y, r = parseInt(e.columns[e.last.tmp.col].size) + e.last.tmp.x + "px", e.columns[e.last.tmp.col].size = r, i && clearTimeout(i), i = setTimeout(() => {
          e.resizeRecords(), e.scroll();
        }, 100), e.last.tmp.tds.css({ width: r }), e.last.tmp.x = n.screenX, e.last.tmp.y = n.screenY));
      }).on("mouseup.grid-col-resize", function(n) {
        a(document).off(".grid-col-resize"), e.resizeRecords(), e.scroll(), s.finish({ originalEvent: n }), setTimeout(() => {
          e.last.colResizing = false;
        }, 1);
      });
    }).on("dblclick.grid-col-resize", function(t) {
      let s = parseInt(a(this).attr("name")), i = e.columns[s], n = 0;
      if (i.autoResize === false) return true;
      t.stopPropagation ? t.stopPropagation() : t.cancelBubble = true, t.preventDefault && t.preventDefault(), a(e.box).find('.w2ui-grid-records td[col="' + s + '"] > div', e.box).each(() => {
        var l = this.offsetWidth - this.scrollWidth;
        l < n && (n = l - 3);
      });
      var r = { phase: "before", type: "columnAutoResize", target: e.name, column: i, field: i.field };
      (r = e.trigger(p.extend(r, { resizeBy: Math.abs(n), originalEvent: t }))).isCancelled === true ? r.isCancelled = false : (n < 0 && (i.size = Math.min(parseInt(i.size) + Math.abs(n), i.max || 1 / 0) + "px", e.resizeRecords(), e.resizeRecords(), e.scroll()), r.finish({ originalEvent: t }));
    }).each((t) => {
      var s = a(t).get(0).parentNode;
      a(t).css({ height: s.clientHeight + "px", "margin-left": s.clientWidth - 3 + "px" });
    });
  }
  resizeBoxes() {
    var e = a(this.box).find(`#grid_${this.name}_header`), t = a(this.box).find(`#grid_${this.name}_toolbar`), s = a(this.box).find(`#grid_${this.name}_fsummary`), i = a(this.box).find(`#grid_${this.name}_summary`), n = a(this.box).find(`#grid_${this.name}_footer`), r = a(this.box).find(`#grid_${this.name}_body`);
    this.show.header && e.css({ top: "0px", left: "0px", right: "0px" }), this.show.toolbar && t.css({ top: 0 + (this.show.header ? p.getSize(e, "height") : 0) + "px", left: "0px", right: "0px" }), 0 < this.summary.length && (s.css({ bottom: 0 + (this.show.footer ? p.getSize(n, "height") : 0) + "px" }), i.css({ bottom: 0 + (this.show.footer ? p.getSize(n, "height") : 0) + "px", right: "0px" })), this.show.footer && n.css({ bottom: "0px", left: "0px", right: "0px" }), r.css({ top: 0 + (this.show.header ? p.getSize(e, "height") : 0) + (this.show.toolbar ? p.getSize(t, "height") : 0) + "px", bottom: 0 + (this.show.footer ? p.getSize(n, "height") : 0) + (0 < this.summary.length ? p.getSize(i, "height") : 0) + "px", left: "0px", right: "0px" });
  }
  resizeRecords() {
    var _a, _b, _c, _d, _e2, _f;
    let e = this;
    a(this.box).find(".w2ui-empty-record").remove();
    var t, s, i = a(this.box), n = a(this.box).find(":scope > div.w2ui-grid-box"), r = a(this.box).find(`#grid_${this.name}_header`), l = a(this.box).find(`#grid_${this.name}_toolbar`), h = a(this.box).find(`#grid_${this.name}_summary`), o = a(this.box).find(`#grid_${this.name}_fsummary`), c = a(this.box).find(`#grid_${this.name}_footer`), d = a(this.box).find(`#grid_${this.name}_body`), u = a(this.box).find(`#grid_${this.name}_columns`), f = a(this.box).find(`#grid_${this.name}_fcolumns`), m = a(this.box).find(`#grid_${this.name}_records`), w = a(this.box).find(`#grid_${this.name}_frecords`), g = a(this.box).find(`#grid_${this.name}_scroll1`);
    let v = 8 * String(this.total).length + 10, k = (v < 34 && (v = 34), this.lineNumberWidth != null && (v = this.lineNumberWidth), false), x = false, S = 0;
    for (let D = 0; D < this.columns.length; D++) this.columns[D].frozen || this.columns[D].hidden || (t = parseInt(this.columns[D].sizeCalculated || this.columns[D].size), S += t);
    ((_a = m[0]) == null ? void 0 : _a.clientWidth) < S && (k = true), ((_b = d[0]) == null ? void 0 : _b.clientHeight) - (((_c = u[0]) == null ? void 0 : _c.clientHeight) ?? 0) < (((_d = a(m).find(":scope > table")[0]) == null ? void 0 : _d.clientHeight) ?? 0) + (k ? p.scrollBarSize() : 0) && (x = true), this.fixedBody ? (s = ((_e2 = n[0]) == null ? void 0 : _e2.clientHeight) - (this.show.header ? p.getSize(r, "height") : 0) - (this.show.toolbar ? p.getSize(l, "height") : 0) - (h.css("display") != "none" ? p.getSize(h, "height") : 0) - (this.show.footer ? p.getSize(c, "height") : 0), d.css("height", s + "px")) : (r = (s = p.getSize(u, "height") + p.getSize(a(this.box).find("#grid_" + this.name + "_records table"), "height") + (k ? p.scrollBarSize() : 0)) + (this.show.header ? p.getSize(r, "height") : 0) + (this.show.toolbar ? p.getSize(l, "height") : 0) + (h.css("display") != "none" ? p.getSize(h, "height") : 0) + (this.show.footer ? p.getSize(c, "height") : 0), n.css("height", r + "px"), d.css("height", s + "px"), i.css("height", p.getSize(n, "height") + "px"));
    let $ = this.records.length;
    if (l = typeof this.url != "object" ? this.url : this.url.get, this.searchData.length == 0 || l || ($ = this.last.searchIds.length), this.fixedBody || (x = false), k || x ? (u.find(":scope > table > tbody > tr:nth-child(1) td.w2ui-head-last").css("width", p.scrollBarSize() + "px").show(), m.css({ top: (0 < this.columnGroups.length && this.show.columns ? 1 : 0) + p.getSize(u, "height") + "px", "-webkit-overflow-scrolling": "touch", "overflow-x": k ? "auto" : "hidden", "overflow-y": x ? "auto" : "hidden" })) : (u.find(":scope > table > tbody > tr:nth-child(1) td.w2ui-head-last").hide(), m.css({ top: (0 < this.columnGroups.length && this.show.columns ? 1 : 0) + p.getSize(u, "height") + "px", overflow: "hidden" }), 0 < m.length && (this.last.scrollTop = 0, this.last.scrollLeft = 0)), k ? (w.css("margin-bottom", p.scrollBarSize() + "px"), g.show()) : (w.css("margin-bottom", 0), g.hide()), w.css({ overflow: "hidden", top: m.css("top") }), this.show.emptyRecords && !x) {
      let D = Math.floor((((_f = m[0]) == null ? void 0 : _f.clientHeight) ?? 0) / this.recordHeight) - 1, P = 0;
      if ((P = m[0] ? m[0].scrollHeight - D * this.recordHeight : P) >= this.recordHeight && (P -= this.recordHeight, D++), this.fixedBody) {
        for (let F = $; F < D; F++) I(F, this.recordHeight, this);
        I(D, P, this);
      }
    }
    function I(D, P, F) {
      let O = "", Y = "";
      var j;
      O += '<tr class="' + (D % 2 ? "w2ui-even" : "w2ui-odd") + ' w2ui-empty-record" recid="-none-" style="height: ' + P + 'px">', Y += '<tr class="' + (D % 2 ? "w2ui-even" : "w2ui-odd") + ' w2ui-empty-record" recid="-none-" style="height: ' + P + 'px">', F.show.lineNumbers && (O += '<td class="w2ui-col-number"></td>'), F.show.selectColumn && (O += '<td class="w2ui-grid-data w2ui-col-select"></td>'), F.show.expandColumn && (O += '<td class="w2ui-grid-data w2ui-col-expand"></td>'), Y += '<td class="w2ui-grid-data-spacer" col="start" style="border-right: 0"></td>', F.reorderRows && (Y += '<td class="w2ui-grid-data w2ui-col-order" col="order"></td>');
      for (let G = 0; G < F.columns.length; G++) {
        var U = F.columns[G];
        (U.hidden || G < F.last.colStart || G > F.last.colEnd) && !U.frozen || (j = '<td class="w2ui-grid-data" ' + (U.attr != null ? U.attr : "") + ' col="' + G + '"></td>', U.frozen ? O += j : Y += j);
      }
      O += '<td class="w2ui-grid-data-last"></td> </tr>', Y += '<td class="w2ui-grid-data-last" col="end"></td> </tr>', a(F.box).find("#grid_" + F.name + "_frecords > table").append(O), a(F.box).find("#grid_" + F.name + "_records > table").append(Y);
    }
    let A, _;
    if (0 < d.length) {
      let D = parseInt(d[0].clientWidth) - (x ? p.scrollBarSize() : 0) - (this.show.lineNumbers ? v : 0) - (this.reorderRows ? 26 : 0) - (this.show.selectColumn ? 26 : 0) - (this.show.expandColumn ? 26 : 0) - 1, P = (A = D, false);
      for (let F = _ = 0; F < this.columns.length; F++) {
        var E = this.columns[F];
        0 < E.gridMinWidth && (E.gridMinWidth > A && E.hidden !== true && (E.hidden = true, P = true), E.gridMinWidth < A) && E.hidden === true && (E.hidden = false, P = true);
      }
      if (P === true) return void this.refresh();
      for (let F = 0; F < this.columns.length; F++) {
        var C = this.columns[F];
        C.hidden || (String(C.size).substr(String(C.size).length - 2).toLowerCase() == "px" ? (D -= parseFloat(C.size), this.columns[F].sizeCalculated = C.size, this.columns[F].sizeType = "px") : (_ += parseFloat(C.size), this.columns[F].sizeType = "%", delete C.sizeCorrected));
      }
      if (_ != 100 && 0 < _) for (let F = 0; F < this.columns.length; F++) {
        var y = this.columns[F];
        y.hidden || y.sizeType == "%" && (y.sizeCorrected = Math.round(100 * parseFloat(y.size) * 100 / _) / 100 + "%");
      }
      for (let F = 0; F < this.columns.length; F++) {
        var T = this.columns[F];
        T.hidden || T.sizeType == "%" && (this.columns[F].sizeCorrected != null ? this.columns[F].sizeCalculated = Math.floor(D * parseFloat(T.sizeCorrected) / 100) - 1 + "px" : this.columns[F].sizeCalculated = Math.floor(D * parseFloat(T.size) / 100) - 1 + "px");
      }
    }
    let M = 0;
    for (let D = 0; D < this.columns.length; D++) {
      var R = this.columns[D];
      R.hidden || (R.min == null && (R.min = 20), parseInt(R.sizeCalculated) < parseInt(R.min) && (R.sizeCalculated = R.min + "px"), parseInt(R.sizeCalculated) > parseInt(R.max) && (R.sizeCalculated = R.max + "px"), M += parseInt(R.sizeCalculated));
    }
    let H = parseInt(A) - parseInt(M);
    if (0 < H && 0 < _) {
      let D = 0;
      for (; ; ) {
        var z = this.columns[D];
        if (z == null) D = 0;
        else {
          if (!z.hidden && z.sizeType != "px" && (z.sizeCalculated = parseInt(z.sizeCalculated) + 1 + "px", --H === 0)) break;
          D++;
        }
      }
    } else 0 < H && u.find(":scope > table > tbody > tr:nth-child(1) td.w2ui-head-last").css("width", p.scrollBarSize() + "px").show();
    let L = 1;
    this.show.lineNumbers && (L += v), this.show.selectColumn && (L += 26), this.show.expandColumn && (L += 26);
    for (let D = 0; D < this.columns.length; D++) this.columns[D].hidden || this.columns[D].frozen && (L += parseInt(this.columns[D].sizeCalculated));
    f.css("width", L + "px"), w.css("width", L + "px"), o.css("width", L + "px"), g.css("width", L + "px"), u.css("left", L + "px"), m.css("left", L + "px"), h.css("left", L + "px"), u.find(":scope > table > tbody > tr:nth-child(1) td").add(f.find(":scope > table > tbody > tr:nth-child(1) td")).each((D) => {
      a(D).hasClass("w2ui-col-number") && a(D).css("width", v + "px");
      var P = a(D).attr("col");
      if (P != null) {
        if (P == "start") {
          let F = 0;
          for (let O = 0; O < e.last.colStart; O++) !e.columns[O] || e.columns[O].frozen || e.columns[O].hidden || (F += parseInt(e.columns[O].sizeCalculated));
          a(D).css("width", F + "px");
        }
        e.columns[P] && a(D).css("width", e.columns[P].sizeCalculated);
      }
      if (a(D).hasClass("w2ui-head-last")) if (e.last.colEnd + 1 < e.columns.length) {
        let F = 0;
        for (let O = e.last.colEnd + 1; O < e.columns.length; O++) !e.columns[O] || e.columns[O].frozen || e.columns[O].hidden || (F += parseInt(e.columns[O].sizeCalculated));
        a(D).css("width", F + "px");
      } else a(D).css("width", p.scrollBarSize() + (0 < H && _ === 0 ? H : 0) + "px");
    }), u.find(":scope > table > tbody > tr").length == 3 && u.find(":scope > table > tbody > tr:nth-child(1) td").add(f.find(":scope > table > tbody > tr:nth-child(1) td")).html("").css({ height: "0", border: "0", padding: "0", margin: "0" }), m.find(":scope > table > tbody > tr:nth-child(1) td").add(w.find(":scope > table > tbody > tr:nth-child(1) td")).each((D) => {
      a(D).hasClass("w2ui-col-number") && a(D).css("width", v + "px");
      var P = a(D).attr("col");
      if (P != null) {
        if (P == "start") {
          let F = 0;
          for (let O = 0; O < e.last.colStart; O++) !e.columns[O] || e.columns[O].frozen || e.columns[O].hidden || (F += parseInt(e.columns[O].sizeCalculated));
          a(D).css("width", F + "px");
        }
        e.columns[P] && a(D).css("width", e.columns[P].sizeCalculated);
      }
      if (a(D).hasClass("w2ui-grid-data-last") && a(D).parents(".w2ui-grid-frecords").length === 0) if (e.last.colEnd + 1 < e.columns.length) {
        let F = 0;
        for (let O = e.last.colEnd + 1; O < e.columns.length; O++) !e.columns[O] || e.columns[O].frozen || e.columns[O].hidden || (F += parseInt(e.columns[O].sizeCalculated));
        a(D).css("width", F + "px");
      } else a(D).css("width", (0 < H && _ === 0 ? H : 0) + "px");
    }), h.find(":scope > table > tbody > tr:nth-child(1) td").add(o.find(":scope > table > tbody > tr:nth-child(1) td")).each((D) => {
      a(D).hasClass("w2ui-col-number") && a(D).css("width", v + "px");
      var P = a(D).attr("col");
      if (P != null) {
        if (P == "start") {
          let F = 0;
          for (let O = 0; O < e.last.colStart; O++) !e.columns[O] || e.columns[O].frozen || e.columns[O].hidden || (F += parseInt(e.columns[O].sizeCalculated));
          a(D).css("width", F + "px");
        }
        e.columns[P] && a(D).css("width", e.columns[P].sizeCalculated);
      }
      a(D).hasClass("w2ui-grid-data-last") && a(D).parents(".w2ui-grid-frecords").length === 0 && a(D).css("width", p.scrollBarSize() + (0 < H && _ === 0 ? H : 0) + "px");
    }), this.initResize(), this.refreshRanges(), (this.last.scrollTop || this.last.scrollLeft) && 0 < m.length && (u.prop("scrollLeft", this.last.scrollLeft), m.prop("scrollTop", this.last.scrollTop), m.prop("scrollLeft", this.last.scrollLeft)), u.css("will-change", "scroll-position");
  }
  getSearchesHTML() {
    let e = `
            <div class="search-title">
                ${p.lang("Advanced Search")}
                <span class="search-logic" style="${this.show.searchLogic ? "" : "display: none"}">
                    <select id="grid_${this.name}_logic" class="w2ui-input">
                        <option value="AND" ${this.last.logic == "AND" ? "selected" : ""}>${p.lang("All")}</option>
                        <option value="OR" ${this.last.logic == "OR" ? "selected" : ""}>${p.lang("Any")}</option>
                    </select>
                </span>
            </div>
            <table cellspacing="0"><tbody>
        `;
    for (let i = 0; i < this.searches.length; i++) {
      var t = this.searches[i];
      if (t.type = String(t.type).toLowerCase(), !t.hidden) {
        t.attr == null && (t.attr = ""), t.text == null && (t.text = ""), t.style == null && (t.style = ""), t.type == null && (t.type = "text"), t.label == null && t.caption != null && (console.log("NOTICE: grid search.caption property is deprecated, please use search.label. Search ->", t), t.label = t.caption);
        var s = `<select id="grid_${this.name}_operator_${i}" class="w2ui-input" data-change="initOperator|${i}">
                    ${this.getOperators(t.type, t.operators)}
                </select>`;
        e += `<tr>
                        <td class="caption">${p.lang(t.label) || ""}</td>
                        <td class="operator">${s}</td>
                        <td class="value">`;
        let n;
        switch (t.type) {
          case "text":
          case "alphanumeric":
          case "hex":
          case "color":
          case "list":
          case "combo":
          case "enum":
            n = "width: 250px;", ["hex", "color"].indexOf(t.type) != -1 && (n = "width: 90px;"), e += `<input rel="search" type="text" id="grid_${this.name}_field_${i}" name="${t.field}"
                               class="w2ui-input" style="${n + t.style}" ${t.attr}>`;
            break;
          case "int":
          case "float":
          case "money":
          case "currency":
          case "percent":
          case "date":
          case "time":
          case "datetime":
            n = "width: 90px;", t.type == "datetime" && (n = "width: 140px;"), e += `<input id="grid_${this.name}_field_${i}" name="${t.field}" ${t.attr} rel="search" type="text"
                                class="w2ui-input" style="${n + t.style}">
                            <span id="grid_${this.name}_range_${i}" style="display: none">&#160;-&#160;&#160;
                                <input rel="search" type="text" class="w2ui-input" style="${n + t.style}" id="grid_${this.name}_field2_${i}" name="${t.field}" ${t.attr}>
                            </span>`;
            break;
          case "select":
            e += `<select rel="search" class="w2ui-input" style="${t.style}" id="grid_${this.name}_field_${i}"
                                name="${t.field}" ${t.attr}></select>`;
        }
        e += t.text + "    </td></tr>";
      }
    }
    return e += `<tr>
            <td colspan="2" class="actions">
                <button type="button" class="w2ui-btn close-btn" data-click="searchClose">${p.lang("Close")}</button>
            </td>
            <td class="actions">
                <button type="button" class="w2ui-btn" data-click="searchReset">${p.lang("Reset")}</button>
                <button type="button" class="w2ui-btn w2ui-btn-blue" data-click="search">${p.lang("Search")}</button>
            </td>
        </tr></tbody></table>`;
  }
  getOperators(e, t) {
    let s = this.operators[this.operatorsMap[e]] || [], i = (t != null && Array.isArray(t) && (s = t), "");
    return s.forEach((n) => {
      let r = n, l = n;
      Array.isArray(n) ? (r = n[1], l = n[0]) : p.isPlainObject(n) && (r = n.text, l = n.oper), r == null && (r = n), i += `<option name="11" value="${l}">${p.lang(r)}</option>
`;
    }), i;
  }
  initOperator(e) {
    let t;
    var s = this.searches[e], i = this.getSearchData(s.field), n = a(`#w2overlay-${this.name}-search-overlay`), r = n.find(`#grid_${this.name}_range_` + e);
    let l = n.find(`#grid_${this.name}_field_` + e), h = n.find(`#grid_${this.name}_field2_` + e);
    var o = n.find(`#grid_${this.name}_operator_` + e).val();
    switch (l.show(), r.hide(), o) {
      case "between":
        r.show();
        break;
      case "null":
      case "not null":
        l.hide(), l.val(o), l.trigger("change");
    }
    switch (s.type) {
      case "text":
      case "alphanumeric":
        var c = l[0]._w2field;
        c && c.reset();
        break;
      case "int":
      case "float":
      case "hex":
      case "color":
      case "money":
      case "currency":
      case "percent":
      case "date":
      case "time":
      case "datetime":
        l[0]._w2field || (new De(s.type, { el: l[0], ...s.options }), new De(s.type, { el: h[0], ...s.options }), setTimeout(() => {
          l.trigger("keydown"), h.trigger("keydown");
        }, 1));
        break;
      case "list":
      case "combo":
      case "enum":
        t = s.options, s.type == "list" && (t.selected = {}), s.type == "enum" && (t.selected = []), i && (t.selected = i.value), l[0]._w2field || (c = new De(s.type, { el: l[0], ...t }), i && i.text != null && c.set({ id: i.value, text: i.text }));
        break;
      case "select":
        t = '<option value="">--</option>';
        for (let u = 0; u < s.options.items.length; u++) {
          var d = s.options.items[u];
          if (p.isPlainObject(s.options.items[u])) {
            let f = d.id, m = d.text;
            f == null && d.value != null && (f = d.value), m == null && d.text != null && (m = d.text), f == null && (f = ""), t += '<option value="' + f + '">' + m + "</option>";
          } else t += '<option value="' + d + '">' + d + "</option>";
        }
        l.html(t);
    }
  }
  initSearches() {
    var e = a(`#w2overlay-${this.name}-search-overlay`);
    for (let n = 0; n < this.searches.length; n++) {
      var s = this.searches[n], t = this.getSearchData(s.field);
      s.type = String(s.type).toLowerCase(), typeof s.options != "object" && (s.options = {});
      let r = s.operator, l = [...this.operators[this.operatorsMap[s.type]]];
      s.operators && (l = s.operators), p.isPlainObject(r) && (r = r.oper), l.forEach((h, o) => {
        p.isPlainObject(h) && (l[o] = h.oper);
      }), t && t.operator && (r = t.operator);
      var s = this.defaultOperator[this.operatorsMap[s.type]], s = (l.indexOf(r) == -1 && (r = s), e.find(`#grid_${this.name}_operator_` + n).val(r), this.initOperator(n), e.find(`#grid_${this.name}_field_` + n)), i = e.find(`#grid_${this.name}_field2_` + n);
      t != null && (Array.isArray(t.value) ? ["in", "not in"].includes(t.operator) ? s[0]._w2field.set(t.value) : (s.val(t.value[0]).trigger("change"), i.val(t.value[1]).trigger("change")) : t.value != null && s.val(t.value).trigger("change"));
    }
    e.find(".w2ui-grid-search-advanced *[rel=search]").on("keypress", (n) => {
      n.keyCode == 13 && (this.search(), B.hide(this.name + "-search-overlay"));
    });
  }
  getColumnsHTML() {
    let e = this, t = "", s = "";
    var i, n, r;
    return this.show.columnHeaders && (s = 0 < this.columnGroups.length ? (r = l(true), i = function() {
      let h = "<tr>", o = "<tr>", c = "", d = e.columnGroups.length - 1;
      e.columnGroups[d].text == null && e.columnGroups[d].caption != null && (console.log("NOTICE: grid columnGroup.caption property is deprecated, please use columnGroup.text. Group -> ", e.columnGroups[d]), e.columnGroups[d].text = e.columnGroups[d].caption), e.columnGroups[e.columnGroups.length - 1].text != "" && e.columnGroups.push({ text: "" }), e.show.lineNumbers && (h += '<td class="w2ui-head w2ui-col-number" col="line-number">    <div>&#160;</div></td>'), e.show.selectColumn && (h += '<td class="w2ui-head w2ui-col-select" col="select">    <div style="height: 25px">&#160;</div></td>'), e.show.expandColumn && (h += '<td class="w2ui-head w2ui-col-expand" col="expand">    <div style="height: 25px">&#160;</div></td>');
      let u = 0;
      o += `<td id="grid_${e.name}_column_start" class="w2ui-head" col="start" style="border-right: 0"></td>`, e.reorderRows && (o += '<td class="w2ui-head w2ui-col-order" col="order">    <div style="height: 25px">&#160;</div></td>');
      for (let g = 0; g < e.columnGroups.length; g++) {
        var f = e.columnGroups[g], m = e.columns[u] || {};
        f.colspan != null && (f.span = f.colspan), f.span != null && f.span == parseInt(f.span) || (f.span = 1), m.text == null && m.caption != null && (console.log("NOTICE: grid column.caption property is deprecated, please use column.text. Column ->", m), m.text = m.caption);
        let v = 0;
        for (let k = u; k < u + f.span; k++) e.columns[k] && !e.columns[k].hidden && v++;
        if (!((v = g == e.columnGroups.length - 1 ? 100 : v) <= 0)) {
          if (f.main === true) {
            let k = "";
            for (let S = 0; S < e.sortData.length; S++) e.sortData[S].field == m.field && ((e.sortData[S].direction || "").toLowerCase() === "asc" && (k = "w2ui-sort-up"), (e.sortData[S].direction || "").toLowerCase() === "desc") && (k = "w2ui-sort-down");
            let x = "";
            m.resizable !== false && (x = `<div class="w2ui-resizer" name="${u}"></div>`);
            var w = p.lang(typeof m.text == "function" ? m.text(m) : m.text);
            c = `<td id="grid_${e.name}_column_${u}" class="w2ui-head ${k}" col="${u}"     rowspan="2" colspan="${v}">` + x + `    <div class="w2ui-col-group w2ui-col-header ${k ? "w2ui-col-sorted" : ""}">        <div class="${k}"></div>` + (w || "&#160;") + "    </div></td>";
          } else w = p.lang(typeof f.text == "function" ? f.text(f) : f.text), c = `<td id="grid_${e.name}_column_${u}" class="w2ui-head" col="${u}" colspan="${v}">    <div class="w2ui-col-group" style="${f.style ?? ""}">${w || "&#160;"}</div></td>`;
          m && m.frozen ? h += c : o += c;
        }
        u += f.span;
      }
      return h += "<td></td></tr>", o += `<td id="grid_${e.name}_column_end" class="w2ui-head" col="end"></td></tr>`, [h, o];
    }(), n = l(false), t = r[0] + i[0] + n[0], r[1] + i[1] + n[1]) : (r = l(true), t = r[0], r[1])), [t, s];
    function l(h) {
      let o = "<tr>", c = "<tr>", d = (e.show.lineNumbers && (o += '<td class="w2ui-head w2ui-col-number" col="line-number">    <div>#</div></td>'), e.show.selectColumn && (o += `<td class="w2ui-head w2ui-col-select" col="select">    <div>        <input type="checkbox" id="grid_${e.name}_check_all" class="w2ui-select-all" tabindex="-1"            style="${e.multiSelect == 0 ? "display: none;" : ""}"        >    </div></td>`), e.show.expandColumn && (o += '<td class="w2ui-head w2ui-col-expand" col="expand">    <div>&#160;</div></td>'), 0), u = 0, f;
      c += `<td id="grid_${e.name}_column_start" class="w2ui-head" col="start" style="border-right: 0"></td>`, e.reorderRows && (c += '<td class="w2ui-head w2ui-col-order" col="order">    <div>&#160;</div></td>');
      for (let g = 0; g < e.columns.length; g++) {
        var m, w = e.columns[g];
        w.text == null && w.caption != null && (console.log("NOTICE: grid column.caption property is deprecated, please use column.text. Column -> ", w), w.text = w.caption), w.size == null && (w.size = "100%"), g == u && (f = e.columnGroups[d++] || {}, u += f.span), (g < e.last.colStart || g > e.last.colEnd) && !w.frozen || w.hidden || f.main === true && !h || (m = e.getColumnCellHTML(g), w && w.frozen ? o += m : c += m);
      }
      return o += '<td class="w2ui-head w2ui-head-last"><div>&#160;</div></td>', c += '<td class="w2ui-head w2ui-head-last" col="end"><div>&#160;</div></td>', o += "</tr>", c += "</tr>", [o, c];
    }
  }
  getColumnCellHTML(e) {
    var t = this.columns[e];
    if (t == null) return "";
    var s = !this.reorderColumns || this.columnGroups && this.columnGroups.length ? "" : " w2ui-col-reorderable ";
    let i = "";
    for (let o = 0; o < this.sortData.length; o++) this.sortData[o].field == t.field && ((this.sortData[o].direction || "").toLowerCase() === "asc" && (i = "w2ui-sort-up"), (this.sortData[o].direction || "").toLowerCase() === "desc") && (i = "w2ui-sort-down");
    var n, r = this.last.selection.columns;
    let l = false;
    for (n in r) for (let o = 0; o < r[n].length; o++) r[n][o] == e && (l = true);
    var h = p.lang(typeof t.text == "function" ? t.text(t) : t.text);
    return '<td id="grid_' + this.name + "_column_" + e + '" col="' + e + '" class="w2ui-head ' + i + s + '">' + (t.resizable !== false ? '<div class="w2ui-resizer" name="' + e + '"></div>' : "") + '    <div class="w2ui-col-header ' + (i ? "w2ui-col-sorted" : "") + " " + (l ? "w2ui-col-selected" : "") + '">        <div class="' + i + '"></div>' + (h || "&#160;") + "    </div></td>";
  }
  columnTooltipShow(i, t) {
    var s = a(this.box).find("#grid_" + this.name + "_column_" + i), i = this.columns[i], n = this.columnTooltip;
    B.show({ name: this.name + "-column-tooltip", anchor: s.get(0), html: i == null ? void 0 : i.tooltip, position: n });
  }
  columnTooltipHide(e, t) {
    B.hide(this.name + "-column-tooltip");
  }
  getRecordsHTML() {
    var _a;
    let e = this.records.length;
    var t = typeof this.url != "object" ? this.url : this.url.get, t = ((e = this.searchData.length == 0 || t ? e : this.last.searchIds.length) > this.vs_start ? this.last.show_extra = this.vs_extra : this.last.show_extra = this.vs_start, a(this.box).find(`#grid_${this.name}_records`));
    let s = Math.floor((((_a = t.get(0)) == null ? void 0 : _a.clientHeight) || 0) / this.recordHeight) + this.last.show_extra + 1;
    (!this.fixedBody || s > e) && (s = e);
    var i = this.getRecordHTML(-1, 0);
    let n = "<table><tbody>" + i[0], r = "<table><tbody>" + i[1];
    n += '<tr id="grid_' + this.name + '_frec_top" line="top" style="height: 0px">    <td colspan="2000"></td></tr>', r += '<tr id="grid_' + this.name + '_rec_top" line="top" style="height: 0px">    <td colspan="2000"></td></tr>';
    for (let l = 0; l < s; l++) i = this.getRecordHTML(l, l + 1), n += i[0], r += i[1];
    return t = (e - s) * this.recordHeight, n += '<tr id="grid_' + this.name + '_frec_bottom" rec="bottom" line="bottom" style="height: ' + t + 'px; vertical-align: top">    <td colspan="2000" style="border-right: 1px solid #D6D5D7;"></td></tr><tr id="grid_' + this.name + '_frec_more" style="display: none; ">    <td colspan="2000" class="w2ui-load-more"></td></tr></tbody></table>', r += '<tr id="grid_' + this.name + '_rec_bottom" rec="bottom" line="bottom" style="height: ' + t + 'px; vertical-align: top">    <td colspan="2000" style="border: 0"></td></tr><tr id="grid_' + this.name + '_rec_more" style="display: none">    <td colspan="2000" class="w2ui-load-more"></td></tr></tbody></table>', this.last.range_start = 0, this.last.range_end = s, [n, r];
  }
  getSummaryHTML() {
    if (this.summary.length !== 0) {
      var e = this.getRecordHTML(-1, 0);
      let t = "<table><tbody>" + e[0], s = "<table><tbody>" + e[1];
      for (let i = 0; i < this.summary.length; i++) e = this.getRecordHTML(i, i + 1, true), t += e[0], s += e[1];
      return t += "</tbody></table>", s += "</tbody></table>", [t, s];
    }
  }
  scroll(e) {
    let t = this;
    var s = typeof this.url != "object" ? this.url : this.url.get, i = a(this.box).find(`#grid_${this.name}_records`), n = a(this.box).find(`#grid_${this.name}_frecords`);
    e && (x = e.target.scrollTop, e = e.target.scrollLeft, this.last.scrollTop = x, this.last.scrollLeft = e, d = a(this.box).find(`#grid_${this.name}_columns`)[0], u = a(this.box).find(`#grid_${this.name}_summary`)[0], d && (d.scrollLeft = e), u && (u.scrollLeft = e), n[0]) && (n[0].scrollTop = x), this.last.bubbleEl && (B.hide(this.name + "-bubble"), this.last.bubbleEl = null);
    let r = null, l = null;
    if (this.disableCVS || 0 < this.columnGroups.length) r = 0, l = this.columns.length - 1;
    else {
      var h, o = i.prop("clientWidth");
      let C = 0;
      for (let y = 0; y < this.columns.length; y++) this.columns[y].frozen || this.columns[y].hidden || (h = parseInt(this.columns[y].sizeCalculated || this.columns[y].size), C + h + 30 > this.last.scrollLeft && r == null && (r = y), C + h - 30 > this.last.scrollLeft + o && l == null && (l = y), C += h);
      l == null && (l = this.columns.length - 1);
    }
    if (r != null && (r < 0 && (r = 0), l < 0 && (l = 0), r == l && (0 < r ? r-- : l++), r != this.last.colStart || l != this.last.colEnd)) {
      var c = a(this.box), d = Math.abs(r - this.last.colStart), u = Math.abs(l - this.last.colEnd);
      if (d < 5 && u < 5) {
        var f = c.find(`.w2ui-grid-columns #grid_${this.name}_column_start`), m = c.find(".w2ui-grid-columns .w2ui-head-last"), w = c.find(`#grid_${this.name}_records .w2ui-grid-data-spacer`), g = c.find(`#grid_${this.name}_records .w2ui-grid-data-last`), v = c.find(`#grid_${this.name}_summary .w2ui-grid-data-spacer`), k = c.find(`#grid_${this.name}_summary .w2ui-grid-data-last`);
        if (r > this.last.colStart) for (let C = this.last.colStart; C < r; C++) c.find("#grid_" + this.name + "_columns #grid_" + this.name + "_column_" + C).remove(), c.find("#grid_" + this.name + '_records td[col="' + C + '"]').remove(), c.find("#grid_" + this.name + '_summary td[col="' + C + '"]').remove();
        if (l < this.last.colEnd) for (let C = this.last.colEnd; C > l; C--) c.find("#grid_" + this.name + "_columns #grid_" + this.name + "_column_" + C).remove(), c.find("#grid_" + this.name + '_records td[col="' + C + '"]').remove(), c.find("#grid_" + this.name + '_summary td[col="' + C + '"]').remove();
        if (r < this.last.colStart) for (let C = this.last.colStart - 1; C >= r; C--) this.columns[C] && (this.columns[C].frozen || this.columns[C].hidden) || (f.after(this.getColumnCellHTML(C)), w.each((y) => {
          var T = a(y).parent().attr("index");
          let M = '<td class="w2ui-grid-data" col="' + C + '" style="height: 0px"></td>';
          T != null && (M = this.getCellHTML(parseInt(T), C, false)), a(y).after(M);
        }), v.each((y) => {
          var T = a(y).parent().attr("index");
          let M = '<td class="w2ui-grid-data" col="' + C + '" style="height: 0px"></td>';
          T != null && (M = this.getCellHTML(parseInt(T), C, true)), a(y).after(M);
        }));
        if (l > this.last.colEnd) for (let C = this.last.colEnd + 1; C <= l; C++) this.columns[C] && (this.columns[C].frozen || this.columns[C].hidden) || (m.before(this.getColumnCellHTML(C)), g.each((y) => {
          var T = a(y).parent().attr("index");
          let M = '<td class="w2ui-grid-data" col="' + C + '" style="height: 0px"></td>';
          T != null && (M = this.getCellHTML(parseInt(T), C, false)), a(y).before(M);
        }), k.each((y) => {
          var T = a(y).parent().attr("index") || -1, T = this.getCellHTML(parseInt(T), C, true);
          a(y).before(T);
        }));
        this.last.colStart = r, this.last.colEnd = l;
      } else {
        this.last.colStart = r, this.last.colEnd = l;
        var e = this.getColumnsHTML(), x = this.getRecordsHTML(), d = this.getSummaryHTML(), u = c.find(`#grid_${this.name}_columns`);
        let M = c.find(`#grid_${this.name}_records`);
        var S = c.find(`#grid_${this.name}_frecords`);
        let R = c.find(`#grid_${this.name}_summary`);
        u.find("tbody").html(e[1]), S.html(x[0]), M.prepend(x[1]), d != null && R.html(d[1]), setTimeout(() => {
          M.find(":scope > table").filter(":not(table:first-child)").remove(), R[0] && (R[0].scrollLeft = this.last.scrollLeft);
        }, 1);
      }
      this.resizeRecords();
    }
    let $ = this.records.length;
    if ($ > this.total && this.total !== -1 && ($ = this.total), ($ = this.searchData.length == 0 || s ? $ : this.last.searchIds.length) !== 0 && i.length !== 0 && i.prop("clientHeight") !== 0) {
      $ > this.vs_start ? this.last.show_extra = this.vs_extra : this.last.show_extra = this.vs_start;
      let C = Math.round(i.prop("scrollTop") / this.recordHeight + 1), y = C + (Math.round(i.prop("clientHeight") / this.recordHeight) - 1);
      if (C > $ && (C = $), y >= $ - 1 && (y = $), a(this.box).find("#grid_" + this.name + "_footer .w2ui-footer-right").html((this.show.statusRange ? p.formatNumber(this.offset + C) + "-" + p.formatNumber(this.offset + y) + (this.total != -1 ? " " + p.lang("of") + " " + p.formatNumber(this.total) : "") : "") + (s && this.show.statusBuffered ? " (" + p.lang("buffered") + " " + p.formatNumber($) + (0 < this.offset ? ", skip " + p.formatNumber(this.offset) : "") + ")" : "")), s || this.fixedBody && !(this.total != -1 && this.total <= this.vs_start)) {
        let Y = function() {
          t.markSearch && (clearTimeout(t.last.marker_timer), t.last.marker_timer = setTimeout(() => {
            var j = [];
            for (let ne = 0; ne < t.searchData.length; ne++) {
              var U = t.searchData[ne], G = t.getSearch(U.field);
              G && !G.hidden && (G = t.getColumn(U.field, true), j.push({ field: U.field, search: U.value, col: G }));
            }
            0 < j.length && j.forEach((ne) => {
              var ge = a(t.box).find('td[col="' + ne.col + '"]:not(.w2ui-head)');
              p.marker(ge, ne.search);
            });
          }, 50));
        }, T = Math.floor(i.prop("scrollTop") / this.recordHeight) - this.last.show_extra, M = T + Math.floor(i.prop("clientHeight") / this.recordHeight) + 2 * this.last.show_extra + 1;
        T < 1 && (T = 1), M > this.total && this.total != -1 && (M = this.total);
        var I = i.find("#grid_" + this.name + "_rec_top"), A = i.find("#grid_" + this.name + "_rec_bottom"), _ = n.find("#grid_" + this.name + "_frec_top"), E = n.find("#grid_" + this.name + "_frec_bottom"), u = (String(I.next().prop("id")).indexOf("_expanded_row") != -1 && (I.next().remove(), _.next().remove()), this.total > M && String(A.prev().prop("id")).indexOf("_expanded_row") != -1 && (A.prev().remove(), E.prev().remove()), parseInt(I.next().attr("line"))), e = parseInt(A.prev().attr("line"));
        let z, L, D, P, F;
        if (u < T || u == 1 || this.last.pull_refresh) {
          if (M <= e + this.last.show_extra - 2 && M != this.total) return;
          for (this.last.pull_refresh = false; L = n.find("#grid_" + this.name + "_frec_top").next(), !((D = i.find("#grid_" + this.name + "_rec_top").next()).attr("line") == "bottom" || !(parseInt(D.attr("line")) < T)); ) L.remove(), D.remove();
          z = i.find("#grid_" + this.name + "_rec_bottom").prev(), (P = z.attr("line")) == "top" && (P = T);
          for (let j = parseInt(P) + 1; j <= M; j++) this.records[j - 1] && ((D = this.records[j - 1].w2ui) && !Array.isArray(D.children) && (D.expanded = false), F = this.getRecordHTML(j - 1, j), A.before(F[1]), E.before(F[0]));
        } else {
          if (T >= u - this.last.show_extra + 2 && 1 < T) return;
          for (; L = n.find("#grid_" + this.name + "_frec_bottom").prev(), !((D = i.find("#grid_" + this.name + "_rec_bottom").prev()).attr("line") == "top" || !(parseInt(D.attr("line")) > M)); ) L.remove(), D.remove();
          z = i.find("#grid_" + this.name + "_rec_top").next(), (P = z.attr("line")) == "bottom" && (P = M);
          for (let j = parseInt(P) - 1; j >= T; j--) this.records[j - 1] && ((D = this.records[j - 1].w2ui) && !Array.isArray(D.children) && (D.expanded = false), F = this.getRecordHTML(j - 1, j), I.after(F[1]), _.after(F[0]));
        }
        Y(), setTimeout(() => {
          this.refreshRanges();
        }, 0), S = (T - 1) * this.recordHeight;
        let O = ($ - M) * this.recordHeight;
        O < 0 && (O = 0), I.css("height", S + "px"), _.css("height", S + "px"), A.css("height", O + "px"), E.css("height", O + "px"), this.last.range_start = T, this.last.range_end = M, Math.floor(i.prop("scrollTop") / this.recordHeight) + Math.floor(i.prop("clientHeight") / this.recordHeight) + 10 > $ && this.last.pull_more !== true && ($ < this.total - this.offset || this.total == -1 && this.last.fetch.hasMore) && (this.autoLoad === true && (this.last.pull_more = true, this.last.fetch.offset += this.limit, this.request("load")), a(this.box).find("#grid_" + this.name + "_rec_more, #grid_" + this.name + "_frec_more").show().eq(1).off(".load-more").on("click.load-more", function() {
          a(this).find("td").html('<div><div style="width: 20px; height: 20px;" class="w2ui-spinner"></div></div>'), t.last.pull_more = true, t.last.fetch.offset += t.limit, t.request("load");
        }).find("td").html(t.autoLoad ? '<div><div style="width: 20px; height: 20px;" class="w2ui-spinner"></div></div>' : '<div style="padding-top: 15px">' + p.lang("Load ${count} more...", { count: t.limit }) + "</div>"));
      }
    }
  }
  getRecordHTML(e, t, s) {
    var _a, _b, _c, _d, _e2;
    let i = "", n = "";
    var r = this.last.selection;
    let l;
    if (e == -1) {
      i += '<tr line="0">', n += '<tr line="0">', this.show.lineNumbers && (i += '<td class="w2ui-col-number" style="height: 0px"></td>'), this.show.selectColumn && (i += '<td class="w2ui-col-select" style="height: 0px"></td>'), this.show.expandColumn && (i += '<td class="w2ui-col-expand" style="height: 0px"></td>'), n += '<td class="w2ui-grid-data w2ui-grid-data-spacer" col="start" style="height: 0px; width: 0px"></td>', this.reorderRows && (n += '<td class="w2ui-col-order" style="height: 0px"></td>');
      for (let w = 0; w < this.columns.length; w++) {
        var h = this.columns[w], o = '<td class="w2ui-grid-data" col="' + w + '" style="height: 0px;"></td>';
        h.frozen && !h.hidden ? i += o : h.hidden || w < this.last.colStart || w > this.last.colEnd || (n += o);
      }
      i += '<td class="w2ui-grid-data-last" style="height: 0px"></td>', n += '<td class="w2ui-grid-data-last" col="end" style="height: 0px"></td>';
    } else {
      var c = typeof this.url != "object" ? this.url : this.url.get;
      if (s !== true) {
        if (0 < this.searchData.length && !c) {
          if (e >= this.last.searchIds.length) return "";
          e = this.last.searchIds[e];
        } else if (e >= this.records.length) return "";
        l = this.records[e];
      } else {
        if (e >= this.summary.length) return "";
        l = this.summary[e];
      }
      if (!l) return "";
      l.recid == null && this.recid != null && (c = this.parseField(l, this.recid)) != null && (l.recid = c);
      let w = false, g = (r.indexes.indexOf(e) != -1 && (w = true), l.w2ui ? l.w2ui.style : ""), v = (g != null && typeof g == "string" || (g = ""), l.w2ui ? l.w2ui.class : "");
      if (v != null && typeof v == "string" || (v = ""), i += '<tr id="grid_' + this.name + "_frec_" + l.recid + '" recid="' + l.recid + '" line="' + t + '" index="' + e + '"  class="' + (t % 2 == 0 ? "w2ui-even" : "w2ui-odd") + " w2ui-record " + v + (w && this.selectType == "row" ? " w2ui-selected" : "") + (l.w2ui && l.w2ui.editable === false ? " w2ui-no-edit" : "") + (l.w2ui && l.w2ui.expanded === true ? " w2ui-expanded" : "") + '"  style="height: ' + this.recordHeight + "px; " + (w || g == "" ? g.replace("background-color", "none") : g) + '" ' + (g != "" ? 'custom_style="' + g + '"' : "") + ">", n += '<tr id="grid_' + this.name + "_rec_" + l.recid + '" recid="' + l.recid + '" line="' + t + '" index="' + e + '"  class="' + (t % 2 == 0 ? "w2ui-even" : "w2ui-odd") + " w2ui-record " + v + (w && this.selectType == "row" ? " w2ui-selected" : "") + (l.w2ui && l.w2ui.editable === false ? " w2ui-no-edit" : "") + (l.w2ui && l.w2ui.expanded === true ? " w2ui-expanded" : "") + '"  style="height: ' + this.recordHeight + "px; " + (w || g == "" ? g.replace("background-color", "none") : g) + '" ' + (g != "" ? 'custom_style="' + g + '"' : "") + ">", this.show.lineNumbers && (i += '<td id="grid_' + this.name + "_cell_" + e + "_number" + (s ? "_s" : "") + '"    class="w2ui-col-number ' + (w ? " w2ui-row-selected" : "") + '"' + (this.reorderRows ? ' style="cursor: move"' : "") + ">" + (s !== true ? this.getLineHTML(t, l) : "") + "</td>"), this.show.selectColumn && (i += '<td id="grid_' + this.name + "_cell_" + e + "_select" + (s ? "_s" : "") + '" class="w2ui-grid-data w2ui-col-select">' + (s === true || l.w2ui && l.w2ui.hideCheckBox === true ? "" : '    <div>        <input class="w2ui-grid-select-check" type="checkbox" tabindex="-1" ' + (w ? 'checked="checked"' : "") + ' style="pointer-events: none"/>    </div>') + "</td>"), this.show.expandColumn) {
        let S = "";
        S = ((_a = l.w2ui) == null ? void 0 : _a.expanded) === true ? "-" : "+", ((_b = l.w2ui) == null ? void 0 : _b.expanded) != "none" && Array.isArray((_c = l.w2ui) == null ? void 0 : _c.children) && ((_d = l.w2ui) == null ? void 0 : _d.children.length) || (S = "+"), ((_e2 = l.w2ui) == null ? void 0 : _e2.expanded) == "spinner" && (S = '<div class="w2ui-spinner" style="width: 16px; margin: -2px 2px;"></div>'), i += '<td id="grid_' + this.name + "_cell_" + e + "_expand" + (s ? "_s" : "") + '" class="w2ui-grid-data w2ui-col-expand">' + (s !== true ? `<div>${S}</div>` : "") + "</td>";
      }
      n += '<td class="w2ui-grid-data-spacer" col="start" style="border-right: 0"></td>', this.reorderRows && (n += '<td id="grid_' + this.name + "_cell_" + e + "_order" + (s ? "_s" : "") + '" class="w2ui-grid-data w2ui-col-order" col="order">' + (s !== true ? '<div title="Drag to reorder">&nbsp;</div>' : "") + "</td>");
      let k = 0, x = 0;
      for (; ; ) {
        let S = 1;
        var d, u = this.columns[k];
        if (u == null) break;
        if (u.hidden) k++, 0 < x && x--;
        else if (0 < x) {
          if (k++, this.columns[k] == null) break;
          l.w2ui.colspan[this.columns[k - 1].field] = 0, x--;
        } else {
          if (l.w2ui && (m = l.w2ui.colspan, d = this.columns[k].field, m) && m[d] === 0 && delete m[d], !(k < this.last.colStart || k > this.last.colEnd) || u.frozen) {
            if (l.w2ui && typeof l.w2ui.colspan == "object") {
              var f = parseInt(l.w2ui.colspan[u.field]) || null;
              if (1 < f) {
                let $ = 0;
                for (let I = k; I < k + f && !(I >= this.columns.length); I++) this.columns[I].hidden && $++;
                S = f - $, x = f - 1;
              }
            }
            var m = this.getCellHTML(e, k, s, S);
            u.frozen ? i += m : n += m;
          }
          k++;
        }
      }
      i += '<td class="w2ui-grid-data-last"></td>', n += '<td class="w2ui-grid-data-last" col="end"></td>';
    }
    return i += "</tr>", n += "</tr>", [i, n];
  }
  getLineHTML(e) {
    return "<div>" + e + "</div>";
  }
  getCellHTML(e, t, s, i) {
    var _a, _b, _c, _d;
    let n = this, r = this.columns[t];
    if (r == null) return "";
    let l = (s !== true ? this.records : this.summary)[e], { value: h, style: o, className: c, attr: d, divAttr: u } = this.getCellValue(e, t, s, true);
    var f = e !== -1 ? this.getCellEditable(e, t) : "";
    let m = "max-height: " + parseInt(this.recordHeight) + "px;" + (r.clipboardCopy ? "margin-right: 20px" : "");
    var w = !s && ((_a = l == null ? void 0 : l.w2ui) == null ? void 0 : _a.changes) && l.w2ui.changes[r.field] != null, g = this.last.selection;
    let v = false, k = "";
    if (g.indexes.indexOf(e) != -1 && (v = true), i == null && (i = ((_b = l == null ? void 0 : l.w2ui) == null ? void 0 : _b.colspan) && l.w2ui.colspan[r.field] ? l.w2ui.colspan[r.field] : 1), t === 0 && Array.isArray((_c = l == null ? void 0 : l.w2ui) == null ? void 0 : _c.children)) {
      let _ = 0, E = this.get(l.w2ui.parent_recid, true);
      for (; E != null; ) {
        _++;
        var x = this.records[E].w2ui;
        if (x == null || x.parent_recid == null) break;
        E = this.get(x.parent_recid, true);
      }
      if (l.w2ui.parent_recid) for (let C = 0; C < _; C++) k += '<span class="w2ui-show-children w2ui-icon-empty"></span>';
      var S = 0 < l.w2ui.children.length ? l.w2ui.expanded ? "w2ui-icon-collapse" : "w2ui-icon-expand" : "w2ui-icon-empty";
      k += `<span class="w2ui-show-children ${S}"></span>`;
    }
    if (r.info === true && (r.info = {}), r.info != null) {
      let _ = "w2ui-icon-info", E = (typeof r.info.icon == "function" ? _ = r.info.icon(l, { self: this, index: e, colIndex: t, summary: !!s }) : typeof r.info.icon == "object" ? _ = r.info.icon[this.parseField(l, r.field)] || "" : typeof r.info.icon == "string" && (_ = r.info.icon), r.info.style || "");
      typeof r.info.style == "function" ? E = r.info.style(l, { self: this, index: e, colIndex: t, summary: !!s }) : typeof r.info.style == "object" ? E = r.info.style[this.parseField(l, r.field)] || "" : typeof r.info.style == "string" && (E = r.info.style), k += `<span class="w2ui-info ${_}" style="${E}"></span>`;
    }
    let $ = h, I = (f && ["checkbox", "check"].indexOf(f.type) != -1 && (m += "text-align: center;", $ = `<input tabindex="-1" type="checkbox" class="w2ui-editable-checkbox"
                            data-changeInd="${s ? -(e + 1) : e}" data-colInd="${t}" ${$ ? 'checked="checked"' : ""}>`, k = ""), ($ = `<div style="${m}" ${function(_) {
      let E;
      return n.show.recordTitles && (r.title != null ? (typeof r.title == "function" && (E = r.title.call(n, l, { self: this, index: e, colIndex: t, summary: !!s })), typeof r.title == "string" && (E = r.title)) : E = p.stripTags(String(_).replace(/"/g, "''"))), E != null ? 'title="' + String(E) + '"' : "";
    }($)} ${u}>${k}${String($)}</div>`) == null && ($ = ""), typeof r.render == "string" && (S = r.render.toLowerCase().split(":"), ["number", "int", "float", "money", "currency", "percent", "size"].indexOf(S[0]) != -1) && (o += "text-align: right;"), (l == null ? void 0 : l.w2ui) && (typeof l.w2ui.style == "object" && (typeof l.w2ui.style[t] == "string" && (o += l.w2ui.style[t] + ";"), typeof l.w2ui.style[r.field] == "string") && (o += l.w2ui.style[r.field] + ";"), typeof l.w2ui.class == "object") && (typeof l.w2ui.class[t] == "string" && (c += l.w2ui.class[t] + " "), typeof l.w2ui.class[r.field] == "string") && (c += l.w2ui.class[r.field] + " "), false);
    v && ((_d = g.columns[e]) == null ? void 0 : _d.includes(t)) && (I = true);
    let A;
    return r.clipboardCopy && (A = '<span class="w2ui-clipboard-copy w2ui-icon-paste"></span>'), $ = '<td class="w2ui-grid-data' + (I ? " w2ui-selected" : "") + " " + c + (w ? " w2ui-changed" : "") + '"    id="grid_' + this.name + "_data_" + e + "_" + t + '" col="' + t + '"    style="' + o + (r.style != null ? r.style : "") + '" ' + (r.attr != null ? r.attr : "") + d + (1 < i ? 'colspan="' + i + '"' : "") + ">" + $ + (A && p.stripTags($) ? A : "") + "</td>", $ = e === -1 && s === true ? '<td class="w2ui-grid-data" col="' + t + '" style="height: 0px; ' + o + '" ' + (1 < i ? 'colspan="' + i + '"' : "") + "></td>" : $;
  }
  clipboardCopy(e, t, s) {
    var i = (s ? this.summary : this.records)[e], n = this.columns[t];
    let r = n ? this.parseField(i, n.field) : "";
    typeof n.clipboardCopy == "function" && (r = n.clipboardCopy(i, { self: this, index: e, colIndex: t, summary: !!s })), a(this.box).find("#grid_" + this.name + "_focus").text(r).get(0).select(), document.execCommand("copy");
  }
  showBubble(e, t, s) {
    var i = this.columns[t].info;
    if (i) {
      let u = "";
      var n = this.records[e], r = a(this.box).find(`${s ? ".w2ui-grid-summary" : ""} #grid_${this.name}_data_${e}_${t} .w2ui-info`);
      if (this.last.bubbleEl && B.hide(this.name + "-bubble"), this.last.bubbleEl = r, i.fields == null) {
        i.fields = [];
        for (let m = 0; m < this.columns.length; m++) {
          var l = this.columns[m];
          i.fields.push(l.field + (typeof l.render == "string" ? ":" + l.render : ""));
        }
      }
      let f = i.fields;
      if (typeof f == "function" && (f = f(n, { self: this, index: e, colIndex: t, summary: !!s })), typeof i.render == "function") u = i.render(n, { self: this, index: e, colIndex: t, summary: !!s });
      else if (Array.isArray(f)) {
        u = '<table cellpadding="0" cellspacing="0">';
        for (let m = 0; m < f.length; m++) {
          var h = String(f[m]).split(":");
          if (h[0] == "" || h[0] == "-" || h[0] == "--" || h[0] == "---") u += '<tr><td colspan=2><div style="border-top: ' + (h[0] == "" ? "0" : "1") + 'px solid #C1BEBE; margin: 6px 0px;"></div></td></tr>';
          else {
            let w = this.getColumn(h[0]), g = (w = w ?? { field: h[0], caption: h[0] }) ? this.parseField(n, w.field) : "";
            1 < h.length && (p.formatters[h[1]] ? g = p.formatters[h[1]](g, h[2] || null, n) : console.log('ERROR: w2utils.formatters["' + h[1] + '"] does not exists.')), (i.showEmpty === true || g != null && g != "") && (i.maxLength != null && typeof g == "string" && g.length > i.maxLength && (g = g.substr(0, i.maxLength) + "..."), u += "<tr><td>" + w.text + "</td><td>" + ((g === 0 ? "0" : g) || "") + "</td></tr>");
          }
        }
        u += "</table>";
      } else if (p.isPlainObject(f)) {
        for (var o in u = '<table cellpadding="0" cellspacing="0">', f) {
          var c = f[o];
          if (c == "" || c == "-" || c == "--" || c == "---") u += '<tr><td colspan=2><div style="border-top: ' + (c == "" ? "0" : "1") + 'px solid #C1BEBE; margin: 6px 0px;"></div></td></tr>';
          else {
            var d = String(c).split(":");
            let m = this.getColumn(d[0]), w = (m = m ?? { field: d[0], caption: d[0] }) ? this.parseField(n, m.field) : "";
            1 < d.length && (p.formatters[d[1]] ? w = p.formatters[d[1]](w, d[2] || null, n) : console.log('ERROR: w2utils.formatters["' + d[1] + '"] does not exists.')), typeof c == "function" && (w = c(n, { self: this, index: e, colIndex: t, summary: !!s })), (i.showEmpty === true || w != null && w != "") && (i.maxLength != null && typeof w == "string" && w.length > i.maxLength && (w = w.substr(0, i.maxLength) + "..."), u += "<tr><td>" + o + "</td><td>" + ((w === 0 ? "0" : w) || "") + "</td></tr>");
          }
        }
        u += "</table>";
      }
      return B.show(p.extend({ name: this.name + "-bubble", html: u, anchor: r.get(0), position: "top|bottom", class: "w2ui-info-bubble", style: "", hideOn: ["doc-click"] }, i.options ?? {})).hide(() => [this.last.bubbleEl = null]);
    }
  }
  getCellEditable(e, t) {
    var s = this.columns[t], i = this.records[e];
    if (!i || !s) return null;
    let n = i.w2ui ? i.w2ui.editable : null;
    return n === false ? null : (n != null && n !== true || typeof (n = 0 < Object.keys(s.editable ?? {}).length ? s.editable : null) == "function" && (s = this.getCellValue(e, t, false), n = n.call(this, i, { self: this, value: s, index: e, colIndex: t })), n);
  }
  getCellValue(e, t, s, i) {
    var _a, _b;
    var n = this.columns[t], r = (s !== true ? this.records : this.summary)[e];
    let l = this.parseField(r, n.field), h = "", o = "", c = "", d = "";
    if (((_b = (_a = r == null ? void 0 : r.w2ui) == null ? void 0 : _a.changes) == null ? void 0 : _b[n.field]) != null && (l = r.w2ui.changes[n.field]), n.render != null && e !== -1) {
      if (typeof n.render == "function" && r != null) {
        let u;
        try {
          u = n.render(r, { self: this, value: l, index: e, colIndex: t, summary: !!s });
        } catch (f) {
          throw new Error(`Render function for column "${n.field}" in grid "${this.name}": -- ` + f.message);
        }
        u != null && typeof u == "object" && typeof u != "function" ? (u.id != null && u.text != null ? l = u.text : typeof u.html == "string" ? l = (u.html || "").trim() : (l = "", console.log("ERROR: render function should return a primitive or an object of the following structure.", { html: "", attr: "", style: "", class: "", divAttr: "" })), c = u.attr ?? "", o = u.style ?? "", h = u.class ?? "", d = u.divAttr ?? "") : l = String(u || "").trim();
      }
      if (typeof n.render == "object" && (e = n.render[l]) != null && e !== "" && (l = e), typeof n.render == "string") {
        t = n.render.toLowerCase().indexOf(":"), s = [], t == -1 ? (s[0] = n.render.toLowerCase(), s[1] = "") : (s[0] = n.render.toLowerCase().substr(0, t), s[1] = n.render.toLowerCase().substr(t + 1));
        let u = p.formatters[s[0]];
        n.options && n.options.autoFormat === false && (u = null), l = typeof u == "function" ? u(l, s[1], r) : "";
      }
    }
    return l == null && (l = ""), i ? { value: l, attr: c, style: o, className: h, divAttr: d } : l;
  }
  getFooterHTML() {
    return '<div>    <div class="w2ui-footer-left"></div>    <div class="w2ui-footer-right"></div>    <div class="w2ui-footer-center"></div></div>';
  }
  status(e) {
    if (e != null) a(this.box).find(`#grid_${this.name}_footer`).find(".w2ui-footer-left").html(e);
    else {
      let t = "";
      if (e = this.getSelection(), 0 < e.length && (this.show.statusSelection && 1 < e.length && (t = String(e.length).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + p.settings.groupSymbol) + " " + p.lang("selected")), this.show.statusRecordID) && e.length == 1) {
        let s = e[0];
        typeof s == "object" && (s = s.recid + ", " + p.lang("Column") + ": " + s.column), t = p.lang("Record ID") + ": " + s + " ";
      }
      a(this.box).find("#grid_" + this.name + "_footer .w2ui-footer-left").html(t);
    }
  }
  lock(e, t) {
    let s = Array.from(arguments);
    s.unshift(this.box), setTimeout(() => {
      a(this.box).find("#grid_" + this.name + "_empty_msg").remove(), p.lock(...s);
    }, 10);
  }
  unlock(e) {
    setTimeout(() => {
      a(this.box).find(".w2ui-message").hasClass("w2ui-closing") || p.unlock(this.box, e);
    }, 25);
  }
  stateSave(e) {
    var t = { columns: [], show: p.clone(this.show), last: { search: this.last.search, multi: this.last.multi, logic: this.last.logic, label: this.last.label, field: this.last.field, scrollTop: this.last.scrollTop, scrollLeft: this.last.scrollLeft }, sortData: [], searchData: [] };
    let s;
    for (let n = 0; n < this.columns.length; n++) {
      let r = this.columns[n], l = {};
      Object.keys(this.stateColProps).forEach((h, o) => {
        this.stateColProps[h] && (s = r[h] !== void 0 ? r[h] : this.colTemplate[h] || null, l[h] = s);
      }), t.columns.push(l);
    }
    for (let n = 0; n < this.sortData.length; n++) t.sortData.push(p.clone(this.sortData[n]));
    for (let n = 0; n < this.searchData.length; n++) t.searchData.push(p.clone(this.searchData[n]));
    var i = this.trigger("stateSave", { target: this.name, state: t });
    if (i.isCancelled !== true) return e !== true && this.cacheSave("state", t), i.finish(), t;
  }
  stateRestore(e) {
    var _a, _b, _c;
    let t = typeof this.url != "object" ? this.url : this.url.get;
    e = e || this.cache("state");
    var s = this.trigger("stateRestore", { target: this.name, state: e });
    if (s.isCancelled !== true) {
      if (p.isPlainObject(e)) {
        p.extend(this.show, e.show ?? {}), p.extend(this.last, e.last ?? {});
        let r = this.last.scrollTop, l = this.last.scrollLeft;
        for (let h = 0; h < ((_a = e.columns) == null ? void 0 : _a.length); h++) {
          var i = e.columns[h], n = this.getColumn(i.field, true);
          n !== null && (p.extend(this.columns[n], i), h !== n) && this.columns.splice(h, 0, this.columns.splice(n, 1)[0]);
        }
        this.sortData.splice(0, this.sortData.length);
        for (let h = 0; h < ((_b = e.sortData) == null ? void 0 : _b.length); h++) this.sortData.push(e.sortData[h]);
        this.searchData.splice(0, this.searchData.length);
        for (let h = 0; h < ((_c = e.searchData) == null ? void 0 : _c.length); h++) this.searchData.push(e.searchData[h]);
        setTimeout(() => {
          t || (0 < this.sortData.length && this.localSort(), 0 < this.searchData.length && this.localSearch()), this.last.scrollTop = r, this.last.scrollLeft = l, this.refresh();
        }, 1), console.log(`INFO (w2ui): state restored for "${this.name}"`);
      }
      return s.finish(), true;
    }
  }
  stateReset() {
    this.stateRestore(this.last.state), this.cacheSave("state", null);
  }
  parseField(e, t) {
    if (this.nestedFields) {
      let i = "";
      try {
        i = e;
        var s = String(t).split(".");
        for (let n = 0; n < s.length; n++) i = i[s[n]];
      } catch {
        i = "";
      }
      return i;
    }
    return e ? e[t] : "";
  }
  prepareData() {
    let e = this;
    for (let t = 0; t < this.records.length; t++) (function s(i) {
      var _a, _b;
      for (let n = 0; n < e.columns.length; n++) {
        let r = e.columns[n];
        if (i[r.field] != null && typeof r.render == "string") {
          if (["number", "int", "float", "money", "currency", "percent"].indexOf(r.render.split(":")[0]) != -1 && typeof i[r.field] != "number" && (i[r.field] = parseFloat(i[r.field])), ["date", "age"].indexOf(r.render.split(":")[0]) != -1 && !i[r.field + "_"]) {
            let l = i[r.field];
            p.isInt(l) && (l = parseInt(l)), i[r.field + "_"] = new Date(l);
          }
          if (["time"].indexOf(r.render) != -1) if (p.isTime(i[r.field])) {
            let l = p.isTime(i[r.field], true), h = /* @__PURE__ */ new Date();
            h.setHours(l.hours, l.minutes, l.seconds || 0, 0), i[r.field + "_"] || (i[r.field + "_"] = h);
          } else {
            let l = i[r.field], h = (l = (l = p.isInt(l) ? parseInt(l) : l) != null ? new Date(l) : /* @__PURE__ */ new Date(), /* @__PURE__ */ new Date());
            h.setHours(l.getHours(), l.getMinutes(), l.getSeconds(), 0), i[r.field + "_"] || (i[r.field + "_"] = h);
          }
        }
      }
      if (((_a = i.w2ui) == null ? void 0 : _a.children) && ((_b = i.w2ui) == null ? void 0 : _b.expanded) !== true) for (let n = 0; n < i.w2ui.children.length; n++) {
        let r = i.w2ui.children[n];
        s(r);
      }
    })(this.records[t]);
  }
  nextCell(e, t, s) {
    if (t += 1, t >= this.columns.length) return (e = this.nextRow(e)) == null ? e : this.nextCell(e, -1, s);
    var n = this.records[e].w2ui, i = this.columns[t], n = n && n.colspan && !isNaN(n.colspan[i.field]) ? parseInt(n.colspan[i.field]) : 1;
    return i == null ? null : i && i.hidden || n === 0 ? this.nextCell(e, t, s) : s && (i = this.getCellEditable(e, t), i == null || ["checkbox", "check"].indexOf(i.type) != -1) ? this.nextCell(e, t, s) : { index: e, colIndex: t };
  }
  prevCell(e, t, s) {
    if (t -= 1, t < 0) return (e = this.prevRow(e)) == null ? e : this.prevCell(e, this.columns.length, s);
    if (t < 0) return null;
    var n = this.records[e].w2ui, i = this.columns[t], n = n && n.colspan && !isNaN(n.colspan[i.field]) ? parseInt(n.colspan[i.field]) : 1;
    return i == null ? null : i && i.hidden || n === 0 ? this.prevCell(e, t, s) : s && (i = this.getCellEditable(e, t), i == null || ["checkbox", "check"].indexOf(i.type) != -1) ? this.prevCell(e, t, s) : { index: e, colIndex: t };
  }
  nextRow(e, t, s) {
    var i = this.last.searchIds;
    let n = null;
    if ((s = s ?? 1) == -1) return this.records.length - 1;
    if (e + s < this.records.length && i.length === 0 || 0 < i.length && e < i[i.length - s]) {
      if (e += s, 0 < i.length) for (; !(i.includes(e) || e > this.records.length); ) e += s;
      var l = this.records[e].w2ui, r = this.columns[t], l = l && l.colspan && r != null && !isNaN(l.colspan[r.field]) ? parseInt(l.colspan[r.field]) : 1;
      n = l === 0 ? this.nextRow(e, t, s) : e;
    }
    return n;
  }
  prevRow(e, t, s) {
    var i = this.last.searchIds;
    let n = null;
    if ((s = s ?? 1) == -1) return 0;
    if (0 <= e - s && i.length === 0 || 0 < i.length && e > i[0]) {
      if (e -= s, 0 < i.length) for (; !(i.includes(e) || e < 0); ) e -= s;
      var l = this.records[e].w2ui, r = this.columns[t], l = l && l.colspan && r != null && !isNaN(l.colspan[r.field]) ? parseInt(l.colspan[r.field]) : 1;
      n = l === 0 ? this.prevRow(e, t, s) : e;
    }
    return n;
  }
  selectionSave() {
    return this.last.saved_sel = this.getSelection(), this.last.saved_sel;
  }
  selectionRestore(e) {
    var t, s = Date.now(), i = (this.last.selection = { indexes: [], columns: {} }, this.last.selection), n = this.last.saved_sel;
    if (n) for (let r = 0; r < n.length; r++) p.isPlainObject(n[r]) ? (t = this.get(n[r].recid, true)) != null && (i.indexes.indexOf(t) == -1 && i.indexes.push(t), i.columns[t] || (i.columns[t] = []), i.columns[t].push(n[r].column)) : (t = this.get(n[r], true)) != null && i.indexes.push(t);
    return delete this.last.saved_sel, e !== true && this.refresh(), Date.now() - s;
  }
  message(e) {
    return p.message({ owner: this, box: this.box, after: ".w2ui-grid-header" }, e);
  }
  confirm(e) {
    return p.confirm({ owner: this, box: this.box, after: ".w2ui-grid-header" }, e);
  }
}
class De extends fe {
  constructor(e, t) {
    super(), typeof e == "string" && t == null && (t = { type: e }), typeof e == "object" && t == null && (t = p.clone(e)), typeof e == "string" && typeof t == "object" && (t.type = e), t.type = String(t.type).toLowerCase(), this.el = t.el ?? null, this.selected = null, this.helpers = {}, this.type = t.type ?? "text", this.options = p.clone(t), this.onClick = t.onClick ?? null, this.onAdd = t.onAdd ?? null, this.onNew = t.onNew ?? null, this.onRemove = t.onRemove ?? null, this.onMouseEnter = t.onMouseEnter ?? null, this.onMouseLeave = t.onMouseLeave ?? null, this.onScroll = t.onScroll ?? null, this.tmp = {}, delete this.options.type, delete this.options.onClick, delete this.options.onMouseEnter, delete this.options.onMouseLeave, delete this.options.onScroll, this.el && this.render(this.el);
  }
  render(e) {
    e instanceof HTMLElement ? (e._w2field ? e._w2field.reset() : e._w2field = this, this.el = e, this.init()) : console.log("ERROR: Cannot init w2field on empty subject");
  }
  init() {
    let e = this.options, t;
    if (["INPUT", "TEXTAREA"].includes(this.el.tagName.toUpperCase())) {
      switch (this.type) {
        case "text":
        case "int":
        case "float":
        case "money":
        case "currency":
        case "percent":
        case "alphanumeric":
        case "bin":
        case "hex":
          t = { min: null, max: null, step: 1, autoFormat: true, autoCorrect: true, currencyPrefix: p.settings.currencyPrefix, currencySuffix: p.settings.currencySuffix, currencyPrecision: p.settings.currencyPrecision, decimalSymbol: p.settings.decimalSymbol, groupSymbol: p.settings.groupSymbol, arrow: false, keyboard: true, precision: null, prefix: "", suffix: "" }, this.options = p.extend({}, t, e), (e = this.options).numberRE = new RegExp("[" + e.groupSymbol + "]", "g"), e.moneyRE = new RegExp("[" + e.currencyPrefix + e.currencySuffix + e.groupSymbol + "]", "g"), e.percentRE = new RegExp("[" + e.groupSymbol + "%]", "g"), ["text", "alphanumeric", "hex", "bin"].includes(this.type) && (e.arrow = false, e.keyboard = false);
          break;
        case "color":
          t = { prefix: "#", suffix: `<div style="width: ${parseInt(getComputedStyle(this.el)["font-size"]) || 12}px">&#160;</div>`, arrow: false, advanced: null, transparent: true }, this.options = p.extend({}, t, e), e = this.options;
          break;
        case "date":
          t = { format: p.settings.dateFormat, keyboard: true, autoCorrect: true, start: null, end: null, blockDates: [], blockWeekdays: [], colored: {}, btnNow: true }, this.options = p.extend({ type: "date" }, t, e), e = this.options, a(this.el).attr("placeholder") == null && a(this.el).attr("placeholder", e.format);
          break;
        case "time":
          t = { format: p.settings.timeFormat, keyboard: true, autoCorrect: true, start: null, end: null, btnNow: true, noMinutes: false }, this.options = p.extend({ type: "time" }, t, e), e = this.options, a(this.el).attr("placeholder") == null && a(this.el).attr("placeholder", e.format);
          break;
        case "datetime":
          t = { format: p.settings.dateFormat + "|" + p.settings.timeFormat, keyboard: true, autoCorrect: true, start: null, end: null, startTime: null, endTime: null, blockDates: [], blockWeekdays: [], colored: {}, btnNow: true, noMinutes: false }, this.options = p.extend({ type: "datetime" }, t, e), e = this.options, a(this.el).attr("placeholder") == null && a(this.el).attr("placeholder", e.placeholder || e.format);
          break;
        case "list":
        case "combo":
          t = { items: [], selected: {}, url: null, recId: null, recText: null, method: null, debounce: 250, postData: {}, minLength: 1, cacheMax: 250, maxDropHeight: 350, maxDropWidth: null, minDropWidth: null, match: "begins", icon: null, iconStyle: "", align: "both", altRows: true, renderDrop: null, compare: null, filter: true, hideSelected: false, prefix: "", suffix: "", msgNoItems: "No matches", msgSearch: "Type to search...", openOnFocus: false, markSearch: false, onSearch: null, onRequest: null, onLoad: null, onError: null }, typeof e.items == "function" && (e._items_fun = e.items), e.items = p.normMenu.call(this, e.items), this.type === "list" && (a(this.el).addClass("w2ui-select"), !p.isPlainObject(e.selected)) && Array.isArray(e.items) && e.items.forEach((s) => {
            s && s.id === e.selected && (e.selected = p.clone(s));
          }), e = p.extend({}, t, e), this.options = e, p.isPlainObject(e.selected) || (e.selected = {}), this.selected = e.selected, a(this.el).attr("autocapitalize", "off").attr("autocomplete", "off").attr("autocorrect", "off").attr("spellcheck", "false"), e.selected.text != null && a(this.el).val(e.selected.text);
          break;
        case "enum":
          t = { items: [], selected: [], max: 0, url: null, recId: null, recText: null, debounce: 250, method: null, postData: {}, minLength: 1, cacheMax: 250, maxItemWidth: 250, maxDropHeight: 350, maxDropWidth: null, match: "contains", align: "", altRows: true, openOnFocus: false, markSearch: false, renderDrop: null, renderItem: null, compare: null, filter: true, hideSelected: true, style: "", msgNoItems: "No matches", msgSearch: "Type to search...", onSearch: null, onRequest: null, onLoad: null, onError: null, onClick: null, onAdd: null, onNew: null, onRemove: null, onMouseEnter: null, onMouseLeave: null, onScroll: null }, typeof (e = p.extend({}, t, e, { suffix: "" })).items == "function" && (e._items_fun = e.items), e.items = p.normMenu.call(this, e.items), e.selected = p.normMenu.call(this, e.selected), this.options = e, Array.isArray(e.selected) || (e.selected = []), this.selected = e.selected;
          break;
        case "file":
          t = { selected: [], max: 0, maxSize: 0, maxFileSize: 0, maxItemWidth: 250, maxDropHeight: 350, maxDropWidth: null, readContent: true, silent: true, align: "both", altRows: true, renderItem: null, style: "", onClick: null, onAdd: null, onRemove: null, onMouseEnter: null, onMouseLeave: null }, e = p.extend({}, t, e), this.options = e, Array.isArray(e.selected) || (e.selected = []), this.selected = e.selected, a(this.el).attr("placeholder") == null && a(this.el).attr("placeholder", p.lang("Attach files by dragging and dropping or Click to Select"));
      }
      a(this.el).css("box-sizing", "border-box").addClass("w2field w2ui-input").off(".w2field").on("change.w2field", (s) => {
        this.change(s);
      }).on("click.w2field", (s) => {
        this.click(s);
      }).on("focus.w2field", (s) => {
        this.focus(s);
      }).on("blur.w2field", (s) => {
        this.type !== "list" && this.blur(s);
      }).on("keydown.w2field", (s) => {
        this.keyDown(s);
      }).on("keyup.w2field", (s) => {
        this.keyUp(s);
      }), this.addPrefix(), this.addSuffix(), this.addSearch(), this.addMultiSearch(), this.change(new Event("change"));
    } else console.log("ERROR: w2field could only be applied to INPUT or TEXTAREA.", this.el);
  }
  get() {
    return ["list", "enum", "file"].indexOf(this.type) !== -1 ? this.selected : a(this.el).val();
  }
  set(e, t) {
    ["list", "enum", "file"].indexOf(this.type) !== -1 ? (this.type !== "list" && t ? (Array.isArray(this.selected) || (this.selected = []), this.selected.push(e), (t = ee.get(this.el.id + "_menu")) && (t.options.selected = this.selected)) : (e == null && (e = []), t = this.type !== "enum" || Array.isArray(e) ? e : [e], this.selected = t), a(this.el).trigger("input").trigger("change"), this.refresh()) : a(this.el).val(e);
  }
  setIndex(e, t) {
    if (["list", "enum"].indexOf(this.type) !== -1) {
      var s = this.options.items;
      if (s && s[e]) return this.type == "list" && (this.selected = s[e]), this.type == "enum" && (t || (this.selected = []), this.selected.push(s[e])), (t = ee.get(this.el.id + "_menu")) && (t.options.selected = this.selected), a(this.el).trigger("input").trigger("change"), this.refresh(), true;
    }
    return false;
  }
  refresh() {
    var _a, _b;
    let e = this.options;
    var t = Date.now(), s = getComputedStyle(this.el);
    if (this.type == "list") {
      if (a(this.el).parent().css("white-space", "nowrap"), this.helpers.prefix && this.helpers.prefix.hide(), !this.helpers.search) return;
      this.selected == null && e.icon ? e.prefix = `
                    <span class="w2ui-icon ${e.icon} "style="cursor: pointer; font-size: 14px;
                        display: inline-block; margin-top: -1px; color: #7F98AD; ${e.iconStyle}">
                    </span>` : e.prefix = "", this.addPrefix();
      let h = a(this.helpers.search_focus);
      var i = a(h[0].previousElementSibling);
      h.css({ outline: "none" }), h.val() === "" ? (h.css("opacity", 0), i.css("opacity", 0), ((_a = this.selected) == null ? void 0 : _a.id) ? (l = this.selected.text, r = this.findItemIndex(e.items, this.selected.id), l != null && a(this.el).val(p.lang(l)).data({ selected: l, selectedIndex: r[0] })) : (this.el.value = "", a(this.el).removeData("selected selectedIndex"))) : (h.css("opacity", 1), i.css("opacity", 1), a(this.el).val(""), setTimeout(() => {
        this.helpers.prefix && this.helpers.prefix.hide(), e.icon ? (h.css("margin-left", "17px"), a(this.helpers.search).find(".w2ui-icon-search").addClass("show-search")) : (h.css("margin-left", "0px"), a(this.helpers.search).find(".w2ui-icon-search").removeClass("show-search"));
      }, 1)), a(this.el).prop("readOnly") || a(this.el).prop("disabled") ? setTimeout(() => {
        this.helpers.prefix && a(this.helpers.prefix).css("opacity", "0.6"), this.helpers.suffix && a(this.helpers.suffix).css("opacity", "0.6");
      }, 1) : setTimeout(() => {
        this.helpers.prefix && a(this.helpers.prefix).css("opacity", "1"), this.helpers.suffix && a(this.helpers.suffix).css("opacity", "1");
      }, 1);
    }
    let n = this.helpers.multi;
    if (["enum", "file"].includes(this.type) && n) {
      let h = "";
      Array.isArray(this.selected) && this.selected.forEach((o, c) => {
        o != null && (h += `
                        <div class="li-item" index="${c}" style="max-width: ${parseInt(e.maxItemWidth)}px; ${o.style || ""}">
                        ${typeof e.renderItem == "function" ? e.renderItem(o, c, `<div class="w2ui-list-remove" index="${c}">&#160;&#160;</div>`) : `
                               ${o.icon ? `<span class="w2ui-icon ${o.icon}"></span>` : ""}
                               <div class="w2ui-list-remove" index="${c}">&#160;&#160;</div>
                               ${(this.type === "enum" ? o.text : o.name) ?? o.id ?? o}
                               ${o.size ? `<span class="file-size"> - ${p.formatSize(o.size)}</span>` : ""}
                            `}
                        </div>`);
      });
      var r, l = n.find(".w2ui-multi-items");
      e.style && n.attr("style", n.attr("style") + ";" + e.style), a(this.el).css("z-index", "-1"), a(this.el).prop("readOnly") || a(this.el).prop("disabled") ? setTimeout(() => {
        n[0].scrollTop = 0, n.addClass("w2ui-readonly").find(".li-item").css("opacity", "0.9").parent().find(".li-search").hide().find("input").prop("readOnly", true).closest(".w2ui-multi-items").find(".w2ui-list-remove").hide();
      }, 1) : setTimeout(() => {
        n.removeClass("w2ui-readonly").find(".li-item").css("opacity", "1").parent().find(".li-search").show().find("input").prop("readOnly", false).closest(".w2ui-multi-items").find(".w2ui-list-remove").show();
      }, 1), 0 < ((_b = this.selected) == null ? void 0 : _b.length) && a(this.el).attr("placeholder", ""), n.find(".w2ui-enum-placeholder").remove(), l.find(".li-item").remove(), h !== "" ? l.prepend(h) : a(this.el).attr("placeholder") != null && n.find("input").val() === "" && (r = p.stripSpaces(`
                    padding-top: ${s["padding-top"]};
                    padding-left: ${s["padding-left"]};
                    box-sizing: ${s["box-sizing"]};
                    line-height: ${s["line-height"]};
                    font-size: ${s["font-size"]};
                    font-family: ${s["font-family"]};
                `), n.prepend(`<div class="w2ui-enum-placeholder" style="${r}">${a(this.el).attr("placeholder")}</div>`)), n.off(".w2item").on("scroll.w2item", (o) => {
        o = this.trigger("scroll", { target: this.el, originalEvent: o }), o.isCancelled !== true && (B.hide(this.el.id + "_preview"), o.finish());
      }).find(".li-item").on("click.w2item", (o) => {
        var c = a(o.target).closest(".li-item"), d = c.attr("index"), u = this.selected[d];
        if (!a(c).hasClass("li-search")) {
          o.stopPropagation();
          let f;
          if (a(o.target).hasClass("w2ui-list-remove")) a(this.el).prop("readOnly") || a(this.el).prop("disabled") || (f = this.trigger("remove", { target: this.el, originalEvent: o, item: u })).isCancelled !== true && (this.selected.splice(d, 1), a(this.el).trigger("input").trigger("change"), a(o.target).remove());
          else if ((f = this.trigger("click", { target: this.el, originalEvent: o.originalEvent, item: u })).isCancelled !== true) {
            let m = u.tooltip;
            if (this.type === "file" && (/image/i.test(u.type) && (m = `
                                    <div class="w2ui-file-preview">
                                        <img src="${u.content ? "data:" + u.type + ";base64," + u.content : ""}"
                                            style="max-width: 300px">
                                    </div>`), m += `
                                <div class="w2ui-file-info">
                                    <div class="file-caption">${p.lang("Name")}:</div>
                                    <div class="file-value">${u.name}</div>
                                    <div class="file-caption">${p.lang("Size")}:</div>
                                    <div class="file-value">${p.formatSize(u.size)}</div>
                                    <div class="file-caption">${p.lang("Type")}:</div>
                                    <div class="file-value file-type">${u.type}</div>
                                    <div class="file-caption">${p.lang("Modified")}:</div>
                                    <div class="file-value">${p.date(u.modified)}</div>
                                </div>`), m) {
              let w = this.el.id + "_preview";
              B.show({ name: w, anchor: c.get(0), html: m, hideOn: ["doc-click"], class: "" }).show((g) => {
                a(`#w2overlay-${w} img`).on("load", function(v) {
                  var k = this.clientWidth, x = this.clientHeight;
                  k < 300 & x < 300 || (x <= k && 300 < k && a(this).css("width", "300px"), k < x && 300 < x && a(this).css("height", "300px"));
                }).on("error", function(v) {
                  this.style.display = "none";
                });
              });
            }
            f.finish();
          }
        }
      }).on("mouseenter.w2item", (o) => {
        var c = a(o.target).closest(".li-item");
        a(c).hasClass("li-search") || (c = this.selected[a(o.target).attr("index")], (o = this.trigger("mouseEnter", { target: this.el, originalEvent: o, item: c })).isCancelled !== true && o.finish());
      }).on("mouseleave.w2item", (o) => {
        var c = a(o.target).closest(".li-item");
        a(c).hasClass("li-search") || (c = this.selected[a(o.target).attr("index")], (o = this.trigger("mouseLeave", { target: this.el, originalEvent: o, item: c })).isCancelled !== true && o.finish());
      }), this.type === "enum" ? this.helpers.multi.find("input").css({ width: "15px" }) : this.helpers.multi.find(".li-search").hide(), this.resize();
    }
    return Date.now() - t;
  }
  resize() {
    var e = this.el.clientWidth, t = getComputedStyle(this.el), r = this.helpers.search, s = this.helpers.multi, i = this.helpers.suffix, n = this.helpers.prefix, r = (r && a(r).css("width", e), s && a(s).css("width", e - parseInt(t["margin-left"], 10) - parseInt(t["margin-right"], 10)), i && this.addSuffix(), n && this.addPrefix(), this.helpers.multi);
    if (["enum", "file"].includes(this.type) && r) {
      a(this.el).css("height", "auto");
      let l = a(r).find(":scope div.w2ui-multi-items").get(0).clientHeight + 5;
      (l = (l = l < 20 ? 20 : l) > this.tmp["max-height"] ? this.tmp["max-height"] : l) < this.tmp["min-height"] && (l = this.tmp["min-height"]), s = p.getSize(this.el, "height") - 2, s > l && (l = s), a(r).css({ height: l + "px", overflow: l == this.tmp["max-height"] ? "auto" : "hidden" }), a(r).css("height", l + "px"), a(this.el).css({ height: l + "px" });
    }
    this.tmp.current_width = e;
  }
  reset() {
    this.tmp != null && (a(this.el).css("height", "auto"), Array("padding-left", "padding-right", "background-color", "border-color").forEach((e) => {
      this.tmp && this.tmp["old-" + e] != null && (a(this.el).css(e, this.tmp["old-" + e]), delete this.tmp["old-" + e]);
    }), clearInterval(this.tmp.sizeTimer)), a(this.el).val(this.clean(a(this.el).val())).removeClass("w2field").removeData("selected selectedIndex").off(".w2field"), Object.keys(this.helpers).forEach((e) => {
      a(this.helpers[e]).remove();
    }), this.helpers = {};
  }
  clean(e) {
    var t;
    return e = typeof e != "number" && (t = this.options, e = String(e).trim(), ["int", "float", "money", "currency", "percent"].includes(this.type)) ? (e = typeof e == "string" ? (e = t.autoFormat && (["money", "currency"].includes(this.type) && (e = String(e).replace(t.moneyRE, "")), this.type === "percent" && (e = String(e).replace(t.percentRE, "")), ["int", "float"].includes(this.type)) ? String(e).replace(t.numberRE, "") : e).replace(/\s+/g, "").replace(new RegExp(t.groupSymbol, "g"), "").replace(t.decimalSymbol, ".") : e) !== "" && p.isFloat(e) ? Number(e) : "" : e;
  }
  format(e) {
    var t = this.options;
    if (t.autoFormat && e !== "") {
      switch (this.type) {
        case "money":
        case "currency":
          (e = p.formatNumber(e, t.currencyPrecision, true)) !== "" && (e = t.currencyPrefix + e + t.currencySuffix);
          break;
        case "percent":
          (e = p.formatNumber(e, t.precision, true)) !== "" && (e += "%");
          break;
        case "float":
          e = p.formatNumber(e, t.precision, true);
          break;
        case "int":
          e = p.formatNumber(e, 0, true);
      }
      var s = parseInt(1e3).toLocaleString(p.settings.locale, { useGrouping: true }).slice(1, 2);
      s !== this.options.groupSymbol && (e = e.replaceAll(s, this.options.groupSymbol));
    }
    return e;
  }
  change(e) {
    if (["int", "float", "money", "currency", "percent"].indexOf(this.type) !== -1) {
      var t = a(this.el).val(), s = this.format(this.clean(a(this.el).val()));
      if (t !== "" && t != s) return a(this.el).val(s), e.stopPropagation(), e.preventDefault(), false;
    }
    if (this.type === "color") {
      let i = a(this.el).val();
      i.substr(0, 3).toLowerCase() !== "rgb" && (i = "#" + i, (t = a(this.el).val().length) !== 8) && t !== 6 && t !== 3 && (i = ""), s = a(this.el).get(0).nextElementSibling, a(s).find("div").css("background-color", i), a(this.el).hasClass("has-focus") && this.updateOverlay();
    }
    if (["list", "enum", "file"].indexOf(this.type) !== -1 && this.refresh(), ["date", "time", "datetime"].indexOf(this.type) !== -1) {
      let i = parseInt(this.el.value);
      p.isInt(this.el.value) && 3e3 < i && (this.type === "time" && (i = p.formatTime(new Date(i), this.options.format)), this.type === "date" && (i = p.formatDate(new Date(i), this.options.format)), this.type === "datetime" && (i = p.formatDateTime(new Date(i), this.options.format)), a(this.el).val(i).trigger("input").trigger("change"));
    }
  }
  click(e) {
    ["list", "combo", "enum"].includes(this.type) && (a(this.el).hasClass("has-focus") || this.focus(e), this.type == "combo" && this.updateOverlay(), this.type == "list") && (this.updateOverlay(), e.stopPropagation()), ["date", "time", "datetime", "color"].includes(this.type) && this.updateOverlay();
  }
  focus(e) {
    if (this.type == "list" && document.activeElement == this.el) this.helpers.search_focus.focus();
    else {
      if (["color", "date", "time", "datetime"].indexOf(this.type) !== -1) {
        if (a(this.el).prop("readOnly") || a(this.el).prop("disabled")) return;
        this.updateOverlay();
      }
      if (["list", "combo", "enum"].indexOf(this.type) !== -1) {
        if (a(this.el).prop("readOnly") || a(this.el).prop("disabled")) return void a(this.el).addClass("has-focus");
        typeof this.options._items_fun == "function" && (this.options.items = p.normMenu.call(this, this.options._items_fun)), this.helpers.search && ((t = this.helpers.search_focus).value = "", t.select()), this.type == "enum" && (t = a(this.el.previousElementSibling).find(".li-search input").get(0), document.activeElement !== t) && t.focus(), this.resize(), e.showMenu === false || this.options.openOnFocus === false && !a(this.el).hasClass("has-focus") || setTimeout(() => {
          this.updateOverlay();
        }, 100);
      }
      var t;
      this.type == "file" && (t = a(this.el).get(0).previousElementSibling, a(t).addClass("has-focus")), a(this.el).addClass("has-focus");
    }
  }
  blur(e) {
    var _a;
    var t, s = a(this.el).val().trim();
    if (a(this.el).removeClass("has-focus"), ["int", "float", "money", "currency", "percent"].includes(this.type) && s !== "") {
      let i = s, n = "";
      this.isStrValid(s) ? (t = this.clean(s), this.options.min != null && t < this.options.min && (i = this.options.min, n = "Should be >= " + this.options.min), this.options.max != null && t > this.options.max && (i = this.options.max, n = "Should be <= " + this.options.max)) : i = "", this.options.autoCorrect && (a(this.el).val(i).trigger("input").trigger("change"), n) && (B.show({ name: this.el.id + "_error", anchor: this.el, html: n }), setTimeout(() => {
        B.hide(this.el.id + "_error");
      }, 3e3));
    }
    ["date", "time", "datetime"].includes(this.type) && this.options.autoCorrect && s !== "" && (t = this.type == "date" ? p.isDate : this.type == "time" ? p.isTime : p.isDateTime, be.inRange(this.el.value, this.options) && t.bind(p)(this.el.value, this.options.format) || a(this.el).val("").trigger("input").trigger("change")), this.type === "enum" && a(this.helpers.multi).find("input").val("").css("width", "15px"), this.type == "file" && (s = this.el.previousElementSibling, a(s).removeClass("has-focus")), this.type === "list" && (this.el.value = ((_a = this.selected) == null ? void 0 : _a.text) ?? "");
  }
  keyDown(e, n) {
    var s, i = this.options, n = e.keyCode || n && n.keyCode;
    let r = false, l, h, o, c, d, u;
    if (["int", "float", "money", "currency", "percent", "hex", "bin", "color", "alphanumeric"].includes(this.type) && !(e.metaKey || e.ctrlKey || e.altKey || this.isStrValid(e.key ?? "1", true) || [9, 8, 13, 27, 37, 38, 39, 40, 46].includes(e.keyCode))) return e.preventDefault(), e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true, false;
    if (["int", "float", "money", "currency", "percent"].includes(this.type)) {
      if (!i.keyboard || a(this.el).prop("readOnly") || a(this.el).prop("disabled")) return;
      switch (l = parseFloat(a(this.el).val().replace(i.moneyRE, "")) || 0, h = i.step, (e.ctrlKey || e.metaKey) && (h = 10 * i.step), n) {
        case 38:
          e.shiftKey || (d = l + h <= i.max || i.max == null ? Number((l + h).toFixed(12)) : i.max, a(this.el).val(d).trigger("input").trigger("change"), r = true);
          break;
        case 40:
          e.shiftKey || (d = l - h >= i.min || i.min == null ? Number((l - h).toFixed(12)) : i.min, a(this.el).val(d).trigger("input").trigger("change"), r = true);
      }
      r && (e.preventDefault(), this.moveCaret2end());
    }
    if (["date", "datetime"].includes(this.type)) {
      if (!i.keyboard || a(this.el).prop("readOnly") || a(this.el).prop("disabled")) return;
      var f = (this.type == "date" ? p.isDate : p.isDateTime).bind(p), m = (this.type == "date" ? p.formatDate : p.formatDateTime).bind(p);
      switch (o = 864e5, h = 1, (e.ctrlKey || e.metaKey) && (h = 10), (c = f(a(this.el).val(), i.format, true)) || (c = /* @__PURE__ */ new Date(), o = 0), n) {
        case 38:
          e.shiftKey || (h == 10 ? c.setMonth(c.getMonth() + 1) : c.setTime(c.getTime() + o), u = m(c.getTime(), i.format), a(this.el).val(u).trigger("input").trigger("change"), r = true);
          break;
        case 40:
          e.shiftKey || (h == 10 ? c.setMonth(c.getMonth() - 1) : c.setTime(c.getTime() - o), u = m(c.getTime(), i.format), a(this.el).val(u).trigger("input").trigger("change"), r = true);
      }
      r && (e.preventDefault(), this.moveCaret2end(), this.updateOverlay());
    }
    if (this.type === "time") {
      if (!i.keyboard || a(this.el).prop("readOnly") || a(this.el).prop("disabled")) return;
      h = e.ctrlKey || e.metaKey ? 60 : 1, l = a(this.el).val();
      let w = be.str2min(l) || be.str2min((/* @__PURE__ */ new Date()).getHours() + ":" + ((/* @__PURE__ */ new Date()).getMinutes() - 1));
      switch (n) {
        case 38:
          e.shiftKey || (w += h, r = true);
          break;
        case 40:
          e.shiftKey || (w -= h, r = true);
      }
      r && (e.preventDefault(), a(this.el).val(be.min2str(w)).trigger("input").trigger("change"), this.moveCaret2end());
    }
    if (["list", "enum"].includes(this.type)) switch (n) {
      case 8:
      case 46:
        this.type == "list" ? a(this.helpers.search_focus).val() == "" && (this.selected = null, ee.hide(this.el.id + "_menu"), a(this.el).val("").trigger("input").trigger("change")) : a(this.helpers.multi).find("input").val() == "" && (ee.hide(this.el.id + "_menu"), this.selected.pop(), (s = ee.get(this.el.id + "_menu")) && (s.options.selected = this.selected), this.refresh());
        break;
      case 9:
      case 16:
        break;
      case 27:
        ee.hide(this.el.id + "_menu"), this.refresh();
    }
  }
  keyUp(e) {
    var _a, _b;
    if (this.type == "list") {
      let i = a(this.helpers.search_focus);
      i.val() !== "" ? a(this.el).attr("placeholder", "") : a(this.el).attr("placeholder", this.tmp.pholder), e.keyCode == 13 && setTimeout(() => {
        i.val(""), ee.hide(this.el.id + "_menu"), this.refresh();
      }, 1), [38, 40].includes(e.keyCode) && !this.tmp.overlay.overlay.displayed && this.updateOverlay(), this.refresh();
    }
    var t, s;
    this.type == "combo" && this.updateOverlay(), this.type == "enum" && (t = this.helpers.multi.find("input"), s = getComputedStyle(t.get(0)), s = p.getStrWidth(t.val(), `font-family: ${s["font-family"]}; font-size: ${s["font-size"]};`), t.css({ width: s + 15 + "px" }), this.resize(), [38, 40].includes(e.keyCode)) && !((_b = (_a = this.tmp.overlay) == null ? void 0 : _a.overlay) == null ? void 0 : _b.displayed) && this.updateOverlay();
  }
  findItemIndex(e, t, s) {
    let i = [];
    var n;
    return s = s || [], ["list", "combo", "enum"].includes(this.type) && this.options.url && (n = ee.get(this.el.id + "_menu")) && (e = n.options.items, this.options.items = e), e.forEach((r, l) => {
      r.id === t && (i = s.concat([l]), this.options.index = [l]), i.length == 0 && r.items && 0 < r.items.length && (s.push(l), i = this.findItemIndex(r.items, t, s), s.pop());
    }), i;
  }
  updateOverlay(e) {
    let t = this.options;
    if (this.type === "color") {
      if (a(this.el).prop("readOnly") || a(this.el).prop("disabled")) return;
      _t.show(p.extend({ name: this.el.id + "_color", anchor: this.el, transparent: t.transparent, advanced: t.advanced, color: this.el.value, liveUpdate: true }, this.options)).select((i) => {
        i = i.detail.color, a(this.el).val(i).trigger("input").trigger("change");
      }).liveUpdate((i) => {
        i = i.detail.color, a(this.helpers.suffix).find(":scope > div").css("background-color", "#" + i);
      });
    }
    if (["list", "combo", "enum"].includes(this.type)) {
      var s;
      this.el;
      let i = this.el;
      this.type === "enum" && (s = this.helpers.multi.get(0), i = a(s).find("input").get(0)), this.type === "list" && (s = this.selected, p.isPlainObject(s) && 0 < Object.keys(s).length && 0 < (s = this.findItemIndex(t.items, s.id)).length && (t.index = s), i = this.helpers.search_focus), !a(this.el).hasClass("has-focus") || this.el.readOnly || this.el.disabled || (s = p.extend({}, t, { name: this.el.id + "_menu", anchor: i, selected: this.selected, search: false, render: t.renderDrop, anchorClass: "", offsetY: 5, maxHeight: t.maxDropHeight, maxWidth: t.maxDropWidth, minWidth: t.minDropWidth }), this.tmp.overlay = ee.show(s).select((n) => {
        var _a;
        var r, l;
        ["list", "combo"].includes(this.type) ? (this.selected = n.detail.item, a(i).val(""), a(this.el).val(this.selected.text).trigger("input").trigger("change"), this.focus({ showMenu: false })) : (l = this.selected, (r = (_a = n.detail) == null ? void 0 : _a.item) && (n = this.trigger("add", { target: this.el, item: r, originalEvent: n })).isCancelled !== true && (l.length >= t.max && 0 < t.max && l.pop(), delete r.hidden, l.push(r), a(this.el).trigger("input").trigger("change"), a(this.helpers.multi).find("input").val(""), (l = ee.get(this.el.id + "_menu")) && (l.options.selected = this.selected), n.finish()));
      }));
    }
    !["date", "time", "datetime"].includes(this.type) || a(this.el).prop("readOnly") || a(this.el).prop("disabled") || be.show(p.extend({ name: this.el.id + "_date", anchor: this.el, value: this.el.value }, this.options)).select((i) => {
      i = i.detail.date, i != null && a(this.el).val(i).trigger("input").trigger("change");
    });
  }
  isStrValid(e, t) {
    let s = true;
    switch (this.type) {
      case "int":
        s = !(!t || !["-", this.options.groupSymbol].includes(e)) || p.isInt(e.replace(this.options.numberRE, ""));
        break;
      case "percent":
        e = e.replace(/%/g, "");
      case "float":
        s = !(!t || !["-", "", this.options.decimalSymbol, this.options.groupSymbol].includes(e)) || p.isFloat(e.replace(this.options.numberRE, ""));
        break;
      case "money":
      case "currency":
        s = !(!t || !["-", this.options.decimalSymbol, this.options.groupSymbol, this.options.currencyPrefix, this.options.currencySuffix].includes(e)) || p.isFloat(e.replace(this.options.moneyRE, ""));
        break;
      case "bin":
        s = p.isBin(e);
        break;
      case "color":
      case "hex":
        s = p.isHex(e);
        break;
      case "alphanumeric":
        s = p.isAlphaNumeric(e);
    }
    return s;
  }
  addPrefix() {
    var e, t;
    this.options.prefix && (t = getComputedStyle(this.el), this.tmp["old-padding-left"] == null && (this.tmp["old-padding-left"] = t["padding-left"]), this.helpers.prefix && a(this.helpers.prefix).remove(), a(this.el).before(`<div class="w2ui-field-helper">${this.options.prefix}</div>`), e = a(this.el).get(0).previousElementSibling, a(e).css({ color: t.color, "font-family": t["font-family"], "font-size": t["font-size"], height: this.el.clientHeight + "px", "padding-top": t["padding-top"], "padding-bottom": t["padding-bottom"], "padding-left": this.tmp["old-padding-left"], "padding-right": 0, "margin-top": parseInt(t["margin-top"], 10) + 2 + "px", "margin-bottom": parseInt(t["margin-bottom"], 10) + 1 + "px", "margin-left": t["margin-left"], "margin-right": 0, "z-index": 1 }), a(this.el).css("padding-left", e.clientWidth + "px !important"), this.helpers.prefix = e);
  }
  addSuffix() {
    if (this.options.suffix || this.options.arrow) {
      let s, i = this;
      var e = getComputedStyle(this.el), t = (this.tmp["old-padding-right"] == null && (this.tmp["old-padding-right"] = e["padding-right"]), parseInt(e["padding-right"] || 0));
      this.options.arrow && (this.helpers.arrow && a(this.helpers.arrow).remove(), a(this.el).after('<div class="w2ui-field-helper" style="border: 1px solid transparent">&#160;    <div class="w2ui-field-up" type="up">        <div class="arrow-up" type="up"></div>    </div>    <div class="w2ui-field-down" type="down">        <div class="arrow-down" type="down"></div>    </div></div>'), s = a(this.el).get(0).nextElementSibling, a(s).css({ color: e.color, "font-family": e["font-family"], "font-size": e["font-size"], height: this.el.clientHeight + "px", padding: 0, "margin-top": parseInt(e["margin-top"], 10) + 1 + "px", "margin-bottom": 0, "border-left": "1px solid silver", width: "16px", transform: "translateX(-100%)" }).on("mousedown", function(n) {
        a(n.target).hasClass("arrow-up") && i.keyDown(n, { keyCode: 38 }), a(n.target).hasClass("arrow-down") && i.keyDown(n, { keyCode: 40 });
      }), t += s.clientWidth, a(this.el).css("padding-right", t + "px !important"), this.helpers.arrow = s), this.options.suffix !== "" && (this.helpers.suffix && a(this.helpers.suffix).remove(), a(this.el).after(`<div class="w2ui-field-helper">${this.options.suffix}</div>`), s = a(this.el).get(0).nextElementSibling, a(s).css({ color: e.color, "font-family": e["font-family"], "font-size": e["font-size"], height: this.el.clientHeight + "px", "padding-top": e["padding-top"], "padding-bottom": e["padding-bottom"], "padding-left": 0, "padding-right": e["padding-right"], "margin-top": parseInt(e["margin-top"], 10) + 2 + "px", "margin-bottom": parseInt(e["margin-bottom"], 10) + 1 + "px", transform: "translateX(-100%)" }), a(this.el).css("padding-right", s.clientWidth + "px !important"), this.helpers.suffix = s);
    }
  }
  addSearch() {
    if (this.type === "list") {
      this.helpers.search && a(this.helpers.search).remove();
      let s = parseInt(a(this.el).attr("tabIndex")), i = (isNaN(s) || s === -1 || (this.tmp["old-tabIndex"] = s), (s = this.tmp["old-tabIndex"] ? this.tmp["old-tabIndex"] : s) != null && !isNaN(s) || (s = 0), "");
      var e = `
            <div class="w2ui-field-helper">
                <span class="w2ui-icon w2ui-icon-search"></span>
                <input ${i = a(this.el).attr("id") != null ? 'id="' + a(this.el).attr("id") + '_search"' : i} type="text" tabIndex="${s}" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false"/>
            </div>`, e = (a(this.el).attr("tabindex", -1).before(e), a(this.el).get(0).previousElementSibling), t = (this.helpers.search = e, this.helpers.search_focus = a(e).find("input").get(0), getComputedStyle(this.el));
      a(e).css({ width: this.el.clientWidth + "px", "margin-top": t["margin-top"], "margin-left": t["margin-left"], "margin-bottom": t["margin-bottom"], "margin-right": t["margin-right"] }).find("input").css({ cursor: "default", width: "100%", opacity: 1, padding: t.padding, margin: t.margin, border: "1px solid transparent", "background-color": "transparent" }), a(e).find("input").off(".helper").on("focus.helper", (n) => {
        a(n.target).val(""), this.tmp.pholder = a(this.el).attr("placeholder") ?? "", this.focus(n), n.stopPropagation();
      }).on("blur.helper", (n) => {
        a(n.target).val(""), this.tmp.pholder != null && a(this.el).attr("placeholder", this.tmp.pholder), this.blur(n), n.stopPropagation();
      }).on("keydown.helper", (n) => {
        this.keyDown(n);
      }).on("keyup.helper", (n) => {
        this.keyUp(n);
      }), a(e).on("click", (n) => {
        a(n.target).find("input").focus();
      });
    }
  }
  addMultiSearch() {
    if (["enum", "file"].includes(this.type)) {
      a(this.helpers.multi).remove();
      let n = "";
      var e, t, s = getComputedStyle(this.el), i = p.stripSpaces(`
            margin-top: 0px;
            margin-bottom: 0px;
            margin-left: ${s["margin-left"]};
            margin-right: ${s["margin-right"]};
            width: ${p.getSize(this.el, "width") - parseInt(s["margin-left"], 10) - parseInt(s["margin-right"], 10)}px;
        `);
      this.tmp["min-height"] == null && (e = this.tmp["min-height"] = parseInt((s["min-height"] != "none" ? s["min-height"] : 0) || 0), t = parseInt(s.height), this.tmp["min-height"] = Math.max(e, t)), this.tmp["max-height"] == null && s["max-height"] != "none" && (this.tmp["max-height"] = parseInt(s["max-height"]));
      let r = "", l = (a(this.el).attr("id") != null && (r = `id="${a(this.el).attr("id")}_search"`), parseInt(a(this.el).attr("tabIndex"))), h = (isNaN(l) || l === -1 || (this.tmp["old-tabIndex"] = l), (l = this.tmp["old-tabIndex"] ? this.tmp["old-tabIndex"] : l) != null && !isNaN(l) || (l = 0), this.type === "enum" && (n = `
            <div class="w2ui-field-helper w2ui-list" style="${i}">
                <div class="w2ui-multi-items">
                    <div class="li-search">
                        <input ${r} type="text" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false"
                            tabindex="${l}"
                            ${a(this.el).prop("readOnly") ? "readonly" : ""}
                            ${a(this.el).prop("disabled") ? "disabled" : ""}>
                    </div>
                </div>
            </div>`), this.type === "file" && (n = `
            <div class="w2ui-field-helper w2ui-list" style="${i}">
                <div class="w2ui-multi-file">
                    <input name="attachment" class="file-input" type="file" tabindex="-1"'
                        style="width: 100%; height: 100%; opacity: 0" title=""
                        ${this.options.max !== 1 ? "multiple" : ""}
                        ${a(this.el).prop("readOnly") || a(this.el).prop("disabled") ? "disabled" : ""}
                        ${a(this.el).attr("accept") ? ' accept="' + a(this.el).attr("accept") + '"' : ""}>
                </div>
                <div class="w2ui-multi-items">
                    <div class="li-search" style="display: none">
                        <input ${r} type="text" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false"
                            tabindex="${l}"
                            ${a(this.el).prop("readOnly") ? "readonly" : ""}
                            ${a(this.el).prop("disabled") ? "disabled" : ""}>
                    </div>
                </div>
            </div>`), this.tmp["old-background-color"] = s["background-color"], this.tmp["old-border-color"] = s["border-color"], a(this.el).before(n).css({ "border-color": "transparent", "background-color": "transparent" }), a(this.el.previousElementSibling));
      this.helpers.multi = h, a(this.el).attr("tabindex", -1), h.on("click", (o) => {
        this.focus(o);
      }), h.find("input:not(.file-input)").on("click", (o) => {
        this.click(o);
      }).on("focus", (o) => {
        this.focus(o);
      }).on("blur", (o) => {
        this.blur(o);
      }).on("keydown", (o) => {
        this.keyDown(o);
      }).on("keyup", (o) => {
        this.keyUp(o);
      }), this.type === "file" && h.find("input.file-input").off(".drag").on("click.drag", (o) => {
        o.stopPropagation(), a(this.el).prop("readOnly") || a(this.el).prop("disabled") || this.focus(o);
      }).on("dragenter.drag", (o) => {
        a(this.el).prop("readOnly") || a(this.el).prop("disabled") || h.addClass("w2ui-file-dragover");
      }).on("dragleave.drag", (o) => {
        a(this.el).prop("readOnly") || a(this.el).prop("disabled") || h.removeClass("w2ui-file-dragover");
      }).on("drop.drag", (o) => {
        a(this.el).prop("readOnly") || a(this.el).prop("disabled") || (h.removeClass("w2ui-file-dragover"), Array.from(o.dataTransfer.files).forEach((c) => {
          this.addFile(c);
        }), this.focus(o), o.preventDefault(), o.stopPropagation());
      }).on("dragover.drag", (o) => {
        o.preventDefault(), o.stopPropagation();
      }).on("change.drag", (o) => {
        o.target.files !== void 0 && Array.from(o.target.files).forEach((c) => {
          this.addFile(c);
        }), this.focus(o);
      }), this.refresh();
    }
  }
  addFile(e) {
    var t = this.options, s = this.selected;
    let i = { name: e.name, type: e.type, modified: e.lastModifiedDate, size: e.size, content: null, file: e }, n = 0, r = 0, l = [], h = (Array.isArray(s) && s.forEach((o) => {
      o.name == e.name && o.size == e.size && l.push(p.lang('The file "${name}" (${size}) is already added.', { name: e.name, size: p.formatSize(e.size) })), n += o.size, r++;
    }), t.maxFileSize !== 0 && i.size > t.maxFileSize && l.push(p.lang("Maximum file size is ${size}", { size: p.formatSize(t.maxFileSize) })), t.maxSize !== 0 && n + i.size > t.maxSize && l.push(p.lang("Maximum total size is ${size}", { size: p.formatSize(t.maxSize) })), t.max !== 0 && r >= t.max && l.push(p.lang("Maximum number of files is ${count}", { count: t.max })), this.trigger("add", { target: this.el, file: i, total: r, totalSize: n, errors: l }));
    if (h.isCancelled !== true) if (t.silent !== true && 0 < l.length) B.show({ anchor: this.el, html: "Errors: " + l.join("<br>") }), console.log("ERRORS (while adding files): ", l);
    else if (s.push(i), typeof FileReader < "u" && t.readContent === true) {
      s = new FileReader();
      let o = this;
      s.onload = function(d) {
        var d = d.target.result, u = d.indexOf(",");
        i.content = d.substr(u + 1), o.refresh(), a(o.el).trigger("input").trigger("change"), h.finish();
      }, s.readAsDataURL(e);
    } else this.refresh(), a(this.el).trigger("input").trigger("change"), h.finish();
  }
  moveCaret2end() {
    setTimeout(() => {
      this.el.setSelectionRange(this.el.value.length, this.el.value.length);
    }, 0);
  }
}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const st = globalThis, ut = (b) => b, Le = st.trustedTypes, pt = Le ? Le.createPolicy("lit-html", { createHTML: (b) => b }) : void 0, Ct = "$lit$", ae = `lit$${Math.random().toFixed(9).slice(2)}$`, kt = "?" + ae, Fs = `<${kt}>`, me = document, ke = () => me.createComment(""), Se = (b) => b === null || typeof b != "object" && typeof b != "function", it = Array.isArray, Rs = (b) => it(b) || typeof (b == null ? void 0 : b[Symbol.iterator]) == "function", Ge = `[ 	
\f\r]`, ye = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, mt = /-->/g, ft = />/g, ce = RegExp(`>|${Ge}(?:([^\\s"'>=/]+)(${Ge}*=${Ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), gt = /'/g, wt = /"/g, St = /^(?:script|style|textarea|title)$/i, zs = (b) => (e, ...t) => ({ _$litType$: b, strings: e, values: t }), Ne = zs(1), $e = Symbol.for("lit-noChange"), Q = Symbol.for("lit-nothing"), vt = /* @__PURE__ */ new WeakMap(), de = me.createTreeWalker(me, 129);
function $t(b, e) {
  if (!it(b) || !b.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return pt !== void 0 ? pt.createHTML(e) : e;
}
const Os = (b, e) => {
  const t = b.length - 1, s = [];
  let i, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", r = ye;
  for (let l = 0; l < t; l++) {
    const h = b[l];
    let o, c, d = -1, u = 0;
    for (; u < h.length && (r.lastIndex = u, c = r.exec(h), c !== null); ) u = r.lastIndex, r === ye ? c[1] === "!--" ? r = mt : c[1] !== void 0 ? r = ft : c[2] !== void 0 ? (St.test(c[2]) && (i = RegExp("</" + c[2], "g")), r = ce) : c[3] !== void 0 && (r = ce) : r === ce ? c[0] === ">" ? (r = i ?? ye, d = -1) : c[1] === void 0 ? d = -2 : (d = r.lastIndex - c[2].length, o = c[1], r = c[3] === void 0 ? ce : c[3] === '"' ? wt : gt) : r === wt || r === gt ? r = ce : r === mt || r === ft ? r = ye : (r = ce, i = void 0);
    const f = r === ce && b[l + 1].startsWith("/>") ? " " : "";
    n += r === ye ? h + Fs : d >= 0 ? (s.push(o), h.slice(0, d) + Ct + h.slice(d) + ae + f) : h + ae + (d === -2 ? l : f);
  }
  return [$t(b, n + (b[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
};
class Te {
  constructor({ strings: e, _$litType$: t }, s) {
    let i;
    this.parts = [];
    let n = 0, r = 0;
    const l = e.length - 1, h = this.parts, [o, c] = Os(e, t);
    if (this.el = Te.createElement(o, s), de.currentNode = this.el.content, t === 2 || t === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (i = de.nextNode()) !== null && h.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const d of i.getAttributeNames()) if (d.endsWith(Ct)) {
          const u = c[r++], f = i.getAttribute(d).split(ae), m = /([.?@])?(.*)/.exec(u);
          h.push({ type: 1, index: n, name: m[2], strings: f, ctor: m[1] === "." ? Ls : m[1] === "?" ? Ps : m[1] === "@" ? Hs : Pe }), i.removeAttribute(d);
        } else d.startsWith(ae) && (h.push({ type: 6, index: n }), i.removeAttribute(d));
        if (St.test(i.tagName)) {
          const d = i.textContent.split(ae), u = d.length - 1;
          if (u > 0) {
            i.textContent = Le ? Le.emptyScript : "";
            for (let f = 0; f < u; f++) i.append(d[f], ke()), de.nextNode(), h.push({ type: 2, index: ++n });
            i.append(d[u], ke());
          }
        }
      } else if (i.nodeType === 8) if (i.data === kt) h.push({ type: 2, index: n });
      else {
        let d = -1;
        for (; (d = i.data.indexOf(ae, d + 1)) !== -1; ) h.push({ type: 7, index: n }), d += ae.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const s = me.createElement("template");
    return s.innerHTML = e, s;
  }
}
function ve(b, e, t = b, s) {
  var _a, _b;
  if (e === $e) return e;
  let i = s !== void 0 ? (_a = t._$Co) == null ? void 0 : _a[s] : t._$Cl;
  const n = Se(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((_b = i == null ? void 0 : i._$AO) == null ? void 0 : _b.call(i, false), n === void 0 ? i = void 0 : (i = new n(b), i._$AT(b, t, s)), s !== void 0 ? (t._$Co ?? (t._$Co = []))[s] = i : t._$Cl = i), i !== void 0 && (e = ve(b, i._$AS(b, e.values), i, s)), e;
}
class Ns {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: s } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? me).importNode(t, true);
    de.currentNode = i;
    let n = de.nextNode(), r = 0, l = 0, h = s[0];
    for (; h !== void 0; ) {
      if (r === h.index) {
        let o;
        h.type === 2 ? o = new Ae(n, n.nextSibling, this, e) : h.type === 1 ? o = new h.ctor(n, h.name, h.strings, this, e) : h.type === 6 && (o = new js(n, this, e)), this._$AV.push(o), h = s[++l];
      }
      r !== (h == null ? void 0 : h.index) && (n = de.nextNode(), r++);
    }
    return de.currentNode = me, i;
  }
  p(e) {
    let t = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
  }
}
class Ae {
  get _$AU() {
    var _a;
    return ((_a = this._$AM) == null ? void 0 : _a._$AU) ?? this._$Cv;
  }
  constructor(e, t, s, i) {
    this.type = 2, this._$AH = Q, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? true;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = ve(this, e, t), Se(e) ? e === Q || e == null || e === "" ? (this._$AH !== Q && this._$AR(), this._$AH = Q) : e !== this._$AH && e !== $e && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Rs(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== Q && Se(this._$AH) ? this._$AA.nextSibling.data = e : this.T(me.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var _a;
    const { values: t, _$litType$: s } = e, i = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = Te.createElement($t(s.h, s.h[0]), this.options)), s);
    if (((_a = this._$AH) == null ? void 0 : _a._$AD) === i) this._$AH.p(t);
    else {
      const n = new Ns(i, this), r = n.u(this.options);
      n.p(t), this.T(r), this._$AH = n;
    }
  }
  _$AC(e) {
    let t = vt.get(e.strings);
    return t === void 0 && vt.set(e.strings, t = new Te(e)), t;
  }
  k(e) {
    it(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let s, i = 0;
    for (const n of e) i === t.length ? t.push(s = new Ae(this.O(ke()), this.O(ke()), this, this.options)) : s = t[i], s._$AI(n), i++;
    i < t.length && (this._$AR(s && s._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var _a;
    for ((_a = this._$AP) == null ? void 0 : _a.call(this, false, true, t); e !== this._$AB; ) {
      const s = ut(e).nextSibling;
      ut(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var _a;
    this._$AM === void 0 && (this._$Cv = e, (_a = this._$AP) == null ? void 0 : _a.call(this, e));
  }
}
class Pe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, s, i, n) {
    this.type = 1, this._$AH = Q, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = Q;
  }
  _$AI(e, t = this, s, i) {
    const n = this.strings;
    let r = false;
    if (n === void 0) e = ve(this, e, t, 0), r = !Se(e) || e !== this._$AH && e !== $e, r && (this._$AH = e);
    else {
      const l = e;
      let h, o;
      for (e = n[0], h = 0; h < n.length - 1; h++) o = ve(this, l[s + h], t, h), o === $e && (o = this._$AH[h]), r || (r = !Se(o) || o !== this._$AH[h]), o === Q ? e = Q : e !== Q && (e += (o ?? "") + n[h + 1]), this._$AH[h] = o;
    }
    r && !i && this.j(e);
  }
  j(e) {
    e === Q ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ls extends Pe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === Q ? void 0 : e;
  }
}
class Ps extends Pe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== Q);
  }
}
class Hs extends Pe {
  constructor(e, t, s, i, n) {
    super(e, t, s, i, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ve(this, e, t, 0) ?? Q) === $e) return;
    const s = this._$AH, i = e === Q && s !== Q || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, n = e !== Q && (s === Q || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var _a;
    typeof this._$AH == "function" ? this._$AH.call(((_a = this.options) == null ? void 0 : _a.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class js {
  constructor(e, t, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ve(this, e);
  }
}
const Ys = st.litHtmlPolyfillSupport;
Ys == null ? void 0 : Ys(Te, Ae), (st.litHtmlVersions ?? (st.litHtmlVersions = [])).push("3.3.2");
const Xs = (b, e, t) => {
  const s = e;
  let i = s._$litPart$;
  return i === void 0 && (s._$litPart$ = i = new Ae(e.insertBefore(ke(), null), null, void 0, {})), i._$AI(b), i;
};
function Ks({ buttons: b, clickedButton: e, author: t, sourceCode: s }) {
  const i = document.createElement("div");
  function n() {
    return Bt() === "dark" ? "\u2600" : "\u263E";
  }
  const r = Ne`
    <div class="buttons-container">
      ${b == null ? void 0 : b.map((c) => Ne`<button class="btn btn-text" @click=${l}>
            ${c}
          </button>`)}
      <button class="btn btn-text btn-theme" @click=${h} title="Toggle light/dark theme">
        ${n()}
      </button>
      <button class="btn btn-icon" @click=${o}>
        ${Bs()}
      </button>
    </div>

    <div id="dropdown-menu" style="display: none;">
      <a
        href="${s || "https://github.com/GiorgioBurbanelli89/awatif-workspace"}"
        class="dropdown-link"
        >Hekatan Struct — Source Code</a
      >
      ${t ? Ne`<a href="${t}" class="dropdown-link">Contact Author</a>` : ""}
      <a href="https://github.com/madil4/awatif/tree/v2.0.0" class="dropdown-link"
        >Based on awatif v2.0.0</a
      >
    </div>
  `;
  i.id = "toolbar", Xs(r, i), _e((c) => {
    const d = i.querySelector(".btn-theme");
    d && (d.textContent = c === "dark" ? "\u2600" : "\u263E");
  });
  function l(c) {
    const d = c.target;
    e.val = "", setTimeout(() => e.val = d.innerText);
  }
  function h() {
    Xt();
  }
  function o(c) {
    const d = document.getElementById("dropdown-menu");
    d.style.display = d.style.display === "block" ? "none" : "block";
  }
  return i;
}
function Bs() {
  return Ne`<img src="${"/hekatan-struct/"}img/hekatan-logo.png" alt="Hekatan" style="width:22px;height:22px;border-radius:4px;">`;
}
export {
  Q as A,
  Xs as D,
  _s as a,
  Ks as b,
  xs as c,
  Us as d,
  us as e,
  ht as f,
  Ws as g,
  Cs as h,
  Ds as i,
  Ne as j,
  Zs as w
};
