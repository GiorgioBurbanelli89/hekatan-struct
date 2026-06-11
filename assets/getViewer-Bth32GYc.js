import { v as $, P as Fo, q as cn, a7 as Bn, B as he, a8 as Xn, F as $t, a4 as Ao, K as tt, X as qt, L as ht, h as Qt, u as Eo, g as No, a9 as Zo, i as nt, d as Qe, V as m, $ as rn, aa as Gn, H as Vo, D as Yt, a as It, x as rt, z as Yn, ab as Dn, s as Uo, m as Ko, I as sn, a2 as kn, E as mo, f as yn, Q as qn, ac as Pn, C as wo, S as yo, c as xo, ad as Ln, p as Ho, ae as Wo, af as Go, ag as qo, ah as Jo, b as go, ai as vo, e as bo, W as Qo, N as Oo, O as jo, Y as es, T as In, o as Jn, Z as ts, _ as Mo, U as ns } from "./theme-BUyDDEHW.js";
import { T as At, O as _o } from "./Text-DR6pe57W.js";
import { e as os } from "./styles-tOu98xnK.js";
function ss(e, i, y) {
  const h = document.createElement("div"), c = new Fo({ title: "Settings", expanded: true, container: h });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(c), h.setAttribute("id", "settings");
  const k = "hk_settingsPos";
  let g = null;
  try {
    const v = localStorage.getItem(k);
    v && (g = JSON.parse(v));
  } catch {
  }
  h.style.cssText = ["position:fixed", g ? `left:${g.left}px` : "left:8px", g ? `top:${g.top}px` : "top:8px", "z-index:50", "max-height:calc(100vh - 32px)", "overflow-y:auto", "box-shadow:0 4px 16px rgba(0,0,0,0.35)", "border-radius:6px"].join(";") + ";";
  const x = () => {
    const v = h.querySelector(".tp-rotv_b");
    if (!v) {
      setTimeout(x, 200);
      return;
    }
    v.style.cursor = "move", v.style.userSelect = "none";
    let K = false, ae = 0, me = 0, de = 0, S = 0;
    v.addEventListener("mousedown", (H) => {
      K = true, ae = H.clientX, me = H.clientY;
      const ue = h.getBoundingClientRect();
      de = ue.left, S = ue.top, h.style.left = `${de}px`, h.style.top = `${S}px`;
    }), window.addEventListener("mousemove", (H) => {
      if (!K) return;
      const ue = H.clientX - ae, oe = H.clientY - me, ge = Math.max(0, Math.min(window.innerWidth - 40, de + ue)), q = Math.max(0, Math.min(window.innerHeight - 40, S + oe));
      h.style.left = `${ge}px`, h.style.top = `${q}px`;
    }), window.addEventListener("mouseup", () => {
      if (K) {
        K = false;
        try {
          localStorage.setItem(k, JSON.stringify({ left: parseFloat(h.style.left), top: parseFloat(h.style.top) }));
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
  const w = c.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), _ = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), P = () => {
    const v = window.__hekatanClipApply;
    typeof v == "function" && v();
  };
  return w.addBinding(_, "enableX", { label: "Cortar X" }).on("change", P), w.addBinding(_, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", P), w.addBinding(_, "invertX", { label: "  invertir X" }).on("change", P), w.addBinding(_, "enableY", { label: "Cortar Y" }).on("change", P), w.addBinding(_, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", P), w.addBinding(_, "invertY", { label: "  invertir Y" }).on("change", P), w.addBinding(_, "enableZ", { label: "Cortar Z" }).on("change", P), w.addBinding(_, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", P), w.addBinding(_, "invertZ", { label: "  invertir Z" }).on("change", P), h;
}
function as(e) {
  return { gridSize: $.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: $.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: $.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: $.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: $.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: $.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: $.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: $.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: $.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: $.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: $.state((e == null ? void 0 : e.nodes) ?? true), elements: $.state((e == null ? void 0 : e.elements) ?? true), edges: $.state((e == null ? void 0 : e.edges) ?? true), faces: $.state((e == null ? void 0 : e.faces) ?? true), elemColumns: $.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: $.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: $.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: $.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: $.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: $.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: $.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: $.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: $.state((e == null ? void 0 : e.orientations) ?? false), sections: $.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: $.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: $.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: $.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: $.state((e == null ? void 0 : e.secFloor) ?? -1), supports: $.state((e == null ? void 0 : e.supports) ?? true), loads: $.state((e == null ? void 0 : e.loads) ?? false), deformedShape: $.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: $.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: $.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: $.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: $.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: $.state((e == null ? void 0 : e.flipAxes) ?? false), solids: $.state((e == null ? void 0 : e.solids) ?? true), custom3D: $.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: $.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: $.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: $.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function is(e, i, y) {
  const h = cn(), c = new Bn(new he(), new Xn({ color: h.nodePoint }));
  return Ao((k, g) => {
    c.material.color.setHex(g.nodePoint);
  }), c.frustumCulled = false, $.derive(() => {
    e.nodes.val && c.geometry.setAttribute("position", new $t(i.val.flat(), 3));
  }), $.derive(() => {
    if (y.val, i.val, !e.nodes.rawVal) return;
    const k = i.rawVal ?? [];
    let g = e.gridSize.val * 0.5;
    if (k.length >= 2) {
      const w = [1 / 0, 1 / 0, 1 / 0], _ = [-1 / 0, -1 / 0, -1 / 0];
      for (const P of k) for (let v = 0; v < 3; v++) w[v] = Math.min(w[v], P[v]), _[v] = Math.max(_[v], P[v]);
      g = Math.max(_[0] - w[0], _[1] - w[1], _[2] - w[2], 0.1);
    }
    const x = 0.03 * g;
    c.material.size = x * y.rawVal;
  }), $.derive(() => {
    c.visible = e.nodes.val;
  }), c;
}
function Qn(e, i) {
  const y = cn(), h = new tt();
  h.name = "hekatan-grid";
  const c = (i == null ? void 0 : i.planes) ?? ["xy"];
  let k = (i == null ? void 0 : i.majorStep) ?? 1, g = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (k <= 0 && (k = 1), g <= 0 && (g = 0.1); e / g > 500; ) g *= 2;
  for (; e / k > 100; ) k *= 2;
  const x = e / 2;
  k = Math.max(g, Math.round(k / g) * g);
  const _ = new qt(y.grid), P = new qt(y.grid).multiplyScalar(0.45), v = (ae, me, de, S) => {
    const H = [], ue = ae === "xy" ? (X, L) => [X, L, 0] : ae === "xz" ? (X, L) => [X, 0, L] : (X, L) => [0, X, L], oe = Math.floor(x / me);
    for (let X = -oe; X <= oe; X++) {
      const L = X * me, A = ue(L, -x), F = ue(L, x);
      H.push(...A, ...F);
    }
    for (let X = -oe; X <= oe; X++) {
      const L = X * me, A = ue(-x, L), F = ue(x, L);
      H.push(...A, ...F);
    }
    const ge = new he();
    ge.setAttribute("position", new $t(H, 3));
    const q = new ht({ color: de, transparent: true, opacity: S, depthWrite: false }), U = new Qt(ge, q);
    return U.name = `grid-${ae}-${me === g ? "minor" : "major"}`, U;
  }, K = (ae, me, de) => {
    const S = ae === "xy" ? (U, X) => [U, X, 0] : ae === "xz" ? (U, X) => [U, 0, X] : (U, X) => [0, U, X], H = [[-x, -x], [x, -x], [x, x], [-x, x]], ue = [];
    for (const [U, X] of H) ue.push(...S(U, X));
    const oe = new he();
    oe.setAttribute("position", new $t(ue, 3));
    const ge = new ht({ color: me, transparent: true, opacity: de, depthWrite: false }), q = new Eo(oe, ge);
    return q.name = `grid-${ae}-border`, q.renderOrder = 1, q;
  };
  for (const ae of c) h.add(v(ae, g, P, 0.12)), h.add(v(ae, k, _, 0.4)), h.add(K(ae, _, 0.55));
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: k, minorStep: g, gridSize: e, planes: [...c] }, h;
}
function ls(e, i, y, h) {
  const c = new tt(), k = new No(0.5, 0.5, 0.5), g = new Zo(0.45, 0.7, 4);
  g.rotateX(Math.PI / 2), g.translate(0, 0, -0.35);
  const x = new nt({ color: 10166822 }), w = new nt({ color: 2792847 }), _ = new nt({ color: 3835647 }), P = () => {
    const ae = y.rawVal ?? [];
    if (ae.length < 2) return i.gridSize.val * 0.5;
    let me = [1 / 0, 1 / 0, 1 / 0], de = [-1 / 0, -1 / 0, -1 / 0];
    for (const S of ae) for (let H = 0; H < 3; H++) S[H] < me[H] && (me[H] = S[H]), S[H] > de[H] && (de[H] = S[H]);
    return Math.max(de[0] - me[0], de[1] - me[1], de[2] - me[2], 0.1);
  }, v = () => 0.08 * P(), K = () => Math.max(h.rawVal, 1);
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    c.clear();
    const ae = v();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((me, de) => {
      const S = y.val[de];
      if (!S) return;
      const H = me ?? [], ue = (H[0] ? 1 : 0) + (H[1] ? 1 : 0) + (H[2] ? 1 : 0), oe = (H[3] ? 1 : 0) + (H[4] ? 1 : 0) + (H[5] ? 1 : 0);
      let ge;
      ue >= 3 && oe >= 3 ? ge = new Qe(k, x) : ue >= 3 && oe === 0 ? ge = new Qe(g, w) : ge = new Qe(g, _), ge.position.set(S[0], S[1], S[2]);
      const q = ae * K();
      ge.scale.set(q, q, q), c.add(ge);
    });
  }), $.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const me = v() * K();
    c.children.forEach((de) => de.scale.set(me, me, me));
  }), $.derive(() => {
    c.visible = i.supports.val;
  }), c;
}
function rs(e, i, y, h) {
  const c = new tt();
  c.name = "loadsGroup";
  function k(g) {
    if (g.length < 2) return 0.12 * i.gridSize.rawVal;
    const x = [1 / 0, 1 / 0, 1 / 0], w = [-1 / 0, -1 / 0, -1 / 0];
    for (const P of g) for (let v = 0; v < 3; v++) x[v] = Math.min(x[v], P[v]), w[v] = Math.max(w[v], P[v]);
    return 0.08 * Math.max(w[0] - x[0], w[1] - x[1], w[2] - x[2], 0.1);
  }
  return $.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    c.children.forEach((w) => w.dispose()), c.clear();
    const g = y.val, x = k(g);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((w, _) => {
      const P = g[_];
      if (!P) return;
      const v = new m(...w.slice(0, 3));
      if (v.lengthSq() < 1e-30) return;
      v.normalize();
      const K = new rn(v, new m(...P), 1, 15637248, 0.3, 0.3), ae = x * h.rawVal;
      K.scale.set(ae, ae, ae), c.add(K);
    });
  }), $.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const x = k(y.rawVal) * h.rawVal;
    c.children.forEach((w) => w.scale.set(x, x, x));
  }), $.derive(() => {
    c.visible = i.loads.val;
  }), c;
}
function cs(e, i, y) {
  const h = new tt();
  return $.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((k) => k.dispose()), h.clear();
    const c = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((k, g) => {
      const x = new At(`${g}`);
      x.position.set(...k), x.updateScale(c * y.rawVal), h.add(x);
    });
  }), $.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const c = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((k) => k.updateScale(c * y.rawVal));
  }), $.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function ds(e, i, y, h) {
  const c = new tt();
  return $.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    c.children.forEach((g) => g.dispose()), c.clear();
    const k = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((g, x) => {
      const w = new At(`${x}`, void 0, "#001219");
      w.position.set(...ps(g.map((_) => y.rawVal[_]))), w.updateScale(k * h.rawVal), c.add(w);
    });
  }), $.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const k = 0.05 * i.gridSize.val * 0.6;
    c.children.forEach((g) => g.updateScale(k * h.rawVal));
  }), $.derive(() => {
    c.visible = i.elementsIndexes.val;
  }), c;
}
function ps(e) {
  const i = e.reduce((h, c) => [h[0] + c[0], h[1] + c[1], h[2] + c[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function So(e, i) {
  const y = new tt(), h = 0.05 * e * 1, c = cn(), k = new At("X", "red", "transparent"), g = new At(i ? "Z" : "Y", "green", "transparent"), x = new At(i ? "Y" : "Z", "blue", "transparent"), w = new rn(new m(1, 0, 0), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), _ = new rn(new m(0, 1, 0), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2), P = new rn(new m(0, 0, 1), new m(0, 0, 0), 1, c.axisArrow, 0.2, 0.2);
  return k.position.set(1.3 * h, 0, 0), g.position.set(0, 1.3 * h, 0), x.position.set(0, 0, 1.3 * h), k.updateScale(0.4 * h), g.updateScale(0.4 * h), x.updateScale(0.4 * h), w.scale.set(h, h, h), _.scale.set(h, h, h), P.scale.set(h, h, h), y.add(w, _, P, k, g, x), y;
}
function no(e, i) {
  const y = new m(...e), c = new m(...i).clone().sub(y), k = c.length(), g = c.dot(new m(1, 0, 0)) / k, x = c.dot(new m(0, 1, 0)) / k, w = c.dot(new m(0, 0, 1)) / k, _ = Math.sqrt(g ** 2 + x ** 2);
  let P = new Gn().fromArray([[g, x, w], [-x / _, g / _, 0], [-g * w / _, -x * w / _, _]].flat());
  return w === 1 && (P = new Gn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), w === -1 && (P = new Gn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Vo().setFromMatrix3(P);
}
function eo(e, i) {
  return e == null ? void 0 : e.map((y, h) => (9 * y + i[h]) / 10);
}
function zn(e) {
  const i = e.reduce((h, c) => [h[0] + c[0], h[1] + c[1], h[2] + c[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function us(e, i, y) {
  const h = zn([i, y]), c = zn([e, y]), k = zn([e, i]), g = new m(...h).sub(new m(...c)).normalize(), x = new m(...y).sub(new m(...k)).normalize(), w = g.clone().cross(x).normalize(), _ = w.clone().cross(g).normalize();
  return new Vo().makeBasis(g, _, w);
}
function fs(e, i, y, h) {
  const c = new tt(), k = new he(), g = new ht({ vertexColors: true }), x = [0, 0, 0], w = [1, 0, 0], _ = [0, 1, 0], P = [0, 0, 1];
  k.setAttribute("position", new $t([...x, ...w, ...x, ..._, ...x, ...P], 3));
  const v = [255, 0, 0], K = [0, 255, 0], ae = [0, 0, 255];
  return k.setAttribute("color", new $t([...v, ...v, ...K, ...K, ...ae, ...ae], 3)), $.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (c.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((me) => {
      const de = new Qt(k, g), S = y.rawVal[me[0]], H = y.rawVal[me[1]];
      if (me.length === 2 && (de.position.set(...eo(S, H)), de.rotation.setFromRotationMatrix(no(S, H))), me.length === 3) {
        const ge = y.rawVal[me[2]];
        de.position.set(...zn([S, H, ge])), de.rotation.setFromRotationMatrix(us(S, H, ge));
      }
      const oe = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      de.scale.set(oe, oe, oe), c.add(de);
    }));
  }), $.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const de = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    c.children.forEach((S) => S.scale.set(de, de, de));
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
function ms(e, i, y, h) {
  const c = new tt(), k = new tt();
  c.add(k);
  function g(U, X) {
    const L = U / 2, A = X / 2, F = new Float32Array([0, -L, -A, 0, L, -A, 0, L, A, 0, -L, -A, 0, L, A, 0, -L, A]), V = new he();
    V.setAttribute("position", new rt(F, 3));
    const z = new Float32Array([0, -L, -A, 0, L, -A, 0, L, A, 0, -L, A, 0, -L, -A]), D = new he();
    return D.setAttribute("position", new rt(z, 3)), { fill: V, outline: D };
  }
  function x(U, X = 24) {
    const L = U / 2, A = new Float32Array(X * 9);
    for (let D = 0; D < X; D++) {
      const j = D / X * Math.PI * 2, O = (D + 1) / X * Math.PI * 2;
      A[D * 9] = 0, A[D * 9 + 1] = 0, A[D * 9 + 2] = 0, A[D * 9 + 3] = 0, A[D * 9 + 4] = L * Math.cos(j), A[D * 9 + 5] = L * Math.sin(j), A[D * 9 + 6] = 0, A[D * 9 + 7] = L * Math.cos(O), A[D * 9 + 8] = L * Math.sin(O);
    }
    const F = new he();
    F.setAttribute("position", new rt(A, 3));
    const V = new Float32Array((X + 1) * 3);
    for (let D = 0; D <= X; D++) {
      const j = D / X * Math.PI * 2;
      V[D * 3] = 0, V[D * 3 + 1] = L * Math.cos(j), V[D * 3 + 2] = L * Math.sin(j);
    }
    const z = new he();
    return z.setAttribute("position", new rt(V, 3)), { fill: F, outline: z };
  }
  function w(U, X, L, A) {
    const F = L ?? X * 0.08, V = A ?? U * 0.07, z = U / 2, D = X / 2, j = D - F, O = V / 2, se = [];
    function E(G, Ce, ve, Me) {
      se.push(0, G, Ce, 0, ve, Ce, 0, ve, Me, 0, G, Ce, 0, ve, Me, 0, G, Me);
    }
    E(-z, -D, z, -j), E(-O, -j, O, j), E(-z, j, z, D);
    const Y = new he();
    Y.setAttribute("position", new rt(new Float32Array(se), 3));
    const ee = new Float32Array([0, -z, -D, 0, z, -D, 0, z, -j, 0, O, -j, 0, O, j, 0, z, j, 0, z, D, 0, -z, D, 0, -z, j, 0, -O, j, 0, -O, -j, 0, -z, -j, 0, -z, -D]), ie = new he();
    return ie.setAttribute("position", new rt(ee, 3)), { fill: Y, outline: ie };
  }
  function _(U, X, L) {
    const A = U / 2, F = X / 2, V = A - L, z = F - L, D = [];
    function j(Y, ee, ie, G) {
      D.push(0, Y, ee, 0, ie, ee, 0, ie, G, 0, Y, ee, 0, ie, G, 0, Y, G);
    }
    j(-A, -F, A, -z), j(-A, z, A, F), j(-A, -z, -V, z), j(V, -z, A, z);
    const O = new he();
    O.setAttribute("position", new rt(new Float32Array(D), 3));
    const se = new Float32Array([0, -A, -F, 0, A, -F, 0, A, -F, 0, A, F, 0, A, F, 0, -A, F, 0, -A, F, 0, -A, -F, 0, -V, -z, 0, V, -z, 0, V, -z, 0, V, z, 0, V, z, 0, -V, z, 0, -V, z, 0, -V, -z]), E = new he();
    return E.setAttribute("position", new rt(se, 3)), { fill: O, outline: E };
  }
  function P(U, X, L) {
    const A = U / 2, F = X / 2, V = A - L, z = F - L, D = new he(), j = new Float32Array([0, -V, -z, 0, V, -z, 0, V, z, 0, -V, -z, 0, V, z, 0, -V, z]);
    D.setAttribute("position", new rt(j, 3));
    const O = [];
    function se(ie, G, Ce, ve) {
      O.push(0, ie, G, 0, Ce, G, 0, Ce, ve, 0, ie, G, 0, Ce, ve, 0, ie, ve);
    }
    se(-A, -F, A, -z), se(-A, z, A, F), se(-A, -z, -V, z), se(V, -z, A, z);
    const E = new he();
    E.setAttribute("position", new rt(new Float32Array(O), 3));
    const Y = new Float32Array([0, -A, -F, 0, A, -F, 0, A, -F, 0, A, F, 0, A, F, 0, -A, F, 0, -A, F, 0, -A, -F, 0, -V, -z, 0, V, -z, 0, V, -z, 0, V, z, 0, V, z, 0, -V, z, 0, -V, z, 0, -V, -z]), ee = new he();
    return ee.setAttribute("position", new rt(Y, 3)), { concFill: D, steelFillGeom: E, outline: ee };
  }
  function v(U, X, L) {
    const A = [], F = [[0, -U / 2, -X / 2], [0, -U / 2 + L, -X / 2], [0, -U / 2 + L, X / 2 - L], [0, U / 2, X / 2 - L], [0, U / 2, X / 2], [0, -U / 2, X / 2]], V = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const O of V) A.push(...F[O]);
    const z = new he();
    z.setAttribute("position", new rt(new Float32Array(A), 3));
    const D = [];
    for (let O = 0; O < F.length; O++) {
      const se = (O + 1) % F.length;
      D.push(...F[O], ...F[se]);
    }
    const j = new he();
    return j.setAttribute("position", new rt(new Float32Array(D), 3)), { fill: z, outline: j };
  }
  function K(U, X, L, A) {
    const F = A / 2, V = [], z = [[0, -U - F, -X / 2], [0, -L - F, -X / 2], [0, -L - F, X / 2 - L], [0, -F, X / 2 - L], [0, -F, X / 2], [0, -U - F, X / 2]], D = [[0, F, -X / 2], [0, F + L, -X / 2], [0, F + L, X / 2 - L], [0, U + F, X / 2 - L], [0, U + F, X / 2], [0, F, X / 2]], j = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const Y of j) V.push(...z[Y]);
    for (const Y of j) V.push(...D[Y]);
    const O = new he();
    O.setAttribute("position", new rt(new Float32Array(V), 3));
    const se = [];
    for (const Y of [z, D]) for (let ee = 0; ee < Y.length; ee++) {
      const ie = (ee + 1) % Y.length;
      se.push(...Y[ee], ...Y[ie]);
    }
    const E = new he();
    return E.setAttribute("position", new rt(new Float32Array(se), 3)), { fill: O, outline: E };
  }
  function ae(U, X, L, A) {
    const F = X / 2, V = U, z = [[0, -V, -F], [0, -V, -F + L], [0, -A, -F + L], [0, -A, F - L], [0, -V, F - L], [0, -V, F], [0, 0, F], [0, 0, -F]], D = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], j = [];
    for (const Y of D) j.push(...z[Y]);
    const O = new he();
    O.setAttribute("position", new rt(new Float32Array(j), 3));
    const se = [];
    for (let Y = 0; Y < z.length; Y++) {
      const ee = (Y + 1) % z.length;
      se.push(...z[Y], ...z[ee]);
    }
    const E = new he();
    return E.setAttribute("position", new rt(new Float32Array(se), 3)), { fill: O, outline: E };
  }
  function me(U, X, L, A, F) {
    const V = X / 2, z = F / 2, D = [], j = [[0, -U, -V], [0, -U, -V + L], [0, -z - A, -V + L], [0, -z - A, V - L], [0, -U, V - L], [0, -U, V], [0, -z, V], [0, -z, -V]], O = j.map((ie) => [ie[0], -ie[1], ie[2]]), se = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const ie of se) D.push(...j[ie]);
    for (const ie of se) D.push(...O[ie]);
    const E = new he();
    E.setAttribute("position", new rt(new Float32Array(D), 3));
    const Y = [];
    for (const ie of [j, O]) for (let G = 0; G < ie.length; G++) {
      const Ce = (G + 1) % ie.length;
      Y.push(...ie[G], ...ie[Ce]);
    }
    const ee = new he();
    return ee.setAttribute("position", new rt(new Float32Array(Y), 3)), { fill: E, outline: ee };
  }
  function de(U, X, L, A) {
    const F = U / 2, V = X / 2, z = A / 2, D = [[0, -z, -V], [0, z, -V], [0, z, V - L], [0, F, V - L], [0, F, V], [0, -F, V], [0, -F, V - L], [0, -z, V - L]], j = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], O = [];
    for (const ee of j) O.push(...D[ee]);
    const se = new he();
    se.setAttribute("position", new rt(new Float32Array(O), 3));
    const E = [];
    for (let ee = 0; ee < D.length; ee++) {
      const ie = (ee + 1) % D.length;
      E.push(...D[ee], ...D[ie]);
    }
    const Y = new he();
    return Y.setAttribute("position", new rt(new Float32Array(E), 3)), { fill: se, outline: Y };
  }
  function S(U, X, L = 24) {
    const A = U / 2, F = A - X, V = [];
    for (let O = 0; O < L; O++) {
      const se = O / L * Math.PI * 2, E = (O + 1) / L * Math.PI * 2, Y = Math.cos(se), ee = Math.sin(se), ie = Math.cos(E), G = Math.sin(E);
      V.push(0, A * Y, A * ee, 0, A * ie, A * G, 0, F * ie, F * G), V.push(0, A * Y, A * ee, 0, F * ie, F * G, 0, F * Y, F * ee);
    }
    const z = new he();
    z.setAttribute("position", new rt(new Float32Array(V), 3));
    const D = [];
    for (let O = 0; O < L; O++) {
      const se = O / L * Math.PI * 2, E = (O + 1) / L * Math.PI * 2;
      D.push(0, A * Math.cos(se), A * Math.sin(se), 0, A * Math.cos(E), A * Math.sin(E)), D.push(0, F * Math.cos(se), F * Math.sin(se), 0, F * Math.cos(E), F * Math.sin(E));
    }
    const j = new he();
    return j.setAttribute("position", new rt(new Float32Array(D), 3)), { fill: z, outline: j };
  }
  const H = new nt({ color: 52479, transparent: true, opacity: 0.35, side: Yt, depthWrite: false }), ue = new ht({ color: 52479 }), oe = new nt({ color: 16750848, transparent: true, opacity: 0.4, side: Yt, depthWrite: false }), ge = new ht({ color: 16750848 });
  function q(U, X) {
    const L = Math.abs(X[0] - U[0]), A = Math.abs(X[1] - U[1]), F = Math.abs(X[2] - U[2]);
    return F > L && F > A || A > L && A > F;
  }
  return $.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const U = i.secColumns.rawVal, X = i.secBeams.rawVal;
    if (!U && !X) {
      c.children.forEach((z) => {
        z instanceof At && z.dispose();
      }), c.clear();
      return;
    }
    c.children.forEach((z) => {
      z instanceof At && z.dispose();
    }), c.clear();
    const L = (_a = e.elements) == null ? void 0 : _a.val, A = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!L || !A) return;
    const F = A.sectionShapes, V = i.secFloor.rawVal;
    L.forEach((z, D) => {
      if (z.length !== 2) return;
      const j = y.rawVal[z[0]], O = y.rawVal[z[1]];
      if (!j || !O) return;
      const se = q(j, O);
      if (se && !U || !se && !X) return;
      if (V >= 0) {
        const G = Math.min(j[1], O[1]);
        Math.max(j[1], O[1]);
        const Ce = i.gridSize.rawVal || 3;
        if (Math.floor(G / Ce + 0.01) !== V) return;
      }
      const E = F == null ? void 0 : F.get(D);
      if (!E) return;
      const Y = [(j[0] + O[0]) / 2, (j[1] + O[1]) / 2, (j[2] + O[2]) / 2], ee = no(j, O);
      if (E.type === "CFT") {
        const G = P(E.b, E.h, E.tw ?? E.b * 0.05), Ce = new Qe(G.concFill, H);
        Ce.position.set(...Y), Ce.rotation.setFromRotationMatrix(ee), c.add(Ce);
        const ve = new Qe(G.steelFillGeom, oe);
        ve.position.set(...Y), ve.rotation.setFromRotationMatrix(ee), c.add(ve);
        const Me = new It(G.outline, ge);
        Me.position.set(...Y), Me.rotation.setFromRotationMatrix(ee), c.add(Me);
      } else {
        let G, Ce, ve;
        switch (E.type) {
          case "rect":
            G = g(E.b, E.h), Ce = H, ve = ue;
            break;
          case "circ":
            G = x(E.d), Ce = H, ve = ue;
            break;
          case "I":
            G = w(E.b, E.h, E.tf, E.tw), Ce = oe, ve = ge;
            break;
          case "HSS":
            G = _(E.b, E.h, E.tw ?? E.b * 0.05), Ce = oe, ve = ge;
            break;
          case "CFT":
            G = P(E.b, E.h, E.tw ?? E.b * 0.05), Ce = oe, ve = ge;
            break;
          case "L":
            G = v(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3), Ce = oe, ve = ge;
            break;
          case "2L":
            G = K(E.b ?? E.h, E.h, E.t ?? E.tw ?? 3e-3, E.dis ?? 0.01), Ce = oe, ve = ge;
            break;
          case "C":
          case "coldC":
            G = ae(E.b, E.h, E.tf ?? E.t ?? 3e-3, E.tw ?? E.t ?? 3e-3), Ce = oe, ve = ge;
            break;
          case "2C":
            G = me(E.b, E.h, E.tf ?? 5e-3, E.tw ?? 5e-3, E.dis ?? 0.01), Ce = oe, ve = ge;
            break;
          case "T":
            G = de(E.b, E.h, E.tf ?? 0.01, E.tw ?? 6e-3), Ce = oe, ve = ge;
            break;
          case "pipe":
            G = S(E.d, E.tw ?? E.d * 0.05), Ce = oe, ve = ge;
            break;
          default:
            return;
        }
        const Me = new Qe(G.fill, Ce);
        Me.position.set(...Y), Me.rotation.setFromRotationMatrix(ee), c.add(Me);
        const Le = new It(G.outline, ve);
        Le.position.set(...Y), Le.rotation.setFromRotationMatrix(ee), c.add(Le);
      }
      const ie = hs(E);
      if (ie) {
        const Ce = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(E.type) ? "#ff9900" : "#00ccff", ve = new At(ie, Ce, "transparent");
        ve.position.set(Y[0], Y[1], Y[2]);
        const Me = 0.05 * i.gridSize.rawVal * 0.5;
        ve.updateScale(Me * ((h == null ? void 0 : h.rawVal) ?? 1)), k.add(ve);
      }
    });
  }), h && $.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const U = 0.05 * i.gridSize.val * 0.5;
    k.children.forEach((X) => {
      X instanceof At && X.updateScale(U * h.rawVal);
    });
  }), $.derive(() => {
    c.visible = i.sections.val;
  }), $.derive(() => {
    k.visible = i.sectionLabels.val;
  }), c;
}
class $n extends tt {
  constructor(i, y, h, c, k, g, x) {
    super();
    const w = new Yn().moveTo(0, 0).lineTo(0, g[1]).lineTo(h, g[1]).lineTo(h, 0).lineTo(0, 0), _ = w.getPoints(), P = new he().setFromPoints(_);
    this.lines = new It(P, new ht({ color: cn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const v = new Dn(w), K = new nt({ color: g[1] > 0 ? 24435 : 11411474, side: Yt });
    this.mesh = new Qe(v, K), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new At(`${k[1].toFixed(2)}`), this.normalizedResult = g, this.textPosition = zn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(c), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class ko extends tt {
  constructor(i, y, h, c, k, g, x) {
    super();
    const w = k[0] * h / (k[0] + k[1]), _ = k[0] * k[1] > 0;
    if (this.text = new At(`${k[0].toFixed(2)}`), this.text2 = new At(`${(k[1] * -1).toFixed(2)}`), this.normalizedResult = g, this.textPosition = eo(i, y), this.text2Position = eo(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(c), this.text2.rotation.setFromRotationMatrix(c), this.add(this.text, this.text2), _) {
      const P = new Yn().moveTo(0, 0).lineTo(0, g[0]).lineTo(w, 0).lineTo(0, 0), v = new Yn().moveTo(w, 0).lineTo(h, -g[1]).lineTo(h, 0).lineTo(w, 0), K = P.getPoints(), ae = v.getPoints(), me = new he().setFromPoints(K), de = new he().setFromPoints(ae), S = new ht({ color: cn().resultOutline });
      this.lines = new It(me, S), this.lines2 = new It(de, S), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), this.lines2.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), x && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const H = new Dn(P), ue = new Dn(v), oe = new nt({ color: g[0] > 0 ? 24435 : 11411474, side: Yt }), ge = new nt({ color: -g[1] > 0 ? 24435 : 11411474, side: Yt });
      this.mesh = new Qe(H, oe), this.mesh2 = new Qe(ue, ge), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), this.mesh2.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), x && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const P = new Yn().moveTo(0, 0).lineTo(0, g[0]).lineTo(h, -g[1]).lineTo(h, 0).lineTo(0, 0), v = P.getPoints(), K = new he().setFromPoints(v);
      this.lines = new It(K, new ht({ color: cn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(c), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const ae = new Dn(P), me = new nt({ color: g[0] > 0 ? 24435 : 11411474, side: Yt });
      this.mesh = new Qe(ae, me), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(c), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
function ws(e, i, y, h) {
  const c = new tt(), k = () => {
    const w = y.rawVal ?? [];
    if (w.length < 2) return i.gridSize.val * 0.5;
    let _ = [1 / 0, 1 / 0, 1 / 0], P = [-1 / 0, -1 / 0, -1 / 0];
    for (const v of w) for (let K = 0; K < 3; K++) v[K] < _[K] && (_[K] = v[K]), v[K] > P[K] && (P[K] = v[K]);
    return Math.max(P[0] - _[0], P[1] - _[1], P[2] - _[2], 0.1);
  }, g = () => 0.025 * k(), x = { normals: $n, shearsY: $n, shearsZ: $n, torsions: $n, bendingsY: ko, bendingsZ: ko };
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    c.children.forEach((_) => _.dispose()), c.clear();
    const w = To[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[w]) == null ? void 0 : _b.forEach((_, P) => {
      var _a2, _b2;
      const v = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[P]) ?? [0, 1], K = y.rawVal[v[0]], ae = y.rawVal[v[1]], me = new m(...ae).distanceTo(new m(...K)), de = ys((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[w]), S = _ == null ? void 0 : _.map((ge) => ge / (de === 0 ? 1 : de)), H = no(K, ae), ue = new x[w](K, ae, me, H, _ ?? [0, 0], S ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(w)), oe = g();
      ue.updateScale(oe * h.rawVal), c.add(ue);
    });
  }), $.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const w = g();
    c.children.forEach((_) => _.updateScale(w * h.rawVal));
  }), $.derive(() => {
    c.visible = i.frameResults.val != "none";
  }), c;
}
function ys(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((y) => {
    const h = Math.max(...y ?? [0, 0]);
    h > i && (i = h);
  }), i;
}
class xs extends tt {
  constructor(i, y, h) {
    super();
    const c = y === oo.reactions;
    h[0] && (this.xText1 = new At(`${c ? "Fx" : "Dx"}: ` + h[0].toFixed(4))), h[3] && (this.xText2 = new At(`${c ? "Mx" : "Rx"}: ` + h[3].toFixed(4))), h[1] && (this.yText1 = new At(`${c ? "Fy" : "Dy"}: ` + h[1].toFixed(4))), h[4] && (this.yText2 = new At(`${c ? "My" : "Ry"}: ` + h[4].toFixed(4))), h[2] && (this.zText1 = new At(`${c ? "Fz" : "Dz"}: ` + h[2].toFixed(4))), h[5] && (this.zText2 = new At(`${c ? "Mz" : "Rz"}: ` + h[5].toFixed(4))), (h[0] || h[3]) && (this.xArrow = new rn(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[1] || h[4]) && (this.yArrow = new rn(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[2] || h[5]) && (this.zArrow = new rn(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
function gs(e, i, y, h) {
  const c = new tt();
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    c.children.forEach((x) => x.dispose()), c.clear();
    const k = oo[i.nodeResults.rawVal], g = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[k]) == null ? void 0 : _b.forEach((x, w) => {
      const _ = new xs(y.rawVal[w], k, x ?? [0, 0, 0, 0, 0, 0]);
      _.updateScale(g * h.rawVal), c.add(_);
    });
  }), $.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const k = 0.05 * i.gridSize.val;
    c.children.forEach((g) => g.updateScale(k * h.rawVal));
  }), $.derive(() => {
    c.visible = i.nodeResults.val != "none";
  }), c;
}
function vs({ drawingObj: e, gridObj: i, scene: y, getActiveCamera: h, controls: c, gridSize: k, derivedDisplayScale: g, rendererElm: x, viewerRender: w }) {
  const _ = new Uo(), P = new Ko(), v = (n) => {
    const o = x.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const p = r / 2;
      if (a >= p) return P.x = (a - p) / p * 2 - 1, P.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? h();
      P.x = a / p * 2 - 1;
    } else P.x = a / r * 2 - 1;
    return P.y = -(t / s) * 2 + 1, h();
  }, K = new Qe(new sn(1e4, 1e4), new nt({ side: Yt, transparent: true, opacity: 0, depthWrite: false }));
  K.visible = true, K.frustumCulled = false, y.add(K);
  const ae = (n, o, a) => {
    const t = new Qe(new sn(1e4, 1e4), new nt({ side: Yt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, me = ae(Math.PI / 2, 0, 0), de = ae(0, Math.PI / 2, 0);
  let S = false;
  const H = () => {
    if (S) return _.intersectObjects([K], false);
    if (me.visible = !!window.__hekatanGridPlaneXZ, de.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && De.visible) {
      const a = _.intersectObjects([De, wt, dt], false);
      if (a.length > 0) return a;
    }
    const o = [K];
    return me.visible && o.push(me), de.visible && o.push(de), it.visible && Nt.length > 0 && o.push(...Nt), _.intersectObjects(o, false);
  }, ue = new Bn(new he(), new Xn()), oe = new Bn(new he(), new Xn({ color: "gray", sizeAttenuation: false, size: 6 })), ge = new Bn(new he(), new Xn({ color: "orange", size: 0.1 }));
  y.add(ge);
  const q = document.createElement("input");
  q.id = "hk-rubber-label", q.type = "text", q.spellcheck = false, q.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, q.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(q);
  let U = null, X = null, L = false;
  const A = new m(), F = (n, o, a, t, r, s) => {
    const l = t - n, p = r - o, u = s - a, b = Math.hypot(l, p, u);
    if (b < 0.01) {
      q.style.display = "none";
      return;
    }
    U = [n, o, a], X = [l / b, p / b, u / b], A.set((n + t) / 2, (o + r) / 2, (a + s) / 2), A.project(h());
    const M = x.getBoundingClientRect(), d = M.left + (A.x * 0.5 + 0.5) * M.width, f = M.top + (-A.y * 0.5 + 0.5) * M.height;
    if (q.style.left = d + "px", q.style.top = f + "px", q.style.display = "block", !L) {
      if (q.value = `${b.toFixed(2)} m`, document.activeElement !== q) {
        const C = document.activeElement;
        C && (C.tagName === "INPUT" || C.tagName === "TEXTAREA") && C !== q || q.focus({ preventScroll: true });
      }
      try {
        q.select();
      } catch {
      }
    }
  }, V = () => {
    q.style.display = "none", U = null, X = null, L = false, document.activeElement === q && q.blur();
  }, z = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Vt = n, re(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), q.blur();
      return;
    }
    if (!U || !X || !e.polylines) return;
    let a = X[0], t = X[1], r = X[2];
    J === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : J === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : J === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = U[0] + a * n, l = U[1] + t * n, p = U[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, p]];
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
  }, j = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return U ? [U[0] + n.dx, U[1] + n.dy, U[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!U) return null;
      const o = n.ang * Math.PI / 180;
      return [U[0] + n.L * Math.cos(o), U[1] + n.L * Math.sin(o), U[2]];
    }
    if (n.kind === "relSpherical") {
      if (!U) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [U[0] + t * Math.cos(o), U[1] + t * Math.sin(o), U[2] + n.L * Math.sin(a)];
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
    if (o.kind === "length") return z(o.L), true;
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
      if (L = false, a.kind === "length") z(a.L), re(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
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
      n.preventDefault(), L = false, q.blur();
      return;
    }
    const o = n.key.toLowerCase();
    if (o === "x" || o === "y" || o === "z") {
      n.preventDefault(), setTimeout(() => {
        if (!L && q.style.display === "block") try {
          q.select();
        } catch {
        }
      }, 0);
      return;
    }
    (/^[0-9.\-]$/.test(n.key) || n.key === "Backspace" || n.key === "Delete") && (L = true);
  }), window.addEventListener("keydown", (n) => {
    if (!U || !X || document.activeElement === q) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (q.value = n.key, q.focus(), q.setSelectionRange(1, 1), n.preventDefault());
  });
  const se = document.createElement("div");
  se.id = "hk-coord-readout", se.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", se.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(se);
  const E = document.createElement("div");
  E.id = "hk-coord-fixed", E.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", E.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(E);
  const Y = new It(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new kn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  Y.frustumCulled = false, Y.visible = false, y.add(Y);
  const ee = new It(new he(), new ht({ color: 2282478, transparent: true, opacity: 0.9 }));
  ee.frustumCulled = false, ee.visible = false, y.add(ee);
  let ie = [];
  const G = new tt(), Ce = new Qe(new sn(1, 1), new nt({ color: 2282478, transparent: true, opacity: 0.08, side: Yt, depthWrite: false })), ve = new Qt(new mo(new sn(1, 1)), new ht({ color: 2282478, transparent: true, opacity: 0.85 })), Me = new Qt(new he(), new ht({ color: 2282478, transparent: true, opacity: 0.3 })), Le = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    Me.geometry.dispose(), Me.geometry = new he(), Me.geometry.setAttribute("position", new $t(a, 3));
  };
  G.add(Ce, ve, Me), G.visible = false, G.frustumCulled = false, y.add(G);
  const Ae = new tt();
  Ae.frustumCulled = false, Ae.visible = false, y.add(Ae);
  const Pt = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new kn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new It(o, a);
  }, Ct = Pt(16711680), ct = Pt(65280), I = Pt(35071);
  Ae.add(Ct, ct, I);
  const te = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new ht({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new Eo(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, le = te(3462041), pe = te(16724804), Te = te(6333946), Ye = new tt();
  Ye.frustumCulled = false, Ye.visible = false, y.add(Ye), Ye.add(le, pe, Te);
  const mt = (n) => {
    const o = new sn(1, 1), a = new nt({ color: n, transparent: true, opacity: 0.06, side: Yt, depthWrite: false }), t = new Qe(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, De = mt(3462041), wt = mt(16724804), dt = mt(6333946);
  Ye.add(De, wt, dt);
  const Bt = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, zt = document.createElement("div");
  zt.id = "hk-refplane-badge", zt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(zt), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Ye.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      N(le, s, "xy", l), N(pe, s, "xz", l), N(Te, s, "yz", l), Bt(De, s, "xy", l), Bt(wt, s, "xz", l), Bt(dt, s, "yz", l), De.material.opacity = 0.05, wt.material.opacity = 0.05, dt.material.opacity = 0.05;
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
    N(le, s, "xy", n), N(pe, s, "xz", n), N(Te, s, "yz", n), Bt(De, s, "xy", n), Bt(wt, s, "xz", n), Bt(dt, s, "yz", n), w();
  };
  const Ot = (n) => {
    if (De.material.opacity = n === "xy" ? 0.09 : 0.025, wt.material.opacity = n === "xz" ? 0.09 : 0.025, dt.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      zt.style.background = r.bg, zt.style.color = r.text, zt.textContent = `\u25A6 Plano ${n.toUpperCase()}`, zt.style.display = "block";
    } else zt.style.display = "none";
  }, N = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let J = null;
  window.__hekatanAxisLock = () => J;
  let ke = null;
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
    return J === "x" ? (Ne.set(o - 1e4, a, t), Je.set(o + 1e4, a, t)) : J === "y" ? (Ne.set(o, a - 1e4, t), Je.set(o, a + 1e4, t)) : (Ne.set(o, a, t - 1e4), Je.set(o, a, t + 1e4)), _.ray.distanceSqToSegment(Ne, Je, null, Ve), Ve;
  };
  window.__hekatanProjectOnAxis = He;
  const be = new It(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new ht({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  be.renderOrder = 998, be.frustumCulled = false, be.visible = false, y.add(be);
  let yt = -1, pt = -1, Be = -1;
  const Fe = /* @__PURE__ */ new Set();
  window.__hekatanSelection = Fe;
  const _e = new It(new he().setFromPoints([new m(), new m()]), new ht({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  _e.renderOrder = 997, _e.frustumCulled = false, _e.visible = false, y.add(_e);
  const We = new Qe(new yn(0.02, 12, 12), new nt({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  We.renderOrder = 998, We.visible = false, y.add(We);
  const ot = (n) => {
    const o = h();
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
    for (let p = 0; p < r.length; p++) {
      const u = r[p];
      if (!u) continue;
      const b = Math.hypot(n - u[0], o - u[1], a - u[2]);
      b < l && (l = b, s = p);
    }
    return s;
  }, Pe = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Ze.children.length; ) {
      const l = Ze.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of Fe) {
      const [p, ...u] = l.split(":");
      if (p === "pt") {
        const b = n[+u[0]];
        if (!b) continue;
        const M = new Qe(new yn(0.025, 12, 12), new nt({ color: Ht, transparent: true, opacity: 0.9, depthTest: false }));
        M.position.set(b[0], b[1], b[2]), M.renderOrder = 999, M.__isSelectionPt = true, Ze.add(M);
      } else if (p === "seg") {
        const b = o[+u[0]], M = n[b == null ? void 0 : b[+u[1]]], d = n[b == null ? void 0 : b[+u[1] + 1]];
        if (!M || !d) continue;
        const f = new he().setFromPoints([new m(M[0], M[1], M[2]), new m(d[0], d[1], d[2])]), C = new It(f, new ht({ color: Ht, transparent: true, opacity: 0.95, depthTest: false }));
        C.renderOrder = 999, Ze.add(C);
      } else if (p === "poly") {
        const M = o[+u[0]].map((C) => {
          const R = n[C];
          return R ? new m(R[0], R[1], R[2]) : null;
        }).filter(Boolean);
        if (M.length < 2) continue;
        const d = new he().setFromPoints(M), f = new It(d, new ht({ color: Ht, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, Ze.add(f);
      } else if (p === "aux") {
        const b = t[+u[0]];
        if (!b || b.length !== 6) continue;
        const M = new he().setFromPoints([new m(b[0], b[1], b[2]), new m(b[3], b[4], b[5])]), d = new It(M, new ht({ color: Ht, transparent: true, opacity: 0.95, depthTest: false }));
        d.renderOrder = 999, Ze.add(d);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), w();
  };
  window.__hekatanRefreshSelection = Pe, window.__hekatanClearSelection = () => {
    Fe.clear(), Pe();
  };
  const we = (n, o, a, t, r, s, l, p, u) => {
    const b = l - t, M = p - r, d = u - s, f = b * b + M * M + d * d;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let C = ((n - t) * b + (o - r) * M + (a - s) * d) / f;
    C = Math.max(0, Math.min(1, C));
    const R = t + C * b, Z = r + C * M, W = s + C * d;
    return Math.hypot(n - R, o - Z, a - W);
  }, Re = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, p = -1, u = t;
    for (let b = 0; b < r.length; b++) {
      const M = r[b];
      for (let d = 0; d < M.length - 1; d++) {
        const f = s[M[d]], C = s[M[d + 1]];
        if (!f || !C) continue;
        const R = we(n, o, a, f[0], f[1], f[2], C[0], C[1], C[2]);
        R < u && (u = R, l = b, p = d);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: p, dist: u } : null;
  }, ye = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, p = t;
    for (let u = 0; u < s.length; u++) {
      const b = s[u];
      if (!b || b.length !== 6) continue;
      const M = we(n, o, a, b[0], b[1], b[2], b[3], b[4], b[5]);
      M < p && (p = M, l = u);
    }
    return l;
  }, st = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      be.visible = false;
      return;
    }
    be.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), be.visible = true;
  }, ut = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      be.visible = false;
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
    const p = a.map((u) => u.map((b) => s.get(b)).filter((b) => b !== void 0));
    e.points.val = l, e.polylines.val = p, e.areas && (e.areas.val = e.areas.rawVal.filter((u) => u !== n).map((u) => u > n ? u - 1 : u)), be.visible = false, yt = -1, pt = -1;
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
    const l = [...a.slice(0, n), ...s, ...a.slice(n + 1)], p = /* @__PURE__ */ new Set();
    for (const f of l) for (const C of f) p.add(C);
    const u = e.points.rawVal, b = /* @__PURE__ */ new Map(), M = [];
    for (let f = 0; f < u.length; f++) p.has(f) && (b.set(f, M.length), M.push(u[f]));
    const d = l.map((f) => f.map((C) => b.get(C)).filter((C) => C !== void 0));
    if (e.points.val = M, e.polylines.val = d, e.areas) {
      const f = s.length - 1;
      e.areas.val = e.areas.rawVal.map((C) => C > n ? C + f : C);
    }
    be.visible = false, yt = -1, pt = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  ue.geometry.setAttribute("position", new $t(e.points.rawVal.flat(), 3)), ue.geometry.computeBoundingSphere(), ue.frustumCulled = false, oe.frustumCulled = false, y.add(oe), K.position.set(0, 0, 0), K.rotateX(Math.PI / 2), K.geometry.rotateX(Math.PI / 2), K.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
      const M = 2 * Math.PI * b / l, d = t * Math.cos(M), f = t * Math.sin(M);
      let C;
      s === "xy" ? C = [n + d, o + f, a] : s === "xz" ? C = [n + d, o, a + f] : C = [n, o + d, a + f], u.push(C);
    }
    if (e.points.val = [...e.points.rawVal, ...u], e.polylines) {
      const b = [...u.map((d, f) => p + f), p], M = e.polylines.rawVal;
      ((_a = M[M.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...M, b, []] : e.polylines.val = [...M.slice(0, -1), b, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), p = new m(...a), u = new m().subVectors(l, s), b = new m().subVectors(p, s), M = new m().crossVectors(u, b).normalize(), d = new m().addVectors(s, l).multiplyScalar(0.5), f = new m().addVectors(l, p).multiplyScalar(0.5), C = new m().crossVectors(u, M).normalize(), R = new m().crossVectors(new m().subVectors(p, l), M).normalize(), Z = new m().subVectors(f, d), W = C.x * R.y - C.y * R.x;
    let T;
    if (Math.abs(W) > 1e-9) {
      const qe = (Z.x * R.y - Z.y * R.x) / W;
      T = new m().addVectors(d, C.clone().multiplyScalar(qe));
    } else T = d.clone();
    const ne = s.distanceTo(T), ce = new m().subVectors(s, T), Se = new m().subVectors(p, T), fe = Math.acos(Math.max(-1, Math.min(1, ce.dot(Se) / (ne * ne)))), ze = e.points.rawVal.length, at = [], vt = M.clone();
    for (let qe = 0; qe <= r; qe++) {
      const $e = qe / r, ft = fe * $e, lt = new qn().setFromAxisAngle(vt, ft), bt = ce.clone().applyQuaternion(lt).add(T);
      at.push([bt.x, bt.y, bt.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...at], e.polylines) {
      const qe = at.map((ft, lt) => ze + lt), $e = e.polylines.rawVal;
      e.polylines.val = [...$e.slice(0, -1), qe, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), p = Math.min(n[1], o[1]), u = Math.max(n[1], o[1]), b = (n[2] + o[2]) / 2, M = l - s, d = u - p, f = Math.min(a, M / 2 - 0.01, d / 2 - 0.01);
    if (f <= 0) return;
    const C = e.points.rawVal.length, R = [], Z = [], W = (T, ne) => {
      R.push([T, ne, b]), Z.push(C + R.length - 1);
    };
    for (let T = 0; T <= r; T++) W(s + f + (M - 2 * f) * T / r, p);
    for (let T = 1; T <= t; T++) {
      const ne = -Math.PI / 2 + Math.PI / 2 * T / t;
      W(l - f + f * Math.cos(ne), p + f + f * Math.sin(ne));
    }
    for (let T = 1; T <= r; T++) W(l, p + f + (d - 2 * f) * T / r);
    for (let T = 1; T <= t; T++) {
      const ne = 0 + Math.PI / 2 * T / t;
      W(l - f + f * Math.cos(ne), u - f + f * Math.sin(ne));
    }
    for (let T = 1; T <= r; T++) W(l - f - (M - 2 * f) * T / r, u);
    for (let T = 1; T <= t; T++) {
      const ne = Math.PI / 2 + Math.PI / 2 * T / t;
      W(s + f + f * Math.cos(ne), u - f + f * Math.sin(ne));
    }
    for (let T = 1; T <= r; T++) W(s, u - f - (d - 2 * f) * T / r);
    for (let T = 1; T <= t; T++) {
      const ne = Math.PI + Math.PI / 2 * T / t;
      W(s + f + f * Math.cos(ne), p + f + f * Math.sin(ne));
    }
    if (Z.push(C), e.points.val = [...e.points.rawVal, ...R], e.polylines) {
      const T = e.polylines.rawVal;
      e.polylines.val = [...T.slice(0, -1), Z, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], p = o[1], u = o[2];
    let b;
    if (Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, p, s], [t, p, s]] : Math.abs(r - p) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, p, s], [t, p, u], [t, r, u]], e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const M = [a, a + 1, a + 2, a + 3, a], d = e.polylines.rawVal;
      e.polylines.val = [...d.slice(0, -1), M, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], p = o[1], u = o[2];
    let b;
    if (S && e.gridTarget) {
      const M = e.gridTarget.rawVal, d = new Pn(...M.rotation), f = new m(1, 0, 0).applyEuler(d), C = new m(0, 1, 0).applyEuler(d), R = new m(...M.position), Z = new m(t, r, s), W = new m(l, p, u), T = Z.clone().sub(R).dot(f), ne = Z.clone().sub(R).dot(C), ce = W.clone().sub(R).dot(f), Se = W.clone().sub(R).dot(C), fe = (ze, at) => R.clone().addScaledVector(f, ze).addScaledVector(C, at).toArray();
      b = [fe(T, ne), fe(ce, ne), fe(ce, Se), fe(T, Se)];
    } else Math.abs(s - u) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, p, s], [t, p, s]] : Math.abs(r - p) < 1e-6 ? b = [[t, r, s], [l, r, s], [l, r, u], [t, r, u]] : b = [[t, r, s], [t, p, s], [t, p, u], [t, r, u]];
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...b], e.polylines) {
      const M = e.polylines.rawVal, d = M.length - 1, f = [a, a + 1, a + 2, a + 3, a];
      e.polylines.val = [...M.slice(0, -1), f, []], e.areas && (e.areas.val = [...e.areas.rawVal, d]);
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
    let p = n[1][0] - n[0][0], u = n[1][1] - n[0][1], b = n[1][2] - n[0][2];
    const M = Math.hypot(p, u, b) || 1;
    p /= M, u /= M, b /= M;
    let d = r * b - s * u, f = s * p - t * b, C = t * u - r * p;
    const R = Math.hypot(d, f, C) || 1;
    d /= R, f /= R, C /= R;
    const Z = n[0], W = (xe) => [(xe[0] - Z[0]) * p + (xe[1] - Z[1]) * u + (xe[2] - Z[2]) * b, (xe[0] - Z[0]) * d + (xe[1] - Z[1]) * f + (xe[2] - Z[2]) * C], T = (xe, Ie) => [Z[0] + xe * p + Ie * d, Z[1] + xe * u + Ie * f, Z[2] + xe * b + Ie * C], ne = n.map(W);
    let ce = 1 / 0, Se = -1 / 0, fe = 1 / 0, ze = -1 / 0;
    for (const [xe, Ie] of ne) xe < ce && (ce = xe), xe > Se && (Se = xe), Ie < fe && (fe = Ie), Ie > ze && (ze = Ie);
    const at = Se - ce, vt = ze - fe;
    if (at < 1e-6 || vt < 1e-6) return 0;
    let qe = o && o > 0 ? o : 0.5;
    for (; at / qe * (vt / qe) > 2500; ) qe *= 2;
    qe = Math.min(qe, Math.min(at, vt));
    const $e = (xe, Ie) => {
      let et = false;
      for (let Kt = 0, nn = ne.length - 1; Kt < ne.length; nn = Kt++) {
        const [mn, _n] = ne[Kt], [wn, Sn] = ne[nn];
        _n > Ie != Sn > Ie && xe < (wn - mn) * (Ie - _n) / (Sn - _n) + mn && (et = !et);
      }
      return et;
    }, ft = Math.max(1, Math.round(at / qe)), lt = Math.max(1, Math.round(vt / qe)), bt = at / ft, Tt = vt / lt, tn = /* @__PURE__ */ new Map(), Gt = [], Ft = e.points.rawVal.length, Ut = (xe, Ie) => {
      const et = xe + "," + Ie, Kt = tn.get(et);
      if (Kt !== void 0) return Kt;
      const nn = Ft + Gt.length;
      return Gt.push(T(ce + xe * bt, fe + Ie * Tt)), tn.set(et, nn), nn;
    }, Lt = [];
    for (let xe = 0; xe < ft; xe++) for (let Ie = 0; Ie < lt; Ie++) {
      if (!$e(ce + (xe + 0.5) * bt, fe + (Ie + 0.5) * Tt)) continue;
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
    const p = new qn().setFromUnitVectors(new m(0, 0, 1), l), u = new Pn().setFromQuaternion(p);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [u.x, u.y, u.z] }), S = true;
    const b = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), M = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, d = M / 2;
    Ce.geometry.dispose(), Ce.geometry = new sn(M, M), ve.geometry.dispose(), ve.geometry = new mo(new sn(M, M)), Le(d, 1), G.position.copy(b), G.quaternion.copy(p), G.scale.set(1, 1, 1), G.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), S = false, G.visible = false, w();
  };
  const Oe = new tt();
  Oe.visible = false, y.add(Oe), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; Oe.children.length; ) {
      const M = Oe.children.pop();
      (_a = M.geometry) == null ? void 0 : _a.dispose(), (_b = M.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, p = Math.max(...n) + t, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", b = (M, d, f, C, R) => {
      const Z = document.createElement("canvas");
      Z.width = 64, Z.height = 32;
      const W = Z.getContext("2d");
      W.fillStyle = R, W.font = "bold 22px sans-serif", W.textAlign = "center", W.fillText(M, 32, 26);
      const T = new wo(Z), ne = new yo({ map: T, transparent: true }), ce = new xo(ne);
      return ce.position.set(d, f, C), ce.scale.set(1.2, 0.6, 1), ce;
    };
    n.forEach((M, d) => {
      const f = d < u.length ? u[d] : `X${d}`, C = new he().setFromPoints([new m(M, r, 0), new m(M, s, 0), new m(M, r, 0), new m(M, r, a)]), R = new kn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), Z = new Qt(C, R);
      Z.computeLineDistances(), Oe.add(Z), Oe.add(b(f, M, r - 0.5, 0, "#60a5fa")), Oe.add(b(f, M, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((M, d) => {
      const f = `${d + 1}`, C = new he().setFromPoints([new m(l, M, 0), new m(p, M, 0), new m(l, M, 0), new m(l, M, a)]), R = new kn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), Z = new Qt(C, R);
      Z.computeLineDistances(), Oe.add(Z), Oe.add(b(f, l - 0.5, M, 0, "#fb7185")), Oe.add(b(f, p + 0.5, M, 0, "#fb7185"));
    }), Oe.visible = true, w();
  }, window.__hekatanHideAxes = () => {
    Oe.visible = false, w();
  };
  const it = new tt();
  it.visible = false, y.add(it);
  let Nt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; it.children.length; ) {
      const s = it.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Nt.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Nt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const p = r[l % r.length], u = o / 2, b = [new m(a - u, t - u, s), new m(a + u, t - u, s), new m(a + u, t + u, s), new m(a - u, t + u, s), new m(a - u, t - u, s)], M = new he().setFromPoints(b), d = new ht({ color: p, transparent: true, opacity: 0.55 });
      it.add(new It(M, d));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const C = f.getContext("2d");
      C.fillStyle = `#${p.toString(16).padStart(6, "0")}`, C.font = "bold 18px sans-serif", C.fillText(`Z = ${s} m`, 4, 22);
      const R = new wo(f), Z = new yo({ map: R, transparent: true }), W = new xo(Z);
      W.position.set(a - u - 1.5, t - u - 1.5, s), W.scale.set(2.5, 0.6, 1), it.add(W);
      const T = new sn(1e4, 1e4), ne = new nt({ visible: false, side: Yt }), ce = new Qe(T, ne);
      ce.position.set(0, 0, s), ce.frustumCulled = false, ce.userData = { refPlaneZ: s }, y.add(ce), Nt.push(ce);
    }), it.visible = true, w();
  }, window.__hekatanHideRefPlanes = () => {
    it.visible = false, Nt.forEach((n) => {
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
      const t = new he().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new kn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new It(t, r);
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
  const gt = new tt(), Fn = new Qe(new yn(0.01, 12, 12), new nt({ color: 16724804, transparent: true, opacity: 0.95 })), xn = new Qe(new yn(0.015, 12, 12), new nt({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  gt.add(Fn, xn);
  const Jt = 0.08, gn = (n, o, a) => {
    const t = new he().setFromPoints([new m(...n), new m(...o)]);
    return new It(t, new ht({ color: a, transparent: true, opacity: 0.7 }));
  };
  gt.add(gn([-Jt, 0, 0], [Jt, 0, 0], 16711680)), gt.add(gn([0, -Jt, 0], [0, Jt, 0], 65280)), gt.add(gn([0, 0, -Jt], [0, 0, Jt], 35071)), gt.visible = false, gt.frustumCulled = false, y.add(gt);
  const An = 40, Nn = 2.5, vn = () => {
    if (!gt.visible) return;
    const o = h().position.distanceTo(gt.position), a = Math.max(0.05, Math.min(Nn, o / An));
    gt.scale.setScalar(a);
  }, En = () => {
    Ze.children.length !== 0 && Ze.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(ot(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = En, c.addEventListener("change", () => {
    vn(), We.visible && dn();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = h().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / An));
    }
    En();
  }), window.__hekatanShowSnap = (n, o, a) => {
    gt.position.set(n, o, a), gt.visible = true, vn(), w();
  }, window.__hekatanHideSnap = () => {
    gt.visible = false, w();
  }, x.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q;
    const o = v(n);
    if (!o) return;
    _.setFromCamera(P, o);
    const a = H();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) ro(s.type, s.x, s.y, s.z), gt.position.set(s.x, s.y, s.z), gt.visible = true, t.set(s.x, s.y, s.z);
      else {
        Zn();
        const M = window.__hekatanSnapEnabled !== false, d = window.__hekatanSnap2D ?? 0.5;
        M && d > 0 && (t.x = Math.round(t.x / d) * d, t.y = Math.round(t.y / d) * d, t.z = Math.round(t.z / d) * d), gt.position.copy(t), gt.visible = true;
      }
      vn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, d = Xe(t.x, t.y, t.z, M), f = Re(t.x, t.y, t.z, M), C = ye(t.x, t.y, t.z, M);
        if (d >= 0) {
          const T = e.points.rawVal[d];
          We.position.set(T[0], T[1], T[2]), We.visible = true, dn(), _e.visible = false, _t = { kind: "pt", a: d };
        } else if (f) {
          const T = e.points.rawVal, ne = e.polylines.rawVal[f.polyIdx], ce = T[ne[f.segIdx]], Se = T[ne[f.segIdx + 1]];
          _e.geometry.setFromPoints([new m(ce[0], ce[1], ce[2]), new m(Se[0], Se[1], Se[2])]), _e.visible = true, We.visible = false, _t = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (C >= 0) {
          const ne = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[C];
          ne && (_e.geometry.setFromPoints([new m(ne[0], ne[1], ne[2]), new m(ne[3], ne[4], ne[5])]), _e.visible = true, We.visible = false, _t = { kind: "aux", a: C });
        } else _e.visible = false, We.visible = false, _t = null;
        se.style.left = n.clientX + "px", se.style.top = n.clientY + "px", se.style.display = "block";
        let R = t;
        if ((_t == null ? void 0 : _t.kind) === "pt") {
          const T = e.points.rawVal[_t.a];
          T && (R = new m(T[0], T[1], T[2]));
        }
        const Z = `X=${R.x.toFixed(2)} Y=${R.y.toFixed(2)} Z=${R.z.toFixed(2)}`;
        if (_t) {
          const T = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          se.textContent = `${Z}  \xB7  \u{1F5B1} Click \u2192 ${T[_t.kind]}`;
        } else se.textContent = Z;
        const W = document.getElementById("hk-coord-fixed");
        W && (W.textContent = Z), Y.visible = false, Ae.visible = false, w();
        return;
      }
      if (l === "delete") {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, d = Re(t.x, t.y, t.z, M), f = ye(t.x, t.y, t.z, M);
        let C = false;
        if (f >= 0) if (!d) C = true;
        else {
          const T = window.__hekatanDrawingAuxLines, ce = ((T == null ? void 0 : T.rawVal) ?? (T == null ? void 0 : T.val) ?? T ?? [])[f];
          we(t.x, t.y, t.z, ce[0], ce[1], ce[2], ce[3], ce[4], ce[5]) < d.dist && (C = true);
        }
        C ? (Be = f, yt = -1, pt = -1, st(f)) : d ? (yt = d.polyIdx, pt = d.segIdx, Be = -1, ut(d.polyIdx, d.segIdx)) : (yt = -1, pt = -1, Be = -1, be.visible = false), Y.visible = false, Ae.visible = false, V(), se.style.left = n.clientX + "px", se.style.top = n.clientY + "px", se.style.display = "block";
        const R = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let Z = "";
        C ? Z = `\u{1F5D1} l\xEDnea aux #${Be + 1}` : d ? Z = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(d.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${d.polyIdx + 1}` : `\u{1F5D1} seg ${d.segIdx + 1} / poly #${d.polyIdx + 1}` : Z = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", se.textContent = `${R}  \xB7  ${Z}`;
        const W = document.getElementById("hk-coord-fixed");
        W && (W.textContent = R), w();
        return;
      } else be.visible = false, yt = -1, Be = -1;
      se.style.left = n.clientX + "px", se.style.top = n.clientY + "px", se.style.display = "block";
      const p = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], u = p[p.length - 1] ?? [], b = e.points.rawVal ?? [];
      if (u.length > 0 && b[u[u.length - 1]]) {
        const M = u[u.length - 1], d = b[M];
        let f = J;
        if (ke = null, !f && window.__hekatanAxisSnap !== false) {
          const $e = x.getBoundingClientRect(), ft = n.clientX, lt = n.clientY, bt = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Tt = new m(d[0], d[1], d[2]), tn = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], Gt = (Ut) => {
            const Lt = Ut.clone().project(o);
            return { x: (Lt.x * 0.5 + 0.5) * $e.width + $e.left, y: (-Lt.y * 0.5 + 0.5) * $e.height + $e.top };
          };
          let Ft = null;
          for (const [Ut, Lt] of tn) {
            const xe = Gt(Tt.clone().addScaledVector(Lt, -bt)), Ie = Gt(Tt.clone().addScaledVector(Lt, bt)), et = Ie.x - xe.x, Kt = Ie.y - xe.y, nn = ft - xe.x, mn = lt - xe.y, _n2 = et * et + Kt * Kt || 1;
            let wn = (nn * et + mn * Kt) / _n2;
            wn = Math.max(0, Math.min(1, wn));
            const Sn = Math.hypot(ft - (xe.x + wn * et), lt - (xe.y + wn * Kt));
            if (Ft === null || Sn < Ft.dpx) {
              const Hn = _.ray, uo = Tt.clone().sub(Hn.origin), Wn = Lt.dot(Hn.direction), fo = Lt.dot(uo), Yo = Hn.direction.dot(uo), ho = 1 - Wn * Wn, Do = Math.abs(ho) < 1e-6 ? -fo : (Wn * Yo - fo) / ho;
              Ft = { axis: Ut, dpx: Sn, pt: Tt.clone().addScaledVector(Lt, Do) };
            }
          }
          Ft && Ft.dpx <= 12 && (t.copy(Ft.pt), f = Ft.axis, ke = Ft.pt.clone());
        }
        const C = !!window.__hekatanOrthoMode;
        if (!f && C) {
          const $e = Math.abs(t.x - d[0]), ft = Math.abs(t.y - d[1]), lt = Math.abs(t.z - d[2]), bt = (_l = a[0]) == null ? void 0 : _l.object;
          let Tt = null;
          bt === De ? Tt = "xy" : bt === wt ? Tt = "xz" : bt === dt && (Tt = "yz"), Tt === "xy" ? f = $e >= ft ? "x" : "y" : Tt === "xz" ? f = $e >= lt ? "x" : "z" : Tt === "yz" ? f = ft >= lt ? "y" : "z" : f = $e >= ft && $e >= lt ? "x" : ft >= lt ? "y" : "z";
        }
        const R = window.__hekatanPolarTrack !== false;
        if (!f && R) {
          const $e = t.x - d[0], ft = t.y - d[1], lt = t.z - d[2], bt = Math.hypot($e, ft, lt);
          if (bt > 1e-3) {
            const tn = Math.tan(6 * Math.PI / 180) * bt, Gt = Math.hypot(ft, lt), Ft = Math.hypot($e, lt), Ut = Math.hypot($e, ft), Lt = [["x", Gt], ["y", Ft], ["z", Ut]];
            Lt.sort((xe, Ie) => xe[1] - Ie[1]), Lt[0][1] <= tn && (f = Lt[0][0]);
          }
        }
        if (f) {
          const $e = d[0], ft = d[1], lt = d[2];
          f === "x" ? t.set(t.x, ft, lt) : f === "y" ? t.set($e, t.y, lt) : t.set($e, ft, t.z);
          const bt = !!J, tn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[f];
          Q.style.background = "rgba(15,23,42,0.92)", Q.style.color = tn, Q.style.border = `1.5px solid ${tn}`;
          const Gt = (_m = a[0]) == null ? void 0 : _m.object;
          let Ft = null;
          Gt === De ? Ft = "xy" : Gt === wt ? Ft = "xz" : Gt === dt && (Ft = "yz");
          const Ut = Ft ? ` (plano ${Ft.toUpperCase()})` : "";
          Q.textContent = bt ? `\u{1F512} LOCK ${f.toUpperCase()}${Ut}` : `\u22A5 ORTO ${f.toUpperCase()}${Ut}`, Q.style.left = n.clientX + 20 + "px", Q.style.top = n.clientY + 18 + "px", Q.style.transform = "none", Q.style.display = "block";
        } else J || (Q.style.display = "none");
        const Z = Math.hypot(t.x - d[0], t.y - d[1], t.z - d[2]), W = Math.atan2(t.y - d[1], t.x - d[0]) * 180 / Math.PI, T = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        se.textContent = `${T} | \u0394L=${Z.toFixed(2)}m ${W.toFixed(0)}\xB0`;
        const ne = document.getElementById("hk-coord-fixed");
        ne && (ne.textContent = T), Y.geometry.setFromPoints([new m(d[0], d[1], d[2]), new m(t.x, t.y, t.z)]), (_n = Y.computeLineDistances) == null ? void 0 : _n.call(Y), Y.visible = true, F(d[0], d[1], d[2], t.x, t.y, t.z);
        const ce = window.__hekatanOrthoExt ?? 8, Se = window.__hekatanShowOrthoPlanes !== false;
        Ye.visible = Se, Se || Ot(null), Se && (N(le, d, "xy", ce), N(pe, d, "xz", ce), N(Te, d, "yz", ce), Bt(De, d, "xy", ce), Bt(wt, d, "xz", ce), Bt(dt, d, "yz", ce));
        const fe = Se ? _.intersectObjects([De, wt, dt], false) : [];
        let ze = null;
        if (fe.length > 0) {
          const $e = fe[0].object;
          $e === De ? ze = "xy" : $e === wt ? ze = "xz" : $e === dt && (ze = "yz");
        }
        Ot(ze), ze && (zt.style.left = n.clientX + "px", zt.style.top = n.clientY + "px"), Ct.geometry.setFromPoints([new m(d[0] - ce, d[1], d[2]), new m(d[0] + ce, d[1], d[2])]), (_o2 = Ct.computeLineDistances) == null ? void 0 : _o2.call(Ct), ct.geometry.setFromPoints([new m(d[0], d[1] - ce, d[2]), new m(d[0], d[1] + ce, d[2])]), (_p = ct.computeLineDistances) == null ? void 0 : _p.call(ct), I.geometry.setFromPoints([new m(d[0], d[1], d[2] - ce), new m(d[0], d[1], d[2] + ce)]), (_q = I.computeLineDistances) == null ? void 0 : _q.call(I), Ae.visible = true;
        const at = Ct.material, vt = ct.material, qe = I.material;
        f === "x" ? (at.opacity = 0.95, vt.opacity = 0.1, qe.opacity = 0.1) : f === "y" ? (at.opacity = 0.1, vt.opacity = 0.95, qe.opacity = 0.1) : f === "z" ? (at.opacity = 0.1, vt.opacity = 0.1, qe.opacity = 0.95) : (at.opacity = 0.5, vt.opacity = 0.5, qe.opacity = 0.5);
      } else {
        const M = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        se.textContent = M;
        const d = document.getElementById("hk-coord-fixed");
        if (d && (d.textContent = M), Y.visible = false, Ae.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (U = null, X = null, q.style.left = n.clientX + 20 + "px", q.style.top = n.clientY - 28 + "px", q.style.display = "block", !L) {
            q.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const C = document.activeElement;
            !(C && (C.tagName === "INPUT" || C.tagName === "TEXTAREA") && C !== q) && document.activeElement !== q && q.focus({ preventScroll: true });
            try {
              q.select();
            } catch {
            }
          }
        } else V();
      }
      w();
    } else Zn(), se.style.display = "none", gt.visible = false, Y.visible = false, Ae.visible = false, V(), w();
  }), $.derive(() => {
    if (!e.gridTarget) return;
    bs(i, { position: new m(...e.gridTarget.val.position), quaternion: new qn().setFromEuler(new Pn(...e.gridTarget.val.rotation)) }, w), K.position.set(...e.gridTarget.val.position), K.quaternion.setFromEuler(new Pn(...e.gridTarget.val.rotation)), K.updateMatrixWorld();
    const n = new m(0, 0, 1).applyEuler(new Pn(...e.gridTarget.val.rotation));
    S = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), $.derive(() => {
    ue.geometry.setAttribute("position", new $t(e.points.val.flat(), 3)), ue.geometry.computeBoundingSphere();
  }), $.derive(() => {
    const n = 0.05 * k * 0.5 * g.val;
    _.params.Points.threshold = 0.4 * n;
  }), $.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, p, u] = n[s];
      t.push(l, p, u);
    }
    const r = new he();
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
    const s = Math.min(n, a), l = Math.max(n, a), p = Math.min(o, t), u = Math.max(o, t), b = a < n, M = x.getBoundingClientRect(), d = h();
    d.updateMatrixWorld();
    const f = (fe) => {
      const ze = new m(fe[0], fe[1], fe[2]);
      return ze.project(d), { x: M.left + (ze.x * 0.5 + 0.5) * M.width, y: M.top + (-ze.y * 0.5 + 0.5) * M.height };
    }, C = (fe) => fe.x >= s && fe.x <= l && fe.y >= p && fe.y <= u, R = (fe, ze) => !(fe.x < s && ze.x < s || fe.x > l && ze.x > l || fe.y < p && ze.y < p || fe.y > u && ze.y > u);
    r || Fe.clear();
    let Z = 0;
    const W = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let fe = 0; fe < W.length; fe++) {
      const ze = W[fe];
      ze && C(f(ze)) && (Fe.add(`pt:${fe}`), Z++);
    }
    const T = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], ne = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let fe = 0; fe < T.length; fe++) {
      const ze = T[fe], at = ne.includes(fe);
      let vt = false;
      for (let qe = 0; qe < ze.length - 1; qe++) {
        const $e = W[ze[qe]], ft = W[ze[qe + 1]];
        if (!$e || !ft) continue;
        const lt = f($e), bt = f(ft);
        if (C(lt) || C(bt) || R(lt, bt)) {
          if (at) {
            vt = true;
            break;
          }
          Fe.add(`seg:${fe}:${qe}`), Z++;
        }
      }
      at && vt && (Fe.add(`poly:${fe}`), Z++);
    }
    const Se = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let fe = 0; fe < Se.length; fe++) {
      const ze = Se[fe];
      if (!ze || ze.length !== 6) continue;
      const at = f([ze[0], ze[1], ze[2]]), vt = f([ze[3], ze[4], ze[5]]);
      (C(at) || C(vt) || R(at, vt)) && (Fe.add(`aux:${fe}`), Z++);
    }
    Pe(), re(`${b ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${Z} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${Fe.size})`), St.style.display = "none";
  }, Vn = () => {
    Et && (Et = null, St.style.display = "none", re("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = Vn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && Et && Vn();
  });
  const io = () => {
    var _a, _b, _c, _d;
    if (Fe.size === 0) return false;
    const n = [...Fe], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set();
    for (const R of n) {
      const [Z, ...W] = R.split(":");
      if (Z === "pt") l.add(+W[0]);
      else if (Z === "poly") p.add(+W[0]);
      else if (Z === "seg") {
        const T = +W[0], ne = +W[1];
        u.has(T) || u.set(T, /* @__PURE__ */ new Set()), u.get(T).add(ne);
      } else Z === "aux" && b.add(+W[0]);
    }
    let M = 0, d = [], f = [];
    const C = /* @__PURE__ */ new Map();
    for (let R = 0; R < a.length; R++) {
      if (p.has(R)) {
        M++;
        continue;
      }
      C.set(R, d.length);
      const Z = u.get(R);
      if (Z && Z.size > 0) {
        let W = [];
        for (let T = 0; T < a[R].length; T++) W.push(a[R][T]), T < a[R].length - 1 && Z.has(T) && (W.length >= 2 && d.push(W), W = [], M++);
        (W.length >= 2 || W.length === 1) && d.push(W);
      } else d.push([...a[R]]);
    }
    if (l.size > 0) {
      const R = [], Z = /* @__PURE__ */ new Map();
      for (let T = 0; T < o.length; T++) {
        if (l.has(T)) {
          M++;
          continue;
        }
        Z.set(T, R.length), R.push([...o[T]]);
      }
      const W = [];
      for (const T of d) {
        let ne = [];
        for (const ce of T) {
          const Se = Z.get(ce);
          Se === void 0 ? (ne.length >= 2 && W.push(ne), ne = []) : ne.push(Se);
        }
        ne.length >= 2 && W.push(ne);
      }
      d = W, e.points.val = R;
    }
    for (const R of t) {
      const Z = C.get(R);
      Z !== void 0 && Z < d.length && f.push(Z);
    }
    if (e.polylines && (e.polylines.val = d), e.areas && (e.areas.val = f), b.size > 0 && r) {
      const R = s.filter((Z, W) => !b.has(W));
      "val" in r ? r.val = R : window.__hekatanDrawingAuxLines = R, M += b.size;
    }
    Fe.clear(), Pe();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return re(`\u{1F5D1} ${M} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = io, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || Fe.size !== 0 && (n.preventDefault(), io());
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
      const p = Xt.getBoundingClientRect();
      r = p.left, s = p.top, Xt.style.transform = "none", Xt.style.left = `${r}px`, Xt.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const p = l.clientX - a, u = l.clientY - t, b = Math.max(0, Math.min(window.innerWidth - 80, r + p)), M = Math.max(0, Math.min(window.innerHeight - 40, s + u));
      Xt.style.left = `${b}px`, Xt.style.top = `${M}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(lo, JSON.stringify({ left: parseFloat(Xt.style.left), top: parseFloat(Xt.style.top) }));
        } catch {
        }
      }
    });
  }, B = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 };
  let je = null;
  const kt = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, $o = () => {
    if (je && (je.dispose(), je = null), Fe.size === 0) {
      Xt.style.display = "none";
      return;
    }
    const n = [...Fe], o = n.filter((d) => d.startsWith("pt:")), a = n.filter((d) => d.startsWith("seg:")), t = n.filter((d) => d.startsWith("poly:")), r = n.filter((d) => d.startsWith("aux:")), s = o.length > 0, l = a.length > 0, p = t.length > 0, u = !s && !l && !p, b = [];
    o.length && b.push(`\u{1F535} ${o.length} nodo(s)`), a.length && b.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && b.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && b.push(`\u250A ${r.length} aux`);
    const M = `\u{1F3AF} ${Fe.size} item(s) \u2014 ${b.join(", ")}`;
    if (je = new Fo({ container: Xt, title: M }), s) {
      const d = je.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      d.addBinding(B, "Ux"), d.addBinding(B, "Uy"), d.addBinding(B, "Uz"), d.addBinding(B, "Rx"), d.addBinding(B, "Ry"), d.addBinding(B, "Rz");
      const f = je.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(B, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(B, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(B, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(B, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(B, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(B, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const C = je.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      C.addBinding(B, "Fx", { step: 0.1 }), C.addBinding(B, "Fy", { step: 0.1 }), C.addBinding(B, "Fz", { step: 0.1 }), C.addBinding(B, "Mx", { step: 0.1 }), C.addBinding(B, "My", { step: 0.1 }), C.addBinding(B, "Mz", { step: 0.1 }), je.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(B, "mass", { label: "m", min: 0, step: 1 }), je.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(B, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), je.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let W = 0;
        const T = [B.Ux, B.Uy, B.Uz, B.Rx, B.Ry, B.Rz];
        T.some((Se) => Se) && (kt("nodes", o, "supports", T), W++);
        const ne = [B.Fx, B.Fy, B.Fz, B.Mx, B.My, B.Mz];
        ne.some((Se) => Se !== 0) && (kt("nodes", o, "loads", ne), W++);
        const ce = [B.Kx, B.Ky, B.Kz, B.Krx, B.Kry, B.Krz];
        if (ce.some((Se) => Se !== 0) && (kt("nodes", o, "springs", ce), W++), B.mass !== 0 && (kt("nodes", o, "mass", B.mass), W++), B.diaphragm !== "Ninguno" && (kt("nodes", o, "diaphragm", B.diaphragm), W++), W === 0) {
          re("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let Se = document.getElementById("hk-prop-toast");
          Se || (Se = document.createElement("div"), Se.id = "hk-prop-toast", Se.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(Se)), Se.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", Se.style.background = "rgba(217,119,6,0.97)", Se.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            Se && (Se.style.opacity = "0");
          }, 3200);
        } else re(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const d = je.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      d.addBinding(B, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), d.addBinding(B, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = je.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(B, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(B, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(B, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(B, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), je.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(B, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), je.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(B, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const Z = je.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      Z.addBinding(B, "relMxI", { label: "Mx I" }), Z.addBinding(B, "relMyI", { label: "My I" }), Z.addBinding(B, "relMzI", { label: "Mz I" });
      const W = je.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      W.addBinding(B, "relMxJ", { label: "Mx J" }), W.addBinding(B, "relMyJ", { label: "My J" }), W.addBinding(B, "relMzJ", { label: "Mz J" }), je.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(B, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const ne = je.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      ne.addBinding(B, "LKx", { label: "LKx", min: 0, step: 100 }), ne.addBinding(B, "LKy", { label: "LKy", min: 0, step: 100 }), ne.addBinding(B, "LKz", { label: "LKz", min: 0, step: 100 });
      const ce = je.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      ce.addBinding(B, "qx", { step: 0.1 }), ce.addBinding(B, "qy", { step: 0.1 }), ce.addBinding(B, "qz", { step: 0.1 }), je.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(B, "massPerM", { label: "m/L", min: 0, step: 1 }), je.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        kt("segs", a, "section", B.section), kt("segs", a, "material", B.material_frame);
        const fe = { A: B.A_mod, Iz: B.Iz_mod, Iy: B.Iy_mod, J: B.J_mod };
        (fe.A !== 1 || fe.Iz !== 1 || fe.Iy !== 1 || fe.J !== 1) && kt("segs", a, "modifiers", fe), B.insertionPoint !== "10 \u2014 Centroid" && kt("segs", a, "insertionPoint", B.insertionPoint), B.beta !== 0 && kt("segs", a, "beta", B.beta);
        const ze = [B.relMxI, B.relMyI, B.relMzI], at = [B.relMxJ, B.relMyJ, B.relMzJ];
        (ze.some(($e) => $e) || at.some(($e) => $e)) && kt("segs", a, "releases", { i: ze, j: at }), B.hinges !== "None" && kt("segs", a, "hinges", B.hinges);
        const vt = [B.LKx, B.LKy, B.LKz];
        vt.some(($e) => $e !== 0) && kt("segs", a, "lineSprings", vt);
        const qe = [B.qx, B.qy, B.qz];
        qe.some(($e) => $e !== 0) && kt("segs", a, "distLoad", qe), B.massPerM !== 0 && kt("segs", a, "massPerM", B.massPerM), re(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (p) {
      const d = je.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      d.addBinding(B, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), d.addBinding(B, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), d.addBinding(B, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), je.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(B, "surfLoad", { label: "q", step: 0.1 }), je.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        kt("areas", t, "shellType", B.shellType), kt("areas", t, "thickness", B.thickness), kt("areas", t, "material", B.material_shell), B.surfLoad !== 0 && kt("areas", t, "surfLoad", B.surfLoad), re(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (u) {
      const d = je.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      d.addBinding(f, "msg", { readonly: true, label: "" });
    }
    je.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      Fe.clear(), Pe();
    }), Xt.style.display = "block", Io();
  };
  window.__hekatanRefreshPropsPane = $o;
  let hn = null, Tn = false;
  x.addEventListener("pointerdown", (n) => {
    n.button === 2 && (hn = { x: n.clientX, y: n.clientY }, Tn = false);
  }), x.addEventListener("pointermove", (n) => {
    if (hn && n.buttons & 2 && !Tn) {
      const o = n.clientX - hn.x, a = n.clientY - hn.y;
      Math.hypot(o, a) > 8 && (Tn = true);
    }
  }), x.addEventListener("pointerup", (n) => {
    var _a, _b, _c;
    if (n.button === 2) {
      const o = hn !== null && !Tn;
      hn = null;
      const a = window.__hekatanRClickOnElement === true;
      if (window.__hekatanRClickOnElement = false, a) return;
      if (o) {
        if (Et ? Vn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), Fe.size > 0 && (Fe.clear(), Pe()), e.polylines) {
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
      const p = en.children.pop();
      (_b = (_a = p.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = p.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Ro[n] ?? 16777215, s = 0.05, l = new he().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    en.add(new Qt(l, new ht({ color: r, linewidth: 2 }))), en.position.set(0, 0, 0), en.visible = true;
  }, Zn = () => {
    en.visible = false;
  }, Bo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let p = null;
    const u = (d, f, C, R) => {
      const Z = Math.hypot(f - n, C - o, R - a);
      Z > t || (!p || Z < p.d) && (p = { type: d, x: f, y: C, z: R, d: Z });
    };
    (r.node || r.end) && s.forEach((d) => {
      r.node && u("node", d[0], d[1], d[2]);
    });
    for (const d of l) if (!(d.length < 2)) for (let f = 0; f < d.length - 1; f++) {
      const C = s[d[f]], R = s[d[f + 1]];
      if (!(!C || !R) && (r.end && (u("end", C[0], C[1], C[2]), u("end", R[0], R[1], R[2])), r.mid && u("mid", (C[0] + R[0]) / 2, (C[1] + R[1]) / 2, (C[2] + R[2]) / 2), r.nea || r.per)) {
        const Z = R[0] - C[0], W = R[1] - C[1], T = R[2] - C[2], ne = Z * Z + W * W + T * T;
        if (ne < 1e-12) continue;
        const ce = Math.max(0, Math.min(1, ((n - C[0]) * Z + (o - C[1]) * W + (a - C[2]) * T) / ne)), Se = C[0] + ce * Z, fe = C[1] + ce * W, ze = C[2] + ce * T;
        r.nea && u("nea", Se, fe, ze), r.per && u("per", Se, fe, ze);
      }
    }
    const b = window.__hekatanDrawingAuxLines, M = (b == null ? void 0 : b.rawVal) ?? (b == null ? void 0 : b.val) ?? b ?? [];
    for (const d of M) {
      if (d.length !== 6) continue;
      const f = [d[0], d[1], d[2]], C = [d[3], d[4], d[5]];
      if (r.end && (u("end", f[0], f[1], f[2]), u("end", C[0], C[1], C[2])), r.mid && u("mid", (f[0] + C[0]) / 2, (f[1] + C[1]) / 2, (f[2] + C[2]) / 2), r.nea || r.per) {
        const R = C[0] - f[0], Z = C[1] - f[1], W = C[2] - f[2], T = R * R + Z * Z + W * W;
        if (T < 1e-12) continue;
        const ne = Math.max(0, Math.min(1, ((n - f[0]) * R + (o - f[1]) * Z + (a - f[2]) * W) / T)), ce = f[0] + ne * R, Se = f[1] + ne * Z, fe = f[2] + ne * W;
        r.nea && u("nea", ce, Se, fe), r.per && u("per", ce, Se, fe);
      }
    }
    return p ? { type: p.type, x: p.x, y: p.y, z: p.z } : null;
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
    _.setFromCamera(P, o);
    const a = H();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(c.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), p = a[0].point;
      if (!isFinite(p.x) || !isFinite(p.y) || !isFinite(p.z) || l > Math.max(s * 12, 300)) {
        re("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
        return;
      }
    }
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new m(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], p = e.points.rawVal ?? [];
      if (l.length > 0) {
        const u = p[l[l.length - 1]];
        if (u) {
          const b = !!window.__hekatanOrthoMode;
          let M = J;
          if (!M && b) {
            const d = Math.abs(t.x - u[0]), f = Math.abs(t.y - u[1]), C = Math.abs(t.z - u[2]);
            M = d >= f && d >= C ? "x" : f >= C ? "y" : "z";
          }
          M === "x" ? t = new m(t.x, u[1], u[2]) : M === "y" ? t = new m(u[0], t.y, u[2]) : M === "z" && (t = new m(u[0], u[1], t.z));
        }
      }
    }
    if (ke) t = ke.clone(), re(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new m(l.x, l.y, l.z), re(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const p = window.__hekatanSnapEnabled !== false, u = window.__hekatanSnap2D ?? 0;
        p && u > 0 && (t = new m(Math.round(t.x / u) * u, Math.round(t.y / u) * u, Math.round(t.z / u) * u));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (_t) {
        Et && Vn();
        const { kind: s, a: l, b: p } = _t, u = p !== void 0 ? `${s}:${l}:${p}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || Fe.clear(), Fe.has(u) ? Fe.delete(u) : Fe.add(u), Pe(), re(`\u2713 Seleccionados ${Fe.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, p = n.clientY;
        Et ? (ao(Et.x, Et.y, l, p, s), Et = null) : s || (Et = { x: l, y: p }, re("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), un(l, p, l + 1, p + 1, false));
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
      const l = s.mode === "number", p = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      re(`\u2713 Eje "${p}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (Be >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], p = Be;
        if (p >= 0 && p < l.length) {
          ln();
          const u = l.slice(0, p).concat(l.slice(p + 1));
          s && typeof s == "object" && "val" in s ? s.val = u : window.__hekatanDrawingAuxLines = u, re(`\u{1F5D1} L\xEDnea auxiliar #${p + 1} borrada`), Be = -1, be.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (yt >= 0) {
        const s = yt, l = pt;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (Rt(s), re(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (Ue(s, l), re(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (Rt(s), re(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else re("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ee, p = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const u = Math.abs(l[1] - s[1]), M = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : u < 1e-3 ? "xz" : "yz", d = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], p, d, M), re(`\u2713 C\xEDrculo dibujado en ${M.toUpperCase()} \u2014 r=${p.toFixed(2)}m, ${d} segmentos`), Ee = [];
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
      const [s, l, p] = Ee, u = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, p, u), re(`\u2713 Arco dibujado \u2014 ${u} segmentos`), Ee = [];
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
      const [s, l, p] = Ee, u = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, p);
      re(u ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ee = [];
      return;
    }
    if (r === "col") {
      ln();
      const s = t.z, l = Vt && Vt > 0 ? Vt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const p = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [u - 2, u - 1], []], Vt = 0, re(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
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
      const [s, l] = Ee, p = Vt && Vt > 0 ? Vt : 3;
      ln();
      const u = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + p], [s[0], s[1], s[2] + p]];
      const b = e.polylines.rawVal;
      if (b.length - 1, e.polylines.val = [...b.slice(0, -1), ...b[b.length - 1].length > 0 ? [b[b.length - 1]] : [], [u, u + 1, u + 2, u + 3, u], []], e.areas) {
        const M = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, M];
      }
      re(`\u25A5 Pared Q4 creada \u2014 h=${p.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ee = [], Vt = 0;
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
      const p = e.polylines.rawVal, u = e.points.rawVal.length;
      e.polylines.val = [...p.slice(0, -1), ...p[p.length - 1].length > 0 ? [p[p.length - 1]] : [], [u - 2, u - 1], []], Vt = 0, re(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
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
      const p = e.polylines.rawVal, u = e.points.rawVal, b = p[l.polyIdx], M = u[b[l.segIdx]], d = u[b[l.segIdx + 1]];
      if (!M || !d) {
        re("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const f = Vt && Vt > 0 ? Vt : 3;
      ln();
      const C = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [M[0], M[1], M[2]], [d[0], d[1], d[2]], [d[0], d[1], d[2] + f], [M[0], M[1], M[2] + f]];
      const R = e.polylines.rawVal;
      if (e.polylines.val = [...R.slice(0, -1), ...R[R.length - 1].length > 0 ? [R[R.length - 1]] : [], [C, C + 1, C + 2, C + 3, C], []], e.areas) {
        const Z = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, Z];
      }
      Vt = 0, re(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${f.toFixed(2)}m`);
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
      const [s, l] = Ee, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const f = p.rawVal ?? p.val ?? [];
        p.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const u = l[0] - s[0], b = l[1] - s[1], M = l[2] - s[2], d = Math.sqrt(u * u + b * b + M * M);
      re(`\u2713 L\xEDnea auxiliar creada \u2014 L=${d.toFixed(2)}m (cyan, no FEM)`), Ee = [];
      return;
    }
    if (r === "extend") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ee, p = window.__hekatanDrawingAuxLines;
      if (p) {
        const u = p.rawVal ?? p.val ?? [];
        p.val = [...u, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      re("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ee = [];
      return;
    }
    if (r === "chaflan") {
      if (Ee.push([t.x, t.y, t.z]), Ee.length === 1) {
        re("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ee, p = window.__hekatanChaflanR ?? 1, u = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, p, u, 6);
      const b = Math.abs(l[0] - s[0]).toFixed(1), M = Math.abs(l[1] - s[1]).toFixed(1);
      re(`\u2713 Losa con chaflanes dibujada \u2014 ${b}\xD7${M}m, r=${p}m, ${u} seg/chafl\xE1n`), Ee = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (L = false, ln(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, p = s[l] ?? [];
      if (r === "line" && p.length === 2) {
        e.polylines.val = [...s, []], re("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && p.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...p, p[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), re("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
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
    _.setFromCamera(P, o);
    const a = H();
    if (oe.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], p = l[l.length - 1] ?? [], u = e.points.rawVal ?? [];
        if (p.length > 0) {
          const b = u[p[p.length - 1]];
          if (b) {
            const M = !!window.__hekatanOrthoMode;
            let d = J;
            if (!d && M) {
              const f = Math.abs(t.x - b[0]), C = Math.abs(t.y - b[1]), R = Math.abs(t.z - b[2]);
              d = f >= C && f >= R ? "x" : C >= R ? "y" : "z";
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
      oe.geometry.setAttribute("position", new $t(t.toArray(), 3));
    }
    w();
  }), x.addEventListener("pointermove", (n) => {
    var _a;
    const o = v(n);
    if (!o) return;
    _.setFromCamera(P, o);
    let a = false;
    const t = _.intersectObject(ue), r = H();
    if (t.length && r.length) {
      const s = new m(...e.points.rawVal[t[0].index]), l = new m(...r[0].point), p = s.sub(l), u = (_a = r[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(K.matrixWorld), Math.abs(p.dot(u)) < 1e-4 && (a = true);
    }
    oe.visible = !a;
  });
  let Un = false, Kn;
  x.addEventListener("pointermove", (n) => {
    var _a;
    if (!jt) return;
    const o = v(n);
    if (!o) return;
    _.setFromCamera(P, o);
    let a = false;
    const t = _.intersectObject(ue), r = H();
    if (t.length && r.length) {
      const l = new m(...e.points.rawVal[t[0].index]), p = new m(...r[0].point), u = l.sub(p), b = (_a = r[0].face) == null ? void 0 : _a.normal;
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
    _.setFromCamera(P, o);
    let a = false;
    const t = _.intersectObject(ue), r = H();
    if (t.length && r.length) {
      const p = new m(...e.points.rawVal[t[0].index]), u = new m(...r[0].point), b = p.sub(u), M = (_a = r[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(K.matrixWorld), Math.abs(b.dot(M)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((p) => p.filter((u) => u !== t[0].index)).map((p) => p.map((u) => u > t[0].index ? u - 1 : u)).filter((p) => p.length);
    l.push([]), e.polylines.val = l;
  });
}
function bs(e, i, y) {
  const k = Math.round(14.999999999999998), g = { position: e.position.clone(), quaternion: e.quaternion.clone() }, x = setInterval(_, 1e3 / 30);
  let w = 0;
  function _() {
    w++;
    const P = w / k;
    e.position.lerpVectors(g.position, i.position, P), e.quaternion.slerpQuaternions(g.quaternion, i.quaternion, P), y && y(), w == k && clearInterval(x);
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
    const h = 1 / this.n, c = new qt(), k = new qt();
    this.lut.length = 0, this.lut.push(new qt(this.map[0][1]));
    for (let g = 1; g < y; g++) {
      const x = g * h;
      for (let w = 0; w < this.map.length - 1; w++) if (x > this.map[w][0] && x <= this.map[w + 1][0]) {
        const _ = this.map[w][0], P = this.map[w + 1][0];
        c.setHex(this.map[w][1], Ln), k.setHex(this.map[w + 1][1], Ln);
        const v = new qt().lerpColors(c, k, (x - _) / (P - _));
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
    const y = i.getContext("2d", { alpha: false }), h = y.getImageData(0, 0, 1, this.n), c = h.data;
    let k = 0;
    const g = 1 / this.n, x = new qt(), w = new qt(), _ = new qt();
    for (let P = 1; P >= 0; P -= g) for (let v = this.map.length - 1; v >= 0; v--) if (P < this.map[v][0] && P >= this.map[v - 1][0]) {
      const K = this.map[v - 1][0], ae = this.map[v][0];
      x.setHex(this.map[v - 1][1], Ln), w.setHex(this.map[v][1], Ln), _.lerpColors(x, w, (P - K) / (ae - K)), c[k * 4] = Math.round(_.r * 255), c[k * 4 + 1] = Math.round(_.g * 255), c[k * 4 + 2] = Math.round(_.b * 255), c[k * 4 + 3] = 255, k += 1;
    }
    return y.putImageData(h, 0, 0), i;
  }
}
const On = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Cn = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Ms(e) {
  e = Math.max(0, Math.min(1, e));
  for (let y = 0; y < Cn.length - 1; y++) {
    const [h, c, k, g] = Cn[y], [x, w, _, P] = Cn[y + 1];
    if (e <= x) {
      const v = (e - h) / (x - h);
      return [c + (w - c) * v, k + (_ - k) * v, g + (P - g) * v];
    }
  }
  const i = Cn[Cn.length - 1];
  return [i[1], i[2], i[3]];
}
function _s() {
  const i = new Uint8Array(1024);
  for (let h = 0; h < 256; h++) {
    const c = h / 255, [k, g, x] = Ms(c);
    i[h * 4 + 0] = k, i[h * 4 + 1] = g, i[h * 4 + 2] = x, i[h * 4 + 3] = 255;
  }
  const y = new qo(i, 256, 1, Jo);
  return y.minFilter = go, y.magFilter = go, y.wrapS = vo, y.wrapT = vo, y.needsUpdate = true, y;
}
function Ss(e, i, y) {
  new Lo();
  const h = _s(), c = new Wo({ uniforms: { cmap: { value: h }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Yt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), k = new Qe(new he(), c);
  return k.renderOrder = -1, k.frustumCulled = false, k.userData.isShellArea = true, k.name = "__hekatan_shell_colormap", $.derive(() => {
    k.geometry.setAttribute("position", new $t(e.val.flat(), 3));
    const g = [];
    for (const S of i.val) S.length === 3 ? g.push(S[0], S[1], S[2]) : S.length === 4 && (g.push(S[0], S[1], S[2]), g.push(S[0], S[2], S[3]));
    k.geometry.setIndex(new Go(g, 1));
    const x = y.val.filter((S) => Number.isFinite(S));
    let w, _;
    const P = so.val;
    if (P ? (_ = P[0], w = P[1]) : (w = x.length ? Math.max(...x) : 1, _ = x.length ? Math.min(...x) : 0, _ >= 0 && w > 0 && (_ = 0)), w === _) {
      const S = Math.max(Math.abs(w) * 1e-6, 1e-9);
      w += S, _ -= S;
    }
    const v = P && P[0] > P[1], K = Math.min(_, w), ae = Math.max(_, w), me = ae - K, de = new Float32Array(y.val.length);
    for (let S = 0; S < y.val.length; S++) {
      const H = y.val[S];
      if (!Number.isFinite(H)) {
        de[S] = -1;
        continue;
      }
      const oe = ((v ? ae + K - H : H) - K) / me;
      de[S] = Math.max(0, Math.min(1, oe));
    }
    k.geometry.setAttribute("scalar", new rt(de, 1));
  }), k;
}
function ks(e, i, y, h) {
  const c = Ss(y, e.elements, h);
  return $.derive(() => {
    c.visible = i.shellResults.val != "none";
  }), c;
}
const Ps = 6, jn = 10, Cs = 0.012;
function zs(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function Fs(e, i, y, h) {
  if (!y && !h) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const k = y[e];
    if (k && k.has(i)) return k.get(i);
  }
  return null;
}
function As(e, i, y, h) {
  const c = new tt(), k = new Lo();
  k.setColorMap("rainbow");
  const g = new qt(), x = $.state([]);
  return $.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const w = y.val, _ = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], P = zs(i.frameResults.val);
    if (c.children.forEach((z) => {
      z.geometry && z.geometry.dispose(), z.material && z.material.dispose();
    }), c.clear(), !P || _.length === 0 || w.length === 0) {
      x.val = [];
      return;
    }
    const v = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, K = (_c = e.deformOutputs) == null ? void 0 : _c.val, ae = [], me = [];
    for (let z = 0; z < _.length; z++) {
      if (_[z].length !== 2) continue;
      const j = Fs(P, z, v, K);
      j && (ae.push(j[0], j[1]), me.push({ idx: z, vals: j }));
    }
    if (ae.length === 0) {
      x.val = [];
      return;
    }
    const de = Math.min(...ae), S = Math.max(...ae);
    k.setMin(de), k.setMax(S), x.val = ae;
    const H = [1 / 0, 1 / 0, 1 / 0], ue = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of w) for (let D = 0; D < 3; D++) H[D] = Math.min(H[D], z[D]), ue[D] = Math.max(ue[D], z[D]);
    const ge = Math.max(ue[0] - H[0], ue[1] - H[1], ue[2] - H[2], 1) * Cs, q = [], U = [], X = [];
    let L = 0;
    for (const { idx: z, vals: D } of me) {
      const j = _[z], O = w[j[0]], se = w[j[1]];
      if (!O || !se) continue;
      const E = new m(se[0] - O[0], se[1] - O[1], se[2] - O[2]), Y = E.length();
      if (Y < 1e-10) continue;
      E.normalize();
      const ee = Math.abs(E.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), ie = new m().crossVectors(E, ee).normalize(), G = new m().crossVectors(E, ie).normalize(), Ce = jn + 1, ve = Ps;
      for (let Me = 0; Me < Ce; Me++) {
        const Le = Me / jn, Ae = O[0] + E.x * Y * Le, Pt = O[1] + E.y * Y * Le, Ct = O[2] + E.z * Y * Le, ct = D[0] + (D[1] - D[0]) * Le, I = k.getColor(ct) ?? new qt(0, 0, 0);
        g.copy(I).convertSRGBToLinear();
        for (let te = 0; te < ve; te++) {
          const le = te / ve * Math.PI * 2, pe = Math.cos(le), Te = Math.sin(le);
          q.push(Ae + (ie.x * pe + G.x * Te) * ge, Pt + (ie.y * pe + G.y * Te) * ge, Ct + (ie.z * pe + G.z * Te) * ge), U.push(g.r, g.g, g.b);
        }
      }
      for (let Me = 0; Me < jn; Me++) for (let Le = 0; Le < ve; Le++) {
        const Ae = (Le + 1) % ve, Pt = L + Me * ve + Le, Ct = L + Me * ve + Ae, ct = L + (Me + 1) * ve + Le, I = L + (Me + 1) * ve + Ae;
        X.push(Pt, Ct, I), X.push(Pt, I, ct);
      }
      L += Ce * ve;
    }
    if (q.length === 0) return;
    const A = new he();
    A.setAttribute("position", new $t(q, 3)), A.setAttribute("color", new $t(U, 3)), A.setIndex(X), A.computeVertexNormals();
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
  const y = new yn(1, 16, 16), h = new nt({ color: Is, transparent: true, opacity: 0.85, depthTest: false }), c = new Qe(y, h);
  c.visible = false, c.renderOrder = 100, i.add(c);
  const k = new he(), g = new ht({ color: Po, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), x = new Qt(k, g);
  x.visible = false, x.renderOrder = 100, i.add(x);
  const w = new nt({ color: Po, transparent: true, opacity: 0.7, depthTest: false }), _ = new Qe(new bo(1, 1, 1, 12), w);
  _.visible = false, _.renderOrder = 100, i.add(_);
  const P = new he(), v = new nt({ color: $s, transparent: true, opacity: 0.45, side: Yt, depthTest: false }), K = new Qe(P, v);
  K.visible = false, K.renderOrder = 100, i.add(K);
  const ae = new he(), me = new ht({ color: Rs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), de = new Qt(ae, me);
  de.visible = false, de.renderOrder = 100, i.add(de);
  const S = new nt({ color: Rn, transparent: true, opacity: 0.95, depthTest: false }), H = new Qe(y, S);
  H.visible = false, H.renderOrder = 101, i.add(H);
  const ue = new nt({ color: Rn, transparent: true, opacity: 0.85, depthTest: false }), oe = new Qe(new bo(1, 1, 1, 12), ue);
  oe.visible = false, oe.renderOrder = 101, i.add(oe);
  const ge = new he(), q = new nt({ color: Rn, transparent: true, opacity: 0.55, side: Yt, depthTest: false }), U = new Qe(ge, q);
  U.visible = false, U.renderOrder = 101, i.add(U);
  const X = new he(), L = new ht({ color: Rn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), A = new Qt(X, L);
  A.visible = false, A.renderOrder = 101, i.add(A);
  let F = null;
  const V = document.createElement("div");
  Object.assign(V.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), V.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(V);
  }, 0);
  function z(N) {
    const J = e.derivedNodes.rawVal;
    return !J || N < 0 || N >= J.length ? null : new m(J[N][0], J[N][1], J[N][2]);
  }
  function D(N, J) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2;
    const ke = e.getActiveCamera();
    if (!ke || !e.mesh) return null;
    const Q = e.rendererElm.getBoundingClientRect(), Ke = N - Q.left, Ne = J - Q.top, Je = e.derivedNodes.rawVal, Ve = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Je || !Ve) return null;
    const He = /* @__PURE__ */ new Map(), be = (Xe) => {
      if (He.has(Xe)) return He.get(Xe);
      const Pe = z(Xe);
      if (!Pe) return He.set(Xe, null), null;
      const we = Pe.clone().project(ke), Re = (we.x * 0.5 + 0.5) * Q.width, ye = (-we.y * 0.5 + 0.5) * Q.height, st = { x: Re, y: ye, z: we.z };
      return He.set(Xe, st), st;
    }, yt = /* @__PURE__ */ new Set();
    for (const Xe of Ve) if (Xe) for (const Pe of Xe) yt.add(Pe);
    const pt = 8;
    let Be = -1, Fe = pt;
    for (let Xe = 0; Xe < Je.length; Xe++) {
      if (!yt.has(Xe)) continue;
      const Pe = be(Xe);
      if (!Pe || Pe.z < -1 || Pe.z > 1) continue;
      const we = Pe.x - Ke, Re = Pe.y - Ne, ye = Math.sqrt(we * we + Re * Re);
      ye < Fe && (Fe = ye, Be = Xe);
    }
    const _e = Es(), We = Ts[_e.dispUnit] ?? 1e3, ot = Vs[_e.forceUnit] ?? 1;
    if (Be >= 0) {
      const Xe = Je[Be];
      let Pe = `Nodo ${Be}
(${Xe[0].toFixed(3)}, ${Xe[1].toFixed(3)}, ${Xe[2].toFixed(3)})`;
      const we = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (we == null ? void 0 : we.deformations) {
        const Re = we.deformations.get(Be);
        if (Re && (Pe += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Pe += `
Ux = ${Mt(Re[0] * We, 3)} ${_e.dispUnit}`, Pe += `
Uy = ${Mt(Re[1] * We, 3)} ${_e.dispUnit}`, Pe += `
Uz = ${Mt(Re[2] * We, 3)} ${_e.dispUnit}`, (Math.abs(Re[3]) > 1e-9 || Math.abs(Re[4]) > 1e-9 || Math.abs(Re[5]) > 1e-9) && (Pe += `
Rx = ${Mt(Re[3] * 1e3, 3)} mrad`, Pe += `
Ry = ${Mt(Re[4] * 1e3, 3)} mrad`, Pe += `
Rz = ${Mt(Re[5] * 1e3, 3)} mrad`)), we.reactions) {
          const ye = we.reactions.get(Be);
          ye && (Math.abs(ye[0]) > 1e-9 || Math.abs(ye[1]) > 1e-9 || Math.abs(ye[2]) > 1e-9 || Math.abs(ye[3]) > 1e-6 || Math.abs(ye[4]) > 1e-6 || Math.abs(ye[5]) > 1e-6) && (Pe += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Pe += `
Fx = ${Mt(ye[0] * ot)} ${_e.forceUnit}`, Pe += `
Fy = ${Mt(ye[1] * ot)} ${_e.forceUnit}`, Pe += `
Fz = ${Mt(ye[2] * ot)} ${_e.forceUnit}`, (Math.abs(ye[3]) > 1e-6 || Math.abs(ye[4]) > 1e-6 || Math.abs(ye[5]) > 1e-6) && (Pe += `
Mx = ${Mt(ye[3] * ot)} ${_e.forceUnit}\xB7m`, Pe += `
My = ${Mt(ye[4] * ot)} ${_e.forceUnit}\xB7m`, Pe += `
Mz = ${Mt(ye[5] * ot)} ${_e.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Be, info: Pe };
    }
    const dn = 5;
    let Ze = -1, Ht = dn, _t = "frame";
    for (let Xe = 0; Xe < Ve.length; Xe++) {
      const Pe = Ve[Xe];
      if (!(!Pe || Pe.length < 2)) {
        if (Pe.length === 2) {
          const we = be(Pe[0]), Re = be(Pe[1]);
          if (!we || !Re || we.z < -1 || we.z > 1 || Re.z < -1 || Re.z > 1) continue;
          const ye = Xs(Ke, Ne, we.x, we.y, Re.x, Re.y);
          ye < Ht && (Ht = ye, Ze = Xe, _t = "frame");
        } else if (Pe.length === 3 || Pe.length === 4) {
          const we = [];
          let Re = true;
          for (const ye of Pe) {
            const st = be(ye);
            if (!st || st.z < -1 || st.z > 1) {
              Re = false;
              break;
            }
            we.push(st);
          }
          if (!Re) continue;
          if (Ys(Ke, Ne, we)) {
            const st = we.reduce((ut, Rt) => ut + Rt.z, 0) / we.length * 1e-3;
            st < Ht && (Ht = st, Ze = Xe, _t = "shell");
          }
        } else if (Pe.length === 8) {
          const we = [];
          let Re = true;
          for (const Ue of Pe) {
            const Ge = be(Ue);
            if (!Ge || Ge.z < -1 || Ge.z > 1) {
              Re = false;
              break;
            }
            we.push(Ge);
          }
          if (!Re) continue;
          const ye = Math.min(...we.map((Ue) => Ue.x)), st = Math.max(...we.map((Ue) => Ue.x)), ut = Math.min(...we.map((Ue) => Ue.y)), Rt = Math.max(...we.map((Ue) => Ue.y));
          if (Ke >= ye && Ke <= st && Ne >= ut && Ne <= Rt) {
            const Ge = we.reduce((Oe, it) => Oe + it.z, 0) / we.length * 1e-3;
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
        const st = /concrete|hormig|rect.*sólida/i.test(ye.shape || ""), ut = st ? 100 : 1e3, Rt = st ? "cm" : "mm", Ue = (Oe) => {
          const it = Oe * ut;
          return Math.abs(it - Math.round(it)) < 0.05 ? `${Math.round(it)}` : `${it.toFixed(1)}`;
        }, Ge = [];
        if (ye.D != null && Ge.push(`D=${Ue(ye.D)}`), ye.B != null && Ge.push(`B=${Ue(ye.B)}`), ye.TF != null && Ge.push(`TF=${Ue(ye.TF)}`), ye.TW != null && Ge.push(`TW=${Ue(ye.TW)}`), ye.t != null && Ge.push(`t=${Ue(ye.t)}`), Ge.length && (we += `
  Dim: ${Ge.join(" ")} ${Rt}`), ye.material) {
          let Oe = ye.material;
          ye.fillMaterial && (Oe += ` + FILL "${ye.fillMaterial}"`), we += `
  Mat: ${Oe}`;
        }
      } else {
        const st = (_i = (_h = Re == null ? void 0 : Re.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Ze), ut = (_k = (_j = Re == null ? void 0 : Re.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Ze);
        st ? (we += `
  ${st}`, ut && !st.includes(ut) && (we += `  (${ut})`)) : ut && (we += `
  Material: ${ut}`);
      }
      if (we += `
nodos: [${Xe.join(", ")}]`, _t === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const st = e.mesh.analyzeOutputs.rawVal, ut = Ls[_e.stressUnit] ?? 1, Rt = [["bendingXX", "Mxx", ot, `${_e.forceUnit}\xB7m/m`], ["bendingYY", "Myy", ot, `${_e.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", ot, `${_e.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", ot, `${_e.forceUnit}/m`], ["membraneYY", "Nyy", ot, `${_e.forceUnit}/m`], ["membraneXY", "Nxy", ot, `${_e.forceUnit}/m`], ["shearX", "Qx", ot, `${_e.forceUnit}/m`], ["shearY", "Qy", ot, `${_e.forceUnit}/m`], ["vonMises", "\u03C3VM", ut, _e.stressUnit], ["pressure", "p", ut, _e.stressUnit]], Ue = [];
        for (const [Ge, Oe, it, Nt] of Rt) {
          const Zt = st == null ? void 0 : st[Ge];
          if (Zt && Zt instanceof Map) {
            const Wt = Zt.get(Ze);
            if (Wt != null) {
              if (typeof Wt == "number") Ue.push(`${Oe} = ${Mt(Wt * it, 3)} ${Nt}`);
              else if (Array.isArray(Wt)) {
                let xt = Wt[0];
                for (const on of Wt) Math.abs(on) > Math.abs(xt) && (xt = on);
                Ue.push(`${Oe} = ${Mt(xt * it, 3)} ${Nt}`);
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
        const st = e.mesh.deformOutputs.rawVal, ut = e.mesh.elementInputs.rawVal, Rt = st == null ? void 0 : st.deformations;
        if (Rt && Xe.length === 2) {
          const Ue = Rt.get(Xe[0]), Ge = Rt.get(Xe[1]), Oe = Je[Xe[0]], it = Je[Xe[1]];
          if (Ue && Ge && Oe && it) {
            const Nt = it[0] - Oe[0], Zt = it[1] - Oe[1], Wt = it[2] - Oe[2], xt = Math.sqrt(Nt * Nt + Zt * Zt + Wt * Wt);
            if (xt > 1e-9) {
              const on = Nt / xt, gt = Zt / xt, Fn = Wt / xt, xn = (Ge[0] - Ue[0]) * on + (Ge[1] - Ue[1]) * gt + (Ge[2] - Ue[2]) * Fn, Jt = ((_n = ut.elasticities) == null ? void 0 : _n.get(Ze)) ?? 0, gn = ((_o2 = ut.areas) == null ? void 0 : _o2.get(Ze)) ?? 0, An = ((_p = ut.momentsOfInertiaY) == null ? void 0 : _p.get(Ze)) ?? 0, Nn = ((_q = ut.momentsOfInertiaZ) == null ? void 0 : _q.get(Ze)) ?? 0, vn = ((_r = ut.torsionalConstants) == null ? void 0 : _r.get(Ze)) ?? 0, En = ((_s2 = ut.shearModuli) == null ? void 0 : _s2.get(Ze)) ?? Jt / 2.6, pn = Jt * gn * (xn / xt), jt = (Ge[3] - Ue[3]) * on + (Ge[4] - Ue[4]) * gt + (Ge[5] - Ue[5]) * Fn, St = En * vn * (jt / xt), Dt = Ge[4] - Ue[4], an = Ge[5] - Ue[5], Et = Jt * An * Dt / xt, un = Jt * Nn * an / xt;
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
  function j(N, J, ke) {
    var _a, _b, _c;
    if (c.visible = false, x.visible = false, _.visible = false, K.visible = false, de.visible = false, !N || !e.mesh) {
      V.style.display = "none", e.render();
      return;
    }
    const Q = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (N.type === "node") {
      const Ve = z(N.idx);
      if (Ve) {
        const He = e.derivedNodes.rawVal ?? [];
        let be = 1;
        if (He.length >= 2) {
          let Be = [1 / 0, 1 / 0, 1 / 0], Fe = [-1 / 0, -1 / 0, -1 / 0];
          for (const _e of He) for (let We = 0; We < 3; We++) _e[We] < Be[We] && (Be[We] = _e[We]), _e[We] > Fe[We] && (Fe[We] = _e[We]);
          be = Math.max(Fe[0] - Be[0], Fe[1] - Be[1], Fe[2] - Be[2], 0.1);
        }
        const yt = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, pt = 0.015 * be * yt;
        c.position.copy(Ve), c.scale.setScalar(pt), c.visible = true;
      }
    } else if (N.type === "frame" && Q) {
      const Ve = Q[N.idx], He = z(Ve[0]), be = z(Ve[1]);
      if (He && be) {
        const yt = He.clone().add(be).multiplyScalar(0.5), pt = be.clone().sub(He), Be = pt.length(), Fe = e.getActiveCamera();
        let _e;
        if (Fe.isOrthographicCamera) {
          const Ze = Fe;
          _e = (Ze.top - Ze.bottom) / Ze.zoom * 35e-4;
        } else _e = Fe.position.distanceTo(yt) * 35e-4;
        _.position.copy(yt);
        const We = new m(0, 1, 0), ot = We.clone().cross(pt).normalize(), dn = We.angleTo(pt);
        _.quaternion.setFromAxisAngle(ot, dn), _.scale.set(_e, Be, _e), _.visible = true;
      }
    } else if (N.type === "shell" && Q) {
      const Ve = Q[N.idx], He = [], be = [];
      for (const yt of Ve) {
        const pt = z(yt);
        if (!pt) return;
        He.push(pt.x, pt.y, pt.z);
      }
      Ve.length === 4 ? be.push(0, 1, 2, 0, 2, 3) : Ve.length === 3 && be.push(0, 1, 2), P.setAttribute("position", new $t(He, 3)), P.setIndex(be), P.computeVertexNormals(), K.visible = true;
    } else if (N.type === "solid" && Q) {
      const Ve = Q[N.idx], He = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], be = [];
      for (const [yt, pt] of He) {
        const Be = z(Ve[yt]), Fe = z(Ve[pt]);
        Be && Fe && be.push(Be.x, Be.y, Be.z, Fe.x, Fe.y, Fe.z);
      }
      ae.setAttribute("position", new $t(be, 3)), de.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      V.style.display = "none", e.render();
      return;
    }
    V.textContent = N.info, V.style.whiteSpace = "pre-line", V.style.display = "block";
    const Ne = e.rendererElm.getBoundingClientRect(), Je = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ne;
    V.style.left = `${J - Je.left}px`, V.style.top = `${ke - Je.top}px`, e.render();
  }
  let O = "", se = 0, E = 0;
  const Y = window.__hekatanHoverDebug ?? false, ee = (N) => {
    se && cancelAnimationFrame(se), se = requestAnimationFrame(() => {
      var _a, _b, _c;
      const J = D(N.clientX, N.clientY);
      if (Y && E < 5) {
        const Q = e.derivedNodes.rawVal, Ke = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${N.clientX}, ${N.clientY}) nodes=${(Q == null ? void 0 : Q.length) ?? 0} elems=${(Ke == null ? void 0 : Ke.length) ?? 0} hover=`, J), E++;
      }
      const ke = J ? `${J.type}:${J.idx}` : "";
      if (ke !== O) O = ke, j(J, N.clientX, N.clientY);
      else if (J) {
        const Q = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        V.style.left = `${N.clientX - Q.left}px`, V.style.top = `${N.clientY - Q.top}px`;
      }
    });
  };
  let ie = null;
  const G = () => {
    O = "", c.visible = false, x.visible = false, _.visible = false, K.visible = false, de.visible = false, V.style.display = "none", e.render();
  }, Ce = (N) => {
    const J = e.rendererElm.getBoundingClientRect(), ke = N.clientX - J.left, Q = N.clientY - J.top;
    (ke < -2 || Q < -2 || ke > J.width + 2 || Q > J.height + 2) && (ie && clearTimeout(ie), ie = window.setTimeout(G, 200));
  }, ve = () => {
    ie && (clearTimeout(ie), ie = null);
  };
  e.rendererElm.addEventListener("pointermove", ee), e.rendererElm.addEventListener("pointerleave", Ce), e.rendererElm.addEventListener("pointerenter", ve);
  const Me = document.createElement("div");
  Object.assign(Me.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), Me.classList.add("hekatan-context-menu");
  let Le = null;
  const Ae = document.createElement("div");
  Object.assign(Ae.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const Pt = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], Ct = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], ct = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], I = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], te = (N, J, ke) => {
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
      dt(), Ne && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${ke}`, { detail: { type: Ne.type, idx: Ne.idx, subAction: ke } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ne.type, idx: Ne.idx, subAction: ke } })));
    }), Q;
  };
  function le(N) {
    Ae.innerHTML = "";
    const J = N === "frame" ? Pt : N === "node" ? Ct : N === "shell" ? ct : I, ke = document.createElement("div");
    ke.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", ke.textContent = `Asignar a ${N.toUpperCase()} #${(Le == null ? void 0 : Le.idx) ?? "?"}`, Ae.appendChild(ke);
    for (const Q of J) Ae.appendChild(te(Q.icon, Q.label, Q.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Ae);
  }, 0);
  function pe(N, J) {
    var _a;
    if (!Le) return;
    le(Le.type);
    const ke = Me.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Ae.style.left = `${N + ke.width}px`, Ae.style.top = `${J}px`, Ae.style.display = "block", setTimeout(() => {
      const Q = Ae.getBoundingClientRect();
      Q.right > window.innerWidth - 10 && (Ae.style.left = `${N - Q.width}px`);
    }, 0);
  }
  function Te() {
    Ae.style.display = "none";
  }
  const Ye = (N, J, ke, Q) => {
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
    const Ne = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${N}</span><span>${J}</span></span>`, Je = ke ? '<span style="color:#888;">\u25B8</span>' : "";
    return Ke.innerHTML = Ne + Je, Ke.addEventListener("mouseenter", () => {
      if (Ke.style.background = "rgba(100, 160, 255, 0.18)", ke) {
        const Ve = parseFloat(Me.style.left || "0"), He = parseFloat(Me.style.top || "0");
        pe(Ve, He);
      } else Te();
    }), Ke.addEventListener("mouseleave", () => {
      Ke.style.background = "transparent";
    }), Ke.addEventListener("click", (Ve) => {
      if (Ve.stopPropagation(), ke) return;
      const He = Le;
      dt(), Q(He);
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
  function wt(N, J, ke) {
    var _a, _b;
    Le = ke;
    const Q = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    Me.style.left = `${N - Q.left}px`, Me.style.top = `${J - Q.top}px`, Me.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function dt() {
    Me.style.display = "none", Te(), Le = null;
  }
  e.rendererElm.addEventListener("pointerdown", (N) => {
    if (N.button !== 2) return;
    const J = D(N.clientX, N.clientY);
    window.__hekatanRClickOnElement = !!J;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (N) => {
    const J = D(N.clientX, N.clientY);
    if (!J) {
      dt(), window.__hekatanRClickOnElement = false;
      return;
    }
    N.preventDefault(), N.stopImmediatePropagation(), wt(N.clientX, N.clientY, { type: J.type, idx: J.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const Bt = (N) => {
    if (Me.style.display !== "block") return;
    const J = N.target;
    Me.contains(J) || Ae.contains(J) || dt();
  };
  document.addEventListener("mousedown", Bt, true), document.addEventListener("keydown", (N) => {
    N.key === "Escape" && Me.style.display === "block" && dt();
  });
  let zt = null;
  e.rendererElm.addEventListener("pointerdown", (N) => {
    N.button === 0 && (zt = { x: N.clientX, y: N.clientY });
  }), e.rendererElm.addEventListener("pointerup", (N) => {
    if (N.button !== 0 || !zt) return;
    const J = N.clientX - zt.x, ke = N.clientY - zt.y;
    if (zt = null, J * J + ke * ke > 9) return;
    const Q = D(N.clientX, N.clientY);
    Q ? (F = { type: Q.type, idx: Q.idx }, Ot()) : (F = null, Ot());
  });
  function Ot() {
    var _a, _b;
    if (H.visible = false, oe.visible = false, U.visible = false, A.visible = false, !F || !e.mesh) {
      e.render();
      return;
    }
    const N = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (F.type === "node") {
      const J = z(F.idx);
      if (J) {
        const ke = e.derivedNodes.rawVal ?? [];
        let Q = 1;
        if (ke.length >= 2) {
          let Je = [1 / 0, 1 / 0, 1 / 0], Ve = [-1 / 0, -1 / 0, -1 / 0];
          for (const He of ke) for (let be = 0; be < 3; be++) He[be] < Je[be] && (Je[be] = He[be]), He[be] > Ve[be] && (Ve[be] = He[be]);
          Q = Math.max(Ve[0] - Je[0], Ve[1] - Je[1], Ve[2] - Je[2], 0.1);
        }
        const Ke = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ne = 0.017 * Q * Ke;
        H.position.copy(J), H.scale.setScalar(Ne), H.visible = true;
      }
    } else if (F.type === "frame" && N) {
      const J = N[F.idx], ke = z(J[0]), Q = z(J[1]);
      if (ke && Q) {
        const Ke = ke.clone().add(Q).multiplyScalar(0.5), Ne = Q.clone().sub(ke), Je = Ne.length(), Ve = e.getActiveCamera();
        let He;
        if (Ve.isOrthographicCamera) {
          const Be = Ve;
          He = (Be.top - Be.bottom) / Be.zoom * 35e-4;
        } else He = Ve.position.distanceTo(Ke) * 35e-4;
        oe.position.copy(Ke);
        const be = new m(0, 1, 0), yt = be.clone().cross(Ne).normalize(), pt = be.angleTo(Ne);
        oe.quaternion.setFromAxisAngle(yt, pt), oe.scale.set(He, Je, He), oe.visible = true;
      }
    } else if (F.type === "shell" && N) {
      const J = N[F.idx], ke = [], Q = [];
      for (const Ke of J) {
        const Ne = z(Ke);
        if (!Ne) return;
        ke.push(Ne.x, Ne.y, Ne.z);
      }
      J.length === 4 ? Q.push(0, 1, 2, 0, 2, 3) : J.length === 3 && Q.push(0, 1, 2), ge.setAttribute("position", new $t(ke, 3)), ge.setIndex(Q), ge.computeVertexNormals(), U.visible = true;
    } else if (F.type === "solid" && N) {
      const J = N[F.idx], ke = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Q = [];
      for (const [Ke, Ne] of ke) {
        const Je = z(J[Ke]), Ve = z(J[Ne]);
        Je && Ve && Q.push(Je.x, Je.y, Je.z, Ve.x, Ve.y, Ve.z);
      }
      X.setAttribute("position", new $t(Q, 3)), A.visible = true;
    }
    e.render();
  }
  return $.derive(() => {
    e.derivedNodes.val, F && Ot();
  }), i;
}
function Xs(e, i, y, h, c, k) {
  const g = c - y, x = k - h, w = g * g + x * x;
  if (w < 1e-9) {
    const me = e - y, de = i - h;
    return Math.sqrt(me * me + de * de);
  }
  let _ = ((e - y) * g + (i - h) * x) / w;
  _ = Math.max(0, Math.min(1, _));
  const P = y + _ * g, v = h + _ * x, K = e - P, ae = i - v;
  return Math.sqrt(K * K + ae * ae);
}
function Ys(e, i, y) {
  let h = false;
  for (let c = 0, k = y.length - 1; c < y.length; k = c++) {
    const g = y[c].x, x = y[c].y, w = y[k].x, _ = y[k].y;
    x > i != _ > i && e < (w - g) * (i - x) / (_ - x + 1e-12) + g && (h = !h);
  }
  return h;
}
function Co(e, i = 8) {
  const y = document.createElement("div");
  y.id = "legend";
  const h = document.createElement("div");
  h.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(h), setTimeout(() => {
    $.derive(() => {
      h.textContent = to.val ? `[${to.val}]` : "";
    });
  });
  const c = Array.from({ length: i + 1 }, (w, _) => _ / i).reverse();
  let k, g;
  c.forEach((w, _) => {
    k = document.createElement("div"), k.id = `marker-${_}`, k.className = "marker", k.style.marginTop = _ == 0 ? "0px" : `calc(${50 / i}vh - 1px)`, g = document.createElement("p"), g.id = `marker-text-${_}`, k.append(g), y.append(k);
  });
  const x = [];
  return y.querySelectorAll("p").forEach((w) => x.push(w)), setTimeout(() => {
    $.derive(() => {
      c.forEach((w, _) => {
        const P = x[_];
        P && (P.innerText = Ds(e.val, w).toString());
      });
    });
  }), y;
}
function Ds(e, i) {
  const y = so.val;
  if (y) return (y[0] + i * (y[1] - y[0])).toPrecision(3);
  const h = e.filter((g) => Number.isFinite(g));
  if (h.length === 0) return "0";
  let c = Math.min(...h);
  const k = Math.max(...h);
  return c >= 0 && k > 0 && (c = 0), (c + i * (k - c)).toPrecision(3);
}
function Os({ mesh: e, settingsObj: i, drawingObj: y, objects3D: h, solids: c }) {
  ns.DEFAULT_UP = new m(0, 0, 1);
  const k = document.createElement("div"), g = new Qo(), x = new Oo(45, 1, 0.1, 2 * 1e6), w = new jo(-10, 10, 10, -10, -1e3, 2e6);
  let _ = x;
  const P = new es({ antialias: true });
  P.localClippingEnabled = true;
  const v = new _o(x, P.domElement);
  v.enableDamping = true, v.dampingFactor = 0.1, v.screenSpacePanning = true, v.zoomSpeed = 0.8, v.panSpeed = 1.2, v.rotateSpeed = 0.9, v.keyPanSpeed = 12, v.listenToKeyEvents(window), v.touches = { ONE: In.ROTATE, TWO: In.DOLLY_PAN }, P.domElement.addEventListener("wheel", (I) => {
    if (!I.ctrlKey && Math.abs(I.deltaX) > Math.abs(I.deltaY) * 1.5) {
      I.preventDefault();
      const te = v.target, le = new m().subVectors(x.position, te), pe = new m();
      pe.crossVectors(x.up, le).normalize();
      const Ye = le.length() * 1e-3 * v.panSpeed;
      te.addScaledVector(pe, I.deltaX * Ye), x.position.addScaledVector(pe, I.deltaX * Ye), v.update();
    }
  }, { passive: false });
  const K = new Jn(new m(-1, 0, 0), 0), ae = new Jn(new m(0, -1, 0), 0), me = new Jn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function de() {
    const I = window.__hekatanClip, te = [];
    I.enableX && (K.normal.set(I.invertX ? 1 : -1, 0, 0), K.constant = I.invertX ? -I.posX : I.posX, te.push(K)), I.enableY && (ae.normal.set(0, I.invertY ? 1 : -1, 0), ae.constant = I.invertY ? -I.posY : I.posY, te.push(ae)), I.enableZ && (me.normal.set(0, 0, I.invertZ ? 1 : -1), me.constant = I.invertZ ? -I.posZ : I.posZ, te.push(me)), P.clippingPlanes = te, g.traverse((pe) => {
      const Te = pe;
      if (Te.material) {
        const Ye = Array.isArray(Te.material) ? Te.material : [Te.material];
        for (const mt of Ye) mt.clippingPlanes = te, mt.needsUpdate = true;
      }
    });
    const le = window.__hekatanPanes ?? [];
    for (const pe of le) try {
      pe && typeof pe.refresh == "function" && pe.refresh();
    } catch {
    }
    P.render(g, _);
  }
  de(), window.__hekatanClipApply = de;
  const S = as(i), H = $.derive(() => S.displayScale.val === 0 ? 1 : S.displayScale.val > 0 ? S.displayScale.val : -1 / S.displayScale.val), ue = Ns(e, S), oe = () => {
    const I = [];
    return S.gridXY.rawVal && I.push("xy"), S.gridXZ.rawVal && I.push("xz"), S.gridYZ.rawVal && I.push("yz"), I;
  }, ge = () => {
    const I = S.gridStep.rawVal, te = Math.max(I, S.gridMajor.rawVal);
    return { planes: oe(), majorStep: te, minorStep: I };
  };
  let q = Qn(S.gridSize.rawVal, ge());
  q.visible = S.gridVisible.rawVal, window.__hekatanSnap2D = S.cursorSnap.rawVal;
  const U = () => {
    const I = Math.max(0, Math.min(1, S.gridOpacity.rawVal));
    q.traverse((te) => {
      const le = te.material;
      if (!le || !("opacity" in le)) return;
      const pe = te.name ?? "";
      let Te = 0.35;
      pe.includes("border") ? Te = 1 : pe.includes("major") && (Te = 0.75), le.opacity = I * Te;
    });
  };
  U(), k.appendChild(ss(S, e, c)), k.setAttribute("id", "viewer"), k.appendChild(P.domElement), P.setPixelRatio(window.devicePixelRatio);
  const X = cn();
  P.setClearColor(X.background, 1);
  const L = S.gridSize.rawVal, A = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
  x.position.set(0, 0, A), x.up.set(0, 1, 0), v.target.set(0, 0, 0), v.minDistance = 0.1, v.maxDistance = 1e4, k.__settings = S, v.zoomSpeed = 1;
  let F = 100, V = 0;
  P.domElement.addEventListener("wheel", (I) => {
    F = I.deltaY, V = I.deltaMode;
  }, { passive: true, capture: true }), v._getZoomScale = function() {
    const I = Math.abs(F);
    if (I >= 80 && V === 0) return Math.pow(0.9, this.zoomSpeed);
    if (V === 1) return Math.pow(0.88, this.zoomSpeed);
    const te = Math.max(0.05, Math.min(I / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * te);
  }, v.update();
  let z = So(S.gridSize.rawVal, S.flipAxes.rawVal);
  g.add(q, z), $.derive(() => {
    window.__hekatanGridPlaneXY = S.gridXY.val, window.__hekatanGridPlaneXZ = S.gridXZ.val, window.__hekatanGridPlaneYZ = S.gridYZ.val;
  });
  let D = true;
  $.derive(() => {
    const I = S.gridVisible.val;
    if (D) {
      D = false;
      return;
    }
    q.visible = I, G();
  });
  let j = true;
  $.derive(() => {
    if (S.gridOpacity.val, j) {
      j = false;
      return;
    }
    U(), G();
  }), $.derive(() => {
    const I = S.cursorSnap.val;
    window.__hekatanSnap2D = I;
  });
  let O = true;
  $.derive(() => {
    var _a;
    const I = S.gridSize.val, te = S.flipAxes.val;
    if (S.gridXY.val, S.gridXZ.val, S.gridYZ.val, S.gridStep.val, S.gridMajor.val, O) {
      O = false;
      return;
    }
    g.remove(q), (_a = q.traverse) == null ? void 0 : _a.call(q, (Te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), q = Qn(I, ge()), q.visible = S.gridVisible.rawVal, g.add(q), U(), g.remove(z), z.traverse((Te) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Te.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Te.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), z = So(I, te), g.add(z);
    const le = I * 0.5 + I * 0.5 / Math.tan(45 * 0.5);
    x.position.distanceTo(v.target), Math.abs(x.position.x) < 0.1 && Math.abs(x.position.y) < 0.1 && x.position.z > 0 ? x.position.set(0, 0, le) : x.position.set(0.5 * I, -le, 0.5 * I), v.target.set(0, 0, 0), v.minDistance = Math.max(0.05, I * 0.01), v.maxDistance = Math.max(50, I * 50), v.update(), G();
  }), new ResizeObserver((I) => {
    var _a, _b;
    for (const te of I) {
      const le = (_a = te.target) == null ? void 0 : _a.clientWidth, pe = (_b = te.target) == null ? void 0 : _b.clientHeight;
      if (le === 0 || pe === 0) continue;
      const Ye = (E ? le / 2 : le) / pe;
      x.aspect = Ye, x.updateProjectionMatrix();
      const mt = w.top;
      if (w.left = -mt * Ye, w.right = mt * Ye, w.updateProjectionMatrix(), Y && Y.isPerspectiveCamera) Y.aspect = Ye, Y.updateProjectionMatrix();
      else if (Y && Y.isOrthographicCamera) {
        const De = Y, wt = De.top;
        De.left = -wt * Ye, De.right = wt * Ye, De.updateProjectionMatrix();
      }
      P.setSize(le, pe), G();
    }
  }).observe(k), v.addEventListener("change", G), $.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, S.displayScale.val, S.nodes.val, S.elements.val, (_g = S.edges) == null ? void 0 : _g.val, S.elemColumns.val, S.elemBeams.val, S.nodesIndexes.val, S.elementsIndexes.val, S.orientations.val, S.sections.val, S.secColumns.val, S.secBeams.val, S.secFloor.val, S.supports.val, S.loads.val, S.deformedShape.val, S.nodeResults.val, S.frameResults.val, S.shellResults.val, (_h = S.solidResults) == null ? void 0 : _h.val, setTimeout(G);
  });
  let E = false, Y = null, ee = null, ie = false;
  function G() {
    const I = k.clientWidth || 1, te = k.clientHeight || 1;
    if (!E || !Y) {
      P.setScissorTest(false), P.setViewport(0, 0, I, te), P.render(g, _);
      return;
    }
    const le = I / 2;
    P.setScissorTest(true), P.setViewport(0, 0, le, te), P.setScissor(0, 0, le, te), P.render(g, _), P.setViewport(le, 0, le, te), P.setScissor(le, 0, le, te), P.render(g, Y), P.setScissorTest(false);
  }
  function Ce(I) {
    _ = I, v.object = I, v.update(), G();
  }
  function ve(I, te) {
    E = I, te && (Y = te);
    const le = k.clientWidth || 1, pe = k.clientHeight || 1, Ye = (I ? le / 2 : le) / pe;
    x.isPerspectiveCamera && (x.aspect = Ye, x.updateProjectionMatrix());
    const mt = w.top;
    if (w.left = -mt * Ye, w.right = mt * Ye, w.updateProjectionMatrix(), I && Y) {
      if (ee ? (ee.object = Y, ee.update()) : (ee = new _o(Y, P.domElement), ee.enableDamping = true, ee.dampingFactor = 0.1, ee.screenSpacePanning = true, ee.zoomSpeed = 0.8, ee.panSpeed = 1.2, ee.rotateSpeed = 0.9, ee.touches = { ONE: In.ROTATE, TWO: In.DOLLY_PAN }, ee._getZoomScale = function() {
        const De = Math.abs(F);
        if (De >= 80 && V === 0) return Math.pow(0.9, this.zoomSpeed);
        if (V === 1) return Math.pow(0.88, this.zoomSpeed);
        const wt = Math.max(0.05, Math.min(De / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * wt);
      }, ee.target.copy(v.target), ee.addEventListener("change", G), ee.enabled = false), !ie) {
        const De = (wt) => {
          if (!E || !ee) return;
          const dt = P.domElement.getBoundingClientRect(), Bt = wt.clientX - dt.left, zt = dt.width / 2, Ot = Bt >= zt;
          v.enabled = !Ot, ee.enabled = Ot;
        };
        P.domElement.addEventListener("pointerdown", De, true), P.domElement.addEventListener("wheel", De, { capture: true, passive: true }), ie = true;
      }
    } else I || (v.enabled = true, ee && (ee.enabled = false));
    k.__splitMode = I, window.__hekatanSplitMode = I, window.__hekatanSplitCamera = I ? Y : null, G();
  }
  if (e) {
    g.add(is(S, ue, H), os(e, S, ue), cs(S, ue, H), ds(e, S, ue, H), ls(e, S, ue, H), rs(e, S, ue, H), fs(e, S, ue, H), ms(e, S, ue, H), gs(e, S, ue, H), ws(e, S, ue, H));
    const I = Bs({ scene: g, rendererElm: P.domElement, getActiveCamera: () => _, derivedNodes: ue, derivedDisplayScale: H, mesh: e, settings: S, render: G });
    g.add(I);
    const te = Gs(e, S), le = ks(e, S, ue, te), pe = Co(te);
    g.add(le), k.appendChild(pe);
    const Te = As(e, S, ue);
    g.add(Te);
    const Ye = Te.__colorMapValues, mt = Co(Ye);
    mt.id = "frame-legend", k.appendChild(mt), $.derive(() => {
      var _a;
      const De = S.shellResults.val != "none", wt = (((_a = S.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", dt = De || wt, Bt = S.frameResults.val.startsWith("contour:");
      pe.hidden = !dt, le.visible = dt, mt.hidden = !Bt;
    });
  }
  if (c) {
    const I = new ts(16777215, 0.5);
    g.add(I);
    const te = new Mo(16777215, 0.5);
    te.position.set(30, 25, -10), te.shadow.mapSize.width = 1024, te.shadow.mapSize.height = 1024, g.add(te);
    const le = 10;
    te.shadow.camera.left = -le, te.shadow.camera.right = le, te.shadow.camera.top = le, te.shadow.camera.bottom = -le, te.shadow.camera.far = 1e3;
    const pe = new Mo(16777215, 0.5);
    pe.color.setHSL(11, 43, 96), pe.position.set(-10, 0, 30), g.add(pe), $.derive(() => {
      (c == null ? void 0 : c.val.length) && (g.remove(...c.oldVal), g.add(...c.rawVal), G());
    }), $.derive(() => {
      c.rawVal.forEach((Te) => Te.visible = S.solids.val), G();
    });
  }
  if (h) {
    const I = [], te = (pe) => {
      var _a, _b;
      return ((_a = pe == null ? void 0 : pe.userData) == null ? void 0 : _a.isCota) ? S.showCotas.val : ((_b = pe == null ? void 0 : pe.userData) == null ? void 0 : _b.isDistLoad) ? S.loads.val : S.custom3D.val;
    }, le = () => {
      for (const pe of I) pe.visible = te(pe);
      G();
    };
    $.derive(() => {
      const pe = h.val;
      I.length && (g.remove(...I), I.length = 0), pe.length && (g.add(...pe), I.push(...pe), le()), G();
    }), $.derive(() => {
      S.custom3D.val, le();
    }), $.derive(() => {
      S.showCotas.val, le();
    }), $.derive(() => {
      S.loads.val, le();
    });
  }
  y && vs({ drawingObj: y, gridObj: q, scene: g, getActiveCamera: () => _, controls: v, gridSize: L, derivedDisplayScale: H, rendererElm: P.domElement, viewerRender: G }), Ao((I, te) => {
    var _a;
    P.setClearColor(te.background, 1), g.remove(q), (_a = q.traverse) == null ? void 0 : _a.call(q, (le) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = le.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = le.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), q = Qn(S.gridSize.rawVal, { planes: oe() }), g.add(q), k.style.setProperty("--awatif-legend-color", te.legendMarker), G();
  });
  const Me = { scene: g, perspCamera: x, orthoCamera: w, get camera() {
    return _;
  }, controls: v, renderer: P, rendererElm: P.domElement, render: G, setActiveCamera: Ce, setSplitMode: ve, get splitMode() {
    return E;
  }, get splitCamera() {
    return Y;
  }, settings: S };
  k.__ctx = Me;
  const Le = document.createElement("div");
  Le.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Ae = (I, te, le) => {
    const pe = document.createElement("button");
    return pe.textContent = I, pe.title = te, pe.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), pe.onmouseenter = () => {
      pe.style.background = "rgba(70,70,70,0.9)";
    }, pe.onmouseleave = () => {
      pe.style.background = "rgba(40,40,40,0.85)";
    }, pe.onclick = (Te) => {
      Te.preventDefault(), le();
    }, pe;
  }, Pt = (I, te) => {
    const le = v.target, pe = new m().subVectors(_.position, le), Te = pe.length(), Ye = new m(), mt = new m();
    Ye.crossVectors(_.up, pe).normalize(), mt.copy(_.up).normalize();
    const De = Te * 0.05;
    le.addScaledVector(Ye, -I * De), le.addScaledVector(mt, te * De), _.position.addScaledVector(Ye, -I * De), _.position.addScaledVector(mt, te * De), v.update(), G();
  }, Ct = (I) => {
    const te = new m().subVectors(_.position, v.target);
    te.multiplyScalar(I), _.position.copy(v.target).add(te), v.update(), G();
  }, ct = () => {
    const I = document.createElement("div");
    return I.style.cssText = "width:32px;height:32px;", I;
  };
  return Le.append(ct()), Le.append(Ae("\u2191", "Pan arriba", () => Pt(0, 1))), Le.append(Ae("\u2295", "Zoom in", () => Ct(0.85))), Le.append(Ae("\u2190", "Pan izquierda", () => Pt(-1, 0))), Le.append(Ae("\u2302", "Reset vista", () => {
    v.reset(), G();
  })), Le.append(Ae("\u2192", "Pan derecha", () => Pt(1, 0))), Le.append(Ae("\u2296", "Zoom out", () => Ct(1.18))), Le.append(Ae("\u2193", "Pan abajo", () => Pt(0, -1))), Le.append(ct()), getComputedStyle(k).position === "static" && (k.style.position = "relative"), k.appendChild(Le), k;
}
function Ns(e, i) {
  return $.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || y.length === 0) return y;
    const c = i.deformScale.val, k = i.deformScale.val * i.deformScaleZ.val, g = Number.isFinite(c) ? c : 1, x = Number.isFinite(k) ? k : 1;
    return y.map((w, _) => {
      var _a2;
      const P = ((_a2 = h.get(_)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], v = Number.isFinite(P[0]) ? P[0] : 0, K = Number.isFinite(P[1]) ? P[1] : 0, ae = Number.isFinite(P[2]) ? P[2] : 0;
      return [w[0] + v * g, w[1] + K * g, w[2] + ae * x];
    });
  });
}
const so = $.state(null), to = $.state(""), Zs = $.state("kN"), Us = $.state("mm"), Ks = $.state("kN/m\xB2"), Hs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, zo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, Ws = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Gs(e, i) {
  const y = $.state([]);
  let h;
  return ((c) => {
    c.bendingXX = "bendingXX", c.bendingYY = "bendingYY", c.bendingXY = "bendingXY", c.membraneXX = "membraneXX", c.membraneYY = "membraneYY", c.membraneXY = "membraneXY", c.tranverseShearX = "tranverseShearX", c.tranverseShearY = "tranverseShearY", c.vonMises = "vonMises", c.membranePrincipalMax = "membranePrincipalMax", c.membranePrincipalMin = "membranePrincipalMin", c.bendingPrincipalMax = "bendingPrincipalMax", c.bendingPrincipalMin = "bendingPrincipalMin", c.transverseShearMax = "transverseShearMax", c.pressure = "pressure", c.displacementX = "displacementX", c.displacementY = "displacementY", c.displacementZ = "displacementZ";
  })(h || (h = {})), $.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const c = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), oe = (Pt, Ct) => {
      Pt == null ? void 0 : Pt.forEach((ct, I) => {
        const te = e.elements.val[I];
        if (te) for (let le = 0; le < te.length; le++) Ct.set(te[le], [ct[le] ?? ct[0]]);
      });
    };
    oe((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, c), oe((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, k), oe((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, g), oe((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, x), oe((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, w), oe((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, _), oe((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, P), oe((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, v), oe((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, K), oe((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.membranePrincipalMax, ae), oe((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, me), oe((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, de), oe((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, S), oe((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, H), oe((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, ue);
    const ge = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, q = (_G = i.solidResults) == null ? void 0 : _G.val, X = q && q !== "none" ? q : i.shellResults.val, L = ge == null ? void 0 : ge[X], A = { bendingXX: [c, 0], bendingYY: [k, 0], bendingXY: [g, 0], membraneXX: [x, 0], membraneYY: [w, 0], membraneXY: [_, 0], tranverseShearX: [P, 0], tranverseShearY: [v, 0], vonMises: [K, 0], membranePrincipalMax: [ae, 0], membranePrincipalMin: [me, 0], bendingPrincipalMax: [de, 0], bendingPrincipalMin: [S, 0], transverseShearMax: [H, 0], pressure: [ue, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, F = i.shellResults.val, V = Zs.val, z = Us.val, D = F === "displacementX" || F === "displacementY" || F === "displacementZ", j = F === "bendingXX" || F === "bendingYY" || F === "bendingXY" || F === "bendingPrincipalMax" || F === "bendingPrincipalMin", O = F === "membraneXX" || F === "membraneYY" || F === "membraneXY" || F === "membranePrincipalMax" || F === "membranePrincipalMin", se = F === "vonMises" || F === "pressure", E = F === "tranverseShearX" || F === "tranverseShearY" || F === "transverseShearMax", Y = (_N = i.solidResults) == null ? void 0 : _N.val, ee = Y === "vonMises" || Y === "sigmaXX" || Y === "sigmaYY" || Y === "sigmaZZ" || Y === "tauXY" || Y === "tauYZ" || Y === "tauXZ", ie = Y === "ux" || Y === "uy" || Y === "uz", G = Ks.val, Ce = ee ? Ws[G] : ie || D ? zo[z] : j || O || se || E ? 1 / Hs[V] : 1, ve = ee ? G : ie || D ? z : j ? `${V}\xB7m/m` : O ? `${V}/m\xB2` : se ? `${V}/m\xB2` : E ? `${V}/m` : "";
    to.val = ve, so.val = Array.isArray(L) && L.length === 2 ? [L[0] * Ce, L[1] * Ce] : null;
    const Le = Y && Y !== "none" ? [K, 0] : A[F], Ae = [];
    e.nodes.val.forEach((Pt, Ct) => {
      const ct = Le;
      if (!ct || !ct[0] || typeof ct[0].has != "function") return;
      if (!ct[0].has(Ct)) {
        Ae.push(Number.NaN);
        return;
      }
      const I = ct[0].get(Ct), te = I ? I[ct[1]] ?? 0 : 0;
      Ae.push(te * Ce);
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
