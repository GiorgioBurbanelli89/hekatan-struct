import { N as de, B as N, U as ue, F as q, G, d as ke, L as te, e as O, D as J, b as K, r as H, y as We, c as $e, V as Z, w as ee, x as D, X as ge, k as Le, a as ne, f as $, h as he, Y as pe, l as De, j as He, Z as Ue, _ as Ge, $ as ze, a0 as le, a1 as qe, a2 as Ke, a3 as Qe, a4 as Oe, a5 as Je, n as Pe, a6 as Te, q as je, s as et, t as tt, W as nt, u as ot, z as Me, A as st, v as Ie, O as at } from "./Text-CRP5ss3E.js";
import { v as S, P as it, g as j, o as me } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function rt(e, t, i) {
  const o = document.createElement("div"), n = new it({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.deformScale, "val", { label: "Deform scale XY", min: 0.1, max: 5e3, step: 0.1 }), n.addBinding(e.deformScaleZ, "val", { label: "Deform scale Z", min: 0.01, max: 10, step: 0.01 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
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
  return r.addBinding(l, "enableX", { label: "Cortar X" }).on("change", c), r.addBinding(l, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X" }).on("change", c), r.addBinding(l, "invertX", { label: "  inv X" }).on("change", c), r.addBinding(l, "enableY", { label: "Cortar Y" }).on("change", c), r.addBinding(l, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y" }).on("change", c), r.addBinding(l, "invertY", { label: "  inv Y" }).on("change", c), r.addBinding(l, "enableZ", { label: "Cortar Z" }).on("change", c), r.addBinding(l, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z" }).on("change", c), r.addBinding(l, "invertZ", { label: "  inv Z" }).on("change", c), o;
}
function lt(e) {
  return { gridSize: S.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: S.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: S.state((e == null ? void 0 : e.nodes) ?? true), elements: S.state((e == null ? void 0 : e.elements) ?? true), elemColumns: S.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: S.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: S.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: S.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: S.state((e == null ? void 0 : e.orientations) ?? false), sections: S.state((e == null ? void 0 : e.sections) ?? true), secColumns: S.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: S.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: S.state((e == null ? void 0 : e.secFloor) ?? -1), supports: S.state((e == null ? void 0 : e.supports) ?? true), loads: S.state((e == null ? void 0 : e.loads) ?? false), deformedShape: S.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: S.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: S.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: S.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: S.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: S.state((e == null ? void 0 : e.flipAxes) ?? false), solids: S.state((e == null ? void 0 : e.solids) ?? true), custom3D: S.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: S.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: S.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: S.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function ct(e, t, i) {
  const o = j(), n = new de(new N(), new ue({ color: o.nodePoint }));
  return me((r, l) => {
    n.material.color.setHex(l.nodePoint);
  }), n.frustumCulled = false, S.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new q(t.val.flat(), 3));
  }), S.derive(() => {
    i.val;
    const r = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = r * i.rawVal);
  }), S.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function dt(e, t, i) {
  const o = j(), n = new G(), r = new ke(new N(), new te({ color: o.elementLine }));
  me((P, z) => {
    r.material.color.setHex(z.elementLine);
  }), r.frustumCulled = false, n.add(r);
  const l = new O({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: J, depthWrite: false }), c = new K(new N(), l);
  c.frustumCulled = false, n.add(c);
  let d = new H(o.shellWall), b = new H(o.shellSlab), f = new H(o.shellTri);
  me((P, z) => {
    d = new H(z.shellWall), b = new H(z.shellSlab), f = new H(z.shellTri), l.opacity = z.shellOpacity, l.needsUpdate = true;
  });
  function F(P, z) {
    const A = Math.abs(z[0] - P[0]), L = Math.abs(z[1] - P[1]), p = Math.abs(z[2] - P[2]);
    return p > A && p > L || L > A && L > p;
  }
  return S.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const P = t.elemColumns.rawVal, z = t.elemBeams.rawVal, A = i.val, L = ((_a = e.elements) == null ? void 0 : _a.val) || [], p = L.filter((Y) => {
      if (Y.length !== 2) return true;
      const x = A[Y[0]], M = A[Y[1]];
      if (!x || !M) return true;
      const m = F(x, M);
      return !(m && !P || !m && !z);
    }).map((Y) => ut(Y).map((x) => [...A[x[0]], ...A[x[1]]]).flat()).flat();
    r.geometry.setAttribute("position", new q(p, 3));
    const I = [], B = [];
    function C(Y, x, M, m) {
      const a = [x[0] - Y[0], x[1] - Y[1], x[2] - Y[2]], u = [m[0] - Y[0], m[1] - Y[1], m[2] - Y[2]], w = a[1] * u[2] - a[2] * u[1], s = a[2] * u[0] - a[0] * u[2], h = a[0] * u[1] - a[1] * u[0], g = Math.sqrt(w * w + s * s + h * h);
      return g < 1e-12 ? false : Math.abs(h / g) < 0.5;
    }
    for (const Y of L) if (Y.length === 3) {
      const [x, M, m] = Y;
      if (A[x] && A[M] && A[m]) {
        I.push(...A[x], ...A[M], ...A[m]);
        for (let a = 0; a < 3; a++) B.push(f.r, f.g, f.b);
      }
    } else if (Y.length === 4) {
      const [x, M, m, a] = Y;
      if (A[x] && A[M] && A[m] && A[a]) {
        const u = C(A[x], A[M], A[m], A[a]) ? d : b;
        I.push(...A[x], ...A[M], ...A[m]), I.push(...A[x], ...A[m], ...A[a]);
        for (let w = 0; w < 6; w++) B.push(u.r, u.g, u.b);
      }
    }
    I.length > 0 ? (c.geometry.dispose(), c.geometry = new N(), c.geometry.setAttribute("position", new q(I, 3)), c.geometry.setAttribute("color", new q(B, 3)), c.geometry.computeVertexNormals(), c.visible = true) : c.visible = false;
  }), S.derive(() => {
    n.visible = t.elements.val;
  }), n;
}
function ut(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let i = 0; i < e.length; i++) t.push([e[i], e[(i + 1) % e.length]]);
  return t;
}
function Be(e) {
  const t = j(), i = new We(e, 20, t.grid, t.grid);
  return i.position.set(0.5 * e, 0.5 * e, 0), i.rotateX(Math.PI / 2), i;
}
function ht(e, t, i, o) {
  const n = new G(), r = new $e(0.5, 0.5, 0.5), l = new O({ color: 10166822 });
  return S.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const c = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((d, b) => {
      const f = i.val[b];
      if (!f) return;
      const F = new K(r, l);
      F.position.set(...f);
      const P = c * o.rawVal;
      F.scale.set(P, P, P), n.add(F);
    });
  }), S.derive(() => {
    if (o.val, !t.supports.rawVal) return;
    const d = 0.05 * t.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((b) => b.scale.set(d, d, d));
  }), S.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function pt(e, t, i, o) {
  const n = new G();
  n.name = "loadsGroup";
  function r(l) {
    if (l.length < 2) return 0.12 * t.gridSize.rawVal;
    const c = [1 / 0, 1 / 0, 1 / 0], d = [-1 / 0, -1 / 0, -1 / 0];
    for (const f of l) for (let F = 0; F < 3; F++) c[F] = Math.min(c[F], f[F]), d[F] = Math.max(d[F], f[F]);
    return 0.08 * Math.max(d[0] - c[0], d[1] - c[1], d[2] - c[2], 0.1);
  }
  return S.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const l = i.val, c = r(l);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((d, b) => {
      const f = l[b];
      if (!f) return;
      const F = new Z(...d.slice(0, 3));
      if (F.lengthSq() < 1e-30) return;
      F.normalize();
      const P = new ee(F, new Z(...f), 1, 15637248, 0.3, 0.3), z = c * o.rawVal;
      P.scale.set(z, z, z), n.add(P);
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
  const o = new G();
  return S.derive(() => {
    if (!e.nodesIndexes.val) return;
    o.children.forEach((r) => r.dispose()), o.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((r, l) => {
      const c = new D(`${l}`);
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
  const n = new G();
  return S.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const r = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((l, c) => {
      const d = new D(`${c}`, void 0, "#001219");
      d.position.set(...wt(l.map((b) => i.rawVal[b]))), d.updateScale(r * o.rawVal), n.add(d);
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
  const i = new G(), o = 0.05 * e * 1, n = j(), r = new D("X", "red", "transparent"), l = new D(t ? "Z" : "Y", "green", "transparent"), c = new D(t ? "Y" : "Z", "blue", "transparent"), d = new ee(new Z(1, 0, 0), new Z(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), b = new ee(new Z(0, 1, 0), new Z(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), f = new ee(new Z(0, 0, 1), new Z(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return r.position.set(1.3 * o, 0, 0), l.position.set(0, 1.3 * o, 0), c.position.set(0, 0, 1.3 * o), r.updateScale(0.4 * o), l.updateScale(0.4 * o), c.updateScale(0.4 * o), d.scale.set(o, o, o), b.scale.set(o, o, o), f.scale.set(o, o, o), i.add(d, b, f, r, l, c), i;
}
function Ae(e, t) {
  const i = new Z(...e), n = new Z(...t).clone().sub(i), r = n.length(), l = n.dot(new Z(1, 0, 0)) / r, c = n.dot(new Z(0, 1, 0)) / r, d = n.dot(new Z(0, 0, 1)) / r, b = Math.sqrt(l ** 2 + c ** 2);
  let f = new ge().fromArray([[l, c, d], [-c / b, l / b, 0], [-l * d / b, -c * d / b, b]].flat());
  return d === 1 && (f = new ge().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), d === -1 && (f = new ge().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Le().setFromMatrix3(f);
}
function Se(e, t) {
  return e == null ? void 0 : e.map((i, o) => (9 * i + t[o]) / 10);
}
function se(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), i = e.length;
  return [t[0] / i, t[1] / i, t[2] / i];
}
function xt(e, t, i) {
  const o = se([t, i]), n = se([e, i]), r = se([e, t]), l = new Z(...o).sub(new Z(...n)).normalize(), c = new Z(...i).sub(new Z(...r)).normalize(), d = l.clone().cross(c).normalize(), b = d.clone().cross(l).normalize();
  return new Le().makeBasis(l, b, d);
}
function bt(e, t, i, o) {
  const n = new G(), r = new N(), l = new te({ vertexColors: true }), c = [0, 0, 0], d = [1, 0, 0], b = [0, 1, 0], f = [0, 0, 1];
  r.setAttribute("position", new q([...c, ...d, ...c, ...b, ...c, ...f], 3));
  const F = [255, 0, 0], P = [0, 255, 0], z = [0, 0, 255];
  return r.setAttribute("color", new q([...F, ...F, ...P, ...P, ...z, ...z], 3)), S.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((A) => {
      const L = new ke(r, l), p = i.rawVal[A[0]], I = i.rawVal[A[1]];
      if (A.length === 2 && (L.position.set(...Se(p, I)), L.rotation.setFromRotationMatrix(Ae(p, I))), A.length === 3) {
        const Y = i.rawVal[A[2]];
        L.position.set(...se([p, I, Y])), L.rotation.setFromRotationMatrix(xt(p, I, Y));
      }
      const C = 0.05 * t.gridSize.rawVal * 0.75 * o.rawVal;
      L.scale.set(C, C, C), n.add(L);
    }));
  }), S.derive(() => {
    if (o.val, !t.orientations.rawVal) return;
    const L = 0.05 * t.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((p) => p.scale.set(L, L, L));
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
function Mt(e, t, i, o) {
  const n = new G();
  function r(x, M) {
    const m = x / 2, a = M / 2, u = new Float32Array([0, -m, -a, 0, m, -a, 0, m, a, 0, -m, -a, 0, m, a, 0, -m, a]), w = new N();
    w.setAttribute("position", new $(u, 3));
    const s = new Float32Array([0, -m, -a, 0, m, -a, 0, m, a, 0, -m, a, 0, -m, -a]), h = new N();
    return h.setAttribute("position", new $(s, 3)), { fill: w, outline: h };
  }
  function l(x, M = 24) {
    const m = x / 2, a = new Float32Array(M * 9);
    for (let h = 0; h < M; h++) {
      const g = h / M * Math.PI * 2, y = (h + 1) / M * Math.PI * 2;
      a[h * 9] = 0, a[h * 9 + 1] = 0, a[h * 9 + 2] = 0, a[h * 9 + 3] = 0, a[h * 9 + 4] = m * Math.cos(g), a[h * 9 + 5] = m * Math.sin(g), a[h * 9 + 6] = 0, a[h * 9 + 7] = m * Math.cos(y), a[h * 9 + 8] = m * Math.sin(y);
    }
    const u = new N();
    u.setAttribute("position", new $(a, 3));
    const w = new Float32Array((M + 1) * 3);
    for (let h = 0; h <= M; h++) {
      const g = h / M * Math.PI * 2;
      w[h * 3] = 0, w[h * 3 + 1] = m * Math.cos(g), w[h * 3 + 2] = m * Math.sin(g);
    }
    const s = new N();
    return s.setAttribute("position", new $(w, 3)), { fill: u, outline: s };
  }
  function c(x, M, m, a) {
    const u = m ?? M * 0.08, w = a ?? x * 0.07, s = x / 2, h = M / 2, g = h - u, y = w / 2, T = [];
    function v(X, k, _, W) {
      T.push(0, X, k, 0, _, k, 0, _, W, 0, X, k, 0, _, W, 0, X, W);
    }
    v(-s, -h, s, -g), v(-y, -g, y, g), v(-s, g, s, h);
    const V = new N();
    V.setAttribute("position", new $(new Float32Array(T), 3));
    const E = new Float32Array([0, -s, -h, 0, s, -h, 0, s, -g, 0, y, -g, 0, y, g, 0, s, g, 0, s, h, 0, -s, h, 0, -s, g, 0, -y, g, 0, -y, -g, 0, -s, -g, 0, -s, -h]), R = new N();
    return R.setAttribute("position", new $(E, 3)), { fill: V, outline: R };
  }
  function d(x, M, m) {
    const a = x / 2, u = M / 2, w = a - m, s = u - m, h = [];
    function g(V, E, R, X) {
      h.push(0, V, E, 0, R, E, 0, R, X, 0, V, E, 0, R, X, 0, V, X);
    }
    g(-a, -u, a, -s), g(-a, s, a, u), g(-a, -s, -w, s), g(w, -s, a, s);
    const y = new N();
    y.setAttribute("position", new $(new Float32Array(h), 3));
    const T = new Float32Array([0, -a, -u, 0, a, -u, 0, a, -u, 0, a, u, 0, a, u, 0, -a, u, 0, -a, u, 0, -a, -u, 0, -w, -s, 0, w, -s, 0, w, -s, 0, w, s, 0, w, s, 0, -w, s, 0, -w, s, 0, -w, -s]), v = new N();
    return v.setAttribute("position", new $(T, 3)), { fill: y, outline: v };
  }
  function b(x, M, m) {
    const a = x / 2, u = M / 2, w = a - m, s = u - m, h = new N(), g = new Float32Array([0, -w, -s, 0, w, -s, 0, w, s, 0, -w, -s, 0, w, s, 0, -w, s]);
    h.setAttribute("position", new $(g, 3));
    const y = [];
    function T(R, X, k, _) {
      y.push(0, R, X, 0, k, X, 0, k, _, 0, R, X, 0, k, _, 0, R, _);
    }
    T(-a, -u, a, -s), T(-a, s, a, u), T(-a, -s, -w, s), T(w, -s, a, s);
    const v = new N();
    v.setAttribute("position", new $(new Float32Array(y), 3));
    const V = new Float32Array([0, -a, -u, 0, a, -u, 0, a, -u, 0, a, u, 0, a, u, 0, -a, u, 0, -a, u, 0, -a, -u, 0, -w, -s, 0, w, -s, 0, w, -s, 0, w, s, 0, w, s, 0, -w, s, 0, -w, s, 0, -w, -s]), E = new N();
    return E.setAttribute("position", new $(V, 3)), { concFill: h, steelFillGeom: v, outline: E };
  }
  function f(x, M, m) {
    const a = [], u = [[0, -x / 2, -M / 2], [0, -x / 2 + m, -M / 2], [0, -x / 2 + m, M / 2 - m], [0, x / 2, M / 2 - m], [0, x / 2, M / 2], [0, -x / 2, M / 2]], w = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const y of w) a.push(...u[y]);
    const s = new N();
    s.setAttribute("position", new $(new Float32Array(a), 3));
    const h = [];
    for (let y = 0; y < u.length; y++) {
      const T = (y + 1) % u.length;
      h.push(...u[y], ...u[T]);
    }
    const g = new N();
    return g.setAttribute("position", new $(new Float32Array(h), 3)), { fill: s, outline: g };
  }
  function F(x, M, m, a) {
    const u = a / 2, w = [], s = [[0, -x - u, -M / 2], [0, -m - u, -M / 2], [0, -m - u, M / 2 - m], [0, -u, M / 2 - m], [0, -u, M / 2], [0, -x - u, M / 2]], h = [[0, u, -M / 2], [0, u + m, -M / 2], [0, u + m, M / 2 - m], [0, x + u, M / 2 - m], [0, x + u, M / 2], [0, u, M / 2]], g = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const V of g) w.push(...s[V]);
    for (const V of g) w.push(...h[V]);
    const y = new N();
    y.setAttribute("position", new $(new Float32Array(w), 3));
    const T = [];
    for (const V of [s, h]) for (let E = 0; E < V.length; E++) {
      const R = (E + 1) % V.length;
      T.push(...V[E], ...V[R]);
    }
    const v = new N();
    return v.setAttribute("position", new $(new Float32Array(T), 3)), { fill: y, outline: v };
  }
  function P(x, M, m, a) {
    const u = M / 2, w = x, s = [[0, -w, -u], [0, -w, -u + m], [0, -a, -u + m], [0, -a, u - m], [0, -w, u - m], [0, -w, u], [0, 0, u], [0, 0, -u]], h = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], g = [];
    for (const V of h) g.push(...s[V]);
    const y = new N();
    y.setAttribute("position", new $(new Float32Array(g), 3));
    const T = [];
    for (let V = 0; V < s.length; V++) {
      const E = (V + 1) % s.length;
      T.push(...s[V], ...s[E]);
    }
    const v = new N();
    return v.setAttribute("position", new $(new Float32Array(T), 3)), { fill: y, outline: v };
  }
  function z(x, M, m, a, u) {
    const w = M / 2, s = u / 2, h = [], g = [[0, -x, -w], [0, -x, -w + m], [0, -s - a, -w + m], [0, -s - a, w - m], [0, -x, w - m], [0, -x, w], [0, -s, w], [0, -s, -w]], y = g.map((R) => [R[0], -R[1], R[2]]), T = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const R of T) h.push(...g[R]);
    for (const R of T) h.push(...y[R]);
    const v = new N();
    v.setAttribute("position", new $(new Float32Array(h), 3));
    const V = [];
    for (const R of [g, y]) for (let X = 0; X < R.length; X++) {
      const k = (X + 1) % R.length;
      V.push(...R[X], ...R[k]);
    }
    const E = new N();
    return E.setAttribute("position", new $(new Float32Array(V), 3)), { fill: v, outline: E };
  }
  function A(x, M, m, a) {
    const u = x / 2, w = M / 2, s = a / 2, h = [[0, -s, -w], [0, s, -w], [0, s, w - m], [0, u, w - m], [0, u, w], [0, -u, w], [0, -u, w - m], [0, -s, w - m]], g = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], y = [];
    for (const E of g) y.push(...h[E]);
    const T = new N();
    T.setAttribute("position", new $(new Float32Array(y), 3));
    const v = [];
    for (let E = 0; E < h.length; E++) {
      const R = (E + 1) % h.length;
      v.push(...h[E], ...h[R]);
    }
    const V = new N();
    return V.setAttribute("position", new $(new Float32Array(v), 3)), { fill: T, outline: V };
  }
  function L(x, M, m = 24) {
    const a = x / 2, u = a - M, w = [];
    for (let y = 0; y < m; y++) {
      const T = y / m * Math.PI * 2, v = (y + 1) / m * Math.PI * 2, V = Math.cos(T), E = Math.sin(T), R = Math.cos(v), X = Math.sin(v);
      w.push(0, a * V, a * E, 0, a * R, a * X, 0, u * R, u * X), w.push(0, a * V, a * E, 0, u * R, u * X, 0, u * V, u * E);
    }
    const s = new N();
    s.setAttribute("position", new $(new Float32Array(w), 3));
    const h = [];
    for (let y = 0; y < m; y++) {
      const T = y / m * Math.PI * 2, v = (y + 1) / m * Math.PI * 2;
      h.push(0, a * Math.cos(T), a * Math.sin(T), 0, a * Math.cos(v), a * Math.sin(v)), h.push(0, u * Math.cos(T), u * Math.sin(T), 0, u * Math.cos(v), u * Math.sin(v));
    }
    const g = new N();
    return g.setAttribute("position", new $(new Float32Array(h), 3)), { fill: s, outline: g };
  }
  const p = new O({ color: 52479, transparent: true, opacity: 0.35, side: J, depthWrite: false }), I = new te({ color: 52479 }), B = new O({ color: 16750848, transparent: true, opacity: 0.4, side: J, depthWrite: false }), C = new te({ color: 16750848 });
  function Y(x, M) {
    const m = Math.abs(M[0] - x[0]), a = Math.abs(M[1] - x[1]), u = Math.abs(M[2] - x[2]);
    return u > m && u > a || a > m && a > u;
  }
  return S.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const x = t.secColumns.rawVal, M = t.secBeams.rawVal;
    if (!x && !M) {
      n.children.forEach((s) => {
        s instanceof D && s.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((s) => {
      s instanceof D && s.dispose();
    }), n.clear();
    const m = (_a = e.elements) == null ? void 0 : _a.val, a = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!m || !a) return;
    const u = a.sectionShapes, w = t.secFloor.rawVal;
    m.forEach((s, h) => {
      if (s.length !== 2) return;
      const g = i.rawVal[s[0]], y = i.rawVal[s[1]];
      if (!g || !y) return;
      const T = Y(g, y);
      if (T && !x || !T && !M) return;
      if (w >= 0) {
        const X = Math.min(g[1], y[1]);
        Math.max(g[1], y[1]);
        const k = t.gridSize.rawVal || 3;
        if (Math.floor(X / k + 0.01) !== w) return;
      }
      const v = u == null ? void 0 : u.get(h);
      if (!v) return;
      const V = [(g[0] + y[0]) / 2, (g[1] + y[1]) / 2, (g[2] + y[2]) / 2], E = Ae(g, y);
      if (v.type === "CFT") {
        const X = b(v.b, v.h, v.tw ?? v.b * 0.05), k = new K(X.concFill, p);
        k.position.set(...V), k.rotation.setFromRotationMatrix(E), n.add(k);
        const _ = new K(X.steelFillGeom, B);
        _.position.set(...V), _.rotation.setFromRotationMatrix(E), n.add(_);
        const W = new ne(X.outline, C);
        W.position.set(...V), W.rotation.setFromRotationMatrix(E), n.add(W);
      } else {
        let X, k, _;
        switch (v.type) {
          case "rect":
            X = r(v.b, v.h), k = p, _ = I;
            break;
          case "circ":
            X = l(v.d), k = p, _ = I;
            break;
          case "I":
            X = c(v.b, v.h, v.tf, v.tw), k = B, _ = C;
            break;
          case "HSS":
            X = d(v.b, v.h, v.tw ?? v.b * 0.05), k = B, _ = C;
            break;
          case "CFT":
            X = b(v.b, v.h, v.tw ?? v.b * 0.05), k = B, _ = C;
            break;
          case "L":
            X = f(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3), k = B, _ = C;
            break;
          case "2L":
            X = F(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3, v.dis ?? 0.01), k = B, _ = C;
            break;
          case "C":
          case "coldC":
            X = P(v.b, v.h, v.tf ?? v.t ?? 3e-3, v.tw ?? v.t ?? 3e-3), k = B, _ = C;
            break;
          case "2C":
            X = z(v.b, v.h, v.tf ?? 5e-3, v.tw ?? 5e-3, v.dis ?? 0.01), k = B, _ = C;
            break;
          case "T":
            X = A(v.b, v.h, v.tf ?? 0.01, v.tw ?? 6e-3), k = B, _ = C;
            break;
          case "pipe":
            X = L(v.d, v.tw ?? v.d * 0.05), k = B, _ = C;
            break;
          default:
            return;
        }
        const W = new K(X.fill, k);
        W.position.set(...V), W.rotation.setFromRotationMatrix(E), n.add(W);
        const U = new ne(X.outline, _);
        U.position.set(...V), U.rotation.setFromRotationMatrix(E), n.add(U);
      }
      const R = gt(v);
      if (R) {
        const k = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(v.type) ? "#ff9900" : "#00ccff", _ = new D(R, k, "transparent");
        _.position.set(V[0], V[1], V[2]);
        const W = 0.05 * t.gridSize.rawVal * 0.5;
        _.updateScale(W * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(_);
      }
    });
  }), o && S.derive(() => {
    if (o.val, !t.sections.rawVal) return;
    const x = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((M) => {
      M instanceof D && M.updateScale(x * o.rawVal);
    });
  }), S.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class ce extends G {
  constructor(t, i, o, n, r, l, c) {
    super();
    const d = new he().moveTo(0, 0).lineTo(0, l[1]).lineTo(o, l[1]).lineTo(o, 0).lineTo(0, 0), b = d.getPoints(), f = new N().setFromPoints(b);
    this.lines = new ne(f, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const F = new pe(d), P = new O({ color: l[1] > 0 ? 24435 : 11411474, side: J });
    this.mesh = new K(F, P), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new D(`${r[1].toFixed(4)}`), this.normalizedResult = l, this.textPosition = se([t, i]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Ee extends G {
  constructor(t, i, o, n, r, l, c) {
    super();
    const d = r[0] * o / (r[0] + r[1]), b = r[0] * r[1] > 0;
    if (this.text = new D(`${r[0].toFixed(4)}`), this.text2 = new D(`${(r[1] * -1).toFixed(4)}`), this.normalizedResult = l, this.textPosition = Se(t, i), this.text2Position = Se(i, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), b) {
      const f = new he().moveTo(0, 0).lineTo(0, l[0]).lineTo(d, 0).lineTo(0, 0), F = new he().moveTo(d, 0).lineTo(o, -l[1]).lineTo(o, 0).lineTo(d, 0), P = f.getPoints(), z = F.getPoints(), A = new N().setFromPoints(P), L = new N().setFromPoints(z), p = new te({ color: j().resultOutline });
      this.lines = new ne(A, p), this.lines2 = new ne(L, p), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), c && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const I = new pe(f), B = new pe(F), C = new O({ color: l[0] > 0 ? 24435 : 11411474, side: J }), Y = new O({ color: -l[1] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(I, C), this.mesh2 = new K(B, Y), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), c && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const f = new he().moveTo(0, 0).lineTo(0, l[0]).lineTo(o, -l[1]).lineTo(o, 0).lineTo(0, 0), F = f.getPoints(), P = new N().setFromPoints(F);
      this.lines = new ne(P, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const z = new pe(f), A = new O({ color: l[0] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(z, A), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var _e = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(_e || {});
function yt(e, t, i, o) {
  const n = new G(), r = { normals: ce, shearsY: ce, shearsZ: ce, torsions: ce, bendingsY: Ee, bendingsZ: Ee };
  return S.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, i.val, t.frameResults.val == "none") return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const l = _e[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[l]) == null ? void 0 : _b.forEach((c, d) => {
      var _a2, _b2;
      const b = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[d]) ?? [0, 1], f = i.rawVal[b[0]], F = i.rawVal[b[1]], P = new Z(...F).distanceTo(new Z(...f)), z = Ft((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[l]), A = c == null ? void 0 : c.map((B) => B / (z === 0 ? 1 : z)), L = Ae(f, F), p = new r[l](f, F, P, L, c ?? [0, 0], A ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(l)), I = 0.05 * t.gridSize.rawVal;
      p.updateScale(I * o.rawVal), n.add(p);
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
class St extends G {
  constructor(t, i, o) {
    super();
    const n = i === Ve.reactions;
    o[0] && (this.xText1 = new D(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new D(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new D(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new D(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new D(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new D(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new ee(new Z(1, 0, 0), new Z(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new ee(new Z(0, 1, 0), new Z(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new ee(new Z(0, 0, 1), new Z(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
  const n = new G();
  return S.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const r = Ve[t.nodeResults.rawVal], l = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[r]) == null ? void 0 : _b.forEach((c, d) => {
      const b = new St(i.rawVal[d], r, c ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(l * o.rawVal), n.add(b);
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
  const b = new De(), f = new He(), F = new K(new Ue(r, r), new O({ side: J })), P = new de(new N(), new ue()), z = new de(new N(), new ue({ color: "gray" })), A = new de(new N(), new ue({ color: "orange", size: 0.8 }));
  i.add(A), P.geometry.setAttribute("position", new q(e.points.rawVal.flat(), 3)), P.geometry.computeBoundingSphere(), P.frustumCulled = false, z.frustumCulled = false, i.add(z), F.position.set(0.5 * r, 0.5 * r, 0), F.rotateX(Math.PI / 2), F.geometry.rotateX(Math.PI / 2), F.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), S.derive(() => {
    e.gridTarget && (Vt(t, { position: new Z(...e.gridTarget.val.position), quaternion: new Ge().setFromEuler(new ze(...e.gridTarget.val.rotation)) }, d), F.position.set(...e.gridTarget.val.position), F.quaternion.setFromEuler(new ze(...e.gridTarget.val.rotation)), F.updateMatrixWorld());
  }), S.derive(() => {
    P.geometry.setAttribute("position", new q(e.points.val.flat(), 3)), P.geometry.computeBoundingSphere();
  }), S.derive(() => {
    const C = 0.05 * r * 0.5 * l.val;
    z.material.size = C, b.params.Points.threshold = 0.4 * C;
  }), S.derive(() => {
    var _a;
    const C = e.points.val ?? [], x = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], M = [];
    for (const a of x) {
      const [u, w, s] = C[a];
      M.push(u, w, s);
    }
    const m = new N();
    m.setAttribute("position", new q(M, 3)), A.geometry.dispose(), A.geometry = m;
  });
  let L = false, p = 0;
  c.addEventListener("pointerdown", () => {
    L = true;
  }), c.addEventListener("pointerup", () => {
    L = false;
  }), c.addEventListener("pointermove", () => {
    L && p++;
  }), c.addEventListener("click", (C) => {
    if (p > 5) {
      p = 0;
      return;
    }
    p = 0, f.x = C.clientX / window.innerWidth * 2 - 1, f.y = -(C.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, o);
    const Y = b.intersectObject(F);
    if (Y.length) {
      let x = Y[0].point;
      (C.ctrlKey || C.metaKey) && (x = new Z(Math.round(Y[0].point.x), Math.round(Y[0].point.y), Math.round(Y[0].point.z))), e.points.val = [...e.points.rawVal, x.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), c.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), c.addEventListener("pointermove", (C) => {
    f.x = C.clientX / window.innerWidth * 2 - 1, f.y = -(C.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, o);
    const Y = b.intersectObject(F);
    if (z.geometry.deleteAttribute("position"), Y.length) {
      let x = Y[0].point;
      (C.ctrlKey || C.metaKey) && (x = new Z(Math.round(Y[0].point.x), Math.round(Y[0].point.y), Math.round(Y[0].point.z))), z.geometry.setAttribute("position", new q(x.toArray(), 3));
    }
    d();
  }), c.addEventListener("pointermove", (C) => {
    var _a;
    f.x = C.clientX / window.innerWidth * 2 - 1, f.y = -(C.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, o);
    let Y = false;
    const x = b.intersectObject(P), M = b.intersectObject(F);
    if (x.length && M.length) {
      const m = new Z(...e.points.rawVal[x[0].index]), a = new Z(...M[0].point), u = m.sub(a), w = (_a = M[0].face) == null ? void 0 : _a.normal;
      w.transformDirection(F.matrixWorld), Math.abs(u.dot(w)) < 1e-4 && (Y = true);
    }
    z.visible = !Y;
  });
  let I = false, B;
  c.addEventListener("pointermove", (C) => {
    var _a;
    if (!p) return;
    f.x = C.clientX / window.innerWidth * 2 - 1, f.y = -(C.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, o);
    let Y = false;
    const x = b.intersectObject(P), M = b.intersectObject(F);
    if (x.length && M.length) {
      const a = new Z(...e.points.rawVal[x[0].index]), u = new Z(...M[0].point), w = a.sub(u), s = (_a = M[0].face) == null ? void 0 : _a.normal;
      s.transformDirection(F.matrixWorld), Math.abs(w.dot(s)) < 1e-4 && (Y = true);
    }
    if (Y && p < 5 && (I = true, n.enabled = false, B = x[0].index), !I || p % 2 !== 0) return;
    const m = [...e.points.rawVal];
    if (B !== void 0) {
      let a = M[0].point;
      (C.ctrlKey || C.metaKey) && (a = new Z(Math.round(a.x), Math.round(a.y), Math.round(a.z))), m[B] = a.toArray();
    }
    e.points.val = m;
  }), c.addEventListener("pointerup", () => {
    n.enabled = true, I = false;
  }), c.addEventListener("contextmenu", (C) => {
    var _a;
    f.x = C.clientX / window.innerWidth * 2 - 1, f.y = -(C.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, o);
    let Y = false;
    const x = b.intersectObject(P), M = b.intersectObject(F);
    if (x.length && M.length) {
      const u = new Z(...e.points.rawVal[x[0].index]), w = new Z(...M[0].point), s = u.sub(w), h = (_a = M[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(F.matrixWorld), Math.abs(s.dot(h)) < 1e-4 && (Y = true);
    }
    if (!Y) return;
    const m = [...e.points.rawVal];
    if (m.splice(x[0].index, 1), e.points.val = m, !e.polylines) return;
    const a = e.polylines.rawVal.map((u) => u.filter((w) => w !== x[0].index)).map((u) => u.map((w) => w > x[0].index ? w - 1 : w)).filter((u) => u.length);
    a.push([]), e.polylines.val = a;
  });
}
function Vt(e, t, i) {
  const r = Math.round(14.999999999999998), l = { position: e.position.clone(), quaternion: e.quaternion.clone() }, c = setInterval(b, 1e3 / 30);
  let d = 0;
  function b() {
    d++;
    const f = d / r;
    e.position.lerpVectors(l.position, t.position, f), e.quaternion.slerpQuaternions(l.quaternion, t.quaternion, f), i && i(), d == r && clearInterval(c);
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
    this.map = ye[t] || ye.rainbow, this.n = i;
    const o = 1 / this.n, n = new H(), r = new H();
    this.lut.length = 0, this.lut.push(new H(this.map[0][1]));
    for (let l = 1; l < i; l++) {
      const c = l * o;
      for (let d = 0; d < this.map.length - 1; d++) if (c > this.map[d][0] && c <= this.map[d + 1][0]) {
        const b = this.map[d][0], f = this.map[d + 1][0];
        n.setHex(this.map[d][1], le), r.setHex(this.map[d + 1][1], le);
        const F = new H().lerpColors(n, r, (c - b) / (f - b));
        this.lut.push(F);
      }
    }
    return this.lut.push(new H(this.map[this.map.length - 1][1])), this;
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
    return ye[t] = i, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const i = t.getContext("2d", { alpha: false }), o = i.getImageData(0, 0, 1, this.n), n = o.data;
    let r = 0;
    const l = 1 / this.n, c = new H(), d = new H(), b = new H();
    for (let f = 1; f >= 0; f -= l) for (let F = this.map.length - 1; F >= 0; F--) if (f < this.map[F][0] && f >= this.map[F - 1][0]) {
      const P = this.map[F - 1][0], z = this.map[F][0];
      c.setHex(this.map[F - 1][1], le), d.setHex(this.map[F][1], le), b.lerpColors(c, d, (f - P) / (z - P)), n[r * 4] = Math.round(b.r * 255), n[r * 4 + 1] = Math.round(b.g * 255), n[r * 4 + 2] = Math.round(b.b * 255), n[r * 4 + 3] = 255, r += 1;
    }
    return i.putImageData(o, 0, 0), t;
  }
}
const ye = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, oe = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Yt(e) {
  e = Math.max(0, Math.min(1, e));
  for (let i = 0; i < oe.length - 1; i++) {
    const [o, n, r, l] = oe[i], [c, d, b, f] = oe[i + 1];
    if (e <= c) {
      const F = (e - o) / (c - o);
      return [n + (d - n) * F, r + (b - r) * F, l + (f - l) * F];
    }
  }
  const t = oe[oe.length - 1];
  return [t[1], t[2], t[3]];
}
function Xt() {
  const t = new Uint8Array(1024);
  for (let o = 0; o < 256; o++) {
    const n = o / 255, [r, l, c] = Yt(n);
    t[o * 4 + 0] = r, t[o * 4 + 1] = l, t[o * 4 + 2] = c, t[o * 4 + 3] = 255;
  }
  const i = new Oe(t, 256, 1, Je);
  return i.minFilter = Pe, i.magFilter = Pe, i.wrapS = Te, i.wrapT = Te, i.needsUpdate = true, i;
}
function zt(e, t, i) {
  new Ne();
  const o = Xt(), n = new Ke({ uniforms: { cmap: { value: o }, ambient: { value: 0.95 } }, vertexShader: `
      attribute float scalar;
      varying float vScalar;
      void main() {
        vScalar = scalar;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `, fragmentShader: `
      uniform sampler2D cmap;
      uniform float ambient;
      varying float vScalar;
      void main() {
        // Si NaN (vScalar < -0.5 sentinel), gris neutro
        if (vScalar < -0.5) {
          gl_FragColor = vec4(0.5, 0.5, 0.5, 1.0);
          return;
        }
        vec3 color = texture2D(cmap, vec2(clamp(vScalar, 0.0, 1.0), 0.5)).rgb;
        gl_FragColor = vec4(color * ambient, 1.0);
      }
    `, side: J, transparent: false }), r = new K(new N(), n);
  return r.renderOrder = -1, r.frustumCulled = false, S.derive(() => {
    r.geometry.setAttribute("position", new q(e.val.flat(), 3));
    const l = [];
    for (const p of t.val) p.length === 3 ? l.push(p[0], p[1], p[2]) : p.length === 4 && (l.push(p[0], p[1], p[2]), l.push(p[0], p[2], p[3]));
    r.geometry.setIndex(new Qe(l, 1));
    const c = i.val.filter((p) => Number.isFinite(p));
    let d, b;
    const f = Ye.val;
    if (f ? (b = f[0], d = f[1]) : (d = c.length ? Math.max(...c) : 1, b = c.length ? Math.min(...c) : 0, b >= 0 && d > 0 && (b = 0)), d === b) {
      const p = Math.max(Math.abs(d) * 1e-6, 1e-9);
      d += p, b -= p;
    }
    const F = f && f[0] > f[1], P = Math.min(b, d), z = Math.max(b, d), A = z - P, L = new Float32Array(i.val.length);
    for (let p = 0; p < i.val.length; p++) {
      const I = i.val[p];
      if (!Number.isFinite(I)) {
        L[p] = -1;
        continue;
      }
      const C = ((F ? z + P - I : I) - P) / A;
      L[p] = Math.max(0, Math.min(1, C));
    }
    r.geometry.setAttribute("scalar", new $(L, 1));
  }), r;
}
function Pt(e, t, i, o) {
  const n = zt(i, e.elements, o);
  return S.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const Tt = 6, Fe = 10, It = 0.012;
function Bt(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Et(e, t, i, o) {
  if (!i && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && i) {
    const r = i[e];
    if (r && r.has(t)) return r.get(t);
  }
  return null;
}
function Zt(e, t, i, o) {
  const n = new G(), r = new Ne();
  r.setColorMap("rainbow");
  const l = new H(), c = S.state([]);
  return S.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const d = i.val, b = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], f = Bt(t.frameResults.val);
    if (n.children.forEach((h) => {
      h.geometry && h.geometry.dispose(), h.material && h.material.dispose();
    }), n.clear(), !f || b.length === 0 || d.length === 0) {
      c.val = [];
      return;
    }
    const F = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, P = (_c = e.deformOutputs) == null ? void 0 : _c.val, z = [], A = [];
    for (let h = 0; h < b.length; h++) {
      if (b[h].length !== 2) continue;
      const y = Et(f, h, F, P);
      y && (z.push(y[0], y[1]), A.push({ idx: h, vals: y }));
    }
    if (z.length === 0) {
      c.val = [];
      return;
    }
    const L = Math.min(...z), p = Math.max(...z);
    r.setMin(L), r.setMax(p), c.val = z;
    const I = [1 / 0, 1 / 0, 1 / 0], B = [-1 / 0, -1 / 0, -1 / 0];
    for (const h of d) for (let g = 0; g < 3; g++) I[g] = Math.min(I[g], h[g]), B[g] = Math.max(B[g], h[g]);
    const Y = Math.max(B[0] - I[0], B[1] - I[1], B[2] - I[2], 1) * It, x = [], M = [], m = [];
    let a = 0;
    for (const { idx: h, vals: g } of A) {
      const y = b[h], T = d[y[0]], v = d[y[1]];
      if (!T || !v) continue;
      const V = new Z(v[0] - T[0], v[1] - T[1], v[2] - T[2]), E = V.length();
      if (E < 1e-10) continue;
      V.normalize();
      const R = Math.abs(V.y) < 0.99 ? new Z(0, 1, 0) : new Z(1, 0, 0), X = new Z().crossVectors(V, R).normalize(), k = new Z().crossVectors(V, X).normalize(), _ = Fe + 1, W = Tt;
      for (let U = 0; U < _; U++) {
        const Q = U / Fe, ae = T[0] + V.x * E * Q, ie = T[1] + V.y * E * Q, fe = T[2] + V.z * E * Q, we = g[0] + (g[1] - g[0]) * Q, re = r.getColor(we) ?? new H(0, 0, 0);
        l.copy(re).convertSRGBToLinear();
        for (let ve = 0; ve < W; ve++) {
          const Xe = ve / W * Math.PI * 2, xe = Math.cos(Xe), be = Math.sin(Xe);
          x.push(ae + (X.x * xe + k.x * be) * Y, ie + (X.y * xe + k.y * be) * Y, fe + (X.z * xe + k.z * be) * Y), M.push(l.r, l.g, l.b);
        }
      }
      for (let U = 0; U < Fe; U++) for (let Q = 0; Q < W; Q++) {
        const ae = (Q + 1) % W, ie = a + U * W + Q, fe = a + U * W + ae, we = a + (U + 1) * W + Q, re = a + (U + 1) * W + ae;
        m.push(ie, fe, re), m.push(ie, re, we);
      }
      a += _ * W;
    }
    if (x.length === 0) return;
    const u = new N();
    u.setAttribute("position", new q(x, 3)), u.setAttribute("color", new q(M, 3)), u.setIndex(m), u.computeVertexNormals();
    const w = new O({ vertexColors: true, side: J }), s = new K(u, w);
    s.frustumCulled = false, n.add(s);
  }), n.__colorMapValues = c, n;
}
function Ze(e, t = 8) {
  const i = document.createElement("div");
  i.id = "legend";
  const o = document.createElement("div");
  o.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", i.appendChild(o), setTimeout(() => {
    S.derive(() => {
      o.textContent = Ce.val ? `[${Ce.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (d, b) => b / t).reverse();
  let r, l;
  n.forEach((d, b) => {
    r = document.createElement("div"), r.id = `marker-${b}`, r.className = "marker", r.style.marginTop = b == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, l = document.createElement("p"), l.id = `marker-text-${b}`, r.append(l), i.append(r);
  });
  const c = [];
  return i.querySelectorAll("p").forEach((d) => c.push(d)), setTimeout(() => {
    S.derive(() => {
      n.forEach((d, b) => {
        const f = c[b];
        f && (f.innerText = Rt(e.val, d).toString());
      });
    });
  }), i;
}
function Rt(e, t) {
  const i = Ye.val;
  if (i) return (i[0] + t * (i[1] - i[0])).toPrecision(3);
  const o = e.filter((l) => Number.isFinite(l));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const r = Math.max(...o);
  return n >= 0 && r > 0 && (n = 0), (n + t * (r - n)).toPrecision(3);
}
function qt({ mesh: e, settingsObj: t, drawingObj: i, objects3D: o, solids: n }) {
  at.DEFAULT_UP = new Z(0, 0, 1);
  const r = document.createElement("div"), l = new je(), c = new et(45, 1, 0.1, 2 * 1e6), d = new tt(-10, 10, 10, -10, -1e3, 2e6);
  let b = c;
  const f = new nt({ antialias: true });
  f.localClippingEnabled = true;
  const F = new ot(c, f.domElement), P = new Me(new Z(-1, 0, 0), 0), z = new Me(new Z(0, -1, 0), 0), A = new Me(new Z(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function L() {
    const s = window.__hekatanClip, h = [];
    s.enableX && (P.normal.set(s.invertX ? 1 : -1, 0, 0), P.constant = s.invertX ? -s.posX : s.posX, h.push(P)), s.enableY && (z.normal.set(0, s.invertY ? 1 : -1, 0), z.constant = s.invertY ? -s.posY : s.posY, h.push(z)), s.enableZ && (A.normal.set(0, 0, s.invertZ ? 1 : -1), A.constant = s.invertZ ? -s.posZ : s.posZ, h.push(A)), f.clippingPlanes = h, l.traverse((g) => {
      const y = g;
      if (y.material) {
        const T = Array.isArray(y.material) ? y.material : [y.material];
        for (const v of T) v.clippingPlanes = h, v.needsUpdate = true;
      }
    });
  }
  L(), window.__hekatanClipApply = L;
  const p = lt(t), I = S.derive(() => p.displayScale.val === 0 ? 1 : p.displayScale.val > 0 ? p.displayScale.val : -1 / p.displayScale.val), B = kt(e, p);
  let C = Be(p.gridSize.rawVal);
  r.appendChild(rt(p, e, n)), r.setAttribute("id", "viewer"), r.appendChild(f.domElement), f.setPixelRatio(window.devicePixelRatio);
  const Y = j();
  f.setClearColor(Y.background, 1);
  const x = p.gridSize.rawVal, M = x * 0.5 + x * 0.5 / Math.tan(45 * 0.5);
  c.position.set(0.5 * x, 0.8 * -M, 0.5 * x), F.target.set(0.5 * x, 0.5 * x, 0), F.minDistance = 1, F.maxDistance = M * 2.5, r.__settings = p, F.zoomSpeed = 1, F._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, F.update(), l.add(C, vt(p.gridSize.rawVal, p.flipAxes.rawVal)), new ResizeObserver((s) => {
    var _a, _b;
    for (const h of s) {
      const g = (_a = h.target) == null ? void 0 : _a.clientWidth, y = (_b = h.target) == null ? void 0 : _b.clientHeight;
      if (g === 0 || y === 0) continue;
      c.aspect = g / y, c.updateProjectionMatrix();
      const T = g / y, v = d.top;
      d.left = -v * T, d.right = v * T, d.updateProjectionMatrix(), f.setSize(g, y), a();
    }
  }).observe(r), F.addEventListener("change", a), S.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, p.displayScale.val, p.nodes.val, p.elements.val, p.elemColumns.val, p.elemBeams.val, p.nodesIndexes.val, p.elementsIndexes.val, p.orientations.val, p.sections.val, p.secColumns.val, p.secBeams.val, p.secFloor.val, p.supports.val, p.loads.val, p.deformedShape.val, p.nodeResults.val, p.frameResults.val, p.shellResults.val, setTimeout(a);
  });
  function a() {
    f.render(l, b);
  }
  function u(s) {
    b = s, F.object = s, F.update(), a();
  }
  if (e) {
    l.add(ct(p, B, I), dt(e, p, B), mt(p, B, I), ft(e, p, B, I), ht(e, p, B, I), pt(e, p, B, I), bt(e, p, B, I), Mt(e, p, B, I), Ct(e, p, B, I), yt(e, p, B, I));
    const s = Dt(e, p), h = Pt(e, p, B, s), g = Ze(s);
    l.add(h), r.appendChild(g);
    const y = Zt(e, p, B);
    l.add(y);
    const T = y.__colorMapValues, v = Ze(T);
    v.id = "frame-legend", r.appendChild(v), S.derive(() => {
      const V = p.shellResults.val != "none", E = p.frameResults.val.startsWith("contour:");
      g.hidden = !V, h.visible = V, v.hidden = !E;
    });
  }
  if (n) {
    const s = new st(16777215, 0.5);
    l.add(s);
    const h = new Ie(16777215, 0.5);
    h.position.set(30, 25, -10), h.shadow.mapSize.width = 1024, h.shadow.mapSize.height = 1024, l.add(h);
    const g = 10;
    h.shadow.camera.left = -g, h.shadow.camera.right = g, h.shadow.camera.top = g, h.shadow.camera.bottom = -g, h.shadow.camera.far = 1e3;
    const y = new Ie(16777215, 0.5);
    y.color.setHSL(11, 43, 96), y.position.set(-10, 0, 30), l.add(y), S.derive(() => {
      (n == null ? void 0 : n.val.length) && (l.remove(...n.oldVal), l.add(...n.rawVal), a());
    }), S.derive(() => {
      n.rawVal.forEach((T) => T.visible = p.solids.val), a();
    });
  }
  if (o) {
    const s = [], h = (y) => {
      var _a;
      return ((_a = y == null ? void 0 : y.userData) == null ? void 0 : _a.isCota) ? p.showCotas.val : p.custom3D.val;
    }, g = () => {
      for (const y of s) y.visible = h(y);
      a();
    };
    S.derive(() => {
      const y = o.val;
      s.length && (l.remove(...s), s.length = 0), y.length && (l.add(...y), s.push(...y), g()), a();
    }), S.derive(() => {
      p.custom3D.val, g();
    }), S.derive(() => {
      p.showCotas.val, g();
    });
  }
  i && At({ drawingObj: i, gridObj: C, scene: l, camera: c, controls: F, gridSize: x, derivedDisplayScale: I, rendererElm: f.domElement, viewerRender: a }), me((s, h) => {
    f.setClearColor(h.background, 1), l.remove(C), C.geometry.dispose(), C.material.dispose(), C = Be(p.gridSize.rawVal), l.add(C), r.style.setProperty("--awatif-legend-color", h.legendMarker), a();
  });
  const w = { scene: l, perspCamera: c, orthoCamera: d, get camera() {
    return b;
  }, controls: F, renderer: f, rendererElm: f.domElement, render: a, setActiveCamera: u, settings: p };
  return r.__ctx = w, r;
}
function kt(e, t) {
  return S.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const i = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || i.length === 0) return i;
    const n = t.deformScale.val, r = t.deformScale.val * t.deformScaleZ.val, l = Number.isFinite(n) ? n : 1, c = Number.isFinite(r) ? r : 1;
    return i.map((d, b) => {
      var _a2;
      const f = ((_a2 = o.get(b)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], F = Number.isFinite(f[0]) ? f[0] : 0, P = Number.isFinite(f[1]) ? f[1] : 0, z = Number.isFinite(f[2]) ? f[2] : 0;
      return [d[0] + F * l, d[1] + P * l, d[2] + z * c];
    });
  });
}
const Ye = S.state(null), Ce = S.state(""), Lt = S.state("kN"), _t = S.state("mm"), Nt = S.state("kN/m\xB2"), Wt = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Re = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, $t = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Dt(e, t) {
  const i = S.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), S.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), A = (E, R) => {
      E == null ? void 0 : E.forEach((X, k) => {
        const _ = e.elements.val[k];
        if (_) for (let W = 0; W < _.length; W++) R.set(_[W], [X[W] ?? X[0]]);
      });
    };
    A((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), A((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, r), A((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, l), A((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, c), A((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, d), A((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), A((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, f), A((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, F), A((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, P), A((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, z);
    const L = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, p = t.shellResults.val, I = L == null ? void 0 : L[p];
    Ye.val = Array.isArray(I) && I.length === 2 ? [I[0], I[1]] : null;
    const B = { bendingXX: [n, 0], bendingYY: [r, 0], bendingXY: [l, 0], membraneXX: [c, 0], membraneYY: [d, 0], membraneXY: [b, 0], tranverseShearX: [f, 0], tranverseShearY: [F, 0], vonMises: [P, 0], pressure: [z, 0], displacementX: [(_x = (_w = e.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = e.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = e.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, C = t.shellResults.val, Y = Lt.val, x = _t.val, M = C === "displacementX" || C === "displacementY" || C === "displacementZ", m = C === "bendingXX" || C === "bendingYY" || C === "bendingXY", a = C === "membraneXX" || C === "membraneYY" || C === "membraneXY", u = C === "vonMises" || C === "pressure", w = C === "tranverseShearX" || C === "tranverseShearY", s = (_C = t.solidResults) == null ? void 0 : _C.val, h = s === "vonMises" || s === "sigmaXX" || s === "sigmaYY" || s === "sigmaZZ" || s === "tauXY" || s === "tauYZ" || s === "tauXZ", g = s === "ux" || s === "uy" || s === "uz", y = Nt.val, T = h ? $t[y] : g || M ? Re[x] : m || a || u || w ? 1 / Wt[Y] : 1, v = h ? y : g || M ? x : m ? `${Y}\xB7m/m` : a ? `${Y}/m\xB2` : u ? `${Y}/m\xB2` : w ? `${Y}/m` : "";
    Ce.val = v;
    const V = [];
    e.nodes.val.forEach((E, R) => {
      const X = B[C];
      if (!X || !X[0] || typeof X[0].has != "function") return;
      if (!X[0].has(R)) {
        V.push(Number.NaN);
        return;
      }
      const k = X[0].get(R), _ = k ? k[X[1]] ?? 0 : 0;
      V.push(_ * T);
    }), i.val = V;
  }), i;
}
export {
  _t as a,
  zt as b,
  Lt as c,
  Ze as d,
  Nt as e,
  qt as g
};
