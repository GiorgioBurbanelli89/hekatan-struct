import { x as ae, B as R, y as re, F as W, i as k, e as Ae, a as J, M as $, z as N, g as H, r as L, G as Ye, f as Xe, V as T, A as Q, w as Z, H as xe, p as Ie, L as O, c as _, n as le, I as ce, R as Le, b as Ze, J as We, K as ke, N as Ce, U as se, X as He, Y as _e, q as $e, s as Ge, t as qe, W as Ne, u as Ke, v as Ue, D as Se, O as De } from "./Text-Cin90tvN.js";
import { v as g, P as Qe, g as D, o as de } from "./theme-CzzIlc4y.js";
import "./styles-BtnDi-1k.js";
function Je(e, t, a) {
  const o = document.createElement("div"), n = new Qe({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (t == null ? void 0 : t.nodes) && (n.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(e.nodes, "val", { label: "Nodes" }), n.addBinding(e.elements, "val", { label: "Elements" }), n.addBinding(e.elemColumns, "val", { label: "  Columnas" }), n.addBinding(e.elemBeams, "val", { label: "  Vigas" }), n.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(e.orientations, "val", { label: "Orientations" }), n.addBinding(e.sections, "val", { label: "Sections" }), n.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (t == null ? void 0 : t.nodeInputs) || (t == null ? void 0 : t.elementInputs)) {
    const i = n.addFolder({ title: "Analysis Inputs" });
    i.addBinding(e.supports, "val", { label: "Supports" }), i.addBinding(e.loads, "val", { label: "Loads" });
  }
  if ((t == null ? void 0 : t.deformOutputs) || (t == null ? void 0 : t.analyzeOutputs)) {
    const i = n.addFolder({ title: "Analysis Outputs" });
    i.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), i.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), i.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), i.addBinding(e.deformedShape, "val", { label: "Deformed shape" });
  }
  return a && n.addBinding(e.solids, "val", { label: "Solids" }), o;
}
function Oe(e) {
  return { gridSize: g.state((e == null ? void 0 : e.gridSize) ?? 20), displayScale: g.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: g.state((e == null ? void 0 : e.nodes) ?? true), elements: g.state((e == null ? void 0 : e.elements) ?? true), elemColumns: g.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: g.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: g.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: g.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: g.state((e == null ? void 0 : e.orientations) ?? false), sections: g.state((e == null ? void 0 : e.sections) ?? true), secColumns: g.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: g.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: g.state((e == null ? void 0 : e.secFloor) ?? -1), supports: g.state((e == null ? void 0 : e.supports) ?? true), loads: g.state((e == null ? void 0 : e.loads) ?? false), deformedShape: g.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: g.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: g.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: g.state((e == null ? void 0 : e.shellResults) ?? "none"), flipAxes: g.state((e == null ? void 0 : e.flipAxes) ?? false), solids: g.state((e == null ? void 0 : e.solids) ?? true) };
}
function je(e, t, a) {
  const o = D(), n = new ae(new R(), new re({ color: o.nodePoint }));
  return de((i, r) => {
    n.material.color.setHex(r.nodePoint);
  }), n.frustumCulled = false, g.derive(() => {
    e.nodes.val && n.geometry.setAttribute("position", new W(t.val.flat(), 3));
  }), g.derive(() => {
    a.val;
    const i = 0.05 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (n.material.size = i * a.rawVal);
  }), g.derive(() => {
    n.visible = e.nodes.val;
  }), n;
}
function et(e, t, a) {
  const o = D(), n = new k(), i = new Ae(new R(), new J({ color: o.elementLine }));
  de((c, V) => {
    i.material.color.setHex(V.elementLine);
  }), i.frustumCulled = false, n.add(i);
  const r = new $({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: N, depthWrite: false }), s = new H(new R(), r);
  s.frustumCulled = false, n.add(s);
  let h = new L(o.shellWall), w = new L(o.shellSlab), p = new L(o.shellTri);
  de((c, V) => {
    h = new L(V.shellWall), w = new L(V.shellSlab), p = new L(V.shellTri), r.opacity = V.shellOpacity, r.needsUpdate = true;
  });
  function m(c, V) {
    const b = Math.abs(V[0] - c[0]), C = Math.abs(V[1] - c[1]), S = Math.abs(V[2] - c[2]);
    return S > b && S > C || C > b && C > S;
  }
  return g.derive(() => {
    var _a;
    if (t.deformedShape.val, t.elemColumns.val, t.elemBeams.val, !t.elements.val) return;
    const c = t.elemColumns.rawVal, V = t.elemBeams.rawVal, b = a.val, C = ((_a = e.elements) == null ? void 0 : _a.val) || [], S = C.filter((d) => {
      if (d.length !== 2) return true;
      const l = b[d[0]], y = b[d[1]];
      if (!l || !y) return true;
      const x = m(l, y);
      return !(x && !c || !x && !V);
    }).map((d) => tt(d).map((l) => [...b[l[0]], ...b[l[1]]]).flat()).flat();
    i.geometry.setAttribute("position", new W(S, 3));
    const F = [], u = [];
    function v(d, l, y, x) {
      const f = [l[0] - d[0], l[1] - d[1], l[2] - d[2]], z = [x[0] - d[0], x[1] - d[1], x[2] - d[2]], M = f[1] * z[2] - f[2] * z[1], A = f[2] * z[0] - f[0] * z[2], P = f[0] * z[1] - f[1] * z[0], E = Math.sqrt(M * M + A * A + P * P);
      return E < 1e-12 ? false : Math.abs(P / E) < 0.5;
    }
    for (const d of C) if (d.length === 3) {
      const [l, y, x] = d;
      if (b[l] && b[y] && b[x]) {
        F.push(...b[l], ...b[y], ...b[x]);
        for (let f = 0; f < 3; f++) u.push(p.r, p.g, p.b);
      }
    } else if (d.length === 4) {
      const [l, y, x, f] = d;
      if (b[l] && b[y] && b[x] && b[f]) {
        const z = v(b[l], b[y], b[x], b[f]) ? h : w;
        F.push(...b[l], ...b[y], ...b[x]), F.push(...b[l], ...b[x], ...b[f]);
        for (let M = 0; M < 6; M++) u.push(z.r, z.g, z.b);
      }
    }
    F.length > 0 ? (s.geometry.dispose(), s.geometry = new R(), s.geometry.setAttribute("position", new W(F, 3)), s.geometry.setAttribute("color", new W(u, 3)), s.geometry.computeVertexNormals(), s.visible = true) : s.visible = false;
  }), g.derive(() => {
    n.visible = t.elements.val;
  }), n;
}
function tt(e) {
  if (e.length === 2) return [e];
  const t = [];
  for (let a = 0; a < e.length; a++) t.push([e[a], e[(a + 1) % e.length]]);
  return t;
}
function ze(e) {
  const t = D(), a = new Ye(e, 20, t.grid, t.grid);
  return a.position.set(0.5 * e, 0.5 * e, 0), a.rotateX(Math.PI / 2), a;
}
function nt(e, t, a, o) {
  const n = new k(), i = new Xe(0.5, 0.5, 0.5), r = new $({ color: 10166822 });
  return g.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, !t.supports.val) return;
    n.clear();
    const s = 0.05 * t.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((h, w) => {
      const p = a.val[w];
      if (!p) return;
      const m = new H(i, r);
      m.position.set(...p);
      const c = s * o.rawVal;
      m.scale.set(c, c, c), n.add(m);
    });
  }), g.derive(() => {
    if (o.val, !t.supports.rawVal) return;
    const h = 0.05 * t.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((w) => w.scale.set(h, h, h));
  }), g.derive(() => {
    n.visible = t.supports.val;
  }), n;
}
function ot(e, t, a, o) {
  const n = new k();
  n.name = "loadsGroup";
  function i(r) {
    if (r.length < 2) return 0.12 * t.gridSize.rawVal;
    const s = [1 / 0, 1 / 0, 1 / 0], h = [-1 / 0, -1 / 0, -1 / 0];
    for (const p of r) for (let m = 0; m < 3; m++) s[m] = Math.min(s[m], p[m]), h[m] = Math.max(h[m], p[m]);
    return 0.08 * Math.max(h[0] - s[0], h[1] - s[1], h[2] - s[2], 0.1);
  }
  return g.derive(() => {
    var _a, _b, _c;
    if (t.deformedShape.val, !t.loads.val) return;
    n.children.forEach((h) => h.dispose()), n.clear();
    const r = a.val, s = i(r);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((h, w) => {
      const p = r[w];
      if (!p) return;
      const m = new T(...h.slice(0, 3));
      if (m.lengthSq() < 1e-30) return;
      m.normalize();
      const c = new Q(m, new T(...p), 1, 15637248, 0.3, 0.3), V = s * o.rawVal;
      c.scale.set(V, V, V), n.add(c);
    });
  }), g.derive(() => {
    if (o.val, !t.loads.rawVal) return;
    const s = i(a.rawVal) * o.rawVal;
    n.children.forEach((h) => h.scale.set(s, s, s));
  }), g.derive(() => {
    n.visible = t.loads.val;
  }), n;
}
function st(e, t, a) {
  const o = new k();
  return g.derive(() => {
    if (!e.nodesIndexes.val) return;
    o.children.forEach((i) => i.dispose()), o.clear();
    const n = 0.05 * e.gridSize.val * 0.6;
    t.val.forEach((i, r) => {
      const s = new Z(`${r}`);
      s.position.set(...i), s.updateScale(n * a.rawVal), o.add(s);
    });
  }), g.derive(() => {
    if (a.val, !e.nodesIndexes.rawVal) return;
    const n = 0.05 * e.gridSize.val * 0.6;
    o.children.forEach((i) => i.updateScale(n * a.rawVal));
  }), g.derive(() => {
    o.visible = e.nodesIndexes.val;
  }), o;
}
function it(e, t, a, o) {
  const n = new k();
  return g.derive(() => {
    var _a;
    if (t.deformedShape.val, !t.elementsIndexes.val) return;
    n.children.forEach((r) => r.dispose()), n.clear();
    const i = 0.05 * t.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((r, s) => {
      const h = new Z(`${s}`, void 0, "#001219");
      h.position.set(...at(r.map((w) => a.rawVal[w]))), h.updateScale(i * o.rawVal), n.add(h);
    });
  }), g.derive(() => {
    if (o.val, !t.elementsIndexes.rawVal) return;
    const i = 0.05 * t.gridSize.val * 0.6;
    n.children.forEach((r) => r.updateScale(i * o.rawVal));
  }), g.derive(() => {
    n.visible = t.elementsIndexes.val;
  }), n;
}
function at(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), a = e.length;
  return [t[0] / a, t[1] / a, t[2] / a];
}
function rt(e, t) {
  const a = new k(), o = 0.05 * e * 1, n = D(), i = new Z("X", "red", "transparent"), r = new Z(t ? "Z" : "Y", "green", "transparent"), s = new Z(t ? "Y" : "Z", "blue", "transparent"), h = new Q(new T(1, 0, 0), new T(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), w = new Q(new T(0, 1, 0), new T(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), p = new Q(new T(0, 0, 1), new T(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return i.position.set(1.3 * o, 0, 0), r.position.set(0, 1.3 * o, 0), s.position.set(0, 0, 1.3 * o), i.updateScale(0.4 * o), r.updateScale(0.4 * o), s.updateScale(0.4 * o), h.scale.set(o, o, o), w.scale.set(o, o, o), p.scale.set(o, o, o), a.add(h, w, p, i, r, s), a;
}
function Me(e, t) {
  const a = new T(...e), n = new T(...t).clone().sub(a), i = n.length(), r = n.dot(new T(1, 0, 0)) / i, s = n.dot(new T(0, 1, 0)) / i, h = n.dot(new T(0, 0, 1)) / i, w = Math.sqrt(r ** 2 + s ** 2);
  let p = new xe().fromArray([[r, s, h], [-s / w, r / w, 0], [-r * h / w, -s * h / w, w]].flat());
  return h === 1 && (p = new xe().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), h === -1 && (p = new xe().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Ie().setFromMatrix3(p);
}
function ge(e, t) {
  return e == null ? void 0 : e.map((a, o) => (9 * a + t[o]) / 10);
}
function j(e) {
  const t = e.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), a = e.length;
  return [t[0] / a, t[1] / a, t[2] / a];
}
function lt(e, t, a) {
  const o = j([t, a]), n = j([e, a]), i = j([e, t]), r = new T(...o).sub(new T(...n)).normalize(), s = new T(...a).sub(new T(...i)).normalize(), h = r.clone().cross(s).normalize(), w = h.clone().cross(r).normalize();
  return new Ie().makeBasis(r, w, h);
}
function ct(e, t, a, o) {
  const n = new k(), i = new R(), r = new J({ vertexColors: true }), s = [0, 0, 0], h = [1, 0, 0], w = [0, 1, 0], p = [0, 0, 1];
  i.setAttribute("position", new W([...s, ...h, ...s, ...w, ...s, ...p], 3));
  const m = [255, 0, 0], c = [0, 255, 0], V = [0, 0, 255];
  return i.setAttribute("color", new W([...m, ...m, ...c, ...c, ...V, ...V], 3)), g.derive(() => {
    var _a;
    t.deformedShape.val, t.orientations.val && (n.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((b) => {
      const C = new Ae(i, r), S = a.rawVal[b[0]], F = a.rawVal[b[1]];
      if (b.length === 2 && (C.position.set(...ge(S, F)), C.rotation.setFromRotationMatrix(Me(S, F))), b.length === 3) {
        const d = a.rawVal[b[2]];
        C.position.set(...j([S, F, d])), C.rotation.setFromRotationMatrix(lt(S, F, d));
      }
      const v = 0.05 * t.gridSize.rawVal * 0.75 * o.rawVal;
      C.scale.set(v, v, v), n.add(C);
    }));
  }), g.derive(() => {
    if (o.val, !t.orientations.rawVal) return;
    const C = 0.05 * t.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((S) => S.scale.set(C, C, C));
  }), g.derive(() => {
    n.visible = t.orientations.val;
  }), n;
}
function dt(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const t = (e.b * 100).toFixed(0), a = (e.h * 100).toFixed(0);
    return `${t}x${a}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function ht(e, t, a, o) {
  const n = new k();
  function i(C, S) {
    const F = C / 2, u = S / 2, v = new Float32Array([0, -F, -u, 0, F, -u, 0, F, u, 0, -F, -u, 0, F, u, 0, -F, u]), d = new R();
    d.setAttribute("position", new _(v, 3));
    const l = new Float32Array([0, -F, -u, 0, F, -u, 0, F, u, 0, -F, u, 0, -F, -u]), y = new R();
    return y.setAttribute("position", new _(l, 3)), { fill: d, outline: y };
  }
  function r(C, S = 24) {
    const F = C / 2, u = new Float32Array(S * 9);
    for (let y = 0; y < S; y++) {
      const x = y / S * Math.PI * 2, f = (y + 1) / S * Math.PI * 2;
      u[y * 9] = 0, u[y * 9 + 1] = 0, u[y * 9 + 2] = 0, u[y * 9 + 3] = 0, u[y * 9 + 4] = F * Math.cos(x), u[y * 9 + 5] = F * Math.sin(x), u[y * 9 + 6] = 0, u[y * 9 + 7] = F * Math.cos(f), u[y * 9 + 8] = F * Math.sin(f);
    }
    const v = new R();
    v.setAttribute("position", new _(u, 3));
    const d = new Float32Array((S + 1) * 3);
    for (let y = 0; y <= S; y++) {
      const x = y / S * Math.PI * 2;
      d[y * 3] = 0, d[y * 3 + 1] = F * Math.cos(x), d[y * 3 + 2] = F * Math.sin(x);
    }
    const l = new R();
    return l.setAttribute("position", new _(d, 3)), { fill: v, outline: l };
  }
  function s(C, S, F, u) {
    const v = F ?? S * 0.08, d = u ?? C * 0.07, l = C / 2, y = S / 2, x = y - v, f = d / 2, z = [];
    function M(I, B, Y, X) {
      z.push(0, I, B, 0, Y, B, 0, Y, X, 0, I, B, 0, Y, X, 0, I, X);
    }
    M(-l, -y, l, -x), M(-f, -x, f, x), M(-l, x, l, y);
    const A = new R();
    A.setAttribute("position", new _(new Float32Array(z), 3));
    const P = new Float32Array([0, -l, -y, 0, l, -y, 0, l, -x, 0, f, -x, 0, f, x, 0, l, x, 0, l, y, 0, -l, y, 0, -l, x, 0, -f, x, 0, -f, -x, 0, -l, -x, 0, -l, -y]), E = new R();
    return E.setAttribute("position", new _(P, 3)), { fill: A, outline: E };
  }
  function h(C, S, F) {
    const u = C / 2, v = S / 2, d = u - F, l = v - F, y = [];
    function x(A, P, E, I) {
      y.push(0, A, P, 0, E, P, 0, E, I, 0, A, P, 0, E, I, 0, A, I);
    }
    x(-u, -v, u, -l), x(-u, l, u, v), x(-u, -l, -d, l), x(d, -l, u, l);
    const f = new R();
    f.setAttribute("position", new _(new Float32Array(y), 3));
    const z = new Float32Array([0, -u, -v, 0, u, -v, 0, u, -v, 0, u, v, 0, u, v, 0, -u, v, 0, -u, v, 0, -u, -v, 0, -d, -l, 0, d, -l, 0, d, -l, 0, d, l, 0, d, l, 0, -d, l, 0, -d, l, 0, -d, -l]), M = new R();
    return M.setAttribute("position", new _(z, 3)), { fill: f, outline: M };
  }
  function w(C, S, F) {
    const u = C / 2, v = S / 2, d = u - F, l = v - F, y = new R(), x = new Float32Array([0, -d, -l, 0, d, -l, 0, d, l, 0, -d, -l, 0, d, l, 0, -d, l]);
    y.setAttribute("position", new _(x, 3));
    const f = [];
    function z(E, I, B, Y) {
      f.push(0, E, I, 0, B, I, 0, B, Y, 0, E, I, 0, B, Y, 0, E, Y);
    }
    z(-u, -v, u, -l), z(-u, l, u, v), z(-u, -l, -d, l), z(d, -l, u, l);
    const M = new R();
    M.setAttribute("position", new _(new Float32Array(f), 3));
    const A = new Float32Array([0, -u, -v, 0, u, -v, 0, u, -v, 0, u, v, 0, u, v, 0, -u, v, 0, -u, v, 0, -u, -v, 0, -d, -l, 0, d, -l, 0, d, -l, 0, d, l, 0, d, l, 0, -d, l, 0, -d, l, 0, -d, -l]), P = new R();
    return P.setAttribute("position", new _(A, 3)), { concFill: y, steelFillGeom: M, outline: P };
  }
  const p = new $({ color: 52479, transparent: true, opacity: 0.35, side: N, depthWrite: false }), m = new J({ color: 52479 }), c = new $({ color: 16750848, transparent: true, opacity: 0.4, side: N, depthWrite: false }), V = new J({ color: 16750848 });
  function b(C, S) {
    const F = Math.abs(S[0] - C[0]), u = Math.abs(S[1] - C[1]), v = Math.abs(S[2] - C[2]);
    return v > F && v > u || u > F && u > v;
  }
  return g.derive(() => {
    var _a, _b;
    t.deformedShape.val, t.secColumns.val, t.secBeams.val, t.secFloor.val;
    const C = t.secColumns.rawVal, S = t.secBeams.rawVal;
    if (!C && !S) {
      n.children.forEach((l) => {
        l instanceof Z && l.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((l) => {
      l instanceof Z && l.dispose();
    }), n.clear();
    const F = (_a = e.elements) == null ? void 0 : _a.val, u = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!F || !u) return;
    const v = u.sectionShapes, d = t.secFloor.rawVal;
    F.forEach((l, y) => {
      if (l.length !== 2) return;
      const x = a.rawVal[l[0]], f = a.rawVal[l[1]];
      if (!x || !f) return;
      const z = b(x, f);
      if (z && !C || !z && !S) return;
      if (d >= 0) {
        const I = Math.min(x[1], f[1]);
        Math.max(x[1], f[1]);
        const B = t.gridSize.rawVal || 3;
        if (Math.floor(I / B + 0.01) !== d) return;
      }
      const M = v == null ? void 0 : v.get(y);
      if (!M) return;
      const A = [(x[0] + f[0]) / 2, (x[1] + f[1]) / 2, (x[2] + f[2]) / 2], P = Me(x, f);
      if (M.type === "CFT") {
        const I = w(M.b, M.h, M.tw ?? M.b * 0.05), B = new H(I.concFill, p);
        B.position.set(...A), B.rotation.setFromRotationMatrix(P), n.add(B);
        const Y = new H(I.steelFillGeom, c);
        Y.position.set(...A), Y.rotation.setFromRotationMatrix(P), n.add(Y);
        const X = new O(I.outline, V);
        X.position.set(...A), X.rotation.setFromRotationMatrix(P), n.add(X);
      } else {
        let I, B, Y;
        switch (M.type) {
          case "rect":
            I = i(M.b, M.h), B = p, Y = m;
            break;
          case "circ":
            I = r(M.d), B = p, Y = m;
            break;
          case "I":
            I = s(M.b, M.h, M.tf, M.tw), B = c, Y = V;
            break;
          case "HSS":
            I = h(M.b, M.h, M.tw ?? M.b * 0.05), B = c, Y = V;
            break;
          default:
            return;
        }
        const X = new H(I.fill, B);
        X.position.set(...A), X.rotation.setFromRotationMatrix(P), n.add(X);
        const U = new O(I.outline, Y);
        U.position.set(...A), U.rotation.setFromRotationMatrix(P), n.add(U);
      }
      const E = dt(M);
      if (E) {
        const I = M.type === "I" || M.type === "HSS" || M.type === "CFT" ? "#ff9900" : "#00ccff", B = new Z(E, I, "transparent");
        B.position.set(A[0], A[1], A[2]);
        const Y = 0.05 * t.gridSize.rawVal * 0.5;
        B.updateScale(Y * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(B);
      }
    });
  }), o && g.derive(() => {
    if (o.val, !t.sections.rawVal) return;
    const C = 0.05 * t.gridSize.val * 0.5;
    n.children.forEach((S) => {
      S instanceof Z && S.updateScale(C * o.rawVal);
    });
  }), g.derive(() => {
    n.visible = t.sections.val;
  }), n;
}
class ie extends k {
  constructor(t, a, o, n, i, r, s) {
    super();
    const h = new le().moveTo(0, 0).lineTo(0, r[1]).lineTo(o, r[1]).lineTo(o, 0).lineTo(0, 0), w = h.getPoints(), p = new R().setFromPoints(w);
    this.lines = new O(p, new J({ color: D().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), s && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const m = new ce(h), c = new $({ color: r[1] > 0 ? 24435 : 11411474, side: N });
    this.mesh = new H(m, c), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), s && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Z(`${i[1].toFixed(4)}`), this.normalizedResult = r, this.textPosition = j([t, a]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(t) {
    this.lines.scale.set(1, t * 2, 1), this.mesh.scale.set(1, t * 2, 1), this.text.updateScale(t * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * t);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Pe extends k {
  constructor(t, a, o, n, i, r, s) {
    super();
    const h = i[0] * o / (i[0] + i[1]), w = i[0] * i[1] > 0;
    if (this.text = new Z(`${i[0].toFixed(4)}`), this.text2 = new Z(`${(i[1] * -1).toFixed(4)}`), this.normalizedResult = r, this.textPosition = ge(t, a), this.text2Position = ge(a, t), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), w) {
      const p = new le().moveTo(0, 0).lineTo(0, r[0]).lineTo(h, 0).lineTo(0, 0), m = new le().moveTo(h, 0).lineTo(o, -r[1]).lineTo(o, 0).lineTo(h, 0), c = p.getPoints(), V = m.getPoints(), b = new R().setFromPoints(c), C = new R().setFromPoints(V), S = new J({ color: D().resultOutline });
      this.lines = new O(b, S), this.lines2 = new O(C, S), this.lines.position.set(...t), this.lines2.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), s && this.lines.rotateX(Math.PI / 2), s && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const F = new ce(p), u = new ce(m), v = new $({ color: r[0] > 0 ? 24435 : 11411474, side: N }), d = new $({ color: -r[1] > 0 ? 24435 : 11411474, side: N });
      this.mesh = new H(F, v), this.mesh2 = new H(u, d), this.mesh.position.set(...t), this.mesh2.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), s && this.mesh.rotateX(Math.PI / 2), s && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const p = new le().moveTo(0, 0).lineTo(0, r[0]).lineTo(o, -r[1]).lineTo(o, 0).lineTo(0, 0), m = p.getPoints(), c = new R().setFromPoints(m);
      this.lines = new O(c, new J({ color: D().resultOutline })), this.lines.position.set(...t), this.lines.rotation.setFromRotationMatrix(n), s && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const V = new ce(p), b = new $({ color: r[0] > 0 ? 24435 : 11411474, side: N });
      this.mesh = new H(V, b), this.mesh.position.set(...t), this.mesh.rotation.setFromRotationMatrix(n), s && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Ee = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Ee || {});
function ut(e, t, a, o) {
  const n = new k(), i = { normals: ie, shearsY: ie, shearsZ: ie, torsions: ie, bendingsY: Pe, bendingsZ: Pe };
  return g.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, a.val, t.frameResults.val == "none") return;
    n.children.forEach((s) => s.dispose()), n.clear();
    const r = Ee[t.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[r]) == null ? void 0 : _b.forEach((s, h) => {
      var _a2, _b2;
      const w = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[h]) ?? [0, 1], p = a.rawVal[w[0]], m = a.rawVal[w[1]], c = new T(...m).distanceTo(new T(...p)), V = pt((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[r]), b = s == null ? void 0 : s.map((u) => u / (V === 0 ? 1 : V)), C = Me(p, m), S = new i[r](p, m, c, C, s ?? [0, 0], b ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(r)), F = 0.05 * t.gridSize.rawVal;
      S.updateScale(F * o.rawVal), n.add(S);
    });
  }), g.derive(() => {
    if (o.val, t.frameResults.rawVal == "none") return;
    const r = 0.05 * t.gridSize.val;
    n.children.forEach((s) => s.updateScale(r * o.rawVal));
  }), g.derive(() => {
    n.visible = t.frameResults.val != "none";
  }), n;
}
function pt(e) {
  let t = 0;
  return e == null ? void 0 : e.forEach((a) => {
    const o = Math.max(...a ?? [0, 0]);
    o > t && (t = o);
  }), t;
}
class mt extends k {
  constructor(t, a, o) {
    super();
    const n = a === be.reactions;
    o[0] && (this.xText1 = new Z(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new Z(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new Z(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new Z(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new Z(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new Z(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new Q(new T(1, 0, 0), new T(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new Q(new T(0, 1, 0), new T(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new Q(new T(0, 0, 1), new T(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...t), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var be = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(be || {});
function ft(e, t, a, o) {
  const n = new k();
  return g.derive(() => {
    var _a, _b;
    if (t.deformedShape.val, t.nodeResults.val == "none") return;
    n.children.forEach((s) => s.dispose()), n.clear();
    const i = be[t.nodeResults.rawVal], r = 0.05 * t.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[i]) == null ? void 0 : _b.forEach((s, h) => {
      const w = new mt(a.rawVal[h], i, s ?? [0, 0, 0, 0, 0, 0]);
      w.updateScale(r * o.rawVal), n.add(w);
    });
  }), g.derive(() => {
    if (o.val, t.nodeResults.rawVal == "none") return;
    const i = 0.05 * t.gridSize.val;
    n.children.forEach((r) => r.updateScale(i * o.rawVal));
  }), g.derive(() => {
    n.visible = t.nodeResults.val != "none";
  }), n;
}
function wt({ drawingObj: e, gridObj: t, scene: a, camera: o, controls: n, gridSize: i, derivedDisplayScale: r, rendererElm: s, viewerRender: h }) {
  const w = new Le(), p = new Ze(), m = new H(new We(i, i), new $({ side: N })), c = new ae(new R(), new re()), V = new ae(new R(), new re({ color: "gray" })), b = new ae(new R(), new re({ color: "orange", size: 0.8 }));
  a.add(b), c.geometry.setAttribute("position", new W(e.points.rawVal.flat(), 3)), c.geometry.computeBoundingSphere(), c.frustumCulled = false, V.frustumCulled = false, a.add(V), m.position.set(0.5 * i, 0.5 * i, 0), m.rotateX(Math.PI / 2), m.geometry.rotateX(Math.PI / 2), m.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), g.derive(() => {
    e.gridTarget && (xt(t, { position: new T(...e.gridTarget.val.position), quaternion: new ke().setFromEuler(new Ce(...e.gridTarget.val.rotation)) }, h), m.position.set(...e.gridTarget.val.position), m.quaternion.setFromEuler(new Ce(...e.gridTarget.val.rotation)), m.updateMatrixWorld());
  }), g.derive(() => {
    c.geometry.setAttribute("position", new W(e.points.val.flat(), 3)), c.geometry.computeBoundingSphere();
  }), g.derive(() => {
    const v = 0.05 * i * 0.5 * r.val;
    V.material.size = v, w.params.Points.threshold = 0.4 * v;
  }), g.derive(() => {
    var _a;
    const v = e.points.val ?? [], l = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], y = [];
    for (const f of l) {
      const [z, M, A] = v[f];
      y.push(z, M, A);
    }
    const x = new R();
    x.setAttribute("position", new W(y, 3)), b.geometry.dispose(), b.geometry = x;
  });
  let C = false, S = 0;
  s.addEventListener("pointerdown", () => {
    C = true;
  }), s.addEventListener("pointerup", () => {
    C = false;
  }), s.addEventListener("pointermove", () => {
    C && S++;
  }), s.addEventListener("click", (v) => {
    if (S > 5) {
      S = 0;
      return;
    }
    S = 0, p.x = v.clientX / window.innerWidth * 2 - 1, p.y = -(v.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(p, o);
    const d = w.intersectObject(m);
    if (d.length) {
      let l = d[0].point;
      (v.ctrlKey || v.metaKey) && (l = new T(Math.round(d[0].point.x), Math.round(d[0].point.y), Math.round(d[0].point.z))), e.points.val = [...e.points.rawVal, l.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]);
    }
  }), s.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), s.addEventListener("pointermove", (v) => {
    p.x = v.clientX / window.innerWidth * 2 - 1, p.y = -(v.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(p, o);
    const d = w.intersectObject(m);
    if (V.geometry.deleteAttribute("position"), d.length) {
      let l = d[0].point;
      (v.ctrlKey || v.metaKey) && (l = new T(Math.round(d[0].point.x), Math.round(d[0].point.y), Math.round(d[0].point.z))), V.geometry.setAttribute("position", new W(l.toArray(), 3));
    }
    h();
  }), s.addEventListener("pointermove", (v) => {
    var _a;
    p.x = v.clientX / window.innerWidth * 2 - 1, p.y = -(v.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(p, o);
    let d = false;
    const l = w.intersectObject(c), y = w.intersectObject(m);
    if (l.length && y.length) {
      const x = new T(...e.points.rawVal[l[0].index]), f = new T(...y[0].point), z = x.sub(f), M = (_a = y[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(m.matrixWorld), Math.abs(z.dot(M)) < 1e-4 && (d = true);
    }
    V.visible = !d;
  });
  let F = false, u;
  s.addEventListener("pointermove", (v) => {
    var _a;
    if (!S) return;
    p.x = v.clientX / window.innerWidth * 2 - 1, p.y = -(v.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(p, o);
    let d = false;
    const l = w.intersectObject(c), y = w.intersectObject(m);
    if (l.length && y.length) {
      const f = new T(...e.points.rawVal[l[0].index]), z = new T(...y[0].point), M = f.sub(z), A = (_a = y[0].face) == null ? void 0 : _a.normal;
      A.transformDirection(m.matrixWorld), Math.abs(M.dot(A)) < 1e-4 && (d = true);
    }
    if (d && S < 5 && (F = true, n.enabled = false, u = l[0].index), !F || S % 2 !== 0) return;
    const x = [...e.points.rawVal];
    if (u !== void 0) {
      let f = y[0].point;
      (v.ctrlKey || v.metaKey) && (f = new T(Math.round(f.x), Math.round(f.y), Math.round(f.z))), x[u] = f.toArray();
    }
    e.points.val = x;
  }), s.addEventListener("pointerup", () => {
    n.enabled = true, F = false;
  }), s.addEventListener("contextmenu", (v) => {
    var _a;
    p.x = v.clientX / window.innerWidth * 2 - 1, p.y = -(v.clientY / window.innerHeight) * 2 + 1, w.setFromCamera(p, o);
    let d = false;
    const l = w.intersectObject(c), y = w.intersectObject(m);
    if (l.length && y.length) {
      const z = new T(...e.points.rawVal[l[0].index]), M = new T(...y[0].point), A = z.sub(M), P = (_a = y[0].face) == null ? void 0 : _a.normal;
      P.transformDirection(m.matrixWorld), Math.abs(A.dot(P)) < 1e-4 && (d = true);
    }
    if (!d) return;
    const x = [...e.points.rawVal];
    if (x.splice(l[0].index, 1), e.points.val = x, !e.polylines) return;
    const f = e.polylines.rawVal.map((z) => z.filter((M) => M !== l[0].index)).map((z) => z.map((M) => M > l[0].index ? M - 1 : M)).filter((z) => z.length);
    f.push([]), e.polylines.val = f;
  });
}
function xt(e, t, a) {
  const i = Math.round(14.999999999999998), r = { position: e.position.clone(), quaternion: e.quaternion.clone() }, s = setInterval(w, 1e3 / 30);
  let h = 0;
  function w() {
    h++;
    const p = h / i;
    e.position.lerpVectors(r.position, t.position, p), e.quaternion.slerpQuaternions(r.quaternion, t.quaternion, p), a && a(), h == i && clearInterval(s);
  }
}
class Be {
  constructor(t, a = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(t, a);
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
  setColorMap(t, a = 32) {
    this.map = ve[t] || ve.rainbow, this.n = a;
    const o = 1 / this.n, n = new L(), i = new L();
    this.lut.length = 0, this.lut.push(new L(this.map[0][1]));
    for (let r = 1; r < a; r++) {
      const s = r * o;
      for (let h = 0; h < this.map.length - 1; h++) if (s > this.map[h][0] && s <= this.map[h + 1][0]) {
        const w = this.map[h][0], p = this.map[h + 1][0];
        n.setHex(this.map[h][1], se), i.setHex(this.map[h + 1][1], se);
        const m = new L().lerpColors(n, i, (s - w) / (p - w));
        this.lut.push(m);
      }
    }
    return this.lut.push(new L(this.map[this.map.length - 1][1])), this;
  }
  copy(t) {
    return this.lut = t.lut, this.map = t.map, this.n = t.n, this.minV = t.minV, this.maxV = t.maxV, this;
  }
  getColor(t) {
    t = He.clamp(t, this.minV, this.maxV), t = (t - this.minV) / (this.maxV - this.minV);
    const a = Math.round(t * this.n);
    return this.lut[a];
  }
  addColorMap(t, a) {
    return ve[t] = a, this;
  }
  createCanvas() {
    const t = document.createElement("canvas");
    return t.width = 1, t.height = this.n, this.updateCanvas(t), t;
  }
  updateCanvas(t) {
    const a = t.getContext("2d", { alpha: false }), o = a.getImageData(0, 0, 1, this.n), n = o.data;
    let i = 0;
    const r = 1 / this.n, s = new L(), h = new L(), w = new L();
    for (let p = 1; p >= 0; p -= r) for (let m = this.map.length - 1; m >= 0; m--) if (p < this.map[m][0] && p >= this.map[m - 1][0]) {
      const c = this.map[m - 1][0], V = this.map[m][0];
      s.setHex(this.map[m - 1][1], se), h.setHex(this.map[m][1], se), w.lerpColors(s, h, (p - c) / (V - c)), n[i * 4] = Math.round(w.r * 255), n[i * 4 + 1] = Math.round(w.g * 255), n[i * 4 + 2] = Math.round(w.b * 255), n[i * 4 + 3] = 255, i += 1;
    }
    return a.putImageData(o, 0, 0), t;
  }
}
const ve = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function vt(e, t, a) {
  const o = new Be(), n = new L(), i = new H(new R(), new $({ side: N, vertexColors: true }));
  return o.setColorMap("rainbow"), i.renderOrder = -1, i.frustumCulled = false, g.derive(() => {
    i.geometry.setAttribute("position", new W(e.val.flat(), 3));
    const r = [];
    for (const s of t.val) s.length === 3 ? r.push(s[0], s[1], s[2]) : s.length === 4 && (r.push(s[0], s[1], s[2]), r.push(s[0], s[2], s[3]));
    i.geometry.setIndex(new _e(r, 1)), i.geometry.setAttribute("color", new W(e.val.map(() => [0, 0, 0]).flat(), 3)), o.setMax(Math.max(...a.val)), o.setMin(Math.min(...a.val));
    for (let s = 0; s < a.val.length; s++) {
      const h = o.getColor(a.val[s]) ?? new L(0, 0, 0);
      n.copy(h).convertSRGBToLinear(), n.multiplyScalar(0.6), i.geometry.attributes.color.setXYZ(s, n.r, n.g, n.b);
    }
  }), i;
}
function yt(e, t, a, o) {
  const n = vt(a, e.elements, o);
  return g.derive(() => {
    n.visible = t.shellResults.val != "none";
  }), n;
}
const gt = 6, ye = 10, Mt = 0.012;
function bt(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Ft(e, t, a, o) {
  if (!a && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && a) {
    const i = a[e];
    if (i && i.has(t)) return i.get(t);
  }
  return null;
}
function Vt(e, t, a, o) {
  const n = new k(), i = new Be();
  i.setColorMap("rainbow");
  const r = new L(), s = g.state([]);
  return g.derive(() => {
    var _a, _b, _c;
    t.deformedShape.val;
    const h = a.val, w = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], p = bt(t.frameResults.val);
    if (n.children.forEach((P) => {
      P.geometry && P.geometry.dispose(), P.material && P.material.dispose();
    }), n.clear(), !p || w.length === 0 || h.length === 0) {
      s.val = [];
      return;
    }
    const m = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, c = (_c = e.deformOutputs) == null ? void 0 : _c.val, V = [], b = [];
    for (let P = 0; P < w.length; P++) {
      if (w[P].length !== 2) continue;
      const I = Ft(p, P, m, c);
      I && (V.push(I[0], I[1]), b.push({ idx: P, vals: I }));
    }
    if (V.length === 0) {
      s.val = [];
      return;
    }
    const C = Math.min(...V), S = Math.max(...V);
    i.setMin(C), i.setMax(S), s.val = V;
    const F = [1 / 0, 1 / 0, 1 / 0], u = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of h) for (let E = 0; E < 3; E++) F[E] = Math.min(F[E], P[E]), u[E] = Math.max(u[E], P[E]);
    const d = Math.max(u[0] - F[0], u[1] - F[1], u[2] - F[2], 1) * Mt, l = [], y = [], x = [];
    let f = 0;
    for (const { idx: P, vals: E } of b) {
      const I = w[P], B = h[I[0]], Y = h[I[1]];
      if (!B || !Y) continue;
      const X = new T(Y[0] - B[0], Y[1] - B[1], Y[2] - B[2]), U = X.length();
      if (U < 1e-10) continue;
      X.normalize();
      const Re = Math.abs(X.y) < 0.99 ? new T(0, 1, 0) : new T(1, 0, 0), ee = new T().crossVectors(X, Re).normalize(), he = new T().crossVectors(X, ee).normalize(), Fe = ye + 1, K = gt;
      for (let G = 0; G < Fe; G++) {
        const q = G / ye, te = B[0] + X.x * U * q, ne = B[1] + X.y * U * q, ue = B[2] + X.z * U * q, pe = E[0] + (E[1] - E[0]) * q, oe = i.getColor(pe) ?? new L(0, 0, 0);
        r.copy(oe).convertSRGBToLinear();
        for (let me = 0; me < K; me++) {
          const Ve = me / K * Math.PI * 2, fe = Math.cos(Ve), we = Math.sin(Ve);
          l.push(te + (ee.x * fe + he.x * we) * d, ne + (ee.y * fe + he.y * we) * d, ue + (ee.z * fe + he.z * we) * d), y.push(r.r, r.g, r.b);
        }
      }
      for (let G = 0; G < ye; G++) for (let q = 0; q < K; q++) {
        const te = (q + 1) % K, ne = f + G * K + q, ue = f + G * K + te, pe = f + (G + 1) * K + q, oe = f + (G + 1) * K + te;
        x.push(ne, ue, oe), x.push(ne, oe, pe);
      }
      f += Fe * K;
    }
    if (l.length === 0) return;
    const z = new R();
    z.setAttribute("position", new W(l, 3)), z.setAttribute("color", new W(y, 3)), z.setIndex(x), z.computeVertexNormals();
    const M = new $({ vertexColors: true, side: N }), A = new H(z, M);
    A.frustumCulled = false, n.add(A);
  }), n.__colorMapValues = s, n;
}
function Te(e, t = 8) {
  const a = document.createElement("div");
  a.id = "legend";
  const o = Array.from({ length: t + 1 }, (s, h) => h / t).reverse();
  let n, i;
  o.forEach((s, h) => {
    n = document.createElement("div"), n.id = `marker-${h}`, n.className = "marker", n.style.marginTop = h == 0 ? "0px" : `calc(${50 / t}vh - 1px)`, i = document.createElement("p"), i.id = `marker-text-${h}`, n.append(i), a.append(n);
  });
  const r = [];
  return a.querySelectorAll("p").forEach((s) => r.push(s)), setTimeout(() => {
    g.derive(() => {
      o.forEach((s, h) => {
        const w = r[h];
        w && (w.innerText = Ct(e.val, s).toString());
      });
    });
  }), a;
}
function Ct(e, t) {
  const a = Math.max(...e) - Math.min(...e);
  return (Math.min(...e) + t * a).toPrecision(3);
}
function It({ mesh: e, settingsObj: t, drawingObj: a, objects3D: o, solids: n }) {
  De.DEFAULT_UP = new T(0, 0, 1);
  const i = document.createElement("div"), r = new $e(), s = new Ge(45, 1, 0.1, 2 * 1e6), h = new qe(-10, 10, 10, -10, -1e3, 2e6);
  let w = s;
  const p = new Ne({ antialias: true });
  p.localClippingEnabled = true;
  const m = new Ke(s, p.domElement), c = Oe(t), V = g.derive(() => c.displayScale.val === 0 ? 1 : c.displayScale.val > 0 ? c.displayScale.val : -1 / c.displayScale.val), b = St(e, c);
  let C = ze(c.gridSize.rawVal);
  i.appendChild(Je(c, e, n)), i.setAttribute("id", "viewer"), i.appendChild(p.domElement), p.setPixelRatio(window.devicePixelRatio);
  const S = D();
  p.setClearColor(S.background, 1);
  const F = c.gridSize.rawVal, u = F * 0.5 + F * 0.5 / Math.tan(45 * 0.5);
  s.position.set(0.5 * F, 0.8 * -u, 0.5 * F), m.target.set(0.5 * F, 0.5 * F, 0), m.minDistance = 1, m.maxDistance = u * 2.5, m.zoomSpeed = 10, m.update(), r.add(C, rt(c.gridSize.rawVal, c.flipAxes.rawVal)), new ResizeObserver((x) => {
    var _a, _b;
    for (const f of x) {
      const z = (_a = f.target) == null ? void 0 : _a.clientWidth, M = (_b = f.target) == null ? void 0 : _b.clientHeight;
      if (z === 0 || M === 0) continue;
      s.aspect = z / M, s.updateProjectionMatrix();
      const A = z / M, P = h.top;
      h.left = -P * A, h.right = P * A, h.updateProjectionMatrix(), p.setSize(z, M), d();
    }
  }).observe(i), m.addEventListener("change", d), g.derive(() => {
    var _a, _b, _c, _d, _e2, _f;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, c.displayScale.val, c.nodes.val, c.elements.val, c.elemColumns.val, c.elemBeams.val, c.nodesIndexes.val, c.elementsIndexes.val, c.orientations.val, c.sections.val, c.secColumns.val, c.secBeams.val, c.secFloor.val, c.supports.val, c.loads.val, c.deformedShape.val, c.nodeResults.val, c.frameResults.val, c.shellResults.val, setTimeout(d);
  });
  function d() {
    p.render(r, w);
  }
  function l(x) {
    w = x, m.object = x, m.update(), d();
  }
  if (e) {
    r.add(je(c, b, V), et(e, c, b), st(c, b, V), it(e, c, b, V), nt(e, c, b, V), ot(e, c, b, V), ct(e, c, b, V), ht(e, c, b, V), ft(e, c, b, V), ut(e, c, b, V));
    const x = zt(e, c), f = yt(e, c, b, x), z = Te(x);
    r.add(f), i.appendChild(z);
    const M = Vt(e, c, b);
    r.add(M);
    const A = M.__colorMapValues, P = Te(A);
    P.id = "frame-legend", i.appendChild(P), g.derive(() => {
      const E = c.shellResults.val != "none", I = c.frameResults.val.startsWith("contour:");
      z.hidden = !E, f.visible = E, P.hidden = !I;
    });
  }
  if (n) {
    const x = new Ue(16777215, 0.5);
    r.add(x);
    const f = new Se(16777215, 0.5);
    f.position.set(30, 25, -10), f.shadow.mapSize.width = 1024, f.shadow.mapSize.height = 1024, r.add(f);
    const z = 10;
    f.shadow.camera.left = -10, f.shadow.camera.right = z, f.shadow.camera.top = z, f.shadow.camera.bottom = -10, f.shadow.camera.far = 1e3;
    const M = new Se(16777215, 0.5);
    M.color.setHSL(11, 43, 96), M.position.set(-10, 0, 30), r.add(M), g.derive(() => {
      (n == null ? void 0 : n.val.length) && (r.remove(...n.oldVal), r.add(...n.rawVal), d());
    }), g.derive(() => {
      n.rawVal.forEach((A) => A.visible = c.solids.val), d();
    });
  }
  o && g.derive(() => {
    (o == null ? void 0 : o.val.length) && (r.remove(...o.oldVal), r.add(...o.rawVal), d());
  }), a && wt({ drawingObj: a, gridObj: C, scene: r, camera: s, controls: m, gridSize: F, derivedDisplayScale: V, rendererElm: p.domElement, viewerRender: d }), de((x, f) => {
    p.setClearColor(f.background, 1), r.remove(C), C.geometry.dispose(), C.material.dispose(), C = ze(c.gridSize.rawVal), r.add(C), i.style.setProperty("--awatif-legend-color", f.legendMarker), d();
  });
  const y = { scene: r, perspCamera: s, orthoCamera: h, get camera() {
    return w;
  }, controls: m, renderer: p, rendererElm: p.domElement, render: d, setActiveCamera: l, settings: c };
  return i.__ctx = y, i;
}
function St(e, t) {
  return g.derive(() => {
    var _a, _b;
    return t.deformedShape.val ? ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val.map((a, o) => {
      var _a2, _b2, _c, _d;
      const n = ((_d = (_c = (_b2 = (_a2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _a2.val) == null ? void 0 : _b2.deformations) == null ? void 0 : _c.get(o)) == null ? void 0 : _d.slice(0, 3)) ?? [0, 0, 0];
      return a.map((i, r) => i + n[r]);
    })) ?? [] : ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [];
  });
}
function zt(e, t) {
  const a = g.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), g.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
    const n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), s = (p, m) => {
      p == null ? void 0 : p.forEach((c, V) => {
        const b = e.elements.val[V];
        if (b) for (let C = 0; C < b.length; C++) m.set(b[C], [c[C] ?? c[0]]);
      });
    };
    s((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), s((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, i), s((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, r);
    const h = { bendingXX: [n, 0], bendingYY: [i, 0], bendingXY: [r, 0], displacementX: [(_h = (_g = e.deformOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.deformations, 0], displacementY: [(_j = (_i = e.deformOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.deformations, 1], displacementZ: [(_l = (_k = e.deformOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.deformations, 2] }, w = [];
    e.nodes.val.forEach((p, m) => {
      const c = h[t.shellResults.val];
      if (!c || !c[0] || typeof c[0].has != "function") return;
      if (!c[0].has(m)) {
        w.push(0);
        return;
      }
      const V = c[0].get(m);
      w.push(V ? V[c[1]] ?? 0 : 0);
    }), a.val = w;
  }), a;
}
export {
  vt as a,
  Te as b,
  It as g
};
