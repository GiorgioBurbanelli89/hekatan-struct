import { Y as yn, B as ce, Z as gn, F as ut, G as qe, c as Dt, L as ct, e as et, D as Ft, d as Je, u as yt, m as oo, b as uo, V as S, z as Gt, H as gt, _ as zn, r as so, a as Pt, n as je, p as vn, $ as bn, k as fo, j as ho, s as fn, N as sn, S as Ot, a0 as Nn, f as Zn, h as Un, i as Kn, a1 as Wn, a2 as hn, a3 as mo, a4 as wo, a5 as xo, a6 as yo, a7 as go, g as Hn, a8 as Gn, C as qn, t as vo, v as bo, w as Mo, W as So, x as Jn, a9 as mn, J as Fn, A as ko, y as On, O as _o } from "./Text-CEhsqBUu.js";
import { v as R, P as ao, g as Wt, o as Mn } from "./theme-2eEBQPmF.js";
import "./styles-lf_LNy9d.js";
function Po(e, s, m) {
  const p = document.createElement("div"), l = new ao({ title: "Settings", expanded: true, container: p });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(l), p.setAttribute("id", "settings");
  const M = "hk_settingsPos";
  let v = null;
  try {
    const x = localStorage.getItem(M);
    x && (v = JSON.parse(x));
  } catch {
  }
  p.style.cssText = ["position:fixed", v ? `left:${v.left}px` : "left:8px", v ? `top:${v.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const f = () => {
    const x = p.querySelector(".tp-rotv_b");
    if (!x) {
      setTimeout(f, 200);
      return;
    }
    x.style.cursor = "move", x.style.userSelect = "none";
    let X = false, W = 0, O = 0, de = 0, C = 0;
    x.addEventListener("mousedown", (ee) => {
      X = true, W = ee.clientX, O = ee.clientY;
      const pe = p.getBoundingClientRect();
      de = pe.left, C = pe.top, p.style.left = `${de}px`, p.style.top = `${C}px`;
    }), window.addEventListener("mousemove", (ee) => {
      if (!X) return;
      const pe = ee.clientX - W, le = ee.clientY - O, Y = Math.max(0, Math.min(window.innerWidth - 40, de + pe)), j = Math.max(0, Math.min(window.innerHeight - 40, C + le));
      p.style.left = `${Y}px`, p.style.top = `${j}px`;
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
    l.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const x = l.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    x.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), x.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), x.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), x.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), x.addBinding(e.gridVisible, "val", { label: "Mostrar" }), x.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), x.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), x.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), x.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), l.addBinding(e.nodes, "val", { label: "Nodes" }), l.addBinding(e.elements, "val", { label: "Elements" }), l.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), l.addBinding(e.faces, "val", { label: "  Caras (fill)" }), l.addBinding(e.elemColumns, "val", { label: "  Columnas" }), l.addBinding(e.elemBeams, "val", { label: "  Vigas" }), l.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), l.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), l.addBinding(e.orientations, "val", { label: "Orientations" }), l.addBinding(e.sections, "val", { label: "Sections" }), l.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), l.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), l.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), l.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((s == null ? void 0 : s.nodeInputs) || (s == null ? void 0 : s.elementInputs)) {
    const x = l.addFolder({ title: "Analysis Inputs" });
    x.addBinding(e.supports, "val", { label: "Supports" }), x.addBinding(e.loads, "val", { label: "Loads" }), x.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), x.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((s == null ? void 0 : s.deformOutputs) || (s == null ? void 0 : s.analyzeOutputs)) {
    const x = l.addFolder({ title: "Analysis Outputs" });
    x.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), x.addBinding(e.frameResults, "val", { options: { none: "none", "P (normals)": "normals", "V2 (shearY)": "shearsY", "V3 (shearZ)": "shearsZ", "T (torsion)": "torsions", "M2 (bendingY)": "bendingsY", "M3 (bendingZ)": "bendingsZ", "contour P": "contour:normals", "contour V2": "contour:shearsY", "contour V3": "contour:shearsZ", "contour T": "contour:torsions", "contour M2": "contour:bendingsY", "contour M3": "contour:bendingsZ" }, label: "Frame results" }), x.addBinding(e.shellResults, "val", { options: { none: "none", "F11 (membraneXX)": "membraneXX", "F22 (membraneYY)": "membraneYY", "F12 (membraneXY)": "membraneXY", "FMax (principal)": "membranePrincipalMax", "FMin (principal)": "membranePrincipalMin", "M11 (bendingXX)": "bendingXX", "M22 (bendingYY)": "bendingYY", "M12 (bendingXY)": "bendingXY", "MMax (principal)": "bendingPrincipalMax", "MMin (principal)": "bendingPrincipalMin", "V13 (shearX)": "tranverseShearX", "V23 (shearY)": "tranverseShearY", "VMax (magnitud)": "transverseShearMax", "Von Mises": "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), x.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), x.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), x.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), x.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  m && l.addBinding(e.solids, "val", { label: "Solids" });
  const y = l.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), b = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), _ = () => {
    const x = window.__hekatanClipApply;
    typeof x == "function" && x();
  };
  return y.addBinding(b, "enableX", { label: "Cortar X" }).on("change", _), y.addBinding(b, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", _), y.addBinding(b, "invertX", { label: "  invertir X" }).on("change", _), y.addBinding(b, "enableY", { label: "Cortar Y" }).on("change", _), y.addBinding(b, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", _), y.addBinding(b, "invertY", { label: "  invertir Y" }).on("change", _), y.addBinding(b, "enableZ", { label: "Cortar Z" }).on("change", _), y.addBinding(b, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", _), y.addBinding(b, "invertZ", { label: "  invertir Z" }).on("change", _), p;
}
function Co(e) {
  return { gridSize: R.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: R.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: R.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: R.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: R.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: R.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: R.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: R.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: R.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: R.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: R.state((e == null ? void 0 : e.nodes) ?? true), elements: R.state((e == null ? void 0 : e.elements) ?? true), edges: R.state((e == null ? void 0 : e.edges) ?? true), faces: R.state((e == null ? void 0 : e.faces) ?? true), elemColumns: R.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: R.state((e == null ? void 0 : e.elemBeams) ?? true), nodesIndexes: R.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: R.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: R.state((e == null ? void 0 : e.orientations) ?? false), sections: R.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: R.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: R.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: R.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: R.state((e == null ? void 0 : e.secFloor) ?? -1), supports: R.state((e == null ? void 0 : e.supports) ?? true), loads: R.state((e == null ? void 0 : e.loads) ?? false), deformedShape: R.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: R.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: R.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: R.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: R.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: R.state((e == null ? void 0 : e.flipAxes) ?? false), solids: R.state((e == null ? void 0 : e.solids) ?? true), custom3D: R.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: R.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: R.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: R.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function zo(e, s, m) {
  const p = Wt(), l = new yn(new ce(), new gn({ color: p.nodePoint }));
  return Mn((M, v) => {
    l.material.color.setHex(v.nodePoint);
  }), l.frustumCulled = false, R.derive(() => {
    e.nodes.val && l.geometry.setAttribute("position", new ut(s.val.flat(), 3));
  }), R.derive(() => {
    if (m.val, s.val, !e.nodes.rawVal) return;
    const M = s.rawVal ?? [];
    let v = e.gridSize.val * 0.5;
    if (M.length >= 2) {
      const y = [1 / 0, 1 / 0, 1 / 0], b = [-1 / 0, -1 / 0, -1 / 0];
      for (const _ of M) for (let x = 0; x < 3; x++) y[x] = Math.min(y[x], _[x]), b[x] = Math.max(b[x], _[x]);
      v = Math.max(b[0] - y[0], b[1] - y[1], b[2] - y[2], 0.1);
    }
    const f = 0.03 * v;
    l.material.size = f * m.rawVal;
  }), R.derive(() => {
    l.visible = e.nodes.val;
  }), l;
}
function Fo(e, s, m) {
  const p = Wt(), l = new qe(), M = new Dt(new ce(), new ct({ color: p.elementLine }));
  Mn((X, W) => {
    M.material.color.setHex(W.elementLine);
  }), M.frustumCulled = false, M.renderOrder = 2, l.add(M);
  const v = new et({ vertexColors: true, transparent: true, opacity: p.shellOpacity, side: Ft, depthWrite: false, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }), f = new Je(new ce(), v);
  f.frustumCulled = false, f.userData.isShellArea = true, f.name = "__hekatan_shell_area", l.add(f);
  let y = new yt(p.shellWall), b = new yt(p.shellSlab), _ = new yt(p.shellTri);
  Mn((X, W) => {
    y = new yt(W.shellWall), b = new yt(W.shellSlab), _ = new yt(W.shellTri), v.opacity = W.shellOpacity, v.needsUpdate = true;
  });
  function x(X, W) {
    const O = Math.abs(W[0] - X[0]), de = Math.abs(W[1] - X[1]), C = Math.abs(W[2] - X[2]);
    return C > O && C > de || de > O && de > C;
  }
  return R.derive(() => {
    var _a;
    if (s.deformedShape.val, s.elemColumns.val, s.elemBeams.val, !s.elements.val) return;
    const X = s.elemColumns.rawVal, W = s.elemBeams.rawVal, O = m.val, de = ((_a = e.elements) == null ? void 0 : _a.val) || [], C = de.filter((Y) => {
      if (Y.length !== 2) return true;
      const j = O[Y[0]], H = O[Y[1]];
      if (!j || !H) return true;
      const T = x(j, H);
      return !(T && !X || !T && !W);
    }).map((Y) => Eo(Y).map((j) => [...O[j[0]], ...O[j[1]]]).flat()).flat();
    M.geometry.setAttribute("position", new ut(C, 3));
    const ee = [], pe = [];
    function le(Y, j, H, T) {
      const V = [j[0] - Y[0], j[1] - Y[1], j[2] - Y[2]], E = [T[0] - Y[0], T[1] - Y[1], T[2] - Y[2]], z = V[1] * E[2] - V[2] * E[1], I = V[2] * E[0] - V[0] * E[2], F = V[0] * E[1] - V[1] * E[0], Z = Math.sqrt(z * z + I * I + F * F);
      return Z < 1e-12 ? false : Math.abs(F / Z) < 0.5;
    }
    for (const Y of de) if (Y.length === 3) {
      const [j, H, T] = Y;
      if (O[j] && O[H] && O[T]) {
        ee.push(...O[j], ...O[H], ...O[T]);
        for (let V = 0; V < 3; V++) pe.push(_.r, _.g, _.b);
      }
    } else if (Y.length === 4) {
      const [j, H, T, V] = Y;
      if (O[j] && O[H] && O[T] && O[V]) {
        const E = le(O[j], O[H], O[T], O[V]) ? y : b;
        ee.push(...O[j], ...O[H], ...O[T]), ee.push(...O[j], ...O[T], ...O[V]);
        for (let z = 0; z < 6; z++) pe.push(E.r, E.g, E.b);
      }
    }
    ee.length > 0 ? (f.geometry.dispose(), f.geometry = new ce(), f.geometry.setAttribute("position", new ut(ee, 3)), f.geometry.setAttribute("color", new ut(pe, 3)), f.geometry.computeVertexNormals(), f.visible = s.faces ? s.faces.rawVal : true) : f.visible = false;
  }), R.derive(() => {
    l.visible = s.elements.val;
  }), R.derive(() => {
    s.edges && (M.visible = s.edges.val);
  }), R.derive(() => {
    if (!s.faces) return;
    const X = s.faces.val;
    f.geometry.attributes.position ? f.visible = X : X || (f.visible = false);
  }), l;
}
function Eo(e) {
  if (e.length === 2) return [e];
  const s = [];
  for (let m = 0; m < e.length; m++) s.push([e[m], e[(m + 1) % e.length]]);
  return s;
}
function En(e, s) {
  const m = Wt(), p = new qe();
  p.name = "hekatan-grid";
  const l = (s == null ? void 0 : s.planes) ?? ["xy"];
  let M = (s == null ? void 0 : s.majorStep) ?? 1, v = (s == null ? void 0 : s.minorStep) ?? 0.1;
  for (M <= 0 && (M = 1), v <= 0 && (v = 0.1); e / v > 500; ) v *= 2;
  for (; e / M > 100; ) M *= 2;
  const f = e / 2;
  M = Math.max(v, Math.round(M / v) * v);
  const b = new yt(m.grid), _ = new yt(m.grid).multiplyScalar(0.45), x = (W, O, de, C) => {
    const ee = [], pe = W === "xy" ? (T, V) => [T, V, 0] : W === "xz" ? (T, V) => [T, 0, V] : (T, V) => [0, T, V], le = Math.floor(f / O);
    for (let T = -le; T <= le; T++) {
      const V = T * O, E = pe(V, -f), z = pe(V, f);
      ee.push(...E, ...z);
    }
    for (let T = -le; T <= le; T++) {
      const V = T * O, E = pe(-f, V), z = pe(f, V);
      ee.push(...E, ...z);
    }
    const Y = new ce();
    Y.setAttribute("position", new ut(ee, 3));
    const j = new ct({ color: de, transparent: true, opacity: C, depthWrite: false }), H = new Dt(Y, j);
    return H.name = `grid-${W}-${O === v ? "minor" : "major"}`, H;
  }, X = (W, O, de) => {
    const C = W === "xy" ? (H, T) => [H, T, 0] : W === "xz" ? (H, T) => [H, 0, T] : (H, T) => [0, H, T], ee = [[-f, -f], [f, -f], [f, f], [-f, f]], pe = [];
    for (const [H, T] of ee) pe.push(...C(H, T));
    const le = new ce();
    le.setAttribute("position", new ut(pe, 3));
    const Y = new ct({ color: O, transparent: true, opacity: de, depthWrite: false }), j = new oo(le, Y);
    return j.name = `grid-${W}-border`, j.renderOrder = 1, j;
  };
  for (const W of l) p.add(x(W, v, _, 0.12)), p.add(x(W, M, b, 0.4)), p.add(X(W, b, 0.55));
  return p.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: M, minorStep: v, gridSize: e, planes: [...l] }, p;
}
function Ao(e, s, m, p) {
  const l = new qe(), M = new uo(0.5, 0.5, 0.5), v = new et({ color: 10166822 }), f = () => {
    const b = m.rawVal ?? [];
    if (b.length < 2) return s.gridSize.val * 0.5;
    let _ = [1 / 0, 1 / 0, 1 / 0], x = [-1 / 0, -1 / 0, -1 / 0];
    for (const X of b) for (let W = 0; W < 3; W++) X[W] < _[W] && (_[W] = X[W]), X[W] > x[W] && (x[W] = X[W]);
    return Math.max(x[0] - _[0], x[1] - _[1], x[2] - _[2], 0.1);
  }, y = () => 0.025 * f();
  return R.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, !s.supports.val) return;
    l.clear();
    const b = y();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((_, x) => {
      const X = m.val[x];
      if (!X) return;
      const W = new Je(M, v);
      W.position.set(...X);
      const O = b * p.rawVal;
      W.scale.set(O, O, O), l.add(W);
    });
  }), R.derive(() => {
    if (p.val, !s.supports.rawVal) return;
    const _ = y() * p.rawVal;
    l.children.forEach((x) => x.scale.set(_, _, _));
  }), R.derive(() => {
    l.visible = s.supports.val;
  }), l;
}
function Vo(e, s, m, p) {
  const l = new qe();
  l.name = "loadsGroup";
  function M(v) {
    if (v.length < 2) return 0.12 * s.gridSize.rawVal;
    const f = [1 / 0, 1 / 0, 1 / 0], y = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of v) for (let x = 0; x < 3; x++) f[x] = Math.min(f[x], _[x]), y[x] = Math.max(y[x], _[x]);
    return 0.08 * Math.max(y[0] - f[0], y[1] - f[1], y[2] - f[2], 0.1);
  }
  return R.derive(() => {
    var _a, _b, _c;
    if (s.deformedShape.val, !s.loads.val) return;
    l.children.forEach((y) => y.dispose()), l.clear();
    const v = m.val, f = M(v);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((y, b) => {
      const _ = v[b];
      if (!_) return;
      const x = new S(...y.slice(0, 3));
      if (x.lengthSq() < 1e-30) return;
      x.normalize();
      const X = new Gt(x, new S(..._), 1, 15637248, 0.3, 0.3), W = f * p.rawVal;
      X.scale.set(W, W, W), l.add(X);
    });
  }), R.derive(() => {
    if (p.val, !s.loads.rawVal) return;
    const f = M(m.rawVal) * p.rawVal;
    l.children.forEach((y) => y.scale.set(f, f, f));
  }), R.derive(() => {
    l.visible = s.loads.val;
  }), l;
}
function Lo(e, s, m) {
  const p = new qe();
  return R.derive(() => {
    if (!e.nodesIndexes.val) return;
    p.children.forEach((M) => M.dispose()), p.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    s.val.forEach((M, v) => {
      const f = new gt(`${v}`);
      f.position.set(...M), f.updateScale(l * m.rawVal), p.add(f);
    });
  }), R.derive(() => {
    if (m.val, !e.nodesIndexes.rawVal) return;
    const l = 0.05 * e.gridSize.val * 0.6;
    p.children.forEach((M) => M.updateScale(l * m.rawVal));
  }), R.derive(() => {
    p.visible = e.nodesIndexes.val;
  }), p;
}
function To(e, s, m, p) {
  const l = new qe();
  return R.derive(() => {
    var _a;
    if (s.deformedShape.val, !s.elementsIndexes.val) return;
    l.children.forEach((v) => v.dispose()), l.clear();
    const M = 0.05 * s.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((v, f) => {
      const y = new gt(`${f}`, void 0, "#001219");
      y.position.set(...Io(v.map((b) => m.rawVal[b]))), y.updateScale(M * p.rawVal), l.add(y);
    });
  }), R.derive(() => {
    if (p.val, !s.elementsIndexes.rawVal) return;
    const M = 0.05 * s.gridSize.val * 0.6;
    l.children.forEach((v) => v.updateScale(M * p.rawVal));
  }), R.derive(() => {
    l.visible = s.elementsIndexes.val;
  }), l;
}
function Io(e) {
  const s = e.reduce((p, l) => [p[0] + l[0], p[1] + l[1], p[2] + l[2]], [0, 0, 0]), m = e.length;
  return [s[0] / m, s[1] / m, s[2] / m];
}
function Qn(e, s) {
  const m = new qe(), p = 0.05 * e * 1, l = Wt(), M = new gt("X", "red", "transparent"), v = new gt(s ? "Z" : "Y", "green", "transparent"), f = new gt(s ? "Y" : "Z", "blue", "transparent"), y = new Gt(new S(1, 0, 0), new S(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), b = new Gt(new S(0, 1, 0), new S(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), _ = new Gt(new S(0, 0, 1), new S(0, 0, 0), 1, l.axisArrow, 0.2, 0.2);
  return M.position.set(1.3 * p, 0, 0), v.position.set(0, 1.3 * p, 0), f.position.set(0, 0, 1.3 * p), M.updateScale(0.4 * p), v.updateScale(0.4 * p), f.updateScale(0.4 * p), y.scale.set(p, p, p), b.scale.set(p, p, p), _.scale.set(p, p, p), m.add(y, b, _, M, v, f), m;
}
function In(e, s) {
  const m = new S(...e), l = new S(...s).clone().sub(m), M = l.length(), v = l.dot(new S(1, 0, 0)) / M, f = l.dot(new S(0, 1, 0)) / M, y = l.dot(new S(0, 0, 1)) / M, b = Math.sqrt(v ** 2 + f ** 2);
  let _ = new zn().fromArray([[v, f, y], [-f / b, v / b, 0], [-v * y / b, -f * y / b, b]].flat());
  return y === 1 && (_ = new zn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), y === -1 && (_ = new zn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new so().setFromMatrix3(_);
}
function Ln(e, s) {
  return e == null ? void 0 : e.map((m, p) => (9 * m + s[p]) / 10);
}
function ln(e) {
  const s = e.reduce((p, l) => [p[0] + l[0], p[1] + l[1], p[2] + l[2]], [0, 0, 0]), m = e.length;
  return [s[0] / m, s[1] / m, s[2] / m];
}
function $o(e, s, m) {
  const p = ln([s, m]), l = ln([e, m]), M = ln([e, s]), v = new S(...p).sub(new S(...l)).normalize(), f = new S(...m).sub(new S(...M)).normalize(), y = v.clone().cross(f).normalize(), b = y.clone().cross(v).normalize();
  return new so().makeBasis(v, b, y);
}
function Ro(e, s, m, p) {
  const l = new qe(), M = new ce(), v = new ct({ vertexColors: true }), f = [0, 0, 0], y = [1, 0, 0], b = [0, 1, 0], _ = [0, 0, 1];
  M.setAttribute("position", new ut([...f, ...y, ...f, ...b, ...f, ..._], 3));
  const x = [255, 0, 0], X = [0, 255, 0], W = [0, 0, 255];
  return M.setAttribute("color", new ut([...x, ...x, ...X, ...X, ...W, ...W], 3)), R.derive(() => {
    var _a;
    s.deformedShape.val, s.orientations.val && (l.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((O) => {
      const de = new Dt(M, v), C = m.rawVal[O[0]], ee = m.rawVal[O[1]];
      if (O.length === 2 && (de.position.set(...Ln(C, ee)), de.rotation.setFromRotationMatrix(In(C, ee))), O.length === 3) {
        const Y = m.rawVal[O[2]];
        de.position.set(...ln([C, ee, Y])), de.rotation.setFromRotationMatrix($o(C, ee, Y));
      }
      const le = 0.05 * s.gridSize.rawVal * 0.75 * p.rawVal;
      de.scale.set(le, le, le), l.add(de);
    }));
  }), R.derive(() => {
    if (p.val, !s.orientations.rawVal) return;
    const de = 0.05 * s.gridSize.val * 0.75 * p.rawVal;
    l.children.forEach((C) => C.scale.set(de, de, de));
  }), R.derive(() => {
    l.visible = s.orientations.val;
  }), l;
}
function Bo(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const s = (e.b * 100).toFixed(0), m = (e.h * 100).toFixed(0);
    return `${s}x${m}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function Xo(e, s, m, p) {
  const l = new qe(), M = new qe();
  l.add(M);
  function v(H, T) {
    const V = H / 2, E = T / 2, z = new Float32Array([0, -V, -E, 0, V, -E, 0, V, E, 0, -V, -E, 0, V, E, 0, -V, E]), I = new ce();
    I.setAttribute("position", new je(z, 3));
    const F = new Float32Array([0, -V, -E, 0, V, -E, 0, V, E, 0, -V, E, 0, -V, -E]), Z = new ce();
    return Z.setAttribute("position", new je(F, 3)), { fill: I, outline: Z };
  }
  function f(H, T = 24) {
    const V = H / 2, E = new Float32Array(T * 9);
    for (let Z = 0; Z < T; Z++) {
      const te = Z / T * Math.PI * 2, U = (Z + 1) / T * Math.PI * 2;
      E[Z * 9] = 0, E[Z * 9 + 1] = 0, E[Z * 9 + 2] = 0, E[Z * 9 + 3] = 0, E[Z * 9 + 4] = V * Math.cos(te), E[Z * 9 + 5] = V * Math.sin(te), E[Z * 9 + 6] = 0, E[Z * 9 + 7] = V * Math.cos(U), E[Z * 9 + 8] = V * Math.sin(U);
    }
    const z = new ce();
    z.setAttribute("position", new je(E, 3));
    const I = new Float32Array((T + 1) * 3);
    for (let Z = 0; Z <= T; Z++) {
      const te = Z / T * Math.PI * 2;
      I[Z * 3] = 0, I[Z * 3 + 1] = V * Math.cos(te), I[Z * 3 + 2] = V * Math.sin(te);
    }
    const F = new ce();
    return F.setAttribute("position", new je(I, 3)), { fill: z, outline: F };
  }
  function y(H, T, V, E) {
    const z = V ?? T * 0.08, I = E ?? H * 0.07, F = H / 2, Z = T / 2, te = Z - z, U = I / 2, xe = [];
    function A(Q, Se, ge, ve) {
      xe.push(0, Q, Se, 0, ge, Se, 0, ge, ve, 0, Q, Se, 0, ge, ve, 0, Q, ve);
    }
    A(-F, -Z, F, -te), A(-U, -te, U, te), A(-F, te, F, Z);
    const K = new ce();
    K.setAttribute("position", new je(new Float32Array(xe), 3));
    const ae = new Float32Array([0, -F, -Z, 0, F, -Z, 0, F, -te, 0, U, -te, 0, U, te, 0, F, te, 0, F, Z, 0, -F, Z, 0, -F, te, 0, -U, te, 0, -U, -te, 0, -F, -te, 0, -F, -Z]), ue = new ce();
    return ue.setAttribute("position", new je(ae, 3)), { fill: K, outline: ue };
  }
  function b(H, T, V) {
    const E = H / 2, z = T / 2, I = E - V, F = z - V, Z = [];
    function te(K, ae, ue, Q) {
      Z.push(0, K, ae, 0, ue, ae, 0, ue, Q, 0, K, ae, 0, ue, Q, 0, K, Q);
    }
    te(-E, -z, E, -F), te(-E, F, E, z), te(-E, -F, -I, F), te(I, -F, E, F);
    const U = new ce();
    U.setAttribute("position", new je(new Float32Array(Z), 3));
    const xe = new Float32Array([0, -E, -z, 0, E, -z, 0, E, -z, 0, E, z, 0, E, z, 0, -E, z, 0, -E, z, 0, -E, -z, 0, -I, -F, 0, I, -F, 0, I, -F, 0, I, F, 0, I, F, 0, -I, F, 0, -I, F, 0, -I, -F]), A = new ce();
    return A.setAttribute("position", new je(xe, 3)), { fill: U, outline: A };
  }
  function _(H, T, V) {
    const E = H / 2, z = T / 2, I = E - V, F = z - V, Z = new ce(), te = new Float32Array([0, -I, -F, 0, I, -F, 0, I, F, 0, -I, -F, 0, I, F, 0, -I, F]);
    Z.setAttribute("position", new je(te, 3));
    const U = [];
    function xe(ue, Q, Se, ge) {
      U.push(0, ue, Q, 0, Se, Q, 0, Se, ge, 0, ue, Q, 0, Se, ge, 0, ue, ge);
    }
    xe(-E, -z, E, -F), xe(-E, F, E, z), xe(-E, -F, -I, F), xe(I, -F, E, F);
    const A = new ce();
    A.setAttribute("position", new je(new Float32Array(U), 3));
    const K = new Float32Array([0, -E, -z, 0, E, -z, 0, E, -z, 0, E, z, 0, E, z, 0, -E, z, 0, -E, z, 0, -E, -z, 0, -I, -F, 0, I, -F, 0, I, -F, 0, I, F, 0, I, F, 0, -I, F, 0, -I, F, 0, -I, -F]), ae = new ce();
    return ae.setAttribute("position", new je(K, 3)), { concFill: Z, steelFillGeom: A, outline: ae };
  }
  function x(H, T, V) {
    const E = [], z = [[0, -H / 2, -T / 2], [0, -H / 2 + V, -T / 2], [0, -H / 2 + V, T / 2 - V], [0, H / 2, T / 2 - V], [0, H / 2, T / 2], [0, -H / 2, T / 2]], I = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const U of I) E.push(...z[U]);
    const F = new ce();
    F.setAttribute("position", new je(new Float32Array(E), 3));
    const Z = [];
    for (let U = 0; U < z.length; U++) {
      const xe = (U + 1) % z.length;
      Z.push(...z[U], ...z[xe]);
    }
    const te = new ce();
    return te.setAttribute("position", new je(new Float32Array(Z), 3)), { fill: F, outline: te };
  }
  function X(H, T, V, E) {
    const z = E / 2, I = [], F = [[0, -H - z, -T / 2], [0, -V - z, -T / 2], [0, -V - z, T / 2 - V], [0, -z, T / 2 - V], [0, -z, T / 2], [0, -H - z, T / 2]], Z = [[0, z, -T / 2], [0, z + V, -T / 2], [0, z + V, T / 2 - V], [0, H + z, T / 2 - V], [0, H + z, T / 2], [0, z, T / 2]], te = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const K of te) I.push(...F[K]);
    for (const K of te) I.push(...Z[K]);
    const U = new ce();
    U.setAttribute("position", new je(new Float32Array(I), 3));
    const xe = [];
    for (const K of [F, Z]) for (let ae = 0; ae < K.length; ae++) {
      const ue = (ae + 1) % K.length;
      xe.push(...K[ae], ...K[ue]);
    }
    const A = new ce();
    return A.setAttribute("position", new je(new Float32Array(xe), 3)), { fill: U, outline: A };
  }
  function W(H, T, V, E) {
    const z = T / 2, I = H, F = [[0, -I, -z], [0, -I, -z + V], [0, -E, -z + V], [0, -E, z - V], [0, -I, z - V], [0, -I, z], [0, 0, z], [0, 0, -z]], Z = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], te = [];
    for (const K of Z) te.push(...F[K]);
    const U = new ce();
    U.setAttribute("position", new je(new Float32Array(te), 3));
    const xe = [];
    for (let K = 0; K < F.length; K++) {
      const ae = (K + 1) % F.length;
      xe.push(...F[K], ...F[ae]);
    }
    const A = new ce();
    return A.setAttribute("position", new je(new Float32Array(xe), 3)), { fill: U, outline: A };
  }
  function O(H, T, V, E, z) {
    const I = T / 2, F = z / 2, Z = [], te = [[0, -H, -I], [0, -H, -I + V], [0, -F - E, -I + V], [0, -F - E, I - V], [0, -H, I - V], [0, -H, I], [0, -F, I], [0, -F, -I]], U = te.map((ue) => [ue[0], -ue[1], ue[2]]), xe = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ue of xe) Z.push(...te[ue]);
    for (const ue of xe) Z.push(...U[ue]);
    const A = new ce();
    A.setAttribute("position", new je(new Float32Array(Z), 3));
    const K = [];
    for (const ue of [te, U]) for (let Q = 0; Q < ue.length; Q++) {
      const Se = (Q + 1) % ue.length;
      K.push(...ue[Q], ...ue[Se]);
    }
    const ae = new ce();
    return ae.setAttribute("position", new je(new Float32Array(K), 3)), { fill: A, outline: ae };
  }
  function de(H, T, V, E) {
    const z = H / 2, I = T / 2, F = E / 2, Z = [[0, -F, -I], [0, F, -I], [0, F, I - V], [0, z, I - V], [0, z, I], [0, -z, I], [0, -z, I - V], [0, -F, I - V]], te = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], U = [];
    for (const ae of te) U.push(...Z[ae]);
    const xe = new ce();
    xe.setAttribute("position", new je(new Float32Array(U), 3));
    const A = [];
    for (let ae = 0; ae < Z.length; ae++) {
      const ue = (ae + 1) % Z.length;
      A.push(...Z[ae], ...Z[ue]);
    }
    const K = new ce();
    return K.setAttribute("position", new je(new Float32Array(A), 3)), { fill: xe, outline: K };
  }
  function C(H, T, V = 24) {
    const E = H / 2, z = E - T, I = [];
    for (let U = 0; U < V; U++) {
      const xe = U / V * Math.PI * 2, A = (U + 1) / V * Math.PI * 2, K = Math.cos(xe), ae = Math.sin(xe), ue = Math.cos(A), Q = Math.sin(A);
      I.push(0, E * K, E * ae, 0, E * ue, E * Q, 0, z * ue, z * Q), I.push(0, E * K, E * ae, 0, z * ue, z * Q, 0, z * K, z * ae);
    }
    const F = new ce();
    F.setAttribute("position", new je(new Float32Array(I), 3));
    const Z = [];
    for (let U = 0; U < V; U++) {
      const xe = U / V * Math.PI * 2, A = (U + 1) / V * Math.PI * 2;
      Z.push(0, E * Math.cos(xe), E * Math.sin(xe), 0, E * Math.cos(A), E * Math.sin(A)), Z.push(0, z * Math.cos(xe), z * Math.sin(xe), 0, z * Math.cos(A), z * Math.sin(A));
    }
    const te = new ce();
    return te.setAttribute("position", new je(new Float32Array(Z), 3)), { fill: F, outline: te };
  }
  const ee = new et({ color: 52479, transparent: true, opacity: 0.35, side: Ft, depthWrite: false }), pe = new ct({ color: 52479 }), le = new et({ color: 16750848, transparent: true, opacity: 0.4, side: Ft, depthWrite: false }), Y = new ct({ color: 16750848 });
  function j(H, T) {
    const V = Math.abs(T[0] - H[0]), E = Math.abs(T[1] - H[1]), z = Math.abs(T[2] - H[2]);
    return z > V && z > E || E > V && E > z;
  }
  return R.derive(() => {
    var _a, _b;
    s.deformedShape.val, s.secColumns.val, s.secBeams.val, s.secFloor.val;
    const H = s.secColumns.rawVal, T = s.secBeams.rawVal;
    if (!H && !T) {
      l.children.forEach((F) => {
        F instanceof gt && F.dispose();
      }), l.clear();
      return;
    }
    l.children.forEach((F) => {
      F instanceof gt && F.dispose();
    }), l.clear();
    const V = (_a = e.elements) == null ? void 0 : _a.val, E = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!V || !E) return;
    const z = E.sectionShapes, I = s.secFloor.rawVal;
    V.forEach((F, Z) => {
      if (F.length !== 2) return;
      const te = m.rawVal[F[0]], U = m.rawVal[F[1]];
      if (!te || !U) return;
      const xe = j(te, U);
      if (xe && !H || !xe && !T) return;
      if (I >= 0) {
        const Q = Math.min(te[1], U[1]);
        Math.max(te[1], U[1]);
        const Se = s.gridSize.rawVal || 3;
        if (Math.floor(Q / Se + 0.01) !== I) return;
      }
      const A = z == null ? void 0 : z.get(Z);
      if (!A) return;
      const K = [(te[0] + U[0]) / 2, (te[1] + U[1]) / 2, (te[2] + U[2]) / 2], ae = In(te, U);
      if (A.type === "CFT") {
        const Q = _(A.b, A.h, A.tw ?? A.b * 0.05), Se = new Je(Q.concFill, ee);
        Se.position.set(...K), Se.rotation.setFromRotationMatrix(ae), l.add(Se);
        const ge = new Je(Q.steelFillGeom, le);
        ge.position.set(...K), ge.rotation.setFromRotationMatrix(ae), l.add(ge);
        const ve = new Pt(Q.outline, Y);
        ve.position.set(...K), ve.rotation.setFromRotationMatrix(ae), l.add(ve);
      } else {
        let Q, Se, ge;
        switch (A.type) {
          case "rect":
            Q = v(A.b, A.h), Se = ee, ge = pe;
            break;
          case "circ":
            Q = f(A.d), Se = ee, ge = pe;
            break;
          case "I":
            Q = y(A.b, A.h, A.tf, A.tw), Se = le, ge = Y;
            break;
          case "HSS":
            Q = b(A.b, A.h, A.tw ?? A.b * 0.05), Se = le, ge = Y;
            break;
          case "CFT":
            Q = _(A.b, A.h, A.tw ?? A.b * 0.05), Se = le, ge = Y;
            break;
          case "L":
            Q = x(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3), Se = le, ge = Y;
            break;
          case "2L":
            Q = X(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3, A.dis ?? 0.01), Se = le, ge = Y;
            break;
          case "C":
          case "coldC":
            Q = W(A.b, A.h, A.tf ?? A.t ?? 3e-3, A.tw ?? A.t ?? 3e-3), Se = le, ge = Y;
            break;
          case "2C":
            Q = O(A.b, A.h, A.tf ?? 5e-3, A.tw ?? 5e-3, A.dis ?? 0.01), Se = le, ge = Y;
            break;
          case "T":
            Q = de(A.b, A.h, A.tf ?? 0.01, A.tw ?? 6e-3), Se = le, ge = Y;
            break;
          case "pipe":
            Q = C(A.d, A.tw ?? A.d * 0.05), Se = le, ge = Y;
            break;
          default:
            return;
        }
        const ve = new Je(Q.fill, Se);
        ve.position.set(...K), ve.rotation.setFromRotationMatrix(ae), l.add(ve);
        const Pe = new Pt(Q.outline, ge);
        Pe.position.set(...K), Pe.rotation.setFromRotationMatrix(ae), l.add(Pe);
      }
      const ue = Bo(A);
      if (ue) {
        const Se = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(A.type) ? "#ff9900" : "#00ccff", ge = new gt(ue, Se, "transparent");
        ge.position.set(K[0], K[1], K[2]);
        const ve = 0.05 * s.gridSize.rawVal * 0.5;
        ge.updateScale(ve * ((p == null ? void 0 : p.rawVal) ?? 1)), M.add(ge);
      }
    });
  }), p && R.derive(() => {
    if (p.val, !s.sections.rawVal) return;
    const H = 0.05 * s.gridSize.val * 0.5;
    M.children.forEach((T) => {
      T instanceof gt && T.updateScale(H * p.rawVal);
    });
  }), R.derive(() => {
    l.visible = s.sections.val;
  }), R.derive(() => {
    M.visible = s.sectionLabels.val;
  }), l;
}
class wn extends qe {
  constructor(s, m, p, l, M, v, f) {
    super();
    const y = new vn().moveTo(0, 0).lineTo(0, v[1]).lineTo(p, v[1]).lineTo(p, 0).lineTo(0, 0), b = y.getPoints(), _ = new ce().setFromPoints(b);
    this.lines = new Pt(_, new ct({ color: Wt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), f && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const x = new bn(y), X = new et({ color: v[1] > 0 ? 24435 : 11411474, side: Ft });
    this.mesh = new Je(x, X), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), f && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new gt(`${M[1].toFixed(2)}`), this.normalizedResult = v, this.textPosition = ln([s, m]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(l), this.add(this.text);
  }
  updateScale(s) {
    this.lines.scale.set(1, s * 2, 1), this.mesh.scale.set(1, s * 2, 1), this.text.updateScale(s * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * s);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class jn extends qe {
  constructor(s, m, p, l, M, v, f) {
    super();
    const y = M[0] * p / (M[0] + M[1]), b = M[0] * M[1] > 0;
    if (this.text = new gt(`${M[0].toFixed(2)}`), this.text2 = new gt(`${(M[1] * -1).toFixed(2)}`), this.normalizedResult = v, this.textPosition = Ln(s, m), this.text2Position = Ln(m, s), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(l), this.text2.rotation.setFromRotationMatrix(l), this.add(this.text, this.text2), b) {
      const _ = new vn().moveTo(0, 0).lineTo(0, v[0]).lineTo(y, 0).lineTo(0, 0), x = new vn().moveTo(y, 0).lineTo(p, -v[1]).lineTo(p, 0).lineTo(y, 0), X = _.getPoints(), W = x.getPoints(), O = new ce().setFromPoints(X), de = new ce().setFromPoints(W), C = new ct({ color: Wt().resultOutline });
      this.lines = new Pt(O, C), this.lines2 = new Pt(de, C), this.lines.position.set(...s), this.lines2.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), this.lines2.rotation.setFromRotationMatrix(l), f && this.lines.rotateX(Math.PI / 2), f && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const ee = new bn(_), pe = new bn(x), le = new et({ color: v[0] > 0 ? 24435 : 11411474, side: Ft }), Y = new et({ color: -v[1] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new Je(ee, le), this.mesh2 = new Je(pe, Y), this.mesh.position.set(...s), this.mesh2.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), this.mesh2.rotation.setFromRotationMatrix(l), f && this.mesh.rotateX(Math.PI / 2), f && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const _ = new vn().moveTo(0, 0).lineTo(0, v[0]).lineTo(p, -v[1]).lineTo(p, 0).lineTo(0, 0), x = _.getPoints(), X = new ce().setFromPoints(x);
      this.lines = new Pt(X, new ct({ color: Wt().resultOutline })), this.lines.position.set(...s), this.lines.rotation.setFromRotationMatrix(l), f && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const W = new bn(_), O = new et({ color: v[0] > 0 ? 24435 : 11411474, side: Ft });
      this.mesh = new Je(W, O), this.mesh.position.set(...s), this.mesh.rotation.setFromRotationMatrix(l), f && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function Yo(e, s, m, p) {
  const l = new qe(), M = () => {
    const y = m.rawVal ?? [];
    if (y.length < 2) return s.gridSize.val * 0.5;
    let b = [1 / 0, 1 / 0, 1 / 0], _ = [-1 / 0, -1 / 0, -1 / 0];
    for (const x of y) for (let X = 0; X < 3; X++) x[X] < b[X] && (b[X] = x[X]), x[X] > _[X] && (_[X] = x[X]);
    return Math.max(_[0] - b[0], _[1] - b[1], _[2] - b[2], 0.1);
  }, v = () => 0.025 * M(), f = { normals: wn, shearsY: wn, shearsZ: wn, torsions: wn, bendingsY: jn, bendingsZ: jn };
  return R.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, m.val, s.frameResults.val == "none") return;
    l.children.forEach((b) => b.dispose()), l.clear();
    const y = io[s.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[y]) == null ? void 0 : _b.forEach((b, _) => {
      var _a2, _b2;
      const x = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[_]) ?? [0, 1], X = m.rawVal[x[0]], W = m.rawVal[x[1]], O = new S(...W).distanceTo(new S(...X)), de = Do((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[y]), C = b == null ? void 0 : b.map((Y) => Y / (de === 0 ? 1 : de)), ee = In(X, W), pe = new f[y](X, W, O, ee, b ?? [0, 0], C ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(y)), le = v();
      pe.updateScale(le * p.rawVal), l.add(pe);
    });
  }), R.derive(() => {
    if (p.val, s.frameResults.rawVal == "none") return;
    const y = v();
    l.children.forEach((b) => b.updateScale(y * p.rawVal));
  }), R.derive(() => {
    l.visible = s.frameResults.val != "none";
  }), l;
}
function Do(e) {
  let s = 0;
  return e == null ? void 0 : e.forEach((m) => {
    const p = Math.max(...m ?? [0, 0]);
    p > s && (s = p);
  }), s;
}
class No extends qe {
  constructor(s, m, p) {
    super();
    const l = m === $n.reactions;
    p[0] && (this.xText1 = new gt(`${l ? "Fx" : "Dx"}: ` + p[0].toFixed(4))), p[3] && (this.xText2 = new gt(`${l ? "Mx" : "Rx"}: ` + p[3].toFixed(4))), p[1] && (this.yText1 = new gt(`${l ? "Fy" : "Dy"}: ` + p[1].toFixed(4))), p[4] && (this.yText2 = new gt(`${l ? "My" : "Ry"}: ` + p[4].toFixed(4))), p[2] && (this.zText1 = new gt(`${l ? "Fz" : "Dz"}: ` + p[2].toFixed(4))), p[5] && (this.zText2 = new gt(`${l ? "Mz" : "Rz"}: ` + p[5].toFixed(4))), (p[0] || p[3]) && (this.xArrow = new Gt(new S(1, 0, 0), new S(0, 0, 0), 1, 15637248, 0.3, 0.3)), (p[1] || p[4]) && (this.yArrow = new Gt(new S(0, 1, 0), new S(0, 0, 0), 1, 15637248, 0.3, 0.3)), (p[2] || p[5]) && (this.zArrow = new Gt(new S(0, 0, 1), new S(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...s), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
  const l = new qe();
  return R.derive(() => {
    var _a, _b;
    if (s.deformedShape.val, s.nodeResults.val == "none") return;
    l.children.forEach((f) => f.dispose()), l.clear();
    const M = $n[s.nodeResults.rawVal], v = 0.05 * s.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[M]) == null ? void 0 : _b.forEach((f, y) => {
      const b = new No(m.rawVal[y], M, f ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(v * p.rawVal), l.add(b);
    });
  }), R.derive(() => {
    if (p.val, s.nodeResults.rawVal == "none") return;
    const M = 0.05 * s.gridSize.val;
    l.children.forEach((v) => v.updateScale(M * p.rawVal));
  }), R.derive(() => {
    l.visible = s.nodeResults.val != "none";
  }), l;
}
function Uo({ drawingObj: e, gridObj: s, scene: m, getActiveCamera: p, controls: l, gridSize: M, derivedDisplayScale: v, rendererElm: f, viewerRender: y }) {
  const b = new fo(), _ = new ho(), x = (n) => {
    const o = f.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, h = o.width || 1, d = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const i = h / 2;
      if (a >= i) return _.x = (a - i) / i * 2 - 1, _.y = -(t / d) * 2 + 1, window.__hekatanSplitCamera ?? p();
      _.x = a / i * 2 - 1;
    } else _.x = a / h * 2 - 1;
    return _.y = -(t / d) * 2 + 1, p();
  }, X = new Je(new fn(1e4, 1e4), new et({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
  X.visible = true, X.frustumCulled = false, m.add(X);
  const W = (n, o, a) => {
    const t = new Je(new fn(1e4, 1e4), new et({ side: Ft, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, m.add(t), t;
  }, O = W(Math.PI / 2, 0, 0), de = W(0, Math.PI / 2, 0), C = () => {
    if (O.visible = !!window.__hekatanGridPlaneXZ, de.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanShowOrthoPlanes !== false && Ue.visible) {
      const a = b.intersectObjects([Ue, L, J], false);
      if (a.length > 0) return a;
    }
    const o = [X];
    return O.visible && o.push(O), de.visible && o.push(de), _e.visible && ke.length > 0 && o.push(...ke), b.intersectObjects(o, false);
  }, ee = new yn(new ce(), new gn()), pe = new yn(new ce(), new gn({ color: "gray", sizeAttenuation: false, size: 6 })), le = new yn(new ce(), new gn({ color: "orange", size: 0.1 }));
  m.add(le);
  const Y = document.createElement("input");
  Y.id = "hk-rubber-label", Y.type = "text", Y.spellcheck = false, Y.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, Y.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none"].join(";") + ";", document.body.appendChild(Y);
  let j = null, H = null, T = false;
  const V = new S(), E = (n, o, a, t, h, d) => {
    const P = t - n, i = h - o, r = d - a, u = Math.hypot(P, i, r);
    if (u < 0.01) {
      Y.style.display = "none";
      return;
    }
    j = [n, o, a], H = [P / u, i / u, r / u], V.set((n + t) / 2, (o + h) / 2, (a + d) / 2), V.project(p());
    const g = f.getBoundingClientRect(), c = g.left + (V.x * 0.5 + 0.5) * g.width, w = g.top + (-V.y * 0.5 + 0.5) * g.height;
    if (Y.style.left = c + "px", Y.style.top = w + "px", Y.style.display = "block", !T) {
      if (Y.value = `${u.toFixed(2)} m`, document.activeElement !== Y) {
        const k = document.activeElement;
        k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && k !== Y || Y.focus({ preventScroll: true });
      }
      try {
        Y.select();
      } catch {
      }
    }
  }, z = () => {
    Y.style.display = "none", j = null, H = null, T = false, document.activeElement === Y && Y.blur();
  }, I = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      St = n, we(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), Y.blur();
      return;
    }
    if (!j || !H || !e.polylines) return;
    let a = H[0], t = H[1], h = H[2];
    Ce === "x" ? (a = Math.sign(a) || 1, t = 0, h = 0) : Ce === "y" ? (a = 0, t = Math.sign(t) || 1, h = 0) : Ce === "z" && (a = 0, t = 0, h = Math.sign(h) || 1);
    const d = j[0] + a * n, P = j[1] + t * n, i = j[2] + h * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [d, P, i]];
    const r = e.polylines.rawVal, u = r.length ? r[r.length - 1] : [];
    e.polylines.val = [...r.slice(0, -1), [...u, e.points.rawVal.length - 1]], Y.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    y();
  }, F = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const a = o.startsWith("@");
    if (a && (o = o.slice(1)), o.includes("<")) {
      const h = o.split("<").map((d) => parseFloat(d.trim()));
      if (h.some(isNaN)) return null;
      if (h.length === 2) {
        const [d, P] = h;
        return a ? { kind: "relPolar", L: d, ang: P } : { kind: "absPolar", L: d, ang: P };
      }
      if (h.length === 3 && a) {
        const [d, P, i] = h;
        return { kind: "relSpherical", L: d, az: P, el: i };
      }
      return null;
    }
    if (o.includes(",")) {
      const h = o.split(",").map((r) => parseFloat(r.trim()));
      if (h.some(isNaN)) return null;
      const [d, P, i = 0] = h;
      return a ? { kind: "relCart", dx: d, dy: P, dz: i } : { kind: "absCart", x: d, y: P, z: i };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, Z = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return j ? [j[0] + n.dx, j[1] + n.dy, j[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!j) return null;
      const o = n.ang * Math.PI / 180;
      return [j[0] + n.L * Math.cos(o), j[1] + n.L * Math.sin(o), j[2]];
    }
    if (n.kind === "relSpherical") {
      if (!j) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [j[0] + t * Math.cos(o), j[1] + t * Math.sin(o), j[2] + n.L * Math.sin(a)];
    }
    return null;
  }, te = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], Y.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    y();
  };
  Y.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = F(Y.value);
      if (!a) return;
      if (T = false, a.kind === "length") I(a.L), we(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = Z(a);
        if (!t) return;
        te(t);
        const h = a.kind;
        we(`\u270F ${h} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), T = false, Y.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!T && Y.style.display === "block") try {
          Y.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (T = true);
  }), window.addEventListener("keydown", (n) => {
    if (!j || !H || document.activeElement === Y) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (Y.value = n.key, Y.focus(), Y.setSelectionRange(1, 1), n.preventDefault());
  });
  const U = document.createElement("div");
  U.id = "hk-coord-readout", U.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", U.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(U);
  const xe = document.createElement("div");
  xe.id = "hk-coord-fixed", xe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", xe.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(xe);
  const A = new Pt(new ce().setFromPoints([new S(0, 0, 0), new S(0, 0, 0)]), new sn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  A.frustumCulled = false, A.visible = false, m.add(A);
  const K = new qe();
  K.frustumCulled = false, K.visible = false, m.add(K);
  const ae = (n) => {
    const o = new ce().setFromPoints([new S(0, 0, 0), new S(0, 0, 0)]), a = new sn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Pt(o, a);
  }, ue = ae(16711680), Q = ae(65280), Se = ae(35071);
  K.add(ue, Q, Se);
  const ge = (n) => {
    const o = new ce().setFromPoints([new S(0, 0, 0), new S(0, 0, 0), new S(0, 0, 0), new S(0, 0, 0)]), a = new ct({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new oo(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, ve = ge(3462041), Pe = ge(16724804), Be = ge(6333946), tt = new qe();
  tt.frustumCulled = false, tt.visible = false, m.add(tt), tt.add(ve, Pe, Be);
  const vt = (n) => {
    const o = new fn(1, 1), a = new et({ color: n, transparent: true, opacity: 0.06, side: Ft, depthWrite: false }), t = new Je(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Ue = vt(3462041), L = vt(16724804), J = vt(6333946);
  tt.add(Ue, L, J);
  const oe = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, ie = document.createElement("div");
  ie.id = "hk-refplane-badge", ie.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(ie), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, tt.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0], P = window.__hekatanOrthoExt ?? 8;
      Xe(ve, d, "xy", P), Xe(Pe, d, "xz", P), Xe(Be, d, "yz", P), oe(Ue, d, "xy", P), oe(L, d, "xz", P), oe(J, d, "yz", P), Ue.material.opacity = 0.1, L.material.opacity = 0.1, J.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    y();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !tt.visible) {
      y();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], h = e.points.rawVal ?? [], d = o && o.length === 3 ? o : t.length > 0 && h[t[t.length - 1]] ? h[t[t.length - 1]] : [0, 0, 0];
    Xe(ve, d, "xy", n), Xe(Pe, d, "xz", n), Xe(Be, d, "yz", n), oe(Ue, d, "xy", n), oe(L, d, "xz", n), oe(J, d, "yz", n), y();
  };
  const Le = (n) => {
    if (Ue.material.opacity = n === "xy" ? 0.22 : 0.04, L.material.opacity = n === "xz" ? 0.22 : 0.04, J.material.opacity = n === "yz" ? 0.22 : 0.04, n) {
      const h = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      ie.style.background = h.bg, ie.style.color = h.text, ie.textContent = `\u25A6 Plano ${n.toUpperCase()}`, ie.style.display = "block";
    } else ie.style.display = "none";
  }, Xe = (n, o, a, t) => {
    let h;
    a === "xy" ? h = [new S(o[0] - t, o[1] - t, o[2]), new S(o[0] + t, o[1] - t, o[2]), new S(o[0] + t, o[1] + t, o[2]), new S(o[0] - t, o[1] + t, o[2]), new S(o[0] - t, o[1] - t, o[2])] : a === "xz" ? h = [new S(o[0] - t, o[1], o[2] - t), new S(o[0] + t, o[1], o[2] - t), new S(o[0] + t, o[1], o[2] + t), new S(o[0] - t, o[1], o[2] + t), new S(o[0] - t, o[1], o[2] - t)] : h = [new S(o[0], o[1] - t, o[2] - t), new S(o[0], o[1] + t, o[2] - t), new S(o[0], o[1] + t, o[2] + t), new S(o[0], o[1] - t, o[2] + t), new S(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(h);
  };
  let Ce = null;
  window.__hekatanAxisLock = () => Ce;
  const Fe = document.createElement("div");
  Fe.id = "hk-axis-lock-badge", Fe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Fe);
  const Et = () => {
    if (!Ce) {
      Fe.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    Fe.style.background = "rgba(15,23,42,0.92)", Fe.style.color = n[Ce], Fe.style.border = `1.5px solid ${n[Ce]}`, Fe.textContent = `\u{1F512} LOCK ${Ce.toUpperCase()}`, Fe.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== Y) return;
    const a = n.key.toLowerCase();
    if (a === "x" || a === "y" || a === "z") Ce = Ce === a ? null : a, Et(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), Yn(), n.preventDefault();
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
  const kt = new S(), Rt = new S(), Bt = new S(), Nt = (n) => {
    if (!Ce) return null;
    const o = n[0], a = n[1], t = n[2];
    return Ce === "x" ? (kt.set(o - 1e4, a, t), Rt.set(o + 1e4, a, t)) : Ce === "y" ? (kt.set(o, a - 1e4, t), Rt.set(o, a + 1e4, t)) : (kt.set(o, a, t - 1e4), Rt.set(o, a, t + 1e4)), b.ray.distanceSqToSegment(kt, Rt, null, Bt), Bt;
  };
  window.__hekatanProjectOnAxis = Nt;
  const D = new Pt(new ce().setFromPoints([new S(0, 0, 0), new S(0, 0, 0)]), new ct({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  D.renderOrder = 998, D.frustumCulled = false, D.visible = false, m.add(D);
  let re = -1, be = -1, se = -1;
  const me = /* @__PURE__ */ new Set();
  window.__hekatanSelection = me;
  const Ee = new Pt(new ce().setFromPoints([new S(), new S()]), new ct({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Ee.renderOrder = 997, Ee.frustumCulled = false, Ee.visible = false, m.add(Ee);
  const Ae = new Je(new Ot(0.02, 12, 12), new et({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Ae.renderOrder = 998, Ae.visible = false, m.add(Ae);
  const Re = () => {
    if (!Ae.visible) return;
    const o = p().position.distanceTo(Ae.position), a = Math.max(0.05, o / 10);
    Ae.scale.setScalar(a);
  }, Te = new qe();
  Te.frustumCulled = false, m.add(Te);
  const Ve = 2282478;
  let Oe = null;
  const ft = (n, o, a, t) => {
    if (!e.points) return -1;
    const h = e.points.rawVal;
    let d = -1, P = t;
    for (let i = 0; i < h.length; i++) {
      const r = h[i];
      if (!r) continue;
      const u = Math.hypot(n - r[0], o - r[1], a - r[2]);
      u < P && (P = u, d = i);
    }
    return d;
  }, Ke = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Te.children.length; ) {
      const P = Te.children.pop();
      (_b = (_a = P.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = P.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const P of me) {
      const [i, ...r] = P.split(":");
      if (i === "pt") {
        const u = n[+r[0]];
        if (!u) continue;
        const g = new Je(new Ot(0.025, 12, 12), new et({ color: Ve, transparent: true, opacity: 0.9, depthTest: false }));
        g.position.set(u[0], u[1], u[2]), g.renderOrder = 999, g.__isSelectionPt = true, Te.add(g);
      } else if (i === "seg") {
        const u = o[+r[0]], g = n[u == null ? void 0 : u[+r[1]]], c = n[u == null ? void 0 : u[+r[1] + 1]];
        if (!g || !c) continue;
        const w = new ce().setFromPoints([new S(g[0], g[1], g[2]), new S(c[0], c[1], c[2])]), k = new Pt(w, new ct({ color: Ve, transparent: true, opacity: 0.95, depthTest: false }));
        k.renderOrder = 999, Te.add(k);
      } else if (i === "poly") {
        const g = o[+r[0]].map((k) => {
          const N = n[k];
          return N ? new S(N[0], N[1], N[2]) : null;
        }).filter(Boolean);
        if (g.length < 2) continue;
        const c = new ce().setFromPoints(g), w = new Pt(c, new ct({ color: Ve, transparent: true, opacity: 0.95, depthTest: false }));
        w.renderOrder = 999, Te.add(w);
      } else if (i === "aux") {
        const u = t[+r[0]];
        if (!u || u.length !== 6) continue;
        const g = new ce().setFromPoints([new S(u[0], u[1], u[2]), new S(u[3], u[4], u[5])]), c = new Pt(g, new ct({ color: Ve, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, Te.add(c);
      }
    }
    const h = window.__hekatanUpdateSelectionPtScale;
    h && h();
    const d = window.__hekatanRefreshPropsPane;
    d && d(), y();
  };
  window.__hekatanRefreshSelection = Ke, window.__hekatanClearSelection = () => {
    me.clear(), Ke();
  };
  const ht = (n, o, a, t, h, d, P, i, r) => {
    const u = P - t, g = i - h, c = r - d, w = u * u + g * g + c * c;
    if (w < 1e-12) return Math.hypot(n - t, o - h, a - d);
    let k = ((n - t) * u + (o - h) * g + (a - d) * c) / w;
    k = Math.max(0, Math.min(1, k));
    const N = t + k * u, G = h + k * g, q = d + k * c;
    return Math.hypot(n - N, o - G, a - q);
  }, Ie = (n, o, a, t) => {
    if (!e.polylines) return null;
    const h = e.polylines.rawVal, d = e.points.rawVal;
    let P = -1, i = -1, r = t;
    for (let u = 0; u < h.length; u++) {
      const g = h[u];
      for (let c = 0; c < g.length - 1; c++) {
        const w = d[g[c]], k = d[g[c + 1]];
        if (!w || !k) continue;
        const N = ht(n, o, a, w[0], w[1], w[2], k[0], k[1], k[2]);
        N < r && (r = N, P = u, i = c);
      }
    }
    return P >= 0 ? { polyIdx: P, segIdx: i, dist: r } : null;
  }, it = (n, o, a, t) => {
    const h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? (h == null ? void 0 : h.val) ?? h ?? [];
    let P = -1, i = t;
    for (let r = 0; r < d.length; r++) {
      const u = d[r];
      if (!u || u.length !== 6) continue;
      const g = ht(n, o, a, u[0], u[1], u[2], u[3], u[4], u[5]);
      g < i && (i = g, P = r);
    }
    return P;
  }, nt = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      D.visible = false;
      return;
    }
    D.geometry.setFromPoints([new S(t[0], t[1], t[2]), new S(t[3], t[4], t[5])]), D.visible = true;
  }, Qt = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      D.visible = false;
      return;
    }
    const h = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, d = [];
    if (h || o < 0 || o >= a.length - 1) for (const P of a) {
      const i = t[P];
      i && d.push(new S(i[0], i[1], i[2]));
    }
    else {
      const P = t[a[o]], i = t[a[o + 1]];
      P && d.push(new S(P[0], P[1], P[2])), i && d.push(new S(i[0], i[1], i[2]));
    }
    D.geometry.setFromPoints(d), D.visible = true;
  }, Qe = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((r, u) => u !== n), t = /* @__PURE__ */ new Set();
    for (const r of a) for (const u of r) t.add(u);
    const h = e.points.rawVal, d = /* @__PURE__ */ new Map(), P = [];
    for (let r = 0; r < h.length; r++) t.has(r) && (d.set(r, P.length), P.push(h[r]));
    const i = a.map((r) => r.map((u) => d.get(u)).filter((u) => u !== void 0));
    e.points.val = P, e.polylines.val = i, e.areas && (e.areas.val = e.areas.rawVal.filter((r) => r !== n).map((r) => r > n ? r - 1 : r)), D.visible = false, re = -1, be = -1;
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
    const P = [...a.slice(0, n), ...d, ...a.slice(n + 1)], i = /* @__PURE__ */ new Set();
    for (const w of P) for (const k of w) i.add(k);
    const r = e.points.rawVal, u = /* @__PURE__ */ new Map(), g = [];
    for (let w = 0; w < r.length; w++) i.has(w) && (u.set(w, g.length), g.push(r[w]));
    const c = P.map((w) => w.map((k) => u.get(k)).filter((k) => k !== void 0));
    if (e.points.val = g, e.polylines.val = c, e.areas) {
      const w = d.length - 1;
      e.areas.val = e.areas.rawVal.map((k) => k > n ? k + w : k);
    }
    D.visible = false, re = -1, be = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  ee.geometry.setAttribute("position", new ut(e.points.rawVal.flat(), 3)), ee.geometry.computeBoundingSphere(), ee.frustumCulled = false, pe.frustumCulled = false, m.add(pe), X.position.set(0, 0, 0), X.rotateX(Math.PI / 2), X.geometry.rotateX(Math.PI / 2), X.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const P = Math.max(4, Math.round(h)), i = e.points.rawVal.length, r = [];
    for (let u = 0; u < P; u++) {
      const g = 2 * Math.PI * u / P, c = t * Math.cos(g), w = t * Math.sin(g);
      let k;
      d === "xy" ? k = [n + c, o + w, a] : d === "xz" ? k = [n + c, o, a + w] : k = [n, o + c, a + w], r.push(k);
    }
    if (e.points.val = [...e.points.rawVal, ...r], e.polylines) {
      const u = [...r.map((c, w) => i + w), i], g = e.polylines.rawVal;
      ((_a = g[g.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...g, u, []] : e.polylines.val = [...g.slice(0, -1), u, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const h = Math.max(4, Math.round(t)), d = new S(...n), P = new S(...o), i = new S(...a), r = new S().subVectors(P, d), u = new S().subVectors(i, d), g = new S().crossVectors(r, u).normalize(), c = new S().addVectors(d, P).multiplyScalar(0.5), w = new S().addVectors(P, i).multiplyScalar(0.5), k = new S().crossVectors(r, g).normalize(), N = new S().crossVectors(new S().subVectors(i, P), g).normalize(), G = new S().subVectors(w, c), q = k.x * N.y - k.y * N.x;
    let $;
    if (Math.abs(q) > 1e-9) {
      const We = (G.x * N.y - G.y * N.x) / q;
      $ = new S().addVectors(c, k.clone().multiplyScalar(We));
    } else $ = c.clone();
    const ne = d.distanceTo($), Me = new S().subVectors(d, $), st = new S().subVectors(i, $), ye = Math.acos(Math.max(-1, Math.min(1, Me.dot(st) / (ne * ne)))), $e = e.points.rawVal.length, xt = [], _t = g.clone();
    for (let We = 0; We <= h; We++) {
      const at = We / h, Tt = ye * at, It = new Nn().setFromAxisAngle(_t, Tt), zt = Me.clone().applyQuaternion(It).add($);
      xt.push([zt.x, zt.y, zt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...xt], e.polylines) {
      const We = xt.map((Tt, It) => $e + It), at = e.polylines.rawVal;
      e.polylines.val = [...at.slice(0, -1), We, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, h = 6) => {
    const d = Math.min(n[0], o[0]), P = Math.max(n[0], o[0]), i = Math.min(n[1], o[1]), r = Math.max(n[1], o[1]), u = (n[2] + o[2]) / 2, g = P - d, c = r - i, w = Math.min(a, g / 2 - 0.01, c / 2 - 0.01);
    if (w <= 0) return;
    const k = e.points.rawVal.length, N = [], G = [], q = ($, ne) => {
      N.push([$, ne, u]), G.push(k + N.length - 1);
    };
    for (let $ = 0; $ <= h; $++) q(d + w + (g - 2 * w) * $ / h, i);
    for (let $ = 1; $ <= t; $++) {
      const ne = -Math.PI / 2 + Math.PI / 2 * $ / t;
      q(P - w + w * Math.cos(ne), i + w + w * Math.sin(ne));
    }
    for (let $ = 1; $ <= h; $++) q(P, i + w + (c - 2 * w) * $ / h);
    for (let $ = 1; $ <= t; $++) {
      const ne = 0 + Math.PI / 2 * $ / t;
      q(P - w + w * Math.cos(ne), r - w + w * Math.sin(ne));
    }
    for (let $ = 1; $ <= h; $++) q(P - w - (g - 2 * w) * $ / h, r);
    for (let $ = 1; $ <= t; $++) {
      const ne = Math.PI / 2 + Math.PI / 2 * $ / t;
      q(d + w + w * Math.cos(ne), r - w + w * Math.sin(ne));
    }
    for (let $ = 1; $ <= h; $++) q(d, r - w - (c - 2 * w) * $ / h);
    for (let $ = 1; $ <= t; $++) {
      const ne = Math.PI + Math.PI / 2 * $ / t;
      q(d + w + w * Math.cos(ne), i + w + w * Math.sin(ne));
    }
    if (G.push(k), e.points.val = [...e.points.rawVal, ...N], e.polylines) {
      const $ = e.polylines.rawVal;
      e.polylines.val = [...$.slice(0, -1), G, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], h = n[1], d = n[2], P = o[0], i = o[1], r = o[2];
    let u;
    if (Math.abs(d - r) < 1e-6 ? u = [[t, h, d], [P, h, d], [P, i, d], [t, i, d]] : Math.abs(h - i) < 1e-6 ? u = [[t, h, d], [P, h, d], [P, h, r], [t, h, r]] : u = [[t, h, d], [t, i, d], [t, i, r], [t, h, r]], e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const g = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), g, []];
    }
  };
  const lt = new qe();
  lt.visible = false, m.add(lt), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; lt.children.length; ) {
      const g = lt.children.pop();
      (_a = g.geometry) == null ? void 0 : _a.dispose(), (_b = g.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const h = Math.min(...o) - t, d = Math.max(...o) + t, P = Math.min(...n) - t, i = Math.max(...n) + t, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", u = (g, c, w, k, N) => {
      const G = document.createElement("canvas");
      G.width = 64, G.height = 32;
      const q = G.getContext("2d");
      q.fillStyle = N, q.font = "bold 22px sans-serif", q.textAlign = "center", q.fillText(g, 32, 26);
      const $ = new Zn(G), ne = new Un({ map: $, transparent: true }), Me = new Kn(ne);
      return Me.position.set(c, w, k), Me.scale.set(1.2, 0.6, 1), Me;
    };
    n.forEach((g, c) => {
      const w = c < r.length ? r[c] : `X${c}`, k = new ce().setFromPoints([new S(g, h, 0), new S(g, d, 0), new S(g, h, 0), new S(g, h, a)]), N = new sn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), G = new Dt(k, N);
      G.computeLineDistances(), lt.add(G), lt.add(u(w, g, h - 0.5, 0, "#60a5fa")), lt.add(u(w, g, d + 0.5, 0, "#60a5fa"));
    }), o.forEach((g, c) => {
      const w = `${c + 1}`, k = new ce().setFromPoints([new S(P, g, 0), new S(i, g, 0), new S(P, g, 0), new S(P, g, a)]), N = new sn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), G = new Dt(k, N);
      G.computeLineDistances(), lt.add(G), lt.add(u(w, P - 0.5, g, 0, "#fb7185")), lt.add(u(w, i + 0.5, g, 0, "#fb7185"));
    }), lt.visible = true, y();
  }, window.__hekatanHideAxes = () => {
    lt.visible = false, y();
  };
  const _e = new qe();
  _e.visible = false, m.add(_e);
  let ke = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; _e.children.length; ) {
      const d = _e.children.pop();
      (_a = d.geometry) == null ? void 0 : _a.dispose(), (_b = d.material) == null ? void 0 : _b.dispose();
    }
    ke.forEach((d) => {
      m.remove(d), d.geometry.dispose(), d.material.dispose();
    }), ke = [];
    const h = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((d, P) => {
      const i = h[P % h.length], r = o / 2, u = [new S(a - r, t - r, d), new S(a + r, t - r, d), new S(a + r, t + r, d), new S(a - r, t + r, d), new S(a - r, t - r, d)], g = new ce().setFromPoints(u), c = new ct({ color: i, transparent: true, opacity: 0.55 });
      _e.add(new Pt(g, c));
      const w = document.createElement("canvas");
      w.width = 128, w.height = 32;
      const k = w.getContext("2d");
      k.fillStyle = `#${i.toString(16).padStart(6, "0")}`, k.font = "bold 18px sans-serif", k.fillText(`Z = ${d} m`, 4, 22);
      const N = new Zn(w), G = new Un({ map: N, transparent: true }), q = new Kn(G);
      q.position.set(a - r - 1.5, t - r - 1.5, d), q.scale.set(2.5, 0.6, 1), _e.add(q);
      const $ = new fn(1e4, 1e4), ne = new et({ visible: false, side: Ft }), Me = new Je($, ne);
      Me.position.set(0, 0, d), Me.frustumCulled = false, Me.userData = { refPlaneZ: d }, m.add(Me), ke.push(Me);
    }), _e.visible = true, y();
  }, window.__hekatanHideRefPlanes = () => {
    _e.visible = false, ke.forEach((n) => {
      n.visible = false;
    }), y();
  };
  const he = new qe();
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
      const t = new ce().setFromPoints([new S(a[0], a[1], a[2]), new S(a[3], a[4], a[5])]), h = new sn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), d = new Pt(t, h);
      d.computeLineDistances(), he.add(d);
    }
  };
  R.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, De(), y());
  });
  const fe = new qe();
  fe.frustumCulled = false, m.add(fe);
  const Ge = () => {
    var _a, _b, _c, _d;
    for (; fe.children.length; ) {
      const a = fe.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new Je(new Ot(0.025, 12, 12), new et({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996;
      const d = p().position.distanceTo(t.position);
      t.scale.setScalar(Math.max(0.05, d / 10)), fe.add(t);
    }
  };
  R.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, Ge(), y());
  }), l.addEventListener("change", () => {
    const n = p();
    fe.children.forEach((o) => {
      const a = n.position.distanceTo(o.position);
      o.scale.setScalar(Math.max(0.05, a / 10));
    });
  }), window.__hekatanRenderAuxPoints = Ge;
  const ze = new qe(), At = new Je(new Ot(0.01, 12, 12), new et({ color: 16724804, transparent: true, opacity: 0.95 })), Ne = new Je(new Ot(0.015, 12, 12), new et({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  ze.add(At, Ne);
  const Ye = 0.08, mt = (n, o, a) => {
    const t = new ce().setFromPoints([new S(...n), new S(...o)]);
    return new Pt(t, new ct({ color: a, transparent: true, opacity: 0.7 }));
  };
  ze.add(mt([-Ye, 0, 0], [Ye, 0, 0], 16711680)), ze.add(mt([0, -Ye, 0], [0, Ye, 0], 65280)), ze.add(mt([0, 0, -Ye], [0, 0, Ye], 35071)), ze.visible = false, ze.frustumCulled = false, m.add(ze);
  const bt = 40, Ut = 2.5, $t = () => {
    if (!ze.visible) return;
    const o = p().position.distanceTo(ze.position), a = Math.max(0.05, Math.min(Ut, o / bt));
    ze.scale.setScalar(a);
  }, Vt = () => {
    if (Te.children.length === 0) return;
    const n = p();
    Te.children.forEach((o) => {
      if (!o.__isSelectionPt) return;
      const a = n.position.distanceTo(o.position), t = Math.max(0.05, a / 10);
      o.scale.setScalar(t);
    });
  };
  window.__hekatanUpdateSelectionPtScale = Vt, l.addEventListener("change", () => {
    if ($t(), Ae.visible) {
      const o = p().position.distanceTo(Ae.position);
      Ae.scale.setScalar(Math.max(0.05, o / 10));
    }
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = p().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / bt));
    }
    Vt();
  }), window.__hekatanShowSnap = (n, o, a) => {
    ze.position.set(n, o, a), ze.visible = true, $t(), y();
  }, window.__hekatanHideSnap = () => {
    ze.visible = false, y();
  }, f.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p;
    const o = x(n);
    if (!o) return;
    b.setFromCamera(_, o);
    const a = C();
    if (a.length) {
      const t = a[0].point, h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, h);
      if (d) Bn(d.type, d.x, d.y, d.z), ze.position.set(d.x, d.y, d.z), ze.visible = true, t.set(d.x, d.y, d.z);
      else {
        Sn();
        const g = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        g && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), ze.position.copy(t), ze.visible = true;
      }
      $t();
      const P = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (P === "select" || !P) {
        const g = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = ft(t.x, t.y, t.z, g), w = Ie(t.x, t.y, t.z, g), k = it(t.x, t.y, t.z, g);
        if (c >= 0) {
          const $ = e.points.rawVal[c];
          Ae.position.set($[0], $[1], $[2]), Ae.visible = true, Re(), Ee.visible = false, Oe = { kind: "pt", a: c };
        } else if (w) {
          const $ = e.points.rawVal, ne = e.polylines.rawVal[w.polyIdx], Me = $[ne[w.segIdx]], st = $[ne[w.segIdx + 1]];
          Ee.geometry.setFromPoints([new S(Me[0], Me[1], Me[2]), new S(st[0], st[1], st[2])]), Ee.visible = true, Ae.visible = false, Oe = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(w.polyIdx)) ?? false ? { kind: "poly", a: w.polyIdx } : { kind: "seg", a: w.polyIdx, b: w.segIdx };
        } else if (k >= 0) {
          const ne = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[k];
          ne && (Ee.geometry.setFromPoints([new S(ne[0], ne[1], ne[2]), new S(ne[3], ne[4], ne[5])]), Ee.visible = true, Ae.visible = false, Oe = { kind: "aux", a: k });
        } else Ee.visible = false, Ae.visible = false, Oe = null;
        U.style.left = n.clientX + "px", U.style.top = n.clientY + "px", U.style.display = "block";
        let N = t;
        if ((Oe == null ? void 0 : Oe.kind) === "pt") {
          const $ = e.points.rawVal[Oe.a];
          $ && (N = new S($[0], $[1], $[2]));
        }
        const G = `X=${N.x.toFixed(2)} Y=${N.y.toFixed(2)} Z=${N.z.toFixed(2)}`;
        if (Oe) {
          const $ = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          U.textContent = `${G}  \xB7  \u{1F5B1} Click \u2192 ${$[Oe.kind]}`;
        } else U.textContent = G;
        const q = document.getElementById("hk-coord-fixed");
        q && (q.textContent = G), A.visible = false, K.visible = false, y();
        return;
      }
      if (P === "delete") {
        const g = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Ie(t.x, t.y, t.z, g), w = it(t.x, t.y, t.z, g);
        let k = false;
        if (w >= 0) if (!c) k = true;
        else {
          const $ = window.__hekatanDrawingAuxLines, Me = (($ == null ? void 0 : $.rawVal) ?? ($ == null ? void 0 : $.val) ?? $ ?? [])[w];
          ht(t.x, t.y, t.z, Me[0], Me[1], Me[2], Me[3], Me[4], Me[5]) < c.dist && (k = true);
        }
        k ? (se = w, re = -1, be = -1, nt(w)) : c ? (re = c.polyIdx, be = c.segIdx, se = -1, Qt(c.polyIdx, c.segIdx)) : (re = -1, be = -1, se = -1, D.visible = false), A.visible = false, K.visible = false, z(), U.style.left = n.clientX + "px", U.style.top = n.clientY + "px", U.style.display = "block";
        const N = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let G = "";
        k ? G = `\u{1F5D1} l\xEDnea aux #${se + 1}` : c ? G = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : G = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", U.textContent = `${N}  \xB7  ${G}`;
        const q = document.getElementById("hk-coord-fixed");
        q && (q.textContent = N), y();
        return;
      } else D.visible = false, re = -1, se = -1;
      U.style.left = n.clientX + "px", U.style.top = n.clientY + "px", U.style.display = "block";
      const i = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], r = i[i.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (r.length > 0 && u[r[r.length - 1]]) {
        const g = r[r.length - 1], c = u[g], w = !!window.__hekatanOrthoMode;
        let k = Ce;
        if (!k && w) {
          const We = Math.abs(t.x - c[0]), at = Math.abs(t.y - c[1]), Tt = Math.abs(t.z - c[2]), It = (_k = a[0]) == null ? void 0 : _k.object;
          let zt = null;
          It === Ue ? zt = "xy" : It === L ? zt = "xz" : It === J && (zt = "yz"), zt === "xy" ? k = We >= at ? "x" : "y" : zt === "xz" ? k = We >= Tt ? "x" : "z" : zt === "yz" ? k = at >= Tt ? "y" : "z" : k = We >= at && We >= Tt ? "x" : at >= Tt ? "y" : "z";
        }
        if (k) {
          const We = c[0], at = c[1], Tt = c[2];
          k === "x" ? t.set(t.x, at, Tt) : k === "y" ? t.set(We, t.y, Tt) : t.set(We, at, t.z);
          const It = !!Ce, Pn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[k];
          Fe.style.background = "rgba(15,23,42,0.92)", Fe.style.color = Pn, Fe.style.border = `1.5px solid ${Pn}`;
          const Cn = (_l = a[0]) == null ? void 0 : _l.object;
          let on = null;
          Cn === Ue ? on = "xy" : Cn === L ? on = "xz" : Cn === J && (on = "yz");
          const Dn = on ? ` (plano ${on.toUpperCase()})` : "";
          Fe.textContent = It ? `\u{1F512} LOCK ${k.toUpperCase()}${Dn}` : `\u22A5 ORTO ${k.toUpperCase()}${Dn}`, Fe.style.left = n.clientX + 20 + "px", Fe.style.top = n.clientY + 18 + "px", Fe.style.transform = "none", Fe.style.display = "block";
        } else Ce || (Fe.style.display = "none");
        const N = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), G = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, q = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        U.textContent = `${q} | \u0394L=${N.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const $ = document.getElementById("hk-coord-fixed");
        $ && ($.textContent = q), A.geometry.setFromPoints([new S(c[0], c[1], c[2]), new S(t.x, t.y, t.z)]), (_m = A.computeLineDistances) == null ? void 0 : _m.call(A), A.visible = true, E(c[0], c[1], c[2], t.x, t.y, t.z);
        const ne = window.__hekatanOrthoExt ?? 8, Me = window.__hekatanShowOrthoPlanes !== false;
        tt.visible = Me, Me || Le(null), Me && (Xe(ve, c, "xy", ne), Xe(Pe, c, "xz", ne), Xe(Be, c, "yz", ne), oe(Ue, c, "xy", ne), oe(L, c, "xz", ne), oe(J, c, "yz", ne));
        const st = Me ? b.intersectObjects([Ue, L, J], false) : [];
        let ye = null;
        if (st.length > 0) {
          const We = st[0].object;
          We === Ue ? ye = "xy" : We === L ? ye = "xz" : We === J && (ye = "yz");
        }
        Le(ye), ye && (ie.style.left = n.clientX + "px", ie.style.top = n.clientY + "px"), ue.geometry.setFromPoints([new S(c[0] - ne, c[1], c[2]), new S(c[0] + ne, c[1], c[2])]), (_n2 = ue.computeLineDistances) == null ? void 0 : _n2.call(ue), Q.geometry.setFromPoints([new S(c[0], c[1] - ne, c[2]), new S(c[0], c[1] + ne, c[2])]), (_o2 = Q.computeLineDistances) == null ? void 0 : _o2.call(Q), Se.geometry.setFromPoints([new S(c[0], c[1], c[2] - ne), new S(c[0], c[1], c[2] + ne)]), (_p = Se.computeLineDistances) == null ? void 0 : _p.call(Se), K.visible = true;
        const $e = ue.material, xt = Q.material, _t = Se.material;
        k === "x" ? ($e.opacity = 0.95, xt.opacity = 0.1, _t.opacity = 0.1) : k === "y" ? ($e.opacity = 0.1, xt.opacity = 0.95, _t.opacity = 0.1) : k === "z" ? ($e.opacity = 0.1, xt.opacity = 0.1, _t.opacity = 0.95) : ($e.opacity = 0.5, xt.opacity = 0.5, _t.opacity = 0.5);
      } else {
        const g = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        U.textContent = g;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = g), A.visible = false, K.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(P)) {
          if (j = null, H = null, Y.style.left = n.clientX + 20 + "px", Y.style.top = n.clientY - 28 + "px", Y.style.display = "block", !T) {
            Y.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const k = document.activeElement;
            !(k && (k.tagName === "INPUT" || k.tagName === "TEXTAREA") && k !== Y) && document.activeElement !== Y && Y.focus({ preventScroll: true });
            try {
              Y.select();
            } catch {
            }
          }
        } else z();
      }
      y();
    } else Sn(), U.style.display = "none", ze.visible = false, A.visible = false, K.visible = false, z(), y();
  }), R.derive(() => {
    e.gridTarget && (Ko(s, { position: new S(...e.gridTarget.val.position), quaternion: new Nn().setFromEuler(new Wn(...e.gridTarget.val.rotation)) }, y), X.position.set(...e.gridTarget.val.position), X.quaternion.setFromEuler(new Wn(...e.gridTarget.val.rotation)), X.updateMatrixWorld());
  }), R.derive(() => {
    ee.geometry.setAttribute("position", new ut(e.points.val.flat(), 3)), ee.geometry.computeBoundingSphere();
  }), R.derive(() => {
    const n = 0.05 * M * 0.5 * v.val;
    b.params.Points.threshold = 0.4 * n;
  }), R.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const d of a) {
      const [P, i, r] = n[d];
      t.push(P, i, r);
    }
    const h = new ce();
    h.setAttribute("position", new ut(t, 3)), le.geometry.dispose(), le.geometry = h;
  });
  let wt = false, Lt = 0;
  f.addEventListener("pointerdown", () => {
    wt = true;
  }), f.addEventListener("pointerup", () => {
    wt = false;
  }), f.addEventListener("pointermove", () => {
    wt && Lt++;
  });
  const dt = document.createElement("div");
  dt.id = "hk-window-select", dt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(dt);
  let Ct = null, Xt = false, pt = null;
  const jt = (n, o, a, t, h) => {
    h ? (dt.style.borderColor = "#34d399", dt.style.borderStyle = "dashed", dt.style.background = "rgba(52, 211, 153, 0.10)") : (dt.style.borderColor = "#22d3ee", dt.style.borderStyle = "solid", dt.style.background = "rgba(34, 211, 238, 0.10)"), dt.style.left = Math.min(n, a) + "px", dt.style.top = Math.min(o, t) + "px", dt.style.width = Math.abs(a - n) + "px", dt.style.height = Math.abs(t - o) + "px", dt.style.display = "block";
  }, rn = (n, o, a, t, h) => {
    var _a, _b, _c, _d;
    const d = Math.min(n, a), P = Math.max(n, a), i = Math.min(o, t), r = Math.max(o, t), u = a < n, g = f.getBoundingClientRect(), c = p();
    c.updateMatrixWorld();
    const w = (ye) => {
      const $e = new S(ye[0], ye[1], ye[2]);
      return $e.project(c), { x: g.left + ($e.x * 0.5 + 0.5) * g.width, y: g.top + (-$e.y * 0.5 + 0.5) * g.height };
    }, k = (ye) => ye.x >= d && ye.x <= P && ye.y >= i && ye.y <= r, N = (ye, $e) => !(ye.x < d && $e.x < d || ye.x > P && $e.x > P || ye.y < i && $e.y < i || ye.y > r && $e.y > r);
    h || me.clear();
    let G = 0;
    const q = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ye = 0; ye < q.length; ye++) {
      const $e = q[ye];
      $e && k(w($e)) && (me.add(`pt:${ye}`), G++);
    }
    const $ = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ne = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ye = 0; ye < $.length; ye++) {
      const $e = $[ye], xt = ne.includes(ye);
      let _t = false;
      for (let We = 0; We < $e.length - 1; We++) {
        const at = q[$e[We]], Tt = q[$e[We + 1]];
        if (!at || !Tt) continue;
        const It = w(at), zt = w(Tt);
        if (u ? k(It) || k(zt) || N(It, zt) : k(It) && k(zt)) {
          if (xt) {
            _t = true;
            break;
          }
          me.add(`seg:${ye}:${We}`), G++;
        }
      }
      xt && _t && (me.add(`poly:${ye}`), G++);
    }
    const st = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ye = 0; ye < st.length; ye++) {
      const $e = st[ye];
      if (!$e || $e.length !== 6) continue;
      const xt = w([$e[0], $e[1], $e[2]]), _t = w([$e[3], $e[4], $e[5]]);
      (u ? k(xt) || k(_t) || N(xt, _t) : k(xt) && k(_t)) && (me.add(`aux:${ye}`), G++);
    }
    Ke(), we(`${u ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${G} item(s) ${h ? "agregados a" : "\u2192"} selecci\xF3n (total ${me.size})`), dt.style.display = "none";
  }, qt = () => {
    pt && (pt = null, dt.style.display = "none", we("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = qt, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && pt && qt();
  });
  const cn = () => {
    var _a, _b, _c, _d;
    if (me.size === 0) return false;
    const n = [...me], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], h = window.__hekatanDrawingAuxLines, d = (h == null ? void 0 : h.rawVal) ?? [], P = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
    for (const N of n) {
      const [G, ...q] = N.split(":");
      if (G === "pt") P.add(+q[0]);
      else if (G === "poly") i.add(+q[0]);
      else if (G === "seg") {
        const $ = +q[0], ne = +q[1];
        r.has($) || r.set($, /* @__PURE__ */ new Set()), r.get($).add(ne);
      } else G === "aux" && u.add(+q[0]);
    }
    let g = 0, c = [], w = [];
    const k = /* @__PURE__ */ new Map();
    for (let N = 0; N < a.length; N++) {
      if (i.has(N)) {
        g++;
        continue;
      }
      k.set(N, c.length);
      const G = r.get(N);
      if (G && G.size > 0) {
        let q = [];
        for (let $ = 0; $ < a[N].length; $++) q.push(a[N][$]), $ < a[N].length - 1 && G.has($) && (q.length >= 2 && c.push(q), q = [], g++);
        (q.length >= 2 || q.length === 1) && c.push(q);
      } else c.push([...a[N]]);
    }
    if (P.size > 0) {
      const N = [], G = /* @__PURE__ */ new Map();
      for (let $ = 0; $ < o.length; $++) {
        if (P.has($)) {
          g++;
          continue;
        }
        G.set($, N.length), N.push([...o[$]]);
      }
      const q = [];
      for (const $ of c) {
        let ne = [];
        for (const Me of $) {
          const st = G.get(Me);
          st === void 0 ? (ne.length >= 2 && q.push(ne), ne = []) : ne.push(st);
        }
        ne.length >= 2 && q.push(ne);
      }
      c = q, e.points.val = N;
    }
    for (const N of t) {
      const G = k.get(N);
      G !== void 0 && G < c.length && w.push(G);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = w), u.size > 0 && h) {
      const N = d.filter((G, q) => !u.has(q));
      "val" in h ? h.val = N : window.__hekatanDrawingAuxLines = N, g += u.size;
    }
    me.clear(), Ke();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return we(`\u{1F5D1} ${g} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = cn, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) || me.size !== 0 && (n.preventDefault(), cn());
  });
  const Mt = document.createElement("div");
  Mt.id = "hk-properties-pane";
  const en = "hk-props-pane-pos";
  let Kt = null;
  try {
    const n = localStorage.getItem(en);
    n && (Kt = JSON.parse(n));
  } catch {
  }
  Mt.style.cssText = ["position:fixed", Kt ? `left:${Kt.left}px` : "left:50%", Kt ? `top:${Kt.top}px` : "top:8px", Kt ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Mt);
  const dn = () => {
    const n = Mt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, h = 0, d = 0;
    n.addEventListener("mousedown", (P) => {
      o = true, a = P.clientX, t = P.clientY;
      const i = Mt.getBoundingClientRect();
      h = i.left, d = i.top, Mt.style.transform = "none", Mt.style.left = `${h}px`, Mt.style.top = `${d}px`, P.preventDefault();
    }), window.addEventListener("mousemove", (P) => {
      if (!o) return;
      const i = P.clientX - a, r = P.clientY - t, u = Math.max(0, Math.min(window.innerWidth - 80, h + i)), g = Math.max(0, Math.min(window.innerHeight - 40, d + r));
      Mt.style.left = `${u}px`, Mt.style.top = `${g}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(en, JSON.stringify({ left: parseFloat(Mt.style.left), top: parseFloat(Mt.style.top) }));
        } catch {
        }
      }
    });
  }, B = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let He = null;
  const ot = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, pn = () => {
    if (He && (He.dispose(), He = null), me.size === 0) {
      Mt.style.display = "none";
      return;
    }
    const n = [...me], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), h = n.filter((c) => c.startsWith("aux:")), d = o.length === n.length && o.length > 0, P = a.length === n.length && a.length > 0, i = t.length === n.length && t.length > 0, r = !d && !P && !i, u = [];
    o.length && u.push(`\u{1F535} ${o.length} nodo(s)`), a.length && u.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && u.push(`\u25AD ${t.length} \xE1rea(s)`), h.length && u.push(`\u250A ${h.length} aux`);
    const g = `\u{1F3AF} ${me.size} item(s) \u2014 ${u.join(", ")}`;
    if (He = new ao({ container: Mt, title: g }), d) {
      const c = He.addFolder({ title: "\u{1F4CC} Restraints (DOFs)" });
      c.addBinding(B, "Ux"), c.addBinding(B, "Uy"), c.addBinding(B, "Uz"), c.addBinding(B, "Rx"), c.addBinding(B, "Ry"), c.addBinding(B, "Rz");
      const w = He.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      w.addBinding(B, "Kx", { label: "Kx", min: 0, step: 100 }), w.addBinding(B, "Ky", { label: "Ky", min: 0, step: 100 }), w.addBinding(B, "Kz", { label: "Kz", min: 0, step: 100 }), w.addBinding(B, "Krx", { label: "Krx", min: 0, step: 1e3 }), w.addBinding(B, "Kry", { label: "Kry", min: 0, step: 1e3 }), w.addBinding(B, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const k = He.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      k.addBinding(B, "Fx", { step: 0.1 }), k.addBinding(B, "Fy", { step: 0.1 }), k.addBinding(B, "Fz", { step: 0.1 }), k.addBinding(B, "Mx", { step: 0.1 }), k.addBinding(B, "My", { step: 0.1 }), k.addBinding(B, "Mz", { step: 0.1 }), He.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(B, "mass", { label: "m", min: 0, step: 1 }), He.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(B, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), He.addButton({ title: "\u2713 Aplicar a nodos seleccionados" }).on("click", () => {
        const q = [B.Ux, B.Uy, B.Uz, B.Rx, B.Ry, B.Rz];
        q.some((Me) => Me) && ot("nodes", o, "supports", q);
        const $ = [B.Fx, B.Fy, B.Fz, B.Mx, B.My, B.Mz];
        $.some((Me) => Me !== 0) && ot("nodes", o, "loads", $);
        const ne = [B.Kx, B.Ky, B.Kz, B.Krx, B.Kry, B.Krz];
        ne.some((Me) => Me !== 0) && ot("nodes", o, "springs", ne), B.mass !== 0 && ot("nodes", o, "mass", B.mass), B.diaphragm !== "Ninguno" && ot("nodes", o, "diaphragm", B.diaphragm), we(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    } else if (P) {
      const c = He.addFolder({ title: "\u{1F4CF} Secci\xF3n frame" });
      c.addBinding(B, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(B, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const w = He.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      w.addBinding(B, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), w.addBinding(B, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), w.addBinding(B, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), w.addBinding(B, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), He.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(B, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), He.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(B, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const G = He.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      G.addBinding(B, "relMxI", { label: "Mx I" }), G.addBinding(B, "relMyI", { label: "My I" }), G.addBinding(B, "relMzI", { label: "Mz I" });
      const q = He.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      q.addBinding(B, "relMxJ", { label: "Mx J" }), q.addBinding(B, "relMyJ", { label: "My J" }), q.addBinding(B, "relMzJ", { label: "Mz J" }), He.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(B, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ne = He.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ne.addBinding(B, "LKx", { label: "LKx", min: 0, step: 100 }), ne.addBinding(B, "LKy", { label: "LKy", min: 0, step: 100 }), ne.addBinding(B, "LKz", { label: "LKz", min: 0, step: 100 });
      const Me = He.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      Me.addBinding(B, "qx", { step: 0.1 }), Me.addBinding(B, "qy", { step: 0.1 }), Me.addBinding(B, "qz", { step: 0.1 }), He.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(B, "massPerM", { label: "m/L", min: 0, step: 1 }), He.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        ot("segs", a, "section", B.section), ot("segs", a, "material", B.material_frame);
        const ye = { A: B.A_mod, Iz: B.Iz_mod, Iy: B.Iy_mod, J: B.J_mod };
        (ye.A !== 1 || ye.Iz !== 1 || ye.Iy !== 1 || ye.J !== 1) && ot("segs", a, "modifiers", ye), B.insertionPoint !== "10 \u2014 Centroid" && ot("segs", a, "insertionPoint", B.insertionPoint), B.beta !== 0 && ot("segs", a, "beta", B.beta);
        const $e = [B.relMxI, B.relMyI, B.relMzI], xt = [B.relMxJ, B.relMyJ, B.relMzJ];
        ($e.some((at) => at) || xt.some((at) => at)) && ot("segs", a, "releases", { i: $e, j: xt }), B.hinges !== "None" && ot("segs", a, "hinges", B.hinges);
        const _t = [B.LKx, B.LKy, B.LKz];
        _t.some((at) => at !== 0) && ot("segs", a, "lineSprings", _t);
        const We = [B.qx, B.qy, B.qz];
        We.some((at) => at !== 0) && ot("segs", a, "distLoad", We), B.massPerM !== 0 && ot("segs", a, "massPerM", B.massPerM), we(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    } else if (i) {
      const c = He.addFolder({ title: "\u25AD Shell / \xC1rea" });
      c.addBinding(B, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(B, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(B, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), He.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(B, "surfLoad", { label: "q", step: 0.1 }), He.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        ot("areas", t, "shellType", B.shellType), ot("areas", t, "thickness", B.thickness), ot("areas", t, "material", B.material_shell), B.surfLoad !== 0 && ot("areas", t, "surfLoad", B.surfLoad), we(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    } else if (r) {
      const c = He.addFolder({ title: "\u2139 Selecci\xF3n mixta" }), w = { msg: "Selecciona un solo tipo para editar propiedades" };
      c.addBinding(w, "msg", { readonly: true, label: "" });
    }
    He.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      me.clear(), Ke();
    }), Mt.style.display = "block", dn();
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
        if (pt ? qt() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), me.size > 0 && (me.clear(), Ke()), e.polylines) {
          const d = e.polylines.rawVal;
          (d[d.length - 1] ?? []).length > 0 && (e.polylines.val = [...d, []]);
        }
        const t = window.__hekatanCadState, h = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        h && h !== "select" && h !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), we(`\u238B Cancelado \u2014 tool '${h}' cerrado, volv\xE9s a Seleccionar`)) : we("\u238B Cancelado (click derecho)");
      }
    }
  }), f.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), f.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Ct = { x: n.clientX, y: n.clientY }, Xt = false);
  }), f.addEventListener("pointermove", (n) => {
    if (pt && n.buttons === 0) {
      const d = n.clientX < pt.x;
      jt(pt.x, pt.y, n.clientX, n.clientY, d);
      return;
    }
    if (!Ct) return;
    const o = n.clientX - Ct.x, a = n.clientY - Ct.y, t = Math.hypot(o, a);
    if (!Xt && t < 8) return;
    Xt = true;
    const h = n.clientX < Ct.x;
    jt(Ct.x, Ct.y, n.clientX, n.clientY, h);
  }), f.addEventListener("pointerup", (n) => {
    if (!Ct) return;
    if (!Xt) {
      Ct = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    rn(Ct.x, Ct.y, n.clientX, n.clientY, o), Ct = null, Xt = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Yt = new qe();
  Yt.visible = false, Yt.frustumCulled = false, m.add(Yt);
  const ro = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, Bn = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Yt.children.length; ) {
      const i = Yt.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const h = ro[n] ?? 16777215, d = 0.05, P = new ce().setFromPoints([new S(o - d, a - d, t), new S(o + d, a - d, t), new S(o + d, a - d, t), new S(o + d, a + d, t), new S(o + d, a + d, t), new S(o - d, a + d, t), new S(o - d, a + d, t), new S(o - d, a - d, t)]);
    Yt.add(new Dt(P, new ct({ color: h, linewidth: 2 }))), Yt.position.set(0, 0, 0), Yt.visible = true;
  }, Sn = () => {
    Yt.visible = false;
  }, co = (n, o, a, t) => {
    var _a;
    const h = window.__hekatanOsnap, d = e.points.rawVal, P = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let i = null;
    const r = (c, w, k, N) => {
      const G = Math.hypot(w - n, k - o, N - a);
      G > t || (!i || G < i.d) && (i = { type: c, x: w, y: k, z: N, d: G });
    };
    (h.node || h.end) && d.forEach((c) => {
      h.node && r("node", c[0], c[1], c[2]);
    });
    for (const c of P) if (!(c.length < 2)) for (let w = 0; w < c.length - 1; w++) {
      const k = d[c[w]], N = d[c[w + 1]];
      if (!(!k || !N) && (h.end && (r("end", k[0], k[1], k[2]), r("end", N[0], N[1], N[2])), h.mid && r("mid", (k[0] + N[0]) / 2, (k[1] + N[1]) / 2, (k[2] + N[2]) / 2), h.nea || h.per)) {
        const G = N[0] - k[0], q = N[1] - k[1], $ = N[2] - k[2], ne = G * G + q * q + $ * $;
        if (ne < 1e-12) continue;
        const Me = Math.max(0, Math.min(1, ((n - k[0]) * G + (o - k[1]) * q + (a - k[2]) * $) / ne)), st = k[0] + Me * G, ye = k[1] + Me * q, $e = k[2] + Me * $;
        h.nea && r("nea", st, ye, $e), h.per && r("per", st, ye, $e);
      }
    }
    const u = window.__hekatanDrawingAuxLines, g = (u == null ? void 0 : u.rawVal) ?? (u == null ? void 0 : u.val) ?? u ?? [];
    for (const c of g) {
      if (c.length !== 6) continue;
      const w = [c[0], c[1], c[2]], k = [c[3], c[4], c[5]];
      if (h.end && (r("end", w[0], w[1], w[2]), r("end", k[0], k[1], k[2])), h.mid && r("mid", (w[0] + k[0]) / 2, (w[1] + k[1]) / 2, (w[2] + k[2]) / 2), h.nea || h.per) {
        const N = k[0] - w[0], G = k[1] - w[1], q = k[2] - w[2], $ = N * N + G * G + q * q;
        if ($ < 1e-12) continue;
        const ne = Math.max(0, Math.min(1, ((n - w[0]) * N + (o - w[1]) * G + (a - w[2]) * q) / $)), Me = w[0] + ne * N, st = w[1] + ne * G, ye = w[2] + ne * q;
        h.nea && r("nea", Me, st, ye), h.per && r("per", Me, st, ye);
      }
    }
    return i ? { type: i.type, x: i.x, y: i.y, z: i.z } : null;
  };
  window.__hekatanOsnapCompute = co, window.__hekatanOsnapShow = Bn, window.__hekatanOsnapHide = Sn;
  let Ze = [], St = 0;
  const tn = document.createElement("div");
  tn.id = "hk-cad-status", tn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", tn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(tn);
  const po = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), Ce && n.push(`\u{1F512} LOCK ${Ce.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, we = (n) => {
    const o = n + po();
    tn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    we(o);
  }, window.__hekatanCadResetPending = () => {
    Ze = [], we("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const nn = [], Ht = () => {
    var _a, _b;
    nn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), nn.length > 100 && nn.shift();
  }, Xn = () => {
    var _a;
    const n = nn.pop();
    if (!n) {
      we("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ze = [], A.visible = false, K.visible = false, z(), we(`\u21B6 Undo \u2014 ${nn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    y();
  };
  window.__hekatanPushUndo = Ht, window.__hekatanUndo = Xn, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), Xn();
    }
  }, { capture: true });
  const Yn = () => {
    if (Ze = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    Ce = null, Et(), A.visible = false, K.visible = false, z(), we("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), y();
  };
  window.__hekatanFinalizeDraw = Yn, f.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    if (Lt > 5) {
      Lt = 0;
      return;
    }
    Lt = 0;
    const o = x(n);
    if (!o) return;
    b.setFromCamera(_, o);
    const a = C();
    if (!a.length) return;
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new S(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], r = i[i.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (r.length > 0) {
        const g = u[r[r.length - 1]];
        if (g) {
          const c = !!window.__hekatanOrthoMode;
          let w = Ce;
          if (!w && c) {
            const k = Math.abs(t.x - g[0]), N = Math.abs(t.y - g[1]), G = Math.abs(t.z - g[2]);
            w = k >= N && k >= G ? "x" : N >= G ? "y" : "z";
          }
          w === "x" ? t = new S(t.x, g[1], g[2]) : w === "y" ? t = new S(g[0], t.y, g[2]) : w === "z" && (t = new S(g[0], g[1], t.z));
        }
      }
    }
    const h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, h);
    if (d) t = new S(d.x, d.y, d.z), we(`\u{1F3AF} Snap [${d.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const i = window.__hekatanSnapEnabled !== false, r = window.__hekatanSnap2D ?? 0;
      i && r > 0 && (t = new S(Math.round(t.x / r) * r, Math.round(t.y / r) * r, Math.round(t.z / r) * r));
    }
    const P = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (P === "select" || P === "none" || !P) {
      if (Oe) {
        pt && qt();
        const { kind: i, a: r, b: u } = Oe, g = u !== void 0 ? `${i}:${r}:${u}` : `${i}:${r}`;
        n.ctrlKey || n.metaKey || n.shiftKey || me.clear(), me.has(g) ? me.delete(g) : me.add(g), Ke(), we(`\u2713 Seleccionados ${me.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const i = n.ctrlKey || n.metaKey || n.shiftKey, r = n.clientX, u = n.clientY;
        pt ? (rn(pt.x, pt.y, r, u, i), pt = null) : i || (pt = { x: r, y: u }, we("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), jt(r, u, r + 1, u + 1, false));
      }
      return;
    }
    if (P === "axis") {
      const i = window.__hekatanAxisDraw;
      if (!i) return;
      if (!i.pendingStart) {
        i.pendingStart = [t.x, t.y, t.z], we(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const r = i.mode === "number", u = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, i.pendingStart, [t.x, t.y, t.z], r);
      we(`\u2713 Eje "${u}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (P === "delete") {
      if (se >= 0) {
        const i = window.__hekatanDrawingAuxLines, r = (i == null ? void 0 : i.rawVal) ?? (i == null ? void 0 : i.val) ?? i ?? [], u = se;
        if (u >= 0 && u < r.length) {
          Ht();
          const g = r.slice(0, u).concat(r.slice(u + 1));
          i && typeof i == "object" && "val" in i ? i.val = g : window.__hekatanDrawingAuxLines = g, we(`\u{1F5D1} L\xEDnea auxiliar #${u + 1} borrada`), se = -1, D.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (re >= 0) {
        const i = re, r = be;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(i)) ?? false ? (Qe(i), we(`\u{1F5D1} \xC1rea #${i + 1} (shell Q4) borrada`)) : r >= 0 ? (Zt(i, r), we(`\u{1F5D1} Segmento ${r + 1} de polil\xEDnea #${i + 1} borrado`)) : (Qe(i), we(`\u{1F5D1} Polil\xEDnea #${i + 1} borrada`));
      } else we("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (P === "circle") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        we("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [i, r] = Ze, u = Math.hypot(r[0] - i[0], r[1] - i[1], r[2] - i[2]);
      Math.abs(r[0] - i[0]);
      const g = Math.abs(r[1] - i[1]), w = Math.abs(r[2] - i[2]) < 1e-3 ? "xy" : g < 1e-3 ? "xz" : "yz", k = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, i[0], i[1], i[2], u, k, w), we(`\u2713 C\xEDrculo dibujado en ${w.toUpperCase()} \u2014 r=${u.toFixed(2)}m, ${k} segmentos`), Ze = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (P === "arc") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        we("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ze.length === 2) {
        we("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [i, r, u] = Ze, g = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, i, r, u, g), we(`\u2713 Arco dibujado \u2014 ${g} segmentos`), Ze = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (P === "rect") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        we("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, r] = Ze;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, i, r), we(`\u2713 Rect\xE1ngulo dibujado \u2014 (${i[0].toFixed(1)},${i[1].toFixed(1)}) \u2192 (${r[0].toFixed(1)},${r[1].toFixed(1)})`), Ze = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (P === "col") {
      Ht();
      const i = t.z, r = St && St > 0 ? St : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, i], [t.x, t.y, i + r]];
      const u = e.polylines.rawVal, g = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [g - 2, g - 1], []], St = 0, we(`\u258C Columna creada \u2014 h=${r.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (P === "wall") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        we("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [i, r] = Ze, u = St && St > 0 ? St : 3;
      Ht();
      const g = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [i[0], i[1], i[2]], [r[0], r[1], r[2]], [r[0], r[1], r[2] + u], [i[0], i[1], i[2] + u]];
      const c = e.polylines.rawVal;
      if (c.length - 1, e.polylines.val = [...c.slice(0, -1), ...c[c.length - 1].length > 0 ? [c[c.length - 1]] : [], [g, g + 1, g + 2, g + 3, g], []], e.areas) {
        const w = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, w];
      }
      we(`\u25A5 Pared Q4 creada \u2014 h=${u.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ze = [], St = 0;
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (P === "extp") {
      Ht();
      const i = St && St > 0 ? St : 3, r = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, r], [t.x, t.y, r + i]];
      const u = e.polylines.rawVal, g = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [g - 2, g - 1], []], St = 0, we(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${i.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (P === "extl") {
      const i = (window.__hekatanSnap2D ?? 0.5) * 1.5, r = Ie(t.x, t.y, t.z, i);
      if (!r) {
        we("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const u = e.polylines.rawVal, g = e.points.rawVal, c = u[r.polyIdx], w = g[c[r.segIdx]], k = g[c[r.segIdx + 1]];
      if (!w || !k) {
        we("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const N = St && St > 0 ? St : 3;
      Ht();
      const G = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [w[0], w[1], w[2]], [k[0], k[1], k[2]], [k[0], k[1], k[2] + N], [w[0], w[1], w[2] + N]];
      const q = e.polylines.rawVal;
      if (e.polylines.val = [...q.slice(0, -1), ...q[q.length - 1].length > 0 ? [q[q.length - 1]] : [], [G, G + 1, G + 2, G + 3, G], []], e.areas) {
        const $ = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, $];
      }
      St = 0, we(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${N.toFixed(2)}m`);
      try {
        (_s = window.__hekatanRebuild) == null ? void 0 : _s.call(window);
      } catch {
      }
      return;
    }
    if (P === "auxp") {
      const i = window.__hekatanDrawingAuxPoints;
      if (i) {
        const r = i.rawVal ?? i.val ?? [];
        i.val = [...r, [t.x, t.y, t.z]];
      }
      we(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (P === "aux") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        we("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [i, r] = Ze, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const N = u.rawVal ?? u.val ?? [];
        u.val = [...N, [i[0], i[1], i[2], r[0], r[1], r[2]]];
      }
      const g = r[0] - i[0], c = r[1] - i[1], w = r[2] - i[2], k = Math.sqrt(g * g + c * c + w * w);
      we(`\u2713 L\xEDnea auxiliar creada \u2014 L=${k.toFixed(2)}m (cyan, no FEM)`), Ze = [];
      return;
    }
    if (P === "extend") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        we("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [i, r] = Ze, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const g = u.rawVal ?? u.val ?? [];
        u.val = [...g, [i[0], i[1], i[2], r[0], r[1], r[2]]];
      }
      we("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ze = [];
      return;
    }
    if (P === "chaflan") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        we("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [i, r] = Ze, u = window.__hekatanChaflanR ?? 1, g = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t.call(window, i, r, u, g, 6);
      const c = Math.abs(r[0] - i[0]).toFixed(1), w = Math.abs(r[1] - i[1]).toFixed(1);
      we(`\u2713 Losa con chaflanes dibujada \u2014 ${c}\xD7${w}m, r=${u}m, ${g} seg/chafl\xE1n`), Ze = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (T = false, Ht(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const i = e.polylines.rawVal, r = i.length - 1, u = i[r] ?? [];
      if (P === "line" && u.length === 2) {
        e.polylines.val = [...i, []], we("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (P === "area" && u.length === 4) {
        e.polylines.val = [...i.slice(0, -1), [...u, u[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, r]), we("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (P === "node") we(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (P === "line") we("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (P === "polyline") we("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (P === "area") {
      const i = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      we(`\u25A6 \xC1rea \u2014 click ${i.length}/4. Marc\xE1 ${4 - i.length} v\xE9rtice${4 - i.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), f.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), f.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = x(n);
    if (!o) return;
    b.setFromCamera(_, o);
    const a = C();
    if (pe.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const P = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], i = P[P.length - 1] ?? [], r = e.points.rawVal ?? [];
        if (i.length > 0) {
          const u = r[i[i.length - 1]];
          if (u) {
            const g = !!window.__hekatanOrthoMode;
            let c = Ce;
            if (!c && g) {
              const w = Math.abs(t.x - u[0]), k = Math.abs(t.y - u[1]), N = Math.abs(t.z - u[2]);
              c = w >= k && w >= N ? "x" : k >= N ? "y" : "z";
            }
            c === "x" ? t.set(t.x, u[1], u[2]) : c === "y" ? t.set(u[0], t.y, u[2]) : c === "z" && t.set(u[0], u[1], t.z);
          }
        }
      }
      const h = (window.__hekatanSnap2D ?? 0.5) * 1.2, d = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, h);
      if (d) t.set(d.x, d.y, d.z);
      else {
        const P = window.__hekatanSnapEnabled !== false, i = window.__hekatanSnap2D ?? 0.5;
        P && i > 0 && (t.x = Math.round(t.x / i) * i, t.y = Math.round(t.y / i) * i, t.z = Math.round(t.z / i) * i);
      }
      pe.geometry.setAttribute("position", new ut(t.toArray(), 3));
    }
    y();
  }), f.addEventListener("pointermove", (n) => {
    var _a;
    const o = x(n);
    if (!o) return;
    b.setFromCamera(_, o);
    let a = false;
    const t = b.intersectObject(ee), h = C();
    if (t.length && h.length) {
      const d = new S(...e.points.rawVal[t[0].index]), P = new S(...h[0].point), i = d.sub(P), r = (_a = h[0].face) == null ? void 0 : _a.normal;
      r.transformDirection(X.matrixWorld), Math.abs(i.dot(r)) < 1e-4 && (a = true);
    }
    pe.visible = !a;
  });
  let kn = false, _n;
  f.addEventListener("pointermove", (n) => {
    var _a;
    if (!Lt) return;
    const o = x(n);
    if (!o) return;
    b.setFromCamera(_, o);
    let a = false;
    const t = b.intersectObject(ee), h = C();
    if (t.length && h.length) {
      const P = new S(...e.points.rawVal[t[0].index]), i = new S(...h[0].point), r = P.sub(i), u = (_a = h[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(X.matrixWorld), Math.abs(r.dot(u)) < 1e-4 && (a = true);
    }
    if (a && Lt < 5 && (kn = true, l.enabled = false, _n = t[0].index), !kn || Lt % 2 !== 0) return;
    const d = [...e.points.rawVal];
    if (_n !== void 0) {
      let P = h[0].point;
      (n.ctrlKey || n.metaKey) && (P = new S(Math.round(P.x), Math.round(P.y), Math.round(P.z))), d[_n] = P.toArray();
    }
    e.points.val = d;
  }), f.addEventListener("pointerup", () => {
    l.enabled = true, kn = false;
  }), f.addEventListener("contextmenu", (n) => {
    var _a;
    const o = x(n);
    if (!o) return;
    b.setFromCamera(_, o);
    let a = false;
    const t = b.intersectObject(ee), h = C();
    if (t.length && h.length) {
      const i = new S(...e.points.rawVal[t[0].index]), r = new S(...h[0].point), u = i.sub(r), g = (_a = h[0].face) == null ? void 0 : _a.normal;
      g.transformDirection(X.matrixWorld), Math.abs(u.dot(g)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const d = [...e.points.rawVal];
    if (d.splice(t[0].index, 1), e.points.val = d, !e.polylines) return;
    const P = e.polylines.rawVal.map((i) => i.filter((r) => r !== t[0].index)).map((i) => i.map((r) => r > t[0].index ? r - 1 : r)).filter((i) => i.length);
    P.push([]), e.polylines.val = P;
  });
}
function Ko(e, s, m) {
  const M = Math.round(14.999999999999998), v = { position: e.position.clone(), quaternion: e.quaternion.clone() }, f = setInterval(b, 1e3 / 30);
  let y = 0;
  function b() {
    y++;
    const _ = y / M;
    e.position.lerpVectors(v.position, s.position, _), e.quaternion.slerpQuaternions(v.quaternion, s.quaternion, _), m && m(), y == M && clearInterval(f);
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
    const p = 1 / this.n, l = new yt(), M = new yt();
    this.lut.length = 0, this.lut.push(new yt(this.map[0][1]));
    for (let v = 1; v < m; v++) {
      const f = v * p;
      for (let y = 0; y < this.map.length - 1; y++) if (f > this.map[y][0] && f <= this.map[y + 1][0]) {
        const b = this.map[y][0], _ = this.map[y + 1][0];
        l.setHex(this.map[y][1], hn), M.setHex(this.map[y + 1][1], hn);
        const x = new yt().lerpColors(l, M, (f - b) / (_ - b));
        this.lut.push(x);
      }
    }
    return this.lut.push(new yt(this.map[this.map.length - 1][1])), this;
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
    const m = s.getContext("2d", { alpha: false }), p = m.getImageData(0, 0, 1, this.n), l = p.data;
    let M = 0;
    const v = 1 / this.n, f = new yt(), y = new yt(), b = new yt();
    for (let _ = 1; _ >= 0; _ -= v) for (let x = this.map.length - 1; x >= 0; x--) if (_ < this.map[x][0] && _ >= this.map[x - 1][0]) {
      const X = this.map[x - 1][0], W = this.map[x][0];
      f.setHex(this.map[x - 1][1], hn), y.setHex(this.map[x][1], hn), b.lerpColors(f, y, (_ - X) / (W - X)), l[M * 4] = Math.round(b.r * 255), l[M * 4 + 1] = Math.round(b.g * 255), l[M * 4 + 2] = Math.round(b.b * 255), l[M * 4 + 3] = 255, M += 1;
    }
    return m.putImageData(p, 0, 0), s;
  }
}
const An = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, an = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Wo(e) {
  e = Math.max(0, Math.min(1, e));
  for (let m = 0; m < an.length - 1; m++) {
    const [p, l, M, v] = an[m], [f, y, b, _] = an[m + 1];
    if (e <= f) {
      const x = (e - p) / (f - p);
      return [l + (y - l) * x, M + (b - M) * x, v + (_ - v) * x];
    }
  }
  const s = an[an.length - 1];
  return [s[1], s[2], s[3]];
}
function Ho() {
  const s = new Uint8Array(1024);
  for (let p = 0; p < 256; p++) {
    const l = p / 255, [M, v, f] = Wo(l);
    s[p * 4 + 0] = M, s[p * 4 + 1] = v, s[p * 4 + 2] = f, s[p * 4 + 3] = 255;
  }
  const m = new yo(s, 256, 1, go);
  return m.minFilter = Hn, m.magFilter = Hn, m.wrapS = Gn, m.wrapT = Gn, m.needsUpdate = true, m;
}
function Go(e, s, m) {
  new lo();
  const p = Ho(), l = new wo({ uniforms: { cmap: { value: p }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Ft, transparent: false, clipping: true, depthWrite: true, depthTest: true }), M = new Je(new ce(), l);
  return M.renderOrder = -1, M.frustumCulled = false, M.userData.isShellArea = true, M.name = "__hekatan_shell_colormap", R.derive(() => {
    M.geometry.setAttribute("position", new ut(e.val.flat(), 3));
    const v = [];
    for (const C of s.val) C.length === 3 ? v.push(C[0], C[1], C[2]) : C.length === 4 && (v.push(C[0], C[1], C[2]), v.push(C[0], C[2], C[3]));
    M.geometry.setIndex(new xo(v, 1));
    const f = m.val.filter((C) => Number.isFinite(C));
    let y, b;
    const _ = Rn.val;
    if (_ ? (b = _[0], y = _[1]) : (y = f.length ? Math.max(...f) : 1, b = f.length ? Math.min(...f) : 0, b >= 0 && y > 0 && (b = 0)), y === b) {
      const C = Math.max(Math.abs(y) * 1e-6, 1e-9);
      y += C, b -= C;
    }
    const x = _ && _[0] > _[1], X = Math.min(b, y), W = Math.max(b, y), O = W - X, de = new Float32Array(m.val.length);
    for (let C = 0; C < m.val.length; C++) {
      const ee = m.val[C];
      if (!Number.isFinite(ee)) {
        de[C] = -1;
        continue;
      }
      const le = ((x ? W + X - ee : ee) - X) / O;
      de[C] = Math.max(0, Math.min(1, le));
    }
    M.geometry.setAttribute("scalar", new je(de, 1));
  }), M;
}
function qo(e, s, m, p) {
  const l = Go(m, e.elements, p);
  return R.derive(() => {
    l.visible = s.shellResults.val != "none";
  }), l;
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
  const l = new qe(), M = new lo();
  M.setColorMap("rainbow");
  const v = new yt(), f = R.state([]);
  return R.derive(() => {
    var _a, _b, _c;
    s.deformedShape.val;
    const y = m.val, b = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], _ = Qo(s.frameResults.val);
    if (l.children.forEach((F) => {
      F.geometry && F.geometry.dispose(), F.material && F.material.dispose();
    }), l.clear(), !_ || b.length === 0 || y.length === 0) {
      f.val = [];
      return;
    }
    const x = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, X = (_c = e.deformOutputs) == null ? void 0 : _c.val, W = [], O = [];
    for (let F = 0; F < b.length; F++) {
      if (b[F].length !== 2) continue;
      const te = jo(_, F, x, X);
      te && (W.push(te[0], te[1]), O.push({ idx: F, vals: te }));
    }
    if (W.length === 0) {
      f.val = [];
      return;
    }
    const de = Math.min(...W), C = Math.max(...W);
    M.setMin(de), M.setMax(C), f.val = W;
    const ee = [1 / 0, 1 / 0, 1 / 0], pe = [-1 / 0, -1 / 0, -1 / 0];
    for (const F of y) for (let Z = 0; Z < 3; Z++) ee[Z] = Math.min(ee[Z], F[Z]), pe[Z] = Math.max(pe[Z], F[Z]);
    const Y = Math.max(pe[0] - ee[0], pe[1] - ee[1], pe[2] - ee[2], 1) * Oo, j = [], H = [], T = [];
    let V = 0;
    for (const { idx: F, vals: Z } of O) {
      const te = b[F], U = y[te[0]], xe = y[te[1]];
      if (!U || !xe) continue;
      const A = new S(xe[0] - U[0], xe[1] - U[1], xe[2] - U[2]), K = A.length();
      if (K < 1e-10) continue;
      A.normalize();
      const ae = Math.abs(A.y) < 0.99 ? new S(0, 1, 0) : new S(1, 0, 0), ue = new S().crossVectors(A, ae).normalize(), Q = new S().crossVectors(A, ue).normalize(), Se = Vn + 1, ge = Jo;
      for (let ve = 0; ve < Se; ve++) {
        const Pe = ve / Vn, Be = U[0] + A.x * K * Pe, tt = U[1] + A.y * K * Pe, vt = U[2] + A.z * K * Pe, Ue = Z[0] + (Z[1] - Z[0]) * Pe, L = M.getColor(Ue) ?? new yt(0, 0, 0);
        v.copy(L).convertSRGBToLinear();
        for (let J = 0; J < ge; J++) {
          const oe = J / ge * Math.PI * 2, ie = Math.cos(oe), Le = Math.sin(oe);
          j.push(Be + (ue.x * ie + Q.x * Le) * Y, tt + (ue.y * ie + Q.y * Le) * Y, vt + (ue.z * ie + Q.z * Le) * Y), H.push(v.r, v.g, v.b);
        }
      }
      for (let ve = 0; ve < Vn; ve++) for (let Pe = 0; Pe < ge; Pe++) {
        const Be = (Pe + 1) % ge, tt = V + ve * ge + Pe, vt = V + ve * ge + Be, Ue = V + (ve + 1) * ge + Pe, L = V + (ve + 1) * ge + Be;
        T.push(tt, vt, L), T.push(tt, L, Ue);
      }
      V += Se * ge;
    }
    if (j.length === 0) return;
    const E = new ce();
    E.setAttribute("position", new ut(j, 3)), E.setAttribute("color", new ut(H, 3)), E.setIndex(T), E.computeVertexNormals();
    const z = new et({ vertexColors: true, side: Ft }), I = new Je(E, z);
    I.frustumCulled = false, l.add(I);
  }), l.__colorMapValues = f, l;
}
function ts() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const ns = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, os = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, ss = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function rt(e, s = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(s) : e.toFixed(s);
}
const as = 16755200, eo = 56831, is = 56831, ls = 56831, xn = 65382;
function rs(e) {
  const s = new qe();
  s.name = "__hekatan_hover", s.renderOrder = 99;
  const m = new Ot(1, 16, 16), p = new et({ color: as, transparent: true, opacity: 0.85, depthTest: false }), l = new Je(m, p);
  l.visible = false, l.renderOrder = 100, s.add(l);
  const M = new ce(), v = new ct({ color: eo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), f = new Dt(M, v);
  f.visible = false, f.renderOrder = 100, s.add(f);
  const y = new et({ color: eo, transparent: true, opacity: 0.7, depthTest: false }), b = new Je(new qn(1, 1, 1, 12), y);
  b.visible = false, b.renderOrder = 100, s.add(b);
  const _ = new ce(), x = new et({ color: is, transparent: true, opacity: 0.45, side: Ft, depthTest: false }), X = new Je(_, x);
  X.visible = false, X.renderOrder = 100, s.add(X);
  const W = new ce(), O = new ct({ color: ls, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), de = new Dt(W, O);
  de.visible = false, de.renderOrder = 100, s.add(de);
  const C = new et({ color: xn, transparent: true, opacity: 0.95, depthTest: false }), ee = new Je(m, C);
  ee.visible = false, ee.renderOrder = 101, s.add(ee);
  const pe = new et({ color: xn, transparent: true, opacity: 0.85, depthTest: false }), le = new Je(new qn(1, 1, 1, 12), pe);
  le.visible = false, le.renderOrder = 101, s.add(le);
  const Y = new ce(), j = new et({ color: xn, transparent: true, opacity: 0.55, side: Ft, depthTest: false }), H = new Je(Y, j);
  H.visible = false, H.renderOrder = 101, s.add(H);
  const T = new ce(), V = new ct({ color: xn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), E = new Dt(T, V);
  E.visible = false, E.renderOrder = 101, s.add(E);
  let z = null;
  const I = document.createElement("div");
  Object.assign(I.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), I.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(I);
  }, 0);
  function F(D) {
    const re = e.derivedNodes.rawVal;
    return !re || D < 0 || D >= re.length ? null : new S(re[D][0], re[D][1], re[D][2]);
  }
  function Z(D, re) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s;
    const be = e.getActiveCamera();
    if (!be || !e.mesh) return null;
    const se = e.rendererElm.getBoundingClientRect(), me = D - se.left, Ee = re - se.top, Ae = e.derivedNodes.rawVal, Re = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Ae || !Re) return null;
    const Te = /* @__PURE__ */ new Map(), Ve = (_e2) => {
      if (Te.has(_e2)) return Te.get(_e2);
      const ke = F(_e2);
      if (!ke) return Te.set(_e2, null), null;
      const he = ke.clone().project(be), De = (he.x * 0.5 + 0.5) * se.width, fe = (-he.y * 0.5 + 0.5) * se.height, Ge = { x: De, y: fe, z: he.z };
      return Te.set(_e2, Ge), Ge;
    }, Oe = /* @__PURE__ */ new Set();
    for (const _e2 of Re) if (_e2) for (const ke of _e2) Oe.add(ke);
    const ft = 8;
    let Ke = -1, ht = ft;
    for (let _e2 = 0; _e2 < Ae.length; _e2++) {
      if (!Oe.has(_e2)) continue;
      const ke = Ve(_e2);
      if (!ke || ke.z < -1 || ke.z > 1) continue;
      const he = ke.x - me, De = ke.y - Ee, fe = Math.sqrt(he * he + De * De);
      fe < ht && (ht = fe, Ke = _e2);
    }
    const Ie = ts(), it = os[Ie.dispUnit] ?? 1e3, nt = ns[Ie.forceUnit] ?? 1;
    if (Ke >= 0) {
      const _e2 = Ae[Ke];
      let ke = `Nodo ${Ke}
(${_e2[0].toFixed(3)}, ${_e2[1].toFixed(3)}, ${_e2[2].toFixed(3)})`;
      const he = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (he == null ? void 0 : he.deformations) {
        const De = he.deformations.get(Ke);
        if (De && (ke += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, ke += `
Ux = ${rt(De[0] * it, 3)} ${Ie.dispUnit}`, ke += `
Uy = ${rt(De[1] * it, 3)} ${Ie.dispUnit}`, ke += `
Uz = ${rt(De[2] * it, 3)} ${Ie.dispUnit}`, (Math.abs(De[3]) > 1e-9 || Math.abs(De[4]) > 1e-9 || Math.abs(De[5]) > 1e-9) && (ke += `
Rx = ${rt(De[3] * 1e3, 3)} mrad`, ke += `
Ry = ${rt(De[4] * 1e3, 3)} mrad`, ke += `
Rz = ${rt(De[5] * 1e3, 3)} mrad`)), he.reactions) {
          const fe = he.reactions.get(Ke);
          fe && (Math.abs(fe[0]) > 1e-9 || Math.abs(fe[1]) > 1e-9 || Math.abs(fe[2]) > 1e-9 || Math.abs(fe[3]) > 1e-6 || Math.abs(fe[4]) > 1e-6 || Math.abs(fe[5]) > 1e-6) && (ke += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, ke += `
Fx = ${rt(fe[0] * nt)} ${Ie.forceUnit}`, ke += `
Fy = ${rt(fe[1] * nt)} ${Ie.forceUnit}`, ke += `
Fz = ${rt(fe[2] * nt)} ${Ie.forceUnit}`, (Math.abs(fe[3]) > 1e-6 || Math.abs(fe[4]) > 1e-6 || Math.abs(fe[5]) > 1e-6) && (ke += `
Mx = ${rt(fe[3] * nt)} ${Ie.forceUnit}\xB7m`, ke += `
My = ${rt(fe[4] * nt)} ${Ie.forceUnit}\xB7m`, ke += `
Mz = ${rt(fe[5] * nt)} ${Ie.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Ke, info: ke };
    }
    const Qt = 5;
    let Qe = -1, Zt = Qt, lt = "frame";
    for (let _e2 = 0; _e2 < Re.length; _e2++) {
      const ke = Re[_e2];
      if (!(!ke || ke.length < 2)) {
        if (ke.length === 2) {
          const he = Ve(ke[0]), De = Ve(ke[1]);
          if (!he || !De || he.z < -1 || he.z > 1 || De.z < -1 || De.z > 1) continue;
          const fe = cs(me, Ee, he.x, he.y, De.x, De.y);
          fe < Zt && (Zt = fe, Qe = _e2, lt = "frame");
        } else if (ke.length === 3 || ke.length === 4) {
          const he = [];
          let De = true;
          for (const fe of ke) {
            const Ge = Ve(fe);
            if (!Ge || Ge.z < -1 || Ge.z > 1) {
              De = false;
              break;
            }
            he.push(Ge);
          }
          if (!De) continue;
          if (ds(me, Ee, he)) {
            const Ge = he.reduce((ze, At) => ze + At.z, 0) / he.length * 1e-3;
            Ge < Zt && (Zt = Ge, Qe = _e2, lt = "shell");
          }
        } else if (ke.length === 8) {
          const he = [];
          let De = true;
          for (const Ne of ke) {
            const Ye = Ve(Ne);
            if (!Ye || Ye.z < -1 || Ye.z > 1) {
              De = false;
              break;
            }
            he.push(Ye);
          }
          if (!De) continue;
          const fe = Math.min(...he.map((Ne) => Ne.x)), Ge = Math.max(...he.map((Ne) => Ne.x)), ze = Math.min(...he.map((Ne) => Ne.y)), At = Math.max(...he.map((Ne) => Ne.y));
          if (me >= fe && me <= Ge && Ee >= ze && Ee <= At) {
            const Ye = he.reduce((mt, bt) => mt + bt.z, 0) / he.length * 1e-3;
            Ye < Zt && (Zt = Ye, Qe = _e2, lt = "solid");
          }
        }
      }
    }
    if (Qe >= 0) {
      const _e2 = Re[Qe];
      let he = `${lt === "frame" ? "Frame" : lt === "shell" ? "Shell" : "Solid"} ${Qe}`;
      const De = (_e = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e.rawVal, fe = (_g = (_f = De == null ? void 0 : De.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Qe);
      if (fe) {
        fe.name && (he += `
  \u{1F4CB} ${fe.name}`), fe.shape && (he += `
  Shape: ${fe.shape}`);
        const Ge = /concrete|hormig|rect.*sólida/i.test(fe.shape || ""), ze = Ge ? 100 : 1e3, At = Ge ? "cm" : "mm", Ne = (mt) => {
          const bt = mt * ze;
          return Math.abs(bt - Math.round(bt)) < 0.05 ? `${Math.round(bt)}` : `${bt.toFixed(1)}`;
        }, Ye = [];
        if (fe.D != null && Ye.push(`D=${Ne(fe.D)}`), fe.B != null && Ye.push(`B=${Ne(fe.B)}`), fe.TF != null && Ye.push(`TF=${Ne(fe.TF)}`), fe.TW != null && Ye.push(`TW=${Ne(fe.TW)}`), fe.t != null && Ye.push(`t=${Ne(fe.t)}`), Ye.length && (he += `
  Dim: ${Ye.join(" ")} ${At}`), fe.material) {
          let mt = fe.material;
          fe.fillMaterial && (mt += ` + FILL "${fe.fillMaterial}"`), he += `
  Mat: ${mt}`;
        }
      } else {
        const Ge = (_i = (_h = De == null ? void 0 : De.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Qe), ze = (_k = (_j = De == null ? void 0 : De.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Qe);
        Ge ? (he += `
  ${Ge}`, ze && !Ge.includes(ze) && (he += `  (${ze})`)) : ze && (he += `
  Material: ${ze}`);
      }
      if (he += `
nodos: [${_e2.join(", ")}]`, lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ge = e.mesh.analyzeOutputs.rawVal, ze = ss[Ie.stressUnit] ?? 1, At = [["bendingXX", "Mxx", nt, `${Ie.forceUnit}\xB7m/m`], ["bendingYY", "Myy", nt, `${Ie.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", nt, `${Ie.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", nt, `${Ie.forceUnit}/m`], ["membraneYY", "Nyy", nt, `${Ie.forceUnit}/m`], ["membraneXY", "Nxy", nt, `${Ie.forceUnit}/m`], ["shearX", "Qx", nt, `${Ie.forceUnit}/m`], ["shearY", "Qy", nt, `${Ie.forceUnit}/m`], ["vonMises", "\u03C3VM", ze, Ie.stressUnit], ["pressure", "p", ze, Ie.stressUnit]], Ne = [];
        for (const [Ye, mt, bt, Ut] of At) {
          const $t = Ge == null ? void 0 : Ge[Ye];
          if ($t && $t instanceof Map) {
            const Vt = $t.get(Qe);
            if (Vt != null) {
              if (typeof Vt == "number") Ne.push(`${mt} = ${rt(Vt * bt, 3)} ${Ut}`);
              else if (Array.isArray(Vt)) {
                let wt = Vt[0];
                for (const Lt of Vt) Math.abs(Lt) > Math.abs(wt) && (wt = Lt);
                Ne.push(`${mt} = ${rt(wt * bt, 3)} ${Ut}`);
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
        const Ge = e.mesh.deformOutputs.rawVal, ze = e.mesh.elementInputs.rawVal, At = Ge == null ? void 0 : Ge.deformations;
        if (At && _e2.length === 2) {
          const Ne = At.get(_e2[0]), Ye = At.get(_e2[1]), mt = Ae[_e2[0]], bt = Ae[_e2[1]];
          if (Ne && Ye && mt && bt) {
            const Ut = bt[0] - mt[0], $t = bt[1] - mt[1], Vt = bt[2] - mt[2], wt = Math.sqrt(Ut * Ut + $t * $t + Vt * Vt);
            if (wt > 1e-9) {
              const Lt = Ut / wt, dt = $t / wt, Ct = Vt / wt, Xt = (Ye[0] - Ne[0]) * Lt + (Ye[1] - Ne[1]) * dt + (Ye[2] - Ne[2]) * Ct, pt = ((_n = ze.elasticities) == null ? void 0 : _n.get(Qe)) ?? 0, jt = ((_o2 = ze.areas) == null ? void 0 : _o2.get(Qe)) ?? 0, rn = ((_p = ze.momentsOfInertiaY) == null ? void 0 : _p.get(Qe)) ?? 0, qt = ((_q = ze.momentsOfInertiaZ) == null ? void 0 : _q.get(Qe)) ?? 0, cn = ((_r = ze.torsionalConstants) == null ? void 0 : _r.get(Qe)) ?? 0, Mt = ((_s = ze.shearModuli) == null ? void 0 : _s.get(Qe)) ?? pt / 2.6, en = pt * jt * (Xt / wt), Kt = (Ye[3] - Ne[3]) * Lt + (Ye[4] - Ne[4]) * dt + (Ye[5] - Ne[5]) * Ct, dn = Mt * cn * (Kt / wt), B = Ye[4] - Ne[4], He = Ye[5] - Ne[5], ot = pt * rn * B / wt, pn = pt * qt * He / wt;
              he += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, he += `
L = ${rt(wt, 3)} m`, he += `
\u0394L = ${rt(Xt * it, 3)} ${Ie.dispUnit}`, he += `
\u03B5 = ${rt(Xt / wt, 6)}`, Math.abs(en) > 1e-6 && (he += `
N \u2248 ${rt(en * nt)} ${Ie.forceUnit}`), Math.abs(dn) > 1e-6 && (he += `
T \u2248 ${rt(dn * nt)} ${Ie.forceUnit}\xB7m`), Math.abs(ot) > 1e-6 && (he += `
My \u2248 ${rt(ot * nt)} ${Ie.forceUnit}\xB7m`), Math.abs(pn) > 1e-6 && (he += `
Mz \u2248 ${rt(pn * nt)} ${Ie.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: lt, idx: Qe, info: he };
    }
    return null;
  }
  function te(D, re, be) {
    var _a, _b, _c;
    if (l.visible = false, f.visible = false, b.visible = false, X.visible = false, de.visible = false, !D || !e.mesh) {
      I.style.display = "none", e.render();
      return;
    }
    const se = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (D.type === "node") {
      const Re = F(D.idx);
      if (Re) {
        const Te = e.derivedNodes.rawVal ?? [];
        let Ve = 1;
        if (Te.length >= 2) {
          let Ke = [1 / 0, 1 / 0, 1 / 0], ht = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ie of Te) for (let it = 0; it < 3; it++) Ie[it] < Ke[it] && (Ke[it] = Ie[it]), Ie[it] > ht[it] && (ht[it] = Ie[it]);
          Ve = Math.max(ht[0] - Ke[0], ht[1] - Ke[1], ht[2] - Ke[2], 0.1);
        }
        const Oe = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, ft = 0.015 * Ve * Oe;
        l.position.copy(Re), l.scale.setScalar(ft), l.visible = true;
      }
    } else if (D.type === "frame" && se) {
      const Re = se[D.idx], Te = F(Re[0]), Ve = F(Re[1]);
      if (Te && Ve) {
        const Oe = Te.clone().add(Ve).multiplyScalar(0.5), ft = Ve.clone().sub(Te), Ke = ft.length(), it = e.getActiveCamera().position.distanceTo(Oe) * 35e-4;
        b.position.copy(Oe);
        const nt = new S(0, 1, 0), Qt = nt.clone().cross(ft).normalize(), Qe = nt.angleTo(ft);
        b.quaternion.setFromAxisAngle(Qt, Qe), b.scale.set(it, Ke, it), b.visible = true;
      }
    } else if (D.type === "shell" && se) {
      const Re = se[D.idx], Te = [], Ve = [];
      for (const Oe of Re) {
        const ft = F(Oe);
        if (!ft) return;
        Te.push(ft.x, ft.y, ft.z);
      }
      Re.length === 4 ? Ve.push(0, 1, 2, 0, 2, 3) : Re.length === 3 && Ve.push(0, 1, 2), _.setAttribute("position", new ut(Te, 3)), _.setIndex(Ve), _.computeVertexNormals(), X.visible = true;
    } else if (D.type === "solid" && se) {
      const Re = se[D.idx], Te = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ve = [];
      for (const [Oe, ft] of Te) {
        const Ke = F(Re[Oe]), ht = F(Re[ft]);
        Ke && ht && Ve.push(Ke.x, Ke.y, Ke.z, ht.x, ht.y, ht.z);
      }
      W.setAttribute("position", new ut(Ve, 3)), de.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      I.style.display = "none", e.render();
      return;
    }
    I.textContent = D.info, I.style.whiteSpace = "pre-line", I.style.display = "block";
    const Ee = e.rendererElm.getBoundingClientRect(), Ae = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ee;
    I.style.left = `${re - Ae.left}px`, I.style.top = `${be - Ae.top}px`, e.render();
  }
  let U = "", xe = 0, A = 0;
  const K = window.__hekatanHoverDebug ?? false, ae = (D) => {
    xe && cancelAnimationFrame(xe), xe = requestAnimationFrame(() => {
      var _a, _b, _c;
      const re = Z(D.clientX, D.clientY);
      if (K && A < 5) {
        const se = e.derivedNodes.rawVal, me = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${D.clientX}, ${D.clientY}) nodes=${(se == null ? void 0 : se.length) ?? 0} elems=${(me == null ? void 0 : me.length) ?? 0} hover=`, re), A++;
      }
      const be = re ? `${re.type}:${re.idx}` : "";
      if (be !== U) U = be, te(re, D.clientX, D.clientY);
      else if (re) {
        const se = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        I.style.left = `${D.clientX - se.left}px`, I.style.top = `${D.clientY - se.top}px`;
      }
    });
  };
  let ue = null;
  const Q = () => {
    U = "", l.visible = false, f.visible = false, b.visible = false, X.visible = false, de.visible = false, I.style.display = "none", e.render();
  }, Se = (D) => {
    const re = e.rendererElm.getBoundingClientRect(), be = D.clientX - re.left, se = D.clientY - re.top;
    (be < -2 || se < -2 || be > re.width + 2 || se > re.height + 2) && (ue && clearTimeout(ue), ue = window.setTimeout(Q, 200));
  }, ge = () => {
    ue && (clearTimeout(ue), ue = null);
  };
  e.rendererElm.addEventListener("pointermove", ae), e.rendererElm.addEventListener("pointerleave", Se), e.rendererElm.addEventListener("pointerenter", ge);
  const ve = document.createElement("div");
  Object.assign(ve.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), ve.classList.add("hekatan-context-menu");
  let Pe = null;
  const Be = document.createElement("div");
  Object.assign(Be.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const tt = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], vt = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], Ue = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], L = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], J = (D, re, be) => {
    const se = document.createElement("div");
    return se.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, se.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${D}</span><span>${re}</span>`, se.addEventListener("mouseenter", () => {
      se.style.background = "rgba(100, 160, 255, 0.22)";
    }), se.addEventListener("mouseleave", () => {
      se.style.background = "transparent";
    }), se.addEventListener("click", (me) => {
      me.stopPropagation();
      const Ee = Pe;
      kt(), Ee && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${be}`, { detail: { type: Ee.type, idx: Ee.idx, subAction: be } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ee.type, idx: Ee.idx, subAction: be } })));
    }), se;
  };
  function oe(D) {
    Be.innerHTML = "";
    const re = D === "frame" ? tt : D === "node" ? vt : D === "shell" ? Ue : L, be = document.createElement("div");
    be.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", be.textContent = `Asignar a ${D.toUpperCase()} #${(Pe == null ? void 0 : Pe.idx) ?? "?"}`, Be.appendChild(be);
    for (const se of re) Be.appendChild(J(se.icon, se.label, se.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Be);
  }, 0);
  function ie(D, re) {
    var _a;
    if (!Pe) return;
    oe(Pe.type);
    const be = ve.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Be.style.left = `${D + be.width}px`, Be.style.top = `${re}px`, Be.style.display = "block", setTimeout(() => {
      const se = Be.getBoundingClientRect();
      se.right > window.innerWidth - 10 && (Be.style.left = `${D - se.width}px`);
    }, 0);
  }
  function Le() {
    Be.style.display = "none";
  }
  const Xe = (D, re, be, se) => {
    const me = document.createElement("div");
    me.style.cssText = `
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.1s;
      justify-content: space-between;
    `;
    const Ee = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${D}</span><span>${re}</span></span>`, Ae = be ? '<span style="color:#888;">\u25B8</span>' : "";
    return me.innerHTML = Ee + Ae, me.addEventListener("mouseenter", () => {
      if (me.style.background = "rgba(100, 160, 255, 0.18)", be) {
        const Re = parseFloat(ve.style.left || "0"), Te = parseFloat(ve.style.top || "0");
        ie(Re, Te);
      } else Le();
    }), me.addEventListener("mouseleave", () => {
      me.style.background = "transparent";
    }), me.addEventListener("click", (Re) => {
      if (Re.stopPropagation(), be) return;
      const Te = Pe;
      kt(), se(Te);
    }), me;
  }, Ce = Xe("\u{1F4DD}", "Asignar", true, () => {
  }), Fe = Xe("\u2139", "Ver informaci\xF3n", false, (D) => {
    D && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: D.type, idx: D.idx } }));
  });
  Fe.addEventListener("mouseenter", () => {
    Le();
  }), ve.appendChild(Ce), ve.appendChild(Fe), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(ve);
  }, 0);
  function Et(D, re, be) {
    var _a, _b;
    Pe = be;
    const se = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    ve.style.left = `${D - se.left}px`, ve.style.top = `${re - se.top}px`, ve.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function kt() {
    ve.style.display = "none", Le(), Pe = null;
  }
  e.rendererElm.addEventListener("pointerdown", (D) => {
    if (D.button !== 2) return;
    const re = Z(D.clientX, D.clientY);
    window.__hekatanRClickOnElement = !!re;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (D) => {
    const re = Z(D.clientX, D.clientY);
    if (!re) {
      kt(), window.__hekatanRClickOnElement = false;
      return;
    }
    D.preventDefault(), D.stopImmediatePropagation(), Et(D.clientX, D.clientY, { type: re.type, idx: re.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const Rt = (D) => {
    if (ve.style.display !== "block") return;
    const re = D.target;
    ve.contains(re) || Be.contains(re) || kt();
  };
  document.addEventListener("mousedown", Rt, true), document.addEventListener("keydown", (D) => {
    D.key === "Escape" && ve.style.display === "block" && kt();
  });
  let Bt = null;
  e.rendererElm.addEventListener("pointerdown", (D) => {
    D.button === 0 && (Bt = { x: D.clientX, y: D.clientY });
  }), e.rendererElm.addEventListener("pointerup", (D) => {
    if (D.button !== 0 || !Bt) return;
    const re = D.clientX - Bt.x, be = D.clientY - Bt.y;
    if (Bt = null, re * re + be * be > 9) return;
    const se = Z(D.clientX, D.clientY);
    se ? (z = { type: se.type, idx: se.idx }, Nt()) : (z = null, Nt());
  });
  function Nt() {
    var _a, _b;
    if (ee.visible = false, le.visible = false, H.visible = false, E.visible = false, !z || !e.mesh) {
      e.render();
      return;
    }
    const D = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (z.type === "node") {
      const re = F(z.idx);
      if (re) {
        const be = e.derivedNodes.rawVal ?? [];
        let se = 1;
        if (be.length >= 2) {
          let Ae = [1 / 0, 1 / 0, 1 / 0], Re = [-1 / 0, -1 / 0, -1 / 0];
          for (const Te of be) for (let Ve = 0; Ve < 3; Ve++) Te[Ve] < Ae[Ve] && (Ae[Ve] = Te[Ve]), Te[Ve] > Re[Ve] && (Re[Ve] = Te[Ve]);
          se = Math.max(Re[0] - Ae[0], Re[1] - Ae[1], Re[2] - Ae[2], 0.1);
        }
        const me = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ee = 0.017 * se * me;
        ee.position.copy(re), ee.scale.setScalar(Ee), ee.visible = true;
      }
    } else if (z.type === "frame" && D) {
      const re = D[z.idx], be = F(re[0]), se = F(re[1]);
      if (be && se) {
        const me = be.clone().add(se).multiplyScalar(0.5), Ee = se.clone().sub(be), Ae = Ee.length(), Ve = e.getActiveCamera().position.distanceTo(me) * 35e-4;
        le.position.copy(me);
        const Oe = new S(0, 1, 0), ft = Oe.clone().cross(Ee).normalize(), Ke = Oe.angleTo(Ee);
        le.quaternion.setFromAxisAngle(ft, Ke), le.scale.set(Ve, Ae, Ve), le.visible = true;
      }
    } else if (z.type === "shell" && D) {
      const re = D[z.idx], be = [], se = [];
      for (const me of re) {
        const Ee = F(me);
        if (!Ee) return;
        be.push(Ee.x, Ee.y, Ee.z);
      }
      re.length === 4 ? se.push(0, 1, 2, 0, 2, 3) : re.length === 3 && se.push(0, 1, 2), Y.setAttribute("position", new ut(be, 3)), Y.setIndex(se), Y.computeVertexNormals(), H.visible = true;
    } else if (z.type === "solid" && D) {
      const re = D[z.idx], be = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], se = [];
      for (const [me, Ee] of be) {
        const Ae = F(re[me]), Re = F(re[Ee]);
        Ae && Re && se.push(Ae.x, Ae.y, Ae.z, Re.x, Re.y, Re.z);
      }
      T.setAttribute("position", new ut(se, 3)), E.visible = true;
    }
    e.render();
  }
  return R.derive(() => {
    e.derivedNodes.val, z && Nt();
  }), s;
}
function cs(e, s, m, p, l, M) {
  const v = l - m, f = M - p, y = v * v + f * f;
  if (y < 1e-9) {
    const O = e - m, de = s - p;
    return Math.sqrt(O * O + de * de);
  }
  let b = ((e - m) * v + (s - p) * f) / y;
  b = Math.max(0, Math.min(1, b));
  const _ = m + b * v, x = p + b * f, X = e - _, W = s - x;
  return Math.sqrt(X * X + W * W);
}
function ds(e, s, m) {
  let p = false;
  for (let l = 0, M = m.length - 1; l < m.length; M = l++) {
    const v = m[l].x, f = m[l].y, y = m[M].x, b = m[M].y;
    f > s != b > s && e < (y - v) * (s - f) / (b - f + 1e-12) + v && (p = !p);
  }
  return p;
}
function to(e, s = 8) {
  const m = document.createElement("div");
  m.id = "legend";
  const p = document.createElement("div");
  p.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", m.appendChild(p), setTimeout(() => {
    R.derive(() => {
      p.textContent = Tn.val ? `[${Tn.val}]` : "";
    });
  });
  const l = Array.from({ length: s + 1 }, (y, b) => b / s).reverse();
  let M, v;
  l.forEach((y, b) => {
    M = document.createElement("div"), M.id = `marker-${b}`, M.className = "marker", M.style.marginTop = b == 0 ? "0px" : `calc(${50 / s}vh - 1px)`, v = document.createElement("p"), v.id = `marker-text-${b}`, M.append(v), m.append(M);
  });
  const f = [];
  return m.querySelectorAll("p").forEach((y) => f.push(y)), setTimeout(() => {
    R.derive(() => {
      l.forEach((y, b) => {
        const _ = f[b];
        _ && (_.innerText = ps(e.val, y).toString());
      });
    });
  }), m;
}
function ps(e, s) {
  const m = Rn.val;
  if (m) return (m[0] + s * (m[1] - m[0])).toPrecision(3);
  const p = e.filter((v) => Number.isFinite(v));
  if (p.length === 0) return "0";
  let l = Math.min(...p);
  const M = Math.max(...p);
  return l >= 0 && M > 0 && (l = 0), (l + s * (M - l)).toPrecision(3);
}
function Ms({ mesh: e, settingsObj: s, drawingObj: m, objects3D: p, solids: l }) {
  _o.DEFAULT_UP = new S(0, 0, 1);
  const M = document.createElement("div"), v = new vo(), f = new bo(45, 1, 0.1, 2 * 1e6), y = new Mo(-10, 10, 10, -10, -1e3, 2e6);
  let b = f;
  const _ = new So({ antialias: true });
  _.localClippingEnabled = true;
  const x = new Jn(f, _.domElement);
  x.enableDamping = true, x.dampingFactor = 0.1, x.screenSpacePanning = true, x.zoomSpeed = 0.8, x.panSpeed = 1.2, x.rotateSpeed = 0.9, x.keyPanSpeed = 12, x.listenToKeyEvents(window), x.touches = { ONE: mn.ROTATE, TWO: mn.DOLLY_PAN }, _.domElement.addEventListener("wheel", (L) => {
    if (!L.ctrlKey && Math.abs(L.deltaX) > Math.abs(L.deltaY) * 1.5) {
      L.preventDefault();
      const J = x.target, oe = new S().subVectors(f.position, J), ie = new S();
      ie.crossVectors(f.up, oe).normalize();
      const Xe = oe.length() * 1e-3 * x.panSpeed;
      J.addScaledVector(ie, L.deltaX * Xe), f.position.addScaledVector(ie, L.deltaX * Xe), x.update();
    }
  }, { passive: false });
  const X = new Fn(new S(-1, 0, 0), 0), W = new Fn(new S(0, -1, 0), 0), O = new Fn(new S(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function de() {
    const L = window.__hekatanClip, J = [];
    L.enableX && (X.normal.set(L.invertX ? 1 : -1, 0, 0), X.constant = L.invertX ? -L.posX : L.posX, J.push(X)), L.enableY && (W.normal.set(0, L.invertY ? 1 : -1, 0), W.constant = L.invertY ? -L.posY : L.posY, J.push(W)), L.enableZ && (O.normal.set(0, 0, L.invertZ ? 1 : -1), O.constant = L.invertZ ? -L.posZ : L.posZ, J.push(O)), _.clippingPlanes = J, v.traverse((ie) => {
      const Le = ie;
      if (Le.material) {
        const Xe = Array.isArray(Le.material) ? Le.material : [Le.material];
        for (const Ce of Xe) Ce.clippingPlanes = J, Ce.needsUpdate = true;
      }
    });
    const oe = window.__hekatanPanes ?? [];
    for (const ie of oe) try {
      ie && typeof ie.refresh == "function" && ie.refresh();
    } catch {
    }
    _.render(v, b);
  }
  de(), window.__hekatanClipApply = de;
  const C = Co(s), ee = R.derive(() => C.displayScale.val === 0 ? 1 : C.displayScale.val > 0 ? C.displayScale.val : -1 / C.displayScale.val), pe = us(e, C), le = () => {
    const L = [];
    return C.gridXY.rawVal && L.push("xy"), C.gridXZ.rawVal && L.push("xz"), C.gridYZ.rawVal && L.push("yz"), L;
  }, Y = () => {
    const L = C.gridStep.rawVal, J = Math.max(L, C.gridMajor.rawVal);
    return { planes: le(), majorStep: J, minorStep: L };
  };
  let j = En(C.gridSize.rawVal, Y());
  j.visible = C.gridVisible.rawVal, window.__hekatanSnap2D = C.cursorSnap.rawVal;
  const H = () => {
    const L = Math.max(0, Math.min(1, C.gridOpacity.rawVal));
    j.traverse((J) => {
      const oe = J.material;
      if (!oe || !("opacity" in oe)) return;
      const ie = J.name ?? "";
      let Le = 0.35;
      ie.includes("border") ? Le = 1 : ie.includes("major") && (Le = 0.75), oe.opacity = L * Le;
    });
  };
  H(), M.appendChild(Po(C, e, l)), M.setAttribute("id", "viewer"), M.appendChild(_.domElement), _.setPixelRatio(window.devicePixelRatio);
  const T = Wt();
  _.setClearColor(T.background, 1);
  const V = C.gridSize.rawVal, E = V * 0.5 + V * 0.5 / Math.tan(45 * 0.5);
  f.position.set(0, 0, E), f.up.set(0, 1, 0), x.target.set(0, 0, 0), x.minDistance = 0.1, x.maxDistance = 1e4, M.__settings = C, x.zoomSpeed = 1;
  let z = 100, I = 0;
  _.domElement.addEventListener("wheel", (L) => {
    z = L.deltaY, I = L.deltaMode;
  }, { passive: true, capture: true }), x._getZoomScale = function() {
    const L = Math.abs(z);
    if (L >= 80 && I === 0) return Math.pow(0.9, this.zoomSpeed);
    if (I === 1) return Math.pow(0.88, this.zoomSpeed);
    const J = Math.max(0.05, Math.min(L / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * J);
  }, x.update();
  let F = Qn(C.gridSize.rawVal, C.flipAxes.rawVal);
  v.add(j, F), R.derive(() => {
    window.__hekatanGridPlaneXY = C.gridXY.val, window.__hekatanGridPlaneXZ = C.gridXZ.val, window.__hekatanGridPlaneYZ = C.gridYZ.val;
  });
  let Z = true;
  R.derive(() => {
    const L = C.gridVisible.val;
    if (Z) {
      Z = false;
      return;
    }
    j.visible = L, Q();
  });
  let te = true;
  R.derive(() => {
    if (C.gridOpacity.val, te) {
      te = false;
      return;
    }
    H(), Q();
  }), R.derive(() => {
    const L = C.cursorSnap.val;
    window.__hekatanSnap2D = L;
  });
  let U = true;
  R.derive(() => {
    var _a;
    const L = C.gridSize.val, J = C.flipAxes.val;
    if (C.gridXY.val, C.gridXZ.val, C.gridYZ.val, C.gridStep.val, C.gridMajor.val, U) {
      U = false;
      return;
    }
    v.remove(j), (_a = j.traverse) == null ? void 0 : _a.call(j, (Le) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Le.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Le.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), j = En(L, Y()), j.visible = C.gridVisible.rawVal, v.add(j), H(), v.remove(F), F.traverse((Le) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Le.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Le.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), F = Qn(L, J), v.add(F);
    const oe = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
    f.position.distanceTo(x.target), Math.abs(f.position.x) < 0.1 && Math.abs(f.position.y) < 0.1 && f.position.z > 0 ? f.position.set(0, 0, oe) : f.position.set(0.5 * L, -oe, 0.5 * L), x.target.set(0, 0, 0), x.minDistance = Math.max(0.05, L * 0.01), x.maxDistance = Math.max(50, L * 50), x.update(), Q();
  }), new ResizeObserver((L) => {
    var _a, _b;
    for (const J of L) {
      const oe = (_a = J.target) == null ? void 0 : _a.clientWidth, ie = (_b = J.target) == null ? void 0 : _b.clientHeight;
      if (oe === 0 || ie === 0) continue;
      const Xe = (A ? oe / 2 : oe) / ie;
      f.aspect = Xe, f.updateProjectionMatrix();
      const Ce = y.top;
      if (y.left = -Ce * Xe, y.right = Ce * Xe, y.updateProjectionMatrix(), K && K.isPerspectiveCamera) K.aspect = Xe, K.updateProjectionMatrix();
      else if (K && K.isOrthographicCamera) {
        const Fe = K, Et = Fe.top;
        Fe.left = -Et * Xe, Fe.right = Et * Xe, Fe.updateProjectionMatrix();
      }
      _.setSize(oe, ie), Q();
    }
  }).observe(M), x.addEventListener("change", Q), R.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, C.displayScale.val, C.nodes.val, C.elements.val, (_g = C.edges) == null ? void 0 : _g.val, C.elemColumns.val, C.elemBeams.val, C.nodesIndexes.val, C.elementsIndexes.val, C.orientations.val, C.sections.val, C.secColumns.val, C.secBeams.val, C.secFloor.val, C.supports.val, C.loads.val, C.deformedShape.val, C.nodeResults.val, C.frameResults.val, C.shellResults.val, (_h = C.solidResults) == null ? void 0 : _h.val, setTimeout(Q);
  });
  let A = false, K = null, ae = null, ue = false;
  function Q() {
    const L = M.clientWidth || 1, J = M.clientHeight || 1;
    if (!A || !K) {
      _.setScissorTest(false), _.setViewport(0, 0, L, J), _.render(v, b);
      return;
    }
    const oe = L / 2;
    _.setScissorTest(true), _.setViewport(0, 0, oe, J), _.setScissor(0, 0, oe, J), _.render(v, b), _.setViewport(oe, 0, oe, J), _.setScissor(oe, 0, oe, J), _.render(v, K), _.setScissorTest(false);
  }
  function Se(L) {
    b = L, x.object = L, x.update(), Q();
  }
  function ge(L, J) {
    A = L, J && (K = J);
    const oe = M.clientWidth || 1, ie = M.clientHeight || 1, Xe = (L ? oe / 2 : oe) / ie;
    f.isPerspectiveCamera && (f.aspect = Xe, f.updateProjectionMatrix());
    const Ce = y.top;
    if (y.left = -Ce * Xe, y.right = Ce * Xe, y.updateProjectionMatrix(), L && K) {
      if (ae ? (ae.object = K, ae.update()) : (ae = new Jn(K, _.domElement), ae.enableDamping = true, ae.dampingFactor = 0.1, ae.screenSpacePanning = true, ae.zoomSpeed = 0.8, ae.panSpeed = 1.2, ae.rotateSpeed = 0.9, ae.touches = { ONE: mn.ROTATE, TWO: mn.DOLLY_PAN }, ae._getZoomScale = function() {
        const Fe = Math.abs(z);
        if (Fe >= 80 && I === 0) return Math.pow(0.9, this.zoomSpeed);
        if (I === 1) return Math.pow(0.88, this.zoomSpeed);
        const Et = Math.max(0.05, Math.min(Fe / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * Et);
      }, ae.target.copy(x.target), ae.addEventListener("change", Q), ae.enabled = false), !ue) {
        const Fe = (Et) => {
          if (!A || !ae) return;
          const kt = _.domElement.getBoundingClientRect(), Rt = Et.clientX - kt.left, Bt = kt.width / 2, Nt = Rt >= Bt;
          x.enabled = !Nt, ae.enabled = Nt;
        };
        _.domElement.addEventListener("pointerdown", Fe, true), _.domElement.addEventListener("wheel", Fe, { capture: true, passive: true }), ue = true;
      }
    } else L || (x.enabled = true, ae && (ae.enabled = false));
    M.__splitMode = L, window.__hekatanSplitMode = L, window.__hekatanSplitCamera = L ? K : null, Q();
  }
  if (e) {
    v.add(zo(C, pe, ee), Fo(e, C, pe), Lo(C, pe, ee), To(e, C, pe, ee), Ao(e, C, pe, ee), Vo(e, C, pe, ee), Ro(e, C, pe, ee), Xo(e, C, pe, ee), Zo(e, C, pe, ee), Yo(e, C, pe, ee));
    const L = rs({ scene: v, rendererElm: _.domElement, getActiveCamera: () => b, derivedNodes: pe, derivedDisplayScale: ee, mesh: e, settings: C, render: Q });
    v.add(L);
    const J = ys(e, C), oe = qo(e, C, pe, J), ie = to(J);
    v.add(oe), M.appendChild(ie);
    const Le = es(e, C, pe);
    v.add(Le);
    const Xe = Le.__colorMapValues, Ce = to(Xe);
    Ce.id = "frame-legend", M.appendChild(Ce), R.derive(() => {
      var _a;
      const Fe = C.shellResults.val != "none", Et = (((_a = C.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", kt = Fe || Et, Rt = C.frameResults.val.startsWith("contour:");
      ie.hidden = !kt, oe.visible = kt, Ce.hidden = !Rt;
    });
  }
  if (l) {
    const L = new ko(16777215, 0.5);
    v.add(L);
    const J = new On(16777215, 0.5);
    J.position.set(30, 25, -10), J.shadow.mapSize.width = 1024, J.shadow.mapSize.height = 1024, v.add(J);
    const oe = 10;
    J.shadow.camera.left = -oe, J.shadow.camera.right = oe, J.shadow.camera.top = oe, J.shadow.camera.bottom = -oe, J.shadow.camera.far = 1e3;
    const ie = new On(16777215, 0.5);
    ie.color.setHSL(11, 43, 96), ie.position.set(-10, 0, 30), v.add(ie), R.derive(() => {
      (l == null ? void 0 : l.val.length) && (v.remove(...l.oldVal), v.add(...l.rawVal), Q());
    }), R.derive(() => {
      l.rawVal.forEach((Le) => Le.visible = C.solids.val), Q();
    });
  }
  if (p) {
    const L = [], J = (ie) => {
      var _a, _b;
      return ((_a = ie == null ? void 0 : ie.userData) == null ? void 0 : _a.isCota) ? C.showCotas.val : ((_b = ie == null ? void 0 : ie.userData) == null ? void 0 : _b.isDistLoad) ? C.loads.val : C.custom3D.val;
    }, oe = () => {
      for (const ie of L) ie.visible = J(ie);
      Q();
    };
    R.derive(() => {
      const ie = p.val;
      L.length && (v.remove(...L), L.length = 0), ie.length && (v.add(...ie), L.push(...ie), oe()), Q();
    }), R.derive(() => {
      C.custom3D.val, oe();
    }), R.derive(() => {
      C.showCotas.val, oe();
    }), R.derive(() => {
      C.loads.val, oe();
    });
  }
  m && Uo({ drawingObj: m, gridObj: j, scene: v, getActiveCamera: () => b, controls: x, gridSize: V, derivedDisplayScale: ee, rendererElm: _.domElement, viewerRender: Q }), Mn((L, J) => {
    var _a;
    _.setClearColor(J.background, 1), v.remove(j), (_a = j.traverse) == null ? void 0 : _a.call(j, (oe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = oe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = oe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), j = En(C.gridSize.rawVal, { planes: le() }), v.add(j), M.style.setProperty("--awatif-legend-color", J.legendMarker), Q();
  });
  const ve = { scene: v, perspCamera: f, orthoCamera: y, get camera() {
    return b;
  }, controls: x, renderer: _, rendererElm: _.domElement, render: Q, setActiveCamera: Se, setSplitMode: ge, get splitMode() {
    return A;
  }, get splitCamera() {
    return K;
  }, settings: C };
  M.__ctx = ve;
  const Pe = document.createElement("div");
  Pe.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Be = (L, J, oe) => {
    const ie = document.createElement("button");
    return ie.textContent = L, ie.title = J, ie.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), ie.onmouseenter = () => {
      ie.style.background = "rgba(70,70,70,0.9)";
    }, ie.onmouseleave = () => {
      ie.style.background = "rgba(40,40,40,0.85)";
    }, ie.onclick = (Le) => {
      Le.preventDefault(), oe();
    }, ie;
  }, tt = (L, J) => {
    const oe = x.target, ie = new S().subVectors(b.position, oe), Le = ie.length(), Xe = new S(), Ce = new S();
    Xe.crossVectors(b.up, ie).normalize(), Ce.copy(b.up).normalize();
    const Fe = Le * 0.05;
    oe.addScaledVector(Xe, -L * Fe), oe.addScaledVector(Ce, J * Fe), b.position.addScaledVector(Xe, -L * Fe), b.position.addScaledVector(Ce, J * Fe), x.update(), Q();
  }, vt = (L) => {
    const J = new S().subVectors(b.position, x.target);
    J.multiplyScalar(L), b.position.copy(x.target).add(J), x.update(), Q();
  }, Ue = () => {
    const L = document.createElement("div");
    return L.style.cssText = "width:32px;height:32px;", L;
  };
  return Pe.append(Ue()), Pe.append(Be("\u2191", "Pan arriba", () => tt(0, 1))), Pe.append(Be("\u2295", "Zoom in", () => vt(0.85))), Pe.append(Be("\u2190", "Pan izquierda", () => tt(-1, 0))), Pe.append(Be("\u2302", "Reset vista", () => {
    x.reset(), Q();
  })), Pe.append(Be("\u2192", "Pan derecha", () => tt(1, 0))), Pe.append(Be("\u2296", "Zoom out", () => vt(1.18))), Pe.append(Be("\u2193", "Pan abajo", () => tt(0, -1))), Pe.append(Ue()), getComputedStyle(M).position === "static" && (M.style.position = "relative"), M.appendChild(Pe), M;
}
function us(e, s) {
  return R.derive(() => {
    var _a, _b, _c, _d;
    if (!s.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const m = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], p = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!p || m.length === 0) return m;
    const l = s.deformScale.val, M = s.deformScale.val * s.deformScaleZ.val, v = Number.isFinite(l) ? l : 1, f = Number.isFinite(M) ? M : 1;
    return m.map((y, b) => {
      var _a2;
      const _ = ((_a2 = p.get(b)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], x = Number.isFinite(_[0]) ? _[0] : 0, X = Number.isFinite(_[1]) ? _[1] : 0, W = Number.isFinite(_[2]) ? _[2] : 0;
      return [y[0] + x * v, y[1] + X * v, y[2] + W * f];
    });
  });
}
const Rn = R.state(null), Tn = R.state(""), fs = R.state("kN"), hs = R.state("mm"), ms = R.state("kN/m\xB2"), ws = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, no = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, xs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function ys(e, s) {
  const m = R.state([]);
  let p;
  return ((l) => {
    l.bendingXX = "bendingXX", l.bendingYY = "bendingYY", l.bendingXY = "bendingXY", l.membraneXX = "membraneXX", l.membraneYY = "membraneYY", l.membraneXY = "membraneXY", l.tranverseShearX = "tranverseShearX", l.tranverseShearY = "tranverseShearY", l.vonMises = "vonMises", l.membranePrincipalMax = "membranePrincipalMax", l.membranePrincipalMin = "membranePrincipalMin", l.bendingPrincipalMax = "bendingPrincipalMax", l.bendingPrincipalMin = "bendingPrincipalMin", l.transverseShearMax = "transverseShearMax", l.pressure = "pressure", l.displacementX = "displacementX", l.displacementY = "displacementY", l.displacementZ = "displacementZ";
  })(p || (p = {})), R.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const l = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), le = (tt, vt) => {
      tt == null ? void 0 : tt.forEach((Ue, L) => {
        const J = e.elements.val[L];
        if (J) for (let oe = 0; oe < J.length; oe++) vt.set(J[oe], [Ue[oe] ?? Ue[0]]);
      });
    };
    le((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, l), le((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, M), le((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, v), le((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, f), le((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, y), le((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), le((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, _), le((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, x), le((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, X), le((_t = (_s = e.analyzeOutputs) == null ? void 0 : _s.val) == null ? void 0 : _t.membranePrincipalMax, W), le((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, O), le((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, de), le((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, C), le((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, ee), le((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, pe);
    const Y = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, j = (_G = s.solidResults) == null ? void 0 : _G.val, T = j && j !== "none" ? j : s.shellResults.val, V = Y == null ? void 0 : Y[T], E = { bendingXX: [l, 0], bendingYY: [M, 0], bendingXY: [v, 0], membraneXX: [f, 0], membraneYY: [y, 0], membraneXY: [b, 0], tranverseShearX: [_, 0], tranverseShearY: [x, 0], vonMises: [X, 0], membranePrincipalMax: [W, 0], membranePrincipalMin: [O, 0], bendingPrincipalMax: [de, 0], bendingPrincipalMin: [C, 0], transverseShearMax: [ee, 0], pressure: [pe, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, z = s.shellResults.val, I = fs.val, F = hs.val, Z = z === "displacementX" || z === "displacementY" || z === "displacementZ", te = z === "bendingXX" || z === "bendingYY" || z === "bendingXY" || z === "bendingPrincipalMax" || z === "bendingPrincipalMin", U = z === "membraneXX" || z === "membraneYY" || z === "membraneXY" || z === "membranePrincipalMax" || z === "membranePrincipalMin", xe = z === "vonMises" || z === "pressure", A = z === "tranverseShearX" || z === "tranverseShearY" || z === "transverseShearMax", K = (_N = s.solidResults) == null ? void 0 : _N.val, ae = K === "vonMises" || K === "sigmaXX" || K === "sigmaYY" || K === "sigmaZZ" || K === "tauXY" || K === "tauYZ" || K === "tauXZ", ue = K === "ux" || K === "uy" || K === "uz", Q = ms.val, Se = ae ? xs[Q] : ue || Z ? no[F] : te || U || xe || A ? 1 / ws[I] : 1, ge = ae ? Q : ue || Z ? F : te ? `${I}\xB7m/m` : U ? `${I}/m\xB2` : xe ? `${I}/m\xB2` : A ? `${I}/m` : "";
    Tn.val = ge, Rn.val = Array.isArray(V) && V.length === 2 ? [V[0] * Se, V[1] * Se] : null;
    const Pe = K && K !== "none" ? [X, 0] : E[z], Be = [];
    e.nodes.val.forEach((tt, vt) => {
      const Ue = Pe;
      if (!Ue || !Ue[0] || typeof Ue[0].has != "function") return;
      if (!Ue[0].has(vt)) {
        Be.push(Number.NaN);
        return;
      }
      const L = Ue[0].get(vt), J = L ? L[Ue[1]] ?? 0 : 0;
      Be.push(J * Se);
    }), m.val = Be;
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
