import { X as Xt, B as ae, Y as Yt, F as Ne, G as _e, d as wt, L as Ae, e as Te, D as Ge, b as ke, s as Ee, Z as Sn, c as Dn, V as w, x as rt, y as Xe, _ as Kt, k as kn, a as Re, f as Me, h as Lt, $ as It, l as Bn, j as Zn, q as Ft, I as St, S as kt, a0 as pn, m as un, o as hn, p as fn, a1 as mn, a2 as At, a3 as Nn, a4 as Wn, a5 as Un, a6 as Gn, a7 as Kn, n as wn, a8 as xn, r as Hn, t as qn, u as Qn, W as Jn, v as yn, a9 as Tt, H as Ht, A as On, w as vn, O as jn } from "./Text-BE8nxNWm.js";
import { v as L, P as eo, g as ot, o as $t } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function to(e, s, m) {
  const d = document.createElement("div"), l = new eo({ title: "Settings", expanded: true, container: d });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(l), d.setAttribute("id", "settings");
  const b = "hk_settingsPos";
  let x = null;
  try {
    const g = localStorage.getItem(b);
    g && (x = JSON.parse(g));
  } catch {
  }
  d.style.cssText = ["position:fixed", x ? `left:${x.left}px` : "left:8px", x ? `top:${x.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const u = () => {
    const g = d.querySelector(".tp-rotv_b");
    if (!g) {
      setTimeout(u, 200);
      return;
    }
    g.style.cursor = "move", g.style.userSelect = "none";
    let W = false, q = 0, B = 0, re = 0, y = 0;
    g.addEventListener("mousedown", (te) => {
      W = true, q = te.clientX, B = te.clientY;
      const ne = d.getBoundingClientRect();
      re = ne.left, y = ne.top, d.style.left = `${re}px`, d.style.top = `${y}px`;
    }), window.addEventListener("mousemove", (te) => {
      if (!W) return;
      const ne = te.clientX - q, ue = te.clientY - B, N = Math.max(0, Math.min(window.innerWidth - 40, re + ne)), V = Math.max(0, Math.min(window.innerHeight - 40, y + ue));
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
  if (u(), s == null ? void 0 : s.nodes) {
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
  const M = l.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), A = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), P = () => {
    const g = window.__hekatanClipApply;
    typeof g == "function" && g();
  };
  return M.addBinding(A, "enableX", { label: "Cortar X" }).on("change", P), M.addBinding(A, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", P), M.addBinding(A, "invertX", { label: "  invertir X" }).on("change", P), M.addBinding(A, "enableY", { label: "Cortar Y" }).on("change", P), M.addBinding(A, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", P), M.addBinding(A, "invertY", { label: "  invertir Y" }).on("change", P), M.addBinding(A, "enableZ", { label: "Cortar Z" }).on("change", P), M.addBinding(A, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", P), M.addBinding(A, "invertZ", { label: "  invertir Z" }).on("change", P), d;
}
function no(e) {
  return { gridSize: L.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: L.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: L.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: L.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: L.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: L.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: L.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: L.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: L.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: L.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: L.state((e == null ? void 0 : e.nodes) ?? true), elements: L.state((e == null ? void 0 : e.elements) ?? true), edges: L.state((e == null ? void 0 : e.edges) ?? true), faces: L.state((e == null ? void 0 : e.faces) ?? true), elemColumns: L.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: L.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: L.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: L.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: L.state((e == null ? void 0 : e.orientations) ?? false), sections: L.state((e == null ? void 0 : e.sections) ?? true), secColumns: L.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: L.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: L.state((e == null ? void 0 : e.secFloor) ?? -1), supports: L.state((e == null ? void 0 : e.supports) ?? true), loads: L.state((e == null ? void 0 : e.loads) ?? false), deformedShape: L.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: L.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: L.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: L.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: L.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: L.state((e == null ? void 0 : e.flipAxes) ?? false), solids: L.state((e == null ? void 0 : e.solids) ?? true), custom3D: L.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: L.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: L.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: L.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function oo(e, s, m) {
  const d = ot(), l = new Xt(new ae(), new Yt({ color: d.nodePoint }));
  return $t((b, x) => {
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
function so(e, s, m) {
  const d = ot(), l = new _e(), b = new wt(new ae(), new Ae({ color: d.elementLine }));
  $t((W, q) => {
    b.material.color.setHex(q.elementLine);
  }), b.frustumCulled = false, b.renderOrder = 2, l.add(b);
  const x = new Te({ vertexColors: true, transparent: true, opacity: d.shellOpacity, side: Ge, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), u = new ke(new ae(), x);
  u.frustumCulled = false, l.add(u);
  let M = new Ee(d.shellWall), A = new Ee(d.shellSlab), P = new Ee(d.shellTri);
  $t((W, q) => {
    M = new Ee(q.shellWall), A = new Ee(q.shellSlab), P = new Ee(q.shellTri), x.opacity = q.shellOpacity, x.needsUpdate = true;
  });
  function g(W, q) {
    const B = Math.abs(q[0] - W[0]), re = Math.abs(q[1] - W[1]), y = Math.abs(q[2] - W[2]);
    return y > B && y > re || re > B && re > y;
  }
  return L.derive(() => {
    var _a;
    if (s.deformedShape.val, s.elemColumns.val, s.elemBeams.val, !s.elements.val) return;
    const W = s.elemColumns.rawVal, q = s.elemBeams.rawVal, B = m.val, re = ((_a = e.elements) == null ? void 0 : _a.val) || [], y = re.filter((N) => {
      if (N.length !== 2) return true;
      const V = B[N[0]], I = B[N[1]];
      if (!V || !I) return true;
      const C = g(V, I);
      return !(C && !W || !C && !q);
    }).map((N) => ao(N).map((V) => [...B[V[0]], ...B[V[1]]]).flat()).flat();
    b.geometry.setAttribute("position", new Ne(y, 3));
    const te = [], ne = [];
    function ue(N, V, I, C) {
      const S = [V[0] - N[0], V[1] - N[1], V[2] - N[2]], T = [C[0] - N[0], C[1] - N[1], C[2] - N[2]], X = S[1] * T[2] - S[2] * T[1], E = S[2] * T[0] - S[0] * T[2], $ = S[0] * T[1] - S[1] * T[0], R = Math.sqrt(X * X + E * E + $ * $);
      return R < 1e-12 ? false : Math.abs($ / R) < 0.5;
    }
    for (const N of re) if (N.length === 3) {
      const [V, I, C] = N;
      if (B[V] && B[I] && B[C]) {
        te.push(...B[V], ...B[I], ...B[C]);
        for (let S = 0; S < 3; S++) ne.push(P.r, P.g, P.b);
      }
    } else if (N.length === 4) {
      const [V, I, C, S] = N;
      if (B[V] && B[I] && B[C] && B[S]) {
        const T = ue(B[V], B[I], B[C], B[S]) ? M : A;
        te.push(...B[V], ...B[I], ...B[C]), te.push(...B[V], ...B[C], ...B[S]);
        for (let X = 0; X < 6; X++) ne.push(T.r, T.g, T.b);
      }
    }
    te.length > 0 ? (u.geometry.dispose(), u.geometry = new ae(), u.geometry.setAttribute("position", new Ne(te, 3)), u.geometry.setAttribute("color", new Ne(ne, 3)), u.geometry.computeVertexNormals(), u.visible = s.faces ? s.faces.rawVal : true) : u.visible = false;
  }), L.derive(() => {
    l.visible = s.elements.val;
  }), L.derive(() => {
    s.edges && (b.visible = s.edges.val);
  }), L.derive(() => {
    if (!s.faces) return;
    const W = s.faces.val;
    u.geometry.attributes.position ? u.visible = W : W || (u.visible = false);
  }), l;
}
function ao(e) {
  if (e.length === 2) return [e];
  const s = [];
  for (let m = 0; m < e.length; m++) s.push([e[m], e[(m + 1) % e.length]]);
  return s;
}
function qt(e, s) {
  const m = ot(), d = new _e();
  d.name = "hekatan-grid";
  const l = (s == null ? void 0 : s.planes) ?? ["xy"];
  let b = (s == null ? void 0 : s.majorStep) ?? 1, x = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (b <= 0 && (b = 1), x <= 0 && (x = 0.1); e / x > 500; ) x *= 2;
  for (; e / b > 100; ) b *= 2;
  const u = e / 2;
  b = Math.max(x, Math.round(b / x) * x);
  const A = new Ee(m.grid), P = new Ee(m.grid).multiplyScalar(0.45), g = (q, B, re, y) => {
    const te = [], ne = q === "xy" ? (C, S) => [C, S, 0] : q === "xz" ? (C, S) => [C, 0, S] : (C, S) => [0, C, S], ue = Math.floor(u / B);
    for (let C = -ue; C <= ue; C++) {
      const S = C * B, T = ne(S, -u), X = ne(S, u);
      te.push(...T, ...X);
    }
    for (let C = -ue; C <= ue; C++) {
      const S = C * B, T = ne(-u, S), X = ne(u, S);
      te.push(...T, ...X);
    }
    const N = new ae();
    N.setAttribute("position", new Ne(te, 3));
    const V = new Ae({ color: re, transparent: true, opacity: y, depthWrite: false }), I = new wt(N, V);
    return I.name = `grid-${q}-${B === x ? "minor" : "major"}`, I;
  }, W = (q, B, re) => {
    const y = q === "xy" ? (I, C) => [I, C, 0] : q === "xz" ? (I, C) => [I, 0, C] : (I, C) => [0, I, C], te = [[-u, -u], [u, -u], [u, u], [-u, u]], ne = [];
    for (const [I, C] of te) ne.push(...y(I, C));
    const ue = new ae();
    ue.setAttribute("position", new Ne(ne, 3));
    const N = new Ae({ color: B, transparent: true, opacity: re, depthWrite: false }), V = new Sn(ue, N);
    return V.name = `grid-${q}-border`, V.renderOrder = 1, V;
  };
  for (const q of l) d.add(g(q, x, P, 0.12)), d.add(g(q, b, A, 0.4)), d.add(W(q, A, 0.55));
  return d.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: b, minorStep: x, gridSize: e, planes: [...l] }, d;
}
function io(e, s, m, d) {
  const l = new _e(), b = new Dn(0.5, 0.5, 0.5), x = new Te({ color: 10166822 });
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    l.clear();
    const u = 0.05 * s.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((M, A) => {
      const P = m.val[A];
      if (!P) return;
      const g = new ke(b, x);
      g.position.set(...P);
      const W = u * d.rawVal;
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
function lo(e, s, m, d) {
  const l = new _e();
  l.name = "loadsGroup";
  function b(x) {
    if (x.length < 2) return 0.12 * s.gridSize.rawVal;
    const u = [1 / 0, 1 / 0, 1 / 0], M = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of x) for (let g = 0; g < 3; g++) u[g] = Math.min(u[g], P[g]), M[g] = Math.max(M[g], P[g]);
    return 0.08 * Math.max(M[0] - u[0], M[1] - u[1], M[2] - u[2], 0.1);
  }
  return L.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    l.children.forEach((M) => M.dispose()), l.clear();
    const x = m.val, u = b(x);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((M, A) => {
      const P = x[A];
      if (!P) return;
      const g = new w(...M.slice(0, 3));
      if (g.lengthSq() < 1e-30) return;
      g.normalize();
      const W = new rt(g, new w(...P), 1, 15637248, 0.3, 0.3), q = u * d.rawVal;
      W.scale.set(q, q, q), l.add(W);
    });
  }), L.derive(() => {
    if (d.val, !s.loads.rawVal) return;
    const u = b(m.rawVal) * d.rawVal;
    l.children.forEach((M) => M.scale.set(u, u, u));
  }), L.derive(() => {
    l.visible = s.loads.val;
  }), l;
}
function ro(e, s, m) {
  const d = new _e();
  return L.derive(() => {
    if (!e.nodesIndexes.val) return;
    d.children.forEach((b) => b.dispose()), d.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((b, x) => {
      const u = new Xe(`${x}`);
      u.position.set(...b), u.updateScale(l * m.rawVal), d.add(u);
    });
  }), L.derive(() => {
    if (m.val, !e.nodesIndexes.rawVal) return;
    const l = 0.05 * e.gridSize.val * 0.6;
    d.children.forEach((b) => b.updateScale(l * m.rawVal));
  }), L.derive(() => {
    d.visible = e.nodesIndexes.val;
  }), d;
}
function co(e, s, m, d) {
  const l = new _e();
  return L.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    l.children.forEach((x) => x.dispose()), l.clear();
    const b = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((x, u) => {
      const M = new Xe(`${u}`, void 0, "#001219");
      M.position.set(...po(x.map((A) => m.rawVal[A]))), M.updateScale(b * d.rawVal), l.add(M);
    });
  }), L.derive(() => {
    if (d.val, !s.elementsIndexes.rawVal) return;
    const b = 0.05 * s.gridSize.val * 0.6;
    l.children.forEach((x) => x.updateScale(b * d.rawVal));
  }), L.derive(() => {
    l.visible = s.elementsIndexes.val;
  }), l;
}
function po(e) {
  const s = e.reduce((d, l) => [d[0] + l[0], d[1] + l[1], d[2] + l[2]], [0, 0, 0]), m = e.length;
  return [s[0] / m, s[1] / m, s[2] / m];
}
function gn(e, s) {
  const m = new _e(), d = 0.05 * e * 1, l = ot(), b = new Xe("X", "red", "transparent"), x = new Xe(s ? "Z" : "Y", "green", "transparent"), u = new Xe(s ? "Y" : "Z", "blue", "transparent"), M = new rt(new w(1, 0, 0), new w(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), A = new rt(new w(0, 1, 0), new w(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), P = new rt(new w(0, 0, 1), new w(0, 0, 0), 1, l.axisArrow, 0.2, 0.2);
  return b.position.set(1.3 * d, 0, 0), x.position.set(0, 1.3 * d, 0), u.position.set(0, 0, 1.3 * d), b.updateScale(0.4 * d), x.updateScale(0.4 * d), u.updateScale(0.4 * d), M.scale.set(d, d, d), A.scale.set(d, d, d), P.scale.set(d, d, d), m.add(M, A, P, b, x, u), m;
}
function en(e, s) {
  const m = new w(...e), l = new w(...s).clone().sub(m), b = l.length(), x = l.dot(new w(1, 0, 0)) / b, u = l.dot(new w(0, 1, 0)) / b, M = l.dot(new w(0, 0, 1)) / b, A = Math.sqrt(x ** 2 + u ** 2);
  let P = new Kt().fromArray([[x, u, M], [-u / A, x / A, 0], [-x * M / A, -u * M / A, A]].flat());
  return M === 1 && (P = new Kt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), M === -1 && (P = new Kt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new kn().setFromMatrix3(P);
}
function Ot(e, s) {
  return e == null ? void 0 : e.map((m, d) => (9 * m + s[d]) / 10);
}
function Ct(e) {
  const s = e.reduce((d, l) => [d[0] + l[0], d[1] + l[1], d[2] + l[2]], [0, 0, 0]), m = e.length;
  return [s[0] / m, s[1] / m, s[2] / m];
}
function uo(e, s, m) {
  const d = Ct([s, m]), l = Ct([e, m]), b = Ct([e, s]), x = new w(...d).sub(new w(...l)).normalize(), u = new w(...m).sub(new w(...b)).normalize(), M = x.clone().cross(u).normalize(), A = M.clone().cross(x).normalize();
  return new kn().makeBasis(x, A, M);
}
function ho(e, s, m, d) {
  const l = new _e(), b = new ae(), x = new Ae({ vertexColors: true }), u = [0, 0, 0], M = [1, 0, 0], A = [0, 1, 0], P = [0, 0, 1];
  b.setAttribute("position", new Ne([...u, ...M, ...u, ...A, ...u, ...P], 3));
  const g = [255, 0, 0], W = [0, 255, 0], q = [0, 0, 255];
  return b.setAttribute("color", new Ne([...g, ...g, ...W, ...W, ...q, ...q], 3)), L.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (l.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((B) => {
      const re = new wt(b, x), y = m.rawVal[B[0]], te = m.rawVal[B[1]];
      if (B.length === 2 && (re.position.set(...Ot(y, te)), re.rotation.setFromRotationMatrix(en(y, te))), B.length === 3) {
        const N = m.rawVal[B[2]];
        re.position.set(...Ct([y, te, N])), re.rotation.setFromRotationMatrix(uo(y, te, N));
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
function fo(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), m = (e.h * 100).toFixed(0);
    return `${s}x${m}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function mo(e, s, m, d) {
  const l = new _e();
  function b(V, I) {
    const C = V / 2, S = I / 2, T = new Float32Array([0, -C, -S, 0, C, -S, 0, C, S, 0, -C, -S, 0, C, S, 0, -C, S]), X = new ae();
    X.setAttribute("position", new Me(T, 3));
    const E = new Float32Array([0, -C, -S, 0, C, -S, 0, C, S, 0, -C, S, 0, -C, -S]), $ = new ae();
    return $.setAttribute("position", new Me(E, 3)), { fill: X, outline: $ };
  }
  function x(V, I = 24) {
    const C = V / 2, S = new Float32Array(I * 9);
    for (let $ = 0; $ < I; $++) {
      const R = $ / I * Math.PI * 2, H = ($ + 1) / I * Math.PI * 2;
      S[$ * 9] = 0, S[$ * 9 + 1] = 0, S[$ * 9 + 2] = 0, S[$ * 9 + 3] = 0, S[$ * 9 + 4] = C * Math.cos(R), S[$ * 9 + 5] = C * Math.sin(R), S[$ * 9 + 6] = 0, S[$ * 9 + 7] = C * Math.cos(H), S[$ * 9 + 8] = C * Math.sin(H);
    }
    const T = new ae();
    T.setAttribute("position", new Me(S, 3));
    const X = new Float32Array((I + 1) * 3);
    for (let $ = 0; $ <= I; $++) {
      const R = $ / I * Math.PI * 2;
      X[$ * 3] = 0, X[$ * 3 + 1] = C * Math.cos(R), X[$ * 3 + 2] = C * Math.sin(R);
    }
    const E = new ae();
    return E.setAttribute("position", new Me(X, 3)), { fill: T, outline: E };
  }
  function u(V, I, C, S) {
    const T = C ?? I * 0.08, X = S ?? V * 0.07, E = V / 2, $ = I / 2, R = $ - T, H = X / 2, Z = [];
    function F(se, de, he, pe) {
      Z.push(0, se, de, 0, he, de, 0, he, pe, 0, se, de, 0, he, pe, 0, se, pe);
    }
    F(-E, -$, E, -R), F(-H, -R, H, R), F(-E, R, E, $);
    const D = new ae();
    D.setAttribute("position", new Me(new Float32Array(Z), 3));
    const le = new Float32Array([0, -E, -$, 0, E, -$, 0, E, -R, 0, H, -R, 0, H, R, 0, E, R, 0, E, $, 0, -E, $, 0, -E, R, 0, -H, R, 0, -H, -R, 0, -E, -R, 0, -E, -$]), O = new ae();
    return O.setAttribute("position", new Me(le, 3)), { fill: D, outline: O };
  }
  function M(V, I, C) {
    const S = V / 2, T = I / 2, X = S - C, E = T - C, $ = [];
    function R(D, le, O, se) {
      $.push(0, D, le, 0, O, le, 0, O, se, 0, D, le, 0, O, se, 0, D, se);
    }
    R(-S, -T, S, -E), R(-S, E, S, T), R(-S, -E, -X, E), R(X, -E, S, E);
    const H = new ae();
    H.setAttribute("position", new Me(new Float32Array($), 3));
    const Z = new Float32Array([0, -S, -T, 0, S, -T, 0, S, -T, 0, S, T, 0, S, T, 0, -S, T, 0, -S, T, 0, -S, -T, 0, -X, -E, 0, X, -E, 0, X, -E, 0, X, E, 0, X, E, 0, -X, E, 0, -X, E, 0, -X, -E]), F = new ae();
    return F.setAttribute("position", new Me(Z, 3)), { fill: H, outline: F };
  }
  function A(V, I, C) {
    const S = V / 2, T = I / 2, X = S - C, E = T - C, $ = new ae(), R = new Float32Array([0, -X, -E, 0, X, -E, 0, X, E, 0, -X, -E, 0, X, E, 0, -X, E]);
    $.setAttribute("position", new Me(R, 3));
    const H = [];
    function Z(O, se, de, he) {
      H.push(0, O, se, 0, de, se, 0, de, he, 0, O, se, 0, de, he, 0, O, he);
    }
    Z(-S, -T, S, -E), Z(-S, E, S, T), Z(-S, -E, -X, E), Z(X, -E, S, E);
    const F = new ae();
    F.setAttribute("position", new Me(new Float32Array(H), 3));
    const D = new Float32Array([0, -S, -T, 0, S, -T, 0, S, -T, 0, S, T, 0, S, T, 0, -S, T, 0, -S, T, 0, -S, -T, 0, -X, -E, 0, X, -E, 0, X, -E, 0, X, E, 0, X, E, 0, -X, E, 0, -X, E, 0, -X, -E]), le = new ae();
    return le.setAttribute("position", new Me(D, 3)), { concFill: $, steelFillGeom: F, outline: le };
  }
  function P(V, I, C) {
    const S = [], T = [[0, -V / 2, -I / 2], [0, -V / 2 + C, -I / 2], [0, -V / 2 + C, I / 2 - C], [0, V / 2, I / 2 - C], [0, V / 2, I / 2], [0, -V / 2, I / 2]], X = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const H of X) S.push(...T[H]);
    const E = new ae();
    E.setAttribute("position", new Me(new Float32Array(S), 3));
    const $ = [];
    for (let H = 0; H < T.length; H++) {
      const Z = (H + 1) % T.length;
      $.push(...T[H], ...T[Z]);
    }
    const R = new ae();
    return R.setAttribute("position", new Me(new Float32Array($), 3)), { fill: E, outline: R };
  }
  function g(V, I, C, S) {
    const T = S / 2, X = [], E = [[0, -V - T, -I / 2], [0, -C - T, -I / 2], [0, -C - T, I / 2 - C], [0, -T, I / 2 - C], [0, -T, I / 2], [0, -V - T, I / 2]], $ = [[0, T, -I / 2], [0, T + C, -I / 2], [0, T + C, I / 2 - C], [0, V + T, I / 2 - C], [0, V + T, I / 2], [0, T, I / 2]], R = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const D of R) X.push(...E[D]);
    for (const D of R) X.push(...$[D]);
    const H = new ae();
    H.setAttribute("position", new Me(new Float32Array(X), 3));
    const Z = [];
    for (const D of [E, $]) for (let le = 0; le < D.length; le++) {
      const O = (le + 1) % D.length;
      Z.push(...D[le], ...D[O]);
    }
    const F = new ae();
    return F.setAttribute("position", new Me(new Float32Array(Z), 3)), { fill: H, outline: F };
  }
  function W(V, I, C, S) {
    const T = I / 2, X = V, E = [[0, -X, -T], [0, -X, -T + C], [0, -S, -T + C], [0, -S, T - C], [0, -X, T - C], [0, -X, T], [0, 0, T], [0, 0, -T]], $ = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], R = [];
    for (const D of $) R.push(...E[D]);
    const H = new ae();
    H.setAttribute("position", new Me(new Float32Array(R), 3));
    const Z = [];
    for (let D = 0; D < E.length; D++) {
      const le = (D + 1) % E.length;
      Z.push(...E[D], ...E[le]);
    }
    const F = new ae();
    return F.setAttribute("position", new Me(new Float32Array(Z), 3)), { fill: H, outline: F };
  }
  function q(V, I, C, S, T) {
    const X = I / 2, E = T / 2, $ = [], R = [[0, -V, -X], [0, -V, -X + C], [0, -E - S, -X + C], [0, -E - S, X - C], [0, -V, X - C], [0, -V, X], [0, -E, X], [0, -E, -X]], H = R.map((O) => [O[0], -O[1], O[2]]), Z = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const O of Z) $.push(...R[O]);
    for (const O of Z) $.push(...H[O]);
    const F = new ae();
    F.setAttribute("position", new Me(new Float32Array($), 3));
    const D = [];
    for (const O of [R, H]) for (let se = 0; se < O.length; se++) {
      const de = (se + 1) % O.length;
      D.push(...O[se], ...O[de]);
    }
    const le = new ae();
    return le.setAttribute("position", new Me(new Float32Array(D), 3)), { fill: F, outline: le };
  }
  function B(V, I, C, S) {
    const T = V / 2, X = I / 2, E = S / 2, $ = [[0, -E, -X], [0, E, -X], [0, E, X - C], [0, T, X - C], [0, T, X], [0, -T, X], [0, -T, X - C], [0, -E, X - C]], R = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], H = [];
    for (const le of R) H.push(...$[le]);
    const Z = new ae();
    Z.setAttribute("position", new Me(new Float32Array(H), 3));
    const F = [];
    for (let le = 0; le < $.length; le++) {
      const O = (le + 1) % $.length;
      F.push(...$[le], ...$[O]);
    }
    const D = new ae();
    return D.setAttribute("position", new Me(new Float32Array(F), 3)), { fill: Z, outline: D };
  }
  function re(V, I, C = 24) {
    const S = V / 2, T = S - I, X = [];
    for (let H = 0; H < C; H++) {
      const Z = H / C * Math.PI * 2, F = (H + 1) / C * Math.PI * 2, D = Math.cos(Z), le = Math.sin(Z), O = Math.cos(F), se = Math.sin(F);
      X.push(0, S * D, S * le, 0, S * O, S * se, 0, T * O, T * se), X.push(0, S * D, S * le, 0, T * O, T * se, 0, T * D, T * le);
    }
    const E = new ae();
    E.setAttribute("position", new Me(new Float32Array(X), 3));
    const $ = [];
    for (let H = 0; H < C; H++) {
      const Z = H / C * Math.PI * 2, F = (H + 1) / C * Math.PI * 2;
      $.push(0, S * Math.cos(Z), S * Math.sin(Z), 0, S * Math.cos(F), S * Math.sin(F)), $.push(0, T * Math.cos(Z), T * Math.sin(Z), 0, T * Math.cos(F), T * Math.sin(F));
    }
    const R = new ae();
    return R.setAttribute("position", new Me(new Float32Array($), 3)), { fill: E, outline: R };
  }
  const y = new Te({ color: 52479, transparent: true, opacity: 0.35, side: Ge, depthWrite: false }), te = new Ae({ color: 52479 }), ne = new Te({ color: 16750848, transparent: true, opacity: 0.4, side: Ge, depthWrite: false }), ue = new Ae({ color: 16750848 });
  function N(V, I) {
    const C = Math.abs(I[0] - V[0]), S = Math.abs(I[1] - V[1]), T = Math.abs(I[2] - V[2]);
    return T > C && T > S || S > C && S > T;
  }
  return L.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const V = s.secColumns.rawVal, I = s.secBeams.rawVal;
    if (!V && !I) {
      l.children.forEach((E) => {
        E instanceof Xe && E.dispose();
      }), l.clear();
      return;
    }
    l.children.forEach((E) => {
      E instanceof Xe && E.dispose();
    }), l.clear();
    const C = (_a = e.elements) == null ? void 0 : _a.val, S = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!C || !S) return;
    const T = S.sectionShapes, X = s.secFloor.rawVal;
    C.forEach((E, $) => {
      if (E.length !== 2) return;
      const R = m.rawVal[E[0]], H = m.rawVal[E[1]];
      if (!R || !H) return;
      const Z = N(R, H);
      if (Z && !V || !Z && !I) return;
      if (X >= 0) {
        const se = Math.min(R[1], H[1]);
        Math.max(R[1], H[1]);
        const de = s.gridSize.rawVal || 3;
        if (Math.floor(se / de + 0.01) !== X) return;
      }
      const F = T == null ? void 0 : T.get($);
      if (!F) return;
      const D = [(R[0] + H[0]) / 2, (R[1] + H[1]) / 2, (R[2] + H[2]) / 2], le = en(R, H);
      if (F.type === "CFT") {
        const se = A(F.b, F.h, F.tw ?? F.b * 0.05), de = new ke(se.concFill, y);
        de.position.set(...D), de.rotation.setFromRotationMatrix(le), l.add(de);
        const he = new ke(se.steelFillGeom, ne);
        he.position.set(...D), he.rotation.setFromRotationMatrix(le), l.add(he);
        const pe = new Re(se.outline, ue);
        pe.position.set(...D), pe.rotation.setFromRotationMatrix(le), l.add(pe);
      } else {
        let se, de, he;
        switch (F.type) {
          case "rect":
            se = b(F.b, F.h), de = y, he = te;
            break;
          case "circ":
            se = x(F.d), de = y, he = te;
            break;
          case "I":
            se = u(F.b, F.h, F.tf, F.tw), de = ne, he = ue;
            break;
          case "HSS":
            se = M(F.b, F.h, F.tw ?? F.b * 0.05), de = ne, he = ue;
            break;
          case "CFT":
            se = A(F.b, F.h, F.tw ?? F.b * 0.05), de = ne, he = ue;
            break;
          case "L":
            se = P(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3), de = ne, he = ue;
            break;
          case "2L":
            se = g(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3, F.dis ?? 0.01), de = ne, he = ue;
            break;
          case "C":
          case "coldC":
            se = W(F.b, F.h, F.tf ?? F.t ?? 3e-3, F.tw ?? F.t ?? 3e-3), de = ne, he = ue;
            break;
          case "2C":
            se = q(F.b, F.h, F.tf ?? 5e-3, F.tw ?? 5e-3, F.dis ?? 0.01), de = ne, he = ue;
            break;
          case "T":
            se = B(F.b, F.h, F.tf ?? 0.01, F.tw ?? 6e-3), de = ne, he = ue;
            break;
          case "pipe":
            se = re(F.d, F.tw ?? F.d * 0.05), de = ne, he = ue;
            break;
          default:
            return;
        }
        const pe = new ke(se.fill, de);
        pe.position.set(...D), pe.rotation.setFromRotationMatrix(le), l.add(pe);
        const me = new Re(se.outline, he);
        me.position.set(...D), me.rotation.setFromRotationMatrix(le), l.add(me);
      }
      const O = fo(F);
      if (O) {
        const de = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(F.type) ? "#ff9900" : "#00ccff", he = new Xe(O, de, "transparent");
        he.position.set(D[0], D[1], D[2]);
        const pe = 0.05 * s.gridSize.rawVal * 0.5;
        he.updateScale(pe * ((d == null ? void 0 : d.rawVal) ?? 1)), l.add(he);
      }
    });
  }), d && L.derive(() => {
    if (d.val, !s.sections.rawVal) return;
    const V = 0.05 * s.gridSize.val * 0.5;
    l.children.forEach((I) => {
      I instanceof Xe && I.updateScale(V * d.rawVal);
    });
  }), L.derive(() => {
    l.visible = s.sections.val;
  }), l;
}
class Et extends _e {
  constructor(s, m, d, l, b, x, u) {
    super();
    const M = new Lt().moveTo(0, 0).lineTo(0, x[1]).lineTo(d, x[1]).lineTo(d, 0).lineTo(0, 0), A = M.getPoints(), P = new ae().setFromPoints(A);
    this.lines = new Re(P, new Ae({ color: ot().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), u && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const g = new It(M), W = new Te({ color: x[1] > 0 ? 24435 : 11411474, side: Ge });
    this.mesh = new ke(g, W), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), u && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Xe(`${b[1].toFixed(4)}`), this.normalizedResult = x, this.textPosition = Ct([s, m]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(l), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class bn extends _e {
  constructor(s, m, d, l, b, x, u) {
    super();
    const M = b[0] * d / (b[0] + b[1]), A = b[0] * b[1] > 0;
    if (this.text = new Xe(`${b[0].toFixed(4)}`), this.text2 = new Xe(`${(b[1] * -1).toFixed(4)}`), this.normalizedResult = x, this.textPosition = Ot(s, m), this.text2Position = Ot(m, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(l), this.text2.rotation.setFromRotationMatrix(l), this.add(this.text, this.text2), A) {
      const P = new Lt().moveTo(0, 0).lineTo(0, x[0]).lineTo(M, 0).lineTo(0, 0), g = new Lt().moveTo(M, 0).lineTo(d, -x[1]).lineTo(d, 0).lineTo(M, 0), W = P.getPoints(), q = g.getPoints(), B = new ae().setFromPoints(W), re = new ae().setFromPoints(q), y = new Ae({ color: ot().resultOutline });
      this.lines = new Re(B, y), this.lines2 = new Re(re, y), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), this.lines2.rotation.setFromRotationMatrix(l), u && this.lines.rotateX(Math.PI / 2), u && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const te = new It(P), ne = new It(g), ue = new Te({ color: x[0] > 0 ? 24435 : 11411474, side: Ge }), N = new Te({ color: -x[1] > 0 ? 24435 : 11411474, side: Ge });
      this.mesh = new ke(te, ue), this.mesh2 = new ke(ne, N), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), this.mesh2.rotation.setFromRotationMatrix(l), u && this.mesh.rotateX(Math.PI / 2), u && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Lt().moveTo(0, 0).lineTo(0, x[0]).lineTo(d, -x[1]).lineTo(d, 0).lineTo(0, 0), g = P.getPoints(), W = new ae().setFromPoints(g);
      this.lines = new Re(W, new Ae({ color: ot().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), u && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const q = new It(P), B = new Te({ color: x[0] > 0 ? 24435 : 11411474, side: Ge });
      this.mesh = new ke(q, B), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), u && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(s) {
    var _a, _b;
    this.lines.scale.set(1, s * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text2.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * s), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    var _a, _b, _c, _d, _e2, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e2 = this.mesh2) == null ? void 0 : _e2.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var Pn = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Pn || {});
function wo(e, s, m, d) {
  const l = new _e(), b = { normals: Et, shearsY: Et, shearsZ: Et, torsions: Et, bendingsY: bn, bendingsZ: bn };
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, m.val, s.frameResults.val == "none") return;
    l.children.forEach((u) => u.dispose()), l.clear();
    const x = Pn[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[x]) == null ? void 0 : _b.forEach((u, M) => {
      var _a2, _b2;
      const A = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[M]) ?? [0, 1], P = m.rawVal[A[0]], g = m.rawVal[A[1]], W = new w(...g).distanceTo(new w(...P)), q = xo((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[x]), B = u == null ? void 0 : u.map((ne) => ne / (q === 0 ? 1 : q)), re = en(P, g), y = new b[x](P, g, W, re, u ?? [0, 0], B ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(x)), te = 0.05 * s.gridSize.rawVal;
      y.updateScale(te * d.rawVal), l.add(y);
    });
  }), L.derive(() => {
    if (d.val, s.frameResults.rawVal == "none") return;
    const x = 0.05 * s.gridSize.val;
    l.children.forEach((u) => u.updateScale(x * d.rawVal));
  }), L.derive(() => {
    l.visible = s.frameResults.val != "none";
  }), l;
}
function xo(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((m) => {
    const d = Math.max(...m ?? [0, 0]);
    d > s && (s = d);
  }), s;
}
class yo extends _e {
  constructor(s, m, d) {
    super();
    const l = m === tn.reactions;
    d[0] && (this.xText1 = new Xe(`${l ? "Fx" : "Dx"}: ` + d[0].toFixed(4))), d[3] && (this.xText2 = new Xe(`${l ? "Mx" : "Rx"}: ` + d[3].toFixed(4))), d[1] && (this.yText1 = new Xe(`${l ? "Fy" : "Dy"}: ` + d[1].toFixed(4))), d[4] && (this.yText2 = new Xe(`${l ? "My" : "Ry"}: ` + d[4].toFixed(4))), d[2] && (this.zText1 = new Xe(`${l ? "Fz" : "Dz"}: ` + d[2].toFixed(4))), d[5] && (this.zText2 = new Xe(`${l ? "Mz" : "Rz"}: ` + d[5].toFixed(4))), (d[0] || d[3]) && (this.xArrow = new rt(new w(1, 0, 0), new w(0, 0, 0), 1, 15637248, 0.3, 0.3)), (d[1] || d[4]) && (this.yArrow = new rt(new w(0, 1, 0), new w(0, 0, 0), 1, 15637248, 0.3, 0.3)), (d[2] || d[5]) && (this.zArrow = new rt(new w(0, 0, 1), new w(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(s) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(s, s, s), (_b = this.yArrow) == null ? void 0 : _b.scale.set(s, s, s), (_c = this.zArrow) == null ? void 0 : _c.scale.set(s, s, s), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * s, 0, 0), (_e2 = this.xText2) == null ? void 0 : _e2.position.set(1.3 * s, 0, 0.5 * s), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * s, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * s, 0.5 * s), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * s), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * s + 0.5 * s), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * s), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * s), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * s), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * s), (_n2 = this.zText1) == null ? void 0 : _n2.updateScale(0.4 * s), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * s);
  }
  dispose() {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e2 = this.xText2) == null ? void 0 : _e2.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var tn = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(tn || {});
function vo(e, s, m, d) {
  const l = new _e();
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    l.children.forEach((u) => u.dispose()), l.clear();
    const b = tn[s.nodeResults.rawVal], x = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[b]) == null ? void 0 : _b.forEach((u, M) => {
      const A = new yo(m.rawVal[M], b, u ?? [0, 0, 0, 0, 0, 0]);
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
function go({ drawingObj: e, gridObj: s, scene: m, getActiveCamera: d, controls: l, gridSize: b, derivedDisplayScale: x, rendererElm: u, viewerRender: M }) {
  const A = new Bn(), P = new Zn(), g = (n) => {
    const o = u.getBoundingClientRect(), r = n.clientX - o.left, t = n.clientY - o.top, p = o.width || 1, c = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const a = p / 2;
      if (r >= a) return P.x = (r - a) / a * 2 - 1, P.y = -(t / c) * 2 + 1, window.__hekatanSplitCamera ?? d();
      P.x = r / a * 2 - 1;
    } else P.x = r / p * 2 - 1;
    return P.y = -(t / c) * 2 + 1, d();
  }, W = new ke(new Ft(1e4, 1e4), new Te({ side: Ge, transparent: true, opacity: 0, depthWrite: false }));
  W.visible = true, W.frustumCulled = false, m.add(W);
  const q = (n, o, r) => {
    const t = new ke(new Ft(1e4, 1e4), new Te({ side: Ge, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, r), t.visible = false, t.frustumCulled = false, m.add(t), t;
  }, B = q(Math.PI / 2, 0, 0), re = q(0, Math.PI / 2, 0), y = () => {
    if (B.visible = !!window.__hekatanGridPlaneXZ, re.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && Y.visible) {
      const r = A.intersectObjects([Y, G, Q], false);
      if (r.length > 0) return r;
    }
    const o = [W];
    return B.visible && o.push(B), re.visible && o.push(re), Je.visible && ut.length > 0 && o.push(...ut), A.intersectObjects(o, false);
  }, te = new Xt(new ae(), new Yt()), ne = new Xt(new ae(), new Yt({ color: "gray", sizeAttenuation: false, size: 6 })), ue = new Xt(new ae(), new Yt({ color: "orange", size: 0.1 }));
  m.add(ue);
  const N = document.createElement("input");
  N.id = "hk-rubber-label", N.type = "text", N.spellcheck = false, N.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, N.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(N);
  let V = null, I = null, C = false;
  const S = new w(), T = (n, o, r, t, p, c) => {
    const _ = t - n, a = p - o, i = c - r, f = Math.hypot(_, a, i);
    if (f < 0.01) {
      N.style.display = "none";
      return;
    }
    V = [n, o, r], I = [_ / f, a / f, i / f], S.set((n + t) / 2, (o + p) / 2, (r + c) / 2), S.project(d());
    const k = u.getBoundingClientRect(), h = k.left + (S.x * 0.5 + 0.5) * k.width, v = k.top + (-S.y * 0.5 + 0.5) * k.height;
    if (N.style.left = h + "px", N.style.top = v + "px", N.style.display = "block", !C) {
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
    N.style.display = "none", V = null, I = null, C = false, document.activeElement === N && N.blur();
  }, E = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Ye = n, ce(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), N.blur();
      return;
    }
    if (!V || !I || !e.polylines) return;
    let r = I[0], t = I[1], p = I[2];
    we === "x" ? (r = Math.sign(r) || 1, t = 0, p = 0) : we === "y" ? (r = 0, t = Math.sign(t) || 1, p = 0) : we === "z" && (r = 0, t = 0, p = Math.sign(p) || 1);
    const c = V[0] + r * n, _ = V[1] + t * n, a = V[2] + p * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [c, _, a]];
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
      const p = o.split("<").map((c) => parseFloat(c.trim()));
      if (p.some(isNaN)) return null;
      if (p.length === 2) {
        const [c, _] = p;
        return r ? { kind: "relPolar", L: c, ang: _ } : { kind: "absPolar", L: c, ang: _ };
      }
      if (p.length === 3 && r) {
        const [c, _, a] = p;
        return { kind: "relSpherical", L: c, az: _, el: a };
      }
      return null;
    }
    if (o.includes(",")) {
      const p = o.split(",").map((i) => parseFloat(i.trim()));
      if (p.some(isNaN)) return null;
      const [c, _, a = 0] = p;
      return r ? { kind: "relCart", dx: c, dy: _, dz: a } : { kind: "absCart", x: c, y: _, z: a };
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
      if (C = false, r.kind === "length") E(r.L), ce(`\u270F DDE ${r.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = R(r);
        if (!t) return;
        H(t);
        const p = r.kind;
        ce(`\u270F ${p} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), C = false, N.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!C && N.style.display === "block") try {
          N.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (C = true);
  }), window.addEventListener("keydown", (n) => {
    if (!V || !I || document.activeElement === N) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (N.value = n.key, N.focus(), N.setSelectionRange(1, 1), n.preventDefault());
  });
  const Z = document.createElement("div");
  Z.id = "hk-coord-readout", Z.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", Z.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(Z);
  const F = new Re(new ae().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), new St({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  F.frustumCulled = false, F.visible = false, m.add(F);
  const D = new _e();
  D.frustumCulled = false, D.visible = false, m.add(D);
  const le = (n) => {
    const o = new ae().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), r = new St({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Re(o, r);
  }, O = le(16711680), se = le(65280), de = le(35071);
  D.add(O, se, de);
  const he = (n) => {
    const o = new ae().setFromPoints([new w(0, 0, 0), new w(0, 0, 0), new w(0, 0, 0), new w(0, 0, 0)]), r = new Ae({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new Sn(o, r);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, pe = he(3462041), me = he(16724804), be = he(6333946), Se = new _e();
  Se.frustumCulled = false, Se.visible = false, m.add(Se), Se.add(pe, me, be);
  const Le = (n) => {
    const o = new Ft(1, 1), r = new Te({ color: n, transparent: true, opacity: 0.06, side: Ge, depthWrite: false }), t = new ke(o, r);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Y = Le(3462041), G = Le(16724804), Q = Le(6333946);
  Se.add(Y, G, Q);
  const j = (n, o, r, t) => {
    n.scale.set(2 * t, 2 * t, 1), r === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : r === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, fe = document.createElement("div");
  fe.id = "hk-refplane-badge", fe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(fe), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Se.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = r[r.length - 1] ?? [], p = e.points.rawVal ?? [], c = o && o.length === 3 ? o : t.length > 0 && p[t[t.length - 1]] ? p[t[t.length - 1]] : [0, 0, 0], _ = window.__hekatanOrthoExt ?? 8;
      ve(pe, c, "xy", _), ve(me, c, "xz", _), ve(be, c, "yz", _), j(Y, c, "xy", _), j(G, c, "xz", _), j(Q, c, "yz", _), Y.material.opacity = 0.1, G.material.opacity = 0.1, Q.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    M();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !Se.visible) {
      M();
      return;
    }
    const o = window.__hekatanOrthoAnchor, r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = r[r.length - 1] ?? [], p = e.points.rawVal ?? [], c = o && o.length === 3 ? o : t.length > 0 && p[t[t.length - 1]] ? p[t[t.length - 1]] : [0, 0, 0];
    ve(pe, c, "xy", n), ve(me, c, "xz", n), ve(be, c, "yz", n), j(Y, c, "xy", n), j(G, c, "xz", n), j(Q, c, "yz", n), M();
  };
  const ye = (n) => {
    if (Y.material.opacity = n === "xy" ? 0.22 : 0.04, G.material.opacity = n === "xz" ? 0.22 : 0.04, Q.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const p = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      fe.style.background = p.bg, fe.style.color = p.text, fe.textContent = `\u25A6 Plano ${n.toUpperCase()}`, fe.style.display = "block";
    } else fe.style.display = "none";
  }, ve = (n, o, r, t) => {
    let p;
    r === "xy" ? p = [new w(o[0] - t, o[1] - t, o[2]), new w(o[0] + t, o[1] - t, o[2]), new w(o[0] + t, o[1] + t, o[2]), new w(o[0] - t, o[1] + t, o[2]), new w(o[0] - t, o[1] - t, o[2])] : r === "xz" ? p = [new w(o[0] - t, o[1], o[2] - t), new w(o[0] + t, o[1], o[2] - t), new w(o[0] + t, o[1], o[2] + t), new w(o[0] - t, o[1], o[2] + t), new w(o[0] - t, o[1], o[2] - t)] : p = [new w(o[0], o[1] - t, o[2] - t), new w(o[0], o[1] + t, o[2] - t), new w(o[0], o[1] + t, o[2] + t), new w(o[0], o[1] - t, o[2] + t), new w(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(p);
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
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), cn(), n.preventDefault();
    } else if (n.key === "F8") {
      n.preventDefault(), window.__hekatanOrthoMode = !window.__hekatanOrthoMode;
      const t = window.__hekatanOrthoMode;
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
      let p = document.getElementById("hk-ortho-frame");
      p || (p = document.createElement("div"), p.id = "hk-ortho-frame", p.style.cssText = ["position:fixed", "inset:0", "z-index:99996", "border:3px solid rgba(34,211,238,0.85)", "box-shadow:inset 0 0 24px rgba(34,211,238,0.35)", "pointer-events:none"].join(";") + ";", document.body.appendChild(p)), p.style.display = t ? "block" : "none";
      let c = document.getElementById("hk-ortho-badge");
      c || (c = document.createElement("div"), c.id = "hk-ortho-badge", c.style.cssText = ["position:fixed", "top:10px", "left:50%", "transform:translateX(-50%)", "z-index:99998", "padding:6px 16px", "background:rgba(34,211,238,0.95)", "color:#0a1f24", "border-radius:6px", "border:2px solid rgba(8,145,178,1)", "box-shadow:0 4px 16px rgba(34,211,238,0.5)", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "pointer-events:none", "white-space:nowrap"].join(";") + ";", c.textContent = "\u22A5 ORTO ON (F8)", document.body.appendChild(c)), c.style.display = t ? "block" : "none";
    }
  });
  const ct = new w(), dt = new w(), xt = new w(), Vn = (n) => {
    if (!we) return null;
    const o = n[0], r = n[1], t = n[2];
    return we === "x" ? (ct.set(o - 1e4, r, t), dt.set(o + 1e4, r, t)) : we === "y" ? (ct.set(o, r - 1e4, t), dt.set(o, r + 1e4, t)) : (ct.set(o, r, t - 1e4), dt.set(o, r, t + 1e4)), A.ray.distanceSqToSegment(ct, dt, null, xt), xt;
  };
  window.__hekatanProjectOnAxis = Vn;
  const De = new Re(new ae().setFromPoints([new w(0, 0, 0), new w(0, 0, 0)]), new Ae({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  De.renderOrder = 998, De.frustumCulled = false, De.visible = false, m.add(De);
  let je = -1, pt = -1, et = -1;
  const Ie = /* @__PURE__ */ new Set();
  window.__hekatanSelection = Ie;
  const Qe = new Re(new ae().setFromPoints([new w(), new w()]), new Ae({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Qe.renderOrder = 997, Qe.frustumCulled = false, Qe.visible = false, m.add(Qe);
  const We = new ke(new kt(0.02, 12, 12), new Te({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  We.renderOrder = 998, We.visible = false, m.add(We);
  const zn = () => {
    if (!We.visible) return;
    const o = d().position.distanceTo(We.position), r = Math.max(0.05, o / 10);
    We.scale.setScalar(r);
  }, tt = new _e();
  tt.frustumCulled = false, m.add(tt);
  const Vt = 2282478;
  let nt = null;
  const Fn = (n, o, r, t) => {
    if (!e.points) return -1;
    const p = e.points.rawVal;
    let c = -1, _ = t;
    for (let a = 0; a < p.length; a++) {
      const i = p[a];
      if (!i) continue;
      const f = Math.hypot(n - i[0], o - i[1], r - i[2]);
      f < _ && (_ = f, c = a);
    }
    return c;
  }, yt = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; tt.children.length; ) {
      const p = tt.children.pop();
      (_b = (_a = p.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = p.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const p of Ie) {
      const [c, ..._] = p.split(":");
      if (c === "pt") {
        const a = n[+_[0]];
        if (!a) continue;
        const i = new ke(new kt(0.07, 12, 12), new Te({ color: Vt, transparent: true, opacity: 0.9, depthTest: false }));
        i.position.set(a[0], a[1], a[2]), i.renderOrder = 999, tt.add(i);
      } else if (c === "seg") {
        const a = o[+_[0]], i = n[a == null ? void 0 : a[+_[1]]], f = n[a == null ? void 0 : a[+_[1] + 1]];
        if (!i || !f) continue;
        const k = new ae().setFromPoints([new w(i[0], i[1], i[2]), new w(f[0], f[1], f[2])]), h = new Re(k, new Ae({ color: Vt, transparent: true, opacity: 0.95, depthTest: false }));
        h.renderOrder = 999, tt.add(h);
      } else if (c === "poly") {
        const i = o[+_[0]].map((h) => {
          const v = n[h];
          return v ? new w(v[0], v[1], v[2]) : null;
        }).filter(Boolean);
        if (i.length < 2) continue;
        const f = new ae().setFromPoints(i), k = new Re(f, new Ae({ color: Vt, transparent: true, opacity: 0.95, depthTest: false }));
        k.renderOrder = 999, tt.add(k);
      } else if (c === "aux") {
        const a = t[+_[0]];
        if (!a || a.length !== 6) continue;
        const i = new ae().setFromPoints([new w(a[0], a[1], a[2]), new w(a[3], a[4], a[5])]), f = new Re(i, new Ae({ color: Vt, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, tt.add(f);
      }
    }
    M();
  };
  window.__hekatanRefreshSelection = yt, window.__hekatanClearSelection = () => {
    Ie.clear(), yt();
  };
  const Rt = (n, o, r, t, p, c, _, a, i) => {
    const f = _ - t, k = a - p, h = i - c, v = f * f + k * k + h * h;
    if (v < 1e-12) return Math.hypot(n - t, o - p, r - c);
    let z = ((n - t) * f + (o - p) * k + (r - c) * h) / v;
    z = Math.max(0, Math.min(1, z));
    const U = t + z * f, oe = p + z * k, J = c + z * h;
    return Math.hypot(n - U, o - oe, r - J);
  }, Dt = (n, o, r, t) => {
    if (!e.polylines) return null;
    const p = e.polylines.rawVal, c = e.points.rawVal;
    let _ = -1, a = -1, i = t;
    for (let f = 0; f < p.length; f++) {
      const k = p[f];
      for (let h = 0; h < k.length - 1; h++) {
        const v = c[k[h]], z = c[k[h + 1]];
        if (!v || !z) continue;
        const U = Rt(n, o, r, v[0], v[1], v[2], z[0], z[1], z[2]);
        U < i && (i = U, _ = f, a = h);
      }
    }
    return _ >= 0 ? { polyIdx: _, segIdx: a, dist: i } : null;
  }, on = (n, o, r, t) => {
    const p = window.__hekatanDrawingAuxLines, c = (p == null ? void 0 : p.rawVal) ?? (p == null ? void 0 : p.val) ?? p ?? [];
    let _ = -1, a = t;
    for (let i = 0; i < c.length; i++) {
      const f = c[i];
      if (!f || f.length !== 6) continue;
      const k = Rt(n, o, r, f[0], f[1], f[2], f[3], f[4], f[5]);
      k < a && (a = k, _ = i);
    }
    return _;
  }, An = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      De.visible = false;
      return;
    }
    De.geometry.setFromPoints([new w(t[0], t[1], t[2]), new w(t[3], t[4], t[5])]), De.visible = true;
  }, Tn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const r = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!r || r.length < 2) {
      De.visible = false;
      return;
    }
    const p = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, c = [];
    if (p || o < 0 || o >= r.length - 1) for (const _ of r) {
      const a = t[_];
      a && c.push(new w(a[0], a[1], a[2]));
    }
    else {
      const _ = t[r[o]], a = t[r[o + 1]];
      _ && c.push(new w(_[0], _[1], _[2])), a && c.push(new w(a[0], a[1], a[2]));
    }
    De.geometry.setFromPoints(c), De.visible = true;
  }, zt = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const r = o.filter((i, f) => f !== n), t = /* @__PURE__ */ new Set();
    for (const i of r) for (const f of i) t.add(f);
    const p = e.points.rawVal, c = /* @__PURE__ */ new Map(), _ = [];
    for (let i = 0; i < p.length; i++) t.has(i) && (c.set(i, _.length), _.push(p[i]));
    const a = r.map((i) => i.map((f) => c.get(f)).filter((f) => f !== void 0));
    e.points.val = _, e.polylines.val = a, e.areas && (e.areas.val = e.areas.rawVal.filter((i) => i !== n).map((i) => i > n ? i - 1 : i)), De.visible = false, je = -1, pt = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, En = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const r = e.polylines.rawVal;
    if (n < 0 || n >= r.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      zt(n);
      return;
    }
    const p = r[n];
    if (o < 0 || o >= p.length - 1) return;
    if (p.length === 2) {
      zt(n);
      return;
    }
    let c;
    o === 0 ? c = [p.slice(1)] : o === p.length - 2 ? c = [p.slice(0, -1)] : c = [p.slice(0, o + 1), p.slice(o + 1)];
    const _ = [...r.slice(0, n), ...c, ...r.slice(n + 1)], a = /* @__PURE__ */ new Set();
    for (const v of _) for (const z of v) a.add(z);
    const i = e.points.rawVal, f = /* @__PURE__ */ new Map(), k = [];
    for (let v = 0; v < i.length; v++) a.has(v) && (f.set(v, k.length), k.push(i[v]));
    const h = _.map((v) => v.map((z) => f.get(z)).filter((z) => z !== void 0));
    if (e.points.val = k, e.polylines.val = h, e.areas) {
      const v = c.length - 1;
      e.areas.val = e.areas.rawVal.map((z) => z > n ? z + v : z);
    }
    De.visible = false, je = -1, pt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  te.geometry.setAttribute("position", new Ne(e.points.rawVal.flat(), 3)), te.geometry.computeBoundingSphere(), te.frustumCulled = false, ne.frustumCulled = false, m.add(ne), W.position.set(0, 0, 0), W.rotateX(Math.PI / 2), W.geometry.rotateX(Math.PI / 2), W.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, r) => {
    if (e.points.val = [...e.points.rawVal, [n, o, r]], e.polylines) {
      const t = e.polylines.rawVal, p = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...p, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const n = e.polylines.rawVal;
    ((_a = n[n.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...n, []]);
  }, window.__hekatanDrawCircle = (n, o, r, t, p = window.__hekatanArcSegs ?? 12, c = "xy") => {
    var _a;
    const _ = Math.max(4, Math.round(p)), a = e.points.rawVal.length, i = [];
    for (let f = 0; f < _; f++) {
      const k = 2 * Math.PI * f / _, h = t * Math.cos(k), v = t * Math.sin(k);
      let z;
      c === "xy" ? z = [n + h, o + v, r] : c === "xz" ? z = [n + h, o, r + v] : z = [n, o + h, r + v], i.push(z);
    }
    if (e.points.val = [...e.points.rawVal, ...i], e.polylines) {
      const f = [...i.map((h, v) => a + v), a], k = e.polylines.rawVal;
      ((_a = k[k.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...k, f, []] : e.polylines.val = [...k.slice(0, -1), f, []];
    }
  }, window.__hekatanDrawArc = (n, o, r, t = window.__hekatanArcSegs ?? 12) => {
    const p = Math.max(4, Math.round(t)), c = new w(...n), _ = new w(...o), a = new w(...r), i = new w().subVectors(_, c), f = new w().subVectors(a, c), k = new w().crossVectors(i, f).normalize(), h = new w().addVectors(c, _).multiplyScalar(0.5), v = new w().addVectors(_, a).multiplyScalar(0.5), z = new w().crossVectors(i, k).normalize(), U = new w().crossVectors(new w().subVectors(a, _), k).normalize(), oe = new w().subVectors(v, h), J = z.x * U.y - z.y * U.x;
    let K;
    if (Math.abs(J) > 1e-9) {
      const Ve = (oe.x * U.y - oe.y * U.x) / J;
      K = new w().addVectors(h, z.clone().multiplyScalar(Ve));
    } else K = h.clone();
    const ee = c.distanceTo(K), ie = new w().subVectors(c, K), Pe = new w().subVectors(a, K), Ce = Math.acos(Math.max(-1, Math.min(1, ie.dot(Pe) / (ee * ee)))), $e = e.points.rawVal.length, Fe = [], He = k.clone();
    for (let Ve = 0; Ve <= p; Ve++) {
      const Ue = Ve / p, qe = Ce * Ue, mt = new pn().setFromAxisAngle(He, qe), lt = ie.clone().applyQuaternion(mt).add(K);
      Fe.push([lt.x, lt.y, lt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Fe], e.polylines) {
      const Ve = Fe.map((qe, mt) => $e + mt), Ue = e.polylines.rawVal;
      e.polylines.val = [...Ue.slice(0, -1), Ve, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, r = 1, t = 6, p = 6) => {
    const c = Math.min(n[0], o[0]), _ = Math.max(n[0], o[0]), a = Math.min(n[1], o[1]), i = Math.max(n[1], o[1]), f = (n[2] + o[2]) / 2, k = _ - c, h = i - a, v = Math.min(r, k / 2 - 0.01, h / 2 - 0.01);
    if (v <= 0) return;
    const z = e.points.rawVal.length, U = [], oe = [], J = (K, ee) => {
      U.push([K, ee, f]), oe.push(z + U.length - 1);
    };
    for (let K = 0; K <= p; K++) J(c + v + (k - 2 * v) * K / p, a);
    for (let K = 1; K <= t; K++) {
      const ee = -Math.PI / 2 + Math.PI / 2 * K / t;
      J(_ - v + v * Math.cos(ee), a + v + v * Math.sin(ee));
    }
    for (let K = 1; K <= p; K++) J(_, a + v + (h - 2 * v) * K / p);
    for (let K = 1; K <= t; K++) {
      const ee = 0 + Math.PI / 2 * K / t;
      J(_ - v + v * Math.cos(ee), i - v + v * Math.sin(ee));
    }
    for (let K = 1; K <= p; K++) J(_ - v - (k - 2 * v) * K / p, i);
    for (let K = 1; K <= t; K++) {
      const ee = Math.PI / 2 + Math.PI / 2 * K / t;
      J(c + v + v * Math.cos(ee), i - v + v * Math.sin(ee));
    }
    for (let K = 1; K <= p; K++) J(c, i - v - (h - 2 * v) * K / p);
    for (let K = 1; K <= t; K++) {
      const ee = Math.PI + Math.PI / 2 * K / t;
      J(c + v + v * Math.cos(ee), a + v + v * Math.sin(ee));
    }
    if (oe.push(z), e.points.val = [...e.points.rawVal, ...U], e.polylines) {
      const K = e.polylines.rawVal;
      e.polylines.val = [...K.slice(0, -1), oe, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const r = e.points.rawVal.length, t = n[0], p = n[1], c = n[2], _ = o[0], a = o[1], i = o[2];
    let f;
    if (Math.abs(c - i) < 1e-6 ? f = [[t, p, c], [_, p, c], [_, a, c], [t, a, c]] : Math.abs(p - a) < 1e-6 ? f = [[t, p, c], [_, p, c], [_, p, i], [t, p, i]] : f = [[t, p, c], [t, a, c], [t, a, i], [t, p, i]], e.points.val = [...e.points.rawVal, ...f], e.polylines) {
      const k = [r, r + 1, r + 2, r + 3, r], h = e.polylines.rawVal;
      e.polylines.val = [...h.slice(0, -1), k, []];
    }
  };
  const Ke = new _e();
  Ke.visible = false, m.add(Ke), window.__hekatanShowAxes = (n, o, r = 12, t = 2) => {
    var _a, _b;
    for (; Ke.children.length; ) {
      const k = Ke.children.pop();
      (_a = k.geometry) == null ? void 0 : _a.dispose(), (_b = k.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const p = Math.min(...o) - t, c = Math.max(...o) + t, _ = Math.min(...n) - t, a = Math.max(...n) + t, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", f = (k, h, v, z, U) => {
      const oe = document.createElement("canvas");
      oe.width = 64, oe.height = 32;
      const J = oe.getContext("2d");
      J.fillStyle = U, J.font = "bold 22px sans-serif", J.textAlign = "center", J.fillText(k, 32, 26);
      const K = new un(oe), ee = new hn({ map: K, transparent: true }), ie = new fn(ee);
      return ie.position.set(h, v, z), ie.scale.set(1.2, 0.6, 1), ie;
    };
    n.forEach((k, h) => {
      const v = h < i.length ? i[h] : `X${h}`, z = new ae().setFromPoints([new w(k, p, 0), new w(k, c, 0), new w(k, p, 0), new w(k, p, r)]), U = new St({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), oe = new wt(z, U);
      oe.computeLineDistances(), Ke.add(oe), Ke.add(f(v, k, p - 0.5, 0, "#60a5fa")), Ke.add(f(v, k, c + 0.5, 0, "#60a5fa"));
    }), o.forEach((k, h) => {
      const v = `${h + 1}`, z = new ae().setFromPoints([new w(_, k, 0), new w(a, k, 0), new w(_, k, 0), new w(_, k, r)]), U = new St({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), oe = new wt(z, U);
      oe.computeLineDistances(), Ke.add(oe), Ke.add(f(v, _ - 0.5, k, 0, "#fb7185")), Ke.add(f(v, a + 0.5, k, 0, "#fb7185"));
    }), Ke.visible = true, M();
  }, window.__hekatanHideAxes = () => {
    Ke.visible = false, M();
  };
  const Je = new _e();
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
    const p = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((c, _) => {
      const a = p[_ % p.length], i = o / 2, f = [new w(r - i, t - i, c), new w(r + i, t - i, c), new w(r + i, t + i, c), new w(r - i, t + i, c), new w(r - i, t - i, c)], k = new ae().setFromPoints(f), h = new Ae({ color: a, transparent: true, opacity: 0.55 });
      Je.add(new Re(k, h));
      const v = document.createElement("canvas");
      v.width = 128, v.height = 32;
      const z = v.getContext("2d");
      z.fillStyle = `#${a.toString(16).padStart(6, "0")}`, z.font = "bold 18px sans-serif", z.fillText(`Z = ${c} m`, 4, 22);
      const U = new un(v), oe = new hn({ map: U, transparent: true }), J = new fn(oe);
      J.position.set(r - i - 1.5, t - i - 1.5, c), J.scale.set(2.5, 0.6, 1), Je.add(J);
      const K = new Ft(1e4, 1e4), ee = new Te({ visible: false, side: Ge }), ie = new ke(K, ee);
      ie.position.set(0, 0, c), ie.frustumCulled = false, ie.userData = { refPlaneZ: c }, m.add(ie), ut.push(ie);
    }), Je.visible = true, M();
  }, window.__hekatanHideRefPlanes = () => {
    Je.visible = false, ut.forEach((n) => {
      n.visible = false;
    }), M();
  };
  const vt = new _e();
  vt.frustumCulled = false, m.add(vt);
  const Xn = () => {
    var _a, _b, _c, _d;
    for (; vt.children.length; ) {
      const r = vt.children.pop();
      (_b = (_a = r.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = r.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const r of o) {
      if (r.length !== 6) continue;
      const t = new ae().setFromPoints([new w(r[0], r[1], r[2]), new w(r[3], r[4], r[5])]), p = new St({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), c = new Re(t, p);
      c.computeLineDistances(), vt.add(c);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Xn(), M());
  });
  const ht = new _e();
  ht.frustumCulled = false, m.add(ht);
  const sn = () => {
    var _a, _b, _c, _d;
    for (; ht.children.length; ) {
      const r = ht.children.pop();
      (_b = (_a = r.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = r.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const r of o) {
      if (!r || r.length !== 3) continue;
      const t = new ke(new kt(0.025, 12, 12), new Te({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(r[0], r[1], r[2]), t.renderOrder = 996;
      const c = d().position.distanceTo(t.position);
      t.scale.setScalar(Math.max(0.05, c / 10)), ht.add(t);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, sn(), M());
  }), l.addEventListener("change", () => {
    const n = d();
    ht.children.forEach((o) => {
      const r = n.position.distanceTo(o.position);
      o.scale.setScalar(Math.max(0.05, r / 10));
    });
  }), window.__hekatanRenderAuxPoints = sn;
  const ze = new _e(), Yn = new ke(new kt(0.02, 12, 12), new Te({ color: 16724804, transparent: true, opacity: 0.95 })), Ln = new ke(new kt(0.04, 12, 12), new Te({ color: 16498468, transparent: true, opacity: 0.25, depthWrite: false }));
  ze.add(Yn, Ln);
  const ft = 0.15, Bt = (n, o, r) => {
    const t = new ae().setFromPoints([new w(...n), new w(...o)]);
    return new Re(t, new Ae({ color: r, transparent: true, opacity: 0.7 }));
  };
  ze.add(Bt([-ft, 0, 0], [ft, 0, 0], 16711680)), ze.add(Bt([0, -ft, 0], [0, ft, 0], 65280)), ze.add(Bt([0, 0, -ft], [0, 0, ft], 35071)), ze.visible = false, ze.frustumCulled = false, m.add(ze);
  const an = 10, Zt = () => {
    if (!ze.visible) return;
    const o = d().position.distanceTo(ze.position), r = Math.max(0.05, o / an);
    ze.scale.setScalar(r);
  };
  l.addEventListener("change", () => {
    if (Zt(), We.visible) {
      const o = d().position.distanceTo(We.position);
      We.scale.setScalar(Math.max(0.05, o / 10));
    }
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = d().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / an));
    }
  }), window.__hekatanShowSnap = (n, o, r) => {
    ze.position.set(n, o, r), ze.visible = true, Zt(), M();
  }, window.__hekatanHideSnap = () => {
    ze.visible = false, M();
  }, u.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(P, o);
    const r = y();
    if (r.length) {
      const t = r[0].point, p = (window.__hekatanSnap2D ?? 0.5) * 1.2, c = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, p);
      if (c) ln(c.type, c.x, c.y, c.z), ze.position.set(c.x, c.y, c.z), ze.visible = true, t.set(c.x, c.y, c.z);
      else {
        Wt();
        const k = window.__hekatanSnapEnabled !== false, h = window.__hekatanSnap2D ?? 0.5;
        k && h > 0 && (t.x = Math.round(t.x / h) * h, t.y = Math.round(t.y / h) * h, t.z = Math.round(t.z / h) * h), ze.position.copy(t), ze.visible = true;
      }
      Zt();
      const _ = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (_ === "select" || !_) {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, h = Fn(t.x, t.y, t.z, k), v = Dt(t.x, t.y, t.z, k), z = on(t.x, t.y, t.z, k);
        if (h >= 0) {
          const U = e.points.rawVal[h];
          We.position.set(U[0], U[1], U[2]), We.visible = true, zn(), Qe.visible = false, nt = { kind: "pt", a: h };
        } else if (v) {
          const U = e.points.rawVal, oe = e.polylines.rawVal[v.polyIdx], J = U[oe[v.segIdx]], K = U[oe[v.segIdx + 1]];
          Qe.geometry.setFromPoints([new w(J[0], J[1], J[2]), new w(K[0], K[1], K[2])]), Qe.visible = true, We.visible = false, nt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(v.polyIdx)) ?? false ? { kind: "poly", a: v.polyIdx } : { kind: "seg", a: v.polyIdx, b: v.segIdx };
        } else if (z >= 0) {
          const oe = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[z];
          oe && (Qe.geometry.setFromPoints([new w(oe[0], oe[1], oe[2]), new w(oe[3], oe[4], oe[5])]), Qe.visible = true, We.visible = false, nt = { kind: "aux", a: z });
        } else Qe.visible = false, We.visible = false, nt = null;
        if (Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block", nt) {
          const U = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          Z.textContent = `\u{1F5B1} Click para seleccionar ${U[nt.kind]}`;
        } else Z.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        F.visible = false, D.visible = false, M();
        return;
      }
      if (_ === "delete") {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, h = Dt(t.x, t.y, t.z, k), v = on(t.x, t.y, t.z, k);
        let z = false;
        if (v >= 0) if (!h) z = true;
        else {
          const U = window.__hekatanDrawingAuxLines, J = ((U == null ? void 0 : U.rawVal) ?? (U == null ? void 0 : U.val) ?? U ?? [])[v];
          Rt(t.x, t.y, t.z, J[0], J[1], J[2], J[3], J[4], J[5]) < h.dist && (z = true);
        }
        if (z ? (et = v, je = -1, pt = -1, An(v)) : h ? (je = h.polyIdx, pt = h.segIdx, et = -1, Tn(h.polyIdx, h.segIdx)) : (je = -1, pt = -1, et = -1, De.visible = false), F.visible = false, D.visible = false, X(), Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block", z) Z.textContent = `\u{1F5D1} Click para borrar l\xEDnea auxiliar #${et + 1}`;
        else if (h) {
          const U = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(h.polyIdx)) ?? false;
          Z.textContent = U ? `\u{1F5D1} Click para borrar \xE1rea #${h.polyIdx + 1} completa` : `\u{1F5D1} Click para borrar segmento ${h.segIdx + 1} de polil\xEDnea #${h.polyIdx + 1}`;
        } else Z.textContent = "\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para resaltarla";
        M();
        return;
      } else De.visible = false, je = -1, et = -1;
      Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block";
      const a = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], i = a[a.length - 1] ?? [], f = e.points.rawVal ?? [];
      if (i.length > 0 && f[i[i.length - 1]]) {
        const k = i[i.length - 1], h = f[k], v = !!window.__hekatanOrthoMode;
        let z = we;
        if (!z && v) {
          const Fe = Math.abs(t.x - h[0]), He = Math.abs(t.y - h[1]), Ve = Math.abs(t.z - h[2]), Ue = (_k = r[0]) == null ? void 0 : _k.object;
          let qe = null;
          Ue === Y ? qe = "xy" : Ue === G ? qe = "xz" : Ue === Q && (qe = "yz"), qe === "xy" ? z = Fe >= He ? "x" : "y" : qe === "xz" ? z = Fe >= Ve ? "x" : "z" : qe === "yz" ? z = He >= Ve ? "y" : "z" : z = Fe >= He && Fe >= Ve ? "x" : He >= Ve ? "y" : "z";
        }
        if (z) {
          const Fe = h[0], He = h[1], Ve = h[2];
          z === "x" ? t.set(t.x, He, Ve) : z === "y" ? t.set(Fe, t.y, Ve) : t.set(Fe, He, t.z);
          const Ue = !!we, mt = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[z];
          ge.style.background = "rgba(15,23,42,0.92)", ge.style.color = mt, ge.style.border = `1.5px solid ${mt}`;
          const lt = (_l = r[0]) == null ? void 0 : _l.object;
          let _t = null;
          lt === Y ? _t = "xy" : lt === G ? _t = "xz" : lt === Q && (_t = "yz");
          const dn = _t ? ` (plano ${_t.toUpperCase()})` : "";
          ge.textContent = Ue ? `\u{1F512} LOCK ${z.toUpperCase()}${dn}` : `\u22A5 ORTO ${z.toUpperCase()}${dn}`, ge.style.left = n.clientX + 20 + "px", ge.style.top = n.clientY + 18 + "px", ge.style.transform = "none", ge.style.display = "block";
        } else we || (ge.style.display = "none");
        const U = Math.hypot(t.x - h[0], t.y - h[1], t.z - h[2]), oe = Math.atan2(t.y - h[1], t.x - h[0]) * 180 / Math.PI;
        Z.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)} | \u0394L=${U.toFixed(2)}m ${oe.toFixed(0)}\xB0`, F.geometry.setFromPoints([new w(h[0], h[1], h[2]), new w(t.x, t.y, t.z)]), (_m = F.computeLineDistances) == null ? void 0 : _m.call(F), F.visible = true, T(h[0], h[1], h[2], t.x, t.y, t.z);
        const J = window.__hekatanOrthoExt ?? 8, K = window.__hekatanShowOrthoPlanes !== false;
        Se.visible = K, K || ye(null), K && (ve(pe, h, "xy", J), ve(me, h, "xz", J), ve(be, h, "yz", J), j(Y, h, "xy", J), j(G, h, "xz", J), j(Q, h, "yz", J));
        const ee = K ? A.intersectObjects([Y, G, Q], false) : [];
        let ie = null;
        if (ee.length > 0) {
          const Fe = ee[0].object;
          Fe === Y ? ie = "xy" : Fe === G ? ie = "xz" : Fe === Q && (ie = "yz");
        }
        ye(ie), ie && (fe.style.left = n.clientX + "px", fe.style.top = n.clientY + "px"), O.geometry.setFromPoints([new w(h[0] - J, h[1], h[2]), new w(h[0] + J, h[1], h[2])]), (_n2 = O.computeLineDistances) == null ? void 0 : _n2.call(O), se.geometry.setFromPoints([new w(h[0], h[1] - J, h[2]), new w(h[0], h[1] + J, h[2])]), (_o2 = se.computeLineDistances) == null ? void 0 : _o2.call(se), de.geometry.setFromPoints([new w(h[0], h[1], h[2] - J), new w(h[0], h[1], h[2] + J)]), (_p = de.computeLineDistances) == null ? void 0 : _p.call(de), D.visible = true;
        const Pe = O.material, Ce = se.material, $e = de.material;
        z === "x" ? (Pe.opacity = 0.95, Ce.opacity = 0.1, $e.opacity = 0.1) : z === "y" ? (Pe.opacity = 0.1, Ce.opacity = 0.95, $e.opacity = 0.1) : z === "z" ? (Pe.opacity = 0.1, Ce.opacity = 0.1, $e.opacity = 0.95) : (Pe.opacity = 0.5, Ce.opacity = 0.5, $e.opacity = 0.5);
      } else Z.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`, F.visible = false, D.visible = false, X();
      M();
    } else Wt(), Z.style.display = "none", ze.visible = false, F.visible = false, D.visible = false, X(), M();
  }), L.derive(() => {
    e.gridTarget && (bo(s, { position: new w(...e.gridTarget.val.position), quaternion: new pn().setFromEuler(new mn(...e.gridTarget.val.rotation)) }, M), W.position.set(...e.gridTarget.val.position), W.quaternion.setFromEuler(new mn(...e.gridTarget.val.rotation)), W.updateMatrixWorld());
  }), L.derive(() => {
    te.geometry.setAttribute("position", new Ne(e.points.val.flat(), 3)), te.geometry.computeBoundingSphere();
  }), L.derive(() => {
    const n = 0.05 * b * 0.5 * x.val;
    A.params.Points.threshold = 0.4 * n;
  }), L.derive(() => {
    var _a;
    const n = e.points.val ?? [], r = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const c of r) {
      const [_, a, i] = n[c];
      t.push(_, a, i);
    }
    const p = new ae();
    p.setAttribute("position", new Ne(t, 3)), ue.geometry.dispose(), ue.geometry = p;
  });
  let Nt = false, at = 0;
  u.addEventListener("pointerdown", () => {
    Nt = true;
  }), u.addEventListener("pointerup", () => {
    Nt = false;
  }), u.addEventListener("pointermove", () => {
    Nt && at++;
  });
  const Be = document.createElement("div");
  Be.id = "hk-window-select", Be.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(Be);
  let Ze = null, gt = false;
  u.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && (Ze = { x: n.clientX, y: n.clientY }, gt = false);
  }), u.addEventListener("pointermove", (n) => {
    if (!Ze) return;
    const o = n.clientX - Ze.x, r = n.clientY - Ze.y, t = Math.hypot(o, r);
    if (!gt && t < 8) return;
    gt = true;
    const p = Math.min(Ze.x, n.clientX), c = Math.min(Ze.y, n.clientY), _ = Math.abs(o), a = Math.abs(r);
    n.clientX < Ze.x ? (Be.style.borderColor = "#34d399", Be.style.borderStyle = "dashed", Be.style.background = "rgba(52, 211, 153, 0.10)") : (Be.style.borderColor = "#22d3ee", Be.style.borderStyle = "solid", Be.style.background = "rgba(34, 211, 238, 0.10)"), Be.style.left = p + "px", Be.style.top = c + "px", Be.style.width = _ + "px", Be.style.height = a + "px", Be.style.display = "block";
  }), u.addEventListener("pointerup", (n) => {
    var _a, _b, _c, _d;
    if (!Ze) return;
    if (!gt) {
      Ze = null;
      return;
    }
    const o = Math.min(Ze.x, n.clientX), r = Math.max(Ze.x, n.clientX), t = Math.min(Ze.y, n.clientY), p = Math.max(Ze.y, n.clientY), c = n.clientX < Ze.x, _ = u.getBoundingClientRect(), a = d();
    a.updateMatrixWorld();
    const i = (ee) => {
      const ie = new w(ee[0], ee[1], ee[2]);
      return ie.project(a), { x: _.left + (ie.x * 0.5 + 0.5) * _.width, y: _.top + (-ie.y * 0.5 + 0.5) * _.height };
    }, f = (ee) => ee.x >= o && ee.x <= r && ee.y >= t && ee.y <= p, k = (ee, ie) => !(ee.x < o && ie.x < o || ee.x > r && ie.x > r || ee.y < t && ie.y < t || ee.y > p && ie.y > p), h = n.ctrlKey || n.metaKey || n.shiftKey;
    h || Ie.clear();
    let v = 0;
    const z = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ee = 0; ee < z.length; ee++) {
      const ie = z[ee];
      ie && f(i(ie)) && (Ie.add(`pt:${ee}`), v++);
    }
    const U = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], oe = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ee = 0; ee < U.length; ee++) {
      const ie = U[ee], Pe = oe.includes(ee);
      let Ce = false;
      for (let $e = 0; $e < ie.length - 1; $e++) {
        const Fe = z[ie[$e]], He = z[ie[$e + 1]];
        if (!Fe || !He) continue;
        const Ve = i(Fe), Ue = i(He);
        if (c ? f(Ve) || f(Ue) || k(Ve, Ue) : f(Ve) && f(Ue)) {
          if (Pe) {
            Ce = true;
            break;
          }
          Ie.add(`seg:${ee}:${$e}`), v++;
        }
      }
      Pe && Ce && (Ie.add(`poly:${ee}`), v++);
    }
    const K = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ee = 0; ee < K.length; ee++) {
      const ie = K[ee];
      if (!ie || ie.length !== 6) continue;
      const Pe = i([ie[0], ie[1], ie[2]]), Ce = i([ie[3], ie[4], ie[5]]);
      (c ? f(Pe) || f(Ce) || k(Pe, Ce) : f(Pe) && f(Ce)) && (Ie.add(`aux:${ee}`), v++);
    }
    yt(), ce(`${c ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${v} item(s) ${h ? "agregados a" : "\u2192"} selecci\xF3n (total ${Ie.size})`), Be.style.display = "none", Ze = null, gt = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Oe = new _e();
  Oe.visible = false, Oe.frustumCulled = false, m.add(Oe);
  const In = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, ln = (n, o, r, t) => {
    var _a, _b, _c, _d;
    for (; Oe.children.length; ) {
      const a = Oe.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const p = In[n] ?? 16777215, c = 0.05, _ = new ae().setFromPoints([new w(o - c, r - c, t), new w(o + c, r - c, t), new w(o + c, r - c, t), new w(o + c, r + c, t), new w(o + c, r + c, t), new w(o - c, r + c, t), new w(o - c, r + c, t), new w(o - c, r - c, t)]);
    Oe.add(new wt(_, new Ae({ color: p, linewidth: 2 }))), Oe.position.set(0, 0, 0), Oe.visible = true;
  }, Wt = () => {
    Oe.visible = false;
  }, $n = (n, o, r, t) => {
    var _a;
    const p = window.__hekatanOsnap, c = e.points.rawVal, _ = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let a = null;
    const i = (h, v, z, U) => {
      const oe = Math.hypot(v - n, z - o, U - r);
      oe > t || (!a || oe < a.d) && (a = { type: h, x: v, y: z, z: U, d: oe });
    };
    (p.node || p.end) && c.forEach((h) => {
      p.node && i("node", h[0], h[1], h[2]);
    });
    for (const h of _) if (!(h.length < 2)) for (let v = 0; v < h.length - 1; v++) {
      const z = c[h[v]], U = c[h[v + 1]];
      if (!(!z || !U) && (p.end && (i("end", z[0], z[1], z[2]), i("end", U[0], U[1], U[2])), p.mid && i("mid", (z[0] + U[0]) / 2, (z[1] + U[1]) / 2, (z[2] + U[2]) / 2), p.nea || p.per)) {
        const oe = U[0] - z[0], J = U[1] - z[1], K = U[2] - z[2], ee = oe * oe + J * J + K * K;
        if (ee < 1e-12) continue;
        const ie = Math.max(0, Math.min(1, ((n - z[0]) * oe + (o - z[1]) * J + (r - z[2]) * K) / ee)), Pe = z[0] + ie * oe, Ce = z[1] + ie * J, $e = z[2] + ie * K;
        p.nea && i("nea", Pe, Ce, $e), p.per && i("per", Pe, Ce, $e);
      }
    }
    const f = window.__hekatanDrawingAuxLines, k = (f == null ? void 0 : f.rawVal) ?? (f == null ? void 0 : f.val) ?? f ?? [];
    for (const h of k) {
      if (h.length !== 6) continue;
      const v = [h[0], h[1], h[2]], z = [h[3], h[4], h[5]];
      if (p.end && (i("end", v[0], v[1], v[2]), i("end", z[0], z[1], z[2])), p.mid && i("mid", (v[0] + z[0]) / 2, (v[1] + z[1]) / 2, (v[2] + z[2]) / 2), p.nea || p.per) {
        const U = z[0] - v[0], oe = z[1] - v[1], J = z[2] - v[2], K = U * U + oe * oe + J * J;
        if (K < 1e-12) continue;
        const ee = Math.max(0, Math.min(1, ((n - v[0]) * U + (o - v[1]) * oe + (r - v[2]) * J) / K)), ie = v[0] + ee * U, Pe = v[1] + ee * oe, Ce = v[2] + ee * J;
        p.nea && i("nea", ie, Pe, Ce), p.per && i("per", ie, Pe, Ce);
      }
    }
    return a ? { type: a.type, x: a.x, y: a.y, z: a.z } : null;
  };
  window.__hekatanOsnapCompute = $n, window.__hekatanOsnapShow = ln, window.__hekatanOsnapHide = Wt;
  let xe = [], Ye = 0;
  const bt = document.createElement("div");
  bt.id = "hk-cad-status", bt.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", bt.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(bt);
  const Rn = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), we && n.push(`\u{1F512} LOCK ${we.toUpperCase()}`);
    const r = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(r) > 1e-3 && n.push(`Cota Z=${r}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, ce = (n) => {
    const o = n + Rn();
    bt.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    ce(o);
  }, window.__hekatanCadResetPending = () => {
    xe = [], ce("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const Mt = [], it = () => {
    var _a, _b;
    Mt.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), Mt.length > 100 && Mt.shift();
  }, rn = () => {
    var _a;
    const n = Mt.pop();
    if (!n) {
      ce("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), xe = [], F.visible = false, D.visible = false, X(), ce(`\u21B6 Undo \u2014 ${Mt.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    M();
  };
  window.__hekatanPushUndo = it, window.__hekatanUndo = rn, window.addEventListener("keydown", (n) => {
    (n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey && (n.preventDefault(), rn());
  });
  const cn = () => {
    if (xe = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    we = null, st(), F.visible = false, D.visible = false, X(), ce("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), M();
  };
  window.__hekatanFinalizeDraw = cn, u.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    if (at > 5) {
      at = 0;
      return;
    }
    at = 0;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(P, o);
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
    const p = (window.__hekatanSnap2D ?? 0.5) * 1.2, c = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, p);
    if (c) t = new w(c.x, c.y, c.z), ce(`\u{1F3AF} Snap [${c.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const a = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0;
      a && i > 0 && (t = new w(Math.round(t.x / i) * i, Math.round(t.y / i) * i, Math.round(t.z / i) * i));
    }
    const _ = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (_ === "select" || _ === "none" || !_) {
      if (nt) {
        const { kind: a, a: i, b: f } = nt, k = f !== void 0 ? `${a}:${i}:${f}` : `${a}:${i}`;
        n.ctrlKey || n.metaKey || n.shiftKey || Ie.clear(), Ie.has(k) ? Ie.delete(k) : Ie.add(k), yt(), ce(`\u2713 Seleccionados ${Ie.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else !n.ctrlKey && !n.metaKey && !n.shiftKey && Ie.size > 0 && (Ie.clear(), yt(), ce("Selecci\xF3n limpiada"));
      return;
    }
    if (_ === "axis") {
      const a = window.__hekatanAxisDraw;
      if (!a) return;
      if (!a.pendingStart) {
        a.pendingStart = [t.x, t.y, t.z], ce(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const i = a.mode === "number", f = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, a.pendingStart, [t.x, t.y, t.z], i);
      ce(`\u2713 Eje "${f}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (_ === "delete") {
      if (et >= 0) {
        const a = window.__hekatanDrawingAuxLines, i = (a == null ? void 0 : a.rawVal) ?? (a == null ? void 0 : a.val) ?? a ?? [], f = et;
        if (f >= 0 && f < i.length) {
          it();
          const k = i.slice(0, f).concat(i.slice(f + 1));
          a && typeof a == "object" && "val" in a ? a.val = k : window.__hekatanDrawingAuxLines = k, ce(`\u{1F5D1} L\xEDnea auxiliar #${f + 1} borrada`), et = -1, De.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (je >= 0) {
        const a = je, i = pt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(a)) ?? false ? (zt(a), ce(`\u{1F5D1} \xC1rea #${a + 1} (shell Q4) borrada`)) : i >= 0 ? (En(a, i), ce(`\u{1F5D1} Segmento ${i + 1} de polil\xEDnea #${a + 1} borrado`)) : (zt(a), ce(`\u{1F5D1} Polil\xEDnea #${a + 1} borrada`));
      } else ce("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (_ === "circle") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        ce("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [a, i] = xe, f = Math.hypot(i[0] - a[0], i[1] - a[1], i[2] - a[2]);
      Math.abs(i[0] - a[0]);
      const k = Math.abs(i[1] - a[1]), v = Math.abs(i[2] - a[2]) < 1e-3 ? "xy" : k < 1e-3 ? "xz" : "yz", z = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, a[0], a[1], a[2], f, z, v), ce(`\u2713 C\xEDrculo dibujado en ${v.toUpperCase()} \u2014 r=${f.toFixed(2)}m, ${z} segmentos`), xe = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (_ === "arc") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        ce("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (xe.length === 2) {
        ce("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [a, i, f] = xe, k = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, a, i, f, k), ce(`\u2713 Arco dibujado \u2014 ${k} segmentos`), xe = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (_ === "rect") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        ce("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [a, i] = xe;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, a, i), ce(`\u2713 Rect\xE1ngulo dibujado \u2014 (${a[0].toFixed(1)},${a[1].toFixed(1)}) \u2192 (${i[0].toFixed(1)},${i[1].toFixed(1)})`), xe = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (_ === "col") {
      it();
      const a = t.z, i = Ye && Ye > 0 ? Ye : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, a], [t.x, t.y, a + i]];
      const f = e.polylines.rawVal, k = e.points.rawVal.length;
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [k - 2, k - 1], []], Ye = 0, ce(`\u258C Columna creada \u2014 h=${i.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (_ === "wall") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        ce("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [a, i] = xe, f = Ye && Ye > 0 ? Ye : 3;
      it();
      const k = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [a[0], a[1], a[2]], [i[0], i[1], i[2]], [i[0], i[1], i[2] + f], [a[0], a[1], a[2] + f]];
      const h = e.polylines.rawVal;
      if (h.length - 1, e.polylines.val = [...h.slice(0, -1), ...h[h.length - 1].length > 0 ? [h[h.length - 1]] : [], [k, k + 1, k + 2, k + 3, k], []], e.areas) {
        const v = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, v];
      }
      ce(`\u25A5 Pared Q4 creada \u2014 h=${f.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), xe = [], Ye = 0;
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (_ === "extp") {
      it();
      const a = Ye && Ye > 0 ? Ye : 3, i = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + a]];
      const f = e.polylines.rawVal, k = e.points.rawVal.length;
      e.polylines.val = [...f.slice(0, -1), ...f[f.length - 1].length > 0 ? [f[f.length - 1]] : [], [k - 2, k - 1], []], Ye = 0, ce(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${a.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (_ === "extl") {
      const a = (window.__hekatanSnap2D ?? 0.5) * 1.5, i = Dt(t.x, t.y, t.z, a);
      if (!i) {
        ce("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const f = e.polylines.rawVal, k = e.points.rawVal, h = f[i.polyIdx], v = k[h[i.segIdx]], z = k[h[i.segIdx + 1]];
      if (!v || !z) {
        ce("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const U = Ye && Ye > 0 ? Ye : 3;
      it();
      const oe = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [v[0], v[1], v[2]], [z[0], z[1], z[2]], [z[0], z[1], z[2] + U], [v[0], v[1], v[2] + U]];
      const J = e.polylines.rawVal;
      if (e.polylines.val = [...J.slice(0, -1), ...J[J.length - 1].length > 0 ? [J[J.length - 1]] : [], [oe, oe + 1, oe + 2, oe + 3, oe], []], e.areas) {
        const K = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, K];
      }
      Ye = 0, ce(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${U.toFixed(2)}m`);
      try {
        (_s = window.__hekatanRebuild) == null ? void 0 : _s.call(window);
      } catch {
      }
      return;
    }
    if (_ === "auxp") {
      const a = window.__hekatanDrawingAuxPoints;
      if (a) {
        const i = a.rawVal ?? a.val ?? [];
        a.val = [...i, [t.x, t.y, t.z]];
      }
      ce(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (_ === "aux") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        ce("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [a, i] = xe, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const U = f.rawVal ?? f.val ?? [];
        f.val = [...U, [a[0], a[1], a[2], i[0], i[1], i[2]]];
      }
      const k = i[0] - a[0], h = i[1] - a[1], v = i[2] - a[2], z = Math.sqrt(k * k + h * h + v * v);
      ce(`\u2713 L\xEDnea auxiliar creada \u2014 L=${z.toFixed(2)}m (cyan, no FEM)`), xe = [];
      return;
    }
    if (_ === "extend") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        ce("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [a, i] = xe, f = window.__hekatanDrawingAuxLines;
      if (f) {
        const k = f.rawVal ?? f.val ?? [];
        f.val = [...k, [a[0], a[1], a[2], i[0], i[1], i[2]]];
      }
      ce("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), xe = [];
      return;
    }
    if (_ === "chaflan") {
      if (xe.push([t.x, t.y, t.z]), xe.length === 1) {
        ce("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [a, i] = xe, f = window.__hekatanChaflanR ?? 1, k = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t.call(window, a, i, f, k, 6);
      const h = Math.abs(i[0] - a[0]).toFixed(1), v = Math.abs(i[1] - a[1]).toFixed(1);
      ce(`\u2713 Losa con chaflanes dibujada \u2014 ${h}\xD7${v}m, r=${f}m, ${k} seg/chafl\xE1n`), xe = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (C = false, it(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const a = e.polylines.rawVal, i = a.length - 1, f = a[i] ?? [];
      if (_ === "line" && f.length === 2) {
        e.polylines.val = [...a, []], ce("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (_ === "area" && f.length === 4) {
        e.polylines.val = [...a.slice(0, -1), [...f, f[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, i]), ce("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (_ === "node") ce(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (_ === "line") ce("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (_ === "polyline") ce("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (_ === "area") {
      const a = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      ce(`\u25A6 \xC1rea \u2014 click ${a.length}/4. Marc\xE1 ${4 - a.length} v\xE9rtice${4 - a.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), u.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), u.addEventListener("pointermove", (n) => {
    var _a;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(P, o);
    const r = y();
    if (ne.geometry.deleteAttribute("position"), r.length) {
      let t = r[0].point.clone();
      const p = (window.__hekatanSnap2D ?? 0.5) * 1.2, c = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, p);
      if (c) t.set(c.x, c.y, c.z);
      else {
        const _ = window.__hekatanSnapEnabled !== false, a = window.__hekatanSnap2D ?? 0.5;
        _ && a > 0 && (t.x = Math.round(t.x / a) * a, t.y = Math.round(t.y / a) * a, t.z = Math.round(t.z / a) * a);
      }
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z)), ne.geometry.setAttribute("position", new Ne(t.toArray(), 3));
    }
    M();
  }), u.addEventListener("pointermove", (n) => {
    var _a;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(P, o);
    let r = false;
    const t = A.intersectObject(te), p = y();
    if (t.length && p.length) {
      const c = new w(...e.points.rawVal[t[0].index]), _ = new w(...p[0].point), a = c.sub(_), i = (_a = p[0].face) == null ? void 0 : _a.normal;
      i.transformDirection(W.matrixWorld), Math.abs(a.dot(i)) < 1e-4 && (r = true);
    }
    ne.visible = !r;
  });
  let Ut = false, Gt;
  u.addEventListener("pointermove", (n) => {
    var _a;
    if (!at) return;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(P, o);
    let r = false;
    const t = A.intersectObject(te), p = y();
    if (t.length && p.length) {
      const _ = new w(...e.points.rawVal[t[0].index]), a = new w(...p[0].point), i = _.sub(a), f = (_a = p[0].face) == null ? void 0 : _a.normal;
      f.transformDirection(W.matrixWorld), Math.abs(i.dot(f)) < 1e-4 && (r = true);
    }
    if (r && at < 5 && (Ut = true, l.enabled = false, Gt = t[0].index), !Ut || at % 2 !== 0) return;
    const c = [...e.points.rawVal];
    if (Gt !== void 0) {
      let _ = p[0].point;
      (n.ctrlKey || n.metaKey) && (_ = new w(Math.round(_.x), Math.round(_.y), Math.round(_.z))), c[Gt] = _.toArray();
    }
    e.points.val = c;
  }), u.addEventListener("pointerup", () => {
    l.enabled = true, Ut = false;
  }), u.addEventListener("contextmenu", (n) => {
    var _a;
    const o = g(n);
    if (!o) return;
    A.setFromCamera(P, o);
    let r = false;
    const t = A.intersectObject(te), p = y();
    if (t.length && p.length) {
      const a = new w(...e.points.rawVal[t[0].index]), i = new w(...p[0].point), f = a.sub(i), k = (_a = p[0].face) == null ? void 0 : _a.normal;
      k.transformDirection(W.matrixWorld), Math.abs(f.dot(k)) < 1e-4 && (r = true);
    }
    if (!r) return;
    const c = [...e.points.rawVal];
    if (c.splice(t[0].index, 1), e.points.val = c, !e.polylines) return;
    const _ = e.polylines.rawVal.map((a) => a.filter((i) => i !== t[0].index)).map((a) => a.map((i) => i > t[0].index ? i - 1 : i)).filter((a) => a.length);
    _.push([]), e.polylines.val = _;
  });
}
function bo(e, s, m) {
  const b = Math.round(14.999999999999998), x = { position: e.position.clone(), quaternion: e.quaternion.clone() }, u = setInterval(A, 1e3 / 30);
  let M = 0;
  function A() {
    M++;
    const P = M / b;
    e.position.lerpVectors(x.position, s.position, P), e.quaternion.slerpQuaternions(x.quaternion, s.quaternion, P), m && m(), M == b && clearInterval(u);
  }
}
class Cn {
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
    this.map = Qt[s] || Qt.rainbow, this.n = m;
    const d = 1 / this.n, l = new Ee(), b = new Ee();
    this.lut.length = 0, this.lut.push(new Ee(this.map[0][1]));
    for (let x = 1; x < m; x++) {
      const u = x * d;
      for (let M = 0; M < this.map.length - 1; M++) if (u > this.map[M][0] && u <= this.map[M + 1][0]) {
        const A = this.map[M][0], P = this.map[M + 1][0];
        l.setHex(this.map[M][1], At), b.setHex(this.map[M + 1][1], At);
        const g = new Ee().lerpColors(l, b, (u - A) / (P - A));
        this.lut.push(g);
      }
    }
    return this.lut.push(new Ee(this.map[this.map.length - 1][1])), this;
  }
  copy(s) {
    return this.lut = s.lut, this.map = s.map, this.n = s.n, this.minV = s.minV, this.maxV = s.maxV, this;
  }
  getColor(s) {
    s = Nn.clamp(s, this.minV, this.maxV), s = (s - this.minV) / (this.maxV - this.minV);
    const m = Math.round(s * this.n);
    return this.lut[m];
  }
  addColorMap(s, m) {
    return Qt[s] = m, this;
  }
  createCanvas() {
    const s = document.createElement("canvas");
    return s.width = 1, s.height = this.n, this.updateCanvas(s), s;
  }
  updateCanvas(s) {
    const m = s.getContext("2d", { alpha: false }), d = m.getImageData(0, 0, 1, this.n), l = d.data;
    let b = 0;
    const x = 1 / this.n, u = new Ee(), M = new Ee(), A = new Ee();
    for (let P = 1; P >= 0; P -= x) for (let g = this.map.length - 1; g >= 0; g--) if (P < this.map[g][0] && P >= this.map[g - 1][0]) {
      const W = this.map[g - 1][0], q = this.map[g][0];
      u.setHex(this.map[g - 1][1], At), M.setHex(this.map[g][1], At), A.lerpColors(u, M, (P - W) / (q - W)), l[b * 4] = Math.round(A.r * 255), l[b * 4 + 1] = Math.round(A.g * 255), l[b * 4 + 2] = Math.round(A.b * 255), l[b * 4 + 3] = 255, b += 1;
    }
    return m.putImageData(d, 0, 0), s;
  }
}
const Qt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Pt = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Mo(e) {
  e = Math.max(0, Math.min(1, e));
  for (let m = 0; m < Pt.length - 1; m++) {
    const [d, l, b, x] = Pt[m], [u, M, A, P] = Pt[m + 1];
    if (e <= u) {
      const g = (e - d) / (u - d);
      return [l + (M - l) * g, b + (A - b) * g, x + (P - x) * g];
    }
  }
  const s = Pt[Pt.length - 1];
  return [s[1], s[2], s[3]];
}
function _o() {
  const s = new Uint8Array(1024);
  for (let d = 0; d < 256; d++) {
    const l = d / 255, [b, x, u] = Mo(l);
    s[d * 4 + 0] = b, s[d * 4 + 1] = x, s[d * 4 + 2] = u, s[d * 4 + 3] = 255;
  }
  const m = new Gn(s, 256, 1, Kn);
  return m.minFilter = wn, m.magFilter = wn, m.wrapS = xn, m.wrapT = xn, m.needsUpdate = true, m;
}
function So(e, s, m) {
  new Cn();
  const d = _o(), l = new Wn({ uniforms: { cmap: { value: d }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Ge, transparent: false, clipping: true, depthWrite: true, depthTest: true }), b = new ke(new ae(), l);
  return b.renderOrder = -1, b.frustumCulled = false, L.derive(() => {
    b.geometry.setAttribute("position", new Ne(e.val.flat(), 3));
    const x = [];
    for (const y of s.val) y.length === 3 ? x.push(y[0], y[1], y[2]) : y.length === 4 && (x.push(y[0], y[1], y[2]), x.push(y[0], y[2], y[3]));
    b.geometry.setIndex(new Un(x, 1));
    const u = m.val.filter((y) => Number.isFinite(y));
    let M, A;
    const P = nn.val;
    if (P ? (A = P[0], M = P[1]) : (M = u.length ? Math.max(...u) : 1, A = u.length ? Math.min(...u) : 0, A >= 0 && M > 0 && (A = 0)), M === A) {
      const y = Math.max(Math.abs(M) * 1e-6, 1e-9);
      M += y, A -= y;
    }
    const g = P && P[0] > P[1], W = Math.min(A, M), q = Math.max(A, M), B = q - W, re = new Float32Array(m.val.length);
    for (let y = 0; y < m.val.length; y++) {
      const te = m.val[y];
      if (!Number.isFinite(te)) {
        re[y] = -1;
        continue;
      }
      const ue = ((g ? q + W - te : te) - W) / B;
      re[y] = Math.max(0, Math.min(1, ue));
    }
    b.geometry.setAttribute("scalar", new Me(re, 1));
  }), b;
}
function ko(e, s, m, d) {
  const l = So(m, e.elements, d);
  return L.derive(() => {
    l.visible = s.shellResults.val != "none";
  }), l;
}
const Po = 6, Jt = 10, Co = 0.012;
function Vo(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function zo(e, s, m, d) {
  if (!m && !d) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && m) {
    const b = m[e];
    if (b && b.has(s)) return b.get(s);
  }
  return null;
}
function Fo(e, s, m, d) {
  const l = new _e(), b = new Cn();
  b.setColorMap("rainbow");
  const x = new Ee(), u = L.state([]);
  return L.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const M = m.val, A = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = Vo(s.frameResults.val);
    if (l.children.forEach(($) => {
      $.geometry && $.geometry.dispose(), $.material && $.material.dispose();
    }), l.clear(), !P || A.length === 0 || M.length === 0) {
      u.val = [];
      return;
    }
    const g = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, W = (_c = e.deformOutputs) == null ? void 0 : _c.val, q = [], B = [];
    for (let $ = 0; $ < A.length; $++) {
      if (A[$].length !== 2) continue;
      const H = zo(P, $, g, W);
      H && (q.push(H[0], H[1]), B.push({ idx: $, vals: H }));
    }
    if (q.length === 0) {
      u.val = [];
      return;
    }
    const re = Math.min(...q), y = Math.max(...q);
    b.setMin(re), b.setMax(y), u.val = q;
    const te = [1 / 0, 1 / 0, 1 / 0], ne = [-1 / 0, -1 / 0, -1 / 0];
    for (const $ of M) for (let R = 0; R < 3; R++) te[R] = Math.min(te[R], $[R]), ne[R] = Math.max(ne[R], $[R]);
    const N = Math.max(ne[0] - te[0], ne[1] - te[1], ne[2] - te[2], 1) * Co, V = [], I = [], C = [];
    let S = 0;
    for (const { idx: $, vals: R } of B) {
      const H = A[$], Z = M[H[0]], F = M[H[1]];
      if (!Z || !F) continue;
      const D = new w(F[0] - Z[0], F[1] - Z[1], F[2] - Z[2]), le = D.length();
      if (le < 1e-10) continue;
      D.normalize();
      const O = Math.abs(D.y) < 0.99 ? new w(0, 1, 0) : new w(1, 0, 0), se = new w().crossVectors(D, O).normalize(), de = new w().crossVectors(D, se).normalize(), he = Jt + 1, pe = Po;
      for (let me = 0; me < he; me++) {
        const be = me / Jt, Se = Z[0] + D.x * le * be, Le = Z[1] + D.y * le * be, Y = Z[2] + D.z * le * be, G = R[0] + (R[1] - R[0]) * be, Q = b.getColor(G) ?? new Ee(0, 0, 0);
        x.copy(Q).convertSRGBToLinear();
        for (let j = 0; j < pe; j++) {
          const fe = j / pe * Math.PI * 2, ye = Math.cos(fe), ve = Math.sin(fe);
          V.push(Se + (se.x * ye + de.x * ve) * N, Le + (se.y * ye + de.y * ve) * N, Y + (se.z * ye + de.z * ve) * N), I.push(x.r, x.g, x.b);
        }
      }
      for (let me = 0; me < Jt; me++) for (let be = 0; be < pe; be++) {
        const Se = (be + 1) % pe, Le = S + me * pe + be, Y = S + me * pe + Se, G = S + (me + 1) * pe + be, Q = S + (me + 1) * pe + Se;
        C.push(Le, Y, Q), C.push(Le, Q, G);
      }
      S += he * pe;
    }
    if (V.length === 0) return;
    const T = new ae();
    T.setAttribute("position", new Ne(V, 3)), T.setAttribute("color", new Ne(I, 3)), T.setIndex(C), T.computeVertexNormals();
    const X = new Te({ vertexColors: true, side: Ge }), E = new ke(T, X);
    E.frustumCulled = false, l.add(E);
  }), l.__colorMapValues = u, l;
}
function Mn(e, s = 8) {
  const m = document.createElement("div");
  m.id = "legend";
  const d = document.createElement("div");
  d.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", m.appendChild(d), setTimeout(() => {
    L.derive(() => {
      d.textContent = jt.val ? `[${jt.val}]` : "";
    });
  });
  const l = Array.from({ length: s + 1 }, (M, A) => A / s).reverse();
  let b, x;
  l.forEach((M, A) => {
    b = document.createElement("div"), b.id = `marker-${A}`, b.className = "marker", b.style.marginTop = A == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, x = document.createElement("p"), x.id = `marker-text-${A}`, b.append(x), m.append(b);
  });
  const u = [];
  return m.querySelectorAll("p").forEach((M) => u.push(M)), setTimeout(() => {
    L.derive(() => {
      l.forEach((M, A) => {
        const P = u[A];
        P && (P.innerText = Ao(e.val, M).toString());
      });
    });
  }), m;
}
function Ao(e, s) {
  const m = nn.val;
  if (m) return (m[0] + s * (m[1] - m[0])).toPrecision(3);
  const d = e.filter((x) => Number.isFinite(x));
  if (d.length === 0) return "0";
  let l = Math.min(...d);
  const b = Math.max(...d);
  return l >= 0 && b > 0 && (l = 0), (l + s * (b - l)).toPrecision(3);
}
function Zo({ mesh: e, settingsObj: s, drawingObj: m, objects3D: d, solids: l }) {
  jn.DEFAULT_UP = new w(0, 0, 1);
  const b = document.createElement("div"), x = new Hn(), u = new qn(45, 1, 0.1, 2 * 1e6), M = new Qn(-10, 10, 10, -10, -1e3, 2e6);
  let A = u;
  const P = new Jn({ antialias: true });
  P.localClippingEnabled = true;
  const g = new yn(u, P.domElement);
  g.enableDamping = true, g.dampingFactor = 0.1, g.screenSpacePanning = true, g.zoomSpeed = 0.8, g.panSpeed = 1.2, g.rotateSpeed = 0.9, g.keyPanSpeed = 12, g.listenToKeyEvents(window), g.touches = { ONE: Tt.ROTATE, TWO: Tt.DOLLY_PAN }, P.domElement.addEventListener("wheel", (Y) => {
    if (!Y.ctrlKey && Math.abs(Y.deltaX) > Math.abs(Y.deltaY) * 1.5) {
      Y.preventDefault();
      const G = g.target, Q = new w().subVectors(u.position, G), j = new w();
      j.crossVectors(u.up, Q).normalize();
      const ye = Q.length() * 1e-3 * g.panSpeed;
      G.addScaledVector(j, Y.deltaX * ye), u.position.addScaledVector(j, Y.deltaX * ye), g.update();
    }
  }, { passive: false });
  const W = new Ht(new w(-1, 0, 0), 0), q = new Ht(new w(0, -1, 0), 0), B = new Ht(new w(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function re() {
    const Y = window.__hekatanClip, G = [];
    Y.enableX && (W.normal.set(Y.invertX ? 1 : -1, 0, 0), W.constant = Y.invertX ? -Y.posX : Y.posX, G.push(W)), Y.enableY && (q.normal.set(0, Y.invertY ? 1 : -1, 0), q.constant = Y.invertY ? -Y.posY : Y.posY, G.push(q)), Y.enableZ && (B.normal.set(0, 0, Y.invertZ ? 1 : -1), B.constant = Y.invertZ ? -Y.posZ : Y.posZ, G.push(B)), P.clippingPlanes = G, x.traverse((j) => {
      const fe = j;
      if (fe.material) {
        const ye = Array.isArray(fe.material) ? fe.material : [fe.material];
        for (const ve of ye) ve.clippingPlanes = G, ve.needsUpdate = true;
      }
    });
    const Q = window.__hekatanPanes ?? [];
    for (const j of Q) try {
      j && typeof j.refresh == "function" && j.refresh();
    } catch {
    }
    P.render(x, A);
  }
  re(), window.__hekatanClipApply = re;
  const y = no(s), te = L.derive(() => y.displayScale.val === 0 ? 1 : y.displayScale.val > 0 ? y.displayScale.val : -1 / y.displayScale.val), ne = To(e, y), ue = () => {
    const Y = [];
    return y.gridXY.rawVal && Y.push("xy"), y.gridXZ.rawVal && Y.push("xz"), y.gridYZ.rawVal && Y.push("yz"), Y;
  }, N = () => {
    const Y = y.gridStep.rawVal, G = Math.max(Y, y.gridMajor.rawVal);
    return { planes: ue(), majorStep: G, minorStep: Y };
  };
  let V = qt(y.gridSize.rawVal, N());
  V.visible = y.gridVisible.rawVal, window.__hekatanSnap2D = y.cursorSnap.rawVal;
  const I = () => {
    const Y = Math.max(0, Math.min(1, y.gridOpacity.rawVal));
    V.traverse((G) => {
      const Q = G.material;
      if (!Q || !("opacity" in Q)) return;
      const j = G.name ?? "";
      let fe = 0.35;
      j.includes("border") ? fe = 1 : j.includes("major") && (fe = 0.75), Q.opacity = Y * fe;
    });
  };
  I(), b.appendChild(to(y, e, l)), b.setAttribute("id", "viewer"), b.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const C = ot();
  P.setClearColor(C.background, 1);
  const S = y.gridSize.rawVal, T = S * 0.5 + S * 0.5 / Math.tan(45 * 0.5);
  u.position.set(0, 0, T), u.up.set(0, 1, 0), g.target.set(0, 0, 0), g.minDistance = 0.1, g.maxDistance = 1e4, b.__settings = y, g.zoomSpeed = 1, g._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, g.update();
  let X = gn(y.gridSize.rawVal, y.flipAxes.rawVal);
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
    const Y = y.gridSize.val, G = y.flipAxes.val;
    if (y.gridXY.val, y.gridXZ.val, y.gridYZ.val, y.gridStep.val, y.gridMajor.val, R) {
      R = false;
      return;
    }
    x.remove(V), (_a = V.traverse) == null ? void 0 : _a.call(V, (fe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = fe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = fe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), V = qt(Y, N()), V.visible = y.gridVisible.rawVal, x.add(V), I(), x.remove(X), X.traverse((fe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = fe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = fe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), X = gn(Y, G), x.add(X);
    const Q = Y * 0.5 + Y * 0.5 / Math.tan(45 * 0.5);
    u.position.distanceTo(g.target), Math.abs(u.position.x) < 0.1 && Math.abs(u.position.y) < 0.1 && u.position.z > 0 ? u.position.set(0, 0, Q) : u.position.set(0.5 * Y, -Q, 0.5 * Y), g.target.set(0, 0, 0), g.minDistance = Math.max(0.05, Y * 0.01), g.maxDistance = Math.max(50, Y * 50), g.update(), O();
  }), new ResizeObserver((Y) => {
    var _a, _b;
    for (const G of Y) {
      const Q = (_a = G.target) == null ? void 0 : _a.clientWidth, j = (_b = G.target) == null ? void 0 : _b.clientHeight;
      if (Q === 0 || j === 0) continue;
      const ye = (Z ? Q / 2 : Q) / j;
      u.aspect = ye, u.updateProjectionMatrix();
      const ve = M.top;
      if (M.left = -ve * ye, M.right = ve * ye, M.updateProjectionMatrix(), F && F.isPerspectiveCamera) F.aspect = ye, F.updateProjectionMatrix();
      else if (F && F.isOrthographicCamera) {
        const we = F, ge = we.top;
        we.left = -ge * ye, we.right = ge * ye, we.updateProjectionMatrix();
      }
      P.setSize(Q, j), O();
    }
  }).observe(b), g.addEventListener("change", O), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, y.displayScale.val, y.nodes.val, y.elements.val, (_g = y.edges) == null ? void 0 : _g.val, y.elemColumns.val, y.elemBeams.val, y.nodesIndexes.val, y.elementsIndexes.val, y.orientations.val, y.sections.val, y.secColumns.val, y.secBeams.val, y.secFloor.val, y.supports.val, y.loads.val, y.deformedShape.val, y.nodeResults.val, y.frameResults.val, y.shellResults.val, (_h = y.solidResults) == null ? void 0 : _h.val, setTimeout(O);
  });
  let Z = false, F = null, D = null, le = false;
  function O() {
    const Y = b.clientWidth || 1, G = b.clientHeight || 1;
    if (!Z || !F) {
      P.setScissorTest(false), P.setViewport(0, 0, Y, G), P.render(x, A);
      return;
    }
    const Q = Y / 2;
    P.setScissorTest(true), P.setViewport(0, 0, Q, G), P.setScissor(0, 0, Q, G), P.render(x, A), P.setViewport(Q, 0, Q, G), P.setScissor(Q, 0, Q, G), P.render(x, F), P.setScissorTest(false);
  }
  function se(Y) {
    A = Y, g.object = Y, g.update(), O();
  }
  function de(Y, G) {
    Z = Y, G && (F = G);
    const Q = b.clientWidth || 1, j = b.clientHeight || 1, ye = (Y ? Q / 2 : Q) / j;
    u.isPerspectiveCamera && (u.aspect = ye, u.updateProjectionMatrix());
    const ve = M.top;
    if (M.left = -ve * ye, M.right = ve * ye, M.updateProjectionMatrix(), Y && F) {
      if (D ? (D.object = F, D.update()) : (D = new yn(F, P.domElement), D.enableDamping = true, D.dampingFactor = 0.1, D.screenSpacePanning = true, D.zoomSpeed = 0.8, D.panSpeed = 1.2, D.rotateSpeed = 0.9, D.touches = { ONE: Tt.ROTATE, TWO: Tt.DOLLY_PAN }, D.target.copy(g.target), D.addEventListener("change", O), D.enabled = false), !le) {
        const we = (ge) => {
          if (!Z || !D) return;
          const st = P.domElement.getBoundingClientRect(), ct = ge.clientX - st.left, dt = st.width / 2, xt = ct >= dt;
          g.enabled = !xt, D.enabled = xt;
        };
        P.domElement.addEventListener("pointerdown", we, true), P.domElement.addEventListener("wheel", we, { capture: true, passive: true }), le = true;
      }
    } else Y || (g.enabled = true, D && (D.enabled = false));
    b.__splitMode = Y, window.__hekatanSplitMode = Y, window.__hekatanSplitCamera = Y ? F : null, O();
  }
  if (e) {
    x.add(oo(y, ne, te), so(e, y, ne), ro(y, ne, te), co(e, y, ne, te), io(e, y, ne, te), lo(e, y, ne, te), ho(e, y, ne, te), mo(e, y, ne, te), vo(e, y, ne, te), wo(e, y, ne, te));
    const Y = $o(e, y), G = ko(e, y, ne, Y), Q = Mn(Y);
    x.add(G), b.appendChild(Q);
    const j = Fo(e, y, ne);
    x.add(j);
    const fe = j.__colorMapValues, ye = Mn(fe);
    ye.id = "frame-legend", b.appendChild(ye), L.derive(() => {
      var _a;
      const ve = y.shellResults.val != "none", we = (((_a = y.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", ge = ve || we, st = y.frameResults.val.startsWith("contour:");
      Q.hidden = !ge, G.visible = ge, ye.hidden = !st;
    });
  }
  if (l) {
    const Y = new On(16777215, 0.5);
    x.add(Y);
    const G = new vn(16777215, 0.5);
    G.position.set(30, 25, -10), G.shadow.mapSize.width = 1024, G.shadow.mapSize.height = 1024, x.add(G);
    const Q = 10;
    G.shadow.camera.left = -Q, G.shadow.camera.right = Q, G.shadow.camera.top = Q, G.shadow.camera.bottom = -Q, G.shadow.camera.far = 1e3;
    const j = new vn(16777215, 0.5);
    j.color.setHSL(11, 43, 96), j.position.set(-10, 0, 30), x.add(j), L.derive(() => {
      (l == null ? void 0 : l.val.length) && (x.remove(...l.oldVal), x.add(...l.rawVal), O());
    }), L.derive(() => {
      l.rawVal.forEach((fe) => fe.visible = y.solids.val), O();
    });
  }
  if (d) {
    const Y = [], G = (j) => {
      var _a;
      return ((_a = j == null ? void 0 : j.userData) == null ? void 0 : _a.isCota) ? y.showCotas.val : y.custom3D.val;
    }, Q = () => {
      for (const j of Y) j.visible = G(j);
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
  m && go({ drawingObj: m, gridObj: V, scene: x, getActiveCamera: () => A, controls: g, gridSize: S, derivedDisplayScale: te, rendererElm: P.domElement, viewerRender: O }), $t((Y, G) => {
    var _a;
    P.setClearColor(G.background, 1), x.remove(V), (_a = V.traverse) == null ? void 0 : _a.call(V, (Q) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Q.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Q.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), V = qt(y.gridSize.rawVal, { planes: ue() }), x.add(V), b.style.setProperty("--awatif-legend-color", G.legendMarker), O();
  });
  const he = { scene: x, perspCamera: u, orthoCamera: M, get camera() {
    return A;
  }, controls: g, renderer: P, rendererElm: P.domElement, render: O, setActiveCamera: se, setSplitMode: de, get splitMode() {
    return Z;
  }, get splitCamera() {
    return F;
  }, settings: y };
  b.__ctx = he;
  const pe = document.createElement("div");
  pe.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const me = (Y, G, Q) => {
    const j = document.createElement("button");
    return j.textContent = Y, j.title = G, j.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), j.onmouseenter = () => {
      j.style.background = "rgba(70,70,70,0.9)";
    }, j.onmouseleave = () => {
      j.style.background = "rgba(40,40,40,0.85)";
    }, j.onclick = (fe) => {
      fe.preventDefault(), Q();
    }, j;
  }, be = (Y, G) => {
    const Q = g.target, j = new w().subVectors(A.position, Q), fe = j.length(), ye = new w(), ve = new w();
    ye.crossVectors(A.up, j).normalize(), ve.copy(A.up).normalize();
    const we = fe * 0.05;
    Q.addScaledVector(ye, -Y * we), Q.addScaledVector(ve, G * we), A.position.addScaledVector(ye, -Y * we), A.position.addScaledVector(ve, G * we), g.update(), O();
  }, Se = (Y) => {
    const G = new w().subVectors(A.position, g.target);
    G.multiplyScalar(Y), A.position.copy(g.target).add(G), g.update(), O();
  }, Le = () => {
    const Y = document.createElement("div");
    return Y.style.cssText = "width:32px;height:32px;", Y;
  };
  return pe.append(Le()), pe.append(me("\u2191", "Pan arriba", () => be(0, 1))), pe.append(me("\u2295", "Zoom in", () => Se(0.85))), pe.append(me("\u2190", "Pan izquierda", () => be(-1, 0))), pe.append(me("\u2302", "Reset vista", () => {
    g.reset(), O();
  })), pe.append(me("\u2192", "Pan derecha", () => be(1, 0))), pe.append(me("\u2296", "Zoom out", () => Se(1.18))), pe.append(me("\u2193", "Pan abajo", () => be(0, -1))), pe.append(Le()), getComputedStyle(b).position === "static" && (b.style.position = "relative"), b.appendChild(pe), b;
}
function To(e, s) {
  return L.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const m = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], d = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!d || m.length === 0) return m;
    const l = s.deformScale.val, b = s.deformScale.val * s.deformScaleZ.val, x = Number.isFinite(l) ? l : 1, u = Number.isFinite(b) ? b : 1;
    return m.map((M, A) => {
      var _a2;
      const P = ((_a2 = d.get(A)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], g = Number.isFinite(P[0]) ? P[0] : 0, W = Number.isFinite(P[1]) ? P[1] : 0, q = Number.isFinite(P[2]) ? P[2] : 0;
      return [M[0] + g * x, M[1] + W * x, M[2] + q * u];
    });
  });
}
const nn = L.state(null), jt = L.state(""), Eo = L.state("kN"), Xo = L.state("mm"), Yo = L.state("kN/m\xB2"), Lo = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, _n = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Io = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function $o(e, s) {
  const m = L.state([]);
  let d;
  return ((l) => {
    l.bendingXX = "bendingXX", l.bendingYY = "bendingYY", l.bendingXY = "bendingXY", l.membraneXX = "membraneXX", l.membraneYY = "membraneYY", l.membraneXY = "membraneXY", l.tranverseShearX = "tranverseShearX", l.tranverseShearY = "tranverseShearY", l.vonMises = "vonMises", l.pressure = "pressure", l.displacementX = "displacementX", l.displacementY = "displacementY", l.displacementZ = "displacementZ";
  })(d || (d = {})), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const l = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), B = (he, pe) => {
      he == null ? void 0 : he.forEach((me, be) => {
        const Se = e.elements.val[be];
        if (Se) for (let Le = 0; Le < Se.length; Le++) pe.set(Se[Le], [me[Le] ?? me[0]]);
      });
    };
    B((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, l), B((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, b), B((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, x), B((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, u), B((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, M), B((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, A), B((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, P), B((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, g), B((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, W), B((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, q);
    const re = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, y = (_w = s.solidResults) == null ? void 0 : _w.val, ne = y && y !== "none" ? y : s.shellResults.val, ue = re == null ? void 0 : re[ne], N = { bendingXX: [l, 0], bendingYY: [b, 0], bendingXY: [x, 0], membraneXX: [u, 0], membraneYY: [M, 0], membraneXY: [A, 0], tranverseShearX: [P, 0], tranverseShearY: [g, 0], vonMises: [W, 0], pressure: [q, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, V = s.shellResults.val, I = Eo.val, C = Xo.val, S = V === "displacementX" || V === "displacementY" || V === "displacementZ", T = V === "bendingXX" || V === "bendingYY" || V === "bendingXY", X = V === "membraneXX" || V === "membraneYY" || V === "membraneXY", E = V === "vonMises" || V === "pressure", $ = V === "tranverseShearX" || V === "tranverseShearY", R = (_D = s.solidResults) == null ? void 0 : _D.val, H = R === "vonMises" || R === "sigmaXX" || R === "sigmaYY" || R === "sigmaZZ" || R === "tauXY" || R === "tauYZ" || R === "tauXZ", Z = R === "ux" || R === "uy" || R === "uz", F = Yo.val, D = H ? Io[F] : Z || S ? _n[C] : T || X || E || $ ? 1 / Lo[I] : 1, le = H ? F : Z || S ? C : T ? `${I}\xB7m/m` : X ? `${I}/m\xB2` : E ? `${I}/m\xB2` : $ ? `${I}/m` : "";
    jt.val = le, nn.val = Array.isArray(ue) && ue.length === 2 ? [ue[0] * D, ue[1] * D] : null;
    const se = R && R !== "none" ? [W, 0] : N[V], de = [];
    e.nodes.val.forEach((he, pe) => {
      const me = se;
      if (!me || !me[0] || typeof me[0].has != "function") return;
      if (!me[0].has(pe)) {
        de.push(Number.NaN);
        return;
      }
      const be = me[0].get(pe), Se = be ? be[me[1]] ?? 0 : 0;
      de.push(Se * D);
    }), m.val = de;
  }), m;
}
export {
  Xo as a,
  So as b,
  Eo as c,
  Mn as d,
  Yo as e,
  Zo as g
};
