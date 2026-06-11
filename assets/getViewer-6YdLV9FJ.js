import { v as $, P as Fo, q as cn, a7 as Bn, B as fe, a8 as Xn, F as $t, a4 as Ao, K as tt, X as qt, L as ht, h as Qt, u as Eo, g as No, a9 as Zo, i as nt, d as Qe, V as m, $ as rn, aa as Gn, H as Vo, D as Yt, a as It, x as lt, z as Yn, ab as Dn, s as Uo, m as Ko, I as sn, a2 as kn, E as mo, f as yn, Q as qn, ac as Tn, C as wo, S as yo, c as xo, ad as Ln, p as Ho, ae as Wo, af as Go, ag as qo, ah as Jo, b as go, ai as vo, e as bo, W as Qo, N as Oo, O as jo, Y as es, T as In, o as Jn, Z as ts, _ as Mo, U as ns } from "./theme-BUyDDEHW.js";
import { T as At, O as _o } from "./Text-DR6pe57W.js";
import { e as os } from "./styles-tOu98xnK.js";
function ss(e, i, y) {
  const f = document.createElement("div"), c = new Fo({ title: "Settings", expanded: true, container: f });
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
    let K = false, se = 0, he = 0, ce = 0, k = 0;
    v.addEventListener("mousedown", (H) => {
      K = true, se = H.clientX, he = H.clientY;
      const pe = f.getBoundingClientRect();
      ce = pe.left, k = pe.top, f.style.left = `${ce}px`, f.style.top = `${k}px`;
    }), window.addEventListener("mousemove", (H) => {
      if (!K) return;
      const pe = H.clientX - se, ne = H.clientY - he, ge = Math.max(0, Math.min(window.innerWidth - 40, ce + pe)), q = Math.max(0, Math.min(window.innerHeight - 40, k + ne));
      f.style.left = `${ge}px`, f.style.top = `${q}px`;
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
function as(e) {
  return { gridSize: $.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: $.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: $.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: $.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: $.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: $.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: $.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: $.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: $.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: $.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: $.state((e == null ? void 0 : e.nodes) ?? true), elements: $.state((e == null ? void 0 : e.elements) ?? true), edges: $.state((e == null ? void 0 : e.edges) ?? true), faces: $.state((e == null ? void 0 : e.faces) ?? true), elemColumns: $.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: $.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: $.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: $.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: $.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: $.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: $.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: $.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: $.state((e == null ? void 0 : e.orientations) ?? false), sections: $.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: $.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: $.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: $.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: $.state((e == null ? void 0 : e.secFloor) ?? -1), supports: $.state((e == null ? void 0 : e.supports) ?? true), loads: $.state((e == null ? void 0 : e.loads) ?? false), deformedShape: $.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: $.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: $.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: $.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: $.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: $.state((e == null ? void 0 : e.flipAxes) ?? false), solids: $.state((e == null ? void 0 : e.solids) ?? true), custom3D: $.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: $.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: $.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: $.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function is(e, i, y) {
  const f = cn(), c = new Bn(new fe(), new Xn({ color: f.nodePoint }));
  return Ao((S, g) => {
    c.material.color.setHex(g.nodePoint);
  }), c.frustumCulled = false, $.derive(() => {
    e.nodes.val && c.geometry.setAttribute("position", new $t(i.val.flat(), 3));
  }), $.derive(() => {
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
  }), $.derive(() => {
    c.visible = e.nodes.val;
  }), c;
}
function Qn(e, i) {
  const y = cn(), f = new tt();
  f.name = "hekatan-grid";
  const c = (i == null ? void 0 : i.planes) ?? ["xy"];
  let S = (i == null ? void 0 : i.majorStep) ?? 1, g = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (S <= 0 && (S = 1), g <= 0 && (g = 0.1); e / g > 500; ) g *= 2;
  for (; e / S > 100; ) S *= 2;
  const x = e / 2;
  S = Math.max(g, Math.round(S / g) * g);
  const M = new qt(y.grid), P = new qt(y.grid).multiplyScalar(0.45), v = (se, he, ce, k) => {
    const H = [], pe = se === "xy" ? (B, T) => [B, T, 0] : se === "xz" ? (B, T) => [B, 0, T] : (B, T) => [0, B, T], ne = Math.floor(x / he);
    for (let B = -ne; B <= ne; B++) {
      const T = B * he, A = pe(T, -x), F = pe(T, x);
      H.push(...A, ...F);
    }
    for (let B = -ne; B <= ne; B++) {
      const T = B * he, A = pe(-x, T), F = pe(x, T);
      H.push(...A, ...F);
    }
    const ge = new fe();
    ge.setAttribute("position", new $t(H, 3));
    const q = new ht({ color: ce, transparent: true, opacity: k, depthWrite: false }), Z = new Qt(ge, q);
    return Z.name = `grid-${se}-${he === g ? "minor" : "major"}`, Z;
  }, K = (se, he, ce) => {
    const k = se === "xy" ? (Z, B) => [Z, B, 0] : se === "xz" ? (Z, B) => [Z, 0, B] : (Z, B) => [0, Z, B], H = [[-x, -x], [x, -x], [x, x], [-x, x]], pe = [];
    for (const [Z, B] of H) pe.push(...k(Z, B));
    const ne = new fe();
    ne.setAttribute("position", new $t(pe, 3));
    const ge = new ht({ color: he, transparent: true, opacity: ce, depthWrite: false }), q = new Eo(ne, ge);
    return q.name = `grid-${se}-border`, q.renderOrder = 1, q;
  };
  for (const se of c) f.add(v(se, g, P, 0.12)), f.add(v(se, S, M, 0.4)), f.add(K(se, M, 0.55));
  return f.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: S, minorStep: g, gridSize: e, planes: [...c] }, f;
}
function ls(e, i, y, f) {
  const c = new tt(), S = new No(0.5, 0.5, 0.5), g = new Zo(0.45, 0.7, 4);
  g.rotateX(Math.PI / 2), g.translate(0, 0, -0.35);
  const x = new nt({ color: 10166822 }), w = new nt({ color: 2792847 }), M = new nt({ color: 3835647 }), P = () => {
    const se = y.rawVal ?? [];
    if (se.length < 2) return i.gridSize.val * 0.5;
    let he = [1 / 0, 1 / 0, 1 / 0], ce = [-1 / 0, -1 / 0, -1 / 0];
    for (const k of se) for (let H = 0; H < 3; H++) k[H] < he[H] && (he[H] = k[H]), k[H] > ce[H] && (ce[H] = k[H]);
    return Math.max(ce[0] - he[0], ce[1] - he[1], ce[2] - he[2], 0.1);
  }, v = () => 0.08 * P(), K = () => Math.max(f.rawVal, 1);
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    c.clear();
    const se = v();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((he, ce) => {
      const k = y.val[ce];
      if (!k) return;
      const H = he ?? [], pe = (H[0] ? 1 : 0) + (H[1] ? 1 : 0) + (H[2] ? 1 : 0), ne = (H[3] ? 1 : 0) + (H[4] ? 1 : 0) + (H[5] ? 1 : 0);
      let ge;
      pe >= 3 && ne >= 3 ? ge = new Qe(S, x) : pe >= 3 && ne === 0 ? ge = new Qe(g, w) : ge = new Qe(g, M), ge.position.set(k[0], k[1], k[2]);
      const q = se * K();
      ge.scale.set(q, q, q), c.add(ge);
    });
  }), $.derive(() => {
    if (f.val, !i.supports.rawVal) return;
    const he = v() * K();
    c.children.forEach((ce) => ce.scale.set(he, he, he));
  }), $.derive(() => {
    c.visible = i.supports.val;
  }), c;
}
function rs(e, i, y, f) {
  const c = new tt();
  c.name = "loadsGroup";
  function S(g) {
    if (g.length < 2) return 0.12 * i.gridSize.rawVal;
    const x = [1 / 0, 1 / 0, 1 / 0], w = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of g) for (let v = 0; v < 3; v++) x[v] = Math.min(x[v], P[v]), w[v] = Math.max(w[v], P[v]);
    return 0.08 * Math.max(w[0] - x[0], w[1] - x[1], w[2] - x[2], 0.1);
  }
  return $.derive(() => {
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
      const K = new rn(v, new m(...P), 1, 15637248, 0.3, 0.3), se = x * f.rawVal;
      K.scale.set(se, se, se), c.add(K);
    });
  }), $.derive(() => {
    if (f.val, !i.loads.rawVal) return;
    const x = S(y.rawVal) * f.rawVal;
    c.children.forEach((w) => w.scale.set(x, x, x));
  }), $.derive(() => {
    c.visible = i.loads.val;
  }), c;
}
function cs(e, i, y) {
  const f = new tt();
  return $.derive(() => {
    if (!e.nodesIndexes.val) return;
    f.children.forEach((S) => S.dispose()), f.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((S, g) => {
      const x = new At(`${g}`);
      x.position.set(...S), x.updateScale(c * y.rawVal), f.add(x);
    });
  }), $.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6;
    f.children.forEach((S) => S.updateScale(c * y.rawVal));
  }), $.derive(() => {
    f.visible = e.nodesIndexes.val;
  }), f;
}
function ds(e, i, y, f) {
  const c = new tt();
  return $.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    c.children.forEach((g) => g.dispose()), c.clear();
    const S = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((g, x) => {
      const w = new At(`${x}`, void 0, "#001219");
      w.position.set(...ps(g.map((M) => y.rawVal[M]))), w.updateScale(S * f.rawVal), c.add(w);
    });
  }), $.derive(() => {
    if (f.val, !i.elementsIndexes.rawVal) return;
    const S = 0.05 * i.gridSize.val * 0.6;
    c.children.forEach((g) => g.updateScale(S * f.rawVal));
  }), $.derive(() => {
    c.visible = i.elementsIndexes.val;
  }), c;
}
function ps(e) {
  const i = e.reduce((f, c) => [f[0] + c[0], f[1] + c[1], f[2] + c[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function So(e, i) {
  const y = new tt(), f = 0.05 * e * 1, c = cn(), S = new At("X", "red", "transparent"), g = new At(i ? "Z" : "Y", "green", "transparent"), x = new At(i ? "Y" : "Z", "blue", "transparent"), w = new rn(new m(1, 0, 0), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), M = new rn(new m(0, 1, 0), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), P = new rn(new m(0, 0, 1), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2);
  return S.position.set(1.3 * f, 0, 0), g.position.set(0, 1.3 * f, 0), x.position.set(0, 0, 1.3 * f), S.updateScale(0.4 * f), g.updateScale(0.4 * f), x.updateScale(0.4 * f), w.scale.set(f, f, f), M.scale.set(f, f, f), P.scale.set(f, f, f), y.add(w, M, P, S, g, x), y;
}
function no(e, i) {
  const y = new m(...e), c = new m(...i).clone().sub(y), S = c.length(), g = c.dot(new m(1, 0, 0)) / S, x = c.dot(new m(0, 1, 0)) / S, w = c.dot(new m(0, 0, 1)) / S, M = Math.sqrt(g ** 2 + x ** 2);
  let P = new Gn().fromArray([[g, x, w], [-x / M, g / M, 0], [-g * w / M, -x * w / M, M]].flat());
  return w === 1 && (P = new Gn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), w === -1 && (P = new Gn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Vo().setFromMatrix3(P);
}
function eo(e, i) {
  return e == null ? void 0 : e.map((y, f) => (9 * y + i[f]) / 10);
}
function Cn(e) {
  const i = e.reduce((f, c) => [f[0] + c[0], f[1] + c[1], f[2] + c[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function us(e, i, y) {
  const f = Cn([i, y]), c = Cn([e, y]), S = Cn([e, i]), g = new m(...f).sub(new m(...c)).normalize(), x = new m(...y).sub(new m(...S)).normalize(), w = g.clone().cross(x).normalize(), M = w.clone().cross(g).normalize();
  return new Vo().makeBasis(g, M, w);
}
function fs(e, i, y, f) {
  const c = new tt(), S = new fe(), g = new ht({ vertexColors: true }), x = [0, 0, 0], w = [1, 0, 0], M = [0, 1, 0], P = [0, 0, 1];
  S.setAttribute("position", new $t([...x, ...w, ...x, ...M, ...x, ...P], 3));
  const v = [255, 0, 0], K = [0, 255, 0], se = [0, 0, 255];
  return S.setAttribute("color", new $t([...v, ...v, ...K, ...K, ...se, ...se], 3)), $.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (c.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((he) => {
      const ce = new Qt(S, g), k = y.rawVal[he[0]], H = y.rawVal[he[1]];
      if (he.length === 2 && (ce.position.set(...eo(k, H)), ce.rotation.setFromRotationMatrix(no(k, H))), he.length === 3) {
        const ge = y.rawVal[he[2]];
        ce.position.set(...Cn([k, H, ge])), ce.rotation.setFromRotationMatrix(us(k, H, ge));
      }
      const ne = 0.05 * i.gridSize.rawVal * 0.75 * f.rawVal;
      ce.scale.set(ne, ne, ne), c.add(ce);
    }));
  }), $.derive(() => {
    if (f.val, !i.orientations.rawVal) return;
    const ce = 0.05 * i.gridSize.val * 0.75 * f.rawVal;
    c.children.forEach((k) => k.scale.set(ce, ce, ce));
  }), $.derive(() => {
    c.visible = i.orientations.val;
  }), c;
}
function hs(e) {
  if (e.name) return e.name;
  if (e.type === "rect") {
    const i = (e.b * 100).toFixed(0), y = (e.h * 100).toFixed(0);
    return `${i}x${y}`;
  }
  return e.type === "circ" ? `D${(e.d * 100).toFixed(0)}` : "";
}
function ms(e, i, y, f) {
  const c = new tt(), S = new tt();
  c.add(S);
  function g(Z, B) {
    const T = Z / 2, A = B / 2, F = new Float32Array([0, -T, -A, 0, T, -A, 0, T, A, 0, -T, -A, 0, T, A, 0, -T, A]), V = new fe();
    V.setAttribute("position", new lt(F, 3));
    const C = new Float32Array([0, -T, -A, 0, T, -A, 0, T, A, 0, -T, A, 0, -T, -A]), D = new fe();
    return D.setAttribute("position", new lt(C, 3)), { fill: V, outline: D };
  }
  function x(Z, B = 24) {
    const T = Z / 2, A = new Float32Array(B * 9);
    for (let D = 0; D < B; D++) {
      const j = D / B * Math.PI * 2, O = (D + 1) / B * Math.PI * 2;
      A[D * 9] = 0, A[D * 9 + 1] = 0, A[D * 9 + 2] = 0, A[D * 9 + 3] = 0, A[D * 9 + 4] = T * Math.cos(j), A[D * 9 + 5] = T * Math.sin(j), A[D * 9 + 6] = 0, A[D * 9 + 7] = T * Math.cos(O), A[D * 9 + 8] = T * Math.sin(O);
    }
    const F = new fe();
    F.setAttribute("position", new lt(A, 3));
    const V = new Float32Array((B + 1) * 3);
    for (let D = 0; D <= B; D++) {
      const j = D / B * Math.PI * 2;
      V[D * 3] = 0, V[D * 3 + 1] = T * Math.cos(j), V[D * 3 + 2] = T * Math.sin(j);
    }
    const C = new fe();
    return C.setAttribute("position", new lt(V, 3)), { fill: F, outline: C };
  }
  function w(Z, B, T, A) {
    const F = T ?? B * 0.08, V = A ?? Z * 0.07, C = Z / 2, D = B / 2, j = D - F, O = V / 2, oe = [];
    function E(W, Pe, ve, Me) {
      oe.push(0, W, Pe, 0, ve, Pe, 0, ve, Me, 0, W, Pe, 0, ve, Me, 0, W, Me);
    }
    E(-C, -D, C, -j), E(-O, -j, O, j), E(-C, j, C, D);
    const Y = new fe();
    Y.setAttribute("position", new lt(new Float32Array(oe), 3));
    const ee = new Float32Array([0, -C, -D, 0, C, -D, 0, C, -j, 0, O, -j, 0, O, j, 0, C, j, 0, C, D, 0, -C, D, 0, -C, j, 0, -O, j, 0, -O, -j, 0, -C, -j, 0, -C, -D]), ie = new fe();
    return ie.setAttribute("position", new lt(ee, 3)), { fill: Y, outline: ie };
  }
  function M(Z, B, T) {
    const A = Z / 2, F = B / 2, V = A - T, C = F - T, D = [];
    function j(Y, ee, ie, W) {
      D.push(0, Y, ee, 0, ie, ee, 0, ie, W, 0, Y, ee, 0, ie, W, 0, Y, W);
    }
    j(-A, -F, A, -C), j(-A, C, A, F), j(-A, -C, -V, C), j(V, -C, A, C);
    const O = new fe();
    O.setAttribute("position", new lt(new Float32Array(D), 3));
    const oe = new Float32Array([0, -A, -F, 0, A, -F, 0, A, -F, 0, A, F, 0, A, F, 0, -A, F, 0, -A, F, 0, -A, -F, 0, -V, -C, 0, V, -C, 0, V, -C, 0, V, C, 0, V, C, 0, -V, C, 0, -V, C, 0, -V, -C]), E = new fe();
    return E.setAttribute("position", new lt(oe, 3)), { fill: O, outline: E };
  }
  function P(Z, B, T) {
    const A = Z / 2, F = B / 2, V = A - T, C = F - T, D = new fe(), j = new Float32Array([0, -V, -C, 0, V, -C, 0, V, C, 0, -V, -C, 0, V, C, 0, -V, C]);
    D.setAttribute("position", new lt(j, 3));
    const O = [];
    function oe(ie, W, Pe, ve) {
      O.push(0, ie, W, 0, Pe, W, 0, Pe, ve, 0, ie, W, 0, Pe, ve, 0, ie, ve);
    }
    oe(-A, -F, A, -C), oe(-A, C, A, F), oe(-A, -C, -V, C), oe(V, -C, A, C);
    const E = new fe();
    E.setAttribute("position", new lt(new Float32Array(O), 3));
    const Y = new Float32Array([0, -A, -F, 0, A, -F, 0, A, -F, 0, A, F, 0, A, F, 0, -A, F, 0, -A, F, 0, -A, -F, 0, -V, -C, 0, V, -C, 0, V, -C, 0, V, C, 0, V, C, 0, -V, C, 0, -V, C, 0, -V, -C]), ee = new fe();
    return ee.setAttribute("position", new lt(Y, 3)), { concFill: D, steelFillGeom: E, outline: ee };
  }
  function v(Z, B, T) {
    const A = [], F = [[0, -Z / 2, -B / 2], [0, -Z / 2 + T, -B / 2], [0, -Z / 2 + T, B / 2 - T], [0, Z / 2, B / 2 - T], [0, Z / 2, B / 2], [0, -Z / 2, B / 2]], V = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const O of V) A.push(...F[O]);
    const C = new fe();
    C.setAttribute("position", new lt(new Float32Array(A), 3));
    const D = [];
    for (let O = 0; O < F.length; O++) {
      const oe = (O + 1) % F.length;
      D.push(...F[O], ...F[oe]);
    }
    const j = new fe();
    return j.setAttribute("position", new lt(new Float32Array(D), 3)), { fill: C, outline: j };
  }
  function K(Z, B, T, A) {
    const F = A / 2, V = [], C = [[0, -Z - F, -B / 2], [0, -T - F, -B / 2], [0, -T - F, B / 2 - T], [0, -F, B / 2 - T], [0, -F, B / 2], [0, -Z - F, B / 2]], D = [[0, F, -B / 2], [0, F + T, -B / 2], [0, F + T, B / 2 - T], [0, Z + F, B / 2 - T], [0, Z + F, B / 2], [0, F, B / 2]], j = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Y of j) V.push(...C[Y]);
    for (const Y of j) V.push(...D[Y]);
    const O = new fe();
    O.setAttribute("position", new lt(new Float32Array(V), 3));
    const oe = [];
    for (const Y of [C, D]) for (let ee = 0; ee < Y.length; ee++) {
      const ie = (ee + 1) % Y.length;
      oe.push(...Y[ee], ...Y[ie]);
    }
    const E = new fe();
    return E.setAttribute("position", new lt(new Float32Array(oe), 3)), { fill: O, outline: E };
  }
  function se(Z, B, T, A) {
    const F = B / 2, V = Z, C = [[0, -V, -F], [0, -V, -F + T], [0, -A, -F + T], [0, -A, F - T], [0, -V, F - T], [0, -V, F], [0, 0, F], [0, 0, -F]], D = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], j = [];
    for (const Y of D) j.push(...C[Y]);
    const O = new fe();
    O.setAttribute("position", new lt(new Float32Array(j), 3));
    const oe = [];
    for (let Y = 0; Y < C.length; Y++) {
      const ee = (Y + 1) % C.length;
      oe.push(...C[Y], ...C[ee]);
    }
    const E = new fe();
    return E.setAttribute("position", new lt(new Float32Array(oe), 3)), { fill: O, outline: E };
  }
  function he(Z, B, T, A, F) {
    const V = B / 2, C = F / 2, D = [], j = [[0, -Z, -V], [0, -Z, -V + T], [0, -C - A, -V + T], [0, -C - A, V - T], [0, -Z, V - T], [0, -Z, V], [0, -C, V], [0, -C, -V]], O = j.map((ie) => [ie[0], -ie[1], ie[2]]), oe = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ie of oe) D.push(...j[ie]);
    for (const ie of oe) D.push(...O[ie]);
    const E = new fe();
    E.setAttribute("position", new lt(new Float32Array(D), 3));
    const Y = [];
    for (const ie of [j, O]) for (let W = 0; W < ie.length; W++) {
      const Pe = (W + 1) % ie.length;
      Y.push(...ie[W], ...ie[Pe]);
    }
    const ee = new fe();
    return ee.setAttribute("position", new lt(new Float32Array(Y), 3)), { fill: E, outline: ee };
  }
  function ce(Z, B, T, A) {
    const F = Z / 2, V = B / 2, C = A / 2, D = [[0, -C, -V], [0, C, -V], [0, C, V - T], [0, F, V - T], [0, F, V], [0, -F, V], [0, -F, V - T], [0, -C, V - T]], j = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], O = [];
    for (const ee of j) O.push(...D[ee]);
    const oe = new fe();
    oe.setAttribute("position", new lt(new Float32Array(O), 3));
    const E = [];
    for (let ee = 0; ee < D.length; ee++) {
      const ie = (ee + 1) % D.length;
      E.push(...D[ee], ...D[ie]);
    }
    const Y = new fe();
    return Y.setAttribute("position", new lt(new Float32Array(E), 3)), { fill: oe, outline: Y };
  }
  function k(Z, B, T = 24) {
    const A = Z / 2, F = A - B, V = [];
    for (let O = 0; O < T; O++) {
      const oe = O / T * Math.PI * 2, E = (O + 1) / T * Math.PI * 2, Y = Math.cos(oe), ee = Math.sin(oe), ie = Math.cos(E), W = Math.sin(E);
      V.push(0, A * Y, A * ee, 0, A * ie, A * W, 0, F * ie, F * W), V.push(0, A * Y, A * ee, 0, F * ie, F * W, 0, F * Y, F * ee);
    }
    const C = new fe();
    C.setAttribute("position", new lt(new Float32Array(V), 3));
    const D = [];
    for (let O = 0; O < T; O++) {
      const oe = O / T * Math.PI * 2, E = (O + 1) / T * Math.PI * 2;
      D.push(0, A * Math.cos(oe), A * Math.sin(oe), 0, A * Math.cos(E), A * Math.sin(E)), D.push(0, F * Math.cos(oe), F * Math.sin(oe), 0, F * Math.cos(E), F * Math.sin(E));
    }
    const j = new fe();
    return j.setAttribute("position", new lt(new Float32Array(D), 3)), { fill: C, outline: j };
  }
  const H = new nt({ color: 52479, transparent: true, opacity: 0.35, side: Yt, depthWrite: false }), pe = new ht({ color: 52479 }), ne = new nt({ color: 16750848, transparent: true, opacity: 0.4, side: Yt, depthWrite: false }), ge = new ht({ color: 16750848 });
  function q(Z, B) {
    const T = Math.abs(B[0] - Z[0]), A = Math.abs(B[1] - Z[1]), F = Math.abs(B[2] - Z[2]);
    return F > T && F > A || A > T && A > F;
  }
  return $.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const Z = i.secColumns.rawVal, B = i.secBeams.rawVal;
    if (!Z && !B) {
      c.children.forEach((C) => {
        C instanceof At && C.dispose();
      }), c.clear();
      return;
    }
    c.children.forEach((C) => {
      C instanceof At && C.dispose();
    }), c.clear();
    const T = (_a = e.elements) == null ? void 0 : _a.val, A = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!T || !A) return;
    const F = A.sectionShapes, V = i.secFloor.rawVal;
    T.forEach((C, D) => {
      if (C.length !== 2) return;
      const j = y.rawVal[C[0]], O = y.rawVal[C[1]];
      if (!j || !O) return;
      const oe = q(j, O);
      if (oe && !Z || !oe && !B) return;
      if (V >= 0) {
        const W = Math.min(j[1], O[1]);
        Math.max(j[1], O[1]);
        const Pe = i.gridSize.rawVal || 3;
        if (Math.floor(W / Pe + 0.01) !== V) return;
      }
      const E = F == null ? void 0 : F.get(D);
      if (!E) return;
      const Y = [(j[0] + O[0]) / 2, (j[1] + O[1]) / 2, (j[2] + O[2]) / 2], ee = no(j, O);
      if (E.type === "CFT") {
        const W = P(E.b, E.h, E.tw ?? E.b * 0.05), Pe = new Qe(W.concFill, H);
        Pe.position.set(...Y), Pe.rotation.setFromRotationMatrix(ee), c.add(Pe);
        const ve = new Qe(W.steelFillGeom, ne);
        ve.position.set(...Y), ve.rotation.setFromRotationMatrix(ee), c.add(ve);
        const Me = new It(W.outline, ge);
        Me.position.set(...Y), Me.rotation.setFromRotationMatrix(ee), c.add(Me);
      } else {
        let W, Pe, ve;
        switch (E.type) {
          case "rect":
            W = g(E.b, E.h), Pe = H, ve = pe;
            break;
          case "circ":
            W = x(E.d), Pe = H, ve = pe;
            break;
          case "I":
            W = w(E.b, E.h, E.tf, E.tw), Pe = ne, ve = ge;
            break;
          case "HSS":
            W = M(E.b, E.h, E.tw ?? E.b * 0.05), Pe = ne, ve = ge;
            break;
          case "CFT":
            W = P(E.b, E.h, E.tw ?? E.b * 0.05), Pe = ne, ve = ge;
            break;
          case "L":
            W = v(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3), Pe = ne, ve = ge;
            break;
          case "2L":
            W = K(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3, E.dis ?? 0.01), Pe = ne, ve = ge;
            break;
          case "C":
          case "coldC":
            W = se(E.b, E.h, E.tf ?? E.t ?? 3e-3, E.tw ?? E.t ?? 3e-3), Pe = ne, ve = ge;
            break;
          case "2C":
            W = he(E.b, E.h, E.tf ?? 5e-3, E.tw ?? 5e-3, E.dis ?? 0.01), Pe = ne, ve = ge;
            break;
          case "T":
            W = ce(E.b, E.h, E.tf ?? 0.01, E.tw ?? 6e-3), Pe = ne, ve = ge;
            break;
          case "pipe":
            W = k(E.d, E.tw ?? E.d * 0.05), Pe = ne, ve = ge;
            break;
          default:
            return;
        }
        const Me = new Qe(W.fill, Pe);
        Me.position.set(...Y), Me.rotation.setFromRotationMatrix(ee), c.add(Me);
        const Le = new It(W.outline, ve);
        Le.position.set(...Y), Le.rotation.setFromRotationMatrix(ee), c.add(Le);
      }
      const ie = hs(E);
      if (ie) {
        const Pe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(E.type) ? "#ff9900" : "#00ccff", ve = new At(ie, Pe, "transparent");
        ve.position.set(Y[0], Y[1], Y[2]);
        const Me = 0.05 * i.gridSize.rawVal * 0.5;
        ve.updateScale(Me * ((f == null ? void 0 : f.rawVal) ?? 1)), S.add(ve);
      }
    });
  }), f && $.derive(() => {
    if (f.val, !i.sections.rawVal) return;
    const Z = 0.05 * i.gridSize.val * 0.5;
    S.children.forEach((B) => {
      B instanceof At && B.updateScale(Z * f.rawVal);
    });
  }), $.derive(() => {
    c.visible = i.sections.val;
  }), $.derive(() => {
    S.visible = i.sectionLabels.val;
  }), c;
}
class $n extends tt {
  constructor(i, y, f, c, S, g, x) {
    super();
    const w = new Yn().moveTo(0, 0).lineTo(0, g[1]).lineTo(f, g[1]).lineTo(f, 0).lineTo(0, 0), M = w.getPoints(), P = new fe().setFromPoints(M);
    this.lines = new It(P, new ht({ color: cn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new Dn(w), K = new nt({ color: g[1] > 0 ? 24435 : 11411474, side: Yt });
    this.mesh = new Qe(v, K), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new At(`${S[1].toFixed(2)}`), this.normalizedResult = g, this.textPosition = Cn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(c), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class ko extends tt {
  constructor(i, y, f, c, S, g, x) {
    super();
    const w = S[0] * f / (S[0] + S[1]), M = S[0] * S[1] > 0;
    if (this.text = new At(`${S[0].toFixed(2)}`), this.text2 = new At(`${(S[1] * -1).toFixed(2)}`), this.normalizedResult = g, this.textPosition = eo(i, y), this.text2Position = eo(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(c), this.text2.rotation.setFromRotationMatrix(c), this.add(this.text, this.text2), M) {
      const P = new Yn().moveTo(0, 0).lineTo(0, g[0]).lineTo(w, 0).lineTo(0, 0), v = new Yn().moveTo(w, 0).lineTo(f, -g[1]).lineTo(f, 0).lineTo(w, 0), K = P.getPoints(), se = v.getPoints(), he = new fe().setFromPoints(K), ce = new fe().setFromPoints(se), k = new ht({ color: cn().resultOutline });
      this.lines = new It(he, k), this.lines2 = new It(ce, k), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), this.lines2.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), x && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const H = new Dn(P), pe = new Dn(v), ne = new nt({ color: g[0] > 0 ? 24435 : 11411474, side: Yt }), ge = new nt({ color: -g[1] > 0 ? 24435 : 11411474, side: Yt });
      this.mesh = new Qe(H, ne), this.mesh2 = new Qe(pe, ge), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), this.mesh2.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), x && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Yn().moveTo(0, 0).lineTo(0, g[0]).lineTo(f, -g[1]).lineTo(f, 0).lineTo(0, 0), v = P.getPoints(), K = new fe().setFromPoints(v);
      this.lines = new It(K, new ht({ color: cn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const se = new Dn(P), he = new nt({ color: g[0] > 0 ? 24435 : 11411474, side: Yt });
      this.mesh = new Qe(se, he), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
var To = ((e) => (e.normals = "normals", e.shearsY = "shearsY", e.shearsZ = "shearsZ", e.torsions = "torsions", e.bendingsY = "bendingsY", e.bendingsZ = "bendingsZ", e))(To || {});
function ws(e, i, y, f) {
  const c = new tt(), S = () => {
    const w = y.rawVal ?? [];
    if (w.length < 2) return i.gridSize.val * 0.5;
    let M = [1 / 0, 1 / 0, 1 / 0], P = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of w) for (let K = 0; K < 3; K++) v[K] < M[K] && (M[K] = v[K]), v[K] > P[K] && (P[K] = v[K]);
    return Math.max(P[0] - M[0], P[1] - M[1], P[2] - M[2], 0.1);
  }, g = () => 0.025 * S(), x = { normals: $n, shearsY: $n, shearsZ: $n, torsions: $n, bendingsY: ko, bendingsZ: ko };
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    c.children.forEach((M) => M.dispose()), c.clear();
    const w = To[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[w]) == null ? void 0 : _b.forEach((M, P) => {
      var _a2, _b2;
      const v = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[P]) ?? [0, 1], K = y.rawVal[v[0]], se = y.rawVal[v[1]], he = new m(...se).distanceTo(new m(...K)), ce = ys((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[w]), k = M == null ? void 0 : M.map((ge) => ge / (ce === 0 ? 1 : ce)), H = no(K, se), pe = new x[w](K, se, he, H, M ?? [0, 0], k ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(w)), ne = g();
      pe.updateScale(ne * f.rawVal), c.add(pe);
    });
  }), $.derive(() => {
    if (f.val, i.frameResults.rawVal == "none") return;
    const w = g();
    c.children.forEach((M) => M.updateScale(w * f.rawVal));
  }), $.derive(() => {
    c.visible = i.frameResults.val != "none";
  }), c;
}
function ys(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((y) => {
    const f = Math.max(...y ?? [0, 0]);
    f > i && (i = f);
  }), i;
}
class xs extends tt {
  constructor(i, y, f) {
    super();
    const c = y === oo.reactions;
    f[0] && (this.xText1 = new At(`${c ? "Fx" : "Dx"}: ` + f[0].toFixed(4))), f[3] && (this.xText2 = new At(`${c ? "Mx" : "Rx"}: ` + f[3].toFixed(4))), f[1] && (this.yText1 = new At(`${c ? "Fy" : "Dy"}: ` + f[1].toFixed(4))), f[4] && (this.yText2 = new At(`${c ? "My" : "Ry"}: ` + f[4].toFixed(4))), f[2] && (this.zText1 = new At(`${c ? "Fz" : "Dz"}: ` + f[2].toFixed(4))), f[5] && (this.zText2 = new At(`${c ? "Mz" : "Rz"}: ` + f[5].toFixed(4))), (f[0] || f[3]) && (this.xArrow = new rn(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[1] || f[4]) && (this.yArrow = new rn(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (f[2] || f[5]) && (this.zArrow = new rn(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function gs(e, i, y, f) {
  const c = new tt();
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    c.children.forEach((x) => x.dispose()), c.clear();
    const S = oo[i.nodeResults.rawVal], g = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[S]) == null ? void 0 : _b.forEach((x, w) => {
      const M = new xs(y.rawVal[w], S, x ?? [0, 0, 0, 0, 0, 0]);
      M.updateScale(g * f.rawVal), c.add(M);
    });
  }), $.derive(() => {
    if (f.val, i.nodeResults.rawVal == "none") return;
    const S = 0.05 * i.gridSize.val;
    c.children.forEach((g) => g.updateScale(S * f.rawVal));
  }), $.derive(() => {
    c.visible = i.nodeResults.val != "none";
  }), c;
}
function vs({ drawingObj: e, gridObj: i, scene: y, getActiveCamera: f, controls: c, gridSize: S, derivedDisplayScale: g, rendererElm: x, viewerRender: w }) {
  const M = new Uo(), P = new Ko(), v = (n) => {
    const o = x.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const d = r / 2;
      if (a >= d) return P.x = (a - d) / d * 2 - 1, P.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? f();
      P.x = a / d * 2 - 1;
    } else P.x = a / r * 2 - 1;
    return P.y = -(t / s) * 2 + 1, f();
  }, K = new Qe(new sn(1e4, 1e4), new nt({ side: Yt, transparent: true, opacity: 0, depthWrite: false }));
  K.visible = true, K.frustumCulled = false, y.add(K);
  const se = (n, o, a) => {
    const t = new Qe(new sn(1e4, 1e4), new nt({ side: Yt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, he = se(Math.PI / 2, 0, 0), ce = se(0, Math.PI / 2, 0);
  let k = false;
  const H = () => {
    if (k) return M.intersectObjects([K], false);
    if (he.visible = !!window.__hekatanGridPlaneXZ, ce.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && De.visible) {
      const a = M.intersectObjects([De, wt, ct], false);
      if (a.length > 0) return a;
    }
    const o = [K];
    return he.visible && o.push(he), ce.visible && o.push(ce), at.visible && Nt.length > 0 && o.push(...Nt), M.intersectObjects(o, false);
  }, pe = new Bn(new fe(), new Xn()), ne = new Bn(new fe(), new Xn({ color: "gray", sizeAttenuation: false, size: 6 })), ge = new Bn(new fe(), new Xn({ color: "orange", size: 0.1 }));
  y.add(ge);
  const q = document.createElement("input");
  q.id = "hk-rubber-label", q.type = "text", q.spellcheck = false, q.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, q.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(q);
  let Z = null, B = null, T = false;
  const A = new m(), F = (n, o, a, t, r, s) => {
    const l = t - n, d = r - o, u = s - a, b = Math.hypot(l, d, u);
    if (b < 0.01) {
      q.style.display = "none";
      return;
    }
    Z = [n, o, a], B = [l / b, d / b, u / b], A.set((n + t) / 2, (o + r) / 2, (a + s) / 2), A.project(f());
    const _ = x.getBoundingClientRect(), p = _.left + (A.x * 0.5 + 0.5) * _.width, h = _.top + (-A.y * 0.5 + 0.5) * _.height;
    if (q.style.left = p + "px", q.style.top = h + "px", q.style.display = "block", !T) {
      if (q.value = `${b.toFixed(2)} m`, document.activeElement !== q) {
        const z = document.activeElement;
        z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA") && z !== q || q.focus({ preventScroll: true });
      }
      try {
        q.select();
      } catch {
      }
    }
  }, V = () => {
    q.style.display = "none", Z = null, B = null, T = false, document.activeElement === q && q.blur();
  }, C = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Vt = n, re(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), q.blur();
      return;
    }
    if (!Z || !B || !e.polylines) return;
    let a = B[0], t = B[1], r = B[2];
    J === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : J === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : J === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = Z[0] + a * n, l = Z[1] + t * n, d = Z[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, d]];
    const u = e.polylines.rawVal, b = u.length ? u[u.length - 1] : [];
    e.polylines.val = [...u.slice(0, -1), [...b, e.points.rawVal.length - 1]], q.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    w();
  }, D = (n) => {
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
  }, j = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return Z ? [Z[0] + n.dx, Z[1] + n.dy, Z[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!Z) return null;
      const o = n.ang * Math.PI / 180;
      return [Z[0] + n.L * Math.cos(o), Z[1] + n.L * Math.sin(o), Z[2]];
    }
    if (n.kind === "relSpherical") {
      if (!Z) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [Z[0] + t * Math.cos(o), Z[1] + t * Math.sin(o), Z[2] + n.L * Math.sin(a)];
    }
    return null;
  }, O = (n) => {
    var _a;
    if (!e.polylines) return;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, n];
    const o = e.polylines.rawVal, a = o.length ? o[o.length - 1] : [];
    e.polylines.val = [...o.slice(0, -1), [...a, e.points.rawVal.length - 1]], q.blur();
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    w();
  };
  window.__hekatanTypeCoord = (n) => {
    var _a, _b, _c, _d;
    const o = D(n);
    if (!o) return false;
    if (o.kind === "length") return C(o.L), true;
    const a = j(o);
    if (!a) return false;
    if (O(a), ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "area" && e.polylines) {
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
  }, q.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = D(q.value);
      if (!a) return;
      if (T = false, a.kind === "length") C(a.L), re(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = j(a);
        if (!t) return;
        O(t);
        const r = a.kind;
        re(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
      }
      return;
    }
    if (n.key === "Escape") {
      n.preventDefault(), T = false, q.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!T && q.style.display === "block") try {
          q.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (T = true);
  }), window.addEventListener("keydown", (n) => {
    if (!Z || !B || document.activeElement === q) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (q.value = n.key, q.focus(), q.setSelectionRange(1, 1), n.preventDefault());
  });
  const oe = document.createElement("div");
  oe.id = "hk-coord-readout", oe.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", oe.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(oe);
  const E = document.createElement("div");
  E.id = "hk-coord-fixed", E.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", E.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(E);
  const Y = new It(new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new kn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  Y.frustumCulled = false, Y.visible = false, y.add(Y);
  const ee = new It(new fe(), new ht({ color: 2282478, transparent: true, opacity: 0.9 }));
  ee.frustumCulled = false, ee.visible = false, y.add(ee);
  let ie = [];
  const W = new tt(), Pe = new Qe(new sn(1, 1), new nt({ color: 2282478, transparent: true, opacity: 0.08, side: Yt, depthWrite: false })), ve = new Qt(new mo(new sn(1, 1)), new ht({ color: 2282478, transparent: true, opacity: 0.85 })), Me = new Qt(new fe(), new ht({ color: 2282478, transparent: true, opacity: 0.3 })), Le = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    Me.geometry.dispose(), Me.geometry = new fe(), Me.geometry.setAttribute("position", new $t(a, 3));
  };
  W.add(Pe, ve, Me), W.visible = false, W.frustumCulled = false, y.add(W);
  const Ae = new tt();
  Ae.frustumCulled = false, Ae.visible = false, y.add(Ae);
  const Pt = (n) => {
    const o = new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new kn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new It(o, a);
  }, Ct = Pt(16711680), rt = Pt(65280), L = Pt(35071);
  Ae.add(Ct, rt, L);
  const te = (n) => {
    const o = new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new ht({ color: n, transparent: true, opacity: 0.45, depthTest: false }), t = new Eo(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, le = te(3462041), de = te(16724804), Te = te(6333946), Ye = new tt();
  Ye.frustumCulled = false, Ye.visible = false, y.add(Ye), Ye.add(le, de, Te);
  const mt = (n) => {
    const o = new sn(1, 1), a = new nt({ color: n, transparent: true, opacity: 0.06, side: Yt, depthWrite: false }), t = new Qe(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, De = mt(3462041), wt = mt(16724804), ct = mt(6333946);
  Ye.add(De, wt, ct);
  const Bt = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, zt = document.createElement("div");
  zt.id = "hk-refplane-badge", zt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(zt), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Ye.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      N(le, s, "xy", l), N(de, s, "xz", l), N(Te, s, "yz", l), Bt(De, s, "xy", l), Bt(wt, s, "xz", l), Bt(ct, s, "yz", l), De.material.opacity = 0.1, wt.material.opacity = 0.1, ct.material.opacity = 0.1;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    w();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !Ye.visible) {
      w();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    N(le, s, "xy", n), N(de, s, "xz", n), N(Te, s, "yz", n), Bt(De, s, "xy", n), Bt(wt, s, "xz", n), Bt(ct, s, "yz", n), w();
  };
  const Ot = (n) => {
    if (De.material.opacity = n === "xy" ? 0.14 : 0.04, wt.material.opacity = n === "xz" ? 0.14 : 0.04, ct.material.opacity = n === "yz" ? 0.14 : 0.04, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      zt.style.background = r.bg, zt.style.color = r.text, zt.textContent = `\u25A6 Plano ${n.toUpperCase()}`, zt.style.display = "block";
    } else zt.style.display = "none";
  }, N = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let J = null;
  window.__hekatanAxisLock = () => J;
  let Se = null;
  const Q = document.createElement("div");
  Q.id = "hk-axis-lock-badge", Q.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Q);
  const Ke = () => {
    if (!J) {
      Q.style.display = "none";
      return;
    }
    const n = { x: "#ff3344", y: "#34d399", z: "#60a5fa" };
    Q.style.background = "rgba(15,23,42,0.92)", Q.style.color = n[J], Q.style.border = `1.5px solid ${n[J]}`, Q.textContent = `\u{1F512} LOCK ${J.toUpperCase()}`, Q.style.display = "block";
  };
  window.addEventListener("keydown", (n) => {
    var _a, _b, _c, _d;
    const o = document.activeElement;
    if (o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") && o !== q) return;
    const a = n.key.toLowerCase(), t = (_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool;
    if (n.key === "Enter" && t === "polyarea" && ie.length >= 3) {
      const r = Ge();
      re(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") J = J === a ? null : a, Ke(), n.preventDefault();
    else if (n.key === "Escape") {
      const r = document.activeElement;
      r && (r.tagName === "INPUT" || r.tagName === "TEXTAREA") && r.blur(), po(), n.preventDefault();
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
  const Ne = new m(), Je = new m(), Ve = new m(), He = (n) => {
    if (!J) return null;
    const o = n[0], a = n[1], t = n[2];
    return J === "x" ? (Ne.set(o - 1e4, a, t), Je.set(o + 1e4, a, t)) : J === "y" ? (Ne.set(o, a - 1e4, t), Je.set(o, a + 1e4, t)) : (Ne.set(o, a, t - 1e4), Je.set(o, a, t + 1e4)), M.ray.distanceSqToSegment(Ne, Je, null, Ve), Ve;
  };
  window.__hekatanProjectOnAxis = He;
  const be = new It(new fe().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new ht({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  be.renderOrder = 998, be.frustumCulled = false, be.visible = false, y.add(be);
  let yt = -1, dt = -1, Be = -1;
  const ze = /* @__PURE__ */ new Set();
  window.__hekatanSelection = ze;
  const _e = new It(new fe().setFromPoints([new m(), new m()]), new ht({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  _e.renderOrder = 997, _e.frustumCulled = false, _e.visible = false, y.add(_e);
  const We = new Qe(new yn(0.02, 12, 12), new nt({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  We.renderOrder = 998, We.visible = false, y.add(We);
  const ot = (n) => {
    const o = f();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, dn = () => {
    We.visible && We.scale.setScalar(ot(We.position));
  }, Ze = new tt();
  Ze.frustumCulled = false, y.add(Ze);
  const Ht = 2282478;
  let _t = null;
  const Xe = (n, o, a, t) => {
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
  }, ke = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Ze.children.length; ) {
      const l = Ze.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of ze) {
      const [d, ...u] = l.split(":");
      if (d === "pt") {
        const b = n[+u[0]];
        if (!b) continue;
        const _ = new Qe(new yn(0.025, 12, 12), new nt({ color: Ht, transparent: true, opacity: 0.9, depthTest: false }));
        _.position.set(b[0], b[1], b[2]), _.renderOrder = 999, _.__isSelectionPt = true, Ze.add(_);
      } else if (d === "seg") {
        const b = o[+u[0]], _ = n[b == null ? void 0 : b[+u[1]]], p = n[b == null ? void 0 : b[+u[1] + 1]];
        if (!_ || !p) continue;
        const h = new fe().setFromPoints([new m(_[0], _[1], _[2]), new m(p[0], p[1], p[2])]), z = new It(h, new ht({ color: Ht, transparent: true, opacity: 0.95, depthTest: false }));
        z.renderOrder = 999, Ze.add(z);
      } else if (d === "poly") {
        const _ = o[+u[0]].map((z) => {
          const X = n[z];
          return X ? new m(X[0], X[1], X[2]) : null;
        }).filter(Boolean);
        if (_.length < 2) continue;
        const p = new fe().setFromPoints(_), h = new It(p, new ht({ color: Ht, transparent: true, opacity: 0.95, depthTest: false }));
        h.renderOrder = 999, Ze.add(h);
      } else if (d === "aux") {
        const b = t[+u[0]];
        if (!b || b.length !== 6) continue;
        const _ = new fe().setFromPoints([new m(b[0], b[1], b[2]), new m(b[3], b[4], b[5])]), p = new It(_, new ht({ color: Ht, transparent: true, opacity: 0.95, depthTest: false }));
        p.renderOrder = 999, Ze.add(p);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), w();
  };
  window.__hekatanRefreshSelection = ke, window.__hekatanClearSelection = () => {
    ze.clear(), ke();
  };
  const we = (n, o, a, t, r, s, l, d, u) => {
    const b = l - t, _ = d - r, p = u - s, h = b * b + _ * _ + p * p;
    if (h < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let z = ((n - t) * b + (o - r) * _ + (a - s) * p) / h;
    z = Math.max(0, Math.min(1, z));
    const X = t + z * b, U = r + z * _, G = s + z * p;
    return Math.hypot(n - X, o - U, a - G);
  }, Re = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, d = -1, u = t;
    for (let b = 0; b < r.length; b++) {
      const _ = r[b];
      for (let p = 0; p < _.length - 1; p++) {
        const h = s[_[p]], z = s[_[p + 1]];
        if (!h || !z) continue;
        const X = we(n, o, a, h[0], h[1], h[2], z[0], z[1], z[2]);
        X < u && (u = X, l = b, d = p);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: d, dist: u } : null;
  }, ye = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, d = t;
    for (let u = 0; u < s.length; u++) {
      const b = s[u];
      if (!b || b.length !== 6) continue;
      const _ = we(n, o, a, b[0], b[1], b[2], b[3], b[4], b[5]);
      _ < d && (d = _, l = u);
    }
    return l;
  }, st = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      be.visible = false;
      return;
    }
    be.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), be.visible = true;
  }, pt = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      be.visible = false;
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
    be.geometry.setFromPoints(s), be.visible = true;
  }, Rt = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((u, b) => b !== n), t = /* @__PURE__ */ new Set();
    for (const u of a) for (const b of u) t.add(b);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let u = 0; u < r.length; u++) t.has(u) && (s.set(u, l.length), l.push(r[u]));
    const d = a.map((u) => u.map((b) => s.get(b)).filter((b) => b !== void 0));
    e.points.val = l, e.polylines.val = d, e.areas && (e.areas.val = e.areas.rawVal.filter((u) => u !== n).map((u) => u > n ? u - 1 : u)), be.visible = false, yt = -1, dt = -1;
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
      Rt(n);
      return;
    }
    const r = a[n];
    if (o < 0 || o >= r.length - 1) return;
    if (r.length === 2) {
      Rt(n);
      return;
    }
    let s;
    o === 0 ? s = [r.slice(1)] : o === r.length - 2 ? s = [r.slice(0, -1)] : s = [r.slice(0, o + 1), r.slice(o + 1)];
    const l = [...a.slice(0, n), ...s, ...a.slice(n + 1)], d = /* @__PURE__ */ new Set();
    for (const h of l) for (const z of h) d.add(z);
    const u = e.points.rawVal, b = /* @__PURE__ */ new Map(), _ = [];
    for (let h = 0; h < u.length; h++) d.has(h) && (b.set(h, _.length), _.push(u[h]));
    const p = l.map((h) => h.map((z) => b.get(z)).filter((z) => z !== void 0));
    if (e.points.val = _, e.polylines.val = p, e.areas) {
      const h = s.length - 1;
      e.areas.val = e.areas.rawVal.map((z) => z > n ? z + h : z);
    }
    be.visible = false, yt = -1, dt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  pe.geometry.setAttribute("position", new $t(e.points.rawVal.flat(), 3)), pe.geometry.computeBoundingSphere(), pe.frustumCulled = false, ne.frustumCulled = false, y.add(ne), K.position.set(0, 0, 0), K.rotateX(Math.PI / 2), K.geometry.rotateX(Math.PI / 2), K.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
      const _ = 2 * Math.PI * b / l, p = t * Math.cos(_), h = t * Math.sin(_);
      let z;
      s === "xy" ? z = [n + p, o + h, a] : s === "xz" ? z = [n + p, o, a + h] : z = [n, o + p, a + h], u.push(z);
    }
    if (e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const b = [...u.map((p, h) => d + h), d], _ = e.polylines.rawVal;
      ((_a = _[_.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [..._, b, []] : e.polylines.val = [..._.slice(0, -1), b, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), d = new m(...a), u = new m().subVectors(l, s), b = new m().subVectors(d, s), _ = new m().crossVectors(u, b).normalize(), p = new m().addVectors(s, l).multiplyScalar(0.5), h = new m().addVectors(l, d).multiplyScalar(0.5), z = new m().crossVectors(u, _).normalize(), X = new m().crossVectors(new m().subVectors(d, l), _).normalize(), U = new m().subVectors(h, p), G = z.x * X.y - z.y * X.x;
    let I;
    if (Math.abs(G) > 1e-9) {
      const qe = (U.x * X.y - U.y * X.x) / G;
      I = new m().addVectors(p, z.clone().multiplyScalar(qe));
    } else I = p.clone();
    const ae = s.distanceTo(I), ue = new m().subVectors(s, I), Ce = new m().subVectors(d, I), me = Math.acos(Math.max(-1, Math.min(1, ue.dot(Ce) / (ae * ae)))), Fe = e.points.rawVal.length, ut = [], vt = _.clone();
    for (let qe = 0; qe <= r; qe++) {
      const $e = qe / r, ft = me * $e, it = new qn().setFromAxisAngle(vt, ft), bt = ue.clone().applyQuaternion(it).add(I);
      ut.push([bt.x, bt.y, bt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...ut], e.polylines) {
      const qe = ut.map((ft, it) => Fe + it), $e = e.polylines.rawVal;
      e.polylines.val = [...$e.slice(0, -1), qe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), d = Math.min(n[1], o[1]), u = Math.max(n[1], o[1]), b = (n[2] + o[2]) / 2, _ = l - s, p = u - d, h = Math.min(a, _ / 2 - 0.01, p / 2 - 0.01);
    if (h <= 0) return;
    const z = e.points.rawVal.length, X = [], U = [], G = (I, ae) => {
      X.push([I, ae, b]), U.push(z + X.length - 1);
    };
    for (let I = 0; I <= r; I++) G(s + h + (_ - 2 * h) * I / r, d);
    for (let I = 1; I <= t; I++) {
      const ae = -Math.PI / 2 + Math.PI / 2 * I / t;
      G(l - h + h * Math.cos(ae), d + h + h * Math.sin(ae));
    }
    for (let I = 1; I <= r; I++) G(l, d + h + (p - 2 * h) * I / r);
    for (let I = 1; I <= t; I++) {
      const ae = 0 + Math.PI / 2 * I / t;
      G(l - h + h * Math.cos(ae), u - h + h * Math.sin(ae));
    }
    for (let I = 1; I <= r; I++) G(l - h - (_ - 2 * h) * I / r, u);
    for (let I = 1; I <= t; I++) {
      const ae = Math.PI / 2 + Math.PI / 2 * I / t;
      G(s + h + h * Math.cos(ae), u - h + h * Math.sin(ae));
    }
    for (let I = 1; I <= r; I++) G(s, u - h - (p - 2 * h) * I / r);
    for (let I = 1; I <= t; I++) {
      const ae = Math.PI + Math.PI / 2 * I / t;
      G(s + h + h * Math.cos(ae), d + h + h * Math.sin(ae));
    }
    if (U.push(z), e.points.val = [...e.points.rawVal, ...X], e.polylines) {
      const I = e.polylines.rawVal;
      e.polylines.val = [...I.slice(0, -1), U, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], u = o[2];
    let b;
    if (Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, d, s], [t, d, u], [t, r, u]], e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const _ = [a, a + 1, a + 2, a + 3, a], p = e.polylines.rawVal;
      e.polylines.val = [...p.slice(0, -1), _, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], d = o[1], u = o[2];
    let b;
    if (Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, d, s], [t, d, s]] : Math.abs(r - d) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, d, s], [t, d, u], [t, r, u]], window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const _ = e.polylines.rawVal, p = _.length - 1, h = [a, a + 1, a + 2, a + 3, a];
      e.polylines.val = [..._.slice(0, -1), h, []], e.areas && (e.areas.val = [...e.areas.rawVal, p]);
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
    for (let xe = 0; xe < a; xe++) {
      const Ie = n[xe], et = n[(xe + 1) % a];
      t += (Ie[1] - et[1]) * (Ie[2] + et[2]), r += (Ie[2] - et[2]) * (Ie[0] + et[0]), s += (Ie[0] - et[0]) * (Ie[1] + et[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let d = n[1][0] - n[0][0], u = n[1][1] - n[0][1], b = n[1][2] - n[0][2];
    const _ = Math.hypot(d, u, b) || 1;
    d /= _, u /= _, b /= _;
    let p = r * b - s * u, h = s * d - t * b, z = t * u - r * d;
    const X = Math.hypot(p, h, z) || 1;
    p /= X, h /= X, z /= X;
    const U = n[0], G = (xe) => [(xe[0] - U[0]) * d + (xe[1] - U[1]) * u + (xe[2] - U[2]) * b, (xe[0] - U[0]) * p + (xe[1] - U[1]) * h + (xe[2] - U[2]) * z], I = (xe, Ie) => [U[0] + xe * d + Ie * p, U[1] + xe * u + Ie * h, U[2] + xe * b + Ie * z], ae = n.map(G);
    let ue = 1 / 0, Ce = -1 / 0, me = 1 / 0, Fe = -1 / 0;
    for (const [xe, Ie] of ae) xe < ue && (ue = xe), xe > Ce && (Ce = xe), Ie < me && (me = Ie), Ie > Fe && (Fe = Ie);
    const ut = Ce - ue, vt = Fe - me;
    if (ut < 1e-6 || vt < 1e-6) return 0;
    let qe = o && o > 0 ? o : 0.5;
    for (; ut / qe * (vt / qe) > 2500; ) qe *= 2;
    qe = Math.min(qe, Math.min(ut, vt));
    const $e = (xe, Ie) => {
      let et = false;
      for (let Kt = 0, nn = ae.length - 1; Kt < ae.length; nn = Kt++) {
        const [mn, _n] = ae[Kt], [wn, Sn] = ae[nn];
        _n > Ie != Sn > Ie && xe < (wn - mn) * (Ie - _n) / (Sn - _n) + mn && (et = !et);
      }
      return et;
    }, ft = Math.max(1, Math.round(ut / qe)), it = Math.max(1, Math.round(vt / qe)), bt = ut / ft, Tt = vt / it, tn = /* @__PURE__ */ new Map(), Gt = [], Ft = e.points.rawVal.length, Ut = (xe, Ie) => {
      const et = xe + "," + Ie, Kt = tn.get(et);
      if (Kt !== void 0) return Kt;
      const nn = Ft + Gt.length;
      return Gt.push(I(ue + xe * bt, me + Ie * Tt)), tn.set(et, nn), nn;
    }, Lt = [];
    for (let xe = 0; xe < ft; xe++) for (let Ie = 0; Ie < it; Ie++) {
      if (!$e(ue + (xe + 0.5) * bt, me + (Ie + 0.5) * Tt)) continue;
      const et = Ut(xe, Ie), Kt = Ut(xe + 1, Ie), nn = Ut(xe + 1, Ie + 1), mn = Ut(xe, Ie + 1);
      Lt.push([et, Kt, nn, mn]);
    }
    if (!Lt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...Gt], e.polylines && e.areas) {
      let xe = e.polylines.rawVal.slice();
      xe.length && xe[xe.length - 1].length === 0 && (xe = xe.slice(0, -1));
      const Ie = [];
      for (const et of Lt) Ie.push(xe.length), xe.push([et[0], et[1], et[2], et[3], et[0]]);
      xe.push([]), e.polylines.val = xe, e.areas.val = [...e.areas.rawVal, ...Ie];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), Lt.length;
  };
  const Ge = () => {
    if (ie.length < 3) return ie = [], ee.visible = false, w(), 0;
    const n = window.__hekatanMeshPolyArea(ie.slice());
    return ie = [], ee.visible = false, w(), n;
  };
  window.__hekatanFinalizePolyArea = Ge, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new m(n[0], n[1], n[2]), r = new m(o[0], o[1], o[2]), s = new m(a[0], a[1], a[2]), l = new m().subVectors(r, t).cross(new m().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const d = new qn().setFromUnitVectors(new m(0, 0, 1), l), u = new Tn().setFromQuaternion(d);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [u.x, u.y, u.z] });
    const b = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), _ = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, p = _ / 2;
    Pe.geometry.dispose(), Pe.geometry = new sn(_, _), ve.geometry.dispose(), ve.geometry = new mo(new sn(_, _)), Le(p, 1), W.position.copy(b), W.quaternion.copy(d), W.scale.set(1, 1, 1), W.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), W.visible = false, w();
  };
  const Oe = new tt();
  Oe.visible = false, y.add(Oe), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; Oe.children.length; ) {
      const _ = Oe.children.pop();
      (_a = _.geometry) == null ? void 0 : _a.dispose(), (_b = _.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, d = Math.max(...n) + t, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", b = (_, p, h, z, X) => {
      const U = document.createElement("canvas");
      U.width = 64, U.height = 32;
      const G = U.getContext("2d");
      G.fillStyle = X, G.font = "bold 22px sans-serif", G.textAlign = "center", G.fillText(_, 32, 26);
      const I = new wo(U), ae = new yo({ map: I, transparent: true }), ue = new xo(ae);
      return ue.position.set(p, h, z), ue.scale.set(1.2, 0.6, 1), ue;
    };
    n.forEach((_, p) => {
      const h = p < u.length ? u[p] : `X${p}`, z = new fe().setFromPoints([new m(_, r, 0), new m(_, s, 0), new m(_, r, 0), new m(_, r, a)]), X = new kn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), U = new Qt(z, X);
      U.computeLineDistances(), Oe.add(U), Oe.add(b(h, _, r - 0.5, 0, "#60a5fa")), Oe.add(b(h, _, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((_, p) => {
      const h = `${p + 1}`, z = new fe().setFromPoints([new m(l, _, 0), new m(d, _, 0), new m(l, _, 0), new m(l, _, a)]), X = new kn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), U = new Qt(z, X);
      U.computeLineDistances(), Oe.add(U), Oe.add(b(h, l - 0.5, _, 0, "#fb7185")), Oe.add(b(h, d + 0.5, _, 0, "#fb7185"));
    }), Oe.visible = true, w();
  }, window.__hekatanHideAxes = () => {
    Oe.visible = false, w();
  };
  const at = new tt();
  at.visible = false, y.add(at);
  let Nt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; at.children.length; ) {
      const s = at.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Nt.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Nt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const d = r[l % r.length], u = o / 2, b = [new m(a - u, t - u, s), new m(a + u, t - u, s), new m(a + u, t + u, s), new m(a - u, t + u, s), new m(a - u, t - u, s)], _ = new fe().setFromPoints(b), p = new ht({ color: d, transparent: true, opacity: 0.55 });
      at.add(new It(_, p));
      const h = document.createElement("canvas");
      h.width = 128, h.height = 32;
      const z = h.getContext("2d");
      z.fillStyle = `#${d.toString(16).padStart(6, "0")}`, z.font = "bold 18px sans-serif", z.fillText(`Z = ${s} m`, 4, 22);
      const X = new wo(h), U = new yo({ map: X, transparent: true }), G = new xo(U);
      G.position.set(a - u - 1.5, t - u - 1.5, s), G.scale.set(2.5, 0.6, 1), at.add(G);
      const I = new sn(1e4, 1e4), ae = new nt({ visible: false, side: Yt }), ue = new Qe(I, ae);
      ue.position.set(0, 0, s), ue.frustumCulled = false, ue.userData = { refPlaneZ: s }, y.add(ue), Nt.push(ue);
    }), at.visible = true, w();
  }, window.__hekatanHideRefPlanes = () => {
    at.visible = false, Nt.forEach((n) => {
      n.visible = false;
    }), w();
  };
  const Zt = new tt();
  Zt.frustumCulled = false, y.add(Zt);
  const Wt = () => {
    var _a, _b, _c, _d;
    for (; Zt.children.length; ) {
      const a = Zt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new fe().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new kn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new It(t, r);
      s.computeLineDistances(), Zt.add(s);
    }
  };
  $.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Wt(), w());
  });
  const xt = new tt();
  xt.frustumCulled = false, y.add(xt);
  const on = () => {
    var _a, _b, _c, _d;
    for (; xt.children.length; ) {
      const a = xt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new Qe(new yn(0.025, 12, 12), new nt({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(ot(t.position)), xt.add(t);
    }
  };
  $.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, on(), w());
  }), c.addEventListener("change", () => {
    xt.children.forEach((n) => {
      n.scale.setScalar(ot(n.position));
    });
  }), window.__hekatanRenderAuxPoints = on;
  const gt = new tt(), zn = new Qe(new yn(0.01, 12, 12), new nt({ color: 16724804, transparent: true, opacity: 0.95 })), xn = new Qe(new yn(0.015, 12, 12), new nt({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  gt.add(zn, xn);
  const Jt = 0.08, gn = (n, o, a) => {
    const t = new fe().setFromPoints([new m(...n), new m(...o)]);
    return new It(t, new ht({ color: a, transparent: true, opacity: 0.7 }));
  };
  gt.add(gn([-Jt, 0, 0], [Jt, 0, 0], 16711680)), gt.add(gn([0, -Jt, 0], [0, Jt, 0], 65280)), gt.add(gn([0, 0, -Jt], [0, 0, Jt], 35071)), gt.visible = false, gt.frustumCulled = false, y.add(gt);
  const Fn = 40, Nn = 2.5, vn = () => {
    if (!gt.visible) return;
    const o = f().position.distanceTo(gt.position), a = Math.max(0.05, Math.min(Nn, o / Fn));
    gt.scale.setScalar(a);
  }, An = () => {
    Ze.children.length !== 0 && Ze.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(ot(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = An, c.addEventListener("change", () => {
    vn(), We.visible && dn();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = f().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / Fn));
    }
    An();
  }), window.__hekatanShowSnap = (n, o, a) => {
    gt.position.set(n, o, a), gt.visible = true, vn(), w();
  }, window.__hekatanHideSnap = () => {
    gt.visible = false, w();
  }, x.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = H();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) ro(s.type, s.x, s.y, s.z), gt.position.set(s.x, s.y, s.z), gt.visible = true, t.set(s.x, s.y, s.z);
      else {
        Zn();
        const _ = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0.5;
        _ && p > 0 && (t.x = Math.round(t.x / p) * p, t.y = Math.round(t.y / p) * p, t.z = Math.round(t.z / p) * p), gt.position.copy(t), gt.visible = true;
      }
      vn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const _ = (window.__hekatanSnap2D ?? 0.5) * 1.5, p = Xe(t.x, t.y, t.z, _), h = Re(t.x, t.y, t.z, _), z = ye(t.x, t.y, t.z, _);
        if (p >= 0) {
          const I = e.points.rawVal[p];
          We.position.set(I[0], I[1], I[2]), We.visible = true, dn(), _e.visible = false, _t = { kind: "pt", a: p };
        } else if (h) {
          const I = e.points.rawVal, ae = e.polylines.rawVal[h.polyIdx], ue = I[ae[h.segIdx]], Ce = I[ae[h.segIdx + 1]];
          _e.geometry.setFromPoints([new m(ue[0], ue[1], ue[2]), new m(Ce[0], Ce[1], Ce[2])]), _e.visible = true, We.visible = false, _t = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(h.polyIdx)) ?? false ? { kind: "poly", a: h.polyIdx } : { kind: "seg", a: h.polyIdx, b: h.segIdx };
        } else if (z >= 0) {
          const ae = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[z];
          ae && (_e.geometry.setFromPoints([new m(ae[0], ae[1], ae[2]), new m(ae[3], ae[4], ae[5])]), _e.visible = true, We.visible = false, _t = { kind: "aux", a: z });
        } else _e.visible = false, We.visible = false, _t = null;
        oe.style.left = n.clientX + "px", oe.style.top = n.clientY + "px", oe.style.display = "block";
        let X = t;
        if ((_t == null ? void 0 : _t.kind) === "pt") {
          const I = e.points.rawVal[_t.a];
          I && (X = new m(I[0], I[1], I[2]));
        }
        const U = `X=${X.x.toFixed(2)} Y=${X.y.toFixed(2)} Z=${X.z.toFixed(2)}`;
        if (_t) {
          const I = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          oe.textContent = `${U}  \xB7  \u{1F5B1} Click \u2192 ${I[_t.kind]}`;
        } else oe.textContent = U;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = U), Y.visible = false, Ae.visible = false, w();
        return;
      }
      if (l === "delete") {
        const _ = (window.__hekatanSnap2D ?? 0.5) * 1.5, p = Re(t.x, t.y, t.z, _), h = ye(t.x, t.y, t.z, _);
        let z = false;
        if (h >= 0) if (!p) z = true;
        else {
          const I = window.__hekatanDrawingAuxLines, ue = ((I == null ? void 0 : I.rawVal) ?? (I == null ? void 0 : I.val) ?? I ?? [])[h];
          we(t.x, t.y, t.z, ue[0], ue[1], ue[2], ue[3], ue[4], ue[5]) < p.dist && (z = true);
        }
        z ? (Be = h, yt = -1, dt = -1, st(h)) : p ? (yt = p.polyIdx, dt = p.segIdx, Be = -1, pt(p.polyIdx, p.segIdx)) : (yt = -1, dt = -1, Be = -1, be.visible = false), Y.visible = false, Ae.visible = false, V(), oe.style.left = n.clientX + "px", oe.style.top = n.clientY + "px", oe.style.display = "block";
        const X = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let U = "";
        z ? U = `\u{1F5D1} l\xEDnea aux #${Be + 1}` : p ? U = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(p.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${p.polyIdx + 1}` : `\u{1F5D1} seg ${p.segIdx + 1} / poly #${p.polyIdx + 1}` : U = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", oe.textContent = `${X}  \xB7  ${U}`;
        const G = document.getElementById("hk-coord-fixed");
        G && (G.textContent = X), w();
        return;
      } else be.visible = false, yt = -1, Be = -1;
      oe.style.left = n.clientX + "px", oe.style.top = n.clientY + "px", oe.style.display = "block";
      const d = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], u = d[d.length - 1] ?? [], b = e.points.rawVal ?? [];
      if (u.length > 0 && b[u[u.length - 1]]) {
        const _ = u[u.length - 1], p = b[_];
        let h = J;
        if (Se = null, !h && window.__hekatanAxisSnap !== false) {
          const $e = x.getBoundingClientRect(), ft = n.clientX, it = n.clientY, bt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Tt = new m(p[0], p[1], p[2]), tn = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], Gt = (Ut) => {
            const Lt = Ut.clone().project(o);
            return { x: (Lt.x * 0.5 + 0.5) * $e.width + $e.left, y: (-Lt.y * 0.5 + 0.5) * $e.height + $e.top };
          };
          let Ft = null;
          for (const [Ut, Lt] of tn) {
            const xe = Gt(Tt.clone().addScaledVector(Lt, -bt)), Ie = Gt(Tt.clone().addScaledVector(Lt, bt)), et = Ie.x - xe.x, Kt = Ie.y - xe.y, nn = ft - xe.x, mn = it - xe.y, _n2 = et * et + Kt * Kt || 1;
            let wn = (nn * et + mn * Kt) / _n2;
            wn = Math.max(0, Math.min(1, wn));
            const Sn = Math.hypot(ft - (xe.x + wn * et), it - (xe.y + wn * Kt));
            if (Ft === null || Sn < Ft.dpx) {
              const Hn = M.ray, uo = Tt.clone().sub(Hn.origin), Wn = Lt.dot(Hn.direction), fo = Lt.dot(uo), Yo = Hn.direction.dot(uo), ho = 1 - Wn * Wn, Do = Math.abs(ho) < 1e-6 ? -fo : (Wn * Yo - fo) / ho;
              Ft = { axis: Ut, dpx: Sn, pt: Tt.clone().addScaledVector(Lt, Do) };
            }
          }
          Ft && Ft.dpx <= 12 && (t.copy(Ft.pt), h = Ft.axis, Se = Ft.pt.clone());
        }
        const z = !!window.__hekatanOrthoMode;
        if (!h && z) {
          const $e = Math.abs(t.x - p[0]), ft = Math.abs(t.y - p[1]), it = Math.abs(t.z - p[2]), bt = (_l = a[0]) == null ? void 0 : _l.object;
          let Tt = null;
          bt === De ? Tt = "xy" : bt === wt ? Tt = "xz" : bt === ct && (Tt = "yz"), Tt === "xy" ? h = $e >= ft ? "x" : "y" : Tt === "xz" ? h = $e >= it ? "x" : "z" : Tt === "yz" ? h = ft >= it ? "y" : "z" : h = $e >= ft && $e >= it ? "x" : ft >= it ? "y" : "z";
        }
        const X = window.__hekatanPolarTrack !== false;
        if (!h && X) {
          const $e = t.x - p[0], ft = t.y - p[1], it = t.z - p[2], bt = Math.hypot($e, ft, it);
          if (bt > 1e-3) {
            const tn = Math.tan(6 * Math.PI / 180) * bt, Gt = Math.hypot(ft, it), Ft = Math.hypot($e, it), Ut = Math.hypot($e, ft), Lt = [["x", Gt], ["y", Ft], ["z", Ut]];
            Lt.sort((xe, Ie) => xe[1] - Ie[1]), Lt[0][1] <= tn && (h = Lt[0][0]);
          }
        }
        if (h) {
          const $e = p[0], ft = p[1], it = p[2];
          h === "x" ? t.set(t.x, ft, it) : h === "y" ? t.set($e, t.y, it) : t.set($e, ft, t.z);
          const bt = !!J, tn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[h];
          Q.style.background = "rgba(15,23,42,0.92)", Q.style.color = tn, Q.style.border = `1.5px solid ${tn}`;
          const Gt = (_m = a[0]) == null ? void 0 : _m.object;
          let Ft = null;
          Gt === De ? Ft = "xy" : Gt === wt ? Ft = "xz" : Gt === ct && (Ft = "yz");
          const Ut = Ft ? ` (plano ${Ft.toUpperCase()})` : "";
          Q.textContent = bt ? `\u{1F512} LOCK ${h.toUpperCase()}${Ut}` : `\u22A5 ORTO ${h.toUpperCase()}${Ut}`, Q.style.left = n.clientX + 20 + "px", Q.style.top = n.clientY + 18 + "px", Q.style.transform = "none", Q.style.display = "block";
        } else J || (Q.style.display = "none");
        const U = Math.hypot(t.x - p[0], t.y - p[1], t.z - p[2]), G = Math.atan2(t.y - p[1], t.x - p[0]) * 180 / Math.PI, I = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        oe.textContent = `${I} | \u0394L=${U.toFixed(2)}m ${G.toFixed(0)}\xB0`;
        const ae = document.getElementById("hk-coord-fixed");
        ae && (ae.textContent = I), Y.geometry.setFromPoints([new m(p[0], p[1], p[2]), new m(t.x, t.y, t.z)]), (_n = Y.computeLineDistances) == null ? void 0 : _n.call(Y), Y.visible = true, F(p[0], p[1], p[2], t.x, t.y, t.z);
        const ue = window.__hekatanOrthoExt ?? 8, Ce = window.__hekatanShowOrthoPlanes !== false;
        Ye.visible = Ce, Ce || Ot(null), Ce && (N(le, p, "xy", ue), N(de, p, "xz", ue), N(Te, p, "yz", ue), Bt(De, p, "xy", ue), Bt(wt, p, "xz", ue), Bt(ct, p, "yz", ue));
        const me = Ce ? M.intersectObjects([De, wt, ct], false) : [];
        let Fe = null;
        if (me.length > 0) {
          const $e = me[0].object;
          $e === De ? Fe = "xy" : $e === wt ? Fe = "xz" : $e === ct && (Fe = "yz");
        }
        Ot(Fe), Fe && (zt.style.left = n.clientX + "px", zt.style.top = n.clientY + "px"), Ct.geometry.setFromPoints([new m(p[0] - ue, p[1], p[2]), new m(p[0] + ue, p[1], p[2])]), (_o2 = Ct.computeLineDistances) == null ? void 0 : _o2.call(Ct), rt.geometry.setFromPoints([new m(p[0], p[1] - ue, p[2]), new m(p[0], p[1] + ue, p[2])]), (_p = rt.computeLineDistances) == null ? void 0 : _p.call(rt), L.geometry.setFromPoints([new m(p[0], p[1], p[2] - ue), new m(p[0], p[1], p[2] + ue)]), (_q = L.computeLineDistances) == null ? void 0 : _q.call(L), Ae.visible = true;
        const ut = Ct.material, vt = rt.material, qe = L.material;
        h === "x" ? (ut.opacity = 0.95, vt.opacity = 0.1, qe.opacity = 0.1) : h === "y" ? (ut.opacity = 0.1, vt.opacity = 0.95, qe.opacity = 0.1) : h === "z" ? (ut.opacity = 0.1, vt.opacity = 0.1, qe.opacity = 0.95) : (ut.opacity = 0.5, vt.opacity = 0.5, qe.opacity = 0.5);
      } else {
        const _ = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        oe.textContent = _;
        const p = document.getElementById("hk-coord-fixed");
        if (p && (p.textContent = _), Y.visible = false, Ae.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (Z = null, B = null, q.style.left = n.clientX + 20 + "px", q.style.top = n.clientY - 28 + "px", q.style.display = "block", !T) {
            q.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const z = document.activeElement;
            !(z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA") && z !== q) && document.activeElement !== q && q.focus({ preventScroll: true });
            try {
              q.select();
            } catch {
            }
          }
        } else V();
      }
      w();
    } else Zn(), oe.style.display = "none", gt.visible = false, Y.visible = false, Ae.visible = false, V(), w();
  }), $.derive(() => {
    if (!e.gridTarget) return;
    bs(i, { position: new m(...e.gridTarget.val.position), quaternion: new qn().setFromEuler(new Tn(...e.gridTarget.val.rotation)) }, w), K.position.set(...e.gridTarget.val.position), K.quaternion.setFromEuler(new Tn(...e.gridTarget.val.rotation)), K.updateMatrixWorld();
    const n = new m(0, 0, 1).applyEuler(new Tn(...e.gridTarget.val.rotation));
    k = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), $.derive(() => {
    pe.geometry.setAttribute("position", new $t(e.points.val.flat(), 3)), pe.geometry.computeBoundingSphere();
  }), $.derive(() => {
    const n = 0.05 * S * 0.5 * g.val;
    M.params.Points.threshold = 0.4 * n;
  }), $.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, d, u] = n[s];
      t.push(l, d, u);
    }
    const r = new fe();
    r.setAttribute("position", new $t(t, 3)), ge.geometry.dispose(), ge.geometry = r;
  });
  let pn = false, jt = 0;
  x.addEventListener("pointerdown", () => {
    pn = true;
  }), x.addEventListener("pointerup", () => {
    pn = false;
  }), x.addEventListener("pointermove", () => {
    pn && jt++;
  });
  const St = document.createElement("div");
  St.id = "hk-window-select", St.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(St);
  let Dt = null, an = false, Et = null;
  const un = (n, o, a, t, r) => {
    r ? (St.style.borderColor = "#34d399", St.style.borderStyle = "dashed", St.style.background = "rgba(52, 211, 153, 0.10)") : (St.style.borderColor = "#22d3ee", St.style.borderStyle = "solid", St.style.background = "rgba(34, 211, 238, 0.10)"), St.style.left = Math.min(n, a) + "px", St.style.top = Math.min(o, t) + "px", St.style.width = Math.abs(a - n) + "px", St.style.height = Math.abs(t - o) + "px", St.style.display = "block";
  }, ao = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), d = Math.min(o, t), u = Math.max(o, t), b = a < n, _ = x.getBoundingClientRect(), p = f();
    p.updateMatrixWorld();
    const h = (me) => {
      const Fe = new m(me[0], me[1], me[2]);
      return Fe.project(p), { x: _.left + (Fe.x * 0.5 + 0.5) * _.width, y: _.top + (-Fe.y * 0.5 + 0.5) * _.height };
    }, z = (me) => me.x >= s && me.x <= l && me.y >= d && me.y <= u, X = (me, Fe) => !(me.x < s && Fe.x < s || me.x > l && Fe.x > l || me.y < d && Fe.y < d || me.y > u && Fe.y > u);
    r || ze.clear();
    let U = 0;
    const G = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let me = 0; me < G.length; me++) {
      const Fe = G[me];
      Fe && z(h(Fe)) && (ze.add(`pt:${me}`), U++);
    }
    const I = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ae = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let me = 0; me < I.length; me++) {
      const Fe = I[me], ut = ae.includes(me);
      let vt = false;
      for (let qe = 0; qe < Fe.length - 1; qe++) {
        const $e = G[Fe[qe]], ft = G[Fe[qe + 1]];
        if (!$e || !ft) continue;
        const it = h($e), bt = h(ft);
        if (z(it) || z(bt) || X(it, bt)) {
          if (ut) {
            vt = true;
            break;
          }
          ze.add(`seg:${me}:${qe}`), U++;
        }
      }
      ut && vt && (ze.add(`poly:${me}`), U++);
    }
    const Ce = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let me = 0; me < Ce.length; me++) {
      const Fe = Ce[me];
      if (!Fe || Fe.length !== 6) continue;
      const ut = h([Fe[0], Fe[1], Fe[2]]), vt = h([Fe[3], Fe[4], Fe[5]]);
      (z(ut) || z(vt) || X(ut, vt)) && (ze.add(`aux:${me}`), U++);
    }
    ke(), re(`${b ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${U} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${ze.size})`), St.style.display = "none";
  }, En = () => {
    Et && (Et = null, St.style.display = "none", re("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = En, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Et && En();
  });
  const io = () => {
    var _a, _b, _c, _d;
    if (ze.size === 0) return false;
    const n = [...ze], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set();
    for (const X of n) {
      const [U, ...G] = X.split(":");
      if (U === "pt") l.add(+G[0]);
      else if (U === "poly") d.add(+G[0]);
      else if (U === "seg") {
        const I = +G[0], ae = +G[1];
        u.has(I) || u.set(I, /* @__PURE__ */ new Set()), u.get(I).add(ae);
      } else U === "aux" && b.add(+G[0]);
    }
    let _ = 0, p = [], h = [];
    const z = /* @__PURE__ */ new Map();
    for (let X = 0; X < a.length; X++) {
      if (d.has(X)) {
        _++;
        continue;
      }
      z.set(X, p.length);
      const U = u.get(X);
      if (U && U.size > 0) {
        let G = [];
        for (let I = 0; I < a[X].length; I++) G.push(a[X][I]), I < a[X].length - 1 && U.has(I) && (G.length >= 2 && p.push(G), G = [], _++);
        (G.length >= 2 || G.length === 1) && p.push(G);
      } else p.push([...a[X]]);
    }
    if (l.size > 0) {
      const X = [], U = /* @__PURE__ */ new Map();
      for (let I = 0; I < o.length; I++) {
        if (l.has(I)) {
          _++;
          continue;
        }
        U.set(I, X.length), X.push([...o[I]]);
      }
      const G = [];
      for (const I of p) {
        let ae = [];
        for (const ue of I) {
          const Ce = U.get(ue);
          Ce === void 0 ? (ae.length >= 2 && G.push(ae), ae = []) : ae.push(Ce);
        }
        ae.length >= 2 && G.push(ae);
      }
      p = G, e.points.val = X;
    }
    for (const X of t) {
      const U = z.get(X);
      U !== void 0 && U < p.length && h.push(U);
    }
    if (e.polylines && (e.polylines.val = p), e.areas && (e.areas.val = h), b.size > 0 && r) {
      const X = s.filter((U, G) => !b.has(G));
      "val" in r ? r.val = X : window.__hekatanDrawingAuxLines = X, _ += b.size;
    }
    ze.clear(), ke();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return re(`\u{1F5D1} ${_} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = io, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || ze.size !== 0 && (n.preventDefault(), io());
  });
  const Xt = document.createElement("div");
  Xt.id = "hk-properties-pane";
  const lo = "hk-props-pane-pos";
  let fn = null;
  try {
    const n = localStorage.getItem(lo);
    n && (fn = JSON.parse(n));
  } catch {
  }
  Xt.style.cssText = ["position:fixed", fn ? `left:${fn.left}px` : "left:50%", fn ? `top:${fn.top}px` : "top:8px", fn ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Xt);
  const Io = () => {
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
      const d = l.clientX - a, u = l.clientY - t, b = Math.max(0, Math.min(window.innerWidth - 80, r + d)), _ = Math.max(0, Math.min(window.innerHeight - 40, s + u));
      Xt.style.left = `${b}px`, Xt.style.top = `${_}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(lo, JSON.stringify({ left: parseFloat(Xt.style.left), top: parseFloat(Xt.style.top) }));
        } catch {
        }
      }
    });
  }, R = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let je = null;
  const kt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, $o = () => {
    if (je && (je.dispose(), je = null), ze.size === 0) {
      Xt.style.display = "none";
      return;
    }
    const n = [...ze], o = n.filter((p) => p.startsWith("pt:")), a = n.filter((p) => p.startsWith("seg:")), t = n.filter((p) => p.startsWith("poly:")), r = n.filter((p) => p.startsWith("aux:")), s = o.length > 0, l = a.length > 0, d = t.length > 0, u = !s && !l && !d, b = [];
    o.length && b.push(`\u{1F535} ${o.length} nodo(s)`), a.length && b.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && b.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && b.push(`\u250A ${r.length} aux`);
    const _ = `\u{1F3AF} ${ze.size} item(s) \u2014 ${b.join(", ")}`;
    if (je = new Fo({ container: Xt, title: _ }), s) {
      const p = je.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      p.addBinding(R, "Ux"), p.addBinding(R, "Uy"), p.addBinding(R, "Uz"), p.addBinding(R, "Rx"), p.addBinding(R, "Ry"), p.addBinding(R, "Rz");
      const h = je.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      h.addBinding(R, "Kx", { label: "Kx", min: 0, step: 100 }), h.addBinding(R, "Ky", { label: "Ky", min: 0, step: 100 }), h.addBinding(R, "Kz", { label: "Kz", min: 0, step: 100 }), h.addBinding(R, "Krx", { label: "Krx", min: 0, step: 1e3 }), h.addBinding(R, "Kry", { label: "Kry", min: 0, step: 1e3 }), h.addBinding(R, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const z = je.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      z.addBinding(R, "Fx", { step: 0.1 }), z.addBinding(R, "Fy", { step: 0.1 }), z.addBinding(R, "Fz", { step: 0.1 }), z.addBinding(R, "Mx", { step: 0.1 }), z.addBinding(R, "My", { step: 0.1 }), z.addBinding(R, "Mz", { step: 0.1 }), je.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(R, "mass", { label: "m", min: 0, step: 1 }), je.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(R, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), je.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let G = 0;
        const I = [R.Ux, R.Uy, R.Uz, R.Rx, R.Ry, R.Rz];
        I.some((Ce) => Ce) && (kt("nodes", o, "supports", I), G++);
        const ae = [R.Fx, R.Fy, R.Fz, R.Mx, R.My, R.Mz];
        ae.some((Ce) => Ce !== 0) && (kt("nodes", o, "loads", ae), G++);
        const ue = [R.Kx, R.Ky, R.Kz, R.Krx, R.Kry, R.Krz];
        if (ue.some((Ce) => Ce !== 0) && (kt("nodes", o, "springs", ue), G++), R.mass !== 0 && (kt("nodes", o, "mass", R.mass), G++), R.diaphragm !== "Ninguno" && (kt("nodes", o, "diaphragm", R.diaphragm), G++), G === 0) {
          re("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let Ce = document.getElementById("hk-prop-toast");
          Ce || (Ce = document.createElement("div"), Ce.id = "hk-prop-toast", Ce.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(Ce)), Ce.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", Ce.style.background = "rgba(217,119,6,0.97)", Ce.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            Ce && (Ce.style.opacity = "0");
          }, 3200);
        } else re(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const p = je.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      p.addBinding(R, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), p.addBinding(R, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const h = je.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      h.addBinding(R, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), h.addBinding(R, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), h.addBinding(R, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), h.addBinding(R, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), je.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(R, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), je.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(R, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const U = je.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      U.addBinding(R, "relMxI", { label: "Mx I" }), U.addBinding(R, "relMyI", { label: "My I" }), U.addBinding(R, "relMzI", { label: "Mz I" });
      const G = je.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      G.addBinding(R, "relMxJ", { label: "Mx J" }), G.addBinding(R, "relMyJ", { label: "My J" }), G.addBinding(R, "relMzJ", { label: "Mz J" }), je.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(R, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ae = je.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ae.addBinding(R, "LKx", { label: "LKx", min: 0, step: 100 }), ae.addBinding(R, "LKy", { label: "LKy", min: 0, step: 100 }), ae.addBinding(R, "LKz", { label: "LKz", min: 0, step: 100 });
      const ue = je.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      ue.addBinding(R, "qx", { step: 0.1 }), ue.addBinding(R, "qy", { step: 0.1 }), ue.addBinding(R, "qz", { step: 0.1 }), je.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(R, "massPerM", { label: "m/L", min: 0, step: 1 }), je.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        kt("segs", a, "section", R.section), kt("segs", a, "material", R.material_frame);
        const me = { A: R.A_mod, Iz: R.Iz_mod, Iy: R.Iy_mod, J: R.J_mod };
        (me.A !== 1 || me.Iz !== 1 || me.Iy !== 1 || me.J !== 1) && kt("segs", a, "modifiers", me), R.insertionPoint !== "10 \u2014 Centroid" && kt("segs", a, "insertionPoint", R.insertionPoint), R.beta !== 0 && kt("segs", a, "beta", R.beta);
        const Fe = [R.relMxI, R.relMyI, R.relMzI], ut = [R.relMxJ, R.relMyJ, R.relMzJ];
        (Fe.some(($e) => $e) || ut.some(($e) => $e)) && kt("segs", a, "releases", { i: Fe, j: ut }), R.hinges !== "None" && kt("segs", a, "hinges", R.hinges);
        const vt = [R.LKx, R.LKy, R.LKz];
        vt.some(($e) => $e !== 0) && kt("segs", a, "lineSprings", vt);
        const qe = [R.qx, R.qy, R.qz];
        qe.some(($e) => $e !== 0) && kt("segs", a, "distLoad", qe), R.massPerM !== 0 && kt("segs", a, "massPerM", R.massPerM), re(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (d) {
      const p = je.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      p.addBinding(R, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), p.addBinding(R, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), p.addBinding(R, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), je.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(R, "surfLoad", { label: "q", step: 0.1 }), je.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        kt("areas", t, "shellType", R.shellType), kt("areas", t, "thickness", R.thickness), kt("areas", t, "material", R.material_shell), R.surfLoad !== 0 && kt("areas", t, "surfLoad", R.surfLoad), re(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (u) {
      const p = je.addFolder({ title: "\u2139 Selecci\xF3n" }), h = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      p.addBinding(h, "msg", { readonly: true, label: "" });
    }
    je.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      ze.clear(), ke();
    }), Xt.style.display = "block", Io();
  };
  window.__hekatanRefreshPropsPane = $o;
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
        if (Et ? En() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), ze.size > 0 && (ze.clear(), ke()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), re(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : re("\u238B Cancelado (click derecho)");
      }
    }
  }), x.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), x.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Dt = { x: n.clientX, y: n.clientY }, an = false);
  }), x.addEventListener("pointermove", (n) => {
    if (Et && n.buttons === 0) {
      const s = n.clientX < Et.x;
      un(Et.x, Et.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Dt) return;
    const o = n.clientX - Dt.x, a = n.clientY - Dt.y, t = Math.hypot(o, a);
    if (!an && t < 8) return;
    an = true;
    const r = n.clientX < Dt.x;
    un(Dt.x, Dt.y, n.clientX, n.clientY, r);
  }), x.addEventListener("pointerup", (n) => {
    if (!Dt) return;
    if (!an) {
      Dt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    ao(Dt.x, Dt.y, n.clientX, n.clientY, o), Dt = null, an = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const en = new tt();
  en.visible = false, en.frustumCulled = false, y.add(en);
  const Ro = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, ro = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; en.children.length; ) {
      const d = en.children.pop();
      (_b = (_a = d.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = d.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Ro[n] ?? 16777215, s = 0.05, l = new fe().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    en.add(new Qt(l, new ht({ color: r, linewidth: 2 }))), en.position.set(0, 0, 0), en.visible = true;
  }, Zn = () => {
    en.visible = false;
  }, Bo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let d = null;
    const u = (p, h, z, X) => {
      const U = Math.hypot(h - n, z - o, X - a);
      U > t || (!d || U < d.d) && (d = { type: p, x: h, y: z, z: X, d: U });
    };
    (r.node || r.end) && s.forEach((p) => {
      r.node && u("node", p[0], p[1], p[2]);
    });
    for (const p of l) if (!(p.length < 2)) for (let h = 0; h < p.length - 1; h++) {
      const z = s[p[h]], X = s[p[h + 1]];
      if (!(!z || !X) && (r.end && (u("end", z[0], z[1], z[2]), u("end", X[0], X[1], X[2])), r.mid && u("mid", (z[0] + X[0]) / 2, (z[1] + X[1]) / 2, (z[2] + X[2]) / 2), r.nea || r.per)) {
        const U = X[0] - z[0], G = X[1] - z[1], I = X[2] - z[2], ae = U * U + G * G + I * I;
        if (ae < 1e-12) continue;
        const ue = Math.max(0, Math.min(1, ((n - z[0]) * U + (o - z[1]) * G + (a - z[2]) * I) / ae)), Ce = z[0] + ue * U, me = z[1] + ue * G, Fe = z[2] + ue * I;
        r.nea && u("nea", Ce, me, Fe), r.per && u("per", Ce, me, Fe);
      }
    }
    const b = window.__hekatanDrawingAuxLines, _ = (b == null ? void 0 : b.rawVal) ?? (b == null ? void 0 : b.val) ?? b ?? [];
    for (const p of _) {
      if (p.length !== 6) continue;
      const h = [p[0], p[1], p[2]], z = [p[3], p[4], p[5]];
      if (r.end && (u("end", h[0], h[1], h[2]), u("end", z[0], z[1], z[2])), r.mid && u("mid", (h[0] + z[0]) / 2, (h[1] + z[1]) / 2, (h[2] + z[2]) / 2), r.nea || r.per) {
        const X = z[0] - h[0], U = z[1] - h[1], G = z[2] - h[2], I = X * X + U * U + G * G;
        if (I < 1e-12) continue;
        const ae = Math.max(0, Math.min(1, ((n - h[0]) * X + (o - h[1]) * U + (a - h[2]) * G) / I)), ue = h[0] + ae * X, Ce = h[1] + ae * U, me = h[2] + ae * G;
        r.nea && u("nea", ue, Ce, me), r.per && u("per", ue, Ce, me);
      }
    }
    return d ? { type: d.type, x: d.x, y: d.y, z: d.z } : null;
  };
  window.__hekatanOsnapCompute = Bo, window.__hekatanOsnapShow = ro, window.__hekatanOsnapHide = Zn;
  let Ee = [], Vt = 0;
  const bn = document.createElement("div");
  bn.id = "hk-cad-status", bn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", bn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(bn);
  const Xo = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), J && n.push(`\u{1F512} LOCK ${J.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, re = (n) => {
    const o = n + Xo();
    bn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    re(o);
  }, window.__hekatanCadResetPending = () => {
    Ee = [], ie = [], ee.visible = false, w(), re("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const Mn = [], ln = () => {
    var _a, _b;
    Mn.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), Mn.length > 100 && Mn.shift();
  }, co = () => {
    var _a;
    const n = Mn.pop();
    if (!n) {
      re("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ee = [], Y.visible = false, Ae.visible = false, V(), re(`\u21B6 Undo \u2014 ${Mn.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    w();
  };
  window.__hekatanPushUndo = ln, window.__hekatanUndo = co, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), co();
    }
  }, { capture: true });
  const po = () => {
    if (Ee = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    J = null, Ke(), Y.visible = false, Ae.visible = false, V(), re("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), w();
  };
  window.__hekatanFinalizeDraw = po, x.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    if (jt > 5) {
      jt = 0;
      return;
    }
    jt = 0;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = H();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(c.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), d = a[0].point;
      if (!isFinite(d.x) || !isFinite(d.y) || !isFinite(d.z) || l > Math.max(s * 12, 300)) {
        re("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
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
          let _ = J;
          if (!_ && b) {
            const p = Math.abs(t.x - u[0]), h = Math.abs(t.y - u[1]), z = Math.abs(t.z - u[2]);
            _ = p >= h && p >= z ? "x" : h >= z ? "y" : "z";
          }
          _ === "x" ? t = new m(t.x, u[1], u[2]) : _ === "y" ? t = new m(u[0], t.y, u[2]) : _ === "z" && (t = new m(u[0], u[1], t.z));
        }
      }
    }
    if (Se) t = Se.clone(), re(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new m(l.x, l.y, l.z), re(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const d = window.__hekatanSnapEnabled !== false, u = window.__hekatanSnap2D ?? 0;
        d && u > 0 && (t = new m(Math.round(t.x / u) * u, Math.round(t.y / u) * u, Math.round(t.z / u) * u));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (_t) {
        Et && En();
        const { kind: s, a: l, b: d } = _t, u = d !== void 0 ? `${s}:${l}:${d}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || ze.clear(), ze.has(u) ? ze.delete(u) : ze.add(u), ke(), re(`\u2713 Seleccionados ${ze.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, d = n.clientY;
        Et ? (ao(Et.x, Et.y, l, d, s), Et = null) : s || (Et = { x: l, y: d }, re("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), un(l, d, l + 1, d + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], re(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", d = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      re(`\u2713 Eje "${d}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (Be >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], d = Be;
        if (d >= 0 && d < l.length) {
          ln();
          const u = l.slice(0, d).concat(l.slice(d + 1));
          s && typeof s == "object" && "val" in s ? s.val = u : window.__hekatanDrawingAuxLines = u, re(`\u{1F5D1} L\xEDnea auxiliar #${d + 1} borrada`), Be = -1, be.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (yt >= 0) {
        const s = yt, l = dt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (Rt(s), re(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (Ue(s, l), re(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (Rt(s), re(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else re("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ee, d = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const u = Math.abs(l[1] - s[1]), _ = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : u < 1e-3 ? "xz" : "yz", p = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], d, p, _), re(`\u2713 C\xEDrculo dibujado en ${_.toUpperCase()} \u2014 r=${d.toFixed(2)}m, ${p} segmentos`), Ee = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ee.length === 2) {
        re("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, d] = Ee, u = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, d, u), re(`\u2713 Arco dibujado \u2014 ${u} segmentos`), Ee = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_n = window.__hekatanDrawRect) == null ? void 0 : _n.call(window, s, l), re(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), re(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ee = [];
      return;
    }
    if (r === "polyarea") {
      ie.push([t.x, t.y, t.z]), ee.geometry.setFromPoints(ie.map((s) => new m(s[0], s[1], s[2]))), ee.visible = ie.length >= 1, re(`\u25B0 \xC1rea libre \u2014 ${ie.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), w();
      return;
    }
    if (r === "plane3") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length < 3) {
        re(`\u25E3 Plano inclinado \u2014 punto ${Ee.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, d] = Ee, u = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, d);
      re(u ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ee = [];
      return;
    }
    if (r === "col") {
      ln();
      const s = t.z, l = Vt && Vt > 0 ? Vt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const d = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [u - 2, u - 1], []], Vt = 0, re(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Ee, d = Vt && Vt > 0 ? Vt : 3;
      ln();
      const u = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + d], [s[0], s[1], s[2] + d]];
      const b = e.polylines.rawVal;
      if (b.length - 1, e.polylines.val = [...b.slice(0, -1), ...b[b.length - 1].length > 0 ? [b[b.length - 1]] : [], [u, u + 1, u + 2, u + 3, u], []], e.areas) {
        const _ = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, _];
      }
      re(`\u25A5 Pared Q4 creada \u2014 h=${d.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ee = [], Vt = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      ln();
      const s = Vt && Vt > 0 ? Vt : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const d = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...d.slice(0, -1), ...d[d.length - 1].length > 0 ? [d[d.length - 1]] : [], [u - 2, u - 1], []], Vt = 0, re(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = Re(t.x, t.y, t.z, s);
      if (!l) {
        re("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const d = e.polylines.rawVal, u = e.points.rawVal, b = d[l.polyIdx], _ = u[b[l.segIdx]], p = u[b[l.segIdx + 1]];
      if (!_ || !p) {
        re("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const h = Vt && Vt > 0 ? Vt : 3;
      ln();
      const z = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [_[0], _[1], _[2]], [p[0], p[1], p[2]], [p[0], p[1], p[2] + h], [_[0], _[1], _[2] + h]];
      const X = e.polylines.rawVal;
      if (e.polylines.val = [...X.slice(0, -1), ...X[X.length - 1].length > 0 ? [X[X.length - 1]] : [], [z, z + 1, z + 2, z + 3, z], []], e.areas) {
        const U = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, U];
      }
      Vt = 0, re(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${h.toFixed(2)}m`);
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
      re(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Ee, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const h = d.rawVal ?? d.val ?? [];
        d.val = [...h, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const u = l[0] - s[0], b = l[1] - s[1], _ = l[2] - s[2], p = Math.sqrt(u * u + b * b + _ * _);
      re(`\u2713 L\xEDnea auxiliar creada \u2014 L=${p.toFixed(2)}m (cyan, no FEM)`), Ee = [];
      return;
    }
    if (r === "extend") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ee, d = window.__hekatanDrawingAuxLines;
      if (d) {
        const u = d.rawVal ?? d.val ?? [];
        d.val = [...u, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      re("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ee = [];
      return;
    }
    if (r === "chaflan") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee, d = window.__hekatanChaflanR ?? 1, u = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, d, u, 6);
      const b = Math.abs(l[0] - s[0]).toFixed(1), _ = Math.abs(l[1] - s[1]).toFixed(1);
      re(`\u2713 Losa con chaflanes dibujada \u2014 ${b}\xD7${_}m, r=${d}m, ${u} seg/chafl\xE1n`), Ee = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (T = false, ln(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, d = s[l] ?? [];
      if (r === "line" && d.length === 2) {
        e.polylines.val = [...s, []], re("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && d.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...d, d[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), re("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") re(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") re("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") re("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      re(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), x.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && ie.length >= 3) {
      n.preventDefault();
      const a = Ge();
      re(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), x.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    const a = H();
    if (ne.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], d = l[l.length - 1] ?? [], u = e.points.rawVal ?? [];
        if (d.length > 0) {
          const b = u[d[d.length - 1]];
          if (b) {
            const _ = !!window.__hekatanOrthoMode;
            let p = J;
            if (!p && _) {
              const h = Math.abs(t.x - b[0]), z = Math.abs(t.y - b[1]), X = Math.abs(t.z - b[2]);
              p = h >= z && h >= X ? "x" : z >= X ? "y" : "z";
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
      ne.geometry.setAttribute("position", new $t(t.toArray(), 3));
    }
    w();
  }), x.addEventListener("pointermove", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(pe), r = H();
    if (t.length && r.length) {
      const s = new m(...e.points.rawVal[t[0].index]), l = new m(...r[0].point), d = s.sub(l), u = (_a = r[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(K.matrixWorld), Math.abs(d.dot(u)) < 1e-4 && (a = true);
    }
    ne.visible = !a;
  });
  let Un = false, Kn;
  x.addEventListener("pointermove", (n) => {
    var _a;
    if (!jt) return;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(pe), r = H();
    if (t.length && r.length) {
      const l = new m(...e.points.rawVal[t[0].index]), d = new m(...r[0].point), u = l.sub(d), b = (_a = r[0].face) == null ? void 0 : _a.normal;
      b.transformDirection(K.matrixWorld), Math.abs(u.dot(b)) < 1e-4 && (a = true);
    }
    if (a && jt < 5 && (Un = true, c.enabled = false, Kn = t[0].index), !Un || jt % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Kn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new m(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Kn] = l.toArray();
    }
    e.points.val = s;
  }), x.addEventListener("pointerup", () => {
    c.enabled = true, Un = false;
  }), x.addEventListener("contextmenu", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    M.setFromCamera(P, o);
    let a = false;
    const t = M.intersectObject(pe), r = H();
    if (t.length && r.length) {
      const d = new m(...e.points.rawVal[t[0].index]), u = new m(...r[0].point), b = d.sub(u), _ = (_a = r[0].face) == null ? void 0 : _a.normal;
      _.transformDirection(K.matrixWorld), Math.abs(b.dot(_)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((d) => d.filter((u) => u !== t[0].index)).map((d) => d.map((u) => u > t[0].index ? u - 1 : u)).filter((d) => d.length);
    l.push([]), e.polylines.val = l;
  });
}
function bs(e, i, y) {
  const S = Math.round(14.999999999999998), g = { position: e.position.clone(), quaternion: e.quaternion.clone() }, x = setInterval(M, 1e3 / 30);
  let w = 0;
  function M() {
    w++;
    const P = w / S;
    e.position.lerpVectors(g.position, i.position, P), e.quaternion.slerpQuaternions(g.quaternion, i.quaternion, P), y && y(), w == S && clearInterval(x);
  }
}
class Lo {
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
    const f = 1 / this.n, c = new qt(), S = new qt();
    this.lut.length = 0, this.lut.push(new qt(this.map[0][1]));
    for (let g = 1; g < y; g++) {
      const x = g * f;
      for (let w = 0; w < this.map.length - 1; w++) if (x > this.map[w][0] && x <= this.map[w + 1][0]) {
        const M = this.map[w][0], P = this.map[w + 1][0];
        c.setHex(this.map[w][1], Ln), S.setHex(this.map[w + 1][1], Ln);
        const v = new qt().lerpColors(c, S, (x - M) / (P - M));
        this.lut.push(v);
      }
    }
    return this.lut.push(new qt(this.map[this.map.length - 1][1])), this;
  }
  copy(i) {
    return this.lut = i.lut, this.map = i.map, this.n = i.n, this.minV = i.minV, this.maxV = i.maxV, this;
  }
  getColor(i) {
    i = Ho.clamp(i, this.minV, this.maxV), i = (i - this.minV) / (this.maxV - this.minV);
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
    let S = 0;
    const g = 1 / this.n, x = new qt(), w = new qt(), M = new qt();
    for (let P = 1; P >= 0; P -= g) for (let v = this.map.length - 1; v >= 0; v--) if (P < this.map[v][0] && P >= this.map[v - 1][0]) {
      const K = this.map[v - 1][0], se = this.map[v][0];
      x.setHex(this.map[v - 1][1], Ln), w.setHex(this.map[v][1], Ln), M.lerpColors(x, w, (P - K) / (se - K)), c[S * 4] = Math.round(M.r * 255), c[S * 4 + 1] = Math.round(M.g * 255), c[S * 4 + 2] = Math.round(M.b * 255), c[S * 4 + 3] = 255, S += 1;
    }
    return y.putImageData(f, 0, 0), i;
  }
}
const On = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Pn = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Ms(e) {
  e = Math.max(0, Math.min(1, e));
  for (let y = 0; y < Pn.length - 1; y++) {
    const [f, c, S, g] = Pn[y], [x, w, M, P] = Pn[y + 1];
    if (e <= x) {
      const v = (e - f) / (x - f);
      return [c + (w - c) * v, S + (M - S) * v, g + (P - g) * v];
    }
  }
  const i = Pn[Pn.length - 1];
  return [i[1], i[2], i[3]];
}
function _s() {
  const i = new Uint8Array(1024);
  for (let f = 0; f < 256; f++) {
    const c = f / 255, [S, g, x] = Ms(c);
    i[f * 4 + 0] = S, i[f * 4 + 1] = g, i[f * 4 + 2] = x, i[f * 4 + 3] = 255;
  }
  const y = new qo(i, 256, 1, Jo);
  return y.minFilter = go, y.magFilter = go, y.wrapS = vo, y.wrapT = vo, y.needsUpdate = true, y;
}
function Ss(e, i, y) {
  new Lo();
  const f = _s(), c = new Wo({ uniforms: { cmap: { value: f }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Yt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), S = new Qe(new fe(), c);
  return S.renderOrder = -1, S.frustumCulled = false, S.userData.isShellArea = true, S.name = "__hekatan_shell_colormap", $.derive(() => {
    S.geometry.setAttribute("position", new $t(e.val.flat(), 3));
    const g = [];
    for (const k of i.val) k.length === 3 ? g.push(k[0], k[1], k[2]) : k.length === 4 && (g.push(k[0], k[1], k[2]), g.push(k[0], k[2], k[3]));
    S.geometry.setIndex(new Go(g, 1));
    const x = y.val.filter((k) => Number.isFinite(k));
    let w, M;
    const P = so.val;
    if (P ? (M = P[0], w = P[1]) : (w = x.length ? Math.max(...x) : 1, M = x.length ? Math.min(...x) : 0, M >= 0 && w > 0 && (M = 0)), w === M) {
      const k = Math.max(Math.abs(w) * 1e-6, 1e-9);
      w += k, M -= k;
    }
    const v = P && P[0] > P[1], K = Math.min(M, w), se = Math.max(M, w), he = se - K, ce = new Float32Array(y.val.length);
    for (let k = 0; k < y.val.length; k++) {
      const H = y.val[k];
      if (!Number.isFinite(H)) {
        ce[k] = -1;
        continue;
      }
      const ne = ((v ? se + K - H : H) - K) / he;
      ce[k] = Math.max(0, Math.min(1, ne));
    }
    S.geometry.setAttribute("scalar", new lt(ce, 1));
  }), S;
}
function ks(e, i, y, f) {
  const c = Ss(y, e.elements, f);
  return $.derive(() => {
    c.visible = i.shellResults.val != "none";
  }), c;
}
const Ps = 6, jn = 10, Cs = 0.012;
function zs(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Fs(e, i, y, f) {
  if (!y && !f) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const S = y[e];
    if (S && S.has(i)) return S.get(i);
  }
  return null;
}
function As(e, i, y, f) {
  const c = new tt(), S = new Lo();
  S.setColorMap("rainbow");
  const g = new qt(), x = $.state([]);
  return $.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const w = y.val, M = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = zs(i.frameResults.val);
    if (c.children.forEach((C) => {
      C.geometry && C.geometry.dispose(), C.material && C.material.dispose();
    }), c.clear(), !P || M.length === 0 || w.length === 0) {
      x.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, K = (_c = e.deformOutputs) == null ? void 0 : _c.val, se = [], he = [];
    for (let C = 0; C < M.length; C++) {
      if (M[C].length !== 2) continue;
      const j = Fs(P, C, v, K);
      j && (se.push(j[0], j[1]), he.push({ idx: C, vals: j }));
    }
    if (se.length === 0) {
      x.val = [];
      return;
    }
    const ce = Math.min(...se), k = Math.max(...se);
    S.setMin(ce), S.setMax(k), x.val = se;
    const H = [1 / 0, 1 / 0, 1 / 0], pe = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of w) for (let D = 0; D < 3; D++) H[D] = Math.min(H[D], C[D]), pe[D] = Math.max(pe[D], C[D]);
    const ge = Math.max(pe[0] - H[0], pe[1] - H[1], pe[2] - H[2], 1) * Cs, q = [], Z = [], B = [];
    let T = 0;
    for (const { idx: C, vals: D } of he) {
      const j = M[C], O = w[j[0]], oe = w[j[1]];
      if (!O || !oe) continue;
      const E = new m(oe[0] - O[0], oe[1] - O[1], oe[2] - O[2]), Y = E.length();
      if (Y < 1e-10) continue;
      E.normalize();
      const ee = Math.abs(E.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), ie = new m().crossVectors(E, ee).normalize(), W = new m().crossVectors(E, ie).normalize(), Pe = jn + 1, ve = Ps;
      for (let Me = 0; Me < Pe; Me++) {
        const Le = Me / jn, Ae = O[0] + E.x * Y * Le, Pt = O[1] + E.y * Y * Le, Ct = O[2] + E.z * Y * Le, rt = D[0] + (D[1] - D[0]) * Le, L = S.getColor(rt) ?? new qt(0, 0, 0);
        g.copy(L).convertSRGBToLinear();
        for (let te = 0; te < ve; te++) {
          const le = te / ve * Math.PI * 2, de = Math.cos(le), Te = Math.sin(le);
          q.push(Ae + (ie.x * de + W.x * Te) * ge, Pt + (ie.y * de + W.y * Te) * ge, Ct + (ie.z * de + W.z * Te) * ge), Z.push(g.r, g.g, g.b);
        }
      }
      for (let Me = 0; Me < jn; Me++) for (let Le = 0; Le < ve; Le++) {
        const Ae = (Le + 1) % ve, Pt = T + Me * ve + Le, Ct = T + Me * ve + Ae, rt = T + (Me + 1) * ve + Le, L = T + (Me + 1) * ve + Ae;
        B.push(Pt, Ct, L), B.push(Pt, L, rt);
      }
      T += Pe * ve;
    }
    if (q.length === 0) return;
    const A = new fe();
    A.setAttribute("position", new $t(q, 3)), A.setAttribute("color", new $t(Z, 3)), A.setIndex(B), A.computeVertexNormals();
    const F = new nt({ vertexColors: true, side: Yt }), V = new Qe(A, F);
    V.frustumCulled = false, c.add(V);
  }), c.__colorMapValues = x, c;
}
function Es() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Vs = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Ts = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ls = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function Mt(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Is = 16755200, Po = 56831, $s = 56831, Rs = 56831, Rn = 65382;
function Bs(e) {
  const i = new tt();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const y = new yn(1, 16, 16), f = new nt({ color: Is, transparent: true, opacity: 0.85, depthTest: false }), c = new Qe(y, f);
  c.visible = false, c.renderOrder = 100, i.add(c);
  const S = new fe(), g = new ht({ color: Po, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), x = new Qt(S, g);
  x.visible = false, x.renderOrder = 100, i.add(x);
  const w = new nt({ color: Po, transparent: true, opacity: 0.7, depthTest: false }), M = new Qe(new bo(1, 1, 1, 12), w);
  M.visible = false, M.renderOrder = 100, i.add(M);
  const P = new fe(), v = new nt({ color: $s, transparent: true, opacity: 0.45, side: Yt, depthTest: false }), K = new Qe(P, v);
  K.visible = false, K.renderOrder = 100, i.add(K);
  const se = new fe(), he = new ht({ color: Rs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), ce = new Qt(se, he);
  ce.visible = false, ce.renderOrder = 100, i.add(ce);
  const k = new nt({ color: Rn, transparent: true, opacity: 0.95, depthTest: false }), H = new Qe(y, k);
  H.visible = false, H.renderOrder = 101, i.add(H);
  const pe = new nt({ color: Rn, transparent: true, opacity: 0.85, depthTest: false }), ne = new Qe(new bo(1, 1, 1, 12), pe);
  ne.visible = false, ne.renderOrder = 101, i.add(ne);
  const ge = new fe(), q = new nt({ color: Rn, transparent: true, opacity: 0.55, side: Yt, depthTest: false }), Z = new Qe(ge, q);
  Z.visible = false, Z.renderOrder = 101, i.add(Z);
  const B = new fe(), T = new ht({ color: Rn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), A = new Qt(B, T);
  A.visible = false, A.renderOrder = 101, i.add(A);
  let F = null;
  const V = document.createElement("div");
  Object.assign(V.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), V.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(V);
  }, 0);
  function C(N) {
    const J = e.derivedNodes.rawVal;
    return !J || N < 0 || N >= J.length ? null : new m(J[N][0], J[N][1], J[N][2]);
  }
  function D(N, J) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2;
    const Se = e.getActiveCamera();
    if (!Se || !e.mesh) return null;
    const Q = e.rendererElm.getBoundingClientRect(), Ke = N - Q.left, Ne = J - Q.top, Je = e.derivedNodes.rawVal, Ve = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Je || !Ve) return null;
    const He = /* @__PURE__ */ new Map(), be = (Xe) => {
      if (He.has(Xe)) return He.get(Xe);
      const ke = C(Xe);
      if (!ke) return He.set(Xe, null), null;
      const we = ke.clone().project(Se), Re = (we.x * 0.5 + 0.5) * Q.width, ye = (-we.y * 0.5 + 0.5) * Q.height, st = { x: Re, y: ye, z: we.z };
      return He.set(Xe, st), st;
    }, yt = /* @__PURE__ */ new Set();
    for (const Xe of Ve) if (Xe) for (const ke of Xe) yt.add(ke);
    const dt = 8;
    let Be = -1, ze = dt;
    for (let Xe = 0; Xe < Je.length; Xe++) {
      if (!yt.has(Xe)) continue;
      const ke = be(Xe);
      if (!ke || ke.z < -1 || ke.z > 1) continue;
      const we = ke.x - Ke, Re = ke.y - Ne, ye = Math.sqrt(we * we + Re * Re);
      ye < ze && (ze = ye, Be = Xe);
    }
    const _e = Es(), We = Ts[_e.dispUnit] ?? 1e3, ot = Vs[_e.forceUnit] ?? 1;
    if (Be >= 0) {
      const Xe = Je[Be];
      let ke = `Nodo ${Be}
(${Xe[0].toFixed(3)}, ${Xe[1].toFixed(3)}, ${Xe[2].toFixed(3)})`;
      const we = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (we == null ? void 0 : we.deformations) {
        const Re = we.deformations.get(Be);
        if (Re && (ke += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, ke += `
Ux = ${Mt(Re[0] * We, 3)} ${_e.dispUnit}`, ke += `
Uy = ${Mt(Re[1] * We, 3)} ${_e.dispUnit}`, ke += `
Uz = ${Mt(Re[2] * We, 3)} ${_e.dispUnit}`, (Math.abs(Re[3]) > 1e-9 || Math.abs(Re[4]) > 1e-9 || Math.abs(Re[5]) > 1e-9) && (ke += `
Rx = ${Mt(Re[3] * 1e3, 3)} mrad`, ke += `
Ry = ${Mt(Re[4] * 1e3, 3)} mrad`, ke += `
Rz = ${Mt(Re[5] * 1e3, 3)} mrad`)), we.reactions) {
          const ye = we.reactions.get(Be);
          ye && (Math.abs(ye[0]) > 1e-9 || Math.abs(ye[1]) > 1e-9 || Math.abs(ye[2]) > 1e-9 || Math.abs(ye[3]) > 1e-6 || Math.abs(ye[4]) > 1e-6 || Math.abs(ye[5]) > 1e-6) && (ke += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, ke += `
Fx = ${Mt(ye[0] * ot)} ${_e.forceUnit}`, ke += `
Fy = ${Mt(ye[1] * ot)} ${_e.forceUnit}`, ke += `
Fz = ${Mt(ye[2] * ot)} ${_e.forceUnit}`, (Math.abs(ye[3]) > 1e-6 || Math.abs(ye[4]) > 1e-6 || Math.abs(ye[5]) > 1e-6) && (ke += `
Mx = ${Mt(ye[3] * ot)} ${_e.forceUnit}\xB7m`, ke += `
My = ${Mt(ye[4] * ot)} ${_e.forceUnit}\xB7m`, ke += `
Mz = ${Mt(ye[5] * ot)} ${_e.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Be, info: ke };
    }
    const dn = 5;
    let Ze = -1, Ht = dn, _t = "frame";
    for (let Xe = 0; Xe < Ve.length; Xe++) {
      const ke = Ve[Xe];
      if (!(!ke || ke.length < 2)) {
        if (ke.length === 2) {
          const we = be(ke[0]), Re = be(ke[1]);
          if (!we || !Re || we.z < -1 || we.z > 1 || Re.z < -1 || Re.z > 1) continue;
          const ye = Xs(Ke, Ne, we.x, we.y, Re.x, Re.y);
          ye < Ht && (Ht = ye, Ze = Xe, _t = "frame");
        } else if (ke.length === 3 || ke.length === 4) {
          const we = [];
          let Re = true;
          for (const ye of ke) {
            const st = be(ye);
            if (!st || st.z < -1 || st.z > 1) {
              Re = false;
              break;
            }
            we.push(st);
          }
          if (!Re) continue;
          if (Ys(Ke, Ne, we)) {
            const st = we.reduce((pt, Rt) => pt + Rt.z, 0) / we.length * 1e-3;
            st < Ht && (Ht = st, Ze = Xe, _t = "shell");
          }
        } else if (ke.length === 8) {
          const we = [];
          let Re = true;
          for (const Ue of ke) {
            const Ge = be(Ue);
            if (!Ge || Ge.z < -1 || Ge.z > 1) {
              Re = false;
              break;
            }
            we.push(Ge);
          }
          if (!Re) continue;
          const ye = Math.min(...we.map((Ue) => Ue.x)), st = Math.max(...we.map((Ue) => Ue.x)), pt = Math.min(...we.map((Ue) => Ue.y)), Rt = Math.max(...we.map((Ue) => Ue.y));
          if (Ke >= ye && Ke <= st && Ne >= pt && Ne <= Rt) {
            const Ge = we.reduce((Oe, at) => Oe + at.z, 0) / we.length * 1e-3;
            Ge < Ht && (Ht = Ge, Ze = Xe, _t = "solid");
          }
        }
      }
    }
    if (Ze >= 0) {
      const Xe = Ve[Ze];
      let we = `${_t === "frame" ? "Frame" : _t === "shell" ? "Shell" : "Solid"} ${Ze}`;
      const Re = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, ye = (_g = (_f = Re == null ? void 0 : Re.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Ze);
      if (ye) {
        ye.name && (we += `
  \u{1F4CB} ${ye.name}`), ye.shape && (we += `
  Shape: ${ye.shape}`);
        const st = /concrete|hormig|rect.*sólida/i.test(ye.shape || ""), pt = st ? 100 : 1e3, Rt = st ? "cm" : "mm", Ue = (Oe) => {
          const at = Oe * pt;
          return Math.abs(at - Math.round(at)) < 0.05 ? `${Math.round(at)}` : `${at.toFixed(1)}`;
        }, Ge = [];
        if (ye.D != null && Ge.push(`D=${Ue(ye.D)}`), ye.B != null && Ge.push(`B=${Ue(ye.B)}`), ye.TF != null && Ge.push(`TF=${Ue(ye.TF)}`), ye.TW != null && Ge.push(`TW=${Ue(ye.TW)}`), ye.t != null && Ge.push(`t=${Ue(ye.t)}`), Ge.length && (we += `
  Dim: ${Ge.join(" ")} ${Rt}`), ye.material) {
          let Oe = ye.material;
          ye.fillMaterial && (Oe += ` + FILL "${ye.fillMaterial}"`), we += `
  Mat: ${Oe}`;
        }
      } else {
        const st = (_i = (_h = Re == null ? void 0 : Re.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Ze), pt = (_k = (_j = Re == null ? void 0 : Re.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Ze);
        st ? (we += `
  ${st}`, pt && !st.includes(pt) && (we += `  (${pt})`)) : pt && (we += `
  Material: ${pt}`);
      }
      if (we += `
nodos: [${Xe.join(", ")}]`, _t === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const st = e.mesh.analyzeOutputs.rawVal, pt = Ls[_e.stressUnit] ?? 1, Rt = [["bendingXX", "Mxx", ot, `${_e.forceUnit}\xB7m/m`], ["bendingYY", "Myy", ot, `${_e.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", ot, `${_e.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", ot, `${_e.forceUnit}/m`], ["membraneYY", "Nyy", ot, `${_e.forceUnit}/m`], ["membraneXY", "Nxy", ot, `${_e.forceUnit}/m`], ["shearX", "Qx", ot, `${_e.forceUnit}/m`], ["shearY", "Qy", ot, `${_e.forceUnit}/m`], ["vonMises", "\u03C3VM", pt, _e.stressUnit], ["pressure", "p", pt, _e.stressUnit]], Ue = [];
        for (const [Ge, Oe, at, Nt] of Rt) {
          const Zt = st == null ? void 0 : st[Ge];
          if (Zt && Zt instanceof Map) {
            const Wt = Zt.get(Ze);
            if (Wt != null) {
              if (typeof Wt == "number") Ue.push(`${Oe} = ${Mt(Wt * at, 3)} ${Nt}`);
              else if (Array.isArray(Wt)) {
                let xt = Wt[0];
                for (const on of Wt) Math.abs(on) > Math.abs(xt) && (xt = on);
                Ue.push(`${Oe} = ${Mt(xt * at, 3)} ${Nt}`);
              }
            }
          }
        }
        Ue.length > 0 && (we += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + Ue.slice(0, 8).join(`
`));
      }
      if (_t === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const st = e.mesh.deformOutputs.rawVal, pt = e.mesh.elementInputs.rawVal, Rt = st == null ? void 0 : st.deformations;
        if (Rt && Xe.length === 2) {
          const Ue = Rt.get(Xe[0]), Ge = Rt.get(Xe[1]), Oe = Je[Xe[0]], at = Je[Xe[1]];
          if (Ue && Ge && Oe && at) {
            const Nt = at[0] - Oe[0], Zt = at[1] - Oe[1], Wt = at[2] - Oe[2], xt = Math.sqrt(Nt * Nt + Zt * Zt + Wt * Wt);
            if (xt > 1e-9) {
              const on = Nt / xt, gt = Zt / xt, zn = Wt / xt, xn = (Ge[0] - Ue[0]) * on + (Ge[1] - Ue[1]) * gt + (Ge[2] - Ue[2]) * zn, Jt = ((_n = pt.elasticities) == null ? void 0 : _n.get(Ze)) ?? 0, gn = ((_o2 = pt.areas) == null ? void 0 : _o2.get(Ze)) ?? 0, Fn = ((_p = pt.momentsOfInertiaY) == null ? void 0 : _p.get(Ze)) ?? 0, Nn = ((_q = pt.momentsOfInertiaZ) == null ? void 0 : _q.get(Ze)) ?? 0, vn = ((_r = pt.torsionalConstants) == null ? void 0 : _r.get(Ze)) ?? 0, An = ((_s2 = pt.shearModuli) == null ? void 0 : _s2.get(Ze)) ?? Jt / 2.6, pn = Jt * gn * (xn / xt), jt = (Ge[3] - Ue[3]) * on + (Ge[4] - Ue[4]) * gt + (Ge[5] - Ue[5]) * zn, St = An * vn * (jt / xt), Dt = Ge[4] - Ue[4], an = Ge[5] - Ue[5], Et = Jt * Fn * Dt / xt, un = Jt * Nn * an / xt;
              we += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, we += `
L = ${Mt(xt, 3)} m`, we += `
\u0394L = ${Mt(xn * We, 3)} ${_e.dispUnit}`, we += `
\u03B5 = ${Mt(xn / xt, 6)}`, Math.abs(pn) > 1e-6 && (we += `
N \u2248 ${Mt(pn * ot)} ${_e.forceUnit}`), Math.abs(St) > 1e-6 && (we += `
T \u2248 ${Mt(St * ot)} ${_e.forceUnit}\xB7m`), Math.abs(Et) > 1e-6 && (we += `
My \u2248 ${Mt(Et * ot)} ${_e.forceUnit}\xB7m`), Math.abs(un) > 1e-6 && (we += `
Mz \u2248 ${Mt(un * ot)} ${_e.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: _t, idx: Ze, info: we };
    }
    return null;
  }
  function j(N, J, Se) {
    var _a, _b, _c;
    if (c.visible = false, x.visible = false, M.visible = false, K.visible = false, ce.visible = false, !N || !e.mesh) {
      V.style.display = "none", e.render();
      return;
    }
    const Q = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (N.type === "node") {
      const Ve = C(N.idx);
      if (Ve) {
        const He = e.derivedNodes.rawVal ?? [];
        let be = 1;
        if (He.length >= 2) {
          let Be = [1 / 0, 1 / 0, 1 / 0], ze = [-1 / 0, -1 / 0, -1 / 0];
          for (const _e of He) for (let We = 0; We < 3; We++) _e[We] < Be[We] && (Be[We] = _e[We]), _e[We] > ze[We] && (ze[We] = _e[We]);
          be = Math.max(ze[0] - Be[0], ze[1] - Be[1], ze[2] - Be[2], 0.1);
        }
        const yt = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, dt = 0.015 * be * yt;
        c.position.copy(Ve), c.scale.setScalar(dt), c.visible = true;
      }
    } else if (N.type === "frame" && Q) {
      const Ve = Q[N.idx], He = C(Ve[0]), be = C(Ve[1]);
      if (He && be) {
        const yt = He.clone().add(be).multiplyScalar(0.5), dt = be.clone().sub(He), Be = dt.length(), ze = e.getActiveCamera();
        let _e;
        if (ze.isOrthographicCamera) {
          const Ze = ze;
          _e = (Ze.top - Ze.bottom) / Ze.zoom * 35e-4;
        } else _e = ze.position.distanceTo(yt) * 35e-4;
        M.position.copy(yt);
        const We = new m(0, 1, 0), ot = We.clone().cross(dt).normalize(), dn = We.angleTo(dt);
        M.quaternion.setFromAxisAngle(ot, dn), M.scale.set(_e, Be, _e), M.visible = true;
      }
    } else if (N.type === "shell" && Q) {
      const Ve = Q[N.idx], He = [], be = [];
      for (const yt of Ve) {
        const dt = C(yt);
        if (!dt) return;
        He.push(dt.x, dt.y, dt.z);
      }
      Ve.length === 4 ? be.push(0, 1, 2, 0, 2, 3) : Ve.length === 3 && be.push(0, 1, 2), P.setAttribute("position", new $t(He, 3)), P.setIndex(be), P.computeVertexNormals(), K.visible = true;
    } else if (N.type === "solid" && Q) {
      const Ve = Q[N.idx], He = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], be = [];
      for (const [yt, dt] of He) {
        const Be = C(Ve[yt]), ze = C(Ve[dt]);
        Be && ze && be.push(Be.x, Be.y, Be.z, ze.x, ze.y, ze.z);
      }
      se.setAttribute("position", new $t(be, 3)), ce.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      V.style.display = "none", e.render();
      return;
    }
    V.textContent = N.info, V.style.whiteSpace = "pre-line", V.style.display = "block";
    const Ne = e.rendererElm.getBoundingClientRect(), Je = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ne;
    V.style.left = `${J - Je.left}px`, V.style.top = `${Se - Je.top}px`, e.render();
  }
  let O = "", oe = 0, E = 0;
  const Y = window.__hekatanHoverDebug ?? false, ee = (N) => {
    oe && cancelAnimationFrame(oe), oe = requestAnimationFrame(() => {
      var _a, _b, _c;
      const J = D(N.clientX, N.clientY);
      if (Y && E < 5) {
        const Q = e.derivedNodes.rawVal, Ke = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${N.clientX}, ${N.clientY}) nodes=${(Q == null ? void 0 : Q.length) ?? 0} elems=${(Ke == null ? void 0 : Ke.length) ?? 0} hover=`, J), E++;
      }
      const Se = J ? `${J.type}:${J.idx}` : "";
      if (Se !== O) O = Se, j(J, N.clientX, N.clientY);
      else if (J) {
        const Q = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        V.style.left = `${N.clientX - Q.left}px`, V.style.top = `${N.clientY - Q.top}px`;
      }
    });
  };
  let ie = null;
  const W = () => {
    O = "", c.visible = false, x.visible = false, M.visible = false, K.visible = false, ce.visible = false, V.style.display = "none", e.render();
  }, Pe = (N) => {
    const J = e.rendererElm.getBoundingClientRect(), Se = N.clientX - J.left, Q = N.clientY - J.top;
    (Se < -2 || Q < -2 || Se > J.width + 2 || Q > J.height + 2) && (ie && clearTimeout(ie), ie = window.setTimeout(W, 200));
  }, ve = () => {
    ie && (clearTimeout(ie), ie = null);
  };
  e.rendererElm.addEventListener("pointermove", ee), e.rendererElm.addEventListener("pointerleave", Pe), e.rendererElm.addEventListener("pointerenter", ve);
  const Me = document.createElement("div");
  Object.assign(Me.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), Me.classList.add("hekatan-context-menu");
  let Le = null;
  const Ae = document.createElement("div");
  Object.assign(Ae.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const Pt = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], Ct = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], rt = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], L = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], te = (N, J, Se) => {
    const Q = document.createElement("div");
    return Q.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, Q.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${N}</span><span>${J}</span>`, Q.addEventListener("mouseenter", () => {
      Q.style.background = "rgba(100, 160, 255, 0.22)";
    }), Q.addEventListener("mouseleave", () => {
      Q.style.background = "transparent";
    }), Q.addEventListener("click", (Ke) => {
      Ke.stopPropagation();
      const Ne = Le;
      ct(), Ne && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${Se}`, { detail: { type: Ne.type, idx: Ne.idx, subAction: Se } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ne.type, idx: Ne.idx, subAction: Se } })));
    }), Q;
  };
  function le(N) {
    Ae.innerHTML = "";
    const J = N === "frame" ? Pt : N === "node" ? Ct : N === "shell" ? rt : L, Se = document.createElement("div");
    Se.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", Se.textContent = `Asignar a ${N.toUpperCase()} #${(Le == null ? void 0 : Le.idx) ?? "?"}`, Ae.appendChild(Se);
    for (const Q of J) Ae.appendChild(te(Q.icon, Q.label, Q.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Ae);
  }, 0);
  function de(N, J) {
    var _a;
    if (!Le) return;
    le(Le.type);
    const Se = Me.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Ae.style.left = `${N + Se.width}px`, Ae.style.top = `${J}px`, Ae.style.display = "block", setTimeout(() => {
      const Q = Ae.getBoundingClientRect();
      Q.right > window.innerWidth - 10 && (Ae.style.left = `${N - Q.width}px`);
    }, 0);
  }
  function Te() {
    Ae.style.display = "none";
  }
  const Ye = (N, J, Se, Q) => {
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
    const Ne = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${N}</span><span>${J}</span></span>`, Je = Se ? '<span style="color:#888;">\u25B8</span>' : "";
    return Ke.innerHTML = Ne + Je, Ke.addEventListener("mouseenter", () => {
      if (Ke.style.background = "rgba(100, 160, 255, 0.18)", Se) {
        const Ve = parseFloat(Me.style.left || "0"), He = parseFloat(Me.style.top || "0");
        de(Ve, He);
      } else Te();
    }), Ke.addEventListener("mouseleave", () => {
      Ke.style.background = "transparent";
    }), Ke.addEventListener("click", (Ve) => {
      if (Ve.stopPropagation(), Se) return;
      const He = Le;
      ct(), Q(He);
    }), Ke;
  }, mt = Ye("\u{1F4DD}", "Asignar", true, () => {
  }), De = Ye("\u2139", "Ver informaci\xF3n", false, (N) => {
    N && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: N.type, idx: N.idx } }));
  });
  De.addEventListener("mouseenter", () => {
    Te();
  }), Me.appendChild(mt), Me.appendChild(De), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Me);
  }, 0);
  function wt(N, J, Se) {
    var _a, _b;
    Le = Se;
    const Q = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    Me.style.left = `${N - Q.left}px`, Me.style.top = `${J - Q.top}px`, Me.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function ct() {
    Me.style.display = "none", Te(), Le = null;
  }
  e.rendererElm.addEventListener("pointerdown", (N) => {
    if (N.button !== 2) return;
    const J = D(N.clientX, N.clientY);
    window.__hekatanRClickOnElement = !!J;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (N) => {
    const J = D(N.clientX, N.clientY);
    if (!J) {
      ct(), window.__hekatanRClickOnElement = false;
      return;
    }
    N.preventDefault(), N.stopImmediatePropagation(), wt(N.clientX, N.clientY, { type: J.type, idx: J.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const Bt = (N) => {
    if (Me.style.display !== "block") return;
    const J = N.target;
    Me.contains(J) || Ae.contains(J) || ct();
  };
  document.addEventListener("mousedown", Bt, true), document.addEventListener("keydown", (N) => {
    N.key === "Escape" && Me.style.display === "block" && ct();
  });
  let zt = null;
  e.rendererElm.addEventListener("pointerdown", (N) => {
    N.button === 0 && (zt = { x: N.clientX, y: N.clientY });
  }), e.rendererElm.addEventListener("pointerup", (N) => {
    if (N.button !== 0 || !zt) return;
    const J = N.clientX - zt.x, Se = N.clientY - zt.y;
    if (zt = null, J * J + Se * Se > 9) return;
    const Q = D(N.clientX, N.clientY);
    Q ? (F = { type: Q.type, idx: Q.idx }, Ot()) : (F = null, Ot());
  });
  function Ot() {
    var _a, _b;
    if (H.visible = false, ne.visible = false, Z.visible = false, A.visible = false, !F || !e.mesh) {
      e.render();
      return;
    }
    const N = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (F.type === "node") {
      const J = C(F.idx);
      if (J) {
        const Se = e.derivedNodes.rawVal ?? [];
        let Q = 1;
        if (Se.length >= 2) {
          let Je = [1 / 0, 1 / 0, 1 / 0], Ve = [-1 / 0, -1 / 0, -1 / 0];
          for (const He of Se) for (let be = 0; be < 3; be++) He[be] < Je[be] && (Je[be] = He[be]), He[be] > Ve[be] && (Ve[be] = He[be]);
          Q = Math.max(Ve[0] - Je[0], Ve[1] - Je[1], Ve[2] - Je[2], 0.1);
        }
        const Ke = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ne = 0.017 * Q * Ke;
        H.position.copy(J), H.scale.setScalar(Ne), H.visible = true;
      }
    } else if (F.type === "frame" && N) {
      const J = N[F.idx], Se = C(J[0]), Q = C(J[1]);
      if (Se && Q) {
        const Ke = Se.clone().add(Q).multiplyScalar(0.5), Ne = Q.clone().sub(Se), Je = Ne.length(), Ve = e.getActiveCamera();
        let He;
        if (Ve.isOrthographicCamera) {
          const Be = Ve;
          He = (Be.top - Be.bottom) / Be.zoom * 35e-4;
        } else He = Ve.position.distanceTo(Ke) * 35e-4;
        ne.position.copy(Ke);
        const be = new m(0, 1, 0), yt = be.clone().cross(Ne).normalize(), dt = be.angleTo(Ne);
        ne.quaternion.setFromAxisAngle(yt, dt), ne.scale.set(He, Je, He), ne.visible = true;
      }
    } else if (F.type === "shell" && N) {
      const J = N[F.idx], Se = [], Q = [];
      for (const Ke of J) {
        const Ne = C(Ke);
        if (!Ne) return;
        Se.push(Ne.x, Ne.y, Ne.z);
      }
      J.length === 4 ? Q.push(0, 1, 2, 0, 2, 3) : J.length === 3 && Q.push(0, 1, 2), ge.setAttribute("position", new $t(Se, 3)), ge.setIndex(Q), ge.computeVertexNormals(), Z.visible = true;
    } else if (F.type === "solid" && N) {
      const J = N[F.idx], Se = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Q = [];
      for (const [Ke, Ne] of Se) {
        const Je = C(J[Ke]), Ve = C(J[Ne]);
        Je && Ve && Q.push(Je.x, Je.y, Je.z, Ve.x, Ve.y, Ve.z);
      }
      B.setAttribute("position", new $t(Q, 3)), A.visible = true;
    }
    e.render();
  }
  return $.derive(() => {
    e.derivedNodes.val, F && Ot();
  }), i;
}
function Xs(e, i, y, f, c, S) {
  const g = c - y, x = S - f, w = g * g + x * x;
  if (w < 1e-9) {
    const he = e - y, ce = i - f;
    return Math.sqrt(he * he + ce * ce);
  }
  let M = ((e - y) * g + (i - f) * x) / w;
  M = Math.max(0, Math.min(1, M));
  const P = y + M * g, v = f + M * x, K = e - P, se = i - v;
  return Math.sqrt(K * K + se * se);
}
function Ys(e, i, y) {
  let f = false;
  for (let c = 0, S = y.length - 1; c < y.length; S = c++) {
    const g = y[c].x, x = y[c].y, w = y[S].x, M = y[S].y;
    x > i != M > i && e < (w - g) * (i - x) / (M - x + 1e-12) + g && (f = !f);
  }
  return f;
}
function Co(e, i = 8) {
  const y = document.createElement("div");
  y.id = "legend";
  const f = document.createElement("div");
  f.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(f), setTimeout(() => {
    $.derive(() => {
      f.textContent = to.val ? `[${to.val}]` : "";
    });
  });
  const c = Array.from({ length: i + 1 }, (w, M) => M / i).reverse();
  let S, g;
  c.forEach((w, M) => {
    S = document.createElement("div"), S.id = `marker-${M}`, S.className = "marker", S.style.marginTop = M == 0 ? "0px" : `calc(${50 / i}vh - 1px)`, g = document.createElement("p"), g.id = `marker-text-${M}`, S.append(g), y.append(S);
  });
  const x = [];
  return y.querySelectorAll("p").forEach((w) => x.push(w)), setTimeout(() => {
    $.derive(() => {
      c.forEach((w, M) => {
        const P = x[M];
        P && (P.innerText = Ds(e.val, w).toString());
      });
    });
  }), y;
}
function Ds(e, i) {
  const y = so.val;
  if (y) return (y[0] + i * (y[1] - y[0])).toPrecision(3);
  const f = e.filter((g) => Number.isFinite(g));
  if (f.length === 0) return "0";
  let c = Math.min(...f);
  const S = Math.max(...f);
  return c >= 0 && S > 0 && (c = 0), (c + i * (S - c)).toPrecision(3);
}
function Os({ mesh: e, settingsObj: i, drawingObj: y, objects3D: f, solids: c }) {
  ns.DEFAULT_UP = new m(0, 0, 1);
  const S = document.createElement("div"), g = new Qo(), x = new Oo(45, 1, 0.1, 2 * 1e6), w = new jo(-10, 10, 10, -10, -1e3, 2e6);
  let M = x;
  const P = new es({ antialias: true });
  P.localClippingEnabled = true;
  const v = new _o(x, P.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: In.ROTATE, TWO: In.DOLLY_PAN }, P.domElement.addEventListener("wheel", (L) => {
    if (!L.ctrlKey && Math.abs(L.deltaX) > Math.abs(L.deltaY) * 1.5) {
      L.preventDefault();
      const te = v.target, le = new m().subVectors(x.position, te), de = new m();
      de.crossVectors(x.up, le).normalize();
      const Ye = le.length() * 1e-3 * v.panSpeed;
      te.addScaledVector(de, L.deltaX * Ye), x.position.addScaledVector(de, L.deltaX * Ye), v.update();
    }
  }, { passive: false });
  const K = new Jn(new m(-1, 0, 0), 0), se = new Jn(new m(0, -1, 0), 0), he = new Jn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function ce() {
    const L = window.__hekatanClip, te = [];
    L.enableX && (K.normal.set(L.invertX ? 1 : -1, 0, 0), K.constant = L.invertX ? -L.posX : L.posX, te.push(K)), L.enableY && (se.normal.set(0, L.invertY ? 1 : -1, 0), se.constant = L.invertY ? -L.posY : L.posY, te.push(se)), L.enableZ && (he.normal.set(0, 0, L.invertZ ? 1 : -1), he.constant = L.invertZ ? -L.posZ : L.posZ, te.push(he)), P.clippingPlanes = te, g.traverse((de) => {
      const Te = de;
      if (Te.material) {
        const Ye = Array.isArray(Te.material) ? Te.material : [Te.material];
        for (const mt of Ye) mt.clippingPlanes = te, mt.needsUpdate = true;
      }
    });
    const le = window.__hekatanPanes ?? [];
    for (const de of le) try {
      de && typeof de.refresh == "function" && de.refresh();
    } catch {
    }
    P.render(g, M);
  }
  ce(), window.__hekatanClipApply = ce;
  const k = as(i), H = $.derive(() => k.displayScale.val === 0 ? 1 : k.displayScale.val > 0 ? k.displayScale.val : -1 / k.displayScale.val), pe = Ns(e, k), ne = () => {
    const L = [];
    return k.gridXY.rawVal && L.push("xy"), k.gridXZ.rawVal && L.push("xz"), k.gridYZ.rawVal && L.push("yz"), L;
  }, ge = () => {
    const L = k.gridStep.rawVal, te = Math.max(L, k.gridMajor.rawVal);
    return { planes: ne(), majorStep: te, minorStep: L };
  };
  let q = Qn(k.gridSize.rawVal, ge());
  q.visible = k.gridVisible.rawVal, window.__hekatanSnap2D = k.cursorSnap.rawVal;
  const Z = () => {
    const L = Math.max(0, Math.min(1, k.gridOpacity.rawVal));
    q.traverse((te) => {
      const le = te.material;
      if (!le || !("opacity" in le)) return;
      const de = te.name ?? "";
      let Te = 0.35;
      de.includes("border") ? Te = 1 : de.includes("major") && (Te = 0.75), le.opacity = L * Te;
    });
  };
  Z(), S.appendChild(ss(k, e, c)), S.setAttribute("id", "viewer"), S.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const B = cn();
  P.setClearColor(B.background, 1);
  const T = k.gridSize.rawVal, A = T * 0.5 + T * 0.5 / Math.tan(45 * 0.5);
  x.position.set(0, 0, A), x.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, S.__settings = k, v.zoomSpeed = 1;
  let F = 100, V = 0;
  P.domElement.addEventListener("wheel", (L) => {
    F = L.deltaY, V = L.deltaMode;
  }, { passive: true, capture: true }), v._getZoomScale = function() {
    const L = Math.abs(F);
    if (L >= 80 && V === 0) return Math.pow(0.9, this.zoomSpeed);
    if (V === 1) return Math.pow(0.88, this.zoomSpeed);
    const te = Math.max(0.05, Math.min(L / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * te);
  }, v.update();
  let C = So(k.gridSize.rawVal, k.flipAxes.rawVal);
  g.add(q, C), $.derive(() => {
    window.__hekatanGridPlaneXY = k.gridXY.val, window.__hekatanGridPlaneXZ = k.gridXZ.val, window.__hekatanGridPlaneYZ = k.gridYZ.val;
  });
  let D = true;
  $.derive(() => {
    const L = k.gridVisible.val;
    if (D) {
      D = false;
      return;
    }
    q.visible = L, W();
  });
  let j = true;
  $.derive(() => {
    if (k.gridOpacity.val, j) {
      j = false;
      return;
    }
    Z(), W();
  }), $.derive(() => {
    const L = k.cursorSnap.val;
    window.__hekatanSnap2D = L;
  });
  let O = true;
  $.derive(() => {
    var _a;
    const L = k.gridSize.val, te = k.flipAxes.val;
    if (k.gridXY.val, k.gridXZ.val, k.gridYZ.val, k.gridStep.val, k.gridMajor.val, O) {
      O = false;
      return;
    }
    g.remove(q), (_a = q.traverse) == null ? void 0 : _a.call(q, (Te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), q = Qn(L, ge()), q.visible = k.gridVisible.rawVal, g.add(q), Z(), g.remove(C), C.traverse((Te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), C = So(L, te), g.add(C);
    const le = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
    x.position.distanceTo(v.target), Math.abs(x.position.x) < 0.1 && Math.abs(x.position.y) < 0.1 && x.position.z > 0 ? x.position.set(0, 0, le) : x.position.set(0.5 * L, -le, 0.5 * L), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, L * 0.01), v.maxDistance = Math.max(50, L * 50), v.update(), W();
  }), new ResizeObserver((L) => {
    var _a, _b;
    for (const te of L) {
      const le = (_a = te.target) == null ? void 0 : _a.clientWidth, de = (_b = te.target) == null ? void 0 : _b.clientHeight;
      if (le === 0 || de === 0) continue;
      const Ye = (E ? le / 2 : le) / de;
      x.aspect = Ye, x.updateProjectionMatrix();
      const mt = w.top;
      if (w.left = -mt * Ye, w.right = mt * Ye, w.updateProjectionMatrix(), Y && Y.isPerspectiveCamera) Y.aspect = Ye, Y.updateProjectionMatrix();
      else if (Y && Y.isOrthographicCamera) {
        const De = Y, wt = De.top;
        De.left = -wt * Ye, De.right = wt * Ye, De.updateProjectionMatrix();
      }
      P.setSize(le, de), W();
    }
  }).observe(S), v.addEventListener("change", W), $.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, k.displayScale.val, k.nodes.val, k.elements.val, (_g = k.edges) == null ? void 0 : _g.val, k.elemColumns.val, k.elemBeams.val, k.nodesIndexes.val, k.elementsIndexes.val, k.orientations.val, k.sections.val, k.secColumns.val, k.secBeams.val, k.secFloor.val, k.supports.val, k.loads.val, k.deformedShape.val, k.nodeResults.val, k.frameResults.val, k.shellResults.val, (_h = k.solidResults) == null ? void 0 : _h.val, setTimeout(W);
  });
  let E = false, Y = null, ee = null, ie = false;
  function W() {
    const L = S.clientWidth || 1, te = S.clientHeight || 1;
    if (!E || !Y) {
      P.setScissorTest(false), P.setViewport(0, 0, L, te), P.render(g, M);
      return;
    }
    const le = L / 2;
    P.setScissorTest(true), P.setViewport(0, 0, le, te), P.setScissor(0, 0, le, te), P.render(g, M), P.setViewport(le, 0, le, te), P.setScissor(le, 0, le, te), P.render(g, Y), P.setScissorTest(false);
  }
  function Pe(L) {
    M = L, v.object = L, v.update(), W();
  }
  function ve(L, te) {
    E = L, te && (Y = te);
    const le = S.clientWidth || 1, de = S.clientHeight || 1, Ye = (L ? le / 2 : le) / de;
    x.isPerspectiveCamera && (x.aspect = Ye, x.updateProjectionMatrix());
    const mt = w.top;
    if (w.left = -mt * Ye, w.right = mt * Ye, w.updateProjectionMatrix(), L && Y) {
      if (ee ? (ee.object = Y, ee.update()) : (ee = new _o(Y, P.domElement), ee.enableDamping = true, ee.dampingFactor = 0.1, ee.screenSpacePanning = true, ee.zoomSpeed = 0.8, ee.panSpeed = 1.2, ee.rotateSpeed = 0.9, ee.touches = { ONE: In.ROTATE, TWO: In.DOLLY_PAN }, ee._getZoomScale = function() {
        const De = Math.abs(F);
        if (De >= 80 && V === 0) return Math.pow(0.9, this.zoomSpeed);
        if (V === 1) return Math.pow(0.88, this.zoomSpeed);
        const wt = Math.max(0.05, Math.min(De / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * wt);
      }, ee.target.copy(v.target), ee.addEventListener("change", W), ee.enabled = false), !ie) {
        const De = (wt) => {
          if (!E || !ee) return;
          const ct = P.domElement.getBoundingClientRect(), Bt = wt.clientX - ct.left, zt = ct.width / 2, Ot = Bt >= zt;
          v.enabled = !Ot, ee.enabled = Ot;
        };
        P.domElement.addEventListener("pointerdown", De, true), P.domElement.addEventListener("wheel", De, { capture: true, passive: true }), ie = true;
      }
    } else L || (v.enabled = true, ee && (ee.enabled = false));
    S.__splitMode = L, window.__hekatanSplitMode = L, window.__hekatanSplitCamera = L ? Y : null, W();
  }
  if (e) {
    g.add(is(k, pe, H), os(e, k, pe), cs(k, pe, H), ds(e, k, pe, H), ls(e, k, pe, H), rs(e, k, pe, H), fs(e, k, pe, H), ms(e, k, pe, H), gs(e, k, pe, H), ws(e, k, pe, H));
    const L = Bs({ scene: g, rendererElm: P.domElement, getActiveCamera: () => M, derivedNodes: pe, derivedDisplayScale: H, mesh: e, settings: k, render: W });
    g.add(L);
    const te = Gs(e, k), le = ks(e, k, pe, te), de = Co(te);
    g.add(le), S.appendChild(de);
    const Te = As(e, k, pe);
    g.add(Te);
    const Ye = Te.__colorMapValues, mt = Co(Ye);
    mt.id = "frame-legend", S.appendChild(mt), $.derive(() => {
      var _a;
      const De = k.shellResults.val != "none", wt = (((_a = k.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", ct = De || wt, Bt = k.frameResults.val.startsWith("contour:");
      de.hidden = !ct, le.visible = ct, mt.hidden = !Bt;
    });
  }
  if (c) {
    const L = new ts(16777215, 0.5);
    g.add(L);
    const te = new Mo(16777215, 0.5);
    te.position.set(30, 25, -10), te.shadow.mapSize.width = 1024, te.shadow.mapSize.height = 1024, g.add(te);
    const le = 10;
    te.shadow.camera.left = -le, te.shadow.camera.right = le, te.shadow.camera.top = le, te.shadow.camera.bottom = -le, te.shadow.camera.far = 1e3;
    const de = new Mo(16777215, 0.5);
    de.color.setHSL(11, 43, 96), de.position.set(-10, 0, 30), g.add(de), $.derive(() => {
      (c == null ? void 0 : c.val.length) && (g.remove(...c.oldVal), g.add(...c.rawVal), W());
    }), $.derive(() => {
      c.rawVal.forEach((Te) => Te.visible = k.solids.val), W();
    });
  }
  if (f) {
    const L = [], te = (de) => {
      var _a, _b;
      return ((_a = de == null ? void 0 : de.userData) == null ? void 0 : _a.isCota) ? k.showCotas.val : ((_b = de == null ? void 0 : de.userData) == null ? void 0 : _b.isDistLoad) ? k.loads.val : k.custom3D.val;
    }, le = () => {
      for (const de of L) de.visible = te(de);
      W();
    };
    $.derive(() => {
      const de = f.val;
      L.length && (g.remove(...L), L.length = 0), de.length && (g.add(...de), L.push(...de), le()), W();
    }), $.derive(() => {
      k.custom3D.val, le();
    }), $.derive(() => {
      k.showCotas.val, le();
    }), $.derive(() => {
      k.loads.val, le();
    });
  }
  y && vs({ drawingObj: y, gridObj: q, scene: g, getActiveCamera: () => M, controls: v, gridSize: T, derivedDisplayScale: H, rendererElm: P.domElement, viewerRender: W }), Ao((L, te) => {
    var _a;
    P.setClearColor(te.background, 1), g.remove(q), (_a = q.traverse) == null ? void 0 : _a.call(q, (le) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = le.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = le.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), q = Qn(k.gridSize.rawVal, { planes: ne() }), g.add(q), S.style.setProperty("--awatif-legend-color", te.legendMarker), W();
  });
  const Me = { scene: g, perspCamera: x, orthoCamera: w, get camera() {
    return M;
  }, controls: v, renderer: P, rendererElm: P.domElement, render: W, setActiveCamera: Pe, setSplitMode: ve, get splitMode() {
    return E;
  }, get splitCamera() {
    return Y;
  }, settings: k };
  S.__ctx = Me;
  const Le = document.createElement("div");
  Le.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Ae = (L, te, le) => {
    const de = document.createElement("button");
    return de.textContent = L, de.title = te, de.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), de.onmouseenter = () => {
      de.style.background = "rgba(70,70,70,0.9)";
    }, de.onmouseleave = () => {
      de.style.background = "rgba(40,40,40,0.85)";
    }, de.onclick = (Te) => {
      Te.preventDefault(), le();
    }, de;
  }, Pt = (L, te) => {
    const le = v.target, de = new m().subVectors(M.position, le), Te = de.length(), Ye = new m(), mt = new m();
    Ye.crossVectors(M.up, de).normalize(), mt.copy(M.up).normalize();
    const De = Te * 0.05;
    le.addScaledVector(Ye, -L * De), le.addScaledVector(mt, te * De), M.position.addScaledVector(Ye, -L * De), M.position.addScaledVector(mt, te * De), v.update(), W();
  }, Ct = (L) => {
    const te = new m().subVectors(M.position, v.target);
    te.multiplyScalar(L), M.position.copy(v.target).add(te), v.update(), W();
  }, rt = () => {
    const L = document.createElement("div");
    return L.style.cssText = "width:32px;height:32px;", L;
  };
  return Le.append(rt()), Le.append(Ae("\u2191", "Pan arriba", () => Pt(0, 1))), Le.append(Ae("\u2295", "Zoom in", () => Ct(0.85))), Le.append(Ae("\u2190", "Pan izquierda", () => Pt(-1, 0))), Le.append(Ae("\u2302", "Reset vista", () => {
    v.reset(), W();
  })), Le.append(Ae("\u2192", "Pan derecha", () => Pt(1, 0))), Le.append(Ae("\u2296", "Zoom out", () => Ct(1.18))), Le.append(Ae("\u2193", "Pan abajo", () => Pt(0, -1))), Le.append(rt()), getComputedStyle(S).position === "static" && (S.style.position = "relative"), S.appendChild(Le), S;
}
function Ns(e, i) {
  return $.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], f = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!f || y.length === 0) return y;
    const c = i.deformScale.val, S = i.deformScale.val * i.deformScaleZ.val, g = Number.isFinite(c) ? c : 1, x = Number.isFinite(S) ? S : 1;
    return y.map((w, M) => {
      var _a2;
      const P = ((_a2 = f.get(M)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(P[0]) ? P[0] : 0, K = Number.isFinite(P[1]) ? P[1] : 0, se = Number.isFinite(P[2]) ? P[2] : 0;
      return [w[0] + v * g, w[1] + K * g, w[2] + se * x];
    });
  });
}
const so = $.state(null), to = $.state(""), Zs = $.state("kN"), Us = $.state("mm"), Ks = $.state("kN/m\xB2"), Hs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, zo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ws = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Gs(e, i) {
  const y = $.state([]);
  let f;
  return ((c) => {
    c.bendingXX = "bendingXX", c.bendingYY = "bendingYY", c.bendingXY = "bendingXY", c.membraneXX = "membraneXX", c.membraneYY = "membraneYY", c.membraneXY = "membraneXY", c.tranverseShearX = "tranverseShearX", c.tranverseShearY = "tranverseShearY", c.vonMises = "vonMises", c.membranePrincipalMax = "membranePrincipalMax", c.membranePrincipalMin = "membranePrincipalMin", c.bendingPrincipalMax = "bendingPrincipalMax", c.bendingPrincipalMin = "bendingPrincipalMin", c.transverseShearMax = "transverseShearMax", c.pressure = "pressure", c.displacementX = "displacementX", c.displacementY = "displacementY", c.displacementZ = "displacementZ";
  })(f || (f = {})), $.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const c = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ne = (Pt, Ct) => {
      Pt == null ? void 0 : Pt.forEach((rt, L) => {
        const te = e.elements.val[L];
        if (te) for (let le = 0; le < te.length; le++) Ct.set(te[le], [rt[le] ?? rt[0]]);
      });
    };
    ne((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, c), ne((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, S), ne((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, g), ne((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, x), ne((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, w), ne((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, M), ne((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, P), ne((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, v), ne((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, K), ne((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.membranePrincipalMax, se), ne((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, he), ne((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, ce), ne((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, k), ne((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, H), ne((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, pe);
    const ge = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, q = (_G = i.solidResults) == null ? void 0 : _G.val, B = q && q !== "none" ? q : i.shellResults.val, T = ge == null ? void 0 : ge[B], A = { bendingXX: [c, 0], bendingYY: [S, 0], bendingXY: [g, 0], membraneXX: [x, 0], membraneYY: [w, 0], membraneXY: [M, 0], tranverseShearX: [P, 0], tranverseShearY: [v, 0], vonMises: [K, 0], membranePrincipalMax: [se, 0], membranePrincipalMin: [he, 0], bendingPrincipalMax: [ce, 0], bendingPrincipalMin: [k, 0], transverseShearMax: [H, 0], pressure: [pe, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, F = i.shellResults.val, V = Zs.val, C = Us.val, D = F === "displacementX" || F === "displacementY" || F === "displacementZ", j = F === "bendingXX" || F === "bendingYY" || F === "bendingXY" || F === "bendingPrincipalMax" || F === "bendingPrincipalMin", O = F === "membraneXX" || F === "membraneYY" || F === "membraneXY" || F === "membranePrincipalMax" || F === "membranePrincipalMin", oe = F === "vonMises" || F === "pressure", E = F === "tranverseShearX" || F === "tranverseShearY" || F === "transverseShearMax", Y = (_N = i.solidResults) == null ? void 0 : _N.val, ee = Y === "vonMises" || Y === "sigmaXX" || Y === "sigmaYY" || Y === "sigmaZZ" || Y === "tauXY" || Y === "tauYZ" || Y === "tauXZ", ie = Y === "ux" || Y === "uy" || Y === "uz", W = Ks.val, Pe = ee ? Ws[W] : ie || D ? zo[C] : j || O || oe || E ? 1 / Hs[V] : 1, ve = ee ? W : ie || D ? C : j ? `${V}\xB7m/m` : O ? `${V}/m\xB2` : oe ? `${V}/m\xB2` : E ? `${V}/m` : "";
    to.val = ve, so.val = Array.isArray(T) && T.length === 2 ? [T[0] * Pe, T[1] * Pe] : null;
    const Le = Y && Y !== "none" ? [K, 0] : A[F], Ae = [];
    e.nodes.val.forEach((Pt, Ct) => {
      const rt = Le;
      if (!rt || !rt[0] || typeof rt[0].has != "function") return;
      if (!rt[0].has(Ct)) {
        Ae.push(Number.NaN);
        return;
      }
      const L = rt[0].get(Ct), te = L ? L[rt[1]] ?? 0 : 0;
      Ae.push(te * Pe);
    }), y.val = Ae;
  }), y;
}
export {
  Us as a,
  Ks as b,
  Zs as c,
  Ss as d,
  Co as e,
  Os as g
};
