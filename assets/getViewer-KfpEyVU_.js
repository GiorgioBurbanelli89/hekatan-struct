import { X as Et, B as ae, Y as Xt, F as Ne, G as Se, d as mt, L as Ae, e as Ye, D as Ke, b as Ve, s as Te, Z as Mn, c as $n, V as w, x as rt, y as Ee, _ as Kt, k as Sn, a as Re, f as Me, h as Yt, $ as Lt, l as Rn, j as Bn, q as Vt, I as St, S as zt, a0 as cn, m as dn, o as pn, p as un, a1 as hn, a2 as Ft, a3 as Dn, a4 as Zn, a5 as Nn, a6 as Wn, a7 as Un, n as fn, a8 as mn, r as Kn, t as Gn, u as Hn, W as qn, v as wn, a9 as At, H as Gt, A as Qn, w as xn, O as Jn } from "./Text-BE8nxNWm.js";
import { v as L, P as On, g as ot, o as It } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function jn(e, s, m) {
  const d = document.createElement("div"), l = new On({ title: "Settings", expanded: true, container: d });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(l), d.setAttribute("id", "settings");
  const b = "hk_settingsPos";
  let x = null;
  try {
    const g = localStorage.getItem(b);
    g && (x = JSON.parse(g));
  } catch {
  }
  d.style.cssText = ["position:fixed", x ? `left:${x.left}px` : "left:8px", x ? `top:${x.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const p = () => {
    const g = d.querySelector(".tp-rotv_b");
    if (!g) {
      setTimeout(p, 200);
      return;
    }
    g.style.cursor = "move", g.style.userSelect = "none";
    let W = false, q = 0, D = 0, re = 0, y = 0;
    g.addEventListener("mousedown", (te) => {
      W = true, q = te.clientX, D = te.clientY;
      const ne = d.getBoundingClientRect();
      re = ne.left, y = ne.top, d.style.left = `${re}px`, d.style.top = `${y}px`;
    }), window.addEventListener("mousemove", (te) => {
      if (!W) return;
      const ne = te.clientX - q, ue = te.clientY - D, N = Math.max(0, Math.min(window.innerWidth - 40, re + ne)), V = Math.max(0, Math.min(window.innerHeight - 40, y + ue));
      d.style.left = `${N}px`, d.style.top = `${V}px`;
    }), window.addEventListener("mouseup", () => {
      if (W) {
        W = false;
        try {
          localStorage.setItem(b, JSON.stringify({ left: parseFloat(d.style.left), top: parseFloat(d.style.top) }));
        } catch {
        }
      }
    });
  };
  if (p(), s == null ? void 0 : s.nodes) {
    l.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 });
    const g = l.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    g.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), g.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), g.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), g.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), g.addBinding(e.gridVisible, "val", { label: "Mostrar" }), g.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), g.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), g.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), g.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), l.addBinding(e.nodes, "val", { label: "Nodes" }), l.addBinding(e.elements, "val", { label: "Elements" }), l.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), l.addBinding(e.faces, "val", { label: "  Caras (fill)" }), l.addBinding(e.elemColumns, "val", { label: "  Columnas" }), l.addBinding(e.elemBeams, "val", { label: "  Vigas" }), l.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), l.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), l.addBinding(e.orientations, "val", { label: "Orientations" }), l.addBinding(e.sections, "val", { label: "Sections" }), l.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), l.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), l.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((s == null ? void 0 : s.nodeInputs) || (s == null ? void 0 : s.elementInputs)) {
    const g = l.addFolder({ title: "Analysis Inputs" });
    g.addBinding(e.supports, "val", { label: "Supports" }), g.addBinding(e.loads, "val", { label: "Loads" }), g.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), g.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((s == null ? void 0 : s.deformOutputs) || (s == null ? void 0 : s.analyzeOutputs)) {
    const g = l.addFolder({ title: "Analysis Outputs" });
    g.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), g.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), g.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), g.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), g.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), g.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), g.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  m && l.addBinding(e.solids, "val", { label: "Solids" });
  const M = l.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), A = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), C = () => {
    const g = window.__hekatanClipApply;
    typeof g == "function" && g();
  };
  return M.addBinding(A, "enableX", { label: "Cortar X" }).on("change", C), M.addBinding(A, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", C), M.addBinding(A, "invertX", { label: "  invertir X" }).on("change", C), M.addBinding(A, "enableY", { label: "Cortar Y" }).on("change", C), M.addBinding(A, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", C), M.addBinding(A, "invertY", { label: "  invertir Y" }).on("change", C), M.addBinding(A, "enableZ", { label: "Cortar Z" }).on("change", C), M.addBinding(A, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", C), M.addBinding(A, "invertZ", { label: "  invertir Z" }).on("change", C), d;
}
function eo(e) {
  return { gridSize: L.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: L.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: L.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: L.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: L.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: L.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: L.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: L.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: L.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: L.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: L.state((e == null ? void 0 : e.nodes) ?? true), elements: L.state((e == null ? void 0 : e.elements) ?? true), edges: L.state((e == null ? void 0 : e.edges) ?? true), faces: L.state((e == null ? void 0 : e.faces) ?? true), elemColumns: L.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: L.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: L.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: L.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: L.state((e == null ? void 0 : e.orientations) ?? false), sections: L.state((e == null ? void 0 : e.sections) ?? true), secColumns: L.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: L.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: L.state((e == null ? void 0 : e.secFloor) ?? -1), supports: L.state((e == null ? void 0 : e.supports) ?? true), loads: L.state((e == null ? void 0 : e.loads) ?? false), deformedShape: L.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: L.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: L.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: L.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: L.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: L.state((e == null ? void 0 : e.flipAxes) ?? false), solids: L.state((e == null ? void 0 : e.solids) ?? true), custom3D: L.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: L.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: L.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: L.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function to(e, s, m) {
  const d = ot(), l = new Et(new ae(), new Xt({ color: d.nodePoint }));
  return It((b, x) => {
    l.material.color.setHex(x.nodePoint);
  }), l.frustumCulled = false, L.derive(() => {
    e.nodes.val && l.geometry.setAttribute("position", new Ne(s.val.flat(), 3));
  }), L.derive(() => {
    m.val;
    const b = 0.02 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (l.material.size = b * m.rawVal);
  }), L.derive(() => {
    l.visible = e.nodes.val;
  }), l;
}
function no(e, s, m) {
  const d = ot(), l = new Se(), b = new mt(new ae(), new Ae({ color: d.elementLine }));
  It((W, q) => {
    b.material.color.setHex(q.elementLine);
  }), b.frustumCulled = false, b.renderOrder = 2, l.add(b);
  const x = new Ye({ vertexColors: true, transparent: true, opacity: d.shellOpacity, side: Ke, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), p = new Ve(new ae(), x);
  p.frustumCulled = false, l.add(p);
  let M = new Te(d.shellWall), A = new Te(d.shellSlab), C = new Te(d.shellTri);
  It((W, q) => {
    M = new Te(q.shellWall), A = new Te(q.shellSlab), C = new Te(q.shellTri), x.opacity = q.shellOpacity, x.needsUpdate = true;
  });
  function g(W, q) {
    const D = Math.abs(q[0] - W[0]), re = Math.abs(q[1] - W[1]), y = Math.abs(q[2] - W[2]);
    return y > D && y > re || re > D && re > y;
  }
  return L.derive(() => {
    var _a;
    if (s.deformedShape.val, s.elemColumns.val, s.elemBeams.val, !s.elements.val) return;
    const W = s.elemColumns.rawVal, q = s.elemBeams.rawVal, D = m.val, re = ((_a = e.elements) == null ? void 0 : _a.val) || [], y = re.filter((N) => {
      if (N.length !== 2) return true;
      const V = D[N[0]], I = D[N[1]];
      if (!V || !I) return true;
      const P = g(V, I);
      return !(P && !W || !P && !q);
    }).map((N) => oo(N).map((V) => [...D[V[0]], ...D[V[1]]]).flat()).flat();
    b.geometry.setAttribute("position", new Ne(y, 3));
    const te = [], ne = [];
    function ue(N, V, I, P) {
      const _ = [V[0] - N[0], V[1] - N[1], V[2] - N[2]], T = [P[0] - N[0], P[1] - N[1], P[2] - N[2]], X = _[1] * T[2] - _[2] * T[1], E = _[2] * T[0] - _[0] * T[2], $ = _[0] * T[1] - _[1] * T[0], R = Math.sqrt(X * X + E * E + $ * $);
      return R < 1e-12 ? false : Math.abs($ / R) < 0.5;
    }
    for (const N of re) if (N.length === 3) {
      const [V, I, P] = N;
      if (D[V] && D[I] && D[P]) {
        te.push(...D[V], ...D[I], ...D[P]);
        for (let _ = 0; _ < 3; _++) ne.push(C.r, C.g, C.b);
      }
    } else if (N.length === 4) {
      const [V, I, P, _] = N;
      if (D[V] && D[I] && D[P] && D[_]) {
        const T = ue(D[V], D[I], D[P], D[_]) ? M : A;
        te.push(...D[V], ...D[I], ...D[P]), te.push(...D[V], ...D[P], ...D[_]);
        for (let X = 0; X < 6; X++) ne.push(T.r, T.g, T.b);
      }
    }
    te.length > 0 ? (p.geometry.dispose(), p.geometry = new ae(), p.geometry.setAttribute("position", new Ne(te, 3)), p.geometry.setAttribute("color", new Ne(ne, 3)), p.geometry.computeVertexNormals(), p.visible = s.faces ? s.faces.rawVal : true) : p.visible = false;
  }), L.derive(() => {
    l.visible = s.elements.val;
  }), L.derive(() => {
    s.edges && (b.visible = s.edges.val);
  }), L.derive(() => {
    if (!s.faces) return;
    const W = s.faces.val;
    p.geometry.attributes.position ? p.visible = W : W || (p.visible = false);
  }), l;
}
function oo(e) {
  if (e.length === 2) return [e];
  const s = [];
  for (let m = 0; m < e.length; m++) s.push([e[m], e[(m + 1) % e.length]]);
  return s;
}
function Ht(e, s) {
  const m = ot(), d = new Se();
  d.name = "hekatan-grid";
  const l = (s == null ? void 0 : s.planes) ?? ["xy"];
  let b = (s == null ? void 0 : s.majorStep) ?? 1, x = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (b <= 0 && (b = 1), x <= 0 && (x = 0.1); e / x > 500; ) x *= 2;
  for (; e / b > 100; ) b *= 2;
  const p = e / 2;
  b = Math.max(x, Math.round(b / x) * x);
  const A = new Te(m.grid), C = new Te(m.grid).multiplyScalar(0.45), g = (q, D, re, y) => {
    const te = [], ne = q === "xy" ? (P, _) => [P, _, 0] : q === "xz" ? (P, _) => [P, 0, _] : (P, _) => [0, P, _], ue = Math.floor(p / D);
    for (let P = -ue; P <= ue; P++) {
      const _ = P * D, T = ne(_, -p), X = ne(_, p);
      te.push(...T, ...X);
    }
    for (let P = -ue; P <= ue; P++) {
      const _ = P * D, T = ne(-p, _), X = ne(p, _);
      te.push(...T, ...X);
    }
    const N = new ae();
    N.setAttribute("position", new Ne(te, 3));
    const V = new Ae({ color: re, transparent: true, opacity: y, depthWrite: false }), I = new mt(N, V);
    return I.name = `grid-${q}-${D === x ? "minor" : "major"}`, I;
  }, W = (q, D, re) => {
    const y = q === "xy" ? (I, P) => [I, P, 0] : q === "xz" ? (I, P) => [I, 0, P] : (I, P) => [0, I, P], te = [[-p, -p], [p, -p], [p, p], [-p, p]], ne = [];
    for (const [I, P] of te) ne.push(...y(I, P));
    const ue = new ae();
    ue.setAttribute("position", new Ne(ne, 3));
    const N = new Ae({ color: D, transparent: true, opacity: re, depthWrite: false }), V = new Mn(ue, N);
    return V.name = `grid-${q}-border`, V.renderOrder = 1, V;
  };
  for (const q of l) d.add(g(q, x, C, 0.12)), d.add(g(q, b, A, 0.4)), d.add(W(q, A, 0.55));
  return d.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: b, minorStep: x, gridSize: e, planes: [...l] }, d;
}
function so(e, s, m, d) {
  const l = new Se(), b = new $n(0.5, 0.5, 0.5), x = new Ye({ color: 10166822 });
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    l.clear();
    const p = 0.05 * s.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((M, A) => {
      const C = m.val[A];
      if (!C) return;
      const g = new Ve(b, x);
      g.position.set(...C);
      const W = p * d.rawVal;
      g.scale.set(W, W, W), l.add(g);
    });
  }), L.derive(() => {
    if (d.val, !s.supports.rawVal) return;
    const M = 0.05 * s.gridSize.val * 0.6 * d.rawVal;
    l.children.forEach((A) => A.scale.set(M, M, M));
  }), L.derive(() => {
    l.visible = s.supports.val;
  }), l;
}
function ao(e, s, m, d) {
  const l = new Se();
  l.name = "loadsGroup";
  function b(x) {
    if (x.length < 2) return 0.12 * s.gridSize.rawVal;
    const p = [1 / 0, 1 / 0, 1 / 0], M = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of x) for (let g = 0; g < 3; g++) p[g] = Math.min(p[g], C[g]), M[g] = Math.max(M[g], C[g]);
    return 0.08 * Math.max(M[0] - p[0], M[1] - p[1], M[2] - p[2], 0.1);
  }
  return L.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    l.children.forEach((M) => M.dispose()), l.clear();
    const x = m.val, p = b(x);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((M, A) => {
      const C = x[A];
      if (!C) return;
      const g = new w(...M.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const W = new rt(g, new w(...C), 1, 15637248, 0.3, 0.3), q = p * d.rawVal;
      W.scale.set(q, q, q), l.add(W);
    });
  }), L.derive(() => {
    if (d.val, !s.loads.rawVal) return;
    const p = b(m.rawVal) * d.rawVal;
    l.children.forEach((M) => M.scale.set(p, p, p));
  }), L.derive(() => {
    l.visible = s.loads.val;
  }), l;
}
function io(e, s, m) {
  const d = new Se();
  return L.derive(() => {
    if (!e.nodesIndexes.val) return;
    d.children.forEach((b) => b.dispose()), d.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((b, x) => {
      const p = new Ee(`${x}`);
      p.position.set(...b), p.updateScale(l * m.rawVal), d.add(p);
    });
  }), L.derive(() => {
    if (m.val, !e.nodesIndexes.rawVal) return;
    const l = 0.05 * e.gridSize.val * 0.6;
    d.children.forEach((b) => b.updateScale(l * m.rawVal));
  }), L.derive(() => {
    d.visible = e.nodesIndexes.val;
  }), d;
}
function lo(e, s, m, d) {
  const l = new Se();
  return L.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    l.children.forEach((x) => x.dispose()), l.clear();
    const b = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((x, p) => {
      const M = new Ee(`${p}`, void 0, "#001219");
      M.position.set(...ro(x.map((A) => m.rawVal[A]))), M.updateScale(b * d.rawVal), l.add(M);
    });
  }), L.derive(() => {
    if (d.val, !s.elementsIndexes.rawVal) return;
    const b = 0.05 * s.gridSize.val * 0.6;
    l.children.forEach((x) => x.updateScale(b * d.rawVal));
  }), L.derive(() => {
    l.visible = s.elementsIndexes.val;
  }), l;
}
function ro(e) {
  const s = e.reduce((d, l) => [d[0] + l[0], d[1] + l[1], d[2] + l[2]], [0, 0, 0]), m = e.length;
  return [s[0] / m, s[1] / m, s[2] / m];
}
function yn(e, s) {
  const m = new Se(), d = 0.05 * e * 1, l = ot(), b = new Ee("X", "red", "transparent"), x = new Ee(s ? "Z" : "Y", "green", "transparent"), p = new Ee(s ? "Y" : "Z", "blue", "transparent"), M = new rt(new w(1, 0, 0), new w(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), A = new rt(new w(0, 1, 0), new w(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), C = new rt(new w(0, 0, 1), new w(0, 0, 0), 1, l.axisArrow, 0.2, 0.2);
  return b.position.set(1.3 * d, 0, 0), x.position.set(0, 1.3 * d, 0), p.position.set(0, 0, 1.3 * d), b.updateScale(0.4 * d), x.updateScale(0.4 * d), p.updateScale(0.4 * d), M.scale.set(d, d, d), A.scale.set(d, d, d), C.scale.set(d, d, d), m.add(M, A, C, b, x, p), m;
}
function jt(e, s) {
  const m = new w(...e), l = new w(...s).clone().sub(m), b = l.length(), x = l.dot(new w(1, 0, 0)) / b, p = l.dot(new w(0, 1, 0)) / b, M = l.dot(new w(0, 0, 1)) / b, A = Math.sqrt(x ** 2 + p ** 2);
  let C = new Kt().fromArray([[x, p, M], [-p / A, x / A, 0], [-x * M / A, -p * M / A, A]].flat());
  return M === 1 && (C = new Kt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), M === -1 && (C = new Kt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Sn().setFromMatrix3(C);
}
function Jt(e, s) {
  return e == null ? void 0 : e.map((m, d) => (9 * m + s[d]) / 10);
}
function kt(e) {
  const s = e.reduce((d, l) => [d[0] + l[0], d[1] + l[1], d[2] + l[2]], [0, 0, 0]), m = e.length;
  return [s[0] / m, s[1] / m, s[2] / m];
}
function co(e, s, m) {
  const d = kt([s, m]), l = kt([e, m]), b = kt([e, s]), x = new w(...d).sub(new w(...l)).normalize(), p = new w(...m).sub(new w(...b)).normalize(), M = x.clone().cross(p).normalize(), A = M.clone().cross(x).normalize();
  return new Sn().makeBasis(x, A, M);
}
function po(e, s, m, d) {
  const l = new Se(), b = new ae(), x = new Ae({ vertexColors: true }), p = [0, 0, 0], M = [1, 0, 0], A = [0, 1, 0], C = [0, 0, 1];
  b.setAttribute("position", new Ne([...p, ...M, ...p, ...A, ...p, ...C], 3));
  const g = [255, 0, 0], W = [0, 255, 0], q = [0, 0, 255];
  return b.setAttribute("color", new Ne([...g, ...g, ...W, ...W, ...q, ...q], 3)), L.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (l.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((D) => {
      const re = new mt(b, x), y = m.rawVal[D[0]], te = m.rawVal[D[1]];
      if (D.length === 2 && (re.position.set(...Jt(y, te)), re.rotation.setFromRotationMatrix(jt(y, te))), D.length === 3) {
        const N = m.rawVal[D[2]];
        re.position.set(...kt([y, te, N])), re.rotation.setFromRotationMatrix(co(y, te, N));
      }
      const ue = 0.05 * s.gridSize.rawVal * 0.75 * d.rawVal;
      re.scale.set(ue, ue, ue), l.add(re);
    }));
  }), L.derive(() => {
    if (d.val, !s.orientations.rawVal) return;
    const re = 0.05 * s.gridSize.val * 0.75 * d.rawVal;
    l.children.forEach((y) => y.scale.set(re, re, re));
  }), L.derive(() => {
    l.visible = s.orientations.val;
  }), l;
}
function uo(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), m = (e.h * 100).toFixed(0);
    return `${s}x${m}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function ho(e, s, m, d) {
  const l = new Se();
  function b(V, I) {
    const P = V / 2, _ = I / 2, T = new Float32Array([0, -P, -_, 0, P, -_, 0, P, _, 0, -P, -_, 0, P, _, 0, -P, _]), X = new ae();
    X.setAttribute("position", new Me(T, 3));
    const E = new Float32Array([0, -P, -_, 0, P, -_, 0, P, _, 0, -P, _, 0, -P, -_]), $ = new ae();
    return $.setAttribute("position", new Me(E, 3)), { fill: X, outline: $ };
  }
  function x(V, I = 24) {
    const P = V / 2, _ = new Float32Array(I * 9);
    for (let $ = 0; $ < I; $++) {
      const R = $ / I * Math.PI * 2, H = ($ + 1) / I * Math.PI * 2;
      _[$ * 9] = 0, _[$ * 9 + 1] = 0, _[$ * 9 + 2] = 0, _[$ * 9 + 3] = 0, _[$ * 9 + 4] = P * Math.cos(R), _[$ * 9 + 5] = P * Math.sin(R), _[$ * 9 + 6] = 0, _[$ * 9 + 7] = P * Math.cos(H), _[$ * 9 + 8] = P * Math.sin(H);
    }
    const T = new ae();
    T.setAttribute("position", new Me(_, 3));
    const X = new Float32Array((I + 1) * 3);
    for (let $ = 0; $ <= I; $++) {
      const R = $ / I * Math.PI * 2;
      X[$ * 3] = 0, X[$ * 3 + 1] = P * Math.cos(R), X[$ * 3 + 2] = P * Math.sin(R);
    }
    const E = new ae();
    return E.setAttribute("position", new Me(X, 3)), { fill: T, outline: E };
  }
  function p(V, I, P, _) {
    const T = P ?? I * 0.08, X = _ ?? V * 0.07, E = V / 2, $ = I / 2, R = $ - T, H = X / 2, Z = [];
    function F(se, ce, he, de) {
      Z.push(0, se, ce, 0, he, ce, 0, he, de, 0, se, ce, 0, he, de, 0, se, de);
    }
    F(-E, -$, E, -R), F(-H, -R, H, R), F(-E, R, E, $);
    const B = new ae();
    B.setAttribute("position", new Me(new Float32Array(Z), 3));
    const le = new Float32Array([0, -E, -$, 0, E, -$, 0, E, -R, 0, H, -R, 0, H, R, 0, E, R, 0, E, $, 0, -E, $, 0, -E, R, 0, -H, R, 0, -H, -R, 0, -E, -R, 0, -E, -$]), O = new ae();
    return O.setAttribute("position", new Me(le, 3)), { fill: B, outline: O };
  }
  function M(V, I, P) {
    const _ = V / 2, T = I / 2, X = _ - P, E = T - P, $ = [];
    function R(B, le, O, se) {
      $.push(0, B, le, 0, O, le, 0, O, se, 0, B, le, 0, O, se, 0, B, se);
    }
    R(-_, -T, _, -E), R(-_, E, _, T), R(-_, -E, -X, E), R(X, -E, _, E);
    const H = new ae();
    H.setAttribute("position", new Me(new Float32Array($), 3));
    const Z = new Float32Array([0, -_, -T, 0, _, -T, 0, _, -T, 0, _, T, 0, _, T, 0, -_, T, 0, -_, T, 0, -_, -T, 0, -X, -E, 0, X, -E, 0, X, -E, 0, X, E, 0, X, E, 0, -X, E, 0, -X, E, 0, -X, -E]), F = new ae();
    return F.setAttribute("position", new Me(Z, 3)), { fill: H, outline: F };
  }
  function A(V, I, P) {
    const _ = V / 2, T = I / 2, X = _ - P, E = T - P, $ = new ae(), R = new Float32Array([0, -X, -E, 0, X, -E, 0, X, E, 0, -X, -E, 0, X, E, 0, -X, E]);
    $.setAttribute("position", new Me(R, 3));
    const H = [];
    function Z(O, se, ce, he) {
      H.push(0, O, se, 0, ce, se, 0, ce, he, 0, O, se, 0, ce, he, 0, O, he);
    }
    Z(-_, -T, _, -E), Z(-_, E, _, T), Z(-_, -E, -X, E), Z(X, -E, _, E);
    const F = new ae();
    F.setAttribute("position", new Me(new Float32Array(H), 3));
    const B = new Float32Array([0, -_, -T, 0, _, -T, 0, _, -T, 0, _, T, 0, _, T, 0, -_, T, 0, -_, T, 0, -_, -T, 0, -X, -E, 0, X, -E, 0, X, -E, 0, X, E, 0, X, E, 0, -X, E, 0, -X, E, 0, -X, -E]), le = new ae();
    return le.setAttribute("position", new Me(B, 3)), { concFill: $, steelFillGeom: F, outline: le };
  }
  function C(V, I, P) {
    const _ = [], T = [[0, -V / 2, -I / 2], [0, -V / 2 + P, -I / 2], [0, -V / 2 + P, I / 2 - P], [0, V / 2, I / 2 - P], [0, V / 2, I / 2], [0, -V / 2, I / 2]], X = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const H of X) _.push(...T[H]);
    const E = new ae();
    E.setAttribute("position", new Me(new Float32Array(_), 3));
    const $ = [];
    for (let H = 0; H < T.length; H++) {
      const Z = (H + 1) % T.length;
      $.push(...T[H], ...T[Z]);
    }
    const R = new ae();
    return R.setAttribute("position", new Me(new Float32Array($), 3)), { fill: E, outline: R };
  }
  function g(V, I, P, _) {
    const T = _ / 2, X = [], E = [[0, -V - T, -I / 2], [0, -P - T, -I / 2], [0, -P - T, I / 2 - P], [0, -T, I / 2 - P], [0, -T, I / 2], [0, -V - T, I / 2]], $ = [[0, T, -I / 2], [0, T + P, -I / 2], [0, T + P, I / 2 - P], [0, V + T, I / 2 - P], [0, V + T, I / 2], [0, T, I / 2]], R = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const B of R) X.push(...E[B]);
    for (const B of R) X.push(...$[B]);
    const H = new ae();
    H.setAttribute("position", new Me(new Float32Array(X), 3));
    const Z = [];
    for (const B of [E, $]) for (let le = 0; le < B.length; le++) {
      const O = (le + 1) % B.length;
      Z.push(...B[le], ...B[O]);
    }
    const F = new ae();
    return F.setAttribute("position", new Me(new Float32Array(Z), 3)), { fill: H, outline: F };
  }
  function W(V, I, P, _) {
    const T = I / 2, X = V, E = [[0, -X, -T], [0, -X, -T + P], [0, -_, -T + P], [0, -_, T - P], [0, -X, T - P], [0, -X, T], [0, 0, T], [0, 0, -T]], $ = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], R = [];
    for (const B of $) R.push(...E[B]);
    const H = new ae();
    H.setAttribute("position", new Me(new Float32Array(R), 3));
    const Z = [];
    for (let B = 0; B < E.length; B++) {
      const le = (B + 1) % E.length;
      Z.push(...E[B], ...E[le]);
    }
    const F = new ae();
    return F.setAttribute("position", new Me(new Float32Array(Z), 3)), { fill: H, outline: F };
  }
  function q(V, I, P, _, T) {
    const X = I / 2, E = T / 2, $ = [], R = [[0, -V, -X], [0, -V, -X + P], [0, -E - _, -X + P], [0, -E - _, X - P], [0, -V, X - P], [0, -V, X], [0, -E, X], [0, -E, -X]], H = R.map((O) => [O[0], -O[1], O[2]]), Z = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const O of Z) $.push(...R[O]);
    for (const O of Z) $.push(...H[O]);
    const F = new ae();
    F.setAttribute("position", new Me(new Float32Array($), 3));
    const B = [];
    for (const O of [R, H]) for (let se = 0; se < O.length; se++) {
      const ce = (se + 1) % O.length;
      B.push(...O[se], ...O[ce]);
    }
    const le = new ae();
    return le.setAttribute("position", new Me(new Float32Array(B), 3)), { fill: F, outline: le };
  }
  function D(V, I, P, _) {
    const T = V / 2, X = I / 2, E = _ / 2, $ = [[0, -E, -X], [0, E, -X], [0, E, X - P], [0, T, X - P], [0, T, X], [0, -T, X], [0, -T, X - P], [0, -E, X - P]], R = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], H = [];
    for (const le of R) H.push(...$[le]);
    const Z = new ae();
    Z.setAttribute("position", new Me(new Float32Array(H), 3));
    const F = [];
    for (let le = 0; le < $.length; le++) {
      const O = (le + 1) % $.length;
      F.push(...$[le], ...$[O]);
    }
    const B = new ae();
    return B.setAttribute("position", new Me(new Float32Array(F), 3)), { fill: Z, outline: B };
  }
  function re(V, I, P = 24) {
    const _ = V / 2, T = _ - I, X = [];
    for (let H = 0; H < P; H++) {
      const Z = H / P * Math.PI * 2, F = (H + 1) / P * Math.PI * 2, B = Math.cos(Z), le = Math.sin(Z), O = Math.cos(F), se = Math.sin(F);
      X.push(0, _ * B, _ * le, 0, _ * O, _ * se, 0, T * O, T * se), X.push(0, _ * B, _ * le, 0, T * O, T * se, 0, T * B, T * le);
    }
    const E = new ae();
    E.setAttribute("position", new Me(new Float32Array(X), 3));
    const $ = [];
    for (let H = 0; H < P; H++) {
      const Z = H / P * Math.PI * 2, F = (H + 1) / P * Math.PI * 2;
      $.push(0, _ * Math.cos(Z), _ * Math.sin(Z), 0, _ * Math.cos(F), _ * Math.sin(F)), $.push(0, T * Math.cos(Z), T * Math.sin(Z), 0, T * Math.cos(F), T * Math.sin(F));
    }
    const R = new ae();
    return R.setAttribute("position", new Me(new Float32Array($), 3)), { fill: E, outline: R };
  }
  const y = new Ye({ color: 52479, transparent: true, opacity: 0.35, side: Ke, depthWrite: false }), te = new Ae({ color: 52479 }), ne = new Ye({ color: 16750848, transparent: true, opacity: 0.4, side: Ke, depthWrite: false }), ue = new Ae({ color: 16750848 });
  function N(V, I) {
    const P = Math.abs(I[0] - V[0]), _ = Math.abs(I[1] - V[1]), T = Math.abs(I[2] - V[2]);
    return T > P && T > _ || _ > P && _ > T;
  }
  return L.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const V = s.secColumns.rawVal, I = s.secBeams.rawVal;
    if (!V && !I) {
      l.children.forEach((E) => {
        E instanceof Ee && E.dispose();
      }), l.clear();
      return;
    }
    l.children.forEach((E) => {
      E instanceof Ee && E.dispose();
    }), l.clear();
    const P = (_a = e.elements) == null ? void 0 : _a.val, _ = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!P || !_) return;
    const T = _.sectionShapes, X = s.secFloor.rawVal;
    P.forEach((E, $) => {
      if (E.length !== 2) return;
      const R = m.rawVal[E[0]], H = m.rawVal[E[1]];
      if (!R || !H) return;
      const Z = N(R, H);
      if (Z && !V || !Z && !I) return;
      if (X >= 0) {
        const se = Math.min(R[1], H[1]);
        Math.max(R[1], H[1]);
        const ce = s.gridSize.rawVal || 3;
        if (Math.floor(se / ce + 0.01) !== X) return;
      }
      const F = T == null ? void 0 : T.get($);
      if (!F) return;
      const B = [(R[0] + H[0]) / 2, (R[1] + H[1]) / 2, (R[2] + H[2]) / 2], le = jt(R, H);
      if (F.type === "CFT") {
        const se = A(F.b, F.h, F.tw ?? F.b * 0.05), ce = new Ve(se.concFill, y);
        ce.position.set(...B), ce.rotation.setFromRotationMatrix(le), l.add(ce);
        const he = new Ve(se.steelFillGeom, ne);
        he.position.set(...B), he.rotation.setFromRotationMatrix(le), l.add(he);
        const de = new Re(se.outline, ue);
        de.position.set(...B), de.rotation.setFromRotationMatrix(le), l.add(de);
      } else {
        let se, ce, he;
        switch (F.type) {
          case "rect":
            se = b(F.b, F.h), ce = y, he = te;
            break;
          case "circ":
            se = x(F.d), ce = y, he = te;
            break;
          case "I":
            se = p(F.b, F.h, F.tf, F.tw), ce = ne, he = ue;
            break;
          case "HSS":
            se = M(F.b, F.h, F.tw ?? F.b * 0.05), ce = ne, he = ue;
            break;
          case "CFT":
            se = A(F.b, F.h, F.tw ?? F.b * 0.05), ce = ne, he = ue;
            break;
          case "L":
            se = C(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3), ce = ne, he = ue;
            break;
          case "2L":
            se = g(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3, F.dis ?? 0.01), ce = ne, he = ue;
            break;
          case "C":
          case "coldC":
            se = W(F.b, F.h, F.tf ?? F.t ?? 3e-3, F.tw ?? F.t ?? 3e-3), ce = ne, he = ue;
            break;
          case "2C":
            se = q(F.b, F.h, F.tf ?? 5e-3, F.tw ?? 5e-3, F.dis ?? 0.01), ce = ne, he = ue;
            break;
          case "T":
            se = D(F.b, F.h, F.tf ?? 0.01, F.tw ?? 6e-3), ce = ne, he = ue;
            break;
          case "pipe":
            se = re(F.d, F.tw ?? F.d * 0.05), ce = ne, he = ue;
            break;
          default:
            return;
        }
        const de = new Ve(se.fill, ce);
        de.position.set(...B), de.rotation.setFromRotationMatrix(le), l.add(de);
        const me = new Re(se.outline, he);
        me.position.set(...B), me.rotation.setFromRotationMatrix(le), l.add(me);
      }
      const O = uo(F);
      if (O) {
        const ce = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(F.type) ? "#ff9900" : "#00ccff", he = new Ee(O, ce, "transparent");
        he.position.set(B[0], B[1], B[2]);
        const de = 0.05 * s.gridSize.rawVal * 0.5;
        he.updateScale(de * ((d == null ? void 0 : d.rawVal) ?? 1)), l.add(he);
      }
    });
  }), d && L.derive(() => {
    if (d.val, !s.sections.rawVal) return;
    const V = 0.05 * s.gridSize.val * 0.5;
    l.children.forEach((I) => {
      I instanceof Ee && I.updateScale(V * d.rawVal);
    });
  }), L.derive(() => {
    l.visible = s.sections.val;
  }), l;
}
class Tt extends Se {
  constructor(s, m, d, l, b, x, p) {
    super();
    const M = new Yt().moveTo(0, 0).lineTo(0, x[1]).lineTo(d, x[1]).lineTo(d, 0).lineTo(0, 0), A = M.getPoints(), C = new ae().setFromPoints(A);
    this.lines = new Re(C, new Ae({ color: ot().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), p && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new Lt(M), W = new Ye({ color: x[1] > 0 ? 24435 : 11411474, side: Ke });
    this.mesh = new Ve(g, W), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), p && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Ee(`${b[1].toFixed(4)}`), this.normalizedResult = x, this.textPosition = kt([s, m]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(l), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class vn extends Se {
  constructor(s, m, d, l, b, x, p) {
    super();
    const M = b[0] * d / (b[0] + b[1]), A = b[0] * b[1] > 0;
    if (this.text = new Ee(`${b[0].toFixed(4)}`), this.text2 = new Ee(`${(b[1] * -1).toFixed(4)}`), this.normalizedResult = x, this.textPosition = Jt(s, m), this.text2Position = Jt(m, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(l), this.text2.rotation.setFromRotationMatrix(l), this.add(this.text, this.text2), A) {
      const C = new Yt().moveTo(0, 0).lineTo(0, x[0]).lineTo(M, 0).lineTo(0, 0), g = new Yt().moveTo(M, 0).lineTo(d, -x[1]).lineTo(d, 0).lineTo(M, 0), W = C.getPoints(), q = g.getPoints(), D = new ae().setFromPoints(W), re = new ae().setFromPoints(q), y = new Ae({ color: ot().resultOutline });
      this.lines = new Re(D, y), this.lines2 = new Re(re, y), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), this.lines2.rotation.setFromRotationMatrix(l), p && this.lines.rotateX(Math.PI / 2), p && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const te = new Lt(C), ne = new Lt(g), ue = new Ye({ color: x[0] > 0 ? 24435 : 11411474, side: Ke }), N = new Ye({ color: -x[1] > 0 ? 24435 : 11411474, side: Ke });
      this.mesh = new Ve(te, ue), this.mesh2 = new Ve(ne, N), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), this.mesh2.rotation.setFromRotationMatrix(l), p && this.mesh.rotateX(Math.PI / 2), p && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const C = new Yt().moveTo(0, 0).lineTo(0, x[0]).lineTo(d, -x[1]).lineTo(d, 0).lineTo(0, 0), g = C.getPoints(), W = new ae().setFromPoints(g);
      this.lines = new Re(W, new Ae({ color: ot().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), p && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const q = new Lt(C), D = new Ye({ color: x[0] > 0 ? 24435 : 11411474, side: Ke });
      this.mesh = new Ve(q, D), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), p && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var _n = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(_n || {});
function fo(e, s, m, d) {
  const l = new Se(), b = { normals: Tt, shearsY: Tt, shearsZ: Tt, torsions: Tt, bendingsY: vn, bendingsZ: vn };
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, m.val, s.frameResults.val == "none") return;
    l.children.forEach((p) => p.dispose()), l.clear();
    const x = _n[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[x]) == null ? void 0 : _b.forEach((p, M) => {
      var _a2, _b2;
      const A = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[M]) ?? [0, 1], C = m.rawVal[A[0]], g = m.rawVal[A[1]], W = new w(...g).distanceTo(new w(...C)), q = mo((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[x]), D = p == null ? void 0 : p.map((ne) => ne / (q === 0 ? 1 : q)), re = jt(C, g), y = new b[x](C, g, W, re, p ?? [0, 0], D ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(x)), te = 0.05 * s.gridSize.rawVal;
      y.updateScale(te * d.rawVal), l.add(y);
    });
  }), L.derive(() => {
    if (d.val, s.frameResults.rawVal == "none") return;
    const x = 0.05 * s.gridSize.val;
    l.children.forEach((p) => p.updateScale(x * d.rawVal));
  }), L.derive(() => {
    l.visible = s.frameResults.val != "none";
  }), l;
}
function mo(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((m) => {
    const d = Math.max(...m ?? [0, 0]);
    d > s && (s = d);
  }), s;
}
class wo extends Se {
  constructor(s, m, d) {
    super();
    const l = m === en.reactions;
    d[0] && (this.xText1 = new Ee(`${l ? "Fx" : "Dx"}: ` + d[0].toFixed(4))), d[3] && (this.xText2 = new Ee(`${l ? "Mx" : "Rx"}: ` + d[3].toFixed(4))), d[1] && (this.yText1 = new Ee(`${l ? "Fy" : "Dy"}: ` + d[1].toFixed(4))), d[4] && (this.yText2 = new Ee(`${l ? "My" : "Ry"}: ` + d[4].toFixed(4))), d[2] && (this.zText1 = new Ee(`${l ? "Fz" : "Dz"}: ` + d[2].toFixed(4))), d[5] && (this.zText2 = new Ee(`${l ? "Mz" : "Rz"}: ` + d[5].toFixed(4))), (d[0] || d[3]) && (this.xArrow = new rt(new w(1, 0, 0), new w(0, 0, 0), 1, 15637248, 0.3, 0.3)), (d[1] || d[4]) && (this.yArrow = new rt(new w(0, 1, 0), new w(0, 0, 0), 1, 15637248, 0.3, 0.3)), (d[2] || d[5]) && (this.zArrow = new rt(new w(0, 0, 1), new w(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(s) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(s, s, s), (_b = this.yArrow) == null ? void 0 : _b.scale.set(s, s, s), (_c = this.zArrow) == null ? void 0 : _c.scale.set(s, s, s), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * s, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * s, 0, 0.5 * s), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * s, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * s, 0.5 * s), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * s), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * s + 0.5 * s), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * s), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * s), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * s), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * s), (_n2 = this.zText1) == null ? void 0 : _n2.updateScale(0.4 * s), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * s);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var en = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(en || {});
function xo(e, s, m, d) {
  const l = new Se();
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    l.children.forEach((p) => p.dispose()), l.clear();
    const b = en[s.nodeResults.rawVal], x = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[b]) == null ? void 0 : _b.forEach((p, M) => {
      const A = new wo(m.rawVal[M], b, p ?? [0, 0, 0, 0, 0, 0]);
      A.updateScale(x * d.rawVal), l.add(A);
    });
  }), L.derive(() => {
    if (d.val, s.nodeResults.rawVal == "none") return;
    const b = 0.05 * s.gridSize.val;
    l.children.forEach((x) => x.updateScale(b * d.rawVal));
  }), L.derive(() => {
    l.visible = s.nodeResults.val != "none";
  }), l;
}
function yo({ drawingObj: e, gridObj: s, scene: m, getActiveCamera: d, controls: l, gridSize: b, derivedDisplayScale: x, rendererElm: p, viewerRender: M }) {
  const A = new Rn(), C = new Bn(), g = (n) => {
    const o = p.getBoundingClientRect(), r = n.clientX - o.left, t = n.clientY - o.top, u = o.width || 1, c = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const a = u / 2;
      if (r >= a) return C.x = (r - a) / a * 2 - 1, C.y = -(t / c) * 2 + 1, window.__hekatanSplitCamera ?? d();
      C.x = r / a * 2 - 1;
    } else C.x = r / u * 2 - 1;
    return C.y = -(t / c) * 2 + 1, d();
  }, W = new Ve(new Vt(1e4, 1e4), new Ye({ side: Ke, transparent: true, opacity: 0, depthWrite: false }));
  W.visible = true, W.frustumCulled = false, m.add(W);
  const q = (n, o, r) => {
    const t = new Ve(new Vt(1e4, 1e4), new Ye({ side: Ke, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, r), t.visible = false, t.frustumCulled = false, m.add(t), t;
  }, D = q(Math.PI / 2, 0, 0), re = q(0, Math.PI / 2, 0), y = () => {
    if (D.visible = !!window.__hekatanGridPlaneXZ, re.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && Y.visible) {
      const r = A.intersectObjects([Y, K, Q], false);
      if (r.length > 0) return r;
    }
    const o = [W];
    return D.visible && o.push(D), re.visible && o.push(re), Je.visible && ut.length > 0 && o.push(...ut), A.intersectObjects(o, false);
  }, te = new Et(new ae(), new Xt()), ne = new Et(new ae(), new Xt({ color: "gray", sizeAttenuation: false, size: 6 })), ue = new Et(new ae(), new Xt({ color: "orange", size: 0.1 }));
  m.add(ue);
  const N = document.createElement("input");
  N.id = "hk-rubber-label", N.type = "text", N.spellcheck = false, N.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, N.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(N);
  let V = null, I = null, P = false;
  const _ = new w(), T = (n, o, r, t, u, c) => {
    const S = t - n, a = u - o, i = c - r, f = Math.hypot(S, a, i);
    if (f < 0.01) {
      N.style.display = "none";
      return;
    }
    V = [n, o, r], I = [S / f, a / f, i / f], _.set((n + t) / 2, (o + u) / 2, (r + c) / 2), _.project(d());
    const k = p.getBoundingClientRect(), h = k.left + (_.x * 0.5 + 0.5) * k.width, v = k.top + (-_.y * 0.5 + 0.5) * k.height;
    if (N.style.left = h + "px", N.style.top = v + "px", N.style.display = "block", !P) {
      if (N.value = `${f.toFixed(2)} m`, document.activeElement !== N) {
        const z = document.activeElement;
        z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA") && z !== N || N.focus({ preventScroll: true });
      }
      try {
        N.select();
      } catch {
      }
    }
  }, X = () => {
    N.style.display = "none", V = null, I = null, P = false, document.activeElement === N && N.blur();
  }, E = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Xe = n, pe(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), N.blur();
      return;
    }
    if (!V || !I || !e.polylines) return;
    let r = I[0], t = I[1], u = I[2];
    we === "x" ? (r = Math.sign(r) || 1, t = 0, u = 0) : we === "y" ? (r = 0, t = Math.sign(t) || 1, u = 0) : we === "z" && (r = 0, t = 0, u = Math.sign(u) || 1);
    const c = V[0] + r * n, S = V[1] + t * n, a = V[2] + u * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [c, S, a]];
    const i = e.polylines.rawVal, f = i.length ? i[i.length - 1] : [];
    e.polylines.val = [...i.slice(0, -1), [...f, e.points.rawVal.length - 1]], N.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    M();
  }, $ = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const r = o.startsWith("@");
    if (r && (o = o.slice(1)), o.includes("<")) {
      const u = o.split("<").map((c) => parseFloat(c.trim()));
      if (u.some(isNaN)) return null;
      if (u.length === 2) {
        const [c, S] = u;
        return r ? { kind: "relPolar", L: c, ang: S } : { kind: "absPolar", L: c, ang: S };
      }
      if (u.length === 3 && r) {
        const [c, S, a] = u;
        return { kind: "relSpherical", L: c, az: S, el: a };
      }
      return null;
    }
    if (o.includes(",")) {
      const u = o.split(",").map((i) => parseFloat(i.trim()));
      if (u.some(isNaN)) return null;
      const [c, S, a = 0] = u;
      return r ? { kind: "relCart", dx: c, dy: S, dz: a } : { kind: "absCart", x: c, y: S, z: a };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, R = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return V ? [V[0] + n.dx, V[1] + n.dy, V[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!V) return null;
      const o = n.ang * Math.PI / 180;
      return [V[0] + n.L * Math.cos(o), V[1] + n.L * Math.sin(o), V[2]];
    }
    if (n.kind === "relSpherical") {
      if (!V) return null;
      const o = n.az * Math.PI / 180, r = n.el * Math.PI / 180, t = n.L * Math.cos(r);
      return [V[0] + t * Math.cos(o), V[1] + t * Math.sin(o), V[2] + n.L * Math.sin(r)];
    }
    return null;
  }, H = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, r = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...r, e.points.rawVal.length - 1]], N.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    M();
  };
  N.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const r = $(N.value);
      if (!r) return;
      if (P = false, r.kind === "length") E(r.L), pe(`\u270F DDE ${r.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = R(r);
        if (!t) return;
        H(t);
        const u = r.kind;
        pe(`\u270F ${u} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), P = false, N.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!P && N.style.display === "block") try {
          N.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (P = true);
  }), window.addEventListener("keydown", (n) => {
    if (!V || !I || document.activeElement === N) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (N.value = n.key, N.focus(), N.setSelectionRange(1, 1), n.preventDefault());
  });
  const Z = document.createElement("div");
  Z.id = "hk-coord-readout", Z.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", Z.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(Z);
  const F = new Re(new ae().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), new St({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  F.frustumCulled = false, F.visible = false, m.add(F);
  const B = new Se();
  B.frustumCulled = false, B.visible = false, m.add(B);
  const le = (n) => {
    const o = new ae().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), r = new St({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Re(o, r);
  }, O = le(16711680), se = le(65280), ce = le(35071);
  B.add(O, se, ce);
  const he = (n) => {
    const o = new ae().setFromPoints([new w(0, 0, 0), new w(0, 0, 0), new w(0, 0, 0), new w(0, 0, 0)]), r = new Ae({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new Mn(o, r);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, de = he(3462041), me = he(16724804), be = he(6333946), _e = new Se();
  _e.frustumCulled = false, _e.visible = false, m.add(_e), _e.add(de, me, be);
  const Le = (n) => {
    const o = new Vt(1, 1), r = new Ye({ color: n, transparent: true, opacity: 0.06, side: Ke, depthWrite: false }), t = new Ve(o, r);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Y = Le(3462041), K = Le(16724804), Q = Le(6333946);
  _e.add(Y, K, Q);
  const j = (n, o, r, t) => {
    n.scale.set(2 * t, 2 * t, 1), r === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : r === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, fe = document.createElement("div");
  fe.id = "hk-refplane-badge", fe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(fe), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, _e.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = r[r.length - 1] ?? [], u = e.points.rawVal ?? [], c = o && o.length === 3 ? o : t.length > 0 && u[t[t.length - 1]] ? u[t[t.length - 1]] : [0, 0, 0], S = window.__hekatanOrthoExt ?? 8;
      ve(de, c, "xy", S), ve(me, c, "xz", S), ve(be, c, "yz", S), j(Y, c, "xy", S), j(K, c, "xz", S), j(Q, c, "yz", S), Y.material.opacity = 0.1, K.material.opacity = 0.1, Q.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    M();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !_e.visible) {
      M();
      return;
    }
    const o = window.__hekatanOrthoAnchor, r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = r[r.length - 1] ?? [], u = e.points.rawVal ?? [], c = o && o.length === 3 ? o : t.length > 0 && u[t[t.length - 1]] ? u[t[t.length - 1]] : [0, 0, 0];
    ve(de, c, "xy", n), ve(me, c, "xz", n), ve(be, c, "yz", n), j(Y, c, "xy", n), j(K, c, "xz", n), j(Q, c, "yz", n), M();
  };
  const ye = (n) => {
    if (Y.material.opacity = n === "xy" ? 0.22 : 0.04, K.material.opacity = n === "xz" ? 0.22 : 0.04, Q.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const u = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      fe.style.background = u.bg, fe.style.color = u.text, fe.textContent = `\u25A6 Plano ${n.toUpperCase()}`, fe.style.display = "block";
    } else fe.style.display = "none";
  }, ve = (n, o, r, t) => {
    let u;
    r === "xy" ? u = [new w(o[0] - t, o[1] - t, o[2]), new w(o[0] + t, o[1] - t, o[2]), new w(o[0] + t, o[1] + t, o[2]), new w(o[0] - t, o[1] + t, o[2]), new w(o[0] - t, o[1] - t, o[2])] : r === "xz" ? u = [new w(o[0] - t, o[1], o[2] - t), new w(o[0] + t, o[1], o[2] - t), new w(o[0] + t, o[1], o[2] + t), new w(o[0] - t, o[1], o[2] + t), new w(o[0] - t, o[1], o[2] - t)] : u = [new w(o[0], o[1] - t, o[2] - t), new w(o[0], o[1] + t, o[2] - t), new w(o[0], o[1] + t, o[2] + t), new w(o[0], o[1] - t, o[2] + t), new w(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(u);
  };
  let we = null;
  window.__hekatanAxisLock = () => we;
  const ge = document.createElement("div");
  ge.id = "hk-axis-lock-badge", ge.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(ge);
  const st = () => {
    if (!we) {
      ge.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    ge.style.background = "rgba(15,23,42,0.92)", ge.style.color = n[we], ge.style.border = `1.5px solid ${n[we]}`, ge.textContent = `\u{1F512} LOCK ${we.toUpperCase()}`, ge.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== N) return;
    const r = n.key.toLowerCase();
    if (r === "x" || r === "y" || r === "z") we = we === r ? null : r, st(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), ln(), n.preventDefault();
    } else if (n.key === "F8") {
      n.preventDefault(), window.__hekatanOrthoMode = !window.__hekatanOrthoMode;
      const t = window.__hekatanOrthoMode;
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
      let u = document.getElementById("hk-ortho-frame");
      u || (u = document.createElement("div"), u.id = "hk-ortho-frame", u.style.cssText = ["position:fixed", "inset:0", "z-index:99996", "border:3px solid rgba(34,211,238,0.85)", "box-shadow:inset 0 0 24px rgba(34,211,238,0.35)", "pointer-events:none"].join(";") + ";", document.body.appendChild(u)), u.style.display = t ? "block" : "none";
      let c = document.getElementById("hk-ortho-badge");
      c || (c = document.createElement("div"), c.id = "hk-ortho-badge", c.style.cssText = ["position:fixed", "top:10px", "left:50%", "transform:translateX(-50%)", "z-index:99998", "padding:6px 16px", "background:rgba(34,211,238,0.95)", "color:#0a1f24", "border-radius:6px", "border:2px solid rgba(8,145,178,1)", "box-shadow:0 4px 16px rgba(34,211,238,0.5)", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "pointer-events:none", "white-space:nowrap"].join(";") + ";", c.textContent = "\u22A5 ORTO ON (F8)", document.body.appendChild(c)), c.style.display = t ? "block" : "none";
    }
  });
  const ct = new w(), dt = new w(), wt = new w(), Cn = (n) => {
    if (!we) return null;
    const o = n[0], r = n[1], t = n[2];
    return we === "x" ? (ct.set(o - 1e4, r, t), dt.set(o + 1e4, r, t)) : we === "y" ? (ct.set(o, r - 1e4, t), dt.set(o, r + 1e4, t)) : (ct.set(o, r, t - 1e4), dt.set(o, r, t + 1e4)), A.ray.distanceSqToSegment(ct, dt, null, wt), wt;
  };
  window.__hekatanProjectOnAxis = Cn;
  const Be = new Re(new ae().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), new Ae({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Be.renderOrder = 998, Be.frustumCulled = false, Be.visible = false, m.add(Be);
  let je = -1, pt = -1, et = -1;
  const Ie = /* @__PURE__ */ new Set();
  window.__hekatanSelection = Ie;
  const Qe = new Re(new ae().setFromPoints([new w(), new w()]), new Ae({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Qe.renderOrder = 997, Qe.frustumCulled = false, Qe.visible = false, m.add(Qe);
  const We = new Ve(new zt(0.02, 12, 12), new Ye({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  We.renderOrder = 998, We.visible = false, m.add(We);
  const Pn = () => {
    if (!We.visible) return;
    const o = d().position.distanceTo(We.position), r = Math.max(0.05, o / 10);
    We.scale.setScalar(r);
  }, tt = new Se();
  tt.frustumCulled = false, m.add(tt);
  const Ct = 2282478;
  let nt = null;
  const Vn = (n, o, r, t) => {
    if (!e.points) return -1;
    const u = e.points.rawVal;
    let c = -1, S = t;
    for (let a = 0; a < u.length; a++) {
      const i = u[a];
      if (!i) continue;
      const f = Math.hypot(n - i[0], o - i[1], r - i[2]);
      f < S && (S = f, c = a);
    }
    return c;
  }, xt = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; tt.children.length; ) {
      const u = tt.children.pop();
      (_b = (_a = u.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = u.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const u of Ie) {
      const [c, ...S] = u.split(":");
      if (c === "pt") {
        const a = n[+S[0]];
        if (!a) continue;
        const i = new Ve(new zt(0.07, 12, 12), new Ye({ color: Ct, transparent: true, opacity: 0.9, depthTest: false }));
        i.position.set(a[0], a[1], a[2]), i.renderOrder = 999, tt.add(i);
      } else if (c === "seg") {
        const a = o[+S[0]], i = n[a == null ? void 0 : a[+S[1]]], f = n[a == null ? void 0 : a[+S[1] + 1]];
        if (!i || !f) continue;
        const k = new ae().setFromPoints([new w(i[0], i[1], i[2]), new w(f[0], f[1], f[2])]), h = new Re(k, new Ae({ color: Ct, transparent: true, opacity: 0.95, depthTest: false }));
        h.renderOrder = 999, tt.add(h);
      } else if (c === "poly") {
        const i = o[+S[0]].map((h) => {
          const v = n[h];
          return v ? new w(v[0], v[1], v[2]) : null;
        }).filter(Boolean);
        if (i.length < 2) continue;
        const f = new ae().setFromPoints(i), k = new Re(f, new Ae({ color: Ct, transparent: true, opacity: 0.95, depthTest: false }));
        k.renderOrder = 999, tt.add(k);
      } else if (c === "aux") {
        const a = t[+S[0]];
        if (!a || a.length !== 6) continue;
        const i = new ae().setFromPoints([new w(a[0], a[1], a[2]), new w(a[3], a[4], a[5])]), f = new Re(i, new Ae({ color: Ct, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, tt.add(f);
      }
    }
    M();
  };
  window.__hekatanRefreshSelection = xt, window.__hekatanClearSelection = () => {
    Ie.clear(), xt();
  };
  const $t = (n, o, r, t, u, c, S, a, i) => {
    const f = S - t, k = a - u, h = i - c, v = f * f + k * k + h * h;
    if (v < 1e-12) return Math.hypot(n - t, o - u, r - c);
    let z = ((n - t) * f + (o - u) * k + (r - c) * h) / v;
    z = Math.max(0, Math.min(1, z));
    const U = t + z * f, oe = u + z * k, J = c + z * h;
    return Math.hypot(n - U, o - oe, r - J);
  }, Rt = (n, o, r, t) => {
    if (!e.polylines) return null;
    const u = e.polylines.rawVal, c = e.points.rawVal;
    let S = -1, a = -1, i = t;
    for (let f = 0; f < u.length; f++) {
      const k = u[f];
      for (let h = 0; h < k.length - 1; h++) {
        const v = c[k[h]], z = c[k[h + 1]];
        if (!v || !z) continue;
        const U = $t(n, o, r, v[0], v[1], v[2], z[0], z[1], z[2]);
        U < i && (i = U, S = f, a = h);
      }
    }
    return S >= 0 ? { polyIdx: S, segIdx: a, dist: i } : null;
  }, nn = (n, o, r, t) => {
    const u = window.__hekatanDrawingAuxLines, c = (u == null ? void 0 : u.rawVal) ?? (u == null ? void 0 : u.val) ?? u ?? [];
    let S = -1, a = t;
    for (let i = 0; i < c.length; i++) {
      const f = c[i];
      if (!f || f.length !== 6) continue;
      const k = $t(n, o, r, f[0], f[1], f[2], f[3], f[4], f[5]);
      k < a && (a = k, S = i);
    }
    return S;
  }, zn = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      Be.visible = false;
      return;
    }
    Be.geometry.setFromPoints([new w(t[0], t[1], t[2]), new w(t[3], t[4], t[5])]), Be.visible = true;
  }, Fn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const r = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!r || r.length < 2) {
      Be.visible = false;
      return;
    }
    const u = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, c = [];
    if (u || o < 0 || o >= r.length - 1) for (const S of r) {
      const a = t[S];
      a && c.push(new w(a[0], a[1], a[2]));
    }
    else {
      const S = t[r[o]], a = t[r[o + 1]];
      S && c.push(new w(S[0], S[1], S[2])), a && c.push(new w(a[0], a[1], a[2]));
    }
    Be.geometry.setFromPoints(c), Be.visible = true;
  }, Pt = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const r = o.filter((i, f) => f !== n), t = /* @__PURE__ */ new Set();
    for (const i of r) for (const f of i) t.add(f);
    const u = e.points.rawVal, c = /* @__PURE__ */ new Map(), S = [];
    for (let i = 0; i < u.length; i++) t.has(i) && (c.set(i, S.length), S.push(u[i]));
    const a = r.map((i) => i.map((f) => c.get(f)).filter((f) => f !== void 0));
    e.points.val = S, e.polylines.val = a, e.areas && (e.areas.val = e.areas.rawVal.filter((i) => i !== n).map((i) => i > n ? i - 1 : i)), Be.visible = false, je = -1, pt = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, An = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const r = e.polylines.rawVal;
    if (n < 0 || n >= r.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      Pt(n);
      return;
    }
    const u = r[n];
    if (o < 0 || o >= u.length - 1) return;
    if (u.length === 2) {
      Pt(n);
      return;
    }
    let c;
    o === 0 ? c = [u.slice(1)] : o === u.length - 2 ? c = [u.slice(0, -1)] : c = [u.slice(0, o + 1), u.slice(o + 1)];
    const S = [...r.slice(0, n), ...c, ...r.slice(n + 1)], a = /* @__PURE__ */ new Set();
    for (const v of S) for (const z of v) a.add(z);
    const i = e.points.rawVal, f = /* @__PURE__ */ new Map(), k = [];
    for (let v = 0; v < i.length; v++) a.has(v) && (f.set(v, k.length), k.push(i[v]));
    const h = S.map((v) => v.map((z) => f.get(z)).filter((z) => z !== void 0));
    if (e.points.val = k, e.polylines.val = h, e.areas) {
      const v = c.length - 1;
      e.areas.val = e.areas.rawVal.map((z) => z > n ? z + v : z);
    }
    Be.visible = false, je = -1, pt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  te.geometry.setAttribute("position", new Ne(e.points.rawVal.flat(), 3)), te.geometry.computeBoundingSphere(), te.frustumCulled = false, ne.frustumCulled = false, m.add(ne), W.position.set(0, 0, 0), W.rotateX(Math.PI / 2), W.geometry.rotateX(Math.PI / 2), W.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, r) => {
    if (e.points.val = [...e.points.rawVal, [n, o, r]], e.polylines) {
      const t = e.polylines.rawVal, u = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...u, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const n = e.polylines.rawVal;
    ((_a = n[n.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...n, []]);
  }, window.__hekatanDrawCircle = (n, o, r, t, u = window.__hekatanArcSegs ?? 12, c = "xy") => {
    var _a;
    const S = Math.max(4, Math.round(u)), a = e.points.rawVal.length, i = [];
    for (let f = 0; f < S; f++) {
      const k = 2 * Math.PI * f / S, h = t * Math.cos(k), v = t * Math.sin(k);
      let z;
      c === "xy" ? z = [n + h, o + v, r] : c === "xz" ? z = [n + h, o, r + v] : z = [n, o + h, r + v], i.push(z);
    }
    if (e.points.val = [...e.points.rawVal, ...i], e.polylines) {
      const f = [...i.map((h, v) => a + v), a], k = e.polylines.rawVal;
      ((_a = k[k.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...k, f, []] : e.polylines.val = [...k.slice(0, -1), f, []];
    }
  }, window.__hekatanDrawArc = (n, o, r, t = window.__hekatanArcSegs ?? 12) => {
    const u = Math.max(4, Math.round(t)), c = new w(...n), S = new w(...o), a = new w(...r), i = new w().subVectors(S, c), f = new w().subVectors(a, c), k = new w().crossVectors(i, f).normalize(), h = new w().addVectors(c, S).multiplyScalar(0.5), v = new w().addVectors(S, a).multiplyScalar(0.5), z = new w().crossVectors(i, k).normalize(), U = new w().crossVectors(new w().subVectors(a, S), k).normalize(), oe = new w().subVectors(v, h), J = z.x * U.y - z.y * U.x;
    let G;
    if (Math.abs(J) > 1e-9) {
      const Pe = (oe.x * U.y - oe.y * U.x) / J;
      G = new w().addVectors(h, z.clone().multiplyScalar(Pe));
    } else G = h.clone();
    const ee = c.distanceTo(G), ie = new w().subVectors(c, G), ke = new w().subVectors(a, G), Ce = Math.acos(Math.max(-1, Math.min(1, ie.dot(ke) / (ee * ee)))), $e = e.points.rawVal.length, Fe = [], He = k.clone();
    for (let Pe = 0; Pe <= u; Pe++) {
      const Ue = Pe / u, qe = Ce * Ue, ft = new cn().setFromAxisAngle(He, qe), lt = ie.clone().applyQuaternion(ft).add(G);
      Fe.push([lt.x, lt.y, lt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Fe], e.polylines) {
      const Pe = Fe.map((qe, ft) => $e + ft), Ue = e.polylines.rawVal;
      e.polylines.val = [...Ue.slice(0, -1), Pe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, r = 1, t = 6, u = 6) => {
    const c = Math.min(n[0], o[0]), S = Math.max(n[0], o[0]), a = Math.min(n[1], o[1]), i = Math.max(n[1], o[1]), f = (n[2] + o[2]) / 2, k = S - c, h = i - a, v = Math.min(r, k / 2 - 0.01, h / 2 - 0.01);
    if (v <= 0) return;
    const z = e.points.rawVal.length, U = [], oe = [], J = (G, ee) => {
      U.push([G, ee, f]), oe.push(z + U.length - 1);
    };
    for (let G = 0; G <= u; G++) J(c + v + (k - 2 * v) * G / u, a);
    for (let G = 1; G <= t; G++) {
      const ee = -Math.PI / 2 + Math.PI / 2 * G / t;
      J(S - v + v * Math.cos(ee), a + v + v * Math.sin(ee));
    }
    for (let G = 1; G <= u; G++) J(S, a + v + (h - 2 * v) * G / u);
    for (let G = 1; G <= t; G++) {
      const ee = 0 + Math.PI / 2 * G / t;
      J(S - v + v * Math.cos(ee), i - v + v * Math.sin(ee));
    }
    for (let G = 1; G <= u; G++) J(S - v - (k - 2 * v) * G / u, i);
    for (let G = 1; G <= t; G++) {
      const ee = Math.PI / 2 + Math.PI / 2 * G / t;
      J(c + v + v * Math.cos(ee), i - v + v * Math.sin(ee));
    }
    for (let G = 1; G <= u; G++) J(c, i - v - (h - 2 * v) * G / u);
    for (let G = 1; G <= t; G++) {
      const ee = Math.PI + Math.PI / 2 * G / t;
      J(c + v + v * Math.cos(ee), a + v + v * Math.sin(ee));
    }
    if (oe.push(z), e.points.val = [...e.points.rawVal, ...U], e.polylines) {
      const G = e.polylines.rawVal;
      e.polylines.val = [...G.slice(0, -1), oe, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const r = e.points.rawVal.length, t = n[0], u = n[1], c = n[2], S = o[0], a = o[1], i = o[2];
    let f;
    if (Math.abs(c - i) < 1e-6 ? f = [[t, u, c], [S, u, c], [S, a, c], [t, a, c]] : Math.abs(u - a) < 1e-6 ? f = [[t, u, c], [S, u, c], [S, u, i], [t, u, i]] : f = [[t, u, c], [t, a, c], [t, a, i], [t, u, i]], e.points.val = [...e.points.rawVal, ...f], e.polylines) {
      const k = [r, r + 1, r + 2, r + 3, r], h = e.polylines.rawVal;
      e.polylines.val = [...h.slice(0, -1), k, []];
    }
  };
  const Ge = new Se();
  Ge.visible = false, m.add(Ge), window.__hekatanShowAxes = (n, o, r = 12, t = 2) => {
    var _a, _b;
    for (; Ge.children.length; ) {
      const k = Ge.children.pop();
      (_a = k.geometry) == null ? void 0 : _a.dispose(), (_b = k.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const u = Math.min(...o) - t, c = Math.max(...o) + t, S = Math.min(...n) - t, a = Math.max(...n) + t, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", f = (k, h, v, z, U) => {
      const oe = document.createElement("canvas");
      oe.width = 64, oe.height = 32;
      const J = oe.getContext("2d");
      J.fillStyle = U, J.font = "bold 22px sans-serif", J.textAlign = "center", J.fillText(k, 32, 26);
      const G = new dn(oe), ee = new pn({ map: G, transparent: true }), ie = new un(ee);
      return ie.position.set(h, v, z), ie.scale.set(1.2, 0.6, 1), ie;
    };
    n.forEach((k, h) => {
      const v = h < i.length ? i[h] : `X${h}`, z = new ae().setFromPoints([new w(k, u, 0), new w(k, c, 0), new w(k, u, 0), new w(k, u, r)]), U = new St({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), oe = new mt(z, U);
      oe.computeLineDistances(), Ge.add(oe), Ge.add(f(v, k, u - 0.5, 0, "#60a5fa")), Ge.add(f(v, k, c + 0.5, 0, "#60a5fa"));
    }), o.forEach((k, h) => {
      const v = `${h + 1}`, z = new ae().setFromPoints([new w(S, k, 0), new w(a, k, 0), new w(S, k, 0), new w(S, k, r)]), U = new St({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), oe = new mt(z, U);
      oe.computeLineDistances(), Ge.add(oe), Ge.add(f(v, S - 0.5, k, 0, "#fb7185")), Ge.add(f(v, a + 0.5, k, 0, "#fb7185"));
    }), Ge.visible = true, M();
  }, window.__hekatanHideAxes = () => {
    Ge.visible = false, M();
  };
  const Je = new Se();
  Je.visible = false, m.add(Je);
  let ut = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, r = 0, t = 0) => {
    var _a, _b;
    for (; Je.children.length; ) {
      const c = Je.children.pop();
      (_a = c.geometry) == null ? void 0 : _a.dispose(), (_b = c.material) == null ? void 0 : _b.dispose();
    }
    ut.forEach((c) => {
      m.remove(c), c.geometry.dispose(), c.material.dispose();
    }), ut = [];
    const u = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((c, S) => {
      const a = u[S % u.length], i = o / 2, f = [new w(r - i, t - i, c), new w(r + i, t - i, c), new w(r + i, t + i, c), new w(r - i, t + i, c), new w(r - i, t - i, c)], k = new ae().setFromPoints(f), h = new Ae({ color: a, transparent: true, opacity: 0.55 });
      Je.add(new Re(k, h));
      const v = document.createElement("canvas");
      v.width = 128, v.height = 32;
      const z = v.getContext("2d");
      z.fillStyle = `#${a.toString(16).padStart(6, "0")}`, z.font = "bold 18px sans-serif", z.fillText(`Z = ${c} m`, 4, 22);
      const U = new dn(v), oe = new pn({ map: U, transparent: true }), J = new un(oe);
      J.position.set(r - i - 1.5, t - i - 1.5, c), J.scale.set(2.5, 0.6, 1), Je.add(J);
      const G = new Vt(1e4, 1e4), ee = new Ye({ visible: false, side: Ke }), ie = new Ve(G, ee);
      ie.position.set(0, 0, c), ie.frustumCulled = false, ie.userData = { refPlaneZ: c }, m.add(ie), ut.push(ie);
    }), Je.visible = true, M();
  }, window.__hekatanHideRefPlanes = () => {
    Je.visible = false, ut.forEach((n) => {
      n.visible = false;
    }), M();
  };
  const yt = new Se();
  yt.frustumCulled = false, m.add(yt);
  const Tn = () => {
    var _a, _b, _c, _d;
    for (; yt.children.length; ) {
      const r = yt.children.pop();
      (_b = (_a = r.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = r.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const r of o) {
      if (r.length !== 6) continue;
      const t = new ae().setFromPoints([new w(r[0], r[1], r[2]), new w(r[3], r[4], r[5])]), u = new St({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), c = new Re(t, u);
      c.computeLineDistances(), yt.add(c);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Tn(), M());
  });
  const ze = new Se(), En = new Ve(new zt(0.02, 12, 12), new Ye({ color: 16724804, transparent: true, opacity: 0.95 })), Xn = new Ve(new zt(0.04, 12, 12), new Ye({ color: 16498468, transparent: true, opacity: 0.25, depthWrite: false }));
  ze.add(En, Xn);
  const ht = 0.15, Bt = (n, o, r) => {
    const t = new ae().setFromPoints([new w(...n), new w(...o)]);
    return new Re(t, new Ae({ color: r, transparent: true, opacity: 0.7 }));
  };
  ze.add(Bt([-ht, 0, 0], [ht, 0, 0], 16711680)), ze.add(Bt([0, -ht, 0], [0, ht, 0], 65280)), ze.add(Bt([0, 0, -ht], [0, 0, ht], 35071)), ze.visible = false, ze.frustumCulled = false, m.add(ze);
  const on = 10, Dt = () => {
    if (!ze.visible) return;
    const o = d().position.distanceTo(ze.position), r = Math.max(0.05, o / on);
    ze.scale.setScalar(r);
  };
  l.addEventListener("change", () => {
    if (Dt(), We.visible) {
      const o = d().position.distanceTo(We.position);
      We.scale.setScalar(Math.max(0.05, o / 10));
    }
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = d().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / on));
    }
  }), window.__hekatanShowSnap = (n, o, r) => {
    ze.position.set(n, o, r), ze.visible = true, Dt(), M();
  }, window.__hekatanHideSnap = () => {
    ze.visible = false, M();
  }, p.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(C, o);
    const r = y();
    if (r.length) {
      const t = r[0].point, u = (window.__hekatanSnap2D ?? 0.5) * 1.2, c = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, u);
      if (c) sn(c.type, c.x, c.y, c.z), ze.position.set(c.x, c.y, c.z), ze.visible = true, t.set(c.x, c.y, c.z);
      else {
        Nt();
        const k = window.__hekatanSnapEnabled !== false, h = window.__hekatanSnap2D ?? 0.5;
        k && h > 0 && (t.x = Math.round(t.x / h) * h, t.y = Math.round(t.y / h) * h, t.z = Math.round(t.z / h) * h), ze.position.copy(t), ze.visible = true;
      }
      Dt();
      const S = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (S === "select" || !S) {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, h = Vn(t.x, t.y, t.z, k), v = Rt(t.x, t.y, t.z, k), z = nn(t.x, t.y, t.z, k);
        if (h >= 0) {
          const U = e.points.rawVal[h];
          We.position.set(U[0], U[1], U[2]), We.visible = true, Pn(), Qe.visible = false, nt = { kind: "pt", a: h };
        } else if (v) {
          const U = e.points.rawVal, oe = e.polylines.rawVal[v.polyIdx], J = U[oe[v.segIdx]], G = U[oe[v.segIdx + 1]];
          Qe.geometry.setFromPoints([new w(J[0], J[1], J[2]), new w(G[0], G[1], G[2])]), Qe.visible = true, We.visible = false, nt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(v.polyIdx)) ?? false ? { kind: "poly", a: v.polyIdx } : { kind: "seg", a: v.polyIdx, b: v.segIdx };
        } else if (z >= 0) {
          const oe = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[z];
          oe && (Qe.geometry.setFromPoints([new w(oe[0], oe[1], oe[2]), new w(oe[3], oe[4], oe[5])]), Qe.visible = true, We.visible = false, nt = { kind: "aux", a: z });
        } else Qe.visible = false, We.visible = false, nt = null;
        if (Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block", nt) {
          const U = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          Z.textContent = `\u{1F5B1} Click para seleccionar ${U[nt.kind]}`;
        } else Z.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        F.visible = false, B.visible = false, M();
        return;
      }
      if (S === "delete") {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, h = Rt(t.x, t.y, t.z, k), v = nn(t.x, t.y, t.z, k);
        let z = false;
        if (v >= 0) if (!h) z = true;
        else {
          const U = window.__hekatanDrawingAuxLines, J = ((U == null ? void 0 : U.rawVal) ?? (U == null ? void 0 : U.val) ?? U ?? [])[v];
          $t(t.x, t.y, t.z, J[0], J[1], J[2], J[3], J[4], J[5]) < h.dist && (z = true);
        }
        if (z ? (et = v, je = -1, pt = -1, zn(v)) : h ? (je = h.polyIdx, pt = h.segIdx, et = -1, Fn(h.polyIdx, h.segIdx)) : (je = -1, pt = -1, et = -1, Be.visible = false), F.visible = false, B.visible = false, X(), Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block", z) Z.textContent = `\u{1F5D1} Click para borrar l\xEDnea auxiliar #${et + 1}`;
        else if (h) {
          const U = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(h.polyIdx)) ?? false;
          Z.textContent = U ? `\u{1F5D1} Click para borrar \xE1rea #${h.polyIdx + 1} completa` : `\u{1F5D1} Click para borrar segmento ${h.segIdx + 1} de polil\xEDnea #${h.polyIdx + 1}`;
        } else Z.textContent = "\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para resaltarla";
        M();
        return;
      } else Be.visible = false, je = -1, et = -1;
      Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block";
      const a = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], i = a[a.length - 1] ?? [], f = e.points.rawVal ?? [];
      if (i.length > 0 && f[i[i.length - 1]]) {
        const k = i[i.length - 1], h = f[k], v = !!window.__hekatanOrthoMode;
        let z = we;
        if (!z && v) {
          const Fe = Math.abs(t.x - h[0]), He = Math.abs(t.y - h[1]), Pe = Math.abs(t.z - h[2]), Ue = (_k = r[0]) == null ? void 0 : _k.object;
          let qe = null;
          Ue === Y ? qe = "xy" : Ue === K ? qe = "xz" : Ue === Q && (qe = "yz"), qe === "xy" ? z = Fe >= He ? "x" : "y" : qe === "xz" ? z = Fe >= Pe ? "x" : "z" : qe === "yz" ? z = He >= Pe ? "y" : "z" : z = Fe >= He && Fe >= Pe ? "x" : He >= Pe ? "y" : "z";
        }
        if (z) {
          const Fe = h[0], He = h[1], Pe = h[2];
          z === "x" ? t.set(t.x, He, Pe) : z === "y" ? t.set(Fe, t.y, Pe) : t.set(Fe, He, t.z);
          const Ue = !!we, ft = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[z];
          ge.style.background = "rgba(15,23,42,0.92)", ge.style.color = ft, ge.style.border = `1.5px solid ${ft}`;
          const lt = (_l = r[0]) == null ? void 0 : _l.object;
          let Mt = null;
          lt === Y ? Mt = "xy" : lt === K ? Mt = "xz" : lt === Q && (Mt = "yz");
          const rn = Mt ? ` (plano ${Mt.toUpperCase()})` : "";
          ge.textContent = Ue ? `\u{1F512} LOCK ${z.toUpperCase()}${rn}` : `\u22A5 ORTO ${z.toUpperCase()}${rn}`, ge.style.left = n.clientX + 20 + "px", ge.style.top = n.clientY + 18 + "px", ge.style.transform = "none", ge.style.display = "block";
        } else we || (ge.style.display = "none");
        const U = Math.hypot(t.x - h[0], t.y - h[1], t.z - h[2]), oe = Math.atan2(t.y - h[1], t.x - h[0]) * 180 / Math.PI;
        Z.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)} | \u0394L=${U.toFixed(2)}m ${oe.toFixed(0)}\xB0`, F.geometry.setFromPoints([new w(h[0], h[1], h[2]), new w(t.x, t.y, t.z)]), (_m = F.computeLineDistances) == null ? void 0 : _m.call(F), F.visible = true, T(h[0], h[1], h[2], t.x, t.y, t.z);
        const J = window.__hekatanOrthoExt ?? 8, G = window.__hekatanShowOrthoPlanes !== false;
        _e.visible = G, G || ye(null), G && (ve(de, h, "xy", J), ve(me, h, "xz", J), ve(be, h, "yz", J), j(Y, h, "xy", J), j(K, h, "xz", J), j(Q, h, "yz", J));
        const ee = G ? A.intersectObjects([Y, K, Q], false) : [];
        let ie = null;
        if (ee.length > 0) {
          const Fe = ee[0].object;
          Fe === Y ? ie = "xy" : Fe === K ? ie = "xz" : Fe === Q && (ie = "yz");
        }
        ye(ie), ie && (fe.style.left = n.clientX + "px", fe.style.top = n.clientY + "px"), O.geometry.setFromPoints([new w(h[0] - J, h[1], h[2]), new w(h[0] + J, h[1], h[2])]), (_n2 = O.computeLineDistances) == null ? void 0 : _n2.call(O), se.geometry.setFromPoints([new w(h[0], h[1] - J, h[2]), new w(h[0], h[1] + J, h[2])]), (_o2 = se.computeLineDistances) == null ? void 0 : _o2.call(se), ce.geometry.setFromPoints([new w(h[0], h[1], h[2] - J), new w(h[0], h[1], h[2] + J)]), (_p = ce.computeLineDistances) == null ? void 0 : _p.call(ce), B.visible = true;
        const ke = O.material, Ce = se.material, $e = ce.material;
        z === "x" ? (ke.opacity = 0.95, Ce.opacity = 0.1, $e.opacity = 0.1) : z === "y" ? (ke.opacity = 0.1, Ce.opacity = 0.95, $e.opacity = 0.1) : z === "z" ? (ke.opacity = 0.1, Ce.opacity = 0.1, $e.opacity = 0.95) : (ke.opacity = 0.5, Ce.opacity = 0.5, $e.opacity = 0.5);
      } else Z.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`, F.visible = false, B.visible = false, X();
      M();
    } else Nt(), Z.style.display = "none", ze.visible = false, F.visible = false, B.visible = false, X(), M();
  }), L.derive(() => {
    e.gridTarget && (vo(s, { position: new w(...e.gridTarget.val.position), quaternion: new cn().setFromEuler(new hn(...e.gridTarget.val.rotation)) }, M), W.position.set(...e.gridTarget.val.position), W.quaternion.setFromEuler(new hn(...e.gridTarget.val.rotation)), W.updateMatrixWorld());
  }), L.derive(() => {
    te.geometry.setAttribute("position", new Ne(e.points.val.flat(), 3)), te.geometry.computeBoundingSphere();
  }), L.derive(() => {
    const n = 0.05 * b * 0.5 * x.val;
    A.params.Points.threshold = 0.4 * n;
  }), L.derive(() => {
    var _a;
    const n = e.points.val ?? [], r = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const c of r) {
      const [S, a, i] = n[c];
      t.push(S, a, i);
    }
    const u = new ae();
    u.setAttribute("position", new Ne(t, 3)), ue.geometry.dispose(), ue.geometry = u;
  });
  let Zt = false, at = 0;
  p.addEventListener("pointerdown", () => {
    Zt = true;
  }), p.addEventListener("pointerup", () => {
    Zt = false;
  }), p.addEventListener("pointermove", () => {
    Zt && at++;
  });
  const De = document.createElement("div");
  De.id = "hk-window-select", De.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(De);
  let Ze = null, vt = false;
  p.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && (Ze = { x: n.clientX, y: n.clientY }, vt = false);
  }), p.addEventListener("pointermove", (n) => {
    if (!Ze) return;
    const o = n.clientX - Ze.x, r = n.clientY - Ze.y, t = Math.hypot(o, r);
    if (!vt && t < 8) return;
    vt = true;
    const u = Math.min(Ze.x, n.clientX), c = Math.min(Ze.y, n.clientY), S = Math.abs(o), a = Math.abs(r);
    n.clientX < Ze.x ? (De.style.borderColor = "#34d399", De.style.borderStyle = "dashed", De.style.background = "rgba(52, 211, 153, 0.10)") : (De.style.borderColor = "#22d3ee", De.style.borderStyle = "solid", De.style.background = "rgba(34, 211, 238, 0.10)"), De.style.left = u + "px", De.style.top = c + "px", De.style.width = S + "px", De.style.height = a + "px", De.style.display = "block";
  }), p.addEventListener("pointerup", (n) => {
    var _a, _b, _c, _d;
    if (!Ze) return;
    if (!vt) {
      Ze = null;
      return;
    }
    const o = Math.min(Ze.x, n.clientX), r = Math.max(Ze.x, n.clientX), t = Math.min(Ze.y, n.clientY), u = Math.max(Ze.y, n.clientY), c = n.clientX < Ze.x, S = p.getBoundingClientRect(), a = d();
    a.updateMatrixWorld();
    const i = (ee) => {
      const ie = new w(ee[0], ee[1], ee[2]);
      return ie.project(a), { x: S.left + (ie.x * 0.5 + 0.5) * S.width, y: S.top + (-ie.y * 0.5 + 0.5) * S.height };
    }, f = (ee) => ee.x >= o && ee.x <= r && ee.y >= t && ee.y <= u, k = (ee, ie) => !(ee.x < o && ie.x < o || ee.x > r && ie.x > r || ee.y < t && ie.y < t || ee.y > u && ie.y > u), h = n.ctrlKey || n.metaKey || n.shiftKey;
    h || Ie.clear();
    let v = 0;
    const z = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ee = 0; ee < z.length; ee++) {
      const ie = z[ee];
      ie && f(i(ie)) && (Ie.add(`pt:${ee}`), v++);
    }
    const U = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], oe = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ee = 0; ee < U.length; ee++) {
      const ie = U[ee], ke = oe.includes(ee);
      let Ce = false;
      for (let $e = 0; $e < ie.length - 1; $e++) {
        const Fe = z[ie[$e]], He = z[ie[$e + 1]];
        if (!Fe || !He) continue;
        const Pe = i(Fe), Ue = i(He);
        if (c ? f(Pe) || f(Ue) || k(Pe, Ue) : f(Pe) && f(Ue)) {
          if (ke) {
            Ce = true;
            break;
          }
          Ie.add(`seg:${ee}:${$e}`), v++;
        }
      }
      ke && Ce && (Ie.add(`poly:${ee}`), v++);
    }
    const G = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ee = 0; ee < G.length; ee++) {
      const ie = G[ee];
      if (!ie || ie.length !== 6) continue;
      const ke = i([ie[0], ie[1], ie[2]]), Ce = i([ie[3], ie[4], ie[5]]);
      (c ? f(ke) || f(Ce) || k(ke, Ce) : f(ke) && f(Ce)) && (Ie.add(`aux:${ee}`), v++);
    }
    xt(), pe(`${c ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${v} item(s) ${h ? "agregados a" : "\u2192"} selecci\xF3n (total ${Ie.size})`), De.style.display = "none", Ze = null, vt = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Oe = new Se();
  Oe.visible = false, Oe.frustumCulled = false, m.add(Oe);
  const Yn = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, sn = (n, o, r, t) => {
    var _a, _b, _c, _d;
    for (; Oe.children.length; ) {
      const a = Oe.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const u = Yn[n] ?? 16777215, c = 0.05, S = new ae().setFromPoints([new w(o - c, r - c, t), new w(o + c, r - c, t), new w(o + c, r - c, t), new w(o + c, r + c, t), new w(o + c, r + c, t), new w(o - c, r + c, t), new w(o - c, r + c, t), new w(o - c, r - c, t)]);
    Oe.add(new mt(S, new Ae({ color: u, linewidth: 2 }))), Oe.position.set(0, 0, 0), Oe.visible = true;
  }, Nt = () => {
    Oe.visible = false;
  }, Ln = (n, o, r, t) => {
    var _a;
    const u = window.__hekatanOsnap, c = e.points.rawVal, S = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let a = null;
    const i = (h, v, z, U) => {
      const oe = Math.hypot(v - n, z - o, U - r);
      oe > t || (!a || oe < a.d) && (a = { type: h, x: v, y: z, z: U, d: oe });
    };
    (u.node || u.end) && c.forEach((h) => {
      u.node && i("node", h[0], h[1], h[2]);
    });
    for (const h of S) if (!(h.length < 2)) for (let v = 0; v < h.length - 1; v++) {
      const z = c[h[v]], U = c[h[v + 1]];
      if (!(!z || !U) && (u.end && (i("end", z[0], z[1], z[2]), i("end", U[0], U[1], U[2])), u.mid && i("mid", (z[0] + U[0]) / 2, (z[1] + U[1]) / 2, (z[2] + U[2]) / 2), u.nea || u.per)) {
        const oe = U[0] - z[0], J = U[1] - z[1], G = U[2] - z[2], ee = oe * oe + J * J + G * G;
        if (ee < 1e-12) continue;
        const ie = Math.max(0, Math.min(1, ((n - z[0]) * oe + (o - z[1]) * J + (r - z[2]) * G) / ee)), ke = z[0] + ie * oe, Ce = z[1] + ie * J, $e = z[2] + ie * G;
        u.nea && i("nea", ke, Ce, $e), u.per && i("per", ke, Ce, $e);
      }
    }
    const f = window.__hekatanDrawingAuxLines, k = (f == null ? void 0 : f.rawVal) ?? (f == null ? void 0 : f.val) ?? f ?? [];
    for (const h of k) {
      if (h.length !== 6) continue;
      const v = [h[0], h[1], h[2]], z = [h[3], h[4], h[5]];
      if (u.end && (i("end", v[0], v[1], v[2]), i("end", z[0], z[1], z[2])), u.mid && i("mid", (v[0] + z[0]) / 2, (v[1] + z[1]) / 2, (v[2] + z[2]) / 2), u.nea || u.per) {
        const U = z[0] - v[0], oe = z[1] - v[1], J = z[2] - v[2], G = U * U + oe * oe + J * J;
        if (G < 1e-12) continue;
        const ee = Math.max(0, Math.min(1, ((n - v[0]) * U + (o - v[1]) * oe + (r - v[2]) * J) / G)), ie = v[0] + ee * U, ke = v[1] + ee * oe, Ce = v[2] + ee * J;
        u.nea && i("nea", ie, ke, Ce), u.per && i("per", ie, ke, Ce);
      }
    }
    return a ? { type: a.type, x: a.x, y: a.y, z: a.z } : null;
  };
  window.__hekatanOsnapCompute = Ln, window.__hekatanOsnapShow = sn, window.__hekatanOsnapHide = Nt;
  let xe = [], Xe = 0;
  const gt = document.createElement("div");
  gt.id = "hk-cad-status", gt.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", gt.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(gt);
  const In = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), we && n.push(`\u{1F512} LOCK ${we.toUpperCase()}`);
    const r = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(r) > 1e-3 && n.push(`Cota Z=${r}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, pe = (n) => {
    const o = n + In();
    gt.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    pe(o);
  }, window.__hekatanCadResetPending = () => {
    xe = [], pe("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const bt = [], it = () => {
    var _a, _b;
    bt.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), bt.length > 100 && bt.shift();
  }, an = () => {
    var _a;
    const n = bt.pop();
    if (!n) {
      pe("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), xe = [], F.visible = false, B.visible = false, X(), pe(`\u21B6 Undo \u2014 ${bt.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    M();
  };
  window.__hekatanPushUndo = it, window.__hekatanUndo = an, window.addEventListener("keydown", (n) => {
    (n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey && (n.preventDefault(), an());
  });
  const ln = () => {
    if (xe = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    we = null, st(), F.visible = false, B.visible = false, X(), pe("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), M();
  };
  window.__hekatanFinalizeDraw = ln, p.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x;
    if (at > 5) {
      at = 0;
      return;
    }
    at = 0;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(C, o);
    const r = y();
    if (!r.length) return;
    let t = r[0].point;
    (n.ctrlKey || n.metaKey) && (t = new w(Math.round(r[0].point.x), Math.round(r[0].point.y), Math.round(r[0].point.z)));
    {
      const a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = a[a.length - 1] ?? [], f = e.points.rawVal ?? [];
      if (i.length > 0) {
        const k = f[i[i.length - 1]];
        if (k) {
          const h = !!window.__hekatanOrthoMode;
          let v = we;
          if (!v && h) {
            const z = Math.abs(t.x - k[0]), U = Math.abs(t.y - k[1]), oe = Math.abs(t.z - k[2]);
            v = z >= U && z >= oe ? "x" : U >= oe ? "y" : "z";
          }
          v === "x" ? t = new w(t.x, k[1], k[2]) : v === "y" ? t = new w(k[0], t.y, k[2]) : v === "z" && (t = new w(k[0], k[1], t.z));
        }
      }
    }
    const u = (window.__hekatanSnap2D ?? 0.5) * 1.2, c = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, u);
    if (c) t = new w(c.x, c.y, c.z), pe(`\u{1F3AF} Snap [${c.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const a = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0;
      a && i > 0 && (t = new w(Math.round(t.x / i) * i, Math.round(t.y / i) * i, Math.round(t.z / i) * i));
    }
    const S = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (S === "select" || S === "none" || !S) {
      if (nt) {
        const { kind: a, a: i, b: f } = nt, k = f !== void 0 ? `${a}:${i}:${f}` : `${a}:${i}`;
        n.ctrlKey || n.metaKey || n.shiftKey || Ie.clear(), Ie.has(k) ? Ie.delete(k) : Ie.add(k), xt(), pe(`\u2713 Seleccionados ${Ie.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else !n.ctrlKey && !n.metaKey && !n.shiftKey && Ie.size > 0 && (Ie.clear(), xt(), pe("Selecci\xF3n limpiada"));
      return;
    }
    if (S === "axis") {
      const a = window.__hekatanAxisDraw;
      if (!a) return;
      if (!a.pendingStart) {
        a.pendingStart = [t.x, t.y, t.z], pe(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const i = a.mode === "number", f = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, a.pendingStart, [t.x, t.y, t.z], i);
      pe(`\u2713 Eje "${f}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (S === "delete") {
      if (et >= 0) {
        const a = window.__hekatanDrawingAuxLines, i = (a == null ? void 0 : a.rawVal) ?? (a == null ? void 0 : a.val) ?? a ?? [], f = et;
        if (f >= 0 && f < i.length) {
          it();
          const k = i.slice(0, f).concat(i.slice(f + 1));
          a && typeof a == "object" && "val" in a ? a.val = k : window.__hekatanDrawingAuxLines = k, pe(`\u{1F5D1} L\xEDnea auxiliar #${f + 1} borrada`), et = -1, Be.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (je >= 0) {
        const a = je, i = pt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(a)) ?? false ? (Pt(a), pe(`\u{1F5D1} \xC1rea #${a + 1} (shell Q4) borrada`)) : i >= 0 ? (An(a, i), pe(`\u{1F5D1} Segmento ${i + 1} de polil\xEDnea #${a + 1} borrado`)) : (Pt(a), pe(`\u{1F5D1} Polil\xEDnea #${a + 1} borrada`));
      } else pe("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (S === "circle") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        pe("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [a, i] = xe, f = Math.hypot(i[0] - a[0], i[1] - a[1], i[2] - a[2]);
      Math.abs(i[0] - a[0]);
      const k = Math.abs(i[1] - a[1]), v = Math.abs(i[2] - a[2]) < 1e-3 ? "xy" : k < 1e-3 ? "xz" : "yz", z = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, a[0], a[1], a[2], f, z, v), pe(`\u2713 C\xEDrculo dibujado en ${v.toUpperCase()} \u2014 r=${f.toFixed(2)}m, ${z} segmentos`), xe = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (S === "arc") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        pe("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (xe.length === 2) {
        pe("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [a, i, f] = xe, k = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, a, i, f, k), pe(`\u2713 Arco dibujado \u2014 ${k} segmentos`), xe = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (S === "rect") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        pe("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [a, i] = xe;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, a, i), pe(`\u2713 Rect\xE1ngulo dibujado \u2014 (${a[0].toFixed(1)},${a[1].toFixed(1)}) \u2192 (${i[0].toFixed(1)},${i[1].toFixed(1)})`), xe = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (S === "col") {
      it();
      const a = t.z, i = Xe && Xe > 0 ? Xe : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, a], [t.x, t.y, a + i]];
      const f = e.polylines.rawVal, k = e.points.rawVal.length;
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [k - 2, k - 1], []], Xe = 0, pe(`\u258C Columna creada \u2014 h=${i.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (S === "wall") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        pe("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [a, i] = xe, f = Xe && Xe > 0 ? Xe : 3;
      it();
      const k = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [a[0], a[1], a[2]], [i[0], i[1], i[2]], [i[0], i[1], i[2] + f], [a[0], a[1], a[2] + f]];
      const h = e.polylines.rawVal;
      if (h.length - 1, e.polylines.val = [...h.slice(0, -1), ...h[h.length - 1].length > 0 ? [h[h.length - 1]] : [], [k, k + 1, k + 2, k + 3, k], []], e.areas) {
        const v = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, v];
      }
      pe(`\u25A5 Pared Q4 creada \u2014 h=${f.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), xe = [], Xe = 0;
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (S === "extp") {
      it();
      const a = Xe && Xe > 0 ? Xe : 3, i = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + a]];
      const f = e.polylines.rawVal, k = e.points.rawVal.length;
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [k - 2, k - 1], []], Xe = 0, pe(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${a.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (S === "extl") {
      const a = (window.__hekatanSnap2D ?? 0.5) * 1.5, i = Rt(t.x, t.y, t.z, a);
      if (!i) {
        pe("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const f = e.polylines.rawVal, k = e.points.rawVal, h = f[i.polyIdx], v = k[h[i.segIdx]], z = k[h[i.segIdx + 1]];
      if (!v || !z) {
        pe("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const U = Xe && Xe > 0 ? Xe : 3;
      it();
      const oe = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [v[0], v[1], v[2]], [z[0], z[1], z[2]], [z[0], z[1], z[2] + U], [v[0], v[1], v[2] + U]];
      const J = e.polylines.rawVal;
      if (e.polylines.val = [...J.slice(0, -1), ...J[J.length - 1].length > 0 ? [J[J.length - 1]] : [], [oe, oe + 1, oe + 2, oe + 3, oe], []], e.areas) {
        const G = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, G];
      }
      Xe = 0, pe(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${U.toFixed(2)}m`);
      try {
        (_s = window.__hekatanRebuild) == null ? void 0 : _s.call(window);
      } catch {
      }
      return;
    }
    if (S === "aux") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        pe("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [a, i] = xe, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const U = f.rawVal ?? f.val ?? [];
        f.val = [...U, [a[0], a[1], a[2], i[0], i[1], i[2]]];
      }
      const k = i[0] - a[0], h = i[1] - a[1], v = i[2] - a[2], z = Math.sqrt(k * k + h * h + v * v);
      pe(`\u2713 L\xEDnea auxiliar creada \u2014 L=${z.toFixed(2)}m (cyan, no FEM)`), xe = [];
      return;
    }
    if (S === "extend") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        pe("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [a, i] = xe, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const k = f.rawVal ?? f.val ?? [];
        f.val = [...k, [a[0], a[1], a[2], i[0], i[1], i[2]]];
      }
      pe("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), xe = [];
      return;
    }
    if (S === "chaflan") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        pe("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [a, i] = xe, f = window.__hekatanChaflanR ?? 1, k = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t2 = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t2.call(window, a, i, f, k, 6);
      const h = Math.abs(i[0] - a[0]).toFixed(1), v = Math.abs(i[1] - a[1]).toFixed(1);
      pe(`\u2713 Losa con chaflanes dibujada \u2014 ${h}\xD7${v}m, r=${f}m, ${k} seg/chafl\xE1n`), xe = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (P = false, it(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const a = e.polylines.rawVal, i = a.length - 1, f = a[i] ?? [];
      if (S === "line" && f.length === 2) {
        e.polylines.val = [...a, []], pe("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (S === "area" && f.length === 4) {
        e.polylines.val = [...a.slice(0, -1), [...f, f[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, i]), pe("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (S === "node") pe(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (S === "line") pe("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (S === "polyline") pe("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (S === "area") {
      const a = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      pe(`\u25A6 \xC1rea \u2014 click ${a.length}/4. Marc\xE1 ${4 - a.length} v\xE9rtice${4 - a.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), p.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), p.addEventListener("pointermove", (n) => {
    var _a;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(C, o);
    const r = y();
    if (ne.geometry.deleteAttribute("position"), r.length) {
      let t = r[0].point.clone();
      const u = (window.__hekatanSnap2D ?? 0.5) * 1.2, c = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, u);
      if (c) t.set(c.x, c.y, c.z);
      else {
        const S = window.__hekatanSnapEnabled !== false, a = window.__hekatanSnap2D ?? 0.5;
        S && a > 0 && (t.x = Math.round(t.x / a) * a, t.y = Math.round(t.y / a) * a, t.z = Math.round(t.z / a) * a);
      }
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z)), ne.geometry.setAttribute("position", new Ne(t.toArray(), 3));
    }
    M();
  }), p.addEventListener("pointermove", (n) => {
    var _a;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(C, o);
    let r = false;
    const t = A.intersectObject(te), u = y();
    if (t.length && u.length) {
      const c = new w(...e.points.rawVal[t[0].index]), S = new w(...u[0].point), a = c.sub(S), i = (_a = u[0].face) == null ? void 0 : _a.normal;
      i.transformDirection(W.matrixWorld), Math.abs(a.dot(i)) < 1e-4 && (r = true);
    }
    ne.visible = !r;
  });
  let Wt = false, Ut;
  p.addEventListener("pointermove", (n) => {
    var _a;
    if (!at) return;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(C, o);
    let r = false;
    const t = A.intersectObject(te), u = y();
    if (t.length && u.length) {
      const S = new w(...e.points.rawVal[t[0].index]), a = new w(...u[0].point), i = S.sub(a), f = (_a = u[0].face) == null ? void 0 : _a.normal;
      f.transformDirection(W.matrixWorld), Math.abs(i.dot(f)) < 1e-4 && (r = true);
    }
    if (r && at < 5 && (Wt = true, l.enabled = false, Ut = t[0].index), !Wt || at % 2 !== 0) return;
    const c = [...e.points.rawVal];
    if (Ut !== void 0) {
      let S = u[0].point;
      (n.ctrlKey || n.metaKey) && (S = new w(Math.round(S.x), Math.round(S.y), Math.round(S.z))), c[Ut] = S.toArray();
    }
    e.points.val = c;
  }), p.addEventListener("pointerup", () => {
    l.enabled = true, Wt = false;
  }), p.addEventListener("contextmenu", (n) => {
    var _a;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(C, o);
    let r = false;
    const t = A.intersectObject(te), u = y();
    if (t.length && u.length) {
      const a = new w(...e.points.rawVal[t[0].index]), i = new w(...u[0].point), f = a.sub(i), k = (_a = u[0].face) == null ? void 0 : _a.normal;
      k.transformDirection(W.matrixWorld), Math.abs(f.dot(k)) < 1e-4 && (r = true);
    }
    if (!r) return;
    const c = [...e.points.rawVal];
    if (c.splice(t[0].index, 1), e.points.val = c, !e.polylines) return;
    const S = e.polylines.rawVal.map((a) => a.filter((i) => i !== t[0].index)).map((a) => a.map((i) => i > t[0].index ? i - 1 : i)).filter((a) => a.length);
    S.push([]), e.polylines.val = S;
  });
}
function vo(e, s, m) {
  const b = Math.round(14.999999999999998), x = { position: e.position.clone(), quaternion: e.quaternion.clone() }, p = setInterval(A, 1e3 / 30);
  let M = 0;
  function A() {
    M++;
    const C = M / b;
    e.position.lerpVectors(x.position, s.position, C), e.quaternion.slerpQuaternions(x.quaternion, s.quaternion, C), m && m(), M == b && clearInterval(p);
  }
}
class kn {
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
    this.map = qt[s] || qt.rainbow, this.n = m;
    const d = 1 / this.n, l = new Te(), b = new Te();
    this.lut.length = 0, this.lut.push(new Te(this.map[0][1]));
    for (let x = 1; x < m; x++) {
      const p = x * d;
      for (let M = 0; M < this.map.length - 1; M++) if (p > this.map[M][0] && p <= this.map[M + 1][0]) {
        const A = this.map[M][0], C = this.map[M + 1][0];
        l.setHex(this.map[M][1], Ft), b.setHex(this.map[M + 1][1], Ft);
        const g = new Te().lerpColors(l, b, (p - A) / (C - A));
        this.lut.push(g);
      }
    }
    return this.lut.push(new Te(this.map[this.map.length - 1][1])), this;
  }
  copy(s) {
    return this.lut = s.lut, this.map = s.map, this.n = s.n, this.minV = s.minV, this.maxV = s.maxV, this;
  }
  getColor(s) {
    s = Dn.clamp(s, this.minV, this.maxV), s = (s - this.minV) / (this.maxV - this.minV);
    const m = Math.round(s * this.n);
    return this.lut[m];
  }
  addColorMap(s, m) {
    return qt[s] = m, this;
  }
  createCanvas() {
    const s = document.createElement("canvas");
    return s.width = 1, s.height = this.n, this.updateCanvas(s), s;
  }
  updateCanvas(s) {
    const m = s.getContext("2d", { alpha: false }), d = m.getImageData(0, 0, 1, this.n), l = d.data;
    let b = 0;
    const x = 1 / this.n, p = new Te(), M = new Te(), A = new Te();
    for (let C = 1; C >= 0; C -= x) for (let g = this.map.length - 1; g >= 0; g--) if (C < this.map[g][0] && C >= this.map[g - 1][0]) {
      const W = this.map[g - 1][0], q = this.map[g][0];
      p.setHex(this.map[g - 1][1], Ft), M.setHex(this.map[g][1], Ft), A.lerpColors(p, M, (C - W) / (q - W)), l[b * 4] = Math.round(A.r * 255), l[b * 4 + 1] = Math.round(A.g * 255), l[b * 4 + 2] = Math.round(A.b * 255), l[b * 4 + 3] = 255, b += 1;
    }
    return m.putImageData(d, 0, 0), s;
  }
}
const qt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, _t = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function go(e) {
  e = Math.max(0, Math.min(1, e));
  for (let m = 0; m < _t.length - 1; m++) {
    const [d, l, b, x] = _t[m], [p, M, A, C] = _t[m + 1];
    if (e <= p) {
      const g = (e - d) / (p - d);
      return [l + (M - l) * g, b + (A - b) * g, x + (C - x) * g];
    }
  }
  const s = _t[_t.length - 1];
  return [s[1], s[2], s[3]];
}
function bo() {
  const s = new Uint8Array(1024);
  for (let d = 0; d < 256; d++) {
    const l = d / 255, [b, x, p] = go(l);
    s[d * 4 + 0] = b, s[d * 4 + 1] = x, s[d * 4 + 2] = p, s[d * 4 + 3] = 255;
  }
  const m = new Wn(s, 256, 1, Un);
  return m.minFilter = fn, m.magFilter = fn, m.wrapS = mn, m.wrapT = mn, m.needsUpdate = true, m;
}
function Mo(e, s, m) {
  new kn();
  const d = bo(), l = new Zn({ uniforms: { cmap: { value: d }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Ke, transparent: false, clipping: true, depthWrite: true, depthTest: true }), b = new Ve(new ae(), l);
  return b.renderOrder = -1, b.frustumCulled = false, L.derive(() => {
    b.geometry.setAttribute("position", new Ne(e.val.flat(), 3));
    const x = [];
    for (const y of s.val) y.length === 3 ? x.push(y[0], y[1], y[2]) : y.length === 4 && (x.push(y[0], y[1], y[2]), x.push(y[0], y[2], y[3]));
    b.geometry.setIndex(new Nn(x, 1));
    const p = m.val.filter((y) => Number.isFinite(y));
    let M, A;
    const C = tn.val;
    if (C ? (A = C[0], M = C[1]) : (M = p.length ? Math.max(...p) : 1, A = p.length ? Math.min(...p) : 0, A >= 0 && M > 0 && (A = 0)), M === A) {
      const y = Math.max(Math.abs(M) * 1e-6, 1e-9);
      M += y, A -= y;
    }
    const g = C && C[0] > C[1], W = Math.min(A, M), q = Math.max(A, M), D = q - W, re = new Float32Array(m.val.length);
    for (let y = 0; y < m.val.length; y++) {
      const te = m.val[y];
      if (!Number.isFinite(te)) {
        re[y] = -1;
        continue;
      }
      const ue = ((g ? q + W - te : te) - W) / D;
      re[y] = Math.max(0, Math.min(1, ue));
    }
    b.geometry.setAttribute("scalar", new Me(re, 1));
  }), b;
}
function So(e, s, m, d) {
  const l = Mo(m, e.elements, d);
  return L.derive(() => {
    l.visible = s.shellResults.val != "none";
  }), l;
}
const _o = 6, Qt = 10, ko = 0.012;
function Co(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Po(e, s, m, d) {
  if (!m && !d) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && m) {
    const b = m[e];
    if (b && b.has(s)) return b.get(s);
  }
  return null;
}
function Vo(e, s, m, d) {
  const l = new Se(), b = new kn();
  b.setColorMap("rainbow");
  const x = new Te(), p = L.state([]);
  return L.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const M = m.val, A = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], C = Co(s.frameResults.val);
    if (l.children.forEach(($) => {
      $.geometry && $.geometry.dispose(), $.material && $.material.dispose();
    }), l.clear(), !C || A.length === 0 || M.length === 0) {
      p.val = [];
      return;
    }
    const g = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, W = (_c = e.deformOutputs) == null ? void 0 : _c.val, q = [], D = [];
    for (let $ = 0; $ < A.length; $++) {
      if (A[$].length !== 2) continue;
      const H = Po(C, $, g, W);
      H && (q.push(H[0], H[1]), D.push({ idx: $, vals: H }));
    }
    if (q.length === 0) {
      p.val = [];
      return;
    }
    const re = Math.min(...q), y = Math.max(...q);
    b.setMin(re), b.setMax(y), p.val = q;
    const te = [1 / 0, 1 / 0, 1 / 0], ne = [-1 / 0, -1 / 0, -1 / 0];
    for (const $ of M) for (let R = 0; R < 3; R++) te[R] = Math.min(te[R], $[R]), ne[R] = Math.max(ne[R], $[R]);
    const N = Math.max(ne[0] - te[0], ne[1] - te[1], ne[2] - te[2], 1) * ko, V = [], I = [], P = [];
    let _ = 0;
    for (const { idx: $, vals: R } of D) {
      const H = A[$], Z = M[H[0]], F = M[H[1]];
      if (!Z || !F) continue;
      const B = new w(F[0] - Z[0], F[1] - Z[1], F[2] - Z[2]), le = B.length();
      if (le < 1e-10) continue;
      B.normalize();
      const O = Math.abs(B.y) < 0.99 ? new w(0, 1, 0) : new w(1, 0, 0), se = new w().crossVectors(B, O).normalize(), ce = new w().crossVectors(B, se).normalize(), he = Qt + 1, de = _o;
      for (let me = 0; me < he; me++) {
        const be = me / Qt, _e = Z[0] + B.x * le * be, Le = Z[1] + B.y * le * be, Y = Z[2] + B.z * le * be, K = R[0] + (R[1] - R[0]) * be, Q = b.getColor(K) ?? new Te(0, 0, 0);
        x.copy(Q).convertSRGBToLinear();
        for (let j = 0; j < de; j++) {
          const fe = j / de * Math.PI * 2, ye = Math.cos(fe), ve = Math.sin(fe);
          V.push(_e + (se.x * ye + ce.x * ve) * N, Le + (se.y * ye + ce.y * ve) * N, Y + (se.z * ye + ce.z * ve) * N), I.push(x.r, x.g, x.b);
        }
      }
      for (let me = 0; me < Qt; me++) for (let be = 0; be < de; be++) {
        const _e = (be + 1) % de, Le = _ + me * de + be, Y = _ + me * de + _e, K = _ + (me + 1) * de + be, Q = _ + (me + 1) * de + _e;
        P.push(Le, Y, Q), P.push(Le, Q, K);
      }
      _ += he * de;
    }
    if (V.length === 0) return;
    const T = new ae();
    T.setAttribute("position", new Ne(V, 3)), T.setAttribute("color", new Ne(I, 3)), T.setIndex(P), T.computeVertexNormals();
    const X = new Ye({ vertexColors: true, side: Ke }), E = new Ve(T, X);
    E.frustumCulled = false, l.add(E);
  }), l.__colorMapValues = p, l;
}
function gn(e, s = 8) {
  const m = document.createElement("div");
  m.id = "legend";
  const d = document.createElement("div");
  d.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", m.appendChild(d), setTimeout(() => {
    L.derive(() => {
      d.textContent = Ot.val ? `[${Ot.val}]` : "";
    });
  });
  const l = Array.from({ length: s + 1 }, (M, A) => A / s).reverse();
  let b, x;
  l.forEach((M, A) => {
    b = document.createElement("div"), b.id = `marker-${A}`, b.className = "marker", b.style.marginTop = A == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, x = document.createElement("p"), x.id = `marker-text-${A}`, b.append(x), m.append(b);
  });
  const p = [];
  return m.querySelectorAll("p").forEach((M) => p.push(M)), setTimeout(() => {
    L.derive(() => {
      l.forEach((M, A) => {
        const C = p[A];
        C && (C.innerText = zo(e.val, M).toString());
      });
    });
  }), m;
}
function zo(e, s) {
  const m = tn.val;
  if (m) return (m[0] + s * (m[1] - m[0])).toPrecision(3);
  const d = e.filter((x) => Number.isFinite(x));
  if (d.length === 0) return "0";
  let l = Math.min(...d);
  const b = Math.max(...d);
  return l >= 0 && b > 0 && (l = 0), (l + s * (b - l)).toPrecision(3);
}
function Bo({ mesh: e, settingsObj: s, drawingObj: m, objects3D: d, solids: l }) {
  Jn.DEFAULT_UP = new w(0, 0, 1);
  const b = document.createElement("div"), x = new Kn(), p = new Gn(45, 1, 0.1, 2 * 1e6), M = new Hn(-10, 10, 10, -10, -1e3, 2e6);
  let A = p;
  const C = new qn({ antialias: true });
  C.localClippingEnabled = true;
  const g = new wn(p, C.domElement);
  g.enableDamping = true, g.dampingFactor = 0.1, g.screenSpacePanning = true, g.zoomSpeed = 0.8, g.panSpeed = 1.2, g.rotateSpeed = 0.9, g.keyPanSpeed = 12, g.listenToKeyEvents(window), g.touches = { ONE: At.ROTATE, TWO: At.DOLLY_PAN }, C.domElement.addEventListener("wheel", (Y) => {
    if (!Y.ctrlKey && Math.abs(Y.deltaX) > Math.abs(Y.deltaY) * 1.5) {
      Y.preventDefault();
      const K = g.target, Q = new w().subVectors(p.position, K), j = new w();
      j.crossVectors(p.up, Q).normalize();
      const ye = Q.length() * 1e-3 * g.panSpeed;
      K.addScaledVector(j, Y.deltaX * ye), p.position.addScaledVector(j, Y.deltaX * ye), g.update();
    }
  }, { passive: false });
  const W = new Gt(new w(-1, 0, 0), 0), q = new Gt(new w(0, -1, 0), 0), D = new Gt(new w(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function re() {
    const Y = window.__hekatanClip, K = [];
    Y.enableX && (W.normal.set(Y.invertX ? 1 : -1, 0, 0), W.constant = Y.invertX ? -Y.posX : Y.posX, K.push(W)), Y.enableY && (q.normal.set(0, Y.invertY ? 1 : -1, 0), q.constant = Y.invertY ? -Y.posY : Y.posY, K.push(q)), Y.enableZ && (D.normal.set(0, 0, Y.invertZ ? 1 : -1), D.constant = Y.invertZ ? -Y.posZ : Y.posZ, K.push(D)), C.clippingPlanes = K, x.traverse((j) => {
      const fe = j;
      if (fe.material) {
        const ye = Array.isArray(fe.material) ? fe.material : [fe.material];
        for (const ve of ye) ve.clippingPlanes = K, ve.needsUpdate = true;
      }
    });
    const Q = window.__hekatanPanes ?? [];
    for (const j of Q) try {
      j && typeof j.refresh == "function" && j.refresh();
    } catch {
    }
    C.render(x, A);
  }
  re(), window.__hekatanClipApply = re;
  const y = eo(s), te = L.derive(() => y.displayScale.val === 0 ? 1 : y.displayScale.val > 0 ? y.displayScale.val : -1 / y.displayScale.val), ne = Fo(e, y), ue = () => {
    const Y = [];
    return y.gridXY.rawVal && Y.push("xy"), y.gridXZ.rawVal && Y.push("xz"), y.gridYZ.rawVal && Y.push("yz"), Y;
  }, N = () => {
    const Y = y.gridStep.rawVal, K = Math.max(Y, y.gridMajor.rawVal);
    return { planes: ue(), majorStep: K, minorStep: Y };
  };
  let V = Ht(y.gridSize.rawVal, N());
  V.visible = y.gridVisible.rawVal, window.__hekatanSnap2D = y.cursorSnap.rawVal;
  const I = () => {
    const Y = Math.max(0, Math.min(1, y.gridOpacity.rawVal));
    V.traverse((K) => {
      const Q = K.material;
      if (!Q || !("opacity" in Q)) return;
      const j = K.name ?? "";
      let fe = 0.35;
      j.includes("border") ? fe = 1 : j.includes("major") && (fe = 0.75), Q.opacity = Y * fe;
    });
  };
  I(), b.appendChild(jn(y, e, l)), b.setAttribute("id", "viewer"), b.appendChild(C.domElement), C.setPixelRatio(window.devicePixelRatio);
  const P = ot();
  C.setClearColor(P.background, 1);
  const _ = y.gridSize.rawVal, T = _ * 0.5 + _ * 0.5 / Math.tan(45 * 0.5);
  p.position.set(0, 0, T), p.up.set(0, 1, 0), g.target.set(0, 0, 0), g.minDistance = 0.1, g.maxDistance = 1e4, b.__settings = y, g.zoomSpeed = 1, g._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, g.update();
  let X = yn(y.gridSize.rawVal, y.flipAxes.rawVal);
  x.add(V, X), L.derive(() => {
    window.__hekatanGridPlaneXY = y.gridXY.val, window.__hekatanGridPlaneXZ = y.gridXZ.val, window.__hekatanGridPlaneYZ = y.gridYZ.val;
  });
  let E = true;
  L.derive(() => {
    const Y = y.gridVisible.val;
    if (E) {
      E = false;
      return;
    }
    V.visible = Y, O();
  });
  let $ = true;
  L.derive(() => {
    if (y.gridOpacity.val, $) {
      $ = false;
      return;
    }
    I(), O();
  }), L.derive(() => {
    const Y = y.cursorSnap.val;
    window.__hekatanSnap2D = Y;
  });
  let R = true;
  L.derive(() => {
    var _a;
    const Y = y.gridSize.val, K = y.flipAxes.val;
    if (y.gridXY.val, y.gridXZ.val, y.gridYZ.val, y.gridStep.val, y.gridMajor.val, R) {
      R = false;
      return;
    }
    x.remove(V), (_a = V.traverse) == null ? void 0 : _a.call(V, (fe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = fe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = fe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), V = Ht(Y, N()), V.visible = y.gridVisible.rawVal, x.add(V), I(), x.remove(X), X.traverse((fe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = fe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = fe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), X = yn(Y, K), x.add(X);
    const Q = Y * 0.5 + Y * 0.5 / Math.tan(45 * 0.5);
    p.position.distanceTo(g.target), Math.abs(p.position.x) < 0.1 && Math.abs(p.position.y) < 0.1 && p.position.z > 0 ? p.position.set(0, 0, Q) : p.position.set(0.5 * Y, -Q, 0.5 * Y), g.target.set(0, 0, 0), g.minDistance = Math.max(0.05, Y * 0.01), g.maxDistance = Math.max(50, Y * 50), g.update(), O();
  }), new ResizeObserver((Y) => {
    var _a, _b;
    for (const K of Y) {
      const Q = (_a = K.target) == null ? void 0 : _a.clientWidth, j = (_b = K.target) == null ? void 0 : _b.clientHeight;
      if (Q === 0 || j === 0) continue;
      const ye = (Z ? Q / 2 : Q) / j;
      p.aspect = ye, p.updateProjectionMatrix();
      const ve = M.top;
      if (M.left = -ve * ye, M.right = ve * ye, M.updateProjectionMatrix(), F && F.isPerspectiveCamera) F.aspect = ye, F.updateProjectionMatrix();
      else if (F && F.isOrthographicCamera) {
        const we = F, ge = we.top;
        we.left = -ge * ye, we.right = ge * ye, we.updateProjectionMatrix();
      }
      C.setSize(Q, j), O();
    }
  }).observe(b), g.addEventListener("change", O), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, y.displayScale.val, y.nodes.val, y.elements.val, (_g = y.edges) == null ? void 0 : _g.val, y.elemColumns.val, y.elemBeams.val, y.nodesIndexes.val, y.elementsIndexes.val, y.orientations.val, y.sections.val, y.secColumns.val, y.secBeams.val, y.secFloor.val, y.supports.val, y.loads.val, y.deformedShape.val, y.nodeResults.val, y.frameResults.val, y.shellResults.val, (_h = y.solidResults) == null ? void 0 : _h.val, setTimeout(O);
  });
  let Z = false, F = null, B = null, le = false;
  function O() {
    const Y = b.clientWidth || 1, K = b.clientHeight || 1;
    if (!Z || !F) {
      C.setScissorTest(false), C.setViewport(0, 0, Y, K), C.render(x, A);
      return;
    }
    const Q = Y / 2;
    C.setScissorTest(true), C.setViewport(0, 0, Q, K), C.setScissor(0, 0, Q, K), C.render(x, A), C.setViewport(Q, 0, Q, K), C.setScissor(Q, 0, Q, K), C.render(x, F), C.setScissorTest(false);
  }
  function se(Y) {
    A = Y, g.object = Y, g.update(), O();
  }
  function ce(Y, K) {
    Z = Y, K && (F = K);
    const Q = b.clientWidth || 1, j = b.clientHeight || 1, ye = (Y ? Q / 2 : Q) / j;
    p.isPerspectiveCamera && (p.aspect = ye, p.updateProjectionMatrix());
    const ve = M.top;
    if (M.left = -ve * ye, M.right = ve * ye, M.updateProjectionMatrix(), Y && F) {
      if (B ? (B.object = F, B.update()) : (B = new wn(F, C.domElement), B.enableDamping = true, B.dampingFactor = 0.1, B.screenSpacePanning = true, B.zoomSpeed = 0.8, B.panSpeed = 1.2, B.rotateSpeed = 0.9, B.touches = { ONE: At.ROTATE, TWO: At.DOLLY_PAN }, B.target.copy(g.target), B.addEventListener("change", O), B.enabled = false), !le) {
        const we = (ge) => {
          if (!Z || !B) return;
          const st = C.domElement.getBoundingClientRect(), ct = ge.clientX - st.left, dt = st.width / 2, wt = ct >= dt;
          g.enabled = !wt, B.enabled = wt;
        };
        C.domElement.addEventListener("pointerdown", we, true), C.domElement.addEventListener("wheel", we, { capture: true, passive: true }), le = true;
      }
    } else Y || (g.enabled = true, B && (B.enabled = false));
    b.__splitMode = Y, window.__hekatanSplitMode = Y, window.__hekatanSplitCamera = Y ? F : null, O();
  }
  if (e) {
    x.add(to(y, ne, te), no(e, y, ne), io(y, ne, te), lo(e, y, ne, te), so(e, y, ne, te), ao(e, y, ne, te), po(e, y, ne, te), ho(e, y, ne, te), xo(e, y, ne, te), fo(e, y, ne, te));
    const Y = Lo(e, y), K = So(e, y, ne, Y), Q = gn(Y);
    x.add(K), b.appendChild(Q);
    const j = Vo(e, y, ne);
    x.add(j);
    const fe = j.__colorMapValues, ye = gn(fe);
    ye.id = "frame-legend", b.appendChild(ye), L.derive(() => {
      var _a;
      const ve = y.shellResults.val != "none", we = (((_a = y.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", ge = ve || we, st = y.frameResults.val.startsWith("contour:");
      Q.hidden = !ge, K.visible = ge, ye.hidden = !st;
    });
  }
  if (l) {
    const Y = new Qn(16777215, 0.5);
    x.add(Y);
    const K = new xn(16777215, 0.5);
    K.position.set(30, 25, -10), K.shadow.mapSize.width = 1024, K.shadow.mapSize.height = 1024, x.add(K);
    const Q = 10;
    K.shadow.camera.left = -Q, K.shadow.camera.right = Q, K.shadow.camera.top = Q, K.shadow.camera.bottom = -Q, K.shadow.camera.far = 1e3;
    const j = new xn(16777215, 0.5);
    j.color.setHSL(11, 43, 96), j.position.set(-10, 0, 30), x.add(j), L.derive(() => {
      (l == null ? void 0 : l.val.length) && (x.remove(...l.oldVal), x.add(...l.rawVal), O());
    }), L.derive(() => {
      l.rawVal.forEach((fe) => fe.visible = y.solids.val), O();
    });
  }
  if (d) {
    const Y = [], K = (j) => {
      var _a;
      return ((_a = j == null ? void 0 : j.userData) == null ? void 0 : _a.isCota) ? y.showCotas.val : y.custom3D.val;
    }, Q = () => {
      for (const j of Y) j.visible = K(j);
      O();
    };
    L.derive(() => {
      const j = d.val;
      Y.length && (x.remove(...Y), Y.length = 0), j.length && (x.add(...j), Y.push(...j), Q()), O();
    }), L.derive(() => {
      y.custom3D.val, Q();
    }), L.derive(() => {
      y.showCotas.val, Q();
    });
  }
  m && yo({ drawingObj: m, gridObj: V, scene: x, getActiveCamera: () => A, controls: g, gridSize: _, derivedDisplayScale: te, rendererElm: C.domElement, viewerRender: O }), It((Y, K) => {
    var _a;
    C.setClearColor(K.background, 1), x.remove(V), (_a = V.traverse) == null ? void 0 : _a.call(V, (Q) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Q.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Q.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), V = Ht(y.gridSize.rawVal, { planes: ue() }), x.add(V), b.style.setProperty("--awatif-legend-color", K.legendMarker), O();
  });
  const he = { scene: x, perspCamera: p, orthoCamera: M, get camera() {
    return A;
  }, controls: g, renderer: C, rendererElm: C.domElement, render: O, setActiveCamera: se, setSplitMode: ce, get splitMode() {
    return Z;
  }, get splitCamera() {
    return F;
  }, settings: y };
  b.__ctx = he;
  const de = document.createElement("div");
  de.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const me = (Y, K, Q) => {
    const j = document.createElement("button");
    return j.textContent = Y, j.title = K, j.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), j.onmouseenter = () => {
      j.style.background = "rgba(70,70,70,0.9)";
    }, j.onmouseleave = () => {
      j.style.background = "rgba(40,40,40,0.85)";
    }, j.onclick = (fe) => {
      fe.preventDefault(), Q();
    }, j;
  }, be = (Y, K) => {
    const Q = g.target, j = new w().subVectors(A.position, Q), fe = j.length(), ye = new w(), ve = new w();
    ye.crossVectors(A.up, j).normalize(), ve.copy(A.up).normalize();
    const we = fe * 0.05;
    Q.addScaledVector(ye, -Y * we), Q.addScaledVector(ve, K * we), A.position.addScaledVector(ye, -Y * we), A.position.addScaledVector(ve, K * we), g.update(), O();
  }, _e = (Y) => {
    const K = new w().subVectors(A.position, g.target);
    K.multiplyScalar(Y), A.position.copy(g.target).add(K), g.update(), O();
  }, Le = () => {
    const Y = document.createElement("div");
    return Y.style.cssText = "width:32px;height:32px;", Y;
  };
  return de.append(Le()), de.append(me("\u2191", "Pan arriba", () => be(0, 1))), de.append(me("\u2295", "Zoom in", () => _e(0.85))), de.append(me("\u2190", "Pan izquierda", () => be(-1, 0))), de.append(me("\u2302", "Reset vista", () => {
    g.reset(), O();
  })), de.append(me("\u2192", "Pan derecha", () => be(1, 0))), de.append(me("\u2296", "Zoom out", () => _e(1.18))), de.append(me("\u2193", "Pan abajo", () => be(0, -1))), de.append(Le()), getComputedStyle(b).position === "static" && (b.style.position = "relative"), b.appendChild(de), b;
}
function Fo(e, s) {
  return L.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const m = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], d = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!d || m.length === 0) return m;
    const l = s.deformScale.val, b = s.deformScale.val * s.deformScaleZ.val, x = Number.isFinite(l) ? l : 1, p = Number.isFinite(b) ? b : 1;
    return m.map((M, A) => {
      var _a2;
      const C = ((_a2 = d.get(A)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], g = Number.isFinite(C[0]) ? C[0] : 0, W = Number.isFinite(C[1]) ? C[1] : 0, q = Number.isFinite(C[2]) ? C[2] : 0;
      return [M[0] + g * x, M[1] + W * x, M[2] + q * p];
    });
  });
}
const tn = L.state(null), Ot = L.state(""), Ao = L.state("kN"), To = L.state("mm"), Eo = L.state("kN/m\xB2"), Xo = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, bn = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Yo = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Lo(e, s) {
  const m = L.state([]);
  let d;
  return ((l) => {
    l.bendingXX = "bendingXX", l.bendingYY = "bendingYY", l.bendingXY = "bendingXY", l.membraneXX = "membraneXX", l.membraneYY = "membraneYY", l.membraneXY = "membraneXY", l.tranverseShearX = "tranverseShearX", l.tranverseShearY = "tranverseShearY", l.vonMises = "vonMises", l.pressure = "pressure", l.displacementX = "displacementX", l.displacementY = "displacementY", l.displacementZ = "displacementZ";
  })(d || (d = {})), L.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const l = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), D = (he, de) => {
      he == null ? void 0 : he.forEach((me, be) => {
        const _e2 = e.elements.val[be];
        if (_e2) for (let Le = 0; Le < _e2.length; Le++) de.set(_e2[Le], [me[Le] ?? me[0]]);
      });
    };
    D((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, l), D((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, b), D((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, x), D((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, p), D((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, M), D((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, A), D((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, C), D((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, g), D((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, W), D((_t2 = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t2.pressure, q);
    const re = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, y = (_w = s.solidResults) == null ? void 0 : _w.val, ne = y && y !== "none" ? y : s.shellResults.val, ue = re == null ? void 0 : re[ne], N = { bendingXX: [l, 0], bendingYY: [b, 0], bendingXY: [x, 0], membraneXX: [p, 0], membraneYY: [M, 0], membraneXY: [A, 0], tranverseShearX: [C, 0], tranverseShearY: [g, 0], vonMises: [W, 0], pressure: [q, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, V = s.shellResults.val, I = Ao.val, P = To.val, _ = V === "displacementX" || V === "displacementY" || V === "displacementZ", T = V === "bendingXX" || V === "bendingYY" || V === "bendingXY", X = V === "membraneXX" || V === "membraneYY" || V === "membraneXY", E = V === "vonMises" || V === "pressure", $ = V === "tranverseShearX" || V === "tranverseShearY", R = (_D = s.solidResults) == null ? void 0 : _D.val, H = R === "vonMises" || R === "sigmaXX" || R === "sigmaYY" || R === "sigmaZZ" || R === "tauXY" || R === "tauYZ" || R === "tauXZ", Z = R === "ux" || R === "uy" || R === "uz", F = Eo.val, B = H ? Yo[F] : Z || _ ? bn[P] : T || X || E || $ ? 1 / Xo[I] : 1, le = H ? F : Z || _ ? P : T ? `${I}\xB7m/m` : X ? `${I}/m\xB2` : E ? `${I}/m\xB2` : $ ? `${I}/m` : "";
    Ot.val = le, tn.val = Array.isArray(ue) && ue.length === 2 ? [ue[0] * B, ue[1] * B] : null;
    const se = R && R !== "none" ? [W, 0] : N[V], ce = [];
    e.nodes.val.forEach((he, de) => {
      const me = se;
      if (!me || !me[0] || typeof me[0].has != "function") return;
      if (!me[0].has(de)) {
        ce.push(Number.NaN);
        return;
      }
      const be = me[0].get(de), _e2 = be ? be[me[1]] ?? 0 : 0;
      ce.push(_e2 * B);
    }), m.val = ce;
  }), m;
}
export {
  To as a,
  Mo as b,
  Ao as c,
  gn as d,
  Eo as e,
  Bo as g
};
