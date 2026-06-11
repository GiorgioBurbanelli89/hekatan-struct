import { v as I, P as ko, r as cn, a7 as Rn, B as he, a8 as Bn, F as It, a4 as Po, J as ot, X as Gt, L as wt, c as nn, w as Co, b as Bo, a9 as Xo, e as st, d as je, V as m, $ as rn, aa as Hn, H as zo, D as Yt, a as Vt, x as pt, z as Xn, ab as Yn, t as Yo, n as Do, I as yn, a2 as Cn, E as No, S as xn, l as Wn, ac as Gn, f as uo, h as fo, i as ho, ad as Tn, q as Zo, ae as Uo, af as Ko, ag as Ho, ah as Wo, g as mo, ai as wo, C as yo, W as Go, K as qo, O as Jo, Y as Qo, T as Ln, p as qn, Z as Oo, _ as xo, U as jo } from "./theme-D5p5K0bJ.js";
import { T as Pt, O as go } from "./Text-B4nrRMfX.js";
import { e as es } from "./styles-Bs20h4nQ.js";
function ts(e, i, y) {
  const f = document.createElement("div"), c = new ko({ title: "Settings", expanded: true, container: f });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(c), f.setAttribute("id", "settings");
  const S = "hk_settingsPos";
  let g = null;
  try {
    const v = localStorage.getItem(S);
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
    let W = false, te = 0, ue = 0, le = 0, _ = 0;
    v.addEventListener("mousedown", (H) => {
      W = true, te = H.clientX, ue = H.clientY;
      const me = f.getBoundingClientRect();
      le = me.left, _ = me.top, f.style.left = `${le}px`, f.style.top = `${_}px`;
    }), window.addEventListener("mousemove", (H) => {
      if (!W) return;
      const me = H.clientX - te, ne = H.clientY - ue, K = Math.max(0, Math.min(window.innerWidth - 40, le + me)), re = Math.max(0, Math.min(window.innerHeight - 40, _ + ne));
      f.style.left = `${K}px`, f.style.top = `${re}px`;
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
function ns(e) {
  return { gridSize: I.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: I.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: I.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: I.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: I.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: I.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: I.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: I.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: I.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: I.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: I.state((e == null ? void 0 : e.nodes) ?? true), elements: I.state((e == null ? void 0 : e.elements) ?? true), edges: I.state((e == null ? void 0 : e.edges) ?? true), faces: I.state((e == null ? void 0 : e.faces) ?? true), elemColumns: I.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: I.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: I.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: I.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: I.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: I.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: I.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: I.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: I.state((e == null ? void 0 : e.orientations) ?? false), sections: I.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: I.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: I.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: I.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: I.state((e == null ? void 0 : e.secFloor) ?? -1), supports: I.state((e == null ? void 0 : e.supports) ?? true), loads: I.state((e == null ? void 0 : e.loads) ?? false), deformedShape: I.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: I.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: I.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: I.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: I.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: I.state((e == null ? void 0 : e.flipAxes) ?? false), solids: I.state((e == null ? void 0 : e.solids) ?? true), custom3D: I.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: I.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: I.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: I.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function os(e, i, y) {
  const f = cn(), c = new Rn(new he(), new Bn({ color: f.nodePoint }));
  return Po((S, g) => {
    c.material.color.setHex(g.nodePoint);
  }), c.frustumCulled = false, I.derive(() => {
    e.nodes.val && c.geometry.setAttribute("position", new It(i.val.flat(), 3));
  }), I.derive(() => {
    if (y.val, i.val, !e.nodes.rawVal) return;
    const S = i.rawVal ?? [];
    let g = e.gridSize.val * 0.5;
    if (S.length >= 2) {
      const w = [1 / 0, 1 / 0, 1 / 0], M = [-1 / 0, -1 / 0, -1 / 0];
      for (const P of S) for (let v = 0; v < 3; v++) w[v] = Math.min(w[v], P[v]), M[v] = Math.max(M[v], P[v]);
      g = Math.max(M[0] - w[0], M[1] - w[1], M[2] - w[2], 0.1);
    }
    const x = 0.03 * g;
    c.material.size = x * y.rawVal;
  }), I.derive(() => {
    c.visible = e.nodes.val;
  }), c;
}
function Jn(e, i) {
  const y = cn(), f = new ot();
  f.name = "hekatan-grid";
  const c = (i == null ? void 0 : i.planes) ?? ["xy"];
  let S = (i == null ? void 0 : i.majorStep) ?? 1, g = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (S <= 0 && (S = 1), g <= 0 && (g = 0.1); e / g > 500; ) g *= 2;
  for (; e / S > 100; ) S *= 2;
  const x = e / 2;
  S = Math.max(g, Math.round(S / g) * g);
  const M = new Gt(y.grid), P = new Gt(y.grid).multiplyScalar(0.45), v = (te, ue, le, _) => {
    const H = [], me = te === "xy" ? (X, $) => [X, $, 0] : te === "xz" ? (X, $) => [X, 0, $] : (X, $) => [0, X, $], ne = Math.floor(x / ue);
    for (let X = -ne; X <= ne; X++) {
      const $ = X * ue, E = me($, -x), F = me($, x);
      H.push(...E, ...F);
    }
    for (let X = -ne; X <= ne; X++) {
      const $ = X * ue, E = me(-x, $), F = me(x, $);
      H.push(...E, ...F);
    }
    const K = new he();
    K.setAttribute("position", new It(H, 3));
    const re = new wt({ color: le, transparent: true, opacity: _, depthWrite: false }), q = new nn(K, re);
    return q.name = `grid-${te}-${ue === g ? "minor" : "major"}`, q;
  }, W = (te, ue, le) => {
    const _ = te === "xy" ? (q, X) => [q, X, 0] : te === "xz" ? (q, X) => [q, 0, X] : (q, X) => [0, q, X], H = [[-x, -x], [x, -x], [x, x], [-x, x]], me = [];
    for (const [q, X] of H) me.push(..._(q, X));
    const ne = new he();
    ne.setAttribute("position", new It(me, 3));
    const K = new wt({ color: ue, transparent: true, opacity: le, depthWrite: false }), re = new Co(ne, K);
    return re.name = `grid-${te}-border`, re.renderOrder = 1, re;
  };
  for (const te of c) f.add(v(te, g, P, 0.12)), f.add(v(te, S, M, 0.4)), f.add(W(te, M, 0.55));
  return f.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: S, minorStep: g, gridSize: e, planes: [...c] }, f;
}
function ss(e, i, y, f) {
  const c = new ot(), S = new Bo(0.5, 0.5, 0.5), g = new Xo(0.45, 0.7, 4);
  g.rotateX(Math.PI / 2), g.translate(0, 0, -0.35);
  const x = new st({ color: 10166822 }), w = new st({ color: 2792847 }), M = new st({ color: 3835647 }), P = () => {
    const te = y.rawVal ?? [];
    if (te.length < 2) return i.gridSize.val * 0.5;
    let ue = [1 / 0, 1 / 0, 1 / 0], le = [-1 / 0, -1 / 0, -1 / 0];
    for (const _ of te) for (let H = 0; H < 3; H++) _[H] < ue[H] && (ue[H] = _[H]), _[H] > le[H] && (le[H] = _[H]);
    return Math.max(le[0] - ue[0], le[1] - ue[1], le[2] - ue[2], 0.1);
  }, v = () => 0.08 * P(), W = () => Math.max(f.rawVal, 1);
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    c.clear();
    const te = v();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((ue, le) => {
      const _ = y.val[le];
      if (!_) return;
      const H = ue ?? [], me = (H[0] ? 1 : 0) + (H[1] ? 1 : 0) + (H[2] ? 1 : 0), ne = (H[3] ? 1 : 0) + (H[4] ? 1 : 0) + (H[5] ? 1 : 0);
      let K;
      me >= 3 && ne >= 3 ? K = new je(S, x) : me >= 3 && ne === 0 ? K = new je(g, w) : K = new je(g, M), K.position.set(_[0], _[1], _[2]);
      const re = te * W();
      K.scale.set(re, re, re), c.add(K);
    });
  }), I.derive(() => {
    if (f.val, !i.supports.rawVal) return;
    const ue = v() * W();
    c.children.forEach((le) => le.scale.set(ue, ue, ue));
  }), I.derive(() => {
    c.visible = i.supports.val;
  }), c;
}
function as(e, i, y, f) {
  const c = new ot();
  c.name = "loadsGroup";
  function S(g) {
    if (g.length < 2) return 0.12 * i.gridSize.rawVal;
    const x = [1 / 0, 1 / 0, 1 / 0], w = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of g) for (let v = 0; v < 3; v++) x[v] = Math.min(x[v], P[v]), w[v] = Math.max(w[v], P[v]);
    return 0.08 * Math.max(w[0] - x[0], w[1] - x[1], w[2] - x[2], 0.1);
  }
  return I.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    c.children.forEach((w) => w.dispose()), c.clear();
    const g = y.val, x = S(g);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((w, M) => {
      const P = g[M];
      if (!P) return;
      const v = new m(...w.slice(0, 3));
      if (v.lengthSq() < 1e-30) return;
      v.normalize();
      const W = new rn(v, new m(...P), 1, 15637248, 0.3, 0.3), te = x * f.rawVal;
      W.scale.set(te, te, te), c.add(W);
    });
  }), I.derive(() => {
    if (f.val, !i.loads.rawVal) return;
    const x = S(y.rawVal) * f.rawVal;
    c.children.forEach((w) => w.scale.set(x, x, x));
  }), I.derive(() => {
    c.visible = i.loads.val;
  }), c;
}
function is(e, i, y) {
  const f = new ot();
  return I.derive(() => {
    if (!e.nodesIndexes.val) return;
    f.children.forEach((S) => S.dispose()), f.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((S, g) => {
      const x = new Pt(`${g}`);
      x.position.set(...S), x.updateScale(c * y.rawVal), f.add(x);
    });
  }), I.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6;
    f.children.forEach((S) => S.updateScale(c * y.rawVal));
  }), I.derive(() => {
    f.visible = e.nodesIndexes.val;
  }), f;
}
function ls(e, i, y, f) {
  const c = new ot();
  return I.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    c.children.forEach((g) => g.dispose()), c.clear();
    const S = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((g, x) => {
      const w = new Pt(`${x}`, void 0, "#001219");
      w.position.set(...rs(g.map((M) => y.rawVal[M]))), w.updateScale(S * f.rawVal), c.add(w);
    });
  }), I.derive(() => {
    if (f.val, !i.elementsIndexes.rawVal) return;
    const S = 0.05 * i.gridSize.val * 0.6;
    c.children.forEach((g) => g.updateScale(S * f.rawVal));
  }), I.derive(() => {
    c.visible = i.elementsIndexes.val;
  }), c;
}
function rs(e) {
  const i = e.reduce((f, c) => [f[0] + c[0], f[1] + c[1], f[2] + c[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function vo(e, i) {
  const y = new ot(), f = 0.05 * e * 1, c = cn(), S = new Pt("X", "red", "transparent"), g = new Pt(i ? "Z" : "Y", "green", "transparent"), x = new Pt(i ? "Y" : "Z", "blue", "transparent"), w = new rn(new m(1, 0, 0), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), M = new rn(new m(0, 1, 0), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), P = new rn(new m(0, 0, 1), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2);
  return S.position.set(1.3 * f, 0, 0), g.position.set(0, 1.3 * f, 0), x.position.set(0, 0, 1.3 * f), S.updateScale(0.4 * f), g.updateScale(0.4 * f), x.updateScale(0.4 * f), w.scale.set(f, f, f), M.scale.set(f, f, f), P.scale.set(f, f, f), y.add(w, M, P, S, g, x), y;
}
function to(e, i) {
  const y = new m(...e), c = new m(...i).clone().sub(y), S = c.length(), g = c.dot(new m(1, 0, 0)) / S, x = c.dot(new m(0, 1, 0)) / S, w = c.dot(new m(0, 0, 1)) / S, M = Math.sqrt(g ** 2 + x ** 2);
  let P = new Hn().fromArray([[g, x, w], [-x / M, g / M, 0], [-g * w / M, -x * w / M, M]].flat());
  return w === 1 && (P = new Hn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), w === -1 && (P = new Hn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new zo().setFromMatrix3(P);
}
function jn(e, i) {
  return e == null ? void 0 : e.map((y, f) => (9 * y + i[f]) / 10);
}
function Fn(e) {
  const i = e.reduce((f, c) => [f[0] + c[0], f[1] + c[1], f[2] + c[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function cs(e, i, y) {
  const f = Fn([i, y]), c = Fn([e, y]), S = Fn([e, i]), g = new m(...f).sub(new m(...c)).normalize(), x = new m(...y).sub(new m(...S)).normalize(), w = g.clone().cross(x).normalize(), M = w.clone().cross(g).normalize();
  return new zo().makeBasis(g, M, w);
}
function ds(e, i, y, f) {
  const c = new ot(), S = new he(), g = new wt({ vertexColors: true }), x = [0, 0, 0], w = [1, 0, 0], M = [0, 1, 0], P = [0, 0, 1];
  S.setAttribute("position", new It([...x, ...w, ...x, ...M, ...x, ...P], 3));
  const v = [255, 0, 0], W = [0, 255, 0], te = [0, 0, 255];
  return S.setAttribute("color", new It([...v, ...v, ...W, ...W, ...te, ...te], 3)), I.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (c.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((ue) => {
      const le = new nn(S, g), _ = y.rawVal[ue[0]], H = y.rawVal[ue[1]];
      if (ue.length === 2 && (le.position.set(...jn(_, H)), le.rotation.setFromRotationMatrix(to(_, H))), ue.length === 3) {
        const K = y.rawVal[ue[2]];
        le.position.set(...Fn([_, H, K])), le.rotation.setFromRotationMatrix(cs(_, H, K));
      }
      const ne = 0.05 * i.gridSize.rawVal * 0.75 * f.rawVal;
      le.scale.set(ne, ne, ne), c.add(le);
    }));
  }), I.derive(() => {
    if (f.val, !i.orientations.rawVal) return;
    const le = 0.05 * i.gridSize.val * 0.75 * f.rawVal;
    c.children.forEach((_) => _.scale.set(le, le, le));
  }), I.derive(() => {
    c.visible = i.orientations.val;
  }), c;
}
function ps(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const i = (e.b * 100).toFixed(0), y = (e.h * 100).toFixed(0);
    return `${i}x${y}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function us(e, i, y, f) {
  const c = new ot(), S = new ot();
  c.add(S);
  function g(q, X) {
    const $ = q / 2, E = X / 2, F = new Float32Array([0, -$, -E, 0, $, -E, 0, $, E, 0, -$, -E, 0, $, E, 0, -$, E]), V = new he();
    V.setAttribute("position", new pt(F, 3));
    const C = new Float32Array([0, -$, -E, 0, $, -E, 0, $, E, 0, -$, E, 0, -$, -E]), N = new he();
    return N.setAttribute("position", new pt(C, 3)), { fill: V, outline: N };
  }
  function x(q, X = 24) {
    const $ = q / 2, E = new Float32Array(X * 9);
    for (let N = 0; N < X; N++) {
      const j = N / X * Math.PI * 2, D = (N + 1) / X * Math.PI * 2;
      E[N * 9] = 0, E[N * 9 + 1] = 0, E[N * 9 + 2] = 0, E[N * 9 + 3] = 0, E[N * 9 + 4] = $ * Math.cos(j), E[N * 9 + 5] = $ * Math.sin(j), E[N * 9 + 6] = 0, E[N * 9 + 7] = $ * Math.cos(D), E[N * 9 + 8] = $ * Math.sin(D);
    }
    const F = new he();
    F.setAttribute("position", new pt(E, 3));
    const V = new Float32Array((X + 1) * 3);
    for (let N = 0; N <= X; N++) {
      const j = N / X * Math.PI * 2;
      V[N * 3] = 0, V[N * 3 + 1] = $ * Math.cos(j), V[N * 3 + 2] = $ * Math.sin(j);
    }
    const C = new he();
    return C.setAttribute("position", new pt(V, 3)), { fill: F, outline: C };
  }
  function w(q, X, $, E) {
    const F = $ ?? X * 0.08, V = E ?? q * 0.07, C = q / 2, N = X / 2, j = N - F, D = V / 2, xe = [];
    function A(Q, Pe, fe, be) {
      xe.push(0, Q, Pe, 0, fe, Pe, 0, fe, be, 0, Q, Pe, 0, fe, be, 0, Q, be);
    }
    A(-C, -N, C, -j), A(-D, -j, D, j), A(-C, j, C, N);
    const Z = new he();
    Z.setAttribute("position", new pt(new Float32Array(xe), 3));
    const J = new Float32Array([0, -C, -N, 0, C, -N, 0, C, -j, 0, D, -j, 0, D, j, 0, C, j, 0, C, N, 0, -C, N, 0, -C, j, 0, -D, j, 0, -D, -j, 0, -C, -j, 0, -C, -N]), ie = new he();
    return ie.setAttribute("position", new pt(J, 3)), { fill: Z, outline: ie };
  }
  function M(q, X, $) {
    const E = q / 2, F = X / 2, V = E - $, C = F - $, N = [];
    function j(Z, J, ie, Q) {
      N.push(0, Z, J, 0, ie, J, 0, ie, Q, 0, Z, J, 0, ie, Q, 0, Z, Q);
    }
    j(-E, -F, E, -C), j(-E, C, E, F), j(-E, -C, -V, C), j(V, -C, E, C);
    const D = new he();
    D.setAttribute("position", new pt(new Float32Array(N), 3));
    const xe = new Float32Array([0, -E, -F, 0, E, -F, 0, E, -F, 0, E, F, 0, E, F, 0, -E, F, 0, -E, F, 0, -E, -F, 0, -V, -C, 0, V, -C, 0, V, -C, 0, V, C, 0, V, C, 0, -V, C, 0, -V, C, 0, -V, -C]), A = new he();
    return A.setAttribute("position", new pt(xe, 3)), { fill: D, outline: A };
  }
  function P(q, X, $) {
    const E = q / 2, F = X / 2, V = E - $, C = F - $, N = new he(), j = new Float32Array([0, -V, -C, 0, V, -C, 0, V, C, 0, -V, -C, 0, V, C, 0, -V, C]);
    N.setAttribute("position", new pt(j, 3));
    const D = [];
    function xe(ie, Q, Pe, fe) {
      D.push(0, ie, Q, 0, Pe, Q, 0, Pe, fe, 0, ie, Q, 0, Pe, fe, 0, ie, fe);
    }
    xe(-E, -F, E, -C), xe(-E, C, E, F), xe(-E, -C, -V, C), xe(V, -C, E, C);
    const A = new he();
    A.setAttribute("position", new pt(new Float32Array(D), 3));
    const Z = new Float32Array([0, -E, -F, 0, E, -F, 0, E, -F, 0, E, F, 0, E, F, 0, -E, F, 0, -E, F, 0, -E, -F, 0, -V, -C, 0, V, -C, 0, V, -C, 0, V, C, 0, V, C, 0, -V, C, 0, -V, C, 0, -V, -C]), J = new he();
    return J.setAttribute("position", new pt(Z, 3)), { concFill: N, steelFillGeom: A, outline: J };
  }
  function v(q, X, $) {
    const E = [], F = [[0, -q / 2, -X / 2], [0, -q / 2 + $, -X / 2], [0, -q / 2 + $, X / 2 - $], [0, q / 2, X / 2 - $], [0, q / 2, X / 2], [0, -q / 2, X / 2]], V = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const D of V) E.push(...F[D]);
    const C = new he();
    C.setAttribute("position", new pt(new Float32Array(E), 3));
    const N = [];
    for (let D = 0; D < F.length; D++) {
      const xe = (D + 1) % F.length;
      N.push(...F[D], ...F[xe]);
    }
    const j = new he();
    return j.setAttribute("position", new pt(new Float32Array(N), 3)), { fill: C, outline: j };
  }
  function W(q, X, $, E) {
    const F = E / 2, V = [], C = [[0, -q - F, -X / 2], [0, -$ - F, -X / 2], [0, -$ - F, X / 2 - $], [0, -F, X / 2 - $], [0, -F, X / 2], [0, -q - F, X / 2]], N = [[0, F, -X / 2], [0, F + $, -X / 2], [0, F + $, X / 2 - $], [0, q + F, X / 2 - $], [0, q + F, X / 2], [0, F, X / 2]], j = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Z of j) V.push(...C[Z]);
    for (const Z of j) V.push(...N[Z]);
    const D = new he();
    D.setAttribute("position", new pt(new Float32Array(V), 3));
    const xe = [];
    for (const Z of [C, N]) for (let J = 0; J < Z.length; J++) {
      const ie = (J + 1) % Z.length;
      xe.push(...Z[J], ...Z[ie]);
    }
    const A = new he();
    return A.setAttribute("position", new pt(new Float32Array(xe), 3)), { fill: D, outline: A };
  }
  function te(q, X, $, E) {
    const F = X / 2, V = q, C = [[0, -V, -F], [0, -V, -F + $], [0, -E, -F + $], [0, -E, F - $], [0, -V, F - $], [0, -V, F], [0, 0, F], [0, 0, -F]], N = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], j = [];
    for (const Z of N) j.push(...C[Z]);
    const D = new he();
    D.setAttribute("position", new pt(new Float32Array(j), 3));
    const xe = [];
    for (let Z = 0; Z < C.length; Z++) {
      const J = (Z + 1) % C.length;
      xe.push(...C[Z], ...C[J]);
    }
    const A = new he();
    return A.setAttribute("position", new pt(new Float32Array(xe), 3)), { fill: D, outline: A };
  }
  function ue(q, X, $, E, F) {
    const V = X / 2, C = F / 2, N = [], j = [[0, -q, -V], [0, -q, -V + $], [0, -C - E, -V + $], [0, -C - E, V - $], [0, -q, V - $], [0, -q, V], [0, -C, V], [0, -C, -V]], D = j.map((ie) => [ie[0], -ie[1], ie[2]]), xe = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ie of xe) N.push(...j[ie]);
    for (const ie of xe) N.push(...D[ie]);
    const A = new he();
    A.setAttribute("position", new pt(new Float32Array(N), 3));
    const Z = [];
    for (const ie of [j, D]) for (let Q = 0; Q < ie.length; Q++) {
      const Pe = (Q + 1) % ie.length;
      Z.push(...ie[Q], ...ie[Pe]);
    }
    const J = new he();
    return J.setAttribute("position", new pt(new Float32Array(Z), 3)), { fill: A, outline: J };
  }
  function le(q, X, $, E) {
    const F = q / 2, V = X / 2, C = E / 2, N = [[0, -C, -V], [0, C, -V], [0, C, V - $], [0, F, V - $], [0, F, V], [0, -F, V], [0, -F, V - $], [0, -C, V - $]], j = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], D = [];
    for (const J of j) D.push(...N[J]);
    const xe = new he();
    xe.setAttribute("position", new pt(new Float32Array(D), 3));
    const A = [];
    for (let J = 0; J < N.length; J++) {
      const ie = (J + 1) % N.length;
      A.push(...N[J], ...N[ie]);
    }
    const Z = new he();
    return Z.setAttribute("position", new pt(new Float32Array(A), 3)), { fill: xe, outline: Z };
  }
  function _(q, X, $ = 24) {
    const E = q / 2, F = E - X, V = [];
    for (let D = 0; D < $; D++) {
      const xe = D / $ * Math.PI * 2, A = (D + 1) / $ * Math.PI * 2, Z = Math.cos(xe), J = Math.sin(xe), ie = Math.cos(A), Q = Math.sin(A);
      V.push(0, E * Z, E * J, 0, E * ie, E * Q, 0, F * ie, F * Q), V.push(0, E * Z, E * J, 0, F * ie, F * Q, 0, F * Z, F * J);
    }
    const C = new he();
    C.setAttribute("position", new pt(new Float32Array(V), 3));
    const N = [];
    for (let D = 0; D < $; D++) {
      const xe = D / $ * Math.PI * 2, A = (D + 1) / $ * Math.PI * 2;
      N.push(0, E * Math.cos(xe), E * Math.sin(xe), 0, E * Math.cos(A), E * Math.sin(A)), N.push(0, F * Math.cos(xe), F * Math.sin(xe), 0, F * Math.cos(A), F * Math.sin(A));
    }
    const j = new he();
    return j.setAttribute("position", new pt(new Float32Array(N), 3)), { fill: C, outline: j };
  }
  const H = new st({ color: 52479, transparent: true, opacity: 0.35, side: Yt, depthWrite: false }), me = new wt({ color: 52479 }), ne = new st({ color: 16750848, transparent: true, opacity: 0.4, side: Yt, depthWrite: false }), K = new wt({ color: 16750848 });
  function re(q, X) {
    const $ = Math.abs(X[0] - q[0]), E = Math.abs(X[1] - q[1]), F = Math.abs(X[2] - q[2]);
    return F > $ && F > E || E > $ && E > F;
  }
  return I.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const q = i.secColumns.rawVal, X = i.secBeams.rawVal;
    if (!q && !X) {
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
    $.forEach((C, N) => {
      if (C.length !== 2) return;
      const j = y.rawVal[C[0]], D = y.rawVal[C[1]];
      if (!j || !D) return;
      const xe = re(j, D);
      if (xe && !q || !xe && !X) return;
      if (V >= 0) {
        const Q = Math.min(j[1], D[1]);
        Math.max(j[1], D[1]);
        const Pe = i.gridSize.rawVal || 3;
        if (Math.floor(Q / Pe + 0.01) !== V) return;
      }
      const A = F == null ? void 0 : F.get(N);
      if (!A) return;
      const Z = [(j[0] + D[0]) / 2, (j[1] + D[1]) / 2, (j[2] + D[2]) / 2], J = to(j, D);
      if (A.type === "CFT") {
        const Q = P(A.b, A.h, A.tw ?? A.b * 0.05), Pe = new je(Q.concFill, H);
        Pe.position.set(...Z), Pe.rotation.setFromRotationMatrix(J), c.add(Pe);
        const fe = new je(Q.steelFillGeom, ne);
        fe.position.set(...Z), fe.rotation.setFromRotationMatrix(J), c.add(fe);
        const be = new Vt(Q.outline, K);
        be.position.set(...Z), be.rotation.setFromRotationMatrix(J), c.add(be);
      } else {
        let Q, Pe, fe;
        switch (A.type) {
          case "rect":
            Q = g(A.b, A.h), Pe = H, fe = me;
            break;
          case "circ":
            Q = x(A.d), Pe = H, fe = me;
            break;
          case "I":
            Q = w(A.b, A.h, A.tf, A.tw), Pe = ne, fe = K;
            break;
          case "HSS":
            Q = M(A.b, A.h, A.tw ?? A.b * 0.05), Pe = ne, fe = K;
            break;
          case "CFT":
            Q = P(A.b, A.h, A.tw ?? A.b * 0.05), Pe = ne, fe = K;
            break;
          case "L":
            Q = v(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3), Pe = ne, fe = K;
            break;
          case "2L":
            Q = W(A.b ?? A.h, A.h, A.t ?? A.tw ?? 3e-3, A.dis ?? 0.01), Pe = ne, fe = K;
            break;
          case "C":
          case "coldC":
            Q = te(A.b, A.h, A.tf ?? A.t ?? 3e-3, A.tw ?? A.t ?? 3e-3), Pe = ne, fe = K;
            break;
          case "2C":
            Q = ue(A.b, A.h, A.tf ?? 5e-3, A.tw ?? 5e-3, A.dis ?? 0.01), Pe = ne, fe = K;
            break;
          case "T":
            Q = le(A.b, A.h, A.tf ?? 0.01, A.tw ?? 6e-3), Pe = ne, fe = K;
            break;
          case "pipe":
            Q = _(A.d, A.tw ?? A.d * 0.05), Pe = ne, fe = K;
            break;
          default:
            return;
        }
        const be = new je(Q.fill, Pe);
        be.position.set(...Z), be.rotation.setFromRotationMatrix(J), c.add(be);
        const Fe = new Vt(Q.outline, fe);
        Fe.position.set(...Z), Fe.rotation.setFromRotationMatrix(J), c.add(Fe);
      }
      const ie = ps(A);
      if (ie) {
        const Pe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(A.type) ? "#ff9900" : "#00ccff", fe = new Pt(ie, Pe, "transparent");
        fe.position.set(Z[0], Z[1], Z[2]);
        const be = 0.05 * i.gridSize.rawVal * 0.5;
        fe.updateScale(be * ((f == null ? void 0 : f.rawVal) ?? 1)), S.add(fe);
      }
    });
  }), f && I.derive(() => {
    if (f.val, !i.sections.rawVal) return;
    const q = 0.05 * i.gridSize.val * 0.5;
    S.children.forEach((X) => {
      X instanceof Pt && X.updateScale(q * f.rawVal);
    });
  }), I.derive(() => {
    c.visible = i.sections.val;
  }), I.derive(() => {
    S.visible = i.sectionLabels.val;
  }), c;
}
class In extends ot {
  constructor(i, y, f, c, S, g, x) {
    super();
    const w = new Xn().moveTo(0, 0).lineTo(0, g[1]).lineTo(f, g[1]).lineTo(f, 0).lineTo(0, 0), M = w.getPoints(), P = new he().setFromPoints(M);
    this.lines = new Vt(P, new wt({ color: cn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new Yn(w), W = new st({ color: g[1] > 0 ? 24435 : 11411474, side: Yt });
    this.mesh = new je(v, W), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Pt(`${S[1].toFixed(2)}`), this.normalizedResult = g, this.textPosition = Fn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(c), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class bo extends ot {
  constructor(i, y, f, c, S, g, x) {
    super();
    const w = S[0] * f / (S[0] + S[1]), M = S[0] * S[1] > 0;
    if (this.text = new Pt(`${S[0].toFixed(2)}`), this.text2 = new Pt(`${(S[1] * -1).toFixed(2)}`), this.normalizedResult = g, this.textPosition = jn(i, y), this.text2Position = jn(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(c), this.text2.rotation.setFromRotationMatrix(c), this.add(this.text, this.text2), M) {
      const P = new Xn().moveTo(0, 0).lineTo(0, g[0]).lineTo(w, 0).lineTo(0, 0), v = new Xn().moveTo(w, 0).lineTo(f, -g[1]).lineTo(f, 0).lineTo(w, 0), W = P.getPoints(), te = v.getPoints(), ue = new he().setFromPoints(W), le = new he().setFromPoints(te), _ = new wt({ color: cn().resultOutline });
      this.lines = new Vt(ue, _), this.lines2 = new Vt(le, _), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), this.lines2.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), x && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const H = new Yn(P), me = new Yn(v), ne = new st({ color: g[0] > 0 ? 24435 : 11411474, side: Yt }), K = new st({ color: -g[1] > 0 ? 24435 : 11411474, side: Yt });
      this.mesh = new je(H, ne), this.mesh2 = new je(me, K), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), this.mesh2.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), x && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Xn().moveTo(0, 0).lineTo(0, g[0]).lineTo(f, -g[1]).lineTo(f, 0).lineTo(0, 0), v = P.getPoints(), W = new he().setFromPoints(v);
      this.lines = new Vt(W, new wt({ color: cn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const te = new Yn(P), ue = new st({ color: g[0] > 0 ? 24435 : 11411474, side: Yt });
      this.mesh = new je(te, ue), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var Fo = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(Fo || {});
function fs(e, i, y, f) {
  const c = new ot(), S = () => {
    const w = y.rawVal ?? [];
    if (w.length < 2) return i.gridSize.val * 0.5;
    let M = [1 / 0, 1 / 0, 1 / 0], P = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of w) for (let W = 0; W < 3; W++) v[W] < M[W] && (M[W] = v[W]), v[W] > P[W] && (P[W] = v[W]);
    return Math.max(P[0] - M[0], P[1] - M[1], P[2] - M[2], 0.1);
  }, g = () => 0.025 * S(), x = { normals: In, shearsY: In, shearsZ: In, torsions: In, bendingsY: bo, bendingsZ: bo };
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    c.children.forEach((M) => M.dispose()), c.clear();
    const w = Fo[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[w]) == null ? void 0 : _b.forEach((M, P) => {
      var _a2, _b2;
      const v = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[P]) ?? [0, 1], W = y.rawVal[v[0]], te = y.rawVal[v[1]], ue = new m(...te).distanceTo(new m(...W)), le = hs((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[w]), _ = M == null ? void 0 : M.map((K) => K / (le === 0 ? 1 : le)), H = to(W, te), me = new x[w](W, te, ue, H, M ?? [0, 0], _ ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(w)), ne = g();
      me.updateScale(ne * f.rawVal), c.add(me);
    });
  }), I.derive(() => {
    if (f.val, i.frameResults.rawVal == "none") return;
    const w = g();
    c.children.forEach((M) => M.updateScale(w * f.rawVal));
  }), I.derive(() => {
    c.visible = i.frameResults.val != "none";
  }), c;
}
function hs(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((y) => {
    const f = Math.max(...y ?? [0, 0]);
    f > i && (i = f);
  }), i;
}
class ms extends ot {
  constructor(i, y, f) {
    super();
    const c = y === no.reactions;
    f[0] && (this.xText1 = new Pt(`${c ? "Fx" : "Dx"}: ` + f[0].toFixed(4))), f[3] && (this.xText2 = new Pt(`${c ? "Mx" : "Rx"}: ` + f[3].toFixed(4))), f[1] && (this.yText1 = new Pt(`${c ? "Fy" : "Dy"}: ` + f[1].toFixed(4))), f[4] && (this.yText2 = new Pt(`${c ? "My" : "Ry"}: ` + f[4].toFixed(4))), f[2] && (this.zText1 = new Pt(`${c ? "Fz" : "Dz"}: ` + f[2].toFixed(4))), f[5] && (this.zText2 = new Pt(`${c ? "Mz" : "Rz"}: ` + f[5].toFixed(4))), (f[0] || f[3]) && (this.xArrow = new rn(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[1] || f[4]) && (this.yArrow = new rn(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[2] || f[5]) && (this.zArrow = new rn(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
var no = ((e) => (e.deformations = "deformations", e.reactions = "reactions", e))(no || {});
function ws(e, i, y, f) {
  const c = new ot();
  return I.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    c.children.forEach((x) => x.dispose()), c.clear();
    const S = no[i.nodeResults.rawVal], g = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[S]) == null ? void 0 : _b.forEach((x, w) => {
      const M = new ms(y.rawVal[w], S, x ?? [0, 0, 0, 0, 0, 0]);
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
function ys({ drawingObj: e, gridObj: i, scene: y, getActiveCamera: f, controls: c, gridSize: S, derivedDisplayScale: g, rendererElm: x, viewerRender: w }) {
  const M = new Yo(), P = new Do(), v = (n) => {
    const o = x.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const d = r / 2;
      if (a >= d) return P.x = (a - d) / d * 2 - 1, P.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? f();
      P.x = a / d * 2 - 1;
    } else P.x = a / r * 2 - 1;
    return P.y = -(t / s) * 2 + 1, f();
  }, W = new je(new yn(1e4, 1e4), new st({ side: Yt, transparent: true, opacity: 0, depthWrite: false }));
  W.visible = true, W.frustumCulled = false, y.add(W);
  const te = (n, o, a) => {
    const t = new je(new yn(1e4, 1e4), new st({ side: Yt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, ue = te(Math.PI / 2, 0, 0), le = te(0, Math.PI / 2, 0), _ = () => {
    if (ue.visible = !!window.__hekatanGridPlaneXZ, le.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Me.visible) {
      const a = M.intersectObjects([Me, Ye, He], false);
      if (a.length > 0) return a;
    }
    const o = [W];
    return ue.visible && o.push(ue), le.visible && o.push(le), Ee.visible && Ze.length > 0 && o.push(...Ze), M.intersectObjects(o, false);
  }, H = new Rn(new he(), new Bn()), me = new Rn(new he(), new Bn({ color: "gray", sizeAttenuation: false, size: 6 })), ne = new Rn(new he(), new Bn({ color: "orange", size: 0.1 }));
  y.add(ne);
  const K = document.createElement("input");
  K.id = "hk-rubber-label", K.type = "text", K.spellcheck = false, K.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, K.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(K);
  let re = null, q = null, X = false;
  const $ = new m(), E = (n, o, a, t, r, s) => {
    const l = t - n, d = r - o, u = s - a, b = Math.hypot(l, d, u);
    if (b < 0.01) {
      K.style.display = "none";
      return;
    }
    re = [n, o, a], q = [l / b, d / b, u / b], $.set((n + t) / 2, (o + r) / 2, (a + s) / 2), $.project(f());
    const k = x.getBoundingClientRect(), p = k.left + ($.x * 0.5 + 0.5) * k.width, h = k.top + (-$.y * 0.5 + 0.5) * k.height;
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
    K.style.display = "none", re = null, q = null, X = false, document.activeElement === K && K.blur();
  }, V = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Ft = n, ae(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), K.blur();
      return;
    }
    if (!re || !q || !e.polylines) return;
    let a = q[0], t = q[1], r = q[2];
    Je === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : Je === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : Je === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = re[0] + a * n, l = re[1] + t * n, d = re[2] + r * n;
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
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [re[0] + t * Math.cos(o), re[1] + t * Math.sin(o), re[2] + n.L * Math.sin(a)];
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
      if (X = false, a.kind === "length") V(a.L), ae(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = N(a);
        if (!t) return;
        j(t);
        const r = a.kind;
        ae(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
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
    if (!re || !q || document.activeElement === K) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (K.value = n.key, K.focus(), K.setSelectionRange(1, 1), n.preventDefault());
  });
  const D = document.createElement("div");
  D.id = "hk-coord-readout", D.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", D.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(D);
  const xe = document.createElement("div");
  xe.id = "hk-coord-fixed", xe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", xe.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(xe);
  const A = new Vt(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new Cn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  A.frustumCulled = false, A.visible = false, y.add(A);
  const Z = new Vt(new he(), new wt({ color: 2282478, transparent: true, opacity: 0.9 }));
  Z.frustumCulled = false, Z.visible = false, y.add(Z);
  let J = [];
  const ie = new ot(), Q = new je(new yn(1, 1), new st({ color: 2282478, transparent: true, opacity: 0.1, side: Yt, depthWrite: false })), Pe = new nn(new No(new yn(1, 1)), new wt({ color: 2282478, transparent: true, opacity: 0.8 }));
  ie.add(Q, Pe), ie.visible = false, ie.frustumCulled = false, y.add(ie);
  const fe = new ot();
  fe.frustumCulled = false, fe.visible = false, y.add(fe);
  const be = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new Cn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new Vt(o, a);
  }, Fe = be(16711680), Ne = be(65280), Mt = be(35071);
  fe.add(Fe, Ne, Mt);
  const Ct = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new wt({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new Co(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, ut = Ct(3462041), T = Ct(16724804), O = Ct(6333946), ee = new ot();
  ee.frustumCulled = false, ee.visible = false, y.add(ee), ee.add(ut, T, O);
  const ce = (n) => {
    const o = new yn(1, 1), a = new st({ color: n, transparent: true, opacity: 0.06, side: Yt, depthWrite: false }), t = new je(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Me = ce(3462041), Ye = ce(16724804), He = ce(6333946);
  ee.add(Me, Ye, He);
  const We = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, yt = document.createElement("div");
  yt.id = "hk-refplane-badge", yt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(yt), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, ee.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      $t(ut, s, "xy", l), $t(T, s, "xz", l), $t(O, s, "yz", l), We(Me, s, "xy", l), We(Ye, s, "xz", l), We(He, s, "yz", l), Me.material.opacity = 0.1, Ye.material.opacity = 0.1, He.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    w();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !ee.visible) {
      w();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    $t(ut, s, "xy", n), $t(T, s, "xz", n), $t(O, s, "yz", n), We(Me, s, "xy", n), We(Ye, s, "xz", n), We(He, s, "yz", n), w();
  };
  const Dt = (n) => {
    if (Me.material.opacity = n === "xy" ? 0.14 : 0.04, Ye.material.opacity = n === "xz" ? 0.14 : 0.04, He.material.opacity = n === "yz" ? 0.14 : 0.04, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      yt.style.background = r.bg, yt.style.color = r.text, yt.textContent = `\u25A6 Plano ${n.toUpperCase()}`, yt.style.display = "block";
    } else yt.style.display = "none";
  }, $t = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let Je = null;
  window.__hekatanAxisLock = () => Je;
  let qt = null;
  const R = document.createElement("div");
  R.id = "hk-axis-lock-badge", R.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(R);
  const de = () => {
    if (!Je) {
      R.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    R.style.background = "rgba(15,23,42,0.92)", R.style.color = n[Je], R.style.border = `1.5px solid ${n[Je]}`, R.textContent = `\u{1F512} LOCK ${Je.toUpperCase()}`, R.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== K) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && J.length >= 3) {
      const r = lt();
      ae(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") Je = Je === a ? null : a, de(), n.preventDefault();
    else if (n.key === "Escape") {
      const r = document.activeElement;
      r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && r.blur(), lo(), n.preventDefault();
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
  const _e = new m(), se = new m(), Ke = new m(), Ge = (n) => {
    if (!Je) return null;
    const o = n[0], a = n[1], t = n[2];
    return Je === "x" ? (_e.set(o - 1e4, a, t), se.set(o + 1e4, a, t)) : Je === "y" ? (_e.set(o, a - 1e4, t), se.set(o, a + 1e4, t)) : (_e.set(o, a, t - 1e4), se.set(o, a, t + 1e4)), M.ray.distanceSqToSegment(_e, se, null, Ke), Ke;
  };
  window.__hekatanProjectOnAxis = Ge;
  const Le = new Vt(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new wt({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  Le.renderOrder = 998, Le.frustumCulled = false, Le.visible = false, y.add(Le);
  let Se = -1, Be = -1, Ce = -1;
  const Ie = /* @__PURE__ */ new Set();
  window.__hekatanSelection = Ie;
  const et = new Vt(new he().setFromPoints([new m(), new m()]), new wt({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  et.renderOrder = 997, et.frustumCulled = false, et.visible = false, y.add(et);
  const $e = new je(new xn(0.02, 12, 12), new st({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  $e.renderOrder = 998, $e.visible = false, y.add($e);
  const ft = (n) => {
    const o = f();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, Te = () => {
    $e.visible && $e.scale.setScalar(ft($e.position));
  }, Qe = new ot();
  Qe.frustumCulled = false, y.add(Qe);
  const at = 2282478;
  let Nt = null;
  const rt = (n, o, a, t) => {
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
  }, Rt = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Qe.children.length; ) {
      const l = Qe.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of Ie) {
      const [d, ...u] = l.split(":");
      if (d === "pt") {
        const b = n[+u[0]];
        if (!b) continue;
        const k = new je(new xn(0.025, 12, 12), new st({ color: at, transparent: true, opacity: 0.9, depthTest: false }));
        k.position.set(b[0], b[1], b[2]), k.renderOrder = 999, k.__isSelectionPt = true, Qe.add(k);
      } else if (d === "seg") {
        const b = o[+u[0]], k = n[b == null ? void 0 : b[+u[1]]], p = n[b == null ? void 0 : b[+u[1] + 1]];
        if (!k || !p) continue;
        const h = new he().setFromPoints([new m(k[0], k[1], k[2]), new m(p[0], p[1], p[2])]), z = new Vt(h, new wt({ color: at, transparent: true, opacity: 0.95, depthTest: false }));
        z.renderOrder = 999, Qe.add(z);
      } else if (d === "poly") {
        const k = o[+u[0]].map((z) => {
          const Y = n[z];
          return Y ? new m(Y[0], Y[1], Y[2]) : null;
        }).filter(Boolean);
        if (k.length < 2) continue;
        const p = new he().setFromPoints(k), h = new Vt(p, new wt({ color: at, transparent: true, opacity: 0.95, depthTest: false }));
        h.renderOrder = 999, Qe.add(h);
      } else if (d === "aux") {
        const b = t[+u[0]];
        if (!b || b.length !== 6) continue;
        const k = new he().setFromPoints([new m(b[0], b[1], b[2]), new m(b[3], b[4], b[5])]), p = new Vt(k, new wt({ color: at, transparent: true, opacity: 0.95, depthTest: false }));
        p.renderOrder = 999, Qe.add(p);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), w();
  };
  window.__hekatanRefreshSelection = Rt, window.__hekatanClearSelection = () => {
    Ie.clear(), Rt();
  };
  const Ht = (n, o, a, t, r, s, l, d, u) => {
    const b = l - t, k = d - r, p = u - s, h = b * b + k * k + p * p;
    if (h < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let z = ((n - t) * b + (o - r) * k + (a - s) * p) / h;
    z = Math.max(0, Math.min(1, z));
    const Y = t + z * b, U = r + z * k, G = s + z * p;
    return Math.hypot(n - Y, o - U, a - G);
  }, De = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, d = -1, u = t;
    for (let b = 0; b < r.length; b++) {
      const k = r[b];
      for (let p = 0; p < k.length - 1; p++) {
        const h = s[k[p]], z = s[k[p + 1]];
        if (!h || !z) continue;
        const Y = Ht(n, o, a, h[0], h[1], h[2], z[0], z[1], z[2]);
        Y < u && (u = Y, l = b, d = p);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: d, dist: u } : null;
  }, Ae = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, d = t;
    for (let u = 0; u < s.length; u++) {
      const b = s[u];
      if (!b || b.length !== 6) continue;
      const k = Ht(n, o, a, b[0], b[1], b[2], b[3], b[4], b[5]);
      k < d && (d = k, l = u);
    }
    return l;
  }, ve = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      Le.visible = false;
      return;
    }
    Le.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), Le.visible = true;
  }, Ue = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      Le.visible = false;
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
    Le.geometry.setFromPoints(s), Le.visible = true;
  }, we = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((u, b) => b !== n), t = /* @__PURE__ */ new Set();
    for (const u of a) for (const b of u) t.add(b);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let u = 0; u < r.length; u++) t.has(u) && (s.set(u, l.length), l.push(r[u]));
    const d = a.map((u) => u.map((b) => s.get(b)).filter((b) => b !== void 0));
    e.points.val = l, e.polylines.val = d, e.areas && (e.areas.val = e.areas.rawVal.filter((u) => u !== n).map((u) => u > n ? u - 1 : u)), Le.visible = false, Se = -1, Be = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, it = (n, o) => {
    var _a, _b, _c;
    if (!e.polylines) return;
    const a = e.polylines.rawVal;
    if (n < 0 || n >= a.length) return;
    if (((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false) {
      we(n);
      return;
    }
    const r = a[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      we(n);
      return;
    }
    let s;
    o === 0 ? s = [r.slice(1)] : o === r.length - 2 ? s = [r.slice(0, -1)] : s = [r.slice(0, o + 1), r.slice(o + 1)];
    const l = [...a.slice(0, n), ...s, ...a.slice(n + 1)], d = /* @__PURE__ */ new Set();
    for (const h of l) for (const z of h) d.add(z);
    const u = e.points.rawVal, b = /* @__PURE__ */ new Map(), k = [];
    for (let h = 0; h < u.length; h++) d.has(h) && (b.set(h, k.length), k.push(u[h]));
    const p = l.map((h) => h.map((z) => b.get(z)).filter((z) => z !== void 0));
    if (e.points.val = k, e.polylines.val = p, e.areas) {
      const h = s.length - 1;
      e.areas.val = e.areas.rawVal.map((z) => z > n ? z + h : z);
    }
    Le.visible = false, Se = -1, Be = -1;
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
      const k = 2 * Math.PI * b / l, p = t * Math.cos(k), h = t * Math.sin(k);
      let z;
      s === "xy" ? z = [n + p, o + h, a] : s === "xz" ? z = [n + p, o, a + h] : z = [n, o + p, a + h], u.push(z);
    }
    if (e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const b = [...u.map((p, h) => d + h), d], k = e.polylines.rawVal;
      ((_a = k[k.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...k, b, []] : e.polylines.val = [...k.slice(0, -1), b, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), d = new m(...a), u = new m().subVectors(l, s), b = new m().subVectors(d, s), k = new m().crossVectors(u, b).normalize(), p = new m().addVectors(s, l).multiplyScalar(0.5), h = new m().addVectors(l, d).multiplyScalar(0.5), z = new m().crossVectors(u, k).normalize(), Y = new m().crossVectors(new m().subVectors(d, l), k).normalize(), U = new m().subVectors(h, p), G = z.x * Y.y - z.y * Y.x;
    let L;
    if (Math.abs(G) > 1e-9) {
      const qe = (U.x * Y.y - U.y * Y.x) / G;
      L = new m().addVectors(p, z.clone().multiplyScalar(qe));
    } else L = p.clone();
    const oe = s.distanceTo(L), pe = new m().subVectors(s, L), ke = new m().subVectors(d, L), ye = Math.acos(Math.max(-1, Math.min(1, pe.dot(ke) / (oe * oe)))), ze = e.points.rawVal.length, ht = [], xt = k.clone();
    for (let qe = 0; qe <= r; qe++) {
      const Xe = qe / r, mt = ye * Xe, dt = new Wn().setFromAxisAngle(xt, mt), gt = pe.clone().applyQuaternion(dt).add(L);
      ht.push([gt.x, gt.y, gt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...ht], e.polylines) {
      const qe = ht.map((mt, dt) => ze + dt), Xe = e.polylines.rawVal;
      e.polylines.val = [...Xe.slice(0, -1), qe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), d = Math.min(n[1], o[1]), u = Math.max(n[1], o[1]), b = (n[2] + o[2]) / 2, k = l - s, p = u - d, h = Math.min(a, k / 2 - 0.01, p / 2 - 0.01);
    if (h <= 0) return;
    const z = e.points.rawVal.length, Y = [], U = [], G = (L, oe) => {
      Y.push([L, oe, b]), U.push(z + Y.length - 1);
    };
    for (let L = 0; L <= r; L++) G(s + h + (k - 2 * h) * L / r, d);
    for (let L = 1; L <= t; L++) {
      const oe = -Math.PI / 2 + Math.PI / 2 * L / t;
      G(l - h + h * Math.cos(oe), d + h + h * Math.sin(oe));
    }
    for (let L = 1; L <= r; L++) G(l, d + h + (p - 2 * h) * L / r);
    for (let L = 1; L <= t; L++) {
      const oe = 0 + Math.PI / 2 * L / t;
      G(l - h + h * Math.cos(oe), u - h + h * Math.sin(oe));
    }
    for (let L = 1; L <= r; L++) G(l - h - (k - 2 * h) * L / r, u);
    for (let L = 1; L <= t; L++) {
      const oe = Math.PI / 2 + Math.PI / 2 * L / t;
      G(s + h + h * Math.cos(oe), u - h + h * Math.sin(oe));
    }
    for (let L = 1; L <= r; L++) G(s, u - h - (p - 2 * h) * L / r);
    for (let L = 1; L <= t; L++) {
      const oe = Math.PI + Math.PI / 2 * L / t;
      G(s + h + h * Math.cos(oe), d + h + h * Math.sin(oe));
    }
    if (U.push(z), e.points.val = [...e.points.rawVal, ...Y], e.polylines) {
      const L = e.polylines.rawVal;
      e.polylines.val = [...L.slice(0, -1), U, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], u = o[2];
    let b;
    if (Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, d, s], [t, d, u], [t, r, u]], e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const k = [a, a + 1, a + 2, a + 3, a], p = e.polylines.rawVal;
      e.polylines.val = [...p.slice(0, -1), k, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], u = o[2];
    let b;
    if (Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, d, s], [t, d, u], [t, r, u]], window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const k = e.polylines.rawVal, p = k.length - 1, h = [a, a + 1, a + 2, a + 3, a];
      e.polylines.val = [...k.slice(0, -1), h, []], e.areas && (e.areas.val = [...e.areas.rawVal, p]);
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
    for (let ge = 0; ge < a; ge++) {
      const Re = n[ge], nt = n[(ge + 1) % a];
      t += (Re[1] - nt[1]) * (Re[2] + nt[2]), r += (Re[2] - nt[2]) * (Re[0] + nt[0]), s += (Re[0] - nt[0]) * (Re[1] + nt[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let d = n[1][0] - n[0][0], u = n[1][1] - n[0][1], b = n[1][2] - n[0][2];
    const k = Math.hypot(d, u, b) || 1;
    d /= k, u /= k, b /= k;
    let p = r * b - s * u, h = s * d - t * b, z = t * u - r * d;
    const Y = Math.hypot(p, h, z) || 1;
    p /= Y, h /= Y, z /= Y;
    const U = n[0], G = (ge) => [(ge[0] - U[0]) * d + (ge[1] - U[1]) * u + (ge[2] - U[2]) * b, (ge[0] - U[0]) * p + (ge[1] - U[1]) * h + (ge[2] - U[2]) * z], L = (ge, Re) => [U[0] + ge * d + Re * p, U[1] + ge * u + Re * h, U[2] + ge * b + Re * z], oe = n.map(G);
    let pe = 1 / 0, ke = -1 / 0, ye = 1 / 0, ze = -1 / 0;
    for (const [ge, Re] of oe) ge < pe && (pe = ge), ge > ke && (ke = ge), Re < ye && (ye = Re), Re > ze && (ze = Re);
    const ht = ke - pe, xt = ze - ye;
    if (ht < 1e-6 || xt < 1e-6) return 0;
    let qe = o && o > 0 ? o : 0.5;
    for (; ht / qe * (xt / qe) > 2500; ) qe *= 2;
    qe = Math.min(qe, Math.min(ht, xt));
    const Xe = (ge, Re) => {
      let nt = false;
      for (let Kt = 0, tn = oe.length - 1; Kt < oe.length; tn = Kt++) {
        const [mn, kn] = oe[Kt], [wn, Pn] = oe[tn];
        kn > Re != Pn > Re && ge < (wn - mn) * (Re - kn) / (Pn - kn) + mn && (nt = !nt);
      }
      return nt;
    }, mt = Math.max(1, Math.round(ht / qe)), dt = Math.max(1, Math.round(xt / qe)), gt = ht / mt, At = xt / dt, en = /* @__PURE__ */ new Map(), Wt = [], kt = e.points.rawVal.length, Ut = (ge, Re) => {
      const nt = ge + "," + Re, Kt = en.get(nt);
      if (Kt !== void 0) return Kt;
      const tn = kt + Wt.length;
      return Wt.push(L(pe + ge * gt, ye + Re * At)), en.set(nt, tn), tn;
    }, Et = [];
    for (let ge = 0; ge < mt; ge++) for (let Re = 0; Re < dt; Re++) {
      if (!Xe(pe + (ge + 0.5) * gt, ye + (Re + 0.5) * At)) continue;
      const nt = Ut(ge, Re), Kt = Ut(ge + 1, Re), tn = Ut(ge + 1, Re + 1), mn = Ut(ge, Re + 1);
      Et.push([nt, Kt, tn, mn]);
    }
    if (!Et.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...Wt], e.polylines && e.areas) {
      let ge = e.polylines.rawVal.slice();
      ge.length && ge[ge.length - 1].length === 0 && (ge = ge.slice(0, -1));
      const Re = [];
      for (const nt of Et) Re.push(ge.length), ge.push([nt[0], nt[1], nt[2], nt[3], nt[0]]);
      ge.push([]), e.polylines.val = ge, e.areas.val = [...e.areas.rawVal, ...Re];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), Et.length;
  };
  const lt = () => {
    if (J.length < 3) return J = [], Z.visible = false, w(), 0;
    const n = window.__hekatanMeshPolyArea(J.slice());
    return J = [], Z.visible = false, w(), n;
  };
  window.__hekatanFinalizePolyArea = lt, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new m(n[0], n[1], n[2]), r = new m(o[0], o[1], o[2]), s = new m(a[0], a[1], a[2]), l = new m().subVectors(r, t).cross(new m().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const d = new Wn().setFromUnitVectors(new m(0, 0, 1), l), u = new Gn().setFromQuaternion(d);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [u.x, u.y, u.z] });
    const b = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), k = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4;
    ie.position.copy(b), ie.quaternion.copy(d), ie.scale.set(k, k, 1), ie.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), ie.visible = false, w();
  };
  const ct = new ot();
  ct.visible = false, y.add(ct), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; ct.children.length; ) {
      const k = ct.children.pop();
      (_a = k.geometry) == null ? void 0 : _a.dispose(), (_b = k.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, d = Math.max(...n) + t, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", b = (k, p, h, z, Y) => {
      const U = document.createElement("canvas");
      U.width = 64, U.height = 32;
      const G = U.getContext("2d");
      G.fillStyle = Y, G.font = "bold 22px sans-serif", G.textAlign = "center", G.fillText(k, 32, 26);
      const L = new uo(U), oe = new fo({ map: L, transparent: true }), pe = new ho(oe);
      return pe.position.set(p, h, z), pe.scale.set(1.2, 0.6, 1), pe;
    };
    n.forEach((k, p) => {
      const h = p < u.length ? u[p] : `X${p}`, z = new he().setFromPoints([new m(k, r, 0), new m(k, s, 0), new m(k, r, 0), new m(k, r, a)]), Y = new Cn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), U = new nn(z, Y);
      U.computeLineDistances(), ct.add(U), ct.add(b(h, k, r - 0.5, 0, "#60a5fa")), ct.add(b(h, k, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((k, p) => {
      const h = `${p + 1}`, z = new he().setFromPoints([new m(l, k, 0), new m(d, k, 0), new m(l, k, 0), new m(l, k, a)]), Y = new Cn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), U = new nn(z, Y);
      U.computeLineDistances(), ct.add(U), ct.add(b(h, l - 0.5, k, 0, "#fb7185")), ct.add(b(h, d + 0.5, k, 0, "#fb7185"));
    }), ct.visible = true, w();
  }, window.__hekatanHideAxes = () => {
    ct.visible = false, w();
  };
  const Ee = new ot();
  Ee.visible = false, y.add(Ee);
  let Ze = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; Ee.children.length; ) {
      const s = Ee.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Ze.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Ze = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const d = r[l % r.length], u = o / 2, b = [new m(a - u, t - u, s), new m(a + u, t - u, s), new m(a + u, t + u, s), new m(a - u, t + u, s), new m(a - u, t - u, s)], k = new he().setFromPoints(b), p = new wt({ color: d, transparent: true, opacity: 0.55 });
      Ee.add(new Vt(k, p));
      const h = document.createElement("canvas");
      h.width = 128, h.height = 32;
      const z = h.getContext("2d");
      z.fillStyle = `#${d.toString(16).padStart(6, "0")}`, z.font = "bold 18px sans-serif", z.fillText(`Z = ${s} m`, 4, 22);
      const Y = new uo(h), U = new fo({ map: Y, transparent: true }), G = new ho(U);
      G.position.set(a - u - 1.5, t - u - 1.5, s), G.scale.set(2.5, 0.6, 1), Ee.add(G);
      const L = new yn(1e4, 1e4), oe = new st({ visible: false, side: Yt }), pe = new je(L, oe);
      pe.position.set(0, 0, s), pe.frustumCulled = false, pe.userData = { refPlaneZ: s }, y.add(pe), Ze.push(pe);
    }), Ee.visible = true, w();
  }, window.__hekatanHideRefPlanes = () => {
    Ee.visible = false, Ze.forEach((n) => {
      n.visible = false;
    }), w();
  };
  const bt = new ot();
  bt.frustumCulled = false, y.add(bt);
  const Tt = () => {
    var _a, _b, _c, _d;
    for (; bt.children.length; ) {
      const a = bt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new he().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new Cn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new Vt(t, r);
      s.computeLineDistances(), bt.add(s);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Tt(), w());
  });
  const Zt = new ot();
  Zt.frustumCulled = false, y.add(Zt);
  const Jt = () => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const a = Zt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new je(new xn(0.025, 12, 12), new st({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(ft(t.position)), Zt.add(t);
    }
  };
  I.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, Jt(), w());
  }), c.addEventListener("change", () => {
    Zt.children.forEach((n) => {
      n.scale.setScalar(ft(n.position));
    });
  }), window.__hekatanRenderAuxPoints = Jt;
  const Oe = new ot(), Lt = new je(new xn(0.01, 12, 12), new st({ color: 16724804, transparent: true, opacity: 0.95 })), on = new je(new xn(0.015, 12, 12), new st({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  Oe.add(Lt, on);
  const Qt = 0.08, dn = (n, o, a) => {
    const t = new he().setFromPoints([new m(...n), new m(...o)]);
    return new Vt(t, new wt({ color: a, transparent: true, opacity: 0.7 }));
  };
  Oe.add(dn([-Qt, 0, 0], [Qt, 0, 0], 16711680)), Oe.add(dn([0, -Qt, 0], [0, Qt, 0], 65280)), Oe.add(dn([0, 0, -Qt], [0, 0, Qt], 35071)), Oe.visible = false, Oe.frustumCulled = false, y.add(Oe);
  const pn = 40, un = 2.5, gn = () => {
    if (!Oe.visible) return;
    const o = f().position.distanceTo(Oe.position), a = Math.max(0.05, Math.min(un, o / pn));
    Oe.scale.setScalar(a);
  }, An = () => {
    Qe.children.length !== 0 && Qe.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(ft(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = An, c.addEventListener("change", () => {
    gn(), $e.visible && Te();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = f().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / pn));
    }
    An();
  }), window.__hekatanShowSnap = (n, o, a) => {
    Oe.position.set(n, o, a), Oe.visible = true, gn(), w();
  }, window.__hekatanHideSnap = () => {
    Oe.visible = false, w();
  }, x.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = _();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) ao(s.type, s.x, s.y, s.z), Oe.position.set(s.x, s.y, s.z), Oe.visible = true, t.set(s.x, s.y, s.z);
      else {
        Dn();
        const k = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0.5;
        k && p > 0 && (t.x = Math.round(t.x / p) * p, t.y = Math.round(t.y / p) * p, t.z = Math.round(t.z / p) * p), Oe.position.copy(t), Oe.visible = true;
      }
      gn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, p = rt(t.x, t.y, t.z, k), h = De(t.x, t.y, t.z, k), z = Ae(t.x, t.y, t.z, k);
        if (p >= 0) {
          const L = e.points.rawVal[p];
          $e.position.set(L[0], L[1], L[2]), $e.visible = true, Te(), et.visible = false, Nt = { kind: "pt", a: p };
        } else if (h) {
          const L = e.points.rawVal, oe = e.polylines.rawVal[h.polyIdx], pe = L[oe[h.segIdx]], ke = L[oe[h.segIdx + 1]];
          et.geometry.setFromPoints([new m(pe[0], pe[1], pe[2]), new m(ke[0], ke[1], ke[2])]), et.visible = true, $e.visible = false, Nt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(h.polyIdx)) ?? false ? { kind: "poly", a: h.polyIdx } : { kind: "seg", a: h.polyIdx, b: h.segIdx };
        } else if (z >= 0) {
          const oe = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[z];
          oe && (et.geometry.setFromPoints([new m(oe[0], oe[1], oe[2]), new m(oe[3], oe[4], oe[5])]), et.visible = true, $e.visible = false, Nt = { kind: "aux", a: z });
        } else et.visible = false, $e.visible = false, Nt = null;
        D.style.left = n.clientX + "px", D.style.top = n.clientY + "px", D.style.display = "block";
        let Y = t;
        if ((Nt == null ? void 0 : Nt.kind) === "pt") {
          const L = e.points.rawVal[Nt.a];
          L && (Y = new m(L[0], L[1], L[2]));
        }
        const U = `X=${Y.x.toFixed(2)} Y=${Y.y.toFixed(2)} Z=${Y.z.toFixed(2)}`;
        if (Nt) {
          const L = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          D.textContent = `${U}  \xB7  \u{1F5B1} Click \u2192 ${L[Nt.kind]}`;
        } else D.textContent = U;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = U), A.visible = false, fe.visible = false, w();
        return;
      }
      if (l === "delete") {
        const k = (window.__hekatanSnap2D ?? 0.5) * 1.5, p = De(t.x, t.y, t.z, k), h = Ae(t.x, t.y, t.z, k);
        let z = false;
        if (h >= 0) if (!p) z = true;
        else {
          const L = window.__hekatanDrawingAuxLines, pe = ((L == null ? void 0 : L.rawVal) ?? (L == null ? void 0 : L.val) ?? L ?? [])[h];
          Ht(t.x, t.y, t.z, pe[0], pe[1], pe[2], pe[3], pe[4], pe[5]) < p.dist && (z = true);
        }
        z ? (Ce = h, Se = -1, Be = -1, ve(h)) : p ? (Se = p.polyIdx, Be = p.segIdx, Ce = -1, Ue(p.polyIdx, p.segIdx)) : (Se = -1, Be = -1, Ce = -1, Le.visible = false), A.visible = false, fe.visible = false, F(), D.style.left = n.clientX + "px", D.style.top = n.clientY + "px", D.style.display = "block";
        const Y = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let U = "";
        z ? U = `\u{1F5D1} l\xEDnea aux #${Ce + 1}` : p ? U = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(p.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${p.polyIdx + 1}` : `\u{1F5D1} seg ${p.segIdx + 1} / poly #${p.polyIdx + 1}` : U = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", D.textContent = `${Y}  \xB7  ${U}`;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = Y), w();
        return;
      } else Le.visible = false, Se = -1, Ce = -1;
      D.style.left = n.clientX + "px", D.style.top = n.clientY + "px", D.style.display = "block";
      const d = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], u = d[d.length - 1] ?? [], b = e.points.rawVal ?? [];
      if (u.length > 0 && b[u[u.length - 1]]) {
        const k = u[u.length - 1], p = b[k];
        let h = Je;
        if (qt = null, !h && window.__hekatanAxisSnap !== false) {
          const Xe = x.getBoundingClientRect(), mt = n.clientX, dt = n.clientY, gt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, At = new m(p[0], p[1], p[2]), en = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], Wt = (Ut) => {
            const Et = Ut.clone().project(o);
            return { x: (Et.x * 0.5 + 0.5) * Xe.width + Xe.left, y: (-Et.y * 0.5 + 0.5) * Xe.height + Xe.top };
          };
          let kt = null;
          for (const [Ut, Et] of en) {
            const ge = Wt(At.clone().addScaledVector(Et, -gt)), Re = Wt(At.clone().addScaledVector(Et, gt)), nt = Re.x - ge.x, Kt = Re.y - ge.y, tn = mt - ge.x, mn = dt - ge.y, kn = nt * nt + Kt * Kt || 1;
            let wn = (tn * nt + mn * Kt) / kn;
            wn = Math.max(0, Math.min(1, wn));
            const Pn = Math.hypot(mt - (ge.x + wn * nt), dt - (ge.y + wn * Kt));
            if (kt === null || Pn < kt.dpx) {
              const Un = M.ray, ro = At.clone().sub(Un.origin), Kn = Et.dot(Un.direction), co = Et.dot(ro), $o = Un.direction.dot(ro), po = 1 - Kn * Kn, Ro = Math.abs(po) < 1e-6 ? -co : (Kn * $o - co) / po;
              kt = { axis: Ut, dpx: Pn, pt: At.clone().addScaledVector(Et, Ro) };
            }
          }
          kt && kt.dpx <= 12 && (t.copy(kt.pt), h = kt.axis, qt = kt.pt.clone());
        }
        const z = !!window.__hekatanOrthoMode;
        if (!h && z) {
          const Xe = Math.abs(t.x - p[0]), mt = Math.abs(t.y - p[1]), dt = Math.abs(t.z - p[2]), gt = (_l = a[0]) == null ? void 0 : _l.object;
          let At = null;
          gt === Me ? At = "xy" : gt === Ye ? At = "xz" : gt === He && (At = "yz"), At === "xy" ? h = Xe >= mt ? "x" : "y" : At === "xz" ? h = Xe >= dt ? "x" : "z" : At === "yz" ? h = mt >= dt ? "y" : "z" : h = Xe >= mt && Xe >= dt ? "x" : mt >= dt ? "y" : "z";
        }
        const Y = window.__hekatanPolarTrack !== false;
        if (!h && Y) {
          const Xe = t.x - p[0], mt = t.y - p[1], dt = t.z - p[2], gt = Math.hypot(Xe, mt, dt);
          if (gt > 1e-3) {
            const en = Math.tan(6 * Math.PI / 180) * gt, Wt = Math.hypot(mt, dt), kt = Math.hypot(Xe, dt), Ut = Math.hypot(Xe, mt), Et = [["x", Wt], ["y", kt], ["z", Ut]];
            Et.sort((ge, Re) => ge[1] - Re[1]), Et[0][1] <= en && (h = Et[0][0]);
          }
        }
        if (h) {
          const Xe = p[0], mt = p[1], dt = p[2];
          h === "x" ? t.set(t.x, mt, dt) : h === "y" ? t.set(Xe, t.y, dt) : t.set(Xe, mt, t.z);
          const gt = !!Je, en = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[h];
          R.style.background = "rgba(15,23,42,0.92)", R.style.color = en, R.style.border = `1.5px solid ${en}`;
          const Wt = (_m = a[0]) == null ? void 0 : _m.object;
          let kt = null;
          Wt === Me ? kt = "xy" : Wt === Ye ? kt = "xz" : Wt === He && (kt = "yz");
          const Ut = kt ? ` (plano ${kt.toUpperCase()})` : "";
          R.textContent = gt ? `\u{1F512} LOCK ${h.toUpperCase()}${Ut}` : `\u22A5 ORTO ${h.toUpperCase()}${Ut}`, R.style.left = n.clientX + 20 + "px", R.style.top = n.clientY + 18 + "px", R.style.transform = "none", R.style.display = "block";
        } else Je || (R.style.display = "none");
        const U = Math.hypot(t.x - p[0], t.y - p[1], t.z - p[2]), G = Math.atan2(t.y - p[1], t.x - p[0]) * 180 / Math.PI, L = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        D.textContent = `${L} | \u0394L=${U.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const oe = document.getElementById("hk-coord-fixed");
        oe && (oe.textContent = L), A.geometry.setFromPoints([new m(p[0], p[1], p[2]), new m(t.x, t.y, t.z)]), (_n2 = A.computeLineDistances) == null ? void 0 : _n2.call(A), A.visible = true, E(p[0], p[1], p[2], t.x, t.y, t.z);
        const pe = window.__hekatanOrthoExt ?? 8, ke = window.__hekatanShowOrthoPlanes !== false;
        ee.visible = ke, ke || Dt(null), ke && ($t(ut, p, "xy", pe), $t(T, p, "xz", pe), $t(O, p, "yz", pe), We(Me, p, "xy", pe), We(Ye, p, "xz", pe), We(He, p, "yz", pe));
        const ye = ke ? M.intersectObjects([Me, Ye, He], false) : [];
        let ze = null;
        if (ye.length > 0) {
          const Xe = ye[0].object;
          Xe === Me ? ze = "xy" : Xe === Ye ? ze = "xz" : Xe === He && (ze = "yz");
        }
        Dt(ze), ze && (yt.style.left = n.clientX + "px", yt.style.top = n.clientY + "px"), Fe.geometry.setFromPoints([new m(p[0] - pe, p[1], p[2]), new m(p[0] + pe, p[1], p[2])]), (_o2 = Fe.computeLineDistances) == null ? void 0 : _o2.call(Fe), Ne.geometry.setFromPoints([new m(p[0], p[1] - pe, p[2]), new m(p[0], p[1] + pe, p[2])]), (_p = Ne.computeLineDistances) == null ? void 0 : _p.call(Ne), Mt.geometry.setFromPoints([new m(p[0], p[1], p[2] - pe), new m(p[0], p[1], p[2] + pe)]), (_q = Mt.computeLineDistances) == null ? void 0 : _q.call(Mt), fe.visible = true;
        const ht = Fe.material, xt = Ne.material, qe = Mt.material;
        h === "x" ? (ht.opacity = 0.95, xt.opacity = 0.1, qe.opacity = 0.1) : h === "y" ? (ht.opacity = 0.1, xt.opacity = 0.95, qe.opacity = 0.1) : h === "z" ? (ht.opacity = 0.1, xt.opacity = 0.1, qe.opacity = 0.95) : (ht.opacity = 0.5, xt.opacity = 0.5, qe.opacity = 0.5);
      } else {
        const k = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        D.textContent = k;
        const p = document.getElementById("hk-coord-fixed");
        if (p && (p.textContent = k), A.visible = false, fe.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (re = null, q = null, K.style.left = n.clientX + 20 + "px", K.style.top = n.clientY - 28 + "px", K.style.display = "block", !X) {
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
    } else Dn(), D.style.display = "none", Oe.visible = false, A.visible = false, fe.visible = false, F(), w();
  }), I.derive(() => {
    e.gridTarget && (xs(i, { position: new m(...e.gridTarget.val.position), quaternion: new Wn().setFromEuler(new Gn(...e.gridTarget.val.rotation)) }, w), W.position.set(...e.gridTarget.val.position), W.quaternion.setFromEuler(new Gn(...e.gridTarget.val.rotation)), W.updateMatrixWorld());
  }), I.derive(() => {
    H.geometry.setAttribute("position", new It(e.points.val.flat(), 3)), H.geometry.computeBoundingSphere();
  }), I.derive(() => {
    const n = 0.05 * S * 0.5 * g.val;
    M.params.Points.threshold = 0.4 * n;
  }), I.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, d, u] = n[s];
      t.push(l, d, u);
    }
    const r = new he();
    r.setAttribute("position", new It(t, 3)), ne.geometry.dispose(), ne.geometry = r;
  });
  let vn = false, Ot = 0;
  x.addEventListener("pointerdown", () => {
    vn = true;
  }), x.addEventListener("pointerup", () => {
    vn = false;
  }), x.addEventListener("pointermove", () => {
    vn && Ot++;
  });
  const St = document.createElement("div");
  St.id = "hk-window-select", St.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(St);
  let Bt = null, sn = false, zt = null;
  const bn = (n, o, a, t, r) => {
    r ? (St.style.borderColor = "#34d399", St.style.borderStyle = "dashed", St.style.background = "rgba(52, 211, 153, 0.10)") : (St.style.borderColor = "#22d3ee", St.style.borderStyle = "solid", St.style.background = "rgba(34, 211, 238, 0.10)"), St.style.left = Math.min(n, a) + "px", St.style.top = Math.min(o, t) + "px", St.style.width = Math.abs(a - n) + "px", St.style.height = Math.abs(t - o) + "px", St.style.display = "block";
  }, En = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), d = Math.min(o, t), u = Math.max(o, t), b = a < n, k = x.getBoundingClientRect(), p = f();
    p.updateMatrixWorld();
    const h = (ye) => {
      const ze = new m(ye[0], ye[1], ye[2]);
      return ze.project(p), { x: k.left + (ze.x * 0.5 + 0.5) * k.width, y: k.top + (-ze.y * 0.5 + 0.5) * k.height };
    }, z = (ye) => ye.x >= s && ye.x <= l && ye.y >= d && ye.y <= u, Y = (ye, ze) => !(ye.x < s && ze.x < s || ye.x > l && ze.x > l || ye.y < d && ze.y < d || ye.y > u && ze.y > u);
    r || Ie.clear();
    let U = 0;
    const G = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let ye = 0; ye < G.length; ye++) {
      const ze = G[ye];
      ze && z(h(ze)) && (Ie.add(`pt:${ye}`), U++);
    }
    const L = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], oe = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let ye = 0; ye < L.length; ye++) {
      const ze = L[ye], ht = oe.includes(ye);
      let xt = false;
      for (let qe = 0; qe < ze.length - 1; qe++) {
        const Xe = G[ze[qe]], mt = G[ze[qe + 1]];
        if (!Xe || !mt) continue;
        const dt = h(Xe), gt = h(mt);
        if (z(dt) || z(gt) || Y(dt, gt)) {
          if (ht) {
            xt = true;
            break;
          }
          Ie.add(`seg:${ye}:${qe}`), U++;
        }
      }
      ht && xt && (Ie.add(`poly:${ye}`), U++);
    }
    const ke = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let ye = 0; ye < ke.length; ye++) {
      const ze = ke[ye];
      if (!ze || ze.length !== 6) continue;
      const ht = h([ze[0], ze[1], ze[2]]), xt = h([ze[3], ze[4], ze[5]]);
      (z(ht) || z(xt) || Y(ht, xt)) && (Ie.add(`aux:${ye}`), U++);
    }
    Rt(), ae(`${b ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${U} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${Ie.size})`), St.style.display = "none";
  }, an = () => {
    zt && (zt = null, St.style.display = "none", ae("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = an, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && zt && an();
  });
  const Mn = () => {
    var _a, _b, _c, _d;
    if (Ie.size === 0) return false;
    const n = [...Ie], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set();
    for (const Y of n) {
      const [U, ...G] = Y.split(":");
      if (U === "pt") l.add(+G[0]);
      else if (U === "poly") d.add(+G[0]);
      else if (U === "seg") {
        const L = +G[0], oe = +G[1];
        u.has(L) || u.set(L, /* @__PURE__ */ new Set()), u.get(L).add(oe);
      } else U === "aux" && b.add(+G[0]);
    }
    let k = 0, p = [], h = [];
    const z = /* @__PURE__ */ new Map();
    for (let Y = 0; Y < a.length; Y++) {
      if (d.has(Y)) {
        k++;
        continue;
      }
      z.set(Y, p.length);
      const U = u.get(Y);
      if (U && U.size > 0) {
        let G = [];
        for (let L = 0; L < a[Y].length; L++) G.push(a[Y][L]), L < a[Y].length - 1 && U.has(L) && (G.length >= 2 && p.push(G), G = [], k++);
        (G.length >= 2 || G.length === 1) && p.push(G);
      } else p.push([...a[Y]]);
    }
    if (l.size > 0) {
      const Y = [], U = /* @__PURE__ */ new Map();
      for (let L = 0; L < o.length; L++) {
        if (l.has(L)) {
          k++;
          continue;
        }
        U.set(L, Y.length), Y.push([...o[L]]);
      }
      const G = [];
      for (const L of p) {
        let oe = [];
        for (const pe of L) {
          const ke = U.get(pe);
          ke === void 0 ? (oe.length >= 2 && G.push(oe), oe = []) : oe.push(ke);
        }
        oe.length >= 2 && G.push(oe);
      }
      p = G, e.points.val = Y;
    }
    for (const Y of t) {
      const U = z.get(Y);
      U !== void 0 && U < p.length && h.push(U);
    }
    if (e.polylines && (e.polylines.val = p), e.areas && (e.areas.val = h), b.size > 0 && r) {
      const Y = s.filter((U, G) => !b.has(G));
      "val" in r ? r.val = Y : window.__hekatanDrawingAuxLines = Y, k += b.size;
    }
    Ie.clear(), Rt();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return ae(`\u{1F5D1} ${k} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = Mn, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || Ie.size !== 0 && (n.preventDefault(), Mn());
  });
  const Xt = document.createElement("div");
  Xt.id = "hk-properties-pane";
  const so = "hk-props-pane-pos";
  let fn = null;
  try {
    const n = localStorage.getItem(so);
    n && (fn = JSON.parse(n));
  } catch {
  }
  Xt.style.cssText = ["position:fixed", fn ? `left:${fn.left}px` : "left:50%", fn ? `top:${fn.top}px` : "top:8px", fn ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Xt);
  const Eo = () => {
    const n = Xt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, a = l.clientX, t = l.clientY;
      const d = Xt.getBoundingClientRect();
      r = d.left, s = d.top, Xt.style.transform = "none", Xt.style.left = `${r}px`, Xt.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const d = l.clientX - a, u = l.clientY - t, b = Math.max(0, Math.min(window.innerWidth - 80, r + d)), k = Math.max(0, Math.min(window.innerHeight - 40, s + u));
      Xt.style.left = `${b}px`, Xt.style.top = `${k}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(so, JSON.stringify({ left: parseFloat(Xt.style.left), top: parseFloat(Xt.style.top) }));
        } catch {
        }
      }
    });
  }, B = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let tt = null;
  const _t = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, Vo = () => {
    if (tt && (tt.dispose(), tt = null), Ie.size === 0) {
      Xt.style.display = "none";
      return;
    }
    const n = [...Ie], o = n.filter((p) => p.startsWith("pt:")), a = n.filter((p) => p.startsWith("seg:")), t = n.filter((p) => p.startsWith("poly:")), r = n.filter((p) => p.startsWith("aux:")), s = o.length > 0, l = a.length > 0, d = t.length > 0, u = !s && !l && !d, b = [];
    o.length && b.push(`\u{1F535} ${o.length} nodo(s)`), a.length && b.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && b.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && b.push(`\u250A ${r.length} aux`);
    const k = `\u{1F3AF} ${Ie.size} item(s) \u2014 ${b.join(", ")}`;
    if (tt = new ko({ container: Xt, title: k }), s) {
      const p = tt.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      p.addBinding(B, "Ux"), p.addBinding(B, "Uy"), p.addBinding(B, "Uz"), p.addBinding(B, "Rx"), p.addBinding(B, "Ry"), p.addBinding(B, "Rz");
      const h = tt.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      h.addBinding(B, "Kx", { label: "Kx", min: 0, step: 100 }), h.addBinding(B, "Ky", { label: "Ky", min: 0, step: 100 }), h.addBinding(B, "Kz", { label: "Kz", min: 0, step: 100 }), h.addBinding(B, "Krx", { label: "Krx", min: 0, step: 1e3 }), h.addBinding(B, "Kry", { label: "Kry", min: 0, step: 1e3 }), h.addBinding(B, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const z = tt.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      z.addBinding(B, "Fx", { step: 0.1 }), z.addBinding(B, "Fy", { step: 0.1 }), z.addBinding(B, "Fz", { step: 0.1 }), z.addBinding(B, "Mx", { step: 0.1 }), z.addBinding(B, "My", { step: 0.1 }), z.addBinding(B, "Mz", { step: 0.1 }), tt.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(B, "mass", { label: "m", min: 0, step: 1 }), tt.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(B, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), tt.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let G = 0;
        const L = [B.Ux, B.Uy, B.Uz, B.Rx, B.Ry, B.Rz];
        L.some((ke) => ke) && (_t("nodes", o, "supports", L), G++);
        const oe = [B.Fx, B.Fy, B.Fz, B.Mx, B.My, B.Mz];
        oe.some((ke) => ke !== 0) && (_t("nodes", o, "loads", oe), G++);
        const pe = [B.Kx, B.Ky, B.Kz, B.Krx, B.Kry, B.Krz];
        if (pe.some((ke) => ke !== 0) && (_t("nodes", o, "springs", pe), G++), B.mass !== 0 && (_t("nodes", o, "mass", B.mass), G++), B.diaphragm !== "Ninguno" && (_t("nodes", o, "diaphragm", B.diaphragm), G++), G === 0) {
          ae("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let ke = document.getElementById("hk-prop-toast");
          ke || (ke = document.createElement("div"), ke.id = "hk-prop-toast", ke.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(ke)), ke.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", ke.style.background = "rgba(217,119,6,0.97)", ke.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            ke && (ke.style.opacity = "0");
          }, 3200);
        } else ae(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const p = tt.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      p.addBinding(B, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), p.addBinding(B, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const h = tt.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      h.addBinding(B, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), h.addBinding(B, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), h.addBinding(B, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), h.addBinding(B, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), tt.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(B, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), tt.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(B, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const U = tt.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      U.addBinding(B, "relMxI", { label: "Mx I" }), U.addBinding(B, "relMyI", { label: "My I" }), U.addBinding(B, "relMzI", { label: "Mz I" });
      const G = tt.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      G.addBinding(B, "relMxJ", { label: "Mx J" }), G.addBinding(B, "relMyJ", { label: "My J" }), G.addBinding(B, "relMzJ", { label: "Mz J" }), tt.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(B, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const oe = tt.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      oe.addBinding(B, "LKx", { label: "LKx", min: 0, step: 100 }), oe.addBinding(B, "LKy", { label: "LKy", min: 0, step: 100 }), oe.addBinding(B, "LKz", { label: "LKz", min: 0, step: 100 });
      const pe = tt.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      pe.addBinding(B, "qx", { step: 0.1 }), pe.addBinding(B, "qy", { step: 0.1 }), pe.addBinding(B, "qz", { step: 0.1 }), tt.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(B, "massPerM", { label: "m/L", min: 0, step: 1 }), tt.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        _t("segs", a, "section", B.section), _t("segs", a, "material", B.material_frame);
        const ye = { A: B.A_mod, Iz: B.Iz_mod, Iy: B.Iy_mod, J: B.J_mod };
        (ye.A !== 1 || ye.Iz !== 1 || ye.Iy !== 1 || ye.J !== 1) && _t("segs", a, "modifiers", ye), B.insertionPoint !== "10 \u2014 Centroid" && _t("segs", a, "insertionPoint", B.insertionPoint), B.beta !== 0 && _t("segs", a, "beta", B.beta);
        const ze = [B.relMxI, B.relMyI, B.relMzI], ht = [B.relMxJ, B.relMyJ, B.relMzJ];
        (ze.some((Xe) => Xe) || ht.some((Xe) => Xe)) && _t("segs", a, "releases", { i: ze, j: ht }), B.hinges !== "None" && _t("segs", a, "hinges", B.hinges);
        const xt = [B.LKx, B.LKy, B.LKz];
        xt.some((Xe) => Xe !== 0) && _t("segs", a, "lineSprings", xt);
        const qe = [B.qx, B.qy, B.qz];
        qe.some((Xe) => Xe !== 0) && _t("segs", a, "distLoad", qe), B.massPerM !== 0 && _t("segs", a, "massPerM", B.massPerM), ae(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (d) {
      const p = tt.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      p.addBinding(B, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), p.addBinding(B, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), p.addBinding(B, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), tt.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(B, "surfLoad", { label: "q", step: 0.1 }), tt.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        _t("areas", t, "shellType", B.shellType), _t("areas", t, "thickness", B.thickness), _t("areas", t, "material", B.material_shell), B.surfLoad !== 0 && _t("areas", t, "surfLoad", B.surfLoad), ae(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (u) {
      const p = tt.addFolder({ title: "\u2139 Selecci\xF3n" }), h = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      p.addBinding(h, "msg", { readonly: true, label: "" });
    }
    tt.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      Ie.clear(), Rt();
    }), Xt.style.display = "block", Eo();
  };
  window.__hekatanRefreshPropsPane = Vo;
  let hn = null, Vn = false;
  x.addEventListener("pointerdown", (n) => {
    n.button === 2 && (hn = { x: n.clientX, y: n.clientY }, Vn = false);
  }), x.addEventListener("pointermove", (n) => {
    if (hn && n.buttons & 2 && !Vn) {
      const o = n.clientX - hn.x, a = n.clientY - hn.y;
      Math.hypot(o, a) > 8 && (Vn = true);
    }
  }), x.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = hn !== null && !Vn;
      hn = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (zt ? an() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), Ie.size > 0 && (Ie.clear(), Rt()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), ae(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : ae("\u238B Cancelado (click derecho)");
      }
    }
  }), x.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), x.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Bt = { x: n.clientX, y: n.clientY }, sn = false);
  }), x.addEventListener("pointermove", (n) => {
    if (zt && n.buttons === 0) {
      const s = n.clientX < zt.x;
      bn(zt.x, zt.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Bt) return;
    const o = n.clientX - Bt.x, a = n.clientY - Bt.y, t = Math.hypot(o, a);
    if (!sn && t < 8) return;
    sn = true;
    const r = n.clientX < Bt.x;
    bn(Bt.x, Bt.y, n.clientX, n.clientY, r);
  }), x.addEventListener("pointerup", (n) => {
    if (!Bt) return;
    if (!sn) {
      Bt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    En(Bt.x, Bt.y, n.clientX, n.clientY, o), Bt = null, sn = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const jt = new ot();
  jt.visible = false, jt.frustumCulled = false, y.add(jt);
  const To = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, ao = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; jt.children.length; ) {
      const d = jt.children.pop();
      (_b = (_a = d.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = d.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = To[n] ?? 16777215, s = 0.05, l = new he().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    jt.add(new nn(l, new wt({ color: r, linewidth: 2 }))), jt.position.set(0, 0, 0), jt.visible = true;
  }, Dn = () => {
    jt.visible = false;
  }, Lo = (n, o, a, t) => {
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
        const U = Y[0] - z[0], G = Y[1] - z[1], L = Y[2] - z[2], oe = U * U + G * G + L * L;
        if (oe < 1e-12) continue;
        const pe = Math.max(0, Math.min(1, ((n - z[0]) * U + (o - z[1]) * G + (a - z[2]) * L) / oe)), ke = z[0] + pe * U, ye = z[1] + pe * G, ze = z[2] + pe * L;
        r.nea && u("nea", ke, ye, ze), r.per && u("per", ke, ye, ze);
      }
    }
    const b = window.__hekatanDrawingAuxLines, k = (b == null ? void 0 : b.rawVal) ?? (b == null ? void 0 : b.val) ?? b ?? [];
    for (const p of k) {
      if (p.length !== 6) continue;
      const h = [p[0], p[1], p[2]], z = [p[3], p[4], p[5]];
      if (r.end && (u("end", h[0], h[1], h[2]), u("end", z[0], z[1], z[2])), r.mid && u("mid", (h[0] + z[0]) / 2, (h[1] + z[1]) / 2, (h[2] + z[2]) / 2), r.nea || r.per) {
        const Y = z[0] - h[0], U = z[1] - h[1], G = z[2] - h[2], L = Y * Y + U * U + G * G;
        if (L < 1e-12) continue;
        const oe = Math.max(0, Math.min(1, ((n - h[0]) * Y + (o - h[1]) * U + (a - h[2]) * G) / L)), pe = h[0] + oe * Y, ke = h[1] + oe * U, ye = h[2] + oe * G;
        r.nea && u("nea", pe, ke, ye), r.per && u("per", pe, ke, ye);
      }
    }
    return d ? { type: d.type, x: d.x, y: d.y, z: d.z } : null;
  };
  window.__hekatanOsnapCompute = Lo, window.__hekatanOsnapShow = ao, window.__hekatanOsnapHide = Dn;
  let Ve = [], Ft = 0;
  const _n = document.createElement("div");
  _n.id = "hk-cad-status", _n.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", _n.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(_n);
  const Io = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), Je && n.push(`\u{1F512} LOCK ${Je.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, ae = (n) => {
    const o = n + Io();
    _n.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    ae(o);
  }, window.__hekatanCadResetPending = () => {
    Ve = [], J = [], Z.visible = false, w(), ae("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const Sn = [], ln = () => {
    var _a, _b;
    Sn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), Sn.length > 100 && Sn.shift();
  }, io = () => {
    var _a;
    const n = Sn.pop();
    if (!n) {
      ae("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ve = [], A.visible = false, fe.visible = false, F(), ae(`\u21B6 Undo \u2014 ${Sn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    w();
  };
  window.__hekatanPushUndo = ln, window.__hekatanUndo = io, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), io();
    }
  }, { capture: true });
  const lo = () => {
    if (Ve = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    Je = null, de(), A.visible = false, fe.visible = false, F(), ae("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), w();
  };
  window.__hekatanFinalizeDraw = lo, x.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
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
        ae("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
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
          let k = Je;
          if (!k && b) {
            const p = Math.abs(t.x - u[0]), h = Math.abs(t.y - u[1]), z = Math.abs(t.z - u[2]);
            k = p >= h && p >= z ? "x" : h >= z ? "y" : "z";
          }
          k === "x" ? t = new m(t.x, u[1], u[2]) : k === "y" ? t = new m(u[0], t.y, u[2]) : k === "z" && (t = new m(u[0], u[1], t.z));
        }
      }
    }
    if (qt) t = qt.clone(), ae(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new m(l.x, l.y, l.z), ae(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const d = window.__hekatanSnapEnabled !== false, u = window.__hekatanSnap2D ?? 0;
        d && u > 0 && (t = new m(Math.round(t.x / u) * u, Math.round(t.y / u) * u, Math.round(t.z / u) * u));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (Nt) {
        zt && an();
        const { kind: s, a: l, b: d } = Nt, u = d !== void 0 ? `${s}:${l}:${d}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || Ie.clear(), Ie.has(u) ? Ie.delete(u) : Ie.add(u), Rt(), ae(`\u2713 Seleccionados ${Ie.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, d = n.clientY;
        zt ? (En(zt.x, zt.y, l, d, s), zt = null) : s || (zt = { x: l, y: d }, ae("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), bn(l, d, l + 1, d + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], ae(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", d = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      ae(`\u2713 Eje "${d}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (Ce >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], d = Ce;
        if (d >= 0 && d < l.length) {
          ln();
          const u = l.slice(0, d).concat(l.slice(d + 1));
          s && typeof s == "object" && "val" in s ? s.val = u : window.__hekatanDrawingAuxLines = u, ae(`\u{1F5D1} L\xEDnea auxiliar #${d + 1} borrada`), Ce = -1, Le.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (Se >= 0) {
        const s = Se, l = Be;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (we(s), ae(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (it(s, l), ae(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (we(s), ae(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else ae("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ve.push([t.x, t.y, t.z]), Ve.length === 1) {
        ae("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ve, d = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const u = Math.abs(l[1] - s[1]), k = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : u < 1e-3 ? "xz" : "yz", p = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], d, p, k), ae(`\u2713 C\xEDrculo dibujado en ${k.toUpperCase()} \u2014 r=${d.toFixed(2)}m, ${p} segmentos`), Ve = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Ve.push([t.x, t.y, t.z]), Ve.length === 1) {
        ae("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ve.length === 2) {
        ae("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, d] = Ve, u = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, d, u), ae(`\u2713 Arco dibujado \u2014 ${u} segmentos`), Ve = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Ve.push([t.x, t.y, t.z]), Ve.length === 1) {
        ae("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ve;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), ae(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ve = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Ve.push([t.x, t.y, t.z]), Ve.length === 1) {
        ae("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ve;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), ae(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ve = [];
      return;
    }
    if (r === "polyarea") {
      J.push([t.x, t.y, t.z]), Z.geometry.setFromPoints(J.map((s) => new m(s[0], s[1], s[2]))), Z.visible = J.length >= 1, ae(`\u25B0 \xC1rea libre \u2014 ${J.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), w();
      return;
    }
    if (r === "plane3") {
      if (Ve.push([t.x, t.y, t.z]), Ve.length < 3) {
        ae(`\u25E3 Plano inclinado \u2014 punto ${Ve.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, d] = Ve, u = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, d);
      ae(u ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ve = [];
      return;
    }
    if (r === "col") {
      ln();
      const s = t.z, l = Ft && Ft > 0 ? Ft : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const d = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [u - 2, u - 1], []], Ft = 0, ae(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Ve.push([t.x, t.y, t.z]), Ve.length === 1) {
        ae("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Ve, d = Ft && Ft > 0 ? Ft : 3;
      ln();
      const u = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + d], [s[0], s[1], s[2] + d]];
      const b = e.polylines.rawVal;
      if (b.length - 1, e.polylines.val = [...b.slice(0, -1), ...b[b.length - 1].length > 0 ? [b[b.length - 1]] : [], [u, u + 1, u + 2, u + 3, u], []], e.areas) {
        const k = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, k];
      }
      ae(`\u25A5 Pared Q4 creada \u2014 h=${d.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ve = [], Ft = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      ln();
      const s = Ft && Ft > 0 ? Ft : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const d = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [u - 2, u - 1], []], Ft = 0, ae(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = De(t.x, t.y, t.z, s);
      if (!l) {
        ae("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const d = e.polylines.rawVal, u = e.points.rawVal, b = d[l.polyIdx], k = u[b[l.segIdx]], p = u[b[l.segIdx + 1]];
      if (!k || !p) {
        ae("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const h = Ft && Ft > 0 ? Ft : 3;
      ln();
      const z = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [k[0], k[1], k[2]], [p[0], p[1], p[2]], [p[0], p[1], p[2] + h], [k[0], k[1], k[2] + h]];
      const Y = e.polylines.rawVal;
      if (e.polylines.val = [...Y.slice(0, -1), ...Y[Y.length - 1].length > 0 ? [Y[Y.length - 1]] : [], [z, z + 1, z + 2, z + 3, z], []], e.areas) {
        const U = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, U];
      }
      Ft = 0, ae(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${h.toFixed(2)}m`);
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
      ae(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Ve.push([t.x, t.y, t.z]), Ve.length === 1) {
        ae("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Ve, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const h = d.rawVal ?? d.val ?? [];
        d.val = [...h, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const u = l[0] - s[0], b = l[1] - s[1], k = l[2] - s[2], p = Math.sqrt(u * u + b * b + k * k);
      ae(`\u2713 L\xEDnea auxiliar creada \u2014 L=${p.toFixed(2)}m (cyan, no FEM)`), Ve = [];
      return;
    }
    if (r === "extend") {
      if (Ve.push([t.x, t.y, t.z]), Ve.length === 1) {
        ae("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ve, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const u = d.rawVal ?? d.val ?? [];
        d.val = [...u, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      ae("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ve = [];
      return;
    }
    if (r === "chaflan") {
      if (Ve.push([t.x, t.y, t.z]), Ve.length === 1) {
        ae("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ve, d = window.__hekatanChaflanR ?? 1, u = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, d, u, 6);
      const b = Math.abs(l[0] - s[0]).toFixed(1), k = Math.abs(l[1] - s[1]).toFixed(1);
      ae(`\u2713 Losa con chaflanes dibujada \u2014 ${b}\xD7${k}m, r=${d}m, ${u} seg/chafl\xE1n`), Ve = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (X = false, ln(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, d = s[l] ?? [];
      if (r === "line" && d.length === 2) {
        e.polylines.val = [...s, []], ae("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && d.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...d, d[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), ae("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") ae(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") ae("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") ae("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      ae(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), x.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && J.length >= 3) {
      n.preventDefault();
      const a = lt();
      ae(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
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
            const k = !!window.__hekatanOrthoMode;
            let p = Je;
            if (!p && k) {
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
  let Nn = false, Zn;
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
    if (a && Ot < 5 && (Nn = true, c.enabled = false, Zn = t[0].index), !Nn || Ot % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Zn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new m(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Zn] = l.toArray();
    }
    e.points.val = s;
  }), x.addEventListener("pointerup", () => {
    c.enabled = true, Nn = false;
  }), x.addEventListener("contextmenu", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(H), r = _();
    if (t.length && r.length) {
      const d = new m(...e.points.rawVal[t[0].index]), u = new m(...r[0].point), b = d.sub(u), k = (_a = r[0].face) == null ? void 0 : _a.normal;
      k.transformDirection(W.matrixWorld), Math.abs(b.dot(k)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((d) => d.filter((u) => u !== t[0].index)).map((d) => d.map((u) => u > t[0].index ? u - 1 : u)).filter((d) => d.length);
    l.push([]), e.polylines.val = l;
  });
}
function xs(e, i, y) {
  const S = Math.round(14.999999999999998), g = { position: e.position.clone(), quaternion: e.quaternion.clone() }, x = setInterval(M, 1e3 / 30);
  let w = 0;
  function M() {
    w++;
    const P = w / S;
    e.position.lerpVectors(g.position, i.position, P), e.quaternion.slerpQuaternions(g.quaternion, i.quaternion, P), y && y(), w == S && clearInterval(x);
  }
}
class Ao {
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
    this.map = Qn[i] || Qn.rainbow, this.n = y;
    const f = 1 / this.n, c = new Gt(), S = new Gt();
    this.lut.length = 0, this.lut.push(new Gt(this.map[0][1]));
    for (let g = 1; g < y; g++) {
      const x = g * f;
      for (let w = 0; w < this.map.length - 1; w++) if (x > this.map[w][0] && x <= this.map[w + 1][0]) {
        const M = this.map[w][0], P = this.map[w + 1][0];
        c.setHex(this.map[w][1], Tn), S.setHex(this.map[w + 1][1], Tn);
        const v = new Gt().lerpColors(c, S, (x - M) / (P - M));
        this.lut.push(v);
      }
    }
    return this.lut.push(new Gt(this.map[this.map.length - 1][1])), this;
  }
  copy(i) {
    return this.lut = i.lut, this.map = i.map, this.n = i.n, this.minV = i.minV, this.maxV = i.maxV, this;
  }
  getColor(i) {
    i = Zo.clamp(i, this.minV, this.maxV), i = (i - this.minV) / (this.maxV - this.minV);
    const y = Math.round(i * this.n);
    return this.lut[y];
  }
  addColorMap(i, y) {
    return Qn[i] = y, this;
  }
  createCanvas() {
    const i = document.createElement("canvas");
    return i.width = 1, i.height = this.n, this.updateCanvas(i), i;
  }
  updateCanvas(i) {
    const y = i.getContext("2d", { alpha: false }), f = y.getImageData(0, 0, 1, this.n), c = f.data;
    let S = 0;
    const g = 1 / this.n, x = new Gt(), w = new Gt(), M = new Gt();
    for (let P = 1; P >= 0; P -= g) for (let v = this.map.length - 1; v >= 0; v--) if (P < this.map[v][0] && P >= this.map[v - 1][0]) {
      const W = this.map[v - 1][0], te = this.map[v][0];
      x.setHex(this.map[v - 1][1], Tn), w.setHex(this.map[v][1], Tn), M.lerpColors(x, w, (P - W) / (te - W)), c[S * 4] = Math.round(M.r * 255), c[S * 4 + 1] = Math.round(M.g * 255), c[S * 4 + 2] = Math.round(M.b * 255), c[S * 4 + 3] = 255, S += 1;
    }
    return y.putImageData(f, 0, 0), i;
  }
}
const Qn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, zn = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function gs(e) {
  e = Math.max(0, Math.min(1, e));
  for (let y = 0; y < zn.length - 1; y++) {
    const [f, c, S, g] = zn[y], [x, w, M, P] = zn[y + 1];
    if (e <= x) {
      const v = (e - f) / (x - f);
      return [c + (w - c) * v, S + (M - S) * v, g + (P - g) * v];
    }
  }
  const i = zn[zn.length - 1];
  return [i[1], i[2], i[3]];
}
function vs() {
  const i = new Uint8Array(1024);
  for (let f = 0; f < 256; f++) {
    const c = f / 255, [S, g, x] = gs(c);
    i[f * 4 + 0] = S, i[f * 4 + 1] = g, i[f * 4 + 2] = x, i[f * 4 + 3] = 255;
  }
  const y = new Ho(i, 256, 1, Wo);
  return y.minFilter = mo, y.magFilter = mo, y.wrapS = wo, y.wrapT = wo, y.needsUpdate = true, y;
}
function bs(e, i, y) {
  new Ao();
  const f = vs(), c = new Uo({ uniforms: { cmap: { value: f }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Yt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), S = new je(new he(), c);
  return S.renderOrder = -1, S.frustumCulled = false, S.userData.isShellArea = true, S.name = "__hekatan_shell_colormap", I.derive(() => {
    S.geometry.setAttribute("position", new It(e.val.flat(), 3));
    const g = [];
    for (const _ of i.val) _.length === 3 ? g.push(_[0], _[1], _[2]) : _.length === 4 && (g.push(_[0], _[1], _[2]), g.push(_[0], _[2], _[3]));
    S.geometry.setIndex(new Ko(g, 1));
    const x = y.val.filter((_) => Number.isFinite(_));
    let w, M;
    const P = oo.val;
    if (P ? (M = P[0], w = P[1]) : (w = x.length ? Math.max(...x) : 1, M = x.length ? Math.min(...x) : 0, M >= 0 && w > 0 && (M = 0)), w === M) {
      const _ = Math.max(Math.abs(w) * 1e-6, 1e-9);
      w += _, M -= _;
    }
    const v = P && P[0] > P[1], W = Math.min(M, w), te = Math.max(M, w), ue = te - W, le = new Float32Array(y.val.length);
    for (let _ = 0; _ < y.val.length; _++) {
      const H = y.val[_];
      if (!Number.isFinite(H)) {
        le[_] = -1;
        continue;
      }
      const ne = ((v ? te + W - H : H) - W) / ue;
      le[_] = Math.max(0, Math.min(1, ne));
    }
    S.geometry.setAttribute("scalar", new pt(le, 1));
  }), S;
}
function Ms(e, i, y, f) {
  const c = bs(y, e.elements, f);
  return I.derive(() => {
    c.visible = i.shellResults.val != "none";
  }), c;
}
const _s = 6, On = 10, Ss = 0.012;
function ks(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Ps(e, i, y, f) {
  if (!y && !f) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const S = y[e];
    if (S && S.has(i)) return S.get(i);
  }
  return null;
}
function Cs(e, i, y, f) {
  const c = new ot(), S = new Ao();
  S.setColorMap("rainbow");
  const g = new Gt(), x = I.state([]);
  return I.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const w = y.val, M = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = ks(i.frameResults.val);
    if (c.children.forEach((C) => {
      C.geometry && C.geometry.dispose(), C.material && C.material.dispose();
    }), c.clear(), !P || M.length === 0 || w.length === 0) {
      x.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, W = (_c = e.deformOutputs) == null ? void 0 : _c.val, te = [], ue = [];
    for (let C = 0; C < M.length; C++) {
      if (M[C].length !== 2) continue;
      const j = Ps(P, C, v, W);
      j && (te.push(j[0], j[1]), ue.push({ idx: C, vals: j }));
    }
    if (te.length === 0) {
      x.val = [];
      return;
    }
    const le = Math.min(...te), _ = Math.max(...te);
    S.setMin(le), S.setMax(_), x.val = te;
    const H = [1 / 0, 1 / 0, 1 / 0], me = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of w) for (let N = 0; N < 3; N++) H[N] = Math.min(H[N], C[N]), me[N] = Math.max(me[N], C[N]);
    const K = Math.max(me[0] - H[0], me[1] - H[1], me[2] - H[2], 1) * Ss, re = [], q = [], X = [];
    let $ = 0;
    for (const { idx: C, vals: N } of ue) {
      const j = M[C], D = w[j[0]], xe = w[j[1]];
      if (!D || !xe) continue;
      const A = new m(xe[0] - D[0], xe[1] - D[1], xe[2] - D[2]), Z = A.length();
      if (Z < 1e-10) continue;
      A.normalize();
      const J = Math.abs(A.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), ie = new m().crossVectors(A, J).normalize(), Q = new m().crossVectors(A, ie).normalize(), Pe = On + 1, fe = _s;
      for (let be = 0; be < Pe; be++) {
        const Fe = be / On, Ne = D[0] + A.x * Z * Fe, Mt = D[1] + A.y * Z * Fe, Ct = D[2] + A.z * Z * Fe, ut = N[0] + (N[1] - N[0]) * Fe, T = S.getColor(ut) ?? new Gt(0, 0, 0);
        g.copy(T).convertSRGBToLinear();
        for (let O = 0; O < fe; O++) {
          const ee = O / fe * Math.PI * 2, ce = Math.cos(ee), Me = Math.sin(ee);
          re.push(Ne + (ie.x * ce + Q.x * Me) * K, Mt + (ie.y * ce + Q.y * Me) * K, Ct + (ie.z * ce + Q.z * Me) * K), q.push(g.r, g.g, g.b);
        }
      }
      for (let be = 0; be < On; be++) for (let Fe = 0; Fe < fe; Fe++) {
        const Ne = (Fe + 1) % fe, Mt = $ + be * fe + Fe, Ct = $ + be * fe + Ne, ut = $ + (be + 1) * fe + Fe, T = $ + (be + 1) * fe + Ne;
        X.push(Mt, Ct, T), X.push(Mt, T, ut);
      }
      $ += Pe * fe;
    }
    if (re.length === 0) return;
    const E = new he();
    E.setAttribute("position", new It(re, 3)), E.setAttribute("color", new It(q, 3)), E.setIndex(X), E.computeVertexNormals();
    const F = new st({ vertexColors: true, side: Yt }), V = new je(E, F);
    V.frustumCulled = false, c.add(V);
  }), c.__colorMapValues = x, c;
}
function zs() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Fs = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, As = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Es = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function vt(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Vs = 16755200, Mo = 56831, Ts = 56831, Ls = 56831, $n = 65382;
function Is(e) {
  const i = new ot();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const y = new xn(1, 16, 16), f = new st({ color: Vs, transparent: true, opacity: 0.85, depthTest: false }), c = new je(y, f);
  c.visible = false, c.renderOrder = 100, i.add(c);
  const S = new he(), g = new wt({ color: Mo, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), x = new nn(S, g);
  x.visible = false, x.renderOrder = 100, i.add(x);
  const w = new st({ color: Mo, transparent: true, opacity: 0.7, depthTest: false }), M = new je(new yo(1, 1, 1, 12), w);
  M.visible = false, M.renderOrder = 100, i.add(M);
  const P = new he(), v = new st({ color: Ts, transparent: true, opacity: 0.45, side: Yt, depthTest: false }), W = new je(P, v);
  W.visible = false, W.renderOrder = 100, i.add(W);
  const te = new he(), ue = new wt({ color: Ls, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), le = new nn(te, ue);
  le.visible = false, le.renderOrder = 100, i.add(le);
  const _ = new st({ color: $n, transparent: true, opacity: 0.95, depthTest: false }), H = new je(y, _);
  H.visible = false, H.renderOrder = 101, i.add(H);
  const me = new st({ color: $n, transparent: true, opacity: 0.85, depthTest: false }), ne = new je(new yo(1, 1, 1, 12), me);
  ne.visible = false, ne.renderOrder = 101, i.add(ne);
  const K = new he(), re = new st({ color: $n, transparent: true, opacity: 0.55, side: Yt, depthTest: false }), q = new je(K, re);
  q.visible = false, q.renderOrder = 101, i.add(q);
  const X = new he(), $ = new wt({ color: $n, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), E = new nn(X, $);
  E.visible = false, E.renderOrder = 101, i.add(E);
  let F = null;
  const V = document.createElement("div");
  Object.assign(V.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), V.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(V);
  }, 0);
  function C(R) {
    const de = e.derivedNodes.rawVal;
    return !de || R < 0 || R >= de.length ? null : new m(de[R][0], de[R][1], de[R][2]);
  }
  function N(R, de) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2;
    const _e = e.getActiveCamera();
    if (!_e || !e.mesh) return null;
    const se = e.rendererElm.getBoundingClientRect(), Ke = R - se.left, Ge = de - se.top, Le = e.derivedNodes.rawVal, Se = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Le || !Se) return null;
    const Be = /* @__PURE__ */ new Map(), Ce = (De) => {
      if (Be.has(De)) return Be.get(De);
      const Ae = C(De);
      if (!Ae) return Be.set(De, null), null;
      const ve = Ae.clone().project(_e), Ue = (ve.x * 0.5 + 0.5) * se.width, we = (-ve.y * 0.5 + 0.5) * se.height, it = { x: Ue, y: we, z: ve.z };
      return Be.set(De, it), it;
    }, Ie = /* @__PURE__ */ new Set();
    for (const De of Se) if (De) for (const Ae of De) Ie.add(Ae);
    const et = 8;
    let $e = -1, ft = et;
    for (let De = 0; De < Le.length; De++) {
      if (!Ie.has(De)) continue;
      const Ae = Ce(De);
      if (!Ae || Ae.z < -1 || Ae.z > 1) continue;
      const ve = Ae.x - Ke, Ue = Ae.y - Ge, we = Math.sqrt(ve * ve + Ue * Ue);
      we < ft && (ft = we, $e = De);
    }
    const Te = zs(), Qe = As[Te.dispUnit] ?? 1e3, at = Fs[Te.forceUnit] ?? 1;
    if ($e >= 0) {
      const De = Le[$e];
      let Ae = `Nodo ${$e}
(${De[0].toFixed(3)}, ${De[1].toFixed(3)}, ${De[2].toFixed(3)})`;
      const ve = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (ve == null ? void 0 : ve.deformations) {
        const Ue = ve.deformations.get($e);
        if (Ue && (Ae += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Ae += `
Ux = ${vt(Ue[0] * Qe, 3)} ${Te.dispUnit}`, Ae += `
Uy = ${vt(Ue[1] * Qe, 3)} ${Te.dispUnit}`, Ae += `
Uz = ${vt(Ue[2] * Qe, 3)} ${Te.dispUnit}`, (Math.abs(Ue[3]) > 1e-9 || Math.abs(Ue[4]) > 1e-9 || Math.abs(Ue[5]) > 1e-9) && (Ae += `
Rx = ${vt(Ue[3] * 1e3, 3)} mrad`, Ae += `
Ry = ${vt(Ue[4] * 1e3, 3)} mrad`, Ae += `
Rz = ${vt(Ue[5] * 1e3, 3)} mrad`)), ve.reactions) {
          const we = ve.reactions.get($e);
          we && (Math.abs(we[0]) > 1e-9 || Math.abs(we[1]) > 1e-9 || Math.abs(we[2]) > 1e-9 || Math.abs(we[3]) > 1e-6 || Math.abs(we[4]) > 1e-6 || Math.abs(we[5]) > 1e-6) && (Ae += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Ae += `
Fx = ${vt(we[0] * at)} ${Te.forceUnit}`, Ae += `
Fy = ${vt(we[1] * at)} ${Te.forceUnit}`, Ae += `
Fz = ${vt(we[2] * at)} ${Te.forceUnit}`, (Math.abs(we[3]) > 1e-6 || Math.abs(we[4]) > 1e-6 || Math.abs(we[5]) > 1e-6) && (Ae += `
Mx = ${vt(we[3] * at)} ${Te.forceUnit}\xB7m`, Ae += `
My = ${vt(we[4] * at)} ${Te.forceUnit}\xB7m`, Ae += `
Mz = ${vt(we[5] * at)} ${Te.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: $e, info: Ae };
    }
    const Nt = 5;
    let rt = -1, Rt = Nt, Ht = "frame";
    for (let De = 0; De < Se.length; De++) {
      const Ae = Se[De];
      if (!(!Ae || Ae.length < 2)) {
        if (Ae.length === 2) {
          const ve = Ce(Ae[0]), Ue = Ce(Ae[1]);
          if (!ve || !Ue || ve.z < -1 || ve.z > 1 || Ue.z < -1 || Ue.z > 1) continue;
          const we = $s(Ke, Ge, ve.x, ve.y, Ue.x, Ue.y);
          we < Rt && (Rt = we, rt = De, Ht = "frame");
        } else if (Ae.length === 3 || Ae.length === 4) {
          const ve = [];
          let Ue = true;
          for (const we of Ae) {
            const it = Ce(we);
            if (!it || it.z < -1 || it.z > 1) {
              Ue = false;
              break;
            }
            ve.push(it);
          }
          if (!Ue) continue;
          if (Rs(Ke, Ge, ve)) {
            const it = ve.reduce((lt, ct) => lt + ct.z, 0) / ve.length * 1e-3;
            it < Rt && (Rt = it, rt = De, Ht = "shell");
          }
        } else if (Ae.length === 8) {
          const ve = [];
          let Ue = true;
          for (const Ee of Ae) {
            const Ze = Ce(Ee);
            if (!Ze || Ze.z < -1 || Ze.z > 1) {
              Ue = false;
              break;
            }
            ve.push(Ze);
          }
          if (!Ue) continue;
          const we = Math.min(...ve.map((Ee) => Ee.x)), it = Math.max(...ve.map((Ee) => Ee.x)), lt = Math.min(...ve.map((Ee) => Ee.y)), ct = Math.max(...ve.map((Ee) => Ee.y));
          if (Ke >= we && Ke <= it && Ge >= lt && Ge <= ct) {
            const Ze = ve.reduce((bt, Tt) => bt + Tt.z, 0) / ve.length * 1e-3;
            Ze < Rt && (Rt = Ze, rt = De, Ht = "solid");
          }
        }
      }
    }
    if (rt >= 0) {
      const De = Se[rt];
      let ve = `${Ht === "frame" ? "Frame" : Ht === "shell" ? "Shell" : "Solid"} ${rt}`;
      const Ue = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, we = (_g = (_f = Ue == null ? void 0 : Ue.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, rt);
      if (we) {
        we.name && (ve += `
  \u{1F4CB} ${we.name}`), we.shape && (ve += `
  Shape: ${we.shape}`);
        const it = /concrete|hormig|rect.*sólida/i.test(we.shape || ""), lt = it ? 100 : 1e3, ct = it ? "cm" : "mm", Ee = (bt) => {
          const Tt = bt * lt;
          return Math.abs(Tt - Math.round(Tt)) < 0.05 ? `${Math.round(Tt)}` : `${Tt.toFixed(1)}`;
        }, Ze = [];
        if (we.D != null && Ze.push(`D=${Ee(we.D)}`), we.B != null && Ze.push(`B=${Ee(we.B)}`), we.TF != null && Ze.push(`TF=${Ee(we.TF)}`), we.TW != null && Ze.push(`TW=${Ee(we.TW)}`), we.t != null && Ze.push(`t=${Ee(we.t)}`), Ze.length && (ve += `
  Dim: ${Ze.join(" ")} ${ct}`), we.material) {
          let bt = we.material;
          we.fillMaterial && (bt += ` + FILL "${we.fillMaterial}"`), ve += `
  Mat: ${bt}`;
        }
      } else {
        const it = (_i = (_h = Ue == null ? void 0 : Ue.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, rt), lt = (_k = (_j = Ue == null ? void 0 : Ue.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, rt);
        it ? (ve += `
  ${it}`, lt && !it.includes(lt) && (ve += `  (${lt})`)) : lt && (ve += `
  Material: ${lt}`);
      }
      if (ve += `
nodos: [${De.join(", ")}]`, Ht === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const it = e.mesh.analyzeOutputs.rawVal, lt = Es[Te.stressUnit] ?? 1, ct = [["bendingXX", "Mxx", at, `${Te.forceUnit}\xB7m/m`], ["bendingYY", "Myy", at, `${Te.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", at, `${Te.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", at, `${Te.forceUnit}/m`], ["membraneYY", "Nyy", at, `${Te.forceUnit}/m`], ["membraneXY", "Nxy", at, `${Te.forceUnit}/m`], ["shearX", "Qx", at, `${Te.forceUnit}/m`], ["shearY", "Qy", at, `${Te.forceUnit}/m`], ["vonMises", "\u03C3VM", lt, Te.stressUnit], ["pressure", "p", lt, Te.stressUnit]], Ee = [];
        for (const [Ze, bt, Tt, Zt] of ct) {
          const Jt = it == null ? void 0 : it[Ze];
          if (Jt && Jt instanceof Map) {
            const Oe = Jt.get(rt);
            if (Oe != null) {
              if (typeof Oe == "number") Ee.push(`${bt} = ${vt(Oe * Tt, 3)} ${Zt}`);
              else if (Array.isArray(Oe)) {
                let Lt = Oe[0];
                for (const on of Oe) Math.abs(on) > Math.abs(Lt) && (Lt = on);
                Ee.push(`${bt} = ${vt(Lt * Tt, 3)} ${Zt}`);
              }
            }
          }
        }
        Ee.length > 0 && (ve += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Ee.slice(0, 8).join(`
`));
      }
      if (Ht === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const it = e.mesh.deformOutputs.rawVal, lt = e.mesh.elementInputs.rawVal, ct = it == null ? void 0 : it.deformations;
        if (ct && De.length === 2) {
          const Ee = ct.get(De[0]), Ze = ct.get(De[1]), bt = Le[De[0]], Tt = Le[De[1]];
          if (Ee && Ze && bt && Tt) {
            const Zt = Tt[0] - bt[0], Jt = Tt[1] - bt[1], Oe = Tt[2] - bt[2], Lt = Math.sqrt(Zt * Zt + Jt * Jt + Oe * Oe);
            if (Lt > 1e-9) {
              const on = Zt / Lt, Qt = Jt / Lt, dn = Oe / Lt, pn = (Ze[0] - Ee[0]) * on + (Ze[1] - Ee[1]) * Qt + (Ze[2] - Ee[2]) * dn, un = ((_n = lt.elasticities) == null ? void 0 : _n.get(rt)) ?? 0, gn = ((_o2 = lt.areas) == null ? void 0 : _o2.get(rt)) ?? 0, An = ((_p = lt.momentsOfInertiaY) == null ? void 0 : _p.get(rt)) ?? 0, vn = ((_q = lt.momentsOfInertiaZ) == null ? void 0 : _q.get(rt)) ?? 0, Ot = ((_r = lt.torsionalConstants) == null ? void 0 : _r.get(rt)) ?? 0, St = ((_s2 = lt.shearModuli) == null ? void 0 : _s2.get(rt)) ?? un / 2.6, Bt = un * gn * (pn / Lt), sn = (Ze[3] - Ee[3]) * on + (Ze[4] - Ee[4]) * Qt + (Ze[5] - Ee[5]) * dn, zt = St * Ot * (sn / Lt), bn = Ze[4] - Ee[4], En = Ze[5] - Ee[5], an = un * An * bn / Lt, Mn = un * vn * En / Lt;
              ve += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, ve += `
L = ${vt(Lt, 3)} m`, ve += `
\u0394L = ${vt(pn * Qe, 3)} ${Te.dispUnit}`, ve += `
\u03B5 = ${vt(pn / Lt, 6)}`, Math.abs(Bt) > 1e-6 && (ve += `
N \u2248 ${vt(Bt * at)} ${Te.forceUnit}`), Math.abs(zt) > 1e-6 && (ve += `
T \u2248 ${vt(zt * at)} ${Te.forceUnit}\xB7m`), Math.abs(an) > 1e-6 && (ve += `
My \u2248 ${vt(an * at)} ${Te.forceUnit}\xB7m`), Math.abs(Mn) > 1e-6 && (ve += `
Mz \u2248 ${vt(Mn * at)} ${Te.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: Ht, idx: rt, info: ve };
    }
    return null;
  }
  function j(R, de, _e) {
    var _a, _b, _c;
    if (c.visible = false, x.visible = false, M.visible = false, W.visible = false, le.visible = false, !R || !e.mesh) {
      V.style.display = "none", e.render();
      return;
    }
    const se = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (R.type === "node") {
      const Se = C(R.idx);
      if (Se) {
        const Be = e.derivedNodes.rawVal ?? [];
        let Ce = 1;
        if (Be.length >= 2) {
          let $e = [1 / 0, 1 / 0, 1 / 0], ft = [-1 / 0, -1 / 0, -1 / 0];
          for (const Te of Be) for (let Qe = 0; Qe < 3; Qe++) Te[Qe] < $e[Qe] && ($e[Qe] = Te[Qe]), Te[Qe] > ft[Qe] && (ft[Qe] = Te[Qe]);
          Ce = Math.max(ft[0] - $e[0], ft[1] - $e[1], ft[2] - $e[2], 0.1);
        }
        const Ie = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, et = 0.015 * Ce * Ie;
        c.position.copy(Se), c.scale.setScalar(et), c.visible = true;
      }
    } else if (R.type === "frame" && se) {
      const Se = se[R.idx], Be = C(Se[0]), Ce = C(Se[1]);
      if (Be && Ce) {
        const Ie = Be.clone().add(Ce).multiplyScalar(0.5), et = Ce.clone().sub(Be), $e = et.length(), ft = e.getActiveCamera();
        let Te;
        if (ft.isOrthographicCamera) {
          const rt = ft;
          Te = (rt.top - rt.bottom) / rt.zoom * 35e-4;
        } else Te = ft.position.distanceTo(Ie) * 35e-4;
        M.position.copy(Ie);
        const Qe = new m(0, 1, 0), at = Qe.clone().cross(et).normalize(), Nt = Qe.angleTo(et);
        M.quaternion.setFromAxisAngle(at, Nt), M.scale.set(Te, $e, Te), M.visible = true;
      }
    } else if (R.type === "shell" && se) {
      const Se = se[R.idx], Be = [], Ce = [];
      for (const Ie of Se) {
        const et = C(Ie);
        if (!et) return;
        Be.push(et.x, et.y, et.z);
      }
      Se.length === 4 ? Ce.push(0, 1, 2, 0, 2, 3) : Se.length === 3 && Ce.push(0, 1, 2), P.setAttribute("position", new It(Be, 3)), P.setIndex(Ce), P.computeVertexNormals(), W.visible = true;
    } else if (R.type === "solid" && se) {
      const Se = se[R.idx], Be = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Ce = [];
      for (const [Ie, et] of Be) {
        const $e = C(Se[Ie]), ft = C(Se[et]);
        $e && ft && Ce.push($e.x, $e.y, $e.z, ft.x, ft.y, ft.z);
      }
      te.setAttribute("position", new It(Ce, 3)), le.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      V.style.display = "none", e.render();
      return;
    }
    V.textContent = R.info, V.style.whiteSpace = "pre-line", V.style.display = "block";
    const Ge = e.rendererElm.getBoundingClientRect(), Le = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ge;
    V.style.left = `${de - Le.left}px`, V.style.top = `${_e - Le.top}px`, e.render();
  }
  let D = "", xe = 0, A = 0;
  const Z = window.__hekatanHoverDebug ?? false, J = (R) => {
    xe && cancelAnimationFrame(xe), xe = requestAnimationFrame(() => {
      var _a, _b, _c;
      const de = N(R.clientX, R.clientY);
      if (Z && A < 5) {
        const se = e.derivedNodes.rawVal, Ke = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${R.clientX}, ${R.clientY}) nodes=${(se == null ? void 0 : se.length) ?? 0} elems=${(Ke == null ? void 0 : Ke.length) ?? 0} hover=`, de), A++;
      }
      const _e = de ? `${de.type}:${de.idx}` : "";
      if (_e !== D) D = _e, j(de, R.clientX, R.clientY);
      else if (de) {
        const se = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        V.style.left = `${R.clientX - se.left}px`, V.style.top = `${R.clientY - se.top}px`;
      }
    });
  };
  let ie = null;
  const Q = () => {
    D = "", c.visible = false, x.visible = false, M.visible = false, W.visible = false, le.visible = false, V.style.display = "none", e.render();
  }, Pe = (R) => {
    const de = e.rendererElm.getBoundingClientRect(), _e = R.clientX - de.left, se = R.clientY - de.top;
    (_e < -2 || se < -2 || _e > de.width + 2 || se > de.height + 2) && (ie && clearTimeout(ie), ie = window.setTimeout(Q, 200));
  }, fe = () => {
    ie && (clearTimeout(ie), ie = null);
  };
  e.rendererElm.addEventListener("pointermove", J), e.rendererElm.addEventListener("pointerleave", Pe), e.rendererElm.addEventListener("pointerenter", fe);
  const be = document.createElement("div");
  Object.assign(be.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), be.classList.add("hekatan-context-menu");
  let Fe = null;
  const Ne = document.createElement("div");
  Object.assign(Ne.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const Mt = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], Ct = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], ut = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], T = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], O = (R, de, _e) => {
    const se = document.createElement("div");
    return se.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, se.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${R}</span><span>${de}</span>`, se.addEventListener("mouseenter", () => {
      se.style.background = "rgba(100, 160, 255, 0.22)";
    }), se.addEventListener("mouseleave", () => {
      se.style.background = "transparent";
    }), se.addEventListener("click", (Ke) => {
      Ke.stopPropagation();
      const Ge = Fe;
      Dt(), Ge && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${_e}`, { detail: { type: Ge.type, idx: Ge.idx, subAction: _e } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ge.type, idx: Ge.idx, subAction: _e } })));
    }), se;
  };
  function ee(R) {
    Ne.innerHTML = "";
    const de = R === "frame" ? Mt : R === "node" ? Ct : R === "shell" ? ut : T, _e = document.createElement("div");
    _e.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", _e.textContent = `Asignar a ${R.toUpperCase()} #${(Fe == null ? void 0 : Fe.idx) ?? "?"}`, Ne.appendChild(_e);
    for (const se of de) Ne.appendChild(O(se.icon, se.label, se.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Ne);
  }, 0);
  function ce(R, de) {
    var _a;
    if (!Fe) return;
    ee(Fe.type);
    const _e = be.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Ne.style.left = `${R + _e.width}px`, Ne.style.top = `${de}px`, Ne.style.display = "block", setTimeout(() => {
      const se = Ne.getBoundingClientRect();
      se.right > window.innerWidth - 10 && (Ne.style.left = `${R - se.width}px`);
    }, 0);
  }
  function Me() {
    Ne.style.display = "none";
  }
  const Ye = (R, de, _e, se) => {
    const Ke = document.createElement("div");
    Ke.style.cssText = `
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.1s;
      justify-content: space-between;
    `;
    const Ge = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${R}</span><span>${de}</span></span>`, Le = _e ? '<span style="color:#888;">\u25B8</span>' : "";
    return Ke.innerHTML = Ge + Le, Ke.addEventListener("mouseenter", () => {
      if (Ke.style.background = "rgba(100, 160, 255, 0.18)", _e) {
        const Se = parseFloat(be.style.left || "0"), Be = parseFloat(be.style.top || "0");
        ce(Se, Be);
      } else Me();
    }), Ke.addEventListener("mouseleave", () => {
      Ke.style.background = "transparent";
    }), Ke.addEventListener("click", (Se) => {
      if (Se.stopPropagation(), _e) return;
      const Be = Fe;
      Dt(), se(Be);
    }), Ke;
  }, He = Ye("\u{1F4DD}", "Asignar", true, () => {
  }), We = Ye("\u2139", "Ver informaci\xF3n", false, (R) => {
    R && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: R.type, idx: R.idx } }));
  });
  We.addEventListener("mouseenter", () => {
    Me();
  }), be.appendChild(He), be.appendChild(We), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(be);
  }, 0);
  function yt(R, de, _e) {
    var _a, _b;
    Fe = _e;
    const se = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    be.style.left = `${R - se.left}px`, be.style.top = `${de - se.top}px`, be.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function Dt() {
    be.style.display = "none", Me(), Fe = null;
  }
  e.rendererElm.addEventListener("pointerdown", (R) => {
    if (R.button !== 2) return;
    const de = N(R.clientX, R.clientY);
    window.__hekatanRClickOnElement = !!de;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (R) => {
    const de = N(R.clientX, R.clientY);
    if (!de) {
      Dt(), window.__hekatanRClickOnElement = false;
      return;
    }
    R.preventDefault(), R.stopImmediatePropagation(), yt(R.clientX, R.clientY, { type: de.type, idx: de.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const $t = (R) => {
    if (be.style.display !== "block") return;
    const de = R.target;
    be.contains(de) || Ne.contains(de) || Dt();
  };
  document.addEventListener("mousedown", $t, true), document.addEventListener("keydown", (R) => {
    R.key === "Escape" && be.style.display === "block" && Dt();
  });
  let Je = null;
  e.rendererElm.addEventListener("pointerdown", (R) => {
    R.button === 0 && (Je = { x: R.clientX, y: R.clientY });
  }), e.rendererElm.addEventListener("pointerup", (R) => {
    if (R.button !== 0 || !Je) return;
    const de = R.clientX - Je.x, _e = R.clientY - Je.y;
    if (Je = null, de * de + _e * _e > 9) return;
    const se = N(R.clientX, R.clientY);
    se ? (F = { type: se.type, idx: se.idx }, qt()) : (F = null, qt());
  });
  function qt() {
    var _a, _b;
    if (H.visible = false, ne.visible = false, q.visible = false, E.visible = false, !F || !e.mesh) {
      e.render();
      return;
    }
    const R = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (F.type === "node") {
      const de = C(F.idx);
      if (de) {
        const _e = e.derivedNodes.rawVal ?? [];
        let se = 1;
        if (_e.length >= 2) {
          let Le = [1 / 0, 1 / 0, 1 / 0], Se = [-1 / 0, -1 / 0, -1 / 0];
          for (const Be of _e) for (let Ce = 0; Ce < 3; Ce++) Be[Ce] < Le[Ce] && (Le[Ce] = Be[Ce]), Be[Ce] > Se[Ce] && (Se[Ce] = Be[Ce]);
          se = Math.max(Se[0] - Le[0], Se[1] - Le[1], Se[2] - Le[2], 0.1);
        }
        const Ke = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ge = 0.017 * se * Ke;
        H.position.copy(de), H.scale.setScalar(Ge), H.visible = true;
      }
    } else if (F.type === "frame" && R) {
      const de = R[F.idx], _e = C(de[0]), se = C(de[1]);
      if (_e && se) {
        const Ke = _e.clone().add(se).multiplyScalar(0.5), Ge = se.clone().sub(_e), Le = Ge.length(), Se = e.getActiveCamera();
        let Be;
        if (Se.isOrthographicCamera) {
          const $e = Se;
          Be = ($e.top - $e.bottom) / $e.zoom * 35e-4;
        } else Be = Se.position.distanceTo(Ke) * 35e-4;
        ne.position.copy(Ke);
        const Ce = new m(0, 1, 0), Ie = Ce.clone().cross(Ge).normalize(), et = Ce.angleTo(Ge);
        ne.quaternion.setFromAxisAngle(Ie, et), ne.scale.set(Be, Le, Be), ne.visible = true;
      }
    } else if (F.type === "shell" && R) {
      const de = R[F.idx], _e = [], se = [];
      for (const Ke of de) {
        const Ge = C(Ke);
        if (!Ge) return;
        _e.push(Ge.x, Ge.y, Ge.z);
      }
      de.length === 4 ? se.push(0, 1, 2, 0, 2, 3) : de.length === 3 && se.push(0, 1, 2), K.setAttribute("position", new It(_e, 3)), K.setIndex(se), K.computeVertexNormals(), q.visible = true;
    } else if (F.type === "solid" && R) {
      const de = R[F.idx], _e = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], se = [];
      for (const [Ke, Ge] of _e) {
        const Le = C(de[Ke]), Se = C(de[Ge]);
        Le && Se && se.push(Le.x, Le.y, Le.z, Se.x, Se.y, Se.z);
      }
      X.setAttribute("position", new It(se, 3)), E.visible = true;
    }
    e.render();
  }
  return I.derive(() => {
    e.derivedNodes.val, F && qt();
  }), i;
}
function $s(e, i, y, f, c, S) {
  const g = c - y, x = S - f, w = g * g + x * x;
  if (w < 1e-9) {
    const ue = e - y, le = i - f;
    return Math.sqrt(ue * ue + le * le);
  }
  let M = ((e - y) * g + (i - f) * x) / w;
  M = Math.max(0, Math.min(1, M));
  const P = y + M * g, v = f + M * x, W = e - P, te = i - v;
  return Math.sqrt(W * W + te * te);
}
function Rs(e, i, y) {
  let f = false;
  for (let c = 0, S = y.length - 1; c < y.length; S = c++) {
    const g = y[c].x, x = y[c].y, w = y[S].x, M = y[S].y;
    x > i != M > i && e < (w - g) * (i - x) / (M - x + 1e-12) + g && (f = !f);
  }
  return f;
}
function _o(e, i = 8) {
  const y = document.createElement("div");
  y.id = "legend";
  const f = document.createElement("div");
  f.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(f), setTimeout(() => {
    I.derive(() => {
      f.textContent = eo.val ? `[${eo.val}]` : "";
    });
  });
  const c = Array.from({ length: i + 1 }, (w, M) => M / i).reverse();
  let S, g;
  c.forEach((w, M) => {
    S = document.createElement("div"), S.id = `marker-${M}`, S.className = "marker", S.style.marginTop = M == 0 ? "0px" : `calc(${50 / i}vh - 1px)`, g = document.createElement("p"), g.id = `marker-text-${M}`, S.append(g), y.append(S);
  });
  const x = [];
  return y.querySelectorAll("p").forEach((w) => x.push(w)), setTimeout(() => {
    I.derive(() => {
      c.forEach((w, M) => {
        const P = x[M];
        P && (P.innerText = Bs(e.val, w).toString());
      });
    });
  }), y;
}
function Bs(e, i) {
  const y = oo.val;
  if (y) return (y[0] + i * (y[1] - y[0])).toPrecision(3);
  const f = e.filter((g) => Number.isFinite(g));
  if (f.length === 0) return "0";
  let c = Math.min(...f);
  const S = Math.max(...f);
  return c >= 0 && S > 0 && (c = 0), (c + i * (S - c)).toPrecision(3);
}
function qs({ mesh: e, settingsObj: i, drawingObj: y, objects3D: f, solids: c }) {
  jo.DEFAULT_UP = new m(0, 0, 1);
  const S = document.createElement("div"), g = new Go(), x = new qo(45, 1, 0.1, 2 * 1e6), w = new Jo(-10, 10, 10, -10, -1e3, 2e6);
  let M = x;
  const P = new Qo({ antialias: true });
  P.localClippingEnabled = true;
  const v = new go(x, P.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: Ln.ROTATE, TWO: Ln.DOLLY_PAN }, P.domElement.addEventListener("wheel", (T) => {
    if (!T.ctrlKey && Math.abs(T.deltaX) > Math.abs(T.deltaY) * 1.5) {
      T.preventDefault();
      const O = v.target, ee = new m().subVectors(x.position, O), ce = new m();
      ce.crossVectors(x.up, ee).normalize();
      const Ye = ee.length() * 1e-3 * v.panSpeed;
      O.addScaledVector(ce, T.deltaX * Ye), x.position.addScaledVector(ce, T.deltaX * Ye), v.update();
    }
  }, { passive: false });
  const W = new qn(new m(-1, 0, 0), 0), te = new qn(new m(0, -1, 0), 0), ue = new qn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function le() {
    const T = window.__hekatanClip, O = [];
    T.enableX && (W.normal.set(T.invertX ? 1 : -1, 0, 0), W.constant = T.invertX ? -T.posX : T.posX, O.push(W)), T.enableY && (te.normal.set(0, T.invertY ? 1 : -1, 0), te.constant = T.invertY ? -T.posY : T.posY, O.push(te)), T.enableZ && (ue.normal.set(0, 0, T.invertZ ? 1 : -1), ue.constant = T.invertZ ? -T.posZ : T.posZ, O.push(ue)), P.clippingPlanes = O, g.traverse((ce) => {
      const Me = ce;
      if (Me.material) {
        const Ye = Array.isArray(Me.material) ? Me.material : [Me.material];
        for (const He of Ye) He.clippingPlanes = O, He.needsUpdate = true;
      }
    });
    const ee = window.__hekatanPanes ?? [];
    for (const ce of ee) try {
      ce && typeof ce.refresh == "function" && ce.refresh();
    } catch {
    }
    P.render(g, M);
  }
  le(), window.__hekatanClipApply = le;
  const _ = ns(i), H = I.derive(() => _.displayScale.val === 0 ? 1 : _.displayScale.val > 0 ? _.displayScale.val : -1 / _.displayScale.val), me = Xs(e, _), ne = () => {
    const T = [];
    return _.gridXY.rawVal && T.push("xy"), _.gridXZ.rawVal && T.push("xz"), _.gridYZ.rawVal && T.push("yz"), T;
  }, K = () => {
    const T = _.gridStep.rawVal, O = Math.max(T, _.gridMajor.rawVal);
    return { planes: ne(), majorStep: O, minorStep: T };
  };
  let re = Jn(_.gridSize.rawVal, K());
  re.visible = _.gridVisible.rawVal, window.__hekatanSnap2D = _.cursorSnap.rawVal;
  const q = () => {
    const T = Math.max(0, Math.min(1, _.gridOpacity.rawVal));
    re.traverse((O) => {
      const ee = O.material;
      if (!ee || !("opacity" in ee)) return;
      const ce = O.name ?? "";
      let Me = 0.35;
      ce.includes("border") ? Me = 1 : ce.includes("major") && (Me = 0.75), ee.opacity = T * Me;
    });
  };
  q(), S.appendChild(ts(_, e, c)), S.setAttribute("id", "viewer"), S.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const X = cn();
  P.setClearColor(X.background, 1);
  const $ = _.gridSize.rawVal, E = $ * 0.5 + $ * 0.5 / Math.tan(45 * 0.5);
  x.position.set(0, 0, E), x.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, S.__settings = _, v.zoomSpeed = 1;
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
  let C = vo(_.gridSize.rawVal, _.flipAxes.rawVal);
  g.add(re, C), I.derive(() => {
    window.__hekatanGridPlaneXY = _.gridXY.val, window.__hekatanGridPlaneXZ = _.gridXZ.val, window.__hekatanGridPlaneYZ = _.gridYZ.val;
  });
  let N = true;
  I.derive(() => {
    const T = _.gridVisible.val;
    if (N) {
      N = false;
      return;
    }
    re.visible = T, Q();
  });
  let j = true;
  I.derive(() => {
    if (_.gridOpacity.val, j) {
      j = false;
      return;
    }
    q(), Q();
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
    g.remove(re), (_a = re.traverse) == null ? void 0 : _a.call(re, (Me) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Me.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Me.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), re = Jn(T, K()), re.visible = _.gridVisible.rawVal, g.add(re), q(), g.remove(C), C.traverse((Me) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Me.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Me.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), C = vo(T, O), g.add(C);
    const ee = T * 0.5 + T * 0.5 / Math.tan(45 * 0.5);
    x.position.distanceTo(v.target), Math.abs(x.position.x) < 0.1 && Math.abs(x.position.y) < 0.1 && x.position.z > 0 ? x.position.set(0, 0, ee) : x.position.set(0.5 * T, -ee, 0.5 * T), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, T * 0.01), v.maxDistance = Math.max(50, T * 50), v.update(), Q();
  }), new ResizeObserver((T) => {
    var _a, _b;
    for (const O of T) {
      const ee = (_a = O.target) == null ? void 0 : _a.clientWidth, ce = (_b = O.target) == null ? void 0 : _b.clientHeight;
      if (ee === 0 || ce === 0) continue;
      const Ye = (A ? ee / 2 : ee) / ce;
      x.aspect = Ye, x.updateProjectionMatrix();
      const He = w.top;
      if (w.left = -He * Ye, w.right = He * Ye, w.updateProjectionMatrix(), Z && Z.isPerspectiveCamera) Z.aspect = Ye, Z.updateProjectionMatrix();
      else if (Z && Z.isOrthographicCamera) {
        const We = Z, yt = We.top;
        We.left = -yt * Ye, We.right = yt * Ye, We.updateProjectionMatrix();
      }
      P.setSize(ee, ce), Q();
    }
  }).observe(S), v.addEventListener("change", Q), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, _.displayScale.val, _.nodes.val, _.elements.val, (_g = _.edges) == null ? void 0 : _g.val, _.elemColumns.val, _.elemBeams.val, _.nodesIndexes.val, _.elementsIndexes.val, _.orientations.val, _.sections.val, _.secColumns.val, _.secBeams.val, _.secFloor.val, _.supports.val, _.loads.val, _.deformedShape.val, _.nodeResults.val, _.frameResults.val, _.shellResults.val, (_h = _.solidResults) == null ? void 0 : _h.val, setTimeout(Q);
  });
  let A = false, Z = null, J = null, ie = false;
  function Q() {
    const T = S.clientWidth || 1, O = S.clientHeight || 1;
    if (!A || !Z) {
      P.setScissorTest(false), P.setViewport(0, 0, T, O), P.render(g, M);
      return;
    }
    const ee = T / 2;
    P.setScissorTest(true), P.setViewport(0, 0, ee, O), P.setScissor(0, 0, ee, O), P.render(g, M), P.setViewport(ee, 0, ee, O), P.setScissor(ee, 0, ee, O), P.render(g, Z), P.setScissorTest(false);
  }
  function Pe(T) {
    M = T, v.object = T, v.update(), Q();
  }
  function fe(T, O) {
    A = T, O && (Z = O);
    const ee = S.clientWidth || 1, ce = S.clientHeight || 1, Ye = (T ? ee / 2 : ee) / ce;
    x.isPerspectiveCamera && (x.aspect = Ye, x.updateProjectionMatrix());
    const He = w.top;
    if (w.left = -He * Ye, w.right = He * Ye, w.updateProjectionMatrix(), T && Z) {
      if (J ? (J.object = Z, J.update()) : (J = new go(Z, P.domElement), J.enableDamping = true, J.dampingFactor = 0.1, J.screenSpacePanning = true, J.zoomSpeed = 0.8, J.panSpeed = 1.2, J.rotateSpeed = 0.9, J.touches = { ONE: Ln.ROTATE, TWO: Ln.DOLLY_PAN }, J._getZoomScale = function() {
        const We = Math.abs(F);
        if (We >= 80 && V === 0) return Math.pow(0.9, this.zoomSpeed);
        if (V === 1) return Math.pow(0.88, this.zoomSpeed);
        const yt = Math.max(0.05, Math.min(We / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * yt);
      }, J.target.copy(v.target), J.addEventListener("change", Q), J.enabled = false), !ie) {
        const We = (yt) => {
          if (!A || !J) return;
          const Dt = P.domElement.getBoundingClientRect(), $t = yt.clientX - Dt.left, Je = Dt.width / 2, qt = $t >= Je;
          v.enabled = !qt, J.enabled = qt;
        };
        P.domElement.addEventListener("pointerdown", We, true), P.domElement.addEventListener("wheel", We, { capture: true, passive: true }), ie = true;
      }
    } else T || (v.enabled = true, J && (J.enabled = false));
    S.__splitMode = T, window.__hekatanSplitMode = T, window.__hekatanSplitCamera = T ? Z : null, Q();
  }
  if (e) {
    g.add(os(_, me, H), es(e, _, me), is(_, me, H), ls(e, _, me, H), ss(e, _, me, H), as(e, _, me, H), ds(e, _, me, H), us(e, _, me, H), ws(e, _, me, H), fs(e, _, me, H));
    const T = Is({ scene: g, rendererElm: P.domElement, getActiveCamera: () => M, derivedNodes: me, derivedDisplayScale: H, mesh: e, settings: _, render: Q });
    g.add(T);
    const O = Ks(e, _), ee = Ms(e, _, me, O), ce = _o(O);
    g.add(ee), S.appendChild(ce);
    const Me = Cs(e, _, me);
    g.add(Me);
    const Ye = Me.__colorMapValues, He = _o(Ye);
    He.id = "frame-legend", S.appendChild(He), I.derive(() => {
      var _a;
      const We = _.shellResults.val != "none", yt = (((_a = _.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", Dt = We || yt, $t = _.frameResults.val.startsWith("contour:");
      ce.hidden = !Dt, ee.visible = Dt, He.hidden = !$t;
    });
  }
  if (c) {
    const T = new Oo(16777215, 0.5);
    g.add(T);
    const O = new xo(16777215, 0.5);
    O.position.set(30, 25, -10), O.shadow.mapSize.width = 1024, O.shadow.mapSize.height = 1024, g.add(O);
    const ee = 10;
    O.shadow.camera.left = -ee, O.shadow.camera.right = ee, O.shadow.camera.top = ee, O.shadow.camera.bottom = -ee, O.shadow.camera.far = 1e3;
    const ce = new xo(16777215, 0.5);
    ce.color.setHSL(11, 43, 96), ce.position.set(-10, 0, 30), g.add(ce), I.derive(() => {
      (c == null ? void 0 : c.val.length) && (g.remove(...c.oldVal), g.add(...c.rawVal), Q());
    }), I.derive(() => {
      c.rawVal.forEach((Me) => Me.visible = _.solids.val), Q();
    });
  }
  if (f) {
    const T = [], O = (ce) => {
      var _a, _b;
      return ((_a = ce == null ? void 0 : ce.userData) == null ? void 0 : _a.isCota) ? _.showCotas.val : ((_b = ce == null ? void 0 : ce.userData) == null ? void 0 : _b.isDistLoad) ? _.loads.val : _.custom3D.val;
    }, ee = () => {
      for (const ce of T) ce.visible = O(ce);
      Q();
    };
    I.derive(() => {
      const ce = f.val;
      T.length && (g.remove(...T), T.length = 0), ce.length && (g.add(...ce), T.push(...ce), ee()), Q();
    }), I.derive(() => {
      _.custom3D.val, ee();
    }), I.derive(() => {
      _.showCotas.val, ee();
    }), I.derive(() => {
      _.loads.val, ee();
    });
  }
  y && ys({ drawingObj: y, gridObj: re, scene: g, getActiveCamera: () => M, controls: v, gridSize: $, derivedDisplayScale: H, rendererElm: P.domElement, viewerRender: Q }), Po((T, O) => {
    var _a;
    P.setClearColor(O.background, 1), g.remove(re), (_a = re.traverse) == null ? void 0 : _a.call(re, (ee) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ee.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ee.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), re = Jn(_.gridSize.rawVal, { planes: ne() }), g.add(re), S.style.setProperty("--awatif-legend-color", O.legendMarker), Q();
  });
  const be = { scene: g, perspCamera: x, orthoCamera: w, get camera() {
    return M;
  }, controls: v, renderer: P, rendererElm: P.domElement, render: Q, setActiveCamera: Pe, setSplitMode: fe, get splitMode() {
    return A;
  }, get splitCamera() {
    return Z;
  }, settings: _ };
  S.__ctx = be;
  const Fe = document.createElement("div");
  Fe.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Ne = (T, O, ee) => {
    const ce = document.createElement("button");
    return ce.textContent = T, ce.title = O, ce.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), ce.onmouseenter = () => {
      ce.style.background = "rgba(70,70,70,0.9)";
    }, ce.onmouseleave = () => {
      ce.style.background = "rgba(40,40,40,0.85)";
    }, ce.onclick = (Me) => {
      Me.preventDefault(), ee();
    }, ce;
  }, Mt = (T, O) => {
    const ee = v.target, ce = new m().subVectors(M.position, ee), Me = ce.length(), Ye = new m(), He = new m();
    Ye.crossVectors(M.up, ce).normalize(), He.copy(M.up).normalize();
    const We = Me * 0.05;
    ee.addScaledVector(Ye, -T * We), ee.addScaledVector(He, O * We), M.position.addScaledVector(Ye, -T * We), M.position.addScaledVector(He, O * We), v.update(), Q();
  }, Ct = (T) => {
    const O = new m().subVectors(M.position, v.target);
    O.multiplyScalar(T), M.position.copy(v.target).add(O), v.update(), Q();
  }, ut = () => {
    const T = document.createElement("div");
    return T.style.cssText = "width:32px;height:32px;", T;
  };
  return Fe.append(ut()), Fe.append(Ne("\u2191", "Pan arriba", () => Mt(0, 1))), Fe.append(Ne("\u2295", "Zoom in", () => Ct(0.85))), Fe.append(Ne("\u2190", "Pan izquierda", () => Mt(-1, 0))), Fe.append(Ne("\u2302", "Reset vista", () => {
    v.reset(), Q();
  })), Fe.append(Ne("\u2192", "Pan derecha", () => Mt(1, 0))), Fe.append(Ne("\u2296", "Zoom out", () => Ct(1.18))), Fe.append(Ne("\u2193", "Pan abajo", () => Mt(0, -1))), Fe.append(ut()), getComputedStyle(S).position === "static" && (S.style.position = "relative"), S.appendChild(Fe), S;
}
function Xs(e, i) {
  return I.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], f = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!f || y.length === 0) return y;
    const c = i.deformScale.val, S = i.deformScale.val * i.deformScaleZ.val, g = Number.isFinite(c) ? c : 1, x = Number.isFinite(S) ? S : 1;
    return y.map((w, M) => {
      var _a2;
      const P = ((_a2 = f.get(M)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(P[0]) ? P[0] : 0, W = Number.isFinite(P[1]) ? P[1] : 0, te = Number.isFinite(P[2]) ? P[2] : 0;
      return [w[0] + v * g, w[1] + W * g, w[2] + te * x];
    });
  });
}
const oo = I.state(null), eo = I.state(""), Ys = I.state("kN"), Ds = I.state("mm"), Ns = I.state("kN/m\xB2"), Zs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, So = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Us = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Ks(e, i) {
  const y = I.state([]);
  let f;
  return ((c) => {
    c.bendingXX = "bendingXX", c.bendingYY = "bendingYY", c.bendingXY = "bendingXY", c.membraneXX = "membraneXX", c.membraneYY = "membraneYY", c.membraneXY = "membraneXY", c.tranverseShearX = "tranverseShearX", c.tranverseShearY = "tranverseShearY", c.vonMises = "vonMises", c.membranePrincipalMax = "membranePrincipalMax", c.membranePrincipalMin = "membranePrincipalMin", c.bendingPrincipalMax = "bendingPrincipalMax", c.bendingPrincipalMin = "bendingPrincipalMin", c.transverseShearMax = "transverseShearMax", c.pressure = "pressure", c.displacementX = "displacementX", c.displacementY = "displacementY", c.displacementZ = "displacementZ";
  })(f || (f = {})), I.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const c = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), ne = (Mt, Ct) => {
      Mt == null ? void 0 : Mt.forEach((ut, T) => {
        const O = e.elements.val[T];
        if (O) for (let ee = 0; ee < O.length; ee++) Ct.set(O[ee], [ut[ee] ?? ut[0]]);
      });
    };
    ne((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, c), ne((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, S), ne((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, g), ne((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, x), ne((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, w), ne((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, M), ne((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, P), ne((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, v), ne((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, W), ne((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.membranePrincipalMax, te), ne((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, ue), ne((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, le), ne((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, _), ne((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, H), ne((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, me);
    const K = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, re = (_G = i.solidResults) == null ? void 0 : _G.val, X = re && re !== "none" ? re : i.shellResults.val, $ = K == null ? void 0 : K[X], E = { bendingXX: [c, 0], bendingYY: [S, 0], bendingXY: [g, 0], membraneXX: [x, 0], membraneYY: [w, 0], membraneXY: [M, 0], tranverseShearX: [P, 0], tranverseShearY: [v, 0], vonMises: [W, 0], membranePrincipalMax: [te, 0], membranePrincipalMin: [ue, 0], bendingPrincipalMax: [le, 0], bendingPrincipalMin: [_, 0], transverseShearMax: [H, 0], pressure: [me, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, F = i.shellResults.val, V = Ys.val, C = Ds.val, N = F === "displacementX" || F === "displacementY" || F === "displacementZ", j = F === "bendingXX" || F === "bendingYY" || F === "bendingXY" || F === "bendingPrincipalMax" || F === "bendingPrincipalMin", D = F === "membraneXX" || F === "membraneYY" || F === "membraneXY" || F === "membranePrincipalMax" || F === "membranePrincipalMin", xe = F === "vonMises" || F === "pressure", A = F === "tranverseShearX" || F === "tranverseShearY" || F === "transverseShearMax", Z = (_N = i.solidResults) == null ? void 0 : _N.val, J = Z === "vonMises" || Z === "sigmaXX" || Z === "sigmaYY" || Z === "sigmaZZ" || Z === "tauXY" || Z === "tauYZ" || Z === "tauXZ", ie = Z === "ux" || Z === "uy" || Z === "uz", Q = Ns.val, Pe = J ? Us[Q] : ie || N ? So[C] : j || D || xe || A ? 1 / Zs[V] : 1, fe = J ? Q : ie || N ? C : j ? `${V}\xB7m/m` : D ? `${V}/m\xB2` : xe ? `${V}/m\xB2` : A ? `${V}/m` : "";
    eo.val = fe, oo.val = Array.isArray($) && $.length === 2 ? [$[0] * Pe, $[1] * Pe] : null;
    const Fe = Z && Z !== "none" ? [W, 0] : E[F], Ne = [];
    e.nodes.val.forEach((Mt, Ct) => {
      const ut = Fe;
      if (!ut || !ut[0] || typeof ut[0].has != "function") return;
      if (!ut[0].has(Ct)) {
        Ne.push(Number.NaN);
        return;
      }
      const T = ut[0].get(Ct), O = T ? T[ut[1]] ?? 0 : 0;
      Ne.push(O * Pe);
    }), y.val = Ne;
  }), y;
}
export {
  bs as a,
  _o as b,
  Ys as c,
  Ds as d,
  Ns as e,
  qs as g
};
