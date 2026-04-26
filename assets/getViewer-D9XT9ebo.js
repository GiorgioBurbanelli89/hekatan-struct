import { N as ce, B as N, U as de, F as U, G as q, d as Be, L as te, e as Q, D as J, b as K, r as D, y as Le, c as _e, V as R, w as ee, x as H, X as be, k as Re, a as ne, f as $, h as ue, Y as he, l as Ne, j as We, Z as $e, _ as De, $ as ze, a0 as re, a1 as He, a2 as Ge, q as Ue, s as qe, t as Ke, W as Qe, u as Oe, z as Me, A as Je, v as Pe, O as je } from "./Text-DyNVkyur.js";
import { v as C, P as et, g as j, o as pe } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function tt(e, t, r) {
  const o = document.createElement("div"), n = new et({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.deformScale, "val", { label: "Deform scale XY", min: 0.1, max: 5e3, step: 0.1 }), n.addBinding(e.deformScaleZ, "val", { label: "Deform scale Z", min: 0.01, max: 10, step: 0.01 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const a = n.addFolder({ title: "Analysis Inputs" });
    a.addBinding(e.supports, "val", { label: "Supports" }), a.addBinding(e.loads, "val", { label: "Loads" }), a.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), a.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const a = n.addFolder({ title: "Analysis Outputs" });
    a.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), a.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), a.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), a.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), a.addBinding(e.deformedShape, "val", { label: "Deformed shape" });
  }
  return r && n.addBinding(e.solids, "val", { label: "Solids" }), o;
}
function nt(e) {
  return { gridSize: C.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: C.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: C.state((e == null ? void 0 : e.nodes) ?? true), elements: C.state((e == null ? void 0 : e.elements) ?? true), elemColumns: C.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: C.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: C.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: C.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: C.state((e == null ? void 0 : e.orientations) ?? false), sections: C.state((e == null ? void 0 : e.sections) ?? true), secColumns: C.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: C.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: C.state((e == null ? void 0 : e.secFloor) ?? -1), supports: C.state((e == null ? void 0 : e.supports) ?? true), loads: C.state((e == null ? void 0 : e.loads) ?? false), deformedShape: C.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: C.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: C.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: C.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: C.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: C.state((e == null ? void 0 : e.flipAxes) ?? false), solids: C.state((e == null ? void 0 : e.solids) ?? true), custom3D: C.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: C.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: C.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: C.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function ot(e, t, r) {
  const o = j(), n = new ce(new N(), new de({ color: o.nodePoint }));
  return pe((a, c) => {
    n.material.color.setHex(c.nodePoint);
  }), n.frustumCulled = false, C.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new U(t.val.flat(), 3));
  }), C.derive(() => {
    r.val;
    const a = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = a * r.rawVal);
  }), C.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function st(e, t, r) {
  const o = j(), n = new q(), a = new Be(new N(), new te({ color: o.elementLine }));
  pe((X, P) => {
    a.material.color.setHex(P.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: J, depthWrite: false }), d = new K(new N(), c);
  d.frustumCulled = false, n.add(d);
  let h = new D(o.shellWall), x = new D(o.shellSlab), f = new D(o.shellTri);
  pe((X, P) => {
    h = new D(P.shellWall), x = new D(P.shellSlab), f = new D(P.shellTri), c.opacity = P.shellOpacity, c.needsUpdate = true;
  });
  function S(X, P) {
    const g = Math.abs(P[0] - X[0]), L = Math.abs(P[1] - X[1]), y = Math.abs(P[2] - X[2]);
    return y > g && y > L || L > g && L > y;
  }
  return C.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const X = t.elemColumns.rawVal, P = t.elemBeams.rawVal, g = r.val, L = ((_a = e.elements) == null ? void 0 : _a.val) || [], y = L.filter((Y) => {
      if (Y.length !== 2) return true;
      const w = g[Y[0]], b = g[Y[1]];
      if (!w || !b) return true;
      const p = S(w, b);
      return !(p && !X || !p && !P);
    }).map((Y) => it(Y).map((w) => [...g[w[0]], ...g[w[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new U(y, 3));
    const I = [], B = [];
    function V(Y, w, b, p) {
      const i = [w[0] - Y[0], w[1] - Y[1], w[2] - Y[2]], l = [p[0] - Y[0], p[1] - Y[1], p[2] - Y[2]], m = i[1] * l[2] - i[2] * l[1], s = i[2] * l[0] - i[0] * l[2], u = i[0] * l[1] - i[1] * l[0], M = Math.sqrt(m * m + s * s + u * u);
      return M < 1e-12 ? false : Math.abs(u / M) < 0.5;
    }
    for (const Y of L) if (Y.length === 3) {
      const [w, b, p] = Y;
      if (g[w] && g[b] && g[p]) {
        I.push(...g[w], ...g[b], ...g[p]);
        for (let i = 0; i < 3; i++) B.push(f.r, f.g, f.b);
      }
    } else if (Y.length === 4) {
      const [w, b, p, i] = Y;
      if (g[w] && g[b] && g[p] && g[i]) {
        const l = V(g[w], g[b], g[p], g[i]) ? h : x;
        I.push(...g[w], ...g[b], ...g[p]), I.push(...g[w], ...g[p], ...g[i]);
        for (let m = 0; m < 6; m++) B.push(l.r, l.g, l.b);
      }
    }
    I.length > 0 ? (d.geometry.dispose(), d.geometry = new N(), d.geometry.setAttribute("position", new U(I, 3)), d.geometry.setAttribute("color", new U(B, 3)), d.geometry.computeVertexNormals(), d.visible = true) : d.visible = false;
  }), C.derive(() => {
    n.visible = t.elements.val;
  }), n;
}
function it(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let r = 0; r < e.length; r++) t.push([e[r], e[(r + 1) % e.length]]);
  return t;
}
function Xe(e) {
  const t = j(), r = new Le(e, 20, t.grid, t.grid);
  return r.position.set(0.5 * e, 0.5 * e, 0), r.rotateX(Math.PI / 2), r;
}
function at(e, t, r, o) {
  const n = new q(), a = new _e(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return C.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const d = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((h, x) => {
      const f = r.val[x];
      if (!f) return;
      const S = new K(a, c);
      S.position.set(...f);
      const X = d * o.rawVal;
      S.scale.set(X, X, X), n.add(S);
    });
  }), C.derive(() => {
    if (o.val, !t.supports.rawVal) return;
    const h = 0.05 * t.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((x) => x.scale.set(h, h, h));
  }), C.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function rt(e, t, r, o) {
  const n = new q();
  n.name = "loadsGroup";
  function a(c) {
    if (c.length < 2) return 0.12 * t.gridSize.rawVal;
    const d = [1 / 0, 1 / 0, 1 / 0], h = [-1 / 0, -1 / 0, -1 / 0];
    for (const f of c) for (let S = 0; S < 3; S++) d[S] = Math.min(d[S], f[S]), h[S] = Math.max(h[S], f[S]);
    return 0.08 * Math.max(h[0] - d[0], h[1] - d[1], h[2] - d[2], 0.1);
  }
  return C.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((h) => h.dispose()), n.clear();
    const c = r.val, d = a(c);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((h, x) => {
      const f = c[x];
      if (!f) return;
      const S = new R(...h.slice(0, 3));
      if (S.lengthSq() < 1e-30) return;
      S.normalize();
      const X = new ee(S, new R(...f), 1, 15637248, 0.3, 0.3), P = d * o.rawVal;
      X.scale.set(P, P, P), n.add(X);
    });
  }), C.derive(() => {
    if (o.val, !t.loads.rawVal) return;
    const d = a(r.rawVal) * o.rawVal;
    n.children.forEach((h) => h.scale.set(d, d, d));
  }), C.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function lt(e, t, r) {
  const o = new q();
  return C.derive(() => {
    if (!e.nodesIndexes.val) return;
    o.children.forEach((a) => a.dispose()), o.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((a, c) => {
      const d = new H(`${c}`);
      d.position.set(...a), d.updateScale(n * r.rawVal), o.add(d);
    });
  }), C.derive(() => {
    if (r.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    o.children.forEach((a) => a.updateScale(n * r.rawVal));
  }), C.derive(() => {
    o.visible = e.nodesIndexes.val;
  }), o;
}
function ct(e, t, r, o) {
  const n = new q();
  return C.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const a = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((c, d) => {
      const h = new H(`${d}`, void 0, "#001219");
      h.position.set(...dt(c.map((x) => r.rawVal[x]))), h.updateScale(a * o.rawVal), n.add(h);
    });
  }), C.derive(() => {
    if (o.val, !t.elementsIndexes.rawVal) return;
    const a = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(a * o.rawVal));
  }), C.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function dt(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function ut(e, t) {
  const r = new q(), o = 0.05 * e * 1, n = j(), a = new H("X", "red", "transparent"), c = new H(t ? "Z" : "Y", "green", "transparent"), d = new H(t ? "Y" : "Z", "blue", "transparent"), h = new ee(new R(1, 0, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), x = new ee(new R(0, 1, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), f = new ee(new R(0, 0, 1), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), d.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), c.updateScale(0.4 * o), d.updateScale(0.4 * o), h.scale.set(o, o, o), x.scale.set(o, o, o), f.scale.set(o, o, o), r.add(h, x, f, a, c, d), r;
}
function Ce(e, t) {
  const r = new R(...e), n = new R(...t).clone().sub(r), a = n.length(), c = n.dot(new R(1, 0, 0)) / a, d = n.dot(new R(0, 1, 0)) / a, h = n.dot(new R(0, 0, 1)) / a, x = Math.sqrt(c ** 2 + d ** 2);
  let f = new be().fromArray([[c, d, h], [-d / x, c / x, 0], [-c * h / x, -d * h / x, x]].flat());
  return h === 1 && (f = new be().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), h === -1 && (f = new be().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Re().setFromMatrix3(f);
}
function Fe(e, t) {
  return e == null ? void 0 : e.map((r, o) => (9 * r + t[o]) / 10);
}
function oe(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function ht(e, t, r) {
  const o = oe([t, r]), n = oe([e, r]), a = oe([e, t]), c = new R(...o).sub(new R(...n)).normalize(), d = new R(...r).sub(new R(...a)).normalize(), h = c.clone().cross(d).normalize(), x = h.clone().cross(c).normalize();
  return new Re().makeBasis(c, x, h);
}
function pt(e, t, r, o) {
  const n = new q(), a = new N(), c = new te({ vertexColors: true }), d = [0, 0, 0], h = [1, 0, 0], x = [0, 1, 0], f = [0, 0, 1];
  a.setAttribute("position", new U([...d, ...h, ...d, ...x, ...d, ...f], 3));
  const S = [255, 0, 0], X = [0, 255, 0], P = [0, 0, 255];
  return a.setAttribute("color", new U([...S, ...S, ...X, ...X, ...P, ...P], 3)), C.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((g) => {
      const L = new Be(a, c), y = r.rawVal[g[0]], I = r.rawVal[g[1]];
      if (g.length === 2 && (L.position.set(...Fe(y, I)), L.rotation.setFromRotationMatrix(Ce(y, I))), g.length === 3) {
        const Y = r.rawVal[g[2]];
        L.position.set(...oe([y, I, Y])), L.rotation.setFromRotationMatrix(ht(y, I, Y));
      }
      const V = 0.05 * t.gridSize.rawVal * 0.75 * o.rawVal;
      L.scale.set(V, V, V), n.add(L);
    }));
  }), C.derive(() => {
    if (o.val, !t.orientations.rawVal) return;
    const L = 0.05 * t.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((y) => y.scale.set(L, L, L));
  }), C.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function mt(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), r = (e.h * 100).toFixed(0);
    return `${t}x${r}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function ft(e, t, r, o) {
  const n = new q();
  function a(w, b) {
    const p = w / 2, i = b / 2, l = new Float32Array([0, -p, -i, 0, p, -i, 0, p, i, 0, -p, -i, 0, p, i, 0, -p, i]), m = new N();
    m.setAttribute("position", new $(l, 3));
    const s = new Float32Array([0, -p, -i, 0, p, -i, 0, p, i, 0, -p, i, 0, -p, -i]), u = new N();
    return u.setAttribute("position", new $(s, 3)), { fill: m, outline: u };
  }
  function c(w, b = 24) {
    const p = w / 2, i = new Float32Array(b * 9);
    for (let u = 0; u < b; u++) {
      const M = u / b * Math.PI * 2, F = (u + 1) / b * Math.PI * 2;
      i[u * 9] = 0, i[u * 9 + 1] = 0, i[u * 9 + 2] = 0, i[u * 9 + 3] = 0, i[u * 9 + 4] = p * Math.cos(M), i[u * 9 + 5] = p * Math.sin(M), i[u * 9 + 6] = 0, i[u * 9 + 7] = p * Math.cos(F), i[u * 9 + 8] = p * Math.sin(F);
    }
    const l = new N();
    l.setAttribute("position", new $(i, 3));
    const m = new Float32Array((b + 1) * 3);
    for (let u = 0; u <= b; u++) {
      const M = u / b * Math.PI * 2;
      m[u * 3] = 0, m[u * 3 + 1] = p * Math.cos(M), m[u * 3 + 2] = p * Math.sin(M);
    }
    const s = new N();
    return s.setAttribute("position", new $(m, 3)), { fill: l, outline: s };
  }
  function d(w, b, p, i) {
    const l = p ?? b * 0.08, m = i ?? w * 0.07, s = w / 2, u = b / 2, M = u - l, F = m / 2, T = [];
    function v(z, k, _, W) {
      T.push(0, z, k, 0, _, k, 0, _, W, 0, z, k, 0, _, W, 0, z, W);
    }
    v(-s, -u, s, -M), v(-F, -M, F, M), v(-s, M, s, u);
    const A = new N();
    A.setAttribute("position", new $(new Float32Array(T), 3));
    const E = new Float32Array([0, -s, -u, 0, s, -u, 0, s, -M, 0, F, -M, 0, F, M, 0, s, M, 0, s, u, 0, -s, u, 0, -s, M, 0, -F, M, 0, -F, -M, 0, -s, -M, 0, -s, -u]), Z = new N();
    return Z.setAttribute("position", new $(E, 3)), { fill: A, outline: Z };
  }
  function h(w, b, p) {
    const i = w / 2, l = b / 2, m = i - p, s = l - p, u = [];
    function M(A, E, Z, z) {
      u.push(0, A, E, 0, Z, E, 0, Z, z, 0, A, E, 0, Z, z, 0, A, z);
    }
    M(-i, -l, i, -s), M(-i, s, i, l), M(-i, -s, -m, s), M(m, -s, i, s);
    const F = new N();
    F.setAttribute("position", new $(new Float32Array(u), 3));
    const T = new Float32Array([0, -i, -l, 0, i, -l, 0, i, -l, 0, i, l, 0, i, l, 0, -i, l, 0, -i, l, 0, -i, -l, 0, -m, -s, 0, m, -s, 0, m, -s, 0, m, s, 0, m, s, 0, -m, s, 0, -m, s, 0, -m, -s]), v = new N();
    return v.setAttribute("position", new $(T, 3)), { fill: F, outline: v };
  }
  function x(w, b, p) {
    const i = w / 2, l = b / 2, m = i - p, s = l - p, u = new N(), M = new Float32Array([0, -m, -s, 0, m, -s, 0, m, s, 0, -m, -s, 0, m, s, 0, -m, s]);
    u.setAttribute("position", new $(M, 3));
    const F = [];
    function T(Z, z, k, _) {
      F.push(0, Z, z, 0, k, z, 0, k, _, 0, Z, z, 0, k, _, 0, Z, _);
    }
    T(-i, -l, i, -s), T(-i, s, i, l), T(-i, -s, -m, s), T(m, -s, i, s);
    const v = new N();
    v.setAttribute("position", new $(new Float32Array(F), 3));
    const A = new Float32Array([0, -i, -l, 0, i, -l, 0, i, -l, 0, i, l, 0, i, l, 0, -i, l, 0, -i, l, 0, -i, -l, 0, -m, -s, 0, m, -s, 0, m, -s, 0, m, s, 0, m, s, 0, -m, s, 0, -m, s, 0, -m, -s]), E = new N();
    return E.setAttribute("position", new $(A, 3)), { concFill: u, steelFillGeom: v, outline: E };
  }
  function f(w, b, p) {
    const i = [], l = [[0, -w / 2, -b / 2], [0, -w / 2 + p, -b / 2], [0, -w / 2 + p, b / 2 - p], [0, w / 2, b / 2 - p], [0, w / 2, b / 2], [0, -w / 2, b / 2]], m = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const F of m) i.push(...l[F]);
    const s = new N();
    s.setAttribute("position", new $(new Float32Array(i), 3));
    const u = [];
    for (let F = 0; F < l.length; F++) {
      const T = (F + 1) % l.length;
      u.push(...l[F], ...l[T]);
    }
    const M = new N();
    return M.setAttribute("position", new $(new Float32Array(u), 3)), { fill: s, outline: M };
  }
  function S(w, b, p, i) {
    const l = i / 2, m = [], s = [[0, -w - l, -b / 2], [0, -p - l, -b / 2], [0, -p - l, b / 2 - p], [0, -l, b / 2 - p], [0, -l, b / 2], [0, -w - l, b / 2]], u = [[0, l, -b / 2], [0, l + p, -b / 2], [0, l + p, b / 2 - p], [0, w + l, b / 2 - p], [0, w + l, b / 2], [0, l, b / 2]], M = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of M) m.push(...s[A]);
    for (const A of M) m.push(...u[A]);
    const F = new N();
    F.setAttribute("position", new $(new Float32Array(m), 3));
    const T = [];
    for (const A of [s, u]) for (let E = 0; E < A.length; E++) {
      const Z = (E + 1) % A.length;
      T.push(...A[E], ...A[Z]);
    }
    const v = new N();
    return v.setAttribute("position", new $(new Float32Array(T), 3)), { fill: F, outline: v };
  }
  function X(w, b, p, i) {
    const l = b / 2, m = w, s = [[0, -m, -l], [0, -m, -l + p], [0, -i, -l + p], [0, -i, l - p], [0, -m, l - p], [0, -m, l], [0, 0, l], [0, 0, -l]], u = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], M = [];
    for (const A of u) M.push(...s[A]);
    const F = new N();
    F.setAttribute("position", new $(new Float32Array(M), 3));
    const T = [];
    for (let A = 0; A < s.length; A++) {
      const E = (A + 1) % s.length;
      T.push(...s[A], ...s[E]);
    }
    const v = new N();
    return v.setAttribute("position", new $(new Float32Array(T), 3)), { fill: F, outline: v };
  }
  function P(w, b, p, i, l) {
    const m = b / 2, s = l / 2, u = [], M = [[0, -w, -m], [0, -w, -m + p], [0, -s - i, -m + p], [0, -s - i, m - p], [0, -w, m - p], [0, -w, m], [0, -s, m], [0, -s, -m]], F = M.map((Z) => [Z[0], -Z[1], Z[2]]), T = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of T) u.push(...M[Z]);
    for (const Z of T) u.push(...F[Z]);
    const v = new N();
    v.setAttribute("position", new $(new Float32Array(u), 3));
    const A = [];
    for (const Z of [M, F]) for (let z = 0; z < Z.length; z++) {
      const k = (z + 1) % Z.length;
      A.push(...Z[z], ...Z[k]);
    }
    const E = new N();
    return E.setAttribute("position", new $(new Float32Array(A), 3)), { fill: v, outline: E };
  }
  function g(w, b, p, i) {
    const l = w / 2, m = b / 2, s = i / 2, u = [[0, -s, -m], [0, s, -m], [0, s, m - p], [0, l, m - p], [0, l, m], [0, -l, m], [0, -l, m - p], [0, -s, m - p]], M = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], F = [];
    for (const E of M) F.push(...u[E]);
    const T = new N();
    T.setAttribute("position", new $(new Float32Array(F), 3));
    const v = [];
    for (let E = 0; E < u.length; E++) {
      const Z = (E + 1) % u.length;
      v.push(...u[E], ...u[Z]);
    }
    const A = new N();
    return A.setAttribute("position", new $(new Float32Array(v), 3)), { fill: T, outline: A };
  }
  function L(w, b, p = 24) {
    const i = w / 2, l = i - b, m = [];
    for (let F = 0; F < p; F++) {
      const T = F / p * Math.PI * 2, v = (F + 1) / p * Math.PI * 2, A = Math.cos(T), E = Math.sin(T), Z = Math.cos(v), z = Math.sin(v);
      m.push(0, i * A, i * E, 0, i * Z, i * z, 0, l * Z, l * z), m.push(0, i * A, i * E, 0, l * Z, l * z, 0, l * A, l * E);
    }
    const s = new N();
    s.setAttribute("position", new $(new Float32Array(m), 3));
    const u = [];
    for (let F = 0; F < p; F++) {
      const T = F / p * Math.PI * 2, v = (F + 1) / p * Math.PI * 2;
      u.push(0, i * Math.cos(T), i * Math.sin(T), 0, i * Math.cos(v), i * Math.sin(v)), u.push(0, l * Math.cos(T), l * Math.sin(T), 0, l * Math.cos(v), l * Math.sin(v));
    }
    const M = new N();
    return M.setAttribute("position", new $(new Float32Array(u), 3)), { fill: s, outline: M };
  }
  const y = new Q({ color: 52479, transparent: true, opacity: 0.35, side: J, depthWrite: false }), I = new te({ color: 52479 }), B = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: J, depthWrite: false }), V = new te({ color: 16750848 });
  function Y(w, b) {
    const p = Math.abs(b[0] - w[0]), i = Math.abs(b[1] - w[1]), l = Math.abs(b[2] - w[2]);
    return l > p && l > i || i > p && i > l;
  }
  return C.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const w = t.secColumns.rawVal, b = t.secBeams.rawVal;
    if (!w && !b) {
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
    const l = i.sectionShapes, m = t.secFloor.rawVal;
    p.forEach((s, u) => {
      if (s.length !== 2) return;
      const M = r.rawVal[s[0]], F = r.rawVal[s[1]];
      if (!M || !F) return;
      const T = Y(M, F);
      if (T && !w || !T && !b) return;
      if (m >= 0) {
        const z = Math.min(M[1], F[1]);
        Math.max(M[1], F[1]);
        const k = t.gridSize.rawVal || 3;
        if (Math.floor(z / k + 0.01) !== m) return;
      }
      const v = l == null ? void 0 : l.get(u);
      if (!v) return;
      const A = [(M[0] + F[0]) / 2, (M[1] + F[1]) / 2, (M[2] + F[2]) / 2], E = Ce(M, F);
      if (v.type === "CFT") {
        const z = x(v.b, v.h, v.tw ?? v.b * 0.05), k = new K(z.concFill, y);
        k.position.set(...A), k.rotation.setFromRotationMatrix(E), n.add(k);
        const _ = new K(z.steelFillGeom, B);
        _.position.set(...A), _.rotation.setFromRotationMatrix(E), n.add(_);
        const W = new ne(z.outline, V);
        W.position.set(...A), W.rotation.setFromRotationMatrix(E), n.add(W);
      } else {
        let z, k, _;
        switch (v.type) {
          case "rect":
            z = a(v.b, v.h), k = y, _ = I;
            break;
          case "circ":
            z = c(v.d), k = y, _ = I;
            break;
          case "I":
            z = d(v.b, v.h, v.tf, v.tw), k = B, _ = V;
            break;
          case "HSS":
            z = h(v.b, v.h, v.tw ?? v.b * 0.05), k = B, _ = V;
            break;
          case "CFT":
            z = x(v.b, v.h, v.tw ?? v.b * 0.05), k = B, _ = V;
            break;
          case "L":
            z = f(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3), k = B, _ = V;
            break;
          case "2L":
            z = S(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3, v.dis ?? 0.01), k = B, _ = V;
            break;
          case "C":
          case "coldC":
            z = X(v.b, v.h, v.tf ?? v.t ?? 3e-3, v.tw ?? v.t ?? 3e-3), k = B, _ = V;
            break;
          case "2C":
            z = P(v.b, v.h, v.tf ?? 5e-3, v.tw ?? 5e-3, v.dis ?? 0.01), k = B, _ = V;
            break;
          case "T":
            z = g(v.b, v.h, v.tf ?? 0.01, v.tw ?? 6e-3), k = B, _ = V;
            break;
          case "pipe":
            z = L(v.d, v.tw ?? v.d * 0.05), k = B, _ = V;
            break;
          default:
            return;
        }
        const W = new K(z.fill, k);
        W.position.set(...A), W.rotation.setFromRotationMatrix(E), n.add(W);
        const G = new ne(z.outline, _);
        G.position.set(...A), G.rotation.setFromRotationMatrix(E), n.add(G);
      }
      const Z = mt(v);
      if (Z) {
        const k = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(v.type) ? "#ff9900" : "#00ccff", _ = new H(Z, k, "transparent");
        _.position.set(A[0], A[1], A[2]);
        const W = 0.05 * t.gridSize.rawVal * 0.5;
        _.updateScale(W * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(_);
      }
    });
  }), o && C.derive(() => {
    if (o.val, !t.sections.rawVal) return;
    const w = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((b) => {
      b instanceof H && b.updateScale(w * o.rawVal);
    });
  }), C.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class le extends q {
  constructor(t, r, o, n, a, c, d) {
    super();
    const h = new ue().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), x = h.getPoints(), f = new N().setFromPoints(x);
    this.lines = new ne(f, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), d && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const S = new he(h), X = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: J });
    this.mesh = new K(S, X), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), d && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new H(`${a[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = oe([t, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Te extends q {
  constructor(t, r, o, n, a, c, d) {
    super();
    const h = a[0] * o / (a[0] + a[1]), x = a[0] * a[1] > 0;
    if (this.text = new H(`${a[0].toFixed(4)}`), this.text2 = new H(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = Fe(t, r), this.text2Position = Fe(r, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), x) {
      const f = new ue().moveTo(0, 0).lineTo(0, c[0]).lineTo(h, 0).lineTo(0, 0), S = new ue().moveTo(h, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(h, 0), X = f.getPoints(), P = S.getPoints(), g = new N().setFromPoints(X), L = new N().setFromPoints(P), y = new te({ color: j().resultOutline });
      this.lines = new ne(g, y), this.lines2 = new ne(L, y), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), d && this.lines.rotateX(Math.PI / 2), d && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const I = new he(f), B = new he(S), V = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: J }), Y = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(I, V), this.mesh2 = new K(B, Y), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), d && this.mesh.rotateX(Math.PI / 2), d && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const f = new ue().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), S = f.getPoints(), X = new N().setFromPoints(S);
      this.lines = new ne(X, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), d && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const P = new he(f), g = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(P, g), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), d && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Ze = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Ze || {});
function wt(e, t, r, o) {
  const n = new q(), a = { normals: le, shearsY: le, shearsZ: le, torsions: le, bendingsY: Te, bendingsZ: Te };
  return C.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, r.val, t.frameResults.val == "none") return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const c = Ze[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((d, h) => {
      var _a2, _b2;
      const x = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[h]) ?? [0, 1], f = r.rawVal[x[0]], S = r.rawVal[x[1]], X = new R(...S).distanceTo(new R(...f)), P = vt((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), g = d == null ? void 0 : d.map((B) => B / (P === 0 ? 1 : P)), L = Ce(f, S), y = new a[c](f, S, X, L, d ?? [0, 0], g ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), I = 0.05 * t.gridSize.rawVal;
      y.updateScale(I * o.rawVal), n.add(y);
    });
  }), C.derive(() => {
    if (o.val, t.frameResults.rawVal == "none") return;
    const c = 0.05 * t.gridSize.val;
    n.children.forEach((d) => d.updateScale(c * o.rawVal));
  }), C.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function vt(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((r) => {
    const o = Math.max(...r ?? [0, 0]);
    o > t && (t = o);
  }), t;
}
class xt extends q {
  constructor(t, r, o) {
    super();
    const n = r === Ve.reactions;
    o[0] && (this.xText1 = new H(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new H(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new H(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new H(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new H(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new H(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new ee(new R(1, 0, 0), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new ee(new R(0, 1, 0), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new ee(new R(0, 0, 1), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function bt(e, t, r, o) {
  const n = new q();
  return C.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const a = Ve[t.nodeResults.rawVal], c = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((d, h) => {
      const x = new xt(r.rawVal[h], a, d ?? [0, 0, 0, 0, 0, 0]);
      x.updateScale(c * o.rawVal), n.add(x);
    });
  }), C.derive(() => {
    if (o.val, t.nodeResults.rawVal == "none") return;
    const a = 0.05 * t.gridSize.val;
    n.children.forEach((c) => c.updateScale(a * o.rawVal));
  }), C.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function Mt({ drawingObj: e, gridObj: t, scene: r, camera: o, controls: n, gridSize: a, derivedDisplayScale: c, rendererElm: d, viewerRender: h }) {
  const x = new Ne(), f = new We(), S = new K(new $e(a, a), new Q({ side: J })), X = new ce(new N(), new de()), P = new ce(new N(), new de({ color: "gray" })), g = new ce(new N(), new de({ color: "orange", size: 0.8 }));
  r.add(g), X.geometry.setAttribute("position", new U(e.points.rawVal.flat(), 3)), X.geometry.computeBoundingSphere(), X.frustumCulled = false, P.frustumCulled = false, r.add(P), S.position.set(0.5 * a, 0.5 * a, 0), S.rotateX(Math.PI / 2), S.geometry.rotateX(Math.PI / 2), S.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), C.derive(() => {
    e.gridTarget && (yt(t, { position: new R(...e.gridTarget.val.position), quaternion: new De().setFromEuler(new ze(...e.gridTarget.val.rotation)) }, h), S.position.set(...e.gridTarget.val.position), S.quaternion.setFromEuler(new ze(...e.gridTarget.val.rotation)), S.updateMatrixWorld());
  }), C.derive(() => {
    X.geometry.setAttribute("position", new U(e.points.val.flat(), 3)), X.geometry.computeBoundingSphere();
  }), C.derive(() => {
    const V = 0.05 * a * 0.5 * c.val;
    P.material.size = V, x.params.Points.threshold = 0.4 * V;
  }), C.derive(() => {
    var _a;
    const V = e.points.val ?? [], w = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], b = [];
    for (const i of w) {
      const [l, m, s] = V[i];
      b.push(l, m, s);
    }
    const p = new N();
    p.setAttribute("position", new U(b, 3)), g.geometry.dispose(), g.geometry = p;
  });
  let L = false, y = 0;
  d.addEventListener("pointerdown", () => {
    L = true;
  }), d.addEventListener("pointerup", () => {
    L = false;
  }), d.addEventListener("pointermove", () => {
    L && y++;
  }), d.addEventListener("click", (V) => {
    if (y > 5) {
      y = 0;
      return;
    }
    y = 0, f.x = V.clientX / window.innerWidth * 2 - 1, f.y = -(V.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, o);
    const Y = x.intersectObject(S);
    if (Y.length) {
      let w = Y[0].point;
      (V.ctrlKey || V.metaKey) && (w = new R(Math.round(Y[0].point.x), Math.round(Y[0].point.y), Math.round(Y[0].point.z))), e.points.val = [...e.points.rawVal, w.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), d.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), d.addEventListener("pointermove", (V) => {
    f.x = V.clientX / window.innerWidth * 2 - 1, f.y = -(V.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, o);
    const Y = x.intersectObject(S);
    if (P.geometry.deleteAttribute("position"), Y.length) {
      let w = Y[0].point;
      (V.ctrlKey || V.metaKey) && (w = new R(Math.round(Y[0].point.x), Math.round(Y[0].point.y), Math.round(Y[0].point.z))), P.geometry.setAttribute("position", new U(w.toArray(), 3));
    }
    h();
  }), d.addEventListener("pointermove", (V) => {
    var _a;
    f.x = V.clientX / window.innerWidth * 2 - 1, f.y = -(V.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, o);
    let Y = false;
    const w = x.intersectObject(X), b = x.intersectObject(S);
    if (w.length && b.length) {
      const p = new R(...e.points.rawVal[w[0].index]), i = new R(...b[0].point), l = p.sub(i), m = (_a = b[0].face) == null ? void 0 : _a.normal;
      m.transformDirection(S.matrixWorld), Math.abs(l.dot(m)) < 1e-4 && (Y = true);
    }
    P.visible = !Y;
  });
  let I = false, B;
  d.addEventListener("pointermove", (V) => {
    var _a;
    if (!y) return;
    f.x = V.clientX / window.innerWidth * 2 - 1, f.y = -(V.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, o);
    let Y = false;
    const w = x.intersectObject(X), b = x.intersectObject(S);
    if (w.length && b.length) {
      const i = new R(...e.points.rawVal[w[0].index]), l = new R(...b[0].point), m = i.sub(l), s = (_a = b[0].face) == null ? void 0 : _a.normal;
      s.transformDirection(S.matrixWorld), Math.abs(m.dot(s)) < 1e-4 && (Y = true);
    }
    if (Y && y < 5 && (I = true, n.enabled = false, B = w[0].index), !I || y % 2 !== 0) return;
    const p = [...e.points.rawVal];
    if (B !== void 0) {
      let i = b[0].point;
      (V.ctrlKey || V.metaKey) && (i = new R(Math.round(i.x), Math.round(i.y), Math.round(i.z))), p[B] = i.toArray();
    }
    e.points.val = p;
  }), d.addEventListener("pointerup", () => {
    n.enabled = true, I = false;
  }), d.addEventListener("contextmenu", (V) => {
    var _a;
    f.x = V.clientX / window.innerWidth * 2 - 1, f.y = -(V.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, o);
    let Y = false;
    const w = x.intersectObject(X), b = x.intersectObject(S);
    if (w.length && b.length) {
      const l = new R(...e.points.rawVal[w[0].index]), m = new R(...b[0].point), s = l.sub(m), u = (_a = b[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(S.matrixWorld), Math.abs(s.dot(u)) < 1e-4 && (Y = true);
    }
    if (!Y) return;
    const p = [...e.points.rawVal];
    if (p.splice(w[0].index, 1), e.points.val = p, !e.polylines) return;
    const i = e.polylines.rawVal.map((l) => l.filter((m) => m !== w[0].index)).map((l) => l.map((m) => m > w[0].index ? m - 1 : m)).filter((l) => l.length);
    i.push([]), e.polylines.val = i;
  });
}
function yt(e, t, r) {
  const a = Math.round(14.999999999999998), c = { position: e.position.clone(), quaternion: e.quaternion.clone() }, d = setInterval(x, 1e3 / 30);
  let h = 0;
  function x() {
    h++;
    const f = h / a;
    e.position.lerpVectors(c.position, t.position, f), e.quaternion.slerpQuaternions(c.quaternion, t.quaternion, f), r && r(), h == a && clearInterval(d);
  }
}
class ke {
  constructor(t, r = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(t, r);
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
  setColorMap(t, r = 32) {
    this.map = ye[t] || ye.rainbow, this.n = r;
    const o = 1 / this.n, n = new D(), a = new D();
    this.lut.length = 0, this.lut.push(new D(this.map[0][1]));
    for (let c = 1; c < r; c++) {
      const d = c * o;
      for (let h = 0; h < this.map.length - 1; h++) if (d > this.map[h][0] && d <= this.map[h + 1][0]) {
        const x = this.map[h][0], f = this.map[h + 1][0];
        n.setHex(this.map[h][1], re), a.setHex(this.map[h + 1][1], re);
        const S = new D().lerpColors(n, a, (d - x) / (f - x));
        this.lut.push(S);
      }
    }
    return this.lut.push(new D(this.map[this.map.length - 1][1])), this;
  }
  copy(t) {
    return this.lut = t.lut, this.map = t.map, this.n = t.n, this.minV = t.minV, this.maxV = t.maxV, this;
  }
  getColor(t) {
    t = He.clamp(t, this.minV, this.maxV), t = (t - this.minV) / (this.maxV - this.minV);
    const r = Math.round(t * this.n);
    return this.lut[r];
  }
  addColorMap(t, r) {
    return ye[t] = r, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const r = t.getContext("2d", { alpha: false }), o = r.getImageData(0, 0, 1, this.n), n = o.data;
    let a = 0;
    const c = 1 / this.n, d = new D(), h = new D(), x = new D();
    for (let f = 1; f >= 0; f -= c) for (let S = this.map.length - 1; S >= 0; S--) if (f < this.map[S][0] && f >= this.map[S - 1][0]) {
      const X = this.map[S - 1][0], P = this.map[S][0];
      d.setHex(this.map[S - 1][1], re), h.setHex(this.map[S][1], re), x.lerpColors(d, h, (f - X) / (P - X)), n[a * 4] = Math.round(x.r * 255), n[a * 4 + 1] = Math.round(x.g * 255), n[a * 4 + 2] = Math.round(x.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(o, 0, 0), t;
  }
}
const ye = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function gt(e, t, r) {
  const o = new ke(), n = new D(), a = new K(new N(), new Q({ side: J, vertexColors: true }));
  return o.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, C.derive(() => {
    a.geometry.setAttribute("position", new U(e.val.flat(), 3));
    const c = [];
    for (const g of t.val) g.length === 3 ? c.push(g[0], g[1], g[2]) : g.length === 4 && (c.push(g[0], g[1], g[2]), c.push(g[0], g[2], g[3]));
    a.geometry.setIndex(new Ge(c, 1)), a.geometry.setAttribute("color", new U(e.val.map(() => [0, 0, 0]).flat(), 3));
    const d = r.val.filter((g) => Number.isFinite(g));
    let h, x;
    const f = Ae.val;
    if (f ? (x = f[0], h = f[1]) : (h = d.length ? Math.max(...d) : 1, x = d.length ? Math.min(...d) : 0, x >= 0 && h > 0 && (x = 0)), h === x) {
      const g = Math.max(Math.abs(h) * 1e-6, 1e-9);
      h += g, x -= g;
    }
    const S = f && f[0] > f[1], X = Math.min(x, h), P = Math.max(x, h);
    o.setMin(X), o.setMax(P);
    for (let g = 0; g < r.val.length; g++) {
      const L = r.val[g];
      if (!Number.isFinite(L)) {
        a.geometry.attributes.color.setXYZ(g, 0.3, 0.3, 0.3);
        continue;
      }
      const y = S ? P + X - L : L, I = o.getColor(y) ?? new D(0, 0, 0);
      n.copy(I).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(g, n.r, n.g, n.b);
    }
  }), a;
}
function Ft(e, t, r, o) {
  const n = gt(r, e.elements, o);
  return C.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const St = 6, ge = 10, Ct = 0.012;
function Vt(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function At(e, t, r, o) {
  if (!r && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && r) {
    const a = r[e];
    if (a && a.has(t)) return a.get(t);
  }
  return null;
}
function Yt(e, t, r, o) {
  const n = new q(), a = new ke();
  a.setColorMap("rainbow");
  const c = new D(), d = C.state([]);
  return C.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const h = r.val, x = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], f = Vt(t.frameResults.val);
    if (n.children.forEach((u) => {
      u.geometry && u.geometry.dispose(), u.material && u.material.dispose();
    }), n.clear(), !f || x.length === 0 || h.length === 0) {
      d.val = [];
      return;
    }
    const S = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, X = (_c = e.deformOutputs) == null ? void 0 : _c.val, P = [], g = [];
    for (let u = 0; u < x.length; u++) {
      if (x[u].length !== 2) continue;
      const F = At(f, u, S, X);
      F && (P.push(F[0], F[1]), g.push({ idx: u, vals: F }));
    }
    if (P.length === 0) {
      d.val = [];
      return;
    }
    const L = Math.min(...P), y = Math.max(...P);
    a.setMin(L), a.setMax(y), d.val = P;
    const I = [1 / 0, 1 / 0, 1 / 0], B = [-1 / 0, -1 / 0, -1 / 0];
    for (const u of h) for (let M = 0; M < 3; M++) I[M] = Math.min(I[M], u[M]), B[M] = Math.max(B[M], u[M]);
    const Y = Math.max(B[0] - I[0], B[1] - I[1], B[2] - I[2], 1) * Ct, w = [], b = [], p = [];
    let i = 0;
    for (const { idx: u, vals: M } of g) {
      const F = x[u], T = h[F[0]], v = h[F[1]];
      if (!T || !v) continue;
      const A = new R(v[0] - T[0], v[1] - T[1], v[2] - T[2]), E = A.length();
      if (E < 1e-10) continue;
      A.normalize();
      const Z = Math.abs(A.y) < 0.99 ? new R(0, 1, 0) : new R(1, 0, 0), z = new R().crossVectors(A, Z).normalize(), k = new R().crossVectors(A, z).normalize(), _ = ge + 1, W = St;
      for (let G = 0; G < _; G++) {
        const O = G / ge, se = T[0] + A.x * E * O, ie = T[1] + A.y * E * O, me = T[2] + A.z * E * O, fe = M[0] + (M[1] - M[0]) * O, ae = a.getColor(fe) ?? new D(0, 0, 0);
        c.copy(ae).convertSRGBToLinear();
        for (let we = 0; we < W; we++) {
          const Ye = we / W * Math.PI * 2, ve = Math.cos(Ye), xe = Math.sin(Ye);
          w.push(se + (z.x * ve + k.x * xe) * Y, ie + (z.y * ve + k.y * xe) * Y, me + (z.z * ve + k.z * xe) * Y), b.push(c.r, c.g, c.b);
        }
      }
      for (let G = 0; G < ge; G++) for (let O = 0; O < W; O++) {
        const se = (O + 1) % W, ie = i + G * W + O, me = i + G * W + se, fe = i + (G + 1) * W + O, ae = i + (G + 1) * W + se;
        p.push(ie, me, ae), p.push(ie, ae, fe);
      }
      i += _ * W;
    }
    if (w.length === 0) return;
    const l = new N();
    l.setAttribute("position", new U(w, 3)), l.setAttribute("color", new U(b, 3)), l.setIndex(p), l.computeVertexNormals();
    const m = new Q({ vertexColors: true, side: J }), s = new K(l, m);
    s.frustumCulled = false, n.add(s);
  }), n.__colorMapValues = d, n;
}
function Ie(e, t = 8) {
  const r = document.createElement("div");
  r.id = "legend";
  const o = document.createElement("div");
  o.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", r.appendChild(o), setTimeout(() => {
    C.derive(() => {
      o.textContent = Se.val ? `[${Se.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (h, x) => x / t).reverse();
  let a, c;
  n.forEach((h, x) => {
    a = document.createElement("div"), a.id = `marker-${x}`, a.className = "marker", a.style.marginTop = x == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, c = document.createElement("p"), c.id = `marker-text-${x}`, a.append(c), r.append(a);
  });
  const d = [];
  return r.querySelectorAll("p").forEach((h) => d.push(h)), setTimeout(() => {
    C.derive(() => {
      n.forEach((h, x) => {
        const f = d[x];
        f && (f.innerText = zt(e.val, h).toString());
      });
    });
  }), r;
}
function zt(e, t) {
  const r = Ae.val;
  if (r) return (r[0] + t * (r[1] - r[0])).toPrecision(3);
  const o = e.filter((c) => Number.isFinite(c));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const a = Math.max(...o);
  return n >= 0 && a > 0 && (n = 0), (n + t * (a - n)).toPrecision(3);
}
function _t({ mesh: e, settingsObj: t, drawingObj: r, objects3D: o, solids: n }) {
  je.DEFAULT_UP = new R(0, 0, 1);
  const a = document.createElement("div"), c = new Ue(), d = new qe(45, 1, 0.1, 2 * 1e6), h = new Ke(-10, 10, 10, -10, -1e3, 2e6);
  let x = d;
  const f = new Qe({ antialias: true });
  f.localClippingEnabled = true;
  const S = new Oe(d, f.domElement), X = new Me(new R(-1, 0, 0), 0), P = new Me(new R(0, -1, 0), 0), g = new Me(new R(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function L() {
    const s = window.__hekatanClip, u = [];
    s.enableX && (X.normal.set(s.invertX ? 1 : -1, 0, 0), X.constant = s.invertX ? -s.posX : s.posX, u.push(X)), s.enableY && (P.normal.set(0, s.invertY ? 1 : -1, 0), P.constant = s.invertY ? -s.posY : s.posY, u.push(P)), s.enableZ && (g.normal.set(0, 0, s.invertZ ? 1 : -1), g.constant = s.invertZ ? -s.posZ : s.posZ, u.push(g)), f.clippingPlanes = u;
  }
  L(), window.__hekatanClipApply = L;
  const y = nt(t), I = C.derive(() => y.displayScale.val === 0 ? 1 : y.displayScale.val > 0 ? y.displayScale.val : -1 / y.displayScale.val), B = Pt(e, y);
  let V = Xe(y.gridSize.rawVal);
  a.appendChild(tt(y, e, n)), a.setAttribute("id", "viewer"), a.appendChild(f.domElement), f.setPixelRatio(window.devicePixelRatio);
  const Y = j();
  f.setClearColor(Y.background, 1);
  const w = y.gridSize.rawVal, b = w * 0.5 + w * 0.5 / Math.tan(45 * 0.5);
  d.position.set(0.5 * w, 0.8 * -b, 0.5 * w), S.target.set(0.5 * w, 0.5 * w, 0), S.minDistance = 1, S.maxDistance = b * 2.5, a.__settings = y, S.zoomSpeed = 1, S._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, S.update(), c.add(V, ut(y.gridSize.rawVal, y.flipAxes.rawVal)), new ResizeObserver((s) => {
    var _a, _b;
    for (const u of s) {
      const M = (_a = u.target) == null ? void 0 : _a.clientWidth, F = (_b = u.target) == null ? void 0 : _b.clientHeight;
      if (M === 0 || F === 0) continue;
      d.aspect = M / F, d.updateProjectionMatrix();
      const T = M / F, v = h.top;
      h.left = -v * T, h.right = v * T, h.updateProjectionMatrix(), f.setSize(M, F), i();
    }
  }).observe(a), S.addEventListener("change", i), C.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, y.displayScale.val, y.nodes.val, y.elements.val, y.elemColumns.val, y.elemBeams.val, y.nodesIndexes.val, y.elementsIndexes.val, y.orientations.val, y.sections.val, y.secColumns.val, y.secBeams.val, y.secFloor.val, y.supports.val, y.loads.val, y.deformedShape.val, y.nodeResults.val, y.frameResults.val, y.shellResults.val, setTimeout(i);
  });
  function i() {
    f.render(c, x);
  }
  function l(s) {
    x = s, S.object = s, S.update(), i();
  }
  if (e) {
    c.add(ot(y, B, I), st(e, y, B), lt(y, B, I), ct(e, y, B, I), at(e, y, B, I), rt(e, y, B, I), pt(e, y, B, I), ft(e, y, B, I), bt(e, y, B, I), wt(e, y, B, I));
    const s = Rt(e, y), u = Ft(e, y, B, s), M = Ie(s);
    c.add(u), a.appendChild(M);
    const F = Yt(e, y, B);
    c.add(F);
    const T = F.__colorMapValues, v = Ie(T);
    v.id = "frame-legend", a.appendChild(v), C.derive(() => {
      const A = y.shellResults.val != "none", E = y.frameResults.val.startsWith("contour:");
      M.hidden = !A, u.visible = A, v.hidden = !E;
    });
  }
  if (n) {
    const s = new Je(16777215, 0.5);
    c.add(s);
    const u = new Pe(16777215, 0.5);
    u.position.set(30, 25, -10), u.shadow.mapSize.width = 1024, u.shadow.mapSize.height = 1024, c.add(u);
    const M = 10;
    u.shadow.camera.left = -M, u.shadow.camera.right = M, u.shadow.camera.top = M, u.shadow.camera.bottom = -M, u.shadow.camera.far = 1e3;
    const F = new Pe(16777215, 0.5);
    F.color.setHSL(11, 43, 96), F.position.set(-10, 0, 30), c.add(F), C.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), i());
    }), C.derive(() => {
      n.rawVal.forEach((T) => T.visible = y.solids.val), i();
    });
  }
  if (o) {
    const s = [], u = (F) => {
      var _a;
      return ((_a = F == null ? void 0 : F.userData) == null ? void 0 : _a.isCota) ? y.showCotas.val : y.custom3D.val;
    }, M = () => {
      for (const F of s) F.visible = u(F);
      i();
    };
    C.derive(() => {
      const F = o.val;
      s.length && (c.remove(...s), s.length = 0), F.length && (c.add(...F), s.push(...F), M()), i();
    }), C.derive(() => {
      y.custom3D.val, M();
    }), C.derive(() => {
      y.showCotas.val, M();
    });
  }
  r && Mt({ drawingObj: r, gridObj: V, scene: c, camera: d, controls: S, gridSize: w, derivedDisplayScale: I, rendererElm: f.domElement, viewerRender: i }), pe((s, u) => {
    f.setClearColor(u.background, 1), c.remove(V), V.geometry.dispose(), V.material.dispose(), V = Xe(y.gridSize.rawVal), c.add(V), a.style.setProperty("--awatif-legend-color", u.legendMarker), i();
  });
  const m = { scene: c, perspCamera: d, orthoCamera: h, get camera() {
    return x;
  }, controls: S, renderer: f, rendererElm: f.domElement, render: i, setActiveCamera: l, settings: y };
  return a.__ctx = m, a;
}
function Pt(e, t) {
  return C.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || r.length === 0) return r;
    const n = t.deformScale.val, a = t.deformScale.val * t.deformScaleZ.val, c = Number.isFinite(n) ? n : 1, d = Number.isFinite(a) ? a : 1;
    return r.map((h, x) => {
      var _a2;
      const f = ((_a2 = o.get(x)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], S = Number.isFinite(f[0]) ? f[0] : 0, X = Number.isFinite(f[1]) ? f[1] : 0, P = Number.isFinite(f[2]) ? f[2] : 0;
      return [h[0] + S * c, h[1] + X * c, h[2] + P * d];
    });
  });
}
const Ae = C.state(null), Se = C.state(""), Xt = C.state("kN"), Tt = C.state("mm"), It = C.state("kN/m\xB2"), Et = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Ee = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Bt = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Rt(e, t) {
  const r = C.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), C.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), g = (E, Z) => {
      E == null ? void 0 : E.forEach((z, k) => {
        const _ = e.elements.val[k];
        if (_) for (let W = 0; W < _.length; W++) Z.set(_[W], [z[W] ?? z[0]]);
      });
    };
    g((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), g((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), g((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, c), g((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, d), g((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, h), g((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, x), g((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, f), g((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, S), g((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, X), g((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, P);
    const L = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, y = t.shellResults.val, I = L == null ? void 0 : L[y];
    Ae.val = Array.isArray(I) && I.length === 2 ? [I[0], I[1]] : null;
    const B = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [c, 0], membraneXX: [d, 0], membraneYY: [h, 0], membraneXY: [x, 0], tranverseShearX: [f, 0], tranverseShearY: [S, 0], vonMises: [X, 0], pressure: [P, 0], displacementX: [(_x = (_w = e.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = e.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = e.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, V = t.shellResults.val, Y = Xt.val, w = Tt.val, b = V === "displacementX" || V === "displacementY" || V === "displacementZ", p = V === "bendingXX" || V === "bendingYY" || V === "bendingXY", i = V === "membraneXX" || V === "membraneYY" || V === "membraneXY", l = V === "vonMises" || V === "pressure", m = V === "tranverseShearX" || V === "tranverseShearY", s = (_C = t.solidResults) == null ? void 0 : _C.val, u = s === "vonMises" || s === "sigmaXX" || s === "sigmaYY" || s === "sigmaZZ" || s === "tauXY" || s === "tauYZ" || s === "tauXZ", M = s === "ux" || s === "uy" || s === "uz", F = It.val, T = u ? Bt[F] : M || b ? Ee[w] : p || i || l || m ? 1 / Et[Y] : 1, v = u ? F : M || b ? w : p ? `${Y}\xB7m/m` : i ? `${Y}/m\xB2` : l ? `${Y}/m\xB2` : m ? `${Y}/m` : "";
    Se.val = v;
    const A = [];
    e.nodes.val.forEach((E, Z) => {
      const z = B[V];
      if (!z || !z[0] || typeof z[0].has != "function") return;
      if (!z[0].has(Z)) {
        A.push(Number.NaN);
        return;
      }
      const k = z[0].get(Z), _ = k ? k[z[1]] ?? 0 : 0;
      A.push(_ * T);
    }), r.val = A;
  }), r;
}
export {
  Tt as a,
  gt as b,
  Xt as c,
  Ie as d,
  It as e,
  _t as g
};
