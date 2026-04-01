import { H as ct, B as k, I as dt, F as K, G as U, h as Yt, a as et, j as Q, D as O, e as D, C as G, l as Bt, i as Rt, V as B, A as tt, z as q, J as yt, d as It, L as nt, c as $, r as ht, K as ut, R as Lt, f as kt, N as Zt, U as Wt, X as St, Y as rt, Z as Ht, _ as _t, t as $t, u as Gt, v as qt, W as Nt, w as Kt, x as Ut, y as At, O as Dt } from "./Text-CBH-tcJP.js";
import { v as C, P as Qt, g as j, o as pt } from "./theme-CzzIlc4y.js";
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
  return { gridSize: C.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: C.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: C.state((t == null ? void 0 : t.nodes) ?? true), elements: C.state((t == null ? void 0 : t.elements) ?? true), elemColumns: C.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: C.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: C.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: C.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: C.state((t == null ? void 0 : t.orientations) ?? false), sections: C.state((t == null ? void 0 : t.sections) ?? true), secColumns: C.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: C.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: C.state((t == null ? void 0 : t.secFloor) ?? -1), supports: C.state((t == null ? void 0 : t.supports) ?? true), loads: C.state((t == null ? void 0 : t.loads) ?? false), deformedShape: C.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: C.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: C.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: C.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: C.state((t == null ? void 0 : t.flipAxes) ?? false), solids: C.state((t == null ? void 0 : t.solids) ?? true) };
}
function jt(t, e, l) {
  const o = j(), n = new ct(new k(), new dt({ color: o.nodePoint }));
  return pt((r, c) => {
    n.material.color.setHex(c.nodePoint);
  }), n.frustumCulled = false, C.derive(() => {
    t.nodes.val && n.geometry.setAttribute("position", new K(e.val.flat(), 3));
  }), C.derive(() => {
    l.val;
    const r = 0.05 * t.gridSize.val * 0.5;
    t.nodes.rawVal && (n.material.size = r * l.rawVal);
  }), C.derive(() => {
    n.visible = t.nodes.val;
  }), n;
}
function te(t, e, l) {
  const o = j(), n = new U(), r = new Yt(new k(), new et({ color: o.elementLine }));
  pt((m, V) => {
    r.material.color.setHex(V.elementLine);
  }), r.frustumCulled = false, n.add(r);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), i = new D(new k(), c);
  i.frustumCulled = false, n.add(i);
  let p = new G(o.shellWall), g = new G(o.shellSlab), y = new G(o.shellTri);
  pt((m, V) => {
    p = new G(V.shellWall), g = new G(V.shellSlab), y = new G(V.shellTri), c.opacity = V.shellOpacity, c.needsUpdate = true;
  });
  function b(m, V) {
    const M = Math.abs(V[0] - m[0]), T = Math.abs(V[1] - m[1]), L = Math.abs(V[2] - m[2]);
    return L > M && L > T || T > M && T > L;
  }
  return C.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const m = e.elemColumns.rawVal, V = e.elemBeams.rawVal, M = l.val, T = ((_a = t.elements) == null ? void 0 : _a.val) || [], L = T.filter((S) => {
      if (S.length !== 2) return true;
      const f = M[S[0]], x = M[S[1]];
      if (!f || !x) return true;
      const d = b(f, x);
      return !(d && !m || !d && !V);
    }).map((S) => ee(S).map((f) => [...M[f[0]], ...M[f[1]]]).flat()).flat();
    r.geometry.setAttribute("position", new K(L, 3));
    const X = [], I = [];
    function P(S, f, x, d) {
      const s = [f[0] - S[0], f[1] - S[1], f[2] - S[2]], a = [d[0] - S[0], d[1] - S[1], d[2] - S[2]], u = s[1] * a[2] - s[2] * a[1], h = s[2] * a[0] - s[0] * a[2], w = s[0] * a[1] - s[1] * a[0], F = Math.sqrt(u * u + h * h + w * w);
      return F < 1e-12 ? false : Math.abs(w / F) < 0.5;
    }
    for (const S of T) if (S.length === 3) {
      const [f, x, d] = S;
      if (M[f] && M[x] && M[d]) {
        X.push(...M[f], ...M[x], ...M[d]);
        for (let s = 0; s < 3; s++) I.push(y.r, y.g, y.b);
      }
    } else if (S.length === 4) {
      const [f, x, d, s] = S;
      if (M[f] && M[x] && M[d] && M[s]) {
        const a = P(M[f], M[x], M[d], M[s]) ? p : g;
        X.push(...M[f], ...M[x], ...M[d]), X.push(...M[f], ...M[d], ...M[s]);
        for (let u = 0; u < 6; u++) I.push(a.r, a.g, a.b);
      }
    }
    X.length > 0 ? (i.geometry.dispose(), i.geometry = new k(), i.geometry.setAttribute("position", new K(X, 3)), i.geometry.setAttribute("color", new K(I, 3)), i.geometry.computeVertexNormals(), i.visible = true) : i.visible = false;
  }), C.derive(() => {
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
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const i = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((p, g) => {
      const y = l.val[g];
      if (!y) return;
      const b = new D(r, c);
      b.position.set(...y);
      const m = i * o.rawVal;
      b.scale.set(m, m, m), n.add(b);
    });
  }), C.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const p = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((g) => g.scale.set(p, p, p));
  }), C.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function oe(t, e, l, o) {
  const n = new U();
  n.name = "loadsGroup";
  function r(c) {
    if (c.length < 2) return 0.12 * e.gridSize.rawVal;
    const i = [1 / 0, 1 / 0, 1 / 0], p = [-1 / 0, -1 / 0, -1 / 0];
    for (const y of c) for (let b = 0; b < 3; b++) i[b] = Math.min(i[b], y[b]), p[b] = Math.max(p[b], y[b]);
    return 0.08 * Math.max(p[0] - i[0], p[1] - i[1], p[2] - i[2], 0.1);
  }
  return C.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((p) => p.dispose()), n.clear();
    const c = l.val, i = r(c);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((p, g) => {
      const y = c[g];
      if (!y) return;
      const b = new B(...p.slice(0, 3));
      if (b.lengthSq() < 1e-30) return;
      b.normalize();
      const m = new tt(b, new B(...y), 1, 15637248, 0.3, 0.3), V = i * o.rawVal;
      m.scale.set(V, V, V), n.add(m);
    });
  }), C.derive(() => {
    if (o.val, !e.loads.rawVal) return;
    const i = r(l.rawVal) * o.rawVal;
    n.children.forEach((p) => p.scale.set(i, i, i));
  }), C.derive(() => {
    n.visible = e.loads.val;
  }), n;
}
function se(t, e, l) {
  const o = new U();
  return C.derive(() => {
    if (!t.nodesIndexes.val) return;
    o.children.forEach((r) => r.dispose()), o.clear();
    const n = 0.05 * t.gridSize.val * 0.6;
    e.val.forEach((r, c) => {
      const i = new q(`${c}`);
      i.position.set(...r), i.updateScale(n * l.rawVal), o.add(i);
    });
  }), C.derive(() => {
    if (l.val, !t.nodesIndexes.rawVal) return;
    const n = 0.05 * t.gridSize.val * 0.6;
    o.children.forEach((r) => r.updateScale(n * l.rawVal));
  }), C.derive(() => {
    o.visible = t.nodesIndexes.val;
  }), o;
}
function ie(t, e, l, o) {
  const n = new U();
  return C.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const r = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((c, i) => {
      const p = new q(`${i}`, void 0, "#001219");
      p.position.set(...ae(c.map((g) => l.rawVal[g]))), p.updateScale(r * o.rawVal), n.add(p);
    });
  }), C.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const r = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), C.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function ae(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = t.length;
  return [e[0] / l, e[1] / l, e[2] / l];
}
function re(t, e) {
  const l = new U(), o = 0.05 * t * 1, n = j(), r = new q("X", "red", "transparent"), c = new q(e ? "Z" : "Y", "green", "transparent"), i = new q(e ? "Y" : "Z", "blue", "transparent"), p = new tt(new B(1, 0, 0), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), g = new tt(new B(0, 1, 0), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), y = new tt(new B(0, 0, 1), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return r.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), i.position.set(0, 0, 1.3 * o), r.updateScale(0.4 * o), c.updateScale(0.4 * o), i.updateScale(0.4 * o), p.scale.set(o, o, o), g.scale.set(o, o, o), y.scale.set(o, o, o), l.add(p, g, y, r, c, i), l;
}
function Ft(t, e) {
  const l = new B(...t), n = new B(...e).clone().sub(l), r = n.length(), c = n.dot(new B(1, 0, 0)) / r, i = n.dot(new B(0, 1, 0)) / r, p = n.dot(new B(0, 0, 1)) / r, g = Math.sqrt(c ** 2 + i ** 2);
  let y = new yt().fromArray([[c, i, p], [-i / g, c / g, 0], [-c * p / g, -i * p / g, g]].flat());
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
  const o = ot([e, l]), n = ot([t, l]), r = ot([t, e]), c = new B(...o).sub(new B(...n)).normalize(), i = new B(...l).sub(new B(...r)).normalize(), p = c.clone().cross(i).normalize(), g = p.clone().cross(c).normalize();
  return new It().makeBasis(c, g, p);
}
function ce(t, e, l, o) {
  const n = new U(), r = new k(), c = new et({ vertexColors: true }), i = [0, 0, 0], p = [1, 0, 0], g = [0, 1, 0], y = [0, 0, 1];
  r.setAttribute("position", new K([...i, ...p, ...i, ...g, ...i, ...y], 3));
  const b = [255, 0, 0], m = [0, 255, 0], V = [0, 0, 255];
  return r.setAttribute("color", new K([...b, ...b, ...m, ...m, ...V, ...V], 3)), C.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((M) => {
      const T = new Yt(r, c), L = l.rawVal[M[0]], X = l.rawVal[M[1]];
      if (M.length === 2 && (T.position.set(...gt(L, X)), T.rotation.setFromRotationMatrix(Ft(L, X))), M.length === 3) {
        const S = l.rawVal[M[2]];
        T.position.set(...ot([L, X, S])), T.rotation.setFromRotationMatrix(le(L, X, S));
      }
      const P = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      T.scale.set(P, P, P), n.add(T);
    }));
  }), C.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const T = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((L) => L.scale.set(T, T, T));
  }), C.derive(() => {
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
      const F = w / x * Math.PI * 2, A = (w + 1) / x * Math.PI * 2;
      s[w * 9] = 0, s[w * 9 + 1] = 0, s[w * 9 + 2] = 0, s[w * 9 + 3] = 0, s[w * 9 + 4] = d * Math.cos(F), s[w * 9 + 5] = d * Math.sin(F), s[w * 9 + 6] = 0, s[w * 9 + 7] = d * Math.cos(A), s[w * 9 + 8] = d * Math.sin(A);
    }
    const a = new k();
    a.setAttribute("position", new $(s, 3));
    const u = new Float32Array((x + 1) * 3);
    for (let w = 0; w <= x; w++) {
      const F = w / x * Math.PI * 2;
      u[w * 3] = 0, u[w * 3 + 1] = d * Math.cos(F), u[w * 3 + 2] = d * Math.sin(F);
    }
    const h = new k();
    return h.setAttribute("position", new $(u, 3)), { fill: a, outline: h };
  }
  function i(f, x, d, s) {
    const a = d ?? x * 0.08, u = s ?? f * 0.07, h = f / 2, w = x / 2, F = w - a, A = u / 2, E = [];
    function v(Y, W, H, _) {
      E.push(0, Y, W, 0, H, W, 0, H, _, 0, Y, W, 0, H, _, 0, Y, _);
    }
    v(-h, -w, h, -F), v(-A, -F, A, F), v(-h, F, h, w);
    const z = new k();
    z.setAttribute("position", new $(new Float32Array(E), 3));
    const R = new Float32Array([0, -h, -w, 0, h, -w, 0, h, -F, 0, A, -F, 0, A, F, 0, h, F, 0, h, w, 0, -h, w, 0, -h, F, 0, -A, F, 0, -A, -F, 0, -h, -F, 0, -h, -w]), Z = new k();
    return Z.setAttribute("position", new $(R, 3)), { fill: z, outline: Z };
  }
  function p(f, x, d) {
    const s = f / 2, a = x / 2, u = s - d, h = a - d, w = [];
    function F(z, R, Z, Y) {
      w.push(0, z, R, 0, Z, R, 0, Z, Y, 0, z, R, 0, Z, Y, 0, z, Y);
    }
    F(-s, -a, s, -h), F(-s, h, s, a), F(-s, -h, -u, h), F(u, -h, s, h);
    const A = new k();
    A.setAttribute("position", new $(new Float32Array(w), 3));
    const E = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), v = new k();
    return v.setAttribute("position", new $(E, 3)), { fill: A, outline: v };
  }
  function g(f, x, d) {
    const s = f / 2, a = x / 2, u = s - d, h = a - d, w = new k(), F = new Float32Array([0, -u, -h, 0, u, -h, 0, u, h, 0, -u, -h, 0, u, h, 0, -u, h]);
    w.setAttribute("position", new $(F, 3));
    const A = [];
    function E(Z, Y, W, H) {
      A.push(0, Z, Y, 0, W, Y, 0, W, H, 0, Z, Y, 0, W, H, 0, Z, H);
    }
    E(-s, -a, s, -h), E(-s, h, s, a), E(-s, -h, -u, h), E(u, -h, s, h);
    const v = new k();
    v.setAttribute("position", new $(new Float32Array(A), 3));
    const z = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), R = new k();
    return R.setAttribute("position", new $(z, 3)), { concFill: w, steelFillGeom: v, outline: R };
  }
  function y(f, x, d) {
    const s = [], a = [[0, -f / 2, -x / 2], [0, -f / 2 + d, -x / 2], [0, -f / 2 + d, x / 2 - d], [0, f / 2, x / 2 - d], [0, f / 2, x / 2], [0, -f / 2, x / 2]], u = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of u) s.push(...a[A]);
    const h = new k();
    h.setAttribute("position", new $(new Float32Array(s), 3));
    const w = [];
    for (let A = 0; A < a.length; A++) {
      const E = (A + 1) % a.length;
      w.push(...a[A], ...a[E]);
    }
    const F = new k();
    return F.setAttribute("position", new $(new Float32Array(w), 3)), { fill: h, outline: F };
  }
  function b(f, x, d, s) {
    const a = s / 2, u = [], h = [[0, -f - a, -x / 2], [0, -d - a, -x / 2], [0, -d - a, x / 2 - d], [0, -a, x / 2 - d], [0, -a, x / 2], [0, -f - a, x / 2]], w = [[0, a, -x / 2], [0, a + d, -x / 2], [0, a + d, x / 2 - d], [0, f + a, x / 2 - d], [0, f + a, x / 2], [0, a, x / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const z of F) u.push(...h[z]);
    for (const z of F) u.push(...w[z]);
    const A = new k();
    A.setAttribute("position", new $(new Float32Array(u), 3));
    const E = [];
    for (const z of [h, w]) for (let R = 0; R < z.length; R++) {
      const Z = (R + 1) % z.length;
      E.push(...z[R], ...z[Z]);
    }
    const v = new k();
    return v.setAttribute("position", new $(new Float32Array(E), 3)), { fill: A, outline: v };
  }
  function m(f, x, d, s) {
    const a = x / 2, u = f, h = [[0, -u, -a], [0, -u, -a + d], [0, -s, -a + d], [0, -s, a - d], [0, -u, a - d], [0, -u, a], [0, 0, a], [0, 0, -a]], w = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
    for (const z of w) F.push(...h[z]);
    const A = new k();
    A.setAttribute("position", new $(new Float32Array(F), 3));
    const E = [];
    for (let z = 0; z < h.length; z++) {
      const R = (z + 1) % h.length;
      E.push(...h[z], ...h[R]);
    }
    const v = new k();
    return v.setAttribute("position", new $(new Float32Array(E), 3)), { fill: A, outline: v };
  }
  function V(f, x, d, s, a) {
    const u = x / 2, h = a / 2, w = [], F = [[0, -f, -u], [0, -f, -u + d], [0, -h - s, -u + d], [0, -h - s, u - d], [0, -f, u - d], [0, -f, u], [0, -h, u], [0, -h, -u]], A = F.map((Z) => [Z[0], -Z[1], Z[2]]), E = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of E) w.push(...F[Z]);
    for (const Z of E) w.push(...A[Z]);
    const v = new k();
    v.setAttribute("position", new $(new Float32Array(w), 3));
    const z = [];
    for (const Z of [F, A]) for (let Y = 0; Y < Z.length; Y++) {
      const W = (Y + 1) % Z.length;
      z.push(...Z[Y], ...Z[W]);
    }
    const R = new k();
    return R.setAttribute("position", new $(new Float32Array(z), 3)), { fill: v, outline: R };
  }
  function M(f, x, d, s) {
    const a = f / 2, u = x / 2, h = s / 2, w = [[0, -h, -u], [0, h, -u], [0, h, u - d], [0, a, u - d], [0, a, u], [0, -a, u], [0, -a, u - d], [0, -h, u - d]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], A = [];
    for (const R of F) A.push(...w[R]);
    const E = new k();
    E.setAttribute("position", new $(new Float32Array(A), 3));
    const v = [];
    for (let R = 0; R < w.length; R++) {
      const Z = (R + 1) % w.length;
      v.push(...w[R], ...w[Z]);
    }
    const z = new k();
    return z.setAttribute("position", new $(new Float32Array(v), 3)), { fill: E, outline: z };
  }
  function T(f, x, d = 24) {
    const s = f / 2, a = s - x, u = [];
    for (let A = 0; A < d; A++) {
      const E = A / d * Math.PI * 2, v = (A + 1) / d * Math.PI * 2, z = Math.cos(E), R = Math.sin(E), Z = Math.cos(v), Y = Math.sin(v);
      u.push(0, s * z, s * R, 0, s * Z, s * Y, 0, a * Z, a * Y), u.push(0, s * z, s * R, 0, a * Z, a * Y, 0, a * z, a * R);
    }
    const h = new k();
    h.setAttribute("position", new $(new Float32Array(u), 3));
    const w = [];
    for (let A = 0; A < d; A++) {
      const E = A / d * Math.PI * 2, v = (A + 1) / d * Math.PI * 2;
      w.push(0, s * Math.cos(E), s * Math.sin(E), 0, s * Math.cos(v), s * Math.sin(v)), w.push(0, a * Math.cos(E), a * Math.sin(E), 0, a * Math.cos(v), a * Math.sin(v));
    }
    const F = new k();
    return F.setAttribute("position", new $(new Float32Array(w), 3)), { fill: h, outline: F };
  }
  const L = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), X = new et({ color: 52479 }), I = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), P = new et({ color: 16750848 });
  function S(f, x) {
    const d = Math.abs(x[0] - f[0]), s = Math.abs(x[1] - f[1]), a = Math.abs(x[2] - f[2]);
    return a > d && a > s || s > d && s > a;
  }
  return C.derive(() => {
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
      const F = l.rawVal[h[0]], A = l.rawVal[h[1]];
      if (!F || !A) return;
      const E = S(F, A);
      if (E && !f || !E && !x) return;
      if (u >= 0) {
        const Y = Math.min(F[1], A[1]);
        Math.max(F[1], A[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(Y / W + 0.01) !== u) return;
      }
      const v = a == null ? void 0 : a.get(w);
      if (!v) return;
      const z = [(F[0] + A[0]) / 2, (F[1] + A[1]) / 2, (F[2] + A[2]) / 2], R = Ft(F, A);
      if (v.type === "CFT") {
        const Y = g(v.b, v.h, v.tw ?? v.b * 0.05), W = new D(Y.concFill, L);
        W.position.set(...z), W.rotation.setFromRotationMatrix(R), n.add(W);
        const H = new D(Y.steelFillGeom, I);
        H.position.set(...z), H.rotation.setFromRotationMatrix(R), n.add(H);
        const _ = new nt(Y.outline, P);
        _.position.set(...z), _.rotation.setFromRotationMatrix(R), n.add(_);
      } else {
        let Y, W, H;
        switch (v.type) {
          case "rect":
            Y = r(v.b, v.h), W = L, H = X;
            break;
          case "circ":
            Y = c(v.d), W = L, H = X;
            break;
          case "I":
            Y = i(v.b, v.h, v.tf, v.tw), W = I, H = P;
            break;
          case "HSS":
            Y = p(v.b, v.h, v.tw ?? v.b * 0.05), W = I, H = P;
            break;
          case "CFT":
            Y = g(v.b, v.h, v.tw ?? v.b * 0.05), W = I, H = P;
            break;
          case "L":
            Y = y(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3), W = I, H = P;
            break;
          case "2L":
            Y = b(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3, v.dis ?? 0.01), W = I, H = P;
            break;
          case "C":
          case "coldC":
            Y = m(v.b, v.h, v.tf ?? v.t ?? 3e-3, v.tw ?? v.t ?? 3e-3), W = I, H = P;
            break;
          case "2C":
            Y = V(v.b, v.h, v.tf ?? 5e-3, v.tw ?? 5e-3, v.dis ?? 0.01), W = I, H = P;
            break;
          case "T":
            Y = M(v.b, v.h, v.tf ?? 0.01, v.tw ?? 6e-3), W = I, H = P;
            break;
          case "pipe":
            Y = T(v.d, v.tw ?? v.d * 0.05), W = I, H = P;
            break;
          default:
            return;
        }
        const _ = new D(Y.fill, W);
        _.position.set(...z), _.rotation.setFromRotationMatrix(R), n.add(_);
        const N = new nt(Y.outline, H);
        N.position.set(...z), N.rotation.setFromRotationMatrix(R), n.add(N);
      }
      const Z = de(v);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(v.type) ? "#ff9900" : "#00ccff", H = new q(Z, W, "transparent");
        H.position.set(z[0], z[1], z[2]);
        const _ = 0.05 * e.gridSize.rawVal * 0.5;
        H.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(H);
      }
    });
  }), o && C.derive(() => {
    if (o.val, !e.sections.rawVal) return;
    const f = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((x) => {
      x instanceof q && x.updateScale(f * o.rawVal);
    });
  }), C.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends U {
  constructor(e, l, o, n, r, c, i) {
    super();
    const p = new ht().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), g = p.getPoints(), y = new k().setFromPoints(g);
    this.lines = new nt(y, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new ut(p), m = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(b, m), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new q(`${r[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = ot([e, l]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
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
    const p = r[0] * o / (r[0] + r[1]), g = r[0] * r[1] > 0;
    if (this.text = new q(`${r[0].toFixed(4)}`), this.text2 = new q(`${(r[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = gt(e, l), this.text2Position = gt(l, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), g) {
      const y = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(p, 0).lineTo(0, 0), b = new ht().moveTo(p, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(p, 0), m = y.getPoints(), V = b.getPoints(), M = new k().setFromPoints(m), T = new k().setFromPoints(V), L = new et({ color: j().resultOutline });
      this.lines = new nt(M, L), this.lines2 = new nt(T, L), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), i && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const X = new ut(y), I = new ut(b), P = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), S = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(X, P), this.mesh2 = new D(I, S), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), i && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const y = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), b = y.getPoints(), m = new k().setFromPoints(b);
      this.lines = new nt(m, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const V = new ut(y), M = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(V, M), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, l.val, e.frameResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const c = Xt[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((i, p) => {
      var _a2, _b2;
      const g = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[p]) ?? [0, 1], y = l.rawVal[g[0]], b = l.rawVal[g[1]], m = new B(...b).distanceTo(new B(...y)), V = pe((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), M = i == null ? void 0 : i.map((I) => I / (V === 0 ? 1 : V)), T = Ft(y, b), L = new r[c](y, b, m, T, i ?? [0, 0], M ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), X = 0.05 * e.gridSize.rawVal;
      L.updateScale(X * o.rawVal), n.add(L);
    });
  }), C.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const c = 0.05 * e.gridSize.val;
    n.children.forEach((i) => i.updateScale(c * o.rawVal));
  }), C.derive(() => {
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
function fe(t, e, l, o) {
  const n = new U();
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const r = Ct[e.nodeResults.rawVal], c = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[r]) == null ? void 0 : _b.forEach((i, p) => {
      const g = new me(l.rawVal[p], r, i ?? [0, 0, 0, 0, 0, 0]);
      g.updateScale(c * o.rawVal), n.add(g);
    });
  }), C.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const r = 0.05 * e.gridSize.val;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), C.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function we({ drawingObj: t, gridObj: e, scene: l, camera: o, controls: n, gridSize: r, derivedDisplayScale: c, rendererElm: i, viewerRender: p }) {
  const g = new Lt(), y = new kt(), b = new D(new Zt(r, r), new Q({ side: O })), m = new ct(new k(), new dt()), V = new ct(new k(), new dt({ color: "gray" })), M = new ct(new k(), new dt({ color: "orange", size: 0.8 }));
  l.add(M), m.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), m.geometry.computeBoundingSphere(), m.frustumCulled = false, V.frustumCulled = false, l.add(V), b.position.set(0.5 * r, 0.5 * r, 0), b.rotateX(Math.PI / 2), b.geometry.rotateX(Math.PI / 2), b.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), C.derive(() => {
    t.gridTarget && (ve(e, { position: new B(...t.gridTarget.val.position), quaternion: new Wt().setFromEuler(new St(...t.gridTarget.val.rotation)) }, p), b.position.set(...t.gridTarget.val.position), b.quaternion.setFromEuler(new St(...t.gridTarget.val.rotation)), b.updateMatrixWorld());
  }), C.derive(() => {
    m.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), m.geometry.computeBoundingSphere();
  }), C.derive(() => {
    const P = 0.05 * r * 0.5 * c.val;
    V.material.size = P, g.params.Points.threshold = 0.4 * P;
  }), C.derive(() => {
    var _a;
    const P = t.points.val ?? [], f = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], x = [];
    for (const s of f) {
      const [a, u, h] = P[s];
      x.push(a, u, h);
    }
    const d = new k();
    d.setAttribute("position", new K(x, 3)), M.geometry.dispose(), M.geometry = d;
  });
  let T = false, L = 0;
  i.addEventListener("pointerdown", () => {
    T = true;
  }), i.addEventListener("pointerup", () => {
    T = false;
  }), i.addEventListener("pointermove", () => {
    T && L++;
  }), i.addEventListener("click", (P) => {
    if (L > 5) {
      L = 0;
      return;
    }
    L = 0, y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    const S = g.intersectObject(b);
    if (S.length) {
      let f = S[0].point;
      (P.ctrlKey || P.metaKey) && (f = new B(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), t.points.val = [...t.points.rawVal, f.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), i.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), i.addEventListener("pointermove", (P) => {
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    const S = g.intersectObject(b);
    if (V.geometry.deleteAttribute("position"), S.length) {
      let f = S[0].point;
      (P.ctrlKey || P.metaKey) && (f = new B(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), V.geometry.setAttribute("position", new K(f.toArray(), 3));
    }
    p();
  }), i.addEventListener("pointermove", (P) => {
    var _a;
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    let S = false;
    const f = g.intersectObject(m), x = g.intersectObject(b);
    if (f.length && x.length) {
      const d = new B(...t.points.rawVal[f[0].index]), s = new B(...x[0].point), a = d.sub(s), u = (_a = x[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(b.matrixWorld), Math.abs(a.dot(u)) < 1e-4 && (S = true);
    }
    V.visible = !S;
  });
  let X = false, I;
  i.addEventListener("pointermove", (P) => {
    var _a;
    if (!L) return;
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    let S = false;
    const f = g.intersectObject(m), x = g.intersectObject(b);
    if (f.length && x.length) {
      const s = new B(...t.points.rawVal[f[0].index]), a = new B(...x[0].point), u = s.sub(a), h = (_a = x[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(b.matrixWorld), Math.abs(u.dot(h)) < 1e-4 && (S = true);
    }
    if (S && L < 5 && (X = true, n.enabled = false, I = f[0].index), !X || L % 2 !== 0) return;
    const d = [...t.points.rawVal];
    if (I !== void 0) {
      let s = x[0].point;
      (P.ctrlKey || P.metaKey) && (s = new B(Math.round(s.x), Math.round(s.y), Math.round(s.z))), d[I] = s.toArray();
    }
    t.points.val = d;
  }), i.addEventListener("pointerup", () => {
    n.enabled = true, X = false;
  }), i.addEventListener("contextmenu", (P) => {
    var _a;
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(y, o);
    let S = false;
    const f = g.intersectObject(m), x = g.intersectObject(b);
    if (f.length && x.length) {
      const a = new B(...t.points.rawVal[f[0].index]), u = new B(...x[0].point), h = a.sub(u), w = (_a = x[0].face) == null ? void 0 : _a.normal;
      w.transformDirection(b.matrixWorld), Math.abs(h.dot(w)) < 1e-4 && (S = true);
    }
    if (!S) return;
    const d = [...t.points.rawVal];
    if (d.splice(f[0].index, 1), t.points.val = d, !t.polylines) return;
    const s = t.polylines.rawVal.map((a) => a.filter((u) => u !== f[0].index)).map((a) => a.map((u) => u > f[0].index ? u - 1 : u)).filter((a) => a.length);
    s.push([]), t.polylines.val = s;
  });
}
function ve(t, e, l) {
  const r = Math.round(14.999999999999998), c = { position: t.position.clone(), quaternion: t.quaternion.clone() }, i = setInterval(g, 1e3 / 30);
  let p = 0;
  function g() {
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
        const g = this.map[p][0], y = this.map[p + 1][0];
        n.setHex(this.map[p][1], rt), r.setHex(this.map[p + 1][1], rt);
        const b = new G().lerpColors(n, r, (i - g) / (y - g));
        this.lut.push(b);
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
    const c = 1 / this.n, i = new G(), p = new G(), g = new G();
    for (let y = 1; y >= 0; y -= c) for (let b = this.map.length - 1; b >= 0; b--) if (y < this.map[b][0] && y >= this.map[b - 1][0]) {
      const m = this.map[b - 1][0], V = this.map[b][0];
      i.setHex(this.map[b - 1][1], rt), p.setHex(this.map[b][1], rt), g.lerpColors(i, p, (y - m) / (V - m)), n[r * 4] = Math.round(g.r * 255), n[r * 4 + 1] = Math.round(g.g * 255), n[r * 4 + 2] = Math.round(g.b * 255), n[r * 4 + 3] = 255, r += 1;
    }
    return l.putImageData(o, 0, 0), e;
  }
}
const Mt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function xe(t, e, l) {
  const o = new Et(), n = new G(), r = new D(new k(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), r.renderOrder = -1, r.frustumCulled = false, C.derive(() => {
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
  return C.derive(() => {
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
  const c = new G(), i = C.state([]);
  return C.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const p = l.val, g = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], y = ge(e.frameResults.val);
    if (n.children.forEach((w) => {
      w.geometry && w.geometry.dispose(), w.material && w.material.dispose();
    }), n.clear(), !y || g.length === 0 || p.length === 0) {
      i.val = [];
      return;
    }
    const b = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, m = (_c = t.deformOutputs) == null ? void 0 : _c.val, V = [], M = [];
    for (let w = 0; w < g.length; w++) {
      if (g[w].length !== 2) continue;
      const A = Fe(y, w, b, m);
      A && (V.push(A[0], A[1]), M.push({ idx: w, vals: A }));
    }
    if (V.length === 0) {
      i.val = [];
      return;
    }
    const T = Math.min(...V), L = Math.max(...V);
    r.setMin(T), r.setMax(L), i.val = V;
    const X = [1 / 0, 1 / 0, 1 / 0], I = [-1 / 0, -1 / 0, -1 / 0];
    for (const w of p) for (let F = 0; F < 3; F++) X[F] = Math.min(X[F], w[F]), I[F] = Math.max(I[F], w[F]);
    const S = Math.max(I[0] - X[0], I[1] - X[1], I[2] - X[2], 1) * be, f = [], x = [], d = [];
    let s = 0;
    for (const { idx: w, vals: F } of M) {
      const A = g[w], E = p[A[0]], v = p[A[1]];
      if (!E || !v) continue;
      const z = new B(v[0] - E[0], v[1] - E[1], v[2] - E[2]), R = z.length();
      if (R < 1e-10) continue;
      z.normalize();
      const Z = Math.abs(z.y) < 0.99 ? new B(0, 1, 0) : new B(1, 0, 0), Y = new B().crossVectors(z, Z).normalize(), W = new B().crossVectors(z, Y).normalize(), H = bt + 1, _ = Me;
      for (let N = 0; N < H; N++) {
        const J = N / bt, st = E[0] + z.x * R * J, it = E[1] + z.y * R * J, mt = E[2] + z.z * R * J, ft = F[0] + (F[1] - F[0]) * J, at = r.getColor(ft) ?? new G(0, 0, 0);
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
    C.derive(() => {
      o.forEach((i, p) => {
        const g = c[p];
        g && (g.innerText = Ve(t.val, i).toString());
      });
    });
  }), l;
}
function Ve(t, e) {
  const l = Math.max(...t) - Math.min(...t);
  return (Math.min(...t) + e * l).toPrecision(3);
}
function Ye({ mesh: t, settingsObj: e, drawingObj: l, objects3D: o, solids: n }) {
  Dt.DEFAULT_UP = new B(0, 0, 1);
  const r = document.createElement("div"), c = new $t(), i = new Gt(45, 1, 0.1, 2 * 1e6), p = new qt(-10, 10, 10, -10, -1e3, 2e6);
  let g = i;
  const y = new Nt({ antialias: true });
  y.localClippingEnabled = true;
  const b = new Kt(i, y.domElement), m = Ot(e), V = C.derive(() => m.displayScale.val === 0 ? 1 : m.displayScale.val > 0 ? m.displayScale.val : -1 / m.displayScale.val), M = Se(t, m);
  let T = zt(m.gridSize.rawVal);
  r.appendChild(Jt(m, t, n)), r.setAttribute("id", "viewer"), r.appendChild(y.domElement), y.setPixelRatio(window.devicePixelRatio);
  const L = j();
  y.setClearColor(L.background, 1);
  const X = m.gridSize.rawVal, I = X * 0.5 + X * 0.5 / Math.tan(45 * 0.5);
  i.position.set(0.5 * X, 0.8 * -I, 0.5 * X), b.target.set(0.5 * X, 0.5 * X, 0), b.minDistance = 1, b.maxDistance = I * 2.5, b.zoomSpeed = 10, b.update(), c.add(T, re(m.gridSize.rawVal, m.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const s of d) {
      const a = (_a = s.target) == null ? void 0 : _a.clientWidth, u = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (a === 0 || u === 0) continue;
      i.aspect = a / u, i.updateProjectionMatrix();
      const h = a / u, w = p.top;
      p.left = -w * h, p.right = w * h, p.updateProjectionMatrix(), y.setSize(a, u), S();
    }
  }).observe(r), b.addEventListener("change", S), C.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, m.displayScale.val, m.nodes.val, m.elements.val, m.elemColumns.val, m.elemBeams.val, m.nodesIndexes.val, m.elementsIndexes.val, m.orientations.val, m.sections.val, m.secColumns.val, m.secBeams.val, m.secFloor.val, m.supports.val, m.loads.val, m.deformedShape.val, m.nodeResults.val, m.frameResults.val, m.shellResults.val, setTimeout(S);
  });
  function S() {
    y.render(c, g);
  }
  function f(d) {
    g = d, b.object = d, b.update(), S();
  }
  if (t) {
    c.add(jt(m, M, V), te(t, m, M), se(m, M, V), ie(t, m, M, V), ne(t, m, M, V), oe(t, m, M, V), ce(t, m, M, V), he(t, m, M, V), fe(t, m, M, V), ue(t, m, M, V));
    const d = Ae(t, m), s = ye(t, m, M, d), a = Tt(d);
    c.add(s), r.appendChild(a);
    const u = Ce(t, m, M);
    c.add(u);
    const h = u.__colorMapValues, w = Tt(h);
    w.id = "frame-legend", r.appendChild(w), C.derive(() => {
      const F = m.shellResults.val != "none", A = m.frameResults.val.startsWith("contour:");
      a.hidden = !F, s.visible = F, w.hidden = !A;
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
    u.color.setHSL(11, 43, 96), u.position.set(-10, 0, 30), c.add(u), C.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), S());
    }), C.derive(() => {
      n.rawVal.forEach((h) => h.visible = m.solids.val), S();
    });
  }
  o && C.derive(() => {
    (o == null ? void 0 : o.val.length) && (c.remove(...o.oldVal), c.add(...o.rawVal), S());
  }), l && we({ drawingObj: l, gridObj: T, scene: c, camera: i, controls: b, gridSize: X, derivedDisplayScale: V, rendererElm: y.domElement, viewerRender: S }), pt((d, s) => {
    y.setClearColor(s.background, 1), c.remove(T), T.geometry.dispose(), T.material.dispose(), T = zt(m.gridSize.rawVal), c.add(T), r.style.setProperty("--awatif-legend-color", s.legendMarker), S();
  });
  const x = { scene: c, perspCamera: i, orthoCamera: p, get camera() {
    return g;
  }, controls: b, renderer: y, rendererElm: y.domElement, render: S, setActiveCamera: f, settings: m };
  return r.__ctx = x, r;
}
function Se(t, e) {
  return C.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const l = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || l.length === 0) return l;
    let n = 1 / 0, r = 1 / 0, c = 1 / 0, i = -1 / 0, p = -1 / 0, g = -1 / 0;
    for (const M of l) M[0] < n && (n = M[0]), M[0] > i && (i = M[0]), M[1] < r && (r = M[1]), M[1] > p && (p = M[1]), M[2] < c && (c = M[2]), M[2] > g && (g = M[2]);
    const y = Math.sqrt((i - n) ** 2 + (p - r) ** 2 + (g - c) ** 2);
    let b = 0;
    o.forEach((M) => {
      const T = Math.sqrt(M[0] ** 2 + M[1] ** 2 + M[2] ** 2);
      T > b && (b = T);
    });
    const V = b > 1e-30 && y > 1e-30 ? 0.07 * y / b : 1;
    return l.map((M, T) => {
      var _a2;
      const L = ((_a2 = o.get(T)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return M.map((X, I) => X + L[I] * V);
    });
  });
}
function Ae(t, e) {
  const l = C.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), C.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), V = (L, X) => {
      L == null ? void 0 : L.forEach((I, P) => {
        const S = t.elements.val[P];
        if (S) for (let f = 0; f < S.length; f++) X.set(S[f], [I[f] ?? I[0]]);
      });
    };
    V((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), V((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, r), V((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, c), V((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, i), V((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, p), V((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, g), V((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, y), V((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, b), V((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, m);
    const M = { bendingXX: [n, 0], bendingYY: [r, 0], bendingXY: [c, 0], membraneXX: [i, 0], membraneYY: [p, 0], membraneXY: [g, 0], tranverseShearX: [y, 0], tranverseShearY: [b, 0], vonMises: [m, 0], displacementX: [(_t2 = (_s = t.deformOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.deformations, 0], displacementY: [(_v = (_u = t.deformOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.deformations, 1], displacementZ: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 2] }, T = [];
    t.nodes.val.forEach((L, X) => {
      const I = M[e.shellResults.val];
      if (!I || !I[0] || typeof I[0].has != "function") return;
      if (!I[0].has(X)) {
        T.push(0);
        return;
      }
      const P = I[0].get(X);
      T.push(P ? P[I[1]] ?? 0 : 0);
    }), l.val = T;
  }), l;
}
export {
  xe as a,
  Tt as b,
  Ye as g
};
