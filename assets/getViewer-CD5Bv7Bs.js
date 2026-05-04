import { X as vt, B as ae, Y as gt, F as Xe, G as Me, d as it, L as Ye, e as Ee, D as Le, b as Fe, v as Pe, Z as cn, c as _n, V as v, y as tt, z as Ce, _ as Tt, k as dn, a as $e, f as be, h as bt, $ as Mt, l as Sn, j as kn, q as mt, K as pt, a0 as Kt, m as qt, o as Qt, p as Jt, S as Ot, a1 as jt, a2 as wt, a3 as Pn, a4 as Cn, a5 as Vn, a6 as zn, a7 as Fn, n as en, a8 as tn, u as An, s as Tn, O as En, W as Xn, w as nn, a9 as xt, I as Et, A as Yn, x as on, t as Ln } from "./Text-zqZVOzPB.js";
import { v as I, P as In, g as Qe, o as _t } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function Rn(e, n, u) {
  const r = document.createElement("div"), a = new In({ title: "Settings", expanded: true, container: r });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(a), r.setAttribute("id", "settings");
  const w = "hk_settingsPos";
  let h = null;
  try {
    const m = localStorage.getItem(w);
    m && (h = JSON.parse(m));
  } catch {
  }
  r.style.cssText = ["position:fixed", h ? `left:${h.left}px` : "left:8px", h ? `top:${h.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const p = () => {
    const m = r.querySelector(".tp-rotv_b");
    if (!m) {
      setTimeout(p, 200);
      return;
    }
    m.style.cursor = "move", m.style.userSelect = "none";
    let N = false, H = 0, $ = 0, le = 0, f = 0;
    m.addEventListener("mousedown", (Q) => {
      N = true, H = Q.clientX, $ = Q.clientY;
      const J = r.getBoundingClientRect();
      le = J.left, f = J.top, r.style.left = `${le}px`, r.style.top = `${f}px`;
    }), window.addEventListener("mousemove", (Q) => {
      if (!N) return;
      const J = Q.clientX - H, de = Q.clientY - $, W = Math.max(0, Math.min(window.innerWidth - 40, le + J)), F = Math.max(0, Math.min(window.innerHeight - 40, f + de));
      r.style.left = `${W}px`, r.style.top = `${F}px`;
    }), window.addEventListener("mouseup", () => {
      if (N) {
        N = false;
        try {
          localStorage.setItem(w, JSON.stringify({ left: parseFloat(r.style.left), top: parseFloat(r.style.top) }));
        } catch {
        }
      }
    });
  };
  if (p(), n == null ? void 0 : n.nodes) {
    a.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 });
    const m = a.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    m.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), m.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), m.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), m.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), m.addBinding(e.gridVisible, "val", { label: "Mostrar" }), m.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), m.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), m.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), m.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), a.addBinding(e.nodes, "val", { label: "Nodes" }), a.addBinding(e.elements, "val", { label: "Elements" }), a.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), a.addBinding(e.faces, "val", { label: "  Caras (fill)" }), a.addBinding(e.elemColumns, "val", { label: "  Columnas" }), a.addBinding(e.elemBeams, "val", { label: "  Vigas" }), a.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), a.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), a.addBinding(e.orientations, "val", { label: "Orientations" }), a.addBinding(e.sections, "val", { label: "Sections" }), a.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), a.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), a.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((n == null ? void 0 : n.nodeInputs) || (n == null ? void 0 : n.elementInputs)) {
    const m = a.addFolder({ title: "Analysis Inputs" });
    m.addBinding(e.supports, "val", { label: "Supports" }), m.addBinding(e.loads, "val", { label: "Loads" }), m.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), m.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((n == null ? void 0 : n.deformOutputs) || (n == null ? void 0 : n.analyzeOutputs)) {
    const m = a.addFolder({ title: "Analysis Outputs" });
    m.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), m.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), m.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), m.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), m.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), m.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), m.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  u && a.addBinding(e.solids, "val", { label: "Solids" });
  const y = a.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), P = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), _ = () => {
    const m = window.__hekatanClipApply;
    typeof m == "function" && m();
  };
  return y.addBinding(P, "enableX", { label: "Cortar X" }).on("change", _), y.addBinding(P, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", _), y.addBinding(P, "invertX", { label: "  invertir X" }).on("change", _), y.addBinding(P, "enableY", { label: "Cortar Y" }).on("change", _), y.addBinding(P, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", _), y.addBinding(P, "invertY", { label: "  invertir Y" }).on("change", _), y.addBinding(P, "enableZ", { label: "Cortar Z" }).on("change", _), y.addBinding(P, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", _), y.addBinding(P, "invertZ", { label: "  invertir Z" }).on("change", _), r;
}
function Bn(e) {
  return { gridSize: I.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: I.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: I.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: I.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: I.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: I.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: I.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: I.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: I.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: I.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: I.state((e == null ? void 0 : e.nodes) ?? true), elements: I.state((e == null ? void 0 : e.elements) ?? true), edges: I.state((e == null ? void 0 : e.edges) ?? true), faces: I.state((e == null ? void 0 : e.faces) ?? true), elemColumns: I.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: I.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: I.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: I.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: I.state((e == null ? void 0 : e.orientations) ?? false), sections: I.state((e == null ? void 0 : e.sections) ?? true), secColumns: I.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: I.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: I.state((e == null ? void 0 : e.secFloor) ?? -1), supports: I.state((e == null ? void 0 : e.supports) ?? true), loads: I.state((e == null ? void 0 : e.loads) ?? false), deformedShape: I.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: I.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: I.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: I.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: I.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: I.state((e == null ? void 0 : e.flipAxes) ?? false), solids: I.state((e == null ? void 0 : e.solids) ?? true), custom3D: I.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: I.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: I.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: I.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function Zn(e, n, u) {
  const r = Qe(), a = new vt(new ae(), new gt({ color: r.nodePoint }));
  return _t((w, h) => {
    a.material.color.setHex(h.nodePoint);
  }), a.frustumCulled = false, I.derive(() => {
    e.nodes.val && a.geometry.setAttribute("position", new Xe(n.val.flat(), 3));
  }), I.derive(() => {
    u.val;
    const w = 0.02 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (a.material.size = w * u.rawVal);
  }), I.derive(() => {
    a.visible = e.nodes.val;
  }), a;
}
function $n(e, n, u) {
  const r = Qe(), a = new Me(), w = new it(new ae(), new Ye({ color: r.elementLine }));
  _t((N, H) => {
    w.material.color.setHex(H.elementLine);
  }), w.frustumCulled = false, w.renderOrder = 2, a.add(w);
  const h = new Ee({ vertexColors: true, transparent: true, opacity: r.shellOpacity, side: Le, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), p = new Fe(new ae(), h);
  p.frustumCulled = false, a.add(p);
  let y = new Pe(r.shellWall), P = new Pe(r.shellSlab), _ = new Pe(r.shellTri);
  _t((N, H) => {
    y = new Pe(H.shellWall), P = new Pe(H.shellSlab), _ = new Pe(H.shellTri), h.opacity = H.shellOpacity, h.needsUpdate = true;
  });
  function m(N, H) {
    const $ = Math.abs(H[0] - N[0]), le = Math.abs(H[1] - N[1]), f = Math.abs(H[2] - N[2]);
    return f > $ && f > le || le > $ && le > f;
  }
  return I.derive(() => {
    var _a;
    if (n.deformedShape.val, n.elemColumns.val, n.elemBeams.val, !n.elements.val) return;
    const N = n.elemColumns.rawVal, H = n.elemBeams.rawVal, $ = u.val, le = ((_a = e.elements) == null ? void 0 : _a.val) || [], f = le.filter((W) => {
      if (W.length !== 2) return true;
      const F = $[W[0]], R = $[W[1]];
      if (!F || !R) return true;
      const S = m(F, R);
      return !(S && !N || !S && !H);
    }).map((W) => Dn(W).map((F) => [...$[F[0]], ...$[F[1]]]).flat()).flat();
    w.geometry.setAttribute("position", new Xe(f, 3));
    const Q = [], J = [];
    function de(W, F, R, S) {
      const g = [F[0] - W[0], F[1] - W[1], F[2] - W[2]], A = [S[0] - W[0], S[1] - W[1], S[2] - W[2]], Y = g[1] * A[2] - g[2] * A[1], X = g[2] * A[0] - g[0] * A[2], T = g[0] * A[1] - g[1] * A[0], B = Math.sqrt(Y * Y + X * X + T * T);
      return B < 1e-12 ? false : Math.abs(T / B) < 0.5;
    }
    for (const W of le) if (W.length === 3) {
      const [F, R, S] = W;
      if ($[F] && $[R] && $[S]) {
        Q.push(...$[F], ...$[R], ...$[S]);
        for (let g = 0; g < 3; g++) J.push(_.r, _.g, _.b);
      }
    } else if (W.length === 4) {
      const [F, R, S, g] = W;
      if ($[F] && $[R] && $[S] && $[g]) {
        const A = de($[F], $[R], $[S], $[g]) ? y : P;
        Q.push(...$[F], ...$[R], ...$[S]), Q.push(...$[F], ...$[S], ...$[g]);
        for (let Y = 0; Y < 6; Y++) J.push(A.r, A.g, A.b);
      }
    }
    Q.length > 0 ? (p.geometry.dispose(), p.geometry = new ae(), p.geometry.setAttribute("position", new Xe(Q, 3)), p.geometry.setAttribute("color", new Xe(J, 3)), p.geometry.computeVertexNormals(), p.visible = n.faces ? n.faces.rawVal : true) : p.visible = false;
  }), I.derive(() => {
    a.visible = n.elements.val;
  }), I.derive(() => {
    n.edges && (w.visible = n.edges.val);
  }), I.derive(() => {
    if (!n.faces) return;
    const N = n.faces.val;
    p.geometry.attributes.position ? p.visible = N : N || (p.visible = false);
  }), a;
}
function Dn(e) {
  if (e.length === 2) return [e];
  const n = [];
  for (let u = 0; u < e.length; u++) n.push([e[u], e[(u + 1) % e.length]]);
  return n;
}
function Xt(e, n) {
  const u = Qe(), r = new Me();
  r.name = "hekatan-grid";
  const a = (n == null ? void 0 : n.planes) ?? ["xy"];
  let w = (n == null ? void 0 : n.majorStep) ?? 1, h = (n == null ? void 0 : n.minorStep) ?? 0.1;
  for (w <= 0 && (w = 1), h <= 0 && (h = 0.1); e / h > 500; ) h *= 2;
  for (; e / w > 100; ) w *= 2;
  const p = e / 2;
  w = Math.max(h, Math.round(w / h) * h);
  const P = new Pe(u.grid), _ = new Pe(u.grid).multiplyScalar(0.45), m = (H, $, le, f) => {
    const Q = [], J = H === "xy" ? (S, g) => [S, g, 0] : H === "xz" ? (S, g) => [S, 0, g] : (S, g) => [0, S, g], de = Math.floor(p / $);
    for (let S = -de; S <= de; S++) {
      const g = S * $, A = J(g, -p), Y = J(g, p);
      Q.push(...A, ...Y);
    }
    for (let S = -de; S <= de; S++) {
      const g = S * $, A = J(-p, g), Y = J(p, g);
      Q.push(...A, ...Y);
    }
    const W = new ae();
    W.setAttribute("position", new Xe(Q, 3));
    const F = new Ye({ color: le, transparent: true, opacity: f, depthWrite: false }), R = new it(W, F);
    return R.name = `grid-${H}-${$ === h ? "minor" : "major"}`, R;
  }, N = (H, $, le) => {
    const f = H === "xy" ? (R, S) => [R, S, 0] : H === "xz" ? (R, S) => [R, 0, S] : (R, S) => [0, R, S], Q = [[-p, -p], [p, -p], [p, p], [-p, p]], J = [];
    for (const [R, S] of Q) J.push(...f(R, S));
    const de = new ae();
    de.setAttribute("position", new Xe(J, 3));
    const W = new Ye({ color: $, transparent: true, opacity: le, depthWrite: false }), F = new cn(de, W);
    return F.name = `grid-${H}-border`, F.renderOrder = 1, F;
  };
  for (const H of a) r.add(m(H, h, _, 0.12)), r.add(m(H, w, P, 0.4)), r.add(N(H, P, 0.55));
  return r.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: w, minorStep: h, gridSize: e, planes: [...a] }, r;
}
function Nn(e, n, u, r) {
  const a = new Me(), w = new _n(0.5, 0.5, 0.5), h = new Ee({ color: 10166822 });
  return I.derive(() => {
    var _a, _b;
    if (n.deformedShape.val, !n.supports.val) return;
    a.clear();
    const p = 0.05 * n.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((y, P) => {
      const _ = u.val[P];
      if (!_) return;
      const m = new Fe(w, h);
      m.position.set(..._);
      const N = p * r.rawVal;
      m.scale.set(N, N, N), a.add(m);
    });
  }), I.derive(() => {
    if (r.val, !n.supports.rawVal) return;
    const y = 0.05 * n.gridSize.val * 0.6 * r.rawVal;
    a.children.forEach((P) => P.scale.set(y, y, y));
  }), I.derive(() => {
    a.visible = n.supports.val;
  }), a;
}
function Wn(e, n, u, r) {
  const a = new Me();
  a.name = "loadsGroup";
  function w(h) {
    if (h.length < 2) return 0.12 * n.gridSize.rawVal;
    const p = [1 / 0, 1 / 0, 1 / 0], y = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of h) for (let m = 0; m < 3; m++) p[m] = Math.min(p[m], _[m]), y[m] = Math.max(y[m], _[m]);
    return 0.08 * Math.max(y[0] - p[0], y[1] - p[1], y[2] - p[2], 0.1);
  }
  return I.derive(() => {
    var _a, _b, _c;
    if (n.deformedShape.val, !n.loads.val) return;
    a.children.forEach((y) => y.dispose()), a.clear();
    const h = u.val, p = w(h);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((y, P) => {
      const _ = h[P];
      if (!_) return;
      const m = new v(...y.slice(0, 3));
      if (m.lengthSq() < 1e-30) return;
      m.normalize();
      const N = new tt(m, new v(..._), 1, 15637248, 0.3, 0.3), H = p * r.rawVal;
      N.scale.set(H, H, H), a.add(N);
    });
  }), I.derive(() => {
    if (r.val, !n.loads.rawVal) return;
    const p = w(u.rawVal) * r.rawVal;
    a.children.forEach((y) => y.scale.set(p, p, p));
  }), I.derive(() => {
    a.visible = n.loads.val;
  }), a;
}
function Un(e, n, u) {
  const r = new Me();
  return I.derive(() => {
    if (!e.nodesIndexes.val) return;
    r.children.forEach((w) => w.dispose()), r.clear();
    const a = 0.05 * e.gridSize.val * 0.6;
    n.val.forEach((w, h) => {
      const p = new Ce(`${h}`);
      p.position.set(...w), p.updateScale(a * u.rawVal), r.add(p);
    });
  }), I.derive(() => {
    if (u.val, !e.nodesIndexes.rawVal) return;
    const a = 0.05 * e.gridSize.val * 0.6;
    r.children.forEach((w) => w.updateScale(a * u.rawVal));
  }), I.derive(() => {
    r.visible = e.nodesIndexes.val;
  }), r;
}
function Gn(e, n, u, r) {
  const a = new Me();
  return I.derive(() => {
    var _a;
    if (n.deformedShape.val, !n.elementsIndexes.val) return;
    a.children.forEach((h) => h.dispose()), a.clear();
    const w = 0.05 * n.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((h, p) => {
      const y = new Ce(`${p}`, void 0, "#001219");
      y.position.set(...Hn(h.map((P) => u.rawVal[P]))), y.updateScale(w * r.rawVal), a.add(y);
    });
  }), I.derive(() => {
    if (r.val, !n.elementsIndexes.rawVal) return;
    const w = 0.05 * n.gridSize.val * 0.6;
    a.children.forEach((h) => h.updateScale(w * r.rawVal));
  }), I.derive(() => {
    a.visible = n.elementsIndexes.val;
  }), a;
}
function Hn(e) {
  const n = e.reduce((r, a) => [r[0] + a[0], r[1] + a[1], r[2] + a[2]], [0, 0, 0]), u = e.length;
  return [n[0] / u, n[1] / u, n[2] / u];
}
function sn(e, n) {
  const u = new Me(), r = 0.05 * e * 1, a = Qe(), w = new Ce("X", "red", "transparent"), h = new Ce(n ? "Z" : "Y", "green", "transparent"), p = new Ce(n ? "Y" : "Z", "blue", "transparent"), y = new tt(new v(1, 0, 0), new v(0, 0, 0), 1, a.axisArrow, 0.2, 0.2), P = new tt(new v(0, 1, 0), new v(0, 0, 0), 1, a.axisArrow, 0.2, 0.2), _ = new tt(new v(0, 0, 1), new v(0, 0, 0), 1, a.axisArrow, 0.2, 0.2);
  return w.position.set(1.3 * r, 0, 0), h.position.set(0, 1.3 * r, 0), p.position.set(0, 0, 1.3 * r), w.updateScale(0.4 * r), h.updateScale(0.4 * r), p.updateScale(0.4 * r), y.scale.set(r, r, r), P.scale.set(r, r, r), _.scale.set(r, r, r), u.add(y, P, _, w, h, p), u;
}
function Bt(e, n) {
  const u = new v(...e), a = new v(...n).clone().sub(u), w = a.length(), h = a.dot(new v(1, 0, 0)) / w, p = a.dot(new v(0, 1, 0)) / w, y = a.dot(new v(0, 0, 1)) / w, P = Math.sqrt(h ** 2 + p ** 2);
  let _ = new Tt().fromArray([[h, p, y], [-p / P, h / P, 0], [-h * y / P, -p * y / P, P]].flat());
  return y === 1 && (_ = new Tt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), y === -1 && (_ = new Tt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new dn().setFromMatrix3(_);
}
function It(e, n) {
  return e == null ? void 0 : e.map((u, r) => (9 * u + n[r]) / 10);
}
function ht(e) {
  const n = e.reduce((r, a) => [r[0] + a[0], r[1] + a[1], r[2] + a[2]], [0, 0, 0]), u = e.length;
  return [n[0] / u, n[1] / u, n[2] / u];
}
function Kn(e, n, u) {
  const r = ht([n, u]), a = ht([e, u]), w = ht([e, n]), h = new v(...r).sub(new v(...a)).normalize(), p = new v(...u).sub(new v(...w)).normalize(), y = h.clone().cross(p).normalize(), P = y.clone().cross(h).normalize();
  return new dn().makeBasis(h, P, y);
}
function qn(e, n, u, r) {
  const a = new Me(), w = new ae(), h = new Ye({ vertexColors: true }), p = [0, 0, 0], y = [1, 0, 0], P = [0, 1, 0], _ = [0, 0, 1];
  w.setAttribute("position", new Xe([...p, ...y, ...p, ...P, ...p, ..._], 3));
  const m = [255, 0, 0], N = [0, 255, 0], H = [0, 0, 255];
  return w.setAttribute("color", new Xe([...m, ...m, ...N, ...N, ...H, ...H], 3)), I.derive(() => {
    var _a;
    n.deformedShape.val, n.orientations.val && (a.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach(($) => {
      const le = new it(w, h), f = u.rawVal[$[0]], Q = u.rawVal[$[1]];
      if ($.length === 2 && (le.position.set(...It(f, Q)), le.rotation.setFromRotationMatrix(Bt(f, Q))), $.length === 3) {
        const W = u.rawVal[$[2]];
        le.position.set(...ht([f, Q, W])), le.rotation.setFromRotationMatrix(Kn(f, Q, W));
      }
      const de = 0.05 * n.gridSize.rawVal * 0.75 * r.rawVal;
      le.scale.set(de, de, de), a.add(le);
    }));
  }), I.derive(() => {
    if (r.val, !n.orientations.rawVal) return;
    const le = 0.05 * n.gridSize.val * 0.75 * r.rawVal;
    a.children.forEach((f) => f.scale.set(le, le, le));
  }), I.derive(() => {
    a.visible = n.orientations.val;
  }), a;
}
function Qn(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const n = (e.b * 100).toFixed(0), u = (e.h * 100).toFixed(0);
    return `${n}x${u}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Jn(e, n, u, r) {
  const a = new Me();
  function w(F, R) {
    const S = F / 2, g = R / 2, A = new Float32Array([0, -S, -g, 0, S, -g, 0, S, g, 0, -S, -g, 0, S, g, 0, -S, g]), Y = new ae();
    Y.setAttribute("position", new be(A, 3));
    const X = new Float32Array([0, -S, -g, 0, S, -g, 0, S, g, 0, -S, g, 0, -S, -g]), T = new ae();
    return T.setAttribute("position", new be(X, 3)), { fill: Y, outline: T };
  }
  function h(F, R = 24) {
    const S = F / 2, g = new Float32Array(R * 9);
    for (let T = 0; T < R; T++) {
      const B = T / R * Math.PI * 2, D = (T + 1) / R * Math.PI * 2;
      g[T * 9] = 0, g[T * 9 + 1] = 0, g[T * 9 + 2] = 0, g[T * 9 + 3] = 0, g[T * 9 + 4] = S * Math.cos(B), g[T * 9 + 5] = S * Math.sin(B), g[T * 9 + 6] = 0, g[T * 9 + 7] = S * Math.cos(D), g[T * 9 + 8] = S * Math.sin(D);
    }
    const A = new ae();
    A.setAttribute("position", new be(g, 3));
    const Y = new Float32Array((R + 1) * 3);
    for (let T = 0; T <= R; T++) {
      const B = T / R * Math.PI * 2;
      Y[T * 3] = 0, Y[T * 3 + 1] = S * Math.cos(B), Y[T * 3 + 2] = S * Math.sin(B);
    }
    const X = new ae();
    return X.setAttribute("position", new be(Y, 3)), { fill: A, outline: X };
  }
  function p(F, R, S, g) {
    const A = S ?? R * 0.08, Y = g ?? F * 0.07, X = F / 2, T = R / 2, B = T - A, D = Y / 2, te = [];
    function z(ee, re, pe, se) {
      te.push(0, ee, re, 0, pe, re, 0, pe, se, 0, ee, re, 0, pe, se, 0, ee, se);
    }
    z(-X, -T, X, -B), z(-D, -B, D, B), z(-X, B, X, T);
    const Z = new ae();
    Z.setAttribute("position", new be(new Float32Array(te), 3));
    const oe = new Float32Array([0, -X, -T, 0, X, -T, 0, X, -B, 0, D, -B, 0, D, B, 0, X, B, 0, X, T, 0, -X, T, 0, -X, B, 0, -D, B, 0, -D, -B, 0, -X, -B, 0, -X, -T]), q = new ae();
    return q.setAttribute("position", new be(oe, 3)), { fill: Z, outline: q };
  }
  function y(F, R, S) {
    const g = F / 2, A = R / 2, Y = g - S, X = A - S, T = [];
    function B(Z, oe, q, ee) {
      T.push(0, Z, oe, 0, q, oe, 0, q, ee, 0, Z, oe, 0, q, ee, 0, Z, ee);
    }
    B(-g, -A, g, -X), B(-g, X, g, A), B(-g, -X, -Y, X), B(Y, -X, g, X);
    const D = new ae();
    D.setAttribute("position", new be(new Float32Array(T), 3));
    const te = new Float32Array([0, -g, -A, 0, g, -A, 0, g, -A, 0, g, A, 0, g, A, 0, -g, A, 0, -g, A, 0, -g, -A, 0, -Y, -X, 0, Y, -X, 0, Y, -X, 0, Y, X, 0, Y, X, 0, -Y, X, 0, -Y, X, 0, -Y, -X]), z = new ae();
    return z.setAttribute("position", new be(te, 3)), { fill: D, outline: z };
  }
  function P(F, R, S) {
    const g = F / 2, A = R / 2, Y = g - S, X = A - S, T = new ae(), B = new Float32Array([0, -Y, -X, 0, Y, -X, 0, Y, X, 0, -Y, -X, 0, Y, X, 0, -Y, X]);
    T.setAttribute("position", new be(B, 3));
    const D = [];
    function te(q, ee, re, pe) {
      D.push(0, q, ee, 0, re, ee, 0, re, pe, 0, q, ee, 0, re, pe, 0, q, pe);
    }
    te(-g, -A, g, -X), te(-g, X, g, A), te(-g, -X, -Y, X), te(Y, -X, g, X);
    const z = new ae();
    z.setAttribute("position", new be(new Float32Array(D), 3));
    const Z = new Float32Array([0, -g, -A, 0, g, -A, 0, g, -A, 0, g, A, 0, g, A, 0, -g, A, 0, -g, A, 0, -g, -A, 0, -Y, -X, 0, Y, -X, 0, Y, -X, 0, Y, X, 0, Y, X, 0, -Y, X, 0, -Y, X, 0, -Y, -X]), oe = new ae();
    return oe.setAttribute("position", new be(Z, 3)), { concFill: T, steelFillGeom: z, outline: oe };
  }
  function _(F, R, S) {
    const g = [], A = [[0, -F / 2, -R / 2], [0, -F / 2 + S, -R / 2], [0, -F / 2 + S, R / 2 - S], [0, F / 2, R / 2 - S], [0, F / 2, R / 2], [0, -F / 2, R / 2]], Y = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const D of Y) g.push(...A[D]);
    const X = new ae();
    X.setAttribute("position", new be(new Float32Array(g), 3));
    const T = [];
    for (let D = 0; D < A.length; D++) {
      const te = (D + 1) % A.length;
      T.push(...A[D], ...A[te]);
    }
    const B = new ae();
    return B.setAttribute("position", new be(new Float32Array(T), 3)), { fill: X, outline: B };
  }
  function m(F, R, S, g) {
    const A = g / 2, Y = [], X = [[0, -F - A, -R / 2], [0, -S - A, -R / 2], [0, -S - A, R / 2 - S], [0, -A, R / 2 - S], [0, -A, R / 2], [0, -F - A, R / 2]], T = [[0, A, -R / 2], [0, A + S, -R / 2], [0, A + S, R / 2 - S], [0, F + A, R / 2 - S], [0, F + A, R / 2], [0, A, R / 2]], B = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Z of B) Y.push(...X[Z]);
    for (const Z of B) Y.push(...T[Z]);
    const D = new ae();
    D.setAttribute("position", new be(new Float32Array(Y), 3));
    const te = [];
    for (const Z of [X, T]) for (let oe = 0; oe < Z.length; oe++) {
      const q = (oe + 1) % Z.length;
      te.push(...Z[oe], ...Z[q]);
    }
    const z = new ae();
    return z.setAttribute("position", new be(new Float32Array(te), 3)), { fill: D, outline: z };
  }
  function N(F, R, S, g) {
    const A = R / 2, Y = F, X = [[0, -Y, -A], [0, -Y, -A + S], [0, -g, -A + S], [0, -g, A - S], [0, -Y, A - S], [0, -Y, A], [0, 0, A], [0, 0, -A]], T = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], B = [];
    for (const Z of T) B.push(...X[Z]);
    const D = new ae();
    D.setAttribute("position", new be(new Float32Array(B), 3));
    const te = [];
    for (let Z = 0; Z < X.length; Z++) {
      const oe = (Z + 1) % X.length;
      te.push(...X[Z], ...X[oe]);
    }
    const z = new ae();
    return z.setAttribute("position", new be(new Float32Array(te), 3)), { fill: D, outline: z };
  }
  function H(F, R, S, g, A) {
    const Y = R / 2, X = A / 2, T = [], B = [[0, -F, -Y], [0, -F, -Y + S], [0, -X - g, -Y + S], [0, -X - g, Y - S], [0, -F, Y - S], [0, -F, Y], [0, -X, Y], [0, -X, -Y]], D = B.map((q) => [q[0], -q[1], q[2]]), te = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const q of te) T.push(...B[q]);
    for (const q of te) T.push(...D[q]);
    const z = new ae();
    z.setAttribute("position", new be(new Float32Array(T), 3));
    const Z = [];
    for (const q of [B, D]) for (let ee = 0; ee < q.length; ee++) {
      const re = (ee + 1) % q.length;
      Z.push(...q[ee], ...q[re]);
    }
    const oe = new ae();
    return oe.setAttribute("position", new be(new Float32Array(Z), 3)), { fill: z, outline: oe };
  }
  function $(F, R, S, g) {
    const A = F / 2, Y = R / 2, X = g / 2, T = [[0, -X, -Y], [0, X, -Y], [0, X, Y - S], [0, A, Y - S], [0, A, Y], [0, -A, Y], [0, -A, Y - S], [0, -X, Y - S]], B = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], D = [];
    for (const oe of B) D.push(...T[oe]);
    const te = new ae();
    te.setAttribute("position", new be(new Float32Array(D), 3));
    const z = [];
    for (let oe = 0; oe < T.length; oe++) {
      const q = (oe + 1) % T.length;
      z.push(...T[oe], ...T[q]);
    }
    const Z = new ae();
    return Z.setAttribute("position", new be(new Float32Array(z), 3)), { fill: te, outline: Z };
  }
  function le(F, R, S = 24) {
    const g = F / 2, A = g - R, Y = [];
    for (let D = 0; D < S; D++) {
      const te = D / S * Math.PI * 2, z = (D + 1) / S * Math.PI * 2, Z = Math.cos(te), oe = Math.sin(te), q = Math.cos(z), ee = Math.sin(z);
      Y.push(0, g * Z, g * oe, 0, g * q, g * ee, 0, A * q, A * ee), Y.push(0, g * Z, g * oe, 0, A * q, A * ee, 0, A * Z, A * oe);
    }
    const X = new ae();
    X.setAttribute("position", new be(new Float32Array(Y), 3));
    const T = [];
    for (let D = 0; D < S; D++) {
      const te = D / S * Math.PI * 2, z = (D + 1) / S * Math.PI * 2;
      T.push(0, g * Math.cos(te), g * Math.sin(te), 0, g * Math.cos(z), g * Math.sin(z)), T.push(0, A * Math.cos(te), A * Math.sin(te), 0, A * Math.cos(z), A * Math.sin(z));
    }
    const B = new ae();
    return B.setAttribute("position", new be(new Float32Array(T), 3)), { fill: X, outline: B };
  }
  const f = new Ee({ color: 52479, transparent: true, opacity: 0.35, side: Le, depthWrite: false }), Q = new Ye({ color: 52479 }), J = new Ee({ color: 16750848, transparent: true, opacity: 0.4, side: Le, depthWrite: false }), de = new Ye({ color: 16750848 });
  function W(F, R) {
    const S = Math.abs(R[0] - F[0]), g = Math.abs(R[1] - F[1]), A = Math.abs(R[2] - F[2]);
    return A > S && A > g || g > S && g > A;
  }
  return I.derive(() => {
    var _a, _b;
    n.deformedShape.val, n.secColumns.val, n.secBeams.val, n.secFloor.val;
    const F = n.secColumns.rawVal, R = n.secBeams.rawVal;
    if (!F && !R) {
      a.children.forEach((X) => {
        X instanceof Ce && X.dispose();
      }), a.clear();
      return;
    }
    a.children.forEach((X) => {
      X instanceof Ce && X.dispose();
    }), a.clear();
    const S = (_a = e.elements) == null ? void 0 : _a.val, g = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!S || !g) return;
    const A = g.sectionShapes, Y = n.secFloor.rawVal;
    S.forEach((X, T) => {
      if (X.length !== 2) return;
      const B = u.rawVal[X[0]], D = u.rawVal[X[1]];
      if (!B || !D) return;
      const te = W(B, D);
      if (te && !F || !te && !R) return;
      if (Y >= 0) {
        const ee = Math.min(B[1], D[1]);
        Math.max(B[1], D[1]);
        const re = n.gridSize.rawVal || 3;
        if (Math.floor(ee / re + 0.01) !== Y) return;
      }
      const z = A == null ? void 0 : A.get(T);
      if (!z) return;
      const Z = [(B[0] + D[0]) / 2, (B[1] + D[1]) / 2, (B[2] + D[2]) / 2], oe = Bt(B, D);
      if (z.type === "CFT") {
        const ee = P(z.b, z.h, z.tw ?? z.b * 0.05), re = new Fe(ee.concFill, f);
        re.position.set(...Z), re.rotation.setFromRotationMatrix(oe), a.add(re);
        const pe = new Fe(ee.steelFillGeom, J);
        pe.position.set(...Z), pe.rotation.setFromRotationMatrix(oe), a.add(pe);
        const se = new $e(ee.outline, de);
        se.position.set(...Z), se.rotation.setFromRotationMatrix(oe), a.add(se);
      } else {
        let ee, re, pe;
        switch (z.type) {
          case "rect":
            ee = w(z.b, z.h), re = f, pe = Q;
            break;
          case "circ":
            ee = h(z.d), re = f, pe = Q;
            break;
          case "I":
            ee = p(z.b, z.h, z.tf, z.tw), re = J, pe = de;
            break;
          case "HSS":
            ee = y(z.b, z.h, z.tw ?? z.b * 0.05), re = J, pe = de;
            break;
          case "CFT":
            ee = P(z.b, z.h, z.tw ?? z.b * 0.05), re = J, pe = de;
            break;
          case "L":
            ee = _(z.b ?? z.h, z.h, z.t ?? z.tw ?? 3e-3), re = J, pe = de;
            break;
          case "2L":
            ee = m(z.b ?? z.h, z.h, z.t ?? z.tw ?? 3e-3, z.dis ?? 0.01), re = J, pe = de;
            break;
          case "C":
          case "coldC":
            ee = N(z.b, z.h, z.tf ?? z.t ?? 3e-3, z.tw ?? z.t ?? 3e-3), re = J, pe = de;
            break;
          case "2C":
            ee = H(z.b, z.h, z.tf ?? 5e-3, z.tw ?? 5e-3, z.dis ?? 0.01), re = J, pe = de;
            break;
          case "T":
            ee = $(z.b, z.h, z.tf ?? 0.01, z.tw ?? 6e-3), re = J, pe = de;
            break;
          case "pipe":
            ee = le(z.d, z.tw ?? z.d * 0.05), re = J, pe = de;
            break;
          default:
            return;
        }
        const se = new Fe(ee.fill, re);
        se.position.set(...Z), se.rotation.setFromRotationMatrix(oe), a.add(se);
        const fe = new $e(ee.outline, pe);
        fe.position.set(...Z), fe.rotation.setFromRotationMatrix(oe), a.add(fe);
      }
      const q = Qn(z);
      if (q) {
        const re = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(z.type) ? "#ff9900" : "#00ccff", pe = new Ce(q, re, "transparent");
        pe.position.set(Z[0], Z[1], Z[2]);
        const se = 0.05 * n.gridSize.rawVal * 0.5;
        pe.updateScale(se * ((r == null ? void 0 : r.rawVal) ?? 1)), a.add(pe);
      }
    });
  }), r && I.derive(() => {
    if (r.val, !n.sections.rawVal) return;
    const F = 0.05 * n.gridSize.val * 0.5;
    a.children.forEach((R) => {
      R instanceof Ce && R.updateScale(F * r.rawVal);
    });
  }), I.derive(() => {
    a.visible = n.sections.val;
  }), a;
}
class yt extends Me {
  constructor(n, u, r, a, w, h, p) {
    super();
    const y = new bt().moveTo(0, 0).lineTo(0, h[1]).lineTo(r, h[1]).lineTo(r, 0).lineTo(0, 0), P = y.getPoints(), _ = new ae().setFromPoints(P);
    this.lines = new $e(_, new Ye({ color: Qe().resultOutline })), this.lines.position.set(...n), this.lines.rotation.setFromRotationMatrix(a), p && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const m = new Mt(y), N = new Ee({ color: h[1] > 0 ? 24435 : 11411474, side: Le });
    this.mesh = new Fe(m, N), this.mesh.position.set(...n), this.mesh.rotation.setFromRotationMatrix(a), p && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Ce(`${w[1].toFixed(4)}`), this.normalizedResult = h, this.textPosition = ht([n, u]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(a), this.add(this.text);
  }
  updateScale(n) {
    this.lines.scale.set(1, n * 2, 1), this.mesh.scale.set(1, n * 2, 1), this.text.updateScale(n * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * n);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class an extends Me {
  constructor(n, u, r, a, w, h, p) {
    super();
    const y = w[0] * r / (w[0] + w[1]), P = w[0] * w[1] > 0;
    if (this.text = new Ce(`${w[0].toFixed(4)}`), this.text2 = new Ce(`${(w[1] * -1).toFixed(4)}`), this.normalizedResult = h, this.textPosition = It(n, u), this.text2Position = It(u, n), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(a), this.text2.rotation.setFromRotationMatrix(a), this.add(this.text, this.text2), P) {
      const _ = new bt().moveTo(0, 0).lineTo(0, h[0]).lineTo(y, 0).lineTo(0, 0), m = new bt().moveTo(y, 0).lineTo(r, -h[1]).lineTo(r, 0).lineTo(y, 0), N = _.getPoints(), H = m.getPoints(), $ = new ae().setFromPoints(N), le = new ae().setFromPoints(H), f = new Ye({ color: Qe().resultOutline });
      this.lines = new $e($, f), this.lines2 = new $e(le, f), this.lines.position.set(...n), this.lines2.position.set(...n), this.lines.rotation.setFromRotationMatrix(a), this.lines2.rotation.setFromRotationMatrix(a), p && this.lines.rotateX(Math.PI / 2), p && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const Q = new Mt(_), J = new Mt(m), de = new Ee({ color: h[0] > 0 ? 24435 : 11411474, side: Le }), W = new Ee({ color: -h[1] > 0 ? 24435 : 11411474, side: Le });
      this.mesh = new Fe(Q, de), this.mesh2 = new Fe(J, W), this.mesh.position.set(...n), this.mesh2.position.set(...n), this.mesh.rotation.setFromRotationMatrix(a), this.mesh2.rotation.setFromRotationMatrix(a), p && this.mesh.rotateX(Math.PI / 2), p && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const _ = new bt().moveTo(0, 0).lineTo(0, h[0]).lineTo(r, -h[1]).lineTo(r, 0).lineTo(0, 0), m = _.getPoints(), N = new ae().setFromPoints(m);
      this.lines = new $e(N, new Ye({ color: Qe().resultOutline })), this.lines.position.set(...n), this.lines.rotation.setFromRotationMatrix(a), p && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const H = new Mt(_), $ = new Ee({ color: h[0] > 0 ? 24435 : 11411474, side: Le });
      this.mesh = new Fe(H, $), this.mesh.position.set(...n), this.mesh.rotation.setFromRotationMatrix(a), p && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(n) {
    var _a, _b;
    this.lines.scale.set(1, n * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, n * 2, 1), this.mesh.scale.set(1, n * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, n * 2, 1), this.text.updateScale(n * 0.6), this.text2.updateScale(n * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * n), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * n);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e = this.mesh2) == null ? void 0 : _e.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var pn = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(pn || {});
function On(e, n, u, r) {
  const a = new Me(), w = { normals: yt, shearsY: yt, shearsZ: yt, torsions: yt, bendingsY: an, bendingsZ: an };
  return I.derive(() => {
    var _a, _b;
    if (n.deformedShape.val, u.val, n.frameResults.val == "none") return;
    a.children.forEach((p) => p.dispose()), a.clear();
    const h = pn[n.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[h]) == null ? void 0 : _b.forEach((p, y) => {
      var _a2, _b2;
      const P = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[y]) ?? [0, 1], _ = u.rawVal[P[0]], m = u.rawVal[P[1]], N = new v(...m).distanceTo(new v(..._)), H = jn((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[h]), $ = p == null ? void 0 : p.map((J) => J / (H === 0 ? 1 : H)), le = Bt(_, m), f = new w[h](_, m, N, le, p ?? [0, 0], $ ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(h)), Q = 0.05 * n.gridSize.rawVal;
      f.updateScale(Q * r.rawVal), a.add(f);
    });
  }), I.derive(() => {
    if (r.val, n.frameResults.rawVal == "none") return;
    const h = 0.05 * n.gridSize.val;
    a.children.forEach((p) => p.updateScale(h * r.rawVal));
  }), I.derive(() => {
    a.visible = n.frameResults.val != "none";
  }), a;
}
function jn(e) {
  let n = 0;
  return e == null ? void 0 : e.forEach((u) => {
    const r = Math.max(...u ?? [0, 0]);
    r > n && (n = r);
  }), n;
}
class eo extends Me {
  constructor(n, u, r) {
    super();
    const a = u === Zt.reactions;
    r[0] && (this.xText1 = new Ce(`${a ? "Fx" : "Dx"}: ` + r[0].toFixed(4))), r[3] && (this.xText2 = new Ce(`${a ? "Mx" : "Rx"}: ` + r[3].toFixed(4))), r[1] && (this.yText1 = new Ce(`${a ? "Fy" : "Dy"}: ` + r[1].toFixed(4))), r[4] && (this.yText2 = new Ce(`${a ? "My" : "Ry"}: ` + r[4].toFixed(4))), r[2] && (this.zText1 = new Ce(`${a ? "Fz" : "Dz"}: ` + r[2].toFixed(4))), r[5] && (this.zText2 = new Ce(`${a ? "Mz" : "Rz"}: ` + r[5].toFixed(4))), (r[0] || r[3]) && (this.xArrow = new tt(new v(1, 0, 0), new v(0, 0, 0), 1, 15637248, 0.3, 0.3)), (r[1] || r[4]) && (this.yArrow = new tt(new v(0, 1, 0), new v(0, 0, 0), 1, 15637248, 0.3, 0.3)), (r[2] || r[5]) && (this.zArrow = new tt(new v(0, 0, 1), new v(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...n), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(n) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(n, n, n), (_b = this.yArrow) == null ? void 0 : _b.scale.set(n, n, n), (_c = this.zArrow) == null ? void 0 : _c.scale.set(n, n, n), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * n, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * n, 0, 0.5 * n), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * n, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * n, 0.5 * n), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * n), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * n + 0.5 * n), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * n), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * n), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * n), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * n), (_n2 = this.zText1) == null ? void 0 : _n2.updateScale(0.4 * n), (_o = this.zText2) == null ? void 0 : _o.updateScale(0.4 * n);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var Zt = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Zt || {});
function to(e, n, u, r) {
  const a = new Me();
  return I.derive(() => {
    var _a, _b;
    if (n.deformedShape.val, n.nodeResults.val == "none") return;
    a.children.forEach((p) => p.dispose()), a.clear();
    const w = Zt[n.nodeResults.rawVal], h = 0.05 * n.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[w]) == null ? void 0 : _b.forEach((p, y) => {
      const P = new eo(u.rawVal[y], w, p ?? [0, 0, 0, 0, 0, 0]);
      P.updateScale(h * r.rawVal), a.add(P);
    });
  }), I.derive(() => {
    if (r.val, n.nodeResults.rawVal == "none") return;
    const w = 0.05 * n.gridSize.val;
    a.children.forEach((h) => h.updateScale(w * r.rawVal));
  }), I.derive(() => {
    a.visible = n.nodeResults.val != "none";
  }), a;
}
function no({ drawingObj: e, gridObj: n, scene: u, getActiveCamera: r, controls: a, gridSize: w, derivedDisplayScale: h, rendererElm: p, viewerRender: y }) {
  const P = new Sn(), _ = new kn(), m = (s) => {
    const o = p.getBoundingClientRect(), c = s.clientX - o.left, t = s.clientY - o.top, b = o.width || 1, d = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const l = b / 2;
      if (c >= l) return _.x = (c - l) / l * 2 - 1, _.y = -(t / d) * 2 + 1, window.__hekatanSplitCamera ?? r();
      _.x = c / l * 2 - 1;
    } else _.x = c / b * 2 - 1;
    return _.y = -(t / d) * 2 + 1, r();
  }, N = new Fe(new mt(1e4, 1e4), new Ee({ side: Le, transparent: true, opacity: 0, depthWrite: false }));
  N.visible = true, N.frustumCulled = false, u.add(N);
  const H = (s, o, c) => {
    const t = new Fe(new mt(1e4, 1e4), new Ee({ side: Le, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(s, o, c), t.visible = false, t.frustumCulled = false, u.add(t), t;
  }, $ = H(Math.PI / 2, 0, 0), le = H(0, Math.PI / 2, 0), f = () => {
    if ($.visible = !!window.__hekatanGridPlaneXZ, le.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && me.visible) {
      const c = P.intersectObjects([me, ye, ve], false);
      if (c.length > 0) return c;
    }
    const o = [N];
    return $.visible && o.push($), le.visible && o.push(le), We.visible && ot.length > 0 && o.push(...ot), P.intersectObjects(o, false);
  }, Q = new vt(new ae(), new gt()), J = new vt(new ae(), new gt({ color: "gray", sizeAttenuation: false, size: 6 })), de = new vt(new ae(), new gt({ color: "orange", size: 0.1 }));
  u.add(de);
  const W = document.createElement("input");
  W.id = "hk-rubber-label", W.type = "text", W.spellcheck = false, W.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(W);
  let F = null, R = null, S = false;
  const g = new v(), A = (s, o, c, t, b, d) => {
    const E = t - s, l = b - o, i = d - c, M = Math.hypot(E, l, i);
    if (M < 0.01) {
      W.style.display = "none";
      return;
    }
    F = [s, o, c], R = [E / M, l / M, i / M], g.set((s + t) / 2, (o + b) / 2, (c + d) / 2), g.project(r());
    const C = p.getBoundingClientRect(), x = C.left + (g.x * 0.5 + 0.5) * C.width, k = C.top + (-g.y * 0.5 + 0.5) * C.height;
    if (W.style.left = x + "px", W.style.top = k + "px", W.style.display = "block", !S) {
      if (W.value = `${M.toFixed(2)} m`, document.activeElement !== W) {
        const V = document.activeElement;
        V && (V.tagName === "INPUT" || V.tagName === "TEXTAREA") && V !== W || W.focus({ preventScroll: true });
      }
      try {
        W.select();
      } catch {
      }
    }
  }, Y = () => {
    W.style.display = "none", F = null, R = null, S = false, document.activeElement === W && W.blur();
  }, X = (s) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      ze = s, he(`\u{1F4D0} Altura ${s}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), W.blur();
      return;
    }
    if (!F || !R || !e.polylines) return;
    let c = R[0], t = R[1], b = R[2];
    ue === "x" ? (c = Math.sign(c) || 1, t = 0, b = 0) : ue === "y" ? (c = 0, t = Math.sign(t) || 1, b = 0) : ue === "z" && (c = 0, t = 0, b = Math.sign(b) || 1);
    const d = F[0] + c * s, E = F[1] + t * s, l = F[2] + b * s;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [d, E, l]];
    const i = e.polylines.rawVal, M = i.length ? i[i.length - 1] : [];
    e.polylines.val = [...i.slice(0, -1), [...M, e.points.rawVal.length - 1]], W.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    y();
  };
  W.addEventListener("keydown", (s) => {
    if (s.key === "Enter") {
      s.preventDefault();
      const c = parseFloat(W.value);
      !isNaN(c) && c > 0 && (S = false, X(c));
      return;
    }
    if (s.key === "Escape") {
      s.preventDefault(), S = false, W.blur();
      return;
    }
    const o = s.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      s.preventDefault(), setTimeout(() => {
        if (!S && W.style.display === "block") try {
          W.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(s.key) || s.key === "Backspace" || s.key === "Delete") && (S = true);
  }), window.addEventListener("keydown", (s) => {
    if (!F || !R || document.activeElement === W) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(s.key) && (W.value = s.key, W.focus(), W.setSelectionRange(1, 1), s.preventDefault());
  });
  const T = document.createElement("div");
  T.id = "hk-coord-readout", T.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", T.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(T);
  const B = new $e(new ae().setFromPoints([new v(0, 0, 0), new v(0, 0, 0)]), new pt({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  B.frustumCulled = false, B.visible = false, u.add(B);
  const D = new Me();
  D.frustumCulled = false, D.visible = false, u.add(D);
  const te = (s) => {
    const o = new ae().setFromPoints([new v(0, 0, 0), new v(0, 0, 0)]), c = new pt({ color: s, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new $e(o, c);
  }, z = te(16711680), Z = te(65280), oe = te(35071);
  D.add(z, Z, oe);
  const q = (s) => {
    const o = new ae().setFromPoints([new v(0, 0, 0), new v(0, 0, 0), new v(0, 0, 0), new v(0, 0, 0)]), c = new Ye({ color: s, transparent: true, opacity: 0.45, depthTest: false }), t = new cn(o, c);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, ee = q(3462041), re = q(16724804), pe = q(6333946), se = new Me();
  se.frustumCulled = false, se.visible = false, u.add(se), se.add(ee, re, pe);
  const fe = (s) => {
    const o = new mt(1, 1), c = new Ee({ color: s, transparent: true, opacity: 0.06, side: Le, depthWrite: false }), t = new Fe(o, c);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, me = fe(3462041), ye = fe(16724804), ve = fe(6333946);
  se.add(me, ye, ve);
  const L = (s, o, c, t) => {
    s.scale.set(2 * t, 2 * t, 1), c === "xy" ? (s.position.set(o[0], o[1], o[2]), s.rotation.set(0, 0, 0)) : c === "xz" ? (s.position.set(o[0], o[1], o[2]), s.rotation.set(Math.PI / 2, 0, 0)) : (s.position.set(o[0], o[1], o[2]), s.rotation.set(0, Math.PI / 2, 0));
  }, G = document.createElement("div");
  G.id = "hk-refplane-badge", G.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(G), window.__hekatanSetOrthoPlanes = (s) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = s, se.visible = s, s) {
      const o = window.__hekatanOrthoAnchor, c = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = c[c.length - 1] ?? [], b = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && b[t[t.length - 1]] ? b[t[t.length - 1]] : [0, 0, 0], E = window.__hekatanOrthoExt ?? 8;
      U(ee, d, "xy", E), U(re, d, "xz", E), U(pe, d, "yz", E), L(me, d, "xy", E), L(ye, d, "xz", E), L(ve, d, "yz", E), me.material.opacity = 0.1, ye.material.opacity = 0.1, ve.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    y();
  }, window.__hekatanSetOrthoExt = (s) => {
    var _a;
    if (window.__hekatanOrthoExt = s, !se.visible) {
      y();
      return;
    }
    const o = window.__hekatanOrthoAnchor, c = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = c[c.length - 1] ?? [], b = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && b[t[t.length - 1]] ? b[t[t.length - 1]] : [0, 0, 0];
    U(ee, d, "xy", s), U(re, d, "xz", s), U(pe, d, "yz", s), L(me, d, "xy", s), L(ye, d, "xz", s), L(ve, d, "yz", s), y();
  };
  const ne = (s) => {
    if (me.material.opacity = s === "xy" ? 0.22 : 0.04, ye.material.opacity = s === "xz" ? 0.22 : 0.04, ve.material.opacity = s === "yz" ? 0.22 : 0.04, s) {
      const b = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[s];
      G.style.background = b.bg, G.style.color = b.text, G.textContent = `\u25A6 Plano ${s.toUpperCase()}`, G.style.display = "block";
    } else G.style.display = "none";
  }, U = (s, o, c, t) => {
    let b;
    c === "xy" ? b = [new v(o[0] - t, o[1] - t, o[2]), new v(o[0] + t, o[1] - t, o[2]), new v(o[0] + t, o[1] + t, o[2]), new v(o[0] - t, o[1] + t, o[2]), new v(o[0] - t, o[1] - t, o[2])] : c === "xz" ? b = [new v(o[0] - t, o[1], o[2] - t), new v(o[0] + t, o[1], o[2] - t), new v(o[0] + t, o[1], o[2] + t), new v(o[0] - t, o[1], o[2] + t), new v(o[0] - t, o[1], o[2] - t)] : b = [new v(o[0], o[1] - t, o[2] - t), new v(o[0], o[1] + t, o[2] - t), new v(o[0], o[1] + t, o[2] + t), new v(o[0], o[1] - t, o[2] + t), new v(o[0], o[1] - t, o[2] - t)], s.geometry.setFromPoints(b);
  };
  let ue = null;
  window.__hekatanAxisLock = () => ue;
  const ce = document.createElement("div");
  ce.id = "hk-axis-lock-badge", ce.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(ce);
  const _e = () => {
    if (!ue) {
      ce.style.display = "none";
      return;
    }
    const s = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    ce.style.background = "rgba(15,23,42,0.92)", ce.style.color = s[ue], ce.style.border = `1.5px solid ${s[ue]}`, ce.textContent = `\u{1F512} LOCK ${ue.toUpperCase()}`, ce.style.display = "block";
  };
  window.addEventListener("keydown", (s) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== W) return;
    const c = s.key.toLowerCase();
    if (c === "x" || c === "y" || c === "z") ue = ue === c ? null : c, _e(), s.preventDefault();
    else if (s.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), Gt(), s.preventDefault();
    } else if (s.key === "F8") {
      s.preventDefault(), window.__hekatanOrthoMode = !window.__hekatanOrthoMode;
      const t = window.__hekatanOrthoMode;
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
      let b = document.getElementById("hk-ortho-frame");
      b || (b = document.createElement("div"), b.id = "hk-ortho-frame", b.style.cssText = ["position:fixed", "inset:0", "z-index:99996", "border:3px solid rgba(34,211,238,0.85)", "box-shadow:inset 0 0 24px rgba(34,211,238,0.35)", "pointer-events:none"].join(";") + ";", document.body.appendChild(b)), b.style.display = t ? "block" : "none";
      let d = document.getElementById("hk-ortho-badge");
      d || (d = document.createElement("div"), d.id = "hk-ortho-badge", d.style.cssText = ["position:fixed", "top:10px", "left:50%", "transform:translateX(-50%)", "z-index:99998", "padding:6px 16px", "background:rgba(34,211,238,0.95)", "color:#0a1f24", "border-radius:6px", "border:2px solid rgba(8,145,178,1)", "box-shadow:0 4px 16px rgba(34,211,238,0.5)", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "pointer-events:none", "white-space:nowrap"].join(";") + ";", d.textContent = "\u22A5 ORTO ON (F8)", document.body.appendChild(d)), d.style.display = t ? "block" : "none";
    }
  });
  const Se = new v(), Ie = new v(), Je = new v(), St = (s) => {
    if (!ue) return null;
    const o = s[0], c = s[1], t = s[2];
    return ue === "x" ? (Se.set(o - 1e4, c, t), Ie.set(o + 1e4, c, t)) : ue === "y" ? (Se.set(o, c - 1e4, t), Ie.set(o, c + 1e4, t)) : (Se.set(o, c, t - 1e4), Ie.set(o, c, t + 1e4)), P.ray.distanceSqToSegment(Se, Ie, null, Je), Je;
  };
  window.__hekatanProjectOnAxis = St;
  const Ve = new $e(new ae().setFromPoints([new v(0, 0, 0), new v(0, 0, 0)]), new Ye({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Ve.renderOrder = 998, Ve.frustumCulled = false, Ve.visible = false, u.add(Ve);
  let De = -1, nt = -1, qe = -1;
  const kt = (s, o, c, t, b, d, E, l, i) => {
    const M = E - t, C = l - b, x = i - d, k = M * M + C * C + x * x;
    if (k < 1e-12) return Math.hypot(s - t, o - b, c - d);
    let V = ((s - t) * M + (o - b) * C + (c - d) * x) / k;
    V = Math.max(0, Math.min(1, V));
    const O = t + V * M, ie = b + V * C, j = d + V * x;
    return Math.hypot(s - O, o - ie, c - j);
  }, Dt = (s, o, c, t) => {
    if (!e.polylines) return null;
    const b = e.polylines.rawVal, d = e.points.rawVal;
    let E = -1, l = -1, i = t;
    for (let M = 0; M < b.length; M++) {
      const C = b[M];
      for (let x = 0; x < C.length - 1; x++) {
        const k = d[C[x]], V = d[C[x + 1]];
        if (!k || !V) continue;
        const O = kt(s, o, c, k[0], k[1], k[2], V[0], V[1], V[2]);
        O < i && (i = O, E = M, l = x);
      }
    }
    return E >= 0 ? { polyIdx: E, segIdx: l, dist: i } : null;
  }, hn = (s, o, c, t) => {
    const b = window.__hekatanDrawingAuxLines, d = (b == null ? void 0 : b.rawVal) ?? (b == null ? void 0 : b.val) ?? b ?? [];
    let E = -1, l = t;
    for (let i = 0; i < d.length; i++) {
      const M = d[i];
      if (!M || M.length !== 6) continue;
      const C = kt(s, o, c, M[0], M[1], M[2], M[3], M[4], M[5]);
      C < l && (l = C, E = i);
    }
    return E;
  }, fn = (s) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[s];
    if (!t || t.length !== 6) {
      Ve.visible = false;
      return;
    }
    Ve.geometry.setFromPoints([new v(t[0], t[1], t[2]), new v(t[3], t[4], t[5])]), Ve.visible = true;
  }, mn = (s, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const c = e.polylines.rawVal[s], t = e.points.rawVal;
    if (!c || c.length < 2) {
      Ve.visible = false;
      return;
    }
    const b = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(s)) ?? false, d = [];
    if (b || o < 0 || o >= c.length - 1) for (const E of c) {
      const l = t[E];
      l && d.push(new v(l[0], l[1], l[2]));
    }
    else {
      const E = t[c[o]], l = t[c[o + 1]];
      E && d.push(new v(E[0], E[1], E[2])), l && d.push(new v(l[0], l[1], l[2]));
    }
    Ve.geometry.setFromPoints(d), Ve.visible = true;
  }, ft = (s) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (s < 0 || s >= o.length) return;
    const c = o.filter((i, M) => M !== s), t = /* @__PURE__ */ new Set();
    for (const i of c) for (const M of i) t.add(M);
    const b = e.points.rawVal, d = /* @__PURE__ */ new Map(), E = [];
    for (let i = 0; i < b.length; i++) t.has(i) && (d.set(i, E.length), E.push(b[i]));
    const l = c.map((i) => i.map((M) => d.get(M)).filter((M) => M !== void 0));
    e.points.val = E, e.polylines.val = l, e.areas && (e.areas.val = e.areas.rawVal.filter((i) => i !== s).map((i) => i > s ? i - 1 : i)), Ve.visible = false, De = -1, nt = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, wn = (s, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const c = e.polylines.rawVal;
    if (s < 0 || s >= c.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(s)) ?? false) {
      ft(s);
      return;
    }
    const b = c[s];
    if (o < 0 || o >= b.length - 1) return;
    if (b.length === 2) {
      ft(s);
      return;
    }
    let d;
    o === 0 ? d = [b.slice(1)] : o === b.length - 2 ? d = [b.slice(0, -1)] : d = [b.slice(0, o + 1), b.slice(o + 1)];
    const E = [...c.slice(0, s), ...d, ...c.slice(s + 1)], l = /* @__PURE__ */ new Set();
    for (const k of E) for (const V of k) l.add(V);
    const i = e.points.rawVal, M = /* @__PURE__ */ new Map(), C = [];
    for (let k = 0; k < i.length; k++) l.has(k) && (M.set(k, C.length), C.push(i[k]));
    const x = E.map((k) => k.map((V) => M.get(V)).filter((V) => V !== void 0));
    if (e.points.val = C, e.polylines.val = x, e.areas) {
      const k = d.length - 1;
      e.areas.val = e.areas.rawVal.map((V) => V > s ? V + k : V);
    }
    Ve.visible = false, De = -1, nt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  Q.geometry.setAttribute("position", new Xe(e.points.rawVal.flat(), 3)), Q.geometry.computeBoundingSphere(), Q.frustumCulled = false, J.frustumCulled = false, u.add(J), N.position.set(0, 0, 0), N.rotateX(Math.PI / 2), N.geometry.rotateX(Math.PI / 2), N.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (s, o, c) => {
    if (e.points.val = [...e.points.rawVal, [s, o, c]], e.polylines) {
      const t = e.polylines.rawVal, b = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...b, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const s = e.polylines.rawVal;
    ((_a = s[s.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...s, []]);
  }, window.__hekatanDrawCircle = (s, o, c, t, b = window.__hekatanArcSegs ?? 12, d = "xy") => {
    var _a;
    const E = Math.max(4, Math.round(b)), l = e.points.rawVal.length, i = [];
    for (let M = 0; M < E; M++) {
      const C = 2 * Math.PI * M / E, x = t * Math.cos(C), k = t * Math.sin(C);
      let V;
      d === "xy" ? V = [s + x, o + k, c] : d === "xz" ? V = [s + x, o, c + k] : V = [s, o + x, c + k], i.push(V);
    }
    if (e.points.val = [...e.points.rawVal, ...i], e.polylines) {
      const M = [...i.map((x, k) => l + k), l], C = e.polylines.rawVal;
      ((_a = C[C.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...C, M, []] : e.polylines.val = [...C.slice(0, -1), M, []];
    }
  }, window.__hekatanDrawArc = (s, o, c, t = window.__hekatanArcSegs ?? 12) => {
    const b = Math.max(4, Math.round(t)), d = new v(...s), E = new v(...o), l = new v(...c), i = new v().subVectors(E, d), M = new v().subVectors(l, d), C = new v().crossVectors(i, M).normalize(), x = new v().addVectors(d, E).multiplyScalar(0.5), k = new v().addVectors(E, l).multiplyScalar(0.5), V = new v().crossVectors(i, C).normalize(), O = new v().crossVectors(new v().subVectors(l, E), C).normalize(), ie = new v().subVectors(k, x), j = V.x * O.y - V.y * O.x;
    let K;
    if (Math.abs(j) > 1e-9) {
      const Te = (ie.x * O.y - ie.y * O.x) / j;
      K = new v().addVectors(x, V.clone().multiplyScalar(Te));
    } else K = x.clone();
    const xe = d.distanceTo(K), ge = new v().subVectors(d, K), Be = new v().subVectors(l, K), Ze = Math.acos(Math.max(-1, Math.min(1, ge.dot(Be) / (xe * xe)))), Ge = e.points.rawVal.length, Ae = [], He = C.clone();
    for (let Te = 0; Te <= b; Te++) {
      const Ke = Te / b, Ne = Ze * Ke, at = new Kt().setFromAxisAngle(He, Ne), et = ge.clone().applyQuaternion(at).add(K);
      Ae.push([et.x, et.y, et.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Ae], e.polylines) {
      const Te = Ae.map((Ne, at) => Ge + at), Ke = e.polylines.rawVal;
      e.polylines.val = [...Ke.slice(0, -1), Te, []];
    }
  }, window.__hekatanDrawSlabChaflan = (s, o, c = 1, t = 6, b = 6) => {
    const d = Math.min(s[0], o[0]), E = Math.max(s[0], o[0]), l = Math.min(s[1], o[1]), i = Math.max(s[1], o[1]), M = (s[2] + o[2]) / 2, C = E - d, x = i - l, k = Math.min(c, C / 2 - 0.01, x / 2 - 0.01);
    if (k <= 0) return;
    const V = e.points.rawVal.length, O = [], ie = [], j = (K, xe) => {
      O.push([K, xe, M]), ie.push(V + O.length - 1);
    };
    for (let K = 0; K <= b; K++) j(d + k + (C - 2 * k) * K / b, l);
    for (let K = 1; K <= t; K++) {
      const xe = -Math.PI / 2 + Math.PI / 2 * K / t;
      j(E - k + k * Math.cos(xe), l + k + k * Math.sin(xe));
    }
    for (let K = 1; K <= b; K++) j(E, l + k + (x - 2 * k) * K / b);
    for (let K = 1; K <= t; K++) {
      const xe = 0 + Math.PI / 2 * K / t;
      j(E - k + k * Math.cos(xe), i - k + k * Math.sin(xe));
    }
    for (let K = 1; K <= b; K++) j(E - k - (C - 2 * k) * K / b, i);
    for (let K = 1; K <= t; K++) {
      const xe = Math.PI / 2 + Math.PI / 2 * K / t;
      j(d + k + k * Math.cos(xe), i - k + k * Math.sin(xe));
    }
    for (let K = 1; K <= b; K++) j(d, i - k - (x - 2 * k) * K / b);
    for (let K = 1; K <= t; K++) {
      const xe = Math.PI + Math.PI / 2 * K / t;
      j(d + k + k * Math.cos(xe), l + k + k * Math.sin(xe));
    }
    if (ie.push(V), e.points.val = [...e.points.rawVal, ...O], e.polylines) {
      const K = e.polylines.rawVal;
      e.polylines.val = [...K.slice(0, -1), ie, []];
    }
  }, window.__hekatanDrawRect = (s, o) => {
    const c = e.points.rawVal.length, t = s[0], b = s[1], d = s[2], E = o[0], l = o[1], i = o[2];
    let M;
    if (Math.abs(d - i) < 1e-6 ? M = [[t, b, d], [E, b, d], [E, l, d], [t, l, d]] : Math.abs(b - l) < 1e-6 ? M = [[t, b, d], [E, b, d], [E, b, i], [t, b, i]] : M = [[t, b, d], [t, l, d], [t, l, i], [t, b, i]], e.points.val = [...e.points.rawVal, ...M], e.polylines) {
      const C = [c, c + 1, c + 2, c + 3, c], x = e.polylines.rawVal;
      e.polylines.val = [...x.slice(0, -1), C, []];
    }
  };
  const Re = new Me();
  Re.visible = false, u.add(Re), window.__hekatanShowAxes = (s, o, c = 12, t = 2) => {
    var _a, _b;
    for (; Re.children.length; ) {
      const C = Re.children.pop();
      (_a = C.geometry) == null ? void 0 : _a.dispose(), (_b = C.material) == null ? void 0 : _b.dispose();
    }
    if (!s.length || !o.length) return;
    const b = Math.min(...o) - t, d = Math.max(...o) + t, E = Math.min(...s) - t, l = Math.max(...s) + t, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", M = (C, x, k, V, O) => {
      const ie = document.createElement("canvas");
      ie.width = 64, ie.height = 32;
      const j = ie.getContext("2d");
      j.fillStyle = O, j.font = "bold 22px sans-serif", j.textAlign = "center", j.fillText(C, 32, 26);
      const K = new qt(ie), xe = new Qt({ map: K, transparent: true }), ge = new Jt(xe);
      return ge.position.set(x, k, V), ge.scale.set(1.2, 0.6, 1), ge;
    };
    s.forEach((C, x) => {
      const k = x < i.length ? i[x] : `X${x}`, V = new ae().setFromPoints([new v(C, b, 0), new v(C, d, 0), new v(C, b, 0), new v(C, b, c)]), O = new pt({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), ie = new it(V, O);
      ie.computeLineDistances(), Re.add(ie), Re.add(M(k, C, b - 0.5, 0, "#60a5fa")), Re.add(M(k, C, d + 0.5, 0, "#60a5fa"));
    }), o.forEach((C, x) => {
      const k = `${x + 1}`, V = new ae().setFromPoints([new v(E, C, 0), new v(l, C, 0), new v(E, C, 0), new v(E, C, c)]), O = new pt({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), ie = new it(V, O);
      ie.computeLineDistances(), Re.add(ie), Re.add(M(k, E - 0.5, C, 0, "#fb7185")), Re.add(M(k, l + 0.5, C, 0, "#fb7185"));
    }), Re.visible = true, y();
  }, window.__hekatanHideAxes = () => {
    Re.visible = false, y();
  };
  const We = new Me();
  We.visible = false, u.add(We);
  let ot = [];
  window.__hekatanShowRefPlanes = (s = [0, 3, 6, 9, 12], o = 20, c = 0, t = 0) => {
    var _a, _b;
    for (; We.children.length; ) {
      const d = We.children.pop();
      (_a = d.geometry) == null ? void 0 : _a.dispose(), (_b = d.material) == null ? void 0 : _b.dispose();
    }
    ot.forEach((d) => {
      u.remove(d), d.geometry.dispose(), d.material.dispose();
    }), ot = [];
    const b = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    s.forEach((d, E) => {
      const l = b[E % b.length], i = o / 2, M = [new v(c - i, t - i, d), new v(c + i, t - i, d), new v(c + i, t + i, d), new v(c - i, t + i, d), new v(c - i, t - i, d)], C = new ae().setFromPoints(M), x = new Ye({ color: l, transparent: true, opacity: 0.55 });
      We.add(new $e(C, x));
      const k = document.createElement("canvas");
      k.width = 128, k.height = 32;
      const V = k.getContext("2d");
      V.fillStyle = `#${l.toString(16).padStart(6, "0")}`, V.font = "bold 18px sans-serif", V.fillText(`Z = ${d} m`, 4, 22);
      const O = new qt(k), ie = new Qt({ map: O, transparent: true }), j = new Jt(ie);
      j.position.set(c - i - 1.5, t - i - 1.5, d), j.scale.set(2.5, 0.6, 1), We.add(j);
      const K = new mt(1e4, 1e4), xe = new Ee({ visible: false, side: Le }), ge = new Fe(K, xe);
      ge.position.set(0, 0, d), ge.frustumCulled = false, ge.userData = { refPlaneZ: d }, u.add(ge), ot.push(ge);
    }), We.visible = true, y();
  }, window.__hekatanHideRefPlanes = () => {
    We.visible = false, ot.forEach((s) => {
      s.visible = false;
    }), y();
  };
  const lt = new Me();
  lt.frustumCulled = false, u.add(lt);
  const xn = () => {
    var _a, _b, _c, _d;
    for (; lt.children.length; ) {
      const c = lt.children.pop();
      (_b = (_a = c.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = c.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const s = window.__hekatanDrawingAuxLines, o = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [];
    for (const c of o) {
      if (c.length !== 6) continue;
      const t = new ae().setFromPoints([new v(c[0], c[1], c[2]), new v(c[3], c[4], c[5])]), b = new pt({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), d = new $e(t, b);
      d.computeLineDistances(), lt.add(d);
    }
  };
  I.derive(() => {
    const s = window.__hekatanDrawingAuxLines;
    (s == null ? void 0 : s.val) && (s.val, xn(), y());
  });
  const ke = new Me(), yn = new Fe(new Ot(0.02, 12, 12), new Ee({ color: 16724804, transparent: true, opacity: 0.95 })), vn = new Fe(new Ot(0.04, 12, 12), new Ee({ color: 16498468, transparent: true, opacity: 0.25, depthWrite: false }));
  ke.add(yn, vn);
  const st = 0.15, Pt = (s, o, c) => {
    const t = new ae().setFromPoints([new v(...s), new v(...o)]);
    return new $e(t, new Ye({ color: c, transparent: true, opacity: 0.7 }));
  };
  ke.add(Pt([-st, 0, 0], [st, 0, 0], 16711680)), ke.add(Pt([0, -st, 0], [0, st, 0], 65280)), ke.add(Pt([0, 0, -st], [0, 0, st], 35071)), ke.visible = false, ke.frustumCulled = false, u.add(ke);
  const Nt = 10, Ct = () => {
    if (!ke.visible) return;
    const o = r().position.distanceTo(ke.position), c = Math.max(0.05, o / Nt);
    ke.scale.setScalar(c);
  };
  a.addEventListener("change", () => {
    Ct();
    const s = window.__hekatanOsnapMarkerRef;
    if (s == null ? void 0 : s.visible) {
      const o = r().position.distanceTo(s.position);
      s.scale.setScalar(Math.max(0.05, o / Nt));
    }
  }), window.__hekatanShowSnap = (s, o, c) => {
    ke.position.set(s, o, c), ke.visible = true, Ct(), y();
  }, window.__hekatanHideSnap = () => {
    ke.visible = false, y();
  }, p.addEventListener("pointermove", (s) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m;
    const o = m(s);
    if (!o) return;
    P.setFromCamera(_, o);
    const c = f();
    if (c.length) {
      const t = c[0].point, b = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, b);
      if (d) Wt(d.type, d.x, d.y, d.z), ke.position.set(d.x, d.y, d.z), ke.visible = true, t.set(d.x, d.y, d.z);
      else {
        zt();
        const C = window.__hekatanSnapEnabled !== false, x = window.__hekatanSnap2D ?? 0.5;
        C && x > 0 && (t.x = Math.round(t.x / x) * x, t.y = Math.round(t.y / x) * x, t.z = Math.round(t.z / x) * x), ke.position.copy(t), ke.visible = true;
      }
      if (Ct(), (((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select") === "delete") {
        const C = (window.__hekatanSnap2D ?? 0.5) * 1.5, x = Dt(t.x, t.y, t.z, C), k = hn(t.x, t.y, t.z, C);
        let V = false;
        if (k >= 0) if (!x) V = true;
        else {
          const O = window.__hekatanDrawingAuxLines, j = ((O == null ? void 0 : O.rawVal) ?? (O == null ? void 0 : O.val) ?? O ?? [])[k];
          kt(t.x, t.y, t.z, j[0], j[1], j[2], j[3], j[4], j[5]) < x.dist && (V = true);
        }
        if (V ? (qe = k, De = -1, nt = -1, fn(k)) : x ? (De = x.polyIdx, nt = x.segIdx, qe = -1, mn(x.polyIdx, x.segIdx)) : (De = -1, nt = -1, qe = -1, Ve.visible = false), B.visible = false, D.visible = false, Y(), T.style.left = s.clientX + "px", T.style.top = s.clientY + "px", T.style.display = "block", V) T.textContent = `\u{1F5D1} Click para borrar l\xEDnea auxiliar #${qe + 1}`;
        else if (x) {
          const O = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(x.polyIdx)) ?? false;
          T.textContent = O ? `\u{1F5D1} Click para borrar \xE1rea #${x.polyIdx + 1} completa` : `\u{1F5D1} Click para borrar segmento ${x.segIdx + 1} de polil\xEDnea #${x.polyIdx + 1}`;
        } else T.textContent = "\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para resaltarla";
        y();
        return;
      } else Ve.visible = false, De = -1, qe = -1;
      T.style.left = s.clientX + "px", T.style.top = s.clientY + "px", T.style.display = "block";
      const l = ((_g = e.polylines) == null ? void 0 : _g.rawVal) ?? [], i = l[l.length - 1] ?? [], M = e.points.rawVal ?? [];
      if (i.length > 0 && M[i[i.length - 1]]) {
        const C = i[i.length - 1], x = M[C], k = !!window.__hekatanOrthoMode;
        let V = ue;
        if (!V && k) {
          const Ae = Math.abs(t.x - x[0]), He = Math.abs(t.y - x[1]), Te = Math.abs(t.z - x[2]), Ke = (_h = c[0]) == null ? void 0 : _h.object;
          let Ne = null;
          Ke === me ? Ne = "xy" : Ke === ye ? Ne = "xz" : Ke === ve && (Ne = "yz"), Ne === "xy" ? V = Ae >= He ? "x" : "y" : Ne === "xz" ? V = Ae >= Te ? "x" : "z" : Ne === "yz" ? V = He >= Te ? "y" : "z" : V = Ae >= He && Ae >= Te ? "x" : He >= Te ? "y" : "z";
        }
        if (V) {
          const Ae = x[0], He = x[1], Te = x[2];
          V === "x" ? t.set(t.x, He, Te) : V === "y" ? t.set(Ae, t.y, Te) : t.set(Ae, He, t.z);
          const Ke = !!ue, at = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[V];
          ce.style.background = "rgba(15,23,42,0.92)", ce.style.color = at, ce.style.border = `1.5px solid ${at}`;
          const et = (_i = c[0]) == null ? void 0 : _i.object;
          let dt = null;
          et === me ? dt = "xy" : et === ye ? dt = "xz" : et === ve && (dt = "yz");
          const Ht = dt ? ` (plano ${dt.toUpperCase()})` : "";
          ce.textContent = Ke ? `\u{1F512} LOCK ${V.toUpperCase()}${Ht}` : `\u22A5 ORTO ${V.toUpperCase()}${Ht}`, ce.style.left = s.clientX + 20 + "px", ce.style.top = s.clientY + 18 + "px", ce.style.transform = "none", ce.style.display = "block";
        } else ue || (ce.style.display = "none");
        const O = Math.hypot(t.x - x[0], t.y - x[1], t.z - x[2]), ie = Math.atan2(t.y - x[1], t.x - x[0]) * 180 / Math.PI;
        T.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)} | \u0394L=${O.toFixed(2)}m ${ie.toFixed(0)}\xB0`, B.geometry.setFromPoints([new v(x[0], x[1], x[2]), new v(t.x, t.y, t.z)]), (_j = B.computeLineDistances) == null ? void 0 : _j.call(B), B.visible = true, A(x[0], x[1], x[2], t.x, t.y, t.z);
        const j = window.__hekatanOrthoExt ?? 8, K = window.__hekatanShowOrthoPlanes !== false;
        se.visible = K, K || ne(null), K && (U(ee, x, "xy", j), U(re, x, "xz", j), U(pe, x, "yz", j), L(me, x, "xy", j), L(ye, x, "xz", j), L(ve, x, "yz", j));
        const xe = K ? P.intersectObjects([me, ye, ve], false) : [];
        let ge = null;
        if (xe.length > 0) {
          const Ae = xe[0].object;
          Ae === me ? ge = "xy" : Ae === ye ? ge = "xz" : Ae === ve && (ge = "yz");
        }
        ne(ge), ge && (G.style.left = s.clientX + "px", G.style.top = s.clientY + "px"), z.geometry.setFromPoints([new v(x[0] - j, x[1], x[2]), new v(x[0] + j, x[1], x[2])]), (_k = z.computeLineDistances) == null ? void 0 : _k.call(z), Z.geometry.setFromPoints([new v(x[0], x[1] - j, x[2]), new v(x[0], x[1] + j, x[2])]), (_l = Z.computeLineDistances) == null ? void 0 : _l.call(Z), oe.geometry.setFromPoints([new v(x[0], x[1], x[2] - j), new v(x[0], x[1], x[2] + j)]), (_m = oe.computeLineDistances) == null ? void 0 : _m.call(oe), D.visible = true;
        const Be = z.material, Ze = Z.material, Ge = oe.material;
        V === "x" ? (Be.opacity = 0.95, Ze.opacity = 0.1, Ge.opacity = 0.1) : V === "y" ? (Be.opacity = 0.1, Ze.opacity = 0.95, Ge.opacity = 0.1) : V === "z" ? (Be.opacity = 0.1, Ze.opacity = 0.1, Ge.opacity = 0.95) : (Be.opacity = 0.5, Ze.opacity = 0.5, Ge.opacity = 0.5);
      } else T.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`, B.visible = false, D.visible = false, Y();
      y();
    } else zt(), T.style.display = "none", ke.visible = false, B.visible = false, D.visible = false, Y(), y();
  }), I.derive(() => {
    e.gridTarget && (oo(n, { position: new v(...e.gridTarget.val.position), quaternion: new Kt().setFromEuler(new jt(...e.gridTarget.val.rotation)) }, y), N.position.set(...e.gridTarget.val.position), N.quaternion.setFromEuler(new jt(...e.gridTarget.val.rotation)), N.updateMatrixWorld());
  }), I.derive(() => {
    Q.geometry.setAttribute("position", new Xe(e.points.val.flat(), 3)), Q.geometry.computeBoundingSphere();
  }), I.derive(() => {
    const s = 0.05 * w * 0.5 * h.val;
    P.params.Points.threshold = 0.4 * s;
  }), I.derive(() => {
    var _a;
    const s = e.points.val ?? [], c = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const d of c) {
      const [E, l, i] = s[d];
      t.push(E, l, i);
    }
    const b = new ae();
    b.setAttribute("position", new Xe(t, 3)), de.geometry.dispose(), de.geometry = b;
  });
  let Vt = false, Oe = 0;
  p.addEventListener("pointerdown", () => {
    Vt = true;
  }), p.addEventListener("pointerup", () => {
    Vt = false;
  }), p.addEventListener("pointermove", () => {
    Vt && Oe++;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Ue = new Me();
  Ue.visible = false, Ue.frustumCulled = false, u.add(Ue);
  const gn = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, Wt = (s, o, c, t) => {
    var _a, _b, _c, _d;
    for (; Ue.children.length; ) {
      const l = Ue.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const b = gn[s] ?? 16777215, d = 0.05, E = new ae().setFromPoints([new v(o - d, c - d, t), new v(o + d, c - d, t), new v(o + d, c - d, t), new v(o + d, c + d, t), new v(o + d, c + d, t), new v(o - d, c + d, t), new v(o - d, c + d, t), new v(o - d, c - d, t)]);
    Ue.add(new it(E, new Ye({ color: b, linewidth: 2 }))), Ue.position.set(0, 0, 0), Ue.visible = true;
  }, zt = () => {
    Ue.visible = false;
  }, bn = (s, o, c, t) => {
    var _a;
    const b = window.__hekatanOsnap, d = e.points.rawVal, E = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let l = null;
    const i = (x, k, V, O) => {
      const ie = Math.hypot(k - s, V - o, O - c);
      ie > t || (!l || ie < l.d) && (l = { type: x, x: k, y: V, z: O, d: ie });
    };
    (b.node || b.end) && d.forEach((x) => {
      b.node && i("node", x[0], x[1], x[2]);
    });
    for (const x of E) if (!(x.length < 2)) for (let k = 0; k < x.length - 1; k++) {
      const V = d[x[k]], O = d[x[k + 1]];
      if (!(!V || !O) && (b.end && (i("end", V[0], V[1], V[2]), i("end", O[0], O[1], O[2])), b.mid && i("mid", (V[0] + O[0]) / 2, (V[1] + O[1]) / 2, (V[2] + O[2]) / 2), b.nea || b.per)) {
        const ie = O[0] - V[0], j = O[1] - V[1], K = O[2] - V[2], xe = ie * ie + j * j + K * K;
        if (xe < 1e-12) continue;
        const ge = Math.max(0, Math.min(1, ((s - V[0]) * ie + (o - V[1]) * j + (c - V[2]) * K) / xe)), Be = V[0] + ge * ie, Ze = V[1] + ge * j, Ge = V[2] + ge * K;
        b.nea && i("nea", Be, Ze, Ge), b.per && i("per", Be, Ze, Ge);
      }
    }
    const M = window.__hekatanDrawingAuxLines, C = (M == null ? void 0 : M.rawVal) ?? (M == null ? void 0 : M.val) ?? M ?? [];
    for (const x of C) {
      if (x.length !== 6) continue;
      const k = [x[0], x[1], x[2]], V = [x[3], x[4], x[5]];
      if (b.end && (i("end", k[0], k[1], k[2]), i("end", V[0], V[1], V[2])), b.mid && i("mid", (k[0] + V[0]) / 2, (k[1] + V[1]) / 2, (k[2] + V[2]) / 2), b.nea || b.per) {
        const O = V[0] - k[0], ie = V[1] - k[1], j = V[2] - k[2], K = O * O + ie * ie + j * j;
        if (K < 1e-12) continue;
        const xe = Math.max(0, Math.min(1, ((s - k[0]) * O + (o - k[1]) * ie + (c - k[2]) * j) / K)), ge = k[0] + xe * O, Be = k[1] + xe * ie, Ze = k[2] + xe * j;
        b.nea && i("nea", ge, Be, Ze), b.per && i("per", ge, Be, Ze);
      }
    }
    return l ? { type: l.type, x: l.x, y: l.y, z: l.z } : null;
  };
  window.__hekatanOsnapCompute = bn, window.__hekatanOsnapShow = Wt, window.__hekatanOsnapHide = zt;
  let we = [], ze = 0;
  const rt = document.createElement("div");
  rt.id = "hk-cad-status", rt.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", rt.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool y hac\xE9 click en el viewer", document.body.appendChild(rt);
  const Mn = () => {
    var _a, _b, _c;
    const s = [];
    window.__hekatanOrthoMode && s.push("\u22A5 ORTO ON (F8)"), ue && s.push(`\u{1F512} LOCK ${ue.toUpperCase()}`);
    const c = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(c) > 1e-3 && s.push(`Cota Z=${c}m`), window.__hekatanShowOrthoPlanes !== false && s.push("\u25A6 Planos XY/XZ/YZ"), s.length > 0 ? `   |   ${s.join("  \xB7  ")}` : "";
  }, he = (s) => {
    const o = s + Mn();
    rt.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const s = window.__hekatanCadStatusText ?? "", o = s.split("   |   ")[0] ?? s;
    he(o);
  }, window.__hekatanCadResetPending = () => {
    we = [], he("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const ct = [], je = () => {
    var _a, _b;
    ct.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), ct.length > 100 && ct.shift();
  }, Ut = () => {
    var _a;
    const s = ct.pop();
    if (!s) {
      he("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = s.p, e.polylines && (e.polylines.val = s.l), e.areas && (e.areas.val = s.a), we = [], B.visible = false, D.visible = false, Y(), he(`\u21B6 Undo \u2014 ${ct.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    y();
  };
  window.__hekatanPushUndo = je, window.__hekatanUndo = Ut, window.addEventListener("keydown", (s) => {
    (s.ctrlKey || s.metaKey) && s.key.toLowerCase() === "z" && !s.shiftKey && (s.preventDefault(), Ut());
  });
  const Gt = () => {
    if (we = [], e.polylines) {
      const s = e.polylines.rawVal, o = s[s.length - 1];
      o && o.length > 0 && (e.polylines.val = [...s, []]);
    }
    ue = null, _e(), B.visible = false, D.visible = false, Y(), he("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), y();
  };
  window.__hekatanFinalizeDraw = Gt, p.addEventListener("click", (s) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u, _v, _w;
    if (Oe > 5) {
      Oe = 0;
      return;
    }
    Oe = 0;
    const o = m(s);
    if (!o) return;
    P.setFromCamera(_, o);
    const c = f();
    if (!c.length) return;
    let t = c[0].point;
    (s.ctrlKey || s.metaKey) && (t = new v(Math.round(c[0].point.x), Math.round(c[0].point.y), Math.round(c[0].point.z)));
    {
      const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = l[l.length - 1] ?? [], M = e.points.rawVal ?? [];
      if (i.length > 0) {
        const C = M[i[i.length - 1]];
        if (C) {
          const x = !!window.__hekatanOrthoMode;
          let k = ue;
          if (!k && x) {
            const V = Math.abs(t.x - C[0]), O = Math.abs(t.y - C[1]), ie = Math.abs(t.z - C[2]);
            k = V >= O && V >= ie ? "x" : O >= ie ? "y" : "z";
          }
          k === "x" ? t = new v(t.x, C[1], C[2]) : k === "y" ? t = new v(C[0], t.y, C[2]) : k === "z" && (t = new v(C[0], C[1], t.z));
        }
      }
    }
    const b = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, b);
    if (d) t = new v(d.x, d.y, d.z), he(`\u{1F3AF} Snap [${d.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const l = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0;
      l && i > 0 && (t = new v(Math.round(t.x / i) * i, Math.round(t.y / i) * i, Math.round(t.z / i) * i));
    }
    const E = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (E === "select" || E === "none" || !E) {
      if (window.__hekatanShowOrthoPlanes !== false && se.visible) {
        const i = window.__hekatanOrthoExt ?? 8, M = [t.x, t.y, t.z];
        U(ee, M, "xy", i), U(re, M, "xz", i), U(pe, M, "yz", i), L(me, M, "xy", i), L(ye, M, "xz", i), L(ve, M, "yz", i), window.__hekatanOrthoAnchor = M, he(`\u25A6 Anchor planos ortogonales \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`), y();
      }
      return;
    }
    if (E === "delete") {
      if (qe >= 0) {
        const l = window.__hekatanDrawingAuxLines, i = (l == null ? void 0 : l.rawVal) ?? (l == null ? void 0 : l.val) ?? l ?? [], M = qe;
        if (M >= 0 && M < i.length) {
          je();
          const C = i.slice(0, M).concat(i.slice(M + 1));
          l && typeof l == "object" && "val" in l ? l.val = C : window.__hekatanDrawingAuxLines = C, he(`\u{1F5D1} L\xEDnea auxiliar #${M + 1} borrada`), qe = -1, Ve.visible = false;
          try {
            (_f = window.__hekatanRebuild) == null ? void 0 : _f.call(window);
          } catch {
          }
        }
      } else if (De >= 0) {
        const l = De, i = nt;
        ((_h = (_g = e.areas) == null ? void 0 : _g.rawVal) == null ? void 0 : _h.includes(l)) ?? false ? (ft(l), he(`\u{1F5D1} \xC1rea #${l + 1} (shell Q4) borrada`)) : i >= 0 ? (wn(l, i), he(`\u{1F5D1} Segmento ${i + 1} de polil\xEDnea #${l + 1} borrado`)) : (ft(l), he(`\u{1F5D1} Polil\xEDnea #${l + 1} borrada`));
      } else he("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (E === "circle") {
      if (we.push([t.x, t.y, t.z]), we.length === 1) {
        he("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [l, i] = we, M = Math.hypot(i[0] - l[0], i[1] - l[1], i[2] - l[2]);
      Math.abs(i[0] - l[0]);
      const C = Math.abs(i[1] - l[1]), k = Math.abs(i[2] - l[2]) < 1e-3 ? "xy" : C < 1e-3 ? "xz" : "yz", V = window.__hekatanArcSegs ?? 12;
      (_i = window.__hekatanDrawCircle) == null ? void 0 : _i.call(window, l[0], l[1], l[2], M, V, k), he(`\u2713 C\xEDrculo dibujado en ${k.toUpperCase()} \u2014 r=${M.toFixed(2)}m, ${V} segmentos`), we = [];
      try {
        (_j = window.__hekatanRebuild) == null ? void 0 : _j.call(window);
      } catch {
      }
      return;
    }
    if (E === "arc") {
      if (we.push([t.x, t.y, t.z]), we.length === 1) {
        he("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (we.length === 2) {
        he("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [l, i, M] = we, C = window.__hekatanArcSegs ?? 12;
      (_k = window.__hekatanDrawArc) == null ? void 0 : _k.call(window, l, i, M, C), he(`\u2713 Arco dibujado \u2014 ${C} segmentos`), we = [];
      try {
        (_l = window.__hekatanRebuild) == null ? void 0 : _l.call(window);
      } catch {
      }
      return;
    }
    if (E === "rect") {
      if (we.push([t.x, t.y, t.z]), we.length === 1) {
        he("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [l, i] = we;
      (_m = window.__hekatanDrawRect) == null ? void 0 : _m.call(window, l, i), he(`\u2713 Rect\xE1ngulo dibujado \u2014 (${l[0].toFixed(1)},${l[1].toFixed(1)}) \u2192 (${i[0].toFixed(1)},${i[1].toFixed(1)})`), we = [];
      try {
        (_n2 = window.__hekatanRebuild) == null ? void 0 : _n2.call(window);
      } catch {
      }
      return;
    }
    if (E === "col") {
      je();
      const l = t.z, i = ze && ze > 0 ? ze : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + i]];
      const M = e.polylines.rawVal, C = e.points.rawVal.length;
      e.polylines.val = [...M.slice(0, -1), ...M[M.length - 1].length > 0 ? [M[M.length - 1]] : [], [C - 2, C - 1], []], ze = 0, he(`\u258C Columna creada \u2014 h=${i.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_o = window.__hekatanRebuild) == null ? void 0 : _o.call(window);
      } catch {
      }
      return;
    }
    if (E === "wall") {
      if (we.push([t.x, t.y, t.z]), we.length === 1) {
        he("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [l, i] = we, M = ze && ze > 0 ? ze : 3;
      je();
      const C = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [l[0], l[1], l[2]], [i[0], i[1], i[2]], [i[0], i[1], i[2] + M], [l[0], l[1], l[2] + M]];
      const x = e.polylines.rawVal;
      if (x.length - 1, e.polylines.val = [...x.slice(0, -1), ...x[x.length - 1].length > 0 ? [x[x.length - 1]] : [], [C, C + 1, C + 2, C + 3, C], []], e.areas) {
        const k = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, k];
      }
      he(`\u25A5 Pared Q4 creada \u2014 h=${M.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), we = [], ze = 0;
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (E === "extp") {
      je();
      const l = ze && ze > 0 ? ze : 3, i = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + l]];
      const M = e.polylines.rawVal, C = e.points.rawVal.length;
      e.polylines.val = [...M.slice(0, -1), ...M[M.length - 1].length > 0 ? [M[M.length - 1]] : [], [C - 2, C - 1], []], ze = 0, he(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${l.toFixed(2)}m`);
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (E === "extl") {
      const l = (window.__hekatanSnap2D ?? 0.5) * 1.5, i = Dt(t.x, t.y, t.z, l);
      if (!i) {
        he("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const M = e.polylines.rawVal, C = e.points.rawVal, x = M[i.polyIdx], k = C[x[i.segIdx]], V = C[x[i.segIdx + 1]];
      if (!k || !V) {
        he("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const O = ze && ze > 0 ? ze : 3;
      je();
      const ie = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [k[0], k[1], k[2]], [V[0], V[1], V[2]], [V[0], V[1], V[2] + O], [k[0], k[1], k[2] + O]];
      const j = e.polylines.rawVal;
      if (e.polylines.val = [...j.slice(0, -1), ...j[j.length - 1].length > 0 ? [j[j.length - 1]] : [], [ie, ie + 1, ie + 2, ie + 3, ie], []], e.areas) {
        const K = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, K];
      }
      ze = 0, he(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${O.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (E === "aux") {
      if (we.push([t.x, t.y, t.z]), we.length === 1) {
        he("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [l, i] = we, M = window.__hekatanDrawingAuxLines;
      if (M) {
        const O = M.rawVal ?? M.val ?? [];
        M.val = [...O, [l[0], l[1], l[2], i[0], i[1], i[2]]];
      }
      const C = i[0] - l[0], x = i[1] - l[1], k = i[2] - l[2], V = Math.sqrt(C * C + x * x + k * k);
      he(`\u2713 L\xEDnea auxiliar creada \u2014 L=${V.toFixed(2)}m (cyan, no FEM)`), we = [];
      return;
    }
    if (E === "extend") {
      if (we.push([t.x, t.y, t.z]), we.length === 1) {
        he("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [l, i] = we, M = window.__hekatanDrawingAuxLines;
      if (M) {
        const C = M.rawVal ?? M.val ?? [];
        M.val = [...C, [l[0], l[1], l[2], i[0], i[1], i[2]]];
      }
      he("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), we = [];
      return;
    }
    if (E === "chaflan") {
      if (we.push([t.x, t.y, t.z]), we.length === 1) {
        he("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [l, i] = we, M = window.__hekatanChaflanR ?? 1, C = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_s = window.__hekatanDrawSlabChaflan) == null ? void 0 : _s.call(window, l, i, M, C, 6);
      const x = Math.abs(i[0] - l[0]).toFixed(1), k = Math.abs(i[1] - l[1]).toFixed(1);
      he(`\u2713 Losa con chaflanes dibujada \u2014 ${x}\xD7${k}m, r=${M}m, ${C} seg/chafl\xE1n`), we = [];
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (S = false, je(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const l = e.polylines.rawVal, i = l.length - 1, M = l[i] ?? [];
      if (E === "line" && M.length === 2) {
        e.polylines.val = [...l, []], he("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
        } catch {
        }
        return;
      }
      if (E === "area" && M.length === 4) {
        e.polylines.val = [...l.slice(0, -1), [...M, M[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, i]), he("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
    }
    if (E === "node") he(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (E === "line") he("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (E === "polyline") he("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (E === "area") {
      const l = ((_w = e.polylines) == null ? void 0 : _w.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      he(`\u25A6 \xC1rea \u2014 click ${l.length}/4. Marc\xE1 ${4 - l.length} v\xE9rtice${4 - l.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), p.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), p.addEventListener("pointermove", (s) => {
    var _a;
    const o = m(s);
    if (!o) return;
    P.setFromCamera(_, o);
    const c = f();
    if (J.geometry.deleteAttribute("position"), c.length) {
      let t = c[0].point.clone();
      const b = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, b);
      if (d) t.set(d.x, d.y, d.z);
      else {
        const E = window.__hekatanSnapEnabled !== false, l = window.__hekatanSnap2D ?? 0.5;
        E && l > 0 && (t.x = Math.round(t.x / l) * l, t.y = Math.round(t.y / l) * l, t.z = Math.round(t.z / l) * l);
      }
      (s.ctrlKey || s.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z)), J.geometry.setAttribute("position", new Xe(t.toArray(), 3));
    }
    y();
  }), p.addEventListener("pointermove", (s) => {
    var _a;
    const o = m(s);
    if (!o) return;
    P.setFromCamera(_, o);
    let c = false;
    const t = P.intersectObject(Q), b = f();
    if (t.length && b.length) {
      const d = new v(...e.points.rawVal[t[0].index]), E = new v(...b[0].point), l = d.sub(E), i = (_a = b[0].face) == null ? void 0 : _a.normal;
      i.transformDirection(N.matrixWorld), Math.abs(l.dot(i)) < 1e-4 && (c = true);
    }
    J.visible = !c;
  });
  let Ft = false, At;
  p.addEventListener("pointermove", (s) => {
    var _a;
    if (!Oe) return;
    const o = m(s);
    if (!o) return;
    P.setFromCamera(_, o);
    let c = false;
    const t = P.intersectObject(Q), b = f();
    if (t.length && b.length) {
      const E = new v(...e.points.rawVal[t[0].index]), l = new v(...b[0].point), i = E.sub(l), M = (_a = b[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(N.matrixWorld), Math.abs(i.dot(M)) < 1e-4 && (c = true);
    }
    if (c && Oe < 5 && (Ft = true, a.enabled = false, At = t[0].index), !Ft || Oe % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (At !== void 0) {
      let E = b[0].point;
      (s.ctrlKey || s.metaKey) && (E = new v(Math.round(E.x), Math.round(E.y), Math.round(E.z))), d[At] = E.toArray();
    }
    e.points.val = d;
  }), p.addEventListener("pointerup", () => {
    a.enabled = true, Ft = false;
  }), p.addEventListener("contextmenu", (s) => {
    var _a;
    const o = m(s);
    if (!o) return;
    P.setFromCamera(_, o);
    let c = false;
    const t = P.intersectObject(Q), b = f();
    if (t.length && b.length) {
      const l = new v(...e.points.rawVal[t[0].index]), i = new v(...b[0].point), M = l.sub(i), C = (_a = b[0].face) == null ? void 0 : _a.normal;
      C.transformDirection(N.matrixWorld), Math.abs(M.dot(C)) < 1e-4 && (c = true);
    }
    if (!c) return;
    const d = [...e.points.rawVal];
    if (d.splice(t[0].index, 1), e.points.val = d, !e.polylines) return;
    const E = e.polylines.rawVal.map((l) => l.filter((i) => i !== t[0].index)).map((l) => l.map((i) => i > t[0].index ? i - 1 : i)).filter((l) => l.length);
    E.push([]), e.polylines.val = E;
  });
}
function oo(e, n, u) {
  const w = Math.round(14.999999999999998), h = { position: e.position.clone(), quaternion: e.quaternion.clone() }, p = setInterval(P, 1e3 / 30);
  let y = 0;
  function P() {
    y++;
    const _ = y / w;
    e.position.lerpVectors(h.position, n.position, _), e.quaternion.slerpQuaternions(h.quaternion, n.quaternion, _), u && u(), y == w && clearInterval(p);
  }
}
class un {
  constructor(n, u = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(n, u);
  }
  set(n) {
    return n.isLut === true && this.copy(n), this;
  }
  setMin(n) {
    return this.minV = n, this;
  }
  setMax(n) {
    return this.maxV = n, this;
  }
  setColorMap(n, u = 32) {
    this.map = Yt[n] || Yt.rainbow, this.n = u;
    const r = 1 / this.n, a = new Pe(), w = new Pe();
    this.lut.length = 0, this.lut.push(new Pe(this.map[0][1]));
    for (let h = 1; h < u; h++) {
      const p = h * r;
      for (let y = 0; y < this.map.length - 1; y++) if (p > this.map[y][0] && p <= this.map[y + 1][0]) {
        const P = this.map[y][0], _ = this.map[y + 1][0];
        a.setHex(this.map[y][1], wt), w.setHex(this.map[y + 1][1], wt);
        const m = new Pe().lerpColors(a, w, (p - P) / (_ - P));
        this.lut.push(m);
      }
    }
    return this.lut.push(new Pe(this.map[this.map.length - 1][1])), this;
  }
  copy(n) {
    return this.lut = n.lut, this.map = n.map, this.n = n.n, this.minV = n.minV, this.maxV = n.maxV, this;
  }
  getColor(n) {
    n = Pn.clamp(n, this.minV, this.maxV), n = (n - this.minV) / (this.maxV - this.minV);
    const u = Math.round(n * this.n);
    return this.lut[u];
  }
  addColorMap(n, u) {
    return Yt[n] = u, this;
  }
  createCanvas() {
    const n = document.createElement("canvas");
    return n.width = 1, n.height = this.n, this.updateCanvas(n), n;
  }
  updateCanvas(n) {
    const u = n.getContext("2d", { alpha: false }), r = u.getImageData(0, 0, 1, this.n), a = r.data;
    let w = 0;
    const h = 1 / this.n, p = new Pe(), y = new Pe(), P = new Pe();
    for (let _ = 1; _ >= 0; _ -= h) for (let m = this.map.length - 1; m >= 0; m--) if (_ < this.map[m][0] && _ >= this.map[m - 1][0]) {
      const N = this.map[m - 1][0], H = this.map[m][0];
      p.setHex(this.map[m - 1][1], wt), y.setHex(this.map[m][1], wt), P.lerpColors(p, y, (_ - N) / (H - N)), a[w * 4] = Math.round(P.r * 255), a[w * 4 + 1] = Math.round(P.g * 255), a[w * 4 + 2] = Math.round(P.b * 255), a[w * 4 + 3] = 255, w += 1;
    }
    return u.putImageData(r, 0, 0), n;
  }
}
const Yt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, ut = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function so(e) {
  e = Math.max(0, Math.min(1, e));
  for (let u = 0; u < ut.length - 1; u++) {
    const [r, a, w, h] = ut[u], [p, y, P, _] = ut[u + 1];
    if (e <= p) {
      const m = (e - r) / (p - r);
      return [a + (y - a) * m, w + (P - w) * m, h + (_ - h) * m];
    }
  }
  const n = ut[ut.length - 1];
  return [n[1], n[2], n[3]];
}
function ao() {
  const n = new Uint8Array(1024);
  for (let r = 0; r < 256; r++) {
    const a = r / 255, [w, h, p] = so(a);
    n[r * 4 + 0] = w, n[r * 4 + 1] = h, n[r * 4 + 2] = p, n[r * 4 + 3] = 255;
  }
  const u = new zn(n, 256, 1, Fn);
  return u.minFilter = en, u.magFilter = en, u.wrapS = tn, u.wrapT = tn, u.needsUpdate = true, u;
}
function io(e, n, u) {
  new un();
  const r = ao(), a = new Cn({ uniforms: { cmap: { value: r }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Le, transparent: false, clipping: true, depthWrite: true, depthTest: true }), w = new Fe(new ae(), a);
  return w.renderOrder = -1, w.frustumCulled = false, I.derive(() => {
    w.geometry.setAttribute("position", new Xe(e.val.flat(), 3));
    const h = [];
    for (const f of n.val) f.length === 3 ? h.push(f[0], f[1], f[2]) : f.length === 4 && (h.push(f[0], f[1], f[2]), h.push(f[0], f[2], f[3]));
    w.geometry.setIndex(new Vn(h, 1));
    const p = u.val.filter((f) => Number.isFinite(f));
    let y, P;
    const _ = $t.val;
    if (_ ? (P = _[0], y = _[1]) : (y = p.length ? Math.max(...p) : 1, P = p.length ? Math.min(...p) : 0, P >= 0 && y > 0 && (P = 0)), y === P) {
      const f = Math.max(Math.abs(y) * 1e-6, 1e-9);
      y += f, P -= f;
    }
    const m = _ && _[0] > _[1], N = Math.min(P, y), H = Math.max(P, y), $ = H - N, le = new Float32Array(u.val.length);
    for (let f = 0; f < u.val.length; f++) {
      const Q = u.val[f];
      if (!Number.isFinite(Q)) {
        le[f] = -1;
        continue;
      }
      const de = ((m ? H + N - Q : Q) - N) / $;
      le[f] = Math.max(0, Math.min(1, de));
    }
    w.geometry.setAttribute("scalar", new be(le, 1));
  }), w;
}
function lo(e, n, u, r) {
  const a = io(u, e.elements, r);
  return I.derive(() => {
    a.visible = n.shellResults.val != "none";
  }), a;
}
const ro = 6, Lt = 10, co = 0.012;
function po(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function uo(e, n, u, r) {
  if (!u && !r) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && u) {
    const w = u[e];
    if (w && w.has(n)) return w.get(n);
  }
  return null;
}
function ho(e, n, u, r) {
  const a = new Me(), w = new un();
  w.setColorMap("rainbow");
  const h = new Pe(), p = I.state([]);
  return I.derive(() => {
    var _a, _b, _c;
    n.deformedShape.val;
    const y = u.val, P = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], _ = po(n.frameResults.val);
    if (a.children.forEach((T) => {
      T.geometry && T.geometry.dispose(), T.material && T.material.dispose();
    }), a.clear(), !_ || P.length === 0 || y.length === 0) {
      p.val = [];
      return;
    }
    const m = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, N = (_c = e.deformOutputs) == null ? void 0 : _c.val, H = [], $ = [];
    for (let T = 0; T < P.length; T++) {
      if (P[T].length !== 2) continue;
      const D = uo(_, T, m, N);
      D && (H.push(D[0], D[1]), $.push({ idx: T, vals: D }));
    }
    if (H.length === 0) {
      p.val = [];
      return;
    }
    const le = Math.min(...H), f = Math.max(...H);
    w.setMin(le), w.setMax(f), p.val = H;
    const Q = [1 / 0, 1 / 0, 1 / 0], J = [-1 / 0, -1 / 0, -1 / 0];
    for (const T of y) for (let B = 0; B < 3; B++) Q[B] = Math.min(Q[B], T[B]), J[B] = Math.max(J[B], T[B]);
    const W = Math.max(J[0] - Q[0], J[1] - Q[1], J[2] - Q[2], 1) * co, F = [], R = [], S = [];
    let g = 0;
    for (const { idx: T, vals: B } of $) {
      const D = P[T], te = y[D[0]], z = y[D[1]];
      if (!te || !z) continue;
      const Z = new v(z[0] - te[0], z[1] - te[1], z[2] - te[2]), oe = Z.length();
      if (oe < 1e-10) continue;
      Z.normalize();
      const q = Math.abs(Z.y) < 0.99 ? new v(0, 1, 0) : new v(1, 0, 0), ee = new v().crossVectors(Z, q).normalize(), re = new v().crossVectors(Z, ee).normalize(), pe = Lt + 1, se = ro;
      for (let fe = 0; fe < pe; fe++) {
        const me = fe / Lt, ye = te[0] + Z.x * oe * me, ve = te[1] + Z.y * oe * me, L = te[2] + Z.z * oe * me, G = B[0] + (B[1] - B[0]) * me, ne = w.getColor(G) ?? new Pe(0, 0, 0);
        h.copy(ne).convertSRGBToLinear();
        for (let U = 0; U < se; U++) {
          const ue = U / se * Math.PI * 2, ce = Math.cos(ue), _e = Math.sin(ue);
          F.push(ye + (ee.x * ce + re.x * _e) * W, ve + (ee.y * ce + re.y * _e) * W, L + (ee.z * ce + re.z * _e) * W), R.push(h.r, h.g, h.b);
        }
      }
      for (let fe = 0; fe < Lt; fe++) for (let me = 0; me < se; me++) {
        const ye = (me + 1) % se, ve = g + fe * se + me, L = g + fe * se + ye, G = g + (fe + 1) * se + me, ne = g + (fe + 1) * se + ye;
        S.push(ve, L, ne), S.push(ve, ne, G);
      }
      g += pe * se;
    }
    if (F.length === 0) return;
    const A = new ae();
    A.setAttribute("position", new Xe(F, 3)), A.setAttribute("color", new Xe(R, 3)), A.setIndex(S), A.computeVertexNormals();
    const Y = new Ee({ vertexColors: true, side: Le }), X = new Fe(A, Y);
    X.frustumCulled = false, a.add(X);
  }), a.__colorMapValues = p, a;
}
function ln(e, n = 8) {
  const u = document.createElement("div");
  u.id = "legend";
  const r = document.createElement("div");
  r.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", u.appendChild(r), setTimeout(() => {
    I.derive(() => {
      r.textContent = Rt.val ? `[${Rt.val}]` : "";
    });
  });
  const a = Array.from({ length: n + 1 }, (y, P) => P / n).reverse();
  let w, h;
  a.forEach((y, P) => {
    w = document.createElement("div"), w.id = `marker-${P}`, w.className = "marker", w.style.marginTop = P == 0 ? "0px" : `calc(${50 / n}vh - 1px)`, h = document.createElement("p"), h.id = `marker-text-${P}`, w.append(h), u.append(w);
  });
  const p = [];
  return u.querySelectorAll("p").forEach((y) => p.push(y)), setTimeout(() => {
    I.derive(() => {
      a.forEach((y, P) => {
        const _ = p[P];
        _ && (_.innerText = fo(e.val, y).toString());
      });
    });
  }), u;
}
function fo(e, n) {
  const u = $t.val;
  if (u) return (u[0] + n * (u[1] - u[0])).toPrecision(3);
  const r = e.filter((h) => Number.isFinite(h));
  if (r.length === 0) return "0";
  let a = Math.min(...r);
  const w = Math.max(...r);
  return a >= 0 && w > 0 && (a = 0), (a + n * (w - a)).toPrecision(3);
}
function ko({ mesh: e, settingsObj: n, drawingObj: u, objects3D: r, solids: a }) {
  Ln.DEFAULT_UP = new v(0, 0, 1);
  const w = document.createElement("div"), h = new An(), p = new Tn(45, 1, 0.1, 2 * 1e6), y = new En(-10, 10, 10, -10, -1e3, 2e6);
  let P = p;
  const _ = new Xn({ antialias: true });
  _.localClippingEnabled = true;
  const m = new nn(p, _.domElement);
  m.enableDamping = true, m.dampingFactor = 0.1, m.screenSpacePanning = true, m.zoomSpeed = 0.8, m.panSpeed = 1.2, m.rotateSpeed = 0.9, m.keyPanSpeed = 12, m.listenToKeyEvents(window), m.touches = { ONE: xt.ROTATE, TWO: xt.DOLLY_PAN }, _.domElement.addEventListener("wheel", (L) => {
    if (!L.ctrlKey && Math.abs(L.deltaX) > Math.abs(L.deltaY) * 1.5) {
      L.preventDefault();
      const G = m.target, ne = new v().subVectors(p.position, G), U = new v();
      U.crossVectors(p.up, ne).normalize();
      const ce = ne.length() * 1e-3 * m.panSpeed;
      G.addScaledVector(U, L.deltaX * ce), p.position.addScaledVector(U, L.deltaX * ce), m.update();
    }
  }, { passive: false });
  const N = new Et(new v(-1, 0, 0), 0), H = new Et(new v(0, -1, 0), 0), $ = new Et(new v(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function le() {
    const L = window.__hekatanClip, G = [];
    L.enableX && (N.normal.set(L.invertX ? 1 : -1, 0, 0), N.constant = L.invertX ? -L.posX : L.posX, G.push(N)), L.enableY && (H.normal.set(0, L.invertY ? 1 : -1, 0), H.constant = L.invertY ? -L.posY : L.posY, G.push(H)), L.enableZ && ($.normal.set(0, 0, L.invertZ ? 1 : -1), $.constant = L.invertZ ? -L.posZ : L.posZ, G.push($)), _.clippingPlanes = G, h.traverse((U) => {
      const ue = U;
      if (ue.material) {
        const ce = Array.isArray(ue.material) ? ue.material : [ue.material];
        for (const _e of ce) _e.clippingPlanes = G, _e.needsUpdate = true;
      }
    });
    const ne = window.__hekatanPanes ?? [];
    for (const U of ne) try {
      U && typeof U.refresh == "function" && U.refresh();
    } catch {
    }
    _.render(h, P);
  }
  le(), window.__hekatanClipApply = le;
  const f = Bn(n), Q = I.derive(() => f.displayScale.val === 0 ? 1 : f.displayScale.val > 0 ? f.displayScale.val : -1 / f.displayScale.val), J = mo(e, f), de = () => {
    const L = [];
    return f.gridXY.rawVal && L.push("xy"), f.gridXZ.rawVal && L.push("xz"), f.gridYZ.rawVal && L.push("yz"), L;
  }, W = () => {
    const L = f.gridStep.rawVal, G = Math.max(L, f.gridMajor.rawVal);
    return { planes: de(), majorStep: G, minorStep: L };
  };
  let F = Xt(f.gridSize.rawVal, W());
  F.visible = f.gridVisible.rawVal, window.__hekatanSnap2D = f.cursorSnap.rawVal;
  const R = () => {
    const L = Math.max(0, Math.min(1, f.gridOpacity.rawVal));
    F.traverse((G) => {
      const ne = G.material;
      if (!ne || !("opacity" in ne)) return;
      const U = G.name ?? "";
      let ue = 0.35;
      U.includes("border") ? ue = 1 : U.includes("major") && (ue = 0.75), ne.opacity = L * ue;
    });
  };
  R(), w.appendChild(Rn(f, e, a)), w.setAttribute("id", "viewer"), w.appendChild(_.domElement), _.setPixelRatio(window.devicePixelRatio);
  const S = Qe();
  _.setClearColor(S.background, 1);
  const g = f.gridSize.rawVal, A = g * 0.5 + g * 0.5 / Math.tan(45 * 0.5);
  p.position.set(0.5 * g, -A, 0.5 * g), m.target.set(0, 0, 0), m.minDistance = 0.1, m.maxDistance = 1e4, w.__settings = f, m.zoomSpeed = 1, m._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, m.update();
  let Y = sn(f.gridSize.rawVal, f.flipAxes.rawVal);
  h.add(F, Y), I.derive(() => {
    window.__hekatanGridPlaneXY = f.gridXY.val, window.__hekatanGridPlaneXZ = f.gridXZ.val, window.__hekatanGridPlaneYZ = f.gridYZ.val;
  });
  let X = true;
  I.derive(() => {
    const L = f.gridVisible.val;
    if (X) {
      X = false;
      return;
    }
    F.visible = L, q();
  });
  let T = true;
  I.derive(() => {
    if (f.gridOpacity.val, T) {
      T = false;
      return;
    }
    R(), q();
  }), I.derive(() => {
    const L = f.cursorSnap.val;
    window.__hekatanSnap2D = L;
  });
  let B = true;
  I.derive(() => {
    var _a;
    const L = f.gridSize.val, G = f.flipAxes.val;
    if (f.gridXY.val, f.gridXZ.val, f.gridYZ.val, f.gridStep.val, f.gridMajor.val, B) {
      B = false;
      return;
    }
    h.remove(F), (_a = F.traverse) == null ? void 0 : _a.call(F, (U) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = U.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = U.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), F = Xt(L, W()), F.visible = f.gridVisible.rawVal, h.add(F), R(), h.remove(Y), Y.traverse((U) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = U.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = U.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), Y = sn(L, G), h.add(Y);
    const ne = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
    p.position.distanceTo(m.target), p.position.set(0.5 * L, -ne, 0.5 * L), m.target.set(0, 0, 0), m.minDistance = Math.max(0.05, L * 0.01), m.maxDistance = Math.max(50, L * 50), m.update(), q();
  }), new ResizeObserver((L) => {
    var _a, _b;
    for (const G of L) {
      const ne = (_a = G.target) == null ? void 0 : _a.clientWidth, U = (_b = G.target) == null ? void 0 : _b.clientHeight;
      if (ne === 0 || U === 0) continue;
      const ce = (te ? ne / 2 : ne) / U;
      p.aspect = ce, p.updateProjectionMatrix();
      const _e = y.top;
      if (y.left = -_e * ce, y.right = _e * ce, y.updateProjectionMatrix(), z && z.isPerspectiveCamera) z.aspect = ce, z.updateProjectionMatrix();
      else if (z && z.isOrthographicCamera) {
        const Se = z, Ie = Se.top;
        Se.left = -Ie * ce, Se.right = Ie * ce, Se.updateProjectionMatrix();
      }
      _.setSize(ne, U), q();
    }
  }).observe(w), m.addEventListener("change", q), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, f.displayScale.val, f.nodes.val, f.elements.val, (_g = f.edges) == null ? void 0 : _g.val, f.elemColumns.val, f.elemBeams.val, f.nodesIndexes.val, f.elementsIndexes.val, f.orientations.val, f.sections.val, f.secColumns.val, f.secBeams.val, f.secFloor.val, f.supports.val, f.loads.val, f.deformedShape.val, f.nodeResults.val, f.frameResults.val, f.shellResults.val, (_h = f.solidResults) == null ? void 0 : _h.val, setTimeout(q);
  });
  let te = false, z = null, Z = null, oe = false;
  function q() {
    const L = w.clientWidth || 1, G = w.clientHeight || 1;
    if (!te || !z) {
      _.setScissorTest(false), _.setViewport(0, 0, L, G), _.render(h, P);
      return;
    }
    const ne = L / 2;
    _.setScissorTest(true), _.setViewport(0, 0, ne, G), _.setScissor(0, 0, ne, G), _.render(h, P), _.setViewport(ne, 0, ne, G), _.setScissor(ne, 0, ne, G), _.render(h, z), _.setScissorTest(false);
  }
  function ee(L) {
    P = L, m.object = L, m.update(), q();
  }
  function re(L, G) {
    te = L, G && (z = G);
    const ne = w.clientWidth || 1, U = w.clientHeight || 1, ce = (L ? ne / 2 : ne) / U;
    p.isPerspectiveCamera && (p.aspect = ce, p.updateProjectionMatrix());
    const _e = y.top;
    if (y.left = -_e * ce, y.right = _e * ce, y.updateProjectionMatrix(), L && z) {
      if (Z ? (Z.object = z, Z.update()) : (Z = new nn(z, _.domElement), Z.enableDamping = true, Z.dampingFactor = 0.1, Z.screenSpacePanning = true, Z.zoomSpeed = 0.8, Z.panSpeed = 1.2, Z.rotateSpeed = 0.9, Z.touches = { ONE: xt.ROTATE, TWO: xt.DOLLY_PAN }, Z.target.copy(m.target), Z.addEventListener("change", q), Z.enabled = false), !oe) {
        const Se = (Ie) => {
          if (!te || !Z) return;
          const Je = _.domElement.getBoundingClientRect(), St = Ie.clientX - Je.left, Ve = Je.width / 2, De = St >= Ve;
          m.enabled = !De, Z.enabled = De;
        };
        _.domElement.addEventListener("pointerdown", Se, true), _.domElement.addEventListener("wheel", Se, { capture: true, passive: true }), oe = true;
      }
    } else L || (m.enabled = true, Z && (Z.enabled = false));
    w.__splitMode = L, window.__hekatanSplitMode = L, window.__hekatanSplitCamera = L ? z : null, q();
  }
  if (e) {
    h.add(Zn(f, J, Q), $n(e, f, J), Un(f, J, Q), Gn(e, f, J, Q), Nn(e, f, J, Q), Wn(e, f, J, Q), qn(e, f, J, Q), Jn(e, f, J, Q), to(e, f, J, Q), On(e, f, J, Q));
    const L = bo(e, f), G = lo(e, f, J, L), ne = ln(L);
    h.add(G), w.appendChild(ne);
    const U = ho(e, f, J);
    h.add(U);
    const ue = U.__colorMapValues, ce = ln(ue);
    ce.id = "frame-legend", w.appendChild(ce), I.derive(() => {
      var _a;
      const _e = f.shellResults.val != "none", Se = (((_a = f.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Ie = _e || Se, Je = f.frameResults.val.startsWith("contour:");
      ne.hidden = !Ie, G.visible = Ie, ce.hidden = !Je;
    });
  }
  if (a) {
    const L = new Yn(16777215, 0.5);
    h.add(L);
    const G = new on(16777215, 0.5);
    G.position.set(30, 25, -10), G.shadow.mapSize.width = 1024, G.shadow.mapSize.height = 1024, h.add(G);
    const ne = 10;
    G.shadow.camera.left = -ne, G.shadow.camera.right = ne, G.shadow.camera.top = ne, G.shadow.camera.bottom = -ne, G.shadow.camera.far = 1e3;
    const U = new on(16777215, 0.5);
    U.color.setHSL(11, 43, 96), U.position.set(-10, 0, 30), h.add(U), I.derive(() => {
      (a == null ? void 0 : a.val.length) && (h.remove(...a.oldVal), h.add(...a.rawVal), q());
    }), I.derive(() => {
      a.rawVal.forEach((ue) => ue.visible = f.solids.val), q();
    });
  }
  if (r) {
    const L = [], G = (U) => {
      var _a;
      return ((_a = U == null ? void 0 : U.userData) == null ? void 0 : _a.isCota) ? f.showCotas.val : f.custom3D.val;
    }, ne = () => {
      for (const U of L) U.visible = G(U);
      q();
    };
    I.derive(() => {
      const U = r.val;
      L.length && (h.remove(...L), L.length = 0), U.length && (h.add(...U), L.push(...U), ne()), q();
    }), I.derive(() => {
      f.custom3D.val, ne();
    }), I.derive(() => {
      f.showCotas.val, ne();
    });
  }
  u && no({ drawingObj: u, gridObj: F, scene: h, getActiveCamera: () => P, controls: m, gridSize: g, derivedDisplayScale: Q, rendererElm: _.domElement, viewerRender: q }), _t((L, G) => {
    var _a;
    _.setClearColor(G.background, 1), h.remove(F), (_a = F.traverse) == null ? void 0 : _a.call(F, (ne) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ne.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ne.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), F = Xt(f.gridSize.rawVal, { planes: de() }), h.add(F), w.style.setProperty("--awatif-legend-color", G.legendMarker), q();
  });
  const pe = { scene: h, perspCamera: p, orthoCamera: y, get camera() {
    return P;
  }, controls: m, renderer: _, rendererElm: _.domElement, render: q, setActiveCamera: ee, setSplitMode: re, get splitMode() {
    return te;
  }, get splitCamera() {
    return z;
  }, settings: f };
  w.__ctx = pe;
  const se = document.createElement("div");
  se.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const fe = (L, G, ne) => {
    const U = document.createElement("button");
    return U.textContent = L, U.title = G, U.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), U.onmouseenter = () => {
      U.style.background = "rgba(70,70,70,0.9)";
    }, U.onmouseleave = () => {
      U.style.background = "rgba(40,40,40,0.85)";
    }, U.onclick = (ue) => {
      ue.preventDefault(), ne();
    }, U;
  }, me = (L, G) => {
    const ne = m.target, U = new v().subVectors(P.position, ne), ue = U.length(), ce = new v(), _e = new v();
    ce.crossVectors(P.up, U).normalize(), _e.copy(P.up).normalize();
    const Se = ue * 0.05;
    ne.addScaledVector(ce, -L * Se), ne.addScaledVector(_e, G * Se), P.position.addScaledVector(ce, -L * Se), P.position.addScaledVector(_e, G * Se), m.update(), q();
  }, ye = (L) => {
    const G = new v().subVectors(P.position, m.target);
    G.multiplyScalar(L), P.position.copy(m.target).add(G), m.update(), q();
  }, ve = () => {
    const L = document.createElement("div");
    return L.style.cssText = "width:32px;height:32px;", L;
  };
  return se.append(ve()), se.append(fe("\u2191", "Pan arriba", () => me(0, 1))), se.append(fe("\u2295", "Zoom in", () => ye(0.85))), se.append(fe("\u2190", "Pan izquierda", () => me(-1, 0))), se.append(fe("\u2302", "Reset vista", () => {
    m.reset(), q();
  })), se.append(fe("\u2192", "Pan derecha", () => me(1, 0))), se.append(fe("\u2296", "Zoom out", () => ye(1.18))), se.append(fe("\u2193", "Pan abajo", () => me(0, -1))), se.append(ve()), getComputedStyle(w).position === "static" && (w.style.position = "relative"), w.appendChild(se), w;
}
function mo(e, n) {
  return I.derive(() => {
    var _a, _b, _c, _d;
    if (!n.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const u = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], r = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!r || u.length === 0) return u;
    const a = n.deformScale.val, w = n.deformScale.val * n.deformScaleZ.val, h = Number.isFinite(a) ? a : 1, p = Number.isFinite(w) ? w : 1;
    return u.map((y, P) => {
      var _a2;
      const _ = ((_a2 = r.get(P)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], m = Number.isFinite(_[0]) ? _[0] : 0, N = Number.isFinite(_[1]) ? _[1] : 0, H = Number.isFinite(_[2]) ? _[2] : 0;
      return [y[0] + m * h, y[1] + N * h, y[2] + H * p];
    });
  });
}
const $t = I.state(null), Rt = I.state(""), wo = I.state("kN"), xo = I.state("mm"), yo = I.state("kN/m\xB2"), vo = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, rn = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, go = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function bo(e, n) {
  const u = I.state([]);
  let r;
  return ((a) => {
    a.bendingXX = "bendingXX", a.bendingYY = "bendingYY", a.bendingXY = "bendingXY", a.membraneXX = "membraneXX", a.membraneYY = "membraneYY", a.membraneXY = "membraneXY", a.tranverseShearX = "tranverseShearX", a.tranverseShearY = "tranverseShearY", a.vonMises = "vonMises", a.pressure = "pressure", a.displacementX = "displacementX", a.displacementY = "displacementY", a.displacementZ = "displacementZ";
  })(r || (r = {})), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const a = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), $ = (pe, se) => {
      pe == null ? void 0 : pe.forEach((fe, me) => {
        const ye = e.elements.val[me];
        if (ye) for (let ve = 0; ve < ye.length; ve++) se.set(ye[ve], [fe[ve] ?? fe[0]]);
      });
    };
    $((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, a), $((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, w), $((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, h), $((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, p), $((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, y), $((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, P), $((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, _), $((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, m), $((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, N), $((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, H);
    const le = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, f = (_w = n.solidResults) == null ? void 0 : _w.val, J = f && f !== "none" ? f : n.shellResults.val, de = le == null ? void 0 : le[J], W = { bendingXX: [a, 0], bendingYY: [w, 0], bendingXY: [h, 0], membraneXX: [p, 0], membraneYY: [y, 0], membraneXY: [P, 0], tranverseShearX: [_, 0], tranverseShearY: [m, 0], vonMises: [N, 0], pressure: [H, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, F = n.shellResults.val, R = wo.val, S = xo.val, g = F === "displacementX" || F === "displacementY" || F === "displacementZ", A = F === "bendingXX" || F === "bendingYY" || F === "bendingXY", Y = F === "membraneXX" || F === "membraneYY" || F === "membraneXY", X = F === "vonMises" || F === "pressure", T = F === "tranverseShearX" || F === "tranverseShearY", B = (_D = n.solidResults) == null ? void 0 : _D.val, D = B === "vonMises" || B === "sigmaXX" || B === "sigmaYY" || B === "sigmaZZ" || B === "tauXY" || B === "tauYZ" || B === "tauXZ", te = B === "ux" || B === "uy" || B === "uz", z = yo.val, Z = D ? go[z] : te || g ? rn[S] : A || Y || X || T ? 1 / vo[R] : 1, oe = D ? z : te || g ? S : A ? `${R}\xB7m/m` : Y ? `${R}/m\xB2` : X ? `${R}/m\xB2` : T ? `${R}/m` : "";
    Rt.val = oe, $t.val = Array.isArray(de) && de.length === 2 ? [de[0] * Z, de[1] * Z] : null;
    const ee = B && B !== "none" ? [N, 0] : W[F], re = [];
    e.nodes.val.forEach((pe, se) => {
      const fe = ee;
      if (!fe || !fe[0] || typeof fe[0].has != "function") return;
      if (!fe[0].has(se)) {
        re.push(Number.NaN);
        return;
      }
      const me = fe[0].get(se), ye = me ? me[fe[1]] ?? 0 : 0;
      re.push(ye * Z);
    }), u.val = re;
  }), u;
}
export {
  xo as a,
  io as b,
  wo as c,
  ln as d,
  yo as e,
  ko as g
};
