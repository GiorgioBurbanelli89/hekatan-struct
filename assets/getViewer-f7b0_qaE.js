import { v as I, p as cn, a6 as Xn, B as he, a7 as Yn, F as Lt, a3 as Eo, J as st, W as Jt, L as ft, h as Ot, t as Vo, g as Uo, a8 as Ko, i as at, d as je, V as m, _ as rn, a9 as qn, G as To, D as Xt, a as Tt, w as dt, y as Dn, aa as Nn, r as Ho, m as Wo, H as an, a1 as Cn, E as yo, f as xn, Q as Jn, ab as Pn, C as xo, S as go, c as vo, ac as In, o as Go, ad as qo, ae as Jo, af as Qo, ag as Oo, b as bo, ah as Mo, e as _o, U as jo, K as es, O as ts, X as ns, T as $n, P as Qn, Y as os, Z as ko, N as ss } from "./theme-dnnHIQ7U.js";
import { T as Pt, O as So } from "./Text-BHPw1Jes.js";
import { P as Lo } from "./tweakpane-BXg6ZhiP.js";
import { e as as } from "./styles-CClJeH1b.js";
function is(e, i, y) {
  const h = document.createElement("div"), u = new Lo({ title: "Settings", expanded: true, container: h });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(u), h.setAttribute("id", "settings");
  const k = "hk_settingsPos";
  let v = null;
  try {
    const b = localStorage.getItem(k);
    b && (v = JSON.parse(b));
  } catch {
  }
  h.style.cssText = ["position:fixed", v ? `left:${v.left}px` : "left:8px", v ? `top:${v.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const x = () => {
    const b = h.querySelector(".tp-rotv_b");
    if (!b) {
      setTimeout(x, 200);
      return;
    }
    b.style.cursor = "move", b.style.userSelect = "none";
    let H = false, se = 0, ae = 0, pe = 0, C = 0;
    b.addEventListener("mousedown", (G) => {
      H = true, se = G.clientX, ae = G.clientY;
      const me = h.getBoundingClientRect();
      pe = me.left, C = me.top, h.style.left = `${pe}px`, h.style.top = `${C}px`;
    }), window.addEventListener("mousemove", (G) => {
      if (!H) return;
      const me = G.clientX - se, ye = G.clientY - ae, _e = Math.max(0, Math.min(window.innerWidth - 40, pe + me)), K = Math.max(0, Math.min(window.innerHeight - 40, C + ye));
      h.style.left = `${_e}px`, h.style.top = `${K}px`;
    }), window.addEventListener("mouseup", () => {
      if (H) {
        H = false;
        try {
          localStorage.setItem(k, JSON.stringify({ left: parseFloat(h.style.left), top: parseFloat(h.style.top) }));
        } catch {
        }
      }
    });
  };
  if (x(), i == null ? void 0 : i.nodes) {
    u.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const b = u.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    b.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), b.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), b.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), b.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), b.addBinding(e.gridVisible, "val", { label: "Mostrar" }), b.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), b.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), b.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), b.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), u.addBinding(e.nodes, "val", { label: "Nodes" }), u.addBinding(e.elements, "val", { label: "Elements" }), u.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), u.addBinding(e.faces, "val", { label: "  Caras (fill)" }), u.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), u.addBinding(e.elemColumns, "val", { label: "    Columnas" }), u.addBinding(e.elemBeams, "val", { label: "    Vigas" }), u.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), u.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), u.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), u.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), u.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), u.addBinding(e.orientations, "val", { label: "Orientations" }), u.addBinding(e.sections, "val", { label: "Sections" }), u.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), u.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), u.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), u.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((i == null ? void 0 : i.nodeInputs) || (i == null ? void 0 : i.elementInputs)) {
    const b = u.addFolder({ title: "Analysis Inputs" });
    b.addBinding(e.supports, "val", { label: "Supports" }), b.addBinding(e.loads, "val", { label: "Loads" }), b.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), b.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((i == null ? void 0 : i.deformOutputs) || (i == null ? void 0 : i.analyzeOutputs)) {
    const b = u.addFolder({ title: "Analysis Outputs" });
    b.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), b.addBinding(e.frameResults, "val", { options: { none: "none", "P (normals)": "normals", "V2 (shearY)": "shearsY", "V3 (shearZ)": "shearsZ", "T (torsion)": "torsions", "M2 (bendingY)": "bendingsY", "M3 (bendingZ)": "bendingsZ", "contour P": "contour:normals", "contour V2": "contour:shearsY", "contour V3": "contour:shearsZ", "contour T": "contour:torsions", "contour M2": "contour:bendingsY", "contour M3": "contour:bendingsZ" }, label: "Frame results" }), b.addBinding(e.shellResults, "val", { options: { none: "none", "F11 (membraneXX)": "membraneXX", "F22 (membraneYY)": "membraneYY", "F12 (membraneXY)": "membraneXY", "FMax (principal)": "membranePrincipalMax", "FMin (principal)": "membranePrincipalMin", "M11 (bendingXX)": "bendingXX", "M22 (bendingYY)": "bendingYY", "M12 (bendingXY)": "bendingXY", "MMax (principal)": "bendingPrincipalMax", "MMin (principal)": "bendingPrincipalMin", "V13 (shearX)": "tranverseShearX", "V23 (shearY)": "tranverseShearY", "VMax (magnitud)": "transverseShearMax", "Von Mises": "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), b.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), b.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), b.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), b.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  y && u.addBinding(e.solids, "val", { label: "Solids" });
  const w = u.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), _ = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), P = () => {
    const b = window.__hekatanClipApply;
    typeof b == "function" && b();
  };
  return w.addBinding(_, "enableX", { label: "Cortar X" }).on("change", P), w.addBinding(_, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", P), w.addBinding(_, "invertX", { label: "  invertir X" }).on("change", P), w.addBinding(_, "enableY", { label: "Cortar Y" }).on("change", P), w.addBinding(_, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", P), w.addBinding(_, "invertY", { label: "  invertir Y" }).on("change", P), w.addBinding(_, "enableZ", { label: "Cortar Z" }).on("change", P), w.addBinding(_, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", P), w.addBinding(_, "invertZ", { label: "  invertir Z" }).on("change", P), h;
}
function ls(e) {
  return { gridSize: I.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: I.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: I.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: I.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: I.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: I.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: I.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: I.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: I.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: I.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: I.state((e == null ? void 0 : e.nodes) ?? true), elements: I.state((e == null ? void 0 : e.elements) ?? true), edges: I.state((e == null ? void 0 : e.edges) ?? true), faces: I.state((e == null ? void 0 : e.faces) ?? true), elemColumns: I.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: I.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: I.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: I.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: I.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: I.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: I.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: I.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: I.state((e == null ? void 0 : e.orientations) ?? false), sections: I.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: I.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: I.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: I.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: I.state((e == null ? void 0 : e.secFloor) ?? -1), supports: I.state((e == null ? void 0 : e.supports) ?? true), loads: I.state((e == null ? void 0 : e.loads) ?? false), deformedShape: I.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: I.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: I.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: I.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: I.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: I.state((e == null ? void 0 : e.flipAxes) ?? false), solids: I.state((e == null ? void 0 : e.solids) ?? true), custom3D: I.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: I.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: I.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: I.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function rs(e, i, y) {
  const h = cn(), u = new Xn(new he(), new Yn({ color: h.nodePoint }));
  return Eo((k, v) => {
    u.material.color.setHex(v.nodePoint);
  }), u.frustumCulled = false, I.derive(() => {
    e.nodes.val && u.geometry.setAttribute("position", new Lt(i.val.flat(), 3));
  }), I.derive(() => {
    if (y.val, i.val, !e.nodes.rawVal) return;
    const k = i.rawVal ?? [];
    let v = e.gridSize.val * 0.5;
    if (k.length >= 2) {
      const w = [1 / 0, 1 / 0, 1 / 0], _ = [-1 / 0, -1 / 0, -1 / 0];
      for (const P of k) for (let b = 0; b < 3; b++) w[b] = Math.min(w[b], P[b]), _[b] = Math.max(_[b], P[b]);
      v = Math.max(_[0] - w[0], _[1] - w[1], _[2] - w[2], 0.1);
    }
    const x = 0.03 * v;
    u.material.size = x * y.rawVal;
  }), I.derive(() => {
    u.visible = e.nodes.val;
  }), u;
}
function On(e, i) {
  const y = cn(), h = new st();
  h.name = "hekatan-grid";
  const u = (i == null ? void 0 : i.planes) ?? ["xy"];
  let k = (i == null ? void 0 : i.majorStep) ?? 1, v = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (k <= 0 && (k = 1), v <= 0 && (v = 0.1); e / v > 500; ) v *= 2;
  for (; e / k > 100; ) k *= 2;
  const x = e / 2;
  k = Math.max(v, Math.round(k / v) * v);
  const _ = new Jt(y.grid), P = new Jt(y.grid).multiplyScalar(0.45), b = (se, ae, pe, C) => {
    const G = [], me = se === "xy" ? (X, T) => [X, T, 0] : se === "xz" ? (X, T) => [X, 0, T] : (X, T) => [0, X, T], ye = Math.floor(x / ae);
    for (let X = -ye; X <= ye; X++) {
      const T = X * ae, A = me(T, -x), V = me(T, x);
      G.push(...A, ...V);
    }
    for (let X = -ye; X <= ye; X++) {
      const T = X * ae, A = me(-x, T), V = me(x, T);
      G.push(...A, ...V);
    }
    const _e = new he();
    _e.setAttribute("position", new Lt(G, 3));
    const K = new ft({ color: pe, transparent: true, opacity: C, depthWrite: false }), D = new Ot(_e, K);
    return D.name = `grid-${se}-${ae === v ? "minor" : "major"}`, D;
  }, H = (se, ae, pe) => {
    const C = se === "xy" ? (D, X) => [D, X, 0] : se === "xz" ? (D, X) => [D, 0, X] : (D, X) => [0, D, X], G = [[-x, -x], [x, -x], [x, x], [-x, x]], me = [];
    for (const [D, X] of G) me.push(...C(D, X));
    const ye = new he();
    ye.setAttribute("position", new Lt(me, 3));
    const _e = new ft({ color: ae, transparent: true, opacity: pe, depthWrite: false }), K = new Vo(ye, _e);
    return K.name = `grid-${se}-border`, K.renderOrder = 1, K;
  };
  for (const se of u) h.add(b(se, v, P, 0.12)), h.add(b(se, k, _, 0.4)), h.add(H(se, _, 0.55));
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: k, minorStep: v, gridSize: e, planes: [...u] }, h;
}
function cs(e, i, y, h) {
  const u = new st(), k = new Uo(0.5, 0.5, 0.5), v = new Ko(0.45, 0.7, 4);
  v.rotateX(Math.PI / 2), v.translate(0, 0, -0.35);
  const x = new at({ color: 10166822 }), w = new at({ color: 2792847 }), _ = new at({ color: 3835647 }), P = () => {
    const se = y.rawVal ?? [];
    if (se.length < 2) return i.gridSize.val * 0.5;
    let ae = [1 / 0, 1 / 0, 1 / 0], pe = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of se) for (let G = 0; G < 3; G++) C[G] < ae[G] && (ae[G] = C[G]), C[G] > pe[G] && (pe[G] = C[G]);
    return Math.max(pe[0] - ae[0], pe[1] - ae[1], pe[2] - ae[2], 0.1);
  }, b = () => 0.08 * P(), H = () => h.rawVal;
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    u.clear();
    const se = b();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((ae, pe) => {
      const C = y.val[pe];
      if (!C) return;
      const G = ae ?? [], me = (G[0] ? 1 : 0) + (G[1] ? 1 : 0) + (G[2] ? 1 : 0), ye = (G[3] ? 1 : 0) + (G[4] ? 1 : 0) + (G[5] ? 1 : 0);
      let _e;
      me >= 3 && ye >= 3 ? _e = new je(k, x) : me >= 3 && ye === 0 ? _e = new je(v, w) : _e = new je(v, _), _e.position.set(C[0], C[1], C[2]);
      const K = se * H();
      _e.scale.set(K, K, K), u.add(_e);
    });
  }), I.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const ae = b() * H();
    u.children.forEach((pe) => pe.scale.set(ae, ae, ae));
  }), I.derive(() => {
    u.visible = i.supports.val;
  }), u;
}
function ds(e, i, y, h) {
  const u = new st();
  u.name = "loadsGroup";
  function k(v) {
    if (v.length < 2) return 0.12 * i.gridSize.rawVal;
    const x = [1 / 0, 1 / 0, 1 / 0], w = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of v) for (let b = 0; b < 3; b++) x[b] = Math.min(x[b], P[b]), w[b] = Math.max(w[b], P[b]);
    return 0.08 * Math.max(w[0] - x[0], w[1] - x[1], w[2] - x[2], 0.1);
  }
  return I.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    u.children.forEach((w) => w.dispose()), u.clear();
    const v = y.val, x = k(v);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((w, _) => {
      const P = v[_];
      if (!P) return;
      const b = new m(...w.slice(0, 3));
      if (b.lengthSq() < 1e-30) return;
      b.normalize();
      const H = new rn(b, new m(...P), 1, 15637248, 0.3, 0.3), se = x * h.rawVal;
      H.scale.set(se, se, se), u.add(H);
    });
  }), I.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const x = k(y.rawVal) * h.rawVal;
    u.children.forEach((w) => w.scale.set(x, x, x));
  }), I.derive(() => {
    u.visible = i.loads.val;
  }), u;
}
function ps(e, i, y) {
  const h = new st();
  return I.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((k) => k.dispose()), h.clear();
    const u = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((k, v) => {
      const x = new Pt(`${v}`);
      x.position.set(...k), x.updateScale(u * y.rawVal), h.add(x);
    });
  }), I.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const u = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((k) => k.updateScale(u * y.rawVal));
  }), I.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function us(e, i, y, h) {
  const u = new st();
  return I.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    u.children.forEach((v) => v.dispose()), u.clear();
    const k = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((v, x) => {
      const w = new Pt(`${x}`, void 0, "#001219");
      w.position.set(...fs(v.map((_) => y.rawVal[_]))), w.updateScale(k * h.rawVal), u.add(w);
    });
  }), I.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const k = 0.05 * i.gridSize.val * 0.6;
    u.children.forEach((v) => v.updateScale(k * h.rawVal));
  }), I.derive(() => {
    u.visible = i.elementsIndexes.val;
  }), u;
}
function fs(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function Co(e, i) {
  const y = new st(), h = 0.05 * e * 1, u = cn(), k = new Pt("X", "red", "transparent"), v = new Pt(i ? "Z" : "Y", "green", "transparent"), x = new Pt(i ? "Y" : "Z", "blue", "transparent"), w = new rn(new m(1, 0, 0), new m(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), _ = new rn(new m(0, 1, 0), new m(0, 0, 0), 1, u.axisArrow, 0.2, 0.2), P = new rn(new m(0, 0, 1), new m(0, 0, 0), 1, u.axisArrow, 0.2, 0.2);
  return k.position.set(1.3 * h, 0, 0), v.position.set(0, 1.3 * h, 0), x.position.set(0, 0, 1.3 * h), k.updateScale(0.4 * h), v.updateScale(0.4 * h), x.updateScale(0.4 * h), w.scale.set(h, h, h), _.scale.set(h, h, h), P.scale.set(h, h, h), y.add(w, _, P, k, v, x), y;
}
function oo(e, i) {
  const y = new m(...e), u = new m(...i).clone().sub(y), k = u.length(), v = u.dot(new m(1, 0, 0)) / k, x = u.dot(new m(0, 1, 0)) / k, w = u.dot(new m(0, 0, 1)) / k, _ = Math.sqrt(v ** 2 + x ** 2);
  let P = new qn().fromArray([[v, x, w], [-x / _, v / _, 0], [-v * w / _, -x * w / _, _]].flat());
  return w === 1 && (P = new qn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), w === -1 && (P = new qn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new To().setFromMatrix3(P);
}
function to(e, i) {
  return e == null ? void 0 : e.map((y, h) => (9 * y + i[h]) / 10);
}
function Fn(e) {
  const i = e.reduce((h, u) => [h[0] + u[0], h[1] + u[1], h[2] + u[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function hs(e, i, y) {
  const h = Fn([i, y]), u = Fn([e, y]), k = Fn([e, i]), v = new m(...h).sub(new m(...u)).normalize(), x = new m(...y).sub(new m(...k)).normalize(), w = v.clone().cross(x).normalize(), _ = w.clone().cross(v).normalize();
  return new To().makeBasis(v, _, w);
}
function ms(e, i, y, h) {
  const u = new st(), k = new he(), v = new ft({ vertexColors: true }), x = [0, 0, 0], w = [1, 0, 0], _ = [0, 1, 0], P = [0, 0, 1];
  k.setAttribute("position", new Lt([...x, ...w, ...x, ..._, ...x, ...P], 3));
  const b = [255, 0, 0], H = [0, 255, 0], se = [0, 0, 255];
  return k.setAttribute("color", new Lt([...b, ...b, ...H, ...H, ...se, ...se], 3)), I.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (u.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((ae) => {
      const pe = new Ot(k, v), C = y.rawVal[ae[0]], G = y.rawVal[ae[1]];
      if (ae.length === 2 && (pe.position.set(...to(C, G)), pe.rotation.setFromRotationMatrix(oo(C, G))), ae.length === 3) {
        const _e = y.rawVal[ae[2]];
        pe.position.set(...Fn([C, G, _e])), pe.rotation.setFromRotationMatrix(hs(C, G, _e));
      }
      const ye = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      pe.scale.set(ye, ye, ye), u.add(pe);
    }));
  }), I.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const pe = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    u.children.forEach((C) => C.scale.set(pe, pe, pe));
  }), I.derive(() => {
    u.visible = i.orientations.val;
  }), u;
}
function ws(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const i = (e.b * 100).toFixed(0), y = (e.h * 100).toFixed(0);
    return `${i}x${y}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function ys(e, i, y, h) {
  const u = new st(), k = new st();
  u.add(k);
  function v(D, X) {
    const T = D / 2, A = X / 2, V = new Float32Array([0, -T, -A, 0, T, -A, 0, T, A, 0, -T, -A, 0, T, A, 0, -T, A]), $ = new he();
    $.setAttribute("position", new dt(V, 3));
    const z = new Float32Array([0, -T, -A, 0, T, -A, 0, T, A, 0, -T, A, 0, -T, -A]), B = new he();
    return B.setAttribute("position", new dt(z, 3)), { fill: $, outline: B };
  }
  function x(D, X = 24) {
    const T = D / 2, A = new Float32Array(X * 9);
    for (let B = 0; B < X; B++) {
      const te = B / X * Math.PI * 2, J = (B + 1) / X * Math.PI * 2;
      A[B * 9] = 0, A[B * 9 + 1] = 0, A[B * 9 + 2] = 0, A[B * 9 + 3] = 0, A[B * 9 + 4] = T * Math.cos(te), A[B * 9 + 5] = T * Math.sin(te), A[B * 9 + 6] = 0, A[B * 9 + 7] = T * Math.cos(J), A[B * 9 + 8] = T * Math.sin(J);
    }
    const V = new he();
    V.setAttribute("position", new dt(A, 3));
    const $ = new Float32Array((X + 1) * 3);
    for (let B = 0; B <= X; B++) {
      const te = B / X * Math.PI * 2;
      $[B * 3] = 0, $[B * 3 + 1] = T * Math.cos(te), $[B * 3 + 2] = T * Math.sin(te);
    }
    const z = new he();
    return z.setAttribute("position", new dt($, 3)), { fill: V, outline: z };
  }
  function w(D, X, T, A) {
    const V = T ?? X * 0.08, $ = A ?? D * 0.07, z = D / 2, B = X / 2, te = B - V, J = $ / 2, W = [];
    function F(re, Fe, de, ce) {
      W.push(0, re, Fe, 0, de, Fe, 0, de, ce, 0, re, Fe, 0, de, ce, 0, re, ce);
    }
    F(-z, -B, z, -te), F(-J, -te, J, te), F(-z, te, z, B);
    const ne = new he();
    ne.setAttribute("position", new dt(new Float32Array(W), 3));
    const ee = new Float32Array([0, -z, -B, 0, z, -B, 0, z, -te, 0, J, -te, 0, J, te, 0, z, te, 0, z, B, 0, -z, B, 0, -z, te, 0, -J, te, 0, -J, -te, 0, -z, -te, 0, -z, -B]), le = new he();
    return le.setAttribute("position", new dt(ee, 3)), { fill: ne, outline: le };
  }
  function _(D, X, T) {
    const A = D / 2, V = X / 2, $ = A - T, z = V - T, B = [];
    function te(ne, ee, le, re) {
      B.push(0, ne, ee, 0, le, ee, 0, le, re, 0, ne, ee, 0, le, re, 0, ne, re);
    }
    te(-A, -V, A, -z), te(-A, z, A, V), te(-A, -z, -$, z), te($, -z, A, z);
    const J = new he();
    J.setAttribute("position", new dt(new Float32Array(B), 3));
    const W = new Float32Array([0, -A, -V, 0, A, -V, 0, A, -V, 0, A, V, 0, A, V, 0, -A, V, 0, -A, V, 0, -A, -V, 0, -$, -z, 0, $, -z, 0, $, -z, 0, $, z, 0, $, z, 0, -$, z, 0, -$, z, 0, -$, -z]), F = new he();
    return F.setAttribute("position", new dt(W, 3)), { fill: J, outline: F };
  }
  function P(D, X, T) {
    const A = D / 2, V = X / 2, $ = A - T, z = V - T, B = new he(), te = new Float32Array([0, -$, -z, 0, $, -z, 0, $, z, 0, -$, -z, 0, $, z, 0, -$, z]);
    B.setAttribute("position", new dt(te, 3));
    const J = [];
    function W(le, re, Fe, de) {
      J.push(0, le, re, 0, Fe, re, 0, Fe, de, 0, le, re, 0, Fe, de, 0, le, de);
    }
    W(-A, -V, A, -z), W(-A, z, A, V), W(-A, -z, -$, z), W($, -z, A, z);
    const F = new he();
    F.setAttribute("position", new dt(new Float32Array(J), 3));
    const ne = new Float32Array([0, -A, -V, 0, A, -V, 0, A, -V, 0, A, V, 0, A, V, 0, -A, V, 0, -A, V, 0, -A, -V, 0, -$, -z, 0, $, -z, 0, $, -z, 0, $, z, 0, $, z, 0, -$, z, 0, -$, z, 0, -$, -z]), ee = new he();
    return ee.setAttribute("position", new dt(ne, 3)), { concFill: B, steelFillGeom: F, outline: ee };
  }
  function b(D, X, T) {
    const A = [], V = [[0, -D / 2, -X / 2], [0, -D / 2 + T, -X / 2], [0, -D / 2 + T, X / 2 - T], [0, D / 2, X / 2 - T], [0, D / 2, X / 2], [0, -D / 2, X / 2]], $ = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const J of $) A.push(...V[J]);
    const z = new he();
    z.setAttribute("position", new dt(new Float32Array(A), 3));
    const B = [];
    for (let J = 0; J < V.length; J++) {
      const W = (J + 1) % V.length;
      B.push(...V[J], ...V[W]);
    }
    const te = new he();
    return te.setAttribute("position", new dt(new Float32Array(B), 3)), { fill: z, outline: te };
  }
  function H(D, X, T, A) {
    const V = A / 2, $ = [], z = [[0, -D - V, -X / 2], [0, -T - V, -X / 2], [0, -T - V, X / 2 - T], [0, -V, X / 2 - T], [0, -V, X / 2], [0, -D - V, X / 2]], B = [[0, V, -X / 2], [0, V + T, -X / 2], [0, V + T, X / 2 - T], [0, D + V, X / 2 - T], [0, D + V, X / 2], [0, V, X / 2]], te = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const ne of te) $.push(...z[ne]);
    for (const ne of te) $.push(...B[ne]);
    const J = new he();
    J.setAttribute("position", new dt(new Float32Array($), 3));
    const W = [];
    for (const ne of [z, B]) for (let ee = 0; ee < ne.length; ee++) {
      const le = (ee + 1) % ne.length;
      W.push(...ne[ee], ...ne[le]);
    }
    const F = new he();
    return F.setAttribute("position", new dt(new Float32Array(W), 3)), { fill: J, outline: F };
  }
  function se(D, X, T, A) {
    const V = X / 2, $ = D, z = [[0, -$, -V], [0, -$, -V + T], [0, -A, -V + T], [0, -A, V - T], [0, -$, V - T], [0, -$, V], [0, 0, V], [0, 0, -V]], B = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], te = [];
    for (const ne of B) te.push(...z[ne]);
    const J = new he();
    J.setAttribute("position", new dt(new Float32Array(te), 3));
    const W = [];
    for (let ne = 0; ne < z.length; ne++) {
      const ee = (ne + 1) % z.length;
      W.push(...z[ne], ...z[ee]);
    }
    const F = new he();
    return F.setAttribute("position", new dt(new Float32Array(W), 3)), { fill: J, outline: F };
  }
  function ae(D, X, T, A, V) {
    const $ = X / 2, z = V / 2, B = [], te = [[0, -D, -$], [0, -D, -$ + T], [0, -z - A, -$ + T], [0, -z - A, $ - T], [0, -D, $ - T], [0, -D, $], [0, -z, $], [0, -z, -$]], J = te.map((le) => [le[0], -le[1], le[2]]), W = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const le of W) B.push(...te[le]);
    for (const le of W) B.push(...J[le]);
    const F = new he();
    F.setAttribute("position", new dt(new Float32Array(B), 3));
    const ne = [];
    for (const le of [te, J]) for (let re = 0; re < le.length; re++) {
      const Fe = (re + 1) % le.length;
      ne.push(...le[re], ...le[Fe]);
    }
    const ee = new he();
    return ee.setAttribute("position", new dt(new Float32Array(ne), 3)), { fill: F, outline: ee };
  }
  function pe(D, X, T, A) {
    const V = D / 2, $ = X / 2, z = A / 2, B = [[0, -z, -$], [0, z, -$], [0, z, $ - T], [0, V, $ - T], [0, V, $], [0, -V, $], [0, -V, $ - T], [0, -z, $ - T]], te = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], J = [];
    for (const ee of te) J.push(...B[ee]);
    const W = new he();
    W.setAttribute("position", new dt(new Float32Array(J), 3));
    const F = [];
    for (let ee = 0; ee < B.length; ee++) {
      const le = (ee + 1) % B.length;
      F.push(...B[ee], ...B[le]);
    }
    const ne = new he();
    return ne.setAttribute("position", new dt(new Float32Array(F), 3)), { fill: W, outline: ne };
  }
  function C(D, X, T = 24) {
    const A = D / 2, V = A - X, $ = [];
    for (let J = 0; J < T; J++) {
      const W = J / T * Math.PI * 2, F = (J + 1) / T * Math.PI * 2, ne = Math.cos(W), ee = Math.sin(W), le = Math.cos(F), re = Math.sin(F);
      $.push(0, A * ne, A * ee, 0, A * le, A * re, 0, V * le, V * re), $.push(0, A * ne, A * ee, 0, V * le, V * re, 0, V * ne, V * ee);
    }
    const z = new he();
    z.setAttribute("position", new dt(new Float32Array($), 3));
    const B = [];
    for (let J = 0; J < T; J++) {
      const W = J / T * Math.PI * 2, F = (J + 1) / T * Math.PI * 2;
      B.push(0, A * Math.cos(W), A * Math.sin(W), 0, A * Math.cos(F), A * Math.sin(F)), B.push(0, V * Math.cos(W), V * Math.sin(W), 0, V * Math.cos(F), V * Math.sin(F));
    }
    const te = new he();
    return te.setAttribute("position", new dt(new Float32Array(B), 3)), { fill: z, outline: te };
  }
  const G = new at({ color: 52479, transparent: true, opacity: 0.35, side: Xt, depthWrite: false }), me = new ft({ color: 52479 }), ye = new at({ color: 16750848, transparent: true, opacity: 0.4, side: Xt, depthWrite: false }), _e = new ft({ color: 16750848 });
  function K(D, X) {
    const T = Math.abs(X[0] - D[0]), A = Math.abs(X[1] - D[1]), V = Math.abs(X[2] - D[2]);
    return V > T && V > A || A > T && A > V;
  }
  return I.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const D = i.secColumns.rawVal, X = i.secBeams.rawVal;
    if (!D && !X) {
      u.children.forEach((z) => {
        z instanceof Pt && z.dispose();
      }), u.clear();
      return;
    }
    u.children.forEach((z) => {
      z instanceof Pt && z.dispose();
    }), u.clear();
    const T = (_a = e.elements) == null ? void 0 : _a.val, A = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!T || !A) return;
    const V = A.sectionShapes, $ = i.secFloor.rawVal;
    T.forEach((z, B) => {
      if (z.length !== 2) return;
      const te = y.rawVal[z[0]], J = y.rawVal[z[1]];
      if (!te || !J) return;
      const W = K(te, J);
      if (W && !D || !W && !X) return;
      if ($ >= 0) {
        const re = Math.min(te[1], J[1]);
        Math.max(te[1], J[1]);
        const Fe = i.gridSize.rawVal || 3;
        if (Math.floor(re / Fe + 0.01) !== $) return;
      }
      const F = V == null ? void 0 : V.get(B);
      if (!F) return;
      const ne = [(te[0] + J[0]) / 2, (te[1] + J[1]) / 2, (te[2] + J[2]) / 2], ee = oo(te, J);
      if (F.type === "CFT") {
        const re = P(F.b, F.h, F.tw ?? F.b * 0.05), Fe = new je(re.concFill, G);
        Fe.position.set(...ne), Fe.rotation.setFromRotationMatrix(ee), u.add(Fe);
        const de = new je(re.steelFillGeom, ye);
        de.position.set(...ne), de.rotation.setFromRotationMatrix(ee), u.add(de);
        const ce = new Tt(re.outline, _e);
        ce.position.set(...ne), ce.rotation.setFromRotationMatrix(ee), u.add(ce);
      } else {
        let re, Fe, de;
        switch (F.type) {
          case "rect":
            re = v(F.b, F.h), Fe = G, de = me;
            break;
          case "circ":
            re = x(F.d), Fe = G, de = me;
            break;
          case "I":
            re = w(F.b, F.h, F.tf, F.tw), Fe = ye, de = _e;
            break;
          case "HSS":
            re = _(F.b, F.h, F.tw ?? F.b * 0.05), Fe = ye, de = _e;
            break;
          case "CFT":
            re = P(F.b, F.h, F.tw ?? F.b * 0.05), Fe = ye, de = _e;
            break;
          case "L":
            re = b(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3), Fe = ye, de = _e;
            break;
          case "2L":
            re = H(F.b ?? F.h, F.h, F.t ?? F.tw ?? 3e-3, F.dis ?? 0.01), Fe = ye, de = _e;
            break;
          case "C":
          case "coldC":
            re = se(F.b, F.h, F.tf ?? F.t ?? 3e-3, F.tw ?? F.t ?? 3e-3), Fe = ye, de = _e;
            break;
          case "2C":
            re = ae(F.b, F.h, F.tf ?? 5e-3, F.tw ?? 5e-3, F.dis ?? 0.01), Fe = ye, de = _e;
            break;
          case "T":
            re = pe(F.b, F.h, F.tf ?? 0.01, F.tw ?? 6e-3), Fe = ye, de = _e;
            break;
          case "pipe":
            re = C(F.d, F.tw ?? F.d * 0.05), Fe = ye, de = _e;
            break;
          default:
            return;
        }
        const ce = new je(re.fill, Fe);
        ce.position.set(...ne), ce.rotation.setFromRotationMatrix(ee), u.add(ce);
        const Xe = new Tt(re.outline, de);
        Xe.position.set(...ne), Xe.rotation.setFromRotationMatrix(ee), u.add(Xe);
      }
      const le = ws(F);
      if (le) {
        const Fe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(F.type) ? "#ff9900" : "#00ccff", de = new Pt(le, Fe, "transparent");
        de.position.set(ne[0], ne[1], ne[2]);
        const ce = 0.05 * i.gridSize.rawVal * 0.5;
        de.updateScale(ce * ((h == null ? void 0 : h.rawVal) ?? 1)), k.add(de);
      }
    });
  }), h && I.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const D = 0.05 * i.gridSize.val * 0.5;
    k.children.forEach((X) => {
      X instanceof Pt && X.updateScale(D * h.rawVal);
    });
  }), I.derive(() => {
    u.visible = i.sections.val;
  }), I.derive(() => {
    k.visible = i.sectionLabels.val;
  }), u;
}
class Rn extends st {
  constructor(i, y, h, u, k, v, x) {
    super();
    const w = new Dn().moveTo(0, 0).lineTo(0, v[1]).lineTo(h, v[1]).lineTo(h, 0).lineTo(0, 0), _ = w.getPoints(), P = new he().setFromPoints(_);
    this.lines = new Tt(P, new ft({ color: cn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new Nn(w), H = new at({ color: v[1] > 0 ? 24435 : 11411474, side: Xt });
    this.mesh = new je(b, H), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Pt(`${k[1].toFixed(2)}`), this.normalizedResult = v, this.textPosition = Fn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(u), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Po extends st {
  constructor(i, y, h, u, k, v, x) {
    super();
    const w = k[0] * h / (k[0] + k[1]), _ = k[0] * k[1] > 0;
    if (this.text = new Pt(`${k[0].toFixed(2)}`), this.text2 = new Pt(`${(k[1] * -1).toFixed(2)}`), this.normalizedResult = v, this.textPosition = to(i, y), this.text2Position = to(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(u), this.text2.rotation.setFromRotationMatrix(u), this.add(this.text, this.text2), _) {
      const P = new Dn().moveTo(0, 0).lineTo(0, v[0]).lineTo(w, 0).lineTo(0, 0), b = new Dn().moveTo(w, 0).lineTo(h, -v[1]).lineTo(h, 0).lineTo(w, 0), H = P.getPoints(), se = b.getPoints(), ae = new he().setFromPoints(H), pe = new he().setFromPoints(se), C = new ft({ color: cn().resultOutline });
      this.lines = new Tt(ae, C), this.lines2 = new Tt(pe, C), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), this.lines2.rotation.setFromRotationMatrix(u), x && this.lines.rotateX(Math.PI / 2), x && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const G = new Nn(P), me = new Nn(b), ye = new at({ color: v[0] > 0 ? 24435 : 11411474, side: Xt }), _e = new at({ color: -v[1] > 0 ? 24435 : 11411474, side: Xt });
      this.mesh = new je(G, ye), this.mesh2 = new je(me, _e), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), this.mesh2.rotation.setFromRotationMatrix(u), x && this.mesh.rotateX(Math.PI / 2), x && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Dn().moveTo(0, 0).lineTo(0, v[0]).lineTo(h, -v[1]).lineTo(h, 0).lineTo(0, 0), b = P.getPoints(), H = new he().setFromPoints(b);
      this.lines = new Tt(H, new ft({ color: cn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(u), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const se = new Nn(P), ae = new at({ color: v[0] > 0 ? 24435 : 11411474, side: Xt });
      this.mesh = new je(se, ae), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(u), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Io = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Io || {});
function xs(e, i, y, h) {
  const u = new st(), k = () => {
    const w = y.rawVal ?? [];
    if (w.length < 2) return i.gridSize.val * 0.5;
    let _ = [1 / 0, 1 / 0, 1 / 0], P = [-1 / 0, -1 / 0, -1 / 0];
    for (const b of w) for (let H = 0; H < 3; H++) b[H] < _[H] && (_[H] = b[H]), b[H] > P[H] && (P[H] = b[H]);
    return Math.max(P[0] - _[0], P[1] - _[1], P[2] - _[2], 0.1);
  }, v = () => 0.025 * k(), x = { normals: Rn, shearsY: Rn, shearsZ: Rn, torsions: Rn, bendingsY: Po, bendingsZ: Po };
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    u.children.forEach((_) => _.dispose()), u.clear();
    const w = Io[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[w]) == null ? void 0 : _b.forEach((_, P) => {
      var _a2, _b2;
      const b = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[P]) ?? [0, 1], H = y.rawVal[b[0]], se = y.rawVal[b[1]], ae = new m(...se).distanceTo(new m(...H)), pe = gs((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[w]), C = _ == null ? void 0 : _.map((_e) => _e / (pe === 0 ? 1 : pe)), G = oo(H, se), me = new x[w](H, se, ae, G, _ ?? [0, 0], C ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(w)), ye = v();
      me.updateScale(ye * h.rawVal), u.add(me);
    });
  }), I.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const w = v();
    u.children.forEach((_) => _.updateScale(w * h.rawVal));
  }), I.derive(() => {
    u.visible = i.frameResults.val != "none";
  }), u;
}
function gs(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((y) => {
    const h = Math.max(...y ?? [0, 0]);
    h > i && (i = h);
  }), i;
}
class vs extends st {
  constructor(i, y, h) {
    super();
    const u = y === so.reactions;
    h[0] && (this.xText1 = new Pt(`${u ? "Fx" : "Dx"}: ` + h[0].toFixed(4))), h[3] && (this.xText2 = new Pt(`${u ? "Mx" : "Rx"}: ` + h[3].toFixed(4))), h[1] && (this.yText1 = new Pt(`${u ? "Fy" : "Dy"}: ` + h[1].toFixed(4))), h[4] && (this.yText2 = new Pt(`${u ? "My" : "Ry"}: ` + h[4].toFixed(4))), h[2] && (this.zText1 = new Pt(`${u ? "Fz" : "Dz"}: ` + h[2].toFixed(4))), h[5] && (this.zText2 = new Pt(`${u ? "Mz" : "Rz"}: ` + h[5].toFixed(4))), (h[0] || h[3]) && (this.xArrow = new rn(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[1] || h[4]) && (this.yArrow = new rn(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[2] || h[5]) && (this.zArrow = new rn(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var so = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(so || {});
function bs(e, i, y, h) {
  const u = new st();
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    u.children.forEach((x) => x.dispose()), u.clear();
    const k = so[i.nodeResults.rawVal], v = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[k]) == null ? void 0 : _b.forEach((x, w) => {
      const _ = new vs(y.rawVal[w], k, x ?? [0, 0, 0, 0, 0, 0]);
      _.updateScale(v * h.rawVal), u.add(_);
    });
  }), I.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const k = 0.05 * i.gridSize.val;
    u.children.forEach((v) => v.updateScale(k * h.rawVal));
  }), I.derive(() => {
    u.visible = i.nodeResults.val != "none";
  }), u;
}
function Ms({ drawingObj: e, gridObj: i, scene: y, getActiveCamera: h, controls: u, gridSize: k, derivedDisplayScale: v, rendererElm: x, viewerRender: w }) {
  const _ = new Ho(), P = new Wo(), b = (n) => {
    const o = x.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const p = r / 2;
      if (a >= p) return P.x = (a - p) / p * 2 - 1, P.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? h();
      P.x = a / p * 2 - 1;
    } else P.x = a / r * 2 - 1;
    return P.y = -(t / s) * 2 + 1, h();
  }, H = new je(new an(1e4, 1e4), new at({ side: Xt, transparent: true, opacity: 0, depthWrite: false }));
  H.visible = true, H.frustumCulled = false, y.add(H);
  const se = (n, o, a) => {
    const t = new je(new an(1e4, 1e4), new at({ side: Xt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, ae = se(Math.PI / 2, 0, 0), pe = se(0, Math.PI / 2, 0);
  let C = false;
  const G = () => {
    if (C) return _.intersectObjects([H], false);
    if (ae.visible = !!window.__hekatanGridPlaneXZ, pe.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && mt.visible) {
      const a = _.intersectObjects([mt, zt, gt], false);
      if (a.length > 0) return a;
    }
    const o = [H];
    return ae.visible && o.push(ae), pe.visible && o.push(pe), rt.visible && Nt.length > 0 && o.push(...Nt), _.intersectObjects(o, false);
  }, me = new Xn(new he(), new Yn()), ye = new Xn(new he(), new Yn({ color: "gray", sizeAttenuation: false, size: 6 })), _e = new Xn(new he(), new Yn({ color: "orange", size: 0.1 }));
  y.add(_e);
  const K = document.createElement("input");
  K.id = "hk-rubber-label", K.type = "text", K.spellcheck = false, K.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, K.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(K);
  let D = null, X = null, T = false;
  const A = new m(), V = (n, o, a, t, r, s) => {
    const l = t - n, p = r - o, d = s - a, g = Math.hypot(l, p, d);
    if (g < 0.01) {
      K.style.display = "none";
      return;
    }
    D = [n, o, a], X = [l / g, p / g, d / g], A.set((n + t) / 2, (o + r) / 2, (a + s) / 2), A.project(h());
    const M = x.getBoundingClientRect(), c = M.left + (A.x * 0.5 + 0.5) * M.width, f = M.top + (-A.y * 0.5 + 0.5) * M.height;
    if (K.style.left = c + "px", K.style.top = f + "px", K.style.display = "block", !T) {
      if (K.value = `${g.toFixed(2)} m`, document.activeElement !== K) {
        const S = document.activeElement;
        S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== K || K.focus({ preventScroll: true });
      }
      try {
        K.select();
      } catch {
      }
    }
  }, $ = () => {
    K.style.display = "none", D = null, X = null, T = false, document.activeElement === K && K.blur();
  }, z = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Et = n, oe(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), K.blur();
      return;
    }
    if (!D || !X || !e.polylines) return;
    let a = X[0], t = X[1], r = X[2];
    q === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : q === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : q === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = D[0] + a * n, l = D[1] + t * n, p = D[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, p]];
    const d = e.polylines.rawVal, g = d.length ? d[d.length - 1] : [];
    e.polylines.val = [...d.slice(0, -1), [...g, e.points.rawVal.length - 1]], K.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    w();
  }, B = (n) => {
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
        const [s, l, p] = r;
        return { kind: "relSpherical", L: s, az: l, el: p };
      }
      return null;
    }
    if (o.includes(",")) {
      const r = o.split(",").map((d) => parseFloat(d.trim()));
      if (r.some(isNaN)) return null;
      const [s, l, p = 0] = r;
      return a ? { kind: "relCart", dx: s, dy: l, dz: p } : { kind: "absCart", x: s, y: l, z: p };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, te = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return D ? [D[0] + n.dx, D[1] + n.dy, D[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!D) return null;
      const o = n.ang * Math.PI / 180;
      return [D[0] + n.L * Math.cos(o), D[1] + n.L * Math.sin(o), D[2]];
    }
    if (n.kind === "relSpherical") {
      if (!D) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [D[0] + t * Math.cos(o), D[1] + t * Math.sin(o), D[2] + n.L * Math.sin(a)];
    }
    return null;
  }, J = (n) => {
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
    const o = B(n);
    if (!o) return false;
    if (o.kind === "length") return z(o.L), true;
    const a = te(o);
    if (!a) return false;
    if (J(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
      const a = B(K.value);
      if (!a) return;
      if (T = false, a.kind === "length") z(a.L), oe(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = te(a);
        if (!t) return;
        J(t);
        const r = a.kind;
        oe(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), T = false, K.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!T && K.style.display === "block") try {
          K.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (T = true);
  }), window.addEventListener("keydown", (n) => {
    if (!D || !X || document.activeElement === K) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (K.value = n.key, K.focus(), K.setSelectionRange(1, 1), n.preventDefault());
  });
  const W = document.createElement("div");
  W.id = "hk-coord-readout", W.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", W.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(W);
  const F = document.createElement("div");
  F.id = "hk-coord-fixed", F.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", F.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(F);
  const ne = new Tt(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new Cn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  ne.frustumCulled = false, ne.visible = false, y.add(ne);
  const ee = new Tt(new he(), new ft({ color: 2282478, transparent: true, opacity: 0.9 }));
  ee.frustumCulled = false, ee.visible = false, y.add(ee);
  let le = [];
  const re = new st(), Fe = new je(new an(1, 1), new at({ color: 2282478, transparent: true, opacity: 0.08, side: Xt, depthWrite: false })), de = new Ot(new yo(new an(1, 1)), new ft({ color: 2282478, transparent: true, opacity: 0.85 })), ce = new Ot(new he(), new ft({ color: 2282478, transparent: true, opacity: 0.3 })), Xe = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    ce.geometry.dispose(), ce.geometry = new he(), ce.geometry.setAttribute("position", new Lt(a, 3));
  };
  re.add(Fe, de, ce), re.visible = false, re.frustumCulled = false, y.add(re);
  const Le = new st();
  Le.frustumCulled = false, Le.visible = false, y.add(Le);
  const _t = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new Cn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Tt(o, a);
  }, N = _t(16711680), ie = _t(65280), fe = _t(35071);
  Le.add(N, ie, fe);
  const we = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new ft({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Vo(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, $e = we(3462041), Ke = we(16724804), Je = we(6333946), nt = new st();
  nt.frustumCulled = false, nt.visible = false, y.add(nt), nt.add($e, Ke, Je);
  const Ht = (n) => {
    const o = new an(1, 1), a = new at({ color: n, transparent: true, opacity: 0.06, side: Xt, depthWrite: false }), t = new je(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, mt = Ht(3462041), zt = Ht(16724804), gt = Ht(6333946);
  nt.add(mt, zt, gt);
  const Yt = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, It = document.createElement("div");
  It.id = "hk-refplane-badge", It.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(It), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, nt.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      U($e, s, "xy", l), U(Ke, s, "xz", l), U(Je, s, "yz", l), Yt(mt, s, "xy", l), Yt(zt, s, "xz", l), Yt(gt, s, "yz", l), mt.material.opacity = 0.05, zt.material.opacity = 0.05, gt.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    w();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !nt.visible) {
      w();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    U($e, s, "xy", n), U(Ke, s, "xz", n), U(Je, s, "yz", n), Yt(mt, s, "xy", n), Yt(zt, s, "xz", n), Yt(gt, s, "yz", n), w();
  };
  const dn = (n) => {
    if (mt.material.opacity = n === "xy" ? 0.09 : 0.025, zt.material.opacity = n === "xz" ? 0.09 : 0.025, gt.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      It.style.background = r.bg, It.style.color = r.text, It.textContent = `\u25A6 Plano ${n.toUpperCase()}`, It.style.display = "block";
    } else It.style.display = "none";
  }, U = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let q = null;
  window.__hekatanAxisLock = () => q;
  let Pe = null;
  const Q = document.createElement("div");
  Q.id = "hk-axis-lock-badge", Q.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Q);
  const He = () => {
    if (!q) {
      Q.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    Q.style.background = "rgba(15,23,42,0.92)", Q.style.color = n[q], Q.style.border = `1.5px solid ${n[q]}`, Q.textContent = `\u{1F512} LOCK ${q.toUpperCase()}`, Q.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== K) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && le.length >= 3) {
      const r = qe();
      oe(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") q = q === a ? null : a, He(), n.preventDefault();
    else if (n.key === "Escape") {
      const r = document.activeElement;
      r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && r.blur(), fo(), n.preventDefault();
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
  const Ne = new m(), Oe = new m(), Ve = new m(), We = (n) => {
    if (!q) return null;
    const o = n[0], a = n[1], t = n[2];
    return q === "x" ? (Ne.set(o - 1e4, a, t), Oe.set(o + 1e4, a, t)) : q === "y" ? (Ne.set(o, a - 1e4, t), Oe.set(o, a + 1e4, t)) : (Ne.set(o, a, t - 1e4), Oe.set(o, a, t + 1e4)), _.ray.distanceSqToSegment(Ne, Oe, null, Ve), Ve;
  };
  window.__hekatanProjectOnAxis = We;
  const ke = new Tt(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new ft({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  ke.renderOrder = 998, ke.frustumCulled = false, ke.visible = false, y.add(ke);
  let ht = -1, pt = -1, Ye = -1;
  const ze = /* @__PURE__ */ new Set();
  window.__hekatanSelection = ze;
  const Se = new Tt(new he().setFromPoints([new m(), new m()]), new ft({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Se.renderOrder = 997, Se.frustumCulled = false, Se.visible = false, y.add(Se);
  const Ge = new je(new xn(0.02, 12, 12), new at({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  Ge.renderOrder = 998, Ge.visible = false, y.add(Ge);
  const it = (n) => {
    const o = h();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, pn = () => {
    Ge.visible && Ge.scale.setScalar(it(Ge.position));
  }, Ze = new st();
  Ze.frustumCulled = false, y.add(Ze);
  const Wt = 2282478;
  let vt = null;
  const De = (n, o, a, t) => {
    if (!e.points) return -1;
    const r = e.points.rawVal;
    let s = -1, l = t;
    for (let p = 0; p < r.length; p++) {
      const d = r[p];
      if (!d) continue;
      const g = Math.hypot(n - d[0], o - d[1], a - d[2]);
      g < l && (l = g, s = p);
    }
    return s;
  }, Ce = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Ze.children.length; ) {
      const l = Ze.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of ze) {
      const [p, ...d] = l.split(":");
      if (p === "pt") {
        const g = n[+d[0]];
        if (!g) continue;
        const M = new je(new xn(0.025, 12, 12), new at({ color: Wt, transparent: true, opacity: 0.9, depthTest: false }));
        M.position.set(g[0], g[1], g[2]), M.renderOrder = 999, M.__isSelectionPt = true, Ze.add(M);
      } else if (p === "seg") {
        const g = o[+d[0]], M = n[g == null ? void 0 : g[+d[1]]], c = n[g == null ? void 0 : g[+d[1] + 1]];
        if (!M || !c) continue;
        const f = new he().setFromPoints([new m(M[0], M[1], M[2]), new m(c[0], c[1], c[2])]), S = new Tt(f, new ft({ color: Wt, transparent: true, opacity: 0.95, depthTest: false }));
        S.renderOrder = 999, Ze.add(S);
      } else if (p === "poly") {
        const M = o[+d[0]].map((S) => {
          const L = n[S];
          return L ? new m(L[0], L[1], L[2]) : null;
        }).filter(Boolean);
        if (M.length < 2) continue;
        const c = new he().setFromPoints(M), f = new Tt(c, new ft({ color: Wt, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, Ze.add(f);
      } else if (p === "aux") {
        const g = t[+d[0]];
        if (!g || g.length !== 6) continue;
        const M = new he().setFromPoints([new m(g[0], g[1], g[2]), new m(g[3], g[4], g[5])]), c = new Tt(M, new ft({ color: Wt, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, Ze.add(c);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), w();
  };
  window.__hekatanRefreshSelection = Ce, window.__hekatanClearSelection = () => {
    ze.clear(), Ce();
  };
  const ve = (n, o, a, t, r, s, l, p, d) => {
    const g = l - t, M = p - r, c = d - s, f = g * g + M * M + c * c;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let S = ((n - t) * g + (o - r) * M + (a - s) * c) / f;
    S = Math.max(0, Math.min(1, S));
    const L = t + S * g, R = r + S * M, Z = s + S * c;
    return Math.hypot(n - L, o - R, a - Z);
  }, Be = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, p = -1, d = t;
    for (let g = 0; g < r.length; g++) {
      const M = r[g];
      for (let c = 0; c < M.length - 1; c++) {
        const f = s[M[c]], S = s[M[c + 1]];
        if (!f || !S) continue;
        const L = ve(n, o, a, f[0], f[1], f[2], S[0], S[1], S[2]);
        L < d && (d = L, l = g, p = c);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: p, dist: d } : null;
  }, be = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, p = t;
    for (let d = 0; d < s.length; d++) {
      const g = s[d];
      if (!g || g.length !== 6) continue;
      const M = ve(n, o, a, g[0], g[1], g[2], g[3], g[4], g[5]);
      M < p && (p = M, l = d);
    }
    return l;
  }, lt = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      ke.visible = false;
      return;
    }
    ke.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), ke.visible = true;
  }, ut = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      ke.visible = false;
      return;
    }
    const r = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, s = [];
    if (r || o < 0 || o >= a.length - 1) for (const l of a) {
      const p = t[l];
      p && s.push(new m(p[0], p[1], p[2]));
    }
    else {
      const l = t[a[o]], p = t[a[o + 1]];
      l && s.push(new m(l[0], l[1], l[2])), p && s.push(new m(p[0], p[1], p[2]));
    }
    ke.geometry.setFromPoints(s), ke.visible = true;
  }, $t = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((d, g) => g !== n), t = /* @__PURE__ */ new Set();
    for (const d of a) for (const g of d) t.add(g);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let d = 0; d < r.length; d++) t.has(d) && (s.set(d, l.length), l.push(r[d]));
    const p = a.map((d) => d.map((g) => s.get(g)).filter((g) => g !== void 0));
    e.points.val = l, e.polylines.val = p, e.areas && (e.areas.val = e.areas.rawVal.filter((d) => d !== n).map((d) => d > n ? d - 1 : d)), ke.visible = false, ht = -1, pt = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, Ue = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const a = e.polylines.rawVal;
    if (n < 0 || n >= a.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      $t(n);
      return;
    }
    const r = a[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      $t(n);
      return;
    }
    let s;
    o === 0 ? s = [r.slice(1)] : o === r.length - 2 ? s = [r.slice(0, -1)] : s = [r.slice(0, o + 1), r.slice(o + 1)];
    const l = [...a.slice(0, n), ...s, ...a.slice(n + 1)], p = /* @__PURE__ */ new Set();
    for (const f of l) for (const S of f) p.add(S);
    const d = e.points.rawVal, g = /* @__PURE__ */ new Map(), M = [];
    for (let f = 0; f < d.length; f++) p.has(f) && (g.set(f, M.length), M.push(d[f]));
    const c = l.map((f) => f.map((S) => g.get(S)).filter((S) => S !== void 0));
    if (e.points.val = M, e.polylines.val = c, e.areas) {
      const f = s.length - 1;
      e.areas.val = e.areas.rawVal.map((S) => S > n ? S + f : S);
    }
    ke.visible = false, ht = -1, pt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  me.geometry.setAttribute("position", new Lt(e.points.rawVal.flat(), 3)), me.geometry.computeBoundingSphere(), me.frustumCulled = false, ye.frustumCulled = false, y.add(ye), H.position.set(0, 0, 0), H.rotateX(Math.PI / 2), H.geometry.rotateX(Math.PI / 2), H.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const l = Math.max(4, Math.round(r)), p = e.points.rawVal.length, d = [];
    for (let g = 0; g < l; g++) {
      const M = 2 * Math.PI * g / l, c = t * Math.cos(M), f = t * Math.sin(M);
      let S;
      s === "xy" ? S = [n + c, o + f, a] : s === "xz" ? S = [n + c, o, a + f] : S = [n, o + c, a + f], d.push(S);
    }
    if (e.points.val = [...e.points.rawVal, ...d], e.polylines) {
      const g = [...d.map((c, f) => p + f), p], M = e.polylines.rawVal;
      ((_a = M[M.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...M, g, []] : e.polylines.val = [...M.slice(0, -1), g, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), p = new m(...a), d = new m().subVectors(l, s), g = new m().subVectors(p, s), M = new m().crossVectors(d, g).normalize(), c = new m().addVectors(s, l).multiplyScalar(0.5), f = new m().addVectors(l, p).multiplyScalar(0.5), S = new m().crossVectors(d, M).normalize(), L = new m().crossVectors(new m().subVectors(p, l), M).normalize(), R = new m().subVectors(f, c), Z = S.x * L.y - S.y * L.x;
    let E;
    if (Math.abs(Z) > 1e-9) {
      const Re = (R.x * L.y - R.y * L.x) / Z;
      E = new m().addVectors(c, S.clone().multiplyScalar(Re));
    } else E = c.clone();
    const O = s.distanceTo(E), j = new m().subVectors(s, E), ue = new m().subVectors(p, E), Te = Math.acos(Math.max(-1, Math.min(1, j.dot(ue) / (O * O)))), xe = e.points.rawVal.length, ge = [], kt = M.clone();
    for (let Re = 0; Re <= r; Re++) {
      const Ae = Re / r, Qe = Te * Ae, ct = new Jn().setFromAxisAngle(kt, Qe), St = j.clone().applyQuaternion(ct).add(E);
      ge.push([St.x, St.y, St.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...ge], e.polylines) {
      const Re = ge.map((Qe, ct) => xe + ct), Ae = e.polylines.rawVal;
      e.polylines.val = [...Ae.slice(0, -1), Re, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), p = Math.min(n[1], o[1]), d = Math.max(n[1], o[1]), g = (n[2] + o[2]) / 2, M = l - s, c = d - p, f = Math.min(a, M / 2 - 0.01, c / 2 - 0.01);
    if (f <= 0) return;
    const S = e.points.rawVal.length, L = [], R = [], Z = (E, O) => {
      L.push([E, O, g]), R.push(S + L.length - 1);
    };
    for (let E = 0; E <= r; E++) Z(s + f + (M - 2 * f) * E / r, p);
    for (let E = 1; E <= t; E++) {
      const O = -Math.PI / 2 + Math.PI / 2 * E / t;
      Z(l - f + f * Math.cos(O), p + f + f * Math.sin(O));
    }
    for (let E = 1; E <= r; E++) Z(l, p + f + (c - 2 * f) * E / r);
    for (let E = 1; E <= t; E++) {
      const O = 0 + Math.PI / 2 * E / t;
      Z(l - f + f * Math.cos(O), d - f + f * Math.sin(O));
    }
    for (let E = 1; E <= r; E++) Z(l - f - (M - 2 * f) * E / r, d);
    for (let E = 1; E <= t; E++) {
      const O = Math.PI / 2 + Math.PI / 2 * E / t;
      Z(s + f + f * Math.cos(O), d - f + f * Math.sin(O));
    }
    for (let E = 1; E <= r; E++) Z(s, d - f - (c - 2 * f) * E / r);
    for (let E = 1; E <= t; E++) {
      const O = Math.PI + Math.PI / 2 * E / t;
      Z(s + f + f * Math.cos(O), p + f + f * Math.sin(O));
    }
    if (R.push(S), e.points.val = [...e.points.rawVal, ...L], e.polylines) {
      const E = e.polylines.rawVal;
      e.polylines.val = [...E.slice(0, -1), R, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], p = o[1], d = o[2];
    let g;
    if (Math.abs(s - d) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, p, s], [t, p, s]] : Math.abs(r - p) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, r, d], [t, r, d]] : g = [[t, r, s], [t, p, s], [t, p, d], [t, r, d]], e.points.val = [...e.points.rawVal, ...g], e.polylines) {
      const M = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), M, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], p = o[1], d = o[2];
    let g;
    if (C && e.gridTarget) {
      const M = e.gridTarget.rawVal, c = new Pn(...M.rotation), f = new m(1, 0, 0).applyEuler(c), S = new m(0, 1, 0).applyEuler(c), L = new m(...M.position), R = new m(t, r, s), Z = new m(l, p, d), E = R.clone().sub(L).dot(f), O = R.clone().sub(L).dot(S), j = Z.clone().sub(L).dot(f), ue = Z.clone().sub(L).dot(S), Te = (xe, ge) => L.clone().addScaledVector(f, xe).addScaledVector(S, ge).toArray();
      g = [Te(E, O), Te(j, O), Te(j, ue), Te(E, ue)];
    } else Math.abs(s - d) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, p, s], [t, p, s]] : Math.abs(r - p) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, r, d], [t, r, d]] : g = [[t, r, s], [t, p, s], [t, p, d], [t, r, d]];
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...g], e.polylines) {
      const M = e.polylines.rawVal, c = M.length - 1, f = [a, a + 1, a + 2, a + 3, a];
      e.polylines.val = [...M.slice(0, -1), f, []], e.areas && (e.areas.val = [...e.areas.rawVal, c]);
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
    for (let Me = 0; Me < a; Me++) {
      const Ie = n[Me], ot = n[(Me + 1) % a];
      t += (Ie[1] - ot[1]) * (Ie[2] + ot[2]), r += (Ie[2] - ot[2]) * (Ie[0] + ot[0]), s += (Ie[0] - ot[0]) * (Ie[1] + ot[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let p = n[1][0] - n[0][0], d = n[1][1] - n[0][1], g = n[1][2] - n[0][2];
    const M = Math.hypot(p, d, g) || 1;
    p /= M, d /= M, g /= M;
    let c = r * g - s * d, f = s * p - t * g, S = t * d - r * p;
    const L = Math.hypot(c, f, S) || 1;
    c /= L, f /= L, S /= L;
    const R = n[0], Z = (Me) => [(Me[0] - R[0]) * p + (Me[1] - R[1]) * d + (Me[2] - R[2]) * g, (Me[0] - R[0]) * c + (Me[1] - R[1]) * f + (Me[2] - R[2]) * S], E = (Me, Ie) => [R[0] + Me * p + Ie * c, R[1] + Me * d + Ie * f, R[2] + Me * g + Ie * S], O = n.map(Z);
    let j = 1 / 0, ue = -1 / 0, Te = 1 / 0, xe = -1 / 0;
    for (const [Me, Ie] of O) Me < j && (j = Me), Me > ue && (ue = Me), Ie < Te && (Te = Ie), Ie > xe && (xe = Ie);
    const ge = ue - j, kt = xe - Te;
    if (ge < 1e-6 || kt < 1e-6) return 0;
    let Re = o && o > 0 ? o : 0.5;
    for (; ge / Re * (kt / Re) > 2500; ) Re *= 2;
    Re = Math.min(Re, Math.min(ge, kt));
    const Ae = (Me, Ie) => {
      let ot = false;
      for (let Kt = 0, nn = O.length - 1; Kt < O.length; nn = Kt++) {
        const [wn, kn] = O[Kt], [yn, Sn] = O[nn];
        kn > Ie != Sn > Ie && Me < (yn - wn) * (Ie - kn) / (Sn - kn) + wn && (ot = !ot);
      }
      return ot;
    }, Qe = Math.max(1, Math.round(ge / Re)), ct = Math.max(1, Math.round(kt / Re)), St = ge / Qe, Rt = kt / ct, tn = /* @__PURE__ */ new Map(), qt = [], Ct = e.points.rawVal.length, Ut = (Me, Ie) => {
      const ot = Me + "," + Ie, Kt = tn.get(ot);
      if (Kt !== void 0) return Kt;
      const nn = Ct + qt.length;
      return qt.push(E(j + Me * St, Te + Ie * Rt)), tn.set(ot, nn), nn;
    }, Vt = [];
    for (let Me = 0; Me < Qe; Me++) for (let Ie = 0; Ie < ct; Ie++) {
      if (!Ae(j + (Me + 0.5) * St, Te + (Ie + 0.5) * Rt)) continue;
      const ot = Ut(Me, Ie), Kt = Ut(Me + 1, Ie), nn = Ut(Me + 1, Ie + 1), wn = Ut(Me, Ie + 1);
      Vt.push([ot, Kt, nn, wn]);
    }
    if (!Vt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...qt], e.polylines && e.areas) {
      let Me = e.polylines.rawVal.slice();
      Me.length && Me[Me.length - 1].length === 0 && (Me = Me.slice(0, -1));
      const Ie = [];
      for (const ot of Vt) Ie.push(Me.length), Me.push([ot[0], ot[1], ot[2], ot[3], ot[0]]);
      Me.push([]), e.polylines.val = Me, e.areas.val = [...e.areas.rawVal, ...Ie];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), Vt.length;
  };
  const qe = () => {
    if (le.length < 3) return le = [], ee.visible = false, w(), 0;
    const n = window.__hekatanMeshPolyArea(le.slice());
    return le = [], ee.visible = false, w(), n;
  };
  window.__hekatanFinalizePolyArea = qe, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new m(n[0], n[1], n[2]), r = new m(o[0], o[1], o[2]), s = new m(a[0], a[1], a[2]), l = new m().subVectors(r, t).cross(new m().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const p = new Jn().setFromUnitVectors(new m(0, 0, 1), l), d = new Pn().setFromQuaternion(p);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [d.x, d.y, d.z] }), C = true;
    const g = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), M = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, c = M / 2;
    Fe.geometry.dispose(), Fe.geometry = new an(M, M), de.geometry.dispose(), de.geometry = new yo(new an(M, M)), Xe(c, 1), re.position.copy(g), re.quaternion.copy(p), re.scale.set(1, 1, 1), re.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), C = false, re.visible = false, w();
  };
  const et = new st();
  et.visible = false, y.add(et), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; et.children.length; ) {
      const M = et.children.pop();
      (_a = M.geometry) == null ? void 0 : _a.dispose(), (_b = M.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, p = Math.max(...n) + t, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", g = (M, c, f, S, L) => {
      const R = document.createElement("canvas");
      R.width = 64, R.height = 32;
      const Z = R.getContext("2d");
      Z.fillStyle = L, Z.font = "bold 22px sans-serif", Z.textAlign = "center", Z.fillText(M, 32, 26);
      const E = new xo(R), O = new go({ map: E, transparent: true }), j = new vo(O);
      return j.position.set(c, f, S), j.scale.set(1.2, 0.6, 1), j;
    };
    n.forEach((M, c) => {
      const f = c < d.length ? d[c] : `X${c}`, S = new he().setFromPoints([new m(M, r, 0), new m(M, s, 0), new m(M, r, 0), new m(M, r, a)]), L = new Cn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), R = new Ot(S, L);
      R.computeLineDistances(), et.add(R), et.add(g(f, M, r - 0.5, 0, "#60a5fa")), et.add(g(f, M, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((M, c) => {
      const f = `${c + 1}`, S = new he().setFromPoints([new m(l, M, 0), new m(p, M, 0), new m(l, M, 0), new m(l, M, a)]), L = new Cn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), R = new Ot(S, L);
      R.computeLineDistances(), et.add(R), et.add(g(f, l - 0.5, M, 0, "#fb7185")), et.add(g(f, p + 0.5, M, 0, "#fb7185"));
    }), et.visible = true, w();
  }, window.__hekatanHideAxes = () => {
    et.visible = false, w();
  };
  const rt = new st();
  rt.visible = false, y.add(rt);
  let Nt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; rt.children.length; ) {
      const s = rt.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Nt.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Nt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const p = r[l % r.length], d = o / 2, g = [new m(a - d, t - d, s), new m(a + d, t - d, s), new m(a + d, t + d, s), new m(a - d, t + d, s), new m(a - d, t - d, s)], M = new he().setFromPoints(g), c = new ft({ color: p, transparent: true, opacity: 0.55 });
      rt.add(new Tt(M, c));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const S = f.getContext("2d");
      S.fillStyle = `#${p.toString(16).padStart(6, "0")}`, S.font = "bold 18px sans-serif", S.fillText(`Z = ${s} m`, 4, 22);
      const L = new xo(f), R = new go({ map: L, transparent: true }), Z = new vo(R);
      Z.position.set(a - d - 1.5, t - d - 1.5, s), Z.scale.set(2.5, 0.6, 1), rt.add(Z);
      const E = new an(1e4, 1e4), O = new at({ visible: false, side: Xt }), j = new je(E, O);
      j.position.set(0, 0, s), j.frustumCulled = false, j.userData = { refPlaneZ: s }, y.add(j), Nt.push(j);
    }), rt.visible = true, w();
  }, window.__hekatanHideRefPlanes = () => {
    rt.visible = false, Nt.forEach((n) => {
      n.visible = false;
    }), w();
  };
  const Zt = new st();
  Zt.frustumCulled = false, y.add(Zt);
  const Gt = () => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const a = Zt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new he().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new Cn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new Tt(t, r);
      s.computeLineDistances(), Zt.add(s);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Gt(), w());
  });
  const wt = new st();
  wt.frustumCulled = false, y.add(wt);
  const on = () => {
    var _a, _b, _c, _d;
    for (; wt.children.length; ) {
      const a = wt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new je(new xn(0.025, 12, 12), new at({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(it(t.position)), wt.add(t);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, on(), w());
  }), u.addEventListener("change", () => {
    wt.children.forEach((n) => {
      n.scale.setScalar(it(n.position));
    });
  }), window.__hekatanRenderAuxPoints = on;
  const yt = new st(), An = new je(new xn(0.01, 12, 12), new at({ color: 16724804, transparent: true, opacity: 0.95 })), gn = new je(new xn(0.015, 12, 12), new at({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  yt.add(An, gn);
  const Qt = 0.08, vn = (n, o, a) => {
    const t = new he().setFromPoints([new m(...n), new m(...o)]);
    return new Tt(t, new ft({ color: a, transparent: true, opacity: 0.7 }));
  };
  yt.add(vn([-Qt, 0, 0], [Qt, 0, 0], 16711680)), yt.add(vn([0, -Qt, 0], [0, Qt, 0], 65280)), yt.add(vn([0, 0, -Qt], [0, 0, Qt], 35071)), yt.visible = false, yt.frustumCulled = false, y.add(yt);
  const En = 40, Zn = 2.5, bn = () => {
    if (!yt.visible) return;
    const o = h().position.distanceTo(yt.position), a = Math.max(0.05, Math.min(Zn, o / En));
    yt.scale.setScalar(a);
  }, Vn = () => {
    Ze.children.length !== 0 && Ze.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(it(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = Vn, u.addEventListener("change", () => {
    bn(), Ge.visible && pn();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = h().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / En));
    }
    Vn();
  }), window.__hekatanShowSnap = (n, o, a) => {
    yt.position.set(n, o, a), yt.visible = true, bn(), w();
  }, window.__hekatanHideSnap = () => {
    yt.visible = false, w();
  }, x.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(P, o);
    const a = G();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) co(s.type, s.x, s.y, s.z), yt.position.set(s.x, s.y, s.z), yt.visible = true, t.set(s.x, s.y, s.z);
      else {
        Un();
        const M = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        M && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), yt.position.copy(t), yt.visible = true;
      }
      bn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = De(t.x, t.y, t.z, M), f = Be(t.x, t.y, t.z, M), S = be(t.x, t.y, t.z, M);
        if (c >= 0) {
          const E = e.points.rawVal[c];
          Ge.position.set(E[0], E[1], E[2]), Ge.visible = true, pn(), Se.visible = false, vt = { kind: "pt", a: c };
        } else if (f) {
          const E = e.points.rawVal, O = e.polylines.rawVal[f.polyIdx], j = E[O[f.segIdx]], ue = E[O[f.segIdx + 1]];
          Se.geometry.setFromPoints([new m(j[0], j[1], j[2]), new m(ue[0], ue[1], ue[2])]), Se.visible = true, Ge.visible = false, vt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (S >= 0) {
          const O = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[S];
          O && (Se.geometry.setFromPoints([new m(O[0], O[1], O[2]), new m(O[3], O[4], O[5])]), Se.visible = true, Ge.visible = false, vt = { kind: "aux", a: S });
        } else Se.visible = false, Ge.visible = false, vt = null;
        W.style.left = n.clientX + "px", W.style.top = n.clientY + "px", W.style.display = "block";
        let L = t;
        if ((vt == null ? void 0 : vt.kind) === "pt") {
          const E = e.points.rawVal[vt.a];
          E && (L = new m(E[0], E[1], E[2]));
        }
        const R = `X=${L.x.toFixed(2)} Y=${L.y.toFixed(2)} Z=${L.z.toFixed(2)}`;
        if (vt) {
          const E = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          W.textContent = `${R}  \xB7  \u{1F5B1} Click \u2192 ${E[vt.kind]}`;
        } else W.textContent = R;
        const Z = document.getElementById("hk-coord-fixed");
        Z && (Z.textContent = R), ne.visible = false, Le.visible = false, w();
        return;
      }
      if (l === "delete") {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Be(t.x, t.y, t.z, M), f = be(t.x, t.y, t.z, M);
        let S = false;
        if (f >= 0) if (!c) S = true;
        else {
          const E = window.__hekatanDrawingAuxLines, j = ((E == null ? void 0 : E.rawVal) ?? (E == null ? void 0 : E.val) ?? E ?? [])[f];
          ve(t.x, t.y, t.z, j[0], j[1], j[2], j[3], j[4], j[5]) < c.dist && (S = true);
        }
        S ? (Ye = f, ht = -1, pt = -1, lt(f)) : c ? (ht = c.polyIdx, pt = c.segIdx, Ye = -1, ut(c.polyIdx, c.segIdx)) : (ht = -1, pt = -1, Ye = -1, ke.visible = false), ne.visible = false, Le.visible = false, $(), W.style.left = n.clientX + "px", W.style.top = n.clientY + "px", W.style.display = "block";
        const L = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let R = "";
        S ? R = `\u{1F5D1} l\xEDnea aux #${Ye + 1}` : c ? R = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : R = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", W.textContent = `${L}  \xB7  ${R}`;
        const Z = document.getElementById("hk-coord-fixed");
        Z && (Z.textContent = L), w();
        return;
      } else ke.visible = false, ht = -1, Ye = -1;
      W.style.left = n.clientX + "px", W.style.top = n.clientY + "px", W.style.display = "block";
      const p = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], d = p[p.length - 1] ?? [], g = e.points.rawVal ?? [];
      if (d.length > 0 && g[d[d.length - 1]]) {
        const M = d[d.length - 1], c = g[M];
        let f = q;
        if (Pe = null, !f && window.__hekatanAxisSnap !== false) {
          const Ae = x.getBoundingClientRect(), Qe = n.clientX, ct = n.clientY, St = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Rt = new m(c[0], c[1], c[2]), tn = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], qt = (Ut) => {
            const Vt = Ut.clone().project(o);
            return { x: (Vt.x * 0.5 + 0.5) * Ae.width + Ae.left, y: (-Vt.y * 0.5 + 0.5) * Ae.height + Ae.top };
          };
          let Ct = null;
          for (const [Ut, Vt] of tn) {
            const Me = qt(Rt.clone().addScaledVector(Vt, -St)), Ie = qt(Rt.clone().addScaledVector(Vt, St)), ot = Ie.x - Me.x, Kt = Ie.y - Me.y, nn = Qe - Me.x, wn = ct - Me.y, kn = ot * ot + Kt * Kt || 1;
            let yn = (nn * ot + wn * Kt) / kn;
            yn = Math.max(0, Math.min(1, yn));
            const Sn = Math.hypot(Qe - (Me.x + yn * ot), ct - (Me.y + yn * Kt));
            if (Ct === null || Sn < Ct.dpx) {
              const Wn = _.ray, ho = Rt.clone().sub(Wn.origin), Gn = Vt.dot(Wn.direction), mo = Vt.dot(ho), No = Wn.direction.dot(ho), wo = 1 - Gn * Gn, Zo = Math.abs(wo) < 1e-6 ? -mo : (Gn * No - mo) / wo;
              Ct = { axis: Ut, dpx: Sn, pt: Rt.clone().addScaledVector(Vt, Zo) };
            }
          }
          Ct && Ct.dpx <= 12 && (t.copy(Ct.pt), f = Ct.axis, Pe = Ct.pt.clone());
        }
        const S = !!window.__hekatanOrthoMode;
        if (!f && S) {
          const Ae = Math.abs(t.x - c[0]), Qe = Math.abs(t.y - c[1]), ct = Math.abs(t.z - c[2]), St = (_l = a[0]) == null ? void 0 : _l.object;
          let Rt = null;
          St === mt ? Rt = "xy" : St === zt ? Rt = "xz" : St === gt && (Rt = "yz"), Rt === "xy" ? f = Ae >= Qe ? "x" : "y" : Rt === "xz" ? f = Ae >= ct ? "x" : "z" : Rt === "yz" ? f = Qe >= ct ? "y" : "z" : f = Ae >= Qe && Ae >= ct ? "x" : Qe >= ct ? "y" : "z";
        }
        const L = window.__hekatanPolarTrack !== false;
        if (!f && L) {
          const Ae = t.x - c[0], Qe = t.y - c[1], ct = t.z - c[2], St = Math.hypot(Ae, Qe, ct);
          if (St > 1e-3) {
            const tn = Math.tan(6 * Math.PI / 180) * St, qt = Math.hypot(Qe, ct), Ct = Math.hypot(Ae, ct), Ut = Math.hypot(Ae, Qe), Vt = [["x", qt], ["y", Ct], ["z", Ut]];
            Vt.sort((Me, Ie) => Me[1] - Ie[1]), Vt[0][1] <= tn && (f = Vt[0][0]);
          }
        }
        if (f) {
          const Ae = c[0], Qe = c[1], ct = c[2];
          f === "x" ? t.set(t.x, Qe, ct) : f === "y" ? t.set(Ae, t.y, ct) : t.set(Ae, Qe, t.z);
          const St = !!q, tn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[f];
          Q.style.background = "rgba(15,23,42,0.92)", Q.style.color = tn, Q.style.border = `1.5px solid ${tn}`;
          const qt = (_m = a[0]) == null ? void 0 : _m.object;
          let Ct = null;
          qt === mt ? Ct = "xy" : qt === zt ? Ct = "xz" : qt === gt && (Ct = "yz");
          const Ut = Ct ? ` (plano ${Ct.toUpperCase()})` : "";
          Q.textContent = St ? `\u{1F512} LOCK ${f.toUpperCase()}${Ut}` : `\u22A5 ORTO ${f.toUpperCase()}${Ut}`, Q.style.left = n.clientX + 20 + "px", Q.style.top = n.clientY + 18 + "px", Q.style.transform = "none", Q.style.display = "block";
        } else q || (Q.style.display = "none");
        const R = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), Z = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, E = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        W.textContent = `${E} | \u0394L=${R.toFixed(2)}m ${Z.toFixed(0)}\xB0`;
        const O = document.getElementById("hk-coord-fixed");
        O && (O.textContent = E), ne.geometry.setFromPoints([new m(c[0], c[1], c[2]), new m(t.x, t.y, t.z)]), (_n2 = ne.computeLineDistances) == null ? void 0 : _n2.call(ne), ne.visible = true, V(c[0], c[1], c[2], t.x, t.y, t.z);
        const j = window.__hekatanOrthoExt ?? 8, ue = window.__hekatanShowOrthoPlanes !== false;
        nt.visible = ue, ue || dn(null), ue && (U($e, c, "xy", j), U(Ke, c, "xz", j), U(Je, c, "yz", j), Yt(mt, c, "xy", j), Yt(zt, c, "xz", j), Yt(gt, c, "yz", j));
        const Te = ue ? _.intersectObjects([mt, zt, gt], false) : [];
        let xe = null;
        if (Te.length > 0) {
          const Ae = Te[0].object;
          Ae === mt ? xe = "xy" : Ae === zt ? xe = "xz" : Ae === gt && (xe = "yz");
        }
        dn(xe), xe && (It.style.left = n.clientX + "px", It.style.top = n.clientY + "px"), N.geometry.setFromPoints([new m(c[0] - j, c[1], c[2]), new m(c[0] + j, c[1], c[2])]), (_o2 = N.computeLineDistances) == null ? void 0 : _o2.call(N), ie.geometry.setFromPoints([new m(c[0], c[1] - j, c[2]), new m(c[0], c[1] + j, c[2])]), (_p = ie.computeLineDistances) == null ? void 0 : _p.call(ie), fe.geometry.setFromPoints([new m(c[0], c[1], c[2] - j), new m(c[0], c[1], c[2] + j)]), (_q = fe.computeLineDistances) == null ? void 0 : _q.call(fe), Le.visible = true;
        const ge = N.material, kt = ie.material, Re = fe.material;
        f === "x" ? (ge.opacity = 0.95, kt.opacity = 0.1, Re.opacity = 0.1) : f === "y" ? (ge.opacity = 0.1, kt.opacity = 0.95, Re.opacity = 0.1) : f === "z" ? (ge.opacity = 0.1, kt.opacity = 0.1, Re.opacity = 0.95) : (ge.opacity = 0.5, kt.opacity = 0.5, Re.opacity = 0.5);
      } else {
        const M = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        W.textContent = M;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = M), ne.visible = false, Le.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (D = null, X = null, K.style.left = n.clientX + 20 + "px", K.style.top = n.clientY - 28 + "px", K.style.display = "block", !T) {
            K.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const S = document.activeElement;
            !(S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA") && S !== K) && document.activeElement !== K && K.focus({ preventScroll: true });
            try {
              K.select();
            } catch {
            }
          }
        } else $();
      }
      w();
    } else Un(), W.style.display = "none", yt.visible = false, ne.visible = false, Le.visible = false, $(), w();
  }), I.derive(() => {
    if (!e.gridTarget) return;
    _s(i, { position: new m(...e.gridTarget.val.position), quaternion: new Jn().setFromEuler(new Pn(...e.gridTarget.val.rotation)) }, w), H.position.set(...e.gridTarget.val.position), H.quaternion.setFromEuler(new Pn(...e.gridTarget.val.rotation)), H.updateMatrixWorld();
    const n = new m(0, 0, 1).applyEuler(new Pn(...e.gridTarget.val.rotation));
    C = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), I.derive(() => {
    me.geometry.setAttribute("position", new Lt(e.points.val.flat(), 3)), me.geometry.computeBoundingSphere();
  }), I.derive(() => {
    const n = 0.05 * k * 0.5 * v.val;
    _.params.Points.threshold = 0.4 * n;
  }), I.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, p, d] = n[s];
      t.push(l, p, d);
    }
    const r = new he();
    r.setAttribute("position", new Lt(t, 3)), _e.geometry.dispose(), _e.geometry = r;
  });
  let un = false, jt = 0;
  x.addEventListener("pointerdown", () => {
    un = true;
  }), x.addEventListener("pointerup", () => {
    un = false;
  }), x.addEventListener("pointermove", () => {
    un && jt++;
  });
  const bt = document.createElement("div");
  bt.id = "hk-window-select", bt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(bt);
  let Dt = null, ln = false, Ft = null;
  const fn = (n, o, a, t, r) => {
    r ? (bt.style.borderColor = "#34d399", bt.style.borderStyle = "dashed", bt.style.background = "rgba(52, 211, 153, 0.10)") : (bt.style.borderColor = "#22d3ee", bt.style.borderStyle = "solid", bt.style.background = "rgba(34, 211, 238, 0.10)"), bt.style.left = Math.min(n, a) + "px", bt.style.top = Math.min(o, t) + "px", bt.style.width = Math.abs(a - n) + "px", bt.style.height = Math.abs(t - o) + "px", bt.style.display = "block";
  }, io = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), p = Math.min(o, t), d = Math.max(o, t), g = a < n, M = x.getBoundingClientRect(), c = h();
    c.updateMatrixWorld();
    const f = (xe) => {
      const ge = new m(xe[0], xe[1], xe[2]);
      return ge.project(c), { x: M.left + (ge.x * 0.5 + 0.5) * M.width, y: M.top + (-ge.y * 0.5 + 0.5) * M.height };
    }, S = (xe) => xe.x >= s && xe.x <= l && xe.y >= p && xe.y <= d, L = (xe, ge) => !(xe.x < s && ge.x < s || xe.x > l && ge.x > l || xe.y < p && ge.y < p || xe.y > d && ge.y > d);
    r || ze.clear();
    let R = 0;
    const Z = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let xe = 0; xe < Z.length; xe++) {
      const ge = Z[xe];
      ge && S(f(ge)) && (ze.add(`pt:${xe}`), R++);
    }
    const E = (xe, ge) => g ? S(xe) || S(ge) || L(xe, ge) : S(xe) && S(ge), O = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], j = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let xe = 0; xe < O.length; xe++) {
      const ge = O[xe];
      if (j.includes(xe)) {
        let Re;
        if (!g) Re = ge.every((Ae) => {
          const Qe = Z[Ae];
          return !!Qe && S(f(Qe));
        });
        else {
          Re = false;
          for (let Ae = 0; Ae < ge.length - 1; Ae++) {
            const Qe = Z[ge[Ae]], ct = Z[ge[Ae + 1]];
            if (!(!Qe || !ct) && E(f(Qe), f(ct))) {
              Re = true;
              break;
            }
          }
        }
        Re && (ze.add(`poly:${xe}`), R++);
      } else for (let Re = 0; Re < ge.length - 1; Re++) {
        const Ae = Z[ge[Re]], Qe = Z[ge[Re + 1]];
        !Ae || !Qe || E(f(Ae), f(Qe)) && (ze.add(`seg:${xe}:${Re}`), R++);
      }
    }
    const Te = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let xe = 0; xe < Te.length; xe++) {
      const ge = Te[xe];
      if (!ge || ge.length !== 6) continue;
      const kt = f([ge[0], ge[1], ge[2]]), Re = f([ge[3], ge[4], ge[5]]);
      E(kt, Re) && (ze.add(`aux:${xe}`), R++);
    }
    Ce(), oe(`${g ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${R} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${ze.size})`), bt.style.display = "none";
  }, Tn = () => {
    Ft && (Ft = null, bt.style.display = "none", oe("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = Tn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Ft && Tn();
  });
  const lo = () => {
    var _a, _b, _c, _d;
    if (ze.size === 0) return false;
    const n = [...ze], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set();
    for (const L of n) {
      const [R, ...Z] = L.split(":");
      if (R === "pt") l.add(+Z[0]);
      else if (R === "poly") p.add(+Z[0]);
      else if (R === "seg") {
        const E = +Z[0], O = +Z[1];
        d.has(E) || d.set(E, /* @__PURE__ */ new Set()), d.get(E).add(O);
      } else R === "aux" && g.add(+Z[0]);
    }
    let M = 0, c = [], f = [];
    const S = /* @__PURE__ */ new Map();
    for (let L = 0; L < a.length; L++) {
      if (p.has(L)) {
        M++;
        continue;
      }
      S.set(L, c.length);
      const R = d.get(L);
      if (R && R.size > 0) {
        let Z = [];
        for (let E = 0; E < a[L].length; E++) Z.push(a[L][E]), E < a[L].length - 1 && R.has(E) && (Z.length >= 2 && c.push(Z), Z = [], M++);
        (Z.length >= 2 || Z.length === 1) && c.push(Z);
      } else c.push([...a[L]]);
    }
    if (l.size > 0) {
      const L = [], R = /* @__PURE__ */ new Map();
      for (let E = 0; E < o.length; E++) {
        if (l.has(E)) {
          M++;
          continue;
        }
        R.set(E, L.length), L.push([...o[E]]);
      }
      const Z = [];
      for (const E of c) {
        let O = [];
        for (const j of E) {
          const ue = R.get(j);
          ue === void 0 ? (O.length >= 2 && Z.push(O), O = []) : O.push(ue);
        }
        O.length >= 2 && Z.push(O);
      }
      c = Z, e.points.val = L;
    }
    for (const L of t) {
      const R = S.get(L);
      R !== void 0 && R < c.length && f.push(R);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = f), g.size > 0 && r) {
      const L = s.filter((R, Z) => !g.has(Z));
      "val" in r ? r.val = L : window.__hekatanDrawingAuxLines = L, M += g.size;
    }
    ze.clear(), Ce();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return oe(`\u{1F5D1} ${M} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = lo, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || ze.size !== 0 && (n.preventDefault(), lo());
  });
  const Bt = document.createElement("div");
  Bt.id = "hk-properties-pane";
  const ro = "hk-props-pane-pos";
  let hn = null;
  try {
    const n = localStorage.getItem(ro);
    n && (hn = JSON.parse(n));
  } catch {
  }
  Bt.style.cssText = ["position:fixed", hn ? `left:${hn.left}px` : "left:50%", hn ? `top:${hn.top}px` : "top:8px", hn ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Bt);
  const Ro = () => {
    const n = Bt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, a = l.clientX, t = l.clientY;
      const p = Bt.getBoundingClientRect();
      r = p.left, s = p.top, Bt.style.transform = "none", Bt.style.left = `${r}px`, Bt.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const p = l.clientX - a, d = l.clientY - t, g = Math.max(0, Math.min(window.innerWidth - 80, r + p)), M = Math.max(0, Math.min(window.innerHeight - 40, s + d));
      Bt.style.left = `${g}px`, Bt.style.top = `${M}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(ro, JSON.stringify({ left: parseFloat(Bt.style.left), top: parseFloat(Bt.style.top) }));
        } catch {
        }
      }
    });
  }, Y = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, At = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let tt = null;
  const Mt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, Bo = () => {
    if (tt && (tt.dispose(), tt = null), ze.size === 0) {
      Bt.style.display = "none";
      return;
    }
    const n = [...ze], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), r = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, l = a.length > 0, p = t.length > 0, d = !s && !l && !p, g = [];
    o.length && g.push(`\u{1F535} ${o.length} nodo(s)`), a.length && g.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && g.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && g.push(`\u250A ${r.length} aux`);
    const M = `\u{1F3AF} ${ze.size} item(s) \u2014 ${g.join(", ")}`;
    tt = new Lo({ container: Bt, title: M });
    {
      const c = tt.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      c.addBinding(At, "dx", { label: "\u0394x (m)", step: 0.1 }), c.addBinding(At, "dy", { label: "\u0394y (m)", step: 0.1 }), c.addBinding(At, "dz", { label: "\u0394z (m)", step: 0.1 }), c.addBinding(At, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), c.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const S = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, At.dx, At.dy, At.dz, At.copias);
        oe(S ? `\u29C9 Replicado \xD7${S} (\u0394 ${At.dx},${At.dy},${At.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), c.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const S = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, At.dx, At.dy, At.dz, 1);
        oe(S ? `\u2192 Copia desplazada \u0394 ${At.dx},${At.dy},${At.dz} m` : "\u26A0 Nada seleccionado");
      });
      const f = c.addFolder({ title: "\u{1F9F2} Snap", expanded: false });
      f.addButton({ title: "Snap a grilla ON/OFF (F9)" }).on("click", () => {
        var _a;
        return (_a = window.__hekatanToggleSnap) == null ? void 0 : _a.call(window);
      }), f.addButton({ title: "OSNAP (endpoints/medios) ON/OFF" }).on("click", () => {
        window.__hekatanOsnapOn = !(window.__hekatanOsnapOn ?? true), oe(`\u{1F9F2} OSNAP ${window.__hekatanOsnapOn ? "ON" : "OFF"}`);
      });
    }
    if (s) {
      const c = tt.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding(Y, "Ux"), c.addBinding(Y, "Uy"), c.addBinding(Y, "Uz"), c.addBinding(Y, "Rx"), c.addBinding(Y, "Ry"), c.addBinding(Y, "Rz");
      const f = tt.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(Y, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(Y, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(Y, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(Y, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(Y, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(Y, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const S = tt.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      S.addBinding(Y, "Fx", { step: 0.1 }), S.addBinding(Y, "Fy", { step: 0.1 }), S.addBinding(Y, "Fz", { step: 0.1 }), S.addBinding(Y, "Mx", { step: 0.1 }), S.addBinding(Y, "My", { step: 0.1 }), S.addBinding(Y, "Mz", { step: 0.1 }), tt.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(Y, "mass", { label: "m", min: 0, step: 1 }), tt.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(Y, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), tt.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let Z = 0;
        const E = [Y.Ux, Y.Uy, Y.Uz, Y.Rx, Y.Ry, Y.Rz];
        E.some((ue) => ue) && (Mt("nodes", o, "supports", E), Z++);
        const O = [Y.Fx, Y.Fy, Y.Fz, Y.Mx, Y.My, Y.Mz];
        O.some((ue) => ue !== 0) && (Mt("nodes", o, "loads", O), Z++);
        const j = [Y.Kx, Y.Ky, Y.Kz, Y.Krx, Y.Kry, Y.Krz];
        if (j.some((ue) => ue !== 0) && (Mt("nodes", o, "springs", j), Z++), Y.mass !== 0 && (Mt("nodes", o, "mass", Y.mass), Z++), Y.diaphragm !== "Ninguno" && (Mt("nodes", o, "diaphragm", Y.diaphragm), Z++), Z === 0) {
          oe("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let ue = document.getElementById("hk-prop-toast");
          ue || (ue = document.createElement("div"), ue.id = "hk-prop-toast", ue.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(ue)), ue.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", ue.style.background = "rgba(217,119,6,0.97)", ue.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            ue && (ue.style.opacity = "0");
          }, 3200);
        } else oe(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const c = tt.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      c.addBinding(Y, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(Y, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = tt.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(Y, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(Y, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), tt.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(Y, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), tt.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(Y, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const R = tt.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      R.addBinding(Y, "relMxI", { label: "Mx I" }), R.addBinding(Y, "relMyI", { label: "My I" }), R.addBinding(Y, "relMzI", { label: "Mz I" });
      const Z = tt.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      Z.addBinding(Y, "relMxJ", { label: "Mx J" }), Z.addBinding(Y, "relMyJ", { label: "My J" }), Z.addBinding(Y, "relMzJ", { label: "Mz J" }), tt.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(Y, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const O = tt.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      O.addBinding(Y, "LKx", { label: "LKx", min: 0, step: 100 }), O.addBinding(Y, "LKy", { label: "LKy", min: 0, step: 100 }), O.addBinding(Y, "LKz", { label: "LKz", min: 0, step: 100 });
      const j = tt.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      j.addBinding(Y, "qx", { step: 0.1 }), j.addBinding(Y, "qy", { step: 0.1 }), j.addBinding(Y, "qz", { step: 0.1 }), tt.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(Y, "massPerM", { label: "m/L", min: 0, step: 1 }), tt.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        Mt("segs", a, "section", Y.section), Mt("segs", a, "material", Y.material_frame);
        const Te = { A: Y.A_mod, Iz: Y.Iz_mod, Iy: Y.Iy_mod, J: Y.J_mod };
        (Te.A !== 1 || Te.Iz !== 1 || Te.Iy !== 1 || Te.J !== 1) && Mt("segs", a, "modifiers", Te), Y.insertionPoint !== "10 \u2014 Centroid" && Mt("segs", a, "insertionPoint", Y.insertionPoint), Y.beta !== 0 && Mt("segs", a, "beta", Y.beta);
        const xe = [Y.relMxI, Y.relMyI, Y.relMzI], ge = [Y.relMxJ, Y.relMyJ, Y.relMzJ];
        (xe.some((Ae) => Ae) || ge.some((Ae) => Ae)) && Mt("segs", a, "releases", { i: xe, j: ge }), Y.hinges !== "None" && Mt("segs", a, "hinges", Y.hinges);
        const kt = [Y.LKx, Y.LKy, Y.LKz];
        kt.some((Ae) => Ae !== 0) && Mt("segs", a, "lineSprings", kt);
        const Re = [Y.qx, Y.qy, Y.qz];
        Re.some((Ae) => Ae !== 0) && Mt("segs", a, "distLoad", Re), Y.massPerM !== 0 && Mt("segs", a, "massPerM", Y.massPerM), oe(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (p) {
      const c = tt.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding(Y, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(Y, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(Y, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), tt.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(Y, "surfLoad", { label: "q", step: 0.1 }), tt.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        Mt("areas", t, "shellType", Y.shellType), Mt("areas", t, "thickness", Y.thickness), Mt("areas", t, "material", Y.material_shell), Y.surfLoad !== 0 && Mt("areas", t, "surfLoad", Y.surfLoad), oe(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (d) {
      const c = tt.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(f, "msg", { readonly: true, label: "" });
    }
    tt.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      ze.clear(), Ce();
    }), Bt.style.display = "block", Ro();
  };
  window.__hekatanRefreshPropsPane = Bo;
  let mn = null, Ln = false;
  x.addEventListener("pointerdown", (n) => {
    n.button === 2 && (mn = { x: n.clientX, y: n.clientY }, Ln = false);
  }), x.addEventListener("pointermove", (n) => {
    if (mn && n.buttons & 2 && !Ln) {
      const o = n.clientX - mn.x, a = n.clientY - mn.y;
      Math.hypot(o, a) > 8 && (Ln = true);
    }
  }), x.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = mn !== null && !Ln;
      mn = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (Ft ? Tn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), ze.size > 0 && (ze.clear(), Ce()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), oe(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : oe("\u238B Cancelado (click derecho)");
      }
    }
  }), x.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), x.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Dt = { x: n.clientX, y: n.clientY }, ln = false);
  }), x.addEventListener("pointermove", (n) => {
    if (Ft && n.buttons === 0) {
      const s = n.clientX < Ft.x;
      fn(Ft.x, Ft.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Dt) return;
    const o = n.clientX - Dt.x, a = n.clientY - Dt.y, t = Math.hypot(o, a);
    if (!ln && t < 8) return;
    ln = true;
    const r = n.clientX < Dt.x;
    fn(Dt.x, Dt.y, n.clientX, n.clientY, r);
  }), x.addEventListener("pointerup", (n) => {
    if (!Dt) return;
    if (!ln) {
      Dt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    io(Dt.x, Dt.y, n.clientX, n.clientY, o), Dt = null, ln = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const en = new st();
  en.visible = false, en.frustumCulled = false, y.add(en);
  const Xo = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, co = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; en.children.length; ) {
      const p = en.children.pop();
      (_b = (_a = p.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = p.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Xo[n] ?? 16777215, s = 0.05, l = new he().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    en.add(new Ot(l, new ft({ color: r, linewidth: 2 }))), en.position.set(0, 0, 0), en.visible = true;
  }, Un = () => {
    en.visible = false;
  }, Yo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let p = null;
    const d = (c, f, S, L) => {
      const R = Math.hypot(f - n, S - o, L - a);
      R > t || (!p || R < p.d) && (p = { type: c, x: f, y: S, z: L, d: R });
    };
    (r.node || r.end) && s.forEach((c) => {
      r.node && d("node", c[0], c[1], c[2]);
    });
    for (const c of l) if (!(c.length < 2)) for (let f = 0; f < c.length - 1; f++) {
      const S = s[c[f]], L = s[c[f + 1]];
      if (!(!S || !L) && (r.end && (d("end", S[0], S[1], S[2]), d("end", L[0], L[1], L[2])), r.mid && d("mid", (S[0] + L[0]) / 2, (S[1] + L[1]) / 2, (S[2] + L[2]) / 2), r.nea || r.per)) {
        const R = L[0] - S[0], Z = L[1] - S[1], E = L[2] - S[2], O = R * R + Z * Z + E * E;
        if (O < 1e-12) continue;
        const j = Math.max(0, Math.min(1, ((n - S[0]) * R + (o - S[1]) * Z + (a - S[2]) * E) / O)), ue = S[0] + j * R, Te = S[1] + j * Z, xe = S[2] + j * E;
        r.nea && d("nea", ue, Te, xe), r.per && d("per", ue, Te, xe);
      }
    }
    const g = window.__hekatanDrawingAuxLines, M = (g == null ? void 0 : g.rawVal) ?? (g == null ? void 0 : g.val) ?? g ?? [];
    for (const c of M) {
      if (c.length !== 6) continue;
      const f = [c[0], c[1], c[2]], S = [c[3], c[4], c[5]];
      if (r.end && (d("end", f[0], f[1], f[2]), d("end", S[0], S[1], S[2])), r.mid && d("mid", (f[0] + S[0]) / 2, (f[1] + S[1]) / 2, (f[2] + S[2]) / 2), r.nea || r.per) {
        const L = S[0] - f[0], R = S[1] - f[1], Z = S[2] - f[2], E = L * L + R * R + Z * Z;
        if (E < 1e-12) continue;
        const O = Math.max(0, Math.min(1, ((n - f[0]) * L + (o - f[1]) * R + (a - f[2]) * Z) / E)), j = f[0] + O * L, ue = f[1] + O * R, Te = f[2] + O * Z;
        r.nea && d("nea", j, ue, Te), r.per && d("per", j, ue, Te);
      }
    }
    return p ? { type: p.type, x: p.x, y: p.y, z: p.z } : null;
  };
  window.__hekatanOsnapCompute = Yo, window.__hekatanOsnapShow = co, window.__hekatanOsnapHide = Un;
  let Ee = [], Et = 0;
  const Mn = document.createElement("div");
  Mn.id = "hk-cad-status", Mn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", Mn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(Mn);
  const Do = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), q && n.push(`\u{1F512} LOCK ${q.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, oe = (n) => {
    const o = n + Do();
    Mn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    oe(o);
  }, window.__hekatanCadResetPending = () => {
    Ee = [], le = [], ee.visible = false, w(), oe("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const _n = [], sn = () => {
    var _a, _b;
    _n.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), _n.length > 100 && _n.shift();
  }, po = () => {
    var _a;
    const n = _n.pop();
    if (!n) {
      oe("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ee = [], ne.visible = false, Le.visible = false, $(), oe(`\u21B6 Undo \u2014 ${_n.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    w();
  };
  window.__hekatanPushUndo = sn, window.__hekatanUndo = po, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), po();
    }
  }, { capture: true });
  const uo = () => {
    if (Ee = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    q = null, He(), ne.visible = false, Le.visible = false, $(), oe("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), w();
  };
  window.__hekatanFinalizeDraw = uo;
  const fo = () => {
    Ee = [], le = [], ee.visible = false;
    let n = false;
    ze.size && (ze.clear(), Ce(), n = true), uo(), oe(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Acci\xF3n cancelada"), w();
  };
  window.__hekatanEscapeCancel = fo, window.__hekatanReplicateSelection = (n, o, a, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...ze], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], p = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), d = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), M = [];
    if (r.forEach((R) => {
      if (R.startsWith("pt:")) d.add(+R.slice(3));
      else if (R.startsWith("poly:")) {
        const Z = +R.slice(5);
        g.add(Z), (l[Z] || []).forEach((E) => d.add(E));
      } else if (R.startsWith("seg:")) {
        const Z = R.split(":"), E = +Z[1], O = +Z[2], j = l[E] || [], ue = j[O], Te = j[O + 1];
        ue != null && Te != null && (M.push([ue, Te]), d.add(ue), d.add(Te));
      }
    }), !d.size) return 0;
    sn();
    const c = [...s];
    let f = l.slice();
    f.length && f[f.length - 1].length === 0 && (f = f.slice(0, -1));
    const S = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], L = [...d];
    for (let R = 1; R <= t; R++) {
      const Z = n * R, E = o * R, O = a * R, j = /* @__PURE__ */ new Map();
      L.forEach((ue) => {
        j.set(ue, c.length), c.push([s[ue][0] + Z, s[ue][1] + E, s[ue][2] + O]);
      }), g.forEach((ue) => {
        const Te = l[ue].map((ge) => j.has(ge) ? j.get(ge) : ge), xe = f.length;
        f.push(Te), p.has(ue) && S.push(xe);
      }), M.forEach(([ue, Te]) => {
        f.push([j.get(ue), j.get(Te)]);
      });
    }
    f.push([]), e.points.val = c, e.polylines && (e.polylines.val = f), e.areas && (e.areas.val = S);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return w(), t;
  }, x.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    if (jt > 5) {
      jt = 0;
      return;
    }
    jt = 0;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(P, o);
    const a = G();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(u.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), p = a[0].point;
      if (!isFinite(p.x) || !isFinite(p.y) || !isFinite(p.z) || l > Math.max(s * 12, 300)) {
        oe("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
        return;
      }
    }
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new m(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], p = e.points.rawVal ?? [];
      if (l.length > 0) {
        const d = p[l[l.length - 1]];
        if (d) {
          const g = !!window.__hekatanOrthoMode;
          let M = q;
          if (!M && g) {
            const c = Math.abs(t.x - d[0]), f = Math.abs(t.y - d[1]), S = Math.abs(t.z - d[2]);
            M = c >= f && c >= S ? "x" : f >= S ? "y" : "z";
          }
          M === "x" ? t = new m(t.x, d[1], d[2]) : M === "y" ? t = new m(d[0], t.y, d[2]) : M === "z" && (t = new m(d[0], d[1], t.z));
        }
      }
    }
    if (Pe) t = Pe.clone(), oe(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new m(l.x, l.y, l.z), oe(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const p = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0;
        p && d > 0 && (t = new m(Math.round(t.x / d) * d, Math.round(t.y / d) * d, Math.round(t.z / d) * d));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (vt) {
        Ft && Tn();
        const { kind: s, a: l, b: p } = vt, d = p !== void 0 ? `${s}:${l}:${p}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || ze.clear(), ze.has(d) ? ze.delete(d) : ze.add(d), Ce(), oe(`\u2713 Seleccionados ${ze.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, p = n.clientY;
        Ft ? (io(Ft.x, Ft.y, l, p, s), Ft = null) : s || (Ft = { x: l, y: p }, oe("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), fn(l, p, l + 1, p + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], oe(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", p = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      oe(`\u2713 Eje "${p}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (Ye >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], p = Ye;
        if (p >= 0 && p < l.length) {
          sn();
          const d = l.slice(0, p).concat(l.slice(p + 1));
          s && typeof s == "object" && "val" in s ? s.val = d : window.__hekatanDrawingAuxLines = d, oe(`\u{1F5D1} L\xEDnea auxiliar #${p + 1} borrada`), Ye = -1, ke.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (ht >= 0) {
        const s = ht, l = pt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? ($t(s), oe(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (Ue(s, l), oe(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : ($t(s), oe(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else oe("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        oe("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ee, p = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const d = Math.abs(l[1] - s[1]), M = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : d < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], p, c, M), oe(`\u2713 C\xEDrculo dibujado en ${M.toUpperCase()} \u2014 r=${p.toFixed(2)}m, ${c} segmentos`), Ee = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        oe("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ee.length === 2) {
        oe("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, p] = Ee, d = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, p, d), oe(`\u2713 Arco dibujado \u2014 ${d} segmentos`), Ee = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        oe("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), oe(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        oe("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), oe(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      return;
    }
    if (r === "polyarea") {
      le.push([t.x, t.y, t.z]), ee.geometry.setFromPoints(le.map((s) => new m(s[0], s[1], s[2]))), ee.visible = le.length >= 1, oe(`\u25B0 \xC1rea libre \u2014 ${le.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), w();
      return;
    }
    if (r === "plane3") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length < 3) {
        oe(`\u25E3 Plano inclinado \u2014 punto ${Ee.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, p] = Ee, d = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, p);
      oe(d ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ee = [];
      return;
    }
    if (r === "col") {
      sn();
      const s = t.z, l = Et && Et > 0 ? Et : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const p = e.polylines.rawVal, d = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [d - 2, d - 1], []], Et = 0, oe(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        oe("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Ee, p = Et && Et > 0 ? Et : 3;
      sn();
      const d = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + p], [s[0], s[1], s[2] + p]];
      const g = e.polylines.rawVal;
      if (g.length - 1, e.polylines.val = [...g.slice(0, -1), ...g[g.length - 1].length > 0 ? [g[g.length - 1]] : [], [d, d + 1, d + 2, d + 3, d], []], e.areas) {
        const M = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, M];
      }
      oe(`\u25A5 Pared Q4 creada \u2014 h=${p.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ee = [], Et = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      sn();
      const s = Et && Et > 0 ? Et : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const p = e.polylines.rawVal, d = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [d - 2, d - 1], []], Et = 0, oe(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = Be(t.x, t.y, t.z, s);
      if (!l) {
        oe("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const p = e.polylines.rawVal, d = e.points.rawVal, g = p[l.polyIdx], M = d[g[l.segIdx]], c = d[g[l.segIdx + 1]];
      if (!M || !c) {
        oe("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const f = Et && Et > 0 ? Et : 3;
      sn();
      const S = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [M[0], M[1], M[2]], [c[0], c[1], c[2]], [c[0], c[1], c[2] + f], [M[0], M[1], M[2] + f]];
      const L = e.polylines.rawVal;
      if (e.polylines.val = [...L.slice(0, -1), ...L[L.length - 1].length > 0 ? [L[L.length - 1]] : [], [S, S + 1, S + 2, S + 3, S], []], e.areas) {
        const R = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, R];
      }
      Et = 0, oe(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${f.toFixed(2)}m`);
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
      oe(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        oe("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Ee, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const f = p.rawVal ?? p.val ?? [];
        p.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const d = l[0] - s[0], g = l[1] - s[1], M = l[2] - s[2], c = Math.sqrt(d * d + g * g + M * M);
      oe(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Ee = [];
      return;
    }
    if (r === "extend") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        oe("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ee, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const d = p.rawVal ?? p.val ?? [];
        p.val = [...d, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      oe("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ee = [];
      return;
    }
    if (r === "chaflan") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        oe("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee, p = window.__hekatanChaflanR ?? 1, d = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, p, d, 6);
      const g = Math.abs(l[0] - s[0]).toFixed(1), M = Math.abs(l[1] - s[1]).toFixed(1);
      oe(`\u2713 Losa con chaflanes dibujada \u2014 ${g}\xD7${M}m, r=${p}m, ${d} seg/chafl\xE1n`), Ee = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (T = false, sn(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, p = s[l] ?? [];
      if (r === "line" && p.length === 2) {
        e.polylines.val = [...s, []], oe("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && p.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...p, p[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), oe("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") oe(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") oe("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") oe("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      oe(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), x.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && le.length >= 3) {
      n.preventDefault();
      const a = qe();
      oe(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), x.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(P, o);
    const a = G();
    if (ye.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], p = l[l.length - 1] ?? [], d = e.points.rawVal ?? [];
        if (p.length > 0) {
          const g = d[p[p.length - 1]];
          if (g) {
            const M = !!window.__hekatanOrthoMode;
            let c = q;
            if (!c && M) {
              const f = Math.abs(t.x - g[0]), S = Math.abs(t.y - g[1]), L = Math.abs(t.z - g[2]);
              c = f >= S && f >= L ? "x" : S >= L ? "y" : "z";
            }
            c === "x" ? t.set(t.x, g[1], g[2]) : c === "y" ? t.set(g[0], t.y, g[2]) : c === "z" && t.set(g[0], g[1], t.z);
          }
        }
      }
      const r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, r);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const l = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0.5;
        l && p > 0 && (t.x = Math.round(t.x / p) * p, t.y = Math.round(t.y / p) * p, t.z = Math.round(t.z / p) * p);
      }
      ye.geometry.setAttribute("position", new Lt(t.toArray(), 3));
    }
    w();
  }), x.addEventListener("pointermove", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(P, o);
    let a = false;
    const t = _.intersectObject(me), r = G();
    if (t.length && r.length) {
      const s = new m(...e.points.rawVal[t[0].index]), l = new m(...r[0].point), p = s.sub(l), d = (_a = r[0].face) == null ? void 0 : _a.normal;
      d.transformDirection(H.matrixWorld), Math.abs(p.dot(d)) < 1e-4 && (a = true);
    }
    ye.visible = !a;
  });
  let Kn = false, Hn;
  x.addEventListener("pointermove", (n) => {
    var _a;
    if (!jt) return;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(P, o);
    let a = false;
    const t = _.intersectObject(me), r = G();
    if (t.length && r.length) {
      const l = new m(...e.points.rawVal[t[0].index]), p = new m(...r[0].point), d = l.sub(p), g = (_a = r[0].face) == null ? void 0 : _a.normal;
      g.transformDirection(H.matrixWorld), Math.abs(d.dot(g)) < 1e-4 && (a = true);
    }
    if (a && jt < 5 && (Kn = true, u.enabled = false, Hn = t[0].index), !Kn || jt % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Hn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new m(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Hn] = l.toArray();
    }
    e.points.val = s;
  }), x.addEventListener("pointerup", () => {
    u.enabled = true, Kn = false;
  }), x.addEventListener("contextmenu", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(P, o);
    let a = false;
    const t = _.intersectObject(me), r = G();
    if (t.length && r.length) {
      const p = new m(...e.points.rawVal[t[0].index]), d = new m(...r[0].point), g = p.sub(d), M = (_a = r[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(H.matrixWorld), Math.abs(g.dot(M)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((p) => p.filter((d) => d !== t[0].index)).map((p) => p.map((d) => d > t[0].index ? d - 1 : d)).filter((p) => p.length);
    l.push([]), e.polylines.val = l;
  });
}
function _s(e, i, y) {
  const k = Math.round(14.999999999999998), v = { position: e.position.clone(), quaternion: e.quaternion.clone() }, x = setInterval(_, 1e3 / 30);
  let w = 0;
  function _() {
    w++;
    const P = w / k;
    e.position.lerpVectors(v.position, i.position, P), e.quaternion.slerpQuaternions(v.quaternion, i.quaternion, P), y && y(), w == k && clearInterval(x);
  }
}
class $o {
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
    this.map = jn[i] || jn.rainbow, this.n = y;
    const h = 1 / this.n, u = new Jt(), k = new Jt();
    this.lut.length = 0, this.lut.push(new Jt(this.map[0][1]));
    for (let v = 1; v < y; v++) {
      const x = v * h;
      for (let w = 0; w < this.map.length - 1; w++) if (x > this.map[w][0] && x <= this.map[w + 1][0]) {
        const _ = this.map[w][0], P = this.map[w + 1][0];
        u.setHex(this.map[w][1], In), k.setHex(this.map[w + 1][1], In);
        const b = new Jt().lerpColors(u, k, (x - _) / (P - _));
        this.lut.push(b);
      }
    }
    return this.lut.push(new Jt(this.map[this.map.length - 1][1])), this;
  }
  copy(i) {
    return this.lut = i.lut, this.map = i.map, this.n = i.n, this.minV = i.minV, this.maxV = i.maxV, this;
  }
  getColor(i) {
    i = Go.clamp(i, this.minV, this.maxV), i = (i - this.minV) / (this.maxV - this.minV);
    const y = Math.round(i * this.n);
    return this.lut[y];
  }
  addColorMap(i, y) {
    return jn[i] = y, this;
  }
  createCanvas() {
    const i = document.createElement("canvas");
    return i.width = 1, i.height = this.n, this.updateCanvas(i), i;
  }
  updateCanvas(i) {
    const y = i.getContext("2d", { alpha: false }), h = y.getImageData(0, 0, 1, this.n), u = h.data;
    let k = 0;
    const v = 1 / this.n, x = new Jt(), w = new Jt(), _ = new Jt();
    for (let P = 1; P >= 0; P -= v) for (let b = this.map.length - 1; b >= 0; b--) if (P < this.map[b][0] && P >= this.map[b - 1][0]) {
      const H = this.map[b - 1][0], se = this.map[b][0];
      x.setHex(this.map[b - 1][1], In), w.setHex(this.map[b][1], In), _.lerpColors(x, w, (P - H) / (se - H)), u[k * 4] = Math.round(_.r * 255), u[k * 4 + 1] = Math.round(_.g * 255), u[k * 4 + 2] = Math.round(_.b * 255), u[k * 4 + 3] = 255, k += 1;
    }
    return y.putImageData(h, 0, 0), i;
  }
}
const jn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, zn = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function ks(e) {
  e = Math.max(0, Math.min(1, e));
  for (let y = 0; y < zn.length - 1; y++) {
    const [h, u, k, v] = zn[y], [x, w, _, P] = zn[y + 1];
    if (e <= x) {
      const b = (e - h) / (x - h);
      return [u + (w - u) * b, k + (_ - k) * b, v + (P - v) * b];
    }
  }
  const i = zn[zn.length - 1];
  return [i[1], i[2], i[3]];
}
function Ss() {
  const i = new Uint8Array(1024);
  for (let h = 0; h < 256; h++) {
    const u = h / 255, [k, v, x] = ks(u);
    i[h * 4 + 0] = k, i[h * 4 + 1] = v, i[h * 4 + 2] = x, i[h * 4 + 3] = 255;
  }
  const y = new Qo(i, 256, 1, Oo);
  return y.minFilter = bo, y.magFilter = bo, y.wrapS = Mo, y.wrapT = Mo, y.needsUpdate = true, y;
}
function Cs(e, i, y) {
  new $o();
  const h = Ss(), u = new qo({ uniforms: { cmap: { value: h }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Xt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), k = new je(new he(), u);
  return k.renderOrder = -1, k.frustumCulled = false, k.userData.isShellArea = true, k.name = "__hekatan_shell_colormap", I.derive(() => {
    k.geometry.setAttribute("position", new Lt(e.val.flat(), 3));
    const v = [];
    for (const C of i.val) C.length === 3 ? v.push(C[0], C[1], C[2]) : C.length === 4 && (v.push(C[0], C[1], C[2]), v.push(C[0], C[2], C[3]));
    k.geometry.setIndex(new Jo(v, 1));
    const x = y.val.filter((C) => Number.isFinite(C));
    let w, _;
    const P = ao.val;
    if (P ? (_ = P[0], w = P[1]) : (w = x.length ? Math.max(...x) : 1, _ = x.length ? Math.min(...x) : 0, _ >= 0 && w > 0 && (_ = 0)), w === _) {
      const C = Math.max(Math.abs(w) * 1e-6, 1e-9);
      w += C, _ -= C;
    }
    const b = P && P[0] > P[1], H = Math.min(_, w), se = Math.max(_, w), ae = se - H, pe = new Float32Array(y.val.length);
    for (let C = 0; C < y.val.length; C++) {
      const G = y.val[C];
      if (!Number.isFinite(G)) {
        pe[C] = -1;
        continue;
      }
      const ye = ((b ? se + H - G : G) - H) / ae;
      pe[C] = Math.max(0, Math.min(1, ye));
    }
    k.geometry.setAttribute("scalar", new dt(pe, 1));
  }), k;
}
function Ps(e, i, y, h) {
  const u = Cs(y, e.elements, h);
  return I.derive(() => {
    u.visible = i.shellResults.val != "none";
  }), u;
}
const zs = 6, eo = 10, Fs = 0.012;
function As(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Es(e, i, y, h) {
  if (!y && !h) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const k = y[e];
    if (k && k.has(i)) return k.get(i);
  }
  return null;
}
function Vs(e, i, y, h) {
  const u = new st(), k = new $o();
  k.setColorMap("rainbow");
  const v = new Jt(), x = I.state([]);
  return I.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const w = y.val, _ = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = As(i.frameResults.val);
    if (u.children.forEach((z) => {
      z.geometry && z.geometry.dispose(), z.material && z.material.dispose();
    }), u.clear(), !P || _.length === 0 || w.length === 0) {
      x.val = [];
      return;
    }
    const b = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, H = (_c = e.deformOutputs) == null ? void 0 : _c.val, se = [], ae = [];
    for (let z = 0; z < _.length; z++) {
      if (_[z].length !== 2) continue;
      const te = Es(P, z, b, H);
      te && (se.push(te[0], te[1]), ae.push({ idx: z, vals: te }));
    }
    if (se.length === 0) {
      x.val = [];
      return;
    }
    const pe = Math.min(...se), C = Math.max(...se);
    k.setMin(pe), k.setMax(C), x.val = se;
    const G = [1 / 0, 1 / 0, 1 / 0], me = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of w) for (let B = 0; B < 3; B++) G[B] = Math.min(G[B], z[B]), me[B] = Math.max(me[B], z[B]);
    const _e = Math.max(me[0] - G[0], me[1] - G[1], me[2] - G[2], 1) * Fs, K = [], D = [], X = [];
    let T = 0;
    for (const { idx: z, vals: B } of ae) {
      const te = _[z], J = w[te[0]], W = w[te[1]];
      if (!J || !W) continue;
      const F = new m(W[0] - J[0], W[1] - J[1], W[2] - J[2]), ne = F.length();
      if (ne < 1e-10) continue;
      F.normalize();
      const ee = Math.abs(F.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), le = new m().crossVectors(F, ee).normalize(), re = new m().crossVectors(F, le).normalize(), Fe = eo + 1, de = zs;
      for (let ce = 0; ce < Fe; ce++) {
        const Xe = ce / eo, Le = J[0] + F.x * ne * Xe, _t = J[1] + F.y * ne * Xe, N = J[2] + F.z * ne * Xe, ie = B[0] + (B[1] - B[0]) * Xe, fe = k.getColor(ie) ?? new Jt(0, 0, 0);
        v.copy(fe).convertSRGBToLinear();
        for (let we = 0; we < de; we++) {
          const $e = we / de * Math.PI * 2, Ke = Math.cos($e), Je = Math.sin($e);
          K.push(Le + (le.x * Ke + re.x * Je) * _e, _t + (le.y * Ke + re.y * Je) * _e, N + (le.z * Ke + re.z * Je) * _e), D.push(v.r, v.g, v.b);
        }
      }
      for (let ce = 0; ce < eo; ce++) for (let Xe = 0; Xe < de; Xe++) {
        const Le = (Xe + 1) % de, _t = T + ce * de + Xe, N = T + ce * de + Le, ie = T + (ce + 1) * de + Xe, fe = T + (ce + 1) * de + Le;
        X.push(_t, N, fe), X.push(_t, fe, ie);
      }
      T += Fe * de;
    }
    if (K.length === 0) return;
    const A = new he();
    A.setAttribute("position", new Lt(K, 3)), A.setAttribute("color", new Lt(D, 3)), A.setIndex(X), A.computeVertexNormals();
    const V = new at({ vertexColors: true, side: Xt }), $ = new je(A, V);
    $.frustumCulled = false, u.add($);
  }), u.__colorMapValues = x, u;
}
function Ts() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Ls = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Is = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, $s = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function xt(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Rs = 16755200, zo = 56831, Bs = 56831, Xs = 56831, Bn = 65382;
function Ys(e) {
  const i = new st();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const y = new xn(1, 16, 16), h = new at({ color: Rs, transparent: true, opacity: 0.85, depthTest: false }), u = new je(y, h);
  u.visible = false, u.renderOrder = 100, i.add(u);
  const k = new he(), v = new ft({ color: zo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), x = new Ot(k, v);
  x.visible = false, x.renderOrder = 100, i.add(x);
  const w = new at({ color: zo, transparent: true, opacity: 0.7, depthTest: false }), _ = new je(new _o(1, 1, 1, 12), w);
  _.visible = false, _.renderOrder = 100, i.add(_);
  const P = new he(), b = new at({ color: Bs, transparent: true, opacity: 0.45, side: Xt, depthTest: false }), H = new je(P, b);
  H.visible = false, H.renderOrder = 100, i.add(H);
  const se = new he(), ae = new ft({ color: Xs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), pe = new Ot(se, ae);
  pe.visible = false, pe.renderOrder = 100, i.add(pe);
  const C = new at({ color: Bn, transparent: true, opacity: 0.95, depthTest: false }), G = new je(y, C);
  G.visible = false, G.renderOrder = 101, i.add(G);
  const me = new at({ color: Bn, transparent: true, opacity: 0.85, depthTest: false }), ye = new je(new _o(1, 1, 1, 12), me);
  ye.visible = false, ye.renderOrder = 101, i.add(ye);
  const _e = new he(), K = new at({ color: Bn, transparent: true, opacity: 0.55, side: Xt, depthTest: false }), D = new je(_e, K);
  D.visible = false, D.renderOrder = 101, i.add(D);
  const X = new he(), T = new ft({ color: Bn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), A = new Ot(X, T);
  A.visible = false, A.renderOrder = 101, i.add(A);
  let V = null;
  const $ = document.createElement("div");
  Object.assign($.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), $.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild($);
  }, 0);
  function z(U) {
    const q = e.derivedNodes.rawVal;
    return !q || U < 0 || U >= q.length ? null : new m(q[U][0], q[U][1], q[U][2]);
  }
  function B(U, q) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2;
    const Pe = e.getActiveCamera();
    if (!Pe || !e.mesh) return null;
    const Q = e.rendererElm.getBoundingClientRect(), He = U - Q.left, Ne = q - Q.top, Oe = e.derivedNodes.rawVal, Ve = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Oe || !Ve) return null;
    const We = /* @__PURE__ */ new Map(), ke = (De) => {
      if (We.has(De)) return We.get(De);
      const Ce = z(De);
      if (!Ce) return We.set(De, null), null;
      const ve = Ce.clone().project(Pe), Be = (ve.x * 0.5 + 0.5) * Q.width, be = (-ve.y * 0.5 + 0.5) * Q.height, lt = { x: Be, y: be, z: ve.z };
      return We.set(De, lt), lt;
    }, ht = /* @__PURE__ */ new Set();
    for (const De of Ve) if (De) for (const Ce of De) ht.add(Ce);
    const pt = 8;
    let Ye = -1, ze = pt;
    for (let De = 0; De < Oe.length; De++) {
      if (!ht.has(De)) continue;
      const Ce = ke(De);
      if (!Ce || Ce.z < -1 || Ce.z > 1) continue;
      const ve = Ce.x - He, Be = Ce.y - Ne, be = Math.sqrt(ve * ve + Be * Be);
      be < ze && (ze = be, Ye = De);
    }
    const Se = Ts(), Ge = Is[Se.dispUnit] ?? 1e3, it = Ls[Se.forceUnit] ?? 1;
    if (Ye >= 0) {
      const De = Oe[Ye];
      let Ce = `Nodo ${Ye}
(${De[0].toFixed(3)}, ${De[1].toFixed(3)}, ${De[2].toFixed(3)})`;
      const ve = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (ve == null ? void 0 : ve.deformations) {
        const Be = ve.deformations.get(Ye);
        if (Be && (Ce += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Ce += `
Ux = ${xt(Be[0] * Ge, 3)} ${Se.dispUnit}`, Ce += `
Uy = ${xt(Be[1] * Ge, 3)} ${Se.dispUnit}`, Ce += `
Uz = ${xt(Be[2] * Ge, 3)} ${Se.dispUnit}`, (Math.abs(Be[3]) > 1e-9 || Math.abs(Be[4]) > 1e-9 || Math.abs(Be[5]) > 1e-9) && (Ce += `
Rx = ${xt(Be[3] * 1e3, 3)} mrad`, Ce += `
Ry = ${xt(Be[4] * 1e3, 3)} mrad`, Ce += `
Rz = ${xt(Be[5] * 1e3, 3)} mrad`)), ve.reactions) {
          const be = ve.reactions.get(Ye);
          be && (Math.abs(be[0]) > 1e-9 || Math.abs(be[1]) > 1e-9 || Math.abs(be[2]) > 1e-9 || Math.abs(be[3]) > 1e-6 || Math.abs(be[4]) > 1e-6 || Math.abs(be[5]) > 1e-6) && (Ce += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Ce += `
Fx = ${xt(be[0] * it)} ${Se.forceUnit}`, Ce += `
Fy = ${xt(be[1] * it)} ${Se.forceUnit}`, Ce += `
Fz = ${xt(be[2] * it)} ${Se.forceUnit}`, (Math.abs(be[3]) > 1e-6 || Math.abs(be[4]) > 1e-6 || Math.abs(be[5]) > 1e-6) && (Ce += `
Mx = ${xt(be[3] * it)} ${Se.forceUnit}\xB7m`, Ce += `
My = ${xt(be[4] * it)} ${Se.forceUnit}\xB7m`, Ce += `
Mz = ${xt(be[5] * it)} ${Se.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Ye, info: Ce };
    }
    const pn = 5;
    let Ze = -1, Wt = pn, vt = "frame";
    for (let De = 0; De < Ve.length; De++) {
      const Ce = Ve[De];
      if (!(!Ce || Ce.length < 2)) {
        if (Ce.length === 2) {
          const ve = ke(Ce[0]), Be = ke(Ce[1]);
          if (!ve || !Be || ve.z < -1 || ve.z > 1 || Be.z < -1 || Be.z > 1) continue;
          const be = Ds(He, Ne, ve.x, ve.y, Be.x, Be.y);
          be < Wt && (Wt = be, Ze = De, vt = "frame");
        } else if (Ce.length === 3 || Ce.length === 4) {
          const ve = [];
          let Be = true;
          for (const be of Ce) {
            const lt = ke(be);
            if (!lt || lt.z < -1 || lt.z > 1) {
              Be = false;
              break;
            }
            ve.push(lt);
          }
          if (!Be) continue;
          if (Ns(He, Ne, ve)) {
            const lt = ve.reduce((ut, $t) => ut + $t.z, 0) / ve.length * 1e-3;
            lt < Wt && (Wt = lt, Ze = De, vt = "shell");
          }
        } else if (Ce.length === 8) {
          const ve = [];
          let Be = true;
          for (const Ue of Ce) {
            const qe = ke(Ue);
            if (!qe || qe.z < -1 || qe.z > 1) {
              Be = false;
              break;
            }
            ve.push(qe);
          }
          if (!Be) continue;
          const be = Math.min(...ve.map((Ue) => Ue.x)), lt = Math.max(...ve.map((Ue) => Ue.x)), ut = Math.min(...ve.map((Ue) => Ue.y)), $t = Math.max(...ve.map((Ue) => Ue.y));
          if (He >= be && He <= lt && Ne >= ut && Ne <= $t) {
            const qe = ve.reduce((et, rt) => et + rt.z, 0) / ve.length * 1e-3;
            qe < Wt && (Wt = qe, Ze = De, vt = "solid");
          }
        }
      }
    }
    if (Ze >= 0) {
      const De = Ve[Ze];
      let ve = `${vt === "frame" ? "Frame" : vt === "shell" ? "Shell" : "Solid"} ${Ze}`;
      const Be = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, be = (_g = (_f = Be == null ? void 0 : Be.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Ze);
      if (be) {
        be.name && (ve += `
  \u{1F4CB} ${be.name}`), be.shape && (ve += `
  Shape: ${be.shape}`);
        const lt = /concrete|hormig|rect.*sólida/i.test(be.shape || ""), ut = lt ? 100 : 1e3, $t = lt ? "cm" : "mm", Ue = (et) => {
          const rt = et * ut;
          return Math.abs(rt - Math.round(rt)) < 0.05 ? `${Math.round(rt)}` : `${rt.toFixed(1)}`;
        }, qe = [];
        if (be.D != null && qe.push(`D=${Ue(be.D)}`), be.B != null && qe.push(`B=${Ue(be.B)}`), be.TF != null && qe.push(`TF=${Ue(be.TF)}`), be.TW != null && qe.push(`TW=${Ue(be.TW)}`), be.t != null && qe.push(`t=${Ue(be.t)}`), qe.length && (ve += `
  Dim: ${qe.join(" ")} ${$t}`), be.material) {
          let et = be.material;
          be.fillMaterial && (et += ` + FILL "${be.fillMaterial}"`), ve += `
  Mat: ${et}`;
        }
      } else {
        const lt = (_i = (_h = Be == null ? void 0 : Be.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Ze), ut = (_k = (_j = Be == null ? void 0 : Be.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Ze);
        lt ? (ve += `
  ${lt}`, ut && !lt.includes(ut) && (ve += `  (${ut})`)) : ut && (ve += `
  Material: ${ut}`);
      }
      if (ve += `
nodos: [${De.join(", ")}]`, vt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const lt = e.mesh.analyzeOutputs.rawVal, ut = $s[Se.stressUnit] ?? 1, $t = [["bendingXX", "Mxx", it, `${Se.forceUnit}\xB7m/m`], ["bendingYY", "Myy", it, `${Se.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", it, `${Se.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", it, `${Se.forceUnit}/m`], ["membraneYY", "Nyy", it, `${Se.forceUnit}/m`], ["membraneXY", "Nxy", it, `${Se.forceUnit}/m`], ["shearX", "Qx", it, `${Se.forceUnit}/m`], ["shearY", "Qy", it, `${Se.forceUnit}/m`], ["vonMises", "\u03C3VM", ut, Se.stressUnit], ["pressure", "p", ut, Se.stressUnit]], Ue = [];
        for (const [qe, et, rt, Nt] of $t) {
          const Zt = lt == null ? void 0 : lt[qe];
          if (Zt && Zt instanceof Map) {
            const Gt = Zt.get(Ze);
            if (Gt != null) {
              if (typeof Gt == "number") Ue.push(`${et} = ${xt(Gt * rt, 3)} ${Nt}`);
              else if (Array.isArray(Gt)) {
                let wt = Gt[0];
                for (const on of Gt) Math.abs(on) > Math.abs(wt) && (wt = on);
                Ue.push(`${et} = ${xt(wt * rt, 3)} ${Nt}`);
              }
            }
          }
        }
        Ue.length > 0 && (ve += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Ue.slice(0, 8).join(`
`));
      }
      if (vt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const lt = e.mesh.deformOutputs.rawVal, ut = e.mesh.elementInputs.rawVal, $t = lt == null ? void 0 : lt.deformations;
        if ($t && De.length === 2) {
          const Ue = $t.get(De[0]), qe = $t.get(De[1]), et = Oe[De[0]], rt = Oe[De[1]];
          if (Ue && qe && et && rt) {
            const Nt = rt[0] - et[0], Zt = rt[1] - et[1], Gt = rt[2] - et[2], wt = Math.sqrt(Nt * Nt + Zt * Zt + Gt * Gt);
            if (wt > 1e-9) {
              const on = Nt / wt, yt = Zt / wt, An = Gt / wt, gn = (qe[0] - Ue[0]) * on + (qe[1] - Ue[1]) * yt + (qe[2] - Ue[2]) * An, Qt = ((_n = ut.elasticities) == null ? void 0 : _n.get(Ze)) ?? 0, vn = ((_o2 = ut.areas) == null ? void 0 : _o2.get(Ze)) ?? 0, En = ((_p = ut.momentsOfInertiaY) == null ? void 0 : _p.get(Ze)) ?? 0, Zn = ((_q = ut.momentsOfInertiaZ) == null ? void 0 : _q.get(Ze)) ?? 0, bn = ((_r = ut.torsionalConstants) == null ? void 0 : _r.get(Ze)) ?? 0, Vn = ((_s2 = ut.shearModuli) == null ? void 0 : _s2.get(Ze)) ?? Qt / 2.6, un = Qt * vn * (gn / wt), jt = (qe[3] - Ue[3]) * on + (qe[4] - Ue[4]) * yt + (qe[5] - Ue[5]) * An, bt = Vn * bn * (jt / wt), Dt = qe[4] - Ue[4], ln = qe[5] - Ue[5], Ft = Qt * En * Dt / wt, fn = Qt * Zn * ln / wt;
              ve += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, ve += `
L = ${xt(wt, 3)} m`, ve += `
\u0394L = ${xt(gn * Ge, 3)} ${Se.dispUnit}`, ve += `
\u03B5 = ${xt(gn / wt, 6)}`, Math.abs(un) > 1e-6 && (ve += `
N \u2248 ${xt(un * it)} ${Se.forceUnit}`), Math.abs(bt) > 1e-6 && (ve += `
T \u2248 ${xt(bt * it)} ${Se.forceUnit}\xB7m`), Math.abs(Ft) > 1e-6 && (ve += `
My \u2248 ${xt(Ft * it)} ${Se.forceUnit}\xB7m`), Math.abs(fn) > 1e-6 && (ve += `
Mz \u2248 ${xt(fn * it)} ${Se.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: vt, idx: Ze, info: ve };
    }
    return null;
  }
  function te(U, q, Pe) {
    var _a, _b, _c;
    if (u.visible = false, x.visible = false, _.visible = false, H.visible = false, pe.visible = false, !U || !e.mesh) {
      $.style.display = "none", e.render();
      return;
    }
    const Q = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (U.type === "node") {
      const Ve = z(U.idx);
      if (Ve) {
        const We = e.derivedNodes.rawVal ?? [];
        let ke = 1;
        if (We.length >= 2) {
          let Ye = [1 / 0, 1 / 0, 1 / 0], ze = [-1 / 0, -1 / 0, -1 / 0];
          for (const Se of We) for (let Ge = 0; Ge < 3; Ge++) Se[Ge] < Ye[Ge] && (Ye[Ge] = Se[Ge]), Se[Ge] > ze[Ge] && (ze[Ge] = Se[Ge]);
          ke = Math.max(ze[0] - Ye[0], ze[1] - Ye[1], ze[2] - Ye[2], 0.1);
        }
        const ht = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, pt = 0.015 * ke * ht;
        u.position.copy(Ve), u.scale.setScalar(pt), u.visible = true;
      }
    } else if (U.type === "frame" && Q) {
      const Ve = Q[U.idx], We = z(Ve[0]), ke = z(Ve[1]);
      if (We && ke) {
        const ht = We.clone().add(ke).multiplyScalar(0.5), pt = ke.clone().sub(We), Ye = pt.length(), ze = e.getActiveCamera();
        let Se;
        if (ze.isOrthographicCamera) {
          const Ze = ze;
          Se = (Ze.top - Ze.bottom) / Ze.zoom * 35e-4;
        } else Se = ze.position.distanceTo(ht) * 35e-4;
        _.position.copy(ht);
        const Ge = new m(0, 1, 0), it = Ge.clone().cross(pt).normalize(), pn = Ge.angleTo(pt);
        _.quaternion.setFromAxisAngle(it, pn), _.scale.set(Se, Ye, Se), _.visible = true;
      }
    } else if (U.type === "shell" && Q) {
      const Ve = Q[U.idx], We = [], ke = [];
      for (const ht of Ve) {
        const pt = z(ht);
        if (!pt) return;
        We.push(pt.x, pt.y, pt.z);
      }
      Ve.length === 4 ? ke.push(0, 1, 2, 0, 2, 3) : Ve.length === 3 && ke.push(0, 1, 2), P.setAttribute("position", new Lt(We, 3)), P.setIndex(ke), P.computeVertexNormals(), H.visible = true;
    } else if (U.type === "solid" && Q) {
      const Ve = Q[U.idx], We = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], ke = [];
      for (const [ht, pt] of We) {
        const Ye = z(Ve[ht]), ze = z(Ve[pt]);
        Ye && ze && ke.push(Ye.x, Ye.y, Ye.z, ze.x, ze.y, ze.z);
      }
      se.setAttribute("position", new Lt(ke, 3)), pe.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      $.style.display = "none", e.render();
      return;
    }
    $.textContent = U.info, $.style.whiteSpace = "pre-line", $.style.display = "block";
    const Ne = e.rendererElm.getBoundingClientRect(), Oe = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ne;
    $.style.left = `${q - Oe.left}px`, $.style.top = `${Pe - Oe.top}px`, e.render();
  }
  let J = "", W = 0, F = 0;
  const ne = window.__hekatanHoverDebug ?? false, ee = (U) => {
    W && cancelAnimationFrame(W), W = requestAnimationFrame(() => {
      var _a, _b, _c;
      const q = B(U.clientX, U.clientY);
      if (ne && F < 5) {
        const Q = e.derivedNodes.rawVal, He = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${U.clientX}, ${U.clientY}) nodes=${(Q == null ? void 0 : Q.length) ?? 0} elems=${(He == null ? void 0 : He.length) ?? 0} hover=`, q), F++;
      }
      const Pe = q ? `${q.type}:${q.idx}` : "";
      if (Pe !== J) J = Pe, te(q, U.clientX, U.clientY);
      else if (q) {
        const Q = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        $.style.left = `${U.clientX - Q.left}px`, $.style.top = `${U.clientY - Q.top}px`;
      }
    });
  };
  let le = null;
  const re = () => {
    J = "", u.visible = false, x.visible = false, _.visible = false, H.visible = false, pe.visible = false, $.style.display = "none", e.render();
  }, Fe = (U) => {
    const q = e.rendererElm.getBoundingClientRect(), Pe = U.clientX - q.left, Q = U.clientY - q.top;
    (Pe < -2 || Q < -2 || Pe > q.width + 2 || Q > q.height + 2) && (le && clearTimeout(le), le = window.setTimeout(re, 200));
  }, de = () => {
    le && (clearTimeout(le), le = null);
  };
  e.rendererElm.addEventListener("pointermove", ee), e.rendererElm.addEventListener("pointerleave", Fe), e.rendererElm.addEventListener("pointerenter", de);
  const ce = document.createElement("div");
  Object.assign(ce.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), ce.classList.add("hekatan-context-menu");
  let Xe = null;
  const Le = document.createElement("div");
  Object.assign(Le.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const _t = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], N = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], ie = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], fe = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], we = (U, q, Pe) => {
    const Q = document.createElement("div");
    return Q.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, Q.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${U}</span><span>${q}</span>`, Q.addEventListener("mouseenter", () => {
      Q.style.background = "rgba(100, 160, 255, 0.22)";
    }), Q.addEventListener("mouseleave", () => {
      Q.style.background = "transparent";
    }), Q.addEventListener("click", (He) => {
      He.stopPropagation();
      const Ne = Xe;
      gt(), Ne && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${Pe}`, { detail: { type: Ne.type, idx: Ne.idx, subAction: Pe } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ne.type, idx: Ne.idx, subAction: Pe } })));
    }), Q;
  };
  function $e(U) {
    Le.innerHTML = "";
    const q = U === "frame" ? _t : U === "node" ? N : U === "shell" ? ie : fe, Pe = document.createElement("div");
    Pe.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", Pe.textContent = `Asignar a ${U.toUpperCase()} #${(Xe == null ? void 0 : Xe.idx) ?? "?"}`, Le.appendChild(Pe);
    for (const Q of q) Le.appendChild(we(Q.icon, Q.label, Q.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Le);
  }, 0);
  function Ke(U, q) {
    var _a;
    if (!Xe) return;
    $e(Xe.type);
    const Pe = ce.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Le.style.left = `${U + Pe.width}px`, Le.style.top = `${q}px`, Le.style.display = "block", setTimeout(() => {
      const Q = Le.getBoundingClientRect();
      Q.right > window.innerWidth - 10 && (Le.style.left = `${U - Q.width}px`);
    }, 0);
  }
  function Je() {
    Le.style.display = "none";
  }
  const nt = (U, q, Pe, Q) => {
    const He = document.createElement("div");
    He.style.cssText = `
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.1s;
      justify-content: space-between;
    `;
    const Ne = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${U}</span><span>${q}</span></span>`, Oe = Pe ? '<span style="color:#888;">\u25B8</span>' : "";
    return He.innerHTML = Ne + Oe, He.addEventListener("mouseenter", () => {
      if (He.style.background = "rgba(100, 160, 255, 0.18)", Pe) {
        const Ve = parseFloat(ce.style.left || "0"), We = parseFloat(ce.style.top || "0");
        Ke(Ve, We);
      } else Je();
    }), He.addEventListener("mouseleave", () => {
      He.style.background = "transparent";
    }), He.addEventListener("click", (Ve) => {
      if (Ve.stopPropagation(), Pe) return;
      const We = Xe;
      gt(), Q(We);
    }), He;
  }, Ht = nt("\u{1F4DD}", "Asignar", true, () => {
  }), mt = nt("\u2139", "Ver informaci\xF3n", false, (U) => {
    U && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: U.type, idx: U.idx } }));
  });
  mt.addEventListener("mouseenter", () => {
    Je();
  }), ce.appendChild(Ht), ce.appendChild(mt), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(ce);
  }, 0);
  function zt(U, q, Pe) {
    var _a, _b;
    Xe = Pe;
    const Q = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    ce.style.left = `${U - Q.left}px`, ce.style.top = `${q - Q.top}px`, ce.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function gt() {
    ce.style.display = "none", Je(), Xe = null;
  }
  e.rendererElm.addEventListener("pointerdown", (U) => {
    if (U.button !== 2) return;
    const q = B(U.clientX, U.clientY);
    window.__hekatanRClickOnElement = !!q;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (U) => {
    const q = B(U.clientX, U.clientY);
    if (!q) {
      gt(), window.__hekatanRClickOnElement = false;
      return;
    }
    U.preventDefault(), U.stopImmediatePropagation(), zt(U.clientX, U.clientY, { type: q.type, idx: q.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const Yt = (U) => {
    if (ce.style.display !== "block") return;
    const q = U.target;
    ce.contains(q) || Le.contains(q) || gt();
  };
  document.addEventListener("mousedown", Yt, true), document.addEventListener("keydown", (U) => {
    U.key === "Escape" && ce.style.display === "block" && gt();
  });
  let It = null;
  e.rendererElm.addEventListener("pointerdown", (U) => {
    U.button === 0 && (It = { x: U.clientX, y: U.clientY });
  }), e.rendererElm.addEventListener("pointerup", (U) => {
    if (U.button !== 0 || !It) return;
    const q = U.clientX - It.x, Pe = U.clientY - It.y;
    if (It = null, q * q + Pe * Pe > 9) return;
    const Q = B(U.clientX, U.clientY);
    Q ? (V = { type: Q.type, idx: Q.idx }, dn()) : (V = null, dn());
  });
  function dn() {
    var _a, _b;
    if (G.visible = false, ye.visible = false, D.visible = false, A.visible = false, !V || !e.mesh) {
      e.render();
      return;
    }
    const U = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (V.type === "node") {
      const q = z(V.idx);
      if (q) {
        const Pe = e.derivedNodes.rawVal ?? [];
        let Q = 1;
        if (Pe.length >= 2) {
          let Oe = [1 / 0, 1 / 0, 1 / 0], Ve = [-1 / 0, -1 / 0, -1 / 0];
          for (const We of Pe) for (let ke = 0; ke < 3; ke++) We[ke] < Oe[ke] && (Oe[ke] = We[ke]), We[ke] > Ve[ke] && (Ve[ke] = We[ke]);
          Q = Math.max(Ve[0] - Oe[0], Ve[1] - Oe[1], Ve[2] - Oe[2], 0.1);
        }
        const He = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ne = 0.017 * Q * He;
        G.position.copy(q), G.scale.setScalar(Ne), G.visible = true;
      }
    } else if (V.type === "frame" && U) {
      const q = U[V.idx], Pe = z(q[0]), Q = z(q[1]);
      if (Pe && Q) {
        const He = Pe.clone().add(Q).multiplyScalar(0.5), Ne = Q.clone().sub(Pe), Oe = Ne.length(), Ve = e.getActiveCamera();
        let We;
        if (Ve.isOrthographicCamera) {
          const Ye = Ve;
          We = (Ye.top - Ye.bottom) / Ye.zoom * 35e-4;
        } else We = Ve.position.distanceTo(He) * 35e-4;
        ye.position.copy(He);
        const ke = new m(0, 1, 0), ht = ke.clone().cross(Ne).normalize(), pt = ke.angleTo(Ne);
        ye.quaternion.setFromAxisAngle(ht, pt), ye.scale.set(We, Oe, We), ye.visible = true;
      }
    } else if (V.type === "shell" && U) {
      const q = U[V.idx], Pe = [], Q = [];
      for (const He of q) {
        const Ne = z(He);
        if (!Ne) return;
        Pe.push(Ne.x, Ne.y, Ne.z);
      }
      q.length === 4 ? Q.push(0, 1, 2, 0, 2, 3) : q.length === 3 && Q.push(0, 1, 2), _e.setAttribute("position", new Lt(Pe, 3)), _e.setIndex(Q), _e.computeVertexNormals(), D.visible = true;
    } else if (V.type === "solid" && U) {
      const q = U[V.idx], Pe = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Q = [];
      for (const [He, Ne] of Pe) {
        const Oe = z(q[He]), Ve = z(q[Ne]);
        Oe && Ve && Q.push(Oe.x, Oe.y, Oe.z, Ve.x, Ve.y, Ve.z);
      }
      X.setAttribute("position", new Lt(Q, 3)), A.visible = true;
    }
    e.render();
  }
  return I.derive(() => {
    e.derivedNodes.val, V && dn();
  }), i;
}
function Ds(e, i, y, h, u, k) {
  const v = u - y, x = k - h, w = v * v + x * x;
  if (w < 1e-9) {
    const ae = e - y, pe = i - h;
    return Math.sqrt(ae * ae + pe * pe);
  }
  let _ = ((e - y) * v + (i - h) * x) / w;
  _ = Math.max(0, Math.min(1, _));
  const P = y + _ * v, b = h + _ * x, H = e - P, se = i - b;
  return Math.sqrt(H * H + se * se);
}
function Ns(e, i, y) {
  let h = false;
  for (let u = 0, k = y.length - 1; u < y.length; k = u++) {
    const v = y[u].x, x = y[u].y, w = y[k].x, _ = y[k].y;
    x > i != _ > i && e < (w - v) * (i - x) / (_ - x + 1e-12) + v && (h = !h);
  }
  return h;
}
function Fo(e, i = 8) {
  const y = document.createElement("div");
  y.id = "legend";
  const h = document.createElement("div");
  h.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(h), setTimeout(() => {
    I.derive(() => {
      h.textContent = no.val ? `[${no.val}]` : "";
    });
  });
  const u = Array.from({ length: i + 1 }, (w, _) => _ / i).reverse();
  let k, v;
  u.forEach((w, _) => {
    k = document.createElement("div"), k.id = `marker-${_}`, k.className = "marker", k.style.marginTop = _ == 0 ? "0px" : `calc(${50 / i}vh - 1px)`, v = document.createElement("p"), v.id = `marker-text-${_}`, k.append(v), y.append(k);
  });
  const x = [];
  return y.querySelectorAll("p").forEach((w) => x.push(w)), setTimeout(() => {
    I.derive(() => {
      u.forEach((w, _) => {
        const P = x[_];
        P && (P.innerText = Zs(e.val, w).toString());
      });
    });
  }), y;
}
function Zs(e, i) {
  const y = ao.val;
  if (y) return (y[0] + i * (y[1] - y[0])).toPrecision(3);
  const h = e.filter((v) => Number.isFinite(v));
  if (h.length === 0) return "0";
  let u = Math.min(...h);
  const k = Math.max(...h);
  return u >= 0 && k > 0 && (u = 0), (u + i * (k - u)).toPrecision(3);
}
function ta({ mesh: e, settingsObj: i, drawingObj: y, objects3D: h, solids: u }) {
  ss.DEFAULT_UP = new m(0, 0, 1);
  const k = document.createElement("div"), v = new jo(), x = new es(45, 1, 0.1, 2 * 1e6), w = new ts(-10, 10, 10, -10, -1e3, 2e6);
  let _ = x;
  const P = new ns({ antialias: true });
  P.localClippingEnabled = true;
  const b = new So(x, P.domElement);
  b.enableDamping = true, b.dampingFactor = 0.1, b.screenSpacePanning = true, b.zoomSpeed = 0.8, b.panSpeed = 1.2, b.rotateSpeed = 0.9, b.keyPanSpeed = 12, b.listenToKeyEvents(window), b.touches = { ONE: $n.ROTATE, TWO: $n.DOLLY_PAN }, P.domElement.addEventListener("wheel", (N) => {
    if (!N.ctrlKey && Math.abs(N.deltaX) > Math.abs(N.deltaY) * 1.5) {
      N.preventDefault();
      const ie = b.target, fe = new m().subVectors(x.position, ie), we = new m();
      we.crossVectors(x.up, fe).normalize();
      const Ke = fe.length() * 1e-3 * b.panSpeed;
      ie.addScaledVector(we, N.deltaX * Ke), x.position.addScaledVector(we, N.deltaX * Ke), b.update();
    }
  }, { passive: false });
  const H = new Qn(new m(-1, 0, 0), 0), se = new Qn(new m(0, -1, 0), 0), ae = new Qn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function pe() {
    const N = window.__hekatanClip, ie = [];
    N.enableX && (H.normal.set(N.invertX ? 1 : -1, 0, 0), H.constant = N.invertX ? -N.posX : N.posX, ie.push(H)), N.enableY && (se.normal.set(0, N.invertY ? 1 : -1, 0), se.constant = N.invertY ? -N.posY : N.posY, ie.push(se)), N.enableZ && (ae.normal.set(0, 0, N.invertZ ? 1 : -1), ae.constant = N.invertZ ? -N.posZ : N.posZ, ie.push(ae)), P.clippingPlanes = ie, v.traverse((we) => {
      const $e = we;
      if ($e.material) {
        const Ke = Array.isArray($e.material) ? $e.material : [$e.material];
        for (const Je of Ke) Je.clippingPlanes = ie, Je.needsUpdate = true;
      }
    });
    const fe = window.__hekatanPanes ?? [];
    for (const we of fe) try {
      we && typeof we.refresh == "function" && we.refresh();
    } catch {
    }
    P.render(v, _);
  }
  pe(), window.__hekatanClipApply = pe;
  const C = ls(i), G = I.derive(() => Math.pow(10, C.displayScale.val / 10)), me = Us(e, C), ye = () => {
    const N = [];
    return C.gridXY.rawVal && N.push("xy"), C.gridXZ.rawVal && N.push("xz"), C.gridYZ.rawVal && N.push("yz"), N;
  }, _e = () => {
    const N = C.gridStep.rawVal, ie = Math.max(N, C.gridMajor.rawVal);
    return { planes: ye(), majorStep: ie, minorStep: N };
  };
  let K = On(C.gridSize.rawVal, _e());
  K.visible = C.gridVisible.rawVal, window.__hekatanSnap2D = C.cursorSnap.rawVal;
  const D = () => {
    const N = Math.max(0, Math.min(1, C.gridOpacity.rawVal));
    K.traverse((ie) => {
      const fe = ie.material;
      if (!fe || !("opacity" in fe)) return;
      const we = ie.name ?? "";
      let $e = 0.35;
      we.includes("border") ? $e = 1 : we.includes("major") && ($e = 0.75), fe.opacity = N * $e;
    });
  };
  D(), k.appendChild(is(C, e, u)), k.setAttribute("id", "viewer"), k.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const X = cn();
  P.setClearColor(X.background, 1);
  const T = C.gridSize.rawVal, A = T * 0.5 + T * 0.5 / Math.tan(45 * 0.5);
  x.position.set(0, 0, A), x.up.set(0, 1, 0), b.target.set(0, 0, 0), b.minDistance = 0.1, b.maxDistance = 1e4, k.__settings = C, b.zoomSpeed = 1, b._getZoomScale = function() {
    return Math.pow(0.95, this.zoomSpeed);
  }, b.update();
  let V = Co(C.gridSize.rawVal, C.flipAxes.rawVal);
  v.add(K, V), I.derive(() => {
    window.__hekatanGridPlaneXY = C.gridXY.val, window.__hekatanGridPlaneXZ = C.gridXZ.val, window.__hekatanGridPlaneYZ = C.gridYZ.val;
  });
  let $ = true;
  I.derive(() => {
    const N = C.gridVisible.val;
    if ($) {
      $ = false;
      return;
    }
    K.visible = N, ee();
  });
  let z = true;
  I.derive(() => {
    if (C.gridOpacity.val, z) {
      z = false;
      return;
    }
    D(), ee();
  }), I.derive(() => {
    const N = C.cursorSnap.val;
    window.__hekatanSnap2D = N;
  });
  let B = true;
  I.derive(() => {
    var _a;
    const N = C.gridSize.val, ie = C.flipAxes.val;
    if (C.gridXY.val, C.gridXZ.val, C.gridYZ.val, C.gridStep.val, C.gridMajor.val, B) {
      B = false;
      return;
    }
    v.remove(K), (_a = K.traverse) == null ? void 0 : _a.call(K, ($e) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = $e.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = $e.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), K = On(N, _e()), K.visible = C.gridVisible.rawVal, v.add(K), D(), v.remove(V), V.traverse(($e) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = $e.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = $e.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), V = Co(N, ie), v.add(V);
    const fe = N * 0.5 + N * 0.5 / Math.tan(45 * 0.5);
    x.position.distanceTo(b.target), Math.abs(x.position.x) < 0.1 && Math.abs(x.position.y) < 0.1 && x.position.z > 0 ? x.position.set(0, 0, fe) : x.position.set(0.5 * N, -fe, 0.5 * N), b.target.set(0, 0, 0), b.minDistance = Math.max(0.05, N * 0.01), b.maxDistance = Math.max(50, N * 50), b.update(), ee();
  }), new ResizeObserver((N) => {
    var _a, _b;
    for (const ie of N) {
      const fe = (_a = ie.target) == null ? void 0 : _a.clientWidth, we = (_b = ie.target) == null ? void 0 : _b.clientHeight;
      if (fe === 0 || we === 0) continue;
      const Ke = (J ? fe / 2 : fe) / we;
      x.aspect = Ke, x.updateProjectionMatrix();
      const Je = w.top;
      if (w.left = -Je * Ke, w.right = Je * Ke, w.updateProjectionMatrix(), W && W.isPerspectiveCamera) W.aspect = Ke, W.updateProjectionMatrix();
      else if (W && W.isOrthographicCamera) {
        const nt = W, Ht = nt.top;
        nt.left = -Ht * Ke, nt.right = Ht * Ke, nt.updateProjectionMatrix();
      }
      P.setSize(fe, we), ee();
    }
  }).observe(k), b.addEventListener("change", ee), I.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e2 = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e2.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, C.displayScale.val, C.nodes.val, C.elements.val, (_g = C.edges) == null ? void 0 : _g.val, C.elemColumns.val, C.elemBeams.val, C.nodesIndexes.val, C.elementsIndexes.val, C.orientations.val, C.sections.val, C.secColumns.val, C.secBeams.val, C.secFloor.val, C.supports.val, C.loads.val, C.deformedShape.val, C.nodeResults.val, C.frameResults.val, C.shellResults.val, (_h = C.solidResults) == null ? void 0 : _h.val, setTimeout(ee);
  });
  let J = false, W = null, F = null, ne = false;
  function ee() {
    const N = k.clientWidth || 1, ie = k.clientHeight || 1;
    if (!J || !W) {
      P.setScissorTest(false), P.setViewport(0, 0, N, ie), P.render(v, _);
      return;
    }
    const fe = N / 2;
    P.setScissorTest(true), P.setViewport(0, 0, fe, ie), P.setScissor(0, 0, fe, ie), P.render(v, _), P.setViewport(fe, 0, fe, ie), P.setScissor(fe, 0, fe, ie), P.render(v, W), P.setScissorTest(false);
  }
  function le(N) {
    _ = N, b.object = N, b.update(), ee();
  }
  function re(N, ie) {
    J = N, ie && (W = ie);
    const fe = k.clientWidth || 1, we = k.clientHeight || 1, Ke = (N ? fe / 2 : fe) / we;
    x.isPerspectiveCamera && (x.aspect = Ke, x.updateProjectionMatrix());
    const Je = w.top;
    if (w.left = -Je * Ke, w.right = Je * Ke, w.updateProjectionMatrix(), N && W) {
      if (F ? (F.object = W, F.update()) : (F = new So(W, P.domElement), F.enableDamping = true, F.dampingFactor = 0.1, F.screenSpacePanning = true, F.zoomSpeed = 0.8, F.panSpeed = 1.2, F.rotateSpeed = 0.9, F.touches = { ONE: $n.ROTATE, TWO: $n.DOLLY_PAN }, F.target.copy(b.target), F.addEventListener("change", ee), F.enabled = false), !ne) {
        const nt = (Ht) => {
          if (!J || !F) return;
          const mt = P.domElement.getBoundingClientRect(), zt = Ht.clientX - mt.left, gt = mt.width / 2, Yt = zt >= gt;
          b.enabled = !Yt, F.enabled = Yt;
        };
        P.domElement.addEventListener("pointerdown", nt, true), P.domElement.addEventListener("wheel", nt, { capture: true, passive: true }), ne = true;
      }
    } else N || (b.enabled = true, F && (F.enabled = false));
    k.__splitMode = N, window.__hekatanSplitMode = N, window.__hekatanSplitCamera = N ? W : null, ee();
  }
  if (e) {
    v.add(rs(C, me, G), as(e, C, me), ps(C, me, G), us(e, C, me, G), cs(e, C, me, G), ds(e, C, me, G), ms(e, C, me, G), ys(e, C, me, G), bs(e, C, me, G), xs(e, C, me, G));
    const N = Ys({ scene: v, rendererElm: P.domElement, getActiveCamera: () => _, derivedNodes: me, derivedDisplayScale: G, mesh: e, settings: C, render: ee });
    v.add(N);
    const ie = Js(e, C), fe = Ps(e, C, me, ie), we = Fo(ie);
    v.add(fe), k.appendChild(we);
    const $e = Vs(e, C, me);
    v.add($e);
    const Ke = $e.__colorMapValues, Je = Fo(Ke);
    Je.id = "frame-legend", k.appendChild(Je), I.derive(() => {
      var _a;
      const nt = C.shellResults.val != "none", Ht = (((_a = C.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", mt = nt || Ht, zt = C.frameResults.val.startsWith("contour:");
      we.hidden = !mt, fe.visible = mt, Je.hidden = !zt;
    });
  }
  if (u) {
    const N = new os(16777215, 0.5);
    v.add(N);
    const ie = new ko(16777215, 0.5);
    ie.position.set(30, 25, -10), ie.shadow.mapSize.width = 1024, ie.shadow.mapSize.height = 1024, v.add(ie);
    const fe = 10;
    ie.shadow.camera.left = -fe, ie.shadow.camera.right = fe, ie.shadow.camera.top = fe, ie.shadow.camera.bottom = -fe, ie.shadow.camera.far = 1e3;
    const we = new ko(16777215, 0.5);
    we.color.setHSL(11, 43, 96), we.position.set(-10, 0, 30), v.add(we), I.derive(() => {
      (u == null ? void 0 : u.val.length) && (v.remove(...u.oldVal), v.add(...u.rawVal), ee());
    }), I.derive(() => {
      u.rawVal.forEach(($e) => $e.visible = C.solids.val), ee();
    });
  }
  if (h) {
    const N = [], ie = (we) => {
      var _a;
      return ((_a = we == null ? void 0 : we.userData) == null ? void 0 : _a.isCota) ? C.showCotas.val : C.custom3D.val;
    }, fe = () => {
      for (const we of N) we.visible = ie(we);
      ee();
    };
    I.derive(() => {
      const we = h.val;
      N.length && (v.remove(...N), N.length = 0), we.length && (v.add(...we), N.push(...we), fe()), ee();
    }), I.derive(() => {
      C.custom3D.val, fe();
    }), I.derive(() => {
      C.showCotas.val, fe();
    });
  }
  y && Ms({ drawingObj: y, gridObj: K, scene: v, getActiveCamera: () => _, controls: b, gridSize: T, derivedDisplayScale: G, rendererElm: P.domElement, viewerRender: ee }), Eo((N, ie) => {
    var _a;
    P.setClearColor(ie.background, 1), v.remove(K), (_a = K.traverse) == null ? void 0 : _a.call(K, (fe) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = fe.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = fe.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), K = On(C.gridSize.rawVal, { planes: ye() }), v.add(K), k.style.setProperty("--awatif-legend-color", ie.legendMarker), ee();
  });
  const Fe = { scene: v, perspCamera: x, orthoCamera: w, get camera() {
    return _;
  }, controls: b, renderer: P, rendererElm: P.domElement, render: ee, setActiveCamera: le, setSplitMode: re, get splitMode() {
    return J;
  }, get splitCamera() {
    return W;
  }, settings: C };
  k.__ctx = Fe;
  const de = document.createElement("div");
  de.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const ce = (N, ie, fe) => {
    const we = document.createElement("button");
    return we.textContent = N, we.title = ie, we.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), we.onmouseenter = () => {
      we.style.background = "rgba(70,70,70,0.9)";
    }, we.onmouseleave = () => {
      we.style.background = "rgba(40,40,40,0.85)";
    }, we.onclick = ($e) => {
      $e.preventDefault(), fe();
    }, we;
  }, Xe = (N, ie) => {
    const fe = b.target, we = new m().subVectors(_.position, fe), $e = we.length(), Ke = new m(), Je = new m();
    Ke.crossVectors(_.up, we).normalize(), Je.copy(_.up).normalize();
    const nt = $e * 0.05;
    fe.addScaledVector(Ke, -N * nt), fe.addScaledVector(Je, ie * nt), _.position.addScaledVector(Ke, -N * nt), _.position.addScaledVector(Je, ie * nt), b.update(), ee();
  }, Le = (N) => {
    const ie = new m().subVectors(_.position, b.target);
    ie.multiplyScalar(N), _.position.copy(b.target).add(ie), b.update(), ee();
  }, _t = () => {
    const N = document.createElement("div");
    return N.style.cssText = "width:32px;height:32px;", N;
  };
  return de.append(_t()), de.append(ce("\u2191", "Pan arriba", () => Xe(0, 1))), de.append(ce("\u2295", "Zoom in", () => Le(0.85))), de.append(ce("\u2190", "Pan izquierda", () => Xe(-1, 0))), de.append(ce("\u2302", "Reset vista", () => {
    b.reset(), ee();
  })), de.append(ce("\u2192", "Pan derecha", () => Xe(1, 0))), de.append(ce("\u2296", "Zoom out", () => Le(1.18))), de.append(ce("\u2193", "Pan abajo", () => Xe(0, -1))), de.append(_t()), getComputedStyle(k).position === "static" && (k.style.position = "relative"), k.appendChild(de), k;
}
function Us(e, i) {
  return I.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || y.length === 0) return y;
    const u = i.deformScale.val, k = i.deformScale.val * i.deformScaleZ.val, v = Number.isFinite(u) ? u : 1, x = Number.isFinite(k) ? k : 1;
    return y.map((w, _) => {
      var _a2;
      const P = ((_a2 = h.get(_)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], b = Number.isFinite(P[0]) ? P[0] : 0, H = Number.isFinite(P[1]) ? P[1] : 0, se = Number.isFinite(P[2]) ? P[2] : 0;
      return [w[0] + b * v, w[1] + H * v, w[2] + se * x];
    });
  });
}
const ao = I.state(null), no = I.state(""), Ks = I.state("kN"), Hs = I.state("mm"), Ws = I.state("kN/m\xB2"), Gs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Ao = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, qs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Js(e, i) {
  const y = I.state([]);
  let h;
  return ((u) => {
    u.bendingXX = "bendingXX", u.bendingYY = "bendingYY", u.bendingXY = "bendingXY", u.membraneXX = "membraneXX", u.membraneYY = "membraneYY", u.membraneXY = "membraneXY", u.tranverseShearX = "tranverseShearX", u.tranverseShearY = "tranverseShearY", u.vonMises = "vonMises", u.pressure = "pressure", u.displacementX = "displacementX", u.displacementY = "displacementY", u.displacementZ = "displacementZ";
  })(h || (h = {})), I.derive(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
    const u = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ae = (Fe, de) => {
      Fe == null ? void 0 : Fe.forEach((ce, Xe) => {
        const Le = e.elements.val[Xe];
        if (Le) for (let _t2 = 0; _t2 < Le.length; _t2++) de.set(Le[_t2], [ce[_t2] ?? ce[0]]);
      });
    };
    ae((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, u), ae((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, k), ae((_f = (_e2 = e.analyzeOutputs) == null ? void 0 : _e2.val) == null ? void 0 : _f.bendingXY, v), ae((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, x), ae((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, w), ae((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, _), ae((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, P), ae((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, b), ae((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, H), ae((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.pressure, se);
    const pe = (_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.colorMapRanges, C = (_w = i.solidResults) == null ? void 0 : _w.val, me = C && C !== "none" ? C : i.shellResults.val, ye = pe == null ? void 0 : pe[me], _e = { bendingXX: [u, 0], bendingYY: [k, 0], bendingXY: [v, 0], membraneXX: [x, 0], membraneYY: [w, 0], membraneXY: [_, 0], tranverseShearX: [P, 0], tranverseShearY: [b, 0], vonMises: [H, 0], pressure: [se, 0], displacementX: [(_y = (_x = e.deformOutputs) == null ? void 0 : _x.val) == null ? void 0 : _y.deformations, 0], displacementY: [(_A = (_z = e.deformOutputs) == null ? void 0 : _z.val) == null ? void 0 : _A.deformations, 1], displacementZ: [(_C = (_B = e.deformOutputs) == null ? void 0 : _B.val) == null ? void 0 : _C.deformations, 2] }, K = i.shellResults.val, D = Ks.val, X = Hs.val, T = K === "displacementX" || K === "displacementY" || K === "displacementZ", A = K === "bendingXX" || K === "bendingYY" || K === "bendingXY", V = K === "membraneXX" || K === "membraneYY" || K === "membraneXY", $ = K === "vonMises" || K === "pressure", z = K === "tranverseShearX" || K === "tranverseShearY", B = (_D = i.solidResults) == null ? void 0 : _D.val, te = B === "vonMises" || B === "sigmaXX" || B === "sigmaYY" || B === "sigmaZZ" || B === "tauXY" || B === "tauYZ" || B === "tauXZ", J = B === "ux" || B === "uy" || B === "uz", W = Ws.val, F = te ? qs[W] : J || T ? Ao[X] : A || V || $ || z ? 1 / Gs[D] : 1, ne = te ? W : J || T ? X : A ? `${D}\xB7m/m` : V ? `${D}/m\xB2` : $ ? `${D}/m\xB2` : z ? `${D}/m` : "";
    no.val = ne, ao.val = Array.isArray(ye) && ye.length === 2 ? [ye[0] * F, ye[1] * F] : null;
    const le = B && B !== "none" ? [H, 0] : _e[K], re = [];
    e.nodes.val.forEach((Fe, de) => {
      const ce = le;
      if (!ce || !ce[0] || typeof ce[0].has != "function") return;
      if (!ce[0].has(de)) {
        re.push(Number.NaN);
        return;
      }
      const Xe = ce[0].get(de), Le = Xe ? Xe[ce[1]] ?? 0 : 0;
      re.push(Le * F);
    }), y.val = re;
  }), y;
}
export {
  Hs as a,
  Ws as b,
  Ks as c,
  Cs as d,
  Fo as e,
  ta as g
};
