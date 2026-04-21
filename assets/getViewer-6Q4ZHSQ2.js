import { H as ct, B as L, I as dt, F as D, G as K, h as It, a as et, j as Q, D as O, e as U, C as $, l as Lt, i as kt, V as E, A as tt, z as G, J as Mt, d as Et, L as nt, c as H, r as ut, K as ht, R as Zt, f as Wt, N as Nt, U as _t, X as zt, Y as rt, Z as Ht, _ as $t, t as Gt, u as qt, v as Dt, W as Kt, w as Ut, x as Qt, y as Pt, O as Jt } from "./Text-CBH-tcJP.js";
import { v as C, P as Ot, g as j, o as pt } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function jt(t, e, r) {
  const o = document.createElement("div"), n = new Ot({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (e == null ? void 0 : e.nodes) && (n.addBinding(t.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(t.nodes, "val", { label: "Nodes" }), n.addBinding(t.elements, "val", { label: "Elements" }), n.addBinding(t.elemColumns, "val", { label: "  Columnas" }), n.addBinding(t.elemBeams, "val", { label: "  Vigas" }), n.addBinding(t.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(t.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(t.orientations, "val", { label: "Orientations" }), n.addBinding(t.sections, "val", { label: "Sections" }), n.addBinding(t.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(t.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(t.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (e == null ? void 0 : e.nodeInputs) || (e == null ? void 0 : e.elementInputs)) {
    const a = n.addFolder({ title: "Analysis Inputs" });
    a.addBinding(t.supports, "val", { label: "Supports" }), a.addBinding(t.loads, "val", { label: "Loads" }), a.addBinding(t.custom3D, "val", { label: "Resortes (Winkler)" }), a.addBinding(t.showCotas, "val", { label: "Cotas" });
  }
  if ((e == null ? void 0 : e.deformOutputs) || (e == null ? void 0 : e.analyzeOutputs)) {
    const a = n.addFolder({ title: "Analysis Outputs" });
    a.addBinding(t.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), a.addBinding(t.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), a.addBinding(t.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), a.addBinding(t.deformedShape, "val", { label: "Deformed shape" });
  }
  return r && n.addBinding(t.solids, "val", { label: "Solids" }), o;
}
function te(t) {
  return { gridSize: C.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: C.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: C.state((t == null ? void 0 : t.nodes) ?? true), elements: C.state((t == null ? void 0 : t.elements) ?? true), elemColumns: C.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: C.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: C.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: C.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: C.state((t == null ? void 0 : t.orientations) ?? false), sections: C.state((t == null ? void 0 : t.sections) ?? true), secColumns: C.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: C.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: C.state((t == null ? void 0 : t.secFloor) ?? -1), supports: C.state((t == null ? void 0 : t.supports) ?? true), loads: C.state((t == null ? void 0 : t.loads) ?? false), deformedShape: C.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: C.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: C.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: C.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: C.state((t == null ? void 0 : t.flipAxes) ?? false), solids: C.state((t == null ? void 0 : t.solids) ?? true), custom3D: C.state((t == null ? void 0 : t.custom3D) ?? true), showCotas: C.state((t == null ? void 0 : t.showCotas) ?? true) };
}
function ee(t, e, r) {
  const o = j(), n = new ct(new L(), new dt({ color: o.nodePoint }));
  return pt((a, d) => {
    n.material.color.setHex(d.nodePoint);
  }), n.frustumCulled = false, C.derive(() => {
    t.nodes.val && n.geometry.setAttribute("position", new D(e.val.flat(), 3));
  }), C.derive(() => {
    r.val;
    const a = 0.05 * t.gridSize.val * 0.5;
    t.nodes.rawVal && (n.material.size = a * r.rawVal);
  }), C.derive(() => {
    n.visible = t.nodes.val;
  }), n;
}
function ne(t, e, r) {
  const o = j(), n = new K(), a = new It(new L(), new et({ color: o.elementLine }));
  pt((f, A) => {
    a.material.color.setHex(A.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const d = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), c = new U(new L(), d);
  c.frustumCulled = false, n.add(c);
  let m = new $(o.shellWall), v = new $(o.shellSlab), x = new $(o.shellTri);
  pt((f, A) => {
    m = new $(A.shellWall), v = new $(A.shellSlab), x = new $(A.shellTri), d.opacity = A.shellOpacity, d.needsUpdate = true;
  });
  function g(f, A) {
    const u = Math.abs(A[0] - f[0]), Y = Math.abs(A[1] - f[1]), B = Math.abs(A[2] - f[2]);
    return B > u && B > Y || Y > u && Y > B;
  }
  return C.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const f = e.elemColumns.rawVal, A = e.elemBeams.rawVal, u = r.val, Y = ((_a = t.elements) == null ? void 0 : _a.val) || [], B = Y.filter((V) => {
      if (V.length !== 2) return true;
      const M = u[V[0]], y = u[V[1]];
      if (!M || !y) return true;
      const h = g(M, y);
      return !(h && !f || !h && !A);
    }).map((V) => oe(V).map((M) => [...u[M[0]], ...u[M[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new D(B, 3));
    const X = [], k = [];
    function z(V, M, y, h) {
      const s = [M[0] - V[0], M[1] - V[1], M[2] - V[2]], i = [h[0] - V[0], h[1] - V[1], h[2] - V[2]], l = s[1] * i[2] - s[2] * i[1], p = s[2] * i[0] - s[0] * i[2], w = s[0] * i[1] - s[1] * i[0], F = Math.sqrt(l * l + p * p + w * w);
      return F < 1e-12 ? false : Math.abs(w / F) < 0.5;
    }
    for (const V of Y) if (V.length === 3) {
      const [M, y, h] = V;
      if (u[M] && u[y] && u[h]) {
        X.push(...u[M], ...u[y], ...u[h]);
        for (let s = 0; s < 3; s++) k.push(x.r, x.g, x.b);
      }
    } else if (V.length === 4) {
      const [M, y, h, s] = V;
      if (u[M] && u[y] && u[h] && u[s]) {
        const i = z(u[M], u[y], u[h], u[s]) ? m : v;
        X.push(...u[M], ...u[y], ...u[h]), X.push(...u[M], ...u[h], ...u[s]);
        for (let l = 0; l < 6; l++) k.push(i.r, i.g, i.b);
      }
    }
    X.length > 0 ? (c.geometry.dispose(), c.geometry = new L(), c.geometry.setAttribute("position", new D(X, 3)), c.geometry.setAttribute("color", new D(k, 3)), c.geometry.computeVertexNormals(), c.visible = true) : c.visible = false;
  }), C.derive(() => {
    n.visible = e.elements.val;
  }), n;
}
function oe(t) {
  if (t.length === 2) return [t];
  const e = [];
  for (let r = 0; r < t.length; r++) e.push([t[r], t[(r + 1) % t.length]]);
  return e;
}
function Yt(t) {
  const e = j(), r = new Lt(t, 20, e.grid, e.grid);
  return r.position.set(0.5 * t, 0.5 * t, 0), r.rotateX(Math.PI / 2), r;
}
function se(t, e, r, o) {
  const n = new K(), a = new kt(0.5, 0.5, 0.5), d = new Q({ color: 10166822 });
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((m, v) => {
      const x = r.val[v];
      if (!x) return;
      const g = new U(a, d);
      g.position.set(...x);
      const f = c * o.rawVal;
      g.scale.set(f, f, f), n.add(g);
    });
  }), C.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const m = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((v) => v.scale.set(m, m, m));
  }), C.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function ie(t, e, r, o) {
  const n = new K();
  n.name = "loadsGroup";
  function a(d) {
    if (d.length < 2) return 0.12 * e.gridSize.rawVal;
    const c = [1 / 0, 1 / 0, 1 / 0], m = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of d) for (let g = 0; g < 3; g++) c[g] = Math.min(c[g], x[g]), m[g] = Math.max(m[g], x[g]);
    return 0.08 * Math.max(m[0] - c[0], m[1] - c[1], m[2] - c[2], 0.1);
  }
  return C.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((m) => m.dispose()), n.clear();
    const d = r.val, c = a(d);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((m, v) => {
      const x = d[v];
      if (!x) return;
      const g = new E(...m.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const f = new tt(g, new E(...x), 1, 15637248, 0.3, 0.3), A = c * o.rawVal;
      f.scale.set(A, A, A), n.add(f);
    });
  }), C.derive(() => {
    if (o.val, !e.loads.rawVal) return;
    const c = a(r.rawVal) * o.rawVal;
    n.children.forEach((m) => m.scale.set(c, c, c));
  }), C.derive(() => {
    n.visible = e.loads.val;
  }), n;
}
function ae(t, e, r) {
  const o = new K();
  return C.derive(() => {
    if (!t.nodesIndexes.val) return;
    o.children.forEach((a) => a.dispose()), o.clear();
    const n = 0.05 * t.gridSize.val * 0.6;
    e.val.forEach((a, d) => {
      const c = new G(`${d}`);
      c.position.set(...a), c.updateScale(n * r.rawVal), o.add(c);
    });
  }), C.derive(() => {
    if (r.val, !t.nodesIndexes.rawVal) return;
    const n = 0.05 * t.gridSize.val * 0.6;
    o.children.forEach((a) => a.updateScale(n * r.rawVal));
  }), C.derive(() => {
    o.visible = t.nodesIndexes.val;
  }), o;
}
function re(t, e, r, o) {
  const n = new K();
  return C.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const a = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((d, c) => {
      const m = new G(`${c}`, void 0, "#001219");
      m.position.set(...le(d.map((v) => r.rawVal[v]))), m.updateScale(a * o.rawVal), n.add(m);
    });
  }), C.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const a = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((d) => d.updateScale(a * o.rawVal));
  }), C.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function le(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function ce(t, e) {
  const r = new K(), o = 0.05 * t * 1, n = j(), a = new G("X", "red", "transparent"), d = new G(e ? "Z" : "Y", "green", "transparent"), c = new G(e ? "Y" : "Z", "blue", "transparent"), m = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), v = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), x = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), d.position.set(0, 1.3 * o, 0), c.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), d.updateScale(0.4 * o), c.updateScale(0.4 * o), m.scale.set(o, o, o), v.scale.set(o, o, o), x.scale.set(o, o, o), r.add(m, v, x, a, d, c), r;
}
function Ct(t, e) {
  const r = new E(...t), n = new E(...e).clone().sub(r), a = n.length(), d = n.dot(new E(1, 0, 0)) / a, c = n.dot(new E(0, 1, 0)) / a, m = n.dot(new E(0, 0, 1)) / a, v = Math.sqrt(d ** 2 + c ** 2);
  let x = new Mt().fromArray([[d, c, m], [-c / v, d / v, 0], [-d * m / v, -c * m / v, v]].flat());
  return m === 1 && (x = new Mt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), m === -1 && (x = new Mt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Et().setFromMatrix3(x);
}
function gt(t, e) {
  return t == null ? void 0 : t.map((r, o) => (9 * r + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function de(t, e, r) {
  const o = ot([e, r]), n = ot([t, r]), a = ot([t, e]), d = new E(...o).sub(new E(...n)).normalize(), c = new E(...r).sub(new E(...a)).normalize(), m = d.clone().cross(c).normalize(), v = m.clone().cross(d).normalize();
  return new Et().makeBasis(d, v, m);
}
function ue(t, e, r, o) {
  const n = new K(), a = new L(), d = new et({ vertexColors: true }), c = [0, 0, 0], m = [1, 0, 0], v = [0, 1, 0], x = [0, 0, 1];
  a.setAttribute("position", new D([...c, ...m, ...c, ...v, ...c, ...x], 3));
  const g = [255, 0, 0], f = [0, 255, 0], A = [0, 0, 255];
  return a.setAttribute("color", new D([...g, ...g, ...f, ...f, ...A, ...A], 3)), C.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((u) => {
      const Y = new It(a, d), B = r.rawVal[u[0]], X = r.rawVal[u[1]];
      if (u.length === 2 && (Y.position.set(...gt(B, X)), Y.rotation.setFromRotationMatrix(Ct(B, X))), u.length === 3) {
        const V = r.rawVal[u[2]];
        Y.position.set(...ot([B, X, V])), Y.rotation.setFromRotationMatrix(de(B, X, V));
      }
      const z = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      Y.scale.set(z, z, z), n.add(Y);
    }));
  }), C.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const Y = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((B) => B.scale.set(Y, Y, Y));
  }), C.derive(() => {
    n.visible = e.orientations.val;
  }), n;
}
function he(t) {
  if (t.name) return t.name;
  if (t.type === "rect") {
    const e = (t.b * 100).toFixed(0), r = (t.h * 100).toFixed(0);
    return `${e}x${r}`;
  }
  return t.type === "circ" ? `D${(t.d * 100).toFixed(0)}` : "";
}
function pe(t, e, r, o) {
  const n = new K();
  function a(M, y) {
    const h = M / 2, s = y / 2, i = new Float32Array([0, -h, -s, 0, h, -s, 0, h, s, 0, -h, -s, 0, h, s, 0, -h, s]), l = new L();
    l.setAttribute("position", new H(i, 3));
    const p = new Float32Array([0, -h, -s, 0, h, -s, 0, h, s, 0, -h, s, 0, -h, -s]), w = new L();
    return w.setAttribute("position", new H(p, 3)), { fill: l, outline: w };
  }
  function d(M, y = 24) {
    const h = M / 2, s = new Float32Array(y * 9);
    for (let w = 0; w < y; w++) {
      const F = w / y * Math.PI * 2, S = (w + 1) / y * Math.PI * 2;
      s[w * 9] = 0, s[w * 9 + 1] = 0, s[w * 9 + 2] = 0, s[w * 9 + 3] = 0, s[w * 9 + 4] = h * Math.cos(F), s[w * 9 + 5] = h * Math.sin(F), s[w * 9 + 6] = 0, s[w * 9 + 7] = h * Math.cos(S), s[w * 9 + 8] = h * Math.sin(S);
    }
    const i = new L();
    i.setAttribute("position", new H(s, 3));
    const l = new Float32Array((y + 1) * 3);
    for (let w = 0; w <= y; w++) {
      const F = w / y * Math.PI * 2;
      l[w * 3] = 0, l[w * 3 + 1] = h * Math.cos(F), l[w * 3 + 2] = h * Math.sin(F);
    }
    const p = new L();
    return p.setAttribute("position", new H(l, 3)), { fill: i, outline: p };
  }
  function c(M, y, h, s) {
    const i = h ?? y * 0.08, l = s ?? M * 0.07, p = M / 2, w = y / 2, F = w - i, S = l / 2, I = [];
    function b(T, W, N, _) {
      I.push(0, T, W, 0, N, W, 0, N, _, 0, T, W, 0, N, _, 0, T, _);
    }
    b(-p, -w, p, -F), b(-S, -F, S, F), b(-p, F, p, w);
    const P = new L();
    P.setAttribute("position", new H(new Float32Array(I), 3));
    const R = new Float32Array([0, -p, -w, 0, p, -w, 0, p, -F, 0, S, -F, 0, S, F, 0, p, F, 0, p, w, 0, -p, w, 0, -p, F, 0, -S, F, 0, -S, -F, 0, -p, -F, 0, -p, -w]), Z = new L();
    return Z.setAttribute("position", new H(R, 3)), { fill: P, outline: Z };
  }
  function m(M, y, h) {
    const s = M / 2, i = y / 2, l = s - h, p = i - h, w = [];
    function F(P, R, Z, T) {
      w.push(0, P, R, 0, Z, R, 0, Z, T, 0, P, R, 0, Z, T, 0, P, T);
    }
    F(-s, -i, s, -p), F(-s, p, s, i), F(-s, -p, -l, p), F(l, -p, s, p);
    const S = new L();
    S.setAttribute("position", new H(new Float32Array(w), 3));
    const I = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -l, -p, 0, l, -p, 0, l, -p, 0, l, p, 0, l, p, 0, -l, p, 0, -l, p, 0, -l, -p]), b = new L();
    return b.setAttribute("position", new H(I, 3)), { fill: S, outline: b };
  }
  function v(M, y, h) {
    const s = M / 2, i = y / 2, l = s - h, p = i - h, w = new L(), F = new Float32Array([0, -l, -p, 0, l, -p, 0, l, p, 0, -l, -p, 0, l, p, 0, -l, p]);
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
  function x(M, y, h) {
    const s = [], i = [[0, -M / 2, -y / 2], [0, -M / 2 + h, -y / 2], [0, -M / 2 + h, y / 2 - h], [0, M / 2, y / 2 - h], [0, M / 2, y / 2], [0, -M / 2, y / 2]], l = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
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
  function g(M, y, h, s) {
    const i = s / 2, l = [], p = [[0, -M - i, -y / 2], [0, -h - i, -y / 2], [0, -h - i, y / 2 - h], [0, -i, y / 2 - h], [0, -i, y / 2], [0, -M - i, y / 2]], w = [[0, i, -y / 2], [0, i + h, -y / 2], [0, i + h, y / 2 - h], [0, M + i, y / 2 - h], [0, M + i, y / 2], [0, i, y / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
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
  function f(M, y, h, s) {
    const i = y / 2, l = M, p = [[0, -l, -i], [0, -l, -i + h], [0, -s, -i + h], [0, -s, i - h], [0, -l, i - h], [0, -l, i], [0, 0, i], [0, 0, -i]], w = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
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
  function A(M, y, h, s, i) {
    const l = y / 2, p = i / 2, w = [], F = [[0, -M, -l], [0, -M, -l + h], [0, -p - s, -l + h], [0, -p - s, l - h], [0, -M, l - h], [0, -M, l], [0, -p, l], [0, -p, -l]], S = F.map((Z) => [Z[0], -Z[1], Z[2]]), I = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
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
  function u(M, y, h, s) {
    const i = M / 2, l = y / 2, p = s / 2, w = [[0, -p, -l], [0, p, -l], [0, p, l - h], [0, i, l - h], [0, i, l], [0, -i, l], [0, -i, l - h], [0, -p, l - h]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], S = [];
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
  function Y(M, y, h = 24) {
    const s = M / 2, i = s - y, l = [];
    for (let S = 0; S < h; S++) {
      const I = S / h * Math.PI * 2, b = (S + 1) / h * Math.PI * 2, P = Math.cos(I), R = Math.sin(I), Z = Math.cos(b), T = Math.sin(b);
      l.push(0, s * P, s * R, 0, s * Z, s * T, 0, i * Z, i * T), l.push(0, s * P, s * R, 0, i * Z, i * T, 0, i * P, i * R);
    }
    const p = new L();
    p.setAttribute("position", new H(new Float32Array(l), 3));
    const w = [];
    for (let S = 0; S < h; S++) {
      const I = S / h * Math.PI * 2, b = (S + 1) / h * Math.PI * 2;
      w.push(0, s * Math.cos(I), s * Math.sin(I), 0, s * Math.cos(b), s * Math.sin(b)), w.push(0, i * Math.cos(I), i * Math.sin(I), 0, i * Math.cos(b), i * Math.sin(b));
    }
    const F = new L();
    return F.setAttribute("position", new H(new Float32Array(w), 3)), { fill: p, outline: F };
  }
  const B = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), X = new et({ color: 52479 }), k = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), z = new et({ color: 16750848 });
  function V(M, y) {
    const h = Math.abs(y[0] - M[0]), s = Math.abs(y[1] - M[1]), i = Math.abs(y[2] - M[2]);
    return i > h && i > s || s > h && s > i;
  }
  return C.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const M = e.secColumns.rawVal, y = e.secBeams.rawVal;
    if (!M && !y) {
      n.children.forEach((p) => {
        p instanceof G && p.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((p) => {
      p instanceof G && p.dispose();
    }), n.clear();
    const h = (_a = t.elements) == null ? void 0 : _a.val, s = (_b = t.elementInputs) == null ? void 0 : _b.val;
    if (!h || !s) return;
    const i = s.sectionShapes, l = e.secFloor.rawVal;
    h.forEach((p, w) => {
      if (p.length !== 2) return;
      const F = r.rawVal[p[0]], S = r.rawVal[p[1]];
      if (!F || !S) return;
      const I = V(F, S);
      if (I && !M || !I && !y) return;
      if (l >= 0) {
        const T = Math.min(F[1], S[1]);
        Math.max(F[1], S[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(T / W + 0.01) !== l) return;
      }
      const b = i == null ? void 0 : i.get(w);
      if (!b) return;
      const P = [(F[0] + S[0]) / 2, (F[1] + S[1]) / 2, (F[2] + S[2]) / 2], R = Ct(F, S);
      if (b.type === "CFT") {
        const T = v(b.b, b.h, b.tw ?? b.b * 0.05), W = new U(T.concFill, B);
        W.position.set(...P), W.rotation.setFromRotationMatrix(R), n.add(W);
        const N = new U(T.steelFillGeom, k);
        N.position.set(...P), N.rotation.setFromRotationMatrix(R), n.add(N);
        const _ = new nt(T.outline, z);
        _.position.set(...P), _.rotation.setFromRotationMatrix(R), n.add(_);
      } else {
        let T, W, N;
        switch (b.type) {
          case "rect":
            T = a(b.b, b.h), W = B, N = X;
            break;
          case "circ":
            T = d(b.d), W = B, N = X;
            break;
          case "I":
            T = c(b.b, b.h, b.tf, b.tw), W = k, N = z;
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
            T = u(b.b, b.h, b.tf ?? 0.01, b.tw ?? 6e-3), W = k, N = z;
            break;
          case "pipe":
            T = Y(b.d, b.tw ?? b.d * 0.05), W = k, N = z;
            break;
          default:
            return;
        }
        const _ = new U(T.fill, W);
        _.position.set(...P), _.rotation.setFromRotationMatrix(R), n.add(_);
        const q = new nt(T.outline, N);
        q.position.set(...P), q.rotation.setFromRotationMatrix(R), n.add(q);
      }
      const Z = he(b);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(b.type) ? "#ff9900" : "#00ccff", N = new G(Z, W, "transparent");
        N.position.set(P[0], P[1], P[2]);
        const _ = 0.05 * e.gridSize.rawVal * 0.5;
        N.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(N);
      }
    });
  }), o && C.derive(() => {
    if (o.val, !e.sections.rawVal) return;
    const M = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((y) => {
      y instanceof G && y.updateScale(M * o.rawVal);
    });
  }), C.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends K {
  constructor(e, r, o, n, a, d, c) {
    super();
    const m = new ut().moveTo(0, 0).lineTo(0, d[1]).lineTo(o, d[1]).lineTo(o, 0).lineTo(0, 0), v = m.getPoints(), x = new L().setFromPoints(v);
    this.lines = new nt(x, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new ht(m), f = new Q({ color: d[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new U(g, f), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new G(`${a[1].toFixed(4)}`), this.normalizedResult = d, this.textPosition = ot([e, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Tt extends K {
  constructor(e, r, o, n, a, d, c) {
    super();
    const m = a[0] * o / (a[0] + a[1]), v = a[0] * a[1] > 0;
    if (this.text = new G(`${a[0].toFixed(4)}`), this.text2 = new G(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = d, this.textPosition = gt(e, r), this.text2Position = gt(r, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), v) {
      const x = new ut().moveTo(0, 0).lineTo(0, d[0]).lineTo(m, 0).lineTo(0, 0), g = new ut().moveTo(m, 0).lineTo(o, -d[1]).lineTo(o, 0).lineTo(m, 0), f = x.getPoints(), A = g.getPoints(), u = new L().setFromPoints(f), Y = new L().setFromPoints(A), B = new et({ color: j().resultOutline });
      this.lines = new nt(u, B), this.lines2 = new nt(Y, B), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), c && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const X = new ht(x), k = new ht(g), z = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: O }), V = new Q({ color: -d[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new U(X, z), this.mesh2 = new U(k, V), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), c && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const x = new ut().moveTo(0, 0).lineTo(0, d[0]).lineTo(o, -d[1]).lineTo(o, 0).lineTo(0, 0), g = x.getPoints(), f = new L().setFromPoints(g);
      this.lines = new nt(f, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), c && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const A = new ht(x), u = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new U(A, u), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), c && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function me(t, e, r, o) {
  const n = new K(), a = { normals: lt, shearsY: lt, shearsZ: lt, torsions: lt, bendingsY: Tt, bendingsZ: Tt };
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, r.val, e.frameResults.val == "none") return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const d = Bt[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[d]) == null ? void 0 : _b.forEach((c, m) => {
      var _a2, _b2;
      const v = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[m]) ?? [0, 1], x = r.rawVal[v[0]], g = r.rawVal[v[1]], f = new E(...g).distanceTo(new E(...x)), A = fe((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[d]), u = c == null ? void 0 : c.map((k) => k / (A === 0 ? 1 : A)), Y = Ct(x, g), B = new a[d](x, g, f, Y, c ?? [0, 0], u ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(d)), X = 0.05 * e.gridSize.rawVal;
      B.updateScale(X * o.rawVal), n.add(B);
    });
  }), C.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const d = 0.05 * e.gridSize.val;
    n.children.forEach((c) => c.updateScale(d * o.rawVal));
  }), C.derive(() => {
    n.visible = e.frameResults.val != "none";
  }), n;
}
function fe(t) {
  let e = 0;
  return t == null ? void 0 : t.forEach((r) => {
    const o = Math.max(...r ?? [0, 0]);
    o > e && (e = o);
  }), e;
}
class we extends K {
  constructor(e, r, o) {
    super();
    const n = r === Vt.reactions;
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
var Vt = ((t) => (t.deformations = "deformations", t.reactions = "reactions", t))(Vt || {});
function ve(t, e, r, o) {
  const n = new K();
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const a = Vt[e.nodeResults.rawVal], d = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((c, m) => {
      const v = new we(r.rawVal[m], a, c ?? [0, 0, 0, 0, 0, 0]);
      v.updateScale(d * o.rawVal), n.add(v);
    });
  }), C.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const a = 0.05 * e.gridSize.val;
    n.children.forEach((d) => d.updateScale(a * o.rawVal));
  }), C.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function xe({ drawingObj: t, gridObj: e, scene: r, camera: o, controls: n, gridSize: a, derivedDisplayScale: d, rendererElm: c, viewerRender: m }) {
  const v = new Zt(), x = new Wt(), g = new U(new Nt(a, a), new Q({ side: O })), f = new ct(new L(), new dt()), A = new ct(new L(), new dt({ color: "gray" })), u = new ct(new L(), new dt({ color: "orange", size: 0.8 }));
  r.add(u), f.geometry.setAttribute("position", new D(t.points.rawVal.flat(), 3)), f.geometry.computeBoundingSphere(), f.frustumCulled = false, A.frustumCulled = false, r.add(A), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), C.derive(() => {
    t.gridTarget && (Me(e, { position: new E(...t.gridTarget.val.position), quaternion: new _t().setFromEuler(new zt(...t.gridTarget.val.rotation)) }, m), g.position.set(...t.gridTarget.val.position), g.quaternion.setFromEuler(new zt(...t.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), C.derive(() => {
    f.geometry.setAttribute("position", new D(t.points.val.flat(), 3)), f.geometry.computeBoundingSphere();
  }), C.derive(() => {
    const z = 0.05 * a * 0.5 * d.val;
    A.material.size = z, v.params.Points.threshold = 0.4 * z;
  }), C.derive(() => {
    var _a;
    const z = t.points.val ?? [], M = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], y = [];
    for (const s of M) {
      const [i, l, p] = z[s];
      y.push(i, l, p);
    }
    const h = new L();
    h.setAttribute("position", new D(y, 3)), u.geometry.dispose(), u.geometry = h;
  });
  let Y = false, B = 0;
  c.addEventListener("pointerdown", () => {
    Y = true;
  }), c.addEventListener("pointerup", () => {
    Y = false;
  }), c.addEventListener("pointermove", () => {
    Y && B++;
  }), c.addEventListener("click", (z) => {
    if (B > 5) {
      B = 0;
      return;
    }
    B = 0, x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    const V = v.intersectObject(g);
    if (V.length) {
      let M = V[0].point;
      (z.ctrlKey || z.metaKey) && (M = new E(Math.round(V[0].point.x), Math.round(V[0].point.y), Math.round(V[0].point.z))), t.points.val = [...t.points.rawVal, M.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), c.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), c.addEventListener("pointermove", (z) => {
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    const V = v.intersectObject(g);
    if (A.geometry.deleteAttribute("position"), V.length) {
      let M = V[0].point;
      (z.ctrlKey || z.metaKey) && (M = new E(Math.round(V[0].point.x), Math.round(V[0].point.y), Math.round(V[0].point.z))), A.geometry.setAttribute("position", new D(M.toArray(), 3));
    }
    m();
  }), c.addEventListener("pointermove", (z) => {
    var _a;
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    let V = false;
    const M = v.intersectObject(f), y = v.intersectObject(g);
    if (M.length && y.length) {
      const h = new E(...t.points.rawVal[M[0].index]), s = new E(...y[0].point), i = h.sub(s), l = (_a = y[0].face) == null ? void 0 : _a.normal;
      l.transformDirection(g.matrixWorld), Math.abs(i.dot(l)) < 1e-4 && (V = true);
    }
    A.visible = !V;
  });
  let X = false, k;
  c.addEventListener("pointermove", (z) => {
    var _a;
    if (!B) return;
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    let V = false;
    const M = v.intersectObject(f), y = v.intersectObject(g);
    if (M.length && y.length) {
      const s = new E(...t.points.rawVal[M[0].index]), i = new E(...y[0].point), l = s.sub(i), p = (_a = y[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(g.matrixWorld), Math.abs(l.dot(p)) < 1e-4 && (V = true);
    }
    if (V && B < 5 && (X = true, n.enabled = false, k = M[0].index), !X || B % 2 !== 0) return;
    const h = [...t.points.rawVal];
    if (k !== void 0) {
      let s = y[0].point;
      (z.ctrlKey || z.metaKey) && (s = new E(Math.round(s.x), Math.round(s.y), Math.round(s.z))), h[k] = s.toArray();
    }
    t.points.val = h;
  }), c.addEventListener("pointerup", () => {
    n.enabled = true, X = false;
  }), c.addEventListener("contextmenu", (z) => {
    var _a;
    x.x = z.clientX / window.innerWidth * 2 - 1, x.y = -(z.clientY / window.innerHeight) * 2 + 1, v.setFromCamera(x, o);
    let V = false;
    const M = v.intersectObject(f), y = v.intersectObject(g);
    if (M.length && y.length) {
      const i = new E(...t.points.rawVal[M[0].index]), l = new E(...y[0].point), p = i.sub(l), w = (_a = y[0].face) == null ? void 0 : _a.normal;
      w.transformDirection(g.matrixWorld), Math.abs(p.dot(w)) < 1e-4 && (V = true);
    }
    if (!V) return;
    const h = [...t.points.rawVal];
    if (h.splice(M[0].index, 1), t.points.val = h, !t.polylines) return;
    const s = t.polylines.rawVal.map((i) => i.filter((l) => l !== M[0].index)).map((i) => i.map((l) => l > M[0].index ? l - 1 : l)).filter((i) => i.length);
    s.push([]), t.polylines.val = s;
  });
}
function Me(t, e, r) {
  const a = Math.round(14.999999999999998), d = { position: t.position.clone(), quaternion: t.quaternion.clone() }, c = setInterval(v, 1e3 / 30);
  let m = 0;
  function v() {
    m++;
    const x = m / a;
    t.position.lerpVectors(d.position, e.position, x), t.quaternion.slerpQuaternions(d.quaternion, e.quaternion, x), r && r(), m == a && clearInterval(c);
  }
}
class Rt {
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
      const c = d * o;
      for (let m = 0; m < this.map.length - 1; m++) if (c > this.map[m][0] && c <= this.map[m + 1][0]) {
        const v = this.map[m][0], x = this.map[m + 1][0];
        n.setHex(this.map[m][1], rt), a.setHex(this.map[m + 1][1], rt);
        const g = new $().lerpColors(n, a, (c - v) / (x - v));
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
    const d = 1 / this.n, c = new $(), m = new $(), v = new $();
    for (let x = 1; x >= 0; x -= d) for (let g = this.map.length - 1; g >= 0; g--) if (x < this.map[g][0] && x >= this.map[g - 1][0]) {
      const f = this.map[g - 1][0], A = this.map[g][0];
      c.setHex(this.map[g - 1][1], rt), m.setHex(this.map[g][1], rt), v.lerpColors(c, m, (x - f) / (A - f)), n[a * 4] = Math.round(v.r * 255), n[a * 4 + 1] = Math.round(v.g * 255), n[a * 4 + 2] = Math.round(v.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(o, 0, 0), e;
  }
}
const yt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function ye(t, e, r) {
  const o = new Rt(), n = new $(), a = new U(new L(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, C.derive(() => {
    a.geometry.setAttribute("position", new D(t.val.flat(), 3));
    const d = [];
    for (const u of e.val) u.length === 3 ? d.push(u[0], u[1], u[2]) : u.length === 4 && (d.push(u[0], u[1], u[2]), d.push(u[0], u[2], u[3]));
    a.geometry.setIndex(new $t(d, 1)), a.geometry.setAttribute("color", new D(t.val.map(() => [0, 0, 0]).flat(), 3));
    const c = r.val.filter((u) => Number.isFinite(u));
    let m, v;
    const x = St.val;
    if (x ? (v = x[0], m = x[1]) : (m = c.length ? Math.max(...c) : 1, v = c.length ? Math.min(...c) : 0, v >= 0 && m > 0 && (v = 0)), m === v) {
      const u = Math.max(Math.abs(m) * 1e-6, 1e-9);
      m += u, v -= u;
    }
    const g = x && x[0] > x[1], f = Math.min(v, m), A = Math.max(v, m);
    o.setMin(f), o.setMax(A);
    for (let u = 0; u < r.val.length; u++) {
      const Y = r.val[u];
      if (!Number.isFinite(Y)) {
        a.geometry.attributes.color.setXYZ(u, 0.3, 0.3, 0.3);
        continue;
      }
      const B = g ? A + f - Y : Y, X = o.getColor(B) ?? new $(0, 0, 0);
      n.copy(X).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(u, n.r, n.g, n.b);
    }
  }), a;
}
function be(t, e, r, o) {
  const n = ye(r, t.elements, o);
  return C.derive(() => {
    n.visible = e.shellResults.val != "none";
  }), n;
}
const ge = 6, bt = 10, Fe = 0.012;
function Ce(t) {
  return t.startsWith("contour:") ? t.slice(8) : null;
}
function Ve(t, e, r, o) {
  if (!r && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(t) && r) {
    const a = r[t];
    if (a && a.has(e)) return a.get(e);
  }
  return null;
}
function Se(t, e, r, o) {
  const n = new K(), a = new Rt();
  a.setColorMap("rainbow");
  const d = new $(), c = C.state([]);
  return C.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const m = r.val, v = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], x = Ce(e.frameResults.val);
    if (n.children.forEach((w) => {
      w.geometry && w.geometry.dispose(), w.material && w.material.dispose();
    }), n.clear(), !x || v.length === 0 || m.length === 0) {
      c.val = [];
      return;
    }
    const g = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, f = (_c = t.deformOutputs) == null ? void 0 : _c.val, A = [], u = [];
    for (let w = 0; w < v.length; w++) {
      if (v[w].length !== 2) continue;
      const S = Ve(x, w, g, f);
      S && (A.push(S[0], S[1]), u.push({ idx: w, vals: S }));
    }
    if (A.length === 0) {
      c.val = [];
      return;
    }
    const Y = Math.min(...A), B = Math.max(...A);
    a.setMin(Y), a.setMax(B), c.val = A;
    const X = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
    for (const w of m) for (let F = 0; F < 3; F++) X[F] = Math.min(X[F], w[F]), k[F] = Math.max(k[F], w[F]);
    const V = Math.max(k[0] - X[0], k[1] - X[1], k[2] - X[2], 1) * Fe, M = [], y = [], h = [];
    let s = 0;
    for (const { idx: w, vals: F } of u) {
      const S = v[w], I = m[S[0]], b = m[S[1]];
      if (!I || !b) continue;
      const P = new E(b[0] - I[0], b[1] - I[1], b[2] - I[2]), R = P.length();
      if (R < 1e-10) continue;
      P.normalize();
      const Z = Math.abs(P.y) < 0.99 ? new E(0, 1, 0) : new E(1, 0, 0), T = new E().crossVectors(P, Z).normalize(), W = new E().crossVectors(P, T).normalize(), N = bt + 1, _ = ge;
      for (let q = 0; q < N; q++) {
        const J = q / bt, st = I[0] + P.x * R * J, it = I[1] + P.y * R * J, mt = I[2] + P.z * R * J, ft = F[0] + (F[1] - F[0]) * J, at = a.getColor(ft) ?? new $(0, 0, 0);
        d.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const At = wt / _ * Math.PI * 2, vt = Math.cos(At), xt = Math.sin(At);
          M.push(st + (T.x * vt + W.x * xt) * V, it + (T.y * vt + W.y * xt) * V, mt + (T.z * vt + W.z * xt) * V), y.push(d.r, d.g, d.b);
        }
      }
      for (let q = 0; q < bt; q++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = s + q * _ + J, mt = s + q * _ + st, ft = s + (q + 1) * _ + J, at = s + (q + 1) * _ + st;
        h.push(it, mt, at), h.push(it, at, ft);
      }
      s += N * _;
    }
    if (M.length === 0) return;
    const i = new L();
    i.setAttribute("position", new D(M, 3)), i.setAttribute("color", new D(y, 3)), i.setIndex(h), i.computeVertexNormals();
    const l = new Q({ vertexColors: true, side: O }), p = new U(i, l);
    p.frustumCulled = false, n.add(p);
  }), n.__colorMapValues = c, n;
}
function Xt(t, e = 8) {
  const r = document.createElement("div");
  r.id = "legend";
  const o = document.createElement("div");
  o.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", r.appendChild(o), setTimeout(() => {
    C.derive(() => {
      o.textContent = Ft.val ? `[${Ft.val}]` : "";
    });
  });
  const n = Array.from({ length: e + 1 }, (m, v) => v / e).reverse();
  let a, d;
  n.forEach((m, v) => {
    a = document.createElement("div"), a.id = `marker-${v}`, a.className = "marker", a.style.marginTop = v == 0 ? "0px" : `calc(${50 / e}vh - 1px)`, d = document.createElement("p"), d.id = `marker-text-${v}`, a.append(d), r.append(a);
  });
  const c = [];
  return r.querySelectorAll("p").forEach((m) => c.push(m)), setTimeout(() => {
    C.derive(() => {
      n.forEach((m, v) => {
        const x = c[v];
        x && (x.innerText = Ae(t.val, m).toString());
      });
    });
  }), r;
}
function Ae(t, e) {
  const r = St.val;
  if (r) return (r[0] + e * (r[1] - r[0])).toPrecision(3);
  const o = t.filter((d) => Number.isFinite(d));
  if (o.length === 0) return "0";
  let n = Math.min(...o);
  const a = Math.max(...o);
  return n >= 0 && a > 0 && (n = 0), (n + e * (a - n)).toPrecision(3);
}
function Ie({ mesh: t, settingsObj: e, drawingObj: r, objects3D: o, solids: n }) {
  Jt.DEFAULT_UP = new E(0, 0, 1);
  const a = document.createElement("div"), d = new Gt(), c = new qt(45, 1, 0.1, 2 * 1e6), m = new Dt(-10, 10, 10, -10, -1e3, 2e6);
  let v = c;
  const x = new Kt({ antialias: true });
  x.localClippingEnabled = true;
  const g = new Ut(c, x.domElement), f = te(e), A = C.derive(() => f.displayScale.val === 0 ? 1 : f.displayScale.val > 0 ? f.displayScale.val : -1 / f.displayScale.val), u = ze(t, f);
  let Y = Yt(f.gridSize.rawVal);
  a.appendChild(jt(f, t, n)), a.setAttribute("id", "viewer"), a.appendChild(x.domElement), x.setPixelRatio(window.devicePixelRatio);
  const B = j();
  x.setClearColor(B.background, 1);
  const X = f.gridSize.rawVal, k = X * 0.5 + X * 0.5 / Math.tan(45 * 0.5);
  c.position.set(0.5 * X, 0.8 * -k, 0.5 * X), g.target.set(0.5 * X, 0.5 * X, 0), g.minDistance = 1, g.maxDistance = k * 2.5, a.__settings = f, g.zoomSpeed = 1, g._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, g.update(), d.add(Y, ce(f.gridSize.rawVal, f.flipAxes.rawVal)), new ResizeObserver((h) => {
    var _a, _b;
    for (const s of h) {
      const i = (_a = s.target) == null ? void 0 : _a.clientWidth, l = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || l === 0) continue;
      c.aspect = i / l, c.updateProjectionMatrix();
      const p = i / l, w = m.top;
      m.left = -w * p, m.right = w * p, m.updateProjectionMatrix(), x.setSize(i, l), V();
    }
  }).observe(a), g.addEventListener("change", V), C.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, f.displayScale.val, f.nodes.val, f.elements.val, f.elemColumns.val, f.elemBeams.val, f.nodesIndexes.val, f.elementsIndexes.val, f.orientations.val, f.sections.val, f.secColumns.val, f.secBeams.val, f.secFloor.val, f.supports.val, f.loads.val, f.deformedShape.val, f.nodeResults.val, f.frameResults.val, f.shellResults.val, setTimeout(V);
  });
  function V() {
    x.render(d, v);
  }
  function M(h) {
    v = h, g.object = h, g.update(), V();
  }
  if (t) {
    d.add(ee(f, u, A), ne(t, f, u), ae(f, u, A), re(t, f, u, A), se(t, f, u, A), ie(t, f, u, A), ue(t, f, u, A), pe(t, f, u, A), ve(t, f, u, A), me(t, f, u, A));
    const h = Pe(t, f), s = be(t, f, u, h), i = Xt(h);
    d.add(s), a.appendChild(i);
    const l = Se(t, f, u);
    d.add(l);
    const p = l.__colorMapValues, w = Xt(p);
    w.id = "frame-legend", a.appendChild(w), C.derive(() => {
      const F = f.shellResults.val != "none", S = f.frameResults.val.startsWith("contour:");
      i.hidden = !F, s.visible = F, w.hidden = !S;
    });
  }
  if (n) {
    const h = new Qt(16777215, 0.5);
    d.add(h);
    const s = new Pt(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, d.add(s);
    const i = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = i, s.shadow.camera.top = i, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const l = new Pt(16777215, 0.5);
    l.color.setHSL(11, 43, 96), l.position.set(-10, 0, 30), d.add(l), C.derive(() => {
      (n == null ? void 0 : n.val.length) && (d.remove(...n.oldVal), d.add(...n.rawVal), V());
    }), C.derive(() => {
      n.rawVal.forEach((p) => p.visible = f.solids.val), V();
    });
  }
  if (o) {
    const h = (i) => {
      var _a;
      return ((_a = i == null ? void 0 : i.userData) == null ? void 0 : _a.isCota) ? f.showCotas.val : f.custom3D.val;
    }, s = () => {
      for (const i of o.rawVal) i.visible = h(i);
      V();
    };
    C.derive(() => {
      var _a;
      const i = o.val;
      ((_a = o.oldVal) == null ? void 0 : _a.length) && d.remove(...o.oldVal), i.length && (d.add(...o.rawVal), s()), V();
    }), C.derive(() => {
      f.custom3D.val, s();
    }), C.derive(() => {
      f.showCotas.val, s();
    });
  }
  r && xe({ drawingObj: r, gridObj: Y, scene: d, camera: c, controls: g, gridSize: X, derivedDisplayScale: A, rendererElm: x.domElement, viewerRender: V }), pt((h, s) => {
    x.setClearColor(s.background, 1), d.remove(Y), Y.geometry.dispose(), Y.material.dispose(), Y = Yt(f.gridSize.rawVal), d.add(Y), a.style.setProperty("--awatif-legend-color", s.legendMarker), V();
  });
  const y = { scene: d, perspCamera: c, orthoCamera: m, get camera() {
    return v;
  }, controls: g, renderer: x, rendererElm: x.domElement, render: V, setActiveCamera: M, settings: f };
  return a.__ctx = y, a;
}
function ze(t, e) {
  return C.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || r.length === 0) return r;
    let n = 1 / 0, a = 1 / 0, d = 1 / 0, c = -1 / 0, m = -1 / 0, v = -1 / 0;
    for (const u of r) u[0] < n && (n = u[0]), u[0] > c && (c = u[0]), u[1] < a && (a = u[1]), u[1] > m && (m = u[1]), u[2] < d && (d = u[2]), u[2] > v && (v = u[2]);
    const x = Math.sqrt((c - n) ** 2 + (m - a) ** 2 + (v - d) ** 2);
    let g = 0;
    o.forEach((u) => {
      const Y = Math.sqrt(u[0] ** 2 + u[1] ** 2 + u[2] ** 2);
      Y > g && (g = Y);
    });
    const A = g > 1e-30 && x > 1e-30 ? 0.07 * x / g : 1;
    return r.map((u, Y) => {
      var _a2;
      const B = ((_a2 = o.get(Y)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return u.map((X, k) => X + B[k] * A);
    });
  });
}
const St = C.state(null), Ft = C.state("");
function Pe(t, e) {
  const r = C.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), C.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), u = (s, i) => {
      s == null ? void 0 : s.forEach((l, p) => {
        const w = t.elements.val[p];
        if (w) for (let F = 0; F < w.length; F++) i.set(w[F], [l[F] ?? l[0]]);
      });
    };
    u((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), u((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), u((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, d), u((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, c), u((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, m), u((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, v), u((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, x), u((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), u((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, f), u((_t2 = (_s = t.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, A);
    const Y = (_v = (_u = t.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, B = e.shellResults.val, X = Y == null ? void 0 : Y[B];
    St.val = Array.isArray(X) && X.length === 2 ? [X[0], X[1]] : null;
    const k = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [d, 0], membraneXX: [c, 0], membraneYY: [m, 0], membraneXY: [v, 0], tranverseShearX: [x, 0], tranverseShearY: [g, 0], vonMises: [f, 0], pressure: [A, 0], displacementX: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = t.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = t.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, z = e.shellResults.val, V = z === "displacementX" || z === "displacementY" || z === "displacementZ", M = V ? 1e3 : 1, y = V ? "mm" : z === "bendingXX" || z === "bendingYY" || z === "bendingXY" ? "kN\xB7m/m" : z === "membraneXX" || z === "membraneYY" || z === "membraneXY" ? "kN/m" : z === "vonMises" || z === "pressure" ? "kN/m\xB2" : z === "tranverseShearX" || z === "tranverseShearY" ? "kN/m" : "";
    Ft.val = y;
    const h = [];
    t.nodes.val.forEach((s, i) => {
      const l = k[z];
      if (!l || !l[0] || typeof l[0].has != "function") return;
      if (!l[0].has(i)) {
        h.push(Number.NaN);
        return;
      }
      const p = l[0].get(i), w = p ? p[l[1]] ?? 0 : 0;
      h.push(w * M);
    }), r.val = h;
  }), r;
}
export {
  ye as a,
  Xt as b,
  Ie as g
};
