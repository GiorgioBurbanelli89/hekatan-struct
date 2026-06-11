import { v as I, P as Mo, r as dn, a7 as In, B as me, a8 as $n, F as Rt, a4 as _o, J as st, X as Zt, L as wt, c as on, w as So, b as Io, a9 as $o, e as at, d as et, V as x, $ as cn, aa as Un, H as ko, D as Xt, a as Lt, x as rt, z as Rn, ab as Bn, t as Ro, n as Bo, I as An, a2 as _n, S as yn, l as io, f as lo, h as ro, i as co, ac as po, ad as En, q as Xo, ae as Yo, af as Do, ag as No, ah as Zo, g as uo, ai as fo, C as ho, W as Uo, K as Ko, O as Ho, Y as Wo, T as Vn, p as Kn, Z as Go, _ as mo, U as qo } from "./theme-D5p5K0bJ.js";
import { T as Pt, O as wo } from "./Text-B4nrRMfX.js";
import { e as Jo } from "./styles-Bs20h4nQ.js";
function Qo(e, i, w) {
  const f = document.createElement("div"), c = new Mo({ title: "Settings", expanded: true, container: f });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(c), f.setAttribute("id", "settings");
  const S = "hk_settingsPos";
  let g = null;
  try {
    const v = localStorage.getItem(S);
    v && (g = JSON.parse(v));
  } catch {
  }
  f.style.cssText = ["position:fixed", g ? `left:${g.left}px` : "left:8px", g ? `top:${g.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const m = () => {
    const v = f.querySelector(".tp-rotv_b");
    if (!v) {
      setTimeout(m, 200);
      return;
    }
    v.style.cursor = "move", v.style.userSelect = "none";
    let W = false, oe = 0, he = 0, ce = 0, _ = 0;
    v.addEventListener("mousedown", (H) => {
      W = true, oe = H.clientX, he = H.clientY;
      const we = f.getBoundingClientRect();
      ce = we.left, _ = we.top, f.style.left = `${ce}px`, f.style.top = `${_}px`;
    }), window.addEventListener("mousemove", (H) => {
      if (!W) return;
      const we = H.clientX - oe, se = H.clientY - he, U = Math.max(0, Math.min(window.innerWidth - 40, ce + we)), pe = Math.max(0, Math.min(window.innerHeight - 40, _ + se));
      f.style.left = `${U}px`, f.style.top = `${pe}px`;
    }), window.addEventListener("mouseup", () => {
      if (W) {
        W = false;
        try {
          localStorage.setItem(S, JSON.stringify({ left: parseFloat(f.style.left), top: parseFloat(f.style.top) }));
        } catch {
        }
      }
    });
  };
  if (m(), i == null ? void 0 : i.nodes) {
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
  w && c.addBinding(e.solids, "val", { label: "Solids" });
  const y = c.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), M = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), P = () => {
    const v = window.__hekatanClipApply;
    typeof v == "function" && v();
  };
  return y.addBinding(M, "enableX", { label: "Cortar X" }).on("change", P), y.addBinding(M, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", P), y.addBinding(M, "invertX", { label: "  invertir X" }).on("change", P), y.addBinding(M, "enableY", { label: "Cortar Y" }).on("change", P), y.addBinding(M, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", P), y.addBinding(M, "invertY", { label: "  invertir Y" }).on("change", P), y.addBinding(M, "enableZ", { label: "Cortar Z" }).on("change", P), y.addBinding(M, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", P), y.addBinding(M, "invertZ", { label: "  invertir Z" }).on("change", P), f;
}
function Oo(e) {
  return { gridSize: I.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: I.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: I.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: I.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: I.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: I.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: I.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: I.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: I.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: I.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: I.state((e == null ? void 0 : e.nodes) ?? true), elements: I.state((e == null ? void 0 : e.elements) ?? true), edges: I.state((e == null ? void 0 : e.edges) ?? true), faces: I.state((e == null ? void 0 : e.faces) ?? true), elemColumns: I.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: I.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: I.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: I.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: I.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: I.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: I.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: I.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: I.state((e == null ? void 0 : e.orientations) ?? false), sections: I.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: I.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: I.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: I.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: I.state((e == null ? void 0 : e.secFloor) ?? -1), supports: I.state((e == null ? void 0 : e.supports) ?? true), loads: I.state((e == null ? void 0 : e.loads) ?? false), deformedShape: I.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: I.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: I.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: I.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: I.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: I.state((e == null ? void 0 : e.flipAxes) ?? false), solids: I.state((e == null ? void 0 : e.solids) ?? true), custom3D: I.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: I.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: I.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: I.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function jo(e, i, w) {
  const f = dn(), c = new In(new me(), new $n({ color: f.nodePoint }));
  return _o((S, g) => {
    c.material.color.setHex(g.nodePoint);
  }), c.frustumCulled = false, I.derive(() => {
    e.nodes.val && c.geometry.setAttribute("position", new Rt(i.val.flat(), 3));
  }), I.derive(() => {
    if (w.val, i.val, !e.nodes.rawVal) return;
    const S = i.rawVal ?? [];
    let g = e.gridSize.val * 0.5;
    if (S.length >= 2) {
      const y = [1 / 0, 1 / 0, 1 / 0], M = [-1 / 0, -1 / 0, -1 / 0];
      for (const P of S) for (let v = 0; v < 3; v++) y[v] = Math.min(y[v], P[v]), M[v] = Math.max(M[v], P[v]);
      g = Math.max(M[0] - y[0], M[1] - y[1], M[2] - y[2], 0.1);
    }
    const m = 0.03 * g;
    c.material.size = m * w.rawVal;
  }), I.derive(() => {
    c.visible = e.nodes.val;
  }), c;
}
function Hn(e, i) {
  const w = dn(), f = new st();
  f.name = "hekatan-grid";
  const c = (i == null ? void 0 : i.planes) ?? ["xy"];
  let S = (i == null ? void 0 : i.majorStep) ?? 1, g = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (S <= 0 && (S = 1), g <= 0 && (g = 0.1); e / g > 500; ) g *= 2;
  for (; e / S > 100; ) S *= 2;
  const m = e / 2;
  S = Math.max(g, Math.round(S / g) * g);
  const M = new Zt(w.grid), P = new Zt(w.grid).multiplyScalar(0.45), v = (oe, he, ce, _) => {
    const H = [], we = oe === "xy" ? (B, $) => [B, $, 0] : oe === "xz" ? (B, $) => [B, 0, $] : (B, $) => [0, B, $], se = Math.floor(m / he);
    for (let B = -se; B <= se; B++) {
      const $ = B * he, E = we($, -m), F = we($, m);
      H.push(...E, ...F);
    }
    for (let B = -se; B <= se; B++) {
      const $ = B * he, E = we(-m, $), F = we(m, $);
      H.push(...E, ...F);
    }
    const U = new me();
    U.setAttribute("position", new Rt(H, 3));
    const pe = new wt({ color: ce, transparent: true, opacity: _, depthWrite: false }), J = new on(U, pe);
    return J.name = `grid-${oe}-${he === g ? "minor" : "major"}`, J;
  }, W = (oe, he, ce) => {
    const _ = oe === "xy" ? (J, B) => [J, B, 0] : oe === "xz" ? (J, B) => [J, 0, B] : (J, B) => [0, J, B], H = [[-m, -m], [m, -m], [m, m], [-m, m]], we = [];
    for (const [J, B] of H) we.push(..._(J, B));
    const se = new me();
    se.setAttribute("position", new Rt(we, 3));
    const U = new wt({ color: he, transparent: true, opacity: ce, depthWrite: false }), pe = new So(se, U);
    return pe.name = `grid-${oe}-border`, pe.renderOrder = 1, pe;
  };
  for (const oe of c) f.add(v(oe, g, P, 0.12)), f.add(v(oe, S, M, 0.4)), f.add(W(oe, M, 0.55));
  return f.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: S, minorStep: g, gridSize: e, planes: [...c] }, f;
}
function es(e, i, w, f) {
  const c = new st(), S = new Io(0.5, 0.5, 0.5), g = new $o(0.45, 0.7, 4);
  g.rotateX(Math.PI / 2), g.translate(0, 0, -0.35);
  const m = new at({ color: 10166822 }), y = new at({ color: 2792847 }), M = new at({ color: 3835647 }), P = () => {
    const oe = w.rawVal ?? [];
    if (oe.length < 2) return i.gridSize.val * 0.5;
    let he = [1 / 0, 1 / 0, 1 / 0], ce = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of oe) for (let H = 0; H < 3; H++) _[H] < he[H] && (he[H] = _[H]), _[H] > ce[H] && (ce[H] = _[H]);
    return Math.max(ce[0] - he[0], ce[1] - he[1], ce[2] - he[2], 0.1);
  }, v = () => 0.08 * P(), W = () => Math.max(f.rawVal, 1);
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    c.clear();
    const oe = v();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((he, ce) => {
      const _ = w.val[ce];
      if (!_) return;
      const H = he ?? [], we = (H[0] ? 1 : 0) + (H[1] ? 1 : 0) + (H[2] ? 1 : 0), se = (H[3] ? 1 : 0) + (H[4] ? 1 : 0) + (H[5] ? 1 : 0);
      let U;
      we >= 3 && se >= 3 ? U = new et(S, m) : we >= 3 && se === 0 ? U = new et(g, y) : U = new et(g, M), U.position.set(_[0], _[1], _[2]);
      const pe = oe * W();
      U.scale.set(pe, pe, pe), c.add(U);
    });
  }), I.derive(() => {
    if (f.val, !i.supports.rawVal) return;
    const he = v() * W();
    c.children.forEach((ce) => ce.scale.set(he, he, he));
  }), I.derive(() => {
    c.visible = i.supports.val;
  }), c;
}
function ts(e, i, w, f) {
  const c = new st();
  c.name = "loadsGroup";
  function S(g) {
    if (g.length < 2) return 0.12 * i.gridSize.rawVal;
    const m = [1 / 0, 1 / 0, 1 / 0], y = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of g) for (let v = 0; v < 3; v++) m[v] = Math.min(m[v], P[v]), y[v] = Math.max(y[v], P[v]);
    return 0.08 * Math.max(y[0] - m[0], y[1] - m[1], y[2] - m[2], 0.1);
  }
  return I.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    c.children.forEach((y) => y.dispose()), c.clear();
    const g = w.val, m = S(g);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((y, M) => {
      const P = g[M];
      if (!P) return;
      const v = new x(...y.slice(0, 3));
      if (v.lengthSq() < 1e-30) return;
      v.normalize();
      const W = new cn(v, new x(...P), 1, 15637248, 0.3, 0.3), oe = m * f.rawVal;
      W.scale.set(oe, oe, oe), c.add(W);
    });
  }), I.derive(() => {
    if (f.val, !i.loads.rawVal) return;
    const m = S(w.rawVal) * f.rawVal;
    c.children.forEach((y) => y.scale.set(m, m, m));
  }), I.derive(() => {
    c.visible = i.loads.val;
  }), c;
}
function ns(e, i, w) {
  const f = new st();
  return I.derive(() => {
    if (!e.nodesIndexes.val) return;
    f.children.forEach((S) => S.dispose()), f.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((S, g) => {
      const m = new Pt(`${g}`);
      m.position.set(...S), m.updateScale(c * w.rawVal), f.add(m);
    });
  }), I.derive(() => {
    if (w.val, !e.nodesIndexes.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6;
    f.children.forEach((S) => S.updateScale(c * w.rawVal));
  }), I.derive(() => {
    f.visible = e.nodesIndexes.val;
  }), f;
}
function os(e, i, w, f) {
  const c = new st();
  return I.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    c.children.forEach((g) => g.dispose()), c.clear();
    const S = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((g, m) => {
      const y = new Pt(`${m}`, void 0, "#001219");
      y.position.set(...ss(g.map((M) => w.rawVal[M]))), y.updateScale(S * f.rawVal), c.add(y);
    });
  }), I.derive(() => {
    if (f.val, !i.elementsIndexes.rawVal) return;
    const S = 0.05 * i.gridSize.val * 0.6;
    c.children.forEach((g) => g.updateScale(S * f.rawVal));
  }), I.derive(() => {
    c.visible = i.elementsIndexes.val;
  }), c;
}
function ss(e) {
  const i = e.reduce((f, c) => [f[0] + c[0], f[1] + c[1], f[2] + c[2]], [0, 0, 0]), w = e.length;
  return [i[0] / w, i[1] / w, i[2] / w];
}
function yo(e, i) {
  const w = new st(), f = 0.05 * e * 1, c = dn(), S = new Pt("X", "red", "transparent"), g = new Pt(i ? "Z" : "Y", "green", "transparent"), m = new Pt(i ? "Y" : "Z", "blue", "transparent"), y = new cn(new x(1, 0, 0), new x(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), M = new cn(new x(0, 1, 0), new x(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), P = new cn(new x(0, 0, 1), new x(0, 0, 0), 1, c.axisArrow, 0.2, 0.2);
  return S.position.set(1.3 * f, 0, 0), g.position.set(0, 1.3 * f, 0), m.position.set(0, 0, 1.3 * f), S.updateScale(0.4 * f), g.updateScale(0.4 * f), m.updateScale(0.4 * f), y.scale.set(f, f, f), M.scale.set(f, f, f), P.scale.set(f, f, f), w.add(y, M, P, S, g, m), w;
}
function Qn(e, i) {
  const w = new x(...e), c = new x(...i).clone().sub(w), S = c.length(), g = c.dot(new x(1, 0, 0)) / S, m = c.dot(new x(0, 1, 0)) / S, y = c.dot(new x(0, 0, 1)) / S, M = Math.sqrt(g ** 2 + m ** 2);
  let P = new Un().fromArray([[g, m, y], [-m / M, g / M, 0], [-g * y / M, -m * y / M, M]].flat());
  return y === 1 && (P = new Un().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), y === -1 && (P = new Un().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new ko().setFromMatrix3(P);
}
function qn(e, i) {
  return e == null ? void 0 : e.map((w, f) => (9 * w + i[f]) / 10);
}
function kn(e) {
  const i = e.reduce((f, c) => [f[0] + c[0], f[1] + c[1], f[2] + c[2]], [0, 0, 0]), w = e.length;
  return [i[0] / w, i[1] / w, i[2] / w];
}
function as(e, i, w) {
  const f = kn([i, w]), c = kn([e, w]), S = kn([e, i]), g = new x(...f).sub(new x(...c)).normalize(), m = new x(...w).sub(new x(...S)).normalize(), y = g.clone().cross(m).normalize(), M = y.clone().cross(g).normalize();
  return new ko().makeBasis(g, M, y);
}
function is(e, i, w, f) {
  const c = new st(), S = new me(), g = new wt({ vertexColors: true }), m = [0, 0, 0], y = [1, 0, 0], M = [0, 1, 0], P = [0, 0, 1];
  S.setAttribute("position", new Rt([...m, ...y, ...m, ...M, ...m, ...P], 3));
  const v = [255, 0, 0], W = [0, 255, 0], oe = [0, 0, 255];
  return S.setAttribute("color", new Rt([...v, ...v, ...W, ...W, ...oe, ...oe], 3)), I.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (c.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((he) => {
      const ce = new on(S, g), _ = w.rawVal[he[0]], H = w.rawVal[he[1]];
      if (he.length === 2 && (ce.position.set(...qn(_, H)), ce.rotation.setFromRotationMatrix(Qn(_, H))), he.length === 3) {
        const U = w.rawVal[he[2]];
        ce.position.set(...kn([_, H, U])), ce.rotation.setFromRotationMatrix(as(_, H, U));
      }
      const se = 0.05 * i.gridSize.rawVal * 0.75 * f.rawVal;
      ce.scale.set(se, se, se), c.add(ce);
    }));
  }), I.derive(() => {
    if (f.val, !i.orientations.rawVal) return;
    const ce = 0.05 * i.gridSize.val * 0.75 * f.rawVal;
    c.children.forEach((_) => _.scale.set(ce, ce, ce));
  }), I.derive(() => {
    c.visible = i.orientations.val;
  }), c;
}
function ls(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const i = (e.b * 100).toFixed(0), w = (e.h * 100).toFixed(0);
    return `${i}x${w}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function rs(e, i, w, f) {
  const c = new st(), S = new st();
  c.add(S);
  function g(J, B) {
    const $ = J / 2, E = B / 2, F = new Float32Array([0, -$, -E, 0, $, -E, 0, $, E, 0, -$, -E, 0, $, E, 0, -$, E]), V = new me();
    V.setAttribute("position", new rt(F, 3));
    const C = new Float32Array([0, -$, -E, 0, $, -E, 0, $, E, 0, -$, E, 0, -$, -E]), D = new me();
    return D.setAttribute("position", new rt(C, 3)), { fill: V, outline: D };
  }
  function m(J, B = 24) {
    const $ = J / 2, E = new Float32Array(B * 9);
    for (let D = 0; D < B; D++) {
      const ee = D / B * Math.PI * 2, Y = (D + 1) / B * Math.PI * 2;
      E[D * 9] = 0, E[D * 9 + 1] = 0, E[D * 9 + 2] = 0, E[D * 9 + 3] = 0, E[D * 9 + 4] = $ * Math.cos(ee), E[D * 9 + 5] = $ * Math.sin(ee), E[D * 9 + 6] = 0, E[D * 9 + 7] = $ * Math.cos(Y), E[D * 9 + 8] = $ * Math.sin(Y);
    }
    const F = new me();
    F.setAttribute("position", new rt(E, 3));
    const V = new Float32Array((B + 1) * 3);
    for (let D = 0; D <= B; D++) {
      const ee = D / B * Math.PI * 2;
      V[D * 3] = 0, V[D * 3 + 1] = $ * Math.cos(ee), V[D * 3 + 2] = $ * Math.sin(ee);
    }
    const C = new me();
    return C.setAttribute("position", new rt(V, 3)), { fill: F, outline: C };
  }
  function y(J, B, $, E) {
    const F = $ ?? B * 0.08, V = E ?? J * 0.07, C = J / 2, D = B / 2, ee = D - F, Y = V / 2, xe = [];
    function A(Q, Se, be, Me) {
      xe.push(0, Q, Se, 0, be, Se, 0, be, Me, 0, Q, Se, 0, be, Me, 0, Q, Me);
    }
    A(-C, -D, C, -ee), A(-Y, -ee, Y, ee), A(-C, ee, C, D);
    const N = new me();
    N.setAttribute("position", new rt(new Float32Array(xe), 3));
    const O = new Float32Array([0, -C, -D, 0, C, -D, 0, C, -ee, 0, Y, -ee, 0, Y, ee, 0, C, ee, 0, C, D, 0, -C, D, 0, -C, ee, 0, -Y, ee, 0, -Y, -ee, 0, -C, -ee, 0, -C, -D]), ie = new me();
    return ie.setAttribute("position", new rt(O, 3)), { fill: N, outline: ie };
  }
  function M(J, B, $) {
    const E = J / 2, F = B / 2, V = E - $, C = F - $, D = [];
    function ee(N, O, ie, Q) {
      D.push(0, N, O, 0, ie, O, 0, ie, Q, 0, N, O, 0, ie, Q, 0, N, Q);
    }
    ee(-E, -F, E, -C), ee(-E, C, E, F), ee(-E, -C, -V, C), ee(V, -C, E, C);
    const Y = new me();
    Y.setAttribute("position", new rt(new Float32Array(D), 3));
    const xe = new Float32Array([0, -E, -F, 0, E, -F, 0, E, -F, 0, E, F, 0, E, F, 0, -E, F, 0, -E, F, 0, -E, -F, 0, -V, -C, 0, V, -C, 0, V, -C, 0, V, C, 0, V, C, 0, -V, C, 0, -V, C, 0, -V, -C]), A = new me();
    return A.setAttribute("position", new rt(xe, 3)), { fill: Y, outline: A };
  }
  function P(J, B, $) {
    const E = J / 2, F = B / 2, V = E - $, C = F - $, D = new me(), ee = new Float32Array([0, -V, -C, 0, V, -C, 0, V, C, 0, -V, -C, 0, V, C, 0, -V, C]);
    D.setAttribute("position", new rt(ee, 3));
    const Y = [];
    function xe(ie, Q, Se, be) {
      Y.push(0, ie, Q, 0, Se, Q, 0, Se, be, 0, ie, Q, 0, Se, be, 0, ie, be);
    }
    xe(-E, -F, E, -C), xe(-E, C, E, F), xe(-E, -C, -V, C), xe(V, -C, E, C);
    const A = new me();
    A.setAttribute("position", new rt(new Float32Array(Y), 3));
    const N = new Float32Array([0, -E, -F, 0, E, -F, 0, E, -F, 0, E, F, 0, E, F, 0, -E, F, 0, -E, F, 0, -E, -F, 0, -V, -C, 0, V, -C, 0, V, -C, 0, V, C, 0, V, C, 0, -V, C, 0, -V, C, 0, -V, -C]), O = new me();
    return O.setAttribute("position", new rt(N, 3)), { concFill: D, steelFillGeom: A, outline: O };
  }
  function v(J, B, $) {
    const E = [], F = [[0, -J / 2, -B / 2], [0, -J / 2 + $, -B / 2], [0, -J / 2 + $, B / 2 - $], [0, J / 2, B / 2 - $], [0, J / 2, B / 2], [0, -J / 2, B / 2]], V = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Y of V) E.push(...F[Y]);
    const C = new me();
    C.setAttribute("position", new rt(new Float32Array(E), 3));
    const D = [];
    for (let Y = 0; Y < F.length; Y++) {
      const xe = (Y + 1) % F.length;
      D.push(...F[Y], ...F[xe]);
    }
    const ee = new me();
    return ee.setAttribute("position", new rt(new Float32Array(D), 3)), { fill: C, outline: ee };
  }
  function W(J, B, $, E) {
    const F = E / 2, V = [], C = [[0, -J - F, -B / 2], [0, -$ - F, -B / 2], [0, -$ - F, B / 2 - $], [0, -F, B / 2 - $], [0, -F, B / 2], [0, -J - F, B / 2]], D = [[0, F, -B / 2], [0, F + $, -B / 2], [0, F + $, B / 2 - $], [0, J + F, B / 2 - $], [0, J + F, B / 2], [0, F, B / 2]], ee = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const N of ee) V.push(...C[N]);
    for (const N of ee) V.push(...D[N]);
    const Y = new me();
    Y.setAttribute("position", new rt(new Float32Array(V), 3));
    const xe = [];
    for (const N of [C, D]) for (let O = 0; O < N.length; O++) {
      const ie = (O + 1) % N.length;
      xe.push(...N[O], ...N[ie]);
    }
    const A = new me();
    return A.setAttribute("position", new rt(new Float32Array(xe), 3)), { fill: Y, outline: A };
  }
  function oe(J, B, $, E) {
    const F = B / 2, V = J, C = [[0, -V, -F], [0, -V, -F + $], [0, -E, -F + $], [0, -E, F - $], [0, -V, F - $], [0, -V, F], [0, 0, F], [0, 0, -F]], D = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], ee = [];
    for (const N of D) ee.push(...C[N]);
    const Y = new me();
    Y.setAttribute("position", new rt(new Float32Array(ee), 3));
    const xe = [];
    for (let N = 0; N < C.length; N++) {
      const O = (N + 1) % C.length;
      xe.push(...C[N], ...C[O]);
    }
    const A = new me();
    return A.setAttribute("position", new rt(new Float32Array(xe), 3)), { fill: Y, outline: A };
  }
  function he(J, B, $, E, F) {
    const V = B / 2, C = F / 2, D = [], ee = [[0, -J, -V], [0, -J, -V + $], [0, -C - E, -V + $], [0, -C - E, V - $], [0, -J, V - $], [0, -J, V], [0, -C, V], [0, -C, -V]], Y = ee.map((ie) => [ie[0], -ie[1], ie[2]]), xe = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ie of xe) D.push(...ee[ie]);
    for (const ie of xe) D.push(...Y[ie]);
    const A = new me();
    A.setAttribute("position", new rt(new Float32Array(D), 3));
    const N = [];
    for (const ie of [ee, Y]) for (let Q = 0; Q < ie.length; Q++) {
      const Se = (Q + 1) % ie.length;
      N.push(...ie[Q], ...ie[Se]);
    }
    const O = new me();
    return O.setAttribute("position", new rt(new Float32Array(N), 3)), { fill: A, outline: O };
  }
  function ce(J, B, $, E) {
    const F = J / 2, V = B / 2, C = E / 2, D = [[0, -C, -V], [0, C, -V], [0, C, V - $], [0, F, V - $], [0, F, V], [0, -F, V], [0, -F, V - $], [0, -C, V - $]], ee = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], Y = [];
    for (const O of ee) Y.push(...D[O]);
    const xe = new me();
    xe.setAttribute("position", new rt(new Float32Array(Y), 3));
    const A = [];
    for (let O = 0; O < D.length; O++) {
      const ie = (O + 1) % D.length;
      A.push(...D[O], ...D[ie]);
    }
    const N = new me();
    return N.setAttribute("position", new rt(new Float32Array(A), 3)), { fill: xe, outline: N };
  }
  function _(J, B, $ = 24) {
    const E = J / 2, F = E - B, V = [];
    for (let Y = 0; Y < $; Y++) {
      const xe = Y / $ * Math.PI * 2, A = (Y + 1) / $ * Math.PI * 2, N = Math.cos(xe), O = Math.sin(xe), ie = Math.cos(A), Q = Math.sin(A);
      V.push(0, E * N, E * O, 0, E * ie, E * Q, 0, F * ie, F * Q), V.push(0, E * N, E * O, 0, F * ie, F * Q, 0, F * N, F * O);
    }
    const C = new me();
    C.setAttribute("position", new rt(new Float32Array(V), 3));
    const D = [];
    for (let Y = 0; Y < $; Y++) {
      const xe = Y / $ * Math.PI * 2, A = (Y + 1) / $ * Math.PI * 2;
      D.push(0, E * Math.cos(xe), E * Math.sin(xe), 0, E * Math.cos(A), E * Math.sin(A)), D.push(0, F * Math.cos(xe), F * Math.sin(xe), 0, F * Math.cos(A), F * Math.sin(A));
    }
    const ee = new me();
    return ee.setAttribute("position", new rt(new Float32Array(D), 3)), { fill: C, outline: ee };
  }
  const H = new at({ color: 52479, transparent: true, opacity: 0.35, side: Xt, depthWrite: false }), we = new wt({ color: 52479 }), se = new at({ color: 16750848, transparent: true, opacity: 0.4, side: Xt, depthWrite: false }), U = new wt({ color: 16750848 });
  function pe(J, B) {
    const $ = Math.abs(B[0] - J[0]), E = Math.abs(B[1] - J[1]), F = Math.abs(B[2] - J[2]);
    return F > $ && F > E || E > $ && E > F;
  }
  return I.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const J = i.secColumns.rawVal, B = i.secBeams.rawVal;
    if (!J && !B) {
      c.children.forEach((C) => {
        C instanceof Pt && C.dispose();
      }), c.clear();
      return;
    }
    c.children.forEach((C) => {
      C instanceof Pt && C.dispose();
    }), c.clear();
    const $ = (_a = e.elements) == null ? void 0 : _a.val, E = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!$ || !E) return;
    const F = E.sectionShapes, V = i.secFloor.rawVal;
    $.forEach((C, D) => {
      if (C.length !== 2) return;
      const ee = w.rawVal[C[0]], Y = w.rawVal[C[1]];
      if (!ee || !Y) return;
      const xe = pe(ee, Y);
      if (xe && !J || !xe && !B) return;
      if (V >= 0) {
        const Q = Math.min(ee[1], Y[1]);
        Math.max(ee[1], Y[1]);
        const Se = i.gridSize.rawVal || 3;
        if (Math.floor(Q / Se + 0.01) !== V) return;
      }
      const A = F == null ? void 0 : F.get(D);
      if (!A) return;
      const N = [(ee[0] + Y[0]) / 2, (ee[1] + Y[1]) / 2, (ee[2] + Y[2]) / 2], O = Qn(ee, Y);
      if (A.type === "CFT") {
        const Q = P(A.b, A.h, A.tw ?? A.b * 0.05), Se = new et(Q.concFill, H);
        Se.position.set(...N), Se.rotation.setFromRotationMatrix(O), c.add(Se);
        const be = new et(Q.steelFillGeom, se);
        be.position.set(...N), be.rotation.setFromRotationMatrix(O), c.add(be);
        const Me = new Lt(Q.outline, U);
        Me.position.set(...N), Me.rotation.setFromRotationMatrix(O), c.add(Me);
      } else {
        let Q, Se, be;
        switch (A.type) {
          case "rect":
            Q = g(A.b, A.h), Se = H, be = we;
            break;
          case "circ":
            Q = m(A.d), Se = H, be = we;
            break;
          case "I":
            Q = y(A.b, A.h, A.tf, A.tw), Se = se, be = U;
            break;
          case "HSS":
            Q = M(A.b, A.h, A.tw ?? A.b * 0.05), Se = se, be = U;
            break;
          case "CFT":
            Q = P(A.b, A.h, A.tw ?? A.b * 0.05), Se = se, be = U;
            break;
          case "L":
            Q = v(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3), Se = se, be = U;
            break;
          case "2L":
            Q = W(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3, A.dis ?? 0.01), Se = se, be = U;
            break;
          case "C":
          case "coldC":
            Q = oe(A.b, A.h, A.tf ?? A.t ?? 3e-3, A.tw ?? A.t ?? 3e-3), Se = se, be = U;
            break;
          case "2C":
            Q = he(A.b, A.h, A.tf ?? 5e-3, A.tw ?? 5e-3, A.dis ?? 0.01), Se = se, be = U;
            break;
          case "T":
            Q = ce(A.b, A.h, A.tf ?? 0.01, A.tw ?? 6e-3), Se = se, be = U;
            break;
          case "pipe":
            Q = _(A.d, A.tw ?? A.d * 0.05), Se = se, be = U;
            break;
          default:
            return;
        }
        const Me = new et(Q.fill, Se);
        Me.position.set(...N), Me.rotation.setFromRotationMatrix(O), c.add(Me);
        const Ve = new Lt(Q.outline, be);
        Ve.position.set(...N), Ve.rotation.setFromRotationMatrix(O), c.add(Ve);
      }
      const ie = ls(A);
      if (ie) {
        const Se = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(A.type) ? "#ff9900" : "#00ccff", be = new Pt(ie, Se, "transparent");
        be.position.set(N[0], N[1], N[2]);
        const Me = 0.05 * i.gridSize.rawVal * 0.5;
        be.updateScale(Me * ((f == null ? void 0 : f.rawVal) ?? 1)), S.add(be);
      }
    });
  }), f && I.derive(() => {
    if (f.val, !i.sections.rawVal) return;
    const J = 0.05 * i.gridSize.val * 0.5;
    S.children.forEach((B) => {
      B instanceof Pt && B.updateScale(J * f.rawVal);
    });
  }), I.derive(() => {
    c.visible = i.sections.val;
  }), I.derive(() => {
    S.visible = i.sectionLabels.val;
  }), c;
}
class Tn extends st {
  constructor(i, w, f, c, S, g, m) {
    super();
    const y = new Rn().moveTo(0, 0).lineTo(0, g[1]).lineTo(f, g[1]).lineTo(f, 0).lineTo(0, 0), M = y.getPoints(), P = new me().setFromPoints(M);
    this.lines = new Lt(P, new wt({ color: dn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new Bn(y), W = new at({ color: g[1] > 0 ? 24435 : 11411474, side: Xt });
    this.mesh = new et(v, W), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Pt(`${S[1].toFixed(2)}`), this.normalizedResult = g, this.textPosition = kn([i, w]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(c), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class xo extends st {
  constructor(i, w, f, c, S, g, m) {
    super();
    const y = S[0] * f / (S[0] + S[1]), M = S[0] * S[1] > 0;
    if (this.text = new Pt(`${S[0].toFixed(2)}`), this.text2 = new Pt(`${(S[1] * -1).toFixed(2)}`), this.normalizedResult = g, this.textPosition = qn(i, w), this.text2Position = qn(w, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(c), this.text2.rotation.setFromRotationMatrix(c), this.add(this.text, this.text2), M) {
      const P = new Rn().moveTo(0, 0).lineTo(0, g[0]).lineTo(y, 0).lineTo(0, 0), v = new Rn().moveTo(y, 0).lineTo(f, -g[1]).lineTo(f, 0).lineTo(y, 0), W = P.getPoints(), oe = v.getPoints(), he = new me().setFromPoints(W), ce = new me().setFromPoints(oe), _ = new wt({ color: dn().resultOutline });
      this.lines = new Lt(he, _), this.lines2 = new Lt(ce, _), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), this.lines2.rotation.setFromRotationMatrix(c), m && this.lines.rotateX(Math.PI / 2), m && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const H = new Bn(P), we = new Bn(v), se = new at({ color: g[0] > 0 ? 24435 : 11411474, side: Xt }), U = new at({ color: -g[1] > 0 ? 24435 : 11411474, side: Xt });
      this.mesh = new et(H, se), this.mesh2 = new et(we, U), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), this.mesh2.rotation.setFromRotationMatrix(c), m && this.mesh.rotateX(Math.PI / 2), m && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Rn().moveTo(0, 0).lineTo(0, g[0]).lineTo(f, -g[1]).lineTo(f, 0).lineTo(0, 0), v = P.getPoints(), W = new me().setFromPoints(v);
      this.lines = new Lt(W, new wt({ color: dn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), m && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const oe = new Bn(P), he = new at({ color: g[0] > 0 ? 24435 : 11411474, side: Xt });
      this.mesh = new et(oe, he), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), m && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Po = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Po || {});
function cs(e, i, w, f) {
  const c = new st(), S = () => {
    const y = w.rawVal ?? [];
    if (y.length < 2) return i.gridSize.val * 0.5;
    let M = [1 / 0, 1 / 0, 1 / 0], P = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of y) for (let W = 0; W < 3; W++) v[W] < M[W] && (M[W] = v[W]), v[W] > P[W] && (P[W] = v[W]);
    return Math.max(P[0] - M[0], P[1] - M[1], P[2] - M[2], 0.1);
  }, g = () => 0.025 * S(), m = { normals: Tn, shearsY: Tn, shearsZ: Tn, torsions: Tn, bendingsY: xo, bendingsZ: xo };
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, w.val, i.frameResults.val == "none") return;
    c.children.forEach((M) => M.dispose()), c.clear();
    const y = Po[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[y]) == null ? void 0 : _b.forEach((M, P) => {
      var _a2, _b2;
      const v = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[P]) ?? [0, 1], W = w.rawVal[v[0]], oe = w.rawVal[v[1]], he = new x(...oe).distanceTo(new x(...W)), ce = ds((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[y]), _ = M == null ? void 0 : M.map((U) => U / (ce === 0 ? 1 : ce)), H = Qn(W, oe), we = new m[y](W, oe, he, H, M ?? [0, 0], _ ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(y)), se = g();
      we.updateScale(se * f.rawVal), c.add(we);
    });
  }), I.derive(() => {
    if (f.val, i.frameResults.rawVal == "none") return;
    const y = g();
    c.children.forEach((M) => M.updateScale(y * f.rawVal));
  }), I.derive(() => {
    c.visible = i.frameResults.val != "none";
  }), c;
}
function ds(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((w) => {
    const f = Math.max(...w ?? [0, 0]);
    f > i && (i = f);
  }), i;
}
class ps extends st {
  constructor(i, w, f) {
    super();
    const c = w === On.reactions;
    f[0] && (this.xText1 = new Pt(`${c ? "Fx" : "Dx"}: ` + f[0].toFixed(4))), f[3] && (this.xText2 = new Pt(`${c ? "Mx" : "Rx"}: ` + f[3].toFixed(4))), f[1] && (this.yText1 = new Pt(`${c ? "Fy" : "Dy"}: ` + f[1].toFixed(4))), f[4] && (this.yText2 = new Pt(`${c ? "My" : "Ry"}: ` + f[4].toFixed(4))), f[2] && (this.zText1 = new Pt(`${c ? "Fz" : "Dz"}: ` + f[2].toFixed(4))), f[5] && (this.zText2 = new Pt(`${c ? "Mz" : "Rz"}: ` + f[5].toFixed(4))), (f[0] || f[3]) && (this.xArrow = new cn(new x(1, 0, 0), new x(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[1] || f[4]) && (this.yArrow = new cn(new x(0, 1, 0), new x(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[2] || f[5]) && (this.zArrow = new cn(new x(0, 0, 1), new x(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(i) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(i, i, i), (_b = this.yArrow) == null ? void 0 : _b.scale.set(i, i, i), (_c = this.zArrow) == null ? void 0 : _c.scale.set(i, i, i), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * i, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * i, 0, 0.5 * i), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * i, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * i, 0.5 * i), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * i), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * i + 0.5 * i), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * i), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * i), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * i), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * i), (_n2 = this.zText1) == null ? void 0 : _n2.updateScale(0.4 * i), (_o2 = this.zText2) == null ? void 0 : _o2.updateScale(0.4 * i);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var On = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(On || {});
function us(e, i, w, f) {
  const c = new st();
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    c.children.forEach((m) => m.dispose()), c.clear();
    const S = On[i.nodeResults.rawVal], g = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[S]) == null ? void 0 : _b.forEach((m, y) => {
      const M = new ps(w.rawVal[y], S, m ?? [0, 0, 0, 0, 0, 0]);
      M.updateScale(g * f.rawVal), c.add(M);
    });
  }), I.derive(() => {
    if (f.val, i.nodeResults.rawVal == "none") return;
    const S = 0.05 * i.gridSize.val;
    c.children.forEach((g) => g.updateScale(S * f.rawVal));
  }), I.derive(() => {
    c.visible = i.nodeResults.val != "none";
  }), c;
}
function fs({ drawingObj: e, gridObj: i, scene: w, getActiveCamera: f, controls: c, gridSize: S, derivedDisplayScale: g, rendererElm: m, viewerRender: y }) {
  const M = new Ro(), P = new Bo(), v = (n) => {
    const o = m.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const p = r / 2;
      if (a >= p) return P.x = (a - p) / p * 2 - 1, P.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? f();
      P.x = a / p * 2 - 1;
    } else P.x = a / r * 2 - 1;
    return P.y = -(t / s) * 2 + 1, f();
  }, W = new et(new An(1e4, 1e4), new at({ side: Xt, transparent: true, opacity: 0, depthWrite: false }));
  W.visible = true, W.frustumCulled = false, w.add(W);
  const oe = (n, o, a) => {
    const t = new et(new An(1e4, 1e4), new at({ side: Xt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, w.add(t), t;
  }, he = oe(Math.PI / 2, 0, 0), ce = oe(0, Math.PI / 2, 0), _ = () => {
    if (he.visible = !!window.__hekatanGridPlaneXZ, ce.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && G.visible) {
      const a = M.intersectObjects([G, te, ne], false);
      if (a.length > 0) return a;
    }
    const o = [W];
    return he.visible && o.push(he), ce.visible && o.push(ce), Ue.visible && Oe.length > 0 && o.push(...Oe), M.intersectObjects(o, false);
  }, H = new In(new me(), new $n()), we = new In(new me(), new $n({ color: "gray", sizeAttenuation: false, size: 6 })), se = new In(new me(), new $n({ color: "orange", size: 0.1 }));
  w.add(se);
  const U = document.createElement("input");
  U.id = "hk-rubber-label", U.type = "text", U.spellcheck = false, U.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, U.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(U);
  let pe = null, J = null, B = false;
  const $ = new x(), E = (n, o, a, t, r, s) => {
    const l = t - n, p = r - o, u = s - a, b = Math.hypot(l, p, u);
    if (b < 0.01) {
      U.style.display = "none";
      return;
    }
    pe = [n, o, a], J = [l / b, p / b, u / b], $.set((n + t) / 2, (o + r) / 2, (a + s) / 2), $.project(f());
    const k = m.getBoundingClientRect(), d = k.left + ($.x * 0.5 + 0.5) * k.width, h = k.top + (-$.y * 0.5 + 0.5) * k.height;
    if (U.style.left = d + "px", U.style.top = h + "px", U.style.display = "block", !B) {
      if (U.value = `${b.toFixed(2)} m`, document.activeElement !== U) {
        const z = document.activeElement;
        z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA") && z !== U || U.focus({ preventScroll: true });
      }
      try {
        U.select();
      } catch {
      }
    }
  }, F = () => {
    U.style.display = "none", pe = null, J = null, B = false, document.activeElement === U && U.blur();
  }, V = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Et = n, de(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), U.blur();
      return;
    }
    if (!pe || !J || !e.polylines) return;
    let a = J[0], t = J[1], r = J[2];
    We === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : We === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : We === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = pe[0] + a * n, l = pe[1] + t * n, p = pe[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, p]];
    const u = e.polylines.rawVal, b = u.length ? u[u.length - 1] : [];
    e.polylines.val = [...u.slice(0, -1), [...b, e.points.rawVal.length - 1]], U.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    y();
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
        const [s, l, p] = r;
        return { kind: "relSpherical", L: s, az: l, el: p };
      }
      return null;
    }
    if (o.includes(",")) {
      const r = o.split(",").map((u) => parseFloat(u.trim()));
      if (r.some(isNaN)) return null;
      const [s, l, p = 0] = r;
      return a ? { kind: "relCart", dx: s, dy: l, dz: p } : { kind: "absCart", x: s, y: l, z: p };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, D = (n) => {
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
  }, ee = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], U.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    y();
  };
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = C(n);
    if (!o) return false;
    if (o.kind === "length") return V(o.L), true;
    const a = D(o);
    if (!a) return false;
    if (ee(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
  }, U.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = C(U.value);
      if (!a) return;
      if (B = false, a.kind === "length") V(a.L), de(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = D(a);
        if (!t) return;
        ee(t);
        const r = a.kind;
        de(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), B = false, U.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!B && U.style.display === "block") try {
          U.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (B = true);
  }), window.addEventListener("keydown", (n) => {
    if (!pe || !J || document.activeElement === U) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (U.value = n.key, U.focus(), U.setSelectionRange(1, 1), n.preventDefault());
  });
  const Y = document.createElement("div");
  Y.id = "hk-coord-readout", Y.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", Y.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(Y);
  const xe = document.createElement("div");
  xe.id = "hk-coord-fixed", xe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", xe.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(xe);
  const A = new Lt(new me().setFromPoints([new x(0, 0, 0), new x(0, 0, 0)]), new _n({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  A.frustumCulled = false, A.visible = false, w.add(A);
  const N = new Lt(new me(), new wt({ color: 2282478, transparent: true, opacity: 0.9 }));
  N.frustumCulled = false, N.visible = false, w.add(N);
  let O = [];
  const ie = new st();
  ie.frustumCulled = false, ie.visible = false, w.add(ie);
  const Q = (n) => {
    const o = new me().setFromPoints([new x(0, 0, 0), new x(0, 0, 0)]), a = new _n({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Lt(o, a);
  }, Se = Q(16711680), be = Q(65280), Me = Q(35071);
  ie.add(Se, be, Me);
  const Ve = (n) => {
    const o = new me().setFromPoints([new x(0, 0, 0), new x(0, 0, 0), new x(0, 0, 0), new x(0, 0, 0)]), a = new wt({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new So(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, De = Ve(3462041), xt = Ve(16724804), bt = Ve(6333946), je = new st();
  je.frustumCulled = false, je.visible = false, w.add(je), je.add(De, xt, bt);
  const T = (n) => {
    const o = new An(1, 1), a = new at({ color: n, transparent: true, opacity: 0.06, side: Xt, depthWrite: false }), t = new et(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, G = T(3462041), te = T(16724804), ne = T(6333946);
  je.add(G, te, ne);
  const Ce = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, Be = document.createElement("div");
  Be.id = "hk-refplane-badge", Be.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Be), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, je.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      qe(De, s, "xy", l), qe(xt, s, "xz", l), qe(bt, s, "yz", l), Ce(G, s, "xy", l), Ce(te, s, "xz", l), Ce(ne, s, "yz", l), G.material.opacity = 0.1, te.material.opacity = 0.1, ne.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    y();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !je.visible) {
      y();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    qe(De, s, "xy", n), qe(xt, s, "xz", n), qe(bt, s, "yz", n), Ce(G, s, "xy", n), Ce(te, s, "xz", n), Ce(ne, s, "yz", n), y();
  };
  const ut = (n) => {
    if (G.material.opacity = n === "xy" ? 0.14 : 0.04, te.material.opacity = n === "xz" ? 0.14 : 0.04, ne.material.opacity = n === "yz" ? 0.14 : 0.04, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      Be.style.background = r.bg, Be.style.color = r.text, Be.textContent = `\u25A6 Plano ${n.toUpperCase()}`, Be.style.display = "block";
    } else Be.style.display = "none";
  }, qe = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new x(o[0] - t, o[1] - t, o[2]), new x(o[0] + t, o[1] - t, o[2]), new x(o[0] + t, o[1] + t, o[2]), new x(o[0] - t, o[1] + t, o[2]), new x(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new x(o[0] - t, o[1], o[2] - t), new x(o[0] + t, o[1], o[2] - t), new x(o[0] + t, o[1], o[2] + t), new x(o[0] - t, o[1], o[2] + t), new x(o[0] - t, o[1], o[2] - t)] : r = [new x(o[0], o[1] - t, o[2] - t), new x(o[0], o[1] + t, o[2] - t), new x(o[0], o[1] + t, o[2] + t), new x(o[0], o[1] - t, o[2] + t), new x(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let We = null;
  window.__hekatanAxisLock = () => We;
  let It = null;
  const it = document.createElement("div");
  it.id = "hk-axis-lock-badge", it.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(it);
  const Kt = () => {
    if (!We) {
      it.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    it.style.background = "rgba(15,23,42,0.92)", it.style.color = n[We], it.style.border = `1.5px solid ${n[We]}`, it.textContent = `\u{1F512} LOCK ${We.toUpperCase()}`, it.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== U) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && O.length >= 3) {
      const r = Ye();
      de(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") We = We === a ? null : a, Kt(), n.preventDefault();
    else if (n.key === "Escape") {
      const r = document.activeElement;
      r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && r.blur(), no(), n.preventDefault();
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
  const Ut = new x(), K = new x(), ue = new x(), ze = (n) => {
    if (!We) return null;
    const o = n[0], a = n[1], t = n[2];
    return We === "x" ? (Ut.set(o - 1e4, a, t), K.set(o + 1e4, a, t)) : We === "y" ? (Ut.set(o, a - 1e4, t), K.set(o, a + 1e4, t)) : (Ut.set(o, a, t - 1e4), K.set(o, a, t + 1e4)), M.ray.distanceSqToSegment(Ut, K, null, ue), ue;
  };
  window.__hekatanProjectOnAxis = ze;
  const j = new Lt(new me().setFromPoints([new x(0, 0, 0), new x(0, 0, 0)]), new wt({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  j.renderOrder = 998, j.frustumCulled = false, j.visible = false, w.add(j);
  let Te = -1, Xe = -1, Ge = -1;
  const re = /* @__PURE__ */ new Set();
  window.__hekatanSelection = re;
  const Ee = new Lt(new me().setFromPoints([new x(), new x()]), new wt({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  Ee.renderOrder = 997, Ee.frustumCulled = false, Ee.visible = false, w.add(Ee);
  const ke = new et(new yn(0.02, 12, 12), new at({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  ke.renderOrder = 998, ke.visible = false, w.add(ke);
  const Mt = (n) => {
    const o = f();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, gt = () => {
    ke.visible && ke.scale.setScalar(Mt(ke.position));
  }, $e = new st();
  $e.frustumCulled = false, w.add($e);
  const ct = 2282478;
  let _e = null;
  const yt = (n, o, a, t) => {
    if (!e.points) return -1;
    const r = e.points.rawVal;
    let s = -1, l = t;
    for (let p = 0; p < r.length; p++) {
      const u = r[p];
      if (!u) continue;
      const b = Math.hypot(n - u[0], o - u[1], a - u[2]);
      b < l && (l = b, s = p);
    }
    return s;
  }, Qe = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; $e.children.length; ) {
      const l = $e.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of re) {
      const [p, ...u] = l.split(":");
      if (p === "pt") {
        const b = n[+u[0]];
        if (!b) continue;
        const k = new et(new yn(0.025, 12, 12), new at({ color: ct, transparent: true, opacity: 0.9, depthTest: false }));
        k.position.set(b[0], b[1], b[2]), k.renderOrder = 999, k.__isSelectionPt = true, $e.add(k);
      } else if (p === "seg") {
        const b = o[+u[0]], k = n[b == null ? void 0 : b[+u[1]]], d = n[b == null ? void 0 : b[+u[1] + 1]];
        if (!k || !d) continue;
        const h = new me().setFromPoints([new x(k[0], k[1], k[2]), new x(d[0], d[1], d[2])]), z = new Lt(h, new wt({ color: ct, transparent: true, opacity: 0.95, depthTest: false }));
        z.renderOrder = 999, $e.add(z);
      } else if (p === "poly") {
        const k = o[+u[0]].map((z) => {
          const X = n[z];
          return X ? new x(X[0], X[1], X[2]) : null;
        }).filter(Boolean);
        if (k.length < 2) continue;
        const d = new me().setFromPoints(k), h = new Lt(d, new wt({ color: ct, transparent: true, opacity: 0.95, depthTest: false }));
        h.renderOrder = 999, $e.add(h);
      } else if (p === "aux") {
        const b = t[+u[0]];
        if (!b || b.length !== 6) continue;
        const k = new me().setFromPoints([new x(b[0], b[1], b[2]), new x(b[3], b[4], b[5])]), d = new Lt(k, new wt({ color: ct, transparent: true, opacity: 0.95, depthTest: false }));
        d.renderOrder = 999, $e.add(d);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), y();
  };
  window.__hekatanRefreshSelection = Qe, window.__hekatanClearSelection = () => {
    re.clear(), Qe();
  };
  const sn = (n, o, a, t, r, s, l, p, u) => {
    const b = l - t, k = p - r, d = u - s, h = b * b + k * k + d * d;
    if (h < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let z = ((n - t) * b + (o - r) * k + (a - s) * d) / h;
    z = Math.max(0, Math.min(1, z));
    const X = t + z * b, Z = r + z * k, q = s + z * d;
    return Math.hypot(n - X, o - Z, a - q);
  }, tt = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, p = -1, u = t;
    for (let b = 0; b < r.length; b++) {
      const k = r[b];
      for (let d = 0; d < k.length - 1; d++) {
        const h = s[k[d]], z = s[k[d + 1]];
        if (!h || !z) continue;
        const X = sn(n, o, a, h[0], h[1], h[2], z[0], z[1], z[2]);
        X < u && (u = X, l = b, p = d);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: p, dist: u } : null;
  }, Ht = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, p = t;
    for (let u = 0; u < s.length; u++) {
      const b = s[u];
      if (!b || b.length !== 6) continue;
      const k = sn(n, o, a, b[0], b[1], b[2], b[3], b[4], b[5]);
      k < p && (p = k, l = u);
    }
    return l;
  }, Wt = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      j.visible = false;
      return;
    }
    j.geometry.setFromPoints([new x(t[0], t[1], t[2]), new x(t[3], t[4], t[5])]), j.visible = true;
  }, Ne = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      j.visible = false;
      return;
    }
    const r = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, s = [];
    if (r || o < 0 || o >= a.length - 1) for (const l of a) {
      const p = t[l];
      p && s.push(new x(p[0], p[1], p[2]));
    }
    else {
      const l = t[a[o]], p = t[a[o + 1]];
      l && s.push(new x(l[0], l[1], l[2])), p && s.push(new x(p[0], p[1], p[2]));
    }
    j.geometry.setFromPoints(s), j.visible = true;
  }, Fe = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((u, b) => b !== n), t = /* @__PURE__ */ new Set();
    for (const u of a) for (const b of u) t.add(b);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let u = 0; u < r.length; u++) t.has(u) && (s.set(u, l.length), l.push(r[u]));
    const p = a.map((u) => u.map((b) => s.get(b)).filter((b) => b !== void 0));
    e.points.val = l, e.polylines.val = p, e.areas && (e.areas.val = e.areas.rawVal.filter((u) => u !== n).map((u) => u > n ? u - 1 : u)), j.visible = false, Te = -1, Xe = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, ve = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const a = e.polylines.rawVal;
    if (n < 0 || n >= a.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      Fe(n);
      return;
    }
    const r = a[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      Fe(n);
      return;
    }
    let s;
    o === 0 ? s = [r.slice(1)] : o === r.length - 2 ? s = [r.slice(0, -1)] : s = [r.slice(0, o + 1), r.slice(o + 1)];
    const l = [...a.slice(0, n), ...s, ...a.slice(n + 1)], p = /* @__PURE__ */ new Set();
    for (const h of l) for (const z of h) p.add(z);
    const u = e.points.rawVal, b = /* @__PURE__ */ new Map(), k = [];
    for (let h = 0; h < u.length; h++) p.has(h) && (b.set(h, k.length), k.push(u[h]));
    const d = l.map((h) => h.map((z) => b.get(z)).filter((z) => z !== void 0));
    if (e.points.val = k, e.polylines.val = d, e.areas) {
      const h = s.length - 1;
      e.areas.val = e.areas.rawVal.map((z) => z > n ? z + h : z);
    }
    j.visible = false, Te = -1, Xe = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  H.geometry.setAttribute("position", new Rt(e.points.rawVal.flat(), 3)), H.geometry.computeBoundingSphere(), H.frustumCulled = false, we.frustumCulled = false, w.add(we), W.position.set(0, 0, 0), W.rotateX(Math.PI / 2), W.geometry.rotateX(Math.PI / 2), W.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const l = Math.max(4, Math.round(r)), p = e.points.rawVal.length, u = [];
    for (let b = 0; b < l; b++) {
      const k = 2 * Math.PI * b / l, d = t * Math.cos(k), h = t * Math.sin(k);
      let z;
      s === "xy" ? z = [n + d, o + h, a] : s === "xz" ? z = [n + d, o, a + h] : z = [n, o + d, a + h], u.push(z);
    }
    if (e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const b = [...u.map((d, h) => p + h), p], k = e.polylines.rawVal;
      ((_a = k[k.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...k, b, []] : e.polylines.val = [...k.slice(0, -1), b, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new x(...n), l = new x(...o), p = new x(...a), u = new x().subVectors(l, s), b = new x().subVectors(p, s), k = new x().crossVectors(u, b).normalize(), d = new x().addVectors(s, l).multiplyScalar(0.5), h = new x().addVectors(l, p).multiplyScalar(0.5), z = new x().crossVectors(u, k).normalize(), X = new x().crossVectors(new x().subVectors(p, l), k).normalize(), Z = new x().subVectors(h, d), q = z.x * X.y - z.y * X.x;
    let L;
    if (Math.abs(q) > 1e-9) {
      const Je = (Z.x * X.y - Z.y * X.x) / q;
      L = new x().addVectors(d, z.clone().multiplyScalar(Je));
    } else L = d.clone();
    const ae = s.distanceTo(L), fe = new x().subVectors(s, L), Pe = new x().subVectors(p, L), ye = Math.acos(Math.max(-1, Math.min(1, fe.dot(Pe) / (ae * ae)))), Ae = e.points.rawVal.length, dt = [], ft = k.clone();
    for (let Je = 0; Je <= r; Je++) {
      const Ie = Je / r, pt = ye * Ie, lt = new io().setFromAxisAngle(ft, pt), ht = fe.clone().applyQuaternion(lt).add(L);
      dt.push([ht.x, ht.y, ht.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...dt], e.polylines) {
      const Je = dt.map((pt, lt) => Ae + lt), Ie = e.polylines.rawVal;
      e.polylines.val = [...Ie.slice(0, -1), Je, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), p = Math.min(n[1], o[1]), u = Math.max(n[1], o[1]), b = (n[2] + o[2]) / 2, k = l - s, d = u - p, h = Math.min(a, k / 2 - 0.01, d / 2 - 0.01);
    if (h <= 0) return;
    const z = e.points.rawVal.length, X = [], Z = [], q = (L, ae) => {
      X.push([L, ae, b]), Z.push(z + X.length - 1);
    };
    for (let L = 0; L <= r; L++) q(s + h + (k - 2 * h) * L / r, p);
    for (let L = 1; L <= t; L++) {
      const ae = -Math.PI / 2 + Math.PI / 2 * L / t;
      q(l - h + h * Math.cos(ae), p + h + h * Math.sin(ae));
    }
    for (let L = 1; L <= r; L++) q(l, p + h + (d - 2 * h) * L / r);
    for (let L = 1; L <= t; L++) {
      const ae = 0 + Math.PI / 2 * L / t;
      q(l - h + h * Math.cos(ae), u - h + h * Math.sin(ae));
    }
    for (let L = 1; L <= r; L++) q(l - h - (k - 2 * h) * L / r, u);
    for (let L = 1; L <= t; L++) {
      const ae = Math.PI / 2 + Math.PI / 2 * L / t;
      q(s + h + h * Math.cos(ae), u - h + h * Math.sin(ae));
    }
    for (let L = 1; L <= r; L++) q(s, u - h - (d - 2 * h) * L / r);
    for (let L = 1; L <= t; L++) {
      const ae = Math.PI + Math.PI / 2 * L / t;
      q(s + h + h * Math.cos(ae), p + h + h * Math.sin(ae));
    }
    if (Z.push(z), e.points.val = [...e.points.rawVal, ...X], e.polylines) {
      const L = e.polylines.rawVal;
      e.polylines.val = [...L.slice(0, -1), Z, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], p = o[1], u = o[2];
    let b;
    if (Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, p, s], [t, p, s]] : Math.abs(r - p) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, p, s], [t, p, u], [t, r, u]], e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const k = [a, a + 1, a + 2, a + 3, a], d = e.polylines.rawVal;
      e.polylines.val = [...d.slice(0, -1), k, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], p = o[1], u = o[2];
    let b;
    if (Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, p, s], [t, p, s]] : Math.abs(r - p) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, p, s], [t, p, u], [t, r, u]], window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const k = e.polylines.rawVal, d = k.length - 1, h = [a, a + 1, a + 2, a + 3, a];
      e.polylines.val = [...k.slice(0, -1), h, []], e.areas && (e.areas.val = [...e.areas.rawVal, d]);
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    y();
  }, window.__hekatanMeshPolyArea = (n, o) => {
    var _a;
    const a = n.length;
    if (a < 3) return 0;
    let t = 0, r = 0, s = 0;
    for (let ge = 0; ge < a; ge++) {
      const Le = n[ge], ot = n[(ge + 1) % a];
      t += (Le[1] - ot[1]) * (Le[2] + ot[2]), r += (Le[2] - ot[2]) * (Le[0] + ot[0]), s += (Le[0] - ot[0]) * (Le[1] + ot[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let p = n[1][0] - n[0][0], u = n[1][1] - n[0][1], b = n[1][2] - n[0][2];
    const k = Math.hypot(p, u, b) || 1;
    p /= k, u /= k, b /= k;
    let d = r * b - s * u, h = s * p - t * b, z = t * u - r * p;
    const X = Math.hypot(d, h, z) || 1;
    d /= X, h /= X, z /= X;
    const Z = n[0], q = (ge) => [(ge[0] - Z[0]) * p + (ge[1] - Z[1]) * u + (ge[2] - Z[2]) * b, (ge[0] - Z[0]) * d + (ge[1] - Z[1]) * h + (ge[2] - Z[2]) * z], L = (ge, Le) => [Z[0] + ge * p + Le * d, Z[1] + ge * u + Le * h, Z[2] + ge * b + Le * z], ae = n.map(q);
    let fe = 1 / 0, Pe = -1 / 0, ye = 1 / 0, Ae = -1 / 0;
    for (const [ge, Le] of ae) ge < fe && (fe = ge), ge > Pe && (Pe = ge), Le < ye && (ye = Le), Le > Ae && (Ae = Le);
    const dt = Pe - fe, ft = Ae - ye;
    if (dt < 1e-6 || ft < 1e-6) return 0;
    let Je = o && o > 0 ? o : 0.5;
    for (; dt / Je * (ft / Je) > 2500; ) Je *= 2;
    Je = Math.min(Je, Math.min(dt, ft));
    const Ie = (ge, Le) => {
      let ot = false;
      for (let Dt = 0, jt = ae.length - 1; Dt < ae.length; jt = Dt++) {
        const [mn, bn] = ae[Dt], [wn, Mn] = ae[jt];
        bn > Le != Mn > Le && ge < (wn - mn) * (Le - bn) / (Mn - bn) + mn && (ot = !ot);
      }
      return ot;
    }, pt = Math.max(1, Math.round(dt / Je)), lt = Math.max(1, Math.round(ft / Je)), ht = dt / pt, Vt = ft / lt, Ot = /* @__PURE__ */ new Map(), Nt = [], kt = e.points.rawVal.length, Yt = (ge, Le) => {
      const ot = ge + "," + Le, Dt = Ot.get(ot);
      if (Dt !== void 0) return Dt;
      const jt = kt + Nt.length;
      return Nt.push(L(fe + ge * ht, ye + Le * Vt)), Ot.set(ot, jt), jt;
    }, Tt = [];
    for (let ge = 0; ge < pt; ge++) for (let Le = 0; Le < lt; Le++) {
      if (!Ie(fe + (ge + 0.5) * ht, ye + (Le + 0.5) * Vt)) continue;
      const ot = Yt(ge, Le), Dt = Yt(ge + 1, Le), jt = Yt(ge + 1, Le + 1), mn = Yt(ge, Le + 1);
      Tt.push([ot, Dt, jt, mn]);
    }
    if (!Tt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...Nt], e.polylines && e.areas) {
      let ge = e.polylines.rawVal.slice();
      ge.length && ge[ge.length - 1].length === 0 && (ge = ge.slice(0, -1));
      const Le = [];
      for (const ot of Tt) Le.push(ge.length), ge.push([ot[0], ot[1], ot[2], ot[3], ot[0]]);
      ge.push([]), e.polylines.val = ge, e.areas.val = [...e.areas.rawVal, ...Le];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return y(), Tt.length;
  };
  const Ye = () => {
    if (O.length < 3) return O = [], N.visible = false, y(), 0;
    const n = window.__hekatanMeshPolyArea(O.slice());
    return O = [], N.visible = false, y(), n;
  };
  window.__hekatanFinalizePolyArea = Ye;
  const le = new st();
  le.visible = false, w.add(le), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; le.children.length; ) {
      const k = le.children.pop();
      (_a = k.geometry) == null ? void 0 : _a.dispose(), (_b = k.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, p = Math.max(...n) + t, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", b = (k, d, h, z, X) => {
      const Z = document.createElement("canvas");
      Z.width = 64, Z.height = 32;
      const q = Z.getContext("2d");
      q.fillStyle = X, q.font = "bold 22px sans-serif", q.textAlign = "center", q.fillText(k, 32, 26);
      const L = new lo(Z), ae = new ro({ map: L, transparent: true }), fe = new co(ae);
      return fe.position.set(d, h, z), fe.scale.set(1.2, 0.6, 1), fe;
    };
    n.forEach((k, d) => {
      const h = d < u.length ? u[d] : `X${d}`, z = new me().setFromPoints([new x(k, r, 0), new x(k, s, 0), new x(k, r, 0), new x(k, r, a)]), X = new _n({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), Z = new on(z, X);
      Z.computeLineDistances(), le.add(Z), le.add(b(h, k, r - 0.5, 0, "#60a5fa")), le.add(b(h, k, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((k, d) => {
      const h = `${d + 1}`, z = new me().setFromPoints([new x(l, k, 0), new x(p, k, 0), new x(l, k, 0), new x(l, k, a)]), X = new _n({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), Z = new on(z, X);
      Z.computeLineDistances(), le.add(Z), le.add(b(h, l - 0.5, k, 0, "#fb7185")), le.add(b(h, p + 0.5, k, 0, "#fb7185"));
    }), le.visible = true, y();
  }, window.__hekatanHideAxes = () => {
    le.visible = false, y();
  };
  const Ue = new st();
  Ue.visible = false, w.add(Ue);
  let Oe = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; Ue.children.length; ) {
      const s = Ue.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Oe.forEach((s) => {
      w.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Oe = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const p = r[l % r.length], u = o / 2, b = [new x(a - u, t - u, s), new x(a + u, t - u, s), new x(a + u, t + u, s), new x(a - u, t + u, s), new x(a - u, t - u, s)], k = new me().setFromPoints(b), d = new wt({ color: p, transparent: true, opacity: 0.55 });
      Ue.add(new Lt(k, d));
      const h = document.createElement("canvas");
      h.width = 128, h.height = 32;
      const z = h.getContext("2d");
      z.fillStyle = `#${p.toString(16).padStart(6, "0")}`, z.font = "bold 18px sans-serif", z.fillText(`Z = ${s} m`, 4, 22);
      const X = new lo(h), Z = new ro({ map: X, transparent: true }), q = new co(Z);
      q.position.set(a - u - 1.5, t - u - 1.5, s), q.scale.set(2.5, 0.6, 1), Ue.add(q);
      const L = new An(1e4, 1e4), ae = new at({ visible: false, side: Xt }), fe = new et(L, ae);
      fe.position.set(0, 0, s), fe.frustumCulled = false, fe.userData = { refPlaneZ: s }, w.add(fe), Oe.push(fe);
    }), Ue.visible = true, y();
  }, window.__hekatanHideRefPlanes = () => {
    Ue.visible = false, Oe.forEach((n) => {
      n.visible = false;
    }), y();
  };
  const Ct = new st();
  Ct.frustumCulled = false, w.add(Ct);
  const Ke = () => {
    var _a, _b, _c, _d;
    for (; Ct.children.length; ) {
      const a = Ct.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new me().setFromPoints([new x(a[0], a[1], a[2]), new x(a[3], a[4], a[5])]), r = new _n({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new Lt(t, r);
      s.computeLineDistances(), Ct.add(s);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Ke(), y());
  });
  const Ze = new st();
  Ze.frustumCulled = false, w.add(Ze);
  const zt = () => {
    var _a, _b, _c, _d;
    for (; Ze.children.length; ) {
      const a = Ze.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new et(new yn(0.025, 12, 12), new at({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(Mt(t.position)), Ze.add(t);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, zt(), y());
  }), c.addEventListener("change", () => {
    Ze.children.forEach((n) => {
      n.scale.setScalar(Mt(n.position));
    });
  }), window.__hekatanRenderAuxPoints = zt;
  const He = new st(), en = new et(new yn(0.01, 12, 12), new at({ color: 16724804, transparent: true, opacity: 0.95 })), Gt = new et(new yn(0.015, 12, 12), new at({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  He.add(en, Gt);
  const Ft = 0.08, _t = (n, o, a) => {
    const t = new me().setFromPoints([new x(...n), new x(...o)]);
    return new Lt(t, new wt({ color: a, transparent: true, opacity: 0.7 }));
  };
  He.add(_t([-Ft, 0, 0], [Ft, 0, 0], 16711680)), He.add(_t([0, -Ft, 0], [0, Ft, 0], 65280)), He.add(_t([0, 0, -Ft], [0, 0, Ft], 35071)), He.visible = false, He.frustumCulled = false, w.add(He);
  const tn = 40, Pn = 2.5, pn = () => {
    if (!He.visible) return;
    const o = f().position.distanceTo(He.position), a = Math.max(0.05, Math.min(Pn, o / tn));
    He.scale.setScalar(a);
  }, un = () => {
    $e.children.length !== 0 && $e.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(Mt(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = un, c.addEventListener("change", () => {
    pn(), ke.visible && gt();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = f().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / tn));
    }
    un();
  }), window.__hekatanShowSnap = (n, o, a) => {
    He.position.set(n, o, a), He.visible = true, pn(), y();
  }, window.__hekatanHideSnap = () => {
    He.visible = false, y();
  }, m.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = _();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) eo(s.type, s.x, s.y, s.z), He.position.set(s.x, s.y, s.z), He.visible = true, t.set(s.x, s.y, s.z);
      else {
        Xn();
        const k = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0.5;
        k && d > 0 && (t.x = Math.round(t.x / d) * d, t.y = Math.round(t.y / d) * d, t.z = Math.round(t.z / d) * d), He.position.copy(t), He.visible = true;
      }
      pn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, d = yt(t.x, t.y, t.z, k), h = tt(t.x, t.y, t.z, k), z = Ht(t.x, t.y, t.z, k);
        if (d >= 0) {
          const L = e.points.rawVal[d];
          ke.position.set(L[0], L[1], L[2]), ke.visible = true, gt(), Ee.visible = false, _e = { kind: "pt", a: d };
        } else if (h) {
          const L = e.points.rawVal, ae = e.polylines.rawVal[h.polyIdx], fe = L[ae[h.segIdx]], Pe = L[ae[h.segIdx + 1]];
          Ee.geometry.setFromPoints([new x(fe[0], fe[1], fe[2]), new x(Pe[0], Pe[1], Pe[2])]), Ee.visible = true, ke.visible = false, _e = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(h.polyIdx)) ?? false ? { kind: "poly", a: h.polyIdx } : { kind: "seg", a: h.polyIdx, b: h.segIdx };
        } else if (z >= 0) {
          const ae = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[z];
          ae && (Ee.geometry.setFromPoints([new x(ae[0], ae[1], ae[2]), new x(ae[3], ae[4], ae[5])]), Ee.visible = true, ke.visible = false, _e = { kind: "aux", a: z });
        } else Ee.visible = false, ke.visible = false, _e = null;
        Y.style.left = n.clientX + "px", Y.style.top = n.clientY + "px", Y.style.display = "block";
        let X = t;
        if ((_e == null ? void 0 : _e.kind) === "pt") {
          const L = e.points.rawVal[_e.a];
          L && (X = new x(L[0], L[1], L[2]));
        }
        const Z = `X=${X.x.toFixed(2)} Y=${X.y.toFixed(2)} Z=${X.z.toFixed(2)}`;
        if (_e) {
          const L = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          Y.textContent = `${Z}  \xB7  \u{1F5B1} Click \u2192 ${L[_e.kind]}`;
        } else Y.textContent = Z;
        const q = document.getElementById("hk-coord-fixed");
        q && (q.textContent = Z), A.visible = false, ie.visible = false, y();
        return;
      }
      if (l === "delete") {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, d = tt(t.x, t.y, t.z, k), h = Ht(t.x, t.y, t.z, k);
        let z = false;
        if (h >= 0) if (!d) z = true;
        else {
          const L = window.__hekatanDrawingAuxLines, fe = ((L == null ? void 0 : L.rawVal) ?? (L == null ? void 0 : L.val) ?? L ?? [])[h];
          sn(t.x, t.y, t.z, fe[0], fe[1], fe[2], fe[3], fe[4], fe[5]) < d.dist && (z = true);
        }
        z ? (Ge = h, Te = -1, Xe = -1, Wt(h)) : d ? (Te = d.polyIdx, Xe = d.segIdx, Ge = -1, Ne(d.polyIdx, d.segIdx)) : (Te = -1, Xe = -1, Ge = -1, j.visible = false), A.visible = false, ie.visible = false, F(), Y.style.left = n.clientX + "px", Y.style.top = n.clientY + "px", Y.style.display = "block";
        const X = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let Z = "";
        z ? Z = `\u{1F5D1} l\xEDnea aux #${Ge + 1}` : d ? Z = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(d.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${d.polyIdx + 1}` : `\u{1F5D1} seg ${d.segIdx + 1} / poly #${d.polyIdx + 1}` : Z = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", Y.textContent = `${X}  \xB7  ${Z}`;
        const q = document.getElementById("hk-coord-fixed");
        q && (q.textContent = X), y();
        return;
      } else j.visible = false, Te = -1, Ge = -1;
      Y.style.left = n.clientX + "px", Y.style.top = n.clientY + "px", Y.style.display = "block";
      const p = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], u = p[p.length - 1] ?? [], b = e.points.rawVal ?? [];
      if (u.length > 0 && b[u[u.length - 1]]) {
        const k = u[u.length - 1], d = b[k];
        let h = We;
        if (It = null, !h && window.__hekatanAxisSnap !== false) {
          const Ie = m.getBoundingClientRect(), pt = n.clientX, lt = n.clientY, ht = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Vt = new x(d[0], d[1], d[2]), Ot = [["x", new x(1, 0, 0)], ["y", new x(0, 1, 0)], ["z", new x(0, 0, 1)]], Nt = (Yt) => {
            const Tt = Yt.clone().project(o);
            return { x: (Tt.x * 0.5 + 0.5) * Ie.width + Ie.left, y: (-Tt.y * 0.5 + 0.5) * Ie.height + Ie.top };
          };
          let kt = null;
          for (const [Yt, Tt] of Ot) {
            const ge = Nt(Vt.clone().addScaledVector(Tt, -ht)), Le = Nt(Vt.clone().addScaledVector(Tt, ht)), ot = Le.x - ge.x, Dt = Le.y - ge.y, jt = pt - ge.x, mn = lt - ge.y, bn = ot * ot + Dt * Dt || 1;
            let wn = (jt * ot + mn * Dt) / bn;
            wn = Math.max(0, Math.min(1, wn));
            const Mn = Math.hypot(pt - (ge.x + wn * ot), lt - (ge.y + wn * Dt));
            if (kt === null || Mn < kt.dpx) {
              const Nn = M.ray, oo = Vt.clone().sub(Nn.origin), Zn = Tt.dot(Nn.direction), so = Tt.dot(oo), To = Nn.direction.dot(oo), ao = 1 - Zn * Zn, Lo = Math.abs(ao) < 1e-6 ? -so : (Zn * To - so) / ao;
              kt = { axis: Yt, dpx: Mn, pt: Vt.clone().addScaledVector(Tt, Lo) };
            }
          }
          kt && kt.dpx <= 12 && (t.copy(kt.pt), h = kt.axis, It = kt.pt.clone());
        }
        const z = !!window.__hekatanOrthoMode;
        if (!h && z) {
          const Ie = Math.abs(t.x - d[0]), pt = Math.abs(t.y - d[1]), lt = Math.abs(t.z - d[2]), ht = (_l = a[0]) == null ? void 0 : _l.object;
          let Vt = null;
          ht === G ? Vt = "xy" : ht === te ? Vt = "xz" : ht === ne && (Vt = "yz"), Vt === "xy" ? h = Ie >= pt ? "x" : "y" : Vt === "xz" ? h = Ie >= lt ? "x" : "z" : Vt === "yz" ? h = pt >= lt ? "y" : "z" : h = Ie >= pt && Ie >= lt ? "x" : pt >= lt ? "y" : "z";
        }
        const X = window.__hekatanPolarTrack !== false;
        if (!h && X) {
          const Ie = t.x - d[0], pt = t.y - d[1], lt = t.z - d[2], ht = Math.hypot(Ie, pt, lt);
          if (ht > 1e-3) {
            const Ot = Math.tan(6 * Math.PI / 180) * ht, Nt = Math.hypot(pt, lt), kt = Math.hypot(Ie, lt), Yt = Math.hypot(Ie, pt), Tt = [["x", Nt], ["y", kt], ["z", Yt]];
            Tt.sort((ge, Le) => ge[1] - Le[1]), Tt[0][1] <= Ot && (h = Tt[0][0]);
          }
        }
        if (h) {
          const Ie = d[0], pt = d[1], lt = d[2];
          h === "x" ? t.set(t.x, pt, lt) : h === "y" ? t.set(Ie, t.y, lt) : t.set(Ie, pt, t.z);
          const ht = !!We, Ot = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[h];
          it.style.background = "rgba(15,23,42,0.92)", it.style.color = Ot, it.style.border = `1.5px solid ${Ot}`;
          const Nt = (_m = a[0]) == null ? void 0 : _m.object;
          let kt = null;
          Nt === G ? kt = "xy" : Nt === te ? kt = "xz" : Nt === ne && (kt = "yz");
          const Yt = kt ? ` (plano ${kt.toUpperCase()})` : "";
          it.textContent = ht ? `\u{1F512} LOCK ${h.toUpperCase()}${Yt}` : `\u22A5 ORTO ${h.toUpperCase()}${Yt}`, it.style.left = n.clientX + 20 + "px", it.style.top = n.clientY + 18 + "px", it.style.transform = "none", it.style.display = "block";
        } else We || (it.style.display = "none");
        const Z = Math.hypot(t.x - d[0], t.y - d[1], t.z - d[2]), q = Math.atan2(t.y - d[1], t.x - d[0]) * 180 / Math.PI, L = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        Y.textContent = `${L} | \u0394L=${Z.toFixed(2)}m ${q.toFixed(0)}\xB0`;
        const ae = document.getElementById("hk-coord-fixed");
        ae && (ae.textContent = L), A.geometry.setFromPoints([new x(d[0], d[1], d[2]), new x(t.x, t.y, t.z)]), (_n2 = A.computeLineDistances) == null ? void 0 : _n2.call(A), A.visible = true, E(d[0], d[1], d[2], t.x, t.y, t.z);
        const fe = window.__hekatanOrthoExt ?? 8, Pe = window.__hekatanShowOrthoPlanes !== false;
        je.visible = Pe, Pe || ut(null), Pe && (qe(De, d, "xy", fe), qe(xt, d, "xz", fe), qe(bt, d, "yz", fe), Ce(G, d, "xy", fe), Ce(te, d, "xz", fe), Ce(ne, d, "yz", fe));
        const ye = Pe ? M.intersectObjects([G, te, ne], false) : [];
        let Ae = null;
        if (ye.length > 0) {
          const Ie = ye[0].object;
          Ie === G ? Ae = "xy" : Ie === te ? Ae = "xz" : Ie === ne && (Ae = "yz");
        }
        ut(Ae), Ae && (Be.style.left = n.clientX + "px", Be.style.top = n.clientY + "px"), Se.geometry.setFromPoints([new x(d[0] - fe, d[1], d[2]), new x(d[0] + fe, d[1], d[2])]), (_o2 = Se.computeLineDistances) == null ? void 0 : _o2.call(Se), be.geometry.setFromPoints([new x(d[0], d[1] - fe, d[2]), new x(d[0], d[1] + fe, d[2])]), (_p = be.computeLineDistances) == null ? void 0 : _p.call(be), Me.geometry.setFromPoints([new x(d[0], d[1], d[2] - fe), new x(d[0], d[1], d[2] + fe)]), (_q = Me.computeLineDistances) == null ? void 0 : _q.call(Me), ie.visible = true;
        const dt = Se.material, ft = be.material, Je = Me.material;
        h === "x" ? (dt.opacity = 0.95, ft.opacity = 0.1, Je.opacity = 0.1) : h === "y" ? (dt.opacity = 0.1, ft.opacity = 0.95, Je.opacity = 0.1) : h === "z" ? (dt.opacity = 0.1, ft.opacity = 0.1, Je.opacity = 0.95) : (dt.opacity = 0.5, ft.opacity = 0.5, Je.opacity = 0.5);
      } else {
        const k = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        Y.textContent = k;
        const d = document.getElementById("hk-coord-fixed");
        if (d && (d.textContent = k), A.visible = false, ie.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (pe = null, J = null, U.style.left = n.clientX + 20 + "px", U.style.top = n.clientY - 28 + "px", U.style.display = "block", !B) {
            U.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const z = document.activeElement;
            !(z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA") && z !== U) && document.activeElement !== U && U.focus({ preventScroll: true });
            try {
              U.select();
            } catch {
            }
          }
        } else F();
      }
      y();
    } else Xn(), Y.style.display = "none", He.visible = false, A.visible = false, ie.visible = false, F(), y();
  }), I.derive(() => {
    e.gridTarget && (hs(i, { position: new x(...e.gridTarget.val.position), quaternion: new io().setFromEuler(new po(...e.gridTarget.val.rotation)) }, y), W.position.set(...e.gridTarget.val.position), W.quaternion.setFromEuler(new po(...e.gridTarget.val.rotation)), W.updateMatrixWorld());
  }), I.derive(() => {
    H.geometry.setAttribute("position", new Rt(e.points.val.flat(), 3)), H.geometry.computeBoundingSphere();
  }), I.derive(() => {
    const n = 0.05 * S * 0.5 * g.val;
    M.params.Points.threshold = 0.4 * n;
  }), I.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, p, u] = n[s];
      t.push(l, p, u);
    }
    const r = new me();
    r.setAttribute("position", new Rt(t, 3)), se.geometry.dispose(), se.geometry = r;
  });
  let nn = false, qt = 0;
  m.addEventListener("pointerdown", () => {
    nn = true;
  }), m.addEventListener("pointerup", () => {
    nn = false;
  }), m.addEventListener("pointermove", () => {
    nn && qt++;
  });
  const St = document.createElement("div");
  St.id = "hk-window-select", St.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(St);
  let Bt = null, an = false, $t = null;
  const fn = (n, o, a, t, r) => {
    r ? (St.style.borderColor = "#34d399", St.style.borderStyle = "dashed", St.style.background = "rgba(52, 211, 153, 0.10)") : (St.style.borderColor = "#22d3ee", St.style.borderStyle = "solid", St.style.background = "rgba(34, 211, 238, 0.10)"), St.style.left = Math.min(n, a) + "px", St.style.top = Math.min(o, t) + "px", St.style.width = Math.abs(a - n) + "px", St.style.height = Math.abs(t - o) + "px", St.style.display = "block";
  }, Cn = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), p = Math.min(o, t), u = Math.max(o, t), b = a < n, k = m.getBoundingClientRect(), d = f();
    d.updateMatrixWorld();
    const h = (ye) => {
      const Ae = new x(ye[0], ye[1], ye[2]);
      return Ae.project(d), { x: k.left + (Ae.x * 0.5 + 0.5) * k.width, y: k.top + (-Ae.y * 0.5 + 0.5) * k.height };
    }, z = (ye) => ye.x >= s && ye.x <= l && ye.y >= p && ye.y <= u, X = (ye, Ae) => !(ye.x < s && Ae.x < s || ye.x > l && Ae.x > l || ye.y < p && Ae.y < p || ye.y > u && Ae.y > u);
    r || re.clear();
    let Z = 0;
    const q = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ye = 0; ye < q.length; ye++) {
      const Ae = q[ye];
      Ae && z(h(Ae)) && (re.add(`pt:${ye}`), Z++);
    }
    const L = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ae = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ye = 0; ye < L.length; ye++) {
      const Ae = L[ye], dt = ae.includes(ye);
      let ft = false;
      for (let Je = 0; Je < Ae.length - 1; Je++) {
        const Ie = q[Ae[Je]], pt = q[Ae[Je + 1]];
        if (!Ie || !pt) continue;
        const lt = h(Ie), ht = h(pt);
        if (z(lt) || z(ht) || X(lt, ht)) {
          if (dt) {
            ft = true;
            break;
          }
          re.add(`seg:${ye}:${Je}`), Z++;
        }
      }
      dt && ft && (re.add(`poly:${ye}`), Z++);
    }
    const Pe = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ye = 0; ye < Pe.length; ye++) {
      const Ae = Pe[ye];
      if (!Ae || Ae.length !== 6) continue;
      const dt = h([Ae[0], Ae[1], Ae[2]]), ft = h([Ae[3], Ae[4], Ae[5]]);
      (z(dt) || z(ft) || X(dt, ft)) && (re.add(`aux:${ye}`), Z++);
    }
    Qe(), de(`${b ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${Z} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${re.size})`), St.style.display = "none";
  }, ln = () => {
    $t && ($t = null, St.style.display = "none", de("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = ln, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && $t && ln();
  });
  const zn = () => {
    var _a, _b, _c, _d;
    if (re.size === 0) return false;
    const n = [...re], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set();
    for (const X of n) {
      const [Z, ...q] = X.split(":");
      if (Z === "pt") l.add(+q[0]);
      else if (Z === "poly") p.add(+q[0]);
      else if (Z === "seg") {
        const L = +q[0], ae = +q[1];
        u.has(L) || u.set(L, /* @__PURE__ */ new Set()), u.get(L).add(ae);
      } else Z === "aux" && b.add(+q[0]);
    }
    let k = 0, d = [], h = [];
    const z = /* @__PURE__ */ new Map();
    for (let X = 0; X < a.length; X++) {
      if (p.has(X)) {
        k++;
        continue;
      }
      z.set(X, d.length);
      const Z = u.get(X);
      if (Z && Z.size > 0) {
        let q = [];
        for (let L = 0; L < a[X].length; L++) q.push(a[X][L]), L < a[X].length - 1 && Z.has(L) && (q.length >= 2 && d.push(q), q = [], k++);
        (q.length >= 2 || q.length === 1) && d.push(q);
      } else d.push([...a[X]]);
    }
    if (l.size > 0) {
      const X = [], Z = /* @__PURE__ */ new Map();
      for (let L = 0; L < o.length; L++) {
        if (l.has(L)) {
          k++;
          continue;
        }
        Z.set(L, X.length), X.push([...o[L]]);
      }
      const q = [];
      for (const L of d) {
        let ae = [];
        for (const fe of L) {
          const Pe = Z.get(fe);
          Pe === void 0 ? (ae.length >= 2 && q.push(ae), ae = []) : ae.push(Pe);
        }
        ae.length >= 2 && q.push(ae);
      }
      d = q, e.points.val = X;
    }
    for (const X of t) {
      const Z = z.get(X);
      Z !== void 0 && Z < d.length && h.push(Z);
    }
    if (e.polylines && (e.polylines.val = d), e.areas && (e.areas.val = h), b.size > 0 && r) {
      const X = s.filter((Z, q) => !b.has(q));
      "val" in r ? r.val = X : window.__hekatanDrawingAuxLines = X, k += b.size;
    }
    re.clear(), Qe();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return de(`\u{1F5D1} ${k} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = zn, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || re.size !== 0 && (n.preventDefault(), zn());
  });
  const At = document.createElement("div");
  At.id = "hk-properties-pane";
  const xn = "hk-props-pane-pos";
  let Jt = null;
  try {
    const n = localStorage.getItem(xn);
    n && (Jt = JSON.parse(n));
  } catch {
  }
  At.style.cssText = ["position:fixed", Jt ? `left:${Jt.left}px` : "left:50%", Jt ? `top:${Jt.top}px` : "top:8px", Jt ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(At);
  const zo = () => {
    const n = At.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, a = l.clientX, t = l.clientY;
      const p = At.getBoundingClientRect();
      r = p.left, s = p.top, At.style.transform = "none", At.style.left = `${r}px`, At.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const p = l.clientX - a, u = l.clientY - t, b = Math.max(0, Math.min(window.innerWidth - 80, r + p)), k = Math.max(0, Math.min(window.innerHeight - 40, s + u));
      At.style.left = `${b}px`, At.style.top = `${k}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(xn, JSON.stringify({ left: parseFloat(At.style.left), top: parseFloat(At.style.top) }));
        } catch {
        }
      }
    });
  }, R = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let nt = null;
  const vt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, Fo = () => {
    if (nt && (nt.dispose(), nt = null), re.size === 0) {
      At.style.display = "none";
      return;
    }
    const n = [...re], o = n.filter((d) => d.startsWith("pt:")), a = n.filter((d) => d.startsWith("seg:")), t = n.filter((d) => d.startsWith("poly:")), r = n.filter((d) => d.startsWith("aux:")), s = o.length > 0, l = a.length > 0, p = t.length > 0, u = !s && !l && !p, b = [];
    o.length && b.push(`\u{1F535} ${o.length} nodo(s)`), a.length && b.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && b.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && b.push(`\u250A ${r.length} aux`);
    const k = `\u{1F3AF} ${re.size} item(s) \u2014 ${b.join(", ")}`;
    if (nt = new Mo({ container: At, title: k }), s) {
      const d = nt.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      d.addBinding(R, "Ux"), d.addBinding(R, "Uy"), d.addBinding(R, "Uz"), d.addBinding(R, "Rx"), d.addBinding(R, "Ry"), d.addBinding(R, "Rz");
      const h = nt.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      h.addBinding(R, "Kx", { label: "Kx", min: 0, step: 100 }), h.addBinding(R, "Ky", { label: "Ky", min: 0, step: 100 }), h.addBinding(R, "Kz", { label: "Kz", min: 0, step: 100 }), h.addBinding(R, "Krx", { label: "Krx", min: 0, step: 1e3 }), h.addBinding(R, "Kry", { label: "Kry", min: 0, step: 1e3 }), h.addBinding(R, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const z = nt.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      z.addBinding(R, "Fx", { step: 0.1 }), z.addBinding(R, "Fy", { step: 0.1 }), z.addBinding(R, "Fz", { step: 0.1 }), z.addBinding(R, "Mx", { step: 0.1 }), z.addBinding(R, "My", { step: 0.1 }), z.addBinding(R, "Mz", { step: 0.1 }), nt.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(R, "mass", { label: "m", min: 0, step: 1 }), nt.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(R, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), nt.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let q = 0;
        const L = [R.Ux, R.Uy, R.Uz, R.Rx, R.Ry, R.Rz];
        L.some((Pe) => Pe) && (vt("nodes", o, "supports", L), q++);
        const ae = [R.Fx, R.Fy, R.Fz, R.Mx, R.My, R.Mz];
        ae.some((Pe) => Pe !== 0) && (vt("nodes", o, "loads", ae), q++);
        const fe = [R.Kx, R.Ky, R.Kz, R.Krx, R.Kry, R.Krz];
        if (fe.some((Pe) => Pe !== 0) && (vt("nodes", o, "springs", fe), q++), R.mass !== 0 && (vt("nodes", o, "mass", R.mass), q++), R.diaphragm !== "Ninguno" && (vt("nodes", o, "diaphragm", R.diaphragm), q++), q === 0) {
          de("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let Pe = document.getElementById("hk-prop-toast");
          Pe || (Pe = document.createElement("div"), Pe.id = "hk-prop-toast", Pe.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(Pe)), Pe.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", Pe.style.background = "rgba(217,119,6,0.97)", Pe.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            Pe && (Pe.style.opacity = "0");
          }, 3200);
        } else de(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const d = nt.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      d.addBinding(R, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), d.addBinding(R, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const h = nt.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      h.addBinding(R, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), h.addBinding(R, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), h.addBinding(R, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), h.addBinding(R, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), nt.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(R, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), nt.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(R, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const Z = nt.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      Z.addBinding(R, "relMxI", { label: "Mx I" }), Z.addBinding(R, "relMyI", { label: "My I" }), Z.addBinding(R, "relMzI", { label: "Mz I" });
      const q = nt.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      q.addBinding(R, "relMxJ", { label: "Mx J" }), q.addBinding(R, "relMyJ", { label: "My J" }), q.addBinding(R, "relMzJ", { label: "Mz J" }), nt.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(R, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ae = nt.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ae.addBinding(R, "LKx", { label: "LKx", min: 0, step: 100 }), ae.addBinding(R, "LKy", { label: "LKy", min: 0, step: 100 }), ae.addBinding(R, "LKz", { label: "LKz", min: 0, step: 100 });
      const fe = nt.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      fe.addBinding(R, "qx", { step: 0.1 }), fe.addBinding(R, "qy", { step: 0.1 }), fe.addBinding(R, "qz", { step: 0.1 }), nt.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(R, "massPerM", { label: "m/L", min: 0, step: 1 }), nt.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        vt("segs", a, "section", R.section), vt("segs", a, "material", R.material_frame);
        const ye = { A: R.A_mod, Iz: R.Iz_mod, Iy: R.Iy_mod, J: R.J_mod };
        (ye.A !== 1 || ye.Iz !== 1 || ye.Iy !== 1 || ye.J !== 1) && vt("segs", a, "modifiers", ye), R.insertionPoint !== "10 \u2014 Centroid" && vt("segs", a, "insertionPoint", R.insertionPoint), R.beta !== 0 && vt("segs", a, "beta", R.beta);
        const Ae = [R.relMxI, R.relMyI, R.relMzI], dt = [R.relMxJ, R.relMyJ, R.relMzJ];
        (Ae.some((Ie) => Ie) || dt.some((Ie) => Ie)) && vt("segs", a, "releases", { i: Ae, j: dt }), R.hinges !== "None" && vt("segs", a, "hinges", R.hinges);
        const ft = [R.LKx, R.LKy, R.LKz];
        ft.some((Ie) => Ie !== 0) && vt("segs", a, "lineSprings", ft);
        const Je = [R.qx, R.qy, R.qz];
        Je.some((Ie) => Ie !== 0) && vt("segs", a, "distLoad", Je), R.massPerM !== 0 && vt("segs", a, "massPerM", R.massPerM), de(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (p) {
      const d = nt.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      d.addBinding(R, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), d.addBinding(R, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), d.addBinding(R, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), nt.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(R, "surfLoad", { label: "q", step: 0.1 }), nt.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        vt("areas", t, "shellType", R.shellType), vt("areas", t, "thickness", R.thickness), vt("areas", t, "material", R.material_shell), R.surfLoad !== 0 && vt("areas", t, "surfLoad", R.surfLoad), de(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (u) {
      const d = nt.addFolder({ title: "\u2139 Selecci\xF3n" }), h = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      d.addBinding(h, "msg", { readonly: true, label: "" });
    }
    nt.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      re.clear(), Qe();
    }), At.style.display = "block", zo();
  };
  window.__hekatanRefreshPropsPane = Fo;
  let hn = null, Fn = false;
  m.addEventListener("pointerdown", (n) => {
    n.button === 2 && (hn = { x: n.clientX, y: n.clientY }, Fn = false);
  }), m.addEventListener("pointermove", (n) => {
    if (hn && n.buttons & 2 && !Fn) {
      const o = n.clientX - hn.x, a = n.clientY - hn.y;
      Math.hypot(o, a) > 8 && (Fn = true);
    }
  }), m.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = hn !== null && !Fn;
      hn = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if ($t ? ln() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), re.size > 0 && (re.clear(), Qe()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), de(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : de("\u238B Cancelado (click derecho)");
      }
    }
  }), m.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), m.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Bt = { x: n.clientX, y: n.clientY }, an = false);
  }), m.addEventListener("pointermove", (n) => {
    if ($t && n.buttons === 0) {
      const s = n.clientX < $t.x;
      fn($t.x, $t.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Bt) return;
    const o = n.clientX - Bt.x, a = n.clientY - Bt.y, t = Math.hypot(o, a);
    if (!an && t < 8) return;
    an = true;
    const r = n.clientX < Bt.x;
    fn(Bt.x, Bt.y, n.clientX, n.clientY, r);
  }), m.addEventListener("pointerup", (n) => {
    if (!Bt) return;
    if (!an) {
      Bt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    Cn(Bt.x, Bt.y, n.clientX, n.clientY, o), Bt = null, an = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const Qt = new st();
  Qt.visible = false, Qt.frustumCulled = false, w.add(Qt);
  const Ao = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, eo = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; Qt.children.length; ) {
      const p = Qt.children.pop();
      (_b = (_a = p.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = p.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Ao[n] ?? 16777215, s = 0.05, l = new me().setFromPoints([new x(o - s, a - s, t), new x(o + s, a - s, t), new x(o + s, a - s, t), new x(o + s, a + s, t), new x(o + s, a + s, t), new x(o - s, a + s, t), new x(o - s, a + s, t), new x(o - s, a - s, t)]);
    Qt.add(new on(l, new wt({ color: r, linewidth: 2 }))), Qt.position.set(0, 0, 0), Qt.visible = true;
  }, Xn = () => {
    Qt.visible = false;
  }, Eo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let p = null;
    const u = (d, h, z, X) => {
      const Z = Math.hypot(h - n, z - o, X - a);
      Z > t || (!p || Z < p.d) && (p = { type: d, x: h, y: z, z: X, d: Z });
    };
    (r.node || r.end) && s.forEach((d) => {
      r.node && u("node", d[0], d[1], d[2]);
    });
    for (const d of l) if (!(d.length < 2)) for (let h = 0; h < d.length - 1; h++) {
      const z = s[d[h]], X = s[d[h + 1]];
      if (!(!z || !X) && (r.end && (u("end", z[0], z[1], z[2]), u("end", X[0], X[1], X[2])), r.mid && u("mid", (z[0] + X[0]) / 2, (z[1] + X[1]) / 2, (z[2] + X[2]) / 2), r.nea || r.per)) {
        const Z = X[0] - z[0], q = X[1] - z[1], L = X[2] - z[2], ae = Z * Z + q * q + L * L;
        if (ae < 1e-12) continue;
        const fe = Math.max(0, Math.min(1, ((n - z[0]) * Z + (o - z[1]) * q + (a - z[2]) * L) / ae)), Pe = z[0] + fe * Z, ye = z[1] + fe * q, Ae = z[2] + fe * L;
        r.nea && u("nea", Pe, ye, Ae), r.per && u("per", Pe, ye, Ae);
      }
    }
    const b = window.__hekatanDrawingAuxLines, k = (b == null ? void 0 : b.rawVal) ?? (b == null ? void 0 : b.val) ?? b ?? [];
    for (const d of k) {
      if (d.length !== 6) continue;
      const h = [d[0], d[1], d[2]], z = [d[3], d[4], d[5]];
      if (r.end && (u("end", h[0], h[1], h[2]), u("end", z[0], z[1], z[2])), r.mid && u("mid", (h[0] + z[0]) / 2, (h[1] + z[1]) / 2, (h[2] + z[2]) / 2), r.nea || r.per) {
        const X = z[0] - h[0], Z = z[1] - h[1], q = z[2] - h[2], L = X * X + Z * Z + q * q;
        if (L < 1e-12) continue;
        const ae = Math.max(0, Math.min(1, ((n - h[0]) * X + (o - h[1]) * Z + (a - h[2]) * q) / L)), fe = h[0] + ae * X, Pe = h[1] + ae * Z, ye = h[2] + ae * q;
        r.nea && u("nea", fe, Pe, ye), r.per && u("per", fe, Pe, ye);
      }
    }
    return p ? { type: p.type, x: p.x, y: p.y, z: p.z } : null;
  };
  window.__hekatanOsnapCompute = Eo, window.__hekatanOsnapShow = eo, window.__hekatanOsnapHide = Xn;
  let Re = [], Et = 0;
  const gn = document.createElement("div");
  gn.id = "hk-cad-status", gn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", gn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(gn);
  const Vo = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), We && n.push(`\u{1F512} LOCK ${We.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, de = (n) => {
    const o = n + Vo();
    gn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    de(o);
  }, window.__hekatanCadResetPending = () => {
    Re = [], O = [], N.visible = false, y(), de("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const vn = [], rn = () => {
    var _a, _b;
    vn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), vn.length > 100 && vn.shift();
  }, to = () => {
    var _a;
    const n = vn.pop();
    if (!n) {
      de("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Re = [], A.visible = false, ie.visible = false, F(), de(`\u21B6 Undo \u2014 ${vn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    y();
  };
  window.__hekatanPushUndo = rn, window.__hekatanUndo = to, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), to();
    }
  }, { capture: true });
  const no = () => {
    if (Re = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    We = null, Kt(), A.visible = false, ie.visible = false, F(), de("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), y();
  };
  window.__hekatanFinalizeDraw = no, m.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y;
    if (qt > 5) {
      qt = 0;
      return;
    }
    qt = 0;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = _();
    if (!a.length) return;
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new x(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], p = e.points.rawVal ?? [];
      if (l.length > 0) {
        const u = p[l[l.length - 1]];
        if (u) {
          const b = !!window.__hekatanOrthoMode;
          let k = We;
          if (!k && b) {
            const d = Math.abs(t.x - u[0]), h = Math.abs(t.y - u[1]), z = Math.abs(t.z - u[2]);
            k = d >= h && d >= z ? "x" : h >= z ? "y" : "z";
          }
          k === "x" ? t = new x(t.x, u[1], u[2]) : k === "y" ? t = new x(u[0], t.y, u[2]) : k === "z" && (t = new x(u[0], u[1], t.z));
        }
      }
    }
    if (It) t = It.clone(), de(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new x(l.x, l.y, l.z), de(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const p = window.__hekatanSnapEnabled !== false, u = window.__hekatanSnap2D ?? 0;
        p && u > 0 && (t = new x(Math.round(t.x / u) * u, Math.round(t.y / u) * u, Math.round(t.z / u) * u));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (_e) {
        $t && ln();
        const { kind: s, a: l, b: p } = _e, u = p !== void 0 ? `${s}:${l}:${p}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || re.clear(), re.has(u) ? re.delete(u) : re.add(u), Qe(), de(`\u2713 Seleccionados ${re.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, p = n.clientY;
        $t ? (Cn($t.x, $t.y, l, p, s), $t = null) : s || ($t = { x: l, y: p }, de("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), fn(l, p, l + 1, p + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], de(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", p = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      de(`\u2713 Eje "${p}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (Ge >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], p = Ge;
        if (p >= 0 && p < l.length) {
          rn();
          const u = l.slice(0, p).concat(l.slice(p + 1));
          s && typeof s == "object" && "val" in s ? s.val = u : window.__hekatanDrawingAuxLines = u, de(`\u{1F5D1} L\xEDnea auxiliar #${p + 1} borrada`), Ge = -1, j.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Te >= 0) {
        const s = Te, l = Xe;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (Fe(s), de(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (ve(s, l), de(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (Fe(s), de(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else de("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Re.push([t.x, t.y, t.z]), Re.length === 1) {
        de("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Re, p = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const u = Math.abs(l[1] - s[1]), k = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : u < 1e-3 ? "xz" : "yz", d = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], p, d, k), de(`\u2713 C\xEDrculo dibujado en ${k.toUpperCase()} \u2014 r=${p.toFixed(2)}m, ${d} segmentos`), Re = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Re.push([t.x, t.y, t.z]), Re.length === 1) {
        de("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Re.length === 2) {
        de("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, p] = Re, u = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, p, u), de(`\u2713 Arco dibujado \u2014 ${u} segmentos`), Re = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Re.push([t.x, t.y, t.z]), Re.length === 1) {
        de("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Re;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), de(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Re = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Re.push([t.x, t.y, t.z]), Re.length === 1) {
        de("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Re;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), de(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Re = [];
      return;
    }
    if (r === "polyarea") {
      O.push([t.x, t.y, t.z]), N.geometry.setFromPoints(O.map((s) => new x(s[0], s[1], s[2]))), N.visible = O.length >= 1, de(`\u25B0 \xC1rea libre \u2014 ${O.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), y();
      return;
    }
    if (r === "col") {
      rn();
      const s = t.z, l = Et && Et > 0 ? Et : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const p = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [u - 2, u - 1], []], Et = 0, de(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_q = window.__hekatanRebuild) == null ? void 0 : _q.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Re.push([t.x, t.y, t.z]), Re.length === 1) {
        de("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Re, p = Et && Et > 0 ? Et : 3;
      rn();
      const u = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + p], [s[0], s[1], s[2] + p]];
      const b = e.polylines.rawVal;
      if (b.length - 1, e.polylines.val = [...b.slice(0, -1), ...b[b.length - 1].length > 0 ? [b[b.length - 1]] : [], [u, u + 1, u + 2, u + 3, u], []], e.areas) {
        const k = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, k];
      }
      de(`\u25A5 Pared Q4 creada \u2014 h=${p.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Re = [], Et = 0;
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      rn();
      const s = Et && Et > 0 ? Et : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const p = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [u - 2, u - 1], []], Et = 0, de(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = tt(t.x, t.y, t.z, s);
      if (!l) {
        de("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const p = e.polylines.rawVal, u = e.points.rawVal, b = p[l.polyIdx], k = u[b[l.segIdx]], d = u[b[l.segIdx + 1]];
      if (!k || !d) {
        de("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const h = Et && Et > 0 ? Et : 3;
      rn();
      const z = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [k[0], k[1], k[2]], [d[0], d[1], d[2]], [d[0], d[1], d[2] + h], [k[0], k[1], k[2] + h]];
      const X = e.polylines.rawVal;
      if (e.polylines.val = [...X.slice(0, -1), ...X[X.length - 1].length > 0 ? [X[X.length - 1]] : [], [z, z + 1, z + 2, z + 3, z], []], e.areas) {
        const Z = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, Z];
      }
      Et = 0, de(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${h.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
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
      de(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Re.push([t.x, t.y, t.z]), Re.length === 1) {
        de("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Re, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const h = p.rawVal ?? p.val ?? [];
        p.val = [...h, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const u = l[0] - s[0], b = l[1] - s[1], k = l[2] - s[2], d = Math.sqrt(u * u + b * b + k * k);
      de(`\u2713 L\xEDnea auxiliar creada \u2014 L=${d.toFixed(2)}m (cyan, no FEM)`), Re = [];
      return;
    }
    if (r === "extend") {
      if (Re.push([t.x, t.y, t.z]), Re.length === 1) {
        de("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Re, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const u = p.rawVal ?? p.val ?? [];
        p.val = [...u, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      de("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Re = [];
      return;
    }
    if (r === "chaflan") {
      if (Re.push([t.x, t.y, t.z]), Re.length === 1) {
        de("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Re, p = window.__hekatanChaflanR ?? 1, u = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_u = window.__hekatanDrawSlabChaflan) == null ? void 0 : _u.call(window, s, l, p, u, 6);
      const b = Math.abs(l[0] - s[0]).toFixed(1), k = Math.abs(l[1] - s[1]).toFixed(1);
      de(`\u2713 Losa con chaflanes dibujada \u2014 ${b}\xD7${k}m, r=${p}m, ${u} seg/chafl\xE1n`), Re = [];
      try {
        (_v = window.__hekatanRebuild) == null ? void 0 : _v.call(window);
      } catch {
      }
      return;
    }
    if (B = false, rn(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, p = s[l] ?? [];
      if (r === "line" && p.length === 2) {
        e.polylines.val = [...s, []], de("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && p.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...p, p[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), de("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") de(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") de("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") de("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_y = e.polylines) == null ? void 0 : _y.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      de(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), m.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && O.length >= 3) {
      n.preventDefault();
      const a = Ye();
      de(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), m.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = _();
    if (we.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], p = l[l.length - 1] ?? [], u = e.points.rawVal ?? [];
        if (p.length > 0) {
          const b = u[p[p.length - 1]];
          if (b) {
            const k = !!window.__hekatanOrthoMode;
            let d = We;
            if (!d && k) {
              const h = Math.abs(t.x - b[0]), z = Math.abs(t.y - b[1]), X = Math.abs(t.z - b[2]);
              d = h >= z && h >= X ? "x" : z >= X ? "y" : "z";
            }
            d === "x" ? t.set(t.x, b[1], b[2]) : d === "y" ? t.set(b[0], t.y, b[2]) : d === "z" && t.set(b[0], b[1], t.z);
          }
        }
      }
      const r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, r);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const l = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0.5;
        l && p > 0 && (t.x = Math.round(t.x / p) * p, t.y = Math.round(t.y / p) * p, t.z = Math.round(t.z / p) * p);
      }
      we.geometry.setAttribute("position", new Rt(t.toArray(), 3));
    }
    y();
  }), m.addEventListener("pointermove", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(H), r = _();
    if (t.length && r.length) {
      const s = new x(...e.points.rawVal[t[0].index]), l = new x(...r[0].point), p = s.sub(l), u = (_a = r[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(W.matrixWorld), Math.abs(p.dot(u)) < 1e-4 && (a = true);
    }
    we.visible = !a;
  });
  let Yn = false, Dn;
  m.addEventListener("pointermove", (n) => {
    var _a;
    if (!qt) return;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(H), r = _();
    if (t.length && r.length) {
      const l = new x(...e.points.rawVal[t[0].index]), p = new x(...r[0].point), u = l.sub(p), b = (_a = r[0].face) == null ? void 0 : _a.normal;
      b.transformDirection(W.matrixWorld), Math.abs(u.dot(b)) < 1e-4 && (a = true);
    }
    if (a && qt < 5 && (Yn = true, c.enabled = false, Dn = t[0].index), !Yn || qt % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Dn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new x(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Dn] = l.toArray();
    }
    e.points.val = s;
  }), m.addEventListener("pointerup", () => {
    c.enabled = true, Yn = false;
  }), m.addEventListener("contextmenu", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(H), r = _();
    if (t.length && r.length) {
      const p = new x(...e.points.rawVal[t[0].index]), u = new x(...r[0].point), b = p.sub(u), k = (_a = r[0].face) == null ? void 0 : _a.normal;
      k.transformDirection(W.matrixWorld), Math.abs(b.dot(k)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((p) => p.filter((u) => u !== t[0].index)).map((p) => p.map((u) => u > t[0].index ? u - 1 : u)).filter((p) => p.length);
    l.push([]), e.polylines.val = l;
  });
}
function hs(e, i, w) {
  const S = Math.round(14.999999999999998), g = { position: e.position.clone(), quaternion: e.quaternion.clone() }, m = setInterval(M, 1e3 / 30);
  let y = 0;
  function M() {
    y++;
    const P = y / S;
    e.position.lerpVectors(g.position, i.position, P), e.quaternion.slerpQuaternions(g.quaternion, i.quaternion, P), w && w(), y == S && clearInterval(m);
  }
}
class Co {
  constructor(i, w = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(i, w);
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
  setColorMap(i, w = 32) {
    this.map = Wn[i] || Wn.rainbow, this.n = w;
    const f = 1 / this.n, c = new Zt(), S = new Zt();
    this.lut.length = 0, this.lut.push(new Zt(this.map[0][1]));
    for (let g = 1; g < w; g++) {
      const m = g * f;
      for (let y = 0; y < this.map.length - 1; y++) if (m > this.map[y][0] && m <= this.map[y + 1][0]) {
        const M = this.map[y][0], P = this.map[y + 1][0];
        c.setHex(this.map[y][1], En), S.setHex(this.map[y + 1][1], En);
        const v = new Zt().lerpColors(c, S, (m - M) / (P - M));
        this.lut.push(v);
      }
    }
    return this.lut.push(new Zt(this.map[this.map.length - 1][1])), this;
  }
  copy(i) {
    return this.lut = i.lut, this.map = i.map, this.n = i.n, this.minV = i.minV, this.maxV = i.maxV, this;
  }
  getColor(i) {
    i = Xo.clamp(i, this.minV, this.maxV), i = (i - this.minV) / (this.maxV - this.minV);
    const w = Math.round(i * this.n);
    return this.lut[w];
  }
  addColorMap(i, w) {
    return Wn[i] = w, this;
  }
  createCanvas() {
    const i = document.createElement("canvas");
    return i.width = 1, i.height = this.n, this.updateCanvas(i), i;
  }
  updateCanvas(i) {
    const w = i.getContext("2d", { alpha: false }), f = w.getImageData(0, 0, 1, this.n), c = f.data;
    let S = 0;
    const g = 1 / this.n, m = new Zt(), y = new Zt(), M = new Zt();
    for (let P = 1; P >= 0; P -= g) for (let v = this.map.length - 1; v >= 0; v--) if (P < this.map[v][0] && P >= this.map[v - 1][0]) {
      const W = this.map[v - 1][0], oe = this.map[v][0];
      m.setHex(this.map[v - 1][1], En), y.setHex(this.map[v][1], En), M.lerpColors(m, y, (P - W) / (oe - W)), c[S * 4] = Math.round(M.r * 255), c[S * 4 + 1] = Math.round(M.g * 255), c[S * 4 + 2] = Math.round(M.b * 255), c[S * 4 + 3] = 255, S += 1;
    }
    return w.putImageData(f, 0, 0), i;
  }
}
const Wn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Sn = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function ms(e) {
  e = Math.max(0, Math.min(1, e));
  for (let w = 0; w < Sn.length - 1; w++) {
    const [f, c, S, g] = Sn[w], [m, y, M, P] = Sn[w + 1];
    if (e <= m) {
      const v = (e - f) / (m - f);
      return [c + (y - c) * v, S + (M - S) * v, g + (P - g) * v];
    }
  }
  const i = Sn[Sn.length - 1];
  return [i[1], i[2], i[3]];
}
function ws() {
  const i = new Uint8Array(1024);
  for (let f = 0; f < 256; f++) {
    const c = f / 255, [S, g, m] = ms(c);
    i[f * 4 + 0] = S, i[f * 4 + 1] = g, i[f * 4 + 2] = m, i[f * 4 + 3] = 255;
  }
  const w = new No(i, 256, 1, Zo);
  return w.minFilter = uo, w.magFilter = uo, w.wrapS = fo, w.wrapT = fo, w.needsUpdate = true, w;
}
function ys(e, i, w) {
  new Co();
  const f = ws(), c = new Yo({ uniforms: { cmap: { value: f }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Xt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), S = new et(new me(), c);
  return S.renderOrder = -1, S.frustumCulled = false, S.userData.isShellArea = true, S.name = "__hekatan_shell_colormap", I.derive(() => {
    S.geometry.setAttribute("position", new Rt(e.val.flat(), 3));
    const g = [];
    for (const _ of i.val) _.length === 3 ? g.push(_[0], _[1], _[2]) : _.length === 4 && (g.push(_[0], _[1], _[2]), g.push(_[0], _[2], _[3]));
    S.geometry.setIndex(new Do(g, 1));
    const m = w.val.filter((_) => Number.isFinite(_));
    let y, M;
    const P = jn.val;
    if (P ? (M = P[0], y = P[1]) : (y = m.length ? Math.max(...m) : 1, M = m.length ? Math.min(...m) : 0, M >= 0 && y > 0 && (M = 0)), y === M) {
      const _ = Math.max(Math.abs(y) * 1e-6, 1e-9);
      y += _, M -= _;
    }
    const v = P && P[0] > P[1], W = Math.min(M, y), oe = Math.max(M, y), he = oe - W, ce = new Float32Array(w.val.length);
    for (let _ = 0; _ < w.val.length; _++) {
      const H = w.val[_];
      if (!Number.isFinite(H)) {
        ce[_] = -1;
        continue;
      }
      const se = ((v ? oe + W - H : H) - W) / he;
      ce[_] = Math.max(0, Math.min(1, se));
    }
    S.geometry.setAttribute("scalar", new rt(ce, 1));
  }), S;
}
function xs(e, i, w, f) {
  const c = ys(w, e.elements, f);
  return I.derive(() => {
    c.visible = i.shellResults.val != "none";
  }), c;
}
const gs = 6, Gn = 10, vs = 0.012;
function bs(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Ms(e, i, w, f) {
  if (!w && !f) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && w) {
    const S = w[e];
    if (S && S.has(i)) return S.get(i);
  }
  return null;
}
function _s(e, i, w, f) {
  const c = new st(), S = new Co();
  S.setColorMap("rainbow");
  const g = new Zt(), m = I.state([]);
  return I.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const y = w.val, M = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = bs(i.frameResults.val);
    if (c.children.forEach((C) => {
      C.geometry && C.geometry.dispose(), C.material && C.material.dispose();
    }), c.clear(), !P || M.length === 0 || y.length === 0) {
      m.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, W = (_c = e.deformOutputs) == null ? void 0 : _c.val, oe = [], he = [];
    for (let C = 0; C < M.length; C++) {
      if (M[C].length !== 2) continue;
      const ee = Ms(P, C, v, W);
      ee && (oe.push(ee[0], ee[1]), he.push({ idx: C, vals: ee }));
    }
    if (oe.length === 0) {
      m.val = [];
      return;
    }
    const ce = Math.min(...oe), _ = Math.max(...oe);
    S.setMin(ce), S.setMax(_), m.val = oe;
    const H = [1 / 0, 1 / 0, 1 / 0], we = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of y) for (let D = 0; D < 3; D++) H[D] = Math.min(H[D], C[D]), we[D] = Math.max(we[D], C[D]);
    const U = Math.max(we[0] - H[0], we[1] - H[1], we[2] - H[2], 1) * vs, pe = [], J = [], B = [];
    let $ = 0;
    for (const { idx: C, vals: D } of he) {
      const ee = M[C], Y = y[ee[0]], xe = y[ee[1]];
      if (!Y || !xe) continue;
      const A = new x(xe[0] - Y[0], xe[1] - Y[1], xe[2] - Y[2]), N = A.length();
      if (N < 1e-10) continue;
      A.normalize();
      const O = Math.abs(A.y) < 0.99 ? new x(0, 1, 0) : new x(1, 0, 0), ie = new x().crossVectors(A, O).normalize(), Q = new x().crossVectors(A, ie).normalize(), Se = Gn + 1, be = gs;
      for (let Me = 0; Me < Se; Me++) {
        const Ve = Me / Gn, De = Y[0] + A.x * N * Ve, xt = Y[1] + A.y * N * Ve, bt = Y[2] + A.z * N * Ve, je = D[0] + (D[1] - D[0]) * Ve, T = S.getColor(je) ?? new Zt(0, 0, 0);
        g.copy(T).convertSRGBToLinear();
        for (let G = 0; G < be; G++) {
          const te = G / be * Math.PI * 2, ne = Math.cos(te), Ce = Math.sin(te);
          pe.push(De + (ie.x * ne + Q.x * Ce) * U, xt + (ie.y * ne + Q.y * Ce) * U, bt + (ie.z * ne + Q.z * Ce) * U), J.push(g.r, g.g, g.b);
        }
      }
      for (let Me = 0; Me < Gn; Me++) for (let Ve = 0; Ve < be; Ve++) {
        const De = (Ve + 1) % be, xt = $ + Me * be + Ve, bt = $ + Me * be + De, je = $ + (Me + 1) * be + Ve, T = $ + (Me + 1) * be + De;
        B.push(xt, bt, T), B.push(xt, T, je);
      }
      $ += Se * be;
    }
    if (pe.length === 0) return;
    const E = new me();
    E.setAttribute("position", new Rt(pe, 3)), E.setAttribute("color", new Rt(J, 3)), E.setIndex(B), E.computeVertexNormals();
    const F = new at({ vertexColors: true, side: Xt }), V = new et(E, F);
    V.frustumCulled = false, c.add(V);
  }), c.__colorMapValues = m, c;
}
function Ss() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const ks = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Ps = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Cs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function mt(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const zs = 16755200, go = 56831, Fs = 56831, As = 56831, Ln = 65382;
function Es(e) {
  const i = new st();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const w = new yn(1, 16, 16), f = new at({ color: zs, transparent: true, opacity: 0.85, depthTest: false }), c = new et(w, f);
  c.visible = false, c.renderOrder = 100, i.add(c);
  const S = new me(), g = new wt({ color: go, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), m = new on(S, g);
  m.visible = false, m.renderOrder = 100, i.add(m);
  const y = new at({ color: go, transparent: true, opacity: 0.7, depthTest: false }), M = new et(new ho(1, 1, 1, 12), y);
  M.visible = false, M.renderOrder = 100, i.add(M);
  const P = new me(), v = new at({ color: Fs, transparent: true, opacity: 0.45, side: Xt, depthTest: false }), W = new et(P, v);
  W.visible = false, W.renderOrder = 100, i.add(W);
  const oe = new me(), he = new wt({ color: As, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ce = new on(oe, he);
  ce.visible = false, ce.renderOrder = 100, i.add(ce);
  const _ = new at({ color: Ln, transparent: true, opacity: 0.95, depthTest: false }), H = new et(w, _);
  H.visible = false, H.renderOrder = 101, i.add(H);
  const we = new at({ color: Ln, transparent: true, opacity: 0.85, depthTest: false }), se = new et(new ho(1, 1, 1, 12), we);
  se.visible = false, se.renderOrder = 101, i.add(se);
  const U = new me(), pe = new at({ color: Ln, transparent: true, opacity: 0.55, side: Xt, depthTest: false }), J = new et(U, pe);
  J.visible = false, J.renderOrder = 101, i.add(J);
  const B = new me(), $ = new wt({ color: Ln, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), E = new on(B, $);
  E.visible = false, E.renderOrder = 101, i.add(E);
  let F = null;
  const V = document.createElement("div");
  Object.assign(V.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), V.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(V);
  }, 0);
  function C(K) {
    const ue = e.derivedNodes.rawVal;
    return !ue || K < 0 || K >= ue.length ? null : new x(ue[K][0], ue[K][1], ue[K][2]);
  }
  function D(K, ue) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2;
    const ze = e.getActiveCamera();
    if (!ze || !e.mesh) return null;
    const j = e.rendererElm.getBoundingClientRect(), Te = K - j.left, Xe = ue - j.top, Ge = e.derivedNodes.rawVal, re = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Ge || !re) return null;
    const Ee = /* @__PURE__ */ new Map(), ke = (Ne) => {
      if (Ee.has(Ne)) return Ee.get(Ne);
      const Fe = C(Ne);
      if (!Fe) return Ee.set(Ne, null), null;
      const ve = Fe.clone().project(ze), Ye = (ve.x * 0.5 + 0.5) * j.width, le = (-ve.y * 0.5 + 0.5) * j.height, Ue = { x: Ye, y: le, z: ve.z };
      return Ee.set(Ne, Ue), Ue;
    }, Mt = /* @__PURE__ */ new Set();
    for (const Ne of re) if (Ne) for (const Fe of Ne) Mt.add(Fe);
    const gt = 8;
    let $e = -1, ct = gt;
    for (let Ne = 0; Ne < Ge.length; Ne++) {
      if (!Mt.has(Ne)) continue;
      const Fe = ke(Ne);
      if (!Fe || Fe.z < -1 || Fe.z > 1) continue;
      const ve = Fe.x - Te, Ye = Fe.y - Xe, le = Math.sqrt(ve * ve + Ye * Ye);
      le < ct && (ct = le, $e = Ne);
    }
    const _e = Ss(), yt = Ps[_e.dispUnit] ?? 1e3, Qe = ks[_e.forceUnit] ?? 1;
    if ($e >= 0) {
      const Ne = Ge[$e];
      let Fe = `Nodo ${$e}
(${Ne[0].toFixed(3)}, ${Ne[1].toFixed(3)}, ${Ne[2].toFixed(3)})`;
      const ve = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (ve == null ? void 0 : ve.deformations) {
        const Ye = ve.deformations.get($e);
        if (Ye && (Fe += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Fe += `
Ux = ${mt(Ye[0] * yt, 3)} ${_e.dispUnit}`, Fe += `
Uy = ${mt(Ye[1] * yt, 3)} ${_e.dispUnit}`, Fe += `
Uz = ${mt(Ye[2] * yt, 3)} ${_e.dispUnit}`, (Math.abs(Ye[3]) > 1e-9 || Math.abs(Ye[4]) > 1e-9 || Math.abs(Ye[5]) > 1e-9) && (Fe += `
Rx = ${mt(Ye[3] * 1e3, 3)} mrad`, Fe += `
Ry = ${mt(Ye[4] * 1e3, 3)} mrad`, Fe += `
Rz = ${mt(Ye[5] * 1e3, 3)} mrad`)), ve.reactions) {
          const le = ve.reactions.get($e);
          le && (Math.abs(le[0]) > 1e-9 || Math.abs(le[1]) > 1e-9 || Math.abs(le[2]) > 1e-9 || Math.abs(le[3]) > 1e-6 || Math.abs(le[4]) > 1e-6 || Math.abs(le[5]) > 1e-6) && (Fe += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Fe += `
Fx = ${mt(le[0] * Qe)} ${_e.forceUnit}`, Fe += `
Fy = ${mt(le[1] * Qe)} ${_e.forceUnit}`, Fe += `
Fz = ${mt(le[2] * Qe)} ${_e.forceUnit}`, (Math.abs(le[3]) > 1e-6 || Math.abs(le[4]) > 1e-6 || Math.abs(le[5]) > 1e-6) && (Fe += `
Mx = ${mt(le[3] * Qe)} ${_e.forceUnit}\xB7m`, Fe += `
My = ${mt(le[4] * Qe)} ${_e.forceUnit}\xB7m`, Fe += `
Mz = ${mt(le[5] * Qe)} ${_e.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: $e, info: Fe };
    }
    const sn = 5;
    let tt = -1, Ht = sn, Wt = "frame";
    for (let Ne = 0; Ne < re.length; Ne++) {
      const Fe = re[Ne];
      if (!(!Fe || Fe.length < 2)) {
        if (Fe.length === 2) {
          const ve = ke(Fe[0]), Ye = ke(Fe[1]);
          if (!ve || !Ye || ve.z < -1 || ve.z > 1 || Ye.z < -1 || Ye.z > 1) continue;
          const le = Vs(Te, Xe, ve.x, ve.y, Ye.x, Ye.y);
          le < Ht && (Ht = le, tt = Ne, Wt = "frame");
        } else if (Fe.length === 3 || Fe.length === 4) {
          const ve = [];
          let Ye = true;
          for (const le of Fe) {
            const Ue = ke(le);
            if (!Ue || Ue.z < -1 || Ue.z > 1) {
              Ye = false;
              break;
            }
            ve.push(Ue);
          }
          if (!Ye) continue;
          if (Ts(Te, Xe, ve)) {
            const Ue = ve.reduce((Oe, Ct) => Oe + Ct.z, 0) / ve.length * 1e-3;
            Ue < Ht && (Ht = Ue, tt = Ne, Wt = "shell");
          }
        } else if (Fe.length === 8) {
          const ve = [];
          let Ye = true;
          for (const Ke of Fe) {
            const Ze = ke(Ke);
            if (!Ze || Ze.z < -1 || Ze.z > 1) {
              Ye = false;
              break;
            }
            ve.push(Ze);
          }
          if (!Ye) continue;
          const le = Math.min(...ve.map((Ke) => Ke.x)), Ue = Math.max(...ve.map((Ke) => Ke.x)), Oe = Math.min(...ve.map((Ke) => Ke.y)), Ct = Math.max(...ve.map((Ke) => Ke.y));
          if (Te >= le && Te <= Ue && Xe >= Oe && Xe <= Ct) {
            const Ze = ve.reduce((zt, He) => zt + He.z, 0) / ve.length * 1e-3;
            Ze < Ht && (Ht = Ze, tt = Ne, Wt = "solid");
          }
        }
      }
    }
    if (tt >= 0) {
      const Ne = re[tt];
      let ve = `${Wt === "frame" ? "Frame" : Wt === "shell" ? "Shell" : "Solid"} ${tt}`;
      const Ye = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, le = (_g = (_f = Ye == null ? void 0 : Ye.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, tt);
      if (le) {
        le.name && (ve += `
  \u{1F4CB} ${le.name}`), le.shape && (ve += `
  Shape: ${le.shape}`);
        const Ue = /concrete|hormig|rect.*sólida/i.test(le.shape || ""), Oe = Ue ? 100 : 1e3, Ct = Ue ? "cm" : "mm", Ke = (zt) => {
          const He = zt * Oe;
          return Math.abs(He - Math.round(He)) < 0.05 ? `${Math.round(He)}` : `${He.toFixed(1)}`;
        }, Ze = [];
        if (le.D != null && Ze.push(`D=${Ke(le.D)}`), le.B != null && Ze.push(`B=${Ke(le.B)}`), le.TF != null && Ze.push(`TF=${Ke(le.TF)}`), le.TW != null && Ze.push(`TW=${Ke(le.TW)}`), le.t != null && Ze.push(`t=${Ke(le.t)}`), Ze.length && (ve += `
  Dim: ${Ze.join(" ")} ${Ct}`), le.material) {
          let zt = le.material;
          le.fillMaterial && (zt += ` + FILL "${le.fillMaterial}"`), ve += `
  Mat: ${zt}`;
        }
      } else {
        const Ue = (_i = (_h = Ye == null ? void 0 : Ye.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, tt), Oe = (_k = (_j = Ye == null ? void 0 : Ye.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, tt);
        Ue ? (ve += `
  ${Ue}`, Oe && !Ue.includes(Oe) && (ve += `  (${Oe})`)) : Oe && (ve += `
  Material: ${Oe}`);
      }
      if (ve += `
nodos: [${Ne.join(", ")}]`, Wt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const Ue = e.mesh.analyzeOutputs.rawVal, Oe = Cs[_e.stressUnit] ?? 1, Ct = [["bendingXX", "Mxx", Qe, `${_e.forceUnit}\xB7m/m`], ["bendingYY", "Myy", Qe, `${_e.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", Qe, `${_e.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", Qe, `${_e.forceUnit}/m`], ["membraneYY", "Nyy", Qe, `${_e.forceUnit}/m`], ["membraneXY", "Nxy", Qe, `${_e.forceUnit}/m`], ["shearX", "Qx", Qe, `${_e.forceUnit}/m`], ["shearY", "Qy", Qe, `${_e.forceUnit}/m`], ["vonMises", "\u03C3VM", Oe, _e.stressUnit], ["pressure", "p", Oe, _e.stressUnit]], Ke = [];
        for (const [Ze, zt, He, en] of Ct) {
          const Gt = Ue == null ? void 0 : Ue[Ze];
          if (Gt && Gt instanceof Map) {
            const Ft = Gt.get(tt);
            if (Ft != null) {
              if (typeof Ft == "number") Ke.push(`${zt} = ${mt(Ft * He, 3)} ${en}`);
              else if (Array.isArray(Ft)) {
                let _t = Ft[0];
                for (const tn of Ft) Math.abs(tn) > Math.abs(_t) && (_t = tn);
                Ke.push(`${zt} = ${mt(_t * He, 3)} ${en}`);
              }
            }
          }
        }
        Ke.length > 0 && (ve += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Ke.slice(0, 8).join(`
`));
      }
      if (Wt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const Ue = e.mesh.deformOutputs.rawVal, Oe = e.mesh.elementInputs.rawVal, Ct = Ue == null ? void 0 : Ue.deformations;
        if (Ct && Ne.length === 2) {
          const Ke = Ct.get(Ne[0]), Ze = Ct.get(Ne[1]), zt = Ge[Ne[0]], He = Ge[Ne[1]];
          if (Ke && Ze && zt && He) {
            const en = He[0] - zt[0], Gt = He[1] - zt[1], Ft = He[2] - zt[2], _t = Math.sqrt(en * en + Gt * Gt + Ft * Ft);
            if (_t > 1e-9) {
              const tn = en / _t, Pn = Gt / _t, pn = Ft / _t, un = (Ze[0] - Ke[0]) * tn + (Ze[1] - Ke[1]) * Pn + (Ze[2] - Ke[2]) * pn, nn = ((_n2 = Oe.elasticities) == null ? void 0 : _n2.get(tt)) ?? 0, qt = ((_o2 = Oe.areas) == null ? void 0 : _o2.get(tt)) ?? 0, St = ((_p = Oe.momentsOfInertiaY) == null ? void 0 : _p.get(tt)) ?? 0, Bt = ((_q = Oe.momentsOfInertiaZ) == null ? void 0 : _q.get(tt)) ?? 0, an = ((_r = Oe.torsionalConstants) == null ? void 0 : _r.get(tt)) ?? 0, $t = ((_s2 = Oe.shearModuli) == null ? void 0 : _s2.get(tt)) ?? nn / 2.6, fn = nn * qt * (un / _t), Cn = (Ze[3] - Ke[3]) * tn + (Ze[4] - Ke[4]) * Pn + (Ze[5] - Ke[5]) * pn, ln = $t * an * (Cn / _t), zn = Ze[4] - Ke[4], At = Ze[5] - Ke[5], xn = nn * St * zn / _t, Jt = nn * Bt * At / _t;
              ve += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, ve += `
L = ${mt(_t, 3)} m`, ve += `
\u0394L = ${mt(un * yt, 3)} ${_e.dispUnit}`, ve += `
\u03B5 = ${mt(un / _t, 6)}`, Math.abs(fn) > 1e-6 && (ve += `
N \u2248 ${mt(fn * Qe)} ${_e.forceUnit}`), Math.abs(ln) > 1e-6 && (ve += `
T \u2248 ${mt(ln * Qe)} ${_e.forceUnit}\xB7m`), Math.abs(xn) > 1e-6 && (ve += `
My \u2248 ${mt(xn * Qe)} ${_e.forceUnit}\xB7m`), Math.abs(Jt) > 1e-6 && (ve += `
Mz \u2248 ${mt(Jt * Qe)} ${_e.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Wt, idx: tt, info: ve };
    }
    return null;
  }
  function ee(K, ue, ze) {
    var _a, _b, _c;
    if (c.visible = false, m.visible = false, M.visible = false, W.visible = false, ce.visible = false, !K || !e.mesh) {
      V.style.display = "none", e.render();
      return;
    }
    const j = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (K.type === "node") {
      const re = C(K.idx);
      if (re) {
        const Ee = e.derivedNodes.rawVal ?? [];
        let ke = 1;
        if (Ee.length >= 2) {
          let $e = [1 / 0, 1 / 0, 1 / 0], ct = [-1 / 0, -1 / 0, -1 / 0];
          for (const _e of Ee) for (let yt = 0; yt < 3; yt++) _e[yt] < $e[yt] && ($e[yt] = _e[yt]), _e[yt] > ct[yt] && (ct[yt] = _e[yt]);
          ke = Math.max(ct[0] - $e[0], ct[1] - $e[1], ct[2] - $e[2], 0.1);
        }
        const Mt = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, gt = 0.015 * ke * Mt;
        c.position.copy(re), c.scale.setScalar(gt), c.visible = true;
      }
    } else if (K.type === "frame" && j) {
      const re = j[K.idx], Ee = C(re[0]), ke = C(re[1]);
      if (Ee && ke) {
        const Mt = Ee.clone().add(ke).multiplyScalar(0.5), gt = ke.clone().sub(Ee), $e = gt.length(), ct = e.getActiveCamera();
        let _e;
        if (ct.isOrthographicCamera) {
          const tt = ct;
          _e = (tt.top - tt.bottom) / tt.zoom * 35e-4;
        } else _e = ct.position.distanceTo(Mt) * 35e-4;
        M.position.copy(Mt);
        const yt = new x(0, 1, 0), Qe = yt.clone().cross(gt).normalize(), sn = yt.angleTo(gt);
        M.quaternion.setFromAxisAngle(Qe, sn), M.scale.set(_e, $e, _e), M.visible = true;
      }
    } else if (K.type === "shell" && j) {
      const re = j[K.idx], Ee = [], ke = [];
      for (const Mt of re) {
        const gt = C(Mt);
        if (!gt) return;
        Ee.push(gt.x, gt.y, gt.z);
      }
      re.length === 4 ? ke.push(0, 1, 2, 0, 2, 3) : re.length === 3 && ke.push(0, 1, 2), P.setAttribute("position", new Rt(Ee, 3)), P.setIndex(ke), P.computeVertexNormals(), W.visible = true;
    } else if (K.type === "solid" && j) {
      const re = j[K.idx], Ee = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], ke = [];
      for (const [Mt, gt] of Ee) {
        const $e = C(re[Mt]), ct = C(re[gt]);
        $e && ct && ke.push($e.x, $e.y, $e.z, ct.x, ct.y, ct.z);
      }
      oe.setAttribute("position", new Rt(ke, 3)), ce.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      V.style.display = "none", e.render();
      return;
    }
    V.textContent = K.info, V.style.whiteSpace = "pre-line", V.style.display = "block";
    const Xe = e.rendererElm.getBoundingClientRect(), Ge = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Xe;
    V.style.left = `${ue - Ge.left}px`, V.style.top = `${ze - Ge.top}px`, e.render();
  }
  let Y = "", xe = 0, A = 0;
  const N = window.__hekatanHoverDebug ?? false, O = (K) => {
    xe && cancelAnimationFrame(xe), xe = requestAnimationFrame(() => {
      var _a, _b, _c;
      const ue = D(K.clientX, K.clientY);
      if (N && A < 5) {
        const j = e.derivedNodes.rawVal, Te = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${K.clientX}, ${K.clientY}) nodes=${(j == null ? void 0 : j.length) ?? 0} elems=${(Te == null ? void 0 : Te.length) ?? 0} hover=`, ue), A++;
      }
      const ze = ue ? `${ue.type}:${ue.idx}` : "";
      if (ze !== Y) Y = ze, ee(ue, K.clientX, K.clientY);
      else if (ue) {
        const j = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        V.style.left = `${K.clientX - j.left}px`, V.style.top = `${K.clientY - j.top}px`;
      }
    });
  };
  let ie = null;
  const Q = () => {
    Y = "", c.visible = false, m.visible = false, M.visible = false, W.visible = false, ce.visible = false, V.style.display = "none", e.render();
  }, Se = (K) => {
    const ue = e.rendererElm.getBoundingClientRect(), ze = K.clientX - ue.left, j = K.clientY - ue.top;
    (ze < -2 || j < -2 || ze > ue.width + 2 || j > ue.height + 2) && (ie && clearTimeout(ie), ie = window.setTimeout(Q, 200));
  }, be = () => {
    ie && (clearTimeout(ie), ie = null);
  };
  e.rendererElm.addEventListener("pointermove", O), e.rendererElm.addEventListener("pointerleave", Se), e.rendererElm.addEventListener("pointerenter", be);
  const Me = document.createElement("div");
  Object.assign(Me.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), Me.classList.add("hekatan-context-menu");
  let Ve = null;
  const De = document.createElement("div");
  Object.assign(De.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const xt = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], bt = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], je = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], T = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], G = (K, ue, ze) => {
    const j = document.createElement("div");
    return j.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, j.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${K}</span><span>${ue}</span>`, j.addEventListener("mouseenter", () => {
      j.style.background = "rgba(100, 160, 255, 0.22)";
    }), j.addEventListener("mouseleave", () => {
      j.style.background = "transparent";
    }), j.addEventListener("click", (Te) => {
      Te.stopPropagation();
      const Xe = Ve;
      It(), Xe && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${ze}`, { detail: { type: Xe.type, idx: Xe.idx, subAction: ze } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Xe.type, idx: Xe.idx, subAction: ze } })));
    }), j;
  };
  function te(K) {
    De.innerHTML = "";
    const ue = K === "frame" ? xt : K === "node" ? bt : K === "shell" ? je : T, ze = document.createElement("div");
    ze.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", ze.textContent = `Asignar a ${K.toUpperCase()} #${(Ve == null ? void 0 : Ve.idx) ?? "?"}`, De.appendChild(ze);
    for (const j of ue) De.appendChild(G(j.icon, j.label, j.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(De);
  }, 0);
  function ne(K, ue) {
    var _a;
    if (!Ve) return;
    te(Ve.type);
    const ze = Me.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), De.style.left = `${K + ze.width}px`, De.style.top = `${ue}px`, De.style.display = "block", setTimeout(() => {
      const j = De.getBoundingClientRect();
      j.right > window.innerWidth - 10 && (De.style.left = `${K - j.width}px`);
    }, 0);
  }
  function Ce() {
    De.style.display = "none";
  }
  const Be = (K, ue, ze, j) => {
    const Te = document.createElement("div");
    Te.style.cssText = `
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.1s;
      justify-content: space-between;
    `;
    const Xe = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${K}</span><span>${ue}</span></span>`, Ge = ze ? '<span style="color:#888;">\u25B8</span>' : "";
    return Te.innerHTML = Xe + Ge, Te.addEventListener("mouseenter", () => {
      if (Te.style.background = "rgba(100, 160, 255, 0.18)", ze) {
        const re = parseFloat(Me.style.left || "0"), Ee = parseFloat(Me.style.top || "0");
        ne(re, Ee);
      } else Ce();
    }), Te.addEventListener("mouseleave", () => {
      Te.style.background = "transparent";
    }), Te.addEventListener("click", (re) => {
      if (re.stopPropagation(), ze) return;
      const Ee = Ve;
      It(), j(Ee);
    }), Te;
  }, ut = Be("\u{1F4DD}", "Asignar", true, () => {
  }), qe = Be("\u2139", "Ver informaci\xF3n", false, (K) => {
    K && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: K.type, idx: K.idx } }));
  });
  qe.addEventListener("mouseenter", () => {
    Ce();
  }), Me.appendChild(ut), Me.appendChild(qe), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Me);
  }, 0);
  function We(K, ue, ze) {
    var _a, _b;
    Ve = ze;
    const j = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    Me.style.left = `${K - j.left}px`, Me.style.top = `${ue - j.top}px`, Me.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function It() {
    Me.style.display = "none", Ce(), Ve = null;
  }
  e.rendererElm.addEventListener("pointerdown", (K) => {
    if (K.button !== 2) return;
    const ue = D(K.clientX, K.clientY);
    window.__hekatanRClickOnElement = !!ue;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (K) => {
    const ue = D(K.clientX, K.clientY);
    if (!ue) {
      It(), window.__hekatanRClickOnElement = false;
      return;
    }
    K.preventDefault(), K.stopImmediatePropagation(), We(K.clientX, K.clientY, { type: ue.type, idx: ue.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const it = (K) => {
    if (Me.style.display !== "block") return;
    const ue = K.target;
    Me.contains(ue) || De.contains(ue) || It();
  };
  document.addEventListener("mousedown", it, true), document.addEventListener("keydown", (K) => {
    K.key === "Escape" && Me.style.display === "block" && It();
  });
  let Kt = null;
  e.rendererElm.addEventListener("pointerdown", (K) => {
    K.button === 0 && (Kt = { x: K.clientX, y: K.clientY });
  }), e.rendererElm.addEventListener("pointerup", (K) => {
    if (K.button !== 0 || !Kt) return;
    const ue = K.clientX - Kt.x, ze = K.clientY - Kt.y;
    if (Kt = null, ue * ue + ze * ze > 9) return;
    const j = D(K.clientX, K.clientY);
    j ? (F = { type: j.type, idx: j.idx }, Ut()) : (F = null, Ut());
  });
  function Ut() {
    var _a, _b;
    if (H.visible = false, se.visible = false, J.visible = false, E.visible = false, !F || !e.mesh) {
      e.render();
      return;
    }
    const K = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (F.type === "node") {
      const ue = C(F.idx);
      if (ue) {
        const ze = e.derivedNodes.rawVal ?? [];
        let j = 1;
        if (ze.length >= 2) {
          let Ge = [1 / 0, 1 / 0, 1 / 0], re = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ee of ze) for (let ke = 0; ke < 3; ke++) Ee[ke] < Ge[ke] && (Ge[ke] = Ee[ke]), Ee[ke] > re[ke] && (re[ke] = Ee[ke]);
          j = Math.max(re[0] - Ge[0], re[1] - Ge[1], re[2] - Ge[2], 0.1);
        }
        const Te = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Xe = 0.017 * j * Te;
        H.position.copy(ue), H.scale.setScalar(Xe), H.visible = true;
      }
    } else if (F.type === "frame" && K) {
      const ue = K[F.idx], ze = C(ue[0]), j = C(ue[1]);
      if (ze && j) {
        const Te = ze.clone().add(j).multiplyScalar(0.5), Xe = j.clone().sub(ze), Ge = Xe.length(), re = e.getActiveCamera();
        let Ee;
        if (re.isOrthographicCamera) {
          const $e = re;
          Ee = ($e.top - $e.bottom) / $e.zoom * 35e-4;
        } else Ee = re.position.distanceTo(Te) * 35e-4;
        se.position.copy(Te);
        const ke = new x(0, 1, 0), Mt = ke.clone().cross(Xe).normalize(), gt = ke.angleTo(Xe);
        se.quaternion.setFromAxisAngle(Mt, gt), se.scale.set(Ee, Ge, Ee), se.visible = true;
      }
    } else if (F.type === "shell" && K) {
      const ue = K[F.idx], ze = [], j = [];
      for (const Te of ue) {
        const Xe = C(Te);
        if (!Xe) return;
        ze.push(Xe.x, Xe.y, Xe.z);
      }
      ue.length === 4 ? j.push(0, 1, 2, 0, 2, 3) : ue.length === 3 && j.push(0, 1, 2), U.setAttribute("position", new Rt(ze, 3)), U.setIndex(j), U.computeVertexNormals(), J.visible = true;
    } else if (F.type === "solid" && K) {
      const ue = K[F.idx], ze = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], j = [];
      for (const [Te, Xe] of ze) {
        const Ge = C(ue[Te]), re = C(ue[Xe]);
        Ge && re && j.push(Ge.x, Ge.y, Ge.z, re.x, re.y, re.z);
      }
      B.setAttribute("position", new Rt(j, 3)), E.visible = true;
    }
    e.render();
  }
  return I.derive(() => {
    e.derivedNodes.val, F && Ut();
  }), i;
}
function Vs(e, i, w, f, c, S) {
  const g = c - w, m = S - f, y = g * g + m * m;
  if (y < 1e-9) {
    const he = e - w, ce = i - f;
    return Math.sqrt(he * he + ce * ce);
  }
  let M = ((e - w) * g + (i - f) * m) / y;
  M = Math.max(0, Math.min(1, M));
  const P = w + M * g, v = f + M * m, W = e - P, oe = i - v;
  return Math.sqrt(W * W + oe * oe);
}
function Ts(e, i, w) {
  let f = false;
  for (let c = 0, S = w.length - 1; c < w.length; S = c++) {
    const g = w[c].x, m = w[c].y, y = w[S].x, M = w[S].y;
    m > i != M > i && e < (y - g) * (i - m) / (M - m + 1e-12) + g && (f = !f);
  }
  return f;
}
function vo(e, i = 8) {
  const w = document.createElement("div");
  w.id = "legend";
  const f = document.createElement("div");
  f.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", w.appendChild(f), setTimeout(() => {
    I.derive(() => {
      f.textContent = Jn.val ? `[${Jn.val}]` : "";
    });
  });
  const c = Array.from({ length: i + 1 }, (y, M) => M / i).reverse();
  let S, g;
  c.forEach((y, M) => {
    S = document.createElement("div"), S.id = `marker-${M}`, S.className = "marker", S.style.marginTop = M == 0 ? "0px" : `calc(${50 / i}vh - 1px)`, g = document.createElement("p"), g.id = `marker-text-${M}`, S.append(g), w.append(S);
  });
  const m = [];
  return w.querySelectorAll("p").forEach((y) => m.push(y)), setTimeout(() => {
    I.derive(() => {
      c.forEach((y, M) => {
        const P = m[M];
        P && (P.innerText = Ls(e.val, y).toString());
      });
    });
  }), w;
}
function Ls(e, i) {
  const w = jn.val;
  if (w) return (w[0] + i * (w[1] - w[0])).toPrecision(3);
  const f = e.filter((g) => Number.isFinite(g));
  if (f.length === 0) return "0";
  let c = Math.min(...f);
  const S = Math.max(...f);
  return c >= 0 && S > 0 && (c = 0), (c + i * (S - c)).toPrecision(3);
}
function Ks({ mesh: e, settingsObj: i, drawingObj: w, objects3D: f, solids: c }) {
  qo.DEFAULT_UP = new x(0, 0, 1);
  const S = document.createElement("div"), g = new Uo(), m = new Ko(45, 1, 0.1, 2 * 1e6), y = new Ho(-10, 10, 10, -10, -1e3, 2e6);
  let M = m;
  const P = new Wo({ antialias: true });
  P.localClippingEnabled = true;
  const v = new wo(m, P.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: Vn.ROTATE, TWO: Vn.DOLLY_PAN }, P.domElement.addEventListener("wheel", (T) => {
    if (!T.ctrlKey && Math.abs(T.deltaX) > Math.abs(T.deltaY) * 1.5) {
      T.preventDefault();
      const G = v.target, te = new x().subVectors(m.position, G), ne = new x();
      ne.crossVectors(m.up, te).normalize();
      const Be = te.length() * 1e-3 * v.panSpeed;
      G.addScaledVector(ne, T.deltaX * Be), m.position.addScaledVector(ne, T.deltaX * Be), v.update();
    }
  }, { passive: false });
  const W = new Kn(new x(-1, 0, 0), 0), oe = new Kn(new x(0, -1, 0), 0), he = new Kn(new x(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ce() {
    const T = window.__hekatanClip, G = [];
    T.enableX && (W.normal.set(T.invertX ? 1 : -1, 0, 0), W.constant = T.invertX ? -T.posX : T.posX, G.push(W)), T.enableY && (oe.normal.set(0, T.invertY ? 1 : -1, 0), oe.constant = T.invertY ? -T.posY : T.posY, G.push(oe)), T.enableZ && (he.normal.set(0, 0, T.invertZ ? 1 : -1), he.constant = T.invertZ ? -T.posZ : T.posZ, G.push(he)), P.clippingPlanes = G, g.traverse((ne) => {
      const Ce = ne;
      if (Ce.material) {
        const Be = Array.isArray(Ce.material) ? Ce.material : [Ce.material];
        for (const ut of Be) ut.clippingPlanes = G, ut.needsUpdate = true;
      }
    });
    const te = window.__hekatanPanes ?? [];
    for (const ne of te) try {
      ne && typeof ne.refresh == "function" && ne.refresh();
    } catch {
    }
    P.render(g, M);
  }
  ce(), window.__hekatanClipApply = ce;
  const _ = Oo(i), H = I.derive(() => _.displayScale.val === 0 ? 1 : _.displayScale.val > 0 ? _.displayScale.val : -1 / _.displayScale.val), we = Is(e, _), se = () => {
    const T = [];
    return _.gridXY.rawVal && T.push("xy"), _.gridXZ.rawVal && T.push("xz"), _.gridYZ.rawVal && T.push("yz"), T;
  }, U = () => {
    const T = _.gridStep.rawVal, G = Math.max(T, _.gridMajor.rawVal);
    return { planes: se(), majorStep: G, minorStep: T };
  };
  let pe = Hn(_.gridSize.rawVal, U());
  pe.visible = _.gridVisible.rawVal, window.__hekatanSnap2D = _.cursorSnap.rawVal;
  const J = () => {
    const T = Math.max(0, Math.min(1, _.gridOpacity.rawVal));
    pe.traverse((G) => {
      const te = G.material;
      if (!te || !("opacity" in te)) return;
      const ne = G.name ?? "";
      let Ce = 0.35;
      ne.includes("border") ? Ce = 1 : ne.includes("major") && (Ce = 0.75), te.opacity = T * Ce;
    });
  };
  J(), S.appendChild(Qo(_, e, c)), S.setAttribute("id", "viewer"), S.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const B = dn();
  P.setClearColor(B.background, 1);
  const $ = _.gridSize.rawVal, E = $ * 0.5 + $ * 0.5 / Math.tan(45 * 0.5);
  m.position.set(0, 0, E), m.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, S.__settings = _, v.zoomSpeed = 1;
  let F = 100, V = 0;
  P.domElement.addEventListener("wheel", (T) => {
    F = T.deltaY, V = T.deltaMode;
  }, { passive: true, capture: true }), v._getZoomScale = function() {
    const T = Math.abs(F);
    if (T >= 80 && V === 0) return Math.pow(0.9, this.zoomSpeed);
    if (V === 1) return Math.pow(0.88, this.zoomSpeed);
    const G = Math.max(0.05, Math.min(T / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * G);
  }, v.update();
  let C = yo(_.gridSize.rawVal, _.flipAxes.rawVal);
  g.add(pe, C), I.derive(() => {
    window.__hekatanGridPlaneXY = _.gridXY.val, window.__hekatanGridPlaneXZ = _.gridXZ.val, window.__hekatanGridPlaneYZ = _.gridYZ.val;
  });
  let D = true;
  I.derive(() => {
    const T = _.gridVisible.val;
    if (D) {
      D = false;
      return;
    }
    pe.visible = T, Q();
  });
  let ee = true;
  I.derive(() => {
    if (_.gridOpacity.val, ee) {
      ee = false;
      return;
    }
    J(), Q();
  }), I.derive(() => {
    const T = _.cursorSnap.val;
    window.__hekatanSnap2D = T;
  });
  let Y = true;
  I.derive(() => {
    var _a;
    const T = _.gridSize.val, G = _.flipAxes.val;
    if (_.gridXY.val, _.gridXZ.val, _.gridYZ.val, _.gridStep.val, _.gridMajor.val, Y) {
      Y = false;
      return;
    }
    g.remove(pe), (_a = pe.traverse) == null ? void 0 : _a.call(pe, (Ce) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Ce.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Ce.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), pe = Hn(T, U()), pe.visible = _.gridVisible.rawVal, g.add(pe), J(), g.remove(C), C.traverse((Ce) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Ce.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Ce.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), C = yo(T, G), g.add(C);
    const te = T * 0.5 + T * 0.5 / Math.tan(45 * 0.5);
    m.position.distanceTo(v.target), Math.abs(m.position.x) < 0.1 && Math.abs(m.position.y) < 0.1 && m.position.z > 0 ? m.position.set(0, 0, te) : m.position.set(0.5 * T, -te, 0.5 * T), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, T * 0.01), v.maxDistance = Math.max(50, T * 50), v.update(), Q();
  }), new ResizeObserver((T) => {
    var _a, _b;
    for (const G of T) {
      const te = (_a = G.target) == null ? void 0 : _a.clientWidth, ne = (_b = G.target) == null ? void 0 : _b.clientHeight;
      if (te === 0 || ne === 0) continue;
      const Be = (A ? te / 2 : te) / ne;
      m.aspect = Be, m.updateProjectionMatrix();
      const ut = y.top;
      if (y.left = -ut * Be, y.right = ut * Be, y.updateProjectionMatrix(), N && N.isPerspectiveCamera) N.aspect = Be, N.updateProjectionMatrix();
      else if (N && N.isOrthographicCamera) {
        const qe = N, We = qe.top;
        qe.left = -We * Be, qe.right = We * Be, qe.updateProjectionMatrix();
      }
      P.setSize(te, ne), Q();
    }
  }).observe(S), v.addEventListener("change", Q), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, _.displayScale.val, _.nodes.val, _.elements.val, (_g = _.edges) == null ? void 0 : _g.val, _.elemColumns.val, _.elemBeams.val, _.nodesIndexes.val, _.elementsIndexes.val, _.orientations.val, _.sections.val, _.secColumns.val, _.secBeams.val, _.secFloor.val, _.supports.val, _.loads.val, _.deformedShape.val, _.nodeResults.val, _.frameResults.val, _.shellResults.val, (_h = _.solidResults) == null ? void 0 : _h.val, setTimeout(Q);
  });
  let A = false, N = null, O = null, ie = false;
  function Q() {
    const T = S.clientWidth || 1, G = S.clientHeight || 1;
    if (!A || !N) {
      P.setScissorTest(false), P.setViewport(0, 0, T, G), P.render(g, M);
      return;
    }
    const te = T / 2;
    P.setScissorTest(true), P.setViewport(0, 0, te, G), P.setScissor(0, 0, te, G), P.render(g, M), P.setViewport(te, 0, te, G), P.setScissor(te, 0, te, G), P.render(g, N), P.setScissorTest(false);
  }
  function Se(T) {
    M = T, v.object = T, v.update(), Q();
  }
  function be(T, G) {
    A = T, G && (N = G);
    const te = S.clientWidth || 1, ne = S.clientHeight || 1, Be = (T ? te / 2 : te) / ne;
    m.isPerspectiveCamera && (m.aspect = Be, m.updateProjectionMatrix());
    const ut = y.top;
    if (y.left = -ut * Be, y.right = ut * Be, y.updateProjectionMatrix(), T && N) {
      if (O ? (O.object = N, O.update()) : (O = new wo(N, P.domElement), O.enableDamping = true, O.dampingFactor = 0.1, O.screenSpacePanning = true, O.zoomSpeed = 0.8, O.panSpeed = 1.2, O.rotateSpeed = 0.9, O.touches = { ONE: Vn.ROTATE, TWO: Vn.DOLLY_PAN }, O._getZoomScale = function() {
        const qe = Math.abs(F);
        if (qe >= 80 && V === 0) return Math.pow(0.9, this.zoomSpeed);
        if (V === 1) return Math.pow(0.88, this.zoomSpeed);
        const We = Math.max(0.05, Math.min(qe / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * We);
      }, O.target.copy(v.target), O.addEventListener("change", Q), O.enabled = false), !ie) {
        const qe = (We) => {
          if (!A || !O) return;
          const It = P.domElement.getBoundingClientRect(), it = We.clientX - It.left, Kt = It.width / 2, Ut = it >= Kt;
          v.enabled = !Ut, O.enabled = Ut;
        };
        P.domElement.addEventListener("pointerdown", qe, true), P.domElement.addEventListener("wheel", qe, { capture: true, passive: true }), ie = true;
      }
    } else T || (v.enabled = true, O && (O.enabled = false));
    S.__splitMode = T, window.__hekatanSplitMode = T, window.__hekatanSplitCamera = T ? N : null, Q();
  }
  if (e) {
    g.add(jo(_, we, H), Jo(e, _, we), ns(_, we, H), os(e, _, we, H), es(e, _, we, H), ts(e, _, we, H), is(e, _, we, H), rs(e, _, we, H), us(e, _, we, H), cs(e, _, we, H));
    const T = Es({ scene: g, rendererElm: P.domElement, getActiveCamera: () => M, derivedNodes: we, derivedDisplayScale: H, mesh: e, settings: _, render: Q });
    g.add(T);
    const G = Ds(e, _), te = xs(e, _, we, G), ne = vo(G);
    g.add(te), S.appendChild(ne);
    const Ce = _s(e, _, we);
    g.add(Ce);
    const Be = Ce.__colorMapValues, ut = vo(Be);
    ut.id = "frame-legend", S.appendChild(ut), I.derive(() => {
      var _a;
      const qe = _.shellResults.val != "none", We = (((_a = _.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", It = qe || We, it = _.frameResults.val.startsWith("contour:");
      ne.hidden = !It, te.visible = It, ut.hidden = !it;
    });
  }
  if (c) {
    const T = new Go(16777215, 0.5);
    g.add(T);
    const G = new mo(16777215, 0.5);
    G.position.set(30, 25, -10), G.shadow.mapSize.width = 1024, G.shadow.mapSize.height = 1024, g.add(G);
    const te = 10;
    G.shadow.camera.left = -te, G.shadow.camera.right = te, G.shadow.camera.top = te, G.shadow.camera.bottom = -te, G.shadow.camera.far = 1e3;
    const ne = new mo(16777215, 0.5);
    ne.color.setHSL(11, 43, 96), ne.position.set(-10, 0, 30), g.add(ne), I.derive(() => {
      (c == null ? void 0 : c.val.length) && (g.remove(...c.oldVal), g.add(...c.rawVal), Q());
    }), I.derive(() => {
      c.rawVal.forEach((Ce) => Ce.visible = _.solids.val), Q();
    });
  }
  if (f) {
    const T = [], G = (ne) => {
      var _a, _b;
      return ((_a = ne == null ? void 0 : ne.userData) == null ? void 0 : _a.isCota) ? _.showCotas.val : ((_b = ne == null ? void 0 : ne.userData) == null ? void 0 : _b.isDistLoad) ? _.loads.val : _.custom3D.val;
    }, te = () => {
      for (const ne of T) ne.visible = G(ne);
      Q();
    };
    I.derive(() => {
      const ne = f.val;
      T.length && (g.remove(...T), T.length = 0), ne.length && (g.add(...ne), T.push(...ne), te()), Q();
    }), I.derive(() => {
      _.custom3D.val, te();
    }), I.derive(() => {
      _.showCotas.val, te();
    }), I.derive(() => {
      _.loads.val, te();
    });
  }
  w && fs({ drawingObj: w, gridObj: pe, scene: g, getActiveCamera: () => M, controls: v, gridSize: $, derivedDisplayScale: H, rendererElm: P.domElement, viewerRender: Q }), _o((T, G) => {
    var _a;
    P.setClearColor(G.background, 1), g.remove(pe), (_a = pe.traverse) == null ? void 0 : _a.call(pe, (te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), pe = Hn(_.gridSize.rawVal, { planes: se() }), g.add(pe), S.style.setProperty("--awatif-legend-color", G.legendMarker), Q();
  });
  const Me = { scene: g, perspCamera: m, orthoCamera: y, get camera() {
    return M;
  }, controls: v, renderer: P, rendererElm: P.domElement, render: Q, setActiveCamera: Se, setSplitMode: be, get splitMode() {
    return A;
  }, get splitCamera() {
    return N;
  }, settings: _ };
  S.__ctx = Me;
  const Ve = document.createElement("div");
  Ve.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const De = (T, G, te) => {
    const ne = document.createElement("button");
    return ne.textContent = T, ne.title = G, ne.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), ne.onmouseenter = () => {
      ne.style.background = "rgba(70,70,70,0.9)";
    }, ne.onmouseleave = () => {
      ne.style.background = "rgba(40,40,40,0.85)";
    }, ne.onclick = (Ce) => {
      Ce.preventDefault(), te();
    }, ne;
  }, xt = (T, G) => {
    const te = v.target, ne = new x().subVectors(M.position, te), Ce = ne.length(), Be = new x(), ut = new x();
    Be.crossVectors(M.up, ne).normalize(), ut.copy(M.up).normalize();
    const qe = Ce * 0.05;
    te.addScaledVector(Be, -T * qe), te.addScaledVector(ut, G * qe), M.position.addScaledVector(Be, -T * qe), M.position.addScaledVector(ut, G * qe), v.update(), Q();
  }, bt = (T) => {
    const G = new x().subVectors(M.position, v.target);
    G.multiplyScalar(T), M.position.copy(v.target).add(G), v.update(), Q();
  }, je = () => {
    const T = document.createElement("div");
    return T.style.cssText = "width:32px;height:32px;", T;
  };
  return Ve.append(je()), Ve.append(De("\u2191", "Pan arriba", () => xt(0, 1))), Ve.append(De("\u2295", "Zoom in", () => bt(0.85))), Ve.append(De("\u2190", "Pan izquierda", () => xt(-1, 0))), Ve.append(De("\u2302", "Reset vista", () => {
    v.reset(), Q();
  })), Ve.append(De("\u2192", "Pan derecha", () => xt(1, 0))), Ve.append(De("\u2296", "Zoom out", () => bt(1.18))), Ve.append(De("\u2193", "Pan abajo", () => xt(0, -1))), Ve.append(je()), getComputedStyle(S).position === "static" && (S.style.position = "relative"), S.appendChild(Ve), S;
}
function Is(e, i) {
  return I.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const w = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], f = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!f || w.length === 0) return w;
    const c = i.deformScale.val, S = i.deformScale.val * i.deformScaleZ.val, g = Number.isFinite(c) ? c : 1, m = Number.isFinite(S) ? S : 1;
    return w.map((y, M) => {
      var _a2;
      const P = ((_a2 = f.get(M)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(P[0]) ? P[0] : 0, W = Number.isFinite(P[1]) ? P[1] : 0, oe = Number.isFinite(P[2]) ? P[2] : 0;
      return [y[0] + v * g, y[1] + W * g, y[2] + oe * m];
    });
  });
}
const jn = I.state(null), Jn = I.state(""), $s = I.state("kN"), Rs = I.state("mm"), Bs = I.state("kN/m\xB2"), Xs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, bo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ys = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Ds(e, i) {
  const w = I.state([]);
  let f;
  return ((c) => {
    c.bendingXX = "bendingXX", c.bendingYY = "bendingYY", c.bendingXY = "bendingXY", c.membraneXX = "membraneXX", c.membraneYY = "membraneYY", c.membraneXY = "membraneXY", c.tranverseShearX = "tranverseShearX", c.tranverseShearY = "tranverseShearY", c.vonMises = "vonMises", c.membranePrincipalMax = "membranePrincipalMax", c.membranePrincipalMin = "membranePrincipalMin", c.bendingPrincipalMax = "bendingPrincipalMax", c.bendingPrincipalMin = "bendingPrincipalMin", c.transverseShearMax = "transverseShearMax", c.pressure = "pressure", c.displacementX = "displacementX", c.displacementY = "displacementY", c.displacementZ = "displacementZ";
  })(f || (f = {})), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const c = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), se = (xt, bt) => {
      xt == null ? void 0 : xt.forEach((je, T) => {
        const G = e.elements.val[T];
        if (G) for (let te = 0; te < G.length; te++) bt.set(G[te], [je[te] ?? je[0]]);
      });
    };
    se((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, c), se((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, S), se((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, g), se((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, m), se((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, y), se((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, M), se((_n2 = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n2.tranverseShearX, P), se((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, v), se((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, W), se((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.membranePrincipalMax, oe), se((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, he), se((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, ce), se((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, _), se((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, H), se((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, we);
    const U = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, pe = (_G = i.solidResults) == null ? void 0 : _G.val, B = pe && pe !== "none" ? pe : i.shellResults.val, $ = U == null ? void 0 : U[B], E = { bendingXX: [c, 0], bendingYY: [S, 0], bendingXY: [g, 0], membraneXX: [m, 0], membraneYY: [y, 0], membraneXY: [M, 0], tranverseShearX: [P, 0], tranverseShearY: [v, 0], vonMises: [W, 0], membranePrincipalMax: [oe, 0], membranePrincipalMin: [he, 0], bendingPrincipalMax: [ce, 0], bendingPrincipalMin: [_, 0], transverseShearMax: [H, 0], pressure: [we, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, F = i.shellResults.val, V = $s.val, C = Rs.val, D = F === "displacementX" || F === "displacementY" || F === "displacementZ", ee = F === "bendingXX" || F === "bendingYY" || F === "bendingXY" || F === "bendingPrincipalMax" || F === "bendingPrincipalMin", Y = F === "membraneXX" || F === "membraneYY" || F === "membraneXY" || F === "membranePrincipalMax" || F === "membranePrincipalMin", xe = F === "vonMises" || F === "pressure", A = F === "tranverseShearX" || F === "tranverseShearY" || F === "transverseShearMax", N = (_N = i.solidResults) == null ? void 0 : _N.val, O = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", ie = N === "ux" || N === "uy" || N === "uz", Q = Bs.val, Se = O ? Ys[Q] : ie || D ? bo[C] : ee || Y || xe || A ? 1 / Xs[V] : 1, be = O ? Q : ie || D ? C : ee ? `${V}\xB7m/m` : Y ? `${V}/m\xB2` : xe ? `${V}/m\xB2` : A ? `${V}/m` : "";
    Jn.val = be, jn.val = Array.isArray($) && $.length === 2 ? [$[0] * Se, $[1] * Se] : null;
    const Ve = N && N !== "none" ? [W, 0] : E[F], De = [];
    e.nodes.val.forEach((xt, bt) => {
      const je = Ve;
      if (!je || !je[0] || typeof je[0].has != "function") return;
      if (!je[0].has(bt)) {
        De.push(Number.NaN);
        return;
      }
      const T = je[0].get(bt), G = T ? T[je[1]] ?? 0 : 0;
      De.push(G * Se);
    }), w.val = De;
  }), w;
}
export {
  ys as a,
  vo as b,
  $s as c,
  Rs as d,
  Bs as e,
  Ks as g
};
