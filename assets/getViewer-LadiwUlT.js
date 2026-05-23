import { Y as xn, B as re, Z as gn, F as ut, G as Ge, c as Dt, L as ct, e as et, D as Pt, d as qe, u as xt, m as oo, b as uo, V as S, z as Gt, H as gt, _ as Pn, r as so, a as _t, n as je, p as vn, $ as bn, k as fo, j as ho, s as fn, N as sn, S as Ot, a0 as Nn, f as Zn, h as Un, i as Kn, a1 as Wn, a2 as hn, a3 as mo, a4 as wo, a5 as yo, a6 as xo, a7 as go, g as Hn, a8 as Gn, C as qn, t as vo, v as bo, w as Mo, W as So, x as Jn, a9 as mn, J as Fn, A as ko, y as On, O as _o } from "./Text-CEhsqBUu.js";
import { v as R, P as ao, g as Wt, o as Mn } from "./theme-2eEBQPmF.js";
import "./styles-lf_LNy9d.js";
function Co(e, s, m) {
  const p = document.createElement("div"), r = new ao({ title: "Settings", expanded: true, container: p });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(r), p.setAttribute("id", "settings");
  const M = "hk_settingsPos";
  let v = null;
  try {
    const y = localStorage.getItem(M);
    y && (v = JSON.parse(y));
  } catch {
  }
  p.style.cssText = ["position:fixed", v ? `left:${v.left}px` : "left:8px", v ? `top:${v.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const f = () => {
    const y = p.querySelector(".tp-rotv_b");
    if (!y) {
      setTimeout(f, 200);
      return;
    }
    y.style.cursor = "move", y.style.userSelect = "none";
    let X = false, W = 0, H = 0, ce = 0, z = 0;
    y.addEventListener("mousedown", (ee) => {
      X = true, W = ee.clientX, H = ee.clientY;
      const ue = p.getBoundingClientRect();
      ce = ue.left, z = ue.top, p.style.left = `${ce}px`, p.style.top = `${z}px`;
    }), window.addEventListener("mousemove", (ee) => {
      if (!X) return;
      const ue = ee.clientX - W, me = ee.clientY - H, D = Math.max(0, Math.min(window.innerWidth - 40, ce + ue)), G = Math.max(0, Math.min(window.innerHeight - 40, z + me));
      p.style.left = `${D}px`, p.style.top = `${G}px`;
    }), window.addEventListener("mouseup", () => {
      if (X) {
        X = false;
        try {
          localStorage.setItem(M, JSON.stringify({ left: parseFloat(p.style.left), top: parseFloat(p.style.top) }));
        } catch {
        }
      }
    });
  };
  if (f(), s == null ? void 0 : s.nodes) {
    r.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const y = r.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    y.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), y.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), y.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), y.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), y.addBinding(e.gridVisible, "val", { label: "Mostrar" }), y.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), y.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), y.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), y.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), r.addBinding(e.nodes, "val", { label: "Nodes" }), r.addBinding(e.elements, "val", { label: "Elements" }), r.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), r.addBinding(e.faces, "val", { label: "  Caras (fill)" }), r.addBinding(e.elemColumns, "val", { label: "  Columnas" }), r.addBinding(e.elemBeams, "val", { label: "  Vigas" }), r.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), r.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), r.addBinding(e.orientations, "val", { label: "Orientations" }), r.addBinding(e.sections, "val", { label: "Sections" }), r.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), r.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), r.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), r.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((s == null ? void 0 : s.nodeInputs) || (s == null ? void 0 : s.elementInputs)) {
    const y = r.addFolder({ title: "Analysis Inputs" });
    y.addBinding(e.supports, "val", { label: "Supports" }), y.addBinding(e.loads, "val", { label: "Loads" }), y.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), y.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((s == null ? void 0 : s.deformOutputs) || (s == null ? void 0 : s.analyzeOutputs)) {
    const y = r.addFolder({ title: "Analysis Outputs" });
    y.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), y.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), y.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), y.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), y.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), y.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), y.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  m && r.addBinding(e.solids, "val", { label: "Solids" });
  const x = r.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), b = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), _ = () => {
    const y = window.__hekatanClipApply;
    typeof y == "function" && y();
  };
  return x.addBinding(b, "enableX", { label: "Cortar X" }).on("change", _), x.addBinding(b, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", _), x.addBinding(b, "invertX", { label: "  invertir X" }).on("change", _), x.addBinding(b, "enableY", { label: "Cortar Y" }).on("change", _), x.addBinding(b, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", _), x.addBinding(b, "invertY", { label: "  invertir Y" }).on("change", _), x.addBinding(b, "enableZ", { label: "Cortar Z" }).on("change", _), x.addBinding(b, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", _), x.addBinding(b, "invertZ", { label: "  invertir Z" }).on("change", _), p;
}
function zo(e) {
  return { gridSize: R.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: R.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: R.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: R.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: R.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: R.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: R.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: R.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: R.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: R.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: R.state((e == null ? void 0 : e.nodes) ?? true), elements: R.state((e == null ? void 0 : e.elements) ?? true), edges: R.state((e == null ? void 0 : e.edges) ?? true), faces: R.state((e == null ? void 0 : e.faces) ?? true), elemColumns: R.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: R.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: R.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: R.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: R.state((e == null ? void 0 : e.orientations) ?? false), sections: R.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: R.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: R.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: R.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: R.state((e == null ? void 0 : e.secFloor) ?? -1), supports: R.state((e == null ? void 0 : e.supports) ?? true), loads: R.state((e == null ? void 0 : e.loads) ?? false), deformedShape: R.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: R.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: R.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: R.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: R.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: R.state((e == null ? void 0 : e.flipAxes) ?? false), solids: R.state((e == null ? void 0 : e.solids) ?? true), custom3D: R.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: R.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: R.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: R.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function Po(e, s, m) {
  const p = Wt(), r = new xn(new re(), new gn({ color: p.nodePoint }));
  return Mn((M, v) => {
    r.material.color.setHex(v.nodePoint);
  }), r.frustumCulled = false, R.derive(() => {
    e.nodes.val && r.geometry.setAttribute("position", new ut(s.val.flat(), 3));
  }), R.derive(() => {
    if (m.val, s.val, !e.nodes.rawVal) return;
    const M = s.rawVal ?? [];
    let v = e.gridSize.val * 0.5;
    if (M.length >= 2) {
      const x = [1 / 0, 1 / 0, 1 / 0], b = [-1 / 0, -1 / 0, -1 / 0];
      for (const _ of M) for (let y = 0; y < 3; y++) x[y] = Math.min(x[y], _[y]), b[y] = Math.max(b[y], _[y]);
      v = Math.max(b[0] - x[0], b[1] - x[1], b[2] - x[2], 0.1);
    }
    const f = 0.03 * v;
    r.material.size = f * m.rawVal;
  }), R.derive(() => {
    r.visible = e.nodes.val;
  }), r;
}
function Fo(e, s, m) {
  const p = Wt(), r = new Ge(), M = new Dt(new re(), new ct({ color: p.elementLine }));
  Mn((X, W) => {
    M.material.color.setHex(W.elementLine);
  }), M.frustumCulled = false, M.renderOrder = 2, r.add(M);
  const v = new et({ vertexColors: true, transparent: true, opacity: p.shellOpacity, side: Pt, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), f = new qe(new re(), v);
  f.frustumCulled = false, f.userData.isShellArea = true, f.name = "__hekatan_shell_area", r.add(f);
  let x = new xt(p.shellWall), b = new xt(p.shellSlab), _ = new xt(p.shellTri);
  Mn((X, W) => {
    x = new xt(W.shellWall), b = new xt(W.shellSlab), _ = new xt(W.shellTri), v.opacity = W.shellOpacity, v.needsUpdate = true;
  });
  function y(X, W) {
    const H = Math.abs(W[0] - X[0]), ce = Math.abs(W[1] - X[1]), z = Math.abs(W[2] - X[2]);
    return z > H && z > ce || ce > H && ce > z;
  }
  return R.derive(() => {
    var _a;
    if (s.deformedShape.val, s.elemColumns.val, s.elemBeams.val, !s.elements.val) return;
    const X = s.elemColumns.rawVal, W = s.elemBeams.rawVal, H = m.val, ce = ((_a = e.elements) == null ? void 0 : _a.val) || [], z = ce.filter((D) => {
      if (D.length !== 2) return true;
      const G = H[D[0]], U = H[D[1]];
      if (!G || !U) return true;
      const V = y(G, U);
      return !(V && !X || !V && !W);
    }).map((D) => Eo(D).map((G) => [...H[G[0]], ...H[G[1]]]).flat()).flat();
    M.geometry.setAttribute("position", new ut(z, 3));
    const ee = [], ue = [];
    function me(D, G, U, V) {
      const T = [G[0] - D[0], G[1] - D[1], G[2] - D[2]], F = [V[0] - D[0], V[1] - D[1], V[2] - D[2]], E = T[1] * F[2] - T[2] * F[1], I = T[2] * F[0] - T[0] * F[2], P = T[0] * F[1] - T[1] * F[0], B = Math.sqrt(E * E + I * I + P * P);
      return B < 1e-12 ? false : Math.abs(P / B) < 0.5;
    }
    for (const D of ce) if (D.length === 3) {
      const [G, U, V] = D;
      if (H[G] && H[U] && H[V]) {
        ee.push(...H[G], ...H[U], ...H[V]);
        for (let T = 0; T < 3; T++) ue.push(_.r, _.g, _.b);
      }
    } else if (D.length === 4) {
      const [G, U, V, T] = D;
      if (H[G] && H[U] && H[V] && H[T]) {
        const F = me(H[G], H[U], H[V], H[T]) ? x : b;
        ee.push(...H[G], ...H[U], ...H[V]), ee.push(...H[G], ...H[V], ...H[T]);
        for (let E = 0; E < 6; E++) ue.push(F.r, F.g, F.b);
      }
    }
    ee.length > 0 ? (f.geometry.dispose(), f.geometry = new re(), f.geometry.setAttribute("position", new ut(ee, 3)), f.geometry.setAttribute("color", new ut(ue, 3)), f.geometry.computeVertexNormals(), f.visible = s.faces ? s.faces.rawVal : true) : f.visible = false;
  }), R.derive(() => {
    r.visible = s.elements.val;
  }), R.derive(() => {
    s.edges && (M.visible = s.edges.val);
  }), R.derive(() => {
    if (!s.faces) return;
    const X = s.faces.val;
    f.geometry.attributes.position ? f.visible = X : X || (f.visible = false);
  }), r;
}
function Eo(e) {
  if (e.length === 2) return [e];
  const s = [];
  for (let m = 0; m < e.length; m++) s.push([e[m], e[(m + 1) % e.length]]);
  return s;
}
function En(e, s) {
  const m = Wt(), p = new Ge();
  p.name = "hekatan-grid";
  const r = (s == null ? void 0 : s.planes) ?? ["xy"];
  let M = (s == null ? void 0 : s.majorStep) ?? 1, v = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (M <= 0 && (M = 1), v <= 0 && (v = 0.1); e / v > 500; ) v *= 2;
  for (; e / M > 100; ) M *= 2;
  const f = e / 2;
  M = Math.max(v, Math.round(M / v) * v);
  const b = new xt(m.grid), _ = new xt(m.grid).multiplyScalar(0.45), y = (W, H, ce, z) => {
    const ee = [], ue = W === "xy" ? (V, T) => [V, T, 0] : W === "xz" ? (V, T) => [V, 0, T] : (V, T) => [0, V, T], me = Math.floor(f / H);
    for (let V = -me; V <= me; V++) {
      const T = V * H, F = ue(T, -f), E = ue(T, f);
      ee.push(...F, ...E);
    }
    for (let V = -me; V <= me; V++) {
      const T = V * H, F = ue(-f, T), E = ue(f, T);
      ee.push(...F, ...E);
    }
    const D = new re();
    D.setAttribute("position", new ut(ee, 3));
    const G = new ct({ color: ce, transparent: true, opacity: z, depthWrite: false }), U = new Dt(D, G);
    return U.name = `grid-${W}-${H === v ? "minor" : "major"}`, U;
  }, X = (W, H, ce) => {
    const z = W === "xy" ? (U, V) => [U, V, 0] : W === "xz" ? (U, V) => [U, 0, V] : (U, V) => [0, U, V], ee = [[-f, -f], [f, -f], [f, f], [-f, f]], ue = [];
    for (const [U, V] of ee) ue.push(...z(U, V));
    const me = new re();
    me.setAttribute("position", new ut(ue, 3));
    const D = new ct({ color: H, transparent: true, opacity: ce, depthWrite: false }), G = new oo(me, D);
    return G.name = `grid-${W}-border`, G.renderOrder = 1, G;
  };
  for (const W of r) p.add(y(W, v, _, 0.12)), p.add(y(W, M, b, 0.4)), p.add(X(W, b, 0.55));
  return p.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: M, minorStep: v, gridSize: e, planes: [...r] }, p;
}
function Ao(e, s, m, p) {
  const r = new Ge(), M = new uo(0.5, 0.5, 0.5), v = new et({ color: 10166822 }), f = () => {
    const b = m.rawVal ?? [];
    if (b.length < 2) return s.gridSize.val * 0.5;
    let _ = [1 / 0, 1 / 0, 1 / 0], y = [-1 / 0, -1 / 0, -1 / 0];
    for (const X of b) for (let W = 0; W < 3; W++) X[W] < _[W] && (_[W] = X[W]), X[W] > y[W] && (y[W] = X[W]);
    return Math.max(y[0] - _[0], y[1] - _[1], y[2] - _[2], 0.1);
  }, x = () => 0.025 * f();
  return R.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    r.clear();
    const b = x();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((_, y) => {
      const X = m.val[y];
      if (!X) return;
      const W = new qe(M, v);
      W.position.set(...X);
      const H = b * p.rawVal;
      W.scale.set(H, H, H), r.add(W);
    });
  }), R.derive(() => {
    if (p.val, !s.supports.rawVal) return;
    const _ = x() * p.rawVal;
    r.children.forEach((y) => y.scale.set(_, _, _));
  }), R.derive(() => {
    r.visible = s.supports.val;
  }), r;
}
function Vo(e, s, m, p) {
  const r = new Ge();
  r.name = "loadsGroup";
  function M(v) {
    if (v.length < 2) return 0.12 * s.gridSize.rawVal;
    const f = [1 / 0, 1 / 0, 1 / 0], x = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of v) for (let y = 0; y < 3; y++) f[y] = Math.min(f[y], _[y]), x[y] = Math.max(x[y], _[y]);
    return 0.08 * Math.max(x[0] - f[0], x[1] - f[1], x[2] - f[2], 0.1);
  }
  return R.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    r.children.forEach((x) => x.dispose()), r.clear();
    const v = m.val, f = M(v);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((x, b) => {
      const _ = v[b];
      if (!_) return;
      const y = new S(...x.slice(0, 3));
      if (y.lengthSq() < 1e-30) return;
      y.normalize();
      const X = new Gt(y, new S(..._), 1, 15637248, 0.3, 0.3), W = f * p.rawVal;
      X.scale.set(W, W, W), r.add(X);
    });
  }), R.derive(() => {
    if (p.val, !s.loads.rawVal) return;
    const f = M(m.rawVal) * p.rawVal;
    r.children.forEach((x) => x.scale.set(f, f, f));
  }), R.derive(() => {
    r.visible = s.loads.val;
  }), r;
}
function To(e, s, m) {
  const p = new Ge();
  return R.derive(() => {
    if (!e.nodesIndexes.val) return;
    p.children.forEach((M) => M.dispose()), p.clear();
    const r = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((M, v) => {
      const f = new gt(`${v}`);
      f.position.set(...M), f.updateScale(r * m.rawVal), p.add(f);
    });
  }), R.derive(() => {
    if (m.val, !e.nodesIndexes.rawVal) return;
    const r = 0.05 * e.gridSize.val * 0.6;
    p.children.forEach((M) => M.updateScale(r * m.rawVal));
  }), R.derive(() => {
    p.visible = e.nodesIndexes.val;
  }), p;
}
function Lo(e, s, m, p) {
  const r = new Ge();
  return R.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    r.children.forEach((v) => v.dispose()), r.clear();
    const M = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((v, f) => {
      const x = new gt(`${f}`, void 0, "#001219");
      x.position.set(...Io(v.map((b) => m.rawVal[b]))), x.updateScale(M * p.rawVal), r.add(x);
    });
  }), R.derive(() => {
    if (p.val, !s.elementsIndexes.rawVal) return;
    const M = 0.05 * s.gridSize.val * 0.6;
    r.children.forEach((v) => v.updateScale(M * p.rawVal));
  }), R.derive(() => {
    r.visible = s.elementsIndexes.val;
  }), r;
}
function Io(e) {
  const s = e.reduce((p, r) => [p[0] + r[0], p[1] + r[1], p[2] + r[2]], [0, 0, 0]), m = e.length;
  return [s[0] / m, s[1] / m, s[2] / m];
}
function Qn(e, s) {
  const m = new Ge(), p = 0.05 * e * 1, r = Wt(), M = new gt("X", "red", "transparent"), v = new gt(s ? "Z" : "Y", "green", "transparent"), f = new gt(s ? "Y" : "Z", "blue", "transparent"), x = new Gt(new S(1, 0, 0), new S(0, 0, 0), 1, r.axisArrow, 0.2, 0.2), b = new Gt(new S(0, 1, 0), new S(0, 0, 0), 1, r.axisArrow, 0.2, 0.2), _ = new Gt(new S(0, 0, 1), new S(0, 0, 0), 1, r.axisArrow, 0.2, 0.2);
  return M.position.set(1.3 * p, 0, 0), v.position.set(0, 1.3 * p, 0), f.position.set(0, 0, 1.3 * p), M.updateScale(0.4 * p), v.updateScale(0.4 * p), f.updateScale(0.4 * p), x.scale.set(p, p, p), b.scale.set(p, p, p), _.scale.set(p, p, p), m.add(x, b, _, M, v, f), m;
}
function In(e, s) {
  const m = new S(...e), r = new S(...s).clone().sub(m), M = r.length(), v = r.dot(new S(1, 0, 0)) / M, f = r.dot(new S(0, 1, 0)) / M, x = r.dot(new S(0, 0, 1)) / M, b = Math.sqrt(v ** 2 + f ** 2);
  let _ = new Pn().fromArray([[v, f, x], [-f / b, v / b, 0], [-v * x / b, -f * x / b, b]].flat());
  return x === 1 && (_ = new Pn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), x === -1 && (_ = new Pn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new so().setFromMatrix3(_);
}
function Tn(e, s) {
  return e == null ? void 0 : e.map((m, p) => (9 * m + s[p]) / 10);
}
function ln(e) {
  const s = e.reduce((p, r) => [p[0] + r[0], p[1] + r[1], p[2] + r[2]], [0, 0, 0]), m = e.length;
  return [s[0] / m, s[1] / m, s[2] / m];
}
function $o(e, s, m) {
  const p = ln([s, m]), r = ln([e, m]), M = ln([e, s]), v = new S(...p).sub(new S(...r)).normalize(), f = new S(...m).sub(new S(...M)).normalize(), x = v.clone().cross(f).normalize(), b = x.clone().cross(v).normalize();
  return new so().makeBasis(v, b, x);
}
function Ro(e, s, m, p) {
  const r = new Ge(), M = new re(), v = new ct({ vertexColors: true }), f = [0, 0, 0], x = [1, 0, 0], b = [0, 1, 0], _ = [0, 0, 1];
  M.setAttribute("position", new ut([...f, ...x, ...f, ...b, ...f, ..._], 3));
  const y = [255, 0, 0], X = [0, 255, 0], W = [0, 0, 255];
  return M.setAttribute("color", new ut([...y, ...y, ...X, ...X, ...W, ...W], 3)), R.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (r.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((H) => {
      const ce = new Dt(M, v), z = m.rawVal[H[0]], ee = m.rawVal[H[1]];
      if (H.length === 2 && (ce.position.set(...Tn(z, ee)), ce.rotation.setFromRotationMatrix(In(z, ee))), H.length === 3) {
        const D = m.rawVal[H[2]];
        ce.position.set(...ln([z, ee, D])), ce.rotation.setFromRotationMatrix($o(z, ee, D));
      }
      const me = 0.05 * s.gridSize.rawVal * 0.75 * p.rawVal;
      ce.scale.set(me, me, me), r.add(ce);
    }));
  }), R.derive(() => {
    if (p.val, !s.orientations.rawVal) return;
    const ce = 0.05 * s.gridSize.val * 0.75 * p.rawVal;
    r.children.forEach((z) => z.scale.set(ce, ce, ce));
  }), R.derive(() => {
    r.visible = s.orientations.val;
  }), r;
}
function Bo(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), m = (e.h * 100).toFixed(0);
    return `${s}x${m}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Yo(e, s, m, p) {
  const r = new Ge(), M = new Ge();
  r.add(M);
  function v(U, V) {
    const T = U / 2, F = V / 2, E = new Float32Array([0, -T, -F, 0, T, -F, 0, T, F, 0, -T, -F, 0, T, F, 0, -T, F]), I = new re();
    I.setAttribute("position", new je(E, 3));
    const P = new Float32Array([0, -T, -F, 0, T, -F, 0, T, F, 0, -T, F, 0, -T, -F]), B = new re();
    return B.setAttribute("position", new je(P, 3)), { fill: I, outline: B };
  }
  function f(U, V = 24) {
    const T = U / 2, F = new Float32Array(V * 9);
    for (let B = 0; B < V; B++) {
      const te = B / V * Math.PI * 2, K = (B + 1) / V * Math.PI * 2;
      F[B * 9] = 0, F[B * 9 + 1] = 0, F[B * 9 + 2] = 0, F[B * 9 + 3] = 0, F[B * 9 + 4] = T * Math.cos(te), F[B * 9 + 5] = T * Math.sin(te), F[B * 9 + 6] = 0, F[B * 9 + 7] = T * Math.cos(K), F[B * 9 + 8] = T * Math.sin(K);
    }
    const E = new re();
    E.setAttribute("position", new je(F, 3));
    const I = new Float32Array((V + 1) * 3);
    for (let B = 0; B <= V; B++) {
      const te = B / V * Math.PI * 2;
      I[B * 3] = 0, I[B * 3 + 1] = T * Math.cos(te), I[B * 3 + 2] = T * Math.sin(te);
    }
    const P = new re();
    return P.setAttribute("position", new je(I, 3)), { fill: E, outline: P };
  }
  function x(U, V, T, F) {
    const E = T ?? V * 0.08, I = F ?? U * 0.07, P = U / 2, B = V / 2, te = B - E, K = I / 2, xe = [];
    function A(Q, Se, ge, de) {
      xe.push(0, Q, Se, 0, ge, Se, 0, ge, de, 0, Q, Se, 0, ge, de, 0, Q, de);
    }
    A(-P, -B, P, -te), A(-K, -te, K, te), A(-P, te, P, B);
    const J = new re();
    J.setAttribute("position", new je(new Float32Array(xe), 3));
    const ie = new Float32Array([0, -P, -B, 0, P, -B, 0, P, -te, 0, K, -te, 0, K, te, 0, P, te, 0, P, B, 0, -P, B, 0, -P, te, 0, -K, te, 0, -K, -te, 0, -P, -te, 0, -P, -B]), fe = new re();
    return fe.setAttribute("position", new je(ie, 3)), { fill: J, outline: fe };
  }
  function b(U, V, T) {
    const F = U / 2, E = V / 2, I = F - T, P = E - T, B = [];
    function te(J, ie, fe, Q) {
      B.push(0, J, ie, 0, fe, ie, 0, fe, Q, 0, J, ie, 0, fe, Q, 0, J, Q);
    }
    te(-F, -E, F, -P), te(-F, P, F, E), te(-F, -P, -I, P), te(I, -P, F, P);
    const K = new re();
    K.setAttribute("position", new je(new Float32Array(B), 3));
    const xe = new Float32Array([0, -F, -E, 0, F, -E, 0, F, -E, 0, F, E, 0, F, E, 0, -F, E, 0, -F, E, 0, -F, -E, 0, -I, -P, 0, I, -P, 0, I, -P, 0, I, P, 0, I, P, 0, -I, P, 0, -I, P, 0, -I, -P]), A = new re();
    return A.setAttribute("position", new je(xe, 3)), { fill: K, outline: A };
  }
  function _(U, V, T) {
    const F = U / 2, E = V / 2, I = F - T, P = E - T, B = new re(), te = new Float32Array([0, -I, -P, 0, I, -P, 0, I, P, 0, -I, -P, 0, I, P, 0, -I, P]);
    B.setAttribute("position", new je(te, 3));
    const K = [];
    function xe(fe, Q, Se, ge) {
      K.push(0, fe, Q, 0, Se, Q, 0, Se, ge, 0, fe, Q, 0, Se, ge, 0, fe, ge);
    }
    xe(-F, -E, F, -P), xe(-F, P, F, E), xe(-F, -P, -I, P), xe(I, -P, F, P);
    const A = new re();
    A.setAttribute("position", new je(new Float32Array(K), 3));
    const J = new Float32Array([0, -F, -E, 0, F, -E, 0, F, -E, 0, F, E, 0, F, E, 0, -F, E, 0, -F, E, 0, -F, -E, 0, -I, -P, 0, I, -P, 0, I, -P, 0, I, P, 0, I, P, 0, -I, P, 0, -I, P, 0, -I, -P]), ie = new re();
    return ie.setAttribute("position", new je(J, 3)), { concFill: B, steelFillGeom: A, outline: ie };
  }
  function y(U, V, T) {
    const F = [], E = [[0, -U / 2, -V / 2], [0, -U / 2 + T, -V / 2], [0, -U / 2 + T, V / 2 - T], [0, U / 2, V / 2 - T], [0, U / 2, V / 2], [0, -U / 2, V / 2]], I = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const K of I) F.push(...E[K]);
    const P = new re();
    P.setAttribute("position", new je(new Float32Array(F), 3));
    const B = [];
    for (let K = 0; K < E.length; K++) {
      const xe = (K + 1) % E.length;
      B.push(...E[K], ...E[xe]);
    }
    const te = new re();
    return te.setAttribute("position", new je(new Float32Array(B), 3)), { fill: P, outline: te };
  }
  function X(U, V, T, F) {
    const E = F / 2, I = [], P = [[0, -U - E, -V / 2], [0, -T - E, -V / 2], [0, -T - E, V / 2 - T], [0, -E, V / 2 - T], [0, -E, V / 2], [0, -U - E, V / 2]], B = [[0, E, -V / 2], [0, E + T, -V / 2], [0, E + T, V / 2 - T], [0, U + E, V / 2 - T], [0, U + E, V / 2], [0, E, V / 2]], te = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const J of te) I.push(...P[J]);
    for (const J of te) I.push(...B[J]);
    const K = new re();
    K.setAttribute("position", new je(new Float32Array(I), 3));
    const xe = [];
    for (const J of [P, B]) for (let ie = 0; ie < J.length; ie++) {
      const fe = (ie + 1) % J.length;
      xe.push(...J[ie], ...J[fe]);
    }
    const A = new re();
    return A.setAttribute("position", new je(new Float32Array(xe), 3)), { fill: K, outline: A };
  }
  function W(U, V, T, F) {
    const E = V / 2, I = U, P = [[0, -I, -E], [0, -I, -E + T], [0, -F, -E + T], [0, -F, E - T], [0, -I, E - T], [0, -I, E], [0, 0, E], [0, 0, -E]], B = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], te = [];
    for (const J of B) te.push(...P[J]);
    const K = new re();
    K.setAttribute("position", new je(new Float32Array(te), 3));
    const xe = [];
    for (let J = 0; J < P.length; J++) {
      const ie = (J + 1) % P.length;
      xe.push(...P[J], ...P[ie]);
    }
    const A = new re();
    return A.setAttribute("position", new je(new Float32Array(xe), 3)), { fill: K, outline: A };
  }
  function H(U, V, T, F, E) {
    const I = V / 2, P = E / 2, B = [], te = [[0, -U, -I], [0, -U, -I + T], [0, -P - F, -I + T], [0, -P - F, I - T], [0, -U, I - T], [0, -U, I], [0, -P, I], [0, -P, -I]], K = te.map((fe) => [fe[0], -fe[1], fe[2]]), xe = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const fe of xe) B.push(...te[fe]);
    for (const fe of xe) B.push(...K[fe]);
    const A = new re();
    A.setAttribute("position", new je(new Float32Array(B), 3));
    const J = [];
    for (const fe of [te, K]) for (let Q = 0; Q < fe.length; Q++) {
      const Se = (Q + 1) % fe.length;
      J.push(...fe[Q], ...fe[Se]);
    }
    const ie = new re();
    return ie.setAttribute("position", new je(new Float32Array(J), 3)), { fill: A, outline: ie };
  }
  function ce(U, V, T, F) {
    const E = U / 2, I = V / 2, P = F / 2, B = [[0, -P, -I], [0, P, -I], [0, P, I - T], [0, E, I - T], [0, E, I], [0, -E, I], [0, -E, I - T], [0, -P, I - T]], te = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], K = [];
    for (const ie of te) K.push(...B[ie]);
    const xe = new re();
    xe.setAttribute("position", new je(new Float32Array(K), 3));
    const A = [];
    for (let ie = 0; ie < B.length; ie++) {
      const fe = (ie + 1) % B.length;
      A.push(...B[ie], ...B[fe]);
    }
    const J = new re();
    return J.setAttribute("position", new je(new Float32Array(A), 3)), { fill: xe, outline: J };
  }
  function z(U, V, T = 24) {
    const F = U / 2, E = F - V, I = [];
    for (let K = 0; K < T; K++) {
      const xe = K / T * Math.PI * 2, A = (K + 1) / T * Math.PI * 2, J = Math.cos(xe), ie = Math.sin(xe), fe = Math.cos(A), Q = Math.sin(A);
      I.push(0, F * J, F * ie, 0, F * fe, F * Q, 0, E * fe, E * Q), I.push(0, F * J, F * ie, 0, E * fe, E * Q, 0, E * J, E * ie);
    }
    const P = new re();
    P.setAttribute("position", new je(new Float32Array(I), 3));
    const B = [];
    for (let K = 0; K < T; K++) {
      const xe = K / T * Math.PI * 2, A = (K + 1) / T * Math.PI * 2;
      B.push(0, F * Math.cos(xe), F * Math.sin(xe), 0, F * Math.cos(A), F * Math.sin(A)), B.push(0, E * Math.cos(xe), E * Math.sin(xe), 0, E * Math.cos(A), E * Math.sin(A));
    }
    const te = new re();
    return te.setAttribute("position", new je(new Float32Array(B), 3)), { fill: P, outline: te };
  }
  const ee = new et({ color: 52479, transparent: true, opacity: 0.35, side: Pt, depthWrite: false }), ue = new ct({ color: 52479 }), me = new et({ color: 16750848, transparent: true, opacity: 0.4, side: Pt, depthWrite: false }), D = new ct({ color: 16750848 });
  function G(U, V) {
    const T = Math.abs(V[0] - U[0]), F = Math.abs(V[1] - U[1]), E = Math.abs(V[2] - U[2]);
    return E > T && E > F || F > T && F > E;
  }
  return R.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const U = s.secColumns.rawVal, V = s.secBeams.rawVal;
    if (!U && !V) {
      r.children.forEach((P) => {
        P instanceof gt && P.dispose();
      }), r.clear();
      return;
    }
    r.children.forEach((P) => {
      P instanceof gt && P.dispose();
    }), r.clear();
    const T = (_a = e.elements) == null ? void 0 : _a.val, F = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!T || !F) return;
    const E = F.sectionShapes, I = s.secFloor.rawVal;
    T.forEach((P, B) => {
      if (P.length !== 2) return;
      const te = m.rawVal[P[0]], K = m.rawVal[P[1]];
      if (!te || !K) return;
      const xe = G(te, K);
      if (xe && !U || !xe && !V) return;
      if (I >= 0) {
        const Q = Math.min(te[1], K[1]);
        Math.max(te[1], K[1]);
        const Se = s.gridSize.rawVal || 3;
        if (Math.floor(Q / Se + 0.01) !== I) return;
      }
      const A = E == null ? void 0 : E.get(B);
      if (!A) return;
      const J = [(te[0] + K[0]) / 2, (te[1] + K[1]) / 2, (te[2] + K[2]) / 2], ie = In(te, K);
      if (A.type === "CFT") {
        const Q = _(A.b, A.h, A.tw ?? A.b * 0.05), Se = new qe(Q.concFill, ee);
        Se.position.set(...J), Se.rotation.setFromRotationMatrix(ie), r.add(Se);
        const ge = new qe(Q.steelFillGeom, me);
        ge.position.set(...J), ge.rotation.setFromRotationMatrix(ie), r.add(ge);
        const de = new _t(Q.outline, D);
        de.position.set(...J), de.rotation.setFromRotationMatrix(ie), r.add(de);
      } else {
        let Q, Se, ge;
        switch (A.type) {
          case "rect":
            Q = v(A.b, A.h), Se = ee, ge = ue;
            break;
          case "circ":
            Q = f(A.d), Se = ee, ge = ue;
            break;
          case "I":
            Q = x(A.b, A.h, A.tf, A.tw), Se = me, ge = D;
            break;
          case "HSS":
            Q = b(A.b, A.h, A.tw ?? A.b * 0.05), Se = me, ge = D;
            break;
          case "CFT":
            Q = _(A.b, A.h, A.tw ?? A.b * 0.05), Se = me, ge = D;
            break;
          case "L":
            Q = y(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3), Se = me, ge = D;
            break;
          case "2L":
            Q = X(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3, A.dis ?? 0.01), Se = me, ge = D;
            break;
          case "C":
          case "coldC":
            Q = W(A.b, A.h, A.tf ?? A.t ?? 3e-3, A.tw ?? A.t ?? 3e-3), Se = me, ge = D;
            break;
          case "2C":
            Q = H(A.b, A.h, A.tf ?? 5e-3, A.tw ?? 5e-3, A.dis ?? 0.01), Se = me, ge = D;
            break;
          case "T":
            Q = ce(A.b, A.h, A.tf ?? 0.01, A.tw ?? 6e-3), Se = me, ge = D;
            break;
          case "pipe":
            Q = z(A.d, A.tw ?? A.d * 0.05), Se = me, ge = D;
            break;
          default:
            return;
        }
        const de = new qe(Q.fill, Se);
        de.position.set(...J), de.rotation.setFromRotationMatrix(ie), r.add(de);
        const _e = new _t(Q.outline, ge);
        _e.position.set(...J), _e.rotation.setFromRotationMatrix(ie), r.add(_e);
      }
      const fe = Bo(A);
      if (fe) {
        const Se = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(A.type) ? "#ff9900" : "#00ccff", ge = new gt(fe, Se, "transparent");
        ge.position.set(J[0], J[1], J[2]);
        const de = 0.05 * s.gridSize.rawVal * 0.5;
        ge.updateScale(de * ((p == null ? void 0 : p.rawVal) ?? 1)), M.add(ge);
      }
    });
  }), p && R.derive(() => {
    if (p.val, !s.sections.rawVal) return;
    const U = 0.05 * s.gridSize.val * 0.5;
    M.children.forEach((V) => {
      V instanceof gt && V.updateScale(U * p.rawVal);
    });
  }), R.derive(() => {
    r.visible = s.sections.val;
  }), R.derive(() => {
    M.visible = s.sectionLabels.val;
  }), r;
}
class wn extends Ge {
  constructor(s, m, p, r, M, v, f) {
    super();
    const x = new vn().moveTo(0, 0).lineTo(0, v[1]).lineTo(p, v[1]).lineTo(p, 0).lineTo(0, 0), b = x.getPoints(), _ = new re().setFromPoints(b);
    this.lines = new _t(_, new ct({ color: Wt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(r), f && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const y = new bn(x), X = new et({ color: v[1] > 0 ? 24435 : 11411474, side: Pt });
    this.mesh = new qe(y, X), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(r), f && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new gt(`${M[1].toFixed(2)}`), this.normalizedResult = v, this.textPosition = ln([s, m]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(r), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class jn extends Ge {
  constructor(s, m, p, r, M, v, f) {
    super();
    const x = M[0] * p / (M[0] + M[1]), b = M[0] * M[1] > 0;
    if (this.text = new gt(`${M[0].toFixed(2)}`), this.text2 = new gt(`${(M[1] * -1).toFixed(2)}`), this.normalizedResult = v, this.textPosition = Tn(s, m), this.text2Position = Tn(m, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(r), this.text2.rotation.setFromRotationMatrix(r), this.add(this.text, this.text2), b) {
      const _ = new vn().moveTo(0, 0).lineTo(0, v[0]).lineTo(x, 0).lineTo(0, 0), y = new vn().moveTo(x, 0).lineTo(p, -v[1]).lineTo(p, 0).lineTo(x, 0), X = _.getPoints(), W = y.getPoints(), H = new re().setFromPoints(X), ce = new re().setFromPoints(W), z = new ct({ color: Wt().resultOutline });
      this.lines = new _t(H, z), this.lines2 = new _t(ce, z), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(r), this.lines2.rotation.setFromRotationMatrix(r), f && this.lines.rotateX(Math.PI / 2), f && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const ee = new bn(_), ue = new bn(y), me = new et({ color: v[0] > 0 ? 24435 : 11411474, side: Pt }), D = new et({ color: -v[1] > 0 ? 24435 : 11411474, side: Pt });
      this.mesh = new qe(ee, me), this.mesh2 = new qe(ue, D), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(r), this.mesh2.rotation.setFromRotationMatrix(r), f && this.mesh.rotateX(Math.PI / 2), f && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const _ = new vn().moveTo(0, 0).lineTo(0, v[0]).lineTo(p, -v[1]).lineTo(p, 0).lineTo(0, 0), y = _.getPoints(), X = new re().setFromPoints(y);
      this.lines = new _t(X, new ct({ color: Wt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(r), f && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const W = new bn(_), H = new et({ color: v[0] > 0 ? 24435 : 11411474, side: Pt });
      this.mesh = new qe(W, H), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(r), f && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(s) {
    var _a, _b;
    this.lines.scale.set(1, s * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text2.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * s), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e = this.mesh2) == null ? void 0 : _e.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var io = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(io || {});
function Xo(e, s, m, p) {
  const r = new Ge(), M = () => {
    const x = m.rawVal ?? [];
    if (x.length < 2) return s.gridSize.val * 0.5;
    let b = [1 / 0, 1 / 0, 1 / 0], _ = [-1 / 0, -1 / 0, -1 / 0];
    for (const y of x) for (let X = 0; X < 3; X++) y[X] < b[X] && (b[X] = y[X]), y[X] > _[X] && (_[X] = y[X]);
    return Math.max(_[0] - b[0], _[1] - b[1], _[2] - b[2], 0.1);
  }, v = () => 0.025 * M(), f = { normals: wn, shearsY: wn, shearsZ: wn, torsions: wn, bendingsY: jn, bendingsZ: jn };
  return R.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, m.val, s.frameResults.val == "none") return;
    r.children.forEach((b) => b.dispose()), r.clear();
    const x = io[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[x]) == null ? void 0 : _b.forEach((b, _) => {
      var _a2, _b2;
      const y = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[_]) ?? [0, 1], X = m.rawVal[y[0]], W = m.rawVal[y[1]], H = new S(...W).distanceTo(new S(...X)), ce = Do((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[x]), z = b == null ? void 0 : b.map((D) => D / (ce === 0 ? 1 : ce)), ee = In(X, W), ue = new f[x](X, W, H, ee, b ?? [0, 0], z ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(x)), me = v();
      ue.updateScale(me * p.rawVal), r.add(ue);
    });
  }), R.derive(() => {
    if (p.val, s.frameResults.rawVal == "none") return;
    const x = v();
    r.children.forEach((b) => b.updateScale(x * p.rawVal));
  }), R.derive(() => {
    r.visible = s.frameResults.val != "none";
  }), r;
}
function Do(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((m) => {
    const p = Math.max(...m ?? [0, 0]);
    p > s && (s = p);
  }), s;
}
class No extends Ge {
  constructor(s, m, p) {
    super();
    const r = m === $n.reactions;
    p[0] && (this.xText1 = new gt(`${r ? "Fx" : "Dx"}: ` + p[0].toFixed(4))), p[3] && (this.xText2 = new gt(`${r ? "Mx" : "Rx"}: ` + p[3].toFixed(4))), p[1] && (this.yText1 = new gt(`${r ? "Fy" : "Dy"}: ` + p[1].toFixed(4))), p[4] && (this.yText2 = new gt(`${r ? "My" : "Ry"}: ` + p[4].toFixed(4))), p[2] && (this.zText1 = new gt(`${r ? "Fz" : "Dz"}: ` + p[2].toFixed(4))), p[5] && (this.zText2 = new gt(`${r ? "Mz" : "Rz"}: ` + p[5].toFixed(4))), (p[0] || p[3]) && (this.xArrow = new Gt(new S(1, 0, 0), new S(0, 0, 0), 1, 15637248, 0.3, 0.3)), (p[1] || p[4]) && (this.yArrow = new Gt(new S(0, 1, 0), new S(0, 0, 0), 1, 15637248, 0.3, 0.3)), (p[2] || p[5]) && (this.zArrow = new Gt(new S(0, 0, 1), new S(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(s) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(s, s, s), (_b = this.yArrow) == null ? void 0 : _b.scale.set(s, s, s), (_c = this.zArrow) == null ? void 0 : _c.scale.set(s, s, s), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * s, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * s, 0, 0.5 * s), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * s, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * s, 0.5 * s), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * s), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * s + 0.5 * s), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * s), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * s), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * s), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * s), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * s), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * s);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var $n = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))($n || {});
function Zo(e, s, m, p) {
  const r = new Ge();
  return R.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    r.children.forEach((f) => f.dispose()), r.clear();
    const M = $n[s.nodeResults.rawVal], v = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[M]) == null ? void 0 : _b.forEach((f, x) => {
      const b = new No(m.rawVal[x], M, f ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(v * p.rawVal), r.add(b);
    });
  }), R.derive(() => {
    if (p.val, s.nodeResults.rawVal == "none") return;
    const M = 0.05 * s.gridSize.val;
    r.children.forEach((v) => v.updateScale(M * p.rawVal));
  }), R.derive(() => {
    r.visible = s.nodeResults.val != "none";
  }), r;
}
function Uo({ drawingObj: e, gridObj: s, scene: m, getActiveCamera: p, controls: r, gridSize: M, derivedDisplayScale: v, rendererElm: f, viewerRender: x }) {
  const b = new fo(), _ = new ho(), y = (n) => {
    const o = f.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, h = o.width || 1, d = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const i = h / 2;
      if (a >= i) return _.x = (a - i) / i * 2 - 1, _.y = -(t / d) * 2 + 1, window.__hekatanSplitCamera ?? p();
      _.x = a / i * 2 - 1;
    } else _.x = a / h * 2 - 1;
    return _.y = -(t / d) * 2 + 1, p();
  }, X = new qe(new fn(1e4, 1e4), new et({ side: Pt, transparent: true, opacity: 0, depthWrite: false }));
  X.visible = true, X.frustumCulled = false, m.add(X);
  const W = (n, o, a) => {
    const t = new qe(new fn(1e4, 1e4), new et({ side: Pt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, m.add(t), t;
  }, H = W(Math.PI / 2, 0, 0), ce = W(0, Math.PI / 2, 0), z = () => {
    if (H.visible = !!window.__hekatanGridPlaneXZ, ce.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && at.visible) {
      const a = b.intersectObjects([at, L, j], false);
      if (a.length > 0) return a;
    }
    const o = [X];
    return H.visible && o.push(H), ce.visible && o.push(ce), Ce.visible && ke.length > 0 && o.push(...ke), b.intersectObjects(o, false);
  }, ee = new xn(new re(), new gn()), ue = new xn(new re(), new gn({ color: "gray", sizeAttenuation: false, size: 6 })), me = new xn(new re(), new gn({ color: "orange", size: 0.1 }));
  m.add(me);
  const D = document.createElement("input");
  D.id = "hk-rubber-label", D.type = "text", D.spellcheck = false, D.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, D.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(D);
  let G = null, U = null, V = false;
  const T = new S(), F = (n, o, a, t, h, d) => {
    const C = t - n, i = h - o, l = d - a, u = Math.hypot(C, i, l);
    if (u < 0.01) {
      D.style.display = "none";
      return;
    }
    G = [n, o, a], U = [C / u, i / u, l / u], T.set((n + t) / 2, (o + h) / 2, (a + d) / 2), T.project(p());
    const g = f.getBoundingClientRect(), c = g.left + (T.x * 0.5 + 0.5) * g.width, w = g.top + (-T.y * 0.5 + 0.5) * g.height;
    if (D.style.left = c + "px", D.style.top = w + "px", D.style.display = "block", !V) {
      if (D.value = `${u.toFixed(2)} m`, document.activeElement !== D) {
        const k = document.activeElement;
        k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && k !== D || D.focus({ preventScroll: true });
      }
      try {
        D.select();
      } catch {
      }
    }
  }, E = () => {
    D.style.display = "none", G = null, U = null, V = false, document.activeElement === D && D.blur();
  }, I = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Mt = n, ye(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), D.blur();
      return;
    }
    if (!G || !U || !e.polylines) return;
    let a = U[0], t = U[1], h = U[2];
    ze === "x" ? (a = Math.sign(a) || 1, t = 0, h = 0) : ze === "y" ? (a = 0, t = Math.sign(t) || 1, h = 0) : ze === "z" && (a = 0, t = 0, h = Math.sign(h) || 1);
    const d = G[0] + a * n, C = G[1] + t * n, i = G[2] + h * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [d, C, i]];
    const l = e.polylines.rawVal, u = l.length ? l[l.length - 1] : [];
    e.polylines.val = [...l.slice(0, -1), [...u, e.points.rawVal.length - 1]], D.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    x();
  }, P = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const a = o.startsWith("@");
    if (a && (o = o.slice(1)), o.includes("<")) {
      const h = o.split("<").map((d) => parseFloat(d.trim()));
      if (h.some(isNaN)) return null;
      if (h.length === 2) {
        const [d, C] = h;
        return a ? { kind: "relPolar", L: d, ang: C } : { kind: "absPolar", L: d, ang: C };
      }
      if (h.length === 3 && a) {
        const [d, C, i] = h;
        return { kind: "relSpherical", L: d, az: C, el: i };
      }
      return null;
    }
    if (o.includes(",")) {
      const h = o.split(",").map((l) => parseFloat(l.trim()));
      if (h.some(isNaN)) return null;
      const [d, C, i = 0] = h;
      return a ? { kind: "relCart", dx: d, dy: C, dz: i } : { kind: "absCart", x: d, y: C, z: i };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, B = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return G ? [G[0] + n.dx, G[1] + n.dy, G[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!G) return null;
      const o = n.ang * Math.PI / 180;
      return [G[0] + n.L * Math.cos(o), G[1] + n.L * Math.sin(o), G[2]];
    }
    if (n.kind === "relSpherical") {
      if (!G) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [G[0] + t * Math.cos(o), G[1] + t * Math.sin(o), G[2] + n.L * Math.sin(a)];
    }
    return null;
  }, te = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], D.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    x();
  };
  D.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = P(D.value);
      if (!a) return;
      if (V = false, a.kind === "length") I(a.L), ye(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = B(a);
        if (!t) return;
        te(t);
        const h = a.kind;
        ye(`\u270F ${h} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), V = false, D.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!V && D.style.display === "block") try {
          D.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (V = true);
  }), window.addEventListener("keydown", (n) => {
    if (!G || !U || document.activeElement === D) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (D.value = n.key, D.focus(), D.setSelectionRange(1, 1), n.preventDefault());
  });
  const K = document.createElement("div");
  K.id = "hk-coord-readout", K.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", K.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(K);
  const xe = document.createElement("div");
  xe.id = "hk-coord-fixed", xe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", xe.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(xe);
  const A = new _t(new re().setFromPoints([new S(0, 0, 0), new S(0, 0, 0)]), new sn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  A.frustumCulled = false, A.visible = false, m.add(A);
  const J = new Ge();
  J.frustumCulled = false, J.visible = false, m.add(J);
  const ie = (n) => {
    const o = new re().setFromPoints([new S(0, 0, 0), new S(0, 0, 0)]), a = new sn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new _t(o, a);
  }, fe = ie(16711680), Q = ie(65280), Se = ie(35071);
  J.add(fe, Q, Se);
  const ge = (n) => {
    const o = new re().setFromPoints([new S(0, 0, 0), new S(0, 0, 0), new S(0, 0, 0), new S(0, 0, 0)]), a = new ct({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new oo(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, de = ge(3462041), _e = ge(16724804), Re = ge(6333946), Je = new Ge();
  Je.frustumCulled = false, Je.visible = false, m.add(Je), Je.add(de, _e, Re);
  const It = (n) => {
    const o = new fn(1, 1), a = new et({ color: n, transparent: true, opacity: 0.06, side: Pt, depthWrite: false }), t = new qe(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, at = It(3462041), L = It(16724804), j = It(6333946);
  Je.add(at, L, j);
  const le = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, se = document.createElement("div");
  se.id = "hk-refplane-badge", se.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(se), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Je.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0], C = window.__hekatanOrthoExt ?? 8;
      Ye(de, d, "xy", C), Ye(_e, d, "xz", C), Ye(Re, d, "yz", C), le(at, d, "xy", C), le(L, d, "xz", C), le(j, d, "yz", C), at.material.opacity = 0.1, L.material.opacity = 0.1, j.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    x();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !Je.visible) {
      x();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0];
    Ye(de, d, "xy", n), Ye(_e, d, "xz", n), Ye(Re, d, "yz", n), le(at, d, "xy", n), le(L, d, "xz", n), le(j, d, "yz", n), x();
  };
  const Te = (n) => {
    if (at.material.opacity = n === "xy" ? 0.22 : 0.04, L.material.opacity = n === "xz" ? 0.22 : 0.04, j.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const h = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      se.style.background = h.bg, se.style.color = h.text, se.textContent = `\u25A6 Plano ${n.toUpperCase()}`, se.style.display = "block";
    } else se.style.display = "none";
  }, Ye = (n, o, a, t) => {
    let h;
    a === "xy" ? h = [new S(o[0] - t, o[1] - t, o[2]), new S(o[0] + t, o[1] - t, o[2]), new S(o[0] + t, o[1] + t, o[2]), new S(o[0] - t, o[1] + t, o[2]), new S(o[0] - t, o[1] - t, o[2])] : a === "xz" ? h = [new S(o[0] - t, o[1], o[2] - t), new S(o[0] + t, o[1], o[2] - t), new S(o[0] + t, o[1], o[2] + t), new S(o[0] - t, o[1], o[2] + t), new S(o[0] - t, o[1], o[2] - t)] : h = [new S(o[0], o[1] - t, o[2] - t), new S(o[0], o[1] + t, o[2] - t), new S(o[0], o[1] + t, o[2] + t), new S(o[0], o[1] - t, o[2] + t), new S(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(h);
  };
  let ze = null;
  window.__hekatanAxisLock = () => ze;
  const Fe = document.createElement("div");
  Fe.id = "hk-axis-lock-badge", Fe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Fe);
  const Ft = () => {
    if (!ze) {
      Fe.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    Fe.style.background = "rgba(15,23,42,0.92)", Fe.style.color = n[ze], Fe.style.border = `1.5px solid ${n[ze]}`, Fe.textContent = `\u{1F512} LOCK ${ze.toUpperCase()}`, Fe.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== D) return;
    const a = n.key.toLowerCase();
    if (a === "x" || a === "y" || a === "z") ze = ze === a ? null : a, Ft(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), Xn(), n.preventDefault();
    } else if (n.key === "F8") {
      n.preventDefault(), window.__hekatanOrthoMode = !window.__hekatanOrthoMode;
      const t = window.__hekatanOrthoMode;
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
      let h = document.getElementById("hk-ortho-frame");
      h || (h = document.createElement("div"), h.id = "hk-ortho-frame", h.style.cssText = ["position:fixed", "inset:0", "z-index:99996", "border:3px solid rgba(34,211,238,0.85)", "box-shadow:inset 0 0 24px rgba(34,211,238,0.35)", "pointer-events:none"].join(";") + ";", document.body.appendChild(h)), h.style.display = t ? "block" : "none";
      let d = document.getElementById("hk-ortho-badge");
      d || (d = document.createElement("div"), d.id = "hk-ortho-badge", d.style.cssText = ["position:fixed", "top:10px", "left:50%", "transform:translateX(-50%)", "z-index:99998", "padding:6px 16px", "background:rgba(34,211,238,0.95)", "color:#0a1f24", "border-radius:6px", "border:2px solid rgba(8,145,178,1)", "box-shadow:0 4px 16px rgba(34,211,238,0.5)", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "pointer-events:none", "white-space:nowrap"].join(";") + ";", d.textContent = "\u22A5 ORTO ON (F8)", document.body.appendChild(d)), d.style.display = t ? "block" : "none";
    }
  });
  const St = new S(), Rt = new S(), Bt = new S(), Nt = (n) => {
    if (!ze) return null;
    const o = n[0], a = n[1], t = n[2];
    return ze === "x" ? (St.set(o - 1e4, a, t), Rt.set(o + 1e4, a, t)) : ze === "y" ? (St.set(o, a - 1e4, t), Rt.set(o, a + 1e4, t)) : (St.set(o, a, t - 1e4), Rt.set(o, a, t + 1e4)), b.ray.distanceSqToSegment(St, Rt, null, Bt), Bt;
  };
  window.__hekatanProjectOnAxis = Nt;
  const N = new _t(new re().setFromPoints([new S(0, 0, 0), new S(0, 0, 0)]), new ct({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  N.renderOrder = 998, N.frustumCulled = false, N.visible = false, m.add(N);
  let ae = -1, be = -1, oe = -1;
  const we = /* @__PURE__ */ new Set();
  window.__hekatanSelection = we;
  const Ee = new _t(new re().setFromPoints([new S(), new S()]), new ct({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Ee.renderOrder = 997, Ee.frustumCulled = false, Ee.visible = false, m.add(Ee);
  const Ae = new qe(new Ot(0.02, 12, 12), new et({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Ae.renderOrder = 998, Ae.visible = false, m.add(Ae);
  const Be = () => {
    if (!Ae.visible) return;
    const o = p().position.distanceTo(Ae.position), a = Math.max(0.05, o / 10);
    Ae.scale.setScalar(a);
  }, Le = new Ge();
  Le.frustumCulled = false, m.add(Le);
  const Ve = 2282478;
  let Oe = null;
  const ft = (n, o, a, t) => {
    if (!e.points) return -1;
    const h = e.points.rawVal;
    let d = -1, C = t;
    for (let i = 0; i < h.length; i++) {
      const l = h[i];
      if (!l) continue;
      const u = Math.hypot(n - l[0], o - l[1], a - l[2]);
      u < C && (C = u, d = i);
    }
    return d;
  }, Ue = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Le.children.length; ) {
      const C = Le.children.pop();
      (_b = (_a = C.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = C.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const C of we) {
      const [i, ...l] = C.split(":");
      if (i === "pt") {
        const u = n[+l[0]];
        if (!u) continue;
        const g = new qe(new Ot(0.025, 12, 12), new et({ color: Ve, transparent: true, opacity: 0.9, depthTest: false }));
        g.position.set(u[0], u[1], u[2]), g.renderOrder = 999, g.__isSelectionPt = true, Le.add(g);
      } else if (i === "seg") {
        const u = o[+l[0]], g = n[u == null ? void 0 : u[+l[1]]], c = n[u == null ? void 0 : u[+l[1] + 1]];
        if (!g || !c) continue;
        const w = new re().setFromPoints([new S(g[0], g[1], g[2]), new S(c[0], c[1], c[2])]), k = new _t(w, new ct({ color: Ve, transparent: true, opacity: 0.95, depthTest: false }));
        k.renderOrder = 999, Le.add(k);
      } else if (i === "poly") {
        const g = o[+l[0]].map((k) => {
          const Z = n[k];
          return Z ? new S(Z[0], Z[1], Z[2]) : null;
        }).filter(Boolean);
        if (g.length < 2) continue;
        const c = new re().setFromPoints(g), w = new _t(c, new ct({ color: Ve, transparent: true, opacity: 0.95, depthTest: false }));
        w.renderOrder = 999, Le.add(w);
      } else if (i === "aux") {
        const u = t[+l[0]];
        if (!u || u.length !== 6) continue;
        const g = new re().setFromPoints([new S(u[0], u[1], u[2]), new S(u[3], u[4], u[5])]), c = new _t(g, new ct({ color: Ve, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, Le.add(c);
      }
    }
    const h = window.__hekatanUpdateSelectionPtScale;
    h && h();
    const d = window.__hekatanRefreshPropsPane;
    d && d(), x();
  };
  window.__hekatanRefreshSelection = Ue, window.__hekatanClearSelection = () => {
    we.clear(), Ue();
  };
  const ht = (n, o, a, t, h, d, C, i, l) => {
    const u = C - t, g = i - h, c = l - d, w = u * u + g * g + c * c;
    if (w < 1e-12) return Math.hypot(n - t, o - h, a - d);
    let k = ((n - t) * u + (o - h) * g + (a - d) * c) / w;
    k = Math.max(0, Math.min(1, k));
    const Z = t + k * u, q = h + k * g, O = d + k * c;
    return Math.hypot(n - Z, o - q, a - O);
  }, Ie = (n, o, a, t) => {
    if (!e.polylines) return null;
    const h = e.polylines.rawVal, d = e.points.rawVal;
    let C = -1, i = -1, l = t;
    for (let u = 0; u < h.length; u++) {
      const g = h[u];
      for (let c = 0; c < g.length - 1; c++) {
        const w = d[g[c]], k = d[g[c + 1]];
        if (!w || !k) continue;
        const Z = ht(n, o, a, w[0], w[1], w[2], k[0], k[1], k[2]);
        Z < l && (l = Z, C = u, i = c);
      }
    }
    return C >= 0 ? { polyIdx: C, segIdx: i, dist: l } : null;
  }, it = (n, o, a, t) => {
    const h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? (h == null ? void 0 : h.val) ?? h ?? [];
    let C = -1, i = t;
    for (let l = 0; l < d.length; l++) {
      const u = d[l];
      if (!u || u.length !== 6) continue;
      const g = ht(n, o, a, u[0], u[1], u[2], u[3], u[4], u[5]);
      g < i && (i = g, C = l);
    }
    return C;
  }, tt = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      N.visible = false;
      return;
    }
    N.geometry.setFromPoints([new S(t[0], t[1], t[2]), new S(t[3], t[4], t[5])]), N.visible = true;
  }, Qt = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      N.visible = false;
      return;
    }
    const h = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, d = [];
    if (h || o < 0 || o >= a.length - 1) for (const C of a) {
      const i = t[C];
      i && d.push(new S(i[0], i[1], i[2]));
    }
    else {
      const C = t[a[o]], i = t[a[o + 1]];
      C && d.push(new S(C[0], C[1], C[2])), i && d.push(new S(i[0], i[1], i[2]));
    }
    N.geometry.setFromPoints(d), N.visible = true;
  }, Qe = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((l, u) => u !== n), t = /* @__PURE__ */ new Set();
    for (const l of a) for (const u of l) t.add(u);
    const h = e.points.rawVal, d = /* @__PURE__ */ new Map(), C = [];
    for (let l = 0; l < h.length; l++) t.has(l) && (d.set(l, C.length), C.push(h[l]));
    const i = a.map((l) => l.map((u) => d.get(u)).filter((u) => u !== void 0));
    e.points.val = C, e.polylines.val = i, e.areas && (e.areas.val = e.areas.rawVal.filter((l) => l !== n).map((l) => l > n ? l - 1 : l)), N.visible = false, ae = -1, be = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, Zt = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const a = e.polylines.rawVal;
    if (n < 0 || n >= a.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      Qe(n);
      return;
    }
    const h = a[n];
    if (o < 0 || o >= h.length - 1) return;
    if (h.length === 2) {
      Qe(n);
      return;
    }
    let d;
    o === 0 ? d = [h.slice(1)] : o === h.length - 2 ? d = [h.slice(0, -1)] : d = [h.slice(0, o + 1), h.slice(o + 1)];
    const C = [...a.slice(0, n), ...d, ...a.slice(n + 1)], i = /* @__PURE__ */ new Set();
    for (const w of C) for (const k of w) i.add(k);
    const l = e.points.rawVal, u = /* @__PURE__ */ new Map(), g = [];
    for (let w = 0; w < l.length; w++) i.has(w) && (u.set(w, g.length), g.push(l[w]));
    const c = C.map((w) => w.map((k) => u.get(k)).filter((k) => k !== void 0));
    if (e.points.val = g, e.polylines.val = c, e.areas) {
      const w = d.length - 1;
      e.areas.val = e.areas.rawVal.map((k) => k > n ? k + w : k);
    }
    N.visible = false, ae = -1, be = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  ee.geometry.setAttribute("position", new ut(e.points.rawVal.flat(), 3)), ee.geometry.computeBoundingSphere(), ee.frustumCulled = false, ue.frustumCulled = false, m.add(ue), X.position.set(0, 0, 0), X.rotateX(Math.PI / 2), X.geometry.rotateX(Math.PI / 2), X.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
    if (e.points.val = [...e.points.rawVal, [n, o, a]], e.polylines) {
      const t = e.polylines.rawVal, h = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...h, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const n = e.polylines.rawVal;
    ((_a = n[n.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...n, []]);
  }, window.__hekatanDrawCircle = (n, o, a, t, h = window.__hekatanArcSegs ?? 12, d = "xy") => {
    var _a;
    const C = Math.max(4, Math.round(h)), i = e.points.rawVal.length, l = [];
    for (let u = 0; u < C; u++) {
      const g = 2 * Math.PI * u / C, c = t * Math.cos(g), w = t * Math.sin(g);
      let k;
      d === "xy" ? k = [n + c, o + w, a] : d === "xz" ? k = [n + c, o, a + w] : k = [n, o + c, a + w], l.push(k);
    }
    if (e.points.val = [...e.points.rawVal, ...l], e.polylines) {
      const u = [...l.map((c, w) => i + w), i], g = e.polylines.rawVal;
      ((_a = g[g.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...g, u, []] : e.polylines.val = [...g.slice(0, -1), u, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const h = Math.max(4, Math.round(t)), d = new S(...n), C = new S(...o), i = new S(...a), l = new S().subVectors(C, d), u = new S().subVectors(i, d), g = new S().crossVectors(l, u).normalize(), c = new S().addVectors(d, C).multiplyScalar(0.5), w = new S().addVectors(C, i).multiplyScalar(0.5), k = new S().crossVectors(l, g).normalize(), Z = new S().crossVectors(new S().subVectors(i, C), g).normalize(), q = new S().subVectors(w, c), O = k.x * Z.y - k.y * Z.x;
    let $;
    if (Math.abs(O) > 1e-9) {
      const Ke = (q.x * Z.y - q.y * Z.x) / O;
      $ = new S().addVectors(c, k.clone().multiplyScalar(Ke));
    } else $ = c.clone();
    const ne = d.distanceTo($), Me = new S().subVectors(d, $), ot = new S().subVectors(i, $), ve = Math.acos(Math.max(-1, Math.min(1, Me.dot(ot) / (ne * ne)))), $e = e.points.rawVal.length, yt = [], kt = g.clone();
    for (let Ke = 0; Ke <= h; Ke++) {
      const st = Ke / h, Tt = ve * st, Lt = new Nn().setFromAxisAngle(kt, Tt), zt = Me.clone().applyQuaternion(Lt).add($);
      yt.push([zt.x, zt.y, zt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...yt], e.polylines) {
      const Ke = yt.map((Tt, Lt) => $e + Lt), st = e.polylines.rawVal;
      e.polylines.val = [...st.slice(0, -1), Ke, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, h = 6) => {
    const d = Math.min(n[0], o[0]), C = Math.max(n[0], o[0]), i = Math.min(n[1], o[1]), l = Math.max(n[1], o[1]), u = (n[2] + o[2]) / 2, g = C - d, c = l - i, w = Math.min(a, g / 2 - 0.01, c / 2 - 0.01);
    if (w <= 0) return;
    const k = e.points.rawVal.length, Z = [], q = [], O = ($, ne) => {
      Z.push([$, ne, u]), q.push(k + Z.length - 1);
    };
    for (let $ = 0; $ <= h; $++) O(d + w + (g - 2 * w) * $ / h, i);
    for (let $ = 1; $ <= t; $++) {
      const ne = -Math.PI / 2 + Math.PI / 2 * $ / t;
      O(C - w + w * Math.cos(ne), i + w + w * Math.sin(ne));
    }
    for (let $ = 1; $ <= h; $++) O(C, i + w + (c - 2 * w) * $ / h);
    for (let $ = 1; $ <= t; $++) {
      const ne = 0 + Math.PI / 2 * $ / t;
      O(C - w + w * Math.cos(ne), l - w + w * Math.sin(ne));
    }
    for (let $ = 1; $ <= h; $++) O(C - w - (g - 2 * w) * $ / h, l);
    for (let $ = 1; $ <= t; $++) {
      const ne = Math.PI / 2 + Math.PI / 2 * $ / t;
      O(d + w + w * Math.cos(ne), l - w + w * Math.sin(ne));
    }
    for (let $ = 1; $ <= h; $++) O(d, l - w - (c - 2 * w) * $ / h);
    for (let $ = 1; $ <= t; $++) {
      const ne = Math.PI + Math.PI / 2 * $ / t;
      O(d + w + w * Math.cos(ne), i + w + w * Math.sin(ne));
    }
    if (q.push(k), e.points.val = [...e.points.rawVal, ...Z], e.polylines) {
      const $ = e.polylines.rawVal;
      e.polylines.val = [...$.slice(0, -1), q, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], h = n[1], d = n[2], C = o[0], i = o[1], l = o[2];
    let u;
    if (Math.abs(d - l) < 1e-6 ? u = [[t, h, d], [C, h, d], [C, i, d], [t, i, d]] : Math.abs(h - i) < 1e-6 ? u = [[t, h, d], [C, h, d], [C, h, l], [t, h, l]] : u = [[t, h, d], [t, i, d], [t, i, l], [t, h, l]], e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const g = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), g, []];
    }
  };
  const lt = new Ge();
  lt.visible = false, m.add(lt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; lt.children.length; ) {
      const g = lt.children.pop();
      (_a = g.geometry) == null ? void 0 : _a.dispose(), (_b = g.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const h = Math.min(...o) - t, d = Math.max(...o) + t, C = Math.min(...n) - t, i = Math.max(...n) + t, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", u = (g, c, w, k, Z) => {
      const q = document.createElement("canvas");
      q.width = 64, q.height = 32;
      const O = q.getContext("2d");
      O.fillStyle = Z, O.font = "bold 22px sans-serif", O.textAlign = "center", O.fillText(g, 32, 26);
      const $ = new Zn(q), ne = new Un({ map: $, transparent: true }), Me = new Kn(ne);
      return Me.position.set(c, w, k), Me.scale.set(1.2, 0.6, 1), Me;
    };
    n.forEach((g, c) => {
      const w = c < l.length ? l[c] : `X${c}`, k = new re().setFromPoints([new S(g, h, 0), new S(g, d, 0), new S(g, h, 0), new S(g, h, a)]), Z = new sn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), q = new Dt(k, Z);
      q.computeLineDistances(), lt.add(q), lt.add(u(w, g, h - 0.5, 0, "#60a5fa")), lt.add(u(w, g, d + 0.5, 0, "#60a5fa"));
    }), o.forEach((g, c) => {
      const w = `${c + 1}`, k = new re().setFromPoints([new S(C, g, 0), new S(i, g, 0), new S(C, g, 0), new S(C, g, a)]), Z = new sn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), q = new Dt(k, Z);
      q.computeLineDistances(), lt.add(q), lt.add(u(w, C - 0.5, g, 0, "#fb7185")), lt.add(u(w, i + 0.5, g, 0, "#fb7185"));
    }), lt.visible = true, x();
  }, window.__hekatanHideAxes = () => {
    lt.visible = false, x();
  };
  const Ce = new Ge();
  Ce.visible = false, m.add(Ce);
  let ke = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; Ce.children.length; ) {
      const d = Ce.children.pop();
      (_a = d.geometry) == null ? void 0 : _a.dispose(), (_b = d.material) == null ? void 0 : _b.dispose();
    }
    ke.forEach((d) => {
      m.remove(d), d.geometry.dispose(), d.material.dispose();
    }), ke = [];
    const h = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((d, C) => {
      const i = h[C % h.length], l = o / 2, u = [new S(a - l, t - l, d), new S(a + l, t - l, d), new S(a + l, t + l, d), new S(a - l, t + l, d), new S(a - l, t - l, d)], g = new re().setFromPoints(u), c = new ct({ color: i, transparent: true, opacity: 0.55 });
      Ce.add(new _t(g, c));
      const w = document.createElement("canvas");
      w.width = 128, w.height = 32;
      const k = w.getContext("2d");
      k.fillStyle = `#${i.toString(16).padStart(6, "0")}`, k.font = "bold 18px sans-serif", k.fillText(`Z = ${d} m`, 4, 22);
      const Z = new Zn(w), q = new Un({ map: Z, transparent: true }), O = new Kn(q);
      O.position.set(a - l - 1.5, t - l - 1.5, d), O.scale.set(2.5, 0.6, 1), Ce.add(O);
      const $ = new fn(1e4, 1e4), ne = new et({ visible: false, side: Pt }), Me = new qe($, ne);
      Me.position.set(0, 0, d), Me.frustumCulled = false, Me.userData = { refPlaneZ: d }, m.add(Me), ke.push(Me);
    }), Ce.visible = true, x();
  }, window.__hekatanHideRefPlanes = () => {
    Ce.visible = false, ke.forEach((n) => {
      n.visible = false;
    }), x();
  };
  const he = new Ge();
  he.frustumCulled = false, m.add(he);
  const De = () => {
    var _a, _b, _c, _d;
    for (; he.children.length; ) {
      const a = he.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new re().setFromPoints([new S(a[0], a[1], a[2]), new S(a[3], a[4], a[5])]), h = new sn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), d = new _t(t, h);
      d.computeLineDistances(), he.add(d);
    }
  };
  R.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, De(), x());
  });
  const pe = new Ge();
  pe.frustumCulled = false, m.add(pe);
  const He = () => {
    var _a, _b, _c, _d;
    for (; pe.children.length; ) {
      const a = pe.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new qe(new Ot(0.025, 12, 12), new et({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996;
      const d = p().position.distanceTo(t.position);
      t.scale.setScalar(Math.max(0.05, d / 10)), pe.add(t);
    }
  };
  R.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, He(), x());
  }), r.addEventListener("change", () => {
    const n = p();
    pe.children.forEach((o) => {
      const a = n.position.distanceTo(o.position);
      o.scale.setScalar(Math.max(0.05, a / 10));
    });
  }), window.__hekatanRenderAuxPoints = He;
  const Pe = new Ge(), Et = new qe(new Ot(0.01, 12, 12), new et({ color: 16724804, transparent: true, opacity: 0.95 })), Ne = new qe(new Ot(0.015, 12, 12), new et({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  Pe.add(Et, Ne);
  const Xe = 0.08, mt = (n, o, a) => {
    const t = new re().setFromPoints([new S(...n), new S(...o)]);
    return new _t(t, new ct({ color: a, transparent: true, opacity: 0.7 }));
  };
  Pe.add(mt([-Xe, 0, 0], [Xe, 0, 0], 16711680)), Pe.add(mt([0, -Xe, 0], [0, Xe, 0], 65280)), Pe.add(mt([0, 0, -Xe], [0, 0, Xe], 35071)), Pe.visible = false, Pe.frustumCulled = false, m.add(Pe);
  const vt = 40, Ut = 2.5, $t = () => {
    if (!Pe.visible) return;
    const o = p().position.distanceTo(Pe.position), a = Math.max(0.05, Math.min(Ut, o / vt));
    Pe.scale.setScalar(a);
  }, At = () => {
    if (Le.children.length === 0) return;
    const n = p();
    Le.children.forEach((o) => {
      if (!o.__isSelectionPt) return;
      const a = n.position.distanceTo(o.position), t = Math.max(0.05, a / 10);
      o.scale.setScalar(t);
    });
  };
  window.__hekatanUpdateSelectionPtScale = At, r.addEventListener("change", () => {
    if ($t(), Ae.visible) {
      const o = p().position.distanceTo(Ae.position);
      Ae.scale.setScalar(Math.max(0.05, o / 10));
    }
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = p().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / vt));
    }
    At();
  }), window.__hekatanShowSnap = (n, o, a) => {
    Pe.position.set(n, o, a), Pe.visible = true, $t(), x();
  }, window.__hekatanHideSnap = () => {
    Pe.visible = false, x();
  }, f.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p;
    const o = y(n);
    if (!o) return;
    b.setFromCamera(_, o);
    const a = z();
    if (a.length) {
      const t = a[0].point, h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, h);
      if (d) Bn(d.type, d.x, d.y, d.z), Pe.position.set(d.x, d.y, d.z), Pe.visible = true, t.set(d.x, d.y, d.z);
      else {
        Sn();
        const g = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        g && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), Pe.position.copy(t), Pe.visible = true;
      }
      $t();
      const C = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (C === "select" || !C) {
        const g = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = ft(t.x, t.y, t.z, g), w = Ie(t.x, t.y, t.z, g), k = it(t.x, t.y, t.z, g);
        if (c >= 0) {
          const $ = e.points.rawVal[c];
          Ae.position.set($[0], $[1], $[2]), Ae.visible = true, Be(), Ee.visible = false, Oe = { kind: "pt", a: c };
        } else if (w) {
          const $ = e.points.rawVal, ne = e.polylines.rawVal[w.polyIdx], Me = $[ne[w.segIdx]], ot = $[ne[w.segIdx + 1]];
          Ee.geometry.setFromPoints([new S(Me[0], Me[1], Me[2]), new S(ot[0], ot[1], ot[2])]), Ee.visible = true, Ae.visible = false, Oe = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(w.polyIdx)) ?? false ? { kind: "poly", a: w.polyIdx } : { kind: "seg", a: w.polyIdx, b: w.segIdx };
        } else if (k >= 0) {
          const ne = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[k];
          ne && (Ee.geometry.setFromPoints([new S(ne[0], ne[1], ne[2]), new S(ne[3], ne[4], ne[5])]), Ee.visible = true, Ae.visible = false, Oe = { kind: "aux", a: k });
        } else Ee.visible = false, Ae.visible = false, Oe = null;
        K.style.left = n.clientX + "px", K.style.top = n.clientY + "px", K.style.display = "block";
        let Z = t;
        if ((Oe == null ? void 0 : Oe.kind) === "pt") {
          const $ = e.points.rawVal[Oe.a];
          $ && (Z = new S($[0], $[1], $[2]));
        }
        const q = `X=${Z.x.toFixed(2)} Y=${Z.y.toFixed(2)} Z=${Z.z.toFixed(2)}`;
        if (Oe) {
          const $ = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          K.textContent = `${q}  \xB7  \u{1F5B1} Click \u2192 ${$[Oe.kind]}`;
        } else K.textContent = q;
        const O = document.getElementById("hk-coord-fixed");
        O && (O.textContent = q), A.visible = false, J.visible = false, x();
        return;
      }
      if (C === "delete") {
        const g = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Ie(t.x, t.y, t.z, g), w = it(t.x, t.y, t.z, g);
        let k = false;
        if (w >= 0) if (!c) k = true;
        else {
          const $ = window.__hekatanDrawingAuxLines, Me = (($ == null ? void 0 : $.rawVal) ?? ($ == null ? void 0 : $.val) ?? $ ?? [])[w];
          ht(t.x, t.y, t.z, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5]) < c.dist && (k = true);
        }
        k ? (oe = w, ae = -1, be = -1, tt(w)) : c ? (ae = c.polyIdx, be = c.segIdx, oe = -1, Qt(c.polyIdx, c.segIdx)) : (ae = -1, be = -1, oe = -1, N.visible = false), A.visible = false, J.visible = false, E(), K.style.left = n.clientX + "px", K.style.top = n.clientY + "px", K.style.display = "block";
        const Z = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let q = "";
        k ? q = `\u{1F5D1} l\xEDnea aux #${oe + 1}` : c ? q = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : q = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", K.textContent = `${Z}  \xB7  ${q}`;
        const O = document.getElementById("hk-coord-fixed");
        O && (O.textContent = Z), x();
        return;
      } else N.visible = false, ae = -1, oe = -1;
      K.style.left = n.clientX + "px", K.style.top = n.clientY + "px", K.style.display = "block";
      const i = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], l = i[i.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (l.length > 0 && u[l[l.length - 1]]) {
        const g = l[l.length - 1], c = u[g], w = !!window.__hekatanOrthoMode;
        let k = ze;
        if (!k && w) {
          const Ke = Math.abs(t.x - c[0]), st = Math.abs(t.y - c[1]), Tt = Math.abs(t.z - c[2]), Lt = (_k = a[0]) == null ? void 0 : _k.object;
          let zt = null;
          Lt === at ? zt = "xy" : Lt === L ? zt = "xz" : Lt === j && (zt = "yz"), zt === "xy" ? k = Ke >= st ? "x" : "y" : zt === "xz" ? k = Ke >= Tt ? "x" : "z" : zt === "yz" ? k = st >= Tt ? "y" : "z" : k = Ke >= st && Ke >= Tt ? "x" : st >= Tt ? "y" : "z";
        }
        if (k) {
          const Ke = c[0], st = c[1], Tt = c[2];
          k === "x" ? t.set(t.x, st, Tt) : k === "y" ? t.set(Ke, t.y, Tt) : t.set(Ke, st, t.z);
          const Lt = !!ze, Cn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[k];
          Fe.style.background = "rgba(15,23,42,0.92)", Fe.style.color = Cn, Fe.style.border = `1.5px solid ${Cn}`;
          const zn = (_l = a[0]) == null ? void 0 : _l.object;
          let on = null;
          zn === at ? on = "xy" : zn === L ? on = "xz" : zn === j && (on = "yz");
          const Dn = on ? ` (plano ${on.toUpperCase()})` : "";
          Fe.textContent = Lt ? `\u{1F512} LOCK ${k.toUpperCase()}${Dn}` : `\u22A5 ORTO ${k.toUpperCase()}${Dn}`, Fe.style.left = n.clientX + 20 + "px", Fe.style.top = n.clientY + 18 + "px", Fe.style.transform = "none", Fe.style.display = "block";
        } else ze || (Fe.style.display = "none");
        const Z = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), q = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, O = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        K.textContent = `${O} | \u0394L=${Z.toFixed(2)}m ${q.toFixed(0)}\xB0`;
        const $ = document.getElementById("hk-coord-fixed");
        $ && ($.textContent = O), A.geometry.setFromPoints([new S(c[0], c[1], c[2]), new S(t.x, t.y, t.z)]), (_m = A.computeLineDistances) == null ? void 0 : _m.call(A), A.visible = true, F(c[0], c[1], c[2], t.x, t.y, t.z);
        const ne = window.__hekatanOrthoExt ?? 8, Me = window.__hekatanShowOrthoPlanes !== false;
        Je.visible = Me, Me || Te(null), Me && (Ye(de, c, "xy", ne), Ye(_e, c, "xz", ne), Ye(Re, c, "yz", ne), le(at, c, "xy", ne), le(L, c, "xz", ne), le(j, c, "yz", ne));
        const ot = Me ? b.intersectObjects([at, L, j], false) : [];
        let ve = null;
        if (ot.length > 0) {
          const Ke = ot[0].object;
          Ke === at ? ve = "xy" : Ke === L ? ve = "xz" : Ke === j && (ve = "yz");
        }
        Te(ve), ve && (se.style.left = n.clientX + "px", se.style.top = n.clientY + "px"), fe.geometry.setFromPoints([new S(c[0] - ne, c[1], c[2]), new S(c[0] + ne, c[1], c[2])]), (_n2 = fe.computeLineDistances) == null ? void 0 : _n2.call(fe), Q.geometry.setFromPoints([new S(c[0], c[1] - ne, c[2]), new S(c[0], c[1] + ne, c[2])]), (_o2 = Q.computeLineDistances) == null ? void 0 : _o2.call(Q), Se.geometry.setFromPoints([new S(c[0], c[1], c[2] - ne), new S(c[0], c[1], c[2] + ne)]), (_p = Se.computeLineDistances) == null ? void 0 : _p.call(Se), J.visible = true;
        const $e = fe.material, yt = Q.material, kt = Se.material;
        k === "x" ? ($e.opacity = 0.95, yt.opacity = 0.1, kt.opacity = 0.1) : k === "y" ? ($e.opacity = 0.1, yt.opacity = 0.95, kt.opacity = 0.1) : k === "z" ? ($e.opacity = 0.1, yt.opacity = 0.1, kt.opacity = 0.95) : ($e.opacity = 0.5, yt.opacity = 0.5, kt.opacity = 0.5);
      } else {
        const g = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        K.textContent = g;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = g), A.visible = false, J.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(C)) {
          if (G = null, U = null, D.style.left = n.clientX + 20 + "px", D.style.top = n.clientY - 28 + "px", D.style.display = "block", !V) {
            D.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const k = document.activeElement;
            !(k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && k !== D) && document.activeElement !== D && D.focus({ preventScroll: true });
            try {
              D.select();
            } catch {
            }
          }
        } else E();
      }
      x();
    } else Sn(), K.style.display = "none", Pe.visible = false, A.visible = false, J.visible = false, E(), x();
  }), R.derive(() => {
    e.gridTarget && (Ko(s, { position: new S(...e.gridTarget.val.position), quaternion: new Nn().setFromEuler(new Wn(...e.gridTarget.val.rotation)) }, x), X.position.set(...e.gridTarget.val.position), X.quaternion.setFromEuler(new Wn(...e.gridTarget.val.rotation)), X.updateMatrixWorld());
  }), R.derive(() => {
    ee.geometry.setAttribute("position", new ut(e.points.val.flat(), 3)), ee.geometry.computeBoundingSphere();
  }), R.derive(() => {
    const n = 0.05 * M * 0.5 * v.val;
    b.params.Points.threshold = 0.4 * n;
  }), R.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const d of a) {
      const [C, i, l] = n[d];
      t.push(C, i, l);
    }
    const h = new re();
    h.setAttribute("position", new ut(t, 3)), me.geometry.dispose(), me.geometry = h;
  });
  let wt = false, Vt = 0;
  f.addEventListener("pointerdown", () => {
    wt = true;
  }), f.addEventListener("pointerup", () => {
    wt = false;
  }), f.addEventListener("pointermove", () => {
    wt && Vt++;
  });
  const dt = document.createElement("div");
  dt.id = "hk-window-select", dt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(dt);
  let Ct = null, Yt = false, pt = null;
  const jt = (n, o, a, t, h) => {
    h ? (dt.style.borderColor = "#34d399", dt.style.borderStyle = "dashed", dt.style.background = "rgba(52, 211, 153, 0.10)") : (dt.style.borderColor = "#22d3ee", dt.style.borderStyle = "solid", dt.style.background = "rgba(34, 211, 238, 0.10)"), dt.style.left = Math.min(n, a) + "px", dt.style.top = Math.min(o, t) + "px", dt.style.width = Math.abs(a - n) + "px", dt.style.height = Math.abs(t - o) + "px", dt.style.display = "block";
  }, rn = (n, o, a, t, h) => {
    var _a, _b, _c, _d;
    const d = Math.min(n, a), C = Math.max(n, a), i = Math.min(o, t), l = Math.max(o, t), u = a < n, g = f.getBoundingClientRect(), c = p();
    c.updateMatrixWorld();
    const w = (ve) => {
      const $e = new S(ve[0], ve[1], ve[2]);
      return $e.project(c), { x: g.left + ($e.x * 0.5 + 0.5) * g.width, y: g.top + (-$e.y * 0.5 + 0.5) * g.height };
    }, k = (ve) => ve.x >= d && ve.x <= C && ve.y >= i && ve.y <= l, Z = (ve, $e) => !(ve.x < d && $e.x < d || ve.x > C && $e.x > C || ve.y < i && $e.y < i || ve.y > l && $e.y > l);
    h || we.clear();
    let q = 0;
    const O = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ve = 0; ve < O.length; ve++) {
      const $e = O[ve];
      $e && k(w($e)) && (we.add(`pt:${ve}`), q++);
    }
    const $ = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ne = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ve = 0; ve < $.length; ve++) {
      const $e = $[ve], yt = ne.includes(ve);
      let kt = false;
      for (let Ke = 0; Ke < $e.length - 1; Ke++) {
        const st = O[$e[Ke]], Tt = O[$e[Ke + 1]];
        if (!st || !Tt) continue;
        const Lt = w(st), zt = w(Tt);
        if (u ? k(Lt) || k(zt) || Z(Lt, zt) : k(Lt) && k(zt)) {
          if (yt) {
            kt = true;
            break;
          }
          we.add(`seg:${ve}:${Ke}`), q++;
        }
      }
      yt && kt && (we.add(`poly:${ve}`), q++);
    }
    const ot = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ve = 0; ve < ot.length; ve++) {
      const $e = ot[ve];
      if (!$e || $e.length !== 6) continue;
      const yt = w([$e[0], $e[1], $e[2]]), kt = w([$e[3], $e[4], $e[5]]);
      (u ? k(yt) || k(kt) || Z(yt, kt) : k(yt) && k(kt)) && (we.add(`aux:${ve}`), q++);
    }
    Ue(), ye(`${u ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${q} item(s) ${h ? "agregados a" : "\u2192"} selecci\xF3n (total ${we.size})`), dt.style.display = "none";
  }, qt = () => {
    pt && (pt = null, dt.style.display = "none", ye("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = qt, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && pt && qt();
  });
  const cn = () => {
    var _a, _b, _c, _d;
    if (we.size === 0) return false;
    const n = [...we], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? [], C = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
    for (const Z of n) {
      const [q, ...O] = Z.split(":");
      if (q === "pt") C.add(+O[0]);
      else if (q === "poly") i.add(+O[0]);
      else if (q === "seg") {
        const $ = +O[0], ne = +O[1];
        l.has($) || l.set($, /* @__PURE__ */ new Set()), l.get($).add(ne);
      } else q === "aux" && u.add(+O[0]);
    }
    let g = 0, c = [], w = [];
    const k = /* @__PURE__ */ new Map();
    for (let Z = 0; Z < a.length; Z++) {
      if (i.has(Z)) {
        g++;
        continue;
      }
      k.set(Z, c.length);
      const q = l.get(Z);
      if (q && q.size > 0) {
        let O = [];
        for (let $ = 0; $ < a[Z].length; $++) O.push(a[Z][$]), $ < a[Z].length - 1 && q.has($) && (O.length >= 2 && c.push(O), O = [], g++);
        (O.length >= 2 || O.length === 1) && c.push(O);
      } else c.push([...a[Z]]);
    }
    if (C.size > 0) {
      const Z = [], q = /* @__PURE__ */ new Map();
      for (let $ = 0; $ < o.length; $++) {
        if (C.has($)) {
          g++;
          continue;
        }
        q.set($, Z.length), Z.push([...o[$]]);
      }
      const O = [];
      for (const $ of c) {
        let ne = [];
        for (const Me of $) {
          const ot = q.get(Me);
          ot === void 0 ? (ne.length >= 2 && O.push(ne), ne = []) : ne.push(ot);
        }
        ne.length >= 2 && O.push(ne);
      }
      c = O, e.points.val = Z;
    }
    for (const Z of t) {
      const q = k.get(Z);
      q !== void 0 && q < c.length && w.push(q);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = w), u.size > 0 && h) {
      const Z = d.filter((q, O) => !u.has(O));
      "val" in h ? h.val = Z : window.__hekatanDrawingAuxLines = Z, g += u.size;
    }
    we.clear(), Ue();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return ye(`\u{1F5D1} ${g} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = cn, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) || we.size !== 0 && (n.preventDefault(), cn());
  });
  const bt = document.createElement("div");
  bt.id = "hk-properties-pane";
  const en = "hk-props-pane-pos";
  let Kt = null;
  try {
    const n = localStorage.getItem(en);
    n && (Kt = JSON.parse(n));
  } catch {
  }
  bt.style.cssText = ["position:fixed", Kt ? `left:${Kt.left}px` : "left:50%", Kt ? `top:${Kt.top}px` : "top:8px", Kt ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(bt);
  const dn = () => {
    const n = bt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, h = 0, d = 0;
    n.addEventListener("mousedown", (C) => {
      o = true, a = C.clientX, t = C.clientY;
      const i = bt.getBoundingClientRect();
      h = i.left, d = i.top, bt.style.transform = "none", bt.style.left = `${h}px`, bt.style.top = `${d}px`, C.preventDefault();
    }), window.addEventListener("mousemove", (C) => {
      if (!o) return;
      const i = C.clientX - a, l = C.clientY - t, u = Math.max(0, Math.min(window.innerWidth - 80, h + i)), g = Math.max(0, Math.min(window.innerHeight - 40, d + l));
      bt.style.left = `${u}px`, bt.style.top = `${g}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(en, JSON.stringify({ left: parseFloat(bt.style.left), top: parseFloat(bt.style.top) }));
        } catch {
        }
      }
    });
  }, Y = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let We = null;
  const nt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, pn = () => {
    if (We && (We.dispose(), We = null), we.size === 0) {
      bt.style.display = "none";
      return;
    }
    const n = [...we], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), h = n.filter((c) => c.startsWith("aux:")), d = o.length === n.length && o.length > 0, C = a.length === n.length && a.length > 0, i = t.length === n.length && t.length > 0, l = !d && !C && !i, u = [];
    o.length && u.push(`\u{1F535} ${o.length} nodo(s)`), a.length && u.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && u.push(`\u25AD ${t.length} \xE1rea(s)`), h.length && u.push(`\u250A ${h.length} aux`);
    const g = `\u{1F3AF} ${we.size} item(s) \u2014 ${u.join(", ")}`;
    if (We = new ao({ container: bt, title: g }), d) {
      const c = We.addFolder({ title: "\u{1F4CC} Restraints (DOFs)" });
      c.addBinding(Y, "Ux"), c.addBinding(Y, "Uy"), c.addBinding(Y, "Uz"), c.addBinding(Y, "Rx"), c.addBinding(Y, "Ry"), c.addBinding(Y, "Rz");
      const w = We.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      w.addBinding(Y, "Kx", { label: "Kx", min: 0, step: 100 }), w.addBinding(Y, "Ky", { label: "Ky", min: 0, step: 100 }), w.addBinding(Y, "Kz", { label: "Kz", min: 0, step: 100 }), w.addBinding(Y, "Krx", { label: "Krx", min: 0, step: 1e3 }), w.addBinding(Y, "Kry", { label: "Kry", min: 0, step: 1e3 }), w.addBinding(Y, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const k = We.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      k.addBinding(Y, "Fx", { step: 0.1 }), k.addBinding(Y, "Fy", { step: 0.1 }), k.addBinding(Y, "Fz", { step: 0.1 }), k.addBinding(Y, "Mx", { step: 0.1 }), k.addBinding(Y, "My", { step: 0.1 }), k.addBinding(Y, "Mz", { step: 0.1 }), We.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(Y, "mass", { label: "m", min: 0, step: 1 }), We.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(Y, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), We.addButton({ title: "\u2713 Aplicar a nodos seleccionados" }).on("click", () => {
        const O = [Y.Ux, Y.Uy, Y.Uz, Y.Rx, Y.Ry, Y.Rz];
        O.some((Me) => Me) && nt("nodes", o, "supports", O);
        const $ = [Y.Fx, Y.Fy, Y.Fz, Y.Mx, Y.My, Y.Mz];
        $.some((Me) => Me !== 0) && nt("nodes", o, "loads", $);
        const ne = [Y.Kx, Y.Ky, Y.Kz, Y.Krx, Y.Kry, Y.Krz];
        ne.some((Me) => Me !== 0) && nt("nodes", o, "springs", ne), Y.mass !== 0 && nt("nodes", o, "mass", Y.mass), Y.diaphragm !== "Ninguno" && nt("nodes", o, "diaphragm", Y.diaphragm), ye(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    } else if (C) {
      const c = We.addFolder({ title: "\u{1F4CF} Secci\xF3n frame" });
      c.addBinding(Y, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(Y, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const w = We.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      w.addBinding(Y, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), w.addBinding(Y, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), w.addBinding(Y, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), w.addBinding(Y, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), We.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(Y, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), We.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(Y, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const q = We.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      q.addBinding(Y, "relMxI", { label: "Mx I" }), q.addBinding(Y, "relMyI", { label: "My I" }), q.addBinding(Y, "relMzI", { label: "Mz I" });
      const O = We.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      O.addBinding(Y, "relMxJ", { label: "Mx J" }), O.addBinding(Y, "relMyJ", { label: "My J" }), O.addBinding(Y, "relMzJ", { label: "Mz J" }), We.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(Y, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ne = We.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ne.addBinding(Y, "LKx", { label: "LKx", min: 0, step: 100 }), ne.addBinding(Y, "LKy", { label: "LKy", min: 0, step: 100 }), ne.addBinding(Y, "LKz", { label: "LKz", min: 0, step: 100 });
      const Me = We.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      Me.addBinding(Y, "qx", { step: 0.1 }), Me.addBinding(Y, "qy", { step: 0.1 }), Me.addBinding(Y, "qz", { step: 0.1 }), We.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(Y, "massPerM", { label: "m/L", min: 0, step: 1 }), We.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        nt("segs", a, "section", Y.section), nt("segs", a, "material", Y.material_frame);
        const ve = { A: Y.A_mod, Iz: Y.Iz_mod, Iy: Y.Iy_mod, J: Y.J_mod };
        (ve.A !== 1 || ve.Iz !== 1 || ve.Iy !== 1 || ve.J !== 1) && nt("segs", a, "modifiers", ve), Y.insertionPoint !== "10 \u2014 Centroid" && nt("segs", a, "insertionPoint", Y.insertionPoint), Y.beta !== 0 && nt("segs", a, "beta", Y.beta);
        const $e = [Y.relMxI, Y.relMyI, Y.relMzI], yt = [Y.relMxJ, Y.relMyJ, Y.relMzJ];
        ($e.some((st) => st) || yt.some((st) => st)) && nt("segs", a, "releases", { i: $e, j: yt }), Y.hinges !== "None" && nt("segs", a, "hinges", Y.hinges);
        const kt = [Y.LKx, Y.LKy, Y.LKz];
        kt.some((st) => st !== 0) && nt("segs", a, "lineSprings", kt);
        const Ke = [Y.qx, Y.qy, Y.qz];
        Ke.some((st) => st !== 0) && nt("segs", a, "distLoad", Ke), Y.massPerM !== 0 && nt("segs", a, "massPerM", Y.massPerM), ye(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    } else if (i) {
      const c = We.addFolder({ title: "\u25AD Shell / \xC1rea" });
      c.addBinding(Y, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(Y, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(Y, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), We.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(Y, "surfLoad", { label: "q", step: 0.1 }), We.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        nt("areas", t, "shellType", Y.shellType), nt("areas", t, "thickness", Y.thickness), nt("areas", t, "material", Y.material_shell), Y.surfLoad !== 0 && nt("areas", t, "surfLoad", Y.surfLoad), ye(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    } else if (l) {
      const c = We.addFolder({ title: "\u2139 Selecci\xF3n mixta" }), w = { msg: "Selecciona un solo tipo para editar propiedades" };
      c.addBinding(w, "msg", { readonly: true, label: "" });
    }
    We.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      we.clear(), Ue();
    }), bt.style.display = "block", dn();
  };
  window.__hekatanRefreshPropsPane = pn;
  let Jt = null, un = false;
  f.addEventListener("pointerdown", (n) => {
    n.button === 2 && (Jt = { x: n.clientX, y: n.clientY }, un = false);
  }), f.addEventListener("pointermove", (n) => {
    if (Jt && n.buttons & 2 && !un) {
      const o = n.clientX - Jt.x, a = n.clientY - Jt.y;
      Math.hypot(o, a) > 8 && (un = true);
    }
  }), f.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = Jt !== null && !un;
      Jt = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (pt ? qt() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), we.size > 0 && (we.clear(), Ue()), e.polylines) {
          const d = e.polylines.rawVal;
          (d[d.length - 1] ?? []).length > 0 && (e.polylines.val = [...d, []]);
        }
        const t = window.__hekatanCadState, h = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        h && h !== "select" && h !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), ye(`\u238B Cancelado \u2014 tool '${h}' cerrado, volv\xE9s a Seleccionar`)) : ye("\u238B Cancelado (click derecho)");
      }
    }
  }), f.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), f.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Ct = { x: n.clientX, y: n.clientY }, Yt = false);
  }), f.addEventListener("pointermove", (n) => {
    if (pt && n.buttons === 0) {
      const d = n.clientX < pt.x;
      jt(pt.x, pt.y, n.clientX, n.clientY, d);
      return;
    }
    if (!Ct) return;
    const o = n.clientX - Ct.x, a = n.clientY - Ct.y, t = Math.hypot(o, a);
    if (!Yt && t < 8) return;
    Yt = true;
    const h = n.clientX < Ct.x;
    jt(Ct.x, Ct.y, n.clientX, n.clientY, h);
  }), f.addEventListener("pointerup", (n) => {
    if (!Ct) return;
    if (!Yt) {
      Ct = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    rn(Ct.x, Ct.y, n.clientX, n.clientY, o), Ct = null, Yt = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Xt = new Ge();
  Xt.visible = false, Xt.frustumCulled = false, m.add(Xt);
  const ro = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, Bn = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Xt.children.length; ) {
      const i = Xt.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const h = ro[n] ?? 16777215, d = 0.05, C = new re().setFromPoints([new S(o - d, a - d, t), new S(o + d, a - d, t), new S(o + d, a - d, t), new S(o + d, a + d, t), new S(o + d, a + d, t), new S(o - d, a + d, t), new S(o - d, a + d, t), new S(o - d, a - d, t)]);
    Xt.add(new Dt(C, new ct({ color: h, linewidth: 2 }))), Xt.position.set(0, 0, 0), Xt.visible = true;
  }, Sn = () => {
    Xt.visible = false;
  }, co = (n, o, a, t) => {
    var _a;
    const h = window.__hekatanOsnap, d = e.points.rawVal, C = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let i = null;
    const l = (c, w, k, Z) => {
      const q = Math.hypot(w - n, k - o, Z - a);
      q > t || (!i || q < i.d) && (i = { type: c, x: w, y: k, z: Z, d: q });
    };
    (h.node || h.end) && d.forEach((c) => {
      h.node && l("node", c[0], c[1], c[2]);
    });
    for (const c of C) if (!(c.length < 2)) for (let w = 0; w < c.length - 1; w++) {
      const k = d[c[w]], Z = d[c[w + 1]];
      if (!(!k || !Z) && (h.end && (l("end", k[0], k[1], k[2]), l("end", Z[0], Z[1], Z[2])), h.mid && l("mid", (k[0] + Z[0]) / 2, (k[1] + Z[1]) / 2, (k[2] + Z[2]) / 2), h.nea || h.per)) {
        const q = Z[0] - k[0], O = Z[1] - k[1], $ = Z[2] - k[2], ne = q * q + O * O + $ * $;
        if (ne < 1e-12) continue;
        const Me = Math.max(0, Math.min(1, ((n - k[0]) * q + (o - k[1]) * O + (a - k[2]) * $) / ne)), ot = k[0] + Me * q, ve = k[1] + Me * O, $e = k[2] + Me * $;
        h.nea && l("nea", ot, ve, $e), h.per && l("per", ot, ve, $e);
      }
    }
    const u = window.__hekatanDrawingAuxLines, g = (u == null ? void 0 : u.rawVal) ?? (u == null ? void 0 : u.val) ?? u ?? [];
    for (const c of g) {
      if (c.length !== 6) continue;
      const w = [c[0], c[1], c[2]], k = [c[3], c[4], c[5]];
      if (h.end && (l("end", w[0], w[1], w[2]), l("end", k[0], k[1], k[2])), h.mid && l("mid", (w[0] + k[0]) / 2, (w[1] + k[1]) / 2, (w[2] + k[2]) / 2), h.nea || h.per) {
        const Z = k[0] - w[0], q = k[1] - w[1], O = k[2] - w[2], $ = Z * Z + q * q + O * O;
        if ($ < 1e-12) continue;
        const ne = Math.max(0, Math.min(1, ((n - w[0]) * Z + (o - w[1]) * q + (a - w[2]) * O) / $)), Me = w[0] + ne * Z, ot = w[1] + ne * q, ve = w[2] + ne * O;
        h.nea && l("nea", Me, ot, ve), h.per && l("per", Me, ot, ve);
      }
    }
    return i ? { type: i.type, x: i.x, y: i.y, z: i.z } : null;
  };
  window.__hekatanOsnapCompute = co, window.__hekatanOsnapShow = Bn, window.__hekatanOsnapHide = Sn;
  let Ze = [], Mt = 0;
  const tn = document.createElement("div");
  tn.id = "hk-cad-status", tn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", tn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(tn);
  const po = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), ze && n.push(`\u{1F512} LOCK ${ze.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, ye = (n) => {
    const o = n + po();
    tn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    ye(o);
  }, window.__hekatanCadResetPending = () => {
    Ze = [], ye("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const nn = [], Ht = () => {
    var _a, _b;
    nn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), nn.length > 100 && nn.shift();
  }, Yn = () => {
    var _a;
    const n = nn.pop();
    if (!n) {
      ye("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ze = [], A.visible = false, J.visible = false, E(), ye(`\u21B6 Undo \u2014 ${nn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    x();
  };
  window.__hekatanPushUndo = Ht, window.__hekatanUndo = Yn, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), Yn();
    }
  }, { capture: true });
  const Xn = () => {
    if (Ze = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    ze = null, Ft(), A.visible = false, J.visible = false, E(), ye("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), x();
  };
  window.__hekatanFinalizeDraw = Xn, f.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x;
    if (Vt > 5) {
      Vt = 0;
      return;
    }
    Vt = 0;
    const o = y(n);
    if (!o) return;
    b.setFromCamera(_, o);
    const a = z();
    if (!a.length) return;
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new S(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = i[i.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (l.length > 0) {
        const g = u[l[l.length - 1]];
        if (g) {
          const c = !!window.__hekatanOrthoMode;
          let w = ze;
          if (!w && c) {
            const k = Math.abs(t.x - g[0]), Z = Math.abs(t.y - g[1]), q = Math.abs(t.z - g[2]);
            w = k >= Z && k >= q ? "x" : Z >= q ? "y" : "z";
          }
          w === "x" ? t = new S(t.x, g[1], g[2]) : w === "y" ? t = new S(g[0], t.y, g[2]) : w === "z" && (t = new S(g[0], g[1], t.z));
        }
      }
    }
    const h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, h);
    if (d) t = new S(d.x, d.y, d.z), ye(`\u{1F3AF} Snap [${d.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const i = window.__hekatanSnapEnabled !== false, l = window.__hekatanSnap2D ?? 0;
      i && l > 0 && (t = new S(Math.round(t.x / l) * l, Math.round(t.y / l) * l, Math.round(t.z / l) * l));
    }
    const C = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (C === "select" || C === "none" || !C) {
      if (Oe) {
        pt && qt();
        const { kind: i, a: l, b: u } = Oe, g = u !== void 0 ? `${i}:${l}:${u}` : `${i}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || we.clear(), we.has(g) ? we.delete(g) : we.add(g), Ue(), ye(`\u2713 Seleccionados ${we.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const i = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, u = n.clientY;
        pt ? (rn(pt.x, pt.y, l, u, i), pt = null) : i || (pt = { x: l, y: u }, ye("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), jt(l, u, l + 1, u + 1, false));
      }
      return;
    }
    if (C === "axis") {
      const i = window.__hekatanAxisDraw;
      if (!i) return;
      if (!i.pendingStart) {
        i.pendingStart = [t.x, t.y, t.z], ye(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = i.mode === "number", u = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, i.pendingStart, [t.x, t.y, t.z], l);
      ye(`\u2713 Eje "${u}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (C === "delete") {
      if (oe >= 0) {
        const i = window.__hekatanDrawingAuxLines, l = (i == null ? void 0 : i.rawVal) ?? (i == null ? void 0 : i.val) ?? i ?? [], u = oe;
        if (u >= 0 && u < l.length) {
          Ht();
          const g = l.slice(0, u).concat(l.slice(u + 1));
          i && typeof i == "object" && "val" in i ? i.val = g : window.__hekatanDrawingAuxLines = g, ye(`\u{1F5D1} L\xEDnea auxiliar #${u + 1} borrada`), oe = -1, N.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (ae >= 0) {
        const i = ae, l = be;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(i)) ?? false ? (Qe(i), ye(`\u{1F5D1} \xC1rea #${i + 1} (shell Q4) borrada`)) : l >= 0 ? (Zt(i, l), ye(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${i + 1} borrado`)) : (Qe(i), ye(`\u{1F5D1} Polil\xEDnea #${i + 1} borrada`));
      } else ye("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (C === "circle") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        ye("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [i, l] = Ze, u = Math.hypot(l[0] - i[0], l[1] - i[1], l[2] - i[2]);
      Math.abs(l[0] - i[0]);
      const g = Math.abs(l[1] - i[1]), w = Math.abs(l[2] - i[2]) < 1e-3 ? "xy" : g < 1e-3 ? "xz" : "yz", k = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, i[0], i[1], i[2], u, k, w), ye(`\u2713 C\xEDrculo dibujado en ${w.toUpperCase()} \u2014 r=${u.toFixed(2)}m, ${k} segmentos`), Ze = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (C === "arc") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        ye("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ze.length === 2) {
        ye("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [i, l, u] = Ze, g = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, i, l, u, g), ye(`\u2713 Arco dibujado \u2014 ${g} segmentos`), Ze = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (C === "rect") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        ye("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, l] = Ze;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, i, l), ye(`\u2713 Rect\xE1ngulo dibujado \u2014 (${i[0].toFixed(1)},${i[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ze = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (C === "col") {
      Ht();
      const i = t.z, l = Mt && Mt > 0 ? Mt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + l]];
      const u = e.polylines.rawVal, g = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [g - 2, g - 1], []], Mt = 0, ye(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (C === "wall") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        ye("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [i, l] = Ze, u = Mt && Mt > 0 ? Mt : 3;
      Ht();
      const g = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [i[0], i[1], i[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + u], [i[0], i[1], i[2] + u]];
      const c = e.polylines.rawVal;
      if (c.length - 1, e.polylines.val = [...c.slice(0, -1), ...c[c.length - 1].length > 0 ? [c[c.length - 1]] : [], [g, g + 1, g + 2, g + 3, g], []], e.areas) {
        const w = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, w];
      }
      ye(`\u25A5 Pared Q4 creada \u2014 h=${u.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ze = [], Mt = 0;
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (C === "extp") {
      Ht();
      const i = Mt && Mt > 0 ? Mt : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + i]];
      const u = e.polylines.rawVal, g = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [g - 2, g - 1], []], Mt = 0, ye(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${i.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (C === "extl") {
      const i = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = Ie(t.x, t.y, t.z, i);
      if (!l) {
        ye("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const u = e.polylines.rawVal, g = e.points.rawVal, c = u[l.polyIdx], w = g[c[l.segIdx]], k = g[c[l.segIdx + 1]];
      if (!w || !k) {
        ye("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const Z = Mt && Mt > 0 ? Mt : 3;
      Ht();
      const q = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [w[0], w[1], w[2]], [k[0], k[1], k[2]], [k[0], k[1], k[2] + Z], [w[0], w[1], w[2] + Z]];
      const O = e.polylines.rawVal;
      if (e.polylines.val = [...O.slice(0, -1), ...O[O.length - 1].length > 0 ? [O[O.length - 1]] : [], [q, q + 1, q + 2, q + 3, q], []], e.areas) {
        const $ = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, $];
      }
      Mt = 0, ye(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${Z.toFixed(2)}m`);
      try {
        (_s = window.__hekatanRebuild) == null ? void 0 : _s.call(window);
      } catch {
      }
      return;
    }
    if (C === "auxp") {
      const i = window.__hekatanDrawingAuxPoints;
      if (i) {
        const l = i.rawVal ?? i.val ?? [];
        i.val = [...l, [t.x, t.y, t.z]];
      }
      ye(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (C === "aux") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        ye("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [i, l] = Ze, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const Z = u.rawVal ?? u.val ?? [];
        u.val = [...Z, [i[0], i[1], i[2], l[0], l[1], l[2]]];
      }
      const g = l[0] - i[0], c = l[1] - i[1], w = l[2] - i[2], k = Math.sqrt(g * g + c * c + w * w);
      ye(`\u2713 L\xEDnea auxiliar creada \u2014 L=${k.toFixed(2)}m (cyan, no FEM)`), Ze = [];
      return;
    }
    if (C === "extend") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        ye("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [i, l] = Ze, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const g = u.rawVal ?? u.val ?? [];
        u.val = [...g, [i[0], i[1], i[2], l[0], l[1], l[2]]];
      }
      ye("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ze = [];
      return;
    }
    if (C === "chaflan") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        ye("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, l] = Ze, u = window.__hekatanChaflanR ?? 1, g = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t2 = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t2.call(window, i, l, u, g, 6);
      const c = Math.abs(l[0] - i[0]).toFixed(1), w = Math.abs(l[1] - i[1]).toFixed(1);
      ye(`\u2713 Losa con chaflanes dibujada \u2014 ${c}\xD7${w}m, r=${u}m, ${g} seg/chafl\xE1n`), Ze = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (V = false, Ht(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const i = e.polylines.rawVal, l = i.length - 1, u = i[l] ?? [];
      if (C === "line" && u.length === 2) {
        e.polylines.val = [...i, []], ye("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (C === "area" && u.length === 4) {
        e.polylines.val = [...i.slice(0, -1), [...u, u[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), ye("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (C === "node") ye(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (C === "line") ye("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (C === "polyline") ye("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (C === "area") {
      const i = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      ye(`\u25A6 \xC1rea \u2014 click ${i.length}/4. Marc\xE1 ${4 - i.length} v\xE9rtice${4 - i.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), f.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), f.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = y(n);
    if (!o) return;
    b.setFromCamera(_, o);
    const a = z();
    if (ue.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const C = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = C[C.length - 1] ?? [], l = e.points.rawVal ?? [];
        if (i.length > 0) {
          const u = l[i[i.length - 1]];
          if (u) {
            const g = !!window.__hekatanOrthoMode;
            let c = ze;
            if (!c && g) {
              const w = Math.abs(t.x - u[0]), k = Math.abs(t.y - u[1]), Z = Math.abs(t.z - u[2]);
              c = w >= k && w >= Z ? "x" : k >= Z ? "y" : "z";
            }
            c === "x" ? t.set(t.x, u[1], u[2]) : c === "y" ? t.set(u[0], t.y, u[2]) : c === "z" && t.set(u[0], u[1], t.z);
          }
        }
      }
      const h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, h);
      if (d) t.set(d.x, d.y, d.z);
      else {
        const C = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0.5;
        C && i > 0 && (t.x = Math.round(t.x / i) * i, t.y = Math.round(t.y / i) * i, t.z = Math.round(t.z / i) * i);
      }
      ue.geometry.setAttribute("position", new ut(t.toArray(), 3));
    }
    x();
  }), f.addEventListener("pointermove", (n) => {
    var _a;
    const o = y(n);
    if (!o) return;
    b.setFromCamera(_, o);
    let a = false;
    const t = b.intersectObject(ee), h = z();
    if (t.length && h.length) {
      const d = new S(...e.points.rawVal[t[0].index]), C = new S(...h[0].point), i = d.sub(C), l = (_a = h[0].face) == null ? void 0 : _a.normal;
      l.transformDirection(X.matrixWorld), Math.abs(i.dot(l)) < 1e-4 && (a = true);
    }
    ue.visible = !a;
  });
  let kn = false, _n;
  f.addEventListener("pointermove", (n) => {
    var _a;
    if (!Vt) return;
    const o = y(n);
    if (!o) return;
    b.setFromCamera(_, o);
    let a = false;
    const t = b.intersectObject(ee), h = z();
    if (t.length && h.length) {
      const C = new S(...e.points.rawVal[t[0].index]), i = new S(...h[0].point), l = C.sub(i), u = (_a = h[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(X.matrixWorld), Math.abs(l.dot(u)) < 1e-4 && (a = true);
    }
    if (a && Vt < 5 && (kn = true, r.enabled = false, _n = t[0].index), !kn || Vt % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (_n !== void 0) {
      let C = h[0].point;
      (n.ctrlKey || n.metaKey) && (C = new S(Math.round(C.x), Math.round(C.y), Math.round(C.z))), d[_n] = C.toArray();
    }
    e.points.val = d;
  }), f.addEventListener("pointerup", () => {
    r.enabled = true, kn = false;
  }), f.addEventListener("contextmenu", (n) => {
    var _a;
    const o = y(n);
    if (!o) return;
    b.setFromCamera(_, o);
    let a = false;
    const t = b.intersectObject(ee), h = z();
    if (t.length && h.length) {
      const i = new S(...e.points.rawVal[t[0].index]), l = new S(...h[0].point), u = i.sub(l), g = (_a = h[0].face) == null ? void 0 : _a.normal;
      g.transformDirection(X.matrixWorld), Math.abs(u.dot(g)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const d = [...e.points.rawVal];
    if (d.splice(t[0].index, 1), e.points.val = d, !e.polylines) return;
    const C = e.polylines.rawVal.map((i) => i.filter((l) => l !== t[0].index)).map((i) => i.map((l) => l > t[0].index ? l - 1 : l)).filter((i) => i.length);
    C.push([]), e.polylines.val = C;
  });
}
function Ko(e, s, m) {
  const M = Math.round(14.999999999999998), v = { position: e.position.clone(), quaternion: e.quaternion.clone() }, f = setInterval(b, 1e3 / 30);
  let x = 0;
  function b() {
    x++;
    const _ = x / M;
    e.position.lerpVectors(v.position, s.position, _), e.quaternion.slerpQuaternions(v.quaternion, s.quaternion, _), m && m(), x == M && clearInterval(f);
  }
}
class lo {
  constructor(s, m = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(s, m);
  }
  set(s) {
    return s.isLut === true && this.copy(s), this;
  }
  setMin(s) {
    return this.minV = s, this;
  }
  setMax(s) {
    return this.maxV = s, this;
  }
  setColorMap(s, m = 32) {
    this.map = An[s] || An.rainbow, this.n = m;
    const p = 1 / this.n, r = new xt(), M = new xt();
    this.lut.length = 0, this.lut.push(new xt(this.map[0][1]));
    for (let v = 1; v < m; v++) {
      const f = v * p;
      for (let x = 0; x < this.map.length - 1; x++) if (f > this.map[x][0] && f <= this.map[x + 1][0]) {
        const b = this.map[x][0], _ = this.map[x + 1][0];
        r.setHex(this.map[x][1], hn), M.setHex(this.map[x + 1][1], hn);
        const y = new xt().lerpColors(r, M, (f - b) / (_ - b));
        this.lut.push(y);
      }
    }
    return this.lut.push(new xt(this.map[this.map.length - 1][1])), this;
  }
  copy(s) {
    return this.lut = s.lut, this.map = s.map, this.n = s.n, this.minV = s.minV, this.maxV = s.maxV, this;
  }
  getColor(s) {
    s = mo.clamp(s, this.minV, this.maxV), s = (s - this.minV) / (this.maxV - this.minV);
    const m = Math.round(s * this.n);
    return this.lut[m];
  }
  addColorMap(s, m) {
    return An[s] = m, this;
  }
  createCanvas() {
    const s = document.createElement("canvas");
    return s.width = 1, s.height = this.n, this.updateCanvas(s), s;
  }
  updateCanvas(s) {
    const m = s.getContext("2d", { alpha: false }), p = m.getImageData(0, 0, 1, this.n), r = p.data;
    let M = 0;
    const v = 1 / this.n, f = new xt(), x = new xt(), b = new xt();
    for (let _ = 1; _ >= 0; _ -= v) for (let y = this.map.length - 1; y >= 0; y--) if (_ < this.map[y][0] && _ >= this.map[y - 1][0]) {
      const X = this.map[y - 1][0], W = this.map[y][0];
      f.setHex(this.map[y - 1][1], hn), x.setHex(this.map[y][1], hn), b.lerpColors(f, x, (_ - X) / (W - X)), r[M * 4] = Math.round(b.r * 255), r[M * 4 + 1] = Math.round(b.g * 255), r[M * 4 + 2] = Math.round(b.b * 255), r[M * 4 + 3] = 255, M += 1;
    }
    return m.putImageData(p, 0, 0), s;
  }
}
const An = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, an = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Wo(e) {
  e = Math.max(0, Math.min(1, e));
  for (let m = 0; m < an.length - 1; m++) {
    const [p, r, M, v] = an[m], [f, x, b, _] = an[m + 1];
    if (e <= f) {
      const y = (e - p) / (f - p);
      return [r + (x - r) * y, M + (b - M) * y, v + (_ - v) * y];
    }
  }
  const s = an[an.length - 1];
  return [s[1], s[2], s[3]];
}
function Ho() {
  const s = new Uint8Array(1024);
  for (let p = 0; p < 256; p++) {
    const r = p / 255, [M, v, f] = Wo(r);
    s[p * 4 + 0] = M, s[p * 4 + 1] = v, s[p * 4 + 2] = f, s[p * 4 + 3] = 255;
  }
  const m = new xo(s, 256, 1, go);
  return m.minFilter = Hn, m.magFilter = Hn, m.wrapS = Gn, m.wrapT = Gn, m.needsUpdate = true, m;
}
function Go(e, s, m) {
  new lo();
  const p = Ho(), r = new wo({ uniforms: { cmap: { value: p }, ambient: { value: 0.95 } }, vertexShader: `
      #include <common>
      #include <clipping_planes_pars_vertex>
      attribute float scalar;
      varying float vScalar;
      void main() {
        vScalar = scalar;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <clipping_planes_vertex>
      }
    `, fragmentShader: `
      #include <common>
      #include <clipping_planes_pars_fragment>
      uniform sampler2D cmap;
      uniform float ambient;
      varying float vScalar;
      void main() {
        #include <clipping_planes_fragment>
        // Si NaN (vScalar < -0.5 sentinel), gris neutro
        if (vScalar < -0.5) {
          gl_FragColor = vec4(0.5, 0.5, 0.5, 1.0);
          return;
        }
        vec3 color = texture2D(cmap, vec2(clamp(vScalar, 0.0, 1.0), 0.5)).rgb;
        gl_FragColor = vec4(color * ambient, 1.0);
      }
    `, side: Pt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), M = new qe(new re(), r);
  return M.renderOrder = -1, M.frustumCulled = false, M.userData.isShellArea = true, M.name = "__hekatan_shell_colormap", R.derive(() => {
    M.geometry.setAttribute("position", new ut(e.val.flat(), 3));
    const v = [];
    for (const z of s.val) z.length === 3 ? v.push(z[0], z[1], z[2]) : z.length === 4 && (v.push(z[0], z[1], z[2]), v.push(z[0], z[2], z[3]));
    M.geometry.setIndex(new yo(v, 1));
    const f = m.val.filter((z) => Number.isFinite(z));
    let x, b;
    const _ = Rn.val;
    if (_ ? (b = _[0], x = _[1]) : (x = f.length ? Math.max(...f) : 1, b = f.length ? Math.min(...f) : 0, b >= 0 && x > 0 && (b = 0)), x === b) {
      const z = Math.max(Math.abs(x) * 1e-6, 1e-9);
      x += z, b -= z;
    }
    const y = _ && _[0] > _[1], X = Math.min(b, x), W = Math.max(b, x), H = W - X, ce = new Float32Array(m.val.length);
    for (let z = 0; z < m.val.length; z++) {
      const ee = m.val[z];
      if (!Number.isFinite(ee)) {
        ce[z] = -1;
        continue;
      }
      const me = ((y ? W + X - ee : ee) - X) / H;
      ce[z] = Math.max(0, Math.min(1, me));
    }
    M.geometry.setAttribute("scalar", new je(ce, 1));
  }), M;
}
function qo(e, s, m, p) {
  const r = Go(m, e.elements, p);
  return R.derive(() => {
    r.visible = s.shellResults.val != "none";
  }), r;
}
const Jo = 6, Vn = 10, Oo = 0.012;
function Qo(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function jo(e, s, m, p) {
  if (!m && !p) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && m) {
    const M = m[e];
    if (M && M.has(s)) return M.get(s);
  }
  return null;
}
function es(e, s, m, p) {
  const r = new Ge(), M = new lo();
  M.setColorMap("rainbow");
  const v = new xt(), f = R.state([]);
  return R.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const x = m.val, b = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], _ = Qo(s.frameResults.val);
    if (r.children.forEach((P) => {
      P.geometry && P.geometry.dispose(), P.material && P.material.dispose();
    }), r.clear(), !_ || b.length === 0 || x.length === 0) {
      f.val = [];
      return;
    }
    const y = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, X = (_c = e.deformOutputs) == null ? void 0 : _c.val, W = [], H = [];
    for (let P = 0; P < b.length; P++) {
      if (b[P].length !== 2) continue;
      const te = jo(_, P, y, X);
      te && (W.push(te[0], te[1]), H.push({ idx: P, vals: te }));
    }
    if (W.length === 0) {
      f.val = [];
      return;
    }
    const ce = Math.min(...W), z = Math.max(...W);
    M.setMin(ce), M.setMax(z), f.val = W;
    const ee = [1 / 0, 1 / 0, 1 / 0], ue = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of x) for (let B = 0; B < 3; B++) ee[B] = Math.min(ee[B], P[B]), ue[B] = Math.max(ue[B], P[B]);
    const D = Math.max(ue[0] - ee[0], ue[1] - ee[1], ue[2] - ee[2], 1) * Oo, G = [], U = [], V = [];
    let T = 0;
    for (const { idx: P, vals: B } of H) {
      const te = b[P], K = x[te[0]], xe = x[te[1]];
      if (!K || !xe) continue;
      const A = new S(xe[0] - K[0], xe[1] - K[1], xe[2] - K[2]), J = A.length();
      if (J < 1e-10) continue;
      A.normalize();
      const ie = Math.abs(A.y) < 0.99 ? new S(0, 1, 0) : new S(1, 0, 0), fe = new S().crossVectors(A, ie).normalize(), Q = new S().crossVectors(A, fe).normalize(), Se = Vn + 1, ge = Jo;
      for (let de = 0; de < Se; de++) {
        const _e = de / Vn, Re = K[0] + A.x * J * _e, Je = K[1] + A.y * J * _e, It = K[2] + A.z * J * _e, at = B[0] + (B[1] - B[0]) * _e, L = M.getColor(at) ?? new xt(0, 0, 0);
        v.copy(L).convertSRGBToLinear();
        for (let j = 0; j < ge; j++) {
          const le = j / ge * Math.PI * 2, se = Math.cos(le), Te = Math.sin(le);
          G.push(Re + (fe.x * se + Q.x * Te) * D, Je + (fe.y * se + Q.y * Te) * D, It + (fe.z * se + Q.z * Te) * D), U.push(v.r, v.g, v.b);
        }
      }
      for (let de = 0; de < Vn; de++) for (let _e = 0; _e < ge; _e++) {
        const Re = (_e + 1) % ge, Je = T + de * ge + _e, It = T + de * ge + Re, at = T + (de + 1) * ge + _e, L = T + (de + 1) * ge + Re;
        V.push(Je, It, L), V.push(Je, L, at);
      }
      T += Se * ge;
    }
    if (G.length === 0) return;
    const F = new re();
    F.setAttribute("position", new ut(G, 3)), F.setAttribute("color", new ut(U, 3)), F.setIndex(V), F.computeVertexNormals();
    const E = new et({ vertexColors: true, side: Pt }), I = new qe(F, E);
    I.frustumCulled = false, r.add(I);
  }), r.__colorMapValues = f, r;
}
function ts() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const ns = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, os = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, ss = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function rt(e, s = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(s) : e.toFixed(s);
}
const as = 16755200, eo = 56831, is = 56831, ls = 56831, yn = 65382;
function rs(e) {
  const s = new Ge();
  s.name = "__hekatan_hover", s.renderOrder = 99;
  const m = new Ot(1, 16, 16), p = new et({ color: as, transparent: true, opacity: 0.85, depthTest: false }), r = new qe(m, p);
  r.visible = false, r.renderOrder = 100, s.add(r);
  const M = new re(), v = new ct({ color: eo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), f = new Dt(M, v);
  f.visible = false, f.renderOrder = 100, s.add(f);
  const x = new et({ color: eo, transparent: true, opacity: 0.7, depthTest: false }), b = new qe(new qn(1, 1, 1, 12), x);
  b.visible = false, b.renderOrder = 100, s.add(b);
  const _ = new re(), y = new et({ color: is, transparent: true, opacity: 0.45, side: Pt, depthTest: false }), X = new qe(_, y);
  X.visible = false, X.renderOrder = 100, s.add(X);
  const W = new re(), H = new ct({ color: ls, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ce = new Dt(W, H);
  ce.visible = false, ce.renderOrder = 100, s.add(ce);
  const z = new et({ color: yn, transparent: true, opacity: 0.95, depthTest: false }), ee = new qe(m, z);
  ee.visible = false, ee.renderOrder = 101, s.add(ee);
  const ue = new et({ color: yn, transparent: true, opacity: 0.85, depthTest: false }), me = new qe(new qn(1, 1, 1, 12), ue);
  me.visible = false, me.renderOrder = 101, s.add(me);
  const D = new re(), G = new et({ color: yn, transparent: true, opacity: 0.55, side: Pt, depthTest: false }), U = new qe(D, G);
  U.visible = false, U.renderOrder = 101, s.add(U);
  const V = new re(), T = new ct({ color: yn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), F = new Dt(V, T);
  F.visible = false, F.renderOrder = 101, s.add(F);
  let E = null;
  const I = document.createElement("div");
  Object.assign(I.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), I.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(I);
  }, 0);
  function P(N) {
    const ae = e.derivedNodes.rawVal;
    return !ae || N < 0 || N >= ae.length ? null : new S(ae[N][0], ae[N][1], ae[N][2]);
  }
  function B(N, ae) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s;
    const be = e.getActiveCamera();
    if (!be || !e.mesh) return null;
    const oe = e.rendererElm.getBoundingClientRect(), we = N - oe.left, Ee = ae - oe.top, Ae = e.derivedNodes.rawVal, Be = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Ae || !Be) return null;
    const Le = /* @__PURE__ */ new Map(), Ve = (Ce) => {
      if (Le.has(Ce)) return Le.get(Ce);
      const ke = P(Ce);
      if (!ke) return Le.set(Ce, null), null;
      const he = ke.clone().project(be), De = (he.x * 0.5 + 0.5) * oe.width, pe = (-he.y * 0.5 + 0.5) * oe.height, He = { x: De, y: pe, z: he.z };
      return Le.set(Ce, He), He;
    }, Oe = /* @__PURE__ */ new Set();
    for (const Ce of Be) if (Ce) for (const ke of Ce) Oe.add(ke);
    const ft = 8;
    let Ue = -1, ht = ft;
    for (let Ce = 0; Ce < Ae.length; Ce++) {
      if (!Oe.has(Ce)) continue;
      const ke = Ve(Ce);
      if (!ke || ke.z < -1 || ke.z > 1) continue;
      const he = ke.x - we, De = ke.y - Ee, pe = Math.sqrt(he * he + De * De);
      pe < ht && (ht = pe, Ue = Ce);
    }
    const Ie = ts(), it = os[Ie.dispUnit] ?? 1e3, tt = ns[Ie.forceUnit] ?? 1;
    if (Ue >= 0) {
      const Ce = Ae[Ue];
      let ke = `Nodo ${Ue}
(${Ce[0].toFixed(3)}, ${Ce[1].toFixed(3)}, ${Ce[2].toFixed(3)})`;
      const he = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (he == null ? void 0 : he.deformations) {
        const De = he.deformations.get(Ue);
        if (De && (ke += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, ke += `
Ux = ${rt(De[0] * it, 3)} ${Ie.dispUnit}`, ke += `
Uy = ${rt(De[1] * it, 3)} ${Ie.dispUnit}`, ke += `
Uz = ${rt(De[2] * it, 3)} ${Ie.dispUnit}`, (Math.abs(De[3]) > 1e-9 || Math.abs(De[4]) > 1e-9 || Math.abs(De[5]) > 1e-9) && (ke += `
Rx = ${rt(De[3] * 1e3, 3)} mrad`, ke += `
Ry = ${rt(De[4] * 1e3, 3)} mrad`, ke += `
Rz = ${rt(De[5] * 1e3, 3)} mrad`)), he.reactions) {
          const pe = he.reactions.get(Ue);
          pe && (Math.abs(pe[0]) > 1e-9 || Math.abs(pe[1]) > 1e-9 || Math.abs(pe[2]) > 1e-9 || Math.abs(pe[3]) > 1e-6 || Math.abs(pe[4]) > 1e-6 || Math.abs(pe[5]) > 1e-6) && (ke += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, ke += `
Fx = ${rt(pe[0] * tt)} ${Ie.forceUnit}`, ke += `
Fy = ${rt(pe[1] * tt)} ${Ie.forceUnit}`, ke += `
Fz = ${rt(pe[2] * tt)} ${Ie.forceUnit}`, (Math.abs(pe[3]) > 1e-6 || Math.abs(pe[4]) > 1e-6 || Math.abs(pe[5]) > 1e-6) && (ke += `
Mx = ${rt(pe[3] * tt)} ${Ie.forceUnit}\xB7m`, ke += `
My = ${rt(pe[4] * tt)} ${Ie.forceUnit}\xB7m`, ke += `
Mz = ${rt(pe[5] * tt)} ${Ie.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Ue, info: ke };
    }
    const Qt = 5;
    let Qe = -1, Zt = Qt, lt = "frame";
    for (let Ce = 0; Ce < Be.length; Ce++) {
      const ke = Be[Ce];
      if (!(!ke || ke.length < 2)) {
        if (ke.length === 2) {
          const he = Ve(ke[0]), De = Ve(ke[1]);
          if (!he || !De || he.z < -1 || he.z > 1 || De.z < -1 || De.z > 1) continue;
          const pe = cs(we, Ee, he.x, he.y, De.x, De.y);
          pe < Zt && (Zt = pe, Qe = Ce, lt = "frame");
        } else if (ke.length === 3 || ke.length === 4) {
          const he = [];
          let De = true;
          for (const pe of ke) {
            const He = Ve(pe);
            if (!He || He.z < -1 || He.z > 1) {
              De = false;
              break;
            }
            he.push(He);
          }
          if (!De) continue;
          if (ds(we, Ee, he)) {
            const He = he.reduce((Pe, Et) => Pe + Et.z, 0) / he.length * 1e-3;
            He < Zt && (Zt = He, Qe = Ce, lt = "shell");
          }
        } else if (ke.length === 8) {
          const he = [];
          let De = true;
          for (const Ne of ke) {
            const Xe = Ve(Ne);
            if (!Xe || Xe.z < -1 || Xe.z > 1) {
              De = false;
              break;
            }
            he.push(Xe);
          }
          if (!De) continue;
          const pe = Math.min(...he.map((Ne) => Ne.x)), He = Math.max(...he.map((Ne) => Ne.x)), Pe = Math.min(...he.map((Ne) => Ne.y)), Et = Math.max(...he.map((Ne) => Ne.y));
          if (we >= pe && we <= He && Ee >= Pe && Ee <= Et) {
            const Xe = he.reduce((mt, vt) => mt + vt.z, 0) / he.length * 1e-3;
            Xe < Zt && (Zt = Xe, Qe = Ce, lt = "solid");
          }
        }
      }
    }
    if (Qe >= 0) {
      const Ce = Be[Qe];
      let he = `${lt === "frame" ? "Frame" : lt === "shell" ? "Shell" : "Solid"} ${Qe}`;
      const De = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, pe = (_g = (_f = De == null ? void 0 : De.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Qe);
      if (pe) {
        pe.name && (he += `
  \u{1F4CB} ${pe.name}`), pe.shape && (he += `
  Shape: ${pe.shape}`);
        const He = /concrete|hormig|rect.*sólida/i.test(pe.shape || ""), Pe = He ? 100 : 1e3, Et = He ? "cm" : "mm", Ne = (mt) => {
          const vt = mt * Pe;
          return Math.abs(vt - Math.round(vt)) < 0.05 ? `${Math.round(vt)}` : `${vt.toFixed(1)}`;
        }, Xe = [];
        if (pe.D != null && Xe.push(`D=${Ne(pe.D)}`), pe.B != null && Xe.push(`B=${Ne(pe.B)}`), pe.TF != null && Xe.push(`TF=${Ne(pe.TF)}`), pe.TW != null && Xe.push(`TW=${Ne(pe.TW)}`), pe.t != null && Xe.push(`t=${Ne(pe.t)}`), Xe.length && (he += `
  Dim: ${Xe.join(" ")} ${Et}`), pe.material) {
          let mt = pe.material;
          pe.fillMaterial && (mt += ` + FILL "${pe.fillMaterial}"`), he += `
  Mat: ${mt}`;
        }
      } else {
        const He = (_i = (_h = De == null ? void 0 : De.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Qe), Pe = (_k = (_j = De == null ? void 0 : De.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Qe);
        He ? (he += `
  ${He}`, Pe && !He.includes(Pe) && (he += `  (${Pe})`)) : Pe && (he += `
  Material: ${Pe}`);
      }
      if (he += `
nodos: [${Ce.join(", ")}]`, lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const He = e.mesh.analyzeOutputs.rawVal, Pe = ss[Ie.stressUnit] ?? 1, Et = [["bendingXX", "Mxx", tt, `${Ie.forceUnit}\xB7m/m`], ["bendingYY", "Myy", tt, `${Ie.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", tt, `${Ie.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", tt, `${Ie.forceUnit}/m`], ["membraneYY", "Nyy", tt, `${Ie.forceUnit}/m`], ["membraneXY", "Nxy", tt, `${Ie.forceUnit}/m`], ["shearX", "Qx", tt, `${Ie.forceUnit}/m`], ["shearY", "Qy", tt, `${Ie.forceUnit}/m`], ["vonMises", "\u03C3VM", Pe, Ie.stressUnit], ["pressure", "p", Pe, Ie.stressUnit]], Ne = [];
        for (const [Xe, mt, vt, Ut] of Et) {
          const $t = He == null ? void 0 : He[Xe];
          if ($t && $t instanceof Map) {
            const At = $t.get(Qe);
            if (At != null) {
              if (typeof At == "number") Ne.push(`${mt} = ${rt(At * vt, 3)} ${Ut}`);
              else if (Array.isArray(At)) {
                let wt = At[0];
                for (const Vt of At) Math.abs(Vt) > Math.abs(wt) && (wt = Vt);
                Ne.push(`${mt} = ${rt(wt * vt, 3)} ${Ut}`);
              }
            }
          }
        }
        Ne.length > 0 && (he += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Ne.slice(0, 8).join(`
`));
      }
      if (lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const He = e.mesh.deformOutputs.rawVal, Pe = e.mesh.elementInputs.rawVal, Et = He == null ? void 0 : He.deformations;
        if (Et && Ce.length === 2) {
          const Ne = Et.get(Ce[0]), Xe = Et.get(Ce[1]), mt = Ae[Ce[0]], vt = Ae[Ce[1]];
          if (Ne && Xe && mt && vt) {
            const Ut = vt[0] - mt[0], $t = vt[1] - mt[1], At = vt[2] - mt[2], wt = Math.sqrt(Ut * Ut + $t * $t + At * At);
            if (wt > 1e-9) {
              const Vt = Ut / wt, dt = $t / wt, Ct = At / wt, Yt = (Xe[0] - Ne[0]) * Vt + (Xe[1] - Ne[1]) * dt + (Xe[2] - Ne[2]) * Ct, pt = ((_n = Pe.elasticities) == null ? void 0 : _n.get(Qe)) ?? 0, jt = ((_o2 = Pe.areas) == null ? void 0 : _o2.get(Qe)) ?? 0, rn = ((_p = Pe.momentsOfInertiaY) == null ? void 0 : _p.get(Qe)) ?? 0, qt = ((_q = Pe.momentsOfInertiaZ) == null ? void 0 : _q.get(Qe)) ?? 0, cn = ((_r = Pe.torsionalConstants) == null ? void 0 : _r.get(Qe)) ?? 0, bt = ((_s = Pe.shearModuli) == null ? void 0 : _s.get(Qe)) ?? pt / 2.6, en = pt * jt * (Yt / wt), Kt = (Xe[3] - Ne[3]) * Vt + (Xe[4] - Ne[4]) * dt + (Xe[5] - Ne[5]) * Ct, dn = bt * cn * (Kt / wt), Y = Xe[4] - Ne[4], We = Xe[5] - Ne[5], nt = pt * rn * Y / wt, pn = pt * qt * We / wt;
              he += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, he += `
L = ${rt(wt, 3)} m`, he += `
\u0394L = ${rt(Yt * it, 3)} ${Ie.dispUnit}`, he += `
\u03B5 = ${rt(Yt / wt, 6)}`, Math.abs(en) > 1e-6 && (he += `
N \u2248 ${rt(en * tt)} ${Ie.forceUnit}`), Math.abs(dn) > 1e-6 && (he += `
T \u2248 ${rt(dn * tt)} ${Ie.forceUnit}\xB7m`), Math.abs(nt) > 1e-6 && (he += `
My \u2248 ${rt(nt * tt)} ${Ie.forceUnit}\xB7m`), Math.abs(pn) > 1e-6 && (he += `
Mz \u2248 ${rt(pn * tt)} ${Ie.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: lt, idx: Qe, info: he };
    }
    return null;
  }
  function te(N, ae, be) {
    var _a, _b, _c;
    if (r.visible = false, f.visible = false, b.visible = false, X.visible = false, ce.visible = false, !N || !e.mesh) {
      I.style.display = "none", e.render();
      return;
    }
    const oe = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (N.type === "node") {
      const Be = P(N.idx);
      if (Be) {
        const Le = e.derivedNodes.rawVal ?? [];
        let Ve = 1;
        if (Le.length >= 2) {
          let Ue = [1 / 0, 1 / 0, 1 / 0], ht = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ie of Le) for (let it = 0; it < 3; it++) Ie[it] < Ue[it] && (Ue[it] = Ie[it]), Ie[it] > ht[it] && (ht[it] = Ie[it]);
          Ve = Math.max(ht[0] - Ue[0], ht[1] - Ue[1], ht[2] - Ue[2], 0.1);
        }
        const Oe = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, ft = 0.015 * Ve * Oe;
        r.position.copy(Be), r.scale.setScalar(ft), r.visible = true;
      }
    } else if (N.type === "frame" && oe) {
      const Be = oe[N.idx], Le = P(Be[0]), Ve = P(Be[1]);
      if (Le && Ve) {
        const Oe = Le.clone().add(Ve).multiplyScalar(0.5), ft = Ve.clone().sub(Le), Ue = ft.length(), it = e.getActiveCamera().position.distanceTo(Oe) * 35e-4;
        b.position.copy(Oe);
        const tt = new S(0, 1, 0), Qt = tt.clone().cross(ft).normalize(), Qe = tt.angleTo(ft);
        b.quaternion.setFromAxisAngle(Qt, Qe), b.scale.set(it, Ue, it), b.visible = true;
      }
    } else if (N.type === "shell" && oe) {
      const Be = oe[N.idx], Le = [], Ve = [];
      for (const Oe of Be) {
        const ft = P(Oe);
        if (!ft) return;
        Le.push(ft.x, ft.y, ft.z);
      }
      Be.length === 4 ? Ve.push(0, 1, 2, 0, 2, 3) : Be.length === 3 && Ve.push(0, 1, 2), _.setAttribute("position", new ut(Le, 3)), _.setIndex(Ve), _.computeVertexNormals(), X.visible = true;
    } else if (N.type === "solid" && oe) {
      const Be = oe[N.idx], Le = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ve = [];
      for (const [Oe, ft] of Le) {
        const Ue = P(Be[Oe]), ht = P(Be[ft]);
        Ue && ht && Ve.push(Ue.x, Ue.y, Ue.z, ht.x, ht.y, ht.z);
      }
      W.setAttribute("position", new ut(Ve, 3)), ce.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      I.style.display = "none", e.render();
      return;
    }
    I.textContent = N.info, I.style.whiteSpace = "pre-line", I.style.display = "block";
    const Ee = e.rendererElm.getBoundingClientRect(), Ae = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ee;
    I.style.left = `${ae - Ae.left}px`, I.style.top = `${be - Ae.top}px`, e.render();
  }
  let K = "", xe = 0, A = 0;
  const J = window.__hekatanHoverDebug ?? false, ie = (N) => {
    xe && cancelAnimationFrame(xe), xe = requestAnimationFrame(() => {
      var _a, _b, _c;
      const ae = B(N.clientX, N.clientY);
      if (J && A < 5) {
        const oe = e.derivedNodes.rawVal, we = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${N.clientX}, ${N.clientY}) nodes=${(oe == null ? void 0 : oe.length) ?? 0} elems=${(we == null ? void 0 : we.length) ?? 0} hover=`, ae), A++;
      }
      const be = ae ? `${ae.type}:${ae.idx}` : "";
      if (be !== K) K = be, te(ae, N.clientX, N.clientY);
      else if (ae) {
        const oe = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        I.style.left = `${N.clientX - oe.left}px`, I.style.top = `${N.clientY - oe.top}px`;
      }
    });
  };
  let fe = null;
  const Q = () => {
    K = "", r.visible = false, f.visible = false, b.visible = false, X.visible = false, ce.visible = false, I.style.display = "none", e.render();
  }, Se = (N) => {
    const ae = e.rendererElm.getBoundingClientRect(), be = N.clientX - ae.left, oe = N.clientY - ae.top;
    (be < -2 || oe < -2 || be > ae.width + 2 || oe > ae.height + 2) && (fe && clearTimeout(fe), fe = window.setTimeout(Q, 200));
  }, ge = () => {
    fe && (clearTimeout(fe), fe = null);
  };
  e.rendererElm.addEventListener("pointermove", ie), e.rendererElm.addEventListener("pointerleave", Se), e.rendererElm.addEventListener("pointerenter", ge);
  const de = document.createElement("div");
  Object.assign(de.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), de.classList.add("hekatan-context-menu");
  let _e = null;
  const Re = document.createElement("div");
  Object.assign(Re.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const Je = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], It = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], at = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], L = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], j = (N, ae, be) => {
    const oe = document.createElement("div");
    return oe.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, oe.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${N}</span><span>${ae}</span>`, oe.addEventListener("mouseenter", () => {
      oe.style.background = "rgba(100, 160, 255, 0.22)";
    }), oe.addEventListener("mouseleave", () => {
      oe.style.background = "transparent";
    }), oe.addEventListener("click", (we) => {
      we.stopPropagation();
      const Ee = _e;
      St(), Ee && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${be}`, { detail: { type: Ee.type, idx: Ee.idx, subAction: be } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ee.type, idx: Ee.idx, subAction: be } })));
    }), oe;
  };
  function le(N) {
    Re.innerHTML = "";
    const ae = N === "frame" ? Je : N === "node" ? It : N === "shell" ? at : L, be = document.createElement("div");
    be.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", be.textContent = `Asignar a ${N.toUpperCase()} #${(_e == null ? void 0 : _e.idx) ?? "?"}`, Re.appendChild(be);
    for (const oe of ae) Re.appendChild(j(oe.icon, oe.label, oe.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Re);
  }, 0);
  function se(N, ae) {
    var _a;
    if (!_e) return;
    le(_e.type);
    const be = de.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Re.style.left = `${N + be.width}px`, Re.style.top = `${ae}px`, Re.style.display = "block", setTimeout(() => {
      const oe = Re.getBoundingClientRect();
      oe.right > window.innerWidth - 10 && (Re.style.left = `${N - oe.width}px`);
    }, 0);
  }
  function Te() {
    Re.style.display = "none";
  }
  const Ye = (N, ae, be, oe) => {
    const we = document.createElement("div");
    we.style.cssText = `
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.1s;
      justify-content: space-between;
    `;
    const Ee = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${N}</span><span>${ae}</span></span>`, Ae = be ? '<span style="color:#888;">\u25B8</span>' : "";
    return we.innerHTML = Ee + Ae, we.addEventListener("mouseenter", () => {
      if (we.style.background = "rgba(100, 160, 255, 0.18)", be) {
        const Be = parseFloat(de.style.left || "0"), Le = parseFloat(de.style.top || "0");
        se(Be, Le);
      } else Te();
    }), we.addEventListener("mouseleave", () => {
      we.style.background = "transparent";
    }), we.addEventListener("click", (Be) => {
      if (Be.stopPropagation(), be) return;
      const Le = _e;
      St(), oe(Le);
    }), we;
  }, ze = Ye("\u{1F4DD}", "Asignar", true, () => {
  }), Fe = Ye("\u2139", "Ver informaci\xF3n", false, (N) => {
    N && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: N.type, idx: N.idx } }));
  });
  Fe.addEventListener("mouseenter", () => {
    Te();
  }), de.appendChild(ze), de.appendChild(Fe), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(de);
  }, 0);
  function Ft(N, ae, be) {
    var _a, _b;
    _e = be;
    const oe = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    de.style.left = `${N - oe.left}px`, de.style.top = `${ae - oe.top}px`, de.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function St() {
    de.style.display = "none", Te(), _e = null;
  }
  e.rendererElm.addEventListener("pointerdown", (N) => {
    if (N.button !== 2) return;
    const ae = B(N.clientX, N.clientY);
    window.__hekatanRClickOnElement = !!ae;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (N) => {
    const ae = B(N.clientX, N.clientY);
    if (!ae) {
      St(), window.__hekatanRClickOnElement = false;
      return;
    }
    N.preventDefault(), N.stopImmediatePropagation(), Ft(N.clientX, N.clientY, { type: ae.type, idx: ae.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const Rt = (N) => {
    if (de.style.display !== "block") return;
    const ae = N.target;
    de.contains(ae) || Re.contains(ae) || St();
  };
  document.addEventListener("mousedown", Rt, true), document.addEventListener("keydown", (N) => {
    N.key === "Escape" && de.style.display === "block" && St();
  });
  let Bt = null;
  e.rendererElm.addEventListener("pointerdown", (N) => {
    N.button === 0 && (Bt = { x: N.clientX, y: N.clientY });
  }), e.rendererElm.addEventListener("pointerup", (N) => {
    if (N.button !== 0 || !Bt) return;
    const ae = N.clientX - Bt.x, be = N.clientY - Bt.y;
    if (Bt = null, ae * ae + be * be > 9) return;
    const oe = B(N.clientX, N.clientY);
    oe ? (E = { type: oe.type, idx: oe.idx }, Nt()) : (E = null, Nt());
  });
  function Nt() {
    var _a, _b;
    if (ee.visible = false, me.visible = false, U.visible = false, F.visible = false, !E || !e.mesh) {
      e.render();
      return;
    }
    const N = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (E.type === "node") {
      const ae = P(E.idx);
      if (ae) {
        const be = e.derivedNodes.rawVal ?? [];
        let oe = 1;
        if (be.length >= 2) {
          let Ae = [1 / 0, 1 / 0, 1 / 0], Be = [-1 / 0, -1 / 0, -1 / 0];
          for (const Le of be) for (let Ve = 0; Ve < 3; Ve++) Le[Ve] < Ae[Ve] && (Ae[Ve] = Le[Ve]), Le[Ve] > Be[Ve] && (Be[Ve] = Le[Ve]);
          oe = Math.max(Be[0] - Ae[0], Be[1] - Ae[1], Be[2] - Ae[2], 0.1);
        }
        const we = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ee = 0.017 * oe * we;
        ee.position.copy(ae), ee.scale.setScalar(Ee), ee.visible = true;
      }
    } else if (E.type === "frame" && N) {
      const ae = N[E.idx], be = P(ae[0]), oe = P(ae[1]);
      if (be && oe) {
        const we = be.clone().add(oe).multiplyScalar(0.5), Ee = oe.clone().sub(be), Ae = Ee.length(), Ve = e.getActiveCamera().position.distanceTo(we) * 35e-4;
        me.position.copy(we);
        const Oe = new S(0, 1, 0), ft = Oe.clone().cross(Ee).normalize(), Ue = Oe.angleTo(Ee);
        me.quaternion.setFromAxisAngle(ft, Ue), me.scale.set(Ve, Ae, Ve), me.visible = true;
      }
    } else if (E.type === "shell" && N) {
      const ae = N[E.idx], be = [], oe = [];
      for (const we of ae) {
        const Ee = P(we);
        if (!Ee) return;
        be.push(Ee.x, Ee.y, Ee.z);
      }
      ae.length === 4 ? oe.push(0, 1, 2, 0, 2, 3) : ae.length === 3 && oe.push(0, 1, 2), D.setAttribute("position", new ut(be, 3)), D.setIndex(oe), D.computeVertexNormals(), U.visible = true;
    } else if (E.type === "solid" && N) {
      const ae = N[E.idx], be = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], oe = [];
      for (const [we, Ee] of be) {
        const Ae = P(ae[we]), Be = P(ae[Ee]);
        Ae && Be && oe.push(Ae.x, Ae.y, Ae.z, Be.x, Be.y, Be.z);
      }
      V.setAttribute("position", new ut(oe, 3)), F.visible = true;
    }
    e.render();
  }
  return R.derive(() => {
    e.derivedNodes.val, E && Nt();
  }), s;
}
function cs(e, s, m, p, r, M) {
  const v = r - m, f = M - p, x = v * v + f * f;
  if (x < 1e-9) {
    const H = e - m, ce = s - p;
    return Math.sqrt(H * H + ce * ce);
  }
  let b = ((e - m) * v + (s - p) * f) / x;
  b = Math.max(0, Math.min(1, b));
  const _ = m + b * v, y = p + b * f, X = e - _, W = s - y;
  return Math.sqrt(X * X + W * W);
}
function ds(e, s, m) {
  let p = false;
  for (let r = 0, M = m.length - 1; r < m.length; M = r++) {
    const v = m[r].x, f = m[r].y, x = m[M].x, b = m[M].y;
    f > s != b > s && e < (x - v) * (s - f) / (b - f + 1e-12) + v && (p = !p);
  }
  return p;
}
function to(e, s = 8) {
  const m = document.createElement("div");
  m.id = "legend";
  const p = document.createElement("div");
  p.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", m.appendChild(p), setTimeout(() => {
    R.derive(() => {
      p.textContent = Ln.val ? `[${Ln.val}]` : "";
    });
  });
  const r = Array.from({ length: s + 1 }, (x, b) => b / s).reverse();
  let M, v;
  r.forEach((x, b) => {
    M = document.createElement("div"), M.id = `marker-${b}`, M.className = "marker", M.style.marginTop = b == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, v = document.createElement("p"), v.id = `marker-text-${b}`, M.append(v), m.append(M);
  });
  const f = [];
  return m.querySelectorAll("p").forEach((x) => f.push(x)), setTimeout(() => {
    R.derive(() => {
      r.forEach((x, b) => {
        const _ = f[b];
        _ && (_.innerText = ps(e.val, x).toString());
      });
    });
  }), m;
}
function ps(e, s) {
  const m = Rn.val;
  if (m) return (m[0] + s * (m[1] - m[0])).toPrecision(3);
  const p = e.filter((v) => Number.isFinite(v));
  if (p.length === 0) return "0";
  let r = Math.min(...p);
  const M = Math.max(...p);
  return r >= 0 && M > 0 && (r = 0), (r + s * (M - r)).toPrecision(3);
}
function Ms({ mesh: e, settingsObj: s, drawingObj: m, objects3D: p, solids: r }) {
  _o.DEFAULT_UP = new S(0, 0, 1);
  const M = document.createElement("div"), v = new vo(), f = new bo(45, 1, 0.1, 2 * 1e6), x = new Mo(-10, 10, 10, -10, -1e3, 2e6);
  let b = f;
  const _ = new So({ antialias: true });
  _.localClippingEnabled = true;
  const y = new Jn(f, _.domElement);
  y.enableDamping = true, y.dampingFactor = 0.1, y.screenSpacePanning = true, y.zoomSpeed = 0.8, y.panSpeed = 1.2, y.rotateSpeed = 0.9, y.keyPanSpeed = 12, y.listenToKeyEvents(window), y.touches = { ONE: mn.ROTATE, TWO: mn.DOLLY_PAN }, _.domElement.addEventListener("wheel", (L) => {
    if (!L.ctrlKey && Math.abs(L.deltaX) > Math.abs(L.deltaY) * 1.5) {
      L.preventDefault();
      const j = y.target, le = new S().subVectors(f.position, j), se = new S();
      se.crossVectors(f.up, le).normalize();
      const Ye = le.length() * 1e-3 * y.panSpeed;
      j.addScaledVector(se, L.deltaX * Ye), f.position.addScaledVector(se, L.deltaX * Ye), y.update();
    }
  }, { passive: false });
  const X = new Fn(new S(-1, 0, 0), 0), W = new Fn(new S(0, -1, 0), 0), H = new Fn(new S(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ce() {
    const L = window.__hekatanClip, j = [];
    L.enableX && (X.normal.set(L.invertX ? 1 : -1, 0, 0), X.constant = L.invertX ? -L.posX : L.posX, j.push(X)), L.enableY && (W.normal.set(0, L.invertY ? 1 : -1, 0), W.constant = L.invertY ? -L.posY : L.posY, j.push(W)), L.enableZ && (H.normal.set(0, 0, L.invertZ ? 1 : -1), H.constant = L.invertZ ? -L.posZ : L.posZ, j.push(H)), _.clippingPlanes = j, v.traverse((se) => {
      const Te = se;
      if (Te.material) {
        const Ye = Array.isArray(Te.material) ? Te.material : [Te.material];
        for (const ze of Ye) ze.clippingPlanes = j, ze.needsUpdate = true;
      }
    });
    const le = window.__hekatanPanes ?? [];
    for (const se of le) try {
      se && typeof se.refresh == "function" && se.refresh();
    } catch {
    }
    _.render(v, b);
  }
  ce(), window.__hekatanClipApply = ce;
  const z = zo(s), ee = R.derive(() => z.displayScale.val === 0 ? 1 : z.displayScale.val > 0 ? z.displayScale.val : -1 / z.displayScale.val), ue = us(e, z), me = () => {
    const L = [];
    return z.gridXY.rawVal && L.push("xy"), z.gridXZ.rawVal && L.push("xz"), z.gridYZ.rawVal && L.push("yz"), L;
  }, D = () => {
    const L = z.gridStep.rawVal, j = Math.max(L, z.gridMajor.rawVal);
    return { planes: me(), majorStep: j, minorStep: L };
  };
  let G = En(z.gridSize.rawVal, D());
  G.visible = z.gridVisible.rawVal, window.__hekatanSnap2D = z.cursorSnap.rawVal;
  const U = () => {
    const L = Math.max(0, Math.min(1, z.gridOpacity.rawVal));
    G.traverse((j) => {
      const le = j.material;
      if (!le || !("opacity" in le)) return;
      const se = j.name ?? "";
      let Te = 0.35;
      se.includes("border") ? Te = 1 : se.includes("major") && (Te = 0.75), le.opacity = L * Te;
    });
  };
  U(), M.appendChild(Co(z, e, r)), M.setAttribute("id", "viewer"), M.appendChild(_.domElement), _.setPixelRatio(window.devicePixelRatio);
  const V = Wt();
  _.setClearColor(V.background, 1);
  const T = z.gridSize.rawVal, F = T * 0.5 + T * 0.5 / Math.tan(45 * 0.5);
  f.position.set(0, 0, F), f.up.set(0, 1, 0), y.target.set(0, 0, 0), y.minDistance = 0.1, y.maxDistance = 1e4, M.__settings = z, y.zoomSpeed = 1;
  let E = 100, I = 0;
  _.domElement.addEventListener("wheel", (L) => {
    E = L.deltaY, I = L.deltaMode;
  }, { passive: true, capture: true }), y._getZoomScale = function() {
    const L = Math.abs(E);
    if (L >= 80 && I === 0) return Math.pow(0.9, this.zoomSpeed);
    if (I === 1) return Math.pow(0.88, this.zoomSpeed);
    const j = Math.max(0.05, Math.min(L / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * j);
  }, y.update();
  let P = Qn(z.gridSize.rawVal, z.flipAxes.rawVal);
  v.add(G, P), R.derive(() => {
    window.__hekatanGridPlaneXY = z.gridXY.val, window.__hekatanGridPlaneXZ = z.gridXZ.val, window.__hekatanGridPlaneYZ = z.gridYZ.val;
  });
  let B = true;
  R.derive(() => {
    const L = z.gridVisible.val;
    if (B) {
      B = false;
      return;
    }
    G.visible = L, Q();
  });
  let te = true;
  R.derive(() => {
    if (z.gridOpacity.val, te) {
      te = false;
      return;
    }
    U(), Q();
  }), R.derive(() => {
    const L = z.cursorSnap.val;
    window.__hekatanSnap2D = L;
  });
  let K = true;
  R.derive(() => {
    var _a;
    const L = z.gridSize.val, j = z.flipAxes.val;
    if (z.gridXY.val, z.gridXZ.val, z.gridYZ.val, z.gridStep.val, z.gridMajor.val, K) {
      K = false;
      return;
    }
    v.remove(G), (_a = G.traverse) == null ? void 0 : _a.call(G, (Te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), G = En(L, D()), G.visible = z.gridVisible.rawVal, v.add(G), U(), v.remove(P), P.traverse((Te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), P = Qn(L, j), v.add(P);
    const le = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
    f.position.distanceTo(y.target), Math.abs(f.position.x) < 0.1 && Math.abs(f.position.y) < 0.1 && f.position.z > 0 ? f.position.set(0, 0, le) : f.position.set(0.5 * L, -le, 0.5 * L), y.target.set(0, 0, 0), y.minDistance = Math.max(0.05, L * 0.01), y.maxDistance = Math.max(50, L * 50), y.update(), Q();
  }), new ResizeObserver((L) => {
    var _a, _b;
    for (const j of L) {
      const le = (_a = j.target) == null ? void 0 : _a.clientWidth, se = (_b = j.target) == null ? void 0 : _b.clientHeight;
      if (le === 0 || se === 0) continue;
      const Ye = (A ? le / 2 : le) / se;
      f.aspect = Ye, f.updateProjectionMatrix();
      const ze = x.top;
      if (x.left = -ze * Ye, x.right = ze * Ye, x.updateProjectionMatrix(), J && J.isPerspectiveCamera) J.aspect = Ye, J.updateProjectionMatrix();
      else if (J && J.isOrthographicCamera) {
        const Fe = J, Ft = Fe.top;
        Fe.left = -Ft * Ye, Fe.right = Ft * Ye, Fe.updateProjectionMatrix();
      }
      _.setSize(le, se), Q();
    }
  }).observe(M), y.addEventListener("change", Q), R.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, z.displayScale.val, z.nodes.val, z.elements.val, (_g = z.edges) == null ? void 0 : _g.val, z.elemColumns.val, z.elemBeams.val, z.nodesIndexes.val, z.elementsIndexes.val, z.orientations.val, z.sections.val, z.secColumns.val, z.secBeams.val, z.secFloor.val, z.supports.val, z.loads.val, z.deformedShape.val, z.nodeResults.val, z.frameResults.val, z.shellResults.val, (_h = z.solidResults) == null ? void 0 : _h.val, setTimeout(Q);
  });
  let A = false, J = null, ie = null, fe = false;
  function Q() {
    const L = M.clientWidth || 1, j = M.clientHeight || 1;
    if (!A || !J) {
      _.setScissorTest(false), _.setViewport(0, 0, L, j), _.render(v, b);
      return;
    }
    const le = L / 2;
    _.setScissorTest(true), _.setViewport(0, 0, le, j), _.setScissor(0, 0, le, j), _.render(v, b), _.setViewport(le, 0, le, j), _.setScissor(le, 0, le, j), _.render(v, J), _.setScissorTest(false);
  }
  function Se(L) {
    b = L, y.object = L, y.update(), Q();
  }
  function ge(L, j) {
    A = L, j && (J = j);
    const le = M.clientWidth || 1, se = M.clientHeight || 1, Ye = (L ? le / 2 : le) / se;
    f.isPerspectiveCamera && (f.aspect = Ye, f.updateProjectionMatrix());
    const ze = x.top;
    if (x.left = -ze * Ye, x.right = ze * Ye, x.updateProjectionMatrix(), L && J) {
      if (ie ? (ie.object = J, ie.update()) : (ie = new Jn(J, _.domElement), ie.enableDamping = true, ie.dampingFactor = 0.1, ie.screenSpacePanning = true, ie.zoomSpeed = 0.8, ie.panSpeed = 1.2, ie.rotateSpeed = 0.9, ie.touches = { ONE: mn.ROTATE, TWO: mn.DOLLY_PAN }, ie._getZoomScale = function() {
        const Fe = Math.abs(E);
        if (Fe >= 80 && I === 0) return Math.pow(0.9, this.zoomSpeed);
        if (I === 1) return Math.pow(0.88, this.zoomSpeed);
        const Ft = Math.max(0.05, Math.min(Fe / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * Ft);
      }, ie.target.copy(y.target), ie.addEventListener("change", Q), ie.enabled = false), !fe) {
        const Fe = (Ft) => {
          if (!A || !ie) return;
          const St = _.domElement.getBoundingClientRect(), Rt = Ft.clientX - St.left, Bt = St.width / 2, Nt = Rt >= Bt;
          y.enabled = !Nt, ie.enabled = Nt;
        };
        _.domElement.addEventListener("pointerdown", Fe, true), _.domElement.addEventListener("wheel", Fe, { capture: true, passive: true }), fe = true;
      }
    } else L || (y.enabled = true, ie && (ie.enabled = false));
    M.__splitMode = L, window.__hekatanSplitMode = L, window.__hekatanSplitCamera = L ? J : null, Q();
  }
  if (e) {
    v.add(Po(z, ue, ee), Fo(e, z, ue), To(z, ue, ee), Lo(e, z, ue, ee), Ao(e, z, ue, ee), Vo(e, z, ue, ee), Ro(e, z, ue, ee), Yo(e, z, ue, ee), Zo(e, z, ue, ee), Xo(e, z, ue, ee));
    const L = rs({ scene: v, rendererElm: _.domElement, getActiveCamera: () => b, derivedNodes: ue, derivedDisplayScale: ee, mesh: e, settings: z, render: Q });
    v.add(L);
    const j = xs(e, z), le = qo(e, z, ue, j), se = to(j);
    v.add(le), M.appendChild(se);
    const Te = es(e, z, ue);
    v.add(Te);
    const Ye = Te.__colorMapValues, ze = to(Ye);
    ze.id = "frame-legend", M.appendChild(ze), R.derive(() => {
      var _a;
      const Fe = z.shellResults.val != "none", Ft = (((_a = z.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", St = Fe || Ft, Rt = z.frameResults.val.startsWith("contour:");
      se.hidden = !St, le.visible = St, ze.hidden = !Rt;
    });
  }
  if (r) {
    const L = new ko(16777215, 0.5);
    v.add(L);
    const j = new On(16777215, 0.5);
    j.position.set(30, 25, -10), j.shadow.mapSize.width = 1024, j.shadow.mapSize.height = 1024, v.add(j);
    const le = 10;
    j.shadow.camera.left = -le, j.shadow.camera.right = le, j.shadow.camera.top = le, j.shadow.camera.bottom = -le, j.shadow.camera.far = 1e3;
    const se = new On(16777215, 0.5);
    se.color.setHSL(11, 43, 96), se.position.set(-10, 0, 30), v.add(se), R.derive(() => {
      (r == null ? void 0 : r.val.length) && (v.remove(...r.oldVal), v.add(...r.rawVal), Q());
    }), R.derive(() => {
      r.rawVal.forEach((Te) => Te.visible = z.solids.val), Q();
    });
  }
  if (p) {
    const L = [], j = (se) => {
      var _a, _b;
      return ((_a = se == null ? void 0 : se.userData) == null ? void 0 : _a.isCota) ? z.showCotas.val : ((_b = se == null ? void 0 : se.userData) == null ? void 0 : _b.isDistLoad) ? z.loads.val : z.custom3D.val;
    }, le = () => {
      for (const se of L) se.visible = j(se);
      Q();
    };
    R.derive(() => {
      const se = p.val;
      L.length && (v.remove(...L), L.length = 0), se.length && (v.add(...se), L.push(...se), le()), Q();
    }), R.derive(() => {
      z.custom3D.val, le();
    }), R.derive(() => {
      z.showCotas.val, le();
    }), R.derive(() => {
      z.loads.val, le();
    });
  }
  m && Uo({ drawingObj: m, gridObj: G, scene: v, getActiveCamera: () => b, controls: y, gridSize: T, derivedDisplayScale: ee, rendererElm: _.domElement, viewerRender: Q }), Mn((L, j) => {
    var _a;
    _.setClearColor(j.background, 1), v.remove(G), (_a = G.traverse) == null ? void 0 : _a.call(G, (le) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = le.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = le.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), G = En(z.gridSize.rawVal, { planes: me() }), v.add(G), M.style.setProperty("--awatif-legend-color", j.legendMarker), Q();
  });
  const de = { scene: v, perspCamera: f, orthoCamera: x, get camera() {
    return b;
  }, controls: y, renderer: _, rendererElm: _.domElement, render: Q, setActiveCamera: Se, setSplitMode: ge, get splitMode() {
    return A;
  }, get splitCamera() {
    return J;
  }, settings: z };
  M.__ctx = de;
  const _e = document.createElement("div");
  _e.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Re = (L, j, le) => {
    const se = document.createElement("button");
    return se.textContent = L, se.title = j, se.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), se.onmouseenter = () => {
      se.style.background = "rgba(70,70,70,0.9)";
    }, se.onmouseleave = () => {
      se.style.background = "rgba(40,40,40,0.85)";
    }, se.onclick = (Te) => {
      Te.preventDefault(), le();
    }, se;
  }, Je = (L, j) => {
    const le = y.target, se = new S().subVectors(b.position, le), Te = se.length(), Ye = new S(), ze = new S();
    Ye.crossVectors(b.up, se).normalize(), ze.copy(b.up).normalize();
    const Fe = Te * 0.05;
    le.addScaledVector(Ye, -L * Fe), le.addScaledVector(ze, j * Fe), b.position.addScaledVector(Ye, -L * Fe), b.position.addScaledVector(ze, j * Fe), y.update(), Q();
  }, It = (L) => {
    const j = new S().subVectors(b.position, y.target);
    j.multiplyScalar(L), b.position.copy(y.target).add(j), y.update(), Q();
  }, at = () => {
    const L = document.createElement("div");
    return L.style.cssText = "width:32px;height:32px;", L;
  };
  return _e.append(at()), _e.append(Re("\u2191", "Pan arriba", () => Je(0, 1))), _e.append(Re("\u2295", "Zoom in", () => It(0.85))), _e.append(Re("\u2190", "Pan izquierda", () => Je(-1, 0))), _e.append(Re("\u2302", "Reset vista", () => {
    y.reset(), Q();
  })), _e.append(Re("\u2192", "Pan derecha", () => Je(1, 0))), _e.append(Re("\u2296", "Zoom out", () => It(1.18))), _e.append(Re("\u2193", "Pan abajo", () => Je(0, -1))), _e.append(at()), getComputedStyle(M).position === "static" && (M.style.position = "relative"), M.appendChild(_e), M;
}
function us(e, s) {
  return R.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const m = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], p = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!p || m.length === 0) return m;
    const r = s.deformScale.val, M = s.deformScale.val * s.deformScaleZ.val, v = Number.isFinite(r) ? r : 1, f = Number.isFinite(M) ? M : 1;
    return m.map((x, b) => {
      var _a2;
      const _ = ((_a2 = p.get(b)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], y = Number.isFinite(_[0]) ? _[0] : 0, X = Number.isFinite(_[1]) ? _[1] : 0, W = Number.isFinite(_[2]) ? _[2] : 0;
      return [x[0] + y * v, x[1] + X * v, x[2] + W * f];
    });
  });
}
const Rn = R.state(null), Ln = R.state(""), fs = R.state("kN"), hs = R.state("mm"), ms = R.state("kN/m\xB2"), ws = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, no = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, ys = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function xs(e, s) {
  const m = R.state([]);
  let p;
  return ((r) => {
    r.bendingXX = "bendingXX", r.bendingYY = "bendingYY", r.bendingXY = "bendingXY", r.membraneXX = "membraneXX", r.membraneYY = "membraneYY", r.membraneXY = "membraneXY", r.tranverseShearX = "tranverseShearX", r.tranverseShearY = "tranverseShearY", r.vonMises = "vonMises", r.pressure = "pressure", r.displacementX = "displacementX", r.displacementY = "displacementY", r.displacementZ = "displacementZ";
  })(p || (p = {})), R.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const r = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), H = (Se, ge) => {
      Se == null ? void 0 : Se.forEach((de, _e2) => {
        const Re = e.elements.val[_e2];
        if (Re) for (let Je = 0; Je < Re.length; Je++) ge.set(Re[Je], [de[Je] ?? de[0]]);
      });
    };
    H((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, r), H((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, M), H((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, v), H((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, f), H((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, x), H((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), H((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, _), H((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, y), H((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, X), H((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, W);
    const ce = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, z = (_w = s.solidResults) == null ? void 0 : _w.val, ue = z && z !== "none" ? z : s.shellResults.val, me = ce == null ? void 0 : ce[ue], D = { bendingXX: [r, 0], bendingYY: [M, 0], bendingXY: [v, 0], membraneXX: [f, 0], membraneYY: [x, 0], membraneXY: [b, 0], tranverseShearX: [_, 0], tranverseShearY: [y, 0], vonMises: [X, 0], pressure: [W, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, G = s.shellResults.val, U = fs.val, V = hs.val, T = G === "displacementX" || G === "displacementY" || G === "displacementZ", F = G === "bendingXX" || G === "bendingYY" || G === "bendingXY", E = G === "membraneXX" || G === "membraneYY" || G === "membraneXY", I = G === "vonMises" || G === "pressure", P = G === "tranverseShearX" || G === "tranverseShearY", B = (_D = s.solidResults) == null ? void 0 : _D.val, te = B === "vonMises" || B === "sigmaXX" || B === "sigmaYY" || B === "sigmaZZ" || B === "tauXY" || B === "tauYZ" || B === "tauXZ", K = B === "ux" || B === "uy" || B === "uz", xe = ms.val, A = te ? ys[xe] : K || T ? no[V] : F || E || I || P ? 1 / ws[U] : 1, J = te ? xe : K || T ? V : F ? `${U}\xB7m/m` : E ? `${U}/m\xB2` : I ? `${U}/m\xB2` : P ? `${U}/m` : "";
    Ln.val = J, Rn.val = Array.isArray(me) && me.length === 2 ? [me[0] * A, me[1] * A] : null;
    const fe = B && B !== "none" ? [X, 0] : D[G], Q = [];
    e.nodes.val.forEach((Se, ge) => {
      const de = fe;
      if (!de || !de[0] || typeof de[0].has != "function") return;
      if (!de[0].has(ge)) {
        Q.push(Number.NaN);
        return;
      }
      const _e2 = de[0].get(ge), Re = _e2 ? _e2[de[1]] ?? 0 : 0;
      Q.push(Re * A);
    }), m.val = Q;
  }), m;
}
export {
  Go as a,
  to as b,
  fs as c,
  hs as d,
  ms as e,
  Ms as g
};
