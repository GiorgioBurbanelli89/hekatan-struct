import { x as ct, B as Y, y as dt, F as K, i as U, e as It, a as et, M as Q, z as O, g as D, r as G, G as Yt, f as Lt, V as B, A as tt, w as q, H as yt, p as Et, L as nt, c as $, n as ht, I as ut, R as Xt, b as kt, J as Zt, K as Wt, N as At, U as rt, X as Ht, Y as _t, q as $t, s as Gt, t as qt, W as Nt, u as Kt, v as Ut, D as St, O as Dt } from "./Text-Cin90tvN.js";
import { v as F, P as Qt, g as j, o as pt } from "./theme-CzzIlc4y.js";
import "./styles-BtnDi-1k.js";
function Jt(t, e, l) {
  const o = document.createElement("div"), n = new Qt({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (e == null ? void 0 : e.nodes) && (n.addBinding(t.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(t.nodes, "val", { label: "Nodes" }), n.addBinding(t.elements, "val", { label: "Elements" }), n.addBinding(t.elemColumns, "val", { label: "  Columnas" }), n.addBinding(t.elemBeams, "val", { label: "  Vigas" }), n.addBinding(t.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(t.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(t.orientations, "val", { label: "Orientations" }), n.addBinding(t.sections, "val", { label: "Sections" }), n.addBinding(t.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(t.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(t.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (e == null ? void 0 : e.nodeInputs) || (e == null ? void 0 : e.elementInputs)) {
    const r = n.addFolder({ title: "Analysis Inputs" });
    r.addBinding(t.supports, "val", { label: "Supports" }), r.addBinding(t.loads, "val", { label: "Loads" });
  }
  if ((e == null ? void 0 : e.deformOutputs) || (e == null ? void 0 : e.analyzeOutputs)) {
    const r = n.addFolder({ title: "Analysis Outputs" });
    r.addBinding(t.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), r.addBinding(t.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), r.addBinding(t.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), r.addBinding(t.deformedShape, "val", { label: "Deformed shape" });
  }
  return l && n.addBinding(t.solids, "val", { label: "Solids" }), o;
}
function Ot(t) {
  return { gridSize: F.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: F.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: F.state((t == null ? void 0 : t.nodes) ?? true), elements: F.state((t == null ? void 0 : t.elements) ?? true), elemColumns: F.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: F.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: F.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: F.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: F.state((t == null ? void 0 : t.orientations) ?? false), sections: F.state((t == null ? void 0 : t.sections) ?? true), secColumns: F.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: F.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: F.state((t == null ? void 0 : t.secFloor) ?? -1), supports: F.state((t == null ? void 0 : t.supports) ?? true), loads: F.state((t == null ? void 0 : t.loads) ?? false), deformedShape: F.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: F.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: F.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: F.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: F.state((t == null ? void 0 : t.flipAxes) ?? false), solids: F.state((t == null ? void 0 : t.solids) ?? true) };
}
function jt(t, e, l) {
  const o = j(), n = new ct(new Y(), new dt({ color: o.nodePoint }));
  return pt((r, c) => {
    n.material.color.setHex(c.nodePoint);
  }), n.frustumCulled = false, F.derive(() => {
    t.nodes.val && n.geometry.setAttribute("position", new K(e.val.flat(), 3));
  }), F.derive(() => {
    l.val;
    const r = 0.05 * t.gridSize.val * 0.5;
    t.nodes.rawVal && (n.material.size = r * l.rawVal);
  }), F.derive(() => {
    n.visible = t.nodes.val;
  }), n;
}
function te(t, e, l) {
  const o = j(), n = new U(), r = new It(new Y(), new et({ color: o.elementLine }));
  pt((p, S) => {
    r.material.color.setHex(S.elementLine);
  }), r.frustumCulled = false, n.add(r);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), i = new D(new Y(), c);
  i.frustumCulled = false, n.add(i);
  let f = new G(o.shellWall), g = new G(o.shellSlab), y = new G(o.shellTri);
  pt((p, S) => {
    f = new G(S.shellWall), g = new G(S.shellSlab), y = new G(S.shellTri), c.opacity = S.shellOpacity, c.needsUpdate = true;
  });
  function M(p, S) {
    const C = Math.abs(S[0] - p[0]), I = Math.abs(S[1] - p[1]), k = Math.abs(S[2] - p[2]);
    return k > C && k > I || I > C && I > k;
  }
  return F.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const p = e.elemColumns.rawVal, S = e.elemBeams.rawVal, C = l.val, I = ((_a = t.elements) == null ? void 0 : _a.val) || [], k = I.filter((A) => {
      if (A.length !== 2) return true;
      const x = C[A[0]], v = C[A[1]];
      if (!x || !v) return true;
      const d = M(x, v);
      return !(d && !p || !d && !S);
    }).map((A) => ee(A).map((x) => [...C[x[0]], ...C[x[1]]]).flat()).flat();
    r.geometry.setAttribute("position", new K(k, 3));
    const X = [], W = [];
    function T(A, x, v, d) {
      const s = [x[0] - A[0], x[1] - A[1], x[2] - A[2]], a = [d[0] - A[0], d[1] - A[1], d[2] - A[2]], u = s[1] * a[2] - s[2] * a[1], h = s[2] * a[0] - s[0] * a[2], m = s[0] * a[1] - s[1] * a[0], b = Math.sqrt(u * u + h * h + m * m);
      return b < 1e-12 ? false : Math.abs(m / b) < 0.5;
    }
    for (const A of I) if (A.length === 3) {
      const [x, v, d] = A;
      if (C[x] && C[v] && C[d]) {
        X.push(...C[x], ...C[v], ...C[d]);
        for (let s = 0; s < 3; s++) W.push(y.r, y.g, y.b);
      }
    } else if (A.length === 4) {
      const [x, v, d, s] = A;
      if (C[x] && C[v] && C[d] && C[s]) {
        const a = T(C[x], C[v], C[d], C[s]) ? f : g;
        X.push(...C[x], ...C[v], ...C[d]), X.push(...C[x], ...C[d], ...C[s]);
        for (let u = 0; u < 6; u++) W.push(a.r, a.g, a.b);
      }
    }
    X.length > 0 ? (i.geometry.dispose(), i.geometry = new Y(), i.geometry.setAttribute("position", new K(X, 3)), i.geometry.setAttribute("color", new K(W, 3)), i.geometry.computeVertexNormals(), i.visible = true) : i.visible = false;
  }), F.derive(() => {
    n.visible = e.elements.val;
  }), n;
}
function ee(t) {
  if (t.length === 2) return [t];
  const e = [];
  for (let l = 0; l < t.length; l++) e.push([t[l], t[(l + 1) % t.length]]);
  return e;
}
function Pt(t) {
  const e = j(), l = new Yt(t, 20, e.grid, e.grid);
  return l.position.set(0.5 * t, 0.5 * t, 0), l.rotateX(Math.PI / 2), l;
}
function ne(t, e, l, o) {
  const n = new U(), r = new Lt(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return F.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const i = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((f, g) => {
      const y = l.val[g];
      if (!y) return;
      const M = new D(r, c);
      M.position.set(...y);
      const p = i * o.rawVal;
      M.scale.set(p, p, p), n.add(M);
    });
  }), F.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const f = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((g) => g.scale.set(f, f, f));
  }), F.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function oe(t, e, l, o) {
  const n = new U();
  n.name = "loadsGroup";
  function r(c) {
    if (c.length < 2) return 0.12 * e.gridSize.rawVal;
    const i = [1 / 0, 1 / 0, 1 / 0], f = [-1 / 0, -1 / 0, -1 / 0];
    for (const y of c) for (let M = 0; M < 3; M++) i[M] = Math.min(i[M], y[M]), f[M] = Math.max(f[M], y[M]);
    return 0.08 * Math.max(f[0] - i[0], f[1] - i[1], f[2] - i[2], 0.1);
  }
  return F.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((f) => f.dispose()), n.clear();
    const c = l.val, i = r(c);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((f, g) => {
      const y = c[g];
      if (!y) return;
      const M = new B(...f.slice(0, 3));
      if (M.lengthSq() < 1e-30) return;
      M.normalize();
      const p = new tt(M, new B(...y), 1, 15637248, 0.3, 0.3), S = i * o.rawVal;
      p.scale.set(S, S, S), n.add(p);
    });
  }), F.derive(() => {
    if (o.val, !e.loads.rawVal) return;
    const i = r(l.rawVal) * o.rawVal;
    n.children.forEach((f) => f.scale.set(i, i, i));
  }), F.derive(() => {
    n.visible = e.loads.val;
  }), n;
}
function se(t, e, l) {
  const o = new U();
  return F.derive(() => {
    if (!t.nodesIndexes.val) return;
    o.children.forEach((r) => r.dispose()), o.clear();
    const n = 0.05 * t.gridSize.val * 0.6;
    e.val.forEach((r, c) => {
      const i = new q(`${c}`);
      i.position.set(...r), i.updateScale(n * l.rawVal), o.add(i);
    });
  }), F.derive(() => {
    if (l.val, !t.nodesIndexes.rawVal) return;
    const n = 0.05 * t.gridSize.val * 0.6;
    o.children.forEach((r) => r.updateScale(n * l.rawVal));
  }), F.derive(() => {
    o.visible = t.nodesIndexes.val;
  }), o;
}
function ie(t, e, l, o) {
  const n = new U();
  return F.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const r = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((c, i) => {
      const f = new q(`${i}`, void 0, "#001219");
      f.position.set(...ae(c.map((g) => l.rawVal[g]))), f.updateScale(r * o.rawVal), n.add(f);
    });
  }), F.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const r = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), F.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function ae(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = t.length;
  return [e[0] / l, e[1] / l, e[2] / l];
}
function re(t, e) {
  const l = new U(), o = 0.05 * t * 1, n = j(), r = new q("X", "red", "transparent"), c = new q(e ? "Z" : "Y", "green", "transparent"), i = new q(e ? "Y" : "Z", "blue", "transparent"), f = new tt(new B(1, 0, 0), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), g = new tt(new B(0, 1, 0), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), y = new tt(new B(0, 0, 1), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return r.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), i.position.set(0, 0, 1.3 * o), r.updateScale(0.4 * o), c.updateScale(0.4 * o), i.updateScale(0.4 * o), f.scale.set(o, o, o), g.scale.set(o, o, o), y.scale.set(o, o, o), l.add(f, g, y, r, c, i), l;
}
function Ft(t, e) {
  const l = new B(...t), n = new B(...e).clone().sub(l), r = n.length(), c = n.dot(new B(1, 0, 0)) / r, i = n.dot(new B(0, 1, 0)) / r, f = n.dot(new B(0, 0, 1)) / r, g = Math.sqrt(c ** 2 + i ** 2);
  let y = new yt().fromArray([[c, i, f], [-i / g, c / g, 0], [-c * f / g, -i * f / g, g]].flat());
  return f === 1 && (y = new yt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), f === -1 && (y = new yt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Et().setFromMatrix3(y);
}
function bt(t, e) {
  return t == null ? void 0 : t.map((l, o) => (9 * l + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = t.length;
  return [e[0] / l, e[1] / l, e[2] / l];
}
function le(t, e, l) {
  const o = ot([e, l]), n = ot([t, l]), r = ot([t, e]), c = new B(...o).sub(new B(...n)).normalize(), i = new B(...l).sub(new B(...r)).normalize(), f = c.clone().cross(i).normalize(), g = f.clone().cross(c).normalize();
  return new Et().makeBasis(c, g, f);
}
function ce(t, e, l, o) {
  const n = new U(), r = new Y(), c = new et({ vertexColors: true }), i = [0, 0, 0], f = [1, 0, 0], g = [0, 1, 0], y = [0, 0, 1];
  r.setAttribute("position", new K([...i, ...f, ...i, ...g, ...i, ...y], 3));
  const M = [255, 0, 0], p = [0, 255, 0], S = [0, 0, 255];
  return r.setAttribute("color", new K([...M, ...M, ...p, ...p, ...S, ...S], 3)), F.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((C) => {
      const I = new It(r, c), k = l.rawVal[C[0]], X = l.rawVal[C[1]];
      if (C.length === 2 && (I.position.set(...bt(k, X)), I.rotation.setFromRotationMatrix(Ft(k, X))), C.length === 3) {
        const A = l.rawVal[C[2]];
        I.position.set(...ot([k, X, A])), I.rotation.setFromRotationMatrix(le(k, X, A));
      }
      const T = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      I.scale.set(T, T, T), n.add(I);
    }));
  }), F.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const I = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((k) => k.scale.set(I, I, I));
  }), F.derive(() => {
    n.visible = e.orientations.val;
  }), n;
}
function de(t) {
  if (t.name) return t.name;
  if (t.type === "rect") {
    const e = (t.b * 100).toFixed(0), l = (t.h * 100).toFixed(0);
    return `${e}x${l}`;
  }
  return t.type === "circ" ? `D${(t.d * 100).toFixed(0)}` : "";
}
function he(t, e, l, o) {
  const n = new U();
  function r(x, v) {
    const d = x / 2, s = v / 2, a = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, -s, 0, d, s, 0, -d, s]), u = new Y();
    u.setAttribute("position", new $(a, 3));
    const h = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, s, 0, -d, -s]), m = new Y();
    return m.setAttribute("position", new $(h, 3)), { fill: u, outline: m };
  }
  function c(x, v = 24) {
    const d = x / 2, s = new Float32Array(v * 9);
    for (let m = 0; m < v; m++) {
      const b = m / v * Math.PI * 2, V = (m + 1) / v * Math.PI * 2;
      s[m * 9] = 0, s[m * 9 + 1] = 0, s[m * 9 + 2] = 0, s[m * 9 + 3] = 0, s[m * 9 + 4] = d * Math.cos(b), s[m * 9 + 5] = d * Math.sin(b), s[m * 9 + 6] = 0, s[m * 9 + 7] = d * Math.cos(V), s[m * 9 + 8] = d * Math.sin(V);
    }
    const a = new Y();
    a.setAttribute("position", new $(s, 3));
    const u = new Float32Array((v + 1) * 3);
    for (let m = 0; m <= v; m++) {
      const b = m / v * Math.PI * 2;
      u[m * 3] = 0, u[m * 3 + 1] = d * Math.cos(b), u[m * 3 + 2] = d * Math.sin(b);
    }
    const h = new Y();
    return h.setAttribute("position", new $(u, 3)), { fill: a, outline: h };
  }
  function i(x, v, d, s) {
    const a = d ?? v * 0.08, u = s ?? x * 0.07, h = x / 2, m = v / 2, b = m - a, V = u / 2, E = [];
    function w(z, Z, H, _) {
      E.push(0, z, Z, 0, H, Z, 0, H, _, 0, z, Z, 0, H, _, 0, z, _);
    }
    w(-h, -m, h, -b), w(-V, -b, V, b), w(-h, b, h, m);
    const P = new Y();
    P.setAttribute("position", new $(new Float32Array(E), 3));
    const R = new Float32Array([0, -h, -m, 0, h, -m, 0, h, -b, 0, V, -b, 0, V, b, 0, h, b, 0, h, m, 0, -h, m, 0, -h, b, 0, -V, b, 0, -V, -b, 0, -h, -b, 0, -h, -m]), L = new Y();
    return L.setAttribute("position", new $(R, 3)), { fill: P, outline: L };
  }
  function f(x, v, d) {
    const s = x / 2, a = v / 2, u = s - d, h = a - d, m = [];
    function b(P, R, L, z) {
      m.push(0, P, R, 0, L, R, 0, L, z, 0, P, R, 0, L, z, 0, P, z);
    }
    b(-s, -a, s, -h), b(-s, h, s, a), b(-s, -h, -u, h), b(u, -h, s, h);
    const V = new Y();
    V.setAttribute("position", new $(new Float32Array(m), 3));
    const E = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), w = new Y();
    return w.setAttribute("position", new $(E, 3)), { fill: V, outline: w };
  }
  function g(x, v, d) {
    const s = x / 2, a = v / 2, u = s - d, h = a - d, m = new Y(), b = new Float32Array([0, -u, -h, 0, u, -h, 0, u, h, 0, -u, -h, 0, u, h, 0, -u, h]);
    m.setAttribute("position", new $(b, 3));
    const V = [];
    function E(L, z, Z, H) {
      V.push(0, L, z, 0, Z, z, 0, Z, H, 0, L, z, 0, Z, H, 0, L, H);
    }
    E(-s, -a, s, -h), E(-s, h, s, a), E(-s, -h, -u, h), E(u, -h, s, h);
    const w = new Y();
    w.setAttribute("position", new $(new Float32Array(V), 3));
    const P = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), R = new Y();
    return R.setAttribute("position", new $(P, 3)), { concFill: m, steelFillGeom: w, outline: R };
  }
  function y(x, v, d) {
    const s = [], a = [[0, -x / 2, -v / 2], [0, -x / 2 + d, -v / 2], [0, -x / 2 + d, v / 2 - d], [0, x / 2, v / 2 - d], [0, x / 2, v / 2], [0, -x / 2, v / 2]], u = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const V of u) s.push(...a[V]);
    const h = new Y();
    h.setAttribute("position", new $(new Float32Array(s), 3));
    const m = [];
    for (let V = 0; V < a.length; V++) {
      const E = (V + 1) % a.length;
      m.push(...a[V], ...a[E]);
    }
    const b = new Y();
    return b.setAttribute("position", new $(new Float32Array(m), 3)), { fill: h, outline: b };
  }
  function M(x, v, d, s) {
    const a = s / 2, u = [], h = [[0, -x - a, -v / 2], [0, -d - a, -v / 2], [0, -d - a, v / 2 - d], [0, -a, v / 2 - d], [0, -a, v / 2], [0, -x - a, v / 2]], m = [[0, a, -v / 2], [0, a + d, -v / 2], [0, a + d, v / 2 - d], [0, x + a, v / 2 - d], [0, x + a, v / 2], [0, a, v / 2]], b = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const P of b) u.push(...h[P]);
    for (const P of b) u.push(...m[P]);
    const V = new Y();
    V.setAttribute("position", new $(new Float32Array(u), 3));
    const E = [];
    for (const P of [h, m]) for (let R = 0; R < P.length; R++) {
      const L = (R + 1) % P.length;
      E.push(...P[R], ...P[L]);
    }
    const w = new Y();
    return w.setAttribute("position", new $(new Float32Array(E), 3)), { fill: V, outline: w };
  }
  function p(x, v, d, s) {
    const a = v / 2, u = x, h = [[0, -u, -a], [0, -u, -a + d], [0, -s, -a + d], [0, -s, a - d], [0, -u, a - d], [0, -u, a], [0, 0, a], [0, 0, -a]], m = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], b = [];
    for (const P of m) b.push(...h[P]);
    const V = new Y();
    V.setAttribute("position", new $(new Float32Array(b), 3));
    const E = [];
    for (let P = 0; P < h.length; P++) {
      const R = (P + 1) % h.length;
      E.push(...h[P], ...h[R]);
    }
    const w = new Y();
    return w.setAttribute("position", new $(new Float32Array(E), 3)), { fill: V, outline: w };
  }
  function S(x, v, d, s, a) {
    const u = v / 2, h = a / 2, m = [], b = [[0, -x, -u], [0, -x, -u + d], [0, -h - s, -u + d], [0, -h - s, u - d], [0, -x, u - d], [0, -x, u], [0, -h, u], [0, -h, -u]], V = b.map((L) => [L[0], -L[1], L[2]]), E = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const L of E) m.push(...b[L]);
    for (const L of E) m.push(...V[L]);
    const w = new Y();
    w.setAttribute("position", new $(new Float32Array(m), 3));
    const P = [];
    for (const L of [b, V]) for (let z = 0; z < L.length; z++) {
      const Z = (z + 1) % L.length;
      P.push(...L[z], ...L[Z]);
    }
    const R = new Y();
    return R.setAttribute("position", new $(new Float32Array(P), 3)), { fill: w, outline: R };
  }
  function C(x, v, d, s) {
    const a = x / 2, u = v / 2, h = s / 2, m = [[0, -h, -u], [0, h, -u], [0, h, u - d], [0, a, u - d], [0, a, u], [0, -a, u], [0, -a, u - d], [0, -h, u - d]], b = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], V = [];
    for (const R of b) V.push(...m[R]);
    const E = new Y();
    E.setAttribute("position", new $(new Float32Array(V), 3));
    const w = [];
    for (let R = 0; R < m.length; R++) {
      const L = (R + 1) % m.length;
      w.push(...m[R], ...m[L]);
    }
    const P = new Y();
    return P.setAttribute("position", new $(new Float32Array(w), 3)), { fill: E, outline: P };
  }
  function I(x, v, d = 24) {
    const s = x / 2, a = s - v, u = [];
    for (let V = 0; V < d; V++) {
      const E = V / d * Math.PI * 2, w = (V + 1) / d * Math.PI * 2, P = Math.cos(E), R = Math.sin(E), L = Math.cos(w), z = Math.sin(w);
      u.push(0, s * P, s * R, 0, s * L, s * z, 0, a * L, a * z), u.push(0, s * P, s * R, 0, a * L, a * z, 0, a * P, a * R);
    }
    const h = new Y();
    h.setAttribute("position", new $(new Float32Array(u), 3));
    const m = [];
    for (let V = 0; V < d; V++) {
      const E = V / d * Math.PI * 2, w = (V + 1) / d * Math.PI * 2;
      m.push(0, s * Math.cos(E), s * Math.sin(E), 0, s * Math.cos(w), s * Math.sin(w)), m.push(0, a * Math.cos(E), a * Math.sin(E), 0, a * Math.cos(w), a * Math.sin(w));
    }
    const b = new Y();
    return b.setAttribute("position", new $(new Float32Array(m), 3)), { fill: h, outline: b };
  }
  const k = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), X = new et({ color: 52479 }), W = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), T = new et({ color: 16750848 });
  function A(x, v) {
    const d = Math.abs(v[0] - x[0]), s = Math.abs(v[1] - x[1]), a = Math.abs(v[2] - x[2]);
    return a > d && a > s || s > d && s > a;
  }
  return F.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const x = e.secColumns.rawVal, v = e.secBeams.rawVal;
    if (!x && !v) {
      n.children.forEach((h) => {
        h instanceof q && h.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((h) => {
      h instanceof q && h.dispose();
    }), n.clear();
    const d = (_a = t.elements) == null ? void 0 : _a.val, s = (_b = t.elementInputs) == null ? void 0 : _b.val;
    if (!d || !s) return;
    const a = s.sectionShapes, u = e.secFloor.rawVal;
    d.forEach((h, m) => {
      if (h.length !== 2) return;
      const b = l.rawVal[h[0]], V = l.rawVal[h[1]];
      if (!b || !V) return;
      const E = A(b, V);
      if (E && !x || !E && !v) return;
      if (u >= 0) {
        const z = Math.min(b[1], V[1]);
        Math.max(b[1], V[1]);
        const Z = e.gridSize.rawVal || 3;
        if (Math.floor(z / Z + 0.01) !== u) return;
      }
      const w = a == null ? void 0 : a.get(m);
      if (!w) return;
      const P = [(b[0] + V[0]) / 2, (b[1] + V[1]) / 2, (b[2] + V[2]) / 2], R = Ft(b, V);
      if (w.type === "CFT") {
        const z = g(w.b, w.h, w.tw ?? w.b * 0.05), Z = new D(z.concFill, k);
        Z.position.set(...P), Z.rotation.setFromRotationMatrix(R), n.add(Z);
        const H = new D(z.steelFillGeom, W);
        H.position.set(...P), H.rotation.setFromRotationMatrix(R), n.add(H);
        const _ = new nt(z.outline, T);
        _.position.set(...P), _.rotation.setFromRotationMatrix(R), n.add(_);
      } else {
        let z, Z, H;
        switch (w.type) {
          case "rect":
            z = r(w.b, w.h), Z = k, H = X;
            break;
          case "circ":
            z = c(w.d), Z = k, H = X;
            break;
          case "I":
            z = i(w.b, w.h, w.tf, w.tw), Z = W, H = T;
            break;
          case "HSS":
            z = f(w.b, w.h, w.tw ?? w.b * 0.05), Z = W, H = T;
            break;
          case "CFT":
            z = g(w.b, w.h, w.tw ?? w.b * 0.05), Z = W, H = T;
            break;
          case "L":
            z = y(w.b ?? w.h, w.h, w.t ?? w.tw ?? 3e-3), Z = W, H = T;
            break;
          case "2L":
            z = M(w.b ?? w.h, w.h, w.t ?? w.tw ?? 3e-3, w.dis ?? 0.01), Z = W, H = T;
            break;
          case "C":
          case "coldC":
            z = p(w.b, w.h, w.tf ?? w.t ?? 3e-3, w.tw ?? w.t ?? 3e-3), Z = W, H = T;
            break;
          case "2C":
            z = S(w.b, w.h, w.tf ?? 5e-3, w.tw ?? 5e-3, w.dis ?? 0.01), Z = W, H = T;
            break;
          case "T":
            z = C(w.b, w.h, w.tf ?? 0.01, w.tw ?? 6e-3), Z = W, H = T;
            break;
          case "pipe":
            z = I(w.d, w.tw ?? w.d * 0.05), Z = W, H = T;
            break;
          default:
            return;
        }
        const _ = new D(z.fill, Z);
        _.position.set(...P), _.rotation.setFromRotationMatrix(R), n.add(_);
        const N = new nt(z.outline, H);
        N.position.set(...P), N.rotation.setFromRotationMatrix(R), n.add(N);
      }
      const L = de(w);
      if (L) {
        const Z = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(w.type) ? "#ff9900" : "#00ccff", H = new q(L, Z, "transparent");
        H.position.set(P[0], P[1], P[2]);
        const _ = 0.05 * e.gridSize.rawVal * 0.5;
        H.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(H);
      }
    });
  }), o && F.derive(() => {
    if (o.val, !e.sections.rawVal) return;
    const x = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((v) => {
      v instanceof q && v.updateScale(x * o.rawVal);
    });
  }), F.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends U {
  constructor(e, l, o, n, r, c, i) {
    super();
    const f = new ht().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), g = f.getPoints(), y = new Y().setFromPoints(g);
    this.lines = new nt(y, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const M = new ut(f), p = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(M, p), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new q(`${r[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = ot([e, l]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Tt extends U {
  constructor(e, l, o, n, r, c, i) {
    super();
    const f = r[0] * o / (r[0] + r[1]), g = r[0] * r[1] > 0;
    if (this.text = new q(`${r[0].toFixed(4)}`), this.text2 = new q(`${(r[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = bt(e, l), this.text2Position = bt(l, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), g) {
      const y = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(f, 0).lineTo(0, 0), M = new ht().moveTo(f, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(f, 0), p = y.getPoints(), S = M.getPoints(), C = new Y().setFromPoints(p), I = new Y().setFromPoints(S), k = new et({ color: j().resultOutline });
      this.lines = new nt(C, k), this.lines2 = new nt(I, k), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), i && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const X = new ut(y), W = new ut(M), T = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), A = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(X, T), this.mesh2 = new D(W, A), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), i && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const y = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), M = y.getPoints(), p = new Y().setFromPoints(M);
      this.lines = new nt(p, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const S = new ut(y), C = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(S, C), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(e) {
    var _a, _b;
    this.lines.scale.set(1, e * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text2.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * e), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e = this.mesh2) == null ? void 0 : _e.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var Bt = ((t) => (t.normals = "normals", t.shearsY = "shearsY", t.shearsZ = "shearsZ", t.torsions = "torsions", t.bendingsY = "bendingsY", t.bendingsZ = "bendingsZ", t))(Bt || {});
function ue(t, e, l, o) {
  const n = new U(), r = { normals: lt, shearsY: lt, shearsZ: lt, torsions: lt, bendingsY: Tt, bendingsZ: Tt };
  return F.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, l.val, e.frameResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const c = Bt[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((i, f) => {
      var _a2, _b2;
      const g = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[f]) ?? [0, 1], y = l.rawVal[g[0]], M = l.rawVal[g[1]], p = new B(...M).distanceTo(new B(...y)), S = pe((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), C = i == null ? void 0 : i.map((W) => W / (S === 0 ? 1 : S)), I = Ft(y, M), k = new r[c](y, M, p, I, i ?? [0, 0], C ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), X = 0.05 * e.gridSize.rawVal;
      k.updateScale(X * o.rawVal), n.add(k);
    });
  }), F.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const c = 0.05 * e.gridSize.val;
    n.children.forEach((i) => i.updateScale(c * o.rawVal));
  }), F.derive(() => {
    n.visible = e.frameResults.val != "none";
  }), n;
}
function pe(t) {
  let e = 0;
  return t == null ? void 0 : t.forEach((l) => {
    const o = Math.max(...l ?? [0, 0]);
    o > e && (e = o);
  }), e;
}
class fe extends U {
  constructor(e, l, o) {
    super();
    const n = l === Ct.reactions;
    o[0] && (this.xText1 = new q(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new q(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new q(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new q(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new q(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new q(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new tt(new B(1, 0, 0), new B(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new tt(new B(0, 1, 0), new B(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new tt(new B(0, 0, 1), new B(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...e), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(e, e, e), (_b = this.yArrow) == null ? void 0 : _b.scale.set(e, e, e), (_c = this.zArrow) == null ? void 0 : _c.scale.set(e, e, e), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * e, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * e, 0, 0.5 * e), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * e, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * e, 0.5 * e), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * e), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * e + 0.5 * e), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * e), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * e), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * e), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * e), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * e), (_o = this.zText2) == null ? void 0 : _o.updateScale(0.4 * e);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var Ct = ((t) => (t.deformations = "deformations", t.reactions = "reactions", t))(Ct || {});
function me(t, e, l, o) {
  const n = new U();
  return F.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const r = Ct[e.nodeResults.rawVal], c = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[r]) == null ? void 0 : _b.forEach((i, f) => {
      const g = new fe(l.rawVal[f], r, i ?? [0, 0, 0, 0, 0, 0]);
      g.updateScale(c * o.rawVal), n.add(g);
    });
  }), F.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const r = 0.05 * e.gridSize.val;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), F.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function we({ drawingObj: t, gridObj: e, scene: l, camera: o, controls: n, gridSize: r, derivedDisplayScale: c, rendererElm: i, viewerRender: f }) {
  const g = new Xt(), y = new kt(), M = new D(new Zt(r, r), new Q({ side: O })), p = new ct(new Y(), new dt()), S = new ct(new Y(), new dt({ color: "gray" })), C = new ct(new Y(), new dt({ color: "orange", size: 0.8 }));
  l.add(C), p.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), p.geometry.computeBoundingSphere(), p.frustumCulled = false, S.frustumCulled = false, l.add(S), M.position.set(0.5 * r, 0.5 * r, 0), M.rotateX(Math.PI / 2), M.geometry.rotateX(Math.PI / 2), M.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), F.derive(() => {
    t.gridTarget && (xe(e, { position: new B(...t.gridTarget.val.position), quaternion: new Wt().setFromEuler(new At(...t.gridTarget.val.rotation)) }, f), M.position.set(...t.gridTarget.val.position), M.quaternion.setFromEuler(new At(...t.gridTarget.val.rotation)), M.updateMatrixWorld());
  }), F.derive(() => {
    p.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), p.geometry.computeBoundingSphere();
  }), F.derive(() => {
    const T = 0.05 * r * 0.5 * c.val;
    S.material.size = T, g.params.Points.threshold = 0.4 * T;
  }), F.derive(() => {
    var _a;
    const T = t.points.val ?? [], x = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], v = [];
    for (const s of x) {
      const [a, u, h] = T[s];
      v.push(a, u, h);
    }
    const d = new Y();
    d.setAttribute("position", new K(v, 3)), C.geometry.dispose(), C.geometry = d;
  });
  let I = false, k = 0;
  i.addEventListener("pointerdown", () => {
    I = true;
  }), i.addEventListener("pointerup", () => {
    I = false;
  }), i.addEventListener("pointermove", () => {
    I && k++;
  }), i.addEventListener("click", (T) => {
    if (k > 5) {
      k = 0;
      return;
    }
    k = 0, y.x = T.clientX / window.innerWidth * 2 - 1, y.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    const A = g.intersectObject(M);
    if (A.length) {
      let x = A[0].point;
      (T.ctrlKey || T.metaKey) && (x = new B(Math.round(A[0].point.x), Math.round(A[0].point.y), Math.round(A[0].point.z))), t.points.val = [...t.points.rawVal, x.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), i.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), i.addEventListener("pointermove", (T) => {
    y.x = T.clientX / window.innerWidth * 2 - 1, y.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    const A = g.intersectObject(M);
    if (S.geometry.deleteAttribute("position"), A.length) {
      let x = A[0].point;
      (T.ctrlKey || T.metaKey) && (x = new B(Math.round(A[0].point.x), Math.round(A[0].point.y), Math.round(A[0].point.z))), S.geometry.setAttribute("position", new K(x.toArray(), 3));
    }
    f();
  }), i.addEventListener("pointermove", (T) => {
    var _a;
    y.x = T.clientX / window.innerWidth * 2 - 1, y.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    let A = false;
    const x = g.intersectObject(p), v = g.intersectObject(M);
    if (x.length && v.length) {
      const d = new B(...t.points.rawVal[x[0].index]), s = new B(...v[0].point), a = d.sub(s), u = (_a = v[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(M.matrixWorld), Math.abs(a.dot(u)) < 1e-4 && (A = true);
    }
    S.visible = !A;
  });
  let X = false, W;
  i.addEventListener("pointermove", (T) => {
    var _a;
    if (!k) return;
    y.x = T.clientX / window.innerWidth * 2 - 1, y.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    let A = false;
    const x = g.intersectObject(p), v = g.intersectObject(M);
    if (x.length && v.length) {
      const s = new B(...t.points.rawVal[x[0].index]), a = new B(...v[0].point), u = s.sub(a), h = (_a = v[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(M.matrixWorld), Math.abs(u.dot(h)) < 1e-4 && (A = true);
    }
    if (A && k < 5 && (X = true, n.enabled = false, W = x[0].index), !X || k % 2 !== 0) return;
    const d = [...t.points.rawVal];
    if (W !== void 0) {
      let s = v[0].point;
      (T.ctrlKey || T.metaKey) && (s = new B(Math.round(s.x), Math.round(s.y), Math.round(s.z))), d[W] = s.toArray();
    }
    t.points.val = d;
  }), i.addEventListener("pointerup", () => {
    n.enabled = true, X = false;
  }), i.addEventListener("contextmenu", (T) => {
    var _a;
    y.x = T.clientX / window.innerWidth * 2 - 1, y.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    let A = false;
    const x = g.intersectObject(p), v = g.intersectObject(M);
    if (x.length && v.length) {
      const a = new B(...t.points.rawVal[x[0].index]), u = new B(...v[0].point), h = a.sub(u), m = (_a = v[0].face) == null ? void 0 : _a.normal;
      m.transformDirection(M.matrixWorld), Math.abs(h.dot(m)) < 1e-4 && (A = true);
    }
    if (!A) return;
    const d = [...t.points.rawVal];
    if (d.splice(x[0].index, 1), t.points.val = d, !t.polylines) return;
    const s = t.polylines.rawVal.map((a) => a.filter((u) => u !== x[0].index)).map((a) => a.map((u) => u > x[0].index ? u - 1 : u)).filter((a) => a.length);
    s.push([]), t.polylines.val = s;
  });
}
function xe(t, e, l) {
  const r = Math.round(14.999999999999998), c = { position: t.position.clone(), quaternion: t.quaternion.clone() }, i = setInterval(g, 1e3 / 30);
  let f = 0;
  function g() {
    f++;
    const y = f / r;
    t.position.lerpVectors(c.position, e.position, y), t.quaternion.slerpQuaternions(c.quaternion, e.quaternion, y), l && l(), f == r && clearInterval(i);
  }
}
class Rt {
  constructor(e, l = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(e, l);
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
  setColorMap(e, l = 32) {
    this.map = Mt[e] || Mt.rainbow, this.n = l;
    const o = 1 / this.n, n = new G(), r = new G();
    this.lut.length = 0, this.lut.push(new G(this.map[0][1]));
    for (let c = 1; c < l; c++) {
      const i = c * o;
      for (let f = 0; f < this.map.length - 1; f++) if (i > this.map[f][0] && i <= this.map[f + 1][0]) {
        const g = this.map[f][0], y = this.map[f + 1][0];
        n.setHex(this.map[f][1], rt), r.setHex(this.map[f + 1][1], rt);
        const M = new G().lerpColors(n, r, (i - g) / (y - g));
        this.lut.push(M);
      }
    }
    return this.lut.push(new G(this.map[this.map.length - 1][1])), this;
  }
  copy(e) {
    return this.lut = e.lut, this.map = e.map, this.n = e.n, this.minV = e.minV, this.maxV = e.maxV, this;
  }
  getColor(e) {
    e = Ht.clamp(e, this.minV, this.maxV), e = (e - this.minV) / (this.maxV - this.minV);
    const l = Math.round(e * this.n);
    return this.lut[l];
  }
  addColorMap(e, l) {
    return Mt[e] = l, this;
  }
  createCanvas() {
    const e = document.createElement("canvas");
    return e.width = 1, e.height = this.n, this.updateCanvas(e), e;
  }
  updateCanvas(e) {
    const l = e.getContext("2d", { alpha: false }), o = l.getImageData(0, 0, 1, this.n), n = o.data;
    let r = 0;
    const c = 1 / this.n, i = new G(), f = new G(), g = new G();
    for (let y = 1; y >= 0; y -= c) for (let M = this.map.length - 1; M >= 0; M--) if (y < this.map[M][0] && y >= this.map[M - 1][0]) {
      const p = this.map[M - 1][0], S = this.map[M][0];
      i.setHex(this.map[M - 1][1], rt), f.setHex(this.map[M][1], rt), g.lerpColors(i, f, (y - p) / (S - p)), n[r * 4] = Math.round(g.r * 255), n[r * 4 + 1] = Math.round(g.g * 255), n[r * 4 + 2] = Math.round(g.b * 255), n[r * 4 + 3] = 255, r += 1;
    }
    return l.putImageData(o, 0, 0), e;
  }
}
const Mt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function ve(t, e, l) {
  const o = new Rt(), n = new G(), r = new D(new Y(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), r.renderOrder = -1, r.frustumCulled = false, F.derive(() => {
    r.geometry.setAttribute("position", new K(t.val.flat(), 3));
    const c = [];
    for (const i of e.val) i.length === 3 ? c.push(i[0], i[1], i[2]) : i.length === 4 && (c.push(i[0], i[1], i[2]), c.push(i[0], i[2], i[3]));
    r.geometry.setIndex(new _t(c, 1)), r.geometry.setAttribute("color", new K(t.val.map(() => [0, 0, 0]).flat(), 3)), o.setMax(Math.max(...l.val)), o.setMin(Math.min(...l.val));
    for (let i = 0; i < l.val.length; i++) {
      const f = o.getColor(l.val[i]) ?? new G(0, 0, 0);
      n.copy(f).convertSRGBToLinear(), n.multiplyScalar(0.6), r.geometry.attributes.color.setXYZ(i, n.r, n.g, n.b);
    }
  }), r;
}
function ye(t, e, l, o) {
  const n = ve(l, t.elements, o);
  return F.derive(() => {
    n.visible = e.shellResults.val != "none";
  }), n;
}
const Me = 6, gt = 10, ge = 0.012;
function be(t) {
  return t.startsWith("contour:") ? t.slice(8) : null;
}
function Fe(t, e, l, o) {
  if (!l && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(t) && l) {
    const r = l[t];
    if (r && r.has(e)) return r.get(e);
  }
  return null;
}
function Ce(t, e, l, o) {
  const n = new U(), r = new Rt();
  r.setColorMap("rainbow");
  const c = new G(), i = F.state([]);
  return F.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const f = l.val, g = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], y = be(e.frameResults.val);
    if (n.children.forEach((m) => {
      m.geometry && m.geometry.dispose(), m.material && m.material.dispose();
    }), n.clear(), !y || g.length === 0 || f.length === 0) {
      i.val = [];
      return;
    }
    const M = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, p = (_c = t.deformOutputs) == null ? void 0 : _c.val, S = [], C = [];
    for (let m = 0; m < g.length; m++) {
      if (g[m].length !== 2) continue;
      const V = Fe(y, m, M, p);
      V && (S.push(V[0], V[1]), C.push({ idx: m, vals: V }));
    }
    if (S.length === 0) {
      i.val = [];
      return;
    }
    const I = Math.min(...S), k = Math.max(...S);
    r.setMin(I), r.setMax(k), i.val = S;
    const X = [1 / 0, 1 / 0, 1 / 0], W = [-1 / 0, -1 / 0, -1 / 0];
    for (const m of f) for (let b = 0; b < 3; b++) X[b] = Math.min(X[b], m[b]), W[b] = Math.max(W[b], m[b]);
    const A = Math.max(W[0] - X[0], W[1] - X[1], W[2] - X[2], 1) * ge, x = [], v = [], d = [];
    let s = 0;
    for (const { idx: m, vals: b } of C) {
      const V = g[m], E = f[V[0]], w = f[V[1]];
      if (!E || !w) continue;
      const P = new B(w[0] - E[0], w[1] - E[1], w[2] - E[2]), R = P.length();
      if (R < 1e-10) continue;
      P.normalize();
      const L = Math.abs(P.y) < 0.99 ? new B(0, 1, 0) : new B(1, 0, 0), z = new B().crossVectors(P, L).normalize(), Z = new B().crossVectors(P, z).normalize(), H = gt + 1, _ = Me;
      for (let N = 0; N < H; N++) {
        const J = N / gt, st = E[0] + P.x * R * J, it = E[1] + P.y * R * J, ft = E[2] + P.z * R * J, mt = b[0] + (b[1] - b[0]) * J, at = r.getColor(mt) ?? new G(0, 0, 0);
        c.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const Vt = wt / _ * Math.PI * 2, xt = Math.cos(Vt), vt = Math.sin(Vt);
          x.push(st + (z.x * xt + Z.x * vt) * A, it + (z.y * xt + Z.y * vt) * A, ft + (z.z * xt + Z.z * vt) * A), v.push(c.r, c.g, c.b);
        }
      }
      for (let N = 0; N < gt; N++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = s + N * _ + J, ft = s + N * _ + st, mt = s + (N + 1) * _ + J, at = s + (N + 1) * _ + st;
        d.push(it, ft, at), d.push(it, at, mt);
      }
      s += H * _;
    }
    if (x.length === 0) return;
    const a = new Y();
    a.setAttribute("position", new K(x, 3)), a.setAttribute("color", new K(v, 3)), a.setIndex(d), a.computeVertexNormals();
    const u = new Q({ vertexColors: true, side: O }), h = new D(a, u);
    h.frustumCulled = false, n.add(h);
  }), n.__colorMapValues = i, n;
}
function zt(t, e = 8) {
  const l = document.createElement("div");
  l.id = "legend";
  const o = Array.from({ length: e + 1 }, (i, f) => f / e).reverse();
  let n, r;
  o.forEach((i, f) => {
    n = document.createElement("div"), n.id = `marker-${f}`, n.className = "marker", n.style.marginTop = f == 0 ? "0px" : `calc(${50 / e}vh - 1px)`, r = document.createElement("p"), r.id = `marker-text-${f}`, n.append(r), l.append(n);
  });
  const c = [];
  return l.querySelectorAll("p").forEach((i) => c.push(i)), setTimeout(() => {
    F.derive(() => {
      o.forEach((i, f) => {
        const g = c[f];
        g && (g.innerText = Ve(t.val, i).toString());
      });
    });
  }), l;
}
function Ve(t, e) {
  const l = Math.max(...t) - Math.min(...t);
  return (Math.min(...t) + e * l).toPrecision(3);
}
function Ie({ mesh: t, settingsObj: e, drawingObj: l, objects3D: o, solids: n }) {
  Dt.DEFAULT_UP = new B(0, 0, 1);
  const r = document.createElement("div"), c = new $t(), i = new Gt(45, 1, 0.1, 2 * 1e6), f = new qt(-10, 10, 10, -10, -1e3, 2e6);
  let g = i;
  const y = new Nt({ antialias: true });
  y.localClippingEnabled = true;
  const M = new Kt(i, y.domElement), p = Ot(e), S = F.derive(() => p.displayScale.val === 0 ? 1 : p.displayScale.val > 0 ? p.displayScale.val : -1 / p.displayScale.val), C = Ae(t, p);
  let I = Pt(p.gridSize.rawVal);
  r.appendChild(Jt(p, t, n)), r.setAttribute("id", "viewer"), r.appendChild(y.domElement), y.setPixelRatio(window.devicePixelRatio);
  const k = j();
  y.setClearColor(k.background, 1);
  const X = p.gridSize.rawVal, W = X * 0.5 + X * 0.5 / Math.tan(45 * 0.5);
  i.position.set(0.5 * X, 0.8 * -W, 0.5 * X), M.target.set(0.5 * X, 0.5 * X, 0), M.minDistance = 1, M.maxDistance = W * 2.5, M.zoomSpeed = 10, M.update(), c.add(I, re(p.gridSize.rawVal, p.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const s of d) {
      const a = (_a = s.target) == null ? void 0 : _a.clientWidth, u = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (a === 0 || u === 0) continue;
      i.aspect = a / u, i.updateProjectionMatrix();
      const h = a / u, m = f.top;
      f.left = -m * h, f.right = m * h, f.updateProjectionMatrix(), y.setSize(a, u), A();
    }
  }).observe(r), M.addEventListener("change", A), F.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, p.displayScale.val, p.nodes.val, p.elements.val, p.elemColumns.val, p.elemBeams.val, p.nodesIndexes.val, p.elementsIndexes.val, p.orientations.val, p.sections.val, p.secColumns.val, p.secBeams.val, p.secFloor.val, p.supports.val, p.loads.val, p.deformedShape.val, p.nodeResults.val, p.frameResults.val, p.shellResults.val, setTimeout(A);
  });
  function A() {
    y.render(c, g);
  }
  function x(d) {
    g = d, M.object = d, M.update(), A();
  }
  if (t) {
    c.add(jt(p, C, S), te(t, p, C), se(p, C, S), ie(t, p, C, S), ne(t, p, C, S), oe(t, p, C, S), ce(t, p, C, S), he(t, p, C, S), me(t, p, C, S), ue(t, p, C, S));
    const d = Se(t, p), s = ye(t, p, C, d), a = zt(d);
    c.add(s), r.appendChild(a);
    const u = Ce(t, p, C);
    c.add(u);
    const h = u.__colorMapValues, m = zt(h);
    m.id = "frame-legend", r.appendChild(m), F.derive(() => {
      const b = p.shellResults.val != "none", V = p.frameResults.val.startsWith("contour:");
      a.hidden = !b, s.visible = b, m.hidden = !V;
    });
  }
  if (n) {
    const d = new Ut(16777215, 0.5);
    c.add(d);
    const s = new St(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, c.add(s);
    const a = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = a, s.shadow.camera.top = a, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const u = new St(16777215, 0.5);
    u.color.setHSL(11, 43, 96), u.position.set(-10, 0, 30), c.add(u), F.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), A());
    }), F.derive(() => {
      n.rawVal.forEach((h) => h.visible = p.solids.val), A();
    });
  }
  o && F.derive(() => {
    (o == null ? void 0 : o.val.length) && (c.remove(...o.oldVal), c.add(...o.rawVal), A());
  }), l && we({ drawingObj: l, gridObj: I, scene: c, camera: i, controls: M, gridSize: X, derivedDisplayScale: S, rendererElm: y.domElement, viewerRender: A }), pt((d, s) => {
    y.setClearColor(s.background, 1), c.remove(I), I.geometry.dispose(), I.material.dispose(), I = Pt(p.gridSize.rawVal), c.add(I), r.style.setProperty("--awatif-legend-color", s.legendMarker), A();
  });
  const v = { scene: c, perspCamera: i, orthoCamera: f, get camera() {
    return g;
  }, controls: M, renderer: y, rendererElm: y.domElement, render: A, setActiveCamera: x, settings: p };
  return r.__ctx = v, r;
}
function Ae(t, e) {
  return F.derive(() => {
    var _a, _b;
    return e.deformedShape.val ? ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val.map((l, o) => {
      var _a2, _b2, _c, _d;
      const n = ((_d = (_c = (_b2 = (_a2 = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _a2.val) == null ? void 0 : _b2.deformations) == null ? void 0 : _c.get(o)) == null ? void 0 : _d.slice(0, 3)) ?? [0, 0, 0];
      return l.map((r, c) => r + n[c]);
    })) ?? [] : ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [];
  });
}
function Se(t, e) {
  const l = F.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), F.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), i = (y, M) => {
      y == null ? void 0 : y.forEach((p, S) => {
        const C = t.elements.val[S];
        if (C) for (let I = 0; I < C.length; I++) M.set(C[I], [p[I] ?? p[0]]);
      });
    };
    i((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), i((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, r), i((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, c);
    const f = { bendingXX: [n, 0], bendingYY: [r, 0], bendingXY: [c, 0], displacementX: [(_h = (_g = t.deformOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.deformations, 0], displacementY: [(_j = (_i = t.deformOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.deformations, 1], displacementZ: [(_l = (_k = t.deformOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.deformations, 2] }, g = [];
    t.nodes.val.forEach((y, M) => {
      const p = f[e.shellResults.val];
      if (!p || !p[0] || typeof p[0].has != "function") return;
      if (!p[0].has(M)) {
        g.push(0);
        return;
      }
      const S = p[0].get(M);
      g.push(S ? S[p[1]] ?? 0 : 0);
    }), l.val = g;
  }), l;
}
export {
  ve as a,
  zt as b,
  Ie as g
};
