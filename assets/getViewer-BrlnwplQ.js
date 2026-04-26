import { N as ce, B as N, U as de, F as U, G as q, d as Ee, L as te, e as Q, D as J, b as K, r as D, y as Le, c as _e, V as Z, w as ee, x as H, X as be, k as Ze, a as ne, f as $, h as ue, Y as he, l as Ne, j as We, Z as $e, _ as De, $ as Xe, a0 as re, a1 as He, a2 as Ge, q as Ue, s as qe, t as Ke, W as Qe, u as Oe, z as Me, A as Je, v as ze, O as je } from "./Text-DyNVkyur.js";
import { v as S, P as et, g as j, o as pe } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function tt(e, t, c) {
  const o = document.createElement("div"), n = new et({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.deformScale, "val", { label: "Deform scale XY", min: 0.1, max: 5e3, step: 0.1 }), n.addBinding(e.deformScaleZ, "val", { label: "Deform scale Z", min: 0.01, max: 10, step: 0.01 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const u = n.addFolder({ title: "Analysis Inputs" });
    u.addBinding(e.supports, "val", { label: "Supports" }), u.addBinding(e.loads, "val", { label: "Loads" }), u.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), u.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const u = n.addFolder({ title: "Analysis Outputs" });
    u.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), u.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), u.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), u.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), u.addBinding(e.deformedShape, "val", { label: "Deformed shape" });
  }
  c && n.addBinding(e.solids, "val", { label: "Solids" });
  const a = n.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), r = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), l = () => {
    const u = window.__hekatanClipApply;
    typeof u == "function" && u();
  };
  return a.addBinding(r, "enableX", { label: "Cortar X" }).on("change", l), a.addBinding(r, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X" }).on("change", l), a.addBinding(r, "invertX", { label: "  inv X" }).on("change", l), a.addBinding(r, "enableY", { label: "Cortar Y" }).on("change", l), a.addBinding(r, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y" }).on("change", l), a.addBinding(r, "invertY", { label: "  inv Y" }).on("change", l), a.addBinding(r, "enableZ", { label: "Cortar Z" }).on("change", l), a.addBinding(r, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z" }).on("change", l), a.addBinding(r, "invertZ", { label: "  inv Z" }).on("change", l), o;
}
function nt(e) {
  return { gridSize: S.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: S.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: S.state((e == null ? void 0 : e.nodes) ?? true), elements: S.state((e == null ? void 0 : e.elements) ?? true), elemColumns: S.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: S.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: S.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: S.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: S.state((e == null ? void 0 : e.orientations) ?? false), sections: S.state((e == null ? void 0 : e.sections) ?? true), secColumns: S.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: S.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: S.state((e == null ? void 0 : e.secFloor) ?? -1), supports: S.state((e == null ? void 0 : e.supports) ?? true), loads: S.state((e == null ? void 0 : e.loads) ?? false), deformedShape: S.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: S.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: S.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: S.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: S.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: S.state((e == null ? void 0 : e.flipAxes) ?? false), solids: S.state((e == null ? void 0 : e.solids) ?? true), custom3D: S.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: S.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: S.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: S.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function ot(e, t, c) {
  const o = j(), n = new ce(new N(), new de({ color: o.nodePoint }));
  return pe((a, r) => {
    n.material.color.setHex(r.nodePoint);
  }), n.frustumCulled = false, S.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new U(t.val.flat(), 3));
  }), S.derive(() => {
    c.val;
    const a = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = a * c.rawVal);
  }), S.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function st(e, t, c) {
  const o = j(), n = new q(), a = new Ee(new N(), new te({ color: o.elementLine }));
  pe((P, z) => {
    a.material.color.setHex(z.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const r = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: J, depthWrite: false }), l = new K(new N(), r);
  l.frustumCulled = false, n.add(l);
  let u = new D(o.shellWall), x = new D(o.shellSlab), w = new D(o.shellTri);
  pe((P, z) => {
    u = new D(z.shellWall), x = new D(z.shellSlab), w = new D(z.shellTri), r.opacity = z.shellOpacity, r.needsUpdate = true;
  });
  function C(P, z) {
    const F = Math.abs(z[0] - P[0]), L = Math.abs(z[1] - P[1]), g = Math.abs(z[2] - P[2]);
    return g > F && g > L || L > F && L > g;
  }
  return S.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const P = t.elemColumns.rawVal, z = t.elemBeams.rawVal, F = c.val, L = ((_a = e.elements) == null ? void 0 : _a.val) || [], g = L.filter((V) => {
      if (V.length !== 2) return true;
      const v = F[V[0]], M = F[V[1]];
      if (!v || !M) return true;
      const p = C(v, M);
      return !(p && !P || !p && !z);
    }).map((V) => it(V).map((v) => [...F[v[0]], ...F[v[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new U(g, 3));
    const I = [], E = [];
    function Y(V, v, M, p) {
      const i = [v[0] - V[0], v[1] - V[1], v[2] - V[2]], d = [p[0] - V[0], p[1] - V[1], p[2] - V[2]], m = i[1] * d[2] - i[2] * d[1], s = i[2] * d[0] - i[0] * d[2], h = i[0] * d[1] - i[1] * d[0], b = Math.sqrt(m * m + s * s + h * h);
      return b < 1e-12 ? false : Math.abs(h / b) < 0.5;
    }
    for (const V of L) if (V.length === 3) {
      const [v, M, p] = V;
      if (F[v] && F[M] && F[p]) {
        I.push(...F[v], ...F[M], ...F[p]);
        for (let i = 0; i < 3; i++) E.push(w.r, w.g, w.b);
      }
    } else if (V.length === 4) {
      const [v, M, p, i] = V;
      if (F[v] && F[M] && F[p] && F[i]) {
        const d = Y(F[v], F[M], F[p], F[i]) ? u : x;
        I.push(...F[v], ...F[M], ...F[p]), I.push(...F[v], ...F[p], ...F[i]);
        for (let m = 0; m < 6; m++) E.push(d.r, d.g, d.b);
      }
    }
    I.length > 0 ? (l.geometry.dispose(), l.geometry = new N(), l.geometry.setAttribute("position", new U(I, 3)), l.geometry.setAttribute("color", new U(E, 3)), l.geometry.computeVertexNormals(), l.visible = true) : l.visible = false;
  }), S.derive(() => {
    n.visible = t.elements.val;
  }), n;
}
function it(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let c = 0; c < e.length; c++) t.push([e[c], e[(c + 1) % e.length]]);
  return t;
}
function Pe(e) {
  const t = j(), c = new Le(e, 20, t.grid, t.grid);
  return c.position.set(0.5 * e, 0.5 * e, 0), c.rotateX(Math.PI / 2), c;
}
function at(e, t, c, o) {
  const n = new q(), a = new _e(0.5, 0.5, 0.5), r = new Q({ color: 10166822 });
  return S.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const l = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((u, x) => {
      const w = c.val[x];
      if (!w) return;
      const C = new K(a, r);
      C.position.set(...w);
      const P = l * o.rawVal;
      C.scale.set(P, P, P), n.add(C);
    });
  }), S.derive(() => {
    if (o.val, !t.supports.rawVal) return;
    const u = 0.05 * t.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((x) => x.scale.set(u, u, u));
  }), S.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function rt(e, t, c, o) {
  const n = new q();
  n.name = "loadsGroup";
  function a(r) {
    if (r.length < 2) return 0.12 * t.gridSize.rawVal;
    const l = [1 / 0, 1 / 0, 1 / 0], u = [-1 / 0, -1 / 0, -1 / 0];
    for (const w of r) for (let C = 0; C < 3; C++) l[C] = Math.min(l[C], w[C]), u[C] = Math.max(u[C], w[C]);
    return 0.08 * Math.max(u[0] - l[0], u[1] - l[1], u[2] - l[2], 0.1);
  }
  return S.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((u) => u.dispose()), n.clear();
    const r = c.val, l = a(r);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((u, x) => {
      const w = r[x];
      if (!w) return;
      const C = new Z(...u.slice(0, 3));
      if (C.lengthSq() < 1e-30) return;
      C.normalize();
      const P = new ee(C, new Z(...w), 1, 15637248, 0.3, 0.3), z = l * o.rawVal;
      P.scale.set(z, z, z), n.add(P);
    });
  }), S.derive(() => {
    if (o.val, !t.loads.rawVal) return;
    const l = a(c.rawVal) * o.rawVal;
    n.children.forEach((u) => u.scale.set(l, l, l));
  }), S.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function lt(e, t, c) {
  const o = new q();
  return S.derive(() => {
    if (!e.nodesIndexes.val) return;
    o.children.forEach((a) => a.dispose()), o.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((a, r) => {
      const l = new H(`${r}`);
      l.position.set(...a), l.updateScale(n * c.rawVal), o.add(l);
    });
  }), S.derive(() => {
    if (c.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    o.children.forEach((a) => a.updateScale(n * c.rawVal));
  }), S.derive(() => {
    o.visible = e.nodesIndexes.val;
  }), o;
}
function ct(e, t, c, o) {
  const n = new q();
  return S.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((r) => r.dispose()), n.clear();
    const a = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((r, l) => {
      const u = new H(`${l}`, void 0, "#001219");
      u.position.set(...dt(r.map((x) => c.rawVal[x]))), u.updateScale(a * o.rawVal), n.add(u);
    });
  }), S.derive(() => {
    if (o.val, !t.elementsIndexes.rawVal) return;
    const a = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((r) => r.updateScale(a * o.rawVal));
  }), S.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function dt(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), c = e.length;
  return [t[0] / c, t[1] / c, t[2] / c];
}
function ut(e, t) {
  const c = new q(), o = 0.05 * e * 1, n = j(), a = new H("X", "red", "transparent"), r = new H(t ? "Z" : "Y", "green", "transparent"), l = new H(t ? "Y" : "Z", "blue", "transparent"), u = new ee(new Z(1, 0, 0), new Z(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), x = new ee(new Z(0, 1, 0), new Z(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), w = new ee(new Z(0, 0, 1), new Z(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), r.position.set(0, 1.3 * o, 0), l.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), r.updateScale(0.4 * o), l.updateScale(0.4 * o), u.scale.set(o, o, o), x.scale.set(o, o, o), w.scale.set(o, o, o), c.add(u, x, w, a, r, l), c;
}
function Se(e, t) {
  const c = new Z(...e), n = new Z(...t).clone().sub(c), a = n.length(), r = n.dot(new Z(1, 0, 0)) / a, l = n.dot(new Z(0, 1, 0)) / a, u = n.dot(new Z(0, 0, 1)) / a, x = Math.sqrt(r ** 2 + l ** 2);
  let w = new be().fromArray([[r, l, u], [-l / x, r / x, 0], [-r * u / x, -l * u / x, x]].flat());
  return u === 1 && (w = new be().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), u === -1 && (w = new be().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Ze().setFromMatrix3(w);
}
function Fe(e, t) {
  return e == null ? void 0 : e.map((c, o) => (9 * c + t[o]) / 10);
}
function oe(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), c = e.length;
  return [t[0] / c, t[1] / c, t[2] / c];
}
function ht(e, t, c) {
  const o = oe([t, c]), n = oe([e, c]), a = oe([e, t]), r = new Z(...o).sub(new Z(...n)).normalize(), l = new Z(...c).sub(new Z(...a)).normalize(), u = r.clone().cross(l).normalize(), x = u.clone().cross(r).normalize();
  return new Ze().makeBasis(r, x, u);
}
function pt(e, t, c, o) {
  const n = new q(), a = new N(), r = new te({ vertexColors: true }), l = [0, 0, 0], u = [1, 0, 0], x = [0, 1, 0], w = [0, 0, 1];
  a.setAttribute("position", new U([...l, ...u, ...l, ...x, ...l, ...w], 3));
  const C = [255, 0, 0], P = [0, 255, 0], z = [0, 0, 255];
  return a.setAttribute("color", new U([...C, ...C, ...P, ...P, ...z, ...z], 3)), S.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((F) => {
      const L = new Ee(a, r), g = c.rawVal[F[0]], I = c.rawVal[F[1]];
      if (F.length === 2 && (L.position.set(...Fe(g, I)), L.rotation.setFromRotationMatrix(Se(g, I))), F.length === 3) {
        const V = c.rawVal[F[2]];
        L.position.set(...oe([g, I, V])), L.rotation.setFromRotationMatrix(ht(g, I, V));
      }
      const Y = 0.05 * t.gridSize.rawVal * 0.75 * o.rawVal;
      L.scale.set(Y, Y, Y), n.add(L);
    }));
  }), S.derive(() => {
    if (o.val, !t.orientations.rawVal) return;
    const L = 0.05 * t.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((g) => g.scale.set(L, L, L));
  }), S.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function mt(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), c = (e.h * 100).toFixed(0);
    return `${t}x${c}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function ft(e, t, c, o) {
  const n = new q();
  function a(v, M) {
    const p = v / 2, i = M / 2, d = new Float32Array([0, -p, -i, 0, p, -i, 0, p, i, 0, -p, -i, 0, p, i, 0, -p, i]), m = new N();
    m.setAttribute("position", new $(d, 3));
    const s = new Float32Array([0, -p, -i, 0, p, -i, 0, p, i, 0, -p, i, 0, -p, -i]), h = new N();
    return h.setAttribute("position", new $(s, 3)), { fill: m, outline: h };
  }
  function r(v, M = 24) {
    const p = v / 2, i = new Float32Array(M * 9);
    for (let h = 0; h < M; h++) {
      const b = h / M * Math.PI * 2, y = (h + 1) / M * Math.PI * 2;
      i[h * 9] = 0, i[h * 9 + 1] = 0, i[h * 9 + 2] = 0, i[h * 9 + 3] = 0, i[h * 9 + 4] = p * Math.cos(b), i[h * 9 + 5] = p * Math.sin(b), i[h * 9 + 6] = 0, i[h * 9 + 7] = p * Math.cos(y), i[h * 9 + 8] = p * Math.sin(y);
    }
    const d = new N();
    d.setAttribute("position", new $(i, 3));
    const m = new Float32Array((M + 1) * 3);
    for (let h = 0; h <= M; h++) {
      const b = h / M * Math.PI * 2;
      m[h * 3] = 0, m[h * 3 + 1] = p * Math.cos(b), m[h * 3 + 2] = p * Math.sin(b);
    }
    const s = new N();
    return s.setAttribute("position", new $(m, 3)), { fill: d, outline: s };
  }
  function l(v, M, p, i) {
    const d = p ?? M * 0.08, m = i ?? v * 0.07, s = v / 2, h = M / 2, b = h - d, y = m / 2, T = [];
    function f(X, k, _, W) {
      T.push(0, X, k, 0, _, k, 0, _, W, 0, X, k, 0, _, W, 0, X, W);
    }
    f(-s, -h, s, -b), f(-y, -b, y, b), f(-s, b, s, h);
    const A = new N();
    A.setAttribute("position", new $(new Float32Array(T), 3));
    const B = new Float32Array([0, -s, -h, 0, s, -h, 0, s, -b, 0, y, -b, 0, y, b, 0, s, b, 0, s, h, 0, -s, h, 0, -s, b, 0, -y, b, 0, -y, -b, 0, -s, -b, 0, -s, -h]), R = new N();
    return R.setAttribute("position", new $(B, 3)), { fill: A, outline: R };
  }
  function u(v, M, p) {
    const i = v / 2, d = M / 2, m = i - p, s = d - p, h = [];
    function b(A, B, R, X) {
      h.push(0, A, B, 0, R, B, 0, R, X, 0, A, B, 0, R, X, 0, A, X);
    }
    b(-i, -d, i, -s), b(-i, s, i, d), b(-i, -s, -m, s), b(m, -s, i, s);
    const y = new N();
    y.setAttribute("position", new $(new Float32Array(h), 3));
    const T = new Float32Array([0, -i, -d, 0, i, -d, 0, i, -d, 0, i, d, 0, i, d, 0, -i, d, 0, -i, d, 0, -i, -d, 0, -m, -s, 0, m, -s, 0, m, -s, 0, m, s, 0, m, s, 0, -m, s, 0, -m, s, 0, -m, -s]), f = new N();
    return f.setAttribute("position", new $(T, 3)), { fill: y, outline: f };
  }
  function x(v, M, p) {
    const i = v / 2, d = M / 2, m = i - p, s = d - p, h = new N(), b = new Float32Array([0, -m, -s, 0, m, -s, 0, m, s, 0, -m, -s, 0, m, s, 0, -m, s]);
    h.setAttribute("position", new $(b, 3));
    const y = [];
    function T(R, X, k, _) {
      y.push(0, R, X, 0, k, X, 0, k, _, 0, R, X, 0, k, _, 0, R, _);
    }
    T(-i, -d, i, -s), T(-i, s, i, d), T(-i, -s, -m, s), T(m, -s, i, s);
    const f = new N();
    f.setAttribute("position", new $(new Float32Array(y), 3));
    const A = new Float32Array([0, -i, -d, 0, i, -d, 0, i, -d, 0, i, d, 0, i, d, 0, -i, d, 0, -i, d, 0, -i, -d, 0, -m, -s, 0, m, -s, 0, m, -s, 0, m, s, 0, m, s, 0, -m, s, 0, -m, s, 0, -m, -s]), B = new N();
    return B.setAttribute("position", new $(A, 3)), { concFill: h, steelFillGeom: f, outline: B };
  }
  function w(v, M, p) {
    const i = [], d = [[0, -v / 2, -M / 2], [0, -v / 2 + p, -M / 2], [0, -v / 2 + p, M / 2 - p], [0, v / 2, M / 2 - p], [0, v / 2, M / 2], [0, -v / 2, M / 2]], m = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const y of m) i.push(...d[y]);
    const s = new N();
    s.setAttribute("position", new $(new Float32Array(i), 3));
    const h = [];
    for (let y = 0; y < d.length; y++) {
      const T = (y + 1) % d.length;
      h.push(...d[y], ...d[T]);
    }
    const b = new N();
    return b.setAttribute("position", new $(new Float32Array(h), 3)), { fill: s, outline: b };
  }
  function C(v, M, p, i) {
    const d = i / 2, m = [], s = [[0, -v - d, -M / 2], [0, -p - d, -M / 2], [0, -p - d, M / 2 - p], [0, -d, M / 2 - p], [0, -d, M / 2], [0, -v - d, M / 2]], h = [[0, d, -M / 2], [0, d + p, -M / 2], [0, d + p, M / 2 - p], [0, v + d, M / 2 - p], [0, v + d, M / 2], [0, d, M / 2]], b = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of b) m.push(...s[A]);
    for (const A of b) m.push(...h[A]);
    const y = new N();
    y.setAttribute("position", new $(new Float32Array(m), 3));
    const T = [];
    for (const A of [s, h]) for (let B = 0; B < A.length; B++) {
      const R = (B + 1) % A.length;
      T.push(...A[B], ...A[R]);
    }
    const f = new N();
    return f.setAttribute("position", new $(new Float32Array(T), 3)), { fill: y, outline: f };
  }
  function P(v, M, p, i) {
    const d = M / 2, m = v, s = [[0, -m, -d], [0, -m, -d + p], [0, -i, -d + p], [0, -i, d - p], [0, -m, d - p], [0, -m, d], [0, 0, d], [0, 0, -d]], h = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], b = [];
    for (const A of h) b.push(...s[A]);
    const y = new N();
    y.setAttribute("position", new $(new Float32Array(b), 3));
    const T = [];
    for (let A = 0; A < s.length; A++) {
      const B = (A + 1) % s.length;
      T.push(...s[A], ...s[B]);
    }
    const f = new N();
    return f.setAttribute("position", new $(new Float32Array(T), 3)), { fill: y, outline: f };
  }
  function z(v, M, p, i, d) {
    const m = M / 2, s = d / 2, h = [], b = [[0, -v, -m], [0, -v, -m + p], [0, -s - i, -m + p], [0, -s - i, m - p], [0, -v, m - p], [0, -v, m], [0, -s, m], [0, -s, -m]], y = b.map((R) => [R[0], -R[1], R[2]]), T = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const R of T) h.push(...b[R]);
    for (const R of T) h.push(...y[R]);
    const f = new N();
    f.setAttribute("position", new $(new Float32Array(h), 3));
    const A = [];
    for (const R of [b, y]) for (let X = 0; X < R.length; X++) {
      const k = (X + 1) % R.length;
      A.push(...R[X], ...R[k]);
    }
    const B = new N();
    return B.setAttribute("position", new $(new Float32Array(A), 3)), { fill: f, outline: B };
  }
  function F(v, M, p, i) {
    const d = v / 2, m = M / 2, s = i / 2, h = [[0, -s, -m], [0, s, -m], [0, s, m - p], [0, d, m - p], [0, d, m], [0, -d, m], [0, -d, m - p], [0, -s, m - p]], b = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], y = [];
    for (const B of b) y.push(...h[B]);
    const T = new N();
    T.setAttribute("position", new $(new Float32Array(y), 3));
    const f = [];
    for (let B = 0; B < h.length; B++) {
      const R = (B + 1) % h.length;
      f.push(...h[B], ...h[R]);
    }
    const A = new N();
    return A.setAttribute("position", new $(new Float32Array(f), 3)), { fill: T, outline: A };
  }
  function L(v, M, p = 24) {
    const i = v / 2, d = i - M, m = [];
    for (let y = 0; y < p; y++) {
      const T = y / p * Math.PI * 2, f = (y + 1) / p * Math.PI * 2, A = Math.cos(T), B = Math.sin(T), R = Math.cos(f), X = Math.sin(f);
      m.push(0, i * A, i * B, 0, i * R, i * X, 0, d * R, d * X), m.push(0, i * A, i * B, 0, d * R, d * X, 0, d * A, d * B);
    }
    const s = new N();
    s.setAttribute("position", new $(new Float32Array(m), 3));
    const h = [];
    for (let y = 0; y < p; y++) {
      const T = y / p * Math.PI * 2, f = (y + 1) / p * Math.PI * 2;
      h.push(0, i * Math.cos(T), i * Math.sin(T), 0, i * Math.cos(f), i * Math.sin(f)), h.push(0, d * Math.cos(T), d * Math.sin(T), 0, d * Math.cos(f), d * Math.sin(f));
    }
    const b = new N();
    return b.setAttribute("position", new $(new Float32Array(h), 3)), { fill: s, outline: b };
  }
  const g = new Q({ color: 52479, transparent: true, opacity: 0.35, side: J, depthWrite: false }), I = new te({ color: 52479 }), E = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: J, depthWrite: false }), Y = new te({ color: 16750848 });
  function V(v, M) {
    const p = Math.abs(M[0] - v[0]), i = Math.abs(M[1] - v[1]), d = Math.abs(M[2] - v[2]);
    return d > p && d > i || i > p && i > d;
  }
  return S.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const v = t.secColumns.rawVal, M = t.secBeams.rawVal;
    if (!v && !M) {
      n.children.forEach((s) => {
        s instanceof H && s.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((s) => {
      s instanceof H && s.dispose();
    }), n.clear();
    const p = (_a = e.elements) == null ? void 0 : _a.val, i = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!p || !i) return;
    const d = i.sectionShapes, m = t.secFloor.rawVal;
    p.forEach((s, h) => {
      if (s.length !== 2) return;
      const b = c.rawVal[s[0]], y = c.rawVal[s[1]];
      if (!b || !y) return;
      const T = V(b, y);
      if (T && !v || !T && !M) return;
      if (m >= 0) {
        const X = Math.min(b[1], y[1]);
        Math.max(b[1], y[1]);
        const k = t.gridSize.rawVal || 3;
        if (Math.floor(X / k + 0.01) !== m) return;
      }
      const f = d == null ? void 0 : d.get(h);
      if (!f) return;
      const A = [(b[0] + y[0]) / 2, (b[1] + y[1]) / 2, (b[2] + y[2]) / 2], B = Se(b, y);
      if (f.type === "CFT") {
        const X = x(f.b, f.h, f.tw ?? f.b * 0.05), k = new K(X.concFill, g);
        k.position.set(...A), k.rotation.setFromRotationMatrix(B), n.add(k);
        const _ = new K(X.steelFillGeom, E);
        _.position.set(...A), _.rotation.setFromRotationMatrix(B), n.add(_);
        const W = new ne(X.outline, Y);
        W.position.set(...A), W.rotation.setFromRotationMatrix(B), n.add(W);
      } else {
        let X, k, _;
        switch (f.type) {
          case "rect":
            X = a(f.b, f.h), k = g, _ = I;
            break;
          case "circ":
            X = r(f.d), k = g, _ = I;
            break;
          case "I":
            X = l(f.b, f.h, f.tf, f.tw), k = E, _ = Y;
            break;
          case "HSS":
            X = u(f.b, f.h, f.tw ?? f.b * 0.05), k = E, _ = Y;
            break;
          case "CFT":
            X = x(f.b, f.h, f.tw ?? f.b * 0.05), k = E, _ = Y;
            break;
          case "L":
            X = w(f.b ?? f.h, f.h, f.t ?? f.tw ?? 3e-3), k = E, _ = Y;
            break;
          case "2L":
            X = C(f.b ?? f.h, f.h, f.t ?? f.tw ?? 3e-3, f.dis ?? 0.01), k = E, _ = Y;
            break;
          case "C":
          case "coldC":
            X = P(f.b, f.h, f.tf ?? f.t ?? 3e-3, f.tw ?? f.t ?? 3e-3), k = E, _ = Y;
            break;
          case "2C":
            X = z(f.b, f.h, f.tf ?? 5e-3, f.tw ?? 5e-3, f.dis ?? 0.01), k = E, _ = Y;
            break;
          case "T":
            X = F(f.b, f.h, f.tf ?? 0.01, f.tw ?? 6e-3), k = E, _ = Y;
            break;
          case "pipe":
            X = L(f.d, f.tw ?? f.d * 0.05), k = E, _ = Y;
            break;
          default:
            return;
        }
        const W = new K(X.fill, k);
        W.position.set(...A), W.rotation.setFromRotationMatrix(B), n.add(W);
        const G = new ne(X.outline, _);
        G.position.set(...A), G.rotation.setFromRotationMatrix(B), n.add(G);
      }
      const R = mt(f);
      if (R) {
        const k = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(f.type) ? "#ff9900" : "#00ccff", _ = new H(R, k, "transparent");
        _.position.set(A[0], A[1], A[2]);
        const W = 0.05 * t.gridSize.rawVal * 0.5;
        _.updateScale(W * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(_);
      }
    });
  }), o && S.derive(() => {
    if (o.val, !t.sections.rawVal) return;
    const v = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((M) => {
      M instanceof H && M.updateScale(v * o.rawVal);
    });
  }), S.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class le extends q {
  constructor(t, c, o, n, a, r, l) {
    super();
    const u = new ue().moveTo(0, 0).lineTo(0, r[1]).lineTo(o, r[1]).lineTo(o, 0).lineTo(0, 0), x = u.getPoints(), w = new N().setFromPoints(x);
    this.lines = new ne(w, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const C = new he(u), P = new Q({ color: r[1] > 0 ? 24435 : 11411474, side: J });
    this.mesh = new K(C, P), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new H(`${a[1].toFixed(4)}`), this.normalizedResult = r, this.textPosition = oe([t, c]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Te extends q {
  constructor(t, c, o, n, a, r, l) {
    super();
    const u = a[0] * o / (a[0] + a[1]), x = a[0] * a[1] > 0;
    if (this.text = new H(`${a[0].toFixed(4)}`), this.text2 = new H(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = r, this.textPosition = Fe(t, c), this.text2Position = Fe(c, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), x) {
      const w = new ue().moveTo(0, 0).lineTo(0, r[0]).lineTo(u, 0).lineTo(0, 0), C = new ue().moveTo(u, 0).lineTo(o, -r[1]).lineTo(o, 0).lineTo(u, 0), P = w.getPoints(), z = C.getPoints(), F = new N().setFromPoints(P), L = new N().setFromPoints(z), g = new te({ color: j().resultOutline });
      this.lines = new ne(F, g), this.lines2 = new ne(L, g), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), l && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const I = new he(w), E = new he(C), Y = new Q({ color: r[0] > 0 ? 24435 : 11411474, side: J }), V = new Q({ color: -r[1] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(I, Y), this.mesh2 = new K(E, V), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), l && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const w = new ue().moveTo(0, 0).lineTo(0, r[0]).lineTo(o, -r[1]).lineTo(o, 0).lineTo(0, 0), C = w.getPoints(), P = new N().setFromPoints(C);
      this.lines = new ne(P, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const z = new he(w), F = new Q({ color: r[0] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(z, F), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Re = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Re || {});
function wt(e, t, c, o) {
  const n = new q(), a = { normals: le, shearsY: le, shearsZ: le, torsions: le, bendingsY: Te, bendingsZ: Te };
  return S.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, c.val, t.frameResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const r = Re[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[r]) == null ? void 0 : _b.forEach((l, u) => {
      var _a2, _b2;
      const x = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[u]) ?? [0, 1], w = c.rawVal[x[0]], C = c.rawVal[x[1]], P = new Z(...C).distanceTo(new Z(...w)), z = vt((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[r]), F = l == null ? void 0 : l.map((E) => E / (z === 0 ? 1 : z)), L = Se(w, C), g = new a[r](w, C, P, L, l ?? [0, 0], F ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(r)), I = 0.05 * t.gridSize.rawVal;
      g.updateScale(I * o.rawVal), n.add(g);
    });
  }), S.derive(() => {
    if (o.val, t.frameResults.rawVal == "none") return;
    const r = 0.05 * t.gridSize.val;
    n.children.forEach((l) => l.updateScale(r * o.rawVal));
  }), S.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function vt(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((c) => {
    const o = Math.max(...c ?? [0, 0]);
    o > t && (t = o);
  }), t;
}
class xt extends q {
  constructor(t, c, o) {
    super();
    const n = c === Ye.reactions;
    o[0] && (this.xText1 = new H(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new H(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new H(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new H(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new H(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new H(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new ee(new Z(1, 0, 0), new Z(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new ee(new Z(0, 1, 0), new Z(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new ee(new Z(0, 0, 1), new Z(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var Ye = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Ye || {});
function bt(e, t, c, o) {
  const n = new q();
  return S.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const a = Ye[t.nodeResults.rawVal], r = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((l, u) => {
      const x = new xt(c.rawVal[u], a, l ?? [0, 0, 0, 0, 0, 0]);
      x.updateScale(r * o.rawVal), n.add(x);
    });
  }), S.derive(() => {
    if (o.val, t.nodeResults.rawVal == "none") return;
    const a = 0.05 * t.gridSize.val;
    n.children.forEach((r) => r.updateScale(a * o.rawVal));
  }), S.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function Mt({ drawingObj: e, gridObj: t, scene: c, camera: o, controls: n, gridSize: a, derivedDisplayScale: r, rendererElm: l, viewerRender: u }) {
  const x = new Ne(), w = new We(), C = new K(new $e(a, a), new Q({ side: J })), P = new ce(new N(), new de()), z = new ce(new N(), new de({ color: "gray" })), F = new ce(new N(), new de({ color: "orange", size: 0.8 }));
  c.add(F), P.geometry.setAttribute("position", new U(e.points.rawVal.flat(), 3)), P.geometry.computeBoundingSphere(), P.frustumCulled = false, z.frustumCulled = false, c.add(z), C.position.set(0.5 * a, 0.5 * a, 0), C.rotateX(Math.PI / 2), C.geometry.rotateX(Math.PI / 2), C.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), S.derive(() => {
    e.gridTarget && (yt(t, { position: new Z(...e.gridTarget.val.position), quaternion: new De().setFromEuler(new Xe(...e.gridTarget.val.rotation)) }, u), C.position.set(...e.gridTarget.val.position), C.quaternion.setFromEuler(new Xe(...e.gridTarget.val.rotation)), C.updateMatrixWorld());
  }), S.derive(() => {
    P.geometry.setAttribute("position", new U(e.points.val.flat(), 3)), P.geometry.computeBoundingSphere();
  }), S.derive(() => {
    const Y = 0.05 * a * 0.5 * r.val;
    z.material.size = Y, x.params.Points.threshold = 0.4 * Y;
  }), S.derive(() => {
    var _a;
    const Y = e.points.val ?? [], v = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], M = [];
    for (const i of v) {
      const [d, m, s] = Y[i];
      M.push(d, m, s);
    }
    const p = new N();
    p.setAttribute("position", new U(M, 3)), F.geometry.dispose(), F.geometry = p;
  });
  let L = false, g = 0;
  l.addEventListener("pointerdown", () => {
    L = true;
  }), l.addEventListener("pointerup", () => {
    L = false;
  }), l.addEventListener("pointermove", () => {
    L && g++;
  }), l.addEventListener("click", (Y) => {
    if (g > 5) {
      g = 0;
      return;
    }
    g = 0, w.x = Y.clientX / window.innerWidth * 2 - 1, w.y = -(Y.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(w, o);
    const V = x.intersectObject(C);
    if (V.length) {
      let v = V[0].point;
      (Y.ctrlKey || Y.metaKey) && (v = new Z(Math.round(V[0].point.x), Math.round(V[0].point.y), Math.round(V[0].point.z))), e.points.val = [...e.points.rawVal, v.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), l.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), l.addEventListener("pointermove", (Y) => {
    w.x = Y.clientX / window.innerWidth * 2 - 1, w.y = -(Y.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(w, o);
    const V = x.intersectObject(C);
    if (z.geometry.deleteAttribute("position"), V.length) {
      let v = V[0].point;
      (Y.ctrlKey || Y.metaKey) && (v = new Z(Math.round(V[0].point.x), Math.round(V[0].point.y), Math.round(V[0].point.z))), z.geometry.setAttribute("position", new U(v.toArray(), 3));
    }
    u();
  }), l.addEventListener("pointermove", (Y) => {
    var _a;
    w.x = Y.clientX / window.innerWidth * 2 - 1, w.y = -(Y.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(w, o);
    let V = false;
    const v = x.intersectObject(P), M = x.intersectObject(C);
    if (v.length && M.length) {
      const p = new Z(...e.points.rawVal[v[0].index]), i = new Z(...M[0].point), d = p.sub(i), m = (_a = M[0].face) == null ? void 0 : _a.normal;
      m.transformDirection(C.matrixWorld), Math.abs(d.dot(m)) < 1e-4 && (V = true);
    }
    z.visible = !V;
  });
  let I = false, E;
  l.addEventListener("pointermove", (Y) => {
    var _a;
    if (!g) return;
    w.x = Y.clientX / window.innerWidth * 2 - 1, w.y = -(Y.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(w, o);
    let V = false;
    const v = x.intersectObject(P), M = x.intersectObject(C);
    if (v.length && M.length) {
      const i = new Z(...e.points.rawVal[v[0].index]), d = new Z(...M[0].point), m = i.sub(d), s = (_a = M[0].face) == null ? void 0 : _a.normal;
      s.transformDirection(C.matrixWorld), Math.abs(m.dot(s)) < 1e-4 && (V = true);
    }
    if (V && g < 5 && (I = true, n.enabled = false, E = v[0].index), !I || g % 2 !== 0) return;
    const p = [...e.points.rawVal];
    if (E !== void 0) {
      let i = M[0].point;
      (Y.ctrlKey || Y.metaKey) && (i = new Z(Math.round(i.x), Math.round(i.y), Math.round(i.z))), p[E] = i.toArray();
    }
    e.points.val = p;
  }), l.addEventListener("pointerup", () => {
    n.enabled = true, I = false;
  }), l.addEventListener("contextmenu", (Y) => {
    var _a;
    w.x = Y.clientX / window.innerWidth * 2 - 1, w.y = -(Y.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(w, o);
    let V = false;
    const v = x.intersectObject(P), M = x.intersectObject(C);
    if (v.length && M.length) {
      const d = new Z(...e.points.rawVal[v[0].index]), m = new Z(...M[0].point), s = d.sub(m), h = (_a = M[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(C.matrixWorld), Math.abs(s.dot(h)) < 1e-4 && (V = true);
    }
    if (!V) return;
    const p = [...e.points.rawVal];
    if (p.splice(v[0].index, 1), e.points.val = p, !e.polylines) return;
    const i = e.polylines.rawVal.map((d) => d.filter((m) => m !== v[0].index)).map((d) => d.map((m) => m > v[0].index ? m - 1 : m)).filter((d) => d.length);
    i.push([]), e.polylines.val = i;
  });
}
function yt(e, t, c) {
  const a = Math.round(14.999999999999998), r = { position: e.position.clone(), quaternion: e.quaternion.clone() }, l = setInterval(x, 1e3 / 30);
  let u = 0;
  function x() {
    u++;
    const w = u / a;
    e.position.lerpVectors(r.position, t.position, w), e.quaternion.slerpQuaternions(r.quaternion, t.quaternion, w), c && c(), u == a && clearInterval(l);
  }
}
class ke {
  constructor(t, c = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(t, c);
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
  setColorMap(t, c = 32) {
    this.map = ye[t] || ye.rainbow, this.n = c;
    const o = 1 / this.n, n = new D(), a = new D();
    this.lut.length = 0, this.lut.push(new D(this.map[0][1]));
    for (let r = 1; r < c; r++) {
      const l = r * o;
      for (let u = 0; u < this.map.length - 1; u++) if (l > this.map[u][0] && l <= this.map[u + 1][0]) {
        const x = this.map[u][0], w = this.map[u + 1][0];
        n.setHex(this.map[u][1], re), a.setHex(this.map[u + 1][1], re);
        const C = new D().lerpColors(n, a, (l - x) / (w - x));
        this.lut.push(C);
      }
    }
    return this.lut.push(new D(this.map[this.map.length - 1][1])), this;
  }
  copy(t) {
    return this.lut = t.lut, this.map = t.map, this.n = t.n, this.minV = t.minV, this.maxV = t.maxV, this;
  }
  getColor(t) {
    t = He.clamp(t, this.minV, this.maxV), t = (t - this.minV) / (this.maxV - this.minV);
    const c = Math.round(t * this.n);
    return this.lut[c];
  }
  addColorMap(t, c) {
    return ye[t] = c, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const c = t.getContext("2d", { alpha: false }), o = c.getImageData(0, 0, 1, this.n), n = o.data;
    let a = 0;
    const r = 1 / this.n, l = new D(), u = new D(), x = new D();
    for (let w = 1; w >= 0; w -= r) for (let C = this.map.length - 1; C >= 0; C--) if (w < this.map[C][0] && w >= this.map[C - 1][0]) {
      const P = this.map[C - 1][0], z = this.map[C][0];
      l.setHex(this.map[C - 1][1], re), u.setHex(this.map[C][1], re), x.lerpColors(l, u, (w - P) / (z - P)), n[a * 4] = Math.round(x.r * 255), n[a * 4 + 1] = Math.round(x.g * 255), n[a * 4 + 2] = Math.round(x.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return c.putImageData(o, 0, 0), t;
  }
}
const ye = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function gt(e, t, c) {
  const o = new ke(), n = new D(), a = new K(new N(), new Q({ side: J, vertexColors: true }));
  return o.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, S.derive(() => {
    a.geometry.setAttribute("position", new U(e.val.flat(), 3));
    const r = [];
    for (const F of t.val) F.length === 3 ? r.push(F[0], F[1], F[2]) : F.length === 4 && (r.push(F[0], F[1], F[2]), r.push(F[0], F[2], F[3]));
    a.geometry.setIndex(new Ge(r, 1)), a.geometry.setAttribute("color", new U(e.val.map(() => [0, 0, 0]).flat(), 3));
    const l = c.val.filter((F) => Number.isFinite(F));
    let u, x;
    const w = Ae.val;
    if (w ? (x = w[0], u = w[1]) : (u = l.length ? Math.max(...l) : 1, x = l.length ? Math.min(...l) : 0, x >= 0 && u > 0 && (x = 0)), u === x) {
      const F = Math.max(Math.abs(u) * 1e-6, 1e-9);
      u += F, x -= F;
    }
    const C = w && w[0] > w[1], P = Math.min(x, u), z = Math.max(x, u);
    o.setMin(P), o.setMax(z);
    for (let F = 0; F < c.val.length; F++) {
      const L = c.val[F];
      if (!Number.isFinite(L)) {
        a.geometry.attributes.color.setXYZ(F, 0.3, 0.3, 0.3);
        continue;
      }
      const g = C ? z + P - L : L, I = o.getColor(g) ?? new D(0, 0, 0);
      n.copy(I).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(F, n.r, n.g, n.b);
    }
  }), a;
}
function Ft(e, t, c, o) {
  const n = gt(c, e.elements, o);
  return S.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const Ct = 6, ge = 10, St = 0.012;
function Yt(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function At(e, t, c, o) {
  if (!c && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && c) {
    const a = c[e];
    if (a && a.has(t)) return a.get(t);
  }
  return null;
}
function Vt(e, t, c, o) {
  const n = new q(), a = new ke();
  a.setColorMap("rainbow");
  const r = new D(), l = S.state([]);
  return S.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const u = c.val, x = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], w = Yt(t.frameResults.val);
    if (n.children.forEach((h) => {
      h.geometry && h.geometry.dispose(), h.material && h.material.dispose();
    }), n.clear(), !w || x.length === 0 || u.length === 0) {
      l.val = [];
      return;
    }
    const C = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, P = (_c = e.deformOutputs) == null ? void 0 : _c.val, z = [], F = [];
    for (let h = 0; h < x.length; h++) {
      if (x[h].length !== 2) continue;
      const y = At(w, h, C, P);
      y && (z.push(y[0], y[1]), F.push({ idx: h, vals: y }));
    }
    if (z.length === 0) {
      l.val = [];
      return;
    }
    const L = Math.min(...z), g = Math.max(...z);
    a.setMin(L), a.setMax(g), l.val = z;
    const I = [1 / 0, 1 / 0, 1 / 0], E = [-1 / 0, -1 / 0, -1 / 0];
    for (const h of u) for (let b = 0; b < 3; b++) I[b] = Math.min(I[b], h[b]), E[b] = Math.max(E[b], h[b]);
    const V = Math.max(E[0] - I[0], E[1] - I[1], E[2] - I[2], 1) * St, v = [], M = [], p = [];
    let i = 0;
    for (const { idx: h, vals: b } of F) {
      const y = x[h], T = u[y[0]], f = u[y[1]];
      if (!T || !f) continue;
      const A = new Z(f[0] - T[0], f[1] - T[1], f[2] - T[2]), B = A.length();
      if (B < 1e-10) continue;
      A.normalize();
      const R = Math.abs(A.y) < 0.99 ? new Z(0, 1, 0) : new Z(1, 0, 0), X = new Z().crossVectors(A, R).normalize(), k = new Z().crossVectors(A, X).normalize(), _ = ge + 1, W = Ct;
      for (let G = 0; G < _; G++) {
        const O = G / ge, se = T[0] + A.x * B * O, ie = T[1] + A.y * B * O, me = T[2] + A.z * B * O, fe = b[0] + (b[1] - b[0]) * O, ae = a.getColor(fe) ?? new D(0, 0, 0);
        r.copy(ae).convertSRGBToLinear();
        for (let we = 0; we < W; we++) {
          const Ve = we / W * Math.PI * 2, ve = Math.cos(Ve), xe = Math.sin(Ve);
          v.push(se + (X.x * ve + k.x * xe) * V, ie + (X.y * ve + k.y * xe) * V, me + (X.z * ve + k.z * xe) * V), M.push(r.r, r.g, r.b);
        }
      }
      for (let G = 0; G < ge; G++) for (let O = 0; O < W; O++) {
        const se = (O + 1) % W, ie = i + G * W + O, me = i + G * W + se, fe = i + (G + 1) * W + O, ae = i + (G + 1) * W + se;
        p.push(ie, me, ae), p.push(ie, ae, fe);
      }
      i += _ * W;
    }
    if (v.length === 0) return;
    const d = new N();
    d.setAttribute("position", new U(v, 3)), d.setAttribute("color", new U(M, 3)), d.setIndex(p), d.computeVertexNormals();
    const m = new Q({ vertexColors: true, side: J }), s = new K(d, m);
    s.frustumCulled = false, n.add(s);
  }), n.__colorMapValues = l, n;
}
function Ie(e, t = 8) {
  const c = document.createElement("div");
  c.id = "legend";
  const o = document.createElement("div");
  o.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", c.appendChild(o), setTimeout(() => {
    S.derive(() => {
      o.textContent = Ce.val ? `[${Ce.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (u, x) => x / t).reverse();
  let a, r;
  n.forEach((u, x) => {
    a = document.createElement("div"), a.id = `marker-${x}`, a.className = "marker", a.style.marginTop = x == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, r = document.createElement("p"), r.id = `marker-text-${x}`, a.append(r), c.append(a);
  });
  const l = [];
  return c.querySelectorAll("p").forEach((u) => l.push(u)), setTimeout(() => {
    S.derive(() => {
      n.forEach((u, x) => {
        const w = l[x];
        w && (w.innerText = Xt(e.val, u).toString());
      });
    });
  }), c;
}
function Xt(e, t) {
  const c = Ae.val;
  if (c) return (c[0] + t * (c[1] - c[0])).toPrecision(3);
  const o = e.filter((r) => Number.isFinite(r));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const a = Math.max(...o);
  return n >= 0 && a > 0 && (n = 0), (n + t * (a - n)).toPrecision(3);
}
function _t({ mesh: e, settingsObj: t, drawingObj: c, objects3D: o, solids: n }) {
  je.DEFAULT_UP = new Z(0, 0, 1);
  const a = document.createElement("div"), r = new Ue(), l = new qe(45, 1, 0.1, 2 * 1e6), u = new Ke(-10, 10, 10, -10, -1e3, 2e6);
  let x = l;
  const w = new Qe({ antialias: true });
  w.localClippingEnabled = true;
  const C = new Oe(l, w.domElement), P = new Me(new Z(-1, 0, 0), 0), z = new Me(new Z(0, -1, 0), 0), F = new Me(new Z(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function L() {
    const s = window.__hekatanClip, h = [];
    s.enableX && (P.normal.set(s.invertX ? 1 : -1, 0, 0), P.constant = s.invertX ? -s.posX : s.posX, h.push(P)), s.enableY && (z.normal.set(0, s.invertY ? 1 : -1, 0), z.constant = s.invertY ? -s.posY : s.posY, h.push(z)), s.enableZ && (F.normal.set(0, 0, s.invertZ ? 1 : -1), F.constant = s.invertZ ? -s.posZ : s.posZ, h.push(F)), w.clippingPlanes = h, r.traverse((b) => {
      const y = b;
      if (y.material) {
        const T = Array.isArray(y.material) ? y.material : [y.material];
        for (const f of T) f.clippingPlanes = h, f.needsUpdate = true;
      }
    });
  }
  L(), window.__hekatanClipApply = L;
  const g = nt(t), I = S.derive(() => g.displayScale.val === 0 ? 1 : g.displayScale.val > 0 ? g.displayScale.val : -1 / g.displayScale.val), E = zt(e, g);
  let Y = Pe(g.gridSize.rawVal);
  a.appendChild(tt(g, e, n)), a.setAttribute("id", "viewer"), a.appendChild(w.domElement), w.setPixelRatio(window.devicePixelRatio);
  const V = j();
  w.setClearColor(V.background, 1);
  const v = g.gridSize.rawVal, M = v * 0.5 + v * 0.5 / Math.tan(45 * 0.5);
  l.position.set(0.5 * v, 0.8 * -M, 0.5 * v), C.target.set(0.5 * v, 0.5 * v, 0), C.minDistance = 1, C.maxDistance = M * 2.5, a.__settings = g, C.zoomSpeed = 1, C._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, C.update(), r.add(Y, ut(g.gridSize.rawVal, g.flipAxes.rawVal)), new ResizeObserver((s) => {
    var _a, _b;
    for (const h of s) {
      const b = (_a = h.target) == null ? void 0 : _a.clientWidth, y = (_b = h.target) == null ? void 0 : _b.clientHeight;
      if (b === 0 || y === 0) continue;
      l.aspect = b / y, l.updateProjectionMatrix();
      const T = b / y, f = u.top;
      u.left = -f * T, u.right = f * T, u.updateProjectionMatrix(), w.setSize(b, y), i();
    }
  }).observe(a), C.addEventListener("change", i), S.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, g.displayScale.val, g.nodes.val, g.elements.val, g.elemColumns.val, g.elemBeams.val, g.nodesIndexes.val, g.elementsIndexes.val, g.orientations.val, g.sections.val, g.secColumns.val, g.secBeams.val, g.secFloor.val, g.supports.val, g.loads.val, g.deformedShape.val, g.nodeResults.val, g.frameResults.val, g.shellResults.val, setTimeout(i);
  });
  function i() {
    w.render(r, x);
  }
  function d(s) {
    x = s, C.object = s, C.update(), i();
  }
  if (e) {
    r.add(ot(g, E, I), st(e, g, E), lt(g, E, I), ct(e, g, E, I), at(e, g, E, I), rt(e, g, E, I), pt(e, g, E, I), ft(e, g, E, I), bt(e, g, E, I), wt(e, g, E, I));
    const s = Zt(e, g), h = Ft(e, g, E, s), b = Ie(s);
    r.add(h), a.appendChild(b);
    const y = Vt(e, g, E);
    r.add(y);
    const T = y.__colorMapValues, f = Ie(T);
    f.id = "frame-legend", a.appendChild(f), S.derive(() => {
      const A = g.shellResults.val != "none", B = g.frameResults.val.startsWith("contour:");
      b.hidden = !A, h.visible = A, f.hidden = !B;
    });
  }
  if (n) {
    const s = new Je(16777215, 0.5);
    r.add(s);
    const h = new ze(16777215, 0.5);
    h.position.set(30, 25, -10), h.shadow.mapSize.width = 1024, h.shadow.mapSize.height = 1024, r.add(h);
    const b = 10;
    h.shadow.camera.left = -b, h.shadow.camera.right = b, h.shadow.camera.top = b, h.shadow.camera.bottom = -b, h.shadow.camera.far = 1e3;
    const y = new ze(16777215, 0.5);
    y.color.setHSL(11, 43, 96), y.position.set(-10, 0, 30), r.add(y), S.derive(() => {
      (n == null ? void 0 : n.val.length) && (r.remove(...n.oldVal), r.add(...n.rawVal), i());
    }), S.derive(() => {
      n.rawVal.forEach((T) => T.visible = g.solids.val), i();
    });
  }
  if (o) {
    const s = [], h = (y) => {
      var _a;
      return ((_a = y == null ? void 0 : y.userData) == null ? void 0 : _a.isCota) ? g.showCotas.val : g.custom3D.val;
    }, b = () => {
      for (const y of s) y.visible = h(y);
      i();
    };
    S.derive(() => {
      const y = o.val;
      s.length && (r.remove(...s), s.length = 0), y.length && (r.add(...y), s.push(...y), b()), i();
    }), S.derive(() => {
      g.custom3D.val, b();
    }), S.derive(() => {
      g.showCotas.val, b();
    });
  }
  c && Mt({ drawingObj: c, gridObj: Y, scene: r, camera: l, controls: C, gridSize: v, derivedDisplayScale: I, rendererElm: w.domElement, viewerRender: i }), pe((s, h) => {
    w.setClearColor(h.background, 1), r.remove(Y), Y.geometry.dispose(), Y.material.dispose(), Y = Pe(g.gridSize.rawVal), r.add(Y), a.style.setProperty("--awatif-legend-color", h.legendMarker), i();
  });
  const m = { scene: r, perspCamera: l, orthoCamera: u, get camera() {
    return x;
  }, controls: C, renderer: w, rendererElm: w.domElement, render: i, setActiveCamera: d, settings: g };
  return a.__ctx = m, a;
}
function zt(e, t) {
  return S.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const c = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || c.length === 0) return c;
    const n = t.deformScale.val, a = t.deformScale.val * t.deformScaleZ.val, r = Number.isFinite(n) ? n : 1, l = Number.isFinite(a) ? a : 1;
    return c.map((u, x) => {
      var _a2;
      const w = ((_a2 = o.get(x)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], C = Number.isFinite(w[0]) ? w[0] : 0, P = Number.isFinite(w[1]) ? w[1] : 0, z = Number.isFinite(w[2]) ? w[2] : 0;
      return [u[0] + C * r, u[1] + P * r, u[2] + z * l];
    });
  });
}
const Ae = S.state(null), Ce = S.state(""), Pt = S.state("kN"), Tt = S.state("mm"), It = S.state("kN/m\xB2"), Bt = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Be = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Et = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Zt(e, t) {
  const c = S.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), S.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), F = (B, R) => {
      B == null ? void 0 : B.forEach((X, k) => {
        const _ = e.elements.val[k];
        if (_) for (let W = 0; W < _.length; W++) R.set(_[W], [X[W] ?? X[0]]);
      });
    };
    F((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), F((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), F((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, r), F((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, l), F((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, u), F((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, x), F((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, w), F((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, C), F((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, P), F((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, z);
    const L = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, g = t.shellResults.val, I = L == null ? void 0 : L[g];
    Ae.val = Array.isArray(I) && I.length === 2 ? [I[0], I[1]] : null;
    const E = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [r, 0], membraneXX: [l, 0], membraneYY: [u, 0], membraneXY: [x, 0], tranverseShearX: [w, 0], tranverseShearY: [C, 0], vonMises: [P, 0], pressure: [z, 0], displacementX: [(_x = (_w = e.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = e.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = e.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, Y = t.shellResults.val, V = Pt.val, v = Tt.val, M = Y === "displacementX" || Y === "displacementY" || Y === "displacementZ", p = Y === "bendingXX" || Y === "bendingYY" || Y === "bendingXY", i = Y === "membraneXX" || Y === "membraneYY" || Y === "membraneXY", d = Y === "vonMises" || Y === "pressure", m = Y === "tranverseShearX" || Y === "tranverseShearY", s = (_C = t.solidResults) == null ? void 0 : _C.val, h = s === "vonMises" || s === "sigmaXX" || s === "sigmaYY" || s === "sigmaZZ" || s === "tauXY" || s === "tauYZ" || s === "tauXZ", b = s === "ux" || s === "uy" || s === "uz", y = It.val, T = h ? Et[y] : b || M ? Be[v] : p || i || d || m ? 1 / Bt[V] : 1, f = h ? y : b || M ? v : p ? `${V}\xB7m/m` : i ? `${V}/m\xB2` : d ? `${V}/m\xB2` : m ? `${V}/m` : "";
    Ce.val = f;
    const A = [];
    e.nodes.val.forEach((B, R) => {
      const X = E[Y];
      if (!X || !X[0] || typeof X[0].has != "function") return;
      if (!X[0].has(R)) {
        A.push(Number.NaN);
        return;
      }
      const k = X[0].get(R), _ = k ? k[X[1]] ?? 0 : 0;
      A.push(_ * T);
    }), c.val = A;
  }), c;
}
export {
  Tt as a,
  gt as b,
  Pt as c,
  Ie as d,
  It as e,
  _t as g
};
