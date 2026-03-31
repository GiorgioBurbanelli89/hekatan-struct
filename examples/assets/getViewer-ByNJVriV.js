import { H as ct, B as k, I as dt, F as K, G as U, h as Yt, a as et, j as Q, D as O, e as D, C as G, l as Bt, i as Rt, V as R, A as tt, z as q, J as yt, d as It, L as nt, c as $, r as ht, K as ut, R as Lt, f as kt, N as Zt, U as Wt, X as St, Y as rt, Z as Ht, _ as _t, t as $t, u as Gt, v as qt, W as Nt, w as Kt, x as Ut, y as At, O as Dt } from "./Text-CBH-tcJP.js";
import { v as F, P as Qt, g as j, o as pt } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function Jt(t, e, l) {
  const o = document.createElement("div"), n = new Qt({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (e == null ? void 0 : e.nodes) && (n.addBinding(t.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(t.nodes, "val", { label: "Nodes" }), n.addBinding(t.elements, "val", { label: "Elements" }), n.addBinding(t.elemColumns, "val", { label: "  Columnas" }), n.addBinding(t.elemBeams, "val", { label: "  Vigas" }), n.addBinding(t.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(t.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(t.orientations, "val", { label: "Orientations" }), n.addBinding(t.sections, "val", { label: "Sections" }), n.addBinding(t.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(t.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(t.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (e == null ? void 0 : e.nodeInputs) || (e == null ? void 0 : e.elementInputs)) {
    const r = n.addFolder({ title: "Analysis Inputs" });
    r.addBinding(t.supports, "val", { label: "Supports" }), r.addBinding(t.loads, "val", { label: "Loads" });
  }
  if ((e == null ? void 0 : e.deformOutputs) || (e == null ? void 0 : e.analyzeOutputs)) {
    const r = n.addFolder({ title: "Analysis Outputs" });
    r.addBinding(t.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), r.addBinding(t.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), r.addBinding(t.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), r.addBinding(t.deformedShape, "val", { label: "Deformed shape" });
  }
  return l && n.addBinding(t.solids, "val", { label: "Solids" }), o;
}
function Ot(t) {
  return { gridSize: F.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: F.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: F.state((t == null ? void 0 : t.nodes) ?? true), elements: F.state((t == null ? void 0 : t.elements) ?? true), elemColumns: F.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: F.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: F.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: F.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: F.state((t == null ? void 0 : t.orientations) ?? false), sections: F.state((t == null ? void 0 : t.sections) ?? true), secColumns: F.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: F.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: F.state((t == null ? void 0 : t.secFloor) ?? -1), supports: F.state((t == null ? void 0 : t.supports) ?? true), loads: F.state((t == null ? void 0 : t.loads) ?? false), deformedShape: F.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: F.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: F.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: F.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: F.state((t == null ? void 0 : t.flipAxes) ?? false), solids: F.state((t == null ? void 0 : t.solids) ?? true) };
}
function jt(t, e, l) {
  const o = j(), n = new ct(new k(), new dt({ color: o.nodePoint }));
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
  const o = j(), n = new U(), r = new Yt(new k(), new et({ color: o.elementLine }));
  pt((m, C) => {
    r.material.color.setHex(C.elementLine);
  }), r.frustumCulled = false, n.add(r);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), i = new D(new k(), c);
  i.frustumCulled = false, n.add(i);
  let p = new G(o.shellWall), b = new G(o.shellSlab), y = new G(o.shellTri);
  pt((m, C) => {
    p = new G(C.shellWall), b = new G(C.shellSlab), y = new G(C.shellTri), c.opacity = C.shellOpacity, c.needsUpdate = true;
  });
  function M(m, C) {
    const V = Math.abs(C[0] - m[0]), z = Math.abs(C[1] - m[1]), X = Math.abs(C[2] - m[2]);
    return X > V && X > z || z > V && z > X;
  }
  return F.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const m = e.elemColumns.rawVal, C = e.elemBeams.rawVal, V = l.val, z = ((_a = t.elements) == null ? void 0 : _a.val) || [], X = z.filter((S) => {
      if (S.length !== 2) return true;
      const f = V[S[0]], x = V[S[1]];
      if (!f || !x) return true;
      const d = M(f, x);
      return !(d && !m || !d && !C);
    }).map((S) => ee(S).map((f) => [...V[f[0]], ...V[f[1]]]).flat()).flat();
    r.geometry.setAttribute("position", new K(X, 3));
    const E = [], I = [];
    function P(S, f, x, d) {
      const s = [f[0] - S[0], f[1] - S[1], f[2] - S[2]], a = [d[0] - S[0], d[1] - S[1], d[2] - S[2]], u = s[1] * a[2] - s[2] * a[1], h = s[2] * a[0] - s[0] * a[2], w = s[0] * a[1] - s[1] * a[0], g = Math.sqrt(u * u + h * h + w * w);
      return g < 1e-12 ? false : Math.abs(w / g) < 0.5;
    }
    for (const S of z) if (S.length === 3) {
      const [f, x, d] = S;
      if (V[f] && V[x] && V[d]) {
        E.push(...V[f], ...V[x], ...V[d]);
        for (let s = 0; s < 3; s++) I.push(y.r, y.g, y.b);
      }
    } else if (S.length === 4) {
      const [f, x, d, s] = S;
      if (V[f] && V[x] && V[d] && V[s]) {
        const a = P(V[f], V[x], V[d], V[s]) ? p : b;
        E.push(...V[f], ...V[x], ...V[d]), E.push(...V[f], ...V[d], ...V[s]);
        for (let u = 0; u < 6; u++) I.push(a.r, a.g, a.b);
      }
    }
    E.length > 0 ? (i.geometry.dispose(), i.geometry = new k(), i.geometry.setAttribute("position", new K(E, 3)), i.geometry.setAttribute("color", new K(I, 3)), i.geometry.computeVertexNormals(), i.visible = true) : i.visible = false;
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
function zt(t) {
  const e = j(), l = new Bt(t, 20, e.grid, e.grid);
  return l.position.set(0.5 * t, 0.5 * t, 0), l.rotateX(Math.PI / 2), l;
}
function ne(t, e, l, o) {
  const n = new U(), r = new Rt(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return F.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const i = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((p, b) => {
      const y = l.val[b];
      if (!y) return;
      const M = new D(r, c);
      M.position.set(...y);
      const m = i * o.rawVal;
      M.scale.set(m, m, m), n.add(M);
    });
  }), F.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const p = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((b) => b.scale.set(p, p, p));
  }), F.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function oe(t, e, l, o) {
  const n = new U();
  n.name = "loadsGroup";
  function r(c) {
    if (c.length < 2) return 0.12 * e.gridSize.rawVal;
    const i = [1 / 0, 1 / 0, 1 / 0], p = [-1 / 0, -1 / 0, -1 / 0];
    for (const y of c) for (let M = 0; M < 3; M++) i[M] = Math.min(i[M], y[M]), p[M] = Math.max(p[M], y[M]);
    return 0.08 * Math.max(p[0] - i[0], p[1] - i[1], p[2] - i[2], 0.1);
  }
  return F.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((p) => p.dispose()), n.clear();
    const c = l.val, i = r(c);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((p, b) => {
      const y = c[b];
      if (!y) return;
      const M = new R(...p.slice(0, 3));
      if (M.lengthSq() < 1e-30) return;
      M.normalize();
      const m = new tt(M, new R(...y), 1, 15637248, 0.3, 0.3), C = i * o.rawVal;
      m.scale.set(C, C, C), n.add(m);
    });
  }), F.derive(() => {
    if (o.val, !e.loads.rawVal) return;
    const i = r(l.rawVal) * o.rawVal;
    n.children.forEach((p) => p.scale.set(i, i, i));
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
      const p = new q(`${i}`, void 0, "#001219");
      p.position.set(...ae(c.map((b) => l.rawVal[b]))), p.updateScale(r * o.rawVal), n.add(p);
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
  const l = new U(), o = 0.05 * t * 1, n = j(), r = new q("X", "red", "transparent"), c = new q(e ? "Z" : "Y", "green", "transparent"), i = new q(e ? "Y" : "Z", "blue", "transparent"), p = new tt(new R(1, 0, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), b = new tt(new R(0, 1, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), y = new tt(new R(0, 0, 1), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return r.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), i.position.set(0, 0, 1.3 * o), r.updateScale(0.4 * o), c.updateScale(0.4 * o), i.updateScale(0.4 * o), p.scale.set(o, o, o), b.scale.set(o, o, o), y.scale.set(o, o, o), l.add(p, b, y, r, c, i), l;
}
function Ft(t, e) {
  const l = new R(...t), n = new R(...e).clone().sub(l), r = n.length(), c = n.dot(new R(1, 0, 0)) / r, i = n.dot(new R(0, 1, 0)) / r, p = n.dot(new R(0, 0, 1)) / r, b = Math.sqrt(c ** 2 + i ** 2);
  let y = new yt().fromArray([[c, i, p], [-i / b, c / b, 0], [-c * p / b, -i * p / b, b]].flat());
  return p === 1 && (y = new yt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), p === -1 && (y = new yt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new It().setFromMatrix3(y);
}
function gt(t, e) {
  return t == null ? void 0 : t.map((l, o) => (9 * l + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = t.length;
  return [e[0] / l, e[1] / l, e[2] / l];
}
function le(t, e, l) {
  const o = ot([e, l]), n = ot([t, l]), r = ot([t, e]), c = new R(...o).sub(new R(...n)).normalize(), i = new R(...l).sub(new R(...r)).normalize(), p = c.clone().cross(i).normalize(), b = p.clone().cross(c).normalize();
  return new It().makeBasis(c, b, p);
}
function ce(t, e, l, o) {
  const n = new U(), r = new k(), c = new et({ vertexColors: true }), i = [0, 0, 0], p = [1, 0, 0], b = [0, 1, 0], y = [0, 0, 1];
  r.setAttribute("position", new K([...i, ...p, ...i, ...b, ...i, ...y], 3));
  const M = [255, 0, 0], m = [0, 255, 0], C = [0, 0, 255];
  return r.setAttribute("color", new K([...M, ...M, ...m, ...m, ...C, ...C], 3)), F.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((V) => {
      const z = new Yt(r, c), X = l.rawVal[V[0]], E = l.rawVal[V[1]];
      if (V.length === 2 && (z.position.set(...gt(X, E)), z.rotation.setFromRotationMatrix(Ft(X, E))), V.length === 3) {
        const S = l.rawVal[V[2]];
        z.position.set(...ot([X, E, S])), z.rotation.setFromRotationMatrix(le(X, E, S));
      }
      const P = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      z.scale.set(P, P, P), n.add(z);
    }));
  }), F.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const z = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((X) => X.scale.set(z, z, z));
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
  function r(f, x) {
    const d = f / 2, s = x / 2, a = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, -s, 0, d, s, 0, -d, s]), u = new k();
    u.setAttribute("position", new $(a, 3));
    const h = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, s, 0, -d, -s]), w = new k();
    return w.setAttribute("position", new $(h, 3)), { fill: u, outline: w };
  }
  function c(f, x = 24) {
    const d = f / 2, s = new Float32Array(x * 9);
    for (let w = 0; w < x; w++) {
      const g = w / x * Math.PI * 2, A = (w + 1) / x * Math.PI * 2;
      s[w * 9] = 0, s[w * 9 + 1] = 0, s[w * 9 + 2] = 0, s[w * 9 + 3] = 0, s[w * 9 + 4] = d * Math.cos(g), s[w * 9 + 5] = d * Math.sin(g), s[w * 9 + 6] = 0, s[w * 9 + 7] = d * Math.cos(A), s[w * 9 + 8] = d * Math.sin(A);
    }
    const a = new k();
    a.setAttribute("position", new $(s, 3));
    const u = new Float32Array((x + 1) * 3);
    for (let w = 0; w <= x; w++) {
      const g = w / x * Math.PI * 2;
      u[w * 3] = 0, u[w * 3 + 1] = d * Math.cos(g), u[w * 3 + 2] = d * Math.sin(g);
    }
    const h = new k();
    return h.setAttribute("position", new $(u, 3)), { fill: a, outline: h };
  }
  function i(f, x, d, s) {
    const a = d ?? x * 0.08, u = s ?? f * 0.07, h = f / 2, w = x / 2, g = w - a, A = u / 2, B = [];
    function v(Y, W, H, _) {
      B.push(0, Y, W, 0, H, W, 0, H, _, 0, Y, W, 0, H, _, 0, Y, _);
    }
    v(-h, -w, h, -g), v(-A, -g, A, g), v(-h, g, h, w);
    const T = new k();
    T.setAttribute("position", new $(new Float32Array(B), 3));
    const L = new Float32Array([0, -h, -w, 0, h, -w, 0, h, -g, 0, A, -g, 0, A, g, 0, h, g, 0, h, w, 0, -h, w, 0, -h, g, 0, -A, g, 0, -A, -g, 0, -h, -g, 0, -h, -w]), Z = new k();
    return Z.setAttribute("position", new $(L, 3)), { fill: T, outline: Z };
  }
  function p(f, x, d) {
    const s = f / 2, a = x / 2, u = s - d, h = a - d, w = [];
    function g(T, L, Z, Y) {
      w.push(0, T, L, 0, Z, L, 0, Z, Y, 0, T, L, 0, Z, Y, 0, T, Y);
    }
    g(-s, -a, s, -h), g(-s, h, s, a), g(-s, -h, -u, h), g(u, -h, s, h);
    const A = new k();
    A.setAttribute("position", new $(new Float32Array(w), 3));
    const B = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), v = new k();
    return v.setAttribute("position", new $(B, 3)), { fill: A, outline: v };
  }
  function b(f, x, d) {
    const s = f / 2, a = x / 2, u = s - d, h = a - d, w = new k(), g = new Float32Array([0, -u, -h, 0, u, -h, 0, u, h, 0, -u, -h, 0, u, h, 0, -u, h]);
    w.setAttribute("position", new $(g, 3));
    const A = [];
    function B(Z, Y, W, H) {
      A.push(0, Z, Y, 0, W, Y, 0, W, H, 0, Z, Y, 0, W, H, 0, Z, H);
    }
    B(-s, -a, s, -h), B(-s, h, s, a), B(-s, -h, -u, h), B(u, -h, s, h);
    const v = new k();
    v.setAttribute("position", new $(new Float32Array(A), 3));
    const T = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), L = new k();
    return L.setAttribute("position", new $(T, 3)), { concFill: w, steelFillGeom: v, outline: L };
  }
  function y(f, x, d) {
    const s = [], a = [[0, -f / 2, -x / 2], [0, -f / 2 + d, -x / 2], [0, -f / 2 + d, x / 2 - d], [0, f / 2, x / 2 - d], [0, f / 2, x / 2], [0, -f / 2, x / 2]], u = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of u) s.push(...a[A]);
    const h = new k();
    h.setAttribute("position", new $(new Float32Array(s), 3));
    const w = [];
    for (let A = 0; A < a.length; A++) {
      const B = (A + 1) % a.length;
      w.push(...a[A], ...a[B]);
    }
    const g = new k();
    return g.setAttribute("position", new $(new Float32Array(w), 3)), { fill: h, outline: g };
  }
  function M(f, x, d, s) {
    const a = s / 2, u = [], h = [[0, -f - a, -x / 2], [0, -d - a, -x / 2], [0, -d - a, x / 2 - d], [0, -a, x / 2 - d], [0, -a, x / 2], [0, -f - a, x / 2]], w = [[0, a, -x / 2], [0, a + d, -x / 2], [0, a + d, x / 2 - d], [0, f + a, x / 2 - d], [0, f + a, x / 2], [0, a, x / 2]], g = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const T of g) u.push(...h[T]);
    for (const T of g) u.push(...w[T]);
    const A = new k();
    A.setAttribute("position", new $(new Float32Array(u), 3));
    const B = [];
    for (const T of [h, w]) for (let L = 0; L < T.length; L++) {
      const Z = (L + 1) % T.length;
      B.push(...T[L], ...T[Z]);
    }
    const v = new k();
    return v.setAttribute("position", new $(new Float32Array(B), 3)), { fill: A, outline: v };
  }
  function m(f, x, d, s) {
    const a = x / 2, u = f, h = [[0, -u, -a], [0, -u, -a + d], [0, -s, -a + d], [0, -s, a - d], [0, -u, a - d], [0, -u, a], [0, 0, a], [0, 0, -a]], w = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], g = [];
    for (const T of w) g.push(...h[T]);
    const A = new k();
    A.setAttribute("position", new $(new Float32Array(g), 3));
    const B = [];
    for (let T = 0; T < h.length; T++) {
      const L = (T + 1) % h.length;
      B.push(...h[T], ...h[L]);
    }
    const v = new k();
    return v.setAttribute("position", new $(new Float32Array(B), 3)), { fill: A, outline: v };
  }
  function C(f, x, d, s, a) {
    const u = x / 2, h = a / 2, w = [], g = [[0, -f, -u], [0, -f, -u + d], [0, -h - s, -u + d], [0, -h - s, u - d], [0, -f, u - d], [0, -f, u], [0, -h, u], [0, -h, -u]], A = g.map((Z) => [Z[0], -Z[1], Z[2]]), B = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of B) w.push(...g[Z]);
    for (const Z of B) w.push(...A[Z]);
    const v = new k();
    v.setAttribute("position", new $(new Float32Array(w), 3));
    const T = [];
    for (const Z of [g, A]) for (let Y = 0; Y < Z.length; Y++) {
      const W = (Y + 1) % Z.length;
      T.push(...Z[Y], ...Z[W]);
    }
    const L = new k();
    return L.setAttribute("position", new $(new Float32Array(T), 3)), { fill: v, outline: L };
  }
  function V(f, x, d, s) {
    const a = f / 2, u = x / 2, h = s / 2, w = [[0, -h, -u], [0, h, -u], [0, h, u - d], [0, a, u - d], [0, a, u], [0, -a, u], [0, -a, u - d], [0, -h, u - d]], g = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], A = [];
    for (const L of g) A.push(...w[L]);
    const B = new k();
    B.setAttribute("position", new $(new Float32Array(A), 3));
    const v = [];
    for (let L = 0; L < w.length; L++) {
      const Z = (L + 1) % w.length;
      v.push(...w[L], ...w[Z]);
    }
    const T = new k();
    return T.setAttribute("position", new $(new Float32Array(v), 3)), { fill: B, outline: T };
  }
  function z(f, x, d = 24) {
    const s = f / 2, a = s - x, u = [];
    for (let A = 0; A < d; A++) {
      const B = A / d * Math.PI * 2, v = (A + 1) / d * Math.PI * 2, T = Math.cos(B), L = Math.sin(B), Z = Math.cos(v), Y = Math.sin(v);
      u.push(0, s * T, s * L, 0, s * Z, s * Y, 0, a * Z, a * Y), u.push(0, s * T, s * L, 0, a * Z, a * Y, 0, a * T, a * L);
    }
    const h = new k();
    h.setAttribute("position", new $(new Float32Array(u), 3));
    const w = [];
    for (let A = 0; A < d; A++) {
      const B = A / d * Math.PI * 2, v = (A + 1) / d * Math.PI * 2;
      w.push(0, s * Math.cos(B), s * Math.sin(B), 0, s * Math.cos(v), s * Math.sin(v)), w.push(0, a * Math.cos(B), a * Math.sin(B), 0, a * Math.cos(v), a * Math.sin(v));
    }
    const g = new k();
    return g.setAttribute("position", new $(new Float32Array(w), 3)), { fill: h, outline: g };
  }
  const X = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), E = new et({ color: 52479 }), I = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), P = new et({ color: 16750848 });
  function S(f, x) {
    const d = Math.abs(x[0] - f[0]), s = Math.abs(x[1] - f[1]), a = Math.abs(x[2] - f[2]);
    return a > d && a > s || s > d && s > a;
  }
  return F.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const f = e.secColumns.rawVal, x = e.secBeams.rawVal;
    if (!f && !x) {
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
    d.forEach((h, w) => {
      if (h.length !== 2) return;
      const g = l.rawVal[h[0]], A = l.rawVal[h[1]];
      if (!g || !A) return;
      const B = S(g, A);
      if (B && !f || !B && !x) return;
      if (u >= 0) {
        const Y = Math.min(g[1], A[1]);
        Math.max(g[1], A[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(Y / W + 0.01) !== u) return;
      }
      const v = a == null ? void 0 : a.get(w);
      if (!v) return;
      const T = [(g[0] + A[0]) / 2, (g[1] + A[1]) / 2, (g[2] + A[2]) / 2], L = Ft(g, A);
      if (v.type === "CFT") {
        const Y = b(v.b, v.h, v.tw ?? v.b * 0.05), W = new D(Y.concFill, X);
        W.position.set(...T), W.rotation.setFromRotationMatrix(L), n.add(W);
        const H = new D(Y.steelFillGeom, I);
        H.position.set(...T), H.rotation.setFromRotationMatrix(L), n.add(H);
        const _ = new nt(Y.outline, P);
        _.position.set(...T), _.rotation.setFromRotationMatrix(L), n.add(_);
      } else {
        let Y, W, H;
        switch (v.type) {
          case "rect":
            Y = r(v.b, v.h), W = X, H = E;
            break;
          case "circ":
            Y = c(v.d), W = X, H = E;
            break;
          case "I":
            Y = i(v.b, v.h, v.tf, v.tw), W = I, H = P;
            break;
          case "HSS":
            Y = p(v.b, v.h, v.tw ?? v.b * 0.05), W = I, H = P;
            break;
          case "CFT":
            Y = b(v.b, v.h, v.tw ?? v.b * 0.05), W = I, H = P;
            break;
          case "L":
            Y = y(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3), W = I, H = P;
            break;
          case "2L":
            Y = M(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3, v.dis ?? 0.01), W = I, H = P;
            break;
          case "C":
          case "coldC":
            Y = m(v.b, v.h, v.tf ?? v.t ?? 3e-3, v.tw ?? v.t ?? 3e-3), W = I, H = P;
            break;
          case "2C":
            Y = C(v.b, v.h, v.tf ?? 5e-3, v.tw ?? 5e-3, v.dis ?? 0.01), W = I, H = P;
            break;
          case "T":
            Y = V(v.b, v.h, v.tf ?? 0.01, v.tw ?? 6e-3), W = I, H = P;
            break;
          case "pipe":
            Y = z(v.d, v.tw ?? v.d * 0.05), W = I, H = P;
            break;
          default:
            return;
        }
        const _ = new D(Y.fill, W);
        _.position.set(...T), _.rotation.setFromRotationMatrix(L), n.add(_);
        const N = new nt(Y.outline, H);
        N.position.set(...T), N.rotation.setFromRotationMatrix(L), n.add(N);
      }
      const Z = de(v);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(v.type) ? "#ff9900" : "#00ccff", H = new q(Z, W, "transparent");
        H.position.set(T[0], T[1], T[2]);
        const _ = 0.05 * e.gridSize.rawVal * 0.5;
        H.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(H);
      }
    });
  }), o && F.derive(() => {
    if (o.val, !e.sections.rawVal) return;
    const f = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((x) => {
      x instanceof q && x.updateScale(f * o.rawVal);
    });
  }), F.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends U {
  constructor(e, l, o, n, r, c, i) {
    super();
    const p = new ht().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), b = p.getPoints(), y = new k().setFromPoints(b);
    this.lines = new nt(y, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const M = new ut(p), m = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(M, m), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new q(`${r[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = ot([e, l]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Pt extends U {
  constructor(e, l, o, n, r, c, i) {
    super();
    const p = r[0] * o / (r[0] + r[1]), b = r[0] * r[1] > 0;
    if (this.text = new q(`${r[0].toFixed(4)}`), this.text2 = new q(`${(r[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = gt(e, l), this.text2Position = gt(l, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), b) {
      const y = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(p, 0).lineTo(0, 0), M = new ht().moveTo(p, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(p, 0), m = y.getPoints(), C = M.getPoints(), V = new k().setFromPoints(m), z = new k().setFromPoints(C), X = new et({ color: j().resultOutline });
      this.lines = new nt(V, X), this.lines2 = new nt(z, X), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), i && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const E = new ut(y), I = new ut(M), P = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), S = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(E, P), this.mesh2 = new D(I, S), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), i && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const y = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), M = y.getPoints(), m = new k().setFromPoints(M);
      this.lines = new nt(m, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const C = new ut(y), V = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(C, V), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Xt = ((t) => (t.normals = "normals", t.shearsY = "shearsY", t.shearsZ = "shearsZ", t.torsions = "torsions", t.bendingsY = "bendingsY", t.bendingsZ = "bendingsZ", t))(Xt || {});
function ue(t, e, l, o) {
  const n = new U(), r = { normals: lt, shearsY: lt, shearsZ: lt, torsions: lt, bendingsY: Pt, bendingsZ: Pt };
  return F.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, l.val, e.frameResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const c = Xt[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((i, p) => {
      var _a2, _b2;
      const b = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[p]) ?? [0, 1], y = l.rawVal[b[0]], M = l.rawVal[b[1]], m = new R(...M).distanceTo(new R(...y)), C = pe((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), V = i == null ? void 0 : i.map((I) => I / (C === 0 ? 1 : C)), z = Ft(y, M), X = new r[c](y, M, m, z, i ?? [0, 0], V ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), E = 0.05 * e.gridSize.rawVal;
      X.updateScale(E * o.rawVal), n.add(X);
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
class me extends U {
  constructor(e, l, o) {
    super();
    const n = l === Ct.reactions;
    o[0] && (this.xText1 = new q(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new q(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new q(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new q(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new q(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new q(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new tt(new R(1, 0, 0), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new tt(new R(0, 1, 0), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new tt(new R(0, 0, 1), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...e), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function fe(t, e, l, o) {
  const n = new U();
  return F.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const r = Ct[e.nodeResults.rawVal], c = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[r]) == null ? void 0 : _b.forEach((i, p) => {
      const b = new me(l.rawVal[p], r, i ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(c * o.rawVal), n.add(b);
    });
  }), F.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const r = 0.05 * e.gridSize.val;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), F.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function we({ drawingObj: t, gridObj: e, scene: l, camera: o, controls: n, gridSize: r, derivedDisplayScale: c, rendererElm: i, viewerRender: p }) {
  const b = new Lt(), y = new kt(), M = new D(new Zt(r, r), new Q({ side: O })), m = new ct(new k(), new dt()), C = new ct(new k(), new dt({ color: "gray" })), V = new ct(new k(), new dt({ color: "orange", size: 0.8 }));
  l.add(V), m.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), m.geometry.computeBoundingSphere(), m.frustumCulled = false, C.frustumCulled = false, l.add(C), M.position.set(0.5 * r, 0.5 * r, 0), M.rotateX(Math.PI / 2), M.geometry.rotateX(Math.PI / 2), M.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), F.derive(() => {
    t.gridTarget && (ve(e, { position: new R(...t.gridTarget.val.position), quaternion: new Wt().setFromEuler(new St(...t.gridTarget.val.rotation)) }, p), M.position.set(...t.gridTarget.val.position), M.quaternion.setFromEuler(new St(...t.gridTarget.val.rotation)), M.updateMatrixWorld());
  }), F.derive(() => {
    m.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), m.geometry.computeBoundingSphere();
  }), F.derive(() => {
    const P = 0.05 * r * 0.5 * c.val;
    C.material.size = P, b.params.Points.threshold = 0.4 * P;
  }), F.derive(() => {
    var _a;
    const P = t.points.val ?? [], f = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], x = [];
    for (const s of f) {
      const [a, u, h] = P[s];
      x.push(a, u, h);
    }
    const d = new k();
    d.setAttribute("position", new K(x, 3)), V.geometry.dispose(), V.geometry = d;
  });
  let z = false, X = 0;
  i.addEventListener("pointerdown", () => {
    z = true;
  }), i.addEventListener("pointerup", () => {
    z = false;
  }), i.addEventListener("pointermove", () => {
    z && X++;
  }), i.addEventListener("click", (P) => {
    if (X > 5) {
      X = 0;
      return;
    }
    X = 0, y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(y, o);
    const S = b.intersectObject(M);
    if (S.length) {
      let f = S[0].point;
      (P.ctrlKey || P.metaKey) && (f = new R(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), t.points.val = [...t.points.rawVal, f.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), i.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), i.addEventListener("pointermove", (P) => {
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(y, o);
    const S = b.intersectObject(M);
    if (C.geometry.deleteAttribute("position"), S.length) {
      let f = S[0].point;
      (P.ctrlKey || P.metaKey) && (f = new R(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), C.geometry.setAttribute("position", new K(f.toArray(), 3));
    }
    p();
  }), i.addEventListener("pointermove", (P) => {
    var _a;
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(y, o);
    let S = false;
    const f = b.intersectObject(m), x = b.intersectObject(M);
    if (f.length && x.length) {
      const d = new R(...t.points.rawVal[f[0].index]), s = new R(...x[0].point), a = d.sub(s), u = (_a = x[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(M.matrixWorld), Math.abs(a.dot(u)) < 1e-4 && (S = true);
    }
    C.visible = !S;
  });
  let E = false, I;
  i.addEventListener("pointermove", (P) => {
    var _a;
    if (!X) return;
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(y, o);
    let S = false;
    const f = b.intersectObject(m), x = b.intersectObject(M);
    if (f.length && x.length) {
      const s = new R(...t.points.rawVal[f[0].index]), a = new R(...x[0].point), u = s.sub(a), h = (_a = x[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(M.matrixWorld), Math.abs(u.dot(h)) < 1e-4 && (S = true);
    }
    if (S && X < 5 && (E = true, n.enabled = false, I = f[0].index), !E || X % 2 !== 0) return;
    const d = [...t.points.rawVal];
    if (I !== void 0) {
      let s = x[0].point;
      (P.ctrlKey || P.metaKey) && (s = new R(Math.round(s.x), Math.round(s.y), Math.round(s.z))), d[I] = s.toArray();
    }
    t.points.val = d;
  }), i.addEventListener("pointerup", () => {
    n.enabled = true, E = false;
  }), i.addEventListener("contextmenu", (P) => {
    var _a;
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(y, o);
    let S = false;
    const f = b.intersectObject(m), x = b.intersectObject(M);
    if (f.length && x.length) {
      const a = new R(...t.points.rawVal[f[0].index]), u = new R(...x[0].point), h = a.sub(u), w = (_a = x[0].face) == null ? void 0 : _a.normal;
      w.transformDirection(M.matrixWorld), Math.abs(h.dot(w)) < 1e-4 && (S = true);
    }
    if (!S) return;
    const d = [...t.points.rawVal];
    if (d.splice(f[0].index, 1), t.points.val = d, !t.polylines) return;
    const s = t.polylines.rawVal.map((a) => a.filter((u) => u !== f[0].index)).map((a) => a.map((u) => u > f[0].index ? u - 1 : u)).filter((a) => a.length);
    s.push([]), t.polylines.val = s;
  });
}
function ve(t, e, l) {
  const r = Math.round(14.999999999999998), c = { position: t.position.clone(), quaternion: t.quaternion.clone() }, i = setInterval(b, 1e3 / 30);
  let p = 0;
  function b() {
    p++;
    const y = p / r;
    t.position.lerpVectors(c.position, e.position, y), t.quaternion.slerpQuaternions(c.quaternion, e.quaternion, y), l && l(), p == r && clearInterval(i);
  }
}
class Et {
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
      for (let p = 0; p < this.map.length - 1; p++) if (i > this.map[p][0] && i <= this.map[p + 1][0]) {
        const b = this.map[p][0], y = this.map[p + 1][0];
        n.setHex(this.map[p][1], rt), r.setHex(this.map[p + 1][1], rt);
        const M = new G().lerpColors(n, r, (i - b) / (y - b));
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
    const c = 1 / this.n, i = new G(), p = new G(), b = new G();
    for (let y = 1; y >= 0; y -= c) for (let M = this.map.length - 1; M >= 0; M--) if (y < this.map[M][0] && y >= this.map[M - 1][0]) {
      const m = this.map[M - 1][0], C = this.map[M][0];
      i.setHex(this.map[M - 1][1], rt), p.setHex(this.map[M][1], rt), b.lerpColors(i, p, (y - m) / (C - m)), n[r * 4] = Math.round(b.r * 255), n[r * 4 + 1] = Math.round(b.g * 255), n[r * 4 + 2] = Math.round(b.b * 255), n[r * 4 + 3] = 255, r += 1;
    }
    return l.putImageData(o, 0, 0), e;
  }
}
const Mt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function xe(t, e, l) {
  const o = new Et(), n = new G(), r = new D(new k(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), r.renderOrder = -1, r.frustumCulled = false, F.derive(() => {
    r.geometry.setAttribute("position", new K(t.val.flat(), 3));
    const c = [];
    for (const i of e.val) i.length === 3 ? c.push(i[0], i[1], i[2]) : i.length === 4 && (c.push(i[0], i[1], i[2]), c.push(i[0], i[2], i[3]));
    r.geometry.setIndex(new _t(c, 1)), r.geometry.setAttribute("color", new K(t.val.map(() => [0, 0, 0]).flat(), 3)), o.setMax(Math.max(...l.val)), o.setMin(Math.min(...l.val));
    for (let i = 0; i < l.val.length; i++) {
      const p = o.getColor(l.val[i]) ?? new G(0, 0, 0);
      n.copy(p).convertSRGBToLinear(), n.multiplyScalar(0.6), r.geometry.attributes.color.setXYZ(i, n.r, n.g, n.b);
    }
  }), r;
}
function ye(t, e, l, o) {
  const n = xe(l, t.elements, o);
  return F.derive(() => {
    n.visible = e.shellResults.val != "none";
  }), n;
}
const Me = 6, bt = 10, be = 0.012;
function ge(t) {
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
  const n = new U(), r = new Et();
  r.setColorMap("rainbow");
  const c = new G(), i = F.state([]);
  return F.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const p = l.val, b = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], y = ge(e.frameResults.val);
    if (n.children.forEach((w) => {
      w.geometry && w.geometry.dispose(), w.material && w.material.dispose();
    }), n.clear(), !y || b.length === 0 || p.length === 0) {
      i.val = [];
      return;
    }
    const M = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, m = (_c = t.deformOutputs) == null ? void 0 : _c.val, C = [], V = [];
    for (let w = 0; w < b.length; w++) {
      if (b[w].length !== 2) continue;
      const A = Fe(y, w, M, m);
      A && (C.push(A[0], A[1]), V.push({ idx: w, vals: A }));
    }
    if (C.length === 0) {
      i.val = [];
      return;
    }
    const z = Math.min(...C), X = Math.max(...C);
    r.setMin(z), r.setMax(X), i.val = C;
    const E = [1 / 0, 1 / 0, 1 / 0], I = [-1 / 0, -1 / 0, -1 / 0];
    for (const w of p) for (let g = 0; g < 3; g++) E[g] = Math.min(E[g], w[g]), I[g] = Math.max(I[g], w[g]);
    const S = Math.max(I[0] - E[0], I[1] - E[1], I[2] - E[2], 1) * be, f = [], x = [], d = [];
    let s = 0;
    for (const { idx: w, vals: g } of V) {
      const A = b[w], B = p[A[0]], v = p[A[1]];
      if (!B || !v) continue;
      const T = new R(v[0] - B[0], v[1] - B[1], v[2] - B[2]), L = T.length();
      if (L < 1e-10) continue;
      T.normalize();
      const Z = Math.abs(T.y) < 0.99 ? new R(0, 1, 0) : new R(1, 0, 0), Y = new R().crossVectors(T, Z).normalize(), W = new R().crossVectors(T, Y).normalize(), H = bt + 1, _ = Me;
      for (let N = 0; N < H; N++) {
        const J = N / bt, st = B[0] + T.x * L * J, it = B[1] + T.y * L * J, mt = B[2] + T.z * L * J, ft = g[0] + (g[1] - g[0]) * J, at = r.getColor(ft) ?? new G(0, 0, 0);
        c.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const Vt = wt / _ * Math.PI * 2, vt = Math.cos(Vt), xt = Math.sin(Vt);
          f.push(st + (Y.x * vt + W.x * xt) * S, it + (Y.y * vt + W.y * xt) * S, mt + (Y.z * vt + W.z * xt) * S), x.push(c.r, c.g, c.b);
        }
      }
      for (let N = 0; N < bt; N++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = s + N * _ + J, mt = s + N * _ + st, ft = s + (N + 1) * _ + J, at = s + (N + 1) * _ + st;
        d.push(it, mt, at), d.push(it, at, ft);
      }
      s += H * _;
    }
    if (f.length === 0) return;
    const a = new k();
    a.setAttribute("position", new K(f, 3)), a.setAttribute("color", new K(x, 3)), a.setIndex(d), a.computeVertexNormals();
    const u = new Q({ vertexColors: true, side: O }), h = new D(a, u);
    h.frustumCulled = false, n.add(h);
  }), n.__colorMapValues = i, n;
}
function Tt(t, e = 8) {
  const l = document.createElement("div");
  l.id = "legend";
  const o = Array.from({ length: e + 1 }, (i, p) => p / e).reverse();
  let n, r;
  o.forEach((i, p) => {
    n = document.createElement("div"), n.id = `marker-${p}`, n.className = "marker", n.style.marginTop = p == 0 ? "0px" : `calc(${50 / e}vh - 1px)`, r = document.createElement("p"), r.id = `marker-text-${p}`, n.append(r), l.append(n);
  });
  const c = [];
  return l.querySelectorAll("p").forEach((i) => c.push(i)), setTimeout(() => {
    F.derive(() => {
      o.forEach((i, p) => {
        const b = c[p];
        b && (b.innerText = Ve(t.val, i).toString());
      });
    });
  }), l;
}
function Ve(t, e) {
  const l = Math.max(...t) - Math.min(...t);
  return (Math.min(...t) + e * l).toPrecision(3);
}
function Ye({ mesh: t, settingsObj: e, drawingObj: l, objects3D: o, solids: n }) {
  Dt.DEFAULT_UP = new R(0, 0, 1);
  const r = document.createElement("div"), c = new $t(), i = new Gt(45, 1, 0.1, 2 * 1e6), p = new qt(-10, 10, 10, -10, -1e3, 2e6);
  let b = i;
  const y = new Nt({ antialias: true });
  y.localClippingEnabled = true;
  const M = new Kt(i, y.domElement), m = Ot(e), C = F.derive(() => m.displayScale.val === 0 ? 1 : m.displayScale.val > 0 ? m.displayScale.val : -1 / m.displayScale.val), V = Se(t, m);
  let z = zt(m.gridSize.rawVal);
  r.appendChild(Jt(m, t, n)), r.setAttribute("id", "viewer"), r.appendChild(y.domElement), y.setPixelRatio(window.devicePixelRatio);
  const X = j();
  y.setClearColor(X.background, 1);
  const E = m.gridSize.rawVal, I = E * 0.5 + E * 0.5 / Math.tan(45 * 0.5);
  i.position.set(0.5 * E, 0.8 * -I, 0.5 * E), M.target.set(0.5 * E, 0.5 * E, 0), M.minDistance = 1, M.maxDistance = I * 2.5, M.zoomSpeed = 10, M.update(), c.add(z, re(m.gridSize.rawVal, m.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const s of d) {
      const a = (_a = s.target) == null ? void 0 : _a.clientWidth, u = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (a === 0 || u === 0) continue;
      i.aspect = a / u, i.updateProjectionMatrix();
      const h = a / u, w = p.top;
      p.left = -w * h, p.right = w * h, p.updateProjectionMatrix(), y.setSize(a, u), S();
    }
  }).observe(r), M.addEventListener("change", S), F.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, m.displayScale.val, m.nodes.val, m.elements.val, m.elemColumns.val, m.elemBeams.val, m.nodesIndexes.val, m.elementsIndexes.val, m.orientations.val, m.sections.val, m.secColumns.val, m.secBeams.val, m.secFloor.val, m.supports.val, m.loads.val, m.deformedShape.val, m.nodeResults.val, m.frameResults.val, m.shellResults.val, setTimeout(S);
  });
  function S() {
    y.render(c, b);
  }
  function f(d) {
    b = d, M.object = d, M.update(), S();
  }
  if (t) {
    c.add(jt(m, V, C), te(t, m, V), se(m, V, C), ie(t, m, V, C), ne(t, m, V, C), oe(t, m, V, C), ce(t, m, V, C), he(t, m, V, C), fe(t, m, V, C), ue(t, m, V, C));
    const d = Ae(t, m), s = ye(t, m, V, d), a = Tt(d);
    c.add(s), r.appendChild(a);
    const u = Ce(t, m, V);
    c.add(u);
    const h = u.__colorMapValues, w = Tt(h);
    w.id = "frame-legend", r.appendChild(w), F.derive(() => {
      const g = m.shellResults.val != "none", A = m.frameResults.val.startsWith("contour:");
      a.hidden = !g, s.visible = g, w.hidden = !A;
    });
  }
  if (n) {
    const d = new Ut(16777215, 0.5);
    c.add(d);
    const s = new At(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, c.add(s);
    const a = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = a, s.shadow.camera.top = a, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const u = new At(16777215, 0.5);
    u.color.setHSL(11, 43, 96), u.position.set(-10, 0, 30), c.add(u), F.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), S());
    }), F.derive(() => {
      n.rawVal.forEach((h) => h.visible = m.solids.val), S();
    });
  }
  o && F.derive(() => {
    (o == null ? void 0 : o.val.length) && (c.remove(...o.oldVal), c.add(...o.rawVal), S());
  }), l && we({ drawingObj: l, gridObj: z, scene: c, camera: i, controls: M, gridSize: E, derivedDisplayScale: C, rendererElm: y.domElement, viewerRender: S }), pt((d, s) => {
    y.setClearColor(s.background, 1), c.remove(z), z.geometry.dispose(), z.material.dispose(), z = zt(m.gridSize.rawVal), c.add(z), r.style.setProperty("--awatif-legend-color", s.legendMarker), S();
  });
  const x = { scene: c, perspCamera: i, orthoCamera: p, get camera() {
    return b;
  }, controls: M, renderer: y, rendererElm: y.domElement, render: S, setActiveCamera: f, settings: m };
  return r.__ctx = x, r;
}
function Se(t, e) {
  return F.derive(() => {
    var _a, _b, _c, _d, _e;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const l = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || l.length === 0) return l;
    let n = 1 / 0, r = 1 / 0, c = 1 / 0, i = -1 / 0, p = -1 / 0, b = -1 / 0;
    for (const z of l) z[0] < n && (n = z[0]), z[0] > i && (i = z[0]), z[1] < r && (r = z[1]), z[1] > p && (p = z[1]), z[2] < c && (c = z[2]), z[2] > b && (b = z[2]);
    const y = Math.sqrt((i - n) ** 2 + (p - r) ** 2 + (b - c) ** 2);
    let M = 0;
    o.forEach((z) => {
      const X = Math.sqrt(z[0] ** 2 + z[1] ** 2 + z[2] ** 2);
      X > M && (M = X);
    });
    const m = M > 1e-30 && y > 1e-30 ? 0.07 * y / M : 1, C = ((_e = e.displayScale) == null ? void 0 : _e.val) ?? 1, V = m * C;
    return l.map((z, X) => {
      var _a2;
      const E = ((_a2 = o.get(X)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return z.map((I, P) => I + E[P] * V);
    });
  });
}
function Ae(t, e) {
  const l = F.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), F.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), C = (X, E) => {
      X == null ? void 0 : X.forEach((I, P) => {
        const S = t.elements.val[P];
        if (S) for (let f = 0; f < S.length; f++) E.set(S[f], [I[f] ?? I[0]]);
      });
    };
    C((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), C((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, r), C((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, c), C((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, i), C((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, p), C((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), C((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, y), C((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, M), C((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, m);
    const V = { bendingXX: [n, 0], bendingYY: [r, 0], bendingXY: [c, 0], membraneXX: [i, 0], membraneYY: [p, 0], membraneXY: [b, 0], tranverseShearX: [y, 0], tranverseShearY: [M, 0], vonMises: [m, 0], displacementX: [(_t2 = (_s = t.deformOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.deformations, 0], displacementY: [(_v = (_u = t.deformOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.deformations, 1], displacementZ: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 2] }, z = [];
    t.nodes.val.forEach((X, E) => {
      const I = V[e.shellResults.val];
      if (!I || !I[0] || typeof I[0].has != "function") return;
      if (!I[0].has(E)) {
        z.push(0);
        return;
      }
      const P = I[0].get(E);
      z.push(P ? P[I[1]] ?? 0 : 0);
    }), l.val = z;
  }), l;
}
export {
  xe as a,
  Tt as b,
  Ye as g
};
