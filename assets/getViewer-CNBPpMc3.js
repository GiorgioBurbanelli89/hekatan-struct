import { v as L, P as xo, r as tn, a7 as zn, B as he, a8 as Fn, F as Ft, a4 as yo, J as Qe, X as Bt, L as ht, c as Ot, w as go, b as Vo, a9 as To, e as je, d as qe, V as x, $ as en, aa as Bn, H as vo, D as Tt, a as zt, x as ot, z as En, ab as An, t as Lo, n as Io, I as Sn, a2 as hn, S as rn, l as to, f as no, h as oo, i as so, ac as ao, ad as kn, q as $o, ae as Ro, af as Bo, ag as Xo, ah as Yo, g as io, ai as lo, C as ro, W as Do, K as No, O as Zo, Y as Uo, T as _n, p as Xn, Z as Ko, _ as co, U as Ho } from "./theme-D5p5K0bJ.js";
import { T as gt, O as po } from "./Text-B4nrRMfX.js";
import { e as Wo } from "./styles-Bs20h4nQ.js";
function Go(e, a, w) {
  const f = document.createElement("div"), l = new xo({ title: "Settings", expanded: true, container: f });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(l), f.setAttribute("id", "settings");
  const S = "hk_settingsPos";
  let y = null;
  try {
    const v = localStorage.getItem(S);
    v && (y = JSON.parse(v));
  } catch {
  }
  f.style.cssText = ["position:fixed", y ? `left:${y.left}px` : "left:8px", y ? `top:${y.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const m = () => {
    const v = f.querySelector(".tp-rotv_b");
    if (!v) {
      setTimeout(m, 200);
      return;
    }
    v.style.cursor = "move", v.style.userSelect = "none";
    let K = false, te = 0, de = 0, ie = 0, M = 0;
    v.addEventListener("mousedown", (U) => {
      K = true, te = U.clientX, de = U.clientY;
      const ue = f.getBoundingClientRect();
      ie = ue.left, M = ue.top, f.style.left = `${ie}px`, f.style.top = `${M}px`;
    }), window.addEventListener("mousemove", (U) => {
      if (!K) return;
      const ue = U.clientX - te, ne = U.clientY - de, Z = Math.max(0, Math.min(window.innerWidth - 40, ie + ue)), re = Math.max(0, Math.min(window.innerHeight - 40, M + ne));
      f.style.left = `${Z}px`, f.style.top = `${re}px`;
    }), window.addEventListener("mouseup", () => {
      if (K) {
        K = false;
        try {
          localStorage.setItem(S, JSON.stringify({ left: parseFloat(f.style.left), top: parseFloat(f.style.top) }));
        } catch {
        }
      }
    });
  };
  if (m(), a == null ? void 0 : a.nodes) {
    l.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const v = l.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    v.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), v.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), v.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridVisible, "val", { label: "Mostrar" }), v.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), v.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), v.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), v.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), l.addBinding(e.nodes, "val", { label: "Nodes" }), l.addBinding(e.elements, "val", { label: "Elements" }), l.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), l.addBinding(e.faces, "val", { label: "  Caras (fill)" }), l.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), l.addBinding(e.elemColumns, "val", { label: "    Columnas" }), l.addBinding(e.elemBeams, "val", { label: "    Vigas" }), l.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), l.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), l.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), l.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), l.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), l.addBinding(e.orientations, "val", { label: "Orientations" }), l.addBinding(e.sections, "val", { label: "Sections" }), l.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), l.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), l.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), l.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((a == null ? void 0 : a.nodeInputs) || (a == null ? void 0 : a.elementInputs)) {
    const v = l.addFolder({ title: "Analysis Inputs" });
    v.addBinding(e.supports, "val", { label: "Supports" }), v.addBinding(e.loads, "val", { label: "Loads" }), v.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), v.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((a == null ? void 0 : a.deformOutputs) || (a == null ? void 0 : a.analyzeOutputs)) {
    const v = l.addFolder({ title: "Analysis Outputs" });
    v.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), v.addBinding(e.frameResults, "val", { options: { none: "none", "P (normals)": "normals", "V2 (shearY)": "shearsY", "V3 (shearZ)": "shearsZ", "T (torsion)": "torsions", "M2 (bendingY)": "bendingsY", "M3 (bendingZ)": "bendingsZ", "contour P": "contour:normals", "contour V2": "contour:shearsY", "contour V3": "contour:shearsZ", "contour T": "contour:torsions", "contour M2": "contour:bendingsY", "contour M3": "contour:bendingsZ" }, label: "Frame results" }), v.addBinding(e.shellResults, "val", { options: { none: "none", "F11 (membraneXX)": "membraneXX", "F22 (membraneYY)": "membraneYY", "F12 (membraneXY)": "membraneXY", "FMax (principal)": "membranePrincipalMax", "FMin (principal)": "membranePrincipalMin", "M11 (bendingXX)": "bendingXX", "M22 (bendingYY)": "bendingYY", "M12 (bendingXY)": "bendingXY", "MMax (principal)": "bendingPrincipalMax", "MMin (principal)": "bendingPrincipalMin", "V13 (shearX)": "tranverseShearX", "V23 (shearY)": "tranverseShearY", "VMax (magnitud)": "transverseShearMax", "Von Mises": "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), v.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), v.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), v.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), v.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  w && l.addBinding(e.solids, "val", { label: "Solids" });
  const g = l.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), b = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), _ = () => {
    const v = window.__hekatanClipApply;
    typeof v == "function" && v();
  };
  return g.addBinding(b, "enableX", { label: "Cortar X" }).on("change", _), g.addBinding(b, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", _), g.addBinding(b, "invertX", { label: "  invertir X" }).on("change", _), g.addBinding(b, "enableY", { label: "Cortar Y" }).on("change", _), g.addBinding(b, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", _), g.addBinding(b, "invertY", { label: "  invertir Y" }).on("change", _), g.addBinding(b, "enableZ", { label: "Cortar Z" }).on("change", _), g.addBinding(b, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", _), g.addBinding(b, "invertZ", { label: "  invertir Z" }).on("change", _), f;
}
function qo(e) {
  return { gridSize: L.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: L.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: L.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: L.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: L.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: L.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: L.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: L.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: L.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: L.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: L.state((e == null ? void 0 : e.nodes) ?? true), elements: L.state((e == null ? void 0 : e.elements) ?? true), edges: L.state((e == null ? void 0 : e.edges) ?? true), faces: L.state((e == null ? void 0 : e.faces) ?? true), elemColumns: L.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: L.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: L.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: L.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: L.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: L.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: L.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: L.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: L.state((e == null ? void 0 : e.orientations) ?? false), sections: L.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: L.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: L.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: L.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: L.state((e == null ? void 0 : e.secFloor) ?? -1), supports: L.state((e == null ? void 0 : e.supports) ?? true), loads: L.state((e == null ? void 0 : e.loads) ?? false), deformedShape: L.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: L.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: L.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: L.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: L.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: L.state((e == null ? void 0 : e.flipAxes) ?? false), solids: L.state((e == null ? void 0 : e.solids) ?? true), custom3D: L.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: L.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: L.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: L.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function Jo(e, a, w) {
  const f = tn(), l = new zn(new he(), new Fn({ color: f.nodePoint }));
  return yo((S, y) => {
    l.material.color.setHex(y.nodePoint);
  }), l.frustumCulled = false, L.derive(() => {
    e.nodes.val && l.geometry.setAttribute("position", new Ft(a.val.flat(), 3));
  }), L.derive(() => {
    if (w.val, a.val, !e.nodes.rawVal) return;
    const S = a.rawVal ?? [];
    let y = e.gridSize.val * 0.5;
    if (S.length >= 2) {
      const g = [1 / 0, 1 / 0, 1 / 0], b = [-1 / 0, -1 / 0, -1 / 0];
      for (const _ of S) for (let v = 0; v < 3; v++) g[v] = Math.min(g[v], _[v]), b[v] = Math.max(b[v], _[v]);
      y = Math.max(b[0] - g[0], b[1] - g[1], b[2] - g[2], 0.1);
    }
    const m = 0.03 * y;
    l.material.size = m * w.rawVal;
  }), L.derive(() => {
    l.visible = e.nodes.val;
  }), l;
}
function Yn(e, a) {
  const w = tn(), f = new Qe();
  f.name = "hekatan-grid";
  const l = (a == null ? void 0 : a.planes) ?? ["xy"];
  let S = (a == null ? void 0 : a.majorStep) ?? 1, y = (a == null ? void 0 : a.minorStep) ?? 0.1;
  for (S <= 0 && (S = 1), y <= 0 && (y = 0.1); e / y > 500; ) y *= 2;
  for (; e / S > 100; ) S *= 2;
  const m = e / 2;
  S = Math.max(y, Math.round(S / y) * y);
  const b = new Bt(w.grid), _ = new Bt(w.grid).multiplyScalar(0.45), v = (te, de, ie, M) => {
    const U = [], ue = te === "xy" ? (B, I) => [B, I, 0] : te === "xz" ? (B, I) => [B, 0, I] : (B, I) => [0, B, I], ne = Math.floor(m / de);
    for (let B = -ne; B <= ne; B++) {
      const I = B * de, V = ue(I, -m), z = ue(I, m);
      U.push(...V, ...z);
    }
    for (let B = -ne; B <= ne; B++) {
      const I = B * de, V = ue(-m, I), z = ue(m, I);
      U.push(...V, ...z);
    }
    const Z = new he();
    Z.setAttribute("position", new Ft(U, 3));
    const re = new ht({ color: ie, transparent: true, opacity: M, depthWrite: false }), q = new Ot(Z, re);
    return q.name = `grid-${te}-${de === y ? "minor" : "major"}`, q;
  }, K = (te, de, ie) => {
    const M = te === "xy" ? (q, B) => [q, B, 0] : te === "xz" ? (q, B) => [q, 0, B] : (q, B) => [0, q, B], U = [[-m, -m], [m, -m], [m, m], [-m, m]], ue = [];
    for (const [q, B] of U) ue.push(...M(q, B));
    const ne = new he();
    ne.setAttribute("position", new Ft(ue, 3));
    const Z = new ht({ color: de, transparent: true, opacity: ie, depthWrite: false }), re = new go(ne, Z);
    return re.name = `grid-${te}-border`, re.renderOrder = 1, re;
  };
  for (const te of l) f.add(v(te, y, _, 0.12)), f.add(v(te, S, b, 0.4)), f.add(K(te, b, 0.55));
  return f.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: S, minorStep: y, gridSize: e, planes: [...l] }, f;
}
function Oo(e, a, w, f) {
  const l = new Qe(), S = new Vo(0.5, 0.5, 0.5), y = new To(0.45, 0.7, 4);
  y.rotateX(Math.PI / 2), y.translate(0, 0, -0.35);
  const m = new je({ color: 10166822 }), g = new je({ color: 2792847 }), b = new je({ color: 3835647 }), _ = () => {
    const te = w.rawVal ?? [];
    if (te.length < 2) return a.gridSize.val * 0.5;
    let de = [1 / 0, 1 / 0, 1 / 0], ie = [-1 / 0, -1 / 0, -1 / 0];
    for (const M of te) for (let U = 0; U < 3; U++) M[U] < de[U] && (de[U] = M[U]), M[U] > ie[U] && (ie[U] = M[U]);
    return Math.max(ie[0] - de[0], ie[1] - de[1], ie[2] - de[2], 0.1);
  }, v = () => 0.08 * _(), K = () => Math.max(f.rawVal, 1);
  return L.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, !a.supports.val) return;
    l.clear();
    const te = v();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((de, ie) => {
      const M = w.val[ie];
      if (!M) return;
      const U = de ?? [], ue = (U[0] ? 1 : 0) + (U[1] ? 1 : 0) + (U[2] ? 1 : 0), ne = (U[3] ? 1 : 0) + (U[4] ? 1 : 0) + (U[5] ? 1 : 0);
      let Z;
      ue >= 3 && ne >= 3 ? Z = new qe(S, m) : ue >= 3 && ne === 0 ? Z = new qe(y, g) : Z = new qe(y, b), Z.position.set(M[0], M[1], M[2]);
      const re = te * K();
      Z.scale.set(re, re, re), l.add(Z);
    });
  }), L.derive(() => {
    if (f.val, !a.supports.rawVal) return;
    const de = v() * K();
    l.children.forEach((ie) => ie.scale.set(de, de, de));
  }), L.derive(() => {
    l.visible = a.supports.val;
  }), l;
}
function Qo(e, a, w, f) {
  const l = new Qe();
  l.name = "loadsGroup";
  function S(y) {
    if (y.length < 2) return 0.12 * a.gridSize.rawVal;
    const m = [1 / 0, 1 / 0, 1 / 0], g = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of y) for (let v = 0; v < 3; v++) m[v] = Math.min(m[v], _[v]), g[v] = Math.max(g[v], _[v]);
    return 0.08 * Math.max(g[0] - m[0], g[1] - m[1], g[2] - m[2], 0.1);
  }
  return L.derive(() => {
    var _a, _b, _c;
    if (a.deformedShape.val, !a.loads.val) return;
    l.children.forEach((g) => g.dispose()), l.clear();
    const y = w.val, m = S(y);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((g, b) => {
      const _ = y[b];
      if (!_) return;
      const v = new x(...g.slice(0, 3));
      if (v.lengthSq() < 1e-30) return;
      v.normalize();
      const K = new en(v, new x(..._), 1, 15637248, 0.3, 0.3), te = m * f.rawVal;
      K.scale.set(te, te, te), l.add(K);
    });
  }), L.derive(() => {
    if (f.val, !a.loads.rawVal) return;
    const m = S(w.rawVal) * f.rawVal;
    l.children.forEach((g) => g.scale.set(m, m, m));
  }), L.derive(() => {
    l.visible = a.loads.val;
  }), l;
}
function jo(e, a, w) {
  const f = new Qe();
  return L.derive(() => {
    if (!e.nodesIndexes.val) return;
    f.children.forEach((S) => S.dispose()), f.clear();
    const l = 0.05 * e.gridSize.val * 0.6;
    a.val.forEach((S, y) => {
      const m = new gt(`${y}`);
      m.position.set(...S), m.updateScale(l * w.rawVal), f.add(m);
    });
  }), L.derive(() => {
    if (w.val, !e.nodesIndexes.rawVal) return;
    const l = 0.05 * e.gridSize.val * 0.6;
    f.children.forEach((S) => S.updateScale(l * w.rawVal));
  }), L.derive(() => {
    f.visible = e.nodesIndexes.val;
  }), f;
}
function es(e, a, w, f) {
  const l = new Qe();
  return L.derive(() => {
    var _a;
    if (a.deformedShape.val, !a.elementsIndexes.val) return;
    l.children.forEach((y) => y.dispose()), l.clear();
    const S = 0.05 * a.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((y, m) => {
      const g = new gt(`${m}`, void 0, "#001219");
      g.position.set(...ts(y.map((b) => w.rawVal[b]))), g.updateScale(S * f.rawVal), l.add(g);
    });
  }), L.derive(() => {
    if (f.val, !a.elementsIndexes.rawVal) return;
    const S = 0.05 * a.gridSize.val * 0.6;
    l.children.forEach((y) => y.updateScale(S * f.rawVal));
  }), L.derive(() => {
    l.visible = a.elementsIndexes.val;
  }), l;
}
function ts(e) {
  const a = e.reduce((f, l) => [f[0] + l[0], f[1] + l[1], f[2] + l[2]], [0, 0, 0]), w = e.length;
  return [a[0] / w, a[1] / w, a[2] / w];
}
function uo(e, a) {
  const w = new Qe(), f = 0.05 * e * 1, l = tn(), S = new gt("X", "red", "transparent"), y = new gt(a ? "Z" : "Y", "green", "transparent"), m = new gt(a ? "Y" : "Z", "blue", "transparent"), g = new en(new x(1, 0, 0), new x(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), b = new en(new x(0, 1, 0), new x(0, 0, 0), 1, l.axisArrow, 0.2, 0.2), _ = new en(new x(0, 0, 1), new x(0, 0, 0), 1, l.axisArrow, 0.2, 0.2);
  return S.position.set(1.3 * f, 0, 0), y.position.set(0, 1.3 * f, 0), m.position.set(0, 0, 1.3 * f), S.updateScale(0.4 * f), y.updateScale(0.4 * f), m.updateScale(0.4 * f), g.scale.set(f, f, f), b.scale.set(f, f, f), _.scale.set(f, f, f), w.add(g, b, _, S, y, m), w;
}
function Kn(e, a) {
  const w = new x(...e), l = new x(...a).clone().sub(w), S = l.length(), y = l.dot(new x(1, 0, 0)) / S, m = l.dot(new x(0, 1, 0)) / S, g = l.dot(new x(0, 0, 1)) / S, b = Math.sqrt(y ** 2 + m ** 2);
  let _ = new Bn().fromArray([[y, m, g], [-m / b, y / b, 0], [-y * g / b, -m * g / b, b]].flat());
  return g === 1 && (_ = new Bn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), g === -1 && (_ = new Bn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new vo().setFromMatrix3(_);
}
function Zn(e, a) {
  return e == null ? void 0 : e.map((w, f) => (9 * w + a[f]) / 10);
}
function wn(e) {
  const a = e.reduce((f, l) => [f[0] + l[0], f[1] + l[1], f[2] + l[2]], [0, 0, 0]), w = e.length;
  return [a[0] / w, a[1] / w, a[2] / w];
}
function ns(e, a, w) {
  const f = wn([a, w]), l = wn([e, w]), S = wn([e, a]), y = new x(...f).sub(new x(...l)).normalize(), m = new x(...w).sub(new x(...S)).normalize(), g = y.clone().cross(m).normalize(), b = g.clone().cross(y).normalize();
  return new vo().makeBasis(y, b, g);
}
function os(e, a, w, f) {
  const l = new Qe(), S = new he(), y = new ht({ vertexColors: true }), m = [0, 0, 0], g = [1, 0, 0], b = [0, 1, 0], _ = [0, 0, 1];
  S.setAttribute("position", new Ft([...m, ...g, ...m, ...b, ...m, ..._], 3));
  const v = [255, 0, 0], K = [0, 255, 0], te = [0, 0, 255];
  return S.setAttribute("color", new Ft([...v, ...v, ...K, ...K, ...te, ...te], 3)), L.derive(() => {
    var _a;
    a.deformedShape.val, a.orientations.val && (l.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((de) => {
      const ie = new Ot(S, y), M = w.rawVal[de[0]], U = w.rawVal[de[1]];
      if (de.length === 2 && (ie.position.set(...Zn(M, U)), ie.rotation.setFromRotationMatrix(Kn(M, U))), de.length === 3) {
        const Z = w.rawVal[de[2]];
        ie.position.set(...wn([M, U, Z])), ie.rotation.setFromRotationMatrix(ns(M, U, Z));
      }
      const ne = 0.05 * a.gridSize.rawVal * 0.75 * f.rawVal;
      ie.scale.set(ne, ne, ne), l.add(ie);
    }));
  }), L.derive(() => {
    if (f.val, !a.orientations.rawVal) return;
    const ie = 0.05 * a.gridSize.val * 0.75 * f.rawVal;
    l.children.forEach((M) => M.scale.set(ie, ie, ie));
  }), L.derive(() => {
    l.visible = a.orientations.val;
  }), l;
}
function ss(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const a = (e.b * 100).toFixed(0), w = (e.h * 100).toFixed(0);
    return `${a}x${w}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function as(e, a, w, f) {
  const l = new Qe(), S = new Qe();
  l.add(S);
  function y(q, B) {
    const I = q / 2, V = B / 2, z = new Float32Array([0, -I, -V, 0, I, -V, 0, I, V, 0, -I, -V, 0, I, V, 0, -I, V]), T = new he();
    T.setAttribute("position", new ot(z, 3));
    const C = new Float32Array([0, -I, -V, 0, I, -V, 0, I, V, 0, -I, V, 0, -I, -V]), N = new he();
    return N.setAttribute("position", new ot(C, 3)), { fill: T, outline: N };
  }
  function m(q, B = 24) {
    const I = q / 2, V = new Float32Array(B * 9);
    for (let N = 0; N < B; N++) {
      const j = N / B * Math.PI * 2, Y = (N + 1) / B * Math.PI * 2;
      V[N * 9] = 0, V[N * 9 + 1] = 0, V[N * 9 + 2] = 0, V[N * 9 + 3] = 0, V[N * 9 + 4] = I * Math.cos(j), V[N * 9 + 5] = I * Math.sin(j), V[N * 9 + 6] = 0, V[N * 9 + 7] = I * Math.cos(Y), V[N * 9 + 8] = I * Math.sin(Y);
    }
    const z = new he();
    z.setAttribute("position", new ot(V, 3));
    const T = new Float32Array((B + 1) * 3);
    for (let N = 0; N <= B; N++) {
      const j = N / B * Math.PI * 2;
      T[N * 3] = 0, T[N * 3 + 1] = I * Math.cos(j), T[N * 3 + 2] = I * Math.sin(j);
    }
    const C = new he();
    return C.setAttribute("position", new ot(T, 3)), { fill: z, outline: C };
  }
  function g(q, B, I, V) {
    const z = I ?? B * 0.08, T = V ?? q * 0.07, C = q / 2, N = B / 2, j = N - z, Y = T / 2, ye = [];
    function E(J, Pe, Se, ke) {
      ye.push(0, J, Pe, 0, Se, Pe, 0, Se, ke, 0, J, Pe, 0, Se, ke, 0, J, ke);
    }
    E(-C, -N, C, -j), E(-Y, -j, Y, j), E(-C, j, C, N);
    const D = new he();
    D.setAttribute("position", new ot(new Float32Array(ye), 3));
    const oe = new Float32Array([0, -C, -N, 0, C, -N, 0, C, -j, 0, Y, -j, 0, Y, j, 0, C, j, 0, C, N, 0, -C, N, 0, -C, j, 0, -Y, j, 0, -Y, -j, 0, -C, -j, 0, -C, -N]), pe = new he();
    return pe.setAttribute("position", new ot(oe, 3)), { fill: D, outline: pe };
  }
  function b(q, B, I) {
    const V = q / 2, z = B / 2, T = V - I, C = z - I, N = [];
    function j(D, oe, pe, J) {
      N.push(0, D, oe, 0, pe, oe, 0, pe, J, 0, D, oe, 0, pe, J, 0, D, J);
    }
    j(-V, -z, V, -C), j(-V, C, V, z), j(-V, -C, -T, C), j(T, -C, V, C);
    const Y = new he();
    Y.setAttribute("position", new ot(new Float32Array(N), 3));
    const ye = new Float32Array([0, -V, -z, 0, V, -z, 0, V, -z, 0, V, z, 0, V, z, 0, -V, z, 0, -V, z, 0, -V, -z, 0, -T, -C, 0, T, -C, 0, T, -C, 0, T, C, 0, T, C, 0, -T, C, 0, -T, C, 0, -T, -C]), E = new he();
    return E.setAttribute("position", new ot(ye, 3)), { fill: Y, outline: E };
  }
  function _(q, B, I) {
    const V = q / 2, z = B / 2, T = V - I, C = z - I, N = new he(), j = new Float32Array([0, -T, -C, 0, T, -C, 0, T, C, 0, -T, -C, 0, T, C, 0, -T, C]);
    N.setAttribute("position", new ot(j, 3));
    const Y = [];
    function ye(pe, J, Pe, Se) {
      Y.push(0, pe, J, 0, Pe, J, 0, Pe, Se, 0, pe, J, 0, Pe, Se, 0, pe, Se);
    }
    ye(-V, -z, V, -C), ye(-V, C, V, z), ye(-V, -C, -T, C), ye(T, -C, V, C);
    const E = new he();
    E.setAttribute("position", new ot(new Float32Array(Y), 3));
    const D = new Float32Array([0, -V, -z, 0, V, -z, 0, V, -z, 0, V, z, 0, V, z, 0, -V, z, 0, -V, z, 0, -V, -z, 0, -T, -C, 0, T, -C, 0, T, -C, 0, T, C, 0, T, C, 0, -T, C, 0, -T, C, 0, -T, -C]), oe = new he();
    return oe.setAttribute("position", new ot(D, 3)), { concFill: N, steelFillGeom: E, outline: oe };
  }
  function v(q, B, I) {
    const V = [], z = [[0, -q / 2, -B / 2], [0, -q / 2 + I, -B / 2], [0, -q / 2 + I, B / 2 - I], [0, q / 2, B / 2 - I], [0, q / 2, B / 2], [0, -q / 2, B / 2]], T = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Y of T) V.push(...z[Y]);
    const C = new he();
    C.setAttribute("position", new ot(new Float32Array(V), 3));
    const N = [];
    for (let Y = 0; Y < z.length; Y++) {
      const ye = (Y + 1) % z.length;
      N.push(...z[Y], ...z[ye]);
    }
    const j = new he();
    return j.setAttribute("position", new ot(new Float32Array(N), 3)), { fill: C, outline: j };
  }
  function K(q, B, I, V) {
    const z = V / 2, T = [], C = [[0, -q - z, -B / 2], [0, -I - z, -B / 2], [0, -I - z, B / 2 - I], [0, -z, B / 2 - I], [0, -z, B / 2], [0, -q - z, B / 2]], N = [[0, z, -B / 2], [0, z + I, -B / 2], [0, z + I, B / 2 - I], [0, q + z, B / 2 - I], [0, q + z, B / 2], [0, z, B / 2]], j = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const D of j) T.push(...C[D]);
    for (const D of j) T.push(...N[D]);
    const Y = new he();
    Y.setAttribute("position", new ot(new Float32Array(T), 3));
    const ye = [];
    for (const D of [C, N]) for (let oe = 0; oe < D.length; oe++) {
      const pe = (oe + 1) % D.length;
      ye.push(...D[oe], ...D[pe]);
    }
    const E = new he();
    return E.setAttribute("position", new ot(new Float32Array(ye), 3)), { fill: Y, outline: E };
  }
  function te(q, B, I, V) {
    const z = B / 2, T = q, C = [[0, -T, -z], [0, -T, -z + I], [0, -V, -z + I], [0, -V, z - I], [0, -T, z - I], [0, -T, z], [0, 0, z], [0, 0, -z]], N = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], j = [];
    for (const D of N) j.push(...C[D]);
    const Y = new he();
    Y.setAttribute("position", new ot(new Float32Array(j), 3));
    const ye = [];
    for (let D = 0; D < C.length; D++) {
      const oe = (D + 1) % C.length;
      ye.push(...C[D], ...C[oe]);
    }
    const E = new he();
    return E.setAttribute("position", new ot(new Float32Array(ye), 3)), { fill: Y, outline: E };
  }
  function de(q, B, I, V, z) {
    const T = B / 2, C = z / 2, N = [], j = [[0, -q, -T], [0, -q, -T + I], [0, -C - V, -T + I], [0, -C - V, T - I], [0, -q, T - I], [0, -q, T], [0, -C, T], [0, -C, -T]], Y = j.map((pe) => [pe[0], -pe[1], pe[2]]), ye = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const pe of ye) N.push(...j[pe]);
    for (const pe of ye) N.push(...Y[pe]);
    const E = new he();
    E.setAttribute("position", new ot(new Float32Array(N), 3));
    const D = [];
    for (const pe of [j, Y]) for (let J = 0; J < pe.length; J++) {
      const Pe = (J + 1) % pe.length;
      D.push(...pe[J], ...pe[Pe]);
    }
    const oe = new he();
    return oe.setAttribute("position", new ot(new Float32Array(D), 3)), { fill: E, outline: oe };
  }
  function ie(q, B, I, V) {
    const z = q / 2, T = B / 2, C = V / 2, N = [[0, -C, -T], [0, C, -T], [0, C, T - I], [0, z, T - I], [0, z, T], [0, -z, T], [0, -z, T - I], [0, -C, T - I]], j = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], Y = [];
    for (const oe of j) Y.push(...N[oe]);
    const ye = new he();
    ye.setAttribute("position", new ot(new Float32Array(Y), 3));
    const E = [];
    for (let oe = 0; oe < N.length; oe++) {
      const pe = (oe + 1) % N.length;
      E.push(...N[oe], ...N[pe]);
    }
    const D = new he();
    return D.setAttribute("position", new ot(new Float32Array(E), 3)), { fill: ye, outline: D };
  }
  function M(q, B, I = 24) {
    const V = q / 2, z = V - B, T = [];
    for (let Y = 0; Y < I; Y++) {
      const ye = Y / I * Math.PI * 2, E = (Y + 1) / I * Math.PI * 2, D = Math.cos(ye), oe = Math.sin(ye), pe = Math.cos(E), J = Math.sin(E);
      T.push(0, V * D, V * oe, 0, V * pe, V * J, 0, z * pe, z * J), T.push(0, V * D, V * oe, 0, z * pe, z * J, 0, z * D, z * oe);
    }
    const C = new he();
    C.setAttribute("position", new ot(new Float32Array(T), 3));
    const N = [];
    for (let Y = 0; Y < I; Y++) {
      const ye = Y / I * Math.PI * 2, E = (Y + 1) / I * Math.PI * 2;
      N.push(0, V * Math.cos(ye), V * Math.sin(ye), 0, V * Math.cos(E), V * Math.sin(E)), N.push(0, z * Math.cos(ye), z * Math.sin(ye), 0, z * Math.cos(E), z * Math.sin(E));
    }
    const j = new he();
    return j.setAttribute("position", new ot(new Float32Array(N), 3)), { fill: C, outline: j };
  }
  const U = new je({ color: 52479, transparent: true, opacity: 0.35, side: Tt, depthWrite: false }), ue = new ht({ color: 52479 }), ne = new je({ color: 16750848, transparent: true, opacity: 0.4, side: Tt, depthWrite: false }), Z = new ht({ color: 16750848 });
  function re(q, B) {
    const I = Math.abs(B[0] - q[0]), V = Math.abs(B[1] - q[1]), z = Math.abs(B[2] - q[2]);
    return z > I && z > V || V > I && V > z;
  }
  return L.derive(() => {
    var _a, _b;
    a.deformedShape.val, a.secColumns.val, a.secBeams.val, a.secFloor.val;
    const q = a.secColumns.rawVal, B = a.secBeams.rawVal;
    if (!q && !B) {
      l.children.forEach((C) => {
        C instanceof gt && C.dispose();
      }), l.clear();
      return;
    }
    l.children.forEach((C) => {
      C instanceof gt && C.dispose();
    }), l.clear();
    const I = (_a = e.elements) == null ? void 0 : _a.val, V = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!I || !V) return;
    const z = V.sectionShapes, T = a.secFloor.rawVal;
    I.forEach((C, N) => {
      if (C.length !== 2) return;
      const j = w.rawVal[C[0]], Y = w.rawVal[C[1]];
      if (!j || !Y) return;
      const ye = re(j, Y);
      if (ye && !q || !ye && !B) return;
      if (T >= 0) {
        const J = Math.min(j[1], Y[1]);
        Math.max(j[1], Y[1]);
        const Pe = a.gridSize.rawVal || 3;
        if (Math.floor(J / Pe + 0.01) !== T) return;
      }
      const E = z == null ? void 0 : z.get(N);
      if (!E) return;
      const D = [(j[0] + Y[0]) / 2, (j[1] + Y[1]) / 2, (j[2] + Y[2]) / 2], oe = Kn(j, Y);
      if (E.type === "CFT") {
        const J = _(E.b, E.h, E.tw ?? E.b * 0.05), Pe = new qe(J.concFill, U);
        Pe.position.set(...D), Pe.rotation.setFromRotationMatrix(oe), l.add(Pe);
        const Se = new qe(J.steelFillGeom, ne);
        Se.position.set(...D), Se.rotation.setFromRotationMatrix(oe), l.add(Se);
        const ke = new zt(J.outline, Z);
        ke.position.set(...D), ke.rotation.setFromRotationMatrix(oe), l.add(ke);
      } else {
        let J, Pe, Se;
        switch (E.type) {
          case "rect":
            J = y(E.b, E.h), Pe = U, Se = ue;
            break;
          case "circ":
            J = m(E.d), Pe = U, Se = ue;
            break;
          case "I":
            J = g(E.b, E.h, E.tf, E.tw), Pe = ne, Se = Z;
            break;
          case "HSS":
            J = b(E.b, E.h, E.tw ?? E.b * 0.05), Pe = ne, Se = Z;
            break;
          case "CFT":
            J = _(E.b, E.h, E.tw ?? E.b * 0.05), Pe = ne, Se = Z;
            break;
          case "L":
            J = v(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3), Pe = ne, Se = Z;
            break;
          case "2L":
            J = K(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3, E.dis ?? 0.01), Pe = ne, Se = Z;
            break;
          case "C":
          case "coldC":
            J = te(E.b, E.h, E.tf ?? E.t ?? 3e-3, E.tw ?? E.t ?? 3e-3), Pe = ne, Se = Z;
            break;
          case "2C":
            J = de(E.b, E.h, E.tf ?? 5e-3, E.tw ?? 5e-3, E.dis ?? 0.01), Pe = ne, Se = Z;
            break;
          case "T":
            J = ie(E.b, E.h, E.tf ?? 0.01, E.tw ?? 6e-3), Pe = ne, Se = Z;
            break;
          case "pipe":
            J = M(E.d, E.tw ?? E.d * 0.05), Pe = ne, Se = Z;
            break;
          default:
            return;
        }
        const ke = new qe(J.fill, Pe);
        ke.position.set(...D), ke.rotation.setFromRotationMatrix(oe), l.add(ke);
        const ze = new zt(J.outline, Se);
        ze.position.set(...D), ze.rotation.setFromRotationMatrix(oe), l.add(ze);
      }
      const pe = ss(E);
      if (pe) {
        const Pe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(E.type) ? "#ff9900" : "#00ccff", Se = new gt(pe, Pe, "transparent");
        Se.position.set(D[0], D[1], D[2]);
        const ke = 0.05 * a.gridSize.rawVal * 0.5;
        Se.updateScale(ke * ((f == null ? void 0 : f.rawVal) ?? 1)), S.add(Se);
      }
    });
  }), f && L.derive(() => {
    if (f.val, !a.sections.rawVal) return;
    const q = 0.05 * a.gridSize.val * 0.5;
    S.children.forEach((B) => {
      B instanceof gt && B.updateScale(q * f.rawVal);
    });
  }), L.derive(() => {
    l.visible = a.sections.val;
  }), L.derive(() => {
    S.visible = a.sectionLabels.val;
  }), l;
}
class Pn extends Qe {
  constructor(a, w, f, l, S, y, m) {
    super();
    const g = new En().moveTo(0, 0).lineTo(0, y[1]).lineTo(f, y[1]).lineTo(f, 0).lineTo(0, 0), b = g.getPoints(), _ = new he().setFromPoints(b);
    this.lines = new zt(_, new ht({ color: tn().resultOutline })), this.lines.position.set(...a), this.lines.rotation.setFromRotationMatrix(l), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new An(g), K = new je({ color: y[1] > 0 ? 24435 : 11411474, side: Tt });
    this.mesh = new qe(v, K), this.mesh.position.set(...a), this.mesh.rotation.setFromRotationMatrix(l), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new gt(`${S[1].toFixed(2)}`), this.normalizedResult = y, this.textPosition = wn([a, w]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(l), this.add(this.text);
  }
  updateScale(a) {
    this.lines.scale.set(1, a * 2, 1), this.mesh.scale.set(1, a * 2, 1), this.text.updateScale(a * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * a);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class fo extends Qe {
  constructor(a, w, f, l, S, y, m) {
    super();
    const g = S[0] * f / (S[0] + S[1]), b = S[0] * S[1] > 0;
    if (this.text = new gt(`${S[0].toFixed(2)}`), this.text2 = new gt(`${(S[1] * -1).toFixed(2)}`), this.normalizedResult = y, this.textPosition = Zn(a, w), this.text2Position = Zn(w, a), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(l), this.text2.rotation.setFromRotationMatrix(l), this.add(this.text, this.text2), b) {
      const _ = new En().moveTo(0, 0).lineTo(0, y[0]).lineTo(g, 0).lineTo(0, 0), v = new En().moveTo(g, 0).lineTo(f, -y[1]).lineTo(f, 0).lineTo(g, 0), K = _.getPoints(), te = v.getPoints(), de = new he().setFromPoints(K), ie = new he().setFromPoints(te), M = new ht({ color: tn().resultOutline });
      this.lines = new zt(de, M), this.lines2 = new zt(ie, M), this.lines.position.set(...a), this.lines2.position.set(...a), this.lines.rotation.setFromRotationMatrix(l), this.lines2.rotation.setFromRotationMatrix(l), m && this.lines.rotateX(Math.PI / 2), m && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const U = new An(_), ue = new An(v), ne = new je({ color: y[0] > 0 ? 24435 : 11411474, side: Tt }), Z = new je({ color: -y[1] > 0 ? 24435 : 11411474, side: Tt });
      this.mesh = new qe(U, ne), this.mesh2 = new qe(ue, Z), this.mesh.position.set(...a), this.mesh2.position.set(...a), this.mesh.rotation.setFromRotationMatrix(l), this.mesh2.rotation.setFromRotationMatrix(l), m && this.mesh.rotateX(Math.PI / 2), m && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const _ = new En().moveTo(0, 0).lineTo(0, y[0]).lineTo(f, -y[1]).lineTo(f, 0).lineTo(0, 0), v = _.getPoints(), K = new he().setFromPoints(v);
      this.lines = new zt(K, new ht({ color: tn().resultOutline })), this.lines.position.set(...a), this.lines.rotation.setFromRotationMatrix(l), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const te = new An(_), de = new je({ color: y[0] > 0 ? 24435 : 11411474, side: Tt });
      this.mesh = new qe(te, de), this.mesh.position.set(...a), this.mesh.rotation.setFromRotationMatrix(l), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(a) {
    var _a, _b;
    this.lines.scale.set(1, a * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, a * 2, 1), this.mesh.scale.set(1, a * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, a * 2, 1), this.text.updateScale(a * 0.6), this.text2.updateScale(a * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * a), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * a);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e = this.mesh2) == null ? void 0 : _e.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var bo = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(bo || {});
function is(e, a, w, f) {
  const l = new Qe(), S = () => {
    const g = w.rawVal ?? [];
    if (g.length < 2) return a.gridSize.val * 0.5;
    let b = [1 / 0, 1 / 0, 1 / 0], _ = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of g) for (let K = 0; K < 3; K++) v[K] < b[K] && (b[K] = v[K]), v[K] > _[K] && (_[K] = v[K]);
    return Math.max(_[0] - b[0], _[1] - b[1], _[2] - b[2], 0.1);
  }, y = () => 0.025 * S(), m = { normals: Pn, shearsY: Pn, shearsZ: Pn, torsions: Pn, bendingsY: fo, bendingsZ: fo };
  return L.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, w.val, a.frameResults.val == "none") return;
    l.children.forEach((b) => b.dispose()), l.clear();
    const g = bo[a.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[g]) == null ? void 0 : _b.forEach((b, _) => {
      var _a2, _b2;
      const v = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[_]) ?? [0, 1], K = w.rawVal[v[0]], te = w.rawVal[v[1]], de = new x(...te).distanceTo(new x(...K)), ie = ls((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[g]), M = b == null ? void 0 : b.map((Z) => Z / (ie === 0 ? 1 : ie)), U = Kn(K, te), ue = new m[g](K, te, de, U, b ?? [0, 0], M ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(g)), ne = y();
      ue.updateScale(ne * f.rawVal), l.add(ue);
    });
  }), L.derive(() => {
    if (f.val, a.frameResults.rawVal == "none") return;
    const g = y();
    l.children.forEach((b) => b.updateScale(g * f.rawVal));
  }), L.derive(() => {
    l.visible = a.frameResults.val != "none";
  }), l;
}
function ls(e) {
  let a = 0;
  return e == null ? void 0 : e.forEach((w) => {
    const f = Math.max(...w ?? [0, 0]);
    f > a && (a = f);
  }), a;
}
class rs extends Qe {
  constructor(a, w, f) {
    super();
    const l = w === Hn.reactions;
    f[0] && (this.xText1 = new gt(`${l ? "Fx" : "Dx"}: ` + f[0].toFixed(4))), f[3] && (this.xText2 = new gt(`${l ? "Mx" : "Rx"}: ` + f[3].toFixed(4))), f[1] && (this.yText1 = new gt(`${l ? "Fy" : "Dy"}: ` + f[1].toFixed(4))), f[4] && (this.yText2 = new gt(`${l ? "My" : "Ry"}: ` + f[4].toFixed(4))), f[2] && (this.zText1 = new gt(`${l ? "Fz" : "Dz"}: ` + f[2].toFixed(4))), f[5] && (this.zText2 = new gt(`${l ? "Mz" : "Rz"}: ` + f[5].toFixed(4))), (f[0] || f[3]) && (this.xArrow = new en(new x(1, 0, 0), new x(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[1] || f[4]) && (this.yArrow = new en(new x(0, 1, 0), new x(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[2] || f[5]) && (this.zArrow = new en(new x(0, 0, 1), new x(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...a), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(a) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(a, a, a), (_b = this.yArrow) == null ? void 0 : _b.scale.set(a, a, a), (_c = this.zArrow) == null ? void 0 : _c.scale.set(a, a, a), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * a, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * a, 0, 0.5 * a), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * a, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * a, 0.5 * a), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * a), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * a + 0.5 * a), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * a), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * a), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * a), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * a), (_n2 = this.zText1) == null ? void 0 : _n2.updateScale(0.4 * a), (_o = this.zText2) == null ? void 0 : _o.updateScale(0.4 * a);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var Hn = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(Hn || {});
function cs(e, a, w, f) {
  const l = new Qe();
  return L.derive(() => {
    var _a, _b;
    if (a.deformedShape.val, a.nodeResults.val == "none") return;
    l.children.forEach((m) => m.dispose()), l.clear();
    const S = Hn[a.nodeResults.rawVal], y = 0.05 * a.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[S]) == null ? void 0 : _b.forEach((m, g) => {
      const b = new rs(w.rawVal[g], S, m ?? [0, 0, 0, 0, 0, 0]);
      b.updateScale(y * f.rawVal), l.add(b);
    });
  }), L.derive(() => {
    if (f.val, a.nodeResults.rawVal == "none") return;
    const S = 0.05 * a.gridSize.val;
    l.children.forEach((y) => y.updateScale(S * f.rawVal));
  }), L.derive(() => {
    l.visible = a.nodeResults.val != "none";
  }), l;
}
function ds({ drawingObj: e, gridObj: a, scene: w, getActiveCamera: f, controls: l, gridSize: S, derivedDisplayScale: y, rendererElm: m, viewerRender: g }) {
  const b = new Lo(), _ = new Io(), v = (n) => {
    const o = m.getBoundingClientRect(), i = n.clientX - o.left, t = n.clientY - o.top, d = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const p = d / 2;
      if (i >= p) return _.x = (i - p) / p * 2 - 1, _.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? f();
      _.x = i / p * 2 - 1;
    } else _.x = i / d * 2 - 1;
    return _.y = -(t / s) * 2 + 1, f();
  }, K = new qe(new Sn(1e4, 1e4), new je({ side: Tt, transparent: true, opacity: 0, depthWrite: false }));
  K.visible = true, K.frustumCulled = false, w.add(K);
  const te = (n, o, i) => {
    const t = new qe(new Sn(1e4, 1e4), new je({ side: Tt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, i), t.visible = false, t.frustumCulled = false, w.add(t), t;
  }, de = te(Math.PI / 2, 0, 0), ie = te(0, Math.PI / 2, 0), M = () => {
    if (de.visible = !!window.__hekatanGridPlaneXZ, ie.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Ue.visible) {
      const i = b.intersectObjects([Ue, A, W], false);
      if (i.length > 0) return i;
    }
    const o = [K];
    return de.visible && o.push(de), ie.visible && o.push(ie), ce.visible && Ve.length > 0 && o.push(...Ve), b.intersectObjects(o, false);
  }, U = new zn(new he(), new Fn()), ue = new zn(new he(), new Fn({ color: "gray", sizeAttenuation: false, size: 6 })), ne = new zn(new he(), new Fn({ color: "orange", size: 0.1 }));
  w.add(ne);
  const Z = document.createElement("input");
  Z.id = "hk-rubber-label", Z.type = "text", Z.spellcheck = false, Z.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, Z.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(Z);
  let re = null, q = null, B = false;
  const I = new x(), V = (n, o, i, t, d, s) => {
    const r = t - n, p = d - o, u = s - i, k = Math.hypot(r, p, u);
    if (k < 0.01) {
      Z.style.display = "none";
      return;
    }
    re = [n, o, i], q = [r / k, p / k, u / k], I.set((n + t) / 2, (o + d) / 2, (i + s) / 2), I.project(f());
    const P = m.getBoundingClientRect(), c = P.left + (I.x * 0.5 + 0.5) * P.width, h = P.top + (-I.y * 0.5 + 0.5) * P.height;
    if (Z.style.left = c + "px", Z.style.top = h + "px", Z.style.display = "block", !B) {
      if (Z.value = `${k.toFixed(2)} m`, document.activeElement !== Z) {
        const F = document.activeElement;
        F && (F.tagName === "INPUT" || F.tagName === "TEXTAREA") && F !== Z || Z.focus({ preventScroll: true });
      }
      try {
        Z.select();
      } catch {
      }
    }
  }, z = () => {
    Z.style.display = "none", re = null, q = null, B = false, document.activeElement === Z && Z.blur();
  }, T = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      St = n, me(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), Z.blur();
      return;
    }
    if (!re || !q || !e.polylines) return;
    let i = q[0], t = q[1], d = q[2];
    Ee === "x" ? (i = Math.sign(i) || 1, t = 0, d = 0) : Ee === "y" ? (i = 0, t = Math.sign(t) || 1, d = 0) : Ee === "z" && (i = 0, t = 0, d = Math.sign(d) || 1);
    const s = re[0] + i * n, r = re[1] + t * n, p = re[2] + d * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, r, p]];
    const u = e.polylines.rawVal, k = u.length ? u[u.length - 1] : [];
    e.polylines.val = [...u.slice(0, -1), [...k, e.points.rawVal.length - 1]], Z.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    g();
  }, C = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const i = o.startsWith("@");
    if (i && (o = o.slice(1)), o.includes("<")) {
      const d = o.split("<").map((s) => parseFloat(s.trim()));
      if (d.some(isNaN)) return null;
      if (d.length === 2) {
        const [s, r] = d;
        return i ? { kind: "relPolar", L: s, ang: r } : { kind: "absPolar", L: s, ang: r };
      }
      if (d.length === 3 && i) {
        const [s, r, p] = d;
        return { kind: "relSpherical", L: s, az: r, el: p };
      }
      return null;
    }
    if (o.includes(",")) {
      const d = o.split(",").map((u) => parseFloat(u.trim()));
      if (d.some(isNaN)) return null;
      const [s, r, p = 0] = d;
      return i ? { kind: "relCart", dx: s, dy: r, dz: p } : { kind: "absCart", x: s, y: r, z: p };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, N = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return re ? [re[0] + n.dx, re[1] + n.dy, re[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!re) return null;
      const o = n.ang * Math.PI / 180;
      return [re[0] + n.L * Math.cos(o), re[1] + n.L * Math.sin(o), re[2]];
    }
    if (n.kind === "relSpherical") {
      if (!re) return null;
      const o = n.az * Math.PI / 180, i = n.el * Math.PI / 180, t = n.L * Math.cos(i);
      return [re[0] + t * Math.cos(o), re[1] + t * Math.sin(o), re[2] + n.L * Math.sin(i)];
    }
    return null;
  }, j = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, i = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...i, e.points.rawVal.length - 1]], Z.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    g();
  };
  Z.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const i = C(Z.value);
      if (!i) return;
      if (B = false, i.kind === "length") T(i.L), me(`\u270F DDE ${i.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = N(i);
        if (!t) return;
        j(t);
        const d = i.kind;
        me(`\u270F ${d} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), B = false, Z.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!B && Z.style.display === "block") try {
          Z.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (B = true);
  }), window.addEventListener("keydown", (n) => {
    if (!re || !q || document.activeElement === Z) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (Z.value = n.key, Z.focus(), Z.setSelectionRange(1, 1), n.preventDefault());
  });
  const Y = document.createElement("div");
  Y.id = "hk-coord-readout", Y.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", Y.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(Y);
  const ye = document.createElement("div");
  ye.id = "hk-coord-fixed", ye.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", ye.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(ye);
  const E = new zt(new he().setFromPoints([new x(0, 0, 0), new x(0, 0, 0)]), new hn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  E.frustumCulled = false, E.visible = false, w.add(E);
  const D = new Qe();
  D.frustumCulled = false, D.visible = false, w.add(D);
  const oe = (n) => {
    const o = new he().setFromPoints([new x(0, 0, 0), new x(0, 0, 0)]), i = new hn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new zt(o, i);
  }, pe = oe(16711680), J = oe(65280), Pe = oe(35071);
  D.add(pe, J, Pe);
  const Se = (n) => {
    const o = new he().setFromPoints([new x(0, 0, 0), new x(0, 0, 0), new x(0, 0, 0), new x(0, 0, 0)]), i = new ht({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new go(o, i);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, ke = Se(3462041), ze = Se(16724804), Xe = Se(6333946), st = new Qe();
  st.frustumCulled = false, st.visible = false, w.add(st), st.add(ke, ze, Xe);
  const vt = (n) => {
    const o = new Sn(1, 1), i = new je({ color: n, transparent: true, opacity: 0.06, side: Tt, depthWrite: false }), t = new qe(o, i);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Ue = vt(3462041), A = vt(16724804), W = vt(6333946);
  st.add(Ue, A, W);
  const ee = (n, o, i, t) => {
    n.scale.set(2 * t, 2 * t, 1), i === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : i === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, se = document.createElement("div");
  se.id = "hk-refplane-badge", se.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(se), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, st.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = i[i.length - 1] ?? [], d = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && d[t[t.length - 1]] ? d[t[t.length - 1]] : [0, 0, 0], r = window.__hekatanOrthoExt ?? 8;
      Ye(ke, s, "xy", r), Ye(ze, s, "xz", r), Ye(Xe, s, "yz", r), ee(Ue, s, "xy", r), ee(A, s, "xz", r), ee(W, s, "yz", r), Ue.material.opacity = 0.1, A.material.opacity = 0.1, W.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    g();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !st.visible) {
      g();
      return;
    }
    const o = window.__hekatanOrthoAnchor, i = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = i[i.length - 1] ?? [], d = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && d[t[t.length - 1]] ? d[t[t.length - 1]] : [0, 0, 0];
    Ye(ke, s, "xy", n), Ye(ze, s, "xz", n), Ye(Xe, s, "yz", n), ee(Ue, s, "xy", n), ee(A, s, "xz", n), ee(W, s, "yz", n), g();
  };
  const Le = (n) => {
    if (Ue.material.opacity = n === "xy" ? 0.14 : 0.04, A.material.opacity = n === "xz" ? 0.14 : 0.04, W.material.opacity = n === "yz" ? 0.14 : 0.04, n) {
      const d = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      se.style.background = d.bg, se.style.color = d.text, se.textContent = `\u25A6 Plano ${n.toUpperCase()}`, se.style.display = "block";
    } else se.style.display = "none";
  }, Ye = (n, o, i, t) => {
    let d;
    i === "xy" ? d = [new x(o[0] - t, o[1] - t, o[2]), new x(o[0] + t, o[1] - t, o[2]), new x(o[0] + t, o[1] + t, o[2]), new x(o[0] - t, o[1] + t, o[2]), new x(o[0] - t, o[1] - t, o[2])] : i === "xz" ? d = [new x(o[0] - t, o[1], o[2] - t), new x(o[0] + t, o[1], o[2] - t), new x(o[0] + t, o[1], o[2] + t), new x(o[0] - t, o[1], o[2] + t), new x(o[0] - t, o[1], o[2] - t)] : d = [new x(o[0], o[1] - t, o[2] - t), new x(o[0], o[1] + t, o[2] - t), new x(o[0], o[1] + t, o[2] + t), new x(o[0], o[1] - t, o[2] + t), new x(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(d);
  };
  let Ee = null;
  window.__hekatanAxisLock = () => Ee;
  let Je = null;
  const Ke = document.createElement("div");
  Ke.id = "hk-axis-lock-badge", Ke.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Ke);
  const Et = () => {
    if (!Ee) {
      Ke.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    Ke.style.background = "rgba(15,23,42,0.92)", Ke.style.color = n[Ee], Ke.style.border = `1.5px solid ${n[Ee]}`, Ke.textContent = `\u{1F512} LOCK ${Ee.toUpperCase()}`, Ke.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== Z) return;
    const i = n.key.toLowerCase();
    if (i === "x" || i === "y" || i === "z") Ee = Ee === i ? null : i, Et(), n.preventDefault();
    else if (n.key === "Escape") {
      const t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur(), Jn(), n.preventDefault();
    } else if (n.key === "F8") {
      n.preventDefault(), window.__hekatanOrthoMode = !window.__hekatanOrthoMode;
      const t = window.__hekatanOrthoMode;
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
      let d = document.getElementById("hk-ortho-frame");
      d || (d = document.createElement("div"), d.id = "hk-ortho-frame", d.style.cssText = ["position:fixed", "inset:0", "z-index:99996", "border:3px solid rgba(34,211,238,0.85)", "box-shadow:inset 0 0 24px rgba(34,211,238,0.35)", "pointer-events:none"].join(";") + ";", document.body.appendChild(d)), d.style.display = t ? "block" : "none";
      let s = document.getElementById("hk-ortho-badge");
      s || (s = document.createElement("div"), s.id = "hk-ortho-badge", s.style.cssText = ["position:fixed", "top:10px", "left:50%", "transform:translateX(-50%)", "z-index:99998", "padding:6px 16px", "background:rgba(34,211,238,0.95)", "color:#0a1f24", "border-radius:6px", "border:2px solid rgba(8,145,178,1)", "box-shadow:0 4px 16px rgba(34,211,238,0.5)", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "pointer-events:none", "white-space:nowrap"].join(";") + ";", s.textContent = "\u22A5 ORTO ON (F8)", document.body.appendChild(s)), s.style.display = t ? "block" : "none";
    }
  });
  const Xt = new x(), It = new x(), Zt = new x(), H = (n) => {
    if (!Ee) return null;
    const o = n[0], i = n[1], t = n[2];
    return Ee === "x" ? (Xt.set(o - 1e4, i, t), It.set(o + 1e4, i, t)) : Ee === "y" ? (Xt.set(o, i - 1e4, t), It.set(o, i + 1e4, t)) : (Xt.set(o, i, t - 1e4), It.set(o, i, t + 1e4)), b.ray.distanceSqToSegment(Xt, It, null, Zt), Zt;
  };
  window.__hekatanProjectOnAxis = H;
  const Q = new zt(new he().setFromPoints([new x(0, 0, 0), new x(0, 0, 0)]), new ht({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Q.renderOrder = 998, Q.frustumCulled = false, Q.visible = false, w.add(Q);
  let ve = -1, ae = -1, Ae = -1;
  const we = /* @__PURE__ */ new Set();
  window.__hekatanSelection = we;
  const De = new zt(new he().setFromPoints([new x(), new x()]), new ht({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  De.renderOrder = 997, De.frustumCulled = false, De.visible = false, w.add(De);
  const be = new qe(new rn(0.02, 12, 12), new je({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  be.renderOrder = 998, be.visible = false, w.add(be);
  const Re = (n) => {
    const o = f();
    if (o.isOrthographicCamera) {
      const t = o, d = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, d * 6e-3);
    }
    const i = o.position.distanceTo(n);
    return Math.max(0.05, i / 10);
  }, Ie = () => {
    be.visible && be.scale.setScalar(Re(be.position));
  }, et = new Qe();
  et.frustumCulled = false, w.add(et);
  const rt = 2282478;
  let $e = null;
  const pt = (n, o, i, t) => {
    if (!e.points) return -1;
    const d = e.points.rawVal;
    let s = -1, r = t;
    for (let p = 0; p < d.length; p++) {
      const u = d[p];
      if (!u) continue;
      const k = Math.hypot(n - u[0], o - u[1], i - u[2]);
      k < r && (r = k, s = p);
    }
    return s;
  }, Ce = () => {
    var _a, _b, _c, _d, _e, _f, _g;
    for (; et.children.length; ) {
      const r = et.children.pop();
      (_b = (_a = r.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = r.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e = e.points) == null ? void 0 : _e.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const r of we) {
      const [p, ...u] = r.split(":");
      if (p === "pt") {
        const k = n[+u[0]];
        if (!k) continue;
        const P = new qe(new rn(0.025, 12, 12), new je({ color: rt, transparent: true, opacity: 0.9, depthTest: false }));
        P.position.set(k[0], k[1], k[2]), P.renderOrder = 999, P.__isSelectionPt = true, et.add(P);
      } else if (p === "seg") {
        const k = o[+u[0]], P = n[k == null ? void 0 : k[+u[1]]], c = n[k == null ? void 0 : k[+u[1] + 1]];
        if (!P || !c) continue;
        const h = new he().setFromPoints([new x(P[0], P[1], P[2]), new x(c[0], c[1], c[2])]), F = new zt(h, new ht({ color: rt, transparent: true, opacity: 0.95, depthTest: false }));
        F.renderOrder = 999, et.add(F);
      } else if (p === "poly") {
        const P = o[+u[0]].map((F) => {
          const X = n[F];
          return X ? new x(X[0], X[1], X[2]) : null;
        }).filter(Boolean);
        if (P.length < 2) continue;
        const c = new he().setFromPoints(P), h = new zt(c, new ht({ color: rt, transparent: true, opacity: 0.95, depthTest: false }));
        h.renderOrder = 999, et.add(h);
      } else if (p === "aux") {
        const k = t[+u[0]];
        if (!k || k.length !== 6) continue;
        const P = new he().setFromPoints([new x(k[0], k[1], k[2]), new x(k[3], k[4], k[5])]), c = new zt(P, new ht({ color: rt, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, et.add(c);
      }
    }
    const d = window.__hekatanUpdateSelectionPtScale;
    d && d();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), g();
  };
  window.__hekatanRefreshSelection = Ce, window.__hekatanClearSelection = () => {
    we.clear(), Ce();
  };
  const at = (n, o, i, t, d, s, r, p, u) => {
    const k = r - t, P = p - d, c = u - s, h = k * k + P * P + c * c;
    if (h < 1e-12) return Math.hypot(n - t, o - d, i - s);
    let F = ((n - t) * k + (o - d) * P + (i - s) * c) / h;
    F = Math.max(0, Math.min(1, F));
    const X = t + F * k, O = d + F * P, G = s + F * c;
    return Math.hypot(n - X, o - O, i - G);
  }, tt = (n, o, i, t) => {
    if (!e.polylines) return null;
    const d = e.polylines.rawVal, s = e.points.rawVal;
    let r = -1, p = -1, u = t;
    for (let k = 0; k < d.length; k++) {
      const P = d[k];
      for (let c = 0; c < P.length - 1; c++) {
        const h = s[P[c]], F = s[P[c + 1]];
        if (!h || !F) continue;
        const X = at(n, o, i, h[0], h[1], h[2], F[0], F[1], F[2]);
        X < u && (u = X, r = k, p = c);
      }
    }
    return r >= 0 ? { polyIdx: r, segIdx: p, dist: u } : null;
  }, nn = (n, o, i, t) => {
    const d = window.__hekatanDrawingAuxLines, s = (d == null ? void 0 : d.rawVal) ?? (d == null ? void 0 : d.val) ?? d ?? [];
    let r = -1, p = t;
    for (let u = 0; u < s.length; u++) {
      const k = s[u];
      if (!k || k.length !== 6) continue;
      const P = at(n, o, i, k[0], k[1], k[2], k[3], k[4], k[5]);
      P < p && (p = P, r = u);
    }
    return r;
  }, nt = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      Q.visible = false;
      return;
    }
    Q.geometry.setFromPoints([new x(t[0], t[1], t[2]), new x(t[3], t[4], t[5])]), Q.visible = true;
  }, Ut = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const i = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!i || i.length < 2) {
      Q.visible = false;
      return;
    }
    const d = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, s = [];
    if (d || o < 0 || o >= i.length - 1) for (const r of i) {
      const p = t[r];
      p && s.push(new x(p[0], p[1], p[2]));
    }
    else {
      const r = t[i[o]], p = t[i[o + 1]];
      r && s.push(new x(r[0], r[1], r[2])), p && s.push(new x(p[0], p[1], p[2]));
    }
    Q.geometry.setFromPoints(s), Q.visible = true;
  }, Lt = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const i = o.filter((u, k) => k !== n), t = /* @__PURE__ */ new Set();
    for (const u of i) for (const k of u) t.add(k);
    const d = e.points.rawVal, s = /* @__PURE__ */ new Map(), r = [];
    for (let u = 0; u < d.length; u++) t.has(u) && (s.set(u, r.length), r.push(d[u]));
    const p = i.map((u) => u.map((k) => s.get(k)).filter((k) => k !== void 0));
    e.points.val = r, e.polylines.val = p, e.areas && (e.areas.val = e.areas.rawVal.filter((u) => u !== n).map((u) => u > n ? u - 1 : u)), Q.visible = false, ve = -1, ae = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, Ne = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const i = e.polylines.rawVal;
    if (n < 0 || n >= i.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      Lt(n);
      return;
    }
    const d = i[n];
    if (o < 0 || o >= d.length - 1) return;
    if (d.length === 2) {
      Lt(n);
      return;
    }
    let s;
    o === 0 ? s = [d.slice(1)] : o === d.length - 2 ? s = [d.slice(0, -1)] : s = [d.slice(0, o + 1), d.slice(o + 1)];
    const r = [...i.slice(0, n), ...s, ...i.slice(n + 1)], p = /* @__PURE__ */ new Set();
    for (const h of r) for (const F of h) p.add(F);
    const u = e.points.rawVal, k = /* @__PURE__ */ new Map(), P = [];
    for (let h = 0; h < u.length; h++) p.has(h) && (k.set(h, P.length), P.push(u[h]));
    const c = r.map((h) => h.map((F) => k.get(F)).filter((F) => F !== void 0));
    if (e.points.val = P, e.polylines.val = c, e.areas) {
      const h = s.length - 1;
      e.areas.val = e.areas.rawVal.map((F) => F > n ? F + h : F);
    }
    Q.visible = false, ve = -1, ae = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  U.geometry.setAttribute("position", new Ft(e.points.rawVal.flat(), 3)), U.geometry.computeBoundingSphere(), U.frustumCulled = false, ue.frustumCulled = false, w.add(ue), K.position.set(0, 0, 0), K.rotateX(Math.PI / 2), K.geometry.rotateX(Math.PI / 2), K.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, i) => {
    if (e.points.val = [...e.points.rawVal, [n, o, i]], e.polylines) {
      const t = e.polylines.rawVal, d = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...d, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const n = e.polylines.rawVal;
    ((_a = n[n.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...n, []]);
  }, window.__hekatanDrawCircle = (n, o, i, t, d = window.__hekatanArcSegs ?? 12, s = "xy") => {
    var _a;
    const r = Math.max(4, Math.round(d)), p = e.points.rawVal.length, u = [];
    for (let k = 0; k < r; k++) {
      const P = 2 * Math.PI * k / r, c = t * Math.cos(P), h = t * Math.sin(P);
      let F;
      s === "xy" ? F = [n + c, o + h, i] : s === "xz" ? F = [n + c, o, i + h] : F = [n, o + c, i + h], u.push(F);
    }
    if (e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const k = [...u.map((c, h) => p + h), p], P = e.polylines.rawVal;
      ((_a = P[P.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...P, k, []] : e.polylines.val = [...P.slice(0, -1), k, []];
    }
  }, window.__hekatanDrawArc = (n, o, i, t = window.__hekatanArcSegs ?? 12) => {
    const d = Math.max(4, Math.round(t)), s = new x(...n), r = new x(...o), p = new x(...i), u = new x().subVectors(r, s), k = new x().subVectors(p, s), P = new x().crossVectors(u, k).normalize(), c = new x().addVectors(s, r).multiplyScalar(0.5), h = new x().addVectors(r, p).multiplyScalar(0.5), F = new x().crossVectors(u, P).normalize(), X = new x().crossVectors(new x().subVectors(p, r), P).normalize(), O = new x().subVectors(h, c), G = F.x * X.y - F.y * X.x;
    let R;
    if (Math.abs(G) > 1e-9) {
      const it = (O.x * X.y - O.y * X.x) / G;
      R = new x().addVectors(c, F.clone().multiplyScalar(it));
    } else R = c.clone();
    const le = s.distanceTo(R), xe = new x().subVectors(s, R), Fe = new x().subVectors(p, R), _e = Math.acos(Math.max(-1, Math.min(1, xe.dot(Fe) / (le * le)))), Te = e.points.rawVal.length, yt = [], Pt = P.clone();
    for (let it = 0; it <= d; it++) {
      const Be = it / d, ft = _e * Be, lt = new to().setFromAxisAngle(Pt, ft), wt = xe.clone().applyQuaternion(lt).add(R);
      yt.push([wt.x, wt.y, wt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...yt], e.polylines) {
      const it = yt.map((ft, lt) => Te + lt), Be = e.polylines.rawVal;
      e.polylines.val = [...Be.slice(0, -1), it, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, i = 1, t = 6, d = 6) => {
    const s = Math.min(n[0], o[0]), r = Math.max(n[0], o[0]), p = Math.min(n[1], o[1]), u = Math.max(n[1], o[1]), k = (n[2] + o[2]) / 2, P = r - s, c = u - p, h = Math.min(i, P / 2 - 0.01, c / 2 - 0.01);
    if (h <= 0) return;
    const F = e.points.rawVal.length, X = [], O = [], G = (R, le) => {
      X.push([R, le, k]), O.push(F + X.length - 1);
    };
    for (let R = 0; R <= d; R++) G(s + h + (P - 2 * h) * R / d, p);
    for (let R = 1; R <= t; R++) {
      const le = -Math.PI / 2 + Math.PI / 2 * R / t;
      G(r - h + h * Math.cos(le), p + h + h * Math.sin(le));
    }
    for (let R = 1; R <= d; R++) G(r, p + h + (c - 2 * h) * R / d);
    for (let R = 1; R <= t; R++) {
      const le = 0 + Math.PI / 2 * R / t;
      G(r - h + h * Math.cos(le), u - h + h * Math.sin(le));
    }
    for (let R = 1; R <= d; R++) G(r - h - (P - 2 * h) * R / d, u);
    for (let R = 1; R <= t; R++) {
      const le = Math.PI / 2 + Math.PI / 2 * R / t;
      G(s + h + h * Math.cos(le), u - h + h * Math.sin(le));
    }
    for (let R = 1; R <= d; R++) G(s, u - h - (c - 2 * h) * R / d);
    for (let R = 1; R <= t; R++) {
      const le = Math.PI + Math.PI / 2 * R / t;
      G(s + h + h * Math.cos(le), p + h + h * Math.sin(le));
    }
    if (O.push(F), e.points.val = [...e.points.rawVal, ...X], e.polylines) {
      const R = e.polylines.rawVal;
      e.polylines.val = [...R.slice(0, -1), O, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const i = e.points.rawVal.length, t = n[0], d = n[1], s = n[2], r = o[0], p = o[1], u = o[2];
    let k;
    if (Math.abs(s - u) < 1e-6 ? k = [[t, d, s], [r, d, s], [r, p, s], [t, p, s]] : Math.abs(d - p) < 1e-6 ? k = [[t, d, s], [r, d, s], [r, d, u], [t, d, u]] : k = [[t, d, s], [t, p, s], [t, p, u], [t, d, u]], e.points.val = [...e.points.rawVal, ...k], e.polylines) {
      const P = [i, i + 1, i + 2, i + 3, i], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), P, []];
    }
  };
  const ge = new Qe();
  ge.visible = false, w.add(ge), window.__hekatanShowAxes = (n, o, i = 12, t = 2) => {
    var _a, _b;
    for (; ge.children.length; ) {
      const P = ge.children.pop();
      (_a = P.geometry) == null ? void 0 : _a.dispose(), (_b = P.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const d = Math.min(...o) - t, s = Math.max(...o) + t, r = Math.min(...n) - t, p = Math.max(...n) + t, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", k = (P, c, h, F, X) => {
      const O = document.createElement("canvas");
      O.width = 64, O.height = 32;
      const G = O.getContext("2d");
      G.fillStyle = X, G.font = "bold 22px sans-serif", G.textAlign = "center", G.fillText(P, 32, 26);
      const R = new no(O), le = new oo({ map: R, transparent: true }), xe = new so(le);
      return xe.position.set(c, h, F), xe.scale.set(1.2, 0.6, 1), xe;
    };
    n.forEach((P, c) => {
      const h = c < u.length ? u[c] : `X${c}`, F = new he().setFromPoints([new x(P, d, 0), new x(P, s, 0), new x(P, d, 0), new x(P, d, i)]), X = new hn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), O = new Ot(F, X);
      O.computeLineDistances(), ge.add(O), ge.add(k(h, P, d - 0.5, 0, "#60a5fa")), ge.add(k(h, P, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((P, c) => {
      const h = `${c + 1}`, F = new he().setFromPoints([new x(r, P, 0), new x(p, P, 0), new x(r, P, 0), new x(r, P, i)]), X = new hn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), O = new Ot(F, X);
      O.computeLineDistances(), ge.add(O), ge.add(k(h, r - 0.5, P, 0, "#fb7185")), ge.add(k(h, p + 0.5, P, 0, "#fb7185"));
    }), ge.visible = true, g();
  }, window.__hekatanHideAxes = () => {
    ge.visible = false, g();
  };
  const ce = new Qe();
  ce.visible = false, w.add(ce);
  let Ve = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, i = 0, t = 0) => {
    var _a, _b;
    for (; ce.children.length; ) {
      const s = ce.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Ve.forEach((s) => {
      w.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Ve = [];
    const d = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, r) => {
      const p = d[r % d.length], u = o / 2, k = [new x(i - u, t - u, s), new x(i + u, t - u, s), new x(i + u, t + u, s), new x(i - u, t + u, s), new x(i - u, t - u, s)], P = new he().setFromPoints(k), c = new ht({ color: p, transparent: true, opacity: 0.55 });
      ce.add(new zt(P, c));
      const h = document.createElement("canvas");
      h.width = 128, h.height = 32;
      const F = h.getContext("2d");
      F.fillStyle = `#${p.toString(16).padStart(6, "0")}`, F.font = "bold 18px sans-serif", F.fillText(`Z = ${s} m`, 4, 22);
      const X = new no(h), O = new oo({ map: X, transparent: true }), G = new so(O);
      G.position.set(i - u - 1.5, t - u - 1.5, s), G.scale.set(2.5, 0.6, 1), ce.add(G);
      const R = new Sn(1e4, 1e4), le = new je({ visible: false, side: Tt }), xe = new qe(R, le);
      xe.position.set(0, 0, s), xe.frustumCulled = false, xe.userData = { refPlaneZ: s }, w.add(xe), Ve.push(xe);
    }), ce.visible = true, g();
  }, window.__hekatanHideRefPlanes = () => {
    ce.visible = false, Ve.forEach((n) => {
      n.visible = false;
    }), g();
  };
  const fe = new Qe();
  fe.frustumCulled = false, w.add(fe);
  const Oe = () => {
    var _a, _b, _c, _d;
    for (; fe.children.length; ) {
      const i = fe.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const i of o) {
      if (i.length !== 6) continue;
      const t = new he().setFromPoints([new x(i[0], i[1], i[2]), new x(i[3], i[4], i[5])]), d = new hn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new zt(t, d);
      s.computeLineDistances(), fe.add(s);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Oe(), g());
  });
  const Ge = new Qe();
  Ge.frustumCulled = false, w.add(Ge);
  const At = () => {
    var _a, _b, _c, _d;
    for (; Ge.children.length; ) {
      const i = Ge.children.pop();
      (_b = (_a = i.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = i.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const i of o) {
      if (!i || i.length !== 3) continue;
      const t = new qe(new rn(0.025, 12, 12), new je({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(i[0], i[1], i[2]), t.renderOrder = 996, t.scale.setScalar(Re(t.position)), Ge.add(t);
    }
  };
  L.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, At(), g());
  }), l.addEventListener("change", () => {
    Ge.children.forEach((n) => {
      n.scale.setScalar(Re(n.position));
    });
  }), window.__hekatanRenderAuxPoints = At;
  const Me = new Qe(), He = new qe(new rn(0.01, 12, 12), new je({ color: 16724804, transparent: true, opacity: 0.95 })), kt = new qe(new rn(0.015, 12, 12), new je({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  Me.add(He, kt);
  const ct = 0.08, Yt = (n, o, i) => {
    const t = new he().setFromPoints([new x(...n), new x(...o)]);
    return new zt(t, new ht({ color: i, transparent: true, opacity: 0.7 }));
  };
  Me.add(Yt([-ct, 0, 0], [ct, 0, 0], 16711680)), Me.add(Yt([0, -ct, 0], [0, ct, 0], 65280)), Me.add(Yt([0, 0, -ct], [0, 0, ct], 35071)), Me.visible = false, Me.frustumCulled = false, w.add(Me);
  const Dt = 40, $t = 2.5, xt = () => {
    if (!Me.visible) return;
    const o = f().position.distanceTo(Me.position), i = Math.max(0.05, Math.min($t, o / Dt));
    Me.scale.setScalar(i);
  }, Ht = () => {
    et.children.length !== 0 && et.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(Re(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = Ht, l.addEventListener("change", () => {
    xt(), be.visible && Ie();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = f().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / Dt));
    }
    Ht();
  }), window.__hekatanShowSnap = (n, o, i) => {
    Me.position.set(n, o, i), Me.visible = true, xt(), g();
  }, window.__hekatanHideSnap = () => {
    Me.visible = false, g();
  }, m.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(_, o);
    const i = M();
    if (i.length) {
      const t = i[0].point, d = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, d);
      if (s) Gn(s.type, s.x, s.y, s.z), Me.position.set(s.x, s.y, s.z), Me.visible = true, t.set(s.x, s.y, s.z);
      else {
        Tn();
        const P = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        P && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), Me.position.copy(t), Me.visible = true;
      }
      xt();
      const r = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (r === "select" || !r) {
        const P = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = pt(t.x, t.y, t.z, P), h = tt(t.x, t.y, t.z, P), F = nn(t.x, t.y, t.z, P);
        if (c >= 0) {
          const R = e.points.rawVal[c];
          be.position.set(R[0], R[1], R[2]), be.visible = true, Ie(), De.visible = false, $e = { kind: "pt", a: c };
        } else if (h) {
          const R = e.points.rawVal, le = e.polylines.rawVal[h.polyIdx], xe = R[le[h.segIdx]], Fe = R[le[h.segIdx + 1]];
          De.geometry.setFromPoints([new x(xe[0], xe[1], xe[2]), new x(Fe[0], Fe[1], Fe[2])]), De.visible = true, be.visible = false, $e = ((_f = (_e = e.areas) == null ? void 0 : _e.rawVal) == null ? void 0 : _f.includes(h.polyIdx)) ?? false ? { kind: "poly", a: h.polyIdx } : { kind: "seg", a: h.polyIdx, b: h.segIdx };
        } else if (F >= 0) {
          const le = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[F];
          le && (De.geometry.setFromPoints([new x(le[0], le[1], le[2]), new x(le[3], le[4], le[5])]), De.visible = true, be.visible = false, $e = { kind: "aux", a: F });
        } else De.visible = false, be.visible = false, $e = null;
        Y.style.left = n.clientX + "px", Y.style.top = n.clientY + "px", Y.style.display = "block";
        let X = t;
        if (($e == null ? void 0 : $e.kind) === "pt") {
          const R = e.points.rawVal[$e.a];
          R && (X = new x(R[0], R[1], R[2]));
        }
        const O = `X=${X.x.toFixed(2)} Y=${X.y.toFixed(2)} Z=${X.z.toFixed(2)}`;
        if ($e) {
          const R = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          Y.textContent = `${O}  \xB7  \u{1F5B1} Click \u2192 ${R[$e.kind]}`;
        } else Y.textContent = O;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = O), E.visible = false, D.visible = false, g();
        return;
      }
      if (r === "delete") {
        const P = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = tt(t.x, t.y, t.z, P), h = nn(t.x, t.y, t.z, P);
        let F = false;
        if (h >= 0) if (!c) F = true;
        else {
          const R = window.__hekatanDrawingAuxLines, xe = ((R == null ? void 0 : R.rawVal) ?? (R == null ? void 0 : R.val) ?? R ?? [])[h];
          at(t.x, t.y, t.z, xe[0], xe[1], xe[2], xe[3], xe[4], xe[5]) < c.dist && (F = true);
        }
        F ? (Ae = h, ve = -1, ae = -1, nt(h)) : c ? (ve = c.polyIdx, ae = c.segIdx, Ae = -1, Ut(c.polyIdx, c.segIdx)) : (ve = -1, ae = -1, Ae = -1, Q.visible = false), E.visible = false, D.visible = false, z(), Y.style.left = n.clientX + "px", Y.style.top = n.clientY + "px", Y.style.display = "block";
        const X = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let O = "";
        F ? O = `\u{1F5D1} l\xEDnea aux #${Ae + 1}` : c ? O = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : O = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", Y.textContent = `${X}  \xB7  ${O}`;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = X), g();
        return;
      } else Q.visible = false, ve = -1, Ae = -1;
      Y.style.left = n.clientX + "px", Y.style.top = n.clientY + "px", Y.style.display = "block";
      const p = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], u = p[p.length - 1] ?? [], k = e.points.rawVal ?? [];
      if (u.length > 0 && k[u[u.length - 1]]) {
        const P = u[u.length - 1], c = k[P];
        let h = Ee;
        if (Je = null, !h && window.__hekatanAxisSnap !== false) {
          const Be = m.getBoundingClientRect(), ft = n.clientX, lt = n.clientY, wt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Vt = new x(c[0], c[1], c[2]), ln = [["x", new x(1, 0, 0)], ["y", new x(0, 1, 0)], ["z", new x(0, 0, 1)]], Gt = (qt) => {
            const Rt = qt.clone().project(o);
            return { x: (Rt.x * 0.5 + 0.5) * Be.width + Be.left, y: (-Rt.y * 0.5 + 0.5) * Be.height + Be.top };
          };
          let Ct = null;
          for (const [qt, Rt] of ln) {
            const Jt = Gt(Vt.clone().addScaledVector(Rt, -wt)), gn = Gt(Vt.clone().addScaledVector(Rt, wt)), vn = gn.x - Jt.x, bn = gn.y - Jt.y, Co = ft - Jt.x, zo = lt - Jt.y, Fo = vn * vn + bn * bn || 1;
            let Mn = (Co * vn + zo * bn) / Fo;
            Mn = Math.max(0, Math.min(1, Mn));
            const On = Math.hypot(ft - (Jt.x + Mn * vn), lt - (Jt.y + Mn * bn));
            if (Ct === null || On < Ct.dpx) {
              const $n = b.ray, Qn = Vt.clone().sub($n.origin), Rn = Rt.dot($n.direction), jn = Rt.dot(Qn), Eo = $n.direction.dot(Qn), eo = 1 - Rn * Rn, Ao = Math.abs(eo) < 1e-6 ? -jn : (Rn * Eo - jn) / eo;
              Ct = { axis: qt, dpx: On, pt: Vt.clone().addScaledVector(Rt, Ao) };
            }
          }
          Ct && Ct.dpx <= 12 && (t.copy(Ct.pt), h = Ct.axis, Je = Ct.pt.clone());
        }
        const F = !!window.__hekatanOrthoMode;
        if (!h && F) {
          const Be = Math.abs(t.x - c[0]), ft = Math.abs(t.y - c[1]), lt = Math.abs(t.z - c[2]), wt = (_l = i[0]) == null ? void 0 : _l.object;
          let Vt = null;
          wt === Ue ? Vt = "xy" : wt === A ? Vt = "xz" : wt === W && (Vt = "yz"), Vt === "xy" ? h = Be >= ft ? "x" : "y" : Vt === "xz" ? h = Be >= lt ? "x" : "z" : Vt === "yz" ? h = ft >= lt ? "y" : "z" : h = Be >= ft && Be >= lt ? "x" : ft >= lt ? "y" : "z";
        }
        const X = window.__hekatanPolarTrack !== false;
        if (!h && X) {
          const Be = t.x - c[0], ft = t.y - c[1], lt = t.z - c[2], wt = Math.hypot(Be, ft, lt);
          if (wt > 1e-3) {
            const ln = Math.tan(6 * Math.PI / 180) * wt, Gt = Math.hypot(ft, lt), Ct = Math.hypot(Be, lt), qt = Math.hypot(Be, ft), Rt = [["x", Gt], ["y", Ct], ["z", qt]];
            Rt.sort((Jt, gn) => Jt[1] - gn[1]), Rt[0][1] <= ln && (h = Rt[0][0]);
          }
        }
        if (h) {
          const Be = c[0], ft = c[1], lt = c[2];
          h === "x" ? t.set(t.x, ft, lt) : h === "y" ? t.set(Be, t.y, lt) : t.set(Be, ft, t.z);
          const wt = !!Ee, ln = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[h];
          Ke.style.background = "rgba(15,23,42,0.92)", Ke.style.color = ln, Ke.style.border = `1.5px solid ${ln}`;
          const Gt = (_m = i[0]) == null ? void 0 : _m.object;
          let Ct = null;
          Gt === Ue ? Ct = "xy" : Gt === A ? Ct = "xz" : Gt === W && (Ct = "yz");
          const qt = Ct ? ` (plano ${Ct.toUpperCase()})` : "";
          Ke.textContent = wt ? `\u{1F512} LOCK ${h.toUpperCase()}${qt}` : `\u22A5 ORTO ${h.toUpperCase()}${qt}`, Ke.style.left = n.clientX + 20 + "px", Ke.style.top = n.clientY + 18 + "px", Ke.style.transform = "none", Ke.style.display = "block";
        } else Ee || (Ke.style.display = "none");
        const O = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), G = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, R = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        Y.textContent = `${R} | \u0394L=${O.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const le = document.getElementById("hk-coord-fixed");
        le && (le.textContent = R), E.geometry.setFromPoints([new x(c[0], c[1], c[2]), new x(t.x, t.y, t.z)]), (_n2 = E.computeLineDistances) == null ? void 0 : _n2.call(E), E.visible = true, V(c[0], c[1], c[2], t.x, t.y, t.z);
        const xe = window.__hekatanOrthoExt ?? 8, Fe = window.__hekatanShowOrthoPlanes !== false;
        st.visible = Fe, Fe || Le(null), Fe && (Ye(ke, c, "xy", xe), Ye(ze, c, "xz", xe), Ye(Xe, c, "yz", xe), ee(Ue, c, "xy", xe), ee(A, c, "xz", xe), ee(W, c, "yz", xe));
        const _e2 = Fe ? b.intersectObjects([Ue, A, W], false) : [];
        let Te = null;
        if (_e2.length > 0) {
          const Be = _e2[0].object;
          Be === Ue ? Te = "xy" : Be === A ? Te = "xz" : Be === W && (Te = "yz");
        }
        Le(Te), Te && (se.style.left = n.clientX + "px", se.style.top = n.clientY + "px"), pe.geometry.setFromPoints([new x(c[0] - xe, c[1], c[2]), new x(c[0] + xe, c[1], c[2])]), (_o2 = pe.computeLineDistances) == null ? void 0 : _o2.call(pe), J.geometry.setFromPoints([new x(c[0], c[1] - xe, c[2]), new x(c[0], c[1] + xe, c[2])]), (_p = J.computeLineDistances) == null ? void 0 : _p.call(J), Pe.geometry.setFromPoints([new x(c[0], c[1], c[2] - xe), new x(c[0], c[1], c[2] + xe)]), (_q = Pe.computeLineDistances) == null ? void 0 : _q.call(Pe), D.visible = true;
        const yt = pe.material, Pt = J.material, it = Pe.material;
        h === "x" ? (yt.opacity = 0.95, Pt.opacity = 0.1, it.opacity = 0.1) : h === "y" ? (yt.opacity = 0.1, Pt.opacity = 0.95, it.opacity = 0.1) : h === "z" ? (yt.opacity = 0.1, Pt.opacity = 0.1, it.opacity = 0.95) : (yt.opacity = 0.5, Pt.opacity = 0.5, it.opacity = 0.5);
      } else {
        const P = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        Y.textContent = P;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = P), E.visible = false, D.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(r)) {
          if (re = null, q = null, Z.style.left = n.clientX + 20 + "px", Z.style.top = n.clientY - 28 + "px", Z.style.display = "block", !B) {
            Z.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const F = document.activeElement;
            !(F && (F.tagName === "INPUT" || F.tagName === "TEXTAREA") && F !== Z) && document.activeElement !== Z && Z.focus({ preventScroll: true });
            try {
              Z.select();
            } catch {
            }
          }
        } else z();
      }
      g();
    } else Tn(), Y.style.display = "none", Me.visible = false, E.visible = false, D.visible = false, z(), g();
  }), L.derive(() => {
    e.gridTarget && (ps(a, { position: new x(...e.gridTarget.val.position), quaternion: new to().setFromEuler(new ao(...e.gridTarget.val.rotation)) }, g), K.position.set(...e.gridTarget.val.position), K.quaternion.setFromEuler(new ao(...e.gridTarget.val.rotation)), K.updateMatrixWorld());
  }), L.derive(() => {
    U.geometry.setAttribute("position", new Ft(e.points.val.flat(), 3)), U.geometry.computeBoundingSphere();
  }), L.derive(() => {
    const n = 0.05 * S * 0.5 * y.val;
    b.params.Points.threshold = 0.4 * n;
  }), L.derive(() => {
    var _a;
    const n = e.points.val ?? [], i = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of i) {
      const [r, p, u] = n[s];
      t.push(r, p, u);
    }
    const d = new he();
    d.setAttribute("position", new Ft(t, 3)), ne.geometry.dispose(), ne.geometry = d;
  });
  let on = false, Nt = 0;
  m.addEventListener("pointerdown", () => {
    on = true;
  }), m.addEventListener("pointerup", () => {
    on = false;
  }), m.addEventListener("pointermove", () => {
    on && Nt++;
  });
  const ut = document.createElement("div");
  ut.id = "hk-window-select", ut.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(ut);
  let bt = null, Qt = false, _t = null;
  const cn = (n, o, i, t, d) => {
    d ? (ut.style.borderColor = "#34d399", ut.style.borderStyle = "dashed", ut.style.background = "rgba(52, 211, 153, 0.10)") : (ut.style.borderColor = "#22d3ee", ut.style.borderStyle = "solid", ut.style.background = "rgba(34, 211, 238, 0.10)"), ut.style.left = Math.min(n, i) + "px", ut.style.top = Math.min(o, t) + "px", ut.style.width = Math.abs(i - n) + "px", ut.style.height = Math.abs(t - o) + "px", ut.style.display = "block";
  }, xn = (n, o, i, t, d) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, i), r = Math.max(n, i), p = Math.min(o, t), u = Math.max(o, t), k = i < n, P = m.getBoundingClientRect(), c = f();
    c.updateMatrixWorld();
    const h = (_e) => {
      const Te = new x(_e[0], _e[1], _e[2]);
      return Te.project(c), { x: P.left + (Te.x * 0.5 + 0.5) * P.width, y: P.top + (-Te.y * 0.5 + 0.5) * P.height };
    }, F = (_e) => _e.x >= s && _e.x <= r && _e.y >= p && _e.y <= u, X = (_e, Te) => !(_e.x < s && Te.x < s || _e.x > r && Te.x > r || _e.y < p && Te.y < p || _e.y > u && Te.y > u);
    d || we.clear();
    let O = 0;
    const G = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let _e = 0; _e < G.length; _e++) {
      const Te = G[_e];
      Te && F(h(Te)) && (we.add(`pt:${_e}`), O++);
    }
    const R = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], le = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let _e = 0; _e < R.length; _e++) {
      const Te = R[_e], yt = le.includes(_e);
      let Pt = false;
      for (let it = 0; it < Te.length - 1; it++) {
        const Be = G[Te[it]], ft = G[Te[it + 1]];
        if (!Be || !ft) continue;
        const lt = h(Be), wt = h(ft);
        if (k ? F(lt) || F(wt) || X(lt, wt) : F(lt) && F(wt)) {
          if (yt) {
            Pt = true;
            break;
          }
          we.add(`seg:${_e}:${it}`), O++;
        }
      }
      yt && Pt && (we.add(`poly:${_e}`), O++);
    }
    const Fe = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let _e = 0; _e < Fe.length; _e++) {
      const Te = Fe[_e];
      if (!Te || Te.length !== 6) continue;
      const yt = h([Te[0], Te[1], Te[2]]), Pt = h([Te[3], Te[4], Te[5]]);
      (k ? F(yt) || F(Pt) || X(yt, Pt) : F(yt) && F(Pt)) && (we.add(`aux:${_e}`), O++);
    }
    Ce(), me(`${k ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${O} item(s) ${d ? "agregados a" : "\u2192"} selecci\xF3n (total ${we.size})`), ut.style.display = "none";
  }, sn = () => {
    _t && (_t = null, ut.style.display = "none", me("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = sn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && _t && sn();
  });
  const dn = () => {
    var _a, _b, _c, _d;
    if (we.size === 0) return false;
    const n = [...we], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], i = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], d = window.__hekatanDrawingAuxLines, s = (d == null ? void 0 : d.rawVal) ?? [], r = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Set();
    for (const X of n) {
      const [O, ...G] = X.split(":");
      if (O === "pt") r.add(+G[0]);
      else if (O === "poly") p.add(+G[0]);
      else if (O === "seg") {
        const R = +G[0], le = +G[1];
        u.has(R) || u.set(R, /* @__PURE__ */ new Set()), u.get(R).add(le);
      } else O === "aux" && k.add(+G[0]);
    }
    let P = 0, c = [], h = [];
    const F = /* @__PURE__ */ new Map();
    for (let X = 0; X < i.length; X++) {
      if (p.has(X)) {
        P++;
        continue;
      }
      F.set(X, c.length);
      const O = u.get(X);
      if (O && O.size > 0) {
        let G = [];
        for (let R = 0; R < i[X].length; R++) G.push(i[X][R]), R < i[X].length - 1 && O.has(R) && (G.length >= 2 && c.push(G), G = [], P++);
        (G.length >= 2 || G.length === 1) && c.push(G);
      } else c.push([...i[X]]);
    }
    if (r.size > 0) {
      const X = [], O = /* @__PURE__ */ new Map();
      for (let R = 0; R < o.length; R++) {
        if (r.has(R)) {
          P++;
          continue;
        }
        O.set(R, X.length), X.push([...o[R]]);
      }
      const G = [];
      for (const R of c) {
        let le = [];
        for (const xe of R) {
          const Fe = O.get(xe);
          Fe === void 0 ? (le.length >= 2 && G.push(le), le = []) : le.push(Fe);
        }
        le.length >= 2 && G.push(le);
      }
      c = G, e.points.val = X;
    }
    for (const X of t) {
      const O = F.get(X);
      O !== void 0 && O < c.length && h.push(O);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = h), k.size > 0 && d) {
      const X = s.filter((O, G) => !k.has(G));
      "val" in d ? d.val = X : window.__hekatanDrawingAuxLines = X, P += k.size;
    }
    we.clear(), Ce();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return me(`\u{1F5D1} ${P} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = dn, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, i = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !i || we.size !== 0 && (n.preventDefault(), dn());
  });
  const Mt = document.createElement("div");
  Mt.id = "hk-properties-pane";
  const pn = "hk-props-pane-pos";
  let Wt = null;
  try {
    const n = localStorage.getItem(pn);
    n && (Wt = JSON.parse(n));
  } catch {
  }
  Mt.style.cssText = ["position:fixed", Wt ? `left:${Wt.left}px` : "left:50%", Wt ? `top:${Wt.top}px` : "top:8px", Wt ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Mt);
  const Vn = () => {
    const n = Mt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, i = 0, t = 0, d = 0, s = 0;
    n.addEventListener("mousedown", (r) => {
      o = true, i = r.clientX, t = r.clientY;
      const p = Mt.getBoundingClientRect();
      d = p.left, s = p.top, Mt.style.transform = "none", Mt.style.left = `${d}px`, Mt.style.top = `${s}px`, r.preventDefault();
    }), window.addEventListener("mousemove", (r) => {
      if (!o) return;
      const p = r.clientX - i, u = r.clientY - t, k = Math.max(0, Math.min(window.innerWidth - 80, d + p)), P = Math.max(0, Math.min(window.innerHeight - 40, s + u));
      Mt.style.left = `${k}px`, Mt.style.top = `${P}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(pn, JSON.stringify({ left: parseFloat(Mt.style.left), top: parseFloat(Mt.style.top) }));
        } catch {
        }
      }
    });
  }, $ = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let We = null;
  const mt = (n, o, i, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: i, value: t } }));
  }, So = () => {
    if (We && (We.dispose(), We = null), we.size === 0) {
      Mt.style.display = "none";
      return;
    }
    const n = [...we], o = n.filter((c) => c.startsWith("pt:")), i = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), d = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, r = i.length > 0, p = t.length > 0, u = !s && !r && !p, k = [];
    o.length && k.push(`\u{1F535} ${o.length} nodo(s)`), i.length && k.push(`\u{1F4CF} ${i.length} segmento(s)`), t.length && k.push(`\u25AD ${t.length} \xE1rea(s)`), d.length && k.push(`\u250A ${d.length} aux`);
    const P = `\u{1F3AF} ${we.size} item(s) \u2014 ${k.join(", ")}`;
    if (We = new xo({ container: Mt, title: P }), s) {
      const c = We.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding($, "Ux"), c.addBinding($, "Uy"), c.addBinding($, "Uz"), c.addBinding($, "Rx"), c.addBinding($, "Ry"), c.addBinding($, "Rz");
      const h = We.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      h.addBinding($, "Kx", { label: "Kx", min: 0, step: 100 }), h.addBinding($, "Ky", { label: "Ky", min: 0, step: 100 }), h.addBinding($, "Kz", { label: "Kz", min: 0, step: 100 }), h.addBinding($, "Krx", { label: "Krx", min: 0, step: 1e3 }), h.addBinding($, "Kry", { label: "Kry", min: 0, step: 1e3 }), h.addBinding($, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const F = We.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      F.addBinding($, "Fx", { step: 0.1 }), F.addBinding($, "Fy", { step: 0.1 }), F.addBinding($, "Fz", { step: 0.1 }), F.addBinding($, "Mx", { step: 0.1 }), F.addBinding($, "My", { step: 0.1 }), F.addBinding($, "Mz", { step: 0.1 }), We.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding($, "mass", { label: "m", min: 0, step: 1 }), We.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding($, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), We.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let G = 0;
        const R = [$.Ux, $.Uy, $.Uz, $.Rx, $.Ry, $.Rz];
        R.some((Fe) => Fe) && (mt("nodes", o, "supports", R), G++);
        const le = [$.Fx, $.Fy, $.Fz, $.Mx, $.My, $.Mz];
        le.some((Fe) => Fe !== 0) && (mt("nodes", o, "loads", le), G++);
        const xe = [$.Kx, $.Ky, $.Kz, $.Krx, $.Kry, $.Krz];
        if (xe.some((Fe) => Fe !== 0) && (mt("nodes", o, "springs", xe), G++), $.mass !== 0 && (mt("nodes", o, "mass", $.mass), G++), $.diaphragm !== "Ninguno" && (mt("nodes", o, "diaphragm", $.diaphragm), G++), G === 0) {
          me("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let Fe = document.getElementById("hk-prop-toast");
          Fe || (Fe = document.createElement("div"), Fe.id = "hk-prop-toast", Fe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(Fe)), Fe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", Fe.style.background = "rgba(217,119,6,0.97)", Fe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            Fe && (Fe.style.opacity = "0");
          }, 3200);
        } else me(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (r) {
      const c = We.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${i.length} seg(s)` });
      c.addBinding($, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding($, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const h = We.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      h.addBinding($, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), h.addBinding($, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), h.addBinding($, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), h.addBinding($, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), We.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding($, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), We.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding($, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const O = We.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      O.addBinding($, "relMxI", { label: "Mx I" }), O.addBinding($, "relMyI", { label: "My I" }), O.addBinding($, "relMzI", { label: "Mz I" });
      const G = We.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      G.addBinding($, "relMxJ", { label: "Mx J" }), G.addBinding($, "relMyJ", { label: "My J" }), G.addBinding($, "relMzJ", { label: "Mz J" }), We.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding($, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const le = We.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      le.addBinding($, "LKx", { label: "LKx", min: 0, step: 100 }), le.addBinding($, "LKy", { label: "LKy", min: 0, step: 100 }), le.addBinding($, "LKz", { label: "LKz", min: 0, step: 100 });
      const xe = We.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      xe.addBinding($, "qx", { step: 0.1 }), xe.addBinding($, "qy", { step: 0.1 }), xe.addBinding($, "qz", { step: 0.1 }), We.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding($, "massPerM", { label: "m/L", min: 0, step: 1 }), We.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        mt("segs", i, "section", $.section), mt("segs", i, "material", $.material_frame);
        const _e = { A: $.A_mod, Iz: $.Iz_mod, Iy: $.Iy_mod, J: $.J_mod };
        (_e.A !== 1 || _e.Iz !== 1 || _e.Iy !== 1 || _e.J !== 1) && mt("segs", i, "modifiers", _e), $.insertionPoint !== "10 \u2014 Centroid" && mt("segs", i, "insertionPoint", $.insertionPoint), $.beta !== 0 && mt("segs", i, "beta", $.beta);
        const Te = [$.relMxI, $.relMyI, $.relMzI], yt = [$.relMxJ, $.relMyJ, $.relMzJ];
        (Te.some((Be) => Be) || yt.some((Be) => Be)) && mt("segs", i, "releases", { i: Te, j: yt }), $.hinges !== "None" && mt("segs", i, "hinges", $.hinges);
        const Pt = [$.LKx, $.LKy, $.LKz];
        Pt.some((Be) => Be !== 0) && mt("segs", i, "lineSprings", Pt);
        const it = [$.qx, $.qy, $.qz];
        it.some((Be) => Be !== 0) && mt("segs", i, "distLoad", it), $.massPerM !== 0 && mt("segs", i, "massPerM", $.massPerM), me(`\u2713 Propiedades aplicadas a ${i.length} segmento(s)`);
      });
    }
    if (p) {
      const c = We.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding($, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding($, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding($, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), We.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding($, "surfLoad", { label: "q", step: 0.1 }), We.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        mt("areas", t, "shellType", $.shellType), mt("areas", t, "thickness", $.thickness), mt("areas", t, "material", $.material_shell), $.surfLoad !== 0 && mt("areas", t, "surfLoad", $.surfLoad), me(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (u) {
      const c = We.addFolder({ title: "\u2139 Selecci\xF3n" }), h = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(h, "msg", { readonly: true, label: "" });
    }
    We.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      we.clear(), Ce();
    }), Mt.style.display = "block", Vn();
  };
  window.__hekatanRefreshPropsPane = So;
  let an = null, yn = false;
  m.addEventListener("pointerdown", (n) => {
    n.button === 2 && (an = { x: n.clientX, y: n.clientY }, yn = false);
  }), m.addEventListener("pointermove", (n) => {
    if (an && n.buttons & 2 && !yn) {
      const o = n.clientX - an.x, i = n.clientY - an.y;
      Math.hypot(o, i) > 8 && (yn = true);
    }
  }), m.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = an !== null && !yn;
      an = null;
      const i = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, i) return;
      if (o) {
        if (_t ? sn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), we.size > 0 && (we.clear(), Ce()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, d = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        d && d !== "select" && d !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), me(`\u238B Cancelado \u2014 tool '${d}' cerrado, volv\xE9s a Seleccionar`)) : me("\u238B Cancelado (click derecho)");
      }
    }
  }), m.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), m.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (bt = { x: n.clientX, y: n.clientY }, Qt = false);
  }), m.addEventListener("pointermove", (n) => {
    if (_t && n.buttons === 0) {
      const s = n.clientX < _t.x;
      cn(_t.x, _t.y, n.clientX, n.clientY, s);
      return;
    }
    if (!bt) return;
    const o = n.clientX - bt.x, i = n.clientY - bt.y, t = Math.hypot(o, i);
    if (!Qt && t < 8) return;
    Qt = true;
    const d = n.clientX < bt.x;
    cn(bt.x, bt.y, n.clientX, n.clientY, d);
  }), m.addEventListener("pointerup", (n) => {
    if (!bt) return;
    if (!Qt) {
      bt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    xn(bt.x, bt.y, n.clientX, n.clientY, o), bt = null, Qt = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Kt = new Qe();
  Kt.visible = false, Kt.frustumCulled = false, w.add(Kt);
  const ko = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, Gn = (n, o, i, t) => {
    var _a, _b, _c, _d;
    for (; Kt.children.length; ) {
      const p = Kt.children.pop();
      (_b = (_a = p.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = p.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const d = ko[n] ?? 16777215, s = 0.05, r = new he().setFromPoints([new x(o - s, i - s, t), new x(o + s, i - s, t), new x(o + s, i - s, t), new x(o + s, i + s, t), new x(o + s, i + s, t), new x(o - s, i + s, t), new x(o - s, i + s, t), new x(o - s, i - s, t)]);
    Kt.add(new Ot(r, new ht({ color: d, linewidth: 2 }))), Kt.position.set(0, 0, 0), Kt.visible = true;
  }, Tn = () => {
    Kt.visible = false;
  }, _o = (n, o, i, t) => {
    var _a;
    const d = window.__hekatanOsnap, s = e.points.rawVal, r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let p = null;
    const u = (c, h, F, X) => {
      const O = Math.hypot(h - n, F - o, X - i);
      O > t || (!p || O < p.d) && (p = { type: c, x: h, y: F, z: X, d: O });
    };
    (d.node || d.end) && s.forEach((c) => {
      d.node && u("node", c[0], c[1], c[2]);
    });
    for (const c of r) if (!(c.length < 2)) for (let h = 0; h < c.length - 1; h++) {
      const F = s[c[h]], X = s[c[h + 1]];
      if (!(!F || !X) && (d.end && (u("end", F[0], F[1], F[2]), u("end", X[0], X[1], X[2])), d.mid && u("mid", (F[0] + X[0]) / 2, (F[1] + X[1]) / 2, (F[2] + X[2]) / 2), d.nea || d.per)) {
        const O = X[0] - F[0], G = X[1] - F[1], R = X[2] - F[2], le = O * O + G * G + R * R;
        if (le < 1e-12) continue;
        const xe = Math.max(0, Math.min(1, ((n - F[0]) * O + (o - F[1]) * G + (i - F[2]) * R) / le)), Fe = F[0] + xe * O, _e = F[1] + xe * G, Te = F[2] + xe * R;
        d.nea && u("nea", Fe, _e, Te), d.per && u("per", Fe, _e, Te);
      }
    }
    const k = window.__hekatanDrawingAuxLines, P = (k == null ? void 0 : k.rawVal) ?? (k == null ? void 0 : k.val) ?? k ?? [];
    for (const c of P) {
      if (c.length !== 6) continue;
      const h = [c[0], c[1], c[2]], F = [c[3], c[4], c[5]];
      if (d.end && (u("end", h[0], h[1], h[2]), u("end", F[0], F[1], F[2])), d.mid && u("mid", (h[0] + F[0]) / 2, (h[1] + F[1]) / 2, (h[2] + F[2]) / 2), d.nea || d.per) {
        const X = F[0] - h[0], O = F[1] - h[1], G = F[2] - h[2], R = X * X + O * O + G * G;
        if (R < 1e-12) continue;
        const le = Math.max(0, Math.min(1, ((n - h[0]) * X + (o - h[1]) * O + (i - h[2]) * G) / R)), xe = h[0] + le * X, Fe = h[1] + le * O, _e = h[2] + le * G;
        d.nea && u("nea", xe, Fe, _e), d.per && u("per", xe, Fe, _e);
      }
    }
    return p ? { type: p.type, x: p.x, y: p.y, z: p.z } : null;
  };
  window.__hekatanOsnapCompute = _o, window.__hekatanOsnapShow = Gn, window.__hekatanOsnapHide = Tn;
  let Ze = [], St = 0;
  const un = document.createElement("div");
  un.id = "hk-cad-status", un.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", un.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(un);
  const Po = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), Ee && n.push(`\u{1F512} LOCK ${Ee.toUpperCase()}`);
    const i = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(i) > 1e-3 && n.push(`Cota Z=${i}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, me = (n) => {
    const o = n + Po();
    un.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    me(o);
  }, window.__hekatanCadResetPending = () => {
    Ze = [], me("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const fn = [], jt = () => {
    var _a, _b;
    fn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), fn.length > 100 && fn.shift();
  }, qn = () => {
    var _a;
    const n = fn.pop();
    if (!n) {
      me("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ze = [], E.visible = false, D.visible = false, z(), me(`\u21B6 Undo \u2014 ${fn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    g();
  };
  window.__hekatanPushUndo = jt, window.__hekatanUndo = qn, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, i = o == null ? void 0 : o.tagName;
      if ((i === "INPUT" || i === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), qn();
    }
  }, { capture: true });
  const Jn = () => {
    if (Ze = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    Ee = null, Et(), E.visible = false, D.visible = false, z(), me("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), g();
  };
  window.__hekatanFinalizeDraw = Jn, m.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x;
    if (Nt > 5) {
      Nt = 0;
      return;
    }
    Nt = 0;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(_, o);
    const i = M();
    if (!i.length) return;
    let t = i[0].point;
    (n.ctrlKey || n.metaKey) && (t = new x(Math.round(i[0].point.x), Math.round(i[0].point.y), Math.round(i[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], r = s[s.length - 1] ?? [], p = e.points.rawVal ?? [];
      if (r.length > 0) {
        const u = p[r[r.length - 1]];
        if (u) {
          const k = !!window.__hekatanOrthoMode;
          let P = Ee;
          if (!P && k) {
            const c = Math.abs(t.x - u[0]), h = Math.abs(t.y - u[1]), F = Math.abs(t.z - u[2]);
            P = c >= h && c >= F ? "x" : h >= F ? "y" : "z";
          }
          P === "x" ? t = new x(t.x, u[1], u[2]) : P === "y" ? t = new x(u[0], t.y, u[2]) : P === "z" && (t = new x(u[0], u[1], t.z));
        }
      }
    }
    if (Je) t = Je.clone(), me(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, r = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (r) t = new x(r.x, r.y, r.z), me(`\u{1F3AF} Snap [${r.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const p = window.__hekatanSnapEnabled !== false, u = window.__hekatanSnap2D ?? 0;
        p && u > 0 && (t = new x(Math.round(t.x / u) * u, Math.round(t.y / u) * u, Math.round(t.z / u) * u));
      }
    }
    const d = ((_e = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e.tool) ?? "select";
    if (d === "select" || d === "none" || !d) {
      if ($e) {
        _t && sn();
        const { kind: s, a: r, b: p } = $e, u = p !== void 0 ? `${s}:${r}:${p}` : `${s}:${r}`;
        n.ctrlKey || n.metaKey || n.shiftKey || we.clear(), we.has(u) ? we.delete(u) : we.add(u), Ce(), me(`\u2713 Seleccionados ${we.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, r = n.clientX, p = n.clientY;
        _t ? (xn(_t.x, _t.y, r, p, s), _t = null) : s || (_t = { x: r, y: p }, me("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), cn(r, p, r + 1, p + 1, false));
      }
      return;
    }
    if (d === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], me(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const r = s.mode === "number", p = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], r);
      me(`\u2713 Eje "${p}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (d === "delete") {
      if (Ae >= 0) {
        const s = window.__hekatanDrawingAuxLines, r = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], p = Ae;
        if (p >= 0 && p < r.length) {
          jt();
          const u = r.slice(0, p).concat(r.slice(p + 1));
          s && typeof s == "object" && "val" in s ? s.val = u : window.__hekatanDrawingAuxLines = u, me(`\u{1F5D1} L\xEDnea auxiliar #${p + 1} borrada`), Ae = -1, Q.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (ve >= 0) {
        const s = ve, r = ae;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (Lt(s), me(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : r >= 0 ? (Ne(s, r), me(`\u{1F5D1} Segmento ${r + 1} de polil\xEDnea #${s + 1} borrado`)) : (Lt(s), me(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else me("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (d === "circle") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        me("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, r] = Ze, p = Math.hypot(r[0] - s[0], r[1] - s[1], r[2] - s[2]);
      Math.abs(r[0] - s[0]);
      const u = Math.abs(r[1] - s[1]), P = Math.abs(r[2] - s[2]) < 1e-3 ? "xy" : u < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], p, c, P), me(`\u2713 C\xEDrculo dibujado en ${P.toUpperCase()} \u2014 r=${p.toFixed(2)}m, ${c} segmentos`), Ze = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (d === "arc") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        me("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ze.length === 2) {
        me("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, r, p] = Ze, u = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, r, p, u), me(`\u2713 Arco dibujado \u2014 ${u} segmentos`), Ze = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (d === "rect") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        me("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, r] = Ze;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, r), me(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${r[0].toFixed(1)},${r[1].toFixed(1)})`), Ze = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (d === "col") {
      jt();
      const s = t.z, r = St && St > 0 ? St : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + r]];
      const p = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [u - 2, u - 1], []], St = 0, me(`\u258C Columna creada \u2014 h=${r.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_p = window.__hekatanRebuild) == null ? void 0 : _p.call(window);
      } catch {
      }
      return;
    }
    if (d === "wall") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        me("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, r] = Ze, p = St && St > 0 ? St : 3;
      jt();
      const u = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [r[0], r[1], r[2]], [r[0], r[1], r[2] + p], [s[0], s[1], s[2] + p]];
      const k = e.polylines.rawVal;
      if (k.length - 1, e.polylines.val = [...k.slice(0, -1), ...k[k.length - 1].length > 0 ? [k[k.length - 1]] : [], [u, u + 1, u + 2, u + 3, u], []], e.areas) {
        const P = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, P];
      }
      me(`\u25A5 Pared Q4 creada \u2014 h=${p.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ze = [], St = 0;
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (d === "extp") {
      jt();
      const s = St && St > 0 ? St : 3, r = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, r], [t.x, t.y, r + s]];
      const p = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [u - 2, u - 1], []], St = 0, me(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (d === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, r = tt(t.x, t.y, t.z, s);
      if (!r) {
        me("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const p = e.polylines.rawVal, u = e.points.rawVal, k = p[r.polyIdx], P = u[k[r.segIdx]], c = u[k[r.segIdx + 1]];
      if (!P || !c) {
        me("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const h = St && St > 0 ? St : 3;
      jt();
      const F = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [P[0], P[1], P[2]], [c[0], c[1], c[2]], [c[0], c[1], c[2] + h], [P[0], P[1], P[2] + h]];
      const X = e.polylines.rawVal;
      if (e.polylines.val = [...X.slice(0, -1), ...X[X.length - 1].length > 0 ? [X[X.length - 1]] : [], [F, F + 1, F + 2, F + 3, F], []], e.areas) {
        const O = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, O];
      }
      St = 0, me(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${h.toFixed(2)}m`);
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (d === "auxp") {
      const s = window.__hekatanDrawingAuxPoints;
      if (s) {
        const r = s.rawVal ?? s.val ?? [];
        s.val = [...r, [t.x, t.y, t.z]];
      }
      me(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (d === "aux") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        me("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, r] = Ze, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const h = p.rawVal ?? p.val ?? [];
        p.val = [...h, [s[0], s[1], s[2], r[0], r[1], r[2]]];
      }
      const u = r[0] - s[0], k = r[1] - s[1], P = r[2] - s[2], c = Math.sqrt(u * u + k * k + P * P);
      me(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Ze = [];
      return;
    }
    if (d === "extend") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        me("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, r] = Ze, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const u = p.rawVal ?? p.val ?? [];
        p.val = [...u, [s[0], s[1], s[2], r[0], r[1], r[2]]];
      }
      me("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ze = [];
      return;
    }
    if (d === "chaflan") {
      if (Ze.push([t.x, t.y, t.z]), Ze.length === 1) {
        me("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, r] = Ze, p = window.__hekatanChaflanR ?? 1, u = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_t2 = window.__hekatanDrawSlabChaflan) == null ? void 0 : _t2.call(window, s, r, p, u, 6);
      const k = Math.abs(r[0] - s[0]).toFixed(1), P = Math.abs(r[1] - s[1]).toFixed(1);
      me(`\u2713 Losa con chaflanes dibujada \u2014 ${k}\xD7${P}m, r=${p}m, ${u} seg/chafl\xE1n`), Ze = [];
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (B = false, jt(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, r = s.length - 1, p = s[r] ?? [];
      if (d === "line" && p.length === 2) {
        e.polylines.val = [...s, []], me("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
        } catch {
        }
        return;
      }
      if (d === "area" && p.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...p, p[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, r]), me("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
    }
    if (d === "node") me(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (d === "line") me("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (d === "polyline") me("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (d === "area") {
      const s = ((_x = e.polylines) == null ? void 0 : _x.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      me(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), m.addEventListener("contextmenu", () => {
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), m.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(_, o);
    const i = M();
    if (ue.geometry.deleteAttribute("position"), i.length) {
      let t = i[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const r = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], p = r[r.length - 1] ?? [], u = e.points.rawVal ?? [];
        if (p.length > 0) {
          const k = u[p[p.length - 1]];
          if (k) {
            const P = !!window.__hekatanOrthoMode;
            let c = Ee;
            if (!c && P) {
              const h = Math.abs(t.x - k[0]), F = Math.abs(t.y - k[1]), X = Math.abs(t.z - k[2]);
              c = h >= F && h >= X ? "x" : F >= X ? "y" : "z";
            }
            c === "x" ? t.set(t.x, k[1], k[2]) : c === "y" ? t.set(k[0], t.y, k[2]) : c === "z" && t.set(k[0], k[1], t.z);
          }
        }
      }
      const d = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, d);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const r = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0.5;
        r && p > 0 && (t.x = Math.round(t.x / p) * p, t.y = Math.round(t.y / p) * p, t.z = Math.round(t.z / p) * p);
      }
      ue.geometry.setAttribute("position", new Ft(t.toArray(), 3));
    }
    g();
  }), m.addEventListener("pointermove", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(_, o);
    let i = false;
    const t = b.intersectObject(U), d = M();
    if (t.length && d.length) {
      const s = new x(...e.points.rawVal[t[0].index]), r = new x(...d[0].point), p = s.sub(r), u = (_a = d[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(K.matrixWorld), Math.abs(p.dot(u)) < 1e-4 && (i = true);
    }
    ue.visible = !i;
  });
  let Ln = false, In;
  m.addEventListener("pointermove", (n) => {
    var _a;
    if (!Nt) return;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(_, o);
    let i = false;
    const t = b.intersectObject(U), d = M();
    if (t.length && d.length) {
      const r = new x(...e.points.rawVal[t[0].index]), p = new x(...d[0].point), u = r.sub(p), k = (_a = d[0].face) == null ? void 0 : _a.normal;
      k.transformDirection(K.matrixWorld), Math.abs(u.dot(k)) < 1e-4 && (i = true);
    }
    if (i && Nt < 5 && (Ln = true, l.enabled = false, In = t[0].index), !Ln || Nt % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (In !== void 0) {
      let r = d[0].point;
      (n.ctrlKey || n.metaKey) && (r = new x(Math.round(r.x), Math.round(r.y), Math.round(r.z))), s[In] = r.toArray();
    }
    e.points.val = s;
  }), m.addEventListener("pointerup", () => {
    l.enabled = true, Ln = false;
  }), m.addEventListener("contextmenu", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    b.setFromCamera(_, o);
    let i = false;
    const t = b.intersectObject(U), d = M();
    if (t.length && d.length) {
      const p = new x(...e.points.rawVal[t[0].index]), u = new x(...d[0].point), k = p.sub(u), P = (_a = d[0].face) == null ? void 0 : _a.normal;
      P.transformDirection(K.matrixWorld), Math.abs(k.dot(P)) < 1e-4 && (i = true);
    }
    if (!i) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const r = e.polylines.rawVal.map((p) => p.filter((u) => u !== t[0].index)).map((p) => p.map((u) => u > t[0].index ? u - 1 : u)).filter((p) => p.length);
    r.push([]), e.polylines.val = r;
  });
}
function ps(e, a, w) {
  const S = Math.round(14.999999999999998), y = { position: e.position.clone(), quaternion: e.quaternion.clone() }, m = setInterval(b, 1e3 / 30);
  let g = 0;
  function b() {
    g++;
    const _ = g / S;
    e.position.lerpVectors(y.position, a.position, _), e.quaternion.slerpQuaternions(y.quaternion, a.quaternion, _), w && w(), g == S && clearInterval(m);
  }
}
class Mo {
  constructor(a, w = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(a, w);
  }
  set(a) {
    return a.isLut === true && this.copy(a), this;
  }
  setMin(a) {
    return this.minV = a, this;
  }
  setMax(a) {
    return this.maxV = a, this;
  }
  setColorMap(a, w = 32) {
    this.map = Dn[a] || Dn.rainbow, this.n = w;
    const f = 1 / this.n, l = new Bt(), S = new Bt();
    this.lut.length = 0, this.lut.push(new Bt(this.map[0][1]));
    for (let y = 1; y < w; y++) {
      const m = y * f;
      for (let g = 0; g < this.map.length - 1; g++) if (m > this.map[g][0] && m <= this.map[g + 1][0]) {
        const b = this.map[g][0], _ = this.map[g + 1][0];
        l.setHex(this.map[g][1], kn), S.setHex(this.map[g + 1][1], kn);
        const v = new Bt().lerpColors(l, S, (m - b) / (_ - b));
        this.lut.push(v);
      }
    }
    return this.lut.push(new Bt(this.map[this.map.length - 1][1])), this;
  }
  copy(a) {
    return this.lut = a.lut, this.map = a.map, this.n = a.n, this.minV = a.minV, this.maxV = a.maxV, this;
  }
  getColor(a) {
    a = $o.clamp(a, this.minV, this.maxV), a = (a - this.minV) / (this.maxV - this.minV);
    const w = Math.round(a * this.n);
    return this.lut[w];
  }
  addColorMap(a, w) {
    return Dn[a] = w, this;
  }
  createCanvas() {
    const a = document.createElement("canvas");
    return a.width = 1, a.height = this.n, this.updateCanvas(a), a;
  }
  updateCanvas(a) {
    const w = a.getContext("2d", { alpha: false }), f = w.getImageData(0, 0, 1, this.n), l = f.data;
    let S = 0;
    const y = 1 / this.n, m = new Bt(), g = new Bt(), b = new Bt();
    for (let _ = 1; _ >= 0; _ -= y) for (let v = this.map.length - 1; v >= 0; v--) if (_ < this.map[v][0] && _ >= this.map[v - 1][0]) {
      const K = this.map[v - 1][0], te = this.map[v][0];
      m.setHex(this.map[v - 1][1], kn), g.setHex(this.map[v][1], kn), b.lerpColors(m, g, (_ - K) / (te - K)), l[S * 4] = Math.round(b.r * 255), l[S * 4 + 1] = Math.round(b.g * 255), l[S * 4 + 2] = Math.round(b.b * 255), l[S * 4 + 3] = 255, S += 1;
    }
    return w.putImageData(f, 0, 0), a;
  }
}
const Dn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, mn = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function us(e) {
  e = Math.max(0, Math.min(1, e));
  for (let w = 0; w < mn.length - 1; w++) {
    const [f, l, S, y] = mn[w], [m, g, b, _] = mn[w + 1];
    if (e <= m) {
      const v = (e - f) / (m - f);
      return [l + (g - l) * v, S + (b - S) * v, y + (_ - y) * v];
    }
  }
  const a = mn[mn.length - 1];
  return [a[1], a[2], a[3]];
}
function fs() {
  const a = new Uint8Array(1024);
  for (let f = 0; f < 256; f++) {
    const l = f / 255, [S, y, m] = us(l);
    a[f * 4 + 0] = S, a[f * 4 + 1] = y, a[f * 4 + 2] = m, a[f * 4 + 3] = 255;
  }
  const w = new Xo(a, 256, 1, Yo);
  return w.minFilter = io, w.magFilter = io, w.wrapS = lo, w.wrapT = lo, w.needsUpdate = true, w;
}
function hs(e, a, w) {
  new Mo();
  const f = fs(), l = new Ro({ uniforms: { cmap: { value: f }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Tt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), S = new qe(new he(), l);
  return S.renderOrder = -1, S.frustumCulled = false, S.userData.isShellArea = true, S.name = "__hekatan_shell_colormap", L.derive(() => {
    S.geometry.setAttribute("position", new Ft(e.val.flat(), 3));
    const y = [];
    for (const M of a.val) M.length === 3 ? y.push(M[0], M[1], M[2]) : M.length === 4 && (y.push(M[0], M[1], M[2]), y.push(M[0], M[2], M[3]));
    S.geometry.setIndex(new Bo(y, 1));
    const m = w.val.filter((M) => Number.isFinite(M));
    let g, b;
    const _ = Wn.val;
    if (_ ? (b = _[0], g = _[1]) : (g = m.length ? Math.max(...m) : 1, b = m.length ? Math.min(...m) : 0, b >= 0 && g > 0 && (b = 0)), g === b) {
      const M = Math.max(Math.abs(g) * 1e-6, 1e-9);
      g += M, b -= M;
    }
    const v = _ && _[0] > _[1], K = Math.min(b, g), te = Math.max(b, g), de = te - K, ie = new Float32Array(w.val.length);
    for (let M = 0; M < w.val.length; M++) {
      const U = w.val[M];
      if (!Number.isFinite(U)) {
        ie[M] = -1;
        continue;
      }
      const ne = ((v ? te + K - U : U) - K) / de;
      ie[M] = Math.max(0, Math.min(1, ne));
    }
    S.geometry.setAttribute("scalar", new ot(ie, 1));
  }), S;
}
function ms(e, a, w, f) {
  const l = hs(w, e.elements, f);
  return L.derive(() => {
    l.visible = a.shellResults.val != "none";
  }), l;
}
const ws = 6, Nn = 10, xs = 0.012;
function ys(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function gs(e, a, w, f) {
  if (!w && !f) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && w) {
    const S = w[e];
    if (S && S.has(a)) return S.get(a);
  }
  return null;
}
function vs(e, a, w, f) {
  const l = new Qe(), S = new Mo();
  S.setColorMap("rainbow");
  const y = new Bt(), m = L.state([]);
  return L.derive(() => {
    var _a, _b, _c;
    a.deformedShape.val;
    const g = w.val, b = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], _ = ys(a.frameResults.val);
    if (l.children.forEach((C) => {
      C.geometry && C.geometry.dispose(), C.material && C.material.dispose();
    }), l.clear(), !_ || b.length === 0 || g.length === 0) {
      m.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, K = (_c = e.deformOutputs) == null ? void 0 : _c.val, te = [], de = [];
    for (let C = 0; C < b.length; C++) {
      if (b[C].length !== 2) continue;
      const j = gs(_, C, v, K);
      j && (te.push(j[0], j[1]), de.push({ idx: C, vals: j }));
    }
    if (te.length === 0) {
      m.val = [];
      return;
    }
    const ie = Math.min(...te), M = Math.max(...te);
    S.setMin(ie), S.setMax(M), m.val = te;
    const U = [1 / 0, 1 / 0, 1 / 0], ue = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of g) for (let N = 0; N < 3; N++) U[N] = Math.min(U[N], C[N]), ue[N] = Math.max(ue[N], C[N]);
    const Z = Math.max(ue[0] - U[0], ue[1] - U[1], ue[2] - U[2], 1) * xs, re = [], q = [], B = [];
    let I = 0;
    for (const { idx: C, vals: N } of de) {
      const j = b[C], Y = g[j[0]], ye = g[j[1]];
      if (!Y || !ye) continue;
      const E = new x(ye[0] - Y[0], ye[1] - Y[1], ye[2] - Y[2]), D = E.length();
      if (D < 1e-10) continue;
      E.normalize();
      const oe = Math.abs(E.y) < 0.99 ? new x(0, 1, 0) : new x(1, 0, 0), pe = new x().crossVectors(E, oe).normalize(), J = new x().crossVectors(E, pe).normalize(), Pe = Nn + 1, Se = ws;
      for (let ke = 0; ke < Pe; ke++) {
        const ze = ke / Nn, Xe = Y[0] + E.x * D * ze, st = Y[1] + E.y * D * ze, vt = Y[2] + E.z * D * ze, Ue = N[0] + (N[1] - N[0]) * ze, A = S.getColor(Ue) ?? new Bt(0, 0, 0);
        y.copy(A).convertSRGBToLinear();
        for (let W = 0; W < Se; W++) {
          const ee = W / Se * Math.PI * 2, se = Math.cos(ee), Le = Math.sin(ee);
          re.push(Xe + (pe.x * se + J.x * Le) * Z, st + (pe.y * se + J.y * Le) * Z, vt + (pe.z * se + J.z * Le) * Z), q.push(y.r, y.g, y.b);
        }
      }
      for (let ke = 0; ke < Nn; ke++) for (let ze = 0; ze < Se; ze++) {
        const Xe = (ze + 1) % Se, st = I + ke * Se + ze, vt = I + ke * Se + Xe, Ue = I + (ke + 1) * Se + ze, A = I + (ke + 1) * Se + Xe;
        B.push(st, vt, A), B.push(st, A, Ue);
      }
      I += Pe * Se;
    }
    if (re.length === 0) return;
    const V = new he();
    V.setAttribute("position", new Ft(re, 3)), V.setAttribute("color", new Ft(q, 3)), V.setIndex(B), V.computeVertexNormals();
    const z = new je({ vertexColors: true, side: Tt }), T = new qe(V, z);
    T.frustumCulled = false, l.add(T);
  }), l.__colorMapValues = m, l;
}
function bs() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Ms = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Ss = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, ks = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function dt(e, a = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(a) : e.toFixed(a);
}
const _s = 16755200, ho = 56831, Ps = 56831, Cs = 56831, Cn = 65382;
function zs(e) {
  const a = new Qe();
  a.name = "__hekatan_hover", a.renderOrder = 99;
  const w = new rn(1, 16, 16), f = new je({ color: _s, transparent: true, opacity: 0.85, depthTest: false }), l = new qe(w, f);
  l.visible = false, l.renderOrder = 100, a.add(l);
  const S = new he(), y = new ht({ color: ho, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), m = new Ot(S, y);
  m.visible = false, m.renderOrder = 100, a.add(m);
  const g = new je({ color: ho, transparent: true, opacity: 0.7, depthTest: false }), b = new qe(new ro(1, 1, 1, 12), g);
  b.visible = false, b.renderOrder = 100, a.add(b);
  const _ = new he(), v = new je({ color: Ps, transparent: true, opacity: 0.45, side: Tt, depthTest: false }), K = new qe(_, v);
  K.visible = false, K.renderOrder = 100, a.add(K);
  const te = new he(), de = new ht({ color: Cs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ie = new Ot(te, de);
  ie.visible = false, ie.renderOrder = 100, a.add(ie);
  const M = new je({ color: Cn, transparent: true, opacity: 0.95, depthTest: false }), U = new qe(w, M);
  U.visible = false, U.renderOrder = 101, a.add(U);
  const ue = new je({ color: Cn, transparent: true, opacity: 0.85, depthTest: false }), ne = new qe(new ro(1, 1, 1, 12), ue);
  ne.visible = false, ne.renderOrder = 101, a.add(ne);
  const Z = new he(), re = new je({ color: Cn, transparent: true, opacity: 0.55, side: Tt, depthTest: false }), q = new qe(Z, re);
  q.visible = false, q.renderOrder = 101, a.add(q);
  const B = new he(), I = new ht({ color: Cn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), V = new Ot(B, I);
  V.visible = false, V.renderOrder = 101, a.add(V);
  let z = null;
  const T = document.createElement("div");
  Object.assign(T.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), T.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(T);
  }, 0);
  function C(H) {
    const Q = e.derivedNodes.rawVal;
    return !Q || H < 0 || H >= Q.length ? null : new x(Q[H][0], Q[H][1], Q[H][2]);
  }
  function N(H, Q) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s2;
    const ve = e.getActiveCamera();
    if (!ve || !e.mesh) return null;
    const ae = e.rendererElm.getBoundingClientRect(), Ae = H - ae.left, we = Q - ae.top, De = e.derivedNodes.rawVal, be = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!De || !be) return null;
    const Re = /* @__PURE__ */ new Map(), Ie = (Ne) => {
      if (Re.has(Ne)) return Re.get(Ne);
      const ge = C(Ne);
      if (!ge) return Re.set(Ne, null), null;
      const ce = ge.clone().project(ve), Ve = (ce.x * 0.5 + 0.5) * ae.width, fe = (-ce.y * 0.5 + 0.5) * ae.height, Oe = { x: Ve, y: fe, z: ce.z };
      return Re.set(Ne, Oe), Oe;
    }, et = /* @__PURE__ */ new Set();
    for (const Ne of be) if (Ne) for (const ge of Ne) et.add(ge);
    const rt = 8;
    let $e = -1, pt = rt;
    for (let Ne = 0; Ne < De.length; Ne++) {
      if (!et.has(Ne)) continue;
      const ge = Ie(Ne);
      if (!ge || ge.z < -1 || ge.z > 1) continue;
      const ce = ge.x - Ae, Ve = ge.y - we, fe = Math.sqrt(ce * ce + Ve * Ve);
      fe < pt && (pt = fe, $e = Ne);
    }
    const Ce = bs(), at = Ss[Ce.dispUnit] ?? 1e3, tt = Ms[Ce.forceUnit] ?? 1;
    if ($e >= 0) {
      const Ne = De[$e];
      let ge = `Nodo ${$e}
(${Ne[0].toFixed(3)}, ${Ne[1].toFixed(3)}, ${Ne[2].toFixed(3)})`;
      const ce = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (ce == null ? void 0 : ce.deformations) {
        const Ve = ce.deformations.get($e);
        if (Ve && (ge += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, ge += `
Ux = ${dt(Ve[0] * at, 3)} ${Ce.dispUnit}`, ge += `
Uy = ${dt(Ve[1] * at, 3)} ${Ce.dispUnit}`, ge += `
Uz = ${dt(Ve[2] * at, 3)} ${Ce.dispUnit}`, (Math.abs(Ve[3]) > 1e-9 || Math.abs(Ve[4]) > 1e-9 || Math.abs(Ve[5]) > 1e-9) && (ge += `
Rx = ${dt(Ve[3] * 1e3, 3)} mrad`, ge += `
Ry = ${dt(Ve[4] * 1e3, 3)} mrad`, ge += `
Rz = ${dt(Ve[5] * 1e3, 3)} mrad`)), ce.reactions) {
          const fe = ce.reactions.get($e);
          fe && (Math.abs(fe[0]) > 1e-9 || Math.abs(fe[1]) > 1e-9 || Math.abs(fe[2]) > 1e-9 || Math.abs(fe[3]) > 1e-6 || Math.abs(fe[4]) > 1e-6 || Math.abs(fe[5]) > 1e-6) && (ge += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, ge += `
Fx = ${dt(fe[0] * tt)} ${Ce.forceUnit}`, ge += `
Fy = ${dt(fe[1] * tt)} ${Ce.forceUnit}`, ge += `
Fz = ${dt(fe[2] * tt)} ${Ce.forceUnit}`, (Math.abs(fe[3]) > 1e-6 || Math.abs(fe[4]) > 1e-6 || Math.abs(fe[5]) > 1e-6) && (ge += `
Mx = ${dt(fe[3] * tt)} ${Ce.forceUnit}\xB7m`, ge += `
My = ${dt(fe[4] * tt)} ${Ce.forceUnit}\xB7m`, ge += `
Mz = ${dt(fe[5] * tt)} ${Ce.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: $e, info: ge };
    }
    const nn = 5;
    let nt = -1, Ut = nn, Lt = "frame";
    for (let Ne = 0; Ne < be.length; Ne++) {
      const ge = be[Ne];
      if (!(!ge || ge.length < 2)) {
        if (ge.length === 2) {
          const ce = Ie(ge[0]), Ve = Ie(ge[1]);
          if (!ce || !Ve || ce.z < -1 || ce.z > 1 || Ve.z < -1 || Ve.z > 1) continue;
          const fe = Fs(Ae, we, ce.x, ce.y, Ve.x, Ve.y);
          fe < Ut && (Ut = fe, nt = Ne, Lt = "frame");
        } else if (ge.length === 3 || ge.length === 4) {
          const ce = [];
          let Ve = true;
          for (const fe of ge) {
            const Oe = Ie(fe);
            if (!Oe || Oe.z < -1 || Oe.z > 1) {
              Ve = false;
              break;
            }
            ce.push(Oe);
          }
          if (!Ve) continue;
          if (Es(Ae, we, ce)) {
            const Oe = ce.reduce((Ge, At) => Ge + At.z, 0) / ce.length * 1e-3;
            Oe < Ut && (Ut = Oe, nt = Ne, Lt = "shell");
          }
        } else if (ge.length === 8) {
          const ce = [];
          let Ve = true;
          for (const Me of ge) {
            const He = Ie(Me);
            if (!He || He.z < -1 || He.z > 1) {
              Ve = false;
              break;
            }
            ce.push(He);
          }
          if (!Ve) continue;
          const fe = Math.min(...ce.map((Me) => Me.x)), Oe = Math.max(...ce.map((Me) => Me.x)), Ge = Math.min(...ce.map((Me) => Me.y)), At = Math.max(...ce.map((Me) => Me.y));
          if (Ae >= fe && Ae <= Oe && we >= Ge && we <= At) {
            const He = ce.reduce((kt, ct) => kt + ct.z, 0) / ce.length * 1e-3;
            He < Ut && (Ut = He, nt = Ne, Lt = "solid");
          }
        }
      }
    }
    if (nt >= 0) {
      const Ne = be[nt];
      let ce = `${Lt === "frame" ? "Frame" : Lt === "shell" ? "Shell" : "Solid"} ${nt}`;
      const Ve = (_e = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e.rawVal, fe = (_g = (_f = Ve == null ? void 0 : Ve.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, nt);
      if (fe) {
        fe.name && (ce += `
  \u{1F4CB} ${fe.name}`), fe.shape && (ce += `
  Shape: ${fe.shape}`);
        const Oe = /concrete|hormig|rect.*sólida/i.test(fe.shape || ""), Ge = Oe ? 100 : 1e3, At = Oe ? "cm" : "mm", Me = (kt) => {
          const ct = kt * Ge;
          return Math.abs(ct - Math.round(ct)) < 0.05 ? `${Math.round(ct)}` : `${ct.toFixed(1)}`;
        }, He = [];
        if (fe.D != null && He.push(`D=${Me(fe.D)}`), fe.B != null && He.push(`B=${Me(fe.B)}`), fe.TF != null && He.push(`TF=${Me(fe.TF)}`), fe.TW != null && He.push(`TW=${Me(fe.TW)}`), fe.t != null && He.push(`t=${Me(fe.t)}`), He.length && (ce += `
  Dim: ${He.join(" ")} ${At}`), fe.material) {
          let kt = fe.material;
          fe.fillMaterial && (kt += ` + FILL "${fe.fillMaterial}"`), ce += `
  Mat: ${kt}`;
        }
      } else {
        const Oe = (_i = (_h = Ve == null ? void 0 : Ve.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, nt), Ge = (_k = (_j = Ve == null ? void 0 : Ve.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, nt);
        Oe ? (ce += `
  ${Oe}`, Ge && !Oe.includes(Ge) && (ce += `  (${Ge})`)) : Ge && (ce += `
  Material: ${Ge}`);
      }
      if (ce += `
nodos: [${Ne.join(", ")}]`, Lt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Oe = e.mesh.analyzeOutputs.rawVal, Ge = ks[Ce.stressUnit] ?? 1, At = [["bendingXX", "Mxx", tt, `${Ce.forceUnit}\xB7m/m`], ["bendingYY", "Myy", tt, `${Ce.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", tt, `${Ce.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", tt, `${Ce.forceUnit}/m`], ["membraneYY", "Nyy", tt, `${Ce.forceUnit}/m`], ["membraneXY", "Nxy", tt, `${Ce.forceUnit}/m`], ["shearX", "Qx", tt, `${Ce.forceUnit}/m`], ["shearY", "Qy", tt, `${Ce.forceUnit}/m`], ["vonMises", "\u03C3VM", Ge, Ce.stressUnit], ["pressure", "p", Ge, Ce.stressUnit]], Me = [];
        for (const [He, kt, ct, Yt] of At) {
          const Dt = Oe == null ? void 0 : Oe[He];
          if (Dt && Dt instanceof Map) {
            const $t = Dt.get(nt);
            if ($t != null) {
              if (typeof $t == "number") Me.push(`${kt} = ${dt($t * ct, 3)} ${Yt}`);
              else if (Array.isArray($t)) {
                let xt = $t[0];
                for (const Ht of $t) Math.abs(Ht) > Math.abs(xt) && (xt = Ht);
                Me.push(`${kt} = ${dt(xt * ct, 3)} ${Yt}`);
              }
            }
          }
        }
        Me.length > 0 && (ce += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Me.slice(0, 8).join(`
`));
      }
      if (Lt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Oe = e.mesh.deformOutputs.rawVal, Ge = e.mesh.elementInputs.rawVal, At = Oe == null ? void 0 : Oe.deformations;
        if (At && Ne.length === 2) {
          const Me = At.get(Ne[0]), He = At.get(Ne[1]), kt = De[Ne[0]], ct = De[Ne[1]];
          if (Me && He && kt && ct) {
            const Yt = ct[0] - kt[0], Dt = ct[1] - kt[1], $t = ct[2] - kt[2], xt = Math.sqrt(Yt * Yt + Dt * Dt + $t * $t);
            if (xt > 1e-9) {
              const Ht = Yt / xt, on = Dt / xt, Nt = $t / xt, ut = (He[0] - Me[0]) * Ht + (He[1] - Me[1]) * on + (He[2] - Me[2]) * Nt, bt = ((_n2 = Ge.elasticities) == null ? void 0 : _n2.get(nt)) ?? 0, Qt = ((_o = Ge.areas) == null ? void 0 : _o.get(nt)) ?? 0, _t = ((_p = Ge.momentsOfInertiaY) == null ? void 0 : _p.get(nt)) ?? 0, cn = ((_q = Ge.momentsOfInertiaZ) == null ? void 0 : _q.get(nt)) ?? 0, xn = ((_r = Ge.torsionalConstants) == null ? void 0 : _r.get(nt)) ?? 0, sn = ((_s2 = Ge.shearModuli) == null ? void 0 : _s2.get(nt)) ?? bt / 2.6, dn = bt * Qt * (ut / xt), Mt = (He[3] - Me[3]) * Ht + (He[4] - Me[4]) * on + (He[5] - Me[5]) * Nt, pn = sn * xn * (Mt / xt), Wt = He[4] - Me[4], Vn = He[5] - Me[5], $ = bt * _t * Wt / xt, We = bt * cn * Vn / xt;
              ce += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, ce += `
L = ${dt(xt, 3)} m`, ce += `
\u0394L = ${dt(ut * at, 3)} ${Ce.dispUnit}`, ce += `
\u03B5 = ${dt(ut / xt, 6)}`, Math.abs(dn) > 1e-6 && (ce += `
N \u2248 ${dt(dn * tt)} ${Ce.forceUnit}`), Math.abs(pn) > 1e-6 && (ce += `
T \u2248 ${dt(pn * tt)} ${Ce.forceUnit}\xB7m`), Math.abs($) > 1e-6 && (ce += `
My \u2248 ${dt($ * tt)} ${Ce.forceUnit}\xB7m`), Math.abs(We) > 1e-6 && (ce += `
Mz \u2248 ${dt(We * tt)} ${Ce.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Lt, idx: nt, info: ce };
    }
    return null;
  }
  function j(H, Q, ve) {
    var _a, _b, _c;
    if (l.visible = false, m.visible = false, b.visible = false, K.visible = false, ie.visible = false, !H || !e.mesh) {
      T.style.display = "none", e.render();
      return;
    }
    const ae = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (H.type === "node") {
      const be = C(H.idx);
      if (be) {
        const Re = e.derivedNodes.rawVal ?? [];
        let Ie = 1;
        if (Re.length >= 2) {
          let $e = [1 / 0, 1 / 0, 1 / 0], pt = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ce of Re) for (let at = 0; at < 3; at++) Ce[at] < $e[at] && ($e[at] = Ce[at]), Ce[at] > pt[at] && (pt[at] = Ce[at]);
          Ie = Math.max(pt[0] - $e[0], pt[1] - $e[1], pt[2] - $e[2], 0.1);
        }
        const et = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, rt = 0.015 * Ie * et;
        l.position.copy(be), l.scale.setScalar(rt), l.visible = true;
      }
    } else if (H.type === "frame" && ae) {
      const be = ae[H.idx], Re = C(be[0]), Ie = C(be[1]);
      if (Re && Ie) {
        const et = Re.clone().add(Ie).multiplyScalar(0.5), rt = Ie.clone().sub(Re), $e = rt.length(), pt = e.getActiveCamera();
        let Ce;
        if (pt.isOrthographicCamera) {
          const nt = pt;
          Ce = (nt.top - nt.bottom) / nt.zoom * 35e-4;
        } else Ce = pt.position.distanceTo(et) * 35e-4;
        b.position.copy(et);
        const at = new x(0, 1, 0), tt = at.clone().cross(rt).normalize(), nn = at.angleTo(rt);
        b.quaternion.setFromAxisAngle(tt, nn), b.scale.set(Ce, $e, Ce), b.visible = true;
      }
    } else if (H.type === "shell" && ae) {
      const be = ae[H.idx], Re = [], Ie = [];
      for (const et of be) {
        const rt = C(et);
        if (!rt) return;
        Re.push(rt.x, rt.y, rt.z);
      }
      be.length === 4 ? Ie.push(0, 1, 2, 0, 2, 3) : be.length === 3 && Ie.push(0, 1, 2), _.setAttribute("position", new Ft(Re, 3)), _.setIndex(Ie), _.computeVertexNormals(), K.visible = true;
    } else if (H.type === "solid" && ae) {
      const be = ae[H.idx], Re = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ie = [];
      for (const [et, rt] of Re) {
        const $e = C(be[et]), pt = C(be[rt]);
        $e && pt && Ie.push($e.x, $e.y, $e.z, pt.x, pt.y, pt.z);
      }
      te.setAttribute("position", new Ft(Ie, 3)), ie.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      T.style.display = "none", e.render();
      return;
    }
    T.textContent = H.info, T.style.whiteSpace = "pre-line", T.style.display = "block";
    const we = e.rendererElm.getBoundingClientRect(), De = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? we;
    T.style.left = `${Q - De.left}px`, T.style.top = `${ve - De.top}px`, e.render();
  }
  let Y = "", ye = 0, E = 0;
  const D = window.__hekatanHoverDebug ?? false, oe = (H) => {
    ye && cancelAnimationFrame(ye), ye = requestAnimationFrame(() => {
      var _a, _b, _c;
      const Q = N(H.clientX, H.clientY);
      if (D && E < 5) {
        const ae = e.derivedNodes.rawVal, Ae = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${H.clientX}, ${H.clientY}) nodes=${(ae == null ? void 0 : ae.length) ?? 0} elems=${(Ae == null ? void 0 : Ae.length) ?? 0} hover=`, Q), E++;
      }
      const ve = Q ? `${Q.type}:${Q.idx}` : "";
      if (ve !== Y) Y = ve, j(Q, H.clientX, H.clientY);
      else if (Q) {
        const ae = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        T.style.left = `${H.clientX - ae.left}px`, T.style.top = `${H.clientY - ae.top}px`;
      }
    });
  };
  let pe = null;
  const J = () => {
    Y = "", l.visible = false, m.visible = false, b.visible = false, K.visible = false, ie.visible = false, T.style.display = "none", e.render();
  }, Pe = (H) => {
    const Q = e.rendererElm.getBoundingClientRect(), ve = H.clientX - Q.left, ae = H.clientY - Q.top;
    (ve < -2 || ae < -2 || ve > Q.width + 2 || ae > Q.height + 2) && (pe && clearTimeout(pe), pe = window.setTimeout(J, 200));
  }, Se = () => {
    pe && (clearTimeout(pe), pe = null);
  };
  e.rendererElm.addEventListener("pointermove", oe), e.rendererElm.addEventListener("pointerleave", Pe), e.rendererElm.addEventListener("pointerenter", Se);
  const ke = document.createElement("div");
  Object.assign(ke.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), ke.classList.add("hekatan-context-menu");
  let ze = null;
  const Xe = document.createElement("div");
  Object.assign(Xe.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const st = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], vt = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], Ue = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], A = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], W = (H, Q, ve) => {
    const ae = document.createElement("div");
    return ae.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, ae.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${H}</span><span>${Q}</span>`, ae.addEventListener("mouseenter", () => {
      ae.style.background = "rgba(100, 160, 255, 0.22)";
    }), ae.addEventListener("mouseleave", () => {
      ae.style.background = "transparent";
    }), ae.addEventListener("click", (Ae) => {
      Ae.stopPropagation();
      const we = ze;
      Et(), we && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${ve}`, { detail: { type: we.type, idx: we.idx, subAction: ve } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: we.type, idx: we.idx, subAction: ve } })));
    }), ae;
  };
  function ee(H) {
    Xe.innerHTML = "";
    const Q = H === "frame" ? st : H === "node" ? vt : H === "shell" ? Ue : A, ve = document.createElement("div");
    ve.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", ve.textContent = `Asignar a ${H.toUpperCase()} #${(ze == null ? void 0 : ze.idx) ?? "?"}`, Xe.appendChild(ve);
    for (const ae of Q) Xe.appendChild(W(ae.icon, ae.label, ae.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Xe);
  }, 0);
  function se(H, Q) {
    var _a;
    if (!ze) return;
    ee(ze.type);
    const ve = ke.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Xe.style.left = `${H + ve.width}px`, Xe.style.top = `${Q}px`, Xe.style.display = "block", setTimeout(() => {
      const ae = Xe.getBoundingClientRect();
      ae.right > window.innerWidth - 10 && (Xe.style.left = `${H - ae.width}px`);
    }, 0);
  }
  function Le() {
    Xe.style.display = "none";
  }
  const Ye = (H, Q, ve, ae) => {
    const Ae = document.createElement("div");
    Ae.style.cssText = `
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.1s;
      justify-content: space-between;
    `;
    const we = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${H}</span><span>${Q}</span></span>`, De = ve ? '<span style="color:#888;">\u25B8</span>' : "";
    return Ae.innerHTML = we + De, Ae.addEventListener("mouseenter", () => {
      if (Ae.style.background = "rgba(100, 160, 255, 0.18)", ve) {
        const be = parseFloat(ke.style.left || "0"), Re = parseFloat(ke.style.top || "0");
        se(be, Re);
      } else Le();
    }), Ae.addEventListener("mouseleave", () => {
      Ae.style.background = "transparent";
    }), Ae.addEventListener("click", (be) => {
      if (be.stopPropagation(), ve) return;
      const Re = ze;
      Et(), ae(Re);
    }), Ae;
  }, Ee = Ye("\u{1F4DD}", "Asignar", true, () => {
  }), Je = Ye("\u2139", "Ver informaci\xF3n", false, (H) => {
    H && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: H.type, idx: H.idx } }));
  });
  Je.addEventListener("mouseenter", () => {
    Le();
  }), ke.appendChild(Ee), ke.appendChild(Je), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(ke);
  }, 0);
  function Ke(H, Q, ve) {
    var _a, _b;
    ze = ve;
    const ae = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    ke.style.left = `${H - ae.left}px`, ke.style.top = `${Q - ae.top}px`, ke.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function Et() {
    ke.style.display = "none", Le(), ze = null;
  }
  e.rendererElm.addEventListener("pointerdown", (H) => {
    if (H.button !== 2) return;
    const Q = N(H.clientX, H.clientY);
    window.__hekatanRClickOnElement = !!Q;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (H) => {
    const Q = N(H.clientX, H.clientY);
    if (!Q) {
      Et(), window.__hekatanRClickOnElement = false;
      return;
    }
    H.preventDefault(), H.stopImmediatePropagation(), Ke(H.clientX, H.clientY, { type: Q.type, idx: Q.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const Xt = (H) => {
    if (ke.style.display !== "block") return;
    const Q = H.target;
    ke.contains(Q) || Xe.contains(Q) || Et();
  };
  document.addEventListener("mousedown", Xt, true), document.addEventListener("keydown", (H) => {
    H.key === "Escape" && ke.style.display === "block" && Et();
  });
  let It = null;
  e.rendererElm.addEventListener("pointerdown", (H) => {
    H.button === 0 && (It = { x: H.clientX, y: H.clientY });
  }), e.rendererElm.addEventListener("pointerup", (H) => {
    if (H.button !== 0 || !It) return;
    const Q = H.clientX - It.x, ve = H.clientY - It.y;
    if (It = null, Q * Q + ve * ve > 9) return;
    const ae = N(H.clientX, H.clientY);
    ae ? (z = { type: ae.type, idx: ae.idx }, Zt()) : (z = null, Zt());
  });
  function Zt() {
    var _a, _b;
    if (U.visible = false, ne.visible = false, q.visible = false, V.visible = false, !z || !e.mesh) {
      e.render();
      return;
    }
    const H = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (z.type === "node") {
      const Q = C(z.idx);
      if (Q) {
        const ve = e.derivedNodes.rawVal ?? [];
        let ae = 1;
        if (ve.length >= 2) {
          let De = [1 / 0, 1 / 0, 1 / 0], be = [-1 / 0, -1 / 0, -1 / 0];
          for (const Re of ve) for (let Ie = 0; Ie < 3; Ie++) Re[Ie] < De[Ie] && (De[Ie] = Re[Ie]), Re[Ie] > be[Ie] && (be[Ie] = Re[Ie]);
          ae = Math.max(be[0] - De[0], be[1] - De[1], be[2] - De[2], 0.1);
        }
        const Ae = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, we = 0.017 * ae * Ae;
        U.position.copy(Q), U.scale.setScalar(we), U.visible = true;
      }
    } else if (z.type === "frame" && H) {
      const Q = H[z.idx], ve = C(Q[0]), ae = C(Q[1]);
      if (ve && ae) {
        const Ae = ve.clone().add(ae).multiplyScalar(0.5), we = ae.clone().sub(ve), De = we.length(), be = e.getActiveCamera();
        let Re;
        if (be.isOrthographicCamera) {
          const $e = be;
          Re = ($e.top - $e.bottom) / $e.zoom * 35e-4;
        } else Re = be.position.distanceTo(Ae) * 35e-4;
        ne.position.copy(Ae);
        const Ie = new x(0, 1, 0), et = Ie.clone().cross(we).normalize(), rt = Ie.angleTo(we);
        ne.quaternion.setFromAxisAngle(et, rt), ne.scale.set(Re, De, Re), ne.visible = true;
      }
    } else if (z.type === "shell" && H) {
      const Q = H[z.idx], ve = [], ae = [];
      for (const Ae of Q) {
        const we = C(Ae);
        if (!we) return;
        ve.push(we.x, we.y, we.z);
      }
      Q.length === 4 ? ae.push(0, 1, 2, 0, 2, 3) : Q.length === 3 && ae.push(0, 1, 2), Z.setAttribute("position", new Ft(ve, 3)), Z.setIndex(ae), Z.computeVertexNormals(), q.visible = true;
    } else if (z.type === "solid" && H) {
      const Q = H[z.idx], ve = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], ae = [];
      for (const [Ae, we] of ve) {
        const De = C(Q[Ae]), be = C(Q[we]);
        De && be && ae.push(De.x, De.y, De.z, be.x, be.y, be.z);
      }
      B.setAttribute("position", new Ft(ae, 3)), V.visible = true;
    }
    e.render();
  }
  return L.derive(() => {
    e.derivedNodes.val, z && Zt();
  }), a;
}
function Fs(e, a, w, f, l, S) {
  const y = l - w, m = S - f, g = y * y + m * m;
  if (g < 1e-9) {
    const de = e - w, ie = a - f;
    return Math.sqrt(de * de + ie * ie);
  }
  let b = ((e - w) * y + (a - f) * m) / g;
  b = Math.max(0, Math.min(1, b));
  const _ = w + b * y, v = f + b * m, K = e - _, te = a - v;
  return Math.sqrt(K * K + te * te);
}
function Es(e, a, w) {
  let f = false;
  for (let l = 0, S = w.length - 1; l < w.length; S = l++) {
    const y = w[l].x, m = w[l].y, g = w[S].x, b = w[S].y;
    m > a != b > a && e < (g - y) * (a - m) / (b - m + 1e-12) + y && (f = !f);
  }
  return f;
}
function mo(e, a = 8) {
  const w = document.createElement("div");
  w.id = "legend";
  const f = document.createElement("div");
  f.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", w.appendChild(f), setTimeout(() => {
    L.derive(() => {
      f.textContent = Un.val ? `[${Un.val}]` : "";
    });
  });
  const l = Array.from({ length: a + 1 }, (g, b) => b / a).reverse();
  let S, y;
  l.forEach((g, b) => {
    S = document.createElement("div"), S.id = `marker-${b}`, S.className = "marker", S.style.marginTop = b == 0 ? "0px" : `calc(${50 / a}vh - 1px)`, y = document.createElement("p"), y.id = `marker-text-${b}`, S.append(y), w.append(S);
  });
  const m = [];
  return w.querySelectorAll("p").forEach((g) => m.push(g)), setTimeout(() => {
    L.derive(() => {
      l.forEach((g, b) => {
        const _ = m[b];
        _ && (_.innerText = As(e.val, g).toString());
      });
    });
  }), w;
}
function As(e, a) {
  const w = Wn.val;
  if (w) return (w[0] + a * (w[1] - w[0])).toPrecision(3);
  const f = e.filter((y) => Number.isFinite(y));
  if (f.length === 0) return "0";
  let l = Math.min(...f);
  const S = Math.max(...f);
  return l >= 0 && S > 0 && (l = 0), (l + a * (S - l)).toPrecision(3);
}
function Ns({ mesh: e, settingsObj: a, drawingObj: w, objects3D: f, solids: l }) {
  Ho.DEFAULT_UP = new x(0, 0, 1);
  const S = document.createElement("div"), y = new Do(), m = new No(45, 1, 0.1, 2 * 1e6), g = new Zo(-10, 10, 10, -10, -1e3, 2e6);
  let b = m;
  const _ = new Uo({ antialias: true });
  _.localClippingEnabled = true;
  const v = new po(m, _.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, _.domElement.addEventListener("wheel", (A) => {
    if (!A.ctrlKey && Math.abs(A.deltaX) > Math.abs(A.deltaY) * 1.5) {
      A.preventDefault();
      const W = v.target, ee = new x().subVectors(m.position, W), se = new x();
      se.crossVectors(m.up, ee).normalize();
      const Ye = ee.length() * 1e-3 * v.panSpeed;
      W.addScaledVector(se, A.deltaX * Ye), m.position.addScaledVector(se, A.deltaX * Ye), v.update();
    }
  }, { passive: false });
  const K = new Xn(new x(-1, 0, 0), 0), te = new Xn(new x(0, -1, 0), 0), de = new Xn(new x(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ie() {
    const A = window.__hekatanClip, W = [];
    A.enableX && (K.normal.set(A.invertX ? 1 : -1, 0, 0), K.constant = A.invertX ? -A.posX : A.posX, W.push(K)), A.enableY && (te.normal.set(0, A.invertY ? 1 : -1, 0), te.constant = A.invertY ? -A.posY : A.posY, W.push(te)), A.enableZ && (de.normal.set(0, 0, A.invertZ ? 1 : -1), de.constant = A.invertZ ? -A.posZ : A.posZ, W.push(de)), _.clippingPlanes = W, y.traverse((se) => {
      const Le = se;
      if (Le.material) {
        const Ye = Array.isArray(Le.material) ? Le.material : [Le.material];
        for (const Ee of Ye) Ee.clippingPlanes = W, Ee.needsUpdate = true;
      }
    });
    const ee = window.__hekatanPanes ?? [];
    for (const se of ee) try {
      se && typeof se.refresh == "function" && se.refresh();
    } catch {
    }
    _.render(y, b);
  }
  ie(), window.__hekatanClipApply = ie;
  const M = qo(a), U = L.derive(() => M.displayScale.val === 0 ? 1 : M.displayScale.val > 0 ? M.displayScale.val : -1 / M.displayScale.val), ue = Vs(e, M), ne = () => {
    const A = [];
    return M.gridXY.rawVal && A.push("xy"), M.gridXZ.rawVal && A.push("xz"), M.gridYZ.rawVal && A.push("yz"), A;
  }, Z = () => {
    const A = M.gridStep.rawVal, W = Math.max(A, M.gridMajor.rawVal);
    return { planes: ne(), majorStep: W, minorStep: A };
  };
  let re = Yn(M.gridSize.rawVal, Z());
  re.visible = M.gridVisible.rawVal, window.__hekatanSnap2D = M.cursorSnap.rawVal;
  const q = () => {
    const A = Math.max(0, Math.min(1, M.gridOpacity.rawVal));
    re.traverse((W) => {
      const ee = W.material;
      if (!ee || !("opacity" in ee)) return;
      const se = W.name ?? "";
      let Le = 0.35;
      se.includes("border") ? Le = 1 : se.includes("major") && (Le = 0.75), ee.opacity = A * Le;
    });
  };
  q(), S.appendChild(Go(M, e, l)), S.setAttribute("id", "viewer"), S.appendChild(_.domElement), _.setPixelRatio(window.devicePixelRatio);
  const B = tn();
  _.setClearColor(B.background, 1);
  const I = M.gridSize.rawVal, V = I * 0.5 + I * 0.5 / Math.tan(45 * 0.5);
  m.position.set(0, 0, V), m.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, S.__settings = M, v.zoomSpeed = 1;
  let z = 100, T = 0;
  _.domElement.addEventListener("wheel", (A) => {
    z = A.deltaY, T = A.deltaMode;
  }, { passive: true, capture: true }), v._getZoomScale = function() {
    const A = Math.abs(z);
    if (A >= 80 && T === 0) return Math.pow(0.9, this.zoomSpeed);
    if (T === 1) return Math.pow(0.88, this.zoomSpeed);
    const W = Math.max(0.05, Math.min(A / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * W);
  }, v.update();
  let C = uo(M.gridSize.rawVal, M.flipAxes.rawVal);
  y.add(re, C), L.derive(() => {
    window.__hekatanGridPlaneXY = M.gridXY.val, window.__hekatanGridPlaneXZ = M.gridXZ.val, window.__hekatanGridPlaneYZ = M.gridYZ.val;
  });
  let N = true;
  L.derive(() => {
    const A = M.gridVisible.val;
    if (N) {
      N = false;
      return;
    }
    re.visible = A, J();
  });
  let j = true;
  L.derive(() => {
    if (M.gridOpacity.val, j) {
      j = false;
      return;
    }
    q(), J();
  }), L.derive(() => {
    const A = M.cursorSnap.val;
    window.__hekatanSnap2D = A;
  });
  let Y = true;
  L.derive(() => {
    var _a;
    const A = M.gridSize.val, W = M.flipAxes.val;
    if (M.gridXY.val, M.gridXZ.val, M.gridYZ.val, M.gridStep.val, M.gridMajor.val, Y) {
      Y = false;
      return;
    }
    y.remove(re), (_a = re.traverse) == null ? void 0 : _a.call(re, (Le) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Le.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Le.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), re = Yn(A, Z()), re.visible = M.gridVisible.rawVal, y.add(re), q(), y.remove(C), C.traverse((Le) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Le.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Le.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), C = uo(A, W), y.add(C);
    const ee = A * 0.5 + A * 0.5 / Math.tan(45 * 0.5);
    m.position.distanceTo(v.target), Math.abs(m.position.x) < 0.1 && Math.abs(m.position.y) < 0.1 && m.position.z > 0 ? m.position.set(0, 0, ee) : m.position.set(0.5 * A, -ee, 0.5 * A), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, A * 0.01), v.maxDistance = Math.max(50, A * 50), v.update(), J();
  }), new ResizeObserver((A) => {
    var _a, _b;
    for (const W of A) {
      const ee = (_a = W.target) == null ? void 0 : _a.clientWidth, se = (_b = W.target) == null ? void 0 : _b.clientHeight;
      if (ee === 0 || se === 0) continue;
      const Ye = (E ? ee / 2 : ee) / se;
      m.aspect = Ye, m.updateProjectionMatrix();
      const Ee = g.top;
      if (g.left = -Ee * Ye, g.right = Ee * Ye, g.updateProjectionMatrix(), D && D.isPerspectiveCamera) D.aspect = Ye, D.updateProjectionMatrix();
      else if (D && D.isOrthographicCamera) {
        const Je = D, Ke = Je.top;
        Je.left = -Ke * Ye, Je.right = Ke * Ye, Je.updateProjectionMatrix();
      }
      _.setSize(ee, se), J();
    }
  }).observe(S), v.addEventListener("change", J), L.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, M.displayScale.val, M.nodes.val, M.elements.val, (_g = M.edges) == null ? void 0 : _g.val, M.elemColumns.val, M.elemBeams.val, M.nodesIndexes.val, M.elementsIndexes.val, M.orientations.val, M.sections.val, M.secColumns.val, M.secBeams.val, M.secFloor.val, M.supports.val, M.loads.val, M.deformedShape.val, M.nodeResults.val, M.frameResults.val, M.shellResults.val, (_h = M.solidResults) == null ? void 0 : _h.val, setTimeout(J);
  });
  let E = false, D = null, oe = null, pe = false;
  function J() {
    const A = S.clientWidth || 1, W = S.clientHeight || 1;
    if (!E || !D) {
      _.setScissorTest(false), _.setViewport(0, 0, A, W), _.render(y, b);
      return;
    }
    const ee = A / 2;
    _.setScissorTest(true), _.setViewport(0, 0, ee, W), _.setScissor(0, 0, ee, W), _.render(y, b), _.setViewport(ee, 0, ee, W), _.setScissor(ee, 0, ee, W), _.render(y, D), _.setScissorTest(false);
  }
  function Pe(A) {
    b = A, v.object = A, v.update(), J();
  }
  function Se(A, W) {
    E = A, W && (D = W);
    const ee = S.clientWidth || 1, se = S.clientHeight || 1, Ye = (A ? ee / 2 : ee) / se;
    m.isPerspectiveCamera && (m.aspect = Ye, m.updateProjectionMatrix());
    const Ee = g.top;
    if (g.left = -Ee * Ye, g.right = Ee * Ye, g.updateProjectionMatrix(), A && D) {
      if (oe ? (oe.object = D, oe.update()) : (oe = new po(D, _.domElement), oe.enableDamping = true, oe.dampingFactor = 0.1, oe.screenSpacePanning = true, oe.zoomSpeed = 0.8, oe.panSpeed = 1.2, oe.rotateSpeed = 0.9, oe.touches = { ONE: _n.ROTATE, TWO: _n.DOLLY_PAN }, oe._getZoomScale = function() {
        const Je = Math.abs(z);
        if (Je >= 80 && T === 0) return Math.pow(0.9, this.zoomSpeed);
        if (T === 1) return Math.pow(0.88, this.zoomSpeed);
        const Ke = Math.max(0.05, Math.min(Je / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * Ke);
      }, oe.target.copy(v.target), oe.addEventListener("change", J), oe.enabled = false), !pe) {
        const Je = (Ke) => {
          if (!E || !oe) return;
          const Et = _.domElement.getBoundingClientRect(), Xt = Ke.clientX - Et.left, It = Et.width / 2, Zt = Xt >= It;
          v.enabled = !Zt, oe.enabled = Zt;
        };
        _.domElement.addEventListener("pointerdown", Je, true), _.domElement.addEventListener("wheel", Je, { capture: true, passive: true }), pe = true;
      }
    } else A || (v.enabled = true, oe && (oe.enabled = false));
    S.__splitMode = A, window.__hekatanSplitMode = A, window.__hekatanSplitCamera = A ? D : null, J();
  }
  if (e) {
    y.add(Jo(M, ue, U), Wo(e, M, ue), jo(M, ue, U), es(e, M, ue, U), Oo(e, M, ue, U), Qo(e, M, ue, U), os(e, M, ue, U), as(e, M, ue, U), cs(e, M, ue, U), is(e, M, ue, U));
    const A = zs({ scene: y, rendererElm: _.domElement, getActiveCamera: () => b, derivedNodes: ue, derivedDisplayScale: U, mesh: e, settings: M, render: J });
    y.add(A);
    const W = Bs(e, M), ee = ms(e, M, ue, W), se = mo(W);
    y.add(ee), S.appendChild(se);
    const Le = vs(e, M, ue);
    y.add(Le);
    const Ye = Le.__colorMapValues, Ee = mo(Ye);
    Ee.id = "frame-legend", S.appendChild(Ee), L.derive(() => {
      var _a;
      const Je = M.shellResults.val != "none", Ke = (((_a = M.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Et = Je || Ke, Xt = M.frameResults.val.startsWith("contour:");
      se.hidden = !Et, ee.visible = Et, Ee.hidden = !Xt;
    });
  }
  if (l) {
    const A = new Ko(16777215, 0.5);
    y.add(A);
    const W = new co(16777215, 0.5);
    W.position.set(30, 25, -10), W.shadow.mapSize.width = 1024, W.shadow.mapSize.height = 1024, y.add(W);
    const ee = 10;
    W.shadow.camera.left = -ee, W.shadow.camera.right = ee, W.shadow.camera.top = ee, W.shadow.camera.bottom = -ee, W.shadow.camera.far = 1e3;
    const se = new co(16777215, 0.5);
    se.color.setHSL(11, 43, 96), se.position.set(-10, 0, 30), y.add(se), L.derive(() => {
      (l == null ? void 0 : l.val.length) && (y.remove(...l.oldVal), y.add(...l.rawVal), J());
    }), L.derive(() => {
      l.rawVal.forEach((Le) => Le.visible = M.solids.val), J();
    });
  }
  if (f) {
    const A = [], W = (se) => {
      var _a, _b;
      return ((_a = se == null ? void 0 : se.userData) == null ? void 0 : _a.isCota) ? M.showCotas.val : ((_b = se == null ? void 0 : se.userData) == null ? void 0 : _b.isDistLoad) ? M.loads.val : M.custom3D.val;
    }, ee = () => {
      for (const se of A) se.visible = W(se);
      J();
    };
    L.derive(() => {
      const se = f.val;
      A.length && (y.remove(...A), A.length = 0), se.length && (y.add(...se), A.push(...se), ee()), J();
    }), L.derive(() => {
      M.custom3D.val, ee();
    }), L.derive(() => {
      M.showCotas.val, ee();
    }), L.derive(() => {
      M.loads.val, ee();
    });
  }
  w && ds({ drawingObj: w, gridObj: re, scene: y, getActiveCamera: () => b, controls: v, gridSize: I, derivedDisplayScale: U, rendererElm: _.domElement, viewerRender: J }), yo((A, W) => {
    var _a;
    _.setClearColor(W.background, 1), y.remove(re), (_a = re.traverse) == null ? void 0 : _a.call(re, (ee) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ee.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ee.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), re = Yn(M.gridSize.rawVal, { planes: ne() }), y.add(re), S.style.setProperty("--awatif-legend-color", W.legendMarker), J();
  });
  const ke = { scene: y, perspCamera: m, orthoCamera: g, get camera() {
    return b;
  }, controls: v, renderer: _, rendererElm: _.domElement, render: J, setActiveCamera: Pe, setSplitMode: Se, get splitMode() {
    return E;
  }, get splitCamera() {
    return D;
  }, settings: M };
  S.__ctx = ke;
  const ze = document.createElement("div");
  ze.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Xe = (A, W, ee) => {
    const se = document.createElement("button");
    return se.textContent = A, se.title = W, se.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), se.onmouseenter = () => {
      se.style.background = "rgba(70,70,70,0.9)";
    }, se.onmouseleave = () => {
      se.style.background = "rgba(40,40,40,0.85)";
    }, se.onclick = (Le) => {
      Le.preventDefault(), ee();
    }, se;
  }, st = (A, W) => {
    const ee = v.target, se = new x().subVectors(b.position, ee), Le = se.length(), Ye = new x(), Ee = new x();
    Ye.crossVectors(b.up, se).normalize(), Ee.copy(b.up).normalize();
    const Je = Le * 0.05;
    ee.addScaledVector(Ye, -A * Je), ee.addScaledVector(Ee, W * Je), b.position.addScaledVector(Ye, -A * Je), b.position.addScaledVector(Ee, W * Je), v.update(), J();
  }, vt = (A) => {
    const W = new x().subVectors(b.position, v.target);
    W.multiplyScalar(A), b.position.copy(v.target).add(W), v.update(), J();
  }, Ue = () => {
    const A = document.createElement("div");
    return A.style.cssText = "width:32px;height:32px;", A;
  };
  return ze.append(Ue()), ze.append(Xe("\u2191", "Pan arriba", () => st(0, 1))), ze.append(Xe("\u2295", "Zoom in", () => vt(0.85))), ze.append(Xe("\u2190", "Pan izquierda", () => st(-1, 0))), ze.append(Xe("\u2302", "Reset vista", () => {
    v.reset(), J();
  })), ze.append(Xe("\u2192", "Pan derecha", () => st(1, 0))), ze.append(Xe("\u2296", "Zoom out", () => vt(1.18))), ze.append(Xe("\u2193", "Pan abajo", () => st(0, -1))), ze.append(Ue()), getComputedStyle(S).position === "static" && (S.style.position = "relative"), S.appendChild(ze), S;
}
function Vs(e, a) {
  return L.derive(() => {
    var _a, _b, _c, _d;
    if (!a.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const w = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], f = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!f || w.length === 0) return w;
    const l = a.deformScale.val, S = a.deformScale.val * a.deformScaleZ.val, y = Number.isFinite(l) ? l : 1, m = Number.isFinite(S) ? S : 1;
    return w.map((g, b) => {
      var _a2;
      const _ = ((_a2 = f.get(b)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(_[0]) ? _[0] : 0, K = Number.isFinite(_[1]) ? _[1] : 0, te = Number.isFinite(_[2]) ? _[2] : 0;
      return [g[0] + v * y, g[1] + K * y, g[2] + te * m];
    });
  });
}
const Wn = L.state(null), Un = L.state(""), Ts = L.state("kN"), Ls = L.state("mm"), Is = L.state("kN/m\xB2"), $s = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, wo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Rs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Bs(e, a) {
  const w = L.state([]);
  let f;
  return ((l) => {
    l.bendingXX = "bendingXX", l.bendingYY = "bendingYY", l.bendingXY = "bendingXY", l.membraneXX = "membraneXX", l.membraneYY = "membraneYY", l.membraneXY = "membraneXY", l.tranverseShearX = "tranverseShearX", l.tranverseShearY = "tranverseShearY", l.vonMises = "vonMises", l.membranePrincipalMax = "membranePrincipalMax", l.membranePrincipalMin = "membranePrincipalMin", l.bendingPrincipalMax = "bendingPrincipalMax", l.bendingPrincipalMin = "bendingPrincipalMin", l.transverseShearMax = "transverseShearMax", l.pressure = "pressure", l.displacementX = "displacementX", l.displacementY = "displacementY", l.displacementZ = "displacementZ";
  })(f || (f = {})), L.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const l = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), ne = (st, vt) => {
      st == null ? void 0 : st.forEach((Ue, A) => {
        const W = e.elements.val[A];
        if (W) for (let ee = 0; ee < W.length; ee++) vt.set(W[ee], [Ue[ee] ?? Ue[0]]);
      });
    };
    ne((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, l), ne((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, S), ne((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, y), ne((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, m), ne((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, g), ne((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, b), ne((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, _), ne((_p = (_o = e.analyzeOutputs) == null ? void 0 : _o.val) == null ? void 0 : _p.tranverseShearY, v), ne((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, K), ne((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.membranePrincipalMax, te), ne((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, de), ne((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, ie), ne((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, M), ne((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, U), ne((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, ue);
    const Z = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, re = (_G = a.solidResults) == null ? void 0 : _G.val, B = re && re !== "none" ? re : a.shellResults.val, I = Z == null ? void 0 : Z[B], V = { bendingXX: [l, 0], bendingYY: [S, 0], bendingXY: [y, 0], membraneXX: [m, 0], membraneYY: [g, 0], membraneXY: [b, 0], tranverseShearX: [_, 0], tranverseShearY: [v, 0], vonMises: [K, 0], membranePrincipalMax: [te, 0], membranePrincipalMin: [de, 0], bendingPrincipalMax: [ie, 0], bendingPrincipalMin: [M, 0], transverseShearMax: [U, 0], pressure: [ue, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, z = a.shellResults.val, T = Ts.val, C = Ls.val, N = z === "displacementX" || z === "displacementY" || z === "displacementZ", j = z === "bendingXX" || z === "bendingYY" || z === "bendingXY" || z === "bendingPrincipalMax" || z === "bendingPrincipalMin", Y = z === "membraneXX" || z === "membraneYY" || z === "membraneXY" || z === "membranePrincipalMax" || z === "membranePrincipalMin", ye = z === "vonMises" || z === "pressure", E = z === "tranverseShearX" || z === "tranverseShearY" || z === "transverseShearMax", D = (_N = a.solidResults) == null ? void 0 : _N.val, oe = D === "vonMises" || D === "sigmaXX" || D === "sigmaYY" || D === "sigmaZZ" || D === "tauXY" || D === "tauYZ" || D === "tauXZ", pe = D === "ux" || D === "uy" || D === "uz", J = Is.val, Pe = oe ? Rs[J] : pe || N ? wo[C] : j || Y || ye || E ? 1 / $s[T] : 1, Se = oe ? J : pe || N ? C : j ? `${T}\xB7m/m` : Y ? `${T}/m\xB2` : ye ? `${T}/m\xB2` : E ? `${T}/m` : "";
    Un.val = Se, Wn.val = Array.isArray(I) && I.length === 2 ? [I[0] * Pe, I[1] * Pe] : null;
    const ze = D && D !== "none" ? [K, 0] : V[z], Xe = [];
    e.nodes.val.forEach((st, vt) => {
      const Ue = ze;
      if (!Ue || !Ue[0] || typeof Ue[0].has != "function") return;
      if (!Ue[0].has(vt)) {
        Xe.push(Number.NaN);
        return;
      }
      const A = Ue[0].get(vt), W = A ? A[Ue[1]] ?? 0 : 0;
      Xe.push(W * Pe);
    }), w.val = Xe;
  }), w;
}
export {
  hs as a,
  mo as b,
  Ts as c,
  Ls as d,
  Is as e,
  Ns as g
};
