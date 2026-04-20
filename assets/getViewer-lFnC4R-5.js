import { H as ct, B as L, I as dt, F as K, G as U, h as It, a as et, j as Q, D as O, e as D, C as $, l as Rt, i as Lt, V as E, A as tt, z as G, J as Mt, d as Xt, L as nt, c as N, r as ut, K as ht, R as kt, f as Zt, N as Wt, U as Ht, X as At, Y as rt, Z as _t, _ as Nt, t as $t, u as Gt, v as qt, W as Kt, w as Ut, x as Dt, y as zt, O as Qt } from "./Text-CBH-tcJP.js";
import { v as V, P as Jt, g as j, o as pt } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function Ot(t, e, r) {
  const o = document.createElement("div"), n = new Jt({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (e == null ? void 0 : e.nodes) && (n.addBinding(t.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(t.nodes, "val", { label: "Nodes" }), n.addBinding(t.elements, "val", { label: "Elements" }), n.addBinding(t.elemColumns, "val", { label: "  Columnas" }), n.addBinding(t.elemBeams, "val", { label: "  Vigas" }), n.addBinding(t.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(t.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(t.orientations, "val", { label: "Orientations" }), n.addBinding(t.sections, "val", { label: "Sections" }), n.addBinding(t.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(t.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(t.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (e == null ? void 0 : e.nodeInputs) || (e == null ? void 0 : e.elementInputs)) {
    const a = n.addFolder({ title: "Analysis Inputs" });
    a.addBinding(t.supports, "val", { label: "Supports" }), a.addBinding(t.loads, "val", { label: "Loads" });
  }
  if ((e == null ? void 0 : e.deformOutputs) || (e == null ? void 0 : e.analyzeOutputs)) {
    const a = n.addFolder({ title: "Analysis Outputs" });
    a.addBinding(t.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), a.addBinding(t.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), a.addBinding(t.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), a.addBinding(t.deformedShape, "val", { label: "Deformed shape" });
  }
  return r && n.addBinding(t.solids, "val", { label: "Solids" }), o;
}
function jt(t) {
  return { gridSize: V.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: V.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: V.state((t == null ? void 0 : t.nodes) ?? true), elements: V.state((t == null ? void 0 : t.elements) ?? true), elemColumns: V.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: V.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: V.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: V.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: V.state((t == null ? void 0 : t.orientations) ?? false), sections: V.state((t == null ? void 0 : t.sections) ?? true), secColumns: V.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: V.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: V.state((t == null ? void 0 : t.secFloor) ?? -1), supports: V.state((t == null ? void 0 : t.supports) ?? true), loads: V.state((t == null ? void 0 : t.loads) ?? false), deformedShape: V.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: V.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: V.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: V.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: V.state((t == null ? void 0 : t.flipAxes) ?? false), solids: V.state((t == null ? void 0 : t.solids) ?? true) };
}
function te(t, e, r) {
  const o = j(), n = new ct(new L(), new dt({ color: o.nodePoint }));
  return pt((a, d) => {
    n.material.color.setHex(d.nodePoint);
  }), n.frustumCulled = false, V.derive(() => {
    t.nodes.val && n.geometry.setAttribute("position", new K(e.val.flat(), 3));
  }), V.derive(() => {
    r.val;
    const a = 0.05 * t.gridSize.val * 0.5;
    t.nodes.rawVal && (n.material.size = a * r.rawVal);
  }), V.derive(() => {
    n.visible = t.nodes.val;
  }), n;
}
function ee(t, e, r) {
  const o = j(), n = new U(), a = new It(new L(), new et({ color: o.elementLine }));
  pt((c, A) => {
    a.material.color.setHex(A.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const d = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), l = new D(new L(), d);
  l.frustumCulled = false, n.add(l);
  let m = new $(o.shellWall), w = new $(o.shellSlab), y = new $(o.shellTri);
  pt((c, A) => {
    m = new $(A.shellWall), w = new $(A.shellSlab), y = new $(A.shellTri), d.opacity = A.shellOpacity, d.needsUpdate = true;
  });
  function g(c, A) {
    const f = Math.abs(A[0] - c[0]), T = Math.abs(A[1] - c[1]), R = Math.abs(A[2] - c[2]);
    return R > f && R > T || T > f && T > R;
  }
  return V.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const c = e.elemColumns.rawVal, A = e.elemBeams.rawVal, f = r.val, T = ((_a = t.elements) == null ? void 0 : _a.val) || [], R = T.filter((C) => {
      if (C.length !== 2) return true;
      const v = f[C[0]], M = f[C[1]];
      if (!v || !M) return true;
      const u = g(v, M);
      return !(u && !c || !u && !A);
    }).map((C) => ne(C).map((v) => [...f[v[0]], ...f[v[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new K(R, 3));
    const X = [], k = [];
    function P(C, v, M, u) {
      const s = [v[0] - C[0], v[1] - C[1], v[2] - C[2]], i = [u[0] - C[0], u[1] - C[1], u[2] - C[2]], p = s[1] * i[2] - s[2] * i[1], h = s[2] * i[0] - s[0] * i[2], x = s[0] * i[1] - s[1] * i[0], F = Math.sqrt(p * p + h * h + x * x);
      return F < 1e-12 ? false : Math.abs(x / F) < 0.5;
    }
    for (const C of T) if (C.length === 3) {
      const [v, M, u] = C;
      if (f[v] && f[M] && f[u]) {
        X.push(...f[v], ...f[M], ...f[u]);
        for (let s = 0; s < 3; s++) k.push(y.r, y.g, y.b);
      }
    } else if (C.length === 4) {
      const [v, M, u, s] = C;
      if (f[v] && f[M] && f[u] && f[s]) {
        const i = P(f[v], f[M], f[u], f[s]) ? m : w;
        X.push(...f[v], ...f[M], ...f[u]), X.push(...f[v], ...f[u], ...f[s]);
        for (let p = 0; p < 6; p++) k.push(i.r, i.g, i.b);
      }
    }
    X.length > 0 ? (l.geometry.dispose(), l.geometry = new L(), l.geometry.setAttribute("position", new K(X, 3)), l.geometry.setAttribute("color", new K(k, 3)), l.geometry.computeVertexNormals(), l.visible = true) : l.visible = false;
  }), V.derive(() => {
    n.visible = e.elements.val;
  }), n;
}
function ne(t) {
  if (t.length === 2) return [t];
  const e = [];
  for (let r = 0; r < t.length; r++) e.push([t[r], t[(r + 1) % t.length]]);
  return e;
}
function Pt(t) {
  const e = j(), r = new Rt(t, 20, e.grid, e.grid);
  return r.position.set(0.5 * t, 0.5 * t, 0), r.rotateX(Math.PI / 2), r;
}
function oe(t, e, r, o) {
  const n = new U(), a = new Lt(0.5, 0.5, 0.5), d = new Q({ color: 10166822 });
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((m, w) => {
      const y = r.val[w];
      if (!y) return;
      const g = new D(a, d);
      g.position.set(...y);
      const c = l * o.rawVal;
      g.scale.set(c, c, c), n.add(g);
    });
  }), V.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const m = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((w) => w.scale.set(m, m, m));
  }), V.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function se(t, e, r, o) {
  const n = new U();
  n.name = "loadsGroup";
  function a(d) {
    if (d.length < 2) return 0.12 * e.gridSize.rawVal;
    const l = [1 / 0, 1 / 0, 1 / 0], m = [-1 / 0, -1 / 0, -1 / 0];
    for (const y of d) for (let g = 0; g < 3; g++) l[g] = Math.min(l[g], y[g]), m[g] = Math.max(m[g], y[g]);
    return 0.08 * Math.max(m[0] - l[0], m[1] - l[1], m[2] - l[2], 0.1);
  }
  return V.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((m) => m.dispose()), n.clear();
    const d = r.val, l = a(d);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((m, w) => {
      const y = d[w];
      if (!y) return;
      const g = new E(...m.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const c = new tt(g, new E(...y), 1, 15637248, 0.3, 0.3), A = l * o.rawVal;
      c.scale.set(A, A, A), n.add(c);
    });
  }), V.derive(() => {
    if (o.val, !e.loads.rawVal) return;
    const l = a(r.rawVal) * o.rawVal;
    n.children.forEach((m) => m.scale.set(l, l, l));
  }), V.derive(() => {
    n.visible = e.loads.val;
  }), n;
}
function ie(t, e, r) {
  const o = new U();
  return V.derive(() => {
    if (!t.nodesIndexes.val) return;
    o.children.forEach((a) => a.dispose()), o.clear();
    const n = 0.05 * t.gridSize.val * 0.6;
    e.val.forEach((a, d) => {
      const l = new G(`${d}`);
      l.position.set(...a), l.updateScale(n * r.rawVal), o.add(l);
    });
  }), V.derive(() => {
    if (r.val, !t.nodesIndexes.rawVal) return;
    const n = 0.05 * t.gridSize.val * 0.6;
    o.children.forEach((a) => a.updateScale(n * r.rawVal));
  }), V.derive(() => {
    o.visible = t.nodesIndexes.val;
  }), o;
}
function ae(t, e, r, o) {
  const n = new U();
  return V.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const a = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((d, l) => {
      const m = new G(`${l}`, void 0, "#001219");
      m.position.set(...re(d.map((w) => r.rawVal[w]))), m.updateScale(a * o.rawVal), n.add(m);
    });
  }), V.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const a = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((d) => d.updateScale(a * o.rawVal));
  }), V.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function re(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function le(t, e) {
  const r = new U(), o = 0.05 * t * 1, n = j(), a = new G("X", "red", "transparent"), d = new G(e ? "Z" : "Y", "green", "transparent"), l = new G(e ? "Y" : "Z", "blue", "transparent"), m = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), w = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), y = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), d.position.set(0, 1.3 * o, 0), l.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), d.updateScale(0.4 * o), l.updateScale(0.4 * o), m.scale.set(o, o, o), w.scale.set(o, o, o), y.scale.set(o, o, o), r.add(m, w, y, a, d, l), r;
}
function Ft(t, e) {
  const r = new E(...t), n = new E(...e).clone().sub(r), a = n.length(), d = n.dot(new E(1, 0, 0)) / a, l = n.dot(new E(0, 1, 0)) / a, m = n.dot(new E(0, 0, 1)) / a, w = Math.sqrt(d ** 2 + l ** 2);
  let y = new Mt().fromArray([[d, l, m], [-l / w, d / w, 0], [-d * m / w, -l * m / w, w]].flat());
  return m === 1 && (y = new Mt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), m === -1 && (y = new Mt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Xt().setFromMatrix3(y);
}
function gt(t, e) {
  return t == null ? void 0 : t.map((r, o) => (9 * r + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function ce(t, e, r) {
  const o = ot([e, r]), n = ot([t, r]), a = ot([t, e]), d = new E(...o).sub(new E(...n)).normalize(), l = new E(...r).sub(new E(...a)).normalize(), m = d.clone().cross(l).normalize(), w = m.clone().cross(d).normalize();
  return new Xt().makeBasis(d, w, m);
}
function de(t, e, r, o) {
  const n = new U(), a = new L(), d = new et({ vertexColors: true }), l = [0, 0, 0], m = [1, 0, 0], w = [0, 1, 0], y = [0, 0, 1];
  a.setAttribute("position", new K([...l, ...m, ...l, ...w, ...l, ...y], 3));
  const g = [255, 0, 0], c = [0, 255, 0], A = [0, 0, 255];
  return a.setAttribute("color", new K([...g, ...g, ...c, ...c, ...A, ...A], 3)), V.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((f) => {
      const T = new It(a, d), R = r.rawVal[f[0]], X = r.rawVal[f[1]];
      if (f.length === 2 && (T.position.set(...gt(R, X)), T.rotation.setFromRotationMatrix(Ft(R, X))), f.length === 3) {
        const C = r.rawVal[f[2]];
        T.position.set(...ot([R, X, C])), T.rotation.setFromRotationMatrix(ce(R, X, C));
      }
      const P = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      T.scale.set(P, P, P), n.add(T);
    }));
  }), V.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const T = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((R) => R.scale.set(T, T, T));
  }), V.derive(() => {
    n.visible = e.orientations.val;
  }), n;
}
function ue(t) {
  if (t.name) return t.name;
  if (t.type === "rect") {
    const e = (t.b * 100).toFixed(0), r = (t.h * 100).toFixed(0);
    return `${e}x${r}`;
  }
  return t.type === "circ" ? `D${(t.d * 100).toFixed(0)}` : "";
}
function he(t, e, r, o) {
  const n = new U();
  function a(v, M) {
    const u = v / 2, s = M / 2, i = new Float32Array([0, -u, -s, 0, u, -s, 0, u, s, 0, -u, -s, 0, u, s, 0, -u, s]), p = new L();
    p.setAttribute("position", new N(i, 3));
    const h = new Float32Array([0, -u, -s, 0, u, -s, 0, u, s, 0, -u, s, 0, -u, -s]), x = new L();
    return x.setAttribute("position", new N(h, 3)), { fill: p, outline: x };
  }
  function d(v, M = 24) {
    const u = v / 2, s = new Float32Array(M * 9);
    for (let x = 0; x < M; x++) {
      const F = x / M * Math.PI * 2, S = (x + 1) / M * Math.PI * 2;
      s[x * 9] = 0, s[x * 9 + 1] = 0, s[x * 9 + 2] = 0, s[x * 9 + 3] = 0, s[x * 9 + 4] = u * Math.cos(F), s[x * 9 + 5] = u * Math.sin(F), s[x * 9 + 6] = 0, s[x * 9 + 7] = u * Math.cos(S), s[x * 9 + 8] = u * Math.sin(S);
    }
    const i = new L();
    i.setAttribute("position", new N(s, 3));
    const p = new Float32Array((M + 1) * 3);
    for (let x = 0; x <= M; x++) {
      const F = x / M * Math.PI * 2;
      p[x * 3] = 0, p[x * 3 + 1] = u * Math.cos(F), p[x * 3 + 2] = u * Math.sin(F);
    }
    const h = new L();
    return h.setAttribute("position", new N(p, 3)), { fill: i, outline: h };
  }
  function l(v, M, u, s) {
    const i = u ?? M * 0.08, p = s ?? v * 0.07, h = v / 2, x = M / 2, F = x - i, S = p / 2, I = [];
    function b(Y, W, H, _) {
      I.push(0, Y, W, 0, H, W, 0, H, _, 0, Y, W, 0, H, _, 0, Y, _);
    }
    b(-h, -x, h, -F), b(-S, -F, S, F), b(-h, F, h, x);
    const z = new L();
    z.setAttribute("position", new N(new Float32Array(I), 3));
    const B = new Float32Array([0, -h, -x, 0, h, -x, 0, h, -F, 0, S, -F, 0, S, F, 0, h, F, 0, h, x, 0, -h, x, 0, -h, F, 0, -S, F, 0, -S, -F, 0, -h, -F, 0, -h, -x]), Z = new L();
    return Z.setAttribute("position", new N(B, 3)), { fill: z, outline: Z };
  }
  function m(v, M, u) {
    const s = v / 2, i = M / 2, p = s - u, h = i - u, x = [];
    function F(z, B, Z, Y) {
      x.push(0, z, B, 0, Z, B, 0, Z, Y, 0, z, B, 0, Z, Y, 0, z, Y);
    }
    F(-s, -i, s, -h), F(-s, h, s, i), F(-s, -h, -p, h), F(p, -h, s, h);
    const S = new L();
    S.setAttribute("position", new N(new Float32Array(x), 3));
    const I = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -p, -h, 0, p, -h, 0, p, -h, 0, p, h, 0, p, h, 0, -p, h, 0, -p, h, 0, -p, -h]), b = new L();
    return b.setAttribute("position", new N(I, 3)), { fill: S, outline: b };
  }
  function w(v, M, u) {
    const s = v / 2, i = M / 2, p = s - u, h = i - u, x = new L(), F = new Float32Array([0, -p, -h, 0, p, -h, 0, p, h, 0, -p, -h, 0, p, h, 0, -p, h]);
    x.setAttribute("position", new N(F, 3));
    const S = [];
    function I(Z, Y, W, H) {
      S.push(0, Z, Y, 0, W, Y, 0, W, H, 0, Z, Y, 0, W, H, 0, Z, H);
    }
    I(-s, -i, s, -h), I(-s, h, s, i), I(-s, -h, -p, h), I(p, -h, s, h);
    const b = new L();
    b.setAttribute("position", new N(new Float32Array(S), 3));
    const z = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -p, -h, 0, p, -h, 0, p, -h, 0, p, h, 0, p, h, 0, -p, h, 0, -p, h, 0, -p, -h]), B = new L();
    return B.setAttribute("position", new N(z, 3)), { concFill: x, steelFillGeom: b, outline: B };
  }
  function y(v, M, u) {
    const s = [], i = [[0, -v / 2, -M / 2], [0, -v / 2 + u, -M / 2], [0, -v / 2 + u, M / 2 - u], [0, v / 2, M / 2 - u], [0, v / 2, M / 2], [0, -v / 2, M / 2]], p = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const S of p) s.push(...i[S]);
    const h = new L();
    h.setAttribute("position", new N(new Float32Array(s), 3));
    const x = [];
    for (let S = 0; S < i.length; S++) {
      const I = (S + 1) % i.length;
      x.push(...i[S], ...i[I]);
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(x), 3)), { fill: h, outline: F };
  }
  function g(v, M, u, s) {
    const i = s / 2, p = [], h = [[0, -v - i, -M / 2], [0, -u - i, -M / 2], [0, -u - i, M / 2 - u], [0, -i, M / 2 - u], [0, -i, M / 2], [0, -v - i, M / 2]], x = [[0, i, -M / 2], [0, i + u, -M / 2], [0, i + u, M / 2 - u], [0, v + i, M / 2 - u], [0, v + i, M / 2], [0, i, M / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const z of F) p.push(...h[z]);
    for (const z of F) p.push(...x[z]);
    const S = new L();
    S.setAttribute("position", new N(new Float32Array(p), 3));
    const I = [];
    for (const z of [h, x]) for (let B = 0; B < z.length; B++) {
      const Z = (B + 1) % z.length;
      I.push(...z[B], ...z[Z]);
    }
    const b = new L();
    return b.setAttribute("position", new N(new Float32Array(I), 3)), { fill: S, outline: b };
  }
  function c(v, M, u, s) {
    const i = M / 2, p = v, h = [[0, -p, -i], [0, -p, -i + u], [0, -s, -i + u], [0, -s, i - u], [0, -p, i - u], [0, -p, i], [0, 0, i], [0, 0, -i]], x = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
    for (const z of x) F.push(...h[z]);
    const S = new L();
    S.setAttribute("position", new N(new Float32Array(F), 3));
    const I = [];
    for (let z = 0; z < h.length; z++) {
      const B = (z + 1) % h.length;
      I.push(...h[z], ...h[B]);
    }
    const b = new L();
    return b.setAttribute("position", new N(new Float32Array(I), 3)), { fill: S, outline: b };
  }
  function A(v, M, u, s, i) {
    const p = M / 2, h = i / 2, x = [], F = [[0, -v, -p], [0, -v, -p + u], [0, -h - s, -p + u], [0, -h - s, p - u], [0, -v, p - u], [0, -v, p], [0, -h, p], [0, -h, -p]], S = F.map((Z) => [Z[0], -Z[1], Z[2]]), I = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of I) x.push(...F[Z]);
    for (const Z of I) x.push(...S[Z]);
    const b = new L();
    b.setAttribute("position", new N(new Float32Array(x), 3));
    const z = [];
    for (const Z of [F, S]) for (let Y = 0; Y < Z.length; Y++) {
      const W = (Y + 1) % Z.length;
      z.push(...Z[Y], ...Z[W]);
    }
    const B = new L();
    return B.setAttribute("position", new N(new Float32Array(z), 3)), { fill: b, outline: B };
  }
  function f(v, M, u, s) {
    const i = v / 2, p = M / 2, h = s / 2, x = [[0, -h, -p], [0, h, -p], [0, h, p - u], [0, i, p - u], [0, i, p], [0, -i, p], [0, -i, p - u], [0, -h, p - u]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], S = [];
    for (const B of F) S.push(...x[B]);
    const I = new L();
    I.setAttribute("position", new N(new Float32Array(S), 3));
    const b = [];
    for (let B = 0; B < x.length; B++) {
      const Z = (B + 1) % x.length;
      b.push(...x[B], ...x[Z]);
    }
    const z = new L();
    return z.setAttribute("position", new N(new Float32Array(b), 3)), { fill: I, outline: z };
  }
  function T(v, M, u = 24) {
    const s = v / 2, i = s - M, p = [];
    for (let S = 0; S < u; S++) {
      const I = S / u * Math.PI * 2, b = (S + 1) / u * Math.PI * 2, z = Math.cos(I), B = Math.sin(I), Z = Math.cos(b), Y = Math.sin(b);
      p.push(0, s * z, s * B, 0, s * Z, s * Y, 0, i * Z, i * Y), p.push(0, s * z, s * B, 0, i * Z, i * Y, 0, i * z, i * B);
    }
    const h = new L();
    h.setAttribute("position", new N(new Float32Array(p), 3));
    const x = [];
    for (let S = 0; S < u; S++) {
      const I = S / u * Math.PI * 2, b = (S + 1) / u * Math.PI * 2;
      x.push(0, s * Math.cos(I), s * Math.sin(I), 0, s * Math.cos(b), s * Math.sin(b)), x.push(0, i * Math.cos(I), i * Math.sin(I), 0, i * Math.cos(b), i * Math.sin(b));
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(x), 3)), { fill: h, outline: F };
  }
  const R = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), X = new et({ color: 52479 }), k = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), P = new et({ color: 16750848 });
  function C(v, M) {
    const u = Math.abs(M[0] - v[0]), s = Math.abs(M[1] - v[1]), i = Math.abs(M[2] - v[2]);
    return i > u && i > s || s > u && s > i;
  }
  return V.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const v = e.secColumns.rawVal, M = e.secBeams.rawVal;
    if (!v && !M) {
      n.children.forEach((h) => {
        h instanceof G && h.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((h) => {
      h instanceof G && h.dispose();
    }), n.clear();
    const u = (_a = t.elements) == null ? void 0 : _a.val, s = (_b = t.elementInputs) == null ? void 0 : _b.val;
    if (!u || !s) return;
    const i = s.sectionShapes, p = e.secFloor.rawVal;
    u.forEach((h, x) => {
      if (h.length !== 2) return;
      const F = r.rawVal[h[0]], S = r.rawVal[h[1]];
      if (!F || !S) return;
      const I = C(F, S);
      if (I && !v || !I && !M) return;
      if (p >= 0) {
        const Y = Math.min(F[1], S[1]);
        Math.max(F[1], S[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(Y / W + 0.01) !== p) return;
      }
      const b = i == null ? void 0 : i.get(x);
      if (!b) return;
      const z = [(F[0] + S[0]) / 2, (F[1] + S[1]) / 2, (F[2] + S[2]) / 2], B = Ft(F, S);
      if (b.type === "CFT") {
        const Y = w(b.b, b.h, b.tw ?? b.b * 0.05), W = new D(Y.concFill, R);
        W.position.set(...z), W.rotation.setFromRotationMatrix(B), n.add(W);
        const H = new D(Y.steelFillGeom, k);
        H.position.set(...z), H.rotation.setFromRotationMatrix(B), n.add(H);
        const _ = new nt(Y.outline, P);
        _.position.set(...z), _.rotation.setFromRotationMatrix(B), n.add(_);
      } else {
        let Y, W, H;
        switch (b.type) {
          case "rect":
            Y = a(b.b, b.h), W = R, H = X;
            break;
          case "circ":
            Y = d(b.d), W = R, H = X;
            break;
          case "I":
            Y = l(b.b, b.h, b.tf, b.tw), W = k, H = P;
            break;
          case "HSS":
            Y = m(b.b, b.h, b.tw ?? b.b * 0.05), W = k, H = P;
            break;
          case "CFT":
            Y = w(b.b, b.h, b.tw ?? b.b * 0.05), W = k, H = P;
            break;
          case "L":
            Y = y(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3), W = k, H = P;
            break;
          case "2L":
            Y = g(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3, b.dis ?? 0.01), W = k, H = P;
            break;
          case "C":
          case "coldC":
            Y = c(b.b, b.h, b.tf ?? b.t ?? 3e-3, b.tw ?? b.t ?? 3e-3), W = k, H = P;
            break;
          case "2C":
            Y = A(b.b, b.h, b.tf ?? 5e-3, b.tw ?? 5e-3, b.dis ?? 0.01), W = k, H = P;
            break;
          case "T":
            Y = f(b.b, b.h, b.tf ?? 0.01, b.tw ?? 6e-3), W = k, H = P;
            break;
          case "pipe":
            Y = T(b.d, b.tw ?? b.d * 0.05), W = k, H = P;
            break;
          default:
            return;
        }
        const _ = new D(Y.fill, W);
        _.position.set(...z), _.rotation.setFromRotationMatrix(B), n.add(_);
        const q = new nt(Y.outline, H);
        q.position.set(...z), q.rotation.setFromRotationMatrix(B), n.add(q);
      }
      const Z = ue(b);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(b.type) ? "#ff9900" : "#00ccff", H = new G(Z, W, "transparent");
        H.position.set(z[0], z[1], z[2]);
        const _ = 0.05 * e.gridSize.rawVal * 0.5;
        H.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(H);
      }
    });
  }), o && V.derive(() => {
    if (o.val, !e.sections.rawVal) return;
    const v = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((M) => {
      M instanceof G && M.updateScale(v * o.rawVal);
    });
  }), V.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends U {
  constructor(e, r, o, n, a, d, l) {
    super();
    const m = new ut().moveTo(0, 0).lineTo(0, d[1]).lineTo(o, d[1]).lineTo(o, 0).lineTo(0, 0), w = m.getPoints(), y = new L().setFromPoints(w);
    this.lines = new nt(y, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new ht(m), c = new Q({ color: d[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(g, c), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new G(`${a[1].toFixed(4)}`), this.normalizedResult = d, this.textPosition = ot([e, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Tt extends U {
  constructor(e, r, o, n, a, d, l) {
    super();
    const m = a[0] * o / (a[0] + a[1]), w = a[0] * a[1] > 0;
    if (this.text = new G(`${a[0].toFixed(4)}`), this.text2 = new G(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = d, this.textPosition = gt(e, r), this.text2Position = gt(r, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), w) {
      const y = new ut().moveTo(0, 0).lineTo(0, d[0]).lineTo(m, 0).lineTo(0, 0), g = new ut().moveTo(m, 0).lineTo(o, -d[1]).lineTo(o, 0).lineTo(m, 0), c = y.getPoints(), A = g.getPoints(), f = new L().setFromPoints(c), T = new L().setFromPoints(A), R = new et({ color: j().resultOutline });
      this.lines = new nt(f, R), this.lines2 = new nt(T, R), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), l && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const X = new ht(y), k = new ht(g), P = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: O }), C = new Q({ color: -d[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(X, P), this.mesh2 = new D(k, C), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), l && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const y = new ut().moveTo(0, 0).lineTo(0, d[0]).lineTo(o, -d[1]).lineTo(o, 0).lineTo(0, 0), g = y.getPoints(), c = new L().setFromPoints(g);
      this.lines = new nt(c, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const A = new ht(y), f = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(A, f), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Et = ((t) => (t.normals = "normals", t.shearsY = "shearsY", t.shearsZ = "shearsZ", t.torsions = "torsions", t.bendingsY = "bendingsY", t.bendingsZ = "bendingsZ", t))(Et || {});
function pe(t, e, r, o) {
  const n = new U(), a = { normals: lt, shearsY: lt, shearsZ: lt, torsions: lt, bendingsY: Tt, bendingsZ: Tt };
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, r.val, e.frameResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const d = Et[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[d]) == null ? void 0 : _b.forEach((l, m) => {
      var _a2, _b2;
      const w = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[m]) ?? [0, 1], y = r.rawVal[w[0]], g = r.rawVal[w[1]], c = new E(...g).distanceTo(new E(...y)), A = me((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[d]), f = l == null ? void 0 : l.map((k) => k / (A === 0 ? 1 : A)), T = Ft(y, g), R = new a[d](y, g, c, T, l ?? [0, 0], f ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(d)), X = 0.05 * e.gridSize.rawVal;
      R.updateScale(X * o.rawVal), n.add(R);
    });
  }), V.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const d = 0.05 * e.gridSize.val;
    n.children.forEach((l) => l.updateScale(d * o.rawVal));
  }), V.derive(() => {
    n.visible = e.frameResults.val != "none";
  }), n;
}
function me(t) {
  let e = 0;
  return t == null ? void 0 : t.forEach((r) => {
    const o = Math.max(...r ?? [0, 0]);
    o > e && (e = o);
  }), e;
}
class fe extends U {
  constructor(e, r, o) {
    super();
    const n = r === Ct.reactions;
    o[0] && (this.xText1 = new G(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new G(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new G(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new G(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new G(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new G(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...e), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function we(t, e, r, o) {
  const n = new U();
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const a = Ct[e.nodeResults.rawVal], d = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((l, m) => {
      const w = new fe(r.rawVal[m], a, l ?? [0, 0, 0, 0, 0, 0]);
      w.updateScale(d * o.rawVal), n.add(w);
    });
  }), V.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const a = 0.05 * e.gridSize.val;
    n.children.forEach((d) => d.updateScale(a * o.rawVal));
  }), V.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function ve({ drawingObj: t, gridObj: e, scene: r, camera: o, controls: n, gridSize: a, derivedDisplayScale: d, rendererElm: l, viewerRender: m }) {
  const w = new kt(), y = new Zt(), g = new D(new Wt(a, a), new Q({ side: O })), c = new ct(new L(), new dt()), A = new ct(new L(), new dt({ color: "gray" })), f = new ct(new L(), new dt({ color: "orange", size: 0.8 }));
  r.add(f), c.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), c.geometry.computeBoundingSphere(), c.frustumCulled = false, A.frustumCulled = false, r.add(A), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), V.derive(() => {
    t.gridTarget && (xe(e, { position: new E(...t.gridTarget.val.position), quaternion: new Ht().setFromEuler(new At(...t.gridTarget.val.rotation)) }, m), g.position.set(...t.gridTarget.val.position), g.quaternion.setFromEuler(new At(...t.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), V.derive(() => {
    c.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), c.geometry.computeBoundingSphere();
  }), V.derive(() => {
    const P = 0.05 * a * 0.5 * d.val;
    A.material.size = P, w.params.Points.threshold = 0.4 * P;
  }), V.derive(() => {
    var _a;
    const P = t.points.val ?? [], v = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], M = [];
    for (const s of v) {
      const [i, p, h] = P[s];
      M.push(i, p, h);
    }
    const u = new L();
    u.setAttribute("position", new K(M, 3)), f.geometry.dispose(), f.geometry = u;
  });
  let T = false, R = 0;
  l.addEventListener("pointerdown", () => {
    T = true;
  }), l.addEventListener("pointerup", () => {
    T = false;
  }), l.addEventListener("pointermove", () => {
    T && R++;
  }), l.addEventListener("click", (P) => {
    if (R > 5) {
      R = 0;
      return;
    }
    R = 0, y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(y, o);
    const C = w.intersectObject(g);
    if (C.length) {
      let v = C[0].point;
      (P.ctrlKey || P.metaKey) && (v = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), t.points.val = [...t.points.rawVal, v.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), l.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), l.addEventListener("pointermove", (P) => {
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(y, o);
    const C = w.intersectObject(g);
    if (A.geometry.deleteAttribute("position"), C.length) {
      let v = C[0].point;
      (P.ctrlKey || P.metaKey) && (v = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), A.geometry.setAttribute("position", new K(v.toArray(), 3));
    }
    m();
  }), l.addEventListener("pointermove", (P) => {
    var _a;
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(y, o);
    let C = false;
    const v = w.intersectObject(c), M = w.intersectObject(g);
    if (v.length && M.length) {
      const u = new E(...t.points.rawVal[v[0].index]), s = new E(...M[0].point), i = u.sub(s), p = (_a = M[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(g.matrixWorld), Math.abs(i.dot(p)) < 1e-4 && (C = true);
    }
    A.visible = !C;
  });
  let X = false, k;
  l.addEventListener("pointermove", (P) => {
    var _a;
    if (!R) return;
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(y, o);
    let C = false;
    const v = w.intersectObject(c), M = w.intersectObject(g);
    if (v.length && M.length) {
      const s = new E(...t.points.rawVal[v[0].index]), i = new E(...M[0].point), p = s.sub(i), h = (_a = M[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(g.matrixWorld), Math.abs(p.dot(h)) < 1e-4 && (C = true);
    }
    if (C && R < 5 && (X = true, n.enabled = false, k = v[0].index), !X || R % 2 !== 0) return;
    const u = [...t.points.rawVal];
    if (k !== void 0) {
      let s = M[0].point;
      (P.ctrlKey || P.metaKey) && (s = new E(Math.round(s.x), Math.round(s.y), Math.round(s.z))), u[k] = s.toArray();
    }
    t.points.val = u;
  }), l.addEventListener("pointerup", () => {
    n.enabled = true, X = false;
  }), l.addEventListener("contextmenu", (P) => {
    var _a;
    y.x = P.clientX / window.innerWidth * 2 - 1, y.y = -(P.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(y, o);
    let C = false;
    const v = w.intersectObject(c), M = w.intersectObject(g);
    if (v.length && M.length) {
      const i = new E(...t.points.rawVal[v[0].index]), p = new E(...M[0].point), h = i.sub(p), x = (_a = M[0].face) == null ? void 0 : _a.normal;
      x.transformDirection(g.matrixWorld), Math.abs(h.dot(x)) < 1e-4 && (C = true);
    }
    if (!C) return;
    const u = [...t.points.rawVal];
    if (u.splice(v[0].index, 1), t.points.val = u, !t.polylines) return;
    const s = t.polylines.rawVal.map((i) => i.filter((p) => p !== v[0].index)).map((i) => i.map((p) => p > v[0].index ? p - 1 : p)).filter((i) => i.length);
    s.push([]), t.polylines.val = s;
  });
}
function xe(t, e, r) {
  const a = Math.round(14.999999999999998), d = { position: t.position.clone(), quaternion: t.quaternion.clone() }, l = setInterval(w, 1e3 / 30);
  let m = 0;
  function w() {
    m++;
    const y = m / a;
    t.position.lerpVectors(d.position, e.position, y), t.quaternion.slerpQuaternions(d.quaternion, e.quaternion, y), r && r(), m == a && clearInterval(l);
  }
}
class Bt {
  constructor(e, r = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(e, r);
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
  setColorMap(e, r = 32) {
    this.map = yt[e] || yt.rainbow, this.n = r;
    const o = 1 / this.n, n = new $(), a = new $();
    this.lut.length = 0, this.lut.push(new $(this.map[0][1]));
    for (let d = 1; d < r; d++) {
      const l = d * o;
      for (let m = 0; m < this.map.length - 1; m++) if (l > this.map[m][0] && l <= this.map[m + 1][0]) {
        const w = this.map[m][0], y = this.map[m + 1][0];
        n.setHex(this.map[m][1], rt), a.setHex(this.map[m + 1][1], rt);
        const g = new $().lerpColors(n, a, (l - w) / (y - w));
        this.lut.push(g);
      }
    }
    return this.lut.push(new $(this.map[this.map.length - 1][1])), this;
  }
  copy(e) {
    return this.lut = e.lut, this.map = e.map, this.n = e.n, this.minV = e.minV, this.maxV = e.maxV, this;
  }
  getColor(e) {
    e = _t.clamp(e, this.minV, this.maxV), e = (e - this.minV) / (this.maxV - this.minV);
    const r = Math.round(e * this.n);
    return this.lut[r];
  }
  addColorMap(e, r) {
    return yt[e] = r, this;
  }
  createCanvas() {
    const e = document.createElement("canvas");
    return e.width = 1, e.height = this.n, this.updateCanvas(e), e;
  }
  updateCanvas(e) {
    const r = e.getContext("2d", { alpha: false }), o = r.getImageData(0, 0, 1, this.n), n = o.data;
    let a = 0;
    const d = 1 / this.n, l = new $(), m = new $(), w = new $();
    for (let y = 1; y >= 0; y -= d) for (let g = this.map.length - 1; g >= 0; g--) if (y < this.map[g][0] && y >= this.map[g - 1][0]) {
      const c = this.map[g - 1][0], A = this.map[g][0];
      l.setHex(this.map[g - 1][1], rt), m.setHex(this.map[g][1], rt), w.lerpColors(l, m, (y - c) / (A - c)), n[a * 4] = Math.round(w.r * 255), n[a * 4 + 1] = Math.round(w.g * 255), n[a * 4 + 2] = Math.round(w.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(o, 0, 0), e;
  }
}
const yt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function Me(t, e, r) {
  const o = new Bt(), n = new $(), a = new D(new L(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, V.derive(() => {
    a.geometry.setAttribute("position", new K(t.val.flat(), 3));
    const d = [];
    for (const c of e.val) c.length === 3 ? d.push(c[0], c[1], c[2]) : c.length === 4 && (d.push(c[0], c[1], c[2]), d.push(c[0], c[2], c[3]));
    a.geometry.setIndex(new Nt(d, 1)), a.geometry.setAttribute("color", new K(t.val.map(() => [0, 0, 0]).flat(), 3));
    const l = r.val.filter((c) => Number.isFinite(c));
    let m, w;
    const y = Vt.val;
    if (y ? (w = y[0], m = y[1]) : (m = l.length ? Math.max(...l) : 1, w = l.length ? Math.min(...l) : 0, w >= 0 && m > 0 && (w = 0)), m === w) {
      const c = Math.max(Math.abs(m) * 1e-6, 1e-9);
      m += c, w -= c;
    }
    if (m < w) {
      const c = m;
      m = w, w = c;
    }
    o.setMax(m), o.setMin(w);
    for (let c = 0; c < r.val.length; c++) {
      const A = r.val[c];
      if (!Number.isFinite(A)) {
        a.geometry.attributes.color.setXYZ(c, 0.3, 0.3, 0.3);
        continue;
      }
      const f = o.getColor(A) ?? new $(0, 0, 0);
      n.copy(f).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(c, n.r, n.g, n.b);
    }
  }), a;
}
function ye(t, e, r, o) {
  const n = Me(r, t.elements, o);
  return V.derive(() => {
    n.visible = e.shellResults.val != "none";
  }), n;
}
const be = 6, bt = 10, ge = 0.012;
function Fe(t) {
  return t.startsWith("contour:") ? t.slice(8) : null;
}
function Ce(t, e, r, o) {
  if (!r && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(t) && r) {
    const a = r[t];
    if (a && a.has(e)) return a.get(e);
  }
  return null;
}
function Ve(t, e, r, o) {
  const n = new U(), a = new Bt();
  a.setColorMap("rainbow");
  const d = new $(), l = V.state([]);
  return V.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const m = r.val, w = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], y = Fe(e.frameResults.val);
    if (n.children.forEach((x) => {
      x.geometry && x.geometry.dispose(), x.material && x.material.dispose();
    }), n.clear(), !y || w.length === 0 || m.length === 0) {
      l.val = [];
      return;
    }
    const g = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, c = (_c = t.deformOutputs) == null ? void 0 : _c.val, A = [], f = [];
    for (let x = 0; x < w.length; x++) {
      if (w[x].length !== 2) continue;
      const S = Ce(y, x, g, c);
      S && (A.push(S[0], S[1]), f.push({ idx: x, vals: S }));
    }
    if (A.length === 0) {
      l.val = [];
      return;
    }
    const T = Math.min(...A), R = Math.max(...A);
    a.setMin(T), a.setMax(R), l.val = A;
    const X = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of m) for (let F = 0; F < 3; F++) X[F] = Math.min(X[F], x[F]), k[F] = Math.max(k[F], x[F]);
    const C = Math.max(k[0] - X[0], k[1] - X[1], k[2] - X[2], 1) * ge, v = [], M = [], u = [];
    let s = 0;
    for (const { idx: x, vals: F } of f) {
      const S = w[x], I = m[S[0]], b = m[S[1]];
      if (!I || !b) continue;
      const z = new E(b[0] - I[0], b[1] - I[1], b[2] - I[2]), B = z.length();
      if (B < 1e-10) continue;
      z.normalize();
      const Z = Math.abs(z.y) < 0.99 ? new E(0, 1, 0) : new E(1, 0, 0), Y = new E().crossVectors(z, Z).normalize(), W = new E().crossVectors(z, Y).normalize(), H = bt + 1, _ = be;
      for (let q = 0; q < H; q++) {
        const J = q / bt, st = I[0] + z.x * B * J, it = I[1] + z.y * B * J, mt = I[2] + z.z * B * J, ft = F[0] + (F[1] - F[0]) * J, at = a.getColor(ft) ?? new $(0, 0, 0);
        d.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const St = wt / _ * Math.PI * 2, vt = Math.cos(St), xt = Math.sin(St);
          v.push(st + (Y.x * vt + W.x * xt) * C, it + (Y.y * vt + W.y * xt) * C, mt + (Y.z * vt + W.z * xt) * C), M.push(d.r, d.g, d.b);
        }
      }
      for (let q = 0; q < bt; q++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = s + q * _ + J, mt = s + q * _ + st, ft = s + (q + 1) * _ + J, at = s + (q + 1) * _ + st;
        u.push(it, mt, at), u.push(it, at, ft);
      }
      s += H * _;
    }
    if (v.length === 0) return;
    const i = new L();
    i.setAttribute("position", new K(v, 3)), i.setAttribute("color", new K(M, 3)), i.setIndex(u), i.computeVertexNormals();
    const p = new Q({ vertexColors: true, side: O }), h = new D(i, p);
    h.frustumCulled = false, n.add(h);
  }), n.__colorMapValues = l, n;
}
function Yt(t, e = 8) {
  const r = document.createElement("div");
  r.id = "legend";
  const o = Array.from({ length: e + 1 }, (l, m) => m / e).reverse();
  let n, a;
  o.forEach((l, m) => {
    n = document.createElement("div"), n.id = `marker-${m}`, n.className = "marker", n.style.marginTop = m == 0 ? "0px" : `calc(${50 / e}vh - 1px)`, a = document.createElement("p"), a.id = `marker-text-${m}`, n.append(a), r.append(n);
  });
  const d = [];
  return r.querySelectorAll("p").forEach((l) => d.push(l)), setTimeout(() => {
    V.derive(() => {
      o.forEach((l, m) => {
        const w = d[m];
        w && (w.innerText = Se(t.val, l).toString());
      });
    });
  }), r;
}
function Se(t, e) {
  const r = Vt.val;
  if (r) return (r[0] + e * (r[1] - r[0])).toPrecision(3);
  const o = t.filter((d) => Number.isFinite(d));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const a = Math.max(...o);
  return n >= 0 && a > 0 && (n = 0), (n + e * (a - n)).toPrecision(3);
}
function Ie({ mesh: t, settingsObj: e, drawingObj: r, objects3D: o, solids: n }) {
  Qt.DEFAULT_UP = new E(0, 0, 1);
  const a = document.createElement("div"), d = new $t(), l = new Gt(45, 1, 0.1, 2 * 1e6), m = new qt(-10, 10, 10, -10, -1e3, 2e6);
  let w = l;
  const y = new Kt({ antialias: true });
  y.localClippingEnabled = true;
  const g = new Ut(l, y.domElement), c = jt(e), A = V.derive(() => c.displayScale.val === 0 ? 1 : c.displayScale.val > 0 ? c.displayScale.val : -1 / c.displayScale.val), f = Ae(t, c);
  let T = Pt(c.gridSize.rawVal);
  a.appendChild(Ot(c, t, n)), a.setAttribute("id", "viewer"), a.appendChild(y.domElement), y.setPixelRatio(window.devicePixelRatio);
  const R = j();
  y.setClearColor(R.background, 1);
  const X = c.gridSize.rawVal, k = X * 0.5 + X * 0.5 / Math.tan(45 * 0.5);
  l.position.set(0.5 * X, 0.8 * -k, 0.5 * X), g.target.set(0.5 * X, 0.5 * X, 0), g.minDistance = 1, g.maxDistance = k * 2.5, g.zoomSpeed = 10, g.update(), d.add(T, le(c.gridSize.rawVal, c.flipAxes.rawVal)), new ResizeObserver((u) => {
    var _a, _b;
    for (const s of u) {
      const i = (_a = s.target) == null ? void 0 : _a.clientWidth, p = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || p === 0) continue;
      l.aspect = i / p, l.updateProjectionMatrix();
      const h = i / p, x = m.top;
      m.left = -x * h, m.right = x * h, m.updateProjectionMatrix(), y.setSize(i, p), C();
    }
  }).observe(a), g.addEventListener("change", C), V.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, c.displayScale.val, c.nodes.val, c.elements.val, c.elemColumns.val, c.elemBeams.val, c.nodesIndexes.val, c.elementsIndexes.val, c.orientations.val, c.sections.val, c.secColumns.val, c.secBeams.val, c.secFloor.val, c.supports.val, c.loads.val, c.deformedShape.val, c.nodeResults.val, c.frameResults.val, c.shellResults.val, setTimeout(C);
  });
  function C() {
    y.render(d, w);
  }
  function v(u) {
    w = u, g.object = u, g.update(), C();
  }
  if (t) {
    d.add(te(c, f, A), ee(t, c, f), ie(c, f, A), ae(t, c, f, A), oe(t, c, f, A), se(t, c, f, A), de(t, c, f, A), he(t, c, f, A), we(t, c, f, A), pe(t, c, f, A));
    const u = ze(t, c), s = ye(t, c, f, u), i = Yt(u);
    d.add(s), a.appendChild(i);
    const p = Ve(t, c, f);
    d.add(p);
    const h = p.__colorMapValues, x = Yt(h);
    x.id = "frame-legend", a.appendChild(x), V.derive(() => {
      const F = c.shellResults.val != "none", S = c.frameResults.val.startsWith("contour:");
      i.hidden = !F, s.visible = F, x.hidden = !S;
    });
  }
  if (n) {
    const u = new Dt(16777215, 0.5);
    d.add(u);
    const s = new zt(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, d.add(s);
    const i = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = i, s.shadow.camera.top = i, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const p = new zt(16777215, 0.5);
    p.color.setHSL(11, 43, 96), p.position.set(-10, 0, 30), d.add(p), V.derive(() => {
      (n == null ? void 0 : n.val.length) && (d.remove(...n.oldVal), d.add(...n.rawVal), C());
    }), V.derive(() => {
      n.rawVal.forEach((h) => h.visible = c.solids.val), C();
    });
  }
  o && V.derive(() => {
    (o == null ? void 0 : o.val.length) && (d.remove(...o.oldVal), d.add(...o.rawVal), C());
  }), r && ve({ drawingObj: r, gridObj: T, scene: d, camera: l, controls: g, gridSize: X, derivedDisplayScale: A, rendererElm: y.domElement, viewerRender: C }), pt((u, s) => {
    y.setClearColor(s.background, 1), d.remove(T), T.geometry.dispose(), T.material.dispose(), T = Pt(c.gridSize.rawVal), d.add(T), a.style.setProperty("--awatif-legend-color", s.legendMarker), C();
  });
  const M = { scene: d, perspCamera: l, orthoCamera: m, get camera() {
    return w;
  }, controls: g, renderer: y, rendererElm: y.domElement, render: C, setActiveCamera: v, settings: c };
  return a.__ctx = M, a;
}
function Ae(t, e) {
  return V.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || r.length === 0) return r;
    let n = 1 / 0, a = 1 / 0, d = 1 / 0, l = -1 / 0, m = -1 / 0, w = -1 / 0;
    for (const f of r) f[0] < n && (n = f[0]), f[0] > l && (l = f[0]), f[1] < a && (a = f[1]), f[1] > m && (m = f[1]), f[2] < d && (d = f[2]), f[2] > w && (w = f[2]);
    const y = Math.sqrt((l - n) ** 2 + (m - a) ** 2 + (w - d) ** 2);
    let g = 0;
    o.forEach((f) => {
      const T = Math.sqrt(f[0] ** 2 + f[1] ** 2 + f[2] ** 2);
      T > g && (g = T);
    });
    const A = g > 1e-30 && y > 1e-30 ? 0.07 * y / g : 1;
    return r.map((f, T) => {
      var _a2;
      const R = ((_a2 = o.get(T)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return f.map((X, k) => X + R[k] * A);
    });
  });
}
const Vt = V.state(null);
function ze(t, e) {
  const r = V.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), V.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), f = (k, P) => {
      k == null ? void 0 : k.forEach((C, v) => {
        const M = t.elements.val[v];
        if (M) for (let u = 0; u < M.length; u++) P.set(M[u], [C[u] ?? C[0]]);
      });
    };
    f((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), f((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), f((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, d), f((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, l), f((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, m), f((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, w), f((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, y), f((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), f((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, c), f((_t2 = (_s = t.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, A);
    const T = (_v = (_u = t.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRange;
    Vt.val = Array.isArray(T) && T.length === 2 ? [T[0], T[1]] : null;
    const R = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [d, 0], membraneXX: [l, 0], membraneYY: [m, 0], membraneXY: [w, 0], tranverseShearX: [y, 0], tranverseShearY: [g, 0], vonMises: [c, 0], pressure: [A, 0], displacementX: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = t.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = t.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, X = [];
    t.nodes.val.forEach((k, P) => {
      const C = R[e.shellResults.val];
      if (!C || !C[0] || typeof C[0].has != "function") return;
      if (!C[0].has(P)) {
        X.push(Number.NaN);
        return;
      }
      const v = C[0].get(P);
      X.push(v ? v[C[1]] ?? 0 : 0);
    }), r.val = X;
  }), r;
}
export {
  Me as a,
  Yt as b,
  Ie as g
};
