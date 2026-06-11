import { v as I, P as zo, q as dn, a7 as Rn, B as fe, a8 as Bn, F as It, a4 as Fo, K as tt, X as Gt, L as ht, h as jt, u as Ao, g as Do, a9 as No, i as nt, d as qe, V as m, $ as cn, aa as Wn, H as Eo, D as Dt, a as Lt, x as rt, z as Xn, ab as Yn, s as Zo, m as Uo, I as an, a2 as Sn, E as ho, f as wn, Q as Gn, ac as qn, C as mo, S as wo, c as yo, ad as Tn, p as Ko, ae as Ho, af as Wo, ag as Go, ah as qo, b as xo, ai as go, e as vo, W as Jo, N as Qo, O as Oo, Y as jo, T as Ln, o as Jn, Z as es, _ as bo, U as ts } from "./theme-BUyDDEHW.js";
import { T as zt, O as Mo } from "./Text-DR6pe57W.js";
import { e as ns } from "./styles-tOu98xnK.js";
function os(e, i, y) {
  const f = document.createElement("div"), c = new zo({ title: "Settings", expanded: true, container: f });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(c), f.setAttribute("id", "settings");
  const k = "hk_settingsPos";
  let g = null;
  try {
    const v = localStorage.getItem(k);
    v && (g = JSON.parse(v));
  } catch {
  }
  f.style.cssText = ["position:fixed", g ? `left:${g.left}px` : "left:8px", g ? `top:${g.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const x = () => {
    const v = f.querySelector(".tp-rotv_b");
    if (!v) {
      setTimeout(x, 200);
      return;
    }
    v.style.cursor = "move", v.style.userSelect = "none";
    let W = false, ee = 0, he = 0, ie = 0, _ = 0;
    v.addEventListener("mousedown", (H) => {
      W = true, ee = H.clientX, he = H.clientY;
      const me = f.getBoundingClientRect();
      ie = me.left, _ = me.top, f.style.left = `${ie}px`, f.style.top = `${_}px`;
    }), window.addEventListener("mousemove", (H) => {
      if (!W) return;
      const me = H.clientX - ee, te = H.clientY - he, K = Math.max(0, Math.min(window.innerWidth - 40, ie + me)), pe = Math.max(0, Math.min(window.innerHeight - 40, _ + te));
      f.style.left = `${K}px`, f.style.top = `${pe}px`;
    }), window.addEventListener("mouseup", () => {
      if (W) {
        W = false;
        try {
          localStorage.setItem(k, JSON.stringify({ left: parseFloat(f.style.left), top: parseFloat(f.style.top) }));
        } catch {
        }
      }
    });
  };
  if (x(), i == null ? void 0 : i.nodes) {
    c.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const v = c.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    v.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), v.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), v.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), v.addBinding(e.gridVisible, "val", { label: "Mostrar" }), v.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), v.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), v.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), v.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), c.addBinding(e.nodes, "val", { label: "Nodes" }), c.addBinding(e.elements, "val", { label: "Elements" }), c.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), c.addBinding(e.faces, "val", { label: "  Caras (fill)" }), c.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), c.addBinding(e.elemColumns, "val", { label: "    Columnas" }), c.addBinding(e.elemBeams, "val", { label: "    Vigas" }), c.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), c.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), c.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), c.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), c.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), c.addBinding(e.orientations, "val", { label: "Orientations" }), c.addBinding(e.sections, "val", { label: "Sections" }), c.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), c.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), c.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), c.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((i == null ? void 0 : i.nodeInputs) || (i == null ? void 0 : i.elementInputs)) {
    const v = c.addFolder({ title: "Analysis Inputs" });
    v.addBinding(e.supports, "val", { label: "Supports" }), v.addBinding(e.loads, "val", { label: "Loads" }), v.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), v.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((i == null ? void 0 : i.deformOutputs) || (i == null ? void 0 : i.analyzeOutputs)) {
    const v = c.addFolder({ title: "Analysis Outputs" });
    v.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), v.addBinding(e.frameResults, "val", { options: { none: "none", "P (normals)": "normals", "V2 (shearY)": "shearsY", "V3 (shearZ)": "shearsZ", "T (torsion)": "torsions", "M2 (bendingY)": "bendingsY", "M3 (bendingZ)": "bendingsZ", "contour P": "contour:normals", "contour V2": "contour:shearsY", "contour V3": "contour:shearsZ", "contour T": "contour:torsions", "contour M2": "contour:bendingsY", "contour M3": "contour:bendingsZ" }, label: "Frame results" }), v.addBinding(e.shellResults, "val", { options: { none: "none", "F11 (membraneXX)": "membraneXX", "F22 (membraneYY)": "membraneYY", "F12 (membraneXY)": "membraneXY", "FMax (principal)": "membranePrincipalMax", "FMin (principal)": "membranePrincipalMin", "M11 (bendingXX)": "bendingXX", "M22 (bendingYY)": "bendingYY", "M12 (bendingXY)": "bendingXY", "MMax (principal)": "bendingPrincipalMax", "MMin (principal)": "bendingPrincipalMin", "V13 (shearX)": "tranverseShearX", "V23 (shearY)": "tranverseShearY", "VMax (magnitud)": "transverseShearMax", "Von Mises": "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), v.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), v.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), v.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), v.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  y && c.addBinding(e.solids, "val", { label: "Solids" });
  const w = c.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), M = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), P = () => {
    const v = window.__hekatanClipApply;
    typeof v == "function" && v();
  };
  return w.addBinding(M, "enableX", { label: "Cortar X" }).on("change", P), w.addBinding(M, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", P), w.addBinding(M, "invertX", { label: "  invertir X" }).on("change", P), w.addBinding(M, "enableY", { label: "Cortar Y" }).on("change", P), w.addBinding(M, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", P), w.addBinding(M, "invertY", { label: "  invertir Y" }).on("change", P), w.addBinding(M, "enableZ", { label: "Cortar Z" }).on("change", P), w.addBinding(M, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", P), w.addBinding(M, "invertZ", { label: "  invertir Z" }).on("change", P), f;
}
function ss(e) {
  return { gridSize: I.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: I.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: I.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: I.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: I.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: I.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: I.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: I.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: I.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: I.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: I.state((e == null ? void 0 : e.nodes) ?? true), elements: I.state((e == null ? void 0 : e.elements) ?? true), edges: I.state((e == null ? void 0 : e.edges) ?? true), faces: I.state((e == null ? void 0 : e.faces) ?? true), elemColumns: I.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: I.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: I.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: I.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: I.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: I.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: I.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: I.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: I.state((e == null ? void 0 : e.orientations) ?? false), sections: I.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: I.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: I.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: I.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: I.state((e == null ? void 0 : e.secFloor) ?? -1), supports: I.state((e == null ? void 0 : e.supports) ?? true), loads: I.state((e == null ? void 0 : e.loads) ?? false), deformedShape: I.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: I.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: I.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: I.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: I.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: I.state((e == null ? void 0 : e.flipAxes) ?? false), solids: I.state((e == null ? void 0 : e.solids) ?? true), custom3D: I.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: I.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: I.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: I.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function as(e, i, y) {
  const f = dn(), c = new Rn(new fe(), new Bn({ color: f.nodePoint }));
  return Fo((k, g) => {
    c.material.color.setHex(g.nodePoint);
  }), c.frustumCulled = false, I.derive(() => {
    e.nodes.val && c.geometry.setAttribute("position", new It(i.val.flat(), 3));
  }), I.derive(() => {
    if (y.val, i.val, !e.nodes.rawVal) return;
    const k = i.rawVal ?? [];
    let g = e.gridSize.val * 0.5;
    if (k.length >= 2) {
      const w = [1 / 0, 1 / 0, 1 / 0], M = [-1 / 0, -1 / 0, -1 / 0];
      for (const P of k) for (let v = 0; v < 3; v++) w[v] = Math.min(w[v], P[v]), M[v] = Math.max(M[v], P[v]);
      g = Math.max(M[0] - w[0], M[1] - w[1], M[2] - w[2], 0.1);
    }
    const x = 0.03 * g;
    c.material.size = x * y.rawVal;
  }), I.derive(() => {
    c.visible = e.nodes.val;
  }), c;
}
function Qn(e, i) {
  const y = dn(), f = new tt();
  f.name = "hekatan-grid";
  const c = (i == null ? void 0 : i.planes) ?? ["xy"];
  let k = (i == null ? void 0 : i.majorStep) ?? 1, g = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (k <= 0 && (k = 1), g <= 0 && (g = 0.1); e / g > 500; ) g *= 2;
  for (; e / k > 100; ) k *= 2;
  const x = e / 2;
  k = Math.max(g, Math.round(k / g) * g);
  const M = new Gt(y.grid), P = new Gt(y.grid).multiplyScalar(0.45), v = (ee, he, ie, _) => {
    const H = [], me = ee === "xy" ? (X, $) => [X, $, 0] : ee === "xz" ? (X, $) => [X, 0, $] : (X, $) => [0, X, $], te = Math.floor(x / he);
    for (let X = -te; X <= te; X++) {
      const $ = X * he, E = me($, -x), F = me($, x);
      H.push(...E, ...F);
    }
    for (let X = -te; X <= te; X++) {
      const $ = X * he, E = me(-x, $), F = me(x, $);
      H.push(...E, ...F);
    }
    const K = new fe();
    K.setAttribute("position", new It(H, 3));
    const pe = new ht({ color: ie, transparent: true, opacity: _, depthWrite: false }), q = new jt(K, pe);
    return q.name = `grid-${ee}-${he === g ? "minor" : "major"}`, q;
  }, W = (ee, he, ie) => {
    const _ = ee === "xy" ? (q, X) => [q, X, 0] : ee === "xz" ? (q, X) => [q, 0, X] : (q, X) => [0, q, X], H = [[-x, -x], [x, -x], [x, x], [-x, x]], me = [];
    for (const [q, X] of H) me.push(..._(q, X));
    const te = new fe();
    te.setAttribute("position", new It(me, 3));
    const K = new ht({ color: he, transparent: true, opacity: ie, depthWrite: false }), pe = new Ao(te, K);
    return pe.name = `grid-${ee}-border`, pe.renderOrder = 1, pe;
  };
  for (const ee of c) f.add(v(ee, g, P, 0.12)), f.add(v(ee, k, M, 0.4)), f.add(W(ee, M, 0.55));
  return f.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: k, minorStep: g, gridSize: e, planes: [...c] }, f;
}
function is(e, i, y, f) {
  const c = new tt(), k = new Do(0.5, 0.5, 0.5), g = new No(0.45, 0.7, 4);
  g.rotateX(Math.PI / 2), g.translate(0, 0, -0.35);
  const x = new nt({ color: 10166822 }), w = new nt({ color: 2792847 }), M = new nt({ color: 3835647 }), P = () => {
    const ee = y.rawVal ?? [];
    if (ee.length < 2) return i.gridSize.val * 0.5;
    let he = [1 / 0, 1 / 0, 1 / 0], ie = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of ee) for (let H = 0; H < 3; H++) _[H] < he[H] && (he[H] = _[H]), _[H] > ie[H] && (ie[H] = _[H]);
    return Math.max(ie[0] - he[0], ie[1] - he[1], ie[2] - he[2], 0.1);
  }, v = () => 0.08 * P(), W = () => Math.max(f.rawVal, 1);
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    c.clear();
    const ee = v();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((he, ie) => {
      const _ = y.val[ie];
      if (!_) return;
      const H = he ?? [], me = (H[0] ? 1 : 0) + (H[1] ? 1 : 0) + (H[2] ? 1 : 0), te = (H[3] ? 1 : 0) + (H[4] ? 1 : 0) + (H[5] ? 1 : 0);
      let K;
      me >= 3 && te >= 3 ? K = new qe(k, x) : me >= 3 && te === 0 ? K = new qe(g, w) : K = new qe(g, M), K.position.set(_[0], _[1], _[2]);
      const pe = ee * W();
      K.scale.set(pe, pe, pe), c.add(K);
    });
  }), I.derive(() => {
    if (f.val, !i.supports.rawVal) return;
    const he = v() * W();
    c.children.forEach((ie) => ie.scale.set(he, he, he));
  }), I.derive(() => {
    c.visible = i.supports.val;
  }), c;
}
function ls(e, i, y, f) {
  const c = new tt();
  c.name = "loadsGroup";
  function k(g) {
    if (g.length < 2) return 0.12 * i.gridSize.rawVal;
    const x = [1 / 0, 1 / 0, 1 / 0], w = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of g) for (let v = 0; v < 3; v++) x[v] = Math.min(x[v], P[v]), w[v] = Math.max(w[v], P[v]);
    return 0.08 * Math.max(w[0] - x[0], w[1] - x[1], w[2] - x[2], 0.1);
  }
  return I.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    c.children.forEach((w) => w.dispose()), c.clear();
    const g = y.val, x = k(g);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((w, M) => {
      const P = g[M];
      if (!P) return;
      const v = new m(...w.slice(0, 3));
      if (v.lengthSq() < 1e-30) return;
      v.normalize();
      const W = new cn(v, new m(...P), 1, 15637248, 0.3, 0.3), ee = x * f.rawVal;
      W.scale.set(ee, ee, ee), c.add(W);
    });
  }), I.derive(() => {
    if (f.val, !i.loads.rawVal) return;
    const x = k(y.rawVal) * f.rawVal;
    c.children.forEach((w) => w.scale.set(x, x, x));
  }), I.derive(() => {
    c.visible = i.loads.val;
  }), c;
}
function rs(e, i, y) {
  const f = new tt();
  return I.derive(() => {
    if (!e.nodesIndexes.val) return;
    f.children.forEach((k) => k.dispose()), f.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((k, g) => {
      const x = new zt(`${g}`);
      x.position.set(...k), x.updateScale(c * y.rawVal), f.add(x);
    });
  }), I.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6;
    f.children.forEach((k) => k.updateScale(c * y.rawVal));
  }), I.derive(() => {
    f.visible = e.nodesIndexes.val;
  }), f;
}
function cs(e, i, y, f) {
  const c = new tt();
  return I.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    c.children.forEach((g) => g.dispose()), c.clear();
    const k = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((g, x) => {
      const w = new zt(`${x}`, void 0, "#001219");
      w.position.set(...ds(g.map((M) => y.rawVal[M]))), w.updateScale(k * f.rawVal), c.add(w);
    });
  }), I.derive(() => {
    if (f.val, !i.elementsIndexes.rawVal) return;
    const k = 0.05 * i.gridSize.val * 0.6;
    c.children.forEach((g) => g.updateScale(k * f.rawVal));
  }), I.derive(() => {
    c.visible = i.elementsIndexes.val;
  }), c;
}
function ds(e) {
  const i = e.reduce((f, c) => [f[0] + c[0], f[1] + c[1], f[2] + c[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function _o(e, i) {
  const y = new tt(), f = 0.05 * e * 1, c = dn(), k = new zt("X", "red", "transparent"), g = new zt(i ? "Z" : "Y", "green", "transparent"), x = new zt(i ? "Y" : "Z", "blue", "transparent"), w = new cn(new m(1, 0, 0), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), M = new cn(new m(0, 1, 0), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), P = new cn(new m(0, 0, 1), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2);
  return k.position.set(1.3 * f, 0, 0), g.position.set(0, 1.3 * f, 0), x.position.set(0, 0, 1.3 * f), k.updateScale(0.4 * f), g.updateScale(0.4 * f), x.updateScale(0.4 * f), w.scale.set(f, f, f), M.scale.set(f, f, f), P.scale.set(f, f, f), y.add(w, M, P, k, g, x), y;
}
function no(e, i) {
  const y = new m(...e), c = new m(...i).clone().sub(y), k = c.length(), g = c.dot(new m(1, 0, 0)) / k, x = c.dot(new m(0, 1, 0)) / k, w = c.dot(new m(0, 0, 1)) / k, M = Math.sqrt(g ** 2 + x ** 2);
  let P = new Wn().fromArray([[g, x, w], [-x / M, g / M, 0], [-g * w / M, -x * w / M, M]].flat());
  return w === 1 && (P = new Wn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), w === -1 && (P = new Wn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Eo().setFromMatrix3(P);
}
function eo(e, i) {
  return e == null ? void 0 : e.map((y, f) => (9 * y + i[f]) / 10);
}
function Pn(e) {
  const i = e.reduce((f, c) => [f[0] + c[0], f[1] + c[1], f[2] + c[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function ps(e, i, y) {
  const f = Pn([i, y]), c = Pn([e, y]), k = Pn([e, i]), g = new m(...f).sub(new m(...c)).normalize(), x = new m(...y).sub(new m(...k)).normalize(), w = g.clone().cross(x).normalize(), M = w.clone().cross(g).normalize();
  return new Eo().makeBasis(g, M, w);
}
function us(e, i, y, f) {
  const c = new tt(), k = new fe(), g = new ht({ vertexColors: true }), x = [0, 0, 0], w = [1, 0, 0], M = [0, 1, 0], P = [0, 0, 1];
  k.setAttribute("position", new It([...x, ...w, ...x, ...M, ...x, ...P], 3));
  const v = [255, 0, 0], W = [0, 255, 0], ee = [0, 0, 255];
  return k.setAttribute("color", new It([...v, ...v, ...W, ...W, ...ee, ...ee], 3)), I.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (c.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((he) => {
      const ie = new jt(k, g), _ = y.rawVal[he[0]], H = y.rawVal[he[1]];
      if (he.length === 2 && (ie.position.set(...eo(_, H)), ie.rotation.setFromRotationMatrix(no(_, H))), he.length === 3) {
        const K = y.rawVal[he[2]];
        ie.position.set(...Pn([_, H, K])), ie.rotation.setFromRotationMatrix(ps(_, H, K));
      }
      const te = 0.05 * i.gridSize.rawVal * 0.75 * f.rawVal;
      ie.scale.set(te, te, te), c.add(ie);
    }));
  }), I.derive(() => {
    if (f.val, !i.orientations.rawVal) return;
    const ie = 0.05 * i.gridSize.val * 0.75 * f.rawVal;
    c.children.forEach((_) => _.scale.set(ie, ie, ie));
  }), I.derive(() => {
    c.visible = i.orientations.val;
  }), c;
}
function fs(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const i = (e.b * 100).toFixed(0), y = (e.h * 100).toFixed(0);
    return `${i}x${y}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function hs(e, i, y, f) {
  const c = new tt(), k = new tt();
  c.add(k);
  function g(q, X) {
    const $ = q / 2, E = X / 2, F = new Float32Array([0, -$, -E, 0, $, -E, 0, $, E, 0, -$, -E, 0, $, E, 0, -$, E]), V = new fe();
    V.setAttribute("position", new rt(F, 3));
    const C = new Float32Array([0, -$, -E, 0, $, -E, 0, $, E, 0, -$, E, 0, -$, -E]), N = new fe();
    return N.setAttribute("position", new rt(C, 3)), { fill: V, outline: N };
  }
  function x(q, X = 24) {
    const $ = q / 2, E = new Float32Array(X * 9);
    for (let N = 0; N < X; N++) {
      const j = N / X * Math.PI * 2, D = (N + 1) / X * Math.PI * 2;
      E[N * 9] = 0, E[N * 9 + 1] = 0, E[N * 9 + 2] = 0, E[N * 9 + 3] = 0, E[N * 9 + 4] = $ * Math.cos(j), E[N * 9 + 5] = $ * Math.sin(j), E[N * 9 + 6] = 0, E[N * 9 + 7] = $ * Math.cos(D), E[N * 9 + 8] = $ * Math.sin(D);
    }
    const F = new fe();
    F.setAttribute("position", new rt(E, 3));
    const V = new Float32Array((X + 1) * 3);
    for (let N = 0; N <= X; N++) {
      const j = N / X * Math.PI * 2;
      V[N * 3] = 0, V[N * 3 + 1] = $ * Math.cos(j), V[N * 3 + 2] = $ * Math.sin(j);
    }
    const C = new fe();
    return C.setAttribute("position", new rt(V, 3)), { fill: F, outline: C };
  }
  function w(q, X, $, E) {
    const F = $ ?? X * 0.08, V = E ?? q * 0.07, C = q / 2, N = X / 2, j = N - F, D = V / 2, xe = [];
    function A(J, Pe, be, Ce) {
      xe.push(0, J, Pe, 0, be, Pe, 0, be, Ce, 0, J, Pe, 0, be, Ce, 0, J, Ce);
    }
    A(-C, -N, C, -j), A(-D, -j, D, j), A(-C, j, C, N);
    const Z = new fe();
    Z.setAttribute("position", new rt(new Float32Array(xe), 3));
    const Q = new Float32Array([0, -C, -N, 0, C, -N, 0, C, -j, 0, D, -j, 0, D, j, 0, C, j, 0, C, N, 0, -C, N, 0, -C, j, 0, -D, j, 0, -D, -j, 0, -C, -j, 0, -C, -N]), ae = new fe();
    return ae.setAttribute("position", new rt(Q, 3)), { fill: Z, outline: ae };
  }
  function M(q, X, $) {
    const E = q / 2, F = X / 2, V = E - $, C = F - $, N = [];
    function j(Z, Q, ae, J) {
      N.push(0, Z, Q, 0, ae, Q, 0, ae, J, 0, Z, Q, 0, ae, J, 0, Z, J);
    }
    j(-E, -F, E, -C), j(-E, C, E, F), j(-E, -C, -V, C), j(V, -C, E, C);
    const D = new fe();
    D.setAttribute("position", new rt(new Float32Array(N), 3));
    const xe = new Float32Array([0, -E, -F, 0, E, -F, 0, E, -F, 0, E, F, 0, E, F, 0, -E, F, 0, -E, F, 0, -E, -F, 0, -V, -C, 0, V, -C, 0, V, -C, 0, V, C, 0, V, C, 0, -V, C, 0, -V, C, 0, -V, -C]), A = new fe();
    return A.setAttribute("position", new rt(xe, 3)), { fill: D, outline: A };
  }
  function P(q, X, $) {
    const E = q / 2, F = X / 2, V = E - $, C = F - $, N = new fe(), j = new Float32Array([0, -V, -C, 0, V, -C, 0, V, C, 0, -V, -C, 0, V, C, 0, -V, C]);
    N.setAttribute("position", new rt(j, 3));
    const D = [];
    function xe(ae, J, Pe, be) {
      D.push(0, ae, J, 0, Pe, J, 0, Pe, be, 0, ae, J, 0, Pe, be, 0, ae, be);
    }
    xe(-E, -F, E, -C), xe(-E, C, E, F), xe(-E, -C, -V, C), xe(V, -C, E, C);
    const A = new fe();
    A.setAttribute("position", new rt(new Float32Array(D), 3));
    const Z = new Float32Array([0, -E, -F, 0, E, -F, 0, E, -F, 0, E, F, 0, E, F, 0, -E, F, 0, -E, F, 0, -E, -F, 0, -V, -C, 0, V, -C, 0, V, -C, 0, V, C, 0, V, C, 0, -V, C, 0, -V, C, 0, -V, -C]), Q = new fe();
    return Q.setAttribute("position", new rt(Z, 3)), { concFill: N, steelFillGeom: A, outline: Q };
  }
  function v(q, X, $) {
    const E = [], F = [[0, -q / 2, -X / 2], [0, -q / 2 + $, -X / 2], [0, -q / 2 + $, X / 2 - $], [0, q / 2, X / 2 - $], [0, q / 2, X / 2], [0, -q / 2, X / 2]], V = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const D of V) E.push(...F[D]);
    const C = new fe();
    C.setAttribute("position", new rt(new Float32Array(E), 3));
    const N = [];
    for (let D = 0; D < F.length; D++) {
      const xe = (D + 1) % F.length;
      N.push(...F[D], ...F[xe]);
    }
    const j = new fe();
    return j.setAttribute("position", new rt(new Float32Array(N), 3)), { fill: C, outline: j };
  }
  function W(q, X, $, E) {
    const F = E / 2, V = [], C = [[0, -q - F, -X / 2], [0, -$ - F, -X / 2], [0, -$ - F, X / 2 - $], [0, -F, X / 2 - $], [0, -F, X / 2], [0, -q - F, X / 2]], N = [[0, F, -X / 2], [0, F + $, -X / 2], [0, F + $, X / 2 - $], [0, q + F, X / 2 - $], [0, q + F, X / 2], [0, F, X / 2]], j = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Z of j) V.push(...C[Z]);
    for (const Z of j) V.push(...N[Z]);
    const D = new fe();
    D.setAttribute("position", new rt(new Float32Array(V), 3));
    const xe = [];
    for (const Z of [C, N]) for (let Q = 0; Q < Z.length; Q++) {
      const ae = (Q + 1) % Z.length;
      xe.push(...Z[Q], ...Z[ae]);
    }
    const A = new fe();
    return A.setAttribute("position", new rt(new Float32Array(xe), 3)), { fill: D, outline: A };
  }
  function ee(q, X, $, E) {
    const F = X / 2, V = q, C = [[0, -V, -F], [0, -V, -F + $], [0, -E, -F + $], [0, -E, F - $], [0, -V, F - $], [0, -V, F], [0, 0, F], [0, 0, -F]], N = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], j = [];
    for (const Z of N) j.push(...C[Z]);
    const D = new fe();
    D.setAttribute("position", new rt(new Float32Array(j), 3));
    const xe = [];
    for (let Z = 0; Z < C.length; Z++) {
      const Q = (Z + 1) % C.length;
      xe.push(...C[Z], ...C[Q]);
    }
    const A = new fe();
    return A.setAttribute("position", new rt(new Float32Array(xe), 3)), { fill: D, outline: A };
  }
  function he(q, X, $, E, F) {
    const V = X / 2, C = F / 2, N = [], j = [[0, -q, -V], [0, -q, -V + $], [0, -C - E, -V + $], [0, -C - E, V - $], [0, -q, V - $], [0, -q, V], [0, -C, V], [0, -C, -V]], D = j.map((ae) => [ae[0], -ae[1], ae[2]]), xe = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ae of xe) N.push(...j[ae]);
    for (const ae of xe) N.push(...D[ae]);
    const A = new fe();
    A.setAttribute("position", new rt(new Float32Array(N), 3));
    const Z = [];
    for (const ae of [j, D]) for (let J = 0; J < ae.length; J++) {
      const Pe = (J + 1) % ae.length;
      Z.push(...ae[J], ...ae[Pe]);
    }
    const Q = new fe();
    return Q.setAttribute("position", new rt(new Float32Array(Z), 3)), { fill: A, outline: Q };
  }
  function ie(q, X, $, E) {
    const F = q / 2, V = X / 2, C = E / 2, N = [[0, -C, -V], [0, C, -V], [0, C, V - $], [0, F, V - $], [0, F, V], [0, -F, V], [0, -F, V - $], [0, -C, V - $]], j = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], D = [];
    for (const Q of j) D.push(...N[Q]);
    const xe = new fe();
    xe.setAttribute("position", new rt(new Float32Array(D), 3));
    const A = [];
    for (let Q = 0; Q < N.length; Q++) {
      const ae = (Q + 1) % N.length;
      A.push(...N[Q], ...N[ae]);
    }
    const Z = new fe();
    return Z.setAttribute("position", new rt(new Float32Array(A), 3)), { fill: xe, outline: Z };
  }
  function _(q, X, $ = 24) {
    const E = q / 2, F = E - X, V = [];
    for (let D = 0; D < $; D++) {
      const xe = D / $ * Math.PI * 2, A = (D + 1) / $ * Math.PI * 2, Z = Math.cos(xe), Q = Math.sin(xe), ae = Math.cos(A), J = Math.sin(A);
      V.push(0, E * Z, E * Q, 0, E * ae, E * J, 0, F * ae, F * J), V.push(0, E * Z, E * Q, 0, F * ae, F * J, 0, F * Z, F * Q);
    }
    const C = new fe();
    C.setAttribute("position", new rt(new Float32Array(V), 3));
    const N = [];
    for (let D = 0; D < $; D++) {
      const xe = D / $ * Math.PI * 2, A = (D + 1) / $ * Math.PI * 2;
      N.push(0, E * Math.cos(xe), E * Math.sin(xe), 0, E * Math.cos(A), E * Math.sin(A)), N.push(0, F * Math.cos(xe), F * Math.sin(xe), 0, F * Math.cos(A), F * Math.sin(A));
    }
    const j = new fe();
    return j.setAttribute("position", new rt(new Float32Array(N), 3)), { fill: C, outline: j };
  }
  const H = new nt({ color: 52479, transparent: true, opacity: 0.35, side: Dt, depthWrite: false }), me = new ht({ color: 52479 }), te = new nt({ color: 16750848, transparent: true, opacity: 0.4, side: Dt, depthWrite: false }), K = new ht({ color: 16750848 });
  function pe(q, X) {
    const $ = Math.abs(X[0] - q[0]), E = Math.abs(X[1] - q[1]), F = Math.abs(X[2] - q[2]);
    return F > $ && F > E || E > $ && E > F;
  }
  return I.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const q = i.secColumns.rawVal, X = i.secBeams.rawVal;
    if (!q && !X) {
      c.children.forEach((C) => {
        C instanceof zt && C.dispose();
      }), c.clear();
      return;
    }
    c.children.forEach((C) => {
      C instanceof zt && C.dispose();
    }), c.clear();
    const $ = (_a = e.elements) == null ? void 0 : _a.val, E = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!$ || !E) return;
    const F = E.sectionShapes, V = i.secFloor.rawVal;
    $.forEach((C, N) => {
      if (C.length !== 2) return;
      const j = y.rawVal[C[0]], D = y.rawVal[C[1]];
      if (!j || !D) return;
      const xe = pe(j, D);
      if (xe && !q || !xe && !X) return;
      if (V >= 0) {
        const J = Math.min(j[1], D[1]);
        Math.max(j[1], D[1]);
        const Pe = i.gridSize.rawVal || 3;
        if (Math.floor(J / Pe + 0.01) !== V) return;
      }
      const A = F == null ? void 0 : F.get(N);
      if (!A) return;
      const Z = [(j[0] + D[0]) / 2, (j[1] + D[1]) / 2, (j[2] + D[2]) / 2], Q = no(j, D);
      if (A.type === "CFT") {
        const J = P(A.b, A.h, A.tw ?? A.b * 0.05), Pe = new qe(J.concFill, H);
        Pe.position.set(...Z), Pe.rotation.setFromRotationMatrix(Q), c.add(Pe);
        const be = new qe(J.steelFillGeom, te);
        be.position.set(...Z), be.rotation.setFromRotationMatrix(Q), c.add(be);
        const Ce = new Lt(J.outline, K);
        Ce.position.set(...Z), Ce.rotation.setFromRotationMatrix(Q), c.add(Ce);
      } else {
        let J, Pe, be;
        switch (A.type) {
          case "rect":
            J = g(A.b, A.h), Pe = H, be = me;
            break;
          case "circ":
            J = x(A.d), Pe = H, be = me;
            break;
          case "I":
            J = w(A.b, A.h, A.tf, A.tw), Pe = te, be = K;
            break;
          case "HSS":
            J = M(A.b, A.h, A.tw ?? A.b * 0.05), Pe = te, be = K;
            break;
          case "CFT":
            J = P(A.b, A.h, A.tw ?? A.b * 0.05), Pe = te, be = K;
            break;
          case "L":
            J = v(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3), Pe = te, be = K;
            break;
          case "2L":
            J = W(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3, A.dis ?? 0.01), Pe = te, be = K;
            break;
          case "C":
          case "coldC":
            J = ee(A.b, A.h, A.tf ?? A.t ?? 3e-3, A.tw ?? A.t ?? 3e-3), Pe = te, be = K;
            break;
          case "2C":
            J = he(A.b, A.h, A.tf ?? 5e-3, A.tw ?? 5e-3, A.dis ?? 0.01), Pe = te, be = K;
            break;
          case "T":
            J = ie(A.b, A.h, A.tf ?? 0.01, A.tw ?? 6e-3), Pe = te, be = K;
            break;
          case "pipe":
            J = _(A.d, A.tw ?? A.d * 0.05), Pe = te, be = K;
            break;
          default:
            return;
        }
        const Ce = new qe(J.fill, Pe);
        Ce.position.set(...Z), Ce.rotation.setFromRotationMatrix(Q), c.add(Ce);
        const Se = new Lt(J.outline, be);
        Se.position.set(...Z), Se.rotation.setFromRotationMatrix(Q), c.add(Se);
      }
      const ae = fs(A);
      if (ae) {
        const Pe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(A.type) ? "#ff9900" : "#00ccff", be = new zt(ae, Pe, "transparent");
        be.position.set(Z[0], Z[1], Z[2]);
        const Ce = 0.05 * i.gridSize.rawVal * 0.5;
        be.updateScale(Ce * ((f == null ? void 0 : f.rawVal) ?? 1)), k.add(be);
      }
    });
  }), f && I.derive(() => {
    if (f.val, !i.sections.rawVal) return;
    const q = 0.05 * i.gridSize.val * 0.5;
    k.children.forEach((X) => {
      X instanceof zt && X.updateScale(q * f.rawVal);
    });
  }), I.derive(() => {
    c.visible = i.sections.val;
  }), I.derive(() => {
    k.visible = i.sectionLabels.val;
  }), c;
}
class In extends tt {
  constructor(i, y, f, c, k, g, x) {
    super();
    const w = new Xn().moveTo(0, 0).lineTo(0, g[1]).lineTo(f, g[1]).lineTo(f, 0).lineTo(0, 0), M = w.getPoints(), P = new fe().setFromPoints(M);
    this.lines = new Lt(P, new ht({ color: dn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new Yn(w), W = new nt({ color: g[1] > 0 ? 24435 : 11411474, side: Dt });
    this.mesh = new qe(v, W), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new zt(`${k[1].toFixed(2)}`), this.normalizedResult = g, this.textPosition = Pn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(c), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class So extends tt {
  constructor(i, y, f, c, k, g, x) {
    super();
    const w = k[0] * f / (k[0] + k[1]), M = k[0] * k[1] > 0;
    if (this.text = new zt(`${k[0].toFixed(2)}`), this.text2 = new zt(`${(k[1] * -1).toFixed(2)}`), this.normalizedResult = g, this.textPosition = eo(i, y), this.text2Position = eo(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(c), this.text2.rotation.setFromRotationMatrix(c), this.add(this.text, this.text2), M) {
      const P = new Xn().moveTo(0, 0).lineTo(0, g[0]).lineTo(w, 0).lineTo(0, 0), v = new Xn().moveTo(w, 0).lineTo(f, -g[1]).lineTo(f, 0).lineTo(w, 0), W = P.getPoints(), ee = v.getPoints(), he = new fe().setFromPoints(W), ie = new fe().setFromPoints(ee), _ = new ht({ color: dn().resultOutline });
      this.lines = new Lt(he, _), this.lines2 = new Lt(ie, _), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), this.lines2.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), x && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const H = new Yn(P), me = new Yn(v), te = new nt({ color: g[0] > 0 ? 24435 : 11411474, side: Dt }), K = new nt({ color: -g[1] > 0 ? 24435 : 11411474, side: Dt });
      this.mesh = new qe(H, te), this.mesh2 = new qe(me, K), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), this.mesh2.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), x && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Xn().moveTo(0, 0).lineTo(0, g[0]).lineTo(f, -g[1]).lineTo(f, 0).lineTo(0, 0), v = P.getPoints(), W = new fe().setFromPoints(v);
      this.lines = new Lt(W, new ht({ color: dn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const ee = new Yn(P), he = new nt({ color: g[0] > 0 ? 24435 : 11411474, side: Dt });
      this.mesh = new qe(ee, he), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(i) {
    var _a, _b;
    this.lines.scale.set(1, i * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text2.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * i), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e = this.mesh2) == null ? void 0 : _e.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var Vo = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Vo || {});
function ms(e, i, y, f) {
  const c = new tt(), k = () => {
    const w = y.rawVal ?? [];
    if (w.length < 2) return i.gridSize.val * 0.5;
    let M = [1 / 0, 1 / 0, 1 / 0], P = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of w) for (let W = 0; W < 3; W++) v[W] < M[W] && (M[W] = v[W]), v[W] > P[W] && (P[W] = v[W]);
    return Math.max(P[0] - M[0], P[1] - M[1], P[2] - M[2], 0.1);
  }, g = () => 0.025 * k(), x = { normals: In, shearsY: In, shearsZ: In, torsions: In, bendingsY: So, bendingsZ: So };
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    c.children.forEach((M) => M.dispose()), c.clear();
    const w = Vo[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[w]) == null ? void 0 : _b.forEach((M, P) => {
      var _a2, _b2;
      const v = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[P]) ?? [0, 1], W = y.rawVal[v[0]], ee = y.rawVal[v[1]], he = new m(...ee).distanceTo(new m(...W)), ie = ws((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[w]), _ = M == null ? void 0 : M.map((K) => K / (ie === 0 ? 1 : ie)), H = no(W, ee), me = new x[w](W, ee, he, H, M ?? [0, 0], _ ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(w)), te = g();
      me.updateScale(te * f.rawVal), c.add(me);
    });
  }), I.derive(() => {
    if (f.val, i.frameResults.rawVal == "none") return;
    const w = g();
    c.children.forEach((M) => M.updateScale(w * f.rawVal));
  }), I.derive(() => {
    c.visible = i.frameResults.val != "none";
  }), c;
}
function ws(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((y) => {
    const f = Math.max(...y ?? [0, 0]);
    f > i && (i = f);
  }), i;
}
class ys extends tt {
  constructor(i, y, f) {
    super();
    const c = y === oo.reactions;
    f[0] && (this.xText1 = new zt(`${c ? "Fx" : "Dx"}: ` + f[0].toFixed(4))), f[3] && (this.xText2 = new zt(`${c ? "Mx" : "Rx"}: ` + f[3].toFixed(4))), f[1] && (this.yText1 = new zt(`${c ? "Fy" : "Dy"}: ` + f[1].toFixed(4))), f[4] && (this.yText2 = new zt(`${c ? "My" : "Ry"}: ` + f[4].toFixed(4))), f[2] && (this.zText1 = new zt(`${c ? "Fz" : "Dz"}: ` + f[2].toFixed(4))), f[5] && (this.zText2 = new zt(`${c ? "Mz" : "Rz"}: ` + f[5].toFixed(4))), (f[0] || f[3]) && (this.xArrow = new cn(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[1] || f[4]) && (this.yArrow = new cn(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[2] || f[5]) && (this.zArrow = new cn(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(i) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(i, i, i), (_b = this.yArrow) == null ? void 0 : _b.scale.set(i, i, i), (_c = this.zArrow) == null ? void 0 : _c.scale.set(i, i, i), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * i, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * i, 0, 0.5 * i), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * i, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * i, 0.5 * i), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * i), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * i + 0.5 * i), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * i), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * i), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * i), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * i), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * i), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * i);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var oo = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(oo || {});
function xs(e, i, y, f) {
  const c = new tt();
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    c.children.forEach((x) => x.dispose()), c.clear();
    const k = oo[i.nodeResults.rawVal], g = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[k]) == null ? void 0 : _b.forEach((x, w) => {
      const M = new ys(y.rawVal[w], k, x ?? [0, 0, 0, 0, 0, 0]);
      M.updateScale(g * f.rawVal), c.add(M);
    });
  }), I.derive(() => {
    if (f.val, i.nodeResults.rawVal == "none") return;
    const k = 0.05 * i.gridSize.val;
    c.children.forEach((g) => g.updateScale(k * f.rawVal));
  }), I.derive(() => {
    c.visible = i.nodeResults.val != "none";
  }), c;
}
function gs({ drawingObj: e, gridObj: i, scene: y, getActiveCamera: f, controls: c, gridSize: k, derivedDisplayScale: g, rendererElm: x, viewerRender: w }) {
  const M = new Zo(), P = new Uo(), v = (n) => {
    const o = x.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const d = r / 2;
      if (a >= d) return P.x = (a - d) / d * 2 - 1, P.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? f();
      P.x = a / d * 2 - 1;
    } else P.x = a / r * 2 - 1;
    return P.y = -(t / s) * 2 + 1, f();
  }, W = new qe(new an(1e4, 1e4), new nt({ side: Dt, transparent: true, opacity: 0, depthWrite: false }));
  W.visible = true, W.frustumCulled = false, y.add(W);
  const ee = (n, o, a) => {
    const t = new qe(new an(1e4, 1e4), new nt({ side: Dt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, he = ee(Math.PI / 2, 0, 0), ie = ee(0, Math.PI / 2, 0), _ = () => {
    if (he.visible = !!window.__hekatanGridPlaneXZ, ie.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Ke.visible) {
      const a = M.intersectObjects([Ke, Ue, mt], false);
      if (a.length > 0) return a;
    }
    const o = [W];
    return he.visible && o.push(he), ie.visible && o.push(ie), at.visible && yt.length > 0 && o.push(...yt), M.intersectObjects(o, false);
  }, H = new Rn(new fe(), new Bn()), me = new Rn(new fe(), new Bn({ color: "gray", sizeAttenuation: false, size: 6 })), te = new Rn(new fe(), new Bn({ color: "orange", size: 0.1 }));
  y.add(te);
  const K = document.createElement("input");
  K.id = "hk-rubber-label", K.type = "text", K.spellcheck = false, K.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, K.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(K);
  let pe = null, q = null, X = false;
  const $ = new m(), E = (n, o, a, t, r, s) => {
    const l = t - n, d = r - o, u = s - a, b = Math.hypot(l, d, u);
    if (b < 0.01) {
      K.style.display = "none";
      return;
    }
    pe = [n, o, a], q = [l / b, d / b, u / b], $.set((n + t) / 2, (o + r) / 2, (a + s) / 2), $.project(f());
    const S = x.getBoundingClientRect(), p = S.left + ($.x * 0.5 + 0.5) * S.width, h = S.top + (-$.y * 0.5 + 0.5) * S.height;
    if (K.style.left = p + "px", K.style.top = h + "px", K.style.display = "block", !X) {
      if (K.value = `${b.toFixed(2)} m`, document.activeElement !== K) {
        const z = document.activeElement;
        z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA") && z !== K || K.focus({ preventScroll: true });
      }
      try {
        K.select();
      } catch {
      }
    }
  }, F = () => {
    K.style.display = "none", pe = null, q = null, X = false, document.activeElement === K && K.blur();
  }, V = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Et = n, se(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), K.blur();
      return;
    }
    if (!pe || !q || !e.polylines) return;
    let a = q[0], t = q[1], r = q[2];
    R === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : R === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : R === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = pe[0] + a * n, l = pe[1] + t * n, d = pe[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, d]];
    const u = e.polylines.rawVal, b = u.length ? u[u.length - 1] : [];
    e.polylines.val = [...u.slice(0, -1), [...b, e.points.rawVal.length - 1]], K.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    w();
  }, C = (n) => {
    let o = n.trim().toLowerCase().replace(/m$/g, "").trim();
    if (!o) return null;
    const a = o.startsWith("@");
    if (a && (o = o.slice(1)), o.includes("<")) {
      const r = o.split("<").map((s) => parseFloat(s.trim()));
      if (r.some(isNaN)) return null;
      if (r.length === 2) {
        const [s, l] = r;
        return a ? { kind: "relPolar", L: s, ang: l } : { kind: "absPolar", L: s, ang: l };
      }
      if (r.length === 3 && a) {
        const [s, l, d] = r;
        return { kind: "relSpherical", L: s, az: l, el: d };
      }
      return null;
    }
    if (o.includes(",")) {
      const r = o.split(",").map((u) => parseFloat(u.trim()));
      if (r.some(isNaN)) return null;
      const [s, l, d = 0] = r;
      return a ? { kind: "relCart", dx: s, dy: l, dz: d } : { kind: "absCart", x: s, y: l, z: d };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, N = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return pe ? [pe[0] + n.dx, pe[1] + n.dy, pe[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!pe) return null;
      const o = n.ang * Math.PI / 180;
      return [pe[0] + n.L * Math.cos(o), pe[1] + n.L * Math.sin(o), pe[2]];
    }
    if (n.kind === "relSpherical") {
      if (!pe) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [pe[0] + t * Math.cos(o), pe[1] + t * Math.sin(o), pe[2] + n.L * Math.sin(a)];
    }
    return null;
  }, j = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], K.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    w();
  };
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = C(n);
    if (!o) return false;
    if (o.kind === "length") return V(o.L), true;
    const a = N(o);
    if (!a) return false;
    if (j(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
      const r = e.polylines.rawVal, s = r.length - 1, l = r[s] ?? [];
      if (l.length === 4) {
        e.polylines.val = [...r.slice(0, -1), [...l, l[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, s]);
        try {
          (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
        } catch {
        }
      }
    }
    return true;
  }, K.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = C(K.value);
      if (!a) return;
      if (X = false, a.kind === "length") V(a.L), se(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = N(a);
        if (!t) return;
        j(t);
        const r = a.kind;
        se(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), X = false, K.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!X && K.style.display === "block") try {
          K.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (X = true);
  }), window.addEventListener("keydown", (n) => {
    if (!pe || !q || document.activeElement === K) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (K.value = n.key, K.focus(), K.setSelectionRange(1, 1), n.preventDefault());
  });
  const D = document.createElement("div");
  D.id = "hk-coord-readout", D.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", D.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(D);
  const xe = document.createElement("div");
  xe.id = "hk-coord-fixed", xe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", xe.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(xe);
  const A = new Lt(new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new Sn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  A.frustumCulled = false, A.visible = false, y.add(A);
  const Z = new Lt(new fe(), new ht({ color: 2282478, transparent: true, opacity: 0.9 }));
  Z.frustumCulled = false, Z.visible = false, y.add(Z);
  let Q = [];
  const ae = new tt(), J = new qe(new an(1, 1), new nt({ color: 2282478, transparent: true, opacity: 0.08, side: Dt, depthWrite: false })), Pe = new jt(new ho(new an(1, 1)), new ht({ color: 2282478, transparent: true, opacity: 0.85 })), be = new jt(new fe(), new ht({ color: 2282478, transparent: true, opacity: 0.3 })), Ce = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    be.geometry.dispose(), be.geometry = new fe(), be.geometry.setAttribute("position", new It(a, 3));
  };
  ae.add(J, Pe, be), ae.visible = false, ae.frustumCulled = false, y.add(ae);
  const Se = new tt();
  Se.frustumCulled = false, Se.visible = false, y.add(Se);
  const Ne = (n) => {
    const o = new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new Sn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Lt(o, a);
  }, Mt = Ne(16711680), St = Ne(65280), ct = Ne(35071);
  Se.add(Mt, St, ct);
  const T = (n) => {
    const o = new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new ht({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new Ao(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, O = T(3462041), oe = T(16724804), ce = T(6333946), Fe = new tt();
  Fe.frustumCulled = false, Fe.visible = false, y.add(Fe), Fe.add(O, oe, ce);
  const Ge = (n) => {
    const o = new an(1, 1), a = new nt({ color: n, transparent: true, opacity: 0.06, side: Dt, depthWrite: false }), t = new qe(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Ke = Ge(3462041), Ue = Ge(16724804), mt = Ge(6333946);
  Fe.add(Ke, Ue, mt);
  const wt = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, $t = document.createElement("div");
  $t.id = "hk-refplane-badge", $t.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild($t), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Fe.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      Rt(O, s, "xy", l), Rt(oe, s, "xz", l), Rt(ce, s, "yz", l), wt(Ke, s, "xy", l), wt(Ue, s, "xz", l), wt(mt, s, "yz", l), Ke.material.opacity = 0.1, Ue.material.opacity = 0.1, mt.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    w();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !Fe.visible) {
      w();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    Rt(O, s, "xy", n), Rt(oe, s, "xz", n), Rt(ce, s, "yz", n), wt(Ke, s, "xy", n), wt(Ue, s, "xz", n), wt(mt, s, "yz", n), w();
  };
  const qt = (n) => {
    if (Ke.material.opacity = n === "xy" ? 0.14 : 0.04, Ue.material.opacity = n === "xz" ? 0.14 : 0.04, mt.material.opacity = n === "yz" ? 0.14 : 0.04, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      $t.style.background = r.bg, $t.style.color = r.text, $t.textContent = `\u25A6 Plano ${n.toUpperCase()}`, $t.style.display = "block";
    } else $t.style.display = "none";
  }, Rt = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let R = null;
  window.__hekatanAxisLock = () => R;
  let le = null;
  const de = document.createElement("div");
  de.id = "hk-axis-lock-badge", de.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(de);
  const re = () => {
    if (!R) {
      de.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    de.style.background = "rgba(15,23,42,0.92)", de.style.color = n[R], de.style.border = `1.5px solid ${n[R]}`, de.textContent = `\u{1F512} LOCK ${R.toUpperCase()}`, de.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== K) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && Q.length >= 3) {
      const r = Xe();
      se(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") R = R === a ? null : a, re(), n.preventDefault();
    else if (n.key === "Escape") {
      const r = document.activeElement;
      r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && r.blur(), co(), n.preventDefault();
    } else if (n.key === "F8") {
      n.preventDefault(), window.__hekatanOrthoMode = !window.__hekatanOrthoMode;
      const r = window.__hekatanOrthoMode;
      (_d = window.__hekatanRefreshStatus) == null ? void 0 : _d.call(window);
      let s = document.getElementById("hk-ortho-frame");
      s || (s = document.createElement("div"), s.id = "hk-ortho-frame", s.style.cssText = ["position:fixed", "inset:0", "z-index:99996", "border:3px solid rgba(34,211,238,0.85)", "box-shadow:inset 0 0 24px rgba(34,211,238,0.35)", "pointer-events:none"].join(";") + ";", document.body.appendChild(s)), s.style.display = r ? "block" : "none";
      let l = document.getElementById("hk-ortho-badge");
      l || (l = document.createElement("div"), l.id = "hk-ortho-badge", l.style.cssText = ["position:fixed", "top:10px", "left:50%", "transform:translateX(-50%)", "z-index:99998", "padding:6px 16px", "background:rgba(34,211,238,0.95)", "color:#0a1f24", "border-radius:6px", "border:2px solid rgba(8,145,178,1)", "box-shadow:0 4px 16px rgba(34,211,238,0.5)", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "pointer-events:none", "white-space:nowrap"].join(";") + ";", l.textContent = "\u22A5 ORTO ON (F8)", document.body.appendChild(l)), l.style.display = r ? "block" : "none";
    }
  });
  const Ye = new m(), Ze = new m(), Qe = new m(), $e = (n) => {
    if (!R) return null;
    const o = n[0], a = n[1], t = n[2];
    return R === "x" ? (Ye.set(o - 1e4, a, t), Ze.set(o + 1e4, a, t)) : R === "y" ? (Ye.set(o, a - 1e4, t), Ze.set(o, a + 1e4, t)) : (Ye.set(o, a, t - 1e4), Ze.set(o, a, t + 1e4)), M.ray.distanceSqToSegment(Ye, Ze, null, Qe), Qe;
  };
  window.__hekatanProjectOnAxis = $e;
  const ke = new Lt(new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new ht({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  ke.renderOrder = 998, ke.frustumCulled = false, ke.visible = false, y.add(ke);
  let Ae = -1, bt = -1, ot = -1;
  const Me = /* @__PURE__ */ new Set();
  window.__hekatanSelection = Me;
  const We = new Lt(new fe().setFromPoints([new m(), new m()]), new ht({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  We.renderOrder = 997, We.frustumCulled = false, We.visible = false, y.add(We);
  const _e = new qe(new wn(0.02, 12, 12), new nt({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  _e.renderOrder = 998, _e.visible = false, y.add(_e);
  const dt = (n) => {
    const o = f();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, pt = () => {
    _e.visible && _e.scale.setScalar(dt(_e.position));
  }, Nt = new tt();
  Nt.frustumCulled = false, y.add(Nt);
  const Je = 2282478;
  let kt = null;
  const Jt = (n, o, a, t) => {
    if (!e.points) return -1;
    const r = e.points.rawVal;
    let s = -1, l = t;
    for (let d = 0; d < r.length; d++) {
      const u = r[d];
      if (!u) continue;
      const b = Math.hypot(n - u[0], o - u[1], a - u[2]);
      b < l && (l = b, s = d);
    }
    return s;
  }, Le = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Nt.children.length; ) {
      const l = Nt.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of Me) {
      const [d, ...u] = l.split(":");
      if (d === "pt") {
        const b = n[+u[0]];
        if (!b) continue;
        const S = new qe(new wn(0.025, 12, 12), new nt({ color: Je, transparent: true, opacity: 0.9, depthTest: false }));
        S.position.set(b[0], b[1], b[2]), S.renderOrder = 999, S.__isSelectionPt = true, Nt.add(S);
      } else if (d === "seg") {
        const b = o[+u[0]], S = n[b == null ? void 0 : b[+u[1]]], p = n[b == null ? void 0 : b[+u[1] + 1]];
        if (!S || !p) continue;
        const h = new fe().setFromPoints([new m(S[0], S[1], S[2]), new m(p[0], p[1], p[2])]), z = new Lt(h, new ht({ color: Je, transparent: true, opacity: 0.95, depthTest: false }));
        z.renderOrder = 999, Nt.add(z);
      } else if (d === "poly") {
        const S = o[+u[0]].map((z) => {
          const Y = n[z];
          return Y ? new m(Y[0], Y[1], Y[2]) : null;
        }).filter(Boolean);
        if (S.length < 2) continue;
        const p = new fe().setFromPoints(S), h = new Lt(p, new ht({ color: Je, transparent: true, opacity: 0.95, depthTest: false }));
        h.renderOrder = 999, Nt.add(h);
      } else if (d === "aux") {
        const b = t[+u[0]];
        if (!b || b.length !== 6) continue;
        const S = new fe().setFromPoints([new m(b[0], b[1], b[2]), new m(b[3], b[4], b[5])]), p = new Lt(S, new ht({ color: Je, transparent: true, opacity: 0.95, depthTest: false }));
        p.renderOrder = 999, Nt.add(p);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), w();
  };
  window.__hekatanRefreshSelection = Le, window.__hekatanClearSelection = () => {
    Me.clear(), Le();
  };
  const Ee = (n, o, a, t, r, s, l, d, u) => {
    const b = l - t, S = d - r, p = u - s, h = b * b + S * S + p * p;
    if (h < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let z = ((n - t) * b + (o - r) * S + (a - s) * p) / h;
    z = Math.max(0, Math.min(1, z));
    const Y = t + z * b, U = r + z * S, G = s + z * p;
    return Math.hypot(n - Y, o - U, a - G);
  }, ye = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, d = -1, u = t;
    for (let b = 0; b < r.length; b++) {
      const S = r[b];
      for (let p = 0; p < S.length - 1; p++) {
        const h = s[S[p]], z = s[S[p + 1]];
        if (!h || !z) continue;
        const Y = Ee(n, o, a, h[0], h[1], h[2], z[0], z[1], z[2]);
        Y < u && (u = Y, l = b, d = p);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: d, dist: u } : null;
  }, De = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, d = t;
    for (let u = 0; u < s.length; u++) {
      const b = s[u];
      if (!b || b.length !== 6) continue;
      const S = Ee(n, o, a, b[0], b[1], b[2], b[3], b[4], b[5]);
      S < d && (d = S, l = u);
    }
    return l;
  }, ge = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      ke.visible = false;
      return;
    }
    ke.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), ke.visible = true;
  }, st = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      ke.visible = false;
      return;
    }
    const r = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, s = [];
    if (r || o < 0 || o >= a.length - 1) for (const l of a) {
      const d = t[l];
      d && s.push(new m(d[0], d[1], d[2]));
    }
    else {
      const l = t[a[o]], d = t[a[o + 1]];
      l && s.push(new m(l[0], l[1], l[2])), d && s.push(new m(d[0], d[1], d[2]));
    }
    ke.geometry.setFromPoints(s), ke.visible = true;
  }, Oe = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((u, b) => b !== n), t = /* @__PURE__ */ new Set();
    for (const u of a) for (const b of u) t.add(b);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let u = 0; u < r.length; u++) t.has(u) && (s.set(u, l.length), l.push(r[u]));
    const d = a.map((u) => u.map((b) => s.get(b)).filter((b) => b !== void 0));
    e.points.val = l, e.polylines.val = d, e.areas && (e.areas.val = e.areas.rawVal.filter((u) => u !== n).map((u) => u > n ? u - 1 : u)), ke.visible = false, Ae = -1, bt = -1;
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
      Oe(n);
      return;
    }
    const r = a[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      Oe(n);
      return;
    }
    let s;
    o === 0 ? s = [r.slice(1)] : o === r.length - 2 ? s = [r.slice(0, -1)] : s = [r.slice(0, o + 1), r.slice(o + 1)];
    const l = [...a.slice(0, n), ...s, ...a.slice(n + 1)], d = /* @__PURE__ */ new Set();
    for (const h of l) for (const z of h) d.add(z);
    const u = e.points.rawVal, b = /* @__PURE__ */ new Map(), S = [];
    for (let h = 0; h < u.length; h++) d.has(h) && (b.set(h, S.length), S.push(u[h]));
    const p = l.map((h) => h.map((z) => b.get(z)).filter((z) => z !== void 0));
    if (e.points.val = S, e.polylines.val = p, e.areas) {
      const h = s.length - 1;
      e.areas.val = e.areas.rawVal.map((z) => z > n ? z + h : z);
    }
    ke.visible = false, Ae = -1, bt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  H.geometry.setAttribute("position", new It(e.points.rawVal.flat(), 3)), H.geometry.computeBoundingSphere(), H.frustumCulled = false, me.frustumCulled = false, y.add(me), W.position.set(0, 0, 0), W.rotateX(Math.PI / 2), W.geometry.rotateX(Math.PI / 2), W.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
    if (e.points.val = [...e.points.rawVal, [n, o, a]], e.polylines) {
      const t = e.polylines.rawVal, r = t.length ? t[t.length - 1] : [];
      e.polylines.val = [...t.slice(0, -1), [...r, e.points.rawVal.length - 1]];
    }
  }, window.__hekatanDrawNewPoly = () => {
    var _a;
    if (!e.polylines) return;
    const n = e.polylines.rawVal;
    ((_a = n[n.length - 1]) == null ? void 0 : _a.length) !== 0 && (e.polylines.val = [...n, []]);
  }, window.__hekatanDrawCircle = (n, o, a, t, r = window.__hekatanArcSegs ?? 12, s = "xy") => {
    var _a;
    const l = Math.max(4, Math.round(r)), d = e.points.rawVal.length, u = [];
    for (let b = 0; b < l; b++) {
      const S = 2 * Math.PI * b / l, p = t * Math.cos(S), h = t * Math.sin(S);
      let z;
      s === "xy" ? z = [n + p, o + h, a] : s === "xz" ? z = [n + p, o, a + h] : z = [n, o + p, a + h], u.push(z);
    }
    if (e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const b = [...u.map((p, h) => d + h), d], S = e.polylines.rawVal;
      ((_a = S[S.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...S, b, []] : e.polylines.val = [...S.slice(0, -1), b, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), d = new m(...a), u = new m().subVectors(l, s), b = new m().subVectors(d, s), S = new m().crossVectors(u, b).normalize(), p = new m().addVectors(s, l).multiplyScalar(0.5), h = new m().addVectors(l, d).multiplyScalar(0.5), z = new m().crossVectors(u, S).normalize(), Y = new m().crossVectors(new m().subVectors(d, l), S).normalize(), U = new m().subVectors(h, p), G = z.x * Y.y - z.y * Y.x;
    let L;
    if (Math.abs(G) > 1e-9) {
      const He = (U.x * Y.y - U.y * Y.x) / G;
      L = new m().addVectors(p, z.clone().multiplyScalar(He));
    } else L = p.clone();
    const ne = s.distanceTo(L), ue = new m().subVectors(s, L), ze = new m().subVectors(d, L), we = Math.acos(Math.max(-1, Math.min(1, ue.dot(ze) / (ne * ne)))), Ve = e.points.rawVal.length, ut = [], xt = S.clone();
    for (let He = 0; He <= r; He++) {
      const Be = He / r, ft = we * Be, lt = new Gn().setFromAxisAngle(xt, ft), gt = ue.clone().applyQuaternion(lt).add(L);
      ut.push([gt.x, gt.y, gt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...ut], e.polylines) {
      const He = ut.map((ft, lt) => Ve + lt), Be = e.polylines.rawVal;
      e.polylines.val = [...Be.slice(0, -1), He, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), d = Math.min(n[1], o[1]), u = Math.max(n[1], o[1]), b = (n[2] + o[2]) / 2, S = l - s, p = u - d, h = Math.min(a, S / 2 - 0.01, p / 2 - 0.01);
    if (h <= 0) return;
    const z = e.points.rawVal.length, Y = [], U = [], G = (L, ne) => {
      Y.push([L, ne, b]), U.push(z + Y.length - 1);
    };
    for (let L = 0; L <= r; L++) G(s + h + (S - 2 * h) * L / r, d);
    for (let L = 1; L <= t; L++) {
      const ne = -Math.PI / 2 + Math.PI / 2 * L / t;
      G(l - h + h * Math.cos(ne), d + h + h * Math.sin(ne));
    }
    for (let L = 1; L <= r; L++) G(l, d + h + (p - 2 * h) * L / r);
    for (let L = 1; L <= t; L++) {
      const ne = 0 + Math.PI / 2 * L / t;
      G(l - h + h * Math.cos(ne), u - h + h * Math.sin(ne));
    }
    for (let L = 1; L <= r; L++) G(l - h - (S - 2 * h) * L / r, u);
    for (let L = 1; L <= t; L++) {
      const ne = Math.PI / 2 + Math.PI / 2 * L / t;
      G(s + h + h * Math.cos(ne), u - h + h * Math.sin(ne));
    }
    for (let L = 1; L <= r; L++) G(s, u - h - (p - 2 * h) * L / r);
    for (let L = 1; L <= t; L++) {
      const ne = Math.PI + Math.PI / 2 * L / t;
      G(s + h + h * Math.cos(ne), d + h + h * Math.sin(ne));
    }
    if (U.push(z), e.points.val = [...e.points.rawVal, ...Y], e.polylines) {
      const L = e.polylines.rawVal;
      e.polylines.val = [...L.slice(0, -1), U, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], u = o[2];
    let b;
    if (Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, d, s], [t, d, u], [t, r, u]], e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const S = [a, a + 1, a + 2, a + 3, a], p = e.polylines.rawVal;
      e.polylines.val = [...p.slice(0, -1), S, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], u = o[2];
    let b;
    if (Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, d, s], [t, d, u], [t, r, u]], window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const S = e.polylines.rawVal, p = S.length - 1, h = [a, a + 1, a + 2, a + 3, a];
      e.polylines.val = [...S.slice(0, -1), h, []], e.areas && (e.areas.val = [...e.areas.rawVal, p]);
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    w();
  }, window.__hekatanMeshPolyArea = (n, o) => {
    var _a;
    const a = n.length;
    if (a < 3) return 0;
    let t = 0, r = 0, s = 0;
    for (let ve = 0; ve < a; ve++) {
      const Re = n[ve], et = n[(ve + 1) % a];
      t += (Re[1] - et[1]) * (Re[2] + et[2]), r += (Re[2] - et[2]) * (Re[0] + et[0]), s += (Re[0] - et[0]) * (Re[1] + et[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let d = n[1][0] - n[0][0], u = n[1][1] - n[0][1], b = n[1][2] - n[0][2];
    const S = Math.hypot(d, u, b) || 1;
    d /= S, u /= S, b /= S;
    let p = r * b - s * u, h = s * d - t * b, z = t * u - r * d;
    const Y = Math.hypot(p, h, z) || 1;
    p /= Y, h /= Y, z /= Y;
    const U = n[0], G = (ve) => [(ve[0] - U[0]) * d + (ve[1] - U[1]) * u + (ve[2] - U[2]) * b, (ve[0] - U[0]) * p + (ve[1] - U[1]) * h + (ve[2] - U[2]) * z], L = (ve, Re) => [U[0] + ve * d + Re * p, U[1] + ve * u + Re * h, U[2] + ve * b + Re * z], ne = n.map(G);
    let ue = 1 / 0, ze = -1 / 0, we = 1 / 0, Ve = -1 / 0;
    for (const [ve, Re] of ne) ve < ue && (ue = ve), ve > ze && (ze = ve), Re < we && (we = Re), Re > Ve && (Ve = Re);
    const ut = ze - ue, xt = Ve - we;
    if (ut < 1e-6 || xt < 1e-6) return 0;
    let He = o && o > 0 ? o : 0.5;
    for (; ut / He * (xt / He) > 2500; ) He *= 2;
    He = Math.min(He, Math.min(ut, xt));
    const Be = (ve, Re) => {
      let et = false;
      for (let Kt = 0, on = ne.length - 1; Kt < ne.length; on = Kt++) {
        const [hn, Mn] = ne[Kt], [mn, _n] = ne[on];
        Mn > Re != _n > Re && ve < (mn - hn) * (Re - Mn) / (_n - Mn) + hn && (et = !et);
      }
      return et;
    }, ft = Math.max(1, Math.round(ut / He)), lt = Math.max(1, Math.round(xt / He)), gt = ut / ft, Vt = xt / lt, nn = /* @__PURE__ */ new Map(), Wt = [], Ct = e.points.rawVal.length, Ut = (ve, Re) => {
      const et = ve + "," + Re, Kt = nn.get(et);
      if (Kt !== void 0) return Kt;
      const on = Ct + Wt.length;
      return Wt.push(L(ue + ve * gt, we + Re * Vt)), nn.set(et, on), on;
    }, Tt = [];
    for (let ve = 0; ve < ft; ve++) for (let Re = 0; Re < lt; Re++) {
      if (!Be(ue + (ve + 0.5) * gt, we + (Re + 0.5) * Vt)) continue;
      const et = Ut(ve, Re), Kt = Ut(ve + 1, Re), on = Ut(ve + 1, Re + 1), hn = Ut(ve, Re + 1);
      Tt.push([et, Kt, on, hn]);
    }
    if (!Tt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...Wt], e.polylines && e.areas) {
      let ve = e.polylines.rawVal.slice();
      ve.length && ve[ve.length - 1].length === 0 && (ve = ve.slice(0, -1));
      const Re = [];
      for (const et of Tt) Re.push(ve.length), ve.push([et[0], et[1], et[2], et[3], et[0]]);
      ve.push([]), e.polylines.val = ve, e.areas.val = [...e.areas.rawVal, ...Re];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), Tt.length;
  };
  const Xe = () => {
    if (Q.length < 3) return Q = [], Z.visible = false, w(), 0;
    const n = window.__hekatanMeshPolyArea(Q.slice());
    return Q = [], Z.visible = false, w(), n;
  };
  window.__hekatanFinalizePolyArea = Xe, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new m(n[0], n[1], n[2]), r = new m(o[0], o[1], o[2]), s = new m(a[0], a[1], a[2]), l = new m().subVectors(r, t).cross(new m().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const d = new Gn().setFromUnitVectors(new m(0, 0, 1), l), u = new qn().setFromQuaternion(d);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [u.x, u.y, u.z] });
    const b = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), S = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, p = S / 2;
    J.geometry.dispose(), J.geometry = new an(S, S), Pe.geometry.dispose(), Pe.geometry = new ho(new an(S, S)), Ce(p, 1), ae.position.copy(b), ae.quaternion.copy(d), ae.scale.set(1, 1, 1), ae.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), ae.visible = false, w();
  };
  const Ie = new tt();
  Ie.visible = false, y.add(Ie), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; Ie.children.length; ) {
      const S = Ie.children.pop();
      (_a = S.geometry) == null ? void 0 : _a.dispose(), (_b = S.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, d = Math.max(...n) + t, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", b = (S, p, h, z, Y) => {
      const U = document.createElement("canvas");
      U.width = 64, U.height = 32;
      const G = U.getContext("2d");
      G.fillStyle = Y, G.font = "bold 22px sans-serif", G.textAlign = "center", G.fillText(S, 32, 26);
      const L = new mo(U), ne = new wo({ map: L, transparent: true }), ue = new yo(ne);
      return ue.position.set(p, h, z), ue.scale.set(1.2, 0.6, 1), ue;
    };
    n.forEach((S, p) => {
      const h = p < u.length ? u[p] : `X${p}`, z = new fe().setFromPoints([new m(S, r, 0), new m(S, s, 0), new m(S, r, 0), new m(S, r, a)]), Y = new Sn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), U = new jt(z, Y);
      U.computeLineDistances(), Ie.add(U), Ie.add(b(h, S, r - 0.5, 0, "#60a5fa")), Ie.add(b(h, S, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((S, p) => {
      const h = `${p + 1}`, z = new fe().setFromPoints([new m(l, S, 0), new m(d, S, 0), new m(l, S, 0), new m(l, S, a)]), Y = new Sn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), U = new jt(z, Y);
      U.computeLineDistances(), Ie.add(U), Ie.add(b(h, l - 0.5, S, 0, "#fb7185")), Ie.add(b(h, d + 0.5, S, 0, "#fb7185"));
    }), Ie.visible = true, w();
  }, window.__hekatanHideAxes = () => {
    Ie.visible = false, w();
  };
  const at = new tt();
  at.visible = false, y.add(at);
  let yt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; at.children.length; ) {
      const s = at.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    yt.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), yt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const d = r[l % r.length], u = o / 2, b = [new m(a - u, t - u, s), new m(a + u, t - u, s), new m(a + u, t + u, s), new m(a - u, t + u, s), new m(a - u, t - u, s)], S = new fe().setFromPoints(b), p = new ht({ color: d, transparent: true, opacity: 0.55 });
      at.add(new Lt(S, p));
      const h = document.createElement("canvas");
      h.width = 128, h.height = 32;
      const z = h.getContext("2d");
      z.fillStyle = `#${d.toString(16).padStart(6, "0")}`, z.font = "bold 18px sans-serif", z.fillText(`Z = ${s} m`, 4, 22);
      const Y = new mo(h), U = new wo({ map: Y, transparent: true }), G = new yo(U);
      G.position.set(a - u - 1.5, t - u - 1.5, s), G.scale.set(2.5, 0.6, 1), at.add(G);
      const L = new an(1e4, 1e4), ne = new nt({ visible: false, side: Dt }), ue = new qe(L, ne);
      ue.position.set(0, 0, s), ue.frustumCulled = false, ue.userData = { refPlaneZ: s }, y.add(ue), yt.push(ue);
    }), at.visible = true, w();
  }, window.__hekatanHideRefPlanes = () => {
    at.visible = false, yt.forEach((n) => {
      n.visible = false;
    }), w();
  };
  const Ht = new tt();
  Ht.frustumCulled = false, y.add(Ht);
  const en = () => {
    var _a, _b, _c, _d;
    for (; Ht.children.length; ) {
      const a = Ht.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new fe().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new Sn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new Lt(t, r);
      s.computeLineDistances(), Ht.add(s);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, en(), w());
  });
  const Ft = new tt();
  Ft.frustumCulled = false, y.add(Ft);
  const At = () => {
    var _a, _b, _c, _d;
    for (; Ft.children.length; ) {
      const a = Ft.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new qe(new wn(0.025, 12, 12), new nt({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(dt(t.position)), Ft.add(t);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, At(), w());
  }), c.addEventListener("change", () => {
    Ft.children.forEach((n) => {
      n.scale.setScalar(dt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = At;
  const it = new tt(), Cn = new qe(new wn(0.01, 12, 12), new nt({ color: 16724804, transparent: true, opacity: 0.95 })), zn = new qe(new wn(0.015, 12, 12), new nt({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  it.add(Cn, zn);
  const Qt = 0.08, sn = (n, o, a) => {
    const t = new fe().setFromPoints([new m(...n), new m(...o)]);
    return new Lt(t, new ht({ color: a, transparent: true, opacity: 0.7 }));
  };
  it.add(sn([-Qt, 0, 0], [Qt, 0, 0], 16711680)), it.add(sn([0, -Qt, 0], [0, Qt, 0], 65280)), it.add(sn([0, 0, -Qt], [0, 0, Qt], 35071)), it.visible = false, it.frustumCulled = false, y.add(it);
  const Fn = 40, Dn = 2.5, yn = () => {
    if (!it.visible) return;
    const o = f().position.distanceTo(it.position), a = Math.max(0.05, Math.min(Dn, o / Fn));
    it.scale.setScalar(a);
  }, An = () => {
    Nt.children.length !== 0 && Nt.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(dt(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = An, c.addEventListener("change", () => {
    yn(), _e.visible && pt();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = f().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / Fn));
    }
    An();
  }), window.__hekatanShowSnap = (n, o, a) => {
    it.position.set(n, o, a), it.visible = true, yn(), w();
  }, window.__hekatanHideSnap = () => {
    it.visible = false, w();
  }, x.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = _();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) lo(s.type, s.x, s.y, s.z), it.position.set(s.x, s.y, s.z), it.visible = true, t.set(s.x, s.y, s.z);
      else {
        Nn();
        const S = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0.5;
        S && p > 0 && (t.x = Math.round(t.x / p) * p, t.y = Math.round(t.y / p) * p, t.z = Math.round(t.z / p) * p), it.position.copy(t), it.visible = true;
      }
      yn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const S = (window.__hekatanSnap2D ?? 0.5) * 1.5, p = Jt(t.x, t.y, t.z, S), h = ye(t.x, t.y, t.z, S), z = De(t.x, t.y, t.z, S);
        if (p >= 0) {
          const L = e.points.rawVal[p];
          _e.position.set(L[0], L[1], L[2]), _e.visible = true, pt(), We.visible = false, kt = { kind: "pt", a: p };
        } else if (h) {
          const L = e.points.rawVal, ne = e.polylines.rawVal[h.polyIdx], ue = L[ne[h.segIdx]], ze = L[ne[h.segIdx + 1]];
          We.geometry.setFromPoints([new m(ue[0], ue[1], ue[2]), new m(ze[0], ze[1], ze[2])]), We.visible = true, _e.visible = false, kt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(h.polyIdx)) ?? false ? { kind: "poly", a: h.polyIdx } : { kind: "seg", a: h.polyIdx, b: h.segIdx };
        } else if (z >= 0) {
          const ne = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[z];
          ne && (We.geometry.setFromPoints([new m(ne[0], ne[1], ne[2]), new m(ne[3], ne[4], ne[5])]), We.visible = true, _e.visible = false, kt = { kind: "aux", a: z });
        } else We.visible = false, _e.visible = false, kt = null;
        D.style.left = n.clientX + "px", D.style.top = n.clientY + "px", D.style.display = "block";
        let Y = t;
        if ((kt == null ? void 0 : kt.kind) === "pt") {
          const L = e.points.rawVal[kt.a];
          L && (Y = new m(L[0], L[1], L[2]));
        }
        const U = `X=${Y.x.toFixed(2)} Y=${Y.y.toFixed(2)} Z=${Y.z.toFixed(2)}`;
        if (kt) {
          const L = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          D.textContent = `${U}  \xB7  \u{1F5B1} Click \u2192 ${L[kt.kind]}`;
        } else D.textContent = U;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = U), A.visible = false, Se.visible = false, w();
        return;
      }
      if (l === "delete") {
        const S = (window.__hekatanSnap2D ?? 0.5) * 1.5, p = ye(t.x, t.y, t.z, S), h = De(t.x, t.y, t.z, S);
        let z = false;
        if (h >= 0) if (!p) z = true;
        else {
          const L = window.__hekatanDrawingAuxLines, ue = ((L == null ? void 0 : L.rawVal) ?? (L == null ? void 0 : L.val) ?? L ?? [])[h];
          Ee(t.x, t.y, t.z, ue[0], ue[1], ue[2], ue[3], ue[4], ue[5]) < p.dist && (z = true);
        }
        z ? (ot = h, Ae = -1, bt = -1, ge(h)) : p ? (Ae = p.polyIdx, bt = p.segIdx, ot = -1, st(p.polyIdx, p.segIdx)) : (Ae = -1, bt = -1, ot = -1, ke.visible = false), A.visible = false, Se.visible = false, F(), D.style.left = n.clientX + "px", D.style.top = n.clientY + "px", D.style.display = "block";
        const Y = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let U = "";
        z ? U = `\u{1F5D1} l\xEDnea aux #${ot + 1}` : p ? U = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(p.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${p.polyIdx + 1}` : `\u{1F5D1} seg ${p.segIdx + 1} / poly #${p.polyIdx + 1}` : U = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", D.textContent = `${Y}  \xB7  ${U}`;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = Y), w();
        return;
      } else ke.visible = false, Ae = -1, ot = -1;
      D.style.left = n.clientX + "px", D.style.top = n.clientY + "px", D.style.display = "block";
      const d = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], u = d[d.length - 1] ?? [], b = e.points.rawVal ?? [];
      if (u.length > 0 && b[u[u.length - 1]]) {
        const S = u[u.length - 1], p = b[S];
        let h = R;
        if (le = null, !h && window.__hekatanAxisSnap !== false) {
          const Be = x.getBoundingClientRect(), ft = n.clientX, lt = n.clientY, gt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Vt = new m(p[0], p[1], p[2]), nn = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], Wt = (Ut) => {
            const Tt = Ut.clone().project(o);
            return { x: (Tt.x * 0.5 + 0.5) * Be.width + Be.left, y: (-Tt.y * 0.5 + 0.5) * Be.height + Be.top };
          };
          let Ct = null;
          for (const [Ut, Tt] of nn) {
            const ve = Wt(Vt.clone().addScaledVector(Tt, -gt)), Re = Wt(Vt.clone().addScaledVector(Tt, gt)), et = Re.x - ve.x, Kt = Re.y - ve.y, on = ft - ve.x, hn = lt - ve.y, Mn = et * et + Kt * Kt || 1;
            let mn = (on * et + hn * Kt) / Mn;
            mn = Math.max(0, Math.min(1, mn));
            const _n2 = Math.hypot(ft - (ve.x + mn * et), lt - (ve.y + mn * Kt));
            if (Ct === null || _n2 < Ct.dpx) {
              const Kn = M.ray, po = Vt.clone().sub(Kn.origin), Hn = Tt.dot(Kn.direction), uo = Tt.dot(po), Xo = Kn.direction.dot(po), fo = 1 - Hn * Hn, Yo = Math.abs(fo) < 1e-6 ? -uo : (Hn * Xo - uo) / fo;
              Ct = { axis: Ut, dpx: _n2, pt: Vt.clone().addScaledVector(Tt, Yo) };
            }
          }
          Ct && Ct.dpx <= 12 && (t.copy(Ct.pt), h = Ct.axis, le = Ct.pt.clone());
        }
        const z = !!window.__hekatanOrthoMode;
        if (!h && z) {
          const Be = Math.abs(t.x - p[0]), ft = Math.abs(t.y - p[1]), lt = Math.abs(t.z - p[2]), gt = (_l = a[0]) == null ? void 0 : _l.object;
          let Vt = null;
          gt === Ke ? Vt = "xy" : gt === Ue ? Vt = "xz" : gt === mt && (Vt = "yz"), Vt === "xy" ? h = Be >= ft ? "x" : "y" : Vt === "xz" ? h = Be >= lt ? "x" : "z" : Vt === "yz" ? h = ft >= lt ? "y" : "z" : h = Be >= ft && Be >= lt ? "x" : ft >= lt ? "y" : "z";
        }
        const Y = window.__hekatanPolarTrack !== false;
        if (!h && Y) {
          const Be = t.x - p[0], ft = t.y - p[1], lt = t.z - p[2], gt = Math.hypot(Be, ft, lt);
          if (gt > 1e-3) {
            const nn = Math.tan(6 * Math.PI / 180) * gt, Wt = Math.hypot(ft, lt), Ct = Math.hypot(Be, lt), Ut = Math.hypot(Be, ft), Tt = [["x", Wt], ["y", Ct], ["z", Ut]];
            Tt.sort((ve, Re) => ve[1] - Re[1]), Tt[0][1] <= nn && (h = Tt[0][0]);
          }
        }
        if (h) {
          const Be = p[0], ft = p[1], lt = p[2];
          h === "x" ? t.set(t.x, ft, lt) : h === "y" ? t.set(Be, t.y, lt) : t.set(Be, ft, t.z);
          const gt = !!R, nn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[h];
          de.style.background = "rgba(15,23,42,0.92)", de.style.color = nn, de.style.border = `1.5px solid ${nn}`;
          const Wt = (_m = a[0]) == null ? void 0 : _m.object;
          let Ct = null;
          Wt === Ke ? Ct = "xy" : Wt === Ue ? Ct = "xz" : Wt === mt && (Ct = "yz");
          const Ut = Ct ? ` (plano ${Ct.toUpperCase()})` : "";
          de.textContent = gt ? `\u{1F512} LOCK ${h.toUpperCase()}${Ut}` : `\u22A5 ORTO ${h.toUpperCase()}${Ut}`, de.style.left = n.clientX + 20 + "px", de.style.top = n.clientY + 18 + "px", de.style.transform = "none", de.style.display = "block";
        } else R || (de.style.display = "none");
        const U = Math.hypot(t.x - p[0], t.y - p[1], t.z - p[2]), G = Math.atan2(t.y - p[1], t.x - p[0]) * 180 / Math.PI, L = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        D.textContent = `${L} | \u0394L=${U.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const ne = document.getElementById("hk-coord-fixed");
        ne && (ne.textContent = L), A.geometry.setFromPoints([new m(p[0], p[1], p[2]), new m(t.x, t.y, t.z)]), (_n = A.computeLineDistances) == null ? void 0 : _n.call(A), A.visible = true, E(p[0], p[1], p[2], t.x, t.y, t.z);
        const ue = window.__hekatanOrthoExt ?? 8, ze = window.__hekatanShowOrthoPlanes !== false;
        Fe.visible = ze, ze || qt(null), ze && (Rt(O, p, "xy", ue), Rt(oe, p, "xz", ue), Rt(ce, p, "yz", ue), wt(Ke, p, "xy", ue), wt(Ue, p, "xz", ue), wt(mt, p, "yz", ue));
        const we = ze ? M.intersectObjects([Ke, Ue, mt], false) : [];
        let Ve = null;
        if (we.length > 0) {
          const Be = we[0].object;
          Be === Ke ? Ve = "xy" : Be === Ue ? Ve = "xz" : Be === mt && (Ve = "yz");
        }
        qt(Ve), Ve && ($t.style.left = n.clientX + "px", $t.style.top = n.clientY + "px"), Mt.geometry.setFromPoints([new m(p[0] - ue, p[1], p[2]), new m(p[0] + ue, p[1], p[2])]), (_o2 = Mt.computeLineDistances) == null ? void 0 : _o2.call(Mt), St.geometry.setFromPoints([new m(p[0], p[1] - ue, p[2]), new m(p[0], p[1] + ue, p[2])]), (_p = St.computeLineDistances) == null ? void 0 : _p.call(St), ct.geometry.setFromPoints([new m(p[0], p[1], p[2] - ue), new m(p[0], p[1], p[2] + ue)]), (_q = ct.computeLineDistances) == null ? void 0 : _q.call(ct), Se.visible = true;
        const ut = Mt.material, xt = St.material, He = ct.material;
        h === "x" ? (ut.opacity = 0.95, xt.opacity = 0.1, He.opacity = 0.1) : h === "y" ? (ut.opacity = 0.1, xt.opacity = 0.95, He.opacity = 0.1) : h === "z" ? (ut.opacity = 0.1, xt.opacity = 0.1, He.opacity = 0.95) : (ut.opacity = 0.5, xt.opacity = 0.5, He.opacity = 0.5);
      } else {
        const S = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        D.textContent = S;
        const p = document.getElementById("hk-coord-fixed");
        if (p && (p.textContent = S), A.visible = false, Se.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (pe = null, q = null, K.style.left = n.clientX + 20 + "px", K.style.top = n.clientY - 28 + "px", K.style.display = "block", !X) {
            K.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const z = document.activeElement;
            !(z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA") && z !== K) && document.activeElement !== K && K.focus({ preventScroll: true });
            try {
              K.select();
            } catch {
            }
          }
        } else F();
      }
      w();
    } else Nn(), D.style.display = "none", it.visible = false, A.visible = false, Se.visible = false, F(), w();
  }), I.derive(() => {
    e.gridTarget && (vs(i, { position: new m(...e.gridTarget.val.position), quaternion: new Gn().setFromEuler(new qn(...e.gridTarget.val.rotation)) }, w), W.position.set(...e.gridTarget.val.position), W.quaternion.setFromEuler(new qn(...e.gridTarget.val.rotation)), W.updateMatrixWorld());
  }), I.derive(() => {
    H.geometry.setAttribute("position", new It(e.points.val.flat(), 3)), H.geometry.computeBoundingSphere();
  }), I.derive(() => {
    const n = 0.05 * k * 0.5 * g.val;
    M.params.Points.threshold = 0.4 * n;
  }), I.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, d, u] = n[s];
      t.push(l, d, u);
    }
    const r = new fe();
    r.setAttribute("position", new It(t, 3)), te.geometry.dispose(), te.geometry = r;
  });
  let xn = false, Ot = 0;
  x.addEventListener("pointerdown", () => {
    xn = true;
  }), x.addEventListener("pointerup", () => {
    xn = false;
  }), x.addEventListener("pointermove", () => {
    xn && Ot++;
  });
  const Pt = document.createElement("div");
  Pt.id = "hk-window-select", Pt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(Pt);
  let Xt = null, ln = false, Bt = null;
  const pn = (n, o, a, t, r) => {
    r ? (Pt.style.borderColor = "#34d399", Pt.style.borderStyle = "dashed", Pt.style.background = "rgba(52, 211, 153, 0.10)") : (Pt.style.borderColor = "#22d3ee", Pt.style.borderStyle = "solid", Pt.style.background = "rgba(34, 211, 238, 0.10)"), Pt.style.left = Math.min(n, a) + "px", Pt.style.top = Math.min(o, t) + "px", Pt.style.width = Math.abs(a - n) + "px", Pt.style.height = Math.abs(t - o) + "px", Pt.style.display = "block";
  }, gn = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), d = Math.min(o, t), u = Math.max(o, t), b = a < n, S = x.getBoundingClientRect(), p = f();
    p.updateMatrixWorld();
    const h = (we) => {
      const Ve = new m(we[0], we[1], we[2]);
      return Ve.project(p), { x: S.left + (Ve.x * 0.5 + 0.5) * S.width, y: S.top + (-Ve.y * 0.5 + 0.5) * S.height };
    }, z = (we) => we.x >= s && we.x <= l && we.y >= d && we.y <= u, Y = (we, Ve) => !(we.x < s && Ve.x < s || we.x > l && Ve.x > l || we.y < d && Ve.y < d || we.y > u && Ve.y > u);
    r || Me.clear();
    let U = 0;
    const G = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let we = 0; we < G.length; we++) {
      const Ve = G[we];
      Ve && z(h(Ve)) && (Me.add(`pt:${we}`), U++);
    }
    const L = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ne = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let we = 0; we < L.length; we++) {
      const Ve = L[we], ut = ne.includes(we);
      let xt = false;
      for (let He = 0; He < Ve.length - 1; He++) {
        const Be = G[Ve[He]], ft = G[Ve[He + 1]];
        if (!Be || !ft) continue;
        const lt = h(Be), gt = h(ft);
        if (z(lt) || z(gt) || Y(lt, gt)) {
          if (ut) {
            xt = true;
            break;
          }
          Me.add(`seg:${we}:${He}`), U++;
        }
      }
      ut && xt && (Me.add(`poly:${we}`), U++);
    }
    const ze = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let we = 0; we < ze.length; we++) {
      const Ve = ze[we];
      if (!Ve || Ve.length !== 6) continue;
      const ut = h([Ve[0], Ve[1], Ve[2]]), xt = h([Ve[3], Ve[4], Ve[5]]);
      (z(ut) || z(xt) || Y(ut, xt)) && (Me.add(`aux:${we}`), U++);
    }
    Le(), se(`${b ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${U} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${Me.size})`), Pt.style.display = "none";
  }, En = () => {
    Bt && (Bt = null, Pt.style.display = "none", se("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = En, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Bt && En();
  });
  const ao = () => {
    var _a, _b, _c, _d;
    if (Me.size === 0) return false;
    const n = [...Me], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set();
    for (const Y of n) {
      const [U, ...G] = Y.split(":");
      if (U === "pt") l.add(+G[0]);
      else if (U === "poly") d.add(+G[0]);
      else if (U === "seg") {
        const L = +G[0], ne = +G[1];
        u.has(L) || u.set(L, /* @__PURE__ */ new Set()), u.get(L).add(ne);
      } else U === "aux" && b.add(+G[0]);
    }
    let S = 0, p = [], h = [];
    const z = /* @__PURE__ */ new Map();
    for (let Y = 0; Y < a.length; Y++) {
      if (d.has(Y)) {
        S++;
        continue;
      }
      z.set(Y, p.length);
      const U = u.get(Y);
      if (U && U.size > 0) {
        let G = [];
        for (let L = 0; L < a[Y].length; L++) G.push(a[Y][L]), L < a[Y].length - 1 && U.has(L) && (G.length >= 2 && p.push(G), G = [], S++);
        (G.length >= 2 || G.length === 1) && p.push(G);
      } else p.push([...a[Y]]);
    }
    if (l.size > 0) {
      const Y = [], U = /* @__PURE__ */ new Map();
      for (let L = 0; L < o.length; L++) {
        if (l.has(L)) {
          S++;
          continue;
        }
        U.set(L, Y.length), Y.push([...o[L]]);
      }
      const G = [];
      for (const L of p) {
        let ne = [];
        for (const ue of L) {
          const ze = U.get(ue);
          ze === void 0 ? (ne.length >= 2 && G.push(ne), ne = []) : ne.push(ze);
        }
        ne.length >= 2 && G.push(ne);
      }
      p = G, e.points.val = Y;
    }
    for (const Y of t) {
      const U = z.get(Y);
      U !== void 0 && U < p.length && h.push(U);
    }
    if (e.polylines && (e.polylines.val = p), e.areas && (e.areas.val = h), b.size > 0 && r) {
      const Y = s.filter((U, G) => !b.has(G));
      "val" in r ? r.val = Y : window.__hekatanDrawingAuxLines = Y, S += b.size;
    }
    Me.clear(), Le();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return se(`\u{1F5D1} ${S} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = ao, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || Me.size !== 0 && (n.preventDefault(), ao());
  });
  const Yt = document.createElement("div");
  Yt.id = "hk-properties-pane";
  const io = "hk-props-pane-pos";
  let un = null;
  try {
    const n = localStorage.getItem(io);
    n && (un = JSON.parse(n));
  } catch {
  }
  Yt.style.cssText = ["position:fixed", un ? `left:${un.left}px` : "left:50%", un ? `top:${un.top}px` : "top:8px", un ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Yt);
  const Lo = () => {
    const n = Yt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, a = l.clientX, t = l.clientY;
      const d = Yt.getBoundingClientRect();
      r = d.left, s = d.top, Yt.style.transform = "none", Yt.style.left = `${r}px`, Yt.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const d = l.clientX - a, u = l.clientY - t, b = Math.max(0, Math.min(window.innerWidth - 80, r + d)), S = Math.max(0, Math.min(window.innerHeight - 40, s + u));
      Yt.style.left = `${b}px`, Yt.style.top = `${S}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(io, JSON.stringify({ left: parseFloat(Yt.style.left), top: parseFloat(Yt.style.top) }));
        } catch {
        }
      }
    });
  }, B = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let je = null;
  const _t = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, Io = () => {
    if (je && (je.dispose(), je = null), Me.size === 0) {
      Yt.style.display = "none";
      return;
    }
    const n = [...Me], o = n.filter((p) => p.startsWith("pt:")), a = n.filter((p) => p.startsWith("seg:")), t = n.filter((p) => p.startsWith("poly:")), r = n.filter((p) => p.startsWith("aux:")), s = o.length > 0, l = a.length > 0, d = t.length > 0, u = !s && !l && !d, b = [];
    o.length && b.push(`\u{1F535} ${o.length} nodo(s)`), a.length && b.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && b.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && b.push(`\u250A ${r.length} aux`);
    const S = `\u{1F3AF} ${Me.size} item(s) \u2014 ${b.join(", ")}`;
    if (je = new zo({ container: Yt, title: S }), s) {
      const p = je.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      p.addBinding(B, "Ux"), p.addBinding(B, "Uy"), p.addBinding(B, "Uz"), p.addBinding(B, "Rx"), p.addBinding(B, "Ry"), p.addBinding(B, "Rz");
      const h = je.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      h.addBinding(B, "Kx", { label: "Kx", min: 0, step: 100 }), h.addBinding(B, "Ky", { label: "Ky", min: 0, step: 100 }), h.addBinding(B, "Kz", { label: "Kz", min: 0, step: 100 }), h.addBinding(B, "Krx", { label: "Krx", min: 0, step: 1e3 }), h.addBinding(B, "Kry", { label: "Kry", min: 0, step: 1e3 }), h.addBinding(B, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const z = je.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      z.addBinding(B, "Fx", { step: 0.1 }), z.addBinding(B, "Fy", { step: 0.1 }), z.addBinding(B, "Fz", { step: 0.1 }), z.addBinding(B, "Mx", { step: 0.1 }), z.addBinding(B, "My", { step: 0.1 }), z.addBinding(B, "Mz", { step: 0.1 }), je.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(B, "mass", { label: "m", min: 0, step: 1 }), je.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(B, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), je.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let G = 0;
        const L = [B.Ux, B.Uy, B.Uz, B.Rx, B.Ry, B.Rz];
        L.some((ze) => ze) && (_t("nodes", o, "supports", L), G++);
        const ne = [B.Fx, B.Fy, B.Fz, B.Mx, B.My, B.Mz];
        ne.some((ze) => ze !== 0) && (_t("nodes", o, "loads", ne), G++);
        const ue = [B.Kx, B.Ky, B.Kz, B.Krx, B.Kry, B.Krz];
        if (ue.some((ze) => ze !== 0) && (_t("nodes", o, "springs", ue), G++), B.mass !== 0 && (_t("nodes", o, "mass", B.mass), G++), B.diaphragm !== "Ninguno" && (_t("nodes", o, "diaphragm", B.diaphragm), G++), G === 0) {
          se("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let ze = document.getElementById("hk-prop-toast");
          ze || (ze = document.createElement("div"), ze.id = "hk-prop-toast", ze.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(ze)), ze.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", ze.style.background = "rgba(217,119,6,0.97)", ze.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            ze && (ze.style.opacity = "0");
          }, 3200);
        } else se(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const p = je.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      p.addBinding(B, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), p.addBinding(B, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const h = je.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      h.addBinding(B, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), h.addBinding(B, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), h.addBinding(B, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), h.addBinding(B, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), je.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(B, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), je.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(B, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const U = je.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      U.addBinding(B, "relMxI", { label: "Mx I" }), U.addBinding(B, "relMyI", { label: "My I" }), U.addBinding(B, "relMzI", { label: "Mz I" });
      const G = je.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      G.addBinding(B, "relMxJ", { label: "Mx J" }), G.addBinding(B, "relMyJ", { label: "My J" }), G.addBinding(B, "relMzJ", { label: "Mz J" }), je.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(B, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ne = je.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ne.addBinding(B, "LKx", { label: "LKx", min: 0, step: 100 }), ne.addBinding(B, "LKy", { label: "LKy", min: 0, step: 100 }), ne.addBinding(B, "LKz", { label: "LKz", min: 0, step: 100 });
      const ue = je.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      ue.addBinding(B, "qx", { step: 0.1 }), ue.addBinding(B, "qy", { step: 0.1 }), ue.addBinding(B, "qz", { step: 0.1 }), je.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(B, "massPerM", { label: "m/L", min: 0, step: 1 }), je.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        _t("segs", a, "section", B.section), _t("segs", a, "material", B.material_frame);
        const we = { A: B.A_mod, Iz: B.Iz_mod, Iy: B.Iy_mod, J: B.J_mod };
        (we.A !== 1 || we.Iz !== 1 || we.Iy !== 1 || we.J !== 1) && _t("segs", a, "modifiers", we), B.insertionPoint !== "10 \u2014 Centroid" && _t("segs", a, "insertionPoint", B.insertionPoint), B.beta !== 0 && _t("segs", a, "beta", B.beta);
        const Ve = [B.relMxI, B.relMyI, B.relMzI], ut = [B.relMxJ, B.relMyJ, B.relMzJ];
        (Ve.some((Be) => Be) || ut.some((Be) => Be)) && _t("segs", a, "releases", { i: Ve, j: ut }), B.hinges !== "None" && _t("segs", a, "hinges", B.hinges);
        const xt = [B.LKx, B.LKy, B.LKz];
        xt.some((Be) => Be !== 0) && _t("segs", a, "lineSprings", xt);
        const He = [B.qx, B.qy, B.qz];
        He.some((Be) => Be !== 0) && _t("segs", a, "distLoad", He), B.massPerM !== 0 && _t("segs", a, "massPerM", B.massPerM), se(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (d) {
      const p = je.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      p.addBinding(B, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), p.addBinding(B, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), p.addBinding(B, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), je.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(B, "surfLoad", { label: "q", step: 0.1 }), je.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        _t("areas", t, "shellType", B.shellType), _t("areas", t, "thickness", B.thickness), _t("areas", t, "material", B.material_shell), B.surfLoad !== 0 && _t("areas", t, "surfLoad", B.surfLoad), se(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (u) {
      const p = je.addFolder({ title: "\u2139 Selecci\xF3n" }), h = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      p.addBinding(h, "msg", { readonly: true, label: "" });
    }
    je.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      Me.clear(), Le();
    }), Yt.style.display = "block", Lo();
  };
  window.__hekatanRefreshPropsPane = Io;
  let fn = null, Vn = false;
  x.addEventListener("pointerdown", (n) => {
    n.button === 2 && (fn = { x: n.clientX, y: n.clientY }, Vn = false);
  }), x.addEventListener("pointermove", (n) => {
    if (fn && n.buttons & 2 && !Vn) {
      const o = n.clientX - fn.x, a = n.clientY - fn.y;
      Math.hypot(o, a) > 8 && (Vn = true);
    }
  }), x.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = fn !== null && !Vn;
      fn = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (Bt ? En() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), Me.size > 0 && (Me.clear(), Le()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), se(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : se("\u238B Cancelado (click derecho)");
      }
    }
  }), x.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), x.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Xt = { x: n.clientX, y: n.clientY }, ln = false);
  }), x.addEventListener("pointermove", (n) => {
    if (Bt && n.buttons === 0) {
      const s = n.clientX < Bt.x;
      pn(Bt.x, Bt.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Xt) return;
    const o = n.clientX - Xt.x, a = n.clientY - Xt.y, t = Math.hypot(o, a);
    if (!ln && t < 8) return;
    ln = true;
    const r = n.clientX < Xt.x;
    pn(Xt.x, Xt.y, n.clientX, n.clientY, r);
  }), x.addEventListener("pointerup", (n) => {
    if (!Xt) return;
    if (!ln) {
      Xt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    gn(Xt.x, Xt.y, n.clientX, n.clientY, o), Xt = null, ln = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const tn = new tt();
  tn.visible = false, tn.frustumCulled = false, y.add(tn);
  const $o = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, lo = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; tn.children.length; ) {
      const d = tn.children.pop();
      (_b = (_a = d.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = d.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = $o[n] ?? 16777215, s = 0.05, l = new fe().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    tn.add(new jt(l, new ht({ color: r, linewidth: 2 }))), tn.position.set(0, 0, 0), tn.visible = true;
  }, Nn = () => {
    tn.visible = false;
  }, Ro = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let d = null;
    const u = (p, h, z, Y) => {
      const U = Math.hypot(h - n, z - o, Y - a);
      U > t || (!d || U < d.d) && (d = { type: p, x: h, y: z, z: Y, d: U });
    };
    (r.node || r.end) && s.forEach((p) => {
      r.node && u("node", p[0], p[1], p[2]);
    });
    for (const p of l) if (!(p.length < 2)) for (let h = 0; h < p.length - 1; h++) {
      const z = s[p[h]], Y = s[p[h + 1]];
      if (!(!z || !Y) && (r.end && (u("end", z[0], z[1], z[2]), u("end", Y[0], Y[1], Y[2])), r.mid && u("mid", (z[0] + Y[0]) / 2, (z[1] + Y[1]) / 2, (z[2] + Y[2]) / 2), r.nea || r.per)) {
        const U = Y[0] - z[0], G = Y[1] - z[1], L = Y[2] - z[2], ne = U * U + G * G + L * L;
        if (ne < 1e-12) continue;
        const ue = Math.max(0, Math.min(1, ((n - z[0]) * U + (o - z[1]) * G + (a - z[2]) * L) / ne)), ze = z[0] + ue * U, we = z[1] + ue * G, Ve = z[2] + ue * L;
        r.nea && u("nea", ze, we, Ve), r.per && u("per", ze, we, Ve);
      }
    }
    const b = window.__hekatanDrawingAuxLines, S = (b == null ? void 0 : b.rawVal) ?? (b == null ? void 0 : b.val) ?? b ?? [];
    for (const p of S) {
      if (p.length !== 6) continue;
      const h = [p[0], p[1], p[2]], z = [p[3], p[4], p[5]];
      if (r.end && (u("end", h[0], h[1], h[2]), u("end", z[0], z[1], z[2])), r.mid && u("mid", (h[0] + z[0]) / 2, (h[1] + z[1]) / 2, (h[2] + z[2]) / 2), r.nea || r.per) {
        const Y = z[0] - h[0], U = z[1] - h[1], G = z[2] - h[2], L = Y * Y + U * U + G * G;
        if (L < 1e-12) continue;
        const ne = Math.max(0, Math.min(1, ((n - h[0]) * Y + (o - h[1]) * U + (a - h[2]) * G) / L)), ue = h[0] + ne * Y, ze = h[1] + ne * U, we = h[2] + ne * G;
        r.nea && u("nea", ue, ze, we), r.per && u("per", ue, ze, we);
      }
    }
    return d ? { type: d.type, x: d.x, y: d.y, z: d.z } : null;
  };
  window.__hekatanOsnapCompute = Ro, window.__hekatanOsnapShow = lo, window.__hekatanOsnapHide = Nn;
  let Te = [], Et = 0;
  const vn = document.createElement("div");
  vn.id = "hk-cad-status", vn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", vn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(vn);
  const Bo = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), R && n.push(`\u{1F512} LOCK ${R.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, se = (n) => {
    const o = n + Bo();
    vn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    se(o);
  }, window.__hekatanCadResetPending = () => {
    Te = [], Q = [], Z.visible = false, w(), se("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const bn = [], rn = () => {
    var _a, _b;
    bn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), bn.length > 100 && bn.shift();
  }, ro = () => {
    var _a;
    const n = bn.pop();
    if (!n) {
      se("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Te = [], A.visible = false, Se.visible = false, F(), se(`\u21B6 Undo \u2014 ${bn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    w();
  };
  window.__hekatanPushUndo = rn, window.__hekatanUndo = ro, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), ro();
    }
  }, { capture: true });
  const co = () => {
    if (Te = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    R = null, re(), A.visible = false, Se.visible = false, F(), se("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), w();
  };
  window.__hekatanFinalizeDraw = co, x.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    if (Ot > 5) {
      Ot = 0;
      return;
    }
    Ot = 0;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = _();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(c.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), d = a[0].point;
      if (!isFinite(d.x) || !isFinite(d.y) || !isFinite(d.z) || l > Math.max(s * 12, 300)) {
        se("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
        return;
      }
    }
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new m(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], d = e.points.rawVal ?? [];
      if (l.length > 0) {
        const u = d[l[l.length - 1]];
        if (u) {
          const b = !!window.__hekatanOrthoMode;
          let S = R;
          if (!S && b) {
            const p = Math.abs(t.x - u[0]), h = Math.abs(t.y - u[1]), z = Math.abs(t.z - u[2]);
            S = p >= h && p >= z ? "x" : h >= z ? "y" : "z";
          }
          S === "x" ? t = new m(t.x, u[1], u[2]) : S === "y" ? t = new m(u[0], t.y, u[2]) : S === "z" && (t = new m(u[0], u[1], t.z));
        }
      }
    }
    if (le) t = le.clone(), se(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new m(l.x, l.y, l.z), se(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const d = window.__hekatanSnapEnabled !== false, u = window.__hekatanSnap2D ?? 0;
        d && u > 0 && (t = new m(Math.round(t.x / u) * u, Math.round(t.y / u) * u, Math.round(t.z / u) * u));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (kt) {
        Bt && En();
        const { kind: s, a: l, b: d } = kt, u = d !== void 0 ? `${s}:${l}:${d}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || Me.clear(), Me.has(u) ? Me.delete(u) : Me.add(u), Le(), se(`\u2713 Seleccionados ${Me.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, d = n.clientY;
        Bt ? (gn(Bt.x, Bt.y, l, d, s), Bt = null) : s || (Bt = { x: l, y: d }, se("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), pn(l, d, l + 1, d + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], se(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", d = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      se(`\u2713 Eje "${d}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (ot >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], d = ot;
        if (d >= 0 && d < l.length) {
          rn();
          const u = l.slice(0, d).concat(l.slice(d + 1));
          s && typeof s == "object" && "val" in s ? s.val = u : window.__hekatanDrawingAuxLines = u, se(`\u{1F5D1} L\xEDnea auxiliar #${d + 1} borrada`), ot = -1, ke.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Ae >= 0) {
        const s = Ae, l = bt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (Oe(s), se(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (Zt(s, l), se(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (Oe(s), se(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else se("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Te, d = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const u = Math.abs(l[1] - s[1]), S = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : u < 1e-3 ? "xz" : "yz", p = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], d, p, S), se(`\u2713 C\xEDrculo dibujado en ${S.toUpperCase()} \u2014 r=${d.toFixed(2)}m, ${p} segmentos`), Te = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Te.length === 2) {
        se("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, d] = Te, u = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, d, u), se(`\u2713 Arco dibujado \u2014 ${u} segmentos`), Te = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te;
      (_n = window.__hekatanDrawRect) == null ? void 0 : _n.call(window, s, l), se(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Te = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), se(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Te = [];
      return;
    }
    if (r === "polyarea") {
      Q.push([t.x, t.y, t.z]), Z.geometry.setFromPoints(Q.map((s) => new m(s[0], s[1], s[2]))), Z.visible = Q.length >= 1, se(`\u25B0 \xC1rea libre \u2014 ${Q.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), w();
      return;
    }
    if (r === "plane3") {
      if (Te.push([t.x, t.y, t.z]), Te.length < 3) {
        se(`\u25E3 Plano inclinado \u2014 punto ${Te.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, d] = Te, u = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, d);
      se(u ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Te = [];
      return;
    }
    if (r === "col") {
      rn();
      const s = t.z, l = Et && Et > 0 ? Et : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const d = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [u - 2, u - 1], []], Et = 0, se(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Te, d = Et && Et > 0 ? Et : 3;
      rn();
      const u = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + d], [s[0], s[1], s[2] + d]];
      const b = e.polylines.rawVal;
      if (b.length - 1, e.polylines.val = [...b.slice(0, -1), ...b[b.length - 1].length > 0 ? [b[b.length - 1]] : [], [u, u + 1, u + 2, u + 3, u], []], e.areas) {
        const S = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, S];
      }
      se(`\u25A5 Pared Q4 creada \u2014 h=${d.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Te = [], Et = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      rn();
      const s = Et && Et > 0 ? Et : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const d = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [u - 2, u - 1], []], Et = 0, se(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = ye(t.x, t.y, t.z, s);
      if (!l) {
        se("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const d = e.polylines.rawVal, u = e.points.rawVal, b = d[l.polyIdx], S = u[b[l.segIdx]], p = u[b[l.segIdx + 1]];
      if (!S || !p) {
        se("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const h = Et && Et > 0 ? Et : 3;
      rn();
      const z = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [S[0], S[1], S[2]], [p[0], p[1], p[2]], [p[0], p[1], p[2] + h], [S[0], S[1], S[2] + h]];
      const Y = e.polylines.rawVal;
      if (e.polylines.val = [...Y.slice(0, -1), ...Y[Y.length - 1].length > 0 ? [Y[Y.length - 1]] : [], [z, z + 1, z + 2, z + 3, z], []], e.areas) {
        const U = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, U];
      }
      Et = 0, se(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${h.toFixed(2)}m`);
      try {
        (_u = window.__hekatanRebuild) == null ? void 0 : _u.call(window);
      } catch {
      }
      return;
    }
    if (r === "auxp") {
      const s = window.__hekatanDrawingAuxPoints;
      if (s) {
        const l = s.rawVal ?? s.val ?? [];
        s.val = [...l, [t.x, t.y, t.z]];
      }
      se(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Te, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const h = d.rawVal ?? d.val ?? [];
        d.val = [...h, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const u = l[0] - s[0], b = l[1] - s[1], S = l[2] - s[2], p = Math.sqrt(u * u + b * b + S * S);
      se(`\u2713 L\xEDnea auxiliar creada \u2014 L=${p.toFixed(2)}m (cyan, no FEM)`), Te = [];
      return;
    }
    if (r === "extend") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Te, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const u = d.rawVal ?? d.val ?? [];
        d.val = [...u, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      se("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Te = [];
      return;
    }
    if (r === "chaflan") {
      if (Te.push([t.x, t.y, t.z]), Te.length === 1) {
        se("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Te, d = window.__hekatanChaflanR ?? 1, u = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, d, u, 6);
      const b = Math.abs(l[0] - s[0]).toFixed(1), S = Math.abs(l[1] - s[1]).toFixed(1);
      se(`\u2713 Losa con chaflanes dibujada \u2014 ${b}\xD7${S}m, r=${d}m, ${u} seg/chafl\xE1n`), Te = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (X = false, rn(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, d = s[l] ?? [];
      if (r === "line" && d.length === 2) {
        e.polylines.val = [...s, []], se("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && d.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...d, d[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), se("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") se(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") se("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") se("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      se(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), x.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && Q.length >= 3) {
      n.preventDefault();
      const a = Xe();
      se(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), x.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = _();
    if (me.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], d = l[l.length - 1] ?? [], u = e.points.rawVal ?? [];
        if (d.length > 0) {
          const b = u[d[d.length - 1]];
          if (b) {
            const S = !!window.__hekatanOrthoMode;
            let p = R;
            if (!p && S) {
              const h = Math.abs(t.x - b[0]), z = Math.abs(t.y - b[1]), Y = Math.abs(t.z - b[2]);
              p = h >= z && h >= Y ? "x" : z >= Y ? "y" : "z";
            }
            p === "x" ? t.set(t.x, b[1], b[2]) : p === "y" ? t.set(b[0], t.y, b[2]) : p === "z" && t.set(b[0], b[1], t.z);
          }
        }
      }
      const r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, r);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const l = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0.5;
        l && d > 0 && (t.x = Math.round(t.x / d) * d, t.y = Math.round(t.y / d) * d, t.z = Math.round(t.z / d) * d);
      }
      me.geometry.setAttribute("position", new It(t.toArray(), 3));
    }
    w();
  }), x.addEventListener("pointermove", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(H), r = _();
    if (t.length && r.length) {
      const s = new m(...e.points.rawVal[t[0].index]), l = new m(...r[0].point), d = s.sub(l), u = (_a = r[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(W.matrixWorld), Math.abs(d.dot(u)) < 1e-4 && (a = true);
    }
    me.visible = !a;
  });
  let Zn = false, Un;
  x.addEventListener("pointermove", (n) => {
    var _a;
    if (!Ot) return;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(H), r = _();
    if (t.length && r.length) {
      const l = new m(...e.points.rawVal[t[0].index]), d = new m(...r[0].point), u = l.sub(d), b = (_a = r[0].face) == null ? void 0 : _a.normal;
      b.transformDirection(W.matrixWorld), Math.abs(u.dot(b)) < 1e-4 && (a = true);
    }
    if (a && Ot < 5 && (Zn = true, c.enabled = false, Un = t[0].index), !Zn || Ot % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Un !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new m(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Un] = l.toArray();
    }
    e.points.val = s;
  }), x.addEventListener("pointerup", () => {
    c.enabled = true, Zn = false;
  }), x.addEventListener("contextmenu", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(H), r = _();
    if (t.length && r.length) {
      const d = new m(...e.points.rawVal[t[0].index]), u = new m(...r[0].point), b = d.sub(u), S = (_a = r[0].face) == null ? void 0 : _a.normal;
      S.transformDirection(W.matrixWorld), Math.abs(b.dot(S)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((d) => d.filter((u) => u !== t[0].index)).map((d) => d.map((u) => u > t[0].index ? u - 1 : u)).filter((d) => d.length);
    l.push([]), e.polylines.val = l;
  });
}
function vs(e, i, y) {
  const k = Math.round(14.999999999999998), g = { position: e.position.clone(), quaternion: e.quaternion.clone() }, x = setInterval(M, 1e3 / 30);
  let w = 0;
  function M() {
    w++;
    const P = w / k;
    e.position.lerpVectors(g.position, i.position, P), e.quaternion.slerpQuaternions(g.quaternion, i.quaternion, P), y && y(), w == k && clearInterval(x);
  }
}
class To {
  constructor(i, y = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(i, y);
  }
  set(i) {
    return i.isLut === true && this.copy(i), this;
  }
  setMin(i) {
    return this.minV = i, this;
  }
  setMax(i) {
    return this.maxV = i, this;
  }
  setColorMap(i, y = 32) {
    this.map = On[i] || On.rainbow, this.n = y;
    const f = 1 / this.n, c = new Gt(), k = new Gt();
    this.lut.length = 0, this.lut.push(new Gt(this.map[0][1]));
    for (let g = 1; g < y; g++) {
      const x = g * f;
      for (let w = 0; w < this.map.length - 1; w++) if (x > this.map[w][0] && x <= this.map[w + 1][0]) {
        const M = this.map[w][0], P = this.map[w + 1][0];
        c.setHex(this.map[w][1], Tn), k.setHex(this.map[w + 1][1], Tn);
        const v = new Gt().lerpColors(c, k, (x - M) / (P - M));
        this.lut.push(v);
      }
    }
    return this.lut.push(new Gt(this.map[this.map.length - 1][1])), this;
  }
  copy(i) {
    return this.lut = i.lut, this.map = i.map, this.n = i.n, this.minV = i.minV, this.maxV = i.maxV, this;
  }
  getColor(i) {
    i = Ko.clamp(i, this.minV, this.maxV), i = (i - this.minV) / (this.maxV - this.minV);
    const y = Math.round(i * this.n);
    return this.lut[y];
  }
  addColorMap(i, y) {
    return On[i] = y, this;
  }
  createCanvas() {
    const i = document.createElement("canvas");
    return i.width = 1, i.height = this.n, this.updateCanvas(i), i;
  }
  updateCanvas(i) {
    const y = i.getContext("2d", { alpha: false }), f = y.getImageData(0, 0, 1, this.n), c = f.data;
    let k = 0;
    const g = 1 / this.n, x = new Gt(), w = new Gt(), M = new Gt();
    for (let P = 1; P >= 0; P -= g) for (let v = this.map.length - 1; v >= 0; v--) if (P < this.map[v][0] && P >= this.map[v - 1][0]) {
      const W = this.map[v - 1][0], ee = this.map[v][0];
      x.setHex(this.map[v - 1][1], Tn), w.setHex(this.map[v][1], Tn), M.lerpColors(x, w, (P - W) / (ee - W)), c[k * 4] = Math.round(M.r * 255), c[k * 4 + 1] = Math.round(M.g * 255), c[k * 4 + 2] = Math.round(M.b * 255), c[k * 4 + 3] = 255, k += 1;
    }
    return y.putImageData(f, 0, 0), i;
  }
}
const On = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, kn = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function bs(e) {
  e = Math.max(0, Math.min(1, e));
  for (let y = 0; y < kn.length - 1; y++) {
    const [f, c, k, g] = kn[y], [x, w, M, P] = kn[y + 1];
    if (e <= x) {
      const v = (e - f) / (x - f);
      return [c + (w - c) * v, k + (M - k) * v, g + (P - g) * v];
    }
  }
  const i = kn[kn.length - 1];
  return [i[1], i[2], i[3]];
}
function Ms() {
  const i = new Uint8Array(1024);
  for (let f = 0; f < 256; f++) {
    const c = f / 255, [k, g, x] = bs(c);
    i[f * 4 + 0] = k, i[f * 4 + 1] = g, i[f * 4 + 2] = x, i[f * 4 + 3] = 255;
  }
  const y = new Go(i, 256, 1, qo);
  return y.minFilter = xo, y.magFilter = xo, y.wrapS = go, y.wrapT = go, y.needsUpdate = true, y;
}
function _s(e, i, y) {
  new To();
  const f = Ms(), c = new Ho({ uniforms: { cmap: { value: f }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Dt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), k = new qe(new fe(), c);
  return k.renderOrder = -1, k.frustumCulled = false, k.userData.isShellArea = true, k.name = "__hekatan_shell_colormap", I.derive(() => {
    k.geometry.setAttribute("position", new It(e.val.flat(), 3));
    const g = [];
    for (const _ of i.val) _.length === 3 ? g.push(_[0], _[1], _[2]) : _.length === 4 && (g.push(_[0], _[1], _[2]), g.push(_[0], _[2], _[3]));
    k.geometry.setIndex(new Wo(g, 1));
    const x = y.val.filter((_) => Number.isFinite(_));
    let w, M;
    const P = so.val;
    if (P ? (M = P[0], w = P[1]) : (w = x.length ? Math.max(...x) : 1, M = x.length ? Math.min(...x) : 0, M >= 0 && w > 0 && (M = 0)), w === M) {
      const _ = Math.max(Math.abs(w) * 1e-6, 1e-9);
      w += _, M -= _;
    }
    const v = P && P[0] > P[1], W = Math.min(M, w), ee = Math.max(M, w), he = ee - W, ie = new Float32Array(y.val.length);
    for (let _ = 0; _ < y.val.length; _++) {
      const H = y.val[_];
      if (!Number.isFinite(H)) {
        ie[_] = -1;
        continue;
      }
      const te = ((v ? ee + W - H : H) - W) / he;
      ie[_] = Math.max(0, Math.min(1, te));
    }
    k.geometry.setAttribute("scalar", new rt(ie, 1));
  }), k;
}
function Ss(e, i, y, f) {
  const c = _s(y, e.elements, f);
  return I.derive(() => {
    c.visible = i.shellResults.val != "none";
  }), c;
}
const ks = 6, jn = 10, Ps = 0.012;
function Cs(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function zs(e, i, y, f) {
  if (!y && !f) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const k = y[e];
    if (k && k.has(i)) return k.get(i);
  }
  return null;
}
function Fs(e, i, y, f) {
  const c = new tt(), k = new To();
  k.setColorMap("rainbow");
  const g = new Gt(), x = I.state([]);
  return I.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const w = y.val, M = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = Cs(i.frameResults.val);
    if (c.children.forEach((C) => {
      C.geometry && C.geometry.dispose(), C.material && C.material.dispose();
    }), c.clear(), !P || M.length === 0 || w.length === 0) {
      x.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, W = (_c = e.deformOutputs) == null ? void 0 : _c.val, ee = [], he = [];
    for (let C = 0; C < M.length; C++) {
      if (M[C].length !== 2) continue;
      const j = zs(P, C, v, W);
      j && (ee.push(j[0], j[1]), he.push({ idx: C, vals: j }));
    }
    if (ee.length === 0) {
      x.val = [];
      return;
    }
    const ie = Math.min(...ee), _ = Math.max(...ee);
    k.setMin(ie), k.setMax(_), x.val = ee;
    const H = [1 / 0, 1 / 0, 1 / 0], me = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of w) for (let N = 0; N < 3; N++) H[N] = Math.min(H[N], C[N]), me[N] = Math.max(me[N], C[N]);
    const K = Math.max(me[0] - H[0], me[1] - H[1], me[2] - H[2], 1) * Ps, pe = [], q = [], X = [];
    let $ = 0;
    for (const { idx: C, vals: N } of he) {
      const j = M[C], D = w[j[0]], xe = w[j[1]];
      if (!D || !xe) continue;
      const A = new m(xe[0] - D[0], xe[1] - D[1], xe[2] - D[2]), Z = A.length();
      if (Z < 1e-10) continue;
      A.normalize();
      const Q = Math.abs(A.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), ae = new m().crossVectors(A, Q).normalize(), J = new m().crossVectors(A, ae).normalize(), Pe = jn + 1, be = ks;
      for (let Ce = 0; Ce < Pe; Ce++) {
        const Se = Ce / jn, Ne = D[0] + A.x * Z * Se, Mt = D[1] + A.y * Z * Se, St = D[2] + A.z * Z * Se, ct = N[0] + (N[1] - N[0]) * Se, T = k.getColor(ct) ?? new Gt(0, 0, 0);
        g.copy(T).convertSRGBToLinear();
        for (let O = 0; O < be; O++) {
          const oe = O / be * Math.PI * 2, ce = Math.cos(oe), Fe = Math.sin(oe);
          pe.push(Ne + (ae.x * ce + J.x * Fe) * K, Mt + (ae.y * ce + J.y * Fe) * K, St + (ae.z * ce + J.z * Fe) * K), q.push(g.r, g.g, g.b);
        }
      }
      for (let Ce = 0; Ce < jn; Ce++) for (let Se = 0; Se < be; Se++) {
        const Ne = (Se + 1) % be, Mt = $ + Ce * be + Se, St = $ + Ce * be + Ne, ct = $ + (Ce + 1) * be + Se, T = $ + (Ce + 1) * be + Ne;
        X.push(Mt, St, T), X.push(Mt, T, ct);
      }
      $ += Pe * be;
    }
    if (pe.length === 0) return;
    const E = new fe();
    E.setAttribute("position", new It(pe, 3)), E.setAttribute("color", new It(q, 3)), E.setIndex(X), E.computeVertexNormals();
    const F = new nt({ vertexColors: true, side: Dt }), V = new qe(E, F);
    V.frustumCulled = false, c.add(V);
  }), c.__colorMapValues = x, c;
}
function As() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Es = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Vs = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ts = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function vt(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Ls = 16755200, ko = 56831, Is = 56831, $s = 56831, $n = 65382;
function Rs(e) {
  const i = new tt();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const y = new wn(1, 16, 16), f = new nt({ color: Ls, transparent: true, opacity: 0.85, depthTest: false }), c = new qe(y, f);
  c.visible = false, c.renderOrder = 100, i.add(c);
  const k = new fe(), g = new ht({ color: ko, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), x = new jt(k, g);
  x.visible = false, x.renderOrder = 100, i.add(x);
  const w = new nt({ color: ko, transparent: true, opacity: 0.7, depthTest: false }), M = new qe(new vo(1, 1, 1, 12), w);
  M.visible = false, M.renderOrder = 100, i.add(M);
  const P = new fe(), v = new nt({ color: Is, transparent: true, opacity: 0.45, side: Dt, depthTest: false }), W = new qe(P, v);
  W.visible = false, W.renderOrder = 100, i.add(W);
  const ee = new fe(), he = new ht({ color: $s, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ie = new jt(ee, he);
  ie.visible = false, ie.renderOrder = 100, i.add(ie);
  const _ = new nt({ color: $n, transparent: true, opacity: 0.95, depthTest: false }), H = new qe(y, _);
  H.visible = false, H.renderOrder = 101, i.add(H);
  const me = new nt({ color: $n, transparent: true, opacity: 0.85, depthTest: false }), te = new qe(new vo(1, 1, 1, 12), me);
  te.visible = false, te.renderOrder = 101, i.add(te);
  const K = new fe(), pe = new nt({ color: $n, transparent: true, opacity: 0.55, side: Dt, depthTest: false }), q = new qe(K, pe);
  q.visible = false, q.renderOrder = 101, i.add(q);
  const X = new fe(), $ = new ht({ color: $n, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), E = new jt(X, $);
  E.visible = false, E.renderOrder = 101, i.add(E);
  let F = null;
  const V = document.createElement("div");
  Object.assign(V.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), V.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(V);
  }, 0);
  function C(R) {
    const le = e.derivedNodes.rawVal;
    return !le || R < 0 || R >= le.length ? null : new m(le[R][0], le[R][1], le[R][2]);
  }
  function N(R, le) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2;
    const de = e.getActiveCamera();
    if (!de || !e.mesh) return null;
    const re = e.rendererElm.getBoundingClientRect(), Ye = R - re.left, Ze = le - re.top, Qe = e.derivedNodes.rawVal, $e = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Qe || !$e) return null;
    const ke = /* @__PURE__ */ new Map(), Ae = (Le) => {
      if (ke.has(Le)) return ke.get(Le);
      const Ee = C(Le);
      if (!Ee) return ke.set(Le, null), null;
      const ye = Ee.clone().project(de), De = (ye.x * 0.5 + 0.5) * re.width, ge = (-ye.y * 0.5 + 0.5) * re.height, st = { x: De, y: ge, z: ye.z };
      return ke.set(Le, st), st;
    }, bt = /* @__PURE__ */ new Set();
    for (const Le of $e) if (Le) for (const Ee of Le) bt.add(Ee);
    const ot = 8;
    let Me = -1, We = ot;
    for (let Le = 0; Le < Qe.length; Le++) {
      if (!bt.has(Le)) continue;
      const Ee = Ae(Le);
      if (!Ee || Ee.z < -1 || Ee.z > 1) continue;
      const ye = Ee.x - Ye, De = Ee.y - Ze, ge = Math.sqrt(ye * ye + De * De);
      ge < We && (We = ge, Me = Le);
    }
    const _e = As(), dt = Vs[_e.dispUnit] ?? 1e3, pt = Es[_e.forceUnit] ?? 1;
    if (Me >= 0) {
      const Le = Qe[Me];
      let Ee = `Nodo ${Me}
(${Le[0].toFixed(3)}, ${Le[1].toFixed(3)}, ${Le[2].toFixed(3)})`;
      const ye = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (ye == null ? void 0 : ye.deformations) {
        const De = ye.deformations.get(Me);
        if (De && (Ee += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Ee += `
Ux = ${vt(De[0] * dt, 3)} ${_e.dispUnit}`, Ee += `
Uy = ${vt(De[1] * dt, 3)} ${_e.dispUnit}`, Ee += `
Uz = ${vt(De[2] * dt, 3)} ${_e.dispUnit}`, (Math.abs(De[3]) > 1e-9 || Math.abs(De[4]) > 1e-9 || Math.abs(De[5]) > 1e-9) && (Ee += `
Rx = ${vt(De[3] * 1e3, 3)} mrad`, Ee += `
Ry = ${vt(De[4] * 1e3, 3)} mrad`, Ee += `
Rz = ${vt(De[5] * 1e3, 3)} mrad`)), ye.reactions) {
          const ge = ye.reactions.get(Me);
          ge && (Math.abs(ge[0]) > 1e-9 || Math.abs(ge[1]) > 1e-9 || Math.abs(ge[2]) > 1e-9 || Math.abs(ge[3]) > 1e-6 || Math.abs(ge[4]) > 1e-6 || Math.abs(ge[5]) > 1e-6) && (Ee += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Ee += `
Fx = ${vt(ge[0] * pt)} ${_e.forceUnit}`, Ee += `
Fy = ${vt(ge[1] * pt)} ${_e.forceUnit}`, Ee += `
Fz = ${vt(ge[2] * pt)} ${_e.forceUnit}`, (Math.abs(ge[3]) > 1e-6 || Math.abs(ge[4]) > 1e-6 || Math.abs(ge[5]) > 1e-6) && (Ee += `
Mx = ${vt(ge[3] * pt)} ${_e.forceUnit}\xB7m`, Ee += `
My = ${vt(ge[4] * pt)} ${_e.forceUnit}\xB7m`, Ee += `
Mz = ${vt(ge[5] * pt)} ${_e.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Me, info: Ee };
    }
    const Nt = 5;
    let Je = -1, kt = Nt, Jt = "frame";
    for (let Le = 0; Le < $e.length; Le++) {
      const Ee = $e[Le];
      if (!(!Ee || Ee.length < 2)) {
        if (Ee.length === 2) {
          const ye = Ae(Ee[0]), De = Ae(Ee[1]);
          if (!ye || !De || ye.z < -1 || ye.z > 1 || De.z < -1 || De.z > 1) continue;
          const ge = Bs(Ye, Ze, ye.x, ye.y, De.x, De.y);
          ge < kt && (kt = ge, Je = Le, Jt = "frame");
        } else if (Ee.length === 3 || Ee.length === 4) {
          const ye = [];
          let De = true;
          for (const ge of Ee) {
            const st = Ae(ge);
            if (!st || st.z < -1 || st.z > 1) {
              De = false;
              break;
            }
            ye.push(st);
          }
          if (!De) continue;
          if (Xs(Ye, Ze, ye)) {
            const st = ye.reduce((Oe, Zt) => Oe + Zt.z, 0) / ye.length * 1e-3;
            st < kt && (kt = st, Je = Le, Jt = "shell");
          }
        } else if (Ee.length === 8) {
          const ye = [];
          let De = true;
          for (const Xe of Ee) {
            const Ie = Ae(Xe);
            if (!Ie || Ie.z < -1 || Ie.z > 1) {
              De = false;
              break;
            }
            ye.push(Ie);
          }
          if (!De) continue;
          const ge = Math.min(...ye.map((Xe) => Xe.x)), st = Math.max(...ye.map((Xe) => Xe.x)), Oe = Math.min(...ye.map((Xe) => Xe.y)), Zt = Math.max(...ye.map((Xe) => Xe.y));
          if (Ye >= ge && Ye <= st && Ze >= Oe && Ze <= Zt) {
            const Ie = ye.reduce((at, yt) => at + yt.z, 0) / ye.length * 1e-3;
            Ie < kt && (kt = Ie, Je = Le, Jt = "solid");
          }
        }
      }
    }
    if (Je >= 0) {
      const Le = $e[Je];
      let ye = `${Jt === "frame" ? "Frame" : Jt === "shell" ? "Shell" : "Solid"} ${Je}`;
      const De = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, ge = (_g = (_f = De == null ? void 0 : De.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Je);
      if (ge) {
        ge.name && (ye += `
  \u{1F4CB} ${ge.name}`), ge.shape && (ye += `
  Shape: ${ge.shape}`);
        const st = /concrete|hormig|rect.*sólida/i.test(ge.shape || ""), Oe = st ? 100 : 1e3, Zt = st ? "cm" : "mm", Xe = (at) => {
          const yt = at * Oe;
          return Math.abs(yt - Math.round(yt)) < 0.05 ? `${Math.round(yt)}` : `${yt.toFixed(1)}`;
        }, Ie = [];
        if (ge.D != null && Ie.push(`D=${Xe(ge.D)}`), ge.B != null && Ie.push(`B=${Xe(ge.B)}`), ge.TF != null && Ie.push(`TF=${Xe(ge.TF)}`), ge.TW != null && Ie.push(`TW=${Xe(ge.TW)}`), ge.t != null && Ie.push(`t=${Xe(ge.t)}`), Ie.length && (ye += `
  Dim: ${Ie.join(" ")} ${Zt}`), ge.material) {
          let at = ge.material;
          ge.fillMaterial && (at += ` + FILL "${ge.fillMaterial}"`), ye += `
  Mat: ${at}`;
        }
      } else {
        const st = (_i = (_h = De == null ? void 0 : De.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Je), Oe = (_k = (_j = De == null ? void 0 : De.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Je);
        st ? (ye += `
  ${st}`, Oe && !st.includes(Oe) && (ye += `  (${Oe})`)) : Oe && (ye += `
  Material: ${Oe}`);
      }
      if (ye += `
nodos: [${Le.join(", ")}]`, Jt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const st = e.mesh.analyzeOutputs.rawVal, Oe = Ts[_e.stressUnit] ?? 1, Zt = [["bendingXX", "Mxx", pt, `${_e.forceUnit}\xB7m/m`], ["bendingYY", "Myy", pt, `${_e.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", pt, `${_e.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", pt, `${_e.forceUnit}/m`], ["membraneYY", "Nyy", pt, `${_e.forceUnit}/m`], ["membraneXY", "Nxy", pt, `${_e.forceUnit}/m`], ["shearX", "Qx", pt, `${_e.forceUnit}/m`], ["shearY", "Qy", pt, `${_e.forceUnit}/m`], ["vonMises", "\u03C3VM", Oe, _e.stressUnit], ["pressure", "p", Oe, _e.stressUnit]], Xe = [];
        for (const [Ie, at, yt, Ht] of Zt) {
          const en = st == null ? void 0 : st[Ie];
          if (en && en instanceof Map) {
            const Ft = en.get(Je);
            if (Ft != null) {
              if (typeof Ft == "number") Xe.push(`${at} = ${vt(Ft * yt, 3)} ${Ht}`);
              else if (Array.isArray(Ft)) {
                let At = Ft[0];
                for (const it of Ft) Math.abs(it) > Math.abs(At) && (At = it);
                Xe.push(`${at} = ${vt(At * yt, 3)} ${Ht}`);
              }
            }
          }
        }
        Xe.length > 0 && (ye += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Xe.slice(0, 8).join(`
`));
      }
      if (Jt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const st = e.mesh.deformOutputs.rawVal, Oe = e.mesh.elementInputs.rawVal, Zt = st == null ? void 0 : st.deformations;
        if (Zt && Le.length === 2) {
          const Xe = Zt.get(Le[0]), Ie = Zt.get(Le[1]), at = Qe[Le[0]], yt = Qe[Le[1]];
          if (Xe && Ie && at && yt) {
            const Ht = yt[0] - at[0], en = yt[1] - at[1], Ft = yt[2] - at[2], At = Math.sqrt(Ht * Ht + en * en + Ft * Ft);
            if (At > 1e-9) {
              const it = Ht / At, Cn = en / At, zn = Ft / At, Qt = (Ie[0] - Xe[0]) * it + (Ie[1] - Xe[1]) * Cn + (Ie[2] - Xe[2]) * zn, sn = ((_n = Oe.elasticities) == null ? void 0 : _n.get(Je)) ?? 0, Fn = ((_o2 = Oe.areas) == null ? void 0 : _o2.get(Je)) ?? 0, Dn = ((_p = Oe.momentsOfInertiaY) == null ? void 0 : _p.get(Je)) ?? 0, yn = ((_q = Oe.momentsOfInertiaZ) == null ? void 0 : _q.get(Je)) ?? 0, An = ((_r = Oe.torsionalConstants) == null ? void 0 : _r.get(Je)) ?? 0, xn = ((_s2 = Oe.shearModuli) == null ? void 0 : _s2.get(Je)) ?? sn / 2.6, Ot = sn * Fn * (Qt / At), Pt = (Ie[3] - Xe[3]) * it + (Ie[4] - Xe[4]) * Cn + (Ie[5] - Xe[5]) * zn, Xt = xn * An * (Pt / At), ln = Ie[4] - Xe[4], Bt = Ie[5] - Xe[5], pn = sn * Dn * ln / At, gn = sn * yn * Bt / At;
              ye += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, ye += `
L = ${vt(At, 3)} m`, ye += `
\u0394L = ${vt(Qt * dt, 3)} ${_e.dispUnit}`, ye += `
\u03B5 = ${vt(Qt / At, 6)}`, Math.abs(Ot) > 1e-6 && (ye += `
N \u2248 ${vt(Ot * pt)} ${_e.forceUnit}`), Math.abs(Xt) > 1e-6 && (ye += `
T \u2248 ${vt(Xt * pt)} ${_e.forceUnit}\xB7m`), Math.abs(pn) > 1e-6 && (ye += `
My \u2248 ${vt(pn * pt)} ${_e.forceUnit}\xB7m`), Math.abs(gn) > 1e-6 && (ye += `
Mz \u2248 ${vt(gn * pt)} ${_e.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Jt, idx: Je, info: ye };
    }
    return null;
  }
  function j(R, le, de) {
    var _a, _b, _c;
    if (c.visible = false, x.visible = false, M.visible = false, W.visible = false, ie.visible = false, !R || !e.mesh) {
      V.style.display = "none", e.render();
      return;
    }
    const re = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (R.type === "node") {
      const $e = C(R.idx);
      if ($e) {
        const ke = e.derivedNodes.rawVal ?? [];
        let Ae = 1;
        if (ke.length >= 2) {
          let Me = [1 / 0, 1 / 0, 1 / 0], We = [-1 / 0, -1 / 0, -1 / 0];
          for (const _e of ke) for (let dt = 0; dt < 3; dt++) _e[dt] < Me[dt] && (Me[dt] = _e[dt]), _e[dt] > We[dt] && (We[dt] = _e[dt]);
          Ae = Math.max(We[0] - Me[0], We[1] - Me[1], We[2] - Me[2], 0.1);
        }
        const bt = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, ot = 0.015 * Ae * bt;
        c.position.copy($e), c.scale.setScalar(ot), c.visible = true;
      }
    } else if (R.type === "frame" && re) {
      const $e = re[R.idx], ke = C($e[0]), Ae = C($e[1]);
      if (ke && Ae) {
        const bt = ke.clone().add(Ae).multiplyScalar(0.5), ot = Ae.clone().sub(ke), Me = ot.length(), We = e.getActiveCamera();
        let _e;
        if (We.isOrthographicCamera) {
          const Je = We;
          _e = (Je.top - Je.bottom) / Je.zoom * 35e-4;
        } else _e = We.position.distanceTo(bt) * 35e-4;
        M.position.copy(bt);
        const dt = new m(0, 1, 0), pt = dt.clone().cross(ot).normalize(), Nt = dt.angleTo(ot);
        M.quaternion.setFromAxisAngle(pt, Nt), M.scale.set(_e, Me, _e), M.visible = true;
      }
    } else if (R.type === "shell" && re) {
      const $e = re[R.idx], ke = [], Ae = [];
      for (const bt of $e) {
        const ot = C(bt);
        if (!ot) return;
        ke.push(ot.x, ot.y, ot.z);
      }
      $e.length === 4 ? Ae.push(0, 1, 2, 0, 2, 3) : $e.length === 3 && Ae.push(0, 1, 2), P.setAttribute("position", new It(ke, 3)), P.setIndex(Ae), P.computeVertexNormals(), W.visible = true;
    } else if (R.type === "solid" && re) {
      const $e = re[R.idx], ke = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ae = [];
      for (const [bt, ot] of ke) {
        const Me = C($e[bt]), We = C($e[ot]);
        Me && We && Ae.push(Me.x, Me.y, Me.z, We.x, We.y, We.z);
      }
      ee.setAttribute("position", new It(Ae, 3)), ie.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      V.style.display = "none", e.render();
      return;
    }
    V.textContent = R.info, V.style.whiteSpace = "pre-line", V.style.display = "block";
    const Ze = e.rendererElm.getBoundingClientRect(), Qe = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ze;
    V.style.left = `${le - Qe.left}px`, V.style.top = `${de - Qe.top}px`, e.render();
  }
  let D = "", xe = 0, A = 0;
  const Z = window.__hekatanHoverDebug ?? false, Q = (R) => {
    xe && cancelAnimationFrame(xe), xe = requestAnimationFrame(() => {
      var _a, _b, _c;
      const le = N(R.clientX, R.clientY);
      if (Z && A < 5) {
        const re = e.derivedNodes.rawVal, Ye = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${R.clientX}, ${R.clientY}) nodes=${(re == null ? void 0 : re.length) ?? 0} elems=${(Ye == null ? void 0 : Ye.length) ?? 0} hover=`, le), A++;
      }
      const de = le ? `${le.type}:${le.idx}` : "";
      if (de !== D) D = de, j(le, R.clientX, R.clientY);
      else if (le) {
        const re = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        V.style.left = `${R.clientX - re.left}px`, V.style.top = `${R.clientY - re.top}px`;
      }
    });
  };
  let ae = null;
  const J = () => {
    D = "", c.visible = false, x.visible = false, M.visible = false, W.visible = false, ie.visible = false, V.style.display = "none", e.render();
  }, Pe = (R) => {
    const le = e.rendererElm.getBoundingClientRect(), de = R.clientX - le.left, re = R.clientY - le.top;
    (de < -2 || re < -2 || de > le.width + 2 || re > le.height + 2) && (ae && clearTimeout(ae), ae = window.setTimeout(J, 200));
  }, be = () => {
    ae && (clearTimeout(ae), ae = null);
  };
  e.rendererElm.addEventListener("pointermove", Q), e.rendererElm.addEventListener("pointerleave", Pe), e.rendererElm.addEventListener("pointerenter", be);
  const Ce = document.createElement("div");
  Object.assign(Ce.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), Ce.classList.add("hekatan-context-menu");
  let Se = null;
  const Ne = document.createElement("div");
  Object.assign(Ne.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const Mt = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], St = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], ct = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], T = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], O = (R, le, de) => {
    const re = document.createElement("div");
    return re.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, re.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${R}</span><span>${le}</span>`, re.addEventListener("mouseenter", () => {
      re.style.background = "rgba(100, 160, 255, 0.22)";
    }), re.addEventListener("mouseleave", () => {
      re.style.background = "transparent";
    }), re.addEventListener("click", (Ye) => {
      Ye.stopPropagation();
      const Ze = Se;
      wt(), Ze && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${de}`, { detail: { type: Ze.type, idx: Ze.idx, subAction: de } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ze.type, idx: Ze.idx, subAction: de } })));
    }), re;
  };
  function oe(R) {
    Ne.innerHTML = "";
    const le = R === "frame" ? Mt : R === "node" ? St : R === "shell" ? ct : T, de = document.createElement("div");
    de.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", de.textContent = `Asignar a ${R.toUpperCase()} #${(Se == null ? void 0 : Se.idx) ?? "?"}`, Ne.appendChild(de);
    for (const re of le) Ne.appendChild(O(re.icon, re.label, re.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Ne);
  }, 0);
  function ce(R, le) {
    var _a;
    if (!Se) return;
    oe(Se.type);
    const de = Ce.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Ne.style.left = `${R + de.width}px`, Ne.style.top = `${le}px`, Ne.style.display = "block", setTimeout(() => {
      const re = Ne.getBoundingClientRect();
      re.right > window.innerWidth - 10 && (Ne.style.left = `${R - re.width}px`);
    }, 0);
  }
  function Fe() {
    Ne.style.display = "none";
  }
  const Ge = (R, le, de, re) => {
    const Ye = document.createElement("div");
    Ye.style.cssText = `
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.1s;
      justify-content: space-between;
    `;
    const Ze = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${R}</span><span>${le}</span></span>`, Qe = de ? '<span style="color:#888;">\u25B8</span>' : "";
    return Ye.innerHTML = Ze + Qe, Ye.addEventListener("mouseenter", () => {
      if (Ye.style.background = "rgba(100, 160, 255, 0.18)", de) {
        const $e = parseFloat(Ce.style.left || "0"), ke = parseFloat(Ce.style.top || "0");
        ce($e, ke);
      } else Fe();
    }), Ye.addEventListener("mouseleave", () => {
      Ye.style.background = "transparent";
    }), Ye.addEventListener("click", ($e) => {
      if ($e.stopPropagation(), de) return;
      const ke = Se;
      wt(), re(ke);
    }), Ye;
  }, Ke = Ge("\u{1F4DD}", "Asignar", true, () => {
  }), Ue = Ge("\u2139", "Ver informaci\xF3n", false, (R) => {
    R && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: R.type, idx: R.idx } }));
  });
  Ue.addEventListener("mouseenter", () => {
    Fe();
  }), Ce.appendChild(Ke), Ce.appendChild(Ue), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Ce);
  }, 0);
  function mt(R, le, de) {
    var _a, _b;
    Se = de;
    const re = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    Ce.style.left = `${R - re.left}px`, Ce.style.top = `${le - re.top}px`, Ce.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function wt() {
    Ce.style.display = "none", Fe(), Se = null;
  }
  e.rendererElm.addEventListener("pointerdown", (R) => {
    if (R.button !== 2) return;
    const le = N(R.clientX, R.clientY);
    window.__hekatanRClickOnElement = !!le;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (R) => {
    const le = N(R.clientX, R.clientY);
    if (!le) {
      wt(), window.__hekatanRClickOnElement = false;
      return;
    }
    R.preventDefault(), R.stopImmediatePropagation(), mt(R.clientX, R.clientY, { type: le.type, idx: le.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const $t = (R) => {
    if (Ce.style.display !== "block") return;
    const le = R.target;
    Ce.contains(le) || Ne.contains(le) || wt();
  };
  document.addEventListener("mousedown", $t, true), document.addEventListener("keydown", (R) => {
    R.key === "Escape" && Ce.style.display === "block" && wt();
  });
  let qt = null;
  e.rendererElm.addEventListener("pointerdown", (R) => {
    R.button === 0 && (qt = { x: R.clientX, y: R.clientY });
  }), e.rendererElm.addEventListener("pointerup", (R) => {
    if (R.button !== 0 || !qt) return;
    const le = R.clientX - qt.x, de = R.clientY - qt.y;
    if (qt = null, le * le + de * de > 9) return;
    const re = N(R.clientX, R.clientY);
    re ? (F = { type: re.type, idx: re.idx }, Rt()) : (F = null, Rt());
  });
  function Rt() {
    var _a, _b;
    if (H.visible = false, te.visible = false, q.visible = false, E.visible = false, !F || !e.mesh) {
      e.render();
      return;
    }
    const R = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (F.type === "node") {
      const le = C(F.idx);
      if (le) {
        const de = e.derivedNodes.rawVal ?? [];
        let re = 1;
        if (de.length >= 2) {
          let Qe = [1 / 0, 1 / 0, 1 / 0], $e = [-1 / 0, -1 / 0, -1 / 0];
          for (const ke of de) for (let Ae = 0; Ae < 3; Ae++) ke[Ae] < Qe[Ae] && (Qe[Ae] = ke[Ae]), ke[Ae] > $e[Ae] && ($e[Ae] = ke[Ae]);
          re = Math.max($e[0] - Qe[0], $e[1] - Qe[1], $e[2] - Qe[2], 0.1);
        }
        const Ye = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ze = 0.017 * re * Ye;
        H.position.copy(le), H.scale.setScalar(Ze), H.visible = true;
      }
    } else if (F.type === "frame" && R) {
      const le = R[F.idx], de = C(le[0]), re = C(le[1]);
      if (de && re) {
        const Ye = de.clone().add(re).multiplyScalar(0.5), Ze = re.clone().sub(de), Qe = Ze.length(), $e = e.getActiveCamera();
        let ke;
        if ($e.isOrthographicCamera) {
          const Me = $e;
          ke = (Me.top - Me.bottom) / Me.zoom * 35e-4;
        } else ke = $e.position.distanceTo(Ye) * 35e-4;
        te.position.copy(Ye);
        const Ae = new m(0, 1, 0), bt = Ae.clone().cross(Ze).normalize(), ot = Ae.angleTo(Ze);
        te.quaternion.setFromAxisAngle(bt, ot), te.scale.set(ke, Qe, ke), te.visible = true;
      }
    } else if (F.type === "shell" && R) {
      const le = R[F.idx], de = [], re = [];
      for (const Ye of le) {
        const Ze = C(Ye);
        if (!Ze) return;
        de.push(Ze.x, Ze.y, Ze.z);
      }
      le.length === 4 ? re.push(0, 1, 2, 0, 2, 3) : le.length === 3 && re.push(0, 1, 2), K.setAttribute("position", new It(de, 3)), K.setIndex(re), K.computeVertexNormals(), q.visible = true;
    } else if (F.type === "solid" && R) {
      const le = R[F.idx], de = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], re = [];
      for (const [Ye, Ze] of de) {
        const Qe = C(le[Ye]), $e = C(le[Ze]);
        Qe && $e && re.push(Qe.x, Qe.y, Qe.z, $e.x, $e.y, $e.z);
      }
      X.setAttribute("position", new It(re, 3)), E.visible = true;
    }
    e.render();
  }
  return I.derive(() => {
    e.derivedNodes.val, F && Rt();
  }), i;
}
function Bs(e, i, y, f, c, k) {
  const g = c - y, x = k - f, w = g * g + x * x;
  if (w < 1e-9) {
    const he = e - y, ie = i - f;
    return Math.sqrt(he * he + ie * ie);
  }
  let M = ((e - y) * g + (i - f) * x) / w;
  M = Math.max(0, Math.min(1, M));
  const P = y + M * g, v = f + M * x, W = e - P, ee = i - v;
  return Math.sqrt(W * W + ee * ee);
}
function Xs(e, i, y) {
  let f = false;
  for (let c = 0, k = y.length - 1; c < y.length; k = c++) {
    const g = y[c].x, x = y[c].y, w = y[k].x, M = y[k].y;
    x > i != M > i && e < (w - g) * (i - x) / (M - x + 1e-12) + g && (f = !f);
  }
  return f;
}
function Po(e, i = 8) {
  const y = document.createElement("div");
  y.id = "legend";
  const f = document.createElement("div");
  f.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(f), setTimeout(() => {
    I.derive(() => {
      f.textContent = to.val ? `[${to.val}]` : "";
    });
  });
  const c = Array.from({ length: i + 1 }, (w, M) => M / i).reverse();
  let k, g;
  c.forEach((w, M) => {
    k = document.createElement("div"), k.id = `marker-${M}`, k.className = "marker", k.style.marginTop = M == 0 ? "0px" : `calc(${50 / i}vh - 1px)`, g = document.createElement("p"), g.id = `marker-text-${M}`, k.append(g), y.append(k);
  });
  const x = [];
  return y.querySelectorAll("p").forEach((w) => x.push(w)), setTimeout(() => {
    I.derive(() => {
      c.forEach((w, M) => {
        const P = x[M];
        P && (P.innerText = Ys(e.val, w).toString());
      });
    });
  }), y;
}
function Ys(e, i) {
  const y = so.val;
  if (y) return (y[0] + i * (y[1] - y[0])).toPrecision(3);
  const f = e.filter((g) => Number.isFinite(g));
  if (f.length === 0) return "0";
  let c = Math.min(...f);
  const k = Math.max(...f);
  return c >= 0 && k > 0 && (c = 0), (c + i * (k - c)).toPrecision(3);
}
function Qs({ mesh: e, settingsObj: i, drawingObj: y, objects3D: f, solids: c }) {
  ts.DEFAULT_UP = new m(0, 0, 1);
  const k = document.createElement("div"), g = new Jo(), x = new Qo(45, 1, 0.1, 2 * 1e6), w = new Oo(-10, 10, 10, -10, -1e3, 2e6);
  let M = x;
  const P = new jo({ antialias: true });
  P.localClippingEnabled = true;
  const v = new Mo(x, P.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: Ln.ROTATE, TWO: Ln.DOLLY_PAN }, P.domElement.addEventListener("wheel", (T) => {
    if (!T.ctrlKey && Math.abs(T.deltaX) > Math.abs(T.deltaY) * 1.5) {
      T.preventDefault();
      const O = v.target, oe = new m().subVectors(x.position, O), ce = new m();
      ce.crossVectors(x.up, oe).normalize();
      const Ge = oe.length() * 1e-3 * v.panSpeed;
      O.addScaledVector(ce, T.deltaX * Ge), x.position.addScaledVector(ce, T.deltaX * Ge), v.update();
    }
  }, { passive: false });
  const W = new Jn(new m(-1, 0, 0), 0), ee = new Jn(new m(0, -1, 0), 0), he = new Jn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ie() {
    const T = window.__hekatanClip, O = [];
    T.enableX && (W.normal.set(T.invertX ? 1 : -1, 0, 0), W.constant = T.invertX ? -T.posX : T.posX, O.push(W)), T.enableY && (ee.normal.set(0, T.invertY ? 1 : -1, 0), ee.constant = T.invertY ? -T.posY : T.posY, O.push(ee)), T.enableZ && (he.normal.set(0, 0, T.invertZ ? 1 : -1), he.constant = T.invertZ ? -T.posZ : T.posZ, O.push(he)), P.clippingPlanes = O, g.traverse((ce) => {
      const Fe = ce;
      if (Fe.material) {
        const Ge = Array.isArray(Fe.material) ? Fe.material : [Fe.material];
        for (const Ke of Ge) Ke.clippingPlanes = O, Ke.needsUpdate = true;
      }
    });
    const oe = window.__hekatanPanes ?? [];
    for (const ce of oe) try {
      ce && typeof ce.refresh == "function" && ce.refresh();
    } catch {
    }
    P.render(g, M);
  }
  ie(), window.__hekatanClipApply = ie;
  const _ = ss(i), H = I.derive(() => _.displayScale.val === 0 ? 1 : _.displayScale.val > 0 ? _.displayScale.val : -1 / _.displayScale.val), me = Ds(e, _), te = () => {
    const T = [];
    return _.gridXY.rawVal && T.push("xy"), _.gridXZ.rawVal && T.push("xz"), _.gridYZ.rawVal && T.push("yz"), T;
  }, K = () => {
    const T = _.gridStep.rawVal, O = Math.max(T, _.gridMajor.rawVal);
    return { planes: te(), majorStep: O, minorStep: T };
  };
  let pe = Qn(_.gridSize.rawVal, K());
  pe.visible = _.gridVisible.rawVal, window.__hekatanSnap2D = _.cursorSnap.rawVal;
  const q = () => {
    const T = Math.max(0, Math.min(1, _.gridOpacity.rawVal));
    pe.traverse((O) => {
      const oe = O.material;
      if (!oe || !("opacity" in oe)) return;
      const ce = O.name ?? "";
      let Fe = 0.35;
      ce.includes("border") ? Fe = 1 : ce.includes("major") && (Fe = 0.75), oe.opacity = T * Fe;
    });
  };
  q(), k.appendChild(os(_, e, c)), k.setAttribute("id", "viewer"), k.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const X = dn();
  P.setClearColor(X.background, 1);
  const $ = _.gridSize.rawVal, E = $ * 0.5 + $ * 0.5 / Math.tan(45 * 0.5);
  x.position.set(0, 0, E), x.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, k.__settings = _, v.zoomSpeed = 1;
  let F = 100, V = 0;
  P.domElement.addEventListener("wheel", (T) => {
    F = T.deltaY, V = T.deltaMode;
  }, { passive: true, capture: true }), v._getZoomScale = function() {
    const T = Math.abs(F);
    if (T >= 80 && V === 0) return Math.pow(0.9, this.zoomSpeed);
    if (V === 1) return Math.pow(0.88, this.zoomSpeed);
    const O = Math.max(0.05, Math.min(T / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * O);
  }, v.update();
  let C = _o(_.gridSize.rawVal, _.flipAxes.rawVal);
  g.add(pe, C), I.derive(() => {
    window.__hekatanGridPlaneXY = _.gridXY.val, window.__hekatanGridPlaneXZ = _.gridXZ.val, window.__hekatanGridPlaneYZ = _.gridYZ.val;
  });
  let N = true;
  I.derive(() => {
    const T = _.gridVisible.val;
    if (N) {
      N = false;
      return;
    }
    pe.visible = T, J();
  });
  let j = true;
  I.derive(() => {
    if (_.gridOpacity.val, j) {
      j = false;
      return;
    }
    q(), J();
  }), I.derive(() => {
    const T = _.cursorSnap.val;
    window.__hekatanSnap2D = T;
  });
  let D = true;
  I.derive(() => {
    var _a;
    const T = _.gridSize.val, O = _.flipAxes.val;
    if (_.gridXY.val, _.gridXZ.val, _.gridYZ.val, _.gridStep.val, _.gridMajor.val, D) {
      D = false;
      return;
    }
    g.remove(pe), (_a = pe.traverse) == null ? void 0 : _a.call(pe, (Fe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Fe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Fe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), pe = Qn(T, K()), pe.visible = _.gridVisible.rawVal, g.add(pe), q(), g.remove(C), C.traverse((Fe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Fe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Fe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), C = _o(T, O), g.add(C);
    const oe = T * 0.5 + T * 0.5 / Math.tan(45 * 0.5);
    x.position.distanceTo(v.target), Math.abs(x.position.x) < 0.1 && Math.abs(x.position.y) < 0.1 && x.position.z > 0 ? x.position.set(0, 0, oe) : x.position.set(0.5 * T, -oe, 0.5 * T), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, T * 0.01), v.maxDistance = Math.max(50, T * 50), v.update(), J();
  }), new ResizeObserver((T) => {
    var _a, _b;
    for (const O of T) {
      const oe = (_a = O.target) == null ? void 0 : _a.clientWidth, ce = (_b = O.target) == null ? void 0 : _b.clientHeight;
      if (oe === 0 || ce === 0) continue;
      const Ge = (A ? oe / 2 : oe) / ce;
      x.aspect = Ge, x.updateProjectionMatrix();
      const Ke = w.top;
      if (w.left = -Ke * Ge, w.right = Ke * Ge, w.updateProjectionMatrix(), Z && Z.isPerspectiveCamera) Z.aspect = Ge, Z.updateProjectionMatrix();
      else if (Z && Z.isOrthographicCamera) {
        const Ue = Z, mt = Ue.top;
        Ue.left = -mt * Ge, Ue.right = mt * Ge, Ue.updateProjectionMatrix();
      }
      P.setSize(oe, ce), J();
    }
  }).observe(k), v.addEventListener("change", J), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, _.displayScale.val, _.nodes.val, _.elements.val, (_g = _.edges) == null ? void 0 : _g.val, _.elemColumns.val, _.elemBeams.val, _.nodesIndexes.val, _.elementsIndexes.val, _.orientations.val, _.sections.val, _.secColumns.val, _.secBeams.val, _.secFloor.val, _.supports.val, _.loads.val, _.deformedShape.val, _.nodeResults.val, _.frameResults.val, _.shellResults.val, (_h = _.solidResults) == null ? void 0 : _h.val, setTimeout(J);
  });
  let A = false, Z = null, Q = null, ae = false;
  function J() {
    const T = k.clientWidth || 1, O = k.clientHeight || 1;
    if (!A || !Z) {
      P.setScissorTest(false), P.setViewport(0, 0, T, O), P.render(g, M);
      return;
    }
    const oe = T / 2;
    P.setScissorTest(true), P.setViewport(0, 0, oe, O), P.setScissor(0, 0, oe, O), P.render(g, M), P.setViewport(oe, 0, oe, O), P.setScissor(oe, 0, oe, O), P.render(g, Z), P.setScissorTest(false);
  }
  function Pe(T) {
    M = T, v.object = T, v.update(), J();
  }
  function be(T, O) {
    A = T, O && (Z = O);
    const oe = k.clientWidth || 1, ce = k.clientHeight || 1, Ge = (T ? oe / 2 : oe) / ce;
    x.isPerspectiveCamera && (x.aspect = Ge, x.updateProjectionMatrix());
    const Ke = w.top;
    if (w.left = -Ke * Ge, w.right = Ke * Ge, w.updateProjectionMatrix(), T && Z) {
      if (Q ? (Q.object = Z, Q.update()) : (Q = new Mo(Z, P.domElement), Q.enableDamping = true, Q.dampingFactor = 0.1, Q.screenSpacePanning = true, Q.zoomSpeed = 0.8, Q.panSpeed = 1.2, Q.rotateSpeed = 0.9, Q.touches = { ONE: Ln.ROTATE, TWO: Ln.DOLLY_PAN }, Q._getZoomScale = function() {
        const Ue = Math.abs(F);
        if (Ue >= 80 && V === 0) return Math.pow(0.9, this.zoomSpeed);
        if (V === 1) return Math.pow(0.88, this.zoomSpeed);
        const mt = Math.max(0.05, Math.min(Ue / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * mt);
      }, Q.target.copy(v.target), Q.addEventListener("change", J), Q.enabled = false), !ae) {
        const Ue = (mt) => {
          if (!A || !Q) return;
          const wt = P.domElement.getBoundingClientRect(), $t = mt.clientX - wt.left, qt = wt.width / 2, Rt = $t >= qt;
          v.enabled = !Rt, Q.enabled = Rt;
        };
        P.domElement.addEventListener("pointerdown", Ue, true), P.domElement.addEventListener("wheel", Ue, { capture: true, passive: true }), ae = true;
      }
    } else T || (v.enabled = true, Q && (Q.enabled = false));
    k.__splitMode = T, window.__hekatanSplitMode = T, window.__hekatanSplitCamera = T ? Z : null, J();
  }
  if (e) {
    g.add(as(_, me, H), ns(e, _, me), rs(_, me, H), cs(e, _, me, H), is(e, _, me, H), ls(e, _, me, H), us(e, _, me, H), hs(e, _, me, H), xs(e, _, me, H), ms(e, _, me, H));
    const T = Rs({ scene: g, rendererElm: P.domElement, getActiveCamera: () => M, derivedNodes: me, derivedDisplayScale: H, mesh: e, settings: _, render: J });
    g.add(T);
    const O = Ws(e, _), oe = Ss(e, _, me, O), ce = Po(O);
    g.add(oe), k.appendChild(ce);
    const Fe = Fs(e, _, me);
    g.add(Fe);
    const Ge = Fe.__colorMapValues, Ke = Po(Ge);
    Ke.id = "frame-legend", k.appendChild(Ke), I.derive(() => {
      var _a;
      const Ue = _.shellResults.val != "none", mt = (((_a = _.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", wt = Ue || mt, $t = _.frameResults.val.startsWith("contour:");
      ce.hidden = !wt, oe.visible = wt, Ke.hidden = !$t;
    });
  }
  if (c) {
    const T = new es(16777215, 0.5);
    g.add(T);
    const O = new bo(16777215, 0.5);
    O.position.set(30, 25, -10), O.shadow.mapSize.width = 1024, O.shadow.mapSize.height = 1024, g.add(O);
    const oe = 10;
    O.shadow.camera.left = -oe, O.shadow.camera.right = oe, O.shadow.camera.top = oe, O.shadow.camera.bottom = -oe, O.shadow.camera.far = 1e3;
    const ce = new bo(16777215, 0.5);
    ce.color.setHSL(11, 43, 96), ce.position.set(-10, 0, 30), g.add(ce), I.derive(() => {
      (c == null ? void 0 : c.val.length) && (g.remove(...c.oldVal), g.add(...c.rawVal), J());
    }), I.derive(() => {
      c.rawVal.forEach((Fe) => Fe.visible = _.solids.val), J();
    });
  }
  if (f) {
    const T = [], O = (ce) => {
      var _a, _b;
      return ((_a = ce == null ? void 0 : ce.userData) == null ? void 0 : _a.isCota) ? _.showCotas.val : ((_b = ce == null ? void 0 : ce.userData) == null ? void 0 : _b.isDistLoad) ? _.loads.val : _.custom3D.val;
    }, oe = () => {
      for (const ce of T) ce.visible = O(ce);
      J();
    };
    I.derive(() => {
      const ce = f.val;
      T.length && (g.remove(...T), T.length = 0), ce.length && (g.add(...ce), T.push(...ce), oe()), J();
    }), I.derive(() => {
      _.custom3D.val, oe();
    }), I.derive(() => {
      _.showCotas.val, oe();
    }), I.derive(() => {
      _.loads.val, oe();
    });
  }
  y && gs({ drawingObj: y, gridObj: pe, scene: g, getActiveCamera: () => M, controls: v, gridSize: $, derivedDisplayScale: H, rendererElm: P.domElement, viewerRender: J }), Fo((T, O) => {
    var _a;
    P.setClearColor(O.background, 1), g.remove(pe), (_a = pe.traverse) == null ? void 0 : _a.call(pe, (oe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = oe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = oe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), pe = Qn(_.gridSize.rawVal, { planes: te() }), g.add(pe), k.style.setProperty("--awatif-legend-color", O.legendMarker), J();
  });
  const Ce = { scene: g, perspCamera: x, orthoCamera: w, get camera() {
    return M;
  }, controls: v, renderer: P, rendererElm: P.domElement, render: J, setActiveCamera: Pe, setSplitMode: be, get splitMode() {
    return A;
  }, get splitCamera() {
    return Z;
  }, settings: _ };
  k.__ctx = Ce;
  const Se = document.createElement("div");
  Se.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Ne = (T, O, oe) => {
    const ce = document.createElement("button");
    return ce.textContent = T, ce.title = O, ce.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), ce.onmouseenter = () => {
      ce.style.background = "rgba(70,70,70,0.9)";
    }, ce.onmouseleave = () => {
      ce.style.background = "rgba(40,40,40,0.85)";
    }, ce.onclick = (Fe) => {
      Fe.preventDefault(), oe();
    }, ce;
  }, Mt = (T, O) => {
    const oe = v.target, ce = new m().subVectors(M.position, oe), Fe = ce.length(), Ge = new m(), Ke = new m();
    Ge.crossVectors(M.up, ce).normalize(), Ke.copy(M.up).normalize();
    const Ue = Fe * 0.05;
    oe.addScaledVector(Ge, -T * Ue), oe.addScaledVector(Ke, O * Ue), M.position.addScaledVector(Ge, -T * Ue), M.position.addScaledVector(Ke, O * Ue), v.update(), J();
  }, St = (T) => {
    const O = new m().subVectors(M.position, v.target);
    O.multiplyScalar(T), M.position.copy(v.target).add(O), v.update(), J();
  }, ct = () => {
    const T = document.createElement("div");
    return T.style.cssText = "width:32px;height:32px;", T;
  };
  return Se.append(ct()), Se.append(Ne("\u2191", "Pan arriba", () => Mt(0, 1))), Se.append(Ne("\u2295", "Zoom in", () => St(0.85))), Se.append(Ne("\u2190", "Pan izquierda", () => Mt(-1, 0))), Se.append(Ne("\u2302", "Reset vista", () => {
    v.reset(), J();
  })), Se.append(Ne("\u2192", "Pan derecha", () => Mt(1, 0))), Se.append(Ne("\u2296", "Zoom out", () => St(1.18))), Se.append(Ne("\u2193", "Pan abajo", () => Mt(0, -1))), Se.append(ct()), getComputedStyle(k).position === "static" && (k.style.position = "relative"), k.appendChild(Se), k;
}
function Ds(e, i) {
  return I.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], f = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!f || y.length === 0) return y;
    const c = i.deformScale.val, k = i.deformScale.val * i.deformScaleZ.val, g = Number.isFinite(c) ? c : 1, x = Number.isFinite(k) ? k : 1;
    return y.map((w, M) => {
      var _a2;
      const P = ((_a2 = f.get(M)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(P[0]) ? P[0] : 0, W = Number.isFinite(P[1]) ? P[1] : 0, ee = Number.isFinite(P[2]) ? P[2] : 0;
      return [w[0] + v * g, w[1] + W * g, w[2] + ee * x];
    });
  });
}
const so = I.state(null), to = I.state(""), Ns = I.state("kN"), Zs = I.state("mm"), Us = I.state("kN/m\xB2"), Ks = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Co = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Hs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Ws(e, i) {
  const y = I.state([]);
  let f;
  return ((c) => {
    c.bendingXX = "bendingXX", c.bendingYY = "bendingYY", c.bendingXY = "bendingXY", c.membraneXX = "membraneXX", c.membraneYY = "membraneYY", c.membraneXY = "membraneXY", c.tranverseShearX = "tranverseShearX", c.tranverseShearY = "tranverseShearY", c.vonMises = "vonMises", c.membranePrincipalMax = "membranePrincipalMax", c.membranePrincipalMin = "membranePrincipalMin", c.bendingPrincipalMax = "bendingPrincipalMax", c.bendingPrincipalMin = "bendingPrincipalMin", c.transverseShearMax = "transverseShearMax", c.pressure = "pressure", c.displacementX = "displacementX", c.displacementY = "displacementY", c.displacementZ = "displacementZ";
  })(f || (f = {})), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const c = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), te = (Mt, St) => {
      Mt == null ? void 0 : Mt.forEach((ct, T) => {
        const O = e.elements.val[T];
        if (O) for (let oe = 0; oe < O.length; oe++) St.set(O[oe], [ct[oe] ?? ct[0]]);
      });
    };
    te((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, c), te((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, k), te((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, g), te((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, x), te((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, w), te((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, M), te((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, P), te((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, v), te((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, W), te((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.membranePrincipalMax, ee), te((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, he), te((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, ie), te((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, _), te((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, H), te((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, me);
    const K = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, pe = (_G = i.solidResults) == null ? void 0 : _G.val, X = pe && pe !== "none" ? pe : i.shellResults.val, $ = K == null ? void 0 : K[X], E = { bendingXX: [c, 0], bendingYY: [k, 0], bendingXY: [g, 0], membraneXX: [x, 0], membraneYY: [w, 0], membraneXY: [M, 0], tranverseShearX: [P, 0], tranverseShearY: [v, 0], vonMises: [W, 0], membranePrincipalMax: [ee, 0], membranePrincipalMin: [he, 0], bendingPrincipalMax: [ie, 0], bendingPrincipalMin: [_, 0], transverseShearMax: [H, 0], pressure: [me, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, F = i.shellResults.val, V = Ns.val, C = Zs.val, N = F === "displacementX" || F === "displacementY" || F === "displacementZ", j = F === "bendingXX" || F === "bendingYY" || F === "bendingXY" || F === "bendingPrincipalMax" || F === "bendingPrincipalMin", D = F === "membraneXX" || F === "membraneYY" || F === "membraneXY" || F === "membranePrincipalMax" || F === "membranePrincipalMin", xe = F === "vonMises" || F === "pressure", A = F === "tranverseShearX" || F === "tranverseShearY" || F === "transverseShearMax", Z = (_N = i.solidResults) == null ? void 0 : _N.val, Q = Z === "vonMises" || Z === "sigmaXX" || Z === "sigmaYY" || Z === "sigmaZZ" || Z === "tauXY" || Z === "tauYZ" || Z === "tauXZ", ae = Z === "ux" || Z === "uy" || Z === "uz", J = Us.val, Pe = Q ? Hs[J] : ae || N ? Co[C] : j || D || xe || A ? 1 / Ks[V] : 1, be = Q ? J : ae || N ? C : j ? `${V}\xB7m/m` : D ? `${V}/m\xB2` : xe ? `${V}/m\xB2` : A ? `${V}/m` : "";
    to.val = be, so.val = Array.isArray($) && $.length === 2 ? [$[0] * Pe, $[1] * Pe] : null;
    const Se = Z && Z !== "none" ? [W, 0] : E[F], Ne = [];
    e.nodes.val.forEach((Mt, St) => {
      const ct = Se;
      if (!ct || !ct[0] || typeof ct[0].has != "function") return;
      if (!ct[0].has(St)) {
        Ne.push(Number.NaN);
        return;
      }
      const T = ct[0].get(St), O = T ? T[ct[1]] ?? 0 : 0;
      Ne.push(O * Pe);
    }), y.val = Ne;
  }), y;
}
export {
  Zs as a,
  Us as b,
  Ns as c,
  _s as d,
  Po as e,
  Qs as g
};
