import { H as ct, B as L, I as dt, F as K, G as U, h as It, a as et, j as Q, D as O, e as D, C as $, l as Rt, i as Lt, V as E, A as tt, z as G, J as Mt, d as Xt, L as nt, c as N, r as ut, K as ht, R as kt, f as Zt, N as Wt, U as Ht, X as St, Y as rt, Z as _t, _ as Nt, t as $t, u as Gt, v as qt, W as Kt, w as Ut, x as Dt, y as zt, O as Qt } from "./Text-CBH-tcJP.js";
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
  pt((f, S) => {
    a.material.color.setHex(S.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const d = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), l = new D(new L(), d);
  l.frustumCulled = false, n.add(l);
  let m = new $(o.shellWall), M = new $(o.shellSlab), x = new $(o.shellTri);
  pt((f, S) => {
    m = new $(S.shellWall), M = new $(S.shellSlab), x = new $(S.shellTri), d.opacity = S.shellOpacity, d.needsUpdate = true;
  });
  function g(f, S) {
    const c = Math.abs(S[0] - f[0]), P = Math.abs(S[1] - f[1]), B = Math.abs(S[2] - f[2]);
    return B > c && B > P || P > c && P > B;
  }
  return V.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const f = e.elemColumns.rawVal, S = e.elemBeams.rawVal, c = r.val, P = ((_a = t.elements) == null ? void 0 : _a.val) || [], B = P.filter((C) => {
      if (C.length !== 2) return true;
      const w = c[C[0]], y = c[C[1]];
      if (!w || !y) return true;
      const u = g(w, y);
      return !(u && !f || !u && !S);
    }).map((C) => ne(C).map((w) => [...c[w[0]], ...c[w[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new K(B, 3));
    const I = [], k = [];
    function T(C, w, y, u) {
      const s = [w[0] - C[0], w[1] - C[1], w[2] - C[2]], i = [u[0] - C[0], u[1] - C[1], u[2] - C[2]], p = s[1] * i[2] - s[2] * i[1], h = s[2] * i[0] - s[0] * i[2], v = s[0] * i[1] - s[1] * i[0], F = Math.sqrt(p * p + h * h + v * v);
      return F < 1e-12 ? false : Math.abs(v / F) < 0.5;
    }
    for (const C of P) if (C.length === 3) {
      const [w, y, u] = C;
      if (c[w] && c[y] && c[u]) {
        I.push(...c[w], ...c[y], ...c[u]);
        for (let s = 0; s < 3; s++) k.push(x.r, x.g, x.b);
      }
    } else if (C.length === 4) {
      const [w, y, u, s] = C;
      if (c[w] && c[y] && c[u] && c[s]) {
        const i = T(c[w], c[y], c[u], c[s]) ? m : M;
        I.push(...c[w], ...c[y], ...c[u]), I.push(...c[w], ...c[u], ...c[s]);
        for (let p = 0; p < 6; p++) k.push(i.r, i.g, i.b);
      }
    }
    I.length > 0 ? (l.geometry.dispose(), l.geometry = new L(), l.geometry.setAttribute("position", new K(I, 3)), l.geometry.setAttribute("color", new K(k, 3)), l.geometry.computeVertexNormals(), l.visible = true) : l.visible = false;
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
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((m, M) => {
      const x = r.val[M];
      if (!x) return;
      const g = new D(a, d);
      g.position.set(...x);
      const f = l * o.rawVal;
      g.scale.set(f, f, f), n.add(g);
    });
  }), V.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const m = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((M) => M.scale.set(m, m, m));
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
    for (const x of d) for (let g = 0; g < 3; g++) l[g] = Math.min(l[g], x[g]), m[g] = Math.max(m[g], x[g]);
    return 0.08 * Math.max(m[0] - l[0], m[1] - l[1], m[2] - l[2], 0.1);
  }
  return V.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((m) => m.dispose()), n.clear();
    const d = r.val, l = a(d);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((m, M) => {
      const x = d[M];
      if (!x) return;
      const g = new E(...m.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const f = new tt(g, new E(...x), 1, 15637248, 0.3, 0.3), S = l * o.rawVal;
      f.scale.set(S, S, S), n.add(f);
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
      m.position.set(...re(d.map((M) => r.rawVal[M]))), m.updateScale(a * o.rawVal), n.add(m);
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
  const r = new U(), o = 0.05 * t * 1, n = j(), a = new G("X", "red", "transparent"), d = new G(e ? "Z" : "Y", "green", "transparent"), l = new G(e ? "Y" : "Z", "blue", "transparent"), m = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), M = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), x = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), d.position.set(0, 1.3 * o, 0), l.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), d.updateScale(0.4 * o), l.updateScale(0.4 * o), m.scale.set(o, o, o), M.scale.set(o, o, o), x.scale.set(o, o, o), r.add(m, M, x, a, d, l), r;
}
function Ft(t, e) {
  const r = new E(...t), n = new E(...e).clone().sub(r), a = n.length(), d = n.dot(new E(1, 0, 0)) / a, l = n.dot(new E(0, 1, 0)) / a, m = n.dot(new E(0, 0, 1)) / a, M = Math.sqrt(d ** 2 + l ** 2);
  let x = new Mt().fromArray([[d, l, m], [-l / M, d / M, 0], [-d * m / M, -l * m / M, M]].flat());
  return m === 1 && (x = new Mt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), m === -1 && (x = new Mt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Xt().setFromMatrix3(x);
}
function gt(t, e) {
  return t == null ? void 0 : t.map((r, o) => (9 * r + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function ce(t, e, r) {
  const o = ot([e, r]), n = ot([t, r]), a = ot([t, e]), d = new E(...o).sub(new E(...n)).normalize(), l = new E(...r).sub(new E(...a)).normalize(), m = d.clone().cross(l).normalize(), M = m.clone().cross(d).normalize();
  return new Xt().makeBasis(d, M, m);
}
function de(t, e, r, o) {
  const n = new U(), a = new L(), d = new et({ vertexColors: true }), l = [0, 0, 0], m = [1, 0, 0], M = [0, 1, 0], x = [0, 0, 1];
  a.setAttribute("position", new K([...l, ...m, ...l, ...M, ...l, ...x], 3));
  const g = [255, 0, 0], f = [0, 255, 0], S = [0, 0, 255];
  return a.setAttribute("color", new K([...g, ...g, ...f, ...f, ...S, ...S], 3)), V.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((c) => {
      const P = new It(a, d), B = r.rawVal[c[0]], I = r.rawVal[c[1]];
      if (c.length === 2 && (P.position.set(...gt(B, I)), P.rotation.setFromRotationMatrix(Ft(B, I))), c.length === 3) {
        const C = r.rawVal[c[2]];
        P.position.set(...ot([B, I, C])), P.rotation.setFromRotationMatrix(ce(B, I, C));
      }
      const T = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      P.scale.set(T, T, T), n.add(P);
    }));
  }), V.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const P = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((B) => B.scale.set(P, P, P));
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
  function a(w, y) {
    const u = w / 2, s = y / 2, i = new Float32Array([0, -u, -s, 0, u, -s, 0, u, s, 0, -u, -s, 0, u, s, 0, -u, s]), p = new L();
    p.setAttribute("position", new N(i, 3));
    const h = new Float32Array([0, -u, -s, 0, u, -s, 0, u, s, 0, -u, s, 0, -u, -s]), v = new L();
    return v.setAttribute("position", new N(h, 3)), { fill: p, outline: v };
  }
  function d(w, y = 24) {
    const u = w / 2, s = new Float32Array(y * 9);
    for (let v = 0; v < y; v++) {
      const F = v / y * Math.PI * 2, A = (v + 1) / y * Math.PI * 2;
      s[v * 9] = 0, s[v * 9 + 1] = 0, s[v * 9 + 2] = 0, s[v * 9 + 3] = 0, s[v * 9 + 4] = u * Math.cos(F), s[v * 9 + 5] = u * Math.sin(F), s[v * 9 + 6] = 0, s[v * 9 + 7] = u * Math.cos(A), s[v * 9 + 8] = u * Math.sin(A);
    }
    const i = new L();
    i.setAttribute("position", new N(s, 3));
    const p = new Float32Array((y + 1) * 3);
    for (let v = 0; v <= y; v++) {
      const F = v / y * Math.PI * 2;
      p[v * 3] = 0, p[v * 3 + 1] = u * Math.cos(F), p[v * 3 + 2] = u * Math.sin(F);
    }
    const h = new L();
    return h.setAttribute("position", new N(p, 3)), { fill: i, outline: h };
  }
  function l(w, y, u, s) {
    const i = u ?? y * 0.08, p = s ?? w * 0.07, h = w / 2, v = y / 2, F = v - i, A = p / 2, X = [];
    function b(Y, W, H, _) {
      X.push(0, Y, W, 0, H, W, 0, H, _, 0, Y, W, 0, H, _, 0, Y, _);
    }
    b(-h, -v, h, -F), b(-A, -F, A, F), b(-h, F, h, v);
    const z = new L();
    z.setAttribute("position", new N(new Float32Array(X), 3));
    const R = new Float32Array([0, -h, -v, 0, h, -v, 0, h, -F, 0, A, -F, 0, A, F, 0, h, F, 0, h, v, 0, -h, v, 0, -h, F, 0, -A, F, 0, -A, -F, 0, -h, -F, 0, -h, -v]), Z = new L();
    return Z.setAttribute("position", new N(R, 3)), { fill: z, outline: Z };
  }
  function m(w, y, u) {
    const s = w / 2, i = y / 2, p = s - u, h = i - u, v = [];
    function F(z, R, Z, Y) {
      v.push(0, z, R, 0, Z, R, 0, Z, Y, 0, z, R, 0, Z, Y, 0, z, Y);
    }
    F(-s, -i, s, -h), F(-s, h, s, i), F(-s, -h, -p, h), F(p, -h, s, h);
    const A = new L();
    A.setAttribute("position", new N(new Float32Array(v), 3));
    const X = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -p, -h, 0, p, -h, 0, p, -h, 0, p, h, 0, p, h, 0, -p, h, 0, -p, h, 0, -p, -h]), b = new L();
    return b.setAttribute("position", new N(X, 3)), { fill: A, outline: b };
  }
  function M(w, y, u) {
    const s = w / 2, i = y / 2, p = s - u, h = i - u, v = new L(), F = new Float32Array([0, -p, -h, 0, p, -h, 0, p, h, 0, -p, -h, 0, p, h, 0, -p, h]);
    v.setAttribute("position", new N(F, 3));
    const A = [];
    function X(Z, Y, W, H) {
      A.push(0, Z, Y, 0, W, Y, 0, W, H, 0, Z, Y, 0, W, H, 0, Z, H);
    }
    X(-s, -i, s, -h), X(-s, h, s, i), X(-s, -h, -p, h), X(p, -h, s, h);
    const b = new L();
    b.setAttribute("position", new N(new Float32Array(A), 3));
    const z = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -p, -h, 0, p, -h, 0, p, -h, 0, p, h, 0, p, h, 0, -p, h, 0, -p, h, 0, -p, -h]), R = new L();
    return R.setAttribute("position", new N(z, 3)), { concFill: v, steelFillGeom: b, outline: R };
  }
  function x(w, y, u) {
    const s = [], i = [[0, -w / 2, -y / 2], [0, -w / 2 + u, -y / 2], [0, -w / 2 + u, y / 2 - u], [0, w / 2, y / 2 - u], [0, w / 2, y / 2], [0, -w / 2, y / 2]], p = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of p) s.push(...i[A]);
    const h = new L();
    h.setAttribute("position", new N(new Float32Array(s), 3));
    const v = [];
    for (let A = 0; A < i.length; A++) {
      const X = (A + 1) % i.length;
      v.push(...i[A], ...i[X]);
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(v), 3)), { fill: h, outline: F };
  }
  function g(w, y, u, s) {
    const i = s / 2, p = [], h = [[0, -w - i, -y / 2], [0, -u - i, -y / 2], [0, -u - i, y / 2 - u], [0, -i, y / 2 - u], [0, -i, y / 2], [0, -w - i, y / 2]], v = [[0, i, -y / 2], [0, i + u, -y / 2], [0, i + u, y / 2 - u], [0, w + i, y / 2 - u], [0, w + i, y / 2], [0, i, y / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const z of F) p.push(...h[z]);
    for (const z of F) p.push(...v[z]);
    const A = new L();
    A.setAttribute("position", new N(new Float32Array(p), 3));
    const X = [];
    for (const z of [h, v]) for (let R = 0; R < z.length; R++) {
      const Z = (R + 1) % z.length;
      X.push(...z[R], ...z[Z]);
    }
    const b = new L();
    return b.setAttribute("position", new N(new Float32Array(X), 3)), { fill: A, outline: b };
  }
  function f(w, y, u, s) {
    const i = y / 2, p = w, h = [[0, -p, -i], [0, -p, -i + u], [0, -s, -i + u], [0, -s, i - u], [0, -p, i - u], [0, -p, i], [0, 0, i], [0, 0, -i]], v = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
    for (const z of v) F.push(...h[z]);
    const A = new L();
    A.setAttribute("position", new N(new Float32Array(F), 3));
    const X = [];
    for (let z = 0; z < h.length; z++) {
      const R = (z + 1) % h.length;
      X.push(...h[z], ...h[R]);
    }
    const b = new L();
    return b.setAttribute("position", new N(new Float32Array(X), 3)), { fill: A, outline: b };
  }
  function S(w, y, u, s, i) {
    const p = y / 2, h = i / 2, v = [], F = [[0, -w, -p], [0, -w, -p + u], [0, -h - s, -p + u], [0, -h - s, p - u], [0, -w, p - u], [0, -w, p], [0, -h, p], [0, -h, -p]], A = F.map((Z) => [Z[0], -Z[1], Z[2]]), X = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of X) v.push(...F[Z]);
    for (const Z of X) v.push(...A[Z]);
    const b = new L();
    b.setAttribute("position", new N(new Float32Array(v), 3));
    const z = [];
    for (const Z of [F, A]) for (let Y = 0; Y < Z.length; Y++) {
      const W = (Y + 1) % Z.length;
      z.push(...Z[Y], ...Z[W]);
    }
    const R = new L();
    return R.setAttribute("position", new N(new Float32Array(z), 3)), { fill: b, outline: R };
  }
  function c(w, y, u, s) {
    const i = w / 2, p = y / 2, h = s / 2, v = [[0, -h, -p], [0, h, -p], [0, h, p - u], [0, i, p - u], [0, i, p], [0, -i, p], [0, -i, p - u], [0, -h, p - u]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], A = [];
    for (const R of F) A.push(...v[R]);
    const X = new L();
    X.setAttribute("position", new N(new Float32Array(A), 3));
    const b = [];
    for (let R = 0; R < v.length; R++) {
      const Z = (R + 1) % v.length;
      b.push(...v[R], ...v[Z]);
    }
    const z = new L();
    return z.setAttribute("position", new N(new Float32Array(b), 3)), { fill: X, outline: z };
  }
  function P(w, y, u = 24) {
    const s = w / 2, i = s - y, p = [];
    for (let A = 0; A < u; A++) {
      const X = A / u * Math.PI * 2, b = (A + 1) / u * Math.PI * 2, z = Math.cos(X), R = Math.sin(X), Z = Math.cos(b), Y = Math.sin(b);
      p.push(0, s * z, s * R, 0, s * Z, s * Y, 0, i * Z, i * Y), p.push(0, s * z, s * R, 0, i * Z, i * Y, 0, i * z, i * R);
    }
    const h = new L();
    h.setAttribute("position", new N(new Float32Array(p), 3));
    const v = [];
    for (let A = 0; A < u; A++) {
      const X = A / u * Math.PI * 2, b = (A + 1) / u * Math.PI * 2;
      v.push(0, s * Math.cos(X), s * Math.sin(X), 0, s * Math.cos(b), s * Math.sin(b)), v.push(0, i * Math.cos(X), i * Math.sin(X), 0, i * Math.cos(b), i * Math.sin(b));
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(v), 3)), { fill: h, outline: F };
  }
  const B = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), I = new et({ color: 52479 }), k = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), T = new et({ color: 16750848 });
  function C(w, y) {
    const u = Math.abs(y[0] - w[0]), s = Math.abs(y[1] - w[1]), i = Math.abs(y[2] - w[2]);
    return i > u && i > s || s > u && s > i;
  }
  return V.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const w = e.secColumns.rawVal, y = e.secBeams.rawVal;
    if (!w && !y) {
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
    u.forEach((h, v) => {
      if (h.length !== 2) return;
      const F = r.rawVal[h[0]], A = r.rawVal[h[1]];
      if (!F || !A) return;
      const X = C(F, A);
      if (X && !w || !X && !y) return;
      if (p >= 0) {
        const Y = Math.min(F[1], A[1]);
        Math.max(F[1], A[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(Y / W + 0.01) !== p) return;
      }
      const b = i == null ? void 0 : i.get(v);
      if (!b) return;
      const z = [(F[0] + A[0]) / 2, (F[1] + A[1]) / 2, (F[2] + A[2]) / 2], R = Ft(F, A);
      if (b.type === "CFT") {
        const Y = M(b.b, b.h, b.tw ?? b.b * 0.05), W = new D(Y.concFill, B);
        W.position.set(...z), W.rotation.setFromRotationMatrix(R), n.add(W);
        const H = new D(Y.steelFillGeom, k);
        H.position.set(...z), H.rotation.setFromRotationMatrix(R), n.add(H);
        const _ = new nt(Y.outline, T);
        _.position.set(...z), _.rotation.setFromRotationMatrix(R), n.add(_);
      } else {
        let Y, W, H;
        switch (b.type) {
          case "rect":
            Y = a(b.b, b.h), W = B, H = I;
            break;
          case "circ":
            Y = d(b.d), W = B, H = I;
            break;
          case "I":
            Y = l(b.b, b.h, b.tf, b.tw), W = k, H = T;
            break;
          case "HSS":
            Y = m(b.b, b.h, b.tw ?? b.b * 0.05), W = k, H = T;
            break;
          case "CFT":
            Y = M(b.b, b.h, b.tw ?? b.b * 0.05), W = k, H = T;
            break;
          case "L":
            Y = x(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3), W = k, H = T;
            break;
          case "2L":
            Y = g(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3, b.dis ?? 0.01), W = k, H = T;
            break;
          case "C":
          case "coldC":
            Y = f(b.b, b.h, b.tf ?? b.t ?? 3e-3, b.tw ?? b.t ?? 3e-3), W = k, H = T;
            break;
          case "2C":
            Y = S(b.b, b.h, b.tf ?? 5e-3, b.tw ?? 5e-3, b.dis ?? 0.01), W = k, H = T;
            break;
          case "T":
            Y = c(b.b, b.h, b.tf ?? 0.01, b.tw ?? 6e-3), W = k, H = T;
            break;
          case "pipe":
            Y = P(b.d, b.tw ?? b.d * 0.05), W = k, H = T;
            break;
          default:
            return;
        }
        const _ = new D(Y.fill, W);
        _.position.set(...z), _.rotation.setFromRotationMatrix(R), n.add(_);
        const q = new nt(Y.outline, H);
        q.position.set(...z), q.rotation.setFromRotationMatrix(R), n.add(q);
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
    const w = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((y) => {
      y instanceof G && y.updateScale(w * o.rawVal);
    });
  }), V.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends U {
  constructor(e, r, o, n, a, d, l) {
    super();
    const m = new ut().moveTo(0, 0).lineTo(0, d[1]).lineTo(o, d[1]).lineTo(o, 0).lineTo(0, 0), M = m.getPoints(), x = new L().setFromPoints(M);
    this.lines = new nt(x, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new ht(m), f = new Q({ color: d[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(g, f), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new G(`${a[1].toFixed(4)}`), this.normalizedResult = d, this.textPosition = ot([e, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
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
    const m = a[0] * o / (a[0] + a[1]), M = a[0] * a[1] > 0;
    if (this.text = new G(`${a[0].toFixed(4)}`), this.text2 = new G(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = d, this.textPosition = gt(e, r), this.text2Position = gt(r, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), M) {
      const x = new ut().moveTo(0, 0).lineTo(0, d[0]).lineTo(m, 0).lineTo(0, 0), g = new ut().moveTo(m, 0).lineTo(o, -d[1]).lineTo(o, 0).lineTo(m, 0), f = x.getPoints(), S = g.getPoints(), c = new L().setFromPoints(f), P = new L().setFromPoints(S), B = new et({ color: j().resultOutline });
      this.lines = new nt(c, B), this.lines2 = new nt(P, B), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), l && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const I = new ht(x), k = new ht(g), T = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: O }), C = new Q({ color: -d[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(I, T), this.mesh2 = new D(k, C), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), l && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const x = new ut().moveTo(0, 0).lineTo(0, d[0]).lineTo(o, -d[1]).lineTo(o, 0).lineTo(0, 0), g = x.getPoints(), f = new L().setFromPoints(g);
      this.lines = new nt(f, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const S = new ht(x), c = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(S, c), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
      const M = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[m]) ?? [0, 1], x = r.rawVal[M[0]], g = r.rawVal[M[1]], f = new E(...g).distanceTo(new E(...x)), S = me((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[d]), c = l == null ? void 0 : l.map((k) => k / (S === 0 ? 1 : S)), P = Ft(x, g), B = new a[d](x, g, f, P, l ?? [0, 0], c ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(d)), I = 0.05 * e.gridSize.rawVal;
      B.updateScale(I * o.rawVal), n.add(B);
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
      const M = new fe(r.rawVal[m], a, l ?? [0, 0, 0, 0, 0, 0]);
      M.updateScale(d * o.rawVal), n.add(M);
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
  const M = new kt(), x = new Zt(), g = new D(new Wt(a, a), new Q({ side: O })), f = new ct(new L(), new dt()), S = new ct(new L(), new dt({ color: "gray" })), c = new ct(new L(), new dt({ color: "orange", size: 0.8 }));
  r.add(c), f.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), f.geometry.computeBoundingSphere(), f.frustumCulled = false, S.frustumCulled = false, r.add(S), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), V.derive(() => {
    t.gridTarget && (xe(e, { position: new E(...t.gridTarget.val.position), quaternion: new Ht().setFromEuler(new St(...t.gridTarget.val.rotation)) }, m), g.position.set(...t.gridTarget.val.position), g.quaternion.setFromEuler(new St(...t.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), V.derive(() => {
    f.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), f.geometry.computeBoundingSphere();
  }), V.derive(() => {
    const T = 0.05 * a * 0.5 * d.val;
    S.material.size = T, M.params.Points.threshold = 0.4 * T;
  }), V.derive(() => {
    var _a;
    const T = t.points.val ?? [], w = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], y = [];
    for (const s of w) {
      const [i, p, h] = T[s];
      y.push(i, p, h);
    }
    const u = new L();
    u.setAttribute("position", new K(y, 3)), c.geometry.dispose(), c.geometry = u;
  });
  let P = false, B = 0;
  l.addEventListener("pointerdown", () => {
    P = true;
  }), l.addEventListener("pointerup", () => {
    P = false;
  }), l.addEventListener("pointermove", () => {
    P && B++;
  }), l.addEventListener("click", (T) => {
    if (B > 5) {
      B = 0;
      return;
    }
    B = 0, x.x = T.clientX / window.innerWidth * 2 - 1, x.y = -(T.clientY / window.innerHeight) * 2 + 1, M.setFromCamera(x, o);
    const C = M.intersectObject(g);
    if (C.length) {
      let w = C[0].point;
      (T.ctrlKey || T.metaKey) && (w = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), t.points.val = [...t.points.rawVal, w.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), l.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), l.addEventListener("pointermove", (T) => {
    x.x = T.clientX / window.innerWidth * 2 - 1, x.y = -(T.clientY / window.innerHeight) * 2 + 1, M.setFromCamera(x, o);
    const C = M.intersectObject(g);
    if (S.geometry.deleteAttribute("position"), C.length) {
      let w = C[0].point;
      (T.ctrlKey || T.metaKey) && (w = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), S.geometry.setAttribute("position", new K(w.toArray(), 3));
    }
    m();
  }), l.addEventListener("pointermove", (T) => {
    var _a;
    x.x = T.clientX / window.innerWidth * 2 - 1, x.y = -(T.clientY / window.innerHeight) * 2 + 1, M.setFromCamera(x, o);
    let C = false;
    const w = M.intersectObject(f), y = M.intersectObject(g);
    if (w.length && y.length) {
      const u = new E(...t.points.rawVal[w[0].index]), s = new E(...y[0].point), i = u.sub(s), p = (_a = y[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(g.matrixWorld), Math.abs(i.dot(p)) < 1e-4 && (C = true);
    }
    S.visible = !C;
  });
  let I = false, k;
  l.addEventListener("pointermove", (T) => {
    var _a;
    if (!B) return;
    x.x = T.clientX / window.innerWidth * 2 - 1, x.y = -(T.clientY / window.innerHeight) * 2 + 1, M.setFromCamera(x, o);
    let C = false;
    const w = M.intersectObject(f), y = M.intersectObject(g);
    if (w.length && y.length) {
      const s = new E(...t.points.rawVal[w[0].index]), i = new E(...y[0].point), p = s.sub(i), h = (_a = y[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(g.matrixWorld), Math.abs(p.dot(h)) < 1e-4 && (C = true);
    }
    if (C && B < 5 && (I = true, n.enabled = false, k = w[0].index), !I || B % 2 !== 0) return;
    const u = [...t.points.rawVal];
    if (k !== void 0) {
      let s = y[0].point;
      (T.ctrlKey || T.metaKey) && (s = new E(Math.round(s.x), Math.round(s.y), Math.round(s.z))), u[k] = s.toArray();
    }
    t.points.val = u;
  }), l.addEventListener("pointerup", () => {
    n.enabled = true, I = false;
  }), l.addEventListener("contextmenu", (T) => {
    var _a;
    x.x = T.clientX / window.innerWidth * 2 - 1, x.y = -(T.clientY / window.innerHeight) * 2 + 1, M.setFromCamera(x, o);
    let C = false;
    const w = M.intersectObject(f), y = M.intersectObject(g);
    if (w.length && y.length) {
      const i = new E(...t.points.rawVal[w[0].index]), p = new E(...y[0].point), h = i.sub(p), v = (_a = y[0].face) == null ? void 0 : _a.normal;
      v.transformDirection(g.matrixWorld), Math.abs(h.dot(v)) < 1e-4 && (C = true);
    }
    if (!C) return;
    const u = [...t.points.rawVal];
    if (u.splice(w[0].index, 1), t.points.val = u, !t.polylines) return;
    const s = t.polylines.rawVal.map((i) => i.filter((p) => p !== w[0].index)).map((i) => i.map((p) => p > w[0].index ? p - 1 : p)).filter((i) => i.length);
    s.push([]), t.polylines.val = s;
  });
}
function xe(t, e, r) {
  const a = Math.round(14.999999999999998), d = { position: t.position.clone(), quaternion: t.quaternion.clone() }, l = setInterval(M, 1e3 / 30);
  let m = 0;
  function M() {
    m++;
    const x = m / a;
    t.position.lerpVectors(d.position, e.position, x), t.quaternion.slerpQuaternions(d.quaternion, e.quaternion, x), r && r(), m == a && clearInterval(l);
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
        const M = this.map[m][0], x = this.map[m + 1][0];
        n.setHex(this.map[m][1], rt), a.setHex(this.map[m + 1][1], rt);
        const g = new $().lerpColors(n, a, (l - M) / (x - M));
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
    const d = 1 / this.n, l = new $(), m = new $(), M = new $();
    for (let x = 1; x >= 0; x -= d) for (let g = this.map.length - 1; g >= 0; g--) if (x < this.map[g][0] && x >= this.map[g - 1][0]) {
      const f = this.map[g - 1][0], S = this.map[g][0];
      l.setHex(this.map[g - 1][1], rt), m.setHex(this.map[g][1], rt), M.lerpColors(l, m, (x - f) / (S - f)), n[a * 4] = Math.round(M.r * 255), n[a * 4 + 1] = Math.round(M.g * 255), n[a * 4 + 2] = Math.round(M.b * 255), n[a * 4 + 3] = 255, a += 1;
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
    let m, M;
    const x = Vt.val;
    if (x ? (M = x[0], m = x[1]) : (m = l.length ? Math.max(...l) : 1, M = l.length ? Math.min(...l) : 0, M >= 0 && m > 0 && (M = 0)), m === M) {
      const c = Math.max(Math.abs(m) * 1e-6, 1e-9);
      m += c, M -= c;
    }
    const g = x && x[0] > x[1], f = Math.min(M, m), S = Math.max(M, m);
    o.setMin(f), o.setMax(S);
    for (let c = 0; c < r.val.length; c++) {
      const P = r.val[c];
      if (!Number.isFinite(P)) {
        a.geometry.attributes.color.setXYZ(c, 0.3, 0.3, 0.3);
        continue;
      }
      const B = g ? S + f - P : P, I = o.getColor(B) ?? new $(0, 0, 0);
      n.copy(I).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(c, n.r, n.g, n.b);
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
    const m = r.val, M = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], x = Fe(e.frameResults.val);
    if (n.children.forEach((v) => {
      v.geometry && v.geometry.dispose(), v.material && v.material.dispose();
    }), n.clear(), !x || M.length === 0 || m.length === 0) {
      l.val = [];
      return;
    }
    const g = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, f = (_c = t.deformOutputs) == null ? void 0 : _c.val, S = [], c = [];
    for (let v = 0; v < M.length; v++) {
      if (M[v].length !== 2) continue;
      const A = Ce(x, v, g, f);
      A && (S.push(A[0], A[1]), c.push({ idx: v, vals: A }));
    }
    if (S.length === 0) {
      l.val = [];
      return;
    }
    const P = Math.min(...S), B = Math.max(...S);
    a.setMin(P), a.setMax(B), l.val = S;
    const I = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of m) for (let F = 0; F < 3; F++) I[F] = Math.min(I[F], v[F]), k[F] = Math.max(k[F], v[F]);
    const C = Math.max(k[0] - I[0], k[1] - I[1], k[2] - I[2], 1) * ge, w = [], y = [], u = [];
    let s = 0;
    for (const { idx: v, vals: F } of c) {
      const A = M[v], X = m[A[0]], b = m[A[1]];
      if (!X || !b) continue;
      const z = new E(b[0] - X[0], b[1] - X[1], b[2] - X[2]), R = z.length();
      if (R < 1e-10) continue;
      z.normalize();
      const Z = Math.abs(z.y) < 0.99 ? new E(0, 1, 0) : new E(1, 0, 0), Y = new E().crossVectors(z, Z).normalize(), W = new E().crossVectors(z, Y).normalize(), H = bt + 1, _ = be;
      for (let q = 0; q < H; q++) {
        const J = q / bt, st = X[0] + z.x * R * J, it = X[1] + z.y * R * J, mt = X[2] + z.z * R * J, ft = F[0] + (F[1] - F[0]) * J, at = a.getColor(ft) ?? new $(0, 0, 0);
        d.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const At = wt / _ * Math.PI * 2, vt = Math.cos(At), xt = Math.sin(At);
          w.push(st + (Y.x * vt + W.x * xt) * C, it + (Y.y * vt + W.y * xt) * C, mt + (Y.z * vt + W.z * xt) * C), y.push(d.r, d.g, d.b);
        }
      }
      for (let q = 0; q < bt; q++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = s + q * _ + J, mt = s + q * _ + st, ft = s + (q + 1) * _ + J, at = s + (q + 1) * _ + st;
        u.push(it, mt, at), u.push(it, at, ft);
      }
      s += H * _;
    }
    if (w.length === 0) return;
    const i = new L();
    i.setAttribute("position", new K(w, 3)), i.setAttribute("color", new K(y, 3)), i.setIndex(u), i.computeVertexNormals();
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
        const M = d[m];
        M && (M.innerText = Ae(t.val, l).toString());
      });
    });
  }), r;
}
function Ae(t, e) {
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
  let M = l;
  const x = new Kt({ antialias: true });
  x.localClippingEnabled = true;
  const g = new Ut(l, x.domElement), f = jt(e), S = V.derive(() => f.displayScale.val === 0 ? 1 : f.displayScale.val > 0 ? f.displayScale.val : -1 / f.displayScale.val), c = Se(t, f);
  let P = Pt(f.gridSize.rawVal);
  a.appendChild(Ot(f, t, n)), a.setAttribute("id", "viewer"), a.appendChild(x.domElement), x.setPixelRatio(window.devicePixelRatio);
  const B = j();
  x.setClearColor(B.background, 1);
  const I = f.gridSize.rawVal, k = I * 0.5 + I * 0.5 / Math.tan(45 * 0.5);
  l.position.set(0.5 * I, 0.8 * -k, 0.5 * I), g.target.set(0.5 * I, 0.5 * I, 0), g.minDistance = 1, g.maxDistance = k * 2.5, g.zoomSpeed = 10, g.update(), d.add(P, le(f.gridSize.rawVal, f.flipAxes.rawVal)), new ResizeObserver((u) => {
    var _a, _b;
    for (const s of u) {
      const i = (_a = s.target) == null ? void 0 : _a.clientWidth, p = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || p === 0) continue;
      l.aspect = i / p, l.updateProjectionMatrix();
      const h = i / p, v = m.top;
      m.left = -v * h, m.right = v * h, m.updateProjectionMatrix(), x.setSize(i, p), C();
    }
  }).observe(a), g.addEventListener("change", C), V.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, f.displayScale.val, f.nodes.val, f.elements.val, f.elemColumns.val, f.elemBeams.val, f.nodesIndexes.val, f.elementsIndexes.val, f.orientations.val, f.sections.val, f.secColumns.val, f.secBeams.val, f.secFloor.val, f.supports.val, f.loads.val, f.deformedShape.val, f.nodeResults.val, f.frameResults.val, f.shellResults.val, setTimeout(C);
  });
  function C() {
    x.render(d, M);
  }
  function w(u) {
    M = u, g.object = u, g.update(), C();
  }
  if (t) {
    d.add(te(f, c, S), ee(t, f, c), ie(f, c, S), ae(t, f, c, S), oe(t, f, c, S), se(t, f, c, S), de(t, f, c, S), he(t, f, c, S), we(t, f, c, S), pe(t, f, c, S));
    const u = ze(t, f), s = ye(t, f, c, u), i = Yt(u);
    d.add(s), a.appendChild(i);
    const p = Ve(t, f, c);
    d.add(p);
    const h = p.__colorMapValues, v = Yt(h);
    v.id = "frame-legend", a.appendChild(v), V.derive(() => {
      const F = f.shellResults.val != "none", A = f.frameResults.val.startsWith("contour:");
      i.hidden = !F, s.visible = F, v.hidden = !A;
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
      n.rawVal.forEach((h) => h.visible = f.solids.val), C();
    });
  }
  o && V.derive(() => {
    (o == null ? void 0 : o.val.length) && (d.remove(...o.oldVal), d.add(...o.rawVal), C());
  }), r && ve({ drawingObj: r, gridObj: P, scene: d, camera: l, controls: g, gridSize: I, derivedDisplayScale: S, rendererElm: x.domElement, viewerRender: C }), pt((u, s) => {
    x.setClearColor(s.background, 1), d.remove(P), P.geometry.dispose(), P.material.dispose(), P = Pt(f.gridSize.rawVal), d.add(P), a.style.setProperty("--awatif-legend-color", s.legendMarker), C();
  });
  const y = { scene: d, perspCamera: l, orthoCamera: m, get camera() {
    return M;
  }, controls: g, renderer: x, rendererElm: x.domElement, render: C, setActiveCamera: w, settings: f };
  return a.__ctx = y, a;
}
function Se(t, e) {
  return V.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || r.length === 0) return r;
    let n = 1 / 0, a = 1 / 0, d = 1 / 0, l = -1 / 0, m = -1 / 0, M = -1 / 0;
    for (const c of r) c[0] < n && (n = c[0]), c[0] > l && (l = c[0]), c[1] < a && (a = c[1]), c[1] > m && (m = c[1]), c[2] < d && (d = c[2]), c[2] > M && (M = c[2]);
    const x = Math.sqrt((l - n) ** 2 + (m - a) ** 2 + (M - d) ** 2);
    let g = 0;
    o.forEach((c) => {
      const P = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2);
      P > g && (g = P);
    });
    const S = g > 1e-30 && x > 1e-30 ? 0.07 * x / g : 1;
    return r.map((c, P) => {
      var _a2;
      const B = ((_a2 = o.get(P)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return c.map((I, k) => I + B[k] * S);
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
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), c = (k, T) => {
      k == null ? void 0 : k.forEach((C, w) => {
        const y = t.elements.val[w];
        if (y) for (let u = 0; u < y.length; u++) T.set(y[u], [C[u] ?? C[0]]);
      });
    };
    c((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), c((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), c((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, d), c((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, l), c((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, m), c((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, M), c((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, x), c((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), c((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, f), c((_t2 = (_s = t.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, S);
    const P = (_v = (_u = t.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRange;
    Vt.val = Array.isArray(P) && P.length === 2 ? [P[0], P[1]] : null;
    const B = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [d, 0], membraneXX: [l, 0], membraneYY: [m, 0], membraneXY: [M, 0], tranverseShearX: [x, 0], tranverseShearY: [g, 0], vonMises: [f, 0], pressure: [S, 0], displacementX: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = t.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = t.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, I = [];
    t.nodes.val.forEach((k, T) => {
      const C = B[e.shellResults.val];
      if (!C || !C[0] || typeof C[0].has != "function") return;
      if (!C[0].has(T)) {
        I.push(Number.NaN);
        return;
      }
      const w = C[0].get(T);
      I.push(w ? w[C[1]] ?? 0 : 0);
    }), r.val = I;
  }), r;
}
export {
  Me as a,
  Yt as b,
  Ie as g
};
