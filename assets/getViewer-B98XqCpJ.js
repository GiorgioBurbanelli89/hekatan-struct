import { H as ce, B as L, I as de, F as q, G as K, h as Ie, a as te, j as Q, D as O, e as U, C as $, l as Le, i as ke, V as E, A as ee, z as G, J as be, d as Ee, L as ne, c as H, r as ue, K as he, R as Ze, f as We, N as Ne, U as _e, X as ze, Y as re, Z as He, _ as $e, t as Ge, u as De, v as qe, W as Ke, w as Ue, x as Qe, y as Pe, O as Je } from "./Text-CBH-tcJP.js";
import { v as C, P as Oe, g as j, o as pe } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function je(e, t, l) {
  const s = document.createElement("div"), n = new Oe({ title: "Settings", expanded: true, container: s });
  if (s.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.deformScale, "val", { label: "Deform scale", min: 0.1, max: 1e3, step: 0.1 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const a = n.addFolder({ title: "Analysis Inputs" });
    a.addBinding(e.supports, "val", { label: "Supports" }), a.addBinding(e.loads, "val", { label: "Loads" }), a.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), a.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const a = n.addFolder({ title: "Analysis Outputs" });
    a.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), a.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), a.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), a.addBinding(e.deformedShape, "val", { label: "Deformed shape" });
  }
  return l && n.addBinding(e.solids, "val", { label: "Solids" }), s;
}
function et(e) {
  return { gridSize: C.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: C.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: C.state((e == null ? void 0 : e.nodes) ?? true), elements: C.state((e == null ? void 0 : e.elements) ?? true), elemColumns: C.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: C.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: C.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: C.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: C.state((e == null ? void 0 : e.orientations) ?? false), sections: C.state((e == null ? void 0 : e.sections) ?? true), secColumns: C.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: C.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: C.state((e == null ? void 0 : e.secFloor) ?? -1), supports: C.state((e == null ? void 0 : e.supports) ?? true), loads: C.state((e == null ? void 0 : e.loads) ?? false), deformedShape: C.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: C.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: C.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: C.state((e == null ? void 0 : e.shellResults) ?? "none"), flipAxes: C.state((e == null ? void 0 : e.flipAxes) ?? false), solids: C.state((e == null ? void 0 : e.solids) ?? true), custom3D: C.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: C.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: C.state((e == null ? void 0 : e.deformScale) ?? 1) };
}
function tt(e, t, l) {
  const s = j(), n = new ce(new L(), new de({ color: s.nodePoint }));
  return pe((a, h) => {
    n.material.color.setHex(h.nodePoint);
  }), n.frustumCulled = false, C.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new q(t.val.flat(), 3));
  }), C.derive(() => {
    l.val;
    const a = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = a * l.rawVal);
  }), C.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function nt(e, t, l) {
  const s = j(), n = new K(), a = new Ie(new L(), new te({ color: s.elementLine }));
  pe((m, z) => {
    a.material.color.setHex(z.elementLine);
  }), a.frustumCulled = false, n.add(a);
  const h = new Q({ vertexColors: true, transparent: true, opacity: s.shellOpacity, side: O, depthWrite: false }), d = new U(new L(), h);
  d.frustumCulled = false, n.add(d);
  let p = new $(s.shellWall), x = new $(s.shellSlab), v = new $(s.shellTri);
  pe((m, z) => {
    p = new $(z.shellWall), x = new $(z.shellSlab), v = new $(z.shellTri), h.opacity = z.shellOpacity, h.needsUpdate = true;
  });
  function g(m, z) {
    const w = Math.abs(z[0] - m[0]), T = Math.abs(z[1] - m[1]), R = Math.abs(z[2] - m[2]);
    return R > w && R > T || T > w && T > R;
  }
  return C.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const m = t.elemColumns.rawVal, z = t.elemBeams.rawVal, w = l.val, T = ((_a = e.elements) == null ? void 0 : _a.val) || [], R = T.filter((S) => {
      if (S.length !== 2) return true;
      const b = w[S[0]], M = w[S[1]];
      if (!b || !M) return true;
      const c = g(b, M);
      return !(c && !m || !c && !z);
    }).map((S) => ot(S).map((b) => [...w[b[0]], ...w[b[1]]]).flat()).flat();
    a.geometry.setAttribute("position", new q(R, 3));
    const X = [], Z = [];
    function A(S, b, M, c) {
      const o = [b[0] - S[0], b[1] - S[1], b[2] - S[2]], i = [c[0] - S[0], c[1] - S[1], c[2] - S[2]], r = o[1] * i[2] - o[2] * i[1], u = o[2] * i[0] - o[0] * i[2], f = o[0] * i[1] - o[1] * i[0], F = Math.sqrt(r * r + u * u + f * f);
      return F < 1e-12 ? false : Math.abs(f / F) < 0.5;
    }
    for (const S of T) if (S.length === 3) {
      const [b, M, c] = S;
      if (w[b] && w[M] && w[c]) {
        X.push(...w[b], ...w[M], ...w[c]);
        for (let o = 0; o < 3; o++) Z.push(v.r, v.g, v.b);
      }
    } else if (S.length === 4) {
      const [b, M, c, o] = S;
      if (w[b] && w[M] && w[c] && w[o]) {
        const i = A(w[b], w[M], w[c], w[o]) ? p : x;
        X.push(...w[b], ...w[M], ...w[c]), X.push(...w[b], ...w[c], ...w[o]);
        for (let r = 0; r < 6; r++) Z.push(i.r, i.g, i.b);
      }
    }
    X.length > 0 ? (d.geometry.dispose(), d.geometry = new L(), d.geometry.setAttribute("position", new q(X, 3)), d.geometry.setAttribute("color", new q(Z, 3)), d.geometry.computeVertexNormals(), d.visible = true) : d.visible = false;
  }), C.derive(() => {
    n.visible = t.elements.val;
  }), n;
}
function ot(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let l = 0; l < e.length; l++) t.push([e[l], e[(l + 1) % e.length]]);
  return t;
}
function Ye(e) {
  const t = j(), l = new Le(e, 20, t.grid, t.grid);
  return l.position.set(0.5 * e, 0.5 * e, 0), l.rotateX(Math.PI / 2), l;
}
function st(e, t, l, s) {
  const n = new K(), a = new ke(0.5, 0.5, 0.5), h = new Q({ color: 10166822 });
  return C.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const d = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((p, x) => {
      const v = l.val[x];
      if (!v) return;
      const g = new U(a, h);
      g.position.set(...v);
      const m = d * s.rawVal;
      g.scale.set(m, m, m), n.add(g);
    });
  }), C.derive(() => {
    if (s.val, !t.supports.rawVal) return;
    const p = 0.05 * t.gridSize.val * 0.6 * s.rawVal;
    n.children.forEach((x) => x.scale.set(p, p, p));
  }), C.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function it(e, t, l, s) {
  const n = new K();
  n.name = "loadsGroup";
  function a(h) {
    if (h.length < 2) return 0.12 * t.gridSize.rawVal;
    const d = [1 / 0, 1 / 0, 1 / 0], p = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of h) for (let g = 0; g < 3; g++) d[g] = Math.min(d[g], v[g]), p[g] = Math.max(p[g], v[g]);
    return 0.08 * Math.max(p[0] - d[0], p[1] - d[1], p[2] - d[2], 0.1);
  }
  return C.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((p) => p.dispose()), n.clear();
    const h = l.val, d = a(h);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((p, x) => {
      const v = h[x];
      if (!v) return;
      const g = new E(...p.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const m = new ee(g, new E(...v), 1, 15637248, 0.3, 0.3), z = d * s.rawVal;
      m.scale.set(z, z, z), n.add(m);
    });
  }), C.derive(() => {
    if (s.val, !t.loads.rawVal) return;
    const d = a(l.rawVal) * s.rawVal;
    n.children.forEach((p) => p.scale.set(d, d, d));
  }), C.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function at(e, t, l) {
  const s = new K();
  return C.derive(() => {
    if (!e.nodesIndexes.val) return;
    s.children.forEach((a) => a.dispose()), s.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((a, h) => {
      const d = new G(`${h}`);
      d.position.set(...a), d.updateScale(n * l.rawVal), s.add(d);
    });
  }), C.derive(() => {
    if (l.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    s.children.forEach((a) => a.updateScale(n * l.rawVal));
  }), C.derive(() => {
    s.visible = e.nodesIndexes.val;
  }), s;
}
function rt(e, t, l, s) {
  const n = new K();
  return C.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((h) => h.dispose()), n.clear();
    const a = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((h, d) => {
      const p = new G(`${d}`, void 0, "#001219");
      p.position.set(...lt(h.map((x) => l.rawVal[x]))), p.updateScale(a * s.rawVal), n.add(p);
    });
  }), C.derive(() => {
    if (s.val, !t.elementsIndexes.rawVal) return;
    const a = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((h) => h.updateScale(a * s.rawVal));
  }), C.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function lt(e) {
  const t = e.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), l = e.length;
  return [t[0] / l, t[1] / l, t[2] / l];
}
function ct(e, t) {
  const l = new K(), s = 0.05 * e * 1, n = j(), a = new G("X", "red", "transparent"), h = new G(t ? "Z" : "Y", "green", "transparent"), d = new G(t ? "Y" : "Z", "blue", "transparent"), p = new ee(new E(1, 0, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), x = new ee(new E(0, 1, 0), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), v = new ee(new E(0, 0, 1), new E(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return a.position.set(1.3 * s, 0, 0), h.position.set(0, 1.3 * s, 0), d.position.set(0, 0, 1.3 * s), a.updateScale(0.4 * s), h.updateScale(0.4 * s), d.updateScale(0.4 * s), p.scale.set(s, s, s), x.scale.set(s, s, s), v.scale.set(s, s, s), l.add(p, x, v, a, h, d), l;
}
function Ce(e, t) {
  const l = new E(...e), n = new E(...t).clone().sub(l), a = n.length(), h = n.dot(new E(1, 0, 0)) / a, d = n.dot(new E(0, 1, 0)) / a, p = n.dot(new E(0, 0, 1)) / a, x = Math.sqrt(h ** 2 + d ** 2);
  let v = new be().fromArray([[h, d, p], [-d / x, h / x, 0], [-h * p / x, -d * p / x, x]].flat());
  return p === 1 && (v = new be().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), p === -1 && (v = new be().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Ee().setFromMatrix3(v);
}
function ge(e, t) {
  return e == null ? void 0 : e.map((l, s) => (9 * l + t[s]) / 10);
}
function oe(e) {
  const t = e.reduce((s, n) => [s[0] + n[0], s[1] + n[1], s[2] + n[2]], [0, 0, 0]), l = e.length;
  return [t[0] / l, t[1] / l, t[2] / l];
}
function dt(e, t, l) {
  const s = oe([t, l]), n = oe([e, l]), a = oe([e, t]), h = new E(...s).sub(new E(...n)).normalize(), d = new E(...l).sub(new E(...a)).normalize(), p = h.clone().cross(d).normalize(), x = p.clone().cross(h).normalize();
  return new Ee().makeBasis(h, x, p);
}
function ut(e, t, l, s) {
  const n = new K(), a = new L(), h = new te({ vertexColors: true }), d = [0, 0, 0], p = [1, 0, 0], x = [0, 1, 0], v = [0, 0, 1];
  a.setAttribute("position", new q([...d, ...p, ...d, ...x, ...d, ...v], 3));
  const g = [255, 0, 0], m = [0, 255, 0], z = [0, 0, 255];
  return a.setAttribute("color", new q([...g, ...g, ...m, ...m, ...z, ...z], 3)), C.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((w) => {
      const T = new Ie(a, h), R = l.rawVal[w[0]], X = l.rawVal[w[1]];
      if (w.length === 2 && (T.position.set(...ge(R, X)), T.rotation.setFromRotationMatrix(Ce(R, X))), w.length === 3) {
        const S = l.rawVal[w[2]];
        T.position.set(...oe([R, X, S])), T.rotation.setFromRotationMatrix(dt(R, X, S));
      }
      const A = 0.05 * t.gridSize.rawVal * 0.75 * s.rawVal;
      T.scale.set(A, A, A), n.add(T);
    }));
  }), C.derive(() => {
    if (s.val, !t.orientations.rawVal) return;
    const T = 0.05 * t.gridSize.val * 0.75 * s.rawVal;
    n.children.forEach((R) => R.scale.set(T, T, T));
  }), C.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function ht(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), l = (e.h * 100).toFixed(0);
    return `${t}x${l}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function pt(e, t, l, s) {
  const n = new K();
  function a(b, M) {
    const c = b / 2, o = M / 2, i = new Float32Array([0, -c, -o, 0, c, -o, 0, c, o, 0, -c, -o, 0, c, o, 0, -c, o]), r = new L();
    r.setAttribute("position", new H(i, 3));
    const u = new Float32Array([0, -c, -o, 0, c, -o, 0, c, o, 0, -c, o, 0, -c, -o]), f = new L();
    return f.setAttribute("position", new H(u, 3)), { fill: r, outline: f };
  }
  function h(b, M = 24) {
    const c = b / 2, o = new Float32Array(M * 9);
    for (let f = 0; f < M; f++) {
      const F = f / M * Math.PI * 2, V = (f + 1) / M * Math.PI * 2;
      o[f * 9] = 0, o[f * 9 + 1] = 0, o[f * 9 + 2] = 0, o[f * 9 + 3] = 0, o[f * 9 + 4] = c * Math.cos(F), o[f * 9 + 5] = c * Math.sin(F), o[f * 9 + 6] = 0, o[f * 9 + 7] = c * Math.cos(V), o[f * 9 + 8] = c * Math.sin(V);
    }
    const i = new L();
    i.setAttribute("position", new H(o, 3));
    const r = new Float32Array((M + 1) * 3);
    for (let f = 0; f <= M; f++) {
      const F = f / M * Math.PI * 2;
      r[f * 3] = 0, r[f * 3 + 1] = c * Math.cos(F), r[f * 3 + 2] = c * Math.sin(F);
    }
    const u = new L();
    return u.setAttribute("position", new H(r, 3)), { fill: i, outline: u };
  }
  function d(b, M, c, o) {
    const i = c ?? M * 0.08, r = o ?? b * 0.07, u = b / 2, f = M / 2, F = f - i, V = r / 2, I = [];
    function y(Y, W, N, _) {
      I.push(0, Y, W, 0, N, W, 0, N, _, 0, Y, W, 0, N, _, 0, Y, _);
    }
    y(-u, -f, u, -F), y(-V, -F, V, F), y(-u, F, u, f);
    const P = new L();
    P.setAttribute("position", new H(new Float32Array(I), 3));
    const B = new Float32Array([0, -u, -f, 0, u, -f, 0, u, -F, 0, V, -F, 0, V, F, 0, u, F, 0, u, f, 0, -u, f, 0, -u, F, 0, -V, F, 0, -V, -F, 0, -u, -F, 0, -u, -f]), k = new L();
    return k.setAttribute("position", new H(B, 3)), { fill: P, outline: k };
  }
  function p(b, M, c) {
    const o = b / 2, i = M / 2, r = o - c, u = i - c, f = [];
    function F(P, B, k, Y) {
      f.push(0, P, B, 0, k, B, 0, k, Y, 0, P, B, 0, k, Y, 0, P, Y);
    }
    F(-o, -i, o, -u), F(-o, u, o, i), F(-o, -u, -r, u), F(r, -u, o, u);
    const V = new L();
    V.setAttribute("position", new H(new Float32Array(f), 3));
    const I = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -r, -u, 0, r, -u, 0, r, -u, 0, r, u, 0, r, u, 0, -r, u, 0, -r, u, 0, -r, -u]), y = new L();
    return y.setAttribute("position", new H(I, 3)), { fill: V, outline: y };
  }
  function x(b, M, c) {
    const o = b / 2, i = M / 2, r = o - c, u = i - c, f = new L(), F = new Float32Array([0, -r, -u, 0, r, -u, 0, r, u, 0, -r, -u, 0, r, u, 0, -r, u]);
    f.setAttribute("position", new H(F, 3));
    const V = [];
    function I(k, Y, W, N) {
      V.push(0, k, Y, 0, W, Y, 0, W, N, 0, k, Y, 0, W, N, 0, k, N);
    }
    I(-o, -i, o, -u), I(-o, u, o, i), I(-o, -u, -r, u), I(r, -u, o, u);
    const y = new L();
    y.setAttribute("position", new H(new Float32Array(V), 3));
    const P = new Float32Array([0, -o, -i, 0, o, -i, 0, o, -i, 0, o, i, 0, o, i, 0, -o, i, 0, -o, i, 0, -o, -i, 0, -r, -u, 0, r, -u, 0, r, -u, 0, r, u, 0, r, u, 0, -r, u, 0, -r, u, 0, -r, -u]), B = new L();
    return B.setAttribute("position", new H(P, 3)), { concFill: f, steelFillGeom: y, outline: B };
  }
  function v(b, M, c) {
    const o = [], i = [[0, -b / 2, -M / 2], [0, -b / 2 + c, -M / 2], [0, -b / 2 + c, M / 2 - c], [0, b / 2, M / 2 - c], [0, b / 2, M / 2], [0, -b / 2, M / 2]], r = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const V of r) o.push(...i[V]);
    const u = new L();
    u.setAttribute("position", new H(new Float32Array(o), 3));
    const f = [];
    for (let V = 0; V < i.length; V++) {
      const I = (V + 1) % i.length;
      f.push(...i[V], ...i[I]);
    }
    const F = new L();
    return F.setAttribute("position", new H(new Float32Array(f), 3)), { fill: u, outline: F };
  }
  function g(b, M, c, o) {
    const i = o / 2, r = [], u = [[0, -b - i, -M / 2], [0, -c - i, -M / 2], [0, -c - i, M / 2 - c], [0, -i, M / 2 - c], [0, -i, M / 2], [0, -b - i, M / 2]], f = [[0, i, -M / 2], [0, i + c, -M / 2], [0, i + c, M / 2 - c], [0, b + i, M / 2 - c], [0, b + i, M / 2], [0, i, M / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const P of F) r.push(...u[P]);
    for (const P of F) r.push(...f[P]);
    const V = new L();
    V.setAttribute("position", new H(new Float32Array(r), 3));
    const I = [];
    for (const P of [u, f]) for (let B = 0; B < P.length; B++) {
      const k = (B + 1) % P.length;
      I.push(...P[B], ...P[k]);
    }
    const y = new L();
    return y.setAttribute("position", new H(new Float32Array(I), 3)), { fill: V, outline: y };
  }
  function m(b, M, c, o) {
    const i = M / 2, r = b, u = [[0, -r, -i], [0, -r, -i + c], [0, -o, -i + c], [0, -o, i - c], [0, -r, i - c], [0, -r, i], [0, 0, i], [0, 0, -i]], f = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
    for (const P of f) F.push(...u[P]);
    const V = new L();
    V.setAttribute("position", new H(new Float32Array(F), 3));
    const I = [];
    for (let P = 0; P < u.length; P++) {
      const B = (P + 1) % u.length;
      I.push(...u[P], ...u[B]);
    }
    const y = new L();
    return y.setAttribute("position", new H(new Float32Array(I), 3)), { fill: V, outline: y };
  }
  function z(b, M, c, o, i) {
    const r = M / 2, u = i / 2, f = [], F = [[0, -b, -r], [0, -b, -r + c], [0, -u - o, -r + c], [0, -u - o, r - c], [0, -b, r - c], [0, -b, r], [0, -u, r], [0, -u, -r]], V = F.map((k) => [k[0], -k[1], k[2]]), I = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const k of I) f.push(...F[k]);
    for (const k of I) f.push(...V[k]);
    const y = new L();
    y.setAttribute("position", new H(new Float32Array(f), 3));
    const P = [];
    for (const k of [F, V]) for (let Y = 0; Y < k.length; Y++) {
      const W = (Y + 1) % k.length;
      P.push(...k[Y], ...k[W]);
    }
    const B = new L();
    return B.setAttribute("position", new H(new Float32Array(P), 3)), { fill: y, outline: B };
  }
  function w(b, M, c, o) {
    const i = b / 2, r = M / 2, u = o / 2, f = [[0, -u, -r], [0, u, -r], [0, u, r - c], [0, i, r - c], [0, i, r], [0, -i, r], [0, -i, r - c], [0, -u, r - c]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], V = [];
    for (const B of F) V.push(...f[B]);
    const I = new L();
    I.setAttribute("position", new H(new Float32Array(V), 3));
    const y = [];
    for (let B = 0; B < f.length; B++) {
      const k = (B + 1) % f.length;
      y.push(...f[B], ...f[k]);
    }
    const P = new L();
    return P.setAttribute("position", new H(new Float32Array(y), 3)), { fill: I, outline: P };
  }
  function T(b, M, c = 24) {
    const o = b / 2, i = o - M, r = [];
    for (let V = 0; V < c; V++) {
      const I = V / c * Math.PI * 2, y = (V + 1) / c * Math.PI * 2, P = Math.cos(I), B = Math.sin(I), k = Math.cos(y), Y = Math.sin(y);
      r.push(0, o * P, o * B, 0, o * k, o * Y, 0, i * k, i * Y), r.push(0, o * P, o * B, 0, i * k, i * Y, 0, i * P, i * B);
    }
    const u = new L();
    u.setAttribute("position", new H(new Float32Array(r), 3));
    const f = [];
    for (let V = 0; V < c; V++) {
      const I = V / c * Math.PI * 2, y = (V + 1) / c * Math.PI * 2;
      f.push(0, o * Math.cos(I), o * Math.sin(I), 0, o * Math.cos(y), o * Math.sin(y)), f.push(0, i * Math.cos(I), i * Math.sin(I), 0, i * Math.cos(y), i * Math.sin(y));
    }
    const F = new L();
    return F.setAttribute("position", new H(new Float32Array(f), 3)), { fill: u, outline: F };
  }
  const R = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), X = new te({ color: 52479 }), Z = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), A = new te({ color: 16750848 });
  function S(b, M) {
    const c = Math.abs(M[0] - b[0]), o = Math.abs(M[1] - b[1]), i = Math.abs(M[2] - b[2]);
    return i > c && i > o || o > c && o > i;
  }
  return C.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const b = t.secColumns.rawVal, M = t.secBeams.rawVal;
    if (!b && !M) {
      n.children.forEach((u) => {
        u instanceof G && u.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((u) => {
      u instanceof G && u.dispose();
    }), n.clear();
    const c = (_a = e.elements) == null ? void 0 : _a.val, o = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!c || !o) return;
    const i = o.sectionShapes, r = t.secFloor.rawVal;
    c.forEach((u, f) => {
      if (u.length !== 2) return;
      const F = l.rawVal[u[0]], V = l.rawVal[u[1]];
      if (!F || !V) return;
      const I = S(F, V);
      if (I && !b || !I && !M) return;
      if (r >= 0) {
        const Y = Math.min(F[1], V[1]);
        Math.max(F[1], V[1]);
        const W = t.gridSize.rawVal || 3;
        if (Math.floor(Y / W + 0.01) !== r) return;
      }
      const y = i == null ? void 0 : i.get(f);
      if (!y) return;
      const P = [(F[0] + V[0]) / 2, (F[1] + V[1]) / 2, (F[2] + V[2]) / 2], B = Ce(F, V);
      if (y.type === "CFT") {
        const Y = x(y.b, y.h, y.tw ?? y.b * 0.05), W = new U(Y.concFill, R);
        W.position.set(...P), W.rotation.setFromRotationMatrix(B), n.add(W);
        const N = new U(Y.steelFillGeom, Z);
        N.position.set(...P), N.rotation.setFromRotationMatrix(B), n.add(N);
        const _ = new ne(Y.outline, A);
        _.position.set(...P), _.rotation.setFromRotationMatrix(B), n.add(_);
      } else {
        let Y, W, N;
        switch (y.type) {
          case "rect":
            Y = a(y.b, y.h), W = R, N = X;
            break;
          case "circ":
            Y = h(y.d), W = R, N = X;
            break;
          case "I":
            Y = d(y.b, y.h, y.tf, y.tw), W = Z, N = A;
            break;
          case "HSS":
            Y = p(y.b, y.h, y.tw ?? y.b * 0.05), W = Z, N = A;
            break;
          case "CFT":
            Y = x(y.b, y.h, y.tw ?? y.b * 0.05), W = Z, N = A;
            break;
          case "L":
            Y = v(y.b ?? y.h, y.h, y.t ?? y.tw ?? 3e-3), W = Z, N = A;
            break;
          case "2L":
            Y = g(y.b ?? y.h, y.h, y.t ?? y.tw ?? 3e-3, y.dis ?? 0.01), W = Z, N = A;
            break;
          case "C":
          case "coldC":
            Y = m(y.b, y.h, y.tf ?? y.t ?? 3e-3, y.tw ?? y.t ?? 3e-3), W = Z, N = A;
            break;
          case "2C":
            Y = z(y.b, y.h, y.tf ?? 5e-3, y.tw ?? 5e-3, y.dis ?? 0.01), W = Z, N = A;
            break;
          case "T":
            Y = w(y.b, y.h, y.tf ?? 0.01, y.tw ?? 6e-3), W = Z, N = A;
            break;
          case "pipe":
            Y = T(y.d, y.tw ?? y.d * 0.05), W = Z, N = A;
            break;
          default:
            return;
        }
        const _ = new U(Y.fill, W);
        _.position.set(...P), _.rotation.setFromRotationMatrix(B), n.add(_);
        const D = new ne(Y.outline, N);
        D.position.set(...P), D.rotation.setFromRotationMatrix(B), n.add(D);
      }
      const k = ht(y);
      if (k) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(y.type) ? "#ff9900" : "#00ccff", N = new G(k, W, "transparent");
        N.position.set(P[0], P[1], P[2]);
        const _ = 0.05 * t.gridSize.rawVal * 0.5;
        N.updateScale(_ * ((s == null ? void 0 : s.rawVal) ?? 1)), n.add(N);
      }
    });
  }), s && C.derive(() => {
    if (s.val, !t.sections.rawVal) return;
    const b = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((M) => {
      M instanceof G && M.updateScale(b * s.rawVal);
    });
  }), C.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class le extends K {
  constructor(t, l, s, n, a, h, d) {
    super();
    const p = new ue().moveTo(0, 0).lineTo(0, h[1]).lineTo(s, h[1]).lineTo(s, 0).lineTo(0, 0), x = p.getPoints(), v = new L().setFromPoints(x);
    this.lines = new ne(v, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), d && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new he(p), m = new Q({ color: h[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new U(g, m), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), d && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new G(`${a[1].toFixed(4)}`), this.normalizedResult = h, this.textPosition = oe([t, l]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Te extends K {
  constructor(t, l, s, n, a, h, d) {
    super();
    const p = a[0] * s / (a[0] + a[1]), x = a[0] * a[1] > 0;
    if (this.text = new G(`${a[0].toFixed(4)}`), this.text2 = new G(`${(a[1] * -1).toFixed(4)}`), this.normalizedResult = h, this.textPosition = ge(t, l), this.text2Position = ge(l, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), x) {
      const v = new ue().moveTo(0, 0).lineTo(0, h[0]).lineTo(p, 0).lineTo(0, 0), g = new ue().moveTo(p, 0).lineTo(s, -h[1]).lineTo(s, 0).lineTo(p, 0), m = v.getPoints(), z = g.getPoints(), w = new L().setFromPoints(m), T = new L().setFromPoints(z), R = new te({ color: j().resultOutline });
      this.lines = new ne(w, R), this.lines2 = new ne(T, R), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), d && this.lines.rotateX(Math.PI / 2), d && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const X = new he(v), Z = new he(g), A = new Q({ color: h[0] > 0 ? 24435 : 11411474, side: O }), S = new Q({ color: -h[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new U(X, A), this.mesh2 = new U(Z, S), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), d && this.mesh.rotateX(Math.PI / 2), d && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const v = new ue().moveTo(0, 0).lineTo(0, h[0]).lineTo(s, -h[1]).lineTo(s, 0).lineTo(0, 0), g = v.getPoints(), m = new L().setFromPoints(g);
      this.lines = new ne(m, new te({ color: j().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), d && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const z = new he(v), w = new Q({ color: h[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new U(z, w), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), d && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function mt(e, t, l, s) {
  const n = new K(), a = { normals: le, shearsY: le, shearsZ: le, torsions: le, bendingsY: Te, bendingsZ: Te };
  return C.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, l.val, t.frameResults.val == "none") return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const h = Be[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[h]) == null ? void 0 : _b.forEach((d, p) => {
      var _a2, _b2;
      const x = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[p]) ?? [0, 1], v = l.rawVal[x[0]], g = l.rawVal[x[1]], m = new E(...g).distanceTo(new E(...v)), z = ft((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[h]), w = d == null ? void 0 : d.map((Z) => Z / (z === 0 ? 1 : z)), T = Ce(v, g), R = new a[h](v, g, m, T, d ?? [0, 0], w ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(h)), X = 0.05 * t.gridSize.rawVal;
      R.updateScale(X * s.rawVal), n.add(R);
    });
  }), C.derive(() => {
    if (s.val, t.frameResults.rawVal == "none") return;
    const h = 0.05 * t.gridSize.val;
    n.children.forEach((d) => d.updateScale(h * s.rawVal));
  }), C.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function ft(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((l) => {
    const s = Math.max(...l ?? [0, 0]);
    s > t && (t = s);
  }), t;
}
class wt extends K {
  constructor(t, l, s) {
    super();
    const n = l === Se.reactions;
    s[0] && (this.xText1 = new G(`${n ? "Fx" : "Dx"}: ` + s[0].toFixed(4))), s[3] && (this.xText2 = new G(`${n ? "Mx" : "Rx"}: ` + s[3].toFixed(4))), s[1] && (this.yText1 = new G(`${n ? "Fy" : "Dy"}: ` + s[1].toFixed(4))), s[4] && (this.yText2 = new G(`${n ? "My" : "Ry"}: ` + s[4].toFixed(4))), s[2] && (this.zText1 = new G(`${n ? "Fz" : "Dz"}: ` + s[2].toFixed(4))), s[5] && (this.zText2 = new G(`${n ? "Mz" : "Rz"}: ` + s[5].toFixed(4))), (s[0] || s[3]) && (this.xArrow = new ee(new E(1, 0, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[1] || s[4]) && (this.yArrow = new ee(new E(0, 1, 0), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), (s[2] || s[5]) && (this.zArrow = new ee(new E(0, 0, 1), new E(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function vt(e, t, l, s) {
  const n = new K();
  return C.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((d) => d.dispose()), n.clear();
    const a = Se[t.nodeResults.rawVal], h = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[a]) == null ? void 0 : _b.forEach((d, p) => {
      const x = new wt(l.rawVal[p], a, d ?? [0, 0, 0, 0, 0, 0]);
      x.updateScale(h * s.rawVal), n.add(x);
    });
  }), C.derive(() => {
    if (s.val, t.nodeResults.rawVal == "none") return;
    const a = 0.05 * t.gridSize.val;
    n.children.forEach((h) => h.updateScale(a * s.rawVal));
  }), C.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function xt({ drawingObj: e, gridObj: t, scene: l, camera: s, controls: n, gridSize: a, derivedDisplayScale: h, rendererElm: d, viewerRender: p }) {
  const x = new Ze(), v = new We(), g = new U(new Ne(a, a), new Q({ side: O })), m = new ce(new L(), new de()), z = new ce(new L(), new de({ color: "gray" })), w = new ce(new L(), new de({ color: "orange", size: 0.8 }));
  l.add(w), m.geometry.setAttribute("position", new q(e.points.rawVal.flat(), 3)), m.geometry.computeBoundingSphere(), m.frustumCulled = false, z.frustumCulled = false, l.add(z), g.position.set(0.5 * a, 0.5 * a, 0), g.rotateX(Math.PI / 2), g.geometry.rotateX(Math.PI / 2), g.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), C.derive(() => {
    e.gridTarget && (bt(t, { position: new E(...e.gridTarget.val.position), quaternion: new _e().setFromEuler(new ze(...e.gridTarget.val.rotation)) }, p), g.position.set(...e.gridTarget.val.position), g.quaternion.setFromEuler(new ze(...e.gridTarget.val.rotation)), g.updateMatrixWorld());
  }), C.derive(() => {
    m.geometry.setAttribute("position", new q(e.points.val.flat(), 3)), m.geometry.computeBoundingSphere();
  }), C.derive(() => {
    const A = 0.05 * a * 0.5 * h.val;
    z.material.size = A, x.params.Points.threshold = 0.4 * A;
  }), C.derive(() => {
    var _a;
    const A = e.points.val ?? [], b = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], M = [];
    for (const o of b) {
      const [i, r, u] = A[o];
      M.push(i, r, u);
    }
    const c = new L();
    c.setAttribute("position", new q(M, 3)), w.geometry.dispose(), w.geometry = c;
  });
  let T = false, R = 0;
  d.addEventListener("pointerdown", () => {
    T = true;
  }), d.addEventListener("pointerup", () => {
    T = false;
  }), d.addEventListener("pointermove", () => {
    T && R++;
  }), d.addEventListener("click", (A) => {
    if (R > 5) {
      R = 0;
      return;
    }
    R = 0, v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(v, s);
    const S = x.intersectObject(g);
    if (S.length) {
      let b = S[0].point;
      (A.ctrlKey || A.metaKey) && (b = new E(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), e.points.val = [...e.points.rawVal, b.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), d.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), d.addEventListener("pointermove", (A) => {
    v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(v, s);
    const S = x.intersectObject(g);
    if (z.geometry.deleteAttribute("position"), S.length) {
      let b = S[0].point;
      (A.ctrlKey || A.metaKey) && (b = new E(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), z.geometry.setAttribute("position", new q(b.toArray(), 3));
    }
    p();
  }), d.addEventListener("pointermove", (A) => {
    var _a;
    v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(v, s);
    let S = false;
    const b = x.intersectObject(m), M = x.intersectObject(g);
    if (b.length && M.length) {
      const c = new E(...e.points.rawVal[b[0].index]), o = new E(...M[0].point), i = c.sub(o), r = (_a = M[0].face) == null ? void 0 : _a.normal;
      r.transformDirection(g.matrixWorld), Math.abs(i.dot(r)) < 1e-4 && (S = true);
    }
    z.visible = !S;
  });
  let X = false, Z;
  d.addEventListener("pointermove", (A) => {
    var _a;
    if (!R) return;
    v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(v, s);
    let S = false;
    const b = x.intersectObject(m), M = x.intersectObject(g);
    if (b.length && M.length) {
      const o = new E(...e.points.rawVal[b[0].index]), i = new E(...M[0].point), r = o.sub(i), u = (_a = M[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(g.matrixWorld), Math.abs(r.dot(u)) < 1e-4 && (S = true);
    }
    if (S && R < 5 && (X = true, n.enabled = false, Z = b[0].index), !X || R % 2 !== 0) return;
    const c = [...e.points.rawVal];
    if (Z !== void 0) {
      let o = M[0].point;
      (A.ctrlKey || A.metaKey) && (o = new E(Math.round(o.x), Math.round(o.y), Math.round(o.z))), c[Z] = o.toArray();
    }
    e.points.val = c;
  }), d.addEventListener("pointerup", () => {
    n.enabled = true, X = false;
  }), d.addEventListener("contextmenu", (A) => {
    var _a;
    v.x = A.clientX / window.innerWidth * 2 - 1, v.y = -(A.clientY / window.innerHeight) * 2 + 1, x.setFromCamera(v, s);
    let S = false;
    const b = x.intersectObject(m), M = x.intersectObject(g);
    if (b.length && M.length) {
      const i = new E(...e.points.rawVal[b[0].index]), r = new E(...M[0].point), u = i.sub(r), f = (_a = M[0].face) == null ? void 0 : _a.normal;
      f.transformDirection(g.matrixWorld), Math.abs(u.dot(f)) < 1e-4 && (S = true);
    }
    if (!S) return;
    const c = [...e.points.rawVal];
    if (c.splice(b[0].index, 1), e.points.val = c, !e.polylines) return;
    const o = e.polylines.rawVal.map((i) => i.filter((r) => r !== b[0].index)).map((i) => i.map((r) => r > b[0].index ? r - 1 : r)).filter((i) => i.length);
    o.push([]), e.polylines.val = o;
  });
}
function bt(e, t, l) {
  const a = Math.round(14.999999999999998), h = { position: e.position.clone(), quaternion: e.quaternion.clone() }, d = setInterval(x, 1e3 / 30);
  let p = 0;
  function x() {
    p++;
    const v = p / a;
    e.position.lerpVectors(h.position, t.position, v), e.quaternion.slerpQuaternions(h.quaternion, t.quaternion, v), l && l(), p == a && clearInterval(d);
  }
}
class Re {
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
    this.map = Me[t] || Me.rainbow, this.n = l;
    const s = 1 / this.n, n = new $(), a = new $();
    this.lut.length = 0, this.lut.push(new $(this.map[0][1]));
    for (let h = 1; h < l; h++) {
      const d = h * s;
      for (let p = 0; p < this.map.length - 1; p++) if (d > this.map[p][0] && d <= this.map[p + 1][0]) {
        const x = this.map[p][0], v = this.map[p + 1][0];
        n.setHex(this.map[p][1], re), a.setHex(this.map[p + 1][1], re);
        const g = new $().lerpColors(n, a, (d - x) / (v - x));
        this.lut.push(g);
      }
    }
    return this.lut.push(new $(this.map[this.map.length - 1][1])), this;
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
    return Me[t] = l, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const l = t.getContext("2d", { alpha: false }), s = l.getImageData(0, 0, 1, this.n), n = s.data;
    let a = 0;
    const h = 1 / this.n, d = new $(), p = new $(), x = new $();
    for (let v = 1; v >= 0; v -= h) for (let g = this.map.length - 1; g >= 0; g--) if (v < this.map[g][0] && v >= this.map[g - 1][0]) {
      const m = this.map[g - 1][0], z = this.map[g][0];
      d.setHex(this.map[g - 1][1], re), p.setHex(this.map[g][1], re), x.lerpColors(d, p, (v - m) / (z - m)), n[a * 4] = Math.round(x.r * 255), n[a * 4 + 1] = Math.round(x.g * 255), n[a * 4 + 2] = Math.round(x.b * 255), n[a * 4 + 3] = 255, a += 1;
    }
    return l.putImageData(s, 0, 0), t;
  }
}
const Me = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function Mt(e, t, l) {
  const s = new Re(), n = new $(), a = new U(new L(), new Q({ side: O, vertexColors: true }));
  return s.setColorMap("rainbow"), a.renderOrder = -1, a.frustumCulled = false, C.derive(() => {
    a.geometry.setAttribute("position", new q(e.val.flat(), 3));
    const h = [];
    for (const w of t.val) w.length === 3 ? h.push(w[0], w[1], w[2]) : w.length === 4 && (h.push(w[0], w[1], w[2]), h.push(w[0], w[2], w[3]));
    a.geometry.setIndex(new $e(h, 1)), a.geometry.setAttribute("color", new q(e.val.map(() => [0, 0, 0]).flat(), 3));
    const d = l.val.filter((w) => Number.isFinite(w));
    let p, x;
    const v = Ve.val;
    if (v ? (x = v[0], p = v[1]) : (p = d.length ? Math.max(...d) : 1, x = d.length ? Math.min(...d) : 0, x >= 0 && p > 0 && (x = 0)), p === x) {
      const w = Math.max(Math.abs(p) * 1e-6, 1e-9);
      p += w, x -= w;
    }
    const g = v && v[0] > v[1], m = Math.min(x, p), z = Math.max(x, p);
    s.setMin(m), s.setMax(z);
    for (let w = 0; w < l.val.length; w++) {
      const T = l.val[w];
      if (!Number.isFinite(T)) {
        a.geometry.attributes.color.setXYZ(w, 0.3, 0.3, 0.3);
        continue;
      }
      const R = g ? z + m - T : T, X = s.getColor(R) ?? new $(0, 0, 0);
      n.copy(X).convertSRGBToLinear(), n.multiplyScalar(0.6), a.geometry.attributes.color.setXYZ(w, n.r, n.g, n.b);
    }
  }), a;
}
function yt(e, t, l, s) {
  const n = Mt(l, e.elements, s);
  return C.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const gt = 6, ye = 10, Ft = 0.012;
function Ct(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function St(e, t, l, s) {
  if (!l && !s) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && l) {
    const a = l[e];
    if (a && a.has(t)) return a.get(t);
  }
  return null;
}
function Vt(e, t, l, s) {
  const n = new K(), a = new Re();
  a.setColorMap("rainbow");
  const h = new $(), d = C.state([]);
  return C.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const p = l.val, x = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], v = Ct(t.frameResults.val);
    if (n.children.forEach((f) => {
      f.geometry && f.geometry.dispose(), f.material && f.material.dispose();
    }), n.clear(), !v || x.length === 0 || p.length === 0) {
      d.val = [];
      return;
    }
    const g = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, m = (_c = e.deformOutputs) == null ? void 0 : _c.val, z = [], w = [];
    for (let f = 0; f < x.length; f++) {
      if (x[f].length !== 2) continue;
      const V = St(v, f, g, m);
      V && (z.push(V[0], V[1]), w.push({ idx: f, vals: V }));
    }
    if (z.length === 0) {
      d.val = [];
      return;
    }
    const T = Math.min(...z), R = Math.max(...z);
    a.setMin(T), a.setMax(R), d.val = z;
    const X = [1 / 0, 1 / 0, 1 / 0], Z = [-1 / 0, -1 / 0, -1 / 0];
    for (const f of p) for (let F = 0; F < 3; F++) X[F] = Math.min(X[F], f[F]), Z[F] = Math.max(Z[F], f[F]);
    const S = Math.max(Z[0] - X[0], Z[1] - X[1], Z[2] - X[2], 1) * Ft, b = [], M = [], c = [];
    let o = 0;
    for (const { idx: f, vals: F } of w) {
      const V = x[f], I = p[V[0]], y = p[V[1]];
      if (!I || !y) continue;
      const P = new E(y[0] - I[0], y[1] - I[1], y[2] - I[2]), B = P.length();
      if (B < 1e-10) continue;
      P.normalize();
      const k = Math.abs(P.y) < 0.99 ? new E(0, 1, 0) : new E(1, 0, 0), Y = new E().crossVectors(P, k).normalize(), W = new E().crossVectors(P, Y).normalize(), N = ye + 1, _ = gt;
      for (let D = 0; D < N; D++) {
        const J = D / ye, se = I[0] + P.x * B * J, ie = I[1] + P.y * B * J, me = I[2] + P.z * B * J, fe = F[0] + (F[1] - F[0]) * J, ae = a.getColor(fe) ?? new $(0, 0, 0);
        h.copy(ae).convertSRGBToLinear();
        for (let we = 0; we < _; we++) {
          const Ae = we / _ * Math.PI * 2, ve = Math.cos(Ae), xe = Math.sin(Ae);
          b.push(se + (Y.x * ve + W.x * xe) * S, ie + (Y.y * ve + W.y * xe) * S, me + (Y.z * ve + W.z * xe) * S), M.push(h.r, h.g, h.b);
        }
      }
      for (let D = 0; D < ye; D++) for (let J = 0; J < _; J++) {
        const se = (J + 1) % _, ie = o + D * _ + J, me = o + D * _ + se, fe = o + (D + 1) * _ + J, ae = o + (D + 1) * _ + se;
        c.push(ie, me, ae), c.push(ie, ae, fe);
      }
      o += N * _;
    }
    if (b.length === 0) return;
    const i = new L();
    i.setAttribute("position", new q(b, 3)), i.setAttribute("color", new q(M, 3)), i.setIndex(c), i.computeVertexNormals();
    const r = new Q({ vertexColors: true, side: O }), u = new U(i, r);
    u.frustumCulled = false, n.add(u);
  }), n.__colorMapValues = d, n;
}
function Xe(e, t = 8) {
  const l = document.createElement("div");
  l.id = "legend";
  const s = document.createElement("div");
  s.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", l.appendChild(s), setTimeout(() => {
    C.derive(() => {
      s.textContent = Fe.val ? `[${Fe.val}]` : "";
    });
  });
  const n = Array.from({ length: t + 1 }, (p, x) => x / t).reverse();
  let a, h;
  n.forEach((p, x) => {
    a = document.createElement("div"), a.id = `marker-${x}`, a.className = "marker", a.style.marginTop = x == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, h = document.createElement("p"), h.id = `marker-text-${x}`, a.append(h), l.append(a);
  });
  const d = [];
  return l.querySelectorAll("p").forEach((p) => d.push(p)), setTimeout(() => {
    C.derive(() => {
      n.forEach((p, x) => {
        const v = d[x];
        v && (v.innerText = At(e.val, p).toString());
      });
    });
  }), l;
}
function At(e, t) {
  const l = Ve.val;
  if (l) return (l[0] + t * (l[1] - l[0])).toPrecision(3);
  const s = e.filter((h) => Number.isFinite(h));
  if (s.length === 0) return "0";
  let n = Math.min(...s);
  const a = Math.max(...s);
  return n >= 0 && a > 0 && (n = 0), (n + t * (a - n)).toPrecision(3);
}
function It({ mesh: e, settingsObj: t, drawingObj: l, objects3D: s, solids: n }) {
  Je.DEFAULT_UP = new E(0, 0, 1);
  const a = document.createElement("div"), h = new Ge(), d = new De(45, 1, 0.1, 2 * 1e6), p = new qe(-10, 10, 10, -10, -1e3, 2e6);
  let x = d;
  const v = new Ke({ antialias: true });
  v.localClippingEnabled = true;
  const g = new Ue(d, v.domElement), m = et(t), z = C.derive(() => m.displayScale.val === 0 ? 1 : m.displayScale.val > 0 ? m.displayScale.val : -1 / m.displayScale.val), w = zt(e, m);
  let T = Ye(m.gridSize.rawVal);
  a.appendChild(je(m, e, n)), a.setAttribute("id", "viewer"), a.appendChild(v.domElement), v.setPixelRatio(window.devicePixelRatio);
  const R = j();
  v.setClearColor(R.background, 1);
  const X = m.gridSize.rawVal, Z = X * 0.5 + X * 0.5 / Math.tan(45 * 0.5);
  d.position.set(0.5 * X, 0.8 * -Z, 0.5 * X), g.target.set(0.5 * X, 0.5 * X, 0), g.minDistance = 1, g.maxDistance = Z * 2.5, a.__settings = m, g.zoomSpeed = 1, g._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, g.update(), h.add(T, ct(m.gridSize.rawVal, m.flipAxes.rawVal)), new ResizeObserver((c) => {
    var _a, _b;
    for (const o of c) {
      const i = (_a = o.target) == null ? void 0 : _a.clientWidth, r = (_b = o.target) == null ? void 0 : _b.clientHeight;
      if (i === 0 || r === 0) continue;
      d.aspect = i / r, d.updateProjectionMatrix();
      const u = i / r, f = p.top;
      p.left = -f * u, p.right = f * u, p.updateProjectionMatrix(), v.setSize(i, r), S();
    }
  }).observe(a), g.addEventListener("change", S), C.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, m.displayScale.val, m.nodes.val, m.elements.val, m.elemColumns.val, m.elemBeams.val, m.nodesIndexes.val, m.elementsIndexes.val, m.orientations.val, m.sections.val, m.secColumns.val, m.secBeams.val, m.secFloor.val, m.supports.val, m.loads.val, m.deformedShape.val, m.nodeResults.val, m.frameResults.val, m.shellResults.val, setTimeout(S);
  });
  function S() {
    v.render(h, x);
  }
  function b(c) {
    x = c, g.object = c, g.update(), S();
  }
  if (e) {
    h.add(tt(m, w, z), nt(e, m, w), at(m, w, z), rt(e, m, w, z), st(e, m, w, z), it(e, m, w, z), ut(e, m, w, z), pt(e, m, w, z), vt(e, m, w, z), mt(e, m, w, z));
    const c = Pt(e, m), o = yt(e, m, w, c), i = Xe(c);
    h.add(o), a.appendChild(i);
    const r = Vt(e, m, w);
    h.add(r);
    const u = r.__colorMapValues, f = Xe(u);
    f.id = "frame-legend", a.appendChild(f), C.derive(() => {
      const F = m.shellResults.val != "none", V = m.frameResults.val.startsWith("contour:");
      i.hidden = !F, o.visible = F, f.hidden = !V;
    });
  }
  if (n) {
    const c = new Qe(16777215, 0.5);
    h.add(c);
    const o = new Pe(16777215, 0.5);
    o.position.set(30, 25, -10), o.shadow.mapSize.width = 1024, o.shadow.mapSize.height = 1024, h.add(o);
    const i = 10;
    o.shadow.camera.left = -10, o.shadow.camera.right = i, o.shadow.camera.top = i, o.shadow.camera.bottom = -10, o.shadow.camera.far = 1e3;
    const r = new Pe(16777215, 0.5);
    r.color.setHSL(11, 43, 96), r.position.set(-10, 0, 30), h.add(r), C.derive(() => {
      (n == null ? void 0 : n.val.length) && (h.remove(...n.oldVal), h.add(...n.rawVal), S());
    }), C.derive(() => {
      n.rawVal.forEach((u) => u.visible = m.solids.val), S();
    });
  }
  if (s) {
    const c = [], o = (r) => {
      var _a;
      return ((_a = r == null ? void 0 : r.userData) == null ? void 0 : _a.isCota) ? m.showCotas.val : m.custom3D.val;
    }, i = () => {
      for (const r of c) r.visible = o(r);
      S();
    };
    C.derive(() => {
      const r = s.val;
      c.length && (h.remove(...c), c.length = 0), r.length && (h.add(...r), c.push(...r), i()), S();
    }), C.derive(() => {
      m.custom3D.val, i();
    }), C.derive(() => {
      m.showCotas.val, i();
    });
  }
  l && xt({ drawingObj: l, gridObj: T, scene: h, camera: d, controls: g, gridSize: X, derivedDisplayScale: z, rendererElm: v.domElement, viewerRender: S }), pe((c, o) => {
    v.setClearColor(o.background, 1), h.remove(T), T.geometry.dispose(), T.material.dispose(), T = Ye(m.gridSize.rawVal), h.add(T), a.style.setProperty("--awatif-legend-color", o.legendMarker), S();
  });
  const M = { scene: h, perspCamera: d, orthoCamera: p, get camera() {
    return x;
  }, controls: g, renderer: v, rendererElm: v.domElement, render: S, setActiveCamera: b, settings: m };
  return a.__ctx = M, a;
}
function zt(e, t) {
  return C.derive(() => {
    var _a, _b, _c, _d;
    if (!t.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const l = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], s = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!s || l.length === 0) return l;
    const n = t.deformScale.val, a = Number.isFinite(n) ? n : 1;
    return l.map((h, d) => {
      var _a2;
      const p = ((_a2 = s.get(d)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return h.map((x, v) => {
        const g = Number.isFinite(p[v]) ? p[v] : 0;
        return x + g * a;
      });
    });
  });
}
const Ve = C.state(null), Fe = C.state("");
function Pt(e, t) {
  const l = C.state([]);
  let s;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.membraneXX = "membraneXX", n.membraneYY = "membraneYY", n.membraneXY = "membraneXY", n.tranverseShearX = "tranverseShearX", n.tranverseShearY = "tranverseShearY", n.vonMises = "vonMises", n.pressure = "pressure", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(s || (s = {})), C.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
    const n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), w = (o, i) => {
      o == null ? void 0 : o.forEach((r, u) => {
        const f = e.elements.val[u];
        if (f) for (let F = 0; F < f.length; F++) i.set(f[F], [r[F] ?? r[0]]);
      });
    };
    w((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), w((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, a), w((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, h), w((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, d), w((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, p), w((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, x), w((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, v), w((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, g), w((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, m), w((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, z);
    const T = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, R = t.shellResults.val, X = T == null ? void 0 : T[R];
    Ve.val = Array.isArray(X) && X.length === 2 ? [X[0], X[1]] : null;
    const Z = { bendingXX: [n, 0], bendingYY: [a, 0], bendingXY: [h, 0], membraneXX: [d, 0], membraneYY: [p, 0], membraneXY: [x, 0], tranverseShearX: [v, 0], tranverseShearY: [g, 0], vonMises: [m, 0], pressure: [z, 0], displacementX: [(_x = (_w = e.deformOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.deformations, 0], displacementY: [(_z = (_y = e.deformOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.deformations, 1], displacementZ: [(_B = (_A = e.deformOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.deformations, 2] }, A = t.shellResults.val, S = A === "displacementX" || A === "displacementY" || A === "displacementZ", b = S ? 1e3 : 1, M = S ? "mm" : A === "bendingXX" || A === "bendingYY" || A === "bendingXY" ? "kN\xB7m/m" : A === "membraneXX" || A === "membraneYY" || A === "membraneXY" ? "kN/m" : A === "vonMises" || A === "pressure" ? "kN/m\xB2" : A === "tranverseShearX" || A === "tranverseShearY" ? "kN/m" : "";
    Fe.val = M;
    const c = [];
    e.nodes.val.forEach((o, i) => {
      const r = Z[A];
      if (!r || !r[0] || typeof r[0].has != "function") return;
      if (!r[0].has(i)) {
        c.push(Number.NaN);
        return;
      }
      const u = r[0].get(i), f = u ? u[r[1]] ?? 0 : 0;
      c.push(f * b);
    }), l.val = c;
  }), l;
}
export {
  Mt as a,
  Xe as b,
  It as g
};
