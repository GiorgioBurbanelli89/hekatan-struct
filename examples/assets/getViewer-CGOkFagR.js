import { H as ce, B as L, I as de, F as K, G as U, h as Ye, a as te, j as Q, D as O, e as D, C as G, l as Be, i as Re, V as E, A as ee, z as q, J as Me, d as Ie, L as ne, c as $, r as he, K as ue, R as Le, f as ke, N as Ze, U as We, X as Se, Y as re, Z as He, _ as _e, t as $e, u as Ge, v as qe, W as Ne, w as Ke, x as Ue, y as Ae, O as De } from "./Text-CBH-tcJP.js";
import { v as F, P as Qe, g as j, o as pe } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function Je(e, t, l) {
  const o = document.createElement("div"), n = new Qe({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: 1, max: 500, step: 1 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const r = n.addFolder({ title: "Analysis Inputs" });
    r.addBinding(e.supports, "val", { label: "Supports" }), r.addBinding(e.loads, "val", { label: "Loads" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const r = n.addFolder({ title: "Analysis Outputs" });
    r.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), r.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), r.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), r.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), r.addBinding(e.deformScale, "val", { label: "Deform scale", min: 1, max: 1e4, step: 1 });
  }
  return l && n.addBinding(e.solids, "val", { label: "Solids" }), o;
}
function Oe(e) {
  return { gridSize: F.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: F.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: F.state((e == null ? void 0 : e.nodes) ?? true), elements: F.state((e == null ? void 0 : e.elements) ?? true), elemColumns: F.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: F.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: F.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: F.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: F.state((e == null ? void 0 : e.orientations) ?? false), sections: F.state((e == null ? void 0 : e.sections) ?? true), secColumns: F.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: F.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: F.state((e == null ? void 0 : e.secFloor) ?? -1), supports: F.state((e == null ? void 0 : e.supports) ?? true), loads: F.state((e == null ? void 0 : e.loads) ?? false), deformedShape: F.state((e == null ? void 0 : e.deformedShape) ?? false), deformScale: F.state((e == null ? void 0 : e.deformScale) ?? 100), nodeResults: F.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: F.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: F.state((e == null ? void 0 : e.shellResults) ?? "none"), flipAxes: F.state((e == null ? void 0 : e.flipAxes) ?? false), solids: F.state((e == null ? void 0 : e.solids) ?? true) };
}
function je(e, t, l) {
  const o = j(), n = new ce(new L(), new de({ color: o.nodePoint }));
  return pe((r, c) => {
    n.material.color.setHex(c.nodePoint);
  }), n.frustumCulled = false, F.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new K(t.val.flat(), 3));
  }), F.derive(() => {
    l.val;
    const r = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = r * l.rawVal);
  }), F.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function et(e, t, l) {
  const o = j(), n = new U(), r = new Ye(new L(), new te({ color: o.elementLine }));
  pe((m, V) => {
    r.material.color.setHex(V.elementLine);
  }), r.frustumCulled = false, n.add(r);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), i = new D(new L(), c);
  i.frustumCulled = false, n.add(i);
  let p = new G(o.shellWall), y = new G(o.shellSlab), M = new G(o.shellTri);
  pe((m, V) => {
    p = new G(V.shellWall), y = new G(V.shellSlab), M = new G(V.shellTri), c.opacity = V.shellOpacity, c.needsUpdate = true;
  });
  function b(m, V) {
    const S = Math.abs(V[0] - m[0]), X = Math.abs(V[1] - m[1]), k = Math.abs(V[2] - m[2]);
    return k > S && k > X || X > S && X > k;
  }
  return F.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const m = t.elemColumns.rawVal, V = t.elemBeams.rawVal, S = l.val, X = ((_a = e.elements) == null ? void 0 : _a.val) || [], k = X.filter((C) => {
      if (C.length !== 2) return true;
      const f = S[C[0]], x = S[C[1]];
      if (!f || !x) return true;
      const d = b(f, x);
      return !(d && !m || !d && !V);
    }).map((C) => tt(C).map((f) => [...S[f[0]], ...S[f[1]]]).flat()).flat();
    r.geometry.setAttribute("position", new K(k, 3));
    const B = [], Y = [];
    function P(C, f, x, d) {
      const s = [f[0] - C[0], f[1] - C[1], f[2] - C[2]], a = [d[0] - C[0], d[1] - C[1], d[2] - C[2]], u = s[1] * a[2] - s[2] * a[1], h = s[2] * a[0] - s[0] * a[2], w = s[0] * a[1] - s[1] * a[0], g = Math.sqrt(u * u + h * h + w * w);
      return g < 1e-12 ? false : Math.abs(w / g) < 0.5;
    }
    for (const C of X) if (C.length === 3) {
      const [f, x, d] = C;
      if (S[f] && S[x] && S[d]) {
        B.push(...S[f], ...S[x], ...S[d]);
        for (let s = 0; s < 3; s++) Y.push(M.r, M.g, M.b);
      }
    } else if (C.length === 4) {
      const [f, x, d, s] = C;
      if (S[f] && S[x] && S[d] && S[s]) {
        const a = P(S[f], S[x], S[d], S[s]) ? p : y;
        B.push(...S[f], ...S[x], ...S[d]), B.push(...S[f], ...S[d], ...S[s]);
        for (let u = 0; u < 6; u++) Y.push(a.r, a.g, a.b);
      }
    }
    B.length > 0 ? (i.geometry.dispose(), i.geometry = new L(), i.geometry.setAttribute("position", new K(B, 3)), i.geometry.setAttribute("color", new K(Y, 3)), i.geometry.computeVertexNormals(), i.visible = true) : i.visible = false;
  }), F.derive(() => {
    n.visible = t.elements.val;
  }), n;
}
function tt(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let l = 0; l < e.length; l++) t.push([e[l], e[(l + 1) % e.length]]);
  return t;
}
function ze(e) {
  const t = j(), l = new Be(e, 20, t.grid, t.grid);
  return l.position.set(0.5 * e, 0.5 * e, 0), l.rotateX(Math.PI / 2), l;
}
function nt(e, t, l, o) {
  const n = new U(), r = new Re(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const i = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((p, y) => {
      const M = l.val[y];
      if (!M) return;
      const b = new D(r, c);
      b.position.set(...M);
      const m = i * o.rawVal;
      b.scale.set(m, m, m), n.add(b);
    });
  }), F.derive(() => {
    if (o.val, !t.supports.rawVal) return;
    const p = 0.05 * t.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((y) => y.scale.set(p, p, p));
  }), F.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function ot(e, t, l, o) {
  const n = new U();
  n.name = "loadsGroup";
  function r(c) {
    if (c.length < 2) return 0.12 * t.gridSize.rawVal;
    const i = [1 / 0, 1 / 0, 1 / 0], p = [-1 / 0, -1 / 0, -1 / 0];
    for (const M of c) for (let b = 0; b < 3; b++) i[b] = Math.min(i[b], M[b]), p[b] = Math.max(p[b], M[b]);
    return 0.08 * Math.max(p[0] - i[0], p[1] - i[1], p[2] - i[2], 0.1);
  }
  return F.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((p) => p.dispose()), n.clear();
    const c = l.val, i = r(c);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((p, y) => {
      const M = c[y];
      if (!M) return;
      const b = new E(...p.slice(0, 3));
      if (b.lengthSq() < 1e-30) return;
      b.normalize();
      const m = new ee(b, new E(...M), 1, 15637248, 0.3, 0.3), V = i * o.rawVal;
      m.scale.set(V, V, V), n.add(m);
    });
  }), F.derive(() => {
    if (o.val, !t.loads.rawVal) return;
    const i = r(l.rawVal) * o.rawVal;
    n.children.forEach((p) => p.scale.set(i, i, i));
  }), F.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function st(e, t, l) {
  const o = new U();
  return F.derive(() => {
    if (!e.nodesIndexes.val) return;
    o.children.forEach((r) => r.dispose()), o.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((r, c) => {
      const i = new q(`${c}`);
      i.position.set(...r), i.updateScale(n * l.rawVal), o.add(i);
    });
  }), F.derive(() => {
    if (l.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    o.children.forEach((r) => r.updateScale(n * l.rawVal));
  }), F.derive(() => {
    o.visible = e.nodesIndexes.val;
  }), o;
}
function it(e, t, l, o) {
  const n = new U();
  return F.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const r = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((c, i) => {
      const p = new q(`${i}`, void 0, "#001219");
      p.position.set(...at(c.map((y) => l.rawVal[y]))), p.updateScale(r * o.rawVal), n.add(p);
    });
  }), F.derive(() => {
    if (o.val, !t.elementsIndexes.rawVal) return;
    const r = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), F.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function at(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = e.length;
  return [t[0] / l, t[1] / l, t[2] / l];
}
function rt(e, t) {
  const l = new U(), o = 0.05 * e * 1, n = j(), r = new q("X", "red", "transparent"), c = new q(t ? "Z" : "Y", "green", "transparent"), i = new q(t ? "Y" : "Z", "blue", "transparent"), p = new ee(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), y = new ee(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), M = new ee(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return r.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), i.position.set(0, 0, 1.3 * o), r.updateScale(0.4 * o), c.updateScale(0.4 * o), i.updateScale(0.4 * o), p.scale.set(o, o, o), y.scale.set(o, o, o), M.scale.set(o, o, o), l.add(p, y, M, r, c, i), l;
}
function Fe(e, t) {
  const l = new E(...e), n = new E(...t).clone().sub(l), r = n.length(), c = n.dot(new E(1, 0, 0)) / r, i = n.dot(new E(0, 1, 0)) / r, p = n.dot(new E(0, 0, 1)) / r, y = Math.sqrt(c ** 2 + i ** 2);
  let M = new Me().fromArray([[c, i, p], [-i / y, c / y, 0], [-c * p / y, -i * p / y, y]].flat());
  return p === 1 && (M = new Me().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), p === -1 && (M = new Me().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Ie().setFromMatrix3(M);
}
function ge(e, t) {
  return e == null ? void 0 : e.map((l, o) => (9 * l + t[o]) / 10);
}
function oe(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = e.length;
  return [t[0] / l, t[1] / l, t[2] / l];
}
function lt(e, t, l) {
  const o = oe([t, l]), n = oe([e, l]), r = oe([e, t]), c = new E(...o).sub(new E(...n)).normalize(), i = new E(...l).sub(new E(...r)).normalize(), p = c.clone().cross(i).normalize(), y = p.clone().cross(c).normalize();
  return new Ie().makeBasis(c, y, p);
}
function ct(e, t, l, o) {
  const n = new U(), r = new L(), c = new te({ vertexColors: true }), i = [0, 0, 0], p = [1, 0, 0], y = [0, 1, 0], M = [0, 0, 1];
  r.setAttribute("position", new K([...i, ...p, ...i, ...y, ...i, ...M], 3));
  const b = [255, 0, 0], m = [0, 255, 0], V = [0, 0, 255];
  return r.setAttribute("color", new K([...b, ...b, ...m, ...m, ...V, ...V], 3)), F.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((S) => {
      const X = new Ye(r, c), k = l.rawVal[S[0]], B = l.rawVal[S[1]];
      if (S.length === 2 && (X.position.set(...ge(k, B)), X.rotation.setFromRotationMatrix(Fe(k, B))), S.length === 3) {
        const C = l.rawVal[S[2]];
        X.position.set(...oe([k, B, C])), X.rotation.setFromRotationMatrix(lt(k, B, C));
      }
      const P = 0.05 * t.gridSize.rawVal * 0.75 * o.rawVal;
      X.scale.set(P, P, P), n.add(X);
    }));
  }), F.derive(() => {
    if (o.val, !t.orientations.rawVal) return;
    const X = 0.05 * t.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((k) => k.scale.set(X, X, X));
  }), F.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function dt(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), l = (e.h * 100).toFixed(0);
    return `${t}x${l}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function ht(e, t, l, o) {
  const n = new U();
  function r(f, x) {
    const d = f / 2, s = x / 2, a = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, -s, 0, d, s, 0, -d, s]), u = new L();
    u.setAttribute("position", new $(a, 3));
    const h = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, s, 0, -d, -s]), w = new L();
    return w.setAttribute("position", new $(h, 3)), { fill: u, outline: w };
  }
  function c(f, x = 24) {
    const d = f / 2, s = new Float32Array(x * 9);
    for (let w = 0; w < x; w++) {
      const g = w / x * Math.PI * 2, A = (w + 1) / x * Math.PI * 2;
      s[w * 9] = 0, s[w * 9 + 1] = 0, s[w * 9 + 2] = 0, s[w * 9 + 3] = 0, s[w * 9 + 4] = d * Math.cos(g), s[w * 9 + 5] = d * Math.sin(g), s[w * 9 + 6] = 0, s[w * 9 + 7] = d * Math.cos(A), s[w * 9 + 8] = d * Math.sin(A);
    }
    const a = new L();
    a.setAttribute("position", new $(s, 3));
    const u = new Float32Array((x + 1) * 3);
    for (let w = 0; w <= x; w++) {
      const g = w / x * Math.PI * 2;
      u[w * 3] = 0, u[w * 3 + 1] = d * Math.cos(g), u[w * 3 + 2] = d * Math.sin(g);
    }
    const h = new L();
    return h.setAttribute("position", new $(u, 3)), { fill: a, outline: h };
  }
  function i(f, x, d, s) {
    const a = d ?? x * 0.08, u = s ?? f * 0.07, h = f / 2, w = x / 2, g = w - a, A = u / 2, I = [];
    function v(T, W, H, _) {
      I.push(0, T, W, 0, H, W, 0, H, _, 0, T, W, 0, H, _, 0, T, _);
    }
    v(-h, -w, h, -g), v(-A, -g, A, g), v(-h, g, h, w);
    const z = new L();
    z.setAttribute("position", new $(new Float32Array(I), 3));
    const R = new Float32Array([0, -h, -w, 0, h, -w, 0, h, -g, 0, A, -g, 0, A, g, 0, h, g, 0, h, w, 0, -h, w, 0, -h, g, 0, -A, g, 0, -A, -g, 0, -h, -g, 0, -h, -w]), Z = new L();
    return Z.setAttribute("position", new $(R, 3)), { fill: z, outline: Z };
  }
  function p(f, x, d) {
    const s = f / 2, a = x / 2, u = s - d, h = a - d, w = [];
    function g(z, R, Z, T) {
      w.push(0, z, R, 0, Z, R, 0, Z, T, 0, z, R, 0, Z, T, 0, z, T);
    }
    g(-s, -a, s, -h), g(-s, h, s, a), g(-s, -h, -u, h), g(u, -h, s, h);
    const A = new L();
    A.setAttribute("position", new $(new Float32Array(w), 3));
    const I = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), v = new L();
    return v.setAttribute("position", new $(I, 3)), { fill: A, outline: v };
  }
  function y(f, x, d) {
    const s = f / 2, a = x / 2, u = s - d, h = a - d, w = new L(), g = new Float32Array([0, -u, -h, 0, u, -h, 0, u, h, 0, -u, -h, 0, u, h, 0, -u, h]);
    w.setAttribute("position", new $(g, 3));
    const A = [];
    function I(Z, T, W, H) {
      A.push(0, Z, T, 0, W, T, 0, W, H, 0, Z, T, 0, W, H, 0, Z, H);
    }
    I(-s, -a, s, -h), I(-s, h, s, a), I(-s, -h, -u, h), I(u, -h, s, h);
    const v = new L();
    v.setAttribute("position", new $(new Float32Array(A), 3));
    const z = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), R = new L();
    return R.setAttribute("position", new $(z, 3)), { concFill: w, steelFillGeom: v, outline: R };
  }
  function M(f, x, d) {
    const s = [], a = [[0, -f / 2, -x / 2], [0, -f / 2 + d, -x / 2], [0, -f / 2 + d, x / 2 - d], [0, f / 2, x / 2 - d], [0, f / 2, x / 2], [0, -f / 2, x / 2]], u = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of u) s.push(...a[A]);
    const h = new L();
    h.setAttribute("position", new $(new Float32Array(s), 3));
    const w = [];
    for (let A = 0; A < a.length; A++) {
      const I = (A + 1) % a.length;
      w.push(...a[A], ...a[I]);
    }
    const g = new L();
    return g.setAttribute("position", new $(new Float32Array(w), 3)), { fill: h, outline: g };
  }
  function b(f, x, d, s) {
    const a = s / 2, u = [], h = [[0, -f - a, -x / 2], [0, -d - a, -x / 2], [0, -d - a, x / 2 - d], [0, -a, x / 2 - d], [0, -a, x / 2], [0, -f - a, x / 2]], w = [[0, a, -x / 2], [0, a + d, -x / 2], [0, a + d, x / 2 - d], [0, f + a, x / 2 - d], [0, f + a, x / 2], [0, a, x / 2]], g = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const z of g) u.push(...h[z]);
    for (const z of g) u.push(...w[z]);
    const A = new L();
    A.setAttribute("position", new $(new Float32Array(u), 3));
    const I = [];
    for (const z of [h, w]) for (let R = 0; R < z.length; R++) {
      const Z = (R + 1) % z.length;
      I.push(...z[R], ...z[Z]);
    }
    const v = new L();
    return v.setAttribute("position", new $(new Float32Array(I), 3)), { fill: A, outline: v };
  }
  function m(f, x, d, s) {
    const a = x / 2, u = f, h = [[0, -u, -a], [0, -u, -a + d], [0, -s, -a + d], [0, -s, a - d], [0, -u, a - d], [0, -u, a], [0, 0, a], [0, 0, -a]], w = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], g = [];
    for (const z of w) g.push(...h[z]);
    const A = new L();
    A.setAttribute("position", new $(new Float32Array(g), 3));
    const I = [];
    for (let z = 0; z < h.length; z++) {
      const R = (z + 1) % h.length;
      I.push(...h[z], ...h[R]);
    }
    const v = new L();
    return v.setAttribute("position", new $(new Float32Array(I), 3)), { fill: A, outline: v };
  }
  function V(f, x, d, s, a) {
    const u = x / 2, h = a / 2, w = [], g = [[0, -f, -u], [0, -f, -u + d], [0, -h - s, -u + d], [0, -h - s, u - d], [0, -f, u - d], [0, -f, u], [0, -h, u], [0, -h, -u]], A = g.map((Z) => [Z[0], -Z[1], Z[2]]), I = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of I) w.push(...g[Z]);
    for (const Z of I) w.push(...A[Z]);
    const v = new L();
    v.setAttribute("position", new $(new Float32Array(w), 3));
    const z = [];
    for (const Z of [g, A]) for (let T = 0; T < Z.length; T++) {
      const W = (T + 1) % Z.length;
      z.push(...Z[T], ...Z[W]);
    }
    const R = new L();
    return R.setAttribute("position", new $(new Float32Array(z), 3)), { fill: v, outline: R };
  }
  function S(f, x, d, s) {
    const a = f / 2, u = x / 2, h = s / 2, w = [[0, -h, -u], [0, h, -u], [0, h, u - d], [0, a, u - d], [0, a, u], [0, -a, u], [0, -a, u - d], [0, -h, u - d]], g = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], A = [];
    for (const R of g) A.push(...w[R]);
    const I = new L();
    I.setAttribute("position", new $(new Float32Array(A), 3));
    const v = [];
    for (let R = 0; R < w.length; R++) {
      const Z = (R + 1) % w.length;
      v.push(...w[R], ...w[Z]);
    }
    const z = new L();
    return z.setAttribute("position", new $(new Float32Array(v), 3)), { fill: I, outline: z };
  }
  function X(f, x, d = 24) {
    const s = f / 2, a = s - x, u = [];
    for (let A = 0; A < d; A++) {
      const I = A / d * Math.PI * 2, v = (A + 1) / d * Math.PI * 2, z = Math.cos(I), R = Math.sin(I), Z = Math.cos(v), T = Math.sin(v);
      u.push(0, s * z, s * R, 0, s * Z, s * T, 0, a * Z, a * T), u.push(0, s * z, s * R, 0, a * Z, a * T, 0, a * z, a * R);
    }
    const h = new L();
    h.setAttribute("position", new $(new Float32Array(u), 3));
    const w = [];
    for (let A = 0; A < d; A++) {
      const I = A / d * Math.PI * 2, v = (A + 1) / d * Math.PI * 2;
      w.push(0, s * Math.cos(I), s * Math.sin(I), 0, s * Math.cos(v), s * Math.sin(v)), w.push(0, a * Math.cos(I), a * Math.sin(I), 0, a * Math.cos(v), a * Math.sin(v));
    }
    const g = new L();
    return g.setAttribute("position", new $(new Float32Array(w), 3)), { fill: h, outline: g };
  }
  const k = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), B = new te({ color: 52479 }), Y = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), P = new te({ color: 16750848 });
  function C(f, x) {
    const d = Math.abs(x[0] - f[0]), s = Math.abs(x[1] - f[1]), a = Math.abs(x[2] - f[2]);
    return a > d && a > s || s > d && s > a;
  }
  return F.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const f = t.secColumns.rawVal, x = t.secBeams.rawVal;
    if (!f && !x) {
      n.children.forEach((h) => {
        h instanceof q && h.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((h) => {
      h instanceof q && h.dispose();
    }), n.clear();
    const d = (_a = e.elements) == null ? void 0 : _a.val, s = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!d || !s) return;
    const a = s.sectionShapes, u = t.secFloor.rawVal;
    d.forEach((h, w) => {
      if (h.length !== 2) return;
      const g = l.rawVal[h[0]], A = l.rawVal[h[1]];
      if (!g || !A) return;
      const I = C(g, A);
      if (I && !f || !I && !x) return;
      if (u >= 0) {
        const T = Math.min(g[1], A[1]);
        Math.max(g[1], A[1]);
        const W = t.gridSize.rawVal || 3;
        if (Math.floor(T / W + 0.01) !== u) return;
      }
      const v = a == null ? void 0 : a.get(w);
      if (!v) return;
      const z = [(g[0] + A[0]) / 2, (g[1] + A[1]) / 2, (g[2] + A[2]) / 2], R = Fe(g, A);
      if (v.type === "CFT") {
        const T = y(v.b, v.h, v.tw ?? v.b * 0.05), W = new D(T.concFill, k);
        W.position.set(...z), W.rotation.setFromRotationMatrix(R), n.add(W);
        const H = new D(T.steelFillGeom, Y);
        H.position.set(...z), H.rotation.setFromRotationMatrix(R), n.add(H);
        const _ = new ne(T.outline, P);
        _.position.set(...z), _.rotation.setFromRotationMatrix(R), n.add(_);
      } else {
        let T, W, H;
        switch (v.type) {
          case "rect":
            T = r(v.b, v.h), W = k, H = B;
            break;
          case "circ":
            T = c(v.d), W = k, H = B;
            break;
          case "I":
            T = i(v.b, v.h, v.tf, v.tw), W = Y, H = P;
            break;
          case "HSS":
            T = p(v.b, v.h, v.tw ?? v.b * 0.05), W = Y, H = P;
            break;
          case "CFT":
            T = y(v.b, v.h, v.tw ?? v.b * 0.05), W = Y, H = P;
            break;
          case "L":
            T = M(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3), W = Y, H = P;
            break;
          case "2L":
            T = b(v.b ?? v.h, v.h, v.t ?? v.tw ?? 3e-3, v.dis ?? 0.01), W = Y, H = P;
            break;
          case "C":
          case "coldC":
            T = m(v.b, v.h, v.tf ?? v.t ?? 3e-3, v.tw ?? v.t ?? 3e-3), W = Y, H = P;
            break;
          case "2C":
            T = V(v.b, v.h, v.tf ?? 5e-3, v.tw ?? 5e-3, v.dis ?? 0.01), W = Y, H = P;
            break;
          case "T":
            T = S(v.b, v.h, v.tf ?? 0.01, v.tw ?? 6e-3), W = Y, H = P;
            break;
          case "pipe":
            T = X(v.d, v.tw ?? v.d * 0.05), W = Y, H = P;
            break;
          default:
            return;
        }
        const _ = new D(T.fill, W);
        _.position.set(...z), _.rotation.setFromRotationMatrix(R), n.add(_);
        const N = new ne(T.outline, H);
        N.position.set(...z), N.rotation.setFromRotationMatrix(R), n.add(N);
      }
      const Z = dt(v);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(v.type) ? "#ff9900" : "#00ccff", H = new q(Z, W, "transparent");
        H.position.set(z[0], z[1], z[2]);
        const _ = 0.05 * t.gridSize.rawVal * 0.5;
        H.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(H);
      }
    });
  }), o && F.derive(() => {
    if (o.val, !t.sections.rawVal) return;
    const f = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((x) => {
      x instanceof q && x.updateScale(f * o.rawVal);
    });
  }), F.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class le extends U {
  constructor(t, l, o, n, r, c, i) {
    super();
    const p = new he().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), y = p.getPoints(), M = new L().setFromPoints(y);
    this.lines = new ne(M, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new ue(p), m = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(b, m), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new q(`${r[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = oe([t, l]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Pe extends U {
  constructor(t, l, o, n, r, c, i) {
    super();
    const p = r[0] * o / (r[0] + r[1]), y = r[0] * r[1] > 0;
    if (this.text = new q(`${r[0].toFixed(4)}`), this.text2 = new q(`${(r[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = ge(t, l), this.text2Position = ge(l, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), y) {
      const M = new he().moveTo(0, 0).lineTo(0, c[0]).lineTo(p, 0).lineTo(0, 0), b = new he().moveTo(p, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(p, 0), m = M.getPoints(), V = b.getPoints(), S = new L().setFromPoints(m), X = new L().setFromPoints(V), k = new te({ color: j().resultOutline });
      this.lines = new ne(S, k), this.lines2 = new ne(X, k), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), i && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const B = new ue(M), Y = new ue(b), P = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), C = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(B, P), this.mesh2 = new D(Y, C), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), i && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const M = new he().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), b = M.getPoints(), m = new L().setFromPoints(b);
      this.lines = new ne(m, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const V = new ue(M), S = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(V, S), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Xe = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Xe || {});
function ut(e, t, l, o) {
  const n = new U(), r = { normals: le, shearsY: le, shearsZ: le, torsions: le, bendingsY: Pe, bendingsZ: Pe };
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, l.val, t.frameResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const c = Xe[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((i, p) => {
      var _a2, _b2;
      const y = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[p]) ?? [0, 1], M = l.rawVal[y[0]], b = l.rawVal[y[1]], m = new E(...b).distanceTo(new E(...M)), V = pt((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), S = i == null ? void 0 : i.map((Y) => Y / (V === 0 ? 1 : V)), X = Fe(M, b), k = new r[c](M, b, m, X, i ?? [0, 0], S ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), B = 0.05 * t.gridSize.rawVal;
      k.updateScale(B * o.rawVal), n.add(k);
    });
  }), F.derive(() => {
    if (o.val, t.frameResults.rawVal == "none") return;
    const c = 0.05 * t.gridSize.val;
    n.children.forEach((i) => i.updateScale(c * o.rawVal));
  }), F.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function pt(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((l) => {
    const o = Math.max(...l ?? [0, 0]);
    o > t && (t = o);
  }), t;
}
class mt extends U {
  constructor(t, l, o) {
    super();
    const n = l === Ce.reactions;
    o[0] && (this.xText1 = new q(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new q(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new q(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new q(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new q(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new q(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new ee(new E(1, 0, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new ee(new E(0, 1, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new ee(new E(0, 0, 1), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function ft(e, t, l, o) {
  const n = new U();
  return F.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const r = Ce[t.nodeResults.rawVal], c = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[r]) == null ? void 0 : _b.forEach((i, p) => {
      const y = new mt(l.rawVal[p], r, i ?? [0, 0, 0, 0, 0, 0]);
      y.updateScale(c * o.rawVal), n.add(y);
    });
  }), F.derive(() => {
    if (o.val, t.nodeResults.rawVal == "none") return;
    const r = 0.05 * t.gridSize.val;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), F.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function wt({ drawingObj: e, gridObj: t, scene: l, camera: o, controls: n, gridSize: r, derivedDisplayScale: c, rendererElm: i, viewerRender: p }) {
  const y = new Le(), M = new ke(), b = new D(new Ze(r, r), new Q({ side: O })), m = new ce(new L(), new de()), V = new ce(new L(), new de({ color: "gray" })), S = new ce(new L(), new de({ color: "orange", size: 0.8 }));
  l.add(S), m.geometry.setAttribute("position", new K(e.points.rawVal.flat(), 3)), m.geometry.computeBoundingSphere(), m.frustumCulled = false, V.frustumCulled = false, l.add(V), b.position.set(0.5 * r, 0.5 * r, 0), b.rotateX(Math.PI / 2), b.geometry.rotateX(Math.PI / 2), b.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), F.derive(() => {
    e.gridTarget && (vt(t, { position: new E(...e.gridTarget.val.position), quaternion: new We().setFromEuler(new Se(...e.gridTarget.val.rotation)) }, p), b.position.set(...e.gridTarget.val.position), b.quaternion.setFromEuler(new Se(...e.gridTarget.val.rotation)), b.updateMatrixWorld());
  }), F.derive(() => {
    m.geometry.setAttribute("position", new K(e.points.val.flat(), 3)), m.geometry.computeBoundingSphere();
  }), F.derive(() => {
    const P = 0.05 * r * 0.5 * c.val;
    V.material.size = P, y.params.Points.threshold = 0.4 * P;
  }), F.derive(() => {
    var _a;
    const P = e.points.val ?? [], f = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], x = [];
    for (const s of f) {
      const [a, u, h] = P[s];
      x.push(a, u, h);
    }
    const d = new L();
    d.setAttribute("position", new K(x, 3)), S.geometry.dispose(), S.geometry = d;
  });
  let X = false, k = 0;
  i.addEventListener("pointerdown", () => {
    X = true;
  }), i.addEventListener("pointerup", () => {
    X = false;
  }), i.addEventListener("pointermove", () => {
    X && k++;
  }), i.addEventListener("click", (P) => {
    if (k > 5) {
      k = 0;
      return;
    }
    k = 0, M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    const C = y.intersectObject(b);
    if (C.length) {
      let f = C[0].point;
      (P.ctrlKey || P.metaKey) && (f = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), e.points.val = [...e.points.rawVal, f.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), i.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), i.addEventListener("pointermove", (P) => {
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    const C = y.intersectObject(b);
    if (V.geometry.deleteAttribute("position"), C.length) {
      let f = C[0].point;
      (P.ctrlKey || P.metaKey) && (f = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), V.geometry.setAttribute("position", new K(f.toArray(), 3));
    }
    p();
  }), i.addEventListener("pointermove", (P) => {
    var _a;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    let C = false;
    const f = y.intersectObject(m), x = y.intersectObject(b);
    if (f.length && x.length) {
      const d = new E(...e.points.rawVal[f[0].index]), s = new E(...x[0].point), a = d.sub(s), u = (_a = x[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(b.matrixWorld), Math.abs(a.dot(u)) < 1e-4 && (C = true);
    }
    V.visible = !C;
  });
  let B = false, Y;
  i.addEventListener("pointermove", (P) => {
    var _a;
    if (!k) return;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    let C = false;
    const f = y.intersectObject(m), x = y.intersectObject(b);
    if (f.length && x.length) {
      const s = new E(...e.points.rawVal[f[0].index]), a = new E(...x[0].point), u = s.sub(a), h = (_a = x[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(b.matrixWorld), Math.abs(u.dot(h)) < 1e-4 && (C = true);
    }
    if (C && k < 5 && (B = true, n.enabled = false, Y = f[0].index), !B || k % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (Y !== void 0) {
      let s = x[0].point;
      (P.ctrlKey || P.metaKey) && (s = new E(Math.round(s.x), Math.round(s.y), Math.round(s.z))), d[Y] = s.toArray();
    }
    e.points.val = d;
  }), i.addEventListener("pointerup", () => {
    n.enabled = true, B = false;
  }), i.addEventListener("contextmenu", (P) => {
    var _a;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    let C = false;
    const f = y.intersectObject(m), x = y.intersectObject(b);
    if (f.length && x.length) {
      const a = new E(...e.points.rawVal[f[0].index]), u = new E(...x[0].point), h = a.sub(u), w = (_a = x[0].face) == null ? void 0 : _a.normal;
      w.transformDirection(b.matrixWorld), Math.abs(h.dot(w)) < 1e-4 && (C = true);
    }
    if (!C) return;
    const d = [...e.points.rawVal];
    if (d.splice(f[0].index, 1), e.points.val = d, !e.polylines) return;
    const s = e.polylines.rawVal.map((a) => a.filter((u) => u !== f[0].index)).map((a) => a.map((u) => u > f[0].index ? u - 1 : u)).filter((a) => a.length);
    s.push([]), e.polylines.val = s;
  });
}
function vt(e, t, l) {
  const r = Math.round(14.999999999999998), c = { position: e.position.clone(), quaternion: e.quaternion.clone() }, i = setInterval(y, 1e3 / 30);
  let p = 0;
  function y() {
    p++;
    const M = p / r;
    e.position.lerpVectors(c.position, t.position, M), e.quaternion.slerpQuaternions(c.quaternion, t.quaternion, M), l && l(), p == r && clearInterval(i);
  }
}
class Ee {
  constructor(t, l = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(t, l);
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
  setColorMap(t, l = 32) {
    this.map = ye[t] || ye.rainbow, this.n = l;
    const o = 1 / this.n, n = new G(), r = new G();
    this.lut.length = 0, this.lut.push(new G(this.map[0][1]));
    for (let c = 1; c < l; c++) {
      const i = c * o;
      for (let p = 0; p < this.map.length - 1; p++) if (i > this.map[p][0] && i <= this.map[p + 1][0]) {
        const y = this.map[p][0], M = this.map[p + 1][0];
        n.setHex(this.map[p][1], re), r.setHex(this.map[p + 1][1], re);
        const b = new G().lerpColors(n, r, (i - y) / (M - y));
        this.lut.push(b);
      }
    }
    return this.lut.push(new G(this.map[this.map.length - 1][1])), this;
  }
  copy(t) {
    return this.lut = t.lut, this.map = t.map, this.n = t.n, this.minV = t.minV, this.maxV = t.maxV, this;
  }
  getColor(t) {
    t = He.clamp(t, this.minV, this.maxV), t = (t - this.minV) / (this.maxV - this.minV);
    const l = Math.round(t * this.n);
    return this.lut[l];
  }
  addColorMap(t, l) {
    return ye[t] = l, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const l = t.getContext("2d", { alpha: false }), o = l.getImageData(0, 0, 1, this.n), n = o.data;
    let r = 0;
    const c = 1 / this.n, i = new G(), p = new G(), y = new G();
    for (let M = 1; M >= 0; M -= c) for (let b = this.map.length - 1; b >= 0; b--) if (M < this.map[b][0] && M >= this.map[b - 1][0]) {
      const m = this.map[b - 1][0], V = this.map[b][0];
      i.setHex(this.map[b - 1][1], re), p.setHex(this.map[b][1], re), y.lerpColors(i, p, (M - m) / (V - m)), n[r * 4] = Math.round(y.r * 255), n[r * 4 + 1] = Math.round(y.g * 255), n[r * 4 + 2] = Math.round(y.b * 255), n[r * 4 + 3] = 255, r += 1;
    }
    return l.putImageData(o, 0, 0), t;
  }
}
const ye = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function xt(e, t, l) {
  const o = new Ee(), n = new G(), r = new D(new L(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), r.renderOrder = -1, r.frustumCulled = false, F.derive(() => {
    r.geometry.setAttribute("position", new K(e.val.flat(), 3));
    const c = [];
    for (const i of t.val) i.length === 3 ? c.push(i[0], i[1], i[2]) : i.length === 4 && (c.push(i[0], i[1], i[2]), c.push(i[0], i[2], i[3]));
    r.geometry.setIndex(new _e(c, 1)), r.geometry.setAttribute("color", new K(e.val.map(() => [0, 0, 0]).flat(), 3)), o.setMax(Math.max(...l.val)), o.setMin(Math.min(...l.val));
    for (let i = 0; i < l.val.length; i++) {
      const p = o.getColor(l.val[i]) ?? new G(0, 0, 0);
      n.copy(p).convertSRGBToLinear(), n.multiplyScalar(0.6), r.geometry.attributes.color.setXYZ(i, n.r, n.g, n.b);
    }
  }), r;
}
function Mt(e, t, l, o) {
  const n = xt(l, e.elements, o);
  return F.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const yt = 6, be = 10, bt = 0.012;
function gt(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Ft(e, t, l, o) {
  if (!l && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && l) {
    const r = l[e];
    if (r && r.has(t)) return r.get(t);
  }
  return null;
}
function Ct(e, t, l, o) {
  const n = new U(), r = new Ee();
  r.setColorMap("rainbow");
  const c = new G(), i = F.state([]);
  return F.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const p = l.val, y = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], M = gt(t.frameResults.val);
    if (n.children.forEach((w) => {
      w.geometry && w.geometry.dispose(), w.material && w.material.dispose();
    }), n.clear(), !M || y.length === 0 || p.length === 0) {
      i.val = [];
      return;
    }
    const b = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, m = (_c = e.deformOutputs) == null ? void 0 : _c.val, V = [], S = [];
    for (let w = 0; w < y.length; w++) {
      if (y[w].length !== 2) continue;
      const A = Ft(M, w, b, m);
      A && (V.push(A[0], A[1]), S.push({ idx: w, vals: A }));
    }
    if (V.length === 0) {
      i.val = [];
      return;
    }
    const X = Math.min(...V), k = Math.max(...V);
    r.setMin(X), r.setMax(k), i.val = V;
    const B = [1 / 0, 1 / 0, 1 / 0], Y = [-1 / 0, -1 / 0, -1 / 0];
    for (const w of p) for (let g = 0; g < 3; g++) B[g] = Math.min(B[g], w[g]), Y[g] = Math.max(Y[g], w[g]);
    const C = Math.max(Y[0] - B[0], Y[1] - B[1], Y[2] - B[2], 1) * bt, f = [], x = [], d = [];
    let s = 0;
    for (const { idx: w, vals: g } of S) {
      const A = y[w], I = p[A[0]], v = p[A[1]];
      if (!I || !v) continue;
      const z = new E(v[0] - I[0], v[1] - I[1], v[2] - I[2]), R = z.length();
      if (R < 1e-10) continue;
      z.normalize();
      const Z = Math.abs(z.y) < 0.99 ? new E(0, 1, 0) : new E(1, 0, 0), T = new E().crossVectors(z, Z).normalize(), W = new E().crossVectors(z, T).normalize(), H = be + 1, _ = yt;
      for (let N = 0; N < H; N++) {
        const J = N / be, se = I[0] + z.x * R * J, ie = I[1] + z.y * R * J, me = I[2] + z.z * R * J, fe = g[0] + (g[1] - g[0]) * J, ae = r.getColor(fe) ?? new G(0, 0, 0);
        c.copy(ae).convertSRGBToLinear();
        for (let we = 0; we < _; we++) {
          const Ve = we / _ * Math.PI * 2, ve = Math.cos(Ve), xe = Math.sin(Ve);
          f.push(se + (T.x * ve + W.x * xe) * C, ie + (T.y * ve + W.y * xe) * C, me + (T.z * ve + W.z * xe) * C), x.push(c.r, c.g, c.b);
        }
      }
      for (let N = 0; N < be; N++) for (let J = 0; J < _; J++) {
        const se = (J + 1) % _, ie = s + N * _ + J, me = s + N * _ + se, fe = s + (N + 1) * _ + J, ae = s + (N + 1) * _ + se;
        d.push(ie, me, ae), d.push(ie, ae, fe);
      }
      s += H * _;
    }
    if (f.length === 0) return;
    const a = new L();
    a.setAttribute("position", new K(f, 3)), a.setAttribute("color", new K(x, 3)), a.setIndex(d), a.computeVertexNormals();
    const u = new Q({ vertexColors: true, side: O }), h = new D(a, u);
    h.frustumCulled = false, n.add(h);
  }), n.__colorMapValues = i, n;
}
function Te(e, t = 8) {
  const l = document.createElement("div");
  l.id = "legend";
  const o = Array.from({ length: t + 1 }, (i, p) => p / t).reverse();
  let n, r;
  o.forEach((i, p) => {
    n = document.createElement("div"), n.id = `marker-${p}`, n.className = "marker", n.style.marginTop = p == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, r = document.createElement("p"), r.id = `marker-text-${p}`, n.append(r), l.append(n);
  });
  const c = [];
  return l.querySelectorAll("p").forEach((i) => c.push(i)), setTimeout(() => {
    F.derive(() => {
      o.forEach((i, p) => {
        const y = c[p];
        y && (y.innerText = Vt(e.val, i).toString());
      });
    });
  }), l;
}
function Vt(e, t) {
  const l = Math.max(...e) - Math.min(...e);
  return (Math.min(...e) + t * l).toPrecision(3);
}
function Yt({ mesh: e, settingsObj: t, drawingObj: l, objects3D: o, solids: n }) {
  De.DEFAULT_UP = new E(0, 0, 1);
  const r = document.createElement("div"), c = new $e(), i = new Ge(45, 1, 0.1, 2 * 1e6), p = new qe(-10, 10, 10, -10, -1e3, 2e6);
  let y = i;
  const M = new Ne({ antialias: true });
  M.localClippingEnabled = true;
  const b = new Ke(i, M.domElement), m = Oe(t), V = F.derive(() => m.displayScale.val === 0 ? 1 : m.displayScale.val > 0 ? m.displayScale.val : -1 / m.displayScale.val), S = St(e, m);
  let X = ze(m.gridSize.rawVal);
  r.appendChild(Je(m, e, n)), r.setAttribute("id", "viewer"), r.appendChild(M.domElement), M.setPixelRatio(window.devicePixelRatio);
  const k = j();
  M.setClearColor(k.background, 1);
  const B = m.gridSize.rawVal, Y = B * 0.5 + B * 0.5 / Math.tan(45 * 0.5);
  i.position.set(0.5 * B, 0.8 * -Y, 0.5 * B), b.target.set(0.5 * B, 0.5 * B, 0), b.minDistance = 1, b.maxDistance = Y * 2.5, b.zoomSpeed = 10, b.update(), c.add(X, rt(m.gridSize.rawVal, m.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const s of d) {
      const a = (_a = s.target) == null ? void 0 : _a.clientWidth, u = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (a === 0 || u === 0) continue;
      i.aspect = a / u, i.updateProjectionMatrix();
      const h = a / u, w = p.top;
      p.left = -w * h, p.right = w * h, p.updateProjectionMatrix(), M.setSize(a, u), C();
    }
  }).observe(r), b.addEventListener("change", C), F.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, m.displayScale.val, m.nodes.val, m.elements.val, m.elemColumns.val, m.elemBeams.val, m.nodesIndexes.val, m.elementsIndexes.val, m.orientations.val, m.sections.val, m.secColumns.val, m.secBeams.val, m.secFloor.val, m.supports.val, m.loads.val, m.deformedShape.val, m.deformScale.val, m.nodeResults.val, m.frameResults.val, m.shellResults.val, setTimeout(C);
  });
  function C() {
    M.render(c, y);
  }
  function f(d) {
    y = d, b.object = d, b.update(), C();
  }
  if (e) {
    c.add(je(m, S, V), et(e, m, S), st(m, S, V), it(e, m, S, V), nt(e, m, S, V), ot(e, m, S, V), ct(e, m, S, V), ht(e, m, S, V), ft(e, m, S, V), ut(e, m, S, V));
    const d = At(e, m), s = Mt(e, m, S, d), a = Te(d);
    c.add(s), r.appendChild(a);
    const u = Ct(e, m, S);
    c.add(u);
    const h = u.__colorMapValues, w = Te(h);
    w.id = "frame-legend", r.appendChild(w), F.derive(() => {
      const g = m.shellResults.val != "none", A = m.frameResults.val.startsWith("contour:");
      a.hidden = !g, s.visible = g, w.hidden = !A;
    });
  }
  if (n) {
    const d = new Ue(16777215, 0.5);
    c.add(d);
    const s = new Ae(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, c.add(s);
    const a = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = a, s.shadow.camera.top = a, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const u = new Ae(16777215, 0.5);
    u.color.setHSL(11, 43, 96), u.position.set(-10, 0, 30), c.add(u), F.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), C());
    }), F.derive(() => {
      n.rawVal.forEach((h) => h.visible = m.solids.val), C();
    });
  }
  o && F.derive(() => {
    (o == null ? void 0 : o.val.length) && (c.remove(...o.oldVal), c.add(...o.rawVal), C());
  }), l && wt({ drawingObj: l, gridObj: X, scene: c, camera: i, controls: b, gridSize: B, derivedDisplayScale: V, rendererElm: M.domElement, viewerRender: C }), pe((d, s) => {
    M.setClearColor(s.background, 1), c.remove(X), X.geometry.dispose(), X.material.dispose(), X = ze(m.gridSize.rawVal), c.add(X), r.style.setProperty("--awatif-legend-color", s.legendMarker), C();
  });
  const x = { scene: c, perspCamera: i, orthoCamera: p, get camera() {
    return y;
  }, controls: b, renderer: M, rendererElm: M.domElement, render: C, setActiveCamera: f, settings: m };
  return r.__ctx = x, r;
}
function St(e, t) {
  return F.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const l = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || l.length === 0) return l;
    const n = t.deformScale.val;
    return l.map((r, c) => {
      var _a2;
      const i = ((_a2 = o.get(c)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return r.map((p, y) => p + i[y] * n);
    });
  });
}
function At(e, t) {
  const l = F.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), F.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), V = (k, B) => {
      k == null ? void 0 : k.forEach((Y, P) => {
        const C = e.elements.val[P];
        if (C) for (let f = 0; f < C.length; f++) B.set(C[f], [Y[f] ?? Y[0]]);
      });
    };
    V((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), V((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, r), V((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, c), V((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, i), V((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, p), V((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, y), V((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, M), V((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, b), V((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, m);
    const S = { bendingXX: [n, 0], bendingYY: [r, 0], bendingXY: [c, 0], membraneXX: [i, 0], membraneYY: [p, 0], membraneXY: [y, 0], tranverseShearX: [M, 0], tranverseShearY: [b, 0], vonMises: [m, 0], displacementX: [(_t = (_s = e.deformOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.deformations, 0], displacementY: [(_v = (_u = e.deformOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.deformations, 1], displacementZ: [(_x = (_w = e.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 2] }, X = [];
    e.nodes.val.forEach((k, B) => {
      const Y = S[t.shellResults.val];
      if (!Y || !Y[0] || typeof Y[0].has != "function") return;
      if (!Y[0].has(B)) {
        X.push(0);
        return;
      }
      const P = Y[0].get(B);
      X.push(P ? P[Y[1]] ?? 0 : 0);
    }), l.val = X;
  }), l;
}
export {
  xt as a,
  Te as b,
  Yt as g
};
