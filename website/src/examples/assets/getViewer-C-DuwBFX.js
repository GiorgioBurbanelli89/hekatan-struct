import { u as q, B as C, v as _, F as R, d as ie, a as $, G as de, e as E, w as ce, s as B, M as L, V as x, A as Z, q as b, x as U, k as ae, j as K, L as D, y as N, z as W, R as he, b as pe, H as ue, I as me, J as te, C as A, K as k, N as fe, U as we, l as xe, m as ve, n as ye, W as ge, o as Me, p as Ve, D as ne, O as ze } from "./Text-BJMxMB48.js";
import { v as u, P as Fe, g as X, o as O } from "./theme-DNr3SX9M.js";
import "./styles-kwcqhtUA.js";
function Pe(t, e, i) {
  const o = document.createElement("div"), n = new Fe({ title: "Settings", expanded: false, container: o });
  if (o.setAttribute("id", "settings"), (e == null ? void 0 : e.nodes) && (n.addBinding(t.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(t.nodes, "val", { label: "Nodes" }), n.addBinding(t.elements, "val", { label: "Elements" }), n.addBinding(t.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(t.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(t.orientations, "val", { label: "Orientations" })), (e == null ? void 0 : e.nodeInputs) || (e == null ? void 0 : e.elementInputs)) {
    const a = n.addFolder({ title: "Analysis Inputs" });
    a.addBinding(t.supports, "val", { label: "Supports" }), a.addBinding(t.loads, "val", { label: "Loads" });
  }
  if ((e == null ? void 0 : e.deformOutputs) || (e == null ? void 0 : e.analyzeOutputs)) {
    const a = n.addFolder({ title: "Analysis Outputs" });
    a.addBinding(t.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), a.addBinding(t.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ" }, label: "Frame results" }), a.addBinding(t.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), a.addBinding(t.deformedShape, "val", { label: "Deformed shape" });
  }
  return i && n.addBinding(t.solids, "val", { label: "Solids" }), o;
}
function Se(t) {
  return { gridSize: u.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: u.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: u.state((t == null ? void 0 : t.nodes) ?? true), elements: u.state((t == null ? void 0 : t.elements) ?? true), nodesIndexes: u.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: u.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: u.state((t == null ? void 0 : t.orientations) ?? false), supports: u.state((t == null ? void 0 : t.supports) ?? true), loads: u.state((t == null ? void 0 : t.loads) ?? true), deformedShape: u.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: u.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: u.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: u.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: u.state((t == null ? void 0 : t.flipAxes) ?? false), solids: u.state((t == null ? void 0 : t.solids) ?? true) };
}
function Te(t, e, i) {
  const o = X(), n = new q(new C(), new _({ color: o.nodePoint }));
  return O((a, r) => {
    n.material.color.setHex(r.nodePoint);
  }), n.frustumCulled = false, u.derive(() => {
    t.nodes.val && n.geometry.setAttribute("position", new R(e.val.flat(), 3));
  }), u.derive(() => {
    i.val;
    const a = 0.05 * t.gridSize.val * 0.5;
    t.nodes.rawVal && (n.material.size = a * i.rawVal);
  }), u.derive(() => {
    n.visible = t.nodes.val;
  }), n;
}
function be(t, e, i) {
  const o = X(), n = new ie(new C(), new $({ color: o.elementLine }));
  return O((a, r) => {
    n.material.color.setHex(r.elementLine);
  }), n.frustumCulled = false, u.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elements.val) return;
    const a = (_a = t.elements) == null ? void 0 : _a.val.map((r) => Ce(r).map((s) => [...i.val[s[0]], ...i.val[s[1]]]).flat()).flat();
    n.geometry.setAttribute("position", new R(a, 3));
  }), u.derive(() => {
    n.visible = e.elements.val;
  }), n;
}
function Ce(t) {
  if (t.length === 2) return [t];
  const e = [];
  for (let i = 0; i < t.length; i++) e.push([t[i], t[(i + 1) % t.length]]);
  return e;
}
function oe(t) {
  const e = X(), i = new de(t, 20, e.grid, e.grid);
  return i.position.set(0.5 * t, 0.5 * t, 0), i.rotateX(Math.PI / 2), i;
}
function Ie(t, e, i, o) {
  const n = new E(), a = new ce(0.5, 0.5, 0.5), r = new B({ color: 10166822 });
  return u.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const s = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((c, p) => {
      const h = i.val[p];
      if (!h) return;
      const d = new L(a, r);
      d.position.set(...h);
      const l = s * o.rawVal;
      d.scale.set(l, l, l), n.add(d);
    });
  }), u.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((p) => p.scale.set(c, c, c));
  }), u.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function Ee(t, e, i, o) {
  const n = new E();
  n.name = "loadsGroup";
  function a(r) {
    if (r.length < 2) return 0.12 * e.gridSize.rawVal;
    const s = [1 / 0, 1 / 0, 1 / 0], c = [-1 / 0, -1 / 0, -1 / 0];
    for (const h of r) for (let d = 0; d < 3; d++) s[d] = Math.min(s[d], h[d]), c[d] = Math.max(c[d], h[d]);
    return 0.08 * Math.max(c[0] - s[0], c[1] - s[1], c[2] - s[2], 0.1);
  }
  return u.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const r = i.val, s = a(r);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((c, p) => {
      const h = r[p];
      if (!h) return;
      const d = new x(...c.slice(0, 3));
      if (d.lengthSq() < 1e-30) return;
      d.normalize();
      const l = new Z(d, new x(...h), 1, 15637248, 0.3, 0.3), m = s * o.rawVal;
      l.scale.set(m, m, m), n.add(l);
    });
  }), u.derive(() => {
    if (o.val, !e.loads.rawVal) return;
    const s = a(i.rawVal) * o.rawVal;
    n.children.forEach((c) => c.scale.set(s, s, s));
  }), u.derive(() => {
    n.visible = e.loads.val;
  }), n;
}
function Ae(t, e, i) {
  const o = new E();
  return u.derive(() => {
    if (!t.nodesIndexes.val) return;
    o.children.forEach((a) => a.dispose()), o.clear();
    const n = 0.05 * t.gridSize.val * 0.6;
    e.val.forEach((a, r) => {
      const s = new b(`${r}`);
      s.position.set(...a), s.updateScale(n * i.rawVal), o.add(s);
    });
  }), u.derive(() => {
    if (i.val, !t.nodesIndexes.rawVal) return;
    const n = 0.05 * t.gridSize.val * 0.6;
    o.children.forEach((a) => a.updateScale(n * i.rawVal));
  }), u.derive(() => {
    o.visible = t.nodesIndexes.val;
  }), o;
}
function Re(t, e, i, o) {
  const n = new E();
  return u.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((r) => r.dispose()), n.clear();
    const a = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((r, s) => {
      const c = new b(`${s}`, void 0, "#001219");
      c.position.set(...Ye(r.map((p) => i.rawVal[p]))), c.updateScale(a * o.rawVal), n.add(c);
    });
  }), u.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const a = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((r) => r.updateScale(a * o.rawVal));
  }), u.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function Ye(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), i = t.length;
  return [e[0] / i, e[1] / i, e[2] / i];
}
function Xe(t, e) {
  const i = new E(), o = 0.05 * t * 1, n = X(), a = new b("X", "red", "transparent"), r = new b(e ? "Z" : "Y", "green", "transparent"), s = new b(e ? "Y" : "Z", "blue", "transparent"), c = new Z(new x(1, 0, 0), new x(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), p = new Z(new x(0, 1, 0), new x(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), h = new Z(new x(0, 0, 1), new x(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), r.position.set(0, 1.3 * o, 0), s.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), r.updateScale(0.4 * o), s.updateScale(0.4 * o), c.scale.set(o, o, o), p.scale.set(o, o, o), h.scale.set(o, o, o), i.add(c, p, h, a, r, s), i;
}
function re(t, e) {
  const i = new x(...t), n = new x(...e).clone().sub(i), a = n.length(), r = n.dot(new x(1, 0, 0)) / a, s = n.dot(new x(0, 1, 0)) / a, c = n.dot(new x(0, 0, 1)) / a, p = Math.sqrt(r ** 2 + s ** 2);
  let h = new U().fromArray([[r, s, c], [-s / p, r / p, 0], [-r * c / p, -s * c / p, p]].flat());
  return c === 1 && (h = new U().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), c === -1 && (h = new U().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new ae().setFromMatrix3(h);
}
function J(t, e) {
  return t == null ? void 0 : t.map((i, o) => (9 * i + e[o]) / 10);
}
function H(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), i = t.length;
  return [e[0] / i, e[1] / i, e[2] / i];
}
function Be(t, e, i) {
  const o = H([e, i]), n = H([t, i]), a = H([t, e]), r = new x(...o).sub(new x(...n)).normalize(), s = new x(...i).sub(new x(...a)).normalize(), c = r.clone().cross(s).normalize(), p = c.clone().cross(r).normalize();
  return new ae().makeBasis(r, p, c);
}
function Le(t, e, i, o) {
  const n = new E(), a = new C(), r = new $({ vertexColors: true }), s = [0, 0, 0], c = [1, 0, 0], p = [0, 1, 0], h = [0, 0, 1];
  a.setAttribute("position", new R([...s, ...c, ...s, ...p, ...s, ...h], 3));
  const d = [255, 0, 0], l = [0, 255, 0], m = [0, 0, 255];
  return a.setAttribute("color", new R([...d, ...d, ...l, ...l, ...m, ...m], 3)), u.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((f) => {
      const v = new ie(a, r), z = i.rawVal[f[0]], S = i.rawVal[f[1]];
      if (f.length === 2 && (v.position.set(...J(z, S)), v.rotation.setFromRotationMatrix(re(z, S))), f.length === 3) {
        const w = i.rawVal[f[2]];
        v.position.set(...H([z, S, w])), v.rotation.setFromRotationMatrix(Be(z, S, w));
      }
      const y = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      v.scale.set(y, y, y), n.add(v);
    }));
  }), u.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const v = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((z) => z.scale.set(v, v, v));
  }), u.derive(() => {
    n.visible = e.orientations.val;
  }), n;
}
class G extends E {
  constructor(e, i, o, n, a, r, s) {
    super();
    const c = new K().moveTo(0, 0).lineTo(0, r[1]).lineTo(o, r[1]).lineTo(o, 0).lineTo(0, 0), p = c.getPoints(), h = new C().setFromPoints(p);
    this.lines = new D(h, new $({ color: X().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), s && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const d = new N(c), l = new B({ color: r[1] > 0 ? 24435 : 11411474, side: W });
    this.mesh = new L(d, l), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), s && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new b(`${a[1].toFixed(4)}`), this.normalizedResult = r, this.textPosition = H([e, i]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class se extends E {
  constructor(e, i, o, n, a, r, s) {
    super();
    const c = a[0] * o / (a[0] + a[1]), p = a[0] * a[1] > 0;
    if (this.text = new b(`${a[0].toFixed(4)}`), this.text2 = new b(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = r, this.textPosition = J(e, i), this.text2Position = J(i, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), p) {
      const h = new K().moveTo(0, 0).lineTo(0, r[0]).lineTo(c, 0).lineTo(0, 0), d = new K().moveTo(c, 0).lineTo(o, -r[1]).lineTo(o, 0).lineTo(c, 0), l = h.getPoints(), m = d.getPoints(), f = new C().setFromPoints(l), v = new C().setFromPoints(m), z = new $({ color: X().resultOutline });
      this.lines = new D(f, z), this.lines2 = new D(v, z), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), s && this.lines.rotateX(Math.PI / 2), s && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const S = new N(h), I = new N(d), y = new B({ color: r[0] > 0 ? 24435 : 11411474, side: W }), w = new B({ color: -r[1] > 0 ? 24435 : 11411474, side: W });
      this.mesh = new L(S, y), this.mesh2 = new L(I, w), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), s && this.mesh.rotateX(Math.PI / 2), s && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const h = new K().moveTo(0, 0).lineTo(0, r[0]).lineTo(o, -r[1]).lineTo(o, 0).lineTo(0, 0), d = h.getPoints(), l = new C().setFromPoints(d);
      this.lines = new D(l, new $({ color: X().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), s && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const m = new N(h), f = new B({ color: r[0] > 0 ? 24435 : 11411474, side: W });
      this.mesh = new L(m, f), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), s && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var le = ((t) => (t.normals = "normals", t.shearsY = "shearsY", t.shearsZ = "shearsZ", t.torsions = "torsions", t.bendingsY = "bendingsY", t.bendingsZ = "bendingsZ", t))(le || {});
function Ze(t, e, i, o) {
  const n = new E(), a = { normals: G, shearsY: G, shearsZ: G, torsions: G, bendingsY: se, bendingsZ: se };
  return u.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, i.val, e.frameResults.val == "none") return;
    n.children.forEach((s) => s.dispose()), n.clear();
    const r = le[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[r]) == null ? void 0 : _b.forEach((s, c) => {
      var _a2, _b2;
      const p = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[c]) ?? [0, 1], h = i.rawVal[p[0]], d = i.rawVal[p[1]], l = new x(...d).distanceTo(new x(...h)), m = We((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[r]), f = s == null ? void 0 : s.map((I) => I / (m === 0 ? 1 : m)), v = re(h, d), z = new a[r](h, d, l, v, s ?? [0, 0], f ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(r)), S = 0.05 * e.gridSize.rawVal;
      z.updateScale(S * o.rawVal), n.add(z);
    });
  }), u.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const r = 0.05 * e.gridSize.val;
    n.children.forEach((s) => s.updateScale(r * o.rawVal));
  }), u.derive(() => {
    n.visible = e.frameResults.val != "none";
  }), n;
}
function We(t) {
  let e = 0;
  return t == null ? void 0 : t.forEach((i) => {
    const o = Math.max(...i ?? [0, 0]);
    o > e && (e = o);
  }), e;
}
class He extends E {
  constructor(e, i, o) {
    super();
    const n = i === j.reactions;
    o[0] && (this.xText1 = new b(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new b(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new b(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new b(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new b(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new b(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new Z(new x(1, 0, 0), new x(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new Z(new x(0, 1, 0), new x(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new Z(new x(0, 0, 1), new x(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...e), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var j = ((t) => (t.deformations = "deformations", t.reactions = "reactions", t))(j || {});
function $e(t, e, i, o) {
  const n = new E();
  return u.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((s) => s.dispose()), n.clear();
    const a = j[e.nodeResults.rawVal], r = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((s, c) => {
      const p = new He(i.rawVal[c], a, s ?? [0, 0, 0, 0, 0, 0]);
      p.updateScale(r * o.rawVal), n.add(p);
    });
  }), u.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const a = 0.05 * e.gridSize.val;
    n.children.forEach((r) => r.updateScale(a * o.rawVal));
  }), u.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function ke({ drawingObj: t, gridObj: e, scene: i, camera: o, controls: n, gridSize: a, derivedDisplayScale: r, rendererElm: s, viewerRender: c }) {
  const p = new he(), h = new pe(), d = new L(new ue(a, a), new B({ side: W })), l = new q(new C(), new _()), m = new q(new C(), new _({ color: "gray" })), f = new q(new C(), new _({ color: "orange", size: 0.8 }));
  i.add(f), l.geometry.setAttribute("position", new R(t.points.rawVal.flat(), 3)), l.geometry.computeBoundingSphere(), l.frustumCulled = false, m.frustumCulled = false, i.add(m), d.position.set(0.5 * a, 0.5 * a, 0), d.rotateX(Math.PI / 2), d.geometry.rotateX(Math.PI / 2), d.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), u.derive(() => {
    t.gridTarget && (Ge(e, { position: new x(...t.gridTarget.val.position), quaternion: new me().setFromEuler(new te(...t.gridTarget.val.rotation)) }, c), d.position.set(...t.gridTarget.val.position), d.quaternion.setFromEuler(new te(...t.gridTarget.val.rotation)), d.updateMatrixWorld());
  }), u.derive(() => {
    l.geometry.setAttribute("position", new R(t.points.val.flat(), 3)), l.geometry.computeBoundingSphere();
  }), u.derive(() => {
    const y = 0.05 * a * 0.5 * r.val;
    m.material.size = y, p.params.Points.threshold = 0.4 * y;
  }), u.derive(() => {
    var _a;
    const y = t.points.val ?? [], F = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], M = [];
    for (const V of F) {
      const [P, T, Y] = y[V];
      M.push(P, T, Y);
    }
    const g = new C();
    g.setAttribute("position", new R(M, 3)), f.geometry.dispose(), f.geometry = g;
  });
  let v = false, z = 0;
  s.addEventListener("pointerdown", () => {
    v = true;
  }), s.addEventListener("pointerup", () => {
    v = false;
  }), s.addEventListener("pointermove", () => {
    v && z++;
  }), s.addEventListener("click", (y) => {
    if (z > 5) {
      z = 0;
      return;
    }
    z = 0, h.x = y.clientX / window.innerWidth * 2 - 1, h.y = -(y.clientY / window.innerHeight) * 2 + 1, p.setFromCamera(h, o);
    const w = p.intersectObject(d);
    if (w.length) {
      let F = w[0].point;
      (y.ctrlKey || y.metaKey) && (F = new x(Math.round(w[0].point.x), Math.round(w[0].point.y), Math.round(w[0].point.z))), t.points.val = [...t.points.rawVal, F.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), s.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), s.addEventListener("pointermove", (y) => {
    h.x = y.clientX / window.innerWidth * 2 - 1, h.y = -(y.clientY / window.innerHeight) * 2 + 1, p.setFromCamera(h, o);
    const w = p.intersectObject(d);
    if (m.geometry.deleteAttribute("position"), w.length) {
      let F = w[0].point;
      (y.ctrlKey || y.metaKey) && (F = new x(Math.round(w[0].point.x), Math.round(w[0].point.y), Math.round(w[0].point.z))), m.geometry.setAttribute("position", new R(F.toArray(), 3));
    }
    c();
  }), s.addEventListener("pointermove", (y) => {
    var _a;
    h.x = y.clientX / window.innerWidth * 2 - 1, h.y = -(y.clientY / window.innerHeight) * 2 + 1, p.setFromCamera(h, o);
    let w = false;
    const F = p.intersectObject(l), M = p.intersectObject(d);
    if (F.length && M.length) {
      const g = new x(...t.points.rawVal[F[0].index]), V = new x(...M[0].point), P = g.sub(V), T = (_a = M[0].face) == null ? void 0 : _a.normal;
      T.transformDirection(d.matrixWorld), Math.abs(P.dot(T)) < 1e-4 && (w = true);
    }
    m.visible = !w;
  });
  let S = false, I;
  s.addEventListener("pointermove", (y) => {
    var _a;
    if (!z) return;
    h.x = y.clientX / window.innerWidth * 2 - 1, h.y = -(y.clientY / window.innerHeight) * 2 + 1, p.setFromCamera(h, o);
    let w = false;
    const F = p.intersectObject(l), M = p.intersectObject(d);
    if (F.length && M.length) {
      const V = new x(...t.points.rawVal[F[0].index]), P = new x(...M[0].point), T = V.sub(P), Y = (_a = M[0].face) == null ? void 0 : _a.normal;
      Y.transformDirection(d.matrixWorld), Math.abs(T.dot(Y)) < 1e-4 && (w = true);
    }
    if (w && z < 5 && (S = true, n.enabled = false, I = F[0].index), !S || z % 2 !== 0) return;
    const g = [...t.points.rawVal];
    if (I !== void 0) {
      let V = M[0].point;
      (y.ctrlKey || y.metaKey) && (V = new x(Math.round(V.x), Math.round(V.y), Math.round(V.z))), g[I] = V.toArray();
    }
    t.points.val = g;
  }), s.addEventListener("pointerup", () => {
    n.enabled = true, S = false;
  }), s.addEventListener("contextmenu", (y) => {
    var _a;
    h.x = y.clientX / window.innerWidth * 2 - 1, h.y = -(y.clientY / window.innerHeight) * 2 + 1, p.setFromCamera(h, o);
    let w = false;
    const F = p.intersectObject(l), M = p.intersectObject(d);
    if (F.length && M.length) {
      const P = new x(...t.points.rawVal[F[0].index]), T = new x(...M[0].point), Y = P.sub(T), ee = (_a = M[0].face) == null ? void 0 : _a.normal;
      ee.transformDirection(d.matrixWorld), Math.abs(Y.dot(ee)) < 1e-4 && (w = true);
    }
    if (!w) return;
    const g = [...t.points.rawVal];
    if (g.splice(F[0].index, 1), t.points.val = g, !t.polylines) return;
    const V = t.polylines.rawVal.map((P) => P.filter((T) => T !== F[0].index)).map((P) => P.map((T) => T > F[0].index ? T - 1 : T)).filter((P) => P.length);
    V.push([]), t.polylines.val = V;
  });
}
function Ge(t, e, i) {
  const a = Math.round(14.999999999999998), r = { position: t.position.clone(), quaternion: t.quaternion.clone() }, s = setInterval(p, 1e3 / 30);
  let c = 0;
  function p() {
    c++;
    const h = c / a;
    t.position.lerpVectors(r.position, e.position, h), t.quaternion.slerpQuaternions(r.quaternion, e.quaternion, h), i && i(), c == a && clearInterval(s);
  }
}
class qe {
  constructor(e, i = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(e, i);
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
  setColorMap(e, i = 32) {
    this.map = Q[e] || Q.rainbow, this.n = i;
    const o = 1 / this.n, n = new A(), a = new A();
    this.lut.length = 0, this.lut.push(new A(this.map[0][1]));
    for (let r = 1; r < i; r++) {
      const s = r * o;
      for (let c = 0; c < this.map.length - 1; c++) if (s > this.map[c][0] && s <= this.map[c + 1][0]) {
        const p = this.map[c][0], h = this.map[c + 1][0];
        n.setHex(this.map[c][1], k), a.setHex(this.map[c + 1][1], k);
        const d = new A().lerpColors(n, a, (s - p) / (h - p));
        this.lut.push(d);
      }
    }
    return this.lut.push(new A(this.map[this.map.length - 1][1])), this;
  }
  copy(e) {
    return this.lut = e.lut, this.map = e.map, this.n = e.n, this.minV = e.minV, this.maxV = e.maxV, this;
  }
  getColor(e) {
    e = fe.clamp(e, this.minV, this.maxV), e = (e - this.minV) / (this.maxV - this.minV);
    const i = Math.round(e * this.n);
    return this.lut[i];
  }
  addColorMap(e, i) {
    return Q[e] = i, this;
  }
  createCanvas() {
    const e = document.createElement("canvas");
    return e.width = 1, e.height = this.n, this.updateCanvas(e), e;
  }
  updateCanvas(e) {
    const i = e.getContext("2d", { alpha: false }), o = i.getImageData(0, 0, 1, this.n), n = o.data;
    let a = 0;
    const r = 1 / this.n, s = new A(), c = new A(), p = new A();
    for (let h = 1; h >= 0; h -= r) for (let d = this.map.length - 1; d >= 0; d--) if (h < this.map[d][0] && h >= this.map[d - 1][0]) {
      const l = this.map[d - 1][0], m = this.map[d][0];
      s.setHex(this.map[d - 1][1], k), c.setHex(this.map[d][1], k), p.lerpColors(s, c, (h - l) / (m - l)), n[a * 4] = Math.round(p.r * 255), n[a * 4 + 1] = Math.round(p.g * 255), n[a * 4 + 2] = Math.round(p.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return i.putImageData(o, 0, 0), e;
  }
}
const Q = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function _e(t, e, i) {
  const o = new qe(), n = new A(), a = new L(new C(), new B({ side: W, vertexColors: true }));
  return o.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, u.derive(() => {
    a.geometry.setAttribute("position", new R(t.val.flat(), 3));
    const r = [];
    for (const s of e.val) s.length === 3 ? r.push(s[0], s[1], s[2]) : s.length === 4 && (r.push(s[0], s[1], s[2]), r.push(s[0], s[2], s[3]));
    a.geometry.setIndex(new we(r, 1)), a.geometry.setAttribute("color", new R(t.val.map(() => [0, 0, 0]).flat(), 3)), o.setMax(Math.max(...i.val)), o.setMin(Math.min(...i.val));
    for (let s = 0; s < i.val.length; s++) {
      const c = o.getColor(i.val[s]) ?? new A(0, 0, 0);
      n.copy(c).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(s, n.r, n.g, n.b);
    }
  }), a;
}
function Ke(t, e, i, o) {
  const n = _e(i, t.elements, o);
  return u.derive(() => {
    n.visible = e.shellResults.val != "none";
  }), n;
}
function De(t, e = 8) {
  const i = document.createElement("div");
  i.id = "legend";
  const o = Array.from({ length: e + 1 }, (r, s) => s / e).reverse();
  let n, a;
  return o.forEach((r, s) => {
    n = document.createElement("div"), n.id = `marker-${s}`, n.className = "marker", n.style.marginTop = s == 0 ? "0px" : `calc(${50 / e}vh - 1px)`, a = document.createElement("p"), a.id = `marker-text-${s}`, n.append(a), i.append(n);
  }), setTimeout(() => {
    u.derive(() => {
      o.forEach((r, s) => {
        a = document.getElementById(`marker-text-${s}`), a.innerText = Ne(t.val, r).toString();
      });
    });
  }), i;
}
function Ne(t, e) {
  const i = Math.max(...t) - Math.min(...t);
  return (Math.min(...t) + e * i).toPrecision(3);
}
function et({ mesh: t, settingsObj: e, drawingObj: i, objects3D: o, solids: n }) {
  ze.DEFAULT_UP = new x(0, 0, 1);
  const a = document.createElement("div"), r = new xe(), s = new ve(45, 1, 0.1, 2 * 1e6), c = new ye(-10, 10, 10, -10, -1e3, 2e6);
  let p = s;
  const h = new ge({ antialias: true });
  h.localClippingEnabled = true;
  const d = new Me(s, h.domElement), l = Se(e), m = u.derive(() => l.displayScale.val === 0 ? 1 : l.displayScale.val > 0 ? l.displayScale.val : -1 / l.displayScale.val), f = Ue(t, l);
  let v = oe(l.gridSize.rawVal);
  a.appendChild(Pe(l, t, n)), a.setAttribute("id", "viewer"), a.appendChild(h.domElement), h.setPixelRatio(window.devicePixelRatio);
  const z = X();
  h.setClearColor(z.background, 1);
  const S = l.gridSize.rawVal, I = S * 0.5 + S * 0.5 / Math.tan(45 * 0.5);
  s.position.set(0.5 * S, 0.8 * -I, 0.5 * S), d.target.set(0.5 * S, 0.5 * S, 0), d.minDistance = 1, d.maxDistance = I * 2.5, d.zoomSpeed = 10, d.update(), r.add(v, Xe(l.gridSize.rawVal, l.flipAxes.rawVal)), new ResizeObserver((M) => {
    var _a, _b;
    for (const g of M) {
      const V = (_a = g.target) == null ? void 0 : _a.clientWidth, P = (_b = g.target) == null ? void 0 : _b.clientHeight;
      if (V === 0 || P === 0) continue;
      s.aspect = V / P, s.updateProjectionMatrix();
      const T = V / P, Y = c.top;
      c.left = -Y * T, c.right = Y * T, c.updateProjectionMatrix(), h.setSize(V, P), w();
    }
  }).observe(a), d.addEventListener("change", w), u.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e2 = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e2.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, l.displayScale.val, l.nodes.val, l.elements.val, l.nodesIndexes.val, l.elementsIndexes.val, l.orientations.val, l.supports.val, l.loads.val, l.deformedShape.val, l.nodeResults.val, l.frameResults.val, l.shellResults.val, setTimeout(w);
  });
  function w() {
    h.render(r, p);
  }
  function F(M) {
    p = M, d.object = M, d.update(), w();
  }
  if (t) {
    r.add(Te(l, f, m), be(t, l, f), Ae(l, f, m), Re(t, l, f, m), Ie(t, l, f, m), Ee(t, l, f, m), Le(t, l, f, m), $e(t, l, f, m), Ze(t, l, f, m));
    const M = Qe(t, l), g = Ke(t, l, f, M), V = De(M);
    r.add(g), a.appendChild(V), u.derive(() => {
      V.hidden = l.shellResults.val == "none", g.visible = l.shellResults.val != "none";
    });
  }
  if (n) {
    const M = new Ve(16777215, 0.5);
    r.add(M);
    const g = new ne(16777215, 0.5);
    g.position.set(30, 25, -10), g.shadow.mapSize.width = 1024, g.shadow.mapSize.height = 1024, r.add(g);
    const V = 10;
    g.shadow.camera.left = -10, g.shadow.camera.right = V, g.shadow.camera.top = V, g.shadow.camera.bottom = -10, g.shadow.camera.far = 1e3;
    const P = new ne(16777215, 0.5);
    P.color.setHSL(11, 43, 96), P.position.set(-10, 0, 30), r.add(P), u.derive(() => {
      (n == null ? void 0 : n.val.length) && (r.remove(...n.oldVal), r.add(...n.rawVal), w());
    }), u.derive(() => {
      n.rawVal.forEach((T) => T.visible = l.solids.val), w();
    });
  }
  return o && u.derive(() => {
    (o == null ? void 0 : o.val.length) && (r.remove(...o.oldVal), r.add(...o.rawVal), w());
  }), i && ke({ drawingObj: i, gridObj: v, scene: r, camera: s, controls: d, gridSize: S, derivedDisplayScale: m, rendererElm: h.domElement, viewerRender: w }), O((M, g) => {
    h.setClearColor(g.background, 1), r.remove(v), v.geometry.dispose(), v.material.dispose(), v = oe(l.gridSize.rawVal), r.add(v), a.style.setProperty("--awatif-legend-color", g.legendMarker), w();
  }), a.__ctx = { scene: r, perspCamera: s, orthoCamera: c, controls: d, renderer: h, render: w, setActiveCamera: F, settings: l }, a;
}
function Ue(t, e) {
  return u.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const i = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || o.size === 0) return i;
    let n = 0;
    o.forEach((d) => {
      for (let l = 0; l < 3; l++) n = Math.max(n, Math.abs(d[l]));
    });
    let a = 1;
    if (i.length > 1) {
      const d = [1 / 0, 1 / 0, 1 / 0], l = [-1 / 0, -1 / 0, -1 / 0];
      for (const m of i) for (let f = 0; f < 3; f++) d[f] = Math.min(d[f], m[f]), l[f] = Math.max(l[f], m[f]);
      a = Math.max(l[0] - d[0], l[1] - d[1], l[2] - d[2], 1);
    }
    const r = 0.05, s = 0.1;
    if (n < 1e-12) return i;
    let c = a * r / n;
    const p = e.displayScale.val;
    return p !== 0 && (c *= p > 0 ? p : -1 / p), n * c > a * s && (c = a * s / n), i.map((d, l) => {
      var _a2;
      const m = ((_a2 = o.get(l)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return d.map((f, v) => f + m[v] * c);
    });
  });
}
function Qe(t, e) {
  const i = u.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), u.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), s = (h, d) => {
      h == null ? void 0 : h.forEach((l, m) => {
        const f = t.elements.val[m];
        if (f) for (let v = 0; v < f.length; v++) d.set(f[v], [l[v] ?? l[0]]);
      });
    };
    s((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), s((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), s((_f = (_e2 = t.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, r);
    const c = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [r, 0], displacementX: [(_h = (_g = t.deformOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.deformations, 0], displacementY: [(_j = (_i = t.deformOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.deformations, 1], displacementZ: [(_l = (_k = t.deformOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.deformations, 2] }, p = [];
    t.nodes.val.forEach((h, d) => {
      const l = c[e.shellResults.val];
      if (!l || !l[0] || typeof l[0].has != "function") return;
      if (!l[0].has(d)) {
        p.push(0);
        return;
      }
      const m = l[0].get(d);
      p.push(m ? m[l[1]] ?? 0 : 0);
    }), i.val = p;
  }), i;
}
export {
  _e as a,
  De as b,
  et as g
};
