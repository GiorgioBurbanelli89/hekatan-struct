import { H as ct, B as k, I as dt, F as K, G as U, h as Yt, a as et, j as Q, D as O, e as D, C as $, l as Bt, i as Rt, V as X, A as tt, z as G, J as Mt, d as It, L as nt, c as N, r as ut, K as ht, R as Lt, f as kt, N as Zt, U as Wt, X as St, Y as rt, Z as Ht, _ as _t, t as Nt, u as $t, v as Gt, W as qt, w as Kt, x as Ut, y as At, O as Dt } from "./Text-CBH-tcJP.js";
import { v as V, P as Qt, g as j, o as pt } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function Jt(t, e, r) {
  const o = document.createElement("div"), n = new Qt({ title: "Settings", expanded: true, container: o });
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
function Ot(t) {
  return { gridSize: V.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: V.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: V.state((t == null ? void 0 : t.nodes) ?? true), elements: V.state((t == null ? void 0 : t.elements) ?? true), elemColumns: V.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: V.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: V.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: V.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: V.state((t == null ? void 0 : t.orientations) ?? false), sections: V.state((t == null ? void 0 : t.sections) ?? true), secColumns: V.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: V.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: V.state((t == null ? void 0 : t.secFloor) ?? -1), supports: V.state((t == null ? void 0 : t.supports) ?? true), loads: V.state((t == null ? void 0 : t.loads) ?? false), deformedShape: V.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: V.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: V.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: V.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: V.state((t == null ? void 0 : t.flipAxes) ?? false), solids: V.state((t == null ? void 0 : t.solids) ?? true) };
}
function jt(t, e, r) {
  const o = j(), n = new ct(new k(), new dt({ color: o.nodePoint }));
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
function te(t, e, r) {
  const o = j(), n = new U(), a = new Yt(new k(), new et({ color: o.elementLine }));
  pt((f, A) => {
    a.material.color.setHex(A.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), l = new D(new k(), c);
  l.frustumCulled = false, n.add(l);
  let m = new $(o.shellWall), b = new $(o.shellSlab), p = new $(o.shellTri);
  pt((f, A) => {
    m = new $(A.shellWall), b = new $(A.shellSlab), p = new $(A.shellTri), c.opacity = A.shellOpacity, c.needsUpdate = true;
  });
  function g(f, A) {
    const w = Math.abs(A[0] - f[0]), Y = Math.abs(A[1] - f[1]), E = Math.abs(A[2] - f[2]);
    return E > w && E > Y || Y > w && Y > E;
  }
  return V.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const f = e.elemColumns.rawVal, A = e.elemBeams.rawVal, w = r.val, Y = ((_a = t.elements) == null ? void 0 : _a.val) || [], E = Y.filter((C) => {
      if (C.length !== 2) return true;
      const x = w[C[0]], M = w[C[1]];
      if (!x || !M) return true;
      const d = g(x, M);
      return !(d && !f || !d && !A);
    }).map((C) => ee(C).map((x) => [...w[x[0]], ...w[x[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new K(E, 3));
    const B = [], L = [];
    function z(C, x, M, d) {
      const s = [x[0] - C[0], x[1] - C[1], x[2] - C[2]], i = [d[0] - C[0], d[1] - C[1], d[2] - C[2]], h = s[1] * i[2] - s[2] * i[1], u = s[2] * i[0] - s[0] * i[2], v = s[0] * i[1] - s[1] * i[0], F = Math.sqrt(h * h + u * u + v * v);
      return F < 1e-12 ? false : Math.abs(v / F) < 0.5;
    }
    for (const C of Y) if (C.length === 3) {
      const [x, M, d] = C;
      if (w[x] && w[M] && w[d]) {
        B.push(...w[x], ...w[M], ...w[d]);
        for (let s = 0; s < 3; s++) L.push(p.r, p.g, p.b);
      }
    } else if (C.length === 4) {
      const [x, M, d, s] = C;
      if (w[x] && w[M] && w[d] && w[s]) {
        const i = z(w[x], w[M], w[d], w[s]) ? m : b;
        B.push(...w[x], ...w[M], ...w[d]), B.push(...w[x], ...w[d], ...w[s]);
        for (let h = 0; h < 6; h++) L.push(i.r, i.g, i.b);
      }
    }
    B.length > 0 ? (l.geometry.dispose(), l.geometry = new k(), l.geometry.setAttribute("position", new K(B, 3)), l.geometry.setAttribute("color", new K(L, 3)), l.geometry.computeVertexNormals(), l.visible = true) : l.visible = false;
  }), V.derive(() => {
    n.visible = e.elements.val;
  }), n;
}
function ee(t) {
  if (t.length === 2) return [t];
  const e = [];
  for (let r = 0; r < t.length; r++) e.push([t[r], t[(r + 1) % t.length]]);
  return e;
}
function zt(t) {
  const e = j(), r = new Bt(t, 20, e.grid, e.grid);
  return r.position.set(0.5 * t, 0.5 * t, 0), r.rotateX(Math.PI / 2), r;
}
function ne(t, e, r, o) {
  const n = new U(), a = new Rt(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((m, b) => {
      const p = r.val[b];
      if (!p) return;
      const g = new D(a, c);
      g.position.set(...p);
      const f = l * o.rawVal;
      g.scale.set(f, f, f), n.add(g);
    });
  }), V.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const m = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((b) => b.scale.set(m, m, m));
  }), V.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function oe(t, e, r, o) {
  const n = new U();
  n.name = "loadsGroup";
  function a(c) {
    if (c.length < 2) return 0.12 * e.gridSize.rawVal;
    const l = [1 / 0, 1 / 0, 1 / 0], m = [-1 / 0, -1 / 0, -1 / 0];
    for (const p of c) for (let g = 0; g < 3; g++) l[g] = Math.min(l[g], p[g]), m[g] = Math.max(m[g], p[g]);
    return 0.08 * Math.max(m[0] - l[0], m[1] - l[1], m[2] - l[2], 0.1);
  }
  return V.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((m) => m.dispose()), n.clear();
    const c = r.val, l = a(c);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((m, b) => {
      const p = c[b];
      if (!p) return;
      const g = new X(...m.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const f = new tt(g, new X(...p), 1, 15637248, 0.3, 0.3), A = l * o.rawVal;
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
function se(t, e, r) {
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
function ie(t, e, r, o) {
  const n = new U();
  return V.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const a = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((c, l) => {
      const m = new G(`${l}`, void 0, "#001219");
      m.position.set(...ae(c.map((b) => r.rawVal[b]))), m.updateScale(a * o.rawVal), n.add(m);
    });
  }), V.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const a = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(a * o.rawVal));
  }), V.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function ae(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function re(t, e) {
  const r = new U(), o = 0.05 * t * 1, n = j(), a = new G("X", "red", "transparent"), c = new G(e ? "Z" : "Y", "green", "transparent"), l = new G(e ? "Y" : "Z", "blue", "transparent"), m = new tt(new X(1, 0, 0), new X(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), b = new tt(new X(0, 1, 0), new X(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), p = new tt(new X(0, 0, 1), new X(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), l.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), c.updateScale(0.4 * o), l.updateScale(0.4 * o), m.scale.set(o, o, o), b.scale.set(o, o, o), p.scale.set(o, o, o), r.add(m, b, p, a, c, l), r;
}
function Ft(t, e) {
  const r = new X(...t), n = new X(...e).clone().sub(r), a = n.length(), c = n.dot(new X(1, 0, 0)) / a, l = n.dot(new X(0, 1, 0)) / a, m = n.dot(new X(0, 0, 1)) / a, b = Math.sqrt(c ** 2 + l ** 2);
  let p = new Mt().fromArray([[c, l, m], [-l / b, c / b, 0], [-c * m / b, -l * m / b, b]].flat());
  return m === 1 && (p = new Mt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), m === -1 && (p = new Mt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new It().setFromMatrix3(p);
}
function gt(t, e) {
  return t == null ? void 0 : t.map((r, o) => (9 * r + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function le(t, e, r) {
  const o = ot([e, r]), n = ot([t, r]), a = ot([t, e]), c = new X(...o).sub(new X(...n)).normalize(), l = new X(...r).sub(new X(...a)).normalize(), m = c.clone().cross(l).normalize(), b = m.clone().cross(c).normalize();
  return new It().makeBasis(c, b, m);
}
function ce(t, e, r, o) {
  const n = new U(), a = new k(), c = new et({ vertexColors: true }), l = [0, 0, 0], m = [1, 0, 0], b = [0, 1, 0], p = [0, 0, 1];
  a.setAttribute("position", new K([...l, ...m, ...l, ...b, ...l, ...p], 3));
  const g = [255, 0, 0], f = [0, 255, 0], A = [0, 0, 255];
  return a.setAttribute("color", new K([...g, ...g, ...f, ...f, ...A, ...A], 3)), V.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((w) => {
      const Y = new Yt(a, c), E = r.rawVal[w[0]], B = r.rawVal[w[1]];
      if (w.length === 2 && (Y.position.set(...gt(E, B)), Y.rotation.setFromRotationMatrix(Ft(E, B))), w.length === 3) {
        const C = r.rawVal[w[2]];
        Y.position.set(...ot([E, B, C])), Y.rotation.setFromRotationMatrix(le(E, B, C));
      }
      const z = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      Y.scale.set(z, z, z), n.add(Y);
    }));
  }), V.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const Y = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((E) => E.scale.set(Y, Y, Y));
  }), V.derive(() => {
    n.visible = e.orientations.val;
  }), n;
}
function de(t) {
  if (t.name) return t.name;
  if (t.type === "rect") {
    const e = (t.b * 100).toFixed(0), r = (t.h * 100).toFixed(0);
    return `${e}x${r}`;
  }
  return t.type === "circ" ? `D${(t.d * 100).toFixed(0)}` : "";
}
function ue(t, e, r, o) {
  const n = new U();
  function a(x, M) {
    const d = x / 2, s = M / 2, i = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, -s, 0, d, s, 0, -d, s]), h = new k();
    h.setAttribute("position", new N(i, 3));
    const u = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, s, 0, -d, -s]), v = new k();
    return v.setAttribute("position", new N(u, 3)), { fill: h, outline: v };
  }
  function c(x, M = 24) {
    const d = x / 2, s = new Float32Array(M * 9);
    for (let v = 0; v < M; v++) {
      const F = v / M * Math.PI * 2, S = (v + 1) / M * Math.PI * 2;
      s[v * 9] = 0, s[v * 9 + 1] = 0, s[v * 9 + 2] = 0, s[v * 9 + 3] = 0, s[v * 9 + 4] = d * Math.cos(F), s[v * 9 + 5] = d * Math.sin(F), s[v * 9 + 6] = 0, s[v * 9 + 7] = d * Math.cos(S), s[v * 9 + 8] = d * Math.sin(S);
    }
    const i = new k();
    i.setAttribute("position", new N(s, 3));
    const h = new Float32Array((M + 1) * 3);
    for (let v = 0; v <= M; v++) {
      const F = v / M * Math.PI * 2;
      h[v * 3] = 0, h[v * 3 + 1] = d * Math.cos(F), h[v * 3 + 2] = d * Math.sin(F);
    }
    const u = new k();
    return u.setAttribute("position", new N(h, 3)), { fill: i, outline: u };
  }
  function l(x, M, d, s) {
    const i = d ?? M * 0.08, h = s ?? x * 0.07, u = x / 2, v = M / 2, F = v - i, S = h / 2, I = [];
    function y(T, W, H, _) {
      I.push(0, T, W, 0, H, W, 0, H, _, 0, T, W, 0, H, _, 0, T, _);
    }
    y(-u, -v, u, -F), y(-S, -F, S, F), y(-u, F, u, v);
    const P = new k();
    P.setAttribute("position", new N(new Float32Array(I), 3));
    const R = new Float32Array([0, -u, -v, 0, u, -v, 0, u, -F, 0, S, -F, 0, S, F, 0, u, F, 0, u, v, 0, -u, v, 0, -u, F, 0, -S, F, 0, -S, -F, 0, -u, -F, 0, -u, -v]), Z = new k();
    return Z.setAttribute("position", new N(R, 3)), { fill: P, outline: Z };
  }
  function m(x, M, d) {
    const s = x / 2, i = M / 2, h = s - d, u = i - d, v = [];
    function F(P, R, Z, T) {
      v.push(0, P, R, 0, Z, R, 0, Z, T, 0, P, R, 0, Z, T, 0, P, T);
    }
    F(-s, -i, s, -u), F(-s, u, s, i), F(-s, -u, -h, u), F(h, -u, s, u);
    const S = new k();
    S.setAttribute("position", new N(new Float32Array(v), 3));
    const I = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -h, -u, 0, h, -u, 0, h, -u, 0, h, u, 0, h, u, 0, -h, u, 0, -h, u, 0, -h, -u]), y = new k();
    return y.setAttribute("position", new N(I, 3)), { fill: S, outline: y };
  }
  function b(x, M, d) {
    const s = x / 2, i = M / 2, h = s - d, u = i - d, v = new k(), F = new Float32Array([0, -h, -u, 0, h, -u, 0, h, u, 0, -h, -u, 0, h, u, 0, -h, u]);
    v.setAttribute("position", new N(F, 3));
    const S = [];
    function I(Z, T, W, H) {
      S.push(0, Z, T, 0, W, T, 0, W, H, 0, Z, T, 0, W, H, 0, Z, H);
    }
    I(-s, -i, s, -u), I(-s, u, s, i), I(-s, -u, -h, u), I(h, -u, s, u);
    const y = new k();
    y.setAttribute("position", new N(new Float32Array(S), 3));
    const P = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -h, -u, 0, h, -u, 0, h, -u, 0, h, u, 0, h, u, 0, -h, u, 0, -h, u, 0, -h, -u]), R = new k();
    return R.setAttribute("position", new N(P, 3)), { concFill: v, steelFillGeom: y, outline: R };
  }
  function p(x, M, d) {
    const s = [], i = [[0, -x / 2, -M / 2], [0, -x / 2 + d, -M / 2], [0, -x / 2 + d, M / 2 - d], [0, x / 2, M / 2 - d], [0, x / 2, M / 2], [0, -x / 2, M / 2]], h = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const S of h) s.push(...i[S]);
    const u = new k();
    u.setAttribute("position", new N(new Float32Array(s), 3));
    const v = [];
    for (let S = 0; S < i.length; S++) {
      const I = (S + 1) % i.length;
      v.push(...i[S], ...i[I]);
    }
    const F = new k();
    return F.setAttribute("position", new N(new Float32Array(v), 3)), { fill: u, outline: F };
  }
  function g(x, M, d, s) {
    const i = s / 2, h = [], u = [[0, -x - i, -M / 2], [0, -d - i, -M / 2], [0, -d - i, M / 2 - d], [0, -i, M / 2 - d], [0, -i, M / 2], [0, -x - i, M / 2]], v = [[0, i, -M / 2], [0, i + d, -M / 2], [0, i + d, M / 2 - d], [0, x + i, M / 2 - d], [0, x + i, M / 2], [0, i, M / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const P of F) h.push(...u[P]);
    for (const P of F) h.push(...v[P]);
    const S = new k();
    S.setAttribute("position", new N(new Float32Array(h), 3));
    const I = [];
    for (const P of [u, v]) for (let R = 0; R < P.length; R++) {
      const Z = (R + 1) % P.length;
      I.push(...P[R], ...P[Z]);
    }
    const y = new k();
    return y.setAttribute("position", new N(new Float32Array(I), 3)), { fill: S, outline: y };
  }
  function f(x, M, d, s) {
    const i = M / 2, h = x, u = [[0, -h, -i], [0, -h, -i + d], [0, -s, -i + d], [0, -s, i - d], [0, -h, i - d], [0, -h, i], [0, 0, i], [0, 0, -i]], v = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
    for (const P of v) F.push(...u[P]);
    const S = new k();
    S.setAttribute("position", new N(new Float32Array(F), 3));
    const I = [];
    for (let P = 0; P < u.length; P++) {
      const R = (P + 1) % u.length;
      I.push(...u[P], ...u[R]);
    }
    const y = new k();
    return y.setAttribute("position", new N(new Float32Array(I), 3)), { fill: S, outline: y };
  }
  function A(x, M, d, s, i) {
    const h = M / 2, u = i / 2, v = [], F = [[0, -x, -h], [0, -x, -h + d], [0, -u - s, -h + d], [0, -u - s, h - d], [0, -x, h - d], [0, -x, h], [0, -u, h], [0, -u, -h]], S = F.map((Z) => [Z[0], -Z[1], Z[2]]), I = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of I) v.push(...F[Z]);
    for (const Z of I) v.push(...S[Z]);
    const y = new k();
    y.setAttribute("position", new N(new Float32Array(v), 3));
    const P = [];
    for (const Z of [F, S]) for (let T = 0; T < Z.length; T++) {
      const W = (T + 1) % Z.length;
      P.push(...Z[T], ...Z[W]);
    }
    const R = new k();
    return R.setAttribute("position", new N(new Float32Array(P), 3)), { fill: y, outline: R };
  }
  function w(x, M, d, s) {
    const i = x / 2, h = M / 2, u = s / 2, v = [[0, -u, -h], [0, u, -h], [0, u, h - d], [0, i, h - d], [0, i, h], [0, -i, h], [0, -i, h - d], [0, -u, h - d]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], S = [];
    for (const R of F) S.push(...v[R]);
    const I = new k();
    I.setAttribute("position", new N(new Float32Array(S), 3));
    const y = [];
    for (let R = 0; R < v.length; R++) {
      const Z = (R + 1) % v.length;
      y.push(...v[R], ...v[Z]);
    }
    const P = new k();
    return P.setAttribute("position", new N(new Float32Array(y), 3)), { fill: I, outline: P };
  }
  function Y(x, M, d = 24) {
    const s = x / 2, i = s - M, h = [];
    for (let S = 0; S < d; S++) {
      const I = S / d * Math.PI * 2, y = (S + 1) / d * Math.PI * 2, P = Math.cos(I), R = Math.sin(I), Z = Math.cos(y), T = Math.sin(y);
      h.push(0, s * P, s * R, 0, s * Z, s * T, 0, i * Z, i * T), h.push(0, s * P, s * R, 0, i * Z, i * T, 0, i * P, i * R);
    }
    const u = new k();
    u.setAttribute("position", new N(new Float32Array(h), 3));
    const v = [];
    for (let S = 0; S < d; S++) {
      const I = S / d * Math.PI * 2, y = (S + 1) / d * Math.PI * 2;
      v.push(0, s * Math.cos(I), s * Math.sin(I), 0, s * Math.cos(y), s * Math.sin(y)), v.push(0, i * Math.cos(I), i * Math.sin(I), 0, i * Math.cos(y), i * Math.sin(y));
    }
    const F = new k();
    return F.setAttribute("position", new N(new Float32Array(v), 3)), { fill: u, outline: F };
  }
  const E = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), B = new et({ color: 52479 }), L = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), z = new et({ color: 16750848 });
  function C(x, M) {
    const d = Math.abs(M[0] - x[0]), s = Math.abs(M[1] - x[1]), i = Math.abs(M[2] - x[2]);
    return i > d && i > s || s > d && s > i;
  }
  return V.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const x = e.secColumns.rawVal, M = e.secBeams.rawVal;
    if (!x && !M) {
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
    d.forEach((u, v) => {
      if (u.length !== 2) return;
      const F = r.rawVal[u[0]], S = r.rawVal[u[1]];
      if (!F || !S) return;
      const I = C(F, S);
      if (I && !x || !I && !M) return;
      if (h >= 0) {
        const T = Math.min(F[1], S[1]);
        Math.max(F[1], S[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(T / W + 0.01) !== h) return;
      }
      const y = i == null ? void 0 : i.get(v);
      if (!y) return;
      const P = [(F[0] + S[0]) / 2, (F[1] + S[1]) / 2, (F[2] + S[2]) / 2], R = Ft(F, S);
      if (y.type === "CFT") {
        const T = b(y.b, y.h, y.tw ?? y.b * 0.05), W = new D(T.concFill, E);
        W.position.set(...P), W.rotation.setFromRotationMatrix(R), n.add(W);
        const H = new D(T.steelFillGeom, L);
        H.position.set(...P), H.rotation.setFromRotationMatrix(R), n.add(H);
        const _ = new nt(T.outline, z);
        _.position.set(...P), _.rotation.setFromRotationMatrix(R), n.add(_);
      } else {
        let T, W, H;
        switch (y.type) {
          case "rect":
            T = a(y.b, y.h), W = E, H = B;
            break;
          case "circ":
            T = c(y.d), W = E, H = B;
            break;
          case "I":
            T = l(y.b, y.h, y.tf, y.tw), W = L, H = z;
            break;
          case "HSS":
            T = m(y.b, y.h, y.tw ?? y.b * 0.05), W = L, H = z;
            break;
          case "CFT":
            T = b(y.b, y.h, y.tw ?? y.b * 0.05), W = L, H = z;
            break;
          case "L":
            T = p(y.b ?? y.h, y.h, y.t ?? y.tw ?? 3e-3), W = L, H = z;
            break;
          case "2L":
            T = g(y.b ?? y.h, y.h, y.t ?? y.tw ?? 3e-3, y.dis ?? 0.01), W = L, H = z;
            break;
          case "C":
          case "coldC":
            T = f(y.b, y.h, y.tf ?? y.t ?? 3e-3, y.tw ?? y.t ?? 3e-3), W = L, H = z;
            break;
          case "2C":
            T = A(y.b, y.h, y.tf ?? 5e-3, y.tw ?? 5e-3, y.dis ?? 0.01), W = L, H = z;
            break;
          case "T":
            T = w(y.b, y.h, y.tf ?? 0.01, y.tw ?? 6e-3), W = L, H = z;
            break;
          case "pipe":
            T = Y(y.d, y.tw ?? y.d * 0.05), W = L, H = z;
            break;
          default:
            return;
        }
        const _ = new D(T.fill, W);
        _.position.set(...P), _.rotation.setFromRotationMatrix(R), n.add(_);
        const q = new nt(T.outline, H);
        q.position.set(...P), q.rotation.setFromRotationMatrix(R), n.add(q);
      }
      const Z = de(y);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(y.type) ? "#ff9900" : "#00ccff", H = new G(Z, W, "transparent");
        H.position.set(P[0], P[1], P[2]);
        const _ = 0.05 * e.gridSize.rawVal * 0.5;
        H.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(H);
      }
    });
  }), o && V.derive(() => {
    if (o.val, !e.sections.rawVal) return;
    const x = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((M) => {
      M instanceof G && M.updateScale(x * o.rawVal);
    });
  }), V.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends U {
  constructor(e, r, o, n, a, c, l) {
    super();
    const m = new ut().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), b = m.getPoints(), p = new k().setFromPoints(b);
    this.lines = new nt(p, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new ht(m), f = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(g, f), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new G(`${a[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = ot([e, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Pt extends U {
  constructor(e, r, o, n, a, c, l) {
    super();
    const m = a[0] * o / (a[0] + a[1]), b = a[0] * a[1] > 0;
    if (this.text = new G(`${a[0].toFixed(4)}`), this.text2 = new G(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = gt(e, r), this.text2Position = gt(r, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), b) {
      const p = new ut().moveTo(0, 0).lineTo(0, c[0]).lineTo(m, 0).lineTo(0, 0), g = new ut().moveTo(m, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(m, 0), f = p.getPoints(), A = g.getPoints(), w = new k().setFromPoints(f), Y = new k().setFromPoints(A), E = new et({ color: j().resultOutline });
      this.lines = new nt(w, E), this.lines2 = new nt(Y, E), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), l && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const B = new ht(p), L = new ht(g), z = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), C = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(B, z), this.mesh2 = new D(L, C), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), l && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const p = new ut().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), g = p.getPoints(), f = new k().setFromPoints(g);
      this.lines = new nt(f, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const A = new ht(p), w = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
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
var Xt = ((t) => (t.normals = "normals", t.shearsY = "shearsY", t.shearsZ = "shearsZ", t.torsions = "torsions", t.bendingsY = "bendingsY", t.bendingsZ = "bendingsZ", t))(Xt || {});
function he(t, e, r, o) {
  const n = new U(), a = { normals: lt, shearsY: lt, shearsZ: lt, torsions: lt, bendingsY: Pt, bendingsZ: Pt };
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, r.val, e.frameResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const c = Xt[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((l, m) => {
      var _a2, _b2;
      const b = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[m]) ?? [0, 1], p = r.rawVal[b[0]], g = r.rawVal[b[1]], f = new X(...g).distanceTo(new X(...p)), A = pe((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), w = l == null ? void 0 : l.map((L) => L / (A === 0 ? 1 : A)), Y = Ft(p, g), E = new a[c](p, g, f, Y, l ?? [0, 0], w ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), B = 0.05 * e.gridSize.rawVal;
      E.updateScale(B * o.rawVal), n.add(E);
    });
  }), V.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const c = 0.05 * e.gridSize.val;
    n.children.forEach((l) => l.updateScale(c * o.rawVal));
  }), V.derive(() => {
    n.visible = e.frameResults.val != "none";
  }), n;
}
function pe(t) {
  let e = 0;
  return t == null ? void 0 : t.forEach((r) => {
    const o = Math.max(...r ?? [0, 0]);
    o > e && (e = o);
  }), e;
}
class me extends U {
  constructor(e, r, o) {
    super();
    const n = r === Vt.reactions;
    o[0] && (this.xText1 = new G(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new G(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new G(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new G(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new G(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new G(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new tt(new X(1, 0, 0), new X(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new tt(new X(0, 1, 0), new X(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new tt(new X(0, 0, 1), new X(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...e), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var Vt = ((t) => (t.deformations = "deformations", t.reactions = "reactions", t))(Vt || {});
function fe(t, e, r, o) {
  const n = new U();
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const a = Vt[e.nodeResults.rawVal], c = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((l, m) => {
      const b = new me(r.rawVal[m], a, l ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(c * o.rawVal), n.add(b);
    });
  }), V.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const a = 0.05 * e.gridSize.val;
    n.children.forEach((c) => c.updateScale(a * o.rawVal));
  }), V.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function we({ drawingObj: t, gridObj: e, scene: r, camera: o, controls: n, gridSize: a, derivedDisplayScale: c, rendererElm: l, viewerRender: m }) {
  const b = new Lt(), p = new kt(), g = new D(new Zt(a, a), new Q({ side: O })), f = new ct(new k(), new dt()), A = new ct(new k(), new dt({ color: "gray" })), w = new ct(new k(), new dt({ color: "orange", size: 0.8 }));
  r.add(w), f.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), f.geometry.computeBoundingSphere(), f.frustumCulled = false, A.frustumCulled = false, r.add(A), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), V.derive(() => {
    t.gridTarget && (ve(e, { position: new X(...t.gridTarget.val.position), quaternion: new Wt().setFromEuler(new St(...t.gridTarget.val.rotation)) }, m), g.position.set(...t.gridTarget.val.position), g.quaternion.setFromEuler(new St(...t.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), V.derive(() => {
    f.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), f.geometry.computeBoundingSphere();
  }), V.derive(() => {
    const z = 0.05 * a * 0.5 * c.val;
    A.material.size = z, b.params.Points.threshold = 0.4 * z;
  }), V.derive(() => {
    var _a;
    const z = t.points.val ?? [], x = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], M = [];
    for (const s of x) {
      const [i, h, u] = z[s];
      M.push(i, h, u);
    }
    const d = new k();
    d.setAttribute("position", new K(M, 3)), w.geometry.dispose(), w.geometry = d;
  });
  let Y = false, E = 0;
  l.addEventListener("pointerdown", () => {
    Y = true;
  }), l.addEventListener("pointerup", () => {
    Y = false;
  }), l.addEventListener("pointermove", () => {
    Y && E++;
  }), l.addEventListener("click", (z) => {
    if (E > 5) {
      E = 0;
      return;
    }
    E = 0, p.x = z.clientX / window.innerWidth * 2 - 1, p.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(p, o);
    const C = b.intersectObject(g);
    if (C.length) {
      let x = C[0].point;
      (z.ctrlKey || z.metaKey) && (x = new X(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), t.points.val = [...t.points.rawVal, x.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), l.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), l.addEventListener("pointermove", (z) => {
    p.x = z.clientX / window.innerWidth * 2 - 1, p.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(p, o);
    const C = b.intersectObject(g);
    if (A.geometry.deleteAttribute("position"), C.length) {
      let x = C[0].point;
      (z.ctrlKey || z.metaKey) && (x = new X(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), A.geometry.setAttribute("position", new K(x.toArray(), 3));
    }
    m();
  }), l.addEventListener("pointermove", (z) => {
    var _a;
    p.x = z.clientX / window.innerWidth * 2 - 1, p.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(p, o);
    let C = false;
    const x = b.intersectObject(f), M = b.intersectObject(g);
    if (x.length && M.length) {
      const d = new X(...t.points.rawVal[x[0].index]), s = new X(...M[0].point), i = d.sub(s), h = (_a = M[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(g.matrixWorld), Math.abs(i.dot(h)) < 1e-4 && (C = true);
    }
    A.visible = !C;
  });
  let B = false, L;
  l.addEventListener("pointermove", (z) => {
    var _a;
    if (!E) return;
    p.x = z.clientX / window.innerWidth * 2 - 1, p.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(p, o);
    let C = false;
    const x = b.intersectObject(f), M = b.intersectObject(g);
    if (x.length && M.length) {
      const s = new X(...t.points.rawVal[x[0].index]), i = new X(...M[0].point), h = s.sub(i), u = (_a = M[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(g.matrixWorld), Math.abs(h.dot(u)) < 1e-4 && (C = true);
    }
    if (C && E < 5 && (B = true, n.enabled = false, L = x[0].index), !B || E % 2 !== 0) return;
    const d = [...t.points.rawVal];
    if (L !== void 0) {
      let s = M[0].point;
      (z.ctrlKey || z.metaKey) && (s = new X(Math.round(s.x), Math.round(s.y), Math.round(s.z))), d[L] = s.toArray();
    }
    t.points.val = d;
  }), l.addEventListener("pointerup", () => {
    n.enabled = true, B = false;
  }), l.addEventListener("contextmenu", (z) => {
    var _a;
    p.x = z.clientX / window.innerWidth * 2 - 1, p.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(p, o);
    let C = false;
    const x = b.intersectObject(f), M = b.intersectObject(g);
    if (x.length && M.length) {
      const i = new X(...t.points.rawVal[x[0].index]), h = new X(...M[0].point), u = i.sub(h), v = (_a = M[0].face) == null ? void 0 : _a.normal;
      v.transformDirection(g.matrixWorld), Math.abs(u.dot(v)) < 1e-4 && (C = true);
    }
    if (!C) return;
    const d = [...t.points.rawVal];
    if (d.splice(x[0].index, 1), t.points.val = d, !t.polylines) return;
    const s = t.polylines.rawVal.map((i) => i.filter((h) => h !== x[0].index)).map((i) => i.map((h) => h > x[0].index ? h - 1 : h)).filter((i) => i.length);
    s.push([]), t.polylines.val = s;
  });
}
function ve(t, e, r) {
  const a = Math.round(14.999999999999998), c = { position: t.position.clone(), quaternion: t.quaternion.clone() }, l = setInterval(b, 1e3 / 30);
  let m = 0;
  function b() {
    m++;
    const p = m / a;
    t.position.lerpVectors(c.position, e.position, p), t.quaternion.slerpQuaternions(c.quaternion, e.quaternion, p), r && r(), m == a && clearInterval(l);
  }
}
class Et {
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
        const b = this.map[m][0], p = this.map[m + 1][0];
        n.setHex(this.map[m][1], rt), a.setHex(this.map[m + 1][1], rt);
        const g = new $().lerpColors(n, a, (l - b) / (p - b));
        this.lut.push(g);
      }
    }
    return this.lut.push(new $(this.map[this.map.length - 1][1])), this;
  }
  copy(e) {
    return this.lut = e.lut, this.map = e.map, this.n = e.n, this.minV = e.minV, this.maxV = e.maxV, this;
  }
  getColor(e) {
    e = Ht.clamp(e, this.minV, this.maxV), e = (e - this.minV) / (this.maxV - this.minV);
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
    const c = 1 / this.n, l = new $(), m = new $(), b = new $();
    for (let p = 1; p >= 0; p -= c) for (let g = this.map.length - 1; g >= 0; g--) if (p < this.map[g][0] && p >= this.map[g - 1][0]) {
      const f = this.map[g - 1][0], A = this.map[g][0];
      l.setHex(this.map[g - 1][1], rt), m.setHex(this.map[g][1], rt), b.lerpColors(l, m, (p - f) / (A - f)), n[a * 4] = Math.round(b.r * 255), n[a * 4 + 1] = Math.round(b.g * 255), n[a * 4 + 2] = Math.round(b.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(o, 0, 0), e;
  }
}
const yt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function xe(t, e, r) {
  const o = new Et(), n = new $(), a = new D(new k(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, V.derive(() => {
    a.geometry.setAttribute("position", new K(t.val.flat(), 3));
    const c = [];
    for (const p of e.val) p.length === 3 ? c.push(p[0], p[1], p[2]) : p.length === 4 && (c.push(p[0], p[1], p[2]), c.push(p[0], p[2], p[3]));
    a.geometry.setIndex(new _t(c, 1)), a.geometry.setAttribute("color", new K(t.val.map(() => [0, 0, 0]).flat(), 3));
    const l = r.val.filter((p) => Number.isFinite(p));
    let m = l.length ? Math.max(...l) : 1, b = l.length ? Math.min(...l) : 0;
    if (b >= 0 && m > 0 && (b = 0), m === b) {
      const p = Math.max(Math.abs(m) * 1e-6, 1e-9);
      m += p, b -= p;
    }
    o.setMax(m), o.setMin(b);
    for (let p = 0; p < r.val.length; p++) {
      const g = r.val[p];
      if (!Number.isFinite(g)) {
        a.geometry.attributes.color.setXYZ(p, 0.3, 0.3, 0.3);
        continue;
      }
      const f = o.getColor(g) ?? new $(0, 0, 0);
      n.copy(f).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(p, n.r, n.g, n.b);
    }
  }), a;
}
function Me(t, e, r, o) {
  const n = xe(r, t.elements, o);
  return V.derive(() => {
    n.visible = e.shellResults.val != "none";
  }), n;
}
const ye = 6, bt = 10, be = 0.012;
function ge(t) {
  return t.startsWith("contour:") ? t.slice(8) : null;
}
function Fe(t, e, r, o) {
  if (!r && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(t) && r) {
    const a = r[t];
    if (a && a.has(e)) return a.get(e);
  }
  return null;
}
function Ve(t, e, r, o) {
  const n = new U(), a = new Et();
  a.setColorMap("rainbow");
  const c = new $(), l = V.state([]);
  return V.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const m = r.val, b = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], p = ge(e.frameResults.val);
    if (n.children.forEach((v) => {
      v.geometry && v.geometry.dispose(), v.material && v.material.dispose();
    }), n.clear(), !p || b.length === 0 || m.length === 0) {
      l.val = [];
      return;
    }
    const g = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, f = (_c = t.deformOutputs) == null ? void 0 : _c.val, A = [], w = [];
    for (let v = 0; v < b.length; v++) {
      if (b[v].length !== 2) continue;
      const S = Fe(p, v, g, f);
      S && (A.push(S[0], S[1]), w.push({ idx: v, vals: S }));
    }
    if (A.length === 0) {
      l.val = [];
      return;
    }
    const Y = Math.min(...A), E = Math.max(...A);
    a.setMin(Y), a.setMax(E), l.val = A;
    const B = [1 / 0, 1 / 0, 1 / 0], L = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of m) for (let F = 0; F < 3; F++) B[F] = Math.min(B[F], v[F]), L[F] = Math.max(L[F], v[F]);
    const C = Math.max(L[0] - B[0], L[1] - B[1], L[2] - B[2], 1) * be, x = [], M = [], d = [];
    let s = 0;
    for (const { idx: v, vals: F } of w) {
      const S = b[v], I = m[S[0]], y = m[S[1]];
      if (!I || !y) continue;
      const P = new X(y[0] - I[0], y[1] - I[1], y[2] - I[2]), R = P.length();
      if (R < 1e-10) continue;
      P.normalize();
      const Z = Math.abs(P.y) < 0.99 ? new X(0, 1, 0) : new X(1, 0, 0), T = new X().crossVectors(P, Z).normalize(), W = new X().crossVectors(P, T).normalize(), H = bt + 1, _ = ye;
      for (let q = 0; q < H; q++) {
        const J = q / bt, st = I[0] + P.x * R * J, it = I[1] + P.y * R * J, mt = I[2] + P.z * R * J, ft = F[0] + (F[1] - F[0]) * J, at = a.getColor(ft) ?? new $(0, 0, 0);
        c.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const Ct = wt / _ * Math.PI * 2, vt = Math.cos(Ct), xt = Math.sin(Ct);
          x.push(st + (T.x * vt + W.x * xt) * C, it + (T.y * vt + W.y * xt) * C, mt + (T.z * vt + W.z * xt) * C), M.push(c.r, c.g, c.b);
        }
      }
      for (let q = 0; q < bt; q++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = s + q * _ + J, mt = s + q * _ + st, ft = s + (q + 1) * _ + J, at = s + (q + 1) * _ + st;
        d.push(it, mt, at), d.push(it, at, ft);
      }
      s += H * _;
    }
    if (x.length === 0) return;
    const i = new k();
    i.setAttribute("position", new K(x, 3)), i.setAttribute("color", new K(M, 3)), i.setIndex(d), i.computeVertexNormals();
    const h = new Q({ vertexColors: true, side: O }), u = new D(i, h);
    u.frustumCulled = false, n.add(u);
  }), n.__colorMapValues = l, n;
}
function Tt(t, e = 8) {
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
        const b = c[m];
        b && (b.innerText = Ce(t.val, l).toString());
      });
    });
  }), r;
}
function Ce(t, e) {
  const r = t.filter((a) => Number.isFinite(a));
  if (r.length === 0) return "0";
  let o = Math.min(...r);
  const n = Math.max(...r);
  return o >= 0 && n > 0 && (o = 0), (o + e * (n - o)).toPrecision(3);
}
function Ye({ mesh: t, settingsObj: e, drawingObj: r, objects3D: o, solids: n }) {
  Dt.DEFAULT_UP = new X(0, 0, 1);
  const a = document.createElement("div"), c = new Nt(), l = new $t(45, 1, 0.1, 2 * 1e6), m = new Gt(-10, 10, 10, -10, -1e3, 2e6);
  let b = l;
  const p = new qt({ antialias: true });
  p.localClippingEnabled = true;
  const g = new Kt(l, p.domElement), f = Ot(e), A = V.derive(() => f.displayScale.val === 0 ? 1 : f.displayScale.val > 0 ? f.displayScale.val : -1 / f.displayScale.val), w = Se(t, f);
  let Y = zt(f.gridSize.rawVal);
  a.appendChild(Jt(f, t, n)), a.setAttribute("id", "viewer"), a.appendChild(p.domElement), p.setPixelRatio(window.devicePixelRatio);
  const E = j();
  p.setClearColor(E.background, 1);
  const B = f.gridSize.rawVal, L = B * 0.5 + B * 0.5 / Math.tan(45 * 0.5);
  l.position.set(0.5 * B, 0.8 * -L, 0.5 * B), g.target.set(0.5 * B, 0.5 * B, 0), g.minDistance = 1, g.maxDistance = L * 2.5, g.zoomSpeed = 10, g.update(), c.add(Y, re(f.gridSize.rawVal, f.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const s of d) {
      const i = (_a = s.target) == null ? void 0 : _a.clientWidth, h = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || h === 0) continue;
      l.aspect = i / h, l.updateProjectionMatrix();
      const u = i / h, v = m.top;
      m.left = -v * u, m.right = v * u, m.updateProjectionMatrix(), p.setSize(i, h), C();
    }
  }).observe(a), g.addEventListener("change", C), V.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, f.displayScale.val, f.nodes.val, f.elements.val, f.elemColumns.val, f.elemBeams.val, f.nodesIndexes.val, f.elementsIndexes.val, f.orientations.val, f.sections.val, f.secColumns.val, f.secBeams.val, f.secFloor.val, f.supports.val, f.loads.val, f.deformedShape.val, f.nodeResults.val, f.frameResults.val, f.shellResults.val, setTimeout(C);
  });
  function C() {
    p.render(c, b);
  }
  function x(d) {
    b = d, g.object = d, g.update(), C();
  }
  if (t) {
    c.add(jt(f, w, A), te(t, f, w), se(f, w, A), ie(t, f, w, A), ne(t, f, w, A), oe(t, f, w, A), ce(t, f, w, A), ue(t, f, w, A), fe(t, f, w, A), he(t, f, w, A));
    const d = Ae(t, f), s = Me(t, f, w, d), i = Tt(d);
    c.add(s), a.appendChild(i);
    const h = Ve(t, f, w);
    c.add(h);
    const u = h.__colorMapValues, v = Tt(u);
    v.id = "frame-legend", a.appendChild(v), V.derive(() => {
      const F = f.shellResults.val != "none", S = f.frameResults.val.startsWith("contour:");
      i.hidden = !F, s.visible = F, v.hidden = !S;
    });
  }
  if (n) {
    const d = new Ut(16777215, 0.5);
    c.add(d);
    const s = new At(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, c.add(s);
    const i = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = i, s.shadow.camera.top = i, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const h = new At(16777215, 0.5);
    h.color.setHSL(11, 43, 96), h.position.set(-10, 0, 30), c.add(h), V.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), C());
    }), V.derive(() => {
      n.rawVal.forEach((u) => u.visible = f.solids.val), C();
    });
  }
  o && V.derive(() => {
    (o == null ? void 0 : o.val.length) && (c.remove(...o.oldVal), c.add(...o.rawVal), C());
  }), r && we({ drawingObj: r, gridObj: Y, scene: c, camera: l, controls: g, gridSize: B, derivedDisplayScale: A, rendererElm: p.domElement, viewerRender: C }), pt((d, s) => {
    p.setClearColor(s.background, 1), c.remove(Y), Y.geometry.dispose(), Y.material.dispose(), Y = zt(f.gridSize.rawVal), c.add(Y), a.style.setProperty("--awatif-legend-color", s.legendMarker), C();
  });
  const M = { scene: c, perspCamera: l, orthoCamera: m, get camera() {
    return b;
  }, controls: g, renderer: p, rendererElm: p.domElement, render: C, setActiveCamera: x, settings: f };
  return a.__ctx = M, a;
}
function Se(t, e) {
  return V.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || r.length === 0) return r;
    let n = 1 / 0, a = 1 / 0, c = 1 / 0, l = -1 / 0, m = -1 / 0, b = -1 / 0;
    for (const w of r) w[0] < n && (n = w[0]), w[0] > l && (l = w[0]), w[1] < a && (a = w[1]), w[1] > m && (m = w[1]), w[2] < c && (c = w[2]), w[2] > b && (b = w[2]);
    const p = Math.sqrt((l - n) ** 2 + (m - a) ** 2 + (b - c) ** 2);
    let g = 0;
    o.forEach((w) => {
      const Y = Math.sqrt(w[0] ** 2 + w[1] ** 2 + w[2] ** 2);
      Y > g && (g = Y);
    });
    const A = g > 1e-30 && p > 1e-30 ? 0.07 * p / g : 1;
    return r.map((w, Y) => {
      var _a2;
      const E = ((_a2 = o.get(Y)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return w.map((B, L) => B + E[L] * A);
    });
  });
}
function Ae(t, e) {
  const r = V.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), V.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), w = (B, L) => {
      B == null ? void 0 : B.forEach((z, C) => {
        const x = t.elements.val[C];
        if (x) for (let M = 0; M < x.length; M++) L.set(x[M], [z[M] ?? z[0]]);
      });
    };
    w((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), w((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), w((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, c), w((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, l), w((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, m), w((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), w((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, p), w((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), w((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, f), w((_t2 = (_s = t.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, A);
    const Y = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [c, 0], membraneXX: [l, 0], membraneYY: [m, 0], membraneXY: [b, 0], tranverseShearX: [p, 0], tranverseShearY: [g, 0], vonMises: [f, 0], pressure: [A, 0], displacementX: [(_v = (_u = t.deformOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.deformations, 0], displacementY: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 1], displacementZ: [(_z = (_y = t.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 2] }, E = [];
    t.nodes.val.forEach((B, L) => {
      const z = Y[e.shellResults.val];
      if (!z || !z[0] || typeof z[0].has != "function") return;
      if (!z[0].has(L)) {
        E.push(Number.NaN);
        return;
      }
      const C = z[0].get(L);
      E.push(C ? C[z[1]] ?? 0 : 0);
    }), r.val = E;
  }), r;
}
export {
  xe as a,
  Tt as b,
  Ye as g
};
