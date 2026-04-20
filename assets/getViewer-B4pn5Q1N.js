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
  return pt((a, c) => {
    n.material.color.setHex(c.nodePoint);
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
  pt((f, A) => {
    a.material.color.setHex(A.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), l = new D(new L(), c);
  l.frustumCulled = false, n.add(l);
  let m = new $(o.shellWall), y = new $(o.shellSlab), b = new $(o.shellTri);
  pt((f, A) => {
    m = new $(A.shellWall), y = new $(A.shellSlab), b = new $(A.shellTri), c.opacity = A.shellOpacity, c.needsUpdate = true;
  });
  function p(f, A) {
    const w = Math.abs(A[0] - f[0]), T = Math.abs(A[1] - f[1]), R = Math.abs(A[2] - f[2]);
    return R > w && R > T || T > w && T > R;
  }
  return V.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const f = e.elemColumns.rawVal, A = e.elemBeams.rawVal, w = r.val, T = ((_a = t.elements) == null ? void 0 : _a.val) || [], R = T.filter((C) => {
      if (C.length !== 2) return true;
      const v = w[C[0]], M = w[C[1]];
      if (!v || !M) return true;
      const d = p(v, M);
      return !(d && !f || !d && !A);
    }).map((C) => ne(C).map((v) => [...w[v[0]], ...w[v[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new K(R, 3));
    const X = [], k = [];
    function P(C, v, M, d) {
      const s = [v[0] - C[0], v[1] - C[1], v[2] - C[2]], i = [d[0] - C[0], d[1] - C[1], d[2] - C[2]], h = s[1] * i[2] - s[2] * i[1], u = s[2] * i[0] - s[0] * i[2], x = s[0] * i[1] - s[1] * i[0], F = Math.sqrt(h * h + u * u + x * x);
      return F < 1e-12 ? false : Math.abs(x / F) < 0.5;
    }
    for (const C of T) if (C.length === 3) {
      const [v, M, d] = C;
      if (w[v] && w[M] && w[d]) {
        X.push(...w[v], ...w[M], ...w[d]);
        for (let s = 0; s < 3; s++) k.push(b.r, b.g, b.b);
      }
    } else if (C.length === 4) {
      const [v, M, d, s] = C;
      if (w[v] && w[M] && w[d] && w[s]) {
        const i = P(w[v], w[M], w[d], w[s]) ? m : y;
        X.push(...w[v], ...w[M], ...w[d]), X.push(...w[v], ...w[d], ...w[s]);
        for (let h = 0; h < 6; h++) k.push(i.r, i.g, i.b);
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
  const n = new U(), a = new Lt(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((m, y) => {
      const b = r.val[y];
      if (!b) return;
      const p = new D(a, c);
      p.position.set(...b);
      const f = l * o.rawVal;
      p.scale.set(f, f, f), n.add(p);
    });
  }), V.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const m = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((y) => y.scale.set(m, m, m));
  }), V.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function se(t, e, r, o) {
  const n = new U();
  n.name = "loadsGroup";
  function a(c) {
    if (c.length < 2) return 0.12 * e.gridSize.rawVal;
    const l = [1 / 0, 1 / 0, 1 / 0], m = [-1 / 0, -1 / 0, -1 / 0];
    for (const b of c) for (let p = 0; p < 3; p++) l[p] = Math.min(l[p], b[p]), m[p] = Math.max(m[p], b[p]);
    return 0.08 * Math.max(m[0] - l[0], m[1] - l[1], m[2] - l[2], 0.1);
  }
  return V.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((m) => m.dispose()), n.clear();
    const c = r.val, l = a(c);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((m, y) => {
      const b = c[y];
      if (!b) return;
      const p = new E(...m.slice(0, 3));
      if (p.lengthSq() < 1e-30) return;
      p.normalize();
      const f = new tt(p, new E(...b), 1, 15637248, 0.3, 0.3), A = l * o.rawVal;
      f.scale.set(A, A, A), n.add(f);
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
    e.val.forEach((a, c) => {
      const l = new G(`${c}`);
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
    n.children.forEach((c) => c.dispose()), n.clear();
    const a = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((c, l) => {
      const m = new G(`${l}`, void 0, "#001219");
      m.position.set(...re(c.map((y) => r.rawVal[y]))), m.updateScale(a * o.rawVal), n.add(m);
    });
  }), V.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const a = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(a * o.rawVal));
  }), V.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function re(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function le(t, e) {
  const r = new U(), o = 0.05 * t * 1, n = j(), a = new G("X", "red", "transparent"), c = new G(e ? "Z" : "Y", "green", "transparent"), l = new G(e ? "Y" : "Z", "blue", "transparent"), m = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), y = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), b = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), l.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), c.updateScale(0.4 * o), l.updateScale(0.4 * o), m.scale.set(o, o, o), y.scale.set(o, o, o), b.scale.set(o, o, o), r.add(m, y, b, a, c, l), r;
}
function Ft(t, e) {
  const r = new E(...t), n = new E(...e).clone().sub(r), a = n.length(), c = n.dot(new E(1, 0, 0)) / a, l = n.dot(new E(0, 1, 0)) / a, m = n.dot(new E(0, 0, 1)) / a, y = Math.sqrt(c ** 2 + l ** 2);
  let b = new Mt().fromArray([[c, l, m], [-l / y, c / y, 0], [-c * m / y, -l * m / y, y]].flat());
  return m === 1 && (b = new Mt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), m === -1 && (b = new Mt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Xt().setFromMatrix3(b);
}
function gt(t, e) {
  return t == null ? void 0 : t.map((r, o) => (9 * r + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function ce(t, e, r) {
  const o = ot([e, r]), n = ot([t, r]), a = ot([t, e]), c = new E(...o).sub(new E(...n)).normalize(), l = new E(...r).sub(new E(...a)).normalize(), m = c.clone().cross(l).normalize(), y = m.clone().cross(c).normalize();
  return new Xt().makeBasis(c, y, m);
}
function de(t, e, r, o) {
  const n = new U(), a = new L(), c = new et({ vertexColors: true }), l = [0, 0, 0], m = [1, 0, 0], y = [0, 1, 0], b = [0, 0, 1];
  a.setAttribute("position", new K([...l, ...m, ...l, ...y, ...l, ...b], 3));
  const p = [255, 0, 0], f = [0, 255, 0], A = [0, 0, 255];
  return a.setAttribute("color", new K([...p, ...p, ...f, ...f, ...A, ...A], 3)), V.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((w) => {
      const T = new It(a, c), R = r.rawVal[w[0]], X = r.rawVal[w[1]];
      if (w.length === 2 && (T.position.set(...gt(R, X)), T.rotation.setFromRotationMatrix(Ft(R, X))), w.length === 3) {
        const C = r.rawVal[w[2]];
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
    const d = v / 2, s = M / 2, i = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, -s, 0, d, s, 0, -d, s]), h = new L();
    h.setAttribute("position", new N(i, 3));
    const u = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, s, 0, -d, -s]), x = new L();
    return x.setAttribute("position", new N(u, 3)), { fill: h, outline: x };
  }
  function c(v, M = 24) {
    const d = v / 2, s = new Float32Array(M * 9);
    for (let x = 0; x < M; x++) {
      const F = x / M * Math.PI * 2, S = (x + 1) / M * Math.PI * 2;
      s[x * 9] = 0, s[x * 9 + 1] = 0, s[x * 9 + 2] = 0, s[x * 9 + 3] = 0, s[x * 9 + 4] = d * Math.cos(F), s[x * 9 + 5] = d * Math.sin(F), s[x * 9 + 6] = 0, s[x * 9 + 7] = d * Math.cos(S), s[x * 9 + 8] = d * Math.sin(S);
    }
    const i = new L();
    i.setAttribute("position", new N(s, 3));
    const h = new Float32Array((M + 1) * 3);
    for (let x = 0; x <= M; x++) {
      const F = x / M * Math.PI * 2;
      h[x * 3] = 0, h[x * 3 + 1] = d * Math.cos(F), h[x * 3 + 2] = d * Math.sin(F);
    }
    const u = new L();
    return u.setAttribute("position", new N(h, 3)), { fill: i, outline: u };
  }
  function l(v, M, d, s) {
    const i = d ?? M * 0.08, h = s ?? v * 0.07, u = v / 2, x = M / 2, F = x - i, S = h / 2, I = [];
    function g(Y, W, H, _) {
      I.push(0, Y, W, 0, H, W, 0, H, _, 0, Y, W, 0, H, _, 0, Y, _);
    }
    g(-u, -x, u, -F), g(-S, -F, S, F), g(-u, F, u, x);
    const z = new L();
    z.setAttribute("position", new N(new Float32Array(I), 3));
    const B = new Float32Array([0, -u, -x, 0, u, -x, 0, u, -F, 0, S, -F, 0, S, F, 0, u, F, 0, u, x, 0, -u, x, 0, -u, F, 0, -S, F, 0, -S, -F, 0, -u, -F, 0, -u, -x]), Z = new L();
    return Z.setAttribute("position", new N(B, 3)), { fill: z, outline: Z };
  }
  function m(v, M, d) {
    const s = v / 2, i = M / 2, h = s - d, u = i - d, x = [];
    function F(z, B, Z, Y) {
      x.push(0, z, B, 0, Z, B, 0, Z, Y, 0, z, B, 0, Z, Y, 0, z, Y);
    }
    F(-s, -i, s, -u), F(-s, u, s, i), F(-s, -u, -h, u), F(h, -u, s, u);
    const S = new L();
    S.setAttribute("position", new N(new Float32Array(x), 3));
    const I = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -h, -u, 0, h, -u, 0, h, -u, 0, h, u, 0, h, u, 0, -h, u, 0, -h, u, 0, -h, -u]), g = new L();
    return g.setAttribute("position", new N(I, 3)), { fill: S, outline: g };
  }
  function y(v, M, d) {
    const s = v / 2, i = M / 2, h = s - d, u = i - d, x = new L(), F = new Float32Array([0, -h, -u, 0, h, -u, 0, h, u, 0, -h, -u, 0, h, u, 0, -h, u]);
    x.setAttribute("position", new N(F, 3));
    const S = [];
    function I(Z, Y, W, H) {
      S.push(0, Z, Y, 0, W, Y, 0, W, H, 0, Z, Y, 0, W, H, 0, Z, H);
    }
    I(-s, -i, s, -u), I(-s, u, s, i), I(-s, -u, -h, u), I(h, -u, s, u);
    const g = new L();
    g.setAttribute("position", new N(new Float32Array(S), 3));
    const z = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -h, -u, 0, h, -u, 0, h, -u, 0, h, u, 0, h, u, 0, -h, u, 0, -h, u, 0, -h, -u]), B = new L();
    return B.setAttribute("position", new N(z, 3)), { concFill: x, steelFillGeom: g, outline: B };
  }
  function b(v, M, d) {
    const s = [], i = [[0, -v / 2, -M / 2], [0, -v / 2 + d, -M / 2], [0, -v / 2 + d, M / 2 - d], [0, v / 2, M / 2 - d], [0, v / 2, M / 2], [0, -v / 2, M / 2]], h = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const S of h) s.push(...i[S]);
    const u = new L();
    u.setAttribute("position", new N(new Float32Array(s), 3));
    const x = [];
    for (let S = 0; S < i.length; S++) {
      const I = (S + 1) % i.length;
      x.push(...i[S], ...i[I]);
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(x), 3)), { fill: u, outline: F };
  }
  function p(v, M, d, s) {
    const i = s / 2, h = [], u = [[0, -v - i, -M / 2], [0, -d - i, -M / 2], [0, -d - i, M / 2 - d], [0, -i, M / 2 - d], [0, -i, M / 2], [0, -v - i, M / 2]], x = [[0, i, -M / 2], [0, i + d, -M / 2], [0, i + d, M / 2 - d], [0, v + i, M / 2 - d], [0, v + i, M / 2], [0, i, M / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const z of F) h.push(...u[z]);
    for (const z of F) h.push(...x[z]);
    const S = new L();
    S.setAttribute("position", new N(new Float32Array(h), 3));
    const I = [];
    for (const z of [u, x]) for (let B = 0; B < z.length; B++) {
      const Z = (B + 1) % z.length;
      I.push(...z[B], ...z[Z]);
    }
    const g = new L();
    return g.setAttribute("position", new N(new Float32Array(I), 3)), { fill: S, outline: g };
  }
  function f(v, M, d, s) {
    const i = M / 2, h = v, u = [[0, -h, -i], [0, -h, -i + d], [0, -s, -i + d], [0, -s, i - d], [0, -h, i - d], [0, -h, i], [0, 0, i], [0, 0, -i]], x = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
    for (const z of x) F.push(...u[z]);
    const S = new L();
    S.setAttribute("position", new N(new Float32Array(F), 3));
    const I = [];
    for (let z = 0; z < u.length; z++) {
      const B = (z + 1) % u.length;
      I.push(...u[z], ...u[B]);
    }
    const g = new L();
    return g.setAttribute("position", new N(new Float32Array(I), 3)), { fill: S, outline: g };
  }
  function A(v, M, d, s, i) {
    const h = M / 2, u = i / 2, x = [], F = [[0, -v, -h], [0, -v, -h + d], [0, -u - s, -h + d], [0, -u - s, h - d], [0, -v, h - d], [0, -v, h], [0, -u, h], [0, -u, -h]], S = F.map((Z) => [Z[0], -Z[1], Z[2]]), I = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of I) x.push(...F[Z]);
    for (const Z of I) x.push(...S[Z]);
    const g = new L();
    g.setAttribute("position", new N(new Float32Array(x), 3));
    const z = [];
    for (const Z of [F, S]) for (let Y = 0; Y < Z.length; Y++) {
      const W = (Y + 1) % Z.length;
      z.push(...Z[Y], ...Z[W]);
    }
    const B = new L();
    return B.setAttribute("position", new N(new Float32Array(z), 3)), { fill: g, outline: B };
  }
  function w(v, M, d, s) {
    const i = v / 2, h = M / 2, u = s / 2, x = [[0, -u, -h], [0, u, -h], [0, u, h - d], [0, i, h - d], [0, i, h], [0, -i, h], [0, -i, h - d], [0, -u, h - d]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], S = [];
    for (const B of F) S.push(...x[B]);
    const I = new L();
    I.setAttribute("position", new N(new Float32Array(S), 3));
    const g = [];
    for (let B = 0; B < x.length; B++) {
      const Z = (B + 1) % x.length;
      g.push(...x[B], ...x[Z]);
    }
    const z = new L();
    return z.setAttribute("position", new N(new Float32Array(g), 3)), { fill: I, outline: z };
  }
  function T(v, M, d = 24) {
    const s = v / 2, i = s - M, h = [];
    for (let S = 0; S < d; S++) {
      const I = S / d * Math.PI * 2, g = (S + 1) / d * Math.PI * 2, z = Math.cos(I), B = Math.sin(I), Z = Math.cos(g), Y = Math.sin(g);
      h.push(0, s * z, s * B, 0, s * Z, s * Y, 0, i * Z, i * Y), h.push(0, s * z, s * B, 0, i * Z, i * Y, 0, i * z, i * B);
    }
    const u = new L();
    u.setAttribute("position", new N(new Float32Array(h), 3));
    const x = [];
    for (let S = 0; S < d; S++) {
      const I = S / d * Math.PI * 2, g = (S + 1) / d * Math.PI * 2;
      x.push(0, s * Math.cos(I), s * Math.sin(I), 0, s * Math.cos(g), s * Math.sin(g)), x.push(0, i * Math.cos(I), i * Math.sin(I), 0, i * Math.cos(g), i * Math.sin(g));
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(x), 3)), { fill: u, outline: F };
  }
  const R = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), X = new et({ color: 52479 }), k = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), P = new et({ color: 16750848 });
  function C(v, M) {
    const d = Math.abs(M[0] - v[0]), s = Math.abs(M[1] - v[1]), i = Math.abs(M[2] - v[2]);
    return i > d && i > s || s > d && s > i;
  }
  return V.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const v = e.secColumns.rawVal, M = e.secBeams.rawVal;
    if (!v && !M) {
      n.children.forEach((u) => {
        u instanceof G && u.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((u) => {
      u instanceof G && u.dispose();
    }), n.clear();
    const d = (_a = t.elements) == null ? void 0 : _a.val, s = (_b = t.elementInputs) == null ? void 0 : _b.val;
    if (!d || !s) return;
    const i = s.sectionShapes, h = e.secFloor.rawVal;
    d.forEach((u, x) => {
      if (u.length !== 2) return;
      const F = r.rawVal[u[0]], S = r.rawVal[u[1]];
      if (!F || !S) return;
      const I = C(F, S);
      if (I && !v || !I && !M) return;
      if (h >= 0) {
        const Y = Math.min(F[1], S[1]);
        Math.max(F[1], S[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(Y / W + 0.01) !== h) return;
      }
      const g = i == null ? void 0 : i.get(x);
      if (!g) return;
      const z = [(F[0] + S[0]) / 2, (F[1] + S[1]) / 2, (F[2] + S[2]) / 2], B = Ft(F, S);
      if (g.type === "CFT") {
        const Y = y(g.b, g.h, g.tw ?? g.b * 0.05), W = new D(Y.concFill, R);
        W.position.set(...z), W.rotation.setFromRotationMatrix(B), n.add(W);
        const H = new D(Y.steelFillGeom, k);
        H.position.set(...z), H.rotation.setFromRotationMatrix(B), n.add(H);
        const _ = new nt(Y.outline, P);
        _.position.set(...z), _.rotation.setFromRotationMatrix(B), n.add(_);
      } else {
        let Y, W, H;
        switch (g.type) {
          case "rect":
            Y = a(g.b, g.h), W = R, H = X;
            break;
          case "circ":
            Y = c(g.d), W = R, H = X;
            break;
          case "I":
            Y = l(g.b, g.h, g.tf, g.tw), W = k, H = P;
            break;
          case "HSS":
            Y = m(g.b, g.h, g.tw ?? g.b * 0.05), W = k, H = P;
            break;
          case "CFT":
            Y = y(g.b, g.h, g.tw ?? g.b * 0.05), W = k, H = P;
            break;
          case "L":
            Y = b(g.b ?? g.h, g.h, g.t ?? g.tw ?? 3e-3), W = k, H = P;
            break;
          case "2L":
            Y = p(g.b ?? g.h, g.h, g.t ?? g.tw ?? 3e-3, g.dis ?? 0.01), W = k, H = P;
            break;
          case "C":
          case "coldC":
            Y = f(g.b, g.h, g.tf ?? g.t ?? 3e-3, g.tw ?? g.t ?? 3e-3), W = k, H = P;
            break;
          case "2C":
            Y = A(g.b, g.h, g.tf ?? 5e-3, g.tw ?? 5e-3, g.dis ?? 0.01), W = k, H = P;
            break;
          case "T":
            Y = w(g.b, g.h, g.tf ?? 0.01, g.tw ?? 6e-3), W = k, H = P;
            break;
          case "pipe":
            Y = T(g.d, g.tw ?? g.d * 0.05), W = k, H = P;
            break;
          default:
            return;
        }
        const _ = new D(Y.fill, W);
        _.position.set(...z), _.rotation.setFromRotationMatrix(B), n.add(_);
        const q = new nt(Y.outline, H);
        q.position.set(...z), q.rotation.setFromRotationMatrix(B), n.add(q);
      }
      const Z = ue(g);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(g.type) ? "#ff9900" : "#00ccff", H = new G(Z, W, "transparent");
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
  constructor(e, r, o, n, a, c, l) {
    super();
    const m = new ut().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), y = m.getPoints(), b = new L().setFromPoints(y);
    this.lines = new nt(b, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const p = new ht(m), f = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(p, f), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new G(`${a[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = ot([e, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Tt extends U {
  constructor(e, r, o, n, a, c, l) {
    super();
    const m = a[0] * o / (a[0] + a[1]), y = a[0] * a[1] > 0;
    if (this.text = new G(`${a[0].toFixed(4)}`), this.text2 = new G(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = gt(e, r), this.text2Position = gt(r, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), y) {
      const b = new ut().moveTo(0, 0).lineTo(0, c[0]).lineTo(m, 0).lineTo(0, 0), p = new ut().moveTo(m, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(m, 0), f = b.getPoints(), A = p.getPoints(), w = new L().setFromPoints(f), T = new L().setFromPoints(A), R = new et({ color: j().resultOutline });
      this.lines = new nt(w, R), this.lines2 = new nt(T, R), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), l && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const X = new ht(b), k = new ht(p), P = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), C = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(X, P), this.mesh2 = new D(k, C), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), l && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const b = new ut().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), p = b.getPoints(), f = new L().setFromPoints(p);
      this.lines = new nt(f, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const A = new ht(b), w = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(A, w), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
    const c = Et[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((l, m) => {
      var _a2, _b2;
      const y = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[m]) ?? [0, 1], b = r.rawVal[y[0]], p = r.rawVal[y[1]], f = new E(...p).distanceTo(new E(...b)), A = me((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), w = l == null ? void 0 : l.map((k) => k / (A === 0 ? 1 : A)), T = Ft(b, p), R = new a[c](b, p, f, T, l ?? [0, 0], w ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), X = 0.05 * e.gridSize.rawVal;
      R.updateScale(X * o.rawVal), n.add(R);
    });
  }), V.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const c = 0.05 * e.gridSize.val;
    n.children.forEach((l) => l.updateScale(c * o.rawVal));
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
    const a = Ct[e.nodeResults.rawVal], c = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((l, m) => {
      const y = new fe(r.rawVal[m], a, l ?? [0, 0, 0, 0, 0, 0]);
      y.updateScale(c * o.rawVal), n.add(y);
    });
  }), V.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const a = 0.05 * e.gridSize.val;
    n.children.forEach((c) => c.updateScale(a * o.rawVal));
  }), V.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function ve({ drawingObj: t, gridObj: e, scene: r, camera: o, controls: n, gridSize: a, derivedDisplayScale: c, rendererElm: l, viewerRender: m }) {
  const y = new kt(), b = new Zt(), p = new D(new Wt(a, a), new Q({ side: O })), f = new ct(new L(), new dt()), A = new ct(new L(), new dt({ color: "gray" })), w = new ct(new L(), new dt({ color: "orange", size: 0.8 }));
  r.add(w), f.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), f.geometry.computeBoundingSphere(), f.frustumCulled = false, A.frustumCulled = false, r.add(A), p.position.set(0.5 * a, 0.5 * a, 0), p.rotateX(Math.PI / 2), p.geometry.rotateX(Math.PI / 2), p.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), V.derive(() => {
    t.gridTarget && (xe(e, { position: new E(...t.gridTarget.val.position), quaternion: new Ht().setFromEuler(new At(...t.gridTarget.val.rotation)) }, m), p.position.set(...t.gridTarget.val.position), p.quaternion.setFromEuler(new At(...t.gridTarget.val.rotation)), p.updateMatrixWorld());
  }), V.derive(() => {
    f.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), f.geometry.computeBoundingSphere();
  }), V.derive(() => {
    const P = 0.05 * a * 0.5 * c.val;
    A.material.size = P, y.params.Points.threshold = 0.4 * P;
  }), V.derive(() => {
    var _a;
    const P = t.points.val ?? [], v = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], M = [];
    for (const s of v) {
      const [i, h, u] = P[s];
      M.push(i, h, u);
    }
    const d = new L();
    d.setAttribute("position", new K(M, 3)), w.geometry.dispose(), w.geometry = d;
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
    R = 0, b.x = P.clientX / window.innerWidth * 2 - 1, b.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(b, o);
    const C = y.intersectObject(p);
    if (C.length) {
      let v = C[0].point;
      (P.ctrlKey || P.metaKey) && (v = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), t.points.val = [...t.points.rawVal, v.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), l.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), l.addEventListener("pointermove", (P) => {
    b.x = P.clientX / window.innerWidth * 2 - 1, b.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(b, o);
    const C = y.intersectObject(p);
    if (A.geometry.deleteAttribute("position"), C.length) {
      let v = C[0].point;
      (P.ctrlKey || P.metaKey) && (v = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), A.geometry.setAttribute("position", new K(v.toArray(), 3));
    }
    m();
  }), l.addEventListener("pointermove", (P) => {
    var _a;
    b.x = P.clientX / window.innerWidth * 2 - 1, b.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(b, o);
    let C = false;
    const v = y.intersectObject(f), M = y.intersectObject(p);
    if (v.length && M.length) {
      const d = new E(...t.points.rawVal[v[0].index]), s = new E(...M[0].point), i = d.sub(s), h = (_a = M[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(p.matrixWorld), Math.abs(i.dot(h)) < 1e-4 && (C = true);
    }
    A.visible = !C;
  });
  let X = false, k;
  l.addEventListener("pointermove", (P) => {
    var _a;
    if (!R) return;
    b.x = P.clientX / window.innerWidth * 2 - 1, b.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(b, o);
    let C = false;
    const v = y.intersectObject(f), M = y.intersectObject(p);
    if (v.length && M.length) {
      const s = new E(...t.points.rawVal[v[0].index]), i = new E(...M[0].point), h = s.sub(i), u = (_a = M[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(p.matrixWorld), Math.abs(h.dot(u)) < 1e-4 && (C = true);
    }
    if (C && R < 5 && (X = true, n.enabled = false, k = v[0].index), !X || R % 2 !== 0) return;
    const d = [...t.points.rawVal];
    if (k !== void 0) {
      let s = M[0].point;
      (P.ctrlKey || P.metaKey) && (s = new E(Math.round(s.x), Math.round(s.y), Math.round(s.z))), d[k] = s.toArray();
    }
    t.points.val = d;
  }), l.addEventListener("pointerup", () => {
    n.enabled = true, X = false;
  }), l.addEventListener("contextmenu", (P) => {
    var _a;
    b.x = P.clientX / window.innerWidth * 2 - 1, b.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(b, o);
    let C = false;
    const v = y.intersectObject(f), M = y.intersectObject(p);
    if (v.length && M.length) {
      const i = new E(...t.points.rawVal[v[0].index]), h = new E(...M[0].point), u = i.sub(h), x = (_a = M[0].face) == null ? void 0 : _a.normal;
      x.transformDirection(p.matrixWorld), Math.abs(u.dot(x)) < 1e-4 && (C = true);
    }
    if (!C) return;
    const d = [...t.points.rawVal];
    if (d.splice(v[0].index, 1), t.points.val = d, !t.polylines) return;
    const s = t.polylines.rawVal.map((i) => i.filter((h) => h !== v[0].index)).map((i) => i.map((h) => h > v[0].index ? h - 1 : h)).filter((i) => i.length);
    s.push([]), t.polylines.val = s;
  });
}
function xe(t, e, r) {
  const a = Math.round(14.999999999999998), c = { position: t.position.clone(), quaternion: t.quaternion.clone() }, l = setInterval(y, 1e3 / 30);
  let m = 0;
  function y() {
    m++;
    const b = m / a;
    t.position.lerpVectors(c.position, e.position, b), t.quaternion.slerpQuaternions(c.quaternion, e.quaternion, b), r && r(), m == a && clearInterval(l);
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
    for (let c = 1; c < r; c++) {
      const l = c * o;
      for (let m = 0; m < this.map.length - 1; m++) if (l > this.map[m][0] && l <= this.map[m + 1][0]) {
        const y = this.map[m][0], b = this.map[m + 1][0];
        n.setHex(this.map[m][1], rt), a.setHex(this.map[m + 1][1], rt);
        const p = new $().lerpColors(n, a, (l - y) / (b - y));
        this.lut.push(p);
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
    const c = 1 / this.n, l = new $(), m = new $(), y = new $();
    for (let b = 1; b >= 0; b -= c) for (let p = this.map.length - 1; p >= 0; p--) if (b < this.map[p][0] && b >= this.map[p - 1][0]) {
      const f = this.map[p - 1][0], A = this.map[p][0];
      l.setHex(this.map[p - 1][1], rt), m.setHex(this.map[p][1], rt), y.lerpColors(l, m, (b - f) / (A - f)), n[a * 4] = Math.round(y.r * 255), n[a * 4 + 1] = Math.round(y.g * 255), n[a * 4 + 2] = Math.round(y.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(o, 0, 0), e;
  }
}
const yt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function Me(t, e, r) {
  const o = new Bt(), n = new $(), a = new D(new L(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, V.derive(() => {
    a.geometry.setAttribute("position", new K(t.val.flat(), 3));
    const c = [];
    for (const p of e.val) p.length === 3 ? c.push(p[0], p[1], p[2]) : p.length === 4 && (c.push(p[0], p[1], p[2]), c.push(p[0], p[2], p[3]));
    a.geometry.setIndex(new Nt(c, 1)), a.geometry.setAttribute("color", new K(t.val.map(() => [0, 0, 0]).flat(), 3));
    const l = r.val.filter((p) => Number.isFinite(p));
    let m, y;
    const b = Vt.val;
    if (b ? (y = b[0], m = b[1]) : (m = l.length ? Math.max(...l) : 1, y = l.length ? Math.min(...l) : 0, y >= 0 && m > 0 && (y = 0)), m === y) {
      const p = Math.max(Math.abs(m) * 1e-6, 1e-9);
      m += p, y -= p;
    }
    o.setMax(m), o.setMin(y);
    for (let p = 0; p < r.val.length; p++) {
      const f = r.val[p];
      if (!Number.isFinite(f)) {
        a.geometry.attributes.color.setXYZ(p, 0.3, 0.3, 0.3);
        continue;
      }
      const A = o.getColor(f) ?? new $(0, 0, 0);
      n.copy(A).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(p, n.r, n.g, n.b);
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
  const c = new $(), l = V.state([]);
  return V.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const m = r.val, y = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], b = Fe(e.frameResults.val);
    if (n.children.forEach((x) => {
      x.geometry && x.geometry.dispose(), x.material && x.material.dispose();
    }), n.clear(), !b || y.length === 0 || m.length === 0) {
      l.val = [];
      return;
    }
    const p = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, f = (_c = t.deformOutputs) == null ? void 0 : _c.val, A = [], w = [];
    for (let x = 0; x < y.length; x++) {
      if (y[x].length !== 2) continue;
      const S = Ce(b, x, p, f);
      S && (A.push(S[0], S[1]), w.push({ idx: x, vals: S }));
    }
    if (A.length === 0) {
      l.val = [];
      return;
    }
    const T = Math.min(...A), R = Math.max(...A);
    a.setMin(T), a.setMax(R), l.val = A;
    const X = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of m) for (let F = 0; F < 3; F++) X[F] = Math.min(X[F], x[F]), k[F] = Math.max(k[F], x[F]);
    const C = Math.max(k[0] - X[0], k[1] - X[1], k[2] - X[2], 1) * ge, v = [], M = [], d = [];
    let s = 0;
    for (const { idx: x, vals: F } of w) {
      const S = y[x], I = m[S[0]], g = m[S[1]];
      if (!I || !g) continue;
      const z = new E(g[0] - I[0], g[1] - I[1], g[2] - I[2]), B = z.length();
      if (B < 1e-10) continue;
      z.normalize();
      const Z = Math.abs(z.y) < 0.99 ? new E(0, 1, 0) : new E(1, 0, 0), Y = new E().crossVectors(z, Z).normalize(), W = new E().crossVectors(z, Y).normalize(), H = bt + 1, _ = be;
      for (let q = 0; q < H; q++) {
        const J = q / bt, st = I[0] + z.x * B * J, it = I[1] + z.y * B * J, mt = I[2] + z.z * B * J, ft = F[0] + (F[1] - F[0]) * J, at = a.getColor(ft) ?? new $(0, 0, 0);
        c.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const St = wt / _ * Math.PI * 2, vt = Math.cos(St), xt = Math.sin(St);
          v.push(st + (Y.x * vt + W.x * xt) * C, it + (Y.y * vt + W.y * xt) * C, mt + (Y.z * vt + W.z * xt) * C), M.push(c.r, c.g, c.b);
        }
      }
      for (let q = 0; q < bt; q++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = s + q * _ + J, mt = s + q * _ + st, ft = s + (q + 1) * _ + J, at = s + (q + 1) * _ + st;
        d.push(it, mt, at), d.push(it, at, ft);
      }
      s += H * _;
    }
    if (v.length === 0) return;
    const i = new L();
    i.setAttribute("position", new K(v, 3)), i.setAttribute("color", new K(M, 3)), i.setIndex(d), i.computeVertexNormals();
    const h = new Q({ vertexColors: true, side: O }), u = new D(i, h);
    u.frustumCulled = false, n.add(u);
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
  const c = [];
  return r.querySelectorAll("p").forEach((l) => c.push(l)), setTimeout(() => {
    V.derive(() => {
      o.forEach((l, m) => {
        const y = c[m];
        y && (y.innerText = Se(t.val, l).toString());
      });
    });
  }), r;
}
function Se(t, e) {
  const r = Vt.val;
  if (r) return (r[0] + e * (r[1] - r[0])).toPrecision(3);
  const o = t.filter((c) => Number.isFinite(c));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const a = Math.max(...o);
  return n >= 0 && a > 0 && (n = 0), (n + e * (a - n)).toPrecision(3);
}
function Ie({ mesh: t, settingsObj: e, drawingObj: r, objects3D: o, solids: n }) {
  Qt.DEFAULT_UP = new E(0, 0, 1);
  const a = document.createElement("div"), c = new $t(), l = new Gt(45, 1, 0.1, 2 * 1e6), m = new qt(-10, 10, 10, -10, -1e3, 2e6);
  let y = l;
  const b = new Kt({ antialias: true });
  b.localClippingEnabled = true;
  const p = new Ut(l, b.domElement), f = jt(e), A = V.derive(() => f.displayScale.val === 0 ? 1 : f.displayScale.val > 0 ? f.displayScale.val : -1 / f.displayScale.val), w = Ae(t, f);
  let T = Pt(f.gridSize.rawVal);
  a.appendChild(Ot(f, t, n)), a.setAttribute("id", "viewer"), a.appendChild(b.domElement), b.setPixelRatio(window.devicePixelRatio);
  const R = j();
  b.setClearColor(R.background, 1);
  const X = f.gridSize.rawVal, k = X * 0.5 + X * 0.5 / Math.tan(45 * 0.5);
  l.position.set(0.5 * X, 0.8 * -k, 0.5 * X), p.target.set(0.5 * X, 0.5 * X, 0), p.minDistance = 1, p.maxDistance = k * 2.5, p.zoomSpeed = 10, p.update(), c.add(T, le(f.gridSize.rawVal, f.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const s of d) {
      const i = (_a = s.target) == null ? void 0 : _a.clientWidth, h = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || h === 0) continue;
      l.aspect = i / h, l.updateProjectionMatrix();
      const u = i / h, x = m.top;
      m.left = -x * u, m.right = x * u, m.updateProjectionMatrix(), b.setSize(i, h), C();
    }
  }).observe(a), p.addEventListener("change", C), V.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, f.displayScale.val, f.nodes.val, f.elements.val, f.elemColumns.val, f.elemBeams.val, f.nodesIndexes.val, f.elementsIndexes.val, f.orientations.val, f.sections.val, f.secColumns.val, f.secBeams.val, f.secFloor.val, f.supports.val, f.loads.val, f.deformedShape.val, f.nodeResults.val, f.frameResults.val, f.shellResults.val, setTimeout(C);
  });
  function C() {
    b.render(c, y);
  }
  function v(d) {
    y = d, p.object = d, p.update(), C();
  }
  if (t) {
    c.add(te(f, w, A), ee(t, f, w), ie(f, w, A), ae(t, f, w, A), oe(t, f, w, A), se(t, f, w, A), de(t, f, w, A), he(t, f, w, A), we(t, f, w, A), pe(t, f, w, A));
    const d = ze(t, f), s = ye(t, f, w, d), i = Yt(d);
    c.add(s), a.appendChild(i);
    const h = Ve(t, f, w);
    c.add(h);
    const u = h.__colorMapValues, x = Yt(u);
    x.id = "frame-legend", a.appendChild(x), V.derive(() => {
      const F = f.shellResults.val != "none", S = f.frameResults.val.startsWith("contour:");
      i.hidden = !F, s.visible = F, x.hidden = !S;
    });
  }
  if (n) {
    const d = new Dt(16777215, 0.5);
    c.add(d);
    const s = new zt(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, c.add(s);
    const i = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = i, s.shadow.camera.top = i, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const h = new zt(16777215, 0.5);
    h.color.setHSL(11, 43, 96), h.position.set(-10, 0, 30), c.add(h), V.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), C());
    }), V.derive(() => {
      n.rawVal.forEach((u) => u.visible = f.solids.val), C();
    });
  }
  o && V.derive(() => {
    (o == null ? void 0 : o.val.length) && (c.remove(...o.oldVal), c.add(...o.rawVal), C());
  }), r && ve({ drawingObj: r, gridObj: T, scene: c, camera: l, controls: p, gridSize: X, derivedDisplayScale: A, rendererElm: b.domElement, viewerRender: C }), pt((d, s) => {
    b.setClearColor(s.background, 1), c.remove(T), T.geometry.dispose(), T.material.dispose(), T = Pt(f.gridSize.rawVal), c.add(T), a.style.setProperty("--awatif-legend-color", s.legendMarker), C();
  });
  const M = { scene: c, perspCamera: l, orthoCamera: m, get camera() {
    return y;
  }, controls: p, renderer: b, rendererElm: b.domElement, render: C, setActiveCamera: v, settings: f };
  return a.__ctx = M, a;
}
function Ae(t, e) {
  return V.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || r.length === 0) return r;
    let n = 1 / 0, a = 1 / 0, c = 1 / 0, l = -1 / 0, m = -1 / 0, y = -1 / 0;
    for (const w of r) w[0] < n && (n = w[0]), w[0] > l && (l = w[0]), w[1] < a && (a = w[1]), w[1] > m && (m = w[1]), w[2] < c && (c = w[2]), w[2] > y && (y = w[2]);
    const b = Math.sqrt((l - n) ** 2 + (m - a) ** 2 + (y - c) ** 2);
    let p = 0;
    o.forEach((w) => {
      const T = Math.sqrt(w[0] ** 2 + w[1] ** 2 + w[2] ** 2);
      T > p && (p = T);
    });
    const A = p > 1e-30 && b > 1e-30 ? 0.07 * b / p : 1;
    return r.map((w, T) => {
      var _a2;
      const R = ((_a2 = o.get(T)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return w.map((X, k) => X + R[k] * A);
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
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), w = (k, P) => {
      k == null ? void 0 : k.forEach((C, v) => {
        const M = t.elements.val[v];
        if (M) for (let d = 0; d < M.length; d++) P.set(M[d], [C[d] ?? C[0]]);
      });
    };
    w((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), w((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), w((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, c), w((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, l), w((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, m), w((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, y), w((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, b), w((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, p), w((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, f), w((_t2 = (_s = t.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, A);
    const T = (_v = (_u = t.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRange;
    Vt.val = Array.isArray(T) && T.length === 2 ? [T[0], T[1]] : null;
    const R = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [c, 0], membraneXX: [l, 0], membraneYY: [m, 0], membraneXY: [y, 0], tranverseShearX: [b, 0], tranverseShearY: [p, 0], vonMises: [f, 0], pressure: [A, 0], displacementX: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = t.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = t.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, X = [];
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
