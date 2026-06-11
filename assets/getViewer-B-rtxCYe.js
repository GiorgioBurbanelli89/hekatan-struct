import { v as $, P as Ao, q as dn, a7 as Xn, B as he, a8 as Yn, F as $t, a4 as Vo, K as ot, X as Jt, L as ht, h as Ot, u as To, g as Uo, a9 as Ko, i as st, d as je, V as m, $ as cn, aa as qn, H as Lo, D as Dt, a as It, x as ct, z as Dn, ab as Nn, s as Ho, m as Wo, I as ln, a2 as Pn, E as yo, f as xn, Q as Jn, ac as zn, C as xo, S as go, c as vo, ad as In, p as Go, ae as qo, af as Jo, ag as Qo, ah as Oo, b as bo, ai as Mo, e as _o, W as jo, N as es, O as ts, Y as ns, T as $n, o as Qn, Z as os, _ as So, U as ss } from "./theme-BUyDDEHW.js";
import { T as Et, O as ko } from "./Text-DR6pe57W.js";
import { e as as } from "./styles-tOu98xnK.js";
function is(e, i, y) {
  const h = document.createElement("div"), d = new Ao({ title: "Settings", expanded: true, container: h });
  window.__hekatanPanes = window.__hekatanPanes ?? [], window.__hekatanPanes.push(d), h.setAttribute("id", "settings");
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
    let H = false, le = 0, me = 0, de = 0, S = 0;
    b.addEventListener("mousedown", (W) => {
      H = true, le = W.clientX, me = W.clientY;
      const fe = h.getBoundingClientRect();
      de = fe.left, S = fe.top, h.style.left = `${de}px`, h.style.top = `${S}px`;
    }), window.addEventListener("mousemove", (W) => {
      if (!H) return;
      const fe = W.clientX - le, se = W.clientY - me, be = Math.max(0, Math.min(window.innerWidth - 40, de + fe)), q = Math.max(0, Math.min(window.innerHeight - 40, S + se));
      h.style.left = `${be}px`, h.style.top = `${q}px`;
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
    d.addBinding(e.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 0.5 });
    const b = d.addFolder({ title: "\u{1F4D0} Grid", expanded: true });
    b.addBinding(e.gridSize, "val", { label: "Dimensi\xF3n (m)", min: 1, max: 100, step: 1 }), b.addBinding(e.gridStep, "val", { label: "Separaci\xF3n grid (m)", min: 0.05, max: 5, step: 0.05 }), b.addBinding(e.gridMajor, "val", { label: "Separaci\xF3n mayores (m)", min: 0.1, max: 50, step: 0.1 }), b.addBinding(e.cursorSnap, "val", { label: "Paso cursor (m)", min: 0.05, max: 5, step: 0.05 }), b.addBinding(e.gridVisible, "val", { label: "Mostrar" }), b.addBinding(e.gridOpacity, "val", { label: "Opacidad", min: 0, max: 1, step: 0.05 }), b.addBinding(e.gridXY, "val", { label: "Plano XY (planta)" }), b.addBinding(e.gridXZ, "val", { label: "Plano XZ (frontal)" }), b.addBinding(e.gridYZ, "val", { label: "Plano YZ (lateral)" }), d.addBinding(e.nodes, "val", { label: "Nodes" }), d.addBinding(e.elements, "val", { label: "Elements" }), d.addBinding(e.edges, "val", { label: "  Edges (delim.)" }), d.addBinding(e.faces, "val", { label: "  Caras (fill)" }), d.addBinding(e.elemFrames, "val", { label: "  Frames (todos)" }), d.addBinding(e.elemColumns, "val", { label: "    Columnas" }), d.addBinding(e.elemBeams, "val", { label: "    Vigas" }), d.addBinding(e.elemZapatas, "val", { label: "  Zapatas (shells z\u22640)" }), d.addBinding(e.elemLosas, "val", { label: "  Losas (shells z>0)" }), d.addBinding(e.colorByType, "val", { label: "  \u{1F3A8} Color por tipo" }), d.addBinding(e.nodesIndexes, "val", { label: "Nodes indexes" }), d.addBinding(e.elementsIndexes, "val", { label: "Elements indexes" }), d.addBinding(e.orientations, "val", { label: "Orientations" }), d.addBinding(e.sections, "val", { label: "Sections" }), d.addBinding(e.sectionLabels, "val", { label: "  Sec. Labels (30x50)" }), d.addBinding(e.secColumns, "val", { label: "  Sec. Columnas" }), d.addBinding(e.secBeams, "val", { label: "  Sec. Vigas" }), d.addBinding(e.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } });
  }
  if ((i == null ? void 0 : i.nodeInputs) || (i == null ? void 0 : i.elementInputs)) {
    const b = d.addFolder({ title: "Analysis Inputs" });
    b.addBinding(e.supports, "val", { label: "Supports" }), b.addBinding(e.loads, "val", { label: "Loads" }), b.addBinding(e.custom3D, "val", { label: "Resortes (Winkler)" }), b.addBinding(e.showCotas, "val", { label: "Cotas" });
  }
  if ((i == null ? void 0 : i.deformOutputs) || (i == null ? void 0 : i.analyzeOutputs)) {
    const b = d.addFolder({ title: "Analysis Outputs" });
    b.addBinding(e.nodeResults, "val", { options: { none: "none", "U (deformations)": "deformations", "R (reactions)": "reactions" }, label: "Node results" }), b.addBinding(e.frameResults, "val", { options: { none: "none", "P (normals)": "normals", "V2 (shearY)": "shearsY", "V3 (shearZ)": "shearsZ", "T (torsion)": "torsions", "M2 (bendingY)": "bendingsY", "M3 (bendingZ)": "bendingsZ", "contour P": "contour:normals", "contour V2": "contour:shearsY", "contour V3": "contour:shearsZ", "contour T": "contour:torsions", "contour M2": "contour:bendingsY", "contour M3": "contour:bendingsZ" }, label: "Frame results" }), b.addBinding(e.shellResults, "val", { options: { none: "none", "F11 (membraneXX)": "membraneXX", "F22 (membraneYY)": "membraneYY", "F12 (membraneXY)": "membraneXY", "FMax (principal)": "membranePrincipalMax", "FMin (principal)": "membranePrincipalMin", "M11 (bendingXX)": "bendingXX", "M22 (bendingYY)": "bendingYY", "M12 (bendingXY)": "bendingXY", "MMax (principal)": "bendingPrincipalMax", "MMin (principal)": "bendingPrincipalMin", "V13 (shearX)": "tranverseShearX", "V23 (shearY)": "tranverseShearY", "VMax (magnitud)": "transverseShearMax", "Von Mises": "vonMises", pressure: "pressure", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), b.addBinding(e.solidResults, "val", { options: { none: "none", vonMises: "vonMises", \u03C3xx: "sigmaXX", \u03C3yy: "sigmaYY", \u03C3zz: "sigmaZZ", \u03C4xy: "tauXY", \u03C4yz: "tauYZ", \u03C4xz: "tauXZ", ux: "ux", uy: "uy", uz: "uz" }, label: "Solid results" }), b.addBinding(e.deformedShape, "val", { label: "Deformed shape" }), b.addBinding(e.deformScale, "val", { label: "  Scale XY", min: 0.1, max: 5e3, step: 0.1 }), b.addBinding(e.deformScaleZ, "val", { label: "  Scale Z", min: 0.01, max: 10, step: 0.01 });
  }
  y && d.addBinding(e.solids, "val", { label: "Solids" });
  const w = d.addFolder({ title: "\u2702\uFE0F Cortes X/Y/Z", expanded: false }), _ = window.__hekatanClip ?? (window.__hekatanClip = { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false }), z = () => {
    const b = window.__hekatanClipApply;
    typeof b == "function" && b();
  };
  return w.addBinding(_, "enableX", { label: "Cortar X" }).on("change", z), w.addBinding(_, "posX", { min: -50, max: 50, step: 0.1, label: "  pos X (m)" }).on("change", z), w.addBinding(_, "invertX", { label: "  invertir X" }).on("change", z), w.addBinding(_, "enableY", { label: "Cortar Y" }).on("change", z), w.addBinding(_, "posY", { min: -50, max: 50, step: 0.1, label: "  pos Y (m)" }).on("change", z), w.addBinding(_, "invertY", { label: "  invertir Y" }).on("change", z), w.addBinding(_, "enableZ", { label: "Cortar Z" }).on("change", z), w.addBinding(_, "posZ", { min: -50, max: 50, step: 0.1, label: "  pos Z (m)" }).on("change", z), w.addBinding(_, "invertZ", { label: "  invertir Z" }).on("change", z), h;
}
function ls(e) {
  return { gridSize: $.state((e == null ? void 0 : e.gridSize) ?? 20), gridVisible: $.state((e == null ? void 0 : e.gridVisible) ?? true), gridOpacity: $.state((e == null ? void 0 : e.gridOpacity) ?? 1), gridStep: $.state((e == null ? void 0 : e.gridStep) ?? 0.5), gridMajor: $.state((e == null ? void 0 : e.gridMajor) ?? 1), cursorSnap: $.state((e == null ? void 0 : e.cursorSnap) ?? 0.5), gridXY: $.state((e == null ? void 0 : e.gridXY) ?? true), gridXZ: $.state((e == null ? void 0 : e.gridXZ) ?? true), gridYZ: $.state((e == null ? void 0 : e.gridYZ) ?? false), displayScale: $.state((e == null ? void 0 : e.displayScale) ?? 1), nodes: $.state((e == null ? void 0 : e.nodes) ?? true), elements: $.state((e == null ? void 0 : e.elements) ?? true), edges: $.state((e == null ? void 0 : e.edges) ?? true), faces: $.state((e == null ? void 0 : e.faces) ?? true), elemColumns: $.state((e == null ? void 0 : e.elemColumns) ?? true), elemBeams: $.state((e == null ? void 0 : e.elemBeams) ?? true), elemFrames: $.state((e == null ? void 0 : e.elemFrames) ?? true), elemZapatas: $.state((e == null ? void 0 : e.elemZapatas) ?? true), elemLosas: $.state((e == null ? void 0 : e.elemLosas) ?? true), colorByType: $.state((e == null ? void 0 : e.colorByType) ?? false), nodesIndexes: $.state((e == null ? void 0 : e.nodesIndexes) ?? false), elementsIndexes: $.state((e == null ? void 0 : e.elementsIndexes) ?? false), orientations: $.state((e == null ? void 0 : e.orientations) ?? false), sections: $.state((e == null ? void 0 : e.sections) ?? true), sectionLabels: $.state((e == null ? void 0 : e.sectionLabels) ?? true), secColumns: $.state((e == null ? void 0 : e.secColumns) ?? true), secBeams: $.state((e == null ? void 0 : e.secBeams) ?? true), secFloor: $.state((e == null ? void 0 : e.secFloor) ?? -1), supports: $.state((e == null ? void 0 : e.supports) ?? true), loads: $.state((e == null ? void 0 : e.loads) ?? false), deformedShape: $.state((e == null ? void 0 : e.deformedShape) ?? false), nodeResults: $.state((e == null ? void 0 : e.nodeResults) ?? "none"), frameResults: $.state((e == null ? void 0 : e.frameResults) ?? "none"), shellResults: $.state((e == null ? void 0 : e.shellResults) ?? "none"), solidResults: $.state((e == null ? void 0 : e.solidResults) ?? "none"), flipAxes: $.state((e == null ? void 0 : e.flipAxes) ?? false), solids: $.state((e == null ? void 0 : e.solids) ?? true), custom3D: $.state((e == null ? void 0 : e.custom3D) ?? true), showCotas: $.state((e == null ? void 0 : e.showCotas) ?? true), deformScale: $.state((e == null ? void 0 : e.deformScale) ?? 1), deformScaleZ: $.state((e == null ? void 0 : e.deformScaleZ) ?? 1) };
}
function rs(e, i, y) {
  const h = dn(), d = new Xn(new he(), new Yn({ color: h.nodePoint }));
  return Vo((k, v) => {
    d.material.color.setHex(v.nodePoint);
  }), d.frustumCulled = false, $.derive(() => {
    e.nodes.val && d.geometry.setAttribute("position", new $t(i.val.flat(), 3));
  }), $.derive(() => {
    if (y.val, i.val, !e.nodes.rawVal) return;
    const k = i.rawVal ?? [];
    let v = e.gridSize.val * 0.5;
    if (k.length >= 2) {
      const w = [1 / 0, 1 / 0, 1 / 0], _ = [-1 / 0, -1 / 0, -1 / 0];
      for (const z of k) for (let b = 0; b < 3; b++) w[b] = Math.min(w[b], z[b]), _[b] = Math.max(_[b], z[b]);
      v = Math.max(_[0] - w[0], _[1] - w[1], _[2] - w[2], 0.1);
    }
    const x = 0.03 * v;
    d.material.size = x * y.rawVal;
  }), $.derive(() => {
    d.visible = e.nodes.val;
  }), d;
}
function On(e, i) {
  const y = dn(), h = new ot();
  h.name = "hekatan-grid";
  const d = (i == null ? void 0 : i.planes) ?? ["xy"];
  let k = (i == null ? void 0 : i.majorStep) ?? 1, v = (i == null ? void 0 : i.minorStep) ?? 0.1;
  for (k <= 0 && (k = 1), v <= 0 && (v = 0.1); e / v > 500; ) v *= 2;
  for (; e / k > 100; ) k *= 2;
  const x = e / 2;
  k = Math.max(v, Math.round(k / v) * v);
  const _ = new Jt(y.grid), z = new Jt(y.grid).multiplyScalar(0.45), b = (le, me, de, S) => {
    const W = [], fe = le === "xy" ? (Y, L) => [Y, L, 0] : le === "xz" ? (Y, L) => [Y, 0, L] : (Y, L) => [0, Y, L], se = Math.floor(x / me);
    for (let Y = -se; Y <= se; Y++) {
      const L = Y * me, A = fe(L, -x), F = fe(L, x);
      W.push(...A, ...F);
    }
    for (let Y = -se; Y <= se; Y++) {
      const L = Y * me, A = fe(-x, L), F = fe(x, L);
      W.push(...A, ...F);
    }
    const be = new he();
    be.setAttribute("position", new $t(W, 3));
    const q = new ht({ color: de, transparent: true, opacity: S, depthWrite: false }), K = new Ot(be, q);
    return K.name = `grid-${le}-${me === v ? "minor" : "major"}`, K;
  }, H = (le, me, de) => {
    const S = le === "xy" ? (K, Y) => [K, Y, 0] : le === "xz" ? (K, Y) => [K, 0, Y] : (K, Y) => [0, K, Y], W = [[-x, -x], [x, -x], [x, x], [-x, x]], fe = [];
    for (const [K, Y] of W) fe.push(...S(K, Y));
    const se = new he();
    se.setAttribute("position", new $t(fe, 3));
    const be = new ht({ color: me, transparent: true, opacity: de, depthWrite: false }), q = new To(se, be);
    return q.name = `grid-${le}-border`, q.renderOrder = 1, q;
  };
  for (const le of d) h.add(b(le, v, z, 0.12)), h.add(b(le, k, _, 0.4)), h.add(H(le, _, 0.55));
  return h.position.set(0, 0, 0), window.__hekatanGridConfig = { majorStep: k, minorStep: v, gridSize: e, planes: [...d] }, h;
}
function cs(e, i, y, h) {
  const d = new ot(), k = new Uo(0.5, 0.5, 0.5), v = new Ko(0.45, 0.7, 4);
  v.rotateX(Math.PI / 2), v.translate(0, 0, -0.35);
  const x = new st({ color: 10166822 }), w = new st({ color: 2792847 }), _ = new st({ color: 3835647 }), z = () => {
    const le = y.rawVal ?? [];
    if (le.length < 2) return i.gridSize.val * 0.5;
    let me = [1 / 0, 1 / 0, 1 / 0], de = [-1 / 0, -1 / 0, -1 / 0];
    for (const S of le) for (let W = 0; W < 3; W++) S[W] < me[W] && (me[W] = S[W]), S[W] > de[W] && (de[W] = S[W]);
    return Math.max(de[0] - me[0], de[1] - me[1], de[2] - me[2], 0.1);
  }, b = () => 0.08 * z(), H = () => Math.max(h.rawVal, 1);
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, !i.supports.val) return;
    d.clear();
    const le = b();
    (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((me, de) => {
      const S = y.val[de];
      if (!S) return;
      const W = me ?? [], fe = (W[0] ? 1 : 0) + (W[1] ? 1 : 0) + (W[2] ? 1 : 0), se = (W[3] ? 1 : 0) + (W[4] ? 1 : 0) + (W[5] ? 1 : 0);
      let be;
      fe >= 3 && se >= 3 ? be = new je(k, x) : fe >= 3 && se === 0 ? be = new je(v, w) : be = new je(v, _), be.position.set(S[0], S[1], S[2]);
      const q = le * H();
      be.scale.set(q, q, q), d.add(be);
    });
  }), $.derive(() => {
    if (h.val, !i.supports.rawVal) return;
    const me = b() * H();
    d.children.forEach((de) => de.scale.set(me, me, me));
  }), $.derive(() => {
    d.visible = i.supports.val;
  }), d;
}
function ds(e, i, y, h) {
  const d = new ot();
  d.name = "loadsGroup";
  function k(v) {
    if (v.length < 2) return 0.12 * i.gridSize.rawVal;
    const x = [1 / 0, 1 / 0, 1 / 0], w = [-1 / 0, -1 / 0, -1 / 0];
    for (const z of v) for (let b = 0; b < 3; b++) x[b] = Math.min(x[b], z[b]), w[b] = Math.max(w[b], z[b]);
    return 0.08 * Math.max(w[0] - x[0], w[1] - x[1], w[2] - x[2], 0.1);
  }
  return $.derive(() => {
    var _a, _b, _c;
    if (i.deformedShape.val, !i.loads.val) return;
    d.children.forEach((w) => w.dispose()), d.clear();
    const v = y.val, x = k(v);
    (_c = (_b = (_a = e.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((w, _) => {
      const z = v[_];
      if (!z) return;
      const b = new m(...w.slice(0, 3));
      if (b.lengthSq() < 1e-30) return;
      b.normalize();
      const H = new cn(b, new m(...z), 1, 15637248, 0.3, 0.3), le = x * h.rawVal;
      H.scale.set(le, le, le), d.add(H);
    });
  }), $.derive(() => {
    if (h.val, !i.loads.rawVal) return;
    const x = k(y.rawVal) * h.rawVal;
    d.children.forEach((w) => w.scale.set(x, x, x));
  }), $.derive(() => {
    d.visible = i.loads.val;
  }), d;
}
function ps(e, i, y) {
  const h = new ot();
  return $.derive(() => {
    if (!e.nodesIndexes.val) return;
    h.children.forEach((k) => k.dispose()), h.clear();
    const d = 0.05 * e.gridSize.val * 0.6;
    i.val.forEach((k, v) => {
      const x = new Et(`${v}`);
      x.position.set(...k), x.updateScale(d * y.rawVal), h.add(x);
    });
  }), $.derive(() => {
    if (y.val, !e.nodesIndexes.rawVal) return;
    const d = 0.05 * e.gridSize.val * 0.6;
    h.children.forEach((k) => k.updateScale(d * y.rawVal));
  }), $.derive(() => {
    h.visible = e.nodesIndexes.val;
  }), h;
}
function us(e, i, y, h) {
  const d = new ot();
  return $.derive(() => {
    var _a;
    if (i.deformedShape.val, !i.elementsIndexes.val) return;
    d.children.forEach((v) => v.dispose()), d.clear();
    const k = 0.05 * i.gridSize.val * 0.6;
    (_a = e.elements) == null ? void 0 : _a.val.forEach((v, x) => {
      const w = new Et(`${x}`, void 0, "#001219");
      w.position.set(...fs(v.map((_) => y.rawVal[_]))), w.updateScale(k * h.rawVal), d.add(w);
    });
  }), $.derive(() => {
    if (h.val, !i.elementsIndexes.rawVal) return;
    const k = 0.05 * i.gridSize.val * 0.6;
    d.children.forEach((v) => v.updateScale(k * h.rawVal));
  }), $.derive(() => {
    d.visible = i.elementsIndexes.val;
  }), d;
}
function fs(e) {
  const i = e.reduce((h, d) => [h[0] + d[0], h[1] + d[1], h[2] + d[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function Po(e, i) {
  const y = new ot(), h = 0.05 * e * 1, d = dn(), k = new Et("X", "red", "transparent"), v = new Et(i ? "Z" : "Y", "green", "transparent"), x = new Et(i ? "Y" : "Z", "blue", "transparent"), w = new cn(new m(1, 0, 0), new m(0, 0, 0), 1, d.axisArrow, 0.2, 0.2), _ = new cn(new m(0, 1, 0), new m(0, 0, 0), 1, d.axisArrow, 0.2, 0.2), z = new cn(new m(0, 0, 1), new m(0, 0, 0), 1, d.axisArrow, 0.2, 0.2);
  return k.position.set(1.3 * h, 0, 0), v.position.set(0, 1.3 * h, 0), x.position.set(0, 0, 1.3 * h), k.updateScale(0.4 * h), v.updateScale(0.4 * h), x.updateScale(0.4 * h), w.scale.set(h, h, h), _.scale.set(h, h, h), z.scale.set(h, h, h), y.add(w, _, z, k, v, x), y;
}
function oo(e, i) {
  const y = new m(...e), d = new m(...i).clone().sub(y), k = d.length(), v = d.dot(new m(1, 0, 0)) / k, x = d.dot(new m(0, 1, 0)) / k, w = d.dot(new m(0, 0, 1)) / k, _ = Math.sqrt(v ** 2 + x ** 2);
  let z = new qn().fromArray([[v, x, w], [-x / _, v / _, 0], [-v * w / _, -x * w / _, _]].flat());
  return w === 1 && (z = new qn().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), w === -1 && (z = new qn().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Lo().setFromMatrix3(z);
}
function to(e, i) {
  return e == null ? void 0 : e.map((y, h) => (9 * y + i[h]) / 10);
}
function Fn(e) {
  const i = e.reduce((h, d) => [h[0] + d[0], h[1] + d[1], h[2] + d[2]], [0, 0, 0]), y = e.length;
  return [i[0] / y, i[1] / y, i[2] / y];
}
function hs(e, i, y) {
  const h = Fn([i, y]), d = Fn([e, y]), k = Fn([e, i]), v = new m(...h).sub(new m(...d)).normalize(), x = new m(...y).sub(new m(...k)).normalize(), w = v.clone().cross(x).normalize(), _ = w.clone().cross(v).normalize();
  return new Lo().makeBasis(v, _, w);
}
function ms(e, i, y, h) {
  const d = new ot(), k = new he(), v = new ht({ vertexColors: true }), x = [0, 0, 0], w = [1, 0, 0], _ = [0, 1, 0], z = [0, 0, 1];
  k.setAttribute("position", new $t([...x, ...w, ...x, ..._, ...x, ...z], 3));
  const b = [255, 0, 0], H = [0, 255, 0], le = [0, 0, 255];
  return k.setAttribute("color", new $t([...b, ...b, ...H, ...H, ...le, ...le], 3)), $.derive(() => {
    var _a;
    i.deformedShape.val, i.orientations.val && (d.clear(), (_a = e.elements) == null ? void 0 : _a.val.forEach((me) => {
      const de = new Ot(k, v), S = y.rawVal[me[0]], W = y.rawVal[me[1]];
      if (me.length === 2 && (de.position.set(...to(S, W)), de.rotation.setFromRotationMatrix(oo(S, W))), me.length === 3) {
        const be = y.rawVal[me[2]];
        de.position.set(...Fn([S, W, be])), de.rotation.setFromRotationMatrix(hs(S, W, be));
      }
      const se = 0.05 * i.gridSize.rawVal * 0.75 * h.rawVal;
      de.scale.set(se, se, se), d.add(de);
    }));
  }), $.derive(() => {
    if (h.val, !i.orientations.rawVal) return;
    const de = 0.05 * i.gridSize.val * 0.75 * h.rawVal;
    d.children.forEach((S) => S.scale.set(de, de, de));
  }), $.derive(() => {
    d.visible = i.orientations.val;
  }), d;
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
  const d = new ot(), k = new ot();
  d.add(k);
  function v(K, Y) {
    const L = K / 2, A = Y / 2, F = new Float32Array([0, -L, -A, 0, L, -A, 0, L, A, 0, -L, -A, 0, L, A, 0, -L, A]), T = new he();
    T.setAttribute("position", new ct(F, 3));
    const C = new Float32Array([0, -L, -A, 0, L, -A, 0, L, A, 0, -L, A, 0, -L, -A]), Z = new he();
    return Z.setAttribute("position", new ct(C, 3)), { fill: T, outline: Z };
  }
  function x(K, Y = 24) {
    const L = K / 2, A = new Float32Array(Y * 9);
    for (let Z = 0; Z < Y; Z++) {
      const ne = Z / Y * Math.PI * 2, j = (Z + 1) / Y * Math.PI * 2;
      A[Z * 9] = 0, A[Z * 9 + 1] = 0, A[Z * 9 + 2] = 0, A[Z * 9 + 3] = 0, A[Z * 9 + 4] = L * Math.cos(ne), A[Z * 9 + 5] = L * Math.sin(ne), A[Z * 9 + 6] = 0, A[Z * 9 + 7] = L * Math.cos(j), A[Z * 9 + 8] = L * Math.sin(j);
    }
    const F = new he();
    F.setAttribute("position", new ct(A, 3));
    const T = new Float32Array((Y + 1) * 3);
    for (let Z = 0; Z <= Y; Z++) {
      const ne = Z / Y * Math.PI * 2;
      T[Z * 3] = 0, T[Z * 3 + 1] = L * Math.cos(ne), T[Z * 3 + 2] = L * Math.sin(ne);
    }
    const C = new he();
    return C.setAttribute("position", new ct(T, 3)), { fill: F, outline: C };
  }
  function w(K, Y, L, A) {
    const F = L ?? Y * 0.08, T = A ?? K * 0.07, C = K / 2, Z = Y / 2, ne = Z - F, j = T / 2, ae = [];
    function V(G, Fe, Me, Se) {
      ae.push(0, G, Fe, 0, Me, Fe, 0, Me, Se, 0, G, Fe, 0, Me, Se, 0, G, Se);
    }
    V(-C, -Z, C, -ne), V(-j, -ne, j, ne), V(-C, ne, C, Z);
    const N = new he();
    N.setAttribute("position", new ct(new Float32Array(ae), 3));
    const ee = new Float32Array([0, -C, -Z, 0, C, -Z, 0, C, -ne, 0, j, -ne, 0, j, ne, 0, C, ne, 0, C, Z, 0, -C, Z, 0, -C, ne, 0, -j, ne, 0, -j, -ne, 0, -C, -ne, 0, -C, -Z]), re = new he();
    return re.setAttribute("position", new ct(ee, 3)), { fill: N, outline: re };
  }
  function _(K, Y, L) {
    const A = K / 2, F = Y / 2, T = A - L, C = F - L, Z = [];
    function ne(N, ee, re, G) {
      Z.push(0, N, ee, 0, re, ee, 0, re, G, 0, N, ee, 0, re, G, 0, N, G);
    }
    ne(-A, -F, A, -C), ne(-A, C, A, F), ne(-A, -C, -T, C), ne(T, -C, A, C);
    const j = new he();
    j.setAttribute("position", new ct(new Float32Array(Z), 3));
    const ae = new Float32Array([0, -A, -F, 0, A, -F, 0, A, -F, 0, A, F, 0, A, F, 0, -A, F, 0, -A, F, 0, -A, -F, 0, -T, -C, 0, T, -C, 0, T, -C, 0, T, C, 0, T, C, 0, -T, C, 0, -T, C, 0, -T, -C]), V = new he();
    return V.setAttribute("position", new ct(ae, 3)), { fill: j, outline: V };
  }
  function z(K, Y, L) {
    const A = K / 2, F = Y / 2, T = A - L, C = F - L, Z = new he(), ne = new Float32Array([0, -T, -C, 0, T, -C, 0, T, C, 0, -T, -C, 0, T, C, 0, -T, C]);
    Z.setAttribute("position", new ct(ne, 3));
    const j = [];
    function ae(re, G, Fe, Me) {
      j.push(0, re, G, 0, Fe, G, 0, Fe, Me, 0, re, G, 0, Fe, Me, 0, re, Me);
    }
    ae(-A, -F, A, -C), ae(-A, C, A, F), ae(-A, -C, -T, C), ae(T, -C, A, C);
    const V = new he();
    V.setAttribute("position", new ct(new Float32Array(j), 3));
    const N = new Float32Array([0, -A, -F, 0, A, -F, 0, A, -F, 0, A, F, 0, A, F, 0, -A, F, 0, -A, F, 0, -A, -F, 0, -T, -C, 0, T, -C, 0, T, -C, 0, T, C, 0, T, C, 0, -T, C, 0, -T, C, 0, -T, -C]), ee = new he();
    return ee.setAttribute("position", new ct(N, 3)), { concFill: Z, steelFillGeom: V, outline: ee };
  }
  function b(K, Y, L) {
    const A = [], F = [[0, -K / 2, -Y / 2], [0, -K / 2 + L, -Y / 2], [0, -K / 2 + L, Y / 2 - L], [0, K / 2, Y / 2 - L], [0, K / 2, Y / 2], [0, -K / 2, Y / 2]], T = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const j of T) A.push(...F[j]);
    const C = new he();
    C.setAttribute("position", new ct(new Float32Array(A), 3));
    const Z = [];
    for (let j = 0; j < F.length; j++) {
      const ae = (j + 1) % F.length;
      Z.push(...F[j], ...F[ae]);
    }
    const ne = new he();
    return ne.setAttribute("position", new ct(new Float32Array(Z), 3)), { fill: C, outline: ne };
  }
  function H(K, Y, L, A) {
    const F = A / 2, T = [], C = [[0, -K - F, -Y / 2], [0, -L - F, -Y / 2], [0, -L - F, Y / 2 - L], [0, -F, Y / 2 - L], [0, -F, Y / 2], [0, -K - F, Y / 2]], Z = [[0, F, -Y / 2], [0, F + L, -Y / 2], [0, F + L, Y / 2 - L], [0, K + F, Y / 2 - L], [0, K + F, Y / 2], [0, F, Y / 2]], ne = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const N of ne) T.push(...C[N]);
    for (const N of ne) T.push(...Z[N]);
    const j = new he();
    j.setAttribute("position", new ct(new Float32Array(T), 3));
    const ae = [];
    for (const N of [C, Z]) for (let ee = 0; ee < N.length; ee++) {
      const re = (ee + 1) % N.length;
      ae.push(...N[ee], ...N[re]);
    }
    const V = new he();
    return V.setAttribute("position", new ct(new Float32Array(ae), 3)), { fill: j, outline: V };
  }
  function le(K, Y, L, A) {
    const F = Y / 2, T = K, C = [[0, -T, -F], [0, -T, -F + L], [0, -A, -F + L], [0, -A, F - L], [0, -T, F - L], [0, -T, F], [0, 0, F], [0, 0, -F]], Z = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], ne = [];
    for (const N of Z) ne.push(...C[N]);
    const j = new he();
    j.setAttribute("position", new ct(new Float32Array(ne), 3));
    const ae = [];
    for (let N = 0; N < C.length; N++) {
      const ee = (N + 1) % C.length;
      ae.push(...C[N], ...C[ee]);
    }
    const V = new he();
    return V.setAttribute("position", new ct(new Float32Array(ae), 3)), { fill: j, outline: V };
  }
  function me(K, Y, L, A, F) {
    const T = Y / 2, C = F / 2, Z = [], ne = [[0, -K, -T], [0, -K, -T + L], [0, -C - A, -T + L], [0, -C - A, T - L], [0, -K, T - L], [0, -K, T], [0, -C, T], [0, -C, -T]], j = ne.map((re) => [re[0], -re[1], re[2]]), ae = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const re of ae) Z.push(...ne[re]);
    for (const re of ae) Z.push(...j[re]);
    const V = new he();
    V.setAttribute("position", new ct(new Float32Array(Z), 3));
    const N = [];
    for (const re of [ne, j]) for (let G = 0; G < re.length; G++) {
      const Fe = (G + 1) % re.length;
      N.push(...re[G], ...re[Fe]);
    }
    const ee = new he();
    return ee.setAttribute("position", new ct(new Float32Array(N), 3)), { fill: V, outline: ee };
  }
  function de(K, Y, L, A) {
    const F = K / 2, T = Y / 2, C = A / 2, Z = [[0, -C, -T], [0, C, -T], [0, C, T - L], [0, F, T - L], [0, F, T], [0, -F, T], [0, -F, T - L], [0, -C, T - L]], ne = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], j = [];
    for (const ee of ne) j.push(...Z[ee]);
    const ae = new he();
    ae.setAttribute("position", new ct(new Float32Array(j), 3));
    const V = [];
    for (let ee = 0; ee < Z.length; ee++) {
      const re = (ee + 1) % Z.length;
      V.push(...Z[ee], ...Z[re]);
    }
    const N = new he();
    return N.setAttribute("position", new ct(new Float32Array(V), 3)), { fill: ae, outline: N };
  }
  function S(K, Y, L = 24) {
    const A = K / 2, F = A - Y, T = [];
    for (let j = 0; j < L; j++) {
      const ae = j / L * Math.PI * 2, V = (j + 1) / L * Math.PI * 2, N = Math.cos(ae), ee = Math.sin(ae), re = Math.cos(V), G = Math.sin(V);
      T.push(0, A * N, A * ee, 0, A * re, A * G, 0, F * re, F * G), T.push(0, A * N, A * ee, 0, F * re, F * G, 0, F * N, F * ee);
    }
    const C = new he();
    C.setAttribute("position", new ct(new Float32Array(T), 3));
    const Z = [];
    for (let j = 0; j < L; j++) {
      const ae = j / L * Math.PI * 2, V = (j + 1) / L * Math.PI * 2;
      Z.push(0, A * Math.cos(ae), A * Math.sin(ae), 0, A * Math.cos(V), A * Math.sin(V)), Z.push(0, F * Math.cos(ae), F * Math.sin(ae), 0, F * Math.cos(V), F * Math.sin(V));
    }
    const ne = new he();
    return ne.setAttribute("position", new ct(new Float32Array(Z), 3)), { fill: C, outline: ne };
  }
  const W = new st({ color: 52479, transparent: true, opacity: 0.35, side: Dt, depthWrite: false }), fe = new ht({ color: 52479 }), se = new st({ color: 16750848, transparent: true, opacity: 0.4, side: Dt, depthWrite: false }), be = new ht({ color: 16750848 });
  function q(K, Y) {
    const L = Math.abs(Y[0] - K[0]), A = Math.abs(Y[1] - K[1]), F = Math.abs(Y[2] - K[2]);
    return F > L && F > A || A > L && A > F;
  }
  return $.derive(() => {
    var _a, _b;
    i.deformedShape.val, i.secColumns.val, i.secBeams.val, i.secFloor.val;
    const K = i.secColumns.rawVal, Y = i.secBeams.rawVal;
    if (!K && !Y) {
      d.children.forEach((C) => {
        C instanceof Et && C.dispose();
      }), d.clear();
      return;
    }
    d.children.forEach((C) => {
      C instanceof Et && C.dispose();
    }), d.clear();
    const L = (_a = e.elements) == null ? void 0 : _a.val, A = (_b = e.elementInputs) == null ? void 0 : _b.val;
    if (!L || !A) return;
    const F = A.sectionShapes, T = i.secFloor.rawVal;
    L.forEach((C, Z) => {
      if (C.length !== 2) return;
      const ne = y.rawVal[C[0]], j = y.rawVal[C[1]];
      if (!ne || !j) return;
      const ae = q(ne, j);
      if (ae && !K || !ae && !Y) return;
      if (T >= 0) {
        const G = Math.min(ne[1], j[1]);
        Math.max(ne[1], j[1]);
        const Fe = i.gridSize.rawVal || 3;
        if (Math.floor(G / Fe + 0.01) !== T) return;
      }
      const V = F == null ? void 0 : F.get(Z);
      if (!V) return;
      const N = [(ne[0] + j[0]) / 2, (ne[1] + j[1]) / 2, (ne[2] + j[2]) / 2], ee = oo(ne, j);
      if (V.type === "CFT") {
        const G = z(V.b, V.h, V.tw ?? V.b * 0.05), Fe = new je(G.concFill, W);
        Fe.position.set(...N), Fe.rotation.setFromRotationMatrix(ee), d.add(Fe);
        const Me = new je(G.steelFillGeom, se);
        Me.position.set(...N), Me.rotation.setFromRotationMatrix(ee), d.add(Me);
        const Se = new It(G.outline, be);
        Se.position.set(...N), Se.rotation.setFromRotationMatrix(ee), d.add(Se);
      } else {
        let G, Fe, Me;
        switch (V.type) {
          case "rect":
            G = v(V.b, V.h), Fe = W, Me = fe;
            break;
          case "circ":
            G = x(V.d), Fe = W, Me = fe;
            break;
          case "I":
            G = w(V.b, V.h, V.tf, V.tw), Fe = se, Me = be;
            break;
          case "HSS":
            G = _(V.b, V.h, V.tw ?? V.b * 0.05), Fe = se, Me = be;
            break;
          case "CFT":
            G = z(V.b, V.h, V.tw ?? V.b * 0.05), Fe = se, Me = be;
            break;
          case "L":
            G = b(V.b ?? V.h, V.h, V.t ?? V.tw ?? 3e-3), Fe = se, Me = be;
            break;
          case "2L":
            G = H(V.b ?? V.h, V.h, V.t ?? V.tw ?? 3e-3, V.dis ?? 0.01), Fe = se, Me = be;
            break;
          case "C":
          case "coldC":
            G = le(V.b, V.h, V.tf ?? V.t ?? 3e-3, V.tw ?? V.t ?? 3e-3), Fe = se, Me = be;
            break;
          case "2C":
            G = me(V.b, V.h, V.tf ?? 5e-3, V.tw ?? 5e-3, V.dis ?? 0.01), Fe = se, Me = be;
            break;
          case "T":
            G = de(V.b, V.h, V.tf ?? 0.01, V.tw ?? 6e-3), Fe = se, Me = be;
            break;
          case "pipe":
            G = S(V.d, V.tw ?? V.d * 0.05), Fe = se, Me = be;
            break;
          default:
            return;
        }
        const Se = new je(G.fill, Fe);
        Se.position.set(...N), Se.rotation.setFromRotationMatrix(ee), d.add(Se);
        const $e = new It(G.outline, Me);
        $e.position.set(...N), $e.rotation.setFromRotationMatrix(ee), d.add($e);
      }
      const re = ws(V);
      if (re) {
        const Fe = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(V.type) ? "#ff9900" : "#00ccff", Me = new Et(re, Fe, "transparent");
        Me.position.set(N[0], N[1], N[2]);
        const Se = 0.05 * i.gridSize.rawVal * 0.5;
        Me.updateScale(Se * ((h == null ? void 0 : h.rawVal) ?? 1)), k.add(Me);
      }
    });
  }), h && $.derive(() => {
    if (h.val, !i.sections.rawVal) return;
    const K = 0.05 * i.gridSize.val * 0.5;
    k.children.forEach((Y) => {
      Y instanceof Et && Y.updateScale(K * h.rawVal);
    });
  }), $.derive(() => {
    d.visible = i.sections.val;
  }), $.derive(() => {
    k.visible = i.sectionLabels.val;
  }), d;
}
class Rn extends ot {
  constructor(i, y, h, d, k, v, x) {
    super();
    const w = new Dn().moveTo(0, 0).lineTo(0, v[1]).lineTo(h, v[1]).lineTo(h, 0).lineTo(0, 0), _ = w.getPoints(), z = new he().setFromPoints(_);
    this.lines = new It(z, new ht({ color: dn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(d), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new Nn(w), H = new st({ color: v[1] > 0 ? 24435 : 11411474, side: Dt });
    this.mesh = new je(b, H), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(d), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new Et(`${k[1].toFixed(2)}`), this.normalizedResult = v, this.textPosition = Fn([i, y]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(d), this.add(this.text);
  }
  updateScale(i) {
    this.lines.scale.set(1, i * 2, 1), this.mesh.scale.set(1, i * 2, 1), this.text.updateScale(i * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * i);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class zo extends ot {
  constructor(i, y, h, d, k, v, x) {
    super();
    const w = k[0] * h / (k[0] + k[1]), _ = k[0] * k[1] > 0;
    if (this.text = new Et(`${k[0].toFixed(2)}`), this.text2 = new Et(`${(k[1] * -1).toFixed(2)}`), this.normalizedResult = v, this.textPosition = to(i, y), this.text2Position = to(y, i), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(d), this.text2.rotation.setFromRotationMatrix(d), this.add(this.text, this.text2), _) {
      const z = new Dn().moveTo(0, 0).lineTo(0, v[0]).lineTo(w, 0).lineTo(0, 0), b = new Dn().moveTo(w, 0).lineTo(h, -v[1]).lineTo(h, 0).lineTo(w, 0), H = z.getPoints(), le = b.getPoints(), me = new he().setFromPoints(H), de = new he().setFromPoints(le), S = new ht({ color: dn().resultOutline });
      this.lines = new It(me, S), this.lines2 = new It(de, S), this.lines.position.set(...i), this.lines2.position.set(...i), this.lines.rotation.setFromRotationMatrix(d), this.lines2.rotation.setFromRotationMatrix(d), x && this.lines.rotateX(Math.PI / 2), x && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const W = new Nn(z), fe = new Nn(b), se = new st({ color: v[0] > 0 ? 24435 : 11411474, side: Dt }), be = new st({ color: -v[1] > 0 ? 24435 : 11411474, side: Dt });
      this.mesh = new je(W, se), this.mesh2 = new je(fe, be), this.mesh.position.set(...i), this.mesh2.position.set(...i), this.mesh.rotation.setFromRotationMatrix(d), this.mesh2.rotation.setFromRotationMatrix(d), x && this.mesh.rotateX(Math.PI / 2), x && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const z = new Dn().moveTo(0, 0).lineTo(0, v[0]).lineTo(h, -v[1]).lineTo(h, 0).lineTo(0, 0), b = z.getPoints(), H = new he().setFromPoints(b);
      this.lines = new It(H, new ht({ color: dn().resultOutline })), this.lines.position.set(...i), this.lines.rotation.setFromRotationMatrix(d), x && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const le = new Nn(z), me = new st({ color: v[0] > 0 ? 24435 : 11411474, side: Dt });
      this.mesh = new je(le, me), this.mesh.position.set(...i), this.mesh.rotation.setFromRotationMatrix(d), x && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
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
  const d = new ot(), k = () => {
    const w = y.rawVal ?? [];
    if (w.length < 2) return i.gridSize.val * 0.5;
    let _ = [1 / 0, 1 / 0, 1 / 0], z = [-1 / 0, -1 / 0, -1 / 0];
    for (const b of w) for (let H = 0; H < 3; H++) b[H] < _[H] && (_[H] = b[H]), b[H] > z[H] && (z[H] = b[H]);
    return Math.max(z[0] - _[0], z[1] - _[1], z[2] - _[2], 0.1);
  }, v = () => 0.025 * k(), x = { normals: Rn, shearsY: Rn, shearsZ: Rn, torsions: Rn, bendingsY: zo, bendingsZ: zo };
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, y.val, i.frameResults.val == "none") return;
    d.children.forEach((_) => _.dispose()), d.clear();
    const w = Io[i.frameResults.rawVal];
    (_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.rawVal[w]) == null ? void 0 : _b.forEach((_, z) => {
      var _a2, _b2;
      const b = ((_a2 = e.elements) == null ? void 0 : _a2.rawVal[z]) ?? [0, 1], H = y.rawVal[b[0]], le = y.rawVal[b[1]], me = new m(...le).distanceTo(new m(...H)), de = gs((_b2 = e.analyzeOutputs) == null ? void 0 : _b2.rawVal[w]), S = _ == null ? void 0 : _.map((be) => be / (de === 0 ? 1 : de)), W = oo(H, le), fe = new x[w](H, le, me, W, _ ?? [0, 0], S ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(w)), se = v();
      fe.updateScale(se * h.rawVal), d.add(fe);
    });
  }), $.derive(() => {
    if (h.val, i.frameResults.rawVal == "none") return;
    const w = v();
    d.children.forEach((_) => _.updateScale(w * h.rawVal));
  }), $.derive(() => {
    d.visible = i.frameResults.val != "none";
  }), d;
}
function gs(e) {
  let i = 0;
  return e == null ? void 0 : e.forEach((y) => {
    const h = Math.max(...y ?? [0, 0]);
    h > i && (i = h);
  }), i;
}
class vs extends ot {
  constructor(i, y, h) {
    super();
    const d = y === so.reactions;
    h[0] && (this.xText1 = new Et(`${d ? "Fx" : "Dx"}: ` + h[0].toFixed(4))), h[3] && (this.xText2 = new Et(`${d ? "Mx" : "Rx"}: ` + h[3].toFixed(4))), h[1] && (this.yText1 = new Et(`${d ? "Fy" : "Dy"}: ` + h[1].toFixed(4))), h[4] && (this.yText2 = new Et(`${d ? "My" : "Ry"}: ` + h[4].toFixed(4))), h[2] && (this.zText1 = new Et(`${d ? "Fz" : "Dz"}: ` + h[2].toFixed(4))), h[5] && (this.zText2 = new Et(`${d ? "Mz" : "Rz"}: ` + h[5].toFixed(4))), (h[0] || h[3]) && (this.xArrow = new cn(new m(1, 0, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[1] || h[4]) && (this.yArrow = new cn(new m(0, 1, 0), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), (h[2] || h[5]) && (this.zArrow = new cn(new m(0, 0, 1), new m(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...i), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
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
  const d = new ot();
  return $.derive(() => {
    var _a, _b;
    if (i.deformedShape.val, i.nodeResults.val == "none") return;
    d.children.forEach((x) => x.dispose()), d.clear();
    const k = so[i.nodeResults.rawVal], v = 0.05 * i.gridSize.val;
    (_b = (_a = e.deformOutputs) == null ? void 0 : _a.val[k]) == null ? void 0 : _b.forEach((x, w) => {
      const _ = new vs(y.rawVal[w], k, x ?? [0, 0, 0, 0, 0, 0]);
      _.updateScale(v * h.rawVal), d.add(_);
    });
  }), $.derive(() => {
    if (h.val, i.nodeResults.rawVal == "none") return;
    const k = 0.05 * i.gridSize.val;
    d.children.forEach((v) => v.updateScale(k * h.rawVal));
  }), $.derive(() => {
    d.visible = i.nodeResults.val != "none";
  }), d;
}
function Ms({ drawingObj: e, gridObj: i, scene: y, getActiveCamera: h, controls: d, gridSize: k, derivedDisplayScale: v, rendererElm: x, viewerRender: w }) {
  const _ = new Ho(), z = new Wo(), b = (n) => {
    const o = x.getBoundingClientRect(), a = n.clientX - o.left, t = n.clientY - o.top, r = o.width || 1, s = o.height || 1;
    if (!!window.__hekatanSplitMode) {
      const u = r / 2;
      if (a >= u) return z.x = (a - u) / u * 2 - 1, z.y = -(t / s) * 2 + 1, window.__hekatanSplitCamera ?? h();
      z.x = a / u * 2 - 1;
    } else z.x = a / r * 2 - 1;
    return z.y = -(t / s) * 2 + 1, h();
  }, H = new je(new ln(1e4, 1e4), new st({ side: Dt, transparent: true, opacity: 0, depthWrite: false }));
  H.visible = true, H.frustumCulled = false, y.add(H);
  const le = (n, o, a) => {
    const t = new je(new ln(1e4, 1e4), new st({ side: Dt, transparent: true, opacity: 0, depthWrite: false }));
    return t.rotation.set(n, o, a), t.visible = false, t.frustumCulled = false, y.add(t), t;
  }, me = le(Math.PI / 2, 0, 0), de = le(0, Math.PI / 2, 0);
  let S = false;
  const W = () => {
    if (S) return _.intersectObjects([H], false);
    if (me.visible = !!window.__hekatanGridPlaneXZ, de.visible = !!window.__hekatanGridPlaneYZ, window.__hekatanOrthoRaycast === true && Ze.visible) {
      const a = _.intersectObjects([Ze, wt, pt], false);
      if (a.length > 0) return a;
    }
    const o = [H];
    return me.visible && o.push(me), de.visible && o.push(de), lt.visible && Zt.length > 0 && o.push(...Zt), _.intersectObjects(o, false);
  }, fe = new Xn(new he(), new Yn()), se = new Xn(new he(), new Yn({ color: "gray", sizeAttenuation: false, size: 6 })), be = new Xn(new he(), new Yn({ color: "orange", size: 0.1 }));
  y.add(be);
  const q = document.createElement("input");
  q.id = "hk-rubber-label", q.type = "text", q.spellcheck = false, q.title = `Sintaxis estilo AutoCAD:
  5         \u2192 5m en direcci\xF3n del cursor (DDE)
  5,3,2     \u2192 coordenada absoluta (X,Y,Z)
  @5,3,2    \u2192 relativa al \xFAltimo punto
  5<45      \u2192 polar 2D: 5m a 45\xB0 desde origen
  @5<45     \u2192 polar relativa: 5m a 45\xB0 del \xFAltimo punto
  @5<45<30  \u2192 esf\xE9rica 3D: 5m, azimuth 45\xB0, elevaci\xF3n 30\xB0`, q.style.cssText = ["position:fixed", "z-index:99996", "padding:3px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1.5px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(-50%,-50%)", "white-space:nowrap", "outline:none", "width:80px", "text-align:center", "display:none", "pointer-events:none"].join(";") + ";", document.body.appendChild(q);
  let K = null, Y = null, L = false;
  const A = new m(), F = (n, o, a, t, r, s) => {
    const l = t - n, u = r - o, p = s - a, g = Math.hypot(l, u, p);
    if (g < 0.01) {
      q.style.display = "none";
      return;
    }
    K = [n, o, a], Y = [l / g, u / g, p / g], A.set((n + t) / 2, (o + r) / 2, (a + s) / 2), A.project(h());
    const M = x.getBoundingClientRect(), c = M.left + (A.x * 0.5 + 0.5) * M.width, f = M.top + (-A.y * 0.5 + 0.5) * M.height;
    if (q.style.left = c + "px", q.style.top = f + "px", q.style.display = "block", !L) {
      if (q.value = `${g.toFixed(2)} m`, document.activeElement !== q) {
        const P = document.activeElement;
        P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA") && P !== q || q.focus({ preventScroll: true });
      }
      try {
        q.select();
      } catch {
      }
    }
  }, T = () => {
    q.style.display = "none", K = null, Y = null, L = false, document.activeElement === q && q.blur();
  }, C = (n) => {
    var _a, _b, _c, _d;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    if (o === "col" || o === "wall" || o === "extp" || o === "extl") {
      Tt = n, ie(`\u{1F4D0} Altura ${n}m memorizada \u2014 hac\xE9 el click para crear ${{ col: "columna", wall: "pared", extp: "extrusi\xF3n punto\u2192l\xEDnea", extl: "extrusi\xF3n l\xEDnea\u2192\xE1rea" }[o]}.`), q.blur();
      return;
    }
    if (!K || !Y || !e.polylines) return;
    let a = Y[0], t = Y[1], r = Y[2];
    J === "x" ? (a = Math.sign(a) || 1, t = 0, r = 0) : J === "y" ? (a = 0, t = Math.sign(t) || 1, r = 0) : J === "z" && (a = 0, t = 0, r = Math.sign(r) || 1);
    const s = K[0] + a * n, l = K[1] + t * n, u = K[2] + r * n;
    window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, [s, l, u]];
    const p = e.polylines.rawVal, g = p.length ? p[p.length - 1] : [];
    e.polylines.val = [...p.slice(0, -1), [...g, e.points.rawVal.length - 1]], q.blur();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    w();
  }, Z = (n) => {
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
        const [s, l, u] = r;
        return { kind: "relSpherical", L: s, az: l, el: u };
      }
      return null;
    }
    if (o.includes(",")) {
      const r = o.split(",").map((p) => parseFloat(p.trim()));
      if (r.some(isNaN)) return null;
      const [s, l, u = 0] = r;
      return a ? { kind: "relCart", dx: s, dy: l, dz: u } : { kind: "absCart", x: s, y: l, z: u };
    }
    const t = parseFloat(o);
    return isNaN(t) || t <= 0 ? null : { kind: "length", L: t };
  }, ne = (n) => {
    if (!n) return null;
    if (n.kind === "absCart") return [n.x, n.y, n.z];
    if (n.kind === "relCart") return K ? [K[0] + n.dx, K[1] + n.dy, K[2] + n.dz] : null;
    if (n.kind === "absPolar") {
      const o = n.ang * Math.PI / 180;
      return [n.L * Math.cos(o), n.L * Math.sin(o), 0];
    }
    if (n.kind === "relPolar") {
      if (!K) return null;
      const o = n.ang * Math.PI / 180;
      return [K[0] + n.L * Math.cos(o), K[1] + n.L * Math.sin(o), K[2]];
    }
    if (n.kind === "relSpherical") {
      if (!K) return null;
      const o = n.az * Math.PI / 180, a = n.el * Math.PI / 180, t = n.L * Math.cos(a);
      return [K[0] + t * Math.cos(o), K[1] + t * Math.sin(o), K[2] + n.L * Math.sin(a)];
    }
    return null;
  }, j = (n) => {
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
    const o = Z(n);
    if (!o) return false;
    if (o.kind === "length") return C(o.L), true;
    const a = ne(o);
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
  }, q.addEventListener("keydown", (n) => {
    if (n.key === "Enter") {
      n.preventDefault();
      const a = Z(q.value);
      if (!a) return;
      if (L = false, a.kind === "length") C(a.L), ie(`\u270F DDE ${a.L}m aplicado en direcci\xF3n actual`);
      else {
        const t = ne(a);
        if (!t) return;
        j(t);
        const r = a.kind;
        ie(`\u270F ${r} \u2192 (${t[0].toFixed(2)}, ${t[1].toFixed(2)}, ${t[2].toFixed(2)})`);
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
    if (!K || !Y || document.activeElement === q) return;
    const o = document.activeElement;
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA") || /^[0-9.\-]$/.test(n.key) && (q.value = n.key, q.focus(), q.setSelectionRange(1, 1), n.preventDefault());
  });
  const ae = document.createElement("div");
  ae.id = "hk-coord-readout", ae.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:4px 8px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid #22d3ee", "border-radius:4px", "font-family:Consolas,monospace", "font-size:11px", "transform:translate(12px,-22px)", "white-space:nowrap", "display:none"].join(";") + ";", ae.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(ae);
  const V = document.createElement("div");
  V.id = "hk-coord-fixed", V.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "right:80px", "top:10px", "padding:6px 14px", "background:rgba(15,23,42,0.92)", "color:#22d3ee", "border:1px solid rgba(34,211,238,0.55)", "border-radius:5px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:500", "white-space:nowrap", "letter-spacing:0.3px", "box-shadow:0 2px 8px rgba(0,0,0,0.4)", "backdrop-filter:blur(4px)"].join(";") + ";", V.textContent = "X=0.00  Y=0.00  Z=0.00", document.body.appendChild(V);
  const N = new It(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new Pn({ color: 2282478, dashSize: 0.2, gapSize: 0.1, transparent: true, opacity: 0.85, linewidth: 2 }));
  N.frustumCulled = false, N.visible = false, y.add(N);
  const ee = new It(new he(), new ht({ color: 2282478, transparent: true, opacity: 0.9 }));
  ee.frustumCulled = false, ee.visible = false, y.add(ee);
  let re = [];
  const G = new ot(), Fe = new je(new ln(1, 1), new st({ color: 2282478, transparent: true, opacity: 0.08, side: Dt, depthWrite: false })), Me = new Ot(new yo(new ln(1, 1)), new ht({ color: 2282478, transparent: true, opacity: 0.85 })), Se = new Ot(new he(), new ht({ color: 2282478, transparent: true, opacity: 0.3 })), $e = (n, o) => {
    const a = [], t = Math.ceil(n / o);
    for (let r = -t; r <= t; r++) {
      const s = r * o;
      a.push(-n, s, 0, n, s, 0), a.push(s, -n, 0, s, n, 0);
    }
    Se.geometry.dispose(), Se.geometry = new he(), Se.geometry.setAttribute("position", new $t(a, 3));
  };
  G.add(Fe, Me, Se), G.visible = false, G.frustumCulled = false, y.add(G);
  const Ve = new ot();
  Ve.frustumCulled = false, Ve.visible = false, y.add(Ve);
  const St = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), a = new Pn({ color: n, dashSize: 0.15, gapSize: 0.08, transparent: true, opacity: 0.5, linewidth: 1 });
    return new It(o, a);
  }, kt = St(16711680), dt = St(65280), I = St(35071);
  Ve.add(kt, dt, I);
  const oe = (n) => {
    const o = new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0), new m(0, 0, 0)]), a = new ht({ color: n, transparent: true, opacity: 0.2, depthTest: false }), t = new To(o, a);
    return t.renderOrder = 997, t.frustumCulled = false, t;
  }, ce = oe(3462041), pe = oe(16724804), Le = oe(6333946), Ne = new ot();
  Ne.frustumCulled = false, Ne.visible = false, y.add(Ne), Ne.add(ce, pe, Le);
  const mt = (n) => {
    const o = new ln(1, 1), a = new st({ color: n, transparent: true, opacity: 0.06, side: Dt, depthWrite: false }), t = new je(o, a);
    return t.frustumCulled = false, t.renderOrder = 996, t;
  }, Ze = mt(3462041), wt = mt(16724804), pt = mt(6333946);
  Ne.add(Ze, wt, pt);
  const Xt = (n, o, a, t) => {
    n.scale.set(2 * t, 2 * t, 1), a === "xy" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, 0, 0)) : a === "xz" ? (n.position.set(o[0], o[1], o[2]), n.rotation.set(Math.PI / 2, 0, 0)) : (n.position.set(o[0], o[1], o[2]), n.rotation.set(0, Math.PI / 2, 0));
  }, Pt = document.createElement("div");
  Pt.id = "hk-refplane-badge", Pt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99997", "padding:3px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:12px", "font-weight:bold", "transform:translate(20px,40px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Pt), window.__hekatanSetOrthoPlanes = (n) => {
    var _a;
    if (window.__hekatanShowOrthoPlanes = n, Ne.visible = n, n) {
      const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0], l = window.__hekatanOrthoExt ?? 8;
      U(ce, s, "xy", l), U(pe, s, "xz", l), U(Le, s, "yz", l), Xt(Ze, s, "xy", l), Xt(wt, s, "xz", l), Xt(pt, s, "yz", l), Ze.material.opacity = 0.05, wt.material.opacity = 0.05, pt.material.opacity = 0.05;
    } else {
      const o = document.getElementById("hk-refplane-badge");
      o && (o.style.display = "none");
    }
    w();
  }, window.__hekatanSetOrthoExt = (n) => {
    var _a;
    if (window.__hekatanOrthoExt = n, !Ne.visible) {
      w();
      return;
    }
    const o = window.__hekatanOrthoAnchor, a = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], t = a[a.length - 1] ?? [], r = e.points.rawVal ?? [], s = o && o.length === 3 ? o : t.length > 0 && r[t[t.length - 1]] ? r[t[t.length - 1]] : [0, 0, 0];
    U(ce, s, "xy", n), U(pe, s, "xz", n), U(Le, s, "yz", n), Xt(Ze, s, "xy", n), Xt(wt, s, "xz", n), Xt(pt, s, "yz", n), w();
  };
  const jt = (n) => {
    if (Ze.material.opacity = n === "xy" ? 0.09 : 0.025, wt.material.opacity = n === "xz" ? 0.09 : 0.025, pt.material.opacity = n === "yz" ? 0.09 : 0.025, n) {
      const r = { xy: { bg: "rgba(52,211,153,0.90)", text: "#0a1f12" }, xz: { bg: "rgba(255,51,68,0.90)", text: "#1f0a0e" }, yz: { bg: "rgba(96,165,250,0.90)", text: "#0a1224" } }[n];
      Pt.style.background = r.bg, Pt.style.color = r.text, Pt.textContent = `\u25A6 Plano ${n.toUpperCase()}`, Pt.style.display = "block";
    } else Pt.style.display = "none";
  }, U = (n, o, a, t) => {
    let r;
    a === "xy" ? r = [new m(o[0] - t, o[1] - t, o[2]), new m(o[0] + t, o[1] - t, o[2]), new m(o[0] + t, o[1] + t, o[2]), new m(o[0] - t, o[1] + t, o[2]), new m(o[0] - t, o[1] - t, o[2])] : a === "xz" ? r = [new m(o[0] - t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] - t), new m(o[0] + t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] + t), new m(o[0] - t, o[1], o[2] - t)] : r = [new m(o[0], o[1] - t, o[2] - t), new m(o[0], o[1] + t, o[2] - t), new m(o[0], o[1] + t, o[2] + t), new m(o[0], o[1] - t, o[2] + t), new m(o[0], o[1] - t, o[2] - t)], n.geometry.setFromPoints(r);
  };
  let J = null;
  window.__hekatanAxisLock = () => J;
  let ze = null;
  const Q = document.createElement("div");
  Q.id = "hk-axis-lock-badge", Q.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99998", "padding:4px 10px", "border-radius:4px", "font-family:Consolas,monospace", "font-size:13px", "font-weight:bold", "transform:translate(20px,18px)", "white-space:nowrap", "display:none"].join(";") + ";", document.body.appendChild(Q);
  const We = () => {
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
    if (n.key === "Enter" && t === "polyarea" && re.length >= 3) {
      const r = Je();
      ie(`\u2713 \xC1rea libre mallada \u2014 ${r} shells Q4 creados.`), n.preventDefault();
      return;
    }
    if (a === "x" || a === "y" || a === "z") J = J === a ? null : a, We(), n.preventDefault();
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
  const Ue = new m(), Oe = new m(), Te = new m(), Ge = (n) => {
    if (!J) return null;
    const o = n[0], a = n[1], t = n[2];
    return J === "x" ? (Ue.set(o - 1e4, a, t), Oe.set(o + 1e4, a, t)) : J === "y" ? (Ue.set(o, a - 1e4, t), Oe.set(o, a + 1e4, t)) : (Ue.set(o, a, t - 1e4), Oe.set(o, a, t + 1e4)), _.ray.distanceSqToSegment(Ue, Oe, null, Te), Te;
  };
  window.__hekatanProjectOnAxis = Ge;
  const _e = new It(new he().setFromPoints([new m(0, 0, 0), new m(0, 0, 0)]), new ht({ color: 16724804, transparent: true, opacity: 0.95, linewidth: 4, depthTest: false }));
  _e.renderOrder = 998, _e.frustumCulled = false, _e.visible = false, y.add(_e);
  let yt = -1, ut = -1, Ye = -1;
  const Ce = /* @__PURE__ */ new Set();
  window.__hekatanSelection = Ce;
  const ke = new It(new he().setFromPoints([new m(), new m()]), new ht({ color: 16766720, transparent: true, opacity: 0.95, depthTest: false }));
  ke.renderOrder = 997, ke.frustumCulled = false, ke.visible = false, y.add(ke);
  const qe = new je(new xn(0.02, 12, 12), new st({ color: 16766720, transparent: true, opacity: 0.9, depthTest: false }));
  qe.renderOrder = 998, qe.visible = false, y.add(qe);
  const at = (n) => {
    const o = h();
    if (o.isOrthographicCamera) {
      const t = o, r = (t.top - t.bottom) / t.zoom;
      return Math.max(0.05, r * 6e-3);
    }
    const a = o.position.distanceTo(n);
    return Math.max(0.05, a / 10);
  }, pn = () => {
    qe.visible && qe.scale.setScalar(at(qe.position));
  }, Ke = new ot();
  Ke.frustumCulled = false, y.add(Ke);
  const Wt = 2282478;
  let bt = null;
  const De = (n, o, a, t) => {
    if (!e.points) return -1;
    const r = e.points.rawVal;
    let s = -1, l = t;
    for (let u = 0; u < r.length; u++) {
      const p = r[u];
      if (!p) continue;
      const g = Math.hypot(n - p[0], o - p[1], a - p[2]);
      g < l && (l = g, s = u);
    }
    return s;
  }, Pe = () => {
    var _a, _b, _c, _d, _e2, _f, _g;
    for (; Ke.children.length; ) {
      const l = Ke.children.pop();
      (_b = (_a = l.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = l.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = ((_e2 = e.points) == null ? void 0 : _e2.rawVal) ?? [], o = ((_f = e.polylines) == null ? void 0 : _f.rawVal) ?? [], t = ((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [];
    for (const l of Ce) {
      const [u, ...p] = l.split(":");
      if (u === "pt") {
        const g = n[+p[0]];
        if (!g) continue;
        const M = new je(new xn(0.025, 12, 12), new st({ color: Wt, transparent: true, opacity: 0.9, depthTest: false }));
        M.position.set(g[0], g[1], g[2]), M.renderOrder = 999, M.__isSelectionPt = true, Ke.add(M);
      } else if (u === "seg") {
        const g = o[+p[0]], M = n[g == null ? void 0 : g[+p[1]]], c = n[g == null ? void 0 : g[+p[1] + 1]];
        if (!M || !c) continue;
        const f = new he().setFromPoints([new m(M[0], M[1], M[2]), new m(c[0], c[1], c[2])]), P = new It(f, new ht({ color: Wt, transparent: true, opacity: 0.95, depthTest: false }));
        P.renderOrder = 999, Ke.add(P);
      } else if (u === "poly") {
        const M = o[+p[0]].map((P) => {
          const R = n[P];
          return R ? new m(R[0], R[1], R[2]) : null;
        }).filter(Boolean);
        if (M.length < 2) continue;
        const c = new he().setFromPoints(M), f = new It(c, new ht({ color: Wt, transparent: true, opacity: 0.95, depthTest: false }));
        f.renderOrder = 999, Ke.add(f);
      } else if (u === "aux") {
        const g = t[+p[0]];
        if (!g || g.length !== 6) continue;
        const M = new he().setFromPoints([new m(g[0], g[1], g[2]), new m(g[3], g[4], g[5])]), c = new It(M, new ht({ color: Wt, transparent: true, opacity: 0.95, depthTest: false }));
        c.renderOrder = 999, Ke.add(c);
      }
    }
    const r = window.__hekatanUpdateSelectionPtScale;
    r && r();
    const s = window.__hekatanRefreshPropsPane;
    s && s(), w();
  };
  window.__hekatanRefreshSelection = Pe, window.__hekatanClearSelection = () => {
    Ce.clear(), Pe();
  };
  const xe = (n, o, a, t, r, s, l, u, p) => {
    const g = l - t, M = u - r, c = p - s, f = g * g + M * M + c * c;
    if (f < 1e-12) return Math.hypot(n - t, o - r, a - s);
    let P = ((n - t) * g + (o - r) * M + (a - s) * c) / f;
    P = Math.max(0, Math.min(1, P));
    const R = t + P * g, B = r + P * M, D = s + P * c;
    return Math.hypot(n - R, o - B, a - D);
  }, Xe = (n, o, a, t) => {
    if (!e.polylines) return null;
    const r = e.polylines.rawVal, s = e.points.rawVal;
    let l = -1, u = -1, p = t;
    for (let g = 0; g < r.length; g++) {
      const M = r[g];
      for (let c = 0; c < M.length - 1; c++) {
        const f = s[M[c]], P = s[M[c + 1]];
        if (!f || !P) continue;
        const R = xe(n, o, a, f[0], f[1], f[2], P[0], P[1], P[2]);
        R < p && (p = R, l = g, u = c);
      }
    }
    return l >= 0 ? { polyIdx: l, segIdx: u, dist: p } : null;
  }, ge = (n, o, a, t) => {
    const r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? (r == null ? void 0 : r.val) ?? r ?? [];
    let l = -1, u = t;
    for (let p = 0; p < s.length; p++) {
      const g = s[p];
      if (!g || g.length !== 6) continue;
      const M = xe(n, o, a, g[0], g[1], g[2], g[3], g[4], g[5]);
      M < u && (u = M, l = p);
    }
    return l;
  }, it = (n) => {
    const o = window.__hekatanDrawingAuxLines, t = ((o == null ? void 0 : o.rawVal) ?? (o == null ? void 0 : o.val) ?? o ?? [])[n];
    if (!t || t.length !== 6) {
      _e.visible = false;
      return;
    }
    _e.geometry.setFromPoints([new m(t[0], t[1], t[2]), new m(t[3], t[4], t[5])]), _e.visible = true;
  }, ft = (n, o = -1) => {
    var _a, _b;
    if (!e.polylines) return;
    const a = e.polylines.rawVal[n], t = e.points.rawVal;
    if (!a || a.length < 2) {
      _e.visible = false;
      return;
    }
    const r = ((_b = (_a = e.areas) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.includes(n)) ?? false, s = [];
    if (r || o < 0 || o >= a.length - 1) for (const l of a) {
      const u = t[l];
      u && s.push(new m(u[0], u[1], u[2]));
    }
    else {
      const l = t[a[o]], u = t[a[o + 1]];
      l && s.push(new m(l[0], l[1], l[2])), u && s.push(new m(u[0], u[1], u[2]));
    }
    _e.geometry.setFromPoints(s), _e.visible = true;
  }, Rt = (n) => {
    var _a;
    if (!e.polylines) return;
    const o = e.polylines.rawVal;
    if (n < 0 || n >= o.length) return;
    const a = o.filter((p, g) => g !== n), t = /* @__PURE__ */ new Set();
    for (const p of a) for (const g of p) t.add(g);
    const r = e.points.rawVal, s = /* @__PURE__ */ new Map(), l = [];
    for (let p = 0; p < r.length; p++) t.has(p) && (s.set(p, l.length), l.push(r[p]));
    const u = a.map((p) => p.map((g) => s.get(g)).filter((g) => g !== void 0));
    e.points.val = l, e.polylines.val = u, e.areas && (e.areas.val = e.areas.rawVal.filter((p) => p !== n).map((p) => p > n ? p - 1 : p)), _e.visible = false, yt = -1, ut = -1;
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
  }, He = (n, o) => {
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
    const l = [...a.slice(0, n), ...s, ...a.slice(n + 1)], u = /* @__PURE__ */ new Set();
    for (const f of l) for (const P of f) u.add(P);
    const p = e.points.rawVal, g = /* @__PURE__ */ new Map(), M = [];
    for (let f = 0; f < p.length; f++) u.has(f) && (g.set(f, M.length), M.push(p[f]));
    const c = l.map((f) => f.map((P) => g.get(P)).filter((P) => P !== void 0));
    if (e.points.val = M, e.polylines.val = c, e.areas) {
      const f = s.length - 1;
      e.areas.val = e.areas.rawVal.map((P) => P > n ? P + f : P);
    }
    _e.visible = false, yt = -1, ut = -1;
    try {
      (_c = window.__hekatanRebuild) == null ? void 0 : _c.call(window);
    } catch {
    }
  };
  fe.geometry.setAttribute("position", new $t(e.points.rawVal.flat(), 3)), fe.geometry.computeBoundingSphere(), fe.frustumCulled = false, se.frustumCulled = false, y.add(se), H.position.set(0, 0, 0), H.rotateX(Math.PI / 2), H.geometry.rotateX(Math.PI / 2), H.updateMatrixWorld(), e.polylines && (e.polylines.val = [...e.polylines.rawVal, []]), window.__hekatanDrawAt = (n, o, a) => {
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
    const l = Math.max(4, Math.round(r)), u = e.points.rawVal.length, p = [];
    for (let g = 0; g < l; g++) {
      const M = 2 * Math.PI * g / l, c = t * Math.cos(M), f = t * Math.sin(M);
      let P;
      s === "xy" ? P = [n + c, o + f, a] : s === "xz" ? P = [n + c, o, a + f] : P = [n, o + c, a + f], p.push(P);
    }
    if (e.points.val = [...e.points.rawVal, ...p], e.polylines) {
      const g = [...p.map((c, f) => u + f), u], M = e.polylines.rawVal;
      ((_a = M[M.length - 1]) == null ? void 0 : _a.length) > 0 ? e.polylines.val = [...M, g, []] : e.polylines.val = [...M.slice(0, -1), g, []];
    }
  }, window.__hekatanDrawArc = (n, o, a, t = window.__hekatanArcSegs ?? 12) => {
    const r = Math.max(4, Math.round(t)), s = new m(...n), l = new m(...o), u = new m(...a), p = new m().subVectors(l, s), g = new m().subVectors(u, s), M = new m().crossVectors(p, g).normalize(), c = new m().addVectors(s, l).multiplyScalar(0.5), f = new m().addVectors(l, u).multiplyScalar(0.5), P = new m().crossVectors(p, M).normalize(), R = new m().crossVectors(new m().subVectors(u, l), M).normalize(), B = new m().subVectors(f, c), D = P.x * R.y - P.y * R.x;
    let E;
    if (Math.abs(D) > 1e-9) {
      const Be = (B.x * R.y - B.y * R.x) / D;
      E = new m().addVectors(c, P.clone().multiplyScalar(Be));
    } else E = c.clone();
    const O = s.distanceTo(E), te = new m().subVectors(s, E), ue = new m().subVectors(u, E), Ie = Math.acos(Math.max(-1, Math.min(1, te.dot(ue) / (O * O)))), we = e.points.rawVal.length, ye = [], zt = M.clone();
    for (let Be = 0; Be <= r; Be++) {
      const Ee = Be / r, Qe = Ie * Ee, rt = new Jn().setFromAxisAngle(zt, Qe), Ct = te.clone().applyQuaternion(rt).add(E);
      ye.push([Ct.x, Ct.y, Ct.z]);
    }
    if (e.points.val = [...e.points.rawVal, ...ye], e.polylines) {
      const Be = ye.map((Qe, rt) => we + rt), Ee = e.polylines.rawVal;
      e.polylines.val = [...Ee.slice(0, -1), Be, []];
    }
  }, window.__hekatanDrawSlabChaflan = (n, o, a = 1, t = 6, r = 6) => {
    const s = Math.min(n[0], o[0]), l = Math.max(n[0], o[0]), u = Math.min(n[1], o[1]), p = Math.max(n[1], o[1]), g = (n[2] + o[2]) / 2, M = l - s, c = p - u, f = Math.min(a, M / 2 - 0.01, c / 2 - 0.01);
    if (f <= 0) return;
    const P = e.points.rawVal.length, R = [], B = [], D = (E, O) => {
      R.push([E, O, g]), B.push(P + R.length - 1);
    };
    for (let E = 0; E <= r; E++) D(s + f + (M - 2 * f) * E / r, u);
    for (let E = 1; E <= t; E++) {
      const O = -Math.PI / 2 + Math.PI / 2 * E / t;
      D(l - f + f * Math.cos(O), u + f + f * Math.sin(O));
    }
    for (let E = 1; E <= r; E++) D(l, u + f + (c - 2 * f) * E / r);
    for (let E = 1; E <= t; E++) {
      const O = 0 + Math.PI / 2 * E / t;
      D(l - f + f * Math.cos(O), p - f + f * Math.sin(O));
    }
    for (let E = 1; E <= r; E++) D(l - f - (M - 2 * f) * E / r, p);
    for (let E = 1; E <= t; E++) {
      const O = Math.PI / 2 + Math.PI / 2 * E / t;
      D(s + f + f * Math.cos(O), p - f + f * Math.sin(O));
    }
    for (let E = 1; E <= r; E++) D(s, p - f - (c - 2 * f) * E / r);
    for (let E = 1; E <= t; E++) {
      const O = Math.PI + Math.PI / 2 * E / t;
      D(s + f + f * Math.cos(O), u + f + f * Math.sin(O));
    }
    if (B.push(P), e.points.val = [...e.points.rawVal, ...R], e.polylines) {
      const E = e.polylines.rawVal;
      e.polylines.val = [...E.slice(0, -1), B, []];
    }
  }, window.__hekatanDrawRect = (n, o) => {
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], u = o[1], p = o[2];
    let g;
    if (Math.abs(s - p) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, u, s], [t, u, s]] : Math.abs(r - u) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, r, p], [t, r, p]] : g = [[t, r, s], [t, u, s], [t, u, p], [t, r, p]], e.points.val = [...e.points.rawVal, ...g], e.polylines) {
      const M = [a, a + 1, a + 2, a + 3, a], c = e.polylines.rawVal;
      e.polylines.val = [...c.slice(0, -1), M, []];
    }
  }, window.__hekatanDrawRectArea = (n, o) => {
    var _a;
    const a = e.points.rawVal.length, t = n[0], r = n[1], s = n[2], l = o[0], u = o[1], p = o[2];
    let g;
    if (S && e.gridTarget) {
      const M = e.gridTarget.rawVal, c = new zn(...M.rotation), f = new m(1, 0, 0).applyEuler(c), P = new m(0, 1, 0).applyEuler(c), R = new m(...M.position), B = new m(t, r, s), D = new m(l, u, p), E = B.clone().sub(R).dot(f), O = B.clone().sub(R).dot(P), te = D.clone().sub(R).dot(f), ue = D.clone().sub(R).dot(P), Ie = (we, ye) => R.clone().addScaledVector(f, we).addScaledVector(P, ye).toArray();
      g = [Ie(E, O), Ie(te, O), Ie(te, ue), Ie(E, ue)];
    } else Math.abs(s - p) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, u, s], [t, u, s]] : Math.abs(r - u) < 1e-6 ? g = [[t, r, s], [l, r, s], [l, r, p], [t, r, p]] : g = [[t, r, s], [t, u, s], [t, u, p], [t, r, p]];
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
    for (let ve = 0; ve < a; ve++) {
      const Re = n[ve], nt = n[(ve + 1) % a];
      t += (Re[1] - nt[1]) * (Re[2] + nt[2]), r += (Re[2] - nt[2]) * (Re[0] + nt[0]), s += (Re[0] - nt[0]) * (Re[1] + nt[1]);
    }
    const l = Math.hypot(t, r, s) || 1;
    t /= l, r /= l, s /= l;
    let u = n[1][0] - n[0][0], p = n[1][1] - n[0][1], g = n[1][2] - n[0][2];
    const M = Math.hypot(u, p, g) || 1;
    u /= M, p /= M, g /= M;
    let c = r * g - s * p, f = s * u - t * g, P = t * p - r * u;
    const R = Math.hypot(c, f, P) || 1;
    c /= R, f /= R, P /= R;
    const B = n[0], D = (ve) => [(ve[0] - B[0]) * u + (ve[1] - B[1]) * p + (ve[2] - B[2]) * g, (ve[0] - B[0]) * c + (ve[1] - B[1]) * f + (ve[2] - B[2]) * P], E = (ve, Re) => [B[0] + ve * u + Re * c, B[1] + ve * p + Re * f, B[2] + ve * g + Re * P], O = n.map(D);
    let te = 1 / 0, ue = -1 / 0, Ie = 1 / 0, we = -1 / 0;
    for (const [ve, Re] of O) ve < te && (te = ve), ve > ue && (ue = ve), Re < Ie && (Ie = Re), Re > we && (we = Re);
    const ye = ue - te, zt = we - Ie;
    if (ye < 1e-6 || zt < 1e-6) return 0;
    let Be = o && o > 0 ? o : 0.5;
    for (; ye / Be * (zt / Be) > 2500; ) Be *= 2;
    Be = Math.min(Be, Math.min(ye, zt));
    const Ee = (ve, Re) => {
      let nt = false;
      for (let Ht = 0, on = O.length - 1; Ht < O.length; on = Ht++) {
        const [wn, Sn] = O[Ht], [yn, kn] = O[on];
        Sn > Re != kn > Re && ve < (yn - wn) * (Re - Sn) / (kn - Sn) + wn && (nt = !nt);
      }
      return nt;
    }, Qe = Math.max(1, Math.round(ye / Be)), rt = Math.max(1, Math.round(zt / Be)), Ct = ye / Qe, Bt = zt / rt, nn = /* @__PURE__ */ new Map(), qt = [], Ft = e.points.rawVal.length, Kt = (ve, Re) => {
      const nt = ve + "," + Re, Ht = nn.get(nt);
      if (Ht !== void 0) return Ht;
      const on = Ft + qt.length;
      return qt.push(E(te + ve * Ct, Ie + Re * Bt)), nn.set(nt, on), on;
    }, Lt = [];
    for (let ve = 0; ve < Qe; ve++) for (let Re = 0; Re < rt; Re++) {
      if (!Ee(te + (ve + 0.5) * Ct, Ie + (Re + 0.5) * Bt)) continue;
      const nt = Kt(ve, Re), Ht = Kt(ve + 1, Re), on = Kt(ve + 1, Re + 1), wn = Kt(ve, Re + 1);
      Lt.push([nt, Ht, on, wn]);
    }
    if (!Lt.length) return 0;
    if (window.__hekatanPushUndo && window.__hekatanPushUndo(), e.points.val = [...e.points.rawVal, ...qt], e.polylines && e.areas) {
      let ve = e.polylines.rawVal.slice();
      ve.length && ve[ve.length - 1].length === 0 && (ve = ve.slice(0, -1));
      const Re = [];
      for (const nt of Lt) Re.push(ve.length), ve.push([nt[0], nt[1], nt[2], nt[3], nt[0]]);
      ve.push([]), e.polylines.val = ve, e.areas.val = [...e.areas.rawVal, ...Re];
    }
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), Lt.length;
  };
  const Je = () => {
    if (re.length < 3) return re = [], ee.visible = false, w(), 0;
    const n = window.__hekatanMeshPolyArea(re.slice());
    return re = [], ee.visible = false, w(), n;
  };
  window.__hekatanFinalizePolyArea = Je, window.__hekatanSetInclinedPlaneFrom3 = (n, o, a) => {
    var _a;
    const t = new m(n[0], n[1], n[2]), r = new m(o[0], o[1], o[2]), s = new m(a[0], a[1], a[2]), l = new m().subVectors(r, t).cross(new m().subVectors(s, t));
    if (l.lengthSq() < 1e-9) return false;
    l.normalize();
    const u = new Jn().setFromUnitVectors(new m(0, 0, 1), l), p = new zn().setFromQuaternion(u);
    e.gridTarget && (e.gridTarget.val = { position: [t.x, t.y, t.z], rotation: [p.x, p.y, p.z] }), S = true;
    const g = new m().addVectors(t, r).add(s).multiplyScalar(1 / 3), M = Math.max(t.distanceTo(r), t.distanceTo(s), r.distanceTo(s)) * 2.2 + 4, c = M / 2;
    Fe.geometry.dispose(), Fe.geometry = new ln(M, M), Me.geometry.dispose(), Me.geometry = new yo(new ln(M, M)), $e(c, 1), G.position.copy(g), G.quaternion.copy(u), G.scale.set(1, 1, 1), G.visible = true;
    try {
      (_a = window.__hekatanRefreshStatus) == null ? void 0 : _a.call(window);
    } catch {
    }
    return w(), true;
  }, window.__hekatanResetPlaneXY = () => {
    e.gridTarget && (e.gridTarget.val = { position: [0, 0, 0], rotation: [0, 0, 0] }), S = false, G.visible = false, w();
  };
  const et = new ot();
  et.visible = false, y.add(et), window.__hekatanShowAxes = (n, o, a = 12, t = 2) => {
    var _a, _b;
    for (; et.children.length; ) {
      const M = et.children.pop();
      (_a = M.geometry) == null ? void 0 : _a.dispose(), (_b = M.material) == null ? void 0 : _b.dispose();
    }
    if (!n.length || !o.length) return;
    const r = Math.min(...o) - t, s = Math.max(...o) + t, l = Math.min(...n) - t, u = Math.max(...n) + t, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", g = (M, c, f, P, R) => {
      const B = document.createElement("canvas");
      B.width = 64, B.height = 32;
      const D = B.getContext("2d");
      D.fillStyle = R, D.font = "bold 22px sans-serif", D.textAlign = "center", D.fillText(M, 32, 26);
      const E = new xo(B), O = new go({ map: E, transparent: true }), te = new vo(O);
      return te.position.set(c, f, P), te.scale.set(1.2, 0.6, 1), te;
    };
    n.forEach((M, c) => {
      const f = c < p.length ? p[c] : `X${c}`, P = new he().setFromPoints([new m(M, r, 0), new m(M, s, 0), new m(M, r, 0), new m(M, r, a)]), R = new Pn({ color: 6333946, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), B = new Ot(P, R);
      B.computeLineDistances(), et.add(B), et.add(g(f, M, r - 0.5, 0, "#60a5fa")), et.add(g(f, M, s + 0.5, 0, "#60a5fa"));
    }), o.forEach((M, c) => {
      const f = `${c + 1}`, P = new he().setFromPoints([new m(l, M, 0), new m(u, M, 0), new m(l, M, 0), new m(l, M, a)]), R = new Pn({ color: 16478597, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.6 }), B = new Ot(P, R);
      B.computeLineDistances(), et.add(B), et.add(g(f, l - 0.5, M, 0, "#fb7185")), et.add(g(f, u + 0.5, M, 0, "#fb7185"));
    }), et.visible = true, w();
  }, window.__hekatanHideAxes = () => {
    et.visible = false, w();
  };
  const lt = new ot();
  lt.visible = false, y.add(lt);
  let Zt = [];
  window.__hekatanShowRefPlanes = (n = [0, 3, 6, 9, 12], o = 20, a = 0, t = 0) => {
    var _a, _b;
    for (; lt.children.length; ) {
      const s = lt.children.pop();
      (_a = s.geometry) == null ? void 0 : _a.dispose(), (_b = s.material) == null ? void 0 : _b.dispose();
    }
    Zt.forEach((s) => {
      y.remove(s), s.geometry.dispose(), s.material.dispose();
    }), Zt = [];
    const r = [6333946, 3462041, 16498468, 16478597, 12616956, 2282478];
    n.forEach((s, l) => {
      const u = r[l % r.length], p = o / 2, g = [new m(a - p, t - p, s), new m(a + p, t - p, s), new m(a + p, t + p, s), new m(a - p, t + p, s), new m(a - p, t - p, s)], M = new he().setFromPoints(g), c = new ht({ color: u, transparent: true, opacity: 0.55 });
      lt.add(new It(M, c));
      const f = document.createElement("canvas");
      f.width = 128, f.height = 32;
      const P = f.getContext("2d");
      P.fillStyle = `#${u.toString(16).padStart(6, "0")}`, P.font = "bold 18px sans-serif", P.fillText(`Z = ${s} m`, 4, 22);
      const R = new xo(f), B = new go({ map: R, transparent: true }), D = new vo(B);
      D.position.set(a - p - 1.5, t - p - 1.5, s), D.scale.set(2.5, 0.6, 1), lt.add(D);
      const E = new ln(1e4, 1e4), O = new st({ visible: false, side: Dt }), te = new je(E, O);
      te.position.set(0, 0, s), te.frustumCulled = false, te.userData = { refPlaneZ: s }, y.add(te), Zt.push(te);
    }), lt.visible = true, w();
  }, window.__hekatanHideRefPlanes = () => {
    lt.visible = false, Zt.forEach((n) => {
      n.visible = false;
    }), w();
  };
  const Ut = new ot();
  Ut.frustumCulled = false, y.add(Ut);
  const Gt = () => {
    var _a, _b, _c, _d;
    for (; Ut.children.length; ) {
      const a = Ut.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxLines, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (a.length !== 6) continue;
      const t = new he().setFromPoints([new m(a[0], a[1], a[2]), new m(a[3], a[4], a[5])]), r = new Pn({ color: 2282478, dashSize: 0.3, gapSize: 0.15, transparent: true, opacity: 0.8 }), s = new It(t, r);
      s.computeLineDistances(), Ut.add(s);
    }
  };
  $.derive(() => {
    const n = window.__hekatanDrawingAuxLines;
    (n == null ? void 0 : n.val) && (n.val, Gt(), w());
  });
  const xt = new ot();
  xt.frustumCulled = false, y.add(xt);
  const sn = () => {
    var _a, _b, _c, _d;
    for (; xt.children.length; ) {
      const a = xt.children.pop();
      (_b = (_a = a.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = a.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const n = window.__hekatanDrawingAuxPoints, o = (n == null ? void 0 : n.rawVal) ?? (n == null ? void 0 : n.val) ?? n ?? [];
    for (const a of o) {
      if (!a || a.length !== 3) continue;
      const t = new je(new xn(0.025, 12, 12), new st({ color: 2282478, transparent: true, opacity: 0.85, depthTest: false }));
      t.position.set(a[0], a[1], a[2]), t.renderOrder = 996, t.scale.setScalar(at(t.position)), xt.add(t);
    }
  };
  $.derive(() => {
    const n = window.__hekatanDrawingAuxPoints;
    (n == null ? void 0 : n.val) !== void 0 && (n.val, sn(), w());
  }), d.addEventListener("change", () => {
    xt.children.forEach((n) => {
      n.scale.setScalar(at(n.position));
    });
  }), window.__hekatanRenderAuxPoints = sn;
  const gt = new ot(), En = new je(new xn(0.01, 12, 12), new st({ color: 16724804, transparent: true, opacity: 0.95 })), gn = new je(new xn(0.015, 12, 12), new st({ color: 16498468, transparent: true, opacity: 0.2, depthWrite: false }));
  gt.add(En, gn);
  const Qt = 0.08, vn = (n, o, a) => {
    const t = new he().setFromPoints([new m(...n), new m(...o)]);
    return new It(t, new ht({ color: a, transparent: true, opacity: 0.7 }));
  };
  gt.add(vn([-Qt, 0, 0], [Qt, 0, 0], 16711680)), gt.add(vn([0, -Qt, 0], [0, Qt, 0], 65280)), gt.add(vn([0, 0, -Qt], [0, 0, Qt], 35071)), gt.visible = false, gt.frustumCulled = false, y.add(gt);
  const An = 40, Zn = 2.5, bn = () => {
    if (!gt.visible) return;
    const o = h().position.distanceTo(gt.position), a = Math.max(0.05, Math.min(Zn, o / An));
    gt.scale.setScalar(a);
  }, Vn = () => {
    Ke.children.length !== 0 && Ke.children.forEach((n) => {
      if (!n.__isSelectionPt) return;
      const o = n;
      o.scale.setScalar(at(o.position));
    });
  };
  window.__hekatanUpdateSelectionPtScale = Vn, d.addEventListener("change", () => {
    bn(), qe.visible && pn();
    const n = window.__hekatanOsnapMarkerRef;
    if (n == null ? void 0 : n.visible) {
      const o = h().position.distanceTo(n.position);
      n.scale.setScalar(Math.max(0.05, o / An));
    }
    Vn();
  }), window.__hekatanShowSnap = (n, o, a) => {
    gt.position.set(n, o, a), gt.visible = true, bn(), w();
  }, window.__hekatanHideSnap = () => {
    gt.visible = false, w();
  }, x.addEventListener("pointermove", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(z, o);
    const a = W();
    if (a.length) {
      const t = a[0].point, r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_a = window.__hekatanOsnapCompute) == null ? void 0 : _a.call(window, t.x, t.y, t.z, r);
      if (s) co(s.type, s.x, s.y, s.z), gt.position.set(s.x, s.y, s.z), gt.visible = true, t.set(s.x, s.y, s.z);
      else {
        Un();
        const M = window.__hekatanSnapEnabled !== false, c = window.__hekatanSnap2D ?? 0.5;
        M && c > 0 && (t.x = Math.round(t.x / c) * c, t.y = Math.round(t.y / c) * c, t.z = Math.round(t.z / c) * c), gt.position.copy(t), gt.visible = true;
      }
      bn();
      const l = ((_d = (_c = (_b = window.__hekatanCadState) == null ? void 0 : _b.get) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.tool) ?? "select";
      if (l === "select" || !l) {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = De(t.x, t.y, t.z, M), f = Xe(t.x, t.y, t.z, M), P = ge(t.x, t.y, t.z, M);
        if (c >= 0) {
          const E = e.points.rawVal[c];
          qe.position.set(E[0], E[1], E[2]), qe.visible = true, pn(), ke.visible = false, bt = { kind: "pt", a: c };
        } else if (f) {
          const E = e.points.rawVal, O = e.polylines.rawVal[f.polyIdx], te = E[O[f.segIdx]], ue = E[O[f.segIdx + 1]];
          ke.geometry.setFromPoints([new m(te[0], te[1], te[2]), new m(ue[0], ue[1], ue[2])]), ke.visible = true, qe.visible = false, bt = ((_f = (_e2 = e.areas) == null ? void 0 : _e2.rawVal) == null ? void 0 : _f.includes(f.polyIdx)) ?? false ? { kind: "poly", a: f.polyIdx } : { kind: "seg", a: f.polyIdx, b: f.segIdx };
        } else if (P >= 0) {
          const O = (((_g = window.__hekatanDrawingAuxLines) == null ? void 0 : _g.rawVal) ?? [])[P];
          O && (ke.geometry.setFromPoints([new m(O[0], O[1], O[2]), new m(O[3], O[4], O[5])]), ke.visible = true, qe.visible = false, bt = { kind: "aux", a: P });
        } else ke.visible = false, qe.visible = false, bt = null;
        ae.style.left = n.clientX + "px", ae.style.top = n.clientY + "px", ae.style.display = "block";
        let R = t;
        if ((bt == null ? void 0 : bt.kind) === "pt") {
          const E = e.points.rawVal[bt.a];
          E && (R = new m(E[0], E[1], E[2]));
        }
        const B = `X=${R.x.toFixed(2)} Y=${R.y.toFixed(2)} Z=${R.z.toFixed(2)}`;
        if (bt) {
          const E = { pt: "nodo", seg: "segmento", poly: "\xE1rea", aux: "l\xEDnea aux" };
          ae.textContent = `${B}  \xB7  \u{1F5B1} Click \u2192 ${E[bt.kind]}`;
        } else ae.textContent = B;
        const D = document.getElementById("hk-coord-fixed");
        D && (D.textContent = B), N.visible = false, Ve.visible = false, w();
        return;
      }
      if (l === "delete") {
        const M = (window.__hekatanSnap2D ?? 0.5) * 1.5, c = Xe(t.x, t.y, t.z, M), f = ge(t.x, t.y, t.z, M);
        let P = false;
        if (f >= 0) if (!c) P = true;
        else {
          const E = window.__hekatanDrawingAuxLines, te = ((E == null ? void 0 : E.rawVal) ?? (E == null ? void 0 : E.val) ?? E ?? [])[f];
          xe(t.x, t.y, t.z, te[0], te[1], te[2], te[3], te[4], te[5]) < c.dist && (P = true);
        }
        P ? (Ye = f, yt = -1, ut = -1, it(f)) : c ? (yt = c.polyIdx, ut = c.segIdx, Ye = -1, ft(c.polyIdx, c.segIdx)) : (yt = -1, ut = -1, Ye = -1, _e.visible = false), N.visible = false, Ve.visible = false, T(), ae.style.left = n.clientX + "px", ae.style.top = n.clientY + "px", ae.style.display = "block";
        const R = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        let B = "";
        P ? B = `\u{1F5D1} l\xEDnea aux #${Ye + 1}` : c ? B = ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(c.polyIdx)) ?? false ? `\u{1F5D1} \xE1rea #${c.polyIdx + 1}` : `\u{1F5D1} seg ${c.segIdx + 1} / poly #${c.polyIdx + 1}` : B = "\u{1F5D1} acerc\xE1 a l\xEDnea/\xE1rea", ae.textContent = `${R}  \xB7  ${B}`;
        const D = document.getElementById("hk-coord-fixed");
        D && (D.textContent = R), w();
        return;
      } else _e.visible = false, yt = -1, Ye = -1;
      ae.style.left = n.clientX + "px", ae.style.top = n.clientY + "px", ae.style.display = "block";
      const u = ((_j = e.polylines) == null ? void 0 : _j.rawVal) ?? [], p = u[u.length - 1] ?? [], g = e.points.rawVal ?? [];
      if (p.length > 0 && g[p[p.length - 1]]) {
        const M = p[p.length - 1], c = g[M];
        let f = J;
        if (ze = null, !f && window.__hekatanAxisSnap !== false) {
          const Ee = x.getBoundingClientRect(), Qe = n.clientX, rt = n.clientY, Ct = ((_k = settings.gridSize) == null ? void 0 : _k.rawVal) ?? 10, Bt = new m(c[0], c[1], c[2]), nn = [["x", new m(1, 0, 0)], ["y", new m(0, 1, 0)], ["z", new m(0, 0, 1)]], qt = (Kt) => {
            const Lt = Kt.clone().project(o);
            return { x: (Lt.x * 0.5 + 0.5) * Ee.width + Ee.left, y: (-Lt.y * 0.5 + 0.5) * Ee.height + Ee.top };
          };
          let Ft = null;
          for (const [Kt, Lt] of nn) {
            const ve = qt(Bt.clone().addScaledVector(Lt, -Ct)), Re = qt(Bt.clone().addScaledVector(Lt, Ct)), nt = Re.x - ve.x, Ht = Re.y - ve.y, on = Qe - ve.x, wn = rt - ve.y, Sn = nt * nt + Ht * Ht || 1;
            let yn = (on * nt + wn * Ht) / Sn;
            yn = Math.max(0, Math.min(1, yn));
            const kn = Math.hypot(Qe - (ve.x + yn * nt), rt - (ve.y + yn * Ht));
            if (Ft === null || kn < Ft.dpx) {
              const Wn = _.ray, ho = Bt.clone().sub(Wn.origin), Gn = Lt.dot(Wn.direction), mo = Lt.dot(ho), No = Wn.direction.dot(ho), wo = 1 - Gn * Gn, Zo = Math.abs(wo) < 1e-6 ? -mo : (Gn * No - mo) / wo;
              Ft = { axis: Kt, dpx: kn, pt: Bt.clone().addScaledVector(Lt, Zo) };
            }
          }
          Ft && Ft.dpx <= 12 && (t.copy(Ft.pt), f = Ft.axis, ze = Ft.pt.clone());
        }
        const P = !!window.__hekatanOrthoMode;
        if (!f && P) {
          const Ee = Math.abs(t.x - c[0]), Qe = Math.abs(t.y - c[1]), rt = Math.abs(t.z - c[2]), Ct = (_l = a[0]) == null ? void 0 : _l.object;
          let Bt = null;
          Ct === Ze ? Bt = "xy" : Ct === wt ? Bt = "xz" : Ct === pt && (Bt = "yz"), Bt === "xy" ? f = Ee >= Qe ? "x" : "y" : Bt === "xz" ? f = Ee >= rt ? "x" : "z" : Bt === "yz" ? f = Qe >= rt ? "y" : "z" : f = Ee >= Qe && Ee >= rt ? "x" : Qe >= rt ? "y" : "z";
        }
        const R = window.__hekatanPolarTrack !== false;
        if (!f && R) {
          const Ee = t.x - c[0], Qe = t.y - c[1], rt = t.z - c[2], Ct = Math.hypot(Ee, Qe, rt);
          if (Ct > 1e-3) {
            const nn = Math.tan(6 * Math.PI / 180) * Ct, qt = Math.hypot(Qe, rt), Ft = Math.hypot(Ee, rt), Kt = Math.hypot(Ee, Qe), Lt = [["x", qt], ["y", Ft], ["z", Kt]];
            Lt.sort((ve, Re) => ve[1] - Re[1]), Lt[0][1] <= nn && (f = Lt[0][0]);
          }
        }
        if (f) {
          const Ee = c[0], Qe = c[1], rt = c[2];
          f === "x" ? t.set(t.x, Qe, rt) : f === "y" ? t.set(Ee, t.y, rt) : t.set(Ee, Qe, t.z);
          const Ct = !!J, nn = { x: "#ff3344", y: "#34d399", z: "#60a5fa" }[f];
          Q.style.background = "rgba(15,23,42,0.92)", Q.style.color = nn, Q.style.border = `1.5px solid ${nn}`;
          const qt = (_m = a[0]) == null ? void 0 : _m.object;
          let Ft = null;
          qt === Ze ? Ft = "xy" : qt === wt ? Ft = "xz" : qt === pt && (Ft = "yz");
          const Kt = Ft ? ` (plano ${Ft.toUpperCase()})` : "";
          Q.textContent = Ct ? `\u{1F512} LOCK ${f.toUpperCase()}${Kt}` : `\u22A5 ORTO ${f.toUpperCase()}${Kt}`, Q.style.left = n.clientX + 20 + "px", Q.style.top = n.clientY + 18 + "px", Q.style.transform = "none", Q.style.display = "block";
        } else J || (Q.style.display = "none");
        const B = Math.hypot(t.x - c[0], t.y - c[1], t.z - c[2]), D = Math.atan2(t.y - c[1], t.x - c[0]) * 180 / Math.PI, E = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        ae.textContent = `${E} | \u0394L=${B.toFixed(2)}m ${D.toFixed(0)}\xB0`;
        const O = document.getElementById("hk-coord-fixed");
        O && (O.textContent = E), N.geometry.setFromPoints([new m(c[0], c[1], c[2]), new m(t.x, t.y, t.z)]), (_n2 = N.computeLineDistances) == null ? void 0 : _n2.call(N), N.visible = true, F(c[0], c[1], c[2], t.x, t.y, t.z);
        const te = window.__hekatanOrthoExt ?? 8, ue = window.__hekatanShowOrthoPlanes !== false;
        Ne.visible = ue, ue || jt(null), ue && (U(ce, c, "xy", te), U(pe, c, "xz", te), U(Le, c, "yz", te), Xt(Ze, c, "xy", te), Xt(wt, c, "xz", te), Xt(pt, c, "yz", te));
        const Ie = ue ? _.intersectObjects([Ze, wt, pt], false) : [];
        let we = null;
        if (Ie.length > 0) {
          const Ee = Ie[0].object;
          Ee === Ze ? we = "xy" : Ee === wt ? we = "xz" : Ee === pt && (we = "yz");
        }
        jt(we), we && (Pt.style.left = n.clientX + "px", Pt.style.top = n.clientY + "px"), kt.geometry.setFromPoints([new m(c[0] - te, c[1], c[2]), new m(c[0] + te, c[1], c[2])]), (_o2 = kt.computeLineDistances) == null ? void 0 : _o2.call(kt), dt.geometry.setFromPoints([new m(c[0], c[1] - te, c[2]), new m(c[0], c[1] + te, c[2])]), (_p = dt.computeLineDistances) == null ? void 0 : _p.call(dt), I.geometry.setFromPoints([new m(c[0], c[1], c[2] - te), new m(c[0], c[1], c[2] + te)]), (_q = I.computeLineDistances) == null ? void 0 : _q.call(I), Ve.visible = true;
        const ye = kt.material, zt = dt.material, Be = I.material;
        f === "x" ? (ye.opacity = 0.95, zt.opacity = 0.1, Be.opacity = 0.1) : f === "y" ? (ye.opacity = 0.1, zt.opacity = 0.95, Be.opacity = 0.1) : f === "z" ? (ye.opacity = 0.1, zt.opacity = 0.1, Be.opacity = 0.95) : (ye.opacity = 0.5, zt.opacity = 0.5, Be.opacity = 0.5);
      } else {
        const M = `X=${t.x.toFixed(2)} Y=${t.y.toFixed(2)} Z=${t.z.toFixed(2)}`;
        ae.textContent = M;
        const c = document.getElementById("hk-coord-fixed");
        if (c && (c.textContent = M), N.visible = false, Ve.visible = false, (/* @__PURE__ */ new Set(["line", "polyline", "area", "node", "column", "wall", "rect", "circle", "arc", "polyline-multi", "axis", "chaflan"])).has(l)) {
          if (K = null, Y = null, q.style.left = n.clientX + 20 + "px", q.style.top = n.clientY - 28 + "px", q.style.display = "block", !L) {
            q.value = `${t.x.toFixed(2)},${t.y.toFixed(2)},${t.z.toFixed(2)}`;
            const P = document.activeElement;
            !(P && (P.tagName === "INPUT" || P.tagName === "TEXTAREA") && P !== q) && document.activeElement !== q && q.focus({ preventScroll: true });
            try {
              q.select();
            } catch {
            }
          }
        } else T();
      }
      w();
    } else Un(), ae.style.display = "none", gt.visible = false, N.visible = false, Ve.visible = false, T(), w();
  }), $.derive(() => {
    if (!e.gridTarget) return;
    _s(i, { position: new m(...e.gridTarget.val.position), quaternion: new Jn().setFromEuler(new zn(...e.gridTarget.val.rotation)) }, w), H.position.set(...e.gridTarget.val.position), H.quaternion.setFromEuler(new zn(...e.gridTarget.val.rotation)), H.updateMatrixWorld();
    const n = new m(0, 0, 1).applyEuler(new zn(...e.gridTarget.val.rotation));
    S = !(Math.abs(n.x) > 0.999 || Math.abs(n.y) > 0.999 || Math.abs(n.z) > 0.999);
  }), $.derive(() => {
    fe.geometry.setAttribute("position", new $t(e.points.val.flat(), 3)), fe.geometry.computeBoundingSphere();
  }), $.derive(() => {
    const n = 0.05 * k * 0.5 * v.val;
    _.params.Points.threshold = 0.4 * n;
  }), $.derive(() => {
    var _a;
    const n = e.points.val ?? [], a = (((_a = e.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], t = [];
    for (const s of a) {
      const [l, u, p] = n[s];
      t.push(l, u, p);
    }
    const r = new he();
    r.setAttribute("position", new $t(t, 3)), be.geometry.dispose(), be.geometry = r;
  });
  let un = false, en = 0;
  x.addEventListener("pointerdown", () => {
    un = true;
  }), x.addEventListener("pointerup", () => {
    un = false;
  }), x.addEventListener("pointermove", () => {
    un && en++;
  });
  const Mt = document.createElement("div");
  Mt.id = "hk-window-select", Mt.style.cssText = ["position:fixed", "pointer-events:none", "z-index:99996", "display:none", "border:1.5px solid", "background:rgba(0,0,0,0)"].join(";") + ";", document.body.appendChild(Mt);
  let Nt = null, rn = false, At = null;
  const fn = (n, o, a, t, r) => {
    r ? (Mt.style.borderColor = "#34d399", Mt.style.borderStyle = "dashed", Mt.style.background = "rgba(52, 211, 153, 0.10)") : (Mt.style.borderColor = "#22d3ee", Mt.style.borderStyle = "solid", Mt.style.background = "rgba(34, 211, 238, 0.10)"), Mt.style.left = Math.min(n, a) + "px", Mt.style.top = Math.min(o, t) + "px", Mt.style.width = Math.abs(a - n) + "px", Mt.style.height = Math.abs(t - o) + "px", Mt.style.display = "block";
  }, io = (n, o, a, t, r) => {
    var _a, _b, _c, _d;
    const s = Math.min(n, a), l = Math.max(n, a), u = Math.min(o, t), p = Math.max(o, t), g = a < n, M = x.getBoundingClientRect(), c = h();
    c.updateMatrixWorld();
    const f = (we) => {
      const ye = new m(we[0], we[1], we[2]);
      return ye.project(c), { x: M.left + (ye.x * 0.5 + 0.5) * M.width, y: M.top + (-ye.y * 0.5 + 0.5) * M.height };
    }, P = (we) => we.x >= s && we.x <= l && we.y >= u && we.y <= p, R = (we, ye) => !(we.x < s && ye.x < s || we.x > l && ye.x > l || we.y < u && ye.y < u || we.y > p && ye.y > p);
    r || Ce.clear();
    let B = 0;
    const D = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [];
    for (let we = 0; we < D.length; we++) {
      const ye = D[we];
      ye && P(f(ye)) && (Ce.add(`pt:${we}`), B++);
    }
    const E = (we, ye) => g ? P(we) || P(ye) || R(we, ye) : P(we) && P(ye), O = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], te = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [];
    for (let we = 0; we < O.length; we++) {
      const ye = O[we];
      if (te.includes(we)) {
        let Be;
        if (!g) Be = ye.every((Ee) => {
          const Qe = D[Ee];
          return !!Qe && P(f(Qe));
        });
        else {
          Be = false;
          for (let Ee = 0; Ee < ye.length - 1; Ee++) {
            const Qe = D[ye[Ee]], rt = D[ye[Ee + 1]];
            if (!(!Qe || !rt) && E(f(Qe), f(rt))) {
              Be = true;
              break;
            }
          }
        }
        Be && (Ce.add(`poly:${we}`), B++);
      } else for (let Be = 0; Be < ye.length - 1; Be++) {
        const Ee = D[ye[Be]], Qe = D[ye[Be + 1]];
        !Ee || !Qe || E(f(Ee), f(Qe)) && (Ce.add(`seg:${we}:${Be}`), B++);
      }
    }
    const Ie = ((_d = window.__hekatanDrawingAuxLines) == null ? void 0 : _d.rawVal) ?? [];
    for (let we = 0; we < Ie.length; we++) {
      const ye = Ie[we];
      if (!ye || ye.length !== 6) continue;
      const zt = f([ye[0], ye[1], ye[2]]), Be = f([ye[3], ye[4], ye[5]]);
      E(zt, Be) && (Ce.add(`aux:${we}`), B++);
    }
    Pe(), ie(`${g ? "\u{1F7E2} Crossing" : "\u{1F535} Window"} \u2014 ${B} item(s) ${r ? "agregados a" : "\u2192"} selecci\xF3n (total ${Ce.size})`), Mt.style.display = "none";
  }, Tn = () => {
    At && (At = null, Mt.style.display = "none", ie("Selecci\xF3n cancelada"));
  };
  window.__hekatanCancelClickClickRect = Tn, window.addEventListener("keydown", (n) => {
    n.key === "Escape" && At && Tn();
  });
  const lo = () => {
    var _a, _b, _c, _d;
    if (Ce.size === 0) return false;
    const n = [...Ce], o = ((_a = e.points) == null ? void 0 : _a.rawVal) ?? [], a = ((_b = e.polylines) == null ? void 0 : _b.rawVal) ?? [], t = ((_c = e.areas) == null ? void 0 : _c.rawVal) ?? [], r = window.__hekatanDrawingAuxLines, s = (r == null ? void 0 : r.rawVal) ?? [], l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set();
    for (const R of n) {
      const [B, ...D] = R.split(":");
      if (B === "pt") l.add(+D[0]);
      else if (B === "poly") u.add(+D[0]);
      else if (B === "seg") {
        const E = +D[0], O = +D[1];
        p.has(E) || p.set(E, /* @__PURE__ */ new Set()), p.get(E).add(O);
      } else B === "aux" && g.add(+D[0]);
    }
    let M = 0, c = [], f = [];
    const P = /* @__PURE__ */ new Map();
    for (let R = 0; R < a.length; R++) {
      if (u.has(R)) {
        M++;
        continue;
      }
      P.set(R, c.length);
      const B = p.get(R);
      if (B && B.size > 0) {
        let D = [];
        for (let E = 0; E < a[R].length; E++) D.push(a[R][E]), E < a[R].length - 1 && B.has(E) && (D.length >= 2 && c.push(D), D = [], M++);
        (D.length >= 2 || D.length === 1) && c.push(D);
      } else c.push([...a[R]]);
    }
    if (l.size > 0) {
      const R = [], B = /* @__PURE__ */ new Map();
      for (let E = 0; E < o.length; E++) {
        if (l.has(E)) {
          M++;
          continue;
        }
        B.set(E, R.length), R.push([...o[E]]);
      }
      const D = [];
      for (const E of c) {
        let O = [];
        for (const te of E) {
          const ue = B.get(te);
          ue === void 0 ? (O.length >= 2 && D.push(O), O = []) : O.push(ue);
        }
        O.length >= 2 && D.push(O);
      }
      c = D, e.points.val = R;
    }
    for (const R of t) {
      const B = P.get(R);
      B !== void 0 && B < c.length && f.push(B);
    }
    if (e.polylines && (e.polylines.val = c), e.areas && (e.areas.val = f), g.size > 0 && r) {
      const R = s.filter((B, D) => !g.has(D));
      "val" in r ? r.val = R : window.__hekatanDrawingAuxLines = R, M += g.size;
    }
    Ce.clear(), Pe();
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return ie(`\u{1F5D1} ${M} item(s) borrado(s)`), true;
  };
  window.__hekatanDeleteSelected = lo, window.addEventListener("keydown", (n) => {
    if (n.key !== "Delete" && n.key !== "Backspace") return;
    const o = document.activeElement, a = o && (o.id === "hk3-cmd-input" || o.id === "hk-dyn-input") && o.value === "";
    o && (o.tagName === "INPUT" || o.tagName === "TEXTAREA" || o.isContentEditable) && !a || Ce.size !== 0 && (n.preventDefault(), lo());
  });
  const Yt = document.createElement("div");
  Yt.id = "hk-properties-pane";
  const ro = "hk-props-pane-pos";
  let hn = null;
  try {
    const n = localStorage.getItem(ro);
    n && (hn = JSON.parse(n));
  } catch {
  }
  Yt.style.cssText = ["position:fixed", hn ? `left:${hn.left}px` : "left:50%", hn ? `top:${hn.top}px` : "top:8px", hn ? "transform:none" : "transform:translateX(-50%)", "width:min(320px, calc(100vw - 32px))", "max-height:60vh", "overflow-y:auto", "z-index:201", "box-shadow:0 6px 24px rgba(0,0,0,0.45)", "border-radius:6px", "display:none"].join(";") + ";", document.body.appendChild(Yt);
  const Ro = () => {
    const n = Yt.querySelector(".tp-rotv_b");
    if (!n || n.__hkDragWired) return;
    n.__hkDragWired = true, n.style.cursor = "move", n.style.userSelect = "none";
    let o = false, a = 0, t = 0, r = 0, s = 0;
    n.addEventListener("mousedown", (l) => {
      o = true, a = l.clientX, t = l.clientY;
      const u = Yt.getBoundingClientRect();
      r = u.left, s = u.top, Yt.style.transform = "none", Yt.style.left = `${r}px`, Yt.style.top = `${s}px`, l.preventDefault();
    }), window.addEventListener("mousemove", (l) => {
      if (!o) return;
      const u = l.clientX - a, p = l.clientY - t, g = Math.max(0, Math.min(window.innerWidth - 80, r + u)), M = Math.max(0, Math.min(window.innerHeight - 40, s + p));
      Yt.style.left = `${g}px`, Yt.style.top = `${M}px`;
    }), window.addEventListener("mouseup", () => {
      if (o) {
        o = false;
        try {
          localStorage.setItem(ro, JSON.stringify({ left: parseFloat(Yt.style.left), top: parseFloat(Yt.style.top) }));
        } catch {
        }
      }
    });
  }, X = { Ux: false, Uy: false, Uz: false, Rx: false, Ry: false, Rz: false, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, Kx: 0, Ky: 0, Kz: 0, Krx: 0, Kry: 0, Krz: 0, mass: 0, diaphragm: "Ninguno", section: "W14x84", material_frame: "A572 Gr 50", A_mod: 1, Iz_mod: 1, Iy_mod: 1, J_mod: 1, insertionPoint: "10 \u2014 Centroid", beta: 0, relMxI: false, relMyI: false, relMzI: false, relMxJ: false, relMyJ: false, relMzJ: false, hinges: "None", LKx: 0, LKy: 0, LKz: 0, qx: 0, qy: 0, qz: 0, massPerM: 0, shellType: "Mindlin (FSDT)", thickness: 0.2, material_shell: "Concreto C25", surfLoad: 0 }, Vt = { dx: 0, dy: 0, dz: 3, copias: 1 };
  let tt = null;
  const _t = (n, o, a, t) => {
    window.dispatchEvent(new CustomEvent("hk:property-applied", { detail: { kind: n, ids: o, prop: a, value: t } }));
  }, Bo = () => {
    if (tt && (tt.dispose(), tt = null), Ce.size === 0) {
      Yt.style.display = "none";
      return;
    }
    const n = [...Ce], o = n.filter((c) => c.startsWith("pt:")), a = n.filter((c) => c.startsWith("seg:")), t = n.filter((c) => c.startsWith("poly:")), r = n.filter((c) => c.startsWith("aux:")), s = o.length > 0, l = a.length > 0, u = t.length > 0, p = !s && !l && !u, g = [];
    o.length && g.push(`\u{1F535} ${o.length} nodo(s)`), a.length && g.push(`\u{1F4CF} ${a.length} segmento(s)`), t.length && g.push(`\u25AD ${t.length} \xE1rea(s)`), r.length && g.push(`\u250A ${r.length} aux`);
    const M = `\u{1F3AF} ${Ce.size} item(s) \u2014 ${g.join(", ")}`;
    tt = new Ao({ container: Yt, title: M });
    {
      const c = tt.addFolder({ title: "\u270F\uFE0F Editar \u2014 Replicar / Mover", expanded: false });
      c.addBinding(Vt, "dx", { label: "\u0394x (m)", step: 0.1 }), c.addBinding(Vt, "dy", { label: "\u0394y (m)", step: 0.1 }), c.addBinding(Vt, "dz", { label: "\u0394z (m)", step: 0.1 }), c.addBinding(Vt, "copias", { label: "Copias", min: 1, max: 50, step: 1 }), c.addButton({ title: "\u29C9 Replicar selecci\xF3n" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, Vt.dx, Vt.dy, Vt.dz, Vt.copias);
        ie(P ? `\u29C9 Replicado \xD7${P} (\u0394 ${Vt.dx},${Vt.dy},${Vt.dz} m)` : "\u26A0 Nada que replicar \u2014 seleccion\xE1 nodos/frames/\xE1reas");
      }), c.addButton({ title: "\u2192 Mover selecci\xF3n (1 copia, sin duplicar geometr\xEDa base)" }).on("click", () => {
        var _a;
        const P = (_a = window.__hekatanReplicateSelection) == null ? void 0 : _a.call(window, Vt.dx, Vt.dy, Vt.dz, 1);
        ie(P ? `\u2192 Copia desplazada \u0394 ${Vt.dx},${Vt.dy},${Vt.dz} m` : "\u26A0 Nada seleccionado");
      });
      const f = c.addFolder({ title: "\u{1F9F2} Snap", expanded: false });
      f.addButton({ title: "Snap a grilla ON/OFF (F9)" }).on("click", () => {
        var _a;
        return (_a = window.__hekatanToggleSnap) == null ? void 0 : _a.call(window);
      }), f.addButton({ title: "OSNAP (endpoints/medios) ON/OFF" }).on("click", () => {
        window.__hekatanOsnapOn = !(window.__hekatanOsnapOn ?? true), ie(`\u{1F9F2} OSNAP ${window.__hekatanOsnapOn ? "ON" : "OFF"}`);
      });
    }
    if (s) {
      const c = tt.addFolder({ title: `\u{1F4CC} Restraints (DOFs) \u2014 ${o.length} nodo(s)` });
      c.addBinding(X, "Ux"), c.addBinding(X, "Uy"), c.addBinding(X, "Uz"), c.addBinding(X, "Rx"), c.addBinding(X, "Ry"), c.addBinding(X, "Rz");
      const f = tt.addFolder({ title: "\u{1F300} Springs (kN/m, kN\xB7m/rad)", expanded: false });
      f.addBinding(X, "Kx", { label: "Kx", min: 0, step: 100 }), f.addBinding(X, "Ky", { label: "Ky", min: 0, step: 100 }), f.addBinding(X, "Kz", { label: "Kz", min: 0, step: 100 }), f.addBinding(X, "Krx", { label: "Krx", min: 0, step: 1e3 }), f.addBinding(X, "Kry", { label: "Kry", min: 0, step: 1e3 }), f.addBinding(X, "Krz", { label: "Krz", min: 0, step: 1e3 });
      const P = tt.addFolder({ title: "\u2B07 Joint Loads (kN, kN\xB7m)" });
      P.addBinding(X, "Fx", { step: 0.1 }), P.addBinding(X, "Fy", { step: 0.1 }), P.addBinding(X, "Fz", { step: 0.1 }), P.addBinding(X, "Mx", { step: 0.1 }), P.addBinding(X, "My", { step: 0.1 }), P.addBinding(X, "Mz", { step: 0.1 }), tt.addFolder({ title: "\u2696 Additional Mass (kg)", expanded: false }).addBinding(X, "mass", { label: "m", min: 0, step: 1 }), tt.addFolder({ title: "\u{1F517} Diaphragm (rigid link)", expanded: false }).addBinding(X, "diaphragm", { label: "Diafragma", options: { Ninguno: "Ninguno", "D1 (rigid)": "D1 (rigid)", "D2 (rigid)": "D2 (rigid)", "D3 (rigid)": "D3 (rigid)" } }), tt.addButton({ title: `\u2713 Aplicar a ${o.length} nodo(s) seleccionado(s)` }).on("click", () => {
        let D = 0;
        const E = [X.Ux, X.Uy, X.Uz, X.Rx, X.Ry, X.Rz];
        E.some((ue) => ue) && (_t("nodes", o, "supports", E), D++);
        const O = [X.Fx, X.Fy, X.Fz, X.Mx, X.My, X.Mz];
        O.some((ue) => ue !== 0) && (_t("nodes", o, "loads", O), D++);
        const te = [X.Kx, X.Ky, X.Kz, X.Krx, X.Kry, X.Krz];
        if (te.some((ue) => ue !== 0) && (_t("nodes", o, "springs", te), D++), X.mass !== 0 && (_t("nodes", o, "mass", X.mass), D++), X.diaphragm !== "Ninguno" && (_t("nodes", o, "diaphragm", X.diaphragm), D++), D === 0) {
          ie("\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para apoyo, o un valor de carga/resorte/masa, y volv\xE9 a aplicar.");
          let ue = document.getElementById("hk-prop-toast");
          ue || (ue = document.createElement("div"), ue.id = "hk-prop-toast", ue.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);z-index:99999;padding:9px 20px;border-radius:8px;font:600 14px system-ui;color:#fff;pointer-events:none;transition:opacity .25s;box-shadow:0 4px 16px rgba(0,0,0,.4)", document.body.appendChild(ue)), ue.textContent = "\u26A0 Nada que aplicar \u2014 marc\xE1 un DOF (Ux\u2026Rz) para empotrado/articulado, despu\xE9s Aplicar", ue.style.background = "rgba(217,119,6,0.97)", ue.style.opacity = "1", clearTimeout(window.__hekatanPropToastT), window.__hekatanPropToastT = setTimeout(() => {
            ue && (ue.style.opacity = "0");
          }, 3200);
        } else ie(`\u2713 Propiedades aplicadas a ${o.length} nodo(s)`);
      });
    }
    if (l) {
      const c = tt.addFolder({ title: `\u{1F4CF} Secci\xF3n frame \u2014 ${a.length} seg(s)` });
      c.addBinding(X, "section", { label: "Secci\xF3n", options: { W14x84: "W14x84", W18x86: "W18x86", W24x146: "W24x146", HEB300: "HEB300", IPN300: "IPN300", IPE400: "IPE400", "Custom...": "Custom..." } }), c.addBinding(X, "material_frame", { label: "Material", options: { "A572 Gr 50": "A572 Gr 50", A36: "A36", A992: "A992", "Concreto C25": "Concreto C25" } });
      const f = tt.addFolder({ title: "\u{1F527} Property Modifiers", expanded: false });
      f.addBinding(X, "A_mod", { label: "A mod", min: 0, max: 10, step: 0.1 }), f.addBinding(X, "Iz_mod", { label: "Iz mod (fuerte)", min: 0, max: 10, step: 0.1 }), f.addBinding(X, "Iy_mod", { label: "Iy mod (d\xE9bil)", min: 0, max: 10, step: 0.1 }), f.addBinding(X, "J_mod", { label: "J mod", min: 0, max: 10, step: 0.1 }), tt.addFolder({ title: "\u{1F3AF} Insertion Point", expanded: false }).addBinding(X, "insertionPoint", { label: "Cardinal", options: { "1 \u2014 Bottom Left": "1 \u2014 Bottom Left", "2 \u2014 Bottom Center": "2 \u2014 Bottom Center", "3 \u2014 Bottom Right": "3 \u2014 Bottom Right", "4 \u2014 Middle Left": "4 \u2014 Middle Left", "5 \u2014 Middle Center": "5 \u2014 Middle Center", "6 \u2014 Middle Right": "6 \u2014 Middle Right", "7 \u2014 Top Left": "7 \u2014 Top Left", "8 \u2014 Top Center": "8 \u2014 Top Center", "9 \u2014 Top Right": "9 \u2014 Top Right", "10 \u2014 Centroid": "10 \u2014 Centroid", "11 \u2014 Shear Center": "11 \u2014 Shear Center" } }), tt.addFolder({ title: "\u{1F9ED} Local Axes", expanded: false }).addBinding(X, "beta", { label: "\u03B2 (\xB0)", min: -180, max: 180, step: 5 });
      const B = tt.addFolder({ title: "\u{1F513} Releases extremo I", expanded: false });
      B.addBinding(X, "relMxI", { label: "Mx I" }), B.addBinding(X, "relMyI", { label: "My I" }), B.addBinding(X, "relMzI", { label: "Mz I" });
      const D = tt.addFolder({ title: "\u{1F513} Releases extremo J", expanded: false });
      D.addBinding(X, "relMxJ", { label: "Mx J" }), D.addBinding(X, "relMyJ", { label: "My J" }), D.addBinding(X, "relMzJ", { label: "Mz J" }), tt.addFolder({ title: "\u{1FA79} Hinges (plastic)", expanded: false }).addBinding(X, "hinges", { label: "Tipo", options: { None: "None", "Auto-FEMA M3": "Auto-FEMA M3", "Auto-FEMA P-M2-M3": "Auto-FEMA P-M2-M3", "Auto-Concrete M3": "Auto-Concrete M3", "Auto-Steel M3": "Auto-Steel M3", "Custom...": "Custom..." } });
      const O = tt.addFolder({ title: "\u{1F300} Line Springs (kN/m por m)", expanded: false });
      O.addBinding(X, "LKx", { label: "LKx", min: 0, step: 100 }), O.addBinding(X, "LKy", { label: "LKy", min: 0, step: 100 }), O.addBinding(X, "LKz", { label: "LKz", min: 0, step: 100 });
      const te = tt.addFolder({ title: "\u2B07 Frame Loads (kN/m)" });
      te.addBinding(X, "qx", { step: 0.1 }), te.addBinding(X, "qy", { step: 0.1 }), te.addBinding(X, "qz", { step: 0.1 }), tt.addFolder({ title: "\u2696 Additional Mass (kg/m)", expanded: false }).addBinding(X, "massPerM", { label: "m/L", min: 0, step: 1 }), tt.addButton({ title: "\u2713 Aplicar a segmentos seleccionados" }).on("click", () => {
        _t("segs", a, "section", X.section), _t("segs", a, "material", X.material_frame);
        const Ie = { A: X.A_mod, Iz: X.Iz_mod, Iy: X.Iy_mod, J: X.J_mod };
        (Ie.A !== 1 || Ie.Iz !== 1 || Ie.Iy !== 1 || Ie.J !== 1) && _t("segs", a, "modifiers", Ie), X.insertionPoint !== "10 \u2014 Centroid" && _t("segs", a, "insertionPoint", X.insertionPoint), X.beta !== 0 && _t("segs", a, "beta", X.beta);
        const we = [X.relMxI, X.relMyI, X.relMzI], ye = [X.relMxJ, X.relMyJ, X.relMzJ];
        (we.some((Ee) => Ee) || ye.some((Ee) => Ee)) && _t("segs", a, "releases", { i: we, j: ye }), X.hinges !== "None" && _t("segs", a, "hinges", X.hinges);
        const zt = [X.LKx, X.LKy, X.LKz];
        zt.some((Ee) => Ee !== 0) && _t("segs", a, "lineSprings", zt);
        const Be = [X.qx, X.qy, X.qz];
        Be.some((Ee) => Ee !== 0) && _t("segs", a, "distLoad", Be), X.massPerM !== 0 && _t("segs", a, "massPerM", X.massPerM), ie(`\u2713 Propiedades aplicadas a ${a.length} segmento(s)`);
      });
    }
    if (u) {
      const c = tt.addFolder({ title: `\u25AD Shell / \xC1rea \u2014 ${t.length}` });
      c.addBinding(X, "shellType", { label: "Tipo", options: { "Mindlin (FSDT)": "Mindlin (FSDT)", "Kirchhoff (CPT)": "Kirchhoff (CPT)", "Plane stress": "Plane stress" } }), c.addBinding(X, "thickness", { label: "Espesor (m)", min: 0.01, step: 0.01 }), c.addBinding(X, "material_shell", { label: "Material", options: { "Concreto C20": "Concreto C20", "Concreto C25": "Concreto C25", "Concreto C30": "Concreto C30", "Acero A36": "Acero A36" } }), tt.addFolder({ title: "\u2B07 Carga superficial (kN/m\xB2)" }).addBinding(X, "surfLoad", { label: "q", step: 0.1 }), tt.addButton({ title: "\u2713 Aplicar a \xE1reas seleccionadas" }).on("click", () => {
        _t("areas", t, "shellType", X.shellType), _t("areas", t, "thickness", X.thickness), _t("areas", t, "material", X.material_shell), X.surfLoad !== 0 && _t("areas", t, "surfLoad", X.surfLoad), ie(`\u2713 Propiedades aplicadas a ${t.length} \xE1rea(s)/shell(s)`);
      });
    }
    if (p) {
      const c = tt.addFolder({ title: "\u2139 Selecci\xF3n" }), f = { msg: "Seleccion\xE1 nodos, frames o \xE1reas para editar" };
      c.addBinding(f, "msg", { readonly: true, label: "" });
    }
    tt.addButton({ title: "\u2715 Cerrar (limpia selecci\xF3n)" }).on("click", () => {
      Ce.clear(), Pe();
    }), Yt.style.display = "block", Ro();
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
        if (At ? Tn() : window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })), Ce.size > 0 && (Ce.clear(), Pe()), e.polylines) {
          const s = e.polylines.rawVal;
          (s[s.length - 1] ?? []).length > 0 && (e.polylines.val = [...s, []]);
        }
        const t = window.__hekatanCadState, r = (_b = (_a = t == null ? void 0 : t.get) == null ? void 0 : _a.call(t)) == null ? void 0 : _b.tool;
        r && r !== "select" && r !== "none" ? ((_c = t == null ? void 0 : t.setTool) == null ? void 0 : _c.call(t, "select"), ie(`\u238B Cancelado \u2014 tool '${r}' cerrado, volv\xE9s a Seleccionar`)) : ie("\u238B Cancelado (click derecho)");
      }
    }
  }), x.addEventListener("contextmenu", (n) => {
    n.preventDefault(), n.stopPropagation();
  }, { capture: true }), x.addEventListener("pointerdown", (n) => {
    var _a, _b, _c;
    const o = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) ?? "select";
    o !== "select" && o !== "none" && o || n.button === 0 && window.__hekatanRectSelectExplicit && n.pointerType !== "touch" && (Nt = { x: n.clientX, y: n.clientY }, rn = false);
  }), x.addEventListener("pointermove", (n) => {
    if (At && n.buttons === 0) {
      const s = n.clientX < At.x;
      fn(At.x, At.y, n.clientX, n.clientY, s);
      return;
    }
    if (!Nt) return;
    const o = n.clientX - Nt.x, a = n.clientY - Nt.y, t = Math.hypot(o, a);
    if (!rn && t < 8) return;
    rn = true;
    const r = n.clientX < Nt.x;
    fn(Nt.x, Nt.y, n.clientX, n.clientY, r);
  }), x.addEventListener("pointerup", (n) => {
    if (!Nt) return;
    if (!rn) {
      Nt = null;
      return;
    }
    const o = n.ctrlKey || n.metaKey || n.shiftKey;
    io(Nt.x, Nt.y, n.clientX, n.clientY, o), Nt = null, rn = false;
  }), window.__hekatanOsnap = window.__hekatanOsnap ?? { end: true, mid: true, node: true, cen: true, per: false, nea: false, int: false };
  const tn = new ot();
  tn.visible = false, tn.frustumCulled = false, y.add(tn);
  const Xo = { end: 16724804, mid: 16498468, node: 6333946, cen: 3462041, per: 12616956, nea: 16744118, int: 16746496 }, co = (n, o, a, t) => {
    var _a, _b, _c, _d;
    for (; tn.children.length; ) {
      const u = tn.children.pop();
      (_b = (_a = u.geometry) == null ? void 0 : _a.dispose) == null ? void 0 : _b.call(_a), (_d = (_c = u.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }
    const r = Xo[n] ?? 16777215, s = 0.05, l = new he().setFromPoints([new m(o - s, a - s, t), new m(o + s, a - s, t), new m(o + s, a - s, t), new m(o + s, a + s, t), new m(o + s, a + s, t), new m(o - s, a + s, t), new m(o - s, a + s, t), new m(o - s, a - s, t)]);
    tn.add(new Ot(l, new ht({ color: r, linewidth: 2 }))), tn.position.set(0, 0, 0), tn.visible = true;
  }, Un = () => {
    tn.visible = false;
  }, Yo = (n, o, a, t) => {
    var _a;
    const r = window.__hekatanOsnap, s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [];
    let u = null;
    const p = (c, f, P, R) => {
      const B = Math.hypot(f - n, P - o, R - a);
      B > t || (!u || B < u.d) && (u = { type: c, x: f, y: P, z: R, d: B });
    };
    (r.node || r.end) && s.forEach((c) => {
      r.node && p("node", c[0], c[1], c[2]);
    });
    for (const c of l) if (!(c.length < 2)) for (let f = 0; f < c.length - 1; f++) {
      const P = s[c[f]], R = s[c[f + 1]];
      if (!(!P || !R) && (r.end && (p("end", P[0], P[1], P[2]), p("end", R[0], R[1], R[2])), r.mid && p("mid", (P[0] + R[0]) / 2, (P[1] + R[1]) / 2, (P[2] + R[2]) / 2), r.nea || r.per)) {
        const B = R[0] - P[0], D = R[1] - P[1], E = R[2] - P[2], O = B * B + D * D + E * E;
        if (O < 1e-12) continue;
        const te = Math.max(0, Math.min(1, ((n - P[0]) * B + (o - P[1]) * D + (a - P[2]) * E) / O)), ue = P[0] + te * B, Ie = P[1] + te * D, we = P[2] + te * E;
        r.nea && p("nea", ue, Ie, we), r.per && p("per", ue, Ie, we);
      }
    }
    const g = window.__hekatanDrawingAuxLines, M = (g == null ? void 0 : g.rawVal) ?? (g == null ? void 0 : g.val) ?? g ?? [];
    for (const c of M) {
      if (c.length !== 6) continue;
      const f = [c[0], c[1], c[2]], P = [c[3], c[4], c[5]];
      if (r.end && (p("end", f[0], f[1], f[2]), p("end", P[0], P[1], P[2])), r.mid && p("mid", (f[0] + P[0]) / 2, (f[1] + P[1]) / 2, (f[2] + P[2]) / 2), r.nea || r.per) {
        const R = P[0] - f[0], B = P[1] - f[1], D = P[2] - f[2], E = R * R + B * B + D * D;
        if (E < 1e-12) continue;
        const O = Math.max(0, Math.min(1, ((n - f[0]) * R + (o - f[1]) * B + (a - f[2]) * D) / E)), te = f[0] + O * R, ue = f[1] + O * B, Ie = f[2] + O * D;
        r.nea && p("nea", te, ue, Ie), r.per && p("per", te, ue, Ie);
      }
    }
    return u ? { type: u.type, x: u.x, y: u.y, z: u.z } : null;
  };
  window.__hekatanOsnapCompute = Yo, window.__hekatanOsnapShow = co, window.__hekatanOsnapHide = Un;
  let Ae = [], Tt = 0;
  const Mn = document.createElement("div");
  Mn.id = "hk-cad-status", Mn.style.cssText = ["position:fixed", "bottom:8px", "left:50%", "transform:translateX(-50%)", "padding:6px 14px", "background:rgba(15, 23, 42, 0.92)", "color:#22d3ee", "border:1px solid rgba(34, 211, 238, 0.5)", "border-radius:6px", "font-family:Consolas, monospace", "font-size:12px", "z-index:90", "pointer-events:none", "box-shadow:0 0 8px rgba(34, 211, 238, 0.25)", "max-width:90vw", "white-space:nowrap", "overflow:hidden", "text-overflow:ellipsis"].join(";") + ";", Mn.textContent = "\u{1F6E0} CAD listo \u2014 seleccion\xE1 un tool. Inputs: 5 (DDE) \xB7 5,3,2 (abs) \xB7 @5,3,2 (rel) \xB7 @5<45 (polar) \xB7 @5<45<30 (esf\xE9rico) + Enter", document.body.appendChild(Mn);
  const Do = () => {
    var _a, _b, _c;
    const n = [];
    window.__hekatanOrthoMode && n.push("\u22A5 ORTO ON (F8)"), J && n.push(`\u{1F512} LOCK ${J.toUpperCase()}`);
    const a = ((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.workZ) ?? 0;
    return Math.abs(a) > 1e-3 && n.push(`Cota Z=${a}m`), window.__hekatanShowOrthoPlanes !== false && n.push("\u25A6 Planos XY/XZ/YZ"), n.length > 0 ? `   |   ${n.join("  \xB7  ")}` : "";
  }, ie = (n) => {
    const o = n + Do();
    Mn.textContent = o, window.__hekatanCadStatusText = o;
  };
  window.__hekatanRefreshStatus = () => {
    const n = window.__hekatanCadStatusText ?? "", o = n.split("   |   ")[0] ?? n;
    ie(o);
  }, window.__hekatanCadResetPending = () => {
    Ae = [], re = [], ee.visible = false, w(), ie("\u{1F6E0} Tool cambiado \u2014 clicks pendientes limpiados");
  };
  const _n = [], an = () => {
    var _a, _b;
    _n.push({ p: JSON.parse(JSON.stringify(e.points.rawVal ?? [])), l: JSON.parse(JSON.stringify(((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [])), a: JSON.parse(JSON.stringify(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? [])) }), _n.length > 100 && _n.shift();
  }, po = () => {
    var _a;
    const n = _n.pop();
    if (!n) {
      ie("\u21B6 Nada para deshacer");
      return;
    }
    e.points.val = n.p, e.polylines && (e.polylines.val = n.l), e.areas && (e.areas.val = n.a), Ae = [], N.visible = false, Ve.visible = false, T(), ie(`\u21B6 Undo \u2014 ${_n.length} estados restantes`);
    try {
      (_a = window.__hekatanRebuild) == null ? void 0 : _a.call(window);
    } catch {
    }
    w();
  };
  window.__hekatanPushUndo = an, window.__hekatanUndo = po, document.addEventListener("keydown", (n) => {
    var _a;
    if ((n.ctrlKey || n.metaKey) && n.key.toLowerCase() === "z" && !n.shiftKey) {
      const o = n.target, a = o == null ? void 0 : o.tagName;
      if ((a === "INPUT" || a === "TEXTAREA") && o.type !== "checkbox" && o.type !== "range" && ((_a = o.value) == null ? void 0 : _a.length) > 0) return;
      n.preventDefault(), n.stopPropagation(), po();
    }
  }, { capture: true });
  const uo = () => {
    if (Ae = [], e.polylines) {
      const n = e.polylines.rawVal, o = n[n.length - 1];
      o && o.length > 0 && (e.polylines.val = [...n, []]);
    }
    J = null, We(), N.visible = false, Ve.visible = false, T(), ie("\u23F9 Dibujo finalizado \u2014 click para empezar otra serie"), w();
  };
  window.__hekatanFinalizeDraw = uo;
  const fo = () => {
    Ae = [], re = [], ee.visible = false;
    let n = false;
    Ce.size && (Ce.clear(), Pe(), n = true), uo(), ie(n ? "\u238B Selecci\xF3n cancelada" : "\u238B Acci\xF3n cancelada"), w();
  };
  window.__hekatanEscapeCancel = fo, window.__hekatanReplicateSelection = (n, o, a, t) => {
    var _a, _b, _c, _d;
    t = Math.max(1, Math.round(t || 1));
    const r = [...Ce], s = e.points.rawVal, l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], u = new Set(((_b = e.areas) == null ? void 0 : _b.rawVal) ?? []), p = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), M = [];
    if (r.forEach((B) => {
      if (B.startsWith("pt:")) p.add(+B.slice(3));
      else if (B.startsWith("poly:")) {
        const D = +B.slice(5);
        g.add(D), (l[D] || []).forEach((E) => p.add(E));
      } else if (B.startsWith("seg:")) {
        const D = B.split(":"), E = +D[1], O = +D[2], te = l[E] || [], ue = te[O], Ie = te[O + 1];
        ue != null && Ie != null && (M.push([ue, Ie]), p.add(ue), p.add(Ie));
      }
    }), !p.size) return 0;
    an();
    const c = [...s];
    let f = l.slice();
    f.length && f[f.length - 1].length === 0 && (f = f.slice(0, -1));
    const P = [...((_c = e.areas) == null ? void 0 : _c.rawVal) ?? []], R = [...p];
    for (let B = 1; B <= t; B++) {
      const D = n * B, E = o * B, O = a * B, te = /* @__PURE__ */ new Map();
      R.forEach((ue) => {
        te.set(ue, c.length), c.push([s[ue][0] + D, s[ue][1] + E, s[ue][2] + O]);
      }), g.forEach((ue) => {
        const Ie = l[ue].map((ye) => te.has(ye) ? te.get(ye) : ye), we = f.length;
        f.push(Ie), u.has(ue) && P.push(we);
      }), M.forEach(([ue, Ie]) => {
        f.push([te.get(ue), te.get(Ie)]);
      });
    }
    f.push([]), e.points.val = c, e.polylines && (e.polylines.val = f), e.areas && (e.areas.val = P);
    try {
      (_d = window.__hekatanRebuild) == null ? void 0 : _d.call(window);
    } catch {
    }
    return w(), t;
  }, x.addEventListener("click", (n) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o2, _p, _q, _r, _s2, _t2, _u, _v, _w, _x, _y, _z;
    if (en > 5) {
      en = 0;
      return;
    }
    en = 0;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(z, o);
    const a = W();
    if (!a.length) return;
    {
      const s = o.position.distanceTo(d.target) || 1, l = a[0].distance ?? o.position.distanceTo(a[0].point), u = a[0].point;
      if (!isFinite(u.x) || !isFinite(u.y) || !isFinite(u.z) || l > Math.max(s * 12, 300)) {
        ie("\u26A0 Click rasante descartado \u2014 cay\xF3 demasiado lejos. Acerc\xE1 la vista o clicke\xE1 sobre la grilla.");
        return;
      }
    }
    let t = a[0].point;
    (n.ctrlKey || n.metaKey) && (t = new m(Math.round(a[0].point.x), Math.round(a[0].point.y), Math.round(a[0].point.z)));
    {
      const s = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], l = s[s.length - 1] ?? [], u = e.points.rawVal ?? [];
      if (l.length > 0) {
        const p = u[l[l.length - 1]];
        if (p) {
          const g = !!window.__hekatanOrthoMode;
          let M = J;
          if (!M && g) {
            const c = Math.abs(t.x - p[0]), f = Math.abs(t.y - p[1]), P = Math.abs(t.z - p[2]);
            M = c >= f && c >= P ? "x" : f >= P ? "y" : "z";
          }
          M === "x" ? t = new m(t.x, p[1], p[2]) : M === "y" ? t = new m(p[0], t.y, p[2]) : M === "z" && (t = new m(p[0], p[1], t.z));
        }
      }
    }
    if (ze) t = ze.clone(), ie(`\u{1F4D0} Eje \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.2, l = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, s);
      if (l) t = new m(l.x, l.y, l.z), ie(`\u{1F3AF} Snap [${l.type.toUpperCase()}] \u2192 (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      else {
        const u = window.__hekatanSnapEnabled !== false, p = window.__hekatanSnap2D ?? 0;
        u && p > 0 && (t = new m(Math.round(t.x / p) * p, Math.round(t.y / p) * p, Math.round(t.z / p) * p));
      }
    }
    const r = ((_e2 = (_d = (_c = window.__hekatanCadState) == null ? void 0 : _c.get) == null ? void 0 : _d.call(_c)) == null ? void 0 : _e2.tool) ?? "select";
    if (r === "select" || r === "none" || !r) {
      if (bt) {
        At && Tn();
        const { kind: s, a: l, b: u } = bt, p = u !== void 0 ? `${s}:${l}:${u}` : `${s}:${l}`;
        n.ctrlKey || n.metaKey || n.shiftKey || Ce.clear(), Ce.has(p) ? Ce.delete(p) : Ce.add(p), Pe(), ie(`\u2713 Seleccionados ${Ce.size} elemento(s) \u2014 Ctrl+Click para multi-selecci\xF3n`);
      } else {
        const s = n.ctrlKey || n.metaKey || n.shiftKey, l = n.clientX, u = n.clientY;
        At ? (io(At.x, At.y, l, u, s), At = null) : s || (At = { x: l, y: u }, ie("\u{1F5B1} Click 2 para cerrar el rect\xE1ngulo (\u2192 derecha=Window azul, \u2190izquierda=Crossing verde). Esc=cancelar."), fn(l, u, l + 1, u + 1, false));
      }
      return;
    }
    if (r === "axis") {
      const s = window.__hekatanAxisDraw;
      if (!s) return;
      if (!s.pendingStart) {
        s.pendingStart = [t.x, t.y, t.z], ie(`\u{1F4CD} Eje \u2014 click 1 OK en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}). Click 2=fin.`);
        return;
      }
      const l = s.mode === "number", u = (_f = window.__hekatanAxisCommit) == null ? void 0 : _f.call(window, s.pendingStart, [t.x, t.y, t.z], l);
      ie(`\u2713 Eje "${u}" creado. Click 1=nuevo eje, o cambia tool.`);
      return;
    }
    if (r === "delete") {
      if (Ye >= 0) {
        const s = window.__hekatanDrawingAuxLines, l = (s == null ? void 0 : s.rawVal) ?? (s == null ? void 0 : s.val) ?? s ?? [], u = Ye;
        if (u >= 0 && u < l.length) {
          an();
          const p = l.slice(0, u).concat(l.slice(u + 1));
          s && typeof s == "object" && "val" in s ? s.val = p : window.__hekatanDrawingAuxLines = p, ie(`\u{1F5D1} L\xEDnea auxiliar #${u + 1} borrada`), Ye = -1, _e.visible = false;
          try {
            (_g = window.__hekatanRebuild) == null ? void 0 : _g.call(window);
          } catch {
          }
        }
      } else if (yt >= 0) {
        const s = yt, l = ut;
        ((_i = (_h = e.areas) == null ? void 0 : _h.rawVal) == null ? void 0 : _i.includes(s)) ?? false ? (Rt(s), ie(`\u{1F5D1} \xC1rea #${s + 1} (shell Q4) borrada`)) : l >= 0 ? (He(s, l), ie(`\u{1F5D1} Segmento ${l + 1} de polil\xEDnea #${s + 1} borrado`)) : (Rt(s), ie(`\u{1F5D1} Polil\xEDnea #${s + 1} borrada`));
      } else ie("\u{1F5D1} Acerc\xE1 el cursor a una l\xEDnea/\xE1rea/aux para borrarla");
      return;
    }
    if (r === "circle") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u25CB C\xEDrculo \u2014 click 1/2 OK (centro). Ahora marc\xE1 el radio.");
        return;
      }
      const [s, l] = Ae, u = Math.hypot(l[0] - s[0], l[1] - s[1], l[2] - s[2]);
      Math.abs(l[0] - s[0]);
      const p = Math.abs(l[1] - s[1]), M = Math.abs(l[2] - s[2]) < 1e-3 ? "xy" : p < 1e-3 ? "xz" : "yz", c = window.__hekatanArcSegs ?? 12;
      (_j = window.__hekatanDrawCircle) == null ? void 0 : _j.call(window, s[0], s[1], s[2], u, c, M), ie(`\u2713 C\xEDrculo dibujado en ${M.toUpperCase()} \u2014 r=${u.toFixed(2)}m, ${c} segmentos`), Ae = [];
      try {
        (_k = window.__hekatanRebuild) == null ? void 0 : _k.call(window);
      } catch {
      }
      return;
    }
    if (r === "arc") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u2312 Arco \u2014 click 1/3 OK (inicio). Marc\xE1 el punto medio.");
        return;
      }
      if (Ae.length === 2) {
        ie("\u2312 Arco \u2014 click 2/3 OK (medio). Marc\xE1 el final.");
        return;
      }
      const [s, l, u] = Ae, p = window.__hekatanArcSegs ?? 12;
      (_l = window.__hekatanDrawArc) == null ? void 0 : _l.call(window, s, l, u, p), ie(`\u2713 Arco dibujado \u2014 ${p} segmentos`), Ae = [];
      try {
        (_m = window.__hekatanRebuild) == null ? void 0 : _m.call(window);
      } catch {
      }
      return;
    }
    if (r === "rect") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u25AD Rect\xE1ngulo \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae;
      (_n2 = window.__hekatanDrawRect) == null ? void 0 : _n2.call(window, s, l), ie(`\u2713 Rect\xE1ngulo dibujado \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ae = [];
      try {
        (_o2 = window.__hekatanRebuild) == null ? void 0 : _o2.call(window);
      } catch {
      }
      return;
    }
    if (r === "rectarea") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u25AD \xC1rea rectangular \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae;
      (_p = window.__hekatanDrawRectArea) == null ? void 0 : _p.call(window, s, l), ie(`\u2713 \xC1rea rectangular (shell Q4) creada \u2014 (${s[0].toFixed(1)},${s[1].toFixed(1)}) \u2192 (${l[0].toFixed(1)},${l[1].toFixed(1)})`), Ae = [];
      return;
    }
    if (r === "polyarea") {
      re.push([t.x, t.y, t.z]), ee.geometry.setFromPoints(re.map((s) => new m(s[0], s[1], s[2]))), ee.visible = re.length >= 1, ie(`\u25B0 \xC1rea libre \u2014 ${re.length} punto(s). Click m\xE1s v\xE9rtices, o Enter / click-derecho para cerrar y mallar (m\xEDn. 3).`), w();
      return;
    }
    if (r === "plane3") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length < 3) {
        ie(`\u25E3 Plano inclinado \u2014 punto ${Ae.length}/3. Tip: cambi\xE1 la Cota Z (o enganch\xE1 un nodo) entre clicks para darle inclinaci\xF3n.`);
        return;
      }
      const [s, l, u] = Ae, p = (_q = window.__hekatanSetInclinedPlaneFrom3) == null ? void 0 : _q.call(window, s, l, u);
      ie(p ? "\u2713 Plano de trabajo INCLINADO activo. Dibuj\xE1 el \xE1rea (\u25AD/\u2B21) sobre \xE9l. (XY para resetear)" : "\u26A0 Los 3 puntos son colineales \u2014 no definen un plano. Reintent\xE1."), Ae = [];
      return;
    }
    if (r === "col") {
      an();
      const s = t.z, l = Tt && Tt > 0 ? Tt : 3;
      e.points.val = [...e.points.rawVal, [t.x, t.y, s], [t.x, t.y, s + l]];
      const u = e.polylines.rawVal, p = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [p - 2, p - 1], []], Tt = 0, ie(`\u258C Columna creada \u2014 h=${l.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`);
      try {
        (_r = window.__hekatanRebuild) == null ? void 0 : _r.call(window);
      } catch {
      }
      return;
    }
    if (r === "wall") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u25A5 Pared Q4 \u2014 click 1/2 OK (esquina base 1). Marc\xE1 la otra esquina base.");
        return;
      }
      const [s, l] = Ae, u = Tt && Tt > 0 ? Tt : 3;
      an();
      const p = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [s[0], s[1], s[2]], [l[0], l[1], l[2]], [l[0], l[1], l[2] + u], [s[0], s[1], s[2] + u]];
      const g = e.polylines.rawVal;
      if (g.length - 1, e.polylines.val = [...g.slice(0, -1), ...g[g.length - 1].length > 0 ? [g[g.length - 1]] : [], [p, p + 1, p + 2, p + 3, p], []], e.areas) {
        const M = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, M];
      }
      ie(`\u25A5 Pared Q4 creada \u2014 h=${u.toFixed(2)}m. Tipe\xE1 altura + Enter para custom.`), Ae = [], Tt = 0;
      try {
        (_s2 = window.__hekatanRebuild) == null ? void 0 : _s2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extp") {
      an();
      const s = Tt && Tt > 0 ? Tt : 3, l = t.z;
      e.points.val = [...e.points.rawVal, [t.x, t.y, l], [t.x, t.y, l + s]];
      const u = e.polylines.rawVal, p = e.points.rawVal.length;
      e.polylines.val = [...u.slice(0, -1), ...u[u.length - 1].length > 0 ? [u[u.length - 1]] : [], [p - 2, p - 1], []], Tt = 0, ie(`\u2B06 Extrusi\xF3n punto\u2192l\xEDnea \u2014 h=${s.toFixed(2)}m`);
      try {
        (_t2 = window.__hekatanRebuild) == null ? void 0 : _t2.call(window);
      } catch {
      }
      return;
    }
    if (r === "extl") {
      const s = (window.__hekatanSnap2D ?? 0.5) * 1.5, l = Xe(t.x, t.y, t.z, s);
      if (!l) {
        ie("\u2B06 Extruir l\xEDnea \u2014 acerc\xE1 el cursor a una l\xEDnea existente y volv\xE9 a clickear.");
        return;
      }
      const u = e.polylines.rawVal, p = e.points.rawVal, g = u[l.polyIdx], M = p[g[l.segIdx]], c = p[g[l.segIdx + 1]];
      if (!M || !c) {
        ie("\u2B06 Extruir l\xEDnea \u2014 segmento no v\xE1lido.");
        return;
      }
      const f = Tt && Tt > 0 ? Tt : 3;
      an();
      const P = e.points.rawVal.length;
      e.points.val = [...e.points.rawVal, [M[0], M[1], M[2]], [c[0], c[1], c[2]], [c[0], c[1], c[2] + f], [M[0], M[1], M[2] + f]];
      const R = e.polylines.rawVal;
      if (e.polylines.val = [...R.slice(0, -1), ...R[R.length - 1].length > 0 ? [R[R.length - 1]] : [], [P, P + 1, P + 2, P + 3, P], []], e.areas) {
        const B = e.polylines.rawVal.length - 2;
        e.areas.val = [...e.areas.rawVal, B];
      }
      Tt = 0, ie(`\u2B06 Extrusi\xF3n l\xEDnea\u2192\xE1rea Q4 \u2014 h=${f.toFixed(2)}m`);
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
      ie(`\u2726 Punto auxiliar agregado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
      return;
    }
    if (r === "aux") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u250A L\xEDnea auxiliar \u2014 click 1/2 OK. Marc\xE1 el punto final.");
        return;
      }
      const [s, l] = Ae, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const f = u.rawVal ?? u.val ?? [];
        u.val = [...f, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      const p = l[0] - s[0], g = l[1] - s[1], M = l[2] - s[2], c = Math.sqrt(p * p + g * g + M * M);
      ie(`\u2713 L\xEDnea auxiliar creada \u2014 L=${c.toFixed(2)}m (cyan, no FEM)`), Ae = [];
      return;
    }
    if (r === "extend") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u2197 Prolongar \u2014 click 1/2 OK. Marc\xE1 el destino de la prolongaci\xF3n.");
        return;
      }
      const [s, l] = Ae, u = window.__hekatanDrawingAuxLines;
      if (u) {
        const p = u.rawVal ?? u.val ?? [];
        u.val = [...p, [s[0], s[1], s[2], l[0], l[1], l[2]]];
      }
      ie("\u2713 Prolongaci\xF3n creada como l\xEDnea auxiliar"), Ae = [];
      return;
    }
    if (r === "chaflan") {
      if (Ae.push([t.x, t.y, t.z]), Ae.length === 1) {
        ie("\u25B1 Losa con chaflanes \u2014 click 1/2 OK (esquina). Marc\xE1 la esquina opuesta.");
        return;
      }
      const [s, l] = Ae, u = window.__hekatanChaflanR ?? 1, p = Math.max(3, window.__hekatanArcSegs ?? 6);
      (_v = window.__hekatanDrawSlabChaflan) == null ? void 0 : _v.call(window, s, l, u, p, 6);
      const g = Math.abs(l[0] - s[0]).toFixed(1), M = Math.abs(l[1] - s[1]).toFixed(1);
      ie(`\u2713 Losa con chaflanes dibujada \u2014 ${g}\xD7${M}m, r=${u}m, ${p} seg/chafl\xE1n`), Ae = [];
      try {
        (_w = window.__hekatanRebuild) == null ? void 0 : _w.call(window);
      } catch {
      }
      return;
    }
    if (L = false, an(), e.points.val = [...e.points.rawVal, t.toArray()], e.polylines && (e.polylines.val = [...e.polylines.rawVal.slice(0, -1), [...e.polylines.rawVal.length ? e.polylines.rawVal.pop() : [], e.points.rawVal.length - 1]]), e.polylines) {
      const s = e.polylines.rawVal, l = s.length - 1, u = s[l] ?? [];
      if (r === "line" && u.length === 2) {
        e.polylines.val = [...s, []], ie("\uFF0F L\xEDnea creada (frame). Marc\xE1 2 puntos m\xE1s para otro frame.");
        try {
          (_x = window.__hekatanRebuild) == null ? void 0 : _x.call(window);
        } catch {
        }
        return;
      }
      if (r === "area" && u.length === 4) {
        e.polylines.val = [...s.slice(0, -1), [...u, u[0]], []], e.areas && (e.areas.val = [...e.areas.rawVal, l]), ie("\u25A6 \xC1rea (shell Q4) creada \u2014 4 v\xE9rtices marcados.");
        try {
          (_y = window.__hekatanRebuild) == null ? void 0 : _y.call(window);
        } catch {
        }
        return;
      }
    }
    if (r === "node") ie(`\u25CF Nodo creado en (${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)})`);
    else if (r === "line") ie("\uFF0F L\xEDnea \u2014 click 1/2 OK. Marc\xE1 el segundo punto para crear el frame.");
    else if (r === "polyline") ie("\u2310 Polil\xEDnea \u2014 punto agregado. Continu\xE1 clickeando, right-click para terminar.");
    else if (r === "area") {
      const s = ((_z = e.polylines) == null ? void 0 : _z.rawVal[e.polylines.rawVal.length - 1]) ?? [];
      ie(`\u25A6 \xC1rea \u2014 click ${s.length}/4. Marc\xE1 ${4 - s.length} v\xE9rtice${4 - s.length === 1 ? "" : "s"} m\xE1s.`);
    }
  }), x.addEventListener("contextmenu", (n) => {
    var _a, _b, _c;
    if (((_c = (_b = (_a = window.__hekatanCadState) == null ? void 0 : _a.get) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.tool) === "polyarea" && re.length >= 3) {
      n.preventDefault();
      const a = Je();
      ie(`\u2713 \xC1rea libre mallada \u2014 ${a} shells Q4 creados.`);
      return;
    }
    !e.polylines || e.polylines.rawVal[e.polylines.rawVal.length - 1].length === 0 || (e.polylines.val = [...e.polylines.rawVal, []]);
  }), x.addEventListener("pointermove", (n) => {
    var _a, _b;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(z, o);
    const a = W();
    if (se.geometry.deleteAttribute("position"), a.length) {
      let t = a[0].point.clone();
      (n.ctrlKey || n.metaKey) && t.set(Math.round(t.x), Math.round(t.y), Math.round(t.z));
      {
        const l = ((_a = e.polylines) == null ? void 0 : _a.rawVal) ?? [], u = l[l.length - 1] ?? [], p = e.points.rawVal ?? [];
        if (u.length > 0) {
          const g = p[u[u.length - 1]];
          if (g) {
            const M = !!window.__hekatanOrthoMode;
            let c = J;
            if (!c && M) {
              const f = Math.abs(t.x - g[0]), P = Math.abs(t.y - g[1]), R = Math.abs(t.z - g[2]);
              c = f >= P && f >= R ? "x" : P >= R ? "y" : "z";
            }
            c === "x" ? t.set(t.x, g[1], g[2]) : c === "y" ? t.set(g[0], t.y, g[2]) : c === "z" && t.set(g[0], g[1], t.z);
          }
        }
      }
      const r = (window.__hekatanSnap2D ?? 0.5) * 1.2, s = (_b = window.__hekatanOsnapCompute) == null ? void 0 : _b.call(window, t.x, t.y, t.z, r);
      if (s) t.set(s.x, s.y, s.z);
      else {
        const l = window.__hekatanSnapEnabled !== false, u = window.__hekatanSnap2D ?? 0.5;
        l && u > 0 && (t.x = Math.round(t.x / u) * u, t.y = Math.round(t.y / u) * u, t.z = Math.round(t.z / u) * u);
      }
      se.geometry.setAttribute("position", new $t(t.toArray(), 3));
    }
    w();
  }), x.addEventListener("pointermove", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(z, o);
    let a = false;
    const t = _.intersectObject(fe), r = W();
    if (t.length && r.length) {
      const s = new m(...e.points.rawVal[t[0].index]), l = new m(...r[0].point), u = s.sub(l), p = (_a = r[0].face) == null ? void 0 : _a.normal;
      p.transformDirection(H.matrixWorld), Math.abs(u.dot(p)) < 1e-4 && (a = true);
    }
    se.visible = !a;
  });
  let Kn = false, Hn;
  x.addEventListener("pointermove", (n) => {
    var _a;
    if (!en) return;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(z, o);
    let a = false;
    const t = _.intersectObject(fe), r = W();
    if (t.length && r.length) {
      const l = new m(...e.points.rawVal[t[0].index]), u = new m(...r[0].point), p = l.sub(u), g = (_a = r[0].face) == null ? void 0 : _a.normal;
      g.transformDirection(H.matrixWorld), Math.abs(p.dot(g)) < 1e-4 && (a = true);
    }
    if (a && en < 5 && (Kn = true, d.enabled = false, Hn = t[0].index), !Kn || en % 2 !== 0) return;
    const s = [...e.points.rawVal];
    if (Hn !== void 0) {
      let l = r[0].point;
      (n.ctrlKey || n.metaKey) && (l = new m(Math.round(l.x), Math.round(l.y), Math.round(l.z))), s[Hn] = l.toArray();
    }
    e.points.val = s;
  }), x.addEventListener("pointerup", () => {
    d.enabled = true, Kn = false;
  }), x.addEventListener("contextmenu", (n) => {
    var _a;
    const o = b(n);
    if (!o) return;
    _.setFromCamera(z, o);
    let a = false;
    const t = _.intersectObject(fe), r = W();
    if (t.length && r.length) {
      const u = new m(...e.points.rawVal[t[0].index]), p = new m(...r[0].point), g = u.sub(p), M = (_a = r[0].face) == null ? void 0 : _a.normal;
      M.transformDirection(H.matrixWorld), Math.abs(g.dot(M)) < 1e-4 && (a = true);
    }
    if (!a) return;
    const s = [...e.points.rawVal];
    if (s.splice(t[0].index, 1), e.points.val = s, !e.polylines) return;
    const l = e.polylines.rawVal.map((u) => u.filter((p) => p !== t[0].index)).map((u) => u.map((p) => p > t[0].index ? p - 1 : p)).filter((u) => u.length);
    l.push([]), e.polylines.val = l;
  });
}
function _s(e, i, y) {
  const k = Math.round(14.999999999999998), v = { position: e.position.clone(), quaternion: e.quaternion.clone() }, x = setInterval(_, 1e3 / 30);
  let w = 0;
  function _() {
    w++;
    const z = w / k;
    e.position.lerpVectors(v.position, i.position, z), e.quaternion.slerpQuaternions(v.quaternion, i.quaternion, z), y && y(), w == k && clearInterval(x);
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
    const h = 1 / this.n, d = new Jt(), k = new Jt();
    this.lut.length = 0, this.lut.push(new Jt(this.map[0][1]));
    for (let v = 1; v < y; v++) {
      const x = v * h;
      for (let w = 0; w < this.map.length - 1; w++) if (x > this.map[w][0] && x <= this.map[w + 1][0]) {
        const _ = this.map[w][0], z = this.map[w + 1][0];
        d.setHex(this.map[w][1], In), k.setHex(this.map[w + 1][1], In);
        const b = new Jt().lerpColors(d, k, (x - _) / (z - _));
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
    const y = i.getContext("2d", { alpha: false }), h = y.getImageData(0, 0, 1, this.n), d = h.data;
    let k = 0;
    const v = 1 / this.n, x = new Jt(), w = new Jt(), _ = new Jt();
    for (let z = 1; z >= 0; z -= v) for (let b = this.map.length - 1; b >= 0; b--) if (z < this.map[b][0] && z >= this.map[b - 1][0]) {
      const H = this.map[b - 1][0], le = this.map[b][0];
      x.setHex(this.map[b - 1][1], In), w.setHex(this.map[b][1], In), _.lerpColors(x, w, (z - H) / (le - H)), d[k * 4] = Math.round(_.r * 255), d[k * 4 + 1] = Math.round(_.g * 255), d[k * 4 + 2] = Math.round(_.b * 255), d[k * 4 + 3] = 255, k += 1;
    }
    return y.putImageData(h, 0, 0), i;
  }
}
const jn = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] }, Cn = [[0, 255, 0, 255], [0.077, 255, 0, 180], [0.154, 255, 0, 0], [0.231, 255, 80, 0], [0.308, 255, 140, 0], [0.385, 255, 190, 0], [0.462, 255, 255, 0], [0.538, 180, 255, 0], [0.615, 0, 255, 0], [0.692, 0, 255, 180], [0.769, 0, 255, 255], [0.846, 0, 180, 255], [0.923, 0, 0, 255], [1, 0, 0, 180]];
function Ss(e) {
  e = Math.max(0, Math.min(1, e));
  for (let y = 0; y < Cn.length - 1; y++) {
    const [h, d, k, v] = Cn[y], [x, w, _, z] = Cn[y + 1];
    if (e <= x) {
      const b = (e - h) / (x - h);
      return [d + (w - d) * b, k + (_ - k) * b, v + (z - v) * b];
    }
  }
  const i = Cn[Cn.length - 1];
  return [i[1], i[2], i[3]];
}
function ks() {
  const i = new Uint8Array(1024);
  for (let h = 0; h < 256; h++) {
    const d = h / 255, [k, v, x] = Ss(d);
    i[h * 4 + 0] = k, i[h * 4 + 1] = v, i[h * 4 + 2] = x, i[h * 4 + 3] = 255;
  }
  const y = new Qo(i, 256, 1, Oo);
  return y.minFilter = bo, y.magFilter = bo, y.wrapS = Mo, y.wrapT = Mo, y.needsUpdate = true, y;
}
function Ps(e, i, y) {
  new $o();
  const h = ks(), d = new qo({ uniforms: { cmap: { value: h }, ambient: { value: 0.95 } }, vertexShader: `
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
    `, side: Dt, transparent: false, clipping: true, depthWrite: true, depthTest: true }), k = new je(new he(), d);
  return k.renderOrder = -1, k.frustumCulled = false, k.userData.isShellArea = true, k.name = "__hekatan_shell_colormap", $.derive(() => {
    k.geometry.setAttribute("position", new $t(e.val.flat(), 3));
    const v = [];
    for (const S of i.val) S.length === 3 ? v.push(S[0], S[1], S[2]) : S.length === 4 && (v.push(S[0], S[1], S[2]), v.push(S[0], S[2], S[3]));
    k.geometry.setIndex(new Jo(v, 1));
    const x = y.val.filter((S) => Number.isFinite(S));
    let w, _;
    const z = ao.val;
    if (z ? (_ = z[0], w = z[1]) : (w = x.length ? Math.max(...x) : 1, _ = x.length ? Math.min(...x) : 0, _ >= 0 && w > 0 && (_ = 0)), w === _) {
      const S = Math.max(Math.abs(w) * 1e-6, 1e-9);
      w += S, _ -= S;
    }
    const b = z && z[0] > z[1], H = Math.min(_, w), le = Math.max(_, w), me = le - H, de = new Float32Array(y.val.length);
    for (let S = 0; S < y.val.length; S++) {
      const W = y.val[S];
      if (!Number.isFinite(W)) {
        de[S] = -1;
        continue;
      }
      const se = ((b ? le + H - W : W) - H) / me;
      de[S] = Math.max(0, Math.min(1, se));
    }
    k.geometry.setAttribute("scalar", new ct(de, 1));
  }), k;
}
function zs(e, i, y, h) {
  const d = Ps(y, e.elements, h);
  return $.derive(() => {
    d.visible = i.shellResults.val != "none";
  }), d;
}
const Cs = 6, eo = 10, Fs = 0.012;
function Es(e) {
  return e.startsWith("contour:") ? e.slice(8) : null;
}
function As(e, i, y, h) {
  if (!y && !h) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(e) && y) {
    const k = y[e];
    if (k && k.has(i)) return k.get(i);
  }
  return null;
}
function Vs(e, i, y, h) {
  const d = new ot(), k = new $o();
  k.setColorMap("rainbow");
  const v = new Jt(), x = $.state([]);
  return $.derive(() => {
    var _a, _b, _c;
    i.deformedShape.val;
    const w = y.val, _ = ((_a = e.elements) == null ? void 0 : _a.val) ?? [], z = Es(i.frameResults.val);
    if (d.children.forEach((C) => {
      C.geometry && C.geometry.dispose(), C.material && C.material.dispose();
    }), d.clear(), !z || _.length === 0 || w.length === 0) {
      x.val = [];
      return;
    }
    const b = (_b = e.analyzeOutputs) == null ? void 0 : _b.val, H = (_c = e.deformOutputs) == null ? void 0 : _c.val, le = [], me = [];
    for (let C = 0; C < _.length; C++) {
      if (_[C].length !== 2) continue;
      const ne = As(z, C, b, H);
      ne && (le.push(ne[0], ne[1]), me.push({ idx: C, vals: ne }));
    }
    if (le.length === 0) {
      x.val = [];
      return;
    }
    const de = Math.min(...le), S = Math.max(...le);
    k.setMin(de), k.setMax(S), x.val = le;
    const W = [1 / 0, 1 / 0, 1 / 0], fe = [-1 / 0, -1 / 0, -1 / 0];
    for (const C of w) for (let Z = 0; Z < 3; Z++) W[Z] = Math.min(W[Z], C[Z]), fe[Z] = Math.max(fe[Z], C[Z]);
    const be = Math.max(fe[0] - W[0], fe[1] - W[1], fe[2] - W[2], 1) * Fs, q = [], K = [], Y = [];
    let L = 0;
    for (const { idx: C, vals: Z } of me) {
      const ne = _[C], j = w[ne[0]], ae = w[ne[1]];
      if (!j || !ae) continue;
      const V = new m(ae[0] - j[0], ae[1] - j[1], ae[2] - j[2]), N = V.length();
      if (N < 1e-10) continue;
      V.normalize();
      const ee = Math.abs(V.y) < 0.99 ? new m(0, 1, 0) : new m(1, 0, 0), re = new m().crossVectors(V, ee).normalize(), G = new m().crossVectors(V, re).normalize(), Fe = eo + 1, Me = Cs;
      for (let Se = 0; Se < Fe; Se++) {
        const $e = Se / eo, Ve = j[0] + V.x * N * $e, St = j[1] + V.y * N * $e, kt = j[2] + V.z * N * $e, dt = Z[0] + (Z[1] - Z[0]) * $e, I = k.getColor(dt) ?? new Jt(0, 0, 0);
        v.copy(I).convertSRGBToLinear();
        for (let oe = 0; oe < Me; oe++) {
          const ce = oe / Me * Math.PI * 2, pe = Math.cos(ce), Le = Math.sin(ce);
          q.push(Ve + (re.x * pe + G.x * Le) * be, St + (re.y * pe + G.y * Le) * be, kt + (re.z * pe + G.z * Le) * be), K.push(v.r, v.g, v.b);
        }
      }
      for (let Se = 0; Se < eo; Se++) for (let $e = 0; $e < Me; $e++) {
        const Ve = ($e + 1) % Me, St = L + Se * Me + $e, kt = L + Se * Me + Ve, dt = L + (Se + 1) * Me + $e, I = L + (Se + 1) * Me + Ve;
        Y.push(St, kt, I), Y.push(St, I, dt);
      }
      L += Fe * Me;
    }
    if (q.length === 0) return;
    const A = new he();
    A.setAttribute("position", new $t(q, 3)), A.setAttribute("color", new $t(K, 3)), A.setIndex(Y), A.computeVertexNormals();
    const F = new st({ vertexColors: true, side: Dt }), T = new je(A, F);
    T.frustumCulled = false, d.add(T);
  }), d.__colorMapValues = x, d;
}
function Ts() {
  const e = window;
  return { forceUnit: e.__hekatanForceUnit ?? localStorage.getItem("hk_forceUnit") ?? "tonf", dispUnit: e.__hekatanDispUnit ?? localStorage.getItem("hk_dispUnit") ?? "mm", stressUnit: e.__hekatanStressUnit ?? localStorage.getItem("hk_stressUnit") ?? "tonf/m\xB2" };
}
const Ls = { kN: 1, tonf: 1 / 9.80665, kip: 1 / 4.4482216 }, Is = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, $s = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76, "kip/ft\xB2": 1 / 47.88026 };
function vt(e, i = 4) {
  return e == null || !isFinite(e) ? "\u2014" : e === 0 ? "0" : Math.abs(e) < 1e-3 || Math.abs(e) > 1e5 ? e.toExponential(i) : e.toFixed(i);
}
const Rs = 16755200, Co = 56831, Bs = 56831, Xs = 56831, Bn = 65382;
function Ys(e) {
  const i = new ot();
  i.name = "__hekatan_hover", i.renderOrder = 99;
  const y = new xn(1, 16, 16), h = new st({ color: Rs, transparent: true, opacity: 0.85, depthTest: false }), d = new je(y, h);
  d.visible = false, d.renderOrder = 100, i.add(d);
  const k = new he(), v = new ht({ color: Co, linewidth: 4, transparent: true, opacity: 0.9, depthTest: false }), x = new Ot(k, v);
  x.visible = false, x.renderOrder = 100, i.add(x);
  const w = new st({ color: Co, transparent: true, opacity: 0.7, depthTest: false }), _ = new je(new _o(1, 1, 1, 12), w);
  _.visible = false, _.renderOrder = 100, i.add(_);
  const z = new he(), b = new st({ color: Bs, transparent: true, opacity: 0.45, side: Dt, depthTest: false }), H = new je(z, b);
  H.visible = false, H.renderOrder = 100, i.add(H);
  const le = new he(), me = new ht({ color: Xs, linewidth: 3, transparent: true, opacity: 0.95, depthTest: false }), de = new Ot(le, me);
  de.visible = false, de.renderOrder = 100, i.add(de);
  const S = new st({ color: Bn, transparent: true, opacity: 0.95, depthTest: false }), W = new je(y, S);
  W.visible = false, W.renderOrder = 101, i.add(W);
  const fe = new st({ color: Bn, transparent: true, opacity: 0.85, depthTest: false }), se = new je(new _o(1, 1, 1, 12), fe);
  se.visible = false, se.renderOrder = 101, i.add(se);
  const be = new he(), q = new st({ color: Bn, transparent: true, opacity: 0.55, side: Dt, depthTest: false }), K = new je(be, q);
  K.visible = false, K.renderOrder = 101, i.add(K);
  const Y = new he(), L = new ht({ color: Bn, linewidth: 4, transparent: true, opacity: 1, depthTest: false }), A = new Ot(Y, L);
  A.visible = false, A.renderOrder = 101, i.add(A);
  let F = null;
  const T = document.createElement("div");
  Object.assign(T.style, { position: "absolute", pointerEvents: "none", padding: "5px 9px", fontSize: "11px", fontFamily: "Consolas, 'Courier New', monospace", background: "rgba(0, 0, 0, 0.88)", color: "#ffd166", border: "1px solid rgba(255, 200, 80, 0.5)", borderRadius: "4px", whiteSpace: "pre-line", zIndex: "9999", display: "none", transform: "translate(12px, 12px)", lineHeight: "1.35", maxWidth: "260px", boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }), T.classList.add("hekatan-hover-tooltip"), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(T);
  }, 0);
  function C(U) {
    const J = e.derivedNodes.rawVal;
    return !J || U < 0 || U >= J.length ? null : new m(J[U][0], J[U][1], J[U][2]);
  }
  function Z(U, J) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2;
    const ze = e.getActiveCamera();
    if (!ze || !e.mesh) return null;
    const Q = e.rendererElm.getBoundingClientRect(), We = U - Q.left, Ue = J - Q.top, Oe = e.derivedNodes.rawVal, Te = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (!Oe || !Te) return null;
    const Ge = /* @__PURE__ */ new Map(), _e = (De) => {
      if (Ge.has(De)) return Ge.get(De);
      const Pe = C(De);
      if (!Pe) return Ge.set(De, null), null;
      const xe = Pe.clone().project(ze), Xe = (xe.x * 0.5 + 0.5) * Q.width, ge = (-xe.y * 0.5 + 0.5) * Q.height, it = { x: Xe, y: ge, z: xe.z };
      return Ge.set(De, it), it;
    }, yt = /* @__PURE__ */ new Set();
    for (const De of Te) if (De) for (const Pe of De) yt.add(Pe);
    const ut = 8;
    let Ye = -1, Ce = ut;
    for (let De = 0; De < Oe.length; De++) {
      if (!yt.has(De)) continue;
      const Pe = _e(De);
      if (!Pe || Pe.z < -1 || Pe.z > 1) continue;
      const xe = Pe.x - We, Xe = Pe.y - Ue, ge = Math.sqrt(xe * xe + Xe * Xe);
      ge < Ce && (Ce = ge, Ye = De);
    }
    const ke = Ts(), qe = Is[ke.dispUnit] ?? 1e3, at = Ls[ke.forceUnit] ?? 1;
    if (Ye >= 0) {
      const De = Oe[Ye];
      let Pe = `Nodo ${Ye}
(${De[0].toFixed(3)}, ${De[1].toFixed(3)}, ${De[2].toFixed(3)})`;
      const xe = (_c = (_b = e.mesh) == null ? void 0 : _b.deformOutputs) == null ? void 0 : _c.rawVal;
      if (xe == null ? void 0 : xe.deformations) {
        const Xe = xe.deformations.get(Ye);
        if (Xe && (Pe += `
\u2500\u2500\u2500\u2500 \u0394 desplaz. \u2500\u2500\u2500\u2500`, Pe += `
Ux = ${vt(Xe[0] * qe, 3)} ${ke.dispUnit}`, Pe += `
Uy = ${vt(Xe[1] * qe, 3)} ${ke.dispUnit}`, Pe += `
Uz = ${vt(Xe[2] * qe, 3)} ${ke.dispUnit}`, (Math.abs(Xe[3]) > 1e-9 || Math.abs(Xe[4]) > 1e-9 || Math.abs(Xe[5]) > 1e-9) && (Pe += `
Rx = ${vt(Xe[3] * 1e3, 3)} mrad`, Pe += `
Ry = ${vt(Xe[4] * 1e3, 3)} mrad`, Pe += `
Rz = ${vt(Xe[5] * 1e3, 3)} mrad`)), xe.reactions) {
          const ge = xe.reactions.get(Ye);
          ge && (Math.abs(ge[0]) > 1e-9 || Math.abs(ge[1]) > 1e-9 || Math.abs(ge[2]) > 1e-9 || Math.abs(ge[3]) > 1e-6 || Math.abs(ge[4]) > 1e-6 || Math.abs(ge[5]) > 1e-6) && (Pe += `
\u2500\u2500\u2500\u2500 R reacciones \u2500\u2500\u2500\u2500`, Pe += `
Fx = ${vt(ge[0] * at)} ${ke.forceUnit}`, Pe += `
Fy = ${vt(ge[1] * at)} ${ke.forceUnit}`, Pe += `
Fz = ${vt(ge[2] * at)} ${ke.forceUnit}`, (Math.abs(ge[3]) > 1e-6 || Math.abs(ge[4]) > 1e-6 || Math.abs(ge[5]) > 1e-6) && (Pe += `
Mx = ${vt(ge[3] * at)} ${ke.forceUnit}\xB7m`, Pe += `
My = ${vt(ge[4] * at)} ${ke.forceUnit}\xB7m`, Pe += `
Mz = ${vt(ge[5] * at)} ${ke.forceUnit}\xB7m`));
        }
      }
      return { type: "node", idx: Ye, info: Pe };
    }
    const pn = 5;
    let Ke = -1, Wt = pn, bt = "frame";
    for (let De = 0; De < Te.length; De++) {
      const Pe = Te[De];
      if (!(!Pe || Pe.length < 2)) {
        if (Pe.length === 2) {
          const xe = _e(Pe[0]), Xe = _e(Pe[1]);
          if (!xe || !Xe || xe.z < -1 || xe.z > 1 || Xe.z < -1 || Xe.z > 1) continue;
          const ge = Ds(We, Ue, xe.x, xe.y, Xe.x, Xe.y);
          ge < Wt && (Wt = ge, Ke = De, bt = "frame");
        } else if (Pe.length === 3 || Pe.length === 4) {
          const xe = [];
          let Xe = true;
          for (const ge of Pe) {
            const it = _e(ge);
            if (!it || it.z < -1 || it.z > 1) {
              Xe = false;
              break;
            }
            xe.push(it);
          }
          if (!Xe) continue;
          if (Ns(We, Ue, xe)) {
            const it = xe.reduce((ft, Rt) => ft + Rt.z, 0) / xe.length * 1e-3;
            it < Wt && (Wt = it, Ke = De, bt = "shell");
          }
        } else if (Pe.length === 8) {
          const xe = [];
          let Xe = true;
          for (const He of Pe) {
            const Je = _e(He);
            if (!Je || Je.z < -1 || Je.z > 1) {
              Xe = false;
              break;
            }
            xe.push(Je);
          }
          if (!Xe) continue;
          const ge = Math.min(...xe.map((He) => He.x)), it = Math.max(...xe.map((He) => He.x)), ft = Math.min(...xe.map((He) => He.y)), Rt = Math.max(...xe.map((He) => He.y));
          if (We >= ge && We <= it && Ue >= ft && Ue <= Rt) {
            const Je = xe.reduce((et, lt) => et + lt.z, 0) / xe.length * 1e-3;
            Je < Wt && (Wt = Je, Ke = De, bt = "solid");
          }
        }
      }
    }
    if (Ke >= 0) {
      const De = Te[Ke];
      let xe = `${bt === "frame" ? "Frame" : bt === "shell" ? "Shell" : "Solid"} ${Ke}`;
      const Xe = (_e2 = (_d = e.mesh) == null ? void 0 : _d.elementInputs) == null ? void 0 : _e2.rawVal, ge = (_g = (_f = Xe == null ? void 0 : Xe.sectionInfo) == null ? void 0 : _f.get) == null ? void 0 : _g.call(_f, Ke);
      if (ge) {
        ge.name && (xe += `
  \u{1F4CB} ${ge.name}`), ge.shape && (xe += `
  Shape: ${ge.shape}`);
        const it = /concrete|hormig|rect.*sólida/i.test(ge.shape || ""), ft = it ? 100 : 1e3, Rt = it ? "cm" : "mm", He = (et) => {
          const lt = et * ft;
          return Math.abs(lt - Math.round(lt)) < 0.05 ? `${Math.round(lt)}` : `${lt.toFixed(1)}`;
        }, Je = [];
        if (ge.D != null && Je.push(`D=${He(ge.D)}`), ge.B != null && Je.push(`B=${He(ge.B)}`), ge.TF != null && Je.push(`TF=${He(ge.TF)}`), ge.TW != null && Je.push(`TW=${He(ge.TW)}`), ge.t != null && Je.push(`t=${He(ge.t)}`), Je.length && (xe += `
  Dim: ${Je.join(" ")} ${Rt}`), ge.material) {
          let et = ge.material;
          ge.fillMaterial && (et += ` + FILL "${ge.fillMaterial}"`), xe += `
  Mat: ${et}`;
        }
      } else {
        const it = (_i = (_h = Xe == null ? void 0 : Xe.sectionLabels) == null ? void 0 : _h.get) == null ? void 0 : _i.call(_h, Ke), ft = (_k = (_j = Xe == null ? void 0 : Xe.materialTypes) == null ? void 0 : _j.get) == null ? void 0 : _k.call(_j, Ke);
        it ? (xe += `
  ${it}`, ft && !it.includes(ft) && (xe += `  (${ft})`)) : ft && (xe += `
  Material: ${ft}`);
      }
      if (xe += `
nodos: [${De.join(", ")}]`, bt === "shell" && ((_l = e.mesh) == null ? void 0 : _l.analyzeOutputs)) {
        const it = e.mesh.analyzeOutputs.rawVal, ft = $s[ke.stressUnit] ?? 1, Rt = [["bendingXX", "Mxx", at, `${ke.forceUnit}\xB7m/m`], ["bendingYY", "Myy", at, `${ke.forceUnit}\xB7m/m`], ["bendingXY", "Mxy", at, `${ke.forceUnit}\xB7m/m`], ["membraneXX", "Nxx", at, `${ke.forceUnit}/m`], ["membraneYY", "Nyy", at, `${ke.forceUnit}/m`], ["membraneXY", "Nxy", at, `${ke.forceUnit}/m`], ["shearX", "Qx", at, `${ke.forceUnit}/m`], ["shearY", "Qy", at, `${ke.forceUnit}/m`], ["vonMises", "\u03C3VM", ft, ke.stressUnit], ["pressure", "p", ft, ke.stressUnit]], He = [];
        for (const [Je, et, lt, Zt] of Rt) {
          const Ut = it == null ? void 0 : it[Je];
          if (Ut && Ut instanceof Map) {
            const Gt = Ut.get(Ke);
            if (Gt != null) {
              if (typeof Gt == "number") He.push(`${et} = ${vt(Gt * lt, 3)} ${Zt}`);
              else if (Array.isArray(Gt)) {
                let xt = Gt[0];
                for (const sn of Gt) Math.abs(sn) > Math.abs(xt) && (xt = sn);
                He.push(`${et} = ${vt(xt * lt, 3)} ${Zt}`);
              }
            }
          }
        }
        He.length > 0 && (xe += `
\u2500\u2500\u2500\u2500 results \u2500\u2500\u2500\u2500
` + He.slice(0, 8).join(`
`));
      }
      if (bt === "frame" && ((_m = e.mesh) == null ? void 0 : _m.deformOutputs) && e.mesh.elementInputs) {
        const it = e.mesh.deformOutputs.rawVal, ft = e.mesh.elementInputs.rawVal, Rt = it == null ? void 0 : it.deformations;
        if (Rt && De.length === 2) {
          const He = Rt.get(De[0]), Je = Rt.get(De[1]), et = Oe[De[0]], lt = Oe[De[1]];
          if (He && Je && et && lt) {
            const Zt = lt[0] - et[0], Ut = lt[1] - et[1], Gt = lt[2] - et[2], xt = Math.sqrt(Zt * Zt + Ut * Ut + Gt * Gt);
            if (xt > 1e-9) {
              const sn = Zt / xt, gt = Ut / xt, En = Gt / xt, gn = (Je[0] - He[0]) * sn + (Je[1] - He[1]) * gt + (Je[2] - He[2]) * En, Qt = ((_n = ft.elasticities) == null ? void 0 : _n.get(Ke)) ?? 0, vn = ((_o2 = ft.areas) == null ? void 0 : _o2.get(Ke)) ?? 0, An = ((_p = ft.momentsOfInertiaY) == null ? void 0 : _p.get(Ke)) ?? 0, Zn = ((_q = ft.momentsOfInertiaZ) == null ? void 0 : _q.get(Ke)) ?? 0, bn = ((_r = ft.torsionalConstants) == null ? void 0 : _r.get(Ke)) ?? 0, Vn = ((_s2 = ft.shearModuli) == null ? void 0 : _s2.get(Ke)) ?? Qt / 2.6, un = Qt * vn * (gn / xt), en = (Je[3] - He[3]) * sn + (Je[4] - He[4]) * gt + (Je[5] - He[5]) * En, Mt = Vn * bn * (en / xt), Nt = Je[4] - He[4], rn = Je[5] - He[5], At = Qt * An * Nt / xt, fn = Qt * Zn * rn / xt;
              xe += `
\u2500\u2500\u2500\u2500 frame \u2500\u2500\u2500\u2500`, xe += `
L = ${vt(xt, 3)} m`, xe += `
\u0394L = ${vt(gn * qe, 3)} ${ke.dispUnit}`, xe += `
\u03B5 = ${vt(gn / xt, 6)}`, Math.abs(un) > 1e-6 && (xe += `
N \u2248 ${vt(un * at)} ${ke.forceUnit}`), Math.abs(Mt) > 1e-6 && (xe += `
T \u2248 ${vt(Mt * at)} ${ke.forceUnit}\xB7m`), Math.abs(At) > 1e-6 && (xe += `
My \u2248 ${vt(At * at)} ${ke.forceUnit}\xB7m`), Math.abs(fn) > 1e-6 && (xe += `
Mz \u2248 ${vt(fn * at)} ${ke.forceUnit}\xB7m`);
            }
          }
        }
      }
      return { type: bt, idx: Ke, info: xe };
    }
    return null;
  }
  function ne(U, J, ze) {
    var _a, _b, _c;
    if (d.visible = false, x.visible = false, _.visible = false, H.visible = false, de.visible = false, !U || !e.mesh) {
      T.style.display = "none", e.render();
      return;
    }
    const Q = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (U.type === "node") {
      const Te = C(U.idx);
      if (Te) {
        const Ge = e.derivedNodes.rawVal ?? [];
        let _e = 1;
        if (Ge.length >= 2) {
          let Ye = [1 / 0, 1 / 0, 1 / 0], Ce = [-1 / 0, -1 / 0, -1 / 0];
          for (const ke of Ge) for (let qe = 0; qe < 3; qe++) ke[qe] < Ye[qe] && (Ye[qe] = ke[qe]), ke[qe] > Ce[qe] && (Ce[qe] = ke[qe]);
          _e = Math.max(Ce[0] - Ye[0], Ce[1] - Ye[1], Ce[2] - Ye[2], 0.1);
        }
        const yt = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, ut = 0.015 * _e * yt;
        d.position.copy(Te), d.scale.setScalar(ut), d.visible = true;
      }
    } else if (U.type === "frame" && Q) {
      const Te = Q[U.idx], Ge = C(Te[0]), _e = C(Te[1]);
      if (Ge && _e) {
        const yt = Ge.clone().add(_e).multiplyScalar(0.5), ut = _e.clone().sub(Ge), Ye = ut.length(), Ce = e.getActiveCamera();
        let ke;
        if (Ce.isOrthographicCamera) {
          const Ke = Ce;
          ke = (Ke.top - Ke.bottom) / Ke.zoom * 35e-4;
        } else ke = Ce.position.distanceTo(yt) * 35e-4;
        _.position.copy(yt);
        const qe = new m(0, 1, 0), at = qe.clone().cross(ut).normalize(), pn = qe.angleTo(ut);
        _.quaternion.setFromAxisAngle(at, pn), _.scale.set(ke, Ye, ke), _.visible = true;
      }
    } else if (U.type === "shell" && Q) {
      const Te = Q[U.idx], Ge = [], _e = [];
      for (const yt of Te) {
        const ut = C(yt);
        if (!ut) return;
        Ge.push(ut.x, ut.y, ut.z);
      }
      Te.length === 4 ? _e.push(0, 1, 2, 0, 2, 3) : Te.length === 3 && _e.push(0, 1, 2), z.setAttribute("position", new $t(Ge, 3)), z.setIndex(_e), z.computeVertexNormals(), H.visible = true;
    } else if (U.type === "solid" && Q) {
      const Te = Q[U.idx], Ge = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], _e = [];
      for (const [yt, ut] of Ge) {
        const Ye = C(Te[yt]), Ce = C(Te[ut]);
        Ye && Ce && _e.push(Ye.x, Ye.y, Ye.z, Ce.x, Ce.y, Ce.z);
      }
      le.setAttribute("position", new $t(_e, 3)), de.visible = true;
    }
    if (window.__hekatanShellTooltipVisible === true) {
      T.style.display = "none", e.render();
      return;
    }
    T.textContent = U.info, T.style.whiteSpace = "pre-line", T.style.display = "block";
    const Ue = e.rendererElm.getBoundingClientRect(), Oe = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? Ue;
    T.style.left = `${J - Oe.left}px`, T.style.top = `${ze - Oe.top}px`, e.render();
  }
  let j = "", ae = 0, V = 0;
  const N = window.__hekatanHoverDebug ?? false, ee = (U) => {
    ae && cancelAnimationFrame(ae), ae = requestAnimationFrame(() => {
      var _a, _b, _c;
      const J = Z(U.clientX, U.clientY);
      if (N && V < 5) {
        const Q = e.derivedNodes.rawVal, We = (_b = (_a = e.mesh) == null ? void 0 : _a.elements) == null ? void 0 : _b.rawVal;
        console.log(`[hover] pointer (${U.clientX}, ${U.clientY}) nodes=${(Q == null ? void 0 : Q.length) ?? 0} elems=${(We == null ? void 0 : We.length) ?? 0} hover=`, J), V++;
      }
      const ze = J ? `${J.type}:${J.idx}` : "";
      if (ze !== j) j = ze, ne(J, U.clientX, U.clientY);
      else if (J) {
        const Q = ((_c = e.rendererElm.parentElement) == null ? void 0 : _c.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
        T.style.left = `${U.clientX - Q.left}px`, T.style.top = `${U.clientY - Q.top}px`;
      }
    });
  };
  let re = null;
  const G = () => {
    j = "", d.visible = false, x.visible = false, _.visible = false, H.visible = false, de.visible = false, T.style.display = "none", e.render();
  }, Fe = (U) => {
    const J = e.rendererElm.getBoundingClientRect(), ze = U.clientX - J.left, Q = U.clientY - J.top;
    (ze < -2 || Q < -2 || ze > J.width + 2 || Q > J.height + 2) && (re && clearTimeout(re), re = window.setTimeout(G, 200));
  }, Me = () => {
    re && (clearTimeout(re), re = null);
  };
  e.rendererElm.addEventListener("pointermove", ee), e.rendererElm.addEventListener("pointerleave", Fe), e.rendererElm.addEventListener("pointerenter", Me);
  const Se = document.createElement("div");
  Object.assign(Se.style, { position: "absolute", zIndex: "10000", background: "rgba(20, 20, 25, 0.96)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "180px", fontFamily: "Segoe UI, sans-serif", fontSize: "13px", color: "#e8e8e8", userSelect: "none", display: "none" }), Se.classList.add("hekatan-context-menu");
  let $e = null;
  const Ve = document.createElement("div");
  Object.assign(Ve.style, { position: "absolute", background: "rgba(20, 20, 25, 0.97)", border: "1px solid rgba(120, 180, 255, 0.45)", borderRadius: "6px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.55)", padding: "4px 0", minWidth: "240px", fontFamily: "Segoe UI, sans-serif", fontSize: "12.5px", color: "#e8e8e8", userSelect: "none", display: "none", zIndex: "10001" });
  const St = [{ icon: "\u{1F4D0}", label: "Section Property...", key: "section" }, { icon: "\u{1F527}", label: "Property Modifiers...", key: "modifiers" }, { icon: "\u{1F513}", label: "Releases / Partial Fixity...", key: "releases" }, { icon: "\u2194", label: "End Length Offsets...", key: "endOffsets" }, { icon: "\u{1F4CD}", label: "Insertion Point...", key: "insertionPoint" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "localAxes" }, { icon: "\u{1F4CA}", label: "Output Stations...", key: "outputStations" }, { icon: "\u2696", label: "Tension / Compression Limits...", key: "tcLimits" }, { icon: "\u{1F300}", label: "Line Springs...", key: "lineSprings" }, { icon: "\u2693", label: "Additional Mass...", key: "addMass" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "materialOverwrite" }], kt = [{ icon: "\u{1F53B}", label: "Joint Restraints (Supports)...", key: "restraints" }, { icon: "\u{1F300}", label: "Point Springs...", key: "pointSprings" }, { icon: "\u{1F4AA}", label: "Joint Loads \u2014 Force...", key: "jointForce" }, { icon: "\u{1F504}", label: "Joint Loads \u2014 Moment...", key: "jointMoment" }, { icon: "\u2693", label: "Additional Mass (Joint)...", key: "jointMass" }], dt = [{ icon: "\u{1F4D0}", label: "Section Property (Slab/Wall)...", key: "shellSection" }, { icon: "\u{1F527}", label: "Property Modifiers (f/m/v)...", key: "shellModifiers" }, { icon: "\u{1F300}", label: "Area Springs (Winkler)...", key: "areaSprings" }, { icon: "\u{1F4AA}", label: "Uniform Load (Shell)...", key: "shellLoad" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "shellLocalAxes" }, { icon: "\u{1F3A8}", label: "Material Overwrite...", key: "shellMaterial" }], I = [{ icon: "\u{1F4D0}", label: "Solid Property...", key: "solidProp" }, { icon: "\u{1F4AA}", label: "Surface Pressure...", key: "solidPressure" }, { icon: "\u{1F9ED}", label: "Local Axes...", key: "solidLocalAxes" }], oe = (U, J, ze) => {
    const Q = document.createElement("div");
    return Q.style.cssText = `
      padding: 5px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      transition: background 0.08s;
      white-space: nowrap;
    `, Q.innerHTML = `<span style="font-size:13px;width:18px;text-align:center;">${U}</span><span>${J}</span>`, Q.addEventListener("mouseenter", () => {
      Q.style.background = "rgba(100, 160, 255, 0.22)";
    }), Q.addEventListener("mouseleave", () => {
      Q.style.background = "transparent";
    }), Q.addEventListener("click", (We) => {
      We.stopPropagation();
      const Ue = $e;
      pt(), Ue && (window.dispatchEvent(new CustomEvent(`hekatan:assign:${ze}`, { detail: { type: Ue.type, idx: Ue.idx, subAction: ze } })), window.dispatchEvent(new CustomEvent("hekatan:assign", { detail: { type: Ue.type, idx: Ue.idx, subAction: ze } })));
    }), Q;
  };
  function ce(U) {
    Ve.innerHTML = "";
    const J = U === "frame" ? St : U === "node" ? kt : U === "shell" ? dt : I, ze = document.createElement("div");
    ze.style.cssText = "padding: 4px 14px; font-size: 11px; color: #88a; border-bottom: 1px solid rgba(120,180,255,0.18); margin-bottom: 3px;", ze.textContent = `Asignar a ${U.toUpperCase()} #${($e == null ? void 0 : $e.idx) ?? "?"}`, Ve.appendChild(ze);
    for (const Q of J) Ve.appendChild(oe(Q.icon, Q.label, Q.key));
  }
  setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Ve);
  }, 0);
  function pe(U, J) {
    var _a;
    if (!$e) return;
    ce($e.type);
    const ze = Se.getBoundingClientRect();
    ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect(), Ve.style.left = `${U + ze.width}px`, Ve.style.top = `${J}px`, Ve.style.display = "block", setTimeout(() => {
      const Q = Ve.getBoundingClientRect();
      Q.right > window.innerWidth - 10 && (Ve.style.left = `${U - Q.width}px`);
    }, 0);
  }
  function Le() {
    Ve.style.display = "none";
  }
  const Ne = (U, J, ze, Q) => {
    const We = document.createElement("div");
    We.style.cssText = `
      padding: 6px 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: background 0.1s;
      justify-content: space-between;
    `;
    const Ue = `<span style="display:flex;align-items:center;gap:10px;"><span style="font-size:14px;width:18px;text-align:center;">${U}</span><span>${J}</span></span>`, Oe = ze ? '<span style="color:#888;">\u25B8</span>' : "";
    return We.innerHTML = Ue + Oe, We.addEventListener("mouseenter", () => {
      if (We.style.background = "rgba(100, 160, 255, 0.18)", ze) {
        const Te = parseFloat(Se.style.left || "0"), Ge = parseFloat(Se.style.top || "0");
        pe(Te, Ge);
      } else Le();
    }), We.addEventListener("mouseleave", () => {
      We.style.background = "transparent";
    }), We.addEventListener("click", (Te) => {
      if (Te.stopPropagation(), ze) return;
      const Ge = $e;
      pt(), Q(Ge);
    }), We;
  }, mt = Ne("\u{1F4DD}", "Asignar", true, () => {
  }), Ze = Ne("\u2139", "Ver informaci\xF3n", false, (U) => {
    U && window.dispatchEvent(new CustomEvent("hekatan:info", { detail: { type: U.type, idx: U.idx } }));
  });
  Ze.addEventListener("mouseenter", () => {
    Le();
  }), Se.appendChild(mt), Se.appendChild(Ze), setTimeout(() => {
    e.rendererElm.parentElement && e.rendererElm.parentElement.appendChild(Se);
  }, 0);
  function wt(U, J, ze) {
    var _a, _b;
    $e = ze;
    const Q = ((_a = e.rendererElm.parentElement) == null ? void 0 : _a.getBoundingClientRect()) ?? e.rendererElm.getBoundingClientRect();
    Se.style.left = `${U - Q.left}px`, Se.style.top = `${J - Q.top}px`, Se.style.display = "block";
    try {
      (_b = window.__hekatanCancelClickClickRect) == null ? void 0 : _b.call(window);
    } catch {
    }
  }
  function pt() {
    Se.style.display = "none", Le(), $e = null;
  }
  e.rendererElm.addEventListener("pointerdown", (U) => {
    if (U.button !== 2) return;
    const J = Z(U.clientX, U.clientY);
    window.__hekatanRClickOnElement = !!J;
  }, { capture: true }), e.rendererElm.addEventListener("contextmenu", (U) => {
    const J = Z(U.clientX, U.clientY);
    if (!J) {
      pt(), window.__hekatanRClickOnElement = false;
      return;
    }
    U.preventDefault(), U.stopImmediatePropagation(), wt(U.clientX, U.clientY, { type: J.type, idx: J.idx }), window.__hekatanRClickOnElement = false;
  }, { capture: true });
  const Xt = (U) => {
    if (Se.style.display !== "block") return;
    const J = U.target;
    Se.contains(J) || Ve.contains(J) || pt();
  };
  document.addEventListener("mousedown", Xt, true), document.addEventListener("keydown", (U) => {
    U.key === "Escape" && Se.style.display === "block" && pt();
  });
  let Pt = null;
  e.rendererElm.addEventListener("pointerdown", (U) => {
    U.button === 0 && (Pt = { x: U.clientX, y: U.clientY });
  }), e.rendererElm.addEventListener("pointerup", (U) => {
    if (U.button !== 0 || !Pt) return;
    const J = U.clientX - Pt.x, ze = U.clientY - Pt.y;
    if (Pt = null, J * J + ze * ze > 9) return;
    const Q = Z(U.clientX, U.clientY);
    Q ? (F = { type: Q.type, idx: Q.idx }, jt()) : (F = null, jt());
  });
  function jt() {
    var _a, _b;
    if (W.visible = false, se.visible = false, K.visible = false, A.visible = false, !F || !e.mesh) {
      e.render();
      return;
    }
    const U = (_a = e.mesh.elements) == null ? void 0 : _a.rawVal;
    if (F.type === "node") {
      const J = C(F.idx);
      if (J) {
        const ze = e.derivedNodes.rawVal ?? [];
        let Q = 1;
        if (ze.length >= 2) {
          let Oe = [1 / 0, 1 / 0, 1 / 0], Te = [-1 / 0, -1 / 0, -1 / 0];
          for (const Ge of ze) for (let _e = 0; _e < 3; _e++) Ge[_e] < Oe[_e] && (Oe[_e] = Ge[_e]), Ge[_e] > Te[_e] && (Te[_e] = Ge[_e]);
          Q = Math.max(Te[0] - Oe[0], Te[1] - Oe[1], Te[2] - Oe[2], 0.1);
        }
        const We = ((_b = e.derivedDisplayScale) == null ? void 0 : _b.rawVal) ?? 1, Ue = 0.017 * Q * We;
        W.position.copy(J), W.scale.setScalar(Ue), W.visible = true;
      }
    } else if (F.type === "frame" && U) {
      const J = U[F.idx], ze = C(J[0]), Q = C(J[1]);
      if (ze && Q) {
        const We = ze.clone().add(Q).multiplyScalar(0.5), Ue = Q.clone().sub(ze), Oe = Ue.length(), Te = e.getActiveCamera();
        let Ge;
        if (Te.isOrthographicCamera) {
          const Ye = Te;
          Ge = (Ye.top - Ye.bottom) / Ye.zoom * 35e-4;
        } else Ge = Te.position.distanceTo(We) * 35e-4;
        se.position.copy(We);
        const _e = new m(0, 1, 0), yt = _e.clone().cross(Ue).normalize(), ut = _e.angleTo(Ue);
        se.quaternion.setFromAxisAngle(yt, ut), se.scale.set(Ge, Oe, Ge), se.visible = true;
      }
    } else if (F.type === "shell" && U) {
      const J = U[F.idx], ze = [], Q = [];
      for (const We of J) {
        const Ue = C(We);
        if (!Ue) return;
        ze.push(Ue.x, Ue.y, Ue.z);
      }
      J.length === 4 ? Q.push(0, 1, 2, 0, 2, 3) : J.length === 3 && Q.push(0, 1, 2), be.setAttribute("position", new $t(ze, 3)), be.setIndex(Q), be.computeVertexNormals(), K.visible = true;
    } else if (F.type === "solid" && U) {
      const J = U[F.idx], ze = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]], Q = [];
      for (const [We, Ue] of ze) {
        const Oe = C(J[We]), Te = C(J[Ue]);
        Oe && Te && Q.push(Oe.x, Oe.y, Oe.z, Te.x, Te.y, Te.z);
      }
      Y.setAttribute("position", new $t(Q, 3)), A.visible = true;
    }
    e.render();
  }
  return $.derive(() => {
    e.derivedNodes.val, F && jt();
  }), i;
}
function Ds(e, i, y, h, d, k) {
  const v = d - y, x = k - h, w = v * v + x * x;
  if (w < 1e-9) {
    const me = e - y, de = i - h;
    return Math.sqrt(me * me + de * de);
  }
  let _ = ((e - y) * v + (i - h) * x) / w;
  _ = Math.max(0, Math.min(1, _));
  const z = y + _ * v, b = h + _ * x, H = e - z, le = i - b;
  return Math.sqrt(H * H + le * le);
}
function Ns(e, i, y) {
  let h = false;
  for (let d = 0, k = y.length - 1; d < y.length; k = d++) {
    const v = y[d].x, x = y[d].y, w = y[k].x, _ = y[k].y;
    x > i != _ > i && e < (w - v) * (i - x) / (_ - x + 1e-12) + v && (h = !h);
  }
  return h;
}
function Fo(e, i = 8) {
  const y = document.createElement("div");
  y.id = "legend";
  const h = document.createElement("div");
  h.style.cssText = "position:absolute;top:-18px;left:50%;transform:translateX(-50%);font-size:11px;color:#bbb;white-space:nowrap;font-family:monospace", y.appendChild(h), setTimeout(() => {
    $.derive(() => {
      h.textContent = no.val ? `[${no.val}]` : "";
    });
  });
  const d = Array.from({ length: i + 1 }, (w, _) => _ / i).reverse();
  let k, v;
  d.forEach((w, _) => {
    k = document.createElement("div"), k.id = `marker-${_}`, k.className = "marker", k.style.marginTop = _ == 0 ? "0px" : `calc(${50 / i}vh - 1px)`, v = document.createElement("p"), v.id = `marker-text-${_}`, k.append(v), y.append(k);
  });
  const x = [];
  return y.querySelectorAll("p").forEach((w) => x.push(w)), setTimeout(() => {
    $.derive(() => {
      d.forEach((w, _) => {
        const z = x[_];
        z && (z.innerText = Zs(e.val, w).toString());
      });
    });
  }), y;
}
function Zs(e, i) {
  const y = ao.val;
  if (y) return (y[0] + i * (y[1] - y[0])).toPrecision(3);
  const h = e.filter((v) => Number.isFinite(v));
  if (h.length === 0) return "0";
  let d = Math.min(...h);
  const k = Math.max(...h);
  return d >= 0 && k > 0 && (d = 0), (d + i * (k - d)).toPrecision(3);
}
function ea({ mesh: e, settingsObj: i, drawingObj: y, objects3D: h, solids: d }) {
  ss.DEFAULT_UP = new m(0, 0, 1);
  const k = document.createElement("div"), v = new jo(), x = new es(45, 1, 0.1, 2 * 1e6), w = new ts(-10, 10, 10, -10, -1e3, 2e6);
  let _ = x;
  const z = new ns({ antialias: true });
  z.localClippingEnabled = true;
  const b = new ko(x, z.domElement);
  b.enableDamping = true, b.dampingFactor = 0.1, b.screenSpacePanning = true, b.zoomSpeed = 0.8, b.panSpeed = 1.2, b.rotateSpeed = 0.9, b.keyPanSpeed = 12, b.listenToKeyEvents(window), b.touches = { ONE: $n.ROTATE, TWO: $n.DOLLY_PAN }, z.domElement.addEventListener("wheel", (I) => {
    if (!I.ctrlKey && Math.abs(I.deltaX) > Math.abs(I.deltaY) * 1.5) {
      I.preventDefault();
      const oe = b.target, ce = new m().subVectors(x.position, oe), pe = new m();
      pe.crossVectors(x.up, ce).normalize();
      const Ne = ce.length() * 1e-3 * b.panSpeed;
      oe.addScaledVector(pe, I.deltaX * Ne), x.position.addScaledVector(pe, I.deltaX * Ne), b.update();
    }
  }, { passive: false });
  const H = new Qn(new m(-1, 0, 0), 0), le = new Qn(new m(0, -1, 0), 0), me = new Qn(new m(0, 0, -1), 0);
  window.__hekatanClip = window.__hekatanClip ?? { enableX: false, enableY: false, enableZ: false, posX: 0, posY: 0, posZ: 0, invertX: false, invertY: false, invertZ: false };
  function de() {
    const I = window.__hekatanClip, oe = [];
    I.enableX && (H.normal.set(I.invertX ? 1 : -1, 0, 0), H.constant = I.invertX ? -I.posX : I.posX, oe.push(H)), I.enableY && (le.normal.set(0, I.invertY ? 1 : -1, 0), le.constant = I.invertY ? -I.posY : I.posY, oe.push(le)), I.enableZ && (me.normal.set(0, 0, I.invertZ ? 1 : -1), me.constant = I.invertZ ? -I.posZ : I.posZ, oe.push(me)), z.clippingPlanes = oe, v.traverse((pe) => {
      const Le = pe;
      if (Le.material) {
        const Ne = Array.isArray(Le.material) ? Le.material : [Le.material];
        for (const mt of Ne) mt.clippingPlanes = oe, mt.needsUpdate = true;
      }
    });
    const ce = window.__hekatanPanes ?? [];
    for (const pe of ce) try {
      pe && typeof pe.refresh == "function" && pe.refresh();
    } catch {
    }
    z.render(v, _);
  }
  de(), window.__hekatanClipApply = de;
  const S = ls(i), W = $.derive(() => S.displayScale.val === 0 ? 1 : S.displayScale.val > 0 ? S.displayScale.val : -1 / S.displayScale.val), fe = Us(e, S), se = () => {
    const I = [];
    return S.gridXY.rawVal && I.push("xy"), S.gridXZ.rawVal && I.push("xz"), S.gridYZ.rawVal && I.push("yz"), I;
  }, be = () => {
    const I = S.gridStep.rawVal, oe = Math.max(I, S.gridMajor.rawVal);
    return { planes: se(), majorStep: oe, minorStep: I };
  };
  let q = On(S.gridSize.rawVal, be());
  q.visible = S.gridVisible.rawVal, window.__hekatanSnap2D = S.cursorSnap.rawVal;
  const K = () => {
    const I = Math.max(0, Math.min(1, S.gridOpacity.rawVal));
    q.traverse((oe) => {
      const ce = oe.material;
      if (!ce || !("opacity" in ce)) return;
      const pe = oe.name ?? "";
      let Le = 0.35;
      pe.includes("border") ? Le = 1 : pe.includes("major") && (Le = 0.75), ce.opacity = I * Le;
    });
  };
  K(), k.appendChild(is(S, e, d)), k.setAttribute("id", "viewer"), k.appendChild(z.domElement), z.setPixelRatio(window.devicePixelRatio);
  const Y = dn();
  z.setClearColor(Y.background, 1);
  const L = S.gridSize.rawVal, A = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
  x.position.set(0, 0, A), x.up.set(0, 1, 0), b.target.set(0, 0, 0), b.minDistance = 0.1, b.maxDistance = 1e4, k.__settings = S, b.zoomSpeed = 1;
  let F = 100, T = 0;
  z.domElement.addEventListener("wheel", (I) => {
    F = I.deltaY, T = I.deltaMode;
  }, { passive: true, capture: true }), b._getZoomScale = function() {
    const I = Math.abs(F);
    if (I >= 80 && T === 0) return Math.pow(0.9, this.zoomSpeed);
    if (T === 1) return Math.pow(0.88, this.zoomSpeed);
    const oe = Math.max(0.05, Math.min(I / 80, 1));
    return Math.pow(0.95, this.zoomSpeed * oe);
  }, b.update();
  let C = Po(S.gridSize.rawVal, S.flipAxes.rawVal);
  v.add(q, C), $.derive(() => {
    window.__hekatanGridPlaneXY = S.gridXY.val, window.__hekatanGridPlaneXZ = S.gridXZ.val, window.__hekatanGridPlaneYZ = S.gridYZ.val;
  });
  let Z = true;
  $.derive(() => {
    const I = S.gridVisible.val;
    if (Z) {
      Z = false;
      return;
    }
    q.visible = I, G();
  });
  let ne = true;
  $.derive(() => {
    if (S.gridOpacity.val, ne) {
      ne = false;
      return;
    }
    K(), G();
  }), $.derive(() => {
    const I = S.cursorSnap.val;
    window.__hekatanSnap2D = I;
  });
  let j = true;
  $.derive(() => {
    var _a;
    const I = S.gridSize.val, oe = S.flipAxes.val;
    if (S.gridXY.val, S.gridXZ.val, S.gridYZ.val, S.gridStep.val, S.gridMajor.val, j) {
      j = false;
      return;
    }
    v.remove(q), (_a = q.traverse) == null ? void 0 : _a.call(q, (Le) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Le.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Le.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), q = On(I, be()), q.visible = S.gridVisible.rawVal, v.add(q), K(), v.remove(C), C.traverse((Le) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = Le.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = Le.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), C = Po(I, oe), v.add(C);
    const ce = I * 0.5 + I * 0.5 / Math.tan(45 * 0.5);
    x.position.distanceTo(b.target), Math.abs(x.position.x) < 0.1 && Math.abs(x.position.y) < 0.1 && x.position.z > 0 ? x.position.set(0, 0, ce) : x.position.set(0.5 * I, -ce, 0.5 * I), b.target.set(0, 0, 0), b.minDistance = Math.max(0.05, I * 0.01), b.maxDistance = Math.max(50, I * 50), b.update(), G();
  }), new ResizeObserver((I) => {
    var _a, _b;
    for (const oe of I) {
      const ce = (_a = oe.target) == null ? void 0 : _a.clientWidth, pe = (_b = oe.target) == null ? void 0 : _b.clientHeight;
      if (ce === 0 || pe === 0) continue;
      const Ne = (V ? ce / 2 : ce) / pe;
      x.aspect = Ne, x.updateProjectionMatrix();
      const mt = w.top;
      if (w.left = -mt * Ne, w.right = mt * Ne, w.updateProjectionMatrix(), N && N.isPerspectiveCamera) N.aspect = Ne, N.updateProjectionMatrix();
      else if (N && N.isOrthographicCamera) {
        const Ze = N, wt = Ze.top;
        Ze.left = -wt * Ne, Ze.right = wt * Ne, Ze.updateProjectionMatrix();
      }
      z.setSize(ce, pe), G();
    }
  }).observe(k), b.addEventListener("change", G), $.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val, (_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val, (_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val, (_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val, (_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val, (_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val, S.displayScale.val, S.nodes.val, S.elements.val, (_g = S.edges) == null ? void 0 : _g.val, S.elemColumns.val, S.elemBeams.val, S.nodesIndexes.val, S.elementsIndexes.val, S.orientations.val, S.sections.val, S.secColumns.val, S.secBeams.val, S.secFloor.val, S.supports.val, S.loads.val, S.deformedShape.val, S.nodeResults.val, S.frameResults.val, S.shellResults.val, (_h = S.solidResults) == null ? void 0 : _h.val, setTimeout(G);
  });
  let V = false, N = null, ee = null, re = false;
  function G() {
    const I = k.clientWidth || 1, oe = k.clientHeight || 1;
    if (!V || !N) {
      z.setScissorTest(false), z.setViewport(0, 0, I, oe), z.render(v, _);
      return;
    }
    const ce = I / 2;
    z.setScissorTest(true), z.setViewport(0, 0, ce, oe), z.setScissor(0, 0, ce, oe), z.render(v, _), z.setViewport(ce, 0, ce, oe), z.setScissor(ce, 0, ce, oe), z.render(v, N), z.setScissorTest(false);
  }
  function Fe(I) {
    _ = I, b.object = I, b.update(), G();
  }
  function Me(I, oe) {
    V = I, oe && (N = oe);
    const ce = k.clientWidth || 1, pe = k.clientHeight || 1, Ne = (I ? ce / 2 : ce) / pe;
    x.isPerspectiveCamera && (x.aspect = Ne, x.updateProjectionMatrix());
    const mt = w.top;
    if (w.left = -mt * Ne, w.right = mt * Ne, w.updateProjectionMatrix(), I && N) {
      if (ee ? (ee.object = N, ee.update()) : (ee = new ko(N, z.domElement), ee.enableDamping = true, ee.dampingFactor = 0.1, ee.screenSpacePanning = true, ee.zoomSpeed = 0.8, ee.panSpeed = 1.2, ee.rotateSpeed = 0.9, ee.touches = { ONE: $n.ROTATE, TWO: $n.DOLLY_PAN }, ee._getZoomScale = function() {
        const Ze = Math.abs(F);
        if (Ze >= 80 && T === 0) return Math.pow(0.9, this.zoomSpeed);
        if (T === 1) return Math.pow(0.88, this.zoomSpeed);
        const wt = Math.max(0.05, Math.min(Ze / 80, 1));
        return Math.pow(0.95, this.zoomSpeed * wt);
      }, ee.target.copy(b.target), ee.addEventListener("change", G), ee.enabled = false), !re) {
        const Ze = (wt) => {
          if (!V || !ee) return;
          const pt = z.domElement.getBoundingClientRect(), Xt = wt.clientX - pt.left, Pt = pt.width / 2, jt = Xt >= Pt;
          b.enabled = !jt, ee.enabled = jt;
        };
        z.domElement.addEventListener("pointerdown", Ze, true), z.domElement.addEventListener("wheel", Ze, { capture: true, passive: true }), re = true;
      }
    } else I || (b.enabled = true, ee && (ee.enabled = false));
    k.__splitMode = I, window.__hekatanSplitMode = I, window.__hekatanSplitCamera = I ? N : null, G();
  }
  if (e) {
    v.add(rs(S, fe, W), as(e, S, fe), ps(S, fe, W), us(e, S, fe, W), cs(e, S, fe, W), ds(e, S, fe, W), ms(e, S, fe, W), ys(e, S, fe, W), bs(e, S, fe, W), xs(e, S, fe, W));
    const I = Ys({ scene: v, rendererElm: z.domElement, getActiveCamera: () => _, derivedNodes: fe, derivedDisplayScale: W, mesh: e, settings: S, render: G });
    v.add(I);
    const oe = Js(e, S), ce = zs(e, S, fe, oe), pe = Fo(oe);
    v.add(ce), k.appendChild(pe);
    const Le = Vs(e, S, fe);
    v.add(Le);
    const Ne = Le.__colorMapValues, mt = Fo(Ne);
    mt.id = "frame-legend", k.appendChild(mt), $.derive(() => {
      var _a;
      const Ze = S.shellResults.val != "none", wt = (((_a = S.solidResults) == null ? void 0 : _a.val) ?? "none") !== "none", pt = Ze || wt, Xt = S.frameResults.val.startsWith("contour:");
      pe.hidden = !pt, ce.visible = pt, mt.hidden = !Xt;
    });
  }
  if (d) {
    const I = new os(16777215, 0.5);
    v.add(I);
    const oe = new So(16777215, 0.5);
    oe.position.set(30, 25, -10), oe.shadow.mapSize.width = 1024, oe.shadow.mapSize.height = 1024, v.add(oe);
    const ce = 10;
    oe.shadow.camera.left = -ce, oe.shadow.camera.right = ce, oe.shadow.camera.top = ce, oe.shadow.camera.bottom = -ce, oe.shadow.camera.far = 1e3;
    const pe = new So(16777215, 0.5);
    pe.color.setHSL(11, 43, 96), pe.position.set(-10, 0, 30), v.add(pe), $.derive(() => {
      (d == null ? void 0 : d.val.length) && (v.remove(...d.oldVal), v.add(...d.rawVal), G());
    }), $.derive(() => {
      d.rawVal.forEach((Le) => Le.visible = S.solids.val), G();
    });
  }
  if (h) {
    const I = [], oe = (pe) => {
      var _a, _b;
      return ((_a = pe == null ? void 0 : pe.userData) == null ? void 0 : _a.isCota) ? S.showCotas.val : ((_b = pe == null ? void 0 : pe.userData) == null ? void 0 : _b.isDistLoad) ? S.loads.val : S.custom3D.val;
    }, ce = () => {
      for (const pe of I) pe.visible = oe(pe);
      G();
    };
    $.derive(() => {
      const pe = h.val;
      I.length && (v.remove(...I), I.length = 0), pe.length && (v.add(...pe), I.push(...pe), ce()), G();
    }), $.derive(() => {
      S.custom3D.val, ce();
    }), $.derive(() => {
      S.showCotas.val, ce();
    }), $.derive(() => {
      S.loads.val, ce();
    });
  }
  y && Ms({ drawingObj: y, gridObj: q, scene: v, getActiveCamera: () => _, controls: b, gridSize: L, derivedDisplayScale: W, rendererElm: z.domElement, viewerRender: G }), Vo((I, oe) => {
    var _a;
    z.setClearColor(oe.background, 1), v.remove(q), (_a = q.traverse) == null ? void 0 : _a.call(q, (ce) => {
      var _a2, _b, _c, _d;
      (_b = (_a2 = ce.geometry) == null ? void 0 : _a2.dispose) == null ? void 0 : _b.call(_a2), (_d = (_c = ce.material) == null ? void 0 : _c.dispose) == null ? void 0 : _d.call(_c);
    }), q = On(S.gridSize.rawVal, { planes: se() }), v.add(q), k.style.setProperty("--awatif-legend-color", oe.legendMarker), G();
  });
  const Se = { scene: v, perspCamera: x, orthoCamera: w, get camera() {
    return _;
  }, controls: b, renderer: z, rendererElm: z.domElement, render: G, setActiveCamera: Fe, setSplitMode: Me, get splitMode() {
    return V;
  }, get splitCamera() {
    return N;
  }, settings: S };
  k.__ctx = Se;
  const $e = document.createElement("div");
  $e.style.cssText = ["position:absolute", "right:8px", "bottom:8px", "z-index:50", "display:grid", "grid-template-columns:repeat(3, 32px)", "gap:2px", "user-select:none", "pointer-events:auto"].join(";");
  const Ve = (I, oe, ce) => {
    const pe = document.createElement("button");
    return pe.textContent = I, pe.title = oe, pe.style.cssText = ["width:32px", "height:32px", "background:rgba(40,40,40,0.85)", "color:#fff", "border:1px solid rgba(255,255,255,0.15)", "border-radius:4px", "cursor:pointer", "font-size:14px", "font-family:system-ui"].join(";"), pe.onmouseenter = () => {
      pe.style.background = "rgba(70,70,70,0.9)";
    }, pe.onmouseleave = () => {
      pe.style.background = "rgba(40,40,40,0.85)";
    }, pe.onclick = (Le) => {
      Le.preventDefault(), ce();
    }, pe;
  }, St = (I, oe) => {
    const ce = b.target, pe = new m().subVectors(_.position, ce), Le = pe.length(), Ne = new m(), mt = new m();
    Ne.crossVectors(_.up, pe).normalize(), mt.copy(_.up).normalize();
    const Ze = Le * 0.05;
    ce.addScaledVector(Ne, -I * Ze), ce.addScaledVector(mt, oe * Ze), _.position.addScaledVector(Ne, -I * Ze), _.position.addScaledVector(mt, oe * Ze), b.update(), G();
  }, kt = (I) => {
    const oe = new m().subVectors(_.position, b.target);
    oe.multiplyScalar(I), _.position.copy(b.target).add(oe), b.update(), G();
  }, dt = () => {
    const I = document.createElement("div");
    return I.style.cssText = "width:32px;height:32px;", I;
  };
  return $e.append(dt()), $e.append(Ve("\u2191", "Pan arriba", () => St(0, 1))), $e.append(Ve("\u2295", "Zoom in", () => kt(0.85))), $e.append(Ve("\u2190", "Pan izquierda", () => St(-1, 0))), $e.append(Ve("\u2302", "Reset vista", () => {
    b.reset(), G();
  })), $e.append(Ve("\u2192", "Pan derecha", () => St(1, 0))), $e.append(Ve("\u2296", "Zoom out", () => kt(1.18))), $e.append(Ve("\u2193", "Pan abajo", () => St(0, -1))), $e.append(dt()), getComputedStyle(k).position === "static" && (k.style.position = "relative"), k.appendChild($e), k;
}
function Us(e, i) {
  return $.derive(() => {
    var _a, _b, _c, _d;
    if (!i.deformedShape.val) return ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) ?? [];
    const y = ((_b = e == null ? void 0 : e.nodes) == null ? void 0 : _b.val) ?? [], h = (_d = (_c = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!h || y.length === 0) return y;
    const d = i.deformScale.val, k = i.deformScale.val * i.deformScaleZ.val, v = Number.isFinite(d) ? d : 1, x = Number.isFinite(k) ? k : 1;
    return y.map((w, _) => {
      var _a2;
      const z = ((_a2 = h.get(_)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0], b = Number.isFinite(z[0]) ? z[0] : 0, H = Number.isFinite(z[1]) ? z[1] : 0, le = Number.isFinite(z[2]) ? z[2] : 0;
      return [w[0] + b * v, w[1] + H * v, w[2] + le * x];
    });
  });
}
const ao = $.state(null), no = $.state(""), Ks = $.state("kN"), Hs = $.state("mm"), Ws = $.state("kN/m\xB2"), Gs = { kN: 1, tonf: 9.80665, kip: 4.4482216 }, Eo = { mm: 1e3, cm: 100, m: 1, in: 39.3700787402 }, qs = { "kN/m\xB2": 1, kPa: 1, MPa: 1 / 1e3, GPa: 1 / 1e6, "kgf/cm\xB2": 1 / 98.0665, "tonf/m\xB2": 1 / 9.80665, psi: 1 / 6.89476, ksi: 1 / 6894.76 };
function Js(e, i) {
  const y = $.state([]);
  let h;
  return ((d) => {
    d.bendingXX = "bendingXX", d.bendingYY = "bendingYY", d.bendingXY = "bendingXY", d.membraneXX = "membraneXX", d.membraneYY = "membraneYY", d.membraneXY = "membraneXY", d.tranverseShearX = "tranverseShearX", d.tranverseShearY = "tranverseShearY", d.vonMises = "vonMises", d.membranePrincipalMax = "membranePrincipalMax", d.membranePrincipalMin = "membranePrincipalMin", d.bendingPrincipalMax = "bendingPrincipalMax", d.bendingPrincipalMin = "bendingPrincipalMin", d.transverseShearMax = "transverseShearMax", d.pressure = "pressure", d.displacementX = "displacementX", d.displacementY = "displacementY", d.displacementZ = "displacementZ";
  })(h || (h = {})), $.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2, _p, _q, _r, _s2, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const d = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), se = (St, kt) => {
      St == null ? void 0 : St.forEach((dt, I) => {
        const oe = e.elements.val[I];
        if (oe) for (let ce = 0; ce < oe.length; ce++) kt.set(oe[ce], [dt[ce] ?? dt[0]]);
      });
    };
    se((_b = (_a = e.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, d), se((_d = (_c = e.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, k), se((_f = (_e = e.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, v), se((_h = (_g = e.analyzeOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.membraneXX, x), se((_j = (_i = e.analyzeOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.membraneYY, w), se((_l = (_k = e.analyzeOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.membraneXY, _), se((_n = (_m = e.analyzeOutputs) == null ? void 0 : _m.val) == null ? void 0 : _n.tranverseShearX, z), se((_p = (_o2 = e.analyzeOutputs) == null ? void 0 : _o2.val) == null ? void 0 : _p.tranverseShearY, b), se((_r = (_q = e.analyzeOutputs) == null ? void 0 : _q.val) == null ? void 0 : _r.vonMises, H), se((_t = (_s2 = e.analyzeOutputs) == null ? void 0 : _s2.val) == null ? void 0 : _t.membranePrincipalMax, le), se((_v = (_u = e.analyzeOutputs) == null ? void 0 : _u.val) == null ? void 0 : _v.membranePrincipalMin, me), se((_x = (_w = e.analyzeOutputs) == null ? void 0 : _w.val) == null ? void 0 : _x.bendingPrincipalMax, de), se((_z = (_y = e.analyzeOutputs) == null ? void 0 : _y.val) == null ? void 0 : _z.bendingPrincipalMin, S), se((_B = (_A = e.analyzeOutputs) == null ? void 0 : _A.val) == null ? void 0 : _B.transverseShearMax, W), se((_D = (_C = e.analyzeOutputs) == null ? void 0 : _C.val) == null ? void 0 : _D.pressure, fe);
    const be = (_F = (_E = e.analyzeOutputs) == null ? void 0 : _E.val) == null ? void 0 : _F.colorMapRanges, q = (_G = i.solidResults) == null ? void 0 : _G.val, Y = q && q !== "none" ? q : i.shellResults.val, L = be == null ? void 0 : be[Y], A = { bendingXX: [d, 0], bendingYY: [k, 0], bendingXY: [v, 0], membraneXX: [x, 0], membraneYY: [w, 0], membraneXY: [_, 0], tranverseShearX: [z, 0], tranverseShearY: [b, 0], vonMises: [H, 0], membranePrincipalMax: [le, 0], membranePrincipalMin: [me, 0], bendingPrincipalMax: [de, 0], bendingPrincipalMin: [S, 0], transverseShearMax: [W, 0], pressure: [fe, 0], displacementX: [(_I = (_H = e.deformOutputs) == null ? void 0 : _H.val) == null ? void 0 : _I.deformations, 0], displacementY: [(_K = (_J = e.deformOutputs) == null ? void 0 : _J.val) == null ? void 0 : _K.deformations, 1], displacementZ: [(_M = (_L = e.deformOutputs) == null ? void 0 : _L.val) == null ? void 0 : _M.deformations, 2] }, F = i.shellResults.val, T = Ks.val, C = Hs.val, Z = F === "displacementX" || F === "displacementY" || F === "displacementZ", ne = F === "bendingXX" || F === "bendingYY" || F === "bendingXY" || F === "bendingPrincipalMax" || F === "bendingPrincipalMin", j = F === "membraneXX" || F === "membraneYY" || F === "membraneXY" || F === "membranePrincipalMax" || F === "membranePrincipalMin", ae = F === "vonMises" || F === "pressure", V = F === "tranverseShearX" || F === "tranverseShearY" || F === "transverseShearMax", N = (_N = i.solidResults) == null ? void 0 : _N.val, ee = N === "vonMises" || N === "sigmaXX" || N === "sigmaYY" || N === "sigmaZZ" || N === "tauXY" || N === "tauYZ" || N === "tauXZ", re = N === "ux" || N === "uy" || N === "uz", G = Ws.val, Fe = ee ? qs[G] : re || Z ? Eo[C] : ne || j || ae || V ? 1 / Gs[T] : 1, Me = ee ? G : re || Z ? C : ne ? `${T}\xB7m/m` : j ? `${T}/m\xB2` : ae ? `${T}/m\xB2` : V ? `${T}/m` : "";
    no.val = Me, ao.val = Array.isArray(L) && L.length === 2 ? [L[0] * Fe, L[1] * Fe] : null;
    const $e = N && N !== "none" ? [H, 0] : A[F], Ve = [];
    e.nodes.val.forEach((St, kt) => {
      const dt = $e;
      if (!dt || !dt[0] || typeof dt[0].has != "function") return;
      if (!dt[0].has(kt)) {
        Ve.push(Number.NaN);
        return;
      }
      const I = dt[0].get(kt), oe = I ? I[dt[1]] ?? 0 : 0;
      Ve.push(oe * Fe);
    }), y.val = Ve;
  }), y;
}
export {
  Hs as a,
  Ws as b,
  Ks as c,
  Ps as d,
  Fo as e,
  ea as g
};
