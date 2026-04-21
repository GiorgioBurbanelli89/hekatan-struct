import { H as ce, B as L, I as de, F as K, G as D, h as Ie, a as te, j as Q, D as O, e as U, C as $, l as Le, i as ke, V as E, A as ee, z as G, J as Me, d as Ee, L as ne, c as H, r as ue, K as he, R as Ze, f as We, N as Ne, U as _e, X as ze, Y as re, Z as He, _ as $e, t as Ge, u as qe, v as Ke, W as De, w as Ue, x as Qe, y as Pe, O as Je } from "./Text-CBH-tcJP.js";
import { v as C, P as Oe, g as j, o as pe } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function je(e, t, r) {
  const o = document.createElement("div"), n = new Oe({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const a = n.addFolder({ title: "Analysis Inputs" });
    a.addBinding(e.supports, "val", { label: "Supports" }), a.addBinding(e.loads, "val", { label: "Loads" }), a.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const a = n.addFolder({ title: "Analysis Outputs" });
    a.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), a.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), a.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), a.addBinding(e.deformedShape, "val", { label: "Deformed shape" });
  }
  return r && n.addBinding(e.solids, "val", { label: "Solids" }), o;
}
function et(e) {
  return { gridSize: C.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: C.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: C.state((e == null ? void 0 : e.nodes) ?? true), elements: C.state((e == null ? void 0 : e.elements) ?? true), elemColumns: C.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: C.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: C.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: C.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: C.state((e == null ? void 0 : e.orientations) ?? false), sections: C.state((e == null ? void 0 : e.sections) ?? true), secColumns: C.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: C.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: C.state((e == null ? void 0 : e.secFloor) ?? -1), supports: C.state((e == null ? void 0 : e.supports) ?? true), loads: C.state((e == null ? void 0 : e.loads) ?? false), deformedShape: C.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: C.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: C.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: C.state((e == null ? void 0 : e.shellResults) ?? "none"), flipAxes: C.state((e == null ? void 0 : e.flipAxes) ?? false), solids: C.state((e == null ? void 0 : e.solids) ?? true), custom3D: C.state((e == null ? void 0 : e.custom3D) ?? true) };
}
function tt(e, t, r) {
  const o = j(), n = new ce(new L(), new de({ color: o.nodePoint }));
  return pe((a, c) => {
    n.material.color.setHex(c.nodePoint);
  }), n.frustumCulled = false, C.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new K(t.val.flat(), 3));
  }), C.derive(() => {
    r.val;
    const a = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = a * r.rawVal);
  }), C.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function nt(e, t, r) {
  const o = j(), n = new D(), a = new Ie(new L(), new te({ color: o.elementLine }));
  pe((f, A) => {
    a.material.color.setHex(A.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), u = new U(new L(), c);
  u.frustumCulled = false, n.add(u);
  let m = new $(o.shellWall), v = new $(o.shellSlab), x = new $(o.shellTri);
  pe((f, A) => {
    m = new $(A.shellWall), v = new $(A.shellSlab), x = new $(A.shellTri), c.opacity = A.shellOpacity, c.needsUpdate = true;
  });
  function g(f, A) {
    const h = Math.abs(A[0] - f[0]), Y = Math.abs(A[1] - f[1]), B = Math.abs(A[2] - f[2]);
    return B > h && B > Y || Y > h && Y > B;
  }
  return C.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const f = t.elemColumns.rawVal, A = t.elemBeams.rawVal, h = r.val, Y = ((_a = e.elements) == null ? void 0 : _a.val) || [], B = Y.filter((V) => {
      if (V.length !== 2) return true;
      const M = h[V[0]], y = h[V[1]];
      if (!M || !y) return true;
      const d = g(M, y);
      return !(d && !f || !d && !A);
    }).map((V) => ot(V).map((M) => [...h[M[0]], ...h[M[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new K(B, 3));
    const X = [], k = [];
    function z(V, M, y, d) {
      const s = [M[0] - V[0], M[1] - V[1], M[2] - V[2]], i = [d[0] - V[0], d[1] - V[1], d[2] - V[2]], l = s[1] * i[2] - s[2] * i[1], p = s[2] * i[0] - s[0] * i[2], w = s[0] * i[1] - s[1] * i[0], F = Math.sqrt(l * l + p * p + w * w);
      return F < 1e-12 ? false : Math.abs(w / F) < 0.5;
    }
    for (const V of Y) if (V.length === 3) {
      const [M, y, d] = V;
      if (h[M] && h[y] && h[d]) {
        X.push(...h[M], ...h[y], ...h[d]);
        for (let s = 0; s < 3; s++) k.push(x.r, x.g, x.b);
      }
    } else if (V.length === 4) {
      const [M, y, d, s] = V;
      if (h[M] && h[y] && h[d] && h[s]) {
        const i = z(h[M], h[y], h[d], h[s]) ? m : v;
        X.push(...h[M], ...h[y], ...h[d]), X.push(...h[M], ...h[d], ...h[s]);
        for (let l = 0; l < 6; l++) k.push(i.r, i.g, i.b);
      }
    }
    X.length > 0 ? (u.geometry.dispose(), u.geometry = new L(), u.geometry.setAttribute("position", new K(X, 3)), u.geometry.setAttribute("color", new K(k, 3)), u.geometry.computeVertexNormals(), u.visible = true) : u.visible = false;
  }), C.derive(() => {
    n.visible = t.elements.val;
  }), n;
}
function ot(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let r = 0; r < e.length; r++) t.push([e[r], e[(r + 1) % e.length]]);
  return t;
}
function Ye(e) {
  const t = j(), r = new Le(e, 20, t.grid, t.grid);
  return r.position.set(0.5 * e, 0.5 * e, 0), r.rotateX(Math.PI / 2), r;
}
function st(e, t, r, o) {
  const n = new D(), a = new ke(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return C.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const u = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((m, v) => {
      const x = r.val[v];
      if (!x) return;
      const g = new U(a, c);
      g.position.set(...x);
      const f = u * o.rawVal;
      g.scale.set(f, f, f), n.add(g);
    });
  }), C.derive(() => {
    if (o.val, !t.supports.rawVal) return;
    const m = 0.05 * t.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((v) => v.scale.set(m, m, m));
  }), C.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function it(e, t, r, o) {
  const n = new D();
  n.name = "loadsGroup";
  function a(c) {
    if (c.length < 2) return 0.12 * t.gridSize.rawVal;
    const u = [1 / 0, 1 / 0, 1 / 0], m = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of c) for (let g = 0; g < 3; g++) u[g] = Math.min(u[g], x[g]), m[g] = Math.max(m[g], x[g]);
    return 0.08 * Math.max(m[0] - u[0], m[1] - u[1], m[2] - u[2], 0.1);
  }
  return C.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((m) => m.dispose()), n.clear();
    const c = r.val, u = a(c);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((m, v) => {
      const x = c[v];
      if (!x) return;
      const g = new E(...m.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const f = new ee(g, new E(...x), 1, 15637248, 0.3, 0.3), A = u * o.rawVal;
      f.scale.set(A, A, A), n.add(f);
    });
  }), C.derive(() => {
    if (o.val, !t.loads.rawVal) return;
    const u = a(r.rawVal) * o.rawVal;
    n.children.forEach((m) => m.scale.set(u, u, u));
  }), C.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function at(e, t, r) {
  const o = new D();
  return C.derive(() => {
    if (!e.nodesIndexes.val) return;
    o.children.forEach((a) => a.dispose()), o.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((a, c) => {
      const u = new G(`${c}`);
      u.position.set(...a), u.updateScale(n * r.rawVal), o.add(u);
    });
  }), C.derive(() => {
    if (r.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    o.children.forEach((a) => a.updateScale(n * r.rawVal));
  }), C.derive(() => {
    o.visible = e.nodesIndexes.val;
  }), o;
}
function rt(e, t, r, o) {
  const n = new D();
  return C.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const a = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((c, u) => {
      const m = new G(`${u}`, void 0, "#001219");
      m.position.set(...lt(c.map((v) => r.rawVal[v]))), m.updateScale(a * o.rawVal), n.add(m);
    });
  }), C.derive(() => {
    if (o.val, !t.elementsIndexes.rawVal) return;
    const a = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(a * o.rawVal));
  }), C.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function lt(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function ct(e, t) {
  const r = new D(), o = 0.05 * e * 1, n = j(), a = new G("X", "red", "transparent"), c = new G(t ? "Z" : "Y", "green", "transparent"), u = new G(t ? "Y" : "Z", "blue", "transparent"), m = new ee(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), v = new ee(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), x = new ee(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), u.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), c.updateScale(0.4 * o), u.updateScale(0.4 * o), m.scale.set(o, o, o), v.scale.set(o, o, o), x.scale.set(o, o, o), r.add(m, v, x, a, c, u), r;
}
function Ce(e, t) {
  const r = new E(...e), n = new E(...t).clone().sub(r), a = n.length(), c = n.dot(new E(1, 0, 0)) / a, u = n.dot(new E(0, 1, 0)) / a, m = n.dot(new E(0, 0, 1)) / a, v = Math.sqrt(c ** 2 + u ** 2);
  let x = new Me().fromArray([[c, u, m], [-u / v, c / v, 0], [-c * m / v, -u * m / v, v]].flat());
  return m === 1 && (x = new Me().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), m === -1 && (x = new Me().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Ee().setFromMatrix3(x);
}
function ge(e, t) {
  return e == null ? void 0 : e.map((r, o) => (9 * r + t[o]) / 10);
}
function oe(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function dt(e, t, r) {
  const o = oe([t, r]), n = oe([e, r]), a = oe([e, t]), c = new E(...o).sub(new E(...n)).normalize(), u = new E(...r).sub(new E(...a)).normalize(), m = c.clone().cross(u).normalize(), v = m.clone().cross(c).normalize();
  return new Ee().makeBasis(c, v, m);
}
function ut(e, t, r, o) {
  const n = new D(), a = new L(), c = new te({ vertexColors: true }), u = [0, 0, 0], m = [1, 0, 0], v = [0, 1, 0], x = [0, 0, 1];
  a.setAttribute("position", new K([...u, ...m, ...u, ...v, ...u, ...x], 3));
  const g = [255, 0, 0], f = [0, 255, 0], A = [0, 0, 255];
  return a.setAttribute("color", new K([...g, ...g, ...f, ...f, ...A, ...A], 3)), C.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((h) => {
      const Y = new Ie(a, c), B = r.rawVal[h[0]], X = r.rawVal[h[1]];
      if (h.length === 2 && (Y.position.set(...ge(B, X)), Y.rotation.setFromRotationMatrix(Ce(B, X))), h.length === 3) {
        const V = r.rawVal[h[2]];
        Y.position.set(...oe([B, X, V])), Y.rotation.setFromRotationMatrix(dt(B, X, V));
      }
      const z = 0.05 * t.gridSize.rawVal * 0.75 * o.rawVal;
      Y.scale.set(z, z, z), n.add(Y);
    }));
  }), C.derive(() => {
    if (o.val, !t.orientations.rawVal) return;
    const Y = 0.05 * t.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((B) => B.scale.set(Y, Y, Y));
  }), C.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function ht(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), r = (e.h * 100).toFixed(0);
    return `${t}x${r}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function pt(e, t, r, o) {
  const n = new D();
  function a(M, y) {
    const d = M / 2, s = y / 2, i = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, -s, 0, d, s, 0, -d, s]), l = new L();
    l.setAttribute("position", new H(i, 3));
    const p = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, s, 0, -d, -s]), w = new L();
    return w.setAttribute("position", new H(p, 3)), { fill: l, outline: w };
  }
  function c(M, y = 24) {
    const d = M / 2, s = new Float32Array(y * 9);
    for (let w = 0; w < y; w++) {
      const F = w / y * Math.PI * 2, S = (w + 1) / y * Math.PI * 2;
      s[w * 9] = 0, s[w * 9 + 1] = 0, s[w * 9 + 2] = 0, s[w * 9 + 3] = 0, s[w * 9 + 4] = d * Math.cos(F), s[w * 9 + 5] = d * Math.sin(F), s[w * 9 + 6] = 0, s[w * 9 + 7] = d * Math.cos(S), s[w * 9 + 8] = d * Math.sin(S);
    }
    const i = new L();
    i.setAttribute("position", new H(s, 3));
    const l = new Float32Array((y + 1) * 3);
    for (let w = 0; w <= y; w++) {
      const F = w / y * Math.PI * 2;
      l[w * 3] = 0, l[w * 3 + 1] = d * Math.cos(F), l[w * 3 + 2] = d * Math.sin(F);
    }
    const p = new L();
    return p.setAttribute("position", new H(l, 3)), { fill: i, outline: p };
  }
  function u(M, y, d, s) {
    const i = d ?? y * 0.08, l = s ?? M * 0.07, p = M / 2, w = y / 2, F = w - i, S = l / 2, I = [];
    function b(T, W, N, _) {
      I.push(0, T, W, 0, N, W, 0, N, _, 0, T, W, 0, N, _, 0, T, _);
    }
    b(-p, -w, p, -F), b(-S, -F, S, F), b(-p, F, p, w);
    const P = new L();
    P.setAttribute("position", new H(new Float32Array(I), 3));
    const R = new Float32Array([0, -p, -w, 0, p, -w, 0, p, -F, 0, S, -F, 0, S, F, 0, p, F, 0, p, w, 0, -p, w, 0, -p, F, 0, -S, F, 0, -S, -F, 0, -p, -F, 0, -p, -w]), Z = new L();
    return Z.setAttribute("position", new H(R, 3)), { fill: P, outline: Z };
  }
  function m(M, y, d) {
    const s = M / 2, i = y / 2, l = s - d, p = i - d, w = [];
    function F(P, R, Z, T) {
      w.push(0, P, R, 0, Z, R, 0, Z, T, 0, P, R, 0, Z, T, 0, P, T);
    }
    F(-s, -i, s, -p), F(-s, p, s, i), F(-s, -p, -l, p), F(l, -p, s, p);
    const S = new L();
    S.setAttribute("position", new H(new Float32Array(w), 3));
    const I = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -l, -p, 0, l, -p, 0, l, -p, 0, l, p, 0, l, p, 0, -l, p, 0, -l, p, 0, -l, -p]), b = new L();
    return b.setAttribute("position", new H(I, 3)), { fill: S, outline: b };
  }
  function v(M, y, d) {
    const s = M / 2, i = y / 2, l = s - d, p = i - d, w = new L(), F = new Float32Array([0, -l, -p, 0, l, -p, 0, l, p, 0, -l, -p, 0, l, p, 0, -l, p]);
    w.setAttribute("position", new H(F, 3));
    const S = [];
    function I(Z, T, W, N) {
      S.push(0, Z, T, 0, W, T, 0, W, N, 0, Z, T, 0, W, N, 0, Z, N);
    }
    I(-s, -i, s, -p), I(-s, p, s, i), I(-s, -p, -l, p), I(l, -p, s, p);
    const b = new L();
    b.setAttribute("position", new H(new Float32Array(S), 3));
    const P = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -l, -p, 0, l, -p, 0, l, -p, 0, l, p, 0, l, p, 0, -l, p, 0, -l, p, 0, -l, -p]), R = new L();
    return R.setAttribute("position", new H(P, 3)), { concFill: w, steelFillGeom: b, outline: R };
  }
  function x(M, y, d) {
    const s = [], i = [[0, -M / 2, -y / 2], [0, -M / 2 + d, -y / 2], [0, -M / 2 + d, y / 2 - d], [0, M / 2, y / 2 - d], [0, M / 2, y / 2], [0, -M / 2, y / 2]], l = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const S of l) s.push(...i[S]);
    const p = new L();
    p.setAttribute("position", new H(new Float32Array(s), 3));
    const w = [];
    for (let S = 0; S < i.length; S++) {
      const I = (S + 1) % i.length;
      w.push(...i[S], ...i[I]);
    }
    const F = new L();
    return F.setAttribute("position", new H(new Float32Array(w), 3)), { fill: p, outline: F };
  }
  function g(M, y, d, s) {
    const i = s / 2, l = [], p = [[0, -M - i, -y / 2], [0, -d - i, -y / 2], [0, -d - i, y / 2 - d], [0, -i, y / 2 - d], [0, -i, y / 2], [0, -M - i, y / 2]], w = [[0, i, -y / 2], [0, i + d, -y / 2], [0, i + d, y / 2 - d], [0, M + i, y / 2 - d], [0, M + i, y / 2], [0, i, y / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const P of F) l.push(...p[P]);
    for (const P of F) l.push(...w[P]);
    const S = new L();
    S.setAttribute("position", new H(new Float32Array(l), 3));
    const I = [];
    for (const P of [p, w]) for (let R = 0; R < P.length; R++) {
      const Z = (R + 1) % P.length;
      I.push(...P[R], ...P[Z]);
    }
    const b = new L();
    return b.setAttribute("position", new H(new Float32Array(I), 3)), { fill: S, outline: b };
  }
  function f(M, y, d, s) {
    const i = y / 2, l = M, p = [[0, -l, -i], [0, -l, -i + d], [0, -s, -i + d], [0, -s, i - d], [0, -l, i - d], [0, -l, i], [0, 0, i], [0, 0, -i]], w = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
    for (const P of w) F.push(...p[P]);
    const S = new L();
    S.setAttribute("position", new H(new Float32Array(F), 3));
    const I = [];
    for (let P = 0; P < p.length; P++) {
      const R = (P + 1) % p.length;
      I.push(...p[P], ...p[R]);
    }
    const b = new L();
    return b.setAttribute("position", new H(new Float32Array(I), 3)), { fill: S, outline: b };
  }
  function A(M, y, d, s, i) {
    const l = y / 2, p = i / 2, w = [], F = [[0, -M, -l], [0, -M, -l + d], [0, -p - s, -l + d], [0, -p - s, l - d], [0, -M, l - d], [0, -M, l], [0, -p, l], [0, -p, -l]], S = F.map((Z) => [Z[0], -Z[1], Z[2]]), I = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of I) w.push(...F[Z]);
    for (const Z of I) w.push(...S[Z]);
    const b = new L();
    b.setAttribute("position", new H(new Float32Array(w), 3));
    const P = [];
    for (const Z of [F, S]) for (let T = 0; T < Z.length; T++) {
      const W = (T + 1) % Z.length;
      P.push(...Z[T], ...Z[W]);
    }
    const R = new L();
    return R.setAttribute("position", new H(new Float32Array(P), 3)), { fill: b, outline: R };
  }
  function h(M, y, d, s) {
    const i = M / 2, l = y / 2, p = s / 2, w = [[0, -p, -l], [0, p, -l], [0, p, l - d], [0, i, l - d], [0, i, l], [0, -i, l], [0, -i, l - d], [0, -p, l - d]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], S = [];
    for (const R of F) S.push(...w[R]);
    const I = new L();
    I.setAttribute("position", new H(new Float32Array(S), 3));
    const b = [];
    for (let R = 0; R < w.length; R++) {
      const Z = (R + 1) % w.length;
      b.push(...w[R], ...w[Z]);
    }
    const P = new L();
    return P.setAttribute("position", new H(new Float32Array(b), 3)), { fill: I, outline: P };
  }
  function Y(M, y, d = 24) {
    const s = M / 2, i = s - y, l = [];
    for (let S = 0; S < d; S++) {
      const I = S / d * Math.PI * 2, b = (S + 1) / d * Math.PI * 2, P = Math.cos(I), R = Math.sin(I), Z = Math.cos(b), T = Math.sin(b);
      l.push(0, s * P, s * R, 0, s * Z, s * T, 0, i * Z, i * T), l.push(0, s * P, s * R, 0, i * Z, i * T, 0, i * P, i * R);
    }
    const p = new L();
    p.setAttribute("position", new H(new Float32Array(l), 3));
    const w = [];
    for (let S = 0; S < d; S++) {
      const I = S / d * Math.PI * 2, b = (S + 1) / d * Math.PI * 2;
      w.push(0, s * Math.cos(I), s * Math.sin(I), 0, s * Math.cos(b), s * Math.sin(b)), w.push(0, i * Math.cos(I), i * Math.sin(I), 0, i * Math.cos(b), i * Math.sin(b));
    }
    const F = new L();
    return F.setAttribute("position", new H(new Float32Array(w), 3)), { fill: p, outline: F };
  }
  const B = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), X = new te({ color: 52479 }), k = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), z = new te({ color: 16750848 });
  function V(M, y) {
    const d = Math.abs(y[0] - M[0]), s = Math.abs(y[1] - M[1]), i = Math.abs(y[2] - M[2]);
    return i > d && i > s || s > d && s > i;
  }
  return C.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const M = t.secColumns.rawVal, y = t.secBeams.rawVal;
    if (!M && !y) {
      n.children.forEach((p) => {
        p instanceof G && p.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((p) => {
      p instanceof G && p.dispose();
    }), n.clear();
    const d = (_a = e.elements) == null ? void 0 : _a.val, s = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!d || !s) return;
    const i = s.sectionShapes, l = t.secFloor.rawVal;
    d.forEach((p, w) => {
      if (p.length !== 2) return;
      const F = r.rawVal[p[0]], S = r.rawVal[p[1]];
      if (!F || !S) return;
      const I = V(F, S);
      if (I && !M || !I && !y) return;
      if (l >= 0) {
        const T = Math.min(F[1], S[1]);
        Math.max(F[1], S[1]);
        const W = t.gridSize.rawVal || 3;
        if (Math.floor(T / W + 0.01) !== l) return;
      }
      const b = i == null ? void 0 : i.get(w);
      if (!b) return;
      const P = [(F[0] + S[0]) / 2, (F[1] + S[1]) / 2, (F[2] + S[2]) / 2], R = Ce(F, S);
      if (b.type === "CFT") {
        const T = v(b.b, b.h, b.tw ?? b.b * 0.05), W = new U(T.concFill, B);
        W.position.set(...P), W.rotation.setFromRotationMatrix(R), n.add(W);
        const N = new U(T.steelFillGeom, k);
        N.position.set(...P), N.rotation.setFromRotationMatrix(R), n.add(N);
        const _ = new ne(T.outline, z);
        _.position.set(...P), _.rotation.setFromRotationMatrix(R), n.add(_);
      } else {
        let T, W, N;
        switch (b.type) {
          case "rect":
            T = a(b.b, b.h), W = B, N = X;
            break;
          case "circ":
            T = c(b.d), W = B, N = X;
            break;
          case "I":
            T = u(b.b, b.h, b.tf, b.tw), W = k, N = z;
            break;
          case "HSS":
            T = m(b.b, b.h, b.tw ?? b.b * 0.05), W = k, N = z;
            break;
          case "CFT":
            T = v(b.b, b.h, b.tw ?? b.b * 0.05), W = k, N = z;
            break;
          case "L":
            T = x(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3), W = k, N = z;
            break;
          case "2L":
            T = g(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3, b.dis ?? 0.01), W = k, N = z;
            break;
          case "C":
          case "coldC":
            T = f(b.b, b.h, b.tf ?? b.t ?? 3e-3, b.tw ?? b.t ?? 3e-3), W = k, N = z;
            break;
          case "2C":
            T = A(b.b, b.h, b.tf ?? 5e-3, b.tw ?? 5e-3, b.dis ?? 0.01), W = k, N = z;
            break;
          case "T":
            T = h(b.b, b.h, b.tf ?? 0.01, b.tw ?? 6e-3), W = k, N = z;
            break;
          case "pipe":
            T = Y(b.d, b.tw ?? b.d * 0.05), W = k, N = z;
            break;
          default:
            return;
        }
        const _ = new U(T.fill, W);
        _.position.set(...P), _.rotation.setFromRotationMatrix(R), n.add(_);
        const q = new ne(T.outline, N);
        q.position.set(...P), q.rotation.setFromRotationMatrix(R), n.add(q);
      }
      const Z = ht(b);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(b.type) ? "#ff9900" : "#00ccff", N = new G(Z, W, "transparent");
        N.position.set(P[0], P[1], P[2]);
        const _ = 0.05 * t.gridSize.rawVal * 0.5;
        N.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(N);
      }
    });
  }), o && C.derive(() => {
    if (o.val, !t.sections.rawVal) return;
    const M = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((y) => {
      y instanceof G && y.updateScale(M * o.rawVal);
    });
  }), C.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class le extends D {
  constructor(t, r, o, n, a, c, u) {
    super();
    const m = new ue().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), v = m.getPoints(), x = new L().setFromPoints(v);
    this.lines = new ne(x, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), u && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new he(m), f = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new U(g, f), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), u && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new G(`${a[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = oe([t, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Te extends D {
  constructor(t, r, o, n, a, c, u) {
    super();
    const m = a[0] * o / (a[0] + a[1]), v = a[0] * a[1] > 0;
    if (this.text = new G(`${a[0].toFixed(4)}`), this.text2 = new G(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = ge(t, r), this.text2Position = ge(r, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), v) {
      const x = new ue().moveTo(0, 0).lineTo(0, c[0]).lineTo(m, 0).lineTo(0, 0), g = new ue().moveTo(m, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(m, 0), f = x.getPoints(), A = g.getPoints(), h = new L().setFromPoints(f), Y = new L().setFromPoints(A), B = new te({ color: j().resultOutline });
      this.lines = new ne(h, B), this.lines2 = new ne(Y, B), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), u && this.lines.rotateX(Math.PI / 2), u && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const X = new he(x), k = new he(g), z = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), V = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new U(X, z), this.mesh2 = new U(k, V), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), u && this.mesh.rotateX(Math.PI / 2), u && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const x = new ue().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), g = x.getPoints(), f = new L().setFromPoints(g);
      this.lines = new ne(f, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), u && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const A = new he(x), h = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new U(A, h), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), u && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Be = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Be || {});
function mt(e, t, r, o) {
  const n = new D(), a = { normals: le, shearsY: le, shearsZ: le, torsions: le, bendingsY: Te, bendingsZ: Te };
  return C.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, r.val, t.frameResults.val == "none") return;
    n.children.forEach((u) => u.dispose()), n.clear();
    const c = Be[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((u, m) => {
      var _a2, _b2;
      const v = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[m]) ?? [0, 1], x = r.rawVal[v[0]], g = r.rawVal[v[1]], f = new E(...g).distanceTo(new E(...x)), A = ft((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), h = u == null ? void 0 : u.map((k) => k / (A === 0 ? 1 : A)), Y = Ce(x, g), B = new a[c](x, g, f, Y, u ?? [0, 0], h ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), X = 0.05 * t.gridSize.rawVal;
      B.updateScale(X * o.rawVal), n.add(B);
    });
  }), C.derive(() => {
    if (o.val, t.frameResults.rawVal == "none") return;
    const c = 0.05 * t.gridSize.val;
    n.children.forEach((u) => u.updateScale(c * o.rawVal));
  }), C.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function ft(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((r) => {
    const o = Math.max(...r ?? [0, 0]);
    o > t && (t = o);
  }), t;
}
class wt extends D {
  constructor(t, r, o) {
    super();
    const n = r === Ve.reactions;
    o[0] && (this.xText1 = new G(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new G(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new G(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new G(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new G(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new G(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new ee(new E(1, 0, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new ee(new E(0, 1, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new ee(new E(0, 0, 1), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function vt(e, t, r, o) {
  const n = new D();
  return C.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((u) => u.dispose()), n.clear();
    const a = Ve[t.nodeResults.rawVal], c = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((u, m) => {
      const v = new wt(r.rawVal[m], a, u ?? [0, 0, 0, 0, 0, 0]);
      v.updateScale(c * o.rawVal), n.add(v);
    });
  }), C.derive(() => {
    if (o.val, t.nodeResults.rawVal == "none") return;
    const a = 0.05 * t.gridSize.val;
    n.children.forEach((c) => c.updateScale(a * o.rawVal));
  }), C.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function xt({ drawingObj: e, gridObj: t, scene: r, camera: o, controls: n, gridSize: a, derivedDisplayScale: c, rendererElm: u, viewerRender: m }) {
  const v = new Ze(), x = new We(), g = new U(new Ne(a, a), new Q({ side: O })), f = new ce(new L(), new de()), A = new ce(new L(), new de({ color: "gray" })), h = new ce(new L(), new de({ color: "orange", size: 0.8 }));
  r.add(h), f.geometry.setAttribute("position", new K(e.points.rawVal.flat(), 3)), f.geometry.computeBoundingSphere(), f.frustumCulled = false, A.frustumCulled = false, r.add(A), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), C.derive(() => {
    e.gridTarget && (Mt(t, { position: new E(...e.gridTarget.val.position), quaternion: new _e().setFromEuler(new ze(...e.gridTarget.val.rotation)) }, m), g.position.set(...e.gridTarget.val.position), g.quaternion.setFromEuler(new ze(...e.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), C.derive(() => {
    f.geometry.setAttribute("position", new K(e.points.val.flat(), 3)), f.geometry.computeBoundingSphere();
  }), C.derive(() => {
    const z = 0.05 * a * 0.5 * c.val;
    A.material.size = z, v.params.Points.threshold = 0.4 * z;
  }), C.derive(() => {
    var _a;
    const z = e.points.val ?? [], M = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], y = [];
    for (const s of M) {
      const [i, l, p] = z[s];
      y.push(i, l, p);
    }
    const d = new L();
    d.setAttribute("position", new K(y, 3)), h.geometry.dispose(), h.geometry = d;
  });
  let Y = false, B = 0;
  u.addEventListener("pointerdown", () => {
    Y = true;
  }), u.addEventListener("pointerup", () => {
    Y = false;
  }), u.addEventListener("pointermove", () => {
    Y && B++;
  }), u.addEventListener("click", (z) => {
    if (B > 5) {
      B = 0;
      return;
    }
    B = 0, x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    const V = v.intersectObject(g);
    if (V.length) {
      let M = V[0].point;
      (z.ctrlKey || z.metaKey) && (M = new E(Math.round(V[0].point.x), Math.round(V[0].point.y), Math.round(V[0].point.z))), e.points.val = [...e.points.rawVal, M.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), u.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), u.addEventListener("pointermove", (z) => {
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    const V = v.intersectObject(g);
    if (A.geometry.deleteAttribute("position"), V.length) {
      let M = V[0].point;
      (z.ctrlKey || z.metaKey) && (M = new E(Math.round(V[0].point.x), Math.round(V[0].point.y), Math.round(V[0].point.z))), A.geometry.setAttribute("position", new K(M.toArray(), 3));
    }
    m();
  }), u.addEventListener("pointermove", (z) => {
    var _a;
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    let V = false;
    const M = v.intersectObject(f), y = v.intersectObject(g);
    if (M.length && y.length) {
      const d = new E(...e.points.rawVal[M[0].index]), s = new E(...y[0].point), i = d.sub(s), l = (_a = y[0].face) == null ? void 0 : _a.normal;
      l.transformDirection(g.matrixWorld), Math.abs(i.dot(l)) < 1e-4 && (V = true);
    }
    A.visible = !V;
  });
  let X = false, k;
  u.addEventListener("pointermove", (z) => {
    var _a;
    if (!B) return;
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    let V = false;
    const M = v.intersectObject(f), y = v.intersectObject(g);
    if (M.length && y.length) {
      const s = new E(...e.points.rawVal[M[0].index]), i = new E(...y[0].point), l = s.sub(i), p = (_a = y[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(g.matrixWorld), Math.abs(l.dot(p)) < 1e-4 && (V = true);
    }
    if (V && B < 5 && (X = true, n.enabled = false, k = M[0].index), !X || B % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (k !== void 0) {
      let s = y[0].point;
      (z.ctrlKey || z.metaKey) && (s = new E(Math.round(s.x), Math.round(s.y), Math.round(s.z))), d[k] = s.toArray();
    }
    e.points.val = d;
  }), u.addEventListener("pointerup", () => {
    n.enabled = true, X = false;
  }), u.addEventListener("contextmenu", (z) => {
    var _a;
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    let V = false;
    const M = v.intersectObject(f), y = v.intersectObject(g);
    if (M.length && y.length) {
      const i = new E(...e.points.rawVal[M[0].index]), l = new E(...y[0].point), p = i.sub(l), w = (_a = y[0].face) == null ? void 0 : _a.normal;
      w.transformDirection(g.matrixWorld), Math.abs(p.dot(w)) < 1e-4 && (V = true);
    }
    if (!V) return;
    const d = [...e.points.rawVal];
    if (d.splice(M[0].index, 1), e.points.val = d, !e.polylines) return;
    const s = e.polylines.rawVal.map((i) => i.filter((l) => l !== M[0].index)).map((i) => i.map((l) => l > M[0].index ? l - 1 : l)).filter((i) => i.length);
    s.push([]), e.polylines.val = s;
  });
}
function Mt(e, t, r) {
  const a = Math.round(14.999999999999998), c = { position: e.position.clone(), quaternion: e.quaternion.clone() }, u = setInterval(v, 1e3 / 30);
  let m = 0;
  function v() {
    m++;
    const x = m / a;
    e.position.lerpVectors(c.position, t.position, x), e.quaternion.slerpQuaternions(c.quaternion, t.quaternion, x), r && r(), m == a && clearInterval(u);
  }
}
class Re {
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
    const o = 1 / this.n, n = new $(), a = new $();
    this.lut.length = 0, this.lut.push(new $(this.map[0][1]));
    for (let c = 1; c < r; c++) {
      const u = c * o;
      for (let m = 0; m < this.map.length - 1; m++) if (u > this.map[m][0] && u <= this.map[m + 1][0]) {
        const v = this.map[m][0], x = this.map[m + 1][0];
        n.setHex(this.map[m][1], re), a.setHex(this.map[m + 1][1], re);
        const g = new $().lerpColors(n, a, (u - v) / (x - v));
        this.lut.push(g);
      }
    }
    return this.lut.push(new $(this.map[this.map.length - 1][1])), this;
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
    const c = 1 / this.n, u = new $(), m = new $(), v = new $();
    for (let x = 1; x >= 0; x -= c) for (let g = this.map.length - 1; g >= 0; g--) if (x < this.map[g][0] && x >= this.map[g - 1][0]) {
      const f = this.map[g - 1][0], A = this.map[g][0];
      u.setHex(this.map[g - 1][1], re), m.setHex(this.map[g][1], re), v.lerpColors(u, m, (x - f) / (A - f)), n[a * 4] = Math.round(v.r * 255), n[a * 4 + 1] = Math.round(v.g * 255), n[a * 4 + 2] = Math.round(v.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(o, 0, 0), t;
  }
}
const ye = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function yt(e, t, r) {
  const o = new Re(), n = new $(), a = new U(new L(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, C.derive(() => {
    a.geometry.setAttribute("position", new K(e.val.flat(), 3));
    const c = [];
    for (const h of t.val) h.length === 3 ? c.push(h[0], h[1], h[2]) : h.length === 4 && (c.push(h[0], h[1], h[2]), c.push(h[0], h[2], h[3]));
    a.geometry.setIndex(new $e(c, 1)), a.geometry.setAttribute("color", new K(e.val.map(() => [0, 0, 0]).flat(), 3));
    const u = r.val.filter((h) => Number.isFinite(h));
    let m, v;
    const x = Se.val;
    if (x ? (v = x[0], m = x[1]) : (m = u.length ? Math.max(...u) : 1, v = u.length ? Math.min(...u) : 0, v >= 0 && m > 0 && (v = 0)), m === v) {
      const h = Math.max(Math.abs(m) * 1e-6, 1e-9);
      m += h, v -= h;
    }
    const g = x && x[0] > x[1], f = Math.min(v, m), A = Math.max(v, m);
    o.setMin(f), o.setMax(A);
    for (let h = 0; h < r.val.length; h++) {
      const Y = r.val[h];
      if (!Number.isFinite(Y)) {
        a.geometry.attributes.color.setXYZ(h, 0.3, 0.3, 0.3);
        continue;
      }
      const B = g ? A + f - Y : Y, X = o.getColor(B) ?? new $(0, 0, 0);
      n.copy(X).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(h, n.r, n.g, n.b);
    }
  }), a;
}
function bt(e, t, r, o) {
  const n = yt(r, e.elements, o);
  return C.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const gt = 6, be = 10, Ft = 0.012;
function Ct(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Vt(e, t, r, o) {
  if (!r && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && r) {
    const a = r[e];
    if (a && a.has(t)) return a.get(t);
  }
  return null;
}
function St(e, t, r, o) {
  const n = new D(), a = new Re();
  a.setColorMap("rainbow");
  const c = new $(), u = C.state([]);
  return C.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const m = r.val, v = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], x = Ct(t.frameResults.val);
    if (n.children.forEach((w) => {
      w.geometry && w.geometry.dispose(), w.material && w.material.dispose();
    }), n.clear(), !x || v.length === 0 || m.length === 0) {
      u.val = [];
      return;
    }
    const g = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, f = (_c = e.deformOutputs) == null ? void 0 : _c.val, A = [], h = [];
    for (let w = 0; w < v.length; w++) {
      if (v[w].length !== 2) continue;
      const S = Vt(x, w, g, f);
      S && (A.push(S[0], S[1]), h.push({ idx: w, vals: S }));
    }
    if (A.length === 0) {
      u.val = [];
      return;
    }
    const Y = Math.min(...A), B = Math.max(...A);
    a.setMin(Y), a.setMax(B), u.val = A;
    const X = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
    for (const w of m) for (let F = 0; F < 3; F++) X[F] = Math.min(X[F], w[F]), k[F] = Math.max(k[F], w[F]);
    const V = Math.max(k[0] - X[0], k[1] - X[1], k[2] - X[2], 1) * Ft, M = [], y = [], d = [];
    let s = 0;
    for (const { idx: w, vals: F } of h) {
      const S = v[w], I = m[S[0]], b = m[S[1]];
      if (!I || !b) continue;
      const P = new E(b[0] - I[0], b[1] - I[1], b[2] - I[2]), R = P.length();
      if (R < 1e-10) continue;
      P.normalize();
      const Z = Math.abs(P.y) < 0.99 ? new E(0, 1, 0) : new E(1, 0, 0), T = new E().crossVectors(P, Z).normalize(), W = new E().crossVectors(P, T).normalize(), N = be + 1, _ = gt;
      for (let q = 0; q < N; q++) {
        const J = q / be, se = I[0] + P.x * R * J, ie = I[1] + P.y * R * J, me = I[2] + P.z * R * J, fe = F[0] + (F[1] - F[0]) * J, ae = a.getColor(fe) ?? new $(0, 0, 0);
        c.copy(ae).convertSRGBToLinear();
        for (let we = 0; we < _; we++) {
          const Ae = we / _ * Math.PI * 2, ve = Math.cos(Ae), xe = Math.sin(Ae);
          M.push(se + (T.x * ve + W.x * xe) * V, ie + (T.y * ve + W.y * xe) * V, me + (T.z * ve + W.z * xe) * V), y.push(c.r, c.g, c.b);
        }
      }
      for (let q = 0; q < be; q++) for (let J = 0; J < _; J++) {
        const se = (J + 1) % _, ie = s + q * _ + J, me = s + q * _ + se, fe = s + (q + 1) * _ + J, ae = s + (q + 1) * _ + se;
        d.push(ie, me, ae), d.push(ie, ae, fe);
      }
      s += N * _;
    }
    if (M.length === 0) return;
    const i = new L();
    i.setAttribute("position", new K(M, 3)), i.setAttribute("color", new K(y, 3)), i.setIndex(d), i.computeVertexNormals();
    const l = new Q({ vertexColors: true, side: O }), p = new U(i, l);
    p.frustumCulled = false, n.add(p);
  }), n.__colorMapValues = u, n;
}
function Xe(e, t = 8) {
  const r = document.createElement("div");
  r.id = "legend";
  const o = document.createElement("div");
  o.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", r.appendChild(o), setTimeout(() => {
    C.derive(() => {
      o.textContent = Fe.val ? `[${Fe.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (m, v) => v / t).reverse();
  let a, c;
  n.forEach((m, v) => {
    a = document.createElement("div"), a.id = `marker-${v}`, a.className = "marker", a.style.marginTop = v == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, c = document.createElement("p"), c.id = `marker-text-${v}`, a.append(c), r.append(a);
  });
  const u = [];
  return r.querySelectorAll("p").forEach((m) => u.push(m)), setTimeout(() => {
    C.derive(() => {
      n.forEach((m, v) => {
        const x = u[v];
        x && (x.innerText = At(e.val, m).toString());
      });
    });
  }), r;
}
function At(e, t) {
  const r = Se.val;
  if (r) return (r[0] + t * (r[1] - r[0])).toPrecision(3);
  const o = e.filter((c) => Number.isFinite(c));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const a = Math.max(...o);
  return n >= 0 && a > 0 && (n = 0), (n + t * (a - n)).toPrecision(3);
}
function It({ mesh: e, settingsObj: t, drawingObj: r, objects3D: o, solids: n }) {
  Je.DEFAULT_UP = new E(0, 0, 1);
  const a = document.createElement("div"), c = new Ge(), u = new qe(45, 1, 0.1, 2 * 1e6), m = new Ke(-10, 10, 10, -10, -1e3, 2e6);
  let v = u;
  const x = new De({ antialias: true });
  x.localClippingEnabled = true;
  const g = new Ue(u, x.domElement), f = et(t), A = C.derive(() => f.displayScale.val === 0 ? 1 : f.displayScale.val > 0 ? f.displayScale.val : -1 / f.displayScale.val), h = zt(e, f);
  let Y = Ye(f.gridSize.rawVal);
  a.appendChild(je(f, e, n)), a.setAttribute("id", "viewer"), a.appendChild(x.domElement), x.setPixelRatio(window.devicePixelRatio);
  const B = j();
  x.setClearColor(B.background, 1);
  const X = f.gridSize.rawVal, k = X * 0.5 + X * 0.5 / Math.tan(45 * 0.5);
  u.position.set(0.5 * X, 0.8 * -k, 0.5 * X), g.target.set(0.5 * X, 0.5 * X, 0), g.minDistance = 1, g.maxDistance = k * 2.5, a.__settings = f, g.zoomSpeed = 1, g._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, g.update(), c.add(Y, ct(f.gridSize.rawVal, f.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const s of d) {
      const i = (_a = s.target) == null ? void 0 : _a.clientWidth, l = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || l === 0) continue;
      u.aspect = i / l, u.updateProjectionMatrix();
      const p = i / l, w = m.top;
      m.left = -w * p, m.right = w * p, m.updateProjectionMatrix(), x.setSize(i, l), V();
    }
  }).observe(a), g.addEventListener("change", V), C.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, f.displayScale.val, f.nodes.val, f.elements.val, f.elemColumns.val, f.elemBeams.val, f.nodesIndexes.val, f.elementsIndexes.val, f.orientations.val, f.sections.val, f.secColumns.val, f.secBeams.val, f.secFloor.val, f.supports.val, f.loads.val, f.deformedShape.val, f.nodeResults.val, f.frameResults.val, f.shellResults.val, setTimeout(V);
  });
  function V() {
    x.render(c, v);
  }
  function M(d) {
    v = d, g.object = d, g.update(), V();
  }
  if (e) {
    c.add(tt(f, h, A), nt(e, f, h), at(f, h, A), rt(e, f, h, A), st(e, f, h, A), it(e, f, h, A), ut(e, f, h, A), pt(e, f, h, A), vt(e, f, h, A), mt(e, f, h, A));
    const d = Pt(e, f), s = bt(e, f, h, d), i = Xe(d);
    c.add(s), a.appendChild(i);
    const l = St(e, f, h);
    c.add(l);
    const p = l.__colorMapValues, w = Xe(p);
    w.id = "frame-legend", a.appendChild(w), C.derive(() => {
      const F = f.shellResults.val != "none", S = f.frameResults.val.startsWith("contour:");
      i.hidden = !F, s.visible = F, w.hidden = !S;
    });
  }
  if (n) {
    const d = new Qe(16777215, 0.5);
    c.add(d);
    const s = new Pe(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, c.add(s);
    const i = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = i, s.shadow.camera.top = i, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const l = new Pe(16777215, 0.5);
    l.color.setHSL(11, 43, 96), l.position.set(-10, 0, 30), c.add(l), C.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), V());
    }), C.derive(() => {
      n.rawVal.forEach((p) => p.visible = f.solids.val), V();
    });
  }
  o && (C.derive(() => {
    var _a;
    const d = o.val;
    ((_a = o.oldVal) == null ? void 0 : _a.length) && c.remove(...o.oldVal), f.custom3D.val && d.length && c.add(...o.rawVal), V();
  }), C.derive(() => {
    const d = f.custom3D.val, s = o.rawVal;
    (s == null ? void 0 : s.length) && (d ? c.add(...s) : c.remove(...s), V());
  })), r && xt({ drawingObj: r, gridObj: Y, scene: c, camera: u, controls: g, gridSize: X, derivedDisplayScale: A, rendererElm: x.domElement, viewerRender: V }), pe((d, s) => {
    x.setClearColor(s.background, 1), c.remove(Y), Y.geometry.dispose(), Y.material.dispose(), Y = Ye(f.gridSize.rawVal), c.add(Y), a.style.setProperty("--awatif-legend-color", s.legendMarker), V();
  });
  const y = { scene: c, perspCamera: u, orthoCamera: m, get camera() {
    return v;
  }, controls: g, renderer: x, rendererElm: x.domElement, render: V, setActiveCamera: M, settings: f };
  return a.__ctx = y, a;
}
function zt(e, t) {
  return C.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || r.length === 0) return r;
    let n = 1 / 0, a = 1 / 0, c = 1 / 0, u = -1 / 0, m = -1 / 0, v = -1 / 0;
    for (const h of r) h[0] < n && (n = h[0]), h[0] > u && (u = h[0]), h[1] < a && (a = h[1]), h[1] > m && (m = h[1]), h[2] < c && (c = h[2]), h[2] > v && (v = h[2]);
    const x = Math.sqrt((u - n) ** 2 + (m - a) ** 2 + (v - c) ** 2);
    let g = 0;
    o.forEach((h) => {
      const Y = Math.sqrt(h[0] ** 2 + h[1] ** 2 + h[2] ** 2);
      Y > g && (g = Y);
    });
    const A = g > 1e-30 && x > 1e-30 ? 0.07 * x / g : 1;
    return r.map((h, Y) => {
      var _a2;
      const B = ((_a2 = o.get(Y)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return h.map((X, k) => X + B[k] * A);
    });
  });
}
const Se = C.state(null), Fe = C.state("");
function Pt(e, t) {
  const r = C.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), C.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), h = (s, i) => {
      s == null ? void 0 : s.forEach((l, p) => {
        const w = e.elements.val[p];
        if (w) for (let F = 0; F < w.length; F++) i.set(w[F], [l[F] ?? l[0]]);
      });
    };
    h((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), h((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), h((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, c), h((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, u), h((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, m), h((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, v), h((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, x), h((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), h((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, f), h((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, A);
    const Y = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, B = t.shellResults.val, X = Y == null ? void 0 : Y[B];
    Se.val = Array.isArray(X) && X.length === 2 ? [X[0], X[1]] : null;
    const k = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [c, 0], membraneXX: [u, 0], membraneYY: [m, 0], membraneXY: [v, 0], tranverseShearX: [x, 0], tranverseShearY: [g, 0], vonMises: [f, 0], pressure: [A, 0], displacementX: [(_x = (_w = e.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = e.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = e.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, z = t.shellResults.val, V = z === "displacementX" || z === "displacementY" || z === "displacementZ", M = V ? 1e3 : 1, y = V ? "mm" : z === "bendingXX" || z === "bendingYY" || z === "bendingXY" ? "kN\xB7m/m" : z === "membraneXX" || z === "membraneYY" || z === "membraneXY" ? "kN/m" : z === "vonMises" || z === "pressure" ? "kN/m\xB2" : z === "tranverseShearX" || z === "tranverseShearY" ? "kN/m" : "";
    Fe.val = y;
    const d = [];
    e.nodes.val.forEach((s, i) => {
      const l = k[z];
      if (!l || !l[0] || typeof l[0].has != "function") return;
      if (!l[0].has(i)) {
        d.push(Number.NaN);
        return;
      }
      const p = l[0].get(i), w = p ? p[l[1]] ?? 0 : 0;
      d.push(w * M);
    }), r.val = d;
  }), r;
}
export {
  yt as a,
  Xe as b,
  It as g
};
