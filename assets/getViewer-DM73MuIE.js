import { X as Ft, B as se, Y as At, F as Ie, G as _e, d as ht, L as Ce, e as Ae, D as Re, b as ke, s as Ve, Z as vn, c as Yn, V as m, x as it, y as ze, _ as Nt, k as gn, a as Ee, f as Me, h as Tt, $ as Et, l as Ln, j as In, q as kt, I as vt, S as Pt, a0 as an, m as ln, o as rn, p as cn, a1 as dn, a2 as Ct, a3 as $n, a4 as Rn, a5 as Bn, a6 as Dn, a7 as Zn, n as pn, a8 as un, r as Nn, t as Wn, u as Un, W as Gn, v as hn, a9 as Vt, H as Wt, A as Kn, w as fn, O as Hn } from "./Text-BE8nxNWm.js";
import { v as L, P as qn, g as tt, o as Xt } from "./theme-2eEBQPmF.js";
import "./styles-Cjdl64P4.js";
function Qn(e, s, f) {
  const d = document.createElement("div"), l = new qn({ title: "Settings", expanded: true, container: d });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(l), d.setAttribute("id", "settings");
  const g = "hk_settingsPos";
  let w = null;
  try {
    const y = localStorage.getItem(g);
    y && (w = JSON.parse(y));
  } catch {
  }
  d.style.cssText = ["position:fixed", w ? `left:${w.left}px` : "left:8px", w ? `top:${w.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const p = () => {
    const y = d.querySelector(".tp-rotv_b");
    if (!y) {
      setTimeout(p, 200);
      return;
    }
    y.style.cursor = "move", y.style.userSelect = "none";
    let W = false, H = 0, D = 0, ie = 0, x = 0;
    y.addEventListener("mousedown", (ee) => {
      W = true, H = ee.clientX, D = ee.clientY;
      const te = d.getBoundingClientRect();
      ie = te.left, x = te.top, d.style.left = `${ie}px`, d.style.top = `${x}px`;
    }), window.addEventListener("mousemove", (ee) => {
      if (!W) return;
      const te = ee.clientX - H, de = ee.clientY - D, N = Math.max(0, Math.min(window.innerWidth - 40, ie + te)), V = Math.max(0, Math.min(window.innerHeight - 40, x + de));
      d.style.left = `${N}px`, d.style.top = `${V}px`;
    }), window.addEventListener("mouseup", () => {
      if (W) {
        W = false;
        try {
          localStorage.setItem(g, JSON.stringify({ left: parseFloat(d.style.left), top: parseFloat(d.style.top) }));
        } catch {
        }
      }
    });
  };
  if (p(), s == null ? void 0 : s.nodes) {
    l.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 });
    const y = l.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    y.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), y.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), y.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), y.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), y.addBinding(e.gridVisible, "val", { label: "Mostrar" }), y.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), y.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), y.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), y.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), l.addBinding(e.nodes, "val", { label: "Nodes" }), l.addBinding(e.elements, "val", { label: "Elements" }), l.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), l.addBinding(e.faces, "val", { label: "  Caras (fill)" }), l.addBinding(e.elemColumns, "val", { label: "  Columnas" }), l.addBinding(e.elemBeams, "val", { label: "  Vigas" }), l.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), l.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), l.addBinding(e.orientations, "val", { label: "Orientations" }), l.addBinding(e.sections, "val", { label: "Sections" }), l.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), l.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), l.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((s == null ? void 0 : s.nodeInputs) || (s == null ? void 0 : s.elementInputs)) {
    const y = l.addFolder({ title: "Analysis Inputs" });
    y.addBinding(e.supports, "val", { label: "Supports" }), y.addBinding(e.loads, "val", { label: "Loads" }), y.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), y.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((s == null ? void 0 : s.deformOutputs) || (s == null ? void 0 : s.analyzeOutputs)) {
    const y = l.addFolder({ title: "Analysis Outputs" });
    y.addBinding(e.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), y.addBinding(e.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), y.addBinding(e.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", membraneXX: "membraneXX", membraneYY: "membraneYY", membraneXY: "membraneXY", shearX: "tranverseShearX", shearY: "tranverseShearY", vonMises: "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), y.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), y.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), y.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), y.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  f && l.addBinding(e.solids, "val", { label: "Solids" });
  const b = l.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), F = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), P = () => {
    const y = window.__hekatanClipApply;
    typeof y == "function" && y();
  };
  return b.addBinding(F, "enableX", { label: "Cortar X" }).on("change", P), b.addBinding(F, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", P), b.addBinding(F, "invertX", { label: "  invertir X" }).on("change", P), b.addBinding(F, "enableY", { label: "Cortar Y" }).on("change", P), b.addBinding(F, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", P), b.addBinding(F, "invertY", { label: "  invertir Y" }).on("change", P), b.addBinding(F, "enableZ", { label: "Cortar Z" }).on("change", P), b.addBinding(F, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", P), b.addBinding(F, "invertZ", { label: "  invertir Z" }).on("change", P), d;
}
function Jn(e) {
  return { gridSize: L.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: L.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: L.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: L.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: L.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: L.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: L.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: L.state((e == null ? void 0 : e.gridXZ) ?? false), gridYZ: L.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: L.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: L.state((e == null ? void 0 : e.nodes) ?? true), elements: L.state((e == null ? void 0 : e.elements) ?? true), edges: L.state((e == null ? void 0 : e.edges) ?? true), faces: L.state((e == null ? void 0 : e.faces) ?? true), elemColumns: L.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: L.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: L.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: L.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: L.state((e == null ? void 0 : e.orientations) ?? false), sections: L.state((e == null ? void 0 : e.sections) ?? true), secColumns: L.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: L.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: L.state((e == null ? void 0 : e.secFloor) ?? -1), supports: L.state((e == null ? void 0 : e.supports) ?? true), loads: L.state((e == null ? void 0 : e.loads) ?? false), deformedShape: L.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: L.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: L.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: L.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: L.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: L.state((e == null ? void 0 : e.flipAxes) ?? false), solids: L.state((e == null ? void 0 : e.solids) ?? true), custom3D: L.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: L.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: L.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: L.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function On(e, s, f) {
  const d = tt(), l = new Ft(new se(), new At({ color: d.nodePoint }));
  return Xt((g, w) => {
    l.material.color.setHex(w.nodePoint);
  }), l.frustumCulled = false, L.derive(() => {
    e.nodes.val && l.geometry.setAttribute("position", new Ie(s.val.flat(), 3));
  }), L.derive(() => {
    f.val;
    const g = 0.02 * e.gridSize.val * 0.5;
    e.nodes.rawVal && (l.material.size = g * f.rawVal);
  }), L.derive(() => {
    l.visible = e.nodes.val;
  }), l;
}
function jn(e, s, f) {
  const d = tt(), l = new _e(), g = new ht(new se(), new Ce({ color: d.elementLine }));
  Xt((W, H) => {
    g.material.color.setHex(H.elementLine);
  }), g.frustumCulled = false, g.renderOrder = 2, l.add(g);
  const w = new Ae({ vertexColors: true, transparent: true, opacity: d.shellOpacity, side: Re, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), p = new ke(new se(), w);
  p.frustumCulled = false, l.add(p);
  let b = new Ve(d.shellWall), F = new Ve(d.shellSlab), P = new Ve(d.shellTri);
  Xt((W, H) => {
    b = new Ve(H.shellWall), F = new Ve(H.shellSlab), P = new Ve(H.shellTri), w.opacity = H.shellOpacity, w.needsUpdate = true;
  });
  function y(W, H) {
    const D = Math.abs(H[0] - W[0]), ie = Math.abs(H[1] - W[1]), x = Math.abs(H[2] - W[2]);
    return x > D && x > ie || ie > D && ie > x;
  }
  return L.derive(() => {
    var _a;
    if (s.deformedShape.val, s.elemColumns.val, s.elemBeams.val, !s.elements.val) return;
    const W = s.elemColumns.rawVal, H = s.elemBeams.rawVal, D = f.val, ie = ((_a = e.elements) == null ? void 0 : _a.val) || [], x = ie.filter((N) => {
      if (N.length !== 2) return true;
      const V = D[N[0]], I = D[N[1]];
      if (!V || !I) return true;
      const C = y(V, I);
      return !(C && !W || !C && !H);
    }).map((N) => eo(N).map((V) => [...D[V[0]], ...D[V[1]]]).flat()).flat();
    g.geometry.setAttribute("position", new Ie(x, 3));
    const ee = [], te = [];
    function de(N, V, I, C) {
      const _ = [V[0] - N[0], V[1] - N[1], V[2] - N[2]], T = [C[0] - N[0], C[1] - N[1], C[2] - N[2]], X = _[1] * T[2] - _[2] * T[1], E = _[2] * T[0] - _[0] * T[2], $ = _[0] * T[1] - _[1] * T[0], R = Math.sqrt(X * X + E * E + $ * $);
      return R < 1e-12 ? false : Math.abs($ / R) < 0.5;
    }
    for (const N of ie) if (N.length === 3) {
      const [V, I, C] = N;
      if (D[V] && D[I] && D[C]) {
        ee.push(...D[V], ...D[I], ...D[C]);
        for (let _ = 0; _ < 3; _++) te.push(P.r, P.g, P.b);
      }
    } else if (N.length === 4) {
      const [V, I, C, _] = N;
      if (D[V] && D[I] && D[C] && D[_]) {
        const T = de(D[V], D[I], D[C], D[_]) ? b : F;
        ee.push(...D[V], ...D[I], ...D[C]), ee.push(...D[V], ...D[C], ...D[_]);
        for (let X = 0; X < 6; X++) te.push(T.r, T.g, T.b);
      }
    }
    ee.length > 0 ? (p.geometry.dispose(), p.geometry = new se(), p.geometry.setAttribute("position", new Ie(ee, 3)), p.geometry.setAttribute("color", new Ie(te, 3)), p.geometry.computeVertexNormals(), p.visible = s.faces ? s.faces.rawVal : true) : p.visible = false;
  }), L.derive(() => {
    l.visible = s.elements.val;
  }), L.derive(() => {
    s.edges && (g.visible = s.edges.val);
  }), L.derive(() => {
    if (!s.faces) return;
    const W = s.faces.val;
    p.geometry.attributes.position ? p.visible = W : W || (p.visible = false);
  }), l;
}
function eo(e) {
  if (e.length === 2) return [e];
  const s = [];
  for (let f = 0; f < e.length; f++) s.push([e[f], e[(f + 1) % e.length]]);
  return s;
}
function Ut(e, s) {
  const f = tt(), d = new _e();
  d.name = "hekatan-grid";
  const l = (s == null ? void 0 : s.planes) ?? ["xy"];
  let g = (s == null ? void 0 : s.majorStep) ?? 1, w = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (g <= 0 && (g = 1), w <= 0 && (w = 0.1); e / w > 500; ) w *= 2;
  for (; e / g > 100; ) g *= 2;
  const p = e / 2;
  g = Math.max(w, Math.round(g / w) * w);
  const F = new Ve(f.grid), P = new Ve(f.grid).multiplyScalar(0.45), y = (H, D, ie, x) => {
    const ee = [], te = H === "xy" ? (C, _) => [C, _, 0] : H === "xz" ? (C, _) => [C, 0, _] : (C, _) => [0, C, _], de = Math.floor(p / D);
    for (let C = -de; C <= de; C++) {
      const _ = C * D, T = te(_, -p), X = te(_, p);
      ee.push(...T, ...X);
    }
    for (let C = -de; C <= de; C++) {
      const _ = C * D, T = te(-p, _), X = te(p, _);
      ee.push(...T, ...X);
    }
    const N = new se();
    N.setAttribute("position", new Ie(ee, 3));
    const V = new Ce({ color: ie, transparent: true, opacity: x, depthWrite: false }), I = new ht(N, V);
    return I.name = `grid-${H}-${D === w ? "minor" : "major"}`, I;
  }, W = (H, D, ie) => {
    const x = H === "xy" ? (I, C) => [I, C, 0] : H === "xz" ? (I, C) => [I, 0, C] : (I, C) => [0, I, C], ee = [[-p, -p], [p, -p], [p, p], [-p, p]], te = [];
    for (const [I, C] of ee) te.push(...x(I, C));
    const de = new se();
    de.setAttribute("position", new Ie(te, 3));
    const N = new Ce({ color: D, transparent: true, opacity: ie, depthWrite: false }), V = new vn(de, N);
    return V.name = `grid-${H}-border`, V.renderOrder = 1, V;
  };
  for (const H of l) d.add(y(H, w, P, 0.12)), d.add(y(H, g, F, 0.4)), d.add(W(H, F, 0.55));
  return d.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: g, minorStep: w, gridSize: e, planes: [...l] }, d;
}
function to(e, s, f, d) {
  const l = new _e(), g = new Yn(0.5, 0.5, 0.5), w = new Ae({ color: 10166822 });
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    l.clear();
    const p = 0.05 * s.gridSize.val * 0.6;
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((b, F) => {
      const P = f.val[F];
      if (!P) return;
      const y = new ke(g, w);
      y.position.set(...P);
      const W = p * d.rawVal;
      y.scale.set(W, W, W), l.add(y);
    });
  }), L.derive(() => {
    if (d.val, !s.supports.rawVal) return;
    const b = 0.05 * s.gridSize.val * 0.6 * d.rawVal;
    l.children.forEach((F) => F.scale.set(b, b, b));
  }), L.derive(() => {
    l.visible = s.supports.val;
  }), l;
}
function no(e, s, f, d) {
  const l = new _e();
  l.name = "loadsGroup";
  function g(w) {
    if (w.length < 2) return 0.12 * s.gridSize.rawVal;
    const p = [1 / 0, 1 / 0, 1 / 0], b = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of w) for (let y = 0; y < 3; y++) p[y] = Math.min(p[y], P[y]), b[y] = Math.max(b[y], P[y]);
    return 0.08 * Math.max(b[0] - p[0], b[1] - p[1], b[2] - p[2], 0.1);
  }
  return L.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    l.children.forEach((b) => b.dispose()), l.clear();
    const w = f.val, p = g(w);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((b, F) => {
      const P = w[F];
      if (!P) return;
      const y = new m(...b.slice(0, 3));
      if (y.lengthSq() < 1e-30) return;
      y.normalize();
      const W = new it(y, new m(...P), 1, 15637248, 0.3, 0.3), H = p * d.rawVal;
      W.scale.set(H, H, H), l.add(W);
    });
  }), L.derive(() => {
    if (d.val, !s.loads.rawVal) return;
    const p = g(f.rawVal) * d.rawVal;
    l.children.forEach((b) => b.scale.set(p, p, p));
  }), L.derive(() => {
    l.visible = s.loads.val;
  }), l;
}
function oo(e, s, f) {
  const d = new _e();
  return L.derive(() => {
    if (!e.nodesIndexes.val) return;
    d.children.forEach((g) => g.dispose()), d.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((g, w) => {
      const p = new ze(`${w}`);
      p.position.set(...g), p.updateScale(l * f.rawVal), d.add(p);
    });
  }), L.derive(() => {
    if (f.val, !e.nodesIndexes.rawVal) return;
    const l = 0.05 * e.gridSize.val * 0.6;
    d.children.forEach((g) => g.updateScale(l * f.rawVal));
  }), L.derive(() => {
    d.visible = e.nodesIndexes.val;
  }), d;
}
function so(e, s, f, d) {
  const l = new _e();
  return L.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    l.children.forEach((w) => w.dispose()), l.clear();
    const g = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((w, p) => {
      const b = new ze(`${p}`, void 0, "#001219");
      b.position.set(...ao(w.map((F) => f.rawVal[F]))), b.updateScale(g * d.rawVal), l.add(b);
    });
  }), L.derive(() => {
    if (d.val, !s.elementsIndexes.rawVal) return;
    const g = 0.05 * s.gridSize.val * 0.6;
    l.children.forEach((w) => w.updateScale(g * d.rawVal));
  }), L.derive(() => {
    l.visible = s.elementsIndexes.val;
  }), l;
}
function ao(e) {
  const s = e.reduce((d, l) => [d[0] + l[0], d[1] + l[1], d[2] + l[2]], [0, 0, 0]), f = e.length;
  return [s[0] / f, s[1] / f, s[2] / f];
}
function mn(e, s) {
  const f = new _e(), d = 0.05 * e * 1, l = tt(), g = new ze("X", "red", "transparent"), w = new ze(s ? "Z" : "Y", "green", "transparent"), p = new ze(s ? "Y" : "Z", "blue", "transparent"), b = new it(new m(1, 0, 0), new m(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), F = new it(new m(0, 1, 0), new m(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), P = new it(new m(0, 0, 1), new m(0, 0, 0), 1, l.axisArrow, 0.2, 0.2);
  return g.position.set(1.3 * d, 0, 0), w.position.set(0, 1.3 * d, 0), p.position.set(0, 0, 1.3 * d), g.updateScale(0.4 * d), w.updateScale(0.4 * d), p.updateScale(0.4 * d), b.scale.set(d, d, d), F.scale.set(d, d, d), P.scale.set(d, d, d), f.add(b, F, P, g, w, p), f;
}
function Qt(e, s) {
  const f = new m(...e), l = new m(...s).clone().sub(f), g = l.length(), w = l.dot(new m(1, 0, 0)) / g, p = l.dot(new m(0, 1, 0)) / g, b = l.dot(new m(0, 0, 1)) / g, F = Math.sqrt(w ** 2 + p ** 2);
  let P = new Nt().fromArray([[w, p, b], [-p / F, w / F, 0], [-w * b / F, -p * b / F, F]].flat());
  return b === 1 && (P = new Nt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), b === -1 && (P = new Nt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new gn().setFromMatrix3(P);
}
function Ht(e, s) {
  return e == null ? void 0 : e.map((f, d) => (9 * f + s[d]) / 10);
}
function bt(e) {
  const s = e.reduce((d, l) => [d[0] + l[0], d[1] + l[1], d[2] + l[2]], [0, 0, 0]), f = e.length;
  return [s[0] / f, s[1] / f, s[2] / f];
}
function io(e, s, f) {
  const d = bt([s, f]), l = bt([e, f]), g = bt([e, s]), w = new m(...d).sub(new m(...l)).normalize(), p = new m(...f).sub(new m(...g)).normalize(), b = w.clone().cross(p).normalize(), F = b.clone().cross(w).normalize();
  return new gn().makeBasis(w, F, b);
}
function lo(e, s, f, d) {
  const l = new _e(), g = new se(), w = new Ce({ vertexColors: true }), p = [0, 0, 0], b = [1, 0, 0], F = [0, 1, 0], P = [0, 0, 1];
  g.setAttribute("position", new Ie([...p, ...b, ...p, ...F, ...p, ...P], 3));
  const y = [255, 0, 0], W = [0, 255, 0], H = [0, 0, 255];
  return g.setAttribute("color", new Ie([...y, ...y, ...W, ...W, ...H, ...H], 3)), L.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (l.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((D) => {
      const ie = new ht(g, w), x = f.rawVal[D[0]], ee = f.rawVal[D[1]];
      if (D.length === 2 && (ie.position.set(...Ht(x, ee)), ie.rotation.setFromRotationMatrix(Qt(x, ee))), D.length === 3) {
        const N = f.rawVal[D[2]];
        ie.position.set(...bt([x, ee, N])), ie.rotation.setFromRotationMatrix(io(x, ee, N));
      }
      const de = 0.05 * s.gridSize.rawVal * 0.75 * d.rawVal;
      ie.scale.set(de, de, de), l.add(ie);
    }));
  }), L.derive(() => {
    if (d.val, !s.orientations.rawVal) return;
    const ie = 0.05 * s.gridSize.val * 0.75 * d.rawVal;
    l.children.forEach((x) => x.scale.set(ie, ie, ie));
  }), L.derive(() => {
    l.visible = s.orientations.val;
  }), l;
}
function ro(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), f = (e.h * 100).toFixed(0);
    return `${s}x${f}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function co(e, s, f, d) {
  const l = new _e();
  function g(V, I) {
    const C = V / 2, _ = I / 2, T = new Float32Array([0, -C, -_, 0, C, -_, 0, C, _, 0, -C, -_, 0, C, _, 0, -C, _]), X = new se();
    X.setAttribute("position", new Me(T, 3));
    const E = new Float32Array([0, -C, -_, 0, C, -_, 0, C, _, 0, -C, _, 0, -C, -_]), $ = new se();
    return $.setAttribute("position", new Me(E, 3)), { fill: X, outline: $ };
  }
  function w(V, I = 24) {
    const C = V / 2, _ = new Float32Array(I * 9);
    for (let $ = 0; $ < I; $++) {
      const R = $ / I * Math.PI * 2, K = ($ + 1) / I * Math.PI * 2;
      _[$ * 9] = 0, _[$ * 9 + 1] = 0, _[$ * 9 + 2] = 0, _[$ * 9 + 3] = 0, _[$ * 9 + 4] = C * Math.cos(R), _[$ * 9 + 5] = C * Math.sin(R), _[$ * 9 + 6] = 0, _[$ * 9 + 7] = C * Math.cos(K), _[$ * 9 + 8] = C * Math.sin(K);
    }
    const T = new se();
    T.setAttribute("position", new Me(_, 3));
    const X = new Float32Array((I + 1) * 3);
    for (let $ = 0; $ <= I; $++) {
      const R = $ / I * Math.PI * 2;
      X[$ * 3] = 0, X[$ * 3 + 1] = C * Math.cos(R), X[$ * 3 + 2] = C * Math.sin(R);
    }
    const E = new se();
    return E.setAttribute("position", new Me(X, 3)), { fill: T, outline: E };
  }
  function p(V, I, C, _) {
    const T = C ?? I * 0.08, X = _ ?? V * 0.07, E = V / 2, $ = I / 2, R = $ - T, K = X / 2, Z = [];
    function z(oe, le, pe, re) {
      Z.push(0, oe, le, 0, pe, le, 0, pe, re, 0, oe, le, 0, pe, re, 0, oe, re);
    }
    z(-E, -$, E, -R), z(-K, -R, K, R), z(-E, R, E, $);
    const B = new se();
    B.setAttribute("position", new Me(new Float32Array(Z), 3));
    const ae = new Float32Array([0, -E, -$, 0, E, -$, 0, E, -R, 0, K, -R, 0, K, R, 0, E, R, 0, E, $, 0, -E, $, 0, -E, R, 0, -K, R, 0, -K, -R, 0, -E, -R, 0, -E, -$]), J = new se();
    return J.setAttribute("position", new Me(ae, 3)), { fill: B, outline: J };
  }
  function b(V, I, C) {
    const _ = V / 2, T = I / 2, X = _ - C, E = T - C, $ = [];
    function R(B, ae, J, oe) {
      $.push(0, B, ae, 0, J, ae, 0, J, oe, 0, B, ae, 0, J, oe, 0, B, oe);
    }
    R(-_, -T, _, -E), R(-_, E, _, T), R(-_, -E, -X, E), R(X, -E, _, E);
    const K = new se();
    K.setAttribute("position", new Me(new Float32Array($), 3));
    const Z = new Float32Array([0, -_, -T, 0, _, -T, 0, _, -T, 0, _, T, 0, _, T, 0, -_, T, 0, -_, T, 0, -_, -T, 0, -X, -E, 0, X, -E, 0, X, -E, 0, X, E, 0, X, E, 0, -X, E, 0, -X, E, 0, -X, -E]), z = new se();
    return z.setAttribute("position", new Me(Z, 3)), { fill: K, outline: z };
  }
  function F(V, I, C) {
    const _ = V / 2, T = I / 2, X = _ - C, E = T - C, $ = new se(), R = new Float32Array([0, -X, -E, 0, X, -E, 0, X, E, 0, -X, -E, 0, X, E, 0, -X, E]);
    $.setAttribute("position", new Me(R, 3));
    const K = [];
    function Z(J, oe, le, pe) {
      K.push(0, J, oe, 0, le, oe, 0, le, pe, 0, J, oe, 0, le, pe, 0, J, pe);
    }
    Z(-_, -T, _, -E), Z(-_, E, _, T), Z(-_, -E, -X, E), Z(X, -E, _, E);
    const z = new se();
    z.setAttribute("position", new Me(new Float32Array(K), 3));
    const B = new Float32Array([0, -_, -T, 0, _, -T, 0, _, -T, 0, _, T, 0, _, T, 0, -_, T, 0, -_, T, 0, -_, -T, 0, -X, -E, 0, X, -E, 0, X, -E, 0, X, E, 0, X, E, 0, -X, E, 0, -X, E, 0, -X, -E]), ae = new se();
    return ae.setAttribute("position", new Me(B, 3)), { concFill: $, steelFillGeom: z, outline: ae };
  }
  function P(V, I, C) {
    const _ = [], T = [[0, -V / 2, -I / 2], [0, -V / 2 + C, -I / 2], [0, -V / 2 + C, I / 2 - C], [0, V / 2, I / 2 - C], [0, V / 2, I / 2], [0, -V / 2, I / 2]], X = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const K of X) _.push(...T[K]);
    const E = new se();
    E.setAttribute("position", new Me(new Float32Array(_), 3));
    const $ = [];
    for (let K = 0; K < T.length; K++) {
      const Z = (K + 1) % T.length;
      $.push(...T[K], ...T[Z]);
    }
    const R = new se();
    return R.setAttribute("position", new Me(new Float32Array($), 3)), { fill: E, outline: R };
  }
  function y(V, I, C, _) {
    const T = _ / 2, X = [], E = [[0, -V - T, -I / 2], [0, -C - T, -I / 2], [0, -C - T, I / 2 - C], [0, -T, I / 2 - C], [0, -T, I / 2], [0, -V - T, I / 2]], $ = [[0, T, -I / 2], [0, T + C, -I / 2], [0, T + C, I / 2 - C], [0, V + T, I / 2 - C], [0, V + T, I / 2], [0, T, I / 2]], R = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const B of R) X.push(...E[B]);
    for (const B of R) X.push(...$[B]);
    const K = new se();
    K.setAttribute("position", new Me(new Float32Array(X), 3));
    const Z = [];
    for (const B of [E, $]) for (let ae = 0; ae < B.length; ae++) {
      const J = (ae + 1) % B.length;
      Z.push(...B[ae], ...B[J]);
    }
    const z = new se();
    return z.setAttribute("position", new Me(new Float32Array(Z), 3)), { fill: K, outline: z };
  }
  function W(V, I, C, _) {
    const T = I / 2, X = V, E = [[0, -X, -T], [0, -X, -T + C], [0, -_, -T + C], [0, -_, T - C], [0, -X, T - C], [0, -X, T], [0, 0, T], [0, 0, -T]], $ = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], R = [];
    for (const B of $) R.push(...E[B]);
    const K = new se();
    K.setAttribute("position", new Me(new Float32Array(R), 3));
    const Z = [];
    for (let B = 0; B < E.length; B++) {
      const ae = (B + 1) % E.length;
      Z.push(...E[B], ...E[ae]);
    }
    const z = new se();
    return z.setAttribute("position", new Me(new Float32Array(Z), 3)), { fill: K, outline: z };
  }
  function H(V, I, C, _, T) {
    const X = I / 2, E = T / 2, $ = [], R = [[0, -V, -X], [0, -V, -X + C], [0, -E - _, -X + C], [0, -E - _, X - C], [0, -V, X - C], [0, -V, X], [0, -E, X], [0, -E, -X]], K = R.map((J) => [J[0], -J[1], J[2]]), Z = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const J of Z) $.push(...R[J]);
    for (const J of Z) $.push(...K[J]);
    const z = new se();
    z.setAttribute("position", new Me(new Float32Array($), 3));
    const B = [];
    for (const J of [R, K]) for (let oe = 0; oe < J.length; oe++) {
      const le = (oe + 1) % J.length;
      B.push(...J[oe], ...J[le]);
    }
    const ae = new se();
    return ae.setAttribute("position", new Me(new Float32Array(B), 3)), { fill: z, outline: ae };
  }
  function D(V, I, C, _) {
    const T = V / 2, X = I / 2, E = _ / 2, $ = [[0, -E, -X], [0, E, -X], [0, E, X - C], [0, T, X - C], [0, T, X], [0, -T, X], [0, -T, X - C], [0, -E, X - C]], R = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], K = [];
    for (const ae of R) K.push(...$[ae]);
    const Z = new se();
    Z.setAttribute("position", new Me(new Float32Array(K), 3));
    const z = [];
    for (let ae = 0; ae < $.length; ae++) {
      const J = (ae + 1) % $.length;
      z.push(...$[ae], ...$[J]);
    }
    const B = new se();
    return B.setAttribute("position", new Me(new Float32Array(z), 3)), { fill: Z, outline: B };
  }
  function ie(V, I, C = 24) {
    const _ = V / 2, T = _ - I, X = [];
    for (let K = 0; K < C; K++) {
      const Z = K / C * Math.PI * 2, z = (K + 1) / C * Math.PI * 2, B = Math.cos(Z), ae = Math.sin(Z), J = Math.cos(z), oe = Math.sin(z);
      X.push(0, _ * B, _ * ae, 0, _ * J, _ * oe, 0, T * J, T * oe), X.push(0, _ * B, _ * ae, 0, T * J, T * oe, 0, T * B, T * ae);
    }
    const E = new se();
    E.setAttribute("position", new Me(new Float32Array(X), 3));
    const $ = [];
    for (let K = 0; K < C; K++) {
      const Z = K / C * Math.PI * 2, z = (K + 1) / C * Math.PI * 2;
      $.push(0, _ * Math.cos(Z), _ * Math.sin(Z), 0, _ * Math.cos(z), _ * Math.sin(z)), $.push(0, T * Math.cos(Z), T * Math.sin(Z), 0, T * Math.cos(z), T * Math.sin(z));
    }
    const R = new se();
    return R.setAttribute("position", new Me(new Float32Array($), 3)), { fill: E, outline: R };
  }
  const x = new Ae({ color: 52479, transparent: true, opacity: 0.35, side: Re, depthWrite: false }), ee = new Ce({ color: 52479 }), te = new Ae({ color: 16750848, transparent: true, opacity: 0.4, side: Re, depthWrite: false }), de = new Ce({ color: 16750848 });
  function N(V, I) {
    const C = Math.abs(I[0] - V[0]), _ = Math.abs(I[1] - V[1]), T = Math.abs(I[2] - V[2]);
    return T > C && T > _ || _ > C && _ > T;
  }
  return L.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const V = s.secColumns.rawVal, I = s.secBeams.rawVal;
    if (!V && !I) {
      l.children.forEach((E) => {
        E instanceof ze && E.dispose();
      }), l.clear();
      return;
    }
    l.children.forEach((E) => {
      E instanceof ze && E.dispose();
    }), l.clear();
    const C = (_a = e.elements) == null ? void 0 : _a.val, _ = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!C || !_) return;
    const T = _.sectionShapes, X = s.secFloor.rawVal;
    C.forEach((E, $) => {
      if (E.length !== 2) return;
      const R = f.rawVal[E[0]], K = f.rawVal[E[1]];
      if (!R || !K) return;
      const Z = N(R, K);
      if (Z && !V || !Z && !I) return;
      if (X >= 0) {
        const oe = Math.min(R[1], K[1]);
        Math.max(R[1], K[1]);
        const le = s.gridSize.rawVal || 3;
        if (Math.floor(oe / le + 0.01) !== X) return;
      }
      const z = T == null ? void 0 : T.get($);
      if (!z) return;
      const B = [(R[0] + K[0]) / 2, (R[1] + K[1]) / 2, (R[2] + K[2]) / 2], ae = Qt(R, K);
      if (z.type === "CFT") {
        const oe = F(z.b, z.h, z.tw ?? z.b * 0.05), le = new ke(oe.concFill, x);
        le.position.set(...B), le.rotation.setFromRotationMatrix(ae), l.add(le);
        const pe = new ke(oe.steelFillGeom, te);
        pe.position.set(...B), pe.rotation.setFromRotationMatrix(ae), l.add(pe);
        const re = new Ee(oe.outline, de);
        re.position.set(...B), re.rotation.setFromRotationMatrix(ae), l.add(re);
      } else {
        let oe, le, pe;
        switch (z.type) {
          case "rect":
            oe = g(z.b, z.h), le = x, pe = ee;
            break;
          case "circ":
            oe = w(z.d), le = x, pe = ee;
            break;
          case "I":
            oe = p(z.b, z.h, z.tf, z.tw), le = te, pe = de;
            break;
          case "HSS":
            oe = b(z.b, z.h, z.tw ?? z.b * 0.05), le = te, pe = de;
            break;
          case "CFT":
            oe = F(z.b, z.h, z.tw ?? z.b * 0.05), le = te, pe = de;
            break;
          case "L":
            oe = P(z.b ?? z.h, z.h, z.t ?? z.tw ?? 3e-3), le = te, pe = de;
            break;
          case "2L":
            oe = y(z.b ?? z.h, z.h, z.t ?? z.tw ?? 3e-3, z.dis ?? 0.01), le = te, pe = de;
            break;
          case "C":
          case "coldC":
            oe = W(z.b, z.h, z.tf ?? z.t ?? 3e-3, z.tw ?? z.t ?? 3e-3), le = te, pe = de;
            break;
          case "2C":
            oe = H(z.b, z.h, z.tf ?? 5e-3, z.tw ?? 5e-3, z.dis ?? 0.01), le = te, pe = de;
            break;
          case "T":
            oe = D(z.b, z.h, z.tf ?? 0.01, z.tw ?? 6e-3), le = te, pe = de;
            break;
          case "pipe":
            oe = ie(z.d, z.tw ?? z.d * 0.05), le = te, pe = de;
            break;
          default:
            return;
        }
        const re = new ke(oe.fill, le);
        re.position.set(...B), re.rotation.setFromRotationMatrix(ae), l.add(re);
        const he = new Ee(oe.outline, pe);
        he.position.set(...B), he.rotation.setFromRotationMatrix(ae), l.add(he);
      }
      const J = ro(z);
      if (J) {
        const le = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(z.type) ? "#ff9900" : "#00ccff", pe = new ze(J, le, "transparent");
        pe.position.set(B[0], B[1], B[2]);
        const re = 0.05 * s.gridSize.rawVal * 0.5;
        pe.updateScale(re * ((d == null ? void 0 : d.rawVal) ?? 1)), l.add(pe);
      }
    });
  }), d && L.derive(() => {
    if (d.val, !s.sections.rawVal) return;
    const V = 0.05 * s.gridSize.val * 0.5;
    l.children.forEach((I) => {
      I instanceof ze && I.updateScale(V * d.rawVal);
    });
  }), L.derive(() => {
    l.visible = s.sections.val;
  }), l;
}
class zt extends _e {
  constructor(s, f, d, l, g, w, p) {
    super();
    const b = new Tt().moveTo(0, 0).lineTo(0, w[1]).lineTo(d, w[1]).lineTo(d, 0).lineTo(0, 0), F = b.getPoints(), P = new se().setFromPoints(F);
    this.lines = new Ee(P, new Ce({ color: tt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), p && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const y = new Et(b), W = new Ae({ color: w[1] > 0 ? 24435 : 11411474, side: Re });
    this.mesh = new ke(y, W), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), p && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new ze(`${g[1].toFixed(4)}`), this.normalizedResult = w, this.textPosition = bt([s, f]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(l), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class wn extends _e {
  constructor(s, f, d, l, g, w, p) {
    super();
    const b = g[0] * d / (g[0] + g[1]), F = g[0] * g[1] > 0;
    if (this.text = new ze(`${g[0].toFixed(4)}`), this.text2 = new ze(`${(g[1] * -1).toFixed(4)}`), this.normalizedResult = w, this.textPosition = Ht(s, f), this.text2Position = Ht(f, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(l), this.text2.rotation.setFromRotationMatrix(l), this.add(this.text, this.text2), F) {
      const P = new Tt().moveTo(0, 0).lineTo(0, w[0]).lineTo(b, 0).lineTo(0, 0), y = new Tt().moveTo(b, 0).lineTo(d, -w[1]).lineTo(d, 0).lineTo(b, 0), W = P.getPoints(), H = y.getPoints(), D = new se().setFromPoints(W), ie = new se().setFromPoints(H), x = new Ce({ color: tt().resultOutline });
      this.lines = new Ee(D, x), this.lines2 = new Ee(ie, x), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), this.lines2.rotation.setFromRotationMatrix(l), p && this.lines.rotateX(Math.PI / 2), p && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const ee = new Et(P), te = new Et(y), de = new Ae({ color: w[0] > 0 ? 24435 : 11411474, side: Re }), N = new Ae({ color: -w[1] > 0 ? 24435 : 11411474, side: Re });
      this.mesh = new ke(ee, de), this.mesh2 = new ke(te, N), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), this.mesh2.rotation.setFromRotationMatrix(l), p && this.mesh.rotateX(Math.PI / 2), p && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Tt().moveTo(0, 0).lineTo(0, w[0]).lineTo(d, -w[1]).lineTo(d, 0).lineTo(0, 0), y = P.getPoints(), W = new se().setFromPoints(y);
      this.lines = new Ee(W, new Ce({ color: tt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), p && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const H = new Et(P), D = new Ae({ color: w[0] > 0 ? 24435 : 11411474, side: Re });
      this.mesh = new ke(H, D), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), p && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var bn = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(bn || {});
function po(e, s, f, d) {
  const l = new _e(), g = { normals: zt, shearsY: zt, shearsZ: zt, torsions: zt, bendingsY: wn, bendingsZ: wn };
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, f.val, s.frameResults.val == "none") return;
    l.children.forEach((p) => p.dispose()), l.clear();
    const w = bn[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[w]) == null ? void 0 : _b.forEach((p, b) => {
      var _a2, _b2;
      const F = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[b]) ?? [0, 1], P = f.rawVal[F[0]], y = f.rawVal[F[1]], W = new m(...y).distanceTo(new m(...P)), H = uo((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[w]), D = p == null ? void 0 : p.map((te) => te / (H === 0 ? 1 : H)), ie = Qt(P, y), x = new g[w](P, y, W, ie, p ?? [0, 0], D ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(w)), ee = 0.05 * s.gridSize.rawVal;
      x.updateScale(ee * d.rawVal), l.add(x);
    });
  }), L.derive(() => {
    if (d.val, s.frameResults.rawVal == "none") return;
    const w = 0.05 * s.gridSize.val;
    l.children.forEach((p) => p.updateScale(w * d.rawVal));
  }), L.derive(() => {
    l.visible = s.frameResults.val != "none";
  }), l;
}
function uo(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((f) => {
    const d = Math.max(...f ?? [0, 0]);
    d > s && (s = d);
  }), s;
}
class ho extends _e {
  constructor(s, f, d) {
    super();
    const l = f === Jt.reactions;
    d[0] && (this.xText1 = new ze(`${l ? "Fx" : "Dx"}: ` + d[0].toFixed(4))), d[3] && (this.xText2 = new ze(`${l ? "Mx" : "Rx"}: ` + d[3].toFixed(4))), d[1] && (this.yText1 = new ze(`${l ? "Fy" : "Dy"}: ` + d[1].toFixed(4))), d[4] && (this.yText2 = new ze(`${l ? "My" : "Ry"}: ` + d[4].toFixed(4))), d[2] && (this.zText1 = new ze(`${l ? "Fz" : "Dz"}: ` + d[2].toFixed(4))), d[5] && (this.zText2 = new ze(`${l ? "Mz" : "Rz"}: ` + d[5].toFixed(4))), (d[0] || d[3]) && (this.xArrow = new it(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (d[1] || d[4]) && (this.yArrow = new it(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (d[2] || d[5]) && (this.zArrow = new it(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(s) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(s, s, s), (_b = this.yArrow) == null ? void 0 : _b.scale.set(s, s, s), (_c = this.zArrow) == null ? void 0 : _c.scale.set(s, s, s), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * s, 0, 0), (_e2 = this.xText2) == null ? void 0 : _e2.position.set(1.3 * s, 0, 0.5 * s), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * s, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * s, 0.5 * s), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * s), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * s + 0.5 * s), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * s), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * s), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * s), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * s), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * s), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * s);
  }
  dispose() {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e2 = this.xText2) == null ? void 0 : _e2.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var Jt = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Jt || {});
function fo(e, s, f, d) {
  const l = new _e();
  return L.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    l.children.forEach((p) => p.dispose()), l.clear();
    const g = Jt[s.nodeResults.rawVal], w = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[g]) == null ? void 0 : _b.forEach((p, b) => {
      const F = new ho(f.rawVal[b], g, p ?? [0, 0, 0, 0, 0, 0]);
      F.updateScale(w * d.rawVal), l.add(F);
    });
  }), L.derive(() => {
    if (d.val, s.nodeResults.rawVal == "none") return;
    const g = 0.05 * s.gridSize.val;
    l.children.forEach((w) => w.updateScale(g * d.rawVal));
  }), L.derive(() => {
    l.visible = s.nodeResults.val != "none";
  }), l;
}
function mo({ drawingObj: e, gridObj: s, scene: f, getActiveCamera: d, controls: l, gridSize: g, derivedDisplayScale: w, rendererElm: p, viewerRender: b }) {
  const F = new Ln(), P = new In(), y = (n) => {
    const o = p.getBoundingClientRect(), r = n.clientX - o.left, t = n.clientY - o.top, u = o.width || 1, c = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const a = u / 2;
      if (r >= a) return P.x = (r - a) / a * 2 - 1, P.y = -(t / c) * 2 + 1, window.__hekatanSplitCamera ?? d();
      P.x = r / a * 2 - 1;
    } else P.x = r / u * 2 - 1;
    return P.y = -(t / c) * 2 + 1, d();
  }, W = new ke(new kt(1e4, 1e4), new Ae({ side: Re, transparent: true, opacity: 0, depthWrite: false }));
  W.visible = true, W.frustumCulled = false, f.add(W);
  const H = (n, o, r) => {
    const t = new ke(new kt(1e4, 1e4), new Ae({ side: Re, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, r), t.visible = false, t.frustumCulled = false, f.add(t), t;
  }, D = H(Math.PI / 2, 0, 0), ie = H(0, Math.PI / 2, 0), x = () => {
    if (D.visible = !!window.__hekatanGridPlaneXZ, ie.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && Y.visible) {
      const r = F.intersectObjects([Y, U, Q], false);
      if (r.length > 0) return r;
    }
    const o = [W];
    return D.visible && o.push(D), ie.visible && o.push(ie), Ge.visible && dt.length > 0 && o.push(...dt), F.intersectObjects(o, false);
  }, ee = new Ft(new se(), new At()), te = new Ft(new se(), new At({ color: "gray", sizeAttenuation: false, size: 6 })), de = new Ft(new se(), new At({ color: "orange", size: 0.1 }));
  f.add(de);
  const N = document.createElement("input");
  N.id = "hk-rubber-label", N.type = "text", N.spellcheck = false, N.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, N.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(N);
  let V = null, I = null, C = false;
  const _ = new m(), T = (n, o, r, t, u, c) => {
    const k = t - n, a = u - o, i = c - r, v = Math.hypot(k, a, i);
    if (v < 0.01) {
      N.style.display = "none";
      return;
    }
    V = [n, o, r], I = [k / v, a / v, i / v], _.set((n + t) / 2, (o + u) / 2, (r + c) / 2), _.project(d());
    const S = p.getBoundingClientRect(), h = S.left + (_.x * 0.5 + 0.5) * S.width, M = S.top + (-_.y * 0.5 + 0.5) * S.height;
    if (N.style.left = h + "px", N.style.top = M + "px", N.style.display = "block", !C) {
      if (N.value = `${v.toFixed(2)} m`, document.activeElement !== N) {
        const A = document.activeElement;
        A && (A.tagName === "INPUT" || A.tagName === "TEXTAREA") && A !== N || N.focus({ preventScroll: true });
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
      Fe = n, ce(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), N.blur();
      return;
    }
    if (!V || !I || !e.polylines) return;
    let r = I[0], t = I[1], u = I[2];
    fe === "x" ? (r = Math.sign(r) || 1, t = 0, u = 0) : fe === "y" ? (r = 0, t = Math.sign(t) || 1, u = 0) : fe === "z" && (r = 0, t = 0, u = Math.sign(u) || 1);
    const c = V[0] + r * n, k = V[1] + t * n, a = V[2] + u * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [c, k, a]];
    const i = e.polylines.rawVal, v = i.length ? i[i.length - 1] : [];
    e.polylines.val = [...i.slice(0, -1), [...v, e.points.rawVal.length - 1]], N.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    b();
  }, $ = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const r = o.startsWith("@");
    if (r && (o = o.slice(1)), o.includes("<")) {
      const u = o.split("<").map((c) => parseFloat(c.trim()));
      if (u.some(isNaN)) return null;
      if (u.length === 2) {
        const [c, k] = u;
        return r ? { kind: "relPolar", L: c, ang: k } : { kind: "absPolar", L: c, ang: k };
      }
      if (u.length === 3 && r) {
        const [c, k, a] = u;
        return { kind: "relSpherical", L: c, az: k, el: a };
      }
      return null;
    }
    if (o.includes(",")) {
      const u = o.split(",").map((i) => parseFloat(i.trim()));
      if (u.some(isNaN)) return null;
      const [c, k, a = 0] = u;
      return r ? { kind: "relCart", dx: c, dy: k, dz: a } : { kind: "absCart", x: c, y: k, z: a };
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
  }, K = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, r = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...r, e.points.rawVal.length - 1]], N.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    b();
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
        K(t);
        const u = r.kind;
        ce(`\u270F ${u} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
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
  const z = new Ee(new se().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new vt({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  z.frustumCulled = false, z.visible = false, f.add(z);
  const B = new _e();
  B.frustumCulled = false, B.visible = false, f.add(B);
  const ae = (n) => {
    const o = new se().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), r = new vt({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Ee(o, r);
  }, J = ae(16711680), oe = ae(65280), le = ae(35071);
  B.add(J, oe, le);
  const pe = (n) => {
    const o = new se().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), r = new Ce({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new vn(o, r);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, re = pe(3462041), he = pe(16724804), ge = pe(6333946), Se = new _e();
  Se.frustumCulled = false, Se.visible = false, f.add(Se), Se.add(re, he, ge);
  const Te = (n) => {
    const o = new kt(1, 1), r = new Ae({ color: n, transparent: true, opacity: 0.06, side: Re, depthWrite: false }), t = new ke(o, r);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Y = Te(3462041), U = Te(16724804), Q = Te(6333946);
  Se.add(Y, U, Q);
  const O = (n, o, r, t) => {
    n.scale.set(2 * t, 2 * t, 1), r === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : r === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, ue = document.createElement("div");
  ue.id = "hk-refplane-badge", ue.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(ue), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Se.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = r[r.length - 1] ?? [], u = e.points.rawVal ?? [], c = o && o.length === 3 ? o : t.length > 0 && u[t[t.length - 1]] ? u[t[t.length - 1]] : [0, 0, 0], k = window.__hekatanOrthoExt ?? 8;
      ye(re, c, "xy", k), ye(he, c, "xz", k), ye(ge, c, "yz", k), O(Y, c, "xy", k), O(U, c, "xz", k), O(Q, c, "yz", k), Y.material.opacity = 0.1, U.material.opacity = 0.1, Q.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    b();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !Se.visible) {
      b();
      return;
    }
    const o = window.__hekatanOrthoAnchor, r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = r[r.length - 1] ?? [], u = e.points.rawVal ?? [], c = o && o.length === 3 ? o : t.length > 0 && u[t[t.length - 1]] ? u[t[t.length - 1]] : [0, 0, 0];
    ye(re, c, "xy", n), ye(he, c, "xz", n), ye(ge, c, "yz", n), O(Y, c, "xy", n), O(U, c, "xz", n), O(Q, c, "yz", n), b();
  };
  const xe = (n) => {
    if (Y.material.opacity = n === "xy" ? 0.22 : 0.04, U.material.opacity = n === "xz" ? 0.22 : 0.04, Q.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const u = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      ue.style.background = u.bg, ue.style.color = u.text, ue.textContent = `\u25A6 Plano ${n.toUpperCase()}`, ue.style.display = "block";
    } else ue.style.display = "none";
  }, ye = (n, o, r, t) => {
    let u;
    r === "xy" ? u = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : r === "xz" ? u = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : u = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(u);
  };
  let fe = null;
  window.__hekatanAxisLock = () => fe;
  const ve = document.createElement("div");
  ve.id = "hk-axis-lock-badge", ve.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(ve);
  const nt = () => {
    if (!fe) {
      ve.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    ve.style.background = "rgba(15,23,42,0.92)", ve.style.color = n[fe], ve.style.border = `1.5px solid ${n[fe]}`, ve.textContent = `\u{1F512} LOCK ${fe.toUpperCase()}`, ve.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== N) return;
    const r = n.key.toLowerCase();
    if (r === "x" || r === "y" || r === "z") fe = fe === r ? null : r, nt(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), on(), n.preventDefault();
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
  const lt = new m(), rt = new m(), ft = new m(), _n = (n) => {
    if (!fe) return null;
    const o = n[0], r = n[1], t = n[2];
    return fe === "x" ? (lt.set(o - 1e4, r, t), rt.set(o + 1e4, r, t)) : fe === "y" ? (lt.set(o, r - 1e4, t), rt.set(o, r + 1e4, t)) : (lt.set(o, r, t - 1e4), rt.set(o, r, t + 1e4)), F.ray.distanceSqToSegment(lt, rt, null, ft), ft;
  };
  window.__hekatanProjectOnAxis = _n;
  const Xe = new Ee(new se().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new Ce({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Xe.renderOrder = 998, Xe.frustumCulled = false, Xe.visible = false, f.add(Xe);
  let Je = -1, ct = -1, Oe = -1;
  const Ne = /* @__PURE__ */ new Set();
  window.__hekatanSelection = Ne;
  const We = new Ee(new se().setFromPoints([new m(), new m()]), new Ce({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  We.renderOrder = 997, We.frustumCulled = false, We.visible = false, f.add(We);
  const $e = new ke(new Pt(0.02, 12, 12), new Ae({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  $e.renderOrder = 998, $e.visible = false, f.add($e);
  const Sn = () => {
    if (!$e.visible) return;
    const o = d().position.distanceTo($e.position), r = Math.max(0.05, o / 10);
    $e.scale.setScalar(r);
  }, je = new _e();
  je.frustumCulled = false, f.add(je);
  const Mt = 2282478;
  let et = null;
  const kn = (n, o, r, t) => {
    if (!e.points) return -1;
    const u = e.points.rawVal;
    let c = -1, k = t;
    for (let a = 0; a < u.length; a++) {
      const i = u[a];
      if (!i) continue;
      const v = Math.hypot(n - i[0], o - i[1], r - i[2]);
      v < k && (k = v, c = a);
    }
    return c;
  }, _t = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; je.children.length; ) {
      const u = je.children.pop();
      (_b = (_a = u.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = u.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const u of Ne) {
      const [c, ...k] = u.split(":");
      if (c === "pt") {
        const a = n[+k[0]];
        if (!a) continue;
        const i = new ke(new Pt(0.07, 12, 12), new Ae({ color: Mt, transparent: true, opacity: 0.9, depthTest: false }));
        i.position.set(a[0], a[1], a[2]), i.renderOrder = 999, je.add(i);
      } else if (c === "seg") {
        const a = o[+k[0]], i = n[a == null ? void 0 : a[+k[1]]], v = n[a == null ? void 0 : a[+k[1] + 1]];
        if (!i || !v) continue;
        const S = new se().setFromPoints([new m(i[0], i[1], i[2]), new m(v[0], v[1], v[2])]), h = new Ee(S, new Ce({ color: Mt, transparent: true, opacity: 0.95, depthTest: false }));
        h.renderOrder = 999, je.add(h);
      } else if (c === "poly") {
        const i = o[+k[0]].map((h) => {
          const M = n[h];
          return M ? new m(M[0], M[1], M[2]) : null;
        }).filter(Boolean);
        if (i.length < 2) continue;
        const v = new se().setFromPoints(i), S = new Ee(v, new Ce({ color: Mt, transparent: true, opacity: 0.95, depthTest: false }));
        S.renderOrder = 999, je.add(S);
      } else if (c === "aux") {
        const a = t[+k[0]];
        if (!a || a.length !== 6) continue;
        const i = new se().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), v = new Ee(i, new Ce({ color: Mt, transparent: true, opacity: 0.95, depthTest: false }));
        v.renderOrder = 999, je.add(v);
      }
    }
    b();
  };
  window.__hekatanRefreshSelection = _t, window.__hekatanClearSelection = () => {
    Ne.clear(), _t();
  };
  const Yt = (n, o, r, t, u, c, k, a, i) => {
    const v = k - t, S = a - u, h = i - c, M = v * v + S * S + h * h;
    if (M < 1e-12) return Math.hypot(n - t, o - u, r - c);
    let A = ((n - t) * v + (o - u) * S + (r - c) * h) / M;
    A = Math.max(0, Math.min(1, A));
    const G = t + A * v, ne = u + A * S, j = c + A * h;
    return Math.hypot(n - G, o - ne, r - j);
  }, Lt = (n, o, r, t) => {
    if (!e.polylines) return null;
    const u = e.polylines.rawVal, c = e.points.rawVal;
    let k = -1, a = -1, i = t;
    for (let v = 0; v < u.length; v++) {
      const S = u[v];
      for (let h = 0; h < S.length - 1; h++) {
        const M = c[S[h]], A = c[S[h + 1]];
        if (!M || !A) continue;
        const G = Yt(n, o, r, M[0], M[1], M[2], A[0], A[1], A[2]);
        G < i && (i = G, k = v, a = h);
      }
    }
    return k >= 0 ? { polyIdx: k, segIdx: a, dist: i } : null;
  }, jt = (n, o, r, t) => {
    const u = window.__hekatanDrawingAuxLines, c = (u == null ? void 0 : u.rawVal) ?? (u == null ? void 0 : u.val) ?? u ?? [];
    let k = -1, a = t;
    for (let i = 0; i < c.length; i++) {
      const v = c[i];
      if (!v || v.length !== 6) continue;
      const S = Yt(n, o, r, v[0], v[1], v[2], v[3], v[4], v[5]);
      S < a && (a = S, k = i);
    }
    return k;
  }, Pn = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      Xe.visible = false;
      return;
    }
    Xe.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), Xe.visible = true;
  }, Cn = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const r = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!r || r.length < 2) {
      Xe.visible = false;
      return;
    }
    const u = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, c = [];
    if (u || o < 0 || o >= r.length - 1) for (const k of r) {
      const a = t[k];
      a && c.push(new m(a[0], a[1], a[2]));
    }
    else {
      const k = t[r[o]], a = t[r[o + 1]];
      k && c.push(new m(k[0], k[1], k[2])), a && c.push(new m(a[0], a[1], a[2]));
    }
    Xe.geometry.setFromPoints(c), Xe.visible = true;
  }, St = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const r = o.filter((i, v) => v !== n), t = /* @__PURE__ */ new Set();
    for (const i of r) for (const v of i) t.add(v);
    const u = e.points.rawVal, c = /* @__PURE__ */ new Map(), k = [];
    for (let i = 0; i < u.length; i++) t.has(i) && (c.set(i, k.length), k.push(u[i]));
    const a = r.map((i) => i.map((v) => c.get(v)).filter((v) => v !== void 0));
    e.points.val = k, e.polylines.val = a, e.areas && (e.areas.val = e.areas.rawVal.filter((i) => i !== n).map((i) => i > n ? i - 1 : i)), Xe.visible = false, Je = -1, ct = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, Vn = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const r = e.polylines.rawVal;
    if (n < 0 || n >= r.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      St(n);
      return;
    }
    const u = r[n];
    if (o < 0 || o >= u.length - 1) return;
    if (u.length === 2) {
      St(n);
      return;
    }
    let c;
    o === 0 ? c = [u.slice(1)] : o === u.length - 2 ? c = [u.slice(0, -1)] : c = [u.slice(0, o + 1), u.slice(o + 1)];
    const k = [...r.slice(0, n), ...c, ...r.slice(n + 1)], a = /* @__PURE__ */ new Set();
    for (const M of k) for (const A of M) a.add(A);
    const i = e.points.rawVal, v = /* @__PURE__ */ new Map(), S = [];
    for (let M = 0; M < i.length; M++) a.has(M) && (v.set(M, S.length), S.push(i[M]));
    const h = k.map((M) => M.map((A) => v.get(A)).filter((A) => A !== void 0));
    if (e.points.val = S, e.polylines.val = h, e.areas) {
      const M = c.length - 1;
      e.areas.val = e.areas.rawVal.map((A) => A > n ? A + M : A);
    }
    Xe.visible = false, Je = -1, ct = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  ee.geometry.setAttribute("position", new Ie(e.points.rawVal.flat(), 3)), ee.geometry.computeBoundingSphere(), ee.frustumCulled = false, te.frustumCulled = false, f.add(te), W.position.set(0, 0, 0), W.rotateX(Math.PI / 2), W.geometry.rotateX(Math.PI / 2), W.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, r) => {
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
    const k = Math.max(4, Math.round(u)), a = e.points.rawVal.length, i = [];
    for (let v = 0; v < k; v++) {
      const S = 2 * Math.PI * v / k, h = t * Math.cos(S), M = t * Math.sin(S);
      let A;
      c === "xy" ? A = [n + h, o + M, r] : c === "xz" ? A = [n + h, o, r + M] : A = [n, o + h, r + M], i.push(A);
    }
    if (e.points.val = [...e.points.rawVal, ...i], e.polylines) {
      const v = [...i.map((h, M) => a + M), a], S = e.polylines.rawVal;
      ((_a = S[S.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...S, v, []] : e.polylines.val = [...S.slice(0, -1), v, []];
    }
  }, window.__hekatanDrawArc = (n, o, r, t = window.__hekatanArcSegs ?? 12) => {
    const u = Math.max(4, Math.round(t)), c = new m(...n), k = new m(...o), a = new m(...r), i = new m().subVectors(k, c), v = new m().subVectors(a, c), S = new m().crossVectors(i, v).normalize(), h = new m().addVectors(c, k).multiplyScalar(0.5), M = new m().addVectors(k, a).multiplyScalar(0.5), A = new m().crossVectors(i, S).normalize(), G = new m().crossVectors(new m().subVectors(a, k), S).normalize(), ne = new m().subVectors(M, h), j = A.x * G.y - A.y * G.x;
    let q;
    if (Math.abs(j) > 1e-9) {
      const Le = (ne.x * G.y - ne.y * G.x) / j;
      q = new m().addVectors(h, A.clone().multiplyScalar(Le));
    } else q = h.clone();
    const we = c.distanceTo(q), be = new m().subVectors(c, q), De = new m().subVectors(a, q), Ze = Math.acos(Math.max(-1, Math.min(1, be.dot(De) / (we * we)))), He = e.points.rawVal.length, Ye = [], qe = S.clone();
    for (let Le = 0; Le <= u; Le++) {
      const Qe = Le / u, Ue = Ze * Qe, ut = new an().setFromAxisAngle(qe, Ue), at = be.clone().applyQuaternion(ut).add(q);
      Ye.push([at.x, at.y, at.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...Ye], e.polylines) {
      const Le = Ye.map((Ue, ut) => He + ut), Qe = e.polylines.rawVal;
      e.polylines.val = [...Qe.slice(0, -1), Le, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, r = 1, t = 6, u = 6) => {
    const c = Math.min(n[0], o[0]), k = Math.max(n[0], o[0]), a = Math.min(n[1], o[1]), i = Math.max(n[1], o[1]), v = (n[2] + o[2]) / 2, S = k - c, h = i - a, M = Math.min(r, S / 2 - 0.01, h / 2 - 0.01);
    if (M <= 0) return;
    const A = e.points.rawVal.length, G = [], ne = [], j = (q, we) => {
      G.push([q, we, v]), ne.push(A + G.length - 1);
    };
    for (let q = 0; q <= u; q++) j(c + M + (S - 2 * M) * q / u, a);
    for (let q = 1; q <= t; q++) {
      const we = -Math.PI / 2 + Math.PI / 2 * q / t;
      j(k - M + M * Math.cos(we), a + M + M * Math.sin(we));
    }
    for (let q = 1; q <= u; q++) j(k, a + M + (h - 2 * M) * q / u);
    for (let q = 1; q <= t; q++) {
      const we = 0 + Math.PI / 2 * q / t;
      j(k - M + M * Math.cos(we), i - M + M * Math.sin(we));
    }
    for (let q = 1; q <= u; q++) j(k - M - (S - 2 * M) * q / u, i);
    for (let q = 1; q <= t; q++) {
      const we = Math.PI / 2 + Math.PI / 2 * q / t;
      j(c + M + M * Math.cos(we), i - M + M * Math.sin(we));
    }
    for (let q = 1; q <= u; q++) j(c, i - M - (h - 2 * M) * q / u);
    for (let q = 1; q <= t; q++) {
      const we = Math.PI + Math.PI / 2 * q / t;
      j(c + M + M * Math.cos(we), a + M + M * Math.sin(we));
    }
    if (ne.push(A), e.points.val = [...e.points.rawVal, ...G], e.polylines) {
      const q = e.polylines.rawVal;
      e.polylines.val = [...q.slice(0, -1), ne, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const r = e.points.rawVal.length, t = n[0], u = n[1], c = n[2], k = o[0], a = o[1], i = o[2];
    let v;
    if (Math.abs(c - i) < 1e-6 ? v = [[t, u, c], [k, u, c], [k, a, c], [t, a, c]] : Math.abs(u - a) < 1e-6 ? v = [[t, u, c], [k, u, c], [k, u, i], [t, u, i]] : v = [[t, u, c], [t, a, c], [t, a, i], [t, u, i]], e.points.val = [...e.points.rawVal, ...v], e.polylines) {
      const S = [r, r + 1, r + 2, r + 3, r], h = e.polylines.rawVal;
      e.polylines.val = [...h.slice(0, -1), S, []];
    }
  };
  const Be = new _e();
  Be.visible = false, f.add(Be), window.__hekatanShowAxes = (n, o, r = 12, t = 2) => {
    var _a, _b;
    for (; Be.children.length; ) {
      const S = Be.children.pop();
      (_a = S.geometry) == null ? void 0 : _a.dispose(), (_b = S.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const u = Math.min(...o) - t, c = Math.max(...o) + t, k = Math.min(...n) - t, a = Math.max(...n) + t, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", v = (S, h, M, A, G) => {
      const ne = document.createElement("canvas");
      ne.width = 64, ne.height = 32;
      const j = ne.getContext("2d");
      j.fillStyle = G, j.font = "bold 22px sans-serif", j.textAlign = "center", j.fillText(S, 32, 26);
      const q = new ln(ne), we = new rn({ map: q, transparent: true }), be = new cn(we);
      return be.position.set(h, M, A), be.scale.set(1.2, 0.6, 1), be;
    };
    n.forEach((S, h) => {
      const M = h < i.length ? i[h] : `X${h}`, A = new se().setFromPoints([new m(S, u, 0), new m(S, c, 0), new m(S, u, 0), new m(S, u, r)]), G = new vt({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), ne = new ht(A, G);
      ne.computeLineDistances(), Be.add(ne), Be.add(v(M, S, u - 0.5, 0, "#60a5fa")), Be.add(v(M, S, c + 0.5, 0, "#60a5fa"));
    }), o.forEach((S, h) => {
      const M = `${h + 1}`, A = new se().setFromPoints([new m(k, S, 0), new m(a, S, 0), new m(k, S, 0), new m(k, S, r)]), G = new vt({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), ne = new ht(A, G);
      ne.computeLineDistances(), Be.add(ne), Be.add(v(M, k - 0.5, S, 0, "#fb7185")), Be.add(v(M, a + 0.5, S, 0, "#fb7185"));
    }), Be.visible = true, b();
  }, window.__hekatanHideAxes = () => {
    Be.visible = false, b();
  };
  const Ge = new _e();
  Ge.visible = false, f.add(Ge);
  let dt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, r = 0, t = 0) => {
    var _a, _b;
    for (; Ge.children.length; ) {
      const c = Ge.children.pop();
      (_a = c.geometry) == null ? void 0 : _a.dispose(), (_b = c.material) == null ? void 0 : _b.dispose();
    }
    dt.forEach((c) => {
      f.remove(c), c.geometry.dispose(), c.material.dispose();
    }), dt = [];
    const u = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((c, k) => {
      const a = u[k % u.length], i = o / 2, v = [new m(r - i, t - i, c), new m(r + i, t - i, c), new m(r + i, t + i, c), new m(r - i, t + i, c), new m(r - i, t - i, c)], S = new se().setFromPoints(v), h = new Ce({ color: a, transparent: true, opacity: 0.55 });
      Ge.add(new Ee(S, h));
      const M = document.createElement("canvas");
      M.width = 128, M.height = 32;
      const A = M.getContext("2d");
      A.fillStyle = `#${a.toString(16).padStart(6, "0")}`, A.font = "bold 18px sans-serif", A.fillText(`Z = ${c} m`, 4, 22);
      const G = new ln(M), ne = new rn({ map: G, transparent: true }), j = new cn(ne);
      j.position.set(r - i - 1.5, t - i - 1.5, c), j.scale.set(2.5, 0.6, 1), Ge.add(j);
      const q = new kt(1e4, 1e4), we = new Ae({ visible: false, side: Re }), be = new ke(q, we);
      be.position.set(0, 0, c), be.frustumCulled = false, be.userData = { refPlaneZ: c }, f.add(be), dt.push(be);
    }), Ge.visible = true, b();
  }, window.__hekatanHideRefPlanes = () => {
    Ge.visible = false, dt.forEach((n) => {
      n.visible = false;
    }), b();
  };
  const mt = new _e();
  mt.frustumCulled = false, f.add(mt);
  const zn = () => {
    var _a, _b, _c, _d;
    for (; mt.children.length; ) {
      const r = mt.children.pop();
      (_b = (_a = r.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = r.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const r of o) {
      if (r.length !== 6) continue;
      const t = new se().setFromPoints([new m(r[0], r[1], r[2]), new m(r[3], r[4], r[5])]), u = new vt({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), c = new Ee(t, u);
      c.computeLineDistances(), mt.add(c);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, zn(), b());
  });
  const Pe = new _e(), Fn = new ke(new Pt(0.02, 12, 12), new Ae({ color: 16724804, transparent: true, opacity: 0.95 })), An = new ke(new Pt(0.04, 12, 12), new Ae({ color: 16498468, transparent: true, opacity: 0.25, depthWrite: false }));
  Pe.add(Fn, An);
  const pt = 0.15, It = (n, o, r) => {
    const t = new se().setFromPoints([new m(...n), new m(...o)]);
    return new Ee(t, new Ce({ color: r, transparent: true, opacity: 0.7 }));
  };
  Pe.add(It([-pt, 0, 0], [pt, 0, 0], 16711680)), Pe.add(It([0, -pt, 0], [0, pt, 0], 65280)), Pe.add(It([0, 0, -pt], [0, 0, pt], 35071)), Pe.visible = false, Pe.frustumCulled = false, f.add(Pe);
  const en = 10, $t = () => {
    if (!Pe.visible) return;
    const o = d().position.distanceTo(Pe.position), r = Math.max(0.05, o / en);
    Pe.scale.setScalar(r);
  };
  l.addEventListener("change", () => {
    if ($t(), $e.visible) {
      const o = d().position.distanceTo($e.position);
      $e.scale.setScalar(Math.max(0.05, o / 10));
    }
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = d().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / en));
    }
  }), window.__hekatanShowSnap = (n, o, r) => {
    Pe.position.set(n, o, r), Pe.visible = true, $t(), b();
  }, window.__hekatanHideSnap = () => {
    Pe.visible = false, b();
  }, p.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p;
    const o = y(n);
    if (!o) return;
    F.setFromCamera(P, o);
    const r = x();
    if (r.length) {
      const t = r[0].point, u = (window.__hekatanSnap2D ?? 0.5) * 1.2, c = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, u);
      if (c) tn(c.type, c.x, c.y, c.z), Pe.position.set(c.x, c.y, c.z), Pe.visible = true, t.set(c.x, c.y, c.z);
      else {
        Bt();
        const S = window.__hekatanSnapEnabled !== false, h = window.__hekatanSnap2D ?? 0.5;
        S && h > 0 && (t.x = Math.round(t.x / h) * h, t.y = Math.round(t.y / h) * h, t.z = Math.round(t.z / h) * h), Pe.position.copy(t), Pe.visible = true;
      }
      $t();
      const k = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (k === "select" || !k) {
        const S = (window.__hekatanSnap2D ?? 0.5) * 1.5, h = kn(t.x, t.y, t.z, S), M = Lt(t.x, t.y, t.z, S), A = jt(t.x, t.y, t.z, S);
        if (h >= 0) {
          const G = e.points.rawVal[h];
          $e.position.set(G[0], G[1], G[2]), $e.visible = true, Sn(), We.visible = false, et = { kind: "pt", a: h };
        } else if (M) {
          const G = e.points.rawVal, ne = e.polylines.rawVal[M.polyIdx], j = G[ne[M.segIdx]], q = G[ne[M.segIdx + 1]];
          We.geometry.setFromPoints([new m(j[0], j[1], j[2]), new m(q[0], q[1], q[2])]), We.visible = true, $e.visible = false, et = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(M.polyIdx)) ?? false ? { kind: "poly", a: M.polyIdx } : { kind: "seg", a: M.polyIdx, b: M.segIdx };
        } else if (A >= 0) {
          const ne = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[A];
          ne && (We.geometry.setFromPoints([new m(ne[0], ne[1], ne[2]), new m(ne[3], ne[4], ne[5])]), We.visible = true, $e.visible = false, et = { kind: "aux", a: A });
        } else We.visible = false, $e.visible = false, et = null;
        if (Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block", et) {
          const G = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          Z.textContent = `\u{1F5B1} Click para seleccionar ${G[et.kind]}`;
        } else Z.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        z.visible = false, B.visible = false, b();
        return;
      }
      if (k === "delete") {
        const S = (window.__hekatanSnap2D ?? 0.5) * 1.5, h = Lt(t.x, t.y, t.z, S), M = jt(t.x, t.y, t.z, S);
        let A = false;
        if (M >= 0) if (!h) A = true;
        else {
          const G = window.__hekatanDrawingAuxLines, j = ((G == null ? void 0 : G.rawVal) ?? (G == null ? void 0 : G.val) ?? G ?? [])[M];
          Yt(t.x, t.y, t.z, j[0], j[1], j[2], j[3], j[4], j[5]) < h.dist && (A = true);
        }
        if (A ? (Oe = M, Je = -1, ct = -1, Pn(M)) : h ? (Je = h.polyIdx, ct = h.segIdx, Oe = -1, Cn(h.polyIdx, h.segIdx)) : (Je = -1, ct = -1, Oe = -1, Xe.visible = false), z.visible = false, B.visible = false, X(), Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block", A) Z.textContent = `\u{1F5D1} Click para borrar l\xEDnea auxiliar #${Oe + 1}`;
        else if (h) {
          const G = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(h.polyIdx)) ?? false;
          Z.textContent = G ? `\u{1F5D1} Click para borrar \xE1rea #${h.polyIdx + 1} completa` : `\u{1F5D1} Click para borrar segmento ${h.segIdx + 1} de polil\xEDnea #${h.polyIdx + 1}`;
        } else Z.textContent = "\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para resaltarla";
        b();
        return;
      } else Xe.visible = false, Je = -1, Oe = -1;
      Z.style.left = n.clientX + "px", Z.style.top = n.clientY + "px", Z.style.display = "block";
      const a = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], i = a[a.length - 1] ?? [], v = e.points.rawVal ?? [];
      if (i.length > 0 && v[i[i.length - 1]]) {
        const S = i[i.length - 1], h = v[S], M = !!window.__hekatanOrthoMode;
        let A = fe;
        if (!A && M) {
          const Ye = Math.abs(t.x - h[0]), qe = Math.abs(t.y - h[1]), Le = Math.abs(t.z - h[2]), Qe = (_k = r[0]) == null ? void 0 : _k.object;
          let Ue = null;
          Qe === Y ? Ue = "xy" : Qe === U ? Ue = "xz" : Qe === Q && (Ue = "yz"), Ue === "xy" ? A = Ye >= qe ? "x" : "y" : Ue === "xz" ? A = Ye >= Le ? "x" : "z" : Ue === "yz" ? A = qe >= Le ? "y" : "z" : A = Ye >= qe && Ye >= Le ? "x" : qe >= Le ? "y" : "z";
        }
        if (A) {
          const Ye = h[0], qe = h[1], Le = h[2];
          A === "x" ? t.set(t.x, qe, Le) : A === "y" ? t.set(Ye, t.y, Le) : t.set(Ye, qe, t.z);
          const Qe = !!fe, ut = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[A];
          ve.style.background = "rgba(15,23,42,0.92)", ve.style.color = ut, ve.style.border = `1.5px solid ${ut}`;
          const at = (_l = r[0]) == null ? void 0 : _l.object;
          let yt = null;
          at === Y ? yt = "xy" : at === U ? yt = "xz" : at === Q && (yt = "yz");
          const sn = yt ? ` (plano ${yt.toUpperCase()})` : "";
          ve.textContent = Qe ? `\u{1F512} LOCK ${A.toUpperCase()}${sn}` : `\u22A5 ORTO ${A.toUpperCase()}${sn}`, ve.style.left = n.clientX + 20 + "px", ve.style.top = n.clientY + 18 + "px", ve.style.transform = "none", ve.style.display = "block";
        } else fe || (ve.style.display = "none");
        const G = Math.hypot(t.x - h[0], t.y - h[1], t.z - h[2]), ne = Math.atan2(t.y - h[1], t.x - h[0]) * 180 / Math.PI;
        Z.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)} | \u0394L=${G.toFixed(2)}m ${ne.toFixed(0)}\xB0`, z.geometry.setFromPoints([new m(h[0], h[1], h[2]), new m(t.x, t.y, t.z)]), (_m = z.computeLineDistances) == null ? void 0 : _m.call(z), z.visible = true, T(h[0], h[1], h[2], t.x, t.y, t.z);
        const j = window.__hekatanOrthoExt ?? 8, q = window.__hekatanShowOrthoPlanes !== false;
        Se.visible = q, q || xe(null), q && (ye(re, h, "xy", j), ye(he, h, "xz", j), ye(ge, h, "yz", j), O(Y, h, "xy", j), O(U, h, "xz", j), O(Q, h, "yz", j));
        const we = q ? F.intersectObjects([Y, U, Q], false) : [];
        let be = null;
        if (we.length > 0) {
          const Ye = we[0].object;
          Ye === Y ? be = "xy" : Ye === U ? be = "xz" : Ye === Q && (be = "yz");
        }
        xe(be), be && (ue.style.left = n.clientX + "px", ue.style.top = n.clientY + "px"), J.geometry.setFromPoints([new m(h[0] - j, h[1], h[2]), new m(h[0] + j, h[1], h[2])]), (_n2 = J.computeLineDistances) == null ? void 0 : _n2.call(J), oe.geometry.setFromPoints([new m(h[0], h[1] - j, h[2]), new m(h[0], h[1] + j, h[2])]), (_o2 = oe.computeLineDistances) == null ? void 0 : _o2.call(oe), le.geometry.setFromPoints([new m(h[0], h[1], h[2] - j), new m(h[0], h[1], h[2] + j)]), (_p = le.computeLineDistances) == null ? void 0 : _p.call(le), B.visible = true;
        const De = J.material, Ze = oe.material, He = le.material;
        A === "x" ? (De.opacity = 0.95, Ze.opacity = 0.1, He.opacity = 0.1) : A === "y" ? (De.opacity = 0.1, Ze.opacity = 0.95, He.opacity = 0.1) : A === "z" ? (De.opacity = 0.1, Ze.opacity = 0.1, He.opacity = 0.95) : (De.opacity = 0.5, Ze.opacity = 0.5, He.opacity = 0.5);
      } else Z.textContent = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`, z.visible = false, B.visible = false, X();
      b();
    } else Bt(), Z.style.display = "none", Pe.visible = false, z.visible = false, B.visible = false, X(), b();
  }), L.derive(() => {
    e.gridTarget && (wo(s, { position: new m(...e.gridTarget.val.position), quaternion: new an().setFromEuler(new dn(...e.gridTarget.val.rotation)) }, b), W.position.set(...e.gridTarget.val.position), W.quaternion.setFromEuler(new dn(...e.gridTarget.val.rotation)), W.updateMatrixWorld());
  }), L.derive(() => {
    ee.geometry.setAttribute("position", new Ie(e.points.val.flat(), 3)), ee.geometry.computeBoundingSphere();
  }), L.derive(() => {
    const n = 0.05 * g * 0.5 * w.val;
    F.params.Points.threshold = 0.4 * n;
  }), L.derive(() => {
    var _a;
    const n = e.points.val ?? [], r = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const c of r) {
      const [k, a, i] = n[c];
      t.push(k, a, i);
    }
    const u = new se();
    u.setAttribute("position", new Ie(t, 3)), de.geometry.dispose(), de.geometry = u;
  });
  let Rt = false, ot = 0;
  p.addEventListener("pointerdown", () => {
    Rt = true;
  }), p.addEventListener("pointerup", () => {
    Rt = false;
  }), p.addEventListener("pointermove", () => {
    Rt && ot++;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Ke = new _e();
  Ke.visible = false, Ke.frustumCulled = false, f.add(Ke);
  const Tn = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, tn = (n, o, r, t) => {
    var _a, _b, _c, _d;
    for (; Ke.children.length; ) {
      const a = Ke.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const u = Tn[n] ?? 16777215, c = 0.05, k = new se().setFromPoints([new m(o - c, r - c, t), new m(o + c, r - c, t), new m(o + c, r - c, t), new m(o + c, r + c, t), new m(o + c, r + c, t), new m(o - c, r + c, t), new m(o - c, r + c, t), new m(o - c, r - c, t)]);
    Ke.add(new ht(k, new Ce({ color: u, linewidth: 2 }))), Ke.position.set(0, 0, 0), Ke.visible = true;
  }, Bt = () => {
    Ke.visible = false;
  }, En = (n, o, r, t) => {
    var _a;
    const u = window.__hekatanOsnap, c = e.points.rawVal, k = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let a = null;
    const i = (h, M, A, G) => {
      const ne = Math.hypot(M - n, A - o, G - r);
      ne > t || (!a || ne < a.d) && (a = { type: h, x: M, y: A, z: G, d: ne });
    };
    (u.node || u.end) && c.forEach((h) => {
      u.node && i("node", h[0], h[1], h[2]);
    });
    for (const h of k) if (!(h.length < 2)) for (let M = 0; M < h.length - 1; M++) {
      const A = c[h[M]], G = c[h[M + 1]];
      if (!(!A || !G) && (u.end && (i("end", A[0], A[1], A[2]), i("end", G[0], G[1], G[2])), u.mid && i("mid", (A[0] + G[0]) / 2, (A[1] + G[1]) / 2, (A[2] + G[2]) / 2), u.nea || u.per)) {
        const ne = G[0] - A[0], j = G[1] - A[1], q = G[2] - A[2], we = ne * ne + j * j + q * q;
        if (we < 1e-12) continue;
        const be = Math.max(0, Math.min(1, ((n - A[0]) * ne + (o - A[1]) * j + (r - A[2]) * q) / we)), De = A[0] + be * ne, Ze = A[1] + be * j, He = A[2] + be * q;
        u.nea && i("nea", De, Ze, He), u.per && i("per", De, Ze, He);
      }
    }
    const v = window.__hekatanDrawingAuxLines, S = (v == null ? void 0 : v.rawVal) ?? (v == null ? void 0 : v.val) ?? v ?? [];
    for (const h of S) {
      if (h.length !== 6) continue;
      const M = [h[0], h[1], h[2]], A = [h[3], h[4], h[5]];
      if (u.end && (i("end", M[0], M[1], M[2]), i("end", A[0], A[1], A[2])), u.mid && i("mid", (M[0] + A[0]) / 2, (M[1] + A[1]) / 2, (M[2] + A[2]) / 2), u.nea || u.per) {
        const G = A[0] - M[0], ne = A[1] - M[1], j = A[2] - M[2], q = G * G + ne * ne + j * j;
        if (q < 1e-12) continue;
        const we = Math.max(0, Math.min(1, ((n - M[0]) * G + (o - M[1]) * ne + (r - M[2]) * j) / q)), be = M[0] + we * G, De = M[1] + we * ne, Ze = M[2] + we * j;
        u.nea && i("nea", be, De, Ze), u.per && i("per", be, De, Ze);
      }
    }
    return a ? { type: a.type, x: a.x, y: a.y, z: a.z } : null;
  };
  window.__hekatanOsnapCompute = En, window.__hekatanOsnapShow = tn, window.__hekatanOsnapHide = Bt;
  let me = [], Fe = 0;
  const wt = document.createElement("div");
  wt.id = "hk-cad-status", wt.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", wt.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(wt);
  const Xn = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), fe && n.push(`\u{1F512} LOCK ${fe.toUpperCase()}`);
    const r = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(r) > 1e-3 && n.push(`Cota Z=${r}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, ce = (n) => {
    const o = n + Xn();
    wt.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    ce(o);
  }, window.__hekatanCadResetPending = () => {
    me = [], ce("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const xt = [], st = () => {
    var _a, _b;
    xt.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), xt.length > 100 && xt.shift();
  }, nn = () => {
    var _a;
    const n = xt.pop();
    if (!n) {
      ce("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), me = [], z.visible = false, B.visible = false, X(), ce(`\u21B6 Undo \u2014 ${xt.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    b();
  };
  window.__hekatanPushUndo = st, window.__hekatanUndo = nn, window.addEventListener("keydown", (n) => {
    (n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey && (n.preventDefault(), nn());
  });
  const on = () => {
    if (me = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    fe = null, nt(), z.visible = false, B.visible = false, X(), ce("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), b();
  };
  window.__hekatanFinalizeDraw = on, p.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t2, _u, _v, _w, _x;
    if (ot > 5) {
      ot = 0;
      return;
    }
    ot = 0;
    const o = y(n);
    if (!o) return;
    F.setFromCamera(P, o);
    const r = x();
    if (!r.length) return;
    let t = r[0].point;
    (n.ctrlKey || n.metaKey) && (t = new m(Math.round(r[0].point.x), Math.round(r[0].point.y), Math.round(r[0].point.z)));
    {
      const a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = a[a.length - 1] ?? [], v = e.points.rawVal ?? [];
      if (i.length > 0) {
        const S = v[i[i.length - 1]];
        if (S) {
          const h = !!window.__hekatanOrthoMode;
          let M = fe;
          if (!M && h) {
            const A = Math.abs(t.x - S[0]), G = Math.abs(t.y - S[1]), ne = Math.abs(t.z - S[2]);
            M = A >= G && A >= ne ? "x" : G >= ne ? "y" : "z";
          }
          M === "x" ? t = new m(t.x, S[1], S[2]) : M === "y" ? t = new m(S[0], t.y, S[2]) : M === "z" && (t = new m(S[0], S[1], t.z));
        }
      }
    }
    const u = (window.__hekatanSnap2D ?? 0.5) * 1.2, c = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, u);
    if (c) t = new m(c.x, c.y, c.z), ce(`\u{1F3AF} Snap [${c.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const a = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0;
      a && i > 0 && (t = new m(Math.round(t.x / i) * i, Math.round(t.y / i) * i, Math.round(t.z / i) * i));
    }
    const k = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (k === "select" || k === "none" || !k) {
      if (et) {
        const { kind: a, a: i, b: v } = et, S = v !== void 0 ? `${a}:${i}:${v}` : `${a}:${i}`;
        n.ctrlKey || n.metaKey || n.shiftKey || Ne.clear(), Ne.has(S) ? Ne.delete(S) : Ne.add(S), _t(), ce(`\u2713 Seleccionados ${Ne.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else !n.ctrlKey && !n.metaKey && !n.shiftKey && Ne.size > 0 && (Ne.clear(), _t(), ce("Selecci\xF3n limpiada"));
      return;
    }
    if (k === "axis") {
      const a = window.__hekatanAxisDraw;
      if (!a) return;
      if (!a.pendingStart) {
        a.pendingStart = [t.x, t.y, t.z], ce(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const i = a.mode === "number", v = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, a.pendingStart, [t.x, t.y, t.z], i);
      ce(`\u2713 Eje "${v}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (k === "delete") {
      if (Oe >= 0) {
        const a = window.__hekatanDrawingAuxLines, i = (a == null ? void 0 : a.rawVal) ?? (a == null ? void 0 : a.val) ?? a ?? [], v = Oe;
        if (v >= 0 && v < i.length) {
          st();
          const S = i.slice(0, v).concat(i.slice(v + 1));
          a && typeof a == "object" && "val" in a ? a.val = S : window.__hekatanDrawingAuxLines = S, ce(`\u{1F5D1} L\xEDnea auxiliar #${v + 1} borrada`), Oe = -1, Xe.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Je >= 0) {
        const a = Je, i = ct;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(a)) ?? false ? (St(a), ce(`\u{1F5D1} \xC1rea #${a + 1} (shell Q4) borrada`)) : i >= 0 ? (Vn(a, i), ce(`\u{1F5D1} Segmento ${i + 1} de polil\xEDnea #${a + 1} borrado`)) : (St(a), ce(`\u{1F5D1} Polil\xEDnea #${a + 1} borrada`));
      } else ce("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (k === "circle") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        ce("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [a, i] = me, v = Math.hypot(i[0] - a[0], i[1] - a[1], i[2] - a[2]);
      Math.abs(i[0] - a[0]);
      const S = Math.abs(i[1] - a[1]), M = Math.abs(i[2] - a[2]) < 1e-3 ? "xy" : S < 1e-3 ? "xz" : "yz", A = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, a[0], a[1], a[2], v, A, M), ce(`\u2713 C\xEDrculo dibujado en ${M.toUpperCase()} \u2014 r=${v.toFixed(2)}m, ${A} segmentos`), me = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (k === "arc") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        ce("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (me.length === 2) {
        ce("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [a, i, v] = me, S = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, a, i, v, S), ce(`\u2713 Arco dibujado \u2014 ${S} segmentos`), me = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (k === "rect") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        ce("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [a, i] = me;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, a, i), ce(`\u2713 Rect\xE1ngulo dibujado \u2014 (${a[0].toFixed(1)},${a[1].toFixed(1)}) \u2192 (${i[0].toFixed(1)},${i[1].toFixed(1)})`), me = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (k === "col") {
      st();
      const a = t.z, i = Fe && Fe > 0 ? Fe : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, a], [t.x, t.y, a + i]];
      const v = e.polylines.rawVal, S = e.points.rawVal.length;
      e.polylines.val = [...v.slice(0, -1), ...v[v.length - 1].length > 0 ? [v[v.length - 1]] : [], [S - 2, S - 1], []], Fe = 0, ce(`\u258C Columna creada \u2014 h=${i.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (k === "wall") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        ce("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [a, i] = me, v = Fe && Fe > 0 ? Fe : 3;
      st();
      const S = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [a[0], a[1], a[2]], [i[0], i[1], i[2]], [i[0], i[1], i[2] + v], [a[0], a[1], a[2] + v]];
      const h = e.polylines.rawVal;
      if (h.length - 1, e.polylines.val = [...h.slice(0, -1), ...h[h.length - 1].length > 0 ? [h[h.length - 1]] : [], [S, S + 1, S + 2, S + 3, S], []], e.areas) {
        const M = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, M];
      }
      ce(`\u25A5 Pared Q4 creada \u2014 h=${v.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), me = [], Fe = 0;
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (k === "extp") {
      st();
      const a = Fe && Fe > 0 ? Fe : 3, i = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + a]];
      const v = e.polylines.rawVal, S = e.points.rawVal.length;
      e.polylines.val = [...v.slice(0, -1), ...v[v.length - 1].length > 0 ? [v[v.length - 1]] : [], [S - 2, S - 1], []], Fe = 0, ce(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${a.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (k === "extl") {
      const a = (window.__hekatanSnap2D ?? 0.5) * 1.5, i = Lt(t.x, t.y, t.z, a);
      if (!i) {
        ce("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const v = e.polylines.rawVal, S = e.points.rawVal, h = v[i.polyIdx], M = S[h[i.segIdx]], A = S[h[i.segIdx + 1]];
      if (!M || !A) {
        ce("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const G = Fe && Fe > 0 ? Fe : 3;
      st();
      const ne = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [M[0], M[1], M[2]], [A[0], A[1], A[2]], [A[0], A[1], A[2] + G], [M[0], M[1], M[2] + G]];
      const j = e.polylines.rawVal;
      if (e.polylines.val = [...j.slice(0, -1), ...j[j.length - 1].length > 0 ? [j[j.length - 1]] : [], [ne, ne + 1, ne + 2, ne + 3, ne], []], e.areas) {
        const q = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, q];
      }
      Fe = 0, ce(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${G.toFixed(2)}m`);
      try {
        (_s = window.__hekatanRebuild) == null ? void 0 : _s.call(window);
      } catch {
      }
      return;
    }
    if (k === "aux") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        ce("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [a, i] = me, v = window.__hekatanDrawingAuxLines;
      if (v) {
        const G = v.rawVal ?? v.val ?? [];
        v.val = [...G, [a[0], a[1], a[2], i[0], i[1], i[2]]];
      }
      const S = i[0] - a[0], h = i[1] - a[1], M = i[2] - a[2], A = Math.sqrt(S * S + h * h + M * M);
      ce(`\u2713 L\xEDnea auxiliar creada \u2014 L=${A.toFixed(2)}m (cyan, no FEM)`), me = [];
      return;
    }
    if (k === "extend") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        ce("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [a, i] = me, v = window.__hekatanDrawingAuxLines;
      if (v) {
        const S = v.rawVal ?? v.val ?? [];
        v.val = [...S, [a[0], a[1], a[2], i[0], i[1], i[2]]];
      }
      ce("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), me = [];
      return;
    }
    if (k === "chaflan") {
      if (me.push([t.x, t.y, t.z]), me.length === 1) {
        ce("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [a, i] = me, v = window.__hekatanChaflanR ?? 1, S = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t2 = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t2.call(window, a, i, v, S, 6);
      const h = Math.abs(i[0] - a[0]).toFixed(1), M = Math.abs(i[1] - a[1]).toFixed(1);
      ce(`\u2713 Losa con chaflanes dibujada \u2014 ${h}\xD7${M}m, r=${v}m, ${S} seg/chafl\xE1n`), me = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (C = false, st(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const a = e.polylines.rawVal, i = a.length - 1, v = a[i] ?? [];
      if (k === "line" && v.length === 2) {
        e.polylines.val = [...a, []], ce("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (k === "area" && v.length === 4) {
        e.polylines.val = [...a.slice(0, -1), [...v, v[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, i]), ce("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (k === "node") ce(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (k === "line") ce("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (k === "polyline") ce("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (k === "area") {
      const a = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      ce(`\u25A6 \xC1rea \u2014 click ${a.length}/4. Marc\xE1 ${4 - a.length} v\xE9rtice${4 - a.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), p.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), p.addEventListener("pointermove", (n) => {
    var _a;
    const o = y(n);
    if (!o) return;
    F.setFromCamera(P, o);
    const r = x();
    if (te.geometry.deleteAttribute("position"), r.length) {
      let t = r[0].point.clone();
      const u = (window.__hekatanSnap2D ?? 0.5) * 1.2, c = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, u);
      if (c) t.set(c.x, c.y, c.z);
      else {
        const k = window.__hekatanSnapEnabled !== false, a = window.__hekatanSnap2D ?? 0.5;
        k && a > 0 && (t.x = Math.round(t.x / a) * a, t.y = Math.round(t.y / a) * a, t.z = Math.round(t.z / a) * a);
      }
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z)), te.geometry.setAttribute("position", new Ie(t.toArray(), 3));
    }
    b();
  }), p.addEventListener("pointermove", (n) => {
    var _a;
    const o = y(n);
    if (!o) return;
    F.setFromCamera(P, o);
    let r = false;
    const t = F.intersectObject(ee), u = x();
    if (t.length && u.length) {
      const c = new m(...e.points.rawVal[t[0].index]), k = new m(...u[0].point), a = c.sub(k), i = (_a = u[0].face) == null ? void 0 : _a.normal;
      i.transformDirection(W.matrixWorld), Math.abs(a.dot(i)) < 1e-4 && (r = true);
    }
    te.visible = !r;
  });
  let Dt = false, Zt;
  p.addEventListener("pointermove", (n) => {
    var _a;
    if (!ot) return;
    const o = y(n);
    if (!o) return;
    F.setFromCamera(P, o);
    let r = false;
    const t = F.intersectObject(ee), u = x();
    if (t.length && u.length) {
      const k = new m(...e.points.rawVal[t[0].index]), a = new m(...u[0].point), i = k.sub(a), v = (_a = u[0].face) == null ? void 0 : _a.normal;
      v.transformDirection(W.matrixWorld), Math.abs(i.dot(v)) < 1e-4 && (r = true);
    }
    if (r && ot < 5 && (Dt = true, l.enabled = false, Zt = t[0].index), !Dt || ot % 2 !== 0) return;
    const c = [...e.points.rawVal];
    if (Zt !== void 0) {
      let k = u[0].point;
      (n.ctrlKey || n.metaKey) && (k = new m(Math.round(k.x), Math.round(k.y), Math.round(k.z))), c[Zt] = k.toArray();
    }
    e.points.val = c;
  }), p.addEventListener("pointerup", () => {
    l.enabled = true, Dt = false;
  }), p.addEventListener("contextmenu", (n) => {
    var _a;
    const o = y(n);
    if (!o) return;
    F.setFromCamera(P, o);
    let r = false;
    const t = F.intersectObject(ee), u = x();
    if (t.length && u.length) {
      const a = new m(...e.points.rawVal[t[0].index]), i = new m(...u[0].point), v = a.sub(i), S = (_a = u[0].face) == null ? void 0 : _a.normal;
      S.transformDirection(W.matrixWorld), Math.abs(v.dot(S)) < 1e-4 && (r = true);
    }
    if (!r) return;
    const c = [...e.points.rawVal];
    if (c.splice(t[0].index, 1), e.points.val = c, !e.polylines) return;
    const k = e.polylines.rawVal.map((a) => a.filter((i) => i !== t[0].index)).map((a) => a.map((i) => i > t[0].index ? i - 1 : i)).filter((a) => a.length);
    k.push([]), e.polylines.val = k;
  });
}
function wo(e, s, f) {
  const g = Math.round(14.999999999999998), w = { position: e.position.clone(), quaternion: e.quaternion.clone() }, p = setInterval(F, 1e3 / 30);
  let b = 0;
  function F() {
    b++;
    const P = b / g;
    e.position.lerpVectors(w.position, s.position, P), e.quaternion.slerpQuaternions(w.quaternion, s.quaternion, P), f && f(), b == g && clearInterval(p);
  }
}
class Mn {
  constructor(s, f = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(s, f);
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
  setColorMap(s, f = 32) {
    this.map = Gt[s] || Gt.rainbow, this.n = f;
    const d = 1 / this.n, l = new Ve(), g = new Ve();
    this.lut.length = 0, this.lut.push(new Ve(this.map[0][1]));
    for (let w = 1; w < f; w++) {
      const p = w * d;
      for (let b = 0; b < this.map.length - 1; b++) if (p > this.map[b][0] && p <= this.map[b + 1][0]) {
        const F = this.map[b][0], P = this.map[b + 1][0];
        l.setHex(this.map[b][1], Ct), g.setHex(this.map[b + 1][1], Ct);
        const y = new Ve().lerpColors(l, g, (p - F) / (P - F));
        this.lut.push(y);
      }
    }
    return this.lut.push(new Ve(this.map[this.map.length - 1][1])), this;
  }
  copy(s) {
    return this.lut = s.lut, this.map = s.map, this.n = s.n, this.minV = s.minV, this.maxV = s.maxV, this;
  }
  getColor(s) {
    s = $n.clamp(s, this.minV, this.maxV), s = (s - this.minV) / (this.maxV - this.minV);
    const f = Math.round(s * this.n);
    return this.lut[f];
  }
  addColorMap(s, f) {
    return Gt[s] = f, this;
  }
  createCanvas() {
    const s = document.createElement("canvas");
    return s.width = 1, s.height = this.n, this.updateCanvas(s), s;
  }
  updateCanvas(s) {
    const f = s.getContext("2d", { alpha: false }), d = f.getImageData(0, 0, 1, this.n), l = d.data;
    let g = 0;
    const w = 1 / this.n, p = new Ve(), b = new Ve(), F = new Ve();
    for (let P = 1; P >= 0; P -= w) for (let y = this.map.length - 1; y >= 0; y--) if (P < this.map[y][0] && P >= this.map[y - 1][0]) {
      const W = this.map[y - 1][0], H = this.map[y][0];
      p.setHex(this.map[y - 1][1], Ct), b.setHex(this.map[y][1], Ct), F.lerpColors(p, b, (P - W) / (H - W)), l[g * 4] = Math.round(F.r * 255), l[g * 4 + 1] = Math.round(F.g * 255), l[g * 4 + 2] = Math.round(F.b * 255), l[g * 4 + 3] = 255, g += 1;
    }
    return f.putImageData(d, 0, 0), s;
  }
}
const Gt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, gt = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function xo(e) {
  e = Math.max(0, Math.min(1, e));
  for (let f = 0; f < gt.length - 1; f++) {
    const [d, l, g, w] = gt[f], [p, b, F, P] = gt[f + 1];
    if (e <= p) {
      const y = (e - d) / (p - d);
      return [l + (b - l) * y, g + (F - g) * y, w + (P - w) * y];
    }
  }
  const s = gt[gt.length - 1];
  return [s[1], s[2], s[3]];
}
function yo() {
  const s = new Uint8Array(1024);
  for (let d = 0; d < 256; d++) {
    const l = d / 255, [g, w, p] = xo(l);
    s[d * 4 + 0] = g, s[d * 4 + 1] = w, s[d * 4 + 2] = p, s[d * 4 + 3] = 255;
  }
  const f = new Dn(s, 256, 1, Zn);
  return f.minFilter = pn, f.magFilter = pn, f.wrapS = un, f.wrapT = un, f.needsUpdate = true, f;
}
function vo(e, s, f) {
  new Mn();
  const d = yo(), l = new Rn({ uniforms: { cmap: { value: d }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Re, transparent: false, clipping: true, depthWrite: true, depthTest: true }), g = new ke(new se(), l);
  return g.renderOrder = -1, g.frustumCulled = false, L.derive(() => {
    g.geometry.setAttribute("position", new Ie(e.val.flat(), 3));
    const w = [];
    for (const x of s.val) x.length === 3 ? w.push(x[0], x[1], x[2]) : x.length === 4 && (w.push(x[0], x[1], x[2]), w.push(x[0], x[2], x[3]));
    g.geometry.setIndex(new Bn(w, 1));
    const p = f.val.filter((x) => Number.isFinite(x));
    let b, F;
    const P = Ot.val;
    if (P ? (F = P[0], b = P[1]) : (b = p.length ? Math.max(...p) : 1, F = p.length ? Math.min(...p) : 0, F >= 0 && b > 0 && (F = 0)), b === F) {
      const x = Math.max(Math.abs(b) * 1e-6, 1e-9);
      b += x, F -= x;
    }
    const y = P && P[0] > P[1], W = Math.min(F, b), H = Math.max(F, b), D = H - W, ie = new Float32Array(f.val.length);
    for (let x = 0; x < f.val.length; x++) {
      const ee = f.val[x];
      if (!Number.isFinite(ee)) {
        ie[x] = -1;
        continue;
      }
      const de = ((y ? H + W - ee : ee) - W) / D;
      ie[x] = Math.max(0, Math.min(1, de));
    }
    g.geometry.setAttribute("scalar", new Me(ie, 1));
  }), g;
}
function go(e, s, f, d) {
  const l = vo(f, e.elements, d);
  return L.derive(() => {
    l.visible = s.shellResults.val != "none";
  }), l;
}
const bo = 6, Kt = 10, Mo = 0.012;
function _o(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function So(e, s, f, d) {
  if (!f && !d) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && f) {
    const g = f[e];
    if (g && g.has(s)) return g.get(s);
  }
  return null;
}
function ko(e, s, f, d) {
  const l = new _e(), g = new Mn();
  g.setColorMap("rainbow");
  const w = new Ve(), p = L.state([]);
  return L.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const b = f.val, F = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = _o(s.frameResults.val);
    if (l.children.forEach(($) => {
      $.geometry && $.geometry.dispose(), $.material && $.material.dispose();
    }), l.clear(), !P || F.length === 0 || b.length === 0) {
      p.val = [];
      return;
    }
    const y = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, W = (_c = e.deformOutputs) == null ? void 0 : _c.val, H = [], D = [];
    for (let $ = 0; $ < F.length; $++) {
      if (F[$].length !== 2) continue;
      const K = So(P, $, y, W);
      K && (H.push(K[0], K[1]), D.push({ idx: $, vals: K }));
    }
    if (H.length === 0) {
      p.val = [];
      return;
    }
    const ie = Math.min(...H), x = Math.max(...H);
    g.setMin(ie), g.setMax(x), p.val = H;
    const ee = [1 / 0, 1 / 0, 1 / 0], te = [-1 / 0, -1 / 0, -1 / 0];
    for (const $ of b) for (let R = 0; R < 3; R++) ee[R] = Math.min(ee[R], $[R]), te[R] = Math.max(te[R], $[R]);
    const N = Math.max(te[0] - ee[0], te[1] - ee[1], te[2] - ee[2], 1) * Mo, V = [], I = [], C = [];
    let _ = 0;
    for (const { idx: $, vals: R } of D) {
      const K = F[$], Z = b[K[0]], z = b[K[1]];
      if (!Z || !z) continue;
      const B = new m(z[0] - Z[0], z[1] - Z[1], z[2] - Z[2]), ae = B.length();
      if (ae < 1e-10) continue;
      B.normalize();
      const J = Math.abs(B.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), oe = new m().crossVectors(B, J).normalize(), le = new m().crossVectors(B, oe).normalize(), pe = Kt + 1, re = bo;
      for (let he = 0; he < pe; he++) {
        const ge = he / Kt, Se = Z[0] + B.x * ae * ge, Te = Z[1] + B.y * ae * ge, Y = Z[2] + B.z * ae * ge, U = R[0] + (R[1] - R[0]) * ge, Q = g.getColor(U) ?? new Ve(0, 0, 0);
        w.copy(Q).convertSRGBToLinear();
        for (let O = 0; O < re; O++) {
          const ue = O / re * Math.PI * 2, xe = Math.cos(ue), ye = Math.sin(ue);
          V.push(Se + (oe.x * xe + le.x * ye) * N, Te + (oe.y * xe + le.y * ye) * N, Y + (oe.z * xe + le.z * ye) * N), I.push(w.r, w.g, w.b);
        }
      }
      for (let he = 0; he < Kt; he++) for (let ge = 0; ge < re; ge++) {
        const Se = (ge + 1) % re, Te = _ + he * re + ge, Y = _ + he * re + Se, U = _ + (he + 1) * re + ge, Q = _ + (he + 1) * re + Se;
        C.push(Te, Y, Q), C.push(Te, Q, U);
      }
      _ += pe * re;
    }
    if (V.length === 0) return;
    const T = new se();
    T.setAttribute("position", new Ie(V, 3)), T.setAttribute("color", new Ie(I, 3)), T.setIndex(C), T.computeVertexNormals();
    const X = new Ae({ vertexColors: true, side: Re }), E = new ke(T, X);
    E.frustumCulled = false, l.add(E);
  }), l.__colorMapValues = p, l;
}
function xn(e, s = 8) {
  const f = document.createElement("div");
  f.id = "legend";
  const d = document.createElement("div");
  d.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", f.appendChild(d), setTimeout(() => {
    L.derive(() => {
      d.textContent = qt.val ? `[${qt.val}]` : "";
    });
  });
  const l = Array.from({ length: s + 1 }, (b, F) => F / s).reverse();
  let g, w;
  l.forEach((b, F) => {
    g = document.createElement("div"), g.id = `marker-${F}`, g.className = "marker", g.style.marginTop = F == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, w = document.createElement("p"), w.id = `marker-text-${F}`, g.append(w), f.append(g);
  });
  const p = [];
  return f.querySelectorAll("p").forEach((b) => p.push(b)), setTimeout(() => {
    L.derive(() => {
      l.forEach((b, F) => {
        const P = p[F];
        P && (P.innerText = Po(e.val, b).toString());
      });
    });
  }), f;
}
function Po(e, s) {
  const f = Ot.val;
  if (f) return (f[0] + s * (f[1] - f[0])).toPrecision(3);
  const d = e.filter((w) => Number.isFinite(w));
  if (d.length === 0) return "0";
  let l = Math.min(...d);
  const g = Math.max(...d);
  return l >= 0 && g > 0 && (l = 0), (l + s * (g - l)).toPrecision(3);
}
function Io({ mesh: e, settingsObj: s, drawingObj: f, objects3D: d, solids: l }) {
  Hn.DEFAULT_UP = new m(0, 0, 1);
  const g = document.createElement("div"), w = new Nn(), p = new Wn(45, 1, 0.1, 2 * 1e6), b = new Un(-10, 10, 10, -10, -1e3, 2e6);
  let F = p;
  const P = new Gn({ antialias: true });
  P.localClippingEnabled = true;
  const y = new hn(p, P.domElement);
  y.enableDamping = true, y.dampingFactor = 0.1, y.screenSpacePanning = true, y.zoomSpeed = 0.8, y.panSpeed = 1.2, y.rotateSpeed = 0.9, y.keyPanSpeed = 12, y.listenToKeyEvents(window), y.touches = { ONE: Vt.ROTATE, TWO: Vt.DOLLY_PAN }, P.domElement.addEventListener("wheel", (Y) => {
    if (!Y.ctrlKey && Math.abs(Y.deltaX) > Math.abs(Y.deltaY) * 1.5) {
      Y.preventDefault();
      const U = y.target, Q = new m().subVectors(p.position, U), O = new m();
      O.crossVectors(p.up, Q).normalize();
      const xe = Q.length() * 1e-3 * y.panSpeed;
      U.addScaledVector(O, Y.deltaX * xe), p.position.addScaledVector(O, Y.deltaX * xe), y.update();
    }
  }, { passive: false });
  const W = new Wt(new m(-1, 0, 0), 0), H = new Wt(new m(0, -1, 0), 0), D = new Wt(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ie() {
    const Y = window.__hekatanClip, U = [];
    Y.enableX && (W.normal.set(Y.invertX ? 1 : -1, 0, 0), W.constant = Y.invertX ? -Y.posX : Y.posX, U.push(W)), Y.enableY && (H.normal.set(0, Y.invertY ? 1 : -1, 0), H.constant = Y.invertY ? -Y.posY : Y.posY, U.push(H)), Y.enableZ && (D.normal.set(0, 0, Y.invertZ ? 1 : -1), D.constant = Y.invertZ ? -Y.posZ : Y.posZ, U.push(D)), P.clippingPlanes = U, w.traverse((O) => {
      const ue = O;
      if (ue.material) {
        const xe = Array.isArray(ue.material) ? ue.material : [ue.material];
        for (const ye of xe) ye.clippingPlanes = U, ye.needsUpdate = true;
      }
    });
    const Q = window.__hekatanPanes ?? [];
    for (const O of Q) try {
      O && typeof O.refresh == "function" && O.refresh();
    } catch {
    }
    P.render(w, F);
  }
  ie(), window.__hekatanClipApply = ie;
  const x = Jn(s), ee = L.derive(() => x.displayScale.val === 0 ? 1 : x.displayScale.val > 0 ? x.displayScale.val : -1 / x.displayScale.val), te = Co(e, x), de = () => {
    const Y = [];
    return x.gridXY.rawVal && Y.push("xy"), x.gridXZ.rawVal && Y.push("xz"), x.gridYZ.rawVal && Y.push("yz"), Y;
  }, N = () => {
    const Y = x.gridStep.rawVal, U = Math.max(Y, x.gridMajor.rawVal);
    return { planes: de(), majorStep: U, minorStep: Y };
  };
  let V = Ut(x.gridSize.rawVal, N());
  V.visible = x.gridVisible.rawVal, window.__hekatanSnap2D = x.cursorSnap.rawVal;
  const I = () => {
    const Y = Math.max(0, Math.min(1, x.gridOpacity.rawVal));
    V.traverse((U) => {
      const Q = U.material;
      if (!Q || !("opacity" in Q)) return;
      const O = U.name ?? "";
      let ue = 0.35;
      O.includes("border") ? ue = 1 : O.includes("major") && (ue = 0.75), Q.opacity = Y * ue;
    });
  };
  I(), g.appendChild(Qn(x, e, l)), g.setAttribute("id", "viewer"), g.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const C = tt();
  P.setClearColor(C.background, 1);
  const _ = x.gridSize.rawVal, T = _ * 0.5 + _ * 0.5 / Math.tan(45 * 0.5);
  p.position.set(0, 0, T), p.up.set(0, 1, 0), y.target.set(0, 0, 0), y.minDistance = 0.1, y.maxDistance = 1e4, g.__settings = x, y.zoomSpeed = 1, y._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, y.update();
  let X = mn(x.gridSize.rawVal, x.flipAxes.rawVal);
  w.add(V, X), L.derive(() => {
    window.__hekatanGridPlaneXY = x.gridXY.val, window.__hekatanGridPlaneXZ = x.gridXZ.val, window.__hekatanGridPlaneYZ = x.gridYZ.val;
  });
  let E = true;
  L.derive(() => {
    const Y = x.gridVisible.val;
    if (E) {
      E = false;
      return;
    }
    V.visible = Y, J();
  });
  let $ = true;
  L.derive(() => {
    if (x.gridOpacity.val, $) {
      $ = false;
      return;
    }
    I(), J();
  }), L.derive(() => {
    const Y = x.cursorSnap.val;
    window.__hekatanSnap2D = Y;
  });
  let R = true;
  L.derive(() => {
    var _a;
    const Y = x.gridSize.val, U = x.flipAxes.val;
    if (x.gridXY.val, x.gridXZ.val, x.gridYZ.val, x.gridStep.val, x.gridMajor.val, R) {
      R = false;
      return;
    }
    w.remove(V), (_a = V.traverse) == null ? void 0 : _a.call(V, (ue) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ue.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ue.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), V = Ut(Y, N()), V.visible = x.gridVisible.rawVal, w.add(V), I(), w.remove(X), X.traverse((ue) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ue.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ue.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), X = mn(Y, U), w.add(X);
    const Q = Y * 0.5 + Y * 0.5 / Math.tan(45 * 0.5);
    p.position.distanceTo(y.target), Math.abs(p.position.x) < 0.1 && Math.abs(p.position.y) < 0.1 && p.position.z > 0 ? p.position.set(0, 0, Q) : p.position.set(0.5 * Y, -Q, 0.5 * Y), y.target.set(0, 0, 0), y.minDistance = Math.max(0.05, Y * 0.01), y.maxDistance = Math.max(50, Y * 50), y.update(), J();
  }), new ResizeObserver((Y) => {
    var _a, _b;
    for (const U of Y) {
      const Q = (_a = U.target) == null ? void 0 : _a.clientWidth, O = (_b = U.target) == null ? void 0 : _b.clientHeight;
      if (Q === 0 || O === 0) continue;
      const xe = (Z ? Q / 2 : Q) / O;
      p.aspect = xe, p.updateProjectionMatrix();
      const ye = b.top;
      if (b.left = -ye * xe, b.right = ye * xe, b.updateProjectionMatrix(), z && z.isPerspectiveCamera) z.aspect = xe, z.updateProjectionMatrix();
      else if (z && z.isOrthographicCamera) {
        const fe = z, ve = fe.top;
        fe.left = -ve * xe, fe.right = ve * xe, fe.updateProjectionMatrix();
      }
      P.setSize(Q, O), J();
    }
  }).observe(g), y.addEventListener("change", J), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, x.displayScale.val, x.nodes.val, x.elements.val, (_g = x.edges) == null ? void 0 : _g.val, x.elemColumns.val, x.elemBeams.val, x.nodesIndexes.val, x.elementsIndexes.val, x.orientations.val, x.sections.val, x.secColumns.val, x.secBeams.val, x.secFloor.val, x.supports.val, x.loads.val, x.deformedShape.val, x.nodeResults.val, x.frameResults.val, x.shellResults.val, (_h = x.solidResults) == null ? void 0 : _h.val, setTimeout(J);
  });
  let Z = false, z = null, B = null, ae = false;
  function J() {
    const Y = g.clientWidth || 1, U = g.clientHeight || 1;
    if (!Z || !z) {
      P.setScissorTest(false), P.setViewport(0, 0, Y, U), P.render(w, F);
      return;
    }
    const Q = Y / 2;
    P.setScissorTest(true), P.setViewport(0, 0, Q, U), P.setScissor(0, 0, Q, U), P.render(w, F), P.setViewport(Q, 0, Q, U), P.setScissor(Q, 0, Q, U), P.render(w, z), P.setScissorTest(false);
  }
  function oe(Y) {
    F = Y, y.object = Y, y.update(), J();
  }
  function le(Y, U) {
    Z = Y, U && (z = U);
    const Q = g.clientWidth || 1, O = g.clientHeight || 1, xe = (Y ? Q / 2 : Q) / O;
    p.isPerspectiveCamera && (p.aspect = xe, p.updateProjectionMatrix());
    const ye = b.top;
    if (b.left = -ye * xe, b.right = ye * xe, b.updateProjectionMatrix(), Y && z) {
      if (B ? (B.object = z, B.update()) : (B = new hn(z, P.domElement), B.enableDamping = true, B.dampingFactor = 0.1, B.screenSpacePanning = true, B.zoomSpeed = 0.8, B.panSpeed = 1.2, B.rotateSpeed = 0.9, B.touches = { ONE: Vt.ROTATE, TWO: Vt.DOLLY_PAN }, B.target.copy(y.target), B.addEventListener("change", J), B.enabled = false), !ae) {
        const fe = (ve) => {
          if (!Z || !B) return;
          const nt = P.domElement.getBoundingClientRect(), lt = ve.clientX - nt.left, rt = nt.width / 2, ft = lt >= rt;
          y.enabled = !ft, B.enabled = ft;
        };
        P.domElement.addEventListener("pointerdown", fe, true), P.domElement.addEventListener("wheel", fe, { capture: true, passive: true }), ae = true;
      }
    } else Y || (y.enabled = true, B && (B.enabled = false));
    g.__splitMode = Y, window.__hekatanSplitMode = Y, window.__hekatanSplitCamera = Y ? z : null, J();
  }
  if (e) {
    w.add(On(x, te, ee), jn(e, x, te), oo(x, te, ee), so(e, x, te, ee), to(e, x, te, ee), no(e, x, te, ee), lo(e, x, te, ee), co(e, x, te, ee), fo(e, x, te, ee), po(e, x, te, ee));
    const Y = Eo(e, x), U = go(e, x, te, Y), Q = xn(Y);
    w.add(U), g.appendChild(Q);
    const O = ko(e, x, te);
    w.add(O);
    const ue = O.__colorMapValues, xe = xn(ue);
    xe.id = "frame-legend", g.appendChild(xe), L.derive(() => {
      var _a;
      const ye = x.shellResults.val != "none", fe = (((_a = x.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", ve = ye || fe, nt = x.frameResults.val.startsWith("contour:");
      Q.hidden = !ve, U.visible = ve, xe.hidden = !nt;
    });
  }
  if (l) {
    const Y = new Kn(16777215, 0.5);
    w.add(Y);
    const U = new fn(16777215, 0.5);
    U.position.set(30, 25, -10), U.shadow.mapSize.width = 1024, U.shadow.mapSize.height = 1024, w.add(U);
    const Q = 10;
    U.shadow.camera.left = -Q, U.shadow.camera.right = Q, U.shadow.camera.top = Q, U.shadow.camera.bottom = -Q, U.shadow.camera.far = 1e3;
    const O = new fn(16777215, 0.5);
    O.color.setHSL(11, 43, 96), O.position.set(-10, 0, 30), w.add(O), L.derive(() => {
      (l == null ? void 0 : l.val.length) && (w.remove(...l.oldVal), w.add(...l.rawVal), J());
    }), L.derive(() => {
      l.rawVal.forEach((ue) => ue.visible = x.solids.val), J();
    });
  }
  if (d) {
    const Y = [], U = (O) => {
      var _a;
      return ((_a = O == null ? void 0 : O.userData) == null ? void 0 : _a.isCota) ? x.showCotas.val : x.custom3D.val;
    }, Q = () => {
      for (const O of Y) O.visible = U(O);
      J();
    };
    L.derive(() => {
      const O = d.val;
      Y.length && (w.remove(...Y), Y.length = 0), O.length && (w.add(...O), Y.push(...O), Q()), J();
    }), L.derive(() => {
      x.custom3D.val, Q();
    }), L.derive(() => {
      x.showCotas.val, Q();
    });
  }
  f && mo({ drawingObj: f, gridObj: V, scene: w, getActiveCamera: () => F, controls: y, gridSize: _, derivedDisplayScale: ee, rendererElm: P.domElement, viewerRender: J }), Xt((Y, U) => {
    var _a;
    P.setClearColor(U.background, 1), w.remove(V), (_a = V.traverse) == null ? void 0 : _a.call(V, (Q) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Q.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Q.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), V = Ut(x.gridSize.rawVal, { planes: de() }), w.add(V), g.style.setProperty("--awatif-legend-color", U.legendMarker), J();
  });
  const pe = { scene: w, perspCamera: p, orthoCamera: b, get camera() {
    return F;
  }, controls: y, renderer: P, rendererElm: P.domElement, render: J, setActiveCamera: oe, setSplitMode: le, get splitMode() {
    return Z;
  }, get splitCamera() {
    return z;
  }, settings: x };
  g.__ctx = pe;
  const re = document.createElement("div");
  re.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const he = (Y, U, Q) => {
    const O = document.createElement("button");
    return O.textContent = Y, O.title = U, O.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), O.onmouseenter = () => {
      O.style.background = "rgba(70,70,70,0.9)";
    }, O.onmouseleave = () => {
      O.style.background = "rgba(40,40,40,0.85)";
    }, O.onclick = (ue) => {
      ue.preventDefault(), Q();
    }, O;
  }, ge = (Y, U) => {
    const Q = y.target, O = new m().subVectors(F.position, Q), ue = O.length(), xe = new m(), ye = new m();
    xe.crossVectors(F.up, O).normalize(), ye.copy(F.up).normalize();
    const fe = ue * 0.05;
    Q.addScaledVector(xe, -Y * fe), Q.addScaledVector(ye, U * fe), F.position.addScaledVector(xe, -Y * fe), F.position.addScaledVector(ye, U * fe), y.update(), J();
  }, Se = (Y) => {
    const U = new m().subVectors(F.position, y.target);
    U.multiplyScalar(Y), F.position.copy(y.target).add(U), y.update(), J();
  }, Te = () => {
    const Y = document.createElement("div");
    return Y.style.cssText = "width:32px;height:32px;", Y;
  };
  return re.append(Te()), re.append(he("\u2191", "Pan arriba", () => ge(0, 1))), re.append(he("\u2295", "Zoom in", () => Se(0.85))), re.append(he("\u2190", "Pan izquierda", () => ge(-1, 0))), re.append(he("\u2302", "Reset vista", () => {
    y.reset(), J();
  })), re.append(he("\u2192", "Pan derecha", () => ge(1, 0))), re.append(he("\u2296", "Zoom out", () => Se(1.18))), re.append(he("\u2193", "Pan abajo", () => ge(0, -1))), re.append(Te()), getComputedStyle(g).position === "static" && (g.style.position = "relative"), g.appendChild(re), g;
}
function Co(e, s) {
  return L.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const f = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], d = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!d || f.length === 0) return f;
    const l = s.deformScale.val, g = s.deformScale.val * s.deformScaleZ.val, w = Number.isFinite(l) ? l : 1, p = Number.isFinite(g) ? g : 1;
    return f.map((b, F) => {
      var _a2;
      const P = ((_a2 = d.get(F)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], y = Number.isFinite(P[0]) ? P[0] : 0, W = Number.isFinite(P[1]) ? P[1] : 0, H = Number.isFinite(P[2]) ? P[2] : 0;
      return [b[0] + y * w, b[1] + W * w, b[2] + H * p];
    });
  });
}
const Ot = L.state(null), qt = L.state(""), Vo = L.state("kN"), zo = L.state("mm"), Fo = L.state("kN/m\xB2"), Ao = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, yn = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, To = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Eo(e, s) {
  const f = L.state([]);
  let d;
  return ((l) => {
    l.bendingXX = "bendingXX", l.bendingYY = "bendingYY", l.bendingXY = "bendingXY", l.membraneXX = "membraneXX", l.membraneYY = "membraneYY", l.membraneXY = "membraneXY", l.tranverseShearX = "tranverseShearX", l.tranverseShearY = "tranverseShearY", l.vonMises = "vonMises", l.pressure = "pressure", l.displacementX = "displacementX", l.displacementY = "displacementY", l.displacementZ = "displacementZ";
  })(d || (d = {})), L.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const l = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), D = (pe, re) => {
      pe == null ? void 0 : pe.forEach((he, ge) => {
        const Se = e.elements.val[ge];
        if (Se) for (let Te = 0; Te < Se.length; Te++) re.set(Se[Te], [he[Te] ?? he[0]]);
      });
    };
    D((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, l), D((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, g), D((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, w), D((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, p), D((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, b), D((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, F), D((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, P), D((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, y), D((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, W), D((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.pressure, H);
    const ie = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, x = (_w = s.solidResults) == null ? void 0 : _w.val, te = x && x !== "none" ? x : s.shellResults.val, de = ie == null ? void 0 : ie[te], N = { bendingXX: [l, 0], bendingYY: [g, 0], bendingXY: [w, 0], membraneXX: [p, 0], membraneYY: [b, 0], membraneXY: [F, 0], tranverseShearX: [P, 0], tranverseShearY: [y, 0], vonMises: [W, 0], pressure: [H, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, V = s.shellResults.val, I = Vo.val, C = zo.val, _ = V === "displacementX" || V === "displacementY" || V === "displacementZ", T = V === "bendingXX" || V === "bendingYY" || V === "bendingXY", X = V === "membraneXX" || V === "membraneYY" || V === "membraneXY", E = V === "vonMises" || V === "pressure", $ = V === "tranverseShearX" || V === "tranverseShearY", R = (_D = s.solidResults) == null ? void 0 : _D.val, K = R === "vonMises" || R === "sigmaXX" || R === "sigmaYY" || R === "sigmaZZ" || R === "tauXY" || R === "tauYZ" || R === "tauXZ", Z = R === "ux" || R === "uy" || R === "uz", z = Fo.val, B = K ? To[z] : Z || _ ? yn[C] : T || X || E || $ ? 1 / Ao[I] : 1, ae = K ? z : Z || _ ? C : T ? `${I}\xB7m/m` : X ? `${I}/m\xB2` : E ? `${I}/m\xB2` : $ ? `${I}/m` : "";
    qt.val = ae, Ot.val = Array.isArray(de) && de.length === 2 ? [de[0] * B, de[1] * B] : null;
    const oe = R && R !== "none" ? [W, 0] : N[V], le = [];
    e.nodes.val.forEach((pe, re) => {
      const he = oe;
      if (!he || !he[0] || typeof he[0].has != "function") return;
      if (!he[0].has(re)) {
        le.push(Number.NaN);
        return;
      }
      const ge = he[0].get(re), Se = ge ? ge[he[1]] ?? 0 : 0;
      le.push(Se * B);
    }), f.val = le;
  }), f;
}
export {
  zo as a,
  vo as b,
  Vo as c,
  xn as d,
  Fo as e,
  Io as g
};
