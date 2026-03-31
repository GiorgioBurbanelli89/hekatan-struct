import { H as ct, B as L, I as dt, F as K, G as U, h as Yt, a as et, j as Q, D as O, e as D, C as G, l as Bt, i as Rt, V as E, A as tt, z as q, J as Mt, d as It, L as nt, c as $, r as ht, K as ut, R as Lt, f as kt, N as Zt, U as Wt, X as St, Y as rt, Z as Ht, _ as _t, t as $t, u as Gt, v as qt, W as Nt, w as Kt, x as Ut, y as At, O as Dt } from "./Text-CBH-tcJP.js";
import { v as F, P as Qt, g as j, o as pt } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function Jt(t, e, l) {
  const o = document.createElement("div"), n = new Qt({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (e == null ? void 0 : e.nodes) && (n.addBinding(t.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(t.nodes, "val", { label: "Nodes" }), n.addBinding(t.elements, "val", { label: "Elements" }), n.addBinding(t.elemColumns, "val", { label: "  Columnas" }), n.addBinding(t.elemBeams, "val", { label: "  Vigas" }), n.addBinding(t.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(t.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(t.orientations, "val", { label: "Orientations" }), n.addBinding(t.sections, "val", { label: "Sections" }), n.addBinding(t.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(t.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(t.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (e == null ? void 0 : e.nodeInputs) || (e == null ? void 0 : e.elementInputs)) {
    const r = n.addFolder({ title: "Analysis Inputs" });
    r.addBinding(t.supports, "val", { label: "Supports" }), r.addBinding(t.loads, "val", { label: "Loads" });
  }
  if ((e == null ? void 0 : e.deformOutputs) || (e == null ? void 0 : e.analyzeOutputs)) {
    const r = n.addFolder({ title: "Analysis Outputs" });
    r.addBinding(t.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), r.addBinding(t.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), r.addBinding(t.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), r.addBinding(t.deformedShape, "val", { label: "Deformed shape" });
  }
  return l && n.addBinding(t.solids, "val", { label: "Solids" }), o;
}
function Ot(t) {
  return { gridSize: F.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: F.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: F.state((t == null ? void 0 : t.nodes) ?? true), elements: F.state((t == null ? void 0 : t.elements) ?? true), elemColumns: F.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: F.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: F.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: F.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: F.state((t == null ? void 0 : t.orientations) ?? false), sections: F.state((t == null ? void 0 : t.sections) ?? true), secColumns: F.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: F.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: F.state((t == null ? void 0 : t.secFloor) ?? -1), supports: F.state((t == null ? void 0 : t.supports) ?? true), loads: F.state((t == null ? void 0 : t.loads) ?? false), deformedShape: F.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: F.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: F.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: F.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: F.state((t == null ? void 0 : t.flipAxes) ?? false), solids: F.state((t == null ? void 0 : t.solids) ?? true) };
}
function jt(t, e, l) {
  const o = j(), n = new ct(new L(), new dt({ color: o.nodePoint }));
  return pt((r, c) => {
    n.material.color.setHex(c.nodePoint);
  }), n.frustumCulled = false, F.derive(() => {
    t.nodes.val && n.geometry.setAttribute("position", new K(e.val.flat(), 3));
  }), F.derive(() => {
    l.val;
    const r = 0.05 * t.gridSize.val * 0.5;
    t.nodes.rawVal && (n.material.size = r * l.rawVal);
  }), F.derive(() => {
    n.visible = t.nodes.val;
  }), n;
}
function te(t, e, l) {
  const o = j(), n = new U(), r = new Yt(new L(), new et({ color: o.elementLine }));
  pt((w, V) => {
    r.material.color.setHex(V.elementLine);
  }), r.frustumCulled = false, n.add(r);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), i = new D(new L(), c);
  i.frustumCulled = false, n.add(i);
  let p = new G(o.shellWall), y = new G(o.shellSlab), M = new G(o.shellTri);
  pt((w, V) => {
    p = new G(V.shellWall), y = new G(V.shellSlab), M = new G(V.shellTri), c.opacity = V.shellOpacity, c.needsUpdate = true;
  });
  function b(w, V) {
    const S = Math.abs(V[0] - w[0]), X = Math.abs(V[1] - w[1]), k = Math.abs(V[2] - w[2]);
    return k > S && k > X || X > S && X > k;
  }
  return F.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const w = e.elemColumns.rawVal, V = e.elemBeams.rawVal, S = l.val, X = ((_a = t.elements) == null ? void 0 : _a.val) || [], k = X.filter((C) => {
      if (C.length !== 2) return true;
      const m = S[C[0]], x = S[C[1]];
      if (!m || !x) return true;
      const d = b(m, x);
      return !(d && !w || !d && !V);
    }).map((C) => ee(C).map((m) => [...S[m[0]], ...S[m[1]]]).flat()).flat();
    r.geometry.setAttribute("position", new K(k, 3));
    const B = [], Y = [];
    function P(C, m, x, d) {
      const s = [m[0] - C[0], m[1] - C[1], m[2] - C[2]], a = [d[0] - C[0], d[1] - C[1], d[2] - C[2]], u = s[1] * a[2] - s[2] * a[1], h = s[2] * a[0] - s[0] * a[2], f = s[0] * a[1] - s[1] * a[0], g = Math.sqrt(u * u + h * h + f * f);
      return g < 1e-12 ? false : Math.abs(f / g) < 0.5;
    }
    for (const C of X) if (C.length === 3) {
      const [m, x, d] = C;
      if (S[m] && S[x] && S[d]) {
        B.push(...S[m], ...S[x], ...S[d]);
        for (let s = 0; s < 3; s++) Y.push(M.r, M.g, M.b);
      }
    } else if (C.length === 4) {
      const [m, x, d, s] = C;
      if (S[m] && S[x] && S[d] && S[s]) {
        const a = P(S[m], S[x], S[d], S[s]) ? p : y;
        B.push(...S[m], ...S[x], ...S[d]), B.push(...S[m], ...S[d], ...S[s]);
        for (let u = 0; u < 6; u++) Y.push(a.r, a.g, a.b);
      }
    }
    B.length > 0 ? (i.geometry.dispose(), i.geometry = new L(), i.geometry.setAttribute("position", new K(B, 3)), i.geometry.setAttribute("color", new K(Y, 3)), i.geometry.computeVertexNormals(), i.visible = true) : i.visible = false;
  }), F.derive(() => {
    n.visible = e.elements.val;
  }), n;
}
function ee(t) {
  if (t.length === 2) return [t];
  const e = [];
  for (let l = 0; l < t.length; l++) e.push([t[l], t[(l + 1) % t.length]]);
  return e;
}
function zt(t) {
  const e = j(), l = new Bt(t, 20, e.grid, e.grid);
  return l.position.set(0.5 * t, 0.5 * t, 0), l.rotateX(Math.PI / 2), l;
}
function ne(t, e, l, o) {
  const n = new U(), r = new Rt(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return F.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const i = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((p, y) => {
      const M = l.val[y];
      if (!M) return;
      const b = new D(r, c);
      b.position.set(...M);
      const w = i * o.rawVal;
      b.scale.set(w, w, w), n.add(b);
    });
  }), F.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const p = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((y) => y.scale.set(p, p, p));
  }), F.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function oe(t, e, l, o) {
  const n = new U();
  n.name = "loadsGroup";
  function r(c) {
    if (c.length < 2) return 0.12 * e.gridSize.rawVal;
    const i = [1 / 0, 1 / 0, 1 / 0], p = [-1 / 0, -1 / 0, -1 / 0];
    for (const M of c) for (let b = 0; b < 3; b++) i[b] = Math.min(i[b], M[b]), p[b] = Math.max(p[b], M[b]);
    return 0.08 * Math.max(p[0] - i[0], p[1] - i[1], p[2] - i[2], 0.1);
  }
  return F.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((p) => p.dispose()), n.clear();
    const c = l.val, i = r(c);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((p, y) => {
      const M = c[y];
      if (!M) return;
      const b = new E(...p.slice(0, 3));
      if (b.lengthSq() < 1e-30) return;
      b.normalize();
      const w = new tt(b, new E(...M), 1, 15637248, 0.3, 0.3), V = i * o.rawVal;
      w.scale.set(V, V, V), n.add(w);
    });
  }), F.derive(() => {
    if (o.val, !e.loads.rawVal) return;
    const i = r(l.rawVal) * o.rawVal;
    n.children.forEach((p) => p.scale.set(i, i, i));
  }), F.derive(() => {
    n.visible = e.loads.val;
  }), n;
}
function se(t, e, l) {
  const o = new U();
  return F.derive(() => {
    if (!t.nodesIndexes.val) return;
    o.children.forEach((r) => r.dispose()), o.clear();
    const n = 0.05 * t.gridSize.val * 0.6;
    e.val.forEach((r, c) => {
      const i = new q(`${c}`);
      i.position.set(...r), i.updateScale(n * l.rawVal), o.add(i);
    });
  }), F.derive(() => {
    if (l.val, !t.nodesIndexes.rawVal) return;
    const n = 0.05 * t.gridSize.val * 0.6;
    o.children.forEach((r) => r.updateScale(n * l.rawVal));
  }), F.derive(() => {
    o.visible = t.nodesIndexes.val;
  }), o;
}
function ie(t, e, l, o) {
  const n = new U();
  return F.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const r = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((c, i) => {
      const p = new q(`${i}`, void 0, "#001219");
      p.position.set(...ae(c.map((y) => l.rawVal[y]))), p.updateScale(r * o.rawVal), n.add(p);
    });
  }), F.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const r = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), F.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function ae(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = t.length;
  return [e[0] / l, e[1] / l, e[2] / l];
}
function re(t, e) {
  const l = new U(), o = 0.05 * t * 1, n = j(), r = new q("X", "red", "transparent"), c = new q(e ? "Z" : "Y", "green", "transparent"), i = new q(e ? "Y" : "Z", "blue", "transparent"), p = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), y = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), M = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return r.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), i.position.set(0, 0, 1.3 * o), r.updateScale(0.4 * o), c.updateScale(0.4 * o), i.updateScale(0.4 * o), p.scale.set(o, o, o), y.scale.set(o, o, o), M.scale.set(o, o, o), l.add(p, y, M, r, c, i), l;
}
function Ft(t, e) {
  const l = new E(...t), n = new E(...e).clone().sub(l), r = n.length(), c = n.dot(new E(1, 0, 0)) / r, i = n.dot(new E(0, 1, 0)) / r, p = n.dot(new E(0, 0, 1)) / r, y = Math.sqrt(c ** 2 + i ** 2);
  let M = new Mt().fromArray([[c, i, p], [-i / y, c / y, 0], [-c * p / y, -i * p / y, y]].flat());
  return p === 1 && (M = new Mt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), p === -1 && (M = new Mt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new It().setFromMatrix3(M);
}
function gt(t, e) {
  return t == null ? void 0 : t.map((l, o) => (9 * l + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = t.length;
  return [e[0] / l, e[1] / l, e[2] / l];
}
function le(t, e, l) {
  const o = ot([e, l]), n = ot([t, l]), r = ot([t, e]), c = new E(...o).sub(new E(...n)).normalize(), i = new E(...l).sub(new E(...r)).normalize(), p = c.clone().cross(i).normalize(), y = p.clone().cross(c).normalize();
  return new It().makeBasis(c, y, p);
}
function ce(t, e, l, o) {
  const n = new U(), r = new L(), c = new et({ vertexColors: true }), i = [0, 0, 0], p = [1, 0, 0], y = [0, 1, 0], M = [0, 0, 1];
  r.setAttribute("position", new K([...i, ...p, ...i, ...y, ...i, ...M], 3));
  const b = [255, 0, 0], w = [0, 255, 0], V = [0, 0, 255];
  return r.setAttribute("color", new K([...b, ...b, ...w, ...w, ...V, ...V], 3)), F.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((S) => {
      const X = new Yt(r, c), k = l.rawVal[S[0]], B = l.rawVal[S[1]];
      if (S.length === 2 && (X.position.set(...gt(k, B)), X.rotation.setFromRotationMatrix(Ft(k, B))), S.length === 3) {
        const C = l.rawVal[S[2]];
        X.position.set(...ot([k, B, C])), X.rotation.setFromRotationMatrix(le(k, B, C));
      }
      const P = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      X.scale.set(P, P, P), n.add(X);
    }));
  }), F.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const X = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((k) => k.scale.set(X, X, X));
  }), F.derive(() => {
    n.visible = e.orientations.val;
  }), n;
}
function de(t) {
  if (t.name) return t.name;
  if (t.type === "rect") {
    const e = (t.b * 100).toFixed(0), l = (t.h * 100).toFixed(0);
    return `${e}x${l}`;
  }
  return t.type === "circ" ? `D${(t.d * 100).toFixed(0)}` : "";
}
function he(t, e, l, o) {
  const n = new U();
  function r(m, x) {
    const d = m / 2, s = x / 2, a = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, -s, 0, d, s, 0, -d, s]), u = new L();
    u.setAttribute("position", new $(a, 3));
    const h = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, s, 0, -d, -s]), f = new L();
    return f.setAttribute("position", new $(h, 3)), { fill: u, outline: f };
  }
  function c(m, x = 24) {
    const d = m / 2, s = new Float32Array(x * 9);
    for (let f = 0; f < x; f++) {
      const g = f / x * Math.PI * 2, A = (f + 1) / x * Math.PI * 2;
      s[f * 9] = 0, s[f * 9 + 1] = 0, s[f * 9 + 2] = 0, s[f * 9 + 3] = 0, s[f * 9 + 4] = d * Math.cos(g), s[f * 9 + 5] = d * Math.sin(g), s[f * 9 + 6] = 0, s[f * 9 + 7] = d * Math.cos(A), s[f * 9 + 8] = d * Math.sin(A);
    }
    const a = new L();
    a.setAttribute("position", new $(s, 3));
    const u = new Float32Array((x + 1) * 3);
    for (let f = 0; f <= x; f++) {
      const g = f / x * Math.PI * 2;
      u[f * 3] = 0, u[f * 3 + 1] = d * Math.cos(g), u[f * 3 + 2] = d * Math.sin(g);
    }
    const h = new L();
    return h.setAttribute("position", new $(u, 3)), { fill: a, outline: h };
  }
  function i(m, x, d, s) {
    const a = d ?? x * 0.08, u = s ?? m * 0.07, h = m / 2, f = x / 2, g = f - a, A = u / 2, I = [];
    function v(T, W, H, _) {
      I.push(0, T, W, 0, H, W, 0, H, _, 0, T, W, 0, H, _, 0, T, _);
    }
    v(-h, -f, h, -g), v(-A, -g, A, g), v(-h, g, h, f);
    const z = new L();
    z.setAttribute("position", new $(new Float32Array(I), 3));
    const R = new Float32Array([0, -h, -f, 0, h, -f, 0, h, -g, 0, A, -g, 0, A, g, 0, h, g, 0, h, f, 0, -h, f, 0, -h, g, 0, -A, g, 0, -A, -g, 0, -h, -g, 0, -h, -f]), Z = new L();
    return Z.setAttribute("position", new $(R, 3)), { fill: z, outline: Z };
  }
  function p(m, x, d) {
    const s = m / 2, a = x / 2, u = s - d, h = a - d, f = [];
    function g(z, R, Z, T) {
      f.push(0, z, R, 0, Z, R, 0, Z, T, 0, z, R, 0, Z, T, 0, z, T);
    }
    g(-s, -a, s, -h), g(-s, h, s, a), g(-s, -h, -u, h), g(u, -h, s, h);
    const A = new L();
    A.setAttribute("position", new $(new Float32Array(f), 3));
    const I = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), v = new L();
    return v.setAttribute("position", new $(I, 3)), { fill: A, outline: v };
  }
  function y(m, x, d) {
    const s = m / 2, a = x / 2, u = s - d, h = a - d, f = new L(), g = new Float32Array([0, -u, -h, 0, u, -h, 0, u, h, 0, -u, -h, 0, u, h, 0, -u, h]);
    f.setAttribute("position", new $(g, 3));
    const A = [];
    function I(Z, T, W, H) {
      A.push(0, Z, T, 0, W, T, 0, W, H, 0, Z, T, 0, W, H, 0, Z, H);
    }
    I(-s, -a, s, -h), I(-s, h, s, a), I(-s, -h, -u, h), I(u, -h, s, h);
    const v = new L();
    v.setAttribute("position", new $(new Float32Array(A), 3));
    const z = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), R = new L();
    return R.setAttribute("position", new $(z, 3)), { concFill: f, steelFillGeom: v, outline: R };
  }
  function M(m, x, d) {
    const s = [], a = [[0, -m / 2, -x / 2], [0, -m / 2 + d, -x / 2], [0, -m / 2 + d, x / 2 - d], [0, m / 2, x / 2 - d], [0, m / 2, x / 2], [0, -m / 2, x / 2]], u = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of u) s.push(...a[A]);
    const h = new L();
    h.setAttribute("position", new $(new Float32Array(s), 3));
    const f = [];
    for (let A = 0; A < a.length; A++) {
      const I = (A + 1) % a.length;
      f.push(...a[A], ...a[I]);
    }
    const g = new L();
    return g.setAttribute("position", new $(new Float32Array(f), 3)), { fill: h, outline: g };
  }
  function b(m, x, d, s) {
    const a = s / 2, u = [], h = [[0, -m - a, -x / 2], [0, -d - a, -x / 2], [0, -d - a, x / 2 - d], [0, -a, x / 2 - d], [0, -a, x / 2], [0, -m - a, x / 2]], f = [[0, a, -x / 2], [0, a + d, -x / 2], [0, a + d, x / 2 - d], [0, m + a, x / 2 - d], [0, m + a, x / 2], [0, a, x / 2]], g = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const z of g) u.push(...h[z]);
    for (const z of g) u.push(...f[z]);
    const A = new L();
    A.setAttribute("position", new $(new Float32Array(u), 3));
    const I = [];
    for (const z of [h, f]) for (let R = 0; R < z.length; R++) {
      const Z = (R + 1) % z.length;
      I.push(...z[R], ...z[Z]);
    }
    const v = new L();
    return v.setAttribute("position", new $(new Float32Array(I), 3)), { fill: A, outline: v };
  }
  function w(m, x, d, s) {
    const a = x / 2, u = m, h = [[0, -u, -a], [0, -u, -a + d], [0, -s, -a + d], [0, -s, a - d], [0, -u, a - d], [0, -u, a], [0, 0, a], [0, 0, -a]], f = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], g = [];
    for (const z of f) g.push(...h[z]);
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
  function V(m, x, d, s, a) {
    const u = x / 2, h = a / 2, f = [], g = [[0, -m, -u], [0, -m, -u + d], [0, -h - s, -u + d], [0, -h - s, u - d], [0, -m, u - d], [0, -m, u], [0, -h, u], [0, -h, -u]], A = g.map((Z) => [Z[0], -Z[1], Z[2]]), I = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const Z of I) f.push(...g[Z]);
    for (const Z of I) f.push(...A[Z]);
    const v = new L();
    v.setAttribute("position", new $(new Float32Array(f), 3));
    const z = [];
    for (const Z of [g, A]) for (let T = 0; T < Z.length; T++) {
      const W = (T + 1) % Z.length;
      z.push(...Z[T], ...Z[W]);
    }
    const R = new L();
    return R.setAttribute("position", new $(new Float32Array(z), 3)), { fill: v, outline: R };
  }
  function S(m, x, d, s) {
    const a = m / 2, u = x / 2, h = s / 2, f = [[0, -h, -u], [0, h, -u], [0, h, u - d], [0, a, u - d], [0, a, u], [0, -a, u], [0, -a, u - d], [0, -h, u - d]], g = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], A = [];
    for (const R of g) A.push(...f[R]);
    const I = new L();
    I.setAttribute("position", new $(new Float32Array(A), 3));
    const v = [];
    for (let R = 0; R < f.length; R++) {
      const Z = (R + 1) % f.length;
      v.push(...f[R], ...f[Z]);
    }
    const z = new L();
    return z.setAttribute("position", new $(new Float32Array(v), 3)), { fill: I, outline: z };
  }
  function X(m, x, d = 24) {
    const s = m / 2, a = s - x, u = [];
    for (let A = 0; A < d; A++) {
      const I = A / d * Math.PI * 2, v = (A + 1) / d * Math.PI * 2, z = Math.cos(I), R = Math.sin(I), Z = Math.cos(v), T = Math.sin(v);
      u.push(0, s * z, s * R, 0, s * Z, s * T, 0, a * Z, a * T), u.push(0, s * z, s * R, 0, a * Z, a * T, 0, a * z, a * R);
    }
    const h = new L();
    h.setAttribute("position", new $(new Float32Array(u), 3));
    const f = [];
    for (let A = 0; A < d; A++) {
      const I = A / d * Math.PI * 2, v = (A + 1) / d * Math.PI * 2;
      f.push(0, s * Math.cos(I), s * Math.sin(I), 0, s * Math.cos(v), s * Math.sin(v)), f.push(0, a * Math.cos(I), a * Math.sin(I), 0, a * Math.cos(v), a * Math.sin(v));
    }
    const g = new L();
    return g.setAttribute("position", new $(new Float32Array(f), 3)), { fill: h, outline: g };
  }
  const k = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), B = new et({ color: 52479 }), Y = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), P = new et({ color: 16750848 });
  function C(m, x) {
    const d = Math.abs(x[0] - m[0]), s = Math.abs(x[1] - m[1]), a = Math.abs(x[2] - m[2]);
    return a > d && a > s || s > d && s > a;
  }
  return F.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const m = e.secColumns.rawVal, x = e.secBeams.rawVal;
    if (!m && !x) {
      n.children.forEach((h) => {
        h instanceof q && h.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((h) => {
      h instanceof q && h.dispose();
    }), n.clear();
    const d = (_a = t.elements) == null ? void 0 : _a.val, s = (_b = t.elementInputs) == null ? void 0 : _b.val;
    if (!d || !s) return;
    const a = s.sectionShapes, u = e.secFloor.rawVal;
    d.forEach((h, f) => {
      if (h.length !== 2) return;
      const g = l.rawVal[h[0]], A = l.rawVal[h[1]];
      if (!g || !A) return;
      const I = C(g, A);
      if (I && !m || !I && !x) return;
      if (u >= 0) {
        const T = Math.min(g[1], A[1]);
        Math.max(g[1], A[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(T / W + 0.01) !== u) return;
      }
      const v = a == null ? void 0 : a.get(f);
      if (!v) return;
      const z = [(g[0] + A[0]) / 2, (g[1] + A[1]) / 2, (g[2] + A[2]) / 2], R = Ft(g, A);
      if (v.type === "CFT") {
        const T = y(v.b, v.h, v.tw ?? v.b * 0.05), W = new D(T.concFill, k);
        W.position.set(...z), W.rotation.setFromRotationMatrix(R), n.add(W);
        const H = new D(T.steelFillGeom, Y);
        H.position.set(...z), H.rotation.setFromRotationMatrix(R), n.add(H);
        const _ = new nt(T.outline, P);
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
            T = w(v.b, v.h, v.tf ?? v.t ?? 3e-3, v.tw ?? v.t ?? 3e-3), W = Y, H = P;
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
        const N = new nt(T.outline, H);
        N.position.set(...z), N.rotation.setFromRotationMatrix(R), n.add(N);
      }
      const Z = de(v);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(v.type) ? "#ff9900" : "#00ccff", H = new q(Z, W, "transparent");
        H.position.set(z[0], z[1], z[2]);
        const _ = 0.05 * e.gridSize.rawVal * 0.5;
        H.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(H);
      }
    });
  }), o && F.derive(() => {
    if (o.val, !e.sections.rawVal) return;
    const m = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((x) => {
      x instanceof q && x.updateScale(m * o.rawVal);
    });
  }), F.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends U {
  constructor(e, l, o, n, r, c, i) {
    super();
    const p = new ht().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), y = p.getPoints(), M = new L().setFromPoints(y);
    this.lines = new nt(M, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new ut(p), w = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(b, w), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new q(`${r[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = ot([e, l]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Pt extends U {
  constructor(e, l, o, n, r, c, i) {
    super();
    const p = r[0] * o / (r[0] + r[1]), y = r[0] * r[1] > 0;
    if (this.text = new q(`${r[0].toFixed(4)}`), this.text2 = new q(`${(r[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = gt(e, l), this.text2Position = gt(l, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), y) {
      const M = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(p, 0).lineTo(0, 0), b = new ht().moveTo(p, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(p, 0), w = M.getPoints(), V = b.getPoints(), S = new L().setFromPoints(w), X = new L().setFromPoints(V), k = new et({ color: j().resultOutline });
      this.lines = new nt(S, k), this.lines2 = new nt(X, k), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), i && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const B = new ut(M), Y = new ut(b), P = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), C = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(B, P), this.mesh2 = new D(Y, C), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), i && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const M = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), b = M.getPoints(), w = new L().setFromPoints(b);
      this.lines = new nt(w, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const V = new ut(M), S = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(V, S), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function ue(t, e, l, o) {
  const n = new U(), r = { normals: lt, shearsY: lt, shearsZ: lt, torsions: lt, bendingsY: Pt, bendingsZ: Pt };
  return F.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, l.val, e.frameResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const c = Xt[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((i, p) => {
      var _a2, _b2;
      const y = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[p]) ?? [0, 1], M = l.rawVal[y[0]], b = l.rawVal[y[1]], w = new E(...b).distanceTo(new E(...M)), V = pe((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), S = i == null ? void 0 : i.map((Y) => Y / (V === 0 ? 1 : V)), X = Ft(M, b), k = new r[c](M, b, w, X, i ?? [0, 0], S ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), B = 0.05 * e.gridSize.rawVal;
      k.updateScale(B * o.rawVal), n.add(k);
    });
  }), F.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const c = 0.05 * e.gridSize.val;
    n.children.forEach((i) => i.updateScale(c * o.rawVal));
  }), F.derive(() => {
    n.visible = e.frameResults.val != "none";
  }), n;
}
function pe(t) {
  let e = 0;
  return t == null ? void 0 : t.forEach((l) => {
    const o = Math.max(...l ?? [0, 0]);
    o > e && (e = o);
  }), e;
}
class me extends U {
  constructor(e, l, o) {
    super();
    const n = l === Ct.reactions;
    o[0] && (this.xText1 = new q(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new q(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new q(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new q(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new q(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new q(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...e), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function fe(t, e, l, o) {
  const n = new U();
  return F.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const r = Ct[e.nodeResults.rawVal], c = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[r]) == null ? void 0 : _b.forEach((i, p) => {
      const y = new me(l.rawVal[p], r, i ?? [0, 0, 0, 0, 0, 0]);
      y.updateScale(c * o.rawVal), n.add(y);
    });
  }), F.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const r = 0.05 * e.gridSize.val;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), F.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function we({ drawingObj: t, gridObj: e, scene: l, camera: o, controls: n, gridSize: r, derivedDisplayScale: c, rendererElm: i, viewerRender: p }) {
  const y = new Lt(), M = new kt(), b = new D(new Zt(r, r), new Q({ side: O })), w = new ct(new L(), new dt()), V = new ct(new L(), new dt({ color: "gray" })), S = new ct(new L(), new dt({ color: "orange", size: 0.8 }));
  l.add(S), w.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), w.geometry.computeBoundingSphere(), w.frustumCulled = false, V.frustumCulled = false, l.add(V), b.position.set(0.5 * r, 0.5 * r, 0), b.rotateX(Math.PI / 2), b.geometry.rotateX(Math.PI / 2), b.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), F.derive(() => {
    t.gridTarget && (ve(e, { position: new E(...t.gridTarget.val.position), quaternion: new Wt().setFromEuler(new St(...t.gridTarget.val.rotation)) }, p), b.position.set(...t.gridTarget.val.position), b.quaternion.setFromEuler(new St(...t.gridTarget.val.rotation)), b.updateMatrixWorld());
  }), F.derive(() => {
    w.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), w.geometry.computeBoundingSphere();
  }), F.derive(() => {
    const P = 0.05 * r * 0.5 * c.val;
    V.material.size = P, y.params.Points.threshold = 0.4 * P;
  }), F.derive(() => {
    var _a;
    const P = t.points.val ?? [], m = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], x = [];
    for (const s of m) {
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
      let m = C[0].point;
      (P.ctrlKey || P.metaKey) && (m = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), t.points.val = [...t.points.rawVal, m.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), i.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), i.addEventListener("pointermove", (P) => {
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    const C = y.intersectObject(b);
    if (V.geometry.deleteAttribute("position"), C.length) {
      let m = C[0].point;
      (P.ctrlKey || P.metaKey) && (m = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), V.geometry.setAttribute("position", new K(m.toArray(), 3));
    }
    p();
  }), i.addEventListener("pointermove", (P) => {
    var _a;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    let C = false;
    const m = y.intersectObject(w), x = y.intersectObject(b);
    if (m.length && x.length) {
      const d = new E(...t.points.rawVal[m[0].index]), s = new E(...x[0].point), a = d.sub(s), u = (_a = x[0].face) == null ? void 0 : _a.normal;
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
    const m = y.intersectObject(w), x = y.intersectObject(b);
    if (m.length && x.length) {
      const s = new E(...t.points.rawVal[m[0].index]), a = new E(...x[0].point), u = s.sub(a), h = (_a = x[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(b.matrixWorld), Math.abs(u.dot(h)) < 1e-4 && (C = true);
    }
    if (C && k < 5 && (B = true, n.enabled = false, Y = m[0].index), !B || k % 2 !== 0) return;
    const d = [...t.points.rawVal];
    if (Y !== void 0) {
      let s = x[0].point;
      (P.ctrlKey || P.metaKey) && (s = new E(Math.round(s.x), Math.round(s.y), Math.round(s.z))), d[Y] = s.toArray();
    }
    t.points.val = d;
  }), i.addEventListener("pointerup", () => {
    n.enabled = true, B = false;
  }), i.addEventListener("contextmenu", (P) => {
    var _a;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, o);
    let C = false;
    const m = y.intersectObject(w), x = y.intersectObject(b);
    if (m.length && x.length) {
      const a = new E(...t.points.rawVal[m[0].index]), u = new E(...x[0].point), h = a.sub(u), f = (_a = x[0].face) == null ? void 0 : _a.normal;
      f.transformDirection(b.matrixWorld), Math.abs(h.dot(f)) < 1e-4 && (C = true);
    }
    if (!C) return;
    const d = [...t.points.rawVal];
    if (d.splice(m[0].index, 1), t.points.val = d, !t.polylines) return;
    const s = t.polylines.rawVal.map((a) => a.filter((u) => u !== m[0].index)).map((a) => a.map((u) => u > m[0].index ? u - 1 : u)).filter((a) => a.length);
    s.push([]), t.polylines.val = s;
  });
}
function ve(t, e, l) {
  const r = Math.round(14.999999999999998), c = { position: t.position.clone(), quaternion: t.quaternion.clone() }, i = setInterval(y, 1e3 / 30);
  let p = 0;
  function y() {
    p++;
    const M = p / r;
    t.position.lerpVectors(c.position, e.position, M), t.quaternion.slerpQuaternions(c.quaternion, e.quaternion, M), l && l(), p == r && clearInterval(i);
  }
}
class Et {
  constructor(e, l = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(e, l);
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
  setColorMap(e, l = 32) {
    this.map = yt[e] || yt.rainbow, this.n = l;
    const o = 1 / this.n, n = new G(), r = new G();
    this.lut.length = 0, this.lut.push(new G(this.map[0][1]));
    for (let c = 1; c < l; c++) {
      const i = c * o;
      for (let p = 0; p < this.map.length - 1; p++) if (i > this.map[p][0] && i <= this.map[p + 1][0]) {
        const y = this.map[p][0], M = this.map[p + 1][0];
        n.setHex(this.map[p][1], rt), r.setHex(this.map[p + 1][1], rt);
        const b = new G().lerpColors(n, r, (i - y) / (M - y));
        this.lut.push(b);
      }
    }
    return this.lut.push(new G(this.map[this.map.length - 1][1])), this;
  }
  copy(e) {
    return this.lut = e.lut, this.map = e.map, this.n = e.n, this.minV = e.minV, this.maxV = e.maxV, this;
  }
  getColor(e) {
    e = Ht.clamp(e, this.minV, this.maxV), e = (e - this.minV) / (this.maxV - this.minV);
    const l = Math.round(e * this.n);
    return this.lut[l];
  }
  addColorMap(e, l) {
    return yt[e] = l, this;
  }
  createCanvas() {
    const e = document.createElement("canvas");
    return e.width = 1, e.height = this.n, this.updateCanvas(e), e;
  }
  updateCanvas(e) {
    const l = e.getContext("2d", { alpha: false }), o = l.getImageData(0, 0, 1, this.n), n = o.data;
    let r = 0;
    const c = 1 / this.n, i = new G(), p = new G(), y = new G();
    for (let M = 1; M >= 0; M -= c) for (let b = this.map.length - 1; b >= 0; b--) if (M < this.map[b][0] && M >= this.map[b - 1][0]) {
      const w = this.map[b - 1][0], V = this.map[b][0];
      i.setHex(this.map[b - 1][1], rt), p.setHex(this.map[b][1], rt), y.lerpColors(i, p, (M - w) / (V - w)), n[r * 4] = Math.round(y.r * 255), n[r * 4 + 1] = Math.round(y.g * 255), n[r * 4 + 2] = Math.round(y.b * 255), n[r * 4 + 3] = 255, r += 1;
    }
    return l.putImageData(o, 0, 0), e;
  }
}
const yt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function xe(t, e, l) {
  const o = new Et(), n = new G(), r = new D(new L(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), r.renderOrder = -1, r.frustumCulled = false, F.derive(() => {
    r.geometry.setAttribute("position", new K(t.val.flat(), 3));
    const c = [];
    for (const i of e.val) i.length === 3 ? c.push(i[0], i[1], i[2]) : i.length === 4 && (c.push(i[0], i[1], i[2]), c.push(i[0], i[2], i[3]));
    r.geometry.setIndex(new _t(c, 1)), r.geometry.setAttribute("color", new K(t.val.map(() => [0, 0, 0]).flat(), 3)), o.setMax(Math.max(...l.val)), o.setMin(Math.min(...l.val));
    for (let i = 0; i < l.val.length; i++) {
      const p = o.getColor(l.val[i]) ?? new G(0, 0, 0);
      n.copy(p).convertSRGBToLinear(), n.multiplyScalar(0.6), r.geometry.attributes.color.setXYZ(i, n.r, n.g, n.b);
    }
  }), r;
}
function Me(t, e, l, o) {
  const n = xe(l, t.elements, o);
  return F.derive(() => {
    n.visible = e.shellResults.val != "none";
  }), n;
}
const ye = 6, bt = 10, be = 0.012;
function ge(t) {
  return t.startsWith("contour:") ? t.slice(8) : null;
}
function Fe(t, e, l, o) {
  if (!l && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(t) && l) {
    const r = l[t];
    if (r && r.has(e)) return r.get(e);
  }
  return null;
}
function Ce(t, e, l, o) {
  const n = new U(), r = new Et();
  r.setColorMap("rainbow");
  const c = new G(), i = F.state([]);
  return F.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const p = l.val, y = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], M = ge(e.frameResults.val);
    if (n.children.forEach((f) => {
      f.geometry && f.geometry.dispose(), f.material && f.material.dispose();
    }), n.clear(), !M || y.length === 0 || p.length === 0) {
      i.val = [];
      return;
    }
    const b = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, w = (_c = t.deformOutputs) == null ? void 0 : _c.val, V = [], S = [];
    for (let f = 0; f < y.length; f++) {
      if (y[f].length !== 2) continue;
      const A = Fe(M, f, b, w);
      A && (V.push(A[0], A[1]), S.push({ idx: f, vals: A }));
    }
    if (V.length === 0) {
      i.val = [];
      return;
    }
    const X = Math.min(...V), k = Math.max(...V);
    r.setMin(X), r.setMax(k), i.val = V;
    const B = [1 / 0, 1 / 0, 1 / 0], Y = [-1 / 0, -1 / 0, -1 / 0];
    for (const f of p) for (let g = 0; g < 3; g++) B[g] = Math.min(B[g], f[g]), Y[g] = Math.max(Y[g], f[g]);
    const C = Math.max(Y[0] - B[0], Y[1] - B[1], Y[2] - B[2], 1) * be, m = [], x = [], d = [];
    let s = 0;
    for (const { idx: f, vals: g } of S) {
      const A = y[f], I = p[A[0]], v = p[A[1]];
      if (!I || !v) continue;
      const z = new E(v[0] - I[0], v[1] - I[1], v[2] - I[2]), R = z.length();
      if (R < 1e-10) continue;
      z.normalize();
      const Z = Math.abs(z.y) < 0.99 ? new E(0, 1, 0) : new E(1, 0, 0), T = new E().crossVectors(z, Z).normalize(), W = new E().crossVectors(z, T).normalize(), H = bt + 1, _ = ye;
      for (let N = 0; N < H; N++) {
        const J = N / bt, st = I[0] + z.x * R * J, it = I[1] + z.y * R * J, mt = I[2] + z.z * R * J, ft = g[0] + (g[1] - g[0]) * J, at = r.getColor(ft) ?? new G(0, 0, 0);
        c.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const Vt = wt / _ * Math.PI * 2, vt = Math.cos(Vt), xt = Math.sin(Vt);
          m.push(st + (T.x * vt + W.x * xt) * C, it + (T.y * vt + W.y * xt) * C, mt + (T.z * vt + W.z * xt) * C), x.push(c.r, c.g, c.b);
        }
      }
      for (let N = 0; N < bt; N++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = s + N * _ + J, mt = s + N * _ + st, ft = s + (N + 1) * _ + J, at = s + (N + 1) * _ + st;
        d.push(it, mt, at), d.push(it, at, ft);
      }
      s += H * _;
    }
    if (m.length === 0) return;
    const a = new L();
    a.setAttribute("position", new K(m, 3)), a.setAttribute("color", new K(x, 3)), a.setIndex(d), a.computeVertexNormals();
    const u = new Q({ vertexColors: true, side: O }), h = new D(a, u);
    h.frustumCulled = false, n.add(h);
  }), n.__colorMapValues = i, n;
}
function Tt(t, e = 8) {
  const l = document.createElement("div");
  l.id = "legend";
  const o = Array.from({ length: e + 1 }, (i, p) => p / e).reverse();
  let n, r;
  o.forEach((i, p) => {
    n = document.createElement("div"), n.id = `marker-${p}`, n.className = "marker", n.style.marginTop = p == 0 ? "0px" : `calc(${50 / e}vh - 1px)`, r = document.createElement("p"), r.id = `marker-text-${p}`, n.append(r), l.append(n);
  });
  const c = [];
  return l.querySelectorAll("p").forEach((i) => c.push(i)), setTimeout(() => {
    F.derive(() => {
      o.forEach((i, p) => {
        const y = c[p];
        y && (y.innerText = Ve(t.val, i).toString());
      });
    });
  }), l;
}
function Ve(t, e) {
  const l = Math.max(...t) - Math.min(...t);
  return (Math.min(...t) + e * l).toPrecision(3);
}
function Ye({ mesh: t, settingsObj: e, drawingObj: l, objects3D: o, solids: n }) {
  Dt.DEFAULT_UP = new E(0, 0, 1);
  const r = document.createElement("div"), c = new $t(), i = new Gt(45, 1, 0.1, 2 * 1e6), p = new qt(-10, 10, 10, -10, -1e3, 2e6);
  let y = i;
  const M = new Nt({ antialias: true });
  M.localClippingEnabled = true;
  const b = new Kt(i, M.domElement), w = Ot(e), V = F.derive(() => w.displayScale.val === 0 ? 1 : w.displayScale.val > 0 ? w.displayScale.val : -1 / w.displayScale.val), S = Se(t, w);
  let X = zt(w.gridSize.rawVal);
  r.appendChild(Jt(w, t, n)), r.setAttribute("id", "viewer"), r.appendChild(M.domElement), M.setPixelRatio(window.devicePixelRatio);
  const k = j();
  M.setClearColor(k.background, 1);
  const B = w.gridSize.rawVal, Y = B * 0.5 + B * 0.5 / Math.tan(45 * 0.5);
  i.position.set(0.5 * B, 0.8 * -Y, 0.5 * B), b.target.set(0.5 * B, 0.5 * B, 0), b.minDistance = 1, b.maxDistance = Y * 2.5, b.zoomSpeed = 10, b.update(), c.add(X, re(w.gridSize.rawVal, w.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const s of d) {
      const a = (_a = s.target) == null ? void 0 : _a.clientWidth, u = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (a === 0 || u === 0) continue;
      i.aspect = a / u, i.updateProjectionMatrix();
      const h = a / u, f = p.top;
      p.left = -f * h, p.right = f * h, p.updateProjectionMatrix(), M.setSize(a, u), C();
    }
  }).observe(r), b.addEventListener("change", C), F.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, w.displayScale.val, w.nodes.val, w.elements.val, w.elemColumns.val, w.elemBeams.val, w.nodesIndexes.val, w.elementsIndexes.val, w.orientations.val, w.sections.val, w.secColumns.val, w.secBeams.val, w.secFloor.val, w.supports.val, w.loads.val, w.deformedShape.val, w.nodeResults.val, w.frameResults.val, w.shellResults.val, setTimeout(C);
  });
  function C() {
    M.render(c, y);
  }
  function m(d) {
    y = d, b.object = d, b.update(), C();
  }
  if (t) {
    c.add(jt(w, S, V), te(t, w, S), se(w, S, V), ie(t, w, S, V), ne(t, w, S, V), oe(t, w, S, V), ce(t, w, S, V), he(t, w, S, V), fe(t, w, S, V), ue(t, w, S, V));
    const d = Ae(t, w), s = Me(t, w, S, d), a = Tt(d);
    c.add(s), r.appendChild(a);
    const u = Ce(t, w, S);
    c.add(u);
    const h = u.__colorMapValues, f = Tt(h);
    f.id = "frame-legend", r.appendChild(f), F.derive(() => {
      const g = w.shellResults.val != "none", A = w.frameResults.val.startsWith("contour:");
      a.hidden = !g, s.visible = g, f.hidden = !A;
    });
  }
  if (n) {
    const d = new Ut(16777215, 0.5);
    c.add(d);
    const s = new At(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, c.add(s);
    const a = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = a, s.shadow.camera.top = a, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const u = new At(16777215, 0.5);
    u.color.setHSL(11, 43, 96), u.position.set(-10, 0, 30), c.add(u), F.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), C());
    }), F.derive(() => {
      n.rawVal.forEach((h) => h.visible = w.solids.val), C();
    });
  }
  o && F.derive(() => {
    (o == null ? void 0 : o.val.length) && (c.remove(...o.oldVal), c.add(...o.rawVal), C());
  }), l && we({ drawingObj: l, gridObj: X, scene: c, camera: i, controls: b, gridSize: B, derivedDisplayScale: V, rendererElm: M.domElement, viewerRender: C }), pt((d, s) => {
    M.setClearColor(s.background, 1), c.remove(X), X.geometry.dispose(), X.material.dispose(), X = zt(w.gridSize.rawVal), c.add(X), r.style.setProperty("--awatif-legend-color", s.legendMarker), C();
  });
  const x = { scene: c, perspCamera: i, orthoCamera: p, get camera() {
    return y;
  }, controls: b, renderer: M, rendererElm: M.domElement, render: C, setActiveCamera: m, settings: w };
  return r.__ctx = x, r;
}
function Se(t, e) {
  return F.derive(() => {
    var _a, _b;
    return e.deformedShape.val ? ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val.map((l, o) => {
      var _a2, _b2, _c, _d;
      const n = ((_d = (_c = (_b2 = (_a2 = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _a2.val) == null ? void 0 : _b2.deformations) == null ? void 0 : _c.get(o)) == null ? void 0 : _d.slice(0, 3)) ?? [0, 0, 0];
      return l.map((r, c) => r + n[c]);
    })) ?? [] : ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [];
  });
}
function Ae(t, e) {
  const l = F.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), F.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), V = (k, B) => {
      k == null ? void 0 : k.forEach((Y, P) => {
        const C = t.elements.val[P];
        if (C) for (let m = 0; m < C.length; m++) B.set(C[m], [Y[m] ?? Y[0]]);
      });
    };
    V((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), V((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, r), V((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, c), V((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, i), V((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, p), V((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, y), V((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, M), V((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, b), V((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, w);
    const S = { bendingXX: [n, 0], bendingYY: [r, 0], bendingXY: [c, 0], membraneXX: [i, 0], membraneYY: [p, 0], membraneXY: [y, 0], tranverseShearX: [M, 0], tranverseShearY: [b, 0], vonMises: [w, 0], displacementX: [(_t2 = (_s = t.deformOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.deformations, 0], displacementY: [(_v = (_u = t.deformOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.deformations, 1], displacementZ: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 2] }, X = [];
    t.nodes.val.forEach((k, B) => {
      const Y = S[e.shellResults.val];
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
  xe as a,
  Tt as b,
  Ye as g
};
