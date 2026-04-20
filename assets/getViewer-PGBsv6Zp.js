import { H as ct, B as L, I as dt, F as K, G as U, h as It, a as et, j as Q, D as O, e as D, C as $, l as Rt, i as Lt, V as E, A as tt, z as G, J as Mt, d as Xt, L as nt, c as N, r as ut, K as ht, R as kt, f as Zt, N as Wt, U as Ht, X as St, Y as rt, Z as _t, _ as Nt, t as $t, u as Gt, v as qt, W as Kt, w as Ut, x as Dt, y as zt, O as Qt } from "./Text-CBH-tcJP.js";
import { v as C, P as Jt, g as j, o as pt } from "./theme-CzzIlc4y.js";
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
  return { gridSize: C.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: C.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: C.state((t == null ? void 0 : t.nodes) ?? true), elements: C.state((t == null ? void 0 : t.elements) ?? true), elemColumns: C.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: C.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: C.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: C.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: C.state((t == null ? void 0 : t.orientations) ?? false), sections: C.state((t == null ? void 0 : t.sections) ?? true), secColumns: C.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: C.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: C.state((t == null ? void 0 : t.secFloor) ?? -1), supports: C.state((t == null ? void 0 : t.supports) ?? true), loads: C.state((t == null ? void 0 : t.loads) ?? false), deformedShape: C.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: C.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: C.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: C.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: C.state((t == null ? void 0 : t.flipAxes) ?? false), solids: C.state((t == null ? void 0 : t.solids) ?? true) };
}
function te(t, e, r) {
  const o = j(), n = new ct(new L(), new dt({ color: o.nodePoint }));
  return pt((a, d) => {
    n.material.color.setHex(d.nodePoint);
  }), n.frustumCulled = false, C.derive(() => {
    t.nodes.val && n.geometry.setAttribute("position", new K(e.val.flat(), 3));
  }), C.derive(() => {
    r.val;
    const a = 0.05 * t.gridSize.val * 0.5;
    t.nodes.rawVal && (n.material.size = a * r.rawVal);
  }), C.derive(() => {
    n.visible = t.nodes.val;
  }), n;
}
function ee(t, e, r) {
  const o = j(), n = new U(), a = new It(new L(), new et({ color: o.elementLine }));
  pt((w, S) => {
    a.material.color.setHex(S.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const d = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), l = new D(new L(), d);
  l.frustumCulled = false, n.add(l);
  let m = new $(o.shellWall), y = new $(o.shellSlab), M = new $(o.shellTri);
  pt((w, S) => {
    m = new $(S.shellWall), y = new $(S.shellSlab), M = new $(S.shellTri), d.opacity = S.shellOpacity, d.needsUpdate = true;
  });
  function g(w, S) {
    const c = Math.abs(S[0] - w[0]), T = Math.abs(S[1] - w[1]), B = Math.abs(S[2] - w[2]);
    return B > c && B > T || T > c && T > B;
  }
  return C.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const w = e.elemColumns.rawVal, S = e.elemBeams.rawVal, c = r.val, T = ((_a = t.elements) == null ? void 0 : _a.val) || [], B = T.filter((V) => {
      if (V.length !== 2) return true;
      const v = c[V[0]], f = c[V[1]];
      if (!v || !f) return true;
      const u = g(v, f);
      return !(u && !w || !u && !S);
    }).map((V) => ne(V).map((v) => [...c[v[0]], ...c[v[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new K(B, 3));
    const I = [], k = [];
    function P(V, v, f, u) {
      const s = [v[0] - V[0], v[1] - V[1], v[2] - V[2]], i = [u[0] - V[0], u[1] - V[1], u[2] - V[2]], p = s[1] * i[2] - s[2] * i[1], h = s[2] * i[0] - s[0] * i[2], x = s[0] * i[1] - s[1] * i[0], F = Math.sqrt(p * p + h * h + x * x);
      return F < 1e-12 ? false : Math.abs(x / F) < 0.5;
    }
    for (const V of T) if (V.length === 3) {
      const [v, f, u] = V;
      if (c[v] && c[f] && c[u]) {
        I.push(...c[v], ...c[f], ...c[u]);
        for (let s = 0; s < 3; s++) k.push(M.r, M.g, M.b);
      }
    } else if (V.length === 4) {
      const [v, f, u, s] = V;
      if (c[v] && c[f] && c[u] && c[s]) {
        const i = P(c[v], c[f], c[u], c[s]) ? m : y;
        I.push(...c[v], ...c[f], ...c[u]), I.push(...c[v], ...c[u], ...c[s]);
        for (let p = 0; p < 6; p++) k.push(i.r, i.g, i.b);
      }
    }
    I.length > 0 ? (l.geometry.dispose(), l.geometry = new L(), l.geometry.setAttribute("position", new K(I, 3)), l.geometry.setAttribute("color", new K(k, 3)), l.geometry.computeVertexNormals(), l.visible = true) : l.visible = false;
  }), C.derive(() => {
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
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((m, y) => {
      const M = r.val[y];
      if (!M) return;
      const g = new D(a, d);
      g.position.set(...M);
      const w = l * o.rawVal;
      g.scale.set(w, w, w), n.add(g);
    });
  }), C.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const m = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((y) => y.scale.set(m, m, m));
  }), C.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function se(t, e, r, o) {
  const n = new U();
  n.name = "loadsGroup";
  function a(d) {
    if (d.length < 2) return 0.12 * e.gridSize.rawVal;
    const l = [1 / 0, 1 / 0, 1 / 0], m = [-1 / 0, -1 / 0, -1 / 0];
    for (const M of d) for (let g = 0; g < 3; g++) l[g] = Math.min(l[g], M[g]), m[g] = Math.max(m[g], M[g]);
    return 0.08 * Math.max(m[0] - l[0], m[1] - l[1], m[2] - l[2], 0.1);
  }
  return C.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((m) => m.dispose()), n.clear();
    const d = r.val, l = a(d);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((m, y) => {
      const M = d[y];
      if (!M) return;
      const g = new E(...m.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const w = new tt(g, new E(...M), 1, 15637248, 0.3, 0.3), S = l * o.rawVal;
      w.scale.set(S, S, S), n.add(w);
    });
  }), C.derive(() => {
    if (o.val, !e.loads.rawVal) return;
    const l = a(r.rawVal) * o.rawVal;
    n.children.forEach((m) => m.scale.set(l, l, l));
  }), C.derive(() => {
    n.visible = e.loads.val;
  }), n;
}
function ie(t, e, r) {
  const o = new U();
  return C.derive(() => {
    if (!t.nodesIndexes.val) return;
    o.children.forEach((a) => a.dispose()), o.clear();
    const n = 0.05 * t.gridSize.val * 0.6;
    e.val.forEach((a, d) => {
      const l = new G(`${d}`);
      l.position.set(...a), l.updateScale(n * r.rawVal), o.add(l);
    });
  }), C.derive(() => {
    if (r.val, !t.nodesIndexes.rawVal) return;
    const n = 0.05 * t.gridSize.val * 0.6;
    o.children.forEach((a) => a.updateScale(n * r.rawVal));
  }), C.derive(() => {
    o.visible = t.nodesIndexes.val;
  }), o;
}
function ae(t, e, r, o) {
  const n = new U();
  return C.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const a = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((d, l) => {
      const m = new G(`${l}`, void 0, "#001219");
      m.position.set(...re(d.map((y) => r.rawVal[y]))), m.updateScale(a * o.rawVal), n.add(m);
    });
  }), C.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const a = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((d) => d.updateScale(a * o.rawVal));
  }), C.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function re(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function le(t, e) {
  const r = new U(), o = 0.05 * t * 1, n = j(), a = new G("X", "red", "transparent"), d = new G(e ? "Z" : "Y", "green", "transparent"), l = new G(e ? "Y" : "Z", "blue", "transparent"), m = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), y = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), M = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * o, 0, 0), d.position.set(0, 1.3 * o, 0), l.position.set(0, 0, 1.3 * o), a.updateScale(0.4 * o), d.updateScale(0.4 * o), l.updateScale(0.4 * o), m.scale.set(o, o, o), y.scale.set(o, o, o), M.scale.set(o, o, o), r.add(m, y, M, a, d, l), r;
}
function Ft(t, e) {
  const r = new E(...t), n = new E(...e).clone().sub(r), a = n.length(), d = n.dot(new E(1, 0, 0)) / a, l = n.dot(new E(0, 1, 0)) / a, m = n.dot(new E(0, 0, 1)) / a, y = Math.sqrt(d ** 2 + l ** 2);
  let M = new Mt().fromArray([[d, l, m], [-l / y, d / y, 0], [-d * m / y, -l * m / y, y]].flat());
  return m === 1 && (M = new Mt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), m === -1 && (M = new Mt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Xt().setFromMatrix3(M);
}
function gt(t, e) {
  return t == null ? void 0 : t.map((r, o) => (9 * r + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function ce(t, e, r) {
  const o = ot([e, r]), n = ot([t, r]), a = ot([t, e]), d = new E(...o).sub(new E(...n)).normalize(), l = new E(...r).sub(new E(...a)).normalize(), m = d.clone().cross(l).normalize(), y = m.clone().cross(d).normalize();
  return new Xt().makeBasis(d, y, m);
}
function de(t, e, r, o) {
  const n = new U(), a = new L(), d = new et({ vertexColors: true }), l = [0, 0, 0], m = [1, 0, 0], y = [0, 1, 0], M = [0, 0, 1];
  a.setAttribute("position", new K([...l, ...m, ...l, ...y, ...l, ...M], 3));
  const g = [255, 0, 0], w = [0, 255, 0], S = [0, 0, 255];
  return a.setAttribute("color", new K([...g, ...g, ...w, ...w, ...S, ...S], 3)), C.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((c) => {
      const T = new It(a, d), B = r.rawVal[c[0]], I = r.rawVal[c[1]];
      if (c.length === 2 && (T.position.set(...gt(B, I)), T.rotation.setFromRotationMatrix(Ft(B, I))), c.length === 3) {
        const V = r.rawVal[c[2]];
        T.position.set(...ot([B, I, V])), T.rotation.setFromRotationMatrix(ce(B, I, V));
      }
      const P = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      T.scale.set(P, P, P), n.add(T);
    }));
  }), C.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const T = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((B) => B.scale.set(T, T, T));
  }), C.derive(() => {
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
  function a(v, f) {
    const u = v / 2, s = f / 2, i = new Float32Array([0, -u, -s, 0, u, -s, 0, u, s, 0, -u, -s, 0, u, s, 0, -u, s]), p = new L();
    p.setAttribute("position", new N(i, 3));
    const h = new Float32Array([0, -u, -s, 0, u, -s, 0, u, s, 0, -u, s, 0, -u, -s]), x = new L();
    return x.setAttribute("position", new N(h, 3)), { fill: p, outline: x };
  }
  function d(v, f = 24) {
    const u = v / 2, s = new Float32Array(f * 9);
    for (let x = 0; x < f; x++) {
      const F = x / f * Math.PI * 2, A = (x + 1) / f * Math.PI * 2;
      s[x * 9] = 0, s[x * 9 + 1] = 0, s[x * 9 + 2] = 0, s[x * 9 + 3] = 0, s[x * 9 + 4] = u * Math.cos(F), s[x * 9 + 5] = u * Math.sin(F), s[x * 9 + 6] = 0, s[x * 9 + 7] = u * Math.cos(A), s[x * 9 + 8] = u * Math.sin(A);
    }
    const i = new L();
    i.setAttribute("position", new N(s, 3));
    const p = new Float32Array((f + 1) * 3);
    for (let x = 0; x <= f; x++) {
      const F = x / f * Math.PI * 2;
      p[x * 3] = 0, p[x * 3 + 1] = u * Math.cos(F), p[x * 3 + 2] = u * Math.sin(F);
    }
    const h = new L();
    return h.setAttribute("position", new N(p, 3)), { fill: i, outline: h };
  }
  function l(v, f, u, s) {
    const i = u ?? f * 0.08, p = s ?? v * 0.07, h = v / 2, x = f / 2, F = x - i, A = p / 2, X = [];
    function b(Y, W, H, _) {
      X.push(0, Y, W, 0, H, W, 0, H, _, 0, Y, W, 0, H, _, 0, Y, _);
    }
    b(-h, -x, h, -F), b(-A, -F, A, F), b(-h, F, h, x);
    const z = new L();
    z.setAttribute("position", new N(new Float32Array(X), 3));
    const R = new Float32Array([0, -h, -x, 0, h, -x, 0, h, -F, 0, A, -F, 0, A, F, 0, h, F, 0, h, x, 0, -h, x, 0, -h, F, 0, -A, F, 0, -A, -F, 0, -h, -F, 0, -h, -x]), Z = new L();
    return Z.setAttribute("position", new N(R, 3)), { fill: z, outline: Z };
  }
  function m(v, f, u) {
    const s = v / 2, i = f / 2, p = s - u, h = i - u, x = [];
    function F(z, R, Z, Y) {
      x.push(0, z, R, 0, Z, R, 0, Z, Y, 0, z, R, 0, Z, Y, 0, z, Y);
    }
    F(-s, -i, s, -h), F(-s, h, s, i), F(-s, -h, -p, h), F(p, -h, s, h);
    const A = new L();
    A.setAttribute("position", new N(new Float32Array(x), 3));
    const X = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -p, -h, 0, p, -h, 0, p, -h, 0, p, h, 0, p, h, 0, -p, h, 0, -p, h, 0, -p, -h]), b = new L();
    return b.setAttribute("position", new N(X, 3)), { fill: A, outline: b };
  }
  function y(v, f, u) {
    const s = v / 2, i = f / 2, p = s - u, h = i - u, x = new L(), F = new Float32Array([0, -p, -h, 0, p, -h, 0, p, h, 0, -p, -h, 0, p, h, 0, -p, h]);
    x.setAttribute("position", new N(F, 3));
    const A = [];
    function X(Z, Y, W, H) {
      A.push(0, Z, Y, 0, W, Y, 0, W, H, 0, Z, Y, 0, W, H, 0, Z, H);
    }
    X(-s, -i, s, -h), X(-s, h, s, i), X(-s, -h, -p, h), X(p, -h, s, h);
    const b = new L();
    b.setAttribute("position", new N(new Float32Array(A), 3));
    const z = new Float32Array([0, -s, -i, 0, s, -i, 0, s, -i, 0, s, i, 0, s, i, 0, -s, i, 0, -s, i, 0, -s, -i, 0, -p, -h, 0, p, -h, 0, p, -h, 0, p, h, 0, p, h, 0, -p, h, 0, -p, h, 0, -p, -h]), R = new L();
    return R.setAttribute("position", new N(z, 3)), { concFill: x, steelFillGeom: b, outline: R };
  }
  function M(v, f, u) {
    const s = [], i = [[0, -v / 2, -f / 2], [0, -v / 2 + u, -f / 2], [0, -v / 2 + u, f / 2 - u], [0, v / 2, f / 2 - u], [0, v / 2, f / 2], [0, -v / 2, f / 2]], p = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of p) s.push(...i[A]);
    const h = new L();
    h.setAttribute("position", new N(new Float32Array(s), 3));
    const x = [];
    for (let A = 0; A < i.length; A++) {
      const X = (A + 1) % i.length;
      x.push(...i[A], ...i[X]);
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(x), 3)), { fill: h, outline: F };
  }
  function g(v, f, u, s) {
    const i = s / 2, p = [], h = [[0, -v - i, -f / 2], [0, -u - i, -f / 2], [0, -u - i, f / 2 - u], [0, -i, f / 2 - u], [0, -i, f / 2], [0, -v - i, f / 2]], x = [[0, i, -f / 2], [0, i + u, -f / 2], [0, i + u, f / 2 - u], [0, v + i, f / 2 - u], [0, v + i, f / 2], [0, i, f / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const z of F) p.push(...h[z]);
    for (const z of F) p.push(...x[z]);
    const A = new L();
    A.setAttribute("position", new N(new Float32Array(p), 3));
    const X = [];
    for (const z of [h, x]) for (let R = 0; R < z.length; R++) {
      const Z = (R + 1) % z.length;
      X.push(...z[R], ...z[Z]);
    }
    const b = new L();
    return b.setAttribute("position", new N(new Float32Array(X), 3)), { fill: A, outline: b };
  }
  function w(v, f, u, s) {
    const i = f / 2, p = v, h = [[0, -p, -i], [0, -p, -i + u], [0, -s, -i + u], [0, -s, i - u], [0, -p, i - u], [0, -p, i], [0, 0, i], [0, 0, -i]], x = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
    for (const z of x) F.push(...h[z]);
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
  function S(v, f, u, s, i) {
    const p = f / 2, h = i / 2, x = [], F = [[0, -v, -p], [0, -v, -p + u], [0, -h - s, -p + u], [0, -h - s, p - u], [0, -v, p - u], [0, -v, p], [0, -h, p], [0, -h, -p]], A = F.map((Z) => [Z[0], -Z[1], Z[2]]), X = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of X) x.push(...F[Z]);
    for (const Z of X) x.push(...A[Z]);
    const b = new L();
    b.setAttribute("position", new N(new Float32Array(x), 3));
    const z = [];
    for (const Z of [F, A]) for (let Y = 0; Y < Z.length; Y++) {
      const W = (Y + 1) % Z.length;
      z.push(...Z[Y], ...Z[W]);
    }
    const R = new L();
    return R.setAttribute("position", new N(new Float32Array(z), 3)), { fill: b, outline: R };
  }
  function c(v, f, u, s) {
    const i = v / 2, p = f / 2, h = s / 2, x = [[0, -h, -p], [0, h, -p], [0, h, p - u], [0, i, p - u], [0, i, p], [0, -i, p], [0, -i, p - u], [0, -h, p - u]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], A = [];
    for (const R of F) A.push(...x[R]);
    const X = new L();
    X.setAttribute("position", new N(new Float32Array(A), 3));
    const b = [];
    for (let R = 0; R < x.length; R++) {
      const Z = (R + 1) % x.length;
      b.push(...x[R], ...x[Z]);
    }
    const z = new L();
    return z.setAttribute("position", new N(new Float32Array(b), 3)), { fill: X, outline: z };
  }
  function T(v, f, u = 24) {
    const s = v / 2, i = s - f, p = [];
    for (let A = 0; A < u; A++) {
      const X = A / u * Math.PI * 2, b = (A + 1) / u * Math.PI * 2, z = Math.cos(X), R = Math.sin(X), Z = Math.cos(b), Y = Math.sin(b);
      p.push(0, s * z, s * R, 0, s * Z, s * Y, 0, i * Z, i * Y), p.push(0, s * z, s * R, 0, i * Z, i * Y, 0, i * z, i * R);
    }
    const h = new L();
    h.setAttribute("position", new N(new Float32Array(p), 3));
    const x = [];
    for (let A = 0; A < u; A++) {
      const X = A / u * Math.PI * 2, b = (A + 1) / u * Math.PI * 2;
      x.push(0, s * Math.cos(X), s * Math.sin(X), 0, s * Math.cos(b), s * Math.sin(b)), x.push(0, i * Math.cos(X), i * Math.sin(X), 0, i * Math.cos(b), i * Math.sin(b));
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(x), 3)), { fill: h, outline: F };
  }
  const B = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), I = new et({ color: 52479 }), k = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), P = new et({ color: 16750848 });
  function V(v, f) {
    const u = Math.abs(f[0] - v[0]), s = Math.abs(f[1] - v[1]), i = Math.abs(f[2] - v[2]);
    return i > u && i > s || s > u && s > i;
  }
  return C.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const v = e.secColumns.rawVal, f = e.secBeams.rawVal;
    if (!v && !f) {
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
      const F = r.rawVal[h[0]], A = r.rawVal[h[1]];
      if (!F || !A) return;
      const X = V(F, A);
      if (X && !v || !X && !f) return;
      if (p >= 0) {
        const Y = Math.min(F[1], A[1]);
        Math.max(F[1], A[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(Y / W + 0.01) !== p) return;
      }
      const b = i == null ? void 0 : i.get(x);
      if (!b) return;
      const z = [(F[0] + A[0]) / 2, (F[1] + A[1]) / 2, (F[2] + A[2]) / 2], R = Ft(F, A);
      if (b.type === "CFT") {
        const Y = y(b.b, b.h, b.tw ?? b.b * 0.05), W = new D(Y.concFill, B);
        W.position.set(...z), W.rotation.setFromRotationMatrix(R), n.add(W);
        const H = new D(Y.steelFillGeom, k);
        H.position.set(...z), H.rotation.setFromRotationMatrix(R), n.add(H);
        const _ = new nt(Y.outline, P);
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
            Y = l(b.b, b.h, b.tf, b.tw), W = k, H = P;
            break;
          case "HSS":
            Y = m(b.b, b.h, b.tw ?? b.b * 0.05), W = k, H = P;
            break;
          case "CFT":
            Y = y(b.b, b.h, b.tw ?? b.b * 0.05), W = k, H = P;
            break;
          case "L":
            Y = M(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3), W = k, H = P;
            break;
          case "2L":
            Y = g(b.b ?? b.h, b.h, b.t ?? b.tw ?? 3e-3, b.dis ?? 0.01), W = k, H = P;
            break;
          case "C":
          case "coldC":
            Y = w(b.b, b.h, b.tf ?? b.t ?? 3e-3, b.tw ?? b.t ?? 3e-3), W = k, H = P;
            break;
          case "2C":
            Y = S(b.b, b.h, b.tf ?? 5e-3, b.tw ?? 5e-3, b.dis ?? 0.01), W = k, H = P;
            break;
          case "T":
            Y = c(b.b, b.h, b.tf ?? 0.01, b.tw ?? 6e-3), W = k, H = P;
            break;
          case "pipe":
            Y = T(b.d, b.tw ?? b.d * 0.05), W = k, H = P;
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
  }), o && C.derive(() => {
    if (o.val, !e.sections.rawVal) return;
    const v = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((f) => {
      f instanceof G && f.updateScale(v * o.rawVal);
    });
  }), C.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends U {
  constructor(e, r, o, n, a, d, l) {
    super();
    const m = new ut().moveTo(0, 0).lineTo(0, d[1]).lineTo(o, d[1]).lineTo(o, 0).lineTo(0, 0), y = m.getPoints(), M = new L().setFromPoints(y);
    this.lines = new nt(M, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new ht(m), w = new Q({ color: d[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(g, w), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new G(`${a[1].toFixed(4)}`), this.normalizedResult = d, this.textPosition = ot([e, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
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
    const m = a[0] * o / (a[0] + a[1]), y = a[0] * a[1] > 0;
    if (this.text = new G(`${a[0].toFixed(4)}`), this.text2 = new G(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = d, this.textPosition = gt(e, r), this.text2Position = gt(r, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), y) {
      const M = new ut().moveTo(0, 0).lineTo(0, d[0]).lineTo(m, 0).lineTo(0, 0), g = new ut().moveTo(m, 0).lineTo(o, -d[1]).lineTo(o, 0).lineTo(m, 0), w = M.getPoints(), S = g.getPoints(), c = new L().setFromPoints(w), T = new L().setFromPoints(S), B = new et({ color: j().resultOutline });
      this.lines = new nt(c, B), this.lines2 = new nt(T, B), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), l && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const I = new ht(M), k = new ht(g), P = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: O }), V = new Q({ color: -d[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(I, P), this.mesh2 = new D(k, V), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), l && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const M = new ut().moveTo(0, 0).lineTo(0, d[0]).lineTo(o, -d[1]).lineTo(o, 0).lineTo(0, 0), g = M.getPoints(), w = new L().setFromPoints(g);
      this.lines = new nt(w, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const S = new ht(M), c = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: O });
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
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, r.val, e.frameResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const d = Et[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[d]) == null ? void 0 : _b.forEach((l, m) => {
      var _a2, _b2;
      const y = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[m]) ?? [0, 1], M = r.rawVal[y[0]], g = r.rawVal[y[1]], w = new E(...g).distanceTo(new E(...M)), S = me((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[d]), c = l == null ? void 0 : l.map((k) => k / (S === 0 ? 1 : S)), T = Ft(M, g), B = new a[d](M, g, w, T, l ?? [0, 0], c ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(d)), I = 0.05 * e.gridSize.rawVal;
      B.updateScale(I * o.rawVal), n.add(B);
    });
  }), C.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const d = 0.05 * e.gridSize.val;
    n.children.forEach((l) => l.updateScale(d * o.rawVal));
  }), C.derive(() => {
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
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const a = Ct[e.nodeResults.rawVal], d = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((l, m) => {
      const y = new fe(r.rawVal[m], a, l ?? [0, 0, 0, 0, 0, 0]);
      y.updateScale(d * o.rawVal), n.add(y);
    });
  }), C.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const a = 0.05 * e.gridSize.val;
    n.children.forEach((d) => d.updateScale(a * o.rawVal));
  }), C.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function ve({ drawingObj: t, gridObj: e, scene: r, camera: o, controls: n, gridSize: a, derivedDisplayScale: d, rendererElm: l, viewerRender: m }) {
  const y = new kt(), M = new Zt(), g = new D(new Wt(a, a), new Q({ side: O })), w = new ct(new L(), new dt()), S = new ct(new L(), new dt({ color: "gray" })), c = new ct(new L(), new dt({ color: "orange", size: 0.8 }));
  r.add(c), w.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), w.geometry.computeBoundingSphere(), w.frustumCulled = false, S.frustumCulled = false, r.add(S), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), C.derive(() => {
    t.gridTarget && (xe(e, { position: new E(...t.gridTarget.val.position), quaternion: new Ht().setFromEuler(new St(...t.gridTarget.val.rotation)) }, m), g.position.set(...t.gridTarget.val.position), g.quaternion.setFromEuler(new St(...t.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), C.derive(() => {
    w.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), w.geometry.computeBoundingSphere();
  }), C.derive(() => {
    const P = 0.05 * a * 0.5 * d.val;
    S.material.size = P, y.params.Points.threshold = 0.4 * P;
  }), C.derive(() => {
    var _a;
    const P = t.points.val ?? [], v = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], f = [];
    for (const s of v) {
      const [i, p, h] = P[s];
      f.push(i, p, h);
    }
    const u = new L();
    u.setAttribute("position", new K(f, 3)), c.geometry.dispose(), c.geometry = u;
  });
  let T = false, B = 0;
  l.addEventListener("pointerdown", () => {
    T = true;
  }), l.addEventListener("pointerup", () => {
    T = false;
  }), l.addEventListener("pointermove", () => {
    T && B++;
  }), l.addEventListener("click", (P) => {
    if (B > 5) {
      B = 0;
      return;
    }
    B = 0, M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    const V = y.intersectObject(g);
    if (V.length) {
      let v = V[0].point;
      (P.ctrlKey || P.metaKey) && (v = new E(Math.round(V[0].point.x), Math.round(V[0].point.y), Math.round(V[0].point.z))), t.points.val = [...t.points.rawVal, v.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), l.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), l.addEventListener("pointermove", (P) => {
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    const V = y.intersectObject(g);
    if (S.geometry.deleteAttribute("position"), V.length) {
      let v = V[0].point;
      (P.ctrlKey || P.metaKey) && (v = new E(Math.round(V[0].point.x), Math.round(V[0].point.y), Math.round(V[0].point.z))), S.geometry.setAttribute("position", new K(v.toArray(), 3));
    }
    m();
  }), l.addEventListener("pointermove", (P) => {
    var _a;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    let V = false;
    const v = y.intersectObject(w), f = y.intersectObject(g);
    if (v.length && f.length) {
      const u = new E(...t.points.rawVal[v[0].index]), s = new E(...f[0].point), i = u.sub(s), p = (_a = f[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(g.matrixWorld), Math.abs(i.dot(p)) < 1e-4 && (V = true);
    }
    S.visible = !V;
  });
  let I = false, k;
  l.addEventListener("pointermove", (P) => {
    var _a;
    if (!B) return;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    let V = false;
    const v = y.intersectObject(w), f = y.intersectObject(g);
    if (v.length && f.length) {
      const s = new E(...t.points.rawVal[v[0].index]), i = new E(...f[0].point), p = s.sub(i), h = (_a = f[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(g.matrixWorld), Math.abs(p.dot(h)) < 1e-4 && (V = true);
    }
    if (V && B < 5 && (I = true, n.enabled = false, k = v[0].index), !I || B % 2 !== 0) return;
    const u = [...t.points.rawVal];
    if (k !== void 0) {
      let s = f[0].point;
      (P.ctrlKey || P.metaKey) && (s = new E(Math.round(s.x), Math.round(s.y), Math.round(s.z))), u[k] = s.toArray();
    }
    t.points.val = u;
  }), l.addEventListener("pointerup", () => {
    n.enabled = true, I = false;
  }), l.addEventListener("contextmenu", (P) => {
    var _a;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    let V = false;
    const v = y.intersectObject(w), f = y.intersectObject(g);
    if (v.length && f.length) {
      const i = new E(...t.points.rawVal[v[0].index]), p = new E(...f[0].point), h = i.sub(p), x = (_a = f[0].face) == null ? void 0 : _a.normal;
      x.transformDirection(g.matrixWorld), Math.abs(h.dot(x)) < 1e-4 && (V = true);
    }
    if (!V) return;
    const u = [...t.points.rawVal];
    if (u.splice(v[0].index, 1), t.points.val = u, !t.polylines) return;
    const s = t.polylines.rawVal.map((i) => i.filter((p) => p !== v[0].index)).map((i) => i.map((p) => p > v[0].index ? p - 1 : p)).filter((i) => i.length);
    s.push([]), t.polylines.val = s;
  });
}
function xe(t, e, r) {
  const a = Math.round(14.999999999999998), d = { position: t.position.clone(), quaternion: t.quaternion.clone() }, l = setInterval(y, 1e3 / 30);
  let m = 0;
  function y() {
    m++;
    const M = m / a;
    t.position.lerpVectors(d.position, e.position, M), t.quaternion.slerpQuaternions(d.quaternion, e.quaternion, M), r && r(), m == a && clearInterval(l);
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
        const y = this.map[m][0], M = this.map[m + 1][0];
        n.setHex(this.map[m][1], rt), a.setHex(this.map[m + 1][1], rt);
        const g = new $().lerpColors(n, a, (l - y) / (M - y));
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
    const d = 1 / this.n, l = new $(), m = new $(), y = new $();
    for (let M = 1; M >= 0; M -= d) for (let g = this.map.length - 1; g >= 0; g--) if (M < this.map[g][0] && M >= this.map[g - 1][0]) {
      const w = this.map[g - 1][0], S = this.map[g][0];
      l.setHex(this.map[g - 1][1], rt), m.setHex(this.map[g][1], rt), y.lerpColors(l, m, (M - w) / (S - w)), n[a * 4] = Math.round(y.r * 255), n[a * 4 + 1] = Math.round(y.g * 255), n[a * 4 + 2] = Math.round(y.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(o, 0, 0), e;
  }
}
const yt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function Me(t, e, r) {
  const o = new Bt(), n = new $(), a = new D(new L(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, C.derive(() => {
    a.geometry.setAttribute("position", new K(t.val.flat(), 3));
    const d = [];
    for (const c of e.val) c.length === 3 ? d.push(c[0], c[1], c[2]) : c.length === 4 && (d.push(c[0], c[1], c[2]), d.push(c[0], c[2], c[3]));
    a.geometry.setIndex(new Nt(d, 1)), a.geometry.setAttribute("color", new K(t.val.map(() => [0, 0, 0]).flat(), 3));
    const l = r.val.filter((c) => Number.isFinite(c));
    let m, y;
    const M = Vt.val;
    if (M ? (y = M[0], m = M[1]) : (m = l.length ? Math.max(...l) : 1, y = l.length ? Math.min(...l) : 0, y >= 0 && m > 0 && (y = 0)), m === y) {
      const c = Math.max(Math.abs(m) * 1e-6, 1e-9);
      m += c, y -= c;
    }
    const g = M && M[0] > M[1], w = Math.min(y, m), S = Math.max(y, m);
    o.setMin(w), o.setMax(S);
    for (let c = 0; c < r.val.length; c++) {
      const T = r.val[c];
      if (!Number.isFinite(T)) {
        a.geometry.attributes.color.setXYZ(c, 0.3, 0.3, 0.3);
        continue;
      }
      const B = g ? S + w - T : T, I = o.getColor(B) ?? new $(0, 0, 0);
      n.copy(I).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(c, n.r, n.g, n.b);
    }
  }), a;
}
function ye(t, e, r, o) {
  const n = Me(r, t.elements, o);
  return C.derive(() => {
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
  const d = new $(), l = C.state([]);
  return C.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const m = r.val, y = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], M = Fe(e.frameResults.val);
    if (n.children.forEach((x) => {
      x.geometry && x.geometry.dispose(), x.material && x.material.dispose();
    }), n.clear(), !M || y.length === 0 || m.length === 0) {
      l.val = [];
      return;
    }
    const g = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, w = (_c = t.deformOutputs) == null ? void 0 : _c.val, S = [], c = [];
    for (let x = 0; x < y.length; x++) {
      if (y[x].length !== 2) continue;
      const A = Ce(M, x, g, w);
      A && (S.push(A[0], A[1]), c.push({ idx: x, vals: A }));
    }
    if (S.length === 0) {
      l.val = [];
      return;
    }
    const T = Math.min(...S), B = Math.max(...S);
    a.setMin(T), a.setMax(B), l.val = S;
    const I = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of m) for (let F = 0; F < 3; F++) I[F] = Math.min(I[F], x[F]), k[F] = Math.max(k[F], x[F]);
    const V = Math.max(k[0] - I[0], k[1] - I[1], k[2] - I[2], 1) * ge, v = [], f = [], u = [];
    let s = 0;
    for (const { idx: x, vals: F } of c) {
      const A = y[x], X = m[A[0]], b = m[A[1]];
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
          v.push(st + (Y.x * vt + W.x * xt) * V, it + (Y.y * vt + W.y * xt) * V, mt + (Y.z * vt + W.z * xt) * V), f.push(d.r, d.g, d.b);
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
    i.setAttribute("position", new K(v, 3)), i.setAttribute("color", new K(f, 3)), i.setIndex(u), i.computeVertexNormals();
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
    C.derive(() => {
      o.forEach((l, m) => {
        const y = d[m];
        y && (y.innerText = Ae(t.val, l).toString());
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
  let y = l;
  const M = new Kt({ antialias: true });
  M.localClippingEnabled = true;
  const g = new Ut(l, M.domElement), w = jt(e), S = C.derive(() => w.displayScale.val === 0 ? 1 : w.displayScale.val > 0 ? w.displayScale.val : -1 / w.displayScale.val), c = Se(t, w);
  let T = Pt(w.gridSize.rawVal);
  a.appendChild(Ot(w, t, n)), a.setAttribute("id", "viewer"), a.appendChild(M.domElement), M.setPixelRatio(window.devicePixelRatio);
  const B = j();
  M.setClearColor(B.background, 1);
  const I = w.gridSize.rawVal, k = I * 0.5 + I * 0.5 / Math.tan(45 * 0.5);
  l.position.set(0.5 * I, 0.8 * -k, 0.5 * I), g.target.set(0.5 * I, 0.5 * I, 0), g.minDistance = 1, g.maxDistance = k * 2.5, g.zoomSpeed = 10, g.update(), d.add(T, le(w.gridSize.rawVal, w.flipAxes.rawVal)), new ResizeObserver((u) => {
    var _a, _b;
    for (const s of u) {
      const i = (_a = s.target) == null ? void 0 : _a.clientWidth, p = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || p === 0) continue;
      l.aspect = i / p, l.updateProjectionMatrix();
      const h = i / p, x = m.top;
      m.left = -x * h, m.right = x * h, m.updateProjectionMatrix(), M.setSize(i, p), V();
    }
  }).observe(a), g.addEventListener("change", V), C.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, w.displayScale.val, w.nodes.val, w.elements.val, w.elemColumns.val, w.elemBeams.val, w.nodesIndexes.val, w.elementsIndexes.val, w.orientations.val, w.sections.val, w.secColumns.val, w.secBeams.val, w.secFloor.val, w.supports.val, w.loads.val, w.deformedShape.val, w.nodeResults.val, w.frameResults.val, w.shellResults.val, setTimeout(V);
  });
  function V() {
    M.render(d, y);
  }
  function v(u) {
    y = u, g.object = u, g.update(), V();
  }
  if (t) {
    d.add(te(w, c, S), ee(t, w, c), ie(w, c, S), ae(t, w, c, S), oe(t, w, c, S), se(t, w, c, S), de(t, w, c, S), he(t, w, c, S), we(t, w, c, S), pe(t, w, c, S));
    const u = ze(t, w), s = ye(t, w, c, u), i = Yt(u);
    d.add(s), a.appendChild(i);
    const p = Ve(t, w, c);
    d.add(p);
    const h = p.__colorMapValues, x = Yt(h);
    x.id = "frame-legend", a.appendChild(x), C.derive(() => {
      const F = w.shellResults.val != "none", A = w.frameResults.val.startsWith("contour:");
      i.hidden = !F, s.visible = F, x.hidden = !A;
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
    p.color.setHSL(11, 43, 96), p.position.set(-10, 0, 30), d.add(p), C.derive(() => {
      (n == null ? void 0 : n.val.length) && (d.remove(...n.oldVal), d.add(...n.rawVal), V());
    }), C.derive(() => {
      n.rawVal.forEach((h) => h.visible = w.solids.val), V();
    });
  }
  o && C.derive(() => {
    (o == null ? void 0 : o.val.length) && (d.remove(...o.oldVal), d.add(...o.rawVal), V());
  }), r && ve({ drawingObj: r, gridObj: T, scene: d, camera: l, controls: g, gridSize: I, derivedDisplayScale: S, rendererElm: M.domElement, viewerRender: V }), pt((u, s) => {
    M.setClearColor(s.background, 1), d.remove(T), T.geometry.dispose(), T.material.dispose(), T = Pt(w.gridSize.rawVal), d.add(T), a.style.setProperty("--awatif-legend-color", s.legendMarker), V();
  });
  const f = { scene: d, perspCamera: l, orthoCamera: m, get camera() {
    return y;
  }, controls: g, renderer: M, rendererElm: M.domElement, render: V, setActiveCamera: v, settings: w };
  return a.__ctx = f, a;
}
function Se(t, e) {
  return C.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || r.length === 0) return r;
    let n = 1 / 0, a = 1 / 0, d = 1 / 0, l = -1 / 0, m = -1 / 0, y = -1 / 0;
    for (const c of r) c[0] < n && (n = c[0]), c[0] > l && (l = c[0]), c[1] < a && (a = c[1]), c[1] > m && (m = c[1]), c[2] < d && (d = c[2]), c[2] > y && (y = c[2]);
    const M = Math.sqrt((l - n) ** 2 + (m - a) ** 2 + (y - d) ** 2);
    let g = 0;
    o.forEach((c) => {
      const T = Math.sqrt(c[0] ** 2 + c[1] ** 2 + c[2] ** 2);
      T > g && (g = T);
    });
    const S = g > 1e-30 && M > 1e-30 ? 0.07 * M / g : 1;
    return r.map((c, T) => {
      var _a2;
      const B = ((_a2 = o.get(T)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return c.map((I, k) => I + B[k] * S);
    });
  });
}
const Vt = C.state(null);
function ze(t, e) {
  const r = C.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), C.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), c = (V, v) => {
      V == null ? void 0 : V.forEach((f, u) => {
        const s = t.elements.val[u];
        if (s) for (let i = 0; i < s.length; i++) v.set(s[i], [f[i] ?? f[0]]);
      });
    };
    c((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), c((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), c((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, d), c((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, l), c((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, m), c((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, y), c((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, M), c((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), c((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, w), c((_t2 = (_s = t.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, S);
    const T = (_v = (_u = t.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, B = e.shellResults.val, I = T == null ? void 0 : T[B];
    Vt.val = Array.isArray(I) && I.length === 2 ? [I[0], I[1]] : null;
    const k = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [d, 0], membraneXX: [l, 0], membraneYY: [m, 0], membraneXY: [y, 0], tranverseShearX: [M, 0], tranverseShearY: [g, 0], vonMises: [w, 0], pressure: [S, 0], displacementX: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = t.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = t.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, P = [];
    t.nodes.val.forEach((V, v) => {
      const f = k[e.shellResults.val];
      if (!f || !f[0] || typeof f[0].has != "function") return;
      if (!f[0].has(v)) {
        P.push(Number.NaN);
        return;
      }
      const u = f[0].get(v);
      P.push(u ? u[f[1]] ?? 0 : 0);
    }), r.val = P;
  }), r;
}
export {
  Me as a,
  Yt as b,
  Ie as g
};
