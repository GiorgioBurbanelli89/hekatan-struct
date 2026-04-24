import { N as ce, B as k, U as de, F as q, G as U, d as Ie, L as te, e as Q, D as J, b as K, r as H, y as Le, c as ke, V as R, w as ee, x as D, X as be, k as Ee, a as ne, f as $, h as ue, Y as he, l as Ze, j as We, Z as Ne, _ as _e, $ as ze, a0 as re, a1 as $e, a2 as He, q as De, s as Ge, t as qe, W as Ue, u as Ke, A as Qe, v as Pe, O as Oe } from "./Text-C52Bkp-N.js";
import { v as F, P as Je, g as j, o as pe } from "./theme-CzzIlc4y.js";
import "./styles-Y66YTQNs.js";
function je(e, t, r) {
  const s = document.createElement("div"), n = new Je({ title: "Settings", expanded: true, container: s });
  if (s.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.deformScale, "val", { label: "Deform scale XY", min: 0.1, max: 5e3, step: 0.1 }), n.addBinding(e.deformScaleZ, "val", { label: "Deform scale Z", min: 0.01, max: 10, step: 0.01 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
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
  return { gridSize: F.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: F.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: F.state((e == null ? void 0 : e.nodes) ?? true), elements: F.state((e == null ? void 0 : e.elements) ?? true), elemColumns: F.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: F.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: F.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: F.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: F.state((e == null ? void 0 : e.orientations) ?? false), sections: F.state((e == null ? void 0 : e.sections) ?? true), secColumns: F.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: F.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: F.state((e == null ? void 0 : e.secFloor) ?? -1), supports: F.state((e == null ? void 0 : e.supports) ?? true), loads: F.state((e == null ? void 0 : e.loads) ?? false), deformedShape: F.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: F.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: F.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: F.state((e == null ? void 0 : e.shellResults) ?? "none"), flipAxes: F.state((e == null ? void 0 : e.flipAxes) ?? false), solids: F.state((e == null ? void 0 : e.solids) ?? true), custom3D: F.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: F.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: F.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: F.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function tt(e, t, r) {
  const s = j(), n = new ce(new k(), new de({ color: s.nodePoint }));
  return pe((a, d) => {
    n.material.color.setHex(d.nodePoint);
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
  pe((m, A) => {
    a.material.color.setHex(A.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const d = new Q({ vertexColors: true, transparent: true, opacity: s.shellOpacity, side: J, depthWrite: false }), u = new K(new k(), d);
  u.frustumCulled = false, n.add(u);
  let p = new H(s.shellWall), b = new H(s.shellSlab), f = new H(s.shellTri);
  pe((m, A) => {
    p = new H(A.shellWall), b = new H(A.shellSlab), f = new H(A.shellTri), d.opacity = A.shellOpacity, d.needsUpdate = true;
  });
  function g(m, A) {
    const v = Math.abs(A[0] - m[0]), I = Math.abs(A[1] - m[1]), L = Math.abs(A[2] - m[2]);
    return L > v && L > I || I > v && I > L;
  }
  return F.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const m = t.elemColumns.rawVal, A = t.elemBeams.rawVal, v = r.val, I = ((_a = e.elements) == null ? void 0 : _a.val) || [], L = I.filter((S) => {
      if (S.length !== 2) return true;
      const M = v[S[0]], y = v[S[1]];
      if (!M || !y) return true;
      const c = g(M, y);
      return !(c && !m || !c && !A);
    }).map((S) => ot(S).map((M) => [...v[M[0]], ...v[M[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new q(L, 3));
    const E = [], Z = [];
    function z(S, M, y, c) {
      const o = [M[0] - S[0], M[1] - S[1], M[2] - S[2]], i = [c[0] - S[0], c[1] - S[1], c[2] - S[2]], l = o[1] * i[2] - o[2] * i[1], h = o[2] * i[0] - o[0] * i[2], x = o[0] * i[1] - o[1] * i[0], C = Math.sqrt(l * l + h * h + x * x);
      return C < 1e-12 ? false : Math.abs(x / C) < 0.5;
    }
    for (const S of I) if (S.length === 3) {
      const [M, y, c] = S;
      if (v[M] && v[y] && v[c]) {
        E.push(...v[M], ...v[y], ...v[c]);
        for (let o = 0; o < 3; o++) Z.push(f.r, f.g, f.b);
      }
    } else if (S.length === 4) {
      const [M, y, c, o] = S;
      if (v[M] && v[y] && v[c] && v[o]) {
        const i = z(v[M], v[y], v[c], v[o]) ? p : b;
        E.push(...v[M], ...v[y], ...v[c]), E.push(...v[M], ...v[c], ...v[o]);
        for (let l = 0; l < 6; l++) Z.push(i.r, i.g, i.b);
      }
    }
    E.length > 0 ? (u.geometry.dispose(), u.geometry = new k(), u.geometry.setAttribute("position", new q(E, 3)), u.geometry.setAttribute("color", new q(Z, 3)), u.geometry.computeVertexNormals(), u.visible = true) : u.visible = false;
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
  const n = new U(), a = new ke(0.5, 0.5, 0.5), d = new Q({ color: 10166822 });
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const u = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((p, b) => {
      const f = r.val[b];
      if (!f) return;
      const g = new K(a, d);
      g.position.set(...f);
      const m = u * s.rawVal;
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
  function a(d) {
    if (d.length < 2) return 0.12 * t.gridSize.rawVal;
    const u = [1 / 0, 1 / 0, 1 / 0], p = [-1 / 0, -1 / 0, -1 / 0];
    for (const f of d) for (let g = 0; g < 3; g++) u[g] = Math.min(u[g], f[g]), p[g] = Math.max(p[g], f[g]);
    return 0.08 * Math.max(p[0] - u[0], p[1] - u[1], p[2] - u[2], 0.1);
  }
  return F.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((p) => p.dispose()), n.clear();
    const d = r.val, u = a(d);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((p, b) => {
      const f = d[b];
      if (!f) return;
      const g = new R(...p.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const m = new ee(g, new R(...f), 1, 15637248, 0.3, 0.3), A = u * s.rawVal;
      m.scale.set(A, A, A), n.add(m);
    });
  }), F.derive(() => {
    if (s.val, !t.loads.rawVal) return;
    const u = a(r.rawVal) * s.rawVal;
    n.children.forEach((p) => p.scale.set(u, u, u));
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
    t.val.forEach((a, d) => {
      const u = new D(`${d}`);
      u.position.set(...a), u.updateScale(n * r.rawVal), s.add(u);
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
    n.children.forEach((d) => d.dispose()), n.clear();
    const a = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((d, u) => {
      const p = new D(`${u}`, void 0, "#001219");
      p.position.set(...lt(d.map((b) => r.rawVal[b]))), p.updateScale(a * s.rawVal), n.add(p);
    });
  }), F.derive(() => {
    if (s.val, !t.elementsIndexes.rawVal) return;
    const a = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((d) => d.updateScale(a * s.rawVal));
  }), F.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function lt(e) {
  const t = e.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function ct(e, t) {
  const r = new U(), s = 0.05 * e * 1, n = j(), a = new D("X", "red", "transparent"), d = new D(t ? "Z" : "Y", "green", "transparent"), u = new D(t ? "Y" : "Z", "blue", "transparent"), p = new ee(new R(1, 0, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), b = new ee(new R(0, 1, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), f = new ee(new R(0, 0, 1), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * s, 0, 0), d.position.set(0, 1.3 * s, 0), u.position.set(0, 0, 1.3 * s), a.updateScale(0.4 * s), d.updateScale(0.4 * s), u.updateScale(0.4 * s), p.scale.set(s, s, s), b.scale.set(s, s, s), f.scale.set(s, s, s), r.add(p, b, f, a, d, u), r;
}
function Ce(e, t) {
  const r = new R(...e), n = new R(...t).clone().sub(r), a = n.length(), d = n.dot(new R(1, 0, 0)) / a, u = n.dot(new R(0, 1, 0)) / a, p = n.dot(new R(0, 0, 1)) / a, b = Math.sqrt(d ** 2 + u ** 2);
  let f = new be().fromArray([[d, u, p], [-u / b, d / b, 0], [-d * p / b, -u * p / b, b]].flat());
  return p === 1 && (f = new be().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), p === -1 && (f = new be().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Ee().setFromMatrix3(f);
}
function ge(e, t) {
  return e == null ? void 0 : e.map((r, s) => (9 * r + t[s]) / 10);
}
function oe(e) {
  const t = e.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function dt(e, t, r) {
  const s = oe([t, r]), n = oe([e, r]), a = oe([e, t]), d = new R(...s).sub(new R(...n)).normalize(), u = new R(...r).sub(new R(...a)).normalize(), p = d.clone().cross(u).normalize(), b = p.clone().cross(d).normalize();
  return new Ee().makeBasis(d, b, p);
}
function ut(e, t, r, s) {
  const n = new U(), a = new k(), d = new te({ vertexColors: true }), u = [0, 0, 0], p = [1, 0, 0], b = [0, 1, 0], f = [0, 0, 1];
  a.setAttribute("position", new q([...u, ...p, ...u, ...b, ...u, ...f], 3));
  const g = [255, 0, 0], m = [0, 255, 0], A = [0, 0, 255];
  return a.setAttribute("color", new q([...g, ...g, ...m, ...m, ...A, ...A], 3)), F.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((v) => {
      const I = new Ie(a, d), L = r.rawVal[v[0]], E = r.rawVal[v[1]];
      if (v.length === 2 && (I.position.set(...ge(L, E)), I.rotation.setFromRotationMatrix(Ce(L, E))), v.length === 3) {
        const S = r.rawVal[v[2]];
        I.position.set(...oe([L, E, S])), I.rotation.setFromRotationMatrix(dt(L, E, S));
      }
      const z = 0.05 * t.gridSize.rawVal * 0.75 * s.rawVal;
      I.scale.set(z, z, z), n.add(I);
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
  function d(M, y = 24) {
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
  function u(M, y, c, o) {
    const i = c ?? y * 0.08, l = o ?? M * 0.07, h = M / 2, x = y / 2, C = x - i, V = l / 2, Y = [];
    function w(X, W, N, _) {
      Y.push(0, X, W, 0, N, W, 0, N, _, 0, X, W, 0, N, _, 0, X, _);
    }
    w(-h, -x, h, -C), w(-V, -C, V, C), w(-h, C, h, x);
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
    const Y = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -l, -h, 0, l, -h, 0, l, -h, 0, l, h, 0, l, h, 0, -l, h, 0, -l, h, 0, -l, -h]), w = new k();
    return w.setAttribute("position", new $(Y, 3)), { fill: V, outline: w };
  }
  function b(M, y, c) {
    const o = M / 2, i = y / 2, l = o - c, h = i - c, x = new k(), C = new Float32Array([0, -l, -h, 0, l, -h, 0, l, h, 0, -l, -h, 0, l, h, 0, -l, h]);
    x.setAttribute("position", new $(C, 3));
    const V = [];
    function Y(B, X, W, N) {
      V.push(0, B, X, 0, W, X, 0, W, N, 0, B, X, 0, W, N, 0, B, N);
    }
    Y(-o, -i, o, -h), Y(-o, h, o, i), Y(-o, -h, -l, h), Y(l, -h, o, h);
    const w = new k();
    w.setAttribute("position", new $(new Float32Array(V), 3));
    const P = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -l, -h, 0, l, -h, 0, l, -h, 0, l, h, 0, l, h, 0, -l, h, 0, -l, h, 0, -l, -h]), T = new k();
    return T.setAttribute("position", new $(P, 3)), { concFill: x, steelFillGeom: w, outline: T };
  }
  function f(M, y, c) {
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
    const w = new k();
    return w.setAttribute("position", new $(new Float32Array(Y), 3)), { fill: V, outline: w };
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
    const w = new k();
    return w.setAttribute("position", new $(new Float32Array(Y), 3)), { fill: V, outline: w };
  }
  function A(M, y, c, o, i) {
    const l = y / 2, h = i / 2, x = [], C = [[0, -M, -l], [0, -M, -l + c], [0, -h - o, -l + c], [0, -h - o, l - c], [0, -M, l - c], [0, -M, l], [0, -h, l], [0, -h, -l]], V = C.map((B) => [B[0], -B[1], B[2]]), Y = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const B of Y) x.push(...C[B]);
    for (const B of Y) x.push(...V[B]);
    const w = new k();
    w.setAttribute("position", new $(new Float32Array(x), 3));
    const P = [];
    for (const B of [C, V]) for (let X = 0; X < B.length; X++) {
      const W = (X + 1) % B.length;
      P.push(...B[X], ...B[W]);
    }
    const T = new k();
    return T.setAttribute("position", new $(new Float32Array(P), 3)), { fill: w, outline: T };
  }
  function v(M, y, c, o) {
    const i = M / 2, l = y / 2, h = o / 2, x = [[0, -h, -l], [0, h, -l], [0, h, l - c], [0, i, l - c], [0, i, l], [0, -i, l], [0, -i, l - c], [0, -h, l - c]], C = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], V = [];
    for (const T of C) V.push(...x[T]);
    const Y = new k();
    Y.setAttribute("position", new $(new Float32Array(V), 3));
    const w = [];
    for (let T = 0; T < x.length; T++) {
      const B = (T + 1) % x.length;
      w.push(...x[T], ...x[B]);
    }
    const P = new k();
    return P.setAttribute("position", new $(new Float32Array(w), 3)), { fill: Y, outline: P };
  }
  function I(M, y, c = 24) {
    const o = M / 2, i = o - y, l = [];
    for (let V = 0; V < c; V++) {
      const Y = V / c * Math.PI * 2, w = (V + 1) / c * Math.PI * 2, P = Math.cos(Y), T = Math.sin(Y), B = Math.cos(w), X = Math.sin(w);
      l.push(0, o * P, o * T, 0, o * B, o * X, 0, i * B, i * X), l.push(0, o * P, o * T, 0, i * B, i * X, 0, i * P, i * T);
    }
    const h = new k();
    h.setAttribute("position", new $(new Float32Array(l), 3));
    const x = [];
    for (let V = 0; V < c; V++) {
      const Y = V / c * Math.PI * 2, w = (V + 1) / c * Math.PI * 2;
      x.push(0, o * Math.cos(Y), o * Math.sin(Y), 0, o * Math.cos(w), o * Math.sin(w)), x.push(0, i * Math.cos(Y), i * Math.sin(Y), 0, i * Math.cos(w), i * Math.sin(w));
    }
    const C = new k();
    return C.setAttribute("position", new $(new Float32Array(x), 3)), { fill: h, outline: C };
  }
  const L = new Q({ color: 52479, transparent: true, opacity: 0.35, side: J, depthWrite: false }), E = new te({ color: 52479 }), Z = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: J, depthWrite: false }), z = new te({ color: 16750848 });
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
      const w = i == null ? void 0 : i.get(x);
      if (!w) return;
      const P = [(C[0] + V[0]) / 2, (C[1] + V[1]) / 2, (C[2] + V[2]) / 2], T = Ce(C, V);
      if (w.type === "CFT") {
        const X = b(w.b, w.h, w.tw ?? w.b * 0.05), W = new K(X.concFill, L);
        W.position.set(...P), W.rotation.setFromRotationMatrix(T), n.add(W);
        const N = new K(X.steelFillGeom, Z);
        N.position.set(...P), N.rotation.setFromRotationMatrix(T), n.add(N);
        const _ = new ne(X.outline, z);
        _.position.set(...P), _.rotation.setFromRotationMatrix(T), n.add(_);
      } else {
        let X, W, N;
        switch (w.type) {
          case "rect":
            X = a(w.b, w.h), W = L, N = E;
            break;
          case "circ":
            X = d(w.d), W = L, N = E;
            break;
          case "I":
            X = u(w.b, w.h, w.tf, w.tw), W = Z, N = z;
            break;
          case "HSS":
            X = p(w.b, w.h, w.tw ?? w.b * 0.05), W = Z, N = z;
            break;
          case "CFT":
            X = b(w.b, w.h, w.tw ?? w.b * 0.05), W = Z, N = z;
            break;
          case "L":
            X = f(w.b ?? w.h, w.h, w.t ?? w.tw ?? 3e-3), W = Z, N = z;
            break;
          case "2L":
            X = g(w.b ?? w.h, w.h, w.t ?? w.tw ?? 3e-3, w.dis ?? 0.01), W = Z, N = z;
            break;
          case "C":
          case "coldC":
            X = m(w.b, w.h, w.tf ?? w.t ?? 3e-3, w.tw ?? w.t ?? 3e-3), W = Z, N = z;
            break;
          case "2C":
            X = A(w.b, w.h, w.tf ?? 5e-3, w.tw ?? 5e-3, w.dis ?? 0.01), W = Z, N = z;
            break;
          case "T":
            X = v(w.b, w.h, w.tf ?? 0.01, w.tw ?? 6e-3), W = Z, N = z;
            break;
          case "pipe":
            X = I(w.d, w.tw ?? w.d * 0.05), W = Z, N = z;
            break;
          default:
            return;
        }
        const _ = new K(X.fill, W);
        _.position.set(...P), _.rotation.setFromRotationMatrix(T), n.add(_);
        const G = new ne(X.outline, N);
        G.position.set(...P), G.rotation.setFromRotationMatrix(T), n.add(G);
      }
      const B = ht(w);
      if (B) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(w.type) ? "#ff9900" : "#00ccff", N = new D(B, W, "transparent");
        N.position.set(P[0], P[1], P[2]);
        const _ = 0.05 * t.gridSize.rawVal * 0.5;
        N.updateScale(_ * ((s == null ? void 0 : s.rawVal) ?? 1)), n.add(N);
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
  constructor(t, r, s, n, a, d, u) {
    super();
    const p = new ue().moveTo(0, 0).lineTo(0, d[1]).lineTo(s, d[1]).lineTo(s, 0).lineTo(0, 0), b = p.getPoints(), f = new k().setFromPoints(b);
    this.lines = new ne(f, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), u && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new he(p), m = new Q({ color: d[1] > 0 ? 24435 : 11411474, side: J });
    this.mesh = new K(g, m), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), u && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new D(`${a[1].toFixed(4)}`), this.normalizedResult = d, this.textPosition = oe([t, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Te extends U {
  constructor(t, r, s, n, a, d, u) {
    super();
    const p = a[0] * s / (a[0] + a[1]), b = a[0] * a[1] > 0;
    if (this.text = new D(`${a[0].toFixed(4)}`), this.text2 = new D(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = d, this.textPosition = ge(t, r), this.text2Position = ge(r, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), b) {
      const f = new ue().moveTo(0, 0).lineTo(0, d[0]).lineTo(p, 0).lineTo(0, 0), g = new ue().moveTo(p, 0).lineTo(s, -d[1]).lineTo(s, 0).lineTo(p, 0), m = f.getPoints(), A = g.getPoints(), v = new k().setFromPoints(m), I = new k().setFromPoints(A), L = new te({ color: j().resultOutline });
      this.lines = new ne(v, L), this.lines2 = new ne(I, L), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), u && this.lines.rotateX(Math.PI / 2), u && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const E = new he(f), Z = new he(g), z = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: J }), S = new Q({ color: -d[1] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(E, z), this.mesh2 = new K(Z, S), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), u && this.mesh.rotateX(Math.PI / 2), u && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const f = new ue().moveTo(0, 0).lineTo(0, d[0]).lineTo(s, -d[1]).lineTo(s, 0).lineTo(0, 0), g = f.getPoints(), m = new k().setFromPoints(g);
      this.lines = new ne(m, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), u && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const A = new he(f), v = new Q({ color: d[0] > 0 ? 24435 : 11411474, side: J });
      this.mesh = new K(A, v), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), u && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
    n.children.forEach((u) => u.dispose()), n.clear();
    const d = Be[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[d]) == null ? void 0 : _b.forEach((u, p) => {
      var _a2, _b2;
      const b = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[p]) ?? [0, 1], f = r.rawVal[b[0]], g = r.rawVal[b[1]], m = new R(...g).distanceTo(new R(...f)), A = ft((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[d]), v = u == null ? void 0 : u.map((Z) => Z / (A === 0 ? 1 : A)), I = Ce(f, g), L = new a[d](f, g, m, I, u ?? [0, 0], v ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(d)), E = 0.05 * t.gridSize.rawVal;
      L.updateScale(E * s.rawVal), n.add(L);
    });
  }), F.derive(() => {
    if (s.val, t.frameResults.rawVal == "none") return;
    const d = 0.05 * t.gridSize.val;
    n.children.forEach((u) => u.updateScale(d * s.rawVal));
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
    n.children.forEach((u) => u.dispose()), n.clear();
    const a = Se[t.nodeResults.rawVal], d = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((u, p) => {
      const b = new wt(r.rawVal[p], a, u ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(d * s.rawVal), n.add(b);
    });
  }), F.derive(() => {
    if (s.val, t.nodeResults.rawVal == "none") return;
    const a = 0.05 * t.gridSize.val;
    n.children.forEach((d) => d.updateScale(a * s.rawVal));
  }), F.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function xt({ drawingObj: e, gridObj: t, scene: r, camera: s, controls: n, gridSize: a, derivedDisplayScale: d, rendererElm: u, viewerRender: p }) {
  const b = new Ze(), f = new We(), g = new K(new Ne(a, a), new Q({ side: J })), m = new ce(new k(), new de()), A = new ce(new k(), new de({ color: "gray" })), v = new ce(new k(), new de({ color: "orange", size: 0.8 }));
  r.add(v), m.geometry.setAttribute("position", new q(e.points.rawVal.flat(), 3)), m.geometry.computeBoundingSphere(), m.frustumCulled = false, A.frustumCulled = false, r.add(A), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), F.derive(() => {
    e.gridTarget && (bt(t, { position: new R(...e.gridTarget.val.position), quaternion: new _e().setFromEuler(new ze(...e.gridTarget.val.rotation)) }, p), g.position.set(...e.gridTarget.val.position), g.quaternion.setFromEuler(new ze(...e.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), F.derive(() => {
    m.geometry.setAttribute("position", new q(e.points.val.flat(), 3)), m.geometry.computeBoundingSphere();
  }), F.derive(() => {
    const z = 0.05 * a * 0.5 * d.val;
    A.material.size = z, b.params.Points.threshold = 0.4 * z;
  }), F.derive(() => {
    var _a;
    const z = e.points.val ?? [], M = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], y = [];
    for (const o of M) {
      const [i, l, h] = z[o];
      y.push(i, l, h);
    }
    const c = new k();
    c.setAttribute("position", new q(y, 3)), v.geometry.dispose(), v.geometry = c;
  });
  let I = false, L = 0;
  u.addEventListener("pointerdown", () => {
    I = true;
  }), u.addEventListener("pointerup", () => {
    I = false;
  }), u.addEventListener("pointermove", () => {
    I && L++;
  }), u.addEventListener("click", (z) => {
    if (L > 5) {
      L = 0;
      return;
    }
    L = 0, f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, s);
    const S = b.intersectObject(g);
    if (S.length) {
      let M = S[0].point;
      (z.ctrlKey || z.metaKey) && (M = new R(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), e.points.val = [...e.points.rawVal, M.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), u.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), u.addEventListener("pointermove", (z) => {
    f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, s);
    const S = b.intersectObject(g);
    if (A.geometry.deleteAttribute("position"), S.length) {
      let M = S[0].point;
      (z.ctrlKey || z.metaKey) && (M = new R(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), A.geometry.setAttribute("position", new q(M.toArray(), 3));
    }
    p();
  }), u.addEventListener("pointermove", (z) => {
    var _a;
    f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, s);
    let S = false;
    const M = b.intersectObject(m), y = b.intersectObject(g);
    if (M.length && y.length) {
      const c = new R(...e.points.rawVal[M[0].index]), o = new R(...y[0].point), i = c.sub(o), l = (_a = y[0].face) == null ? void 0 : _a.normal;
      l.transformDirection(g.matrixWorld), Math.abs(i.dot(l)) < 1e-4 && (S = true);
    }
    A.visible = !S;
  });
  let E = false, Z;
  u.addEventListener("pointermove", (z) => {
    var _a;
    if (!L) return;
    f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, s);
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
      (z.ctrlKey || z.metaKey) && (o = new R(Math.round(o.x), Math.round(o.y), Math.round(o.z))), c[Z] = o.toArray();
    }
    e.points.val = c;
  }), u.addEventListener("pointerup", () => {
    n.enabled = true, E = false;
  }), u.addEventListener("contextmenu", (z) => {
    var _a;
    f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, b.setFromCamera(f, s);
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
  const a = Math.round(14.999999999999998), d = { position: e.position.clone(), quaternion: e.quaternion.clone() }, u = setInterval(b, 1e3 / 30);
  let p = 0;
  function b() {
    p++;
    const f = p / a;
    e.position.lerpVectors(d.position, t.position, f), e.quaternion.slerpQuaternions(d.quaternion, t.quaternion, f), r && r(), p == a && clearInterval(u);
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
    for (let d = 1; d < r; d++) {
      const u = d * s;
      for (let p = 0; p < this.map.length - 1; p++) if (u > this.map[p][0] && u <= this.map[p + 1][0]) {
        const b = this.map[p][0], f = this.map[p + 1][0];
        n.setHex(this.map[p][1], re), a.setHex(this.map[p + 1][1], re);
        const g = new H().lerpColors(n, a, (u - b) / (f - b));
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
    const d = 1 / this.n, u = new H(), p = new H(), b = new H();
    for (let f = 1; f >= 0; f -= d) for (let g = this.map.length - 1; g >= 0; g--) if (f < this.map[g][0] && f >= this.map[g - 1][0]) {
      const m = this.map[g - 1][0], A = this.map[g][0];
      u.setHex(this.map[g - 1][1], re), p.setHex(this.map[g][1], re), b.lerpColors(u, p, (f - m) / (A - m)), n[a * 4] = Math.round(b.r * 255), n[a * 4 + 1] = Math.round(b.g * 255), n[a * 4 + 2] = Math.round(b.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(s, 0, 0), t;
  }
}
const Me = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function Mt(e, t, r) {
  const s = new Re(), n = new H(), a = new K(new k(), new Q({ side: J, vertexColors: true }));
  return s.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, F.derive(() => {
    a.geometry.setAttribute("position", new q(e.val.flat(), 3));
    const d = [];
    for (const v of t.val) v.length === 3 ? d.push(v[0], v[1], v[2]) : v.length === 4 && (d.push(v[0], v[1], v[2]), d.push(v[0], v[2], v[3]));
    a.geometry.setIndex(new He(d, 1)), a.geometry.setAttribute("color", new q(e.val.map(() => [0, 0, 0]).flat(), 3));
    const u = r.val.filter((v) => Number.isFinite(v));
    let p, b;
    const f = Ve.val;
    if (f ? (b = f[0], p = f[1]) : (p = u.length ? Math.max(...u) : 1, b = u.length ? Math.min(...u) : 0, b >= 0 && p > 0 && (b = 0)), p === b) {
      const v = Math.max(Math.abs(p) * 1e-6, 1e-9);
      p += v, b -= v;
    }
    const g = f && f[0] > f[1], m = Math.min(b, p), A = Math.max(b, p);
    s.setMin(m), s.setMax(A);
    for (let v = 0; v < r.val.length; v++) {
      const I = r.val[v];
      if (!Number.isFinite(I)) {
        a.geometry.attributes.color.setXYZ(v, 0.3, 0.3, 0.3);
        continue;
      }
      const L = g ? A + m - I : I, E = s.getColor(L) ?? new H(0, 0, 0);
      n.copy(E).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(v, n.r, n.g, n.b);
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
  const d = new H(), u = F.state([]);
  return F.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const p = r.val, b = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], f = Ct(t.frameResults.val);
    if (n.children.forEach((x) => {
      x.geometry && x.geometry.dispose(), x.material && x.material.dispose();
    }), n.clear(), !f || b.length === 0 || p.length === 0) {
      u.val = [];
      return;
    }
    const g = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, m = (_c = e.deformOutputs) == null ? void 0 : _c.val, A = [], v = [];
    for (let x = 0; x < b.length; x++) {
      if (b[x].length !== 2) continue;
      const V = St(f, x, g, m);
      V && (A.push(V[0], V[1]), v.push({ idx: x, vals: V }));
    }
    if (A.length === 0) {
      u.val = [];
      return;
    }
    const I = Math.min(...A), L = Math.max(...A);
    a.setMin(I), a.setMax(L), u.val = A;
    const E = [1 / 0, 1 / 0, 1 / 0], Z = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of p) for (let C = 0; C < 3; C++) E[C] = Math.min(E[C], x[C]), Z[C] = Math.max(Z[C], x[C]);
    const S = Math.max(Z[0] - E[0], Z[1] - E[1], Z[2] - E[2], 1) * Ft, M = [], y = [], c = [];
    let o = 0;
    for (const { idx: x, vals: C } of v) {
      const V = b[x], Y = p[V[0]], w = p[V[1]];
      if (!Y || !w) continue;
      const P = new R(w[0] - Y[0], w[1] - Y[1], w[2] - Y[2]), T = P.length();
      if (T < 1e-10) continue;
      P.normalize();
      const B = Math.abs(P.y) < 0.99 ? new R(0, 1, 0) : new R(1, 0, 0), X = new R().crossVectors(P, B).normalize(), W = new R().crossVectors(P, X).normalize(), N = ye + 1, _ = gt;
      for (let G = 0; G < N; G++) {
        const O = G / ye, se = Y[0] + P.x * T * O, ie = Y[1] + P.y * T * O, me = Y[2] + P.z * T * O, fe = C[0] + (C[1] - C[0]) * O, ae = a.getColor(fe) ?? new H(0, 0, 0);
        d.copy(ae).convertSRGBToLinear();
        for (let we = 0; we < _; we++) {
          const Ae = we / _ * Math.PI * 2, ve = Math.cos(Ae), xe = Math.sin(Ae);
          M.push(se + (X.x * ve + W.x * xe) * S, ie + (X.y * ve + W.y * xe) * S, me + (X.z * ve + W.z * xe) * S), y.push(d.r, d.g, d.b);
        }
      }
      for (let G = 0; G < ye; G++) for (let O = 0; O < _; O++) {
        const se = (O + 1) % _, ie = o + G * _ + O, me = o + G * _ + se, fe = o + (G + 1) * _ + O, ae = o + (G + 1) * _ + se;
        c.push(ie, me, ae), c.push(ie, ae, fe);
      }
      o += N * _;
    }
    if (M.length === 0) return;
    const i = new k();
    i.setAttribute("position", new q(M, 3)), i.setAttribute("color", new q(y, 3)), i.setIndex(c), i.computeVertexNormals();
    const l = new Q({ vertexColors: true, side: J }), h = new K(i, l);
    h.frustumCulled = false, n.add(h);
  }), n.__colorMapValues = u, n;
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
  let a, d;
  n.forEach((p, b) => {
    a = document.createElement("div"), a.id = `marker-${b}`, a.className = "marker", a.style.marginTop = b == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, d = document.createElement("p"), d.id = `marker-text-${b}`, a.append(d), r.append(a);
  });
  const u = [];
  return r.querySelectorAll("p").forEach((p) => u.push(p)), setTimeout(() => {
    F.derive(() => {
      n.forEach((p, b) => {
        const f = u[b];
        f && (f.innerText = At(e.val, p).toString());
      });
    });
  }), r;
}
function At(e, t) {
  const r = Ve.val;
  if (r) return (r[0] + t * (r[1] - r[0])).toPrecision(3);
  const s = e.filter((d) => Number.isFinite(d));
  if (s.length === 0) return "0";
  let n = Math.min(...s);
  const a = Math.max(...s);
  return n >= 0 && a > 0 && (n = 0), (n + t * (a - n)).toPrecision(3);
}
function Lt({ mesh: e, settingsObj: t, drawingObj: r, objects3D: s, solids: n }) {
  Oe.DEFAULT_UP = new R(0, 0, 1);
  const a = document.createElement("div"), d = new De(), u = new Ge(45, 1, 0.1, 2 * 1e6), p = new qe(-10, 10, 10, -10, -1e3, 2e6);
  let b = u;
  const f = new Ue({ antialias: true });
  f.localClippingEnabled = true;
  const g = new Ke(u, f.domElement), m = et(t), A = F.derive(() => m.displayScale.val === 0 ? 1 : m.displayScale.val > 0 ? m.displayScale.val : -1 / m.displayScale.val), v = zt(e, m);
  let I = Ye(m.gridSize.rawVal);
  a.appendChild(je(m, e, n)), a.setAttribute("id", "viewer"), a.appendChild(f.domElement), f.setPixelRatio(window.devicePixelRatio);
  const L = j();
  f.setClearColor(L.background, 1);
  const E = m.gridSize.rawVal, Z = E * 0.5 + E * 0.5 / Math.tan(45 * 0.5);
  u.position.set(0.5 * E, 0.8 * -Z, 0.5 * E), g.target.set(0.5 * E, 0.5 * E, 0), g.minDistance = 1, g.maxDistance = Z * 2.5, a.__settings = m, g.zoomSpeed = 1, g._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, g.update(), d.add(I, ct(m.gridSize.rawVal, m.flipAxes.rawVal)), new ResizeObserver((c) => {
    var _a, _b;
    for (const o of c) {
      const i = (_a = o.target) == null ? void 0 : _a.clientWidth, l = (_b = o.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || l === 0) continue;
      u.aspect = i / l, u.updateProjectionMatrix();
      const h = i / l, x = p.top;
      p.left = -x * h, p.right = x * h, p.updateProjectionMatrix(), f.setSize(i, l), S();
    }
  }).observe(a), g.addEventListener("change", S), F.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, m.displayScale.val, m.nodes.val, m.elements.val, m.elemColumns.val, m.elemBeams.val, m.nodesIndexes.val, m.elementsIndexes.val, m.orientations.val, m.sections.val, m.secColumns.val, m.secBeams.val, m.secFloor.val, m.supports.val, m.loads.val, m.deformedShape.val, m.nodeResults.val, m.frameResults.val, m.shellResults.val, setTimeout(S);
  });
  function S() {
    f.render(d, b);
  }
  function M(c) {
    b = c, g.object = c, g.update(), S();
  }
  if (e) {
    d.add(tt(m, v, A), nt(e, m, v), at(m, v, A), rt(e, m, v, A), st(e, m, v, A), it(e, m, v, A), ut(e, m, v, A), pt(e, m, v, A), vt(e, m, v, A), mt(e, m, v, A));
    const c = It(e, m), o = yt(e, m, v, c), i = Xe(c);
    d.add(o), a.appendChild(i);
    const l = Vt(e, m, v);
    d.add(l);
    const h = l.__colorMapValues, x = Xe(h);
    x.id = "frame-legend", a.appendChild(x), F.derive(() => {
      const C = m.shellResults.val != "none", V = m.frameResults.val.startsWith("contour:");
      i.hidden = !C, o.visible = C, x.hidden = !V;
    });
  }
  if (n) {
    const c = new Qe(16777215, 0.5);
    d.add(c);
    const o = new Pe(16777215, 0.5);
    o.position.set(30, 25, -10), o.shadow.mapSize.width = 1024, o.shadow.mapSize.height = 1024, d.add(o);
    const i = 10;
    o.shadow.camera.left = -10, o.shadow.camera.right = i, o.shadow.camera.top = i, o.shadow.camera.bottom = -10, o.shadow.camera.far = 1e3;
    const l = new Pe(16777215, 0.5);
    l.color.setHSL(11, 43, 96), l.position.set(-10, 0, 30), d.add(l), F.derive(() => {
      (n == null ? void 0 : n.val.length) && (d.remove(...n.oldVal), d.add(...n.rawVal), S());
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
      c.length && (d.remove(...c), c.length = 0), l.length && (d.add(...l), c.push(...l), i()), S();
    }), F.derive(() => {
      m.custom3D.val, i();
    }), F.derive(() => {
      m.showCotas.val, i();
    });
  }
  r && xt({ drawingObj: r, gridObj: I, scene: d, camera: u, controls: g, gridSize: E, derivedDisplayScale: A, rendererElm: f.domElement, viewerRender: S }), pe((c, o) => {
    f.setClearColor(o.background, 1), d.remove(I), I.geometry.dispose(), I.material.dispose(), I = Ye(m.gridSize.rawVal), d.add(I), a.style.setProperty("--awatif-legend-color", o.legendMarker), S();
  });
  const y = { scene: d, perspCamera: u, orthoCamera: p, get camera() {
    return b;
  }, controls: g, renderer: f, rendererElm: f.domElement, render: S, setActiveCamera: M, settings: m };
  return a.__ctx = y, a;
}
function zt(e, t) {
  return F.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], s = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!s || r.length === 0) return r;
    const n = t.deformScale.val, a = t.deformScale.val * t.deformScaleZ.val, d = Number.isFinite(n) ? n : 1, u = Number.isFinite(a) ? a : 1;
    return r.map((p, b) => {
      var _a2;
      const f = ((_a2 = s.get(b)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], g = Number.isFinite(f[0]) ? f[0] : 0, m = Number.isFinite(f[1]) ? f[1] : 0, A = Number.isFinite(f[2]) ? f[2] : 0;
      return [p[0] + g * d, p[1] + m * d, p[2] + A * u];
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
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), v = (V, Y) => {
      V == null ? void 0 : V.forEach((w, P) => {
        const T = e.elements.val[P];
        if (T) for (let B = 0; B < T.length; B++) Y.set(T[B], [w[B] ?? w[0]]);
      });
    };
    v((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), v((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), v((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, d), v((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, u), v((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, p), v((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), v((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, f), v((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), v((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, m), v((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, A);
    const I = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, L = t.shellResults.val, E = I == null ? void 0 : I[L];
    Ve.val = Array.isArray(E) && E.length === 2 ? [E[0], E[1]] : null;
    const Z = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [d, 0], membraneXX: [u, 0], membraneYY: [p, 0], membraneXY: [b, 0], tranverseShearX: [f, 0], tranverseShearY: [g, 0], vonMises: [m, 0], pressure: [A, 0], displacementX: [(_x = (_w = e.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = e.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = e.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, z = t.shellResults.val, S = Pt.val, M = Yt.val, y = z === "displacementX" || z === "displacementY" || z === "displacementZ", c = z === "bendingXX" || z === "bendingYY" || z === "bendingXY", o = z === "membraneXX" || z === "membraneYY" || z === "membraneXY", i = z === "vonMises" || z === "pressure", l = z === "tranverseShearX" || z === "tranverseShearY", h = y ? Xt[M] : c || o || i || l ? 1 / Tt[S] : 1, x = y ? M : c ? `${S}\xB7m/m` : o ? `${S}/m\xB2` : i ? `${S}/m\xB2` : l ? `${S}/m` : "";
    Fe.val = x;
    const C = [];
    e.nodes.val.forEach((V, Y) => {
      const w = Z[z];
      if (!w || !w[0] || typeof w[0].has != "function") return;
      if (!w[0].has(Y)) {
        C.push(Number.NaN);
        return;
      }
      const P = w[0].get(Y), T = P ? P[w[1]] ?? 0 : 0;
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
