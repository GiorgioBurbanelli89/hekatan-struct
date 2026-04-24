import { H as ct, B as L, I as dt, F as K, G as D, h as It, a as et, j as Q, D as O, e as U, C as $, l as Rt, i as Lt, V as E, A as tt, z as G, J as Mt, d as Xt, L as nt, c as N, r as ut, K as ht, R as kt, f as Zt, N as Wt, U as Ht, X as St, Y as rt, Z as _t, _ as Nt, t as $t, u as Gt, v as qt, W as Kt, w as Dt, x as Ut, y as zt, O as Qt } from "./Text-CBH-tcJP.js";
import { v as V, P as Jt, g as j, o as pt } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function Ot(t, e, r) {
  const s = document.createElement("div"), n = new Jt({ title: "Settings", expanded: true, container: s });
  if (s.setAttribute("id", "settings"), (e == null ? void 0 : e.nodes) && (n.addBinding(t.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(t.nodes, "val", { label: "Nodes" }), n.addBinding(t.elements, "val", { label: "Elements" }), n.addBinding(t.elemColumns, "val", { label: "  Columnas" }), n.addBinding(t.elemBeams, "val", { label: "  Vigas" }), n.addBinding(t.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(t.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(t.orientations, "val", { label: "Orientations" }), n.addBinding(t.sections, "val", { label: "Sections" }), n.addBinding(t.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(t.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(t.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (e == null ? void 0 : e.nodeInputs) || (e == null ? void 0 : e.elementInputs)) {
    const a = n.addFolder({ title: "Analysis Inputs" });
    a.addBinding(t.supports, "val", { label: "Supports" }), a.addBinding(t.loads, "val", { label: "Loads" }), a.addBinding(t.custom3D, "val", { label: "Resortes (Winkler)" });
  }
  if ((e == null ? void 0 : e.deformOutputs) || (e == null ? void 0 : e.analyzeOutputs)) {
    const a = n.addFolder({ title: "Analysis Outputs" });
    a.addBinding(t.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), a.addBinding(t.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), a.addBinding(t.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), a.addBinding(t.deformedShape, "val", { label: "Deformed shape" });
  }
  return r && n.addBinding(t.solids, "val", { label: "Solids" }), s;
}
function jt(t) {
  return { gridSize: V.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: V.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: V.state((t == null ? void 0 : t.nodes) ?? true), elements: V.state((t == null ? void 0 : t.elements) ?? true), elemColumns: V.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: V.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: V.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: V.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: V.state((t == null ? void 0 : t.orientations) ?? false), sections: V.state((t == null ? void 0 : t.sections) ?? true), secColumns: V.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: V.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: V.state((t == null ? void 0 : t.secFloor) ?? -1), supports: V.state((t == null ? void 0 : t.supports) ?? true), loads: V.state((t == null ? void 0 : t.loads) ?? false), deformedShape: V.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: V.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: V.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: V.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: V.state((t == null ? void 0 : t.flipAxes) ?? false), solids: V.state((t == null ? void 0 : t.solids) ?? true), custom3D: V.state((t == null ? void 0 : t.custom3D) ?? true) };
}
function te(t, e, r) {
  const s = j(), n = new ct(new L(), new dt({ color: s.nodePoint }));
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
  const s = j(), n = new D(), a = new It(new L(), new et({ color: s.elementLine }));
  pt((f, S) => {
    a.material.color.setHex(S.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const c = new Q({ vertexColors: true, transparent: true, opacity: s.shellOpacity, side: O, depthWrite: false }), l = new U(new L(), c);
  l.frustumCulled = false, n.add(l);
  let m = new $(s.shellWall), y = new $(s.shellSlab), M = new $(s.shellTri);
  pt((f, S) => {
    m = new $(S.shellWall), y = new $(S.shellSlab), M = new $(S.shellTri), c.opacity = S.shellOpacity, c.needsUpdate = true;
  });
  function g(f, S) {
    const u = Math.abs(S[0] - f[0]), T = Math.abs(S[1] - f[1]), B = Math.abs(S[2] - f[2]);
    return B > u && B > T || T > u && T > B;
  }
  return V.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const f = e.elemColumns.rawVal, S = e.elemBeams.rawVal, u = r.val, T = ((_a = t.elements) == null ? void 0 : _a.val) || [], B = T.filter((C) => {
      if (C.length !== 2) return true;
      const v = u[C[0]], w = u[C[1]];
      if (!v || !w) return true;
      const d = g(v, w);
      return !(d && !f || !d && !S);
    }).map((C) => ne(C).map((v) => [...u[v[0]], ...u[v[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new K(B, 3));
    const I = [], k = [];
    function P(C, v, w, d) {
      const o = [v[0] - C[0], v[1] - C[1], v[2] - C[2]], i = [d[0] - C[0], d[1] - C[1], d[2] - C[2]], p = o[1] * i[2] - o[2] * i[1], h = o[2] * i[0] - o[0] * i[2], x = o[0] * i[1] - o[1] * i[0], F = Math.sqrt(p * p + h * h + x * x);
      return F < 1e-12 ? false : Math.abs(x / F) < 0.5;
    }
    for (const C of T) if (C.length === 3) {
      const [v, w, d] = C;
      if (u[v] && u[w] && u[d]) {
        I.push(...u[v], ...u[w], ...u[d]);
        for (let o = 0; o < 3; o++) k.push(M.r, M.g, M.b);
      }
    } else if (C.length === 4) {
      const [v, w, d, o] = C;
      if (u[v] && u[w] && u[d] && u[o]) {
        const i = P(u[v], u[w], u[d], u[o]) ? m : y;
        I.push(...u[v], ...u[w], ...u[d]), I.push(...u[v], ...u[d], ...u[o]);
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
function oe(t, e, r, s) {
  const n = new D(), a = new Lt(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((m, y) => {
      const M = r.val[y];
      if (!M) return;
      const g = new U(a, c);
      g.position.set(...M);
      const f = l * s.rawVal;
      g.scale.set(f, f, f), n.add(g);
    });
  }), V.derive(() => {
    if (s.val, !e.supports.rawVal) return;
    const m = 0.05 * e.gridSize.val * 0.6 * s.rawVal;
    n.children.forEach((y) => y.scale.set(m, m, m));
  }), V.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function se(t, e, r, s) {
  const n = new D();
  n.name = "loadsGroup";
  function a(c) {
    if (c.length < 2) return 0.12 * e.gridSize.rawVal;
    const l = [1 / 0, 1 / 0, 1 / 0], m = [-1 / 0, -1 / 0, -1 / 0];
    for (const M of c) for (let g = 0; g < 3; g++) l[g] = Math.min(l[g], M[g]), m[g] = Math.max(m[g], M[g]);
    return 0.08 * Math.max(m[0] - l[0], m[1] - l[1], m[2] - l[2], 0.1);
  }
  return V.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((m) => m.dispose()), n.clear();
    const c = r.val, l = a(c);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((m, y) => {
      const M = c[y];
      if (!M) return;
      const g = new E(...m.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const f = new tt(g, new E(...M), 1, 15637248, 0.3, 0.3), S = l * s.rawVal;
      f.scale.set(S, S, S), n.add(f);
    });
  }), V.derive(() => {
    if (s.val, !e.loads.rawVal) return;
    const l = a(r.rawVal) * s.rawVal;
    n.children.forEach((m) => m.scale.set(l, l, l));
  }), V.derive(() => {
    n.visible = e.loads.val;
  }), n;
}
function ie(t, e, r) {
  const s = new D();
  return V.derive(() => {
    if (!t.nodesIndexes.val) return;
    s.children.forEach((a) => a.dispose()), s.clear();
    const n = 0.05 * t.gridSize.val * 0.6;
    e.val.forEach((a, c) => {
      const l = new G(`${c}`);
      l.position.set(...a), l.updateScale(n * r.rawVal), s.add(l);
    });
  }), V.derive(() => {
    if (r.val, !t.nodesIndexes.rawVal) return;
    const n = 0.05 * t.gridSize.val * 0.6;
    s.children.forEach((a) => a.updateScale(n * r.rawVal));
  }), V.derive(() => {
    s.visible = t.nodesIndexes.val;
  }), s;
}
function ae(t, e, r, s) {
  const n = new D();
  return V.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const a = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((c, l) => {
      const m = new G(`${l}`, void 0, "#001219");
      m.position.set(...re(c.map((y) => r.rawVal[y]))), m.updateScale(a * s.rawVal), n.add(m);
    });
  }), V.derive(() => {
    if (s.val, !e.elementsIndexes.rawVal) return;
    const a = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(a * s.rawVal));
  }), V.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function re(t) {
  const e = t.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function le(t, e) {
  const r = new D(), s = 0.05 * t * 1, n = j(), a = new G("X", "red", "transparent"), c = new G(e ? "Z" : "Y", "green", "transparent"), l = new G(e ? "Y" : "Z", "blue", "transparent"), m = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), y = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), M = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * s, 0, 0), c.position.set(0, 1.3 * s, 0), l.position.set(0, 0, 1.3 * s), a.updateScale(0.4 * s), c.updateScale(0.4 * s), l.updateScale(0.4 * s), m.scale.set(s, s, s), y.scale.set(s, s, s), M.scale.set(s, s, s), r.add(m, y, M, a, c, l), r;
}
function Ft(t, e) {
  const r = new E(...t), n = new E(...e).clone().sub(r), a = n.length(), c = n.dot(new E(1, 0, 0)) / a, l = n.dot(new E(0, 1, 0)) / a, m = n.dot(new E(0, 0, 1)) / a, y = Math.sqrt(c ** 2 + l ** 2);
  let M = new Mt().fromArray([[c, l, m], [-l / y, c / y, 0], [-c * m / y, -l * m / y, y]].flat());
  return m === 1 && (M = new Mt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), m === -1 && (M = new Mt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Xt().setFromMatrix3(M);
}
function gt(t, e) {
  return t == null ? void 0 : t.map((r, s) => (9 * r + e[s]) / 10);
}
function ot(t) {
  const e = t.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), r = t.length;
  return [e[0] / r, e[1] / r, e[2] / r];
}
function ce(t, e, r) {
  const s = ot([e, r]), n = ot([t, r]), a = ot([t, e]), c = new E(...s).sub(new E(...n)).normalize(), l = new E(...r).sub(new E(...a)).normalize(), m = c.clone().cross(l).normalize(), y = m.clone().cross(c).normalize();
  return new Xt().makeBasis(c, y, m);
}
function de(t, e, r, s) {
  const n = new D(), a = new L(), c = new et({ vertexColors: true }), l = [0, 0, 0], m = [1, 0, 0], y = [0, 1, 0], M = [0, 0, 1];
  a.setAttribute("position", new K([...l, ...m, ...l, ...y, ...l, ...M], 3));
  const g = [255, 0, 0], f = [0, 255, 0], S = [0, 0, 255];
  return a.setAttribute("color", new K([...g, ...g, ...f, ...f, ...S, ...S], 3)), V.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((u) => {
      const T = new It(a, c), B = r.rawVal[u[0]], I = r.rawVal[u[1]];
      if (u.length === 2 && (T.position.set(...gt(B, I)), T.rotation.setFromRotationMatrix(Ft(B, I))), u.length === 3) {
        const C = r.rawVal[u[2]];
        T.position.set(...ot([B, I, C])), T.rotation.setFromRotationMatrix(ce(B, I, C));
      }
      const P = 0.05 * e.gridSize.rawVal * 0.75 * s.rawVal;
      T.scale.set(P, P, P), n.add(T);
    }));
  }), V.derive(() => {
    if (s.val, !e.orientations.rawVal) return;
    const T = 0.05 * e.gridSize.val * 0.75 * s.rawVal;
    n.children.forEach((B) => B.scale.set(T, T, T));
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
function he(t, e, r, s) {
  const n = new D();
  function a(v, w) {
    const d = v / 2, o = w / 2, i = new Float32Array([0, -d, -o, 0, d, -o, 0, d, o, 0, -d, -o, 0, d, o, 0, -d, o]), p = new L();
    p.setAttribute("position", new N(i, 3));
    const h = new Float32Array([0, -d, -o, 0, d, -o, 0, d, o, 0, -d, o, 0, -d, -o]), x = new L();
    return x.setAttribute("position", new N(h, 3)), { fill: p, outline: x };
  }
  function c(v, w = 24) {
    const d = v / 2, o = new Float32Array(w * 9);
    for (let x = 0; x < w; x++) {
      const F = x / w * Math.PI * 2, A = (x + 1) / w * Math.PI * 2;
      o[x * 9] = 0, o[x * 9 + 1] = 0, o[x * 9 + 2] = 0, o[x * 9 + 3] = 0, o[x * 9 + 4] = d * Math.cos(F), o[x * 9 + 5] = d * Math.sin(F), o[x * 9 + 6] = 0, o[x * 9 + 7] = d * Math.cos(A), o[x * 9 + 8] = d * Math.sin(A);
    }
    const i = new L();
    i.setAttribute("position", new N(o, 3));
    const p = new Float32Array((w + 1) * 3);
    for (let x = 0; x <= w; x++) {
      const F = x / w * Math.PI * 2;
      p[x * 3] = 0, p[x * 3 + 1] = d * Math.cos(F), p[x * 3 + 2] = d * Math.sin(F);
    }
    const h = new L();
    return h.setAttribute("position", new N(p, 3)), { fill: i, outline: h };
  }
  function l(v, w, d, o) {
    const i = d ?? w * 0.08, p = o ?? v * 0.07, h = v / 2, x = w / 2, F = x - i, A = p / 2, X = [];
    function b(Y, W, H, _) {
      X.push(0, Y, W, 0, H, W, 0, H, _, 0, Y, W, 0, H, _, 0, Y, _);
    }
    b(-h, -x, h, -F), b(-A, -F, A, F), b(-h, F, h, x);
    const z = new L();
    z.setAttribute("position", new N(new Float32Array(X), 3));
    const R = new Float32Array([0, -h, -x, 0, h, -x, 0, h, -F, 0, A, -F, 0, A, F, 0, h, F, 0, h, x, 0, -h, x, 0, -h, F, 0, -A, F, 0, -A, -F, 0, -h, -F, 0, -h, -x]), Z = new L();
    return Z.setAttribute("position", new N(R, 3)), { fill: z, outline: Z };
  }
  function m(v, w, d) {
    const o = v / 2, i = w / 2, p = o - d, h = i - d, x = [];
    function F(z, R, Z, Y) {
      x.push(0, z, R, 0, Z, R, 0, Z, Y, 0, z, R, 0, Z, Y, 0, z, Y);
    }
    F(-o, -i, o, -h), F(-o, h, o, i), F(-o, -h, -p, h), F(p, -h, o, h);
    const A = new L();
    A.setAttribute("position", new N(new Float32Array(x), 3));
    const X = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -p, -h, 0, p, -h, 0, p, -h, 0, p, h, 0, p, h, 0, -p, h, 0, -p, h, 0, -p, -h]), b = new L();
    return b.setAttribute("position", new N(X, 3)), { fill: A, outline: b };
  }
  function y(v, w, d) {
    const o = v / 2, i = w / 2, p = o - d, h = i - d, x = new L(), F = new Float32Array([0, -p, -h, 0, p, -h, 0, p, h, 0, -p, -h, 0, p, h, 0, -p, h]);
    x.setAttribute("position", new N(F, 3));
    const A = [];
    function X(Z, Y, W, H) {
      A.push(0, Z, Y, 0, W, Y, 0, W, H, 0, Z, Y, 0, W, H, 0, Z, H);
    }
    X(-o, -i, o, -h), X(-o, h, o, i), X(-o, -h, -p, h), X(p, -h, o, h);
    const b = new L();
    b.setAttribute("position", new N(new Float32Array(A), 3));
    const z = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -p, -h, 0, p, -h, 0, p, -h, 0, p, h, 0, p, h, 0, -p, h, 0, -p, h, 0, -p, -h]), R = new L();
    return R.setAttribute("position", new N(z, 3)), { concFill: x, steelFillGeom: b, outline: R };
  }
  function M(v, w, d) {
    const o = [], i = [[0, -v / 2, -w / 2], [0, -v / 2 + d, -w / 2], [0, -v / 2 + d, w / 2 - d], [0, v / 2, w / 2 - d], [0, v / 2, w / 2], [0, -v / 2, w / 2]], p = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of p) o.push(...i[A]);
    const h = new L();
    h.setAttribute("position", new N(new Float32Array(o), 3));
    const x = [];
    for (let A = 0; A < i.length; A++) {
      const X = (A + 1) % i.length;
      x.push(...i[A], ...i[X]);
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(x), 3)), { fill: h, outline: F };
  }
  function g(v, w, d, o) {
    const i = o / 2, p = [], h = [[0, -v - i, -w / 2], [0, -d - i, -w / 2], [0, -d - i, w / 2 - d], [0, -i, w / 2 - d], [0, -i, w / 2], [0, -v - i, w / 2]], x = [[0, i, -w / 2], [0, i + d, -w / 2], [0, i + d, w / 2 - d], [0, v + i, w / 2 - d], [0, v + i, w / 2], [0, i, w / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
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
  function f(v, w, d, o) {
    const i = w / 2, p = v, h = [[0, -p, -i], [0, -p, -i + d], [0, -o, -i + d], [0, -o, i - d], [0, -p, i - d], [0, -p, i], [0, 0, i], [0, 0, -i]], x = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
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
  function S(v, w, d, o, i) {
    const p = w / 2, h = i / 2, x = [], F = [[0, -v, -p], [0, -v, -p + d], [0, -h - o, -p + d], [0, -h - o, p - d], [0, -v, p - d], [0, -v, p], [0, -h, p], [0, -h, -p]], A = F.map((Z) => [Z[0], -Z[1], Z[2]]), X = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
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
  function u(v, w, d, o) {
    const i = v / 2, p = w / 2, h = o / 2, x = [[0, -h, -p], [0, h, -p], [0, h, p - d], [0, i, p - d], [0, i, p], [0, -i, p], [0, -i, p - d], [0, -h, p - d]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], A = [];
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
  function T(v, w, d = 24) {
    const o = v / 2, i = o - w, p = [];
    for (let A = 0; A < d; A++) {
      const X = A / d * Math.PI * 2, b = (A + 1) / d * Math.PI * 2, z = Math.cos(X), R = Math.sin(X), Z = Math.cos(b), Y = Math.sin(b);
      p.push(0, o * z, o * R, 0, o * Z, o * Y, 0, i * Z, i * Y), p.push(0, o * z, o * R, 0, i * Z, i * Y, 0, i * z, i * R);
    }
    const h = new L();
    h.setAttribute("position", new N(new Float32Array(p), 3));
    const x = [];
    for (let A = 0; A < d; A++) {
      const X = A / d * Math.PI * 2, b = (A + 1) / d * Math.PI * 2;
      x.push(0, o * Math.cos(X), o * Math.sin(X), 0, o * Math.cos(b), o * Math.sin(b)), x.push(0, i * Math.cos(X), i * Math.sin(X), 0, i * Math.cos(b), i * Math.sin(b));
    }
    const F = new L();
    return F.setAttribute("position", new N(new Float32Array(x), 3)), { fill: h, outline: F };
  }
  const B = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), I = new et({ color: 52479 }), k = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), P = new et({ color: 16750848 });
  function C(v, w) {
    const d = Math.abs(w[0] - v[0]), o = Math.abs(w[1] - v[1]), i = Math.abs(w[2] - v[2]);
    return i > d && i > o || o > d && o > i;
  }
  return V.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const v = e.secColumns.rawVal, w = e.secBeams.rawVal;
    if (!v && !w) {
      n.children.forEach((h) => {
        h instanceof G && h.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((h) => {
      h instanceof G && h.dispose();
    }), n.clear();
    const d = (_a = t.elements) == null ? void 0 : _a.val, o = (_b = t.elementInputs) == null ? void 0 : _b.val;
    if (!d || !o) return;
    const i = o.sectionShapes, p = e.secFloor.rawVal;
    d.forEach((h, x) => {
      if (h.length !== 2) return;
      const F = r.rawVal[h[0]], A = r.rawVal[h[1]];
      if (!F || !A) return;
      const X = C(F, A);
      if (X && !v || !X && !w) return;
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
        const Y = y(b.b, b.h, b.tw ?? b.b * 0.05), W = new U(Y.concFill, B);
        W.position.set(...z), W.rotation.setFromRotationMatrix(R), n.add(W);
        const H = new U(Y.steelFillGeom, k);
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
            Y = c(b.d), W = B, H = I;
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
            Y = f(b.b, b.h, b.tf ?? b.t ?? 3e-3, b.tw ?? b.t ?? 3e-3), W = k, H = P;
            break;
          case "2C":
            Y = S(b.b, b.h, b.tf ?? 5e-3, b.tw ?? 5e-3, b.dis ?? 0.01), W = k, H = P;
            break;
          case "T":
            Y = u(b.b, b.h, b.tf ?? 0.01, b.tw ?? 6e-3), W = k, H = P;
            break;
          case "pipe":
            Y = T(b.d, b.tw ?? b.d * 0.05), W = k, H = P;
            break;
          default:
            return;
        }
        const _ = new U(Y.fill, W);
        _.position.set(...z), _.rotation.setFromRotationMatrix(R), n.add(_);
        const q = new nt(Y.outline, H);
        q.position.set(...z), q.rotation.setFromRotationMatrix(R), n.add(q);
      }
      const Z = ue(b);
      if (Z) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(b.type) ? "#ff9900" : "#00ccff", H = new G(Z, W, "transparent");
        H.position.set(z[0], z[1], z[2]);
        const _ = 0.05 * e.gridSize.rawVal * 0.5;
        H.updateScale(_ * ((s == null ? void 0 : s.rawVal) ?? 1)), n.add(H);
      }
    });
  }), s && V.derive(() => {
    if (s.val, !e.sections.rawVal) return;
    const v = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((w) => {
      w instanceof G && w.updateScale(v * s.rawVal);
    });
  }), V.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends D {
  constructor(e, r, s, n, a, c, l) {
    super();
    const m = new ut().moveTo(0, 0).lineTo(0, c[1]).lineTo(s, c[1]).lineTo(s, 0).lineTo(0, 0), y = m.getPoints(), M = new L().setFromPoints(y);
    this.lines = new nt(M, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new ht(m), f = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new U(g, f), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new G(`${a[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = ot([e, r]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Tt extends D {
  constructor(e, r, s, n, a, c, l) {
    super();
    const m = a[0] * s / (a[0] + a[1]), y = a[0] * a[1] > 0;
    if (this.text = new G(`${a[0].toFixed(4)}`), this.text2 = new G(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = gt(e, r), this.text2Position = gt(r, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), y) {
      const M = new ut().moveTo(0, 0).lineTo(0, c[0]).lineTo(m, 0).lineTo(0, 0), g = new ut().moveTo(m, 0).lineTo(s, -c[1]).lineTo(s, 0).lineTo(m, 0), f = M.getPoints(), S = g.getPoints(), u = new L().setFromPoints(f), T = new L().setFromPoints(S), B = new et({ color: j().resultOutline });
      this.lines = new nt(u, B), this.lines2 = new nt(T, B), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), l && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const I = new ht(M), k = new ht(g), P = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), C = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new U(I, P), this.mesh2 = new U(k, C), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), l && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const M = new ut().moveTo(0, 0).lineTo(0, c[0]).lineTo(s, -c[1]).lineTo(s, 0).lineTo(0, 0), g = M.getPoints(), f = new L().setFromPoints(g);
      this.lines = new nt(f, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), l && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const S = new ht(M), u = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new U(S, u), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), l && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function pe(t, e, r, s) {
  const n = new D(), a = { normals: lt, shearsY: lt, shearsZ: lt, torsions: lt, bendingsY: Tt, bendingsZ: Tt };
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, r.val, e.frameResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const c = Et[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((l, m) => {
      var _a2, _b2;
      const y = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[m]) ?? [0, 1], M = r.rawVal[y[0]], g = r.rawVal[y[1]], f = new E(...g).distanceTo(new E(...M)), S = me((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), u = l == null ? void 0 : l.map((k) => k / (S === 0 ? 1 : S)), T = Ft(M, g), B = new a[c](M, g, f, T, l ?? [0, 0], u ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), I = 0.05 * e.gridSize.rawVal;
      B.updateScale(I * s.rawVal), n.add(B);
    });
  }), V.derive(() => {
    if (s.val, e.frameResults.rawVal == "none") return;
    const c = 0.05 * e.gridSize.val;
    n.children.forEach((l) => l.updateScale(c * s.rawVal));
  }), V.derive(() => {
    n.visible = e.frameResults.val != "none";
  }), n;
}
function me(t) {
  let e = 0;
  return t == null ? void 0 : t.forEach((r) => {
    const s = Math.max(...r ?? [0, 0]);
    s > e && (e = s);
  }), e;
}
class fe extends D {
  constructor(e, r, s) {
    super();
    const n = r === Vt.reactions;
    s[0] && (this.xText1 = new G(`${n ? "Fx" : "Dx"}: ` + s[0].toFixed(4))), s[3] && (this.xText2 = new G(`${n ? "Mx" : "Rx"}: ` + s[3].toFixed(4))), s[1] && (this.yText1 = new G(`${n ? "Fy" : "Dy"}: ` + s[1].toFixed(4))), s[4] && (this.yText2 = new G(`${n ? "My" : "Ry"}: ` + s[4].toFixed(4))), s[2] && (this.zText1 = new G(`${n ? "Fz" : "Dz"}: ` + s[2].toFixed(4))), s[5] && (this.zText2 = new G(`${n ? "Mz" : "Rz"}: ` + s[5].toFixed(4))), (s[0] || s[3]) && (this.xArrow = new tt(new E(1, 0, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[1] || s[4]) && (this.yArrow = new tt(new E(0, 1, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[2] || s[5]) && (this.zArrow = new tt(new E(0, 0, 1), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...e), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function we(t, e, r, s) {
  const n = new D();
  return V.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((l) => l.dispose()), n.clear();
    const a = Vt[e.nodeResults.rawVal], c = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((l, m) => {
      const y = new fe(r.rawVal[m], a, l ?? [0, 0, 0, 0, 0, 0]);
      y.updateScale(c * s.rawVal), n.add(y);
    });
  }), V.derive(() => {
    if (s.val, e.nodeResults.rawVal == "none") return;
    const a = 0.05 * e.gridSize.val;
    n.children.forEach((c) => c.updateScale(a * s.rawVal));
  }), V.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function ve({ drawingObj: t, gridObj: e, scene: r, camera: s, controls: n, gridSize: a, derivedDisplayScale: c, rendererElm: l, viewerRender: m }) {
  const y = new kt(), M = new Zt(), g = new U(new Wt(a, a), new Q({ side: O })), f = new ct(new L(), new dt()), S = new ct(new L(), new dt({ color: "gray" })), u = new ct(new L(), new dt({ color: "orange", size: 0.8 }));
  r.add(u), f.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), f.geometry.computeBoundingSphere(), f.frustumCulled = false, S.frustumCulled = false, r.add(S), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), V.derive(() => {
    t.gridTarget && (xe(e, { position: new E(...t.gridTarget.val.position), quaternion: new Ht().setFromEuler(new St(...t.gridTarget.val.rotation)) }, m), g.position.set(...t.gridTarget.val.position), g.quaternion.setFromEuler(new St(...t.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), V.derive(() => {
    f.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), f.geometry.computeBoundingSphere();
  }), V.derive(() => {
    const P = 0.05 * a * 0.5 * c.val;
    S.material.size = P, y.params.Points.threshold = 0.4 * P;
  }), V.derive(() => {
    var _a;
    const P = t.points.val ?? [], v = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], w = [];
    for (const o of v) {
      const [i, p, h] = P[o];
      w.push(i, p, h);
    }
    const d = new L();
    d.setAttribute("position", new K(w, 3)), u.geometry.dispose(), u.geometry = d;
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
    B = 0, M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, s);
    const C = y.intersectObject(g);
    if (C.length) {
      let v = C[0].point;
      (P.ctrlKey || P.metaKey) && (v = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), t.points.val = [...t.points.rawVal, v.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), l.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), l.addEventListener("pointermove", (P) => {
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, s);
    const C = y.intersectObject(g);
    if (S.geometry.deleteAttribute("position"), C.length) {
      let v = C[0].point;
      (P.ctrlKey || P.metaKey) && (v = new E(Math.round(C[0].point.x), Math.round(C[0].point.y), Math.round(C[0].point.z))), S.geometry.setAttribute("position", new K(v.toArray(), 3));
    }
    m();
  }), l.addEventListener("pointermove", (P) => {
    var _a;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, s);
    let C = false;
    const v = y.intersectObject(f), w = y.intersectObject(g);
    if (v.length && w.length) {
      const d = new E(...t.points.rawVal[v[0].index]), o = new E(...w[0].point), i = d.sub(o), p = (_a = w[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(g.matrixWorld), Math.abs(i.dot(p)) < 1e-4 && (C = true);
    }
    S.visible = !C;
  });
  let I = false, k;
  l.addEventListener("pointermove", (P) => {
    var _a;
    if (!B) return;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, s);
    let C = false;
    const v = y.intersectObject(f), w = y.intersectObject(g);
    if (v.length && w.length) {
      const o = new E(...t.points.rawVal[v[0].index]), i = new E(...w[0].point), p = o.sub(i), h = (_a = w[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(g.matrixWorld), Math.abs(p.dot(h)) < 1e-4 && (C = true);
    }
    if (C && B < 5 && (I = true, n.enabled = false, k = v[0].index), !I || B % 2 !== 0) return;
    const d = [...t.points.rawVal];
    if (k !== void 0) {
      let o = w[0].point;
      (P.ctrlKey || P.metaKey) && (o = new E(Math.round(o.x), Math.round(o.y), Math.round(o.z))), d[k] = o.toArray();
    }
    t.points.val = d;
  }), l.addEventListener("pointerup", () => {
    n.enabled = true, I = false;
  }), l.addEventListener("contextmenu", (P) => {
    var _a;
    M.x = P.clientX / window.innerWidth * 2 - 1, M.y = -(P.clientY / window.innerHeight) * 2 + 1, y.setFromCamera(M, s);
    let C = false;
    const v = y.intersectObject(f), w = y.intersectObject(g);
    if (v.length && w.length) {
      const i = new E(...t.points.rawVal[v[0].index]), p = new E(...w[0].point), h = i.sub(p), x = (_a = w[0].face) == null ? void 0 : _a.normal;
      x.transformDirection(g.matrixWorld), Math.abs(h.dot(x)) < 1e-4 && (C = true);
    }
    if (!C) return;
    const d = [...t.points.rawVal];
    if (d.splice(v[0].index, 1), t.points.val = d, !t.polylines) return;
    const o = t.polylines.rawVal.map((i) => i.filter((p) => p !== v[0].index)).map((i) => i.map((p) => p > v[0].index ? p - 1 : p)).filter((i) => i.length);
    o.push([]), t.polylines.val = o;
  });
}
function xe(t, e, r) {
  const a = Math.round(14.999999999999998), c = { position: t.position.clone(), quaternion: t.quaternion.clone() }, l = setInterval(y, 1e3 / 30);
  let m = 0;
  function y() {
    m++;
    const M = m / a;
    t.position.lerpVectors(c.position, e.position, M), t.quaternion.slerpQuaternions(c.quaternion, e.quaternion, M), r && r(), m == a && clearInterval(l);
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
    const s = 1 / this.n, n = new $(), a = new $();
    this.lut.length = 0, this.lut.push(new $(this.map[0][1]));
    for (let c = 1; c < r; c++) {
      const l = c * s;
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
    const r = e.getContext("2d", { alpha: false }), s = r.getImageData(0, 0, 1, this.n), n = s.data;
    let a = 0;
    const c = 1 / this.n, l = new $(), m = new $(), y = new $();
    for (let M = 1; M >= 0; M -= c) for (let g = this.map.length - 1; g >= 0; g--) if (M < this.map[g][0] && M >= this.map[g - 1][0]) {
      const f = this.map[g - 1][0], S = this.map[g][0];
      l.setHex(this.map[g - 1][1], rt), m.setHex(this.map[g][1], rt), y.lerpColors(l, m, (M - f) / (S - f)), n[a * 4] = Math.round(y.r * 255), n[a * 4 + 1] = Math.round(y.g * 255), n[a * 4 + 2] = Math.round(y.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return r.putImageData(s, 0, 0), e;
  }
}
const yt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function Me(t, e, r) {
  const s = new Bt(), n = new $(), a = new U(new L(), new Q({ side: O, vertexColors: true }));
  return s.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, V.derive(() => {
    a.geometry.setAttribute("position", new K(t.val.flat(), 3));
    const c = [];
    for (const u of e.val) u.length === 3 ? c.push(u[0], u[1], u[2]) : u.length === 4 && (c.push(u[0], u[1], u[2]), c.push(u[0], u[2], u[3]));
    a.geometry.setIndex(new Nt(c, 1)), a.geometry.setAttribute("color", new K(t.val.map(() => [0, 0, 0]).flat(), 3));
    const l = r.val.filter((u) => Number.isFinite(u));
    let m, y;
    const M = Ct.val;
    if (M ? (y = M[0], m = M[1]) : (m = l.length ? Math.max(...l) : 1, y = l.length ? Math.min(...l) : 0, y >= 0 && m > 0 && (y = 0)), m === y) {
      const u = Math.max(Math.abs(m) * 1e-6, 1e-9);
      m += u, y -= u;
    }
    const g = M && M[0] > M[1], f = Math.min(y, m), S = Math.max(y, m);
    s.setMin(f), s.setMax(S);
    for (let u = 0; u < r.val.length; u++) {
      const T = r.val[u];
      if (!Number.isFinite(T)) {
        a.geometry.attributes.color.setXYZ(u, 0.3, 0.3, 0.3);
        continue;
      }
      const B = g ? S + f - T : T, I = s.getColor(B) ?? new $(0, 0, 0);
      n.copy(I).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(u, n.r, n.g, n.b);
    }
  }), a;
}
function ye(t, e, r, s) {
  const n = Me(r, t.elements, s);
  return V.derive(() => {
    n.visible = e.shellResults.val != "none";
  }), n;
}
const be = 6, bt = 10, ge = 0.012;
function Fe(t) {
  return t.startsWith("contour:") ? t.slice(8) : null;
}
function Ve(t, e, r, s) {
  if (!r && !s) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(t) && r) {
    const a = r[t];
    if (a && a.has(e)) return a.get(e);
  }
  return null;
}
function Ce(t, e, r, s) {
  const n = new D(), a = new Bt();
  a.setColorMap("rainbow");
  const c = new $(), l = V.state([]);
  return V.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const m = r.val, y = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], M = Fe(e.frameResults.val);
    if (n.children.forEach((x) => {
      x.geometry && x.geometry.dispose(), x.material && x.material.dispose();
    }), n.clear(), !M || y.length === 0 || m.length === 0) {
      l.val = [];
      return;
    }
    const g = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, f = (_c = t.deformOutputs) == null ? void 0 : _c.val, S = [], u = [];
    for (let x = 0; x < y.length; x++) {
      if (y[x].length !== 2) continue;
      const A = Ve(M, x, g, f);
      A && (S.push(A[0], A[1]), u.push({ idx: x, vals: A }));
    }
    if (S.length === 0) {
      l.val = [];
      return;
    }
    const T = Math.min(...S), B = Math.max(...S);
    a.setMin(T), a.setMax(B), l.val = S;
    const I = [1 / 0, 1 / 0, 1 / 0], k = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of m) for (let F = 0; F < 3; F++) I[F] = Math.min(I[F], x[F]), k[F] = Math.max(k[F], x[F]);
    const C = Math.max(k[0] - I[0], k[1] - I[1], k[2] - I[2], 1) * ge, v = [], w = [], d = [];
    let o = 0;
    for (const { idx: x, vals: F } of u) {
      const A = y[x], X = m[A[0]], b = m[A[1]];
      if (!X || !b) continue;
      const z = new E(b[0] - X[0], b[1] - X[1], b[2] - X[2]), R = z.length();
      if (R < 1e-10) continue;
      z.normalize();
      const Z = Math.abs(z.y) < 0.99 ? new E(0, 1, 0) : new E(1, 0, 0), Y = new E().crossVectors(z, Z).normalize(), W = new E().crossVectors(z, Y).normalize(), H = bt + 1, _ = be;
      for (let q = 0; q < H; q++) {
        const J = q / bt, st = X[0] + z.x * R * J, it = X[1] + z.y * R * J, mt = X[2] + z.z * R * J, ft = F[0] + (F[1] - F[0]) * J, at = a.getColor(ft) ?? new $(0, 0, 0);
        c.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const At = wt / _ * Math.PI * 2, vt = Math.cos(At), xt = Math.sin(At);
          v.push(st + (Y.x * vt + W.x * xt) * C, it + (Y.y * vt + W.y * xt) * C, mt + (Y.z * vt + W.z * xt) * C), w.push(c.r, c.g, c.b);
        }
      }
      for (let q = 0; q < bt; q++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = o + q * _ + J, mt = o + q * _ + st, ft = o + (q + 1) * _ + J, at = o + (q + 1) * _ + st;
        d.push(it, mt, at), d.push(it, at, ft);
      }
      o += H * _;
    }
    if (v.length === 0) return;
    const i = new L();
    i.setAttribute("position", new K(v, 3)), i.setAttribute("color", new K(w, 3)), i.setIndex(d), i.computeVertexNormals();
    const p = new Q({ vertexColors: true, side: O }), h = new U(i, p);
    h.frustumCulled = false, n.add(h);
  }), n.__colorMapValues = l, n;
}
function Yt(t, e = 8) {
  const r = document.createElement("div");
  r.id = "legend";
  const s = Array.from({ length: e + 1 }, (l, m) => m / e).reverse();
  let n, a;
  s.forEach((l, m) => {
    n = document.createElement("div"), n.id = `marker-${m}`, n.className = "marker", n.style.marginTop = m == 0 ? "0px" : `calc(${50 / e}vh - 1px)`, a = document.createElement("p"), a.id = `marker-text-${m}`, n.append(a), r.append(n);
  });
  const c = [];
  return r.querySelectorAll("p").forEach((l) => c.push(l)), setTimeout(() => {
    V.derive(() => {
      s.forEach((l, m) => {
        const y = c[m];
        y && (y.innerText = Ae(t.val, l).toString());
      });
    });
  }), r;
}
function Ae(t, e) {
  const r = Ct.val;
  if (r) return (r[0] + e * (r[1] - r[0])).toPrecision(3);
  const s = t.filter((c) => Number.isFinite(c));
  if (s.length === 0) return "0";
  let n = Math.min(...s);
  const a = Math.max(...s);
  return n >= 0 && a > 0 && (n = 0), (n + e * (a - n)).toPrecision(3);
}
function Ie({ mesh: t, settingsObj: e, drawingObj: r, objects3D: s, solids: n }) {
  Qt.DEFAULT_UP = new E(0, 0, 1);
  const a = document.createElement("div"), c = new $t(), l = new Gt(45, 1, 0.1, 2 * 1e6), m = new qt(-10, 10, 10, -10, -1e3, 2e6);
  let y = l;
  const M = new Kt({ antialias: true });
  M.localClippingEnabled = true;
  const g = new Dt(l, M.domElement), f = jt(e), S = V.derive(() => f.displayScale.val === 0 ? 1 : f.displayScale.val > 0 ? f.displayScale.val : -1 / f.displayScale.val), u = Se(t, f);
  let T = Pt(f.gridSize.rawVal);
  a.appendChild(Ot(f, t, n)), a.setAttribute("id", "viewer"), a.appendChild(M.domElement), M.setPixelRatio(window.devicePixelRatio);
  const B = j();
  M.setClearColor(B.background, 1);
  const I = f.gridSize.rawVal, k = I * 0.5 + I * 0.5 / Math.tan(45 * 0.5);
  l.position.set(0.5 * I, 0.8 * -k, 0.5 * I), g.target.set(0.5 * I, 0.5 * I, 0), g.minDistance = 1, g.maxDistance = k * 2.5, g.zoomSpeed = 10, g.update(), c.add(T, le(f.gridSize.rawVal, f.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const o of d) {
      const i = (_a = o.target) == null ? void 0 : _a.clientWidth, p = (_b = o.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || p === 0) continue;
      l.aspect = i / p, l.updateProjectionMatrix();
      const h = i / p, x = m.top;
      m.left = -x * h, m.right = x * h, m.updateProjectionMatrix(), M.setSize(i, p), C();
    }
  }).observe(a), g.addEventListener("change", C), V.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, f.displayScale.val, f.nodes.val, f.elements.val, f.elemColumns.val, f.elemBeams.val, f.nodesIndexes.val, f.elementsIndexes.val, f.orientations.val, f.sections.val, f.secColumns.val, f.secBeams.val, f.secFloor.val, f.supports.val, f.loads.val, f.deformedShape.val, f.nodeResults.val, f.frameResults.val, f.shellResults.val, setTimeout(C);
  });
  function C() {
    M.render(c, y);
  }
  function v(d) {
    y = d, g.object = d, g.update(), C();
  }
  if (t) {
    c.add(te(f, u, S), ee(t, f, u), ie(f, u, S), ae(t, f, u, S), oe(t, f, u, S), se(t, f, u, S), de(t, f, u, S), he(t, f, u, S), we(t, f, u, S), pe(t, f, u, S));
    const d = ze(t, f), o = ye(t, f, u, d), i = Yt(d);
    c.add(o), a.appendChild(i);
    const p = Ce(t, f, u);
    c.add(p);
    const h = p.__colorMapValues, x = Yt(h);
    x.id = "frame-legend", a.appendChild(x), V.derive(() => {
      const F = f.shellResults.val != "none", A = f.frameResults.val.startsWith("contour:");
      i.hidden = !F, o.visible = F, x.hidden = !A;
    });
  }
  if (n) {
    const d = new Ut(16777215, 0.5);
    c.add(d);
    const o = new zt(16777215, 0.5);
    o.position.set(30, 25, -10), o.shadow.mapSize.width = 1024, o.shadow.mapSize.height = 1024, c.add(o);
    const i = 10;
    o.shadow.camera.left = -10, o.shadow.camera.right = i, o.shadow.camera.top = i, o.shadow.camera.bottom = -10, o.shadow.camera.far = 1e3;
    const p = new zt(16777215, 0.5);
    p.color.setHSL(11, 43, 96), p.position.set(-10, 0, 30), c.add(p), V.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), C());
    }), V.derive(() => {
      n.rawVal.forEach((h) => h.visible = f.solids.val), C();
    });
  }
  s && (V.derive(() => {
    (s == null ? void 0 : s.val.length) && (c.remove(...s.oldVal), f.custom3D.val && c.add(...s.rawVal), C());
  }), V.derive(() => {
    const d = f.custom3D.val, o = s.rawVal;
    (o == null ? void 0 : o.length) && (d ? c.add(...o) : c.remove(...o), C());
  })), r && ve({ drawingObj: r, gridObj: T, scene: c, camera: l, controls: g, gridSize: I, derivedDisplayScale: S, rendererElm: M.domElement, viewerRender: C }), pt((d, o) => {
    M.setClearColor(o.background, 1), c.remove(T), T.geometry.dispose(), T.material.dispose(), T = Pt(f.gridSize.rawVal), c.add(T), a.style.setProperty("--awatif-legend-color", o.legendMarker), C();
  });
  const w = { scene: c, perspCamera: l, orthoCamera: m, get camera() {
    return y;
  }, controls: g, renderer: M, rendererElm: M.domElement, render: C, setActiveCamera: v, settings: f };
  return a.__ctx = w, a;
}
function Se(t, e) {
  return V.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const r = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], s = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!s || r.length === 0) return r;
    let n = 1 / 0, a = 1 / 0, c = 1 / 0, l = -1 / 0, m = -1 / 0, y = -1 / 0;
    for (const u of r) u[0] < n && (n = u[0]), u[0] > l && (l = u[0]), u[1] < a && (a = u[1]), u[1] > m && (m = u[1]), u[2] < c && (c = u[2]), u[2] > y && (y = u[2]);
    const M = Math.sqrt((l - n) ** 2 + (m - a) ** 2 + (y - c) ** 2);
    let g = 0;
    s.forEach((u) => {
      const T = Math.sqrt(u[0] ** 2 + u[1] ** 2 + u[2] ** 2);
      T > g && (g = T);
    });
    const S = g > 1e-30 && M > 1e-30 ? 0.07 * M / g : 1;
    return r.map((u, T) => {
      var _a2;
      const B = ((_a2 = s.get(T)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return u.map((I, k) => I + B[k] * S);
    });
  });
}
const Ct = V.state(null);
function ze(t, e) {
  const r = V.state([]);
  let s;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(s || (s = {})), V.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), u = (C, v) => {
      C == null ? void 0 : C.forEach((w, d) => {
        const o = t.elements.val[d];
        if (o) for (let i = 0; i < o.length; i++) v.set(o[i], [w[i] ?? w[0]]);
      });
    };
    u((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), u((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), u((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, c), u((_h = (_g = t.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, l), u((_j = (_i = t.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, m), u((_l = (_k = t.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, y), u((_n = (_m = t.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, M), u((_p = (_o = t.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), u((_r = (_q = t.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, f), u((_t2 = (_s = t.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, S);
    const T = (_v = (_u = t.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, B = e.shellResults.val, I = T == null ? void 0 : T[B];
    Ct.val = Array.isArray(I) && I.length === 2 ? [I[0], I[1]] : null;
    const k = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [c, 0], membraneXX: [l, 0], membraneYY: [m, 0], membraneXY: [y, 0], tranverseShearX: [M, 0], tranverseShearY: [g, 0], vonMises: [f, 0], pressure: [S, 0], displacementX: [(_x = (_w = t.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = t.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = t.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, P = [];
    t.nodes.val.forEach((C, v) => {
      const w = k[e.shellResults.val];
      if (!w || !w[0] || typeof w[0].has != "function") return;
      if (!w[0].has(v)) {
        P.push(Number.NaN);
        return;
      }
      const d = w[0].get(v);
      P.push(d ? d[w[1]] ?? 0 : 0);
    }), r.val = P;
  }), r;
}
export {
  Me as a,
  Yt as b,
  Ie as g
};
