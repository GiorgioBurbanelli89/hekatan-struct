import { N as ce, B as k, U as de, F as q, G as U, d as Be, L as te, e as Q, D as O, b as K, r as D, y as ke, c as We, V as R, w as ee, x as H, X as be, k as Re, a as ne, f as $, h as ue, Y as he, l as Ne, j as _e, Z as $e, _ as De, $ as ze, a0 as re, a1 as He, a2 as Ge, q as qe, s as Ue, t as Ke, W as Qe, u as Je, A as Oe, v as Ye, O as je } from "./Text-DyNVkyur.js";
import { v as F, P as et, g as j, o as pe } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function tt(e, t, r) {
  const s = document.createElement("div"), n = new et({ title: "Settings", expanded: true, container: s });
  if (s.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.deformScale, "val", { label: "Deform scale XY", min: 0.1, max: 5e3, step: 0.1 }), n.addBinding(e.deformScaleZ, "val", { label: "Deform scale Z", min: 0.01, max: 10, step: 0.01 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const a = n.addFolder({ title: "Analysis Inputs" });
    a.addBinding(e.supports, "val", { label: "Supports" }), a.addBinding(e.loads, "val", { label: "Loads" }), a.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), a.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const a = n.addFolder({ title: "Analysis Outputs" });
    a.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), a.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), a.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), a.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), a.addBinding(e.deformedShape, "val", { label: "Deformed shape" });
  }
  return r && n.addBinding(e.solids, "val", { label: "Solids" }), s;
}
function nt(e) {
  return { gridSize: F.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: F.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: F.state((e == null ? void 0 : e.nodes) ?? true), elements: F.state((e == null ? void 0 : e.elements) ?? true), elemColumns: F.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: F.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: F.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: F.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: F.state((e == null ? void 0 : e.orientations) ?? false), sections: F.state((e == null ? void 0 : e.sections) ?? true), secColumns: F.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: F.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: F.state((e == null ? void 0 : e.secFloor) ?? -1), supports: F.state((e == null ? void 0 : e.supports) ?? true), loads: F.state((e == null ? void 0 : e.loads) ?? false), deformedShape: F.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: F.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: F.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: F.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: F.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: F.state((e == null ? void 0 : e.flipAxes) ?? false), solids: F.state((e == null ? void 0 : e.solids) ?? true), custom3D: F.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: F.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: F.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: F.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function ot(e, t, r) {
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
function st(e, t, r) {
  const s = j(), n = new U(), a = new Be(new k(), new te({ color: s.elementLine }));
  pe((m, A) => {
    a.material.color.setHex(A.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const u = new Q({ vertexColors: true, transparent: true, opacity: s.shellOpacity, side: O, depthWrite: false }), h = new K(new k(), u);
  h.frustumCulled = false, n.add(h);
  let p = new D(s.shellWall), x = new D(s.shellSlab), f = new D(s.shellTri);
  pe((m, A) => {
    p = new D(A.shellWall), x = new D(A.shellSlab), f = new D(A.shellTri), u.opacity = A.shellOpacity, u.needsUpdate = true;
  });
  function g(m, A) {
    const w = Math.abs(A[0] - m[0]), E = Math.abs(A[1] - m[1]), Z = Math.abs(A[2] - m[2]);
    return Z > w && Z > E || E > w && E > Z;
  }
  return F.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const m = t.elemColumns.rawVal, A = t.elemBeams.rawVal, w = r.val, E = ((_a = e.elements) == null ? void 0 : _a.val) || [], Z = E.filter((C) => {
      if (C.length !== 2) return true;
      const b = w[C[0]], y = w[C[1]];
      if (!b || !y) return true;
      const d = g(b, y);
      return !(d && !m || !d && !A);
    }).map((C) => it(C).map((b) => [...w[b[0]], ...w[b[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new q(Z, 3));
    const B = [], N = [];
    function z(C, b, y, d) {
      const o = [b[0] - C[0], b[1] - C[1], b[2] - C[2]], i = [d[0] - C[0], d[1] - C[1], d[2] - C[2]], l = o[1] * i[2] - o[2] * i[1], c = o[2] * i[0] - o[0] * i[2], v = o[0] * i[1] - o[1] * i[0], S = Math.sqrt(l * l + c * c + v * v);
      return S < 1e-12 ? false : Math.abs(v / S) < 0.5;
    }
    for (const C of E) if (C.length === 3) {
      const [b, y, d] = C;
      if (w[b] && w[y] && w[d]) {
        B.push(...w[b], ...w[y], ...w[d]);
        for (let o = 0; o < 3; o++) N.push(f.r, f.g, f.b);
      }
    } else if (C.length === 4) {
      const [b, y, d, o] = C;
      if (w[b] && w[y] && w[d] && w[o]) {
        const i = z(w[b], w[y], w[d], w[o]) ? p : x;
        B.push(...w[b], ...w[y], ...w[d]), B.push(...w[b], ...w[d], ...w[o]);
        for (let l = 0; l < 6; l++) N.push(i.r, i.g, i.b);
      }
    }
    B.length > 0 ? (h.geometry.dispose(), h.geometry = new k(), h.geometry.setAttribute("position", new q(B, 3)), h.geometry.setAttribute("color", new q(N, 3)), h.geometry.computeVertexNormals(), h.visible = true) : h.visible = false;
  }), F.derive(() => {
    n.visible = t.elements.val;
  }), n;
}
function it(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let r = 0; r < e.length; r++) t.push([e[r], e[(r + 1) % e.length]]);
  return t;
}
function Pe(e) {
  const t = j(), r = new ke(e, 20, t.grid, t.grid);
  return r.position.set(0.5 * e, 0.5 * e, 0), r.rotateX(Math.PI / 2), r;
}
function at(e, t, r, s) {
  const n = new U(), a = new We(0.5, 0.5, 0.5), u = new Q({ color: 10166822 });
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const h = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((p, x) => {
      const f = r.val[x];
      if (!f) return;
      const g = new K(a, u);
      g.position.set(...f);
      const m = h * s.rawVal;
      g.scale.set(m, m, m), n.add(g);
    });
  }), F.derive(() => {
    if (s.val, !t.supports.rawVal) return;
    const p = 0.05 * t.gridSize.val * 0.6 * s.rawVal;
    n.children.forEach((x) => x.scale.set(p, p, p));
  }), F.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function rt(e, t, r, s) {
  const n = new U();
  n.name = "loadsGroup";
  function a(u) {
    if (u.length < 2) return 0.12 * t.gridSize.rawVal;
    const h = [1 / 0, 1 / 0, 1 / 0], p = [-1 / 0, -1 / 0, -1 / 0];
    for (const f of u) for (let g = 0; g < 3; g++) h[g] = Math.min(h[g], f[g]), p[g] = Math.max(p[g], f[g]);
    return 0.08 * Math.max(p[0] - h[0], p[1] - h[1], p[2] - h[2], 0.1);
  }
  return F.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((p) => p.dispose()), n.clear();
    const u = r.val, h = a(u);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((p, x) => {
      const f = u[x];
      if (!f) return;
      const g = new R(...p.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const m = new ee(g, new R(...f), 1, 15637248, 0.3, 0.3), A = h * s.rawVal;
      m.scale.set(A, A, A), n.add(m);
    });
  }), F.derive(() => {
    if (s.val, !t.loads.rawVal) return;
    const h = a(r.rawVal) * s.rawVal;
    n.children.forEach((p) => p.scale.set(h, h, h));
  }), F.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function lt(e, t, r) {
  const s = new U();
  return F.derive(() => {
    if (!e.nodesIndexes.val) return;
    s.children.forEach((a) => a.dispose()), s.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((a, u) => {
      const h = new H(`${u}`);
      h.position.set(...a), h.updateScale(n * r.rawVal), s.add(h);
    });
  }), F.derive(() => {
    if (r.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    s.children.forEach((a) => a.updateScale(n * r.rawVal));
  }), F.derive(() => {
    s.visible = e.nodesIndexes.val;
  }), s;
}
function ct(e, t, r, s) {
  const n = new U();
  return F.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((u) => u.dispose()), n.clear();
    const a = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((u, h) => {
      const p = new H(`${h}`, void 0, "#001219");
      p.position.set(...dt(u.map((x) => r.rawVal[x]))), p.updateScale(a * s.rawVal), n.add(p);
    });
  }), F.derive(() => {
    if (s.val, !t.elementsIndexes.rawVal) return;
    const a = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((u) => u.updateScale(a * s.rawVal));
  }), F.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function dt(e) {
  const t = e.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function ut(e, t) {
  const r = new U(), s = 0.05 * e * 1, n = j(), a = new H("X", "red", "transparent"), u = new H(t ? "Z" : "Y", "green", "transparent"), h = new H(t ? "Y" : "Z", "blue", "transparent"), p = new ee(new R(1, 0, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), x = new ee(new R(0, 1, 0), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), f = new ee(new R(0, 0, 1), new R(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * s, 0, 0), u.position.set(0, 1.3 * s, 0), h.position.set(0, 0, 1.3 * s), a.updateScale(0.4 * s), u.updateScale(0.4 * s), h.updateScale(0.4 * s), p.scale.set(s, s, s), x.scale.set(s, s, s), f.scale.set(s, s, s), r.add(p, x, f, a, u, h), r;
}
function Se(e, t) {
  const r = new R(...e), n = new R(...t).clone().sub(r), a = n.length(), u = n.dot(new R(1, 0, 0)) / a, h = n.dot(new R(0, 1, 0)) / a, p = n.dot(new R(0, 0, 1)) / a, x = Math.sqrt(u ** 2 + h ** 2);
  let f = new be().fromArray([[u, h, p], [-h / x, u / x, 0], [-u * p / x, -h * p / x, x]].flat());
  return p === 1 && (f = new be().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), p === -1 && (f = new be().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Re().setFromMatrix3(f);
}
function ge(e, t) {
  return e == null ? void 0 : e.map((r, s) => (9 * r + t[s]) / 10);
}
function oe(e) {
  const t = e.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), r = e.length;
  return [t[0] / r, t[1] / r, t[2] / r];
}
function ht(e, t, r) {
  const s = oe([t, r]), n = oe([e, r]), a = oe([e, t]), u = new R(...s).sub(new R(...n)).normalize(), h = new R(...r).sub(new R(...a)).normalize(), p = u.clone().cross(h).normalize(), x = p.clone().cross(u).normalize();
  return new Re().makeBasis(u, x, p);
}
function pt(e, t, r, s) {
  const n = new U(), a = new k(), u = new te({ vertexColors: true }), h = [0, 0, 0], p = [1, 0, 0], x = [0, 1, 0], f = [0, 0, 1];
  a.setAttribute("position", new q([...h, ...p, ...h, ...x, ...h, ...f], 3));
  const g = [255, 0, 0], m = [0, 255, 0], A = [0, 0, 255];
  return a.setAttribute("color", new q([...g, ...g, ...m, ...m, ...A, ...A], 3)), F.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((w) => {
      const E = new Be(a, u), Z = r.rawVal[w[0]], B = r.rawVal[w[1]];
      if (w.length === 2 && (E.position.set(...ge(Z, B)), E.rotation.setFromRotationMatrix(Se(Z, B))), w.length === 3) {
        const C = r.rawVal[w[2]];
        E.position.set(...oe([Z, B, C])), E.rotation.setFromRotationMatrix(ht(Z, B, C));
      }
      const z = 0.05 * t.gridSize.rawVal * 0.75 * s.rawVal;
      E.scale.set(z, z, z), n.add(E);
    }));
  }), F.derive(() => {
    if (s.val, !t.orientations.rawVal) return;
    const E = 0.05 * t.gridSize.val * 0.75 * s.rawVal;
    n.children.forEach((Z) => Z.scale.set(E, E, E));
  }), F.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function mt(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), r = (e.h * 100).toFixed(0);
    return `${t}x${r}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function ft(e, t, r, s) {
  const n = new U();
  function a(b, y) {
    const d = b / 2, o = y / 2, i = new Float32Array([0, -d, -o, 0, d, -o, 0, d, o, 0, -d, -o, 0, d, o, 0, -d, o]), l = new k();
    l.setAttribute("position", new $(i, 3));
    const c = new Float32Array([0, -d, -o, 0, d, -o, 0, d, o, 0, -d, o, 0, -d, -o]), v = new k();
    return v.setAttribute("position", new $(c, 3)), { fill: l, outline: v };
  }
  function u(b, y = 24) {
    const d = b / 2, o = new Float32Array(y * 9);
    for (let v = 0; v < y; v++) {
      const S = v / y * Math.PI * 2, V = (v + 1) / y * Math.PI * 2;
      o[v * 9] = 0, o[v * 9 + 1] = 0, o[v * 9 + 2] = 0, o[v * 9 + 3] = 0, o[v * 9 + 4] = d * Math.cos(S), o[v * 9 + 5] = d * Math.sin(S), o[v * 9 + 6] = 0, o[v * 9 + 7] = d * Math.cos(V), o[v * 9 + 8] = d * Math.sin(V);
    }
    const i = new k();
    i.setAttribute("position", new $(o, 3));
    const l = new Float32Array((y + 1) * 3);
    for (let v = 0; v <= y; v++) {
      const S = v / y * Math.PI * 2;
      l[v * 3] = 0, l[v * 3 + 1] = d * Math.cos(S), l[v * 3 + 2] = d * Math.sin(S);
    }
    const c = new k();
    return c.setAttribute("position", new $(l, 3)), { fill: i, outline: c };
  }
  function h(b, y, d, o) {
    const i = d ?? y * 0.08, l = o ?? b * 0.07, c = b / 2, v = y / 2, S = v - i, V = l / 2, I = [];
    function M(P, L, W, _) {
      I.push(0, P, L, 0, W, L, 0, W, _, 0, P, L, 0, W, _, 0, P, _);
    }
    M(-c, -v, c, -S), M(-V, -S, V, S), M(-c, S, c, v);
    const Y = new k();
    Y.setAttribute("position", new $(new Float32Array(I), 3));
    const T = new Float32Array([0, -c, -v, 0, c, -v, 0, c, -S, 0, V, -S, 0, V, S, 0, c, S, 0, c, v, 0, -c, v, 0, -c, S, 0, -V, S, 0, -V, -S, 0, -c, -S, 0, -c, -v]), X = new k();
    return X.setAttribute("position", new $(T, 3)), { fill: Y, outline: X };
  }
  function p(b, y, d) {
    const o = b / 2, i = y / 2, l = o - d, c = i - d, v = [];
    function S(Y, T, X, P) {
      v.push(0, Y, T, 0, X, T, 0, X, P, 0, Y, T, 0, X, P, 0, Y, P);
    }
    S(-o, -i, o, -c), S(-o, c, o, i), S(-o, -c, -l, c), S(l, -c, o, c);
    const V = new k();
    V.setAttribute("position", new $(new Float32Array(v), 3));
    const I = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -l, -c, 0, l, -c, 0, l, -c, 0, l, c, 0, l, c, 0, -l, c, 0, -l, c, 0, -l, -c]), M = new k();
    return M.setAttribute("position", new $(I, 3)), { fill: V, outline: M };
  }
  function x(b, y, d) {
    const o = b / 2, i = y / 2, l = o - d, c = i - d, v = new k(), S = new Float32Array([0, -l, -c, 0, l, -c, 0, l, c, 0, -l, -c, 0, l, c, 0, -l, c]);
    v.setAttribute("position", new $(S, 3));
    const V = [];
    function I(X, P, L, W) {
      V.push(0, X, P, 0, L, P, 0, L, W, 0, X, P, 0, L, W, 0, X, W);
    }
    I(-o, -i, o, -c), I(-o, c, o, i), I(-o, -c, -l, c), I(l, -c, o, c);
    const M = new k();
    M.setAttribute("position", new $(new Float32Array(V), 3));
    const Y = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -l, -c, 0, l, -c, 0, l, -c, 0, l, c, 0, l, c, 0, -l, c, 0, -l, c, 0, -l, -c]), T = new k();
    return T.setAttribute("position", new $(Y, 3)), { concFill: v, steelFillGeom: M, outline: T };
  }
  function f(b, y, d) {
    const o = [], i = [[0, -b / 2, -y / 2], [0, -b / 2 + d, -y / 2], [0, -b / 2 + d, y / 2 - d], [0, b / 2, y / 2 - d], [0, b / 2, y / 2], [0, -b / 2, y / 2]], l = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const V of l) o.push(...i[V]);
    const c = new k();
    c.setAttribute("position", new $(new Float32Array(o), 3));
    const v = [];
    for (let V = 0; V < i.length; V++) {
      const I = (V + 1) % i.length;
      v.push(...i[V], ...i[I]);
    }
    const S = new k();
    return S.setAttribute("position", new $(new Float32Array(v), 3)), { fill: c, outline: S };
  }
  function g(b, y, d, o) {
    const i = o / 2, l = [], c = [[0, -b - i, -y / 2], [0, -d - i, -y / 2], [0, -d - i, y / 2 - d], [0, -i, y / 2 - d], [0, -i, y / 2], [0, -b - i, y / 2]], v = [[0, i, -y / 2], [0, i + d, -y / 2], [0, i + d, y / 2 - d], [0, b + i, y / 2 - d], [0, b + i, y / 2], [0, i, y / 2]], S = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Y of S) l.push(...c[Y]);
    for (const Y of S) l.push(...v[Y]);
    const V = new k();
    V.setAttribute("position", new $(new Float32Array(l), 3));
    const I = [];
    for (const Y of [c, v]) for (let T = 0; T < Y.length; T++) {
      const X = (T + 1) % Y.length;
      I.push(...Y[T], ...Y[X]);
    }
    const M = new k();
    return M.setAttribute("position", new $(new Float32Array(I), 3)), { fill: V, outline: M };
  }
  function m(b, y, d, o) {
    const i = y / 2, l = b, c = [[0, -l, -i], [0, -l, -i + d], [0, -o, -i + d], [0, -o, i - d], [0, -l, i - d], [0, -l, i], [0, 0, i], [0, 0, -i]], v = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], S = [];
    for (const Y of v) S.push(...c[Y]);
    const V = new k();
    V.setAttribute("position", new $(new Float32Array(S), 3));
    const I = [];
    for (let Y = 0; Y < c.length; Y++) {
      const T = (Y + 1) % c.length;
      I.push(...c[Y], ...c[T]);
    }
    const M = new k();
    return M.setAttribute("position", new $(new Float32Array(I), 3)), { fill: V, outline: M };
  }
  function A(b, y, d, o, i) {
    const l = y / 2, c = i / 2, v = [], S = [[0, -b, -l], [0, -b, -l + d], [0, -c - o, -l + d], [0, -c - o, l - d], [0, -b, l - d], [0, -b, l], [0, -c, l], [0, -c, -l]], V = S.map((X) => [X[0], -X[1], X[2]]), I = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const X of I) v.push(...S[X]);
    for (const X of I) v.push(...V[X]);
    const M = new k();
    M.setAttribute("position", new $(new Float32Array(v), 3));
    const Y = [];
    for (const X of [S, V]) for (let P = 0; P < X.length; P++) {
      const L = (P + 1) % X.length;
      Y.push(...X[P], ...X[L]);
    }
    const T = new k();
    return T.setAttribute("position", new $(new Float32Array(Y), 3)), { fill: M, outline: T };
  }
  function w(b, y, d, o) {
    const i = b / 2, l = y / 2, c = o / 2, v = [[0, -c, -l], [0, c, -l], [0, c, l - d], [0, i, l - d], [0, i, l], [0, -i, l], [0, -i, l - d], [0, -c, l - d]], S = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], V = [];
    for (const T of S) V.push(...v[T]);
    const I = new k();
    I.setAttribute("position", new $(new Float32Array(V), 3));
    const M = [];
    for (let T = 0; T < v.length; T++) {
      const X = (T + 1) % v.length;
      M.push(...v[T], ...v[X]);
    }
    const Y = new k();
    return Y.setAttribute("position", new $(new Float32Array(M), 3)), { fill: I, outline: Y };
  }
  function E(b, y, d = 24) {
    const o = b / 2, i = o - y, l = [];
    for (let V = 0; V < d; V++) {
      const I = V / d * Math.PI * 2, M = (V + 1) / d * Math.PI * 2, Y = Math.cos(I), T = Math.sin(I), X = Math.cos(M), P = Math.sin(M);
      l.push(0, o * Y, o * T, 0, o * X, o * P, 0, i * X, i * P), l.push(0, o * Y, o * T, 0, i * X, i * P, 0, i * Y, i * T);
    }
    const c = new k();
    c.setAttribute("position", new $(new Float32Array(l), 3));
    const v = [];
    for (let V = 0; V < d; V++) {
      const I = V / d * Math.PI * 2, M = (V + 1) / d * Math.PI * 2;
      v.push(0, o * Math.cos(I), o * Math.sin(I), 0, o * Math.cos(M), o * Math.sin(M)), v.push(0, i * Math.cos(I), i * Math.sin(I), 0, i * Math.cos(M), i * Math.sin(M));
    }
    const S = new k();
    return S.setAttribute("position", new $(new Float32Array(v), 3)), { fill: c, outline: S };
  }
  const Z = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), B = new te({ color: 52479 }), N = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), z = new te({ color: 16750848 });
  function C(b, y) {
    const d = Math.abs(y[0] - b[0]), o = Math.abs(y[1] - b[1]), i = Math.abs(y[2] - b[2]);
    return i > d && i > o || o > d && o > i;
  }
  return F.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const b = t.secColumns.rawVal, y = t.secBeams.rawVal;
    if (!b && !y) {
      n.children.forEach((c) => {
        c instanceof H && c.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((c) => {
      c instanceof H && c.dispose();
    }), n.clear();
    const d = (_a = e.elements) == null ? void 0 : _a.val, o = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!d || !o) return;
    const i = o.sectionShapes, l = t.secFloor.rawVal;
    d.forEach((c, v) => {
      if (c.length !== 2) return;
      const S = r.rawVal[c[0]], V = r.rawVal[c[1]];
      if (!S || !V) return;
      const I = C(S, V);
      if (I && !b || !I && !y) return;
      if (l >= 0) {
        const P = Math.min(S[1], V[1]);
        Math.max(S[1], V[1]);
        const L = t.gridSize.rawVal || 3;
        if (Math.floor(P / L + 0.01) !== l) return;
      }
      const M = i == null ? void 0 : i.get(v);
      if (!M) return;
      const Y = [(S[0] + V[0]) / 2, (S[1] + V[1]) / 2, (S[2] + V[2]) / 2], T = Se(S, V);
      if (M.type === "CFT") {
        const P = x(M.b, M.h, M.tw ?? M.b * 0.05), L = new K(P.concFill, Z);
        L.position.set(...Y), L.rotation.setFromRotationMatrix(T), n.add(L);
        const W = new K(P.steelFillGeom, N);
        W.position.set(...Y), W.rotation.setFromRotationMatrix(T), n.add(W);
        const _ = new ne(P.outline, z);
        _.position.set(...Y), _.rotation.setFromRotationMatrix(T), n.add(_);
      } else {
        let P, L, W;
        switch (M.type) {
          case "rect":
            P = a(M.b, M.h), L = Z, W = B;
            break;
          case "circ":
            P = u(M.d), L = Z, W = B;
            break;
          case "I":
            P = h(M.b, M.h, M.tf, M.tw), L = N, W = z;
            break;
          case "HSS":
            P = p(M.b, M.h, M.tw ?? M.b * 0.05), L = N, W = z;
            break;
          case "CFT":
            P = x(M.b, M.h, M.tw ?? M.b * 0.05), L = N, W = z;
            break;
          case "L":
            P = f(M.b ?? M.h, M.h, M.t ?? M.tw ?? 3e-3), L = N, W = z;
            break;
          case "2L":
            P = g(M.b ?? M.h, M.h, M.t ?? M.tw ?? 3e-3, M.dis ?? 0.01), L = N, W = z;
            break;
          case "C":
          case "coldC":
            P = m(M.b, M.h, M.tf ?? M.t ?? 3e-3, M.tw ?? M.t ?? 3e-3), L = N, W = z;
            break;
          case "2C":
            P = A(M.b, M.h, M.tf ?? 5e-3, M.tw ?? 5e-3, M.dis ?? 0.01), L = N, W = z;
            break;
          case "T":
            P = w(M.b, M.h, M.tf ?? 0.01, M.tw ?? 6e-3), L = N, W = z;
            break;
          case "pipe":
            P = E(M.d, M.tw ?? M.d * 0.05), L = N, W = z;
            break;
          default:
            return;
        }
        const _ = new K(P.fill, L);
        _.position.set(...Y), _.rotation.setFromRotationMatrix(T), n.add(_);
        const G = new ne(P.outline, W);
        G.position.set(...Y), G.rotation.setFromRotationMatrix(T), n.add(G);
      }
      const X = mt(M);
      if (X) {
        const L = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(M.type) ? "#ff9900" : "#00ccff", W = new H(X, L, "transparent");
        W.position.set(Y[0], Y[1], Y[2]);
        const _ = 0.05 * t.gridSize.rawVal * 0.5;
        W.updateScale(_ * ((s == null ? void 0 : s.rawVal) ?? 1)), n.add(W);
      }
    });
  }), s && F.derive(() => {
    if (s.val, !t.sections.rawVal) return;
    const b = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((y) => {
      y instanceof H && y.updateScale(b * s.rawVal);
    });
  }), F.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class le extends U {
  constructor(t, r, s, n, a, u, h) {
    super();
    const p = new ue().moveTo(0, 0).lineTo(0, u[1]).lineTo(s, u[1]).lineTo(s, 0).lineTo(0, 0), x = p.getPoints(), f = new k().setFromPoints(x);
    this.lines = new ne(f, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), h && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new he(p), m = new Q({ color: u[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new K(g, m), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), h && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new H(`${a[1].toFixed(4)}`), this.normalizedResult = u, this.textPosition = oe([t, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Xe extends U {
  constructor(t, r, s, n, a, u, h) {
    super();
    const p = a[0] * s / (a[0] + a[1]), x = a[0] * a[1] > 0;
    if (this.text = new H(`${a[0].toFixed(4)}`), this.text2 = new H(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = u, this.textPosition = ge(t, r), this.text2Position = ge(r, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), x) {
      const f = new ue().moveTo(0, 0).lineTo(0, u[0]).lineTo(p, 0).lineTo(0, 0), g = new ue().moveTo(p, 0).lineTo(s, -u[1]).lineTo(s, 0).lineTo(p, 0), m = f.getPoints(), A = g.getPoints(), w = new k().setFromPoints(m), E = new k().setFromPoints(A), Z = new te({ color: j().resultOutline });
      this.lines = new ne(w, Z), this.lines2 = new ne(E, Z), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), h && this.lines.rotateX(Math.PI / 2), h && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const B = new he(f), N = new he(g), z = new Q({ color: u[0] > 0 ? 24435 : 11411474, side: O }), C = new Q({ color: -u[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new K(B, z), this.mesh2 = new K(N, C), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), h && this.mesh.rotateX(Math.PI / 2), h && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const f = new ue().moveTo(0, 0).lineTo(0, u[0]).lineTo(s, -u[1]).lineTo(s, 0).lineTo(0, 0), g = f.getPoints(), m = new k().setFromPoints(g);
      this.lines = new ne(m, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), h && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const A = new he(f), w = new Q({ color: u[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new K(A, w), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), h && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Le = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Le || {});
function wt(e, t, r, s) {
  const n = new U(), a = { normals: le, shearsY: le, shearsZ: le, torsions: le, bendingsY: Xe, bendingsZ: Xe };
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, r.val, t.frameResults.val == "none") return;
    n.children.forEach((h) => h.dispose()), n.clear();
    const u = Le[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[u]) == null ? void 0 : _b.forEach((h, p) => {
      var _a2, _b2;
      const x = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[p]) ?? [0, 1], f = r.rawVal[x[0]], g = r.rawVal[x[1]], m = new R(...g).distanceTo(new R(...f)), A = vt((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[u]), w = h == null ? void 0 : h.map((N) => N / (A === 0 ? 1 : A)), E = Se(f, g), Z = new a[u](f, g, m, E, h ?? [0, 0], w ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(u)), B = 0.05 * t.gridSize.rawVal;
      Z.updateScale(B * s.rawVal), n.add(Z);
    });
  }), F.derive(() => {
    if (s.val, t.frameResults.rawVal == "none") return;
    const u = 0.05 * t.gridSize.val;
    n.children.forEach((h) => h.updateScale(u * s.rawVal));
  }), F.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function vt(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((r) => {
    const s = Math.max(...r ?? [0, 0]);
    s > t && (t = s);
  }), t;
}
class xt extends U {
  constructor(t, r, s) {
    super();
    const n = r === Ce.reactions;
    s[0] && (this.xText1 = new H(`${n ? "Fx" : "Dx"}: ` + s[0].toFixed(4))), s[3] && (this.xText2 = new H(`${n ? "Mx" : "Rx"}: ` + s[3].toFixed(4))), s[1] && (this.yText1 = new H(`${n ? "Fy" : "Dy"}: ` + s[1].toFixed(4))), s[4] && (this.yText2 = new H(`${n ? "My" : "Ry"}: ` + s[4].toFixed(4))), s[2] && (this.zText1 = new H(`${n ? "Fz" : "Dz"}: ` + s[2].toFixed(4))), s[5] && (this.zText2 = new H(`${n ? "Mz" : "Rz"}: ` + s[5].toFixed(4))), (s[0] || s[3]) && (this.xArrow = new ee(new R(1, 0, 0), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[1] || s[4]) && (this.yArrow = new ee(new R(0, 1, 0), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[2] || s[5]) && (this.zArrow = new ee(new R(0, 0, 1), new R(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var Ce = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Ce || {});
function bt(e, t, r, s) {
  const n = new U();
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((h) => h.dispose()), n.clear();
    const a = Ce[t.nodeResults.rawVal], u = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((h, p) => {
      const x = new xt(r.rawVal[p], a, h ?? [0, 0, 0, 0, 0, 0]);
      x.updateScale(u * s.rawVal), n.add(x);
    });
  }), F.derive(() => {
    if (s.val, t.nodeResults.rawVal == "none") return;
    const a = 0.05 * t.gridSize.val;
    n.children.forEach((u) => u.updateScale(a * s.rawVal));
  }), F.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function Mt({ drawingObj: e, gridObj: t, scene: r, camera: s, controls: n, gridSize: a, derivedDisplayScale: u, rendererElm: h, viewerRender: p }) {
  const x = new Ne(), f = new _e(), g = new K(new $e(a, a), new Q({ side: O })), m = new ce(new k(), new de()), A = new ce(new k(), new de({ color: "gray" })), w = new ce(new k(), new de({ color: "orange", size: 0.8 }));
  r.add(w), m.geometry.setAttribute("position", new q(e.points.rawVal.flat(), 3)), m.geometry.computeBoundingSphere(), m.frustumCulled = false, A.frustumCulled = false, r.add(A), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), F.derive(() => {
    e.gridTarget && (yt(t, { position: new R(...e.gridTarget.val.position), quaternion: new De().setFromEuler(new ze(...e.gridTarget.val.rotation)) }, p), g.position.set(...e.gridTarget.val.position), g.quaternion.setFromEuler(new ze(...e.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), F.derive(() => {
    m.geometry.setAttribute("position", new q(e.points.val.flat(), 3)), m.geometry.computeBoundingSphere();
  }), F.derive(() => {
    const z = 0.05 * a * 0.5 * u.val;
    A.material.size = z, x.params.Points.threshold = 0.4 * z;
  }), F.derive(() => {
    var _a;
    const z = e.points.val ?? [], b = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], y = [];
    for (const o of b) {
      const [i, l, c] = z[o];
      y.push(i, l, c);
    }
    const d = new k();
    d.setAttribute("position", new q(y, 3)), w.geometry.dispose(), w.geometry = d;
  });
  let E = false, Z = 0;
  h.addEventListener("pointerdown", () => {
    E = true;
  }), h.addEventListener("pointerup", () => {
    E = false;
  }), h.addEventListener("pointermove", () => {
    E && Z++;
  }), h.addEventListener("click", (z) => {
    if (Z > 5) {
      Z = 0;
      return;
    }
    Z = 0, f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, s);
    const C = x.intersectObject(g);
    if (C.length) {
      let b = C[0].point;
      (z.ctrlKey || z.metaKey) && (b = new R(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), e.points.val = [...e.points.rawVal, b.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), h.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), h.addEventListener("pointermove", (z) => {
    f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, s);
    const C = x.intersectObject(g);
    if (A.geometry.deleteAttribute("position"), C.length) {
      let b = C[0].point;
      (z.ctrlKey || z.metaKey) && (b = new R(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), A.geometry.setAttribute("position", new q(b.toArray(), 3));
    }
    p();
  }), h.addEventListener("pointermove", (z) => {
    var _a;
    f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, s);
    let C = false;
    const b = x.intersectObject(m), y = x.intersectObject(g);
    if (b.length && y.length) {
      const d = new R(...e.points.rawVal[b[0].index]), o = new R(...y[0].point), i = d.sub(o), l = (_a = y[0].face) == null ? void 0 : _a.normal;
      l.transformDirection(g.matrixWorld), Math.abs(i.dot(l)) < 1e-4 && (C = true);
    }
    A.visible = !C;
  });
  let B = false, N;
  h.addEventListener("pointermove", (z) => {
    var _a;
    if (!Z) return;
    f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, s);
    let C = false;
    const b = x.intersectObject(m), y = x.intersectObject(g);
    if (b.length && y.length) {
      const o = new R(...e.points.rawVal[b[0].index]), i = new R(...y[0].point), l = o.sub(i), c = (_a = y[0].face) == null ? void 0 : _a.normal;
      c.transformDirection(g.matrixWorld), Math.abs(l.dot(c)) < 1e-4 && (C = true);
    }
    if (C && Z < 5 && (B = true, n.enabled = false, N = b[0].index), !B || Z % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (N !== void 0) {
      let o = y[0].point;
      (z.ctrlKey || z.metaKey) && (o = new R(Math.round(o.x), Math.round(o.y), Math.round(o.z))), d[N] = o.toArray();
    }
    e.points.val = d;
  }), h.addEventListener("pointerup", () => {
    n.enabled = true, B = false;
  }), h.addEventListener("contextmenu", (z) => {
    var _a;
    f.x = z.clientX / window.innerWidth * 2 - 1, f.y = -(z.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(f, s);
    let C = false;
    const b = x.intersectObject(m), y = x.intersectObject(g);
    if (b.length && y.length) {
      const i = new R(...e.points.rawVal[b[0].index]), l = new R(...y[0].point), c = i.sub(l), v = (_a = y[0].face) == null ? void 0 : _a.normal;
      v.transformDirection(g.matrixWorld), Math.abs(c.dot(v)) < 1e-4 && (C = true);
    }
    if (!C) return;
    const d = [...e.points.rawVal];
    if (d.splice(b[0].index, 1), e.points.val = d, !e.polylines) return;
    const o = e.polylines.rawVal.map((i) => i.filter((l) => l !== b[0].index)).map((i) => i.map((l) => l > b[0].index ? l - 1 : l)).filter((i) => i.length);
    o.push([]), e.polylines.val = o;
  });
}
function yt(e, t, r) {
  const a = Math.round(14.999999999999998), u = { position: e.position.clone(), quaternion: e.quaternion.clone() }, h = setInterval(x, 1e3 / 30);
  let p = 0;
  function x() {
    p++;
    const f = p / a;
    e.position.lerpVectors(u.position, t.position, f), e.quaternion.slerpQuaternions(u.quaternion, t.quaternion, f), r && r(), p == a && clearInterval(h);
  }
}
class Ze {
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
    const s = 1 / this.n, n = new D(), a = new D();
    this.lut.length = 0, this.lut.push(new D(this.map[0][1]));
    for (let u = 1; u < r; u++) {
      const h = u * s;
      for (let p = 0; p < this.map.length - 1; p++) if (h > this.map[p][0] && h <= this.map[p + 1][0]) {
        const x = this.map[p][0], f = this.map[p + 1][0];
        n.setHex(this.map[p][1], re), a.setHex(this.map[p + 1][1], re);
        const g = new D().lerpColors(n, a, (h - x) / (f - x));
        this.lut.push(g);
      }
    }
    return this.lut.push(new D(this.map[this.map.length - 1][1])), this;
  }
  copy(t) {
    return this.lut = t.lut, this.map = t.map, this.n = t.n, this.minV = t.minV, this.maxV = t.maxV, this;
  }
  getColor(t) {
    t = He.clamp(t, this.minV, this.maxV), t = (t - this.minV) / (this.maxV - this.minV);
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
    const u = 1 / this.n, h = new D(), p = new D(), x = new D();
    for (let f = 1; f >= 0; f -= u) for (let g = this.map.length - 1; g >= 0; g--) if (f < this.map[g][0] && f >= this.map[g - 1][0]) {
      const m = this.map[g - 1][0], A = this.map[g][0];
      h.setHex(this.map[g - 1][1], re), p.setHex(this.map[g][1], re), x.lerpColors(h, p, (f - m) / (A - m)), n[a * 4] = Math.round(x.r * 255), n[a * 4 + 1] = Math.round(x.g * 255), n[a * 4 + 2] = Math.round(x.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(s, 0, 0), t;
  }
}
const Me = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function gt(e, t, r) {
  const s = new Ze(), n = new D(), a = new K(new k(), new Q({ side: O, vertexColors: true }));
  return s.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, F.derive(() => {
    a.geometry.setAttribute("position", new q(e.val.flat(), 3));
    const u = [];
    for (const w of t.val) w.length === 3 ? u.push(w[0], w[1], w[2]) : w.length === 4 && (u.push(w[0], w[1], w[2]), u.push(w[0], w[2], w[3]));
    a.geometry.setIndex(new Ge(u, 1)), a.geometry.setAttribute("color", new q(e.val.map(() => [0, 0, 0]).flat(), 3));
    const h = r.val.filter((w) => Number.isFinite(w));
    let p, x;
    const f = Ve.val;
    if (f ? (x = f[0], p = f[1]) : (p = h.length ? Math.max(...h) : 1, x = h.length ? Math.min(...h) : 0, x >= 0 && p > 0 && (x = 0)), p === x) {
      const w = Math.max(Math.abs(p) * 1e-6, 1e-9);
      p += w, x -= w;
    }
    const g = f && f[0] > f[1], m = Math.min(x, p), A = Math.max(x, p);
    s.setMin(m), s.setMax(A);
    for (let w = 0; w < r.val.length; w++) {
      const E = r.val[w];
      if (!Number.isFinite(E)) {
        a.geometry.attributes.color.setXYZ(w, 0.3, 0.3, 0.3);
        continue;
      }
      const Z = g ? A + m - E : E, B = s.getColor(Z) ?? new D(0, 0, 0);
      n.copy(B).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(w, n.r, n.g, n.b);
    }
  }), a;
}
function Ft(e, t, r, s) {
  const n = gt(r, e.elements, s);
  return F.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const St = 6, ye = 10, Ct = 0.012;
function Vt(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function At(e, t, r, s) {
  if (!r && !s) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && r) {
    const a = r[e];
    if (a && a.has(t)) return a.get(t);
  }
  return null;
}
function zt(e, t, r, s) {
  const n = new U(), a = new Ze();
  a.setColorMap("rainbow");
  const u = new D(), h = F.state([]);
  return F.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const p = r.val, x = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], f = Vt(t.frameResults.val);
    if (n.children.forEach((v) => {
      v.geometry && v.geometry.dispose(), v.material && v.material.dispose();
    }), n.clear(), !f || x.length === 0 || p.length === 0) {
      h.val = [];
      return;
    }
    const g = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, m = (_c = e.deformOutputs) == null ? void 0 : _c.val, A = [], w = [];
    for (let v = 0; v < x.length; v++) {
      if (x[v].length !== 2) continue;
      const V = At(f, v, g, m);
      V && (A.push(V[0], V[1]), w.push({ idx: v, vals: V }));
    }
    if (A.length === 0) {
      h.val = [];
      return;
    }
    const E = Math.min(...A), Z = Math.max(...A);
    a.setMin(E), a.setMax(Z), h.val = A;
    const B = [1 / 0, 1 / 0, 1 / 0], N = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of p) for (let S = 0; S < 3; S++) B[S] = Math.min(B[S], v[S]), N[S] = Math.max(N[S], v[S]);
    const C = Math.max(N[0] - B[0], N[1] - B[1], N[2] - B[2], 1) * Ct, b = [], y = [], d = [];
    let o = 0;
    for (const { idx: v, vals: S } of w) {
      const V = x[v], I = p[V[0]], M = p[V[1]];
      if (!I || !M) continue;
      const Y = new R(M[0] - I[0], M[1] - I[1], M[2] - I[2]), T = Y.length();
      if (T < 1e-10) continue;
      Y.normalize();
      const X = Math.abs(Y.y) < 0.99 ? new R(0, 1, 0) : new R(1, 0, 0), P = new R().crossVectors(Y, X).normalize(), L = new R().crossVectors(Y, P).normalize(), W = ye + 1, _ = St;
      for (let G = 0; G < W; G++) {
        const J = G / ye, se = I[0] + Y.x * T * J, ie = I[1] + Y.y * T * J, me = I[2] + Y.z * T * J, fe = S[0] + (S[1] - S[0]) * J, ae = a.getColor(fe) ?? new D(0, 0, 0);
        u.copy(ae).convertSRGBToLinear();
        for (let we = 0; we < _; we++) {
          const Ae = we / _ * Math.PI * 2, ve = Math.cos(Ae), xe = Math.sin(Ae);
          b.push(se + (P.x * ve + L.x * xe) * C, ie + (P.y * ve + L.y * xe) * C, me + (P.z * ve + L.z * xe) * C), y.push(u.r, u.g, u.b);
        }
      }
      for (let G = 0; G < ye; G++) for (let J = 0; J < _; J++) {
        const se = (J + 1) % _, ie = o + G * _ + J, me = o + G * _ + se, fe = o + (G + 1) * _ + J, ae = o + (G + 1) * _ + se;
        d.push(ie, me, ae), d.push(ie, ae, fe);
      }
      o += W * _;
    }
    if (b.length === 0) return;
    const i = new k();
    i.setAttribute("position", new q(b, 3)), i.setAttribute("color", new q(y, 3)), i.setIndex(d), i.computeVertexNormals();
    const l = new Q({ vertexColors: true, side: O }), c = new K(i, l);
    c.frustumCulled = false, n.add(c);
  }), n.__colorMapValues = h, n;
}
function Te(e, t = 8) {
  const r = document.createElement("div");
  r.id = "legend";
  const s = document.createElement("div");
  s.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", r.appendChild(s), setTimeout(() => {
    F.derive(() => {
      s.textContent = Fe.val ? `[${Fe.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (p, x) => x / t).reverse();
  let a, u;
  n.forEach((p, x) => {
    a = document.createElement("div"), a.id = `marker-${x}`, a.className = "marker", a.style.marginTop = x == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, u = document.createElement("p"), u.id = `marker-text-${x}`, a.append(u), r.append(a);
  });
  const h = [];
  return r.querySelectorAll("p").forEach((p) => h.push(p)), setTimeout(() => {
    F.derive(() => {
      n.forEach((p, x) => {
        const f = h[x];
        f && (f.innerText = Yt(e.val, p).toString());
      });
    });
  }), r;
}
function Yt(e, t) {
  const r = Ve.val;
  if (r) return (r[0] + t * (r[1] - r[0])).toPrecision(3);
  const s = e.filter((u) => Number.isFinite(u));
  if (s.length === 0) return "0";
  let n = Math.min(...s);
  const a = Math.max(...s);
  return n >= 0 && a > 0 && (n = 0), (n + t * (a - n)).toPrecision(3);
}
function Lt({ mesh: e, settingsObj: t, drawingObj: r, objects3D: s, solids: n }) {
  je.DEFAULT_UP = new R(0, 0, 1);
  const a = document.createElement("div"), u = new qe(), h = new Ue(45, 1, 0.1, 2 * 1e6), p = new Ke(-10, 10, 10, -10, -1e3, 2e6);
  let x = h;
  const f = new Qe({ antialias: true });
  f.localClippingEnabled = true;
  const g = new Je(h, f.domElement), m = nt(t), A = F.derive(() => m.displayScale.val === 0 ? 1 : m.displayScale.val > 0 ? m.displayScale.val : -1 / m.displayScale.val), w = Pt(e, m);
  let E = Pe(m.gridSize.rawVal);
  a.appendChild(tt(m, e, n)), a.setAttribute("id", "viewer"), a.appendChild(f.domElement), f.setPixelRatio(window.devicePixelRatio);
  const Z = j();
  f.setClearColor(Z.background, 1);
  const B = m.gridSize.rawVal, N = B * 0.5 + B * 0.5 / Math.tan(45 * 0.5);
  h.position.set(0.5 * B, 0.8 * -N, 0.5 * B), g.target.set(0.5 * B, 0.5 * B, 0), g.minDistance = 1, g.maxDistance = N * 2.5, a.__settings = m, g.zoomSpeed = 1, g._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, g.update(), u.add(E, ut(m.gridSize.rawVal, m.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const o of d) {
      const i = (_a = o.target) == null ? void 0 : _a.clientWidth, l = (_b = o.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || l === 0) continue;
      h.aspect = i / l, h.updateProjectionMatrix();
      const c = i / l, v = p.top;
      p.left = -v * c, p.right = v * c, p.updateProjectionMatrix(), f.setSize(i, l), C();
    }
  }).observe(a), g.addEventListener("change", C), F.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, m.displayScale.val, m.nodes.val, m.elements.val, m.elemColumns.val, m.elemBeams.val, m.nodesIndexes.val, m.elementsIndexes.val, m.orientations.val, m.sections.val, m.secColumns.val, m.secBeams.val, m.secFloor.val, m.supports.val, m.loads.val, m.deformedShape.val, m.nodeResults.val, m.frameResults.val, m.shellResults.val, setTimeout(C);
  });
  function C() {
    f.render(u, x);
  }
  function b(d) {
    x = d, g.object = d, g.update(), C();
  }
  if (e) {
    u.add(ot(m, w, A), st(e, m, w), lt(m, w, A), ct(e, m, w, A), at(e, m, w, A), rt(e, m, w, A), pt(e, m, w, A), ft(e, m, w, A), bt(e, m, w, A), wt(e, m, w, A));
    const d = It(e, m), o = Ft(e, m, w, d), i = Te(d);
    u.add(o), a.appendChild(i);
    const l = zt(e, m, w);
    u.add(l);
    const c = l.__colorMapValues, v = Te(c);
    v.id = "frame-legend", a.appendChild(v), F.derive(() => {
      const S = m.shellResults.val != "none", V = m.frameResults.val.startsWith("contour:");
      i.hidden = !S, o.visible = S, v.hidden = !V;
    });
  }
  if (n) {
    const d = new Oe(16777215, 0.5);
    u.add(d);
    const o = new Ye(16777215, 0.5);
    o.position.set(30, 25, -10), o.shadow.mapSize.width = 1024, o.shadow.mapSize.height = 1024, u.add(o);
    const i = 10;
    o.shadow.camera.left = -i, o.shadow.camera.right = i, o.shadow.camera.top = i, o.shadow.camera.bottom = -i, o.shadow.camera.far = 1e3;
    const l = new Ye(16777215, 0.5);
    l.color.setHSL(11, 43, 96), l.position.set(-10, 0, 30), u.add(l), F.derive(() => {
      (n == null ? void 0 : n.val.length) && (u.remove(...n.oldVal), u.add(...n.rawVal), C());
    }), F.derive(() => {
      n.rawVal.forEach((c) => c.visible = m.solids.val), C();
    });
  }
  if (s) {
    const d = [], o = (l) => {
      var _a;
      return ((_a = l == null ? void 0 : l.userData) == null ? void 0 : _a.isCota) ? m.showCotas.val : m.custom3D.val;
    }, i = () => {
      for (const l of d) l.visible = o(l);
      C();
    };
    F.derive(() => {
      const l = s.val;
      d.length && (u.remove(...d), d.length = 0), l.length && (u.add(...l), d.push(...l), i()), C();
    }), F.derive(() => {
      m.custom3D.val, i();
    }), F.derive(() => {
      m.showCotas.val, i();
    });
  }
  r && Mt({ drawingObj: r, gridObj: E, scene: u, camera: h, controls: g, gridSize: B, derivedDisplayScale: A, rendererElm: f.domElement, viewerRender: C }), pe((d, o) => {
    f.setClearColor(o.background, 1), u.remove(E), E.geometry.dispose(), E.material.dispose(), E = Pe(m.gridSize.rawVal), u.add(E), a.style.setProperty("--awatif-legend-color", o.legendMarker), C();
  });
  const y = { scene: u, perspCamera: h, orthoCamera: p, get camera() {
    return x;
  }, controls: g, renderer: f, rendererElm: f.domElement, render: C, setActiveCamera: b, settings: m };
  return a.__ctx = y, a;
}
function Pt(e, t) {
  return F.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], s = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!s || r.length === 0) return r;
    const n = t.deformScale.val, a = t.deformScale.val * t.deformScaleZ.val, u = Number.isFinite(n) ? n : 1, h = Number.isFinite(a) ? a : 1;
    return r.map((p, x) => {
      var _a2;
      const f = ((_a2 = s.get(x)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], g = Number.isFinite(f[0]) ? f[0] : 0, m = Number.isFinite(f[1]) ? f[1] : 0, A = Number.isFinite(f[2]) ? f[2] : 0;
      return [p[0] + g * u, p[1] + m * u, p[2] + A * h];
    });
  });
}
const Ve = F.state(null), Fe = F.state(""), Xt = F.state("kN"), Tt = F.state("mm"), Ie = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Ee = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 };
function It(e, t) {
  const r = F.state([]);
  let s;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(s || (s = {})), F.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), w = (Y, T) => {
      Y == null ? void 0 : Y.forEach((X, P) => {
        const L = e.elements.val[P];
        if (L) for (let W = 0; W < L.length; W++) T.set(L[W], [X[W] ?? X[0]]);
      });
    };
    w((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), w((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), w((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, u), w((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, h), w((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, p), w((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, x), w((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, f), w((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), w((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, m), w((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, A);
    const E = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, Z = t.shellResults.val, B = E == null ? void 0 : E[Z];
    Ve.val = Array.isArray(B) && B.length === 2 ? [B[0], B[1]] : null;
    const N = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [u, 0], membraneXX: [h, 0], membraneYY: [p, 0], membraneXY: [x, 0], tranverseShearX: [f, 0], tranverseShearY: [g, 0], vonMises: [m, 0], pressure: [A, 0], displacementX: [(_x = (_w = e.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = e.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = e.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, z = t.shellResults.val, C = Xt.val, b = Tt.val, y = z === "displacementX" || z === "displacementY" || z === "displacementZ", d = z === "bendingXX" || z === "bendingYY" || z === "bendingXY", o = z === "membraneXX" || z === "membraneYY" || z === "membraneXY", i = z === "vonMises" || z === "pressure", l = z === "tranverseShearX" || z === "tranverseShearY", c = (_C = t.solidResults) == null ? void 0 : _C.val, v = c === "vonMises" || c === "sigmaXX" || c === "sigmaYY" || c === "sigmaZZ" || c === "tauXY" || c === "tauYZ" || c === "tauXZ", S = c === "ux" || c === "uy" || c === "uz", V = v ? 1 / Ie[C] : S || y ? Ee[b] : d || o || i || l ? 1 / Ie[C] : 1, I = v ? `${C}/m\xB2` : S || y ? b : d ? `${C}\xB7m/m` : o ? `${C}/m\xB2` : i ? `${C}/m\xB2` : l ? `${C}/m` : "";
    Fe.val = I;
    const M = [];
    e.nodes.val.forEach((Y, T) => {
      const X = N[z];
      if (!X || !X[0] || typeof X[0].has != "function") return;
      if (!X[0].has(T)) {
        M.push(Number.NaN);
        return;
      }
      const P = X[0].get(T), L = P ? P[X[1]] ?? 0 : 0;
      M.push(L * V);
    }), r.val = M;
  }), r;
}
export {
  Tt as a,
  gt as b,
  Xt as c,
  Te as d,
  Lt as g
};
