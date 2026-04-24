import { H as ce, B as k, I as de, F as q, G as U, d as Ie, L as te, r as Q, v as J, M as K, k as H, p as Le, x as ke, V as R, o as ee, T as D, J as be, i as Ee, a as ne, e as $, g as ue, K as he, R as Ze, h as We, N as _e, U as Ne, X as ze, Y as re, Z as $e, _ as He, j as De, l as Ge, m as qe, W as Ue, n as Ke, A as Qe, D as Pe, O as Oe } from "./Text-BCbgLTjz.js";
import { v as F, P as Je, g as j, o as pe } from "./theme-CzzIlc4y.js";
import "./styles-Y66YTQNs.js";
function je(e, t, r) {
  const s = document.createElement("div"), n = new Je({ title: "Settings", expanded: true, container: s });
  if (s.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.deformScale, "val", { label: "Deform scale", min: 0.1, max: 1e3, step: 0.1 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const a = n.addFolder({ title: "Analysis Inputs" });
    a.addBinding(e.supports, "val", { label: "Supports" }), a.addBinding(e.loads, "val", { label: "Loads" }), a.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), a.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const a = n.addFolder({ title: "Analysis Outputs" });
    a.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), a.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), a.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), a.addBinding(e.deformedShape, "val", { label: "Deformed shape" });
  }
  return r && n.addBinding(e.solids, "val", { label: "Solids" }), s;
}
function et(e) {
  return { gridSize: F.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: F.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: F.state((e == null ? void 0 : e.nodes) ?? true), elements: F.state((e == null ? void 0 : e.elements) ?? true), elemColumns: F.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: F.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: F.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: F.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: F.state((e == null ? void 0 : e.orientations) ?? false), sections: F.state((e == null ? void 0 : e.sections) ?? true), secColumns: F.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: F.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: F.state((e == null ? void 0 : e.secFloor) ?? -1), supports: F.state((e == null ? void 0 : e.supports) ?? true), loads: F.state((e == null ? void 0 : e.loads) ?? false), deformedShape: F.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: F.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: F.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: F.state((e == null ? void 0 : e.shellResults) ?? "none"), flipAxes: F.state((e == null ? void 0 : e.flipAxes) ?? false), solids: F.state((e == null ? void 0 : e.solids) ?? true), custom3D: F.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: F.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: F.state((e == null ? void 0 : e.deformScale) ?? 1) };
}
function tt(e, t, r) {
  const s = j(), n = new ce(new k(), new de({ color: s.nodePoint }));
  return pe((a, u) => {
    n.material.color.setHex(u.nodePoint);
  }), n.frustumCulled = false, F.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new q(t.val.flat(), 3));
  }), F.derive(() => {
    r.val;
    const a = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = a * r.rawVal);
  }), F.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function nt(e, t, r) {
  const s = j(), n = new U(), a = new Ie(new k(), new te({ color: s.elementLine }));
  pe((m, z) => {
    a.material.color.setHex(z.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const u = new Q({ vertexColors: true, transparent: true, opacity: s.shellOpacity, side: J, depthWrite: false }), d = new K(new k(), u);
  d.frustumCulled = false, n.add(d);
  let p = new H(s.shellWall), b = new H(s.shellSlab), v = new H(s.shellTri);
  pe((m, z) => {
    p = new H(z.shellWall), b = new H(z.shellSlab), v = new H(z.shellTri), u.opacity = z.shellOpacity, u.needsUpdate = true;
  });
  function g(m, z) {
    const w = Math.abs(z[0] - m[0]), I = Math.abs(z[1] - m[1]), L = Math.abs(z[2] - m[2]);
    return L > w && L > I || I > w && I > L;
  }
  return F.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const m = t.elemColumns.rawVal, z = t.elemBeams.rawVal, w = r.val, I = ((_a = e.elements) == null ? void 0 : _a.val) || [], L = I.filter((S) => {
      if (S.length !== 2) return true;
      const M = w[S[0]], y = w[S[1]];
      if (!M || !y) return true;
      const c = g(M, y);
      return !(c && !m || !c && !z);
    }).map((S) => ot(S).map((M) => [...w[M[0]], ...w[M[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new q(L, 3));
    const E = [], Z = [];
    function A(S, M, y, c) {
      const o = [M[0] - S[0], M[1] - S[1], M[2] - S[2]], i = [c[0] - S[0], c[1] - S[1], c[2] - S[2]], l = o[1] * i[2] - o[2] * i[1], h = o[2] * i[0] - o[0] * i[2], x = o[0] * i[1] - o[1] * i[0], C = Math.sqrt(l * l + h * h + x * x);
      return C < 1e-12 ? false : Math.abs(x / C) < 0.5;
    }
    for (const S of I) if (S.length === 3) {
      const [M, y, c] = S;
      if (w[M] && w[y] && w[c]) {
        E.push(...w[M], ...w[y], ...w[c]);
        for (let o = 0; o < 3; o++) Z.push(v.r, v.g, v.b);
      }
    } else if (S.length === 4) {
      const [M, y, c, o] = S;
      if (w[M] && w[y] && w[c] && w[o]) {
        const i = A(w[M], w[y], w[c], w[o]) ? p : b;
        E.push(...w[M], ...w[y], ...w[c]), E.push(...w[M], ...w[c], ...w[o]);
        for (let l = 0; l < 6; l++) Z.push(i.r, i.g, i.b);
      }
    }
    E.length > 0 ? (d.geometry.dispose(), d.geometry = new k(), d.geometry.setAttribute("position", new q(E, 3)), d.geometry.setAttribute("color", new q(Z, 3)), d.geometry.computeVertexNormals(), d.visible = true) : d.visible = false;
  }), F.derive(() => {
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
function st(e, t, r, s) {
  const n = new U(), a = new ke(0.5, 0.5, 0.5), u = new Q({ color: 10166822 });
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const d = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((p, b) => {
      const v = r.val[b];
      if (!v) return;
      const g = new K(a, u);
      g.position.set(...v);
      const m = d * s.rawVal;
      g.scale.set(m, m, m), n.add(g);
    });
  }), F.derive(() => {
    if (s.val, !t.supports.rawVal) return;
    const p = 0.05 * t.gridSize.val * 0.6 * s.rawVal;
    n.children.forEach((b) => b.scale.set(p, p, p));
  }), F.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function it(e, t, r, s) {
  const n = new U();
  n.name = "loadsGroup";
  function a(u) {
    if (u.length < 2) return 0.12 * t.gridSize.rawVal;
    const d = [1 / 0, 1 / 0, 1 / 0], p = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of u) for (let g = 0; g < 3; g++) d[g] = Math.min(d[g], v[g]), p[g] = Math.max(p[g], v[g]);
    return 0.08 * Math.max(p[0] - d[0], p[1] - d[1], p[2] - d[2], 0.1);
  }
  return F.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((p) => p.dispose()), n.clear();
    const u = r.val, d = a(u);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((p, b) => {
      const v = u[b];
      if (!v) return;
      const g = new R(...p.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const m = new ee(g, new R(...v), 1, 15637248, 0.3, 0.3), z = d * s.rawVal;
      m.scale.set(z, z, z), n.add(m);
    });
  }), F.derive(() => {
    if (s.val, !t.loads.rawVal) return;
    const d = a(r.rawVal) * s.rawVal;
    n.children.forEach((p) => p.scale.set(d, d, d));
  }), F.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function at(e, t, r) {
  const s = new U();
  return F.derive(() => {
    if (!e.nodesIndexes.val) return;
    s.children.forEach((a) => a.dispose()), s.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((a, u) => {
      const d = new D(`${u}`);
      d.position.set(...a), d.updateScale(n * r.rawVal), s.add(d);
    });
  }), F.derive(() => {
    if (r.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    s.children.forEach((a) => a.updateScale(n * r.rawVal));
  }), F.derive(() => {
    s.visible = e.nodesIndexes.val;
  }), s;
}
function rt(e, t, r, s) {
  const n = new U();
  return F.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((u) => u.dispose()), n.clear();
    const a = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((u, d) => {
      const p = new D(`${d}`, void 0, "#001219");
      p.position.set(...lt(u.map((b) => r.rawVal[b]))), p.updateScale(a * s.rawVal), n.add(p);
    });
  }), F.derive(() => {
    if (s.val, !t.elementsIndexes.rawVal) return;
    const a = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((u) => u.updateScale(a * s.rawVal));
  }), F.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function lt(e) {
  const t = e.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function ct(e, t) {
  const r = new U(), s = 0.05 * e * 1, n = j(), a = new D("X", "red", "transparent"), u = new D(t ? "Z" : "Y", "green", "transparent"), d = new D(t ? "Y" : "Z", "blue", "transparent"), p = new ee(new R(1, 0, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), b = new ee(new R(0, 1, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), v = new ee(new R(0, 0, 1), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * s, 0, 0), u.position.set(0, 1.3 * s, 0), d.position.set(0, 0, 1.3 * s), a.updateScale(0.4 * s), u.updateScale(0.4 * s), d.updateScale(0.4 * s), p.scale.set(s, s, s), b.scale.set(s, s, s), v.scale.set(s, s, s), r.add(p, b, v, a, u, d), r;
}
function Ce(e, t) {
  const r = new R(...e), n = new R(...t).clone().sub(r), a = n.length(), u = n.dot(new R(1, 0, 0)) / a, d = n.dot(new R(0, 1, 0)) / a, p = n.dot(new R(0, 0, 1)) / a, b = Math.sqrt(u ** 2 + d ** 2);
  let v = new be().fromArray([[u, d, p], [-d / b, u / b, 0], [-u * p / b, -d * p / b, b]].flat());
  return p === 1 && (v = new be().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), p === -1 && (v = new be().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Ee().setFromMatrix3(v);
}
function ge(e, t) {
  return e == null ? void 0 : e.map((r, s) => (9 * r + t[s]) / 10);
}
function oe(e) {
  const t = e.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function dt(e, t, r) {
  const s = oe([t, r]), n = oe([e, r]), a = oe([e, t]), u = new R(...s).sub(new R(...n)).normalize(), d = new R(...r).sub(new R(...a)).normalize(), p = u.clone().cross(d).normalize(), b = p.clone().cross(u).normalize();
  return new Ee().makeBasis(u, b, p);
}
function ut(e, t, r, s) {
  const n = new U(), a = new k(), u = new te({ vertexColors: true }), d = [0, 0, 0], p = [1, 0, 0], b = [0, 1, 0], v = [0, 0, 1];
  a.setAttribute("position", new q([...d, ...p, ...d, ...b, ...d, ...v], 3));
  const g = [255, 0, 0], m = [0, 255, 0], z = [0, 0, 255];
  return a.setAttribute("color", new q([...g, ...g, ...m, ...m, ...z, ...z], 3)), F.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((w) => {
      const I = new Ie(a, u), L = r.rawVal[w[0]], E = r.rawVal[w[1]];
      if (w.length === 2 && (I.position.set(...ge(L, E)), I.rotation.setFromRotationMatrix(Ce(L, E))), w.length === 3) {
        const S = r.rawVal[w[2]];
        I.position.set(...oe([L, E, S])), I.rotation.setFromRotationMatrix(dt(L, E, S));
      }
      const A = 0.05 * t.gridSize.rawVal * 0.75 * s.rawVal;
      I.scale.set(A, A, A), n.add(I);
    }));
  }), F.derive(() => {
    if (s.val, !t.orientations.rawVal) return;
    const I = 0.05 * t.gridSize.val * 0.75 * s.rawVal;
    n.children.forEach((L) => L.scale.set(I, I, I));
  }), F.derive(() => {
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
function pt(e, t, r, s) {
  const n = new U();
  function a(M, y) {
    const c = M / 2, o = y / 2, i = new Float32Array([0, -c, -o, 0, c, -o, 0, c, o, 0, -c, -o, 0, c, o, 0, -c, o]), l = new k();
    l.setAttribute("position", new $(i, 3));
    const h = new Float32Array([0, -c, -o, 0, c, -o, 0, c, o, 0, -c, o, 0, -c, -o]), x = new k();
    return x.setAttribute("position", new $(h, 3)), { fill: l, outline: x };
  }
  function u(M, y = 24) {
    const c = M / 2, o = new Float32Array(y * 9);
    for (let x = 0; x < y; x++) {
      const C = x / y * Math.PI * 2, V = (x + 1) / y * Math.PI * 2;
      o[x * 9] = 0, o[x * 9 + 1] = 0, o[x * 9 + 2] = 0, o[x * 9 + 3] = 0, o[x * 9 + 4] = c * Math.cos(C), o[x * 9 + 5] = c * Math.sin(C), o[x * 9 + 6] = 0, o[x * 9 + 7] = c * Math.cos(V), o[x * 9 + 8] = c * Math.sin(V);
    }
    const i = new k();
    i.setAttribute("position", new $(o, 3));
    const l = new Float32Array((y + 1) * 3);
    for (let x = 0; x <= y; x++) {
      const C = x / y * Math.PI * 2;
      l[x * 3] = 0, l[x * 3 + 1] = c * Math.cos(C), l[x * 3 + 2] = c * Math.sin(C);
    }
    const h = new k();
    return h.setAttribute("position", new $(l, 3)), { fill: i, outline: h };
  }
  function d(M, y, c, o) {
    const i = c ?? y * 0.08, l = o ?? M * 0.07, h = M / 2, x = y / 2, C = x - i, V = l / 2, Y = [];
    function f(X, W, _, N) {
      Y.push(0, X, W, 0, _, W, 0, _, N, 0, X, W, 0, _, N, 0, X, N);
    }
    f(-h, -x, h, -C), f(-V, -C, V, C), f(-h, C, h, x);
    const P = new k();
    P.setAttribute("position", new $(new Float32Array(Y), 3));
    const T = new Float32Array([0, -h, -x, 0, h, -x, 0, h, -C, 0, V, -C, 0, V, C, 0, h, C, 0, h, x, 0, -h, x, 0, -h, C, 0, -V, C, 0, -V, -C, 0, -h, -C, 0, -h, -x]), B = new k();
    return B.setAttribute("position", new $(T, 3)), { fill: P, outline: B };
  }
  function p(M, y, c) {
    const o = M / 2, i = y / 2, l = o - c, h = i - c, x = [];
    function C(P, T, B, X) {
      x.push(0, P, T, 0, B, T, 0, B, X, 0, P, T, 0, B, X, 0, P, X);
    }
    C(-o, -i, o, -h), C(-o, h, o, i), C(-o, -h, -l, h), C(l, -h, o, h);
    const V = new k();
    V.setAttribute("position", new $(new Float32Array(x), 3));
    const Y = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -l, -h, 0, l, -h, 0, l, -h, 0, l, h, 0, l, h, 0, -l, h, 0, -l, h, 0, -l, -h]), f = new k();
    return f.setAttribute("position", new $(Y, 3)), { fill: V, outline: f };
  }
  function b(M, y, c) {
    const o = M / 2, i = y / 2, l = o - c, h = i - c, x = new k(), C = new Float32Array([0, -l, -h, 0, l, -h, 0, l, h, 0, -l, -h, 0, l, h, 0, -l, h]);
    x.setAttribute("position", new $(C, 3));
    const V = [];
    function Y(B, X, W, _) {
      V.push(0, B, X, 0, W, X, 0, W, _, 0, B, X, 0, W, _, 0, B, _);
    }
    Y(-o, -i, o, -h), Y(-o, h, o, i), Y(-o, -h, -l, h), Y(l, -h, o, h);
    const f = new k();
    f.setAttribute("position", new $(new Float32Array(V), 3));
    const P = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -l, -h, 0, l, -h, 0, l, -h, 0, l, h, 0, l, h, 0, -l, h, 0, -l, h, 0, -l, -h]), T = new k();
    return T.setAttribute("position", new $(P, 3)), { concFill: x, steelFillGeom: f, outline: T };
  }
  function v(M, y, c) {
    const o = [], i = [[0, -M / 2, -y / 2], [0, -M / 2 + c, -y / 2], [0, -M / 2 + c, y / 2 - c], [0, M / 2, y / 2 - c], [0, M / 2, y / 2], [0, -M / 2, y / 2]], l = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const V of l) o.push(...i[V]);
    const h = new k();
    h.setAttribute("position", new $(new Float32Array(o), 3));
    const x = [];
    for (let V = 0; V < i.length; V++) {
      const Y = (V + 1) % i.length;
      x.push(...i[V], ...i[Y]);
    }
    const C = new k();
    return C.setAttribute("position", new $(new Float32Array(x), 3)), { fill: h, outline: C };
  }
  function g(M, y, c, o) {
    const i = o / 2, l = [], h = [[0, -M - i, -y / 2], [0, -c - i, -y / 2], [0, -c - i, y / 2 - c], [0, -i, y / 2 - c], [0, -i, y / 2], [0, -M - i, y / 2]], x = [[0, i, -y / 2], [0, i + c, -y / 2], [0, i + c, y / 2 - c], [0, M + i, y / 2 - c], [0, M + i, y / 2], [0, i, y / 2]], C = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const P of C) l.push(...h[P]);
    for (const P of C) l.push(...x[P]);
    const V = new k();
    V.setAttribute("position", new $(new Float32Array(l), 3));
    const Y = [];
    for (const P of [h, x]) for (let T = 0; T < P.length; T++) {
      const B = (T + 1) % P.length;
      Y.push(...P[T], ...P[B]);
    }
    const f = new k();
    return f.setAttribute("position", new $(new Float32Array(Y), 3)), { fill: V, outline: f };
  }
  function m(M, y, c, o) {
    const i = y / 2, l = M, h = [[0, -l, -i], [0, -l, -i + c], [0, -o, -i + c], [0, -o, i - c], [0, -l, i - c], [0, -l, i], [0, 0, i], [0, 0, -i]], x = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], C = [];
    for (const P of x) C.push(...h[P]);
    const V = new k();
    V.setAttribute("position", new $(new Float32Array(C), 3));
    const Y = [];
    for (let P = 0; P < h.length; P++) {
      const T = (P + 1) % h.length;
      Y.push(...h[P], ...h[T]);
    }
    const f = new k();
    return f.setAttribute("position", new $(new Float32Array(Y), 3)), { fill: V, outline: f };
  }
  function z(M, y, c, o, i) {
    const l = y / 2, h = i / 2, x = [], C = [[0, -M, -l], [0, -M, -l + c], [0, -h - o, -l + c], [0, -h - o, l - c], [0, -M, l - c], [0, -M, l], [0, -h, l], [0, -h, -l]], V = C.map((B) => [B[0], -B[1], B[2]]), Y = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const B of Y) x.push(...C[B]);
    for (const B of Y) x.push(...V[B]);
    const f = new k();
    f.setAttribute("position", new $(new Float32Array(x), 3));
    const P = [];
    for (const B of [C, V]) for (let X = 0; X < B.length; X++) {
      const W = (X + 1) % B.length;
      P.push(...B[X], ...B[W]);
    }
    const T = new k();
    return T.setAttribute("position", new $(new Float32Array(P), 3)), { fill: f, outline: T };
  }
  function w(M, y, c, o) {
    const i = M / 2, l = y / 2, h = o / 2, x = [[0, -h, -l], [0, h, -l], [0, h, l - c], [0, i, l - c], [0, i, l], [0, -i, l], [0, -i, l - c], [0, -h, l - c]], C = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], V = [];
    for (const T of C) V.push(...x[T]);
    const Y = new k();
    Y.setAttribute("position", new $(new Float32Array(V), 3));
    const f = [];
    for (let T = 0; T < x.length; T++) {
      const B = (T + 1) % x.length;
      f.push(...x[T], ...x[B]);
    }
    const P = new k();
    return P.setAttribute("position", new $(new Float32Array(f), 3)), { fill: Y, outline: P };
  }
  function I(M, y, c = 24) {
    const o = M / 2, i = o - y, l = [];
    for (let V = 0; V < c; V++) {
      const Y = V / c * Math.PI * 2, f = (V + 1) / c * Math.PI * 2, P = Math.cos(Y), T = Math.sin(Y), B = Math.cos(f), X = Math.sin(f);
      l.push(0, o * P, o * T, 0, o * B, o * X, 0, i * B, i * X), l.push(0, o * P, o * T, 0, i * B, i * X, 0, i * P, i * T);
    }
    const h = new k();
    h.setAttribute("position", new $(new Float32Array(l), 3));
    const x = [];
    for (let V = 0; V < c; V++) {
      const Y = V / c * Math.PI * 2, f = (V + 1) / c * Math.PI * 2;
      x.push(0, o * Math.cos(Y), o * Math.sin(Y), 0, o * Math.cos(f), o * Math.sin(f)), x.push(0, i * Math.cos(Y), i * Math.sin(Y), 0, i * Math.cos(f), i * Math.sin(f));
    }
    const C = new k();
    return C.setAttribute("position", new $(new Float32Array(x), 3)), { fill: h, outline: C };
  }
  const L = new Q({ color: 52479, transparent: true, opacity: 0.35, side: J, depthWrite: false }), E = new te({ color: 52479 }), Z = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: J, depthWrite: false }), A = new te({ color: 16750848 });
  function S(M, y) {
    const c = Math.abs(y[0] - M[0]), o = Math.abs(y[1] - M[1]), i = Math.abs(y[2] - M[2]);
    return i > c && i > o || o > c && o > i;
  }
  return F.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const M = t.secColumns.rawVal, y = t.secBeams.rawVal;
    if (!M && !y) {
      n.children.forEach((h) => {
        h instanceof D && h.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((h) => {
      h instanceof D && h.dispose();
    }), n.clear();
    const c = (_a = e.elements) == null ? void 0 : _a.val, o = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!c || !o) return;
    const i = o.sectionShapes, l = t.secFloor.rawVal;
    c.forEach((h, x) => {
      if (h.length !== 2) return;
      const C = r.rawVal[h[0]], V = r.rawVal[h[1]];
      if (!C || !V) return;
      const Y = S(C, V);
      if (Y && !M || !Y && !y) return;
      if (l >= 0) {
        const X = Math.min(C[1], V[1]);
        Math.max(C[1], V[1]);
        const W = t.gridSize.rawVal || 3;
        if (Math.floor(X / W + 0.01) !== l) return;
      }
      const f = i == null ? void 0 : i.get(x);
      if (!f) return;
      const P = [(C[0] + V[0]) / 2, (C[1] + V[1]) / 2, (C[2] + V[2]) / 2], T = Ce(C, V);
      if (f.type === "CFT") {
        const X = b(f.b, f.h, f.tw ?? f.b * 0.05), W = new K(X.concFill, L);
        W.position.set(...P), W.rotation.setFromRotationMatrix(T), n.add(W);
        const _ = new K(X.steelFillGeom, Z);
        _.position.set(...P), _.rotation.setFromRotationMatrix(T), n.add(_);
        const N = new ne(X.outline, A);
        N.position.set(...P), N.rotation.setFromRotationMatrix(T), n.add(N);
      } else {
        let X, W, _;
        switch (f.type) {
          case "rect":
            X = a(f.b, f.h), W = L, _ = E;
            break;
          case "circ":
            X = u(f.d), W = L, _ = E;
            break;
          case "I":
            X = d(f.b, f.h, f.tf, f.tw), W = Z, _ = A;
            break;
          case "HSS":
            X = p(f.b, f.h, f.tw ?? f.b * 0.05), W = Z, _ = A;
            break;
          case "CFT":
            X = b(f.b, f.h, f.tw ?? f.b * 0.05), W = Z, _ = A;
            break;
          case "L":
            X = v(f.b ?? f.h, f.h, f.t ?? f.tw ?? 3e-3), W = Z, _ = A;
            break;
          case "2L":
            X = g(f.b ?? f.h, f.h, f.t ?? f.tw ?? 3e-3, f.dis ?? 0.01), W = Z, _ = A;
            break;
          case "C":
          case "coldC":
            X = m(f.b, f.h, f.tf ?? f.t ?? 3e-3, f.tw ?? f.t ?? 3e-3), W = Z, _ = A;
            break;
          case "2C":
            X = z(f.b, f.h, f.tf ?? 5e-3, f.tw ?? 5e-3, f.dis ?? 0.01), W = Z, _ = A;
            break;
          case "T":
            X = w(f.b, f.h, f.tf ?? 0.01, f.tw ?? 6e-3), W = Z, _ = A;
            break;
          case "pipe":
            X = I(f.d, f.tw ?? f.d * 0.05), W = Z, _ = A;
            break;
          default:
            return;
        }
        const N = new K(X.fill, W);
        N.position.set(...P), N.rotation.setFromRotationMatrix(T), n.add(N);
        const G = new ne(X.outline, _);
        G.position.set(...P), G.rotation.setFromRotationMatrix(T), n.add(G);
      }
      const B = ht(f);
      if (B) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(f.type) ? "#ff9900" : "#00ccff", _ = new D(B, W, "transparent");
        _.position.set(P[0], P[1], P[2]);
        const N = 0.05 * t.gridSize.rawVal * 0.5;
        _.updateScale(N * ((s == null ? void 0 : s.rawVal) ?? 1)), n.add(_);
      }
    });
  }), s && F.derive(() => {
    if (s.val, !t.sections.rawVal) return;
    const M = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((y) => {
      y instanceof D && y.updateScale(M * s.rawVal);
    });
  }), F.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class le extends U {
  constructor(t, r, s, n, a, u, d) {
    super();
    const p = new ue().moveTo(0, 0).lineTo(0, u[1]).lineTo(s, u[1]).lineTo(s, 0).lineTo(0, 0), b = p.getPoints(), v = new k().setFromPoints(b);
    this.lines = new ne(v, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), d && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new he(p), m = new Q({ color: u[1] > 0 ? 24435 : 11411474, side: J });
    this.mesh = new K(g, m), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), d && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new D(`${a[1].toFixed(4)}`), this.normalizedResult = u, this.textPosition = oe([t, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Te extends U {
  constructor(t, r, s, n, a, u, d) {
    super();
    const p = a[0] * s / (a[0] + a[1]), b = a[0] * a[1] > 0;
    if (this.text = new D(`${a[0].toFixed(4)}`), this.text2 = new D(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = u, this.textPosition = ge(t, r), this.text2Position = ge(r, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), b) {
      const v = new ue().moveTo(0, 0).lineTo(0, u[0]).lineTo(p, 0).lineTo(0, 0), g = new ue().moveTo(p, 0).lineTo(s, -u[1]).lineTo(s, 0).lineTo(p, 0), m = v.getPoints(), z = g.getPoints(), w = new k().setFromPoints(m), I = new k().setFromPoints(z), L = new te({ color: j().resultOutline });
      this.lines = new ne(w, L), this.lines2 = new ne(I, L), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), d && this.lines.rotateX(Math.PI / 2), d && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const E = new he(v), Z = new he(g), A = new Q({ color: u[0] > 0 ? 24435 : 11411474, side: J }), S = new Q({ color: -u[1] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(E, A), this.mesh2 = new K(Z, S), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), d && this.mesh.rotateX(Math.PI / 2), d && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const v = new ue().moveTo(0, 0).lineTo(0, u[0]).lineTo(s, -u[1]).lineTo(s, 0).lineTo(0, 0), g = v.getPoints(), m = new k().setFromPoints(g);
      this.lines = new ne(m, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), d && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const z = new he(v), w = new Q({ color: u[0] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(z, w), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), d && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function mt(e, t, r, s) {
  const n = new U(), a = { normals: le, shearsY: le, shearsZ: le, torsions: le, bendingsY: Te, bendingsZ: Te };
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, r.val, t.frameResults.val == "none") return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const u = Be[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[u]) == null ? void 0 : _b.forEach((d, p) => {
      var _a2, _b2;
      const b = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[p]) ?? [0, 1], v = r.rawVal[b[0]], g = r.rawVal[b[1]], m = new R(...g).distanceTo(new R(...v)), z = ft((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[u]), w = d == null ? void 0 : d.map((Z) => Z / (z === 0 ? 1 : z)), I = Ce(v, g), L = new a[u](v, g, m, I, d ?? [0, 0], w ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(u)), E = 0.05 * t.gridSize.rawVal;
      L.updateScale(E * s.rawVal), n.add(L);
    });
  }), F.derive(() => {
    if (s.val, t.frameResults.rawVal == "none") return;
    const u = 0.05 * t.gridSize.val;
    n.children.forEach((d) => d.updateScale(u * s.rawVal));
  }), F.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function ft(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((r) => {
    const s = Math.max(...r ?? [0, 0]);
    s > t && (t = s);
  }), t;
}
class wt extends U {
  constructor(t, r, s) {
    super();
    const n = r === Se.reactions;
    s[0] && (this.xText1 = new D(`${n ? "Fx" : "Dx"}: ` + s[0].toFixed(4))), s[3] && (this.xText2 = new D(`${n ? "Mx" : "Rx"}: ` + s[3].toFixed(4))), s[1] && (this.yText1 = new D(`${n ? "Fy" : "Dy"}: ` + s[1].toFixed(4))), s[4] && (this.yText2 = new D(`${n ? "My" : "Ry"}: ` + s[4].toFixed(4))), s[2] && (this.zText1 = new D(`${n ? "Fz" : "Dz"}: ` + s[2].toFixed(4))), s[5] && (this.zText2 = new D(`${n ? "Mz" : "Rz"}: ` + s[5].toFixed(4))), (s[0] || s[3]) && (this.xArrow = new ee(new R(1, 0, 0), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[1] || s[4]) && (this.yArrow = new ee(new R(0, 1, 0), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[2] || s[5]) && (this.zArrow = new ee(new R(0, 0, 1), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var Se = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Se || {});
function vt(e, t, r, s) {
  const n = new U();
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const a = Se[t.nodeResults.rawVal], u = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((d, p) => {
      const b = new wt(r.rawVal[p], a, d ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(u * s.rawVal), n.add(b);
    });
  }), F.derive(() => {
    if (s.val, t.nodeResults.rawVal == "none") return;
    const a = 0.05 * t.gridSize.val;
    n.children.forEach((u) => u.updateScale(a * s.rawVal));
  }), F.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function xt({ drawingObj: e, gridObj: t, scene: r, camera: s, controls: n, gridSize: a, derivedDisplayScale: u, rendererElm: d, viewerRender: p }) {
  const b = new Ze(), v = new We(), g = new K(new _e(a, a), new Q({ side: J })), m = new ce(new k(), new de()), z = new ce(new k(), new de({ color: "gray" })), w = new ce(new k(), new de({ color: "orange", size: 0.8 }));
  r.add(w), m.geometry.setAttribute("position", new q(e.points.rawVal.flat(), 3)), m.geometry.computeBoundingSphere(), m.frustumCulled = false, z.frustumCulled = false, r.add(z), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), F.derive(() => {
    e.gridTarget && (bt(t, { position: new R(...e.gridTarget.val.position), quaternion: new Ne().setFromEuler(new ze(...e.gridTarget.val.rotation)) }, p), g.position.set(...e.gridTarget.val.position), g.quaternion.setFromEuler(new ze(...e.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), F.derive(() => {
    m.geometry.setAttribute("position", new q(e.points.val.flat(), 3)), m.geometry.computeBoundingSphere();
  }), F.derive(() => {
    const A = 0.05 * a * 0.5 * u.val;
    z.material.size = A, b.params.Points.threshold = 0.4 * A;
  }), F.derive(() => {
    var _a;
    const A = e.points.val ?? [], M = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], y = [];
    for (const o of M) {
      const [i, l, h] = A[o];
      y.push(i, l, h);
    }
    const c = new k();
    c.setAttribute("position", new q(y, 3)), w.geometry.dispose(), w.geometry = c;
  });
  let I = false, L = 0;
  d.addEventListener("pointerdown", () => {
    I = true;
  }), d.addEventListener("pointerup", () => {
    I = false;
  }), d.addEventListener("pointermove", () => {
    I && L++;
  }), d.addEventListener("click", (A) => {
    if (L > 5) {
      L = 0;
      return;
    }
    L = 0, v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(v, s);
    const S = b.intersectObject(g);
    if (S.length) {
      let M = S[0].point;
      (A.ctrlKey || A.metaKey) && (M = new R(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), e.points.val = [...e.points.rawVal, M.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), d.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), d.addEventListener("pointermove", (A) => {
    v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(v, s);
    const S = b.intersectObject(g);
    if (z.geometry.deleteAttribute("position"), S.length) {
      let M = S[0].point;
      (A.ctrlKey || A.metaKey) && (M = new R(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), z.geometry.setAttribute("position", new q(M.toArray(), 3));
    }
    p();
  }), d.addEventListener("pointermove", (A) => {
    var _a;
    v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(v, s);
    let S = false;
    const M = b.intersectObject(m), y = b.intersectObject(g);
    if (M.length && y.length) {
      const c = new R(...e.points.rawVal[M[0].index]), o = new R(...y[0].point), i = c.sub(o), l = (_a = y[0].face) == null ? void 0 : _a.normal;
      l.transformDirection(g.matrixWorld), Math.abs(i.dot(l)) < 1e-4 && (S = true);
    }
    z.visible = !S;
  });
  let E = false, Z;
  d.addEventListener("pointermove", (A) => {
    var _a;
    if (!L) return;
    v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(v, s);
    let S = false;
    const M = b.intersectObject(m), y = b.intersectObject(g);
    if (M.length && y.length) {
      const o = new R(...e.points.rawVal[M[0].index]), i = new R(...y[0].point), l = o.sub(i), h = (_a = y[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(g.matrixWorld), Math.abs(l.dot(h)) < 1e-4 && (S = true);
    }
    if (S && L < 5 && (E = true, n.enabled = false, Z = M[0].index), !E || L % 2 !== 0) return;
    const c = [...e.points.rawVal];
    if (Z !== void 0) {
      let o = y[0].point;
      (A.ctrlKey || A.metaKey) && (o = new R(Math.round(o.x), Math.round(o.y), Math.round(o.z))), c[Z] = o.toArray();
    }
    e.points.val = c;
  }), d.addEventListener("pointerup", () => {
    n.enabled = true, E = false;
  }), d.addEventListener("contextmenu", (A) => {
    var _a;
    v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(v, s);
    let S = false;
    const M = b.intersectObject(m), y = b.intersectObject(g);
    if (M.length && y.length) {
      const i = new R(...e.points.rawVal[M[0].index]), l = new R(...y[0].point), h = i.sub(l), x = (_a = y[0].face) == null ? void 0 : _a.normal;
      x.transformDirection(g.matrixWorld), Math.abs(h.dot(x)) < 1e-4 && (S = true);
    }
    if (!S) return;
    const c = [...e.points.rawVal];
    if (c.splice(M[0].index, 1), e.points.val = c, !e.polylines) return;
    const o = e.polylines.rawVal.map((i) => i.filter((l) => l !== M[0].index)).map((i) => i.map((l) => l > M[0].index ? l - 1 : l)).filter((i) => i.length);
    o.push([]), e.polylines.val = o;
  });
}
function bt(e, t, r) {
  const a = Math.round(14.999999999999998), u = { position: e.position.clone(), quaternion: e.quaternion.clone() }, d = setInterval(b, 1e3 / 30);
  let p = 0;
  function b() {
    p++;
    const v = p / a;
    e.position.lerpVectors(u.position, t.position, v), e.quaternion.slerpQuaternions(u.quaternion, t.quaternion, v), r && r(), p == a && clearInterval(d);
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
    this.map = Me[t] || Me.rainbow, this.n = r;
    const s = 1 / this.n, n = new H(), a = new H();
    this.lut.length = 0, this.lut.push(new H(this.map[0][1]));
    for (let u = 1; u < r; u++) {
      const d = u * s;
      for (let p = 0; p < this.map.length - 1; p++) if (d > this.map[p][0] && d <= this.map[p + 1][0]) {
        const b = this.map[p][0], v = this.map[p + 1][0];
        n.setHex(this.map[p][1], re), a.setHex(this.map[p + 1][1], re);
        const g = new H().lerpColors(n, a, (d - b) / (v - b));
        this.lut.push(g);
      }
    }
    return this.lut.push(new H(this.map[this.map.length - 1][1])), this;
  }
  copy(t) {
    return this.lut = t.lut, this.map = t.map, this.n = t.n, this.minV = t.minV, this.maxV = t.maxV, this;
  }
  getColor(t) {
    t = $e.clamp(t, this.minV, this.maxV), t = (t - this.minV) / (this.maxV - this.minV);
    const r = Math.round(t * this.n);
    return this.lut[r];
  }
  addColorMap(t, r) {
    return Me[t] = r, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const r = t.getContext("2d", { alpha: false }), s = r.getImageData(0, 0, 1, this.n), n = s.data;
    let a = 0;
    const u = 1 / this.n, d = new H(), p = new H(), b = new H();
    for (let v = 1; v >= 0; v -= u) for (let g = this.map.length - 1; g >= 0; g--) if (v < this.map[g][0] && v >= this.map[g - 1][0]) {
      const m = this.map[g - 1][0], z = this.map[g][0];
      d.setHex(this.map[g - 1][1], re), p.setHex(this.map[g][1], re), b.lerpColors(d, p, (v - m) / (z - m)), n[a * 4] = Math.round(b.r * 255), n[a * 4 + 1] = Math.round(b.g * 255), n[a * 4 + 2] = Math.round(b.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(s, 0, 0), t;
  }
}
const Me = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function Mt(e, t, r) {
  const s = new Re(), n = new H(), a = new K(new k(), new Q({ side: J, vertexColors: true }));
  return s.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, F.derive(() => {
    a.geometry.setAttribute("position", new q(e.val.flat(), 3));
    const u = [];
    for (const w of t.val) w.length === 3 ? u.push(w[0], w[1], w[2]) : w.length === 4 && (u.push(w[0], w[1], w[2]), u.push(w[0], w[2], w[3]));
    a.geometry.setIndex(new He(u, 1)), a.geometry.setAttribute("color", new q(e.val.map(() => [0, 0, 0]).flat(), 3));
    const d = r.val.filter((w) => Number.isFinite(w));
    let p, b;
    const v = Ve.val;
    if (v ? (b = v[0], p = v[1]) : (p = d.length ? Math.max(...d) : 1, b = d.length ? Math.min(...d) : 0, b >= 0 && p > 0 && (b = 0)), p === b) {
      const w = Math.max(Math.abs(p) * 1e-6, 1e-9);
      p += w, b -= w;
    }
    const g = v && v[0] > v[1], m = Math.min(b, p), z = Math.max(b, p);
    s.setMin(m), s.setMax(z);
    for (let w = 0; w < r.val.length; w++) {
      const I = r.val[w];
      if (!Number.isFinite(I)) {
        a.geometry.attributes.color.setXYZ(w, 0.3, 0.3, 0.3);
        continue;
      }
      const L = g ? z + m - I : I, E = s.getColor(L) ?? new H(0, 0, 0);
      n.copy(E).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(w, n.r, n.g, n.b);
    }
  }), a;
}
function yt(e, t, r, s) {
  const n = Mt(r, e.elements, s);
  return F.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const gt = 6, ye = 10, Ft = 0.012;
function Ct(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function St(e, t, r, s) {
  if (!r && !s) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && r) {
    const a = r[e];
    if (a && a.has(t)) return a.get(t);
  }
  return null;
}
function Vt(e, t, r, s) {
  const n = new U(), a = new Re();
  a.setColorMap("rainbow");
  const u = new H(), d = F.state([]);
  return F.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const p = r.val, b = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], v = Ct(t.frameResults.val);
    if (n.children.forEach((x) => {
      x.geometry && x.geometry.dispose(), x.material && x.material.dispose();
    }), n.clear(), !v || b.length === 0 || p.length === 0) {
      d.val = [];
      return;
    }
    const g = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, m = (_c = e.deformOutputs) == null ? void 0 : _c.val, z = [], w = [];
    for (let x = 0; x < b.length; x++) {
      if (b[x].length !== 2) continue;
      const V = St(v, x, g, m);
      V && (z.push(V[0], V[1]), w.push({ idx: x, vals: V }));
    }
    if (z.length === 0) {
      d.val = [];
      return;
    }
    const I = Math.min(...z), L = Math.max(...z);
    a.setMin(I), a.setMax(L), d.val = z;
    const E = [1 / 0, 1 / 0, 1 / 0], Z = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of p) for (let C = 0; C < 3; C++) E[C] = Math.min(E[C], x[C]), Z[C] = Math.max(Z[C], x[C]);
    const S = Math.max(Z[0] - E[0], Z[1] - E[1], Z[2] - E[2], 1) * Ft, M = [], y = [], c = [];
    let o = 0;
    for (const { idx: x, vals: C } of w) {
      const V = b[x], Y = p[V[0]], f = p[V[1]];
      if (!Y || !f) continue;
      const P = new R(f[0] - Y[0], f[1] - Y[1], f[2] - Y[2]), T = P.length();
      if (T < 1e-10) continue;
      P.normalize();
      const B = Math.abs(P.y) < 0.99 ? new R(0, 1, 0) : new R(1, 0, 0), X = new R().crossVectors(P, B).normalize(), W = new R().crossVectors(P, X).normalize(), _ = ye + 1, N = gt;
      for (let G = 0; G < _; G++) {
        const O = G / ye, se = Y[0] + P.x * T * O, ie = Y[1] + P.y * T * O, me = Y[2] + P.z * T * O, fe = C[0] + (C[1] - C[0]) * O, ae = a.getColor(fe) ?? new H(0, 0, 0);
        u.copy(ae).convertSRGBToLinear();
        for (let we = 0; we < N; we++) {
          const Ae = we / N * Math.PI * 2, ve = Math.cos(Ae), xe = Math.sin(Ae);
          M.push(se + (X.x * ve + W.x * xe) * S, ie + (X.y * ve + W.y * xe) * S, me + (X.z * ve + W.z * xe) * S), y.push(u.r, u.g, u.b);
        }
      }
      for (let G = 0; G < ye; G++) for (let O = 0; O < N; O++) {
        const se = (O + 1) % N, ie = o + G * N + O, me = o + G * N + se, fe = o + (G + 1) * N + O, ae = o + (G + 1) * N + se;
        c.push(ie, me, ae), c.push(ie, ae, fe);
      }
      o += _ * N;
    }
    if (M.length === 0) return;
    const i = new k();
    i.setAttribute("position", new q(M, 3)), i.setAttribute("color", new q(y, 3)), i.setIndex(c), i.computeVertexNormals();
    const l = new Q({ vertexColors: true, side: J }), h = new K(i, l);
    h.frustumCulled = false, n.add(h);
  }), n.__colorMapValues = d, n;
}
function Xe(e, t = 8) {
  const r = document.createElement("div");
  r.id = "legend";
  const s = document.createElement("div");
  s.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", r.appendChild(s), setTimeout(() => {
    F.derive(() => {
      s.textContent = Fe.val ? `[${Fe.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (p, b) => b / t).reverse();
  let a, u;
  n.forEach((p, b) => {
    a = document.createElement("div"), a.id = `marker-${b}`, a.className = "marker", a.style.marginTop = b == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, u = document.createElement("p"), u.id = `marker-text-${b}`, a.append(u), r.append(a);
  });
  const d = [];
  return r.querySelectorAll("p").forEach((p) => d.push(p)), setTimeout(() => {
    F.derive(() => {
      n.forEach((p, b) => {
        const v = d[b];
        v && (v.innerText = At(e.val, p).toString());
      });
    });
  }), r;
}
function At(e, t) {
  const r = Ve.val;
  if (r) return (r[0] + t * (r[1] - r[0])).toPrecision(3);
  const s = e.filter((u) => Number.isFinite(u));
  if (s.length === 0) return "0";
  let n = Math.min(...s);
  const a = Math.max(...s);
  return n >= 0 && a > 0 && (n = 0), (n + t * (a - n)).toPrecision(3);
}
function Lt({ mesh: e, settingsObj: t, drawingObj: r, objects3D: s, solids: n }) {
  Oe.DEFAULT_UP = new R(0, 0, 1);
  const a = document.createElement("div"), u = new De(), d = new Ge(45, 1, 0.1, 2 * 1e6), p = new qe(-10, 10, 10, -10, -1e3, 2e6);
  let b = d;
  const v = new Ue({ antialias: true });
  v.localClippingEnabled = true;
  const g = new Ke(d, v.domElement), m = et(t), z = F.derive(() => m.displayScale.val === 0 ? 1 : m.displayScale.val > 0 ? m.displayScale.val : -1 / m.displayScale.val), w = zt(e, m);
  let I = Ye(m.gridSize.rawVal);
  a.appendChild(je(m, e, n)), a.setAttribute("id", "viewer"), a.appendChild(v.domElement), v.setPixelRatio(window.devicePixelRatio);
  const L = j();
  v.setClearColor(L.background, 1);
  const E = m.gridSize.rawVal, Z = E * 0.5 + E * 0.5 / Math.tan(45 * 0.5);
  d.position.set(0.5 * E, 0.8 * -Z, 0.5 * E), g.target.set(0.5 * E, 0.5 * E, 0), g.minDistance = 1, g.maxDistance = Z * 2.5, a.__settings = m, g.zoomSpeed = 1, g._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, g.update(), u.add(I, ct(m.gridSize.rawVal, m.flipAxes.rawVal)), new ResizeObserver((c) => {
    var _a, _b;
    for (const o of c) {
      const i = (_a = o.target) == null ? void 0 : _a.clientWidth, l = (_b = o.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || l === 0) continue;
      d.aspect = i / l, d.updateProjectionMatrix();
      const h = i / l, x = p.top;
      p.left = -x * h, p.right = x * h, p.updateProjectionMatrix(), v.setSize(i, l), S();
    }
  }).observe(a), g.addEventListener("change", S), F.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, m.displayScale.val, m.nodes.val, m.elements.val, m.elemColumns.val, m.elemBeams.val, m.nodesIndexes.val, m.elementsIndexes.val, m.orientations.val, m.sections.val, m.secColumns.val, m.secBeams.val, m.secFloor.val, m.supports.val, m.loads.val, m.deformedShape.val, m.nodeResults.val, m.frameResults.val, m.shellResults.val, setTimeout(S);
  });
  function S() {
    v.render(u, b);
  }
  function M(c) {
    b = c, g.object = c, g.update(), S();
  }
  if (e) {
    u.add(tt(m, w, z), nt(e, m, w), at(m, w, z), rt(e, m, w, z), st(e, m, w, z), it(e, m, w, z), ut(e, m, w, z), pt(e, m, w, z), vt(e, m, w, z), mt(e, m, w, z));
    const c = It(e, m), o = yt(e, m, w, c), i = Xe(c);
    u.add(o), a.appendChild(i);
    const l = Vt(e, m, w);
    u.add(l);
    const h = l.__colorMapValues, x = Xe(h);
    x.id = "frame-legend", a.appendChild(x), F.derive(() => {
      const C = m.shellResults.val != "none", V = m.frameResults.val.startsWith("contour:");
      i.hidden = !C, o.visible = C, x.hidden = !V;
    });
  }
  if (n) {
    const c = new Qe(16777215, 0.5);
    u.add(c);
    const o = new Pe(16777215, 0.5);
    o.position.set(30, 25, -10), o.shadow.mapSize.width = 1024, o.shadow.mapSize.height = 1024, u.add(o);
    const i = 10;
    o.shadow.camera.left = -10, o.shadow.camera.right = i, o.shadow.camera.top = i, o.shadow.camera.bottom = -10, o.shadow.camera.far = 1e3;
    const l = new Pe(16777215, 0.5);
    l.color.setHSL(11, 43, 96), l.position.set(-10, 0, 30), u.add(l), F.derive(() => {
      (n == null ? void 0 : n.val.length) && (u.remove(...n.oldVal), u.add(...n.rawVal), S());
    }), F.derive(() => {
      n.rawVal.forEach((h) => h.visible = m.solids.val), S();
    });
  }
  if (s) {
    const c = [], o = (l) => {
      var _a;
      return ((_a = l == null ? void 0 : l.userData) == null ? void 0 : _a.isCota) ? m.showCotas.val : m.custom3D.val;
    }, i = () => {
      for (const l of c) l.visible = o(l);
      S();
    };
    F.derive(() => {
      const l = s.val;
      c.length && (u.remove(...c), c.length = 0), l.length && (u.add(...l), c.push(...l), i()), S();
    }), F.derive(() => {
      m.custom3D.val, i();
    }), F.derive(() => {
      m.showCotas.val, i();
    });
  }
  r && xt({ drawingObj: r, gridObj: I, scene: u, camera: d, controls: g, gridSize: E, derivedDisplayScale: z, rendererElm: v.domElement, viewerRender: S }), pe((c, o) => {
    v.setClearColor(o.background, 1), u.remove(I), I.geometry.dispose(), I.material.dispose(), I = Ye(m.gridSize.rawVal), u.add(I), a.style.setProperty("--awatif-legend-color", o.legendMarker), S();
  });
  const y = { scene: u, perspCamera: d, orthoCamera: p, get camera() {
    return b;
  }, controls: g, renderer: v, rendererElm: v.domElement, render: S, setActiveCamera: M, settings: m };
  return a.__ctx = y, a;
}
function zt(e, t) {
  return F.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], s = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!s || r.length === 0) return r;
    const n = t.deformScale.val, a = Number.isFinite(n) ? n : 1;
    return r.map((u, d) => {
      var _a2;
      const p = ((_a2 = s.get(d)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return u.map((b, v) => {
        const g = Number.isFinite(p[v]) ? p[v] : 0;
        return b + g * a;
      });
    });
  });
}
const Ve = F.state(null), Fe = F.state(""), Pt = F.state("kN"), Yt = F.state("mm"), Tt = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Xt = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 };
function It(e, t) {
  const r = F.state([]);
  let s;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(s || (s = {})), F.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), w = (V, Y) => {
      V == null ? void 0 : V.forEach((f, P) => {
        const T = e.elements.val[P];
        if (T) for (let B = 0; B < T.length; B++) Y.set(T[B], [f[B] ?? f[0]]);
      });
    };
    w((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), w((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), w((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, u), w((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, d), w((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, p), w((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), w((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, v), w((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), w((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, m), w((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, z);
    const I = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, L = t.shellResults.val, E = I == null ? void 0 : I[L];
    Ve.val = Array.isArray(E) && E.length === 2 ? [E[0], E[1]] : null;
    const Z = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [u, 0], membraneXX: [d, 0], membraneYY: [p, 0], membraneXY: [b, 0], tranverseShearX: [v, 0], tranverseShearY: [g, 0], vonMises: [m, 0], pressure: [z, 0], displacementX: [(_x = (_w = e.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = e.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = e.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, A = t.shellResults.val, S = Pt.val, M = Yt.val, y = A === "displacementX" || A === "displacementY" || A === "displacementZ", c = A === "bendingXX" || A === "bendingYY" || A === "bendingXY", o = A === "membraneXX" || A === "membraneYY" || A === "membraneXY", i = A === "vonMises" || A === "pressure", l = A === "tranverseShearX" || A === "tranverseShearY", h = y ? Xt[M] : c || o || i || l ? 1 / Tt[S] : 1, x = y ? M : c ? `${S}\xB7m/m` : o ? `${S}/m\xB2` : i ? `${S}/m\xB2` : l ? `${S}/m` : "";
    Fe.val = x;
    const C = [];
    e.nodes.val.forEach((V, Y) => {
      const f = Z[A];
      if (!f || !f[0] || typeof f[0].has != "function") return;
      if (!f[0].has(Y)) {
        C.push(Number.NaN);
        return;
      }
      const P = f[0].get(Y), T = P ? P[f[1]] ?? 0 : 0;
      C.push(T * h);
    }), r.val = C;
  }), r;
}
export {
  Yt as a,
  Mt as b,
  Pt as c,
  Xe as d,
  Lt as g
};
